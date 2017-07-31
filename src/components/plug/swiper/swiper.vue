<template>
    <div class="common-swiper">
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="item in dataVal">
                    <a :href="item.href"><img :src="item.imgSrc"/></a>
                </div>
            </div>
            <!--分页及按钮-->
            <div class="swiper-pagination"></div>
            <!--<div class="swiper-button-next"><i class="fa fa-angle-right"></i></div>-->
            <!--<div class="swiper-button-prev"><i class="fa fa-angle-left"></i></div>-->
        </div>
    </div>
</template>
<script>
    //引入swiper
    import swiper from 'swiper';
    import swipercss from 'swiper/dist/css/swiper.css';
    export default{
        name: 'Swiper',
        props:{
            //swiper的配置项
            opts:{},
            //swiper的数据
            dataVal:{
                type:Array
            },
        },
        data(){
            return {

            }
        },
        mounted(){
            //挂在完成之后初始化swiper
            var commonSwiper = new Swiper('.swiper-container', this.opts);
        }
    }
</script>
<style lang="scss" rel="stylesheet/scss">
    .common-swiper{
        .swiper-container {
            width: 100%;
            height: 3.5rem;
        }
        .swiper-slide {
            text-align: center;
            font-size: 18px;
            background: #fff;
            display: flex;
            justify-content: center;
            align-items: center;
            a{
                display: block;
                width: 100%;
                height: 100%;
            }
            img{
                width: 100%;
                height: 100%;
            }
        }
        .swiper-pagination-bullet{
            width: .12rem;
            height: .12rem;
        }
        .swiper-pagination-bullet-active{
            background: #333 !important;
        }
    }
</style>