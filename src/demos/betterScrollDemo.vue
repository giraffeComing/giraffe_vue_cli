<template>
    <!--better-scroller的ref要直接跟着一个div结构-->
    <div ref="comBody" class="test">
        <div>
            <ul>
                <li>0、天坑！div ref="comBody" class="test"这个标签里的高度一定要用class来定义，千万不要用style="height:100%" ，这样会导致滑动下面多出一个页面高度的空白区域</li>
                <li>1、import导入better-scroll</li>
                <li>2、挂载点，在最外层要有一个ref,且该挂载点要有一个明确的高度值，用于new BScroll时候的初始化</li>
                <li>3、挂载点内只能有一个根节点</li>
                <li>4、要在this.$nextTick内执行BS的初始化</li>
                <li>5、new BScroll的时候一定要记得click:true，否则页面内的所有点击事件都将失效</li>
                <li>6、如果是axios请求数据，要在数据请求完之后的回调函数中初始化BS</li>
            </ul>
            <div v-for="item in 100">测试</div>
        </div>
    </div>
</template>

<script>
    //    better scroller
    import BScroll from 'better-scroll';
    export default {
        name: '',
        components: {},
        data () {
            return {
                comBodyScroll:''
            }
        },
        mounted(){
            //$nextTick这个方法保证了dom结构加载完成之后再执行
            this.$nextTick(() => {
                //结构复杂的地方再加个延迟
                setTimeout(()=>{
                    this.indexScroll();
                },10)
            })
        },
        methods:{
            indexScroll() {
                this.comBodyScroll = new BScroll(this.$refs.comBody,{
                    click: true,
                    deceleration: 0.001,
                });
            },
        }
    }
</script>

<style scoped lang="scss" rel="stylesheet/scss">
    .test{
        height: 100%;
        overflow: hidden;
        background: #0ff;
    }
</style>
