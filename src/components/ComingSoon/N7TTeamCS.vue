<template>
  <div class="full-width full-height" id="overlay">
    <div class="text-white in-center cs-font">
      <span class="text-h2">Coming <span class="text-black">soon</span></span>
      <br />
      <span class="text-h3">you can, you will!</span>
      <br />
      <span class="text-h6">by N7T team</span>
    </div>
  </div>

  <div class="full-width full-height">
    <div class="row">
      <!-- <div class="col-6 col-md-4 col-sm-4 hide-in-mobile">
        <video
          src="../../assets/imgs/CSVideo/vid-1.mp4"
          autoplay
          loop
          muted
        ></video>
      </div>
      <div class="col-6 col-md-4 col-sm-4 hide-in-mobile">
        <video
          src="../../assets/imgs/CSVideo/vid-2.mp4"
          autoplay
          loop
          muted
        ></video>
      </div>
      <div class="col-6 col-md-4 col-xs-12">
        <video
          src="../../assets/imgs/CSVideo/vid-3.mp4"
          class="full-width"
          autoplay
          loop
          muted
        ></video> -->
      </div>
    </div>
  </div>
</template>
``
<style>
#overlay {
  position: fixed;
  display: block;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 2;
}

@media (max-width: 768px) {
  .hide-in-mobile {
    display: none;
  }
}
</style>
