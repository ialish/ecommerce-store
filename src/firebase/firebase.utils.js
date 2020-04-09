// Firebase App (the core Firebase SDK)
import firebase from 'firebase/app';
// Firebase products
import 'firebase/auth';
import 'firebase/firestore';

// The web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyD2j8RKAdqIJ6KUrFt0UQWnnHWbTuCgq5w",
	authDomain: "ecommerce-store-database.firebaseapp.com",
	databaseURL: "https://ecommerce-store-database.firebaseio.com",
	projectId: "ecommerce-store-database",
	storageBucket: "ecommerce-store-database.appspot.com",
	messagingSenderId: "523633180802",
	appId: "1:523633180802:web:8d824f51f56923e11ef49b",
	measurementId: "G-W4N2NT36QV"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

// Set-up google authentication utility
const provider = new firebase.auth.GoogleAuthProvider(); // Gives an access to the new google auth provider class from the authentication library
provider.setCustomParameters({ prompt: 'select_account' }); // Always trigger the google pop-up whenever we use this google auth provider for authentication and sign-in
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export const firestore = firebase.firestore();

export default firebase;
