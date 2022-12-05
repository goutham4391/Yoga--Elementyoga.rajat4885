import{s as l,R as t}from"./styled-components.browser.esm.f92a9794.js";import{a as p}from"./index.fedb99bc.js";import{l as r,t as d,D as o,b as c,a as m,L as g}from"./setup-react-intl.5037b415.js";import{p as n}from"./index.71ea8908.js";import{I as u}from"./index.7daa47bc.js";import{d as f}from"./deviceSizes.c239999b.js";import{F as h}from"./message.6b98dd87.js";const x=l.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  label {
    color: #bebebe;
  }
  @media ${f.mobile} {
    display: block;

    label {
      margin-top: 1rem;
    }
  }
`,L=l.select`
  margin-left: 8px;
  border-radius: 3px;
  height: 30px;
  width: 100px;
  padding: 0 5px;
`,i=a=>t.createElement(u,{locale:r(),messages:d(r()),textComponent:"span"},t.createElement(x,{"data-testid":"language-switcher"},t.createElement(h,{id:"site.language",defaultMessage:"Language",children:e=>t.createElement("label",{htmlFor:"language-switcher"},e,":")}),t.createElement(L,{id:"language-switcher",defaultValue:r().toLowerCase().slice(0,2),onChange:b},w(a)))),w=a=>{const e=a.supportedLocales;return e.indexOf(o)===-1&&e.push(o),e.sort().map(s=>t.createElement("option",{key:s,value:s},y(s)))},y=a=>{let e=c(a);return e.split("")[0].toUpperCase()+e.slice(1,e.length)},b=a=>{const e=a.target.value;m.set(g,e,{expires:p(new Date,20)}),window.location.pathname=window.location.pathname};i.propTypes={supportedLocales:n.exports.arrayOf(n.exports.string).isRequired};i.defaultProps={supportedLocales:[]};export{i as L};
//# sourceMappingURL=LanguageSwitcher.347231b5.js.map
