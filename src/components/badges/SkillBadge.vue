<script setup>
const props = defineProps(['title']);
</script>

<template>
    <div class="skill-badge">{{ props.title || '' }}</div>
</template>

<style scoped>
.skill-badge {
    background: var(--color-secondary);
    display: inline-block;
    padding: .5rem 1rem;
    border-radius: .75rem;
}
</style>