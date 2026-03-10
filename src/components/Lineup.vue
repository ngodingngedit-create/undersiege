<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const bands = [
  { 
    id: 1, 
    name: 'HAYWIRE', 
    origin: 'BOSTON, USA', 
    image: '/line%20up/haywire/card_detail_line-up_haywire_r3.jpg',
    rowImage: '/line%20up/haywire/card_line%20up_haywire.jpg',
    about: 'Menjadi salah satu ikon hardcore punk dari Boston, Haywire dikenal dengan energi liar dan riff yang super ngebut. Mereka membawa distorsi kental yang tidak pernah gagal memanaskan moshpit di setiap panggungnya.',
    social: '@haywire_hxc',
    // spotifyLink: 'https://open.spotify.com/embed/artist/5lU30M9td0FUDVSTCucwnu?utm_source=generator&theme=0',
    appleMusicLink: 'https://music.apple.com/us/artist/haywire-617/1715695747',
    instagramLink: 'https://www.instagram.com/haywire617/',
    youtubeLink: 'https://www.youtube.com/channel/UCP80m_rOjKXxjoBoQd2hyoA',
    tiktokLink: 'https://www.tiktok.com/@haywire_617',
    twitterLink: ''
  },

  //  { 
  //   id: 2, 
  //   name: 'ZIP', 
  //   origin: 'BOSTON, USA', 
  //   image: '/line%20up/ZIP/card_detail_line-up_zip.jpg',
  //   rowImage: '/line%20up/ZIP/card_line-up_zip.jpg',
  //   about: 'Menjadi salah satu ikon hardcore punk dari Boston, Haywire dikenal dengan energi liar dan riff yang super ngebut. Mereka membawa distorsi kental yang tidak pernah gagal memanaskan moshpit di setiap panggungnya.',
  //   social: '@haywire_hxc',
  //   // spotifyLink: 'https://open.spotify.com/embed/artist/5lU30M9td0FUDVSTCucwnu?utm_source=generator&theme=0',
  //   appleMusicLink: 'https://music.apple.com/us/artist/haywire-617/1715695747',
  //   instagramLink: 'https://www.instagram.com/haywire617/',
  //   youtubeLink: 'https://www.youtube.com/channel/UCP80m_rOjKXxjoBoQd2hyoA',
  //   tiktokLink: 'https://www.tiktok.com/@haywire_617',
  //   twitterLink: ''
  // },
  /*
  { 
    id: 3, 
    name: 'NO EXCUSE', 
    origin: 'JAKARTA, ID', 
    image: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?q=80&w=600&auto=format&fit=crop',
    about: 'Grup asal Jakarta yang konsisten membakar panggung dengan ketukan agresif dan lirik lugas. No Excuse hadir untuk menegaskan bahwa hardcore bukan cuma musik, tapi gaya hidup dan sikap!',
    social: '@noexcusejkt',
    spotifyLink: 'https://open.spotify.com/embed/playlist/37i9dQZF1DX3LDIBRoaCDQ?utm_source=generator&theme=0'
  },
  { 
    id: 4, 
    name: 'BLOOD RUNS COLD', 
    origin: 'NEW YORK, USA', 
    image: 'https://images.unsplash.com/photo-1540829016269-e0520f6ba43e?q=80&w=600&auto=format&fit=crop',
    about: 'Membawa elemen beatdown dari New York Hardcore (NYHC), Blood Runs Cold menampilkan raungan yang intens, breakdown berat tiada ampun, dan lirik tentang realita keras di jalanan kota besar.',
    social: '@bloodrunscoldny',
    spotifyLink: 'https://open.spotify.com/embed/playlist/37i9dQZF1DX3LDIBRoaCDQ?utm_source=generator&theme=0'
  },
  { 
    id: 5, 
    name: 'ZIPPER', 
    origin: 'JAKARTA, ID', 
    image: 'https://images.unsplash.com/photo-1493225457124-a1a2a4af7714?q=80&w=600&auto=format&fit=crop',
    about: 'Zipper siap melibas panggung lewat distorsi bising dan ketukan drum yang memacu adrenalin. Set energi tinggi mereka bakal memaksa semua orang dalam pit untuk bergerak.',
    social: '@zipper_raw',
    spotifyLink: 'https://open.spotify.com/embed/playlist/37i9dQZF1DX3LDIBRoaCDQ?utm_source=generator&theme=0'
  },
  { 
    id: 6, 
    name: 'FINAL ATTACK', 
    origin: 'JAKARTA, ID', 
    image: 'https://images.unsplash.com/photo-1520637102912-2df6bb2aec6d?q=80&w=600&auto=format&fit=crop',
    about: 'Unit hardcore / thrash dari Jakarta, Final Attack mengkombinasikan solo gitar cepat dengan gempuran hardcore murni. Tontonan wajib bagi mereka yang haus akan kecepatan.',
    social: '@finalattack',
    spotifyLink: 'https://open.spotify.com/embed/playlist/37i9dQZF1DX3LDIBRoaCDQ?utm_source=generator&theme=0'
  }
  */
]

