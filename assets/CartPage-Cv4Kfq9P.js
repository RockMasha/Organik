import{m as b,v as Q,u as t,w as $,x as R,T as V,y as E,M as U,k as F,A as W,a as w,z as Y,D as X,F as G,G as H,H as k,I,J,K as D,i as C,j as L,N as q,r as c,s as l,O as K,b as p,Q as P,R as Z,V as tt,W as et,X as at,c as nt,E as rt,Y as ot,o as st,h as it,Z as ct,e as lt,_ as dt,p as ut,g as pt,$ as mt,a0 as ht,l as xt}from"./index-Dn5vD4rF.js";import{A as gt,d as A,k as h,y as B}from"./sonner-DKp8VmbJ.js";import{u as j,F as ft}from"./index.esm-AgNlc__w.js";import{g as wt,s as yt}from"./showSuccsesToast-BtSOQ_Nk.js";import{u as y}from"./useLoading-C16TWYzV.js";import{p as v}from"./processingRequestThunks-DBE2GVC2.js";import{N as bt}from"./NoOrders-CuOUknyb.js";import{a as Pt,F as m}from"./FormFieldFull-DzqQ7fp8.js";import{o as Nt,s as St}from"./zod-DL37wdzu.js";const vt={required:"Quantity is required",min:{value:1,message:"Must be a positive number"},max:{value:999,message:"Max value is 999"},valueAsNumber:!0};function Ct({quantity:e,id:a}){const{register:r,formState:{errors:n},watch:o,trigger:i}=j({defaultValues:{quantity:e},mode:"onChange"}),s=gt(null),[d,x]=y(),u=b();async function S(z){if(!await i("quantity"))return;const _=Number(z.currentTarget.value);s.current&&clearTimeout(s.current),s.current=setTimeout(async()=>{x(async()=>{const M=await u(Q({quantity:_,id:a}));v(M)})},500)}const g=wt(o("quantity",e));return{InputProps:{...r("quantity",{...vt,onChange:S}),symbolNumb:g},errors:n,loading:d}}function Ot({quantity:e,id:a}){const{InputProps:r,errors:n,loading:o}=Ct({quantity:e,id:a});return t("form",{children:t($,{children:["Quantity :",t(R,{type:"number",...r}),n.quantity&&t(V,{type:"error",children:n.quantity.message}),o&&t(E,{color:"blue",size:"30px"})]})})}function Tt({questionText:e,submitDialog:a,rejectDialog:r,submitLoading:n}){return t(Y,{children:t(U,{children:[t(F,{type:"h2",children:e}),t(W,{children:[t(w,{variant:"blue",onClick:a,loader:n,children:"Yes"}),t(w,{variant:"transparent",onClick:r,children:"No"})]})]})})}function $t({id:e,name:a}){const[r,n]=A(!1),[o,i]=y(),s=b(),d=async()=>{i(async()=>{const u=await s(G(e));v(u),n(!1)})},x=async()=>{n(!1)};return t(h,{children:[t(X,{onClick:()=>n(!0),children:"X"}),r&&t(Tt,{questionText:`Are you sure delete item ${a} in cart ?`,submitDialog:d,rejectDialog:x,submitLoading:o})]})}function Ft({data:e}){const{quantity:a,id:r,product:{name:n,price:o,discount:i,img:s}}=e;return t(q,{children:[t(H,{src:s,loading:"lazy"}),t(k,{children:[t(I,{children:[t(J,{type:"h2",children:n}),t(D,{children:[i!==0&&t(C,{type:"crossed",minWidth:16,maxWidth:24,children:["$",o]}),t(C,{minWidth:18,maxWidth:40,children:i!==0?`$${L(o,i)}`:`$${o}`})]})]}),t(Ot,{id:e.product.id,quantity:a})]}),t($t,{id:r,name:n})]})}const N=e=>e.cart.cart,kt=l.section`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: ${c(50,141)};

  img {
    width: 100%;
  }
`;function It({image:e,title:a}){return t(kt,{children:[t(K,{className:"w-full",name:e,lazy:!1}),t(F,{className:"absolute",type:"h1",children:a})]})}const Dt=l.section`
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
`;function qt(){return t(q,{children:[t(p,{className:`
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
        `})]})}function At(){const e=P(N);return t(h,{children:[e&&e.products.length!==0&&t(O,{children:e.products.map(a=>t(Ft,{data:a},a.id))}),!e&&t(O,{children:new Array(3).fill(0).map((a,r)=>t(qt,{},r))}),e&&e.products.length===0&&t(bt,{title:"No products in cart now"})]})}function Bt(e){let a=0,r=0;for(const n of e.products){const{quantity:o,product:{price:i,discount:s}}=n;a+=Math.round(o*L(i,s)),r+=Math.round(o*(i/100)*s)}return{totalPrice:a,TotalDiscount:r}}function jt(){const e=P(N),a=e?Bt(e):null;return t(h,{children:a&&e?.products.length!==0&&t(Lt,{children:[t(T,{children:["Total Cost ",a.totalPrice,"$"]}),t(T,{children:["Discount ",a.TotalDiscount,"$"]})]})})}const zt=l.ul`
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
`,_t=l.li`
  width: 100%;
`,Mt=Nt({full_name:at,email:et,phone:tt,address:Z,message:St("").max(500,"max symbols 500").optional()});function Qt(e){return e.map(({product:{id:a},quantity:r})=>({productId:a,quality:r}))}const Rt=ot.extend({user:ct});async function Vt(e){try{const a={...e,orderProducts:Qt(e.orderProducts)};delete a.message;const r=await nt.post(`${rt.order}`,{json:a}).json(),n=Rt.parse(r);return st(n)}catch(a){return it(a)}}const Et=()=>{const[e,a]=y(),[r,n]=y(),o=b(),i=lt(),s=P(N),d=j({resolver:Pt(Mt),defaultValues:{full_name:"",email:"",phone:"",address:"",message:""},mode:"onTouched"});return B(()=>{n(async()=>{const u=await o(dt()).unwrap();d.reset(Ut(u))})},[d]),{methods:d,onSubmit:async u=>{s&&a(async()=>{const S=await Vt({...u,orderProducts:s.products}),g=ut(S);g&&(yt(`Order ${g.id} made success`),i(pt("thankOrder")))})},postOrderLoading:e,fetchUserLoading:r}};function Ut(e){return{full_name:`${e.first_name??""} ${e.last_name??""}`,email:e.email??"",phone:e.phone??"",address:e.address??""}}function Wt(){const{methods:e,onSubmit:a,postOrderLoading:r,fetchUserLoading:n}=Et();return t(ft,{...e,children:t("form",{onSubmit:e.handleSubmit(a),className:"w-full",children:[t(zt,{children:[t(f,{children:t(m,{name:"full_name",label:"Full Name*",placeholder:"Your Full Name",loading:n})}),t(f,{children:t(m,{name:"address",label:"Address*",placeholder:"your company address",loading:n})}),t(f,{children:t(m,{name:"email",label:"Your Email*",placeholder:"example@yourmail.com",loading:n})}),t(f,{children:t(m,{name:"phone",label:"Phone number*",placeholder:"Enter your phone",loading:n})}),t(_t,{children:t(m,{name:"message",label:"Message",placeholder:"some extra information",variant:"textarea",loading:n})})]}),t(w,{className:"flex mx-auto",size:"flattened",loader:r,children:"Confirm"})]})})}function Yt(){const e=P(N),[a,r]=A(!1),n=()=>{r(!0)};return t(h,{children:e&&e.products.length!==0&&t(h,{children:a?t(Wt,{}):t(w,{className:"mx-auto",size:"flattened",arrow:!0,onClick:n,children:"To order"})})})}function Xt(){const e=b();return B(()=>((async()=>{const r=await e(ht());v(r)})(),()=>{e(mt())}),[]),t(Dt,{children:t(xt,{className:"flex flex-col",children:[t(At,{}),t(jt,{}),t(Yt,{})]})})}function se(){return t("main",{children:[t(It,{image:"cart",title:"Cart"}),t(Xt,{})]})}export{se as default};
