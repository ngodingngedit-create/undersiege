<script setup>
import { ref } from 'vue'

const photos = [
  'https://images.unsplash.com/photo-1598387993281-cecf8b71a8f8?q=80&w=800&auto=format&fit=crop', // Live crowd 1
  'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=800&auto=format&fit=crop', // Drummer
  'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?q=80&w=800&auto=format&fit=crop', // Singer / Concert
  'https://images.unsplash.com/photo-1540039155733-d76e6c4849ec?q=80&w=800&auto=format&fit=crop', // Pit crowd
  'https://images.unsplash.com/photo-1508973379184-7517410fb0bc?q=80&w=800&auto=format&fit=crop', // Guitarist
  'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=800&auto=format&fit=crop'  // Lights/Stage
]

// Duplicate array for infinite scroll effect
const loopedPhotos = [...photos, ...photos]

// Modal state
const selectedPhoto = ref(null)

const openModal = (photoUrl) => {
  selectedPhoto.value = photoUrl
  document.body.style.overflow = 'hidden' // Prevent page scroll
}

const closeModal = () => {
  selectedPhoto.value = null
  document.body.style.overflow = ''
}
</script>

<template>
  <section class="gallery-section" id="gallery">
    <div class="container">
      <h2 class="section-title">THE ARCHIVES</h2>
      
      <div class="gallery-loop-container">
        <div class="gallery-track">
          <div 
            v-for="(photo, index) in loopedPhotos" 
            :key="index"
            class="gallery-item"
            @click="openModal(photo)"
          >
            <img :src="photo" :alt="'Live photo ' + (index + 1)">
            <div class="gallery-lens-flare"></div>
            <div class="view-overlay">
              <span class="view-text">LIHAT DETAIL</span>
            </div>
          </div>
        </div>
      </div>

      <div class="social-cta">
        <p>JOIN THE PIT. FOLLOW THE MOVEMENT.</p>
        <a href="https://kolektix.com" target="_blank" class="brutal-btn">
          @JAKARTAUNDERSIEGE
        </a>
      </div>
    </div>

    <!-- Lightbox Modal -->
    <div class="lightbox" :class="{ 'is-open': selectedPhoto }" @click="closeModal">
      <button class="close-lightbox" @click.stop="closeModal" aria-label="Close image">&times;</button>
      <div class="lightbox-content" @click.stop>
        <img v-if="selectedPhoto" :src="selectedPhoto" alt="Enlarged live photo">
      </div>
    </div>
  </section>
</template>

<style scoped>
.gallery-section {
  background-color: var(--bg-color); /* Match global dark theme */
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding: 100px 0;
}

.gallery-loop-container {
  width: 100%;
  overflow: hidden;
  position: relative;
  padding: 20px 0;
}

/* Add smooth fade masks to edges */
.gallery-loop-container::before,
.gallery-loop-container::after {
  content: '';
  position: absolute;
  top: 0;
  width: 100px;
  height: 100%;
  z-index: 5;
  pointer-events: none;
}

.gallery-loop-container::before {
  left: 0;
  background: linear-gradient(to right, var(--bg-color) 0%, transparent 100%);
}

.gallery-loop-container::after {
  right: 0;
  background: linear-gradient(to left, var(--bg-color) 0%, transparent 100%);
}

.gallery-track {
  display: flex;
  gap: 20px;
  width: max-content;
  animation: scrollGallery 35s linear infinite;
}

.gallery-loop-container:hover .gallery-track {
  animation-play-state: paused;
}

@keyframes scrollGallery {
  0% { transform: translateX(0); }
  100% { transform: translateX(calc(-50% - 10px)); } /* -50% to scroll exactly half of the duplicated array */
}

.gallery-item {
  width: 380px;
  height: 480px;
  flex-shrink: 0;
  position: relative;
  overflow: hidden;
  border-radius: 12px; /* Smooth corners */
  background: var(--bg-light);
  /* Moody, cinematic filter */
  filter: sepia(20%) hue-rotate(180deg) saturate(40%) contrast(1.1) brightness(0.85);
  transition: all 0.5s cubic-bezier(0.25, 0.8, 0.25, 1);
  cursor: pointer;
  box-shadow: 0 10px 25px rgba(0,0,0,0.4);
}

