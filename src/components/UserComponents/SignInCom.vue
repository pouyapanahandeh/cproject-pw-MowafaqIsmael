<template>
  <q-form @submit="onSubmit" class="q-gutter-md">
    <q-input
      filled
      dense
      color="black"
      v-model="email"
      type="email"
      label="Your email *"
      hint="enter your email address"
      lazy-rules
      :rules="[
        (val) =>
          (val && val.length > 0 && val.includes('@')) ||
          'please enter valid email address',
      ]"
    />

    <q-input
      filled
      dense
      color="black"
      v-model="password"
      type="password"
      label="Your password *"
      hint="enter your password"
      lazy-rules
      :rules="[
        (val) => (val && val.length > 0) || 'Please type valid password',
      ]"
    />

    <div>
      <q-btn
        push
        class="full-width q-my-sm"
        label="Sign in"
        type="submit"
        color="black"
      />
    </div>
  </q-form>

  <q-btn
    flat
    class="full-width"
    label="forget password"
    type="submit"
    color="black"
    v-on:click="forgetPassword()"
  />
</template>

<script>
import { useQuasar } from "quasar";
import { ref } from "vue";
import { db } from "../../boot/firebase.js";
import {
  getAuth,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
} from "firebase/auth";
export default {
  setup() {
    const $q = useQuasar();
    const email = ref(null);
    const password = ref(null);
    return {
      email,
      password,
    };
  },
  methods: {
    onSubmit() {
      if (!this) {
        this.$q.notify({
          color: "red-5",
          textColor: "white",
          icon: "warning",
          message: "you must fill the input fields.",
        });
      } else {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, this.email, this.password)
          .then((userCredential) => {
            // Signed in
            this.$q.notify({
              color: "green-6",
              textColor: "white",
              icon: "done",
              message: "you logged in successfully",
            });
            this.$router.push("/dashboard");
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            this.$q.notify({
              color: "red-6",
              textColor: "white",
              icon: "rule",
              message: errorMessage + " " + errorCode,
            });
          });
      }
    },
    async forgetPassword() {
      if (this.email !== null) {
        const auth = getAuth();
        sendPasswordResetEmail(auth, this.email)
          .then(() => {
            this.$q.notify({
              color: "green-5",
              textColor: "white",
              icon: "rule",
              message:
                "We sent an email includes password reset instructions to you!",
            });
            this.email = "";
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            this.$q.notify({
              color: "red-6",
              textColor: "white",
              icon: "error_outline",
              message: errorMessage,
            });
          });
      } else {
        this.$q.notify({
          color: "red-6",
          textColor: "white",
          icon: "rule",
          message: "please enter your email address first!",
        });
      }
    },
  },
};
</script>
