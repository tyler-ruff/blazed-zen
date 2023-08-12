<script setup>
    import Hero from './../components/one/Hero.vue'
</script>
<template>
    <div class="mx-auto max-w-xl text-center px-10 pt-5 pb-5">
        <Hero
            title="Blazed Zen"
            description="Find Your Zen, Understand Your Mind">
            <router-link to="/feeling">
                <a class="cursor-pointer btn btn-primary block w-full rounded bg-blue-600 hover:text-blue-700 hover:bg-blue-200 px-12 py-3 text-sm font-medium text-white shadow focus:outline-none focus:ring active:bg-blue-500 sm:w-auto">
                    Enter Your Mood
                </a>
            </router-link>
            <router-link to="/contact">
                <a class="cursor-pointer btn btn-primary block w-full rounded hover:text-blue-700 hover:bg-blue-200 px-12 py-3 text-sm font-medium text-white shadow focus:outline-none focus:ring active:bg-blue-500 sm:w-auto">
                    Contact
                </a>
            </router-link>
        </Hero>
    </div>
</template>