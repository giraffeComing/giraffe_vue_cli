<template>
    <div class="alldemos">
        <ul class="licai-routers">
            <li><router-link :to="{ path: '/demos/api' }">API</router-link></li>
            <li><router-link :to="{ path: '/demos/betterScroll' }">BS</router-link></li>
            <li><router-link :to="{ path: '/demos/swiper' }">SWIPER</router-link></li>
        </ul>
        <transition name="bounce" mode="out-in">
            <router-view></router-view>
        </transition>
        <v-footer></v-footer>
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
    .bounce-enter-active {
        animation: bounce-in .5s;
    }
    .bounce-leave-active {
        animation: bounce-in .5s reverse;
    }
    @keyframes bounce-in {
        0% {
            transform: scale(0);
        }
        50% {
            transform: scale(1.2);
        }
        100% {
            transform: scale(1);
        }
    }

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
                height: .6rem;
                line-height: .6rem;
                color: #fff;
                &.router-link-active{
                    color: red;
                }
            }
        }
    }
    .alldemos{
        height: 100%;
    }
</style>
