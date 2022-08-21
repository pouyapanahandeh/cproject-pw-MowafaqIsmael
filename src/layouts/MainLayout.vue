<template>
  <q-layout view="hHh lpR fff">
    <q-header reveal class="bg-primary text-white">
      <div class="row">
        <q-toolbar class="bg-primary text-white" style="height: 70px">
          <q-toolbar-title class="tag-line-text text-h4">
            N7T Team
          </q-toolbar-title>
          <q-btn class="bg-secondary text-white main-btn" to="/join">
            <span class="tag-line-text q-mx-md q-my-xs text-body1"
              >Apply now</span
            >
          </q-btn>
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
<script>
import { ref } from "vue";

export default {
  setup() {
    const loading = ref([false, false, false, false, false, false]);

    const progress = ref(false);

    function simulateProgress(number) {
      // we set loading state
      loading.value[number] = true;

      // simulate a delay
      setTimeout(() => {
        // we're done, we reset loading state
        loading.value[number] = false;
      }, 3000);
    }

    return {
      loading,
      progress,
      simulateProgress,
    };
  },
};
</script>
