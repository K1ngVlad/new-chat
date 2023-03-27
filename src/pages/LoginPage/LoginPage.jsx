import { Form, formComponentRender } from '../../components/Form';
import { List } from '../../components/List';
import { api } from './api';

const LoginPage = () => {
  return (
    <Form title="Login">
      <List elems={api} func={formComponentRender}></List>
    </Form>
  );
};

export { LoginPage };
