Troubleshooting info:
  Principal: phonrathana738@gmail.com
  Resource: fir-demo-project
  Troubleshooting URL: console.cloud.google.com/iam-admin/troubleshooter;permissions=iam.serviceAccounts.list;principal=phonrathana738@gmail.com;resources=%2F%2Fcloudresourcemanager.googleapis.com%2Fprojects%2Ffir-demo-project/result

Missing permissions:
  iam.serviceAccounts.list
var firebaseConfig = {
  apiKey: "AIzaSyA49nis0VWifZkBCVH-RUWl9nK3d7dcAag",
  authDomain: "website-e6c82.firebaseapp.com",
  // The value of `databaseURL` depends on the location of the database
  databaseURL: "https://rathanaphon.github.io.firebaseio.com",
  projectId: "PROJECT_ID:222643976934",
  storageBucket: "PROJECT_ID.appspot.com",
  messagingSenderId: "SENDER_ID:222643976934",
  appId: "1:222643976934:web:3f8dc1de75b47a43935927",",
  // For Firebase JavaScript SDK v7.20.0 and later, `measurementId` is an optional field
  measurementId: "G-WDKSGV3B5N",
};


// TODO: Replace the following with your app's Firebase project configuration
var firebaseConfig = {
  // ...
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

// Initialize Firebase with a "default" Firebase project
const defaultProject = initializeApp(firebaseConfig);

console.log(defaultProject.name);  // "[DEFAULT]"

// Option 1: Access Firebase services via the defaultProject variable
let defaultStorage = getStorage(defaultProject);
let defaultFirestore = getFirestore(defaultProject);

// Option 2: Access Firebase services using shorthand notation
defaultStorage = getStorage();
defaultFirestore = getFirestore();


import { initializeApp, getApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

// Initialize Firebase with a default Firebase project
initializeApp(firebaseConfig);

// Initialize Firebase with a second Firebase project
const otherProject = initializeApp(otherProjectFirebaseConfig, "other");

console.log(getApp().name);  // "[DEFAULT]"
console.log(otherProject.name);    // "otherProject"

// Use the shorthand notation to access the default project's Firebase services
const defaultStorage = getStorage();
const defaultFirestore = getFirestore();

// Use the otherProject variable to access the second project's Firebase services
const otherStorage = getStorage(otherProject);
const otherFirestore = getFirestore(otherProject);
