<script setup>
    import DrawerMenu from "./DrawerMenu.vue"
    import Logo from "../navbar/logo.vue"
    import Lang from '@/components/selectors/lang/Lang.vue'
    import {CircleX} from 'lucide-vue-next'
    import drawerbg from '@/assets/bgimg/drawer.svg'
</script>


<template>
    <div class="drawer w-auto">
        <input id="my-drawer" type="checkbox" class="drawer-toggle" />
        <div class="drawer-side bg-white z-50">
            <div class="menu text-base-content w-full h-full p-6">
                <div class="container mt-0 md:mt-10 mx-auto md:px-36 px-1 flex flex-col gap-4">
                    <div class="flex justify-between md:border-b pb-0 md:pb-10">
                        <Logo class="md:flex hidden" />
                        <div class="flex items-center justify-between md:w-auto w-full gap-1">
                            <Lang />
                            <label for="my-drawer" class="btn text-sm"><CircleX :stroke-width="0.75" /></label>
                        </div>
                    </div>
                    <DrawerMenu />
                </div>
            </div>
            <img :src="drawerbg" class="absolute inset-0 w-full h-full object-cover opacity-30 pointer-events-none z-0" />
        </div>
    </div>
</template>