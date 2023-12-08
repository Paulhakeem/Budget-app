<template>
  <!-- component -->
  <div class="form py-6 flex flex-col justify-center sm:py-12">
    <div class="relative py-3 sm:max-w-xl sm:mx-auto">
      <div
        class="absolute inset-0 bg-gradient-to-r from-blue-300 to-[#7283ef] shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"
      ></div>
      <div class="relative bg-white shadow-lg sm:rounded-3xl sm:p-20">
        <div class="form-detail max-w-md mx-auto">
          <div class="flex justify-between mb-4">
            <div class="cursor-pointer">
              <iconsGoogle />
            </div>
            <div class="cursor-pointer">
              <iconsGitHub />
            </div>
          </div>
          <div class="flex justify-between">
            <h1 class="text-2xl font-medium text-gray-700">SignUp</h1>
            <nuxt-link to="/login">
             <h1
              class="text-lg font-semibold text-green-500 underline cursor-pointer"
            >
              SignIn
            </h1>
            </nuxt-link>
           
          </div>
          <!-- form -->
          <Form
            @submit="useAuth.createAccount"
            :validation-schema="schema"
            class="divide-gray-200 mt-6"
          >
            <div class="relative">
              <Field
               v-model="useAuth.userDetails.email"
                id="email_addr"
                name="email_addr"
                type="email"
                class="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                placeholder="Email address"
              />
              <label
                for="email"
                class="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                >Email Address</label
              >
            </div>
            <ErrorMessage name="email_addr" class="text-red-600" />

            <div class="relative mt-4">
              <Field
                v-model="useAuth.userDetails.password"
                id="password"
                name="acc_pazzword"
                type="password"
                class="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                placeholder="Password"
              />
              <label
                for="password"
                class="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                >Password</label
              >
              <ErrorMessage name="acc_pazzword" class="text-red-600" />
            </div>
           <nuxt-link to="/Home">
            <button
              class="bg-gradient-to-bl from-[#7283ef] to-[#4ffb8d] text-white rounded-md px-2 py-1 w-full mt-4"
            >
              Submit
            </button>
           </nuxt-link>
            
           
           
          </Form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Field, Form, ErrorMessage } from "vee-validate"
import * as Yup from "yup";
import {useAuthStore} from '~/store/userAuth'

const useAuth = useAuthStore()

const schema = Yup.object().shape({
  email_addr: Yup.string().email().required().label("Email Address"),
  acc_pazzword: Yup.string().min(5).required().label("Your Password"),
});

const firebaseUser = useFirebaseUser();


</script>
