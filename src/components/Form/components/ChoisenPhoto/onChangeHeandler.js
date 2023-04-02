import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { v4 } from 'uuid';

const onChangeHeandler = async (e, setAvatar, storage, auth) => {
  const img = e.target.files[0];
  if (!img) return;

  const refUrl = `assets/avatars/${auth.currentUser.uid}/${img.name}_${v4()}`;
  const imageRef = ref(storage, refUrl);

  await uploadBytes(imageRef, img);
  const url = await getDownloadURL(ref(storage, refUrl));
  setAvatar(url);
};

export { onChangeHeandler };
