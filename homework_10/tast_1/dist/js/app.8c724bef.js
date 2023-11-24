(function(){"use strict";var e={5606:function(e,t,n){var i=n(9242),s=n(3396);const o={class:"wrapper"};function r(e,t,n,i,r,l){const a=(0,s.up)("header-component"),c=(0,s.up)("router-view");return(0,s.wg)(),(0,s.iD)("div",o,[(0,s.Wm)(a),(0,s.Wm)(c)])}const l=e=>((0,s.dD)("data-v-6b11cb8e"),e=e(),(0,s.Cn)(),e),a={class:"header"},c={class:"header__container"},d=l((()=>(0,s._)("div",{class:"header__title"},[(0,s.Uk)("Lesson 10 | "),(0,s._)("span",null,"homework"),(0,s.Uk)(" |")],-1))),u={class:"header__menu menu"};function m(e,t,n,i,o,r){const l=(0,s.up)("router-link");return(0,s.wg)(),(0,s.iD)("div",a,[(0,s._)("div",c,[d,(0,s._)("nav",u,[(0,s.Wm)(l,{to:"/",class:"menu__item"},{default:(0,s.w5)((()=>[(0,s.Uk)("Home")])),_:1}),(0,s.Wm)(l,{to:"/about",class:"menu__item"},{default:(0,s.w5)((()=>[(0,s.Uk)("About")])),_:1})])])])}var p={name:"HeaderComponent"},f=n(89);const g=(0,f.Z)(p,[["render",m],["__scopeId","data-v-6b11cb8e"]]);var v=g,h={name:"App",components:{HeaderComponent:v}};const b=(0,f.Z)(h,[["render",r]]);var y=b,_=n(2483);const C=e=>((0,s.dD)("data-v-5ae05679"),e=e(),(0,s.Cn)(),e),D={class:"home page"},L={class:"home__container"},w=C((()=>(0,s._)("h1",{class:"home__title-page"}," App page ",-1))),k={class:"home__body"},S={class:"home__block"},B=["disabled"],O={class:"home__res-block"};function A(e,t,n,i,o,r){const l=(0,s.up)("boys-dancers"),a=(0,s.up)("girls-dancers"),c=(0,s.up)("couples-list");return(0,s.wg)(),(0,s.iD)("div",D,[(0,s._)("div",L,[w,(0,s._)("div",k,[(0,s._)("div",S,[(0,s.Wm)(l),(0,s.Wm)(a)]),(0,s._)("button",{disabled:r.isDisabled,class:"home__btn",onClick:t[0]||(t[0]=(...t)=>e.addCouple&&e.addCouple(...t))}," Add ",8,B),(0,s._)("div",O,[(0,s.Wm)(c)])])])])}var I=n(7139);const E={class:"boys-list"},N={class:"boys-list__title"},T={class:"boys-list__body"},j=["onClick"];function H(e,t,n,i,o,r){return(0,s.wg)(),(0,s.iD)("div",E,[(0,s._)("h3",N,(0,I.zw)(n.title),1),(0,s._)("ul",T,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(e.boysList,(t=>((0,s.wg)(),(0,s.iD)("li",{key:t.id,class:(0,I.C_)(["boys-list__item",{"is-selected":r.isSelected(t.id)||r.isInSelectedList(t.id)}]),onClick:n=>e.selectDancer({gender:"boys",id:t.id})},(0,I.zw)(t.name),11,j)))),128))])])}var x=n(65),G={name:"BoysDancers",props:{title:{type:String,default:"Boys"}},computed:{...(0,x.Se)(["boysList","getSelectedCoupleList","selectedBoy"])},methods:{...(0,x.nv)(["selectDancer"]),isInSelectedList(e){return this.getSelectedCoupleList.some((t=>t.boys===e))},isSelected(e){return this.selectedBoy===e}}};const P=(0,f.Z)(G,[["render",H],["__scopeId","data-v-ac634c88"]]);var W=P;const M=e=>((0,s.dD)("data-v-385ccebe"),e=e(),(0,s.Cn)(),e),z={class:"couples-list"},Z=M((()=>(0,s._)("h3",{class:"couples-list__title"},null,-1))),U={class:"couples-list__body"},F=["onClick"];function K(e,t,n,i,o,r){return(0,s.wg)(),(0,s.iD)("div",z,[Z,(0,s._)("ul",U,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(e.getNamesById,(t=>((0,s.wg)(),(0,s.iD)("li",{key:t.id,class:"couples-list__item",onClick:n=>e.removeCouple(t.id)},(0,I.zw)(t.boys)+" - "+(0,I.zw)(t.girls),9,F)))),128))])])}var J={name:"CouplesList",props:{title:{type:String,default:"Selected dance couples"}},computed:{...(0,x.Se)(["getNamesById"])},methods:{...(0,x.nv)(["removeCouple"])}};const Y=(0,f.Z)(J,[["render",K],["__scopeId","data-v-385ccebe"]]);var q=Y;const V={class:"girl-list"},Q={class:"girl-list__title"},R={class:"girl-list__body"},X=["onClick"];function $(e,t,n,i,o,r){return(0,s.wg)(),(0,s.iD)("div",V,[(0,s._)("h3",Q,(0,I.zw)(n.title),1),(0,s._)("ul",R,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(e.girlsList,(t=>((0,s.wg)(),(0,s.iD)("li",{key:t.id,class:(0,I.C_)(["girl-list__item",{"is-selected":r.isSelected(t.id)||r.isInSelectedList(t.id),"is-blocked":r.isBlocked(t.id)}]),onClick:n=>e.selectDancer({gender:"girls",id:t.id})},(0,I.zw)(t.name),11,X)))),128))])])}var ee={name:"GirlsDancers",props:{title:{type:String,default:"Girls"}},computed:{...(0,x.Se)(["girlsList","getSelectedCoupleList","selectedGirl","boysList","getBlockedList"])},methods:{...(0,x.nv)(["selectDancer"]),isInSelectedList(e){return this.getSelectedCoupleList.some((t=>t.girls===e))},isSelected(e){return this.selectedGirl===e},isBlocked(e){const t=this.boysList.length===this.getSelectedCoupleList.length,n=this.getBlockedList.includes(e);return t&&n}}};const te=(0,f.Z)(ee,[["render",$],["__scopeId","data-v-19e57f16"]]);var ne=te,ie={name:"HomeView",components:{BoysDancers:W,GirlsDancers:ne,CouplesList:q},computed:{...(0,x.Se)(["selectedBoy","selectedGirl"]),isDisabled(){return!this.selectedGirl||!this.selectedBoy}},created(){this.loadData()},methods:{...(0,x.nv)(["loadData","addCouple"])}};const se=(0,f.Z)(ie,[["render",A],["__scopeId","data-v-5ae05679"]]);var oe=se;const re=[{path:"/",name:"home",component:oe},{path:"/about",name:"about",component:()=>n.e(443).then(n.bind(n,9358))}],le=(0,_.p7)({history:(0,_.PO)("/"),routes:re});var ae=le;n(560);const ce={boys:[{id:1,name:"John"},{id:2,name:"Michael"},{id:3,name:"Christopher"},{id:4,name:"Daniel"},{id:5,name:"Matthew"},{id:6,name:"Andrew"},{id:7,name:"Ethan"},{id:8,name:"William"}],girls:[{id:1,name:"Emma"},{id:2,name:"Olivia"},{id:3,name:"Ava"},{id:4,name:"Isabella"},{id:5,name:"Sophia"},{id:6,name:"Mia"},{id:7,name:"Amelia"},{id:8,name:"Harper"},{id:9,name:"Evelyn"},{id:10,name:"Abigail"}]};function de(){const e=new Date,t=e.getTime().toString();return t}var ue=(0,x.MT)({state:{boysList:[],girlsList:[],selectedDancersList:[],selectedDancingCouple:{boys:null,girls:null}},getters:{boysList:e=>e.boysList,girlsList:e=>e.girlsList,getSelectedCoupleList:e=>e.selectedDancersList,selectedBoy:e=>e.selectedDancingCouple.boys,selectedGirl:e=>e.selectedDancingCouple.girls,getNamesById:e=>e.selectedDancersList.map((t=>({id:t.id,boys:e.boysList.find((e=>e.id===t.boys))?.name||null,girls:e.girlsList.find((e=>e.id===t.girls))?.name||null}))),getBlockedList:e=>{const t=e.selectedDancersList.map((e=>e.girls)),n=e.girlsList.map((e=>e.id));return n.filter((e=>!t.includes(e)))}},mutations:{setData(e,t){e.boysList=t.boys,e.girlsList=t.girls},setDancerToSelectedList(e,{gender:t,dancerId:n}){e.selectedDancingCouple[t]=n},addCouple(e){const t={id:de(),boys:e.selectedDancingCouple.boys,girls:e.selectedDancingCouple.girls};e.selectedDancersList.push(JSON.parse(JSON.stringify(t))),e.selectedDancingCouple.boys=null,e.selectedDancingCouple.girls=null},removeCouple(e,t){const n=e.selectedDancersList.findIndex((e=>e.id===t));-1!==n&&e.selectedDancersList.splice(n,1)}},actions:{loadData({commit:e}){e("setData",ce)},selectDancer({commit:e},{gender:t,id:n}){e("setDancerToSelectedList",{gender:t,dancerId:n})},addCouple({commit:e}){e("addCouple")},removeCouple({commit:e},t){e("removeCouple",t)}}});(0,i.ri)(y).use(ue).use(ae).mount("#app")}},t={};function n(i){var s=t[i];if(void 0!==s)return s.exports;var o=t[i]={exports:{}};return e[i].call(o.exports,o,o.exports,n),o.exports}n.m=e,function(){var e=[];n.O=function(t,i,s,o){if(!i){var r=1/0;for(d=0;d<e.length;d++){i=e[d][0],s=e[d][1],o=e[d][2];for(var l=!0,a=0;a<i.length;a++)(!1&o||r>=o)&&Object.keys(n.O).every((function(e){return n.O[e](i[a])}))?i.splice(a--,1):(l=!1,o<r&&(r=o));if(l){e.splice(d--,1);var c=s();void 0!==c&&(t=c)}}return t}o=o||0;for(var d=e.length;d>0&&e[d-1][2]>o;d--)e[d]=e[d-1];e[d]=[i,s,o]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var i in t)n.o(t,i)&&!n.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,i){return n.f[i](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/about.b1b469c4.js"}}(),function(){n.miniCssF=function(e){return"css/about.720f839f.css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="tast_1:";n.l=function(i,s,o,r){if(e[i])e[i].push(s);else{var l,a;if(void 0!==o)for(var c=document.getElementsByTagName("script"),d=0;d<c.length;d++){var u=c[d];if(u.getAttribute("src")==i||u.getAttribute("data-webpack")==t+o){l=u;break}}l||(a=!0,l=document.createElement("script"),l.charset="utf-8",l.timeout=120,n.nc&&l.setAttribute("nonce",n.nc),l.setAttribute("data-webpack",t+o),l.src=i),e[i]=[s];var m=function(t,n){l.onerror=l.onload=null,clearTimeout(p);var s=e[i];if(delete e[i],l.parentNode&&l.parentNode.removeChild(l),s&&s.forEach((function(e){return e(n)})),t)return t(n)},p=setTimeout(m.bind(null,void 0,{type:"timeout",target:l}),12e4);l.onerror=m.bind(null,l.onerror),l.onload=m.bind(null,l.onload),a&&document.head.appendChild(l)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/"}(),function(){if("undefined"!==typeof document){var e=function(e,t,n,i,s){var o=document.createElement("link");o.rel="stylesheet",o.type="text/css";var r=function(n){if(o.onerror=o.onload=null,"load"===n.type)i();else{var r=n&&("load"===n.type?"missing":n.type),l=n&&n.target&&n.target.href||t,a=new Error("Loading CSS chunk "+e+" failed.\n("+l+")");a.code="CSS_CHUNK_LOAD_FAILED",a.type=r,a.request=l,o.parentNode&&o.parentNode.removeChild(o),s(a)}};return o.onerror=o.onload=r,o.href=t,n?n.parentNode.insertBefore(o,n.nextSibling):document.head.appendChild(o),o},t=function(e,t){for(var n=document.getElementsByTagName("link"),i=0;i<n.length;i++){var s=n[i],o=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(o===e||o===t))return s}var r=document.getElementsByTagName("style");for(i=0;i<r.length;i++){s=r[i],o=s.getAttribute("data-href");if(o===e||o===t)return s}},i=function(i){return new Promise((function(s,o){var r=n.miniCssF(i),l=n.p+r;if(t(r,l))return s();e(i,l,null,s,o)}))},s={143:0};n.f.miniCss=function(e,t){var n={443:1};s[e]?t.push(s[e]):0!==s[e]&&n[e]&&t.push(s[e]=i(e).then((function(){s[e]=0}),(function(t){throw delete s[e],t})))}}}(),function(){var e={143:0};n.f.j=function(t,i){var s=n.o(e,t)?e[t]:void 0;if(0!==s)if(s)i.push(s[2]);else{var o=new Promise((function(n,i){s=e[t]=[n,i]}));i.push(s[2]=o);var r=n.p+n.u(t),l=new Error,a=function(i){if(n.o(e,t)&&(s=e[t],0!==s&&(e[t]=void 0),s)){var o=i&&("load"===i.type?"missing":i.type),r=i&&i.target&&i.target.src;l.message="Loading chunk "+t+" failed.\n("+o+": "+r+")",l.name="ChunkLoadError",l.type=o,l.request=r,s[1](l)}};n.l(r,a,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,i){var s,o,r=i[0],l=i[1],a=i[2],c=0;if(r.some((function(t){return 0!==e[t]}))){for(s in l)n.o(l,s)&&(n.m[s]=l[s]);if(a)var d=a(n)}for(t&&t(i);c<r.length;c++)o=r[c],n.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return n.O(d)},i=self["webpackChunktast_1"]=self["webpackChunktast_1"]||[];i.forEach(t.bind(null,0)),i.push=t.bind(null,i.push.bind(i))}();var i=n.O(void 0,[998],(function(){return n(5606)}));i=n.O(i)})();
//# sourceMappingURL=app.8c724bef.js.map