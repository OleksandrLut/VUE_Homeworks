"use strict";(self["webpackChunktask_1"]=self["webpackChunktask_1"]||[]).push([[841],{4505:function(t,e,s){s.r(e),s.d(e,{default:function(){return f}});var u=s(3102),i=s(9047),a=s(7193);const d=t=>((0,u.dD)("data-v-3a100a4d"),t=t(),(0,u.Cn)(),t),n={class:"bus-editor page"},r={class:"bus-editor__container"},o={class:"bus-editor__wrap"},c={class:"bus-editor__title"},b={class:"bus-editor__body"},l={class:"bus-editor__item"},_=d((()=>(0,u._)("label",{for:"reg-num"},"Registration",-1))),p={class:"bus-editor__item"},h=d((()=>(0,u._)("label",{for:"count"},"Seats count",-1)));function v(t,e,s,d,v,B){return(0,u.wg)(),(0,u.iD)("div",n,[(0,u._)("div",r,[(0,u._)("div",o,[(0,u._)("h2",c,(0,i.zw)(s.title),1),(0,u._)("ul",b,[(0,u._)("li",l,[_,(0,u.wy)((0,u._)("input",{"onUpdate:modelValue":e[0]||(e[0]=t=>v.busObject.registration=t),type:"text",id:"reg-num"},null,512),[[a.nr,v.busObject.registration,void 0,{lazy:!0}]])]),(0,u._)("li",p,[h,(0,u.wy)((0,u._)("input",{"onUpdate:modelValue":e[1]||(e[1]=t=>v.busObject.seatsCount=t),type:"number",id:"count"},null,512),[[a.nr,v.busObject.seatsCount,void 0,{lazy:!0}]])])]),(0,u._)("button",{class:"btn",onClick:e[2]||(e[2]=(...t)=>B.onAction&&B.onAction(...t))},(0,i.zw)(B.buttonTitle),1)])])])}s(1506);var B=s(5522),m={name:"BusEditor",props:{title:{type:String,default:"Bus:"}},data(){return{busObject:{}}},computed:{...(0,B.Se)("busses",["getBusById"]),receivedBusId(){return this.$route.params.busId},buttonTitle(){return this.receivedBusId?"Save":"Create"}},created(){this.receivedBusId&&(this.busObject={...this.getBusById(this.receivedBusId)})},methods:{...(0,B.nv)("busses",["addBus","updateBus"]),onAction(){this.receivedBusId?this.updateBus(this.busObject):this.addBus(this.busObject),this.$router.push({name:"busses"})}}},g=s(1144);const y=(0,g.Z)(m,[["render",v],["__scopeId","data-v-3a100a4d"]]);var f=y}}]);
//# sourceMappingURL=editor_bus.8d3fd279.js.map