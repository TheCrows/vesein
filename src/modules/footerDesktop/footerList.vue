<template>
    <div class=" footer-list">
        <div class="list-title" v-if="data.name">{{data.name}}</div>
        <div v-for="item in data.list" class="list-item" :key="item.name" @click="jumpTo(item.url)">
            <i :class="item.icon" v-if="item.icon"></i>{{item.name}}
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class FooterList extends Vue {
    @Prop({required: true})
    private data!: object;

    private jumpTo (url: string = ''){
        location.href = url;
    }
}
</script>

<style lang="stylus">
    .footer-list
        margin-bottom 50px
        .list-title
            font-size: 12px;
            color: #E5DFD9;
            opacity: .5;
            letter-spacing: 0;
            margin-bottom: 28px;
        .list-item
            display: block;
            font-size: 11px;
            -webkit-transform: scale(0.91667, 0.91667);
            -moz-transform: scale(1);
            -webkit-transform-origin-x: 0;
            color: #e5dfd9;
            letter-spacing: 0;
            vertical-align: middle;
            margin-bottom: 13.4px;
            cursor pointer
            &:hover
                color #fff
            i
                color rgba(229,223,217,0.5)
                margin-right 8px
                position relative
                top 1px
</style>