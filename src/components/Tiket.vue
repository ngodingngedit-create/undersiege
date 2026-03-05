<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const days = ref(0)
const hours = ref(0)
const minutes = ref(0)
const seconds = ref(0)

const targetDate = new Date('2026-05-30T14:00:00+07:00').getTime()
let interval = null

const updateCountdown = () => {
  const now = new Date().getTime()
  const distance = targetDate - now

  if (distance < 0) {
    days.value = 0
    hours.value = 0
    minutes.value = 0
    seconds.value = 0
    if (interval) clearInterval(interval)
    return
  }

  days.value = Math.floor(distance / (1000 * 60 * 60 * 24))
  hours.value = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  minutes.value = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
  seconds.value = Math.floor((distance % (1000 * 60)) / 1000)
}

onMounted(() => {
  updateCountdown()
  interval = setInterval(updateCountdown, 1000)
})

onUnmounted(() => {
  if (interval) clearInterval(interval)
})
</script>

<template>
  <section class="tiket-section" id="tiket">
    <div class="container tiket-container">
      
      <!-- Top Header Area -->
      <div class="tiket-header">
        <div class="header-left">
          <span class="category">MUSIK</span>
          <h2 class="title">JAKARTA UNDER SIEGE</h2>
        </div>
        <div class="header-right">
          <span class="countdown-label">EVENT DIMULAI DALAM</span>
          <div class="countdown">
            <div class="countdown-item">
              <span class="countdown-value">{{ days }}</span>
              <span class="countdown-unit">Hari</span>
            </div>
            <div class="countdown-item">
              <span class="countdown-value">{{ hours }}</span>
              <span class="countdown-unit">Jam</span>
            </div>
            <div class="countdown-item">
              <span class="countdown-value">{{ minutes }}</span>
              <span class="countdown-unit">Menit</span>
            </div>
            <div class="countdown-item">
              <span class="countdown-value">{{ seconds }}</span>
              <span class="countdown-unit">Detik</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Main Content Layout -->
      <div class="tiket-main-content">
        <!-- Left Side: Banner -->
        <div class="tiket-banner-wrapper">
          <img src="/event/Haywire_banner 1090 x 350.jpg" alt="Haywire Under Siege" class="tiket-banner" />
        </div>
        
        <!-- Right Side: Details & Actions -->
        <div class="tiket-details-panel">
          <!-- Details Card -->
          <div class="info-card">
            <ul class="info-list">
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="info-icon"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/><path d="M8 14h.01"/><path d="M12 14h.01"/><path d="M16 14h.01"/><path d="M8 18h.01"/><path d="M12 18h.01"/><path d="M16 18h.01"/></svg>
                <span>30 Mei 2026</span>
              </li>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="info-icon"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                <span>14:00 - 22:00 WIB</span>
              </li>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="info-icon"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                <span>Bali United Studio</span>
              </li>
            </ul>
            
            <div class="organizer-section">
              <span class="organizer-label">Diselenggarakan Oleh</span>
              <img src="/creation logo/logo.png?v=2" alt="Smartest Bomb Records" class="organizer-logo" />
            </div>
          </div>
          
          <!-- Action Buttons -->
          <div class="action-buttons">
            <button class="btn btn-secondary">Chat</button>
            <a href="https://kolektix.com/event/jakarta-undersiege" target="_blank" rel="noopener noreferrer" class="btn btn-primary">
              Beli Tiket
            </a>
          </div>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="tiket-footer">
        <a href="https://instagram.com/smartestbombrecs" target="_blank" class="instagram-link">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="ig-icon"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
          <span>smartestbombrecs</span>
        </a>
        <button class="share-btn" aria-label="Share">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/><polyline points="16 6 12 2 8 6"/><line x1="12" x2="12" y1="2" y2="15"/></svg>
        </button>
      </div>
    </div>
  </section>
</template>

<style scoped>
.tiket-section {
  position: relative;
  z-index: 1;
  background-color: #0d0d0f; /* Pitch dark to match other sections */
  padding: 80px 0;
  border-top: 2px solid rgba(255, 255, 255, 0.05); /* Match Lineup border */
}

.tiket-container {
  max-width: 1200px; /* Slightly wider for new layout */
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  gap: 30px;
}

/* Header Elements */
.tiket-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  padding-bottom: 20px;
  flex-wrap: wrap;
  gap: 20px;
}

