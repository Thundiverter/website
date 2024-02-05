<script setup>
const props = defineProps(['project']);
import ProjectBadge from './badges/ProjectBadge.vue';
import router from '../router';
</script>

<template>
    <a class="card" :href="props.project.url" target="_blank">
        <img :src="props.project.image">
        <p class="card-title">{{ props.project.title }}</p>
        <div v-if="[undefined, 'en'].includes(router?.currentRoute?.value?.query?.lang)">
            <p class="card-description" v-if="props?.project?.description">{{ props?.project?.description }}</p>
            <p class="card-description secondary" v-else>No description provided</p>
        </div>
        <div v-if="['ru'].includes(router?.currentRoute?.value?.query?.lang)">
            <p class="card-description" v-if="props?.project['description_ru']">{{ props?.project['description_ru'] }}</p>
            <p class="card-description secondary" v-else>Описание отсутствует</p>
        </div>
        <div class="badges-list">
            <ProjectBadge v-if="props?.project?.year" :title="props.project.year" />
            <ProjectBadge v-if="props?.project?.tags" v-for="tag of props.project.tags" :title="tag" />
        </div>
    </a>
</template>

<style scoped>
.card {
    background: var(--color-bg-card);
    color: var(--color-text);
    text-decoration: none;
    
    display: flex;
    flex-direction: column;
    gap: .75rem;
    border-radius: .75rem;
    padding: 1.5rem 1rem;

    transition: .1s ease-in-out;
}
.card > * {
    margin: 0;
    padding: 0;
}

.card-title {
    font-weight: bold;
}
.card-description {
    font-size: 1rem;
    margin-top: 0rem;
}

.card img {
    width: calc(100% + 2rem);
    height: 12rem;
    object-fit: cover;
    margin: -1.5rem -1rem .5rem -1rem;
    border-radius: .75rem .75rem 0 0;
}

.card:is(:hover, :focus-visible) {
    transform: translateY(2px);
}
.card:is(:hover, :focus-visible) .card-title {
    color: var(--color-accent);
}

.badges-list {
    display: flex;
    flex-wrap: wrap;
    gap: .5rem;
}

p.secondary {
    color: var(--color-secondary);
}
</style>