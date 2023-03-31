const errorHeandler = (error, setError) => {
  switch (error) {
    case 'Firebase: Error (auth/invalid-email).':
      setError('Укажите действительный адресс почты');
      break;
    case 'Firebase: Error (auth/user-not-found).':
      setError('Пользователь с такой почтой не найден');
      break;
    case 'Firebase: Password should be at least 6 characters (auth/weak-password).':
      setError('Пароль должен содержать как миниум 6 символов');
      break;
    case 'Firebase: Error (auth/wrong-password).':
      setError('Неверный пароль');
      break;
    case "Client: Error (passwords don't match)":
      setError('Пароли не совпадают');
      break;
    case 'Client: Error (user name less than 3 characters)':
      setError('Имя не может быть короче 3 символов');
      break;

    default:
      console.log(error);
      setError('Неизвестная ошибка');
      break;
  }
};

export { errorHeandler };