// Modal state
const isModalOpen = ref(false)
const selectedBand = ref(null)

const openModal = (band) => {
  selectedBand.value = band
  isModalOpen.value = true
  document.body.style.overflow = 'hidden' // Prevent scrolling
}

const closeModal = () => {
  isModalOpen.value = false
  setTimeout(() => {
    selectedBand.value = null
  }, 300) // Delay to clear after animation
  document.body.style.overflow = '' // Restore scrolling
}

// Handle ESC to close
const handleKeydown = (e) => {
  if (e.key === 'Escape' && isModalOpen.value) {
    closeModal()
  }
}

onMounted(() => {
  window.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeydown)
})
</script>

<template>
  <section class="lineup-section" id="lineup">
    <div class="container">
      <div class="lineup-header">
        <h2 class="section-title">LINEUP</h2>
        <!-- <p class="section-subtitle">THE NOISE. THE ENERGY. THE CHAOS.</p> -->
      </div>
      
      <div class="lineup-stage-container">
        
        <div class="lineup-list-wrapper">
          <div 
            v-for="band in bands" 
            :key="band.id" 
            class="lineup-row-card"
            :class="{'has-custom-bg': band.rowImage}"
            @click="openModal(band)"
          >
            <!-- Background Image layers if band has rowImage -->
            <div v-if="band.rowImage" class="row-bg-image" :style="{ backgroundImage: 'url(\'' + band.rowImage + '\')' }"></div>
            <div v-if="band.rowImage" class="row-bg-overlay"></div>
            
            <div class="row-left">
              <!-- <a :href="band.spotifyLink" target="_blank" class="row-action-icon spotify-icon" @click.stop title="Spotify">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M8 11.9c3.2-1.2 6.6-1.5 10-.9"></path><path d="M7 14.5c2.8-.9 5.8-1 8.8-.4"></path><path d="M7.4 9.1c3.5-1.5 7.4-1.8 11.3-.9"></path></svg>
              </a> -->
              <a v-if="band.appleMusicLink" :href="band.appleMusicLink" target="_blank" class="row-action-icon apple-icon" @click.stop title="Apple Music">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18V5l12-2v13"></path><circle cx="6" cy="18" r="3"></circle><circle cx="18" cy="16" r="3"></circle></svg>
              </a>
            </div>
            
            <div class="row-center">
              <div class="row-band-info">
                <h3 class="list-band-name">{{ band.name }}</h3>
                <span class="list-band-origin">{{ band.origin }}</span>
              </div>
            </div>
            
            <div class="row-right">
              <a v-if="band.instagramLink" :href="band.instagramLink" target="_blank" class="row-action-icon" @click.stop title="Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a v-if="band.youtubeLink" :href="band.youtubeLink" target="_blank" class="row-action-icon" @click.stop title="YouTube">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
              </a>
              <a v-if="band.twitterLink" :href="band.twitterLink" target="_blank" class="row-action-icon" @click.stop title="Twitter">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
              </a>
              <a v-if="band.tiktokLink" :href="band.tiktokLink" target="_blank" class="row-action-icon" @click.stop title="TikTok">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path></svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- BAND MODAL (Creative Restyled) -->
    <Teleport to="body">
      <div class="stunning-modal-overlay" :class="{ 'is-active': isModalOpen }" @click="closeModal">
        <div class="stunning-modal-content" @click.stop v-if="selectedBand">
          
          <button class="stunning-close" @click="closeModal">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="close-icon"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          </button>
          
          <div class="stunning-hero">
            <div class="stunning-hero-img" :style="{ backgroundImage: 'url(' + selectedBand.image + ')' }"></div>
            <div class="stunning-hero-gradient"></div>
            <div class="stunning-hero-text">
              <span class="stunning-badge">{{ selectedBand.origin }}</span>
              <h2 class="stunning-title">{{ selectedBand.name }}</h2>
            </div>
          </div>
          
          <div class="stunning-body">
            <!-- About Section -->
            <div class="stunning-section about-section">
              <h4 class="stunning-subtitle">ABOUT</h4>
              <p class="stunning-about">{{ selectedBand.about }}</p>
            </div>
            
            <hr class="stunning-divider" />

            <!-- Social Media Section -->
            <div class="stunning-section social-section">
              <h4 class="stunning-subtitle">SOCIAL MEDIA</h4>
              <div class="stunning-social-box">
                <!-- Instagram -->
                <a v-if="selectedBand.instagramLink" :href="selectedBand.instagramLink" target="_blank" class="stunning-social-link">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                  <span>Instagram</span>
                </a>
                <!-- YouTube -->
                <a v-if="selectedBand.youtubeLink" :href="selectedBand.youtubeLink" target="_blank" class="stunning-social-link">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
                  <span>YouTube</span>
                </a>
                <!-- Twitter -->
                <a v-if="selectedBand.twitterLink" :href="selectedBand.twitterLink" target="_blank" class="stunning-social-link">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
                  <span>Twitter</span>
                </a>
                <!-- TikTok -->
                <a v-if="selectedBand.tiktokLink" :href="selectedBand.tiktokLink" target="_blank" class="stunning-social-link">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path></svg>
                  <span>TikTok</span>
                </a>
                <!-- Apple Music -->
                <a v-if="selectedBand.appleMusicLink" :href="selectedBand.appleMusicLink" target="_blank" class="stunning-social-link">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18V5l12-2v13"></path><circle cx="6" cy="18" r="3"></circle><circle cx="18" cy="16" r="3"></circle></svg>
                  <span>Apple Music</span>
                </a>
              </div>
            </div>

            <hr class="stunning-divider" v-if="selectedBand.spotifyLink" />

            <!-- Spotify Playlist Highlight -->
            <div class="stunning-section stunning-playlist-container" v-if="selectedBand.spotifyLink">
              <div class="playlist-header">
                <div class="header-led"></div>
                <h3>PLAYLIST</h3>
              </div>
              
              <div class="iframe-container">
                <iframe 
                  style="border-radius:12px; background: transparent;" 
                  :src="selectedBand.spotifyLink" 
                  width="100%" 
                  height="352" 
                  frameBorder="0" 
                  allowfullscreen="" 
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                  loading="lazy">
                </iframe>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </Teleport>
  </section>
