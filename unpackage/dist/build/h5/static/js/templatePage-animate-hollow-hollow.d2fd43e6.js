(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["templatePage-animate-hollow-hollow"],{"3f53":function(t,a,e){var i=e("24fb");a=i(!1),a.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 下方引入的为Tuniao UI的集成样式文件，为scss预处理器，其中包含了一些"tn-"开头的自定义变量\r\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\r\n * Tuniao UI自定义的css类名和scss变量，均以"tn-"开头，不会造成冲突，请放心使用 \r\n */.tn-custom-nav-bar__back[data-v-8c9c1c6c]{width:100%;height:100%;position:relative;display:flex;justify-content:space-evenly;align-items:center;box-sizing:border-box;background-color:rgba(0,0,0,.15);border-radius:%?1000?%;border:%?1?% solid hsla(0,0%,100%,.5);color:#fff;font-size:18px}.tn-custom-nav-bar__back .icon[data-v-8c9c1c6c]{display:block;flex:1;margin:auto;text-align:center}.tn-custom-nav-bar__back[data-v-8c9c1c6c]:before{content:" ";width:%?1?%;height:110%;position:absolute;top:22.5%;left:0;right:0;margin:auto;-webkit-transform:scale(.5);transform:scale(.5);-webkit-transform-origin:0 0;transform-origin:0 0;pointer-events:none;box-sizing:border-box;opacity:.7;background-color:#fff}\r\n/* 背景图 start */.bottom-backgroup[data-v-8c9c1c6c]{height:%?700?%;z-index:-1}.bottom-backgroup .backgroud-image[data-v-8c9c1c6c]{border-radius:%?60?% %?60?% 0 0;width:100%;height:%?3373?%}\r\n/* 背景图 end */\r\n/* 镂空 start*/.hollow[data-v-8c9c1c6c]{position:fixed;text-align:center;width:87%;padding:%?30?%;margin:0 6.5%;top:%?180?%;font-weight:700;z-index:1000;background:hsla(0,0%,100%,.95);color:#000;border-radius:%?20?%;\r\n  /* overlay; difference;lighten;hue;这些都是参数值，但东东觉得lighten好看点*/mix-blend-mode:lighten}\r\n/* 效果布局 start*/.image-hollow[data-v-8c9c1c6c]{width:%?200?%;height:%?400?%;font-size:%?40?%;font-weight:300;position:relative}.image-pic[data-v-8c9c1c6c]{height:100%;background-size:cover;background-repeat:no-repeat;background-position:top;border-radius:%?10?%}',""]),t.exports=a},5907:function(t,a,e){"use strict";e.r(a);var i=e("b0f4"),n=e.n(i);for(var s in i)["default"].indexOf(s)<0&&function(t){e.d(a,t,(function(){return i[t]}))}(s);a["default"]=n.a},"5a46":function(t,a,e){var i=e("3f53");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=e("4f06").default;n("47031cd3",i,!0,{sourceMap:!1,shadowMode:!1})},7277:function(t,a,e){"use strict";e.d(a,"b",(function(){return n})),e.d(a,"c",(function(){return s})),e.d(a,"a",(function(){return i}));var i={tnNavBar:e("5138").default},n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-uni-view",{staticClass:"template-hollow"},[e("tn-nav-bar",{attrs:{fixed:!0,alpha:!0,customBack:!0}},[e("v-uni-view",{staticClass:"tn-custom-nav-bar__back",attrs:{slot:"back"},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.goBack.apply(void 0,arguments)}},slot:"back"},[e("v-uni-text",{staticClass:"icon tn-icon-left"}),e("v-uni-text",{staticClass:"icon tn-icon-home-capsule-fill"})],1)],1),e("v-uni-view",{style:{paddingTop:t.vuex_custom_bar_height+"px;margin-top:250rpx"}},[e("v-uni-view",{staticClass:"tn-flex tn-flex-row-between tn-margin-xl"},[e("v-uni-view",{staticClass:"justify-content-item",staticStyle:{"margin-top":"50rpx"}},[e("v-uni-view",{staticClass:"tn-radius tn-margin-bottom-xl"},[e("v-uni-view",{staticClass:"image-pic",staticStyle:{"background-image":"url('https://tnuiimage.tnkjapp.com/blogger/avatar_3.jpeg')"}},[e("v-uni-view",{staticClass:"image-hollow"})],1),e("v-uni-view",{staticClass:"tn-text-center tn-text-bold tn-padding-top-xs"},[t._v("Jaylen")])],1),e("v-uni-view",{staticClass:"tn-radius tn-margin-bottom"},[e("v-uni-view",{staticClass:"image-pic",staticStyle:{"background-image":"url('https://tnuiimage.tnkjapp.com/blogger/avatar_2.jpeg')"}},[e("v-uni-view",{staticClass:"image-hollow"})],1),e("v-uni-view",{staticClass:"tn-text-center tn-text-bold tn-padding-top-xs"},[t._v("浅浅遇")])],1)],1),e("v-uni-view",{staticClass:"justify-content-item"},[e("v-uni-view",{staticClass:"tn-radius tn-margin-bottom-xl"},[e("v-uni-view",{staticClass:"image-pic",staticStyle:{"background-image":"url('https://tnuiimage.tnkjapp.com/blogger/avatar_1.jpeg')"}},[e("v-uni-view",{staticClass:"image-hollow"})],1),e("v-uni-view",{staticClass:"tn-text-center tn-text-bold tn-padding-top-xs"},[t._v("可我会像")])],1),e("v-uni-view",{staticClass:"tn-radius tn-margin-bottom"},[e("v-uni-view",{staticClass:"image-pic",staticStyle:{"background-image":"url('https://tnuiimage.tnkjapp.com/blogger/blogger_beibei.jpg')"}},[e("v-uni-view",{staticClass:"image-hollow"})],1),e("v-uni-view",{staticClass:"tn-text-center tn-text-bold tn-padding-top-xs"},[t._v("北北同学")])],1)],1),e("v-uni-view",{staticClass:"justify-content-item",staticStyle:{"margin-top":"50rpx"}},[e("v-uni-view",{staticClass:"tn-radius tn-margin-bottom-xl"},[e("v-uni-view",{staticClass:"image-pic",staticStyle:{"background-image":"url('https://tnuiimage.tnkjapp.com/blogger/avatar_4.jpeg')"}},[e("v-uni-view",{staticClass:"image-hollow"})],1),e("v-uni-view",{staticClass:"tn-text-center tn-text-bold tn-padding-top-xs"},[t._v("福哥")])],1),e("v-uni-view",{staticClass:"tn-radius tn-margin-bottom"},[e("v-uni-view",{staticClass:"image-pic",staticStyle:{"background-image":"url('https://tnuiimage.tnkjapp.com/blogger/content_1.jpeg')"}},[e("v-uni-view",{staticClass:"image-hollow"})],1),e("v-uni-view",{staticClass:"tn-text-center tn-text-bold tn-padding-top-xs"},[t._v("锋哥")])],1)],1)],1)],1),e("v-uni-view",{staticClass:"bottom-backgroup"},[e("v-uni-image",{staticClass:"backgroud-image",attrs:{src:"https://tnuiimage.tnkjapp.com/animate/hollow.jpg",mode:"widthFix"}})],1),e("v-uni-view",{staticClass:"hollow"},[e("v-uni-view",{staticClass:"tn-text-xxl"},[e("v-uni-text",{},[t._v("Hi，图鸟的小伙伴")])],1),e("v-uni-view",{staticClass:"tn-text-xl tn-padding-top"},[t._v("技术的友情，有你真好")]),e("v-uni-view",{staticClass:"tn-text-xl tn-padding-top"},[t._v("TnUI，感谢一路陪伴与支持")])],1)],1)},s=[]},"7e6c":function(t,a,e){var i=e("c973").default;e("96cf"),t.exports={data:function(){return{}},onLoad:function(){this.updateCustomBarInfo()},methods:{goBack:function(){var t=getCurrentPages();if(t&&t.length>0){var a=t[0];1!=t.length||a.route&&"pages/index/index"==a.route?uni.navigateBack({delta:1}):uni.reLaunch({url:"/pages/index/index"})}else uni.reLaunch({url:"/pages/index/index"})},updateCustomBarInfo:function(){var t=this;return i(regeneratorRuntime.mark((function a(){var e,i,n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(e=t.vuex_custom_bar_height,i=t.vuex_status_bar_height,e){a.next=15;break}return a.prev=3,a.next=6,t.$tn.updateCustomBar();case 6:n=a.sent,e=n.customBarHeight,i=n.statusBarHeight,a.next=15;break;case 11:return a.prev=11,a.t0=a["catch"](3),setTimeout((function(){t.updateCustomBarInfo()}),10),a.abrupt("return");case 15:t.$tn.vuex("vuex_status_bar_height",i),t.$tn.vuex("vuex_custom_bar_height",e);case 17:case"end":return a.stop()}}),a,null,[[3,11]])})))()}}}},a28d:function(t,a,e){"use strict";e.r(a);var i=e("7277"),n=e("5907");for(var s in n)["default"].indexOf(s)<0&&function(t){e.d(a,t,(function(){return n[t]}))}(s);e("e4a0");var o=e("f0c5"),r=Object(o["a"])(n["default"],i["b"],i["c"],!1,null,"8c9c1c6c",null,!1,i["a"],void 0);a["default"]=r.exports},b0f4:function(t,a,e){"use strict";e("7a82");var i=e("4ea4").default;Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n=i(e("7e6c")),s={name:"TemplateHollow",mixins:[n.default],data:function(){return{}},methods:{}};a.default=s},c973:function(t,a,e){function i(t,a,e,i,n,s,o){try{var r=t[s](o),c=r.value}catch(u){return void e(u)}r.done?a(c):Promise.resolve(c).then(i,n)}e("d3b7"),t.exports=function(t){return function(){var a=this,e=arguments;return new Promise((function(n,s){var o=t.apply(a,e);function r(t){i(o,n,s,r,c,"next",t)}function c(t){i(o,n,s,r,c,"throw",t)}r(void 0)}))}},t.exports.__esModule=!0,t.exports["default"]=t.exports},e4a0:function(t,a,e){"use strict";var i=e("5a46"),n=e.n(i);n.a}}]);