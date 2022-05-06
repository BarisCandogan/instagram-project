import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'
import 'firebase/compat/storage'

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyBbsyAggyhH3pKcWjRzZ3ZWuAnose0BAAQ',
  authDomain: 'instagram-clone-react-f9735.firebaseapp.com',
  projectId: 'instagram-clone-react-f9735',
  storageBucket: 'instagram-clone-react-f9735.appspot.com',
  messagingSenderId: '372266443847',
  appId: '1:372266443847:web:48b66f7bdf4399412a7d62',
  measurementId: 'G-CJ6XC1J9P3',
})

const db = firebaseApp.firestore()
const auth = firebase.auth()
const storage = firebase.storage()

export { db, auth, storage }
