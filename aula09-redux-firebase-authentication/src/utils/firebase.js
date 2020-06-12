import firebase from 'firebase/app'
import 'firebase/auth'

import firebase_key from '../keys/firebase_key'
firebase.initializeApp(firebase_key)

export default firebase