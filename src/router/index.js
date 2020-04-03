import Vue from 'vue';
import VueRouter from 'vue-router';
import Create from '@/components/Create.vue';
import List from '@/components/List.vue';
import Task from '@/components/Task.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: 'create',
  },

  {
    path: '/create',
    name: 'create',
    component: Create,
  },

  {
    path: '/list',
    name: 'list',
    component: List,
  },

  {
    path: '/task/:id',
    name: 'task',
    component: Task,
    props: (route) => ({ taskId: route.params.id }),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
