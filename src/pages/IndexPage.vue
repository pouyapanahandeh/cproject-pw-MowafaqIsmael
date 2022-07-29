<template>
  <q-page class="full-width">
    <IntroductionMI1 />
    <ApearInMedia />
    <MIServices />
    <CustomerCarousel />
    <AboutTeam />
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import IntroductionMI1 from "src/components/MainPageComponents/IntroductionMI1.vue";
import ApearInMedia from "src/components/MainPageComponents/ApearInMedia.vue";
import MIServices from "src/components/MainPageComponents/MIServices.vue";
import CustomerCarousel from "src/components/MainPageComponents/CustomerCarousel.vue";
import AboutTeam from "src/components/MainPageComponents/AboutTeam.vue";
export default defineComponent({
  components: {
    IntroductionMI1,
    ApearInMedia,
    MIServices,
    CustomerCarousel,
    AboutTeam,
  },
  name: "IndexPage",
});
</script>
