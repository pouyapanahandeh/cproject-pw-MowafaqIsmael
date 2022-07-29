<template>
  <q-page>
    <div class="full-width">
      <div class="q-pa-md q-ma-md">
        <q-card class="bg-grey-3" elevated>
          <div class="q-pa-md q-ma-md">
            <q-form @submit="onSubmit" class="q-pa-md">
              <q-select
                filled
                class="full-width q-my-sm"
                color="black"
                label="Select your plan!"
                hint="select your plan"
                v-model="selectedPlan"
                :options="planOptions"
              />

              <q-input
                v-model="userFullName"
                color="black"
                class="full-width q-my-sm"
                label="Enter your full name"
                hint="For ex: John Doe"
                filled
                clearable
              />

              <q-input
                v-model="userEmail"
                color="black"
                class="full-width q-my-sm"
                label="Enter your email address"
                hint="For ex: panahandehpooya@gmail.com"
                filled
                clearable
              />

              <q-input
                v-model="userAge"
                color="black"
                class="full-width q-my-sm"
                label="Enter your age"
                hint="For ex: 29"
                filled
                clearable
              />

              <q-input
                v-model="userResidency"
                color="black"
                class="full-width q-my-sm"
                label="Enter your residency"
                hint="For ex: Budapest, Hungary"
                filled
                clearable
              />

              <q-input
                v-model="userHeightSize"
                color="black"
                class="full-width q-my-sm"
                label="Enter your Height in cm"
                hint="For ex: 188 cm"
                filled
                clearable
              />

              <q-input
                v-model="userWeightSize"
                color="black"
                class="full-width q-my-sm"
                label="Enter your Weight in kg"
                hint="For ex: 90 Kg"
                filled
                clearable
              />

              <q-input
                v-model="userWaistSize"
                color="black"
                class="full-width q-my-sm"
                label="Enter your Waist siz"
                hint="For ex: 90 cm"
                filled
                clearable
              />

              <q-input
                v-model="userOccupationStatus"
                color="black"
                class="full-width q-my-sm"
                label="Your occupation"
                hint="For ex: student"
                filled
                clearable
              />

              <q-input
                class="full-width q-my-sm"
                v-model="userWorkoutDate"
                label="How many days you want to workout?"
                hint="For ex: 2 days per week"
                filled
                clearable
              />

              <q-input
                class="full-width q-my-sm"
                v-model="userWorkoutTime"
                label="Exercise time that works for you"
                hint="For ex: between 2pm to 5pm"
                filled
                clearable
              />

              <q-input
                class="full-width q-my-sm"
                v-model="userFavoriteProteinSource"
                label="Favorite protein source"
                hint="For ex: biotech"
                filled
                clearable
              />

              <q-input
                class="full-width q-my-sm"
                v-model="userMuscleToTarget"
                label="Muscle to target"
                hint="For ex: chest"
                filled
                clearable
              />

              <q-input
                class="full-width q-my-sm"
                v-model="userWorkoutGoal"
                label="Goal of training"
                hint="For ex: get in shape"
                filled
                clearable
              />

              <q-input
                class="full-width q-my-sm"
                v-model="userAllergies"
                label="Any Allergies"
                hint="For ex: gluten"
                filled
                clearable
              />

              <q-input
                class="full-width q-my-sm"
                v-model="userInjuries"
                label="Any Injuries"
                hint="For ex: back"
                filled
                clearable
              />

              <div class="full-width q-my-sm">
                <span class="tag-line-text"
                  >Do you want to use PEDs (steroids)?</span
                >
                <q-radio
                  v-model="radioAnswer"
                  checked-icon="task_alt"
                  unchecked-icon="panorama_fish_eye"
                  val="yes"
                  label="Yes"
                />
                <q-radio
                  v-model="radioAnswer"
                  checked-icon="task_alt"
                  unchecked-icon="panorama_fish_eye"
                  val="no"
                  label="No"
                />
              </div>

              <q-input
                class="full-width q-my-sm"
                v-model="userMedHistory"
                label="Previous medicine or Gears used"
                hint="For ex: steroids"
                filled
                clearable
              />
              <span class="tag-line-text q-my-sm"
                >Tell me about your self (your daily routine) (bed time and
                waking up time):</span
              >
              <q-editor
                v-model="editor"
                :definitions="{
                  bold: { label: 'Bold', icon: null, tip: 'bold font' },
                }"
              />
              <div>
                <q-btn
                  v-on:click="requestPlan()"
                  class="q-my-sm"
                  label="Submit"
                  type="submit"
                  color="black"
                />
              </div>
            </q-form>
          </div>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
