import{r as t,s as r,B as F,S as L,T as b,a as V,u as a,b as i,c as f,E as w,P as O,o as $,h as y,C as Q,p as g,d as X,e as S,g as x,f as U,i as M,j as G}from"./index-Dn5vD4rF.js";import{d as N,y as P}from"./sonner-DKp8VmbJ.js";import{s as H,g as J}from"./showSuccsesToast-BtSOQ_Nk.js";import{a as K}from"./zod-DL37wdzu.js";import{u as Y}from"./useLoading-C16TWYzV.js";import{u as Z}from"./index.esm-AgNlc__w.js";const T=r.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: var(--color-white-opacity-200);
  z-index: 10;
`,q=r.div`
  width: 100%;
  padding-top: ${t(48,96)};
  padding-bottom: ${t(72,144)};
  background-color: var(--color-white-100);
`,z=r.div`
  position: relative;
  padding: 0 ${t(30,100,320,768)};
  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    gap: ${t(22,88,768)};
    padding: 0 ${t(50,100,768,1440)};
  }
  @media (min-width: 1440px) {
    padding: 0 ${t(200,260,1440)};
  }
`,_=r.button`
  padding-top: ${t(6,11)};
  padding-bottom: ${t(6,11)};
  padding-left: ${t(12,25)};
  padding-right: ${t(12,25)};
  position: absolute;
  right: ${t(30,100,320,768)};
  top: 0;
  color: var(--color-white-100);
  background-color: var(--color-navy-100);
  border-radius: 16px;
  z-index: 20;
`,k=r.div`
  margin-bottom: ${t(20,30,320,768)};
  position: relative;
  @media (min-width: 768px) {
    margin-bottom: 0;
  }
`,tt=r(F)`
  position: absolute;
  top: ${t(20,35)};
  left: ${t(20,35)};
`,at=r.img`
  min-width: ${t(250,400,320,768)};
  min-height: ${t(250,400,320,768)};
  max-width: ${t(250,400,320,768)};
  max-height: ${t(250,400,320,768)};
  background-color: var(--color-white-200);
  border-radius: 30px;
  @media (min-width: 768px) {
    min-width: ${t(300,600,768)};
    min-height: ${t(300,600,768)};
    max-width: ${t(300,600,768)};
    max-height: ${t(300,600,768)};
  }
`,I=r.div``,ot=r.h2`
  font-size: ${t(25,30,320,768)};
  color: var(--color-navy-100);
  font-weight: 600;
  margin-bottom: ${t(4,9)};
  @media (min-width: 768px) {
    font-size: ${t(25,40,768)};
  }
`,et=r(L)`
  transform: translateX(-9%);
`,R=r.div`
  display: flex;
  align-items: center;
  gap: ${t(4,9)};
  margin-bottom: ${t(10,25)};
`,rt=r(b)`
  margin-bottom: ${t(17,35)};
  font-size: ${t(14,18)};
  @media (min-width: 1920px) {
    width: 658px;
  }
`,B=r.form`
  display: flex;
  gap: ${t(10,21)};
`,j=r.label`
  position: relative;
  align-items: center;
  display: flex;
  gap: ${t(10,21)};
  color: var(--color-navy-100);
  font-size: ${t(14,20)};
  font-weight: 700;
  white-space: nowrap;
`,nt=r("input")`
  width: ${({symbolNumb:e})=>{const o=Math.max(e,1);return`${Math.min(o,3)}ch`}};
  padding-top: ${t(12,28)};
  padding-bottom: ${t(12,28)};
  padding-left: ${t(12,60)};
  padding-right: ${t(12,60)};
  box-sizing: content-box;
  border: 2px solid var(--color-navy-100);
  border-radius: 16px;
`,it=r(V)`
  padding-top: ${t(10,24)};
  padding-bottom: ${t(10,24)};
  padding-left: ${t(16,40)};
  padding-right: ${t(16,40)};
  font-size: ${t(12,20)};
`,dt=r(b)`
  margin-top: ${t(17,25)};
  color: var(--color-navy-100);
  font-size: ${t(14,20)};
  font-weight: 600;
  span {
    font-size: ${t(16,22)};
    font-weight: 800;
    color: var(--color-green-100);
  }
