import{r as a,j as r,R as v}from"./index-ZVYxoX19.js";import{u as N}from"./useQuery-P1_Gzg00.js";import{p as z}from"./index-D4F-WjWJ.js";import{a as R}from"./main-IY5qQdcf.js";import{u as L}from"./viewport-1IkFLRB6.js";import{a2 as S,t as T}from"./request-MvzBsxCw.js";import{u as O}from"./use-is-dark-tNK75MAG.js";import{s as y}from"./dom-NuJWIaAq.js";import{aa as E,c as I}from"./motion-minimal-jJCu8YKk.js";import{c as A}from"./lodash-lrAbnKsZ.js";import{M as B}from"./StyledButton-BX-nC1hJ.js";import{u as U}from"./provider-exUE4N1l.js";const b=a.forwardRef((i,s)=>{const{data:o,...l}=i,c=a.useMemo(()=>{if(!o)return{};const f=E(o);if(f)return{data:f};{const m=o.split(`
`),n=m[0],d=m.slice(1).join(`
`),t={};return n.startsWith("http")?t.refUrl=n:n.startsWith("ref:")&&(t.refUrl=`${S}/objects/${n.slice(4)}`),d.trim().length>0&&(t.patchDiffDelta=E(d)),t}},[o]),u=a.useRef(null);return a.useImperativeHandle(s,()=>({getRefData(){return u.current?.getRemoteData()},getDiffDelta(){return c.patchDiffDelta}})),r.jsx(w,{ref:u,...l,...c})});b.displayName="Excalidraw";const w=a.forwardRef(({data:i,refUrl:s,patchDiffDelta:o,viewModeEnabled:l=!0,zenModeEnabled:c=!0,onChange:u,className:f,showExtendButton:m=!0,onReady:n},d)=>{const t=v.useRef(),P=U(),M=L(),{data:p,isLoading:x}=N({queryKey:["excalidraw",s],queryFn:async({queryKey:e})=>{const[D,g]=e;return await(await fetch(g)).json()},enabled:!!s});a.useImperativeHandle(d,()=>({getRemoteData(){return p}}));const h=a.useMemo(()=>p?z(A(p),o):null,[p,s]),_=O(),k=a.useMemo(()=>{const e=i||h;return!e&&!x&&console.error("Excalidraw: data not exist"),e},[i,h,x]);return r.jsxs("div",{onKeyDown:y,onKeyUp:y,className:I("relative h-[500px] w-full",f),children:[x&&r.jsx("div",{className:"absolute inset-0 z-[10] flex center",children:r.jsx("div",{className:"loading loading-spinner"})}),r.jsx(R.Excalidraw,{theme:_?"dark":"light",initialData:k,detectScroll:!1,zenModeEnabled:c,onChange:u,viewModeEnabled:l,excalidrawAPI:e=>{t.current=e,setTimeout(()=>{e.scrollToContent(void 0,{fitToContent:!0})},1e3),n?.(e)}},s?`excalidraw-refData-loading-${x}`:"excalidraw"),l&&m&&r.jsx(B,{onClick:()=>{if(!t.current){T.error("Excalidraw API not ready");return}const e=t.current.getSceneElements();if(M){const D=window.open();R.exportToBlob({elements:e,files:null}).then(j=>{D?.location.replace(URL.createObjectURL(j))})}else P.present({title:"Preview",content:()=>r.jsx(w,{data:i,className:"h-full",showExtendButton:!1,refUrl:s}),clickOutsideToDismiss:!0,max:!0})},className:I("absolute bottom-2 right-2 z-10 box-content flex h-5 w-5 rounded-md border p-2 center","border-zinc-200 bg-base-100 text-zinc-600","dark:border-neutral-800 dark:text-zinc-500"),children:r.jsx("i",{className:"icon-[mingcute--external-link-line]"})})]})});w.displayName="ExcalidrawImpl";const Y=Object.freeze(Object.defineProperty({__proto__:null,Excalidraw:b},Symbol.toStringTag,{value:"Module"})),Z=Object.freeze(Object.defineProperty({__proto__:null,Excalidraw:b},Symbol.toStringTag,{value:"Module"}));export{b as E,Y as a,Z as i};