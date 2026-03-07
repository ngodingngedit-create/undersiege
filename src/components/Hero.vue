<script setup>
</script>

<template>
  <section class="hero-section" id="beranda">

    <div class="container hero-content">
      <img src="/logo undersiege/LOGO.png" alt="Undersiege Logo" class="hero-logo-img" />
      
      <div class="hero-text-block">
        <h2 class="hero-address">
          <a href="https://maps.app.goo.gl/sWwqDMCFrrHT5eek7" target="_blank" rel="noopener noreferrer" class="address-link">
            Jakarta, Indonesia<br>
          </a>
        </h2>
        
        <div class="hero-event-info">
          <div class="info-tag date-tag">
            <div class="info-label-group">
              <div class="info-label">JAKARTA UNDER SIEGE</div>
            </div>
            <div class="info-value">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
              <span>Saturday, 30 MAY 2026 JAKARTA, INDONESIA</span>
            </div>
          </div>
          <div class="info-tag venue-tag">
            <div class="info-label">VENUE</div>
            <div class="info-value">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
              <span>JAKARTA, INDONESIA</span>
            </div>
          </div>
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
  background-color: #0a0a0c; 
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
  width: 95%; /* Take up more horizontal space on mobile */
  max-width: 850px; /* Noticeably larger max size for desktop */
  height: auto;
  margin-bottom: 30px; /* A bit more breathing room */
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

.hero-address {
  font-family: 'Inter', sans-serif;
  font-weight: 700;
  font-size: clamp(0.9rem, 2vw, 1.2rem);
  letter-spacing: 2px;
  color: #ddd;
  line-height: 1.8;
  background-color: transparent;
  padding: 0;
  border-left: none;
  margin-bottom: 40px;
  text-shadow: 0 2px 5px rgba(0,0,0,0.5);
  max-width: 600px;
}

.address-link {
  color: inherit;
  text-decoration: none;
  transition: color 0.3s ease;
}

.address-link:hover {
  color: var(--accent-color);
}

.hero-event-info {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: center;
}

.info-tag {
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 12px 24px;
  font-family: 'Inter', sans-serif;
  border-radius: 6px;
  text-transform: uppercase;
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
}

.info-label-group {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
}

.info-label {
  font-size: 0.75rem;
  letter-spacing: 2px;
  font-weight: 800;
  opacity: 0.85;
}

.info-sub-label {
  font-size: 0.55rem;
  letter-spacing: 1px;
  font-weight: 700;
  opacity: 0.7;
}

.info-value {
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: 800;
  font-size: 1rem;
  letter-spacing: 1px;
}

.date-tag {
  background-color: var(--accent-color);
  color: #fff;
  border: 1px solid var(--accent-color);
  box-shadow: 0 5px 20px rgba(255, 85, 0, 0.3);
}

.venue-tag {
  background-color: rgba(255, 255, 255, 0.05);
  color: #fff;
  border: 1px solid rgba(255, 255, 255, 0.2);
}

@media (max-width: 768px) {
  .hero-logo-text {
    letter-spacing: 2px;
  }
}
</style>
