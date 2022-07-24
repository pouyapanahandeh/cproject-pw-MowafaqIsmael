<template>
  <div class="row full-width" id="bg-grad">
    <div
      class="col-12 col-md-12 col-sm-12 col-xs-12 before-hover"
      style="min-height: 100vh"
    >
      <q-img
        src="../../assets/imgs/MI-4.jpeg"
        class="full-width full-height"
        alt="Mowafaq Ismael"
        style=""
      >
        <div class="absolute-full flex flex-center" id="desktop-main-text">
          <div class="column">
            <div class="col q-my-sm">
              <span class="text-white text-h2 tag-line-text lineUp">
                You can, you will
              </span>
            </div>
            <div class="col q-my-xs">
              <span class="text-white text-h5 tag-line-text flex flex-center">
                Start your journey today</span
              >
            </div>
            <div class="col">
              <div class="flex flex-center">
                <q-btn
                  flat
                  round
                  class="hover-shake"
                  icon="mouse"
                  id="shake-y"
                />
              </div>
            </div>
          </div>
        </div>

        <div class="absolute-full flex flex-center" id="mobile-main-text">
          <div class="column">
            <div class="col q-my-sm">
              <span
                class="text-white text-h4 tag-line-text flex flex-center lineUp"
              >
                You can, you will
              </span>
            </div>
            <div class="col q-my-xs">
              <span class="text-white text-h6 tag-line-text flex flex-center">
                Start your journey today</span
              >
            </div>
            <div class="col">
              <div class="flex flex-center">
                <q-btn
                  flat
                  round
                  class="hover-shake"
                  icon="mouse"
                  id="shake-y"
                />
              </div>
            </div>
          </div>
        </div>
      </q-img>

      <!-- second image for transition -->
      <q-img
        src="../../assets/imgs/MI-9.jpeg"
        class="after-hover"
        alt="Mowafaq Ismael"
        style=""
      >
        <div class="absolute-full flex flex-center" id="desktop-main-text">
          <div class="column">
            <div class="col q-my-sm">
              <span class="text-white text-h2 tag-line-text lineUp">
                You can, you will
              </span>
            </div>
            <div class="col q-my-xs">
              <span class="text-white text-h5 tag-line-text flex flex-center">
                Start your journey today</span
              >
            </div>
            <div class="col">
              <div class="flex flex-center">
                <q-btn
                  flat
                  round
                  class="hover-shake"
                  icon="mouse"
                  id="shake-y"
                />
              </div>
            </div>
          </div>
        </div>

        <div class="absolute-full flex flex-center" id="mobile-main-text">
          <div class="column">
            <div class="col q-my-sm">
              <span
                class="text-white text-h4 tag-line-text flex flex-center lineUp"
              >
                You can, you will
              </span>
            </div>
            <div class="col q-my-xs">
              <span class="text-white text-h6 tag-line-text flex flex-center">
                Start your journey today</span
              >
            </div>
            <div class="col">
              <div class="flex flex-center">
                <q-btn
                  flat
                  round
                  class="hover-shake"
                  icon="mouse"
                  id="shake-y"
                />
              </div>
            </div>
          </div>
        </div>
      </q-img>
    </div>
  </div>
</template>
<style>
.before-hover {
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: inline-block;
}
.before-hover .after-hover {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: opacity 0.5s ease-in-out;
}

.before-hover:hover .after-hover {
  opacity: 1;
  display: inline;
}
.lineUp {
  animation: 6s anim-lineUp ease-out infinite;
}
@keyframes anim-lineUp {
  0% {
    opacity: 0;
    transform: translateY(80%);
  }
  20% {
    opacity: 0;
  }
  50% {
    opacity: 1;
    transform: translateY(0%);
  }
  100% {
    opacity: 1;
    transform: translateY(0%);
  }
}
#mobile-main-text {
  display: none;
}

@media screen and (max-width: 474px) {
  #mobile-main-text {
    display: block;
  }

  #desktop-main-text {
    display: none;
  }
}
</style>
