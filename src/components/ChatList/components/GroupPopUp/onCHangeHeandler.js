import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { v4 } from 'uuid';

const onChangeHeandler = async (e, setImg, storage, auth) => {
  const img = e.target.files[0];
  if (!img) return;

  const refUrl = `assets/avatars/chatAvatars/${img.name}_${v4()}`;
  const imageRef = ref(storage, refUrl);

  await uploadBytes(imageRef, img);
  const url = await getDownloadURL(ref(storage, refUrl));
  setImg(url);
};

export { onChangeHeandler };
