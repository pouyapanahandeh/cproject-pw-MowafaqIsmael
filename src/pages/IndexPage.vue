<template>
  <q-page class="full-width">
    <IntroductionMI1 />
    <ApearInMedia />
    <MIServices />
    <CustomerGallary />
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import IntroductionMI1 from "src/components/MainPageComponents/IntroductionMI1.vue";
import ApearInMedia from "src/components/MainPageComponents/ApearInMedia.vue";
import MIServices from "src/components/MainPageComponents/MIServices.vue";
import CustomerGallary from "src/components/MainPageComponents/CustomerGallary.vue";

export default defineComponent({
  components: {
    IntroductionMI1,
    ApearInMedia,
    MIServices,
    CustomerGallary,
  },
  name: "IndexPage",
});
</script>
