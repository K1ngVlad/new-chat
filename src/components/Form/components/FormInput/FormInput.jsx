import { Link } from 'react-router-dom';

import s from './style.module.scss';

const FormInput = (props) => {
  const { title, linkTitle, linkUrl, inputType } = props;
  return (
    <div className={`${s.formInput} ${props.className}`}>
      <div className={s.title}>
        <h3>{title}</h3>
        {linkTitle && (
          <Link to={linkUrl} className={s.link}>
            {linkTitle}
          </Link>
        )}
      </div>
      <input type={inputType} required />
    </div>
  );
};

export { FormInput };
