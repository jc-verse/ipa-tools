import{i as H,h as k,a as l,s as T,b as ze,c as u,d,e as v,p as B,m as O,f as z,o as m,_ as ce,g as Ke,j as W,k as x,l as fe,n as Ye,q as A,r as de,t as Je,u as qe,v as ge,w as Me,x as he,y as Xe,z as Qe,A as Ze,B as pe,C as me,D as et,E as tt,F as nt,G as ye,H as q,I as V,J as rt,K as ot}from"./chunk-0e760205.js";function _(e){return typeof e!="object"||e===null?!1:Object.getPrototypeOf(e)===null?!0:e.constructor.name==="Object"}function ee(e){return"["+e.map(t=>"'"+t+"'").join(", ")+"]"}function D(e,t){const n=Object.getOwnPropertyDescriptor(e,t);return!!n&&!("value"in n)&&!!n.get}function be(e){return typeof e=="object"&&e!==null&&"then"in e&&H(e.then)}function st(e,t){if(!_(e))return!1;for(const n of Object.keys(e))if(!t.includes(n))return!1;return!0}function it(e){return typeof e=="object"&&e!==null&&Object.values(e).every(t=>typeof t=="string")}function at(e,t){const s=t.filter(({filesystemRoot:o})=>e.startsWith(o)).sort(k(({filesystemRoot:o})=>o.length))[0];let r;if(s){const{filesystemRoot:o,routeRoot:i}=s,a={pageId:e,filesystemRoot:o,routeRoot:i};l(i.startsWith("/")&&e.startsWith("/")&&o.startsWith("/"),a),l(e.startsWith(o),a),o!=="/"?(l(!o.endsWith("/"),a),r=T(e,o.length,0)):r=e,l(r.startsWith("/"),a),r=i+(i.endsWith("/")?"":"/")+T(r,1,0)}else r=e;return l(r.startsWith("/")),r=r.split("/").filter(o=>o!=="pages"&&o!=="src"&&o!=="index").join("/"),l(!r.includes(".page.")),l(!r.endsWith(".")),r.endsWith("/index")&&(r=T(r,0,-6)),r===""&&(r="/"),l(r.startsWith("/")),l(!r.endsWith("/")||r==="/"),r}async function lt(e,t,n,s){await Promise.all(e.filter(a=>a.fileType===".page.route").map(a=>{var c;return(c=a.loadFile)===null||c===void 0?void 0:c.call(a)}));const{onBeforeRouteHook:r,filesystemRoots:o}=ct(e,t,n);return{pageRoutes:ut(o,e,t,s),onBeforeRouteHook:r}}function ut(e,t,n,s){const r=[];let o=[...s];return n.length>0&&n.filter(a=>!a.isErrorPage).forEach(a=>{const c=a.pageId2;o=gt(o,c);let f=null;{const p=a.configSources.route;if(p){l("configValue"in p);const g=p.configValue,y=p.configSrc;if(l(y),typeof g=="string")f={pageId:c,comesFromV1PageConfig:!0,routeString:g,pageRouteFilePath:y,routeType:"STRING"};else{l(H(g));let b=!1;const h=a.configSources.iKnowThePerformanceRisksOfAsyncRouteFunctions;if(h){l(!("codeFilePath"in h));const R=h.configValue;l(typeof R=="boolean"),b=R}f={pageId:c,comesFromV1PageConfig:!0,routeFunction:g,pageRouteFilePath:y,routeType:"FUNCTION",allowAsync:b}}}}if(!f){const{routeFilesystem:p,routeFilesystemDefinedBy:g}=a;l(p),l(p.startsWith("/")),l(g),f={pageId:c,routeFilesystemDefinedBy:g,comesFromV1PageConfig:!0,routeString:p,pageRouteFilePath:null,routeType:"FILESYSTEM"}}l(f),r.push(f)}),n.length===0&&o.filter(a=>!ze(a)).forEach(a=>{const c=ft(a,t);if(c){const{filePath:f,fileExports:p}=c;if(l(p),u("default"in p,`${f} should have a default export.`),d(p,"default","string")){const g=p.default;u(g.startsWith("/"),`A Route String should start with a leading \`/\` but \`${f}\` has \`export default '${g}'\`. Make sure to \`export default '/${g}'\` instead.`),r.push({pageId:a,comesFromV1PageConfig:!1,routeString:g,pageRouteFilePath:f,routeType:"STRING"});return}if(d(p,"default","function")){const g=p.default;let y=!1;const b="iKnowThePerformanceRisksOfAsyncRouteFunctions";b in p&&(u(d(p,b,"boolean"),`The export \`${b}\` of ${f} should be a boolean.`),y=p[b]),r.push({pageId:a,comesFromV1PageConfig:!1,routeFunction:g,pageRouteFilePath:f,allowAsync:y,routeType:"FUNCTION"});return}u(!1,`The default export of ${f} should be a string or a function.`)}else{const f=at(a,e);l(f.startsWith("/")),l(!f.endsWith("/")||f==="/"),r.push({pageId:a,comesFromV1PageConfig:!1,routeString:f,pageRouteFilePath:null,routeFilesystemDefinedBy:`${a}.page.*`,routeType:"FILESYSTEM"})}}),r}function ct(e,t,n){if(t.length>0){if(n.onBeforeRoute){const o=n.onBeforeRoute.configValue;if(o){const i=n.onBeforeRoute.codeFilePath2;return l(i),u(H(o),`The hook onBeforeRoute() defined by ${i} should be a function.`),{onBeforeRouteHook:{hookSrc:i,onBeforeRoute:o},filesystemRoots:[]}}}return{onBeforeRouteHook:null,filesystemRoots:[]}}let s=null;const r=[];return e.filter(o=>o.fileType===".page.route"&&o.isDefaultPageFile).forEach(({filePath:o,fileExports:i})=>{if(l(i),"onBeforeRoute"in i){u(d(i,"onBeforeRoute","function"),`\`export { onBeforeRoute }\` of ${o} should be a function.`);const{onBeforeRoute:a}=i;s={hookSrc:`${o} > \`export { onBeforeRoute }\``,onBeforeRoute:a}}"filesystemRoutingRoot"in i&&(u(d(i,"filesystemRoutingRoot","string"),`\`export { filesystemRoutingRoot }\` of ${o} should be a string.`),u(d(i,"filesystemRoutingRoot","string"),`\`export { filesystemRoutingRoot }\` of ${o} is \`'${i.filesystemRoutingRoot}'\` but it should start with a leading slash \`/\`.`),r.push({filesystemRoot:dt(o),routeRoot:i.filesystemRoutingRoot}))}),{onBeforeRouteHook:s,filesystemRoots:r}}function ft(e,t){return t.find(n=>n.pageId===e&&n.fileType===".page.route")}function dt(e){l(e.startsWith("/")),l(!e.endsWith("/"));const t=e.split("/"),n=T(t,0,-1).join("/")||"/";return l(n.startsWith("/")),l(!n.endsWith("/")||n==="/"),n}function gt(e,t){const{length:n}=e;return e=e.filter(s=>s!==t),l(e.length===n-1),e}function Se(e){l(e.urlOriginal),"urlPathname"in e?l(D(e,"urlPathname")):Object.defineProperty(e,"urlPathname",{get:_e,enumerable:!0,configurable:!0}),"url"in e?l(D(e,"url")):Object.defineProperty(e,"url",{get:ht,enumerable:!1,configurable:!0}),"urlParsed"in e?l(D(e,"urlParsed")):Object.defineProperty(e,"urlParsed",{get:pt,enumerable:!0,configurable:!0})}function ve(e){let t=e._urlHandler;t||(t=r=>r);const n=t(e.urlOriginal),s=e._baseServer;return l(s.startsWith("/")),B(n,s)}function _e(){const{pathname:e}=ve(this),t=e;return l(t.startsWith("/")),t}function ht(){return v(!1,"`pageContext.url` is outdated. Use `pageContext.urlPathname`, `pageContext.urlParsed`, or `pageContext.urlOriginal` instead. (See https://vite-plugin-ssr.com/migration/0.4.23 for more information.)",{onlyOnce:!0,showStackTrace:!0}),_e.call(this)}function pt(){const e=ve(this),{origin:t,pathname:n,pathnameOriginal:s,search:r,searchAll:o,searchOriginal:i,hash:a,hashOriginal:c}=e,f={origin:t,pathname:n,pathnameOriginal:s,search:r,searchAll:o,searchOriginal:i,hash:a,hashOriginal:c,get hashString(){return v(!1,"`pageContext.urlParsed.hashString` has been renamed to `pageContext.urlParsed.hashOriginal`",{onlyOnce:!0,showStackTrace:!0}),c},get searchString(){return v(!1,"`pageContext.urlParsed.searchString` has been renamed to `pageContext.urlParsed.searchOriginal`",{onlyOnce:!0,showStackTrace:!0}),i}};return te(f,"hashString"),te(f,"searchString"),f}function te(e,t){const n=Object.getOwnPropertyDescriptor(e,t);Object.defineProperty(e,t,{...n,enumerable:!1})}function mt(e){l(typeof e.urlOriginal=="string"),l(typeof e.urlPathname=="string"),l(_(e.urlParsed)),l(e.urlPathname===e.urlParsed.pathname)}const Re="@",K=":";function yt(e,t){t?t=t+" invalid":t="Invalid",u(e==="*"||e.startsWith("/"),`${t} route string '${e}'${e===""?" (empty string)":""}: route strings should start with a leading slash '/' (or be '*')`)}function Y(e,t){yt(e),l(t.startsWith("/"));const n=e.split("/"),s=t.split("/"),r={};bt(e),e==="*"&&(e="/*");for(let o=0;o<Math.max(n.length,s.length);o++){const i=n[o],a=s[o];if(i==="*")return r["*"]=s.slice(Math.max(1,o)).join("/"),{routeParams:r};if(i&&N(i)){if(v(!i.startsWith(K),`Outdated route string \`${e}\`, use \`${e.split(K).join(Re)}\` instead.`,{showStackTrace:!1,onlyOnce:!0}),!a)return null;r[i.slice(1)]=a}else if((i||"")!==(a||""))return null}return{routeParams:r}}function bt(e){const t=e.split("*").length-1;u(t<=1,`Invalid route string \`${e}\`: route strings are not allowed to contain more than one glob character \`*\`.`),u(t===0||t===1&&e.endsWith("*"),`Invalid route string \`${e}\`: make sure your route string ends with the glob character \`*\`.`)}function F(e){const t=e.split("/").filter(i=>i!==""&&i!=="*");let n=0;for(const i of t){if(N(i))break;n++}const s=t.filter(i=>!N(i)).length,r=t.filter(i=>N(i)).length,o=e.endsWith("*");return{numberOfParameterSegments:r,numberOfStaticSegmentsBeginning:n,numberOfStaticSegements:s,isCatchAll:o}}function N(e){return e.startsWith(Re)||e.startsWith(K)}function ne(e){const n=Y(e,e);return l(n),Object.keys(n.routeParams).length===0}function St(e){e.sort(vt).sort(O(t=>t.routeType==="FUNCTION"&&!!t.precedence&&t.precedence<0)).sort(O(t=>t.routeType==="STRING"&&ne(t.routeString)===!1)).sort(O(t=>t.routeType==="FUNCTION"&&!t.precedence)).sort(O(t=>t.routeType==="STRING"&&ne(t.routeString)===!0)).sort(O(t=>t.routeType==="FILESYSTEM")).sort(O(t=>t.routeType==="FUNCTION"&&!!t.precedence&&t.precedence>0))}function vt(e,t){var n,s;{const r=(n=e.precedence)!==null&&n!==void 0?n:0,o=(s=t.precedence)!==null&&s!==void 0?s:0;if(r!==o)return r>o?-1:1}if(!t.routeString||!e.routeString)return 0;{const o=k(i=>F(i).numberOfStaticSegmentsBeginning)(e.routeString,t.routeString);if(o!==0)return o}{const o=k(i=>F(i).numberOfStaticSegements)(e.routeString,t.routeString);if(o!==0)return o}{const o=k(i=>F(i).numberOfParameterSegments)(e.routeString,t.routeString);if(o!==0)return o}{if(F(t.routeString).isCatchAll)return-1;if(F(e.routeString).isCatchAll)return 1}return 0}async function _t(e,t,n,s){mt(n);let r=e(n);if(u(!be(r)||t,`The Route Function ${s} returned a promise; async route functions are opt-in, see https://vite-plugin-ssr.com/route-function#async`),r=await r,r===!1)return null;if(r===!0&&(r={}),u(_(r),`The Route Function ${s} should return a boolean or a plain JavaScript object, instead it returns \`${d(r,"constructor")?r.constructor:r}\`.`),"match"in r){const{match:a}=r;if(u(typeof a=="boolean",`The \`match\` value returned by the Route Function ${s} should be a boolean.`),!a)return null}let o=null;"precedence"in r&&(o=r.precedence,u(typeof o=="number",`The \`precedence\` value returned by the Route Function ${s} should be a number.`)),Pe(r,`The \`routeParams\` object returned by the Route Function ${s} should`);const i=r.routeParams||{};return u(!("pageContext"in r),"Providing `pageContext` in Route Functions is forbidden, see https://vite-plugin-ssr.com/route-function#cannot-provide-pagecontext"),l(_(i)),Object.keys(r).forEach(a=>{u(a==="match"||a==="routeParams"||a==="precedence",`The Route Function ${s} returned an object with an unknown key \`{ ${a} }\`. Allowed keys: ['match', 'routeParams', 'precedence'].`)}),{precedence:o,routeParams:i}}function Pe(e,t){l(t.endsWith(" should")),d(e,"routeParams")&&(l(t.endsWith(" should")),u(_(e.routeParams),`${t} be a plain JavaScript object.`),u(it(e.routeParams),`${t} only hold string values.`))}function we(e,{hook:t,errorMessagePrefix:n,canBePromise:s}){if(!n){l(t);const{hookName:r,hookSrc:o}=t;l(!r.endsWith(")")),n=`The \`pageContext\` provided by the ${r}() hook defined by ${o}`}if(s&&!z(e)){u(H(e)||be(e),`${n} should be an object, or an async function https://vite-plugin-ssr.com/stream#initial-data-after-stream-end`);return}u(z(e),`${n} should be an object.`),u(!("_objectCreatedByVitePluginSsr"in e),`${n} should not be the whole \`pageContext\` object, see https://vite-plugin-ssr.com/pageContext-manipulation#do-not-return-entire-pagecontext`),v(!("_pageId"in e),"You are using `onBeforeRoute()` to override vite-plugin-ssr routing. This is experimental: make sure to contact a vite-plugin-ssr maintainer before using this.",{showStackTrace:!1,onlyOnce:!0})}async function Rt(e,t){const n=await e.onBeforeRoute(t),s=`The \`onBeforeRoute()\` hook defined by ${e.hookSrc}`;if(u(n==null||st(n,["pageContext"])&&d(n,"pageContext"),`${s} should return \`null\`, \`undefined\`, or a plain JavaScript object \`{ pageContext: { /* ... */ } }\`.`),n==null)return null;if(u(d(n,"pageContext","object"),`${s} returned \`{ pageContext }\` but \`pageContext\` should be a plain JavaScript object.`),d(n.pageContext,"_pageId")&&!d(n.pageContext,"_pageId","null")){const o=`${s} returned \`{ pageContext: { _pageId } }\` but \`_pageId\` should be`;u(d(n.pageContext,"_pageId","string"),`${o} a string or \`null\``),u(t._allPageIds.includes(n.pageContext._pageId),`${o} one of following values: \`[${t._allPageIds.map(i=>`'${i}'`).join(", ")}]\`.`)}d(n.pageContext,"routeParams")&&Pe(n.pageContext,`${s} returned \`{ pageContext: { routeParams } }\` but \`routeParams\` should`);const r={};return d(n.pageContext,"url")&&(v(!1,`${s} returned \`{ pageContext: { url } }\` but \`pageContext.url\` has been renamed to \`pageContext.urlOriginal\`. Return \`{ pageContext: { urlOriginal } }\` instead. (See https://vite-plugin-ssr.com/migration/0.4.23 for more information.)`,{showStackTrace:!1,onlyOnce:!0}),n.pageContext.urlOriginal=n.pageContext.url,delete n.pageContext.url),d(n.pageContext,"urlOriginal")&&(u(d(n.pageContext,"urlOriginal","string"),`${s} returned \`{ pageContext: { urlOriginal } }\` but \`urlOriginal\` should be a string`),m(r,{_urlPristine:t.urlOriginal})),we(n.pageContext,{hook:{hookSrc:e.hookSrc,hookName:"onBeforeRoute"}}),m(r,n.pageContext),r}var I;function re(...e){var t,n;I||(I=(n=(t=globalThis).__brillout_debug_createDebugger)===null||n===void 0?void 0:n.call(t,"vps:routing")),I&&I(...e)}async function Oe(e){Se(e);const{pageRoutes:t,onBeforeRouteHook:n}=await lt(e._pageFilesAll,e._pageConfigs,e._pageConfigGlobal,e._allPageIds);re("Pages routes:",t);const s={};if(n){const c=await Rt(n,e);if(c){if(m(s,c),d(s,"_pageId","string")||d(s,"_pageId","null"))return d(s,"routeParams")?l(d(s,"routeParams","object")):m(s,{routeParams:{}}),m(s,{_routingProvidedByOnBeforeRouteHook:!0,_routeMatches:"CUSTOM_ROUTE"}),{pageContextAddendum:s};m(e,s)}}m(s,{_routingProvidedByOnBeforeRouteHook:!1});const r=e._allPageIds;l(r.length>=0),u(e._pageFilesAll.length>0||e._pageConfigs.length>0,"No *.page.js file found. You must create at least one *.page.js file."),u(r.length>0,"You must create at least one *.page.js file that isn't _default.page.*");const{urlPathname:o}=e;l(o.startsWith("/"));const i=[];await Promise.all(t.map(async c=>{const{pageId:f,routeType:p}=c;if(c.routeType==="FILESYSTEM"){const{routeString:g}=c,y=Y(g,o);if(y){const{routeParams:b}=y;i.push({pageId:f,routeParams:b,routeString:g,routeType:p})}return}if(c.routeType==="STRING"){const{routeString:g}=c,y=Y(g,o);if(y){const{routeParams:b}=y;l(p==="STRING"),i.push({pageId:f,routeString:g,routeParams:b,routeType:p})}return}if(c.routeType==="FUNCTION"){const{routeFunction:g,allowAsync:y,pageRouteFilePath:b}=c,h=await _t(g,y,e,b);if(h){const{routeParams:R,precedence:C}=h;i.push({pageId:f,precedence:C,routeParams:R,routeType:p})}return}l(!1)})),St(i);const a=i[0];if(re(`Route matches for URL \`${o}\` (in precedence order):`,i),m(s,{_routeMatches:i}),!a)return m(s,{_pageId:null,routeParams:{}}),{pageContextAddendum:s};{const{routeParams:c}=a;l(_(c)),m(s,{_pageId:a.pageId,routeParams:a.routeParams})}return{pageContextAddendum:s}}const Pt=["Page"],wt=Object.freeze(Object.defineProperty({__proto__:null,exportNames:Pt},Symbol.toStringTag,{value:"Module"})),Ot=["render"],Ct=Object.freeze(Object.defineProperty({__proto__:null,exportNames:Ot},Symbol.toStringTag,{value:"Module"})),Ft=["render"],Tt=Object.freeze(Object.defineProperty({__proto__:null,exportNames:Ft},Symbol.toStringTag,{value:"Module"})),M={},Ce={},Et={},L={},At=[],xt={},It=!0,kt=[],Nt={onBeforeRoute:null},jt=null,$t=Object.assign({"/pages/index.page.tsx":()=>ce(()=>import("./pages/index.page.9d4d7e94.js"),["assets/pages/index.page.9d4d7e94.js","assets/chunk-0e184ced.js","assets/index.page.f922c3b0.css"])}),Ht={...$t};M[".page"]=Ht;const Bt=Object.assign({"/pages/index.page.tsx":wt}),Wt={...Bt};L[".page"]=Wt;const Lt=Object.assign({"/renderer/_default.page.server.tsx":Ct}),Vt={...Lt};L[".page.server"]=Vt;const Dt=Object.assign({}),Ut={...Dt};Ce[".page.route"]=Ut;const Gt=Object.assign({"/renderer/_default.page.client.tsx":()=>ce(()=>import("./renderer/_default.page.client.6b74c53e.js"),["assets/renderer/_default.page.client.6b74c53e.js","assets/chunk-0e184ced.js","assets/_default.page.client.0193f6b5.css"])}),zt={...Gt};M[".page.client"]=zt;const Kt=Object.assign({"/renderer/_default.page.client.tsx":Tt}),Yt={...Kt};L[".page.client"]=Yt;const Jt=Object.freeze(Object.defineProperty({__proto__:null,isGeneratedFile:It,neverLoaded:xt,pageConfigGlobal:Nt,pageConfigs:kt,pageFilesEager:Ce,pageFilesExportNamesEager:L,pageFilesExportNamesLazy:Et,pageFilesLazy:M,pageFilesList:At,plusFilesGlob:jt},Symbol.toStringTag,{value:"Module"}));Ke(Jt);function Fe(e){return!e.startsWith("/")&&!e.startsWith(".")&&!e.startsWith("?")&&e!==""}function qt(e,t){let n=!1;return()=>{n||(n=!0,setTimeout(()=>{n=!1,e()},t))}}function Mt(e){return B(e,"/").pathname}function j(e){window.location.href=e}function Xt(){var e,t,n,s;const r=!!(!((t=(e=window.__REACT_DEVTOOLS_GLOBAL_HOOK__)===null||e===void 0?void 0:e.renderers)===null||t===void 0)&&t.size),o=!!(!((s=(n=window.__REACT_DEVTOOLS_GLOBAL_HOOK__)===null||n===void 0?void 0:n.rendererInterfaces)===null||s===void 0)&&s.size),i=!!window.__vite_plugin_react_preamble_installed__;return r||o||i}function Qt(e,t){return(e==null?void 0:e.message)===(t==null?void 0:t.message)}function Zt(e){return new Promise(t=>setTimeout(t,e))}const oe=W("navigationState.ts",{}),en=x(),Te={markNavigationChange(){oe.navigationChanged=!0},get noNavigationChangeYet(){return!oe.navigationChanged&&this.isFirstUrl(x())},isFirstUrl(e){return e===en}};async function tn(e,t){const s=fe(e,t).filter(o=>o.fileType===".page.server");return await Promise.all(s.map(async o=>{o.exportNames||(l(o.loadExportNames,t),await o.loadExportNames())})),{hasOnBeforeRenderServerSideOnlyHook:s.some(({exportNames:o})=>(l(o),o.includes("onBeforeRender")))}}function nn(e,t,n,s,r=!1){l(!t.endsWith(")"));const o=`The ${t}() hook defined by ${s}`;u(e==null||_(e),`${o} should return \`null\`, \`undefined\`, or a plain JavaScript object.`),e!=null&&(rn(e,n,o),"pageContext"in e&&we(e.pageContext,{hook:{hookName:t,hookSrc:s},canBePromise:r}))}function rn(e,t,n){const s=[],r=Object.keys(e);for(const o of r)t.includes(o)||s.push(o);u(s.length===0,[n,"returned an object with unknown keys",ee(s)+".","Only following keys are allowed:",ee(t)+"."].join(" "))}const se=["urlPathname","urlParsed"],on=["Page","pageExports","exports"];function Ee(e){[...on,...se].forEach(n=>{n in e&&(se.includes(n)?(l(n.startsWith("url")),v(!1,`\`pageContext.${n}\` is already available in the browser when using Client Routing; including \`${n}\` in \`passToClient\` has no effect.`,{showStackTrace:!1,onlyOnce:!0})):v(!1,`\`pageContext.${n}\` is a built-in that cannot be overriden; including \`${n}\` in \`passToClient\` has no effect.`,{showStackTrace:!1,onlyOnce:!0}),delete e[n])})}const sn="/";function an(e,t,n){const{pathnameOriginal:s,searchOriginal:r,hashOriginal:o}=B(e,sn);e.startsWith("/")&&l(e===`${s}${r||""}${o||""}`,{url:e});const i=s.endsWith("/");let a;return n&&s!=="/"?(i?a=T(s,0,-1):a=s,l(!a.endsWith("/"),{url:e}),l(a!=="")):a=s+(i?"":"/")+"index",l(a),a=a+t,`${a}${r||""}${o||""}`}const ln=".pageContext.json",un=!1;function cn(e){return an(e,ln,un)}async function fn(e){return e._isFirstRenderAttempt&&Te.isFirstUrl(e.urlOriginal)?(l(d(e,"_isFirstRenderAttempt","true")),dn(e)):(l(d(e,"_isFirstRenderAttempt","false")),hn(e))}async function dn(e){const t=Ye();return Ee(t),m(t,{isHydration:!0,_comesDirectlyFromServer:!0}),m(t,await A(e._pageFilesAll,e._pageConfigs,t._pageId)),t}async function gn(e){const t=de(e._pageFilesAll,e._pageConfigs);if(!t)throw new Error("No error page");const n={isHydration:!1,_pageId:t,_pageContextRetrievedFromServer:null,_comesDirectlyFromServer:!1};return m(n,await A(e._pageFilesAll,e._pageConfigs,n._pageId)),n}async function hn(e){let t={};m(t,{isHydration:!1}),m(t,await yn(e)),m(t,await A(e._pageFilesAll,e._pageConfigs,t._pageId));const n=await pn({...e,...t});if(l([!0,!1].includes(n._comesDirectlyFromServer)),n._isError){t={},l(n._comesDirectlyFromServer===!0),l(d(n,"is404","boolean")),l(d(n,"pageProps","object")),l(d(n.pageProps,"is404","boolean")),l(!("serverSideError"in n));const s=de(e._pageFilesAll,e._pageConfigs);return l(s),m(t,{isHydration:!1,_pageId:s}),m(t,n),m(t,await A(e._pageFilesAll,e._pageConfigs,t._pageId)),t}else return m(t,n),t}async function pn(e){const t=Je(e,"onBeforeRender");if(t){const s=t.hook,r={_comesDirectlyFromServer:!1,_pageContextRetrievedFromServer:null},o=qe({...e,...r},!0),i=await ge(()=>s(o),"onBeforeRender",t.hookSrc);nn(i,"onBeforeRender",["pageContext"],t.hookSrc);const a=i==null?void 0:i.pageContext;return m(r,a),r}if(await mn(e)){const s=await bn(e),r={};return Object.assign(r,s),m(r,{_comesDirectlyFromServer:!0,_pageContextRetrievedFromServer:s}),r}return{_comesDirectlyFromServer:!1,_pageContextRetrievedFromServer:null}}async function mn(e){if(e._pageConfigs.length>0){const t=Me(e._pageId,e._pageConfigs);return!!he(t,"onBeforeRender")&&t.configSources.onBeforeRender.c_env==="server-only"}else{const{hasOnBeforeRenderServerSideOnlyHook:t}=await tn(e._pageFilesAll,e._pageId);return t}}async function yn(e){const n=(await Oe(e)).pageContextAddendum;if(!n._pageId)throw new Error("No routing match");return l(d(n,"_pageId","string")),n}async function bn(e){var t;const n=cn((t=e._urlPristine)!==null&&t!==void 0?t:e.urlOriginal),s=await fetch(n);{const a=s.headers.get("content-type"),c=a&&a.includes("application/json");if(!c&&s.status===404){j(e.urlOriginal);const f=new Error("Page doesn't exist");throw Object.assign(f,{_abortRendering:!0}),f}u(c,`Wrong HTTP Response Header \`content-type\` value for URL ${n} (it should be \`application/json\` but we got \`${a}\`). Make sure to use \`pageContext.httpResponse.contentType\`, see https://github.com/brillout/vite-plugin-ssr/issues/191`)}const r=await s.text(),o=Xe(r);if("serverSideError"in o)throw Qe("`pageContext` could not be fetched from the server as an error occurred on the server; check your server logs.");l(d(o,"pageContext"));const i=o.pageContext;return l(_(i)),l(d(i,"_pageId","string")),Ee(i),i}function Ae(){const e="/";return l(Sn(e)),e}function Sn(e){return e.startsWith("/")}const U=W("createPageContext.ts",{});async function xe(e){U.pageFilesData||(U.pageFilesData=await Ze(!0));const{pageFilesAll:t,allPageIds:n,pageConfigs:s,pageConfigGlobal:r}=U.pageFilesData,o=Ae();l(pe(o));const i={_objectCreatedByVitePluginSsr:!0,_urlHandler:null,_baseServer:o,_isProduction:!0,_pageFilesAll:t,_pageConfigs:s,_pageConfigGlobal:r,_allPageIds:n};return m(i,e),Se(i),i}async function Ie(e){const t=await xe({urlOriginal:e}),n=await Oe(t),s=t._pageFilesAll,r=t._pageConfigs;if(!("pageContextAddendum"in n))return{pageId:null,pageFilesAll:s,pageConfigs:r};const o=n.pageContextAddendum._pageId;return o?{pageId:o,pageFilesAll:s,pageConfigs:r}:{pageId:null,pageFilesAll:s,pageConfigs:r}}function E(e){return e.fileType===".css"?[]:e.exportNames?e.exportNames:(l(e.fileExports,e.filePath),Object.keys(e.fileExports))}function vn({pageFilesClientSide:e,pageFilesServerSide:t,pageId:n}){return{isHtmlOnly:s(),isClientRouting:o()};function s(){return t.some(a=>a.pageId===n&&a.fileType===".page")?(r(),!1):!(!t.some(a=>a.pageId===n&&a.fileType===".page.server")||e.some(a=>a.pageId===n&&a.fileType===".page.client"&&E(a).includes("render")))}function r(){const i=e.some(a=>E(a).includes("render"));u(i,["No client-side `render()` hook found.","See https://vite-plugin-ssr.com/render-modes for more information.",["Loaded client-side page files (none of them `export { render }`):",...e.map((a,c)=>` (${c+1}): ${a.filePath}`)].join(`
`)].join(" "))}function o(){return e.some(a=>E(a).includes("clientRouting"))}}function _n({pageFilesClientSide:e,pageFilesServerSide:t,isHtmlOnly:n,isClientRouting:s}){let r=[];const o=t.filter(a=>!e.includes(a)),i=[];if(i.push(...e.map(a=>({id:a.filePath,onlyAssets:!1,eagerlyImported:!1}))),i.push(...o.map(a=>({id:a.filePath,onlyAssets:!0,eagerlyImported:!1}))),n)r=e.map(a=>a.filePath);else{const a=Rn(s);i.push({id:a,onlyAssets:!1,eagerlyImported:!1}),r=[a]}return{clientEntries:r,clientDependencies:i}}function Rn(e){return e?"@@vite-plugin-ssr/dist/esm/client/router/entry.js":"@@vite-plugin-ssr/dist/esm/client/entry.js"}function Pn(e,t){let n=me(e,t);const s=fe(e,t),{isHtmlOnly:r,isClientRouting:o}=vn({pageFilesClientSide:n,pageFilesServerSide:s,pageId:t});r&&(n=n.filter(c=>c.isEnv("CLIENT_ONLY")&&!E(c).includes("render")),n=On(n));const{clientEntries:i,clientDependencies:a}=_n({pageFilesClientSide:n,pageFilesServerSide:s,isHtmlOnly:r,isClientRouting:o});return{isHtmlOnly:r,isClientRouting:o,clientEntries:i,clientDependencies:a,pageFilesClientSide:n,pageFilesServerSide:s}}async function wn(e,t,{sharedPageFilesAlreadyLoaded:n}){const s=me(e,t);await Promise.all(s.map(async r=>{var o;l(r.isEnv("CLIENT_ONLY")||r.isEnv("CLIENT_AND_SERVER")),!(n&&r.isEnv("CLIENT_AND_SERVER"))&&await((o=r.loadExportNames)===null||o===void 0?void 0:o.call(r))}))}function On(e){const t=[];for(const n of e)if(t.push(n),E(n).includes("overrideDefaultPages"))break;return t}async function ke(e){const{pageId:t,pageFilesAll:n,pageConfigs:s}=await Ie(e);if(!t)return!1;await wn(n,t,{sharedPageFilesAlreadyLoaded:!1});const r=et(s,t),{isClientSideRenderable:o,isClientRouting:i}=Cn(r,n,t);return o&&i}function Cn(e,t,n){var s;if(e){const r=(s=tt(e,"clientRouting","boolean"))!==null&&s!==void 0?s:!1;return{isClientSideRenderable:!!he(e,"onRenderClient"),isClientRouting:r}}else{const{isHtmlOnly:r,isClientRouting:o}=Pn(t,n);return{isClientSideRenderable:!r,isClientRouting:o}}}function Ne(e){const t=e.getAttribute("href");return!!(t===null||t===""||Fe(t)||Fn(e)||Tn(t)||!En(t)||!nt(t))}function Fn(e){const t=e.getAttribute("target"),n=e.getAttribute("rel");return t==="_blank"||t==="_external"||n==="external"||e.hasAttribute("download")}function Tn(e){if(e.startsWith("#"))return!0;const t=n=>n.split("#")[0];return!!(e.includes("#")&&t(e)===t(window.location.href))}function En(e){const t=Ae();l(pe(t));const{hasBaseServer:n}=B(e,t);return n}function An(e,t){return{prefetchPageContext:!1,prefetchStaticAssets:xn(e,t)}}function xn(e,t){let n=In(t),s=(()=>{if(n!==null)return n===!0?{when:"VIEWPORT"}:{when:"HOVER"};if("prefetchLinks"in e.exports&&u(n===null,"`export { prefetchLinks }` is deprecated, use `export { prefetchStaticAssets }` instead."),"prefetchStaticAssets"in e.exports){const{prefetchStaticAssets:r}=e.exports;if(r===!1)return!1;const o="`prefetchStaticAssets` should be either `false`, `{ when: 'VIEWPORT' }`, or `{ when: 'HOVER' }`";u(_(r),o);const i=Object.keys(r);u(i.length===1&&i[0]==="when",o);const{when:a}=r;if(a==="HOVER"||a==="VIEWPORT")return{when:a};u(!1,o)}return{when:"HOVER"}})();return s&&s.when==="VIEWPORT"&&!e._isProduction&&(ye(!1,"Viewport prefetching is disabled in development",{onlyOnce:!0}),s={when:"HOVER"}),s}function In(e){let t=e.getAttribute("data-prefetch");if(v(t===null,"The `data-prefetch` attribute is outdated.",{showStackTrace:!1,onlyOnce:!0}),t===null)return null;if(l(typeof t=="string"),t==="true")return!0;if(t==="false")return!1;u(!1,`Wrong data-prefetch value: \`"${t}"\`; it should be \`"true"\` or \`"false"\`.`)}const je=new Map;function $e(e){const t=Be(e);return je.has(t)}function He(e){const t=Be(e);je.set(t,!0)}function Be(e){return Mt(e)}const ie=new Map;async function G(e){if(u(!Fe(e),`You are trying to prefetch ${e} which is an external URL. This doesn't make sense since vite-plugin-ssr cannot prefetch external links.`),$e(e))return;He(e);const{pageId:t,pageFilesAll:n,pageConfigs:s}=await Ie(e);if(t)try{await A(n,s,t)}catch(r){if(q(r))J(r,!0);else throw r}}function kn(e){He(e.urlOriginal),[...document.getElementsByTagName("A")].forEach(async n=>{if(ie.has(n))return;ie.set(n,!0);const s=n.getAttribute("href");if(Ne(n)||(l(s),!await ke(s))||$e(s))return;const r=An(e,n);if(r.prefetchStaticAssets){if(r.prefetchStaticAssets.when==="HOVER")n.addEventListener("mouseover",()=>G(s)),n.addEventListener("touchstart",()=>G(s),{passive:!0});else if(r.prefetchStaticAssets.when==="VIEWPORT"){const o=new IntersectionObserver(i=>{i.forEach(a=>{a.isIntersecting&&(G(s),o.disconnect())})});o.observe(n)}}else return})}function We(){let e=window.history.state;e||(e={});let t=!1;"timestamp"in e||(t=!0,e.timestamp=Ve()),"scrollPosition"in e||(t=!0,e.scrollPosition=Le()),De(e),t&&Q(e)}function X(){const e=window.history.state||{};return De(e),e}function Le(){return{x:window.scrollX,y:window.scrollY}}function Ve(){return new Date().getTime()}function ae(){const e=Le(),t=X();Q({...t,scrollPosition:e})}function Nn(e,t){if(t)Q(X(),e);else{const n=Ve();jn({timestamp:n,scrollPosition:null},e)}}function De(e){if(l(z(e)),"timestamp"in e){const{timestamp:t}=e;l(typeof t=="number")}if("scrollPosition"in e){const{scrollPosition:t}=e;t!==null&&l(d(t,"x","number")&&d(t,"y","number"))}}function Q(e,t){window.history.replaceState(e,"",t??null)}function jn(e,t){window.history.pushState(e,"",t)}const $n=W("navigate.ts",{});function Hn(e){$n.navigate=e}const S=W("useClientRouter.ts",{previousState:$()});zn();We();function J(e,t){l(q(e)),S.clientRoutingIsDisabled=!0,t&&console.log(e),ye(!1,"New deployed frontend detected. The next page navigation will use Server Routing instead of Client Routing.",{onlyOnce:!0})}function Bn(){Un(),Wn((r,{keepScrollPosition:o})=>{s({scrollTarget:o?"preserve-scroll":"scroll-to-top-or-hash",url:r,isBackwardNavigation:!1,checkClientSideRenderable:!0})}),Ln((r,o)=>{s({scrollTarget:r,isBackwardNavigation:o})}),Hn(async(r,{keepScrollPosition:o=!1,overwriteLastHistoryEntry:i=!1}={})=>{await s({scrollTarget:o?"preserve-scroll":"scroll-to-top-or-hash",url:r,overwriteLastHistoryEntry:i,isBackwardNavigation:!1,checkClientSideRenderable:!0})});let e=0,t,n=!1;s({scrollTarget:"preserve-scroll",isBackwardNavigation:null});return;async function s({scrollTarget:r,url:o=x(),overwriteLastHistoryEntry:i=!1,isBackwardNavigation:a,checkClientSideRenderable:c}){var f;if(S.clientRoutingIsDisabled){j(o);return}if(c&&!await ke(o)){j(o);return}const p={urlOriginal:o,isBackwardNavigation:a},g=++e;l(g>=1),g>1&&n===!1&&((f=S.onPageTransitionStart)===null||f===void 0||f.call(S,p),n=!0);let y=!1;const b=()=>g===1&&y===!1?!1:g!==e,h=await xe(p);if(b())return;const R=g===1;m(h,{_isFirstRenderAttempt:R});let C;try{C=await fn(h)}catch(P){if(ue(P,h))return;console.error(P);try{C=await gn(h)}catch(w){if(ue(w,h)||(R||setTimeout(()=>{window.location.pathname=o},0),Qt(P,w)))return;throw w}}if(m(h,C),V(h,"onPageTransitionStart"),S.onPageTransitionStart=h.exports.onPageTransitionStart,h.exports.hydrationCanBeAborted?y=!0:v(!Xt(),"You seem to be using React; we recommend setting `hydrationCanBeAborted` to `true`, see https://vite-plugin-ssr.com/clientRouting",{showStackTrace:!1,onlyOnce:!0}),!b()&&(t&&await t,!b())){if(Vn(o,i),Te.markNavigationChange(),l(t===void 0),t=(async()=>{await rt(h,!0),kn(h)})(),await t,t=void 0,h._isFirstRenderAttempt){V(h,"onHydrationEnd");const{onHydrationEnd:P}=h.exports;if(P){const w=h.exportsAll.onHydrationEnd[0].exportSource;l(w),await ge(()=>P(h),"onHydrationEnd",w)}}else g===e&&(h.exports.onPageTransitionEnd&&(V(h,"onPageTransitionEnd"),h.exports.onPageTransitionEnd(h)),n=!1);Ue(r),Z(),S.initialRenderIsDone=!0}}}function Wn(e){document.addEventListener("click",t);return;async function t(r){if(!n(r))return;const o=s(r.target);if(!o)return;const i=o.getAttribute("href");if(Ne(o))return;l(i),r.preventDefault();const a=![null,"false"].includes(o.getAttribute("keep-scroll-position"));e(i,{keepScrollPosition:a})}function n(r){return r.button===0&&!r.ctrlKey&&!r.shiftKey&&!r.altKey&&!r.metaKey}function s(r){for(;r.tagName!=="A";){const{parentNode:o}=r;if(!o)return null;r=o}return r}}function Ln(e){window.addEventListener("popstate",()=>{const t=$(),n=t.historyState.scrollPosition||"scroll-to-top-or-hash",s=t.urlWithoutHash===S.previousState.urlWithoutHash,r=!t.historyState.timestamp||!S.previousState.historyState.timestamp?null:t.historyState.timestamp<S.previousState.historyState.timestamp;S.previousState=t,s?window.history.state===null?(We(),S.previousState=$()):Ue(n):e(n,r)})}function Vn(e,t){x()!==e&&(Z(),Nn(e,t),S.previousState=$())}function $(){return{urlWithoutHash:x({withoutHash:!0}),historyState:X()}}function Ue(e){if(e==="preserve-scroll")return;let t;if(e==="scroll-to-top-or-hash"){const n=Gn();if(n&&n!=="top"){const s=document.getElementById(n)||document.getElementsByName(n)[0];if(s){s.scrollIntoView();return}}t={x:0,y:0}}else l("x"in e&&"y"in e),t=e;Dn(t)}function Dn(e){const t=()=>window.scrollTo(e.x,e.y),n=()=>window.scrollX===e.x&&window.scrollY===e.y;n()||(t(),!n()&&requestAnimationFrame(()=>{t(),!n()&&setTimeout(async()=>{if(t(),n())return;const s=new Date().getTime();for(;;)if(await Zt(10),t(),n()||new Date().getTime()-s>100)return},0)}))}function Un(){window.addEventListener("scroll",qt(ae,Math.ceil(1e3/3)),{passive:!0}),Ge(ae)}function Gn(){let{hash:e}=window.location;return e===""?null:(l(e.startsWith("#")),e=e.slice(1),e)}function zn(){le(),Ge(le),Kn(()=>S.initialRenderIsDone&&Z())}function Z(){"scrollRestoration"in window.history&&(window.history.scrollRestoration="manual")}function le(){"scrollRestoration"in window.history&&(window.history.scrollRestoration="auto")}function Ge(e){window.addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"&&e()})}function Kn(e){window.addEventListener("visibilitychange",()=>{document.visibilityState==="visible"&&e()})}function ue(e,t){return!!(e!=null&&e._abortRendering||Yn(e,t))}function Yn(e,t){if(!q(e))return!1;if(t._isFirstRenderAttempt)throw J(e,!1),e;return J(e,!0),j(t.urlOriginal),!0}ot();Bn();
