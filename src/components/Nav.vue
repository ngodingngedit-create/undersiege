<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'

const activeMobileTab = ref('beranda')
const tabs = ['beranda', 'creation', 'lineup', 'tiket']
const isClickScrolling = ref(false)

const activeIndex = computed(() => {
  const index = tabs.indexOf(activeMobileTab.value)
  return index === -1 ? 0 : index
})

const setActiveTab = (tab) => {
  activeMobileTab.value = tab
  isClickScrolling.value = true
  
  // Re-enable scroll spy after smooth scroll finishes
  setTimeout(() => {
    isClickScrolling.value = false
  }, 1000)
}

let observer = null

onMounted(() => {
  observer = new IntersectionObserver((entries) => {
    if (isClickScrolling.value) return
    
    entries.forEach(entry => {
      // Trigger when a section enters the middle half of the screen
      if (entry.isIntersecting && tabs.includes(entry.target.id)) {
        activeMobileTab.value = entry.target.id
      }
    })
  }, {
    rootMargin: '-40% 0px -40% 0px',
    threshold: 0
  })

  // Start observing sections after ensuring they exist in DOM
  setTimeout(() => {
    tabs.forEach(tab => {
      const el = document.getElementById(tab)
      if (el) observer.observe(el)
    })
  }, 500)
})

onUnmounted(() => {
  if (observer) {
    observer.disconnect()
  }
})

const isSearchOpen = ref(false)
const searchQuery = ref('')
const searchInputRef = ref(null)

const toggleSearch = async () => {
  isSearchOpen.value = !isSearchOpen.value
  if (isSearchOpen.value) {
    await nextTick()
    if (searchInputRef.value) searchInputRef.value.focus()
  } else {
    searchQuery.value = ''
  }
}
</script>

<template>
  <nav class="navbar-wrapper">
    <div class="nav-pill">
      <a href="#beranda" class="nav-logo">
        <img src="/logo undersiege/LOGO.png" alt="Undersiege Logo" class="nav-logo-img" />
      </a>
      
      <div class="nav-links desktop-only">
        <a href="#beranda">BERANDA</a>
        <a href="#creation">CO-CREATION</a>
        <a href="#lineup">LINEUP</a>
      </div>
      
      <div class="nav-actions">
        <!-- Search Toggle Button -->
        <button class="icon-btn search-btn" aria-label="Search" @click="toggleSearch" :class="{ 'active': isSearchOpen }">
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
        </button>

        <!-- Ticket Icon (SVG) -->
        <a href="https://kolektix.com/event/jakarta-undersiege" target="_blank" rel="noopener noreferrer" class="nav-btn brutal-ticket desktop-only">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-ticket"><path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"/><path d="M13 5v2"/><path d="M13 17v2"/><path d="M13 11v2"/></svg>
          TIKET
        </a>
      </div>
    </div>
    
    <!-- Animated Dropdown Brutalist Search Bar -->
    <div class="brutal-search-container" :class="{ 'is-open': isSearchOpen }">
      <div class="brutal-search-bar">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="square" stroke-linejoin="miter" class="search-icon"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
        <input 
          type="text" 
          v-model="searchQuery" 
          placeholder="CARI GIGS / MERCH..." 
          class="brutal-search-input" 
          ref="searchInputRef"
          @keyup.esc="toggleSearch"
        />
      </div>
    </div>

    <!-- Mobile Bottom Navigation (Floating Pill with Spotlight) -->
    <div class="mobile-bottom-nav mobile-only">
      <div class="nav-indicator" :style="{ transform: `translateX(${activeIndex * 100}%)` }">
        <div class="indicator-line"></div>
        <div class="indicator-glow"></div>
      </div>
      <a href="#beranda" class="mobile-nav-link" :class="{ 'active': activeMobileTab === 'beranda' }" @click="setActiveTab('beranda')">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-home"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
      </a>
      <a href="#creation" class="mobile-nav-link" :class="{ 'active': activeMobileTab === 'creation' }" @click="setActiveTab('creation')">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-users"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
      </a>
      <a href="#lineup" class="mobile-nav-link" :class="{ 'active': activeMobileTab === 'lineup' }" @click="setActiveTab('lineup')">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-music"><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg>
      </a>
      <a href="https://kolektix.com/event/jakarta-undersiege" target="_blank" rel="noopener noreferrer" class="mobile-nav-link brutal-mobile-ticket" :class="{ 'active': activeMobileTab === 'tiket' }">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-ticket"><path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"/><path d="M13 5v2"/><path d="M13 17v2"/><path d="M13 11v2"/></svg>
      </a>
    </div>
  </nav>
