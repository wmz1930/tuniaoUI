(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["vipPage-components-custom-swiper-horizontal-custom-swiper"],{2326:function(t,e,i){"use strict";i.r(e);var r=i("5f30"),n=i.n(r);for(var a in r)["default"].indexOf(a)<0&&function(t){i.d(e,t,(function(){return r[t]}))}(a);e["default"]=n.a},"2a66":function(t,e,i){"use strict";var r=i("3de1"),n=i.n(r);n.a},"3de1":function(t,e,i){var r=i("b821");r.__esModule&&(r=r.default),"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var n=i("4f06").default;n("1e0b78e5",r,!0,{sourceMap:!1,shadowMode:!1})},"5f30":function(t,e,i){"use strict";i("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;e.default={name:"VipComponentCustomHorizontalSwiper",data:function(){return{current:0,swiperList:[{title:"图鸟UI 会员促销1",image:"https://tnuiimage.tnkjapp.com/swiper/read.jpg"},{title:"图鸟UI 会员促销2",image:"https://tnuiimage.tnkjapp.com/swiper/read.jpg"},{title:"图鸟UI 会员促销3",image:"https://tnuiimage.tnkjapp.com/swiper/read.jpg"},{title:"图鸟UI 会员促销4",image:"https://tnuiimage.tnkjapp.com/swiper/read.jpg"},{title:"图鸟UI 会员促销5",image:"https://tnuiimage.tnkjapp.com/swiper/read.jpg"}],customSwiperStyle:{transform:"scale(0.7)",transformOrigin:"center center",transition:"all 0.5s ease-out",left:"0px"},prevSwiperStyle:{transform:"scale(0.6) perspective(200rpx) rotateY(10deg)",left:"280rpx"},nextSwiperStyle:{transform:"scale(0.6) perspective(200rpx) rotateY(-10deg)",left:"-280rpx"}}}}},"7b09":function(t,e,i){"use strict";i.r(e);var r=i("dbad"),n=i("2326");for(var a in n)["default"].indexOf(a)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(a);i("2a66");var s=i("f0c5"),o=Object(s["a"])(n["default"],r["b"],r["c"],!1,null,"d8564dbe",null,!1,r["a"],void 0);e["default"]=o.exports},b821:function(t,e,i){var r=i("24fb");e=r(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 下方引入的为Tuniao UI的集成样式文件，为scss预处理器，其中包含了一些"tn-"开头的自定义变量\r\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\r\n * Tuniao UI自定义的css类名和scss变量，均以"tn-"开头，不会造成冲突，请放心使用 \r\n */.vip-component-custom-swiper--horizontal[data-v-d8564dbe]{background-color:#f4f4f4}.swiper[data-v-d8564dbe]{width:100%;height:%?390?%;display:block}.swiper__item uni-image[data-v-d8564dbe]{border-radius:%?10?%;width:100%;height:100%}.swiper__item .text[data-v-d8564dbe]{position:absolute;left:%?10?%;bottom:0;font-size:%?46?%;color:#fff}',""]),t.exports=e},dbad:function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){return r}));var r={tnNavBar:i("5138").default,tnCustomSwiper:i("c718").default,tnCustomSwiperItem:i("37f4").default},n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"vip-component-custom-swiper--horizontal tn-safe-area-inset-bottom"},[i("tn-nav-bar",{attrs:{fixed:!0}},[t._v("图鸟轮播(横向)")]),i("v-uni-view",{style:{paddingTop:t.vuex_custom_bar_height+"px"}},[i("tn-custom-swiper",{staticClass:"swiper",attrs:{current:t.current,intervel:3e3,autoplay:!0,circular:!0,indicatorType:"round",indicator:!0,indicatorPosition:"topCenter",indicatorActiveColor:"#838383",customSwiperStyle:t.customSwiperStyle,prevSwiperStyle:t.prevSwiperStyle,nextSwiperStyle:t.nextSwiperStyle}},[t._l(t.swiperList,(function(e,r){return[i("tn-custom-swiper-item",{key:r+"_0",staticClass:"swiper__item"},[i("v-uni-image",{staticStyle:{width:"100%"},attrs:{src:e.image,mode:"widthFix"}}),i("v-uni-view",{staticClass:"text"},[t._v(t._s(e.title))])],1)]}))],2)],1)],1)},a=[]}}]);