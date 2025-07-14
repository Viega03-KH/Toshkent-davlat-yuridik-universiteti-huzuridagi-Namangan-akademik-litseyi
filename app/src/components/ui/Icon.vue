<script setup>
defineProps({
  name: {
    type: String,
    required: true
  },
  size: {
    type: [Number, String],
    default: 20
  },
  className: {
    type: String,
    default: ''
  }
})
</script>

<template>
  <i :class="[name, `text-[${size}px]`, className]"></i>
</template>
