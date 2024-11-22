<template>
  <nav class="md:col-span-1">
    <div class="bg-white rounded-lg shadow-md p-6 sticky top-24">
      <h2 class="text-xl font-semibold mb-4">Table of Contents</h2>
      <ul class="space-y-2">
        <li v-for="section in sections" :key="section.id">
          <a :href="`#${section.id}`" 
             class="flex items-center space-x-2 text-blue-600 hover:text-blue-800 transition-colors duration-200">
            <component :is="section.icon" class="w-4 h-4" />
            <span>{{ section.title }}</span>
          </a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
import { Database, Settings, Share2, Shield, User, ExternalLink, Users, RefreshCw, Mail } from 'lucide-vue-next'

defineProps({
  sections: {
    type: Array,
    required: true
  }
})
</script>