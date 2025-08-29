import{s as o,r as n,a as g,m as y,e as b,a3 as F,_ as S,a4 as w,g as x,u as e,k as L,l as _}from"./index-Dn5vD4rF.js";import{a as R,F as i}from"./FormFieldFull-DzqQ7fp8.js";import{u as v,F as P}from"./index.esm-AgNlc__w.js";import{y as T}from"./sonner-DKp8VmbJ.js";import{u as p}from"./useLoading-C16TWYzV.js";import"./zod-DL37wdzu.js";const $=o.form`
  display: flex;
`,U=o.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${n(16,32)};
  margin-bottom: ${n(16,32)};
`,d=o.li`
  margin: 0 auto;
  width: 100%;
  @media (min-width: 500px) {
    width: ${n(300,500,500)};
  }
  @media (min-width: 1920px) {
    width: 569px;
  }
`,N=o(g)`
  margin-bottom: ${n(15,25)};
`,O={first_name:"",last_name:"",phone:"",address:""},h=({methods:a,data:t})=>{a.reset({first_name:t.first_name??"",last_name:t.last_name??"",phone:t.phone??"",address:t.address??""})},k=()=>{const[a,t]=p(),[l,r]=p(),m=y(),u=b(),s=v({defaultValues:O,resolver:R(F)});return T(()=>{r(async()=>{const c=await m(S()).unwrap();h({methods:s,data:c})})},[s]),{methods:s,onSubmit:async c=>{t(async()=>{const f=await m(w(c)).unwrap();h({methods:s,data:f}),u(x("profile"))})},postOrderLoading:a,fetchUserLoading:l}},A=()=>{const{methods:a,onSubmit:t,postOrderLoading:l,fetchUserLoading:r}=k();return e(P,{...a,children:e($,{onSubmit:a.handleSubmit(t),className:"flex flex-col gap-4 items-center",children:[e(U,{children:[e(d,{children:e(i,{name:"first_name",label:"First name*",placeholder:"Type your name",loading:r})}),e(d,{children:e(i,{name:"last_name",label:"Last name*",placeholder:"Type your surname",loading:r})}),e(d,{children:e(i,{name:"phone",label:"Phone number*",placeholder:"Type your phone number",loading:r})}),e(d,{children:e(i,{name:"address",label:"Address*",placeholder:"Type your address",loading:r})})]}),e(N,{loader:l,children:"Confirm"})]})})},B=o.section`
  padding: ${n(40,160)} 0;
  background-color: var(--color-white-200);
`,C=o(L)`
  margin-bottom: ${n(20,40)};
`;function z(){return e(B,{children:e(_,{children:[e(C,{type:"h1",className:"text-center",children:"Redact profile"}),e(A,{})]})})}function H(){return e("main",{children:e(z,{})})}export{H as default};
