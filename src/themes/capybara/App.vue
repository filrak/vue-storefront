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
@import '~storefront-ui/src/css/variables';

body {
  margin: 0;
  padding: 0;
}

// temporary until deleted
.margin-small {
  margin: $spacing-small;
}
.margin-x-small {
  margin-left: $spacing-small;
  margin-right: $spacing-small;
}
.margin-y-small {
  margin-top: $spacing-small;
  margin-bottom: $spacing-small;
}
.margin-left-small {
  margin-left: $spacing-small;
}
.margin-right-small {
  margin-right: $spacing-small;
}
.margin-top-small {
  margin-top: $spacing-small;
}
.margin-top-big {
  margin-top: $spacing-big;
}
.margin-big {
  margin: $spacing-big;
}
.margin-top-big {
  margin-top: $spacing-big;
}
.margin-x-big {
  margin-left: $spacing-big;
  margin-right: $spacing-big;
}
.margin-y-big {
  margin-top: $spacing-big;
  margin-bottom: $spacing-big;
}
.margin-y-medium {
  margin-top: $spacing-medium;
  margin-bottom: $spacing-medium;
}
.margin-left-medium {
  margin-left: $spacing-medium;
}
.margin-right-medium {
  margin-right: $spacing-medium;
}
.margin-bottom-big {
  margin-bottom: $spacing-big;
}
.margin-left-big {
  margin-left: $spacing-big;
}
.margin-right-big {
  margin-right: $spacing-big;
}
.margin-top-medium {
  margin-top: $spacing-medium;
}
</style>

<style lang="scss" scoped>
.app-content {
  margin-bottom: 4rem;
}
</style>
