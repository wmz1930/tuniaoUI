(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["componentsPage-check-box-check-box"],{"10c5":function(t,e,a){"use strict";a.r(e);var n=a("ca90"),i=a("9158");for(var c in i)["default"].indexOf(c)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(c);a("55ad");var o=a("f0c5"),s=Object(o["a"])(i["default"],n["b"],n["c"],!1,null,"6cfeb4e6",null,!1,n["a"],void 0);e["default"]=s.exports},"114c":function(t,e,a){var n=a("5f09");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=a("4f06").default;i("a58b4c22",n,!0,{sourceMap:!1,shadowMode:!1})},1967:function(t,e,a){var n=a("d07c");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=a("4f06").default;i("6f526520",n,!0,{sourceMap:!1,shadowMode:!1})},"1e57":function(t,e,a){"use strict";a.r(e);var n=a("b13f"),i=a("c854");for(var c in i)["default"].indexOf(c)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(c);var o=a("f0c5"),s=Object(o["a"])(i["default"],n["b"],n["c"],!1,null,"58ff3684",null,!1,n["a"],void 0);e["default"]=s.exports},"2ee6":function(t,e,a){"use strict";a.r(e);var n=a("5e14"),i=a("fd7f");for(var c in i)["default"].indexOf(c)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(c);a("691b");var o=a("f0c5"),s=Object(o["a"])(i["default"],n["b"],n["c"],!1,null,"5d860f10",null,!1,n["a"],void 0);e["default"]=s.exports},"31cb":function(t,e,a){"use strict";function n(t,e,a){this.$children.map((function(i){t===i.$options.name?i.$emit.apply(i,[e].concat(a)):n.apply(i,[t,e].concat(a))}))}a("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a("d81d"),a("99af");var i={methods:{dispatch:function(t,e,a){var n=this.$parent||this.$root,i=n.$options.name;while(n&&(!i||i!==t))n=n.$parent,n&&(i=n.$options.name);n&&n.$emit.apply(n,[e].concat(a))},broadcast:function(t,e,a){n.call(this,t,e,a)}}};e.default=i},"35fb":function(t,e,a){"use strict";a.r(e);var n=a("52f7"),i=a.n(n);for(var c in n)["default"].indexOf(c)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(c);e["default"]=i.a},"41d2":function(t,e,a){"use strict";var n=a("1967"),i=a.n(n);i.a},"52f7":function(t,e,a){"use strict";a("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a("a9e3"),a("caad"),a("2532");var n={name:"tn-checkbox",props:{name:{type:[String,Number],default:""},value:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},disabledLabel:{type:Boolean,default:!1},shape:{type:String,default:""},activeColor:{type:String,default:""},size:{type:Number,default:0},iconName:{type:String,default:"success"},iconSize:{type:Number,default:0},labelSize:{type:Number,default:0}},computed:{isDisabled:function(){return this.disabled?this.disabled:!!this.parent&&this.parentData.disabled},isDisabledLabel:function(){return this.disabledLabel?this.disabledLabel:!!this.parent&&this.parentData.disabledLabel},checkboxSize:function(){return this.size?this.size:this.parent?this.parentData.size:34},elAvtiveColor:function(){return this.activeColor?this.activeColor:this.parent?this.parentData.activeColor:"#01BEFF"},elShape:function(){return this.shape?this.shape:this.parent?this.parentData.shape:"square"},iconClass:function(){var t="";return t+=" tn-checkbox__icon-wrap--"+this.elShape,this.checkValue&&(t+=" tn-checkbox__icon-wrap--checked"),this.isDisabled&&(t+=" tn-checkbox__icon-wrap--disabled"),this.value&&this.isDisabled&&(t+=" tn-checkbox__icon-wrap--disabled--checked"),t},iconStyle:function(){var t={};return this.elAvtiveColor&&this.checkValue&&!this.isDisabled&&(t.borderColor=this.elAvtiveColor,t.backgroundColor=this.elAvtiveColor),t.color=this.checkValue?"#FFFFFF":"transparent",t.width=this.checkboxSize+"rpx",t.height=t.width,t.fontSize=(this.iconSize?this.iconSize:this.parent?this.parentData.iconSize:20)+"rpx",t},checkboxStyle:function(){var t={};return this.parent&&this.parentData.width&&(t.flex="0 0 ".concat(this.parentData.width)),this.parent&&this.parentData.wrap&&(t.width="100%",t.flex="0 0 100%"),t},labelClass:function(){var t="";return this.isDisabled&&(t+=" tn-checkbox__label--disabled"),t}},data:function(){return{checkValue:!1,parentData:{value:null,max:null,disabled:null,disabledLabel:null,shape:null,activeColor:null,size:null,width:null,wrap:null,iconSize:null}}},watch:{value:function(t){this.checkValue=t}},created:function(){this.updateParentData(),this.parent&&this.parent.children.push(this)},methods:{updateCheckValue:function(){this.checkValue=this.parent&&this.parentData.value.includes(this.name)||!0===this.value,this.parent&&this.value&&!this.parentData.value.includes(this.name)&&(this.parentData.value.push(this.name),this.parent.initValue(this.parentData.value))},updateParentData:function(){this.getParentData("tn-checkbox-group"),this.updateCheckValue()},onClickLabel:function(){this.isDisabled||this.isDisabledLabel||this.setValue()},toggle:function(){this.isDisabled||this.setValue()},emitEvent:function(){var t=this;this.$emit("change",{name:this.name,value:!this.checkValue}),this.parent&&(this.checkValue=!this.checkValue,setTimeout((function(){t.parent.emitEvent&&t.parent.emitEvent()}),80))},setValue:function(){if(this.parent)if(!0===this.checkValue)this.emitEvent();else{if(this.parentData.value.length>=this.parentData.max)return this.$tn.message.toast("最多可选".concat(this.parent.max,"项"));this.emitEvent()}else this.emitEvent(),this.$emit("input",!this.checkValue)}}};e.default=n},"55ad":function(t,e,a){"use strict";var n=a("e1430"),i=a.n(n);i.a},"5e14":function(t,e,a){"use strict";a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return i})),a.d(e,"a",(function(){}));var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"demo-title"},[a("v-uni-view",["first"===t.type?a("v-uni-view",{staticClass:"main_title"},[t.leftIcon?a("v-uni-view",{staticClass:"main_title__icon main_title__icon--left",class:["tn-icon-"+t.leftIcon]}):t._e(),a("v-uni-view",{staticClass:"main_title__content"},[t._v(t._s(t.title))]),t.rightIcon?a("v-uni-view",{staticClass:"main_title__icon main_title__icon--right",class:["tn-icon-"+t.rightIcon]}):t._e()],1):t._e(),"second"===t.type?a("v-uni-view",{staticClass:"second_title"},[a("v-uni-view",{staticClass:"second_title__content"},[t._v(t._s(t.title))])],1):t._e()],1),a("v-uni-view",{staticClass:"content",class:[{"content--padding":t.contentPadding}]},[t._t("default")],2)],1)},i=[]},"5f09":function(t,e,a){var n=a("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 下方引入的为Tuniao UI的集成样式文件，为scss预处理器，其中包含了一些"tn-"开头的自定义变量\r\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\r\n * Tuniao UI自定义的css类名和scss变量，均以"tn-"开头，不会造成冲突，请放心使用 \r\n */.main_title[data-v-5d860f10]{display:flex;align-items:center;justify-content:center;margin-top:%?50?%;font-size:%?36?%;font-weight:700}.main_title__content[data-v-5d860f10]{padding:0 %?18?%}.main_title__icon[data-v-5d860f10]{font-size:%?34?%}.second_title[data-v-5d860f10]{margin:%?24?% 0;margin-left:%?30?%}.second_title__content[data-v-5d860f10]{font-size:%?32?%;font-weight:700}.content[data-v-5d860f10]{margin-top:%?30?%}.content--padding[data-v-5d860f10]{margin-left:%?30?%;margin-right:%?30?%}',""]),t.exports=e},"691b":function(t,e,a){"use strict";var n=a("114c"),i=a.n(n);i.a},"81b8":function(t,e,a){var n=a("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 下方引入的为Tuniao UI的集成样式文件，为scss预处理器，其中包含了一些"tn-"开头的自定义变量\r\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\r\n * Tuniao UI自定义的css类名和scss变量，均以"tn-"开头，不会造成冲突，请放心使用 \r\n */.tn-checkbox-group[data-v-6cfeb4e6]{display:inline-flex;flex-wrap:wrap}.tn-checkbox-group[data-v-6cfeb4e6]::after{content:" ";display:table;clear:both}',""]),t.exports=e},"8b1b":function(t,e,a){"use strict";a("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"demo-title",options:{virtualHost:!0},props:{type:{type:String,default:"first"},title:{type:String,default:""},leftIcon:{type:String,default:"star"},rightIcon:{type:String,default:"star"},contentPadding:{type:Boolean,default:!0}}};e.default=n},9158:function(t,e,a){"use strict";a.r(e);var n=a("d23b"),i=a.n(n);for(var c in n)["default"].indexOf(c)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(c);e["default"]=i.a},"919e":function(t,e,a){"use strict";a.r(e);var n=a("9af85"),i=a("35fb");for(var c in i)["default"].indexOf(c)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(c);a("41d2");var o=a("f0c5"),s=Object(o["a"])(i["default"],n["b"],n["c"],!1,null,"2eaeed16",null,!1,n["a"],void 0);e["default"]=s.exports},"9af85":function(t,e,a){"use strict";a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return i})),a.d(e,"a",(function(){}));var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"tn-checkbox-class tn-checkbox",style:[t.checkboxStyle]},[a("v-uni-view",{staticClass:"tn-checkbox__icon-wrap",class:[t.iconClass],style:[t.iconStyle],on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toggle.apply(void 0,arguments)}}},[a("v-uni-view",{staticClass:"tn-checkbox__icon-wrap__icon",class:["tn-icon-"+t.iconName]})],1),a("v-uni-view",{staticClass:"tn-checkbox__label",class:[t.labelClass],style:{fontSize:t.labelSize?t.labelSize+"rpx":""},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClickLabel.apply(void 0,arguments)}}},[t._t("default")],2)],1)},i=[]},b13f:function(t,e,a){"use strict";a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return c})),a.d(e,"a",(function(){return n}));var n={tnNavBar:a("5138").default,tnCheckbox:a("919e").default,tnCheckboxGroup:a("10c5").default},i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"components-check-box tn-safe-area-inset-bottom"},[a("tn-nav-bar",{attrs:{fixed:!0}},[t._v("按钮")]),a("v-uni-view",{style:{paddingTop:t.vuex_custom_bar_height+"px"}},[a("demo-title",{attrs:{title:"基础"}},[a("tn-checkbox",{attrs:{name:"选项1"},model:{value:t.value1,callback:function(e){t.value1=e},expression:"value1"}},[t._v("选项1")]),a("tn-checkbox",{attrs:{name:"选项2",disabled:!0},model:{value:t.value1,callback:function(e){t.value1=e},expression:"value1"}},[t._v("选项2(不可点击)")])],1),a("demo-title",{attrs:{title:"圆形选框"}},[a("tn-checkbox-group",{attrs:{shape:"circle"}},[a("tn-checkbox",{attrs:{name:"选项1"}},[t._v("选项1")]),a("tn-checkbox",{attrs:{name:"选项2"}},[t._v("选项2")]),a("tn-checkbox",{attrs:{name:"选项3"}},[t._v("选项3")])],1)],1),a("demo-title",{attrs:{title:"竖直排列"}},[a("tn-checkbox-group",{attrs:{width:"100%",wrap:!0}},[a("tn-checkbox",{attrs:{name:"选项1"}},[t._v("选项1")]),a("tn-checkbox",{attrs:{name:"选项2"}},[t._v("选项2")]),a("tn-checkbox",{attrs:{name:"选项3"}},[t._v("选项3")])],1)],1),a("demo-title",{attrs:{title:"禁止点击标签"}},[a("tn-checkbox-group",{attrs:{disabledLabel:!0}},[a("tn-checkbox",{attrs:{name:"选项1"}},[t._v("选项1")]),a("tn-checkbox",{attrs:{name:"选项2"}},[t._v("选项2")]),a("tn-checkbox",{attrs:{name:"选项3"}},[t._v("选项3")])],1)],1),a("demo-title",{attrs:{title:"自定义尺寸"}},[a("v-uni-view",[a("tn-checkbox-group",{attrs:{size:26,iconSize:18}},[a("tn-checkbox",{attrs:{name:"选项1"}},[t._v("选项1")]),a("tn-checkbox",{attrs:{name:"选项2"}},[t._v("选项2")]),a("tn-checkbox",{attrs:{name:"选项3",size:36,iconSize:30}},[t._v("选项3")])],1)],1),a("v-uni-view",{staticClass:"tn-margin-top"},[a("tn-checkbox-group",{attrs:{size:46,iconSize:40}},[a("tn-checkbox",{attrs:{name:"选项1"}},[t._v("选项1")]),a("tn-checkbox",{attrs:{name:"选项2"}},[t._v("选项2")]),a("tn-checkbox",{attrs:{name:"选项3"}},[t._v("选项3")])],1)],1)],1),a("demo-title",{attrs:{title:"自定义颜色"}},[a("tn-checkbox-group",{attrs:{activeColor:"#31E749"}},[a("tn-checkbox",{attrs:{name:"选项1"}},[t._v("选项1")]),a("tn-checkbox",{attrs:{name:"选项2"}},[t._v("选项2")]),a("tn-checkbox",{attrs:{name:"选项3",activeColor:"#E83A30"}},[t._v("选项3")])],1)],1),a("demo-title",{attrs:{title:"自定义图标"}},[a("tn-checkbox-group",[a("tn-checkbox",{attrs:{name:"选项1",iconName:"star"}},[t._v("选项1")]),a("tn-checkbox",{attrs:{name:"选项2",iconName:"fire"}},[t._v("选项2")]),a("tn-checkbox",{attrs:{name:"选项3",iconName:"like"}},[t._v("选项3")])],1)],1),a("v-uni-view",{staticClass:"tn-padding-bottom-lg"})],1)],1)},c=[]},c854:function(t,e,a){"use strict";a.r(e);var n=a("d7ad"),i=a.n(n);for(var c in n)["default"].indexOf(c)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(c);e["default"]=i.a},ca90:function(t,e,a){"use strict";a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return i})),a.d(e,"a",(function(){}));var n=function(){var t=this.$createElement,e=this._self._c||t;return e("v-uni-view",{staticClass:"tn-checkbox-group-class tn-checkbox-group"},[this._t("default")],2)},i=[]},d07c:function(t,e,a){var n=a("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 下方引入的为Tuniao UI的集成样式文件，为scss预处理器，其中包含了一些"tn-"开头的自定义变量\r\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\r\n * Tuniao UI自定义的css类名和scss变量，均以"tn-"开头，不会造成冲突，请放心使用 \r\n */.tn-checkbox[data-v-2eaeed16]{display:inline-flex;align-items:center;overflow:hidden;-webkit-user-select:none;user-select:none;line-height:1.8}.tn-checkbox__icon-wrap[data-v-2eaeed16]{color:#080808;flex:none;display:flex;flex-direction:row;align-items:center;justify-content:center;box-sizing:border-box;width:%?42?%;height:%?42?%;color:transparent;text-align:center;transition-property:color,border-color,background-color;border:1px solid #aaa;transition-duration:.2s}.tn-checkbox__icon-wrap--circle[data-v-2eaeed16]{border-radius:100%}.tn-checkbox__icon-wrap--square[data-v-2eaeed16]{border-radius:%?6?%}.tn-checkbox__icon-wrap--checked[data-v-2eaeed16]{color:#fff;background-color:#01beff;border-color:#01beff}.tn-checkbox__icon-wrap--disabled[data-v-2eaeed16]{background-color:#e6e6e6;border-color:#aaa}.tn-checkbox__icon-wrap--disabled--checked[data-v-2eaeed16]{color:#aaa!important}.tn-checkbox__label[data-v-2eaeed16]{word-wrap:break-word;margin-left:%?10?%;margin-right:%?24?%;color:#080808;font-size:%?30?%}.tn-checkbox__label--disabled[data-v-2eaeed16]{color:#aaa}',""]),t.exports=e},d23b:function(t,e,a){"use strict";a("7a82");var n=a("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a("a9e3"),a("d81d");var i=n(a("31cb")),c={mixins:[i.default],name:"tn-checkbox-group",props:{value:{type:Array,default:function(){return[]}},max:{type:Number,default:999},name:{type:String,default:""},disabled:{type:Boolean,default:!1},disabledLabel:{type:Boolean,default:!1},shape:{type:String,default:"square"},activeColor:{type:String,default:"#01BEFF"},size:{type:Number,default:34},width:{type:String,default:"auto"},wrap:{type:Boolean,default:!1},iconSize:{type:Number,default:20}},computed:{parentData:function(){return[this.value,this.disabled,this.disabledLabel,this.shape,this.activeColor,this.size,this.width,this.wrap,this.iconSize]}},data:function(){return{}},watch:{parentData:function(){this.children.length&&this.children.map((function(t){"function"===typeof t.updateParentData&&t.updateParentData()}))}},created:function(){this.children=[]},methods:{initValue:function(t){this.$emit("input",t)},emitEvent:function(){var t=this,e=[];this.children.map((function(t){t.checkValue&&e.push(t.name)})),this.$emit("change",e),this.$emit("input",e),setTimeout((function(){t.dispatch("tn-form-item","on-form-change",e)}),60)}}};e.default=c},d7ad:function(t,e,a){"use strict";a("7a82");var n=a("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n(a("2ee6")),c={name:"ComponentsCheckBox",components:{demoTitle:i.default},data:function(){return{value1:!1,value2:!1}}};e.default=c},e1430:function(t,e,a){var n=a("81b8");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=a("4f06").default;i("adade31c",n,!0,{sourceMap:!1,shadowMode:!1})},fd7f:function(t,e,a){"use strict";a.r(e);var n=a("8b1b"),i=a.n(n);for(var c in n)["default"].indexOf(c)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(c);e["default"]=i.a}}]);