import { Navigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useContext } from 'react';

import { formComponentRender } from '../../components/Form';
import { Form, List, Loading } from '../../components';
import { chat_path } from '../../routes';
import { GlobalContext } from '../../context';

import { api } from './api';

const RegisterPage = () => {
  const { auth } = useContext(GlobalContext);
  const [user, loading] = useAuthState(auth);

  if (loading) {
    return <Loading />;
  }

  if (user) {
    return <Navigate to={chat_path} />;
  }

  return (
    <Form title="Register" formType="register">
      <List elems={api} func={formComponentRender}></List>
    </Form>
  );
};

export { RegisterPage };
