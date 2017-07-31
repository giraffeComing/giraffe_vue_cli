<!--轮播 调用轮播的时候传入相应的轮播配置和数据-->
```
<v-swiper :opts="swiperOpts" :dataVal="imgs"></v-swiper>

swiperOpts:{
    pagination: '.swiper-pagination',
//  nextButton: '.swiper-button-next',
//  prevButton: '.swiper-button-prev',
    slidesPerView: 1,
    speed:800,
    paginationClickable: true,
    loop: true,
    autoplay: 4000,
}
imgs:[
     {
       "imgSrc":"../../static/imgs/banner01.jpg",
       "href":"http://www.sina.com.cn/",
      },
     {
       "imgSrc":"../../static/imgs/banner01.jpg",
       "href":"http://www.sina.com.cn/",
      },
      {
      "imgSrc":"../../static/imgs/banner01.jpg",
      "href":"http://www.sina.com.cn/",
      },
],

```