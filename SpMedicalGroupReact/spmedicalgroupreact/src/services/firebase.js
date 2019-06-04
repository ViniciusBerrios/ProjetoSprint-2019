import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDVvLsbobJ50znVO5ircWZSj9IVpnKk93I",
  authDomain: "spmedicalgroup-53ce4.firebaseapp.com",
  databaseURL: "https://spmedicalgroup-53ce4.firebaseio.com",
  projectId: "spmedicalgroup-53ce4",
  storageBucket: "spmedicalgroup-53ce4.appspot.com",
  messagingSenderId: "129450425289",
  appId: "1:129450425289:web:abccc5506c2926e3"
};
  
firebase.initializeApp(firebaseConfig);

export default firebase;