import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';

import { setUser } from '../../../store/slices/userSlice';
import { errorHeandler } from './errorHeandler';
import { avatar_path } from '../../../routes';

const register = async (state, dispatch, setError, auth, navigate, db) => {
  const { name, email, password, repeatPassword } = state;

  try {
    if (name.length < 3) {
      throw new SyntaxError('Client: Error (user name less than 3 characters)');
    }
    if (password !== repeatPassword) {
      throw new SyntaxError("Client: Error (passwords don't match)");
    }

    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    console.log('Аккаунт создан');
    const user = userCredential.user;
    await updateProfile(user, { displayName: name });
    console.log(user);
    const userData = {
      name,
      email,
      password,
      id: user.uid,
    };
    await setDoc(doc(db, 'users', user.uid), userData);
    dispatch(setUser(userData));
    navigate(avatar_path);
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.error(errorMessage, errorCode);
    errorHeandler(errorMessage, setError);
  }
};

export { register };
