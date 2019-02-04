<template>
  <footer class="vsf-footer">
    <div class="vsf-footer__group" v-for="group in links">
      <div class="vsf-footer__link">
        {{ group }}
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
export default {
  name: 'MainFooter',
  data () {
    return {
      links: [{
        title: 'About us',
        items: [
          { title: 'Who we are', link: '/' },
          { title: 'Quality in the details', link: '/' },
          { title: 'Customer Reviews', link: '/' }
        ]}, {
        title:'Departments',
        items: [
          { title: 'Women fashion', link: '/' },
          { title: 'Men fashion', link: '/' },
          { title: 'Kidswear', link: '/' },
          { title: 'Home', link: '/' },
        ]}, {
        title: 'Help' ,
        items: [
          { title: 'Customer service', link: '/' },
          { title: 'Size guide', link: '/' },
          { title: 'Contact us', link: '/' },
        ]}, {
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
