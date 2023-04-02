import { Link } from 'react-router-dom';

import s from './style.module.scss';

const FormText = (props) => {
  const { className, text, linkUrl, linkText, color } = props;
  return (
    <p className={`${s.formText} ${className} ${s[color]}`}>
      {text}{' '}
      <Link to={linkUrl} className={`${s.link} ${s[color]}`}>
        {linkText}
      </Link>
    </p>
  );
};

export { FormText };
