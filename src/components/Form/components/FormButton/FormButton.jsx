import s from './style.module.scss';

const FormButton = (props) => {
  return (
    <button className={`${s.formButton} ${props.className}`}>
      {props.title}
    </button>
  );
};

export { FormButton };
