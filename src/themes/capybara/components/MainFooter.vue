<template>
  <footer class="vsf-footer">
    <div class="vsf-footer__group" v-for="group in links" :key="group.title">
      <h3 @click="group.isOpen = !group.isOpen">
        <span>{{ group.title }}</span>
        <img src="~storefront-ui/src/assets/more.svg" alt="nav-home" class="vsf-bottom-navigation-element-img">
      </h3>
      <ul v-show="group.isOpen">
        <router-link v-for="item in group.items" :key="item.title" :to="item.link">
          <li class="vsf-footer__link">
            {{ item.title }}
          </li>
        </router-link>
      </ul>
    </div>
  </footer>
</template>

<script lang="ts">
export default {
  name: 'MainFooter',
  data () {
    return {
      links: [{
        isOpen: false,
        title: 'About us',
        items: [
          { title: 'Who we are', link: '/' },
          { title: 'Quality in the details', link: '/' },
          { title: 'Customer Reviews', link: '/' }
        ]}, {
        isOpen: false,
        title: 'Departments',
        items: [
          { title: 'Women fashion', link: '/' },
          { title: 'Men fashion', link: '/' },
          { title: 'Kidswear', link: '/' },
          { title: 'Home', link: '/' }
        ]}, {
        isOpen: false,
        title: 'Help',
        items: [
          { title: 'Customer service', link: '/' },
          { title: 'Size guide', link: '/' },
          { title: 'Contact us', link: '/' }
        ]}, {
        isOpen: false,
        title: 'Payments and delivery',
        items: [
          { title: 'Purchase terms', link: '/' },
          { title: 'Guarantee', link: '/' }
        ]}
      ]
    }
  }
}
</script>

<style lang="scss">
@import '~storefront-ui/src/css/variables';

.vsf-footer {
  padding: $spacing-big;
  background-color: $c-light-primary;
  &__group {
    padding: 0.125rem 0;
    text-transform: uppercase;
    h3 {
      font-weight: 'regular';
      font-size: 1rem;
      display: flex;
      justify-content: space-between;
    }
    ul {
      padding-left: 0;
    }
  }
  &__link {
    text-transform: none;
    font-size: 1rem;
    padding: 0.25rem 0;
    list-style-type: none;
  }
}
</style>
