(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))l(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const u of i.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&l(u)}).observe(document,{childList:!0,subtree:!0});function r(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerPolicy&&(i.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?i.credentials="include":n.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function l(n){if(n.ep)return;n.ep=!0;const i=r(n);fetch(n.href,i)}})();const yt=!1;var lt=Array.isArray,fr=Array.prototype.indexOf,it=Array.from,vr=Object.defineProperty,me=Object.getOwnPropertyDescriptor,cr=Object.prototype,_r=Array.prototype,dr=Object.getPrototypeOf;function hr(e){for(var t=0;t<e.length;t++)e[t]()}const B=2,Ct=4,$e=8,at=16,J=32,xe=64,qe=128,V=256,Le=512,P=1024,Q=2048,ve=4096,K=8192,Ue=16384,pr=32768,ut=65536,gr=1<<19,Pt=1<<20,Qe=Symbol("$state");function St(e){return e===this.v}function mr(e,t){return e!=e?t==t:e!==t||e!==null&&typeof e=="object"||typeof e=="function"}function Rt(e){return!mr(e,this.v)}function br(e){throw new Error("https://svelte.dev/e/effect_in_teardown")}function wr(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function yr(e){throw new Error("https://svelte.dev/e/effect_orphan")}function Er(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function xr(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function kr(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function Tr(){throw new Error("https://svelte.dev/e/state_unsafe_local_read")}function Nr(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}let ke=!1,Ar=!1;function Or(){ke=!0}const st=1,ot=2,Dt=4,Cr=8,Pr=16,Sr=1,Rr=2,R=Symbol();function Dr(e){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}let k=null;function Et(e){k=e}function ft(e,t=!1,r){k={p:k,c:null,e:null,m:!1,s:e,x:null,l:null},ke&&!t&&(k.l={s:null,u:null,r1:[],r2:L(!1)})}function vt(e){const t=k;if(t!==null){const u=t.e;if(u!==null){var r=x,l=E;t.e=null;try{for(var n=0;n<u.length;n++){var i=u[n];ie(i.effect),le(i.reaction),Vt(i.fn)}}finally{ie(r),le(l)}}k=t.p,t.m=!0}return{}}function We(){return!ke||k!==null&&k.l===null}function L(e,t){var r={f:0,v:e,reactions:null,equals:St,rv:0,wv:0};return r}function oe(e){return Lt(L(e))}function qt(e,t=!1){var l;const r=L(e);return t||(r.equals=Rt),ke&&k!==null&&k.l!==null&&((l=k.l).s??(l.s=[])).push(r),r}function xt(e,t=!1){return Lt(qt(e,t))}function Lt(e){return E!==null&&!X&&(E.f&B)!==0&&(H===null?Kr([e]):H.push(e)),e}function qr(e,t){return y(e,er(()=>f(e))),t}function y(e,t){return E!==null&&!X&&We()&&(E.f&(B|at))!==0&&(H===null||!H.includes(e))&&Nr(),Ze(e,t)}function Ze(e,t){return e.equals(t)||(e.v,e.v=t,e.wv=Jt(),Ft(e,Q),We()&&x!==null&&(x.f&P)!==0&&(x.f&(J|xe))===0&&(G===null?Xr([e]):G.push(e))),t}function Ft(e,t){var r=e.reactions;if(r!==null)for(var l=We(),n=r.length,i=0;i<n;i++){var u=r[i],_=u.f;(_&Q)===0&&(!l&&u===x||($(u,t),(_&(P|V))!==0&&((_&B)!==0?Ft(u,ve):Ke(u))))}}let Lr=!1;function z(e,t=null,r){if(typeof e!="object"||e===null||Qe in e)return e;const l=dr(e);if(l!==cr&&l!==_r)return e;var n=new Map,i=lt(e),u=L(0);i&&n.set("length",L(e.length));var _;return new Proxy(e,{defineProperty(v,s,o){(!("value"in o)||o.configurable===!1||o.enumerable===!1||o.writable===!1)&&xr();var c=n.get(s);return c===void 0?(c=L(o.value),n.set(s,c)):y(c,z(o.value,_)),!0},deleteProperty(v,s){var o=n.get(s);if(o===void 0)s in v&&n.set(s,L(R));else{if(i&&typeof s=="string"){var c=n.get("length"),a=Number(s);Number.isInteger(a)&&a<c.v&&y(c,a)}y(o,R),kt(u)}return!0},get(v,s,o){var h;if(s===Qe)return e;var c=n.get(s),a=s in v;if(c===void 0&&(!a||(h=me(v,s))!=null&&h.writable)&&(c=L(z(a?v[s]:R,_)),n.set(s,c)),c!==void 0){var d=f(c);return d===R?void 0:d}return Reflect.get(v,s,o)},getOwnPropertyDescriptor(v,s){var o=Reflect.getOwnPropertyDescriptor(v,s);if(o&&"value"in o){var c=n.get(s);c&&(o.value=f(c))}else if(o===void 0){var a=n.get(s),d=a==null?void 0:a.v;if(a!==void 0&&d!==R)return{enumerable:!0,configurable:!0,value:d,writable:!0}}return o},has(v,s){var d;if(s===Qe)return!0;var o=n.get(s),c=o!==void 0&&o.v!==R||Reflect.has(v,s);if(o!==void 0||x!==null&&(!c||(d=me(v,s))!=null&&d.writable)){o===void 0&&(o=L(c?z(v[s],_):R),n.set(s,o));var a=f(o);if(a===R)return!1}return c},set(v,s,o,c){var N;var a=n.get(s),d=s in v;if(i&&s==="length")for(var h=o;h<a.v;h+=1){var g=n.get(h+"");g!==void 0?y(g,R):h in v&&(g=L(R),n.set(h+"",g))}a===void 0?(!d||(N=me(v,s))!=null&&N.writable)&&(a=L(void 0),y(a,z(o,_)),n.set(s,a)):(d=a.v!==R,y(a,z(o,_)));var p=Reflect.getOwnPropertyDescriptor(v,s);if(p!=null&&p.set&&p.set.call(c,o),!d){if(i&&typeof s=="string"){var b=n.get("length"),T=Number(s);Number.isInteger(T)&&T>=b.v&&y(b,T+1)}kt(u)}return!0},ownKeys(v){f(u);var s=Reflect.ownKeys(v).filter(a=>{var d=n.get(a);return d===void 0||d.v!==R});for(var[o,c]of n)c.v!==R&&!(o in v)&&s.push(o);return s},setPrototypeOf(){kr()}})}function kt(e,t=1){y(e,e.v+t)}var Tt,It,Mt;function Fr(){if(Tt===void 0){Tt=window;var e=Element.prototype,t=Node.prototype;It=me(t,"firstChild").get,Mt=me(t,"nextSibling").get,e.__click=void 0,e.__className="",e.__attributes=null,e.__styles=null,e.__e=void 0,Text.prototype.__t=void 0}}function ct(e=""){return document.createTextNode(e)}function Fe(e){return It.call(e)}function Ye(e){return Mt.call(e)}function F(e,t){return Fe(e)}function Y(e,t){{var r=Fe(e);return r instanceof Comment&&r.data===""?Ye(r):r}}function O(e,t=1,r=!1){let l=e;for(;t--;)l=Ye(l);return l}function Ir(e){e.textContent=""}function Bt(e){var t=B|Q,r=E!==null&&(E.f&B)!==0?E:null;return x===null||r!==null&&(r.f&V)!==0?t|=V:x.f|=Pt,{ctx:k,deps:null,effects:null,equals:St,f:t,fn:e,reactions:null,rv:0,v:null,wv:0,parent:r??x}}function Mr(e){const t=Bt(e);return t.equals=Rt,t}function jt(e){var t=e.effects;if(t!==null){e.effects=null;for(var r=0;r<t.length;r+=1)ne(t[r])}}function Br(e){for(var t=e.parent;t!==null;){if((t.f&B)===0)return t;t=t.parent}return null}function jr(e){var t,r=x;ie(Br(e));try{jt(e),t=Zt(e)}finally{ie(r)}return t}function Ht(e){var t=jr(e),r=(re||(e.f&V)!==0)&&e.deps!==null?ve:P;$(e,r),e.equals(t)||(e.v=t,e.wv=Jt())}function Hr(e){x===null&&E===null&&yr(),E!==null&&(E.f&V)!==0&&x===null&&wr(),ht&&br()}function Vr(e,t){var r=t.last;r===null?t.last=t.first=e:(r.next=e,e.prev=r,t.last=e)}function Te(e,t,r,l=!0){var n=(e&xe)!==0,i=x,u={ctx:k,deps:null,nodes_start:null,nodes_end:null,f:e|Q,first:null,fn:t,last:null,next:null,parent:n?null:i,prev:null,teardown:null,transitions:null,wv:0};if(r){var _=fe;try{Nt(!0),pt(u),u.f|=pr}catch(o){throw ne(u),o}finally{Nt(_)}}else t!==null&&Ke(u);var v=r&&u.deps===null&&u.first===null&&u.nodes_start===null&&u.teardown===null&&(u.f&(Pt|qe))===0;if(!v&&!n&&l&&(i!==null&&Vr(u,i),E!==null&&(E.f&B)!==0)){var s=E;(s.effects??(s.effects=[])).push(u)}return u}function $r(e){const t=Te($e,null,!1);return $(t,P),t.teardown=e,t}function Ur(e){Hr();var t=x!==null&&(x.f&J)!==0&&k!==null&&!k.m;if(t){var r=k;(r.e??(r.e=[])).push({fn:e,effect:x,reaction:E})}else{var l=Vt(e);return l}}function Wr(e){const t=Te(xe,e,!0);return(r={})=>new Promise(l=>{r.outro?Ie(t,()=>{ne(t),l(void 0)}):(ne(t),l(void 0))})}function Vt(e){return Te(Ct,e,!1)}function ee(e,t=[],r=Bt){const l=t.map(r);return _t(()=>e(...l.map(f)))}function _t(e,t=0){return Te($e|at|t,e,!0)}function Ee(e,t=!0){return Te($e|J,e,!0,t)}function $t(e){var t=e.teardown;if(t!==null){const r=ht,l=E;At(!0),le(null);try{t.call(null)}finally{At(r),le(l)}}}function Ut(e,t=!1){var r=e.first;for(e.first=e.last=null;r!==null;){var l=r.next;ne(r,t),r=l}}function Yr(e){for(var t=e.first;t!==null;){var r=t.next;(t.f&J)===0&&ne(t),t=r}}function ne(e,t=!0){var r=!1;if((t||(e.f&gr)!==0)&&e.nodes_start!==null){for(var l=e.nodes_start,n=e.nodes_end;l!==null;){var i=l===n?null:Ye(l);l.remove(),l=i}r=!0}Ut(e,t&&!r),Ve(e,0),$(e,Ue);var u=e.transitions;if(u!==null)for(const v of u)v.stop();$t(e);var _=e.parent;_!==null&&_.first!==null&&Wt(e),e.next=e.prev=e.teardown=e.ctx=e.deps=e.fn=e.nodes_start=e.nodes_end=null}function Wt(e){var t=e.parent,r=e.prev,l=e.next;r!==null&&(r.next=l),l!==null&&(l.prev=r),t!==null&&(t.first===e&&(t.first=l),t.last===e&&(t.last=r))}function Ie(e,t){var r=[];dt(e,r,!0),Yt(r,()=>{ne(e),t&&t()})}function Yt(e,t){var r=e.length;if(r>0){var l=()=>--r||t();for(var n of e)n.out(l)}else t()}function dt(e,t,r){if((e.f&K)===0){if(e.f^=K,e.transitions!==null)for(const u of e.transitions)(u.is_global||r)&&t.push(u);for(var l=e.first;l!==null;){var n=l.next,i=(l.f&ut)!==0||(l.f&J)!==0;dt(l,t,i?r:!1),l=n}}}function Me(e){Gt(e,!0)}function Gt(e,t){if((e.f&K)!==0){e.f^=K,(e.f&P)===0&&(e.f^=P),Ne(e)&&($(e,Q),Ke(e));for(var r=e.first;r!==null;){var l=r.next,n=(r.f&ut)!==0||(r.f&J)!==0;Gt(r,n?t:!1),r=l}if(e.transitions!==null)for(const i of e.transitions)(i.is_global||t)&&i.in()}}let ze=!1,et=[];function Gr(){ze=!1;const e=et.slice();et=[],hr(e)}function Kt(e){ze||(ze=!0,queueMicrotask(Gr)),et.push(e)}let Re=!1,Be=!1,je=null,fe=!1,ht=!1;function Nt(e){fe=e}function At(e){ht=e}let tt=[],be=0;let E=null,X=!1;function le(e){E=e}let x=null;function ie(e){x=e}let H=null;function Kr(e){H=e}let C=null,q=0,G=null;function Xr(e){G=e}let Xt=1,He=0,re=!1;function Jt(){return++Xt}function Ne(e){var s;var t=e.f;if((t&Q)!==0)return!0;if((t&ve)!==0){var r=e.deps,l=(t&V)!==0;if(r!==null){var n,i,u=(t&Le)!==0,_=l&&x!==null&&!re,v=r.length;if(u||_){for(n=0;n<v;n++)i=r[n],(u||!((s=i==null?void 0:i.reactions)!=null&&s.includes(e)))&&(i.reactions??(i.reactions=[])).push(e);u&&(e.f^=Le)}for(n=0;n<v;n++)if(i=r[n],Ne(i)&&Ht(i),i.wv>e.wv)return!0}(!l||x!==null&&!re)&&$(e,P)}return!1}function Jr(e,t){for(var r=t;r!==null;){if((r.f&qe)!==0)try{r.fn(e);return}catch{r.f^=qe}r=r.parent}throw Re=!1,e}function Qr(e){return(e.f&Ue)===0&&(e.parent===null||(e.parent.f&qe)===0)}function Ge(e,t,r,l){if(Re){if(r===null&&(Re=!1),Qr(t))throw e;return}r!==null&&(Re=!0);{Jr(e,t);return}}function Qt(e,t,r=0){var l=e.reactions;if(l!==null)for(var n=0;n<l.length;n++){var i=l[n];(i.f&B)!==0?Qt(i,t,r+1):t===i&&(r===0?$(i,Q):(i.f&P)!==0&&$(i,ve),Ke(i))}}function Zt(e){var d;var t=C,r=q,l=G,n=E,i=re,u=H,_=k,v=X,s=e.f;C=null,q=0,G=null,E=(s&(J|xe))===0?e:null,re=(s&V)!==0&&(!fe||n===null||v),H=null,Et(e.ctx),X=!1,He++;try{var o=(0,e.fn)(),c=e.deps;if(C!==null){var a;if(Ve(e,q),c!==null&&q>0)for(c.length=q+C.length,a=0;a<C.length;a++)c[q+a]=C[a];else e.deps=c=C;if(!re)for(a=q;a<c.length;a++)((d=c[a]).reactions??(d.reactions=[])).push(e)}else c!==null&&q<c.length&&(Ve(e,q),c.length=q);if(We()&&G!==null&&(e.f&(B|ve|Q))===0)for(a=0;a<G.length;a++)Qt(G[a],e);return n!==null&&He++,o}finally{C=t,q=r,G=l,E=n,re=i,H=u,Et(_),X=v}}function Zr(e,t){let r=t.reactions;if(r!==null){var l=fr.call(r,e);if(l!==-1){var n=r.length-1;n===0?r=t.reactions=null:(r[l]=r[n],r.pop())}}r===null&&(t.f&B)!==0&&(C===null||!C.includes(t))&&($(t,ve),(t.f&(V|Le))===0&&(t.f^=Le),jt(t),Ve(t,0))}function Ve(e,t){var r=e.deps;if(r!==null)for(var l=t;l<r.length;l++)Zr(e,r[l])}function pt(e){var t=e.f;if((t&Ue)===0){$(e,P);var r=x,l=k;x=e;try{(t&at)!==0?Yr(e):Ut(e),$t(e);var n=Zt(e);e.teardown=typeof n=="function"?n:null,e.wv=Xt;var i=e.deps,u;yt&&Ar&&e.f&Q}catch(_){Ge(_,e,r,l||e.ctx)}finally{x=r}}}function zr(){if(be>1e3){be=0;try{Er()}catch(e){if(je!==null)Ge(e,je,null);else throw e}}be++}function en(e){var t=e.length;if(t!==0){zr();var r=fe;fe=!0;try{for(var l=0;l<t;l++){var n=e[l];(n.f&P)===0&&(n.f^=P);var i=[];zt(n,i),tn(i)}}finally{fe=r}}}function tn(e){var t=e.length;if(t!==0)for(var r=0;r<t;r++){var l=e[r];if((l.f&(Ue|K))===0)try{Ne(l)&&(pt(l),l.deps===null&&l.first===null&&l.nodes_start===null&&(l.teardown===null?Wt(l):l.fn=null))}catch(n){Ge(n,l,null,l.ctx)}}}function rn(){if(Be=!1,be>1001)return;const e=tt;tt=[],en(e),Be||(be=0,je=null)}function Ke(e){Be||(Be=!0,queueMicrotask(rn)),je=e;for(var t=e;t.parent!==null;){t=t.parent;var r=t.f;if((r&(xe|J))!==0){if((r&P)===0)return;t.f^=P}}tt.push(t)}function zt(e,t){var r=e.first,l=[];e:for(;r!==null;){var n=r.f,i=(n&J)!==0,u=i&&(n&P)!==0,_=r.next;if(!u&&(n&K)===0)if((n&$e)!==0){if(i)r.f^=P;else{var v=E;try{E=r,Ne(r)&&pt(r)}catch(a){Ge(a,r,null,r.ctx)}finally{E=v}}var s=r.first;if(s!==null){r=s;continue}}else(n&Ct)!==0&&l.push(r);if(_===null){let a=r.parent;for(;a!==null;){if(e===a)break e;var o=a.next;if(o!==null){r=o;continue e}a=a.parent}}r=_}for(var c=0;c<l.length;c++)s=l[c],t.push(s),zt(s,t)}function f(e){var t=e.f,r=(t&B)!==0;if(E!==null&&!X){H!==null&&H.includes(e)&&Tr();var l=E.deps;e.rv<He&&(e.rv=He,C===null&&l!==null&&l[q]===e?q++:C===null?C=[e]:(!re||!C.includes(e))&&C.push(e))}else if(r&&e.deps===null&&e.effects===null){var n=e,i=n.parent;i!==null&&(i.f&V)===0&&(n.f^=V)}return r&&(n=e,Ne(n)&&Ht(n)),e.v}function er(e){var t=X;try{return X=!0,e()}finally{X=t}}const nn=-7169;function $(e,t){e.f=e.f&nn|t}const ln=["touchstart","touchmove"];function an(e){return ln.includes(e)}function un(e){var t=E,r=x;le(null),ie(null);try{return e()}finally{le(t),ie(r)}}const tr=new Set,rt=new Set;function sn(e,t,r,l={}){function n(i){if(l.capture||pe.call(t,i),!i.cancelBubble)return un(()=>r==null?void 0:r.call(this,i))}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?Kt(()=>{t.addEventListener(e,n,l)}):t.addEventListener(e,n,l),n}function Se(e,t,r,l,n){var i={capture:l,passive:n},u=sn(e,t,r,i);(t===document.body||t===window||t===document)&&$r(()=>{t.removeEventListener(e,u,i)})}function rr(e){for(var t=0;t<e.length;t++)tr.add(e[t]);for(var r of rt)r(e)}function pe(e){var T;var t=this,r=t.ownerDocument,l=e.type,n=((T=e.composedPath)==null?void 0:T.call(e))||[],i=n[0]||e.target,u=0,_=e.__root;if(_){var v=n.indexOf(_);if(v!==-1&&(t===document||t===window)){e.__root=t;return}var s=n.indexOf(t);if(s===-1)return;v<=s&&(u=v)}if(i=n[u]||e.target,i!==t){vr(e,"currentTarget",{configurable:!0,get(){return i||r}});var o=E,c=x;le(null),ie(null);try{for(var a,d=[];i!==null;){var h=i.assignedSlot||i.parentNode||i.host||null;try{var g=i["__"+l];if(g!==void 0&&!i.disabled)if(lt(g)){var[p,...b]=g;p.apply(i,[e,...b])}else g.call(i,e)}catch(N){a?d.push(N):a=N}if(e.cancelBubble||h===t||h===null)break;i=h}if(a){for(let N of d)queueMicrotask(()=>{throw N});throw a}}finally{e.__root=t,delete e.currentTarget,le(o),ie(c)}}}function on(e){var t=document.createElement("template");return t.innerHTML=e,t.content}function nt(e,t){var r=x;r.nodes_start===null&&(r.nodes_start=e,r.nodes_end=t)}function I(e,t){var r=(t&Sr)!==0,l=(t&Rr)!==0,n,i=!e.startsWith("<!>");return()=>{n===void 0&&(n=on(i?e:"<!>"+e),r||(n=Fe(n)));var u=l?document.importNode(n,!0):n.cloneNode(!0);if(r){var _=Fe(u),v=u.lastChild;nt(_,v)}else nt(u,u);return u}}function De(){var e=document.createDocumentFragment(),t=document.createComment(""),r=ct();return e.append(t,r),nt(t,r),e}function A(e,t){e!==null&&e.before(t)}function te(e,t){var r=t==null?"":typeof t=="object"?t+"":t;r!==(e.__t??(e.__t=e.nodeValue))&&(e.__t=r,e.nodeValue=r+"")}function fn(e,t){return vn(e,t)}const se=new Map;function vn(e,{target:t,anchor:r,props:l={},events:n,context:i,intro:u=!0}){Fr();var _=new Set,v=c=>{for(var a=0;a<c.length;a++){var d=c[a];if(!_.has(d)){_.add(d);var h=an(d);t.addEventListener(d,pe,{passive:h});var g=se.get(d);g===void 0?(document.addEventListener(d,pe,{passive:h}),se.set(d,1)):se.set(d,g+1)}}};v(it(tr)),rt.add(v);var s=void 0,o=Wr(()=>{var c=r??t.appendChild(ct());return Ee(()=>{if(i){ft({});var a=k;a.c=i}n&&(l.$$events=n),s=e(c,l)||{},i&&vt()}),()=>{var h;for(var a of _){t.removeEventListener(a,pe);var d=se.get(a);--d===0?(document.removeEventListener(a,pe),se.delete(a)):se.set(a,d)}rt.delete(v),c!==r&&((h=c.parentNode)==null||h.removeChild(c))}});return cn.set(s,o),s}let cn=new WeakMap;function ge(e,t,r=!1){var l=e,n=null,i=null,u=R,_=r?ut:0,v=!1;const s=(c,a=!0)=>{v=!0,o(a,c)},o=(c,a)=>{u!==(u=c)&&(u?(n?Me(n):a&&(n=Ee(()=>a(l))),i&&Ie(i,()=>{i=null})):(i?Me(i):a&&(i=Ee(()=>a(l))),n&&Ie(n,()=>{n=null})))};_t(()=>{v=!1,t(s),v||o(null,null)},_)}function we(e,t){return t}function _n(e,t,r,l){for(var n=[],i=t.length,u=0;u<i;u++)dt(t[u].e,n,!0);var _=i>0&&n.length===0&&r!==null;if(_){var v=r.parentNode;Ir(v),v.append(r),l.clear(),Z(e,t[0].prev,t[i-1].next)}Yt(n,()=>{for(var s=0;s<i;s++){var o=t[s];_||(l.delete(o.k),Z(e,o.prev,o.next)),ne(o.e,!_)}})}function ye(e,t,r,l,n,i=null){var u=e,_={items:new Map,first:null},v=(t&Dt)!==0;if(v){var s=e;u=s.appendChild(ct())}var o=null,c=!1,a=Mr(()=>{var d=r();return lt(d)?d:d==null?[]:it(d)});_t(()=>{var d=f(a),h=d.length;c&&h===0||(c=h===0,dn(d,_,u,n,t,l,r),i!==null&&(h===0?o?Me(o):o=Ee(()=>i(u)):o!==null&&Ie(o,()=>{o=null})),f(a))})}function dn(e,t,r,l,n,i,u){var _e,Ae,de,Oe;var _=(n&Cr)!==0,v=(n&(st|ot))!==0,s=e.length,o=t.items,c=t.first,a=c,d,h=null,g,p=[],b=[],T,N,m,w;if(_)for(w=0;w<s;w+=1)T=e[w],N=i(T,w),m=o.get(N),m!==void 0&&((_e=m.a)==null||_e.measure(),(g??(g=new Set)).add(m));for(w=0;w<s;w+=1){if(T=e[w],N=i(T,w),m=o.get(N),m===void 0){var U=a?a.e.nodes_start:r;h=pn(U,t,h,h===null?t.first:h.next,T,N,w,l,n,u),o.set(N,h),p=[],b=[],a=h.next;continue}if(v&&hn(m,T,w,n),(m.e.f&K)!==0&&(Me(m.e),_&&((Ae=m.a)==null||Ae.unfix(),(g??(g=new Set)).delete(m))),m!==a){if(d!==void 0&&d.has(m)){if(p.length<b.length){var D=b[0],S;h=D.prev;var M=p[0],W=p[p.length-1];for(S=0;S<p.length;S+=1)Ot(p[S],D,r);for(S=0;S<b.length;S+=1)d.delete(b[S]);Z(t,M.prev,W.next),Z(t,h,M),Z(t,W,D),a=D,h=W,w-=1,p=[],b=[]}else d.delete(m),Ot(m,a,r),Z(t,m.prev,m.next),Z(t,m,h===null?t.first:h.next),Z(t,h,m),h=m;continue}for(p=[],b=[];a!==null&&a.k!==N;)(a.e.f&K)===0&&(d??(d=new Set)).add(a),b.push(a),a=a.next;if(a===null)continue;m=a}p.push(m),h=m,a=m.next}if(a!==null||d!==void 0){for(var j=d===void 0?[]:it(d);a!==null;)(a.e.f&K)===0&&j.push(a),a=a.next;var ae=j.length;if(ae>0){var ce=(n&Dt)!==0&&s===0?r:null;if(_){for(w=0;w<ae;w+=1)(de=j[w].a)==null||de.measure();for(w=0;w<ae;w+=1)(Oe=j[w].a)==null||Oe.fix()}_n(t,j,ce,o)}}_&&Kt(()=>{var ue;if(g!==void 0)for(m of g)(ue=m.a)==null||ue.apply()}),x.first=t.first&&t.first.e,x.last=h&&h.e}function hn(e,t,r,l){(l&st)!==0&&Ze(e.v,t),(l&ot)!==0?Ze(e.i,r):e.i=r}function pn(e,t,r,l,n,i,u,_,v,s){var o=(v&st)!==0,c=(v&Pr)===0,a=o?c?qt(n):L(n):n,d=(v&ot)===0?u:L(u),h={i:d,v:a,k:i,a:null,e:null,prev:r,next:l};try{return h.e=Ee(()=>_(e,a,d,s),Lr),h.e.prev=r&&r.e,h.e.next=l&&l.e,r===null?t.first=h:(r.next=h,r.e.next=h.e),l!==null&&(l.prev=h,l.e.prev=h.e),h}finally{}}function Ot(e,t,r){for(var l=e.next?e.next.e.nodes_start:r,n=t?t.e.nodes_start:r,i=e.e.nodes_start;i!==l;){var u=Ye(i);n.before(i),i=u}}function Z(e,t,r){t===null?e.first=r:(t.next=r,t.e.next=r&&r.e),r!==null&&(r.prev=t,r.e.prev=t&&t.e)}function gn(e){k===null&&Dr(),ke&&k.l!==null?mn(k).m.push(e):Ur(()=>{const t=er(e);if(typeof t=="function")return t})}function mn(e){var t=e.l;return t.u??(t.u={a:[],b:[],m:[]})}const bn="5";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(bn);Or();function wn(e,t,r,l,n){f(t)*r<f(l)&&(y(t,f(t)+1),n())}function yn(e,t,r){f(t)>1&&(y(t,f(t)-1),r())}var En=I('<div class="loading svelte-sibc0x">Loading recent games...</div>'),xn=I('<div class="error svelte-sibc0x"> </div> <button class="svelte-sibc0x">Try Again</button>',1),kn=I('<div class="no-boards svelte-sibc0x">No games found</div> <button class="refresh-button svelte-sibc0x">Refresh</button>',1),Tn=I('<div class="timestamp svelte-sibc0x"> </div>'),Nn=I('<div class="mini-cell svelte-sibc0x"> </div>'),An=I('<div class="board-item svelte-sibc0x"><h3 class="svelte-sibc0x"> </h3> <!> <div class="mini-grid svelte-sibc0x"></div></div>'),On=I('<div class="boards-list svelte-sibc0x"></div> <div class="pagination-controls svelte-sibc0x"><button class="pagination-button svelte-sibc0x">Previous</button> <span class="page-info svelte-sibc0x"> </span> <button class="pagination-button svelte-sibc0x">Next</button></div> <button class="refresh-button svelte-sibc0x">Refresh</button>',1),Cn=I('<div class="boards-container svelte-sibc0x"><h2 class="svelte-sibc0x">Recent Games</h2> <!></div>');function Pn(e,t){ft(t,!0);let r=oe(z([])),l=oe(!0),n=oe(null),i=oe(0),u=[],_=oe(1);const v=5;async function s(){try{y(l,!0),y(n,null),u=(await(await fetch("https://api.taranathan.com/boards")).json()).rows.map(b=>({id:b.id.toString(),board:b.board,timestamp:b.date})),u.sort((b,T)=>{const N=b.timestamp?new Date(b.timestamp).getTime():0;return(T.timestamp?new Date(T.timestamp).getTime():0)-N}),y(i,z(u.length)),console.log("totalBoards:",f(i)),o(),y(n,null)}catch(g){console.error("Error fetching boards:",g),y(n,"Failed to fetch boards. Please try again later.")}finally{y(l,!1)}}function o(){y(r,z(u.slice((f(_)-1)*v,f(_)*v)))}gn(s);var c=Cn(),a=O(F(c),2);{var d=g=>{var p=En();A(g,p)},h=g=>{var p=De(),b=Y(p);{var T=m=>{var w=xn(),U=Y(w),D=F(U),S=O(U,2);S.__click=s,ee(()=>te(D,`Error: ${f(n)??""}`)),A(m,w)},N=m=>{var w=De(),U=Y(w);{var D=M=>{var W=kn(),j=O(Y(W),2);j.__click=s,A(M,W)},S=M=>{var W=On(),j=Y(W);ye(j,21,()=>f(r),we,(ue,Xe,nr)=>{var gt=An(),mt=F(gt),lr=F(mt),bt=O(mt,2);{var ir=he=>{var Ce=Tn(),Pe=F(Ce);ee(Je=>te(Pe,Je),[()=>new Date(f(Xe).timestamp).toLocaleString()]),A(he,Ce)};ge(bt,he=>{f(Xe).timestamp&&he(ir)})}var ar=O(bt,2);ye(ar,21,()=>f(Xe).board,we,(he,Ce)=>{var Pe=De(),Je=Y(Pe);ye(Je,17,()=>f(Ce),we,(ur,sr)=>{var wt=Nn(),or=F(wt);ee(()=>te(or,f(sr)||" ")),A(ur,wt)}),A(he,Pe)}),ee(()=>te(lr,`Game ${(f(_)-1)*v+nr+1}`)),A(ue,gt)});var ae=O(j,2),ce=F(ae);ce.__click=[yn,_,o];var _e=O(ce,2),Ae=F(_e),de=O(_e,2);de.__click=[wn,_,v,i,o];var Oe=O(ae,2);Oe.__click=s,ee(ue=>{ce.disabled=f(_)===1,te(Ae,`Page ${f(_)??""} of ${ue??""}`),de.disabled=f(_)*v>=f(i)},[()=>Math.ceil(f(i)/v)]),A(M,W)};ge(U,M=>{f(r).length===0?M(D):M(S,!1)},!0)}A(m,w)};ge(b,m=>{f(n)?m(T):m(N,!1)},!0)}A(g,p)};ge(a,g=>{f(l)?g(d):g(h,!1)})}A(e,c),vt()}rr(["click"]);const Sn="/assets/boing-Q-R3vnfy.mp3";function Rn(e,t,r){y(t,f(t)+Math.floor(Math.random()*8)),r.load(),r.play()}var Dn=I('<button class="button svelte-bp979g"> </button>');function qn(e,t){ft(t,!0);const r=new Audio(Sn);let l=oe(0);var n=Dn();n.__click=[Rn,l,r];var i=F(n);ee(()=>te(i,`clicky here for ${f(l)??""} num`)),A(e,n),vt()}rr(["click"]);var Ln=I('<div class="cell svelte-5g3qxt" role="button" tabindex="0"> </div>'),Fn=I('<div class="winner svelte-5g3qxt"> </div>'),In=I('<div class="grid svelte-5g3qxt"></div> <!> <button class="button svelte-5g3qxt">Reset Game</button> <button class="button svelte-5g3qxt">Upload</button>',1);function Mn(e){let t=xt([["","",""],["","",""],["","",""]]),r="X",l=xt(null),n=!1;function i(){for(let p=0;p<3;p++)if(f(t)[p][0]!==""&&f(t)[p][0]===f(t)[p][1]&&f(t)[p][0]===f(t)[p][2])return y(l,f(t)[p][0]),!0;for(let p=0;p<3;p++)if(f(t)[0][p]!==""&&f(t)[0][p]===f(t)[1][p]&&f(t)[0][p]===f(t)[2][p])return y(l,f(t)[0][p]),!0;if(f(t)[0][0]!==""&&f(t)[0][0]===f(t)[1][1]&&f(t)[0][0]===f(t)[2][2])return y(l,f(t)[0][0]),!0;if(f(t)[0][2]!==""&&f(t)[0][2]===f(t)[1][1]&&f(t)[0][2]===f(t)[2][0])return y(l,f(t)[0][2]),!0;let g=!0;for(let p=0;p<3;p++){for(let b=0;b<3;b++)if(f(t)[p][b]===""){g=!1;break}if(!g)break}return g?(y(l,"Tie"),!0):!1}function u(g,p){if(!(f(t)[g][p]!==""||n)){if(qr(t,f(t)[g][p]=r),y(t,[...f(t)]),i()){n=!0;return}r=r==="X"?"O":"X"}}function _(){y(t,[["","",""],["","",""],["","",""]]),r="X",y(l,null),n=!1}async function v(){await fetch("https://api.taranathan.com/boards",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({board:f(t)})})}var s=In(),o=Y(s);ye(o,5,()=>f(t),we,(g,p,b)=>{var T=De(),N=Y(T);ye(N,1,()=>f(p),we,(m,w,U)=>{var D=Ln(),S=F(D);ee(()=>te(S,f(w))),Se("click",D,()=>u(b,U)),Se("keydown",D,M=>M.key==="Enter"&&u(b,U)),A(m,D)}),A(g,T)});var c=O(o,2);{var a=g=>{var p=Fn(),b=F(p);ee(()=>te(b,`Winner: ${f(l)??""}`)),A(g,p)};ge(c,g=>{f(l)&&g(a)})}var d=O(c,2),h=O(d,2);Se("click",d,()=>_()),Se("click",h,()=>v()),A(e,s)}var Bn=I('<div class="container svelte-1bsjjhr"><p class="text svelte-1bsjjhr">Have Fun!</p></div> <!> <div class="button-container svelte-1bsjjhr"><div class="button-position svelte-1bsjjhr"><!></div></div> <!>',1);function jn(e){var t=Bn(),r=O(Y(t),2);Mn(r);var l=O(r,2),n=F(l),i=F(n);qn(i,{});var u=O(l,2);Pn(u,{}),A(e,t)}fn(jn,{target:document.getElementById("app")});
