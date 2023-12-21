// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
 

//   const firebaseConfig = {
//     apiKey: "AIzaSyD5Lq9im57kASE9gd6Z4hTIeTPa9dCa_rs",
//     authDomain: "expense-tracker-bcaf8.firebaseapp.com",
//     projectId: "expense-tracker-bcaf8",
//     storageBucket: "expense-tracker-bcaf8.appspot.com",
//     messagingSenderId: "724701814028",
//     appId: "1:724701814028:web:4d16093193634699713d29",
//     measurementId: "G-3VJNYD2ZZK",
//   };

//   // Initialize Firebase
//   const app = initializeApp(firebaseConfig);

// export default function userFirebaseClient ()
//  {
//   const auth = getAuth(app);

//   return {app, auth}
// }

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import { getFirestore } from "firebase/firestore";

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig();

  const firebaseConfig = {
    apiKey: config.public.FIREBASE_API_KEY,
    authDomain: config.public.FIREBASE_AUTH_DOMAIN,
    projectId: config.public.FIREBASE_PROJECT_ID,
    storageBucket: config.public.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: config.public.FIREBASE_MESSAGING_SENDER_ID,
    appId: config.public.FIREBASE_APP_ID,
    measurementId: config.public.MEASUREMENT_ID,
  };

  const app = initializeApp(firebaseConfig);

  const auth = getAuth(app);
//   const firestore = getFirestore(app);

  // Attaching the Auth and Firestore for global useage

  nuxtApp.vueApp.provide("auth", auth);
  nuxtApp.provide("auth", auth);

//   nuxtApp.vueApp.provide("firestore", firestore);
//   nuxtApp.provide("firestore", firestore);
});

  

