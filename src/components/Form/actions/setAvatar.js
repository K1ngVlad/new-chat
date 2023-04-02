import { updateProfile } from 'firebase/auth';
import { doc, updateDoc } from 'firebase/firestore';

import { errorHeandler } from './errorHeandler';
import { setUser } from '../../../store/slices/userSlice';
import { chat_path } from '../../../routes';

const setAvatar = async (state, dispatch, setError, auth, navigate, db) => {
  try {
    const { avatar } = state;
    if (!avatar) return;
    console.log(auth);
    const user = auth.currentUser;
    await updateProfile(user, { photoURL: avatar });
    const userRef = doc(db, 'users', user.uid);
    await updateDoc(userRef, {
      avatar,
    });
    dispatch(
      setUser({
        avatar,
      })
    );
    navigate(chat_path);
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.error(errorMessage, errorCode);
    errorHeandler(errorMessage, setError);
  }
};

export { setAvatar };
