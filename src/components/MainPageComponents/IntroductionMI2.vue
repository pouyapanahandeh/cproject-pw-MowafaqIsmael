<template>
  <div
    class="row full-width full-height"
    id="bg-grad"
    style="border: 1px solid #ccc"
  >
    <transition
      appear
      enter-active-class="animated fadeIn"
      leave-active-class="animated fadeOut"
    >
      <div class="col-6 col-md-6 col-sm-6 col-xs-12">
        <q-img
          src="../../assets/imgs/MI-7.jpeg"
          alt="Mowafaq Ismael"
          class=""
        ></q-img>
      </div>
    </transition>
    <div class="col-6 col-md-6 col-sm-6 col-xs-12">
      <div class="q-ma-lg" style="margin-top: 50%">
        <span class="tag-line-text text-h3">You can, you will</span>
        <br />
        <span class="tag-line-text text-h5 float-left"
          >start your journey today!</span
        >
        <br />
        <q-btn push class="bg-secondary q-my-sm text-white">
          <span class="tag-line-text text-body2">Apply now</span>
        </q-btn>
      </div>
    </div>
  </div>
</template>
<style></style>
