import{M as _,P as g,Q as p,O as i,H as h,z as c,B as d,C as l,E as b,y,R as v,S as T,T as f,i as E,U as m}from"./runtime.DTchB4Bm.js";import{s as w,a as x}from"./entry.C5e-7JCB.js";let n;function R(){n=void 0}function S(e){let r=null,t=i;var s;if(i){for(r=b,n===void 0&&(n=y(document.head));n!==null&&(n.nodeType!==8||n.data!==h);)n=c(n);n===null?d(!1):n=l(c(n))}i||(s=document.head.appendChild(_()));try{g(()=>e(s),p)}finally{t&&(d(!0),n=b,l(r))}}let a=!1;function D(e,r,t){const s=t[r]??(t[r]={store:null,source:T(void 0),unsubscribe:f});if(s.store!==e)if(s.unsubscribe(),s.store=e??null,e==null)s.source.v=void 0,s.unsubscribe=f;else{var u=!0;s.unsubscribe=w(e,o=>{u?s.source.v=o:m(s.source,o)}),u=!1}return E(s.source)}function F(){const e={};return v(()=>{for(var r in e)e[r].unsubscribe()}),e}function O(e){var r=a;try{return a=!1,[e(),a]}finally{a=r}}const A=()=>{const e=x;return{page:{subscribe:e.page.subscribe},navigating:{subscribe:e.navigating.subscribe},updated:e.updated}},z={subscribe(e){return A().page.subscribe(e)}};export{D as a,O as c,S as h,z as p,R as r,F as s};