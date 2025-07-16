<template>
    <div class="flex w-full justify-center flex-wrap gap-2 mt-4">
        <button v-for="(mode, index) in modes" :key="index" @click="setMode(mode.value)" :class="[
            'btn font-light',
            activeMode === mode.value
                ? 'bg-blue-400 text-white border-blue-400'
                : 'bg-white text-gray-700 hover:bg-gray-100'
        ]">
            {{ $t(mode.label) }}
        </button>
    </div>
</template>

<script setup>
import { ref, watch } from 'vue'

// Variantlar ro'yxati
const modes = [
    { value: 'default', label: "soos-text-6" },
    { value: 'no-color', label: "soos-text-7" },
    { value: 'no-images', label: "soos-text-8" }
]

// Faol rejim holati
const activeMode = ref('default')
const colorMode = ref('default')

// Rejimni almashtirish funksiyasi
function setMode(mode) {
    activeMode.value = mode
}

// Rejim o'zgarganda body classini yangilash
watch(activeMode, (mode) => {
    document.body.classList.remove(...modes.map(m => `mode-${m.value}`))
    document.body.classList.add(`mode-${mode}`)
})

// Tashqi komponentlar chaqira oladigan reset()
function reset() {
    activeMode.value = 'default'
    colorMode.value = 'default'
}

defineExpose({ reset })
</script>
