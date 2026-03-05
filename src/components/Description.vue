<template>
  <section id="description" class="minimal-desc-section">
    <div class="container desc-wrapper">
      <div class="desc-grid">
        <div class="desc-left">
          <img src="/logo undersiege/LOGO.png" alt="Undersiege Logo" class="desc-logo" />
        </div>
        
        <div class="desc-right">
          <h3 class="desc-subtitle">THE NOISE. THE SWEAT. THE CHAOS.</h3>
          <div class="desc-text-wrapper">
            <p class="desc-text">
              As the global hardcore scene continues to expand, <span class="text-highlight">JAKARTA UNDER SIEGE</span> has become more than just a local stage — it serves as a meeting point between Indonesian and international communities.
            </p>
            <p class="desc-text">
              This momentum is further amplified by the Asia tour of <strong class="text-white">Haywire 617</strong> to Indonesia, scheduled to coincide with the festival.
            </p>
            <p class="desc-text">
              The presence of Haywire 617 is not merely an addition to the international lineup, but a representation of cross-border connectivity within hardcore culture. The tour brings together two ecosystems that share common values: a strong ethic, loyalty to their communities, and uncompromising expression of social realities.
            </p>
            <p class="desc-text">
              With Jakarta Under Siege taking place alongside Haywire 617’s tour, the festival reinforces its position as a strategic meeting point on the map of the underground scene. This is not just a musical event, but a cultural moment where energy, ideas, and global solidarity converge within a single space.
            </p>
            <div class="desc-footer">
              <p>NO EXCUSES. JUST HARDCORE.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.minimal-desc-section {
  background-color: #0a0a0c;
  padding: 120px 20px;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}

.desc-wrapper {
  max-width: 1000px;
  margin: 0 auto;
}

.desc-grid {
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 60px;
  align-items: flex-start;
}

.desc-left {
  position: sticky;
  top: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
}



.desc-logo {
  max-width: 100%;
  width: 450px; 
  filter: drop-shadow(0 0 15px rgba(0,0,0,0.7));
  animation: gentleFloat 6s ease-in-out infinite;
}

@keyframes gentleFloat {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

.desc-right {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.desc-subtitle {
  font-family: 'Inter', sans-serif;
  font-size: clamp(1.2rem, 3vw, 1.8rem);
  font-weight: 800;
  color: #fff;
  margin: 0;
  letter-spacing: -0.5px;
  text-transform: uppercase;
}

.desc-text-wrapper {
  display: flex;
  flex-direction: column;
  gap: 25px;
}

.desc-text {
  font-family: 'Inter', sans-serif;
  font-size: 1.1rem;
  line-height: 1.8;
  color: #a1a1aa; /* Zinc 400 */
  margin: 0;
  font-weight: 400;
}

.text-highlight {
  color: #fff;
  font-weight: 700;
}

.text-white {
  color: #fff;
}

.desc-footer {
  margin-top: 10px;
  padding-top: 20px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.desc-footer p {
  font-family: 'Inter', sans-serif;
  font-size: 0.9rem;
  font-weight: 800;
  color: var(--accent-color);
  letter-spacing: 2px;
  margin: 0;
}

@media (max-width: 900px) {
  .desc-grid {
    grid-template-columns: 1fr;
    gap: 30px;
  }
  
  .desc-left {
    position: static;
  }
}
</style>
