<template>
  <div id="product-section">
    <product-slider :items="imgArray"></product-slider>
    <div class="product-into">
      <div class="top-tip">Complimentary Express Shipping and Returns</div>
      <div class="product-name">{{product.title}}</div>
      <span class="divider"></span>
      <div class="product-price">$ {{product.price}}</div>
      <div class="type-choose">
        <span class="variant-color" :style="{background: currentVariant.color}"></span>
        <span class="variant-name">{{currentVariant.name}}</span>
      </div>
      <div class="is-avaliable">AVAILABLE</div>
      <div class="is-avaliable-detail">Your selection is available for immediate purchase online.</div>
      <div class="add-btn">Add to Shopping Bag</div>
    </div>
    <section class="product-detail">
      <div class="variants-choose">
        <div class="variants-title">VARIATIONS ({{product.variant.length}})</div>
        <div class="variants-pics">
          <img v-for="item in product.variant" :key="item.id" @click="currentVariant = item" :src="item.image" alt="">
        </div>
        <div class="materials-care">
          <div class="mc-title">MATERIALS AND CARE</div>
          <div class="accordion-drawer" v-html="product.introduce.materialsAndCare"></div>
        </div>
      </div>
      <div class="product-right-detail" >
        <img class="produce-img" :src="currentVariant.image" alt="">
        <p class="product-title">PRODUCT DETAILS</p>
        <p class="product-name">{{currentVariant.name}}</p>
        <div class="product-detail-info" v-html="product.introduce.data"></div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ProductSlider from '../../components/productSlider.vue';

@Component({
  components: {
    ProductSlider
  }
})
export default class productDesktop extends Vue {
  private product: any = {
    title: "Women's handbags",
    price: "100",
    id: "123456663",
    images: [
      "https://media.gucci.com/style/DarkGray_Center_0_0_490x490/1555353003/550154_0OLFX_8277_005_100_0000_Light-GG.jpg",
      "https://media.gucci.com/style/DarkGray_Center_0_0_490x490/1551807021/550154_0OLFX_8277_001_063_0000_Light-GG.jpg", 
      "https://media.gucci.com/style/DarkGray_Center_0_0_490x490/1551807021/550154_0OLFX_8277_002_063_0000_Light-GG.jpg", 
      "https://media.gucci.com/style/DarkGray_Center_0_0_490x490/1551807022/550154_0OLFX_8277_003_063_0000_Light-GG.jpg", 
      "https://media.gucci.com/style/DarkGray_Center_0_0_490x490/1560442506/587866_1GZ0X_3154_009_067_0000_Light-Soft-leather-backpack.jpg",
      "https://media.gucci.com/style/DarkGray_Center_0_0_490x490/1560442505/587866_1GZ0X_3154_003_067_0000_Light-Soft-leather-backpack.jpg"
      ],
    model_images: [],
    variant: [
      {
        id: "1234444",
        color: "#ff0000",
        image: "https://media.gucci.com/style/Transparent_Center_0_0_250x170/1559837708/596478_1DBJG_6778_001_074_0000_Light.png",
        name: "Red leather"
      },
      {
        id: "2342344454",
        color: "blue",
        image: "https://media.gucci.com/style/Transparent_Center_0_0_250x170/1561117503/596478_1DBIG_1292_001_074_0000_Light.png",
        name: "blue leather"
      },
      {
        id: "23423444541",
        color: "gray",
        image: "https://media.gucci.com/style/DarkGray_Center_0_0_490x490/1560442505/587866_1GZ0X_3154_003_067_0000_Light-Soft-leather-backpack.jpg",
        name: "gray leather"
      }
    ],
    introduce: {
      data: `<p>The messenger bag is reimagined for Pre-Fall 2019 with the season's newest iteration of the GG pattern, printed with leaping tigers scattered across the black and grey GG Supreme base. Finished with a front zipper pocket and a blue and red Web strap that can be adjusted to be worn on the shoulder or cross body.</p>
              <ul>
                <li>Black/grey GG Supreme canvas with tigers print, a material with low environmental impact </li>
                <li>Black leather trim</li>
                <li>Palladium-toned hardware </li>
                <li>Blue and red Web strap</li>
                <li>Gucci trademark leather tag detail</li>
                <li>Front zipper pocket </li>
                <li>Interior zipper and smartphone pockets </li>
                <li>Adjustable nylon strap with 20.5" drop and leather shoulder pad</li>
                <li>Zipper closure </li>
                <li>10.5"W x 11"H x 2"D</li>
                <li>Cotton linen lining</li>
                <li>Made in Italy </li>
                <li>The model is 6'2" tall</li>
              </ul>`,
        materialsAndCare: `<p>Gucci products are made with carefully selected materials. Please handle with care for longer product life.</p><ul><li>Protect from direct light, heat and rain. Should it become wet, dry it immediately with a soft cloth</li><li>Fill the bag with tissue paper to help maintain its shape and absorb humidity, and store in the provided flannel bag</li><li>Do not carry heavy products that may affect the shape of the bag</li><li>Clean with a soft, dry cloth</li></ul><p></p>`
    },
  };

