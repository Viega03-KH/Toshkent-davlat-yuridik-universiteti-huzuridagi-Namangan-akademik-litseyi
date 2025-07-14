<template>
    <fieldset class="bg-base-100 border rounded-box w-full max-w-md border-base-300 p-4">
      <legend class="font-semibold mb-2">Ekran suhandoni:</legend>
  
      <label class="label cursor-pointer gap-2">
        <input type="checkbox" v-model="readerEnabled" class="checkbox" />
        <span class="label-text">Matnni ovozda o‘qib berish</span>
      </label>
  
      <p class="text-md text-gray-500 mt-2 italic text-justify">
        Matnni sichqoncha bilan belgilang – agar ekran suhandoni yoqilgan bo‘lsa, u ovozda o‘qiydi.
      </p>
    </fieldset>
  </template>
  
  <script setup>
  import { ref, onMounted, onBeforeUnmount } from 'vue'
  
  const readerEnabled = ref(false)
  
  function handleTextSelection() {
    if (!readerEnabled.value) return
  
    const selectedText = window.getSelection().toString().trim()
    if (selectedText.length > 0) {
      const utterance = new SpeechSynthesisUtterance(selectedText)
      speechSynthesis.cancel()
      speechSynthesis.speak(utterance)
    }
  }
  
  onMounted(() => {
    document.addEventListener('mouseup', handleTextSelection)
    document.addEventListener('keyup', handleTextSelection)
  })
  
  onBeforeUnmount(() => {
    document.removeEventListener('mouseup', handleTextSelection)
    document.removeEventListener('keyup', handleTextSelection)
  })
  </script>
  