import { formComponentRender } from '../../components/Form';
import { Form, List } from '../../components';
import { api } from './api';

const RegisterPage = () => {
  return (
    <Form title="Register" formType="register">
      <List elems={api} func={formComponentRender}></List>
    </Form>
  );
};

export { RegisterPage };
