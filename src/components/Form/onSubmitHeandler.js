import { login, register } from './actions';

const onSubmitHeandler = async (
  e,
  formType,
  state,
  dispatch,
  setError,
  auth,
  navigate
) => {
  e.preventDefault();
  try {
    switch (formType) {
      case 'login':
        login(state, dispatch, setError, auth, navigate);
        break;

      case 'register':
        register(state, dispatch, setError, auth, navigate);
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
