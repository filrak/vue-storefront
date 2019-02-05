const Home = () => import(/* webpackChunkName: "vsf-home" */ 'theme/pages/Home.vue')
const NotFoundPage = () => import(/* webpackChunkName: "vsf-not-found" */ 'theme/pages/NotFoundPage.vue')

let routes = [
  { name: 'home', path: '/', component: Home, alias: '/pwa.html' },
  { name: 'configurable-product', path: '/product', component: Home }, // needed to productTile link, change later path and component
  { name: 'page-not-found', path: '*', component: NotFoundPage }
]

export default routes
