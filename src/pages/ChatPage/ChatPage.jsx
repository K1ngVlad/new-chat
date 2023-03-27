import { Navigate } from 'react-router-dom/dist';

import { login_path } from '../../routes';

import s from './style.module.scss';

const ChatPage = () => {
  const user = false;

  if (!user) {
    return <Navigate to={login_path} />;
  }

  return <div className={s.chatPage}></div>;
};

export { ChatPage };
