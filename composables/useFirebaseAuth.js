import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

export default function () {
  const { $auth } = useNuxtApp();
  const user = useState("firebaseUser", () => null);
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
  return {
    signOutUser,
    registerUser,
    signinUser,
  };
}
