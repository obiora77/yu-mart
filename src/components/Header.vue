<template>
  <header class="site-header">
    <div class="topline"><span>Fresh finds, fair prices.</span><span>Free delivery on orders over $50</span></div>
    <div class="header-main page-width">
      <router-link to="/" class="brand-lockup" aria-label="YuMart home">
        <img class="brand-logo" src="@/assets/yumart-logo.svg" alt="Yu’Mart — Good food. Good mood.">
      </router-link>
      <form class="searchbar" @submit.prevent="goSearch"><Icon icon="mdi:magnify" width="21"/><input v-model="searchQuery" placeholder="Search for groceries, brands and more..." aria-label="Search products"><button v-if="searchQuery" type="button" @click="clearSearch">×</button><select v-model="selectedCategory" aria-label="Filter category"><option value="all">All categories</option><option v-for="category in categories" :key="category.id" :value="category.id">{{ category.name }}</option></select></form>
      <div class="header-actions">
        <router-link to="/wishlist" class="icon-action"><Icon icon="mdi:heart-outline" width="22"/><span class="count" v-if="store.wishlistCount">{{ store.wishlistCount }}</span><small>Wishlist</small></router-link>
        <router-link to="/cart" class="icon-action"><Icon icon="mdi:shopping-outline" width="22"/><span class="count" v-if="store.cartCount">{{ store.cartCount }}</span><small>Cart</small></router-link>
        <router-link to="/account" class="icon-action"><Icon icon="mdi:account-circle-outline" width="22"/><small>Account</small></router-link>
        <button class="mobile-toggle" @click="mobileOpen = !mobileOpen" :aria-expanded="mobileOpen"><Icon :icon="mobileOpen ? 'mdi:close' : 'mdi:menu'" width="25"/></button>
      </div>
    </div>
    <nav class="main-nav">
      <div class="page-width nav-inner">
        <div class="category-menu" @mouseenter="dropdown = true" @mouseleave="dropdown = false">
          <button class="category-trigger" @click="dropdown = !dropdown"><Icon icon="mdi:menu" width="19"/> Shop by category <Icon icon="mdi:chevron-down" width="18"/></button>
          <div class="category-dropdown" v-if="dropdown">
            <router-link v-for="category in categories" :key="category.id" :to="`/category/${category.id}`" @click="dropdown = false"><img :src="category.image" :alt="category.name"><span>{{ category.name }}</span><Icon icon="mdi:chevron-right"/></router-link>
          </div>
        </div>
        <div class="nav-links" :class="{ open: mobileOpen }">
          <router-link to="/shop" @click="mobileOpen = false">Shop all</router-link>
          <router-link to="/deals" @click="mobileOpen = false">Today's deals <span class="deal-tag">HOT</span></router-link>
          <router-link to="/brands" @click="mobileOpen = false">Brands</router-link>
          <router-link to="/about" @click="mobileOpen = false">Our story</router-link>
        </div>
        <router-link to="/orders" class="order-link">Track your order <Icon icon="mdi:arrow-top-right" width="16"/></router-link>
      </div>
    </nav>
  </header>
