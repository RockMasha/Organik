import{r as o,s as a,k as m,i as b,T as h,c as w,E as g,o as y,h as O,Y as f,u as t,b as p,p as N,l as $}from"./index-Dn5vD4rF.js";import{d as D,y as S}from"./sonner-DKp8VmbJ.js";import{a as H}from"./zod-DL37wdzu.js";import{N as I}from"./NoOrders-CuOUknyb.js";const T=a.section`
  padding-top: ${o(80,140)} 0;
`,v=a(m)`
  text-align: center;
  margin-bottom: ${o(30,40)} 0;
`,M=a.ul`
  display: flex;
  flex-direction: column;
  gap: ${o(20,30)};
`,x=a.li`
  padding: ${o(10,30)};
  background-color: var(--color-white-200);
  border-radius: 15px;
`,k=a(m)`
  margin-bottom: ${o(7,25)};
`,A=a(b)`
  margin-bottom: ${o(7,15)};
`,u=a.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${o(26,46)};
  margin-bottom: ${o(7,15)};
`,i=a(h)``,P=a(h)`
  color: var(--color-navy-100);
  text-align: end;
`,E=H(f);async function J(){try{const e=await w.get(g.myOrders,{}).json(),r=E.parse(e);return y(r)}catch(e){return O(e)}}function R(){return t(x,{children:[t(p,{className:`
          h-[20px] w-[40px] mb-2
          tablet:h-[28px] tablet:w-[50px] tablet:mb-4
          laptop:h-[32px] laptop:w-[60px] laptop:mb-6
        `}),t(p,{className:`
          h-[18px] w-[100px] mb-2
          tablet:h-[22px] tablet:w-[140px] tablet:mb-4
          laptop:h-[26px] laptop:w-[180px] laptop:mb-6
          
        `}),t(u,{children:[t(p,{className:"h-[16px] w-[90px] tablet:h-[20px] laptop:h-[24px] tablet:w-[140px] laptop:w-[180px] "}),t(p,{className:"h-[16px] w-[90px] tablet:h-[20px] laptop:h-[24px] tablet:w-[140px] laptop:w-[180px]"}),t(p,{className:"h-[16px] w-[90px] tablet:h-[20px] laptop:h-[24px] tablet:w-[140px] laptop:w-[180px]"}),t(p,{className:"h-[16px] w-[90px] tablet:h-[20px] laptop:h-[24px] tablet:w-[140px] laptop:w-[180px]"})]}),t(p,{className:`
          h-[14px] w-[80px] ml-auto
          tablet:h-[18px] tablet:w-[130px]
          laptop:h-[20px] laptop:w-[150px]
        `})]})}const F=["January","February","March","April","May","June","July","August","September","October","November","December"];function W(e){const r=new Date(e),n=r.getDate(),s=r.getMonth(),l=r.getFullYear(),c=r.getHours(),d=Number(r.getMinutes())>9?r.getMinutes():"0"+r.getMinutes();return`${n} ${F[s]}, ${l}, ${c}:${d}`}function Y({data:e}){const{id:r,full_name:n,email:s,phone:l,address:c,createdAt:d}=e;return t(x,{children:[t(k,{type:"h3-weight",children:["#",r]}),t(A,{minWidth:18,maxWidth:23,children:"Price: 23$"}),t(u,{children:[t(i,{children:n}),t(i,{children:s}),t(i,{children:l}),t(i,{children:c})]}),t(P,{children:W(d)})]})}function _(){const[e,r]=D(null);return S(()=>{(async()=>{const s=await J(),l=N(s);r(l??[])})()}),t(T,{children:t($,{children:[t(v,{type:"h1",children:"Orders History"}),t(M,{children:[e===null&&new Array(3).fill(0).map((n,s)=>t(R,{},s)),e&&e.length>0&&e.reverse().map(n=>t(Y,{data:n},n.id)),e?.length===0&&t(I,{title:"No made orders now"})]})]})})}function L(){return t("main",{children:t(_,{})})}export{L as default};
