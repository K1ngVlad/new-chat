import { signInWithEmailAndPassword } from 'firebase/auth';

import { setUser } from '../../../store/slices/userSlice';
import { errorHeandler } from './errorHeandler';

const login = async (state, dispatch, setError, auth) => {
  try {
    const { email, password } = state;
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;

    const userData = {
      name: user.displayName,
      email: user.email,
      id: user.uid,
      password: user.password,
      avatar: user.photoURL,
    };

    dispatch(
      setUser({
        userData,
      })
    );
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.error(errorMessage, errorCode);
    errorHeandler(errorMessage, setError);
  }
};

export { login };
