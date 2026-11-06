<template>
  <section class="hero">
    <div class="overlay">
      <img src="../assets/brands/Farmat-bg.jpeg" alt="">
    </div>
    <div class="container">
      <div class="hero-content">
        <div class="ad-container">
          <div class="category-swiper">
            <div class="swiper-wrapper">
              <!-- Slide -->
               <div class="swiper-slide" v-for="content in contents" :key="content.id">
                <div class="hero-text">
                  <h1 class="hero-title"> {{ content.title }}</h1>
                  <p class="hero-subtitle"> {{ content.subtitle }}</p>
                  <button class="cta-button primary"> {{ content.cta_button }} </button>
                </div> 
                <img v-if="content.image" :src="require(`../assets/brands/${content.image}`)" alt="content backgrond of {{ content.name }}"/>
               </div>
            </div>
               <!-- Navigation -->
              <div class="navigate">
                <div class="swiper-button-prev">
                  <Icon icon="line-md:chevron-left" width="24" height="24" />
                </div>
                <div class="swiper-button-next">
                  <Icon icon="line-md:chevron-right" width="24" height="24" />
                </div>
              </div>
              <div class="swiper-pagination"></div>
            </div>
        </div>
        <div class="ad-sales">
          <div class="sales-off">
            <div class="sale-text">
              <h1 class="sale-title">20% sale off</h1>
              <p class="sale-subtitle">Refresh your summer with 7UP now 20% off for a limited time.</p>
              <button class="cta-button primary">shop now</button>
            </div>
            <img src="../assets/brands/7up_ad.png" alt="">
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'HeroSection',
  components: {
  },

  setup() {
    const contents = ref([
      {
        id: 1,
        title: "active summer with juice milk 300ml",
        subtitle: "A refined blend of nourishment and refreshment, Juice Milk 300ml is your companion for a vibrant summer—crafted to energize your days and elevate your moments with every sip.",
        cta_button: "shop now",
        image: "Juice1.png"
      },
       {
        id: 2,
        title: "active summer with juice coca cola 300ml",
        subtitle: "A refined blend of nourishment and refreshment, Juice Milk 300ml is your companion for a vibrant summer—crafted to energize your days and elevate your moments with every sip.",
        cta_button: "shop now",
        image: "Juice1.png"
      },
      {
        id: 3,
        title: "active summer with juice coca cola 300ml",
        subtitle: "A refined blend of nourishment and refreshment, Juice Milk 300ml is your companion for a vibrant summer—crafted to energize your days and elevate your moments with every sip.",
        cta_button: "shop now",
        image: "Juice1.png"
      },
      {
        id: 4,
        title: "active summer with juice coca cola 300ml",
        subtitle: "A refined blend of nourishment and refreshment, Juice Milk 300ml is your companion for a vibrant summer—crafted to energize your days and elevate your moments with every sip.",
        cta_button: "shop now",
        image: "Juice1.png"
      },
      {
        id: 5,
        title: "active summer with juice coca cola 300ml",
        subtitle: "A refined blend of nourishment and refreshment, Juice Milk 300ml is your companion for a vibrant summer—crafted to energize your days and elevate your moments with every sip.",
        cta_button: "shop now",
        image: "Juice1.png"
      },
      {
        id: 6,
        title: "active summer with juice coca cola 300ml",
        subtitle: "A refined blend of nourishment and refreshment, Juice Milk 300ml is your companion for a vibrant summer—crafted to energize your days and elevate your moments with every sip.",
        cta_button: "shop now",
        image: "Juice1.png"
      }
    ])
    return {
      contents,
    }
  }
}
</script>

<style scoped>
.hero {
  position: relative;
  width: 100vw;
  height: 100%;
  margin-top: 9%;
}
.overlay img {
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  z-index: -1;
}
.hero-content {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  padding: 2.4rem 0;
}
.ad-container {
  background: var(--primary-500);
  position: relative;
  overflow: hidden;
  width: 60vw;
  height: 60vh;
  border-radius: var(--radius-lg);
}
.swiper-slide {
  position: relative;
  display: flex;
  gap: 1rem;
}
.swiper-slide .hero-text {
  margin-left: 6%;
  max-width: 30rem;
  padding-top: 5%;
}
.swiper-slide .hero-title {
  text-transform: capitalize;
}
.swiper-slide .hero-subtitle {
  margin: 6% 0;
  font-size: var(--font-size-base);
}
.swiper-slide img {
  height: 60vh;
  width: auto;
  min-height: 150px;
}
.swiper-slide .primary {
  margin-top: 3%;
}
.cta-button {
  padding: .5rem 1rem;
  background: var(--light);
  text-transform: capitalize;
  font-weight: 600;
  font-size: 1rem;
  border: none;
  border-radius: var(--radius-sm);
  cursor: pointer;
}
.ad-sales {
  background: var(--warning-500);
  position: relative;
  width: 40vw;
  height: 60vh;
  border-radius: var(--radius-lg);
  overflow: hidden;
}

.sale-off {
  position: relative;
  display: flex;
  justify-content: space-between;
  gap: 1rem;
}
.sales-off .sale-text {
  margin-left: 6%;
  max-width: 30rem;
  padding-top: 5%;
  z-index: 999;
}
.sale-text .sale-title {
  text-transform: capitalize;
}
.sale-text .sale-subtitle {
  margin: 6% 0;
  font-size: var(--font-size-base);
}
.sales-off img {
  position: absolute;
  bottom: -10%;
  right: 0%;
  height: 45vh;
  width: auto;
  min-height: 140px;
}
.navigate {
  position: absolute; 
  bottom: 20px;           
  right: 20px;            
  display: flex;
  gap: 8px;               
  z-index: 10;        
}
.navigate .swiper-button-next,
.navigate .swiper-button-prev {
  position: static;        
  width: 30px;             
  height: 30px;
  border-radius: 6px;      
  background-color: var(--primary-600); 
  color: var(--light);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  cursor: pointer;
}
.navigate .swiper-button-next:hover,
.navigate .swiper-button-prev:hover {
  transform: scale(1.1);
}
.navigate .swiper-button-next::after,
.navigate .swiper-button-prev::after {
  font-size: 14px;
  font-weight: bold;
}

@media screen and (max-width: 953px) {
  .hero-content {
    flex-direction: column;
    margin-top: 4%;
  }
  .ad-container {
    width: 95%;
  }
  .ad-sales {
    width: 95%;
  }
}
@media screen and (max-width: 768px) {
  .hero {
    margin-top: 17%;
  }
  .ad-container {
    width: 95%;
    height: 42vh;
  }
  .ad-sales {
    width: 95%;
    height: 50vh;
  }
  .swiper-slide .hero-title {
    font-size: var(--font-size-lg);
  }
  .swiper-slide .hero-subtitle {
    margin: 6% 0;
    font-size: var(--font-size-xs);
  }
  .swiper-slide img {
    height: 26vh;
    width: auto;
    margin-top: 15%;
  }
}
</style>