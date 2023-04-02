import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { ChatElem } from './ChatElem';
import { addGroup } from './addGroup';

import s from './style.module.scss';

const ChatList = () => {
  const [list, setList] = useState('groups');
  const { availableChats, availableGroups } = useSelector(
    (state) => state.chat
  );
  const dispath = useDispatch();
  return (
    <div className={s.chatList}>
      <div className={s.head}>Messages</div>
      <div className={s.body}></div>
    </div>
  );
};

export { ChatList };
