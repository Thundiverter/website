const { createApp } = Vue;

createApp({
 data() {
  return {
   skills: skills,
   projects: projects
  }
 },
 methods: {
  returnUrl(name) {
   return 'https://raw.githubusercontent.com/Thundiverter/thundiverter.github.io/main/images/' + (name || 'project.png');
  },
  returnSkillStyle(skill) {
   return { backgroundColor: skill.color, color: skill.textColor }
  },
  returnProjectStyle(project) {
   return { 'background-image': 'url(' + this.returnUrl(project.img) + ')' }
  }
 }
}).mount('#app');
