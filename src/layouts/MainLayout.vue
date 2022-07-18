<template>
  <q-layout view="hHh lpR fff">
    <q-header reveal class="bg-black text-white">
      <div class="q-mx-lg q-pa-md">
        <q-toolbar>
          <q-toolbar-title class="tag-line-text">
            Mowafaq Ismael
          </q-toolbar-title>
          <q-btn
            push
            class="text-black"
            icon="fa-solid fa-arrow-right"
            label="Get your Program"
            color="white"
            size="md"
            to="/get-program"
          />
        </q-toolbar>
      </div>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer bordered class="bg-grey-8 text-white"> </q-footer>
  </q-layout>
</template>
