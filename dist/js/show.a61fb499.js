(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["show"],{"357b":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[t._v("拖拽")])},l=[],i={},n=i,r=s("2877"),c=Object(r["a"])(n,a,l,!1,null,null,null);e["default"]=c.exports},"3df5":function(t,e,s){},"3f0e":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[t._v("基础表格")])},l=[],i={},n=i,r=s("2877"),c=Object(r["a"])(n,a,l,!1,null,null,null);e["default"]=c.exports},"463d":function(t,e,s){},"54ce":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("h3",[t._v("树结构")]),s("div",[s("el-tree",{attrs:{data:t.data,props:t.defaultProps},on:{"node-click":t.handleNodeClick}})],1)])},l=[],i={data:function(){return{data:[{label:"一级 1",children:[{label:"二级 1-1",children:[{label:"三级 1-1-1"}]}]},{label:"一级 2",children:[{label:"二级 2-1",children:[{label:"三级 2-1-1"}]},{label:"二级 2-2",children:[{label:"三级 2-2-1"}]}]},{label:"一级 3",children:[{label:"二级 3-1",children:[{label:"三级 3-1-1"}]},{label:"二级 3-2",children:[{label:"三级 3-2-1"}]}]}],defaultProps:{children:"children",label:"label"}}},methods:{}},n=i,r=(s("9fe9"),s("2877")),c=Object(r["a"])(n,a,l,!1,null,null,null);e["default"]=c.exports},9161:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[t._v("tab选项卡")])},l=[],i={},n=i,r=s("2877"),c=Object(r["a"])(n,a,l,!1,null,null,null);e["default"]=c.exports},"9fe9":function(t,e,s){"use strict";s("463d")},aa21:function(t,e,s){t.exports=s.p+"img/log.309ba568.jpg"},b0c4:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[t._v("echarts图表")])},l=[],i={},n=i,r=s("2877"),c=Object(r["a"])(n,a,l,!1,null,null,null);e["default"]=c.exports},c71c:function(t,e,s){"use strict";s("3df5")},d504:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"all"},[s("div",{staticClass:"top"},[s("div",{staticClass:"top-left"},[t._m(0),s("div",{staticClass:"language"},[s("h3",[t._v("语言详情")]),s("div",{staticStyle:{padding:"5px"}},[s("div",[s("p",[t._v("Vue")]),s("el-progress",{attrs:{percentage:71.3,color:"#42B983"}})],1),s("div",[s("p",[t._v("JavaScript")]),s("el-progress",{attrs:{percentage:24.1,color:"#F1E05A"}})],1),s("div",[s("p",[t._v("CSS")]),s("el-progress",{attrs:{percentage:13.7}})],1),s("div",[s("p",[t._v("HTML")]),s("el-progress",{attrs:{percentage:5.9,color:"#F56C6C"}})],1)])])]),s("div",{staticClass:"top-right"},[s("div",{staticClass:"seeData"},[s("div",{staticClass:"user"},[s("i",{staticClass:"el-icon-user"}),s("div",[s("p",[t._v(t._s(t.user.num))]),s("p",[t._v(t._s(t.user.title))])])]),s("div",{staticClass:"system"},[s("i",{staticClass:"el-icon-bell"}),s("div",[s("p",[t._v(t._s(t.system.num))]),s("p",[t._v(t._s(t.system.title))])])]),s("div",{staticClass:"number"},[s("i",{staticClass:"el-icon-goods"}),s("div",[s("p",[t._v(t._s(t.number.num))]),s("p",[t._v(t._s(t.number.title))])])])]),s("div",{staticClass:"toDo"},[s("div",{staticClass:"header"},[s("span",[t._v("待办事项")]),s("el-input",{attrs:{placeholder:"请输入内容"},model:{value:t.addTodo,callback:function(e){t.addTodo=e},expression:"addTodo"}}),s("span",{on:{click:t.addBtn}},[t._v("添加")])],1),s("ul",{staticClass:"list"},t._l(t.listData,(function(e){return s("li",{key:e.id},[s("el-checkbox",{staticClass:"done",attrs:{label:"item.id"},model:{value:e.status,callback:function(s){t.$set(e,"status",s)},expression:"item.status"}},[t._v(t._s(e.thing))]),s("div",{staticClass:"btn"},[s("el-button",{attrs:{type:"primary",icon:"el-icon-edit",size:"mini"}}),s("el-button",{attrs:{type:"primary",icon:"el-icon-delete",size:"mini"}})],1)],1)})),0)])])]),t._m(1)])},l=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"admin"},[a("div",{staticClass:"head"},[a("img",{attrs:{src:s("aa21"),alt:""}}),a("div",{staticClass:"username"},[a("h3",[t._v("admin")]),a("p",[t._v("超级管理员")])])]),a("div",{staticClass:"local"},[a("p",[t._v("上次登录时间:")]),a("p",[t._v("上次登录地点:")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"down"},[s("div",{staticClass:"left"}),s("div",{staticClass:"right"})])}],i={data:function(){return{user:{num:1234,title:"用户访问量"},system:{num:321,title:"系统消息"},number:{num:5e3,title:"数量"},listData:[{id:1,thing:"修复10个bug",status:"todo"},{id:2,thing:"修复10个bug",status:"todo"},{id:3,thing:"修复10个bug",status:"todo"},{id:4,thing:"修复10个bug",status:"do"},{id:5,thing:"修复10个bug",status:"do"}],addTodo:"",addInitId:5}},methods:{addBtn:function(){var t=this.addInitId++;this.addInitId=t;var e=this.addTodo;this.listData.push({id:t,thing:e,status:"todo"}),this.addTodo=""}}},n=i,r=(s("c71c"),s("2877")),c=Object(r["a"])(n,a,l,!1,null,null,null);e["default"]=c.exports}}]);
//# sourceMappingURL=show.a61fb499.js.map