</template>

<style scoped>
.lineup-section {
  position: relative;
  z-index: 1;
  background-color: #0d0d0f; /* Pitch dark */
  padding: 100px 0;
  border-top: 2px solid rgba(255, 255, 255, 0.05); /* Subtle separation */
}

/* Header Styling */
.lineup-header {
  text-align: center;
  margin: 0 auto 70px auto;
  width: 100%;
}

.section-title {
  /* Reset global offset trick */
  position: relative;
  left: auto;
  transform: none;
  
  display: inline-block;
  font-family: 'Anton', sans-serif;
  font-size: clamp(3.5rem, 8vw, 5rem);
  color: #fff;
  line-height: 1;
  text-transform: uppercase;
  margin: 0;
  letter-spacing: 4px;
}

.section-subtitle {
  font-family: 'Inter', sans-serif;
  font-weight: 800;
  letter-spacing: 3px;
  color: #666;
  font-size: 0.9rem;
  margin-top: 25px;
}

/* List Layout System */
.lineup-stage-container {
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
}

.lineup-list-wrapper {
  display: flex;
  flex-direction: column;
  gap: 25px; /* Jarak pisah antar card */
}

.lineup-row-card {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 25px 15px;
  min-height: 110px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  cursor: pointer;
  background: transparent;
  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
  position: relative;
  overflow: hidden;
}

