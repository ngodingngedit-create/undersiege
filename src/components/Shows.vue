<script setup>
import { ref } from 'vue'

const shows = [
  {
    id: 1,
    date: '30',
    month: 'MAY',
    venue: 'JAKARTA UNDER SIEGE',
    location: 'JAKARTA',
    tag: 'OFFICIAL TOUR',
    image: '/event/Haywire_banner 1090 x 350.jpg',
    price: 'Rp 175.000', /* Adjust as needed */
    status: 'TICKETS'
  },
  {
    id: 2,
    date: '15',
    month: 'NOV',
    venue: 'PALLADIUM',
    location: 'WORCESTER, MA',
    tag: 'W/ DROPKICK MURPHYS',
    image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=600&auto=format&fit=crop',
    price: 'Rp 950.000',
    status: 'TICKETS',
    highlighted: true
  },
  {
    id: 3,
    date: '05',
    month: 'DEC',
    venue: 'HOUSE OF BLUES',
    location: 'BOSTON, MA',
    tag: 'WINTER FESTIVAL',
    image: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?q=80&w=600&auto=format&fit=crop',
    price: 'Rp 750.000',
    status: 'TICKETS'
  },
  {
    id: 4,
    date: '31',
    month: 'DEC',
    venue: 'MADISON SQUARE GARDEN',
    location: 'NEW YORK, NY',
    tag: 'NEW YEARS EVE',
    image: 'https://images.unsplash.com/photo-1598387993281-cecf8b71a8f8?q=80&w=600&auto=format&fit=crop',
    price: 'Rp 1.800.000',
    status: 'SOLD OUT'
  }
]

const selectedShow = ref(null)

const openModal = (show) => {
  selectedShow.value = show
  document.body.style.overflow = 'hidden'
}

const closeModal = () => {
  selectedShow.value = null
  document.body.style.overflow = ''
}
</script>

<template>
  <section class="shows-section" id="shows">
    <div class="container">
      <h2 class="section-title">TOUR DATES</h2>
      
      <div class="shows-grid">
        <div 
          v-for="show in shows" 
          :key="show.id" 
          class="show-card"
          :class="{ 'highlighted': show.highlighted }"
          @click="openModal(show)"
        >
          <div class="show-card-image">
            <img :src="show.image" :alt="show.venue">
            <div class="like-button">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
              </svg>
            </div>
          </div>
          
          <div class="show-card-content">
            <div class="show-info-top">
              <h3 class="show-title">{{ show.venue }}</h3>
              
              <div class="show-info-list">
                <div class="detail-row">
                  <span class="detail-icon">🗓️</span>
                  <span class="detail-text">{{ show.date }} {{ show.month }} 2026</span>
                </div>
                <div class="detail-row">
                  <span class="detail-icon">📍</span>
                  <span class="detail-text">{{ show.location }}</span>
                </div>
              </div>
            </div>

            <div class="show-info-bottom">
              <div class="price-section">
                <span class="card-price">{{ show.price }}</span>
              </div>

              <div class="card-divider"></div>

              <div class="card-footer">
                <button class="card-action-btn" :class="{ 'sold-out': show.status === 'SOLD OUT' }">{{ show.status }}</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Show Detail Modal -->
    <div class="show-modal-overlay" :class="{ 'is-open': selectedShow }" @click="closeModal">
      <div class="show-modal-content" @click.stop v-if="selectedShow">
        <button class="close-modal-btn" @click="closeModal">&times;</button>
        
        <div class="modal-image-wrapper">
          <img :src="selectedShow.image" :alt="selectedShow.venue">
          <div class="modal-date-badge">
            <span class="m-month">{{ selectedShow.month }}</span>
            <span class="m-day">{{ selectedShow.date }}</span>
          </div>
        </div>
        
        <div class="modal-body">
          <div class="modal-header">
            <h2>{{ selectedShow.venue }}</h2>
            <span class="modal-tag">{{ selectedShow.tag }}</span>
          </div>
          
          <p class="modal-location">📍 {{ selectedShow.location }}</p>
          
          <div class="modal-description">
            <p>Join us at {{ selectedShow.venue }} in {{ selectedShow.location }} for an unforgettable night of music and energy. This is part of the official Under Siege Tour.</p>
          </div>
          
          <div class="modal-footer">
            <div class="modal-price">
              <span>Standard Ticket</span>
              <strong>{{ selectedShow.price }}</strong>
            </div>
            <button 
              class="modal-btn" 
              :class="{ 'sold-out': selectedShow.status === 'SOLD OUT' }"
            >
              {{ selectedShow.status }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.shows-section {
  position: relative;
  z-index: 1;
  background-color: var(--bg-light);
  border-top: 6px solid var(--accent-color);
  border-bottom: 6px solid var(--accent-color);
}

.shows-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 30px;
  padding: 20px 0;
}

.show-card {
  background: var(--bg-light); /* Dark card background */
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
  transition: transform 0.3s cubic-bezier(0.25, 0.8, 0.25, 1), box-shadow 0.3s ease;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  border: 1px solid rgba(255, 255, 255, 0.05); /* Subtle dark border */
}

