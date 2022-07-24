<template>
  <div class="full-width full-height" id="overlay">
    <div class="text-white in-center tag-line-text">
      <span class="text-h2 cs-font"
        >Coming <span class="text-black">soon</span></span
      >
      <br />
      <span class="text-h3 cs-font">you can, you will!</span>
      <br />
      <span class="text-h6 cs-font">by N7T team</span>
    </div>
  </div>

  <div class="full-width full-height">
    <div class="row">
      <div class="col-6 col-md-4 col-sm-4" id="vid-1">
        <video
          src="../../assets/imgs/CSVideo/vid-1.mp4"
          autoplay
          loop
          muted
        ></video>
      </div>
      <div class="col-6 col-md-4 col-sm-4" id="vid-2">
        <video
          src="../../assets/imgs/CSVideo/vid-2.mp4"
          autoplay
          loop
          muted
        ></video>
      </div>
      <div class="col-6 col-md-4 col-sm-4 col-xs-12">
        <video
          src="../../assets/imgs/CSVideo/vid-3.mp4"
          id="vid-3"
          autoplay
          loop
          muted
        ></video>
      </div>
    </div>
  </div>
</template>
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
#vid-1 {
  display: block;
}

#vid-2 {
  display: block;
}

#vid-3 {
  display: block;
}
@media screen and (max-width: 599px) {
  #vid-1 {
    display: none;
  }

  #vid-2 {
    display: none;
  }

  #vid-3 {
    width: 100vh;
  }
}
</style>
