import { useContext, useState } from 'react';
import { useDispatch } from 'react-redux';
import { FormError } from './components/';
import { FormContext } from './FormContext';
import { onSubmitHeandler } from './onSubmitHeandler';
import s from './style.module.scss';
import { GlobalContext } from '../../context';
import { useNavigate } from 'react-router-dom';

const Form = (props) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [avatar, setAvatar] = useState(null);
  const [error, setError] = useState(null);

  const { auth, db } = useContext(GlobalContext);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const state = {
    name,
    setName,
    email,
    setEmail,
    password,
    setPassword,
    repeatPassword,
    setRepeatPassword,
    avatar,
    setAvatar,
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
              setError,
              auth,
              navigate,
              db
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
