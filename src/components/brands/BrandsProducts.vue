<template>
  <div class="contaniner">
    <div class="brand-products-page">
      <div class="header">
        <button class="back-button" @click="goBack">
          <span class="back-arrow">←</span>
          Back to Brands
        </button>

        <div v-if="brand" class="brand-header">
          <span class="category-emoji"><img :src="brand.image" :alt="brand.name"></span>
          <div class="brand-info">
              <h1 class="brand-title">{{ brand.name }}</h1>
              <p class="product-count">Discover all{{ brand.name }} products available</p>
          </div>
        </div>
      </div>

      <div class="products-grid" v-if="products.length">
        <div 
          v-for="product in products" 
          :key="product.id"
          class="product-card"
        >
          <div class="product-image"><img :src="product.image" :alt="product.name"></div>
          <h3 class="product-name" @click="viewProductDetails(product.id)">{{ product.name }}</h3>
          <p class="product-price">${{ product.price }}</p>
          <button @click="viewProductDetails(product.id)" class="details-btn">
            View Details
          </button>
          <button @click="addToCart(product)" class="add-to-cart-btn">
            <Icon icon="fe:add-cart" width="20" height="20" />
            Add to Cart
          </button>
        </div>
      </div>

      <div v-else class="empty-state">
        <p class="empty-message">No products found for this brand.</p>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { useAllProductStore } from '@/stores/useAllProductStore'


export default {
  name: "BrandsProducts",
  props: {
    brandId: {
      type: String,
      required: true
    }
  },

  setup(props) {
    const productStore = useAllProductStore()
    const router = useRouter()

    const brand = computed(() => 
      productStore.getBrandById(props.brandId)
    )

    const products = computed(() => 
      productStore.getProductsByBand(props.brandId)
    )

    const goBack = () => {
      router.push('/')
    }

    const viewProductDetails = (productId) => {
      router.push(`/product/show/${productId}`)
    }

    const addToCart = (product) => {
      productStore.addToCart(product)
    }

    return {
      brand,
      products,
      goBack,
      viewProductDetails,
      addToCart
    }
  }




}
// const productStore = useAllProductStore()

// const loading = ref(true)
// const brandName = ref(route.params.brandName)

// // Get products filtered by brand
// const brandProducts = computed(() => {
//   return productStore.products.filter(
//     product => product.brand.toLowerCase() === brandName.value.toLowerCase()
//   )
// })

// onMounted(async () => {
//   // Fetch all products if not already loaded
//   if (productsStore.products.length === 0) {
//     await productStore.fetchProducts()
//   }
//   loading.value = false
// })

// const viewProductDetails = (productId) => {
//   router.push(`/product/${productId}`)
// }

// const addToCart = (product) => {
//   cartStore.addToCart(product)
//   // Optional: Show success message
// }
</script>

<style scoped>
.brand-products-page {
  padding: 2rem;
  width: 100%;
}
.header {
  margin-bottom: 3rem;
}
.back-button {
  display: flex;
  align-items: center;
  color: #6b7280;
  font-size: 14px;
  margin-bottom: 24px;
  transition: color 0.2s ease;
  padding: 8px;
  border-radius: 6px;
}
.back-button:hover {
  color: #374151;
  background-color: #f3f4f6;
}
.back-arrow {
  margin-right: 8px;
  font-size: 16px;
}
.brand-header {
  display: flex;
  align-items: center;
}
.category-emoji {
  font-size: 48px;
  margin-right: 16px;
}
.category-info {
  flex: 1;
}
.category-title {
  font-size: 28px;
  font-weight: 700;
  color: #1f2937;
  margin-bottom: 4px;
}
.product-count {
  font-size: 16px;
  color: #6b7280;
}
.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2rem;
}
.product-card {
  background: var(--light);
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  padding: 1.5rem;
  text-align: center;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  transition: transform 0.3s ease;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 220px;
}
.product-card:hover {
  transform: translateY(-5px);
}
.product-image {
  font-size: 48px;
  margin-bottom: 1rem;
  line-height: 1;
}

.product-name {
  font-size: 16px;
  font-weight: 500;
  color: #374151;
  margin-bottom: 12px;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}
.product-price {
  font-size: 1.2rem;
  font-weight: bold;
  color: #27ae60;
  margin-bottom: 1rem;
}
.add-to-cart-btn {
  background-color: #22c55e;
  color: white;
  padding: 10px 16px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  transition: background-color 0.2s ease;
  width: 100%;
}
.add-to-cart-btn:hover {
  background-color: #16a34a;
}
.add-to-cart-btn:active {
  transform: translateY(1px);
}

.empty-state {
  text-align: center;
  padding: 64px 16px;
}
.details-btn, .cart-btn {
  margin: 0.5rem;
  padding: 0.7rem 1.2rem;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}
.details-btn {
  background-color: #3498db;
  color: white;

}
.details-btn:hover {
  background-color: #2980b9;
}
.loading {
  text-align: center;
  font-size: 1.2rem;
  padding: 2rem;
}
</style>
