<template>
  <div class="list">
    <div class="item" @click='add'>
      <h3>Vue counter </h3>
      <span>clicks here: {{ result }}</span>
    </div>
  </div>
</template>

<script lang="ts">
import {updateCount} from "@beyond/docs/examples-sm-actions";

export default {
  data() {
    return {
      result: 0
    }
  },
  methods: {
    emitResult() {
      ++this.result;
      this.$emit('input', this.result)
    },
    add() {
      this.emitResult();
      updateCount();
    }
  }
}
</script>

<style lang="sass" scoped>
</style>
