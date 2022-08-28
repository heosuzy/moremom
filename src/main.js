import {createApp} from 'vue';
import App from './App.vue';
import router from './router';

// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
import {getFirestore, collection} from 'firebase/firestore';
import {getStorage} from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAjMImD8zlMsFhme8HMqE35eNQpr2s0rys',
  authDomain: 'moremom-419e6.firebaseapp.com',
  projectId: 'moremom-419e6',
  storageBucket: 'moremom-419e6.appspot.com',
  messagingSenderId: '649711677931',
  appId: '1:649711677931:web:aeb86a8377785d446aa9ae',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);
const colRef = collection(db, 'product');
const storage = getStorage(app);

createApp(App).use(router).mount('#app');

export {colRef, db, storage};