</template>

<style scoped>
.navbar-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  align-items: center;
  pointer-events: none;
}

.nav-pill {
  pointer-events: auto;
  background: rgba(18, 18, 20, 0.85); /* Sleek translucent charcoal */
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.05); /* Very subtle bottom edge */
  padding: 18px 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.4);
  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
}

.nav-logo {
  display: flex;
  align-items: center;
  transition: all 0.3s ease;
}

.nav-logo-img {
  height: 65px; /* Noticeably larger for readability */
  width: auto;
  filter: drop-shadow(0 0 5px rgba(0,0,0,0.5)); /* Contrast shadow */
}

.nav-logo:hover {
  transform: scale(1.05); /* Gentle expansion */
  filter: drop-shadow(0 0 10px rgba(255, 255, 255, 0.2));
}

.nav-links {
  display: flex;
  gap: 40px;
  align-items: center;
}

.nav-links a {
  font-family: 'Inter', sans-serif;
  font-weight: 600; /* Softer weight */
  font-size: 0.9rem;
  letter-spacing: 2px;
  color: #aaa; /* Off-grey */
  position: relative;
  padding: 8px 0;
  text-transform: uppercase;
  transition: all 0.3s ease;
}

/* Elegant soft glow and underline */
.nav-links a::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%) scaleX(0);
  width: 100%;
  height: 2px;
  border-radius: 2px;
  background-color: var(--accent-color);
  box-shadow: 0 0 8px var(--accent-color);
  transition: transform 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
}

.nav-links a:hover, 
.nav-links a.active {
  color: #fff;
}

.nav-links a:hover::after,
.nav-links a.active::after {
  transform: translateX(-50%) scaleX(1);
}

.icon-btn.search-btn {
  background: transparent;
  border: none;
  color: #fff;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  transition: all 0.3s ease;
  pointer-events: auto;
}

.icon-btn.search-btn:hover,
.icon-btn.search-btn.active {
  color: var(--accent-color);
  transform: scale(1.1);
}

.nav-actions {
  display: flex;
  gap: 15px;
  align-items: center;
}

/* Brutalist Animated Dropdown Search Bar */
.brutal-search-container {
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 0 50px;
  pointer-events: none;
  overflow: hidden; /* Hide when collapsed */
  
  /* Animation states */
  max-height: 0;
  opacity: 0;
  transform: translateY(-20px);
  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
}

.brutal-search-container.is-open {
  pointer-events: auto;
  max-height: 100px;
  opacity: 1;
  padding-top: 20px;
  padding-bottom: 10px;
  transform: translateY(0);
}

.brutal-search-bar {
  display: flex;
  align-items: center;
  background: #111;
  border: 1px solid #333;
  border-radius: 12px; /* Slightly rounded corners */
  width: 100%;
  max-width: 500px;
  padding: 10px 15px;
  gap: 12px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.5);
  transition: border-color 0.2s ease, box-shadow 0.2s ease, transform 0.2s ease;
}

.brutal-search-bar:focus-within {
  border-color: var(--accent-color);
  background: #161618;
  transform: translateY(-2px);
  box-shadow: 0 15px 35px rgba(255,85,0,0.15);
}

.search-icon {
  color: #666;
  flex-shrink: 0;
  transition: color 0.3s;
}

.brutal-search-bar:focus-within .search-icon {
  color: var(--accent-color);
}

.brutal-search-input {
  background: transparent;
  border: none;
  color: #fff;
  font-family: 'Anton', sans-serif;
  font-size: 1.2rem;
  letter-spacing: 1px;
  width: 100%;
  outline: none;
  text-transform: uppercase;
}

.brutal-search-input::placeholder {
  color: rgba(255,255,255,0.2);
  font-family: 'Inter', sans-serif;
  font-size: 0.9rem;
  font-weight: 500;
  letter-spacing: 2px;
}

.nav-btn.brutal-ticket {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  color: #fff;
  font-family: 'Inter', sans-serif;
  font-weight: 700;
  font-size: 0.9rem;
  letter-spacing: 2px;
  padding: 10px 24px;
  text-transform: uppercase;
  position: relative;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 8px; /* Consistent smooth corners */
  gap: 8px;
  overflow: hidden;
  z-index: 1;
}

