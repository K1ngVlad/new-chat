import s from './style.module.scss';

const FormButton = (props) => {
  const { className, title } = props;

  return <button className={`${s.formButton} ${className}`}>{title}</button>;
};

export { FormButton };
