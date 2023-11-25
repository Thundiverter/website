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
    padding: .35rem .6rem;
    font-size: .8rem;
    border-radius: .55rem;
}
</style>