"use strict";(self["webpackChunktask"]=self["webpackChunktask"]||[]).push([[471],{2471:function(e,t,s){s.r(t),s.d(t,{default:function(){return v}});var c=s(3396);const n={class:"select-list"},a={class:"select-list__button"};function r(e,t,s,r,l,u){const d=(0,c.up)("subject-teachres-selector");return(0,c.wg)(),(0,c.iD)(c.HY,null,[(0,c._)("div",n,[((0,c.wg)(!0),(0,c.iD)(c.HY,null,(0,c.Ko)(s.subjectId,((e,t)=>((0,c.wg)(),(0,c.j4)(d,{key:t+1,"subject-id":e,onTeacherSelected:t=>u.onTeachwrSlected(e,t)},null,8,["subject-id","onTeacherSelected"])))),128))]),(0,c._)("div",a,[(0,c._)("button",{class:"btn",onClick:t[0]||(t[0]=(...e)=>u.onStudyStart&&u.onStudyStart(...e))},"Розпочати навчання")])],64)}s(560);var l=s(7139),u=s(9242);const d=e=>((0,c.dD)("data-v-26e45208"),e=e(),(0,c.Cn)(),e),o={class:"list-item"},i={for:"select-item"},h=d((()=>(0,c._)("option",null,"Оберіть вчителя",-1))),b=["value"];function p(e,t,s,n,a,r){return(0,c.wg)(),(0,c.iD)("div",o,[(0,c._)("label",i,(0,l.zw)(r.subjectTitle),1),(0,c.wy)((0,c._)("select",{id:"select-item","onUpdate:modelValue":t[0]||(t[0]=e=>a.selectedTeacher=e),onChange:t[1]||(t[1]=(...e)=>r.onChange&&r.onChange(...e))},[h,((0,c.wg)(!0),(0,c.iD)(c.HY,null,(0,c.Ko)(e.getTeachersBySubjectId(s.subjectId),(e=>((0,c.wg)(),(0,c.iD)("option",{key:e.id,value:e.id},(0,l.zw)(e.name),9,b)))),128))],544),[[u.bM,a.selectedTeacher]])])}var S=s(65),j={name:"SubjectTeachresSelector",props:{subjectId:{type:[Number,String],require:!0}},emits:["teacher-selected"],data(){return{selectedTeacher:null}},computed:{...(0,S.Se)("teachers",["getTeachersBySubjectId"]),...(0,S.Se)("subjects",["getSubjectById"]),subjectTitle(){return this.getSubjectById(parseInt(this.subjectId)).title}},methods:{onChange(){this.$emit("teacher-selected",this.selectedTeacher)}}},m=s(89);const g=(0,m.Z)(j,[["render",p],["__scopeId","data-v-26e45208"]]);var T=g,w={name:"TeachersSelectView",components:{SubjectTeachresSelector:T},props:{subjectId:{type:Array,default:()=>[]}},data(){return{lessons:{}}},methods:{onTeachwrSlected(e,t){this.lessons[e]=t},onStudyStart(){const e=Object.entries(this.lessons).map((([e,t])=>e+"-"+t));this.$router.push({name:"study-plan",params:{lessonsIdsPairs:e}})}}};const y=(0,m.Z)(w,[["render",r],["__scopeId","data-v-3819611c"]]);var v=y}}]);
//# sourceMappingURL=471.8b6d2e8f.js.map