(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["templatePage-login-demo3-demo3"],{"35b4":function(t,n,e){"use strict";e("7a82");var i=e("4ea4").default;Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=i(e("7e6c")),a={name:"login-demo-3",mixins:[o.default],data:function(){return{currentModeIndex:0,modeSliderStyle:{left:0},showPassword:!1,tips:"获取验证码"}},watch:{currentModeIndex:function(t){var n=uni.upx2px(238);this.modeSliderStyle.left="".concat(n*t,"px")}},methods:{modeSwitch:function(t){this.currentModeIndex=t,this.showPassword=!1},getCode:function(){var t=this;this.$refs.code.canGetCode?(this.$tn.message.loading("正在获取验证码"),setTimeout((function(){t.$tn.message.closeLoading(),t.$tn.message.toast("验证码已经发送"),t.$refs.code.start()}),2e3)):this.$tn.message.toast(this.$refs.code.secNum+"秒后再重试")},codeChange:function(t){this.tips=t}}};n.default=a},"7e6c":function(t,n,e){var i=e("c973").default;e("96cf"),t.exports={data:function(){return{}},onLoad:function(){this.updateCustomBarInfo()},methods:{goBack:function(){var t=getCurrentPages();if(t&&t.length>0){var n=t[0];1!=t.length||n.route&&"pages/index/index"==n.route?uni.navigateBack({delta:1}):uni.reLaunch({url:"/pages/index/index"})}else uni.reLaunch({url:"/pages/index/index"})},updateCustomBarInfo:function(){var t=this;return i(regeneratorRuntime.mark((function n(){var e,i,o;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(e=t.vuex_custom_bar_height,i=t.vuex_status_bar_height,e){n.next=15;break}return n.prev=3,n.next=6,t.$tn.updateCustomBar();case 6:o=n.sent,e=o.customBarHeight,i=o.statusBarHeight,n.next=15;break;case 11:return n.prev=11,n.t0=n["catch"](3),setTimeout((function(){t.updateCustomBarInfo()}),10),n.abrupt("return");case 15:t.$tn.vuex("vuex_status_bar_height",i),t.$tn.vuex("vuex_custom_bar_height",e);case 17:case"end":return n.stop()}}),n,null,[[3,11]])})))()}}}},"7f88":function(t,n,e){var i=e("9b84");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=e("4f06").default;o("88edaa3c",i,!0,{sourceMap:!1,shadowMode:!1})},"9b84":function(t,n,e){var i=e("24fb");n=i(!1),n.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 下方引入的为Tuniao UI的集成样式文件，为scss预处理器，其中包含了一些"tn-"开头的自定义变量\r\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\r\n * Tuniao UI自定义的css类名和scss变量，均以"tn-"开头，不会造成冲突，请放心使用 \r\n */.tn-custom-nav-bar__back[data-v-b98f0d2e]{width:100%;height:100%;position:relative;display:flex;justify-content:space-evenly;align-items:center;box-sizing:border-box;background-color:rgba(0,0,0,.15);border-radius:%?1000?%;border:%?1?% solid hsla(0,0%,100%,.5);color:#fff;font-size:18px}.tn-custom-nav-bar__back .icon[data-v-b98f0d2e]{display:block;flex:1;margin:auto;text-align:center}.tn-custom-nav-bar__back[data-v-b98f0d2e]:before{content:" ";width:%?1?%;height:110%;position:absolute;top:22.5%;left:0;right:0;margin:auto;-webkit-transform:scale(.5);transform:scale(.5);-webkit-transform-origin:0 0;transform-origin:0 0;pointer-events:none;box-sizing:border-box;opacity:.7;background-color:#fff}\r\n/* 悬浮 */.login-sussuspension[data-v-b98f0d2e]{-webkit-animation:suspension-data-v-b98f0d2e 3s ease-in-out infinite;animation:suspension-data-v-b98f0d2e 3s ease-in-out infinite}@-webkit-keyframes suspension-data-v-b98f0d2e{0%, 100%{-webkit-transform:translate(0);transform:translate(0)}50%{-webkit-transform:translateY(1rem);transform:translateY(1rem)}}@keyframes suspension-data-v-b98f0d2e{0%, 100%{-webkit-transform:translate(0);transform:translate(0)}50%{-webkit-transform:translateY(1rem);transform:translateY(1rem)}}.login[data-v-b98f0d2e]{position:relative;height:100%;z-index:1\r\n  /* 背景图片 start */\r\n  /* 背景图片 end */\r\n  /* 内容 start */\r\n  /* 切换 start */\r\n  /* 切换 end */\r\n  /* 登录注册信息 start */\r\n  /* 登录注册信息 end */\r\n  /* 登录方式切换 start */\r\n  /* 登录方式切换 end */\r\n  /* 内容 end */}.login__bg[data-v-b98f0d2e]{z-index:-1;position:fixed\r\n  /* &--bottom {\r\n      bottom: -10rpx;\r\n      left: 0;\r\n      right: 0;\r\n      width: 100%;\r\n      margin-bottom: env(safe-area-inset-bottom);\r\n      \r\n      image {\r\n        width: 750rpx;\r\n        will-change: transform;\r\n      }\r\n    } */}.login__bg--top[data-v-b98f0d2e]{top:0;left:0;right:0;width:100%}.login__bg--top .bg[data-v-b98f0d2e]{width:100vw;height:100vh;will-change:transform}.login__wrapper[data-v-b98f0d2e]{margin-top:%?403?%;width:100%}.login__mode[data-v-b98f0d2e]{position:relative;margin:0 auto;width:%?476?%;height:%?77?%;background-color:hsla(0,0%,100%,.6);box-shadow:%?0?% %?10?% %?50?% %?0?% rgba(0,3,72,.1);border-radius:%?39?%}.login__mode__item[data-v-b98f0d2e]{height:%?77?%;width:100%;line-height:%?77?%;text-align:center;font-size:%?31?%;color:#fff;letter-spacing:1em;text-indent:1em;z-index:2;transition:all .4s}.login__mode__item--active[data-v-b98f0d2e]{font-weight:700;color:#fff}.login__mode__slider[data-v-b98f0d2e]{position:absolute;height:inherit;width:calc(%?476?% / 2);border-radius:inherit;box-shadow:%?0?% %?18?% %?72?% %?18?% rgba(0,195,255,.1);z-index:1;transition:all .3s cubic-bezier(.68,-.55,.265,1.55)}.login__info[data-v-b98f0d2e]{margin:0 %?30?%;margin-top:%?105?%;padding:%?30?% %?51?%;padding-bottom:0;border-radius:%?20?%;background-color:hsla(0,0%,100%,.3);box-shadow:%?0?% %?10?% %?50?% %?0?% rgba(0,3,72,.1)}.login__info__item__input[data-v-b98f0d2e]{margin-top:%?59?%;width:100%;height:%?77?%;border:%?1?% solid #e6e6e6;border-radius:%?39?%}.login__info__item__input__left-icon[data-v-b98f0d2e]{width:10%;font-size:%?44?%;margin-left:%?20?%;color:#fff}.login__info__item__input__content[data-v-b98f0d2e]{width:80%;padding-left:%?10?%}.login__info__item__input__content--verify-code[data-v-b98f0d2e]{width:56%}.login__info__item__input__content uni-input[data-v-b98f0d2e]{font-size:%?24?%}.login__info__item__input__right-icon[data-v-b98f0d2e]{width:10%;font-size:%?44?%;margin-right:%?20?%;color:#aaa}.login__info__item__input__right-verify-code[data-v-b98f0d2e]{width:34%;margin-right:%?20?%}.login__info__item__button[data-v-b98f0d2e]{margin-top:%?75?%;margin-bottom:%?39?%;width:100%;height:%?77?%;text-align:center;font-size:%?31?%;font-weight:700;line-height:%?77?%;letter-spacing:1em;text-indent:1em;border-radius:%?39?%;box-shadow:%?1?% %?10?% %?24?% %?0?% rgba(60,129,254,.35)}.login__info__item__tips[data-v-b98f0d2e]{margin:%?30?% 0;color:#aaa}.login__way[data-v-b98f0d2e]{margin:0 auto;margin-top:%?110?%}.login__way__item--icon[data-v-b98f0d2e]{width:%?77?%;height:%?77?%;font-size:%?50?%;border-radius:%?100?%;margin-bottom:%?18?%;position:relative;z-index:1}.login__way__item--icon[data-v-b98f0d2e]::after{content:" ";position:absolute;z-index:-1;width:100%;height:100%;left:0;bottom:0;border-radius:inherit;opacity:1;-webkit-transform:scale(1);transform:scale(1);background-size:100% 100%;background-image:url(https://tnuiimage.tnkjapp.com/cool_bg_image/icon_bg5.png)}[data-v-b98f0d2e] .input-placeholder{font-size:%?24?%;color:#e6e6e6}',""]),t.exports=n},aa9f:function(t,n,e){"use strict";e.r(n);var i=e("e2a1"),o=e("e392");for(var a in o)["default"].indexOf(a)<0&&function(t){e.d(n,t,(function(){return o[t]}))}(a);e("dfa7");var s=e("f0c5"),r=Object(s["a"])(o["default"],i["b"],i["c"],!1,null,"b98f0d2e",null,!1,i["a"],void 0);n["default"]=r.exports},c973:function(t,n,e){function i(t,n,e,i,o,a,s){try{var r=t[a](s),l=r.value}catch(c){return void e(c)}r.done?n(l):Promise.resolve(l).then(i,o)}e("d3b7"),t.exports=function(t){return function(){var n=this,e=arguments;return new Promise((function(o,a){var s=t.apply(n,e);function r(t){i(s,o,a,r,l,"next",t)}function l(t){i(s,o,a,r,l,"throw",t)}r(void 0)}))}},t.exports.__esModule=!0,t.exports["default"]=t.exports},dfa7:function(t,n,e){"use strict";var i=e("7f88"),o=e.n(i);o.a},e2a1:function(t,n,e){"use strict";e.d(n,"b",(function(){return o})),e.d(n,"c",(function(){return a})),e.d(n,"a",(function(){return i}));var i={tnNavBar:e("5138").default,tnButton:e("9bb4").default,tnVerificationCode:e("61d7").default},o=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",{staticClass:"template-login"},[e("tn-nav-bar",{attrs:{fixed:!0,alpha:!0,customBack:!0}},[e("v-uni-view",{staticClass:"tn-custom-nav-bar__back",attrs:{slot:"back"},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.goBack.apply(void 0,arguments)}},slot:"back"},[e("v-uni-text",{staticClass:"icon tn-icon-left"}),e("v-uni-text",{staticClass:"icon tn-icon-home-capsule-fill"})],1)],1),e("v-uni-view",{staticClass:"login"},[e("v-uni-view",{staticClass:"login__bg login__bg--top"},[e("v-uni-image",{staticClass:"bg",attrs:{src:"https://tnuiimage.tnkjapp.com/swiper/banner-animate2.png",mode:"aspectFill"}})],1),e("v-uni-view",{staticClass:"login__wrapper"},[e("v-uni-view",{staticClass:"login-sussuspension login__mode tn-flex tn-flex-direction-row tn-flex-nowrap tn-flex-col-center tn-flex-row-center"},[e("v-uni-view",{staticClass:"login__mode__item tn-flex-1",class:[{"login__mode__item--active":0===t.currentModeIndex}],on:{click:function(n){n.stopPropagation(),arguments[0]=n=t.$handleEvent(n),t.modeSwitch(0)}}},[t._v("登录")]),e("v-uni-view",{staticClass:"login__mode__item tn-flex-1",class:[{"login__mode__item--active":1===t.currentModeIndex}],on:{click:function(n){n.stopPropagation(),arguments[0]=n=t.$handleEvent(n),t.modeSwitch(1)}}},[t._v("注册")]),e("v-uni-view",{staticClass:"login__mode__slider tn-cool-bg-color-15--reverse",style:[t.modeSliderStyle]})],1),e("v-uni-view",{staticClass:"login__info tn-flex tn-flex-direction-column tn-flex-col-center tn-flex-row-center"},[0===t.currentModeIndex?[e("v-uni-view",{staticClass:"login__info__item__input tn-flex tn-flex-direction-row tn-flex-nowrap tn-flex-col-center tn-flex-row-left"},[e("v-uni-view",{staticClass:"login__info__item__input__left-icon"},[e("v-uni-view",{staticClass:"tn-icon-phone"})],1),e("v-uni-view",{staticClass:"login__info__item__input__content"},[e("v-uni-input",{attrs:{maxlength:"20","placeholder-class":"input-placeholder",placeholder:"请输入登录手机号码"}})],1)],1),e("v-uni-view",{staticClass:"login__info__item__input tn-flex tn-flex-direction-row tn-flex-nowrap tn-flex-col-center tn-flex-row-left"},[e("v-uni-view",{staticClass:"login__info__item__input__left-icon"},[e("v-uni-view",{staticClass:"tn-icon-lock"})],1),e("v-uni-view",{staticClass:"login__info__item__input__content"},[e("v-uni-input",{attrs:{password:!t.showPassword,"placeholder-class":"input-placeholder",placeholder:"请输入登录密码"}})],1),e("v-uni-view",{staticClass:"login__info__item__input__right-icon",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.showPassword=!t.showPassword}}},[e("v-uni-view",{class:[t.showPassword?"tn-icon-eye":"tn-icon-eye-hide"]})],1)],1)]:t._e(),1===t.currentModeIndex?[e("v-uni-view",{staticClass:"login__info__item__input tn-flex tn-flex-direction-row tn-flex-nowrap tn-flex-col-center tn-flex-row-left"},[e("v-uni-view",{staticClass:"login__info__item__input__left-icon"},[e("v-uni-view",{staticClass:"tn-icon-phone"})],1),e("v-uni-view",{staticClass:"login__info__item__input__content"},[e("v-uni-input",{attrs:{maxlength:"20","placeholder-class":"input-placeholder",placeholder:"请输入注册手机号码"}})],1)],1),e("v-uni-view",{staticClass:"login__info__item__input tn-flex tn-flex-direction-row tn-flex-nowrap tn-flex-col-center tn-flex-row-left"},[e("v-uni-view",{staticClass:"login__info__item__input__left-icon"},[e("v-uni-view",{staticClass:"tn-icon-code"})],1),e("v-uni-view",{staticClass:"login__info__item__input__content login__info__item__input__content--verify-code"},[e("v-uni-input",{attrs:{"placeholder-class":"input-placeholder",placeholder:"请输入验证码"}})],1),e("v-uni-view",{staticClass:"login__info__item__input__right-verify-code",on:{click:function(n){n.stopPropagation(),arguments[0]=n=t.$handleEvent(n),t.getCode.apply(void 0,arguments)}}},[e("tn-button",{attrs:{backgroundColor:"#01BEFF",fontColor:"#FFFFFF",size:"sm",padding:"5rpx 10rpx",width:"100%",shape:"round"}},[t._v(t._s(t.tips))])],1)],1),e("v-uni-view",{staticClass:"login__info__item__input tn-flex tn-flex-direction-row tn-flex-nowrap tn-flex-col-center tn-flex-row-left"},[e("v-uni-view",{staticClass:"login__info__item__input__left-icon"},[e("v-uni-view",{staticClass:"tn-icon-lock"})],1),e("v-uni-view",{staticClass:"login__info__item__input__content"},[e("v-uni-input",{attrs:{password:!t.showPassword,"placeholder-class":"input-placeholder",placeholder:"请输入登录密码"}})],1),e("v-uni-view",{staticClass:"login__info__item__input__right-icon",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.showPassword=!t.showPassword}}},[e("v-uni-view",{class:[t.showPassword?"tn-icon-eye":"tn-icon-eye-hide"]})],1)],1)]:t._e(),e("v-uni-view",{staticClass:"login__info__item__button tn-cool-bg-color-7--reverse",attrs:{"hover-class":"tn-hover","hover-stay-time":150}},[t._v(t._s(0===t.currentModeIndex?"登录":"注册"))]),0===t.currentModeIndex?e("v-uni-view",{staticClass:"login__info__item__tips"},[t._v("忘记密码?")]):t._e()],2),e("v-uni-view",{staticClass:"login__way tn-flex tn-flex-col-center tn-flex-row-center"},[e("v-uni-view",{staticClass:"tn-padding-sm tn-margin-xs"},[e("v-uni-view",{staticClass:"login__way__item--icon tn-flex tn-flex-row-center tn-flex-col-center tn-shadow-blur tn-bg-green tn-color-white"},[e("v-uni-view",{staticClass:"tn-icon-wechat-fill"})],1)],1),e("v-uni-view",{staticClass:"tn-padding-sm tn-margin-xs"},[e("v-uni-view",{staticClass:"login__way__item--icon tn-flex tn-flex-row-center tn-flex-col-center tn-shadow-blur tn-bg-red tn-color-white"},[e("v-uni-view",{staticClass:"tn-icon-sina"})],1)],1),e("v-uni-view",{staticClass:"tn-padding-sm tn-margin-xs"},[e("v-uni-view",{staticClass:"login__way__item--icon tn-flex tn-flex-row-center tn-flex-col-center tn-shadow-blur tn-bg-blue tn-color-white"},[e("v-uni-view",{staticClass:"tn-icon-qq"})],1)],1)],1)],1)],1),e("tn-verification-code",{ref:"code",attrs:{uniqueKey:"login-demo-3",seconds:60},on:{change:function(n){arguments[0]=n=t.$handleEvent(n),t.codeChange.apply(void 0,arguments)}}})],1)},a=[]},e392:function(t,n,e){"use strict";e.r(n);var i=e("35b4"),o=e.n(i);for(var a in i)["default"].indexOf(a)<0&&function(t){e.d(n,t,(function(){return i[t]}))}(a);n["default"]=o.a}}]);