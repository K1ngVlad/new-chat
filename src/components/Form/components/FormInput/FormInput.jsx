import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FormContext } from '../../';
import { onChangeHeandler } from './onChangeHeandler';

import s from './style.module.scss';

const FormInput = (props) => {
  const { title, linkTitle, linkUrl, inputType, name } = props;
  const state = useContext(FormContext);
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
      <input
        onChange={(e) => {
          onChangeHeandler(e, name, state);
        }}
        value={state[name]}
        type={inputType}
        name={name}
        required
      />
    </div>
  );
};

export { FormInput };
