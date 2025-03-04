(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))n(l);new MutationObserver(l=>{for(const i of l)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function r(l){const i={};return l.integrity&&(i.integrity=l.integrity),l.referrerPolicy&&(i.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?i.credentials="include":l.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(l){if(l.ep)return;l.ep=!0;const i=r(l);fetch(l.href,i)}})();const de=!1;var xe=Array.isArray,tr=Array.prototype.indexOf,zt=Array.from,er=Object.defineProperty,pe=Object.getOwnPropertyDescriptor,rr=Object.getOwnPropertyDescriptors,nr=Object.getPrototypeOf;function lr(t){return t()}function Ut(t){for(var e=0;e<t.length;e++)t[e]()}const I=2,ke=4,bt=8,te=16,$=32,Et=64,Ot=128,M=256,St=512,O=1024,U=2048,st=4096,H=8192,Mt=16384,ir=32768,ee=65536,or=1<<19,Te=1<<20,he=Symbol("$state");function Ae(t){return t===this.v}function ar(t,e){return t!=t?e==e:t!==e||t!==null&&typeof t=="object"||typeof t=="function"}function Ce(t){return!ar(t,this.v)}function ur(t){throw new Error("https://svelte.dev/e/effect_in_teardown")}function sr(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function fr(t){throw new Error("https://svelte.dev/e/effect_orphan")}function cr(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function vr(){throw new Error("https://svelte.dev/e/state_unsafe_local_read")}function _r(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}let yt=!1,dr=!1;function pr(){yt=!0}const re=1,ne=2,Ne=4,hr=8,mr=16,gr=1,wr=2,br=Symbol();function Er(t){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}let x=null;function me(t){x=t}function le(t,e=!1,r){x={p:x,c:null,e:null,m:!1,s:t,x:null,l:null},yt&&!e&&(x.l={s:null,u:null,r1:[],r2:gt(!1)})}function ie(t){const e=x;if(e!==null){const o=e.e;if(o!==null){var r=E,n=b;e.e=null;try{for(var l=0;l<o.length;l++){var i=o[l];z(i.effect),Z(i.reaction),Me(i.fn)}}finally{z(r),Z(n)}}x=e.p,e.m=!0}return{}}function Pt(){return!yt||x!==null&&x.l===null}function gt(t,e){var r={f:0,v:t,reactions:null,equals:Ae,rv:0,wv:0};return r}function yr(t){return Se(gt(t))}function Oe(t,e=!1){var n;const r=gt(t);return e||(r.equals=Ce),yt&&x!==null&&x.l!==null&&((n=x.l).s??(n.s=[])).push(r),r}function dt(t,e=!1){return Se(Oe(t,e))}function Se(t){return b!==null&&!V&&(b.f&I)!==0&&(R===null?Lr([t]):R.push(t)),t}function xr(t,e){return C(t,ve(()=>u(t))),e}function C(t,e){return b!==null&&!V&&Pt()&&(b.f&(I|te))!==0&&(R===null||!R.includes(t))&&_r(),Wt(t,e)}function Wt(t,e){return t.equals(e)||(t.v,t.v=e,t.wv=Ye(),je(t,U),Pt()&&E!==null&&(E.f&O)!==0&&(E.f&($|Et))===0&&(B===null?Rr([t]):B.push(t))),e}function je(t,e){var r=t.reactions;if(r!==null)for(var n=Pt(),l=r.length,i=0;i<l;i++){var o=r[i],c=o.f;(c&U)===0&&(!n&&o===E||(P(o,e),(c&(O|M))!==0&&((c&I)!==0?je(o,st):Vt(o))))}}let kr=!1;var ge,De,Fe;function Tr(){if(ge===void 0){ge=window;var t=Element.prototype,e=Node.prototype;De=pe(e,"firstChild").get,Fe=pe(e,"nextSibling").get,t.__click=void 0,t.__className="",t.__attributes=null,t.__styles=null,t.__e=void 0,Text.prototype.__t=void 0}}function oe(t=""){return document.createTextNode(t)}function jt(t){return De.call(t)}function Bt(t){return Fe.call(t)}function L(t,e){return jt(t)}function K(t,e){{var r=jt(t);return r instanceof Comment&&r.data===""?Bt(r):r}}function q(t,e=1,r=!1){let n=t;for(;e--;)n=Bt(n);return n}function Ar(t){t.textContent=""}function ae(t){var e=I|U,r=b!==null&&(b.f&I)!==0?b:null;return E===null||r!==null&&(r.f&M)!==0?e|=M:E.f|=Te,{ctx:x,deps:null,effects:null,equals:Ae,f:e,fn:t,reactions:null,rv:0,v:null,wv:0,parent:r??E}}function qe(t){const e=ae(t);return e.equals=Ce,e}function Ie(t){var e=t.effects;if(e!==null){t.effects=null;for(var r=0;r<e.length;r+=1)Q(e[r])}}function Cr(t){for(var e=t.parent;e!==null;){if((e.f&I)===0)return e;e=e.parent}return null}function Nr(t){var e,r=E;z(Cr(t));try{Ie(t),e=Xe(t)}finally{z(r)}return e}function Le(t){var e=Nr(t),r=(J||(t.f&M)!==0)&&t.deps!==null?st:O;P(t,r),t.equals(e)||(t.v=e,t.wv=Ye())}function Re(t){E===null&&b===null&&fr(),b!==null&&(b.f&M)!==0&&E===null&&sr(),fe&&ur()}function Or(t,e){var r=e.last;r===null?e.last=e.first=t:(r.next=t,t.prev=r,e.last=t)}function ft(t,e,r,n=!0){var l=(t&Et)!==0,i=E,o={ctx:x,deps:null,nodes_start:null,nodes_end:null,f:t|U,first:null,fn:e,last:null,next:null,parent:l?null:i,prev:null,teardown:null,transitions:null,wv:0};if(r){var c=at;try{we(!0),ce(o),o.f|=ir}catch(v){throw Q(o),v}finally{we(c)}}else e!==null&&Vt(o);var p=r&&o.deps===null&&o.first===null&&o.nodes_start===null&&o.teardown===null&&(o.f&(Te|Ot))===0;if(!p&&!l&&n&&(i!==null&&Or(o,i),b!==null&&(b.f&I)!==0)){var _=b;(_.effects??(_.effects=[])).push(o)}return o}function Sr(t){const e=ft(bt,null,!1);return P(e,O),e.teardown=t,e}function Yt(t){Re();var e=E!==null&&(E.f&$)!==0&&x!==null&&!x.m;if(e){var r=x;(r.e??(r.e=[])).push({fn:t,effect:E,reaction:b})}else{var n=Me(t);return n}}function jr(t){return Re(),Fr(t)}function Dr(t){const e=ft(Et,t,!0);return(r={})=>new Promise(n=>{r.outro?Dt(e,()=>{Q(e),n(void 0)}):(Q(e),n(void 0))})}function Me(t){return ft(ke,t,!1)}function Fr(t){return ft(bt,t,!0)}function ot(t,e=[],r=ae){const n=e.map(r);return ue(()=>t(...n.map(u)))}function ue(t,e=0){return ft(bt|te|e,t,!0)}function wt(t,e=!0){return ft(bt|$,t,!0,e)}function Pe(t){var e=t.teardown;if(e!==null){const r=fe,n=b;be(!0),Z(null);try{e.call(null)}finally{be(r),Z(n)}}}function Be(t,e=!1){var r=t.first;for(t.first=t.last=null;r!==null;){var n=r.next;Q(r,e),r=n}}function qr(t){for(var e=t.first;e!==null;){var r=e.next;(e.f&$)===0&&Q(e),e=r}}function Q(t,e=!0){var r=!1;if((e||(t.f&or)!==0)&&t.nodes_start!==null){for(var n=t.nodes_start,l=t.nodes_end;n!==null;){var i=n===l?null:Bt(n);n.remove(),n=i}r=!0}Be(t,e&&!r),Rt(t,0),P(t,Mt);var o=t.transitions;if(o!==null)for(const p of o)p.stop();Pe(t);var c=t.parent;c!==null&&c.first!==null&&He(t),t.next=t.prev=t.teardown=t.ctx=t.deps=t.fn=t.nodes_start=t.nodes_end=null}function He(t){var e=t.parent,r=t.prev,n=t.next;r!==null&&(r.next=n),n!==null&&(n.prev=r),e!==null&&(e.first===t&&(e.first=n),e.last===t&&(e.last=r))}function Dt(t,e){var r=[];se(t,r,!0),Ve(r,()=>{Q(t),e&&e()})}function Ve(t,e){var r=t.length;if(r>0){var n=()=>--r||e();for(var l of t)l.out(n)}else e()}function se(t,e,r){if((t.f&H)===0){if(t.f^=H,t.transitions!==null)for(const o of t.transitions)(o.is_global||r)&&e.push(o);for(var n=t.first;n!==null;){var l=n.next,i=(n.f&ee)!==0||(n.f&$)!==0;se(n,e,i?r:!1),n=l}}}function Ft(t){$e(t,!0)}function $e(t,e){if((t.f&H)!==0){t.f^=H,(t.f&O)===0&&(t.f^=O),xt(t)&&(P(t,U),Vt(t));for(var r=t.first;r!==null;){var n=r.next,l=(r.f&ee)!==0||(r.f&$)!==0;$e(r,l?e:!1),r=n}if(t.transitions!==null)for(const i of t.transitions)(i.is_global||e)&&i.in()}}let Gt=!1,Xt=[];function Ir(){Gt=!1;const t=Xt.slice();Xt=[],Ut(t)}function Ue(t){Gt||(Gt=!0,queueMicrotask(Ir)),Xt.push(t)}let Ct=!1,qt=!1,It=null,at=!1,fe=!1;function we(t){at=t}function be(t){fe=t}let Kt=[],pt=0;let b=null,V=!1;function Z(t){b=t}let E=null;function z(t){E=t}let R=null;function Lr(t){R=t}let N=null,S=0,B=null;function Rr(t){B=t}let We=1,Lt=0,J=!1;function Ye(){return++We}function xt(t){var _;var e=t.f;if((e&U)!==0)return!0;if((e&st)!==0){var r=t.deps,n=(e&M)!==0;if(r!==null){var l,i,o=(e&St)!==0,c=n&&E!==null&&!J,p=r.length;if(o||c){for(l=0;l<p;l++)i=r[l],(o||!((_=i==null?void 0:i.reactions)!=null&&_.includes(t)))&&(i.reactions??(i.reactions=[])).push(t);o&&(t.f^=St)}for(l=0;l<p;l++)if(i=r[l],xt(i)&&Le(i),i.wv>t.wv)return!0}(!n||E!==null&&!J)&&P(t,O)}return!1}function Mr(t,e){for(var r=e;r!==null;){if((r.f&Ot)!==0)try{r.fn(t);return}catch{r.f^=Ot}r=r.parent}throw Ct=!1,t}function Pr(t){return(t.f&Mt)===0&&(t.parent===null||(t.parent.f&Ot)===0)}function Ht(t,e,r,n){if(Ct){if(r===null&&(Ct=!1),Pr(e))throw t;return}r!==null&&(Ct=!0);{Mr(t,e);return}}function Ge(t,e,r=0){var n=t.reactions;if(n!==null)for(var l=0;l<n.length;l++){var i=n[l];(i.f&I)!==0?Ge(i,e,r+1):e===i&&(r===0?P(i,U):(i.f&O)!==0&&P(i,st),Vt(i))}}function Xe(t){var h;var e=N,r=S,n=B,l=b,i=J,o=R,c=x,p=V,_=t.f;N=null,S=0,B=null,b=(_&($|Et))===0?t:null,J=(_&M)!==0&&(!at||l===null||p),R=null,me(t.ctx),V=!1,Lt++;try{var v=(0,t.fn)(),d=t.deps;if(N!==null){var a;if(Rt(t,S),d!==null&&S>0)for(d.length=S+N.length,a=0;a<N.length;a++)d[S+a]=N[a];else t.deps=d=N;if(!J)for(a=S;a<d.length;a++)((h=d[a]).reactions??(h.reactions=[])).push(t)}else d!==null&&S<d.length&&(Rt(t,S),d.length=S);if(Pt()&&B!==null&&(t.f&(I|st|U))===0)for(a=0;a<B.length;a++)Ge(B[a],t);return l!==null&&Lt++,v}finally{N=e,S=r,B=n,b=l,J=i,R=o,me(c),V=p}}function Br(t,e){let r=e.reactions;if(r!==null){var n=tr.call(r,t);if(n!==-1){var l=r.length-1;l===0?r=e.reactions=null:(r[n]=r[l],r.pop())}}r===null&&(e.f&I)!==0&&(N===null||!N.includes(e))&&(P(e,st),(e.f&(M|St))===0&&(e.f^=St),Ie(e),Rt(e,0))}function Rt(t,e){var r=t.deps;if(r!==null)for(var n=e;n<r.length;n++)Br(t,r[n])}function ce(t){var e=t.f;if((e&Mt)===0){P(t,O);var r=E,n=x;E=t;try{(e&te)!==0?qr(t):Be(t),Pe(t);var l=Xe(t);t.teardown=typeof l=="function"?l:null,t.wv=We;var i=t.deps,o;de&&dr&&t.f&U}catch(c){Ht(c,t,r,n||t.ctx)}finally{E=r}}}function Hr(){if(pt>1e3){pt=0;try{cr()}catch(t){if(It!==null)Ht(t,It,null);else throw t}}pt++}function Vr(t){var e=t.length;if(e!==0){Hr();var r=at;at=!0;try{for(var n=0;n<e;n++){var l=t[n];(l.f&O)===0&&(l.f^=O);var i=[];Ke(l,i),$r(i)}}finally{at=r}}}function $r(t){var e=t.length;if(e!==0)for(var r=0;r<e;r++){var n=t[r];if((n.f&(Mt|H))===0)try{xt(n)&&(ce(n),n.deps===null&&n.first===null&&n.nodes_start===null&&(n.teardown===null?He(n):n.fn=null))}catch(l){Ht(l,n,null,n.ctx)}}}function Ur(){if(qt=!1,pt>1001)return;const t=Kt;Kt=[],Vr(t),qt||(pt=0,It=null)}function Vt(t){qt||(qt=!0,queueMicrotask(Ur)),It=t;for(var e=t;e.parent!==null;){e=e.parent;var r=e.f;if((r&(Et|$))!==0){if((r&O)===0)return;e.f^=O}}Kt.push(e)}function Ke(t,e){var r=t.first,n=[];t:for(;r!==null;){var l=r.f,i=(l&$)!==0,o=i&&(l&O)!==0,c=r.next;if(!o&&(l&H)===0)if((l&bt)!==0){if(i)r.f^=O;else{var p=b;try{b=r,xt(r)&&ce(r)}catch(a){Ht(a,r,null,r.ctx)}finally{b=p}}var _=r.first;if(_!==null){r=_;continue}}else(l&ke)!==0&&n.push(r);if(c===null){let a=r.parent;for(;a!==null;){if(t===a)break t;var v=a.next;if(v!==null){r=v;continue t}a=a.parent}}r=c}for(var d=0;d<n.length;d++)_=n[d],e.push(_),Ke(_,e)}function u(t){var e=t.f,r=(e&I)!==0;if(b!==null&&!V){R!==null&&R.includes(t)&&vr();var n=b.deps;t.rv<Lt&&(t.rv=Lt,N===null&&n!==null&&n[S]===t?S++:N===null?N=[t]:(!J||!N.includes(t))&&N.push(t))}else if(r&&t.deps===null&&t.effects===null){var l=t,i=l.parent;i!==null&&(i.f&M)===0&&(l.f^=M)}return r&&(l=t,xt(l)&&Le(l)),t.v}function ve(t){var e=V;try{return V=!0,t()}finally{V=e}}const Wr=-7169;function P(t,e){t.f=t.f&Wr|e}function Yr(t){if(!(typeof t!="object"||!t||t instanceof EventTarget)){if(he in t)Jt(t);else if(!Array.isArray(t))for(let e in t){const r=t[e];typeof r=="object"&&r&&he in r&&Jt(r)}}}function Jt(t,e=new Set){if(typeof t=="object"&&t!==null&&!(t instanceof EventTarget)&&!e.has(t)){e.add(t),t instanceof Date&&t.getTime();for(let n in t)try{Jt(t[n],e)}catch{}const r=nr(t);if(r!==Object.prototype&&r!==Array.prototype&&r!==Map.prototype&&r!==Set.prototype&&r!==Date.prototype){const n=rr(r);for(let l in n){const i=n[l].get;if(i)try{i.call(t)}catch{}}}}}const Gr=["touchstart","touchmove"];function Xr(t){return Gr.includes(t)}function Kr(t){var e=b,r=E;Z(null),z(null);try{return t()}finally{Z(e),z(r)}}const Je=new Set,Qt=new Set;function Jr(t,e,r,n={}){function l(i){if(n.capture||vt.call(e,i),!i.cancelBubble)return Kr(()=>r==null?void 0:r.call(this,i))}return t.startsWith("pointer")||t.startsWith("touch")||t==="wheel"?Ue(()=>{e.addEventListener(t,l,n)}):e.addEventListener(t,l,n),l}function it(t,e,r,n,l){var i={capture:n,passive:l},o=Jr(t,e,r,i);(e===document.body||e===window||e===document)&&Sr(()=>{e.removeEventListener(t,o,i)})}function Qr(t){for(var e=0;e<t.length;e++)Je.add(t[e]);for(var r of Qt)r(t)}function vt(t){var A;var e=this,r=e.ownerDocument,n=t.type,l=((A=t.composedPath)==null?void 0:A.call(t))||[],i=l[0]||t.target,o=0,c=t.__root;if(c){var p=l.indexOf(c);if(p!==-1&&(e===document||e===window)){t.__root=e;return}var _=l.indexOf(e);if(_===-1)return;p<=_&&(o=p)}if(i=l[o]||t.target,i!==e){er(t,"currentTarget",{configurable:!0,get(){return i||r}});var v=b,d=E;Z(null),z(null);try{for(var a,h=[];i!==null;){var f=i.assignedSlot||i.parentNode||i.host||null;try{var m=i["__"+n];if(m!==void 0&&!i.disabled)if(xe(m)){var[s,...y]=m;s.apply(i,[t,...y])}else m.call(i,t)}catch(k){a?h.push(k):a=k}if(t.cancelBubble||f===e||f===null)break;i=f}if(a){for(let k of h)queueMicrotask(()=>{throw k});throw a}}finally{t.__root=e,delete t.currentTarget,Z(v),z(d)}}}function Zr(t){var e=document.createElement("template");return e.innerHTML=t,e.content}function Zt(t,e){var r=E;r.nodes_start===null&&(r.nodes_start=t,r.nodes_end=e)}function j(t,e){var r=(e&gr)!==0,n=(e&wr)!==0,l,i=!t.startsWith("<!>");return()=>{l===void 0&&(l=Zr(i?t:"<!>"+t),r||(l=jt(l)));var o=n?document.importNode(l,!0):l.cloneNode(!0);if(r){var c=jt(o),p=o.lastChild;Zt(c,p)}else Zt(o,o);return o}}function Nt(){var t=document.createDocumentFragment(),e=document.createComment(""),r=oe();return t.append(e,r),Zt(e,r),t}function T(t,e){t!==null&&t.before(e)}function ut(t,e){var r=e==null?"":typeof e=="object"?e+"":e;r!==(t.__t??(t.__t=t.nodeValue))&&(t.__t=r,t.nodeValue=r+"")}function zr(t,e){return tn(t,e)}const lt=new Map;function tn(t,{target:e,anchor:r,props:n={},events:l,context:i,intro:o=!0}){Tr();var c=new Set,p=d=>{for(var a=0;a<d.length;a++){var h=d[a];if(!c.has(h)){c.add(h);var f=Xr(h);e.addEventListener(h,vt,{passive:f});var m=lt.get(h);m===void 0?(document.addEventListener(h,vt,{passive:f}),lt.set(h,1)):lt.set(h,m+1)}}};p(zt(Je)),Qt.add(p);var _=void 0,v=Dr(()=>{var d=r??e.appendChild(oe());return wt(()=>{if(i){le({});var a=x;a.c=i}l&&(n.$$events=l),_=t(d,n)||{},i&&ie()}),()=>{var f;for(var a of c){e.removeEventListener(a,vt);var h=lt.get(a);--h===0?(document.removeEventListener(a,vt),lt.delete(a)):lt.set(a,h)}Qt.delete(p),d!==r&&((f=d.parentNode)==null||f.removeChild(d))}});return en.set(_,v),_}let en=new WeakMap;function _t(t,e,r=!1){var n=t,l=null,i=null,o=br,c=r?ee:0,p=!1;const _=(d,a=!0)=>{p=!0,v(a,d)},v=(d,a)=>{o!==(o=d)&&(o?(l?Ft(l):a&&(l=wt(()=>a(n))),i&&Dt(i,()=>{i=null})):(i?Ft(i):a&&(i=wt(()=>a(n))),l&&Dt(l,()=>{l=null})))};ue(()=>{p=!1,e(_),p||v(null,null)},c)}function ht(t,e){return e}function rn(t,e,r,n){for(var l=[],i=e.length,o=0;o<i;o++)se(e[o].e,l,!0);var c=i>0&&l.length===0&&r!==null;if(c){var p=r.parentNode;Ar(p),p.append(r),n.clear(),X(t,e[0].prev,e[i-1].next)}Ve(l,()=>{for(var _=0;_<i;_++){var v=e[_];c||(n.delete(v.k),X(t,v.prev,v.next)),Q(v.e,!c)}})}function mt(t,e,r,n,l,i=null){var o=t,c={items:new Map,first:null},p=(e&Ne)!==0;if(p){var _=t;o=_.appendChild(oe())}var v=null,d=!1,a=qe(()=>{var h=r();return xe(h)?h:h==null?[]:zt(h)});ue(()=>{var h=u(a),f=h.length;d&&f===0||(d=f===0,nn(h,c,o,l,e,n,r),i!==null&&(f===0?v?Ft(v):v=wt(()=>i(o)):v!==null&&Dt(v,()=>{v=null})),u(a))})}function nn(t,e,r,n,l,i,o){var Tt,At,G,et;var c=(l&hr)!==0,p=(l&(re|ne))!==0,_=t.length,v=e.items,d=e.first,a=d,h,f=null,m,s=[],y=[],A,k,g,w;if(c)for(w=0;w<_;w+=1)A=t[w],k=i(A,w),g=v.get(k),g!==void 0&&((Tt=g.a)==null||Tt.measure(),(m??(m=new Set)).add(g));for(w=0;w<_;w+=1){if(A=t[w],k=i(A,w),g=v.get(k),g===void 0){var tt=a?a.e.nodes_start:r;f=on(tt,e,f,f===null?e.first:f.next,A,k,w,n,l,o),v.set(k,f),s=[],y=[],a=f.next;continue}if(p&&ln(g,A,w,l),(g.e.f&H)!==0&&(Ft(g.e),c&&((At=g.a)==null||At.unfix(),(m??(m=new Set)).delete(g))),g!==a){if(h!==void 0&&h.has(g)){if(s.length<y.length){var F=y[0],D;f=F.prev;var W=s[0],ct=s[s.length-1];for(D=0;D<s.length;D+=1)Ee(s[D],F,r);for(D=0;D<y.length;D+=1)h.delete(y[D]);X(e,W.prev,ct.next),X(e,f,W),X(e,ct,F),a=F,f=ct,w-=1,s=[],y=[]}else h.delete(g),Ee(g,a,r),X(e,g.prev,g.next),X(e,g,f===null?e.first:f.next),X(e,f,g),f=g;continue}for(s=[],y=[];a!==null&&a.k!==k;)(a.e.f&H)===0&&(h??(h=new Set)).add(a),y.push(a),a=a.next;if(a===null)continue;g=a}s.push(g),f=g,a=g.next}if(a!==null||h!==void 0){for(var Y=h===void 0?[]:zt(h);a!==null;)(a.e.f&H)===0&&Y.push(a),a=a.next;var nt=Y.length;if(nt>0){var kt=(l&Ne)!==0&&_===0?r:null;if(c){for(w=0;w<nt;w+=1)(G=Y[w].a)==null||G.measure();for(w=0;w<nt;w+=1)(et=Y[w].a)==null||et.fix()}rn(e,Y,kt,v)}}c&&Ue(()=>{var rt;if(m!==void 0)for(g of m)(rt=g.a)==null||rt.apply()}),E.first=e.first&&e.first.e,E.last=f&&f.e}function ln(t,e,r,n){(n&re)!==0&&Wt(t.v,e),(n&ne)!==0?Wt(t.i,r):t.i=r}function on(t,e,r,n,l,i,o,c,p,_){var v=(p&re)!==0,d=(p&mr)===0,a=v?d?Oe(l):gt(l):l,h=(p&ne)===0?o:gt(o),f={i:h,v:a,k:i,a:null,e:null,prev:r,next:n};try{return f.e=wt(()=>c(t,a,h,_),kr),f.e.prev=r&&r.e,f.e.next=n&&n.e,r===null?e.first=f:(r.next=f,r.e.next=f.e),n!==null&&(n.prev=f,n.e.prev=f.e),f}finally{}}function Ee(t,e,r){for(var n=t.next?t.next.e.nodes_start:r,l=e?e.e.nodes_start:r,i=t.e.nodes_start;i!==n;){var o=Bt(i);l.before(i),i=o}}function X(t,e,r){e===null?t.first=r:(e.next=r,e.e.next=r&&r.e),r!==null&&(r.prev=e,r.e.prev=e&&e.e)}function an(t=!1){const e=x,r=e.l.u;if(!r)return;let n=()=>Yr(e.s);if(t){let l=0,i={};const o=ae(()=>{let c=!1;const p=e.s;for(const _ in p)p[_]!==i[_]&&(i[_]=p[_],c=!0);return c&&l++,l});n=()=>u(o)}r.b.length&&jr(()=>{ye(e,n),Ut(r.b)}),Yt(()=>{const l=ve(()=>r.m.map(lr));return()=>{for(const i of l)typeof i=="function"&&i()}}),r.a.length&&Yt(()=>{ye(e,n),Ut(r.a)})}function ye(t,e){if(t.l.s)for(const r of t.l.s)u(r);e()}function un(t){x===null&&Er(),yt&&x.l!==null?sn(x).m.push(t):Yt(()=>{const e=ve(t);if(typeof e=="function")return e})}function sn(t){var e=t.l;return e.u??(e.u={a:[],b:[],m:[]})}const fn="5";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(fn);pr();var cn=j('<div class="loading svelte-ex81hj">Loading recent games...</div>'),vn=j('<div class="error svelte-ex81hj"> </div> <button class="svelte-ex81hj">Try Again</button>',1),_n=j('<div class="no-boards svelte-ex81hj">No games found</div>'),dn=j('<div class="timestamp svelte-ex81hj"> </div>'),pn=j('<div class="mini-cell svelte-ex81hj"> </div>'),hn=j('<div class="board-item svelte-ex81hj"><h3 class="svelte-ex81hj"></h3> <!> <div class="mini-grid svelte-ex81hj"></div></div>'),mn=j('<div class="boards-list svelte-ex81hj"></div> <button class="refresh-button svelte-ex81hj">Refresh</button>',1),gn=j('<div class="boards-container svelte-ex81hj"><h2 class="svelte-ex81hj">Recent Games</h2> <!></div>');function wn(t,e){le(e,!1);let r=dt([]),n=dt(!0),l=dt(null);async function i(){try{C(n,!0),C(l,null);const v=await fetch("https://api.taranathan.com/boards");if(!v.ok)throw new Error("Failed to fetch board list");const d=await v.json();console.log(d);const h=d.slice(-5).reverse().map(async f=>{const m=await fetch(`https://api.taranathan.com/${f}`);if(console.log(`https://api.taranathan.com/${f}`),!m.ok)throw new Error(`Failed to fetch board ${f}`);const s=await m.json();return{id:f,board:s.board,timestamp:s.timestamp}});C(r,await Promise.all(h))}catch(v){C(l,v instanceof Error?v.message:"Unknown error occurred"),console.error(u(l))}finally{C(n,!1)}}un(i),an();var o=gn(),c=q(L(o),2);{var p=v=>{var d=cn();T(v,d)},_=v=>{var d=Nt(),a=K(d);{var h=m=>{var s=vn(),y=K(s),A=L(y),k=q(y,2);ot(()=>ut(A,`Error: ${u(l)??""}`)),it("click",k,i),T(m,s)},f=m=>{var s=Nt(),y=K(s);{var A=g=>{var w=_n();T(g,w)},k=g=>{var w=mn(),tt=K(w);mt(tt,5,()=>u(r),ht,(D,W,ct)=>{var Y=hn(),nt=L(Y);nt.textContent=`Game ${ct+1}`;var kt=q(nt,2);{var Tt=G=>{var et=dn(),rt=L(et);ot($t=>ut(rt,$t),[()=>new Date(u(W).timestamp).toLocaleString()],qe),T(G,et)};_t(kt,G=>{u(W).timestamp&&G(Tt)})}var At=q(kt,2);mt(At,5,()=>u(W).board,ht,(G,et)=>{var rt=Nt(),$t=K(rt);mt($t,1,()=>u(et),ht,(Qe,Ze)=>{var _e=pn(),ze=L(_e);ot(()=>ut(ze,u(Ze)||" ")),T(Qe,_e)}),T(G,rt)}),T(D,Y)});var F=q(tt,2);it("click",F,i),T(g,w)};_t(y,g=>{u(r).length===0?g(A):g(k,!1)},!0)}T(m,s)};_t(a,m=>{u(l)?m(h):m(f,!1)},!0)}T(v,d)};_t(c,v=>{u(n)?v(p):v(_,!1)})}T(t,o),ie()}const bn="/assets/boing-Q-R3vnfy.mp3";function En(t,e,r){C(e,u(e)+Math.floor(Math.random()*8)),r.load(),r.play()}var yn=j('<button class="button svelte-bp979g"> </button>');function xn(t,e){le(e,!0);const r=new Audio(bn);let n=yr(0);var l=yn();l.__click=[En,n,r];var i=L(l);ot(()=>ut(i,`clicky here for ${u(n)??""} num`)),T(t,l),ie()}Qr(["click"]);var kn=j('<div class="cell svelte-5g3qxt" role="button" tabindex="0"> </div>'),Tn=j('<div class="winner svelte-5g3qxt"> </div>'),An=j('<div class="grid svelte-5g3qxt"></div> <!> <button class="button svelte-5g3qxt">Reset Game</button> <button class="button svelte-5g3qxt">Upload</button>',1);function Cn(t){let e=dt([["","",""],["","",""],["","",""]]),r="X",n=dt(null),l=!1;function i(){for(let s=0;s<3;s++)if(u(e)[s][0]!==""&&u(e)[s][0]===u(e)[s][1]&&u(e)[s][0]===u(e)[s][2])return C(n,u(e)[s][0]),!0;for(let s=0;s<3;s++)if(u(e)[0][s]!==""&&u(e)[0][s]===u(e)[1][s]&&u(e)[0][s]===u(e)[2][s])return C(n,u(e)[0][s]),!0;if(u(e)[0][0]!==""&&u(e)[0][0]===u(e)[1][1]&&u(e)[0][0]===u(e)[2][2])return C(n,u(e)[0][0]),!0;if(u(e)[0][2]!==""&&u(e)[0][2]===u(e)[1][1]&&u(e)[0][2]===u(e)[2][0])return C(n,u(e)[0][2]),!0;let m=!0;for(let s=0;s<3;s++){for(let y=0;y<3;y++)if(u(e)[s][y]===""){m=!1;break}if(!m)break}return m?(C(n,"Tie"),!0):!1}function o(m,s){if(!(u(e)[m][s]!==""||l)){if(xr(e,u(e)[m][s]=r),C(e,[...u(e)]),i()){l=!0;return}r=r==="X"?"O":"X"}}function c(){C(e,[["","",""],["","",""],["","",""]]),r="X",C(n,null),l=!1}async function p(){await fetch("https://api.taranathan.com/boards",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({board:u(e)})})}var _=An(),v=K(_);mt(v,5,()=>u(e),ht,(m,s,y)=>{var A=Nt(),k=K(A);mt(k,1,()=>u(s),ht,(g,w,tt)=>{var F=kn(),D=L(F);ot(()=>ut(D,u(w))),it("click",F,()=>o(y,tt)),it("keydown",F,W=>W.key==="Enter"&&o(y,tt)),T(g,F)}),T(m,A)});var d=q(v,2);{var a=m=>{var s=Tn(),y=L(s);ot(()=>ut(y,`Winner: ${u(n)??""}`)),T(m,s)};_t(d,m=>{u(n)&&m(a)})}var h=q(d,2),f=q(h,2);it("click",h,()=>c()),it("click",f,()=>p()),T(t,_)}var Nn=j('<div class="container svelte-1bsjjhr"><p class="text svelte-1bsjjhr">Have Fun!</p></div> <!> <div class="button-container svelte-1bsjjhr"><div class="button-position svelte-1bsjjhr"><!></div></div> <!>',1);function On(t){var e=Nn(),r=q(K(e),2);Cn(r);var n=q(r,2),l=L(n),i=L(l);xn(i,{});var o=q(n,2);wn(o,{}),T(t,e)}zr(On,{target:document.getElementById("app")});
