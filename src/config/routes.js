
import Home from './../pages/Home.vue'
import Unknown from './../pages/Unknown.vue'

const routes = [
    { path: '/', name: 'home', component: Home },
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: Unknown },
]

export default routes;

