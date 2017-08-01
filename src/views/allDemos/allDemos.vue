<template>
    <div class="alldemos">
        <ul class="licai-routers">
            <li><router-link :to="{ path: '/demos/api' }">API</router-link></li>
            <li><router-link :to="{ path: '/demos/betterScroll' }">BS</router-link></li>
            <li><router-link :to="{ path: '/demos/swiper' }">SWIPER</router-link></li>
        </ul>
        <router-view></router-view>
    </div>
</template>

<script>
    import VHeader from '../../components/layout/header/header.vue'
    import VFooter from '../../components/layout/footer/footer.vue'
    import VContainer from '../../components/layout/container/container.vue'
    export default {
        name: '',
        components: {
            VHeader,
            VFooter,
            VContainer
        },
        data () {
            return {
                headerData:{
                    name:"首页",
                    tag:"问问",
//                    extra:"10086"
                },
            }
        }
    }
</script>

<style scoped lang="scss" rel="stylesheet/scss">
    .licai-routers{
        position: fixed;
        top:0;
        display: flex;
        width: 100%;
        justify-content: space-between;
        z-index: 999;
        li{
            text-align: center;
            a{
                text-decoration: none;
                display: block;
                background: orange;
                width: 2rem;
            }
        }
    }
    .alldemos{
        height: 100%;
    }
</style>
