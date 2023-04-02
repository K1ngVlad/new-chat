import { chat_path } from '../../routes';

const api = [
  {
    type: 'choisenPhoto',
    title: 'Выберете аватар',
    id: 1,
  },
  {
    type: 'button',
    relation: 'avatar',
    title: 'Подтвердить',
    id: 2,
  },
  {
    type: 'text',
    color: 'grey',
    text: '',
    linkText: 'Позже',
    linkUrl: chat_path,
    id: 3,
  },
];

export { api };
