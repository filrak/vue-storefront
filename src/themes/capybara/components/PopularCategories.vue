<template>
  <elements-viewer title="Popular Categories">
    <div class="popular-category" v-for="product in products" :key="product.name">
      <category-card :category="product"/>
    </div>
  </elements-viewer>
</template>

<script>
import CategoryCard from './CategoryCard'
import ElementsViewer from './ElementsViewer'

export default {
  components: {
    CategoryCard,
    ElementsViewer
  },
  data () {
    return {
      products: [
        {
          link: '/',
          name: 'SHOES',
          img: 'assets/categories/category_small_1.png'
        },
        {
          link: '/',
          name: 'BAGS',
          img: 'assets/categories/category_small_2.png'
        },
        {
          link: '/',
          name: 'SCARVES',
          img: 'assets/categories/category_small_3.png'
        },
        {
          link: '/',
          name: 'STUFF',
          img: 'assets/categories/category_small_4.png'
        }
      ]
    }
  },
  created () {
  },
  computed: {
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
.popular-category {
  padding: 1rem;
  padding-right: 0;
  &:last-child {
    padding-right: 1rem;
  }
}

</style>
