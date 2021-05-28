import  firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBqu7-OkRw1vqBethLGu4Jz8xwh4aqB14I",
    authDomain: "crud-cc60b.firebaseapp.com",
    projectId: "crud-cc60b",
    storageBucket: "crud-cc60b.appspot.com",
    messagingSenderId: "4802296676",
    appId: "1:4802296676:web:eba5175849875061c6d871"
  }

  export const firebaseApp = firebase.initializeApp(firebaseConfig)
