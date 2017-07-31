<template>
    <div id="app">
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

    export default {
        name: 'app',
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
