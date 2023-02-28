import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyBBOJ7ocM4uBhO-RIXWRyaGO7SpkBT17gc',
  authDomain: 'course-project-792f1.firebaseapp.com',
  projectId: 'course-project-792f1',
  storageBucket: 'course-project-792f1.appspot.com',
  messagingSenderId: '877210675602',
  appId: '1:877210675602:web:2ff33486f91c8ea4a7794b',
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
