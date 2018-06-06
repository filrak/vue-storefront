<template>
  <header>
    <div class="row">
      <div class="col-xs-6">
        <router-link :to="localizedRoute('/')">
          <img src="/assets/logo.svg" alt="Fashion store logo">
        </router-link>
      </div>
      <div class="col-xs-6 end-xs middle-xs">
        <el-button @click="openMicrocart">{{ $t('Cart') }}</el-button>
      </div>
    </div>
  </header>
</template>

<script>
import MicrocartIcon from 'core/components/blocks/Header/MicrocartIcon'

export default {
  mixins: [MicrocartIcon]
}
</script>
