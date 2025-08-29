import{v as y,z as Q,u as t,A as $,D as R,T as V,F as E,M as U,j as F,G as W,B as w,H as Y,I as X,J as G,K as H,N as k,Q as I,R as J,V as D,e as C,W as L,r as c,s as l,X as P,Y as K,Z,_ as tt,$ as et,a as at,E as rt,a0 as nt,o as ot,h as st,a1 as it,c as ct,a2 as lt,p as dt,g as ut,a3 as pt,a4 as mt,i as ht}from"./index-yoIYmZrI.js";import{P as xt}from"./Picture-Dub2ItKT.js";import{A as gt,d as q,k as h,y as A}from"./sonner-DKp8VmbJ.js";import{u as B,F as ft}from"./index.esm-AgNlc__w.js";import{g as wt,s as bt}from"./showSuccsesToast-BtSOQ_Nk.js";import{u as b}from"./useLoading-C48Wc_ZC.js";import{p as v}from"./processingRequestThunks-DnPrGuIA.js";import{g as j}from"./getPriceWithDiscount-SZcd4V55.js";import{S as p}from"./skeleton-CD9X3t-6.js";import{N as yt}from"./NoOrders-DPvROdtG.js";import{a as Pt,F as m}from"./FormFieldFull-CmZ_cKdZ.js";import{o as Nt,s as St}from"./zod-DL37wdzu.js";import"./input-Dck-Jmbg.js";const vt={required:"Quantity is required",min:{value:1,message:"Must be a positive number"},max:{value:999,message:"Max value is 999"},valueAsNumber:!0};function Ct({quantity:e,id:a}){const{register:n,formState:{errors:r},watch:o,trigger:i}=B({defaultValues:{quantity:e},mode:"onChange"}),s=gt(null),[d,x]=b(),u=y();async function S(_){if(!await i("quantity"))return;const z=Number(_.currentTarget.value);s.current&&clearTimeout(s.current),s.current=setTimeout(async()=>{x(async()=>{const M=await u(Q({quantity:z,id:a}));v(M)})},500)}const g=wt(o("quantity",e));return{InputProps:{...n("quantity",{...vt,onChange:S}),symbolNumb:g},errors:r,loading:d}}function Ot({quantity:e,id:a}){const{InputProps:n,errors:r,loading:o}=Ct({quantity:e,id:a});return t("form",{children:t($,{children:["Quantity :",t(R,{type:"number",...n}),r.quantity&&t(V,{type:"error",children:r.quantity.message}),o&&t(E,{color:"blue",size:"30px"})]})})}function Tt({questionText:e,submitDialog:a,rejectDialog:n,submitLoading:r}){return t(Y,{children:t(U,{children:[t(F,{type:"h2",children:e}),t(W,{children:[t(w,{variant:"blue",onClick:a,loader:r,children:"Yes"}),t(w,{variant:"transparent",onClick:n,children:"No"})]})]})})}function $t({id:e,name:a}){const[n,r]=q(!1),[o,i]=b(),s=y(),d=async()=>{i(async()=>{const u=await s(G(e));v(u),r(!1)})},x=async()=>{r(!1)};return t(h,{children:[t(X,{onClick:()=>r(!0),children:"X"}),n&&t(Tt,{questionText:`Are you sure delete item ${a} in cart ?`,submitDialog:d,rejectDialog:x,submitLoading:o})]})}function Ft({data:e}){const{quantity:a,id:n,product:{name:r,price:o,discount:i,img:s}}=e;return t(L,{children:[t(H,{src:s,loading:"lazy"}),t(k,{children:[t(I,{children:[t(J,{type:"h2",children:r}),t(D,{children:[i!==0&&t(C,{type:"crossed",minWidth:16,maxWidth:24,children:["$",o]}),t(C,{minWidth:18,maxWidth:40,children:i!==0?`$${j(o,i)}`:`$${o}`})]})]}),t(Ot,{id:e.product.id,quantity:a})]}),t($t,{id:n,name:r})]})}const N=e=>e.cart.cart,kt=l.section`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: ${c(50,141)};

  img {
    width: 100%;
  }
`;function It({image:e,title:a}){return t(kt,{children:[t(xt,{className:"w-full",name:e}),t(F,{className:"absolute",type:"h1",children:a})]})}const Dt=l.section`
  padding-top: ${c(50,150)};
  padding-bottom: ${c(20,50)};
  background-color: var(--color-yellow-200);
`,O=l.ul`
  display: flex;
  flex-direction: column;
  gap: 40px;
  margin-bottom: 46px;
`,Lt=l.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  gap: ${c(10,32)};
  margin-bottom: ${c(50,100)};
`,T=l.p`
  color: var(--color-navy-100);
  font-size: ${c(20,40)};
  font-weight: 700;
