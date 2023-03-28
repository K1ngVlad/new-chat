import { recovery_path, register_path } from '../../routes';

const api = [
  {
    type: 'input',
    inputType: 'text',
    title: 'Email',
    name: 'email',
    id: 0,
  },
  {
    type: 'input',
    inputType: 'password',
    title: 'Password',
    linkTitle: 'Forgot password?',
    linkUrl: recovery_path,
    name: 'password',
    id: 1,
  },
  {
    type: 'button',
    submitType: 'login',
    title: 'Login',
    id: 2,
  },
  {
    type: 'text',
    text: 'Don’t have account?',
    linkText: 'Create new account',
    linkUrl: register_path,
    id: 3,
  },
];

export { api };
