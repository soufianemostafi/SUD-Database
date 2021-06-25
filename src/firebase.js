import firebase from "firebase/app"
import "firebase/auth"
import "firebase/firestore"
import "firebase/storage"

const app = firebase.initializeApp({
  apiKey: "AIzaSyCHsWYNLV-Qq2DI7K86-3JlhEUPpw0fOdA",
  authDomain: "sud-database.firebaseapp.com",
  projectId: "sud-database",
  storageBucket: "sud-database.appspot.com",
  messagingSenderId: "612716384628",
  appId: "1:612716384628:web:048119fcaf77eae041dc21"
})

const firestore = app.firestore()
export const database = {
  folders: firestore.collection("folders"),
  files: firestore.collection("files"),
  formatDoc: doc => {
    return { id: doc.id, ...doc.data() }
  },
  getCurrentTimestamp: firebase.firestore.FieldValue.serverTimestamp,
}
export const storage = app.storage()
export const auth = app.auth()
export default app
