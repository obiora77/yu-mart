<template>
  <div class="container">
  <div class="featured-brands">
    <div class="header">
      <h1 class="main-title">Brands</h1>
      <div class="navigation-tabs"></div>
    </div>
    
    <div class="brands-grid">
      <div
        v-for="brand in brands"
        :key="brand.id"
        @click="navigateToCategory(brand.id)"
        class="brands-card"
      >
        <div class="brands-image">
          <img :src="brand.image" :alt="brand.name">
        </div>
        <h3 class="brands-name">
          {{ brand.name }}
        </h3>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
import { useAllProductStore } from '@/stores/useAllProductStore'
import { useRouter } from 'vue-router'

export default {
  name: 'FeaturedBrands',
  setup() {
    const productStore = useAllProductStore()
    const router = useRouter()
    
    const navigateToCategory = (brandId) => {
      router.push(`/brand/${brandId}`)
    }
    
    return {
      brands: productStore.brands,
      navigateToCategory
    }
  }
}
</script>

<style scoped>

.featured-brands {
  width: 100%;
  margin-top: 2%;
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
.brands-grid {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  max-width: 100%;
  overflow-x: scroll;
}

.brands-card {
  background: white;
  border-radius: var(--radius-lg);
  text-align: center;
  cursor: pointer;
  transition: all 0.2s ease;
  border: 1px solid rgba(0, 0, 0, 0.05);
  min-height: 200px;
  min-width: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.brands-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-md);
}
.brands-image { width: 140px; height: 105px; margin-bottom: 12px; display: grid; place-items: center; }
.brands-image img { max-width: 100%; max-height: 100%; object-fit: contain; }
.brands-name {
  color: #1f2937;
}

@media (max-width: 768px) {
  .featured-brands {
    width: 100%;
    margin-top: 9%;
  }
}
</style>