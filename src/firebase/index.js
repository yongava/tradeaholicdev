/**
 * Firebase Login
 * Adminify comes with built in firebase login feature
 * You Need To Add Your Firsebase App Account Details Here
 */
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

// Initialize Firebase 
const config = {
	apiKey: "AIzaSyA495Sa2S_c0D5v83faWQIbT75brIIJEoQ", // Your Api key will be here
	authDomain: "tradeaholic-51d70.firebaseapp.com", // Your auth domain
	databaseURL: "https://tradeaholic-51d70.firebaseio.com", // data base url
	projectId: "tradeaholic-51d70", // project id
	storageBucket: "tradeaholic-51d70.appspot.com", // storage bucket
	messagingSenderId: "835238324958" // messaging sender id
	// apiKey: "AIzaSyD_2FLh1f_BJyKdzeqMvF-oB9Av2cLG6ps", // Your Api key will be here
	// authDomain: "reactify-61b82.firebaseapp.com", // Your auth domain
	// databaseURL: "https://reactify-61b82.firebaseio.com", // data base url
	// projectId: "reactify-61b82", // project id
	// storageBucket: "", // storage bucket
	// messagingSenderId: "598228895769" // messaging sender id
};

firebase.initializeApp(config);

const auth = firebase.auth();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();
const githubAuthProvider = new firebase.auth.GithubAuthProvider();
const twitterAuthProvider = new firebase.auth.TwitterAuthProvider();
const database = firebase.database();

export {
	auth,
	googleAuthProvider,
	githubAuthProvider,
	facebookAuthProvider,
	twitterAuthProvider,
	database
};
