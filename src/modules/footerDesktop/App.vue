<template>
  <footer id="footer-section">
    <div class="footer-contain">
      <div class="footer-contain-item"><footer-list :data="footerConfig.service"></footer-list><footer-list :data="footerConfig.needHelp"></footer-list></div>
      <div class="footer-contain-item"><footer-list :data="footerConfig.shopHelp"></footer-list></div>
      <div class="footer-contain-item"><footer-list :data="footerConfig.aboutComp"></footer-list></div>
      <div class="footer-contain-item"><footer-list :data="footerConfig.starUs"></footer-list><footer-list :data="footerConfig.callUs"></footer-list></div>
      <div class="footer-input">
        <icon-group></icon-group>
      </div>
    </div>
    <div class="copyright">© 2016 Lou Vesein S.p.A. - All rights reserved.</div>
  </footer>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import IconGroup from './iconGroup.vue';
import {footerConfig} from './footerConfig';
import FooterList from './footerList.vue';

@Component({
  components: {FooterList, IconGroup}
})
export default class FooterDesktop extends Vue {
  private footerConfig = footerConfig;
}
</script>
<style lang="stylus">
#footer-section
  width: 100%;
  background: #1B1B1B;
  position: relative;
  z-index: 0;
  padding: 48px 15px 15px 15px;
  .footer-contain
    max-width 1215px
    margin 0 auto
    display flex
    .footer-contain-item
      flex-grow 1
    .footer-input
      height 291px
      width 33%
      display flex
      align-items flex-end
  .copyright
    width 1215px
    margin 0 auto
    padding: 0 24px;
    font-family: 'FuturaLT-Book', 'GucciChinese';
    font-size: 12px;
    -webkit-transform: scale(0.91667, 0.91667);
    -moz-transform: scale(1);
    -webkit-transform-origin-x: 0;
    color: rgba(229, 223, 217, 0.5);
    letter-spacing: 0px;

</style>
