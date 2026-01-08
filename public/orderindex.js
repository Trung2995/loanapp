(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const n of i)if(n.type==="childList")for(const o of n.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function e(i){const n={};return i.integrity&&(n.integrity=i.integrity),i.referrerPolicy&&(n.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?n.credentials="include":i.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(i){if(i.ep)return;i.ep=!0;const n=e(i);fetch(i.href,n)}})();const U=globalThis,k=U.ShadowRoot&&(U.ShadyCSS===void 0||U.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,L=Symbol(),V=new WeakMap;let st=class{constructor(t,e,s){if(this._$cssResult$=!0,s!==L)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(k&&t===void 0){const s=e!==void 0&&e.length===1;s&&(t=V.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&V.set(e,t))}return t}toString(){return this.cssText}};const at=r=>new st(typeof r=="string"?r:r+"",void 0,L),dt=(r,...t)=>{const e=r.length===1?r[0]:t.reduce(((s,i,n)=>s+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+r[n+1]),r[0]);return new st(e,r,L)},lt=(r,t)=>{if(k)r.adoptedStyleSheets=t.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet));else for(const e of t){const s=document.createElement("style"),i=U.litNonce;i!==void 0&&s.setAttribute("nonce",i),s.textContent=e.cssText,r.appendChild(s)}},W=k?r=>r:r=>r instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return at(e)})(r):r;const{is:ht,defineProperty:ct,getOwnPropertyDescriptor:pt,getOwnPropertyNames:ut,getOwnPropertySymbols:$t,getPrototypeOf:ft}=Object,N=globalThis,J=N.trustedTypes,gt=J?J.emptyScript:"",_t=N.reactiveElementPolyfillSupport,w=(r,t)=>r,T={toAttribute(r,t){switch(t){case Boolean:r=r?gt:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,t){let e=r;switch(t){case Boolean:e=r!==null;break;case Number:e=r===null?null:Number(r);break;case Object:case Array:try{e=JSON.parse(r)}catch{e=null}}return e}},z=(r,t)=>!ht(r,t),K={attribute:!0,type:String,converter:T,reflect:!1,useDefault:!1,hasChanged:z};Symbol.metadata??=Symbol("metadata"),N.litPropertyMetadata??=new WeakMap;let b=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=K){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const s=Symbol(),i=this.getPropertyDescriptor(t,s,e);i!==void 0&&ct(this.prototype,t,i)}}static getPropertyDescriptor(t,e,s){const{get:i,set:n}=pt(this.prototype,t)??{get(){return this[e]},set(o){this[e]=o}};return{get:i,set(o){const d=i?.call(this);n?.call(this,o),this.requestUpdate(t,d,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??K}static _$Ei(){if(this.hasOwnProperty(w("elementProperties")))return;const t=ft(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(w("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(w("properties"))){const e=this.properties,s=[...ut(e),...$t(e)];for(const i of s)this.createProperty(i,e[i])}const t=this[Symbol.metadata];if(t!==null){const e=litPropertyMetadata.get(t);if(e!==void 0)for(const[s,i]of e)this.elementProperties.set(s,i)}this._$Eh=new Map;for(const[e,s]of this.elementProperties){const i=this._$Eu(e,s);i!==void 0&&this._$Eh.set(i,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const i of s)e.unshift(W(i))}else t!==void 0&&e.push(W(t));return e}static _$Eu(t,e){const s=e.attribute;return s===!1?void 0:typeof s=="string"?s:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((t=>t(this)))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const s of e.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return lt(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((t=>t.hostConnected?.()))}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach((t=>t.hostDisconnected?.()))}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$ET(t,e){const s=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,s);if(i!==void 0&&s.reflect===!0){const n=(s.converter?.toAttribute!==void 0?s.converter:T).toAttribute(e,s.type);this._$Em=t,n==null?this.removeAttribute(i):this.setAttribute(i,n),this._$Em=null}}_$AK(t,e){const s=this.constructor,i=s._$Eh.get(t);if(i!==void 0&&this._$Em!==i){const n=s.getPropertyOptions(i),o=typeof n.converter=="function"?{fromAttribute:n.converter}:n.converter?.fromAttribute!==void 0?n.converter:T;this._$Em=i;const d=o.fromAttribute(e,n.type);this[i]=d??this._$Ej?.get(i)??d,this._$Em=null}}requestUpdate(t,e,s){if(t!==void 0){const i=this.constructor,n=this[t];if(s??=i.getPropertyOptions(t),!((s.hasChanged??z)(n,e)||s.useDefault&&s.reflect&&n===this._$Ej?.get(t)&&!this.hasAttribute(i._$Eu(t,s))))return;this.C(t,e,s)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,e,{useDefault:s,reflect:i,wrapped:n},o){s&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,o??e??this[t]),n!==!0||o!==void 0)||(this._$AL.has(t)||(this.hasUpdated||s||(e=void 0),this._$AL.set(t,e)),i===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[i,n]of this._$Ep)this[i]=n;this._$Ep=void 0}const s=this.constructor.elementProperties;if(s.size>0)for(const[i,n]of s){const{wrapped:o}=n,d=this[i];o!==!0||this._$AL.has(i)||d===void 0||this.C(i,void 0,n,d)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach((s=>s.hostUpdate?.())),this.update(e)):this._$EM()}catch(s){throw t=!1,this._$EM(),s}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach((e=>e.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach((e=>this._$ET(e,this[e]))),this._$EM()}updated(t){}firstUpdated(t){}};b.elementStyles=[],b.shadowRootOptions={mode:"open"},b[w("elementProperties")]=new Map,b[w("finalized")]=new Map,_t?.({ReactiveElement:b}),(N.reactiveElementVersions??=[]).push("2.1.1");const B=globalThis,D=B.trustedTypes,G=D?D.createPolicy("lit-html",{createHTML:r=>r}):void 0,it="$lit$",m=`lit$${Math.random().toFixed(9).slice(2)}$`,rt="?"+m,mt=`<${rt}>`,v=document,C=()=>v.createComment(""),P=r=>r===null||typeof r!="object"&&typeof r!="function",q=Array.isArray,yt=r=>q(r)||typeof r?.[Symbol.iterator]=="function",j=`[ 	
\f\r]`,O=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Z=/-->/g,Q=/>/g,y=RegExp(`>|${j}(?:([^\\s"'>=/]+)(${j}*=${j}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),X=/'/g,Y=/"/g,nt=/^(?:script|style|textarea|title)$/i,At=r=>(t,...e)=>({_$litType$:r,strings:t,values:e}),tt=At(1),E=Symbol.for("lit-noChange"),c=Symbol.for("lit-nothing"),et=new WeakMap,A=v.createTreeWalker(v,129);function ot(r,t){if(!q(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return G!==void 0?G.createHTML(t):t}const vt=(r,t)=>{const e=r.length-1,s=[];let i,n=t===2?"<svg>":t===3?"<math>":"",o=O;for(let d=0;d<e;d++){const a=r[d];let h,p,l=-1,g=0;for(;g<a.length&&(o.lastIndex=g,p=o.exec(a),p!==null);)g=o.lastIndex,o===O?p[1]==="!--"?o=Z:p[1]!==void 0?o=Q:p[2]!==void 0?(nt.test(p[2])&&(i=RegExp("</"+p[2],"g")),o=y):p[3]!==void 0&&(o=y):o===y?p[0]===">"?(o=i??O,l=-1):p[1]===void 0?l=-2:(l=o.lastIndex-p[2].length,h=p[1],o=p[3]===void 0?y:p[3]==='"'?Y:X):o===Y||o===X?o=y:o===Z||o===Q?o=O:(o=y,i=void 0);const _=o===y&&r[d+1].startsWith("/>")?" ":"";n+=o===O?a+mt:l>=0?(s.push(h),a.slice(0,l)+it+a.slice(l)+m+_):a+m+(l===-2?d:_)}return[ot(r,n+(r[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),s]};class H{constructor({strings:t,_$litType$:e},s){let i;this.parts=[];let n=0,o=0;const d=t.length-1,a=this.parts,[h,p]=vt(t,e);if(this.el=H.createElement(h,s),A.currentNode=this.el.content,e===2||e===3){const l=this.el.content.firstChild;l.replaceWith(...l.childNodes)}for(;(i=A.nextNode())!==null&&a.length<d;){if(i.nodeType===1){if(i.hasAttributes())for(const l of i.getAttributeNames())if(l.endsWith(it)){const g=p[o++],_=i.getAttribute(l).split(m),I=/([.?@])?(.*)/.exec(g);a.push({type:1,index:n,name:I[2],strings:_,ctor:I[1]==="."?Et:I[1]==="?"?St:I[1]==="@"?Ot:R}),i.removeAttribute(l)}else l.startsWith(m)&&(a.push({type:6,index:n}),i.removeAttribute(l));if(nt.test(i.tagName)){const l=i.textContent.split(m),g=l.length-1;if(g>0){i.textContent=D?D.emptyScript:"";for(let _=0;_<g;_++)i.append(l[_],C()),A.nextNode(),a.push({type:2,index:++n});i.append(l[g],C())}}}else if(i.nodeType===8)if(i.data===rt)a.push({type:2,index:n});else{let l=-1;for(;(l=i.data.indexOf(m,l+1))!==-1;)a.push({type:7,index:n}),l+=m.length-1}n++}}static createElement(t,e){const s=v.createElement("template");return s.innerHTML=t,s}}function S(r,t,e=r,s){if(t===E)return t;let i=s!==void 0?e._$Co?.[s]:e._$Cl;const n=P(t)?void 0:t._$litDirective$;return i?.constructor!==n&&(i?._$AO?.(!1),n===void 0?i=void 0:(i=new n(r),i._$AT(r,e,s)),s!==void 0?(e._$Co??=[])[s]=i:e._$Cl=i),i!==void 0&&(t=S(r,i._$AS(r,t.values),i,s)),t}class bt{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:s}=this._$AD,i=(t?.creationScope??v).importNode(e,!0);A.currentNode=i;let n=A.nextNode(),o=0,d=0,a=s[0];for(;a!==void 0;){if(o===a.index){let h;a.type===2?h=new M(n,n.nextSibling,this,t):a.type===1?h=new a.ctor(n,a.name,a.strings,this,t):a.type===6&&(h=new wt(n,this,t)),this._$AV.push(h),a=s[++d]}o!==a?.index&&(n=A.nextNode(),o++)}return A.currentNode=v,i}p(t){let e=0;for(const s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}}class M{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,s,i){this.type=2,this._$AH=c,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=S(this,t,e),P(t)?t===c||t==null||t===""?(this._$AH!==c&&this._$AR(),this._$AH=c):t!==this._$AH&&t!==E&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):yt(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==c&&P(this._$AH)?this._$AA.nextSibling.data=t:this.T(v.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:s}=t,i=typeof s=="number"?this._$AC(t):(s.el===void 0&&(s.el=H.createElement(ot(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===i)this._$AH.p(e);else{const n=new bt(i,this),o=n.u(this.options);n.p(e),this.T(o),this._$AH=n}}_$AC(t){let e=et.get(t.strings);return e===void 0&&et.set(t.strings,e=new H(t)),e}k(t){q(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let s,i=0;for(const n of t)i===e.length?e.push(s=new M(this.O(C()),this.O(C()),this,this.options)):s=e[i],s._$AI(n),i++;i<e.length&&(this._$AR(s&&s._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const s=t.nextSibling;t.remove(),t=s}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}}class R{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,s,i,n){this.type=1,this._$AH=c,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=n,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=c}_$AI(t,e=this,s,i){const n=this.strings;let o=!1;if(n===void 0)t=S(this,t,e,0),o=!P(t)||t!==this._$AH&&t!==E,o&&(this._$AH=t);else{const d=t;let a,h;for(t=n[0],a=0;a<n.length-1;a++)h=S(this,d[s+a],e,a),h===E&&(h=this._$AH[a]),o||=!P(h)||h!==this._$AH[a],h===c?t=c:t!==c&&(t+=(h??"")+n[a+1]),this._$AH[a]=h}o&&!i&&this.j(t)}j(t){t===c?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Et extends R{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===c?void 0:t}}class St extends R{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==c)}}class Ot extends R{constructor(t,e,s,i,n){super(t,e,s,i,n),this.type=5}_$AI(t,e=this){if((t=S(this,t,e,0)??c)===E)return;const s=this._$AH,i=t===c&&s!==c||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,n=t!==c&&(s===c||i);i&&this.element.removeEventListener(this.name,this,s),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class wt{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){S(this,t)}}const xt=B.litHtmlPolyfillSupport;xt?.(H,M),(B.litHtmlVersions??=[]).push("3.3.1");const Ct=(r,t,e)=>{const s=e?.renderBefore??t;let i=s._$litPart$;if(i===void 0){const n=e?.renderBefore??null;s._$litPart$=i=new M(t.insertBefore(C(),n),n,void 0,e??{})}return i._$AI(r),i};const F=globalThis;class x extends b{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Ct(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return E}}x._$litElement$=!0,x.finalized=!0,F.litElementHydrateSupport?.({LitElement:x});const Pt=F.litElementPolyfillSupport;Pt?.({LitElement:x});(F.litElementVersions??=[]).push("4.2.1");const Ht=r=>(t,e)=>{e!==void 0?e.addInitializer((()=>{customElements.define(r,t)})):customElements.define(r,t)};const Mt={attribute:!0,type:String,converter:T,reflect:!1,hasChanged:z},It=(r=Mt,t,e)=>{const{kind:s,metadata:i}=e;let n=globalThis.litPropertyMetadata.get(i);if(n===void 0&&globalThis.litPropertyMetadata.set(i,n=new Map),s==="setter"&&((r=Object.create(r)).wrapped=!0),n.set(e.name,r),s==="accessor"){const{name:o}=e;return{set(d){const a=t.get.call(this);t.set.call(this,d),this.requestUpdate(o,a,r)},init(d){return d!==void 0&&this.C(o,void 0,r,d),d}}}if(s==="setter"){const{name:o}=e;return function(d){const a=this[o];t.call(this,d),this.requestUpdate(o,a,r)}}throw Error("Unsupported decorator location: "+s)};function Ut(r){return(t,e)=>typeof e=="object"?It(r,t,e):((s,i,n)=>{const o=i.hasOwnProperty(n);return i.constructor.createProperty(n,s),o?Object.getOwnPropertyDescriptor(i,n):void 0})(r,t,e)}function f(r){return Ut({...r,state:!0,attribute:!1})}var Tt=Object.defineProperty,Dt=Object.getOwnPropertyDescriptor,$=(r,t,e,s)=>{for(var i=s>1?void 0:s?Dt(t,e):t,n=r.length-1,o;n>=0;n--)(o=r[n])&&(i=(s?o(t,e,i):o(i))||i);return s&&i&&Tt(t,e,i),i};let u=class extends x{constructor(){super(...arguments),this.orderlist=[],this.isFormHidden=!0,this.editOrderHidden=!0,this.deleteOrderHidden=!0,this.errorMessage="",this.successMessage="",this.deleteItem="",this.agentEditID="",this.agentEditModel="",this.agentEditStatus="",this.agentEditAddress=""}cancelEdit(){this.isFormHidden=!0,this.agentEditID="",this.agentEditModel="",this.agentEditStatus="",this.agentEditAddress=""}handleModelInput(r){this.agentEditModel=r.target.value}handleStatusInput(r){this.agentEditStatus=r.target.value}handleAddressInput(r){this.agentEditAddress=r.target.value}handleAgentEditInput(r){this.agentEditID=r.target.value}agentEditOrder(r){this.agentEditID=r.target.value;const t=this.orderlist.find(e=>e._id===this.agentEditID);t&&(this.agentEditModel=t.model||"",this.agentEditStatus=t.status||"",this.agentEditAddress=t.address||""),console.log("Editing order ID:",this.agentEditID),this.isFormHidden=!1}async agentSendOrderEdit(r){r.preventDefault(),console.log("hi and you got to the edit API ");const t=new Headers;t.append("Content-Type","application/json");const e=JSON.stringify({agentOrderID:`${this.agentEditID}`,agentOrderModel:`${this.agentEditModel}`,agentOrderStatus:`${this.agentEditStatus}`,address:`${this.agentEditAddress}`}),s={method:"POST",headers:t,body:e,redirect:"follow"};try{const n=await(await fetch("https://agentorder-388308187768.us-central1.run.app/agentedit",s)).json();console.log(n),this.editOrderHidden=!1,setTimeout(()=>{this.editOrderHidden=!0},1e4)}catch(i){console.error(i)}}async deleteOrder(r){const t=new Headers;t.append("Content-Type","application/json");const e=JSON.stringify({itemID:`${r.target.value}`}),s={method:"POST",headers:t,body:e,redirect:"follow"};try{const n=await(await fetch("https://agentorder-388308187768.us-central1.run.app/agentdelete",s)).json();console.log(n),this.deleteOrderHidden=!1,setTimeout(()=>{this.deleteOrderHidden=!0},1e4)}catch(i){console.error(i)}}async getOrder(){const r={method:"GET",redirect:"follow"};try{const e=await(await fetch("https://agentorder-388308187768.us-central1.run.app/agentorder",r)).json();console.log(e),this.orderlist=e}catch(t){console.error(t)}}connectedCallback(){super.connectedCallback(),this.getOrder(),this._timerInterval=setInterval(()=>{this.isFormHidden=!0,this.getOrder()},6e4)}disconnectedCallback(){super.disconnectedCallback(),this._timerInterval&&clearInterval(this._timerInterval)}render(){return tt`
         <div class=${this.isFormHidden?"hidden":"edit-form"}>
      <h2 class="title">Edit Order</h2>
      <form @submit=${this.agentSendOrderEdit}>
        <label>ID (cannot be edited)</label>
        <input type="text"  .value=${this.agentEditID||""} @input=${this.handleAgentEditInput} readonly style="color: rgba(0, 0, 255, .5); background: #eee;">
        <label>Model:</label>
        <input type="text"    .value=${this.agentEditModel||""} @input=${this.handleModelInput}>
        
        <label>Status:</label>
        <input type="text"    .value=${this.agentEditStatus||""} @input=${this.handleStatusInput}>
        
        <label>Delivery Address:</label>
        <input type="text"   .value=${this.agentEditAddress||""} @input=${this.handleAddressInput}>

        <div class="form-buttons">
          <button type="submit">Save Changes</button>
          <button type="button" @click=${this.cancelEdit}>Cancel</button>
        </div>
      </form> 
        <div class=${this.editOrderHidden?"hidden":"edit-form"}>
             <h2 class="editOrDelete"> Order Edit Successful!</h2>
        </div>
    </div>
     

    <h1 class="title">Orders</h1>
        <div class=${this.deleteOrderHidden?"hidden":""}>
        <h2 class="Delete101"> Order was Deleted</h2>
        </div>
        <button  @click=${this.getOrder}>Get Orders</button>
        <table>
            <thead>
                <th>Name </th>
                <th>Act #</th>
                <th> Model</th>
                <th> Status</th>
                <th>Delivery Address</th>
                <th>Action</th>
            </thead>
                ${this.orderlist?.map(r=>tt`
            <tbody>
                <td>${r.firstName} ${r.lastName}</td>
                <td>${r.accountNumber}</td>
                <td>${r.model}</td>
                <td>${r.status}</td>
                <td>${r.address}</td>
                <td><button value=${r._id} @click=${this.deleteOrder}>Delete</button> 
                <button value=${r._id} @click=${this.agentEditOrder} >Edit</button></td>

           </tbody>`)}
        </table>
    
  `}};u.styles=[dt`
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

  .Delete101  {
      color: green
    }


   `];$([f()],u.prototype,"orderlist",2);$([f()],u.prototype,"isFormHidden",2);$([f()],u.prototype,"editOrderHidden",2);$([f()],u.prototype,"deleteOrderHidden",2);$([f()],u.prototype,"errorMessage",2);$([f()],u.prototype,"successMessage",2);$([f()],u.prototype,"deleteItem",2);$([f()],u.prototype,"agentEditID",2);$([f()],u.prototype,"agentEditModel",2);$([f()],u.prototype,"agentEditStatus",2);$([f()],u.prototype,"agentEditAddress",2);$([f()],u.prototype,"_timerInterval",2);u=$([Ht("agent-order")],u);
