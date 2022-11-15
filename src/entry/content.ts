import { createApp } from 'vue'
import Content from '@/view/Content.vue'

const div = document.createElement('div');
div.id = 'resume-extension-app';
document.body.appendChild(div);
console.log("hello")

createApp(Content).mount('#resume-extension-app');
