import { login_path } from '../../routes';

const api = [
  {
    type: 'input',
    inputType: 'text',
    title: 'Name',
    name: 'name',
    id: 4,
  },
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
    name: 'password',
    id: 1,
  },
  {
    type: 'input',
    inputType: 'password',
    title: 'Repeat password',
    name: 'Repeat password',
    id: 6,
  },
  {
    type: 'button',
    title: 'Register',
    id: 2,
  },
  {
    type: 'text',
    text: 'Have account?',
    linkText: 'Login',
    linkUrl: login_path,
    id: 3,
  },
];

export { api };
