<template>
  <section class="bg-white rounded-lg shadow-md p-6">
    <h2 class="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
    <TabGroup>
      <TabList class="flex flex-wrap mb-4">
        <Tab v-for="tab in tabs" 
             :key="tab.id" 
             v-slot="{ selected }"
             as="template">
          <button :class="[
            'px-4 py-2',
            selected ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
          ]">
            {{ tab.label }}
          </button>
        </Tab>
      </TabList>

      <TabPanels>
        <TabPanel v-for="tab in tabs" :key="tab.id">
          <div class="space-y-4">
            <Disclosure v-for="faq in tab.faqs" :key="faq.question" v-slot="{ open }">
              <DisclosureButton class="flex justify-between items-center w-full text-left">
                <span class="text-lg font-medium">{{ faq.question }}</span>
                <ChevronDown :class="{ 'rotate-180': open }" class="w-5 h-5 transition-transform duration-200" />
              </DisclosureButton>
              <DisclosurePanel class="mt-2 text-gray-600">
                <div v-html="faq.answer"></div>
              </DisclosurePanel>
            </Disclosure>
          </div>
        </TabPanel>
      </TabPanels>
    </TabGroup>
  </section>
</template>

<script setup>
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue'
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
import { ChevronDown } from 'lucide-vue-next'
import { faqData } from '@/data/faq'

const tabs = faqData
</script>