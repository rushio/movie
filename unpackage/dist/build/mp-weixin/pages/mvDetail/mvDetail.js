(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/mvDetail/mvDetail"],{"17ea":function(t,i,e){"use strict";e.r(i);var a=e("23bd"),s=e("ed27");for(var n in s)"default"!==n&&function(t){e.d(i,t,function(){return s[t]})}(n);e("d4f3");var o=e("2877"),r=Object(o["a"])(s["default"],a["a"],a["b"],!1,null,null,null);r.options.__file="mvDetail.vue",i["default"]=r.exports},"23bd":function(t,i,e){"use strict";var a=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("view",[e("view",{staticClass:"video"},[e("video",{attrs:{id:"myVideo",src:t.mvUrl,controls:"",poster:t.mvDetail.cover,eventid:"a87eecb8-0"},on:{error:t.videoErrorCallback}})]),e("view",{staticClass:"page-panel"},[e("view",{staticClass:"videoInfo"},[e("view",{staticClass:"name"},[t._v(t._s(t.mvDetail.name))]),e("view",{staticClass:"tips"},[e("text",[t._v("发布 : "+t._s(t.mvDetail.publishTime))]),e("text",{staticClass:"artistName"},[t._v("演唱 : "+t._s(t.mvDetail.artistName))])]),e("view",{staticClass:"desc"},[t._v(t._s(t.mvDetail.desc))])]),t._m(0),e("view",{staticClass:"simiMvList"},t._l(t.simiMvList,function(i,a){return e("view",{key:i.id,staticClass:"item",attrs:{eventid:"a87eecb8-1-"+a},on:{tap:function(e){t.toMvDetail(i.id)}}},[e("view",{staticClass:"pic"},[e("image",{attrs:{src:i.cover,mode:"aspectFill"}})]),e("view",{staticClass:"info"},[e("view",{staticClass:"name"},[t._v(t._s(i.name))]),e("view",{staticClass:"artistName"},[t._v(t._s(i.artistName))])]),t._m(1,!0)])}))])])},s=[function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("view",{staticClass:"page-title"},[e("text",{staticClass:"themeColor"},[t._v("类")]),t._v("似MV")])},function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("view",{staticClass:"btn"},[e("text"),e("text"),e("text")])}];e.d(i,"a",function(){return a}),e.d(i,"b",function(){return s})},b339:function(t,i,e){"use strict";e("a8ff");var a=n(e("b0ce")),s=n(e("17ea"));function n(t){return t&&t.__esModule?t:{default:t}}Page((0,a.default)(s.default))},c8ff:function(t,i,e){"use strict";(function(t){Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var e={data:function(){return{mvid:"",mvDetail:"",mvUrl:"",simiMvList:""}},onLoad:function(t){this.mvid=t.mvid,this.getMvDetail(),this.getMvUrl(),this.getSimiMvList()},methods:{getMvDetail:function(){var i=this;t.showLoading({title:"加载中"}),t.request({url:i.MusicApi.server+i.MusicApi.type.mvDetail,data:{mvid:i.mvid},success:function(e){t.hideLoading(),200==e.data.code?i.mvDetail=e.data.data:(console.error("数据获取失败"),t.showToast({title:"banner数据获取失败",duration:5e3,icon:"none"}))},fail:function(i){t.hideLoading(),t.showToast({title:"请求超时",duration:5e3,icon:"none"})}})},getMvUrl:function(){var i=this;t.showLoading({title:"加载中"}),t.request({url:i.MusicApi.server+i.MusicApi.type.mvUrl,data:{id:i.mvid},success:function(e){t.hideLoading(),200==e.data.code?i.mvUrl=e.data.data.url:t.showToast({title:"banner数据获取失败",duration:5e3,icon:"none"})},fail:function(i){t.hideLoading(),t.showToast({title:"请求超时",duration:5e3,icon:"none"})}})},getSimiMvList:function(){var i=this;t.showLoading({title:"加载中"}),t.request({url:i.MusicApi.server+i.MusicApi.type.simiMv,data:{mvid:i.mvid},success:function(e){t.hideLoading(),200==e.data.code?i.simiMvList=e.data.mvs:t.showToast({title:"banner数据获取失败",duration:5e3,icon:"none"})},fail:function(i){t.hideLoading(),t.showToast({title:"请求超时",duration:5e3,icon:"none"})}})},videoErrorCallback:function(i){t.showToast({title:i.target.errMsg,duration:5e3,icon:"none"})},toMvDetail:function(t){this.mvid=t,this.getMvDetail(),this.getMvUrl(),this.getSimiMvList()}}};i.default=e}).call(this,e("543d")["default"])},d4f3:function(t,i,e){"use strict";var a=e("ebab"),s=e.n(a);s.a},ebab:function(t,i,e){},ed27:function(t,i,e){"use strict";e.r(i);var a=e("c8ff"),s=e.n(a);for(var n in a)"default"!==n&&function(t){e.d(i,t,function(){return a[t]})}(n);i["default"]=s.a}},[["b339","common/runtime","common/vendor"]]]);