import { ref } from "vue";
import { useQuasar } from "quasar";
import { db } from "src/boot/firebase.js";
import { collection, addDoc, Timestamp } from "firebase/firestore";

export default {
  setup() {
    const $q = useQuasar();

    return {
      selectedPlan: ref(null),
      planOptions: ["1 month Workout 100$", "3 months Workout 200$"],
      userFullName: ref(""),
      userEmail: ref(""),
      userAge: ref(""),
      userResidency: ref(""),
      userHeightSize: ref(""),
      userWeightSize: ref(""),
      userWaistSize: ref(""),
      userOccupationStatus: ref(""),
      radioAnswer: ref("no"),
      userWorkoutDate: ref(""),
      userWorkoutTime: ref(""),
      userFavoriteProteinSource: ref(""),
      userMuscleToTarget: ref(""),
      userWorkoutGoal: ref(""),
      userAllergies: ref(""),
      userInjuries: ref(""),
      userMedHistory: ref(""),
      editor: ref(""),
    };
  },
  methods: {
    async requestPlan() {
      if (
        this.selectedPlan &&
        this.userAge &&
        this.userEmail &&
        this.userFullName &&
        this.userHeightSize &&
        this.userWeightSize &&
        this.userWaistSize &&
        this.userWorkoutDate &&
        this.userWorkoutTime &&
        this.userWorkoutGoal &&
        this.userAllergies &&
        this.userInjuries &&
        this.userMedHistory &&
        this.userResidency &&
        this.userOccupationStatus &&
        this.userFavoriteProteinSource &&
        this.userMuscleToTarget &&
        this.radioAnswer
      ) {
        const docRef = await addDoc(collection(db, "requests"), {
          dateOfSubmission: Timestamp.fromDate(new Date()),
          selectedPlan: this.selectedPlan,
          fullName: this.userFullName,
          email: this.userEmail,
          age: this.userAge,
          residency: this.userResidency,
          heightSize: this.userHeightSize,
          weightSize: this.userWeightSize,
          waistSize: this.userWaistSize,
          occupationStatus: this.userOccupationStatus,
          radioAnswer: this.radioAnswer,
          workoutDate: this.userWorkoutDate,
          workoutTime: this.userWorkoutTime,
          favoriteProteinSource: this.userFavoriteProteinSource,
          muscleToTarget: this.userMuscleToTarget,
          workoutGoal: this.userWorkoutGoal,
          allergies: this.userAllergies,
          injuries: this.userInjuries,
          medHistory: this.userMedHistory,
          editor: this.editor,
        });

        this.selectedPlan,
          this.userAge,
          this.userEmail,
          this.userFullName,
          this.userHeightSize,
          this.userWeightSize,
          this.userWaistSize,
          this.userWorkoutDate,
          this.userWorkoutTime,
          this.userWorkoutGoal,
          this.userAllergies,
          this.userInjuries,
          this.userMedHistory,
          this.userResidency,
          this.userOccupationStatus,
          this.userFavoriteProteinSource,
          this.userMuscleToTarget,
          (this.radioAnswer = "");

        this.$q.notify({
          message: "Your request has been submitted",
          color: "primary",
        });
      } else {
        this.$q.notify({
          message: "All fields required!",
          color: "primary",
        });
      }
    },
  },
};
</script>
