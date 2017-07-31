<template>
    <div id="app">
        <img src="./assets/logo.png">
        <router-view></router-view>
    </div>
</template>
<script>
//    样式重置
    import reset from './assets/scss/reset.scss';
//    变量
    import global from './assets/scss/global.scss';
//    全局样式
    import base from './assets/scss/base.scss';
    import {FUND} from './api/fund/fund';
    import {USER} from './api/user/user';

    export default {
        name: 'app',
        created:function () {
            console.log(FUND().fundList)
            console.log(USER())
//            this.axios.get(API_ROOT+'/api/productfund/index?type=A')
//                .then((response) => {
//                    this.listData=response.data.data;
//                    //$nextTick这个方法保证了dom结构加载完成之后再执行
//                    this.$nextTick(() => {
//                        //结构复杂的地方再加个延迟
//                        setTimeout(()=>{
//                            this.indexScroll();
//                        },300)
//                    })
//                })
//                .catch((error) => {
//                    console.log('error')
//                });
        },
        mounted:function(){
            let resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
                recalc = function() {
                    //设置根字体大小
                    document.getElementsByTagName("html")[0].style.fontSize = document.documentElement.clientWidth/7.5+"px";
                };
            //绑定浏览器缩放与加载时间
            window.addEventListener(resizeEvt, recalc, false);
            document.addEventListener('DOMContentLoaded', recalc, false);
        },
    }

</script>

<style lang="scss" type="text/css">

</style>
