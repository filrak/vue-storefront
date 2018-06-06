<template>
  <div class="microcart">
    <el-dialog title="Microcart" :visible.sync="isOpen" :before-close="(done) => closeMicrocart()" >
      <div v-for="(item, index) in items" :key="index"> {{ item.name }} ({{ item.qty }}) </div>
    </el-dialog>
  </div>
</template>

<script>
import Microcart from 'core/components/blocks/Microcart/Microcart'

export default {
  mixins: [Microcart]
}
</script>