  private currentVariant: object = this.product.variant[0];

  get imgArray() {
    return this.product.images.map((item: any, index: number) => {
      return {
        id: index,
        image: item
      }
    });
  }
}
</script>
<style lang="stylus">
common-par()
  display: inline-block;
  padding-right: 0;
  padding-left: 0;
  float: left;
  overflow: hidden;
  font-size 12px
  color #4b4b4b
  ul
    list-style: disc;
    margin: 10px 0;
    padding-bottom: 10px;
    padding-left: 16px;
    li  
      list-style: disc;
      display: list-item;
      text-align: -webkit-match-parent;

#product-section
  color #000
  position relative
  background rgb(231,231,231)
  .product-slider
    z-index 1
  .product-into
    width 20vw
    padding-top: 14px;
    top: calc(120px + 10px);
    position absolute
    left 50%
    transform translateX(-50%)
    text-align center
    z-index 2
    .divider
      height: 1px;
      background-color: #c8c6c5;
      display: block;
    .top-tip
      font-size 11px
      color #999
    .product-name
      margin-bottom: 9px;
      padding-top 40px
      font-size: 18px;
      line-height: 24px;
      letter-spacing: 2px;
      color: #1b1b1b;
      font-weight 200
    .product-price
      font-size: 16px;
      color: #4b4b4b;
      font-weight: 400;
      padding: 12px 0 8px 0;
    .type-choose
      padding 7px
      cursor pointer
      .variant-color
        height 24px
        width 24px
        border-radius 50%
        display inline-block
        position relative
        top 8px
      .variant-name
        vertical-align: middle;
        display: inline-block;
        line-height: 35px;
        margin-left: 10px;
        overflow: hidden;
        white-space: nowrap;
        max-width: 111px;
        text-overflow: ellipsis;
        color: #1b1b1b;
        position: relative;
        padding-right: 20px;
        font-size 12px
    .is-avaliable
      font-size 12px
      font-weight: 400;
      color: #313131;
      text-transform: uppercase;
      line-height: 1;
      margin-top 20px
    .is-avaliable-detail
      color: #999;
      margin: 5px 0 15px;
      line-height: 16px;
      font-size 10px
    .add-btn
      min-height: 40px;
      height: auto;
      width: 80%;
      padding: 12px 10px;
      font-size: 12px;
      box-sizing: border-box;
      font-weight: 400;
      font-style: normal;
      background-color: #1b1b1b;
      border-color: #1b1b1b;
      color: #e5dfd9;
      cursor: pointer;
      display: block;
      margin: 6px auto;
      line-height: 13px;
  .product-detail
    width: 100%;
    padding: 50px 30px;
    margin: 0;
    box-sizing border-box
    background: rgba(255,255,255,0.8);
    display flex
    z-index 3
    position relative
    .variants-choose
      color: #1b1b1b;
      width 70%
      .materials-care
        margin-top 20px
        line-height 26px
        padding 0 22px
        .mc-title
          border-top: 1px solid #c8c6c5;
          color: #1b1b1b;
          cursor: pointer;
          padding: 30px 0px 10px;
          position: relative;
          text-transform: uppercase;
          font-size: 12px;
          line-height: 1;
          letter-spacing: initial;
          font-variant-ligatures: none;
          font-weight: 400;
          font-style: normal;
        .accordion-drawer
          font-size 12px
          common-par()
      .variants-title
        font-size: 12px;
        letter-spacing: initial;
        font-variant-ligatures: none;
        font-weight: 400;
        font-style: normal;
        line-height: 1;
        margin-bottom: 20px;
        padding: 0 8px;
        text-transform: uppercase;
      .variants-pics
        overflow-x auto
        width 100%
        white-space nowrap
        img
          height 160px
          padding: 0 5px;
          cursor pointer
    .product-right-detail      
      flex-grow 1
      background #fff
      width 30%
      display flex
      flex-direction column
      padding 20px 22px
      line-height 26px
      p
        margin 0
      .product-title
        color: #1b1b1b;
        border-top: none;
        padding: 0 0 15px;
        pointer-events: none;
      .produce-img
        margin 10px auto 24px
        max-width 200px
      .product-detail-info
        common-par()
      .product-name
        display: block;
        font-size: 12px;
        margin: 0 0 20px;
        color: #999;
</style>
