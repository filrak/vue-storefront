<template>
  <div id="home">
    <div class="top-category-nav margin-big">
      <vsf-button full-width color="secondary" class="margin-right-small margin-top-medium" text="women" />
      <vsf-button full-width color="secondary" class="margin-left-small margin-top-medium" text="men" />
    </div>
    <popular-categories />
    <vsf-banner class="margin-x-big" width="100%" bg-img="../assets/banners/banner_01.png">
      <template slot="subtitle">Scarves</template>
      <template slot="title">Cocktail & Party</template>
      <template slot="description">Description</template>
    </vsf-banner>
    <div class="half-width-banners margin-big">
      <vsf-banner class="margin-right-medium margin-bottom-big" width="50%" bg-img="../assets/banners/banner_02.png">
        <template slot="subtitle">T-shirts</template>
        <template slot="title">The Office Life</template>
        <template slot="description">Description</template>
      </vsf-banner>
      <vsf-banner class="margin-left-medium margin-bottom-big" width="50%" bg-img="../assets/banners/banner_03.png">
        <template slot="subtitle">Shoes</template>
        <template slot="title">Eco Sandals</template>
        <template slot="description">Description</template>
      </vsf-banner>
    </div>
    <vsf-call-to-action
      message="Subscribe to Newsletter"
      button-text="susbcribe"
      class="cta-newsletter margin-y-big"
    />
    <match-with class="margin-top-big"/>
    <instagram-feed class="margin-bottom-big"/>
    <main-footer class="margin-top-big"/>
  </div>
</template>

<script>
import VsfButton from 'storefront-ui/src/components/Button/Button.vue'
import VsfBanner from 'storefront-ui/src/components/Banner/Banner.vue'
import VsfCallToAction from 'storefront-ui/src/components/CallToAction/CallToAction.vue'
import PopularCategories from 'theme/components/PopularCategories'
import MatchWith from 'theme/components/MatchWith'
import MainFooter from 'theme/components/MainFooter'
import InstagramFeed from 'theme/components/InstagramFeed'

export default {
  name: 'Home',
  components: {
    VsfButton,
    VsfBanner,
    VsfCallToAction,
    PopularCategories,
    MatchWith,
    MainFooter,
    InstagramFeed
  },
  computed: {},
  async asyncData ({ store, route }) {}
}
</script>

<style lang="scss">
  .top-category-nav {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-around;
  }
  .half-width-banners {
    display: flex;
    .vsf-banner {
      width: 50%;
      height: 10rem;
    }
  }
  .cta-newsletter {
    color: white;
  }
</style>
