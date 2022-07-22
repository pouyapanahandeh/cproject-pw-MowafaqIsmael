<template>
  <div
    class="row full-width full-height"
    id="bg-grad"
    style="border: 1px solid #ccc"
  >
    <div class="col-12 col-md-12 col-sm-12 col-xs-12">
      <q-img
        src="../../assets/imgs/MI-8.jpeg"
        class="fade-in"
        alt="Mowafaq Ismael"
      >
        <div class="absolute-full flex flex-center">
          <div class="column">
            <div class="col q-my-md">
              <span class="text-white text-h2 tag-line-text">
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
.fade-in {
  animation: fadeIn 5s;
  -webkit-animation: fadeIn 5s;
  -moz-animation: fadeIn 5s;
  -o-animation: fadeIn 5s;
  -ms-animation: fadeIn 5s;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@-moz-keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@-webkit-keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@-o-keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@-ms-keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.hover-shake:hover {
  animation: shake 1s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  transform: translate3d(0, 0, 0);
  backface-visibility: hidden;
  perspective: 1000px;
}

#shake-y {
  animation: shake 4s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  transform: translate3d(0, 0, 0);
  backface-visibility: hidden;
  perspective: 1000px;
}
@keyframes shake {
  10%,
  90% {
    transform: translate3d(-1px, 0, 0);
  }

  20%,
  80% {
    transform: translate3d(2px, 0, 0);
  }

  30%,
  50%,
  70% {
    transform: translate3d(-4px, 0, 0);
  }

  40%,
  60% {
    transform: translate3d(4px, 0, 0);
  }
}
</style>
