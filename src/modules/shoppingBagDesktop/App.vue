<template>
  <div id="shopping-bag-section">
    <header class="bag-header">
      <div class="bag-title">SHOPPING BAG</div>
    </header>
    <div class="bag-main-contain">
      <div class="shopping-bag-wrapper">
        <div class="shopping-bag-content">
          <div class=shopping-bag-column>
            <h2 class="eyebrow">eyebrow</h2>
            <bag-item></bag-item>
          </div>
          <div class="order-summary">
            <div class="order-details-summary">
              <h2 class="order-summary-title">Order Summary</h2>
              <ul class="order-details-totals">
                <li><span class="item-name">Subtotal</span><span classd="item-detail">{{summaryData.Subtotal}}</span></li>
                <li><span class="item-name">Shipping</span><span classd="item-detail">{{summaryData.Shipping}}</span></li>
                <li><span class="item-name">Estimated Tax</span><span classd="item-detail">{{summaryData.EstimatedTax}}</span></li>
                <li><span class="item-name">Estimated Total</span><span classd="item-detail">{{summaryData.EstimatedTotal}}</span></li>
              </ul>
              <div class="accordion-item">
                <p class="order-details-availability-note">You will be charged at the time of shipment. If this is a personalized or made-to-order purchase, you will be charged at the time of purchase.</p>
              </div>
              <a class="button-standard" href="/">Checkout</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <recommend></recommend>
        <recommend type="recent"></recommend>

  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import BagItem from './BagItem.vue';
import Recommend from '../../components/Recommend.vue';

@Component({
  components: {BagItem, Recommend}
})
export default class shoppingBagDesktop extends Vue {
  private summaryData: any={
    Subtotal: '$ 5,390',
    Shipping: 'Free  (Standard)',
    EstimatedTax: 'Calculate',
    EstimatedTotal: '$ 5,390'
  }
}
</script>
<style lang="stylus">
#shopping-bag-section
  .bag-header
    width 100vw
    height 327px
    background-image url('../../assets/bagheader.jpeg')
    background-size 100% auto
    background-position center -100px
    background-attachment fixed
    .bag-title
      box-sizing border-box
      background rgba(17, 17, 17, 0.22);
      height 100%
      width 100%
      padding-top: 190px;
      text-align center
      color #fff
      font-size: 46px;
      letter-spacing: 2px;
      font-weight 200
      font-variant-ligatures: none;
      line-height: 50px;
      text-transform: uppercase;
  .bag-main-contain
    margin-left: auto;
    margin-right: auto;
    padding-left: 15px;
    padding-right: 15px;
    text-align: left;
    background: #fff;
    padding-bottom: 15px;
    padding-top: 15px;
    position: relative;
    .shopping-bag-wrapper
      width 100%
      background-color: #e7e7e7;
      .shopping-bag-content 
        margin: 0 auto;
        max-width: 1200px;
        padding: 53px 30px;
        .shopping-bag-column
          box-sizing: border-box;
          display: inline-block;
          font-size: 12px;
          margin-right: 20px;
          padding-left: 0;
          padding-right: 0;
          position: relative;
          vertical-align: top;
          width: calc(100% - 370px);
          .eyebrow
            padding 0 0 10px
            color: #999;
            letter-spacing: 2px;
            font-variant-ligatures: none;
            line-height: 12px;
            font-weight: 200;
            font-style: normal;
            display: block;
            font-size: 12px;
            box-sizing border-box
            text-transform: uppercase;
            border-bottom solid 1px #999
        .order-summary
            width: 345px;
            display: inline-block;
            vertical-align: top;
          .order-details-summary
            background-color: #fff;
            border-bottom: 1px solid #e7e7e7;
            padding: 0 25px;
            margin-bottom: 28px;
            .order-summary-title
              font-weight: 400;
              font-style: normal;
              border-bottom: 1px solid #e7e7e7;
              font-size: 12px;
              letter-spacing: 2px;
              font-variant-ligatures: none;
              text-transform: uppercase;
              color: #999;
              padding: 28px 0 15px 0;
              line-height: initial;
            .order-details-totals
              padding: 23px 0 38px;
              border-bottom: 1px solid #e7e7e7;
              li
                font-weight: 600;
                font-style: normal;
                color: #666;
                font-size: 12px;
                margin-bottom: 18px;
                display flex
                justify-content space-between
            .accordion-item
              border-bottom: 1px solid #e7e7e7;
              .order-details-availability-note
                font-family: Times New Roman,"Times New Roman",Times,Baskerville,Georgia,serif;
                font-weight: 400;
                font-style: italic;
                color: #999;
                line-height: 18px;
                font-size: 12px;
                padding: 0 0 18px;
            .button-standard
              margin-bottom: 7px;
              min-width: inherit;
              width: 100%;
              background-color: #1b1b1b;
              border: none;
              color: #e5dfd9;
              box-sizing: border-box;
              font-weight: 400;
              font-style: normal;
              cursor: pointer;
              display: inline-block;
              font-size: 12px;
              height: 40px;
              letter-spacing: 1px;
              font-variant-ligatures: none;
              line-height: 36px;
              min-width: 234px;
              padding: 0 10px;
              text-align: center;
              text-transform: uppercase;
              margin 20px 0
              text-decoration: none;

</style>
