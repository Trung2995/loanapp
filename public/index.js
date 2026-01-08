(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function e(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(i){if(i.ep)return;i.ep=!0;const o=e(i);fetch(i.href,o)}})();const R=globalThis,j=R.ShadowRoot&&(R.ShadyCSS===void 0||R.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,k=Symbol(),q=new WeakMap;let it=class{constructor(t,e,s){if(this._$cssResult$=!0,s!==k)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(j&&t===void 0){const s=e!==void 0&&e.length===1;s&&(t=q.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&q.set(e,t))}return t}toString(){return this.cssText}};const lt=n=>new it(typeof n=="string"?n:n+"",void 0,k),ht=(n,...t)=>{const e=n.length===1?n[0]:t.reduce((s,i,o)=>s+(r=>{if(r._$cssResult$===!0)return r.cssText;if(typeof r=="number")return r;throw Error("Value passed to 'css' function must be a 'css' function result: "+r+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+n[o+1],n[0]);return new it(e,n,k)},dt=(n,t)=>{if(j)n.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const e of t){const s=document.createElement("style"),i=R.litNonce;i!==void 0&&s.setAttribute("nonce",i),s.textContent=e.cssText,n.appendChild(s)}},W=j?n=>n:n=>n instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return lt(e)})(n):n;const{is:ct,defineProperty:pt,getOwnPropertyDescriptor:ut,getOwnPropertyNames:$t,getOwnPropertySymbols:mt,getPrototypeOf:ft}=Object,M=globalThis,J=M.trustedTypes,yt=J?J.emptyScript:"",_t=M.reactiveElementPolyfillSupport,w=(n,t)=>n,H={toAttribute(n,t){switch(t){case Boolean:n=n?yt:null;break;case Object:case Array:n=n==null?n:JSON.stringify(n)}return n},fromAttribute(n,t){let e=n;switch(t){case Boolean:e=n!==null;break;case Number:e=n===null?null:Number(n);break;case Object:case Array:try{e=JSON.parse(n)}catch{e=null}}return e}},z=(n,t)=>!ct(n,t),K={attribute:!0,type:String,converter:H,reflect:!1,useDefault:!1,hasChanged:z};Symbol.metadata??=Symbol("metadata"),M.litPropertyMetadata??=new WeakMap;let b=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=K){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const s=Symbol(),i=this.getPropertyDescriptor(t,s,e);i!==void 0&&pt(this.prototype,t,i)}}static getPropertyDescriptor(t,e,s){const{get:i,set:o}=ut(this.prototype,t)??{get(){return this[e]},set(r){this[e]=r}};return{get:i,set(r){const l=i?.call(this);o?.call(this,r),this.requestUpdate(t,l,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??K}static _$Ei(){if(this.hasOwnProperty(w("elementProperties")))return;const t=ft(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(w("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(w("properties"))){const e=this.properties,s=[...$t(e),...mt(e)];for(const i of s)this.createProperty(i,e[i])}const t=this[Symbol.metadata];if(t!==null){const e=litPropertyMetadata.get(t);if(e!==void 0)for(const[s,i]of e)this.elementProperties.set(s,i)}this._$Eh=new Map;for(const[e,s]of this.elementProperties){const i=this._$Eu(e,s);i!==void 0&&this._$Eh.set(i,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const i of s)e.unshift(W(i))}else t!==void 0&&e.push(W(t));return e}static _$Eu(t,e){const s=e.attribute;return s===!1?void 0:typeof s=="string"?s:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const s of e.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return dt(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$ET(t,e){const s=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,s);if(i!==void 0&&s.reflect===!0){const o=(s.converter?.toAttribute!==void 0?s.converter:H).toAttribute(e,s.type);this._$Em=t,o==null?this.removeAttribute(i):this.setAttribute(i,o),this._$Em=null}}_$AK(t,e){const s=this.constructor,i=s._$Eh.get(t);if(i!==void 0&&this._$Em!==i){const o=s.getPropertyOptions(i),r=typeof o.converter=="function"?{fromAttribute:o.converter}:o.converter?.fromAttribute!==void 0?o.converter:H;this._$Em=i;const l=r.fromAttribute(e,o.type);this[i]=l??this._$Ej?.get(i)??l,this._$Em=null}}requestUpdate(t,e,s,i=!1,o){if(t!==void 0){const r=this.constructor;if(i===!1&&(o=this[t]),s??=r.getPropertyOptions(t),!((s.hasChanged??z)(o,e)||s.useDefault&&s.reflect&&o===this._$Ej?.get(t)&&!this.hasAttribute(r._$Eu(t,s))))return;this.C(t,e,s)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,e,{useDefault:s,reflect:i,wrapped:o},r){s&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,r??e??this[t]),o!==!0||r!==void 0)||(this._$AL.has(t)||(this.hasUpdated||s||(e=void 0),this._$AL.set(t,e)),i===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[i,o]of this._$Ep)this[i]=o;this._$Ep=void 0}const s=this.constructor.elementProperties;if(s.size>0)for(const[i,o]of s){const{wrapped:r}=o,l=this[i];r!==!0||this._$AL.has(i)||l===void 0||this.C(i,void 0,o,l)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(s=>s.hostUpdate?.()),this.update(e)):this._$EM()}catch(s){throw t=!1,this._$EM(),s}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(t){}firstUpdated(t){}};b.elementStyles=[],b.shadowRootOptions={mode:"open"},b[w("elementProperties")]=new Map,b[w("finalized")]=new Map,_t?.({ReactiveElement:b}),(M.reactiveElementVersions??=[]).push("2.1.2");const V=globalThis,Z=n=>n,U=V.trustedTypes,G=U?U.createPolicy("lit-html",{createHTML:n=>n}):void 0,nt="$lit$",_=`lit$${Math.random().toFixed(9).slice(2)}$`,ot="?"+_,gt=`<${ot}>`,v=document,I=()=>v.createComment(""),C=n=>n===null||typeof n!="object"&&typeof n!="function",B=Array.isArray,Et=n=>B(n)||typeof n?.[Symbol.iterator]=="function",L=`[ 	
\f\r]`,P=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Q=/-->/g,X=/>/g,g=RegExp(`>|${L}(?:([^\\s"'>=/]+)(${L}*=${L}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Y=/'/g,tt=/"/g,rt=/^(?:script|style|textarea|title)$/i,vt=n=>(t,...e)=>({_$litType$:n,strings:t,values:e}),et=vt(1),A=Symbol.for("lit-noChange"),u=Symbol.for("lit-nothing"),st=new WeakMap,E=v.createTreeWalker(v,129);function at(n,t){if(!B(n)||!n.hasOwnProperty("raw"))throw Error("invalid template strings array");return G!==void 0?G.createHTML(t):t}const bt=(n,t)=>{const e=n.length-1,s=[];let i,o=t===2?"<svg>":t===3?"<math>":"",r=P;for(let l=0;l<e;l++){const a=n[l];let p,m,h=-1,f=0;for(;f<a.length&&(r.lastIndex=f,m=r.exec(a),m!==null);)f=r.lastIndex,r===P?m[1]==="!--"?r=Q:m[1]!==void 0?r=X:m[2]!==void 0?(rt.test(m[2])&&(i=RegExp("</"+m[2],"g")),r=g):m[3]!==void 0&&(r=g):r===g?m[0]===">"?(r=i??P,h=-1):m[1]===void 0?h=-2:(h=r.lastIndex-m[2].length,p=m[1],r=m[3]===void 0?g:m[3]==='"'?tt:Y):r===tt||r===Y?r=g:r===Q||r===X?r=P:(r=g,i=void 0);const y=r===g&&n[l+1].startsWith("/>")?" ":"";o+=r===P?a+gt:h>=0?(s.push(p),a.slice(0,h)+nt+a.slice(h)+_+y):a+_+(h===-2?l:y)}return[at(n,o+(n[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),s]};class T{constructor({strings:t,_$litType$:e},s){let i;this.parts=[];let o=0,r=0;const l=t.length-1,a=this.parts,[p,m]=bt(t,e);if(this.el=T.createElement(p,s),E.currentNode=this.el.content,e===2||e===3){const h=this.el.content.firstChild;h.replaceWith(...h.childNodes)}for(;(i=E.nextNode())!==null&&a.length<l;){if(i.nodeType===1){if(i.hasAttributes())for(const h of i.getAttributeNames())if(h.endsWith(nt)){const f=m[r++],y=i.getAttribute(h).split(_),N=/([.?@])?(.*)/.exec(f);a.push({type:1,index:o,name:N[2],strings:y,ctor:N[1]==="."?St:N[1]==="?"?Pt:N[1]==="@"?wt:D}),i.removeAttribute(h)}else h.startsWith(_)&&(a.push({type:6,index:o}),i.removeAttribute(h));if(rt.test(i.tagName)){const h=i.textContent.split(_),f=h.length-1;if(f>0){i.textContent=U?U.emptyScript:"";for(let y=0;y<f;y++)i.append(h[y],I()),E.nextNode(),a.push({type:2,index:++o});i.append(h[f],I())}}}else if(i.nodeType===8)if(i.data===ot)a.push({type:2,index:o});else{let h=-1;for(;(h=i.data.indexOf(_,h+1))!==-1;)a.push({type:7,index:o}),h+=_.length-1}o++}}static createElement(t,e){const s=v.createElement("template");return s.innerHTML=t,s}}function S(n,t,e=n,s){if(t===A)return t;let i=s!==void 0?e._$Co?.[s]:e._$Cl;const o=C(t)?void 0:t._$litDirective$;return i?.constructor!==o&&(i?._$AO?.(!1),o===void 0?i=void 0:(i=new o(n),i._$AT(n,e,s)),s!==void 0?(e._$Co??=[])[s]=i:e._$Cl=i),i!==void 0&&(t=S(n,i._$AS(n,t.values),i,s)),t}class At{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:s}=this._$AD,i=(t?.creationScope??v).importNode(e,!0);E.currentNode=i;let o=E.nextNode(),r=0,l=0,a=s[0];for(;a!==void 0;){if(r===a.index){let p;a.type===2?p=new O(o,o.nextSibling,this,t):a.type===1?p=new a.ctor(o,a.name,a.strings,this,t):a.type===6&&(p=new xt(o,this,t)),this._$AV.push(p),a=s[++l]}r!==a?.index&&(o=E.nextNode(),r++)}return E.currentNode=v,i}p(t){let e=0;for(const s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}}class O{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,s,i){this.type=2,this._$AH=u,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=S(this,t,e),C(t)?t===u||t==null||t===""?(this._$AH!==u&&this._$AR(),this._$AH=u):t!==this._$AH&&t!==A&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Et(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==u&&C(this._$AH)?this._$AA.nextSibling.data=t:this.T(v.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:s}=t,i=typeof s=="number"?this._$AC(t):(s.el===void 0&&(s.el=T.createElement(at(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===i)this._$AH.p(e);else{const o=new At(i,this),r=o.u(this.options);o.p(e),this.T(r),this._$AH=o}}_$AC(t){let e=st.get(t.strings);return e===void 0&&st.set(t.strings,e=new T(t)),e}k(t){B(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let s,i=0;for(const o of t)i===e.length?e.push(s=new O(this.O(I()),this.O(I()),this,this.options)):s=e[i],s._$AI(o),i++;i<e.length&&(this._$AR(s&&s._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const s=Z(t).nextSibling;Z(t).remove(),t=s}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}}class D{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,s,i,o){this.type=1,this._$AH=u,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=o,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=u}_$AI(t,e=this,s,i){const o=this.strings;let r=!1;if(o===void 0)t=S(this,t,e,0),r=!C(t)||t!==this._$AH&&t!==A,r&&(this._$AH=t);else{const l=t;let a,p;for(t=o[0],a=0;a<o.length-1;a++)p=S(this,l[s+a],e,a),p===A&&(p=this._$AH[a]),r||=!C(p)||p!==this._$AH[a],p===u?t=u:t!==u&&(t+=(p??"")+o[a+1]),this._$AH[a]=p}r&&!i&&this.j(t)}j(t){t===u?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class St extends D{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===u?void 0:t}}class Pt extends D{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==u)}}class wt extends D{constructor(t,e,s,i,o){super(t,e,s,i,o),this.type=5}_$AI(t,e=this){if((t=S(this,t,e,0)??u)===A)return;const s=this._$AH,i=t===u&&s!==u||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,o=t!==u&&(s===u||i);i&&this.element.removeEventListener(this.name,this,s),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class xt{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){S(this,t)}}const It=V.litHtmlPolyfillSupport;It?.(T,O),(V.litHtmlVersions??=[]).push("3.3.2");const Ct=(n,t,e)=>{const s=e?.renderBefore??t;let i=s._$litPart$;if(i===void 0){const o=e?.renderBefore??null;s._$litPart$=i=new O(t.insertBefore(I(),o),o,void 0,e??{})}return i._$AI(n),i};const F=globalThis;class x extends b{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Ct(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return A}}x._$litElement$=!0,x.finalized=!0,F.litElementHydrateSupport?.({LitElement:x});const Tt=F.litElementPolyfillSupport;Tt?.({LitElement:x});(F.litElementVersions??=[]).push("4.2.2");const Ot=n=>(t,e)=>{e!==void 0?e.addInitializer(()=>{customElements.define(n,t)}):customElements.define(n,t)};const Nt={attribute:!0,type:String,converter:H,reflect:!1,hasChanged:z},Rt=(n=Nt,t,e)=>{const{kind:s,metadata:i}=e;let o=globalThis.litPropertyMetadata.get(i);if(o===void 0&&globalThis.litPropertyMetadata.set(i,o=new Map),s==="setter"&&((n=Object.create(n)).wrapped=!0),o.set(e.name,n),s==="accessor"){const{name:r}=e;return{set(l){const a=t.get.call(this);t.set.call(this,l),this.requestUpdate(r,a,n,!0,l)},init(l){return l!==void 0&&this.C(r,void 0,n,l),l}}}if(s==="setter"){const{name:r}=e;return function(l){const a=this[r];t.call(this,l),this.requestUpdate(r,a,n,!0,l)}}throw Error("Unsupported decorator location: "+s)};function Ht(n){return(t,e)=>typeof e=="object"?Rt(n,t,e):((s,i,o)=>{const r=i.hasOwnProperty(o);return i.constructor.createProperty(o,s),r?Object.getOwnPropertyDescriptor(i,o):void 0})(n,t,e)}function $(n){return Ht({...n,state:!0,attribute:!1})}var Ut=Object.defineProperty,Mt=Object.getOwnPropertyDescriptor,c=(n,t,e,s)=>{for(var i=s>1?void 0:s?Mt(t,e):t,o=n.length-1,r;o>=0;o--)(r=n[o])&&(i=(s?r(t,e,i):r(i))||i);return s&&i&&Ut(t,e,i),i};let d=class extends x{constructor(){super(...arguments),this.loanList=[],this.isFormHidden=!0,this.isEditFormHidden=!0,this.loanID="",this.loanName="",this.loanEmail="",this.loanStatus="",this.loanPrincipal="",this.loanIntrestRate="",this.loanTerm="",this.loanIDValue="",this.loanEditName="",this.loanEditEmail="",this.loanEditStatus="",this.loanEditPrincipal="",this.loanEditIntrestRate="",this.loanEditTerm=""}connectedCallback(){super.connectedCallback(),this._timerInterval=setInterval(()=>{this.isFormHidden=!0,this.isEditFormHidden=!0,this.getLoans()},6e4)}disconnectedCallback(){super.disconnectedCallback(),this._timerInterval&&clearInterval(this._timerInterval)}editLoan(n){this.loanIDValue=n.target.value;const t=this.loanList.find(e=>e._id===this.loanIDValue);t&&(this.loanName=t.name||"",this.loanEmail=t.email||"",this.loanStatus=t.status||"",this.loanPrincipal=t.principal||"",this.loanIntrestRate=t.interestRate||"",this.loanTerm=t.loanTerm||""),console.log("Editing order ID:",this.loanIDValue),this.isFormHidden=!1}handleNameInput(n){this.loanEditName=n.target.value}handleEmailInput(n){this.loanEditEmail=n.target.value}handleStatusInput(n){this.loanEditStatus=n.target.value}handlePrincipalInput(n){this.loanEditPrincipal=n.target.value}handleInterestRateInput(n){this.loanEditIntrestRate=n.target.value}handleTermInput(n){this.loanEditTerm=n.target.value}async submitEdit(n){n.preventDefault(),this.loanEditName||(this.loanEditName=this.loanName),this.loanEditEmail||(this.loanEditEmail=this.loanEmail),this.loanEditStatus||(this.loanEditStatus=this.loanStatus),this.loanEditPrincipal||(this.loanEditPrincipal=this.loanPrincipal),this.loanEditIntrestRate||(this.loanEditIntrestRate=this.loanIntrestRate),this.loanEditTerm||(this.loanEditTerm=this.loanTerm),console.log(`The values are name = ${this.loanEditName} email = ${this.loanEditEmail} status= ${this.loanEditStatus} prin = ${this.loanEditPrincipal} Rate = ${this.loanEditIntrestRate} term= ${this.loanEditTerm}`);const t=new Headers;t.append("Content-Type","application/json");const e=JSON.stringify({ID:`${this.loanIDValue}`,name:`${this.loanEditName}`,email:`${this.loanEditEmail}`,status:`${this.loanEditStatus}`,Principal:`${this.loanEditPrincipal}`,InterestRate:`${this.loanEditIntrestRate}`,loanTerm:`${this.loanEditTerm}`}),s={method:"post",headers:t,body:e,redirect:"follow"};try{const o=await(await fetch("https://loanadminweb-448885887334.us-central1.run.app/loan-submit2",s)).json();console.log(o),this.isEditFormHidden=!1,this.loanEditName="",this.loanEditEmail="",this.loanEditStatus="",this.loanEditPrincipal="",this.loanEditIntrestRate="",this.loanEditTerm=""}catch(i){console.error(i)}}async cancelEdit(){this.isFormHidden=!0}async getLoans(){const t={method:"GET",headers:new Headers,redirect:"follow"};try{const s=await(await fetch("https://loanadminweb-448885887334.us-central1.run.app/loans-api",t)).json();console.log(s),console.log(s.loanResult),this.loanList=s.loanResult}catch(e){console.error(e)}}render(){return et`
        
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
                ${this.loanList.map(n=>et`
            <tbody>
                    <td>${n._id}</td>
                    <td> ${n.name}</td>
                     <td>${n.phoneNumber}</td>
                    <td>${n.email}</td>
                    <td>${n.status}</td>
                    <td> ${n.loanType}</td>
                    <td> ${n.principal} </td>
                    <td> ${n.interestRate} </td>
                    <td> ${n.loanTerm}</td>
                    <td> ${n.MonthlyPayment}</td>
                    <td> ${n.totalInterest}</td>
                    <td> ${n.totalAmountPaid} </td>

                    <td> <button value=${n._id} @click=${this.editLoan} >Edit</button></td>

           </tbody>`)}  
        </table>
        
        
        `}};d.styles=[ht`
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


        `];c([$()],d.prototype,"loanList",2);c([$()],d.prototype,"isFormHidden",2);c([$()],d.prototype,"isEditFormHidden",2);c([$()],d.prototype,"loanID",2);c([$()],d.prototype,"loanName",2);c([$()],d.prototype,"loanEmail",2);c([$()],d.prototype,"loanStatus",2);c([$()],d.prototype,"loanPrincipal",2);c([$()],d.prototype,"loanIntrestRate",2);c([$()],d.prototype,"loanTerm",2);c([$()],d.prototype,"loanIDValue",2);c([$()],d.prototype,"_timerInterval",2);c([$()],d.prototype,"loanEditName",2);c([$()],d.prototype,"loanEditEmail",2);c([$()],d.prototype,"loanEditStatus",2);c([$()],d.prototype,"loanEditPrincipal",2);c([$()],d.prototype,"loanEditIntrestRate",2);c([$()],d.prototype,"loanEditTerm",2);d=c([Ot("loan-widget")],d);
