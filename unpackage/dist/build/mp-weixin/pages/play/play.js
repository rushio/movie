(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/play/play"],{"03c4":function(i,t,a){"use strict";a.r(t);var e=a("b2d9"),s=a("1d3a");for(var n in s)"default"!==n&&function(i){a.d(t,i,function(){return s[i]})}(n);a("109d");var u=a("2877"),o=Object(u["a"])(s["default"],e["a"],e["b"],!1,null,"48fb118c",null);o.options.__file="play.vue",t["default"]=o.exports},"109d":function(i,t,a){"use strict";var e=a("3d58"),s=a.n(e);s.a},"1d3a":function(i,t,a){"use strict";a.r(t);var e=a("ea2e"),s=a.n(e);for(var n in e)"default"!==n&&function(i){a.d(t,i,function(){return e[i]})}(n);t["default"]=s.a},"3d58":function(i,t,a){},b2d9:function(i,t,a){"use strict";var e=function(){var i=this,t=i.$createElement,a=i._self._c||t;return a("view",{staticClass:"page-panel-h"},[a("view",{staticClass:"music-name"},[i._v(i._s(i.musicDetail.name))]),a("view",{staticClass:"music-author"},[i._v(i._s(i.musicDetail.author))]),a("view",{staticClass:"music-pic"},[a("image",{attrs:{src:i.musicDetail.picUrl}})]),a("view",{staticClass:"player-panel"},[a("view",{staticClass:"time"},[a("view",{staticClass:"item"},[i._v(i._s(i.musicTime.currentTime))]),a("view",{staticClass:"item"},[i._v(i._s(i.musicTime.duration))])]),a("slider",{attrs:{value:i.musicTime.currentTime,step:"0.01",min:"0",max:i.musicTime.duration,"block-size":"12",activeColor:"#E91E63",eventid:"80408d38-0"},on:{changing:i.sliderChange}}),a("view",{staticClass:"player-btn"},[i._m(0),i.isStop?a("view",{staticClass:"playStop",attrs:{eventid:"80408d38-1"},on:{tap:function(t){i.toAgain()}}},[a("image",{attrs:{src:"../../static/images/again.png",mode:""}})]):i._e(),i.isStop?i._e():a("view",{staticClass:"playStop",attrs:{eventid:"80408d38-2"},on:{tap:function(t){i.toPausePlay()}}},[a("image",{attrs:{src:i.isPlay?i.playIcon:i.pauseIcon,mode:""}})]),i._m(1)])])])},s=[function(){var i=this,t=i.$createElement,a=i._self._c||t;return a("view",{staticClass:"nextPrev"},[a("image",{attrs:{src:"../../static/images/prev.png",mode:""}})])},function(){var i=this,t=i.$createElement,a=i._self._c||t;return a("view",{staticClass:"nextPrev"},[a("image",{attrs:{src:"../../static/images/next.png",mode:""}})])}];a.d(t,"a",function(){return e}),a.d(t,"b",function(){return s})},e402:function(i,t,a){"use strict";a("a8ff");var e=n(a("b0ce")),s=n(a("03c4"));function n(i){return i&&i.__esModule?i:{default:i}}Page((0,e.default)(s.default))},ea2e:function(i,t,a){"use strict";(function(i){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var e=a("2f62");function s(i){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},e=Object.keys(a);"function"===typeof Object.getOwnPropertySymbols&&(e=e.concat(Object.getOwnPropertySymbols(a).filter(function(i){return Object.getOwnPropertyDescriptor(a,i).enumerable}))),e.forEach(function(t){n(i,t,a[t])})}return i}function n(i,t,a){return t in i?Object.defineProperty(i,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):i[t]=a,i}var u={data:function(){return{musicDetail:{id:"",url:"",name:"",picUrl:"",author:""},musicTime:{currentTime:0,duration:0},playIcon:"../../static/images/play.png",pauseIcon:"../../static/images/pause.png",isStop:!1,isPlay:!0,musicSwith:0,musicSwithNum:2,bgAudioMannager:"",innerAudioContext:""}},computed:s({},(0,e.mapState)(["isMusicStart","musicInfo","isMusicPlay","playTime"])),onLoad:function(i){this.musicDetail.id=i.id,this.bgAudioMannager=this.globalData.bgAudioMannager,this.bgAudioMannagerFunc(),"playing"!==this.musicDetail.id?(this.getMusicUrl(),this.getMusicInfo()):(this.musicDetail=this.musicInfo,this.musicTime=this.playTime,this.isMusicPlay?this.isPlay=!0:this.isPlay=!1,0==this.globalData.bgAudioMannager.currentTime?this.isStop=!0:this.isStop=!1)},onUnload:function(i){this.setPlayTime(this.musicTime),this.setMusicInfo(this.musicDetail),this.setMusicPlay(this.isPlay)},methods:s({},(0,e.mapMutations)(["musicStart","setMusicInfo","setMusicPlay","setPlayTime"]),{bgAudioMannagerFunc:function(){var i=this;this.bgAudioMannager.onTimeUpdate(function(){i.musicTime.currentTime=i.bgAudioMannager.currentTime/60,i.musicTime.duration=i.bgAudioMannager.duration/60,i.musicTime.currentTime=i.musicTime.currentTime.toFixed(2),i.musicTime.duration=i.musicTime.duration.toFixed(2),i.globalData.bgAudioMannager.currentTime==i.globalData.bgAudioMannager.duration&&(i.isStop=!0)})},getMusicUrl:function(){var t=this;i.showLoading({title:"加载中"}),i.request({url:t.MusicApi.server+t.MusicApi.type.songUrl,data:{id:t.musicDetail.id},success:function(a){200==a.data.code?(t.musicDetail.url=a.data.data[0].url,t.musicSwith++,i.hideLoading()):(i.hideLoading(),console.error("数据获取失败"),i.showToast({title:"banner数据获取失败",duration:5e3,icon:"none"}))},fail:function(t){i.hideLoading(),i.showToast({title:"请求超时",duration:5e3,icon:"none"})}})},getMusicInfo:function(){var t=this;i.showLoading({title:"加载中"}),i.request({url:t.MusicApi.server+t.MusicApi.type.songDetail,data:{ids:t.musicDetail.id},success:function(a){if(200==a.data.code){for(var e in t.musicDetail.name=a.data.songs[0].name,t.musicDetail.picUrl=a.data.songs[0].al.picUrl,a.data.songs[0].ar)t.musicDetail.author=t.musicDetail.author+a.data.songs[0].ar[e].name+"/";t.musicDetail.author=t.musicDetail.author.substr(0,t.musicDetail.author.length-1),t.musicSwith++,i.hideLoading()}else i.hideLoading(),console.error("数据获取失败"),i.showToast({title:"banner数据获取失败",duration:5e3,icon:"none"})},fail:function(t){i.hideLoading(),i.showToast({title:"请求超时",duration:5e3,icon:"none"})}})},playMusic:function(){this.musicStart("true"),this.bgAudioMannager.stop(),this.bgAudioMannager.title=this.musicDetail.name,this.bgAudioMannager.singer=this.musicDetail.author,this.bgAudioMannager.coverImgUrl=this.musicDetail.picUrl,this.bgAudioMannager.src=this.musicDetail.url,this.bgAudioMannager.play()},toPausePlay:function(){this.isPlay?(this.bgAudioMannager.pause(),this.isPlay=!1):(this.bgAudioMannager.play(),this.isPlay=!0)},toAgain:function(){this.isStop=!1,this.isPlay=!0,this.playMusic()},sliderChange:function(i){var t=i.detail.value;this.bgAudioMannager.seek(60*t)}}),watch:{musicSwith:function(i,t){i==this.musicSwithNum&&this.playMusic()}}};t.default=u}).call(this,a("543d")["default"])}},[["e402","common/runtime","common/vendor"]]]);