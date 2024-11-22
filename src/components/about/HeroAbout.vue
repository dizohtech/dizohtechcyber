<template>
  <section id="about" class="py-20 parallax text-luxury-cream relative" 
           :style="{ backgroundImage: 'url(desktop.jpeg)' }">
    <div class="container mx-auto flex items-center justify-center p-8">
      <div class="w-1/2 p-4">
        <img src="@/assets/hassan-abdi-removebg-preview.png" alt="About Us Image" class="w-full h-auto rounded-lg">
      </div>
      <div class="w-1/2 text-center glassmorphism p-8">
        <h2 class="text-5xl font-bold mb-4">About Us</h2>
        <p class="text-lg mb-4 leading-relaxed">
          {{ aboutText }}
        </p>
        <p class="text-lg leading-relaxed">
          {{ missionText }}
        </p>
        <button class="mt-6 bg-luxury-gold text-luxury-navy px-6 py-2 rounded-full font-semibold hover:bg-luxury-cream hover:text-luxury-navy transition duration-300"
                @click="showPopup = true">
          Learn More
        </button>
      </div>
    </div>

    <!-- Popup -->
    <div v-if="showPopup" class="fixed inset-0 flex items-center justify-center z-50">
      <div class="absolute inset-0 bg-black opacity-50" @click="showPopup = false"></div>
      <div class="relative bg-luxury-cream text-luxury-charcoal p-8 rounded-lg max-w-2xl">
        <h3 class="text-2xl font-bold mb-4">About Dizotech</h3>
        <p class="mb-4">{{ popupText }}</p>
        <button class="bg-luxury-navy text-luxury-cream px-4 py-2 rounded hover:bg-luxury-gold hover:text-luxury-navy transition duration-300"
                @click="showPopup = false">
          Close
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const showPopup = ref(false)

const aboutText = 'At Dizotech, we are dedicated to driving innovation and delivering exceptional digital solutions to our clients. With over a decade of experience, our mission is to empower businesses with technology that fosters growth, efficiency, and long-term success.'

const missionText = 'We partner with companies of all sizes, understanding their unique challenges and designing custom solutions that align with their objectives. Whether you\'re looking to elevate your digital presence, optimize your operations, or protect your assets, Dizotech is here to help.'

const popupText = 'Dizotech is a leading technology solutions provider, dedicated to empowering businesses through innovative digital strategies. Our team of experts combines creativity with technical prowess to deliver tailored solutions that drive growth and efficiency.'
</script>

<style scoped>
.parallax {
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.glassmorphism {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.18);
}
</style>