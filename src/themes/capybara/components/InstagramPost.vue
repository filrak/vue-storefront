<template>
  <div class="instagram-post" @click="toggleActive">
    <div class="instagram-post__overlay" v-if="active">
      <router-link to="/">
        <div class="instagram-post__nickname"> {{ post.name }} </div>
      </router-link>
    </div>
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
      active: false
    }
  },
  created () {
  },
  computed: {
  },
  methods: {
    toggleActive () {
      this.active = !this.active
    }
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
    height: 100%;
    background-color: $c-dark-primary;
    opacity: 0.8;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &__nickname {
    color: $c-text-on-dark;
    font-size: 1.1rem;
  }
}

</style>
