<template>
    <div class="recommend">
        <div class="recommend-title" v-if="type === 'recommend'">You May Also Like</div>
        <div class="recommend-list" v-if="type === 'recommend'">
            <div v-for="item in recommendData" class="recommend-item" :key="item.code">
                <div class="recommend-item-img"><img :src="item.picture" alt=""></div>
                <div class="recommend-item-name">{{item.name}}</div>
                <div class="recommend-item-price">{{item.price}}</div>
                <div class="recommend-item-buy">SHOP THIS ></div>
            </div>
        </div>
        <div v-if="type === 'recent'" class="recent-list">
            <div class="recent-item">
                <p class="recent-title">Recently Viewed</p>
                <p class="recent-des">Items you have recently viewed.</p>
            </div>
            <div v-for="item in recommendData" class="recent-item" :key="item.code">
                <div class="recommend-item-img"><img :src="item.picture" alt=""></div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Prop} from 'vue-property-decorator';

@Component
export default class recommend extends Vue {
    @Prop({default: 'recommend'})
    private type!: string;

  private recommendData: any = [{
    picture: 'https://media.gucci.com/style/Transparent_Center_0_0_250x170/1559837708/596478_1DBJG_6778_001_074_0000_Light.png' ,
    name: 'Asymmetric pinstripe jacket with stitching',
    code: '12',
    price: '$ 3,700'
    },{
    picture: 'https://media.gucci.com/style/Transparent_Center_0_0_250x170/1559837708/596478_1DBJG_6778_001_074_0000_Light.png' ,
    name: 'Asymmetric pinstripe jacket with stitching',
    code: '13',
    price: '$ 3,700'
    },{
    picture: 'https://media.gucci.com/style/Transparent_Center_0_0_250x170/1559837708/596478_1DBJG_6778_001_074_0000_Light.png' ,
    name: 'Asymmetric pinstripe jacket with stitching',
    code: '14',
    price: '$ 3,700'
    },{
    picture: 'https://media.gucci.com/style/Transparent_Center_0_0_250x170/1559837708/596478_1DBJG_6778_001_074_0000_Light.png' ,
    name: 'Asymmetric pinstripe jacket with stitching',
    code: '15',
    price: '$ 3,700'
    }];


  
}
</script>

<style lang="stylus">
.recommend
    width 100%
    display flex
    flex-direction column 
    background #ffffff
    padding-bottom 30px
    .recommend-title
        border: none;
        background-color: transparent;
        font-size: 23px;
        font-weight: 200;
        font-style: normal;
        letter-spacing: 1px;
        font-variant-ligatures: none;
        padding: 0;
        border-bottom: 1px solid transparent;
        padding-bottom: 2px;
        transition: border 0.3s;
        margin 40px auto 20px
    .recommend-list
        display flex
        padding 0 40px
        .recommend-item
            flex-grow 1
            display flex
            flex-direction column
            width 25%
            align-items center
            .recommend-item-img
                background #e6e6e6
                width 97%
                display flex
                padding 30px 0 50px
                height 350px
                box-sizing border-box
                align-items center
                justify-content center
            .recommend-item-name
                font-weight: 400;
                font-style: normal;
                color: #313131;
                text-transform: none;
                padding: 12px 10px;
                margin-top: 12px;
                font-size: 14px;
                line-height: normal;
                letter-spacing: 1px;
                font-variant-ligatures: none;
            .recommend-item-price
                font-weight: 200;
                font-style: normal;
                color: #4b4b4b;
                padding: 0 10px;
                font-size: 14px;
                line-height: normal;
                letter-spacing: 1px;
                font-variant-ligatures: none;
            .recommend-item-buy
                font-weight: 600;
                font-style: normal;
                letter-spacing: 2px;
                font-variant-ligatures: none;
                font-size: 12px;
                position: relative;
                margin-top: 16px;
    .recent-list
        display flex
        border solid 1px
        border-color #e7e7e7 transparent
        .recent-des
            font-size: 11px;
        .recent-title
            ont-size: 20px;
            line-height: 22px;
            padding: 0 30px;
        .recent-item
            width 20%
            height 340px
            display flex
            align-items center
            justify-content center
            flex-direction column
        .recent-item~.recent-item
            border-left solid 1px #e7e7e7
                
    
    
</style>