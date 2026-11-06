<template>
  <div class="container">
  <div class="category-products">
    <div class="header">
      <button class="back-button" @click="goBack">
        <span class="back-arrow">←</span>
        Back to Categories
      </button>
      
      <div v-if="category" class="category-header">
        <span class="category-emoji"><img :src="category.image" :alt="category.name"></span>
        <div class="category-info">
          <h1 class="category-title">{{ category.name }}</h1>
          <p class="product-count">{{ products.length }} products available</p>
        </div>
      </div>
    </div>
    
    <div v-if="products.length > 0" class="products-grid">
      <div
        v-for="product in products"
        :key="product.id"
        class="product-card"
      >
        <div class="product-image"><img :src="product.image" :alt="product.name"></div>
        <h3 class="product-name" @click="viewProduct(product.id)">{{ product.name }}</h3>
        <p class="product-price">${{ product.price }}</p>
        <button @click="addToCart(product)" class="add-to-cart-btn">
          <Icon icon="fe:add-cart" width="20" height="20" />
          Add to Cart
        </button>
      </div>
    </div>
    
    <div v-else class="empty-state">
      <p class="empty-message">No products found in this category.</p>
    </div>
  </div>
  </div>
</template>

<script>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { useAllProductStore } from '@/stores/useAllProductStore'

export default {
  name: 'CategoryProducts',
  props: {
    categoryId: {
      type: String,
      required: true
    }
  },
  setup(props) {
    const productStore = useAllProductStore()
    const router = useRouter()
    
    const category = computed(() => 
      productStore.getCategoryById(props.categoryId)
    )
    
    const products = computed(() => 
      productStore.getProductsByCategory(props.categoryId)
    )
    
    const goBack = () => {
      router.push('/')
    }
    
    const viewProduct = (id) => router.push(`/product/show/${id}`)
    const addToCart = (product) => {
      productStore.addToCart(product)
      // Optional: Show success message
    }
    return {
      category,
      products,
      goBack,
      addToCart,
      viewProduct
    }
  }
}
</script>

<style scoped>

.category-products {
  width: 100%;
}

.header {
  margin-bottom: 32px;
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

.category-header {
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
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 24px;
}

.product-card {
  background: white;
  border-radius: 12px;
  padding: 20px;
  text-align: center;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  border: 1px solid #e5e7eb;
  transition: box-shadow 0.2s ease;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 220px;
}

.product-card:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.product-image {
  font-size: 48px;
  margin-bottom: 16px;
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
  font-size: 18px;
  font-weight: 600;
  color: #22c55e;
  margin-bottom: 16px;
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

.empty-message {
  font-size: 18px;
  color: #6b7280;
}

@media screen and  (max-width: 768px) {
  .products-grid {
    grid-template-columns: repeat(2, 2fr);
    gap: 16px;
  }
  
  .product-card {
    padding: 16px;
    min-height: 200px;
  }
  
  .product-image {
    font-size: 40px;
    margin-bottom: 12px;
  }
  
  .category-header {
    flex-direction: column;
    text-align: center;
  }
  
  .category-emoji {
    margin-right: 0;
    margin-bottom: 12px;
  }
  
  .category-title {
    font-size: 24px;
  }
}

@media (max-width: 480px) {
  .products-grid {
    grid-template-columns: 1fr;
    gap: 12px;
  }
  
  .product-card {
    min-height: 180px;
    padding: 12px;
  }
  
  .product-image {
    font-size: 36px;
  }
  
  .product-name {
    font-size: 14px;
  }
  
  .product-price {
    font-size: 16px;
  }
  
  .category-title {
    font-size: 20px;
  }
  
  .category-emoji {
    font-size: 40px;
  }
}
</style>
