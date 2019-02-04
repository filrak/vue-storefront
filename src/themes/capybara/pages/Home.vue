<template>
  <div id="home">
    <div class="top-category-nav margin-big">
      <vsf-button full-width color="secondary" class="margin-right-small" text="women" />
      <vsf-button full-width color="secondary" class="margin-left-small" text="men" />
    </div>
    <popular-categories />
    <vsf-banner class="margin-x-big" width="100%">
      <template slot="subtitle">Subtitle</template>
      <template slot="title">Title</template>
      <template slot="description">Description</template>
    </vsf-banner>
    <div class="half-width-banners margin-big">
      <vsf-banner class="margin-right-small" width="50%">
        <template slot="subtitle">Subtitle</template>
        <template slot="title">Title</template>
        <template slot="description">Description</template>
      </vsf-banner>
      <vsf-banner class="margin-left-small margin-bottom-small" width="50%">
        <template slot="subtitle">Subtitle</template>
        <template slot="title">Title</template>
        <template slot="description">Description</template>
      </vsf-banner>
    </div>
    <vsf-call-to-action
      message="Subscribe to Newsletter"
      button-text="susbcribe"
      class="cta-newsletter margin-y-big"
    />
    <match-with />
    <section>
      <h1>Share your look</h1>
    </section>
    <main-footer />
    <instagram-feed />
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
    flex-flow: row nowrap;
    .vsf-banner {
      flex-grow: 1;
    }
  }
  .cta-newsletter {
    color: white;
  }
</style>
