(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["vipPage-components-drag-upload-image-drag-upload-image-drag"],{"024d":function(t,e,i){"use strict";(function(t){i("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={name:"VipComponentUploadImageDrag",data:function(){return{action:"https://www.hualigs.cn/api/upload",formData:{apiType:"this,ali",token:"dffc1e06e636cff0fdf7d877b6ae6a2e",image:null},fileList:[{url:"https://tnuiimage.tnkjapp.com/shop/bag1.jpg"},{url:"https://tnuiimage.tnkjapp.com/shop/bag2.jpg"},{url:"https://tnuiimage.tnkjapp.com/shop/cup1.jpg"},{url:"https://tnuiimage.tnkjapp.com/shop/cup2.jpg"}],showUploadList:!0,customBtn:!1,autoUpload:!0,showProgress:!0,deleteable:!0,customStyle:!1,maxCount:9,disabled:!1}},methods:{upload:function(){this.$refs.imageUpload.upload()},clear:function(){this.$refs.imageUpload.clear()},onSortList:function(e){t("log",e," at vipPage/components/drag/upload-image-drag/upload-image-drag.vue:72")}}};e.default=a}).call(this,i("0de9")["log"])},"056d":function(t,e,i){"use strict";i("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("a9e3");var a={name:"tn-line-progress",props:{percent:{type:Number,default:0,validator:function(t){return t>=0&&t<=100}},height:{type:Number,default:0},round:{type:Boolean,default:!0},striped:{type:Boolean,default:!1},stripedAnimation:{type:Boolean,default:!0},activeColor:{type:String,default:""},inactiveColor:{type:String,default:""},showPercent:{type:Boolean,default:!1}},computed:{progressStyle:function(){var t={};return t.borderRadius=this.round?"100rpx":0,this.height&&(t.height=this.$tn.string.getLengthUnitValue(this.height)),this.inactiveColor&&(t.backgroundColor=this.inactiveColor),t},progressActiveStyle:function(){var t={};return t.width=this.percent+"%",this.$tn.color.getBackgroundColorStyle(this.activeColor)&&(t.backgroundColor=this.$tn.color.getBackgroundColorStyle(this.activeColor)),t}},data:function(){return{}}};e.default=a},"0704":function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 下方引入的为Tuniao UI的集成样式文件，为scss预处理器，其中包含了一些"tn-"开头的自定义变量\r\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\r\n * Tuniao UI自定义的css类名和scss变量，均以"tn-"开头，不会造成冲突，请放心使用 \r\n */.tn-btn[data-v-778c77a3]{position:relative;display:inline-flex;align-items:center;justify-content:center;box-sizing:border-box;line-height:1;text-align:center;text-decoration:none;overflow:visible;-webkit-transform:translate(%?0?%,%?0?%);transform:translate(%?0?%,%?0?%);border-radius:%?12?%;margin:0}.tn-btn--plain[data-v-778c77a3]{background-color:initial!important;background-image:none}.tn-btn--plain.tn-round[data-v-778c77a3]{border-radius:%?1000?%!important}',""]),t.exports=e},"10ef":function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return n})),i.d(e,"a",(function(){}));var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"tn-line-progress-class tn-line-progress",style:[t.progressStyle]},[i("v-uni-view",{staticClass:"tn-line-progress--active",class:[t.$tn.color.getBackgroundColorInternalClass(t.activeColor),t.striped?t.stripedAnimation?"tn-line-progress__striped tn-line-progress__striped--active":"tn-line-progress__striped":""],style:[t.progressActiveStyle]},[t.$slots.default||t.$slots.$default?t._t("default"):t.showPercent?[t._v(t._s(t.percent+"%"))]:t._e()],2)],1)},n=[]},"219e":function(t,e,i){"use strict";var a=i("9287"),n=i.n(a);n.a},"2a54":function(t,e,i){"use strict";i.r(e);var a=i("10ef"),n=i("4b14");for(var o in n)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(o);i("55e8");var s=i("f0c5"),r=Object(s["a"])(n["default"],a["b"],a["c"],!1,null,"625b6200",null,!1,a["a"],void 0);e["default"]=r.exports},"2f1b":function(t,e,i){"use strict";i.r(e);var a=i("fa61"),n=i.n(a);for(var o in a)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(o);e["default"]=n.a},"446c":function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 下方引入的为Tuniao UI的集成样式文件，为scss预处理器，其中包含了一些"tn-"开头的自定义变量\r\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\r\n * Tuniao UI自定义的css类名和scss变量，均以"tn-"开头，不会造成冲突，请放心使用 \r\n */.tn-line-progress[data-v-625b6200]{display:inline-flex;align-items:center;width:100%;height:%?28?%;overflow:hidden;border-radius:%?100?%;background-color:#f0f0f0}.tn-line-progress--active[data-v-625b6200]{display:flex;flex-direction:row;align-items:center;justify-items:flex-end;justify-content:space-around;width:0;height:100%;font-size:%?20?%;color:#fff;background-color:#01beff;transition:all .3s ease}.tn-line-progress__striped[data-v-625b6200]{background-image:linear-gradient(45deg,hsla(0,0%,100%,.15) 25%,transparent 0,transparent 50%,hsla(0,0%,100%,.15) 0,hsla(0,0%,100%,.15) 75%,transparent 0,transparent);background-size:%?80?% %?80?%}.tn-line-progress__striped--active[data-v-625b6200]{-webkit-animation:progress-striped-data-v-625b6200 2s linear infinite;animation:progress-striped-data-v-625b6200 2s linear infinite}@-webkit-keyframes progress-striped-data-v-625b6200{0%{background-position:0 0}100%{background-position:%?80?% 0}}@keyframes progress-striped-data-v-625b6200{0%{background-position:0 0}100%{background-position:%?80?% 0}}',""]),t.exports=e},"4b14":function(t,e,i){"use strict";i.r(e);var a=i("056d"),n=i.n(a);for(var o in a)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(o);e["default"]=n.a},"55e8":function(t,e,i){"use strict";var a=i("6a6c"),n=i.n(a);n.a},"5f56":function(t,e,i){"use strict";i.r(e);var a=i("b8c0"),n=i.n(a);for(var o in a)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(o);e["default"]=n.a},"6a6c":function(t,e,i){var a=i("446c");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("c722244e",a,!0,{sourceMap:!1,shadowMode:!1})},8693:function(t,e,i){var a=i("a5ec");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("4309f2c2",a,!0,{sourceMap:!1,shadowMode:!1})},"8e57":function(t,e,i){"use strict";var a=i("b24c"),n=i.n(a);n.a},9287:function(t,e,i){var a=i("0704");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("0047900a",a,!0,{sourceMap:!1,shadowMode:!1})},9342:function(t,e,i){"use strict";i.r(e);var a=i("985e"),n=i("c2de");for(var o in n)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(o);i("d4d2");var s=i("f0c5"),r=Object(s["a"])(n["default"],a["b"],a["c"],!1,null,"366eb8ac",null,!1,a["a"],void 0);e["default"]=r.exports},"973a":function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 下方引入的为Tuniao UI的集成样式文件，为scss预处理器，其中包含了一些"tn-"开头的自定义变量\r\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\r\n * Tuniao UI自定义的css类名和scss变量，均以"tn-"开头，不会造成冲突，请放心使用 \r\n */.tn-image-upload[data-v-1966a455]{position:relative}.tn-image-upload__movable-area[data-v-1966a455]{width:100%}.tn-image-upload__movable-view[data-v-1966a455]{border-radius:%?10?%;overflow:hidden}.tn-image-upload__item[data-v-1966a455]{display:flex;align-items:center;justify-content:center;width:%?200?%;height:%?200?%;background-color:initial;position:relative;border-radius:%?10?%;overflow:hidden}.tn-image-upload__item-preview[data-v-1966a455]{border:%?1?% solid rgba(0,0,0,.1)}.tn-image-upload__item-preview__delete[data-v-1966a455]{display:flex;align-items:center;justify-content:center;position:absolute;top:0;right:0;z-index:10;border-top:%?60?% solid;border-left:%?60?% solid transparent;border-top-color:#e83a30;width:%?0?%;height:%?0?%}.tn-image-upload__item-preview__delete--icon[data-v-1966a455]{position:absolute;top:%?-50?%;right:%?6?%;color:#fff;font-size:%?24?%;line-height:1}.tn-image-upload__item-preview__progress[data-v-1966a455]{position:absolute;width:auto;bottom:%?0?%;left:%?0?%;right:%?0?%;z-index:9}.tn-image-upload__item-preview__error-btn[data-v-1966a455]{position:absolute;bottom:0;left:0;right:0;background-color:#e83a30;color:#fff;font-size:%?20?%;padding:%?8?% 0;text-align:center;z-index:9;line-height:1}.tn-image-upload__item-preview__image[data-v-1966a455]{display:block;width:100%;height:100%;border-radius:%?10?%}.tn-image-upload__item-add[data-v-1966a455]{flex-direction:column;color:#838383;font-size:%?26?%}.tn-image-upload__item-add--icon[data-v-1966a455]{font-size:%?40?%}.tn-image-upload__item-add__tips[data-v-1966a455]{margin-top:%?20?%;line-height:%?40?%}.tn-image-upload__add[data-v-1966a455]{background-color:#e6e6e6;position:absolute}',""]),t.exports=e},"985e":function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return a}));var a={tnNavBar:i("5138").default,tnImageUploadDrag:i("f932").default,tnButton:i("9bb4").default},n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"vip-component-upload-image-drag"},[i("tn-nav-bar",{attrs:{fixed:!0}},[t._v("可拖拽图片上传")]),i("v-uni-view",{style:{paddingTop:t.vuex_custom_bar_height+"px"}},[i("v-uni-view",{staticClass:"drag__wrap tn-margin-top"},[i("tn-image-upload-drag",{ref:"imageUpload",attrs:{action:t.action,height:220,width:220,formData:t.formData,fileList:t.fileList,disabled:t.disabled,autoUpload:t.autoUpload,maxCount:t.maxCount,showUploadList:t.showUploadList,showProgress:t.showProgress,deleteable:t.deleteable,customBtn:t.customBtn},on:{"sort-list":function(e){arguments[0]=e=t.$handleEvent(e),t.onSortList.apply(void 0,arguments)}}}),i("v-uni-view",{staticClass:"tn-flex tn-margin-top-xs tn-flex-row-center"},[i("tn-button",{attrs:{fontColor:"tn-color-white"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.upload.apply(void 0,arguments)}}},[t._v("上传")]),i("tn-button",{attrs:{fontColor:"tn-color-white",backgroundColor:"tn-bg-red",margin:"0rpx 0rpx 0rpx 20rpx"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.clear.apply(void 0,arguments)}}},[t._v("清空列表")])],1)],1)],1)],1)},o=[]},"9bb4":function(t,e,i){"use strict";i.r(e);var a=i("aeb7"),n=i("2f1b");for(var o in n)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(o);i("219e");var s=i("f0c5"),r=Object(s["a"])(n["default"],a["b"],a["c"],!1,null,"778c77a3",null,!1,a["a"],void 0);e["default"]=r.exports},a5ec:function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 下方引入的为Tuniao UI的集成样式文件，为scss预处理器，其中包含了一些"tn-"开头的自定义变量\r\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\r\n * Tuniao UI自定义的css类名和scss变量，均以"tn-"开头，不会造成冲突，请放心使用 \r\n */.drag__wrap[data-v-366eb8ac]{padding-left:%?30?%;padding-right:%?30?%}',""]),t.exports=e},aeb7:function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return n})),i.d(e,"a",(function(){}));var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-button",{staticClass:"tn-btn-class tn-btn",class:[t.buttonClass,t.backgroundColorClass,t.fontColorClass],style:[t.buttonStyle],attrs:{"hover-class":"tn-hover",loading:t.loading,disabled:t.disabled,"form-type":t.formType,"open-type":t.openType},on:{getuserinfo:function(e){arguments[0]=e=t.$handleEvent(e),t.handleGetUserInfo.apply(void 0,arguments)},getphonenumber:function(e){arguments[0]=e=t.$handleEvent(e),t.handleGetPhoneNumber.apply(void 0,arguments)},contact:function(e){arguments[0]=e=t.$handleEvent(e),t.handleContact.apply(void 0,arguments)},error:function(e){arguments[0]=e=t.$handleEvent(e),t.handleError.apply(void 0,arguments)},click:function(e){arguments[0]=e=t.$handleEvent(e),t.handleClick.apply(void 0,arguments)}}},[t._t("default")],2)},n=[]},b24c:function(t,e,i){var a=i("973a");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("8378256a",a,!0,{sourceMap:!1,shadowMode:!1})},b85c:function(t,e,i){"use strict";i("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t,e){var i="undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!i){if(Array.isArray(t)||(i=(0,a.default)(t))||e&&t&&"number"===typeof t.length){i&&(t=i);var n=0,o=function(){};return{s:o,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var s,r=!0,l=!1;return{s:function(){i=i.call(t)},n:function(){var t=i.next();return r=t.done,t},e:function(t){l=!0,s=t},f:function(){try{r||null==i["return"]||i["return"]()}finally{if(l)throw s}}}},i("a4d3"),i("e01a"),i("d3b7"),i("d28b"),i("3ca3"),i("ddb0"),i("d9e2"),i("d401");var a=function(t){return t&&t.__esModule?t:{default:t}}(i("06c5"))},b8c0:function(t,e,i){"use strict";i("7a82");var a=i("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("96cf");var n=a(i("5530")),o=a(i("b85c")),s=a(i("1da1"));i("a9e3"),i("d3b7"),i("d81d"),i("ac1f"),i("00b4"),i("caad"),i("a434"),i("4e82"),i("5319"),i("159b"),i("fb6a"),i("c740");var r={name:"tn-image-upload-drag",props:{fileList:{type:Array,default:function(){return[]}},action:{type:String,default:""},name:{type:String,default:"file"},header:{type:Object,default:function(){return{}}},formData:{type:Object,default:function(){return{}}},disabled:{type:Boolean,default:!1},autoUpload:{type:Boolean,default:!0},maxCount:{type:Number,default:9},imageMode:{type:String,default:"aspectFill"},previewFullImage:{type:Boolean,default:!0},showProgress:{type:Boolean,default:!0},deleteable:{type:Boolean,default:!0},deleteIcon:{type:String,default:"close"},deleteBackgroundColor:{type:String,default:""},deleteColor:{type:String,default:""},uploadText:{type:String,default:"选择图片"},showTips:{type:Boolean,default:!0},width:{type:Number,default:200},height:{type:Number,default:200},sizeType:{type:Array,default:function(){return["original","compressed"]}},sourceType:{type:Array,default:function(){return["album","camera"]}},multiple:{type:Boolean,default:!0},maxSize:{type:Number,default:10485760},limitType:{type:Array,default:function(){return["png","jpg","jpeg","webp","gif","image"]}},toJson:{type:Boolean,default:!0},beforeUpload:{type:Function,default:null},beforeRemove:{type:Function,default:null},index:{type:[Number,String],default:""}},computed:{movableAreaHeight:function(){return this.lists.length<this.maxCount?Math.ceil((this.lists.length+1)/this.baseData.columns)*uni.upx2px(this.height)+"px":Math.ceil(this.lists.length/this.baseData.columns)*uni.upx2px(this.height)+"px"},itemWidth:function(){return uni.upx2px(this.width)-2*uni.upx2px(10)},itemHeight:function(){return uni.upx2px(this.height)-2*uni.upx2px(10)}},data:function(){return{lists:[],uploading:!1,baseData:{windowWidth:0,columns:0,dragItem:null,widthPx:0,heightPx:0},addBtn:{x:0,y:0},timer:null,dragging:!1}},watch:{lists:function(t){this.$emit("on-list-change",this.sortList(),this.index)}},created:function(){this.baseData.windowWidth=uni.getSystemInfoSync().windowWidth},mounted:function(){var t=this;this.$nextTick((function(){t.updateDragInfo()}))},methods:{clear:function(){this.lists=[],this.updateAddBtnPositioin()},reUpload:function(){this.uploadFile()},selectFile:function(){var t=this;if(!this.disabled){this.name;var e=this.maxCount,i=this.multiple,a=this.maxSize,n=this.sizeType,o=this.lists,s=(this.camera,this.compressed,this.sourceType),r=null,l=e-o.length;r=new Promise((function(t,e){uni.chooseImage({count:i?l>9?9:l:1,sourceType:s,sizeType:n,success:t,fail:e})})),r.then((function(n){var s=o.length;n.tempFiles.map((function(n,s){if(t.checkFileExt(n)&&(i||!(s>=1)))if(n.size>a)t.$emit("on-oversize",n,t.sortList(),t.index),t.showToast("超出可允许文件大小");else{if(e<=o.length)return t.$emit("on-exceed",n,t.sortList(),t.index),void t.showToast("超出最大允许的文件数");o.push(t.handleDragListItem({url:n.path,progress:0,error:!1,file:n})),t.updateAddBtnPositioin()}})),t.$emit("on-choose-complete",t.sortList(),t.index),t.autoUpload&&t.uploadFile(s)})).catch((function(e){t.$emit("on-choose-fail",e)}))}},showToast:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];(this.showTips||e)&&this.$tn.message.toast(t)},upload:function(){this.uploadFile()},retry:function(t){this.lists[t].data.progress=0,this.lists[t].data.error=!1,this.lists[t].data.response=null,this.$tn.message.loading("重新上传"),this.uploadFile(t)},uploadFile:function(){var t=arguments,e=this;return(0,s.default)(regeneratorRuntime.mark((function i(){var a,n,o;return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:if(a=t.length>0&&void 0!==t[0]?t[0]:0,!e.disabled){i.next=3;break}return i.abrupt("return");case 3:if(!e.uploading){i.next=5;break}return i.abrupt("return");case 5:if(!(a>=e.lists.length)){i.next=8;break}return e.$emit("on-uploaded",e.sortList(),e.index),i.abrupt("return");case 8:if(100!==e.lists[a].data.progress){i.next=12;break}return e.lists[a].data.uploadTask=null,e.autoUpload&&e.uploadFile(a+1),i.abrupt("return");case 12:if(!e.beforeUpload||"function"!==typeof e.beforeUpload){i.next=23;break}if(n=e.beforeUpload.bind(e.$tn.$parent.call(e))(a,e.lists),!n||"function"!==typeof n.then){i.next=19;break}return i.next=17,n.then((function(t){})).catch((function(t){return e.uploadFile(a+1)}));case 17:i.next=23;break;case 19:if(!1!==n){i.next=23;break}return i.abrupt("return",e.uploadFile(a+1));case 23:if(e.action){i.next=26;break}return e.showToast("请配置上传地址",!0),i.abrupt("return");case 26:e.lists[a].data.error=!1,e.uploading=!0,o=uni.uploadFile({url:e.action,filePath:e.lists[a].data.url,name:e.name,formData:e.formData,header:e.header,success:function(t){var i=e.toJson&&e.$tn.test.jsonString(t.data)?JSON.parse(t.data):t.data;[200,201,204].includes(t.statusCode)?(e.lists[a].data.response=i,e.lists[a].data.progress=100,e.lists[a].data.error=!1,e.$emit("on-success",i,a,e.sortList(),e.index)):e.uploadError(a,i)},fail:function(t){e.uploadError(a,t)},complete:function(t){e.$tn.message.closeLoading(),e.uploading=!1,e.uploadFile(a+1),e.$emit("on-change",t,a,e.sortList(),e.index)}}),e.lists[a].uploadTask=o,o.onProgressUpdate((function(t){t.progress>0&&(e.lists[a].data.progress=t.progress,e.$emit("on-progress",t,a,e.sortList(),e.index))}));case 31:case"end":return i.stop()}}),i)})))()},uploadError:function(t,e){this.lists[t].data.progress=0,this.lists[t].data.error=!0,this.lists[t].data.response=null,this.showToast("上传失败，请重试"),this.$emit("on-error",e,t,this.sortList(),this.index)},deleteItem:function(t){var e=this;this.deleteable&&this.$tn.message.modal("提示","您确定要删除吗？",(0,s.default)(regeneratorRuntime.mark((function i(){var a;return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:if(!e.beforeRemove||"function"!==typeof e.beforeRemove){i.next=10;break}if(a=e.beforeRemove.bind(e.$tn.$parent.call(e))(t,e.lists),!a||"function"!==typeof a.then){i.next=7;break}return i.next=5,a.then((function(i){e.handlerDeleteItem(t)})).catch((function(t){e.showToast("删除操作被中断")}));case 5:i.next=8;break;case 7:!1===a?e.showToast("删除操作被中断"):e.handlerDeleteItem(t);case 8:i.next=11;break;case 10:e.handlerDeleteItem(t);case 11:case"end":return i.stop()}}),i)}))),!0)},handlerDeleteItem:function(t){this.lists[t].data.progress<100&&this.lists[t].data.progress>0&&"undefined"!==typeof this.lists[t].data.uploadTask&&this.lists[t].data.uploadTask.abort(),this.remove(t),this.$forceUpdate(),this.$emit("on-remove",t,this.sortList(),this.index),this.showToast("删除成功")},remove:function(t){var e=this;if(this.deleteable&&t>=0&&t<this.lists.length){var i=this.lists[t].index;this.lists.splice(t,1);var a,n=(0,o.default)(this.lists);try{var s=function(){var t=a.value;t.index>i&&(t.index-=1,t.x=t.positionX*e.baseData.widthPx,t.y=t.positionY*e.baseData.heightPx,t.positionX=t.index%e.baseData.columns,t.positionY=Math.floor(t.index/e.baseData.columns),e.$nextTick((function(){t.x=t.positionX*e.baseData.widthPx,t.y=t.positionY*e.baseData.heightPx})))};for(n.s();!(a=n.n()).done;)s()}catch(r){n.e(r)}finally{n.f()}this.updateAddBtnPositioin()}},doPreviewImage:function(t,e){var i=this;if(this.previewFullImage){var a=this.lists.sort((function(t,e){return t.index-e.index})).map((function(t){return t.data.url||t.data.path}));uni.previewImage({urls:a,current:t,success:function(){i.$emit("on-preview",t,i.sortList(),i.index)},fail:function(){i.showToast("预览图片失败")}})}},checkFileExt:function(t){var e,i;return i=t.name.replace(/.+\./,"").toLowerCase(),e=this.limitType.some((function(t){return t.toLowerCase()===i})),e||this.showToast("不支持".concat(i,"格式的文件")),e},updateDragInfo:function(){var t=this;this.baseData.widthPx=uni.upx2px(this.width),this.baseData.heightPx=uni.upx2px(this.height);var e=uni.createSelectorQuery().in(this);e.select(".tn-image-upload__movable-area").boundingClientRect(),e.exec((function(e){e?(t.baseData.columns=Math.floor(e[0].width/t.baseData.widthPx),t.lists=[],t.fileList.forEach((function(e){var i=t.lists.map((function(t){return t.data})).some((function(t){return t.url===e.url}));!i&&t.lists.push(t.handleDragListItem({url:e.url,error:!1,progress:100}))})),t.updateAddBtnPositioin()):setTimeout((function(){t.updateDragInfo()}),10)}))},handleDragListItem:function(t){var e=this.lists.length%this.baseData.columns,i=Math.floor(this.lists.length/this.baseData.columns),a=e*this.baseData.widthPx,o=i*this.baseData.heightPx;return{id:this.unique(),x:a,y:o,preX:a,preY:o,positionX:e,positionY:i,zIndex:1,disabled:!0,opacity:1,scale:1,index:this.lists.length,offset:0,moveEnd:!1,moving:!1,data:(0,n.default)({},t)}},unique:function(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:6,e="",i=0;i<t;i++)e+=Math.floor(10*Math.random());return"tn_"+(new Date).getTime()+e},updateAddBtnPositioin:function(){this.lists.length>=this.maxCount||(this.addBtn.x=this.lists.length%this.baseData.columns*this.baseData.widthPx,this.addBtn.y=Math.floor(this.lists.length/this.baseData.columns)*this.baseData.heightPx)},sortList:function(){var t=this.lists.slice();return t.sort((function(t,e){return t.index-e.index})),t.map((function(t){return t.data}))},mouseEnterArea:function(){this.lists.forEach((function(t){t.disabled=!1}))},mouseLeaveArea:function(){var t=this;this.baseData.dragItem&&(this.lists.forEach((function(e){e.disabled=!0,e.zIndex=1,e.offset=0,e.moveEnd=!0,e.id===t.baseData.dragItem.id&&(t.timer&&(clearTimeout(t.timer),t.timer=null),e.x=e.preX,e.y=e.preY,t.$nextTick((function(){e.x=e.positionX*t.baseData.widthPx,e.y=e.positionY*t.baseData.heightPx,t.baseData.dragItem=null})))})),this.dragging=!1)},movableLongPress:function(t){},movableChange:function(t,e){if(e&&this.dragging&&(e.moving=!0,e.preX=t.detail.x,e.preY=t.detail.y,"touch"===t.detail.source)){e.moveEnd||(e.offset=Math.sqrt(Math.pow(e.preX-e.positionX*this.baseData.widthPx,2)+Math.pow(e.preY-e.positionY*this.baseData.heightPx,2)));var i=Math.floor((t.detail.x+this.baseData.widthPx/2)/this.baseData.widthPx);if(i>this.baseData.columns)return;var a=Math.floor((t.detail.y+this.baseData.heightPx/2)/this.baseData.heightPx),n=this.baseData.columns*a+i;if(e.index!==n&&n<this.lists.length){var s,r=(0,o.default)(this.lists);try{for(r.s();!(s=r.n()).done;){var l=s.value;e.index>n&&l.index>=n&&l.index<e.index?this.updateItemPosition(l,1):e.index<n&&l.index<=n&&l.index>e.index?this.updateItemPosition(l,-1):(e.id,l.id)}}catch(d){r.e(d)}finally{r.f()}e.index=n,e.positionX=i,e.positionY=a}}},movableStart:function(t){var e=this;this.lists.forEach((function(t){t.zIndex=1,t.disabled=!1})),t.zIndex=10,t.moveEnd=!1,this.baseData.dragItem=t,this.dragging=!0,this.timer=setTimeout((function(){t.opacity=.7,t.scale=1.1,clearTimeout(e.timer),e.timer=null}),200)},movableEnd:function(t){var e=this;if(this.dragging){var i=this.lists.findIndex((function(e){return e.id===t.id}));t.moving||(t.preX=t.positionX*this.baseData.widthPx,t.preY=t.positionY*this.baseData.heightPx),t.x=t.preX,t.y=t.preY,t.offset=0,t.moveEnd=!0,t.moving=!1,t.disabled=!0,this.lists.forEach((function(t){t.moving=!1,t.disabled=!0})),this.$nextTick((function(){t.x=t.positionX*e.baseData.widthPx,t.y=t.positionY*e.baseData.heightPx,t.opacity=1,t.scale=1,e.baseData.dragItem=null,e.dragging=!1,e.$set(e.lists,i,t)})),this.$emit("sort-list",this.sortList())}},updateItemPosition:function(t,e){var i=this,a=this.lists.findIndex((function(e){return e.id===t.id}));t.index+=e,t.offset=0,t.positionX=t.index%this.baseData.columns,t.positionY=Math.floor(t.index/this.baseData.columns),t.moving||(t.preX=t.positionX*this.baseData.widthPx,t.preY=t.positionY*this.baseData.heightPx),t.x=t.preX,t.y=t.preY,this.$nextTick((function(){t.x=t.positionX*i.baseData.widthPx,t.y=t.positionY*i.baseData.heightPx,i.$set(i.lists,a,t)}))}}};e.default=r},baa5:function(t,e,i){var a=i("23e7"),n=i("e58c");a({target:"Array",proto:!0,forced:n!==[].lastIndexOf},{lastIndexOf:n})},c2de:function(t,e,i){"use strict";i.r(e);var a=i("024d"),n=i.n(a);for(var o in a)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(o);e["default"]=n.a},d0b2:function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return a}));var a={tnLineProgress:i("2a54").default},n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.disabled?t._e():i("v-uni-view",{staticClass:"tn-image-upload-class tn-image-upload"},[i("v-uni-movable-area",{staticClass:"tn-image-upload__movable-area",style:{height:t.movableAreaHeight},on:{mouseenter:function(e){arguments[0]=e=t.$handleEvent(e),t.mouseEnterArea.apply(void 0,arguments)},mouseleave:function(e){arguments[0]=e=t.$handleEvent(e),t.mouseLeaveArea.apply(void 0,arguments)}}},[t._l(t.lists,(function(e,a){return[i("v-uni-movable-view",{key:e.id+"_0",staticClass:"tn-image-upload__movable-view",style:{width:t.$tn.string.getLengthUnitValue(t.width),height:t.$tn.string.getLengthUnitValue(t.height),zIndex:e.zIndex,opacity:e.opacity},attrs:{x:e.x,y:e.y,direction:"all",damping:40,disabled:e.disabled},on:{change:function(i){arguments[0]=i=t.$handleEvent(i),t.movableChange(i,e)},touchstart:function(i){arguments[0]=i=t.$handleEvent(i),t.movableStart(e)},mousedown:function(i){arguments[0]=i=t.$handleEvent(i),t.movableStart(e)},touchend:function(i){arguments[0]=i=t.$handleEvent(i),t.movableEnd(e)},mouseup:function(i){arguments[0]=i=t.$handleEvent(i),t.movableEnd(e)},longpress:function(i){arguments[0]=i=t.$handleEvent(i),t.movableLongPress(e)}}},[i("v-uni-view",{staticClass:"tn-image-upload__item tn-image-upload__item-preview",style:{width:t.$tn.string.getLengthUnitValue(t.itemWidth,"px"),height:t.$tn.string.getLengthUnitValue(t.itemHeight,"px"),transform:"scale("+e.scale+")"}},[t.deleteable?i("v-uni-view",{staticClass:"tn-image-upload__item-preview__delete",style:{borderTopColor:t.deleteBackgroundColor},on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.deleteItem(a)}}},[i("v-uni-view",{staticClass:"tn-image-upload__item-preview__delete--icon",class:["tn-icon-"+t.deleteIcon],style:{color:t.deleteColor}})],1):t._e(),t.showProgress&&e.data.progress>0&&!e.data.error?i("tn-line-progress",{staticClass:"tn-image-upload__item-preview__progress",attrs:{percent:e.data.progress,showPercent:!1,round:!1,height:8}}):t._e(),e.data.error?i("v-uni-view",{staticClass:"tn-image-upload__item-preview__error-btn",on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.retry(a)}}},[t._v("点击重试")]):t._e(),i("v-uni-image",{staticClass:"tn-image-upload__item-preview__image",attrs:{src:e.data.url||e.data.path,mode:t.imageMode},on:{click:function(i){i.stopPropagation(),arguments[0]=i=t.$handleEvent(i),t.doPreviewImage(e.data.url||e.data.path,a)}}})],1)],1)]})),t.maxCount>t.lists.length?i("v-uni-view",{staticClass:"tn-image-upload__add",style:{top:t.addBtn.y+"px",left:t.addBtn.x+"px",width:t.$tn.string.getLengthUnitValue(t.itemWidth,"px"),height:t.$tn.string.getLengthUnitValue(t.itemHeight,"px")},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.selectFile.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"tn-image-upload__item tn-image-upload__item-add",style:{width:t.$tn.string.getLengthUnitValue(t.itemWidth,"px"),height:t.$tn.string.getLengthUnitValue(t.itemHeight,"px")},attrs:{"hover-class":"tn-hover-class","hover-stay-time":"150"}},[i("v-uni-view",{staticClass:"tn-image-upload__item-add--icon tn-icon-add"}),i("v-uni-view",{staticClass:"tn-image-upload__item-add__tips"},[t._v(t._s(t.uploadText))])],1)],1):t._e()],2)],1)},o=[]},d4d2:function(t,e,i){"use strict";var a=i("8693"),n=i.n(a);n.a},f932:function(t,e,i){"use strict";i.r(e);var a=i("d0b2"),n=i("5f56");for(var o in n)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(o);i("8e57");var s=i("f0c5"),r=Object(s["a"])(n["default"],a["b"],a["c"],!1,null,"1966a455",null,!1,a["a"],void 0);e["default"]=r.exports},fa61:function(t,e,i){"use strict";i("7a82");var a=i("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("a9e3"),i("c975"),i("fb6a"),i("baa5"),i("caad"),i("2532");var n=a(i("7882")),o={mixins:[n.default],name:"tn-button",behaviors:["wx://form-field-button"],props:{index:{type:[Number,String],default:0},shape:{type:String,default:"default"},shadow:{type:Boolean,default:!1},width:{type:String,default:"auto"},height:{type:String,default:""},size:{type:String,default:""},fontBold:{type:Boolean,default:!1},padding:{type:String,default:"0 30rpx"},margin:{type:String,default:""},plain:{type:Boolean,default:!1},border:{type:Boolean,default:!0},borderBold:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},formType:{type:String,default:""},openType:{type:String,default:""},blockRepeatClick:{type:Boolean,default:!1}},computed:{buttonClass:function(){var t="";switch(this.shape){case"icon":case"round":t+=" tn-round";break}if(this.shadow)if(""!==this.backgroundColorClass&&-1!=this.backgroundColorClass.indexOf("tn-bg")){var e=this.backgroundColor.slice(this.backgroundColor.lastIndexOf("-")+1);t+=" tn-shadow-".concat(e)}else t+=" tn-shadow-blur";if(this.fontBold&&(t+=" tn-text-bold"),this.plain&&(t+=" tn-btn--plain",this.border&&(t+=" tn-border-solid",this.borderBold&&(t+=" tn-bold-border"),""!==this.backgroundColor&&this.backgroundColor.includes("tn-bg")))){var i=this.backgroundColor.slice(this.backgroundColor.lastIndexOf("-")+1);t+=" tn-border-".concat(i)}return t},buttonStyle:function(){var t={};switch(this.size){case"sm":t.padding="0 20rpx",t.fontSize="22rpx",t.height=this.height||"48rpx";break;case"lg":t.padding="0 40rpx",t.fontSize="32rpx",t.height=this.height||"80rpx";break;default:t.padding="0 30rpx",t.fontSize="28rpx",t.height=this.height||"64rpx"}return this.padding&&(t.padding=this.padding),this.margin&&(t.margin=this.margin),this.fontSize&&(t.fontSize=this.fontSize+this.fontUnit),t.width="icon"===this.shape?t.height:this.width,t.padding="icon"===this.shape?"0":t.padding,this.fontColorStyle&&(t.color=this.fontColorStyle),this.backgroundColorClass||(this.plain?t.borderColor=this.backgroundColorStyle||"#080808":t.backgroundColor=this.backgroundColorStyle||"#FFFFFF"),this.shadow&&!this.backgroundColorClass&&(-1!=this.backgroundColorStyle.indexOf("#")?t.boxShadow="6rpx 6rpx 8rpx ".concat(this.backgroundColorStyle||"#000000","10"):-1==this.backgroundColorStyle.indexOf("rgb")&&-1==this.backgroundColorStyle.indexOf("rgba")&&this.backgroundColorStyle||(t.boxShadow="6rpx 6rpx 8rpx ".concat(this.backgroundColorStyle||"rgba(0, 0, 0, 0.1)"))),t}},data:function(){return{clickTime:0,clickIntervalTime:200}},methods:{handleClick:function(){var t=this;if(!this.disabled){if(this.blockRepeatClick){var e=(new Date).getTime();if(e-this.clickTime<=this.clickIntervalTime)return;this.clickTime=e,setTimeout((function(){t.clickTime=0}),this.clickIntervalTime)}this.$emit("click",{index:Number(this.index)}),this.$emit("tap",{index:Number(this.index)})}},handleGetUserInfo:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.detail,i=void 0===e?{}:e;this.$emit("getuserinfo",i)},handleContact:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.detail,i=void 0===e?{}:e;this.$emit("contact",i)},handleGetPhoneNumber:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.detail,i=void 0===e?{}:e;this.$emit("getphonenumber",i)},handleError:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.detail,i=void 0===e?{}:e;this.$emit("error",i)}}};e.default=o}}]);