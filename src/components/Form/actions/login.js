import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { chat_path } from '../../../routes';
import { setUser } from '../../../store/slices/userSlice';

const login = async (state, dispatch, navigate) => {
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

  navigate(chat_path);
};

export { login };
