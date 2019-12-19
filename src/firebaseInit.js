//may have to change below line to import * as firebase from firebase
import firebase from 'firebase'

import 'firebase/firestore'
import firebaseConfig from './../config/firebaseConfig'
firebase.initializeApp(firebaseConfig)

const firestore = firebase.firestore()
const settings = {}
firestore.settings(settings)

export default firestore
