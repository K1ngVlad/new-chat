import { useContext } from 'react';

import { FormContext } from '../../FormContext';
import { onChangeHeandler } from './onChangeHeandler';
import { GlobalContext } from '../../../../context';

import userAvatar from '../../../../assets/svg/userAvatar.svg';

import s from './style.module.scss';

const ChoisenPhoto = (props) => {
  const { avatar, setAvatar } = useContext(FormContext);
  const { storage, auth } = useContext(GlobalContext);

  return (
    <div className={`${props.className} ${s.choisenPhoto}`}>
      <div className={s.box}>
        <img alt="" src={avatar ? avatar : userAvatar} />
        <input
          accept="image/*,.png,.svg,.jpg,.gif,.web,"
          placeholder=""
          type="file"
          onChange={(e) => onChangeHeandler(e, setAvatar, storage, auth)}
        />
      </div>
    </div>
  );
};

export { ChoisenPhoto };
