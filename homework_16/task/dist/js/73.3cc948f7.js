"use strict";(self["webpackChunktask"]=self["webpackChunktask"]||[]).push([[73],{5073:function(s,e,t){t.r(e),t.d(e,{default:function(){return O}});var i=t(3396);const a=s=>((0,i.dD)("data-v-b7c0a8be"),s=s(),(0,i.Cn)(),s),u={class:"busses top-page-pad"},n={class:"busses__wrapper"},d=a((()=>(0,i._)("h1",{class:"busses__title"},"Наші автобуси",-1))),o=a((()=>(0,i._)("div",{class:"busses__sub-titles"},[(0,i._)("span",null,"Номер"),(0,i._)("span",null,"Кільуість місць")],-1))),l={key:0,class:"busses__loader"},r={key:1,class:"busses__error"},b=a((()=>(0,i._)("p",null,"Помилка завантаження...",-1))),c=[b],m={key:2,class:"busses__list"},_={class:"busses__buttons"},p={class:"busses__editor-wrapper"};function v(s,e,t,a,b,v){const g=(0,i.up)("v-progress-circular"),h=(0,i.up)("busses-list-item"),I=(0,i.up)("router-view"),w=(0,i.up)("main-master-page");return(0,i.wg)(),(0,i.j4)(w,null,{default:(0,i.w5)((()=>[(0,i._)("div",u,[(0,i._)("div",n,[d,o,s.isLoading?((0,i.wg)(),(0,i.iD)("div",l,[(0,i.Wm)(g,{indeterminate:""})])):s.hasError?((0,i.wg)(),(0,i.iD)("div",r,c)):((0,i.wg)(),(0,i.iD)("ul",m,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(s.getItemsList,(s=>((0,i.wg)(),(0,i.iD)("li",{key:s.id,class:"busses__item item-busses-list"},[(0,i.Wm)(h,{"bus-item":s},null,8,["bus-item"])])))),128))])),(0,i._)("div",_,[(0,i._)("button",{class:"_btn",onClick:e[0]||(e[0]=(...s)=>v.onAddBusToList&&v.onAddBusToList(...s))},"Додати автобус")])]),(0,i._)("div",p,[(0,i.Wm)(I)])])])),_:1})}t(560);var g=t(1126),h=t(65),I=t(7139);const w={class:"item-busses-list"},B={class:"item-busses-list__registration"},L={class:"item-busses-list__seats-count"},k=["disabled"],f=["disabled"];function D(s,e,t,a,u,n){const d=(0,i.up)("font-awesome-icon");return(0,i.wg)(),(0,i.iD)("div",w,[(0,i.Wm)(d,{icon:["fas","bus"]}),(0,i._)("div",B,(0,I.zw)(t.busItem.registration),1),(0,i._)("div",L,(0,I.zw)(t.busItem.seatsCount),1),(0,i._)("button",{disabled:n.isOnEditorPage,class:"item-busses-list__button btn-edit",onClick:e[0]||(e[0]=(...s)=>n.onEditBus&&n.onEditBus(...s))},[(0,i.Wm)(d,{icon:["fas","pen"]})],8,k),(0,i._)("button",{disabled:n.isOnEditorPage,class:"item-busses-list__button btn-del",onClick:e[1]||(e[1]=(...s)=>n.onDeleteBus&&n.onDeleteBus(...s))},[(0,i.Wm)(d,{icon:["far","trash-can"]})],8,f)])}var E={name:"BussesListItem",props:{busItem:{type:Object,required:!0}},computed:{isOnEditorPage(){return"add"===this.$route.params.title}},methods:{...(0,h.nv)("bussesList",["deleteItem"]),...(0,h.nv)("appointments",["deleteAppointmentByItemId"]),onEditBus(){this.$router.push({name:"bus-editor",params:{title:"bus-edit",busId:this.busItem.id}})},onDeleteBus(){this.deleteItem(this.busItem.id),this.deleteAppointmentByItemId(this.busItem.id)}}},y=t(89);const C=(0,y.Z)(E,[["render",D],["__scopeId","data-v-aad85bee"]]);var W=C,A={name:"BussesPage",components:{MainMasterPage:g.Z,BussesListItem:W},computed:{...(0,h.Se)("bussesList",["getItemsList","isLoading","hasError"])},created(){this.loadList()},methods:{...(0,h.nv)("bussesList",["loadList"]),onAddBusToList(){this.$router.push({name:"bus-editor",params:{title:"add"}})}}};const P=(0,y.Z)(A,[["render",v],["__scopeId","data-v-b7c0a8be"]]);var O=P}}]);
//# sourceMappingURL=73.3cc948f7.js.map