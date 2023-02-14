import { getDownloadURL, ref, uploadBytes } from '@firebase/storage';
import { v4 as uuid } from 'uuid';

import { storage } from 'src/firebase';

export const loadImage = async (image: File): Promise<string> => {
  const url = `images/${image.name + uuid()}`;
  const imageRef = ref(storage, url);
  await uploadBytes(imageRef, image);
  return getDownloadURL(ref(storage, url));
};
