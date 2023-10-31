import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDY52_DqXbNG0gsik-irrMt9bYVHMKbNZc",
    authDomain: "cookingsite-c9f6d.firebaseapp.com",
    projectId: "cookingsite-c9f6d",
    storageBucket: "cookingsite-c9f6d.appspot.com",
    messagingSenderId: "650283051134",
    appId: "1:650283051134:web:de67623751d887e61f102f"
  };

  firebase.initializeApp(firebaseConfig)

  const projectFirestore = firebase.firestore()

  export {projectFirestore}