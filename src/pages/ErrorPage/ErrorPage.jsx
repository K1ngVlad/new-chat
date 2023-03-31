import { Link } from 'react-router-dom/dist';

import { chat_path } from '../../routes/paths';

import s from './style.module.scss';

const ErrorPage = () => {
  return (
    <div className={s.errorPage}>
      <span className={s.status}>404</span>
      <p>Оой...Мы не нашли запрашиваемую страницу.</p>
      <Link to={chat_path}>
        <button>Вернуться обратно</button>
      </Link>
    </div>
  );
};

export { ErrorPage };
