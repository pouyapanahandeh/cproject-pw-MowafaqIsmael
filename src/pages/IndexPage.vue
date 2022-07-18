<template>
  <q-page class="full-width">
    <IntroductionMIVue />
    <MowafaqGallary />
    <MIServices />
    <CustomerGallary />
    <MISponsor />
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import IntroductionMIVue from "src/components/MainPageComponents/IntroductionMI.vue";
import MowafaqGallary from "src/components/MainPageComponents/MowafaqGallary.vue";
import MIServices from "src/components/MainPageComponents/MIServices.vue";
import CustomerGallary from "src/components/MainPageComponents/CustomerGallary.vue";
import MISponsor from "src/components/MainPageComponents/MISponsor.vue";

export default defineComponent({
  components: {
    IntroductionMIVue,
    MowafaqGallary,
    MIServices,
    CustomerGallary,
    MISponsor,
  },
  name: "IndexPage",
});
</script>
