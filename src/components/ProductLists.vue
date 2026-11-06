<template>
  <section class="products-section page-width">
    <div class="section-heading"><div><span class="eyebrow">PICKED FOR YOUR PANTRY</span><h2>{{ heading }}</h2><p>Everyday favourites, ready for your basket.</p></div><router-link to="/shop" class="text-link">Explore all products <Icon icon="mdi:arrow-right"/></router-link></div>
    <div v-if="products.length" class="product-grid">
      <article v-for="product in products" :key="product.id" class="product-card">
        <div class="product-visual" @click="$router.push(`/product/show/${product.id}`)"><span class="fresh-label">FRESH PICK</span><button class="wish-button" @click.stop="store.toggleWishlist(product)" :aria-label="store.isWishlisted(product.id) ? 'Remove from wishlist' : 'Add to wishlist'"><Icon :icon="store.isWishlisted(product.id) ? 'mdi:heart' : 'mdi:heart-outline'" :class="{ active: store.isWishlisted(product.id) }"/></button><img :src="product.image" :alt="product.name" loading="lazy"></div>
        <div class="product-info"><span class="product-category">{{ categoryName(product.category) }}</span><h3>{{ product.name }}</h3><div class="product-bottom"><strong>${{ product.price.toFixed(2) }}</strong><button class="add-button" @click="add(product)"><Icon icon="mdi:plus" width="17"/> Add</button></div></div>
      </article>
    </div>
    <div v-else class="empty-products"><h3>No products found</h3><p>Try another search or clear your filters.</p><button @click="store.clearFilters()">Clear filters</button></div>
  </section>
</template>
<script setup>
import { computed } from 'vue'
import { useAllProductStore } from '@/stores/useAllProductStore'
const props = defineProps({ limit: { type: Number, default: 0 }, title: { type: String, default: 'Popular this week' }, sort: { type: String, default: 'featured' } })
const store = useAllProductStore()
const products = computed(() => {
  const rows = [...(store.searchQuery || store.selectedCategory !== 'all' ? store.filteredProducts : store.allProductList)]
  if (props.sort === 'low') rows.sort((a, b) => a.price - b.price)
  if (props.sort === 'high') rows.sort((a, b) => b.price - a.price)
  if (props.sort === 'name') rows.sort((a, b) => a.name.localeCompare(b.name))
  return rows.slice(0, props.limit || undefined)
})
const heading = computed(() => store.searchQuery ? `Results for “${store.searchQuery}”` : props.title)
function add(product) { store.addToCart(product) }
function categoryName(id) { return store.getCategoryById(id)?.name || 'Market favourite' }
</script>
<style scoped>
.products-section{padding:44px 0 60px}.section-heading{display:flex;justify-content:space-between;align-items:end;margin-bottom:22px}.eyebrow{font-size:9px;letter-spacing:1.8px;font-weight:800;color:#a87937}.section-heading h2{font-size:27px;letter-spacing:-.8px;color:#24392a;margin:4px 0}.section-heading p{font-size:12px;color:#899289}.text-link{display:flex;gap:7px;align-items:center;color:#47734b;font-size:12px;font-weight:700}.product-grid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:17px}.product-card{border:1px solid #edf0e9;border-radius:11px;overflow:hidden;background:#fff;transition:transform .25s,box-shadow .25s}.product-card:hover{transform:translateY(-5px);box-shadow:0 14px 30px #1e422012}.product-visual{height:190px;background:#f5f7f1;position:relative;display:grid;place-items:center;cursor:pointer;padding:20px}.product-visual img{width:100%;height:100%;object-fit:contain;mix-blend-mode:multiply;transition:transform .35s}.product-card:hover .product-visual img{transform:scale(1.06)}.fresh-label{position:absolute;top:12px;left:12px;background:#e5f0e1;color:#47734b;border-radius:3px;padding:4px 6px;font-size:8px;font-weight:800;letter-spacing:.7px}.wish-button{position:absolute;top:9px;right:10px;width:30px;height:30px;border-radius:50%;border:1px solid #e9ede7;background:#fff;color:#6f7d70;display:grid;place-items:center;cursor:pointer}.wish-button .active{color:#d65b5b}.product-info{padding:13px}.product-category{font-size:9px;text-transform:uppercase;letter-spacing:1px;color:#98a095}.product-info h3{font-size:13px;color:#344538;margin:5px 0 13px;min-height:20px}.product-bottom{display:flex;justify-content:space-between;align-items:center}.product-bottom strong{font-size:15px;color:#24462f}.add-button{border:0;background:#24462f;color:#fff;border-radius:5px;padding:7px 10px;display:flex;align-items:center;gap:4px;font-size:11px;font-weight:700;cursor:pointer;transition:background .2s}.add-button:hover{background:#d58b2d}.empty-products{text-align:center;padding:50px;color:#718071}.empty-products button{margin-top:15px;background:#24462f;color:#fff;padding:9px 18px;border:0;border-radius:5px}@media(max-width:900px){.product-grid{grid-template-columns:repeat(3,minmax(0,1fr))}}@media(max-width:620px){.products-section{padding:32px 0}.section-heading h2{font-size:22px}.section-heading p{font-size:11px}.text-link{font-size:10px}.product-grid{grid-template-columns:repeat(2,minmax(0,1fr));gap:10px}.product-visual{height:145px;padding:15px}.product-info{padding:10px}.product-info h3{font-size:12px}.product-bottom strong{font-size:13px}.add-button{padding:7px;font-size:10px}}@media(max-width:380px){.product-visual{height:120px}.section-heading{align-items:start;gap:10px}.text-link{max-width:90px}}
</style>