import { createApp } from "vue";

import App from "./routes/App.vue";
import router from './routes/router.js';

const app = createApp(App)

app.use(router);

app.mount("#app")