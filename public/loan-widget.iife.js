var loan_widget=(function(h){"use strict";const L=globalThis,D=L.ShadowRoot&&(L.ShadyCSS===void 0||L.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,W=Symbol(),F=new WeakMap;let q=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==W)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(D&&t===void 0){const i=e!==void 0&&e.length===1;i&&(t=F.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&F.set(e,t))}return t}toString(){return this.cssText}};const lt=n=>new q(typeof n=="string"?n:n+"",void 0,W),ht=(n,...t)=>{const e=n.length===1?n[0]:t.reduce((i,s,o)=>i+(r=>{if(r._$cssResult$===!0)return r.cssText;if(typeof r=="number")return r;throw Error("Value passed to 'css' function must be a 'css' function result: "+r+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+n[o+1],n[0]);return new q(e,n,W)},dt=(n,t)=>{if(D)n.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const e of t){const i=document.createElement("style"),s=L.litNonce;s!==void 0&&i.setAttribute("nonce",s),i.textContent=e.cssText,n.appendChild(i)}},J=D?n=>n:n=>n instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return lt(e)})(n):n;const{is:ct,defineProperty:pt,getOwnPropertyDescriptor:ut,getOwnPropertyNames:$t,getOwnPropertySymbols:mt,getPrototypeOf:ft}=Object,H=globalThis,Z=H.trustedTypes,gt=Z?Z.emptyScript:"",_t=H.reactiveElementPolyfillSupport,P=(n,t)=>n,N={toAttribute(n,t){switch(t){case Boolean:n=n?gt:null;break;case Object:case Array:n=n==null?n:JSON.stringify(n)}return n},fromAttribute(n,t){let e=n;switch(t){case Boolean:e=n!==null;break;case Number:e=n===null?null:Number(n);break;case Object:case Array:try{e=JSON.parse(n)}catch{e=null}}return e}},k=(n,t)=>!ct(n,t),G={attribute:!0,type:String,converter:N,reflect:!1,useDefault:!1,hasChanged:k};Symbol.metadata??=Symbol("metadata"),H.litPropertyMetadata??=new WeakMap;let b=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=G){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),s=this.getPropertyDescriptor(t,i,e);s!==void 0&&pt(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){const{get:s,set:o}=ut(this.prototype,t)??{get(){return this[e]},set(r){this[e]=r}};return{get:s,set(r){const l=s?.call(this);o?.call(this,r),this.requestUpdate(t,l,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??G}static _$Ei(){if(this.hasOwnProperty(P("elementProperties")))return;const t=ft(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(P("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(P("properties"))){const e=this.properties,i=[...$t(e),...mt(e)];for(const s of i)this.createProperty(s,e[s])}const t=this[Symbol.metadata];if(t!==null){const e=litPropertyMetadata.get(t);if(e!==void 0)for(const[i,s]of e)this.elementProperties.set(i,s)}this._$Eh=new Map;for(const[e,i]of this.elementProperties){const s=this._$Eu(e,i);s!==void 0&&this._$Eh.set(s,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const s of i)e.unshift(J(s))}else t!==void 0&&e.push(J(t));return e}static _$Eu(t,e){const i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return dt(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ET(t,e){const i=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,i);if(s!==void 0&&i.reflect===!0){const o=(i.converter?.toAttribute!==void 0?i.converter:N).toAttribute(e,i.type);this._$Em=t,o==null?this.removeAttribute(s):this.setAttribute(s,o),this._$Em=null}}_$AK(t,e){const i=this.constructor,s=i._$Eh.get(t);if(s!==void 0&&this._$Em!==s){const o=i.getPropertyOptions(s),r=typeof o.converter=="function"?{fromAttribute:o.converter}:o.converter?.fromAttribute!==void 0?o.converter:N;this._$Em=s;const l=r.fromAttribute(e,o.type);this[s]=l??this._$Ej?.get(s)??l,this._$Em=null}}requestUpdate(t,e,i,s=!1,o){if(t!==void 0){const r=this.constructor;if(s===!1&&(o=this[t]),i??=r.getPropertyOptions(t),!((i.hasChanged??k)(o,e)||i.useDefault&&i.reflect&&o===this._$Ej?.get(t)&&!this.hasAttribute(r._$Eu(t,i))))return;this.C(t,e,i)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,e,{useDefault:i,reflect:s,wrapped:o},r){i&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,r??e??this[t]),o!==!0||r!==void 0)||(this._$AL.has(t)||(this.hasUpdated||i||(e=void 0),this._$AL.set(t,e)),s===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[s,o]of this._$Ep)this[s]=o;this._$Ep=void 0}const i=this.constructor.elementProperties;if(i.size>0)for(const[s,o]of i){const{wrapped:r}=o,l=this[s];r!==!0||this._$AL.has(s)||l===void 0||this.C(s,void 0,o,l)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(i=>i.hostUpdate?.()),this.update(e)):this._$EM()}catch(i){throw t=!1,this._$EM(),i}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(t){}firstUpdated(t){}};b.elementStyles=[],b.shadowRootOptions={mode:"open"},b[P("elementProperties")]=new Map,b[P("finalized")]=new Map,_t?.({ReactiveElement:b}),(H.reactiveElementVersions??=[]).push("2.1.2");const j=globalThis,K=n=>n,O=j.trustedTypes,Q=O?O.createPolicy("lit-html",{createHTML:n=>n}):void 0,X="$lit$",g=`lit$${Math.random().toFixed(9).slice(2)}$`,Y="?"+g,yt=`<${Y}>`,y=document,w=()=>y.createComment(""),I=n=>n===null||typeof n!="object"&&typeof n!="function",z=Array.isArray,Et=n=>z(n)||typeof n?.[Symbol.iterator]=="function",V=`[ 	
\f\r]`,C=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,tt=/-->/g,et=/>/g,E=RegExp(`>|${V}(?:([^\\s"'>=/]+)(${V}*=${V}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),it=/'/g,st=/"/g,nt=/^(?:script|style|textarea|title)$/i,vt=n=>(t,...e)=>({_$litType$:n,strings:t,values:e}),ot=vt(1),A=Symbol.for("lit-noChange"),p=Symbol.for("lit-nothing"),rt=new WeakMap,v=y.createTreeWalker(y,129);function at(n,t){if(!z(n)||!n.hasOwnProperty("raw"))throw Error("invalid template strings array");return Q!==void 0?Q.createHTML(t):t}const bt=(n,t)=>{const e=n.length-1,i=[];let s,o=t===2?"<svg>":t===3?"<math>":"",r=C;for(let l=0;l<e;l++){const a=n[l];let $,m,d=-1,f=0;for(;f<a.length&&(r.lastIndex=f,m=r.exec(a),m!==null);)f=r.lastIndex,r===C?m[1]==="!--"?r=tt:m[1]!==void 0?r=et:m[2]!==void 0?(nt.test(m[2])&&(s=RegExp("</"+m[2],"g")),r=E):m[3]!==void 0&&(r=E):r===E?m[0]===">"?(r=s??C,d=-1):m[1]===void 0?d=-2:(d=r.lastIndex-m[2].length,$=m[1],r=m[3]===void 0?E:m[3]==='"'?st:it):r===st||r===it?r=E:r===tt||r===et?r=C:(r=E,s=void 0);const _=r===E&&n[l+1].startsWith("/>")?" ":"";o+=r===C?a+yt:d>=0?(i.push($),a.slice(0,d)+X+a.slice(d)+g+_):a+g+(d===-2?l:_)}return[at(n,o+(n[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),i]};class T{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let o=0,r=0;const l=t.length-1,a=this.parts,[$,m]=bt(t,e);if(this.el=T.createElement($,i),v.currentNode=this.el.content,e===2||e===3){const d=this.el.content.firstChild;d.replaceWith(...d.childNodes)}for(;(s=v.nextNode())!==null&&a.length<l;){if(s.nodeType===1){if(s.hasAttributes())for(const d of s.getAttributeNames())if(d.endsWith(X)){const f=m[r++],_=s.getAttribute(d).split(g),M=/([.?@])?(.*)/.exec(f);a.push({type:1,index:o,name:M[2],strings:_,ctor:M[1]==="."?St:M[1]==="?"?Pt:M[1]==="@"?wt:U}),s.removeAttribute(d)}else d.startsWith(g)&&(a.push({type:6,index:o}),s.removeAttribute(d));if(nt.test(s.tagName)){const d=s.textContent.split(g),f=d.length-1;if(f>0){s.textContent=O?O.emptyScript:"";for(let _=0;_<f;_++)s.append(d[_],w()),v.nextNode(),a.push({type:2,index:++o});s.append(d[f],w())}}}else if(s.nodeType===8)if(s.data===Y)a.push({type:2,index:o});else{let d=-1;for(;(d=s.data.indexOf(g,d+1))!==-1;)a.push({type:7,index:o}),d+=g.length-1}o++}}static createElement(t,e){const i=y.createElement("template");return i.innerHTML=t,i}}function S(n,t,e=n,i){if(t===A)return t;let s=i!==void 0?e._$Co?.[i]:e._$Cl;const o=I(t)?void 0:t._$litDirective$;return s?.constructor!==o&&(s?._$AO?.(!1),o===void 0?s=void 0:(s=new o(n),s._$AT(n,e,i)),i!==void 0?(e._$Co??=[])[i]=s:e._$Cl=s),s!==void 0&&(t=S(n,s._$AS(n,t.values),s,i)),t}class At{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,s=(t?.creationScope??y).importNode(e,!0);v.currentNode=s;let o=v.nextNode(),r=0,l=0,a=i[0];for(;a!==void 0;){if(r===a.index){let $;a.type===2?$=new x(o,o.nextSibling,this,t):a.type===1?$=new a.ctor(o,a.name,a.strings,this,t):a.type===6&&($=new It(o,this,t)),this._$AV.push($),a=i[++l]}r!==a?.index&&(o=v.nextNode(),r++)}return v.currentNode=y,s}p(t){let e=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class x{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,s){this.type=2,this._$AH=p,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=S(this,t,e),I(t)?t===p||t==null||t===""?(this._$AH!==p&&this._$AR(),this._$AH=p):t!==this._$AH&&t!==A&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Et(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==p&&I(this._$AH)?this._$AA.nextSibling.data=t:this.T(y.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:i}=t,s=typeof i=="number"?this._$AC(t):(i.el===void 0&&(i.el=T.createElement(at(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===s)this._$AH.p(e);else{const o=new At(s,this),r=o.u(this.options);o.p(e),this.T(r),this._$AH=o}}_$AC(t){let e=rt.get(t.strings);return e===void 0&&rt.set(t.strings,e=new T(t)),e}k(t){z(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const o of t)s===e.length?e.push(i=new x(this.O(w()),this.O(w()),this,this.options)):i=e[s],i._$AI(o),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const i=K(t).nextSibling;K(t).remove(),t=i}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}}class U{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,s,o){this.type=1,this._$AH=p,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=o,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=p}_$AI(t,e=this,i,s){const o=this.strings;let r=!1;if(o===void 0)t=S(this,t,e,0),r=!I(t)||t!==this._$AH&&t!==A,r&&(this._$AH=t);else{const l=t;let a,$;for(t=o[0],a=0;a<o.length-1;a++)$=S(this,l[i+a],e,a),$===A&&($=this._$AH[a]),r||=!I($)||$!==this._$AH[a],$===p?t=p:t!==p&&(t+=($??"")+o[a+1]),this._$AH[a]=$}r&&!s&&this.j(t)}j(t){t===p?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class St extends U{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===p?void 0:t}}class Pt extends U{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==p)}}class wt extends U{constructor(t,e,i,s,o){super(t,e,i,s,o),this.type=5}_$AI(t,e=this){if((t=S(this,t,e,0)??p)===A)return;const i=this._$AH,s=t===p&&i!==p||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,o=t!==p&&(i===p||s);s&&this.element.removeEventListener(this.name,this,i),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class It{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){S(this,t)}}const Ct=j.litHtmlPolyfillSupport;Ct?.(T,x),(j.litHtmlVersions??=[]).push("3.3.2");const Tt=(n,t,e)=>{const i=e?.renderBefore??t;let s=i._$litPart$;if(s===void 0){const o=e?.renderBefore??null;i._$litPart$=s=new x(t.insertBefore(w(),o),o,void 0,e??{})}return s._$AI(n),s};const B=globalThis;class R extends b{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Tt(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return A}}R._$litElement$=!0,R.finalized=!0,B.litElementHydrateSupport?.({LitElement:R});const xt=B.litElementPolyfillSupport;xt?.({LitElement:R}),(B.litElementVersions??=[]).push("4.2.2");const Rt=n=>(t,e)=>{e!==void 0?e.addInitializer(()=>{customElements.define(n,t)}):customElements.define(n,t)};const Lt={attribute:!0,type:String,converter:N,reflect:!1,hasChanged:k},Ht=(n=Lt,t,e)=>{const{kind:i,metadata:s}=e;let o=globalThis.litPropertyMetadata.get(s);if(o===void 0&&globalThis.litPropertyMetadata.set(s,o=new Map),i==="setter"&&((n=Object.create(n)).wrapped=!0),o.set(e.name,n),i==="accessor"){const{name:r}=e;return{set(l){const a=t.get.call(this);t.set.call(this,l),this.requestUpdate(r,a,n,!0,l)},init(l){return l!==void 0&&this.C(r,void 0,n,l),l}}}if(i==="setter"){const{name:r}=e;return function(l){const a=this[r];t.call(this,l),this.requestUpdate(r,a,n,!0,l)}}throw Error("Unsupported decorator location: "+i)};function Nt(n){return(t,e)=>typeof e=="object"?Ht(n,t,e):((i,s,o)=>{const r=s.hasOwnProperty(o);return s.constructor.createProperty(o,i),r?Object.getOwnPropertyDescriptor(s,o):void 0})(n,t,e)}function u(n){return Nt({...n,state:!0,attribute:!1})}var Ot=Object.defineProperty,Ut=Object.getOwnPropertyDescriptor,c=(n,t,e,i)=>{for(var s=i>1?void 0:i?Ut(t,e):t,o=n.length-1,r;o>=0;o--)(r=n[o])&&(s=(i?r(t,e,s):r(s))||s);return i&&s&&Ot(t,e,s),s};return h.LoanWidget=class extends R{constructor(){super(...arguments),this.loanList=[],this.isFormHidden=!0,this.isEditFormHidden=!0,this.loanID="",this.loanName="",this.loanEmail="",this.loanStatus="",this.loanPrincipal="",this.loanIntrestRate="",this.loanTerm="",this.loanIDValue="",this.loanEditName="",this.loanEditEmail="",this.loanEditStatus="",this.loanEditPrincipal="",this.loanEditIntrestRate="",this.loanEditTerm=""}connectedCallback(){super.connectedCallback(),this._timerInterval=setInterval(()=>{this.isFormHidden=!0,this.isEditFormHidden=!0,this.getLoans()},6e4)}disconnectedCallback(){super.disconnectedCallback(),this._timerInterval&&clearInterval(this._timerInterval)}editLoan(t){this.loanIDValue=t.target.value;const e=this.loanList.find(i=>i._id===this.loanIDValue);e&&(this.loanName=e.name||"",this.loanEmail=e.email||"",this.loanStatus=e.status||"",this.loanPrincipal=e.principal||"",this.loanIntrestRate=e.interestRate||"",this.loanTerm=e.loanTerm||""),console.log("Editing order ID:",this.loanIDValue),this.isFormHidden=!1}handleNameInput(t){this.loanEditName=t.target.value}handleEmailInput(t){this.loanEditEmail=t.target.value}handleStatusInput(t){this.loanEditStatus=t.target.value}handlePrincipalInput(t){this.loanEditPrincipal=t.target.value}handleInterestRateInput(t){this.loanEditIntrestRate=t.target.value}handleTermInput(t){this.loanEditTerm=t.target.value}async submitEdit(t){t.preventDefault(),this.loanEditName||(this.loanEditName=this.loanName),this.loanEditEmail||(this.loanEditEmail=this.loanEmail),this.loanEditStatus||(this.loanEditStatus=this.loanStatus),this.loanEditPrincipal||(this.loanEditPrincipal=this.loanPrincipal),this.loanEditIntrestRate||(this.loanEditIntrestRate=this.loanIntrestRate),this.loanEditTerm||(this.loanEditTerm=this.loanTerm),console.log(`The values are name = ${this.loanEditName} email = ${this.loanEditEmail} status= ${this.loanEditStatus} prin = ${this.loanEditPrincipal} Rate = ${this.loanEditIntrestRate} term= ${this.loanEditTerm}`);const e=new Headers;e.append("Content-Type","application/json");const i=JSON.stringify({ID:`${this.loanIDValue}`,name:`${this.loanEditName}`,email:`${this.loanEditEmail}`,status:`${this.loanEditStatus}`,Principal:`${this.loanEditPrincipal}`,InterestRate:`${this.loanEditIntrestRate}`,loanTerm:`${this.loanEditTerm}`}),s={method:"post",headers:e,body:i,redirect:"follow"};try{const r=await(await fetch("https://loanadminweb-448885887334.us-central1.run.app/loan-submit2",s)).json();console.log(r),this.isEditFormHidden=!1,this.loanEditName="",this.loanEditEmail="",this.loanEditStatus="",this.loanEditPrincipal="",this.loanEditIntrestRate="",this.loanEditTerm=""}catch(o){console.error(o)}}async cancelEdit(){this.isFormHidden=!0}async getLoans(){const e={method:"GET",headers:new Headers,redirect:"follow"};try{const s=await(await fetch("https://loanadminweb-448885887334.us-central1.run.app/loans-api",e)).json();console.log(s),console.log(s.loanResult),this.loanList=s.loanResult}catch(i){console.error(i)}}render(){return ot`
        
          <div class=${this.isFormHidden?"hidden":"edit-form"}>
      <h2 class="title">Edit Loan</h2>
      <form @submit=${this.submitEdit}>
        <label>ID (cannot be edited)</label>
        <input type="text"  .value=${this.loanIDValue}  readonly style="color: rgba(0, 0, 255, .5); background: #eee;">
        <label>Name:</label>
        <input type="text"    .value=${this.loanName} @input=${this.handleNameInput}>
        <label>Email:</label>
        <input type="text"    .value=${this.loanEmail} @input=${this.handleEmailInput}>
        <label>status:</label>
        <select type="text"  value=${this.loanStatus} @input=${this.handleStatusInput}>
         <option value=${this.loanStatus}>  ${this.loanStatus}  </option>
               <option value="Processing">  Processing  </option>
               <option value="Under Review">  Under Review  </option>
               <option value="Approved">  Approved  </option>
        </select>
        <label>Principal:</label>
        <input type="text"    .value=${this.loanPrincipal} @input=${this.handlePrincipalInput}>
        <label>Interest Rate:</label>
        <input type="text"    .value=${this.loanIntrestRate} @input=${this.handleInterestRateInput}>
        <label>Loan Term:</label>
        <input type="text"    .value=${this.loanTerm} @input=${this.handleTermInput}>
         
        

        <div class="form-buttons">
          <button type="submit">Save Changes</button>
          <button type="button" @click=${this.cancelEdit}>Cancel</button>
        </div>
      </form> 
        <div class=${this.isEditFormHidden?"hidden":"edit-form"}>
             <h2 class="editOrDelete"> Order Edit Successful!</h2>
        </div>
    </div>

        
        
         <button  @click=${this.getLoans}>Get Loans</button>
        <table>
            <thead>
                 <th>ID</th>
                <th>Name</th>
                <th>Phone #</th>
                <th>Email</th>
                <th>Status</th>
                <th>Loan Type</th>
                <th>Principal</th>
                <th>Interest</th>
                <th>Loan Term</th>
                <th>Monthly Payment</th>
                <th>Total Interest Paid</th>
                <th>Total Amount Paid</th>
                <th>EDIT</th>
            </thead>
                ${this.loanList.map(t=>ot`
            <tbody>
                    <td>${t._id}</td>
                    <td> ${t.name}</td>
                     <td>${t.phoneNumber}</td>
                    <td>${t.email}</td>
                    <td>${t.status}</td>
                    <td> ${t.loanType}</td>
                    <td> ${t.principal} </td>
                    <td> ${t.interestRate} </td>
                    <td> ${t.loanTerm}</td>
                    <td> ${t.MonthlyPayment}</td>
                    <td> ${t.totalInterest}</td>
                    <td> ${t.totalAmountPaid} </td>

                    <td> <button value=${t._id} @click=${this.editLoan} >Edit</button></td>

           </tbody>`)}  
        </table>
        
        
        `}},h.LoanWidget.styles=[ht`
            :host {
              display: flex;
      flex-direction: column;
      border: solid 3px var(--md-primary-text-color);
      padding: 2em;
      color: var(--md-primary-text-color);  
            }


           .title {
      text-align: center;
    }
    table {
      display: table;
      border-collapse: collapse;
      border-spacing: 1vw;
      margin-top: 15px;
    }
    tr, th, td {
      border: solid 1px;
      text-align: center;
      padding: 5px;
    }
    .hidden {
      display: none;
    }
    .error {
      color: red;
      text-align: center;
      padding: 10px;
    }
    .success {
      color: green;
      text-align: center;
      padding: 10px;
    }
    .no-orders {
      text-align: center;
      padding: 20px;
      color: #666;
    }
    .edit-form {
      background: #f5f5f5;
      padding: 15px;
      border-radius: 8px;
      margin-bottom: 15px;
    }
    .edit-form label {
      display: block;
      margin-top: 10px;
    }
    .edit-form input[type="text"] {
      width: 100%;
      padding: 8px;
      margin-top: 5px;
      box-sizing: border-box;
    }
    .form-buttons {
      margin-top: 15px;
      display: flex;
      gap: 10px;
    }
    button {
      padding: 5px 10px;
      cursor: pointer;
    }

    .editOrDelete  {
      color: green
    }


        `],c([u()],h.LoanWidget.prototype,"loanList",2),c([u()],h.LoanWidget.prototype,"isFormHidden",2),c([u()],h.LoanWidget.prototype,"isEditFormHidden",2),c([u()],h.LoanWidget.prototype,"loanID",2),c([u()],h.LoanWidget.prototype,"loanName",2),c([u()],h.LoanWidget.prototype,"loanEmail",2),c([u()],h.LoanWidget.prototype,"loanStatus",2),c([u()],h.LoanWidget.prototype,"loanPrincipal",2),c([u()],h.LoanWidget.prototype,"loanIntrestRate",2),c([u()],h.LoanWidget.prototype,"loanTerm",2),c([u()],h.LoanWidget.prototype,"loanIDValue",2),c([u()],h.LoanWidget.prototype,"_timerInterval",2),c([u()],h.LoanWidget.prototype,"loanEditName",2),c([u()],h.LoanWidget.prototype,"loanEditEmail",2),c([u()],h.LoanWidget.prototype,"loanEditStatus",2),c([u()],h.LoanWidget.prototype,"loanEditPrincipal",2),c([u()],h.LoanWidget.prototype,"loanEditIntrestRate",2),c([u()],h.LoanWidget.prototype,"loanEditTerm",2),h.LoanWidget=c([Rt("loan-widget")],h.LoanWidget),Object.defineProperty(h,Symbol.toStringTag,{value:"Module"}),h})({});
