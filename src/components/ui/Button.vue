<script setup>
import cn from '@/utils/cn'
import { defineProps, cloneVNode, useSlots } from 'vue'

const props = defineProps({
  variant: {
    type: String,
    default: 'default',
    validator: (value) => ['default', 'secondary', 'outline', 'link'].includes(value),
  },
  size: {
    type: String,
    default: 'md',
    validator: (value) => ['sm', 'md', 'lg', 'icon'].includes(value),
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  asChild: {
    type: Boolean,
    default: false,
  },
})

const buttonVariants = {
  default: 'button--default',
  secondary: 'button--secondary',
  outline: 'button--outline',
  link: 'button--link',
}

const buttonSizes = {
  sm: 'button--sm',
  md: 'button--md',
  lg: 'button--lg',
  icon: 'button--icon',
}

const slots = useSlots()
</script>

<template>
  <component
    v-if="props.asChild && slots.default"
    :is="
      () => {
        const vnode = slots.default()[0]
        return cloneVNode(vnode, {
          class: cn('button', 'button--link', buttonSizes[props.size]),
        })
      }
    "
  />

  <button
    v-else
    :class="cn('button', buttonVariants[props.variant], buttonSizes[props.size])"
    :disabled="props.disabled"
  >
    <slot />
  </button>
</template>

<style scoped>
.button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: none;
  outline: none;
  padding: 0.6rem 1rem;
  font-size: 0.8rem;
  border-radius: 20px;
  font-weight: 600;
  cursor: pointer;
  transition:
    background-color 0.1s ease,
    color 0.1s ease;
  letter-spacing: 1px;
  text-decoration: none;

  &.button--default {
    background-color: var(--primary-color);
    color: var(--primary-text-color);

    &:hover {
      background-color: var(--primary-color-hover);
    }
  }

  &.button--secondary {
    background-color: var(--secondary-color);
    color: var(--secondary-text-color);
  }

  &.button--outline {
    background-color: transparent;
    border: 1px solid var(--border);
    color: var(--text-color);

    &:hover {
      border: 1px solid var(--primary-color);
      color: var(--primary-color);
    }

    &.active {
      border: 1px solid var(--primary-color);
      color: var(--primary-color);
    }
  }

  &.button--link {
    background-color: transparent;
    color: var(--primary-text-color);
    letter-spacing: 0.8px;
    padding: 0;

    &:hover {
      color: var(--primary-color);
    }
  }

  &.active {
    color: var(--primary-color) !important;
  }

  &.button--sm {
    padding: 0.5rem 0.8rem;
    font-size: 0.75rem;
  }
  &.button--md {
    padding: 0.65rem 1rem;
    font-size: 0.8rem;
  }
  &.button--lg {
    padding: 0.8rem 1.2rem;
    font-size: 0.9rem;
  }
  &.button--icon {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
}
</style>
