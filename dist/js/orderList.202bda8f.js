"use strict";(self["webpackChunkbarry"]=self["webpackChunkbarry"]||[]).push([[844],{2382:function(t,r,e){e.d(r,{Z:function(){return _}});var o=e(6252),n=e(3577);const c={class:"docker"},s={class:"docker__title"};function i(t,r,e,i,a,d){const l=(0,o.up)("router-link");return(0,o.wg)(),(0,o.iD)("div",c,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(a.dockerList,((t,r)=>((0,o.wg)(),(0,o.iD)("span",{key:t.icon,class:(0,n.C_)({docker__item:!0,"docker__item--active":r===e.currentIndex})},[(0,o.Wm)(l,{to:t.to},{default:(0,o.w5)((()=>[(0,o._)("div",{class:(0,n.C_)(t.icon)},null,2),(0,o._)("div",s,(0,n.zw)(t.text),1)])),_:2},1032,["to"])],2)))),128))])}var a={name:"AppDocker",props:["currentIndex"],data(){const t=[{icon:"icofont-home",text:"首頁",to:{name:"home"}},{icon:"icofont-shopping-cart",text:"購物車",to:{name:"CartList"}},{icon:"icofont-file-text",text:"訂單",to:{name:"orderList"}},{icon:"icofont-user",text:"我的帳戶",to:{name:"home"}}];return{dockerList:t}}},d=e(3744);const l=(0,d.Z)(a,[["render",i]]);var _=l},6028:function(t,r,e){e.r(r),e.d(r,{default:function(){return b}});var o=e(6252),n=e(3577);const c=t=>((0,o.dD)("data-v-f86c68f8"),t=t(),(0,o.Cn)(),t),s={class:"wrapper"},i=c((()=>(0,o._)("div",{class:"title"},"我的訂單",-1))),a={class:"orders"},d={class:"order__title"},l={class:"order__status"},_={class:"order__content"},u={class:"order__content__imgs"},p=["src"],f={class:"order__info"},v={class:"order__info__price"},m={class:"order__info__count"};function k(t,r,e,c,k,w){const g=(0,o.up)("Docker");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o._)("div",s,[i,(0,o._)("div",a,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(c.list,((t,r)=>((0,o.wg)(),(0,o.iD)("div",{class:"order",key:r},[(0,o._)("div",d,[(0,o.Uk)((0,n.zw)(t.shopName)+" ",1),(0,o._)("span",l,(0,n.zw)(t.isCanceled?"已取消":"已下單"),1)]),(0,o._)("div",_,[(0,o._)("div",u,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(t.products,((t,r)=>((0,o.wg)(),(0,o.iD)(o.HY,{key:r},[r<=3?((0,o.wg)(),(0,o.iD)("img",{key:0,class:"order__content__img",src:t.product.img},null,8,p)):(0,o.kq)("",!0)],64)))),128))]),(0,o._)("div",f,[(0,o._)("div",v,"¥ "+(0,n.zw)(t.totalPrice),1),(0,o._)("div",m,"共 "+(0,n.zw)(t.totalNumber)+" 件",1)])])])))),128))])]),(0,o.Wm)(g,{currentIndex:2})],64)}var w=e(2382),g=e(2262),D=e(4471);const h=()=>{const t=(0,g.qj)({list:[]}),r=async()=>{const r=await(0,D.U)("/api/order");if(0===r?.errno&&r?.data?.length){const e=r.data;e.forEach((t=>{const r=t.products||[];let e=0,o=0;r.forEach((t=>{o+=t?.orderSales||0,e+=t?.product?.price*t?.orderSales||0})),t.totalPrice=e,t.totalNumber=o})),t.list=r.data}};r();const{list:e}=(0,g.BK)(t);return{list:e}};var x={name:"orderList",components:{Docker:w.Z},setup(){const{list:t}=h();return{list:t}}},y=e(3744);const C=(0,y.Z)(x,[["render",k],["__scopeId","data-v-f86c68f8"]]);var b=C}}]);
//# sourceMappingURL=orderList.202bda8f.js.map