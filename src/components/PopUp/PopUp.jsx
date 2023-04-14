import { useContext } from 'react';

import { PopupContext } from '../../context';

import cross from '../../assets/svg/cross.svg';

import s from './style.module.scss';

const PopUp = () => {
  const { popUp } = useContext(PopupContext);
  return (
    <div className={s.popUp}>
      <div className={s.container}>
        <button className={s.close}>
          <img alt="X" src={cross} />
        </button>
        dsadadsa
      </div>
    </div>
  );
};

export { PopUp };
