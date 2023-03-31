import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from 'firebase/auth';
import { setUser } from '../../../store/slices/userSlice';
import { errorHeandler } from './errorHeandler';

const register = async (state, dispatch, setError) => {
  const { name, email, password, repeatPassword } = state;

  try {
    if (name.length < 3) {
      throw new SyntaxError('Client: Error (user name less than 3 characters)');
    }
    if (password !== repeatPassword) {
      throw new SyntaxError("Client: Error (passwords don't match)");
    }

    const auth = getAuth();
    console.log(auth);
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    console.log('Аккаунт создан');
    const user = userCredential.user;
    await updateProfile(user, { displayName: name });
    console.log('Имя добавлено');
    console.log(user);
    dispatch(
      setUser({
        name: user.displayName,
        email: user.email,
        id: user.uid,
        token: user.accessToken,
      })
    );
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.error(errorMessage, errorCode);
    errorHeandler(errorMessage, setError);
  }
};

export { register };
