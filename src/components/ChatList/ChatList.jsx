import { useDispatch, useSelector } from 'react-redux';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { collection, orderBy, query } from 'firebase/firestore';
import pencil from '../../assets/svg/pencil.svg';

import s from './style.module.scss';
import { useContext, useEffect } from 'react';
import { GlobalContext, PopupContext } from '../../context';
import { addGroup } from './addGroup';
import { Loading } from '../Loading/Loading';
import { setChats } from '../../store/slices/chatSlice';
import { ChatElem } from './components';

const ChatList = () => {
  const { db } = useContext(GlobalContext);
  const { setPopup } = useContext(PopupContext);
  const [chats, loading] = useCollectionData(
    query(collection(db, 'chats'), orderBy('lastMessageCreatedAt'))
  );
  const dispatch = useDispatch();
  const currentChats = useSelector((state) => state.chat.chats);

  useEffect(() => {
    if (chats) {
      dispatch(
        setChats(
          chats.map((e) => ({
            ...e,
            createdAt: e.createdAt.toString(),
            lastMessageCreatedAt: e.lastMessageCreatedAt.toString(),
          }))
        )
      );
    }

    console.log('слайс');
  }, [chats, dispatch]);

  if (loading) {
    <Loading />;
  }

  return (
    <div className={s.chatList}>
      {currentChats.map((e) => {
        return <ChatElem {...e} key={e.id} />;
      })}
      <button onClick={() => addGroup(setPopup)} className={s.addBtn}>
        <img alt="add" src={pencil} />
      </button>
    </div>
  );
};

export { ChatList };
