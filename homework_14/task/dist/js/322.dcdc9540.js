"use strict";(self["webpackChunktask"]=self["webpackChunktask"]||[]).push([[322],{5089:function(e,t,a){a.d(t,{Z:function(){return g}});var r=a(3102),c=a(9047);const n=e=>((0,r.dD)("data-v-1286900e"),e=e(),(0,r.Cn)(),e),i={class:"item-card"},s={class:"item-card__image"},l=["src"],d={class:"item-card__title"},o={class:"item-card__info"},u=n((()=>(0,r._)("div",{class:"item-card__button"},[(0,r._)("button",{class:"btn"},"Купити")],-1)));function p(e,t,a,n,p,m){return(0,r.wg)(),(0,r.iD)("div",i,[(0,r._)("div",s,[(0,r._)("img",{src:a.imageSrc,alt:"image"},null,8,l)]),(0,r._)("h4",d,(0,c.zw)(a.cardTitle),1),(0,r._)("div",o,[(0,r.WI)(e.$slots,"default",{},(()=>[(0,r.Uk)((0,c.zw)(a.cardPrice)+" грн ",1)]),!0)]),u])}var m={name:"ItemCard",props:{imageSrc:{type:String,required:!0},cardTitle:{type:String,required:!0},cardPrice:{type:Number,default:0}}},_=a(1144);const v=(0,_.Z)(m,[["render",p],["__scopeId","data-v-1286900e"]]);var g=v},8322:function(e,t,a){a.r(t),a.d(t,{default:function(){return I}});var r=a(3102);const c={class:"products-page"},n={class:"products-page__container"};function i(e,t,a,i,s,l){const d=(0,r.up)("products-gallery"),o=(0,r.up)("page-component"),u=(0,r.up)("main-wrapper-masterpage");return(0,r.wg)(),(0,r.j4)(u,null,{default:(0,r.w5)((()=>[(0,r._)("div",c,[(0,r._)("div",n,[(0,r.Wm)(o,null,{"page-title":(0,r.w5)((()=>[(0,r.Uk)(" Оберіть продукти ")])),main:(0,r.w5)((()=>[(0,r.Wm)(d)])),_:1})])])])),_:1})}var s=a(4421),l=a(9843),d=a(7193);const o=e=>((0,r.dD)("data-v-04120176"),e=e(),(0,r.Cn)(),e),u={class:"products-gallery"},p={class:"products-gallery__header"},m=o((()=>(0,r._)("span",null,"🔍",-1))),_={class:"products-gallery__body"};function v(e,t,a,c,n,i){const s=(0,r.up)("search-component"),l=(0,r.up)("item-card");return(0,r.wg)(),(0,r.iD)("div",u,[(0,r._)("div",p,[(0,r._)("div",null,[(0,r._)("button",{class:"btn",onClick:t[0]||(t[0]=(...e)=>i.onSearchButtonClick&&i.onSearchButtonClick(...e))},[(0,r.Uk)("Пошук "),m]),(0,r.wy)((0,r.Wm)(s,null,null,512),[[d.F8,n.isVisivle]])]),(0,r._)("button",{onClick:t[1]||(t[1]=(...e)=>i.onAddClick&&i.onAddClick(...e)),class:"btn"},"Додати товар")]),(0,r._)("div",_,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(e.getFilteredList,(e=>((0,r.wg)(),(0,r.iD)("div",{key:e.id},[(0,r.Wm)(l,{imageSrc:e.imgSrc,cardTitle:e.title,cardPrice:e.price},null,8,["imageSrc","cardTitle","cardPrice"])])))),128))])])}a(1506);var g=a(5522),h=a(5089);const k={class:"search"};function S(e,t,a,c,n,i){return(0,r.wg)(),(0,r.iD)("div",k,[(0,r.wy)((0,r._)("input",{type:"text","onUpdate:modelValue":t[0]||(t[0]=e=>i.searchVal=e)},null,512),[[d.nr,i.searchVal]])])}var w={name:"SearchComponent",computed:{...(0,g.Se)(["getSearchValue"]),searchVal:{get(){return this.getSearchValue},set(e){this.updateSearchVal(e)}}},methods:{...(0,g.nv)(["updateSearchVal"])}},C=a(1144);const f=(0,C.Z)(w,[["render",S],["__scopeId","data-v-2c0eb956"]]);var y=f,V={name:"ProductsGallery",components:{ItemCard:h.Z,SearchComponent:y},data(){return{isVisivle:!1}},computed:{...(0,g.Se)(["getFilteredList"])},created(){this.loadProducts()},methods:{...(0,g.nv)(["loadProducts"]),onSearchButtonClick(){this.isVisivle=!this.isVisivle},onAddClick(){this.$router.push({name:"editor"})}}};const b=(0,C.Z)(V,[["render",v],["__scopeId","data-v-04120176"]]);var P=b,Z={name:"ProductsView",components:{MainWrapperMasterpage:s.Z,PageComponent:l.Z,ProductsGallery:P}};const D=(0,C.Z)(Z,[["render",i]]);var I=D}}]);
//# sourceMappingURL=322.dcdc9540.js.map