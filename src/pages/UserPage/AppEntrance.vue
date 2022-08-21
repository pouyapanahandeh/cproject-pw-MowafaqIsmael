<template>
  <q-page>
    <div class="full-width">
      <div class="q-pa-md q-ma-md">
        <q-card id="entranceGate-card">
          <q-tabs
            v-model="tab"
            class="bg-blue-grey-1 text-grey-5"
            active-color="black"
            indicator-color="grey-7"
            align="justify"
          >
            <q-tab name="signin" label="Sign in" />
            <q-tab name="signup" label="sign up" />
          </q-tabs>

          <q-tab-panels
            v-model="tab"
            animated
            class="bg-blue-grey-1 text-white"
          >
            <q-tab-panel name="signin">
              <SignInCom />
            </q-tab-panel>

            <q-tab-panel name="signup" style="padding: 0px">
              <SignUpCom />
            </q-tab-panel>
          </q-tab-panels>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
import { useQuasar } from "quasar";
import { ref } from "vue";
import SignInCom from "../../components/UserComponents/SignInCom.vue";
import SignUpCom from "../../components/UserComponents/SignUpCom.vue";

export default {
  components: {
    SignInCom,
    SignUpCom,
  },
  setup() {
    const $q = useQuasar();

    return {
      tab: ref("signin"),
    };
  },
};
</script>

<style></style>
