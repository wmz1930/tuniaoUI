(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["vipPage-blog-blogger-blogger~vipPage-blog-socialize-socialize~vipPage-components-stack-swiper-stack-~534de17e"],{"0073":function(t,e,a){"use strict";a.r(e);var n=a("04a1"),i=a.n(n);for(var r in n)["default"].indexOf(r)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(r);e["default"]=i.a},"04a1":function(t,e,a){"use strict";a("7a82");var n=a("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n(a("c7eb")),r=n(a("1da1"));a("a9e3"),a("d81d");var s={name:"tn-stack-swiper",props:{list:{type:Array,default:function(){return[]}},width:{type:[String,Number],default:"100%"},height:{type:[String,Number],default:500},autoplay:{type:Boolean,default:!1},interval:{type:Number,default:5e3},switchRate:{type:Number,default:30},scaleRate:{type:Number,default:.1},translateRate:{type:Number,default:16},opacityRate:{type:Number,default:10},direction:{type:String,default:"horizontal"}},data:function(){return{autoplayTimer:null,windowWidth:0,swiperItemWidth:0,swiperItemHeight:0,swiperIndex:-1,touching:!0,swiperList:[],autoplayFlag:!1}},computed:{itemData:function(){return{windowWidth:this.windowWidth,itemWidth:this.swiperItemWidth,itemHeight:this.swiperItemHeight,direction:this.direction,autoplaying:this.autoplayFlag}}},watch:{list:function(t){var e=this;this.swiperList=[],this.$nextTick((function(){e.initSwiperRectInfo()}))},autoplay:function(t){t?this.setAutoPlay():this.clearAutoPlayTimer()}},created:function(){this.autoplayFlag=this.autoplay},mounted:function(){var t=this;this.$nextTick((function(){t.initSwiperRectInfo()}))},destroyed:function(){this.clearAutoPlayTimer()},methods:{initSwiperRectInfo:function(){var t=this;return(0,r.default)((0,i.default)().mark((function e(){var a,n;return(0,i.default)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t._tGetRect(".tn-stack-swiper__item");case 2:if(a=e.sent,a&&a.width&&a.height){e.next=6;break}return setTimeout((function(){t.initSwiperRectInfo()}),50),e.abrupt("return");case 6:t.swiperItemWidth=a.width,t.swiperItemHeight=a.height,n=uni.getSystemInfoSync(),t.windowWidth=n.windowWidth,t.swiperIndex=0,t.swiperList=t.list.map((function(e,a){var n=1-t.scaleRate*a;return"horizontal"===t.direction?e.translateX=a*t.translateRate*.01*t.swiperItemWidth:"vertical"===t.direction&&(e.translateY=a*t.translateRate*.01*t.swiperItemHeight),e.opacity=1-a*t.opacityRate*.01,e.zIndex=t.list.length-a,e.scale=n<=0?0:n,e})),t.setAutoPlay();case 13:case"end":return e.stop()}}),e)})))()},setAutoPlay:function(){var t=this;this.autoplay&&(this.clearAutoPlayTimer(),this.autoplayFlag=!0,this.autoplayTimer=setInterval((function(){t.swiperIndex=t.swiperIndex+1>t.swiperList.length-1?0:t.swiperIndex+1}),this.interval))},clearAutoPlayTimer:function(){null!=this.autoplayTimer&&(this.autoplayFlag=!1,clearInterval(this.autoplayTimer))},changeSwiperIndex:function(t){this.swiperIndex=t.index,this.$emit("change",{index:t.index})},changeTouchState:function(t){this.touching=t.touching},printLog:function(t){console.log("log",t)}}};e.default=s},"2e81":function(t,e,a){"use strict";var n=a("f961");e["a"]=n["a"]},4931:function(t,e,a){"use strict";(function(t){e["a"]=function(e){(e.options.wxs||(e.options.wxs={}))["wxs"]=function(e){function a(e,a,n){if(n>0){var i=t().getTime(),r=function(){t().getTime()-i>n?a&&a():e.requestAnimationFrame(r)};r()}else a&&a()}function n(t,e,a){a.currentIndex=t,e.callMethod("changeSwiperIndex",{index:t})}function i(t,e,n,i){var r=i.currentIndex,s=i.list,c=i.itemData.direction,o=i.touchRelactive||{x:0,y:0},l=JSON.parse(JSON.stringify(s));if("horizontal"===c){var p=i.itemData.itemWidth;n.setStyle({transform:"translate3d(-"+p+"px, 0px, 0px) scale(1)","z-index":s[r].zIndex+1,opacity:s[r].opacity});var d=Math.floor((p-Math.abs(e.pageX-o.x))/p*250);a(n,(function(){for(var t=s.length-1;t>=0;t--){var e=t-1<0?s.length-1:t-1;i.itemsInstance[t].setStyle({transform:"translate3d("+l[e].translateX+"px, 0px, 0px) scale("+l[e].scale+")","z-index":l[e].zIndex,opacity:l[e].opacity}),i.list[t]=l[e]}}),d)}else if("vertical"===c){var x=i.itemData.itemHeight;n.setStyle({transform:"translate3d(0px, -"+x+"px, 0px) scale(1)","z-index":s[r].zIndex+1,opacity:s[r].opacity});d=Math.floor((x-Math.abs(e.pageY-o.y))/x*250);a(n,(function(){for(var t=s.length-1;t>=0;t--){var e=t-1<0?s.length-1:t-1;i.itemsInstance[t].setStyle({transform:"translate3d(0px, "+l[e].translateY+"px, 0px) scale("+l[e].scale+")","z-index":l[e].zIndex,opacity:l[e].opacity}),i.list[t]=l[e]}}),d)}}function r(t,e,n,i){var r=i.currentIndex,s=i.list,c=i.itemData.direction,o=i.touchRelactive||{x:0,y:0},l=JSON.parse(JSON.stringify(s));if("horizontal"===c){var p=i.itemData.itemWidth;i.itemsInstance[t].setStyle({transform:"translate3d(0px, 0px, 0px) scale(1)","z-index":s[r].zIndex+1,opacity:s[r].opacity});var d=Math.floor((p-Math.abs(e.pageX-o.x))/p*250);a(n,(function(){for(var t=0;t<s.length;t++){var e=t+1>s.length-1?0:t+1;i.itemsInstance[t].setStyle({transform:"translate3d("+l[e].translateX+"px, 0px, 0px) scale("+l[e].scale+")","z-index":l[e].zIndex,opacity:l[e].opacity}),i.list[t]=l[e]}}),d)}else if("vertical"===c){var x=i.itemData.itemHeight;i.itemsInstance[t].setStyle({transform:"translate3d(0px, 0px, 0px) scale(1)","z-index":s[r].zIndex+1,opacity:s[r].opacity});d=Math.floor((x-Math.abs(e.pageY-o.y))/x*250);a(n,(function(){for(var t=0;t<s.length;t++){var e=t+1>s.length-1?0:t+1;i.itemsInstance[t].setStyle({transform:"translate3d(0px, "+l[e].translateY+"px, 0px) scale("+l[e].scale+")","z-index":l[e].zIndex,opacity:l[e].opacity}),i.list[t]=l[e]}}),d)}}function s(t,e){t.itemsInstance&&(!0===e?t.itemsInstance.forEach((function(t,e){t.hasClass("tn-stack-swiper__item__transition")||t.addClass("tn-stack-swiper__item__transition")})):t.itemsInstance.forEach((function(t,e){t.hasClass("tn-stack-swiper__item__transition")&&t.removeClass("tn-stack-swiper__item__transition")})))}return e.exports={itemDataObserver:function(t,e,a,n){var i=a.getState();i.itemData=t},listObserver:function(t,e,a,n){var i=a.getState(),r=i.itemData;i.itemsInstance=a.selectAllComponents(".tn-stack-swiper__item"),i.list=t||[],i.list.forEach((function(t,e){var a=i.itemsInstance[e];t&&a&&("horizontal"===r.direction?a.setStyle({transform:"translate3d("+t.translateX+"px, 0px, 0px) scale("+t.scale+")","z-index":t.zIndex,opacity:t.opacity}):"vertical"===r.direction&&a.setStyle({transform:"translate3d(0px, "+t.translateY+"px, 0px) scale("+t.scale+")","z-index":t.zIndex,opacity:t.opacity}))}))},swiperIndexChange:function(t,e,a,n){var r=a.getState();e<0||"undefined"==typeof e||r.currentIndex==t?(e<0||"undefined"==typeof e)&&(r.currentIndex=0):(r.currentIndex=t,t>e||e==r.list.length-1&&0==t?i(0,{pageX:0},r.itemsInstance[e],r):t<e||0==e&&r.list.length)},autoplayFlagChange:function(t,e,a,n){var i=a.getState();s(i,!0===t)},touchStart:function(t,e){var a=t.instance,n=a.getDataset(),i=e.getState(),r=i.itemData;if(n.index==i.currentIndex){var c=t.changedTouches[0];c&&(i.touchRelactive={x:c.pageX,y:c.pageY},i.touchId=c.identifier,"horizontal"===r.direction?i.itemAnimationWidth=r.itemWidth*(n.switchrate/100):"vertical"===r.direction&&(i.itemAnimationHeight=r.itemHeight*(n.switchrate/100)),s(i,!1),i.touching=!0,e.callMethod("changeTouchState",{touching:!0}),e.callMethod("clearAutoPlayTimer"))}},touchMove:function(t,e){var a=t.instance,n=a.getDataset(),i=e.getState(),r=i.itemData;if(n.index==i.currentIndex&&i.touching){var s=t.changedTouches[0];if(s&&i.touchId==s.identifier){var c={x:s.pageX,y:s.pageY};i.direction||(i.direction=function(t,e,a){if("horizontal"===a){if(Math.abs(e.y-t.y)<=30&&Math.abs(e.x-t.x)>10){if(e.x-t.x>0)return"right";if(e.x-t.x<0)return"left"}}else if("vertical"===a&&Math.abs(e.x-t.x)<=30&&Math.abs(e.y-t.y)>10){if(e.y-t.y>0)return"down";if(e.y-t.y<0)return"up"}return""}(i.touchRelactive,c,r.direction)),function(t,e,a){var n=a.itemData,i=(a.itemsInstance,a.list),r=a.currentIndex,s=a.touchRelactive;if("horizontal"===n.direction){var c=a.itemAnimationWidth,o=t.x-s.x;if(t.x>n.windowWidth||t.x<0)return;if("left"==a.direction)e.setStyle({transform:"translate3d("+o+"px, 0px, 0px)","z-index":i[r].zIndex+1,opacity:i[r].opacity}),Math.abs(o)>c&&a.itemsInstance.forEach((function(t,e){if(e!=r){var a=0==e?i.length-1:e-1,s=(Math.abs(o)-c)/(n.itemWidth-c),l=i[e].translateX-(i[e].translateX-i[a].translateX)*s,p=i[e].scale+(i[a].scale-i[e].scale)*s,d=i[e].opacity+(i[a].opacity-i[e].opacity)*s;t.setStyle({transform:"translate3d("+l+"px, 0px, 0px) scale("+p+")","z-index":i[e].zIndex,opacity:d})}}));else if("right"==a.direction){var l=0==r?i.length-1:r-1;a.itemsInstance[l].setStyle({transform:"translate3d(-"+(n.itemWidth-o)+"px, 0px, 0px) scale(1)","z-index":i[r].zIndex+1,opacity:i[r].opacity}),Math.abs(o)<c&&a.itemsInstance.forEach((function(t,e){if(e!=l){var a=e==i.length-1?0:e+1,n=Math.abs(o)/c,r=i[e].translateX+(i[a].translateX-i[e].translateX)*n,s=i[e].scale-(i[e].scale-i[a].scale)*n,p=i[e].opacity-(i[e].opacity-i[a].opacity)*n;t.setStyle({transform:"translate3d("+r+"px, 0px, 0px) scale("+s+")","z-index":i[e].zIndex,opacity:p})}}))}}else if("vertical"===n.direction){var p=a.itemAnimationHeight,d=t.y-s.y;if(t.y>n.windowHeight||t.y<0)return;if("up"==a.direction)e.setStyle({transform:"translate3d(0px, "+d+"px, 0px)","z-index":i[r].zIndex+1,opacity:i[r].opacity}),Math.abs(d)>p&&a.itemsInstance.forEach((function(t,e){if(e!=r){var a=0==e?i.length-1:e-1,s=(Math.abs(d)-p)/(n.itemHeight-p),c=i[e].translateY-(i[e].translateY-i[a].translateY)*s,o=i[e].scale+(i[a].scale-i[e].scale)*s,l=i[e].opacity+(i[a].opacity-i[e].opacity)*s;t.setStyle({transform:"translate3d(0px, "+c+"px, 0px) scale("+o+")","z-index":i[e].zIndex,opacity:l})}}));else if("down"==a.direction){l=0==r?i.length-1:r-1;a.itemsInstance[l].setStyle({transform:"translate3d(0px, -"+(n.itemHeight-d)+"px, 0px) scale(1)","z-index":i[r].zIndex+1,opacity:i[r].opacity}),Math.abs(d)<p&&a.itemsInstance.forEach((function(t,e){if(e!=l){var a=e==i.length-1?0:e+1,n=Math.abs(d)/p,r=i[e].translateY+(i[a].translateY-i[e].translateY)*n,s=i[e].scale-(i[e].scale-i[a].scale)*n,c=i[e].opacity-(i[e].opacity-i[a].opacity)*n;t.setStyle({transform:"translate3d(0px, "+r+"px, 0px) scale("+s+")","z-index":i[e].zIndex,opacity:c})}}))}}}(c,a,i)}}},touchEnd:function(t,e){var a=t.instance,c=a.getDataset(),o=e.getState(),l=o.itemData,p=o.list,d=o.touchRelactive;if(c.index==o.currentIndex&&o.touching){var x=t.changedTouches[0];if(x&&o.touchId==x.identifier){if(s(o,!0),"horizontal"===l.direction){var u=o.itemAnimationWidth;if("left"==o.direction)if(Math.abs(x.pageX-d.x)<u)p.forEach((function(t,e){var a=o.itemsInstance[e];t&&a&&a.setStyle({transform:"translate3d("+t.translateX+"px, 0px, 0px) scale("+t.scale+")","z-index":t.zIndex})}));else{var f=o.currentIndex+1>p.length-1?0:o.currentIndex+1;i(0,x,a,o),n(f,e,o)}else if("right"==o.direction)if(Math.abs(x.pageX-d.x)<u){var h=0==o.currentIndex?p.length-1:o.currentIndex-1;o.itemsInstance[h].setStyle({transform:"translate3d(-"+l.itemWidth+"px, 0px, 0px) scale(1)","z-index":p[o.currentIndex].zIndex+1,opacity:p[o.currentIndex].opacity}),p.forEach((function(t,e){var a=o.itemsInstance[e];t&&a&&a.setStyle({transform:"translate3d("+t.translateX+"px, 0px, 0px) scale("+t.scale+")","z-index":t.zIndex,opacity:t.opacity})}))}else{f=o.currentIndex-1<0?p.length-1:o.currentIndex-1;r(f,x,a,o),n(f,e,o)}}else if("vertical"===l.direction){var y=o.itemAnimationHeight;if("up"==o.direction)if(Math.abs(x.pageY-d.y)<y)p.forEach((function(t,e){var a=o.itemsInstance[e];t&&a&&a.setStyle({transform:"translate3d(0px, "+t.translateY+"px, 0px) scale("+t.scale+")","z-index":t.zIndex,opacity:t.opacity})}));else{f=o.currentIndex+1>p.length-1?0:o.currentIndex+1;i(0,x,a,o),n(f,e,o)}else if("down"==o.direction)if(Math.abs(x.pageY-d.y)<y){h=0==o.currentIndex?p.length-1:o.currentIndex-1;o.itemsInstance[h].setStyle({transform:"translate3d(0px, -"+l.itemHeight+"px, 0px) scale(1)","z-index":p[o.currentIndex].zIndex+1,opacity:p[o.currentIndex].opacity}),p.forEach((function(t,e){var a=o.itemsInstance[e];t&&a&&a.setStyle({transform:"translate3d(0px, "+t.translateY+"px, 0px) scale("+t.scale+")","z-index":t.zIndex,opacity:t.opacity})}))}else{f=o.currentIndex-1<0?p.length-1:o.currentIndex-1;r(f,x,a,o),n(f,e,o)}}o.touchRelactive=null,o.touching=!1,o.direction=null,o.touchId=null,e.callMethod("changeTouchState",{touching:!1}),e.callMethod("setAutoPlay")}}}},e.exports}({exports:{}})}}).call(this,a("5fff")["getDate"])},"5fff":function(t,e,a){"use strict";a("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.getDate=function(){var t=Array.prototype.slice.call(arguments);return t.unshift(Date),new(Function.prototype.bind.apply(Date,t))},e.getRegExp=function(){var t=Array.prototype.slice.call(arguments);return t.unshift(RegExp),new(Function.prototype.bind.apply(RegExp,t))},a("fb6a"),a("3c65"),a("4d63"),a("c607"),a("ac1f"),a("2c3e"),a("25f0")},"79c8":function(t,e,a){var n=a("f03a");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=a("4f06").default;i("279b7dca",n,!0,{sourceMap:!1,shadowMode:!1})},bb8b:function(t,e,a){"use strict";a.r(e);var n=a("ffa2"),i=a("0073");for(var r in i)["default"].indexOf(r)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(r);a("ca45");var s=a("f0c5"),c=a("cb34"),o=a("2e81"),l=Object(s["a"])(i["default"],n["b"],n["c"],!1,null,"1997ebd4",null,!1,n["a"],void 0);"function"===typeof c["a"]&&Object(c["a"])(l),"function"===typeof o["a"]&&Object(o["a"])(l),e["default"]=l.exports},ca45:function(t,e,a){"use strict";var n=a("79c8"),i=a.n(n);i.a},cb34:function(t,e,a){"use strict";var n=a("4931");e["a"]=n["a"]},f03a:function(t,e,a){var n=a("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 下方引入的为Tuniao UI的集成样式文件，为scss预处理器，其中包含了一些"tn-"开头的自定义变量\r\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\r\n * Tuniao UI自定义的css类名和scss变量，均以"tn-"开头，不会造成冲突，请放心使用 \r\n */.tn-stack-swiper[data-v-1997ebd4]{position:relative}.tn-stack-swiper__item[data-v-1997ebd4]{position:absolute;border-radius:%?20?%;overflow:hidden}.tn-stack-swiper__item--horizontal[data-v-1997ebd4]{width:88%;height:100%;-webkit-transform-origin:left center;transform-origin:left center}.tn-stack-swiper__item--vertical[data-v-1997ebd4]{width:100%;height:88%;-webkit-transform-origin:top center;transform-origin:top center}.tn-stack-swiper__item__transition[data-v-1997ebd4]{transition-property:opacity,-webkit-transform;transition-property:transform,opacity;transition-property:transform,opacity,-webkit-transform;transition-duration:.25s;transition-timing-function:ease-out}.tn-stack-swiper__image[data-v-1997ebd4]{width:100%;height:100%}',""]),t.exports=e},f961:function(t,e,a){"use strict";(function(t){e["a"]=function(e){(e.options.wxs||(e.options.wxs={}))["wxs"]=function(e){function a(e,a,n){if(n>0){var i=t().getTime(),r=function(){t().getTime()-i>n?a&&a():e.requestAnimationFrame(r)};r()}else a&&a()}function n(t,e,a){a.currentIndex=t,e.callMethod("changeSwiperIndex",{index:t})}function i(t,e,n,i){var r=i.currentIndex,s=i.list,c=i.itemData.direction,o=i.touchRelactive||{x:0,y:0},l=JSON.parse(JSON.stringify(s));if("horizontal"===c){var p=i.itemData.itemWidth;n.setStyle({transform:"translate3d(-"+p+"px, 0px, 0px) scale(1)","z-index":s[r].zIndex+1,opacity:s[r].opacity});var d=Math.floor((p-Math.abs(e.pageX-o.x))/p*250);a(n,(function(){for(var t=s.length-1;t>=0;t--){var e=t-1<0?s.length-1:t-1;i.itemsInstance[t].setStyle({transform:"translate3d("+l[e].translateX+"px, 0px, 0px) scale("+l[e].scale+")","z-index":l[e].zIndex,opacity:l[e].opacity}),i.list[t]=l[e]}}),d)}else if("vertical"===c){var x=i.itemData.itemHeight;n.setStyle({transform:"translate3d(0px, -"+x+"px, 0px) scale(1)","z-index":s[r].zIndex+1,opacity:s[r].opacity});d=Math.floor((x-Math.abs(e.pageY-o.y))/x*250);a(n,(function(){for(var t=s.length-1;t>=0;t--){var e=t-1<0?s.length-1:t-1;i.itemsInstance[t].setStyle({transform:"translate3d(0px, "+l[e].translateY+"px, 0px) scale("+l[e].scale+")","z-index":l[e].zIndex,opacity:l[e].opacity}),i.list[t]=l[e]}}),d)}}function r(t,e,n,i){var r=i.currentIndex,s=i.list,c=i.itemData.direction,o=i.touchRelactive||{x:0,y:0},l=JSON.parse(JSON.stringify(s));if("horizontal"===c){var p=i.itemData.itemWidth;i.itemsInstance[t].setStyle({transform:"translate3d(0px, 0px, 0px) scale(1)","z-index":s[r].zIndex+1,opacity:s[r].opacity});var d=Math.floor((p-Math.abs(e.pageX-o.x))/p*250);a(n,(function(){for(var t=0;t<s.length;t++){var e=t+1>s.length-1?0:t+1;i.itemsInstance[t].setStyle({transform:"translate3d("+l[e].translateX+"px, 0px, 0px) scale("+l[e].scale+")","z-index":l[e].zIndex,opacity:l[e].opacity}),i.list[t]=l[e]}}),d)}else if("vertical"===c){var x=i.itemData.itemHeight;i.itemsInstance[t].setStyle({transform:"translate3d(0px, 0px, 0px) scale(1)","z-index":s[r].zIndex+1,opacity:s[r].opacity});d=Math.floor((x-Math.abs(e.pageY-o.y))/x*250);a(n,(function(){for(var t=0;t<s.length;t++){var e=t+1>s.length-1?0:t+1;i.itemsInstance[t].setStyle({transform:"translate3d(0px, "+l[e].translateY+"px, 0px) scale("+l[e].scale+")","z-index":l[e].zIndex,opacity:l[e].opacity}),i.list[t]=l[e]}}),d)}}function s(t,e){t.itemsInstance&&(!0===e?t.itemsInstance.forEach((function(t,e){t.hasClass("tn-stack-swiper__item__transition")||t.addClass("tn-stack-swiper__item__transition")})):t.itemsInstance.forEach((function(t,e){t.hasClass("tn-stack-swiper__item__transition")&&t.removeClass("tn-stack-swiper__item__transition")})))}return e.exports={itemDataObserver:function(t,e,a,n){var i=a.getState();i.itemData=t},listObserver:function(t,e,a,n){var i=a.getState(),r=i.itemData;i.itemsInstance=a.selectAllComponents(".tn-stack-swiper__item"),i.list=t||[],i.list.forEach((function(t,e){var a=i.itemsInstance[e];t&&a&&("horizontal"===r.direction?a.setStyle({transform:"translate3d("+t.translateX+"px, 0px, 0px) scale("+t.scale+")","z-index":t.zIndex,opacity:t.opacity}):"vertical"===r.direction&&a.setStyle({transform:"translate3d(0px, "+t.translateY+"px, 0px) scale("+t.scale+")","z-index":t.zIndex,opacity:t.opacity}))}))},swiperIndexChange:function(t,e,a,n){var r=a.getState();e<0||"undefined"==typeof e||r.currentIndex==t?(e<0||"undefined"==typeof e)&&(r.currentIndex=0):(r.currentIndex=t,t>e||e==r.list.length-1&&0==t?i(0,{pageX:0},r.itemsInstance[e],r):t<e||0==e&&r.list.length)},autoplayFlagChange:function(t,e,a,n){var i=a.getState();s(i,!0===t)},touchStart:function(t,e){var a=t.instance,n=a.getDataset(),i=e.getState(),r=i.itemData;if(n.index==i.currentIndex){var c=t.changedTouches[0];c&&(i.touchRelactive={x:c.pageX,y:c.pageY},i.touchId=c.identifier,"horizontal"===r.direction?i.itemAnimationWidth=r.itemWidth*(n.switchrate/100):"vertical"===r.direction&&(i.itemAnimationHeight=r.itemHeight*(n.switchrate/100)),s(i,!1),i.touching=!0,e.callMethod("changeTouchState",{touching:!0}),e.callMethod("clearAutoPlayTimer"))}},touchMove:function(t,e){var a=t.instance,n=a.getDataset(),i=e.getState(),r=i.itemData;if(n.index==i.currentIndex&&i.touching){var s=t.changedTouches[0];if(s&&i.touchId==s.identifier){var c={x:s.pageX,y:s.pageY};i.direction||(i.direction=function(t,e,a){if("horizontal"===a){if(Math.abs(e.y-t.y)<=30&&Math.abs(e.x-t.x)>10){if(e.x-t.x>0)return"right";if(e.x-t.x<0)return"left"}}else if("vertical"===a&&Math.abs(e.x-t.x)<=30&&Math.abs(e.y-t.y)>10){if(e.y-t.y>0)return"down";if(e.y-t.y<0)return"up"}return""}(i.touchRelactive,c,r.direction)),function(t,e,a){var n=a.itemData,i=(a.itemsInstance,a.list),r=a.currentIndex,s=a.touchRelactive;if("horizontal"===n.direction){var c=a.itemAnimationWidth,o=t.x-s.x;if(t.x>n.windowWidth||t.x<0)return;if("left"==a.direction)e.setStyle({transform:"translate3d("+o+"px, 0px, 0px)","z-index":i[r].zIndex+1,opacity:i[r].opacity}),Math.abs(o)>c&&a.itemsInstance.forEach((function(t,e){if(e!=r){var a=0==e?i.length-1:e-1,s=(Math.abs(o)-c)/(n.itemWidth-c),l=i[e].translateX-(i[e].translateX-i[a].translateX)*s,p=i[e].scale+(i[a].scale-i[e].scale)*s,d=i[e].opacity+(i[a].opacity-i[e].opacity)*s;t.setStyle({transform:"translate3d("+l+"px, 0px, 0px) scale("+p+")","z-index":i[e].zIndex,opacity:d})}}));else if("right"==a.direction){var l=0==r?i.length-1:r-1;a.itemsInstance[l].setStyle({transform:"translate3d(-"+(n.itemWidth-o)+"px, 0px, 0px) scale(1)","z-index":i[r].zIndex+1,opacity:i[r].opacity}),Math.abs(o)<c&&a.itemsInstance.forEach((function(t,e){if(e!=l){var a=e==i.length-1?0:e+1,n=Math.abs(o)/c,r=i[e].translateX+(i[a].translateX-i[e].translateX)*n,s=i[e].scale-(i[e].scale-i[a].scale)*n,p=i[e].opacity-(i[e].opacity-i[a].opacity)*n;t.setStyle({transform:"translate3d("+r+"px, 0px, 0px) scale("+s+")","z-index":i[e].zIndex,opacity:p})}}))}}else if("vertical"===n.direction){var p=a.itemAnimationHeight,d=t.y-s.y;if(t.y>n.windowHeight||t.y<0)return;if("up"==a.direction)e.setStyle({transform:"translate3d(0px, "+d+"px, 0px)","z-index":i[r].zIndex+1,opacity:i[r].opacity}),Math.abs(d)>p&&a.itemsInstance.forEach((function(t,e){if(e!=r){var a=0==e?i.length-1:e-1,s=(Math.abs(d)-p)/(n.itemHeight-p),c=i[e].translateY-(i[e].translateY-i[a].translateY)*s,o=i[e].scale+(i[a].scale-i[e].scale)*s,l=i[e].opacity+(i[a].opacity-i[e].opacity)*s;t.setStyle({transform:"translate3d(0px, "+c+"px, 0px) scale("+o+")","z-index":i[e].zIndex,opacity:l})}}));else if("down"==a.direction){l=0==r?i.length-1:r-1;a.itemsInstance[l].setStyle({transform:"translate3d(0px, -"+(n.itemHeight-d)+"px, 0px) scale(1)","z-index":i[r].zIndex+1,opacity:i[r].opacity}),Math.abs(d)<p&&a.itemsInstance.forEach((function(t,e){if(e!=l){var a=e==i.length-1?0:e+1,n=Math.abs(d)/p,r=i[e].translateY+(i[a].translateY-i[e].translateY)*n,s=i[e].scale-(i[e].scale-i[a].scale)*n,c=i[e].opacity-(i[e].opacity-i[a].opacity)*n;t.setStyle({transform:"translate3d(0px, "+r+"px, 0px) scale("+s+")","z-index":i[e].zIndex,opacity:c})}}))}}}(c,a,i)}}},touchEnd:function(t,e){var a=t.instance,c=a.getDataset(),o=e.getState(),l=o.itemData,p=o.list,d=o.touchRelactive;if(c.index==o.currentIndex&&o.touching){var x=t.changedTouches[0];if(x&&o.touchId==x.identifier){if(s(o,!0),"horizontal"===l.direction){var u=o.itemAnimationWidth;if("left"==o.direction)if(Math.abs(x.pageX-d.x)<u)p.forEach((function(t,e){var a=o.itemsInstance[e];t&&a&&a.setStyle({transform:"translate3d("+t.translateX+"px, 0px, 0px) scale("+t.scale+")","z-index":t.zIndex})}));else{var f=o.currentIndex+1>p.length-1?0:o.currentIndex+1;i(0,x,a,o),n(f,e,o)}else if("right"==o.direction)if(Math.abs(x.pageX-d.x)<u){var h=0==o.currentIndex?p.length-1:o.currentIndex-1;o.itemsInstance[h].setStyle({transform:"translate3d(-"+l.itemWidth+"px, 0px, 0px) scale(1)","z-index":p[o.currentIndex].zIndex+1,opacity:p[o.currentIndex].opacity}),p.forEach((function(t,e){var a=o.itemsInstance[e];t&&a&&a.setStyle({transform:"translate3d("+t.translateX+"px, 0px, 0px) scale("+t.scale+")","z-index":t.zIndex,opacity:t.opacity})}))}else{f=o.currentIndex-1<0?p.length-1:o.currentIndex-1;r(f,x,a,o),n(f,e,o)}}else if("vertical"===l.direction){var y=o.itemAnimationHeight;if("up"==o.direction)if(Math.abs(x.pageY-d.y)<y)p.forEach((function(t,e){var a=o.itemsInstance[e];t&&a&&a.setStyle({transform:"translate3d(0px, "+t.translateY+"px, 0px) scale("+t.scale+")","z-index":t.zIndex,opacity:t.opacity})}));else{f=o.currentIndex+1>p.length-1?0:o.currentIndex+1;i(0,x,a,o),n(f,e,o)}else if("down"==o.direction)if(Math.abs(x.pageY-d.y)<y){h=0==o.currentIndex?p.length-1:o.currentIndex-1;o.itemsInstance[h].setStyle({transform:"translate3d(0px, -"+l.itemHeight+"px, 0px) scale(1)","z-index":p[o.currentIndex].zIndex+1,opacity:p[o.currentIndex].opacity}),p.forEach((function(t,e){var a=o.itemsInstance[e];t&&a&&a.setStyle({transform:"translate3d(0px, "+t.translateY+"px, 0px) scale("+t.scale+")","z-index":t.zIndex,opacity:t.opacity})}))}else{f=o.currentIndex-1<0?p.length-1:o.currentIndex-1;r(f,x,a,o),n(f,e,o)}}o.touchRelactive=null,o.touching=!1,o.direction=null,o.touchId=null,e.callMethod("changeTouchState",{touching:!1}),e.callMethod("setAutoPlay")}}}},e.exports}({exports:{}})}}).call(this,a("5fff")["getDate"])},ffa2:function(t,e,a){"use strict";a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return i})),a.d(e,"a",(function(){}));var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{wxsProps:{"change:autoplayFlag":"autoplayFlag","change:currentIndex":"swiperIndex","change:itemData":"itemData","change:list":"swiperList"},staticClass:"tn-stack-swiper-class tn-stack-swiper",style:{width:t.$tn.string.getLengthUnitValue(t.width),height:t.$tn.string.getLengthUnitValue(t.height)},attrs:{list:t.swiperList,itemData:t.itemData,currentIndex:t.swiperIndex,autoplayFlag:t.autoplayFlag,"change:list":t.wxs.listObserver,"change:itemData":t.wxs.itemDataObserver,"change:currentIndex":t.wxs.swiperIndexChange,"change:autoplayFlag":t.wxs.autoplayFlagChange}},[t._l(t.list,(function(e,n){return[a("v-uni-view",{key:n+"_0",staticClass:"tn-stack-swiper__item",class:["tn-stack-swiper__item--"+t.direction],attrs:{"data-index":n,"data-switchRate":t.switchRate},on:{touchstart:function(e){e=t.$handleWxsEvent(e),t.wxs.touchStart(e,t.$getComponentDescriptor())},touchmove:function(e){e=t.$handleWxsEvent(e),t.wxs.touchMove(e,t.$getComponentDescriptor())},touchend:function(e){e=t.$handleWxsEvent(e),t.wxs.touchEnd(e,t.$getComponentDescriptor())}}},[a("v-uni-image",{staticClass:"tn-stack-swiper__image",attrs:{src:e.image}})],1)]}))],2)},i=[]}}]);