
import Home from './../pages/Home.vue'
import Feeling from './../pages/Feeling.vue'
import Unknown from './../pages/Unknown.vue'

const routes = [
    { path: '/', name: 'home', component: Home },
    { path: '/feeling', name: 'feeling', component: Feeling },
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: Unknown },
]

export default routes;

