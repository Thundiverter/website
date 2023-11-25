<script setup>
import ExternalLinkIcon from './icons/ExternalLinkIcon.vue'
</script>

<template>
    <footer>
        <p>Ivan Zubkov, 2020—{{ new Date().getFullYear() }}</p>
        <p>Color palette by <a class="secondary" href="https://www.realtimecolors.com/" target="_blank">Realtime Colors<ExternalLinkIcon /></a></p>
    </footer>
</template>

<style scoped>
footer {
    padding: 2rem;
}
footer p {
    font-size: .9rem;
    margin: .5rem 0;
    color: var(--color-secondary);
}
</style>