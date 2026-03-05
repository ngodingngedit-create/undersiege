<script setup>
import Nav from './components/Nav.vue'
import Marquee from './components/Marquee.vue'
import Hero from './components/Hero.vue'
// import Shows from './components/Shows.vue'
// import Merch from './components/Merch.vue'
import Tiket from './components/Tiket.vue'
import Lineup from './components/Lineup.vue'
import Gallery from './components/Gallery.vue'
import SocialLinks from './components/SocialLinks.vue'
import CreationWith from './components/CreationWith.vue'
import Description from './components/Description.vue'
</script>

<template>
  <div class="app-container">
    <Nav />
    <!-- Hero Section -->
    <Hero />
    
    <main>
      <!-- <Shows /> -->
      <Description />
      <Marquee />
      <CreationWith />
      <Lineup />
      <Tiket />
      <!-- <Marquee />
      <Merch /> -->
      <Marquee />
      <!-- <Gallery /> -->
    </main>

    <footer class="footer">
      <div class="container footer-content">
        <div class="footer-left">
          <img src="/logo undersiege/LOGO.png" alt="Undersiege Logo" class="footer-logo-img" />
        </div>
        <div class="footer-right">
          <SocialLinks />
        </div>
      </div>
      <div class="copyright-bar">
        <p>&copy; {{ new Date().getFullYear() }} JAKARTA UNDER SIEGE. ALL RIGHTS RESERVED.</p>
      </div>
    </footer>
  </div>
</template>

<style scoped>
.app-container {
  min-height: 100vh;
  position: relative;
  overflow-x: hidden;
}

.footer {
  background-color: var(--bg-color); /* Match charcoal bg */
  border-top: 1px solid rgba(255, 255, 255, 0.1); /* Gentle line instead of thick border */
}

.footer-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 80px 40px;
}

.footer-logo-img {
  height: 100px; /* Noticeably larger size */
  width: auto;
  margin-bottom: 8px; /* Slightly more space for the scale */
  filter: drop-shadow(0 0 5px rgba(0,0,0,0.5));
  transition: all 0.3s ease;
}

.footer-logo-img:hover {
  transform: scale(1.05);
  filter: drop-shadow(0 0 10px rgba(255, 255, 255, 0.2));
}

.footer-slogan {
  font-family: 'Inter', sans-serif;
  font-weight: 700;
  color: var(--secondary-accent);
  letter-spacing: 3px;
  margin-top: 10px;
}

.copyright-bar {
  background-color: #0a0a0c; /* Very deep charcoal for bar */
  text-align: center;
  padding: 24px 0;
  font-family: 'Inter', sans-serif;
  color: #888;
  font-size: 0.85rem;
  font-weight: 500;
  letter-spacing: 1px;
}

@media (max-width: 768px) {
  .footer-content {
    flex-direction: column;
    text-align: center;
    gap: 40px;
    padding: 60px 20px;
  }
}
</style>
