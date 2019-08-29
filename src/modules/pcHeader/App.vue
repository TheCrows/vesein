<template>
  <div id="pc-header">
    header
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {
  }
})
export default class App extends Vue {}
</script>
<style lang="stylus">
#pc-header
  width: 100vw;
  height: 120px;
  position: relative;
</style>
