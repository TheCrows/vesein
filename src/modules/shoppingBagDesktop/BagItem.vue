<template>
    <div class="bag-product">
        <div class="bag-item" v-for="item in bagArr" :key="item.styleCode">
            <div class="bag-img-item">
                <img :src="item.picture" alt="">
            </div>
            <div class="bag-info-item">
                <h1 class="bag-info-title">{{item.productName}}</h1>
                <h3 class="bag-detail-item">
                    Style# {{item.styleCode}}
                </h3>
                <h3 class="bag-detail-item">
                    Style {{item.styleName}}
                </h3>
                <h2 class="bag-second-title">
                    RESERVE FOR BACKORDER
                </h2>
                <h3 class="bag-detail-item">
                    {{item.reserve}}
                </h3>
                <div class="bag-item-but-group">
                    <a>Edit</a> | <a>Remove</a>
                </div>
            </div>
            <div class="bag-price-item">
                <div class="num-select">
                    QTY: {{item.num}}
                    <span class="common-num num-add" @click="numChange('add', item)">+</span>
                    <span class="common-num num-delete" v-show="item.num" @click="numChange('delete', item)">-</span>
                </div>
                <div class="price-contain">{{item.totalPrice}}</div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {}
})
export default class shoppingBagDesktop extends Vue {
    private bagArr: any = [{
        picture: 'https://media.gucci.com/style/Transparent_Center_0_0_250x170/1559837708/596478_1DBJG_6778_001_074_0000_Light.png',
        productName: 'Online Exclusive Preview Gucci 1955 Horsebit bag',
        styleCode: '602204 92TCG 8563',
        styleName: 'GG Supreme/brown',
        reserve: `Your selection is available for immediate purchase online.
                    Please allow 2-8 business days for delivery of your order.`,
        num: 1,
        totalPrice: '$ 790'
    }, {
        picture: 'https://media.gucci.com/style/Transparent_Center_0_0_250x170/1561117503/596478_1DBIG_1292_001_074_0000_Light.png',
        productName: 'Online Exclusive Preview Gucci 1955 Horsebit bag',
        styleCode: '602204 92TCG 6753',
        styleName: 'GG Supreme/brown',
        reserve: `Your selection is available for immediate purchase online.
                    Please allow 2-8 business days for delivery of your order.`,
        num: 1,
        totalPrice: '$ 790'
    }];  
    private debounce(func: any, wait: number) {
        let timeout: any;
        let context = this; //传给目标函数
        return (...restArg: any) => {
            clearTimeout(timeout)
            timeout = setTimeout(
                ()=>{func.apply(context, restArg)} //修复
            , wait)
        }
    }
    private handleNumChange: any;
    private numChange (type: string, caseItem: any){
        type === 'add' ? caseItem.num++ : caseItem.num--
        this.handleNumChange(caseItem);
    }
    created(){
        this.handleNumChange = this.debounce((arg: any) => {
            console.log(arg.num);
        }, 400)
    }
}
</script>

<style lang="stylus">
.bag-product
    .bag-item
        width 100%
        display flex
        padding 44px 0
        border-bottom solid 1px #c8c6c5
        .bag-img-item
            width 25%
            display flex
            img 
                margin auto
                width 100%
        .bag-info-item
            width 40%
            padding-right 24px
            padding-left 6px
            .bag-info-title
                font-weight 200
                font-style normal
                color #1b1b1b
                font-size 16px
                line-height 25px
                margin-bottom 12px
                text-transform none
            .bag-detail-item
                font-weight 400
                font-style normal
                color #999
                font-size 11px
                margin-bottom 12px
            .bag-second-title
                margin-top 30px
                margin-bottom 5px
                font-weight 300
                color #313131
                text-transform uppercase
                line-height 1
            .bag-item-but-group
                margin-top 26px
        .bag-price-item
            width 35%
            border-left solid 1px #dbdada
            padding-left 36px
            display flex
            justify-content space-between
            .num-select
                height 40px
                min-width 60px
                font-size 12px
                padding-left 12px
                line-height 40px
                border solid 1px #c8c6c5
                position relative
                .common-num
                    position absolute
                    cursor pointer
                    font-size 20px
                    font-weight 300
                    &.num-add
                        left -22px
                    &.num-delete
                        right -22px
            .price-contain
                font-size 16px
                font-weight 300
h1, h2, h3 
    margin 0
</style>