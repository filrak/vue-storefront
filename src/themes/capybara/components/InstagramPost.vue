<template>
  <div class="instagram-post">
    <img
      class="instagram-post__image"
      :src="post.img"
      alt="instagram photo"
    >
  </div>
</template>

<script>

export default {
  components: {
  },
  props: {
    post: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
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
@import '~@vue-storefront/core/modules/storefront-ui/css/variables';

.instagram-post {

  &__image {
    width: 100%;
    height: auto;
  }
}

</style>
