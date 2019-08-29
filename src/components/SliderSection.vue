<template>
  <div class="slider-selection">
    <template v-for="(item, index) in items">
      <transition name="fade-out" :key="item.main_title">
        <div class="slider-img-contain current-item"
             v-show="index === currentIndex || (index === lastIndex && showLast)"
             :class="{
                'current-item': index === currentIndex,
                'fade-item' : index === lastIndex
              }">
          <slot :data="item" :index="index"></slot>
        </div>
      </transition>
    </template>
    <div class="last-but" @click="toPage(getNextIndex())"></div>
    <div class="next-but" @click="toPage(getLastIndex())"></div>
    <div class="selection-dot">
      <span v-for="(item, index) in items" @click="toPage(index)"
        :class="{'is-current': currentIndex === index}" 
        :key="item.main_title" class="dot-item"></span>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue ,Prop } from 'vue-property-decorator';

@Component
export default class SliderSection extends Vue {
  private currentIndex: number = 0;
  private lastIndex: number = 0;
  private showLast: boolean = false;
  private timeOut: any = null;

  @Prop({required: true})
  private items!: object[];
  @Prop({ default: 3000 })
  private timeout!: number;

  private getLastIndex (currentIndex = this.currentIndex, total = this.items ? this.items.length : 1) {
    return currentIndex === 0 ? total - 1 : --currentIndex;
  }
  private getNextIndex (currentIndex = this.currentIndex, total = this.items ? this.items.length : 1) {
    return currentIndex === total - 1 ? 0 : ++currentIndex;
  }
  private toPage (nextPage: number) {
    this.timeOut && clearTimeout(this.timeOut);
    this.timeOut = null;
    this.lastIndex = this.currentIndex;
    this.showLast = true;
    this.currentIndex = nextPage;
    setTimeout(() => {
      this.showLast = false;
      this.autoJump();
    });
  }
  private autoJump () {
    this.timeOut = setTimeout(() => {
      this.toPage(this.getNextIndex());
    }, this.timeout)
  }
  created() {
    this.autoJump();
  }
}
</script>

<style scoped lang="stylus">
common-arrow(rotate)
  height 50px
  width 50px
  position absolute
  top 50%
  transform translateY(-50%) rotate(rotate deg)
  border solid 1px
  border-color #fff #fff transparent transparent
  cursor pointer
  z-index 3
shown-outer()
  &:after
    content ''
    display block
    height 0
    width 0
    transition all .3s
    border-radius 50%
    border solid 1px #fff
    top 50%
    left 50%
    position absolute
    transform translateX(-50%) translateY(-50%)
shown-outer-after()
  &:after
    height 14px
    width 14px
.slider-selection
  height 100%
  width 100%
  overflow hidden
  position relative
  .fade-out-leave-to
    opacity 0
  .fade-out-leave-active
    transition all .8s
  .last-but
    common-arrow(45)
    right 50px
  .next-but
    common-arrow(-135)
    left 50px
  .slider-img-contain
    position absolute
    top 0
    left 0
    right 0
    bottom 0
    &.fade-item
      z-index 2 !important
    &.current-item
      z-index 1
  .selection-dot
    z-index 3 
    position absolute
    bottom 20px
    width 100%
    justify-content center
    align-items center
    display flex
    .dot-item
      display inline-block
      background  #fff
      height 6px
      width 6px
      margin 0 14px
      border-radius 50%
      position relative
      cursor pointer
      transition all .3s
      shown-outer()
      &.is-current
        height 0
        width 0
        margin 0 17px
        shown-outer-after()
      &:hover
        shown-outer-after()
</style>
