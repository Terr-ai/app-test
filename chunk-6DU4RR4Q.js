import{a as ee}from"./chunk-WX6BE4TD.js";import{a as L}from"./chunk-WZJXU45U.js";import{C as R,D as B,K as z,L as A,a as F,ba as x,c as V,ca as P,da as J,i as T,k as M,m as p,n as _}from"./chunk-RHZGSOGK.js";import{a as N,b as H,c as U,d as q,h as Q}from"./chunk-LGKREXYO.js";import{c as K,d as g}from"./chunk-N6OIOLFV.js";import{a as W,b as y,c as k,d as Y,e as r,f as D,h as f,i as O,j as E}from"./chunk-IZ33YZ6F.js";import{i as C}from"./chunk-Q3RND7FR.js";var se=":host{left:0;right:0;top:0;bottom:0;position:absolute;contain:strict;pointer-events:none}:host(.unbounded){contain:layout size style}.ripple-effect{border-radius:50%;position:absolute;background-color:currentColor;color:inherit;contain:strict;opacity:0;-webkit-animation:225ms rippleAnimation forwards, 75ms fadeInAnimation forwards;animation:225ms rippleAnimation forwards, 75ms fadeInAnimation forwards;will-change:transform, opacity;pointer-events:none}.fade-out{-webkit-transform:translate(var(--translate-end)) scale(var(--final-scale, 1));transform:translate(var(--translate-end)) scale(var(--final-scale, 1));-webkit-animation:150ms fadeOutAnimation forwards;animation:150ms fadeOutAnimation forwards}@-webkit-keyframes rippleAnimation{from{-webkit-animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);-webkit-transform:scale(1);transform:scale(1)}to{-webkit-transform:translate(var(--translate-end)) scale(var(--final-scale, 1));transform:translate(var(--translate-end)) scale(var(--final-scale, 1))}}@keyframes rippleAnimation{from{-webkit-animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);-webkit-transform:scale(1);transform:scale(1)}to{-webkit-transform:translate(var(--translate-end)) scale(var(--final-scale, 1));transform:translate(var(--translate-end)) scale(var(--final-scale, 1))}}@-webkit-keyframes fadeInAnimation{from{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0}to{opacity:0.16}}@keyframes fadeInAnimation{from{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0}to{opacity:0.16}}@-webkit-keyframes fadeOutAnimation{from{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0.16}to{opacity:0}}@keyframes fadeOutAnimation{from{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0.16}to{opacity:0}}",ce=se,le=E(class extends y{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.type="bounded"}addRipple(e,t){return C(this,null,function*(){return new Promise(o=>{k(()=>{let i=this.el.getBoundingClientRect(),a=i.width,c=i.height,d=Math.sqrt(a*a+c*c),l=Math.max(c,a),u=this.unbounded?l:d+ue,s=Math.floor(l*me),v=u/s,h=e-i.left,m=t-i.top;this.unbounded&&(h=a*.5,m=c*.5);let w=h-s*.5,b=m-s*.5,S=a*.5-h,$=c*.5-m;Y(()=>{let I=document.createElement("div");I.classList.add("ripple-effect");let j=I.style;j.top=b+"px",j.left=w+"px",j.width=j.height=s+"px",j.setProperty("--final-scale",`${v}`),j.setProperty("--translate-end",`${S}px, ${$}px`),(this.el.shadowRoot||this.el).appendChild(I),setTimeout(()=>{o(()=>{de(I)})},325)})})})})}get unbounded(){return this.type==="unbounded"}render(){let e=g(this);return r(D,{key:"f1129019a6d556b008c754aeb79618c69baea9f8",role:"presentation",class:{[e]:!0,unbounded:this.unbounded}})}get el(){return this}static get style(){return ce}},[1,"ion-ripple-effect",{type:[1],addRipple:[64]}]),de=n=>{n.classList.add("fade-out"),setTimeout(()=>{n.remove()},200)},ue=10,me=.5;function te(){if(typeof customElements>"u")return;["ion-ripple-effect"].forEach(e=>{switch(e){case"ion-ripple-effect":customElements.get(e)||customElements.define(e,le);break}})}var fe=':host{--overflow:hidden;--ripple-color:currentColor;--border-width:initial;--border-color:initial;--border-style:initial;--color-activated:var(--color);--color-focused:var(--color);--color-hover:var(--color);--box-shadow:none;display:inline-block;width:auto;color:var(--color);font-family:var(--ion-font-family, inherit);text-align:center;text-decoration:none;white-space:nowrap;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;vertical-align:top;vertical-align:-webkit-baseline-middle;-webkit-font-kerning:none;font-kerning:none}:host(.button-disabled){cursor:default;opacity:0.5;pointer-events:none}:host(.button-solid){--background:var(--ion-color-primary, #3880ff);--color:var(--ion-color-primary-contrast, #fff)}:host(.button-outline){--border-color:var(--ion-color-primary, #3880ff);--background:transparent;--color:var(--ion-color-primary, #3880ff)}:host(.button-clear){--border-width:0;--background:transparent;--color:var(--ion-color-primary, #3880ff)}:host(.button-block){display:block}:host(.button-block) .button-native{margin-left:0;margin-right:0;width:100%;clear:both;contain:content}:host(.button-block) .button-native::after{clear:both}:host(.button-full){display:block}:host(.button-full) .button-native{margin-left:0;margin-right:0;width:100%;contain:content}:host(.button-full:not(.button-round)) .button-native{border-radius:0;border-right-width:0;border-left-width:0}.button-native{border-radius:var(--border-radius);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;display:-ms-flexbox;display:flex;position:relative;-ms-flex-align:center;align-items:center;width:100%;height:100%;min-height:inherit;-webkit-transition:var(--transition);transition:var(--transition);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);outline:none;background:var(--background);line-height:1;-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);contain:layout style;cursor:pointer;opacity:var(--opacity);overflow:var(--overflow);z-index:0;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-appearance:none;-moz-appearance:none;appearance:none}.button-native::-moz-focus-inner{border:0}.button-inner{display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;z-index:1}::slotted([slot=start]),::slotted([slot=end]){-ms-flex-negative:0;flex-shrink:0}::slotted(ion-icon){font-size:1.35em;pointer-events:none}::slotted(ion-icon[slot=start]){-webkit-margin-start:-0.3em;margin-inline-start:-0.3em;-webkit-margin-end:0.3em;margin-inline-end:0.3em;margin-top:0;margin-bottom:0}::slotted(ion-icon[slot=end]){-webkit-margin-start:0.3em;margin-inline-start:0.3em;-webkit-margin-end:-0.2em;margin-inline-end:-0.2em;margin-top:0;margin-bottom:0}::slotted(ion-icon[slot=icon-only]){font-size:1.8em}ion-ripple-effect{color:var(--ripple-color)}.button-native::after{left:0;right:0;top:0;bottom:0;position:absolute;content:"";opacity:0}:host(.ion-focused){color:var(--color-focused)}:host(.ion-focused) .button-native::after{background:var(--background-focused);opacity:var(--background-focused-opacity)}@media (any-hover: hover){:host(:hover){color:var(--color-hover)}:host(:hover) .button-native::after{background:var(--background-hover);opacity:var(--background-hover-opacity)}}:host(.ion-activated){color:var(--color-activated)}:host(.ion-activated) .button-native::after{background:var(--background-activated);opacity:var(--background-activated-opacity)}:host(.button-solid.ion-color) .button-native{background:var(--ion-color-base);color:var(--ion-color-contrast)}:host(.button-outline.ion-color) .button-native{border-color:var(--ion-color-base);background:transparent;color:var(--ion-color-base)}:host(.button-clear.ion-color) .button-native{background:transparent;color:var(--ion-color-base)}:host(.in-toolbar:not(.ion-color):not(.in-toolbar-color)) .button-native{color:var(--ion-toolbar-color, var(--color))}:host(.button-outline.in-toolbar:not(.ion-color):not(.in-toolbar-color)) .button-native{border-color:var(--ion-toolbar-color, var(--color, var(--border-color)))}:host(.button-solid.in-toolbar:not(.ion-color):not(.in-toolbar-color)) .button-native{background:var(--ion-toolbar-color, var(--background));color:var(--ion-toolbar-background, var(--color))}:host{--border-radius:14px;--padding-top:13px;--padding-bottom:13px;--padding-start:1em;--padding-end:1em;--transition:background-color, opacity 100ms linear;-webkit-margin-start:2px;margin-inline-start:2px;-webkit-margin-end:2px;margin-inline-end:2px;margin-top:4px;margin-bottom:4px;min-height:3.1em;font-size:min(1rem, 48px);font-weight:500;letter-spacing:0}:host(.button-solid){--background-activated:var(--ion-color-primary-shade, #3171e0);--background-focused:var(--ion-color-primary-shade, #3171e0);--background-hover:var(--ion-color-primary-tint, #4c8dff);--background-activated-opacity:1;--background-focused-opacity:1;--background-hover-opacity:1}:host(.button-outline){--border-radius:14px;--border-width:1px;--border-style:solid;--background-activated:var(--ion-color-primary, #3880ff);--background-focused:var(--ion-color-primary, #3880ff);--background-hover:transparent;--background-focused-opacity:.1;--color-activated:var(--ion-color-primary-contrast, #fff)}:host(.button-clear){--background-activated:transparent;--background-activated-opacity:0;--background-focused:var(--ion-color-primary, #3880ff);--background-hover:transparent;--background-focused-opacity:.1;font-size:min(1.0625rem, 51px);font-weight:normal}:host(.in-buttons){font-size:clamp(17px, 1.0625rem, 21.08px);font-weight:400}:host(.button-large){--border-radius:16px;--padding-top:17px;--padding-start:1em;--padding-end:1em;--padding-bottom:17px;min-height:3.1em;font-size:min(1.25rem, 60px)}:host(.button-small){--border-radius:6px;--padding-top:4px;--padding-start:0.9em;--padding-end:0.9em;--padding-bottom:4px;min-height:2.1em;font-size:min(0.8125rem, 39px)}:host(.button-has-icon-only){--padding-top:0;--padding-bottom:0}:host(.button-round){--border-radius:64px;--padding-top:0;--padding-start:26px;--padding-end:26px;--padding-bottom:0}:host(.button-strong){font-weight:600}:host(.button-outline.ion-focused.ion-color) .button-native,:host(.button-clear.ion-focused.ion-color) .button-native{color:var(--ion-color-base)}:host(.button-outline.ion-focused.ion-color) .button-native::after,:host(.button-clear.ion-focused.ion-color) .button-native::after{background:var(--ion-color-base)}:host(.button-solid.ion-color.ion-focused) .button-native::after{background:var(--ion-color-shade)}@media (any-hover: hover){:host(.button-clear:not(.ion-activated):hover),:host(.button-outline:not(.ion-activated):hover){opacity:0.6}:host(.button-clear.ion-color:hover) .button-native,:host(.button-outline.ion-color:hover) .button-native{color:var(--ion-color-base)}:host(.button-clear.ion-color:hover) .button-native::after,:host(.button-outline.ion-color:hover) .button-native::after{background:transparent}:host(.button-solid.ion-color:hover) .button-native::after{background:var(--ion-color-tint)}:host(:hover.button-solid.in-toolbar:not(.ion-color):not(.in-toolbar-color):not(.ion-activated)) .button-native::after{background:#fff;opacity:0.1}}:host(.button-clear.ion-activated){opacity:0.4}:host(.button-outline.ion-activated.ion-color) .button-native{color:var(--ion-color-contrast)}:host(.button-outline.ion-activated.ion-color) .button-native::after{background:var(--ion-color-base)}:host(.button-solid.ion-color.ion-activated) .button-native::after{background:var(--ion-color-shade)}:host(.button-outline.ion-activated.in-toolbar:not(.ion-color):not(.in-toolbar-color)) .button-native{background:var(--ion-toolbar-color, var(--color));color:var(--ion-toolbar-background, var(--background), var(--ion-color-primary-contrast, #fff))}',pe=fe,he=`:host{--overflow:hidden;--ripple-color:currentColor;--border-width:initial;--border-color:initial;--border-style:initial;--color-activated:var(--color);--color-focused:var(--color);--color-hover:var(--color);--box-shadow:none;display:inline-block;width:auto;color:var(--color);font-family:var(--ion-font-family, inherit);text-align:center;text-decoration:none;white-space:nowrap;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;vertical-align:top;vertical-align:-webkit-baseline-middle;-webkit-font-kerning:none;font-kerning:none}:host(.button-disabled){cursor:default;opacity:0.5;pointer-events:none}:host(.button-solid){--background:var(--ion-color-primary, #3880ff);--color:var(--ion-color-primary-contrast, #fff)}:host(.button-outline){--border-color:var(--ion-color-primary, #3880ff);--background:transparent;--color:var(--ion-color-primary, #3880ff)}:host(.button-clear){--border-width:0;--background:transparent;--color:var(--ion-color-primary, #3880ff)}:host(.button-block){display:block}:host(.button-block) .button-native{margin-left:0;margin-right:0;width:100%;clear:both;contain:content}:host(.button-block) .button-native::after{clear:both}:host(.button-full){display:block}:host(.button-full) .button-native{margin-left:0;margin-right:0;width:100%;contain:content}:host(.button-full:not(.button-round)) .button-native{border-radius:0;border-right-width:0;border-left-width:0}.button-native{border-radius:var(--border-radius);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;display:-ms-flexbox;display:flex;position:relative;-ms-flex-align:center;align-items:center;width:100%;height:100%;min-height:inherit;-webkit-transition:var(--transition);transition:var(--transition);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);outline:none;background:var(--background);line-height:1;-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);contain:layout style;cursor:pointer;opacity:var(--opacity);overflow:var(--overflow);z-index:0;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-appearance:none;-moz-appearance:none;appearance:none}.button-native::-moz-focus-inner{border:0}.button-inner{display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;z-index:1}::slotted([slot=start]),::slotted([slot=end]){-ms-flex-negative:0;flex-shrink:0}::slotted(ion-icon){font-size:1.35em;pointer-events:none}::slotted(ion-icon[slot=start]){-webkit-margin-start:-0.3em;margin-inline-start:-0.3em;-webkit-margin-end:0.3em;margin-inline-end:0.3em;margin-top:0;margin-bottom:0}::slotted(ion-icon[slot=end]){-webkit-margin-start:0.3em;margin-inline-start:0.3em;-webkit-margin-end:-0.2em;margin-inline-end:-0.2em;margin-top:0;margin-bottom:0}::slotted(ion-icon[slot=icon-only]){font-size:1.8em}ion-ripple-effect{color:var(--ripple-color)}.button-native::after{left:0;right:0;top:0;bottom:0;position:absolute;content:"";opacity:0}:host(.ion-focused){color:var(--color-focused)}:host(.ion-focused) .button-native::after{background:var(--background-focused);opacity:var(--background-focused-opacity)}@media (any-hover: hover){:host(:hover){color:var(--color-hover)}:host(:hover) .button-native::after{background:var(--background-hover);opacity:var(--background-hover-opacity)}}:host(.ion-activated){color:var(--color-activated)}:host(.ion-activated) .button-native::after{background:var(--background-activated);opacity:var(--background-activated-opacity)}:host(.button-solid.ion-color) .button-native{background:var(--ion-color-base);color:var(--ion-color-contrast)}:host(.button-outline.ion-color) .button-native{border-color:var(--ion-color-base);background:transparent;color:var(--ion-color-base)}:host(.button-clear.ion-color) .button-native{background:transparent;color:var(--ion-color-base)}:host(.in-toolbar:not(.ion-color):not(.in-toolbar-color)) .button-native{color:var(--ion-toolbar-color, var(--color))}:host(.button-outline.in-toolbar:not(.ion-color):not(.in-toolbar-color)) .button-native{border-color:var(--ion-toolbar-color, var(--color, var(--border-color)))}:host(.button-solid.in-toolbar:not(.ion-color):not(.in-toolbar-color)) .button-native{background:var(--ion-toolbar-color, var(--background));color:var(--ion-toolbar-background, var(--color))}:host{--border-radius:4px;--padding-top:8px;--padding-bottom:8px;--padding-start:1.1em;--padding-end:1.1em;--transition:box-shadow 280ms cubic-bezier(.4, 0, .2, 1),
                background-color 15ms linear,
                color 15ms linear;-webkit-margin-start:2px;margin-inline-start:2px;-webkit-margin-end:2px;margin-inline-end:2px;margin-top:4px;margin-bottom:4px;min-height:36px;font-size:0.875rem;font-weight:500;letter-spacing:0.06em;text-transform:uppercase}:host(.button-solid){--background-activated:transparent;--background-hover:var(--ion-color-primary-contrast, #fff);--background-focused:var(--ion-color-primary-contrast, #fff);--background-activated-opacity:0;--background-focused-opacity:.24;--background-hover-opacity:.08;--box-shadow:0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12)}:host(.button-solid.ion-activated){--box-shadow:0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12)}:host(.button-outline){--border-width:2px;--border-style:solid;--box-shadow:none;--background-activated:transparent;--background-focused:var(--ion-color-primary, #3880ff);--background-hover:var(--ion-color-primary, #3880ff);--background-activated-opacity:0;--background-focused-opacity:.12;--background-hover-opacity:.04}:host(.button-outline.ion-activated.ion-color) .button-native{background:transparent}:host(.button-clear){--background-activated:transparent;--background-focused:var(--ion-color-primary, #3880ff);--background-hover:var(--ion-color-primary, #3880ff);--background-activated-opacity:0;--background-focused-opacity:.12;--background-hover-opacity:.04}:host(.button-round){--border-radius:64px;--padding-top:0;--padding-start:26px;--padding-end:26px;--padding-bottom:0}:host(.button-large){--padding-top:14px;--padding-start:1em;--padding-end:1em;--padding-bottom:14px;min-height:2.8em;font-size:1.25rem}:host(.button-small){--padding-top:4px;--padding-start:0.9em;--padding-end:0.9em;--padding-bottom:4px;min-height:2.1em;font-size:0.8125rem}:host(.button-has-icon-only){--padding-top:0;--padding-bottom:0}:host(.button-strong){font-weight:bold}::slotted(ion-icon[slot=icon-only]){padding-left:0;padding-right:0;padding-top:0;padding-bottom:0}:host(.button-solid.ion-color.ion-focused) .button-native::after{background:var(--ion-color-contrast)}:host(.button-clear.ion-color.ion-focused) .button-native::after,:host(.button-outline.ion-color.ion-focused) .button-native::after{background:var(--ion-color-base)}@media (any-hover: hover){:host(.button-solid.ion-color:hover) .button-native::after{background:var(--ion-color-contrast)}:host(.button-clear.ion-color:hover) .button-native::after,:host(.button-outline.ion-color:hover) .button-native::after{background:var(--ion-color-base)}}:host(.button-outline.ion-activated.in-toolbar:not(.ion-color):not(.in-toolbar-color)) .button-native{background:var(--ion-toolbar-background, var(--color));color:var(--ion-toolbar-color, var(--background), var(--ion-color-primary-contrast, #fff))}`,ge=he,ne=E(class extends y{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.ionFocus=f(this,"ionFocus",7),this.ionBlur=f(this,"ionBlur",7),this.inItem=!1,this.inListHeader=!1,this.inToolbar=!1,this.formButtonEl=null,this.formEl=null,this.inheritedAttributes={},this.handleClick=e=>{let{el:t}=this;this.type==="button"?J(this.href,e,this.routerDirection,this.routerAnimation):Q(t)&&this.submitForm(e)},this.onFocus=()=>{this.ionFocus.emit()},this.onBlur=()=>{this.ionBlur.emit()},this.color=void 0,this.buttonType="button",this.disabled=!1,this.expand=void 0,this.fill=void 0,this.routerDirection="forward",this.routerAnimation=void 0,this.download=void 0,this.href=void 0,this.rel=void 0,this.shape=void 0,this.size=void 0,this.strong=!1,this.target=void 0,this.type="button",this.form=void 0}disabledChanged(){let{disabled:e}=this;this.formButtonEl&&(this.formButtonEl.disabled=e)}renderHiddenButton(){let e=this.formEl=this.findForm();if(e){let{formButtonEl:t}=this;if(t!==null&&e.contains(t))return;let o=this.formButtonEl=document.createElement("button");o.type=this.type,o.style.display="none",o.disabled=this.disabled,e.appendChild(o)}}componentWillLoad(){this.inToolbar=!!this.el.closest("ion-buttons"),this.inListHeader=!!this.el.closest("ion-list-header"),this.inItem=!!this.el.closest("ion-item")||!!this.el.closest("ion-item-divider"),this.inheritedAttributes=q(this.el)}get hasIconOnly(){return!!this.el.querySelector('[slot="icon-only"]')}get rippleType(){return(this.fill===void 0||this.fill==="clear")&&this.hasIconOnly&&this.inToolbar?"unbounded":"bounded"}findForm(){let{form:e}=this;if(e instanceof HTMLFormElement)return e;if(typeof e=="string"){let t=document.getElementById(e);return t?t instanceof HTMLFormElement?t:(L(`Form with selector: "#${e}" could not be found. Verify that the id is attached to a <form> element.`,this.el),null):(L(`Form with selector: "#${e}" could not be found. Verify that the id is correct and the form is rendered in the DOM.`,this.el),null)}return e!==void 0?(L('The provided "form" element is invalid. Verify that the form is a HTMLFormElement and rendered in the DOM.',this.el),null):this.el.closest("form")}submitForm(e){this.formEl&&this.formButtonEl&&(e.preventDefault(),this.formButtonEl.click())}render(){let e=g(this),{buttonType:t,type:o,disabled:i,rel:a,target:c,size:d,href:l,color:u,expand:s,hasIconOnly:v,shape:h,strong:m,inheritedAttributes:w}=this,b=d===void 0&&this.inItem?"small":d,S=l===void 0?"button":"a",$=S==="button"?{type:o}:{download:this.download,href:l,rel:a,target:c},I=this.fill;return I==null&&(I=this.inToolbar||this.inListHeader?"clear":"solid"),o!=="button"&&this.renderHiddenButton(),r(D,{key:"54569350aae49882123f0e22a720956eddee33f5",onClick:this.handleClick,"aria-disabled":i?"true":null,class:P(u,{[e]:!0,[t]:!0,[`${t}-${s}`]:s!==void 0,[`${t}-${b}`]:b!==void 0,[`${t}-${h}`]:h!==void 0,[`${t}-${I}`]:!0,[`${t}-strong`]:m,"in-toolbar":x("ion-toolbar",this.el),"in-toolbar-color":x("ion-toolbar[color]",this.el),"in-buttons":x("ion-buttons",this.el),"button-has-icon-only":v,"button-disabled":i,"ion-activatable":!0,"ion-focusable":!0})},r(S,Object.assign({key:"95c196fc5bf080ef308532c3627e2a9d68f24996"},$,{class:"button-native",part:"native",disabled:i,onFocus:this.onFocus,onBlur:this.onBlur},w),r("span",{key:"e247013b847158187258d28f37ab23905fe49110",class:"button-inner"},r("slot",{key:"58ac0bd8f643f4392ddbe465fab26eedffe02b7a",name:"icon-only"}),r("slot",{key:"2289d37a37a64472ffe818b3b1126945cebf101e",name:"start"}),r("slot",{key:"b69a915dff465d251f0466449b91450d4a4048a9"}),r("slot",{key:"594a80d6707fd5edabc03e467f7aae3011d020f6",name:"end"})),e==="md"&&r("ion-ripple-effect",{key:"b034770cadefe74922ed6564a17147ddc6c9fdb1",type:this.rippleType})))}get el(){return this}static get watchers(){return{disabled:["disabledChanged"]}}static get style(){return{ios:pe,md:ge}}},[33,"ion-button",{color:[513],buttonType:[1025,"button-type"],disabled:[516],expand:[513],fill:[1537],routerDirection:[1,"router-direction"],routerAnimation:[16],download:[1],href:[1],rel:[1],shape:[513],size:[513],strong:[4],target:[1],type:[1],form:[1]},void 0,{disabled:["disabledChanged"]}]);function oe(){if(typeof customElements>"u")return;["ion-button","ion-ripple-effect"].forEach(e=>{switch(e){case"ion-button":customElements.get(e)||customElements.define(e,ne);break;case"ion-ripple-effect":customElements.get(e)||te();break}})}var ie=oe;var ve=':host{--background:var(--ion-background-color, #fff);--color:var(--ion-text-color, #000);--padding-top:0px;--padding-bottom:0px;--padding-start:0px;--padding-end:0px;--keyboard-offset:0px;--offset-top:0px;--offset-bottom:0px;--overflow:auto;display:block;position:relative;-ms-flex:1;flex:1;width:100%;height:100%;margin:0 !important;padding:0 !important;font-family:var(--ion-font-family, inherit);contain:size style}:host(.ion-color) .inner-scroll{background:var(--ion-color-base);color:var(--ion-color-contrast)}:host(.outer-content){--background:var(--ion-color-step-50, #f2f2f2)}#background-content{left:0px;right:0px;top:calc(var(--offset-top) * -1);bottom:calc(var(--offset-bottom) * -1);position:absolute;background:var(--background)}.inner-scroll{left:0px;right:0px;top:calc(var(--offset-top) * -1);bottom:calc(var(--offset-bottom) * -1);-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end);padding-top:calc(var(--padding-top) + var(--offset-top));padding-bottom:calc(var(--padding-bottom) + var(--keyboard-offset) + var(--offset-bottom));position:absolute;color:var(--color);-webkit-box-sizing:border-box;box-sizing:border-box;overflow:hidden;-ms-touch-action:pan-x pan-y pinch-zoom;touch-action:pan-x pan-y pinch-zoom}.scroll-y,.scroll-x{-webkit-overflow-scrolling:touch;z-index:0;will-change:scroll-position}.scroll-y{overflow-y:var(--overflow);overscroll-behavior-y:contain}.scroll-x{overflow-x:var(--overflow);overscroll-behavior-x:contain}.overscroll::before,.overscroll::after{position:absolute;width:1px;height:1px;content:""}.overscroll::before{bottom:-1px}.overscroll::after{top:-1px}:host(.content-sizing){display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;min-height:0;contain:none}:host(.content-sizing) .inner-scroll{position:relative;top:0;bottom:0;margin-top:calc(var(--offset-top) * -1);margin-bottom:calc(var(--offset-bottom) * -1)}.transition-effect{display:none;position:absolute;width:100%;height:100vh;opacity:0;pointer-events:none}:host(.content-ltr) .transition-effect{left:-100%;}:host(.content-rtl) .transition-effect{right:-100%;}.transition-cover{position:absolute;right:0;width:100%;height:100%;background:black;opacity:0.1}.transition-shadow{display:block;position:absolute;width:100%;height:100%;-webkit-box-shadow:inset -9px 0 9px 0 rgba(0, 0, 100, 0.03);box-shadow:inset -9px 0 9px 0 rgba(0, 0, 100, 0.03)}:host(.content-ltr) .transition-shadow{right:0;}:host(.content-rtl) .transition-shadow{left:0;-webkit-transform:scaleX(-1);transform:scaleX(-1)}::slotted([slot=fixed]){position:absolute;-webkit-transform:translateZ(0);transform:translateZ(0)}',be=ve,Ie=E(class extends y{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.ionScrollStart=f(this,"ionScrollStart",7),this.ionScroll=f(this,"ionScroll",7),this.ionScrollEnd=f(this,"ionScrollEnd",7),this.watchDog=null,this.isScrolling=!1,this.lastScroll=0,this.queued=!1,this.cTop=-1,this.cBottom=-1,this.isMainContent=!0,this.resizeTimeout=null,this.tabsElement=null,this.detail={scrollTop:0,scrollLeft:0,type:"scroll",event:void 0,startX:0,startY:0,startTime:0,currentX:0,currentY:0,velocityX:0,velocityY:0,deltaX:0,deltaY:0,currentTime:0,data:void 0,isScrolling:!0},this.color=void 0,this.fullscreen=!1,this.forceOverscroll=void 0,this.scrollX=!1,this.scrollY=!0,this.scrollEvents=!1}connectedCallback(){if(this.isMainContent=this.el.closest("ion-menu, ion-popover, ion-modal")===null,H(this.el)){let e=this.tabsElement=this.el.closest("ion-tabs");e!==null&&(this.tabsLoadCallback=()=>this.resize(),e.addEventListener("ionTabBarLoaded",this.tabsLoadCallback))}}disconnectedCallback(){if(this.onScrollEnd(),H(this.el)){let{tabsElement:e,tabsLoadCallback:t}=this;e!==null&&t!==void 0&&e.removeEventListener("ionTabBarLoaded",t),this.tabsElement=null,this.tabsLoadCallback=void 0}}onResize(){this.resizeTimeout&&(clearTimeout(this.resizeTimeout),this.resizeTimeout=null),this.resizeTimeout=setTimeout(()=>{this.el.offsetParent!==null&&this.resize()},100)}shouldForceOverscroll(){let{forceOverscroll:e}=this,t=g(this);return e===void 0?t==="ios"&&K("ios"):e}resize(){W.isBrowser&&(this.fullscreen?k(()=>this.readDimensions()):(this.cTop!==0||this.cBottom!==0)&&(this.cTop=this.cBottom=0,O(this)))}readDimensions(){let e=ye(this.el),t=Math.max(this.el.offsetTop,0),o=Math.max(e.offsetHeight-t-this.el.offsetHeight,0);(t!==this.cTop||o!==this.cBottom)&&(this.cTop=t,this.cBottom=o,O(this))}onScroll(e){let t=Date.now(),o=!this.isScrolling;this.lastScroll=t,o&&this.onScrollStart(),!this.queued&&this.scrollEvents&&(this.queued=!0,k(i=>{this.queued=!1,this.detail.event=e,De(this.detail,this.scrollEl,i,o),this.ionScroll.emit(this.detail)}))}getScrollElement(){return C(this,null,function*(){return this.scrollEl||(yield new Promise(e=>N(this.el,e))),Promise.resolve(this.scrollEl)})}getBackgroundElement(){return C(this,null,function*(){return this.backgroundContentEl||(yield new Promise(e=>N(this.el,e))),Promise.resolve(this.backgroundContentEl)})}scrollToTop(e=0){return this.scrollToPoint(void 0,0,e)}scrollToBottom(e=0){return C(this,null,function*(){let t=yield this.getScrollElement(),o=t.scrollHeight-t.clientHeight;return this.scrollToPoint(void 0,o,e)})}scrollByPoint(e,t,o){return C(this,null,function*(){let i=yield this.getScrollElement();return this.scrollToPoint(e+i.scrollLeft,t+i.scrollTop,o)})}scrollToPoint(e,t,o=0){return C(this,null,function*(){let i=yield this.getScrollElement();if(o<32){t!=null&&(i.scrollTop=t),e!=null&&(i.scrollLeft=e);return}let a,c=0,d=new Promise(m=>a=m),l=i.scrollTop,u=i.scrollLeft,s=t!=null?t-l:0,v=e!=null?e-u:0,h=m=>{let w=Math.min(1,(m-c)/o)-1,b=Math.pow(w,3)+1;s!==0&&(i.scrollTop=Math.floor(b*s+l)),v!==0&&(i.scrollLeft=Math.floor(b*v+u)),b<1?requestAnimationFrame(h):a()};return requestAnimationFrame(m=>{c=m,h(m)}),d})}onScrollStart(){this.isScrolling=!0,this.ionScrollStart.emit({isScrolling:!0}),this.watchDog&&clearInterval(this.watchDog),this.watchDog=setInterval(()=>{this.lastScroll<Date.now()-120&&this.onScrollEnd()},100)}onScrollEnd(){this.watchDog&&clearInterval(this.watchDog),this.watchDog=null,this.isScrolling&&(this.isScrolling=!1,this.ionScrollEnd.emit({isScrolling:!1}))}render(){let{isMainContent:e,scrollX:t,scrollY:o,el:i}=this,a=ee(i)?"rtl":"ltr",c=g(this),d=this.shouldForceOverscroll(),l=c==="ios",u=e?"main":"div";return this.resize(),r(D,{key:"e13815c0e6f6095150b112d3a1aaf2f509aa0d0b",class:P(this.color,{[c]:!0,"content-sizing":x("ion-popover",this.el),overscroll:d,[`content-${a}`]:!0}),style:{"--offset-top":`${this.cTop}px`,"--offset-bottom":`${this.cBottom}px`}},r("div",{key:"8006c4a10d8f7dc83c646246961d018a8097236e",ref:s=>this.backgroundContentEl=s,id:"background-content",part:"background"}),r(u,{key:"4dd2f58421493f7a4ca42f8f5d7b85cda8e320ea",class:{"inner-scroll":!0,"scroll-x":t,"scroll-y":o,overscroll:(t||o)&&d},ref:s=>this.scrollEl=s,onScroll:this.scrollEvents?s=>this.onScroll(s):void 0,part:"scroll"},r("slot",{key:"37904f8f1d8319156cd901feb21930ef674fe0f7"})),l?r("div",{class:"transition-effect"},r("div",{class:"transition-cover"}),r("div",{class:"transition-shadow"})):null,r("slot",{key:"8f696583903af0548d064dca1a6bae060e127485",name:"fixed"}))}get el(){return this}static get style(){return be}},[1,"ion-content",{color:[513],fullscreen:[4],forceOverscroll:[1028,"force-overscroll"],scrollX:[4,"scroll-x"],scrollY:[4,"scroll-y"],scrollEvents:[4,"scroll-events"],getScrollElement:[64],getBackgroundElement:[64],scrollToTop:[64],scrollToBottom:[64],scrollByPoint:[64],scrollToPoint:[64]},[[9,"resize","onResize"]]]),Ce=n=>{var e;return n.parentElement?n.parentElement:!((e=n.parentNode)===null||e===void 0)&&e.host?n.parentNode.host:null},ye=n=>{let e=n.closest("ion-tabs");if(e)return e;let t=n.closest("ion-app, ion-page, .ion-page, page-inner, .popover-content");return t||Ce(n)},De=(n,e,t,o)=>{let i=n.currentX,a=n.currentY,c=n.currentTime,d=e.scrollLeft,l=e.scrollTop,u=t-c;if(o&&(n.startTime=t,n.startX=d,n.startY=l,n.velocityX=n.velocityY=0),n.currentTime=t,n.currentX=n.scrollLeft=d,n.currentY=n.scrollTop=l,n.deltaX=d-n.startX,n.deltaY=l-n.startY,u>0&&u<100){let s=(d-i)/u,v=(l-a)/u;n.velocityX=s*.7+n.velocityX*.3,n.velocityY=v*.7+n.velocityY*.3}};function Ee(){if(typeof customElements>"u")return;["ion-content"].forEach(e=>{switch(e){case"ion-content":customElements.get(e)||customElements.define(e,Ie);break}})}var re=Ee;var je=":host{display:block;-o-object-fit:contain;object-fit:contain}img{display:block;width:100%;height:100%;-o-object-fit:inherit;object-fit:inherit;-o-object-position:inherit;object-position:inherit}",xe=je,we=E(class extends y{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.ionImgWillLoad=f(this,"ionImgWillLoad",7),this.ionImgDidLoad=f(this,"ionImgDidLoad",7),this.ionError=f(this,"ionError",7),this.inheritedAttributes={},this.onLoad=()=>{this.ionImgDidLoad.emit()},this.onError=()=>{this.ionError.emit()},this.loadSrc=void 0,this.loadError=void 0,this.alt=void 0,this.src=void 0}srcChanged(){this.addIO()}componentWillLoad(){this.inheritedAttributes=U(this.el,["draggable"])}componentDidLoad(){this.addIO()}addIO(){this.src!==void 0&&(typeof window<"u"&&"IntersectionObserver"in window&&"IntersectionObserverEntry"in window&&"isIntersecting"in window.IntersectionObserverEntry.prototype?(this.removeIO(),this.io=new IntersectionObserver(e=>{e[e.length-1].isIntersecting&&(this.load(),this.removeIO())}),this.io.observe(this.el)):setTimeout(()=>this.load(),200))}load(){this.loadError=this.onError,this.loadSrc=this.src,this.ionImgWillLoad.emit()}removeIO(){this.io&&(this.io.disconnect(),this.io=void 0)}render(){let{loadSrc:e,alt:t,onLoad:o,loadError:i,inheritedAttributes:a}=this,{draggable:c}=a;return r(D,{key:"efff4d1bd0e54dbeff140c137eb50b803a9f6f60",class:g(this)},r("img",{key:"3a1e0276ae67a7e40ec8c4ecd0061634573b2094",decoding:"async",src:e,alt:t,onLoad:o,onError:i,part:"image",draggable:ke(c)}))}get el(){return this}static get watchers(){return{src:["srcChanged"]}}static get style(){return xe}},[1,"ion-img",{alt:[1],src:[1],loadSrc:[32],loadError:[32]},void 0,{src:["srcChanged"]}]),ke=n=>{switch(n){case"true":return!0;case"false":return!1;default:return}};function Se(){if(typeof customElements>"u")return;["ion-img"].forEach(e=>{switch(e){case"ion-img":customElements.get(e)||customElements.define(e,we);break}})}var ae=Se;var Z=["*"];var Fe=(n,e)=>{let t=n.prototype;e.forEach(o=>{Object.defineProperty(t,o,{get(){return this.el[o]},set(i){this.z.runOutsideAngular(()=>this.el[o]=i)},configurable:!0})})},Te=(n,e)=>{let t=n.prototype;e.forEach(o=>{t[o]=function(){let i=arguments;return this.z.runOutsideAngular(()=>this.el[o].apply(this.el,i))}})},X=(n,e,t)=>{t.forEach(o=>n[o]=V(e,o))};function G(n){return function(t){let{defineCustomElementFn:o,inputs:i,methods:a}=n;return o!==void 0&&o(),i&&Fe(t,i),a&&Te(t,a),t}}var Yt=(()=>{let n=class{constructor(t,o,i){this.z=i,t.detach(),this.el=o.nativeElement,X(this,this.el,["ionFocus","ionBlur"])}};return n.\u0275fac=function(t){return new(t||n)(p(A),p(M),p(_))},n.\u0275cmp=T({type:n,selectors:[["ion-button"]],inputs:{buttonType:"buttonType",color:"color",disabled:"disabled",download:"download",expand:"expand",fill:"fill",form:"form",href:"href",mode:"mode",rel:"rel",routerAnimation:"routerAnimation",routerDirection:"routerDirection",shape:"shape",size:"size",strong:"strong",target:"target",type:"type"},standalone:!0,features:[z],ngContentSelectors:Z,decls:1,vars:0,template:function(t,o){t&1&&(R(),B(0))},encapsulation:2,changeDetection:0}),n=F([G({defineCustomElementFn:ie,inputs:["buttonType","color","disabled","download","expand","fill","form","href","mode","rel","routerAnimation","routerDirection","shape","size","strong","target","type"]})],n),n})();var qt=(()=>{let n=class{constructor(t,o,i){this.z=i,t.detach(),this.el=o.nativeElement,X(this,this.el,["ionScrollStart","ionScroll","ionScrollEnd"])}};return n.\u0275fac=function(t){return new(t||n)(p(A),p(M),p(_))},n.\u0275cmp=T({type:n,selectors:[["ion-content"]],inputs:{color:"color",forceOverscroll:"forceOverscroll",fullscreen:"fullscreen",scrollEvents:"scrollEvents",scrollX:"scrollX",scrollY:"scrollY"},standalone:!0,features:[z],ngContentSelectors:Z,decls:1,vars:0,template:function(t,o){t&1&&(R(),B(0))},encapsulation:2,changeDetection:0}),n=F([G({defineCustomElementFn:re,inputs:["color","forceOverscroll","fullscreen","scrollEvents","scrollX","scrollY"],methods:["getScrollElement","scrollToTop","scrollToBottom","scrollByPoint","scrollToPoint"]})],n),n})();var Kt=(()=>{let n=class{constructor(t,o,i){this.z=i,t.detach(),this.el=o.nativeElement,X(this,this.el,["ionImgWillLoad","ionImgDidLoad","ionError"])}};return n.\u0275fac=function(t){return new(t||n)(p(A),p(M),p(_))},n.\u0275cmp=T({type:n,selectors:[["ion-img"]],inputs:{alt:"alt",src:"src"},standalone:!0,features:[z],ngContentSelectors:Z,decls:1,vars:0,template:function(t,o){t&1&&(R(),B(0))},encapsulation:2,changeDetection:0}),n=F([G({defineCustomElementFn:ae,inputs:["alt","src"]})],n),n})();export{Yt as a,qt as b,Kt as c};
