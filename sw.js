if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,r)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let o={};const l=e=>i(e,t),c={module:{uri:t},exports:o,require:l};s[t]=Promise.all(n.map((e=>c[e]||l(e)))).then((e=>(r(...e),o)))}}define(["./workbox-fa446783"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-6eeb7663.js",revision:null},{url:"assets/index-a526a390.css",revision:null},{url:"index.html",revision:"00c612c9de96767e4ef76884f5a2a0c6"},{url:"registerSW.js",revision:"3892ae1f1b9bee9d71675526675cff5e"},{url:"assets/images/logo187.webp",revision:"111222fc0630af3f196ce9469ec7e8e4"},{url:"manifest.webmanifest",revision:"1d13fe541a36ac7d21745bedce568e63"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
