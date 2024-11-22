<template>
  <section id="projects" class="py-20 bg-gradient-to-br from-luxury-charcoal to-luxury-navy">
    <div class="container mx-auto px-4">
      <h2 class="text-4xl font-bold text-center text-luxury-cream mb-12">Our Projects</h2>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="project in projects" 
             :key="project.title" 
             class="group relative overflow-hidden rounded-lg shadow-xl">
          <div class="relative h-64 w-full">
            <img :src="project.image" 
                 :alt="project.title"
                 class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
          </div>
          
          <div class="absolute bottom-0 left-0 right-0 p-6 text-luxury-cream transform transition-transform duration-300">
            <h3 class="text-xl font-bold mb-2">{{ project.title }}</h3>
            <p class="text-sm text-luxury-cream/90 mb-3">{{ project.description }}</p>
            <div class="flex flex-wrap gap-2">
              <span v-for="tech in project.technologies" 
                    :key="tech"
                    class="text-xs px-2 py-1 bg-luxury-gold/20 rounded-full">
                {{ tech }}
              </span>
            </div>
            <div class="mt-4 flex gap-4">
              <a v-if="project.demoUrl" 
                 :href="project.demoUrl"
                 target="_blank"
                 class="text-sm text-luxury-gold hover:text-luxury-cream transition-colors">
                <i class="fas fa-external-link-alt mr-1"></i> Live Demo
              </a>
              <a v-if="project.caseStudyUrl" 
                 :href="project.caseStudyUrl"
                 target="_blank"
                 class="text-sm text-luxury-gold hover:text-luxury-cream transition-colors">
                <i class="fas fa-book mr-1"></i> Case Study
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class="text-center mt-12">
        <button class="bg-luxury-gold text-luxury-navy px-8 py-3 rounded-full font-semibold hover:bg-luxury-cream transition duration-300">
          View More Projects
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'A full-featured online shopping platform with real-time inventory management',
    image: 'https://placehold.co/600x400/navy/white?text=E-Commerce',
    technologies: ['Vue.js', 'Node.js', 'MongoDB', 'Stripe'],
    demoUrl: '#',
    caseStudyUrl: '#'
  },
  {
    title: 'Healthcare Management System',
    description: 'Digital solution for managing patient records and appointments',
    image: 'https://placehold.co/600x400/navy/white?text=Healthcare',
    technologies: ['React', 'Express', 'PostgreSQL', 'Docker'],
    demoUrl: '#',
    caseStudyUrl: '#'
  },
  {
    title: 'Financial Analytics Dashboard',
    description: 'Real-time financial data visualization and analysis platform',
    image: 'https://placehold.co/600x400/navy/white?text=Analytics',
    technologies: ['Angular', 'Python', 'D3.js', 'AWS'],
    demoUrl: '#',
    caseStudyUrl: '#'
  },
  {
    title: 'Mobile Fitness App',
    description: 'Cross-platform fitness tracking and workout planning application',
    image: 'https://placehold.co/600x400/navy/white?text=Fitness',
    technologies: ['React Native', 'Firebase', 'Redux', 'Node.js'],
    demoUrl: '#',
    caseStudyUrl: '#'
  },
  {
    title: 'Smart Home IoT Platform',
    description: 'IoT platform for managing and monitoring smart home devices',
    image: 'https://placehold.co/600x400/navy/white?text=IoT',
    technologies: ['Vue.js', 'MQTT', 'MongoDB', 'WebSocket'],
    demoUrl: '#',
    caseStudyUrl: '#'
  },
  {
    title: 'Educational Learning Platform',
    description: 'Interactive online learning platform with video courses',
    image: 'https://placehold.co/600x400/navy/white?text=Education',
    technologies: ['Next.js', 'GraphQL', 'PostgreSQL', 'AWS'],
    demoUrl: '#',
    caseStudyUrl: '#'
  }
]
</script>

<style scoped>
.group:hover .transform {
  transform: translateY(-8px);
}
</style>