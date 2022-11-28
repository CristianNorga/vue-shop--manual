import{o as O,c as N,a as _,w as B,v as H,u as g,F as ae,r as Te,b as Ne,t as L,p as X,d as Q,e as re,f as K,g as Xe}from"./index.f5c83cd6.js";import{_ as Qe}from"./logo_yard_sale.33467efe.js";import{g as D,O as Ye,t as Ze,a as Ge}from"./OrderItem.89ff984b.js";import{_ as k}from"./_plugin-vue_export-helper.cdc0426e.js";const et="/vue-shop--manual/assets/icon_menu.dca3edb5.svg",tt="/vue-shop--manual/assets/icon_shopping_cart.53254379.svg";const ce=e=>(X("data-v-94d5da60"),e=e(),Q(),e),nt={class:"MyOrder"},rt={class:"my-order-container"},st=ce(()=>_("h1",{class:"title"},"My order",-1)),ot={class:"my-order-content"},it={class:"order"},at=ce(()=>_("span",null,"03.25.21",-1)),ct=ce(()=>_("button",{className:"primary-button"}," Checkout ",-1)),ut={__name:"MyOrder",setup(e){return(t,n)=>(O(),N("div",nt,[_("div",rt,[st,B(_("div",ot,[(O(!0),N(ae,null,Te(g(D),r=>(O(),Ne(Ye,{product:r,key:`orderItem-${r.id}`},null,8,["product"]))),128)),_("div",it,[_("p",null,[at,_("span",null,L(`${g(D).length} ${g(D).length>1?"articles":"article"}`),1)]),_("p",null,"$"+L(g(Ze)),1)]),ct],512),[[H,g(D).length>0]])])]))}},lt=k(ut,[["__scopeId","data-v-94d5da60"]]);const ft={},dt=e=>(X("data-v-422b1dff"),e=e(),Q(),e),pt={class:"desktop-menu"},ht=dt(()=>_("ul",null,[_("li",null,[_("a",{href:"/",class:"title"},"My orders")]),_("li",null,[_("a",{href:"/"},"My account")]),_("li",null,[_("a",{href:"/"},"Sign out")])],-1)),mt=[ht];function _t(e,t){return O(),N("div",pt,mt)}const yt=k(ft,[["render",_t],["__scopeId","data-v-422b1dff"]]);const Et=e=>(X("data-v-5413c67c"),e=e(),Q(),e),wt=Xe('<img src="'+et+'" alt="menu" class="menu" data-v-5413c67c><div class="navbar-left" data-v-5413c67c><img src="'+Qe+'" alt="logo" class="logo" data-v-5413c67c><ul data-v-5413c67c><li data-v-5413c67c><a href="/" data-v-5413c67c>All</a></li><li data-v-5413c67c><a href="/" data-v-5413c67c>Clothes</a></li><li data-v-5413c67c><a href="/" data-v-5413c67c>Electronics</a></li><li data-v-5413c67c><a href="/" data-v-5413c67c>Furnitures</a></li><li data-v-5413c67c><a href="/" data-v-5413c67c>Toys</a></li><li data-v-5413c67c><a href="/" data-v-5413c67c>Others</a></li></ul></div>',2),bt={class:"navbar-right"},Ot=Et(()=>_("img",{src:tt,alt:"shopping cart"},null,-1)),St={__name:"Header",setup(e){const t=re(!1),n=re(!1);function r(){n.value=!1,t.value=!t.value}function s(){t.value=!1,n.value=!n.value}return(i,o)=>(O(),N("nav",null,[wt,_("div",bt,[_("ul",null,[_("li",{class:"navbar-email",onClick:r}," platzi@example.com "),_("li",{class:"navbar-shopping-cart",onClick:s},[Ot,B(_("div",null,L(g(D).length),513),[[H,g(D).length>0]])])])]),B(K(yt,null,null,512),[[H,t.value]]),B(K(lt,null,null,512),[[H,n.value]])]))}},gt=k(St,[["__scopeId","data-v-5413c67c"]]),Rt="/vue-shop--manual/assets/bt_add_to_cart.0c726e52.svg";const At=e=>(X("data-v-01f12a28"),e=e(),Q(),e),xt={class:"ProductItem"},Tt=["src","alt"],Nt={class:"product-info"},Pt=At(()=>_("img",{src:Rt,alt:""},null,-1)),Ct=[Pt],Dt={__name:"ProductItem",props:{product:{type:Object,default:{images:["https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"],title:"Bike",price:"120,00"}}},setup(e){return(t,n)=>(O(),N("div",xt,[_("img",{src:e.product.images[0]||"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",alt:e.product.title},null,8,Tt),_("div",Nt,[_("div",null,[_("p",null,"$ "+L(e.product.price),1),_("p",null,L(e.product.title),1)]),_("figure",{onClick:n[0]||(n[0]=r=>g(Ge)(e.product))},Ct)])]))}},Ft=k(Dt,[["__scopeId","data-v-01f12a28"]]);function Pe(e,t){return function(){return e.apply(t,arguments)}}const{toString:Ce}=Object.prototype,{getPrototypeOf:ue}=Object,le=(e=>t=>{const n=Ce.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),x=e=>(e=e.toLowerCase(),t=>le(t)===e),Y=e=>t=>typeof t===e,{isArray:F}=Array,U=Y("undefined");function vt(e){return e!==null&&!U(e)&&e.constructor!==null&&!U(e.constructor)&&P(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const De=x("ArrayBuffer");function Bt(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&De(e.buffer),t}const Lt=Y("string"),P=Y("function"),Fe=Y("number"),fe=e=>e!==null&&typeof e=="object",Ut=e=>e===!0||e===!1,z=e=>{if(le(e)!=="object")return!1;const t=ue(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},jt=x("Date"),kt=x("File"),$t=x("Blob"),It=x("FileList"),Mt=e=>fe(e)&&P(e.pipe),Ht=e=>{const t="[object FormData]";return e&&(typeof FormData=="function"&&e instanceof FormData||Ce.call(e)===t||P(e.toString)&&e.toString()===t)},zt=x("URLSearchParams"),Jt=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function $(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,s;if(typeof e!="object"&&(e=[e]),F(e))for(r=0,s=e.length;r<s;r++)t.call(null,e[r],r,e);else{const i=n?Object.getOwnPropertyNames(e):Object.keys(e),o=i.length;let u;for(r=0;r<o;r++)u=i[r],t.call(null,e[u],u,e)}}function ve(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,s;for(;r-- >0;)if(s=n[r],t===s.toLowerCase())return s;return null}const Be=typeof self>"u"?typeof global>"u"?globalThis:global:self,Le=e=>!U(e)&&e!==Be;function se(){const{caseless:e}=Le(this)&&this||{},t={},n=(r,s)=>{const i=e&&ve(t,s)||s;z(t[i])&&z(r)?t[i]=se(t[i],r):z(r)?t[i]=se({},r):F(r)?t[i]=r.slice():t[i]=r};for(let r=0,s=arguments.length;r<s;r++)arguments[r]&&$(arguments[r],n);return t}const Vt=(e,t,n,{allOwnKeys:r}={})=>($(t,(s,i)=>{n&&P(s)?e[i]=Pe(s,n):e[i]=s},{allOwnKeys:r}),e),qt=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),Kt=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},Wt=(e,t,n,r)=>{let s,i,o;const u={};if(t=t||{},e==null)return t;do{for(s=Object.getOwnPropertyNames(e),i=s.length;i-- >0;)o=s[i],(!r||r(o,e,t))&&!u[o]&&(t[o]=e[o],u[o]=!0);e=n!==!1&&ue(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},Xt=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},Qt=e=>{if(!e)return null;if(F(e))return e;let t=e.length;if(!Fe(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},Yt=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&ue(Uint8Array)),Zt=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let s;for(;(s=r.next())&&!s.done;){const i=s.value;t.call(e,i[0],i[1])}},Gt=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},en=x("HTMLFormElement"),tn=e=>e.toLowerCase().replace(/[_-\s]([a-z\d])(\w*)/g,function(n,r,s){return r.toUpperCase()+s}),_e=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),nn=x("RegExp"),Ue=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};$(n,(s,i)=>{t(s,i,e)!==!1&&(r[i]=s)}),Object.defineProperties(e,r)},rn=e=>{Ue(e,(t,n)=>{if(P(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(!!P(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},sn=(e,t)=>{const n={},r=s=>{s.forEach(i=>{n[i]=!0})};return F(e)?r(e):r(String(e).split(t)),n},on=()=>{},an=(e,t)=>(e=+e,Number.isFinite(e)?e:t),cn=e=>{const t=new Array(10),n=(r,s)=>{if(fe(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[s]=r;const i=F(r)?[]:{};return $(r,(o,u)=>{const d=n(o,s+1);!U(d)&&(i[u]=d)}),t[s]=void 0,i}}return r};return n(e,0)},a={isArray:F,isArrayBuffer:De,isBuffer:vt,isFormData:Ht,isArrayBufferView:Bt,isString:Lt,isNumber:Fe,isBoolean:Ut,isObject:fe,isPlainObject:z,isUndefined:U,isDate:jt,isFile:kt,isBlob:$t,isRegExp:nn,isFunction:P,isStream:Mt,isURLSearchParams:zt,isTypedArray:Yt,isFileList:It,forEach:$,merge:se,extend:Vt,trim:Jt,stripBOM:qt,inherits:Kt,toFlatObject:Wt,kindOf:le,kindOfTest:x,endsWith:Xt,toArray:Qt,forEachEntry:Zt,matchAll:Gt,isHTMLForm:en,hasOwnProperty:_e,hasOwnProp:_e,reduceDescriptors:Ue,freezeMethods:rn,toObjectSet:sn,toCamelCase:tn,noop:on,toFiniteNumber:an,findKey:ve,global:Be,isContextDefined:Le,toJSONObject:cn};function m(e,t,n,r,s){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),s&&(this.response=s)}a.inherits(m,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:a.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const je=m.prototype,ke={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{ke[e]={value:e}});Object.defineProperties(m,ke);Object.defineProperty(je,"isAxiosError",{value:!0});m.from=(e,t,n,r,s,i)=>{const o=Object.create(je);return a.toFlatObject(e,o,function(d){return d!==Error.prototype},u=>u!=="isAxiosError"),m.call(o,e.message,t,n,r,s),o.cause=e,o.name=e.name,i&&Object.assign(o,i),o};var un=typeof self=="object"?self.FormData:window.FormData;const ln=un;function oe(e){return a.isPlainObject(e)||a.isArray(e)}function $e(e){return a.endsWith(e,"[]")?e.slice(0,-2):e}function ye(e,t,n){return e?e.concat(t).map(function(s,i){return s=$e(s),!n&&i?"["+s+"]":s}).join(n?".":""):t}function fn(e){return a.isArray(e)&&!e.some(oe)}const dn=a.toFlatObject(a,{},null,function(t){return/^is[A-Z]/.test(t)});function pn(e){return e&&a.isFunction(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator]}function Z(e,t,n){if(!a.isObject(e))throw new TypeError("target must be an object");t=t||new(ln||FormData),n=a.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(h,S){return!a.isUndefined(S[h])});const r=n.metaTokens,s=n.visitor||l,i=n.dots,o=n.indexes,d=(n.Blob||typeof Blob<"u"&&Blob)&&pn(t);if(!a.isFunction(s))throw new TypeError("visitor must be a function");function c(f){if(f===null)return"";if(a.isDate(f))return f.toISOString();if(!d&&a.isBlob(f))throw new m("Blob is not supported. Use a Buffer instead.");return a.isArrayBuffer(f)||a.isTypedArray(f)?d&&typeof Blob=="function"?new Blob([f]):Buffer.from(f):f}function l(f,h,S){let b=f;if(f&&!S&&typeof f=="object"){if(a.endsWith(h,"{}"))h=r?h:h.slice(0,-2),f=JSON.stringify(f);else if(a.isArray(f)&&fn(f)||a.isFileList(f)||a.endsWith(h,"[]")&&(b=a.toArray(f)))return h=$e(h),b.forEach(function(M,We){!(a.isUndefined(M)||M===null)&&t.append(o===!0?ye([h],We,i):o===null?h:h+"[]",c(M))}),!1}return oe(f)?!0:(t.append(ye(S,h,i),c(f)),!1)}const p=[],E=Object.assign(dn,{defaultVisitor:l,convertValue:c,isVisitable:oe});function y(f,h){if(!a.isUndefined(f)){if(p.indexOf(f)!==-1)throw Error("Circular reference detected in "+h.join("."));p.push(f),a.forEach(f,function(b,C){(!(a.isUndefined(b)||b===null)&&s.call(t,b,a.isString(C)?C.trim():C,h,E))===!0&&y(b,h?h.concat(C):[C])}),p.pop()}}if(!a.isObject(e))throw new TypeError("data must be an object");return y(e),t}function Ee(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function de(e,t){this._pairs=[],e&&Z(e,this,t)}const Ie=de.prototype;Ie.append=function(t,n){this._pairs.push([t,n])};Ie.toString=function(t){const n=t?function(r){return t.call(this,r,Ee)}:Ee;return this._pairs.map(function(s){return n(s[0])+"="+n(s[1])},"").join("&")};function hn(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Me(e,t,n){if(!t)return e;const r=n&&n.encode||hn,s=n&&n.serialize;let i;if(s?i=s(t,n):i=a.isURLSearchParams(t)?t.toString():new de(t,n).toString(r),i){const o=e.indexOf("#");o!==-1&&(e=e.slice(0,o)),e+=(e.indexOf("?")===-1?"?":"&")+i}return e}class mn{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){a.forEach(this.handlers,function(r){r!==null&&t(r)})}}const we=mn,He={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},_n=typeof URLSearchParams<"u"?URLSearchParams:de,yn=FormData,En=(()=>{let e;return typeof navigator<"u"&&((e=navigator.product)==="ReactNative"||e==="NativeScript"||e==="NS")?!1:typeof window<"u"&&typeof document<"u"})(),R={isBrowser:!0,classes:{URLSearchParams:_n,FormData:yn,Blob},isStandardBrowserEnv:En,protocols:["http","https","file","blob","url","data"]};function wn(e,t){return Z(e,new R.classes.URLSearchParams,Object.assign({visitor:function(n,r,s,i){return R.isNode&&a.isBuffer(n)?(this.append(r,n.toString("base64")),!1):i.defaultVisitor.apply(this,arguments)}},t))}function bn(e){return a.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function On(e){const t={},n=Object.keys(e);let r;const s=n.length;let i;for(r=0;r<s;r++)i=n[r],t[i]=e[i];return t}function ze(e){function t(n,r,s,i){let o=n[i++];const u=Number.isFinite(+o),d=i>=n.length;return o=!o&&a.isArray(s)?s.length:o,d?(a.hasOwnProp(s,o)?s[o]=[s[o],r]:s[o]=r,!u):((!s[o]||!a.isObject(s[o]))&&(s[o]=[]),t(n,r,s[o],i)&&a.isArray(s[o])&&(s[o]=On(s[o])),!u)}if(a.isFormData(e)&&a.isFunction(e.entries)){const n={};return a.forEachEntry(e,(r,s)=>{t(bn(r),s,n,0)}),n}return null}const Sn={"Content-Type":void 0};function gn(e,t,n){if(a.isString(e))try{return(t||JSON.parse)(e),a.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const G={transitional:He,adapter:["xhr","http"],transformRequest:[function(t,n){const r=n.getContentType()||"",s=r.indexOf("application/json")>-1,i=a.isObject(t);if(i&&a.isHTMLForm(t)&&(t=new FormData(t)),a.isFormData(t))return s&&s?JSON.stringify(ze(t)):t;if(a.isArrayBuffer(t)||a.isBuffer(t)||a.isStream(t)||a.isFile(t)||a.isBlob(t))return t;if(a.isArrayBufferView(t))return t.buffer;if(a.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let u;if(i){if(r.indexOf("application/x-www-form-urlencoded")>-1)return wn(t,this.formSerializer).toString();if((u=a.isFileList(t))||r.indexOf("multipart/form-data")>-1){const d=this.env&&this.env.FormData;return Z(u?{"files[]":t}:t,d&&new d,this.formSerializer)}}return i||s?(n.setContentType("application/json",!1),gn(t)):t}],transformResponse:[function(t){const n=this.transitional||G.transitional,r=n&&n.forcedJSONParsing,s=this.responseType==="json";if(t&&a.isString(t)&&(r&&!this.responseType||s)){const o=!(n&&n.silentJSONParsing)&&s;try{return JSON.parse(t)}catch(u){if(o)throw u.name==="SyntaxError"?m.from(u,m.ERR_BAD_RESPONSE,this,null,this.response):u}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:R.classes.FormData,Blob:R.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};a.forEach(["delete","get","head"],function(t){G.headers[t]={}});a.forEach(["post","put","patch"],function(t){G.headers[t]=a.merge(Sn)});const pe=G,Rn=a.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),An=e=>{const t={};let n,r,s;return e&&e.split(`
`).forEach(function(o){s=o.indexOf(":"),n=o.substring(0,s).trim().toLowerCase(),r=o.substring(s+1).trim(),!(!n||t[n]&&Rn[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},be=Symbol("internals");function v(e){return e&&String(e).trim().toLowerCase()}function J(e){return e===!1||e==null?e:a.isArray(e)?e.map(J):String(e)}function xn(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}function Tn(e){return/^[-_a-zA-Z]+$/.test(e.trim())}function Oe(e,t,n,r){if(a.isFunction(r))return r.call(this,t,n);if(!!a.isString(t)){if(a.isString(r))return t.indexOf(r)!==-1;if(a.isRegExp(r))return r.test(t)}}function Nn(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function Pn(e,t){const n=a.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(s,i,o){return this[r].call(this,t,s,i,o)},configurable:!0})})}class ee{constructor(t){t&&this.set(t)}set(t,n,r){const s=this;function i(u,d,c){const l=v(d);if(!l)throw new Error("header name must be a non-empty string");const p=a.findKey(s,l);(!p||s[p]===void 0||c===!0||c===void 0&&s[p]!==!1)&&(s[p||d]=J(u))}const o=(u,d)=>a.forEach(u,(c,l)=>i(c,l,d));return a.isPlainObject(t)||t instanceof this.constructor?o(t,n):a.isString(t)&&(t=t.trim())&&!Tn(t)?o(An(t),n):t!=null&&i(n,t,r),this}get(t,n){if(t=v(t),t){const r=a.findKey(this,t);if(r){const s=this[r];if(!n)return s;if(n===!0)return xn(s);if(a.isFunction(n))return n.call(this,s,r);if(a.isRegExp(n))return n.exec(s);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=v(t),t){const r=a.findKey(this,t);return!!(r&&(!n||Oe(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let s=!1;function i(o){if(o=v(o),o){const u=a.findKey(r,o);u&&(!n||Oe(r,r[u],u,n))&&(delete r[u],s=!0)}}return a.isArray(t)?t.forEach(i):i(t),s}clear(){return Object.keys(this).forEach(this.delete.bind(this))}normalize(t){const n=this,r={};return a.forEach(this,(s,i)=>{const o=a.findKey(r,i);if(o){n[o]=J(s),delete n[i];return}const u=t?Nn(i):String(i).trim();u!==i&&delete n[i],n[u]=J(s),r[u]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return a.forEach(this,(r,s)=>{r!=null&&r!==!1&&(n[s]=t&&a.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(s=>r.set(s)),r}static accessor(t){const r=(this[be]=this[be]={accessors:{}}).accessors,s=this.prototype;function i(o){const u=v(o);r[u]||(Pn(s,o),r[u]=!0)}return a.isArray(t)?t.forEach(i):i(t),this}}ee.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent"]);a.freezeMethods(ee.prototype);a.freezeMethods(ee);const A=ee;function te(e,t){const n=this||pe,r=t||n,s=A.from(r.headers);let i=r.data;return a.forEach(e,function(u){i=u.call(n,i,s.normalize(),t?t.status:void 0)}),s.normalize(),i}function Je(e){return!!(e&&e.__CANCEL__)}function I(e,t,n){m.call(this,e==null?"canceled":e,m.ERR_CANCELED,t,n),this.name="CanceledError"}a.inherits(I,m,{__CANCEL__:!0});const Cn=null;function Dn(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new m("Request failed with status code "+n.status,[m.ERR_BAD_REQUEST,m.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const Fn=R.isStandardBrowserEnv?function(){return{write:function(n,r,s,i,o,u){const d=[];d.push(n+"="+encodeURIComponent(r)),a.isNumber(s)&&d.push("expires="+new Date(s).toGMTString()),a.isString(i)&&d.push("path="+i),a.isString(o)&&d.push("domain="+o),u===!0&&d.push("secure"),document.cookie=d.join("; ")},read:function(n){const r=document.cookie.match(new RegExp("(^|;\\s*)("+n+")=([^;]*)"));return r?decodeURIComponent(r[3]):null},remove:function(n){this.write(n,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}();function vn(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function Bn(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}function Ve(e,t){return e&&!vn(t)?Bn(e,t):t}const Ln=R.isStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function s(i){let o=i;return t&&(n.setAttribute("href",o),o=n.href),n.setAttribute("href",o),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=s(window.location.href),function(o){const u=a.isString(o)?s(o):o;return u.protocol===r.protocol&&u.host===r.host}}():function(){return function(){return!0}}();function Un(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function jn(e,t){e=e||10;const n=new Array(e),r=new Array(e);let s=0,i=0,o;return t=t!==void 0?t:1e3,function(d){const c=Date.now(),l=r[i];o||(o=c),n[s]=d,r[s]=c;let p=i,E=0;for(;p!==s;)E+=n[p++],p=p%e;if(s=(s+1)%e,s===i&&(i=(i+1)%e),c-o<t)return;const y=l&&c-l;return y?Math.round(E*1e3/y):void 0}}function Se(e,t){let n=0;const r=jn(50,250);return s=>{const i=s.loaded,o=s.lengthComputable?s.total:void 0,u=i-n,d=r(u),c=i<=o;n=i;const l={loaded:i,total:o,progress:o?i/o:void 0,bytes:u,rate:d||void 0,estimated:d&&o&&c?(o-i)/d:void 0,event:s};l[t?"download":"upload"]=!0,e(l)}}const kn=typeof XMLHttpRequest<"u",$n=kn&&function(e){return new Promise(function(n,r){let s=e.data;const i=A.from(e.headers).normalize(),o=e.responseType;let u;function d(){e.cancelToken&&e.cancelToken.unsubscribe(u),e.signal&&e.signal.removeEventListener("abort",u)}a.isFormData(s)&&R.isStandardBrowserEnv&&i.setContentType(!1);let c=new XMLHttpRequest;if(e.auth){const y=e.auth.username||"",f=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";i.set("Authorization","Basic "+btoa(y+":"+f))}const l=Ve(e.baseURL,e.url);c.open(e.method.toUpperCase(),Me(l,e.params,e.paramsSerializer),!0),c.timeout=e.timeout;function p(){if(!c)return;const y=A.from("getAllResponseHeaders"in c&&c.getAllResponseHeaders()),h={data:!o||o==="text"||o==="json"?c.responseText:c.response,status:c.status,statusText:c.statusText,headers:y,config:e,request:c};Dn(function(b){n(b),d()},function(b){r(b),d()},h),c=null}if("onloadend"in c?c.onloadend=p:c.onreadystatechange=function(){!c||c.readyState!==4||c.status===0&&!(c.responseURL&&c.responseURL.indexOf("file:")===0)||setTimeout(p)},c.onabort=function(){!c||(r(new m("Request aborted",m.ECONNABORTED,e,c)),c=null)},c.onerror=function(){r(new m("Network Error",m.ERR_NETWORK,e,c)),c=null},c.ontimeout=function(){let f=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const h=e.transitional||He;e.timeoutErrorMessage&&(f=e.timeoutErrorMessage),r(new m(f,h.clarifyTimeoutError?m.ETIMEDOUT:m.ECONNABORTED,e,c)),c=null},R.isStandardBrowserEnv){const y=(e.withCredentials||Ln(l))&&e.xsrfCookieName&&Fn.read(e.xsrfCookieName);y&&i.set(e.xsrfHeaderName,y)}s===void 0&&i.setContentType(null),"setRequestHeader"in c&&a.forEach(i.toJSON(),function(f,h){c.setRequestHeader(h,f)}),a.isUndefined(e.withCredentials)||(c.withCredentials=!!e.withCredentials),o&&o!=="json"&&(c.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&c.addEventListener("progress",Se(e.onDownloadProgress,!0)),typeof e.onUploadProgress=="function"&&c.upload&&c.upload.addEventListener("progress",Se(e.onUploadProgress)),(e.cancelToken||e.signal)&&(u=y=>{!c||(r(!y||y.type?new I(null,e,c):y),c.abort(),c=null)},e.cancelToken&&e.cancelToken.subscribe(u),e.signal&&(e.signal.aborted?u():e.signal.addEventListener("abort",u)));const E=Un(l);if(E&&R.protocols.indexOf(E)===-1){r(new m("Unsupported protocol "+E+":",m.ERR_BAD_REQUEST,e));return}c.send(s||null)})},V={http:Cn,xhr:$n};a.forEach(V,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch(n){}Object.defineProperty(e,"adapterName",{value:t})}});const In={getAdapter:e=>{e=a.isArray(e)?e:[e];const{length:t}=e;let n,r;for(let s=0;s<t&&(n=e[s],!(r=a.isString(n)?V[n.toLowerCase()]:n));s++);if(!r)throw r===!1?new m(`Adapter ${n} is not supported by the environment`,"ERR_NOT_SUPPORT"):new Error(a.hasOwnProp(V,n)?`Adapter '${n}' is not available in the build`:`Unknown adapter '${n}'`);if(!a.isFunction(r))throw new TypeError("adapter is not a function");return r},adapters:V};function ne(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new I}function ge(e){return ne(e),e.headers=A.from(e.headers),e.data=te.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),In.getAdapter(e.adapter||pe.adapter)(e).then(function(r){return ne(e),r.data=te.call(e,e.transformResponse,r),r.headers=A.from(r.headers),r},function(r){return Je(r)||(ne(e),r&&r.response&&(r.response.data=te.call(e,e.transformResponse,r.response),r.response.headers=A.from(r.response.headers))),Promise.reject(r)})}const Re=e=>e instanceof A?e.toJSON():e;function j(e,t){t=t||{};const n={};function r(c,l,p){return a.isPlainObject(c)&&a.isPlainObject(l)?a.merge.call({caseless:p},c,l):a.isPlainObject(l)?a.merge({},l):a.isArray(l)?l.slice():l}function s(c,l,p){if(a.isUndefined(l)){if(!a.isUndefined(c))return r(void 0,c,p)}else return r(c,l,p)}function i(c,l){if(!a.isUndefined(l))return r(void 0,l)}function o(c,l){if(a.isUndefined(l)){if(!a.isUndefined(c))return r(void 0,c)}else return r(void 0,l)}function u(c,l,p){if(p in t)return r(c,l);if(p in e)return r(void 0,c)}const d={url:i,method:i,data:i,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:u,headers:(c,l)=>s(Re(c),Re(l),!0)};return a.forEach(Object.keys(e).concat(Object.keys(t)),function(l){const p=d[l]||s,E=p(e[l],t[l],l);a.isUndefined(E)&&p!==u||(n[l]=E)}),n}const qe="1.2.0",he={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{he[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const Ae={};he.transitional=function(t,n,r){function s(i,o){return"[Axios v"+qe+"] Transitional option '"+i+"'"+o+(r?". "+r:"")}return(i,o,u)=>{if(t===!1)throw new m(s(o," has been removed"+(n?" in "+n:"")),m.ERR_DEPRECATED);return n&&!Ae[o]&&(Ae[o]=!0,console.warn(s(o," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(i,o,u):!0}};function Mn(e,t,n){if(typeof e!="object")throw new m("options must be an object",m.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let s=r.length;for(;s-- >0;){const i=r[s],o=t[i];if(o){const u=e[i],d=u===void 0||o(u,i,e);if(d!==!0)throw new m("option "+i+" must be "+d,m.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new m("Unknown option "+i,m.ERR_BAD_OPTION)}}const ie={assertOptions:Mn,validators:he},T=ie.validators;class W{constructor(t){this.defaults=t,this.interceptors={request:new we,response:new we}}request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=j(this.defaults,n);const{transitional:r,paramsSerializer:s,headers:i}=n;r!==void 0&&ie.assertOptions(r,{silentJSONParsing:T.transitional(T.boolean),forcedJSONParsing:T.transitional(T.boolean),clarifyTimeoutError:T.transitional(T.boolean)},!1),s!==void 0&&ie.assertOptions(s,{encode:T.function,serialize:T.function},!0),n.method=(n.method||this.defaults.method||"get").toLowerCase();let o;o=i&&a.merge(i.common,i[n.method]),o&&a.forEach(["delete","get","head","post","put","patch","common"],f=>{delete i[f]}),n.headers=A.concat(o,i);const u=[];let d=!0;this.interceptors.request.forEach(function(h){typeof h.runWhen=="function"&&h.runWhen(n)===!1||(d=d&&h.synchronous,u.unshift(h.fulfilled,h.rejected))});const c=[];this.interceptors.response.forEach(function(h){c.push(h.fulfilled,h.rejected)});let l,p=0,E;if(!d){const f=[ge.bind(this),void 0];for(f.unshift.apply(f,u),f.push.apply(f,c),E=f.length,l=Promise.resolve(n);p<E;)l=l.then(f[p++],f[p++]);return l}E=u.length;let y=n;for(p=0;p<E;){const f=u[p++],h=u[p++];try{y=f(y)}catch(S){h.call(this,S);break}}try{l=ge.call(this,y)}catch(f){return Promise.reject(f)}for(p=0,E=c.length;p<E;)l=l.then(c[p++],c[p++]);return l}getUri(t){t=j(this.defaults,t);const n=Ve(t.baseURL,t.url);return Me(n,t.params,t.paramsSerializer)}}a.forEach(["delete","get","head","options"],function(t){W.prototype[t]=function(n,r){return this.request(j(r||{},{method:t,url:n,data:(r||{}).data}))}});a.forEach(["post","put","patch"],function(t){function n(r){return function(i,o,u){return this.request(j(u||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:i,data:o}))}}W.prototype[t]=n(),W.prototype[t+"Form"]=n(!0)});const q=W;class me{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(i){n=i});const r=this;this.promise.then(s=>{if(!r._listeners)return;let i=r._listeners.length;for(;i-- >0;)r._listeners[i](s);r._listeners=null}),this.promise.then=s=>{let i;const o=new Promise(u=>{r.subscribe(u),i=u}).then(s);return o.cancel=function(){r.unsubscribe(i)},o},t(function(i,o,u){r.reason||(r.reason=new I(i,o,u),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}static source(){let t;return{token:new me(function(s){t=s}),cancel:t}}}const Hn=me;function zn(e){return function(n){return e.apply(null,n)}}function Jn(e){return a.isObject(e)&&e.isAxiosError===!0}function Ke(e){const t=new q(e),n=Pe(q.prototype.request,t);return a.extend(n,q.prototype,t,{allOwnKeys:!0}),a.extend(n,t,null,{allOwnKeys:!0}),n.create=function(s){return Ke(j(e,s))},n}const w=Ke(pe);w.Axios=q;w.CanceledError=I;w.CancelToken=Hn;w.isCancel=Je;w.VERSION=qe;w.toFormData=Z;w.AxiosError=m;w.Cancel=w.CanceledError;w.all=function(t){return Promise.all(t)};w.spread=zn;w.isAxiosError=Jn;w.AxiosHeaders=A;w.formToJSON=e=>ze(a.isHTMLForm(e)?new FormData(e):e);w.default=w;const Vn=w,xe={products:re([]),async getProducts(e){const t=await Vn(e);this.setProducts(t.data)},setProducts(e){this.products.value=e}};const qn={class:"main-container"},Kn={class:"cards-container"},Wn={__name:"ProductList",setup(e){const t=xe.products,n="https://api.escuelajs.co/api/v1/products",r={beforeMount:async()=>{await xe.getProducts(n)}};return(s,i)=>B((O(),N("section",qn,[_("div",Kn,[(O(!0),N(ae,null,Te(g(t),o=>(O(),Ne(Ft,{key:o.id,product:o},null,8,["product"]))),128))])])),[[r]])}},Xn=k(Wn,[["__scopeId","data-v-c328ba89"]]),er={__name:"Home",setup(e){return(t,n)=>(O(),N(ae,null,[K(gt),K(Xn)],64))}};export{er as default};