<template>
  <router-link to="/">
    <div class="category-card">
      <div class="category-card-image-wrapper">
        <img
          class="category-card-image"
          :src="getCurrentImageSrc"
          alt="product-image"
        >
        <div class="category-card-title"> {{ getName }} </div>
      </div>
    </div>
  </router-link>
</template>

<script>

export default {
  components: {
  },
  props: {
    category: {
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
      return this.category ? this.category.name : ''
    },
    getCurrentImageSrc () {
      return this.category.img
    },
    getProductSku () {
      return this.category ? this.category.sku : ''
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~@vue-storefront/core/modules/storefront-ui/css/variables';

.category-card {
  padding: 0 0 $spacing-big;
  width: 100%;
  max-width: 300px;
  min-height: 100px;
  color: $c-text-primary;

  .category-card-image-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    min-height: 100px;
    .category-card-image {
      width: auto;
      height: 120px;
      max-height: 140px;
    }
  }
  .category-card-title {
    font-size: 0.9rem;
    line-height: 1.2rem;
    font-weight: 700;
    position: absolute;
    bottom: 0.5rem;
  }
}
</style>
