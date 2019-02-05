<template>
  <elements-viewer title="Match it with" :info="getItemsCountName" v-if="getItemsCount">
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
  props: {
    products: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
    }
  },
  created () {
  },
  computed: {
    getItemsCount () {
      return this.products.length
    },
    getItemsCountName () {
      return `${this.getItemsCount} Items`
    }
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
