<template>
    <div class="product-slider" ref="slider">
        <ul class="item-contain" :style="{left: `${currentLeft}px`}">
            <li class="contain-item" :ref="'item_'+item.id" v-for="item in items" :key="item.id">
                <img :src="item.image" alt="">
            </li>
        </ul>
        <div class="last-but" @click="toPage(getNextIndex())"></div>
        <div class="next-but" @click="toPage(getLastIndex())"></div>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class productSlider extends Vue {
  @Prop({required: true})
  private items!: any[];

  private currentIndex: number = 0;
  private currentLeft: number = 0;

  private getLastIndex (currentIndex = this.currentIndex, total = this.items ? this.items.length : 1) {
    return currentIndex === 0 ? total - 1 : --currentIndex;
  }
  private getNextIndex (currentIndex = this.currentIndex, total = this.items ? this.items.length : 1) {
    return currentIndex === total - 1 ? 0 : ++currentIndex;
  }

  private toPage (nextPage: number) {
      let targetItem: any =  this.$refs['slider']
      let currentWindowWidth = targetItem.getBoundingClientRect().width;
      this.currentIndex = nextPage;
      this.currentLeft = -(nextPage * currentWindowWidth * 3) / 5;
  }

  private resizeFun () {
       this.toPage(this.currentIndex);
   }

  created() {
      window.addEventListener('resize', this.resizeFun);
    }

  beforeDestroy() {
      window.removeEventListener('resize', this.resizeFun);
  }
}
</script>

<style lang="stylus">
common-arrow(rotate)
    height 50px
    width 50px
    position absolute
    top 50%
    transform translateY(-50%) rotate(rotate deg)
    border solid 1px
    border-color #999 #999 transparent transparent
    cursor pointer
    z-index 3

.product-slider
    width 100%
    height calc(75.6vh + 120px)
    overflow hidden
    .last-but
        common-arrow(45)
        right 50px
    .next-but
        common-arrow(-135)
        left 50px
    .item-contain
        background rgb(231,231,231)
        width 50000px
        position relative
        margin-left -10vw
        transition left .3s
        .contain-item
            width 40vw
            padding-top 120px
            margin 0 10vw
            display inline-block
            img
                width 100%
    
ul,ol,li
    list-style-type none
    padding 0
    margin 0
</style>