.nav-btn.brutal-ticket svg {
  color: var(--accent-color);
  transition: color 0.3s ease;
}

/* Elegant metal sweep hover effect matching global theme */
.nav-btn.brutal-ticket::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(120deg, transparent, rgba(255, 85, 0, 0.4), transparent);
  transform: translateX(-100%);
  transition: 0.6s cubic-bezier(0.25, 0.8, 0.25, 1);
  z-index: -1;
}

.nav-btn.brutal-ticket:hover {
  border-color: var(--accent-color);
  box-shadow: 0 0 20px rgba(255, 85, 0, 0.3);
  transform: translateY(-2px);
  color: #fff;
}

.nav-btn.brutal-ticket:hover svg {
  color: #fff;
}

.nav-btn.brutal-ticket:hover::before {
  transform: translateX(100%);
}

.mobile-only {
  display: none;
}

/* Mobile Bottom Navigation Styles (Floating Pill UI) */
.mobile-bottom-nav {
  position: fixed;
  bottom: 25px;
  left: 50%;
  transform: translateX(-50%);
  width: 90%;
  max-width: 400px;
  height: 70px;
  background-color: #050505; /* Solid black/dark pill */
  border-radius: 40px; /* Fully rounded ends */
  display: none; /* Shown via media query */
  align-items: center;
  padding: 0; /* Important: removed horizontal padding for correct 20% calculation */
  margin: 0;
  z-index: 1000;
  pointer-events: auto;
  box-shadow: 0 15px 35px rgba(0,0,0,0.8), inset 0 1px 1px rgba(255,255,255,0.05);
  isolation: isolate; /* Create new stacking context */
  overflow: hidden; /* Hide any overflowed spotlight */
}

.mobile-nav-link {
  display: flex;
  justify-content: center;
  align-items: center;
  color: #555;
  width: 25%; /* Adjusted to 1/4th each for 4 items */
  height: 100%;
  position: relative;
  transition: color 0.3s ease;
  -webkit-tap-highlight-color: transparent;
  z-index: 10;
}

.mobile-nav-link svg {
  width: 26px;
  height: 26px;
  position: relative;
  z-index: 5;
  transition: transform 0.2s cubic-bezier(0.25, 0.8, 0.25, 1);
}

.mobile-nav-link:hover,
.mobile-nav-link.active {
  color: var(--accent-color);
}

.mobile-nav-link.active svg {
  transform: translateY(-2px);
}

/* UI/UX Spotlight Active State & Sliding Indicator */
.nav-indicator {
  position: absolute;
  top: 0;
  left: 0;
  width: 25%; /* 4 icons */
  height: 100%;
  pointer-events: none;
  transition: transform 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
  z-index: 1;
}

.indicator-line {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 35px;
  height: 4px;
  background-color: var(--accent-color);
  border-radius: 0 0 4px 4px;
  box-shadow: 0 2px 10px var(--accent-color);
}

.indicator-glow {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 75px; /* Width at the bottom of the beam */
  height: 100%;
  background: linear-gradient(to bottom, rgba(255,85,0,0.25) 0%, rgba(255,85,0,0) 80%);
  clip-path: polygon(35% 0, 65% 0, 100% 100%, 0% 100%); /* Conical spotlight shape */
}

/* Only make the ticket orange when active */
.mobile-nav-link.brutal-mobile-ticket {
  color: #555;
}
.mobile-nav-link.brutal-mobile-ticket.active {
  color: var(--accent-color);
}

/* Removed fullscreen search styles */


@media (max-width: 900px) {
  .desktop-only {
    display: none !important;
  }
  
  .mobile-only {
    display: flex !important;
  }

  .nav-pill {
    padding: 12px 20px;
  }
  
  .brutal-search-container {
    padding: 5px 20px;
  }
  
  .brutal-search-bar {
    max-width: 100%; /* Take full width on mobile minus padding */
  }
}

@media (max-width: 480px) {
  .nav-logo-img {
    height: 45px; /* Larger scale on small phones */
  }
  .brutal-search-input {
    font-size: 1rem;
  }
  .brutal-search-input::placeholder {
    font-size: 0.75rem;
  }
}
</style>
