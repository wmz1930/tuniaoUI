(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["componentsPage-notice-bar-notice-bar~vipPage-home-movie-movie~vipPage-home-ucharts-ucharts"],{"04ed":function(t,n,e){"use strict";e.r(n);var i=e("1f23"),o=e.n(i);for(var a in i)["default"].indexOf(a)<0&&function(t){e.d(n,t,(function(){return i[t]}))}(a);n["default"]=o.a},"0827":function(t,n,e){"use strict";e.d(n,"b",(function(){return i})),e.d(n,"c",(function(){return o})),e.d(n,"a",(function(){}));var i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return t.show?e("v-uni-view",{staticClass:"tn-row-notice-class tn-row-notice",class:[t.backgroundColorClass],style:[t.noticeStyle]},[e("v-uni-view",{staticClass:"tn-row-notice__wrap"},[e("v-uni-view",{staticClass:"tn-row-notice__icon"},[t.leftIcon?e("v-uni-view",{staticClass:"tn-row-notice__icon--left",class:["tn-icon-"+t.leftIconName,t.fontColorClass],style:[t.fontStyle("leftIcon")],on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.clickLeftIcon.apply(void 0,arguments)}}}):t._e()],1),e("v-uni-view",{staticClass:"tn-row-notice__content-box",attrs:{id:"tn-row-notice__content-box"}},[e("v-uni-view",{staticClass:"tn-row-notice__content",style:{animationDuration:t.animationDuration,animationPlayState:t.animationPlayState},attrs:{id:"tn-row-notice__content"}},[e("v-uni-text",{staticClass:"tn-row-notice__content--text",class:[t.fontColorClass],style:[t.fontStyle()],on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.click.apply(void 0,arguments)}}},[t._v(t._s(t.showText))])],1)],1),e("v-uni-view",{staticClass:"tn-row-notice__icon"},[t.rightIcon?e("v-uni-view",{staticClass:"tn-row-notice__icon--right",class:["tn-icon-"+t.rightIconName,t.fontColorClass],style:[t.fontStyle("rightIcon")],on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.clickRightIcon.apply(void 0,arguments)}}}):t._e(),t.closeBtn?e("v-uni-view",{staticClass:"tn-row-notice__icon--right",class:["tn-icon-close",t.fontColorClass],style:[t.fontStyle("close")],on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.close.apply(void 0,arguments)}}}):t._e()],1)],1)],1):t._e()},o=[]},"1a04":function(t,n,e){"use strict";e.r(n);var i=e("81ca"),o=e("04ed");for(var a in o)["default"].indexOf(a)<0&&function(t){e.d(n,t,(function(){return o[t]}))}(a);e("d252");var c=e("f0c5"),l=Object(c["a"])(o["default"],i["b"],i["c"],!1,null,"dafdbb80",null,!1,i["a"],void 0);n["default"]=l.exports},"1f23":function(t,n,e){"use strict";e("7a82");var i=e("4ea4").default;Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0,e("a9e3");var o=i(e("c846")),a={name:"tn-notice-bar",mixins:[o.default],props:{list:{type:Array,default:function(){return[]}},show:{type:Boolean,default:!0},playStatus:{type:String,default:"play"},mode:{type:String,default:"horizontal"},leftIcon:{type:Boolean,default:!0},leftIconName:{type:String,default:"sound"},leftIconSize:{type:Number,default:34},rightIcon:{type:Boolean,default:!1},rightIconName:{type:String,default:"right"},rightIconSize:{type:Number,default:26},closeBtn:{type:Boolean,default:!1},radius:{type:Number,default:0},padding:{type:String,default:"18rpx 24rpx"},autoplay:{type:Boolean,default:!0},duration:{type:Number,default:2e3},speed:{type:Number,default:160},circular:{type:Boolean,default:!0},autoHidden:{type:Boolean,default:!0}},computed:{showNotice:function(){return!(!1===this.show||this.autoHidden&&0===this.list.length)}},data:function(){return{}},methods:{click:function(t){this.$emit("click",t)},close:function(){this.$emit("close")},clickLeftIcon:function(){this.$emit("clickLeft")},clickRightIcon:function(){this.$emit("clickRight")},end:function(){this.$emit("end")}}};n.default=a},4253:function(t,n,e){"use strict";e.d(n,"b",(function(){return i})),e.d(n,"c",(function(){return o})),e.d(n,"a",(function(){}));var i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",{staticClass:"tn-column-notice-class tn-column-notice",class:[t.backgroundColorClass],style:[t.noticeStyle]},[e("v-uni-view",{staticClass:"tn-column-notice__icon"},[t.leftIcon?e("v-uni-view",{staticClass:"tn-column-notice__icon--left",class:["tn-icon-"+t.leftIconName,t.fontColorClass],style:[t.fontStyle("leftIcon")],on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.clickLeftIcon.apply(void 0,arguments)}}}):t._e()],1),e("v-uni-swiper",{staticClass:"tn-column-notice__swiper",style:[t.swiperStyle],attrs:{vertical:t.vertical,circular:!0,autoplay:t.autoplay&&"play"===t.playStatus,interval:t.duration},on:{change:function(n){arguments[0]=n=t.$handleEvent(n),t.change.apply(void 0,arguments)}}},t._l(t.list,(function(n,i){return e("v-uni-swiper-item",{key:i,staticClass:"tn-column-notice__swiper--item"},[e("v-uni-view",{staticClass:"tn-column-notice__swiper--content tn-text-ellipsis",class:[t.fontColorClass],style:[t.fontStyle()],on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.click(i)}}},[t._v(t._s(n))])],1)})),1),e("v-uni-view",{staticClass:"tn-column-notice__icon"},[t.rightIcon?e("v-uni-view",{staticClass:"tn-column-notice__icon--right",class:["tn-icon-"+t.rightIconName,t.fontColorClass],style:[t.fontStyle("rightIcon")],on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.clickRightIcon.apply(void 0,arguments)}}}):t._e(),t.closeBtn?e("v-uni-view",{staticClass:"tn-column-notice__icon--right",class:["tn-icon-close",t.fontColorClass],style:[t.fontStyle("close")],on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.close.apply(void 0,arguments)}}}):t._e()],1)],1)},o=[]},"60ed":function(t,n,e){"use strict";var i=e("8456"),o=e.n(i);o.a},6737:function(t,n,e){"use strict";var i=e("69d0"),o=e.n(i);o.a},"69d0":function(t,n,e){var i=e("aa3b");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=e("4f06").default;o("6738eb2a",i,!0,{sourceMap:!1,shadowMode:!1})},"72ea":function(t,n,e){"use strict";e.r(n);var i=e("b2ad"),o=e.n(i);for(var a in i)["default"].indexOf(a)<0&&function(t){e.d(n,t,(function(){return i[t]}))}(a);n["default"]=o.a},"81ca":function(t,n,e){"use strict";e.d(n,"b",(function(){return o})),e.d(n,"c",(function(){return a})),e.d(n,"a",(function(){return i}));var i={tnRowNotice:e("e729").default,tnColumnNotice:e("a11d").default},o=function(){var t=this,n=t.$createElement,e=t._self._c||n;return t.showNotice?e("v-uni-view",{staticClass:"tn-notice-bar-class tn-notice-bar",style:{borderRadius:t.radius+"rpx"}},["horizontal"===t.mode&&t.circular?[e("tn-row-notice",{attrs:{backgroundColor:t.backgroundColor,fontColor:t.fontColor,fontSize:t.fontSize,fontUnit:t.fontUnit,list:t.list,show:t.show,playStatus:t.playStatus,leftIcon:t.leftIcon,leftIconName:t.leftIconName,leftIconSize:t.leftIconSize,rightIcon:t.rightIcon,rightIconName:t.rightIconName,rightIconSize:t.rightIconSize,closeBtn:t.closeBtn,autoplay:t.autoplay,radius:t.radius,padding:t.padding,speed:t.speed},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.click.apply(void 0,arguments)},close:function(n){arguments[0]=n=t.$handleEvent(n),t.close.apply(void 0,arguments)},clickLeft:function(n){arguments[0]=n=t.$handleEvent(n),t.clickLeftIcon.apply(void 0,arguments)},clickRight:function(n){arguments[0]=n=t.$handleEvent(n),t.clickRightIcon.apply(void 0,arguments)}}})]:t._e(),"vertical"===t.mode||"horizontal"===t.mode&&!t.circular?[e("tn-column-notice",{attrs:{backgroundColor:t.backgroundColor,fontColor:t.fontColor,fontSize:t.fontSize,fontUnit:t.fontUnit,list:t.list,show:t.show,mode:t.mode,playStatus:t.playStatus,leftIcon:t.leftIcon,leftIconName:t.leftIconName,leftIconSize:t.leftIconSize,rightIcon:t.rightIcon,rightIconName:t.rightIconName,rightIconSize:t.rightIconSize,closeBtn:t.closeBtn,autoplay:t.autoplay,radius:t.radius,padding:t.padding,duration:t.duration},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.click.apply(void 0,arguments)},close:function(n){arguments[0]=n=t.$handleEvent(n),t.close.apply(void 0,arguments)},clickLeft:function(n){arguments[0]=n=t.$handleEvent(n),t.clickLeftIcon.apply(void 0,arguments)},clickRight:function(n){arguments[0]=n=t.$handleEvent(n),t.clickRightIcon.apply(void 0,arguments)},end:function(n){arguments[0]=n=t.$handleEvent(n),t.end.apply(void 0,arguments)}}})]:t._e()],2):t._e()},a=[]},8456:function(t,n,e){var i=e("9543");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=e("4f06").default;o("13a338f0",i,!0,{sourceMap:!1,shadowMode:!1})},9543:function(t,n,e){var i=e("24fb");n=i(!1),n.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 下方引入的为Tuniao UI的集成样式文件，为scss预处理器，其中包含了一些"tn-"开头的自定义变量\r\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\r\n * Tuniao UI自定义的css类名和scss变量，均以"tn-"开头，不会造成冲突，请放心使用 \r\n */.tn-column-notice[data-v-1a5a20c1]{width:100%;display:flex;flex-direction:row;align-items:center;justify-content:center;flex-wrap:nowrap;overflow:hidden}.tn-column-notice__swiper[data-v-1a5a20c1]{height:auto;flex:1;display:flex;flex-direction:row;align-items:center;margin-left:%?12?%}.tn-column-notice__swiper--item[data-v-1a5a20c1]{display:flex;flex-direction:row;align-items:center;overflow:hidden}.tn-column-notice__swiper--content[data-v-1a5a20c1]{overflow:hidden}.tn-column-notice__icon--left[data-v-1a5a20c1]{display:inline-flex;align-items:center}.tn-column-notice__icon--right[data-v-1a5a20c1]{margin-left:%?12?%;display:inline-flex;align-items:center}',""]),t.exports=n},"994c":function(t,n,e){"use strict";e("7a82");var i=e("4ea4").default;Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0,e("a9e3"),e("d3b7"),e("ac1f"),e("14d9"),e("3ca3"),e("ddb0");var o=i(e("c846")),a={name:"tn-row-notice",mixins:[o.default],props:{list:{type:Array,default:function(){return[]}},show:{type:Boolean,default:!0},playStatus:{type:String,default:"play"},leftIcon:{type:Boolean,default:!0},leftIconName:{type:String,default:"sound"},leftIconSize:{type:Number,default:34},rightIcon:{type:Boolean,default:!1},rightIconName:{type:String,default:"right"},rightIconSize:{type:Number,default:26},closeBtn:{type:Boolean,default:!1},radius:{type:Number,default:0},padding:{type:String,default:"18rpx 24rpx"},autoplay:{type:Boolean,default:!0},speed:{type:Number,default:160}},computed:{fontStyle:function(){var t=this;return function(n){var e={};return e.color=t.fontColorStyle?t.fontColorStyle:"",e.fontSize=t.fontSizeStyle?t.fontSizeStyle:"","leftIcon"===n&&t.leftIconSize&&(e.fontSize=t.leftIconSize+"rpx"),"rightIcon"===n&&t.rightIconSize&&(e.fontSize=t.rightIconSize+"rpx"),"close"===n&&(e.fontSize="24rpx"),e}},noticeStyle:function(){var t={};return t.backgroundColor=this.backgroundColorStyle?this.backgroundColorStyle:"transparent",this.padding&&(t.padding=this.padding),t}},data:function(){return{textWidth:0,textBoxWidth:0,animationDuration:"10s",animationPlayState:"paused",showText:""}},watch:{list:{handler:function(t){var n=this;this.showText=t.join("，"),this.$nextTick((function(){n.initNotice()}))},immediate:!0},playStatus:function(t){this.animationPlayState="play"===t?"running":"paused"},speed:function(t){this.initNotice()}},methods:{initNotice:function(){var t=this,n=[],e=new Promise((function(n,e){uni.createSelectorQuery().in(t).select("#tn-row-notice__content").boundingClientRect().exec((function(e){t.textWidth=e[0].width,n()}))}));n.push(e),Promise.all(n).then((function(){t.animationDuration="".concat(t.textWidth/uni.upx2px(t.speed),"s"),t.animationPlayState="paused",setTimeout((function(){t.autoplay&&"play"===t.playStatus&&(t.animationPlayState="running")}),10)}))},click:function(){this.$emit("click")},close:function(){this.$emit("close")},clickLeftIcon:function(){this.$emit("clickLeft")},clickRightIcon:function(){this.$emit("clickRight")}}};n.default=a},a11d:function(t,n,e){"use strict";e.r(n);var i=e("4253"),o=e("72ea");for(var a in o)["default"].indexOf(a)<0&&function(t){e.d(n,t,(function(){return o[t]}))}(a);e("60ed");var c=e("f0c5"),l=Object(c["a"])(o["default"],i["b"],i["c"],!1,null,"1a5a20c1",null,!1,i["a"],void 0);n["default"]=l.exports},aa3b:function(t,n,e){var i=e("24fb");n=i(!1),n.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 下方引入的为Tuniao UI的集成样式文件，为scss预处理器，其中包含了一些"tn-"开头的自定义变量\r\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\r\n * Tuniao UI自定义的css类名和scss变量，均以"tn-"开头，不会造成冲突，请放心使用 \r\n */.tn-row-notice[data-v-15a5161a]{width:100%;overflow:hidden}.tn-row-notice__wrap[data-v-15a5161a]{display:flex;flex-direction:row;align-items:center;justify-content:space-between}.tn-row-notice__content[data-v-15a5161a]{display:flex;flex-direction:row;flex-wrap:nowrap;text-align:right;padding-left:100%;-webkit-animation:tn-notice-loop-animation-data-v-15a5161a 10s linear infinite both;animation:tn-notice-loop-animation-data-v-15a5161a 10s linear infinite both}.tn-row-notice__content-box[data-v-15a5161a]{flex:1;display:flex;flex-direction:row;overflow:hidden;margin-left:%?12?%}.tn-row-notice__content--text[data-v-15a5161a]{word-break:keep-all;white-space:nowrap}.tn-row-notice__icon--left[data-v-15a5161a]{display:inline-flex;align-items:center}.tn-row-notice__icon--right[data-v-15a5161a]{margin-left:%?12?%;display:inline-flex;align-items:center}@-webkit-keyframes tn-notice-loop-animation-data-v-15a5161a{0%{-webkit-transform:translateX(0);transform:translateX(0)}100%{-webkit-transform:translateX(-100%);transform:translateX(-100%)}}@keyframes tn-notice-loop-animation-data-v-15a5161a{0%{-webkit-transform:translateX(0);transform:translateX(0)}100%{-webkit-transform:translateX(-100%);transform:translateX(-100%)}}',""]),t.exports=n},acf9:function(t,n,e){var i=e("d242");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=e("4f06").default;o("a0741844",i,!0,{sourceMap:!1,shadowMode:!1})},b2ad:function(t,n,e){"use strict";e("7a82");var i=e("4ea4").default;Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0,e("a9e3");var o=i(e("c846")),a={name:"tn-column-notice",mixins:[o.default],props:{list:{type:Array,default:function(){return[]}},show:{type:Boolean,default:!0},playStatus:{type:String,default:"play"},mode:{type:String,default:"horizontal"},leftIcon:{type:Boolean,default:!0},leftIconName:{type:String,default:"sound"},leftIconSize:{type:Number,default:34},rightIcon:{type:Boolean,default:!1},rightIconName:{type:String,default:"right"},rightIconSize:{type:Number,default:26},closeBtn:{type:Boolean,default:!1},radius:{type:Number,default:0},padding:{type:String,default:"18rpx 24rpx"},autoplay:{type:Boolean,default:!0},duration:{type:Number,default:2e3}},computed:{fontStyle:function(){var t=this;return function(n){var e={};return e.color=t.fontColorStyle?t.fontColorStyle:"",e.fontSize=t.fontSizeStyle?t.fontSizeStyle:"","leftIcon"===n&&t.leftIconSize&&(e.fontSize=t.leftIconSize+"rpx"),"rightIcon"===n&&t.rightIconSize&&(e.fontSize=t.rightIconSize+"rpx"),"close"===n&&(e.fontSize="24rpx"),e}},noticeStyle:function(){var t={};return t.backgroundColor=this.backgroundColorStyle?this.backgroundColorStyle:"transparent",this.padding&&(t.padding=this.padding),t},swiperStyle:function(){var t={};return t.height=this.fontSize?this.fontSize+6+this.fontUnit:"32rpx",t.lineHeight=t.height,t},vertical:function(){return"horizontal"!==this.mode}},data:function(){return{}},watch:{},methods:{click:function(t){this.$emit("click",t)},close:function(){this.$emit("close")},clickLeftIcon:function(){this.$emit("clickLeft")},clickRightIcon:function(){this.$emit("clickRight")},change:function(t){var n=t.detail.current;n===this.list.length-1&&this.$emit("end")}}};n.default=a},d242:function(t,n,e){var i=e("24fb");n=i(!1),n.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 下方引入的为Tuniao UI的集成样式文件，为scss预处理器，其中包含了一些"tn-"开头的自定义变量\r\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\r\n * Tuniao UI自定义的css类名和scss变量，均以"tn-"开头，不会造成冲突，请放心使用 \r\n */.tn-notice-bar[data-v-dafdbb80]{overflow:hidden}',""]),t.exports=n},d252:function(t,n,e){"use strict";var i=e("acf9"),o=e.n(i);o.a},e688:function(t,n,e){"use strict";e.r(n);var i=e("994c"),o=e.n(i);for(var a in i)["default"].indexOf(a)<0&&function(t){e.d(n,t,(function(){return i[t]}))}(a);n["default"]=o.a},e729:function(t,n,e){"use strict";e.r(n);var i=e("0827"),o=e("e688");for(var a in o)["default"].indexOf(a)<0&&function(t){e.d(n,t,(function(){return o[t]}))}(a);e("6737");var c=e("f0c5"),l=Object(c["a"])(o["default"],i["b"],i["c"],!1,null,"15a5161a",null,!1,i["a"],void 0);n["default"]=l.exports}}]);