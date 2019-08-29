<template>
  <header id="header-section" :style="{ background: currentColor.back }">
    <div class="header-top">
      <logo :color="currentColor.logo"></logo>
      <div class="header-left header-operate" :style="{ color: currentColor.icon }">
        <span>
          <svg t="1567060620933" viewBox="0 0 1024 1024" version="1.1">
            <path d="M512 144.896c-141.312 0-256.512 115.2-256.512 256.512 0 178.688 164.864 372.224 227.328 445.44 9.728 11.776 15.872 18.944 18.432 22.528 2.56 3.584 6.656 5.632 10.752 5.632 3.584 0 7.168-1.536 9.728-4.096l1.024-1.024 0.512-1.024c2.048-3.072 7.68-9.728 18.944-23.04 61.952-73.728 226.816-268.8 226.816-444.416C768.512 260.096 653.312 144.896 512 144.896z m0 352.256c-52.736 0-95.744-43.008-95.744-95.744s43.008-95.744 95.744-95.744 95.744 43.008 95.744 95.744-43.008 95.744-95.744 95.744z" :fill="currentColor.icon" p-id="1991">
            </path>
          </svg>
          中国</span><span>简体中文</span>
      </div>
      <div class="header-right header-operate" :style="{ color: currentColor.icon }">
        <span @click="jumpTo('/cart')">
          <svg viewBox="0 0 15 14" id="svg-icon-shopping-bag">
            <title>shopping-bag</title>
            <g :fill="currentColor.icon" fill-opacity="0.5">
              <path
                      d="M13,4.2h-2.4l0-2c0-1.1-1.3-2-3-2s-3,0.8-3,2l0,2H1.9c-1,0-1.6,0.5-1.6,1.2l0.5,7.8h13.4l0.6-7.7
        C14.8,4.7,14,4.2,13,4.2z M6.1,2.2c0.1-0.1,0.6-0.5,1.5-0.5c0.9,0,1.4,0.3,1.5,0.5l0,2h-3L6.1,2.2z M12.8,11.7H2.2L1.8,5.8
        c0,0,0.1,0,0.1,0H13c0.1,0,0.2,0,0.2,0L12.8,11.7z"
              ></path>
            </g>
          </svg>
          购物袋</span>
      </div>
    </div>
    <nav class="header-nav">
      <a :href="item.url" v-for="item in menu_items" class="header-nav-item" :key="item.title">{{item.title}}</a>
    </nav>
  </header>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Logo from './logo.vue';

@Component({
  components: {
    Logo
  }
})
export default class HeaderDesktop extends Vue {
  private menu_items: object[] = [{title: "title1", url: "/ti"}, {title: "title2", url: "/t2"}, {title: "title3", url: "/t3"}, {title: "title4", url: "/t4"}];
  private menu_dark: boolean = false;

  get currentColor(){
    if (this.menu_dark) {
      return {
        back: "#000000 !important",
        logo: "#ffffff",
        icon: "#E5DFD9"
      };
    } else if (location.pathname === "/" || location.pathname === "/cart"  || location.pathname === "/pcHeader") {
      return {
        back: "linear-gradient(to bottom, #25211e 0%, rgba(37,33,30,0) 100%)",
        logo: "#ffffff",
        icon: "#E5DFD9"
      };
    } else {
      return {
        back: "#E5DFD9",
        logo: "#000",
        icon: "#1b1b1b"
      };
    }
  }

  private jumpTo (url: string = ''){
    location.href = url;
  }

  mounted() {
    window.addEventListener("scroll", () => {
      let top = document.documentElement.scrollTop || document.body.scrollTop;
      this.menu_dark = top > 50;
    });
  }
}
</script>
<style lang="stylus">
#header-section
  width: 100vw;
  height: 120px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1001;
  .header-top
    height 69px
    padding 46px 0 16px 0
    text-align center
    color #fff
    .header-operate
      position absolute
      top 20px
      font-size 14px
      svg
        height 16px
        position relative
        top 2px
        margin-right 2px
      span
        text-decoration none
        margin 0 10px
        cursor pointer
      &.header-left
        left 10px
      &.header-right
        right 10px
  .header-nav
    position absolute
    bottom 0
    display flex
    width 100%
    justify-content center
    .header-nav-item
      height 40px
      line-height 20px
      font-size 14px
      display inline-block
      padding 0 15px
      text-decoration none
      letter-spacing 1.34px
      color: #afa9a4;
      position relative
      &:hover
        &:after
          position: absolute;
          display: block;
          content: "";
          left: 50%;
          bottom: 10px;
          height: 0;
          width: 0;
          transform translateX(-50%)
          border: 0 solid transparent;
          border-bottom-color: #fff;
          border-bottom-width: 4px;
          border-left-width: 4px;
          border-right-width: 4px;

</style>
