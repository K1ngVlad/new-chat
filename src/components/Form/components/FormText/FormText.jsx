import { Link } from 'react-router-dom';

import s from './style.module.scss';

const FormText = (props) => {
  const { className, text, linkUrl, linkText } = props;
  return (
    <p className={`${s.formText} ${className}`}>
      {text}{' '}
      <Link to={linkUrl} className={s.link}>
        {linkText}
      </Link>
    </p>
  );
};

export { FormText };