`;function qt(){return t(L,{children:[t(p,{className:`
          w-[200px] h-[200px]
          tablet:w-[292px] tablet:h-[226px]
          rounded-2xl bg-gray-200
        `}),t(k,{children:[t(I,{children:[t(p,{className:`
              h-[30px] w-[140px]
              tablet:h-[32px] tablet:w-[200px]
              laptop:h-[55px] laptop:w-[260px]
            `}),t(D,{children:[t(p,{className:`
                h-[16px] w-[25px]
                tablet:h-[22px] tablet:w-[35px]
                laptop:h-[30px] laptop:w-[45px]
              `}),t(p,{className:`
                h-[18px] w-[30px]
                tablet:h-[28px] tablet:w-[40px]
                laptop:h-[40px] laptop:w-[55px]
              `})]})]}),t($,{className:"tablet:mt-5 laptop:mb-0",children:[t(p,{className:`
              h-[20px] w-[90px]
              tablet:h-[28px] tablet:w-[120px]
              laptop:h-[32px] laptop:w-[120px]
            `}),t(p,{className:`
              h-[50px] w-[60px]
              tablet:h-[60px] tablet:w-[120px]
              laptop:h-[60px] laptop:w-[120px]
              desktop:h-[80px] desktop:w-[120px]
              
            `})]})]}),t(p,{className:`
          absolute h-[35px] w-[35px] rounded-lg top-0 right-0
          min-[500px]:top-[50%]
          tablet:h-[40px] tablet:w-[40px]  
          laptop:h-[50px] laptop:w-[50px] laptop:static
          desktop:translate-x-[200%] desktop:absolute
        `})]})}function At(){const e=P(N);return t(h,{children:[e&&e.products.length!==0&&t(O,{children:e.products.map(a=>t(Ft,{data:a},a.id))}),!e&&t(O,{children:new Array(3).fill(0).map((a,n)=>t(qt,{},n))}),e&&e.products.length===0&&t(yt,{title:"No products in cart now"})]})}function Bt(e){let a=0,n=0;for(const r of e.products){const{quantity:o,product:{price:i,discount:s}}=r;a+=Math.round(o*j(i,s)),n+=Math.round(o*(i/100)*s)}return{totalPrice:a,TotalDiscount:n}}function jt(){const e=P(N),a=e?Bt(e):null;return t(h,{children:a&&e?.products.length!==0&&t(Lt,{children:[t(T,{children:["Total Cost ",a.totalPrice,"$"]}),t(T,{children:["Discount ",a.TotalDiscount,"$"]})]})})}const _t=l.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  flex-direction: column;
  gap: ${c(26,46)};
  margin-bottom: ${c(26,46)};
  @media (min-width: 768px) {
    justify-content: space-between;
    flex-direction: row;
  }
`,f=l.li`
  position: relative;
  @media (min-width: 768px) and (max-width: 1919px) {
    min-width: ${c(300,800,768)};
  }
  @media (min-width: 1920px) {
    min-width: 569px;
  }
`,zt=l.li`
  width: 100%;
`,Mt=Nt({full_name:et,email:tt,phone:Z,address:K,message:St("").max(500,"max symbols 500").optional()});function Qt(e){return e.map(({product:{id:a},quantity:n})=>({productId:a,quality:n}))}const Rt=nt.extend({user:it});async function Vt(e){try{const a={...e,orderProducts:Qt(e.orderProducts)};delete a.message;const n=await at.post(`${rt.order}`,{json:a}).json(),r=Rt.parse(n);return ot(r)}catch(a){return st(a)}}const Et=()=>{const[e,a]=b(),[n,r]=b(),o=y(),i=ct(),s=P(N),d=B({resolver:Pt(Mt),defaultValues:{full_name:"",email:"",phone:"",address:"",message:""},mode:"onTouched"});return A(()=>{r(async()=>{const u=await o(lt()).unwrap();d.reset(Ut(u))})},[d]),{methods:d,onSubmit:async u=>{s&&a(async()=>{const S=await Vt({...u,orderProducts:s.products}),g=dt(S);g&&(bt(`Order ${g.id} made success`),i(ut("thankOrder")))})},postOrderLoading:e,fetchUserLoading:n}};function Ut(e){return{full_name:`${e.first_name??""} ${e.last_name??""}`,email:e.email??"",phone:e.phone??"",address:e.address??""}}function Wt(){const{methods:e,onSubmit:a,postOrderLoading:n,fetchUserLoading:r}=Et();return t(ft,{...e,children:t("form",{onSubmit:e.handleSubmit(a),className:"w-full",children:[t(_t,{children:[t(f,{children:t(m,{name:"full_name",label:"Full Name*",placeholder:"Your Full Name",loading:r})}),t(f,{children:t(m,{name:"address",label:"Address*",placeholder:"your company address",loading:r})}),t(f,{children:t(m,{name:"email",label:"Your Email*",placeholder:"example@yourmail.com",loading:r})}),t(f,{children:t(m,{name:"phone",label:"Phone number*",placeholder:"Enter your phone",loading:r})}),t(zt,{children:t(m,{name:"message",label:"Message",placeholder:"some extra information",variant:"textarea",loading:r})})]}),t(w,{className:"flex mx-auto",size:"flattened",loader:n,children:"Confirm"})]})})}function Yt(){const e=P(N),[a,n]=q(!1),r=()=>{n(!0)};return t(h,{children:e&&e.products.length!==0&&t(h,{children:a?t(Wt,{}):t(w,{className:"mx-auto",size:"flattened",arrow:!0,onClick:r,children:"To order"})})})}function Xt(){const e=y();return A(()=>((async()=>{const n=await e(mt());v(n)})(),()=>{e(pt())}),[]),t(Dt,{children:t(ht,{className:"flex flex-col",children:[t(At,{}),t(jt,{}),t(Yt,{})]})})}function de(){return t("main",{children:[t(It,{image:"cart",title:"Cart"}),t(Xt,{})]})}export{de as default};
