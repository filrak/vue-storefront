import { Route } from 'vue-router'

// This function will be executed after entering each route. 
// See https://router.vuejs.org/guide/advanced/navigation-guards.html#global-after-hooks
export function afterEach(to: Route, from: Route) {
  console.log(`We have just entered ${to.name} from ${from.name}.`)
}