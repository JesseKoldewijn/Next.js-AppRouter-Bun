if(!self.define){let e,s={};const a=(a,n)=>(a=new URL(a+".js",n).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(n,t)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let c={};const o=e=>a(e,i),r={module:{uri:i},exports:c,require:o};s[i]=Promise.all(n.map((e=>r[e]||o(e)))).then((e=>(t(...e),c)))}}define(["./workbox-7028bf80"],(function(e){"use strict";importScripts(),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/IuuUDWb3md1O6J67sxwIU/_buildManifest.js",revision:"c690c2a777960624793a17ee243b5bbd"},{url:"/_next/static/IuuUDWb3md1O6J67sxwIU/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/framework-ac88a2a245aea9ab.js",revision:"ac88a2a245aea9ab"},{url:"/_next/static/chunks/main-43f4e5a0264ade5e.js",revision:"43f4e5a0264ade5e"},{url:"/_next/static/chunks/pages/_app-5e02a7a8dd173ebc.js",revision:"5e02a7a8dd173ebc"},{url:"/_next/static/chunks/pages/_error-23e9466c231f0bf1.js",revision:"23e9466c231f0bf1"},{url:"/_next/static/chunks/pages/about-a991104276ae1f2e.js",revision:"a991104276ae1f2e"},{url:"/_next/static/chunks/pages/index-c100cdcc184d6533.js",revision:"c100cdcc184d6533"},{url:"/_next/static/chunks/pages/projects-b055ebedcad21339.js",revision:"b055ebedcad21339"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-87b3a303122f2f0d.js",revision:"87b3a303122f2f0d"},{url:"/_next/static/css/de3156db0dbb6d13.css",revision:"de3156db0dbb6d13"},{url:"/about.txt",revision:"a3dcda3747f2292a947b961575d75366"},{url:"/android-chrome-192x192.png",revision:"8935b72f1f7800037afa2b9f284192ce"},{url:"/android-chrome-512x512.png",revision:"fd010b21857d0fd9a3d323dfe4046c9f"},{url:"/apple-touch-icon.png",revision:"8fdf01ab285b783d12ad263deb403792"},{url:"/favicon-16x16.png",revision:"aabe68469f56015a2aee3e2351b692ff"},{url:"/favicon-32x32.png",revision:"9f1c46444a6e0db1b6cc0e8c40071383"},{url:"/favicon.ico",revision:"db93209e7161b8a3bace6d4221cde1c5"},{url:"/manifest.webmanifest",revision:"28bb11265afce276d9749b17dd552665"},{url:"/robots.txt",revision:"b2ff5cef0c40cd2cdcc2e5cfb9cd7ca7"},{url:"/sitemap.xml",revision:"83dafcac856f2866d9000065806a78b2"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:n})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
