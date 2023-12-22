import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", () => {
  const email = useState("emailSignin", () => "");
  const password = useState("passwordSignin", () => "");
  const {registerUser, signinUser, signinWithGoogle } = useFirebaseAuth();
  



  const signInWithCredential = async () => {
   const user = await registerUser(email.value, password.value);
   
    if (user) {
      useNuxtApp().$toast.success('Account created succesfull')
    }
    email.value = "";
    password.value = "";
    await navigateTo({ path: "/home" });
   
   
  };

  const signUpWithCredential = async () => {
    const user = await signinUser(email.value, password.value);
    
     if (user) {
       useNuxtApp().$toast.success('Login succesfull')
     }
     email.value = "";
     password.value = "";
     await navigateTo({ path: "/home" });
    
    
   };


   const signUpWithGoogle = async (google) => {
    const user = await signinWithGoogle(google);
    
     if (user) {
       useNuxtApp().$toast.success('Google login successfull')
     }
     email.value = "";
     password.value = "";
     await navigateTo({ path: "/home" });
    
    
   };
 
  return {
    email,
    password,
    signInWithCredential,
    signUpWithCredential,
    signUpWithGoogle,
  }
});
