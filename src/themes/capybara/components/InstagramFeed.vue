<template>
  <div class="instagram-feed">
    <div class="instagram-feed__header">
      <div class="instagram-feed__title"> Share your look </div>
      <div class="instagram-feed__subtitle"> #YOURLOOK </div>
    </div>
    <div class="instagram-feed__posts">
      <instagram-post
        class="instagram-feed__post"
        v-for="instaEntry in feed"
        :key="instaEntry.name"
        :post="instaEntry" />
    </div>
  </div>
</template>

<script>
import InstagramPost from './InstagramPost'

export default {
  components: {
    InstagramPost
  },
  data () {
    return {
      feed: [
        {
          link: '/',
          name: 'Cream Beach Bag',
          img: 'assets/insta/insta1.png'
        },
        {
          link: '/',
          name: 'Linen Dress',
          img: 'assets/insta/insta2.png'
        },
        {
          link: '/',
          name: 'Cotton Sweater',
          img: 'assets/insta/insta3.png'
        },
        {
          link: '/',
          name: 'Cotton Sweater',
          img: 'assets/insta/insta4.png'
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
@import '~@vue-storefront/core/modules/storefront-ui/css/variables';

.instagram-feed {
  padding: 0 1rem;

  &__header {
    display: flex;
    flex-direction: column;
  }

  &__title {
    font-size: 1.3rem;
    font-weight: 700;
  }

  &__subtitle {
    font-size: 1rem;
    line-height: 1.9rem;
  }

  &__posts {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding-top: 1rem;
  }

  &__post {
    max-width: calc(50vw - 1.25rem);
    padding-bottom: 0.25rem;
  }
}

</style>
