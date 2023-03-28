import { useSelector } from 'react-redux';

const useAuth = () => {
  console.log('Алло');
  const user = useSelector((state) => state.user);
  console.log(user);
  const { name, email, token, id } = useSelector((state) => state.user);
  console.log(name, email, token, id);
  return {
    isAuth: name && email && token && id,
    name,
    email,
    token,
    id,
  };
};

export { useAuth };
