import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { setUser } from '../../../store/slices/userSlice';
import { errorHeandler } from './errorHeandler';

const login = async (state, dispatch, setError) => {
  try {
    const { email, password } = state;
    const auth = getAuth();
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;

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

export { login };
