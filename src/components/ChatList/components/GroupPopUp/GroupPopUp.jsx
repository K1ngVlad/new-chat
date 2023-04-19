import { useContext, useState } from 'react';
import {
  doc,
  addDoc,
  collection,
  updateDoc,
  Timestamp,
} from 'firebase/firestore';

import userAvatar from '../../../../assets/svg/userAvatar.svg';

import s from './style.module.scss';
import { GlobalContext, PopupContext } from '../../../../context';
import { onChangeHeandler } from './onCHangeHeandler';

const GroupPopUp = () => {
  const [img, setImg] = useState(null);
  const [name, setName] = useState('');
  const { storage, auth, db } = useContext(GlobalContext);
  const { setPopup } = useContext(PopupContext);

  const addChatHeandler = async () => {
    const docRef = await addDoc(collection(db, 'chats'), {
      name,
      img,
      createdAt: Timestamp.fromDate(new Date()),
      lastMessageCreatedAt: Timestamp.fromDate(new Date()),
    });
    await updateDoc(docRef, {
      id: `chat-${docRef.id}`,
    });
    console.log('id добавлен');
    setPopup(null);
  };

  return (
    <>
      <div className={s.groupInfo}>
        <div className={s.setImg}>
          <input
            type="file"
            accept="image/*,.png,.svg,.jpg,.gif,.web,"
            onChange={(e) => onChangeHeandler(e, setImg, storage, auth)}
          />
          <img alt="img" src={img || userAvatar} />
        </div>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          required
        />
      </div>
      <div className={s.btnBox}>
        <button onClick={addChatHeandler}>Создать</button>
      </div>
    </>
  );
};

export { GroupPopUp };
