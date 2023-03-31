import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate } from 'react-router-dom';
import { useContext } from 'react';
import { formComponentRender } from '../../components/Form';
import { Form, List, Loading } from '../../components/';
import { chat_path } from '../../routes';
import { GlobalContext } from '../../context';

import { api } from './api';

const LoginPage = () => {
  const { auth } = useContext(GlobalContext);
  const [user, loading] = useAuthState(auth);
  if (loading) {
    return <Loading />;
  }
  if (user) {
    return <Navigate to={chat_path} />;
  }
  return (
    <Form title="Login" formType="login">
      <List elems={api} func={formComponentRender}></List>
    </Form>
  );
};

export { LoginPage };
