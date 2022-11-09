import { createApp } from 'vue'
import App from '@/view/App.vue'

const div = document.createElement('div');
div.id = 'resume-extension-app';
document.body.appendChild(div);

const app = createApp(App);
app.mount('#resume-extension-app');