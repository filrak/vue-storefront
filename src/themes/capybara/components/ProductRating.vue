<template>
  <div class="product-rating">
    <div class="product-rating__stars">
      <rating-star :filled="n <= fullStarsCount" v-for="n in getStarsCount" :key="n"/>
    </div>
    <div class="product-rating__info"> (8) </div>
  </div>
</template>

<script>
import RatingStar from './RatingStar'

export default {
  components: {
    RatingStar
  },
  props: {
  },
  data () {
    return {
    }
  },
  computed: {
    getStarsCount () {
      return 5
    },
    fullStarsCount () {
      return 3 // Math.floor(data.rating)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~@vue-storefront/core/modules/storefront-ui/css/variables';

.product-rating {
  display: flex;
  justify-content: flex-start;
  align-items: center;

  &__info {
    font-size: 0.8rem;
    padding: 0 0.3rem;
  }
}
</style>
