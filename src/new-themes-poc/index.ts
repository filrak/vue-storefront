// themes entry point
// first we need to import a theme that we want to use 
import { Pages, Components } from './default-theme' // (lets assume it's just a npm package, not sth we have in our codebase)
import WelcomeExtended from './overrides/WelcomeExtended.vue'

// now let's say we want to override Welcome component from theme
Components.Welcome = WelcomeExtended

// That's all we need to do. Rest is still encapsulated inside npm package and upgradable!
// now we can register a theme just by exporting it (it'll be imported in core and registered)

export const Theme = { Pages, Components }