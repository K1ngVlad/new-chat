import { recovery_path, register_path } from '../../routes';

const api = [
  {
    type: 'input',
    inputType: 'text',
    title: 'Email',
    id: 0,
  },
  {
    type: 'input',
    inputType: 'password',
    title: 'Password',
    linkTitle: 'Forgot password?',
    linkUrl: recovery_path,
    id: 1,
  },
  {
    type: 'button',
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
