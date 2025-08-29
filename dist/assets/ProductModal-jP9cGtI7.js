import{r as t,s as r,T as f,B as F,u as o,a as b,E as w,P as L,o as $,h as y,C as V,p as g,b as O,c as S,g as x,d as Q,e as M}from"./index-yoIYmZrI.js";import{B as X,S as U}from"./badge-C5y-WcGk.js";import{g as G}from"./getPriceWithDiscount-SZcd4V55.js";import{S as i}from"./skeleton-CD9X3t-6.js";import{d as N,y as P}from"./sonner-DKp8VmbJ.js";import{s as H,g as J}from"./showSuccsesToast-BtSOQ_Nk.js";import{a as K}from"./zod-DL37wdzu.js";import{u as Y}from"./useLoading-C48Wc_ZC.js";import{u as Z}from"./index.esm-AgNlc__w.js";const T=r.div`
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
`,tt=r(X)`
  position: absolute;
  top: ${t(20,35)};
  left: ${t(20,35)};
`,ot=r.img`
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
`,I=r.div``,at=r.h2`
  font-size: ${t(25,30,320,768)};
  color: var(--color-navy-100);
  font-weight: 600;
  margin-bottom: ${t(4,9)};
  @media (min-width: 768px) {
    font-size: ${t(25,40,768)};
  }
`,et=r(U)`
  transform: translateX(-9%);
`,B=r.div`
  display: flex;
  align-items: center;
  gap: ${t(4,9)};
  margin-bottom: ${t(10,25)};
`,rt=r(f)`
  margin-bottom: ${t(17,35)};
  font-size: ${t(14,18)};
  @media (min-width: 1920px) {
    width: 658px;
  }
`,R=r.form`
  display: flex;
  gap: ${t(10,21)};
`,W=r.label`
  position: relative;
  align-items: center;
  display: flex;
  gap: ${t(10,21)};
  color: var(--color-navy-100);
  font-size: ${t(14,20)};
  font-weight: 700;
  white-space: nowrap;
`,nt=r("input")`
  width: ${({symbolNumb:e})=>{const a=Math.max(e,1);return`${Math.min(a,3)}ch`}};
  padding-top: ${t(12,28)};
  padding-bottom: ${t(12,28)};
  padding-left: ${t(12,60)};
  padding-right: ${t(12,60)};
  box-sizing: content-box;
  border: 2px solid var(--color-navy-100);
  border-radius: 16px;
`,it=r(F)`
  padding-top: ${t(10,24)};
  padding-bottom: ${t(10,24)};
  padding-left: ${t(16,40)};
  padding-right: ${t(16,40)};
  font-size: ${t(12,20)};
`,dt=r(f)`
  margin-top: ${t(17,25)};
  color: var(--color-navy-100);
  font-size: ${t(14,20)};
  font-weight: 600;
  span {
    font-size: ${t(16,22)};
    font-weight: 800;
    color: var(--color-green-100);
  }
`;function st(){return o(T,{children:o(q,{id:"product-modal",children:o(z,{children:[o(i,{className:"absolute right-5 top-0 w-[50px] h-[40px] rounded-xl tablet:top-2 tablet:right-20 laptop:right-50 laptop:top-5 desktop:top-10 desktop:right-70"}),o(k,{children:[o(i,{className:"absolute top-[30px] left-[20px] w-[80px] h-[30px] rounded-full"}),o(i,{className:"w-[250px] h-[250px] rounded-[30px] tablet:w-[300px] tablet:h-[300px] laptop:w-[475px] laptop:h-[475px] desktop:w-[600px] desktop:h-[600px]"})]}),o(I,{className:"w-full",children:[o(i,{className:"h-[32px] w-[40%] mb-2 rounded"}),o(i,{className:"h-[20px] w-[120px] mb-3 rounded"}),o(B,{children:[o(i,{className:"h-[28px] w-[50px] rounded"}),o(i,{className:"h-[28px] w-[60px] rounded"})]}),o(i,{className:"h-[60px] w-full mb-4 rounded tablet:w-[50%]"}),o(R,{children:[o(W,{className:"w-[40%]",children:[o(i,{className:"h-[24px] w-[45%] rounded tablet:h-[35px]"}),o(i,{className:"h-[48px] w-[45%] rounded tablet:h-[70px] laptop:h-[82px]"})]}),o(i,{className:"h-[48px] w-[35%] rounded tablet:h-[70px] tablet:w-[30%] laptop:h-[82px]"})]}),o(i,{className:"h-[24px] w-[160px] rounded mt-[30px]"})]})]})})})}async function ct(e){try{const a=await b.get(`${w.products}/${e}`).json(),n=L.parse(a);return $(n)}catch(a){return y(a)}}async function lt(e){try{const a=await b.get(`${w.cart}`).json(),d=V.parse(a).products.find(s=>s.product.id===e);return $(d??null)}catch(a){return y(a)}}function pt(e){const[a,n]=N(null),[d,s]=N(null);return P(()=>{if(!e)return;(async()=>{const c=g(await ct(e));c&&n(c);const l=g(await lt(Number(e)),null,!1);l&&s(l)})()},[e]),{product:a,cartProduct:d,setCartProduct:s}}const ut=K(O);async function mt(e){try{const a=await b.post(`${w.cart}`,{json:{products:[e]}}).json(),n=ut.parse(a);return $(n)}catch(a){return y(a)}}function ht({productId:e,quantityInCart:a}){const n=S(),[d,s]=Y();return{addToCart:async c=>{await s(async()=>{const l=await mt({quantity:c+(a??0),id:e});l.match(u=>{H(`product ${u[0].product.name} added success`),n(x("home"))},u=>{u.message==="Unauthorized"&&n(x("login")),g(l)})})},loading:d}}const C={quantity:1},gt={required:"Quantity is required",min:{value:1,message:"Must be a positive number"},max:{value:999,message:"Max value is 999"},valueAsNumber:!0};function xt({onSubmit:e,loading:a}){const{register:n,handleSubmit:d,formState:{errors:s},watch:p}=Z({defaultValues:C}),c=J(p("quantity",C.quantity));return o(R,{onSubmit:d(e),children:[o(W,{children:["Quantity :",o(nt,{type:"number",symbolNumb:c,...n("quantity",gt)}),s.quantity&&o(f,{type:"error",children:s.quantity.message})]}),o(it,{type:"submit",arrow:!0,loader:a,children:"Add To Cart"})]})}function St(){const{id:e}=Q(),a=S(),{product:n,cartProduct:d}=pt(e),{addToCart:s,loading:p}=ht({productId:Number(e),quantityInCart:d?.quantity??0}),c=()=>a(x("home")),l=()=>{const m=document.getElementById("product-modal");m&&m.scrollIntoView({behavior:"smooth",block:"center"})};if(P(()=>l()),!n)return o(st,{});const{name:u,price:v,description:j,discount:h,img:A,category:D,rate:E}=n;return o(T,{children:o(q,{id:"product-modal",children:o(z,{children:[o(_,{onClick:c,children:"X"}),o(k,{children:[o(tt,{size:"md",children:D.name}),o(ot,{src:A})]}),o(I,{children:[o(at,{children:u}),o(et,{rating:E,size:"20px"}),o(B,{children:[o(M,{type:h!==0?"crossed":"normal",minWidth:15,maxWidth:20,children:["$",v]}),h!==0&&o(M,{minWidth:20,maxWidth:25,children:["$",G(v,h)]})]}),o(rt,{children:j}),o(xt,{onSubmit:m=>s(m.quantity),loading:p}),d&&o(dt,{children:["In your cart: ",o("span",{children:d.quantity})]})]})]})})})}export{St as default};
