<script setup>
import { ref } from 'vue'

const merchItems = [
  {
    name: 'MENTARI NOVEL TSHIRT TOUR',
    creator: 'Friends Family Forever',
    price: 'Rp 150.000',
    image: 'https://friendsfamilyforever.com/cdn/shop/files/imgonline-com-ua-resize-iKOiLUofWWWFC_250x.png',
    link: 'https://kolektix.com',
    description: 'Baju resmi edisi khusus tour Mentari Novel x Friends Family Forever dengan bahan katun premium 24s. Cetak sablon plastisol.'
  },
  {
    name: 'SUBCULTURE NOT FOR SALE TSHIRT',
    creator: 'Friends Family Forever',
    price: 'Rp 175.000',
    image: 'https://friendsfamilyforever.com/cdn/shop/files/imgonline-com-ua-resize-iKOiLUofWWWFC_250x.png',
    link: 'https://kolektix.com',
    description: 'T-shirt anthem pergerakan bawah tanah. Material sejuk 30s dengan washing vintage.'
  },
  {
    name: 'JAKARTA UNDER SIEGE HOODIE',
    creator: 'Jakarta Under Siege',
    price: 'Rp 350.000',
    image: 'https://friendsfamilyforever.com/cdn/shop/files/imgonline-com-ua-resize-iKOiLUofWWWFC_250x.png',
    link: 'https://kolektix.com',
    description: 'Hoodie tebal fleece cotton 330gsm. Logo bordir di dada dan grafis besar di punggung. Hangat untuk menemani perlawanan.'
  },
  {
    name: 'WARRIORS JAKARTA TSHIRT',
    creator: 'Jakarta Under Siege',
    price: 'Rp 150.000',
    image: 'https://friendsfamilyforever.com/cdn/shop/files/imgonline-com-ua-resize-iKOiLUofWWWFC_250x.png',
    link: 'https://kolektix.com',
    description: 'Kaos identitas anak jalanan ibukota. Sablon discharge yang menyatu dengan kain, tidak kaku saat berdesakan di pit.'
  }
]

const selectedMerch = ref(null)

const openModal = (item) => {
  selectedMerch.value = item
  document.body.style.overflow = 'hidden'
}

const closeModal = () => {
  selectedMerch.value = null
  document.body.style.overflow = ''
}
</script>

<template>
  <section class="merch-section" id="merch">
    <div class="merch-bg"></div>
    <div class="container">
      <h2 class="section-title">OFFICIAL MERCH</h2>
      
      <div class="merch-grid">
        <div 
          v-for="(item, index) in merchItems" 
          :key="index"
          @click="openModal(item)"
          class="merch-card"
        >
          <div class="merch-image-wrapper">
            <img :src="item.image" :alt="item.name">
          </div>
          <div class="merch-info">
            <h3 class="merch-name">{{ item.name }}</h3>
            <div class="price-container">
              <span class="merch-price">{{ item.price }}</span>
            </div>
            
            <div class="creator-info">
              <span class="creator-label">DIBUAT OLEH</span>
              <div class="creator-profile">
                <div class="creator-avatar">{{ item.creator.charAt(0) }}</div>
                <span class="creator-name">{{ item.creator }}</span>
              </div>
            </div>

            <div class="merch-divider"></div>

            <div class="merch-action">
              <span class="buy-link">GET IT</span>
            </div>
          </div>
        </div>
      </div>
      
      <div class="view-all-container">
        <a href="https://kolektix.com" target="_blank" class="brutal-btn">
          VIEW FULL COLLECTION
        </a>
      </div>
    </div>

    <!-- Product Detail Modal -->
    <div class="merch-modal-overlay" :class="{ 'is-open': selectedMerch }" @click="closeModal">
      <div class="merch-modal-content" @click.stop v-if="selectedMerch">
        <button class="close-modal-btn" @click="closeModal">&times;</button>
        
        <div class="m-modal-layout">
          <div class="m-modal-image">
            <img :src="selectedMerch.image" :alt="selectedMerch.name">
          </div>
          
          <div class="m-modal-details">
            <div class="m-modal-header">
              <div class="m-modal-creator">
                <div class="m-avatar">{{ selectedMerch.creator.charAt(0) }}</div>
                <span>{{ selectedMerch.creator }}</span>
              </div>
              <h2>{{ selectedMerch.name }}</h2>
              <div class="m-modal-price">{{ selectedMerch.price }}</div>
            </div>
            
            <div class="m-modal-desc">
              <p>{{ selectedMerch.description }}</p>
            </div>
            
            <!-- Dummy form options -->
            <div class="m-modal-options">
              <div class="option-group">
                <label>SIZE</label>
                <div class="size-selector">
                  <button class="size-btn">S</button>
                  <button class="size-btn active">M</button>
                  <button class="size-btn">L</button>
                  <button class="size-btn">XL</button>
                </div>
              </div>
            </div>
            
            <a :href="selectedMerch.link" target="_blank" class="m-modal-checkout-btn">
              CHECKOUT VIA KOLEKTIX
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.merch-section {
  position: relative;
  overflow: hidden;
  z-index: 1;
  background-color: var(--bg-color);
}

