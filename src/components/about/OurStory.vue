<template>
    <div class="our-story relative py-20 overflow-hidden">
      <!-- Background Pattern -->
      <div class="absolute inset-0 bg-gradient-to-br from-luxury-cream to-white opacity-90"></div>
      <div class="absolute inset-0 bg-grid-pattern"></div>
  
      <div class="container mx-auto px-4 relative z-10">
        <!-- Header Section -->
        <div class="text-center mb-16">
          <span class="text-luxury-gold text-sm font-bold tracking-wider uppercase mb-4 block">Our Journey</span>
          <h2 class="text-4xl md:text-5xl font-display text-luxury-charcoal mb-6 relative inline-block">
            Our Story
            <div class="absolute -bottom-2 left-0 w-full h-1 bg-luxury-gold transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></div>
          </h2>
          <div class="w-20 h-1 bg-luxury-gold mx-auto rounded-full"></div>
        </div>
  
        <!-- Timeline Section -->
        <div class="grid md:grid-cols-3 gap-8 mb-16">
          <div class="story-card" v-for="(milestone, index) in milestones" :key="index">
            <div class="bg-white p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div class="text-luxury-gold text-3xl mb-4">
                <i :class="milestone.icon"></i>
              </div>
              <h3 class="text-xl font-bold text-luxury-navy mb-3">{{ milestone.year }}</h3>
              <p class="text-luxury-charcoal">{{ milestone.description }}</p>
            </div>
          </div>
        </div>
  
        <!-- Story Content -->
        <div class="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8 md:p-12 hover:shadow-2xl transition-all duration-300">
          <div class="prose max-w-none text-luxury-charcoal space-y-6">
            <p class="text-lg leading-relaxed">
              Founded with a vision to revolutionize cybersecurity, <span class="text-luxury-navy font-semibold">DizohTechCyber</span> emerged from a passion for protecting businesses and individuals in the digital age. Our journey began with a simple mission: to make robust cybersecurity solutions accessible to all.
            </p>
            
            <div class="flex items-center justify-center py-6">
              <div class="w-16 h-16 rounded-full bg-luxury-cream flex items-center justify-center">
                <i class="fas fa-shield-alt text-2xl text-luxury-gold"></i>
              </div>
            </div>
  
            <p class="text-lg leading-relaxed">
              Over the years, we've grown from a small team of dedicated security experts into a comprehensive cybersecurity solution provider. Our experience spans across various industries, helping organizations strengthen their digital defenses and navigate the complex landscape of cyber threats.
            </p>
  
            <blockquote class="border-l-4 border-luxury-gold pl-6 my-8 italic">
              Today, we continue to evolve and adapt to the ever-changing cybersecurity landscape, staying ahead of emerging threats while maintaining our commitment to excellence and customer satisfaction.
            </blockquote>
          </div>
  
          <!-- Stats Section -->
          <div class="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 pt-8 border-t border-luxury-cream">
            <div v-for="(stat, index) in stats" :key="index" 
                 class="text-center group hover:transform hover:scale-105 transition-all duration-300">
              <div class="text-3xl font-bold text-luxury-gold mb-2">{{ stat.value }}</div>
              <div class="text-sm text-luxury-charcoal uppercase tracking-wider">{{ stat.label }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { defineComponent } from 'vue'
  
  export default defineComponent({
    name: 'OurStory',
    data() {
      return {
        milestones: [
          {
            year: '2018',
            description: 'Founded with a mission to democratize cybersecurity',
            icon: 'fas fa-flag'
          },
          {
            year: '2020',
            description: 'Expanded services to include advanced threat protection',
            icon: 'fas fa-chart-line'
          },
          {
            year: '2023',
            description: 'Became a leading cybersecurity solution provider',
            icon: 'fas fa-award'
          }
        ],
        stats: [
          { value: '500+', label: 'Clients Protected' },
          { value: '1000+', label: 'Threats Blocked' },
          { value: '24/7', label: 'Support' },
          { value: '99.9%', label: 'Success Rate' }
        ]
      }
    }
  })
  </script>
  
  <style scoped>
  .bg-grid-pattern {
    background-image: radial-gradient(circle, #000 1px, transparent 1px);
    background-size: 30px 30px;
    opacity: 0.03;
  }
  
  .story-card {
    opacity: 0;
    animation: fadeInUp 0.6s ease forwards;
  }
  
  .story-card:nth-child(2) {
    animation-delay: 0.2s;
  }
  
  .story-card:nth-child(3) {
    animation-delay: 0.4s;
  }
  
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  /* Hover effects for stats */
  .stats-item:hover {
    transform: translateY(-5px);
  }
  
  /* Custom scrollbar */
  ::-webkit-scrollbar {
    width: 8px;
  }
  
  ::-webkit-scrollbar-track {
    background: var(--luxury-cream);
  }
  
  ::-webkit-scrollbar-thumb {
    background: var(--luxury-gold);
    border-radius: 4px;
  }
  
  ::-webkit-scrollbar-thumb:hover {
    background: var(--luxury-navy);
  }
  </style>
  