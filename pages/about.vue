<template>
    <div class="border-2 h-full">
        <div class="text-xl font-extrabold p-4">About Page </div>
        <div class="p-10 font-mono font-black">
            <h1 class="ease duration-100 delay-500"> Nuxt Chakir App </h1>
            <button
                class="text-red-600 border-red-900 bg-gray-400 p-5 hover:text-white hover:shadow-lg text-lg shadow-xl rounded-xl">
                Hi Tailwind From Server </button>
        </div>
        <div class="px-6 py-4">
            <span class="badge mr-2">#photography</span>
            <span class="badge mr-2">#travel</span>
            <span class="badge">#winter</span>
        </div>

        <div class="test">
            PostCSS <span class="test_gray">Color Gray</span> is
            <span class="test_working">working</span>!
        </div>
    </div>

</template> 

<script setup>
const route = useRoute()
definePageMeta({ layout: 'custom' })
</script>

<style lang="postcss" scoped>
.badge {
    @apply inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700;

    &:hover {
        @apply bg-gray-300;
    }
}

.test {
    color: rgb(40, 176, 218);
    @apply p-4;

    &_working {
        @apply text-green-500;
    }

    &_gray {
        color: gray(30);
    }
}
</style>
