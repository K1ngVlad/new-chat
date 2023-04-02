import { login, register, setAvatar } from './actions';

const onSubmitHeandler = async (
  e,
  formType,
  state,
  dispatch,
  setError,
  auth,
  navigate,
  db
) => {
  e.preventDefault();
  try {
    switch (formType) {
      case 'login':
        login(state, dispatch, setError, auth);
        break;

      case 'register':
        register(state, dispatch, setError, auth, navigate, db);
        break;

      case 'avatar':
        setAvatar(state, dispatch, setError, auth, navigate, db);
        break;

      default:
        throw new SyntaxError(
          'Неизвестный запрос, попробуйте обновить страницу'
        );
    }
  } catch (error) {
    console.log('пиздец');
    const errorCode = error.code;
    const errorMessage = error.message;
    console.error(errorMessage, errorCode);
    setError(errorMessage);
  }
};

export { onSubmitHeandler };
