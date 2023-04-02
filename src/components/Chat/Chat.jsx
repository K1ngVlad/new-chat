import s from './style.module.scss';

const Chat = () => {
  return (
    <div className={s.chat}>
      <div className={s.head}></div>
      <div className={s.body}></div>
      <div className={s.foot}></div>
    </div>
  );
};

export { Chat };