.show-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.6), 0 0 0 2px var(--accent-color);
}

.show-card-image {
  position: relative;
  width: 100%;
  aspect-ratio: 16/9; /* Make the image shorter */
  overflow: hidden;
  border-radius: 20px;
  padding: 8px; /* Inner padding for the image curve */
  background: var(--bg-light);
}

.show-card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover; /* Fallback for others */
  object-position: center;
  border-radius: 14px; /* Inner radius matching the outer curve */
  filter: grayscale(100%) contrast(1.2); /* B&W image like reference */
  transition: filter 0.5s ease, transform 0.5s ease;
}

/* Make sure the wide poster specifically fits well */
.show-card:first-child .show-card-image img {
  object-fit: contain;
  background-color: #111; /* Dark background if it doesn't fill */
}

.show-card:hover .show-card-image img {
  filter: grayscale(0%) contrast(1.1); /* Reveal color on hover */
  transform: scale(1.05);
}

.like-button {
  position: absolute;
  top: 20px;
  right: 20px;
  width: 36px;
  height: 36px;
  background: rgba(30, 30, 35, 0.8);
  backdrop-filter: blur(4px);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ff5555; /* Soft red heart */
  z-index: 10;
  transition: transform 0.2s ease;
}

.like-button:hover {
  transform: scale(1.1);
}

.like-button svg {
  width: 16px;
  height: 16px;
}

.show-card-content {
  padding: 15px 20px 20px; /* Thinner top padding */
  display: flex;
  flex-direction: column;
  flex: 1; /* Make content fill the rest of the height */
  justify-content: space-between; /* Space out top and bottom info */
}

.show-info-top {
  display: flex;
  flex-direction: column;
}

.show-info-bottom {
  display: flex;
  flex-direction: column;
  margin-top: auto; /* Push bottom section down completely */
}

.show-title {
  font-family: 'Anton', sans-serif;
  font-size: 1.5rem;
  color: #fff;
  margin-bottom: 12px; /* Tighter gap */
  line-height: 1.1;
  text-transform: uppercase;
}

.show-info-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 15px; /* Margin before price */
}

.detail-row {
  display: flex;
  align-items: center;
  gap: 10px;
}

.detail-icon {
  font-size: 0.95rem;
  opacity: 0.8;
}

.detail-text {
  font-family: 'Inter', sans-serif;
  font-size: 0.85rem;
  font-weight: 500;
  color: #aaa;
}

.price-section {
  display: flex;
  justify-content: flex-end;
  margin-bottom: 15px; /* Adjust margin before divider */
}

.card-price {
  font-family: 'Inter', sans-serif;
  font-weight: 800;
  font-size: 1.4rem; /* Slightly smaller */
  color: #fff;
}

.card-divider {
  height: 1px;
  background: rgba(255, 255, 255, 0.1);
  margin-bottom: 15px; /* Adjust margin before footer */
}

.card-footer {
  display: flex;
  justify-content: flex-end; /* Align contents to the right */
  align-items: center;
}

.card-action-btn {
  font-family: 'Inter', sans-serif;
  font-size: 0.85rem;
  font-weight: 800;
  letter-spacing: 1px;
  color: #fff;
  background-color: var(--accent-color);
  padding: 8px 20px;
  border-radius: 8px; /* Match merch button */
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
}

.show-card:hover .card-action-btn:not(.sold-out) {
  background-color: #fff;
  color: var(--accent-color);
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(255, 85, 0, 0.3);
}

.card-action-btn.sold-out {
  background: transparent;
  border: 1px solid #555;
  color: #888;
  cursor: not-allowed;
}

/* Modal Styles */
.show-modal-overlay {
  position: fixed;
  top: 0; left: 0; width: 100%; height: 100%;
  background: rgba(10, 10, 12, 0.8);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  z-index: 2000;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s ease;
  padding: 20px;
}

.show-modal-overlay.is-open {
  opacity: 1;
  pointer-events: auto;
}

