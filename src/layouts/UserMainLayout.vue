<template>
  <q-layout view="hHh lpR fff">
    <q-header reveal class="bg-primary text-white">
      <div class="q-mx-lg q-pa-xs">
        <q-toolbar>
          <q-toolbar-title class="tag-line-text"> N7T Team </q-toolbar-title>
          <q-btn
            push
            class="text-white"
            icon="fa-solid fa-arrow-right-from-bracket"
            label="sign out"
            color="secondary"
            size="md"
            v-on:click="signOut()"
          />
        </q-toolbar>
      </div>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer class="bg-primary text-white">
      <div class="flex flex-center">
        <div class="row q-my-sm q-gutter-sm">
          <q-btn
            flat
            href="https://www.facebook.com/Mowafaq-Ismael-632052684090657/"
            icon="fab fa-facebook"
            color="white"
          />
          <q-btn
            flat
            href="https://www.instagram.com/mowafaq.ismael/"
            icon="fab fa-instagram"
            color="white"
          />
        </div>
      </div>
      <div class="flex flex-center">
        <div class="row q-my-sm">
          <div class="text-h6 tag-line-text text-grey-3">
            &copy; 2020 Mowafaq Ismael
          </div>
        </div>
      </div>
    </q-footer>
  </q-layout>
</template>
<style></style>
<script>
import { useQuasar } from "quasar";
import { ref } from "vue";
import { db } from "../boot/firebase.js";
import { getAuth, signOut } from "firebase/auth";
export default {
  setup() {
    const $q = useQuasar();
  },
  methods: {
    async signOut() {
      const auth = getAuth();
      signOut(auth)
        .then(() => {
          // Sign-out successful.
          this.$q.notify({
            color: "green-7",
            textColor: "white",
            icon: "done",
            message: "You sign out successfully.",
          });
          this.$router.push("/");
        })
        .catch((error) => {
          // An error happened.
          this.$q.notify({
            color: "red-5",
            textColor: "white",
            icon: "warning",
            message: "something went wrong!",
          });
        });
    },
  },
};
</script>
