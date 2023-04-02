import { Navigate } from 'react-router-dom/dist';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
import { useContext } from 'react';

import { login_path } from '../../routes';
import { GlobalContext } from '../../context';
import { Chat, ChatList, Loading } from '../../components';

import userAvatar from '../../assets/svg/userAvatar.svg';

import s from './style.module.scss';

const ChatPage = () => {
  const { auth } = useContext(GlobalContext);
  const [user, loading] = useAuthState(auth);

  if (loading) {
    return <Loading />;
  }

  if (!user) {
    return <Navigate to={login_path} />;
  }

  return (
    <div className={s.chatPage}>
      <ChatList />
      <Chat />
      {/* Пользователь вошёл
      <img alt="avatar" src={user.photoURL ? user.photoURL : userAvatar} />
      <button onClick={() => signOut(auth)}>Выйти</button> */}
    </div>
  );
};

export { ChatPage };
