"use strict";(self["webpackChunkbarry"]=self["webpackChunkbarry"]||[]).push([[885],{3525:function(e,t,n){n.d(t,{Z:function(){return v}});var i=n(6252),s=n(3577);const c={class:"shop"},o=["src"],r={class:"shop__content__title"},l={class:"shop__content__tags"},a={class:"shop__content__tag"},d={class:"shop__content__tag"},p={class:"shop__content__tag"},m={class:"shop__content__hightlight"};function _(e,t,n,_,u,g){return(0,i.wg)(),(0,i.iD)("div",c,[(0,i._)("img",{class:"shop__img",src:n.item.imgUrl},null,8,o),(0,i._)("div",{class:(0,s.C_)({shop__content:!0,"shop__content--bordered":!n.hideBorder})},[(0,i._)("div",r,(0,s.zw)(n.item.name),1),(0,i._)("div",l,[(0,i._)("span",a," 月售: "+(0,s.zw)(n.item.sales),1),(0,i._)("span",d," 起送: "+(0,s.zw)(n.item.expressLimit),1),(0,i._)("span",p," 基礎運費: "+(0,s.zw)(n.item.expressPrice),1)]),(0,i._)("div",m,(0,s.zw)(n.item.slogan),1)],2)])}var u={name:"shopinfo",props:["item","hideBorder"]},g=n(3744);const w=(0,g.Z)(u,[["render",_],["__scopeId","data-v-5c9b7876"]]);var v=w},2382:function(e,t,n){n.d(t,{Z:function(){return p}});var i=n(6252),s=n(3577);const c={class:"docker"},o={class:"docker__title"};function r(e,t,n,r,l,a){const d=(0,i.up)("router-link");return(0,i.wg)(),(0,i.iD)("div",c,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(l.dockerList,((e,t)=>((0,i.wg)(),(0,i.iD)("span",{key:e.icon,class:(0,s.C_)({docker__item:!0,"docker__item--active":t===n.currentIndex})},[(0,i.Wm)(d,{to:e.to},{default:(0,i.w5)((()=>[(0,i._)("div",{class:(0,s.C_)(e.icon)},null,2),(0,i._)("div",o,(0,s.zw)(e.text),1)])),_:2},1032,["to"])],2)))),128))])}var l={name:"AppDocker",props:["currentIndex"],data(){const e=[{icon:"icofont-home",text:"首頁",to:{name:"home"}},{icon:"icofont-shopping-cart",text:"購物車",to:{name:"CartList"}},{icon:"icofont-file-text",text:"訂單",to:{name:"orderList"}},{icon:"icofont-user",text:"我的帳戶",to:{name:"home"}}];return{dockerList:e}}},a=n(3744);const d=(0,a.Z)(l,[["render",r]]);var p=d},3961:function(e,t,n){n.r(t),n.d(t,{default:function(){return H}});var i=n(6252);const s={class:"wrapper"};function c(e,t,n,c,o,r){const l=(0,i.up)("StaticPart"),a=(0,i.up)("Near"),d=(0,i.up)("Docker");return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i._)("div",s,[(0,i.Wm)(l),(0,i.Wm)(a)]),(0,i.Wm)(d,{currentIndex:0})],64)}var o=n(3577);const r=(0,i.uE)('<div class="position"><i class="icofont-location-pin"></i> 北京理工大學國防科技園2號樓10層 <i class="icofont-bell-alt"></i></div><div><i class="icofont-search"></i><input id="search" type="text" placeholder="山姆會員商店優惠商品"></div><div class="banner"><img class="banner__image" src="http://www.dell-lee.com/imgs/vue3/banner.jpg"></div>',3),l={class:"icons"},a=["src"],d={class:"icons__item__desc"},p=(0,i._)("div",{class:"gap"},null,-1);function m(e,t,n,s,c,m){return(0,i.wg)(),(0,i.iD)(i.HY,null,[r,(0,i._)("div",l,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(c.iconList,(e=>((0,i.wg)(),(0,i.iD)("div",{class:"icons__item",key:e.index},[(0,i._)("img",{class:"icons__item__img",src:e.imgUrl},null,8,a),(0,i._)("p",d,(0,o.zw)(e.desc),1)])))),128))]),p],64)}var _={name:"StaticPart",data(){const e=[{id:1,imgUrl:"http://www.dell-lee.com/imgs/vue3/超市.png",desc:"超市便利"},{id:2,imgUrl:"http://www.dell-lee.com/imgs/vue3/菜市场.png",desc:"菜市場"},{id:3,imgUrl:"http://www.dell-lee.com/imgs/vue3/水果店.png",desc:"水果店"},{id:4,imgUrl:"http://www.dell-lee.com/imgs/vue3/鲜花.png",desc:"鮮花綠植"},{id:5,imgUrl:"http://www.dell-lee.com/imgs/vue3/医药健康.png",desc:"醫藥健康"},{id:6,imgUrl:"http://www.dell-lee.com/imgs/vue3/家居.png",desc:"家居時尚"},{id:7,imgUrl:"http://www.dell-lee.com/imgs/vue3/蛋糕.png",desc:"烘焙蛋糕"},{id:8,imgUrl:"http://www.dell-lee.com/imgs/vue3/签到.png",desc:"簽到"},{id:9,imgUrl:"http://www.dell-lee.com/imgs/vue3/大牌免运.png",desc:"免運"},{id:10,imgUrl:"http://www.dell-lee.com/imgs/vue3/红包.png",desc:"紅包套餐"}];return{iconList:e}}},u=n(3744);const g=(0,u.Z)(_,[["render",m]]);var w=g;const v={class:"near"},h=(0,i._)("div",{class:"near__title"},[(0,i._)("h3",null,"附近店鋪")],-1);function f(e,t,n,s,c,o){const r=(0,i.up)("shopinfo"),l=(0,i.up)("router-link");return(0,i.wg)(),(0,i.iD)("div",v,[h,((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(s.nearList,(e=>((0,i.wg)(),(0,i.j4)(l,{to:`/shop/${e._id}`,key:e._id},{default:(0,i.w5)((()=>[(0,i.Wm)(r,{item:e},null,8,["item"])])),_:2},1032,["to"])))),128))])}var k=n(2262),x=n(4471),D=n(3525);const L=()=>{const e=(0,k.iH)([]),t=async()=>{const t=await(0,x.U)("/api/shop/hot-list");0===t.errno&&t.data.length&&(e.value=t.data)};return{nearList:e,getNearList:t}};var U={name:"AppNear",components:{shopinfo:D.Z},setup(){const{nearList:e,getNearList:t}=L();return t(),{nearList:e}}};const b=(0,u.Z)(U,[["render",f]]);var Z=b,y=n(2382),z={name:"App-home",components:{StaticPart:w,Near:Z,Docker:y.Z}};const C=(0,u.Z)(z,[["render",c]]);var H=C}}]);
//# sourceMappingURL=home_1.462b9c9b.js.map