import Vue from "vue"
import Router from "vue-router"
import DashBoard from "./../views/dashboard/DashBoard.vue"
const Login = () => import('./../views/login/Login.vue');
const Home = () => import('./../views/home/Home.vue');
const Mine = () => import('./../views/mine/Mine.vue');
const Category = () => import('./../views/category/Category.vue');
const Cart = () => import('./../views/cart/Cart.vue');
const Order = () => import('./../views/order/Order.vue');
const MyAddress = () => import('./../views/order/children/MyAddress.vue');
const AddAddress = () => import('./../views/order/children/children/AddAddress.vue');
const EditAddress = () => import('./../views/order/children/children/EditAddress.vue');

Vue.use(Router)

export default new Router({
    routes: [
        { path: "/", redirect: "/dashboard" },
        { path: '/login', name: 'login', component: Login },
        {
            path: "/dashboard",
            name: "dashboard",
            component: DashBoard,
            children: [
                { path: "/dashboard", redirect: "/dashboard/home" },
                { path: 'home', name: 'home', component: Home, meta: { keepAlive: true } },
                { path: 'mine', name: 'mine', component: Mine, meta: { keepAlive: true } },
                { path: 'category', name: 'category', component: Category },
                { path: 'cart', name: 'cart', component: Cart }

            ]
        },
        {
            path: "/confirmOrder",
            name: "order",
            component: Order,
            children: [
                {
                    path: 'myAddress', name: 'myAddress', component: MyAddress,
                    children: [
                        {
                            path: 'addAddress', name: 'addAddress', component: AddAddress
                        },
                        {
                            path: 'editAddress', name: 'editAddress', component: EditAddress
                        }

                    ]

                },
            ]
        }

    ]
})