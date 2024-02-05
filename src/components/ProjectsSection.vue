<script setup>
import { ref, onMounted } from 'vue';
import ProjectCard from './ProjectCard.vue';
import SkillBadge from './badges/ProjectBadge.vue';

const projects = ref([]);

onMounted(() => {
    fetch('https://raw.githubusercontent.com/thundiverter/thundiverter.github.io/main/projects.json')
    .then((res) => res.json())
    .then((data) => projects.value = data)
})
</script>

<template>
    <section>
        <div v-if="[undefined, 'en'].includes($router?.currentRoute?.value?.query?.lang)">
            <h2>Projects</h2>
        </div>
        <div v-if="['ru'].includes($router?.currentRoute?.value?.query?.lang)">
            <h2>Проекты</h2>
        </div>

        <div class="projects-grid">
            <ProjectCard v-for="i of projects.slice().reverse()" :project="i" />

            <div v-if="projects?.length === 0" class="loader"></div>
        </div>
    </section>
</template>

<style scoped>
section {
    background: #bacbeb;
    border-radius: 1rem;
    padding-bottom: 2rem;
}

.projects-grid {
    display: grid;
    grid-template-columns: repeat(var(--columns), 1fr);
    gap: 1rem;
}

@media (min-width: 700px) {
    .projects-grid {
        --columns: 2;
    }
}

@media (min-width: 960px) {
    .projects-grid {
        --columns: 3;
    }
}

/*@media (min-width: 1280px) {
    .projects-grid {
        --columns: 4;
    }
}*/
</style>