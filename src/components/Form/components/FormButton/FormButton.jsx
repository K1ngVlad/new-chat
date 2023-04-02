import { useContext } from 'react';
import s from './style.module.scss';
import { FormContext } from '../../FormContext';

const FormButton = (props) => {
  const { className, title, relation } = props;
  const { avatar } = useContext(FormContext);
  let relationClass;
  if (relation === 'avatar') {
    relationClass = !avatar && 'grey';
  }
  return (
    <button className={`${s.formButton} ${className} ${s[relationClass]}`}>
      {title}
    </button>
  );
};

export { FormButton };
