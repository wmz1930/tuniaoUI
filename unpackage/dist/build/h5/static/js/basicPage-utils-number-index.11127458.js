(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["basicPage-utils-number-index"],{"0f9f":function(t,e,n){"use strict";n("7a82");var i=n("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("a9e3"),n("498a");var a=i(n("31cb")),o={mixins:[a.default],name:"tn-input",props:{value:{type:[String,Number],default:""},type:{type:String,default:"text"},inputAlign:{type:String,default:"left"},placeholder:{type:String,default:""},placeholderStyle:{type:String,default:"color: #AAAAAA"},disabled:{type:Boolean,default:!1},maxLength:{type:Number,default:255},height:{type:Number,default:0},autoHeight:{type:Boolean,default:!0},confirmType:{type:String,default:"done"},customStyle:{type:Object,default:function(){return{}}},fixed:{type:Boolean,default:!1},focus:{type:Boolean,default:!1},passwordIcon:{type:Boolean,default:!0},border:{type:Boolean,default:!1},borderColor:{type:String,default:"#dcdfe6"},selectOpen:{type:Boolean,default:!1},clearable:{type:Boolean,default:!0},cursorSpacing:{type:Number,default:0},selectionStart:{type:Number,default:-1},selectionEnd:{type:Number,default:-1},trim:{type:Boolean,default:!0},showConfirmBar:{type:Boolean,default:!0},showRightIcon:{type:Boolean,default:!1},rightIcon:{type:String,default:""}},computed:{inputStyle:function(){var t={};return t.minHeight=this.height?this.height+"rpx":"textarea"===this.type?this.textareaHeight+"rpx":this.inputHeight+"rpx",t=Object.assign(t,this.customStyle),t},elSelectionStart:function(){return String(this.selectionStart)},elSelectionEnd:function(){return String(this.selectionEnd)}},data:function(){return{defaultValue:this.value,inputHeight:70,textareaHeight:100,validateState:!1,focused:!1,showPassword:!1,lastValue:""}},watch:{value:function(t,e){this.defaultValue=t,t!==e&&"select"===this.type&&this.handleInput({detail:{value:t}})}},created:function(){this.$on("on-form-item-error",this.onFormItemError)},methods:{handleInput:function(t){var e=this,n=t.detail.value;this.trim&&(n=this.$tn.string.trim(n)),this.$emit("input",n),this.defaultValue=n,setTimeout((function(){e.dispatch("tn-form-item","on-form-change",n)}),40)},handleBlur:function(t){var e=this,n=t.detail.value;setTimeout((function(){e.focused=!1}),100),this.$emit("blur",n),setTimeout((function(){e.dispatch("tn-form-item","on-form-blur",n)}),40)},onFormItemError:function(t){this.validateState=t},onFocus:function(t){this.focused=!0,this.$emit("focus")},onConfirm:function(t){this.$emit("confirm",t.detail.value)},onClear:function(t){this.$emit("input","")},inputClick:function(){this.$emit("click")}}};e.default=o},1578:function(t,e,n){"use strict";var i=n("b7da"),a=n.n(i);a.a},"2e54":function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){}));var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"tn-input-class tn-input",class:{"tn-input--border":t.border,"tn-input--error":t.validateState},style:{padding:"0 "+(t.border?20:0)+"rpx",borderColor:t.borderColor,textAlign:t.inputAlign},on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.inputClick.apply(void 0,arguments)}}},["textarea"===t.type?n("v-uni-textarea",{staticClass:"tn-input__input tn-input__textarea",style:[t.inputStyle],attrs:{value:t.defaultValue,placeholder:t.placeholder,placeholderStyle:t.placeholderStyle,disabled:t.disabled||"select"===t.type,maxlength:t.maxLength,fixed:t.fixed,focus:t.focus,autoHeight:t.autoHeight,selectionStart:t.elSelectionStart,selectionEnd:t.elSelectionEnd,cursorSpacing:t.cursorSpacing,showConfirmBar:t.showConfirmBar},on:{input:function(e){arguments[0]=e=t.$handleEvent(e),t.handleInput.apply(void 0,arguments)},blur:function(e){arguments[0]=e=t.$handleEvent(e),t.handleBlur.apply(void 0,arguments)},focus:function(e){arguments[0]=e=t.$handleEvent(e),t.onFocus.apply(void 0,arguments)},confirm:function(e){arguments[0]=e=t.$handleEvent(e),t.onConfirm.apply(void 0,arguments)}}}):n("v-uni-input",{staticClass:"tn-input__input",style:[t.inputStyle],attrs:{type:"password"===t.type?"text":t.type,value:t.defaultValue,password:"password"===t.type&&!t.showPassword,placeholder:t.placeholder,placeholderStyle:t.placeholderStyle,disabled:t.disabled||"select"===t.type,maxlength:t.maxLength,focus:t.focus,confirmType:t.confirmType,selectionStart:t.elSelectionStart,selectionEnd:t.elSelectionEnd,cursorSpacing:t.cursorSpacing,showConfirmBar:t.showConfirmBar},on:{input:function(e){arguments[0]=e=t.$handleEvent(e),t.handleInput.apply(void 0,arguments)},blur:function(e){arguments[0]=e=t.$handleEvent(e),t.handleBlur.apply(void 0,arguments)},focus:function(e){arguments[0]=e=t.$handleEvent(e),t.onFocus.apply(void 0,arguments)},confirm:function(e){arguments[0]=e=t.$handleEvent(e),t.onConfirm.apply(void 0,arguments)}}}),n("v-uni-view",{staticClass:"tn-input__right-icon tn-flex tn-flex-col-center"},[t.clearable&&""!==t.value&&t.focused?n("v-uni-view",{staticClass:"tn-input__right-icon__item tn-input__right-icon__clear",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClear.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"icon tn-icon-close"})],1):"text"===t.type&&!t.focused&&t.showRightIcon&&""!==t.rightIcon?n("v-uni-view",{staticClass:"tn-input__right-icon__item tn-input__right-icon__clear"},[n("v-uni-view",{staticClass:"icon",class:["tn-icon-"+t.rightIcon]})],1):t._e(),t.passwordIcon&&"password"===t.type?n("v-uni-view",{staticClass:"tn-input__right-icon__item tn-input__right-icon__clear",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.showPassword=!t.showPassword}}},[t.showPassword?n("v-uni-view",{staticClass:"icon tn-icon-eye"}):n("v-uni-view",{staticClass:"tn-icon-eye-hide"})],1):t._e(),"select"===t.type?n("v-uni-view",{staticClass:"tn-input__right-icon__item tn-input__right-icon__select",class:{"tn-input__right-icon__select--reverse":t.selectOpen}},[n("v-uni-view",{staticClass:"icon tn-icon-up-triangle"})],1):t._e()],1)],1)},a=[]},"2eb0":function(t,e,n){"use strict";n.r(e);var i=n("d316"),a=n("aff4");for(var o in a)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(o);n("e31c");var l=n("f0c5"),r=Object(l["a"])(a["default"],i["b"],i["c"],!1,null,"1136f150",null,!1,i["a"],void 0);e["default"]=r.exports},"407b":function(t,e,n){"use strict";n.r(e);var i=n("0f9f"),a=n.n(i);for(var o in i)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(o);e["default"]=a.a},"4b3e":function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 下方引入的为Tuniao UI的集成样式文件，为scss预处理器，其中包含了一些"tn-"开头的自定义变量\r\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\r\n * Tuniao UI自定义的css类名和scss变量，均以"tn-"开头，不会造成冲突，请放心使用 \r\n */.basic-utils__number[data-v-1136f150]{background-color:#f4f4f4;min-height:100vh}',""]),t.exports=e},"612b":function(t,e,n){"use strict";n.r(e);var i=n("2e54"),a=n("407b");for(var o in a)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(o);n("1578");var l=n("f0c5"),r=Object(l["a"])(a["default"],i["b"],i["c"],!1,null,"4a3a2be0",null,!1,i["a"],void 0);e["default"]=r.exports},8195:function(t,e,n){"use strict";n("7a82");var i=n("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=i(n("2ee6")),o={name:"basicUtilsNumber",components:{demoTitle:a.default},data:function(){return{randomValue:"",intRandomValue:""}},methods:{getRandomValue:function(){this.randomValue=this.$tn.number.random(0,100.99)},getIntRandomValue:function(){this.intRandomValue=this.$tn.number.randomInt(0,100)}}};e.default=o},"9d94":function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 下方引入的为Tuniao UI的集成样式文件，为scss预处理器，其中包含了一些"tn-"开头的自定义变量\r\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\r\n * Tuniao UI自定义的css类名和scss变量，均以"tn-"开头，不会造成冲突，请放心使用 \r\n */.tn-input[data-v-4a3a2be0]{display:flex;flex-direction:row;position:relative;flex:1}.tn-input__input[data-v-4a3a2be0]{font-size:%?28?%;color:#080808;flex:1}.tn-input__textarea[data-v-4a3a2be0]{width:auto;font-size:%?28?%;color:#080808;padding:%?10?% 0;line-height:normal;flex:1}.tn-input--border[data-v-4a3a2be0]{border-radius:%?6?%;border:%?2?% solid rgba(0,0,0,.1)}.tn-input--error[data-v-4a3a2be0]{border-color:#e83a30!important}.tn-input__right-icon[data-v-4a3a2be0]{line-height:1}.tn-input__right-icon .icon[data-v-4a3a2be0]{color:#aaa}.tn-input__right-icon__item[data-v-4a3a2be0]{margin-left:%?10?%}.tn-input__right-icon__clear .icon[data-v-4a3a2be0]{font-size:%?32?%}.tn-input__right-icon__select[data-v-4a3a2be0]{transition:-webkit-transform .4s;transition:transform .4s;transition:transform .4s,-webkit-transform .4s}.tn-input__right-icon__select .icon[data-v-4a3a2be0]{font-size:%?26?%}.tn-input__right-icon__select--reverse[data-v-4a3a2be0]{-webkit-transform:rotate(-180deg);transform:rotate(-180deg)}',""]),t.exports=e},aff4:function(t,e,n){"use strict";n.r(e);var i=n("8195"),a=n.n(i);for(var o in i)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(o);e["default"]=a.a},b7da:function(t,e,n){var i=n("9d94");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("094732cc",i,!0,{sourceMap:!1,shadowMode:!1})},bbff:function(t,e,n){var i=n("4b3e");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("8d820204",i,!0,{sourceMap:!1,shadowMode:!1})},d316:function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return i}));var i={tnNavBar:n("5138").default,tnListView:n("ce98").default,tnListCell:n("49f0").default,tnFormItem:n("58c6").default,tnInput:n("612b").default,tnButton:n("9bb4").default},a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"basic-utils__number tn-safe-area-inset-bottom"},[n("tn-nav-bar",{attrs:{fixed:!0}},[t._v("Number工具")]),n("v-uni-view",{style:{paddingTop:t.vuex_custom_bar_height+"px"}},[n("demo-title",{attrs:{title:"超过指定长度自动添加'+'号"}},[n("tn-list-view",{attrs:{backgroundColor:"tn-bg-white"}},[n("tn-list-cell",[n("v-uni-view",{staticClass:"tn-flex tn-flex-col-center tn-flex-row-between"},[n("v-uni-view",[t._v("超过2位自动添加'+'号")]),n("v-uni-view",[t._v(t._s(t.$tn.number.formatNumberString(56)))])],1)],1),n("tn-list-cell",[n("v-uni-view",{staticClass:"tn-flex tn-flex-col-center tn-flex-row-between"},[n("v-uni-view",[t._v("超过2位自动添加'+'号")]),n("v-uni-view",[t._v(t._s(t.$tn.number.formatNumberString(100)))])],1)],1),n("tn-list-cell",[n("v-uni-view",{staticClass:"tn-flex tn-flex-col-center tn-flex-row-between"},[n("v-uni-view",[t._v("超过3位自动添加'+'号")]),n("v-uni-view",[t._v(t._s(t.$tn.number.formatNumberString(899,3)))])],1)],1),n("tn-list-cell",[n("v-uni-view",{staticClass:"tn-flex tn-flex-col-center tn-flex-row-between"},[n("v-uni-view",[t._v("超过3位自动添加'+'号")]),n("v-uni-view",[t._v(t._s(t.$tn.number.formatNumberString(1e3,3)))])],1)],1)],1)],1),n("demo-title",{attrs:{title:"往数字前添加'0'"}},[n("tn-list-view",{attrs:{backgroundColor:"tn-bg-white"}},[n("tn-list-cell",[n("v-uni-view",{staticClass:"tn-flex tn-flex-col-center tn-flex-row-between"},[n("v-uni-view",[t._v("只有一位时会往前面添加'0'")]),n("v-uni-view",[t._v(t._s(t.$tn.number.formatNumberAddZero(6)))])],1)],1),n("tn-list-cell",[n("v-uni-view",{staticClass:"tn-flex tn-flex-col-center tn-flex-row-between"},[n("v-uni-view",[t._v("超过两位时不会往前面添加'0'")]),n("v-uni-view",[t._v(t._s(t.$tn.number.formatNumberAddZero(16)))])],1)],1),n("tn-list-cell",[n("v-uni-view",{staticClass:"tn-flex tn-flex-col-center tn-flex-row-between"},[n("v-uni-view",[t._v("超过两位时不会往前面添加'0'")]),n("v-uni-view",[t._v(t._s(t.$tn.number.formatNumberAddZero(106)))])],1)],1)],1)],1),n("demo-title",{attrs:{title:"数值转换为带单位金额"}},[n("tn-list-view",{attrs:{backgroundColor:"tn-bg-white"}},[n("tn-list-cell",[n("v-uni-view",{staticClass:"tn-flex tn-flex-col-center tn-flex-row-between"},[n("v-uni-view",[t._v("不带单位")]),n("v-uni-view",[t._v(t._s(t.$tn.number.formatNumberAddPriceUnit(100)))])],1)],1),n("tn-list-cell",[n("v-uni-view",{staticClass:"tn-flex tn-flex-col-center tn-flex-row-between"},[n("v-uni-view",[t._v("不带单位")]),n("v-uni-view",[t._v(t._s(t.$tn.number.formatNumberAddPriceUnit(100.88)))])],1)],1),n("tn-list-cell",[n("v-uni-view",{staticClass:"tn-flex tn-flex-col-center tn-flex-row-between"},[n("v-uni-view",[t._v("带K单位")]),n("v-uni-view",[t._v(t._s(t.$tn.number.formatNumberAddPriceUnit(1e3)))])],1)],1),n("tn-list-cell",[n("v-uni-view",{staticClass:"tn-flex tn-flex-col-center tn-flex-row-between"},[n("v-uni-view",[t._v("带K单位")]),n("v-uni-view",[t._v(t._s(t.$tn.number.formatNumberAddPriceUnit(1032.89)))])],1)],1),n("tn-list-cell",[n("v-uni-view",{staticClass:"tn-flex tn-flex-col-center tn-flex-row-between"},[n("v-uni-view",[t._v("带W单位")]),n("v-uni-view",[t._v(t._s(t.$tn.number.formatNumberAddPriceUnit(1e4)))])],1)],1),n("tn-list-cell",[n("v-uni-view",{staticClass:"tn-flex tn-flex-col-center tn-flex-row-between"},[n("v-uni-view",[t._v("带W单位")]),n("v-uni-view",[t._v(t._s(t.$tn.number.formatNumberAddPriceUnit(10875.9)))])],1)],1)],1)],1),n("demo-title",{attrs:{title:"获取随机值"}},[n("v-uni-view",{staticClass:"tn-bg-white"},[n("tn-form-item",[n("v-uni-view",{staticClass:"tn-margin-left"},[n("tn-input",{attrs:{disabled:!0},model:{value:t.randomValue,callback:function(e){t.randomValue=e},expression:"randomValue"}})],1),n("template",{slot:"right"},[n("v-uni-view",{staticClass:"tn-margin-right-sm"},[n("tn-button",{attrs:{size:"sm",backgroundColor:"#01BEFF",fontColor:"#FFFFFF"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.getRandomValue.apply(void 0,arguments)}}},[t._v("获取随机值")])],1)],1)],2),n("tn-form-item",[n("v-uni-view",{staticClass:"tn-margin-left"},[n("tn-input",{attrs:{disabled:!0},model:{value:t.intRandomValue,callback:function(e){t.intRandomValue=e},expression:"intRandomValue"}})],1),n("template",{slot:"right"},[n("v-uni-view",{staticClass:"tn-margin-right-sm"},[n("tn-button",{attrs:{size:"sm",backgroundColor:"#01BEFF",fontColor:"#FFFFFF"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.getIntRandomValue.apply(void 0,arguments)}}},[t._v("获取整数随机值")])],1)],1)],2)],1)],1),n("v-uni-view",{staticClass:"tn-padding-bottom-lg"})],1)],1)},o=[]},e31c:function(t,e,n){"use strict";var i=n("bbff"),a=n.n(i);a.a}}]);