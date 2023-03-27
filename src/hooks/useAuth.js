import { useSelector } from 'react-redux';

const useAuth = () => {
  const { name, email, token, id } = useSelector((state) => state.user);

  return {
    isAuth: name && email && token && id,
    name,
    email,
    token,
    id,
  };
};

export { useAuth };
