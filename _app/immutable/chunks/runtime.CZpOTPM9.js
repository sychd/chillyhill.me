const Ot=!1;var kt=Array.isArray,Ct=Array.from,Nt=Object.defineProperty,un=Object.getOwnPropertyDescriptor,Kn=Object.getOwnPropertyDescriptors,bt=Object.prototype,Pt=Array.prototype,$n=Object.getPrototypeOf;const Ft=()=>{};function qt(n){return n()}function Zn(n){for(var t=0;t<n.length;t++)n[t]()}const y=2,vn=4,Y=8,nn=16,g=32,Z=64,D=128,U=256,p=512,x=1024,b=2048,N=4096,H=8192,zn=16384,pn=32768,Mt=65536,Jn=1<<18,hn=1<<19,on=Symbol("$state"),Lt=Symbol("legacy props"),Yt=Symbol("");function dn(n){return n===this.v}function Wn(n,t){return n!=n?t==t:n!==t||n!==null&&typeof n=="object"||typeof n=="function"}function Ht(n,t){return n!==t}function En(n){return!Wn(n,this.v)}function Xn(n){throw new Error("effect_in_teardown")}function Qn(){throw new Error("effect_in_unowned_derived")}function nt(n){throw new Error("effect_orphan")}function tt(){throw new Error("effect_update_depth_exceeded")}function jt(){throw new Error("hydration_failed")}function Bt(n){throw new Error("props_invalid_value")}function Ut(){throw new Error("state_descriptors_fixed")}function Vt(){throw new Error("state_prototype_fixed")}function rt(){throw new Error("state_unsafe_local_read")}function et(){throw new Error("state_unsafe_mutation")}let z=!1;function Gt(){z=!0}function tn(n){return{f:0,v:n,reactions:null,equals:dn,version:0}}function Kt(n){return yn(tn(n))}function at(n,t=!1){var e;const r=tn(n);return t||(r.equals=En),z&&o!==null&&o.l!==null&&((e=o.l).s??(e.s=[])).push(r),r}function $t(n,t=!1){return yn(at(n,t))}function yn(n){return i!==null&&i.f&y&&(T===null?wt([n]):T.push(n)),n}function st(n,t){return i!==null&&sn()&&i.f&(y|nn)&&(T===null||!T.includes(n))&&et(),lt(n,t)}function lt(n,t){return n.equals(t)||(n.v=t,n.version=Yn(),wn(n,x),sn()&&u!==null&&u.f&p&&!(u.f&g)&&(c!==null&&c.includes(n)?(m(u,x),J(u)):A===null?mt([n]):A.push(n))),t}function wn(n,t){var r=n.reactions;if(r!==null)for(var e=sn(),a=r.length,s=0;s<a;s++){var l=r[s],f=l.f;f&x||!e&&l===u||(m(l,t),f&(p|D)&&(f&y?wn(l,b):J(l)))}}const Zt=1,zt=2,Jt=16,Wt=1,Xt=2,Qt=4,nr=8,tr=16,rr=1,er=2,ut="[",ot="[!",it="]",mn={},ar=Symbol();function Tn(n){console.warn("hydration_mismatch")}let S=!1;function sr(n){S=n}let w;function V(n){if(n===null)throw Tn(),mn;return w=n}function lr(){return V(I(w))}function ur(n){if(S){if(I(w)!==null)throw Tn(),mn;w=n}}function or(n=1){if(S){for(var t=n,r=w;t--;)r=I(r);w=r}}function ir(){for(var n=0,t=w;;){if(t.nodeType===8){var r=t.data;if(r===it){if(n===0)return t;n-=1}else(r===ut||r===ot)&&(n+=1)}var e=I(t);t.remove(),t=e}}var fn,gn,An;function fr(){if(fn===void 0){fn=window;var n=Element.prototype,t=Node.prototype;gn=un(t,"firstChild").get,An=un(t,"nextSibling").get,n.__click=void 0,n.__className="",n.__attributes=null,n.__styles=null,n.__e=void 0,Text.prototype.__t=void 0}}function xn(n=""){return document.createTextNode(n)}function W(n){return gn.call(n)}function I(n){return An.call(n)}function _r(n,t){if(!S)return W(n);var r=W(w);return r===null&&(r=w.appendChild(xn())),V(r),r}function cr(n,t){if(!S){var r=W(n);return r instanceof Comment&&r.data===""?I(r):r}return w}function vr(n,t=1,r=!1){let e=S?w:n;for(var a;t--;)a=e,e=I(e);if(!S)return e;var s=e==null?void 0:e.nodeType;if(r&&s!==3){var l=xn();return e===null?a==null||a.after(l):e.before(l),V(l),l}return V(e),e}function pr(n){n.textContent=""}function ft(n){var t=y|x;u===null?t|=D:u.f|=hn;var r=i!==null&&i.f&y?i:null;const e={children:null,ctx:o,deps:null,equals:dn,f:t,fn:n,reactions:null,v:null,version:0,parent:r??u};return r!==null&&(r.children??(r.children=[])).push(e),e}function hr(n){const t=ft(n);return t.equals=En,t}function Rn(n){var t=n.children;if(t!==null){n.children=null;for(var r=0;r<t.length;r+=1){var e=t[r];e.f&y?rn(e):F(e)}}}function _t(n){for(var t=n.parent;t!==null;){if(!(t.f&y))return t;t=t.parent}return null}function Sn(n){var t,r=u;$(_t(n));try{Rn(n),t=Hn(n)}finally{$(r)}return t}function Dn(n){var t=Sn(n),r=(O||n.f&D)&&n.deps!==null?b:p;m(n,r),n.equals(t)||(n.v=t,n.version=Yn())}function rn(n){Rn(n),L(n,0),m(n,H),n.v=n.children=n.deps=n.ctx=n.reactions=null}function In(n){u===null&&i===null&&nt(),i!==null&&i.f&D&&Qn(),an&&Xn()}function ct(n,t){var r=t.last;r===null?t.last=t.first=n:(r.next=n,n.prev=r,t.last=n)}function P(n,t,r,e=!0){var a=(n&Z)!==0,s=u,l={ctx:o,deps:null,deriveds:null,nodes_start:null,nodes_end:null,f:n|x,first:null,fn:t,last:null,next:null,parent:a?null:s,prev:null,teardown:null,transitions:null,version:0};if(r){var f=k;try{_n(!0),j(l),l.f|=zn}catch(_){throw F(l),_}finally{_n(f)}}else t!==null&&J(l);var E=r&&l.deps===null&&l.first===null&&l.nodes_start===null&&l.teardown===null&&(l.f&hn)===0;if(!E&&!a&&e&&(s!==null&&ct(l,s),i!==null&&i.f&y)){var h=i;(h.children??(h.children=[])).push(l)}return l}function dr(n){const t=P(Y,null,!1);return m(t,p),t.teardown=n,t}function Er(n){In();var t=u!==null&&(u.f&g)!==0&&o!==null&&!o.m;if(t){var r=o;(r.e??(r.e=[])).push({fn:n,effect:u,reaction:i})}else{var e=On(n);return e}}function yr(n){return In(),en(n)}function wr(n){const t=P(Z,n,!0);return()=>{F(t)}}function On(n){return P(vn,n,!1)}function mr(n,t){var r=o,e={effect:null,ran:!1};r.l.r1.push(e),e.effect=en(()=>{n(),!e.ran&&(e.ran=!0,st(r.l.r2,!0),St(t))})}function Tr(){var n=o;en(()=>{if(Rt(n.l.r2)){for(var t of n.l.r1){var r=t.effect;r.f&p&&m(r,b),q(r)&&j(r),t.ran=!1}n.l.r2.v=!1}})}function en(n){return P(Y,n,!0)}function gr(n){return vt(n)}function vt(n,t=0){return P(Y|nn|t,n,!0)}function Ar(n,t=!0){return P(Y|g,n,!0,t)}function kn(n){var t=n.teardown;if(t!==null){const r=an,e=i;cn(!0),K(null);try{t.call(null)}finally{cn(r),K(e)}}}function Cn(n){var t=n.deriveds;if(t!==null){n.deriveds=null;for(var r=0;r<t.length;r+=1)rn(t[r])}}function Nn(n,t=!1){var r=n.first;for(n.first=n.last=null;r!==null;){var e=r.next;F(r,t),r=e}}function pt(n){for(var t=n.first;t!==null;){var r=t.next;t.f&g||F(t),t=r}}function F(n,t=!0){var r=!1;if((t||n.f&Jn)&&n.nodes_start!==null){for(var e=n.nodes_start,a=n.nodes_end;e!==null;){var s=e===a?null:I(e);e.remove(),e=s}r=!0}Nn(n,t&&!r),Cn(n),L(n,0),m(n,H);var l=n.transitions;if(l!==null)for(const E of l)E.stop();kn(n);var f=n.parent;f!==null&&f.first!==null&&bn(n),n.next=n.prev=n.teardown=n.ctx=n.deps=n.parent=n.fn=n.nodes_start=n.nodes_end=null}function bn(n){var t=n.parent,r=n.prev,e=n.next;r!==null&&(r.next=e),e!==null&&(e.prev=r),t!==null&&(t.first===n&&(t.first=e),t.last===n&&(t.last=r))}function xr(n,t){var r=[];Pn(n,r,!0),ht(r,()=>{F(n),t&&t()})}function ht(n,t){var r=n.length;if(r>0){var e=()=>--r||t();for(var a of n)a.out(e)}else t()}function Pn(n,t,r){if(!(n.f&N)){if(n.f^=N,n.transitions!==null)for(const l of n.transitions)(l.is_global||r)&&t.push(l);for(var e=n.first;e!==null;){var a=e.next,s=(e.f&pn)!==0||(e.f&g)!==0;Pn(e,t,s?r:!1),e=a}}}function Rr(n){Fn(n,!0)}function Fn(n,t){if(n.f&N){q(n)&&j(n),n.f^=N;for(var r=n.first;r!==null;){var e=r.next,a=(r.f&pn)!==0||(r.f&g)!==0;Fn(r,a?t:!1),r=e}if(n.transitions!==null)for(const s of n.transitions)(s.is_global||t)&&s.in()}}let G=!1,X=[];function qn(){G=!1;const n=X.slice();X=[],Zn(n)}function Sr(n){G||(G=!0,queueMicrotask(qn)),X.push(n)}function dt(){G&&qn()}function Et(n){throw new Error("lifecycle_outside_component")}const Mn=0,yt=1;let B=Mn,M=!1,k=!1,an=!1;function _n(n){k=n}function cn(n){an=n}let R=[],C=0;let i=null;function K(n){i=n}let u=null;function $(n){u=n}let T=null;function wt(n){T=n}let c=null,d=0,A=null;function mt(n){A=n}let Ln=0,O=!1,o=null;function Yn(){return++Ln}function sn(){return!z||o!==null&&o.l===null}function q(n){var l,f;var t=n.f;if(t&x)return!0;if(t&b){var r=n.deps,e=(t&D)!==0;if(r!==null){var a;if(t&U){for(a=0;a<r.length;a++)((l=r[a]).reactions??(l.reactions=[])).push(n);n.f^=U}for(a=0;a<r.length;a++){var s=r[a];if(q(s)&&Dn(s),e&&u!==null&&!O&&!((f=s==null?void 0:s.reactions)!=null&&f.includes(n))&&(s.reactions??(s.reactions=[])).push(n),s.version>n.version)return!0}}e||m(n,p)}return!1}function Tt(n,t,r){throw n}function Hn(n){var ln;var t=c,r=d,e=A,a=i,s=O,l=T,f=o,E=n.f;c=null,d=0,A=null,i=E&(g|Z)?null:n,O=!k&&(E&D)!==0,T=null,o=n.ctx;try{var h=(0,n.fn)(),_=n.deps;if(c!==null){var v;if(L(n,d),_!==null&&d>0)for(_.length=d+c.length,v=0;v<c.length;v++)_[d+v]=c[v];else n.deps=_=c;if(!O)for(v=d;v<_.length;v++)((ln=_[v]).reactions??(ln.reactions=[])).push(n)}else _!==null&&d<_.length&&(L(n,d),_.length=d);return h}finally{c=t,d=r,A=e,i=a,O=s,T=l,o=f}}function gt(n,t){let r=t.reactions;if(r!==null){var e=r.indexOf(n);if(e!==-1){var a=r.length-1;a===0?r=t.reactions=null:(r[e]=r[a],r.pop())}}r===null&&t.f&y&&(c===null||!c.includes(t))&&(m(t,b),t.f&(D|U)||(t.f^=U),L(t,0))}function L(n,t){var r=n.deps;if(r!==null)for(var e=t;e<r.length;e++)gt(n,r[e])}function j(n){var t=n.f;if(!(t&H)){m(n,p);var r=u;u=n;try{t&nn?pt(n):Nn(n),Cn(n),kn(n);var e=Hn(n);n.teardown=typeof e=="function"?e:null,n.version=Ln}catch(a){Tt(a)}finally{u=r}}}function jn(){C>1e3&&(C=0,tt()),C++}function Bn(n){var t=n.length;if(t!==0){jn();var r=k;k=!0;try{for(var e=0;e<t;e++){var a=n[e];a.f&p||(a.f^=p);var s=[];Un(a,s),At(s)}}finally{k=r}}}function At(n){var t=n.length;if(t!==0)for(var r=0;r<t;r++){var e=n[r];!(e.f&(H|N))&&q(e)&&(j(e),e.deps===null&&e.first===null&&e.nodes_start===null&&(e.teardown===null?bn(e):e.fn=null))}}function xt(){if(M=!1,C>1001)return;const n=R;R=[],Bn(n),M||(C=0)}function J(n){B===Mn&&(M||(M=!0,queueMicrotask(xt)));for(var t=n;t.parent!==null;){t=t.parent;var r=t.f;if(r&(Z|g)){if(!(r&p))return;t.f^=p}}R.push(t)}function Un(n,t){var r=n.first,e=[];n:for(;r!==null;){var a=r.f,s=(a&g)!==0,l=s&&(a&p)!==0;if(!l&&!(a&N))if(a&Y){s?r.f^=p:q(r)&&j(r);var f=r.first;if(f!==null){r=f;continue}}else a&vn&&e.push(r);var E=r.next;if(E===null){let v=r.parent;for(;v!==null;){if(n===v)break n;var h=v.next;if(h!==null){r=h;continue n}v=v.parent}}r=E}for(var _=0;_<e.length;_++)f=e[_],t.push(f),Un(f,t)}function Vn(n){var t=B,r=R;try{jn();const a=[];B=yt,R=a,M=!1,Bn(r);var e=n==null?void 0:n();return dt(),(R.length>0||a.length>0)&&Vn(),C=0,e}finally{B=t,R=r}}async function Dr(){await Promise.resolve(),Vn()}function Rt(n){var _;var t=n.f,r=(t&y)!==0;if(r&&t&H){var e=Sn(n);return rn(n),e}if(i!==null){T!==null&&T.includes(n)&&rt();var a=i.deps;c===null&&a!==null&&a[d]===n?d++:c===null?c=[n]:c.push(n),A!==null&&u!==null&&u.f&p&&!(u.f&g)&&A.includes(n)&&(m(u,x),J(u))}else if(r&&n.deps===null)for(var s=n,l=s.parent,f=s;l!==null;)if(l.f&y){var E=l;f=E,l=E.parent}else{var h=l;(_=h.deriveds)!=null&&_.includes(f)||(h.deriveds??(h.deriveds=[])).push(f);break}return r&&(s=n,q(s)&&Dn(s)),n.v}function St(n){const t=i;try{return i=null,n()}finally{i=t}}const Dt=~(x|b|p);function m(n,t){n.f=n.f&Dt|t}function Ir(n){return Gn().get(n)}function Or(n,t){return Gn().set(n,t),t}function Gn(n){return o===null&&Et(),o.c??(o.c=new Map(It(o)||void 0))}function It(n){let t=n.p;for(;t!==null;){const r=t.c;if(r!==null)return r;t=t.p}return null}function kr(n,t=!1,r){o={p:o,c:null,e:null,m:!1,s:n,x:null,l:null},z&&!t&&(o.l={s:null,u:null,r1:[],r2:tn(!1)})}function Cr(n){const t=o;if(t!==null){const l=t.e;if(l!==null){var r=u,e=i;t.e=null;try{for(var a=0;a<l.length;a++){var s=l[a];$(s.effect),K(s.reaction),On(s.fn)}}finally{$(r),K(e)}}o=t.p,t.m=!0}return{}}function Nr(n){if(!(typeof n!="object"||!n||n instanceof EventTarget)){if(on in n)Q(n);else if(!Array.isArray(n))for(let t in n){const r=n[t];typeof r=="object"&&r&&on in r&&Q(r)}}}function Q(n,t=new Set){if(typeof n=="object"&&n!==null&&!(n instanceof EventTarget)&&!t.has(n)){t.add(n),n instanceof Date&&n.getTime();for(let e in n)try{Q(n[e],t)}catch{}const r=$n(n);if(r!==Object.prototype&&r!==Array.prototype&&r!==Map.prototype&&r!==Set.prototype&&r!==Date.prototype){const e=Kn(r);for(let a in e){const s=e[a].get;if(s)try{s.call(n)}catch{}}}}}export{Sr as $,lr as A,V as B,Gt as C,Nt as D,K as E,$ as F,kt as G,i as H,fr as I,ut as J,I as K,Yt as L,mn as M,sr as N,it as O,Tn as P,jt as Q,pr as R,Ct as S,rr as T,wr as U,Ar as V,vt as W,pn as X,xr as Y,On as Z,en as _,Cr as a,on as a0,Lt as a1,st as a2,Vn as a3,at as a4,Et as a5,z as a6,cr as a7,Dr as a8,Kt as a9,Jn as aA,dr as aB,Bt as aC,Mt as aD,Qt as aE,En as aF,g as aG,Z as aH,Wt as aI,Xt as aJ,nr as aK,hr as aL,tr as aM,sn as aa,Ht as ab,Wn as ac,ar as ad,ot as ae,ir as af,N as ag,Rr as ah,lt as ai,Pn as aj,ht as ak,F as al,tn as am,zt as an,Zt as ao,Jt as ap,Ft as aq,Ot as ar,mr as as,Tr as at,$t as au,bt as av,Pt as aw,Ut as ax,un as ay,Vt as az,Kn as b,_r as c,Er as d,o as e,St as f,$n as g,S as h,qt as i,Zn as j,Rt as k,Nr as l,ft as m,or as n,Or as o,kr as p,Ir as q,ur as r,vr as s,gr as t,yr as u,xn as v,W as w,u as x,er as y,w as z};