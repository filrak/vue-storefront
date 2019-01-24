<template>
  <div class="popular-categories">
    <div class="popular-categories-title"> Popular Categories </div>
    <div class="popular-categories-content">
      <div class="popular-category" v-for="product in products" :key="product.name">
        <category-card :category="product"/>
      </div>
    </div>
  </div>
</template>

<script>
import CategoryCard from './CategoryCard'

export default {
  components: {
    CategoryCard
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

<style lang="sass" scoped>
.popular-categories
  padding: 1rem 0

  .popular-categories-title
    padding: 0 1rem
    font-size: 1.3rem
    font-weight: 700

  .popular-categories-content
    display: flex
    overflow-x: scroll
    -webkit-overflow-scrolling: touch
    min-height: 120px
    &::-webkit-scrollbar
      display: none

    .popular-category
      padding: 1rem
      padding-right: 0
      &:last-child
        padding-right: 1rem

</style>
