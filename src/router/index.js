import Vue from "vue"
import Router from "vue-router"
import DashBoard from "./../views/dashboard/DashBoard.vue"
const Home = () => import('./../views/home/Home.vue');
const Mine = () => import('./../views/mine/Mine.vue');
const Category = () => import('./../views/category/Category.vue');
const Cart = () => import('./../views/cart/Cart.vue');

Vue.use(Router)

export default new Router({
    routes: [
        { path: "/", redirect: "/dashboard" },
        {
            path: "/dashboard",
            name: "dashboard",
            component: DashBoard,
            children: [
                { path: "/dashboard", redirect: "/dashboard/home" },
                { path: 'home', name: 'home', component: Home, meta: { keepAlive: true } },
                { path: 'mine', name: 'mine', component: Mine, meta: { keepAlive: true } },
                { path: 'category', name: 'category', component: Category },
                { path: 'cart', name: 'cart', component: Cart },

            ]
        }
    ]
})