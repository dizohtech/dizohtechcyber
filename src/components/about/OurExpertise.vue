<template>
    <div class="our-expertise bg-white py-12">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-display text-luxury-charcoal mb-8">Our Expertise</h2>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="(expertise, index) in expertiseAreas" :key="index"
            class="expertise-card bg-luxury-cream p-6 rounded-lg shadow-md transform hover:scale-105 transition-all duration-300">
            <div class="icon-wrapper mb-4 flex justify-center">
              <i :class="expertise.icon" class="text-4xl text-luxury-navy"></i>
            </div>
            <h3 class="text-xl font-bold text-luxury-navy mb-3">{{ expertise.title }}</h3>
            <p class="text-luxury-charcoal">{{ expertise.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { defineComponent } from 'vue'
  export default defineComponent({
    name: 'OurExpertise',
    data() {
      return {
        expertiseAreas: [
          {
            title: 'Cybersecurity Assessment',
            description: 'Comprehensive evaluation of your security infrastructure to identify vulnerabilities and potential threats.',
            icon: 'fas fa-search-plus'
          },
          {
            title: 'Security Implementation',
            description: 'Expert deployment of robust security solutions tailored to your organization\'s specific needs.',
            icon: 'fas fa-shield-alt'
          },
          {
            title: 'Incident Response',
            description: 'Rapid and effective response to security incidents with minimal impact on your operations.',
            icon: 'fas fa-bolt'
          },
          {
            title: 'Security Training',
            description: 'Custom security awareness programs to educate your team on best practices and threat prevention.',
            icon: 'fas fa-graduation-cap'
          },
          {
            title: 'Compliance Management',
            description: 'Ensuring your security measures align with industry standards and regulatory requirements.',
            icon: 'fas fa-clipboard-check'
          },
          {
            title: 'Continuous Monitoring',
            description: '24/7 surveillance of your systems to detect and prevent security breaches in real-time.',
            icon: 'fas fa-chart-line'
          }
        ]
      }
    }
  })
  </script>
  
  <style scoped>
  .expertise-card {
    position: relative;
    overflow: hidden;
  }
  
  .expertise-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 0.5rem;
    pointer-events: none;
    transition: all 0.3s ease;
  }
  
  .expertise-card:hover::before {
    box-shadow: 0 0 20px rgba(0, 0, 128, 0.3), /* Navy glow */
                0 0 40px rgba(212, 175, 55, 0.2); /* Gold glow */
  }
  
  .expertise-card:hover .icon-wrapper i {
    transform: scale(1.1);
    color: var(--luxury-gold);
    text-shadow: 0 0 10px rgba(212, 175, 55, 0.5);
  }
  
  .icon-wrapper i {
    transition: all 0.3s ease;
  }
  
  /* Optional: Add a subtle gradient background on hover */
  .expertise-card:hover {
    background: linear-gradient(
      145deg,
      var(--luxury-cream) 0%,
      rgba(245, 230, 211, 0.9) 100%
    );
  }
  </style>
  