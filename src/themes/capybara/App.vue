<template>
  <div id="app">
    <main-header/>
    <div class="app-content">
      <router-view/>
    </div>
    <bottom-navigation/>
  </div>
</template>

<script>
import metaInfo from './head'
import MainHeader from 'theme/components/MainHeader'
import BottomNavigation from 'theme/components/BottomNavigation'

export default {
  data () {
    return {
    }
  },
  computed: {
  },
  metaInfo,
  components: {
    MainHeader,
    BottomNavigation
  }
}
</script>

<style lang="scss">
@import '~storefront-ui/src/css/globals';

body {
  margin: 0;
  padding: 0;
}
</style>

<style lang="scss" scoped>
.app-content {
  margin-bottom: 4rem;
}
</style>
