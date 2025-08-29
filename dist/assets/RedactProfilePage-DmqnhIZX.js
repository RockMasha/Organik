import{s as r,r as n,B as g,v as y,c as b,a6 as F,a2 as S,a7 as w,g as x,u as e,j as L,i as _}from"./index-yoIYmZrI.js";import{a as v,F as i}from"./FormFieldFull-CmZ_cKdZ.js";import{u as R,F as T}from"./index.esm-AgNlc__w.js";import{y as P}from"./sonner-DKp8VmbJ.js";import{u as h}from"./useLoading-C48Wc_ZC.js";import"./zod-DL37wdzu.js";import"./input-Dck-Jmbg.js";const $=r.form`
  display: flex;
`,U=r.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${n(16,32)};
  margin-bottom: ${n(16,32)};
`,d=r.li`
  margin: 0 auto;
  width: 100%;
  @media (min-width: 500px) {
    width: ${n(300,500,500)};
  }
  @media (min-width: 1920px) {
    width: 569px;
  }
`,B=r(g)`
  margin-bottom: ${n(15,25)};
`,N={first_name:"",last_name:"",phone:"",address:""},p=({methods:a,data:t})=>{a.reset({first_name:t.first_name??"",last_name:t.last_name??"",phone:t.phone??"+",address:t.address??""})},O=()=>{const[a,t]=h(),[l,o]=h(),m=y(),u=b(),s=R({defaultValues:N,resolver:v(F),mode:"onTouched"});return P(()=>{o(async()=>{const c=await m(S()).unwrap();p({methods:s,data:c})})},[s]),{methods:s,onSubmit:async c=>{t(async()=>{const f=await m(w(c)).unwrap();p({methods:s,data:f}),u(x("home"))})},postOrderLoading:a,fetchUserLoading:l}},A=()=>{const{methods:a,onSubmit:t,postOrderLoading:l,fetchUserLoading:o}=O();return e(T,{...a,children:e($,{onSubmit:a.handleSubmit(t),className:"flex flex-col gap-4 items-center",children:[e(U,{children:[e(d,{children:e(i,{name:"first_name",label:"First name*",placeholder:"Type your name",loading:o})}),e(d,{children:e(i,{name:"last_name",label:"Last name*",placeholder:"Type your surname",loading:o})}),e(d,{children:e(i,{name:"phone",label:"Phone number*",placeholder:"Type your phone number",loading:o})}),e(d,{children:e(i,{name:"address",label:"Address*",placeholder:"Type your address",loading:o})})]}),e(B,{loader:l,children:"Confirm"})]})})},C=r.section`
  padding: ${n(40,160)} 0;
  background-color: var(--color-white-200);
`,j=r(L)`
  margin-bottom: ${n(20,40)};
`;function k(){return e(C,{children:e(_,{children:[e(j,{type:"h1",className:"text-center",children:"Redact profile"}),e(A,{})]})})}function J(){return e("main",{children:e(k,{})})}export{J as default};
