if(!self.define){let e,i={};const s=(s,n)=>(s=new URL(s+".js",n).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(n,c)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(i[t])return;let r={};const f=e=>s(e,t),o={module:{uri:t},exports:r,require:f};i[t]=Promise.all(n.map((e=>o[e]||f(e)))).then((e=>(c(...e),r)))}}define(["./workbox-c11f15a2"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-6365e341.css",revision:null},{url:"assets/index-f5e9ec21.js",revision:null},{url:"index.html",revision:"f44fd5facc68a893755c74ced1140851"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"images/favicon.png",revision:"6275052b6cf906f322b5d224dfd0a2f0"},{url:"manifest.webmanifest",revision:"8446accdf77ed6d6c5c2dc0818c2d587"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"))),e.registerRoute(/(.*?)\.(woff2|woff|ttf)/,new e.CacheFirst({cacheName:"file-cache",plugins:[]}),"GET"),e.registerRoute(/(.*?)\.(webp|png|jpe?g|svg|gif|bmp|psd|tiff|tga|eps)/,new e.CacheFirst({cacheName:"image-cache",plugins:[]}),"GET")}));
