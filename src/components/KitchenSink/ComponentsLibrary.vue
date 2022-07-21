<template>
  <div class="q-ma-xl q-pa-xl">
    <div class="row q-py-md">
      <span class="text-caption">Header 1</span>
    </div>
    <div class="row">
      <q-toolbar class="bg-primary text-white" style="height: 70px">
        <q-toolbar-title class="tag-line-text text-h4">
          N7T Team
        </q-toolbar-title>
        <q-btn
          class="glow-on-hover bg-secondary"
          label="Apply"
          size="md"
          to="/get-program"
        />
      </q-toolbar>
    </div>

    <!-- second header components -->
    <div class="row q-py-md">
      <span class="text-caption">Header 2</span>
    </div>
    <div class="row">
      <q-toolbar class="bg-primary text-white" style="height: 70px">
        <q-toolbar-title class="tag-line-text text-h4">
          N7T Team
        </q-toolbar-title>
        <q-btn class="bg-secondary text-white main-btn">
          <span class="tag-line-text q-mx-md q-my-xs text-body1"
            >Apply now</span
          >
        </q-btn>
      </q-toolbar>
    </div>

    <!-- Third header components -->
    <div class="row q-py-md">
      <span class="text-caption">Header 3</span>
    </div>
    <div class="row">
      <q-toolbar class="bg-primary text-white" style="height: 70px">
        <q-toolbar-title class="tag-line-text text-h4">
          N7T Team
        </q-toolbar-title>
        <q-btn
          push
          class="tag-line-text"
          :loading="loading[3]"
          color="secondary"
          @click="simulateProgress(3)"
          style="width: 150px; border-radius: 0%; font-size: 18px"
        >
          Apply now
          <template v-slot:loading>
            <q-spinner-hourglass class="on-left" />
            Let's go
          </template>
        </q-btn>
      </q-toolbar>
    </div>

    <!-- Introduction one -->
    <div class="row q-py-md">
      <span class="text-caption">Introduction Cards</span>
    </div>
    <div class="row" style="border: 1px solid #ccc">
      <IntroductionMI />
    </div>

    <!-- introduction two -->
    <div class="row q-py-md">
      <span class="text-caption">Header 3</span>
    </div>
    <div class="row"></div>

    <!-- introduction three -->
    <div class="row q-py-md">
      <span class="text-caption">Header 3</span>
    </div>
    <div class="row"></div>
  </div>
</template>
<script>
import { ref } from "vue";
import IntroductionMI from "../MainPageComponents/IntroductionMI.vue";

export default {
  components: {
    IntroductionMI,
  },
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
