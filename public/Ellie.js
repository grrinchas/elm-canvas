!function(r){"use strict";function n(r,n,t){return t.a=r,t.f=n,t}function e(t){return n(2,t,function(n){return function(r){return t(n,r)}})}function t(e){return n(3,e,function(t){return function(n){return function(r){return e(t,n,r)}}})}function u(u){return n(4,u,function(e){return function(t){return function(n){return function(r){return u(e,t,n,r)}}}})}function a(a){return n(5,a,function(u){return function(e){return function(t){return function(n){return function(r){return a(u,e,t,n,r)}}}}})}function i(i){return n(6,i,function(a){return function(u){return function(e){return function(t){return function(n){return function(r){return i(a,u,e,t,n,r)}}}}}})}function b(r,n,t){return 2===r.a?r.f(n,t):r(n)(t)}function s(r,n,t,e){return 3===r.a?r.f(n,t,e):r(n)(t)(e)}function d(r,n,t,e,u){return 4===r.a?r.f(n,t,e,u):r(n)(t)(e)(u)}function l(r,n,t,e,u,a){return 5===r.a?r.f(n,t,e,u,a):r(n)(t)(e)(u)(a)}function h(r,n,t,e,u,a,i){return 6===r.a?r.f(n,t,e,u,a,i):r(n)(t)(e)(u)(a)(i)}var $={$:0};function g(r,n){return{$:1,a:r,b:n}}var f=e(g);function m(r){for(var n=$,t=r.length;t--;)n=g(r[t],n);return n}function o(r){for(var n=[];r.b;r=r.b)n.push(r.a);return n}function c(r,n,t){if("object"!=typeof r)return r===n?0:r<n?-1:1;if(!r.$)return(t=c(r.a,n.a))?t:(t=c(r.b,n.b))?t:c(r.c,n.c);for(;r.b&&n.b&&!(t=c(r.a,n.a));r=r.b,n=n.b);return t||(r.b?1:n.b?-1:0)}var v=0;function p(r,n){return{a:r,b:n}}function y(r,n){var t={};for(var e in r)t[e]=r[e];for(var e in n)t[e]=n[e];return t}function k(r,n){if("string"==typeof r)return r+n;if(!r.b)return n;var t=g(r.a,n);r=r.b;for(var e=t;r.b;r=r.b)e=e.b=g(r.a,n);return t}var w=t(function(r,n,t){for(var e=Array(r),u=0;u<r;u++)e[u]=t(n+u);return e}),A=e(function(r,n){for(var t=Array(r),e=0;e<r&&n.b;e++)t[e]=n.a,n=n.b;return t.length=e,p(t,n)});function j(r){throw Error("https://github.com/elm/core/blob/1.0.0/hints/"+r+".md")}var _=Math.cos,T=Math.sin;var E=Math.ceil,N=Math.floor,x=Math.round,L=Math.log;var q=e(function(r,n){return n.join(r)});function P(r){return r+""}var C=e(function(r,n){return M(r,I(n))});function M(r,n){switch(r.$){case 3:return"boolean"==typeof n?mn(n):B("a BOOL",n);case 2:return"number"!=typeof n?B("an INT",n):-2147483647<n&&n<2147483647&&(0|n)===n?mn(n):!isFinite(n)||n%1?B("an INT",n):mn(n);case 4:return"number"==typeof n?mn(n):B("a FLOAT",n);case 6:return"string"==typeof n?mn(n):n instanceof String?mn(n+""):B("a STRING",n);case 9:return null===n?mn(r.c):B("null",n);case 5:return mn(S(n));case 7:return Array.isArray(n)?F(r.b,n,m):B("a LIST",n);case 8:return Array.isArray(n)?F(r.b,n,z):B("an ARRAY",n);case 10:var t=r.d;if("object"!=typeof n||null===n||!(t in n))return B("an OBJECT with a field named `"+t+"`",n);var e=M(r.b,n[t]);return pn(e)?e:gn(b(kn,t,e.a));case 11:var u=r.e;if(!Array.isArray(n))return B("an ARRAY",n);if(n.length<=u)return B("a LONGER array. Need index "+u+" but only see "+n.length+" entries",n);e=M(r.b,n[u]);return pn(e)?e:gn(b(wn,u,e.a));case 12:if("object"!=typeof n||null===n||Array.isArray(n))return B("an OBJECT",n);var a=$;for(var i in n)if(n.hasOwnProperty(i)){e=M(r.b,n[i]);if(!pn(e))return gn(b(kn,i,e.a));a=g(p(i,e.a),a)}return mn(un(a));case 13:for(var f=r.f,o=r.g,c=0;c<o.length;c++){e=M(o[c],n);if(!pn(e))return e;f=f(e.a)}return mn(f);case 14:e=M(r.b,n);return pn(e)?M(r.h(e.a),n):e;case 15:for(var v=$,s=r.g;s.b;s=s.b){e=M(s.a,n);if(pn(e))return e;v=g(e.a,v)}return gn(An(un(v)));case 1:return gn(b(yn,r.a,S(n)));case 0:return mn(r.a)}}function F(r,n,t){for(var e=n.length,u=Array(e),a=0;a<e;a++){var i=M(r,n[a]);if(!pn(i))return gn(b(wn,a,i.a));u[a]=i.a}return mn(t(u))}function z(n){return b(dn,n.length,function(r){return n[r]})}function B(r,n){return gn(b(yn,"Expecting "+r,S(n)))}function O(r,n){if(r===n)return!0;if(r.$!==n.$)return!1;switch(r.$){case 0:case 1:return r.a===n.a;case 3:case 2:case 4:case 6:case 5:return!0;case 9:return r.c===n.c;case 7:case 8:case 12:return O(r.b,n.b);case 10:return r.d===n.d&&O(r.b,n.b);case 11:return r.e===n.e&&O(r.b,n.b);case 13:return r.f===n.f&&R(r.g,n.g);case 14:return r.h===n.h&&O(r.b,n.b);case 15:return R(r.g,n.g)}}function R(r,n){var t=r.length;if(t!==n.length)return!1;for(var e=0;e<t;e++)if(!O(r[e],n[e]))return!1;return!0}function S(r){return r}function I(r){return r}var D=t(function(r,n,t){return t[r]=I(n),t});S(null);function G(r){return{$:0,a:r}}function J(r){return{$:2,b:r,c:null}}var X=e(function(r,n){return{$:3,b:r,d:n}});var Y=0;function Z(r){var n={$:0,e:Y++,f:r,g:null,h:[]};return V(n),n}function H(n){return J(function(r){r(G(Z(n)))})}function W(r,n){r.h.push(n),V(r)}var K=e(function(n,t){return J(function(r){W(n,t),r(G(v))})});var Q=!1,U=[];function V(r){if(U.push(r),!Q){for(Q=!0;r=U.shift();)rr(r);Q=!1}}function rr(n){for(;n.f;){var r=n.f.$;if(0===r||1===r){for(;n.g&&n.g.$!==r;)n.g=n.g.i;if(!n.g)return;n.f=n.g.b(n.f.a),n.g=n.g.i}else{if(2===r)return void(n.f.c=n.f.b(function(r){n.f=r,V(n)}));if(5===r){if(0===n.h.length)return;n.f=n.f.b(n.h.shift())}else n.g={$:3===r?0:1,b:n.f.b,i:n.g},n.f=n.f.d}}}function nr(r,n,t,e,u,a){var i=b(C,r,S(n?n.flags:void 0));pn(i)||j(2);var f={},o=(i=t(i.a)).a,c=a(s,o),v=function(r,n){var t;for(var e in tr){var u=tr[e];u.a&&((t=t||{})[e]=u.a(e,n)),r[e]=ur(u,n)}return t}(f,s);function s(r,n){c(o=(i=b(e,r,o)).a,n),or(f,i.b,u(o))}return or(f,i.b,u(o)),v?{ports:v}:{}}var tr={};function er(r,n,t,e,u){return{b:r,c:n,d:t,e:e,f:u}}function ur(r,n){var e={g:n,h:void 0},u=r.c,a=r.d,i=r.e,f=r.f;function o(t){return b(X,o,{$:5,b:function(r){var n=r.a;return 0===r.$?s(a,e,n,t):i&&f?d(u,e,n.i,n.j,t):s(u,e,i?n.i:n.j,t)}})}return e.h=Z(b(X,o,r.b))}var ar=e(function(n,t){return J(function(r){n.g(t),r(G(v))})}),ir=e(function(r,n){return b(K,r.h,{$:0,a:n})});function fr(n){return function(r){return{$:1,k:n,l:r}}}function or(r,n,t){var e={};for(var u in cr(!0,n,e,null),cr(!1,t,e,null),r)W(r[u],{$:"fx",a:e[u]||{i:$,j:$}})}function cr(r,n,t,e){switch(n.$){case 1:var u=n.k,a=function(r,n,t,e){function u(r){for(var n=t;n;n=n.q)r=n.p(r);return r}return b(r?tr[n].e:tr[n].f,u,e)}(r,u,e,n.l);return void(t[u]=function(r,n,t){return t=t||{i:$,j:$},r?t.i=g(n,t.i):t.j=g(n,t.j),t}(r,a,t[u]));case 2:for(var i=n.m;i.b;i=i.b)cr(r,i.a,t,e);return;case 3:return void cr(r,n.o,t,{p:n.n,q:e})}}var vr;var sr="undefined"!=typeof document?document:{};function br(r,n){r.appendChild(n)}function lr(r){return{$:0,a:r}}var dr=e(function(a,i){return e(function(r,n){for(var t=[],e=0;n.b;n=n.b){var u=n.a;e+=u.b||0,t.push(u)}return e+=t.length,{$:1,c:i,d:pr(r),e:t,f:a,b:e}})})(void 0);e(function(a,i){return e(function(r,n){for(var t=[],e=0;n.b;n=n.b){var u=n.a;e+=u.b.b||0,t.push(u)}return e+=t.length,{$:2,c:i,d:pr(r),e:t,f:a,b:e}})})(void 0);var hr=e(function(r,n){return{$:"a1",n:r,o:n}}),$r=e(function(r,n){return{$:"a2",n:r,o:n}}),gr=e(function(r,n){return{$:"a3",n:r,o:n}});var mr;function pr(r){for(var n={};r.b;r=r.b){var t=r.a,e=t.$,u=t.n,a=t.o;if("a2"!==e){var i=n[e]||(n[e]={});"a3"===e&&"class"===u?yr(i,u,a):i[u]=a}else"className"===u?yr(n,u,I(a)):n[u]=I(a)}return n}function yr(r,n,t){var e=r[n];r[n]=e?e+" "+t:t}function kr(r,n){var t=r.$;if(5===t)return kr(r.k||(r.k=r.m()),n);if(0===t)return sr.createTextNode(r.a);if(4===t){for(var e=r.k,u=r.j;4===e.$;)"object"!=typeof u?u=[u,e.j]:u.push(e.j),e=e.k;var a={j:u,p:n};return(i=kr(e,a)).elm_event_node_ref=a,i}if(3===t)return wr(i=r.h(r.g),n,r.d),i;var i=r.f?sr.createElementNS(r.f,r.c):sr.createElement(r.c);vr&&"a"==r.c&&i.addEventListener("click",vr(i)),wr(i,n,r.d);for(var f=r.e,o=0;o<f.length;o++)br(i,kr(1===t?f[o]:f[o].b,n));return i}function wr(r,n,t){for(var e in t){var u=t[e];"a1"===e?Ar(r,u):"a0"===e?Tr(r,n,u):"a3"===e?jr(r,u):"a4"===e?_r(r,u):("value"!==e||"checked"!==e||r[e]!==u)&&(r[e]=u)}}function Ar(r,n){var t=r.style;for(var e in n)t[e]=n[e]}function jr(r,n){for(var t in n){var e=n[t];e?r.setAttribute(t,e):r.removeAttribute(t)}}function _r(r,n){for(var t in n){var e=n[t],u=e.f,a=e.o;a?r.setAttributeNS(u,t,a):r.removeAttributeNS(u,t)}}function Tr(r,n,t){var e=r.elmFs||(r.elmFs={});for(var u in t){var a=t[u],i=e[u];if(a){if(i){if(i.q.$===a.$){i.q=a;continue}r.removeEventListener(u,i)}i=Er(n,a),r.addEventListener(u,i,mr&&{passive:ht(a)<2}),e[u]=i}else r.removeEventListener(u,i),e[u]=void 0}}try{window.addEventListener("t",null,Object.defineProperty({},"passive",{get:function(){mr=!0}}))}catch(r){}function Er(v,r){function s(r){var n=s.q,t=M(n.a,r);if(pn(t)){for(var e,u=ht(n),a=t.a,i=u?u<3?a.a:a.L:a,f=1==u?a.b:3==u&&a.bd,o=(f&&r.stopPropagation(),(2==u?a.b:3==u&&a.a8)&&r.preventDefault(),v);e=o.j;){if("function"==typeof e)i=e(i);else for(var c=e.length;c--;)i=e[c](i);o=o.p}o(i,f)}}return s.q=r,s}function Nr(r,n){return r.$==n.$&&O(r.a,n.a)}function xr(r,n){var t=[];return qr(r,n,t,0),t}function Lr(r,n,t,e){var u={$:n,r:t,s:e,t:void 0,u:void 0};return r.push(u),u}function qr(r,n,t,e){if(r!==n){var u=r.$,a=n.$;if(u!==a){if(1!==u||2!==a)return void Lr(t,0,e,n);n=function(r){for(var n=r.e,t=n.length,e=Array(t),u=0;u<t;u++)e[u]=n[u].b;return{$:1,c:r.c,d:r.d,e:e,f:r.f,b:r.b}}(n),a=1}switch(a){case 5:for(var i=r.l,f=n.l,o=i.length,c=o===f.length;c&&o--;)c=i[o]===f[o];if(c)return void(n.k=r.k);n.k=n.m();var v=[];return qr(r.k,n.k,v,0),void(0<v.length&&Lr(t,1,e,v));case 4:for(var s=r.j,b=n.j,l=!1,d=r.k;4===d.$;)l=!0,"object"!=typeof s?s=[s,d.j]:s.push(d.j),d=d.k;for(var h=n.k;4===h.$;)l=!0,"object"!=typeof b?b=[b,h.j]:b.push(h.j),h=h.k;return l&&s.length!==b.length?void Lr(t,0,e,n):((l?function(r,n){for(var t=0;t<r.length;t++)if(r[t]!==n[t])return!1;return!0}(s,b):s===b)||Lr(t,2,e,b),void qr(d,h,t,e+1));case 0:return void(r.a!==n.a&&Lr(t,3,e,n.a));case 1:return void Pr(r,n,t,e,Mr);case 2:return void Pr(r,n,t,e,Fr);case 3:if(r.h!==n.h)return void Lr(t,0,e,n);var $=Cr(r.d,n.d);$&&Lr(t,4,e,$);var g=n.i(r.g,n.g);return void(g&&Lr(t,5,e,g))}}}function Pr(r,n,t,e,u){if(r.c===n.c&&r.f===n.f){var a=Cr(r.d,n.d);a&&Lr(t,4,e,a),u(r,n,t,e)}else Lr(t,0,e,n)}function Cr(r,n,t){var e;for(var u in r)if("a1"!==u&&"a0"!==u&&"a3"!==u&&"a4"!==u)if(u in n){var a=r[u],i=n[u];a===i&&"value"!==u&&"checked"!==u||"a0"===t&&Nr(a,i)||((e=e||{})[u]=i)}else(e=e||{})[u]=t?"a1"===t?"":"a0"===t||"a3"===t?void 0:{f:r[u].f,o:void 0}:"string"==typeof r[u]?"":null;else{var f=Cr(r[u],n[u]||{},u);f&&((e=e||{})[u]=f)}for(var o in n)o in r||((e=e||{})[o]=n[o]);return e}function Mr(r,n,t,e){var u=r.e,a=n.e,i=u.length,f=a.length;f<i?Lr(t,6,e,{v:f,i:i-f}):i<f&&Lr(t,7,e,{v:i,e:a});for(var o=i<f?i:f,c=0;c<o;c++){var v=u[c];qr(v,a[c],t,++e),e+=v.b||0}}function Fr(r,n,t,e){for(var u=[],a={},i=[],f=r.e,o=n.e,c=f.length,v=o.length,s=0,b=0,l=e;s<c&&b<v;){var d=(T=f[s]).a,h=(E=o[b]).a,$=T.b,g=E.b;if(d!==h){var m=f[s+1],p=o[b+1];if(m)var y=m.a,k=m.b,w=h===y;if(p)var A=p.a,j=p.b,_=d===A;if(_&&w)qr($,j,u,++l),Br(a,u,d,g,b,i),l+=$.b||0,Or(a,u,d,k,++l),l+=k.b||0,s+=2,b+=2;else if(_)l++,Br(a,u,h,g,b,i),qr($,j,u,l),l+=$.b||0,s+=1,b+=2;else if(w)Or(a,u,d,$,++l),l+=$.b||0,qr(k,g,u,++l),l+=k.b||0,s+=2,b+=1;else{if(!m||y!==A)break;Or(a,u,d,$,++l),Br(a,u,h,g,b,i),l+=$.b||0,qr(k,j,u,++l),l+=k.b||0,s+=2,b+=2}}else qr($,g,u,++l),l+=$.b||0,s++,b++}for(;s<c;){var T;Or(a,u,(T=f[s]).a,$=T.b,++l),l+=$.b||0,s++}for(;b<v;){var E,N=N||[];Br(a,u,(E=o[b]).a,E.b,void 0,N),b++}(0<u.length||0<i.length||N)&&Lr(t,8,e,{w:u,x:i,y:N})}var zr="_elmW6BL";function Br(r,n,t,e,u,a){var i=r[t];if(!i)return a.push({r:u,A:i={c:0,z:e,r:u,s:void 0}}),void(r[t]=i);if(1===i.c){a.push({r:u,A:i}),i.c=2;var f=[];return qr(i.z,e,f,i.r),i.r=u,void(i.s.s={w:f,A:i})}Br(r,n,t+zr,e,u,a)}function Or(r,n,t,e,u){var a=r[t];if(a){if(0===a.c){a.c=2;var i=[];return qr(e,a.z,i,u),void Lr(n,9,u,{w:i,A:a})}Or(r,n,t+zr,e,u)}else{var f=Lr(n,9,u,void 0);r[t]={c:1,z:e,r:u,s:f}}}function Rr(r,n,t,e){!function r(n,t,e,u,a,i,f){var o=e[u];var c=o.r;for(;c===a;){var v=o.$;if(1===v)Rr(n,t.k,o.s,f);else if(8===v){o.t=n,o.u=f;var s=o.s.w;0<s.length&&r(n,t,s,0,a,i,f)}else if(9===v){o.t=n,o.u=f;var b=o.s;if(b){b.A.s=n;var s=b.w;0<s.length&&r(n,t,s,0,a,i,f)}}else o.t=n,o.u=f;if(!(o=e[++u])||(c=o.r)>i)return u}var l=t.$;if(4===l){for(var d=t.k;4===d.$;)d=d.k;return r(n,d,e,u,a+1,i,n.elm_event_node_ref)}var h=t.e;var $=n.childNodes;for(var g=0;g<h.length;g++){var m=1===l?h[g]:h[g].b,p=++a+(m.b||0);if(a<=c&&c<=p&&(u=r($[g],m,e,u,a,p,f),!(o=e[u])||(c=o.r)>i))return u;a=p}return u}(r,n,t,0,0,n.b,e)}function Sr(r,n,t,e){return 0===t.length?r:(Rr(r,n,t,e),Ir(r,t))}function Ir(r,n){for(var t=0;t<n.length;t++){var e=n[t],u=e.t,a=Dr(u,e);u===r&&(r=a)}return r}function Dr(r,n){switch(n.$){case 0:return function(r,n,t){var e=r.parentNode,u=kr(n,t);u.elm_event_node_ref||(u.elm_event_node_ref=r.elm_event_node_ref);e&&u!==r&&e.replaceChild(u,r);return u}(r,n.s,n.u);case 4:return wr(r,n.u,n.s),r;case 3:return r.replaceData(0,r.length,n.s),r;case 1:return Ir(r,n.s);case 2:return r.elm_event_node_ref?r.elm_event_node_ref.j=n.s:r.elm_event_node_ref={j:n.s,p:n.u},r;case 6:for(var t=n.s,e=0;e<t.i;e++)r.removeChild(r.childNodes[t.v]);return r;case 7:for(var u=(t=n.s).e,a=r.childNodes[e=t.v];e<u.length;e++)r.insertBefore(kr(u[e],n.u),a);return r;case 9:if(!(t=n.s))return r.parentNode.removeChild(r),r;var i=t.A;return void 0!==i.r&&r.parentNode.removeChild(r),i.s=Ir(r,t.w),r;case 8:return function(r,n){var t=n.s,e=function(r,n){if(!r)return;for(var t=sr.createDocumentFragment(),e=0;e<r.length;e++){var u=r[e],a=u.A;br(t,2===a.c?a.s:kr(a.z,n.u))}return t}(t.y,n);r=Ir(r,t.w);for(var u=t.x,a=0;a<u.length;a++){var i=u[a],f=i.A,o=2===f.c?f.s:kr(f.z,n.u);r.insertBefore(o,r.childNodes[i.r])}e&&br(r,e);return r}(r,n);case 5:return n.s(r);default:j(10)}}function Gr(r){if(3===r.nodeType)return lr(r.textContent);if(1!==r.nodeType)return lr("");for(var n=$,t=r.attributes,e=t.length;e--;){var u=t[e];n=g(b(gr,u.name,u.value),n)}var a=r.tagName.toLowerCase(),i=$,f=r.childNodes;for(e=f.length;e--;)i=g(Gr(f[e]),i);return s(dr,a,n,i)}var Jr=u(function(n,r,t,f){return nr(r,f,n.co,n.cX,n.cR,function(e,r){var u=n.cZ,a=f.node,i=Gr(a);return Yr(r,function(r){var n=u(r),t=xr(i,n);a=Sr(a,i,t,e),i=n})})}),Xr="undefined"!=typeof requestAnimationFrame?requestAnimationFrame:function(r){setTimeout(r,1e3/60)};function Yr(t,e){e(t);var u=0;function a(){u=1===u?0:(Xr(a),e(t),1)}return function(r,n){t=r,n?(e(t),2===u&&(u=1)):(0===u&&Xr(a),u=2)}}var Zr={addEventListener:function(){},removeEventListener:function(){}};"undefined"!=typeof document&&document,"undefined"!=typeof window&&window;var Hr=function(r){return r},Wr=t(function(r,n,t){for(;;){if(!t.b)return n;var e=t.b,u=r,a=b(r,t.a,n);r=u,n=a,t=e}}),Kr=u(function(r,n,t,e){return{$:0,a:r,b:n,c:t,d:e}}),Qr=f,Ur=E,Vr=e(function(r,n){return L(n)/L(r)}),rn=Ur(b(Vr,2,32)),nn=[],tn=d(Kr,0,rn,nn,nn),en=A,un=function(r){return s(Wr,Qr,$,r)},an=e(function(r,n){for(;;){var t=b(en,32,r),e=t.b,u=b(Qr,{$:0,a:t.a},n);if(!e.b)return un(u);r=e,n=u}}),fn=e(function(r,n){for(;;){var t=Ur(n/32);if(1===t)return b(en,32,r).a;r=b(an,r,$),n=t}}),on=N,cn=e(function(r,n){return 0<c(r,n)?r:n}),vn=function(r){return r.length},sn=e(function(r,n){if(n.k){var t=32*n.k,e=on(b(Vr,32,t-1)),u=r?un(n.o):n.o,a=b(fn,u,n.k);return d(Kr,vn(n.n)+t,b(cn,5,e*rn),a,n.n)}return d(Kr,vn(n.n),rn,nn,n.n)}),bn=w,ln=a(function(r,n,t,e,u){for(;;){if(n<0)return b(sn,!1,{o:e,k:t/32|0,n:u});var a={$:1,a:s(bn,32,n,r)};r=r,n=n-32,t=t,e=b(Qr,a,e),u=u}}),dn=e(function(r,n){if(0<r){var t=r%32;return l(ln,n,r-t-32,r,$,s(bn,t,r-t,n))}return tn}),hn=function(r){return{$:0,a:r}},$n={$:1},gn=function(r){return{$:1,a:r}},mn=function(r){return{$:0,a:r}},pn=function(r){return!r.$},yn=e(function(r,n){return{$:3,a:r,b:n}}),kn=e(function(r,n){return{$:0,a:r,b:n}}),wn=e(function(r,n){return{$:1,a:r,b:n}}),An=function(r){return{$:2,a:r}},jn=P,_n=e(function(r,n){return b(q,r,o(n))}),Tn=e(function(r,n){return S(s(Wr,function(t){return e(function(r,n){return n.push(I(t(r))),n})}(r),[],n))}),En=function(r){return S(s(Wr,e(function(r,n){return s(D,r.a,r.b,n)}),{},r))},Nn=S,xn=e(function(r,n){return En(m([p("type",Nn("function")),p("name",Nn(r)),p("args",b(Tn,Hr,n))]))}),Ln=S,qn=a(function(r,n,t,e,u){return b(xn,"arcTo",m([Ln(r),Ln(n),Ln(t),Ln(e),Ln(u)]))}),Pn=i(function(r,n,t,e,u,a){return b(xn,"bezierCurveTo",m([Ln(r),Ln(n),Ln(t),Ln(e),Ln(u),Ln(a)]))}),Cn=e(function(r,n){return b(xn,"lineTo",m([Ln(r),Ln(n)]))}),Mn=e(function(r,n){return b(xn,"moveTo",m([Ln(r),Ln(n)]))}),Fn=u(function(r,n,t,e){return b(xn,"quadraticCurveTo",m([Ln(r),Ln(n),Ln(t),Ln(e)]))}),zn=e(function(r,n){switch(r.$){case 0:var t=r.a,e=r.b;return b(Qr,l(qn,t.a,t.b,e.a,e.b,r.c),n);case 1:var u=r.a,a=r.b,i=r.c;return b(Qr,h(Pn,u.a,u.b,a.a,a.b,i.a,i.b),n);case 2:var f=r.a;return b(Qr,b(Cn,f.a,f.b),n);case 3:var o=r.a;return b(Qr,b(Mn,o.a,o.b),n);default:var c=r.a,v=r.b;return b(Qr,d(Fn,c.a,c.b,v.a,v.b),n)}}),Bn=S,On=i(function(r,n,t,e,u,a){return b(xn,"arc",m([Ln(r),Ln(n),Ln(t),Ln(e),Ln(u),Bn(a)]))}),Rn=t(function(r,n,t){return h(On,r,n,t,0,6.283185307179586,!1)}),Sn=u(function(r,n,t,e){return b(xn,"rect",m([Ln(r),Ln(n),Ln(t),Ln(e)]))}),In=_,Dn=T,Gn=e(function(r,n){switch(r.$){case 0:var t=r.a;return b(Qr,d(Sn,f=t.a,o=t.b,r.b,r.c),b(Qr,b(Mn,f,o),n));case 1:var e=r.a,u=r.b;return b(Qr,s(Rn,f=e.a,o=e.b,u),b(Qr,b(Mn,f+u,o),n));case 2:var a=r.a,i=r.b;return s(Wr,zn,b(Qr,b(Mn,f=a.a,o=a.b),n),i);default:var f,o,c=r.a,v=r.c;return b(Qr,h(On,f=c.a,o=c.b,r.b,v,r.d,r.e),b(Qr,b(Mn,f+In(v),o+Dn(v)),n))}}),Jn=e(function(r,n){return En(m([p("type",Nn("field")),p("name",Nn(r)),p("value",n)]))}),Xn=x,Yn=P,Zn=function(r){var n,t,e=r.b,u=r.c,a=r.d,i=function(r){return Xn(1e4*r)/100};return n=m(["rgba(",Yn(i(r.a)),"%,",Yn(i(e)),"%,",Yn(i(u)),"%,",Yn((t=a,Xn(1e3*t)/1e3)),")"]),b(_n,"",n)},Hn=function(r){return b(Jn,"fillStyle",Nn(Zn(r)))},Wn=e(function(r,n){return b(Qr,b(xn,"fill",m([Nn(function(r){return r?"evenodd":"nonzero"}(0))])),b(Qr,Hn(r),n))}),Kn=b(xn,"stroke",$),Qn=function(r){return b(Jn,"strokeStyle",Nn(Zn(r)))},Un=e(function(r,n){return b(Qr,Kn,b(Qr,Qn(r),n))}),Vn=u(function(r,n,t,e){return{$:0,a:r,b:n,c:t,d:e}}),rt=d(Vn,0,0,0,1),nt=e(function(r,n){switch(r.$){case 0:return b(Wn,rt,n);case 1:return b(Wn,r.a,n);case 2:return b(Un,r.a,n);default:return b(Un,r.b,b(Wn,r.a,n))}}),tt=u(function(r,n,t,e){if(1===e.$)return b(xn,"fillText",m([Nn(r),Ln(n),Ln(t)]));var u=e.a;return b(xn,"fillText",m([Nn(r),Ln(n),Ln(t),Ln(u)]))}),et=a(function(r,n,t,e,u){return b(Qr,d(tt,r.aI,n,t,r.aq),b(Qr,Hn(e),u))}),ut=u(function(r,n,t,e){if(1===e.$)return b(xn,"strokeText",m([Nn(r),Ln(n),Ln(t)]));var u=e.a;return b(xn,"strokeText",m([Nn(r),Ln(n),Ln(t),Ln(u)]))}),at=a(function(r,n,t,e,u){return b(Qr,d(ut,r.aI,n,t,r.aq),b(Qr,Qn(e),u))}),it=t(function(r,n,t){var e=n.a7,u=e.a,a=e.b;switch(r.$){case 0:return l(et,n,u,a,rt,t);case 1:return l(et,n,u,a,r.a,t);case 2:return l(at,n,u,a,r.a,t);default:return l(at,n,u,a,r.b,l(et,n,u,a,r.a,t))}}),ft=t(function(r,n,t){return s(it,r,n,t)}),ot=b(xn,"beginPath",$),ct=t(function(r,n,t){if(r.$){var e=r.a;return b(nt,n,s(Wr,Gn,b(Qr,ot,t),e))}return s(ft,n,r.a,t)}),vt=b(xn,"restore",$),st=b(xn,"save",$),bt=e(function(r,n){return b(Qr,vt,s(ct,r.am,r.al,k(r.P,b(Qr,st,n))))}),lt=$,dt=function(r){return{$:0,a:r}},ht=function(r){switch(r.$){case 0:return 0;case 1:return 1;case 2:return 2;default:return 3}},$t=e(function(r,n){return b($r,function(r){return"innerHTML"==r||"formAction"==r?"data-"+r:r}(r),function(r){return/^\s*(javascript:|data:text\/html)/i.test(r)?"":r}(n))}),gt=dr("canvas"),mt=function(r){return dr(function(r){return"script"==r?"p":r}(r))},pt=function(r){return b(gr,"height",jn(r))},yt=function(r){return b(gr,"width",jn(r))},kt=t(function(r,n,t){var e,u=r.a,a=r.b;return s(mt,"elm-canvas",m([(e=function(r){return s(Wr,bt,lt,r)}(t),b($t,"cmds",b(Tn,Hr,e))),pt(a),yt(u)]),m([b(gt,b(Qr,pt(a),b(Qr,yt(u),n)),$)]))}),wt=function(r){return{$:1,a:r}},At=function(r){return{$:2,a:wt(r)}},jt=t(function(r,n,t){return{$:0,a:r,b:n,c:t}}),_t=t(function(r,n,t){return s(jt,r,n,t)}),Tt={$:0},Et=e(function(r,n){return{$:3,a:r,b:n}}),Nt=e(function(r,n){var t=p(r,n);r:for(;;)switch(t.b.$){case 3:var e=t.b;return b(Et,e.a,e.b);case 1:switch(t.a.$){case 1:return wt(t.b.a);case 2:return b(Et,t.b.a,t.a.a);case 3:var u=t.a;return b(Et,t.b.a,u.b);default:break r}case 2:switch(t.a.$){case 2:return{$:2,a:t.b.a};case 1:return b(Et,t.a.a,t.b.a);case 3:var a=t.a;return b(Et,a.a,t.b.a);default:break r}default:if(t.a.$){return t.a}break r}return t.b}),xt=e(function(r,n){return s(Wr,e(function(r,n){var t=n;switch(r.$){case 0:return y(t,{P:b(Qr,r.a,t.P)});case 1:return y(t,{P:s(Wr,Qr,t.P,r.a)});case 3:return y(t,{am:(0,r.a)(t.am)});default:return y(t,{al:b(Nt,t.al,r.a)})}}),n,r)}),Lt=e(function(r,n){return b(xt,r,{P:$,al:Tt,am:(t=n,{$:1,a:t})});var t}),qt=b(Lt,m([At(d(Vn,1,1,1,1))]),m([s(_t,p(0,0),400,400)])),Pt=function(r){return{$:0,a:r}},Ct=e(function(r,n){return b(xn,"scale",m([Ln(r),Ln(n)]))}),Mt=i(function(r,n,t,e,u,a){return b(xn,"transform",m([Ln(r),Ln(n),Ln(t),Ln(e),Ln(u),Ln(a)]))}),Ft=e(function(r,n){return b(xn,"translate",m([Ln(r),Ln(n)]))}),zt=u(function(r,n,t,e){if(e.b){var u=e.a,a=e.b;if(a.b){var i=a.a,f=a.b;if(f.b){var o=f.a,c=f.b;if(c.b){var v=c.b;return b(r,u,b(r,i,b(r,o,b(r,c.a,500<t?s(Wr,r,n,un(v)):d(zt,r,n,t+1,v)))))}return b(r,u,b(r,i,b(r,o,n)))}return b(r,u,b(r,i,n))}return b(r,u,n)}return n}),Bt=t(function(r,n,t){return d(zt,r,n,0,t)}),Ot=e(function(t,r){return s(Bt,e(function(r,n){return b(Qr,t(r),n)}),$,r)}),Rt=function(r){return{$:1,a:b(Ot,function(r){switch(r.$){case 0:return function(r){return b(xn,"rotate",m([Ln(r)]))}(r.a);case 1:return b(Ct,r.a,r.b);case 2:return b(Ft,r.a,r.b);default:return h(Mt,r.a.cr,r.a.cs,r.a.ct,r.a.cu,r.a.b8,r.a.b9)}},r)}},St=e(function(r,n){return{$:2,a:r,b:n}}),It=u(function(r,n,t,e){var u=function(r,n,t){return{a:r,b:n,c:t}}(r,n,t),a=u.a,i=u.b,f=u.c,o=.5<f?f+i-f*i:f*(i+1),c=2*f-o,v=function(r){var n=r<0?r+1:1<r?r-1:r;return 6*n<1?c+(o-c)*n*6:2*n<1?o:3*n<2?c+(o-c)*(2/3-n)*6:c},s=v(a-1/3),b=v(a),l=v(a+1/3);return d(Vn,l,b,s,e)}),Dt=t(function(r,n,t){return d(It,r,n,t,1)}),Gt=function(r){return 3.141592653589793*r/180},Jt=dr("div"),Xt=hr,Yt=G,Zt=Yt(0),Ht=X,Wt=e(function(n,r){return b(Ht,function(r){return Yt(n(r))},r)}),Kt=t(function(t,r,e){return b(Ht,function(n){return b(Ht,function(r){return Yt(b(t,n,r))},e)},r)}),Qt=function(r){return s(Bt,Kt(Qr),Yt($),r)},Ut=ar,Vt=e(function(r,n){var t=n;return H(b(Ht,Ut(r),t))});tr.Task=er(Zt,t(function(r,n){return b(Wt,function(){return 0},Qt(b(Ot,Vt(r),n)))}),t(function(){return Yt(0)}),e(function(r,n){return b(Wt,r,n)}));fr("Task");var re=Jr,ne=function(r){return{$:1,a:r}},te=t(function(r,n,t){return{a_:t,bM:n,bP:r}}),ee=Yt(s(te,$,$n,0)),ue=J(function(r){r(G(Date.now()))}),ae=J(function(r){var n=requestAnimationFrame(function(){r(G(Date.now()))});return function(){cancelAnimationFrame(n)}}),ie=ir,fe=function(t){return J(function(r){var n=t.f;2===n.$&&n.c&&n.c(),t.f=null,r(G(v))})},oe=H,ce=t(function(r,t,n){var e=n.bM,u=n.a_,a=p(e,t);if(1!==a.a.$)return a.b.b?Yt(s(te,t,e,u)):b(Ht,function(){return ee},fe(a.a.a));if(a.b.b){return b(Ht,function(n){return b(Ht,function(r){return Yt(s(te,t,hn(n),r))},ue)},oe(b(Ht,ie(r),ae)))}return ee}),ve=Hr,se=t(function(n,t,r){var e=r.bP,u=r.a_,a=function(r){return b(Ut,n,r.$?(0,r.a)(t-u):(0,r.a)(ve(t)))};return b(Ht,function(r){return b(Ht,function(){return Yt(s(te,e,hn(r),t))},Qt(b(Ot,a,e)))},oe(b(Ht,ie(n),ae)))}),be=t(function(r,n,t){return r(n(t))});tr["Browser.AnimationManager"]=er(ee,ce,se,0,e(function(r,n){return n.$?ne(b(be,r,n.a)):{$:0,a:b(be,r,n.a)}}));var le,de=fr("Browser.AnimationManager"),he=function(r){return de(ne(r))},$e=function(r){return{$:2,m:r}}($),ge=re({co:function(){return p({ak:0},$e)},cR:function(){return he(Hr)},cX:e(function(r,n){return p(y(n,{ak:n.ak+1}),$e)}),cZ:function(r){var n=r.ak;return b(Jt,m([b(Xt,"display","flex"),b(Xt,"justify-content","center"),b(Xt,"align-items","center")]),m([s(kt,p(400,400),m([b(Xt,"border","10px solid rgba(0,0,0,0.1)")]),m([qt,function(r){return b(Lt,m([Rt(m([b(St,200,200),Pt(Gt(3*r))])),At(s(Dt,Gt(r/4),.3,.7))]),m([s(_t,p(-400/3/2,-400/3/2),400/3,400/3)]))}(n)]))]))}});le={Examples:{Ellie:{init:ge(dt(0))(0)}}},r.Elm?function r(n,t){for(var e in t)e in n?"init"==e?j(6):r(n[e],t[e]):n[e]=t[e]}(r.Elm,le):r.Elm=le}(this);