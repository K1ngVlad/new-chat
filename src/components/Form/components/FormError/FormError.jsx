import s from './style.module.scss';

const FormError = (props) => {
  console.log('рендер');
  return <p className={s.formError}>{props.children}</p>;
};

export { FormError };
