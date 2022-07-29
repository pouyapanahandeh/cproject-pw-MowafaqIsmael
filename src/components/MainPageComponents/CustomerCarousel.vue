<template>
  <div class="flex flex-center">
    <div class="row">
      <span class="text-h4 text-white tag-line-text q-my-md"
        >Client result</span
      >
    </div>
  </div>
  <div class="row full-width">
    <q-carousel
      v-model="slide"
      transition-prev="slide-right"
      transition-next="slide-left"
      animated
      control-color="secondary"
      padding
      class="bg-primary shadow-2 full-width"
      style="height: 100%"
      :autoplay="9000"
      navigation
      arrows
      infinite
    >
      <q-carousel-slide :name="1" class="column no-wrap">
        <div
          class="row cover justify-start items-center q-gutter-xs q-col-gutter no-wrap"
        >
          <q-img
            class="rounded-borders col-4"
            src="../../assets/imgs/cs-2.jpeg"
          />
          <q-img
            class="rounded-borders col-4"
            src="../../assets/imgs/cs-3.jpeg"
          />
          <q-img
            class="rounded-borders col-4"
            src="../../assets/imgs/cs-6.jpeg"
          />
        </div>
      </q-carousel-slide>
      <q-carousel-slide :name="2" class="column no-wrap">
        <div
          class="row fill justify-start items-center q-gutter-xs q-col-gutter no-wrap"
        >
          <video
            src="../../assets/imgs/CSVideo/cs-vid-1.mp4"
            class="rounded-borders col-4 full-height"
            muted
            autoplay
            loop
          ></video>
          <q-img
            class="rounded-borders col-4 full-height"
            src="../../assets/imgs/cs-1.jpeg"
          />
          <video
            src="../../assets/imgs/CSVideo/cs-vid-2.mp4"
            class="rounded-borders col-4 full-height"
            muted
            autoplay
            loop
          ></video>
        </div>
      </q-carousel-slide>
      <q-carousel-slide :name="3" class="column no-wrap">
        <div
          class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap"
        >
          <q-img
            class="rounded-borders col-4"
            src="../../assets/imgs/cs-8.jpeg"
          />
          <q-img
            class="rounded-borders col-4"
            src="../../assets/imgs/cs-4.jpeg"
          />
          <q-img
            class="rounded-borders col-4"
            src="../../assets/imgs/cs-7.jpeg"
          />
        </div>
      </q-carousel-slide>
      <q-carousel-slide :name="4" class="column no-wrap">
        <div
          class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap"
        >
          <q-img
            class="rounded-borders col-4"
            src="../../assets/imgs/cs-5.jpeg"
          />
          <q-img
            class="rounded-borders col-4"
            src="../../assets/imgs/cs-9.jpeg"
          />
          <q-img
            class="rounded-borders col-4"
            src="../../assets/imgs/cs-10.jpeg"
          />
        </div>
      </q-carousel-slide>
    </q-carousel>
  </div>
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
