<script setup>
import { useAuthStore } from "@/stores/auth";
const authStore = useAuthStore();
const is_admin = ref(false)
const serverError = ref(false);
const submitLoginForm = async (formData) => {
  console.log(formData)
  authStore.setAuthenticated(true)
  if(is_admin.value){
    return navigateTo("/admin/dashboard", { replace: true });
  }
  return navigateTo("/user/dashboard", { replace: true });
};
</script>

<template>
  <div>
    <div class="mt-32 w-96 mx-auto">
      <h1 class="text-center text-2xl font-bold mb-5">User Login</h1>
      <FormKit
        type="form"
        @submit="submitLoginForm"
        submit-label="Login"
        id="loginForm"
      >
        <FormKit
          type="text"
          label="Email"
          name="email"
          validation="required|email"
          placeholder="Enter your email..."
        />

        <FormKit
          type="password"
          label="Password"
          name="password"
          validation="required"
          placeholder="Enter your password..."
        />
        <div class="mb-2 text-sm">
          <NuxtLink
            to="/account/reset_password"
            class="text-blue-500 hover:text-blue-700"
            >Forgot Password ?</NuxtLink
          >
        </div>
      </FormKit>
      <i class="text-gray-700 text-sm">
        Do not have Account ?
        <NuxtLink
          to="/account/register"
          class="text-blue-500 hover:text-blue-700"
          >Create an Account</NuxtLink
        >
      </i>
      <div v-if="serverError">
      <p class="bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded relative ">Unable to Login</p>      
    </div>
    </div>
  </div>
</template>

<style lang="css" scoped></style>