.lineup-row-card::before {
  content: '';
  position: absolute;
  top: 0; left: 0; width: 4px; height: 100%;
  background: var(--accent-color);
  transform: scaleY(0);
  transform-origin: center;
  transition: transform 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
  z-index: 3;
}

.lineup-row-card:last-child {
  border-bottom: none;
}

.lineup-row-card:hover {
  background: linear-gradient(90deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0) 100%);
  padding-left: 25px; /* Slide effect */
}

.lineup-row-card:hover::before {
  transform: scaleY(1);
}

/* Background image styling for cards */
.lineup-row-card.has-custom-bg {
  /* Removed specific hover override so it performs the normal padding-left / orange bar animate */
}

.row-bg-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  z-index: 0;
  -webkit-mask-image: linear-gradient(90deg, transparent 0%, black 10%, black 90%, transparent 100%);
  mask-image: linear-gradient(90deg, transparent 0%, black 10%, black 90%, transparent 100%);
}

.row-bg-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, rgba(13,13,15,0.8) 0%, rgba(13,13,15,0.2) 50%, rgba(13,13,15,0.8) 100%);
  z-index: 1;
  transition: opacity 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
  pointer-events: none;
  -webkit-mask-image: linear-gradient(90deg, transparent 0%, black 10%, black 90%, transparent 100%);
  mask-image: linear-gradient(90deg, transparent 0%, black 10%, black 90%, transparent 100%);
}

.lineup-row-card.has-custom-bg:hover .row-bg-overlay {
  opacity: 0;
}

.row-left {
  position: relative;
  z-index: 2;
  display: flex;
  gap: 15px;
  width: 100px;
  align-items: center;
  justify-content: flex-start;
}

