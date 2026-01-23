<template>
  <MainLayout :bg-image="backgroundImage">
    <section id="home" class="hero-section theme-section-bg">
      <div class="hero-content">
        <img :src="logoImage" alt="Pallas Logo" class="hero-logo" />
        <p class="hero-subtitle theme-text-secondary pallas-subtitle">
            Everybody Welcome
        </p>
        <a class="glass-button" :href="pdfUrl">PALLAS.DRINKS</a>
      </div>
    </section>
    <FooterSection />
  </MainLayout>
</template>

<script setup>
import MainLayout from '../layouts/MainLayout.vue'
import FooterSection from '../components/sections/FooterSection.vue'
import backgroundImage from '../assets/pictures/sitzecke.webp'
import logoImage from '../assets/icons/Pallas_Logo_II.svg'

const pdfUrl = `${import.meta.env.BASE_URL}Karte_Pallas.pdf`
</script>

<style scoped>
.hero-section {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  border-bottom: 1px solid var(--theme-border);
}

.hero-section.theme-section-bg {
  background: transparent !important;
  backdrop-filter: none !important;
}

.hero-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background:
    radial-gradient(circle at 20% 80%, rgba(255, 255, 255, 0.01) 0%, transparent 50%),
    radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.015) 0%, transparent 50%);
  pointer-events: none;
}

.hero-content {
  text-align: center;
  padding: 3rem 2.5rem;
  max-width: 800px;
  z-index: 3;
  border-radius: 4px;
  position: relative;
  background: transparent !important;
  backdrop-filter: none !important;
}

.hero-logo {
  width: 100%;
  max-width: clamp(320px, 60vw, 700px);
  height: auto;
  margin-bottom: 2.5rem;
  filter: brightness(1) drop-shadow(0 0 40px rgba(255, 255, 255, 0.15));
  animation: logoFloat 6s ease-in-out infinite;
}

@keyframes logoFloat {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

.hero-subtitle {
  font-size: clamp(1.2rem, 3vw, 2rem);
  margin-bottom: 0;
  opacity: 0.9;
  text-shadow: 0 0 20px rgba(255, 255, 255, 0.1);
  font-family: var(--font-primary);
  font-weight: 400;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  font-size: 1.1rem;
  color: #ffffff !important;
}

.glass-button {
  margin-top: 1.75rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem 2.5rem;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.35);
  background: rgba(255, 255, 255, 0.08);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(12px);
  color: #ffffff;
  font-family: var(--font-primary);
  font-size: 0.95rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  transition: transform 0.2s ease, border-color 0.2s ease, background 0.2s ease;
}

.glass-button:hover {
  transform: translateY(-2px);
  border-color: rgba(255, 255, 255, 0.6);
  background: rgba(255, 255, 255, 0.12);
}

@media (max-width: 767px) {
  .hero-content {
    padding: 3rem 2rem;
    margin: 1rem;
  }
}
</style>
