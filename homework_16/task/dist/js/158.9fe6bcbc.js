"use strict";(self["webpackChunktask"]=self["webpackChunktask"]||[]).push([[158],{5158:function(t,s,e){e.r(s),e.d(s,{default:function(){return B}});var i=e(3396),u=e(7139),d=e(9242);const n=t=>((0,i.dD)("data-v-cebc6c84"),t=t(),(0,i.Cn)(),t),r={class:"editor-bus__body"},o={class:"editor-bus__title"},a={class:"editor-bus__items"},b={class:"editor-bus__item"},l=n((()=>(0,i._)("label",{for:"bus-registration-edit"},"Реєстраційний номер:",-1))),c={class:"editor-bus__item"},_=n((()=>(0,i._)("label",{for:"bus-seats-edit"},"Кількість посадочних місць:",-1))),h={class:"editor-bus__buttons"},m=["disabled"];function p(t,s,e,n,p,C){return(0,i.wg)(),(0,i.iD)("div",r,[(0,i._)("h3",o,(0,u.zw)(C.editorTitle),1),(0,i._)("div",a,[(0,i._)("div",b,[l,(0,i.wy)((0,i._)("input",{id:"bus-registration-edit","onUpdate:modelValue":s[0]||(s[0]=t=>p.bus.registration=t),type:"text",class:"_inp _inp-large"},null,512),[[d.nr,p.bus.registration]])]),(0,i._)("div",c,[_,(0,i.wy)((0,i._)("input",{id:"bus-seats-edit","onUpdate:modelValue":s[1]||(s[1]=t=>p.bus.seatsCount=t),type:"number",class:"_inp _inp-large",min:"1",max:"100"},null,512),[[d.nr,p.bus.seatsCount]])])]),(0,i._)("div",h,[(0,i._)("button",{class:"_btn",disabled:C.isDisabled,onClick:s[2]||(s[2]=(...t)=>C.onBusAction&&C.onBusAction(...t))},(0,u.zw)(C.buttonEditBusTitle),9,m),(0,i._)("button",{class:"_btn",onClick:s[3]||(s[3]=(...t)=>C.onClearBusEditorItems&&C.onClearBusEditorItems(...t))},"Очистити "),(0,i._)("button",{class:"_btn",onClick:s[4]||(s[4]=(...t)=>C.onCloseEditor&&C.onCloseEditor(...t))},"Закрити ")])])}e(560);var C=e(65),I={name:"EditorBusses",props:{title:{type:String,required:!0},busId:{type:[String,Number],required:!1}},data(){return{bus:{}}},computed:{...(0,C.Se)("bussesList",["getItemById"]),isAdd(){return"add"===this.title},editorTitle(){return this.isAdd?"Додати автобус":"Редагувати автобус"},buttonEditBusTitle(){return this.isAdd?"Додати":"Редагувати"},isDisabled(){return this.isAdd&&(!this.bus.registration||!this.bus.seatsCount)}},created(){this.busId&&(this.bus={...this.getItemById(this.busId)})},methods:{...(0,C.nv)("bussesList",["addItem","updateItem"]),onBusAction(){this.isAdd?(this.addItem(this.bus),this.bus={}):(this.updateItem({itemId:this.busId,data:{registration:this.bus.registration,seatsCount:this.bus.seatsCount}}),this.$router.push({name:"busses"}))},onCloseEditor(){this.$router.push({name:"busses"})},onClearBusEditorItems(){this.bus={}}}},g=e(89);const v=(0,g.Z)(I,[["render",p],["__scopeId","data-v-cebc6c84"]]);var B=v}}]);
//# sourceMappingURL=158.9fe6bcbc.js.map