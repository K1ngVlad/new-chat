import { useContext } from 'react';

import { PopupContext } from '../../context';

import cross from '../../assets/svg/cross.svg';

import s from './style.module.scss';

const PopUp = () => {
  const { popup, setPopup } = useContext(PopupContext);
  return (
    <div className={s.popUp}>
      <div className={s.container}>
        <button onClick={() => setPopup(null)} className={s.close}>
          <img alt="X" src={cross} />
        </button>
        {popup}
      </div>
    </div>
  );
};

export { PopUp };
