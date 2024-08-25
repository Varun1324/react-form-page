import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyApcl_nDszXR1O09CLV9Ez1qOIIcP6PKcM",
  authDomain: "graduation-day.firebaseapp.com",
  projectId: "graduation-day",
  storageBucket: "graduation-day.appspot.com",
  messagingSenderId: "251071689480",
  appId: "1:251071689480:web:37a6e7c2431d87b41a32bd",
  measurementId: "G-GDSKJ93SJL"
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export { storage };