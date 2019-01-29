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
    <div class="product-tile__review"> **** </div>
  </div>
</template>

<script>

export default {
  components: {
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
    height: 456px;
    max-height: 140px;
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
  }
  &__price {
    color: $c-text-primary;
  }
}
</style>
