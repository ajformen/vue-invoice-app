import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBosKDWNiAw4etz1RJ8n2o-tsylrR9sTyk",
    authDomain: "vue-invoice-app-619e6.firebaseapp.com",
    projectId: "vue-invoice-app-619e6",
    storageBucket: "vue-invoice-app-619e6.appspot.com",
    messagingSenderId: "682574397160",
    appId: "1:682574397160:web:d15aeaa9cd01c6355ed35d"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp.firestore();