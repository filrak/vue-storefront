<template>
  <elements-viewer title="Match it with" info="9 Items">
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
          name: 'Cream Beach Bag',
          img: 'assets/products/product1.png'
        },
        {
          link: '/',
          name: 'Linen Dress',
          img: 'assets/products/product2.png'
        },
        {
          link: '/',
          name: 'Cotton Sweater',
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
@import '~storefront-ui/src/css/variables';

.math-with__product {
  padding: $spacing-big;
  padding-right: 0;
  &:last-child {
    padding-right: 1rem;
  }
}

</style>
