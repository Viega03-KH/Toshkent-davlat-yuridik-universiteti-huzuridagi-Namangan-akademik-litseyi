<script setup>
import { ref } from 'vue'
import SpecialColor from './special-color.vue'
import SpecialSize from './special-size.vue'
import SpecialVois from './special-vois.vue'

const colorRef = ref()
const sizeRef = ref()
const voisRef = ref()

function resetAll() {
    colorRef.value?.reset?.()
    sizeRef.value?.reset?.()
    voisRef.value?.reset?.()
}
</script>


<template>
    <dialog id="my_modal_3" class="modal">
        <div class="modal-box top-4 absolute">
            <form method="dialog">
                <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
            </form>

            <h3 class="text-lg font-bold">{{ $t('soos-text-1') }}</h3>
            <div class="space-y-4 mt-4">
                <SpecialColor ref="colorRef" />
                <SpecialSize ref="sizeRef" />
                <SpecialVois ref="voisRef" />

                <button @click="resetAll" class="btn btn-outline btn-sm w-full">
                    {{ $t('soos-text-2') }}
                </button>
            </div>
        </div>
    </dialog>
</template>