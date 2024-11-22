<template>
  <div v-for="section in sections" :key="section.id" :id="section.id" class="bg-white rounded-lg shadow-md p-6">
    <h2 class="text-2xl font-bold mb-4 flex items-center">
      <component :is="section.icon" class="w-6 h-6 mr-2" />
      {{ section.title }}
    </h2>
    <component :is="getContentComponent(section.id)" />
  </div>
</template>

<script setup>
import { defineAsyncComponent } from 'vue'
import { Database, Settings, Share2, Shield, User, ExternalLink, Users, RefreshCw, Mail } from 'lucide-vue-next'

defineProps({
  sections: {
    type: Array,
    required: true
  }
})

const getContentComponent = (sectionId) => {
  return defineAsyncComponent(() => 
    import(`./content/${sectionId.replace(/-/g, '_')}.vue`)
      .catch(() => import('./content/DefaultContent.vue'))
  )
}
</script>