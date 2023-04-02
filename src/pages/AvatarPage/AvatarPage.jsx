import { useContext } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Form, List, Loading } from '../../components';
import { Navigate } from 'react-router-dom';
import { chat_path } from '../../routes';
import { formComponentRender } from '../../components/Form';
import { GlobalContext } from '../../context';
import { api } from './api';

const AvatarPage = () => {
  const { auth } = useContext(GlobalContext);
  const [user, loading] = useAuthState(auth);
  if (loading) {
    return <Loading />;
  }
  if (user.photoURL) {
    return <Navigate to={chat_path} />;
  }

  return (
    <Form title="Avatar" formType="avatar">
      <List elems={api} func={formComponentRender}></List>
    </Form>
  );
};

export { AvatarPage };
