<template>
  <q-page>
    <div class="full-width">
      <div class="q-pa-xl q-ma-xl">
        <q-form @submit="onSubmit" class="q-gutter-md">
          <q-select
            filled
            v-model="plans"
            :options="options"
            color="black"
            label="Select your plan!"
          />

          <q-input
            v-model="userFullName"
            color="black"
            label="Enter your full name"
            hint="For ex: John Doe"
            filled
            clearable
          />

          <q-input
            v-model="userEmail"
            color="black"
            label="Enter your email address"
            hint="For ex: panahandehpooya@gmail.com"
            filled
            clearable
          />

          <q-input
            v-model="userHeight"
            color="black"
            label="Enter your Height in cm"
            hint="For ex: 188 cm"
            filled
            clearable
          />

          <q-input
            v-model="userWeight"
            color="black"
            label="Enter your Weight in kg"
            hint="For ex: 90 Kg"
            filled
            clearable
          />

          <q-input
            v-model="userWaist"
            color="black"
            label="Enter your Waist siz"
            hint="For ex: 90 cm"
            filled
            clearable
          />

          <q-input
            v-model="userOccupation"
            color="black"
            label="Your occupation"
            hint="For ex: student"
            filled
            clearable
          />

          <q-input
            v-model="userWorkoutCalnedar"
            label="How many days you want to workout?"
            hint="For ex: 2 days per week"
            filled
            clearable
          />

          <q-input
            name="name"
            color="black"
            label="Enter your Weight in kg"
            hint="For ex: 90 Kg"
            filled
            clearable
          />

          <q-input
            name="name"
            color="black"
            label="Enter your Weight in kg"
            hint="For ex: 90 Kg"
            filled
            clearable
          />

          <q-input
            name="name"
            color="black"
            label="Enter your Weight in kg"
            hint="For ex: 90 Kg"
            filled
            clearable
          />

          <q-input
            name="name"
            color="black"
            label="Enter your Weight in kg"
            hint="For ex: 90 Kg"
            filled
            clearable
          />

          <q-input
            name="name"
            color="black"
            label="Enter your Weight in kg"
            hint="For ex: 90 Kg"
            filled
            clearable
          />

          <q-input
            name="name"
            color="black"
            label="Enter your Weight in kg"
            hint="For ex: 90 Kg"
            filled
            clearable
          />

          <q-editor min-height="5rem" />

          <div>
            <q-btn label="Submit" type="submit" color="black" />
          </div>
        </q-form>

        <q-card
          v-if="submitResult.length > 0"
          flat
          bordered
          class="q-mt-md bg-grey-2"
        >
          <q-card-section
            >Submitted form contains the following formData (key =
            value):</q-card-section
          >
          <q-separator />
          <q-card-section class="row q-gutter-sm items-center">
            <div
              v-for="(item, index) in submitResult"
              :key="index"
              class="q-px-sm q-py-xs bg-grey-8 text-white rounded-borders text-center text-no-wrap"
            >
              {{ item.name }} = {{ item.value }}
            </div>
          </q-card-section>
        </q-card>
      </div>
    </div>
    <div class="q-pa-xl q-ma-xl">
      <CustomerCarousel style="border-radius: 5px" />
    </div>
  </q-page>
</template>

<script>
import { ref } from "vue";
import CustomerCarousel from "src/components/MainPageComponents/CustomerCarousel.vue";

export default {
  components: {
    CustomerCarousel,
  },
  setup() {
    const submitResult = ref([]);

    return {
      name: ref("Jane Doe"),
      model: ref(""),
      submitResult,
      options: ["1 month Workout 100$", "3 months Workout 200$"],

      onSubmit(evt) {
        const formData = new FormData(evt.target);
        const data = [];

        for (const [name, value] of formData.entries()) {
          data.push({
            name,
            value,
          });
        }

        submitResult.value = data;
      },
    };
  },
};
</script>
