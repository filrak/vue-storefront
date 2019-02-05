const Home = () => import(/* webpackChunkName: "vsf-home" */ 'theme/pages/Home.vue')
const NotFoundPage = () => import(/* webpackChunkName: "vsf-not-found" */ 'theme/pages/NotFoundPage.vue')

let routes = [
  { name: 'home', path: '/', component: Home, alias: '/pwa.html' },
  { name: 'page-not-found', path: '/page-not-found', component: NotFoundPage }
]

export default routes
