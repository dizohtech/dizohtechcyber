<template>
  <aside 
    :class="[ 
      'fixed top-0 left-0 h-full w-64 bg-gradient-to-b from-luxury-navy to-luxury-charcoal text-luxury-cream z-50 transform transition-transform duration-300 ease-in-out shadow-lg', 
      { '-translate-x-full': !isOpen }
    ]"
  >
    <!-- Logo Section -->
    <div class="p-5 border-b border-white/10">
      <h2 class="text-2xl font-bold mb-5 flex items-center space-x-3">
        <img src="@/assets/logostiker.png" alt="Dizotech Logo" class="w-8 h-8" />
        <span>Dizotech</span>
      </h2>
    </div>

    <!-- Navigation Links -->
    <nav class="flex-1 overflow-y-auto p-5">
      <ul class="space-y-3">
        <li v-for="link in links" :key="link.href">
          <a 
            :href="link.href" 
            class="flex items-center space-x-3 p-3 rounded-lg transition-all duration-300 hover:bg-luxury-gold/10 group"
            @click="scrollToSection(link.href)"
          >
            <i :class="[link.icon, 'text-lg transition-all duration-300 group-hover:text-luxury-gold']"></i>
            <span class="transition-all duration-300 group-hover:text-luxury-gold">{{ link.text }}</span>
          </a>
        </li>
      </ul>
    </nav>

    <!-- Social Links Section -->
    <div class="p-5 border-t border-white/10">
      <div class="flex justify-center space-x-4">
        <a v-for="social in socialLinks" 
           :key="social.icon" 
           :href="social.url" 
           target="_blank" 
           class="w-10 h-10 rounded-full bg-luxury-gold/10 flex items-center justify-center hover:bg-luxury-gold hover:text-luxury-navy transition-all duration-300"
        >
          <i :class="social.icon"></i>
        </a>
      </div>
    </div>
  </aside>

  <!-- Toggle Button -->
  <button 
    @click="toggleSidebar" 
    class="fixed top-4 left-4 z-50 p-3 rounded-full bg-luxury-navy text-luxury-cream transition-all duration-300 hover:bg-luxury-gold hover:text-luxury-navy"
  >
    <i class="fas" :class="[isOpen ? 'fa-times' : 'fa-bars']"></i>
  </button>
</template>

<script setup>
import { ref } from 'vue'

const isOpen = ref(false)

const links = [
  { href: '#about', text: 'About', icon: 'fas fa-info-circle' },
  { href: '#our-story', text: 'Our Story', icon: 'fas fa-book' },
  { href: '#our-values', text: 'Our Values', icon: 'fas fa-star' },
  { href: '#our-expertise', text: 'Our Expertise', icon: 'fas fa-brain' },
  { href: '#what-we-offer', text: 'What We Offer', icon: 'fas fa-gift' },
  { href: '#our-impact', text: 'Our Impact', icon: 'fas fa-chart-line' },
  { href: '#our-approach', text: 'Our Approach', icon: 'fas fa-compass' },
  { href: '#contact', text: 'Contact Us', icon: 'fas fa-envelope' }
]

const socialLinks = [
  { icon: 'fab fa-linkedin', url: 'https://linkedin.com' },
  { icon: 'fab fa-twitter', url: 'https://twitter.com' },
  { icon: 'fab fa-facebook', url: 'https://facebook.com' }
]

const toggleSidebar = () => {
  isOpen.value = !isOpen.value
}

const scrollToSection = (href) => {
  const element = document.querySelector(href)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
    if (window.innerWidth < 768) {
      isOpen.value = false
    }
  }
}
</script>

<style scoped>
/* Add custom scrollbar styles for overflow areas */
.overflow-y-auto {
  scrollbar-width: thin;
  scrollbar-color: var(--luxury-gold) transparent;
}

.overflow-y-auto::-webkit-scrollbar {
  width: 4px;
}

.overflow-y-auto::-webkit-scrollbar-thumb {
  background-color: var(--luxury-gold);
  border-radius: 20px;
}
</style>
