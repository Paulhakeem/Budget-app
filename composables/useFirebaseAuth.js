import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";

export default function () {
  const { $auth } = useNuxtApp();
  const user = useState("firebaseUser", () => null);



  // functions
  const registerUser = async (email, password) => {
    try {
      const userCredentials = await createUserWithEmailAndPassword(
        $auth,
        email,
        password
      );
      if (userCredentials) {
        user.value = userCredentials.user;
        useNuxtApp().$toast.success("User Created Successfully");
      }
    } catch (err) {
      useNuxtApp().$toast.error(err.message);
    }
  };

  const signinUser = async (email, password) => {
    try {
      const userCredentials = await signInWithEmailAndPassword(
        $auth,
        email,
        password
      );
      if (userCredentials) {
        user.value = userCredentials.user;
        useNuxtApp().$toast.success("Login Successfully");
      }
    } catch (error) {
      useNuxtApp().$toast.error(error.message);
    }
  };

  const signOutUser = async () => {
    try {
      await $auth.signOut();
      user.value = null;
      useNuxtApp().$toast.success("Successfully logout");
    } catch (error) {
      useNuxtApp().$toast.error(error.message);
    }
  };

  const signinWithGoogle = async (google) => {
    try {
      const userCreds = await signInWithPopup($auth, google);
      if (userCreds) {
        user.value = userCreds.user;
        useNuxtApp().$toast.success("Signin With google Successfully!");
      }
      
    } catch (error) {
      useNuxtApp().$toast.error("An error occurs!😢");
    }
    
  };

  const signinWithGithub = async (github) => {
    try {
      const userCreds = await signInWithPopup($auth, github);
      if (userCreds) {
        user.value = userCreds.user;
        useNuxtApp().$toast.success("Signin With github Successfully!");
      }
    } catch (error) {
      useNuxtApp().$toast.error("An error occurs!😢");
    }
    
  };
  return {
    signOutUser,
    registerUser,
    signinUser,
    signinWithGoogle,
    signinWithGithub
  };
}
