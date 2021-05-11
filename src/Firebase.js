import * as firebase from 'firebase';
import firestore from 'firebase/firestore'

const settings = {timestampsInSnapshots:true};

const config = {
    apiKey: "AIzaSyC10RZinT6RfuL-9SAtChGUUjUsE-Agax8",
    authDomain: "taichungmetro-titantsai.firebaseapp.com",
    databaseURL: "https://taichungmetro-titantsai-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "taichungmetro-titantsai",
    storageBucket: "taichungmetro-titantsai.appspot.com",
    messagingSenderId: "563260852304",
    appId: "1:563260852304:web:c7feaff55a2df564cfe955"
}

firebase.initializeApp(config);
firebase.firestore().settings(settings);

export default firebase;