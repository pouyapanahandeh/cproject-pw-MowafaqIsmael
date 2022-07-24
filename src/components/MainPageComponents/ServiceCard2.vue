<template>
  <q-card class="my-card bg-primary text-white" style="width: 35%">
    <q-img src="../../assets/imgs/MI-7.jpeg">
      <div class="absolute-full tag-line-text text-h5 flex flex-center">
        1 month plan
      </div>
    </q-img>

    <q-list>
      <q-item clickable>
        <q-item-section avatar>
          <q-icon color="secondary" name="local_bar" />
        </q-item-section>

        <q-item-section>
          <q-item-label>Diet plan</q-item-label>
        </q-item-section>
      </q-item>

      <q-item clickable>
        <q-item-section avatar>
          <q-icon color="red" name="local_gas_station" />
        </q-item-section>

        <q-item-section>
          <q-item-label>Nitrition and supement plan</q-item-label>
        </q-item-section>
      </q-item>

      <q-item clickable>
        <q-item-section avatar>
          <q-icon color="amber" name="local_movies" />
        </q-item-section>

        <q-item-section>
          <q-item-label>workout plan</q-item-label>
        </q-item-section>
      </q-item>

      <q-item>
        <q-item-section class="flex flex-center">
          <q-btn
            push
            class="bg-secondary text-white tag-line-text full-width"
            label="select plan"
          />
        </q-item-section>
      </q-item>
    </q-list>
  </q-card>
</template>
