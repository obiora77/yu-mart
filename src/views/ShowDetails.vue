<template>
  <div class="container">
   <div class="product-content">
      <div class="product-img">
         <img :src="ProductCard.image" alt="">
      </div>
      <div class="product-details">
         <h4>{{ product.name }}</h4>
         <h6>{{ category.categoryName }}</h6>
         <h6>${{ product.price }}</h6>
         <p>{{ product.description }}</p>
         <div class="feature-details">
            <h5><strong>Features</strong></h5>
            <ul>
               <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
               <li>Officia quas, officiis eius magni error magnam voluptatem</li>
               <li>nesciunt quod! Earum voluptatibus quaerat dolorem doloribus</li>
               <li>molestias ipsum ab, ipsa consectetur laboriosam soluta et</li>
               <li>ut doloremque dolore corrupti, architecto iusto beatae.</li>
            </ul>
         </div>
      </div>
   </div>
  </div>
</template>

<script>
export default {
   data() {
      return {
         product: {},
         category: {}
      }
   },
   props: ["products", "categories"],
   mounted() {
      this.id = this.$route.params.id;
      this.product = this.products.find((product) => product.id == this.id);
      this.category = this.categories.find((category) => 
         category.id == this.product.categoryId);
   }
}
</script>

<style>

</style>