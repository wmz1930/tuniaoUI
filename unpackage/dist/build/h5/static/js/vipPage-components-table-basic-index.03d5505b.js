(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["vipPage-components-table-basic-index"],{"09089":function(t,e,n){"use strict";n.r(e);var r=n("9475"),a=n("9d6d");for(var i in a)["default"].indexOf(i)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(i);n("2206");var l=n("f0c5"),s=Object(l["a"])(a["default"],r["b"],r["c"],!1,null,"5b4f2641",null,!1,r["a"],void 0);e["default"]=s.exports},2206:function(t,e,n){"use strict";var r=n("ba9e"),a=n.n(r);a.a},"603e":function(t,e,n){var r=n("24fb");e=r(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 下方引入的为Tuniao UI的集成样式文件，为scss预处理器，其中包含了一些"tn-"开头的自定义变量\r\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\r\n * Tuniao UI自定义的css类名和scss变量，均以"tn-"开头，不会造成冲突，请放心使用 \r\n */.vip-components-table__basic[data-v-5b4f2641]{background-color:#f4f4f4;min-height:100vh}',""]),t.exports=e},9475:function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return r}));var r={tnNavBar:n("5138").default,tnTable:n("6453").default,tnTr:n("e9aa").default,tnTd:n("3117").default},a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"vip-components-table__basic"},[n("tn-nav-bar",{attrs:{fixed:!0}},[t._v("基础表格")]),n("v-uni-view",{style:{paddingTop:t.vuex_custom_bar_height+"px"}},[n("demo-title",{attrs:{title:"默认表格"}},[n("tn-table",[n("tn-tr",t._l(t.header,(function(e,r){return n("tn-td",{key:r,attrs:{bold:!0,span:8,keys:e.key}},[t._v(t._s(e.title))])})),1),t._l(t.listData,(function(e,r){return n("tn-tr",{key:r,attrs:{index:e.id}},t._l(t.header,(function(r,a){return n("tn-td",{key:a,attrs:{span:8,keys:r.key},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.handleClick(n,e.id)}}},[t._v(t._s(e[r.key]))])})),1)}))],2)],1),n("demo-title",{attrs:{title:"调整宽度 方式1"}},[n("tn-table",[n("tn-tr",t._l(t.header,(function(e,r){return n("tn-td",{key:r,attrs:{bold:!0,span:2===r?16:8,keys:e.key}},[t._v(t._s(e.title))])})),1),t._l(t.listData,(function(e,r){return n("tn-tr",{key:r,attrs:{index:e.id}},t._l(t.header,(function(r,a){return n("tn-td",{key:a,attrs:{span:2===a?16:8,keys:r.key},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.handleClick(n,e.id)}}},[t._v(t._s(e[r.key]))])})),1)}))],2)],1),n("demo-title",{attrs:{title:"调整宽度 方式2"}},[n("tn-table",[n("tn-tr",t._l(t.header,(function(e,r){return n("tn-td",{key:r,attrs:{bold:!0,grow:2===r,width:["90px","160rpx","auto"][r],keys:e.key}},[t._v(t._s(e.title))])})),1),t._l(t.listData,(function(e,r){return n("tn-tr",{key:r,attrs:{index:e.id}},t._l(t.header,(function(r,a){return n("tn-td",{key:a,attrs:{grow:2===a,width:["90px","160rpx","auto"][a],keys:r.key},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.handleClick(n,e.id)}}},[t._v(t._s(e[r.key]))])})),1)}))],2)],1),n("demo-title",{attrs:{title:"居中对齐"}},[n("tn-table",[n("tn-tr",t._l(t.header,(function(e,r){return n("tn-td",{key:r,attrs:{alignItems:"center",bold:!0,span:8,keys:e.key}},[t._v(t._s(e.title))])})),1),t._l(t.listData,(function(e,r){return n("tn-tr",{key:r,attrs:{index:e.id}},t._l(t.header,(function(r,a){return n("tn-td",{key:a,attrs:{alignItems:"center",span:8,keys:r.key},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.handleClick(n,e.id)}}},[t._v(t._s(e[r.key]))])})),1)}))],2)],1),n("demo-title",{attrs:{title:"右对齐"}},[n("tn-table",[n("tn-tr",t._l(t.header,(function(e,r){return n("tn-td",{key:r,attrs:{alignItems:"right",bold:!0,span:8,keys:e.key}},[t._v(t._s(e.title))])})),1),t._l(t.listData,(function(e,r){return n("tn-tr",{key:r,attrs:{index:e.id}},t._l(t.header,(function(r,a){return n("tn-td",{key:a,attrs:{alignItems:"right",span:8,keys:r.key},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.handleClick(n,e.id)}}},[t._v(t._s(e[r.key]))])})),1)}))],2)],1),n("demo-title",{attrs:{title:"居中对齐之文字右对齐"}},[n("tn-table",[n("tn-tr",t._l(t.header,(function(e,r){return n("tn-td",{key:r,attrs:{alignItems:"center",bold:!0,span:8,keys:e.key}},[t._v(t._s(e.title))])})),1),t._l(t.listData,(function(e,r){return n("tn-tr",{key:r,attrs:{index:e.id}},t._l(t.header,(function(r,a){return n("tn-td",{key:a,attrs:{alignItems:"center",textAlign:"right",span:8,keys:r.key},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.handleClick(n,e.id)}}},[t._v(t._s(e[r.key]))])})),1)}))],2)],1),n("demo-title",{attrs:{title:"去掉纵向边框"}},[n("tn-table",{attrs:{borderRight:!0}},[n("tn-tr",t._l(t.header,(function(e,r){return n("tn-td",{key:r,attrs:{borderRight:!1,bold:!0,span:8,keys:e.key}},[t._v(t._s(e.title))])})),1),t._l(t.listData,(function(e,r){return n("tn-tr",{key:r,attrs:{index:e.id}},t._l(t.header,(function(r,a){return n("tn-td",{key:a,attrs:{borderRight:!1,span:8,keys:r.key},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.handleClick(n,e.id)}}},[t._v(t._s(e[r.key]))])})),1)}))],2)],1),n("demo-title",{attrs:{title:"无边框"}},[n("tn-table",{attrs:{borderWidth:"0"}},[n("tn-tr",t._l(t.header,(function(e,r){return n("tn-td",{key:r,attrs:{bold:!0,span:8,keys:e.key}},[t._v(t._s(e.title))])})),1),t._l(t.listData,(function(e,r){return n("tn-tr",{key:r,attrs:{index:e.id}},t._l(t.header,(function(r,a){return n("tn-td",{key:a,attrs:{span:8,keys:r.key},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.handleClick(n,e.id)}}},[t._v(t._s(e[r.key]))])})),1)}))],2)],1),n("demo-title",{attrs:{title:"自定义颜色"}},[n("tn-table",{attrs:{borderColor:"#FFFFFF"}},[n("tn-tr",{attrs:{backgroundColor:"transparent",borderColor:"#FFFFFF",fontColor:"#01BEFF",fontSize:34}},t._l(t.header,(function(e,r){return n("tn-td",{key:r,attrs:{borderColor:"#FFFFFF",bold:!0,span:8,keys:e.key}},[t._v(t._s(e.title))])})),1),t._l(t.listData,(function(e,r){return n("tn-tr",{key:r,attrs:{index:e.id,backgroundColor:"transparent",borderColor:"#FFFFFF"}},t._l(t.header,(function(r,a){return n("tn-td",{key:a,attrs:{borderColor:"#FFFFFF",span:8,keys:r.key},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.handleClick(n,e.id)}}},[t._v(t._s(e[r.key]))])})),1)}))],2)],1),n("demo-title",{attrs:{title:"文字超出隐藏"}},[n("tn-table",[n("tn-tr",t._l(t.header,(function(e,r){return n("tn-td",{key:r,attrs:{bold:!0,span:8,keys:e.key}},[t._v(t._s(e.title))])})),1),t._l(t.listData,(function(e,r){return n("tn-tr",{key:r,attrs:{index:e.id}},t._l(t.header,(function(r,a){return n("tn-td",{key:a,attrs:{ellipsis:!0,span:8,keys:r.key},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.handleClick(n,e.id)}}},[t._v(t._s(e[r.key]))])})),1)}))],2)],1),n("v-uni-view",{staticClass:"tn-padding-bottom-lg"})],1)],1)},i=[]},"9d6d":function(t,e,n){"use strict";n.r(e);var r=n("e577"),a=n.n(r);for(var i in r)["default"].indexOf(i)<0&&function(t){n.d(e,t,(function(){return r[t]}))}(i);e["default"]=a.a},ba9e:function(t,e,n){var r=n("603e");r.__esModule&&(r=r.default),"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var a=n("4f06").default;a("7174e985",r,!0,{sourceMap:!1,shadowMode:!1})},e577:function(t,e,n){"use strict";n("7a82");var r=n("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("99af");var a=r(n("2ee6")),i={name:"VipComponentsBasicTable",components:{demoTitle:a.default},data:function(){return{header:[{title:"日期",key:"date"},{title:"金额",key:"price"},{title:"备注",key:"note"}],listData:[{id:1,date:"20220301",price:"1,000",note:"今天的销售额一般般呀"},{id:2,date:"20220302",price:"1,000,00",note:"今天的销售额还不错嘛"},{id:3,date:"20220303",price:"4000",note:"今天的销售额还行啦"}]}},methods:{handleClick:function(t,e){this.$tn.message.toast("点击了[".concat(t.key,"]id为").concat(e,"的选项"))}}};e.default=i}}]);