import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
export default defineNuxtPlugin((nuxtApp) => {
  // const config = useRuntimeConfig()

  const firebaseConfig = {
    apiKey: "AIzaSyD5Lq9im57kASE9gd6Z4hTIeTPa9dCa_rs",
    authDomain: "expense-tracker-bcaf8.firebaseapp.com",
    projectId: "expense-tracker-bcaf8",
    storageBucket: "expense-tracker-bcaf8.appspot.com",
    messagingSenderId: "724701814028",
    appId: "1:724701814028:web:4d16093193634699713d29",
    measurementId: "G-3VJNYD2ZZK",
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  // console.log(app);
  manageUsers()

  const auth = getAuth(app);

  nuxtApp.vueApp.provide('auth', auth)
  nuxtApp.provide('auth', auth)
  
});
