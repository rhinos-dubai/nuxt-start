<template>

    <div class="text-xl font-extrabold p-4"> Games call api  <p>{{ $route.params.slug }}</p>
    </div>
    <div v-for="game in games" :key="game.id" class="px-2">
        <div class="card py-2">
            <div class="card-body flex flex-row ">
                <h5 class="card-item">ID:{{ game.id }}</h5>
                <h3 class="card-item">NAME:{{ game.name }}</h3>
                <h3 class="card-item">SLUG:{{ game.slug }}</h3>

            </div>
        </div>
    </div>

</template>

<script setup>
const { games } = await $fetch('/api/games')
const route = useRoute()

// const random = Math.random()

// definePageMeta({ layout: random > 0.5 ? 'custom' : 'default' })


</script>

<style lang="postcss" scoped>
.card-body {
    @apply bg-blue-300 rounded-xl px-3 py-1 text-sm font-semibold text-gray-700 shadow-lg hover:shadow-2xl;

    &:hover {
        @apply bg-blue-400;
    }

    >.card-item {
        @apply p-2 bg-white m-1 rounded-lg;
    }
}
</style>