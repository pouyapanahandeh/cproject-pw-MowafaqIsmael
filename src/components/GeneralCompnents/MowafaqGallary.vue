<template>
  <q-carousel
    swipeable
    animated
    arrows
    v-model="slide"
    v-model:fullscreen="fullscreen"
    infinite
  >
    <q-carousel-slide :name="1" img-src="../../assets/imgs/MI-4.jpeg" />
    <q-carousel-slide :name="2" img-src="../../assets/imgs/MI-3.jpeg" />
    <q-carousel-slide :name="3" img-src="../../assets/imgs/MI-5.jpeg" />
    <q-carousel-slide :name="4" img-src="../../assets/imgs/MI-6.jpeg" />

    <template v-slot:control>
      <q-carousel-control position="bottom-right" :offset="[18, 18]">
        <q-btn
          push
          round
          dense
          color="white"
          text-color="black"
          :icon="fullscreen ? 'fullscreen_exit' : 'fullscreen'"
          @click="fullscreen = !fullscreen"
        />
      </q-carousel-control>
    </template>
  </q-carousel>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    return {
      slide: ref(1),
      fullscreen: ref(false),
    };
  },
};
</script>
