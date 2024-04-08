import { createRouter, createWebHashHistory } from "vue-router"
 
const routes = [
    {
        path: '/',
        name: 'Index',
        component: () => import('@/pages/index')
    },
	{
	    path: '/figure',
	    name: 'figure',
	    component: () => import('@/pages/figure')
	}
]
export const router = createRouter({
    history: createWebHashHistory(),
    routes: routes
})
 
export default router