.show-modal-content {
  background: var(--bg-light);
  width: 100%;
  max-width: 500px;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 20px 60px rgba(0,0,0,0.8);
  transform: translateY(20px);
  transition: transform 0.4s cubic-bezier(0.19, 1, 0.22, 1);
  position: relative;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.show-modal-overlay.is-open .show-modal-content {
  transform: translateY(0);
}

.close-modal-btn {
  position: absolute;
  top: 15px;
  right: 15px;
  width: 36px;
  height: 36px;
  background: rgba(0,0,0,0.5);
  backdrop-filter: blur(4px);
  border: none;
  border-radius: 50%;
  color: #fff;
  font-size: 1.5rem;
  line-height: 1;
  cursor: pointer;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.2s ease;
}

.close-modal-btn:hover {
  background: var(--accent-color);
}

.modal-image-wrapper {
  position: relative;
  width: 100%;
  height: 250px;
}

.modal-image-wrapper img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.modal-date-badge {
  position: absolute;
  bottom: -20px;
  left: 30px;
  background: var(--accent-color);
  color: #fff;
  padding: 10px 15px;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 4px 15px rgba(255, 85, 0, 0.4);
}

.m-month {
  font-family: 'Inter', sans-serif;
  font-size: 0.8rem;
  font-weight: 800;
  letter-spacing: 1px;
}

.m-day {
  font-family: 'Anton', sans-serif;
  font-size: 1.8rem;
  line-height: 1;
}

.modal-body {
  padding: 40px 30px 30px;
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 10px;
  gap: 15px;
}

.modal-header h2 {
  font-family: 'Anton', sans-serif;
  font-size: 2rem;
  line-height: 1.1;
  color: #fff;
  margin: 0;
}

.modal-tag {
  background: rgba(255, 255, 255, 0.1);
  color: #ddd;
  padding: 6px 12px;
  border-radius: 50px;
  font-family: 'Inter', sans-serif;
  font-size: 0.7rem;
  font-weight: 700;
  white-space: nowrap;
}

.modal-location {
  font-family: 'Inter', sans-serif;
  color: #aaa;
  font-weight: 600;
  font-size: 0.95rem;
  margin-bottom: 20px;
}

.modal-description {
  font-family: 'Inter', sans-serif;
  color: #888;
  font-size: 0.9rem;
  line-height: 1.6;
  margin-bottom: 30px;
}

.modal-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 20px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.modal-price {
  display: flex;
  flex-direction: column;
}

.modal-price span {
  font-family: 'Inter', sans-serif;
  font-size: 0.75rem;
  color: #888;
}

.modal-price strong {
  font-family: 'Inter', sans-serif;
  font-size: 1.5rem;
  font-weight: 800;
  color: #fff;
}

.modal-btn {
  background: var(--accent-color);
  color: #fff;
  border: none;
  padding: 12px 30px;
  border-radius: 50px;
  font-family: 'Inter', sans-serif;
  font-weight: 800;
  letter-spacing: 1px;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.modal-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(255, 85, 0, 0.4);
}

.modal-btn.sold-out {
  background: transparent;
  border: 1px solid #555;
  color: #888;
  cursor: not-allowed;
  transform: none;
  box-shadow: none;
}

/* Mobile Responsive UI/UX Adjustments */
@media (max-width: 768px) {
  .shows-grid {
    grid-template-columns: 1fr;
    gap: 20px;
    padding: 10px 0;
  }
  
  .show-card-image {
    aspect-ratio: 16/10;
  }
  
  .show-card-content {
    padding: 15px;
  }
  
  .show-title {
    font-size: 1.3rem;
  }
  
  .card-price {
    font-size: 1.2rem;
  }
  
  .card-action-btn {
    width: 100%; /* Full width button on mobile for easier tapping */
    padding: 12px;
    font-size: 0.95rem;
  }
  
  .card-footer {
    justify-content: center; /* Center the full width button */
  }
  
  /* Modal Mobile Adjustments */
  .shows-grid {
    grid-template-columns: 1fr;
    gap: 20px;
    padding: 10px 0;
  }
  
  .show-modal-overlay {
    padding: 15px; /* Back to floating center */
    align-items: center; 
  }
  
  .show-modal-content {
    border-radius: 16px; /* Round all corners again */
    transform: translateY(20px) scale(0.95);
    width: 100%;
    max-height: 85vh; /* Keep within viewport */
    overflow-y: auto; /* Re-enable scroll just in case, but design to avoid it */
  }
  
  .show-modal-overlay.is-open .show-modal-content {
    transform: translateY(0) scale(1);
  }
  
  .modal-image-wrapper {
    height: 150px; /* Small image to save space */
  }
  
  .modal-date-badge {
    bottom: -15px;
    left: 20px;
    padding: 6px 10px;
  }
  
  .m-day {
    font-size: 1.2rem;
  }
  
  .modal-body {
    padding: 25px 20px 20px; /* Normal compact padding */
  }
  
  .modal-header {
    flex-direction: column;
    gap: 4px;
    margin-bottom: 8px;
  }
  
  .modal-header h2 {
    font-size: 1.4rem; 
  }
  
  .modal-tag {
    font-size: 0.7rem;
    padding: 4px 8px;
    align-self: flex-start;
  }
  
  .modal-location {
    font-size: 0.85rem;
    margin-bottom: 12px;
  }
  
  .modal-description {
    font-size: 0.85rem;
    line-height: 1.4;
    margin-bottom: 15px;
    /* Limit height, don't truncate unless necessary */
  }
  
  .modal-footer {
    padding-top: 15px;
    flex-direction: row; 
    align-items: center;
    justify-content: space-between;
  }
  
  .modal-price span {
    font-size: 0.75rem;
  }
  
  .modal-price strong {
    font-size: 1.3rem;
  }
  
  .modal-btn {
    width: auto;
    margin-top: 0; 
    padding: 10px 20px;
    font-size: 0.9rem;
  }
}


</style>
