(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["vipPage-components-scroll-view-custom-scroll-view"],{2459:function(e,t,n){"use strict";n.r(t);var i=n("ac74"),s=n("6781");for(var r in s)["default"].indexOf(r)<0&&function(e){n.d(t,e,(function(){return s[e]}))}(r);n("91a4");var a=n("f0c5"),o=Object(a["a"])(s["default"],i["b"],i["c"],!1,null,"ff85cb40",null,!1,i["a"],void 0);t["default"]=o.exports},"61b2":function(e,t,n){"use strict";n("7a82"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i={name:"VipComponentBasicScrollView",data:function(){return{refreshState:!1,refreshText:"下拉刷新",refreshIconRevolve:!1}},methods:{handleRefresh:function(){var e=this;this.refreshState=!0,this.refreshText="正在刷新",setTimeout((function(){e.refreshState=!1,e.resetRefresh()}),2e3)},handleRefreshReady:function(){this.refreshText="松开刷新",this.refreshIconRevolve=!0},resetRefresh:function(){this.refreshText="下拉刷新",this.refreshIconRevolve=!1}}};t.default=i},6781:function(e,t,n){"use strict";n.r(t);var i=n("61b2"),s=n.n(i);for(var r in i)["default"].indexOf(r)<0&&function(e){n.d(t,e,(function(){return i[e]}))}(r);t["default"]=s.a},"8ac5":function(e,t,n){var i=n("24fb");t=i(!1),t.push([e.i,'@charset "UTF-8";\r\n/**\r\n * 下方引入的为Tuniao UI的集成样式文件，为scss预处理器，其中包含了一些"tn-"开头的自定义变量\r\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\r\n * Tuniao UI自定义的css类名和scss变量，均以"tn-"开头，不会造成冲突，请放心使用 \r\n */.scroll-view__content .list__item[data-v-ff85cb40]{height:%?140?%;margin:0 %?10?%;margin-top:%?24?%}.scroll-view__content .list__image[data-v-ff85cb40]{width:%?140?%;height:%?140?%}.scroll-view__content .list__image uni-image[data-v-ff85cb40]{width:100%;height:100%}.scroll-view__content .list__content[data-v-ff85cb40]{padding-left:%?16?%;height:100%;width:%?580?%}.scroll-view__content .list__content__title[data-v-ff85cb40]{padding-bottom:%?10?%;font-size:%?40?%}.scroll-view__content .list__content__desc[data-v-ff85cb40]{width:100%}.refresh[data-v-ff85cb40]{display:flex;align-items:center;justify-content:center;line-height:%?40?%;text-align:center}.refresh__icon[data-v-ff85cb40]{transition:-webkit-transform .25s ease-in-out;transition:transform .25s ease-in-out;transition:transform .25s ease-in-out,-webkit-transform .25s ease-in-out;-webkit-transform-origin:center center;transform-origin:center center}.refresh__icon--revolve[data-v-ff85cb40]{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.refresh__text[data-v-ff85cb40]{padding-left:%?10?%}',""]),e.exports=t},"91a4":function(e,t,n){"use strict";var i=n("ce52"),s=n.n(i);s.a},ac74:function(e,t,n){"use strict";n.d(t,"b",(function(){return s})),n.d(t,"c",(function(){return r})),n.d(t,"a",(function(){return i}));var i={tnNavBar:n("5138").default,tnScrollView:n("c6bf").default},s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:"vip-component-basic-scroll-view"},[n("tn-nav-bar",{attrs:{fixed:!0}},[e._v("自定义下拉刷新")]),n("v-uni-view",{style:{paddingTop:e.vuex_custom_bar_height+"px"}},[n("tn-scroll-view",{attrs:{customNavHeight:e.vuex_custom_bar_height,refreshState:e.refreshState},on:{refresh:function(t){arguments[0]=t=e.$handleEvent(t),e.handleRefresh.apply(void 0,arguments)},refreshReady:function(t){arguments[0]=t=e.$handleEvent(t),e.handleRefreshReady.apply(void 0,arguments)},refreshStop:function(t){arguments[0]=t=e.$handleEvent(t),e.resetRefresh.apply(void 0,arguments)}},scopedSlots:e._u([{key:"pulldown",fn:function(){return[n("v-uni-view",{staticClass:"refresh"},[n("v-uni-view",{staticClass:"refresh__icon",class:["tn-icon-down-arrow",{"refresh__icon--revolve":e.refreshIconRevolve}]}),n("v-uni-view",{staticClass:"refresh__text"},[e._v(e._s(e.refreshText))])],1)]},proxy:!0}])},[n("v-uni-view",{staticClass:"scroll-view__content"},[e._l(10,(function(t){return[n("v-uni-view",{key:t+"_0",staticClass:"list__item tn-flex tn-flex-direction-row tn-flex-row-left tn-flex-col-center"},[n("v-uni-view",{staticClass:"list__image"},[n("v-uni-image",{attrs:{src:"https://tnuiimage.tnkjapp.com/shop/prototype2.jpg"}})],1),n("v-uni-view",{staticClass:"list__content tn-flex tn-flex-direction-column tn-flex-col-top tn-flex-row-left"},[n("v-uni-view",{staticClass:"list__content__title"},[e._v("tuniaoUI")]),n("v-uni-view",{staticClass:"list__content__desc tn-text-ellipsis"},[e._v("图鸟UI助力开发者快速开发页面，提供丰富的页面模板")])],1)],1)]}))],2)],1)],1)],1)},r=[]},ce52:function(e,t,n){var i=n("8ac5");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var s=n("4f06").default;s("55d0b8de",i,!0,{sourceMap:!1,shadowMode:!1})}}]);