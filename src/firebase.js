import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyB3MQAX9lSvxwtlJuVQQVDP4TL0TNa62Ko",
  authDomain: "student-certificate-organizing.firebaseapp.com",
  projectId: "student-certificate-organizing",
  storageBucket: "student-certificate-organizing.appspot.com",
  messagingSenderId: "378068040239",
  appId: "1:378068040239:web:344cf584ae52bf263ce4da",
  measurementId: "G-E0KJ0H93EF"
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export { storage };