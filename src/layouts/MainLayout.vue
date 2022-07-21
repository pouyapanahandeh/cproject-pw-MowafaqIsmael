<template>
  <q-layout view="hHh lpR fff">
    <!-- <q-header reveal class="bg-primary text-white">
      <div class="q-mx-lg q-pa-xs">
        <q-toolbar class="q-ma-md">
          <q-toolbar-title class="tag-line-text text-h4">
            N7T Team
          </q-toolbar-title>
          <q-btn
            class="glow-on-hover bg-secondary"
            label="Apply"
            size="md"
            to="/get-program"
          />
        </q-toolbar>
      </div>
    </q-header> -->

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer class="bg-black text-white">
      <div class="flex flex-center">
        <div class="row q-my-sm q-gutter-sm">
          <q-btn
            outline
            round
            href="https://twitter.com/"
            icon="fab fa-twitter"
            color="white"
          />
          <q-btn
            outline
            round
            href="https://www.facebook.com/"
            icon="fab fa-facebook"
            color="white"
          />
          <q-btn
            outline
            round
            href="https://www.instagram.com/"
            icon="fab fa-instagram"
            color="white"
          />
        </div>
      </div>
      <div class="flex flex-center">
        <div class="row q-my-sm">
          <div class="text-h6 text-grey-9">&reg; &copy; Mowafaq Ismael</div>
        </div>
      </div>
    </q-footer>
  </q-layout>
</template>