.merch-bg {
  position: absolute;
  top: 0; left: 0; width: 100%; height: 100%;
  background: radial-gradient(circle at 100% 0%, rgba(255, 85, 0, 0.05) 0%, transparent 50%); /* Subtle glowing corner instead of harsh lines */
  z-index: -1;
  pointer-events: none;
}

.merch-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 40px;
  margin-bottom: 80px;
}

.merch-card {
  display: flex;
  flex-direction: column;
  background: var(--bg-light); 
  border: 1px solid rgba(255,255,255,0.05); /* Minimal border */
  border-radius: 12px; /* Smooth corners */
  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
  box-shadow: 0 10px 30px rgba(0,0,0,0.3);
  overflow: hidden;
}

.merch-image-wrapper {
  background: linear-gradient(to bottom, #f5f5f5, #eaeaea); /* Soft bright backdrop for merch */
  aspect-ratio: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
}

.merch-image-wrapper img {
  width: 90%; /* Slight padding inside wrapper */
  height: 90%;
  object-fit: contain; /* Don't crop product */
  transition: transform 0.6s cubic-bezier(0.25, 0.8, 0.25, 1);
  position: relative;
  z-index: 2;
  filter: drop-shadow(0 10px 15px rgba(0,0,0,0.15)); /* Add natural depth to product */
}

.merch-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(0,0,0,0.5), 0 0 20px rgba(255,85,0,0.1);
  border-color: rgba(255, 85, 0, 0.3); /* Subtle orange glow on interaction */
}

.merch-card:hover .merch-image-wrapper img {
  transform: scale(1.08); /* Elegant zoom */
}

.merch-info {
  padding: 24px;
  flex: 1;
  display: flex;
  flex-direction: column;
}

.merch-name {
  font-family: 'Inter', sans-serif;
  font-size: 1.1rem;
  font-weight: 800;
  letter-spacing: 0.5px;
  color: #fff;
  margin-bottom: 10px;
  line-height: 1.3;
  transition: color 0.3s ease;
}

.merch-card:hover .merch-name {
  color: var(--accent-color);
}

.price-container {
  display: flex;
  justify-content: flex-end;
  margin-bottom: 25px;
}

.merch-price {
  font-family: 'Inter', sans-serif;
  font-weight: 800;
  font-size: 1.4rem;
  color: #fff; 
}

.creator-info {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 25px;
}

.creator-label {
  font-family: 'Inter', sans-serif;
  font-size: 0.75rem;
  font-weight: 600;
  color: #888;
  letter-spacing: 1px;
}

.creator-profile {
  display: flex;
  align-items: center;
  gap: 8px;
}

.creator-avatar {
  width: 22px;
  height: 22px;
  background-color: transparent;
  border: 2px solid #555;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #aaa;
  font-size: 0.7rem;
  font-weight: 800;
  font-family: 'Inter', sans-serif;
}

.creator-name {
  font-family: 'Inter', sans-serif;
  font-size: 0.95rem;
  font-weight: 700;
  color: #ddd;
}

.merch-divider {
  height: 1px;
  background: rgba(255, 255, 255, 0.1);
  margin-top: auto;
  margin-bottom: 20px;
}

.merch-action {
  display: flex;
  justify-content: flex-end;
}

.buy-link {
  font-family: 'Inter', sans-serif;
  font-size: 0.9rem;
  font-weight: 800;
  letter-spacing: 1px;
  color: #fff;
  background-color: var(--accent-color);
  padding: 10px 24px;
  border-radius: 8px; /* Rounded block like the reference image */
  transition: all 0.3s ease;
  display: inline-block;
}

.merch-card:hover .buy-link {
  background-color: #fff;
  color: var(--accent-color);
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(255, 85, 0, 0.3);
}

.view-all-container {
  text-align: center;
}

