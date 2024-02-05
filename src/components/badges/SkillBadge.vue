<script setup>
const props = defineProps(['title']);
</script>

<template>
    <div class="skill-badge">{{ props.title || '' }}</div>
</template>

<style scoped>
.skill-badge {
    background: var(--color-primary);
    display: inline-block;
    padding: .5rem 1rem;
    border-radius: .75rem;
    font-weight: 600;
}
</style>