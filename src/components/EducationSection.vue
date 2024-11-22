<template>
  <section id="education" class="py-20 bg-gradient-to-br from-luxury-cream to-white">
    <div class="container mx-auto px-4">
      <!-- Header -->
      <div class="text-center mb-16">
        <span class="text-luxury-gold text-sm font-bold tracking-wider uppercase mb-4 block">Expand Your Knowledge</span>
        <h2 class="text-4xl font-bold text-luxury-navy mb-6">Educational Resources</h2>
      </div>

      <!-- Filter Buttons -->
      <div class="flex justify-center gap-4 mb-12">
        <button 
          v-for="filter in filters" 
          :key="filter"
          @click="currentFilter = filter"
          class="px-6 py-2 rounded-full bg-white text-luxury-navy hover:bg-luxury-gold hover:text-white transition-all duration-300"
          :class="{ 'bg-luxury-navy text-white': currentFilter === filter }"
        >
          {{ filter }}
        </button>
      </div>

      <!-- Courses Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="course in filteredCourses"
             :key="course.id"
             class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
          <!-- Course Image -->
          <div class="relative">
            <img :src="course.image"
                 :alt="course.title"
                 class="w-full h-48 object-cover" />
            <div class="absolute top-4 right-4 bg-luxury-gold text-luxury-navy px-3 py-1 rounded-full text-sm font-semibold">
              {{ course.level }}
            </div>
          </div>

          <!-- Course Content -->
          <div class="p-6">
            <h3 class="text-xl font-bold text-luxury-navy mb-2">{{ course.title }}</h3>
            <p class="text-gray-600 mb-4">{{ course.description }}</p>
            
            <!-- Course Meta -->
            <div class="flex items-center mb-4">
              <div class="flex items-center mr-4">
                <i class="fas fa-clock text-luxury-gold mr-2"></i>
                <span class="text-sm">{{ course.duration }}</span>
              </div>
              <div class="flex items-center">
                <i class="fas fa-users text-luxury-gold mr-2"></i>
                <span class="text-sm">{{ course.students }} students</span>
              </div>
            </div>

            <!-- Topics -->
            <div class="space-y-2 mb-4">
              <div v-for="topic in course.topics"
                   :key="topic"
                   class="flex items-center text-sm text-gray-600">
                <i class="fas fa-check-circle text-luxury-gold mr-2"></i>
                {{ topic }}
              </div>
            </div>

            <!-- Price and Button -->
            <div class="flex justify-between items-center">
              <span class="text-2xl font-bold text-luxury-navy">${{ course.price }}</span>
              <button class="bg-luxury-navy text-white px-4 py-2 rounded-full hover:bg-luxury-gold transition duration-300">
                Enroll Now
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- View All Button -->
      <div class="text-center mt-12">
        <button class="bg-luxury-gold text-luxury-navy px-8 py-3 rounded-full font-semibold hover:bg-luxury-navy hover:text-white transition duration-300">
          View All Courses
        </button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'EducationSection',
  data() {
    return {
      currentFilter: 'All',
      filters: ['All', 'Web Development', 'Cloud Computing', 'Cybersecurity'],
      courses: [
        {
          id: 1,
          title: 'Web Development Fundamentals',
          description: 'Master the basics of web development with HTML, CSS, and JavaScript',
          image: 'https://placehold.co/600x400/navy/white?text=Web+Dev',
          level: 'Beginner',
          duration: '8 weeks',
          students: 1234,
          price: 199,
          category: 'Web Development',
          topics: [
            'HTML5 & CSS3 Basics',
            'JavaScript Fundamentals',
            'Responsive Design',
            'Basic Web Projects'
          ]
        },
        {
          id: 2,
          title: 'Advanced React Development',
          description: 'Build complex applications with React and modern web technologies',
          image: 'https://placehold.co/600x400/navy/white?text=React',
          level: 'Advanced',
          duration: '10 weeks',
          students: 856,
          price: 299,
          category: 'Web Development',
          topics: [
            'React Hooks & Context',
            'Redux State Management',
            'Performance Optimization',
            'Testing & Deployment'
          ]
        },
        {
          id: 3,
          title: 'Cloud Architecture',
          description: 'Learn to design and implement scalable cloud solutions',
          image: 'https://placehold.co/600x400/navy/white?text=Cloud',
          level: 'Intermediate',
          duration: '12 weeks',
          students: 645,
          price: 399,
          category: 'Cloud Computing',
          topics: [
            'AWS Services',
            'Cloud Security',
            'Microservices',
            'DevOps Practices'
          ]
        }
      ]
    }
  },
  computed: {
    filteredCourses() {
      return this.currentFilter === 'All'
        ? this.courses
        : this.courses.filter(course => course.category === this.currentFilter)
    }
  }
}
</script>

<style scoped>
.shadow-lg {
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
}
.shadow-xl {
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
}
</style>
