import { Link } from 'react-router-dom/dist';

import { chat_path } from '../../routes/paths';

import s from './style.module.scss';

const ErrorPage = () => {
  return (
    <div className={s.errorPage}>
      Такой страницы не существует
      <Link to={chat_path}>Вернуться в чат</Link>
    </div>
  );
};

export { ErrorPage };
