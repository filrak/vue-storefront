<template>
  <div class="product-tile">
    <div class="product-tile__image-wrapper">
      <router-link :to="getLinkAddress">
        <img
          class="product-tile__image"
          :src="getCurrentImageSrc"
          alt="product-image"
        >
      </router-link>
      <div class="product-tile__favourite">
        <img src="assets/heart.svg" alt="product image" class="product-tile__favourite-image">
      </div>
    </div>
    <router-link :to="getLinkAddress" class="product-tile__link">
      <div class="product-tile__title"> {{ getName | htmlDecode }} </div>
    </router-link>
    <div class="product-tile__price"> $ 50.00 </div>
    <product-rating />
  </div>
</template>

<script>
import ProductRating from './ProductRating'
import { productThumbnailPath } from '@vue-storefront/core/helpers'

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
      let thumbnail = productThumbnailPath(this.product)
      return this.getThumbnail(thumbnail, 125, 176)
    },
    getLinkAddress () {
      return this.localizedRoute({
        name: this.product.type_id + '-product',
        params: {
          parentSku: this.product.parentSku ? this.product.parentSku : this.product.sku,
          slug: this.product.slug,
          childSku: this.product.sku
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~storefront-ui/src/css/variables';

.product-tile {
  padding: 0 0 $spacing-big;
  min-width: 100px;
  width: 100%;
  max-width: 300px;
  min-height: 150px;
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
  &__link {
    color: $c-text-primary;
    text-decoration: none;
  }
}
</style>
