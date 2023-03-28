import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from 'firebase/auth';
import { chat_path } from '../../../routes';
import { setUser } from '../../../store/slices/userSlice';

const register = async (state, dispatch, navigate, setError) => {
  const { name, email, password, repeatPassword } = state;

  try {
    if (password !== repeatPassword) {
      throw new SyntaxError('Пароли не совпадают');
    }

    const auth = getAuth();
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
    navigate(chat_path);
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage);
    console.error(errorMessage, errorCode);
    setError(errorMessage);
  }
};

export { register };
