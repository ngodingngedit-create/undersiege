<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

// Slider functionality
const images = [
  '/beranda/konser1.jpg',
  '/beranda/konser2.jpg',
  '/beranda/konser3.jpg'
]
const currentImageIndex = ref(0)
let sliderInterval = null

onMounted(() => {
  // Start image slider
  sliderInterval = setInterval(() => {
    currentImageIndex.value = (currentImageIndex.value + 1) % images.length
  }, 4000) // Change image every 4 seconds
})

onUnmounted(() => {
  if (sliderInterval) clearInterval(sliderInterval)
})
</script>

<template>
  <section class="hero-section" id="beranda">
    <div class="hero-slider">
      <img 
        v-for="(img, index) in images" 
        :key="index"
        :src="img"
        class="slide-image"
        :class="{ active: currentImageIndex === index }"
        alt="Concert Background"
      />
    </div>
    <div class="hero-bg">
      <div class="bg-vignette"></div>
    </div>

    <div class="container hero-content">
      <img src="/logo undersiege/LOGO.png" alt="Undersiege Logo" class="hero-logo-img" />
      
      <div class="hero-text-block">
        <h2 class="hero-title">COMING SOON VOL 3</h2>
        <p class="hero-date">2027<br>PAMULANG SQUARE, TANGERANG SELATAN</p>
        
        <div class="hero-slogan-pill">
          "SEMUA AKAN PUNK PADA WAKTUNYA"
        </div>
        
        <div class="hero-actions">
          <a href="#shows" class="brutal-btn primary">BELI TIKET</a>
          <a href="#shows" class="brutal-btn secondary">LIHAT LINEUP</a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero-section {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding-top: var(--nav-height);
  position: relative;
  overflow: hidden;
  background-color: var(--bg-color); 
}

.hero-slider {
  position: absolute;
  top: 0; left: 0; width: 100%; height: 100%;
  z-index: 0; 
  /* Softer treatment, restoring some natural color */
  filter: grayscale(40%) contrast(1.1);
}

.slide-image {
  position: absolute;
  top: 0; left: 0; width: 100%; height: 100%;
  object-fit: cover;
  opacity: 0;
  transition: opacity 2s ease-in-out; /* Smooth fade */
}

.slide-image.active {
  opacity: 0.5; /* Moderately dark for text legibility */
}

.hero-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  /* Cinematic soft vignette */
  background: radial-gradient(circle at center, rgba(18,18,20,0.3) 0%, rgba(18,18,20,0.95) 100%);
  z-index: 1; 
  pointer-events: none; 
}

.bg-vignette {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(to bottom, transparent 60%, var(--bg-color) 100%);
  z-index: 2; 
  pointer-events: none;
}

.hero-content {
  position: relative;
  z-index: 5;
  width: 100%;
  padding-bottom: 50px;
  margin-top: 50px; 
  display: flex;
  flex-direction: column;
  align-items: center;
}

.hero-logo-img {
  width: 90%;
  max-width: 600px; /* Base size for logo */
  height: auto;
  margin-bottom: 20px;
  position: relative;
  z-index: 10;
  filter: drop-shadow(0 10px 25px rgba(0,0,0,0.9)); /* Refined deeper shadow for PNG */
  animation: gentleFloat 6s ease-in-out infinite;
}

@keyframes gentleFloat {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

.hero-text-block {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 60px;
}

.hero-title {
  font-size: clamp(2.5rem, 8vw, 4.5rem);
  color: #fff;
  text-shadow: 0 5px 15px rgba(0,0,0,0.6);
  background-color: transparent;
  padding: 0;
  display: inline-block;
  margin-bottom: 10px;
  letter-spacing: 2px;
  transform: none; /* Remove brutalist skew */
  box-shadow: none;
}

.hero-date {
  font-family: 'Inter', sans-serif;
  font-weight: 700;
  font-size: clamp(0.9rem, 2vw, 1.2rem);
  letter-spacing: 4px;
  color: #ddd;
  line-height: 1.8;
  background-color: transparent;
  padding: 0;
  border-left: none;
  margin-bottom: 30px;
  text-shadow: 0 2px 5px rgba(0,0,0,0.5);
}

.hero-slogan-pill {
  background-color: rgba(255, 85, 0, 0.1);
  color: var(--accent-color);
  padding: 12px 30px;
  border-radius: 50px; /* Smooth elegant pill */
  font-family: 'Inter', sans-serif;
  font-weight: 700;
  font-size: 0.95rem;
  letter-spacing: 2px;
  margin-bottom: 40px;
  border: 1px solid rgba(255, 85, 0, 0.3);
  box-shadow: 0 5px 20px rgba(255, 85, 0, 0.1);
  backdrop-filter: blur(5px);
}

.hero-actions {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: center;
}

/* Base button styling inherited from global .brutal-btn but refined */
.brutal-btn.primary {
  background-color: var(--accent-color);
  color: #fff;
  border: 1px solid var(--accent-color);
}

.brutal-btn.primary:hover {
  background-color: var(--accent-hover);
  border-color: var(--accent-hover);
}

.brutal-btn.secondary {
  background-color: rgba(255, 255, 255, 0.05); /* Soft transparent white */
  color: #fff;
  border: 1px solid rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(5px);
}

.brutal-btn.secondary:hover {
  background-color: rgba(255, 255, 255, 0.15);
  border-color: rgba(255, 255, 255, 0.4);
}

@media (max-width: 768px) {
  .hero-logo-text {
    letter-spacing: 2px;
  }
}
</style>
