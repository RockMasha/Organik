import{r as e,s as n,T as i,a2 as o,aa as a,u as t,k as r}from"./index-Dn5vD4rF.js";import"./sonner-DKp8VmbJ.js";import"./zod-DL37wdzu.js";const d=n.section`
  display: flex;
  flex-direction: column;
  align-items: end;
  margin-top: 30px;
  padding: ${e(60,100,768,1440)} 20px
    ${e(70,115,768,1440)};
  text-align: end;
  background-size: cover;
  background-repeat: no-repeat;

  @media (min-width: 768px) {
    padding: ${e(100,160,768,1440)};
    ${e(20,30,768,1440)};
    ${e(115,170,768,1440)};
    ${e(20,840,768,1440)};
  }

  @media (min-width: 1440px) {
    padding: 160px ${e(30,307,1440,1920)} 170px
      ${e(840,1105,1440,1920)};
    text-align: left;
  }

  ${a("404")}
`,l=n(i)`
  letter-spacing: 0.36px;
  margin-top: 10px;
`,p=n(o)`
  margin-top: 30px;
`,s=n.h1`
  color: var(--color-green-100);
  line-height: 0.8;
  font-size: ${e(100,220,320,768)};
  font-weight: 700;

  @media (min-width: 768px) {
    font-size: ${e(220,300,768,1440)};
  }

  @media (min-width: 1440px) {
    font-size: 300px;
  }
`;function c(){return t(d,{children:[t(s,{children:"404"}),t(r,{type:"h1",children:"Page Not Found"}),t(l,{type:"normal",children:"The page you are looking for doesn't exist or has been moved"}),t(p,{link:"home",variant:"blue",arrow:!0,size:"flattened",children:"Go To Home Page"})]})}function h(){return t("main",{children:t(c,{})})}export{h as default};
