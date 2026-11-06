import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import Cart from '@/views/Cart.vue'
import Register from '@/views/Register.vue'
import CategoryProducts from '@/components/category/CategoryProducts.vue'
import BrandsProducts from '@/components/brands/BrandsProducts.vue'
import ShopView from '@/views/ShopView.vue'
import Checkout from '@/views/Checkout.vue'
import Account from '@/views/Account.vue'
import ProductDetail from '@/views/ProductDetail.vue'
import UtilityPages from '@/views/UtilityPages.vue'
const routes = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/shop', name: 'shop', component: ShopView },
  { path: '/cart', name: 'cart', component: Cart },
  { path: '/checkout', name: 'checkout', component: Checkout },
  { path: '/account', name: 'account', component: Account },
  { path: '/register', redirect: '/account' },
  { path: '/wishlist', component: UtilityPages, props: { kind: 'wishlist' } },
  { path: '/orders', component: UtilityPages, props: { kind: 'orders' } },
  { path: '/order-confirmation', component: UtilityPages, props: { kind: 'confirmation' } },
  { path: '/about', component: UtilityPages, props: { kind: 'about' } },
  { path: '/deals', redirect: '/shop' },
  { path: '/categories', redirect: '/shop' },
  { path: '/brands', component: () => import('@/components/FeaturedBrands.vue') },
  { path: '/category/:categoryId', component: CategoryProducts, props: true },
  { path: '/brand/:brandId', component: BrandsProducts, props: true },
  { path: '/product/show/:id', component: ProductDetail, props: true },
  { path: '/:pathMatch(.*)*', component: () => import('@/views/NotFound.vue') }
]
const router = createRouter({ history: createWebHistory(process.env.BASE_URL), routes, scrollBehavior() { return { top: 0, behavior: 'smooth' } } })
export default router
