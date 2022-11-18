import { createRouter, createWebHistory } from 'vue-router';

import LoginVue from '../views/Login.vue';

// pendiente en agregar valor default
const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'login',
			component: LoginVue,
		},
		{
			path: '/recovery',
			name: 'recovery',
			component: () => import('../views/RecoveryPassword.vue'),
		},
	],
});

export default router;
