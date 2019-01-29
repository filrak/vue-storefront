<template>
  <elements-viewer title="Math it with" info="9 Items">
    <div class="math-with__product" v-for="product in products" :key="product.name">
      <product-tile :product="product"/>
    </div>
  </elements-viewer>
</template>

<script>
import ProductTile from './ProductTile'
import ElementsViewer from './ElementsViewer'

export default {
  components: {
    ProductTile,
    ElementsViewer
  },
  data () {
    return {
      products: [
        {
          link: '/',
          name: 'SHOES',
          img: 'assets/products/product1.png'
        },
        {
          link: '/',
          name: 'BAGS',
          img: 'assets/products/product2.png'
        },
        {
          link: '/',
          name: 'SCARVES',
          img: 'assets/products/product3.png'
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
.math-with__product {
  padding: 1rem;
  padding-right: 0;
  &:last-child {
    padding-right: 1rem;
  }
}

</style>
