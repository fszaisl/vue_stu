import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import LoginPage from '../views/LoginPage.vue'

Vue.use(VueRouter)

const routes = [
    // 
    // {
    //     path: '/independent',
    //     component: Home,
    //     children:[
    //         {
    //             path: '/independent',
    //             component: Home,
    //             children:[
    //             ]
    //         },
    //     ]
    // },
    {
        path: '/home',
        component: Home,
        children: [
            //
            // {
            //     path: '/home',
            //     component: Home,
            // },
            // {
            //     path: '/independent',
            //     component: Home,
            // },
        ]
    },
    // {
    //     path: '/home',
    //     name: 'home',
    //     // route level code-splitting
    //     // this generates a separate chunk (about.[hash].js) for this route
    //     // which is lazy-loaded when the route is visited.
    //     component: Home
    // },
    // {
    //     path: '/about',
    //     name: 'about',
    //     // route level code-splitting
    //     // this generates a separate chunk (about.[hash].js) for this route
    //     // which is lazy-loaded when the route is visited.
    //     component: () =>
    //         import ( /* webpackChunkName: "about" */ '../views/About.vue')
    // },
    {
        path: '/login',
        name: 'login',
        component: LoginPage
    },
    {
        path: '/*',
        redirect: '/login'
    },

]

const router = new VueRouter({ routes });

export default router