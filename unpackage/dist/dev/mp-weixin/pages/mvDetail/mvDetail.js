require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([5],{26:function(e,t,o){"use strict";var i=a(o(2)),n=a(o(27));function a(e){return e&&e.__esModule?e:{default:e}}Page((0,i.default)(n.default))},27:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=o(29),n=o.n(i),a=o(30),r=!1;var s=function(e){r||o(28)},u=o(0)(n.a,a.a,s,null,null);u.options.__file="..\\..\\..\\..\\work\\1-ME\\muiapp\\movie\\pages\\mvDetail\\mvDetail.vue",u.esModule&&Object.keys(u.esModule).some(function(e){return"default"!==e&&"__"!==e.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),u.options.functional&&console.error("[vue-loader] mvDetail.vue: functional components are not supported with templates, they should use render functions."),t.default=u.exports},28:function(e,t){},29:function(e,t,o){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{mvid:"",mvDetail:"",mvUrl:""}},onLoad:function(e){console.log(e),this.mvid=e.mvid,this.getMvDetail(),this.getMvUrl()},methods:{getMvDetail:function(){var t=this;e.showLoading({title:"加载中"}),e.request({url:t.MusicApi.server+t.MusicApi.type.mvDetail,data:{mvid:t.mvid},success:function(o){e.hideLoading(),console.log(o.data.data),200==o.data.code?t.mvDetail=o.data.data:(console.error("数据获取失败"),e.showToast({title:"banner数据获取失败",duration:5e3,icon:"none"}))},fail:function(t){e.hideLoading(),e.showToast({title:"请求超时",duration:5e3,icon:"none"})}})},getMvUrl:function(){var t=this;e.showLoading({title:"加载中"}),e.request({url:t.MusicApi.server+t.MusicApi.type.mvUrl,data:{id:t.mvid},success:function(o){e.hideLoading(),200==o.data.code?t.mvUrl=o.data.data.url:(console.error("数据获取失败"),e.showToast({title:"banner数据获取失败",duration:5e3,icon:"none"}))},fail:function(t){e.hideLoading(),e.showToast({title:"请求超时",duration:5e3,icon:"none"})}})}}}}).call(t,o(14).default)},30:function(e,t,o){"use strict";var i=function(){var e=this.$createElement,t=this._self._c||e;return t("view",[t("view",{staticClass:"video"},[t("video",{attrs:{id:"myVideo",src:this.mvUrl,controls:"",eventid:"YSt-0"},on:{error:this.videoErrorCallback}})])])};i._withStripped=!0;var n={render:i,staticRenderFns:[]};t.a=n}},[26]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/mvDetail/mvDetail.js.map