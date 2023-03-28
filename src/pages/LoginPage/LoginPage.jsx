import { formComponentRender } from '../../components/Form';
import { Form, List } from '../../components/';
import { api } from './api';

const LoginPage = () => {
  return (
    <Form title="Login" formType="login">
      <List elems={api} func={formComponentRender}></List>
    </Form>
  );
};

export { LoginPage };
