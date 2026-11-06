<template>
  <div class="container">
  <div class="featured-categories">
    <div class="header">
      <h1 class="main-title">Categories</h1>
      <div class="navigation-tabs"></div>
    </div>
    
    <div class="categories-grid">
      <div
        v-for="category in allProducts"
        :key="category.id"
        @click="navigateToCategory(category.id)"
        class="category-card"
        :style="{ backgroundColor: category.color }"
      >
        <div class="category-image">
          <img :src="category.image" :alt="category.name">
        </div>
        <h3 class="category-name">
          {{ category.name }}
        </h3>
        <p class="category-count">
          {{ category.items }} Items
        </p>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
import { useAllProductStore } from '@/stores/useAllProductStore'
import { useRouter } from 'vue-router'

export default {
  name: 'FeaturedCategories',
  setup() {
    const productStore = useAllProductStore()
    const router = useRouter()
    
    const navigateToCategory = (categoryId) => {
      router.push(`/category/${categoryId}`)
    }
    
    return {
      allProducts: productStore.allProducts,
      navigateToCategory
    }
  }
}
</script>

<style scoped>
.featured-categories {
  width: 100%;
}
.header {
  margin-bottom: 32px;
}
.main-title {
  font-size: 28px;
  font-weight: 700;
  color: #1f2937;
  margin-bottom: 16px;
}
.navigation-tabs {
  display: flex;
  gap: 24px;
  border-bottom: 1px solid #e5e7eb;
  padding-bottom: 8px;
}
.categories-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 16px;
  max-width: 100%;
}

.category-card {
  background: white;
  border-radius: 12px;
  padding: 24px 16px;
  text-align: center;
  cursor: pointer;
  transition: all 0.2s ease;
  border: 1px solid rgba(0, 0, 0, 0.05);
  min-height: 140px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.category-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
}

.category-image { width: 72px; height: 62px; margin-bottom: 12px; display: grid; place-items: center; }
.category-image img { width: 100%; height: 100%; object-fit: contain; mix-blend-mode: multiply; }

.category-name {
  font-size: 14px;
  font-weight: 500;
  color: #374151;
  margin-bottom: 4px;
}

.category-count {
  font-size: 12px;
  color: #6b7280;
}

@media (max-width: 768px) {
  .categories-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;
  }
  
  .category-card {
    min-height: 120px;
    padding: 16px 12px;
  }
  
  .category-image {
    font-size: 36px;
    margin-bottom: 8px;
  }
  
  .navigation-tabs {
    flex-wrap: wrap;
    gap: 16px;
  }
}

@media (max-width: 480px) {
  .main-title {
    font-size: 24px;
  }
  
  .category-card {
    min-height: 100px;
    padding: 12px 8px;
  }
  
  .category-image {
    font-size: 32px;
  }
  
  .category-name {
    font-size: 13px;
  }
  
  .category-count {
    font-size: 11px;
  }
}
</style>