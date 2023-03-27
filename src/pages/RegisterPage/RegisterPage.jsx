import { formComponentRender } from '../../components/Form';
import { Form, List } from '../../components';
import { api } from './api';

const RegisterPage = () => {
  return (
    <Form title="Register">
      <List elems={api} func={formComponentRender}></List>
    </Form>
  );
};

export { RegisterPage };