.header-left {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.category {
  font-family: 'Inter', sans-serif;
  font-size: 0.9rem;
  font-weight: 600;
  letter-spacing: 1px;
  color: #a1a1aa; /* Zinc 400 */
}

.title {
  font-family: 'Anton', sans-serif;
  font-size: 2.5rem;
  line-height: 1;
  color: #fff;
  margin: 0;
  letter-spacing: 1px;
}

.header-right {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 10px;
}

.countdown-label {
  font-family: 'Inter', sans-serif;
  font-size: 0.8rem;
  font-weight: 600;
  color: #a1a1aa;
}

.countdown {
  display: flex;
  gap: 10px;
}

.countdown-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  width: 50px;
  height: 55px;
}

.countdown-value {
  font-family: 'Inter', sans-serif;
  font-weight: 800;
  font-size: 1.2rem;
  color: #fff;
  line-height: 1;
}

.countdown-unit {
  font-family: 'Inter', sans-serif;
  font-size: 0.6rem;
  font-weight: 500;
  color: #a1a1aa;
  margin-top: 2px;
}

/* Main Content: Layout Grid */
.tiket-main-content {
  display: grid;
  grid-template-columns: 2.5fr 1fr;
  gap: 30px;
  align-items: stretch;
}

/* Left Panel: Banner */
.tiket-banner-wrapper {
  width: 100%;
  border-radius: 16px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
  display: flex;
}

.tiket-banner {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.5s ease;
}

.tiket-banner-wrapper:hover .tiket-banner {
  transform: scale(1.03);
}

/* Right Panel: Details and Actions */
.tiket-details-panel {
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: space-between;
}

.info-card {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  flex-grow: 1;
}

.info-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.info-list li {
  display: flex;
  align-items: center;
  gap: 15px;
  font-family: 'Inter', sans-serif;
  font-size: 1rem;
  font-weight: 500;
  color: #eee;
}

.info-icon {
  color: var(--accent-color);
  flex-shrink: 0;
}

.organizer-section {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: auto; /* Push to bottom of the card */
}

.organizer-label {
  font-family: 'Inter', sans-serif;
  font-size: 0.9rem;
  font-weight: 500;
  color: #888;
}

.organizer-logo {
  height: 40px;
  width: auto;
  align-self: flex-start;
  filter: drop-shadow(0 2px 4px rgba(0,0,0,0.5));
}

.action-buttons {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.btn {
  width: 100%;
  padding: 16px 20px;
  border-radius: 12px;
  font-family: 'Inter', sans-serif;
  font-weight: 700;
  font-size: 1.1rem;
  letter-spacing: 0.5px;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  transition: all 0.3s ease;
  display: inline-block;
  box-sizing: border-box;
}

.btn-secondary {
  background: transparent;
  color: #fff;
  border: 1px solid rgba(255, 255, 255, 0.3);
}

.btn-secondary:hover {
  background: rgba(255, 255, 255, 0.05);
  border-color: #fff;
}

.btn-primary {
  background: var(--accent-color);
  color: #fff;
  border: 1px solid var(--accent-color);
}

.btn-primary:hover {
  background: #e64d00;
  border-color: #e64d00;
  transform: translateY(-2px);
  box-shadow: 0 5px 20px rgba(255, 85, 0, 0.4);
}

/* Footer Section */
.tiket-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 10px;
}

.instagram-link {
  display: flex;
  align-items: center;
  gap: 8px;
  color: #fff;
  text-decoration: none;
  font-family: 'Inter', sans-serif;
  font-size: 0.95rem;
  font-weight: 500;
  transition: color 0.3s ease;
}

.instagram-link:hover {
  color: var(--accent-color);
}

.ig-icon {
  stroke: currentColor;
}

.share-btn {
  background: transparent;
  border: none;
  color: #fff;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  border-radius: 50%;
  transition: all 0.3s ease;
}

.share-btn:hover {
  background: rgba(255, 255, 255, 0.1);
  color: var(--accent-color);
}

/* Responsive adjustments */
@media (max-width: 900px) {
  .tiket-main-content {
    grid-template-columns: 1fr; /* Switch to column */
  }

  .header-left, .header-right {
    align-items: flex-start;
  }
}

@media (max-width: 600px) {
  .title {
    font-size: 2rem;
  }
  
  .tiket-header {
    flex-direction: column;
    align-items: flex-start;
  }
  
  .header-right {
    align-items: flex-start;
    width: 100%;
  }
}
</style>
