(function(t){function e(e){for(var n,i,s=e[0],o=e[1],u=e[2],d=0,f=[];d<s.length;d++)i=s[d],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&f.push(a[i][0]),a[i]=0;for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(t[n]=o[n]);l&&l(e);while(f.length)f.shift()();return r.push.apply(r,u||[]),c()}function c(){for(var t,e=0;e<r.length;e++){for(var c=r[e],n=!0,s=1;s<c.length;s++){var o=c[s];0!==a[o]&&(n=!1)}n&&(r.splice(e--,1),t=i(i.s=c[0]))}return t}var n={},a={app:0},r=[];function i(e){if(n[e])return n[e].exports;var c=n[e]={i:e,l:!1,exports:{}};return t[e].call(c.exports,c,c.exports,i),c.l=!0,c.exports}i.m=t,i.c=n,i.d=function(t,e,c){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:c})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var c=Object.create(null);if(i.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(c,n,function(e){return t[e]}.bind(null,n));return c},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],o=s.push.bind(s);s.push=e,s=s.slice();for(var u=0;u<s.length;u++)e(s[u]);var l=o;r.push([0,"chunk-vendors"]),c()})({0:function(t,e,c){t.exports=c("56d7")},2599:function(t,e,c){"use strict";c("a023")},"35a8":function(t,e,c){t.exports=c.p+"img/fac-escalator.c4e8b1be.svg"},3648:function(t,e,c){},"3e3e":function(t,e,c){},4674:function(t,e,c){},"4a47":function(t,e,c){t.exports=c.p+"img/xmark.circle.fill.0ab1f1e0.svg"},5440:function(t,e,c){t.exports=c.p+"img/line-TRA.ff4616cc.svg"},"56d7":function(t,e,c){"use strict";c.r(e);c("e260"),c("e6cf"),c("cca6"),c("a79d");var n=c("7a23");function a(t,e){var c=Object(n["w"])("router-view");return Object(n["p"])(),Object(n["d"])(c)}c("c95d");const r={};r.render=a;var i=r,s=c("6c02"),o=c("4a47"),u=c.n(o),l=Object(n["E"])("data-v-0ca46dea");Object(n["s"])("data-v-0ca46dea");var d={class:"container"},f={class:"ms-handle-container"},b=Object(n["g"])("span",{class:"ms-handle"},null,-1),p=Object(n["g"])("img",{src:u.a},null,-1),O={key:1,class:"ms-sheet-placeholder"},j={class:"map-container"};Object(n["q"])();var h=l((function(t,e,c,a,r,i){var s=Object(n["w"])("router-view"),o=Object(n["w"])("RouteMap");return Object(n["p"])(),Object(n["d"])("div",d,["/"!==t.$route.path?(Object(n["p"])(),Object(n["d"])("div",{key:0,class:["ms-sheet",{msCollapsed:i.modalCollapsed}],id:"bottomsheet",onTouchstart:e[2]||(e[2]=function(){return i.initTouch&&i.initTouch.apply(i,arguments)}),onTouchmove:e[3]||(e[3]=function(){return i.handleTouch&&i.handleTouch.apply(i,arguments)}),onTouchend:e[4]||(e[4]=function(){return i.endTouch&&i.endTouch.apply(i,arguments)})},[Object(n["g"])("div",f,[b,Object(n["g"])("div",{class:"ms-closebtn",onClick:e[1]||(e[1]=function(){return i.closeModal&&i.closeModal.apply(i,arguments)})},[p])]),Object(n["g"])(s)],34)):(Object(n["p"])(),Object(n["d"])("div",O," 點選車站即可查看詳細資訊 ")),Object(n["g"])("div",j,[Object(n["g"])(o)])])})),g=(c("7db0"),c("5502")),m=(c("99af"),c("bc3a")),v=c.n(m),y=c("6c2d"),S="https://taichungmetro-github-default-rtdb.firebaseio.com/",T=v.a.create({baseURL:S,withCredentials:!1,headers:{Accept:"application/json","Content-Type":"application/json"}}),x=v.a.create({headers:M()});function M(){var t="c48fa21c86cc4d09913f9f5ff49a8ff9",e="21p51wndihCNdkztosM0CJ3v2ww",c=(new Date).toGMTString(),n=new y["a"]("SHA-1","TEXT");n.setHMACKey(e,"TEXT"),n.update("x-date: "+c);var a=n.getHMAC("B64"),r='hmac username="'+t+'", algorithm="hmac-sha1", headers="x-date", signature="'+a+'"';return{Authorization:r,"X-Date":c}}var w={getRoute:function(){return T.get("./routes.json")},getStationInfo:function(t){return T.get("/StationInfos/".concat(t,".json"))},getStationTransfer:function(t){return T.get("/StationTransfer/".concat(t,".json"))},getYouBikeStat:function(){return v.a.get("https://datacenter.taichung.gov.tw/swagger/OpenData/9af00e84-473a-4f3d-99be-b875d8e86256")},getFare:function(t,e){if(t!==e)return x.get("https://ptx.transportdata.tw/MOTC/v2/Rail/Metro/ODFare/TMRT?$filter=OriginStationID%20eq%20'".concat(t,"'%20and%20DestinationStationID%20eq%20'").concat(e,"'&$format=JSON"))}},k=Object(g["a"])({state:{modalCollapsed:!0,fareSelection:!1,database:{},current:{},dest:{},fare:{},stationInfo:{}},mutations:{loadData:function(t,e){t.database=e},selectedInfo:function(t,e){t.current=e},setDest:function(t,e){t.dest=e},setFareSearch:function(t){t.fareSelection=!0},clearFareSearch:function(t){t.fareSelection=!1},loadFare:function(t,e){t.fare=e},clearFare:function(t){t.fare={},t.dest={}},loadStationInfo:function(t,e){t.stationInfo=e},collapseModal:function(t){t.modalCollapsed=!0},expandModal:function(t){t.modalCollapsed=!1}},actions:{initRoute:function(){var t=this;w.getRoute().then((function(e){var c=e.data;t.commit("loadData",c)})).catch((function(t){return console.log(t)}))},showSelected:function(t,e){t.commit("selectedInfo",e)},setSearchMode:function(){this.commit("setFareSearch")},clearSearchMode:function(){this.commit("clearFareSearch")},setDest:function(t,e){t.commit("setDest",e)},getFare:function(t,e){this.state.current.uid!==this.state.dest.uid?w.getFare(this.state.current.uid,this.state.dest.uid).then((function(c){e=c.data,t.commit("loadFare",e)})).catch((function(t){return console.log(t)})):alert("請選擇不同的起迄站")},clearFare:function(t){t.commit("clearFare")},getStationInfo:function(t,e){w.getStationInfo(this.state.current.uid).then((function(c){e=c.data,t.commit("loadStationInfo",e)})).catch((function(t){return console.log(t)}))},getStationTransfer:function(){w.getStationTransfer(this.state.current.uid).then((function(t){return console.log(t.data)}))}},getters:{getBikesById:function(t){return function(e){return t.bikes.find((function(t){return t.sno===e}))}}},modules:{}}),C=Object(n["E"])("data-v-7f2070e0");Object(n["s"])("data-v-7f2070e0");var I={class:"route"},D={class:"route-map",id:"routemap"},F={class:"route-bg"};Object(n["q"])();var Y=C((function(t,e,c,a,r,i){return Object(n["p"])(),Object(n["d"])("div",I,[Object(n["g"])("div",D,[(Object(n["p"])(!0),Object(n["d"])(n["a"],null,Object(n["v"])(i.Routes,(function(t){return Object(n["p"])(),Object(n["d"])("div",{key:t.id},[Object(n["g"])("div",F,[Object(n["g"])("img",{src:t.path,alt:""},null,8,["src"])]),(Object(n["p"])(!0),Object(n["d"])(n["a"],null,Object(n["v"])(t.stations,(function(e){return Object(n["p"])(),Object(n["d"])("div",{class:"route-station",key:e.id,style:{top:"".concat(e.position.top),left:"".concat(e.position.left)},onClick:function(t){return i.selectStation(e)}},[Object(n["g"])("span",{class:["route-station-dot",{hasTransit:e.transit}],style:{borderColor:"".concat(t.color)}},null,6),Object(n["g"])("div",{class:["route-station-tag","".concat(e.position.tag)]},Object(n["y"])(e.zh),3)],12,["onClick"])})),128))])})),128))])])})),_=(c("ac1f"),c("5319"),{mounted:function(){},data:function(){return{}},methods:{selectStation:function(t){if(k.state.fareSelection)return k.dispatch("setDest",t),k.dispatch("getFare"),void k.dispatch("clearSearchMode");k.dispatch("clearSearchMode"),k.dispatch("clearFare"),this.$router.replace({name:"StationInfo",params:{id:"".concat(t.uid)}}),k.dispatch("showSelected",t)}},computed:{Routes:function(){return k.state.database},searchMode:function(){return k.state.fareSelection}}});c("6262");_.render=Y,_.__scopeId="data-v-7f2070e0";var R=_,q={components:{RouteMap:R},data:function(){return{fullHeight:"",initY:"",endY:"",modalHeight:""}},created:function(){k.dispatch("initRoute")},methods:{initTouch:function(t){console.log(t.touches[0]),this.initY=t.touches[0].clientY,this.fullHeight=t.touches[0].pageY},handleTouch:function(t){var e="";(!0===k.state.modalCollapsed||!1===k.state.modalCollapsed&&this.initY>44&&this.initY<150)&&(e="calc( 100% - ".concat(t.touches[0].clientY,"px)")),document.querySelector("#bottomsheet").style.height=e},endTouch:function(t){this.endY=t.changedTouches[0].clientY,this.endY<this.initY?(k.commit("expandModal"),document.querySelector("#bottomsheet").style.height="100%"):this.initY<73&&this.initY>44&&this.endY>this.initY&&(k.commit("collapseModal"),document.querySelector("#bottomsheet").style.height="184px")},closeModal:function(){this.$router.push("/")}},computed:{modalCollapsed:function(){return k.state.modalCollapsed}}};c("7ccb");q.render=h,q.__scopeId="data-v-0ca46dea";var A=q,P=c("bd0f"),z=c.n(P),H=c("5440"),E=c.n(H),B={class:"ds-header"},J={class:"ds-currentstation"},$={style:{display:"flex"}},X={class:"ds-station"},K={style:{display:"flex"}},L={src:z.a,alt:""},N={src:E.a,style:{"margin-left":"8px"},alt:""},G={class:"ds-nav"},U=Object(n["f"])("設為起點"),W=Object(n["f"])("站點資訊"),Q=Object(n["f"])("轉乘資訊");function V(t,e,c,a,r,i){var s=Object(n["w"])("router-link"),o=Object(n["w"])("router-view");return Object(n["p"])(),Object(n["d"])(n["a"],null,[Object(n["g"])("div",B,[Object(n["g"])("div",J,[Object(n["g"])("div",$,[Object(n["g"])("img",{class:"ds-num",src:i.current.path},null,8,["src"]),Object(n["g"])("div",X,[Object(n["g"])("h3",null,Object(n["y"])(i.current.zh),1),Object(n["g"])("p",null,Object(n["y"])(i.current.line),1)])]),Object(n["g"])("div",K,[Object(n["D"])(Object(n["g"])("img",L,null,512),[[n["A"],"HSR Taichung Station"===i.current.en]]),Object(n["D"])(Object(n["g"])("img",N,null,512),[[n["A"],i.current.transit]])])]),Object(n["g"])("div",G,[Object(n["g"])(s,{to:"/search",onClick:i.initSearch,class:"ds-nav-item"},{default:Object(n["C"])((function(){return[U]})),_:1},8,["onClick"]),Object(n["g"])(s,{to:{name:"StationFacilities"},class:"ds-nav-item",onClick:i.openModal,replace:""},{default:Object(n["C"])((function(){return[W]})),_:1},8,["onClick"]),Object(n["g"])(s,{class:"ds-nav-item",to:{name:"StationTransfer"}},{default:Object(n["C"])((function(){return[Q]})),_:1})])]),Object(n["g"])(o,{class:"ds-nav-view"})],64)}var Z={methods:{initSearch:function(){k.dispatch("setSearchMode")},endSearch:function(){k.dispatch("clearSearchMode")},openModal:function(){k.commit("expandModal"),document.querySelector("#bottomsheet").style.height="100%"}},computed:{fareSearchMode:function(){return k.state.fareSelection},current:function(){return k.state.current},dest:function(){return k.state.dest},fareData:function(){return k.state.fare[0]}}};c("2599");Z.render=V;var tt=Z,et=(c("b0c0"),c("ca69")),ct=c.n(et),nt=c("35a8"),at=c.n(nt),rt=c("c5c4"),it=c.n(rt),st={key:0,class:"ds-list"},ot=Object(n["g"])("div",{class:"ds-list-header"},"首末班車",-1),ut={class:"ds-schedule"},lt={class:"ds-schedule-via"},dt={class:"ds-schedule-name"},ft={style:{display:"flex","margin-right":"16px"}},bt={class:"ds-time"},pt=Object(n["g"])("span",{class:"ds-badge"},"首",-1),Ot={class:"ds-time"},jt=Object(n["g"])("span",{class:"ds-badge"},"末",-1),ht=Object(n["g"])("div",{class:"ds-list-header"},"出入口資訊",-1),gt={class:"ds-exit"},mt={class:"ds-exit-name"},vt={class:"ds-exit-type-group"},yt={key:0,src:ct.a},St={key:1,src:at.a},Tt={key:2,src:it.a},xt=Object(n["g"])("div",{class:"ds-list-header"},"車站設施",-1),Mt={class:"ds-service-img"},wt={class:"ds-service-name"},kt=Object(n["g"])("div",{class:"ds-list-footer"},null,-1);function Ct(t,e,c,a,r,i){return i.current?(Object(n["p"])(),Object(n["d"])("div",st,[ot,Object(n["g"])("ul",null,[(Object(n["p"])(!0),Object(n["d"])(n["a"],null,Object(n["v"])(i.current.servicetime,(function(t){return Object(n["p"])(),Object(n["d"])("li",{class:"ds-list-item ds-list-schedule",key:t.to},[Object(n["g"])("div",ut,[Object(n["g"])("div",lt,[Object(n["g"])("img",{src:t.via},null,8,["src"])]),Object(n["g"])("div",dt,[Object(n["g"])("h3",null,"往"+Object(n["y"])(t.to),1)])]),Object(n["g"])("div",ft,[Object(n["g"])("div",bt,[pt,Object(n["f"])(Object(n["y"])(t.first),1)]),Object(n["g"])("div",Ot,[jt,Object(n["f"])(Object(n["y"])(t.last),1)])])])})),128))]),ht,Object(n["g"])("ul",null,[(Object(n["p"])(!0),Object(n["d"])(n["a"],null,Object(n["v"])(i.current.exits,(function(t){return Object(n["p"])(),Object(n["d"])("li",{class:"ds-list-item ds-list-exit",key:t.num},[Object(n["g"])("div",gt,[Object(n["g"])("img",{class:"ds-exit-num",src:t.src,alt:""},null,8,["src"]),Object(n["g"])("div",mt,[Object(n["g"])("h3",null,Object(n["y"])(t.name),1),Object(n["g"])("p",null,Object(n["y"])(t.hints),1)])]),Object(n["g"])("div",vt,[t.stair?(Object(n["p"])(),Object(n["d"])("img",yt)):Object(n["e"])("",!0),t.escalator?(Object(n["p"])(),Object(n["d"])("img",St)):Object(n["e"])("",!0),t.elevator?(Object(n["p"])(),Object(n["d"])("img",Tt)):Object(n["e"])("",!0)])])})),128))]),xt,Object(n["g"])("ul",null,[(Object(n["p"])(!0),Object(n["d"])(n["a"],null,Object(n["v"])(i.current.services,(function(t){return Object(n["p"])(),Object(n["d"])("li",{class:"ds-list-item",key:t.name},[Object(n["g"])("div",Mt,[Object(n["g"])("img",{src:t.src,alt:""},null,8,["src"])]),Object(n["g"])("div",wt,[Object(n["g"])("h3",null,Object(n["y"])(t.name),1),Object(n["g"])("p",null,Object(n["y"])(t.position),1)])])})),128))]),kt])):Object(n["e"])("",!0)}var It={data:function(){return{}},mounted:function(){k.dispatch("getStationInfo")},computed:{current:function(){return k.state.stationInfo}}};c("d40c");It.render=Ct;var Dt=It,Ft=Object(n["E"])("data-v-c05505a2");Object(n["s"])("data-v-c05505a2");var Yt={class:"ds-list"};Object(n["q"])();var _t=Ft((function(t,e,c,a,r,i){return Object(n["p"])(),Object(n["d"])("div",Yt)})),Rt={mounted:function(){k.dispatch("getStationTransfer")},computed:{}};c("9498");Rt.render=_t,Rt.__scopeId="data-v-c05505a2";var qt=Rt,At=c("e89e"),Pt=c.n(At),zt=Object(n["E"])("data-v-6f15b12a");Object(n["s"])("data-v-6f15b12a");var Ht={class:"fd-container"},Et={class:"fd-header"},Bt={style:{display:"flex"}},Jt=Object(n["g"])("img",{class:"ds-indicator",src:Pt.a},null,-1),$t={class:"fd-header-orig"},Xt={class:"fd-header-dest"},Kt={key:0},Lt={class:"fd-traveltime"},Nt=Object(n["g"])("span",null,"分",-1),Gt={key:0,class:"fd-pricetable"},Ut=Object(n["g"])("p",{class:"fd-faretype"},"單程票",-1),Wt={class:"fd-fareprice"},Qt=Object(n["g"])("p",{class:"fd-faretype"},"電子票證",-1),Vt={class:"fd-fareprice"},Zt=Object(n["g"])("p",{class:"fd-faretype"},"愛心票",-1),te={class:"fd-fareprice"};Object(n["q"])();var ee=zt((function(t,e,c,a,r,i){return Object(n["p"])(),Object(n["d"])("div",Ht,[Object(n["g"])("div",Et,[Object(n["g"])("div",Bt,[Jt,Object(n["g"])("div",null,[Object(n["g"])("div",$t,Object(n["y"])(i.current.zh),1),Object(n["g"])("div",Xt,Object(n["y"])(i.dest.zh||r.placeholder),1)])]),i.fareData?(Object(n["p"])(),Object(n["d"])("div",Kt,[Object(n["g"])("div",Lt,[Object(n["f"])(Object(n["y"])(i.fareData.TravelTime),1),Nt])])):Object(n["e"])("",!0)]),i.fareData?(Object(n["p"])(),Object(n["d"])("div",Gt,[Object(n["g"])("div",null,[Ut,Object(n["g"])("h3",Wt,Object(n["y"])(i.fareData.Fares[0].Price)+"元",1)]),Object(n["g"])("div",null,[Qt,Object(n["g"])("h3",Vt,Object(n["y"])(i.fareData.Fares[4].Price)+"元",1)]),Object(n["g"])("div",null,[Zt,Object(n["g"])("h3",te,Object(n["y"])(i.fareData.Fares[1].Price)+"元",1)])])):Object(n["e"])("",!0)])})),ce={data:function(){return{placeholder:"請選擇終點站"}},computed:{current:function(){return k.state.current},dest:function(){return k.state.dest},fareData:function(){return k.state.fare[0]}}};c("d52a");ce.render=ee,ce.__scopeId="data-v-6f15b12a";var ne=ce,ae=[{path:"/",name:"Map",component:A,children:[{path:"/station/:id",name:"StationInfo",component:tt,children:[{path:"facilities",name:"StationFacilities",component:Dt},{path:"transfer",name:"StationTransfer",component:qt}]},{path:"/search",name:"FareSearch",component:ne}]}],re=Object(s["a"])({history:Object(s["b"])(),routes:ae}),ie=re,se=(c("4674"),c("260b")),oe={apiKey:"AIzaSyAh-cvnsYbIP4Oor2qj5g7FlxpJr83qWL8",authDomain:"taichungmetro-github.firebaseapp.com",projectId:"taichungmetro-github",storageBucket:"taichungmetro-github.appspot.com",messagingSenderId:"571532253123",appId:"1:571532253123:web:57b30736f2c5d13e180f76"};se["a"].initializeApp(oe),Object(n["c"])(i).use(k).use(ie).mount("#app")},"5afd":function(t,e,c){},"5ba5":function(t,e,c){},6262:function(t,e,c){"use strict";c("b512")},"7ccb":function(t,e,c){"use strict";c("3e3e")},9498:function(t,e,c){"use strict";c("5afd")},a023:function(t,e,c){},b512:function(t,e,c){},bd0f:function(t,e,c){t.exports=c.p+"img/line-HSR.4e6684b8.svg"},c5c4:function(t,e,c){t.exports=c.p+"img/fac-elevator.1c1cec4d.svg"},c95d:function(t,e,c){"use strict";c("f196")},ca69:function(t,e,c){t.exports=c.p+"img/fac-stair.e8a31540.svg"},d40c:function(t,e,c){"use strict";c("5ba5")},d52a:function(t,e,c){"use strict";c("3648")},e89e:function(t,e,c){t.exports=c.p+"img/fareinfo.fbf8a212.svg"},f196:function(t,e,c){}});
//# sourceMappingURL=app.31062493.js.map