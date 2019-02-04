<template>
  <div class="elements-viewer">
    <div class="elements-viewer__header">
      <div class="elements-viewer__title"> {{ title }} </div>
      <div class="elements-viewer__info"> {{ info }} </div>
    </div>
    <hr class="elements-viewer__line" v-if="showLine">
    <div class="elements-viewer__content">
      <slot />
    </div>
  </div>
</template>

<script>

export default {
  components: {},
  props: {
    title: {
      type: String,
      default: ''
    },
    info: {
      type: String,
      default: ''
    }
  },
  data () {
    return {}
  },
  computed: {
    showLine () {
      return !!this.info
    }
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
@import '~storefront-ui/src/css/variables';

.elements-viewer {
  padding: $spacing-big 0;

  &__header {
    padding: 0 $spacing-big;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }

  &__title {
    font-size: 1.3rem;
    font-weight: 700;
  }

  &__info {
    color: $c-gray-primary;
  }

  &__line {
    margin: 1rem;
    border: 1px solid $c-light-primary;
  }

  &__content {
    display: flex;
    overflow-x: scroll;
    -webkit-overflow-scrolling: touch;
    &::-webkit-scrollbar {
      display: none;
    }
  }
}
</style>
