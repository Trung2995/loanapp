var agent_order=(function(l){"use strict";const U=globalThis,k=U.ShadowRoot&&(U.ShadyCSS===void 0||U.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,j=Symbol(),W=new WeakMap;let F=class{constructor(t,e,s){if(this._$cssResult$=!0,s!==j)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(k&&t===void 0){const s=e!==void 0&&e.length===1;s&&(t=W.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&W.set(e,t))}return t}toString(){return this.cssText}};const dt=r=>new F(typeof r=="string"?r:r+"",void 0,j),ht=(r,...t)=>{const e=r.length===1?r[0]:t.reduce((s,i,n)=>s+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+r[n+1],r[0]);return new F(e,r,j)},lt=(r,t)=>{if(k)r.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const e of t){const s=document.createElement("style"),i=U.litNonce;i!==void 0&&s.setAttribute("nonce",i),s.textContent=e.cssText,r.appendChild(s)}},J=k?r=>r:r=>r instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return dt(e)})(r):r;const{is:ct,defineProperty:pt,getOwnPropertyDescriptor:ut,getOwnPropertyNames:$t,getOwnPropertySymbols:gt,getPrototypeOf:ft}=Object,I=globalThis,Z=I.trustedTypes,_t=Z?Z.emptyScript:"",mt=I.reactiveElementPolyfillSupport,O=(r,t)=>r,T={toAttribute(r,t){switch(t){case Boolean:r=r?_t:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,t){let e=r;switch(t){case Boolean:e=r!==null;break;case Number:e=r===null?null:Number(r);break;case Object:case Array:try{e=JSON.parse(r)}catch{e=null}}return e}},z=(r,t)=>!ct(r,t),G={attribute:!0,type:String,converter:T,reflect:!1,useDefault:!1,hasChanged:z};Symbol.metadata??=Symbol("metadata"),I.litPropertyMetadata??=new WeakMap;let b=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=G){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const s=Symbol(),i=this.getPropertyDescriptor(t,s,e);i!==void 0&&pt(this.prototype,t,i)}}static getPropertyDescriptor(t,e,s){const{get:i,set:n}=ut(this.prototype,t)??{get(){return this[e]},set(o){this[e]=o}};return{get:i,set(o){const d=i?.call(this);n?.call(this,o),this.requestUpdate(t,d,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??G}static _$Ei(){if(this.hasOwnProperty(O("elementProperties")))return;const t=ft(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(O("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(O("properties"))){const e=this.properties,s=[...$t(e),...gt(e)];for(const i of s)this.createProperty(i,e[i])}const t=this[Symbol.metadata];if(t!==null){const e=litPropertyMetadata.get(t);if(e!==void 0)for(const[s,i]of e)this.elementProperties.set(s,i)}this._$Eh=new Map;for(const[e,s]of this.elementProperties){const i=this._$Eu(e,s);i!==void 0&&this._$Eh.set(i,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const i of s)e.unshift(J(i))}else t!==void 0&&e.push(J(t));return e}static _$Eu(t,e){const s=e.attribute;return s===!1?void 0:typeof s=="string"?s:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const s of e.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return lt(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$ET(t,e){const s=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,s);if(i!==void 0&&s.reflect===!0){const n=(s.converter?.toAttribute!==void 0?s.converter:T).toAttribute(e,s.type);this._$Em=t,n==null?this.removeAttribute(i):this.setAttribute(i,n),this._$Em=null}}_$AK(t,e){const s=this.constructor,i=s._$Eh.get(t);if(i!==void 0&&this._$Em!==i){const n=s.getPropertyOptions(i),o=typeof n.converter=="function"?{fromAttribute:n.converter}:n.converter?.fromAttribute!==void 0?n.converter:T;this._$Em=i;const d=o.fromAttribute(e,n.type);this[i]=d??this._$Ej?.get(i)??d,this._$Em=null}}requestUpdate(t,e,s,i=!1,n){if(t!==void 0){const o=this.constructor;if(i===!1&&(n=this[t]),s??=o.getPropertyOptions(t),!((s.hasChanged??z)(n,e)||s.useDefault&&s.reflect&&n===this._$Ej?.get(t)&&!this.hasAttribute(o._$Eu(t,s))))return;this.C(t,e,s)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,e,{useDefault:s,reflect:i,wrapped:n},o){s&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,o??e??this[t]),n!==!0||o!==void 0)||(this._$AL.has(t)||(this.hasUpdated||s||(e=void 0),this._$AL.set(t,e)),i===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[i,n]of this._$Ep)this[i]=n;this._$Ep=void 0}const s=this.constructor.elementProperties;if(s.size>0)for(const[i,n]of s){const{wrapped:o}=n,d=this[i];o!==!0||this._$AL.has(i)||d===void 0||this.C(i,void 0,n,d)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(s=>s.hostUpdate?.()),this.update(e)):this._$EM()}catch(s){throw t=!1,this._$EM(),s}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(t){}firstUpdated(t){}};b.elementStyles=[],b.shadowRootOptions={mode:"open"},b[O("elementProperties")]=new Map,b[O("finalized")]=new Map,mt?.({ReactiveElement:b}),(I.reactiveElementVersions??=[]).push("2.1.2");const L=globalThis,K=r=>r,D=L.trustedTypes,Q=D?D.createPolicy("lit-html",{createHTML:r=>r}):void 0,X="$lit$",_=`lit$${Math.random().toFixed(9).slice(2)}$`,Y="?"+_,yt=`<${Y}>`,y=document,w=()=>y.createComment(""),C=r=>r===null||typeof r!="object"&&typeof r!="function",B=Array.isArray,At=r=>B(r)||typeof r?.[Symbol.iterator]=="function",q=`[ 	
\f\r]`,P=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,tt=/-->/g,et=/>/g,A=RegExp(`>|${q}(?:([^\\s"'>=/]+)(${q}*=${q}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),st=/'/g,it=/"/g,rt=/^(?:script|style|textarea|title)$/i,vt=r=>(t,...e)=>({_$litType$:r,strings:t,values:e}),nt=vt(1),E=Symbol.for("lit-noChange"),c=Symbol.for("lit-nothing"),ot=new WeakMap,v=y.createTreeWalker(y,129);function at(r,t){if(!B(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return Q!==void 0?Q.createHTML(t):t}const bt=(r,t)=>{const e=r.length-1,s=[];let i,n=t===2?"<svg>":t===3?"<math>":"",o=P;for(let d=0;d<e;d++){const a=r[d];let p,u,h=-1,f=0;for(;f<a.length&&(o.lastIndex=f,u=o.exec(a),u!==null);)f=o.lastIndex,o===P?u[1]==="!--"?o=tt:u[1]!==void 0?o=et:u[2]!==void 0?(rt.test(u[2])&&(i=RegExp("</"+u[2],"g")),o=A):u[3]!==void 0&&(o=A):o===A?u[0]===">"?(o=i??P,h=-1):u[1]===void 0?h=-2:(h=o.lastIndex-u[2].length,p=u[1],o=u[3]===void 0?A:u[3]==='"'?it:st):o===it||o===st?o=A:o===tt||o===et?o=P:(o=A,i=void 0);const m=o===A&&r[d+1].startsWith("/>")?" ":"";n+=o===P?a+yt:h>=0?(s.push(p),a.slice(0,h)+X+a.slice(h)+_+m):a+_+(h===-2?d:m)}return[at(r,n+(r[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),s]};class x{constructor({strings:t,_$litType$:e},s){let i;this.parts=[];let n=0,o=0;const d=t.length-1,a=this.parts,[p,u]=bt(t,e);if(this.el=x.createElement(p,s),v.currentNode=this.el.content,e===2||e===3){const h=this.el.content.firstChild;h.replaceWith(...h.childNodes)}for(;(i=v.nextNode())!==null&&a.length<d;){if(i.nodeType===1){if(i.hasAttributes())for(const h of i.getAttributeNames())if(h.endsWith(X)){const f=u[o++],m=i.getAttribute(h).split(_),R=/([.?@])?(.*)/.exec(f);a.push({type:1,index:n,name:R[2],strings:m,ctor:R[1]==="."?St:R[1]==="?"?Ot:R[1]==="@"?wt:N}),i.removeAttribute(h)}else h.startsWith(_)&&(a.push({type:6,index:n}),i.removeAttribute(h));if(rt.test(i.tagName)){const h=i.textContent.split(_),f=h.length-1;if(f>0){i.textContent=D?D.emptyScript:"";for(let m=0;m<f;m++)i.append(h[m],w()),v.nextNode(),a.push({type:2,index:++n});i.append(h[f],w())}}}else if(i.nodeType===8)if(i.data===Y)a.push({type:2,index:n});else{let h=-1;for(;(h=i.data.indexOf(_,h+1))!==-1;)a.push({type:7,index:n}),h+=_.length-1}n++}}static createElement(t,e){const s=y.createElement("template");return s.innerHTML=t,s}}function S(r,t,e=r,s){if(t===E)return t;let i=s!==void 0?e._$Co?.[s]:e._$Cl;const n=C(t)?void 0:t._$litDirective$;return i?.constructor!==n&&(i?._$AO?.(!1),n===void 0?i=void 0:(i=new n(r),i._$AT(r,e,s)),s!==void 0?(e._$Co??=[])[s]=i:e._$Cl=i),i!==void 0&&(t=S(r,i._$AS(r,t.values),i,s)),t}class Et{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:s}=this._$AD,i=(t?.creationScope??y).importNode(e,!0);v.currentNode=i;let n=v.nextNode(),o=0,d=0,a=s[0];for(;a!==void 0;){if(o===a.index){let p;a.type===2?p=new H(n,n.nextSibling,this,t):a.type===1?p=new a.ctor(n,a.name,a.strings,this,t):a.type===6&&(p=new Ct(n,this,t)),this._$AV.push(p),a=s[++d]}o!==a?.index&&(n=v.nextNode(),o++)}return v.currentNode=y,i}p(t){let e=0;for(const s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}}class H{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,s,i){this.type=2,this._$AH=c,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=S(this,t,e),C(t)?t===c||t==null||t===""?(this._$AH!==c&&this._$AR(),this._$AH=c):t!==this._$AH&&t!==E&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):At(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==c&&C(this._$AH)?this._$AA.nextSibling.data=t:this.T(y.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:s}=t,i=typeof s=="number"?this._$AC(t):(s.el===void 0&&(s.el=x.createElement(at(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===i)this._$AH.p(e);else{const n=new Et(i,this),o=n.u(this.options);n.p(e),this.T(o),this._$AH=n}}_$AC(t){let e=ot.get(t.strings);return e===void 0&&ot.set(t.strings,e=new x(t)),e}k(t){B(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let s,i=0;for(const n of t)i===e.length?e.push(s=new H(this.O(w()),this.O(w()),this,this.options)):s=e[i],s._$AI(n),i++;i<e.length&&(this._$AR(s&&s._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const s=K(t).nextSibling;K(t).remove(),t=s}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}}class N{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,s,i,n){this.type=1,this._$AH=c,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=n,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=c}_$AI(t,e=this,s,i){const n=this.strings;let o=!1;if(n===void 0)t=S(this,t,e,0),o=!C(t)||t!==this._$AH&&t!==E,o&&(this._$AH=t);else{const d=t;let a,p;for(t=n[0],a=0;a<n.length-1;a++)p=S(this,d[s+a],e,a),p===E&&(p=this._$AH[a]),o||=!C(p)||p!==this._$AH[a],p===c?t=c:t!==c&&(t+=(p??"")+n[a+1]),this._$AH[a]=p}o&&!i&&this.j(t)}j(t){t===c?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class St extends N{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===c?void 0:t}}class Ot extends N{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==c)}}class wt extends N{constructor(t,e,s,i,n){super(t,e,s,i,n),this.type=5}_$AI(t,e=this){if((t=S(this,t,e,0)??c)===E)return;const s=this._$AH,i=t===c&&s!==c||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,n=t!==c&&(s===c||i);i&&this.element.removeEventListener(this.name,this,s),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class Ct{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){S(this,t)}}const Pt=L.litHtmlPolyfillSupport;Pt?.(x,H),(L.litHtmlVersions??=[]).push("3.3.2");const xt=(r,t,e)=>{const s=e?.renderBefore??t;let i=s._$litPart$;if(i===void 0){const n=e?.renderBefore??null;s._$litPart$=i=new H(t.insertBefore(w(),n),n,void 0,e??{})}return i._$AI(r),i};const V=globalThis;class M extends b{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=xt(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return E}}M._$litElement$=!0,M.finalized=!0,V.litElementHydrateSupport?.({LitElement:M});const Ht=V.litElementPolyfillSupport;Ht?.({LitElement:M}),(V.litElementVersions??=[]).push("4.2.2");const Mt=r=>(t,e)=>{e!==void 0?e.addInitializer(()=>{customElements.define(r,t)}):customElements.define(r,t)};const Ut={attribute:!0,type:String,converter:T,reflect:!1,hasChanged:z},It=(r=Ut,t,e)=>{const{kind:s,metadata:i}=e;let n=globalThis.litPropertyMetadata.get(i);if(n===void 0&&globalThis.litPropertyMetadata.set(i,n=new Map),s==="setter"&&((r=Object.create(r)).wrapped=!0),n.set(e.name,r),s==="accessor"){const{name:o}=e;return{set(d){const a=t.get.call(this);t.set.call(this,d),this.requestUpdate(o,a,r,!0,d)},init(d){return d!==void 0&&this.C(o,void 0,r,d),d}}}if(s==="setter"){const{name:o}=e;return function(d){const a=this[o];t.call(this,d),this.requestUpdate(o,a,r,!0,d)}}throw Error("Unsupported decorator location: "+s)};function Tt(r){return(t,e)=>typeof e=="object"?It(r,t,e):((s,i,n)=>{const o=i.hasOwnProperty(n);return i.constructor.createProperty(n,s),o?Object.getOwnPropertyDescriptor(i,n):void 0})(r,t,e)}function g(r){return Tt({...r,state:!0,attribute:!1})}var Dt=Object.defineProperty,Nt=Object.getOwnPropertyDescriptor,$=(r,t,e,s)=>{for(var i=s>1?void 0:s?Nt(t,e):t,n=r.length-1,o;n>=0;n--)(o=r[n])&&(i=(s?o(t,e,i):o(i))||i);return s&&i&&Dt(t,e,i),i};return l.AgentOrder=class extends M{constructor(){super(...arguments),this.orderlist=[],this.isFormHidden=!0,this.editOrderHidden=!0,this.deleteOrderHidden=!0,this.errorMessage="",this.successMessage="",this.deleteItem="",this.agentEditID="",this.agentEditModel="",this.agentEditStatus="",this.agentEditAddress=""}cancelEdit(){this.isFormHidden=!0,this.agentEditID="",this.agentEditModel="",this.agentEditStatus="",this.agentEditAddress=""}handleModelInput(t){this.agentEditModel=t.target.value}handleStatusInput(t){this.agentEditStatus=t.target.value}handleAddressInput(t){this.agentEditAddress=t.target.value}handleAgentEditInput(t){this.agentEditID=t.target.value}agentEditOrder(t){this.agentEditID=t.target.value;const e=this.orderlist.find(s=>s._id===this.agentEditID);e&&(this.agentEditModel=e.model||"",this.agentEditStatus=e.status||"",this.agentEditAddress=e.address||""),console.log("Editing order ID:",this.agentEditID),this.isFormHidden=!1}async agentSendOrderEdit(t){t.preventDefault(),console.log("hi and you got to the edit API ");const e=new Headers;e.append("Content-Type","application/json");const s=JSON.stringify({agentOrderID:`${this.agentEditID}`,agentOrderModel:`${this.agentEditModel}`,agentOrderStatus:`${this.agentEditStatus}`,address:`${this.agentEditAddress}`}),i={method:"POST",headers:e,body:s,redirect:"follow"};try{const o=await(await fetch("https://agentorder-388308187768.us-central1.run.app/agentedit",i)).json();console.log(o),this.editOrderHidden=!1,setTimeout(()=>{this.editOrderHidden=!0},1e4)}catch(n){console.error(n)}}async deleteOrder(t){const e=new Headers;e.append("Content-Type","application/json");const s=JSON.stringify({itemID:`${t.target.value}`}),i={method:"POST",headers:e,body:s,redirect:"follow"};try{const o=await(await fetch("https://agentorder-388308187768.us-central1.run.app/agentdelete",i)).json();console.log(o),this.deleteOrderHidden=!1,setTimeout(()=>{this.deleteOrderHidden=!0},1e4)}catch(n){console.error(n)}}async getOrder(){const t={method:"GET",redirect:"follow"};try{const s=await(await fetch("https://agentorder-388308187768.us-central1.run.app/agentorder",t)).json();console.log(s),this.orderlist=s}catch(e){console.error(e)}}connectedCallback(){super.connectedCallback(),this.getOrder(),this._timerInterval=setInterval(()=>{this.isFormHidden=!0,this.getOrder()},6e4)}disconnectedCallback(){super.disconnectedCallback(),this._timerInterval&&clearInterval(this._timerInterval)}render(){return nt`
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
                ${this.orderlist?.map(t=>nt`
            <tbody>
                <td>${t.firstName} ${t.lastName}</td>
                <td>${t.accountNumber}</td>
                <td>${t.model}</td>
                <td>${t.status}</td>
                <td>${t.address}</td>
                <td><button value=${t._id} @click=${this.deleteOrder}>Delete</button> 
                <button value=${t._id} @click=${this.agentEditOrder} >Edit</button></td>

           </tbody>`)}
        </table>
    
  `}},l.AgentOrder.styles=[ht`
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


   `],$([g()],l.AgentOrder.prototype,"orderlist",2),$([g()],l.AgentOrder.prototype,"isFormHidden",2),$([g()],l.AgentOrder.prototype,"editOrderHidden",2),$([g()],l.AgentOrder.prototype,"deleteOrderHidden",2),$([g()],l.AgentOrder.prototype,"errorMessage",2),$([g()],l.AgentOrder.prototype,"successMessage",2),$([g()],l.AgentOrder.prototype,"deleteItem",2),$([g()],l.AgentOrder.prototype,"agentEditID",2),$([g()],l.AgentOrder.prototype,"agentEditModel",2),$([g()],l.AgentOrder.prototype,"agentEditStatus",2),$([g()],l.AgentOrder.prototype,"agentEditAddress",2),$([g()],l.AgentOrder.prototype,"_timerInterval",2),l.AgentOrder=$([Mt("agent-order")],l.AgentOrder),Object.defineProperty(l,Symbol.toStringTag,{value:"Module"}),l})({});
