(function(e){function n(n){for(var r,u,a=n[0],i=n[1],d=n[2],l=0,p=[];l<a.length;l++)u=a[l],Object.prototype.hasOwnProperty.call(c,u)&&c[u]&&p.push(c[u][0]),c[u]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);f&&f(n);while(p.length)p.shift()();return o.push.apply(o,d||[]),t()}function t(){for(var e,n=0;n<o.length;n++){for(var t=o[n],r=!0,u=1;u<t.length;u++){var i=t[u];0!==c[i]&&(r=!1)}r&&(o.splice(n--,1),e=a(a.s=t[0]))}return e}var r={},c={app:0},o=[];function u(e){return a.p+"js/"+({}[e]||e)+"."+{"chunk-1cad3f12":"1d5a19f7","chunk-2431684f":"4971d770","chunk-cc135238":"36f302e6","chunk-297a8266":"1731e70d","chunk-2d0bd795":"6c7ae5b8","chunk-2d0c8bcc":"baddd645","chunk-2d213365":"f5d55625","chunk-2d2304e0":"f21f7c53","chunk-2d23118c":"d53953e3"}[e]+".js"}function a(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,a),t.l=!0,t.exports}a.e=function(e){var n=[],t=c[e];if(0!==t)if(t)n.push(t[2]);else{var r=new Promise((function(n,r){t=c[e]=[n,r]}));n.push(t[2]=r);var o,i=document.createElement("script");i.charset="utf-8",i.timeout=120,a.nc&&i.setAttribute("nonce",a.nc),i.src=u(e);var d=new Error;o=function(n){i.onerror=i.onload=null,clearTimeout(l);var t=c[e];if(0!==t){if(t){var r=n&&("load"===n.type?"missing":n.type),o=n&&n.target&&n.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",d.name="ChunkLoadError",d.type=r,d.request=o,t[1](d)}c[e]=void 0}};var l=setTimeout((function(){o({type:"timeout",target:i})}),12e4);i.onerror=i.onload=o,document.head.appendChild(i)}return Promise.all(n)},a.m=e,a.c=r,a.d=function(e,n,t){a.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,n){if(1&n&&(e=a(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(a.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)a.d(t,r,function(n){return e[n]}.bind(null,r));return t},a.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(n,"a",n),n},a.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},a.p="",a.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],d=i.push.bind(i);i.push=n,i=i.slice();for(var l=0;l<i.length;l++)n(i[l]);var f=d;o.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"4bf1":function(e,n,t){"use strict";t("7e5f")},"56d7":function(e,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d");var r=t("7a23"),c=t("bc3a"),o=t.n(c),u=t("2106"),a=t.n(u),i=t("7bb1"),d=t("3aa8"),l=t("cbdf"),f=t("9457");t("ac1f"),t("1276"),t("d3b7"),t("25f0"),t("5319"),t("a15b");function p(e){var n=e.toString().split(".");return n[0]=n[0].replace(/\B(?=(\d{3})+(?!\d))/g,","),n.join(".")}t("99af");function h(e){var n=new Date(1e3*e),t="".concat(n.getFullYear(),"/").concat(n.getMonth()+1,"/").concat(n.getDate());return t}t("7b17");function s(e,n){var t=Object(r["x"])("router-view");return Object(r["s"])(),Object(r["d"])(t)}t("4bf1");const b={};b.render=s;var m=b,v=(t("3ca3"),t("ddb0"),t("6c02")),g=[{path:"/",component:function(){return t.e("chunk-2d0bd795").then(t.bind(null,"2bc2"))},children:[{path:"",name:"Home",component:function(){return t.e("chunk-2d2304e0").then(t.bind(null,"ec5a"))}},{path:"products",component:function(){return t.e("chunk-297a8266").then(t.bind(null,"ed84"))}},{path:"product-info/:id",component:function(){return t.e("chunk-2d0c8bcc").then(t.bind(null,"55c9"))}}]},{path:"/login",component:function(){return t.e("chunk-2d213365").then(t.bind(null,"ac5b"))}},{path:"/admin",component:function(){return t.e("chunk-2d23118c").then(t.bind(null,"eea7"))},children:[{path:"products",component:function(){return Promise.all([t.e("chunk-1cad3f12"),t.e("chunk-2431684f")]).then(t.bind(null,"d416"))}},{path:"order",component:function(){return Promise.all([t.e("chunk-1cad3f12"),t.e("chunk-cc135238")]).then(t.bind(null,"da25"))}}]},{path:"/:pathMatch(.*)*",redirect:{name:"Home"}}],j=Object(v["a"])({history:Object(v["b"])(),routes:g}),k=j;Object(i["e"])("required",d["c"]),Object(i["e"])("email",d["a"]),Object(i["e"])("min",d["b"]),Object(i["d"])({generateMessage:Object(l["a"])({zh_TW:f}),validateOnInput:!0}),Object(l["b"])("zh_TW");var O=Object(r["c"])(m);O.use(a.a,o.a),O.component("Form",i["c"]),O.component("Field",i["b"]),O.component("ErrorMessage",i["a"]),O.config.globalProperties.toCurrency=p,O.config.globalProperties.dateConversion=h,O.use(k),O.mount("#app")},"7e5f":function(e,n,t){}});
//# sourceMappingURL=app.7d85915b.js.map