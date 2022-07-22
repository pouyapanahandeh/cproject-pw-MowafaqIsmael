<template>
  <q-carousel
    v-model="slide"
    transition-prev="slide-right"
    transition-next="slide-left"
    swipeable
    animated
    control-color="white"
    navigation
    padding
    arrows
    height="300px"
    class="bg-black shadow-2"
  >
    <q-carousel-slide :name="1" class="column no-wrap">
      <div
        class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap"
      >
        <q-img
          class="rounded-borders col-6 full-height"
          src="../../assets/imgs/cs-7.jpeg"
          fit="fit"
        />
        <q-img
          class="rounded-borders col-6 full-height"
          src="../../assets/imgs/cs-8.jpeg"
          fit="fit"
        />
      </div>
    </q-carousel-slide>
    <q-carousel-slide :name="2" class="column no-wrap">
      <div
        class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap"
      >
        <q-img
          class="rounded-borders col-6 full-height"
          src="../../assets/imgs/cs-6.jpeg"
          fit="fit"
        />
        <q-img
          class="rounded-borders col-6 full-height"
          src="../../assets/imgs/cs-5.jpeg"
          fit="fill"
        />
      </div>
    </q-carousel-slide>
    <q-carousel-slide :name="3" class="column no-wrap">
      <div
        class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap"
      >
        <q-img
          class="rounded-borders col-6 full-height"
          src="../../assets/imgs/cs-4.jpeg"
          fit="fit"
        />
        <q-img
          class="rounded-borders col-6 full-height"
          src="../../assets/imgs/cs-3.jpeg"
          fit="fit"
        />
      </div>
    </q-carousel-slide>
    <q-carousel-slide :name="4" class="column no-wrap">
      <div
        class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap"
      >
        <q-img
          class="rounded-borders col-6 full-height"
          src="../../assets/imgs/cs-2.jpeg"
          fit="fit"
        />
        <q-img
          class="rounded-borders col-6 full-height"
          src="../../assets/imgs/cs-1.jpeg"
          fit="fit"
        />
      </div>
    </q-carousel-slide>
  </q-carousel>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    return {
      slide: ref(1),
    };
  },
};
</script>
