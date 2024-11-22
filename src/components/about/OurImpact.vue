<template>
    <div class="our-impact relative py-20 overflow-hidden">
      <!-- Animated Background -->
      <div class="absolute inset-0 bg-gradient-to-br from-luxury-cream via-white to-luxury-cream opacity-90"></div>
      <div class="absolute inset-0 cyber-grid"></div>
  
      <div class="container mx-auto px-4 relative z-10">
        <!-- Section Header -->
        <div class="text-center mb-16">
          <span class="text-luxury-gold text-sm font-bold tracking-wider uppercase mb-4 block animate-fade-in">
            Making a Difference
          </span>
          <h2 class="text-4xl md:text-5xl font-display text-luxury-charcoal mb-6 animate-fade-in-up">
            Our Impact
          </h2>
          <div class="w-24 h-1 bg-luxury-gold mx-auto rounded-full transform origin-left animate-scale-x"></div>
        </div>
  
        <!-- Statistics Cards -->
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div v-for="(stat, index) in statistics" :key="index"
            class="stat-card group"
            :class="{'animate-delay-200': index === 1, 'animate-delay-400': index === 2, 'animate-delay-600': index === 3}">
            <div class="relative bg-white p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden">
              <!-- Background Pattern -->
              <div class="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500">
                <div class="absolute inset-0 pattern-dots"></div>
              </div>
              
              <!-- Icon -->
              <div class="text-4xl text-luxury-gold mb-4 transform group-hover:scale-110 transition-transform duration-300">
                <i :class="stat.icon"></i>
              </div>
              
              <!-- Counter -->
              <div class="counter text-4xl font-bold text-luxury-navy mb-3 transform group-hover:scale-105 transition-transform">
                {{ stat.value }}
              </div>
              
              <!-- Label -->
              <p class="text-luxury-charcoal font-medium tracking-wide">{{ stat.label }}</p>
              
              <!-- Hover Line -->
              <div class="absolute bottom-0 left-0 w-full h-1 bg-luxury-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
            </div>
          </div>
        </div>
  
        <!-- Impact Description -->
        <div class="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8 md:p-12 hover:shadow-2xl transition-all duration-300">
          <div class="grid md:grid-cols-2 gap-8">
            <!-- Left Column -->
            <div class="space-y-6">
              <h3 class="text-2xl font-display text-luxury-navy mb-4">Global Impact</h3>
              <p class="text-luxury-charcoal leading-relaxed">
                Our commitment to cybersecurity excellence has helped organizations across various sectors strengthen their security posture and protect their valuable assets.
              </p>
              <div class="flex space-x-4">
                <div v-for="sector in sectors" :key="sector.name" class="text-center">
                  <div class="w-16 h-16 rounded-full bg-luxury-cream flex items-center justify-center mb-2 hover:bg-luxury-gold transition-colors duration-300">
                    <i :class="sector.icon" class="text-2xl text-luxury-navy"></i>
                  </div>
                  <span class="text-sm text-luxury-charcoal">{{ sector.name }}</span>
                </div>
              </div>
            </div>
  
            <!-- Right Column -->
            <div class="space-y-6">
              <h3 class="text-2xl font-display text-luxury-navy mb-4">Continuous Evolution</h3>
              <p class="text-luxury-charcoal leading-relaxed">
                Through our comprehensive solutions and dedicated approach, we've made a significant impact in the fight against cyber threats and continue to evolve with the changing security landscape.
              </p>
              <div class="space-y-4">
                <div v-for="achievement in achievements" :key="achievement.title" 
                     class="flex items-center space-x-3 p-3 rounded-lg hover:bg-luxury-cream transition-colors duration-300">
                  <i :class="achievement.icon" class="text-luxury-gold text-xl"></i>
                  <span class="text-luxury-charcoal">{{ achievement.title }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { defineComponent } from 'vue'
  
  export default defineComponent({
    name: 'OurImpact',
    data() {
      return {
        statistics: [
          {
            value: '500+',
            label: 'Clients Protected',
            icon: 'fas fa-shield-alt'
          },
          {
            value: '1000+',
            label: 'Threats Prevented',
            icon: 'fas fa-virus-slash'
          },
          {
            value: '99.9%',
            label: 'Success Rate',
            icon: 'fas fa-chart-line'
          },
          {
            value: '24/7',
            label: 'Security Monitoring',
            icon: 'fas fa-clock'
          }
        ],
        sectors: [
          { name: 'Finance', icon: 'fas fa-landmark' },
          { name: 'Healthcare', icon: 'fas fa-hospital' },
          { name: 'Technology', icon: 'fas fa-microchip' }
        ],
        achievements: [
          { title: 'ISO 27001 Certified', icon: 'fas fa-certificate' },
          { title: 'Industry Recognition', icon: 'fas fa-award' },
          { title: 'Global Reach', icon: 'fas fa-globe' }
        ]
      }
    }
  })
  </script>
  
  <style scoped>
  .cyber-grid {
    background-image: linear-gradient(var(--luxury-navy) 1px, transparent 1px),
      linear-gradient(90deg, var(--luxury-navy) 1px, transparent 1px);
    background-size: 50px 50px;
    opacity: 0.03;
  }
  
  .pattern-dots {
    background-image: radial-gradient(var(--luxury-navy) 1px, transparent 1px);
    background-size: 10px 10px;
  }
  
  .stat-card {
    opacity: 0;
    transform: translateY(20px);
    animation: fadeInUp 0.6s ease forwards;
  }
  
  @keyframes fadeInUp {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  .animate-fade-in {
    opacity: 0;
    animation: fadeIn 0.6s ease forwards;
  }
  
  .animate-fade-in-up {
    opacity: 0;
    transform: translateY(20px);
    animation: fadeInUp 0.6s ease forwards;
  }
  
  .animate-scale-x {
    transform: scaleX(0);
    animation: scaleX 0.6s ease forwards;
  }
  
  @keyframes fadeIn {
    to { opacity: 1; }
  }
  
  @keyframes scaleX {
    to { transform: scaleX(1); }
  }
  
  .animate-delay-200 { animation-delay: 0.2s; }
  .animate-delay-400 { animation-delay: 0.4s; }
  .animate-delay-600 { animation-delay: 0.6s; }
  
  /* Optional: Add counter animation */
  @property --num {
    syntax: "<integer>";
    initial-value: 0;
    inherits: false;
  }
  
  .counter {
    animation: counter 2s forwards;
    counter-reset: num var(--num);
  }
  
  .counter::after {
    content: counter(num);
  }
  
  @keyframes counter {
    from { --num: 0; }
    to { --num: 500; }
  }
  </style>
  