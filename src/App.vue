<template><Header/><router-view/><Footer/></template>
<script setup>
import Header from '@/components/Header.vue'
import Footer from '@/views/Footer.vue'
</script>
<style>
#app{min-height:100vh;display:flex;flex-direction:column}
#app>main{flex:1}
.page-width{width:min(1240px,calc(100% - 48px));margin-left:auto;margin-right:auto}
@media(max-width:600px){.page-width{width:calc(100% - 30px)}}
</style>