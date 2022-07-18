<template>
  <q-page class="full-width">
    <IntroductionMIVue />
    <!-- <MISponsor /> -->
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import IntroductionMIVue from "src/components/MainPageComponents/IntroductionMI.vue";

export default defineComponent({
  components: {
    IntroductionMIVue,
  },
  name: "IndexPage",
});
</script>
