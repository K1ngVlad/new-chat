import { ChoisenPhoto, FormButton, FormInput, FormText } from './components';

import s from './style.module.scss';

const formComponentRender = (elem) => {
  let Component = null;
  switch (elem.type) {
    case 'input':
      Component = FormInput;
      break;
    case 'button':
      Component = FormButton;
      break;
    case 'text':
      Component = FormText;
      break;
    case 'choisenPhoto':
      Component = ChoisenPhoto;
      break;
    default:
      break;
  }

  return <Component {...elem} key={elem.id} className={s.formComponent} />;
};

export { formComponentRender };
