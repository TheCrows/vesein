<template>
  <div id="pc-slider-section">
    <slider-section></slider-section>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import SliderSection from './components/SliderSection.vue';

@Component({
  components: {
    SliderSection
  }
})
export default class App extends Vue {}
</script>
<style lang="stylus">
#pc-slider-section
  width: 100vw;
  height: 38vw;
  position: relative;
</style>
