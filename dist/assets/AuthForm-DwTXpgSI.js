import{s as r,r as e,a as y,L as x,e as F,m as L,u as o,g as l,U as k,n as S,q as T,t as R}from"./index-Dn5vD4rF.js";import{u as $,F as U}from"./index.esm-AgNlc__w.js";import{a as P,F as s}from"./FormFieldFull-DzqQ7fp8.js";import{p as A}from"./processingRequestThunks-DBE2GVC2.js";import{u as z}from"./useLoading-C16TWYzV.js";import{k as q}from"./sonner-DKp8VmbJ.js";const B=r.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`,D=r.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${e(16,32)};
  margin-bottom: ${e(16,32)};
`,n=r.li`
  margin: 0 auto;
  width: 100%;
  @media (min-width: 500px) {
    width: ${e(300,500,500)};
  }
  @media (min-width: 1920px) {
    width: 569px;
  }
  Link {
    display: block;
    font-family: 'Open Sans';
    font-weight: 100;
  }
`,E=r(y)`
  margin-bottom: ${e(15,35)};
`,I=r.p`
  font-size: ${e(14,28)};
  font-weight: 500;
  letter-spacing: 0.36px;
  text-align: center;
  color: var(--color-grey-100);
  position: relative;
`,N=r(x)`
  font-size: ${e(14,28)};
  font-weight: 700;
  letter-spacing: 0.36px;
  text-align: center;
  color: var(--color-navy-100);
  position: relative;
  cursor: pointer;
  border-bottom: 1px solid var(--color-navy-100);
  border-bottom-width: ${e(3,4)};
  transition:
    border-bottom-color 0.3s,
    color 0.3s;
  :hover {
    color: var(--color-green-200);
    border-bottom-color: var(--color-green-200);
  }
`,J=({type:i})=>{const[c,d]=z(),m=F(),p=L(),t=i==="register",a=$({resolver:P(t?k:S),defaultValues:{email:"",password:"",checkPassword:""},mode:"onTouched"}),g={register:R,login:T},h=u=>d(async()=>{const{email:w,password:f}=u,b=await p(g[i]({email:w,password:f})),v=A(b);t&&v&&m(l("editProfile"))});return o(U,{...a,children:o(B,{onSubmit:a.handleSubmit(h),children:[o(D,{children:[o(n,{children:o(s,{name:"email",label:"Email",placeholder:"Type your email"})}),o(n,{children:o(s,{name:"password",label:"Password",inputType:"password",placeholder:"Type your password"})}),t&&o(n,{children:o(s,{name:"checkPassword",label:"Repeat password",inputType:"password",placeholder:"Type your password again"})})]}),o(E,{type:"submit",loader:c,children:t?"Sign up":"Log in"}),i==="login"&&o(q,{children:[o(I,{children:"Don`t have an account?"}),o(N,{to:l("register"),children:"Sign Up"})]})]})})};export{J as A};