/* Mobile Adjustments for Compact Cards */
@media (max-width: 768px) {
  .merch-grid {
    grid-template-columns: repeat(2, 1fr); /* Force 2 columns on mobile */
    gap: 12px; /* Tighter gap */
  }

  .merch-info {
    padding: 12px; /* Smaller padding */
  }

  .merch-name {
    font-size: 0.85rem; /* Smaller text */
    letter-spacing: 0px;
    margin-bottom: 5px;
    line-height: 1.2;
  }

  .price-container {
    margin-bottom: 12px;
  }

  .merch-price {
    font-size: 1rem; /* Smaller text */
  }

  .creator-info {
    gap: 4px;
    margin-bottom: 15px;
  }

  .creator-label {
    font-size: 0.6rem;
  }

  .creator-avatar {
    width: 16px;
    height: 16px;
    font-size: 0.55rem;
  }

  .creator-name {
    font-size: 0.75rem;
  }

  .merch-divider {
    margin-bottom: 12px;
  }

  .buy-link {
    font-size: 0.75rem;
    padding: 8px 0;
    width: 100%; /* Full width button on small cards */
    text-align: center;
  }
}

/* Modal Styles */
.merch-modal-overlay {
  position: fixed;
  top: 0; left: 0; width: 100%; height: 100%;
  background: rgba(10, 10, 12, 0.85);
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

.merch-modal-overlay.is-open {
  opacity: 1;
  pointer-events: auto;
}

.merch-modal-content {
  background: var(--bg-light);
  width: 100%;
  max-width: 900px;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 20px 60px rgba(0,0,0,0.8);
  transform: translateY(20px) scale(0.98);
  transition: all 0.4s cubic-bezier(0.19, 1, 0.22, 1);
  position: relative;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.merch-modal-overlay.is-open .merch-modal-content {
  transform: translateY(0) scale(1);
}

.m-modal-layout {
  display: grid;
  grid-template-columns: 1fr 1fr;
  min-height: 400px;
}

.m-modal-image {
  background: linear-gradient(to bottom, #f5f5f5, #eaeaea);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px;
}

.m-modal-image img {
  width: 100%;
  max-width: 400px;
  object-fit: contain;
  filter: drop-shadow(0 20px 30px rgba(0,0,0,0.2));
}

.m-modal-details {
  padding: 40px;
  display: flex;
  flex-direction: column;
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

.m-modal-creator {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 15px;
  color: #aaa;
  font-size: 0.85rem;
  font-weight: 600;
}

.m-avatar {
  width: 24px;
  height: 24px;
  border: 2px solid #555;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 0.75rem;
  font-weight: 800;
}

.m-modal-header h2 {
  font-family: 'Inter', sans-serif;
  font-size: 1.8rem;
  letter-spacing: 0;
  text-transform: none;
  margin-bottom: 10px;
  color: #fff;
}

.m-modal-price {
  font-family: 'Inter', sans-serif;
  font-size: 1.6rem;
  font-weight: 800;
  color: var(--accent-color);
  margin-bottom: 25px;
}

.m-modal-desc {
  color: #888;
  font-size: 0.95rem;
  line-height: 1.6;
  margin-bottom: 30px;
  padding-bottom: 20px;
  border-bottom: 1px solid rgba(255,255,255,0.1);
}

.m-modal-options {
  margin-bottom: auto; /* Push checkout button to bottom */
}

.option-group label {
  display: block;
  font-size: 0.75rem;
  font-weight: 700;
  color: #aaa;
  margin-bottom: 10px;
  letter-spacing: 1px;
}

.size-selector {
  display: flex;
  gap: 10px;
  margin-bottom: 30px;
}

.size-btn {
  width: 40px;
  height: 40px;
  background: transparent;
  border: 1px solid #444;
  color: #fff;
  border-radius: 6px;
  cursor: pointer;
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  transition: all 0.2s ease;
}

.size-btn:hover {
  border-color: #888;
}

.size-btn.active {
  background: var(--accent-color);
  border-color: var(--accent-color);
}

.m-modal-checkout-btn {
  display: block;
  text-align: center;
  background: #fff;
  color: #000;
  text-decoration: none;
  font-family: 'Inter', sans-serif;
  font-weight: 800;
  font-size: 1rem;
  padding: 15px;
  border-radius: 8px;
  transition: all 0.3s ease;
  width: 100%;
}

.m-modal-checkout-btn:hover {
  background: var(--accent-color);
  color: #fff;
  transform: translateY(-2px);
  box-shadow: 0 5px 20px rgba(255,85,0,0.3);
}

@media (max-width: 768px) {
  .merch-modal-overlay {
    padding: 15px;
    align-items: center; 
  }

  .merch-modal-content {
    background: var(--bg-light); 
    border-radius: 16px;
    transform: scale(0.95);
    margin: 0;
    width: 290px; /* Force small card width */
    max-height: 80vh; 
    display: flex;
    flex-direction: column;
    border: 1px solid rgba(255, 255, 255, 0.1);
    box-shadow: 0 10px 40px rgba(0,0,0,0.8);
  }
  
  .merch-modal-overlay.is-open .merch-modal-content {
    transform: scale(1);
  }

  /* Close button styling */
  .close-modal-btn {
    top: 8px; /* Inside the card */
    right: 8px;
    background: rgba(0,0,0,0.4); /* Transparent dark */
    color: #fff;
    width: 24px;
    height: 24px;
    font-size: 1.1rem;
    border: none; /* Strip border */
  }
  
  .m-modal-layout {
    grid-template-columns: 1fr;
    min-height: auto;
    overflow-y: auto; /* Make the inner layout scrollable */
    flex: 1; /* Take up remaining space inside modal-content */
  }
  
  .m-modal-image {
    padding: 0; 
    height: auto;
    background: linear-gradient(to bottom, #2a2a30, var(--bg-light)); 
    position: relative;
    padding-bottom: 25px; 
    border-radius: 16px 16px 0 0;
  }
  
  .m-modal-image img {
    width: 100%;
    height: 120px; /* Even smaller image */
    object-fit: contain; /* Don't crop if small */
    padding: 10px;
    filter: drop-shadow(0 5px 15px rgba(0,0,0,0.3));
  }
  
  /* Additional thumbnails simulation seen in reference */
  .m-modal-image::after {
    content: '';
    position: absolute;
    bottom: -15px;
    left: 50%;
    transform: translateX(-50%);
    width: 120px; /* Scaled down thumbnails */
    height: 35px;
    /* Dark theme thumbnails */
    background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="35"><rect x="0" y="0" width="30" height="30" rx="4" fill="%23222" stroke="%23ff5500" stroke-width="2"/><rect x="45" y="0" width="30" height="30" rx="4" fill="%23333"/><rect x="90" y="0" width="30" height="30" rx="4" fill="%23111"/></svg>');
    background-size: contain;
    background-repeat: no-repeat;
    z-index: 10;
  }
  
  .m-modal-details {
    padding: 15px 15px 10px; /* Super tight padding */
    background: transparent; 
  }
  
  .m-modal-creator {
    display: none; /* Hide creator to save space based on image */
  }
  
  .m-avatar {
    width: 16px;
    height: 16px;
    font-size: 0.5rem;
  }
  
  .m-modal-header::before {
    content: '0 reviews';
    display: block;
    color: #888;
    font-size: 0.65rem;
    margin-bottom: 4px;
    font-weight: 500;
  }
  
  .m-modal-header h2 {
    font-size: 1rem; /* Tiny title */
    color: #fff;
    font-weight: 800;
    line-height: 1.2;
    margin-bottom: 6px;
  }
  
  .m-modal-price {
    font-size: 1.15rem; /* Tiny price */
    color: var(--accent-color);
    margin-bottom: 10px;
  }
  
  .m-modal-desc {
    display: block; 
    color: #aaa;
    font-size: 0.75rem; /* Tiny desc */
    line-height: 1.4;
    margin-bottom: 15px;
    padding-bottom: 0;
    border-bottom: none; 
  }
  
  .m-modal-options {
    display: none; /* Hide Quantity and Size options completely */
  }
  
  /* Disable mock elements tied to options */
  .option-group::before, 
  .option-group label::after {
    display: none;
  }
  
  .size-selector,
  .size-btn {
    display: none;
  }
  
  .m-modal-checkout-btn {
    background: var(--accent-color); /* Single solid orange block */
    color: #fff;
    padding: 16px 12px; /* Thicker padding like reference */
    border-radius: 12px; /* Smoother pill corners */
    font-size: 1rem;
    font-weight: 900;
    letter-spacing: 0.5px;
    text-transform: uppercase;
  }
  
  .m-modal-checkout-btn::after {
    content: '30 days money back guarantee';
    display: block;
    text-align: center;
    color: rgba(255, 255, 255, 0.4); /* Translucent white inside orange */
    font-size: 0.75rem;
    font-weight: 600;
    margin-top: 10px;
    text-transform: none;
    letter-spacing: 0;
  }
}
</style>
