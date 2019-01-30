<template>
  <div class="instagram-post">
    <img
      class="instagram-post__image"
      :src="post.img"
      alt="instagram photo"
    >
    <div class="instagram-post__overlay">
      <div class="instagram-post__nickname"> angelina_trn </div>
    </div>
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
  position: relative;

  &__image {
    width: 100%;
    height: auto;
  }

  &__overlay {
    position: absolute;
    width: 100%;
    height: 100;
    background-color: rgba(0,0,0,0.2)
  }
}

</style>
