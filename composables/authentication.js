import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged
} from "firebase/auth";
import { useFirebaseUser } from "./useStates";

// signup
export const createUser = async (email, password) => {
  const auth = getAuth();
  const userCredential = createUserWithEmailAndPassword(
    auth,
    email,
    password
  ).catch((error) => {
    alert(error.message);
    // ..
  });

  return userCredential;
};

// login
export const loginIn = async (email, password) => {
  const auth = getAuth();
  const userCredential = signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      // ...
    })
    .catch((error) => {
      alert(error.message);
    });
  return userCredential;
};

// google login
// export const googleLogin = async (provider) => {
//   const provider = new GoogleAuthProvider();
//   const auth = getAuth();
//   const userCredential = signInWithPopup(auth, provider)
//     .then((result) => {
    //   const user = result.user;
//       // ...
//     })
//     .catch((error) => {
//         alert(error.message);
//       // ...
//     });
//   return userCredential;
// };

// manage user
export const manageUsers = async () => {
  const auth = getAuth();
  const firebaseUser = useFirebaseUser()
  firebaseUser.value = auth.currentUser
  const userCookie = useCookie('useCookie') 
  onAuthStateChanged(auth, (user) => {
    if (user) {
        firebaseUser.value = user
    } else {
    console.log(user ,':logout');
    }
    userCookie.value = user
  });
};
