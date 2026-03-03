
<script setup>
</script>

<template>
  <div class="marquee-container">
    <div class="marquee-content">
      <span v-for="i in 10" :key="i">JAKARTA UNDER SIEGE &nbsp;&bull;&nbsp; </span>
    </div>
    <div class="marquee-content" aria-hidden="true">
      <span v-for="i in 10" :key="'copy-'+i">JAKARTA UNDER SIEGE &nbsp;&bull;&nbsp; </span>
    </div>
  </div>
</template>

<style scoped>
.marquee-container {
  width: 100%;
  overflow: hidden;
  background-color: var(--accent-color);
  padding: 15px 0;
  display: flex;
  position: relative;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  z-index: 10;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
}

.marquee-content {
  display: flex;
  white-space: nowrap;
  animation: marquee 25s linear infinite; /* Smoothed animation speed */
}

/* Pause on hover for better user experience */
.marquee-container:hover .marquee-content {
  animation-play-state: paused;
}

.marquee-text {
  font-family: 'Anton', sans-serif;
  font-size: clamp(1.5rem, 3vw, 2rem); /* Scaled down for elegance */
  color: #fff;
  padding: 0 30px;
  letter-spacing: 3px;
  -webkit-text-stroke: 0px;
}

.separator {
  color: rgba(255, 255, 255, 0.5); /* Subtle dot separator */
  padding: 0 30px;
}

@keyframes marquee {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}

@media (max-width: 768px) {
  .marquee-content span {
    font-size: 1.5rem;
  }
  .marquee-container {
    padding: 12px 0;
  }
}
</style>
