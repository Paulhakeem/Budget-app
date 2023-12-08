import { defineStore } from "pinia";
import { loginIn } from "~/composables/authentication";

export const useAuthStore = defineStore("auth", () => {

    const userDetails = ref({
        email: '',
        password: ''
    })

    
    const createAccount = async () => {
     const userCredential = await createUser(userDetails.value.email, userDetails.value.password)
     userDetails.value = {
        email: '',
        password: ''
     }
     if(userCredential) {
        useNuxtApp().$toast.success('Account successfully created!🤗')
        // toast.info('toastify success')
     }
    };

    const signIn = async () => {
        const userCredential = await loginIn(userDetails.value.email, userDetails.value.password)
        userDetails.value = {
           email: '',
           password: ''
        }
        if(userCredential) {
           useNuxtApp().$toast.success('Login successfully!🤗')
           // toast.info('toastify success')
        }
       };
    return {createAccount, userDetails, signIn}
})