import {
  ChatPage,
  ErrorPage,
  LoginPage,
  RedirectPage,
  RegisterPage,
} from '../pages';
import { AvatarPage } from '../pages/AvatarPage/AvatarPage';

import {
  any_path,
  avatar_path,
  chat_path,
  home_path,
  login_path,
  main_path,
  none_path,
  register_path,
} from './paths';

const routes = [
  {
    path: chat_path,
    Component: ChatPage,
  },
  {
    path: login_path,
    Component: LoginPage,
  },
  {
    path: register_path,
    Component: RegisterPage,
  },
  {
    path: avatar_path,
    Component: AvatarPage,
  },
  {
    path: none_path,
    Component: RedirectPage,
  },
  {
    path: main_path,
    Component: RedirectPage,
  },
  {
    path: home_path,
    Component: RedirectPage,
  },
  {
    path: any_path,
    Component: ErrorPage,
  },
];

export { routes };
