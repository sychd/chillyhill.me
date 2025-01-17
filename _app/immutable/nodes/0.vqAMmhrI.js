var Lt=Object.defineProperty;var tt=a=>{throw TypeError(a)};var wt=(a,t,n)=>t in a?Lt(a,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):a[t]=n;var at=(a,t,n)=>wt(a,typeof t!="symbol"?t+"":t,n),Tt=(a,t,n)=>t.has(a)||tt("Cannot "+n);var J=(a,t,n)=>(Tt(a,t,"read from private field"),n?n.call(a):t.get(a)),et=(a,t,n)=>t.has(a)?tt("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(a):t.set(a,n);import{d as U,a as b,t as S,b as Pt}from"../chunks/disclose-version.D24Donld.js";import{aI as Ct,aJ as Et,aK as At,d as Rt,h as V,f as gt,o as St,n as Nt,l as $t,at as Ut,N as Ot,aL as Ft,aM as It,ai as Bt,X as jt,q as rt,aN as Dt,C as Mt,O,aO as qt,a7 as nt,a8 as st,B as zt,aP as Gt,p as j,aQ as y,aR as vt,T as A,a as D,t as I,_ as u,aS as R,am as T,$ as E,ap as ht,c as L,r as w,s as $}from"../chunks/runtime.D0Eux3pY.js";import{b as Ht,h as mt,e as Kt,s as Jt}from"../chunks/render.BR0BF3Vx.js";import{i as M}from"../chunks/if.CfBZslrq.js";import{s as Vt}from"../chunks/snippet.jpzZWUrQ.js";import{s as _t,n as pt,p as F,b as bt,c as W,d as Y,e as Q,a as z,i as Wt}from"../chunks/i18n.DVfF2Rjq.js";import"../chunks/legacy.DCSAwivz.js";import{i as X}from"../chunks/lifecycle.BOnKsnK4.js";import{L as Yt,s as Qt,a as it,g as Xt}from"../chunks/index.BlN0fJ6l.js";import{b as G}from"../chunks/paths.0eZAwZdj.js";import{g as Zt,i as ta,b as aa}from"../chunks/entry.B8U--_zY.js";import{e as ea,i as ra}from"../chunks/each.DaDQC22D.js";import{s as H}from"../chunks/attributes.CSLP4MgI.js";function na(a,t,n){V&&gt();var r=a,e=Ut,o,s=Ct()?Et:At;Rt(()=>{s(e,e=t())&&(o&&St(o),o=Nt(()=>n(r)))}),V&&(r=$t)}function sa(a,t,n,r,e){var g;V&&gt();var o=(g=t.$$slots)==null?void 0:g[n],s=!1;o===!0&&(o=t.children,s=!0),o===void 0||o(a,s?()=>r:r)}function ia(a,t,n){if(n){if(a.classList.contains(t))return;a.classList.add(t)}else{if(!a.classList.contains(t))return;a.classList.remove(t)}}const oa=()=>performance.now(),C={tick:a=>requestAnimationFrame(a),now:()=>oa(),tasks:new Set};function yt(a){C.tasks.forEach(t=>{t.c(a)||(C.tasks.delete(t),t.f())}),C.tasks.size!==0&&C.tick(yt)}function ca(a){let t;return C.tasks.size===0&&C.tick(yt),{promise:new Promise(n=>{C.tasks.add(t={c:a,f:n})}),abort(){C.tasks.delete(t)}}}function ot(a,t){a.dispatchEvent(new CustomEvent(t))}function la(a){if(a==="float")return"cssFloat";if(a==="offset")return"cssOffset";if(a.startsWith("--"))return a;const t=a.split("-");return t.length===1?t[0]:t[0]+t.slice(1).map(n=>n[0].toUpperCase()+n.slice(1)).join("")}function ct(a){const t={},n=a.split(";");for(const r of n){const[e,o]=r.split(":");if(!e||o===void 0)break;const s=la(e.trim());t[s]=o.trim()}return t}const ua=a=>a;function lt(a,t,n,r){var e=(a&qt)!==0,o="in",s,g=t.inert,i,f;function v(){var l=zt,_=rt;nt(null),st(null);try{return s??(s=n()(t,(r==null?void 0:r())??{},{direction:o}))}finally{nt(l),st(_)}}var h={is_global:e,in(){t.inert=g,i==null||i.abort(),ot(t,"introstart"),i=xt(t,v(),f,1,()=>{ot(t,"introend"),i==null||i.abort(),i=s=void 0})},out(l){{l==null||l(),s=void 0;return}},stop:()=>{i==null||i.abort()}},m=rt;if((m.transitions??(m.transitions=[])).push(h),Ht){var d=e;if(!d){for(var c=m.parent;c&&c.f&Ot;)for(;(c=c.parent)&&!(c.f&Ft););d=!c||(c.f&It)!==0}d&&Bt(()=>{jt(()=>h.in())})}}function xt(a,t,n,r,e){if(Dt(t)){var o,s=!1;return Mt(()=>{if(!s){var l=t({direction:"in"});o=xt(a,l,n,r,e)}}),{abort:()=>{s=!0,o==null||o.abort()},deactivate:()=>o.deactivate(),reset:()=>o.reset(),t:()=>o.t()}}if(!(t!=null&&t.duration))return e(),{abort:O,deactivate:O,reset:O,t:()=>r};const{delay:g=0,css:i,tick:f,easing:v=ua}=t;var h=[];if(f&&f(0,1),i){var m=ct(i(0,1));h.push(m,m)}var d=()=>1-r,c=a.animate(h,{duration:g});return c.onfinish=()=>{var l=1-r,_=r-l,x=t.duration*Math.abs(_),P=[];if(x>0){if(i)for(var k=Math.ceil(x/16.666666666666668),p=0;p<=k;p+=1){var q=l+_*v(p/k),K=i(q,1-q);P.push(ct(K))}d=()=>{var N=c.currentTime;return l+_*v(N/x)},f&&ca(()=>{if(c.playState!=="running")return!1;var N=d();return f(N,1-N),!0})}c=a.animate(P,{duration:x,fill:"forwards"}),c.onfinish=()=>{d=()=>r,f==null||f(r,1-r),e()}},{abort:()=>{c&&(c.cancel(),c.effect=null,c.onfinish=O)},deactivate:()=>{e=O},reset:()=>{},t:()=>d()}}const fa=Gt;function da(a,t){return a.protocol!==t.protocol?t.href:t.password||t.username?"//"+[t.username,t.password].filter(Boolean).join(":")+"@"+t.host+t.pathname+t.search+t.hash:a.host!==t.host?"//"+t.host+t.pathname+t.search+t.hash:t.pathname+t.search+t.hash}function ga(a,t,n){const r=new URL(n??"/",t).pathname;return a.origin!==t.origin||!a.pathname.startsWith(r)}var va=S('<link rel="alternate">');function ha(a,t){j(t,!1);const n=_t(),r=()=>bt(W,"$page",n),e=R(),o=R(),s=R(),g=pt(G,new URL(r().url))||"/";let i=F(t,"availableLanguageTags",8),f=F(t,"strategy",8),v=F(t,"currentLang",8);const h=(c,l)=>{const _=[];for(const x of i()){const P=l.getLocalisedPath(c,x),k=Q(P,g,void 0),p=new URL(k,new URL(r().url)).href;_.push(p)}return _};y(()=>r(),()=>{T(e,Y(r().url.pathname,g)[0])}),y(()=>(E(f()),u(e),E(v())),()=>{T(o,f().getCanonicalPath(u(e),v()))}),y(()=>(u(o),E(f())),()=>{T(s,h(u(o),f()))}),vt(),X();var m=U(),d=A(m);M(d,()=>i().length>=1,c=>{var l=U(),_=A(l);ea(_,1,()=>u(s),ra,(x,P,k)=>{var p=va();I(()=>{H(p,"hreflang",i()[k]),H(p,"href",u(P))}),b(x,p)}),b(c,l)}),b(a,m),D()}const ma=(a,t)=>`${Yt}=${a};Path=${t};SameSite=lax;Max-Age=31557600`;function _a(a,t){j(t,!1);const n=_t(),r=()=>bt(W,"$page",n),e=R(),o=R(),s=pt(G,new URL(r().url))||"/";let g=F(t,"languageTag",24,()=>{}),i=F(t,"i18n",8),f=R(0);function v(d,c){try{const l=new URL(Zt(W).url),[_,x]=Y(l.pathname,s),P=i().strategy.getCanonicalPath(_,u(e)),k=new URL(l);k.pathname=Q(P,s,x);const p=new URL(d,new URL(k));if(ga(p,l,s)||i().config.exclude(p.pathname))return d;const q=c??u(e),[K,N]=Y(p.pathname,s),kt=i().strategy.getLocalisedPath(K,q),Z=new URL(p);return Z.pathname=Q(kt,s,N),da(l,Z)}catch{return d}}Qt({translateHref:v}),y(()=>(E(g()),E(i()),r()),()=>{T(e,g()??i().getLanguageFromUrl(r().url))}),y(()=>(E(i()),u(e)),()=>{i().config.runtime.setLanguageTag(u(e))}),y(()=>u(e),()=>{document.documentElement.lang=u(e)}),y(()=>(E(i()),u(e)),()=>{document.documentElement.dir=i().config.textDirection[u(e)]??"ltr"}),y(()=>(u(e),u(f)),()=>{u(e)&&T(f,u(f)+1)}),y(()=>(u(e),u(f),it),()=>{u(e)&&(u(f)>1||fa)&&ta(it)}),y(()=>u(e),()=>{T(o,u(e))}),y(()=>u(e),()=>{document.cookie=ma(u(e),s)}),vt(),X();var h=U();mt(d=>{var c=U(),l=A(c);M(l,()=>i().config.seo.noAlternateLinks!==!0&&!i().config.exclude(r().url.pathname),_=>{ha(_,{get availableLanguageTags(){return i().config.runtime.availableLanguageTags},get strategy(){return i().strategy},get currentLang(){return u(e)}})}),b(d,c)});var m=A(h);na(m,()=>u(o),d=>{var c=U(),l=A(c);sa(l,t,"default",{}),b(d,c)}),b(a,h),D()}const pa=!0,ba="always",Ha=Object.freeze(Object.defineProperty({__proto__:null,prerender:pa,trailingSlash:ba},Symbol.toStringTag,{value:"Module"}));function ya(a){const t=a-1;return t*t*t+1}function ut(a){const t=typeof a=="string"&&a.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);return t?[parseFloat(t[1]),t[2]||"px"]:[a,"px"]}function ft(a,{delay:t=0,duration:n=400,easing:r=ya,x:e=0,y:o=0,opacity:s=0}={}){const g=getComputedStyle(a),i=+g.opacity,f=g.transform==="none"?"":g.transform,v=i*(1-s),[h,m]=ut(e),[d,c]=ut(o);return{delay:t,duration:n,easing:r,css:(l,_)=>`
			transform: ${f} translate(${(1-l)*h}${m}, ${(1-l)*d}${c});
			opacity: ${i-v*_}`}}var B;class xa{constructor(){et(this,B,ht(z(localStorage.getItem("color-scheme"))));at(this,"toggle",()=>{const t=this.current==="dark"?"light":"dark";document.documentElement.className=t,localStorage.setItem("color-scheme",t),this.current=t})}get current(){return u(J(this,B))}set current(t){T(J(this,B),z(t))}}B=new WeakMap;const dt=new xa;var ka=S("<div>☀️</div>"),La=S("<div>🌙</div>"),wa=S('<button aria-label="Toggle theme"><!></button>');function Ta(a,t){j(t,!1);let n=R(!1);setTimeout(()=>T(n,!0)),X();var r=wa(),e=L(r);M(e,()=>dt.current==="dark",o=>{var s=ka();lt(1,s,()=>ft,()=>({x:10})),b(o,s)},o=>{var s=La();lt(1,s,()=>ft,()=>({x:-10})),b(o,s)}),w(r),I(()=>ia(r,"invisible",!u(n))),Kt("click",r,function(...o){var s;(s=dt.toggle)==null||s.apply(this,o)}),b(a,r),D()}var Pa=S('<a class="link h-fit"><button class="rounded-md bg-cyan-700/10 px-4 py-2 text-sm text-primary transition-colors hover:bg-cyan-800/20 dark:bg-secondary/30 dark:text-secondary dark:hover:bg-secondary/20">🏠</button></a>'),Ca=S('<header class="relative z-10 flex h-14 items-center justify-between bg-gradient-to-b from-primary/10 to-transparent py-2"><section class="container flex flex-shrink-0 items-center justify-between gap-4 text-nowrap"><a class="flex items-center font-logo text-3xl text-cyan-900 dark:text-secondary">Chillyhill ⛰︎</a> <div class="flex flex-nowrap items-center gap-4"><!> <!></div></section></header>');function Ea(a,t){j(t,!0);const n=["/","uk/","de/","ru/"],r=()=>window.location.pathname;let e=ht(z(r()));aa(()=>T(e,z(r())));const o=Xt(),[s,g]=o;var i=Ca(),f=L(i),v=L(f);I(()=>H(v,"href",s(`${G}/`,void 0)));var h=$(v,2),m=L(h);M(m,()=>!n.includes(u(e)),c=>{var l=Pa();I(()=>H(l,"href",s(G+"/",void 0))),b(c,l)});var d=$(m,2);Ta(d,{}),w(h),w(f),w(i),b(a,i),D()}var Aa=Pt('<script defer="" src="https://cloud.umami.is/script.js" data-website-id="6f688109-6024-4733-9aad-826681849c91"><\/script><!---->',1),Ra=S(`<div class="flex min-h-screen flex-col bg-gray-50 dark:bg-gray-800"><!> <main class="flex flex-grow flex-col"><!></main> <footer class="relative h-16 bg-[url('/images/background-banner.svg')] bg-cover bg-center"><div class="absolute h-6 w-full bg-gradient-to-t from-transparent to-gray-50 dark:to-gray-800"></div> <section class="container"><div class="flex pt-8 text-xs text-cyan-900 dark:text-secondary"> </div></section></footer></div>`);function Ka(a,t){j(t,!0),mt(n=>{var r=U(),e=A(r);M(e,()=>!0,o=>{var s=Aa(),g=$(A(s));b(o,s)}),b(n,r)}),_a(a,{i18n:Wt,children:(n,r)=>{var e=Ra(),o=L(e);Ea(o,{});var s=$(o,2),g=L(s);Vt(g,()=>t.children),w(s);var i=$(s,2),f=$(L(i),2),v=L(f),h=L(v);I(()=>Jt(h,`Denys Sych © ${new Date().getFullYear()??""}`)),w(v),w(f),w(i),w(e),b(n,e)},$$slots:{default:!0}}),D()}export{Ka as component,Ha as universal};
