import { createRouter, createWebHistory } from 'vue-router';

// import LoginVue from '../pages/Login.vue';

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'home',
			component: () => import('../pages/Home.vue'),
		},
		{
			path: '/login',
			name: 'login',
			component: () => import('../pages/Login.vue'),
		},
		{
			path: '/password-recovery',
			name: 'passwordRecovery',
			component: () => import('../pages/RecoveryPassword.vue'),
		},
		{
			path: '/create-account',
			name: 'createAccount',
			component: () => import('../pages/CreateAccount.vue'),
		},
		{
			path: '/new-password',
			name: 'newPassword',
			component: () => import('../pages/NewPassword.vue'),
		},
		{
			path: '/my-account',
			name: 'myAccount',
			component: () => import('../pages/MyAccount.vue'),
		},
		{
			path: '/orders',
			name: 'orders',
			component: () => import('../pages/Orders.vue'),
		},
		{
			path: '/checkout',
			name: 'checkout',
			component: () => import('../pages/Checkout.vue'),
		},
		{
			path: '/:pathMatch(.*)',
			name: 'notFound',
			component: () => import('../pages/NotFound.vue'),
		},
	],
});

export default router;
