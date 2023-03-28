import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { FormError } from './components/';
import { FormContext } from './FormContext';
import { onSubmitHeandler } from './onSubmitHeandler';
import s from './style.module.scss';

const Form = (props) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [error, setError] = useState(null);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const state = {
    name,
    setName,
    email,
    setEmail,
    password,
    setPassword,
    repeatPassword,
    setRepeatPassword,
  };

  return (
    <FormContext.Provider value={state}>
      <main className={s.container}>
        <h1>{props.title}</h1>
        <form
          onSubmit={(e) =>
            onSubmitHeandler(
              e,
              props.formType,
              state,
              dispatch,
              navigate,
              setError
            )
          }
        >
          <div className={s.box}>
            {error && <FormError>{error}</FormError>}
            {props.children}
          </div>
        </form>
      </main>
    </FormContext.Provider>
  );
};

export { Form };