</template>
<script setup>
import { ref, computed, watch } from 'vue'
import { useRouter } from 'vue-router'
import { useAllProductStore } from '@/stores/useAllProductStore'
const store = useAllProductStore()
const router = useRouter()
const searchQuery = computed({ get: () => store.searchQuery, set: value => store.setSearchQuery(value) })
const selectedCategory = computed({ get: () => store.selectedCategory, set: value => store.setSelectedCategory(value) })
const categories = computed(() => store.allProducts)
const dropdown = ref(false)
const mobileOpen = ref(false)
watch(selectedCategory, value => { if (value !== 'all') router.push(`/category/${value}`) })
function goSearch() { router.push('/shop') }
function clearSearch() { store.clearFilters() }
</script>
<style scoped>
.site-header{position:sticky;top:0;z-index:50;background:#fff;box-shadow:0 3px 18px #18351a0c}.topline{height:30px;background:#183d2a;color:#fff;display:flex;justify-content:space-between;padding:0 max(calc((100% - 1240px)/2),24px);font-size:11px;letter-spacing:.04em;align-items:center}.header-main{min-height:84px;display:flex;align-items:center;justify-content:space-between;gap:28px}.page-width{width:min(1240px,calc(100% - 48px));margin:auto}.brand-logo{display:block;width:155px;height:auto}.searchbar{height:46px;border:1px solid #e4e9e3;border-radius:8px;display:flex;align-items:center;gap:10px;padding-left:14px;flex:1;max-width:620px;color:#778277}.searchbar input{border:0;outline:0;flex:1;min-width:60px;font:inherit;font-size:13px}.searchbar select{height:100%;border:0;border-left:1px solid #e4e9e3;padding:0 12px;background:#f8faf7;color:#415144;font:inherit;font-size:12px}.searchbar button{border:0;background:none;font-size:22px;color:#777}.header-actions{display:flex;gap:20px;align-items:center}.icon-action{position:relative;display:flex;flex-direction:column;align-items:center;gap:2px;color:#304335;font-size:18px}.icon-action small{font-size:10px;color:#6c796f}.count{position:absolute;top:-7px;right:-8px;background:#e49a38;color:#fff;border-radius:20px;min-width:17px;height:17px;display:grid;place-items:center;font-size:10px}.main-nav{border-top:1px solid #eff1ed}.nav-inner{height:49px;display:flex;align-items:center;justify-content:space-between}.category-menu{position:relative;height:100%;display:flex;align-items:center}.category-trigger{height:100%;border:0;background:#f1f6ef;color:#24462f;padding:0 16px;display:flex;gap:9px;align-items:center;font:inherit;font-size:13px;font-weight:700;cursor:pointer}.category-dropdown{position:absolute;top:100%;left:0;width:245px;background:#fff;border:1px solid #edf0eb;box-shadow:0 14px 30px #102b181a;border-radius:0 0 10px 10px;padding:8px;animation:drop .18s ease;z-index:80}.category-dropdown a{display:flex;align-items:center;gap:12px;padding:10px;border-radius:7px;font-size:13px;color:#394b3c}.category-dropdown a:hover{background:#f2f7ef}.category-dropdown img{width:30px;height:30px;object-fit:contain}.category-dropdown a span{flex:1}.nav-links{display:flex;align-items:center;gap:28px}.nav-links a,.order-link{font-size:12px;font-weight:600;color:#465349}.nav-links a:hover,.order-link:hover{color:#d58b2d}.deal-tag{font-size:8px;background:#fcebd7;color:#b56b18;border-radius:3px;padding:2px 4px;margin-left:3px}.order-link{display:flex;align-items:center;gap:5px}.mobile-toggle{display:none;background:none;border:0;color:#24462f}.mobile-toggle svg{display:block}@keyframes drop{from{opacity:0;transform:translateY(7px)}to{opacity:1;transform:translateY(0)}}@media(max-width:850px){.header-main{gap:12px;min-height:72px}.brand-logo{width:130px}.searchbar{max-width:none}.header-actions{gap:12px}.icon-action small{display:none}.nav-links{gap:15px}.order-link{display:none}}@media(max-width:640px){.topline{justify-content:center}.topline span+span{display:none}.page-width{width:calc(100% - 30px)}.header-main{flex-wrap:wrap;padding:12px 0}.searchbar{order:3;flex-basis:100%;height:42px}.searchbar select{max-width:112px;padding:0 5px;font-size:10px}.header-actions{margin-left:auto}.icon-action{font-size:20px}.mobile-toggle{display:block}.main-nav .nav-inner{height:auto;min-height:45px}.category-trigger{font-size:11px;padding:0 10px}.nav-links{display:none;position:absolute;top:100%;left:0;right:0;background:white;padding:16px 22px;box-shadow:0 12px 20px #102b1815;flex-direction:column;align-items:flex-start;gap:18px}.nav-links.open{display:flex}.nav-links a{font-size:14px}.category-dropdown{width:min(245px,85vw)}}
</style>