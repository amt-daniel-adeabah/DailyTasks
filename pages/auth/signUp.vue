<template>
  <UiKitsUiSlotsAuthWrapper>
    <template #backLink>
      <NuxtLink to="/auth/login" class="text-2xl font-bold">
        <img src="/assets/icons/backIcon.svg" class="w-5 h-5" alt="Back Icon" />
      </NuxtLink>
    </template>
    <template #greet> {{ text.signup.signUpGreet }} </template>
    <template #title>{{ text.signup.signup }}</template>
    <template #errors>
      <div v-if="store.error" class="text-red-600">
        {{ store.error }}
      </div>
    </template>
    <template #form>
      <UInput
        placeholder="First name"
        v-model="first_name"
        maxLength="100"
        size="xl"
      />
      <UInput
        placeholder="Last name"
        v-model="last_name"
        maxLength="100"
        size="xl"
      />
      <UInput
        placeholder="Email address"
        v-model="email"
        maxLength="100"
        size="xl"
      />
      <div class="relative">
        <UInput
          :type="isPasswordVisible ? 'text' : 'password'"
          placeholder="Password"
          v-model="password"
          maxLength="100"
          size="xl"
        />
        <span
          class="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer"
          @click="togglePasswordVisibility"
        >
          <UIcon
            :name="
              isPasswordVisible ? 'i-heroicons-eye' : 'i-heroicons-eye-slash'
            "
          ></UIcon>
        </span>
      </div>
    </template>
    <template #info>
      <div class="flex items-start gap-2">
        <span>
          <UCheckbox color="blue" />
        </span>
        <span>
          {{ text.signup.termsInfo }}
          <ULink class="underline">{{ text.signup.termsOfService }}</ULink>
          {{ text.signup.and }}
          <ULink class="underline">{{ text.signup.privacyPolicy }}</ULink>
        </span>
      </div>

      <div class="py-2">
        <UButton
          class="flex justify-center w-full font-bold hover:shadow-2xl"
          color="blue"
          label="Sign Up"
          variant="solid"
          size="xl"
          @click="signup"
        />
      </div>
    </template>
  </UiKitsUiSlotsAuthWrapper>
</template>

<script setup lang="ts">
import { useAuthenticationStore } from "~/store/auth";
import { authentication as text } from "@/texts/texts.json";

const first_name = ref("");
const last_name = ref("");
const email = ref("");
const password = ref("");
const isPasswordVisible = ref(false);

const store = useAuthenticationStore();

const signup = () => {
  store.signup(email.value, password.value, first_name.value, last_name.value);
};

const togglePasswordVisibility = () => {
  isPasswordVisible.value = !isPasswordVisible.value;
};
</script>
