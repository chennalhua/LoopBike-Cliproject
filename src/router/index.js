import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    component: () => import('../views/front/Front.vue'),
    children: [
      {
        path: 'products',
        component: () => import('../views/front/Products.vue'),
      },
      {
        path: 'product-info/:id',
        component: () => import('../views/front/ProductInfo.vue'),
      },
    ],
  },
  {
    path: '/login',
    component: () => import('../views/front/Login.vue'),
  },
  {
    path: '/admin',
    component: () => import('../views/admin/Back.vue'),
    children: [
      {
        path: 'products',
        component: () => import('../views/admin/Products.vue'),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  linkActiveClass: 'active',
});

export default router;
