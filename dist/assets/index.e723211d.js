var Fs=Object.defineProperty,Bs=Object.defineProperties;var Hs=Object.getOwnPropertyDescriptors;var Qn=Object.getOwnPropertySymbols;var Vs=Object.prototype.hasOwnProperty,js=Object.prototype.propertyIsEnumerable;var er=(n,e,t)=>e in n?Fs(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,de=(n,e)=>{for(var t in e||(e={}))Vs.call(e,t)&&er(n,t,e[t]);if(Qn)for(var t of Qn(e))js.call(e,t)&&er(n,t,e[t]);return n},je=(n,e)=>Bs(n,Hs(e));const zs=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerpolicy&&(s.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?s.credentials="include":i.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}};zs();function H(){}function Te(n,e){for(const t in e)n[t]=e[t];return n}function ii(n){return n()}function tr(){return Object.create(null)}function Be(n){n.forEach(ii)}function si(n){return typeof n=="function"}function W(n,e){return n!=n?e==e:n!==e||n&&typeof n=="object"||typeof n=="function"}let kt;function Qe(n,e){return kt||(kt=document.createElement("a")),kt.href=e,n===kt.href}function Ws(n){return Object.keys(n).length===0}function Dn(n,...e){if(n==null)return H;const t=n.subscribe(...e);return t.unsubscribe?()=>t.unsubscribe():t}function Le(n){let e;return Dn(n,t=>e=t)(),e}function J(n,e,t){n.$$.on_destroy.push(Dn(e,t))}function lt(n,e,t,r){if(n){const i=oi(n,e,t,r);return n[0](i)}}function oi(n,e,t,r){return n[1]&&r?Te(t.ctx.slice(),n[1](r(e))):t.ctx}function ut(n,e,t,r){if(n[2]&&r){const i=n[2](r(t));if(e.dirty===void 0)return i;if(typeof i=="object"){const s=[],o=Math.max(e.dirty.length,i.length);for(let a=0;a<o;a+=1)s[a]=e.dirty[a]|i[a];return s}return e.dirty|i}return e.dirty}function dt(n,e,t,r,i,s){if(i){const o=oi(e,t,r,s);n.p(o,i)}}function ht(n){if(n.ctx.length>32){const e=[],t=n.ctx.length/32;for(let r=0;r<t;r++)e[r]=-1;return e}return-1}function Dt(n){const e={};for(const t in n)t[0]!=="$"&&(e[t]=n[t]);return e}function Mt(n,e){const t={};e=new Set(e);for(const r in n)!e.has(r)&&r[0]!=="$"&&(t[r]=n[r]);return t}function Ks(n,e,t){return n.set(t),e}function w(n,e){n.appendChild(e)}function v(n,e,t){n.insertBefore(e,t||null)}function _(n){n.parentNode.removeChild(n)}function qs(n,e){for(let t=0;t<n.length;t+=1)n[t]&&n[t].d(e)}function g(n){return document.createElement(n)}function z(n){return document.createTextNode(n)}function D(){return z(" ")}function Wt(){return z("")}function Mn(n,e,t,r){return n.addEventListener(e,t,r),()=>n.removeEventListener(e,t,r)}function h(n,e,t){t==null?n.removeAttribute(e):n.getAttribute(e)!==t&&n.setAttribute(e,t)}function nr(n,e){const t=Object.getOwnPropertyDescriptors(n.__proto__);for(const r in e)e[r]==null?n.removeAttribute(r):r==="style"?n.style.cssText=e[r]:r==="__value"?n.value=n[r]=e[r]:t[r]&&t[r].set?n[r]=e[r]:h(n,r,e[r])}function Gs(n){return Array.from(n.childNodes)}function In(n,e){e=""+e,n.wholeText!==e&&(n.data=e)}function wn(n,e,t,r){t===null?n.style.removeProperty(e):n.style.setProperty(e,t,r?"important":"")}function rr(n,e,t){n.classList[t?"add":"remove"](e)}function Js(n,e,t=!1){const r=document.createEvent("CustomEvent");return r.initCustomEvent(n,t,!1,e),r}let et;function qe(n){et=n}function ft(){if(!et)throw new Error("Function called outside component initialization");return et}function ai(n){ft().$$.on_mount.push(n)}function Ys(n){ft().$$.on_destroy.push(n)}function Xs(){const n=ft();return(e,t)=>{const r=n.$$.callbacks[e];if(r){const i=Js(e,t);r.slice().forEach(s=>{s.call(n,i)})}}}function Ge(n,e){ft().$$.context.set(n,e)}function _e(n){return ft().$$.context.get(n)}const ze=[],ir=[],Rt=[],sr=[],ci=Promise.resolve();let En=!1;function li(){En||(En=!0,ci.then(ui))}function Zs(){return li(),ci}function Tn(n){Rt.push(n)}const sn=new Set;let At=0;function ui(){const n=et;do{for(;At<ze.length;){const e=ze[At];At++,qe(e),Qs(e.$$)}for(qe(null),ze.length=0,At=0;ir.length;)ir.pop()();for(let e=0;e<Rt.length;e+=1){const t=Rt[e];sn.has(t)||(sn.add(t),t())}Rt.length=0}while(ze.length);for(;sr.length;)sr.pop()();En=!1,sn.clear(),qe(n)}function Qs(n){if(n.fragment!==null){n.update(),Be(n.before_update);const e=n.dirty;n.dirty=[-1],n.fragment&&n.fragment.p(n.ctx,e),n.after_update.forEach(Tn)}}const $t=new Set;let ye;function Kt(){ye={r:0,c:[],p:ye}}function qt(){ye.r||Be(ye.c),ye=ye.p}function R(n,e){n&&n.i&&($t.delete(n),n.i(e))}function $(n,e,t,r){if(n&&n.o){if($t.has(n))return;$t.add(n),ye.c.push(()=>{$t.delete(n),r&&(t&&n.d(1),r())}),n.o(e)}}function di(n,e){const t={},r={},i={$$scope:1};let s=n.length;for(;s--;){const o=n[s],a=e[s];if(a){for(const l in o)l in a||(r[l]=1);for(const l in a)i[l]||(t[l]=a[l],i[l]=1);n[s]=a}else for(const l in o)i[l]=1}for(const o in r)o in t||(t[o]=void 0);return t}function or(n){return typeof n=="object"&&n!==null?n:{}}function F(n){n&&n.c()}function U(n,e,t,r){const{fragment:i,on_mount:s,on_destroy:o,after_update:a}=n.$$;i&&i.m(e,t),r||Tn(()=>{const l=s.map(ii).filter(si);o?o.push(...l):Be(l),n.$$.on_mount=[]}),a.forEach(Tn)}function x(n,e){const t=n.$$;t.fragment!==null&&(Be(t.on_destroy),t.fragment&&t.fragment.d(e),t.on_destroy=t.fragment=null,t.ctx=[])}function eo(n,e){n.$$.dirty[0]===-1&&(ze.push(n),li(),n.$$.dirty.fill(0)),n.$$.dirty[e/31|0]|=1<<e%31}function q(n,e,t,r,i,s,o,a=[-1]){const l=et;qe(n);const c=n.$$={fragment:null,ctx:null,props:s,update:H,not_equal:i,bound:tr(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(l?l.$$.context:[])),callbacks:tr(),dirty:a,skip_bound:!1,root:e.target||l.$$.root};o&&o(c.root);let u=!1;if(c.ctx=t?t(n,e.props||{},(d,p,...m)=>{const E=m.length?m[0]:p;return c.ctx&&i(c.ctx[d],c.ctx[d]=E)&&(!c.skip_bound&&c.bound[d]&&c.bound[d](E),u&&eo(n,d)),p}):[],c.update(),u=!0,Be(c.before_update),c.fragment=r?r(c.ctx):!1,e.target){if(e.hydrate){const d=Gs(e.target);c.fragment&&c.fragment.l(d),d.forEach(_)}else c.fragment&&c.fragment.c();e.intro&&R(n.$$.fragment),U(n,e.target,e.anchor,e.customElement),ui()}qe(l)}class G{$destroy(){x(this,1),this.$destroy=H}$on(e,t){const r=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return r.push(t),()=>{const i=r.indexOf(t);i!==-1&&r.splice(i,1)}}$set(e){this.$$set&&!Ws(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const ar=n=>typeof n=="undefined",hi=n=>typeof n=="function",fi=n=>typeof n=="number";function to(n){return!n.defaultPrevented&&n.button===0&&!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)}function pi(){let n=0;return()=>n++}function no(){return Math.random().toString(36).substring(2)}const ve=typeof window=="undefined";function mi(n,e,t){return n.addEventListener(e,t),()=>n.removeEventListener(e,t)}const $e=[];function ro(n,e){return{subscribe:X(n,e).subscribe}}function X(n,e=H){let t;const r=new Set;function i(a){if(W(n,a)&&(n=a,t)){const l=!$e.length;for(const c of r)c[1](),$e.push(c,n);if(l){for(let c=0;c<$e.length;c+=2)$e[c][0]($e[c+1]);$e.length=0}}}function s(a){i(a(n))}function o(a,l=H){const c=[a,l];return r.add(c),r.size===1&&(t=e(i)||H),a(n),()=>{r.delete(c),r.size===0&&(t(),t=null)}}return{set:i,update:s,subscribe:o}}function io(n,e,t){const r=!Array.isArray(n),i=r?[n]:n,s=e.length<2;return ro(t,o=>{let a=!1;const l=[];let c=0,u=H;const d=()=>{if(c)return;u();const m=e(r?l[0]:l,o);s?o(m):u=si(m)?m:H},p=i.map((m,E)=>Dn(m,k=>{l[E]=k,c&=~(1<<E),a&&d()},()=>{c|=1<<E}));return a=!0,d(),function(){Be(p),u()}})}const pt=n=>`@@svnav-ctx__${n}`,Sn=pt("LOCATION"),Ue=pt("ROUTER"),gi=pt("ROUTE"),so=pt("ROUTE_PARAMS"),oo=pt("FOCUS_ELEM"),_i=/^:(.+)/,kn=(n,e)=>n.substr(0,e.length)===e,ao=n=>n==="",co=n=>_i.test(n),vi=n=>n[0]==="*",lo=n=>n.replace(/\*.*$/,""),bi=n=>n.replace(/(^\/+|\/+$)/g,"");function te(n,e=!1){const t=bi(n).split("/");return e?t.filter(Boolean):t}const on=(n,e)=>n+(e?`?${e}`:""),Ln=n=>`/${bi(n)}`;function mt(...n){const e=r=>te(r,!0).join("/"),t=n.map(e).join("/");return Ln(t)}const Un=1,Gt=2,Se=3,uo=4,yi=5,ho=6,Ii=7,fo=8,po=9,wi=10,Ei=11,mo={[Un]:"Link",[Gt]:"Route",[Se]:"Router",[uo]:"useFocus",[yi]:"useLocation",[ho]:"useMatch",[Ii]:"useNavigate",[fo]:"useParams",[po]:"useResolvable",[wi]:"useResolve",[Ei]:"navigate"},xn=n=>mo[n];function go(n,e){let t;return n===Gt?t=e.path?`path="${e.path}"`:"default":n===Un?t=`to="${e.to}"`:n===Se&&(t=`basepath="${e.basepath||""}"`),`<${xn(n)} ${t||""} />`}function _o(n,e,t,r){const i=t&&go(r||n,t),s=i?`

Occurred in: ${i}`:"",o=xn(n),a=hi(e)?e(o):e;return`<${o}> ${a}${s}`}const Ti=n=>(...e)=>n(_o(...e)),Si=Ti(n=>{throw new Error(n)}),Lt=Ti(console.warn),cr=4,vo=3,bo=2,yo=1,Io=1;function wo(n,e){const t=n.default?0:te(n.fullPath).reduce((r,i)=>{let s=r;return s+=cr,ao(i)?s+=Io:co(i)?s+=bo:vi(i)?s-=cr+yo:s+=vo,s},0);return{route:n,score:t,index:e}}function Eo(n){return n.map(wo).sort((e,t)=>e.score<t.score?1:e.score>t.score?-1:e.index-t.index)}function ki(n,e){let t,r;const[i]=e.split("?"),s=te(i),o=s[0]==="",a=Eo(n);for(let l=0,c=a.length;l<c;l++){const{route:u}=a[l];let d=!1;const p={},m=y=>je(de({},u),{params:p,uri:y});if(u.default){r=m(e);continue}const E=te(u.fullPath),k=Math.max(s.length,E.length);let f=0;for(;f<k;f++){const y=E[f],M=s[f];if(!ar(y)&&vi(y)){const C=y==="*"?"*":y.slice(1);p[C]=s.slice(f).map(decodeURIComponent).join("/");break}if(ar(M)){d=!0;break}const N=_i.exec(y);if(N&&!o){const C=decodeURIComponent(M);p[N[1]]=C}else if(y!==M){d=!0;break}}if(!d){t=m(mt(...s.slice(0,f)));break}}return t||r||null}function Ai(n,e){return ki([n],e)}function To(n,e){if(kn(n,"/"))return n;const[t,r]=n.split("?"),[i]=e.split("?"),s=te(t),o=te(i);if(s[0]==="")return on(i,r);if(!kn(s[0],".")){const c=o.concat(s).join("/");return on((i==="/"?"":"/")+c,r)}const a=o.concat(s),l=[];return a.forEach(c=>{c===".."?l.pop():c!=="."&&l.push(c)}),on(`/${l.join("/")}`,r)}function lr(n,e){const{pathname:t,hash:r="",search:i="",state:s}=n,o=te(e,!0),a=te(t,!0);for(;o.length;)o[0]!==a[0]&&Si(Se,`Invalid state: All locations must begin with the basepath "${e}", found "${t}"`),o.shift(),a.shift();return{pathname:mt(...a),hash:r,search:i,state:s}}const ur=n=>n.length===1?"":n;function Ri(n){const e=n.indexOf("?"),t=n.indexOf("#"),r=e!==-1,i=t!==-1,s=i?ur(n.substr(t)):"",o=i?n.substr(0,t):n,a=r?ur(o.substr(e)):"";return{pathname:r?o.substr(0,e):o,search:a,hash:s}}function So(n,e,t){return mt(t,To(n,e))}function ko(n,e){const t=Ln(lo(n)),r=te(t,!0),i=te(e,!0).slice(0,r.length),s=Ai({fullPath:t},mt(...i));return s&&s.uri}const an="POP",Ao="PUSH",Ro="REPLACE";function cn(n){return je(de({},n.location),{pathname:encodeURI(decodeURI(n.location.pathname)),state:n.history.state,_key:n.history.state&&n.history.state._key||"initial"})}function $o(n){let e=[],t=cn(n),r=an;const i=(s=e)=>s.forEach(o=>o({location:t,action:r}));return{get location(){return t},listen(s){e.push(s);const o=()=>{t=cn(n),r=an,i([s])};i([s]);const a=mi(n,"popstate",o);return()=>{a(),e=e.filter(l=>l!==s)}},navigate(s,o){const{state:a={},replace:l=!1}=o||{};if(r=l?Ro:Ao,fi(s))o&&Lt(Ei,"Navigation options (state or replace) are not supported, when passing a number as the first argument to navigate. They are ignored."),r=an,n.history.go(s);else{const c=je(de({},a),{_key:no()});try{n.history[l?"replaceState":"pushState"](c,"",s)}catch{n.location[l?"replace":"assign"](s)}}t=cn(n),i()}}}function ln(n,e){return je(de({},Ri(e)),{state:n})}function Co(n="/"){let e=0,t=[ln(null,n)];return{get entries(){return t},get location(){return t[e]},addEventListener(){},removeEventListener(){},history:{get state(){return t[e].state},pushState(r,i,s){e++,t=t.slice(0,e),t.push(ln(r,s))},replaceState(r,i,s){t[e]=ln(r,s)},go(r){const i=e+r;i<0||i>t.length-1||(e=i)}}}}const Oo=!!(!ve&&window.document&&window.document.createElement),No=!ve&&window.location.origin==="null",Po=$o(Oo&&!No?window:Co());let se=null,$i=!0;function Do(n,e){const t=document.querySelectorAll("[data-svnav-router]");for(let r=0;r<t.length;r++){const i=t[r],s=Number(i.dataset.svnavRouter);if(s===n)return!0;if(s===e)return!1}return!1}function Mo(n){(!se||n.level>se.level||n.level===se.level&&Do(n.routerId,se.routerId))&&(se=n)}function Lo(){se=null}function Uo(){$i=!1}function dr(n){if(!n)return!1;const e="tabindex";try{if(!n.hasAttribute(e)){n.setAttribute(e,"-1");let t;t=mi(n,"blur",()=>{n.removeAttribute(e),t()})}return n.focus(),document.activeElement===n}catch{return!1}}function xo(n,e){return Number(n.dataset.svnavRouteEnd)===e}function Fo(n){return/^H[1-6]$/i.test(n.tagName)}function hr(n,e=document){return e.querySelector(n)}function Bo(n){let t=hr(`[data-svnav-route-start="${n}"]`).nextElementSibling;for(;!xo(t,n);){if(Fo(t))return t;const r=hr("h1,h2,h3,h4,h5,h6",t);if(r)return r;t=t.nextElementSibling}return null}function Ho(n){Promise.resolve(Le(n.focusElement)).then(e=>{const t=e||Bo(n.id);t||Lt(Se,`Could not find an element to focus. You should always render a header for accessibility reasons, or set a custom focus element via the "useFocus" hook. If you don't want this Route or Router to manage focus, pass "primary={false}" to it.`,n,Gt),!dr(t)&&dr(document.documentElement)})}const Vo=(n,e,t)=>(r,i)=>Zs().then(()=>{if(!se||$i){Uo();return}if(r&&Ho(se.route),n.announcements&&i){const{path:s,fullPath:o,meta:a,params:l,uri:c}=se.route,u=n.createAnnouncement({path:s,fullPath:o,meta:a,params:l,uri:c},Le(t));Promise.resolve(u).then(d=>{e.set(d)})}Lo()}),jo="position:fixed;top:-1px;left:0;width:1px;height:1px;padding:0;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0;";function zo(n){let e,t;return{c(){e=g("div"),t=z(n[0]),h(e,"role","status"),h(e,"aria-atomic","true"),h(e,"aria-live","polite"),h(e,"style",jo)},m(r,i){v(r,e,i),w(e,t)},p(r,i){i[0]&1&&In(t,r[0])},d(r){r&&_(e)}}}function Wo(n){let e,t,r,i,s;const o=n[20].default,a=lt(o,n,n[19],null);let l=n[2]&&n[4]&&n[1].announcements&&zo(n);return{c(){e=g("div"),t=D(),a&&a.c(),r=D(),l&&l.c(),i=Wt(),wn(e,"display","none"),h(e,"aria-hidden","true"),h(e,"data-svnav-router",n[3])},m(c,u){v(c,e,u),v(c,t,u),a&&a.m(c,u),v(c,r,u),l&&l.m(c,u),v(c,i,u),s=!0},p(c,u){a&&a.p&&(!s||u[0]&524288)&&dt(a,o,c,c[19],s?ut(o,c[19],u,null):ht(c[19]),null),c[2]&&c[4]&&c[1].announcements&&l.p(c,u)},i(c){s||(R(a,c),s=!0)},o(c){$(a,c),s=!1},d(c){c&&_(e),c&&_(t),a&&a.d(c),c&&_(r),l&&l.d(c),c&&_(i)}}}const Ko=pi(),fr="/";function qo(n,e,t){let r,i,s,o,a,{$$slots:l={},$$scope:c}=e,{basepath:u=fr}=e,{url:d=null}=e,{history:p=Po}=e,{primary:m=!0}=e,{a11y:E={}}=e;const k=de({createAnnouncement:O=>`Navigated to ${O.uri}`,announcements:!0},E),f=u,y=Ln(u),M=_e(Sn),N=_e(Ue),C=!M,V=Ko(),b=m&&!(N&&!N.manageFocus),P=X("");J(n,P,O=>t(0,a=O));const T=X([]);J(n,T,O=>t(18,o=O));const I=X(null);J(n,I,O=>t(16,i=O));let j=!1;const S=C?0:N.level+1,Y=C?X((()=>lr(ve?Ri(d):p.location,y))()):M;J(n,Y,O=>t(15,r=O));const Re=X(r);J(n,Re,O=>t(17,s=O));const St=Vo(k,P,Y),Zn=O=>Z=>Z.filter(ue=>ue.id!==O);function Us(O){if(ve){if(j)return;const Z=Ai(O,r.pathname);if(Z)return j=!0,Z}else T.update(Z=>{const ue=Zn(O.id)(Z);return ue.push(O),ue})}function xs(O){T.update(Zn(O))}return!C&&u!==fr&&Lt(Se,'Only top-level Routers can have a "basepath" prop. It is ignored.',{basepath:u}),C&&(ai(()=>p.listen(Z=>{const ue=lr(Z.location,y);Re.set(r),Y.set(ue)})),Ge(Sn,Y)),Ge(Ue,{activeRoute:I,registerRoute:Us,unregisterRoute:xs,manageFocus:b,level:S,id:V,history:C?p:N.history,basepath:C?y:N.basepath}),n.$$set=O=>{"basepath"in O&&t(10,u=O.basepath),"url"in O&&t(11,d=O.url),"history"in O&&t(12,p=O.history),"primary"in O&&t(13,m=O.primary),"a11y"in O&&t(14,E=O.a11y),"$$scope"in O&&t(19,c=O.$$scope)},n.$$.update=()=>{if(n.$$.dirty[0]&1024&&u!==f&&Lt(Se,'You cannot change the "basepath" prop. It is ignored.'),n.$$.dirty[0]&294912){const O=ki(o,r.pathname);I.set(O)}if(n.$$.dirty[0]&163840&&C){const O=!!r.hash,Z=!O&&b,ue=!O||r.pathname!==s.pathname;St(Z,ue)}n.$$.dirty[0]&65536&&b&&i&&i.primary&&Mo({level:S,routerId:V,route:i})},[a,k,C,V,b,P,T,I,Y,Re,u,d,p,m,E,r,i,s,o,c,l]}class Ci extends G{constructor(e){super();q(this,e,qo,Wo,W,{basepath:10,url:11,history:12,primary:13,a11y:14},null,[-1,-1])}}function gt(n,e,t=Ue,r=Se){_e(t)||Si(n,s=>`You cannot use ${s} outside of a ${xn(r)}.`,e)}const Go=n=>{const{subscribe:e}=_e(n);return{subscribe:e}};function Fn(){return gt(yi),Go(Sn)}function Oi(){const{history:n}=_e(Ue);return n}function Ni(){const n=_e(gi);return n?io(n,e=>e.base):X("/")}function Pi(){gt(wi);const n=Ni(),{basepath:e}=_e(Ue);return r=>So(r,Le(n),e)}function Di(){gt(Ii);const n=Pi(),{navigate:e}=Oi();return(r,i)=>{const s=fi(r)?r:n(r);return e(s,i)}}const Jo=n=>({params:n&16,location:n&8}),pr=n=>({params:ve?Le(n[9]):n[4],location:n[3],navigate:n[10]});function mr(n){let e,t;return e=new Ci({props:{primary:n[1],$$slots:{default:[Zo]},$$scope:{ctx:n}}}),{c(){F(e.$$.fragment)},m(r,i){U(e,r,i),t=!0},p(r,i){const s={};i&2&&(s.primary=r[1]),i&264217&&(s.$$scope={dirty:i,ctx:r}),e.$set(s)},i(r){t||(R(e.$$.fragment,r),t=!0)},o(r){$(e.$$.fragment,r),t=!1},d(r){x(e,r)}}}function Yo(n){let e;const t=n[17].default,r=lt(t,n,n[18],pr);return{c(){r&&r.c()},m(i,s){r&&r.m(i,s),e=!0},p(i,s){r&&r.p&&(!e||s&262168)&&dt(r,t,i,i[18],e?ut(t,i[18],s,Jo):ht(i[18]),pr)},i(i){e||(R(r,i),e=!0)},o(i){$(r,i),e=!1},d(i){r&&r.d(i)}}}function Xo(n){let e,t,r;const i=[{location:n[3]},{navigate:n[10]},ve?Le(n[9]):n[4],n[11]];var s=n[0];function o(a){let l={};for(let c=0;c<i.length;c+=1)l=Te(l,i[c]);return{props:l}}return s&&(e=new s(o())),{c(){e&&F(e.$$.fragment),t=Wt()},m(a,l){e&&U(e,a,l),v(a,t,l),r=!0},p(a,l){const c=l&3608?di(i,[l&8&&{location:a[3]},l&1024&&{navigate:a[10]},l&528&&or(ve?Le(a[9]):a[4]),l&2048&&or(a[11])]):{};if(s!==(s=a[0])){if(e){Kt();const u=e;$(u.$$.fragment,1,0,()=>{x(u,1)}),qt()}s?(e=new s(o()),F(e.$$.fragment),R(e.$$.fragment,1),U(e,t.parentNode,t)):e=null}else s&&e.$set(c)},i(a){r||(e&&R(e.$$.fragment,a),r=!0)},o(a){e&&$(e.$$.fragment,a),r=!1},d(a){a&&_(t),e&&x(e,a)}}}function Zo(n){let e,t,r,i;const s=[Xo,Yo],o=[];function a(l,c){return l[0]!==null?0:1}return e=a(n),t=o[e]=s[e](n),{c(){t.c(),r=Wt()},m(l,c){o[e].m(l,c),v(l,r,c),i=!0},p(l,c){let u=e;e=a(l),e===u?o[e].p(l,c):(Kt(),$(o[u],1,1,()=>{o[u]=null}),qt(),t=o[e],t?t.p(l,c):(t=o[e]=s[e](l),t.c()),R(t,1),t.m(r.parentNode,r))},i(l){i||(R(t),i=!0)},o(l){$(t),i=!1},d(l){o[e].d(l),l&&_(r)}}}function Qo(n){let e,t,r,i,s,o=n[2]&&mr(n);return{c(){e=g("div"),t=D(),o&&o.c(),r=D(),i=g("div"),wn(e,"display","none"),h(e,"aria-hidden","true"),h(e,"data-svnav-route-start",n[5]),wn(i,"display","none"),h(i,"aria-hidden","true"),h(i,"data-svnav-route-end",n[5])},m(a,l){v(a,e,l),v(a,t,l),o&&o.m(a,l),v(a,r,l),v(a,i,l),s=!0},p(a,[l]){a[2]?o?(o.p(a,l),l&4&&R(o,1)):(o=mr(a),o.c(),R(o,1),o.m(r.parentNode,r)):o&&(Kt(),$(o,1,1,()=>{o=null}),qt())},i(a){s||(R(o),s=!0)},o(a){$(o),s=!1},d(a){a&&_(e),a&&_(t),o&&o.d(a),a&&_(r),a&&_(i)}}}const ea=pi();function ta(n,e,t){let r;const i=["path","component","meta","primary"];let s=Mt(e,i),o,a,l,c,{$$slots:u={},$$scope:d}=e,{path:p=""}=e,{component:m=null}=e,{meta:E={}}=e,{primary:k=!0}=e;gt(Gt,e);const f=ea(),{registerRoute:y,unregisterRoute:M,activeRoute:N}=_e(Ue);J(n,N,S=>t(15,o=S));const C=Ni();J(n,C,S=>t(16,l=S));const V=Fn();J(n,V,S=>t(3,a=S));const b=X(null);let P;const T=X(),I=X({});J(n,I,S=>t(4,c=S)),Ge(gi,T),Ge(so,I),Ge(oo,b);const j=Di();return ve||Ys(()=>M(f)),n.$$set=S=>{t(23,e=Te(Te({},e),Dt(S))),t(11,s=Mt(e,i)),"path"in S&&t(12,p=S.path),"component"in S&&t(0,m=S.component),"meta"in S&&t(13,E=S.meta),"primary"in S&&t(1,k=S.primary),"$$scope"in S&&t(18,d=S.$$scope)},n.$$.update=()=>{if(n.$$.dirty&77834){const S=p==="",ie=mt(l,p),Y={id:f,path:p,meta:E,default:S,fullPath:S?"":ie,base:S?l:ko(ie,a.pathname),primary:k,focusElement:b};T.set(Y),t(14,P=y(Y))}if(n.$$.dirty&49152&&t(2,r=!!(P||o&&o.id===f)),n.$$.dirty&49156&&r){const{params:S}=P||o;I.set(S)}},e=Dt(e),[m,k,r,a,c,f,N,C,V,I,j,s,p,E,P,o,l,u,d]}class We extends G{constructor(e){super();q(this,e,ta,Qo,W,{path:12,component:0,meta:13,primary:1})}}function na(n){let e,t,r,i;const s=n[13].default,o=lt(s,n,n[12],null);let a=[{href:n[0]},n[2],n[1]],l={};for(let c=0;c<a.length;c+=1)l=Te(l,a[c]);return{c(){e=g("a"),o&&o.c(),nr(e,l)},m(c,u){v(c,e,u),o&&o.m(e,null),t=!0,r||(i=Mn(e,"click",n[4]),r=!0)},p(c,[u]){o&&o.p&&(!t||u&4096)&&dt(o,s,c,c[12],t?ut(s,c[12],u,null):ht(c[12]),null),nr(e,l=di(a,[(!t||u&1)&&{href:c[0]},u&4&&c[2],u&2&&c[1]]))},i(c){t||(R(o,c),t=!0)},o(c){$(o,c),t=!1},d(c){c&&_(e),o&&o.d(c),r=!1,i()}}}function ra(n,e,t){let r,i,s,o,a;const l=["to","replace","state","getProps"];let c=Mt(e,l),u,{$$slots:d={},$$scope:p}=e,{to:m}=e,{replace:E=!1}=e,{state:k={}}=e,{getProps:f=null}=e;gt(Un,e);const y=Fn();J(n,y,b=>t(11,u=b));const M=Xs(),N=Pi(),{navigate:C}=Oi();function V(b){M("click",b),to(b)&&(b.preventDefault(),C(r,{state:k,replace:s||E}))}return n.$$set=b=>{t(18,e=Te(Te({},e),Dt(b))),t(17,c=Mt(e,l)),"to"in b&&t(5,m=b.to),"replace"in b&&t(6,E=b.replace),"state"in b&&t(7,k=b.state),"getProps"in b&&t(8,f=b.getProps),"$$scope"in b&&t(12,p=b.$$scope)},n.$$.update=()=>{n.$$.dirty&2080&&t(0,r=N(m,u)),n.$$.dirty&2049&&t(10,i=kn(u.pathname,r)),n.$$.dirty&2049&&t(9,s=r===u.pathname),n.$$.dirty&512&&t(2,o=s?{"aria-current":"page"}:{}),t(1,a=(()=>{if(hi(f)){const b=f({location:u,href:r,isPartiallyCurrent:i,isCurrent:s});return de(de({},c),b)}return c})())},e=Dt(e),[r,a,o,y,V,m,E,k,f,s,i,u,p,d]}class Ce extends G{constructor(e){super();q(this,e,ra,na,W,{to:5,replace:6,state:7,getProps:8})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mi=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},ia=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const i=n[t++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=n[t++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=n[t++],o=n[t++],a=n[t++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=n[t++],o=n[t++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Li={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<n.length;i+=3){const s=n[i],o=i+1<n.length,a=o?n[i+1]:0,l=i+2<n.length,c=l?n[i+2]:0,u=s>>2,d=(s&3)<<4|a>>4;let p=(a&15)<<2|c>>6,m=c&63;l||(m=64,o||(p=64)),r.push(t[u],t[d],t[p],t[m])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Mi(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):ia(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<n.length;){const s=t[n.charAt(i++)],a=i<n.length?t[n.charAt(i)]:0;++i;const c=i<n.length?t[n.charAt(i)]:64;++i;const d=i<n.length?t[n.charAt(i)]:64;if(++i,s==null||a==null||c==null||d==null)throw Error();const p=s<<2|a>>4;if(r.push(p),c!==64){const m=a<<4&240|c>>2;if(r.push(m),d!==64){const E=c<<6&192|d;r.push(E)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}},sa=function(n){const e=Mi(n);return Li.encodeByteArray(e,!0)},Jt=function(n){return sa(n).replace(/\./g,"")},oa=function(n){try{return Li.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aa{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function K(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function ca(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(K())}function la(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function ua(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function da(){const n=K();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function Ui(){return typeof indexedDB=="object"}function xi(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ha="FirebaseError";class He extends Error{constructor(e,t,r){super(t);this.code=e,this.customData=r,this.name=ha,Object.setPrototypeOf(this,He.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ve.prototype.create)}}class Ve{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?fa(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new He(i,a,r)}}function fa(n,e){return n.replace(pa,(t,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const pa=/\{\$([^}]+)}/g;function ma(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Ut(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const i of t){if(!r.includes(i))return!1;const s=n[i],o=e[i];if(gr(s)&&gr(o)){if(!Ut(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!t.includes(i))return!1;return!0}function gr(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _t(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function ga(n,e){const t=new _a(n,e);return t.subscribe.bind(t)}class _a{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let i;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");va(e,["next","error","complete"])?i=e:i={next:e,error:t,complete:r},i.next===void 0&&(i.next=un),i.error===void 0&&(i.error=un),i.complete===void 0&&(i.complete=un);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console!="undefined"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function va(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function un(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yt(n){return n&&n._delegate?n._delegate:n}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ke(n,e){return new Promise((t,r)=>{n.onsuccess=i=>{t(i.target.result)},n.onerror=i=>{var s;r(`${e}: ${(s=i.target.error)===null||s===void 0?void 0:s.message}`)}})}class _r{constructor(e){this._db=e,this.objectStoreNames=this._db.objectStoreNames}transaction(e,t){return new Fi(this._db.transaction.call(this._db,e,t))}createObjectStore(e,t){return new Bi(this._db.createObjectStore(e,t))}close(){this._db.close()}}class Fi{constructor(e){this._transaction=e,this.complete=new Promise((t,r)=>{this._transaction.oncomplete=function(){t()},this._transaction.onerror=()=>{r(this._transaction.error)},this._transaction.onabort=()=>{r(this._transaction.error)}})}objectStore(e){return new Bi(this._transaction.objectStore(e))}}class Bi{constructor(e){this._store=e}index(e){return new vr(this._store.index(e))}createIndex(e,t,r){return new vr(this._store.createIndex(e,t,r))}get(e){const t=this._store.get(e);return Ke(t,"Error reading from IndexedDB")}put(e,t){const r=this._store.put(e,t);return Ke(r,"Error writing to IndexedDB")}delete(e){const t=this._store.delete(e);return Ke(t,"Error deleting from IndexedDB")}clear(){const e=this._store.clear();return Ke(e,"Error clearing IndexedDB object store")}}class vr{constructor(e){this._index=e}get(e){const t=this._index.get(e);return Ke(t,"Error reading from IndexedDB")}}function Hi(n,e,t){return new Promise((r,i)=>{try{const s=indexedDB.open(n,e);s.onsuccess=o=>{r(new _r(o.target.result))},s.onerror=o=>{var a;i(`Error opening indexedDB: ${(a=o.target.error)===null||a===void 0?void 0:a.message}`)},s.onupgradeneeded=o=>{t(new _r(s.result),o.oldVersion,o.newVersion,new Fi(s.transaction))}}catch(s){i(`Error opening indexedDB: ${s.message}`)}})}class xe{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const be="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ba{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new aa;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Ia(e))try{this.getOrInitializeService({instanceIdentifier:be})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=be){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=be){return this.instances.has(e)}getOptions(e=be){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,t){var r;const i=this.normalizeInstanceIdentifier(t),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(!!r)for(const i of r)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:ya(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=be){return this.component?this.component.multipleInstances?e:be:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function ya(n){return n===be?void 0:n}function Ia(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wa{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new ba(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var B;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(B||(B={}));const Ea={debug:B.DEBUG,verbose:B.VERBOSE,info:B.INFO,warn:B.WARN,error:B.ERROR,silent:B.SILENT},Ta=B.INFO,Sa={[B.DEBUG]:"log",[B.VERBOSE]:"log",[B.INFO]:"info",[B.WARN]:"warn",[B.ERROR]:"error"},ka=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),i=Sa[e];if(i)console[i](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Xt{constructor(e){this.name=e,this._logLevel=Ta,this._logHandler=ka,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in B))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Ea[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,B.DEBUG,...e),this._logHandler(this,B.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,B.VERBOSE,...e),this._logHandler(this,B.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,B.INFO,...e),this._logHandler(this,B.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,B.WARN,...e),this._logHandler(this,B.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,B.ERROR,...e),this._logHandler(this,B.ERROR,...e)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Aa{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Ra(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function Ra(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const An="@firebase/app",br="0.7.20";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bn=new Xt("@firebase/app"),$a="@firebase/app-compat",Ca="@firebase/analytics-compat",Oa="@firebase/analytics",Na="@firebase/app-check-compat",Pa="@firebase/app-check",Da="@firebase/auth",Ma="@firebase/auth-compat",La="@firebase/database",Ua="@firebase/database-compat",xa="@firebase/functions",Fa="@firebase/functions-compat",Ba="@firebase/installations",Ha="@firebase/installations-compat",Va="@firebase/messaging",ja="@firebase/messaging-compat",za="@firebase/performance",Wa="@firebase/performance-compat",Ka="@firebase/remote-config",qa="@firebase/remote-config-compat",Ga="@firebase/storage",Ja="@firebase/storage-compat",Ya="@firebase/firestore",Xa="@firebase/firestore-compat",Za="firebase",Qa="9.6.10";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vi="[DEFAULT]",ec={[An]:"fire-core",[$a]:"fire-core-compat",[Oa]:"fire-analytics",[Ca]:"fire-analytics-compat",[Pa]:"fire-app-check",[Na]:"fire-app-check-compat",[Da]:"fire-auth",[Ma]:"fire-auth-compat",[La]:"fire-rtdb",[Ua]:"fire-rtdb-compat",[xa]:"fire-fn",[Fa]:"fire-fn-compat",[Ba]:"fire-iid",[Ha]:"fire-iid-compat",[Va]:"fire-fcm",[ja]:"fire-fcm-compat",[za]:"fire-perf",[Wa]:"fire-perf-compat",[Ka]:"fire-rc",[qa]:"fire-rc-compat",[Ga]:"fire-gcs",[Ja]:"fire-gcs-compat",[Ya]:"fire-fst",[Xa]:"fire-fst-compat","fire-js":"fire-js",[Za]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xt=new Map,Rn=new Map;function tc(n,e){try{n.container.addComponent(e)}catch(t){Bn.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function tt(n){const e=n.name;if(Rn.has(e))return Bn.debug(`There were multiple attempts to register component ${e}.`),!1;Rn.set(e,n);for(const t of xt.values())tc(t,n);return!0}function ji(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nc={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["storage-delete"]:"Error thrown when deleting from storage. Original error: {$originalErrorMessage}."},ke=new Ve("app","Firebase",nc);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rc{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new xe("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ke.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zt=Qa;function ic(n,e={}){typeof e!="object"&&(e={name:e});const t=Object.assign({name:Vi,automaticDataCollectionEnabled:!1},e),r=t.name;if(typeof r!="string"||!r)throw ke.create("bad-app-name",{appName:String(r)});const i=xt.get(r);if(i){if(Ut(n,i.options)&&Ut(t,i.config))return i;throw ke.create("duplicate-app",{appName:r})}const s=new wa(r);for(const a of Rn.values())s.addComponent(a);const o=new rc(n,t,s);return xt.set(r,o),o}function sc(n=Vi){const e=xt.get(n);if(!e)throw ke.create("no-app",{appName:n});return e}function Oe(n,e,t){var r;let i=(r=ec[n])!==null&&r!==void 0?r:n;t&&(i+=`-${t}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Bn.warn(a.join(" "));return}tt(new xe(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oc="firebase-heartbeat-database",ac=1,nt="firebase-heartbeat-store";let dn=null;function zi(){return dn||(dn=Hi(oc,ac,(n,e)=>{switch(e){case 0:n.createObjectStore(nt)}}).catch(n=>{throw ke.create("storage-open",{originalErrorMessage:n.message})})),dn}async function cc(n){try{return(await zi()).transaction(nt).objectStore(nt).get(Wi(n))}catch(e){throw ke.create("storage-get",{originalErrorMessage:e.message})}}async function yr(n,e){try{const r=(await zi()).transaction(nt,"readwrite");return await r.objectStore(nt).put(e,Wi(n)),r.complete}catch(t){throw ke.create("storage-set",{originalErrorMessage:t.message})}}function Wi(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lc=1024,uc=30*24*60*60*1e3;class dc{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new fc(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Ir();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=uc}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Ir(),{heartbeatsToSend:t,unsentEntries:r}=hc(this._heartbeatsCache.heartbeats),i=Jt(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Ir(){return new Date().toISOString().substring(0,10)}function hc(n,e=lc){const t=[];let r=n.slice();for(const i of n){const s=t.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),wr(t)>e){s.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),wr(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class fc{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Ui()?xi().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await cc(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return yr(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return yr(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function wr(n){return Jt(JSON.stringify({version:2,heartbeats:n})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pc(n){tt(new xe("platform-logger",e=>new Aa(e),"PRIVATE")),tt(new xe("heartbeat",e=>new dc(e),"PRIVATE")),Oe(An,br,n),Oe(An,br,"esm2017"),Oe("fire-js","")}pc("");var mc="firebase",gc="9.6.10";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Oe(mc,gc,"app");/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */function vt(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(n);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(n,r[i])&&(t[r[i]]=n[r[i]]);return t}function Ki(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const _c=Ki,qi=new Ve("auth","Firebase",Ki());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Er=new Xt("@firebase/auth");function Ct(n,...e){Er.logLevel<=B.ERROR&&Er.error(`Auth (${Zt}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ne(n,...e){throw Hn(n,...e)}function Q(n,...e){return Hn(n,...e)}function Gi(n,e,t){const r=Object.assign(Object.assign({},_c()),{[e]:t});return new Ve("auth","Firebase",r).create(e,{appName:n.name})}function vc(n,e,t){const r=t;if(!(e instanceof r))throw r.name!==e.constructor.name&&ne(n,"argument-error"),Gi(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Hn(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return qi.create(n,...e)}function A(n,e,...t){if(!n)throw Hn(e,...t)}function ae(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Ct(e),new Error(e)}function le(n,e){n||ae(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tr=new Map;function ce(n){le(n instanceof Function,"Expected a class definition");let e=Tr.get(n);return e?(le(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Tr.set(n,e),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bc(n,e){const t=ji(n,"auth");if(t.isInitialized()){const i=t.getImmediate(),s=t.getOptions();if(Ut(s,e!=null?e:{}))return i;ne(i,"already-initialized")}return t.initialize({options:e})}function yc(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(ce);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $n(){var n;return typeof self!="undefined"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function Ic(){return Sr()==="http:"||Sr()==="https:"}function Sr(){var n;return typeof self!="undefined"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wc(){return typeof navigator!="undefined"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Ic()||la()||"connection"in navigator)?navigator.onLine:!0}function Ec(){if(typeof navigator=="undefined")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bt{constructor(e,t){this.shortDelay=e,this.longDelay=t,le(t>e,"Short delay should be less than long delay!"),this.isMobile=ca()||ua()}get(){return wc()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vn(n,e){le(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ji{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self!="undefined"&&"fetch"in self)return self.fetch;ae("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self!="undefined"&&"Headers"in self)return self.Headers;ae("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self!="undefined"&&"Response"in self)return self.Response;ae("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tc={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sc=new bt(3e4,6e4);function kc(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function Qt(n,e,t,r,i={}){return Yi(n,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=_t(Object.assign({key:n.config.apiKey},o)).slice(1),l=await n._getAdditionalHeaders();return l["Content-Type"]="application/json",n.languageCode&&(l["X-Firebase-Locale"]=n.languageCode),Ji.fetch()(Xi(n,n.config.apiHost,t,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function Yi(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},Tc),e);try{const i=new Rc(n),s=await Promise.race([t(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw hn(n,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw hn(n,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw hn(n,"email-already-in-use",o);const u=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw Gi(n,u,c);ne(n,u)}}catch(i){if(i instanceof He)throw i;ne(n,"network-request-failed")}}async function Ac(n,e,t,r,i={}){const s=await Qt(n,e,t,r,i);return"mfaPendingCredential"in s&&ne(n,"multi-factor-auth-required",{_serverResponse:s}),s}function Xi(n,e,t,r){const i=`${e}${t}?${r}`;return n.config.emulator?Vn(n.config,i):`${n.config.apiScheme}://${i}`}class Rc{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(Q(this.auth,"network-request-failed")),Sc.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function hn(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const i=Q(n,e,r);return i.customData._tokenResponse=t,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $c(n,e){return Qt(n,"POST","/v1/accounts:delete",e)}async function Cc(n,e){return Qt(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Je(n){if(!!n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Oc(n,e=!1){const t=Yt(n),r=await t.getIdToken(e),i=jn(r);A(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Je(fn(i.auth_time)),issuedAtTime:Je(fn(i.iat)),expirationTime:Je(fn(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function fn(n){return Number(n)*1e3}function jn(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return Ct("JWT malformed, contained fewer than 3 sections"),null;try{const i=oa(t);return i?JSON.parse(i):(Ct("Failed to decode base64 JWT payload"),null)}catch(i){return Ct("Caught error parsing JWT payload as JSON",i),null}}function Nc(n){const e=jn(n);return A(e,"internal-error"),A(typeof e.exp!="undefined","internal-error"),A(typeof e.iat!="undefined","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rt(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof He&&Pc(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function Pc({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dc{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zi{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Je(this.lastLoginAt),this.creationTime=Je(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ft(n){var e;const t=n.auth,r=await n.getIdToken(),i=await rt(n,Cc(t,{idToken:r}));A(i==null?void 0:i.users.length,t,"internal-error");const s=i.users[0];n._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?Uc(s.providerUserInfo):[],a=Lc(n.providerData,o),l=n.isAnonymous,c=!(n.email&&s.passwordHash)&&!(a!=null&&a.length),u=l?c:!1,d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Zi(s.createdAt,s.lastLoginAt),isAnonymous:u};Object.assign(n,d)}async function Mc(n){const e=Yt(n);await Ft(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Lc(n,e){return[...n.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function Uc(n){return n.map(e=>{var{providerId:t}=e,r=vt(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xc(n,e){const t=await Yi(n,{},async()=>{const r=_t({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=n.config,o=Xi(n,i,"/v1/token",`key=${s}`),a=await n._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Ji.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){A(e.idToken,"internal-error"),A(typeof e.idToken!="undefined","internal-error"),A(typeof e.refreshToken!="undefined","internal-error");const t="expiresIn"in e&&typeof e.expiresIn!="undefined"?Number(e.expiresIn):Nc(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return A(!this.accessToken||this.refreshToken,e,"user-token-expired"),!t&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:i,expiresIn:s}=await xc(e,t);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:i,expirationTime:s}=t,o=new it;return r&&(A(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(A(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(A(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new it,this.toJSON())}_performRefresh(){return ae("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function he(n,e){A(typeof n=="string"||typeof n=="undefined","internal-error",{appName:e})}class Ee{constructor(e){var{uid:t,auth:r,stsTokenManager:i}=e,s=vt(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Dc(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Zi(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await rt(this,this.stsTokenManager.getToken(this.auth,e));return A(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Oc(this,e)}reload(){return Mc(this)}_assign(e){this!==e&&(A(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new Ee(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){A(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await Ft(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await rt(this,$c(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,i,s,o,a,l,c,u;const d=(r=t.displayName)!==null&&r!==void 0?r:void 0,p=(i=t.email)!==null&&i!==void 0?i:void 0,m=(s=t.phoneNumber)!==null&&s!==void 0?s:void 0,E=(o=t.photoURL)!==null&&o!==void 0?o:void 0,k=(a=t.tenantId)!==null&&a!==void 0?a:void 0,f=(l=t._redirectEventId)!==null&&l!==void 0?l:void 0,y=(c=t.createdAt)!==null&&c!==void 0?c:void 0,M=(u=t.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:N,emailVerified:C,isAnonymous:V,providerData:b,stsTokenManager:P}=t;A(N&&P,e,"internal-error");const T=it.fromJSON(this.name,P);A(typeof N=="string",e,"internal-error"),he(d,e.name),he(p,e.name),A(typeof C=="boolean",e,"internal-error"),A(typeof V=="boolean",e,"internal-error"),he(m,e.name),he(E,e.name),he(k,e.name),he(f,e.name),he(y,e.name),he(M,e.name);const I=new Ee({uid:N,auth:e,email:p,emailVerified:C,displayName:d,isAnonymous:V,photoURL:E,phoneNumber:m,tenantId:k,stsTokenManager:T,createdAt:y,lastLoginAt:M});return b&&Array.isArray(b)&&(I.providerData=b.map(j=>Object.assign({},j))),f&&(I._redirectEventId=f),I}static async _fromIdTokenResponse(e,t,r=!1){const i=new it;i.updateFromServerResponse(t);const s=new Ee({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Ft(s),s}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qi{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Qi.type="NONE";const kr=Qi;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ot(n,e,t){return`firebase:${n}:${e}:${t}`}class Ne{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Ot(this.userKey,i.apiKey,s),this.fullPersistenceKey=Ot("persistence",i.apiKey,s),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Ee._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new Ne(ce(kr),e,r);const i=(await Promise.all(t.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||ce(kr);const o=Ot(r,e.config.apiKey,e.name);let a=null;for(const c of t)try{const u=await c._get(o);if(u){const d=Ee._fromJSON(e,u);c!==s&&(a=d),s=c;break}}catch{}const l=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new Ne(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(t.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new Ne(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ar(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(ns(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(es(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(is(e))return"Blackberry";if(ss(e))return"Webos";if(zn(e))return"Safari";if((e.includes("chrome/")||ts(e))&&!e.includes("edge/"))return"Chrome";if(rs(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function es(n=K()){return/firefox\//i.test(n)}function zn(n=K()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function ts(n=K()){return/crios\//i.test(n)}function ns(n=K()){return/iemobile/i.test(n)}function rs(n=K()){return/android/i.test(n)}function is(n=K()){return/blackberry/i.test(n)}function ss(n=K()){return/webos/i.test(n)}function en(n=K()){return/iphone|ipad|ipod/i.test(n)}function Fc(n=K()){var e;return en(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Bc(){return da()&&document.documentMode===10}function os(n=K()){return en(n)||rs(n)||ss(n)||is(n)||/windows phone/i.test(n)||ns(n)}function Hc(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function as(n,e=[]){let t;switch(n){case"Browser":t=Ar(K());break;case"Worker":t=`${Ar(K())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Zt}/${r}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vc{constructor(e,t,r){this.app=e,this.heartbeatServiceProvider=t,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Rr(this),this.idTokenSubscription=new Rr(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=qi,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=ce(t)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Ne.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e)}}async initializeCurrentUser(e){var t;let r=await this.assertedPersistence.getCurrentUser();if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const i=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,s=r==null?void 0:r._redirectEventId,o=await this.tryRedirectSignIn(e);(!i||i===s)&&(o==null?void 0:o.user)&&(r=o.user)}return r?r._redirectEventId?(A(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)):this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Ft(e)}catch(t){if(t.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Ec()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?Yt(e):null;return t&&A(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e){if(!this._deleted)return e&&A(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(ce(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ve("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&ce(e)||this._popupRedirectResolver;A(t,this,"argument-error"),this.redirectPersistenceManager=await Ne.create(this,[ce(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,i){if(this._deleted)return()=>{};const s=typeof t=="function"?t:t.next.bind(t),o=this._isInitialized?Promise.resolve():this._initializationPromise;return A(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof t=="function"?e.addObserver(t,r,i):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return A(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=as(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return r&&(t["X-Firebase-Client"]=r),t}}function Wn(n){return Yt(n)}class Rr{constructor(e){this.auth=e,this.observer=null,this.addObserver=ga(t=>this.observer=t)}get next(){return A(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cs{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return ae("not implemented")}_getIdTokenResponse(e){return ae("not implemented")}_linkToIdToken(e,t){return ae("not implemented")}_getReauthenticationResolver(e){return ae("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Pe(n,e){return Ac(n,"POST","/v1/accounts:signInWithIdp",kc(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jc="http://localhost";class Ae extends cs{constructor(){super(...arguments);this.pendingToken=null}static _fromParams(e){const t=new Ae(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):ne("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=t,s=vt(t,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Ae(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return Pe(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,Pe(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Pe(e,t)}buildRequest(){const e={requestUri:jc,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=_t(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kn{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt extends Kn{constructor(){super(...arguments);this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pe extends yt{constructor(){super("facebook.com")}static credential(e){return Ae._fromParams({providerId:pe.PROVIDER_ID,signInMethod:pe.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return pe.credentialFromTaggedObject(e)}static credentialFromError(e){return pe.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return pe.credential(e.oauthAccessToken)}catch{return null}}}pe.FACEBOOK_SIGN_IN_METHOD="facebook.com";pe.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oe extends yt{constructor(){super("google.com");this.addScope("profile")}static credential(e,t){return Ae._fromParams({providerId:oe.PROVIDER_ID,signInMethod:oe.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return oe.credentialFromTaggedObject(e)}static credentialFromError(e){return oe.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return oe.credential(t,r)}catch{return null}}}oe.GOOGLE_SIGN_IN_METHOD="google.com";oe.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class me extends yt{constructor(){super("github.com")}static credential(e){return Ae._fromParams({providerId:me.PROVIDER_ID,signInMethod:me.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return me.credentialFromTaggedObject(e)}static credentialFromError(e){return me.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return me.credential(e.oauthAccessToken)}catch{return null}}}me.GITHUB_SIGN_IN_METHOD="github.com";me.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ge extends yt{constructor(){super("twitter.com")}static credential(e,t){return Ae._fromParams({providerId:ge.PROVIDER_ID,signInMethod:ge.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return ge.credentialFromTaggedObject(e)}static credentialFromError(e){return ge.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return ge.credential(t,r)}catch{return null}}}ge.TWITTER_SIGN_IN_METHOD="twitter.com";ge.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fe{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,i=!1){const s=await Ee._fromIdTokenResponse(e,r,i),o=$r(r);return new Fe({user:s,providerId:o,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const i=$r(r);return new Fe({user:e,providerId:i,_tokenResponse:r,operationType:t})}}function $r(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bt extends He{constructor(e,t,r,i){var s;super(t.code,t.message);this.operationType=r,this.user=i,Object.setPrototypeOf(this,Bt.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,i){return new Bt(e,t,r,i)}}function ls(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Bt._fromErrorAndOperation(n,s,e,r):s})}async function zc(n,e,t=!1){const r=await rt(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Fe._forOperation(n,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wc(n,e,t=!1){const{auth:r}=n,i="reauthenticate";try{const s=await rt(n,ls(r,i,e,n),t);A(s.idToken,r,"internal-error");const o=jn(s.idToken);A(o,r,"internal-error");const{sub:a}=o;return A(n.uid===a,r,"user-mismatch"),Fe._forOperation(n,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&ne(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Kc(n,e,t=!1){const r="signIn",i=await ls(n,r,e),s=await Fe._fromIdTokenResponse(n,r,i);return t||await n._updateCurrentUser(s.user),s}const Ht="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class us{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Ht,"1"),this.storage.removeItem(Ht),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qc(){const n=K();return zn(n)||en(n)}const Gc=1e3,Jc=10;class ds extends us{constructor(){super(()=>window.localStorage,"LOCAL");this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=qc()&&Hc(),this.fallbackToPolling=os(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),i=this.localCache[t];r!==i&&e(t,i,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!t)return}const i=()=>{const o=this.storage.getItem(r);!t&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);Bc()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,Jc):i()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},Gc)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}ds.type="LOCAL";const Yc=ds;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hs extends us{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}hs.type="SESSION";const fs=hs;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xc(n){return Promise.all(n.map(async e=>{try{const t=await e;return{fulfilled:!0,value:t}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tn{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(i=>i.isListeningto(e));if(t)return t;const r=new tn(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:i,data:s}=t.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async c=>c(t.origin,s)),l=await Xc(a);t.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}tn.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qn(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zc{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const i=typeof MessageChannel!="undefined"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const c=qn("",20);i.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(d){const p=d;if(p.data.eventId===c)switch(p.data.status){case"ack":clearTimeout(u),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(p.data.response);break;default:clearTimeout(u),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ee(){return window}function Qc(n){ee().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ps(){return typeof ee().WorkerGlobalScope!="undefined"&&typeof ee().importScripts=="function"}async function el(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function tl(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function nl(){return ps()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ms="firebaseLocalStorageDb",rl=1,Vt="firebaseLocalStorage",gs="fbase_key";class It{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function nn(n,e){return n.transaction([Vt],e?"readwrite":"readonly").objectStore(Vt)}function il(){const n=indexedDB.deleteDatabase(ms);return new It(n).toPromise()}function Cn(){const n=indexedDB.open(ms,rl);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(Vt,{keyPath:gs})}catch(i){t(i)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(Vt)?e(r):(r.close(),await il(),e(await Cn()))})})}async function Cr(n,e,t){const r=nn(n,!0).put({[gs]:e,value:t});return new It(r).toPromise()}async function sl(n,e){const t=nn(n,!1).get(e),r=await new It(t).toPromise();return r===void 0?null:r.value}function Or(n,e){const t=nn(n,!0).delete(e);return new It(t).toPromise()}const ol=800,al=3;class _s{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Cn(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>al)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return ps()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=tn._getInstance(nl()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await el(),!this.activeServiceWorker)return;this.sender=new Zc(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);!r||((e=r[0])===null||e===void 0?void 0:e.fulfilled)&&((t=r[0])===null||t===void 0?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||tl()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Cn();return await Cr(e,Ht,"1"),await Or(e,Ht),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>Cr(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>sl(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Or(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=nn(i,!1).getAll();return new It(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),t.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),ol)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}_s.type="LOCAL";const cl=_s;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ll(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}function ul(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=i=>{const s=Q("internal-error");s.customData=i,t(s)},r.type="text/javascript",r.charset="UTF-8",ll().appendChild(r)})}function dl(n){return`__${n}${Math.floor(Math.random()*1e6)}`}new bt(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vs(n,e){return e?ce(e):(A(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gn extends cs{constructor(e){super("custom","custom");this.params=e}_getIdTokenResponse(e){return Pe(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Pe(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Pe(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function hl(n){return Kc(n.auth,new Gn(n),n.bypassAuthState)}function fl(n){const{auth:e,user:t}=n;return A(t,e,"internal-error"),Wc(t,new Gn(n),n.bypassAuthState)}async function pl(n){const{auth:e,user:t}=n;return A(t,e,"internal-error"),zc(t,new Gn(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bs{constructor(e,t,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:t,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return hl;case"linkViaPopup":case"linkViaRedirect":return pl;case"reauthViaPopup":case"reauthViaRedirect":return fl;default:ne(this.auth,"internal-error")}}resolve(e){le(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){le(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ml=new bt(2e3,1e4);async function gl(n,e,t){const r=Wn(n);vc(n,e,Kn);const i=vs(r,t);return new Ie(r,"signInViaPopup",e,i).executeNotNull()}class Ie extends bs{constructor(e,t,r,i,s){super(e,t,i,s);this.provider=r,this.authWindow=null,this.pollId=null,Ie.currentPopupAction&&Ie.currentPopupAction.cancel(),Ie.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return A(e,this.auth,"internal-error"),e}async onExecution(){le(this.filter.length===1,"Popup operations only handle one event");const e=qn();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Q(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Q(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ie.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Q(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,ml.get())};e()}}Ie.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _l="pendingRedirect",pn=new Map;class vl extends bs{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r);this.eventId=null}async execute(){let e=pn.get(this.auth._key());if(!e){try{const r=await bl(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}pn.set(this.auth._key(),e)}return this.bypassAuthState||pn.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function bl(n,e){const t=Il(e),r=yl(n);if(!await r._isAvailable())return!1;const i=await r._get(t)==="true";return await r._remove(t),i}function yl(n){return ce(n._redirectPersistence)}function Il(n){return Ot(_l,n.config.apiKey,n.name)}async function wl(n,e,t=!1){const r=Wn(n),i=vs(r,e),o=await new vl(r,i,t).execute();return o&&!t&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const El=10*60*1e3;class Tl{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Sl(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!ys(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(Q(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=El&&this.cachedEventUids.clear(),this.cachedEventUids.has(Nr(e))}saveEventToCache(e){this.cachedEventUids.add(Nr(e)),this.lastProcessedEventTime=Date.now()}}function Nr(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function ys({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Sl(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return ys(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kl(n,e={}){return Qt(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Al=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Rl=/^https?/;async function $l(n){if(n.config.emulator)return;const{authorizedDomains:e}=await kl(n);for(const t of e)try{if(Cl(t))return}catch{}ne(n,"unauthorized-domain")}function Cl(n){const e=$n(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===r}if(!Rl.test(t))return!1;if(Al.test(n))return r===n;const i=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ol=new bt(3e4,6e4);function Pr(){const n=ee().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function Nl(n){return new Promise((e,t)=>{var r,i,s;function o(){Pr(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Pr(),t(Q(n,"network-request-failed"))},timeout:Ol.get()})}if(!((i=(r=ee().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=ee().gapi)===null||s===void 0)&&s.load)o();else{const a=dl("iframefcb");return ee()[a]=()=>{gapi.load?o():t(Q(n,"network-request-failed"))},ul(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>t(l))}}).catch(e=>{throw Nt=null,e})}let Nt=null;function Pl(n){return Nt=Nt||Nl(n),Nt}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dl=new bt(5e3,15e3),Ml="__/auth/iframe",Ll="emulator/auth/iframe",Ul={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},xl=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Fl(n){const e=n.config;A(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Vn(e,Ll):`https://${n.config.authDomain}/${Ml}`,r={apiKey:e.apiKey,appName:n.name,v:Zt},i=xl.get(n.config.apiHost);i&&(r.eid=i);const s=n._getFrameworks();return s.length&&(r.fw=s.join(",")),`${t}?${_t(r).slice(1)}`}async function Bl(n){const e=await Pl(n),t=ee().gapi;return A(t,n,"internal-error"),e.open({where:document.body,url:Fl(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Ul,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Q(n,"network-request-failed"),a=ee().setTimeout(()=>{s(o)},Dl.get());function l(){ee().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hl={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Vl=500,jl=600,zl="_blank",Wl="http://localhost";class Dr{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Kl(n,e,t,r=Vl,i=jl){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},Hl),{width:r.toString(),height:i.toString(),top:s,left:o}),c=K().toLowerCase();t&&(a=ts(c)?zl:t),es(c)&&(e=e||Wl,l.scrollbars="yes");const u=Object.entries(l).reduce((p,[m,E])=>`${p}${m}=${E},`,"");if(Fc(c)&&a!=="_self")return ql(e||"",a),new Dr(null);const d=window.open(e||"",a,u);A(d,n,"popup-blocked");try{d.focus()}catch{}return new Dr(d)}function ql(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gl="__/auth/handler",Jl="emulator/auth/handler";function Mr(n,e,t,r,i,s){A(n.config.authDomain,n,"auth-domain-config-required"),A(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:Zt,eventId:i};if(e instanceof Kn){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",ma(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[l,c]of Object.entries(s||{}))o[l]=c}if(e instanceof yt){const l=e.getScopes().filter(c=>c!=="");l.length>0&&(o.scopes=l.join(","))}n.tenantId&&(o.tid=n.tenantId);const a=o;for(const l of Object.keys(a))a[l]===void 0&&delete a[l];return`${Yl(n)}?${_t(a).slice(1)}`}function Yl({config:n}){return n.emulator?Vn(n,Jl):`https://${n.authDomain}/${Gl}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mn="webStorageSupport";class Xl{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=fs,this._completeRedirectFn=wl}async _openPopup(e,t,r,i){var s;le((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=Mr(e,t,r,$n(),i);return Kl(e,o,qn())}async _openRedirect(e,t,r,i){return await this._originValidation(e),Qc(Mr(e,t,r,$n(),i)),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:i,promise:s}=this.eventManagers[t];return i?Promise.resolve(i):(le(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await Bl(e),r=new Tl(e);return t.register("authEvent",i=>(A(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(mn,{type:mn},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[mn];o!==void 0&&t(!!o),ne(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=$l(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return os()||zn()||en()}}const Zl=Xl;var Lr="@firebase/auth",Ur="0.19.11";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ql{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{var i;e(((i=r)===null||i===void 0?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);!t||(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){A(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eu(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function tu(n){tt(new xe("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),{apiKey:s,authDomain:o}=r.options;return((a,l)=>{A(s&&!s.includes(":"),"invalid-api-key",{appName:a.name}),A(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const c={apiKey:s,authDomain:o,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:as(n)},u=new Vc(a,l,c);return yc(u,t),u})(r,i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),tt(new xe("auth-internal",e=>{const t=Wn(e.getProvider("auth").getImmediate());return(r=>new Ql(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Oe(Lr,Ur,eu(n)),Oe(Lr,Ur,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nu(n=sc()){const e=ji(n,"auth");return e.isInitialized()?e.getImmediate():bc(n,{popupRedirectResolver:Zl,persistence:[cl,Yc,fs]})}tu("Browser");const ru={apiKey:"AIzaSyAgcnqNze85kqJV47x_p_ESXZi6NoR4UiY",authDomain:"ecolibrishop-54839.firebaseapp.com",databaseURL:"https://ecolibrishop-default-rtdb.firebaseio.com",projectId:"ecolibrishop",storageBucket:"ecolibrishop.appspot.com",messagingSenderId:"1009380579533",appId:"1:1009380579533:web:87dbdbefb039f5a78d7184"},iu=ic(ru),Is=nu(iu),st=X(null);function xr(n){let e;const t=n[4].default,r=lt(t,n,n[3],null);return{c(){r&&r.c()},m(i,s){r&&r.m(i,s),e=!0},p(i,s){r&&r.p&&(!e||s&8)&&dt(r,t,i,i[3],e?ut(t,i[3],s,null):ht(i[3]),null)},i(i){e||(R(r,i),e=!0)},o(i){$(r,i),e=!1},d(i){r&&r.d(i)}}}function su(n){let e,t,r=n[0]&&xr(n);return{c(){r&&r.c(),e=Wt()},m(i,s){r&&r.m(i,s),v(i,e,s),t=!0},p(i,[s]){i[0]?r?(r.p(i,s),s&1&&R(r,1)):(r=xr(i),r.c(),R(r,1),r.m(e.parentNode,e)):r&&(Kt(),$(r,1,1,()=>{r=null}),qt())},i(i){t||(R(r),t=!0)},o(i){$(r),t=!1},d(i){r&&r.d(i),i&&_(e)}}}function ou(n,e,t){let r,i;J(n,st,c=>t(0,i=c));let{$$slots:s={},$$scope:o}=e;const a=Di(),l=Fn();return J(n,l,c=>t(2,r=c)),n.$$set=c=>{"$$scope"in c&&t(3,o=c.$$scope)},n.$$.update=()=>{n.$$.dirty&5&&(i||a("/login",{state:{from:r.pathname},replace:!0}))},[i,l,r,o,s]}class au extends G{constructor(e){super();q(this,e,ou,su,W,{})}}const cu=n=>({params:n&8,location:n&16,navigate:n&32}),Fr=n=>({params:n[3],location:n[4],navigate:n[5]});function lu(n){let e;const t=n[1].default,r=lt(t,n,n[2],Fr);return{c(){r&&r.c()},m(i,s){r&&r.m(i,s),e=!0},p(i,s){r&&r.p&&(!e||s&60)&&dt(r,t,i,i[2],e?ut(t,i[2],s,cu):ht(i[2]),Fr)},i(i){e||(R(r,i),e=!0)},o(i){$(r,i),e=!1},d(i){r&&r.d(i)}}}function uu(n){let e,t;return e=new au({props:{$$slots:{default:[lu]},$$scope:{ctx:n}}}),{c(){F(e.$$.fragment)},m(r,i){U(e,r,i),t=!0},p(r,i){const s={};i&60&&(s.$$scope={dirty:i,ctx:r}),e.$set(s)},i(r){t||(R(e.$$.fragment,r),t=!0)},o(r){$(e.$$.fragment,r),t=!1},d(r){x(e,r)}}}function du(n){let e,t;return e=new We({props:{path:n[0],$$slots:{default:[uu,({params:r,location:i,navigate:s})=>({3:r,4:i,5:s}),({params:r,location:i,navigate:s})=>(r?8:0)|(i?16:0)|(s?32:0)]},$$scope:{ctx:n}}}),{c(){F(e.$$.fragment)},m(r,i){U(e,r,i),t=!0},p(r,[i]){const s={};i&1&&(s.path=r[0]),i&60&&(s.$$scope={dirty:i,ctx:r}),e.$set(s)},i(r){t||(R(e.$$.fragment,r),t=!0)},o(r){$(e.$$.fragment,r),t=!1},d(r){x(e,r)}}}function hu(n,e,t){let{$$slots:r={},$$scope:i}=e,{path:s}=e;return n.$$set=o=>{"path"in o&&t(0,s=o.path),"$$scope"in o&&t(2,i=o.$$scope)},[s,r,i]}class Br extends G{constructor(e){super();q(this,e,hu,du,W,{path:0})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fu=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},pu=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const i=n[t++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=n[t++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=n[t++],o=n[t++],a=n[t++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=n[t++],o=n[t++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},mu={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<n.length;i+=3){const s=n[i],o=i+1<n.length,a=o?n[i+1]:0,l=i+2<n.length,c=l?n[i+2]:0,u=s>>2,d=(s&3)<<4|a>>4;let p=(a&15)<<2|c>>6,m=c&63;l||(m=64,o||(p=64)),r.push(t[u],t[d],t[p],t[m])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(fu(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):pu(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<n.length;){const s=t[n.charAt(i++)],a=i<n.length?t[n.charAt(i)]:0;++i;const c=i<n.length?t[n.charAt(i)]:64;++i;const d=i<n.length?t[n.charAt(i)]:64;if(++i,s==null||a==null||c==null||d==null)throw Error();const p=s<<2|a>>4;if(r.push(p),c!==64){const m=a<<4&240|c>>2;if(r.push(m),d!==64){const E=c<<6&192|d;r.push(E)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}},gu=function(n){try{return mu.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function re(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function _u(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(re())}function vu(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function bu(){return typeof navigator=="object"&&navigator.product==="ReactNative"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yu="FirebaseError";class wt extends Error{constructor(e,t,r){super(t);this.code=e,this.customData=r,this.name=yu,Object.setPrototypeOf(this,wt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,rn.prototype.create)}}class rn{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?Iu(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new wt(i,a,r)}}function Iu(n,e){return n.replace(wu,(t,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const wu=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ws(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Eu(n,e){const t=new Tu(n,e);return t.subscribe.bind(t)}class Tu{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let i;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");Su(e,["next","error","complete"])?i=e:i={next:e,error:t,complete:r},i.next===void 0&&(i.next=gn),i.error===void 0&&(i.error=gn),i.complete===void 0&&(i.complete=gn);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console!="undefined"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Su(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function gn(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Et(n){return n&&n._delegate?n._delegate:n}class On{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ku{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Au(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function Au(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Nn="@firebase/app",Hr="0.7.20";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jn=new Xt("@firebase/app"),Ru="@firebase/app-compat",$u="@firebase/analytics-compat",Cu="@firebase/analytics",Ou="@firebase/app-check-compat",Nu="@firebase/app-check",Pu="@firebase/auth",Du="@firebase/auth-compat",Mu="@firebase/database",Lu="@firebase/database-compat",Uu="@firebase/functions",xu="@firebase/functions-compat",Fu="@firebase/installations",Bu="@firebase/installations-compat",Hu="@firebase/messaging",Vu="@firebase/messaging-compat",ju="@firebase/performance",zu="@firebase/performance-compat",Wu="@firebase/remote-config",Ku="@firebase/remote-config-compat",qu="@firebase/storage",Gu="@firebase/storage-compat",Ju="@firebase/firestore",Yu="@firebase/firestore-compat",Xu="firebase",Zu="9.6.10",Qu={[Nn]:"fire-core",[Ru]:"fire-core-compat",[Cu]:"fire-analytics",[$u]:"fire-analytics-compat",[Nu]:"fire-app-check",[Ou]:"fire-app-check-compat",[Pu]:"fire-auth",[Du]:"fire-auth-compat",[Mu]:"fire-rtdb",[Lu]:"fire-rtdb-compat",[Uu]:"fire-fn",[xu]:"fire-fn-compat",[Fu]:"fire-iid",[Bu]:"fire-iid-compat",[Hu]:"fire-fcm",[Vu]:"fire-fcm-compat",[ju]:"fire-perf",[zu]:"fire-perf-compat",[Wu]:"fire-rc",[Ku]:"fire-rc-compat",[qu]:"fire-gcs",[Gu]:"fire-gcs-compat",[Ju]:"fire-fst",[Yu]:"fire-fst-compat","fire-js":"fire-js",[Xu]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ed=new Map,Vr=new Map;function td(n,e){try{n.container.addComponent(e)}catch(t){Jn.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function ot(n){const e=n.name;if(Vr.has(e))return Jn.debug(`There were multiple attempts to register component ${e}.`),!1;Vr.set(e,n);for(const t of ed.values())td(t,n);return!0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nd={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["storage-delete"]:"Error thrown when deleting from storage. Original error: {$originalErrorMessage}."},Yn=new Ve("app","Firebase",nd);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Es=Zu;function Ye(n,e,t){var r;let i=(r=Qu[n])!==null&&r!==void 0?r:n;t&&(i+=`-${t}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Jn.warn(a.join(" "));return}ot(new On(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rd="firebase-heartbeat-database",id=1,at="firebase-heartbeat-store";let _n=null;function Ts(){return _n||(_n=Hi(rd,id,(n,e)=>{switch(e){case 0:n.createObjectStore(at)}}).catch(n=>{throw Yn.create("storage-open",{originalErrorMessage:n.message})})),_n}async function sd(n){try{return(await Ts()).transaction(at).objectStore(at).get(Ss(n))}catch(e){throw Yn.create("storage-get",{originalErrorMessage:e.message})}}async function jr(n,e){try{const r=(await Ts()).transaction(at,"readwrite");return await r.objectStore(at).put(e,Ss(n)),r.complete}catch(t){throw Yn.create("storage-set",{originalErrorMessage:t.message})}}function Ss(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const od=1024,ad=30*24*60*60*1e3;class cd{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new ud(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=zr();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=ad}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=zr(),{heartbeatsToSend:t,unsentEntries:r}=ld(this._heartbeatsCache.heartbeats),i=Jt(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function zr(){return new Date().toISOString().substring(0,10)}function ld(n,e=od){const t=[];let r=n.slice();for(const i of n){const s=t.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Wr(t)>e){s.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),Wr(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class ud{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Ui()?xi().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await sd(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return jr(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return jr(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Wr(n){return Jt(JSON.stringify({version:2,heartbeats:n})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dd(n){ot(new On("platform-logger",e=>new ku(e),"PRIVATE")),ot(new On("heartbeat",e=>new cd(e),"PRIVATE")),Ye(Nn,Hr,n),Ye(Nn,Hr,"esm2017"),Ye("fire-js","")}dd("");class Kr{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}function ks(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const hd=ks,As=new rn("auth","Firebase",ks());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qr=new Xt("@firebase/auth");function Pt(n,...e){qr.logLevel<=B.ERROR&&qr.error(`Auth (${Es}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gr(n,...e){throw Xn(n,...e)}function Rs(n,...e){return Xn(n,...e)}function fd(n,e,t){const r=Object.assign(Object.assign({},hd()),{[e]:t});return new rn("auth","Firebase",r).create(e,{appName:n.name})}function Xn(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return As.create(n,...e)}function L(n,e,...t){if(!n)throw Xn(e,...t)}function Xe(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Pt(e),new Error(e)}function jt(n,e){n||Xe(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jr=new Map;function we(n){jt(n instanceof Function,"Expected a class definition");let e=Jr.get(n);return e?(jt(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Jr.set(n,e),e)}function pd(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(we);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function md(){return Yr()==="http:"||Yr()==="https:"}function Yr(){var n;return typeof self!="undefined"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gd(){return typeof navigator!="undefined"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(md()||vu()||"connection"in navigator)?navigator.onLine:!0}function _d(){if(typeof navigator=="undefined")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt{constructor(e,t){this.shortDelay=e,this.longDelay=t,jt(t>e,"Short delay should be less than long delay!"),this.isMobile=_u()||bu()}get(){return gd()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vd(n,e){jt(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $s{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self!="undefined"&&"fetch"in self)return self.fetch;Xe("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self!="undefined"&&"Headers"in self)return self.Headers;Xe("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self!="undefined"&&"Response"in self)return self.Response;Xe("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bd={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yd=new Tt(3e4,6e4);async function Cs(n,e,t,r,i={}){return Os(n,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=ws(Object.assign({key:n.config.apiKey},o)).slice(1),l=await n._getAdditionalHeaders();return l["Content-Type"]="application/json",n.languageCode&&(l["X-Firebase-Locale"]=n.languageCode),$s.fetch()(Ns(n,n.config.apiHost,t,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function Os(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},bd),e);try{const i=new Id(n),s=await Promise.race([t(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw vn(n,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw vn(n,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw vn(n,"email-already-in-use",o);const u=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw fd(n,u,c);Gr(n,u)}}catch(i){if(i instanceof wt)throw i;Gr(n,"network-request-failed")}}function Ns(n,e,t,r){const i=`${e}${t}?${r}`;return n.config.emulator?vd(n.config,i):`${n.config.apiScheme}://${i}`}class Id{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(Rs(this.auth,"network-request-failed")),yd.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function vn(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const i=Rs(n,e,r);return i.customData._tokenResponse=t,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wd(n,e){return Cs(n,"POST","/v1/accounts:delete",e)}async function Ed(n,e){return Cs(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ze(n){if(!!n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Td(n,e=!1){const t=Et(n),r=await t.getIdToken(e),i=Ps(r);L(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Ze(bn(i.auth_time)),issuedAtTime:Ze(bn(i.iat)),expirationTime:Ze(bn(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function bn(n){return Number(n)*1e3}function Ps(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return Pt("JWT malformed, contained fewer than 3 sections"),null;try{const i=gu(t);return i?JSON.parse(i):(Pt("Failed to decode base64 JWT payload"),null)}catch(i){return Pt("Caught error parsing JWT payload as JSON",i),null}}function Sd(n){const e=Ps(n);return L(e,"internal-error"),L(typeof e.exp!="undefined","internal-error"),L(typeof e.iat!="undefined","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Pn(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof wt&&kd(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function kd({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ad{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ds{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ze(this.lastLoginAt),this.creationTime=Ze(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zt(n){var e;const t=n.auth,r=await n.getIdToken(),i=await Pn(n,Ed(t,{idToken:r}));L(i==null?void 0:i.users.length,t,"internal-error");const s=i.users[0];n._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?Cd(s.providerUserInfo):[],a=$d(n.providerData,o),l=n.isAnonymous,c=!(n.email&&s.passwordHash)&&!(a!=null&&a.length),u=l?c:!1,d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Ds(s.createdAt,s.lastLoginAt),isAnonymous:u};Object.assign(n,d)}async function Rd(n){const e=Et(n);await zt(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function $d(n,e){return[...n.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function Cd(n){return n.map(e=>{var{providerId:t}=e,r=vt(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Od(n,e){const t=await Os(n,{},async()=>{const r=ws({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=n.config,o=Ns(n,i,"/v1/token",`key=${s}`),a=await n._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",$s.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){L(e.idToken,"internal-error"),L(typeof e.idToken!="undefined","internal-error"),L(typeof e.refreshToken!="undefined","internal-error");const t="expiresIn"in e&&typeof e.expiresIn!="undefined"?Number(e.expiresIn):Sd(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return L(!this.accessToken||this.refreshToken,e,"user-token-expired"),!t&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:i,expiresIn:s}=await Od(e,t);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:i,expirationTime:s}=t,o=new ct;return r&&(L(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(L(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(L(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ct,this.toJSON())}_performRefresh(){return Xe("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fe(n,e){L(typeof n=="string"||typeof n=="undefined","internal-error",{appName:e})}class De{constructor(e){var{uid:t,auth:r,stsTokenManager:i}=e,s=vt(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Ad(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Ds(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await Pn(this,this.stsTokenManager.getToken(this.auth,e));return L(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Td(this,e)}reload(){return Rd(this)}_assign(e){this!==e&&(L(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new De(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){L(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await zt(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Pn(this,wd(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,i,s,o,a,l,c,u;const d=(r=t.displayName)!==null&&r!==void 0?r:void 0,p=(i=t.email)!==null&&i!==void 0?i:void 0,m=(s=t.phoneNumber)!==null&&s!==void 0?s:void 0,E=(o=t.photoURL)!==null&&o!==void 0?o:void 0,k=(a=t.tenantId)!==null&&a!==void 0?a:void 0,f=(l=t._redirectEventId)!==null&&l!==void 0?l:void 0,y=(c=t.createdAt)!==null&&c!==void 0?c:void 0,M=(u=t.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:N,emailVerified:C,isAnonymous:V,providerData:b,stsTokenManager:P}=t;L(N&&P,e,"internal-error");const T=ct.fromJSON(this.name,P);L(typeof N=="string",e,"internal-error"),fe(d,e.name),fe(p,e.name),L(typeof C=="boolean",e,"internal-error"),L(typeof V=="boolean",e,"internal-error"),fe(m,e.name),fe(E,e.name),fe(k,e.name),fe(f,e.name),fe(y,e.name),fe(M,e.name);const I=new De({uid:N,auth:e,email:p,emailVerified:C,displayName:d,isAnonymous:V,photoURL:E,phoneNumber:m,tenantId:k,stsTokenManager:T,createdAt:y,lastLoginAt:M});return b&&Array.isArray(b)&&(I.providerData=b.map(j=>Object.assign({},j))),f&&(I._redirectEventId=f),I}static async _fromIdTokenResponse(e,t,r=!1){const i=new ct;i.updateFromServerResponse(t);const s=new De({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await zt(s),s}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ms{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Ms.type="NONE";const Xr=Ms;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yn(n,e,t){return`firebase:${n}:${e}:${t}`}class Me{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=yn(this.userKey,i.apiKey,s),this.fullPersistenceKey=yn("persistence",i.apiKey,s),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?De._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new Me(we(Xr),e,r);const i=(await Promise.all(t.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||we(Xr);const o=yn(r,e.config.apiKey,e.name);let a=null;for(const c of t)try{const u=await c._get(o);if(u){const d=De._fromJSON(e,u);c!==s&&(a=d),s=c;break}}catch{}const l=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new Me(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(t.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new Me(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zr(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Md(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Nd(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Ud(e))return"Blackberry";if(xd(e))return"Webos";if(Pd(e))return"Safari";if((e.includes("chrome/")||Dd(e))&&!e.includes("edge/"))return"Chrome";if(Ld(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Nd(n=re()){return/firefox\//i.test(n)}function Pd(n=re()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Dd(n=re()){return/crios\//i.test(n)}function Md(n=re()){return/iemobile/i.test(n)}function Ld(n=re()){return/android/i.test(n)}function Ud(n=re()){return/blackberry/i.test(n)}function xd(n=re()){return/webos/i.test(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ls(n,e=[]){let t;switch(n){case"Browser":t=Zr(re());break;case"Worker":t=`${Zr(re())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Es}/${r}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fd{constructor(e,t,r){this.app=e,this.heartbeatServiceProvider=t,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Qr(this),this.idTokenSubscription=new Qr(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=As,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=we(t)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Me.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e)}}async initializeCurrentUser(e){var t;let r=await this.assertedPersistence.getCurrentUser();if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const i=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,s=r==null?void 0:r._redirectEventId,o=await this.tryRedirectSignIn(e);(!i||i===s)&&(o==null?void 0:o.user)&&(r=o.user)}return r?r._redirectEventId?(L(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)):this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await zt(e)}catch(t){if(t.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=_d()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?Et(e):null;return t&&L(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e){if(!this._deleted)return e&&L(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(we(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new rn("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&we(e)||this._popupRedirectResolver;L(t,this,"argument-error"),this.redirectPersistenceManager=await Me.create(this,[we(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,i){if(this._deleted)return()=>{};const s=typeof t=="function"?t:t.next.bind(t),o=this._isInitialized?Promise.resolve():this._initializationPromise;return L(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof t=="function"?e.addObserver(t,r,i):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return L(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Ls(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return r&&(t["X-Firebase-Client"]=r),t}}function Bd(n){return Et(n)}class Qr{constructor(e){this.auth=e,this.observer=null,this.addObserver=Eu(t=>this.observer=t)}get next(){return L(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function Hd(n){return Et(n).signOut()}new Tt(3e4,6e4);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new Tt(2e3,1e4);/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new Tt(3e4,6e4);/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new Tt(5e3,15e3);var ei="@firebase/auth",ti="0.19.12";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vd{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{var i;e(((i=r)===null||i===void 0?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);!t||(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){L(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jd(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function zd(n){ot(new Kr("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),{apiKey:s,authDomain:o}=r.options;return((a,l)=>{L(s&&!s.includes(":"),"invalid-api-key",{appName:a.name}),L(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const c={apiKey:s,authDomain:o,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ls(n)},u=new Fd(a,l,c);return pd(u,t),u})(r,i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),ot(new Kr("auth-internal",e=>{const t=Bd(e.getProvider("auth").getImmediate());return(r=>new Vd(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ye(ei,ti,jd(n)),Ye(ei,ti,"esm2017")}zd("Browser");function Wd(n){let e,t,r,i,s,o,a,l,c,u,d,p=n[0].user.displayName+"",m,E,k,f=n[0].user.email+"",y,M,N,C,V;return{c(){e=g("div"),t=g("div"),r=g("div"),i=g("div"),s=g("img"),l=D(),c=g("div"),u=g("div"),d=g("div"),m=z(p),E=D(),k=g("div"),y=z(f),M=D(),N=g("button"),N.textContent="Logout",Qe(s.src,o=n[0].user.photoURL)||h(s,"src",o),h(s,"width","94"),h(s,"height","94"),h(s,"alt",a=n[0].user.displayName),h(s,"class","mask mask-squircle"),h(i,"class","mask mask-squircle bg-base-content h-24 w-24 bg-opacity-10 p-px"),h(r,"class","online avatar"),h(d,"class","text-lg font-extrabold"),h(k,"class","text-base-content/70 my-3 text-sm"),h(u,"class","text-center"),h(N,"class","btn-error btn-outline rounded"),h(t,"class","rounded-box col-span-3 row-span-3 mx-2 grid w-72 flex-shrink-0 place-items-center items-center gap-4 p-4 py-8 shadow-xl xl:mx-0 xl:w-full"),h(e,"class","flex flex-col items-center w-screen")},m(b,P){v(b,e,P),w(e,t),w(t,r),w(r,i),w(i,s),w(t,l),w(t,c),w(c,u),w(u,d),w(d,m),w(u,E),w(u,k),w(k,y),w(t,M),w(t,N),C||(V=Mn(N,"click",n[1]),C=!0)},p(b,[P]){P&1&&!Qe(s.src,o=b[0].user.photoURL)&&h(s,"src",o),P&1&&a!==(a=b[0].user.displayName)&&h(s,"alt",a),P&1&&p!==(p=b[0].user.displayName+"")&&In(m,p),P&1&&f!==(f=b[0].user.email+"")&&In(y,f)},i:H,o:H,d(b){b&&_(e),C=!1,V()}}}function Kd(n,e,t){let r;J(n,st,o=>t(0,r=o));async function i(){await Hd(Is),Ks(st,r=null,r)}let s=JSON.stringify({displayName:r.user.displayName,email:r.user.email,photoURL:r.user.photoURL,s_id:r.user.uid});return n.$$.update=()=>{n.$$.dirty&1&&ai(async()=>{console.log(JSON.stringify(r));const a=await(await fetch("/api/users",{method:"POST",body:s,headers:{"Content-Type":"application/json"}})).json();console.log(a)})},[r,i]}class qd extends G{constructor(e){super();q(this,e,Kd,Wd,W,{})}}function Gd(n){let e;return{c(){e=g("div"),e.textContent="Dashboard"},m(t,r){v(t,e,r)},d(t){t&&_(e)}}}function Jd(n){let e,t;return e=new qd({}),{c(){F(e.$$.fragment)},m(r,i){U(e,r,i),t=!0},i(r){t||(R(e.$$.fragment,r),t=!0)},o(r){$(e.$$.fragment,r),t=!1},d(r){x(e,r)}}}function Yd(n){let e,t,r,i;return e=new Br({props:{path:"dashboard",$$slots:{default:[Gd,({location:s})=>({0:s}),({location:s})=>s?1:0]},$$scope:{ctx:n}}}),r=new Br({props:{path:"profile",$$slots:{default:[Jd,({location:s})=>({0:s}),({location:s})=>s?1:0]},$$scope:{ctx:n}}}),{c(){F(e.$$.fragment),t=D(),F(r.$$.fragment)},m(s,o){U(e,s,o),v(s,t,o),U(r,s,o),i=!0},p(s,[o]){const a={};o&2&&(a.$$scope={dirty:o,ctx:s}),e.$set(a);const l={};o&2&&(l.$$scope={dirty:o,ctx:s}),r.$set(l)},i(s){i||(R(e.$$.fragment,s),R(r.$$.fragment,s),i=!0)},o(s){$(e.$$.fragment,s),$(r.$$.fragment,s),i=!1},d(s){x(e,s),s&&_(t),x(r,s)}}}class Xd extends G{constructor(e){super();q(this,e,null,Yd,W,{})}}function Zd(n){let e;return{c(){e=g("div"),e.innerHTML=`<div class="w-1/2"><iframe title="hhmc" class="rounded-lg mt-10 mx-4 shadow-2xl" src="https://open.spotify.com/embed/playlist/1BBBrRBb66heRlQ9UPdhQ3?utm_source=generator&amp;theme=0" width="100%" height="80%" frameborder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe></div> 
  <div class="w-1/2 m-8 p-8 text-3xl font-serif">HIP HOP MOVIMIENTO CULTURAL nace con el fin de promover el Hip Hop como
    herramienta de cambio socio cultural, promoverlo como arma de superaci\xF3n
    personal. Aqu\xED no se compite, se comparte, se aprende, se medita, con
    auto-cr\xEDtica, retro-aliment\xE1ndonos para lograr mayor autosuficiencia y
    autonom\xEDa.</div>`,h(e,"class","flex flex-row justify around mt-16")},m(t,r){v(t,e,r)},p:H,i:H,o:H,d(t){t&&_(e)}}}class Qd extends G{constructor(e){super();q(this,e,null,Zd,W,{})}}function eh(n){let e,t,r,i;return{c(){e=g("div"),t=g("button"),t.innerHTML='<i class="mdi mdi-google text-2xl"></i>',h(t,"class","btn btn-primary btn-outline btn-circle"),h(e,"class","mt-24")},m(s,o){v(s,e,o),w(e,t),r||(i=Mn(t,"click",n[0]),r=!0)},p:H,i:H,o:H,d(s){s&&_(e),r=!1,i()}}}function th(n){return[async()=>{const t=new oe,r=await gl(Is,t),{user:{uid:i}}=r;st.set(i)}]}class nh extends G{constructor(e){super();q(this,e,th,eh,W,{})}}function ni(n,e,t){const r=n.slice();return r[1]=e[t],r}function ri(n){let e,t=n[1]+"",r;return{c(){e=g("button"),r=z(t),h(e,"class","badge font-sans mx-2 w-32 my-1 rounded-xl")},m(i,s){v(i,e,s),w(e,r)},p:H,d(i){i&&_(e)}}}function rh(n){let e,t,r,i,s,o,a,l,c,u,d,p,m,E,k,f,y,M,N,C,V,b,P=n[0],T=[];for(let I=0;I<P.length;I+=1)T[I]=ri(ni(n,P,I));return{c(){e=g("div"),t=g("iframe"),i=D(),s=g("div"),o=z(`En setiembre del 2021, realizamos nuestro primer viaje como HHMC a la ciudad\r
    de Huaral, participando como agrupaci\xF3n Hip Hop en la Competencia Nacional\r
    de Ajedrez realizada por la Federaci\xF3n Nacional de Ajedrez, con el apoyo del\r
    Grupo Balde\xF3n. En esta oportunidad, participaremos este s\xE1bado 05 de marzo,\r
    del festival clandestino `),a=g("strong"),a.textContent='"Wayki Fest"',l=z(`, en la ciudad de\r
    Huancayo. Este evento es organizado peri\xF3dicamente por\r
    `),c=g("strong"),c.textContent="HardCorp Estudios",u=z(`, donde por primera vez tendremos el gusto\r
    de compartir los temas de `),d=g("strong"),d.textContent="Snare Lee",p=z(`,\r
    `),m=g("strong"),m.textContent="Trece Disociativo",E=z(", "),k=g("strong"),k.textContent="Tettimo",f=z(` &\r
    `),y=g("strong"),y.textContent="Joselo Mc.",M=D(),N=g("h2"),N.textContent="En Tarima:",C=D();for(let I=0;I<T.length;I+=1)T[I].c();V=D(),b=g("div"),b.innerHTML=`<iframe title="chalex" class="fb-post svelte-qg3vmr" src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fhiphopmovimientoycultura%2Fposts%2F3200975763525005&amp;show_text=false&amp;width=500" width="500" height="498" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe> 
    <iframe title="negrata wanka" class="fb-post svelte-qg3vmr" src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FVERSOFENES%2Fphotos%2Fa.2146362622143865%2F4857203411059759%2F%3Ftype%3D3&amp;show_text=false&amp;width=500" width="500" height="497" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>`,h(t,"title","HHMC en Huancayo"),Qe(t.src,r="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fhiphopmovimientoycultura%2Fposts%2F3171445223144726&show_text=false&width=500")||h(t,"src",r),h(t,"width","500"),h(t,"height","496"),h(t,"class","fb-post svelte-qg3vmr"),h(t,"scrolling","yes"),h(t,"frameborder","0"),h(t,"allow","autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"),h(N,"class","my-4 font-script"),h(s,"class","py-16 pr-16"),h(e,"class","flex flex-row mt-16"),h(b,"class","flex flex-row")},m(I,j){v(I,e,j),w(e,t),w(e,i),w(e,s),w(s,o),w(s,a),w(s,l),w(s,c),w(s,u),w(s,d),w(s,p),w(s,m),w(s,E),w(s,k),w(s,f),w(s,y),w(s,M),w(s,N),w(s,C);for(let S=0;S<T.length;S+=1)T[S].m(s,null);v(I,V,j),v(I,b,j)},p(I,[j]){if(j&1){P=I[0];let S;for(S=0;S<P.length;S+=1){const ie=ni(I,P,S);T[S]?T[S].p(ie,j):(T[S]=ri(ie),T[S].c(),T[S].m(s,null))}for(;S<T.length;S+=1)T[S].d(1);T.length=P.length}},i:H,o:H,d(I){I&&_(e),qs(T,I),I&&_(V),I&&_(b)}}}function ih(n){return[["THE SHOOT","ILEGAL MAN","UYARIKUAY LL","AWKA Y","TRAZ\xD3","VERS\xD3FENES","BUDA NIGROM","SUPAY","BLAZ HOP","JH ROOTS","LLEGENDARIOS","WANKLAN","HPV Hard","EL PHLEPS","EL BETTER 999","JF ETERNO","EL PLENO","EL ZERMITA\xD1O","CAMERON 420","POETIC STREET","ICA FLOW TRFIK","T\xC1CITO BOICOT"]]}class sh extends G{constructor(e){super();q(this,e,ih,rh,W,{})}}function oh(n){let e,t,r,i,s,o,a,l,c,u,d,p,m,E,k;return{c(){e=g("div"),e.innerHTML='<iframe width="560" height="315" src="https://www.youtube.com/embed/Z8jkMVcOcDw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" class="svelte-or39t2"></iframe>',t=D(),r=g("div"),r.innerHTML='<iframe width="560" height="315" src="https://www.youtube.com/embed/m1qQCLEHN3c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" class="svelte-or39t2"></iframe>',i=D(),s=g("div"),s.innerHTML='<iframe width="560" height="315" src="https://www.youtube.com/embed/CZj6ccDXo48" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" class="svelte-or39t2"></iframe>',o=D(),a=g("div"),a.innerHTML='<iframe width="560" height="315" src="https://www.youtube.com/embed/nQzn8o6MOXs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" class="svelte-or39t2"></iframe>',l=D(),c=g("div"),c.innerHTML='<iframe width="560" height="315" src="https://www.youtube.com/embed/ZV_DTBFe-Y8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" class="svelte-or39t2"></iframe>',u=D(),d=g("div"),d.innerHTML='<iframe width="560" height="315" src="https://www.youtube.com/embed/nw1zma3tv48" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" class="svelte-or39t2"></iframe>',p=D(),m=g("div"),m.innerHTML='<iframe width="560" height="315" src="https://www.youtube.com/embed/2E3d8le_wEc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" class="svelte-or39t2"></iframe>',E=D(),k=g("div"),k.innerHTML='<iframe width="560" height="315" src="https://www.youtube.com/embed/11NTxPnTxzg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" class="svelte-or39t2"></iframe>',h(e,"class","youtube-video svelte-or39t2"),h(r,"class","youtube-video svelte-or39t2"),h(s,"class","youtube-video svelte-or39t2"),h(a,"class","youtube-video svelte-or39t2"),h(c,"class","youtube-video svelte-or39t2"),h(d,"class","youtube-video svelte-or39t2"),h(m,"class","youtube-video svelte-or39t2"),h(k,"class","youtube-video svelte-or39t2")},m(f,y){v(f,e,y),v(f,t,y),v(f,r,y),v(f,i,y),v(f,s,y),v(f,o,y),v(f,a,y),v(f,l,y),v(f,c,y),v(f,u,y),v(f,d,y),v(f,p,y),v(f,m,y),v(f,E,y),v(f,k,y)},p:H,i:H,o:H,d(f){f&&_(e),f&&_(t),f&&_(r),f&&_(i),f&&_(s),f&&_(o),f&&_(a),f&&_(l),f&&_(c),f&&_(u),f&&_(d),f&&_(p),f&&_(m),f&&_(E),f&&_(k)}}}class ah extends G{constructor(e){super();q(this,e,null,oh,W,{})}}function ch(n){let e,t;return e=new Qd({}),{c(){F(e.$$.fragment)},m(r,i){U(e,r,i),t=!0},i(r){t||(R(e.$$.fragment,r),t=!0)},o(r){$(e.$$.fragment,r),t=!1},d(r){x(e,r)}}}function lh(n){let e,t;return e=new nh({}),{c(){F(e.$$.fragment)},m(r,i){U(e,r,i),t=!0},i(r){t||(R(e.$$.fragment,r),t=!0)},o(r){$(e.$$.fragment,r),t=!1},d(r){x(e,r)}}}function uh(n){let e,t;return e=new sh({}),{c(){F(e.$$.fragment)},m(r,i){U(e,r,i),t=!0},i(r){t||(R(e.$$.fragment,r),t=!0)},o(r){$(e.$$.fragment,r),t=!1},d(r){x(e,r)}}}function dh(n){let e,t;return e=new ah({}),{c(){F(e.$$.fragment)},m(r,i){U(e,r,i),t=!0},i(r){t||(R(e.$$.fragment,r),t=!0)},o(r){$(e.$$.fragment,r),t=!1},d(r){x(e,r)}}}function hh(n){let e,t,r,i,s,o,a,l;return e=new We({props:{path:"/",$$slots:{default:[ch,({location:c})=>({0:c}),({location:c})=>c?1:0]},$$scope:{ctx:n}}}),r=new We({props:{path:"/login",$$slots:{default:[lh,({location:c})=>({0:c}),({location:c})=>c?1:0]},$$scope:{ctx:n}}}),s=new We({props:{path:"/eventos",$$slots:{default:[uh,({location:c})=>({0:c}),({location:c})=>c?1:0]},$$scope:{ctx:n}}}),a=new We({props:{path:"/videos",$$slots:{default:[dh,({location:c})=>({0:c}),({location:c})=>c?1:0]},$$scope:{ctx:n}}}),{c(){F(e.$$.fragment),t=D(),F(r.$$.fragment),i=D(),F(s.$$.fragment),o=D(),F(a.$$.fragment)},m(c,u){U(e,c,u),v(c,t,u),U(r,c,u),v(c,i,u),U(s,c,u),v(c,o,u),U(a,c,u),l=!0},p(c,[u]){const d={};u&2&&(d.$$scope={dirty:u,ctx:c}),e.$set(d);const p={};u&2&&(p.$$scope={dirty:u,ctx:c}),r.$set(p);const m={};u&2&&(m.$$scope={dirty:u,ctx:c}),s.$set(m);const E={};u&2&&(E.$$scope={dirty:u,ctx:c}),a.$set(E)},i(c){l||(R(e.$$.fragment,c),R(r.$$.fragment,c),R(s.$$.fragment,c),R(a.$$.fragment,c),l=!0)},o(c){$(e.$$.fragment,c),$(r.$$.fragment,c),$(s.$$.fragment,c),$(a.$$.fragment,c),l=!1},d(c){x(e,c),c&&_(t),x(r,c),c&&_(i),x(s,c),c&&_(o),x(a,c)}}}class fh extends G{constructor(e){super();q(this,e,null,hh,W,{})}}function ph(n){let e;return{c(){e=g("footer"),e.innerHTML=`<div class="items-center grid-flow-col"><p class="flex flex-row">Dise\xF1ado y Desarrollado por <a href="https://oscarbahamonde.cloud" class="mx-2"><strong>Oscar Bahamonde</strong></a>  \xA9 2022 - All right reserved</p></div>  
    <div class="grid-flow-col gap-4 md:place-self-center md:justify-self-end"><a class="rounded-full cursor-pointer hover:scale-125 mx-4" href=""><i class="mdi-soundcloud text-3xl"></i></a> 
      <a class="rounded-full cursor-pointer hover:scale-125 mx-4"><i class="mdi-instagram text-3xl" href=""></i></a> 
      <a class="rounded-full cursor-pointer hover:scale-125 mx-4" href=""><i class="mdi-facebook text-3xl"></i></a></div>`,h(e,"class","footer items-center p-4 bg-neutral text-neutral-content fixed bottom-0 z-10"),rr(e,"hidden",n[0])},m(t,r){v(t,e,r)},p(t,[r]){r&1&&rr(e,"hidden",t[0])},i:H,o:H,d(t){t&&_(e)}}}function mh(n,e,t){let{hidden:r}=e;return n.$$set=i=>{"hidden"in i&&t(0,r=i.hidden)},[r]}class gh extends G{constructor(e){super();q(this,e,mh,ph,W,{hidden:0})}}function _h(n){let e;return{c(){e=g("div"),e.innerHTML='<img src="https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&amp;f=y" alt="avatar"/>',h(e,"class","w-10 rounded-full")},m(t,r){v(t,e,r)},p:H,d(t){t&&_(e)}}}function vh(n){let e,t,r,i;return{c(){e=g("div"),t=g("img"),Qe(t.src,r=n[0].user.photoURL)||h(t,"src",r),h(t,"alt",i=n[0].user.displayName),h(e,"class","w-10 rounded-full")},m(s,o){v(s,e,o),w(e,t)},p(s,o){o&1&&!Qe(t.src,r=s[0].user.photoURL)&&h(t,"src",r),o&1&&i!==(i=s[0].user.displayName)&&h(t,"alt",i)},d(s){s&&_(e)}}}function bh(n){let e,t;function r(o,a){return o[0]?vh:_h}let i=r(n),s=i(n);return{c(){e=g("div"),t=g("label"),s.c(),h(t,"tabindex","0"),h(t,"class","btn btn-ghost btn-circle avatar"),h(t,"for","avatar"),h(e,"class","dropdown dropdown-end")},m(o,a){v(o,e,a),w(e,t),s.m(t,null)},p(o,a){i===(i=r(o))&&s?s.p(o,a):(s.d(1),s=i(o),s&&(s.c(),s.m(t,null)))},d(o){o&&_(e),s.d()}}}function yh(n){let e,t,r;return t=new Ce({props:{to:"profile",$$slots:{default:[bh]},$$scope:{ctx:n}}}),{c(){e=g("span"),F(t.$$.fragment),h(e,"class","mx-4 font-script text-yellow-700 hover:font-bold hover:underline")},m(i,s){v(i,e,s),U(t,e,null),r=!0},p(i,[s]){const o={};s&3&&(o.$$scope={dirty:s,ctx:i}),t.$set(o)},i(i){r||(R(t.$$.fragment,i),r=!0)},o(i){$(t.$$.fragment,i),r=!1},d(i){i&&_(e),x(t)}}}function Ih(n,e,t){let{usr:r}=e;return n.$$set=i=>{"usr"in i&&t(0,r=i.usr)},[r]}class wh extends G{constructor(e){super();q(this,e,Ih,yh,W,{usr:0})}}function Eh(n){let e;return{c(){e=z("Inicio")},m(t,r){v(t,e,r)},d(t){t&&_(e)}}}function Th(n){let e;return{c(){e=z("Eventos")},m(t,r){v(t,e,r)},d(t){t&&_(e)}}}function Sh(n){let e;return{c(){e=z("Videos")},m(t,r){v(t,e,r)},d(t){t&&_(e)}}}function kh(n){let e;return{c(){e=z("Tracks")},m(t,r){v(t,e,r)},d(t){t&&_(e)}}}function Ah(n){let e;return{c(){e=z("Consola")},m(t,r){v(t,e,r)},d(t){t&&_(e)}}}function Rh(n){let e,t,r,i,s,o,a,l,c,u,d,p,m,E,k,f,y,M,N,C,V,b,P;return a=new Ce({props:{to:"/",$$slots:{default:[Eh]},$$scope:{ctx:n}}}),u=new Ce({props:{to:"eventos",$$slots:{default:[Th]},$$scope:{ctx:n}}}),m=new Ce({props:{to:"/videos",$$slots:{default:[Sh]},$$scope:{ctx:n}}}),k=new Ce({props:{to:"/dashboard",$$slots:{default:[kh]},$$scope:{ctx:n}}}),M=new Ce({props:{to:"/dashboard",$$slots:{default:[Ah]},$$scope:{ctx:n}}}),C=new wh({props:{usr:n[0]}}),{c(){e=g("header"),t=g("div"),r=g("div"),i=g("a"),i.innerHTML='<img src="/logo.png" class="w-24" alt="hip hop movimiento cultural"/>',s=D(),o=g("span"),F(a.$$.fragment),l=D(),c=g("span"),F(u.$$.fragment),d=D(),p=g("span"),F(m.$$.fragment),E=g("span"),F(k.$$.fragment),f=D(),y=g("span"),F(M.$$.fragment),N=D(),F(C.$$.fragment),V=D(),b=g("nav"),h(i,"class","btn btn-ghost normal-case text-xl rounded"),h(i,"href","/"),h(o,"class","mx-4 font-script text-yellow-700 hover:font-bold hover:underline"),h(c,"class","mx-4 font-script text-yellow-700 hover:font-bold hover:underline"),h(p,"class","mx-4 font-script text-yellow-700 hover:font-bold hover:underline"),h(E,"class","mx-4 font-script text-yellow-700 hover:font-bold hover:underline"),h(y,"class","mx-4 font-script text-yellow-700 hover:font-bold hover:underline"),h(r,"class","flex-1"),h(t,"class","navbar bg-base-300 shadow-lg fixed top-0 z-10")},m(T,I){v(T,e,I),w(e,t),w(t,r),w(r,i),w(r,s),w(r,o),U(a,o,null),w(r,l),w(r,c),U(u,c,null),w(c,d),w(r,p),U(m,p,null),w(r,E),U(k,E,null),w(r,f),w(r,y),U(M,y,null),w(t,N),U(C,t,null),w(e,V),w(e,b),P=!0},p(T,[I]){const j={};I&2&&(j.$$scope={dirty:I,ctx:T}),a.$set(j);const S={};I&2&&(S.$$scope={dirty:I,ctx:T}),u.$set(S);const ie={};I&2&&(ie.$$scope={dirty:I,ctx:T}),m.$set(ie);const Y={};I&2&&(Y.$$scope={dirty:I,ctx:T}),k.$set(Y);const Re={};I&2&&(Re.$$scope={dirty:I,ctx:T}),M.$set(Re);const St={};I&1&&(St.usr=T[0]),C.$set(St)},i(T){P||(R(a.$$.fragment,T),R(u.$$.fragment,T),R(m.$$.fragment,T),R(k.$$.fragment,T),R(M.$$.fragment,T),R(C.$$.fragment,T),P=!0)},o(T){$(a.$$.fragment,T),$(u.$$.fragment,T),$(m.$$.fragment,T),$(k.$$.fragment,T),$(M.$$.fragment,T),$(C.$$.fragment,T),P=!1},d(T){T&&_(e),x(a),x(u),x(m),x(k),x(M),x(C)}}}function $h(n,e,t){let{usr:r}=e;return n.$$set=i=>{"usr"in i&&t(0,r=i.usr)},[r]}class Ch extends G{constructor(e){super();q(this,e,$h,Rh,W,{usr:0})}}function Oh(n){let e,t,r,i,s,o;return e=new Ch({props:{usr:n[0]}}),r=new fh({}),s=new Xd({}),{c(){F(e.$$.fragment),t=D(),F(r.$$.fragment),i=D(),F(s.$$.fragment)},m(a,l){U(e,a,l),v(a,t,l),U(r,a,l),v(a,i,l),U(s,a,l),o=!0},p(a,l){const c={};l&1&&(c.usr=a[0]),e.$set(c)},i(a){o||(R(e.$$.fragment,a),R(r.$$.fragment,a),R(s.$$.fragment,a),o=!0)},o(a){$(e.$$.fragment,a),$(r.$$.fragment,a),$(s.$$.fragment,a),o=!1},d(a){x(e,a),a&&_(t),x(r,a),a&&_(i),x(s,a)}}}function Nh(n){let e,t,r,i;return e=new Ci({props:{$$slots:{default:[Oh]},$$scope:{ctx:n}}}),r=new gh({}),{c(){F(e.$$.fragment),t=D(),F(r.$$.fragment)},m(s,o){U(e,s,o),v(s,t,o),U(r,s,o),i=!0},p(s,[o]){const a={};o&5&&(a.$$scope={dirty:o,ctx:s}),e.$set(a)},i(s){i||(R(e.$$.fragment,s),R(r.$$.fragment,s),i=!0)},o(s){$(e.$$.fragment,s),$(r.$$.fragment,s),i=!1},d(s){x(e,s),s&&_(t),x(r,s)}}}function Ph(n,e,t){let r;return J(n,st,i=>t(0,r=i)),[r]}class Dh extends G{constructor(e){super();q(this,e,Ph,Nh,W,{})}}new Dh({target:document.getElementById("app")});
