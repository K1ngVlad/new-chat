import { useDispatch, useSelector } from 'react-redux';

import pencil from '../../assets/svg/pencil.svg';

import s from './style.module.scss';
import { useContext } from 'react';
import { PopupContext } from '../../context';
import { addGroup } from './addGroup';

const ChatList = () => {
  const { setPopup } = useContext(PopupContext);

  return (
    <div className={s.chatList}>
      <button onClick={() => addGroup(setPopup)} className={s.addBtn}>
        <img alt="add" src={pencil} />
      </button>
    </div>
  );
};

export { ChatList };
