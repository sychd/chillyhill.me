import{a as u,t as g}from"../chunks/disclose-version.CgJN0qD7.js";import{p as k,a as w,c as e,t as d,r as t,s as o,_ as c}from"../chunks/runtime.CrQ4ahhK.js";import{s as P}from"../chunks/attributes.DZUwFH_e.js";import{g as F}from"../chunks/index.jzyfzcLh.js";import{s as y}from"../chunks/render.ChvF9nnw.js";import{i as A}from"../chunks/if.C_jN74km.js";import{e as D,i as H}from"../chunks/each.C2o60MNa.js";import{b as q}from"../chunks/paths.DbNUlmZ6.js";import{f as C}from"../chunks/utils.D2VCOvFc.js";var L=g("<span> </span>"),M=g('<section class="gap- flex w-full items-center"><div class="flex w-full flex-col gap-2"><a class="link text-lg font-semibold"> </a> <!></div> <div class=" dark:text-white rounded-md text-center font-semibold leading-tight text-primary"> </div></section>'),R=g('<section class="prose flex flex-col gap-4 dark:prose-invert"></section>');function T(_,n){k(n,!0);const b=F(),[h,I]=b;var r=R();D(r,21,()=>n.posts,H,(p,a)=>{var l=M(),i=e(l),s=e(i);d(()=>P(s,"href",h(q+"/"+c(a).slug,void 0)));var v=e(s,!0);t(s);var m=o(s,2);A(m,()=>c(a).description,O=>{var x=L(),S=e(x,!0);t(x),d(()=>y(S,c(a).description)),u(O,x)}),t(i);var f=o(i,2),N=e(f,!0);d(()=>y(N,C(c(a).date))),t(f),t(l),d(()=>y(v,c(a).title)),u(p,l)}),t(r),u(_,r),w()}var W=g(`<div class="flex flex-grow flex-col"><article class="relative -top-14 left-0 w-full bg-[url('/images/background-banner.svg')] bg-cover bg-center pt-14"><section class="container pb-4"><div class="prose py-4 dark:prose-invert"><h1 class="dark:via-cyan-400 dark:to-cyan-500 via-cyan-800 to-cyan-900 text-transparent from-cyan-700 inline-block bg-gradient-to-r bg-clip-text">Hello,</h1> <div class="text-gray-700 dark:text-gray-200 prose-lg"><p>My name is <i>Denys</i> and welcome to my page!</p> <p>I'm a software engineer, storyteller, thinker, hiker, and occasional couch potato. We
            may be alike in many ways, but our differences are what make us unique — and that's
            something I truly celebrate!</p> <p>Here, you'll find a collection of my creations and thoughts, and I'm excited to share
            them with you.</p></div></div></section> <div class="dark:from-gray-800 from-gray-50 to-transparent relative h-10 bg-gradient-to-t"></div></article> <article class="bg-dots -mt-[91px] flex flex-grow flex-col gap-8"><section class="container flex-grow pt-10"><div class="prose mb-4 dark:prose-invert"><h2 class="dark:text-secondary text-primary">Recent posts</h2></div> <!></section> <section class="container rounded-lg bg-opacity-80 py-4"><div class="prose dark:prose-invert"><h2 class="dark:text-secondary text-primary">Contact me</h2> <p>You can reach me out by the email. Please, remove <b>NOSPАМ.</b> prefix before sending!</p> <ul><li><a class="link !not-italic">NOSPАМ.dechillyhill&#64;proton&#46;me</a></li></ul></div></section></article></div>`);function U(_,n){k(n,!0);const b=F(),[h,I]=b;var r=W(),p=o(e(r),2),a=e(p),l=o(e(a),2);T(l,{get posts(){return n.data.posts}}),t(a);var i=o(a,2),s=e(i),v=o(e(s),4),m=e(v),f=e(m);d(()=>P(f,"href",h("mailto:NOSPАМ.dechillyhill@proton.me",void 0))),t(m),t(v),t(s),t(i),t(p),t(r),u(_,r),w()}export{U as component};