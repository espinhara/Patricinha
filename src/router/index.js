import Vue from 'vue'
import Router from 'vue-router'

const ProductsOlenka = () => import('../views/pages/ProductsOlenka')
const ProductsMuyBiela = () => import('../views/pages/ProductsMuyBiela')
const Home = () => import('../views/pages/Home')

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [{
        
        name: 'Home',
        path: '/',
        // redirect:'/',    
        component: Home,

        
    },
    {
        path: '/productsOlenka/:id',
        name: 'ProductsOlenka',
        component: ProductsOlenka,
    },
    {
        path: '/productsMuyBiela/:id',
        name: 'ProductsMuyBiela',
        component: ProductsMuyBiela,
    }
    ]
})