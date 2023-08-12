<script setup type="ts">
    import { ref } from 'vue';
    import { Feeling } from './../types/Mood.d.ts';
    import enumKeys from './../util/enum';

    const select = ref('');
    const feelings = ref([]);

</script>
<template>
    <ul>
        <li v-for="feeling in feelings">
            {{ feeling }}
        </li>
    </ul>
    <form>
        <!--
            TODO: implement typeable select list to pick mood
            <input v-model="text" placeholder="How are you feeling?">
        -->
        <div class="inline-flex form-field">
            <select v-model="select" class="select select-bordered w-full max-w-xs">
                <option value="">
                    How are you feeling?
                </option>
                <option v-bind:value="value" v-for="value in Feeling">
                    {{ value }}
                </option>
            </select>
        </div>
        <div class="inline-flex form-field px-5">
            <button class="btn btn-primary" v-on:click.prevent="console.log(select.valueOf())">
                Enter
            </button>
        </div>
    </form>
</template>