`;function st(){return a(T,{children:a(q,{id:"product-modal",children:a(z,{children:[a(i,{className:"absolute right-5 top-0 w-[50px] h-[40px] rounded-xl tablet:top-2 tablet:right-20 laptop:right-50 laptop:top-5 desktop:top-10 desktop:right-70"}),a(k,{children:[a(i,{className:"absolute top-[30px] left-[20px] w-[80px] h-[30px] rounded-full"}),a(i,{className:"w-[250px] h-[250px] rounded-[30px] tablet:w-[300px] tablet:h-[300px] laptop:w-[475px] laptop:h-[475px] desktop:w-[600px] desktop:h-[600px]"})]}),a(I,{className:"w-full",children:[a(i,{className:"h-[32px] w-[40%] mb-2 rounded"}),a(i,{className:"h-[20px] w-[120px] mb-3 rounded"}),a(R,{children:[a(i,{className:"h-[28px] w-[50px] rounded"}),a(i,{className:"h-[28px] w-[60px] rounded"})]}),a(i,{className:"h-[60px] w-full mb-4 rounded tablet:w-[50%]"}),a(B,{children:[a(j,{className:"w-[40%]",children:[a(i,{className:"h-[24px] w-[45%] rounded tablet:h-[35px]"}),a(i,{className:"h-[48px] w-[45%] rounded tablet:h-[70px] laptop:h-[82px]"})]}),a(i,{className:"h-[48px] w-[35%] rounded tablet:h-[70px] tablet:w-[30%] laptop:h-[82px]"})]}),a(i,{className:"h-[24px] w-[160px] rounded mt-[30px]"})]})]})})})}async function ct(e){try{const o=await f.get(`${w.products}/${e}`).json(),n=O.parse(o);return $(n)}catch(o){return y(o)}}async function lt(e){try{const o=await f.get(`${w.cart}`).json(),d=Q.parse(o).products.find(s=>s.product.id===e);return $(d??null)}catch(o){return y(o)}}function pt(e){const[o,n]=N(null),[d,s]=N(null);return P(()=>{if(!e)return;(async()=>{const c=g(await ct(e));c&&n(c);const l=g(await lt(Number(e)),null,!1);l&&s(l)})()},[e]),{product:o,cartProduct:d,setCartProduct:s}}const ut=K(X);async function mt(e){try{const o=await f.post(`${w.cart}`,{json:{products:[e]}}).json(),n=ut.parse(o);return $(n)}catch(o){return y(o)}}function ht({productId:e,quantityInCart:o}){const n=S(),[d,s]=Y();return{addToCart:async c=>{await s(async()=>{const l=await mt({quantity:c+(o??0),id:e});l.match(u=>{H(`product ${u[0].product.name} added success`),n(x("home"))},u=>{u.message==="Unauthorized"&&n(x("login")),g(l)})})},loading:d}}const C={quantity:1},gt={required:"Quantity is required",min:{value:1,message:"Must be a positive number"},max:{value:999,message:"Max value is 999"},valueAsNumber:!0};function xt({onSubmit:e,loading:o}){const{register:n,handleSubmit:d,formState:{errors:s},watch:p}=Z({defaultValues:C}),c=J(p("quantity",C.quantity));return a(B,{onSubmit:d(e),children:[a(j,{children:["Quantity :",a(nt,{type:"number",symbolNumb:c,...n("quantity",gt)}),s.quantity&&a(b,{type:"error",children:s.quantity.message})]}),a(it,{type:"submit",arrow:!0,loader:o,children:"Add To Cart"})]})}function Mt(){const{id:e}=U(),o=S(),{product:n,cartProduct:d}=pt(e),{addToCart:s,loading:p}=ht({productId:Number(e),quantityInCart:d?.quantity??0}),c=()=>o(x("home")),l=()=>{const m=document.getElementById("product-modal");m&&m.scrollIntoView({behavior:"smooth",block:"center"})};if(P(()=>l()),!n)return a(st,{});const{name:u,price:v,description:W,discount:h,img:A,category:D,rate:E}=n;return a(T,{children:a(q,{id:"product-modal",children:a(z,{children:[a(_,{onClick:c,children:"X"}),a(k,{children:[a(tt,{size:"md",children:D.name}),a(at,{src:A})]}),a(I,{children:[a(ot,{children:u}),a(et,{rating:E,size:"20px"}),a(R,{children:[a(M,{type:h!==0?"crossed":"normal",minWidth:15,maxWidth:20,children:["$",v]}),h!==0&&a(M,{minWidth:20,maxWidth:25,children:["$",G(v,h)]})]}),a(rt,{children:W}),a(xt,{onSubmit:m=>s(m.quantity),loading:p}),d&&a(dt,{children:["In your cart: ",a("span",{children:d.quantity})]})]})]})})})}export{Mt as default};
