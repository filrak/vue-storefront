<template>
  <div class="elements-viewer">
    <div class="elements-viewer__title"> {{ title }} </div>
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
    }
  },
  data () {
    return {}
  },
  computed: {},
  methods: {}
}
</script>

<style lang="scss" scoped>
.elements-viewer {
  padding: 1rem 0;

  &__title {
    padding: 0 1rem;
    font-size: 1.3rem;
    font-weight: 700;
  }

  &__content {
    display: flex;
    overflow-x: scroll;
    -webkit-overflow-scrolling: touch;
    min-height: 120px;
    &::-webkit-scrollbar {
      display: none;
    }
  }
}
</style>
