Proof of concept for new theme system

Idea is simple. Each theme is now an VueStorofrontTheme object. The object contains entry file, it's components and pages.

It's registered similarly to VS module so you can just import the theme from npm package and register it to have fully working website.

If you need to modify any of theme compoennts/pages just repalce them before registration