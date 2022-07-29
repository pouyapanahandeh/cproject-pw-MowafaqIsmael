<template>
  <div class="flex flex-center">
    <div class="row q-my-md">
      <span class="text-white text-h4 tag-line-text">Service plan</span>
    </div>
  </div>
  <div class="row justify-around q-ma-lg">
    <div class="col-6 col-md-4 col-sm-12 col-xs-12">
      <div class="q-ma-md">
        <q-card
          class="my-card bg-primary text-white"
          style="border: 1px solid white"
        >
          <q-img src="../../assets/imgs/MI-7.jpeg">
            <div class="absolute-full tag-line-text text-h5 flex flex-center">
              1 month plan
            </div>
          </q-img>

          <q-list>
            <q-item clickable>
              <q-item-section avatar>
                <q-avatar size="lg"> &#127857; </q-avatar>
              </q-item-section>

              <q-item-section>
                <q-item-label class="text-h6 tag-line-text"
                  >Diet and nutrients plan</q-item-label
                >
                <q-item-label class="text-white" caption></q-item-label>
              </q-item-section>
            </q-item>

            <q-item clickable>
              <q-item-section avatar>
                <q-avatar size="lg"> &#127939;</q-avatar>
              </q-item-section>

              <q-item-section>
                <q-item-label class="text-h6 tag-line-text"
                  >workout plan</q-item-label
                >
                <q-item-label class="text-white" caption></q-item-label>
              </q-item-section>
            </q-item>

            <q-item clickable>
              <q-item-section avatar
                ><q-avatar size="lg"> &#128232;</q-avatar>
              </q-item-section>

              <q-item-section>
                <q-item-label class="text-h6 tag-line-text"
                  >Email Support</q-item-label
                >
                <q-item-label class="text-white" caption></q-item-label>
              </q-item-section>
            </q-item>

            <q-item clickable>
              <q-item-section avatar
                ><q-avatar size="lg"> &#128178; </q-avatar></q-item-section
              >

              <q-item-section>
                <q-item-label class="text-h6 tag-line-text">100 $</q-item-label>
                <q-item-label class="text-white" caption></q-item-label>
              </q-item-section>
            </q-item>

            <q-item>
              <q-item-section class="flex flex-center">
                <q-btn
                  push
                  class="bg-secondary text-white tag-line-text full-width"
                  label="select plan"
                  to="/get-program"
                />
              </q-item-section>
            </q-item>
          </q-list>
        </q-card>
      </div>
    </div>
    <div class="col-6 col-md-4 col-sm-12 col-xs-12">
      <div class="q-ma-md">
        <q-card
          class="my-card bg-primary text-white"
          style="border: 1px solid white"
        >
          <q-img src="../../assets/imgs/MI-10.jpeg">
            <div class="absolute-full tag-line-text text-h6 flex flex-center">
              <div class="row">3 months plan</div>
            </div>
          </q-img>

          <q-list>
            <q-item clickable>
              <q-item-section avatar>
                <q-avatar size="lg"> &#127857; </q-avatar>
              </q-item-section>

              <q-item-section>
                <q-item-label class="text-h6 tag-line-text"
                  >Diet and nutrients plan</q-item-label
                >
                <q-item-label class="text-white" caption
                  >Diet plan maybe change every week</q-item-label
                >
              </q-item-section>
            </q-item>

            <q-item clickable>
              <q-item-section avatar>
                <q-avatar size="lg"> &#127939;</q-avatar>
              </q-item-section>

              <q-item-section>
                <q-item-label class="text-h6 tag-line-text"
                  >workout plan</q-item-label
                >
                <q-item-label class="text-white" caption
                  >weekly adjustables</q-item-label
                >
              </q-item-section>
            </q-item>

            <q-item clickable>
              <q-item-section avatar
                ><q-avatar size="md">
                  <q-img src="../../assets/imgs/wtsapp-logo.png" />
                </q-avatar>
              </q-item-section>

              <q-item-section>
                <q-item-label class="text-h6 tag-line-text"
                  >Instant online support via whatsapp</q-item-label
                >
                <q-item-label class="text-white" caption
                  >weekly checking by photo or video call</q-item-label
                >
              </q-item-section>
            </q-item>

            <q-item clickable>
              <q-item-section avatar
                ><q-avatar size="lg"> &#128178; </q-avatar></q-item-section
              >

              <q-item-section>
                <q-item-label class="text-h6 tag-line-text">200 $</q-item-label>
                <q-item-label class="text-white" caption
                  >save up to 30%</q-item-label
                >
              </q-item-section>
            </q-item>

            <q-item>
              <q-item-section class="flex flex-center">
                <q-btn
                  push
                  class="bg-secondary text-white tag-line-text full-width"
                  label="select plan"
                  to="/get-program"
                />
              </q-item-section>
            </q-item>
          </q-list>
        </q-card>
      </div>
    </div>
  </div>
</template>
