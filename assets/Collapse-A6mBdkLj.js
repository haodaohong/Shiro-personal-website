import{r as i,j as e}from"./index-ZVYxoX19.js";import{A as l,m as c}from"./spring-vvIC2hCq.js";import{m,c as p}from"./motion-minimal-jJCu8YKk.js";const v=({isOpened:t,className:n,children:s,withBackground:a=!1})=>{const r=i.useMemo(()=>{const o={open:{opacity:1,height:"auto",transition:c},collapsed:{opacity:0,height:0,overflow:"hidden"}};return a&&(o.open.background="oklch(var(--a) / 10%)",o.collapsed.background="oklch(var(--a) / 0%)"),o},[a]);return e.jsx(e.Fragment,{children:e.jsx(l,{initial:!1,children:t&&e.jsx(m.div,{initial:"collapsed",animate:"open",exit:"collapsed",variants:r,className:p(a&&"rounded-lg",n),children:a?e.jsx("div",{className:"p-4",children:s}):s},"content")})})};export{v as C};