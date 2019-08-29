<template>
  <div id="pc-slider-section">
    <slider-section :items="items" :timeout="4000">
      <template #default="{data, index}">
        <section class="slider-main-info">
          <div class="slider-main-title">{{data.main_title}}</div>
          <div class="slider-main-butgroup">
            <a :href="item.link" v-for="item in data.buttons" :key="item.text">
              {{item.text}}
            </a>
          </div>
        </section>
        <img class="slider-img" :src="data.img_big" :alt="data.main_title">
      </template>
    </slider-section>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import SliderSection from '../../components/SliderSection.vue';

@Component({
  components: {
    SliderSection
  }
})
export default class App extends Vue {
  private items: object[] = [
    {
      img_url: "https://media.gucci.com/content/HeroBigSmall_640x816/1563798603/HeroBigSmall_S93-FS-HERO-1955-01_001_Default.jpg",
      img_big: "https://media.gucci.com/content/HeroBigStandard_1600x760/1563798603/HeroBigStandard_S93-FS-HERO-1955-01_001_Default.jpg",
      main_title: "FALL WINTER 2019",
      buttons: [{
        text: "Shop now",
        link: "/home"
      }]
    },
    {
      img_url: "https://media.gucci.com/content/HeroBigSmall_640x816/1562863509/HeroBigSmall_S93-FS-ADV-08_001_Default.jpg",
      img_big: "https://media.gucci.com/content/HeroBigStandard_1600x760/1562863509/HeroBigStandard_S93-FS-ADV-08_001_Default.jpg",
      main_title: "VESEIN ORIGINAL BAGS",
      buttons: [{
        text: "Shop WOMEN",
        link: "/collections/shoulder-bag"
      }]
    },
    {
      img_url: "https://media.gucci.com/content/HeroBigSmall_640x816/1562746507/HeroBigSmall_S93-FS-HERO-07_001_Default.jpg",
      img_big: "https://media.gucci.com/content/HeroBigStandard_1600x760/1562746507/HeroBigStandard_S93-FS-HERO-07_001_Default.jpg",
      main_title: "WHATS NEW",
      buttons: [{
        text: "Shop NOW",
        link: "/collections/totes"
      }]
    }
  ];
}
</script>
<style lang="stylus">
#pc-slider-section
  width 100vw
  height 38vw
  position relative
  .slider-img-contain
    .slider-main-info
      position absolute
      width 100%
      top 50%
      transform translateY(-50%)
      text-align center
      .slider-main-title
        font-size 40px
        color #fff
        margin-bottom 20px
      .slider-main-butgroup a
        display inline-block
        line-height 40px
        font-size 12px
        padding 0 40px
        background #000
        color #fff
        text-decoration none
    .slider-img
      min-height 100%
      width 100%
</style>
