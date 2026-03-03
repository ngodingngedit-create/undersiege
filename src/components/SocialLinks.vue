<script setup>
</script>

<template>
  <div class="social-nav">
    <a href="https://kolektix.com" target="_blank" class="social-link" title="X (Twitter)">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4l11.733 16h4.267l-11.733 -16z" /><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" /></svg>
    </a>
    <a href="https://kolektix.com" target="_blank" class="social-link" title="Instagram">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
    </a>
    <a href="https://kolektix.com" target="_blank" class="social-link" title="YouTube">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
    </a>
  </div>
</template>

<style scoped>
.social-nav {
  position: fixed;
  top: 30px;
  right: 30px;
  display: flex;
  gap: 15px;
  z-index: 100;
}

.social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  background-color: var(--bg-color);
  border: 2px solid var(--text-color);
  color: var(--text-color);
  transition: all 0.3s ease;
}

.social-link:hover {
  background-color: var(--accent-color);
  border-color: var(--accent-color);
  color: var(--bg-color);
  transform: translateY(-5px);
  box-shadow: 4px 4px 0px rgba(0,0,0,0.5);
}

@media (max-width: 768px) {
  .social-nav {
    display: none !important;
  }
}
</style>
