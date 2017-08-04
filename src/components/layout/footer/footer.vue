<template>
    <div class="com-footer">
        <ul>
            <li>
                <router-link :to="{ path: '/index' }">
                    <span class="nav01">首页</span>
                </router-link>
            </li>
            <li>
                <router-link :to="{ path: '/demos' }">
                    <span class="nav02">demos</span>
                </router-link>
            </li>
            <li>
                <router-link :to="{ path: '/exercise' }">
                    <span class="nav03">exercise</span>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: '',
        components: {},
        data () {
            return {}
        }
    }
</script>

<style lang="scss" rel="stylesheet/scss">
    .com-footer{
        width: 100%;
        height: 1.1rem;
        position: fixed;
        bottom: 0;
        overflow: hidden;
        line-height: 1.65rem;
        background: #fff;
        border-top: 1px solid #e0e0e0;
        ul{
            display: flex;
            li{
                flex: 1;
                text-align: center;
                .nav01{
                    background: url("./nav_01.png") no-repeat center .15rem;
                    background-size: .47rem .47rem;
                }
                .nav02{
                    background: url("./nav_02.png") no-repeat center .15rem;
                    background-size: .44rem .44rem;
                }
                .nav03{
                    background: url("./nav_03.png") no-repeat center .15rem;
                    background-size: .42rem .48rem;
                }
                a{
                    text-decoration: none;
                    color: #5e5e5e;
                    display: block;
                    font-size: .22rem;
                    span{
                        display: block;
                    }
                    &.router-link-active{
                        color: #f44e50 !important;
                        .nav01{
                            background: url("./nav_active01.png") no-repeat center .15rem;
                            background-size: .47rem .47rem;
                        }
                        .nav02{
                            background: url("./nav_active02.png") no-repeat center .15rem;
                            background-size: .44rem .44rem;
                        }
                        .nav03{
                            background: url("./nav_active03.png") no-repeat center .15rem;
                            background-size: .42rem .48rem;
                        }
                    }
                }
            }
        }
    }
</style>