.row-center {
  position: relative;
  z-index: 2;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.row-band-info {
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding-left: 20px;
  border-left: 1px solid rgba(255, 255, 255, 0.08); /* Thin dividing line */
  transition: transform 0.3s ease, border-color 0.3s ease;
}

.lineup-row-card:hover .row-band-info {
  border-left-color: rgba(255, 255, 255, 0.2);
}

.list-band-name {
  font-family: 'Anton', sans-serif;
  font-size: 2.5rem;
  line-height: 1;
  color: #a1a1aa; /* Zinc 400 for slight dimming */
  margin: 0;
  text-transform: uppercase;
  letter-spacing: 2px;
  transition: all 0.3s ease;
}

.lineup-row-card:hover .list-band-name {
  color: #fff;
  text-shadow: 0 0 15px rgba(255,255,255,0.3);
}

.list-band-origin {
  font-family: 'Inter', sans-serif;
  color: #666;
  font-size: 0.85rem;
  font-weight: 800;
  letter-spacing: 2px;
  text-transform: uppercase;
  transition: color 0.3s ease;
}

.lineup-row-card:hover .list-band-origin {
  color: var(--accent-color);
}

.row-right {
  position: relative;
  z-index: 2;
  display: flex;
  gap: 15px;
  align-items: center;
  justify-content: flex-end;
}

.row-action-icon {
  color: #a1a1aa; /* Warnai abu-abu dari awal saat belum dimainkan */
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  filter: drop-shadow(0 2px 4px rgba(0,0,0,0.8)); /* Kasih bayangan gelap agar tembus walau di taruh di background putih terang */
}

.lineup-row-card:hover .row-action-icon {
  color: var(--accent-color);
  filter: drop-shadow(0 0 8px rgba(255, 85, 0, 0.6)); /* Menyala oranye waktu card-nya hidup */
}

.row-action-icon:hover {
  filter: drop-shadow(0 0 12px rgba(255, 85, 0, 0.9)) !important;
  transform: scale(1.15) translateY(-2px);
}


/* ==========================
   STUNNING MODAL STYLES
   ========================== */
.stunning-modal-overlay {
  position: fixed;
  top: 0; left: 0;
  width: 100vw; height: 100vh;
  background-color: rgba(9, 9, 11, 0.95);
  backdrop-filter: blur(15px);
  -webkit-backdrop-filter: blur(15px);
  z-index: 3000;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.4s cubic-bezier(0.2, 0.8, 0.2, 1);
}

.stunning-modal-overlay.is-active {
  opacity: 1;
  pointer-events: auto;
}

.stunning-modal-content {
  background: linear-gradient(180deg, #18181b 0%, #0d0d0f 100%);
  width: 100%;
  max-width: 580px; /* Perfect aesthetic width */
  height: 90vh; /* App-like feel */
  max-height: 800px;
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: 0 40px 100px rgba(0, 0, 0, 0.9), 0 0 0 1px rgba(255, 85, 0, 0.2);
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden; /* Hide outer scroll */
  overflow-y: auto; /* Internal scroll */
  transform: translateY(40px) scale(0.96);
  transition: all 0.5s cubic-bezier(0.19, 1, 0.22, 1);
}

.stunning-modal-overlay.is-active .stunning-modal-content {
  transform: translateY(0) scale(1);
}

.stunning-close {
  position: absolute;
  top: 15px;
  right: 15px;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(5px);
  border: 1px solid rgba(255,255,255,0.1);
  color: #fff;
  width: 38px;
  height: 38px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 50;
  transition: all 0.3s ease;
}

.stunning-close:hover {
  background: var(--accent-color);
  transform: rotate(90deg) scale(1.1);
  border-color: transparent;
}

.close-icon {
  width: 18px;
  height: 18px;
}

/* Hero Section */
.stunning-hero {
  position: relative;
  width: 100%;
  height: 320px;
  min-height: 320px;
  display: flex;
  align-items: flex-end;
  padding: 30px;
}

.stunning-hero-img {
  position: absolute;
  top: 0; left: 0; width: 100%; height: 100%;
  background-size: cover;
  background-position: center top; /* Center top prevents people's heads from getting cut off */
}

.stunning-hero-gradient {
  position: absolute;
  top: 0; left: 0; width: 100%; height: 100%;
  background: linear-gradient(180deg, rgba(24,24,27,0) 0%, rgba(24,24,27,0.4) 50%, rgba(24,24,27,1) 100%);
}

.stunning-hero-text {
  position: relative;
  z-index: 10;
  width: 100%;
}

.stunning-badge {
  display: inline-block;
  background: var(--accent-color);
  color: #fff;
  font-family: 'Inter', sans-serif;
  font-weight: 800;
  font-size: 0.65rem;
  letter-spacing: 2px;
  padding: 4px 10px;
  border-radius: 4px;
  margin-bottom: 10px;
  text-transform: uppercase;
  box-shadow: 0 4px 15px rgba(255, 85, 0, 0.4);
}

.stunning-title {
  font-family: 'Anton', sans-serif;
  font-size: clamp(3rem, 8vw, 4.5rem);
  line-height: 1;
  color: #fff;
  margin: 0;
  text-transform: uppercase;
  letter-spacing: 2px;
  text-shadow: 0 5px 20px rgba(0,0,0,0.8);
}

/* Body / Scrolling Section */
.stunning-body {
  padding: 0 30px 40px 30px;
  z-index: 10;
  background: #18181b; /* Connects smoothly to gradient */
}

.stunning-subtitle {
  font-family: 'Inter', sans-serif;
  color: #fff;
  font-size: 0.85rem;
  font-weight: 800;
  letter-spacing: 2px;
  margin-top: 0;
  margin-bottom: 12px;
  text-transform: uppercase;
}

/* About / Info Block */
.about-section {
  display: flex;
  flex-direction: column;
}

.stunning-divider {
  border: 0;
  height: 1px;
  background: rgba(255, 255, 255, 0.08); /* super thin and elegant */
  margin: 25px 0;
}

.stunning-about {
  color: #a1a1aa;
  font-family: 'Inter', sans-serif;
  font-size: 0.95rem;
  line-height: 1.6;
  margin: 0;
}

.stunning-social-box {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

.stunning-social-link {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: #fff;
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 0.85rem;
  padding: 8px 16px;
  border-radius: 30px; /* Pill shape */
  text-decoration: none;
  transition: all 0.3s ease;
}

.stunning-social-link:hover {
  background: rgba(255, 85, 0, 0.05);
  border-color: var(--accent-color);
  color: var(--accent-color);
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(255, 85, 0, 0.15);
}

/* Playlist Element */
.stunning-playlist-container {
  border-radius: 16px;
  position: relative;
}

.playlist-header {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 15px;
  padding: 20px 20px 0 20px;
}

.header-led {
  width: 8px;
  height: 8px;
  background: #1ed760; /* Spotify Green nod or Accent Color */
  border-radius: 50%;
  box-shadow: 0 0 10px #1ed760;
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0% { opacity: 0.5; box-shadow: 0 0 5px #1ed760; }
  50% { opacity: 1; box-shadow: 0 0 15px #1ed760; }
  100% { opacity: 0.5; box-shadow: 0 0 5px #1ed760; }
}

.playlist-header h3 {
  font-family: 'Inter', sans-serif;
  color: #fff;
  font-size: 0.85rem;
  font-weight: 800;
  letter-spacing: 2px;
  margin: 0;
}

.iframe-container {
  padding: 0 20px 20px 20px;
}


/* Scrollbar Overrides for the Modal */
.stunning-modal-content::-webkit-scrollbar {
  width: 6px;
}
.stunning-modal-content::-webkit-scrollbar-track {
  background: #0d0d0f;
}
.stunning-modal-content::-webkit-scrollbar-thumb {
  background: #3f3f46;
  border-radius: 10px;
}
.stunning-modal-content::-webkit-scrollbar-thumb:hover {
  background: var(--accent-color);
}

/* Mobile Overrides for Stunning Modal */
@media (max-width: 480px) {
  .stunning-modal-content {
    width: 90%;
    height: 85vh;
    border-radius: 16px;
  }
  
  .stunning-hero {
    height: 180px;
    min-height: 180px;
    padding: 15px 20px;
  }

  .stunning-hero-img {
    background-size: 100% auto;
    background-repeat: no-repeat;
    background-position: top center;
  }
  
  .stunning-title {
    font-size: 2.8rem;
  }
  
  .stunning-body {
    padding: 0 20px 30px 20px;
  }
  
  .stunning-about {
    font-size: 0.85rem;
  }
  
  .playlist-header {
    padding: 15px 15px 0 15px;
  }
  
  .iframe-container {
    padding: 0 15px 15px 15px;
  }
}

@media (max-width: 768px) and (min-width: 481px) {
  .stunning-modal-content {
    width: 85%;
    height: 85vh;
  }
}

/* List Screen Adjustments */
@media (max-width: 768px) {
  .lineup-row-card {
    padding: 15px 10px;
    min-height: 80px;
  }
  .row-left {
    width: auto;
    gap: 10px;
  }
  .row-center {
    flex-grow: 1;
  }
  .row-band-info {
    padding-left: 10px;
    gap: 2px;
  }
  .row-right {
    gap: 10px;
  }
  .list-band-name {
    font-size: 1.8rem;
  }
  .list-band-origin {
    font-size: 0.7rem;
  }
  .section-title {
    font-size: 3rem;
  }
}

@media (max-width: 480px) {
  .lineup-row-card {
    padding: 10px 5px;
  }
  .row-left {
    gap: 5px;
  }
  .row-right {
    gap: 5px;
  }
  .list-band-name {
    font-size: 1.2rem;
  }
  .list-band-origin {
    font-size: 0.6rem;
  }
  .row-action-icon {
    padding: 4px;
  }
  .row-action-icon svg {
    width: 14px;
    height: 14px;
  }
}
</style>
