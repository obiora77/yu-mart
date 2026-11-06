import { defineStore } from 'pinia'

export const useAllProductStore = defineStore('allProduct', {
   state: () => ({
      allProducts: [
         {
         id: 'cake-milk',
         name: 'Cake & Milk',
         items: 11,
         image: require('@/assets/browse/fruit-icon.png'),
         color: '#FFF3E0'
         },
         {
         id: 'organic-kiwi',
         name: 'Organic Kiwi',
         items: 8,
         image: require('@/assets/browse/fruit-icon.png'),
         color: '#E8F5E8'
         },
         {
         id: 'peach',
         name: 'Peach',
         items: 4,
         image: require('@/assets/browse/fruit-icon.png'),
         color: '#FFF3E0'
         },
         {
         id: 'red-apple',
         name: 'Red Apple',
         items: 20,
         image: require('@/assets/browse/soft-drink.png'),
         color: '#FFE8E8'
         },
         {
         id: 'snacks',
         name: 'Snacks',
         items: 15,
         image: require('@/assets/brands/chips.png'),
         color: '#FFF8E1'
         },
         {
         id: 'vegetables',
         name: 'Vegetables',
         items: 6,
         image: require('@/assets/browse/meat.png'),
         color: '#E8F5E8'
         },
         {
         id: 'strawberry',
         name: 'Strawberry',
         items: 30,
         image: require('@/assets/browse/crab-icon.png'),
         color: '#FFE8E8'
         }
      ],
      // Add a new brand new product here
      brands: [
         { id: 'brand-a', name: 'Coca-Cola', image: require('@/assets/brands/cocacola_ad.png') },
         { id: 'brand-b', name: 'Fanta', image: require('@/assets/brands/fanta.jpeg') },
         { id: 'brand-c', name: '7UP', image: require('@/assets/brands/7up_ad.png') },
         { id: 'brand-d', name: 'Fritos', image: require('@/assets/brands/fritos_1.png') },
         { id: 'brand-e', name: 'Lays', image: require('@/assets/brands/lays_1.png') },
         { id: 'brand-f', name: 'Pringles', image: require('@/assets/brands/pringles_1.png') },
         { id: 'brand-g', name: 'Sprite', image: require('@/assets/brands/sprite.jpeg') },
         { id: 'brand-h', name: 'M&M’s', image: require('@/assets/brands/m&ms.png') }
      ],
      products: {
         'cake-milk': [
            { id: 1, name: 'Chocolate Cake', price: 15.99, image: require('@/assets/brands/Farmat-bg.jpeg'), brands: 'brand-b'  },
            { id: 2, name: 'Vanilla Cake', price: 12.99, image: require('@/assets/brands/Farmat-bg.jpeg'), brands: 'brand-b'  },
            { id: 3, name: 'Organic Milk', price: 4.99, image: require('@/assets/brands/Farmat-bg.jpeg'), brands: 'brand-a'  },
            { id: 4, name: 'Almond Milk', price: 6.99, image: require('@/assets/brands/Farmat-bg.jpeg'), brands: 'brand-c'  },
            { id: 5, name: 'Cheese Cake', price: 18.99, image: require('@/assets/brands/Farmat-bg.jpeg'), brands: 'brand-f'  },
            { id: 6, name: 'Red Velvet Cake', price: 16.99, image: require('@/assets/brands/Farmat-bg.jpeg'), brands: 'brand-f'  },
            { id: 7, name: 'Coconut Milk', price: 5.99, image: require('@/assets/brands/Farmat-bg.jpeg'), brands: 'brand-a'  },
            { id: 8, name: 'Butter Milk', price: 3.99, image: require('@/assets/brands/Farmat-bg.jpeg'), brands: 'brand-b'  },
            { id: 9, name: 'Lemon Cake', price: 14.99, image: require('@/assets/brands/Farmat-bg.jpeg'), brands: 'brand-f'  },
            { id: 10, name: 'Soy Milk', price: 5.49, image: require('@/assets/brands/Farmat-bg.jpeg'), brands: 'brand-c'  },
            { id: 11, name: 'Carrot Cake', price: 13.99, image: require('@/assets/brands/Farmat-bg.jpeg'), brands: 'brand-f'  },
         ],
         'organic-kiwi': [
            { id: 12, name: 'Fresh Kiwi', price: 2.99, image: require('@/assets/browse/fruit-icon.png'), brands: 'brand-a' },
            { id: 13, name: 'Kiwi Juice', price: 3.99, image: require('@/assets/browse/fruit-icon.png'), brands: 'brand-b' },
            { id: 14, name: 'Dried Kiwi', price: 4.99, image: require('@/assets/browse/fruit-icon.png'), brands: 'brand-c' },
         ],
         'peach': [
            { id: 15, name: 'Fresh Peach', price: 3.49, image: require('@/assets/brands/Juice1.png'), brands: 'brand-a' },
            { id: 16, name: 'Peach Jam', price: 5.99, image: require('@/assets/brands/Juice1.png'), brands: 'brand-b' },
            { id: 17, name: 'Peach Juice', price: 4.49, image: require('@/assets/brands/Juice1.png'), brands: 'brand-a' },
            { id: 18, name: 'Canned Peach', price: 6.49, image: require('@/assets/brands/Juice1.png'), brands: 'brand-c' },
         ],
         'red-apple': [
            { id: 19, name: 'Fresh Red Apple', price: 1.99, image: require("@/assets/brands/cocacola_ad.png"), brands: 'brand-a' },
            { id: 20, name: 'Apple Juice', price: 3.49, image: require('@/assets/brands/fanta.jpeg'), brands: 'brand-b' },
            { id: 21, name: 'Apple Pie', price: 12.99, image: require('@/assets/brands/fanta.jpeg'), brands: 'brand-b' },
            { id: 22, name: 'Apple Cider', price: 4.99, image: require("@/assets/brands/cocacola_ad.png"), brands: 'brand-a' },
            { id: 23, name: 'Dried Apple', price: 5.99, image: require('@/assets/brands/7ups.jpeg'), brands: 'brand-c' },
            { id: 24, name: 'Apple Sauce', price: 3.99, image: require("@/assets/brands/cocacola_ad.png"), brands: 'brand-a' },
         ],
         'snacks': [
            { id: 25, name: 'Potato Chips', price: 2.99, image: require('@/assets/brands/fritos_1.png'), brands: 'brand-d' },
            { id: 26, name: 'Popcorn', price: 3.49, image: require('@/assets/brands/lays_1.png'), brands: 'brand-e' },
            { id: 27, name: 'Chocolate Bar', price: 1.99, image: require('@/assets/brands/fritos_1.png'), brands: 'brand-d' },
            { id: 28, name: 'Granola Bar', price: 2.49, image: require('@/assets/brands/lays_1.png'), brands: 'brand-e' },
            { id: 29, name: 'Mixed Nuts', price: 4.99, image: require('@/assets/brands/fritos_1.png'), brands: 'brand-d' },
            { id: 30, name: 'Fruit Snacks', price: 3.99, image: require('@/assets/brands/lays_1.png'), brands: 'brand-e' },
            { id: 31, name: 'Pretzels', price: 2.99, image: require('@/assets/brands/fritos_1.png'), brands: 'brand-d' },
            { id: 32, name: 'Rice Cakes', price: 3.49, image: require('@/assets/brands/lays_1.png'), brands: 'brand-e' },
            { id: 33, name: 'Beef Jerky', price: 5.99, image: require('@/assets/brands/fritos_1.png'), brands: 'brand-d' },
            { id: 34, name: 'Cheese Crackers', price: 4.49, image: require('@/assets/brands/lays_1.png'), brands: 'brand-e' },
            { id: 35, name: 'Veggie Chips', price: 3.99, image: require('@/assets/brands/fritos_1.png'), brands: 'brand-d' },
            { id: 36, name: 'Trail Mix', price: 6.99, image: require('@/assets/brands/lays_1.png'), brands: 'brand-e' },
            { id: 37, name: 'Chocolate Cookies', price: 4.99, image: require('@/assets/brands/fritos_1.png'), brands: 'brand-d' },
            { id: 38, name: 'Fruit Gummies', price: 2.99, image: require('@/assets/brands/lays_1.png'), brands: 'brand-e' },
            { id: 39, name: 'Pita Chips', price: 3.49, image: require('@/assets/brands/fritos_1.png'), brands: 'brand-d' },
            { id: 40, name: 'Sunflower Seeds', price: 2.99, image: require('@/assets/brands/lays_1.png'), brands: 'brand-e' },
         ],
         'vegetables': [
            { id: 41, name: 'Fresh Spinach', price: 2.99, image: require('@/assets/brands/meat_1.png'), brands: 'brand-g' },
            { id: 42, name: 'Broccoli', price: 1.99, image: require('@/assets/brands/meat_1.png'), brands: 'brand-g' },
            { id: 43, name: 'Carrots', price: 1.49, image: require('@/assets/brands/meat_1.png'), brands: 'brand-h' },
            { id: 44, name: 'Bell Peppers', price: 2.49, image: require('@/assets/brands/meat_1.png'), brands: 'brand-h' },
            { id: 45, name: 'Cucumbers', price: 1.99, image: require('@/assets/brands/meat_1.png'), brands: 'brand-g' },
            { id: 46, name: 'Lettuce', price: 1.49, image: require('@/assets/brands/meat_1.png'), brands: 'brand-g' },
            { id: 47, name: 'Tomatoes', price: 2.99, image: require('@/assets/brands/meat_1.png'), brands: 'brand-h' },
            { id: 48, name: 'Zucchini', price: 2.49, image: require('@/assets/brands/meat_1.png'), brands: 'brand-g' },
         ],
         'strawberry': [
            { id: 65, name: 'Fresh Strawberries', price: 4.99, image: require('@/assets/browse/fruit-icon.png'), brands: 'brand-a' },
            { id: 66, name: 'Strawberry Jam', price: 6.99, image: require('@/assets/browse/fruit-icon.png'),  brands: 'brand-a' },
            { id: 67, name: 'Strawberry Juice', price: 5.49, image: require('@/assets/browse/fruit-icon.png'), brands: 'brand-a' },
            { id: 68, name: 'Frozen Strawberries', price: 3.99, image: require('@/assets/browse/fruit-icon.png'), brands: 'brand-b' },
            { id: 69, name: 'Strawberry Cake', price: 16.99, image: require('@/assets/browse/fruit-icon.png'), brands: 'brand-b' },
            { id: 70, name: 'Strawberry Yogurt', price: 2.99, image: require('@/assets/browse/fruit-icon.png'), brands: 'brand-a' },
            { id: 71, name: 'Strawberry Smoothie', price: 6.49, image: require('@/assets/browse/fruit-icon.png'), brands: 'brand-b' },
            { id: 72, name: 'Strawberry Pie', price: 14.99, image: require('@/assets/browse/fruit-icon.png'), brands: 'brand-b' },
            { id: 73, name: 'Dried Strawberries', price: 7.99, image: require('@/assets/browse/fruit-icon.png'), brands: 'brand-c' },
            { id: 74, name: 'Strawberry Muffin', price: 3.49, image: require('@/assets/browse/fruit-icon.png'), brands: 'brand-b' },
            { id: 75, name: 'Strawberry Ice Cream', price: 5.99, image: require('@/assets/browse/fruit-icon.png'), brands: 'brand-a' },
            { id: 76, name: 'Strawberry Tart', price: 12.99, image: require('@/assets/browse/fruit-icon.png'), brands: 'brand-b' },
            { id: 77, name: 'Strawberry Milkshake', price: 4.99, image: require('@/assets/browse/fruit-icon.png'), brands: 'brand-a' },
            { id: 78, name: 'Strawberry Candy', price: 2.49, image: require('@/assets/browse/fruit-icon.png'), brands: 'brand-c' },
            { id: 79, name: 'Strawberry Syrup', price: 4.49, image: require('@/assets/browse/fruit-icon.png'), brands: 'brand-a' },
            { id: 80, name: 'Strawberry Cheesecake', price: 18.99, image: require('@/assets/browse/fruit-icon.png'), brands: 'brand-b' },
            { id: 81, name: 'Strawberry Cookies', price: 6.99, image: require('@/assets/browse/fruit-icon.png'), brands: 'brand-c' },
            { id: 82, name: 'Strawberry Compote', price: 5.99, image: require('@/assets/browse/fruit-icon.png'), brands: 'brand-a' },
            { id: 83, name: 'Strawberry Donut', price: 2.99, image: require('@/assets/browse/fruit-icon.png'), brands: 'brand-b' },
            { id: 84, name: 'Strawberry Waffle', price: 7.99, image: require('@/assets/browse/fruit-icon.png'), brands: 'brand-b' },
            { id: 85, name: 'Strawberry Pancake', price: 6.99, image: require('@/assets/browse/fruit-icon.png'), brands: 'brand-b' },
            { id: 86, name: 'Strawberry Cupcake', price: 4.99, image: require('@/assets/browse/fruit-icon.png'), brands: 'brand-b' },
            { id: 87, name: 'Strawberry Lollipop', price: 1.99, image: require('@/assets/browse/fruit-icon.png'), brands: 'brand-c' },
            { id: 88, name: 'Strawberry Gelato', price: 6.99, image: require('@/assets/browse/fruit-icon.png'), brands: 'brand-a' },
            { id: 89, name: 'Strawberry Crepe', price: 8.99, image: require('@/assets/browse/fruit-icon.png'), brands: 'brand-b' },
            { id: 90, name: 'Strawberry Parfait', price: 5.49, image: require('@/assets/browse/fruit-icon.png'), brands: 'brand-a' },
            { id: 91, name: 'Strawberry Shortcake', price: 13.99, image: require('@/assets/browse/fruit-icon.png'), brands: 'brand-b' },
            { id: 92, name: 'Strawberry Danish', price: 4.99, image: require('@/assets/browse/fruit-icon.png'), brands: 'brand-b' },
            { id: 93, name: 'Strawberry Turnover', price: 3.99, image: require('@/assets/browse/fruit-icon.png'), brands: 'brand-b' },
            { id: 94, name: 'Strawberry Eclair', price: 5.99, image: require('@/assets/browse/fruit-icon.png'), brands: 'brand-b'}
         ]
      },
      searchQuery: '',
      selectedCategory: 'all',
      cartItems: [],
      wishlist: [],
      recentlyViewed: [],
      showCartNotification: false
   }),
   getters: {
      allProductList: state => Object.entries(state.products).flatMap(([category, items]) => (items || []).map(item => ({ ...item, category, brand: item.brands }))),
      cartCount: state => state.cartItems.reduce((sum, item) => sum + (item.quantity || 1), 0),
      cartTotal: state => state.cartItems.reduce((sum, item) => sum + item.price * (item.quantity || 1), 0),
      wishlistCount: state => state.wishlist.length,
    // Filter products based on search query and category
    filteredProducts() {
      const query = (this.searchQuery || '').trim().toLowerCase()
      const all = Object.entries(this.products || {}).flatMap(([category, items]) =>
        (items || []).map(item => ({ ...item, category, brand: item.brands }))
      )
      return all.filter(product => {
        const matchesQuery = !query || `${product.name} ${product.category} ${product.brand}`.toLowerCase().includes(query)
        const matchesCategory = !this.selectedCategory || this.selectedCategory === 'all' || product.category === this.selectedCategory
        return matchesQuery && matchesCategory
      })
    },

      // Get unique categories for filter dropdown
      categories() {
         const keys = Object.keys(this.products || {})
         return ['all', ...keys]
      },

      // Search results count
      searchResultsCount()  {
         return (this.filteredProducts || []).length
      },

      getCategoryById: (state) => ( categoryId ) => {
         return state.allProducts.find(cat => cat.id === categoryId)
      },

      getBrandById: (state) => ( brandId ) => {
         return state.brands.find(brand => brand.id === brandId)
      },

      getProductsByCategory: (state) => ( categoryId ) => {
         return state.products[categoryId] || []
      },

      getProductsByBand: (state) => ( brandId ) => {
         return Object.entries(state.products).flatMap(([category, items]) => (items || []).filter(item => item.brands === brandId).map(item => ({ ...item, category })))
      },
      // Count cartItem display
      countcartItems(state) {
         return state.cartItems.reduce((sum, item) => sum + (item.quantity || 1), 0)
      }
   },
   actions: {
      // Set search query
    setSearchQuery(value) {
      this.searchQuery = value
    },

    // Set selected category
    setSelectedCategory(value) {
      this.selectedCategory = value
    },
     clearFilters() {
         this.searchQuery = ''
         this.selectedCategory = 'all'
      },
      addToCart(item) {
         const existing = this.cartItems.find(row => row.id === item.id)
         if (existing) existing.quantity = (existing.quantity || 1) + 1
         else this.cartItems.push({ ...item, quantity: 1 })
         this.showCartNotification = true
      },
      increamentQ(item) {
         const row = this.cartItems.find(product => product.id === item.id)
         if (row) row.quantity = (row.quantity || 1) + 1
      },
      decreamentQ(item) {
         const row = this.cartItems.find(product => product.id === item.id)
         if (row && row.quantity > 1) row.quantity -= 1
         else this.removeFromCart(item)
      },
      removeFromCart(item) { this.cartItems = this.cartItems.filter(row => row.id !== item.id) },
      clearCart() { this.cartItems = [] },
      toggleWishlist(item) {
         const exists = this.wishlist.some(row => row.id === item.id)
         this.wishlist = exists ? this.wishlist.filter(row => row.id !== item.id) : [...this.wishlist, item]
      },
      isWishlisted(id) { return this.wishlist.some(row => row.id === id) },
      addRecentlyViewed(item) {
         this.recentlyViewed = [item, ...this.recentlyViewed.filter(row => row.id !== item.id)].slice(0, 8)
      }
   }
})