<template>
  <q-page class="full-width">
    <!-- Coming soon -->
    <N7TTeamCS />
    <!-- <IntroductionMIVue />
    <MowafaqGallary />
    <MIServices />
    <CustomerGallary />
    <MISponsor /> -->
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
// import IntroductionMIVue from "src/components/MainPageComponents/IntroductionMI.vue";
// import MowafaqGallary from "src/components/MainPageComponents/MowafaqGallary.vue";
// import MIServices from "src/components/MainPageComponents/MIServices.vue";
// import CustomerGallary from "src/components/MainPageComponents/CustomerGallary.vue";
// import MISponsor from "src/components/MainPageComponents/MISponsor.vue";
import N7TTeamCS from "src/components/ComingSoon/N7TTeamCS.vue";
export default defineComponent({
  components: {
    // IntroductionMIVue,
    // MowafaqGallary,
    // MIServices,
    // CustomerGallary,
    // MISponsor,
    N7TTeamCS,
  },
  name: "IndexPage",
});
</script>
