<script setup>
import SkillBadge from './badges/SkillBadge.vue';
import ExternalLinkIcon from './icons/ExternalLinkIcon.vue'
</script>

<template>
    <section>
        <h1>Ivan Zubkov</h1>
        <p>Frontend Developer</p>

        <div class="skills-list">
            <SkillBadge title="HTML" />
            <SkillBadge title="CSS" />
            <SkillBadge title="JavaScript" />
            <SkillBadge title="Vue" />
            <SkillBadge title="Firebase" />
        </div>

        <div class="links">
            <a href="https://github.com/Thundiverter" target="_blank">GitHub<ExternalLinkIcon /></a>
            <a href="mailto:ivan.zubkov.dev@gmail.com">ivan.zubkov.dev@gmail.com<ExternalLinkIcon /></a>
        </div>
    </section>
</template>

<style scoped>
section {
    padding-top: 4rem;
    padding-bottom: 3rem;
}

h1 {
    color: var(--color-accent);

}

.skills-list {
    display: flex;
    flex-wrap: wrap;
    gap: .5rem;
    margin: 2rem 0 1.5rem 0;
}

.links {
    display: flex;
    flex-wrap: wrap;
    gap: 3rem;
}
</style>