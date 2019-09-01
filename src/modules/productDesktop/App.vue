<template>
  <div id="product-section">
    <product-slider :items="imgArray"></product-slider>
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
      "https://media.gucci.com/style/DarkGray_Center_0_0_490x490/1551807021/550154_0OLFX_8277_001_063_0000_Light-GG.jpg", 
      "https://media.gucci.com/style/DarkGray_Center_0_0_490x490/1551807021/550154_0OLFX_8277_002_063_0000_Light-GG.jpg", 
      "https://media.gucci.com/style/DarkGray_Center_0_0_490x490/1551807022/550154_0OLFX_8277_003_063_0000_Light-GG.jpg", 
      "https://media.gucci.com/style/DarkGray_Center_0_0_490x490/1555353003/550154_0OLFX_8277_005_100_0000_Light-GG.jpg",
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
        id: "2342344454",
        color: "gray",
        image: "https://media.gucci.com/style/DarkGray_Center_0_0_490x490/1560442505/587866_1GZ0X_3154_003_067_0000_Light-Soft-leather-backpack.jpg",
        name: "gray leather"
      },
      {
        id: "2342344454",
        color: "green",
        image: "https://media.gucci.com/style/DarkGray_Center_0_0_490x490/1560442506/587866_1GZ0X_3154_007_100_0000_Light-Soft-leather-backpack.jpg",
        name: "green leather"
      },
      {
        id: "2342344454",
        color: "white",
        image: "https://media.gucci.com/style/DarkGray_Center_0_0_490x490/1560442506/587866_1GZ0X_3154_009_067_0000_Light-Soft-leather-backpack.jpg",
        name: "white leather"
      }
    ]
  };

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
#product-section
  color #000
  
</style>
