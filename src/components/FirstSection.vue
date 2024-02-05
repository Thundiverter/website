<script setup>
import SkillBadge from './badges/SkillBadge.vue';
import ExternalLinkIcon from './icons/ExternalLinkIcon.vue'
</script>

<template>
    <section>
        <div class="header-grid">
            <div v-if="[undefined, 'en'].includes($router?.currentRoute?.value?.query?.lang)">
                <h1>Ivan Zubkov</h1>
                <p>Frontend Developer</p>
            </div>
            <div v-if="['ru'].includes($router?.currentRoute?.value?.query?.lang)">
                <h1>Иван Зубков</h1>
                <p>Фронтенд-разработчик</p>
            </div>
            <div class="lang">
                <RouterLink :class="{'current': [undefined, 'en'].includes($router?.currentRoute?.value?.query?.lang)}" to="/">EN</RouterLink>
                <RouterLink :class="{'current': ['ru'].includes($router?.currentRoute?.value?.query?.lang)}" to="/?lang=ru">RU</RouterLink>
            </div>
        </div>

        <div class="skills-list">
            <SkillBadge title="HTML" />
            <SkillBadge title="CSS" />
            <SkillBadge title="JavaScript" />
            <SkillBadge title="Vue" />
            <SkillBadge title="Firebase" />
        </div>

        <div class="links">
            <a href="https://github.com/Thundiverter" target="_blank">GitHub<ExternalLinkIcon /></a>
            <!--<a href="mailto:ivan.zubkov.dev@gmail.com">ivan.zubkov.dev@gmail.com<ExternalLinkIcon /></a>-->
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
    gap: 1rem 3rem;
}

.header-grid {
    display: grid;
    grid-template-columns: 3fr 1fr;
}
.header-grid .lang {
    margin-top: 1rem;
    display: flex;
    flex-wrap: wrap;
    gap: .5rem;
    justify-content: end;
}
.header-grid .lang .current {
    color: var(--color-text);
    text-decoration-color: var(--color-text);
}
</style>