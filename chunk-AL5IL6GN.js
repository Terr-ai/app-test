var f=(e,t)=>{e.componentOnReady?e.componentOnReady().then(n=>t(n)):d(()=>t(e))},b=e=>e.componentOnReady!==void 0,u=(e,t=[])=>{let n={};return t.forEach(i=>{e.hasAttribute(i)&&(e.getAttribute(i)!==null&&(n[i]=e.getAttribute(i)),e.removeAttribute(i))}),n},l=["role","aria-activedescendant","aria-atomic","aria-autocomplete","aria-braillelabel","aria-brailleroledescription","aria-busy","aria-checked","aria-colcount","aria-colindex","aria-colindextext","aria-colspan","aria-controls","aria-current","aria-describedby","aria-description","aria-details","aria-disabled","aria-errormessage","aria-expanded","aria-flowto","aria-haspopup","aria-hidden","aria-invalid","aria-keyshortcuts","aria-label","aria-labelledby","aria-level","aria-live","aria-multiline","aria-multiselectable","aria-orientation","aria-owns","aria-placeholder","aria-posinset","aria-pressed","aria-readonly","aria-relevant","aria-required","aria-roledescription","aria-rowcount","aria-rowindex","aria-rowindextext","aria-rowspan","aria-selected","aria-setsize","aria-sort","aria-valuemax","aria-valuemin","aria-valuenow","aria-valuetext"],m=(e,t)=>{let n=l;return t&&t.length>0&&(n=n.filter(i=>!t.includes(i))),u(e,n)},h=(e,t,n,i)=>{var a;if(typeof window<"u"){let o=window,r=(a=o?.Ionic)===null||a===void 0?void 0:a.config;if(r){let s=r.get("_ael");if(s)return s(e,t,n,i);if(r._ael)return r._ael(e,t,n,i)}}return e.addEventListener(t,n,i)},w=(e,t,n,i)=>{var a;if(typeof window<"u"){let o=window,r=(a=o?.Ionic)===null||a===void 0?void 0:a.config;if(r){let s=r.get("_rel");if(s)return s(e,t,n,i);if(r._rel)return r._rel(e,t,n,i)}}return e.removeEventListener(t,n,i)},g=(e,t=e)=>e.shadowRoot||t,d=e=>typeof __zone_symbol__requestAnimationFrame=="function"?__zone_symbol__requestAnimationFrame(e):typeof requestAnimationFrame=="function"?requestAnimationFrame(e):setTimeout(e),v=e=>!!e.shadowRoot&&!!e.attachShadow,y=e=>{let t=e.closest("ion-item");return t?t.querySelector("ion-label"):null},p=e=>{if(e.focus(),e.classList.contains("ion-focusable")){let t=e.closest("ion-app");t&&t.setFocus([e])}};var E=(e,t,n)=>Math.max(e,Math.min(t,n)),_=(e,t)=>{if(!e){let n="ASSERT: "+t;console.error(n);debugger;throw new Error(n)}},A=e=>e.timeStamp||Date.now(),x=e=>{if(e){let t=e.changedTouches;if(t&&t.length>0){let n=t[0];return{x:n.clientX,y:n.clientY}}if(e.pageX!==void 0)return{x:e.pageX,y:e.pageY}}return{x:0,y:0}},T=e=>{let t=document.dir==="rtl";switch(e){case"start":return t;case"end":return!t;default:throw new Error(`"${e}" is not a valid value for [side]. Use "start" or "end" instead.`)}},L=(e,t)=>{let n=e._original||e;return{_original:e,emit:c(n.emit.bind(n),t)}},c=(e,t=0)=>{let n;return(...i)=>{clearTimeout(n),n=setTimeout(e,t,...i)}},I=(e,t)=>{if(e??(e={}),t??(t={}),e===t)return!0;let n=Object.keys(e);if(n.length!==Object.keys(t).length)return!1;for(let i of n)if(!(i in t)||e[i]!==t[i])return!1;return!0};export{f as a,b,u as c,m as d,h as e,w as f,g,d as h,v as i,y as j,p as k,E as l,_ as m,A as n,x as o,T as p,L as q,I as r};
