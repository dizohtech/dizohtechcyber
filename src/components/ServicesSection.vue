<template>
  <section id="services" class="py-20 bg-gradient-to-br from-luxury-navy to-luxury-charcoal text-luxury-cream">
    <div class="container mx-auto px-4">
      <h2 class="text-4xl font-bold text-center mb-12">Our Services</h2>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="service in services" 
             :key="service.title" 
             class="bg-white bg-opacity-10 backdrop-blur-md rounded-lg p-6 transform hover:scale-105 transition duration-300">
          <div class="text-luxury-gold text-3xl mb-4">
            <i :class="service.icon"></i>
          </div>
          <h3 class="text-2xl font-bold mb-4">{{ service.title }}</h3>
          <p class="text-luxury-cream text-opacity-90 mb-4">{{ service.description }}</p>
          <ul class="space-y-2">
            <li v-for="feature in service.features" 
                :key="feature" 
                class="flex items-center">
              <i class="fas fa-check-circle text-luxury-gold mr-2"></i>
              <span>{{ feature }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const services = [
  {
    title: 'Web Development',
    description: 'Custom web solutions tailored to your business needs',
    icon: 'fas fa-code',
    features: [
      'Responsive Design',
      'E-commerce Solutions',
      'CMS Integration',
      'Performance Optimization'
    ]
  },
  {
    title: 'Mobile Development',
    description: 'Native and cross-platform mobile applications',
    icon: 'fas fa-mobile-alt',
    features: [
      'iOS Development',
      'Android Development',
      'Cross-platform Apps',
      'App Store Optimization'
    ]
  },
  {
    title: 'Cybersecurity',
    description: 'Protect your digital assets with our security solutions',
    icon: 'fas fa-shield-alt',
    features: [
      'Security Audits',
      'Penetration Testing',
      'Vulnerability Assessment',
      'Security Training'
    ]
  },
  {
    title: 'Cloud Solutions',
    description: 'Scalable cloud infrastructure and services',
    icon: 'fas fa-cloud',
    features: [
      'Cloud Migration',
      'AWS/Azure Services',
      'Cloud Security',
      'Performance Monitoring'
    ]
  },
  {
    title: 'Digital Marketing',
    description: 'Comprehensive digital marketing strategies',
    icon: 'fas fa-bullhorn',
    features: [
      'SEO Optimization',
      'Social Media Marketing',
      'Content Strategy',
      'Analytics & Reporting'
    ]
  },
  {
    title: 'IT Consulting',
    description: 'Expert guidance for your technology decisions',
    icon: 'fas fa-laptop-code',
    features: [
      'Technology Assessment',
      'Digital Transformation',
      'IT Strategy',
      'Process Optimization'
    ]
  }
]
</script>

<style scoped>
.backdrop-blur-md {
  backdrop-filter: blur(8px);
}
</style>