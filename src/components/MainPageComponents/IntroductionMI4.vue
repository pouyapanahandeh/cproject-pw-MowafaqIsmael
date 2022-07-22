<template>
  <div
    class="row full-width full-height"
    id="bg-grad"
    style="border: 1px solid #ccc"
  >
    <div class="col-12 col-md-12 col-sm-12 col-xs-12">
      <q-img
        src="../../assets/imgs/MI-4.jpeg"
        class="fade-in"
        alt="Mowafaq Ismael"
      >
        <div class="absolute-full flex flex-center">
          <div class="column">
            <div class="col q-my-md">
              <span class="text-white text-h2 tag-line-text lineUp">
                You can, you will
              </span>
            </div>
            <div class="col q-my-md">
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
      </q-img>
    </div>
  </div>
</template>
<style>
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
</style>
