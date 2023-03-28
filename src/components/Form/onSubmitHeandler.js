import { login, register } from './actions';

const onSubmitHeandler = async (
  e,
  formType,
  state,
  dispatch,
  navigate,
  setError
) => {
  e.preventDefault();
  console.log('началось...');
  try {
    switch (formType) {
      case 'login':
        login(state, dispatch, navigate, setError);
        break;

      case 'register':
        register(state, dispatch, navigate, setError);
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
