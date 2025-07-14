<template>
    <div class="tooltip tooltip-bottom z-50" data-tip="Maxsus imkonyatlar">
        <button onclick="my_modal_3.showModal()" class="btn">
            <Glasses :stroke-width="0.8" />
        </button>
    </div>
</template>

<script setup>
import { Glasses } from 'lucide-vue-next'
</script>