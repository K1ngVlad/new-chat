import { useDispatch } from 'react-redux';
import s from './style.module.scss';
import { setCurrentChat } from '../../../../store/slices/chatSlice';

const ChatElem = (props) => {
  const dispatch = useDispatch();
  const onClickHeandler = () => {
    dispatch(setCurrentChat(props.id));
  };
  return (
    <div onClick={onClickHeandler} className={s.chatElem}>
      <img alt="img" src={props.img} />
      <div className={s.info}>
        <h3>{props.name}</h3>
        <p>{props.lastMessage || 'Начните общение...'}</p>
      </div>
    </div>
  );
};

export { ChatElem };
