"use strict";(self["webpackChunktask"]=self["webpackChunktask"]||[]).push([[869],{5869:function(e,s,t){t.r(s),t.d(s,{default:function(){return k}});var l=t(3396),c=t(9242),n=t(7139);const a=e=>((0,l.dD)("data-v-1201a5da"),e=e(),(0,l.Cn)(),e),u=a((()=>(0,l._)("div",{class:"lessons-select"},[(0,l._)("h1",{class:"lessons-select__title"},"Виберіть уроки:")],-1))),d={class:"lessons-select__body"},o={class:"lessons-select__list"},i=["value"],_={for:"lesson"},b={class:"lessons-select__button"},r=["disabled"];function S(e,s,t,a,S,h){return(0,l.wg)(),(0,l.iD)(l.HY,null,[u,(0,l._)("div",d,[(0,l._)("ul",o,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(e.getSubjectsList,(e=>((0,l.wg)(),(0,l.iD)("li",{key:e.id,class:"lessons-select__item"},[(0,l.wy)((0,l._)("input",{id:"lesson","onUpdate:modelValue":s[0]||(s[0]=e=>S.seletedSubjects=e),type:"checkbox",value:e.id},null,8,i),[[c.e8,S.seletedSubjects]]),(0,l._)("label",_,(0,n.zw)(e.title),1)])))),128))])]),(0,l._)("div",b,[(0,l._)("button",{class:"btn",disabled:!S.seletedSubjects.length,onClick:s[1]||(s[1]=(...e)=>h.onSelect&&h.onSelect(...e))},"Вибрати вчителів",8,r)])],64)}t(560);var h=t(65),p={name:"LessonsSelectView",data(){return{seletedSubjects:[]}},computed:{...(0,h.Se)("subjects",["getSubjectsList"])},methods:{onSelect(){this.$router.push({name:"teachers-select",params:{subjectId:this.seletedSubjects}})}}},v=t(89);const j=(0,v.Z)(p,[["render",S],["__scopeId","data-v-1201a5da"]]);var k=j}}]);
//# sourceMappingURL=869.b7f8849c.js.map