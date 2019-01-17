require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([4],{19:function(t,e,i){"use strict";var s=n(i(2)),a=n(i(20));function n(t){return t&&t.__esModule?t:{default:t}}Page((0,s.default)(a.default))},20:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i(22),a=i.n(s),n=i(23),o=!1;var r=function(t){o||i(21)},l=i(0)(a.a,n.a,r,null,null);l.options.__file="..\\..\\..\\..\\work\\1-ME\\muiapp\\movie\\pages\\mvDetail\\mvDetail.vue",l.esModule&&Object.keys(l.esModule).some(function(t){return"default"!==t&&"__"!==t.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),l.options.functional&&console.error("[vue-loader] mvDetail.vue: functional components are not supported with templates, they should use render functions."),e.default=l.exports},21:function(t,e){},22:function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{mvid:"",mvDetail:"",mvUrl:"",simiMvList:""}},onLoad:function(t){this.mvid=t.mvid,this.getMvDetail(),this.getMvUrl(),this.getSimiMvList()},methods:{getMvDetail:function(){var e=this;t.showLoading({title:"加载中"}),t.request({url:e.MusicApi.server+e.MusicApi.type.mvDetail,data:{mvid:e.mvid},success:function(i){t.hideLoading(),200==i.data.code?e.mvDetail=i.data.data:(console.error("数据获取失败"),t.showToast({title:"banner数据获取失败",duration:5e3,icon:"none"}))},fail:function(e){t.hideLoading(),t.showToast({title:"请求超时",duration:5e3,icon:"none"})}})},getMvUrl:function(){var e=this;t.showLoading({title:"加载中"}),t.request({url:e.MusicApi.server+e.MusicApi.type.mvUrl,data:{id:e.mvid},success:function(i){t.hideLoading(),200==i.data.code?e.mvUrl=i.data.data.url:t.showToast({title:"banner数据获取失败",duration:5e3,icon:"none"})},fail:function(e){t.hideLoading(),t.showToast({title:"请求超时",duration:5e3,icon:"none"})}})},getSimiMvList:function(){var e=this;t.showLoading({title:"加载中"}),t.request({url:e.MusicApi.server+e.MusicApi.type.simiMv,data:{mvid:e.mvid},success:function(i){t.hideLoading(),200==i.data.code?e.simiMvList=i.data.mvs:t.showToast({title:"banner数据获取失败",duration:5e3,icon:"none"})},fail:function(e){t.hideLoading(),t.showToast({title:"请求超时",duration:5e3,icon:"none"})}})},videoErrorCallback:function(e){t.showToast({title:e.target.errMsg,duration:5e3,icon:"none"})},toMvDetail:function(t){this.mvid=t,this.getMvDetail(),this.getMvUrl(),this.getSimiMvList()}}}}).call(e,i(1).default)},23:function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("view",[i("view",{staticClass:"video"},[i("video",{attrs:{id:"myVideo",src:t.mvUrl,controls:"",poster:t.mvDetail.cover,eventid:"QZs-0"},on:{error:t.videoErrorCallback}})]),i("view",{staticClass:"page-panel"},[i("view",{staticClass:"videoInfo"},[i("view",{staticClass:"name"},[t._v(t._s(t.mvDetail.name))]),i("view",{staticClass:"tips"},[i("text",[t._v("发布 : "+t._s(t.mvDetail.publishTime))]),i("text",{staticClass:"artistName"},[t._v("演唱 : "+t._s(t.mvDetail.artistName))])]),i("view",{staticClass:"desc"},[t._v(t._s(t.mvDetail.desc))])]),t._m(0),i("view",{staticClass:"simiMvList"},t._l(t.simiMvList,function(e,s){return i("view",{key:e.id,staticClass:"item",attrs:{eventid:"6Ke-1-"+s},on:{tap:function(i){t.toMvDetail(e.id)}}},[i("view",{staticClass:"pic"},[i("image",{attrs:{src:e.cover,mode:"aspectFill"}})]),i("view",{staticClass:"info"},[i("view",{staticClass:"name"},[t._v(t._s(e.name))]),i("view",{staticClass:"artistName"},[t._v(t._s(e.artistName))])]),t._m(1,!0)])}))])])};s._withStripped=!0;var a={render:s,staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:"page-title"},[e("text",{staticClass:"themeColor"},[this._v("类")]),this._v("似MV")])},function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:"btn"},[e("text"),e("text"),e("text")])}]};e.a=a}},[19]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/mvDetail/mvDetail.js.map