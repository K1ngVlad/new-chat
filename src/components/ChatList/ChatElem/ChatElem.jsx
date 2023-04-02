import plus from '../../../assets/svg/plus.svg';

import s from './style.module.scss';

const ChatElem = (props) => {
  if (props.type === 'add') {
    return (
      <div onClick={props.onClick} className={s.chatElemAdd}>
        <img alt="+" className={s.addImg} src={plus} />
        <span className={s.addText}>add</span>
      </div>
    );
  }
  return <div className={s.chatElem}></div>;
};

export { ChatElem };
