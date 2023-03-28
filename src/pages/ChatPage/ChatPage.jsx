import { Navigate } from 'react-router-dom/dist';

import { login_path } from '../../routes';

import { useAuth } from '../../hooks/index';

import s from './style.module.scss';

const ChatPage = () => {
  const { isAuth } = useAuth();
  if (!isAuth) {
    return <Navigate to={login_path} />;
  }

  return <div className={s.chatPage}>Чат открыт</div>;
};

export { ChatPage };
