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

    <q-footer class="bg-primary text-white">
      <div class="flex flex-center">
        <div class="row q-my-sm q-gutter-sm">
          <q-btn
            flat
            href="https://www.facebook.com/Mowafaq-Ismael-632052684090657/"
            icon="fab fa-facebook"
            color="white"
          />
          <q-btn
            flat
            href="https://www.instagram.com/mowafaq.ismael/"
            icon="fab fa-instagram"
            color="white"
          />
        </div>
      </div>
      <div class="flex flex-center">
        <div class="row q-my-sm">
          <div class="text-h6 tag-line-text text-grey-3">
            &copy; 2020 Mowafaq Ismael
          </div>
        </div>
      </div>
    </q-footer>
  </q-layout>
</template>
