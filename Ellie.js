!function(n){"use strict";function r(n,r,t){return t.a=n,t.f=r,t}function e(t){return r(2,t,function(r){return function(n){return t(r,n)}})}function t(e){return r(3,e,function(t){return function(r){return function(n){return e(t,r,n)}}})}function u(u){return r(4,u,function(e){return function(t){return function(r){return function(n){return u(e,t,r,n)}}}})}function a(a){return r(5,a,function(u){return function(e){return function(t){return function(r){return function(n){return a(u,e,t,r,n)}}}}})}function i(i){return r(6,i,function(a){return function(u){return function(e){return function(t){return function(r){return function(n){return i(a,u,e,t,r,n)}}}}}})}function f(c){return r(9,c,function(o){return function(f){return function(i){return function(a){return function(u){return function(e){return function(t){return function(r){return function(n){return c(o,f,i,a,u,e,t,r,n)}}}}}}}}})}function b(n,r,t){return 2===n.a?n.f(r,t):n(r)(t)}function s(n,r,t,e){return 3===n.a?n.f(r,t,e):n(r)(t)(e)}function d(n,r,t,e,u){return 4===n.a?n.f(r,t,e,u):n(r)(t)(e)(u)}function l(n,r,t,e,u,a){return 5===n.a?n.f(r,t,e,u,a):n(r)(t)(e)(u)(a)}function h(n,r,t,e,u,a,i){return 6===n.a?n.f(r,t,e,u,a,i):n(r)(t)(e)(u)(a)(i)}function o(n,r,t,e,u,a,i,f,o,c){return 9===n.a?n.f(r,t,e,u,a,i,f,o,c):n(r)(t)(e)(u)(a)(i)(f)(o)(c)}var $={$:0};function g(n,r){return{$:1,a:n,b:r}}var c=e(g);function m(n){for(var r=$,t=n.length;t--;)r=g(n[t],r);return r}function v(n){for(var r=[];n.b;n=n.b)r.push(n.a);return r}function p(n,r,t){if("object"!=typeof n)return n===r?0:n<r?-1:1;if(!n.$)return(t=p(n.a,r.a))?t:(t=p(n.b,r.b))?t:p(n.c,r.c);for(;n.b&&r.b&&!(t=p(n.a,r.a));n=n.b,r=r.b);return t||(n.b?1:r.b?-1:0)}var y=0;function w(n,r){return{a:n,b:r}}function k(n,r){var t={};for(var e in n)t[e]=n[e];for(var e in r)t[e]=r[e];return t}function A(n,r){if("string"==typeof n)return n+r;if(!n.b)return r;var t=g(n.a,r);n=n.b;for(var e=t;n.b;n=n.b)e=e.b=g(n.a,r);return t}var j=t(function(n,r,t){for(var e=Array(n),u=0;u<n;u++)e[u]=t(r+u);return e}),_=e(function(n,r){for(var t=Array(n),e=0;e<n&&r.b;e++)t[e]=r.a,r=r.b;return t.length=e,w(t,r)});function T(n){throw Error("https://github.com/elm/core/blob/1.0.0/hints/"+n+".md")}var N=Math.cos,E=Math.sin;var x=Math.ceil,J=Math.floor,L=Math.round,q=Math.log;var S=e(function(n,r){return r.join(n)});function C(n){return n+""}var M=e(function(n,r){return{$:10,d:n,b:r}});function F(n,r){return{$:13,f:n,g:r}}var z=e(function(n,r){return{$:14,b:r,h:n}});var B=e(function(n,r){return F(n,[r])}),O=t(function(n,r,t){return F(n,[r,t])}),Y=e(function(n,r){return R(n,K(r))});function R(n,r){switch(n.$){case 3:return"boolean"==typeof r?xr(r):I("a BOOL",r);case 2:return"number"!=typeof r?I("an INT",r):-2147483647<r&&r<2147483647&&(0|r)===r?xr(r):!isFinite(r)||r%1?I("an INT",r):xr(r);case 4:return"number"==typeof r?xr(r):I("a FLOAT",r);case 6:return"string"==typeof r?xr(r):r instanceof String?xr(r+""):I("a STRING",r);case 9:return null===r?xr(n.c):I("null",r);case 5:return xr(G(r));case 7:return Array.isArray(r)?D(n.b,r,m):I("a LIST",r);case 8:return Array.isArray(r)?D(n.b,r,P):I("an ARRAY",r);case 10:var t=n.d;if("object"!=typeof r||null===r||!(t in r))return I("an OBJECT with a field named `"+t+"`",r);var e=R(n.b,r[t]);return ir(e)?e:Er(b(Lr,t,e.a));case 11:var u=n.e;if(!Array.isArray(r))return I("an ARRAY",r);if(r.length<=u)return I("a LONGER array. Need index "+u+" but only see "+r.length+" entries",r);e=R(n.b,r[u]);return ir(e)?e:Er(b(qr,u,e.a));case 12:if("object"!=typeof r||null===r||Array.isArray(r))return I("an OBJECT",r);var a=$;for(var i in r)if(r.hasOwnProperty(i)){e=R(n.b,r[i]);if(!ir(e))return Er(b(Lr,i,e.a));a=g(w(i,e.a),a)}return xr($r(a));case 13:for(var f=n.f,o=n.g,c=0;c<o.length;c++){e=R(o[c],r);if(!ir(e))return e;f=f(e.a)}return xr(f);case 14:e=R(n.b,r);return ir(e)?R(n.h(e.a),r):e;case 15:for(var v=$,s=n.g;s.b;s=s.b){e=R(s.a,r);if(ir(e))return e;v=g(e.a,v)}return Er(Sr($r(v)));case 1:return Er(b(Jr,n.a,G(r)));case 0:return xr(n.a)}}function D(n,r,t){for(var e=r.length,u=Array(e),a=0;a<e;a++){var i=R(n,r[a]);if(!ir(i))return Er(b(qr,a,i.a));u[a]=i.a}return xr(t(u))}function P(r){return b(_r,r.length,function(n){return r[n]})}function I(n,r){return Er(b(Jr,"Expecting "+n,G(r)))}function W(n,r){if(n===r)return!0;if(n.$!==r.$)return!1;switch(n.$){case 0:case 1:return n.a===r.a;case 3:case 2:case 4:case 6:case 5:return!0;case 9:return n.c===r.c;case 7:case 8:case 12:return W(n.b,r.b);case 10:return n.d===r.d&&W(n.b,r.b);case 11:return n.e===r.e&&W(n.b,r.b);case 13:return n.f===r.f&&X(n.g,r.g);case 14:return n.h===r.h&&W(n.b,r.b);case 15:return X(n.g,r.g)}}function X(n,r){var t=n.length;if(t!==r.length)return!1;for(var e=0;e<t;e++)if(!W(n[e],r[e]))return!1;return!0}function G(n){return n}function K(n){return n}var H=t(function(n,r,t){return t[n]=K(r),t});G(null);function Q(n){return{$:0,a:n}}function U(n){return{$:2,b:n,c:null}}var V=e(function(n,r){return{$:3,b:n,d:r}});var Z=0;function nn(n){var r={$:0,e:Z++,f:n,g:null,h:[]};return fn(r),r}function rn(r){return U(function(n){n(Q(nn(r)))})}function tn(n,r){n.h.push(r),fn(n)}var en=e(function(r,t){return U(function(n){tn(r,t),n(Q(y))})});var un=!1,an=[];function fn(n){if(an.push(n),!un){for(un=!0;n=an.shift();)on(n);un=!1}}function on(r){for(;r.f;){var n=r.f.$;if(0===n||1===n){for(;r.g&&r.g.$!==n;)r.g=r.g.i;if(!r.g)return;r.f=r.g.b(r.f.a),r.g=r.g.i}else{if(2===n)return void(r.f.c=r.f.b(function(n){r.f=n,fn(r)}));if(5===n){if(0===r.h.length)return;r.f=r.f.b(r.h.shift())}else r.g={$:3===n?0:1,b:r.f.b,i:r.g},r.f=r.f.d}}}function cn(n,r,t,e,u,a){var i=b(Y,n,G(r?r.flags:void 0));ir(i)||T(2);var f={},o=(i=t(i.a)).a,c=a(s,o),v=function(n,r){var t;for(var e in vn){var u=vn[e];u.a&&((t=t||{})[e]=u.a(e,r)),n[e]=bn(u,r)}return t}(f,s);function s(n,r){c(o=(i=b(e,n,o)).a,r),$n(f,i.b,u(o))}return $n(f,i.b,u(o)),v?{ports:v}:{}}var vn={};function sn(n,r,t,e,u){return{b:n,c:r,d:t,e:e,f:u}}function bn(n,r){var e={g:r,h:void 0},u=n.c,a=n.d,i=n.e,f=n.f;function o(t){return b(V,o,{$:5,b:function(n){var r=n.a;return 0===n.$?s(a,e,r,t):i&&f?d(u,e,r.i,r.j,t):s(u,e,i?r.i:r.j,t)}})}return e.h=nn(b(V,o,n.b))}var ln=e(function(r,t){return U(function(n){r.g(t),n(Q(y))})}),dn=e(function(n,r){return b(en,n.h,{$:0,a:r})});function hn(r){return function(n){return{$:1,k:r,l:n}}}function $n(n,r,t){var e={};for(var u in gn(!0,r,e,null),gn(!1,t,e,null),n)tn(n[u],{$:"fx",a:e[u]||{i:$,j:$}})}function gn(n,r,t,e){switch(r.$){case 1:var u=r.k,a=function(n,r,t,e){function u(n){for(var r=t;r;r=r.q)n=r.p(n);return n}return b(n?vn[r].e:vn[r].f,u,e)}(n,u,e,r.l);return void(t[u]=function(n,r,t){return t=t||{i:$,j:$},n?t.i=g(r,t.i):t.j=g(r,t.j),t}(n,a,t[u]));case 2:for(var i=r.m;i.b;i=i.b)gn(n,i.a,t,e);return;case 3:return void gn(n,r.o,t,{p:r.n,q:e})}}var mn;var pn="undefined"!=typeof document?document:{};function yn(n,r){n.appendChild(r)}function wn(n){return{$:0,a:n}}var kn=e(function(a,i){return e(function(n,r){for(var t=[],e=0;r.b;r=r.b){var u=r.a;e+=u.b||0,t.push(u)}return e+=t.length,{$:1,c:i,d:Jn(n),e:t,f:a,b:e}})})(void 0),An=e(function(a,i){return e(function(n,r){for(var t=[],e=0;r.b;r=r.b){var u=r.a;e+=u.b.b||0,t.push(u)}return e+=t.length,{$:2,c:i,d:Jn(n),e:t,f:a,b:e}})})(void 0);var jn=e(function(n,r){return{$:"a0",n:n,o:r}}),_n=e(function(n,r){return{$:"a1",n:n,o:r}}),Tn=e(function(n,r){return{$:"a2",n:n,o:r}}),Nn=e(function(n,r){return{$:"a3",n:n,o:r}});function En(n){return/^\s*(javascript:|data:text\/html)/i.test(n)?"":n}var xn;function Jn(n){for(var r={};n.b;n=n.b){var t=n.a,e=t.$,u=t.n,a=t.o;if("a2"!==e){var i=r[e]||(r[e]={});"a3"===e&&"class"===u?Ln(i,u,a):i[u]=a}else"className"===u?Ln(r,u,K(a)):r[u]=K(a)}return r}function Ln(n,r,t){var e=n[r];n[r]=e?e+" "+t:t}function qn(n,r){var t=n.$;if(5===t)return qn(n.k||(n.k=n.m()),r);if(0===t)return pn.createTextNode(n.a);if(4===t){for(var e=n.k,u=n.j;4===e.$;)"object"!=typeof u?u=[u,e.j]:u.push(e.j),e=e.k;var a={j:u,p:r};return(i=qn(e,a)).elm_event_node_ref=a,i}if(3===t)return Sn(i=n.h(n.g),r,n.d),i;var i=n.f?pn.createElementNS(n.f,n.c):pn.createElement(n.c);mn&&"a"==n.c&&i.addEventListener("click",mn(i)),Sn(i,r,n.d);for(var f=n.e,o=0;o<f.length;o++)yn(i,qn(1===t?f[o]:f[o].b,r));return i}function Sn(n,r,t){for(var e in t){var u=t[e];"a1"===e?Cn(n,u):"a0"===e?zn(n,r,u):"a3"===e?Mn(n,u):"a4"===e?Fn(n,u):("value"!==e||"checked"!==e||n[e]!==u)&&(n[e]=u)}}function Cn(n,r){var t=n.style;for(var e in r)t[e]=r[e]}function Mn(n,r){for(var t in r){var e=r[t];e?n.setAttribute(t,e):n.removeAttribute(t)}}function Fn(n,r){for(var t in r){var e=r[t],u=e.f,a=e.o;a?n.setAttributeNS(u,t,a):n.removeAttributeNS(u,t)}}function zn(n,r,t){var e=n.elmFs||(n.elmFs={});for(var u in t){var a=t[u],i=e[u];if(a){if(i){if(i.q.$===a.$){i.q=a;continue}n.removeEventListener(u,i)}i=Bn(r,a),n.addEventListener(u,i,xn&&{passive:Or(a)<2}),e[u]=i}else n.removeEventListener(u,i),e[u]=void 0}}try{window.addEventListener("t",null,Object.defineProperty({},"passive",{get:function(){xn=!0}}))}catch(n){}function Bn(v,n){function s(n){var r=s.q,t=R(r.a,n);if(ir(t)){for(var e,u=Or(r),a=t.a,i=u?u<3?a.a:a.M:a,f=1==u?a.b:3==u&&a.a8,o=(f&&n.stopPropagation(),(2==u?a.b:3==u&&a.a3)&&n.preventDefault(),v);e=o.j;){if("function"==typeof e)i=e(i);else for(var c=e.length;c--;)i=e[c](i);o=o.p}o(i,f)}}return s.q=n,s}function On(n,r){return n.$==r.$&&W(n.a,r.a)}function Yn(n,r){var t=[];return Dn(n,r,t,0),t}function Rn(n,r,t,e){var u={$:r,r:t,s:e,t:void 0,u:void 0};return n.push(u),u}function Dn(n,r,t,e){if(n!==r){var u=n.$,a=r.$;if(u!==a){if(1!==u||2!==a)return void Rn(t,0,e,r);r=function(n){for(var r=n.e,t=r.length,e=Array(t),u=0;u<t;u++)e[u]=r[u].b;return{$:1,c:n.c,d:n.d,e:e,f:n.f,b:n.b}}(r),a=1}switch(a){case 5:for(var i=n.l,f=r.l,o=i.length,c=o===f.length;c&&o--;)c=i[o]===f[o];if(c)return void(r.k=n.k);r.k=r.m();var v=[];return Dn(n.k,r.k,v,0),void(0<v.length&&Rn(t,1,e,v));case 4:for(var s=n.j,b=r.j,l=!1,d=n.k;4===d.$;)l=!0,"object"!=typeof s?s=[s,d.j]:s.push(d.j),d=d.k;for(var h=r.k;4===h.$;)l=!0,"object"!=typeof b?b=[b,h.j]:b.push(h.j),h=h.k;return l&&s.length!==b.length?void Rn(t,0,e,r):((l?function(n,r){for(var t=0;t<n.length;t++)if(n[t]!==r[t])return!1;return!0}(s,b):s===b)||Rn(t,2,e,b),void Dn(d,h,t,e+1));case 0:return void(n.a!==r.a&&Rn(t,3,e,r.a));case 1:return void Pn(n,r,t,e,Wn);case 2:return void Pn(n,r,t,e,Xn);case 3:if(n.h!==r.h)return void Rn(t,0,e,r);var $=In(n.d,r.d);$&&Rn(t,4,e,$);var g=r.i(n.g,r.g);return void(g&&Rn(t,5,e,g))}}}function Pn(n,r,t,e,u){if(n.c===r.c&&n.f===r.f){var a=In(n.d,r.d);a&&Rn(t,4,e,a),u(n,r,t,e)}else Rn(t,0,e,r)}function In(n,r,t){var e;for(var u in n)if("a1"!==u&&"a0"!==u&&"a3"!==u&&"a4"!==u)if(u in r){var a=n[u],i=r[u];a===i&&"value"!==u&&"checked"!==u||"a0"===t&&On(a,i)||((e=e||{})[u]=i)}else(e=e||{})[u]=t?"a1"===t?"":"a0"===t||"a3"===t?void 0:{f:n[u].f,o:void 0}:"string"==typeof n[u]?"":null;else{var f=In(n[u],r[u]||{},u);f&&((e=e||{})[u]=f)}for(var o in r)o in n||((e=e||{})[o]=r[o]);return e}function Wn(n,r,t,e){var u=n.e,a=r.e,i=u.length,f=a.length;f<i?Rn(t,6,e,{v:f,i:i-f}):i<f&&Rn(t,7,e,{v:i,e:a});for(var o=i<f?i:f,c=0;c<o;c++){var v=u[c];Dn(v,a[c],t,++e),e+=v.b||0}}function Xn(n,r,t,e){for(var u=[],a={},i=[],f=n.e,o=r.e,c=f.length,v=o.length,s=0,b=0,l=e;s<c&&b<v;){var d=(T=f[s]).a,h=(N=o[b]).a,$=T.b,g=N.b;if(d!==h){var m=f[s+1],p=o[b+1];if(m)var y=m.a,w=m.b,k=h===y;if(p)var A=p.a,j=p.b,_=d===A;if(_&&k)Dn($,j,u,++l),Kn(a,u,d,g,b,i),l+=$.b||0,Hn(a,u,d,w,++l),l+=w.b||0,s+=2,b+=2;else if(_)l++,Kn(a,u,h,g,b,i),Dn($,j,u,l),l+=$.b||0,s+=1,b+=2;else if(k)Hn(a,u,d,$,++l),l+=$.b||0,Dn(w,g,u,++l),l+=w.b||0,s+=2,b+=1;else{if(!m||y!==A)break;Hn(a,u,d,$,++l),Kn(a,u,h,g,b,i),l+=$.b||0,Dn(w,j,u,++l),l+=w.b||0,s+=2,b+=2}}else Dn($,g,u,++l),l+=$.b||0,s++,b++}for(;s<c;){var T;Hn(a,u,(T=f[s]).a,$=T.b,++l),l+=$.b||0,s++}for(;b<v;){var N,E=E||[];Kn(a,u,(N=o[b]).a,N.b,void 0,E),b++}(0<u.length||0<i.length||E)&&Rn(t,8,e,{w:u,x:i,y:E})}var Gn="_elmW6BL";function Kn(n,r,t,e,u,a){var i=n[t];if(!i)return a.push({r:u,A:i={c:0,z:e,r:u,s:void 0}}),void(n[t]=i);if(1===i.c){a.push({r:u,A:i}),i.c=2;var f=[];return Dn(i.z,e,f,i.r),i.r=u,void(i.s.s={w:f,A:i})}Kn(n,r,t+Gn,e,u,a)}function Hn(n,r,t,e,u){var a=n[t];if(a){if(0===a.c){a.c=2;var i=[];return Dn(e,a.z,i,u),void Rn(r,9,u,{w:i,A:a})}Hn(n,r,t+Gn,e,u)}else{var f=Rn(r,9,u,void 0);n[t]={c:1,z:e,r:u,s:f}}}function Qn(n,r,t,e){!function n(r,t,e,u,a,i,f){var o=e[u];var c=o.r;for(;c===a;){var v=o.$;if(1===v)Qn(r,t.k,o.s,f);else if(8===v){o.t=r,o.u=f;var s=o.s.w;0<s.length&&n(r,t,s,0,a,i,f)}else if(9===v){o.t=r,o.u=f;var b=o.s;if(b){b.A.s=r;var s=b.w;0<s.length&&n(r,t,s,0,a,i,f)}}else o.t=r,o.u=f;if(!(o=e[++u])||(c=o.r)>i)return u}var l=t.$;if(4===l){for(var d=t.k;4===d.$;)d=d.k;return n(r,d,e,u,a+1,i,r.elm_event_node_ref)}var h=t.e;var $=r.childNodes;for(var g=0;g<h.length;g++){var m=1===l?h[g]:h[g].b,p=++a+(m.b||0);if(a<=c&&c<=p&&(u=n($[g],m,e,u,a,p,f),!(o=e[u])||(c=o.r)>i))return u;a=p}return u}(n,r,t,0,0,r.b,e)}function Un(n,r,t,e){return 0===t.length?n:(Qn(n,r,t,e),Vn(n,t))}function Vn(n,r){for(var t=0;t<r.length;t++){var e=r[t],u=e.t,a=Zn(u,e);u===n&&(n=a)}return n}function Zn(n,r){switch(r.$){case 0:return function(n,r,t){var e=n.parentNode,u=qn(r,t);u.elm_event_node_ref||(u.elm_event_node_ref=n.elm_event_node_ref);e&&u!==n&&e.replaceChild(u,n);return u}(n,r.s,r.u);case 4:return Sn(n,r.u,r.s),n;case 3:return n.replaceData(0,n.length,r.s),n;case 1:return Vn(n,r.s);case 2:return n.elm_event_node_ref?n.elm_event_node_ref.j=r.s:n.elm_event_node_ref={j:r.s,p:r.u},n;case 6:for(var t=r.s,e=0;e<t.i;e++)n.removeChild(n.childNodes[t.v]);return n;case 7:for(var u=(t=r.s).e,a=n.childNodes[e=t.v];e<u.length;e++)n.insertBefore(qn(u[e],r.u),a);return n;case 9:if(!(t=r.s))return n.parentNode.removeChild(n),n;var i=t.A;return void 0!==i.r&&n.parentNode.removeChild(n),i.s=Vn(n,t.w),n;case 8:return function(n,r){var t=r.s,e=function(n,r){if(!n)return;for(var t=pn.createDocumentFragment(),e=0;e<n.length;e++){var u=n[e],a=u.A;yn(t,2===a.c?a.s:qn(a.z,r.u))}return t}(t.y,r);n=Vn(n,t.w);for(var u=t.x,a=0;a<u.length;a++){var i=u[a],f=i.A,o=2===f.c?f.s:qn(f.z,r.u);n.insertBefore(o,n.childNodes[i.r])}e&&yn(n,e);return n}(n,r);case 5:return r.s(n);default:T(10)}}function nr(n){if(3===n.nodeType)return wn(n.textContent);if(1!==n.nodeType)return wn("");for(var r=$,t=n.attributes,e=t.length;e--;){var u=t[e];r=g(b(Nn,u.name,u.value),r)}var a=n.tagName.toLowerCase(),i=$,f=n.childNodes;for(e=f.length;e--;)i=g(nr(f[e]),i);return s(kn,a,r,i)}var rr=u(function(r,n,t,f){return cn(n,f,r.co,r.cY,r.cS,function(e,n){var u=r.c_,a=f.node,i=nr(a);return er(n,function(n){var r=u(n),t=Yn(i,r);a=Un(a,i,t,e),i=r})})}),tr="undefined"!=typeof requestAnimationFrame?requestAnimationFrame:function(n){setTimeout(n,1e3/60)};function er(t,e){e(t);var u=0;function a(){u=1===u?0:(tr(a),e(t),1)}return function(n,r){t=n,r?(e(t),2===u&&(u=1)):(0===u&&tr(a),u=2)}}var ur={addEventListener:function(){},removeEventListener:function(){}};"undefined"!=typeof document&&document,"undefined"!=typeof window&&window;var ar=function(n){return n},ir=function(n){return!n.$},fr=u(function(n,r,t,e){return{$:0,a:n,b:r,c:t,d:e}}),or=c,cr=x,vr=e(function(n,r){return q(r)/q(n)}),sr=cr(b(vr,2,32)),br=[],lr=d(fr,0,sr,br,br),dr=_,hr=t(function(n,r,t){for(;;){if(!t.b)return r;var e=t.b,u=n,a=b(n,t.a,r);n=u,r=a,t=e}}),$r=function(n){return s(hr,or,$,n)},gr=e(function(n,r){for(;;){var t=b(dr,32,n),e=t.b,u=b(or,{$:0,a:t.a},r);if(!e.b)return $r(u);n=e,r=u}}),mr=e(function(n,r){for(;;){var t=cr(r/32);if(1===t)return b(dr,32,n).a;n=b(gr,n,$),r=t}}),pr=J,yr=e(function(n,r){return 0<p(n,r)?n:r}),wr=function(n){return n.length},kr=e(function(n,r){if(r.k){var t=32*r.k,e=pr(b(vr,32,t-1)),u=n?$r(r.o):r.o,a=b(mr,u,r.k);return d(fr,wr(r.n)+t,b(yr,5,e*sr),a,r.n)}return d(fr,wr(r.n),sr,br,r.n)}),Ar=j,jr=a(function(n,r,t,e,u){for(;;){if(r<0)return b(kr,!1,{o:e,k:t/32|0,n:u});var a={$:1,a:s(Ar,32,r,n)};n=n,r=r-32,t=t,e=b(or,a,e),u=u}}),_r=e(function(n,r){if(0<n){var t=n%32;return l(jr,r,n-t-32,n,$,s(Ar,t,n-t,r))}return lr}),Tr=function(n){return{$:0,a:n}},Nr={$:1},Er=function(n){return{$:1,a:n}},xr=function(n){return{$:0,a:n}},Jr=e(function(n,r){return{$:3,a:n,b:r}}),Lr=e(function(n,r){return{$:0,a:n,b:r}}),qr=e(function(n,r){return{$:1,a:n,b:r}}),Sr=function(n){return{$:2,a:n}},Cr=C,Mr=e(function(n,r){return b(S,n,v(r))}),Fr=B,zr=O,Br=function(n){return{$:0,a:n}},Or=function(n){switch(n.$){case 0:return 0;case 1:return 1;case 2:return 2;default:return 3}},Yr=b(kn("canvas"),$,$),Rr=e(function(n,r){return G(s(hr,function(t){return e(function(n,r){return r.push(K(t(n))),r})}(n),[],r))}),Dr=function(n){return G(s(hr,e(function(n,r){return s(H,n.a,n.b,r)}),{},n))},Pr=G,Ir=e(function(n,r){return Dr(m([w("type",Pr("function")),w("name",Pr(n)),w("args",b(Rr,ar,r))]))}),Wr=G,Xr=a(function(n,r,t,e,u){return b(Ir,"arcTo",m([Wr(n),Wr(r),Wr(t),Wr(e),Wr(u)]))}),Gr=i(function(n,r,t,e,u,a){return b(Ir,"bezierCurveTo",m([Wr(n),Wr(r),Wr(t),Wr(e),Wr(u),Wr(a)]))}),Kr=e(function(n,r){return b(Ir,"lineTo",m([Wr(n),Wr(r)]))}),Hr=e(function(n,r){return b(Ir,"moveTo",m([Wr(n),Wr(r)]))}),Qr=u(function(n,r,t,e){return b(Ir,"quadraticCurveTo",m([Wr(n),Wr(r),Wr(t),Wr(e)]))}),Ur=e(function(n,r){switch(n.$){case 0:var t=n.a,e=n.b;return b(or,l(Xr,t.a,t.b,e.a,e.b,n.c),r);case 1:var u=n.a,a=n.b,i=n.c;return b(or,h(Gr,u.a,u.b,a.a,a.b,i.a,i.b),r);case 2:var f=n.a;return b(or,b(Kr,f.a,f.b),r);case 3:var o=n.a;return b(or,b(Hr,o.a,o.b),r);default:var c=n.a,v=n.b;return b(or,d(Qr,c.a,c.b,v.a,v.b),r)}}),Vr=G,Zr=i(function(n,r,t,e,u,a){return b(Ir,"arc",m([Wr(n),Wr(r),Wr(t),Wr(e),Wr(u),Vr(a)]))}),nt=t(function(n,r,t){return h(Zr,n,r,t,0,6.283185307179586,!1)}),rt=u(function(n,r,t,e){return b(Ir,"rect",m([Wr(n),Wr(r),Wr(t),Wr(e)]))}),tt=N,et=E,ut=e(function(n,r){switch(n.$){case 0:var t=n.a;return b(or,d(rt,f=t.a,o=t.b,n.b,n.c),b(or,b(Hr,f,o),r));case 1:var e=n.a,u=n.b;return b(or,s(nt,f=e.a,o=e.b,u),b(or,b(Hr,f+u,o),r));case 2:var a=n.a,i=n.b;return s(hr,Ur,b(or,b(Hr,f=a.a,o=a.b),r),i);default:var f,o,c=n.a,v=n.c;return b(or,h(Zr,f=c.a,o=c.b,n.b,v,n.d,n.e),b(or,b(Hr,f+tt(v),o+et(v)),r))}}),at=e(function(n,r){return Dr(m([w("type",Pr("field")),w("name",Pr(n)),w("value",r)]))}),it=L,ft=C,ot=function(n){var r,t,e=n.b,u=n.c,a=n.d,i=function(n){return it(1e4*n)/100};return r=m(["rgba(",ft(i(n.a)),"%,",ft(i(e)),"%,",ft(i(u)),"%,",ft((t=a,it(1e3*t)/1e3)),")"]),b(Mr,"",r)},ct=function(n){return b(at,"fillStyle",Pr(ot(n)))},vt=e(function(n,r){return b(or,b(Ir,"fill",m([Pr(function(n){return n?"evenodd":"nonzero"}(0))])),b(or,ct(n),r))}),st=b(Ir,"stroke",$),bt=function(n){return b(at,"strokeStyle",Pr(ot(n)))},lt=e(function(n,r){return b(or,st,b(or,bt(n),r))}),dt=u(function(n,r,t,e){return{$:0,a:n,b:r,c:t,d:e}}),ht=d(dt,0,0,0,1),$t=e(function(n,r){switch(n.$){case 0:return b(vt,ht,r);case 1:return b(vt,n.a,r);case 2:return b(lt,n.a,r);default:return b(lt,n.b,b(vt,n.a,r))}}),gt=u(function(n,r,t,e){if(1===e.$)return b(Ir,"fillText",m([Pr(n),Wr(r),Wr(t)]));var u=e.a;return b(Ir,"fillText",m([Pr(n),Wr(r),Wr(t),Wr(u)]))}),mt=a(function(n,r,t,e,u){return b(or,d(gt,n.a9,r,t,n.aS),b(or,ct(e),u))}),pt=u(function(n,r,t,e){if(1===e.$)return b(Ir,"strokeText",m([Pr(n),Wr(r),Wr(t)]));var u=e.a;return b(Ir,"strokeText",m([Pr(n),Wr(r),Wr(t),Wr(u)]))}),yt=a(function(n,r,t,e,u){return b(or,d(pt,n.a9,r,t,n.aS),b(or,bt(e),u))}),wt=t(function(n,r,t){var e=r.bD,u=e.a,a=e.b;switch(n.$){case 0:return l(mt,r,u,a,ht,t);case 1:return l(mt,r,u,a,n.a,t);case 2:return l(yt,r,u,a,n.a,t);default:return l(yt,r,u,a,n.b,l(mt,r,u,a,n.a,t))}}),kt=t(function(n,r,t){return s(wt,n,r,t)}),At=f(function(n,r,t,e,u,a,i,f,o){return b(Ir,"drawImage",m([o,Wr(n),Wr(r),Wr(t),Wr(e),Wr(u),Wr(a),Wr(i),Wr(f)]))}),jt=u(function(t,e,u,n){return b(or,function(){if(u.$){var n=u.a;return o(At,n.bR,n.bS,n.bc,n.aJ,t,e,n.bc,n.aJ,(r=u.b).cq)}var r;return o(At,0,0,(r=u.a).bc,r.aJ,t,e,r.bc,r.aJ,r.cq)}(),n)}),_t=t(function(n,r,t){return d(jt,n.a,n.b,r,t)}),Tt=b(Ir,"beginPath",$),Nt=t(function(n,r,t){switch(n.$){case 0:return s(kt,r,n.a,t);case 1:var e=n.a;return b($t,r,s(hr,ut,b(or,Tt,t),e));default:return s(_t,n.a,n.b,t)}}),Et=b(Ir,"restore",$),xt=b(Ir,"save",$),Jt=e(function(n,r){return b(or,Et,s(Nt,n.Y,n.X,A(n.J,b(or,xt,r))))}),Lt=$,qt=z,St=u(function(n,r,t,e){if(e.b){var u=e.a,a=e.b;if(a.b){var i=a.a,f=a.b;if(f.b){var o=f.a,c=f.b;if(c.b){var v=c.b;return b(n,u,b(n,i,b(n,o,b(n,c.a,500<t?s(hr,n,r,$r(v)):d(St,n,r,t+1,v)))))}return b(n,u,b(n,i,b(n,o,r)))}return b(n,u,b(n,i,r))}return b(n,u,r)}return r}),Ct=t(function(n,r,t){return d(St,n,r,0,t)}),Mt=M,Ft=e(function(n,r){return s(Ct,Mt,r,n)}),zt={$:2},Bt=b(qt,function(t){return s(zr,e(function(n,r){return{aJ:r,cq:t,bc:n}}),b(Ft,m(["target","width"]),zt),b(Ft,m(["target","height"]),zt))},b(Mt,"target",{$:5})),Ot=function(n){return{$:0,a:n}},Yt=t(function(n,r,t){return r(n(t))}),Rt=kn("img"),Dt=e(function(n,r){return b(Tn,n,Pr(r))}),Pt=_n,It=jn,Wt=e(function(n,r){return b(It,n,{$:0,a:r})}),Xt=function(n){var r=n.a,t=n.b;return w(r,b(Rt,m([function(n){return b(Dt,"src",En(n))}(r),b(Pt,"display","none"),b(Wt,"load",b(Fr,b(Yt,Ot,b(Yt,Tr,t)),Bt)),b(Wt,"error",Br(t(Nr)))]),$))},Gt=e(function(n,r){return b(Tn,function(n){return"innerHTML"==n||"formAction"==n?"data-"+n:n}(n),En(r))}),Kt=e(function(t,n){return s(Ct,e(function(n,r){return b(or,t(n),r)}),$,n)}),Ht=function(n){return An(function(n){return"script"==n?"p":n}(n))},Qt=t(function(n,r,t){return s(Ht,"elm-canvas",b(or,(e=function(n){return s(hr,Jt,Lt,n)}(t),b(Gt,"cmds",b(Rr,ar,e))),b(or,b(Nn,"height",Cr(n.aJ)),b(or,function(n){return b(Nn,"width",Cr(n))}(n.bc),r))),b(or,w("__canvas",Yr),b(Kt,Xt,n.bP)));var e}),Ut=t(function(n,r,t){return s(Qt,{aJ:n.b,bP:$,bc:n.a},r,t)}),Vt=t(function(n,r,t){return{$:0,a:n,b:r,c:t}}),Zt=t(function(n,r,t){return s(Vt,n,r,t)}),ne=function(n){return{$:1,a:n}},re=e(function(n,r){return{$:3,a:n,b:r}}),te=e(function(n,r){var t=w(n,r);n:for(;;)switch(t.b.$){case 3:var e=t.b;return b(re,e.a,e.b);case 1:switch(t.a.$){case 1:return ne(t.b.a);case 2:return b(re,t.b.a,t.a.a);case 3:var u=t.a;return b(re,t.b.a,u.b);default:break n}case 2:switch(t.a.$){case 2:return{$:2,a:t.b.a};case 1:return b(re,t.a.a,t.b.a);case 3:var a=t.a;return b(re,a.a,t.b.a);default:break n}default:if(t.a.$){return t.a}break n}return t.b}),ee=e(function(n,r){return s(hr,e(function(n,r){var t=r;switch(n.$){case 0:return k(t,{J:b(or,n.a,t.J)});case 1:return k(t,{J:s(hr,or,t.J,n.a)});case 3:return k(t,{Y:(0,n.a)(t.Y)});default:return k(t,{X:b(te,t.X,n.a)})}}),r,n)}),ue={$:0},ae=e(function(n,r){return b(ee,n,{J:$,X:ue,Y:(t=r,{$:1,a:t})});var t}),ie=function(n){return{$:2,a:ne(n)}},fe=b(ae,m([ie(d(dt,1,1,1,1))]),m([s(Zt,w(0,0),400,400)])),oe=function(n){return{$:0,a:n}},ce=e(function(n,r){return b(Ir,"scale",m([Wr(n),Wr(r)]))}),ve=i(function(n,r,t,e,u,a){return b(Ir,"transform",m([Wr(n),Wr(r),Wr(t),Wr(e),Wr(u),Wr(a)]))}),se=e(function(n,r){return b(Ir,"translate",m([Wr(n),Wr(r)]))}),be=function(n){return{$:1,a:b(Kt,function(n){switch(n.$){case 0:return function(n){return b(Ir,"rotate",m([Wr(n)]))}(n.a);case 1:return b(ce,n.a,n.b);case 2:return b(se,n.a,n.b);default:return h(ve,n.a.cs,n.a.ct,n.a.cu,n.a.cv,n.a.b9,n.a.ca)}},n)}},le=e(function(n,r){return{$:2,a:n,b:r}}),de=u(function(n,r,t,e){var u=function(n,r,t){return{a:n,b:r,c:t}}(n,r,t),a=u.a,i=u.b,f=u.c,o=.5<f?f+i-f*i:f*(i+1),c=2*f-o,v=function(n){var r=n<0?n+1:1<n?n-1:n;return 6*r<1?c+(o-c)*r*6:2*r<1?o:3*r<2?c+(o-c)*(2/3-r)*6:c},s=v(a-1/3),b=v(a),l=v(a+1/3);return d(dt,l,b,s,e)}),he=t(function(n,r,t){return d(de,n,r,t,1)}),$e=function(n){return 3.141592653589793*n/180},ge=kn("div"),me=Q,pe=me(0),ye=V,we=e(function(r,n){return b(ye,function(n){return me(r(n))},n)}),ke=t(function(t,n,e){return b(ye,function(r){return b(ye,function(n){return me(b(t,r,n))},e)},n)}),Ae=function(n){return s(Ct,ke(or),me($),n)},je=ln,_e=e(function(n,r){var t=r;return rn(b(ye,je(n),t))});vn.Task=sn(pe,t(function(n,r){return b(we,function(){return 0},Ae(b(Kt,_e(n),r)))}),t(function(){return me(0)}),e(function(n,r){return b(we,n,r)}));hn("Task");var Te=rr,Ne=function(n){return{$:1,a:n}},Ee=t(function(n,r,t){return{aW:t,bK:r,bN:n}}),xe=me(s(Ee,$,Nr,0)),Je=U(function(n){n(Q(Date.now()))}),Le=U(function(n){var r=requestAnimationFrame(function(){n(Q(Date.now()))});return function(){cancelAnimationFrame(r)}}),qe=dn,Se=function(t){return U(function(n){var r=t.f;2===r.$&&r.c&&r.c(),t.f=null,n(Q(y))})},Ce=rn,Me=t(function(n,t,r){var e=r.bK,u=r.aW,a=w(e,t);if(1!==a.a.$)return a.b.b?me(s(Ee,t,e,u)):b(ye,function(){return xe},Se(a.a.a));if(a.b.b){return b(ye,function(r){return b(ye,function(n){return me(s(Ee,t,Tr(r),n))},Je)},Ce(b(ye,qe(n),Le)))}return xe}),Fe=ar,ze=t(function(r,t,n){var e=n.bN,u=n.aW,a=function(n){return b(je,r,n.$?(0,n.a)(t-u):(0,n.a)(Fe(t)))};return b(ye,function(n){return b(ye,function(){return me(s(Ee,e,Tr(n),t))},Ae(b(Kt,a,e)))},Ce(b(ye,qe(r),Le)))}),Be=t(function(n,r,t){return n(r(t))});vn["Browser.AnimationManager"]=sn(xe,Me,ze,0,e(function(n,r){return r.$?Ne(b(Be,n,r.a)):{$:0,a:b(Be,n,r.a)}}));var Oe,Ye=hn("Browser.AnimationManager"),Re=function(n){return Ye(Ne(n))},De=function(n){return{$:2,m:n}}($),Pe=Te({co:function(){return w({ak:0},De)},cS:function(){return Re(ar)},cY:e(function(n,r){return w(k(r,{ak:r.ak+1}),De)}),c_:function(n){var r=n.ak;return b(ge,m([b(Pt,"display","flex"),b(Pt,"justify-content","center"),b(Pt,"align-items","center")]),m([s(Ut,w(400,400),m([b(Pt,"border","10px solid rgba(0,0,0,0.1)")]),m([fe,function(n){return b(ae,m([be(m([b(le,200,200),oe($e(3*n))])),ie(s(he,$e(n/4),.3,.7))]),m([s(Zt,w(-400/3/2,-400/3/2),400/3,400/3)]))}(r)]))]))}});Oe={Examples:{Ellie:{init:Pe(Br(0))(0)}}},n.Elm?function n(r,t){for(var e in t)e in r?"init"==e?T(6):n(r[e],t[e]):r[e]=t[e]}(n.Elm,Oe):n.Elm=Oe}(this);