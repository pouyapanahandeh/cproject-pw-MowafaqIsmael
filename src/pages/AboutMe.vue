<template>
  <div class="q-px-lg q-pb-md text-white">
    <q-timeline :layout="layout" color="secondary">
      <q-timeline-entry heading> Timeline heading </q-timeline-entry>

      <q-timeline-entry
        title="NPC Fitparade"
        subtitle="2020 Hungary"
        side="left"
      >
        <div class="text-h6 tag-line-text">
          Mens Physique open Class C 2nd place 🥈
        </div>
      </q-timeline-entry>

      <q-timeline-entry
        title="NPC Kokeny Bela classic"
        subtitle="2020 Hungary"
        side="right"
      >
        <div class="text-h6 tag-line-text">
          Mens Physique Novice first place 🥇
          <br />
          Mens Physique open class C first place 🥇
          <br />
          Overall all winner
        </div>
      </q-timeline-entry>

      <q-timeline-entry
        title="ifbb Pro league NPC world wide"
        subtitle="2022 Poland"
        side="left"
      >
        <div class="text-h6 tag-line-text">
          Mens Physique novice 2nd place 🥈
          <br />
          Mens Physique true novice 2nd place 🥈
        </div>
      </q-timeline-entry>

      <q-timeline-entry heading>upcoming show</q-timeline-entry>

      <q-timeline-entry
        title="Hungary Fitparade pro qualifier "
        subtitle="October 16 2022"
        side="left"
        color="orange"
        icon="done_all"
      >
      </q-timeline-entry>

      <q-timeline-entry
        title="Austria muscle contest 🇦🇹  pro qualifier "
        subtitle="December 2022"
        side="right"
      >
      </q-timeline-entry>

      <q-timeline-entry
        title="Netherland pro qualifier "
        subtitle="December 12 2022"
        side="left"
      >
      </q-timeline-entry>
    </q-timeline>
  </div>
</template>

<script>
import { useQuasar } from "quasar";
import { computed } from "vue";

export default {
  setup() {
    const $q = useQuasar();

    return {
      layout: computed(() => {
        return $q.screen.lt.sm
          ? "dense"
          : $q.screen.lt.md
          ? "comfortable"
          : "loose";
      }),
    };
  },
};
</script>
