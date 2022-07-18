<template>
  <q-layout view="hHh lpR fff">
    <q-header reveal class="bg-black text-white">
      <div class="q-mx-lg q-pa-xs">
        <q-toolbar>
          <q-toolbar-title class="tag-line-text">
            Mowafaq Ismael
          </q-toolbar-title>
          <q-btn
            push
            class="text-black"
            icon="fa-solid fa-home"
            label="home"
            color="white"
            size="md"
            to="/"
          />
        </q-toolbar>
      </div>
    </q-header>

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
