import s from './style.module.scss';

const Form = (props) => {
  return (
    <main className={s.container}>
      <h1>{props.title}</h1>
      <form>
        <div className={s.box}>{props.children}</div>
      </form>
    </main>
  );
};

export { Form };