@media (max-width: 768px) {
  .gallery-item {
    width: 280px;
    height: 380px;
  }
}

.gallery-item {
  position: relative;
  overflow: hidden;
  border-radius: 8px; /* Smooth corners */
  background: var(--bg-light);
  /* Moody, cinematic filter */
  filter: sepia(20%) hue-rotate(180deg) saturate(40%) contrast(1.1) brightness(0.85);
  transition: all 0.5s cubic-bezier(0.25, 0.8, 0.25, 1);
  cursor: pointer;
}

.gallery-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 1.2s cubic-bezier(0.19, 1, 0.22, 1);
  opacity: 0.8;
}

/* Simulate elegant stage light lens flare on hover */
.gallery-lens-flare {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 200%;
  height: 20px;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  transform: translate(-50%, -50%) rotate(-45deg);
  filter: blur(10px);
  opacity: 0;
  transition: opacity 0.5s ease;
  pointer-events: none;
  z-index: 2;
}

.view-overlay {
  position: absolute;
  top: 0; left: 0; width: 100%; height: 100%;
  background: rgba(0,0,0,0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.4s ease;
  z-index: 3;
}

.view-text {
  font-family: 'Inter', sans-serif;
  font-weight: 800;
  letter-spacing: 2px;
  color: #fff;
  border: 2px solid #fff;
  padding: 12px 24px;
  border-radius: 50px;
  transform: translateY(20px);
  transition: transform 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
}

.gallery-item:hover {
  filter: sepia(0) hue-rotate(0) saturate(110%) contrast(1.1) brightness(1.1);
  z-index: 10;
  box-shadow: 0 20px 50px rgba(0,0,0,0.8);
  transform: translateY(-8px); /* Gentle lift */
}

.gallery-item:hover img {
  transform: scale(1.05); /* Smooth slow zoom */
  opacity: 1;
}

.gallery-item:hover .gallery-lens-flare,
.gallery-item:hover .view-overlay {
  opacity: 1;
}

.gallery-item:hover .view-text {
  transform: translateY(0);
}

.social-cta {
  text-align: center;
  margin-top: 80px;
}

.social-cta p {
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 1rem;
  letter-spacing: 4px;
  color: #aaa;
  margin-bottom: 25px;
}

/* Lightbox Styles */
.lightbox {
  position: fixed;
  top: 0; left: 0; width: 100%; height: 100vh;
  background: rgba(10, 10, 12, 0.95);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.4s ease;
  padding: 20px;
}

.lightbox.is-open {
  opacity: 1;
  pointer-events: auto;
}

.lightbox-content {
  position: relative;
  max-width: 90%;
  max-height: 90vh;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 20px 60px rgba(0,0,0,0.8);
  transform: scale(0.95);
  transition: transform 0.4s cubic-bezier(0.19, 1, 0.22, 1);
}

.lightbox.is-open .lightbox-content {
  transform: scale(1);
}

.lightbox-content img {
  width: 100%;
  height: auto;
  max-height: 90vh;
  object-fit: contain;
  display: block;
}

.close-lightbox {
  position: absolute;
  top: 30px;
  right: 40px;
  background: none;
  border: none;
  color: #fff;
  font-size: 3rem;
  line-height: 1;
  font-weight: 300;
  cursor: pointer;
  z-index: 10000;
  transition: color 0.3s ease;
}

.close-lightbox:hover {
  color: var(--accent-color);
}

@media (max-width: 768px) {
  .close-lightbox {
    top: 15px;
    right: 20px;
    font-size: 2.5rem;
    background: rgba(0,0,0,0.5); /* Make close button visible over loud images */
    width: 44px;
    height: 44px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-bottom: 5px; /* Visual center adjustment for times symbol */
  }
  
  .lightbox-content {
    max-width: 100%;
    max-height: 80vh; /* Leave room for mobile browser bars */
    border-radius: 0;
  }
  
  .lightbox {
    padding: 0;
    align-items: center; /* Center vertically on mobile */
  }
  
  .gallery-item:hover {
    transform: translateY(-2px); /* Less hover lift on mobile */
  }
}
</style>
