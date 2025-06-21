<script setup>
import { defineProps, computed } from 'vue'
import Button from '@/components/ui/Button.vue'
import { currentPath, navigateTo } from '@/utils/manualRouter'

const props = defineProps({
  to: {
    type: String,
    required: true,
  },
  style: {
    type: String,
    default: '',
  },
})

// Computed property to check if the link is active
const isActive = computed(() => {
  return currentPath.value === props.to
})

// Function to handle the click event to navigate to the link
const handleClick = (e) => {
  e.preventDefault()
  navigateTo(props.to)
}
</script>

<template>
  <li>
    <Button asChild :class="{ active: isActive }">
      <a :href="props.to" @click.prevent="handleClick" :style="props.style">
        <slot />
      </a>
    </Button>
  </li>
</template>