import{r as x,R as i,j as t}from"./index-ZVYxoX19.js";import{C as ue,b as me,c as de,a as k,p as q,d as D}from"./viewport-1IkFLRB6.js";import{S as he,s as pe,D as G,E as xe,h as X,k as Z,o as J,j as d,v as N,t as L,F as fe,G as ge,H as ye}from"./request-MvzBsxCw.js";import{c as ee,C as be,d as Ce,e as O,f as ve,h as F,i as je,j as ke,k as we,l as Se,m as Ne,n as W,o as Ee,U as H,s as K,p as m,q as Ae,r as U,E as Te,t as Oe}from"./utils-d1nNWW-q.js";import{A as te}from"./CodeHighlighter-ruaKOT_-.js";import{a as h,c as se,m as P}from"./motion-minimal-jJCu8YKk.js";import{I as re}from"./Gallery-vzSRe3eA.js";import{s as Re}from"./useQuery-P1_Gzg00.js";import{b as Me}from"./alert-xRT6btXA.js";import{A as Ie}from"./spring-vvIC2hCq.js";import{F as Be}from"./Form-YXyYGCsV.js";import{d as Le}from"./FormInput-WOYGzdyc.js";import{u as ze,b as Ue}from"./provider-exUE4N1l.js";import{S as Q,M as Pe}from"./StyledButton-BX-nC1hJ.js";import{F as Fe}from"./FloatPopover-0WBOZP5i.js";import"./env-y9k74Ds6.js";import"./react-error-boundary.esm-fuoQe1J8.js";import"./image-6-GkjZDO.js";import"./use-is-dark-tNK75MAG.js";import"./SocialSourceLink-EW2h1RVe.js";import"./dom-NuJWIaAq.js";import"./LinkCard-XjNcERaX.js";import"./use-is-client-50HaPOXu.js";import"./visual-element-FhNWhN2c.js";import"./customParseFormat-JucLWOvd.js";import"./lodash-lrAbnKsZ.js";import"./use-is-unmounted-kDYnHtGR.js";import"./Collapse-A6mBdkLj.js";import"./use-event-callback-tu2pR-Vc.js";var We=class extends he{#s;#r=void 0;#e;#t;constructor(e,s){super(),this.#s=e,this.setOptions(s),this.bindMethods(),this.#n()}bindMethods(){this.mutate=this.mutate.bind(this),this.reset=this.reset.bind(this)}setOptions(e){const s=this.options;this.options=this.#s.defaultMutationOptions(e),pe(this.options,s)||this.#s.getMutationCache().notify({type:"observerOptionsUpdated",mutation:this.#e,observer:this}),s?.mutationKey&&this.options.mutationKey&&G(s.mutationKey)!==G(this.options.mutationKey)?this.reset():this.#e?.setOptions(this.options)}onUnsubscribe(){this.hasListeners()||this.#e?.removeObserver(this)}onMutationUpdate(e){this.#n(),this.#o(e)}getCurrentResult(){return this.#r}reset(){this.#e?.removeObserver(this),this.#e=void 0,this.#n(),this.#o()}mutate(e,s){return this.#t=s,this.#e?.removeObserver(this),this.#e=this.#s.getMutationCache().build(this.#s,this.options),this.#e.addObserver(this),this.#e.execute(e)}#n(){const e=this.#e?.state??xe();this.#r={...e,isPending:e.status==="pending",isSuccess:e.status==="success",isError:e.status==="error",isIdle:e.status==="idle",mutate:this.mutate,reset:this.reset}}#o(e){X.batch(()=>{if(this.#t&&this.hasListeners()){const s=this.#r.variables,r=this.#r.context;e?.type==="success"?(this.#t.onSuccess?.(e.data,s,r),this.#t.onSettled?.(e.data,null,s,r)):e?.type==="error"&&(this.#t.onError?.(e.error,s,r),this.#t.onSettled?.(void 0,e.error,s,r))}this.listeners.forEach(s=>{s(this.#r)})})}};function He(e,s){const r=Z(s),[n]=x.useState(()=>new We(r,e));x.useEffect(()=>{n.setOptions(e)},[n,e]);const o=x.useSyncExternalStore(x.useCallback(l=>n.subscribe(X.batchCalls(l)),[n]),()=>n.getCurrentResult(),()=>n.getCurrentResult()),a=x.useCallback((l,f)=>{n.mutate(l,f).catch(Ke)},[n]);if(o.error&&Re(n.options.throwOnError,[o.error]))throw o.error;return{...o,mutate:a,mutateAsync:o.mutate}}function Ke(){}var $e=()=>{try{return!1}catch{}return!1},Ve=()=>{try{return!0}catch{}return!1},Y=new Set,_e=(e,s,r)=>{const n=$e()||Ve(),o=r??e;Y.has(o)||n||(Y.add(o),console.warn(`Clerk - DEPRECATION WARNING: "${e}" is deprecated and will be removed in the next major release.
${s}`))},qe={Expired:"expired",Failed:"failed"};new Proxy(qe,{get(e,s,r){return _e("MagicLinkErrorCode","Use `EmailLinkErrorCode` instead."),Reflect.get(e,s,r)}});const Ge="Clerk: You must wrap your application in a <ClerkProvider> component.",Qe=e=>`Clerk: You've passed multiple children components to <${e}/>. You can only pass a single child component or text.`,Ye=e=>s=>{try{return i.Children.only(e)}catch{throw new Error(Qe(s))}},De=(e,s)=>(e||(e=s),typeof e=="string"&&(e=i.createElement("button",null,e)),e),Xe=e=>(...s)=>{if(e&&typeof e=="function")return e(...s)},[Jt,Ze]=[ue,me];function Je(e){if(!e)throw new Error(Ge)}const et=Object.freeze({noGuarantees:Object.freeze({guaranteedLoaded:!1}),guaranteedLoaded:Object.freeze({guaranteedLoaded:!0})}),$=i.createContext(void 0);$.displayName="StructureContext";const tt=()=>{const e=i.useContext($);return Je(e),e},st=({children:e})=>tt().guaranteedLoaded?i.createElement(i.Fragment,null,e):i.createElement($.Provider,{value:et.guaranteedLoaded},e),g=(e,s)=>{s=s||e.displayName||e.name||"Component",e.displayName=s;const r=n=>{const o=Ze();return o.loaded?i.createElement(st,null,i.createElement(e,{...n,clerk:o})):null};return r.displayName=`withClerk(${s})`,r},[es,ne]=de("AuthContext"),rt=({children:e})=>{const{userId:s}=ne();return s?i.createElement(i.Fragment,null,e):null},nt=({children:e})=>{const{userId:s}=ne();return s===null?i.createElement(i.Fragment,null,e):null};g(({clerk:e,...s})=>{const{client:r,session:n}=e,{__unstable__environment:o}=e,a=r.activeSessions&&r.activeSessions.length>0;return i.useEffect(()=>{if(n===null&&a&&o){const{afterSignOutOneUrl:l}=o.displayConfig;e.navigate(l)}else e.redirectToSignIn(s)},[]),null},"RedirectToSignIn");g(({clerk:e,...s})=>(i.useEffect(()=>{e.redirectToSignUp(s)},[]),null),"RedirectToSignUp");g(({clerk:e})=>(i.useEffect(()=>{e.redirectToUserProfile()},[]),null),"RedirectToUserProfile");g(({clerk:e})=>(i.useEffect(()=>{e.redirectToOrganizationProfile()},[]),null),"RedirectToOrganizationProfile");g(({clerk:e})=>(i.useEffect(()=>{e.redirectToCreateOrganization()},[]),null),"RedirectToCreateOrganization");g(({clerk:e,...s})=>(i.useEffect(()=>{e.handleRedirectCallback(s)},[]),null),"AuthenticateWithRedirectCallback");const ot=g(({clerk:e,children:s,...r})=>{const{afterSignInUrl:n,afterSignUpUrl:o,redirectUrl:a,mode:l,...f}=r;s=De(s,"Sign in");const E=Ye(s)("SignInButton"),R=()=>{const p={afterSignInUrl:n,afterSignUpUrl:o,redirectUrl:a};return l==="modal"?e.openSignIn(p):e.redirectToSignIn(p)},M={...f,onClick:async p=>(await Xe(E.props.onClick)(p),R())};return i.cloneElement(E,M)},"SignInButton"),it=rt,at=nt;function ct({className:e}){return t.jsx("i",{className:h("icon-[mingcute--send-plane-line]",e)})}const lt=()=>{const e=we(),s=Se();return t.jsxs("span",{className:h("font-mono text-[10px]",e?"text-red-500":"text-zinc-500"),children:[s.length,"/",Ne]})},ut=()=>{const e=k(),s=F(),r=J(O().isWhisper),n=W();return e||s?null:t.jsxs("label",{className:"label mx-2 flex items-center",children:[t.jsx("input",{className:"checkbox-accent checkbox checkbox-sm mr-2",checked:r,type:"checkbox",onChange:o=>{const a=o.target.checked;n("isWhisper",a)}}),t.jsx("span",{className:"label-text text-sm",children:"悄悄话"})]})},mt=()=>{const e=k(),s=J(O().syncToRecently),r=W(),n=F();return!e||n?null:t.jsxs("label",{className:"label mx-2 flex items-center",children:[t.jsx("input",{className:"checkbox-accent checkbox checkbox-sm mr-2",checked:s,type:"checkbox",onChange:o=>{const a=o.target.checked;r("syncToRecently",a)}}),t.jsx("span",{className:"label-text text-sm",children:"同步到碎碎念"})]})},V=({className:e})=>{const s=ee();return t.jsxs("footer",{className:se("mt-3 flex h-5 w-full min-w-0 items-center justify-between",e),children:[t.jsxs("span",{className:h("flex-1 select-none text-[10px] text-zinc-500 transition-opacity"),children:[t.jsxs("span",{className:"hidden md:inline",children:["支持 ",t.jsx("b",{children:"Markdown"})," 与"," ",t.jsx(Me,{href:"https://docs.github.com/zh/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax",children:"GFM"})]}),t.jsx(be,{})]}),t.jsx(Ie,{children:s&&t.jsxs(P.aside,{initial:{opacity:0,scale:.96,y:8},animate:{opacity:1,scale:1,y:0},exit:{opacity:0,scale:.98,y:8},className:"flex select-none items-center gap-2.5",children:[t.jsx(lt,{}),t.jsx(ut,{}),t.jsx(mt,{}),t.jsx(dt,{})]},"send-button-wrapper")})]})},dt=()=>{const e=Ce(),{text:s,author:r,mail:n,url:o,source:a,avatar:l,isWhisper:f,syncToRecently:E}=O(),{afterSubmit:R}=ve(),w=k(),M=Z(),p=F(),ie=je(),ae=ke(),A=u=>(ae?.(u),u),{mutate:ce,isPending:_}=He({mutationFn:async u=>{const y=d.get(s),I=d.get(r),b=d.get(n),S=d.get(l),C=d.get(a),B=d.get(o),c={text:y,author:I,mail:b,avatar:S,source:C,url:B};if(w&&delete c.avatar,Object.keys(c).forEach(j=>{c[j]===""&&delete c[j]}),p)return w?N.comment.proxy.master.reply(u).post({data:{text:y,source:C}}).then(A):N.comment.reply(u,c).then(A);const v=d.get(f),T=d.get(E);return w?N.comment.proxy.master.comment(u).post({data:{text:y,source:C}}).then(async j=>(T&&N.recently.proxy.post({data:{content:y,ref:u}}).then(()=>{L.success("已同步到碎碎念")}),j)).then(A):(c.isWhispers=v,N.comment.comment(u,c).then(A))},mutationKey:[e,"comment"],onError(u){L.error(fe(u))},onSuccess(u){R?.();const y=w?"发表成功啦~":p?"感谢你的回复！":"感谢你的评论！",I=Ee(ie);L.success(y),d.set(s,""),M.setQueryData(I,b=>b&&(p?q(b,S=>{const C=(c,v,T)=>{if(c.id===v)return c.children||(c.children=[]),c.children.push({...T,new:!0}),!0;if(c.children){for(const j of c.children)if(C(j,v,T))return!0;return!1}},B={...u,new:!0};for(const c of S.pages)for(const v of c.data)if(C(v,e,B))break}):q(b,S=>{S.pages[0].data.unshift({...u,new:!0})})))}}),le=()=>{ce(e)};return t.jsxs(P.button,{className:"flex appearance-none items-center space-x-1 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",whileHover:{scale:1.05},whileTap:{scale:.95},type:"button",disabled:_,onClick:le,children:[t.jsx(ct,{className:"h-5 w-5 text-zinc-800 dark:text-zinc-200"}),t.jsx(P.span,{className:"text-sm",layout:"size",children:_?"送信...":"送信"})]})},ht=()=>{const e="bg-gray-200/50 dark:bg-zinc-800/50";return t.jsxs("div",{className:"flex animate-pulse gap-4",children:[t.jsx("div",{className:h("h-12 w-12 self-end overflow-hidden rounded-full",e)}),t.jsx("div",{className:h("h-[150px] w-full rounded-lg",e)})]})},pt=()=>{const{user:e}=D(),s=W(),r=e?e.fullName||e.lastName||e.firstName||"Anonymous":"";return x.useEffect(()=>{if(!e)return;s("author",r),s("avatar",e.imageUrl),s("mail",e.primaryEmailAddress?.emailAddress||"");const n=e.primaryEmailAddress?.verification.strategy;n&&s("source",n)},[r,s,e]),e?t.jsxs("div",{className:"flex space-x-4",children:[t.jsx("div",{className:h("mb-2 flex-shrink-0 select-none self-end overflow-hidden rounded-full",'dark:ring-zinc-800" bg-zinc-200 ring-2 ring-zinc-200 dark:bg-zinc-800',"ml-[2px] backface-hidden"),children:t.jsx(re,{className:"rounded-full object-cover",src:e.imageUrl,alt:`${r}'s avatar`,width:48,height:48})}),t.jsx("div",{className:"relative h-[150px] w-full rounded-lg bg-gray-200/50 dark:bg-zinc-800/50",children:t.jsx(H,{className:"pb-5"})}),t.jsx(V,{className:"absolute bottom-0 left-12 right-0 mb-2 ml-4 w-auto px-4"})]}):t.jsx(ht,{})},xt=()=>k()?t.jsx(yt,{}):t.jsx(gt,{}),oe="relative h-[150px] w-full rounded-lg bg-gray-200/50 dark:bg-zinc-800/50",ft={author:"昵称",mail:"邮箱",url:"网址"},z=e=>{const{fieldKey:s,required:r}=e,[n,o]=ye(O()[s]);return t.jsx(Le,{type:"text",value:n,onChange:a=>o(a.target.value),required:r,placeholder:ft[s]+(r?" *":""),className:"border-0 bg-gray-200/50 dark:bg-zinc-800/50"})},gt=()=>t.jsxs(Be,{className:"flex flex-col space-y-4 px-2 pt-2",showErrorMessage:!1,children:[t.jsxs("div",{className:"flex flex-col space-x-0 space-y-4 md:flex-row md:space-x-4 md:space-y-0",children:[t.jsx(z,{fieldKey:"author",required:!0}),t.jsx(z,{fieldKey:"mail",required:!0}),t.jsx(z,{fieldKey:"url"})]}),t.jsx("div",{className:oe,children:t.jsx(H,{className:"pb-8"})}),t.jsx(V,{className:"absolute bottom-4 left-0 right-4 mb-2 ml-4 w-auto px-4"})]}),yt=()=>{const e=ge(s=>s.user);return t.jsxs("div",{className:"flex space-x-4",children:[t.jsx("div",{className:h("mb-2 flex-shrink-0 select-none self-end overflow-hidden rounded-full",'dark:ring-zinc-800" bg-zinc-200 ring-2 ring-zinc-200 dark:bg-zinc-800',"ml-[2px] backface-hidden"),children:t.jsx(re,{className:"rounded-full object-cover",src:e.avatar,alt:`${e.name||e.username}'s avatar`,width:48,height:48})}),t.jsx("div",{className:oe,children:t.jsx(H,{className:"pb-5"})}),t.jsx(V,{className:"absolute bottom-0 left-12 right-0 mb-2 ml-4 w-auto px-4"})]})};function bt(e){return t.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:t.jsx("path",{d:"M11 15H7C4.79086 15 3 16.7909 3 19C3 20.1046 3.89543 21 5 21H15M16.8744 13C16.2164 13.4935 15.6221 14.066 15.1049 14.7043C15.035 14.7906 15 14.8953 15 15M16.8744 17C16.2164 16.5065 15.6221 15.934 15.1049 15.2957C15.035 15.2094 15 15.1047 15 15M15 15H21M15 7C15 9.20914 13.2091 11 11 11C8.79086 11 7 9.20914 7 7C7 4.79086 8.79086 3 11 3C13.2091 3 15 4.79086 15 7Z",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})}function Ct(){const e=Ue(),{dismissAll:s}=ze();return t.jsxs("div",{className:"flex h-[150px] w-full space-x-4 rounded-lg bg-gray-100/80 center dark:bg-zinc-900/80",children:[t.jsx(Q,{variant:"secondary",type:"button",onClick:()=>{K(m.legacy)},children:"免登录评论"}),t.jsx(ot,{mode:"modal",redirectUrl:Ae(e).href,children:t.jsxs(Q,{onClick:()=>{s()},variant:"primary",type:"button",children:[t.jsx(bt,{className:"mr-1 h-5 w-5"}),"登录后才可以留言噢"]})})]})}const vt=()=>{const e=U(),s=`转换到${e===m.legacy?"新":"旧"}版评论`,r=ee(),n=!!D(),o=x.useRef(function(){const f=U();return t.jsxs(t.Fragment,{children:[t.jsx("i",{className:h(f===m.legacy?"icon-[mingcute--user-4-line]":"icon-[material-symbols--dynamic-form-outline]")}),t.jsx("span",{className:"sr-only",children:s})]})}).current;return k()?null:t.jsx(Pe,{className:h("absolute left-0 top-0 z-10 rounded-full text-sm","h-6 w-6 border border-slate-200 dark:border-neutral-800","bg-slate-100 dark:bg-neutral-900","flex cursor-pointer text-base-100/50 center","text-base-content/50","opacity-0 transition-opacity duration-200 group-[:hover]:opacity-100",e===m.legacy&&"bottom-0 top-auto",r||n&&e===m["with-auth"]&&"invisible opacity-0"),onClick:()=>{K(e===m.legacy?m["with-auth"]:m.legacy)},children:t.jsx(Fe,{TriggerComponent:o,children:s})})},ts=e=>{const{refId:s,className:r,afterSubmit:n,initialValue:o}=e,a=U(),l=k();return x.useEffect(()=>{l&&K(m.legacy)},[l]),t.jsx(Te,{children:t.jsx(Oe,{refId:s,afterSubmit:n,initialValue:o,children:t.jsxs("div",{className:se("group relative w-full min-w-0",r),"data-hide-print":!0,children:[t.jsx(vt,{}),t.jsx("div",{className:"relative w-full",children:a===m.legacy?t.jsx(jt,{}):t.jsx(kt,{})})]})})})},jt=()=>t.jsx(te,{children:t.jsx(xt,{})}),kt=()=>t.jsxs(te,{children:[t.jsx(at,{children:t.jsx(Ct,{})}),t.jsx(it,{children:t.jsx(pt,{})})]});export{ts as CommentBoxRoot};