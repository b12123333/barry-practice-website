"use strict";(self["webpackChunkbarry"]=self["webpackChunkbarry"]||[]).push([[446],{561:function(t,c,o){o.d(c,{r:function(){return r}});var e=o(3907),n=o(6252);const r=t=>{const c=(0,e.oR)(),o=c.state.cartList,r=(t,o,e,n)=>{c.commit("changeCartItemInfo",{shopId:t,productId:o,productInfo:e,num:n})},s=(0,n.Fl)((()=>{const c=o[t]?.productList||{},e={};for(const t in c){const o=c[t];o.count>0&&(e[t]=o)}return e})),i=(0,n.Fl)((()=>{const c=o[t]?.shopName||"";return c})),a=(0,n.Fl)((()=>{const c=o[t]?.productList,e={total:0,price:0,allChecked:!0};if(c)for(const t in c){const o=c[t];e.total+=o.count,o.check&&(e.price+=o.count*o.price),o.count>0&&!o.check&&(e.allChecked=!1)}return e.price=e.price.toFixed(2),e}));return{shopName:i,cartList:o,changeCartItemInfo:r,productList:s,calculations:a}}},1684:function(t,c,o){o.r(c),o.d(c,{default:function(){return b}});var e=o(6252);const n=t=>((0,e.dD)("data-v-777d113e"),t=t(),(0,e.Cn)(),t),r=n((()=>(0,e._)("div",{class:"cart"},"我的全部購物車",-1))),s={class:"wrapper"};function i(t,c,o,n,i,a){const d=(0,e.up)("Content"),u=(0,e.up)("Docker");return(0,e.wg)(),(0,e.iD)(e.HY,null,[r,(0,e._)("div",s,[(0,e.Wm)(d,{shopId:1}),(0,e.Wm)(d,{shopId:2})]),(0,e.Wm)(u,{currentIndex:1})],64)}var a=o(2382),d=o(3577);const u=t=>((0,e.dD)("data-v-4fc9d767"),t=t(),(0,e.Cn)(),t),p={key:0,class:"products"},_={class:"products__title"},l={class:"products__wrapper"},m={class:"products__list"},v=["src"],f={class:"product__item__detail"},h={class:"product__item__title"},k={class:"product__item__price"},w={class:"product__item__yen"},g={class:"product__item__total"},I=u((()=>(0,e._)("span",{class:"product__item__yen"},"¥",-1)));function C(t,c,o,n,r,s){return n.titleShow?((0,e.wg)(),(0,e.iD)("div",p,[(0,e._)("div",_,(0,d.zw)(n.shopName),1),(0,e._)("div",l,[(0,e._)("div",m,[((0,e.wg)(!0),(0,e.iD)(e.HY,null,(0,e.Ko)(n.productList,(t=>((0,e.wg)(),(0,e.iD)("div",{key:t._id,class:"product__item"},[(0,e._)("img",{class:"product__item__img",src:t.imgUrl},null,8,v),(0,e._)("div",f,[(0,e._)("h4",h,(0,d.zw)(t.name),1),(0,e._)("p",k,[(0,e._)("span",w,"¥"+(0,d.zw)(t.price)+" x "+(0,d.zw)(t.count),1),(0,e._)("span",g,[I,(0,e.Uk)(" "+(0,d.zw)((t.price*t.count).toFixed(2)),1)])])])])))),128))])])])):(0,e.kq)("",!0)}var L=o(561),x=o(2262),D={name:"cartListcontent",props:["shopId"],setup(t){const{shopName:c,productList:o}=(0,L.r)(t.shopId);console.log("{}"===JSON.stringify(o.value));const e=(0,x.iH)(!1);return"{}"===JSON.stringify(o.value)?e.value=!1:e.value=!0,{shopName:c,productList:o,titleShow:e}}},y=o(3744);const N=(0,y.Z)(D,[["render",C],["__scopeId","data-v-4fc9d767"]]);var z=N,F={name:"CartList",components:{Docker:a.Z,Content:z}};const Z=(0,y.Z)(F,[["render",i],["__scopeId","data-v-777d113e"]]);var b=Z},2382:function(t,c,o){o.d(c,{Z:function(){return p}});var e=o(6252),n=o(3577);const r={class:"docker"},s={class:"docker__title"};function i(t,c,o,i,a,d){const u=(0,e.up)("router-link");return(0,e.wg)(),(0,e.iD)("div",r,[((0,e.wg)(!0),(0,e.iD)(e.HY,null,(0,e.Ko)(a.dockerList,((t,c)=>((0,e.wg)(),(0,e.iD)("span",{key:t.icon,class:(0,n.C_)({docker__item:!0,"docker__item--active":c===o.currentIndex})},[(0,e.Wm)(u,{to:t.to},{default:(0,e.w5)((()=>[(0,e._)("div",{class:(0,n.C_)(t.icon)},null,2),(0,e._)("div",s,(0,n.zw)(t.text),1)])),_:2},1032,["to"])],2)))),128))])}var a={name:"AppDocker",props:["currentIndex"],data(){const t=[{icon:"icofont-home",text:"首頁",to:{name:"home"}},{icon:"icofont-shopping-cart",text:"購物車",to:{name:"CartList"}},{icon:"icofont-file-text",text:"訂單",to:{name:"orderList"}},{icon:"icofont-user",text:"我的帳戶",to:{name:"home"}}];return{dockerList:t}}},d=o(3744);const u=(0,d.Z)(a,[["render",i]]);var p=u}}]);
//# sourceMappingURL=CartList.ae626aa0.js.map