<template>
  <q-form @submit="createAccount" class="q-gutter-md q-ma-md">
    <q-input
      filled
      dense
      color="black"
      v-model="email"
      type="email"
      label="Your email *"
      hint="e.g: jamesbond@example.com"
      lazy-rules
      :rules="[
        (val) => (val && val.length > 0) || 'please enter your email address',
      ]"
    />

    <q-input
      filled
      dense
      color="black"
      v-model="password"
      type="password"
      label="Your password *"
      hint="Password must be at least 6 characters"
      lazy-rules
      :rules="[
        (val) => (val && val.length > 6) || 'Please type valid password',
      ]"
    />
    <div>
      <q-btn
        push
        class="full-width q-my-md"
        label="Sign up"
        type="submit"
        color="black"
      />
    </div>
  </q-form>
</template>

<script>
import { ref } from "vue";
import { useQuasar } from "quasar";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  sendEmailVerification,
} from "firebase/auth";
import { collection, doc, addDoc, updateDoc } from "firebase/firestore";
import { db } from "src/boot/firebase";
export default {
  setup() {
    const $q = useQuasar();
    const email = ref(null);
    const password = ref(null);
    return {
      email: ref(null),
      password: ref(null),
    };
  },
  methods: {
    async createAccount() {
      const auth = getAuth();
      createUserWithEmailAndPassword(auth, this.email, this.password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          this.$q.notify({
            color: "green-6",
            textColor: "white",
            icon: "done",
            message:
              "You registered successfully, a verfinication email has been sent!",
          });
          this.email = "";
          this.password = "";
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          this.$q.notify({
            color: "red-4",
            textColor: "white",
            icon: "error_outline",
            message: errorMessage,
          });
        });
    },
  },
};
</script>
