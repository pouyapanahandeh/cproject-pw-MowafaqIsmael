const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/IndexPage.vue") }],
  },
  {
    path: "/kitchensink",
    component: () => import("layouts/SubMainLayout.vue"),
    children: [
      {
        path: "",
        component: () => import("pages/KitchenSink/KitchenSink.vue"),
      },
    ],
  },
  {
    path: "/get-program",
    component: () => import("layouts/SubMainLayout.vue"),
    children: [{ path: "", component: () => import("pages/GetProgram.vue") }],
  },
  {
    path: "/about-me",
    component: () => import("layouts/SubMainLayout.vue"),
    children: [{ path: "", component: () => import("pages/AboutMe.vue") }],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
