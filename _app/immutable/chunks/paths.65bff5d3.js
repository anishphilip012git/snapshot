import{J as f,s as _}from"./index.9d8dc0ae.js";const e=[];function q(o,u=f){let i;const n=new Set;function c(t){if(_(o,t)&&(o=t,i)){const r=!e.length;for(const s of n)s[1](),e.push(s,o);if(r){for(let s=0;s<e.length;s+=2)e[s][0](e[s+1]);e.length=0}}}function a(t){c(t(o))}function p(t,r=f){const s=[t,r];return n.add(s),n.size===1&&(i=u(c)||f),t(o),()=>{n.delete(s),n.size===0&&i&&(i(),i=null)}}return{set:c,update:a,subscribe:p}}var b;const h=((b=globalThis.__sveltekit_ccqplf)==null?void 0:b.base)??"/portfolio";var l;const d=((l=globalThis.__sveltekit_ccqplf)==null?void 0:l.assets)??h;export{d as a,h as b,q as w};