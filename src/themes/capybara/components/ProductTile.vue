<template>
  <div class="product-tile">
    <div class="product-tile__image-wrapper">
      <img
        class="product-tile__image"
        :src="getCurrentImageSrc"
        alt="product-image"
      >
      <div class="product-tile__favourite">
        <img src="assets/heart.svg" alt="product image" class="product-tile__favourite-image">
      </div>
    </div>
    <div class="product-tile__title"> {{ getName }} </div>
    <div class="product-tile__price"> $ 50.00 </div>
    <product-rating />
  </div>
</template>

<script>
import ProductRating from './ProductRating'

export default {
  components: {
    ProductRating
  },
  props: {
    product: {
      type: Object,
      default: () => ({})
    }
  },
  data () {
    return {
    }
  },
  computed: {
    getName () {
      return this.product ? this.product.name : ''
    },
    getCurrentImageSrc () {
      return this.product.img
    },
    getProductSku () {
      return this.product ? this.product.sku : ''
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~@vue-storefront/core/modules/storefront-ui/css/variables';

.product-tile {
  padding: 0 0 1rem;
  width: 100%;
  max-width: 300px;
  min-height: 100px;
  color: $c-text-primary;

  &__image-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    min-height: 100px;
  }
  &__image {
    width: auto;
    height: 100%;
    max-height: 240px;
  }
  &__favourite {
    position: absolute;
    top: 0.4rem;
    right: 0.4rem;
  }
  &__favourite-image {
    width: 18px;
    height: auto;
  }
  &__title {
    color: $c-text-primary;
    line-height: 1.6rem;
  }
  &__price {
    color: $c-text-primary;
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    line-height: 1.3rem;
  }
}
</style>
