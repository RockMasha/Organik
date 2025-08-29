import{r as a,s as t,j as f,T as x,u as e,L as g,B as w,v as y,a2 as b}from"./index-yoIYmZrI.js";import{k as d,d as k,y as v}from"./sonner-DKp8VmbJ.js";import{u as s}from"./useLoading-C48Wc_ZC.js";import{S as c}from"./skeleton-CD9X3t-6.js";import"./zod-DL37wdzu.js";const L=t.section`
  padding: ${a(40,80)};
  background-color: var(--color-white-200);
`,P=t(f)`
  margin-bottom: ${a(20,40)};
`,p=t.ul`
  display: flex;
  gap: 20px;
  margin: 0 auto;
  flex-wrap: wrap;
  justify-content: center;
`,m=t.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 0 auto 50px;
`,u=t.li`
  margin: 0 auto;
  width: 100%;
  padding: ${a(14,25)};
  border: 2px solid var(--color-gray-300);
  border-radius: 25px;
  background-color: var(--color-white-100);

  @media (min-width: 500px) {
    width: ${a(300,500,500)};
  }
  @media (min-width: 1920px) {
    width: 569px;
  }
`,S=t(x)`
  font-size: ${a(16,24)};
`,I=t.span`
  display: block;
  font-size: 14px;
  font-weight: 500;
  color: var(--color-gray-200);
  margin-bottom: 4px;
`;function N({data:i}){const r=[{label:"First Name",value:i.first_name},{label:"Last Name",value:i.last_name},{label:"Phone number",value:i.phone},{label:"Address",value:i.address}],l=[{link:"editProfile",name:"Edit Profile"},{link:"cart",name:"Cart"},{link:"orderHistory",name:"Order History"}];return e(d,{children:[e(m,{children:r.map(n=>e(u,{children:[e(I,{children:n.label}),e(S,{children:n.value})]},n.label))}),e(p,{children:[l.map(n=>e("li",{children:e(g,{variant:"blue",link:n.link,children:n.name})},n.name)),e("li",{children:e(w,{variant:"yellow",children:"logout"})})]})]})}function T(){return e(d,{children:[e(m,{children:new Array(4).fill(0).map((i,r)=>e(u,{children:e(c,{className:`
          w-[100%] h-[50px]
          rounded-2xl bg-gray-200
        `})},r))}),e(p,{children:new Array(4).fill(0).map((i,r)=>e("li",{children:e(c,{className:"h-[60px] w-[130px] tablet:h-[80px] tablet:w-[170px] rounded-[25px] "})},r))})]})}function $(){const[i,r]=s(),[l,n]=k(null),o=y();return v(()=>{r(async()=>{const h=await o(b()).unwrap();n(h)})},[o,s]),e(L,{children:[e(P,{type:"h1",className:"text-center",children:"Profile"}),i&&e(T,{}),l&&e(N,{data:l})]})}function H(){return e("main",{children:e($,{})})}export{H as default};
