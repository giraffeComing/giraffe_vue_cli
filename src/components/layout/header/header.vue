<template>
    <div class="header-border">
        <div class="header-back">
            <span class="btn-back" @click="backTo"></span>
            {{opts.name}}
            <span class="tag" v-if="opts.tag">{{opts.tag}}</span>
        </div>
        <!--如果opts里有extra字段就显示额外的拓展信息，extra字段不存在的话就隐藏-->
        <div class="heder-solt" v-if="opts.extra">{{opts.extra}}</div>
    </div>
</template>

<script>
    export default {
        name: 'HeaderBack',
        components: {},
        props:{
            opts:''
        },
        data () {
            return {}
        },
        methods: {
            backTo(){
//                通过路由返回上一页
                this.$router.go(-1)
            },
        }
    }
</script>

<style scoped lang="scss" rel="stylesheet/scss">
    .header-border{
        position: fixed;
        top:0;
        width: 100%;
        border-bottom: 1px solid #e9ebed;
        color: #666;
        background: #fff;
    }
    .heder-solt{
        height: .6rem;
        text-align: center;
        font-size: .3rem;
        margin-top: -.2rem;
    }
    .header-back{
        position: relative;
        height: 1rem;
        text-align: center;
        line-height: 1rem;
        font-size: .36rem;
        .btn-back{
            display: block;
            position: absolute;
            left: 0;
            top: 0;
            width: 1rem;
            height: 1rem;
            background: url("./backbg.png") no-repeat;
            background-size: .23rem .45rem;
            background-position: .2rem center;
        }
        .tag{
            display: block;
            position: absolute;
            right: 0;
            top: 0;
            height: 1rem;
            color: #5781bd;
            font-size: .3rem;
            padding: 0 .2rem;
        }
    }
</style>
