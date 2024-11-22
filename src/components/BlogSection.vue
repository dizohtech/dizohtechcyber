<template>
    <section class="py-16 bg-white relative">
      <!-- WhatsApp Float Button -->
      <a href="https://wa.me/254724948294" 
         target="_blank"
         class="fixed bottom-8 right-8 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 z-50 animate-bounce">
        <i class="fab fa-whatsapp text-2xl"></i>
      </a>
  
      <div class="container mx-auto px-4">
        <div class="text-center mb-12">
          <span class="text-luxury-gold text-sm font-bold tracking-wider uppercase mb-4 block">Our Insights</span>
          <h2 class="text-4xl font-display text-luxury-charcoal mb-4">Latest Blog Posts</h2>
          <div class="w-24 h-1 bg-luxury-gold mx-auto rounded-full"></div>
        </div>
  
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="post in blogPosts" :key="post.id" 
               class="blog-card bg-luxury-cream rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300">
            <!-- Blog Image -->
            <div class="relative h-48 overflow-hidden">
              <img :src="post.image" :alt="post.title" class="w-full h-full object-cover">
              <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <span class="absolute bottom-4 left-4 text-white text-sm bg-luxury-navy px-3 py-1 rounded-full">
                {{ post.category }}
              </span>
            </div>
  
            <div class="p-6">
              <h3 class="text-xl font-sans font-bold text-luxury-navy mb-2">{{ post.title }}</h3>
              <p class="text-luxury-charcoal mb-4">{{ post.excerpt }}</p>
              <div class="flex justify-between items-center">
                <span class="text-sm text-luxury-maroon">{{ post.date }}</span>
                <button @click="openModal(post)" 
                        class="px-4 py-2 bg-luxury-navy text-white rounded-full hover:bg-luxury-gold transition-colors duration-300">
                  Read More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
  
      <!-- Modal -->
      <div v-if="selectedPost" 
           class="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
           @click.self="closeModal">
        <div class="bg-white rounded-xl shadow-2xl max-w-4xl w-full max-h-[80vh] overflow-y-auto">
          <div class="sticky top-0 bg-white p-6 border-b border-gray-200 flex justify-between items-center">
            <h3 class="text-2xl font-display text-luxury-navy">{{ selectedPost.title }}</h3>
            <button @click="closeModal" class="text-gray-500 hover:text-luxury-navy">
              <i class="fas fa-times text-xl"></i>
            </button>
          </div>
  
          <div class="p-6">
            <img :src="selectedPost.image" :alt="selectedPost.title" class="w-full h-64 object-cover rounded-lg mb-6">
            
            <div class="flex items-center gap-4 mb-6">
              <div class="flex items-center">
                <i class="far fa-calendar-alt text-luxury-gold mr-2"></i>
                <span class="text-sm text-luxury-charcoal">{{ selectedPost.date }}</span>
              </div>
              <div class="flex items-center">
                <i class="far fa-folder text-luxury-gold mr-2"></i>
                <span class="text-sm text-luxury-charcoal">{{ selectedPost.category }}</span>
              </div>
            </div>
  
            <div class="prose max-w-none">
              <div v-html="selectedPost.content"></div>
            </div>
  
            <div class="mt-8 pt-6 border-t border-gray-200">
              <h4 class="text-lg font-bold text-luxury-navy mb-4">Related Topics</h4>
              <div class="flex flex-wrap gap-2">
                <span v-for="tag in selectedPost.tags" :key="tag"
                      class="px-3 py-1 bg-luxury-cream text-luxury-navy rounded-full text-sm">
                  {{ tag }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: 'BlogSection',
    data() {
      return {
        selectedPost: null,
        blogPosts: [
          {
            id: 1,
            title: 'Cybersecurity Best Practices',
            excerpt: 'Learn about the essential cybersecurity practices to protect your business.',
            date: 'Jan 15, 2024',
            category: 'Security',
            image: '/path-to-image/cybersecurity.jpg',
            tags: ['Cybersecurity', 'Business Protection', 'Data Security'],
            content: `
              <h2>Understanding Cybersecurity Best Practices</h2>
              <p>In today's digital landscape, cybersecurity is more crucial than ever. Organizations face increasingly sophisticated threats that can compromise sensitive data and disrupt operations.</p>
  
              <h3>1. Strong Password Policies</h3>
              <p>Implement robust password policies including:</p>
              <ul>
                <li>Minimum length requirements</li>
                <li>Complexity rules</li>
                <li>Regular password changes</li>
                <li>Two-factor authentication</li>
              </ul>
  
              <h3>2. Regular Security Updates</h3>
              <p>Maintain system security through:</p>
              <ul>
                <li>Timely software updates</li>
                <li>Security patch management</li>
                <li>Regular system audits</li>
              </ul>
  
              <h3>3. Employee Training</h3>
              <p>Comprehensive training programs should cover:</p>
              <ul>
                <li>Phishing awareness</li>
                <li>Safe browsing practices</li>
                <li>Data handling procedures</li>
              </ul>
  
              <h3>4. Data Backup Strategies</h3>
              <p>Implement reliable backup solutions:</p>
              <ul>
                <li>Regular automated backups</li>
                <li>Secure off-site storage</li>
                <li>Recovery testing procedures</li>
              </ul>
            `
          },
          // Add similar detailed content for other blog posts
          {
            id: 2,
            title: 'Digital Transformation Strategy',
            excerpt: 'A comprehensive guide to transforming your business digitally.',
            date: 'Jan 10, 2024',
            category: 'Digital Strategy',
            image: '/path-to-image/digital-transform.jpg',
            tags: ['Digital Transformation', 'Business Strategy', 'Innovation'],
            content: `...` // Add detailed content
          },
          {
            id: 3,
            title: 'Cloud Security Solutions',
            excerpt: 'Exploring modern cloud security solutions for enterprises.',
            date: 'Jan 5, 2024',
            category: 'Cloud Security',
            image: '/path-to-image/cloud-security.jpg',
            tags: ['Cloud Computing', 'Security', 'Enterprise'],
            content: `...` // Add detailed content
          }
        ]
      }
    },
    methods: {
      openModal(post) {
        this.selectedPost = post;
        document.body.style.overflow = 'hidden';
      },
      closeModal() {
        this.selectedPost = null;
        document.body.style.overflow = 'auto';
      }
    }
  }
  </script>
  
  <style scoped>
  .blog-card {
    position: relative;
    overflow: hidden;
  }
  
  .blog-card::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background: linear-gradient(to right, var(--luxury-gold), var(--luxury-navy));
    transform: scaleX(0);
    transition: transform 0.3s ease;
  }
  
  .blog-card:hover::after {
    transform: scaleX(1);
  }
  
  /* Add smooth scrollbar for modal */
  .modal-content {
    scrollbar-width: thin;
    scrollbar-color: var(--luxury-gold) var(--luxury-cream);
  }
  
  .modal-content::-webkit-scrollbar {
    width: 8px;
  }
  
  .modal-content::-webkit-scrollbar-track {
    background: var(--luxury-cream);
  }
  
  .modal-content::-webkit-scrollbar-thumb {
    background-color: var(--luxury-gold);
    border-radius: 4px;
  }
  
  /* WhatsApp button animation */
  @keyframes bounce {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
  }
  
  .animate-bounce {
    animation: bounce 2s infinite;
  }
  </style>
  