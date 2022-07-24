<template>
  <div class="row">
    <div class="col-6 col-md-6 col-sm-6 col-xs-12">
      <q-img
        src="../../assets/imgs/MI-1.jpeg"
        alt="Mowafaq Ismael"
        style="
          background-size: cover;
          background-repeat: no-repeat;
          height: 100%;
          width: 100%;
        "
      >
      </q-img>
    </div>
    <div class="col-6 col-md-6 col-sm-6 col-xs-12">
      <!-- pc name title -->
      <div class="q-mx-md q-my-xl" id="title-pc">
        <span class="text-h4 tag-line-text"
          >Mowafaq
          <span class="text-white" style="background-color: black"
            >Ismael</span
          ></span
        >
      </div>
      <!-- mobile name title  -->
      <div id="title-mob">
        <q-toolbar class="text-black">
          <q-toolbar-title class="text-h6 tag-line-text"
            >Mowafaq<span class="text-white" style="background-color: black"
              >Ismael</span
            ></q-toolbar-title
          >
          <q-btn
            push
            class="text-white"
            label="About me"
            color="black"
            to="/about-me"
          />
        </q-toolbar>
      </div>

      <!-- About Mowafaq Ismael -->
      <div class="q-mx-md q-my-xl" id="aboutme-section">
        <span class="text-body1 q-py-xs" id="text-p1">
          The process, not just the result, will motivate many people. People
          appreciate insight and advice from those who have overcome similar
          challenges.
        </span>

        <span class="text-body1 q-py-xs" id="text-p2">
          Losing weight, becoming healthier, and changing their lifestyles
          inspired some individuals to pursue careers in fitness.
        </span>
        <span class="text-body1 q-py-xs" id="text-p3">
          <br />
          There were others who had reached a certain level in their fitness
          journey but weren't able to progress any further. It wasn't until they
          discovered a way to overcome it that they were able to do so. Others
          have developed workout programs for busy people who are interested in
          getting fit.
          <br /><br />
        </span>
        <span class="text-body1 q-py-xs" id="text-p4">
          My definition of a healthy lifestyle reaches far beyond lifting
          weights. In addition to stretching and warming up, eating healthily,
          and getting enough rest and sleep, getting adequate rest and sleep is
          very significant. Seeing and experiencing what your body can do with
          just a little effort is something I enjoy helping others do. It is my
          goal to help you live a happy, well-balanced lifestyle that minimizes
          the risk of health problems in the future.
        </span>
        <q-btn
          push
          color="black"
          class="full-width q-my-xl text-white"
          id="about-me-btn"
          label="Learn More"
          to="/about-me"
        />

        <q-card flat class="my-card q-mt-xl bg-grey-3" id="newsletter-input">
          <q-parallax
            src="../../assets/imgs/MI-2.jpeg"
            :ratio="16 / 9"
            fit="cover"
            :height="250"
          />

          <q-card-actions class="full-width">
            <q-input
              filled
              bottom-slots
              class="full-width"
              v-model="userEmail"
              color="black"
              label="enter your email address"
              placeholder="join our mailing list"
            >
              <template v-slot:hint> For ex: johndoe@example.com </template>

              <template v-slot:append>
                <q-btn round flat icon="add" @click="showNotif" />
              </template>
            </q-input>
          </q-card-actions>
        </q-card>
      </div>
    </div>
  </div>
</template>
<script>
import { useQuasar } from "quasar";

export default {
  setup() {
    const $q = useQuasar();

    return {
      showNotif() {
        $q.notify({
          message: "You joined newsletter successfully.",
          color: "black",
        });
      },
    };
  },
};
</script>
<style>
@media only screen and (max-width: 599px) {
  #title-pc {
    display: none;
  }

  #aboutme-section {
    display: none;
  }

  #title-mob {
    display: block;
  }

  #newsletter-input {
    display: none;
  }
}
@media only screen and (min-width: 600px) {
  #title-pc {
    display: block;
  }

  #aboutme-section {
    display: block;
  }

  #title-mob {
    display: none;
  }

  #newsletter-input {
    display: none;
  }
}

@media only screen and (min-width: 900px) {
  #title-pc {
    display: block;
  }

  #aboutme-section {
    display: block;
  }

  #title-mob {
    display: none;
  }

  #newsletter-input {
    display: block;
  }
}
</style>
