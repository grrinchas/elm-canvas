!function(n){"use strict";function r(n,r,t){return t.a=n,t.f=r,t}function e(t){return r(2,t,function(r){return function(n){return t(r,n)}})}function t(e){return r(3,e,function(t){return function(r){return function(n){return e(t,r,n)}}})}function u(u){return r(4,u,function(e){return function(t){return function(r){return function(n){return u(e,t,r,n)}}}})}function a(a){return r(5,a,function(u){return function(e){return function(t){return function(r){return function(n){return a(u,e,t,r,n)}}}}})}function i(i){return r(6,i,function(a){return function(u){return function(e){return function(t){return function(r){return function(n){return i(a,u,e,t,r,n)}}}}}})}function f(c){return r(9,c,function(o){return function(f){return function(i){return function(a){return function(u){return function(e){return function(t){return function(r){return function(n){return c(o,f,i,a,u,e,t,r,n)}}}}}}}}})}function d(n,r,t){return 2===n.a?n.f(r,t):n(r)(t)}function h(n,r,t,e){return 3===n.a?n.f(r,t,e):n(r)(t)(e)}function $(n,r,t,e,u){return 4===n.a?n.f(r,t,e,u):n(r)(t)(e)(u)}function s(n,r,t,e,u,a){return 5===n.a?n.f(r,t,e,u,a):n(r)(t)(e)(u)(a)}function g(n,r,t,e,u,a,i){return 6===n.a?n.f(r,t,e,u,a,i):n(r)(t)(e)(u)(a)(i)}function o(n,r,t,e,u,a,i,f,o,c){return 9===n.a?n.f(r,t,e,u,a,i,f,o,c):n(r)(t)(e)(u)(a)(i)(f)(o)(c)}function c(n,r,t){if("object"!=typeof n)return n===r?0:n<r?-1:1;if(void 0===n.$)return(t=c(n.a,r.a))?t:(t=c(n.b,r.b))?t:c(n.c,r.c);for(;n.b&&r.b&&!(t=c(n.a,r.a));n=n.b,r=r.b);return t||(n.b?1:r.b?-1:0)}var v=0;function b(n,r){return{a:n,b:r}}function l(n,r){var t={};for(var e in n)t[e]=n[e];for(var e in r)t[e]=r[e];return t}function m(n,r){if("string"==typeof n)return n+r;if(!n.b)return r;var t=y(n.a,r);n=n.b;for(var e=t;n.b;n=n.b)e=e.b=y(n.a,r);return t}var p={$:0};function y(n,r){return{$:1,a:n,b:r}}var w=e(y);function A(n){for(var r=p,t=n.length;t--;)r=y(n[t],r);return r}function k(n){for(var r=[];n.b;n=n.b)r.push(n.a);return r}var j=t(function(n,r,t){for(var e=Array(n),u=0;u<n;u++)e[u]=t(r+u);return e}),_=e(function(n,r){for(var t=Array(n),e=0;e<n&&r.b;e++)t[e]=r.a,r=r.b;return t.length=e,b(t,r)});function T(n){throw Error("https://github.com/elm/core/blob/1.0.0/hints/"+n+".md")}var N=Math.cos,E=Math.sin;var L=Math.ceil,G=Math.floor,x=Math.round,C=Math.log;var F=e(function(n,r){return r.join(n)});function M(n){return n+""}function q(n){return{$:2,b:n}}q(function(n){return"number"!=typeof n?W("an INT",n):-2147483647<n&&n<2147483647&&(0|n)===n?pr(n):!isFinite(n)||n%1?W("an INT",n):pr(n)}),q(function(n){return"boolean"==typeof n?pr(n):W("a BOOL",n)});var z=q(function(n){return"number"==typeof n?pr(n):W("a FLOAT",n)}),B=q(function(n){return pr(V(n))}),O=q(function(n){return"string"==typeof n?pr(n):n instanceof String?pr(n+""):W("a STRING",n)});var R=e(function(n,r){return{$:6,d:n,b:r}});function S(n,r){return{$:9,f:n,g:r}}var X=e(function(n,r){return{$:10,b:r,h:n}});var Y=e(function(n,r){return S(n,[r])}),I=u(function(n,r,t,e){return S(n,[r,t,e])}),D=e(function(n,r){return P(n,Z(r))});function P(n,r){switch(n.$){case 2:return n.b(r);case 5:return null===r?pr(n.c):W("null",r);case 3:return J(r)?H(n.b,r,A):W("a LIST",r);case 4:return J(r)?H(n.b,r,K):W("an ARRAY",r);case 6:var t=n.d;if("object"!=typeof r||null===r||!(t in r))return W("an OBJECT with a field named `"+t+"`",r);var e=P(n.b,r[t]);return Ir(e)?e:hr(d(gr,t,e.a));case 7:var u=n.e;if(!J(r))return W("an ARRAY",r);if(r.length<=u)return W("a LONGER array. Need index "+u+" but only see "+r.length+" entries",r);e=P(n.b,r[u]);return Ir(e)?e:hr(d(mr,u,e.a));case 8:if("object"!=typeof r||null===r||J(r))return W("an OBJECT",r);var a=p;for(var i in r)if(r.hasOwnProperty(i)){e=P(n.b,r[i]);if(!Ir(e))return hr(d(gr,i,e.a));a=y(b(i,e.a),a)}return pr(Tr(a));case 9:for(var f=n.f,o=n.g,c=0;c<o.length;c++){e=P(o[c],r);if(!Ir(e))return e;f=f(e.a)}return pr(f);case 10:e=P(n.b,r);return Ir(e)?P(n.h(e.a),r):e;case 11:for(var v=p,s=n.g;s.b;s=s.b){e=P(s.a,r);if(Ir(e))return e;v=y(e.a,v)}return hr(yr(Tr(v)));case 1:return hr(d($r,n.a,V(r)));case 0:return pr(n.a)}}function H(n,r,t){for(var e=r.length,u=Array(e),a=0;a<e;a++){var i=P(n,r[a]);if(!Ir(i))return hr(d(mr,a,i.a));u[a]=i.a}return pr(t(u))}function J(n){return Array.isArray(n)||"undefined"!=typeof FileList&&n instanceof FileList}function K(r){return d(Yr,r.length,function(n){return r[n]})}function W(n,r){return hr(d($r,"Expecting "+n,V(r)))}function Q(n,r){if(n===r)return!0;if(n.$!==r.$)return!1;switch(n.$){case 0:case 1:return n.a===r.a;case 2:return n.b===r.b;case 5:return n.c===r.c;case 3:case 4:case 8:return Q(n.b,r.b);case 6:return n.d===r.d&&Q(n.b,r.b);case 7:return n.e===r.e&&Q(n.b,r.b);case 9:return n.f===r.f&&U(n.g,r.g);case 10:return n.h===r.h&&Q(n.b,r.b);case 11:return U(n.g,r.g)}}function U(n,r){var t=n.length;if(t!==r.length)return!1;for(var e=0;e<t;e++)if(!Q(n[e],r[e]))return!1;return!0}function V(n){return n}function Z(n){return n}var nn=t(function(n,r,t){return t[n]=Z(r),t});V(null);function rn(n){return{$:0,a:n}}function tn(n){return{$:2,b:n,c:null}}var en=e(function(n,r){return{$:3,b:n,d:r}});var un=0;function an(n){var r={$:0,e:un++,f:n,g:null,h:[]};return bn(r),r}function fn(r){return tn(function(n){n(rn(an(r)))})}function on(n,r){n.h.push(r),bn(n)}var cn=e(function(r,t){return tn(function(n){on(r,t),n(rn(v))})});var vn=!1,sn=[];function bn(n){if(sn.push(n),!vn){for(vn=!0;n=sn.shift();)ln(n);vn=!1}}function ln(r){for(;r.f;){var n=r.f.$;if(0===n||1===n){for(;r.g&&r.g.$!==n;)r.g=r.g.i;if(!r.g)return;r.f=r.g.b(r.f.a),r.g=r.g.i}else{if(2===n)return void(r.f.c=r.f.b(function(n){r.f=n,bn(r)}));if(5===n){if(0===r.h.length)return;r.f=r.f.b(r.h.shift())}else r.g={$:3===n?0:1,b:r.f.b,i:r.g},r.f=r.f.d}}}function dn(n,r,t,e,u,a){var i=d(D,n,V(r?r.flags:void 0));Ir(i)||T(2);var f={},o=t(i.a),c=o.a,v=a(b,c),s=function(n,r){var t;for(var e in hn){var u=hn[e];u.a&&((t=t||{})[e]=u.a(e,r)),n[e]=gn(u,r)}return t}(f,b);function b(n,r){var t=d(e,n,c);v(c=t.a,r),kn(f,t.b,u(c))}return kn(f,o.b,u(c)),s?{ports:s}:{}}var hn={};function $n(n,r,t,e,u){return{b:n,c:r,d:t,e:e,f:u}}function gn(n,r){var e={g:r,h:void 0},u=n.c,a=n.d,i=n.e,f=n.f;function o(t){return d(en,o,{$:5,b:function(n){var r=n.a;return 0===n.$?h(a,e,r,t):i&&f?$(u,e,r.i,r.j,t):h(u,e,i?r.i:r.j,t)}})}return e.h=an(d(en,o,n.b))}var mn=e(function(r,t){return tn(function(n){r.g(t),n(rn(v))})}),pn=e(function(n,r){return d(cn,n.h,{$:0,a:r})});function yn(r){return function(n){return{$:1,k:r,l:n}}}var wn=[],An=!1;function kn(n,r,t){if(wn.push({p:n,q:r,r:t}),!An){An=!0;for(var e;e=wn.shift();)jn(e.p,e.q,e.r);An=!1}}function jn(n,r,t){var e={};for(var u in _n(!0,r,e,null),_n(!1,t,e,null),n)on(n[u],{$:"fx",a:e[u]||{i:p,j:p}})}function _n(n,r,t,e){switch(r.$){case 1:var u=r.k,a=function(n,r,t,e){function u(n){for(var r=t;r;r=r.t)n=r.s(n);return n}return d(n?hn[r].e:hn[r].f,u,e)}(n,u,e,r.l);return void(t[u]=function(n,r,t){return t=t||{i:p,j:p},n?t.i=y(r,t.i):t.j=y(r,t.j),t}(n,a,t[u]));case 2:for(var i=r.m;i.b;i=i.b)_n(n,i.a,t,e);return;case 3:return void _n(n,r.o,t,{s:r.n,t:e})}}var Tn;var Nn="undefined"!=typeof document?document:{};function En(n,r){n.appendChild(r)}function Ln(n){return{$:0,a:n}}var Gn=e(function(a,i){return e(function(n,r){for(var t=[],e=0;r.b;r=r.b){var u=r.a;e+=u.b||0,t.push(u)}return e+=t.length,{$:1,c:i,d:On(n),e:t,f:a,b:e}})})(void 0),xn=e(function(a,i){return e(function(n,r){for(var t=[],e=0;r.b;r=r.b){var u=r.a;e+=u.b.b||0,t.push(u)}return e+=t.length,{$:2,c:i,d:On(n),e:t,f:a,b:e}})})(void 0);var Cn=e(function(n,r){return{$:"a0",n:n,o:r}}),Fn=e(function(n,r){return{$:"a1",n:n,o:r}}),Mn=e(function(n,r){return{$:"a2",n:n,o:r}}),qn=e(function(n,r){return{$:"a3",n:n,o:r}});function zn(n){return/^\s*(javascript:|data:text\/html)/i.test(n)?"":n}var Bn;function On(n){for(var r={};n.b;n=n.b){var t=n.a,e=t.$,u=t.n,a=t.o;if("a2"!==e){var i=r[e]||(r[e]={});"a3"===e&&"class"===u?Rn(i,u,a):i[u]=a}else"className"===u?Rn(r,u,Z(a)):r[u]=Z(a)}return r}function Rn(n,r,t){var e=n[r];n[r]=e?e+" "+t:t}function Sn(n,r){var t=n.$;if(5===t)return Sn(n.k||(n.k=n.m()),r);if(0===t)return Nn.createTextNode(n.a);if(4===t){for(var e=n.k,u=n.j;4===e.$;)"object"!=typeof u?u=[u,e.j]:u.push(e.j),e=e.k;var a={j:u,p:r};return(i=Sn(e,a)).elm_event_node_ref=a,i}if(3===t)return Xn(i=n.h(n.g),r,n.d),i;var i=n.f?Nn.createElementNS(n.f,n.c):Nn.createElement(n.c);Tn&&"a"==n.c&&i.addEventListener("click",Tn(i)),Xn(i,r,n.d);for(var f=n.e,o=0;o<f.length;o++)En(i,Sn(1===t?f[o]:f[o].b,r));return i}function Xn(n,r,t){for(var e in t){var u=t[e];"a1"===e?Yn(n,u):"a0"===e?Pn(n,r,u):"a3"===e?In(n,u):"a4"===e?Dn(n,u):("value"!==e&&"checked"!==e||n[e]!==u)&&(n[e]=u)}}function Yn(n,r){var t=n.style;for(var e in r)t[e]=r[e]}function In(n,r){for(var t in r){var e=r[t];void 0!==e?n.setAttribute(t,e):n.removeAttribute(t)}}function Dn(n,r){for(var t in r){var e=r[t],u=e.f,a=e.o;void 0!==a?n.setAttributeNS(u,t,a):n.removeAttributeNS(u,t)}}function Pn(n,r,t){var e=n.elmFs||(n.elmFs={});for(var u in t){var a=t[u],i=e[u];if(a){if(i){if(i.q.$===a.$){i.q=a;continue}n.removeEventListener(u,i)}i=Hn(r,a),n.addEventListener(u,i,Bn&&{passive:Hr(a)<2}),e[u]=i}else n.removeEventListener(u,i),e[u]=void 0}}try{window.addEventListener("t",null,Object.defineProperty({},"passive",{get:function(){Bn=!0}}))}catch(n){}function Hn(v,n){function s(n){var r=s.q,t=P(r.a,n);if(Ir(t)){for(var e,u=Hr(r),a=t.a,i=u?u<3?a.a:a.R:a,f=1==u?a.b:3==u&&a.bt,o=(f&&n.stopPropagation(),(2==u?a.b:3==u&&a.bm)&&n.preventDefault(),v);e=o.j;){if("function"==typeof e)i=e(i);else for(var c=e.length;c--;)i=e[c](i);o=o.p}o(i,f)}}return s.q=n,s}function Jn(n,r){return n.$==r.$&&Q(n.a,r.a)}function Kn(n,r){var t=[];return Qn(n,r,t,0),t}function Wn(n,r,t,e){var u={$:r,r:t,s:e,t:void 0,u:void 0};return n.push(u),u}function Qn(n,r,t,e){if(n!==r){var u=n.$,a=r.$;if(u!==a){if(1!==u||2!==a)return void Wn(t,0,e,r);r=function(n){for(var r=n.e,t=r.length,e=Array(t),u=0;u<t;u++)e[u]=r[u].b;return{$:1,c:n.c,d:n.d,e:e,f:n.f,b:n.b}}(r),a=1}switch(a){case 5:for(var i=n.l,f=r.l,o=i.length,c=o===f.length;c&&o--;)c=i[o]===f[o];if(c)return void(r.k=n.k);r.k=r.m();var v=[];return Qn(n.k,r.k,v,0),void(0<v.length&&Wn(t,1,e,v));case 4:for(var s=n.j,b=r.j,l=!1,d=n.k;4===d.$;)l=!0,"object"!=typeof s?s=[s,d.j]:s.push(d.j),d=d.k;for(var h=r.k;4===h.$;)l=!0,"object"!=typeof b?b=[b,h.j]:b.push(h.j),h=h.k;return l&&s.length!==b.length?void Wn(t,0,e,r):((l?function(n,r){for(var t=0;t<n.length;t++)if(n[t]!==r[t])return!1;return!0}(s,b):s===b)||Wn(t,2,e,b),void Qn(d,h,t,e+1));case 0:return void(n.a!==r.a&&Wn(t,3,e,r.a));case 1:return void Un(n,r,t,e,Zn);case 2:return void Un(n,r,t,e,nr);case 3:if(n.h!==r.h)return void Wn(t,0,e,r);var $=Vn(n.d,r.d);$&&Wn(t,4,e,$);var g=r.i(n.g,r.g);return void(g&&Wn(t,5,e,g))}}}function Un(n,r,t,e,u){if(n.c===r.c&&n.f===r.f){var a=Vn(n.d,r.d);a&&Wn(t,4,e,a),u(n,r,t,e)}else Wn(t,0,e,r)}function Vn(n,r,t){var e;for(var u in n)if("a1"!==u&&"a0"!==u&&"a3"!==u&&"a4"!==u)if(u in r){var a=n[u],i=r[u];a===i&&"value"!==u&&"checked"!==u||"a0"===t&&Jn(a,i)||((e=e||{})[u]=i)}else(e=e||{})[u]=t?"a1"===t?"":"a0"===t||"a3"===t?void 0:{f:n[u].f,o:void 0}:"string"==typeof n[u]?"":null;else{var f=Vn(n[u],r[u]||{},u);f&&((e=e||{})[u]=f)}for(var o in r)o in n||((e=e||{})[o]=r[o]);return e}function Zn(n,r,t,e){var u=n.e,a=r.e,i=u.length,f=a.length;f<i?Wn(t,6,e,{v:f,i:i-f}):i<f&&Wn(t,7,e,{v:i,e:a});for(var o=i<f?i:f,c=0;c<o;c++){var v=u[c];Qn(v,a[c],t,++e),e+=v.b||0}}function nr(n,r,t,e){for(var u=[],a={},i=[],f=n.e,o=r.e,c=f.length,v=o.length,s=0,b=0,l=e;s<c&&b<v;){var d=(T=f[s]).a,h=(N=o[b]).a,$=T.b,g=N.b,m=void 0,p=void 0;if(d!==h){var y=f[s+1],w=o[b+1];if(y){var A=y.a,k=y.b;p=h===A}if(w){var j=w.a,_=w.b;m=d===j}if(m&&p)Qn($,_,u,++l),tr(a,u,d,g,b,i),l+=$.b||0,er(a,u,d,k,++l),l+=k.b||0,s+=2,b+=2;else if(m)l++,tr(a,u,h,g,b,i),Qn($,_,u,l),l+=$.b||0,s+=1,b+=2;else if(p)er(a,u,d,$,++l),l+=$.b||0,Qn(k,g,u,++l),l+=k.b||0,s+=2,b+=1;else{if(!y||A!==j)break;er(a,u,d,$,++l),tr(a,u,h,g,b,i),l+=$.b||0,Qn(k,_,u,++l),l+=k.b||0,s+=2,b+=2}}else Qn($,g,u,++l),l+=$.b||0,s++,b++}for(;s<c;){var T;er(a,u,(T=f[s]).a,$=T.b,++l),l+=$.b||0,s++}for(;b<v;){var N,E=E||[];tr(a,u,(N=o[b]).a,N.b,void 0,E),b++}(0<u.length||0<i.length||E)&&Wn(t,8,e,{w:u,x:i,y:E})}var rr="_elmW6BL";function tr(n,r,t,e,u,a){var i=n[t];if(!i)return a.push({r:u,A:i={c:0,z:e,r:u,s:void 0}}),void(n[t]=i);if(1===i.c){a.push({r:u,A:i}),i.c=2;var f=[];return Qn(i.z,e,f,i.r),i.r=u,void(i.s.s={w:f,A:i})}tr(n,r,t+rr,e,u,a)}function er(n,r,t,e,u){var a=n[t];if(a){if(0===a.c){a.c=2;var i=[];return Qn(e,a.z,i,u),void Wn(r,9,u,{w:i,A:a})}er(n,r,t+rr,e,u)}else{var f=Wn(r,9,u,void 0);n[t]={c:1,z:e,r:u,s:f}}}function ur(n,r,t,e){!function n(r,t,e,u,a,i,f){var o=e[u];var c=o.r;for(;c===a;){var v=o.$;if(1===v)ur(r,t.k,o.s,f);else if(8===v){o.t=r,o.u=f;var s=o.s.w;0<s.length&&n(r,t,s,0,a,i,f)}else if(9===v){o.t=r,o.u=f;var b=o.s;if(b){b.A.s=r;var s=b.w;0<s.length&&n(r,t,s,0,a,i,f)}}else o.t=r,o.u=f;if(!(o=e[++u])||(c=o.r)>i)return u}var l=t.$;if(4===l){for(var d=t.k;4===d.$;)d=d.k;return n(r,d,e,u,a+1,i,r.elm_event_node_ref)}var h=t.e;var $=r.childNodes;for(var g=0;g<h.length;g++){var m=1===l?h[g]:h[g].b,p=++a+(m.b||0);if(a<=c&&c<=p&&(u=n($[g],m,e,u,a,p,f),!(o=e[u])||(c=o.r)>i))return u;a=p}return u}(n,r,t,0,0,r.b,e)}function ar(n,r,t,e){return 0===t.length?n:(ur(n,r,t,e),ir(n,t))}function ir(n,r){for(var t=0;t<r.length;t++){var e=r[t],u=e.t,a=fr(u,e);u===n&&(n=a)}return n}function fr(n,r){switch(r.$){case 0:return function(n,r,t){var e=n.parentNode,u=Sn(r,t);u.elm_event_node_ref||(u.elm_event_node_ref=n.elm_event_node_ref);e&&u!==n&&e.replaceChild(u,n);return u}(n,r.s,r.u);case 4:return Xn(n,r.u,r.s),n;case 3:return n.replaceData(0,n.length,r.s),n;case 1:return ir(n,r.s);case 2:return n.elm_event_node_ref?n.elm_event_node_ref.j=r.s:n.elm_event_node_ref={j:r.s,p:r.u},n;case 6:for(var t=r.s,e=0;e<t.i;e++)n.removeChild(n.childNodes[t.v]);return n;case 7:for(var u=(t=r.s).e,a=n.childNodes[e=t.v];e<u.length;e++)n.insertBefore(Sn(u[e],r.u),a);return n;case 9:if(!(t=r.s))return n.parentNode.removeChild(n),n;var i=t.A;return void 0!==i.r&&n.parentNode.removeChild(n),i.s=ir(n,t.w),n;case 8:return function(n,r){var t=r.s,e=function(n,r){if(!n)return;for(var t=Nn.createDocumentFragment(),e=0;e<n.length;e++){var u=n[e],a=u.A;En(t,2===a.c?a.s:Sn(a.z,r.u))}return t}(t.y,r);n=ir(n,t.w);for(var u=t.x,a=0;a<u.length;a++){var i=u[a],f=i.A,o=2===f.c?f.s:Sn(f.z,r.u);n.insertBefore(o,n.childNodes[i.r])}e&&En(n,e);return n}(n,r);case 5:return r.s(n);default:T(10)}}function or(n){if(3===n.nodeType)return Ln(n.textContent);if(1!==n.nodeType)return Ln("");for(var r=p,t=n.attributes,e=t.length;e--;){var u=t[e];r=y(d(qn,u.name,u.value),r)}var a=n.tagName.toLowerCase(),i=p,f=n.childNodes;for(e=f.length;e--;)i=y(or(f[e]),i);return h(Gn,a,r,i)}var cr=u(function(r,n,t,f){return dn(n,f,r.cK,r.dh,r.da,function(e,n){var u=r.di,a=f.node,i=or(a);return br(n,function(n){var r=u(n),t=Kn(i,r);a=ar(a,i,t,e),i=r})})}),vr="undefined"!=typeof cancelAnimationFrame?cancelAnimationFrame:function(n){clearTimeout(n)},sr="undefined"!=typeof requestAnimationFrame?requestAnimationFrame:function(n){return setTimeout(n,1e3/60)};function br(t,e){e(t);var u=0;function a(){u=1===u?0:(sr(a),e(t),1)}return function(n,r){t=n,r?(e(t),2===u&&(u=1)):(0===u&&sr(a),u=2)}}var lr={addEventListener:function(){},removeEventListener:function(){}};"undefined"!=typeof document&&document,"undefined"!=typeof window&&window;var dr=w,hr=function(n){return{$:1,a:n}},$r=e(function(n,r){return{$:3,a:n,b:r}}),gr=e(function(n,r){return{$:0,a:n,b:r}}),mr=e(function(n,r){return{$:1,a:n,b:r}}),pr=function(n){return{$:0,a:n}},yr=function(n){return{$:2,a:n}},wr=function(n){return{$:0,a:n}},Ar={$:1},kr=M,jr=e(function(n,r){return d(F,n,k(r))}),_r=t(function(n,r,t){for(;;){if(!t.b)return r;var e=t.b,u=n,a=d(n,t.a,r);n=u,r=a,t=e}}),Tr=function(n){return h(_r,dr,p,n)},Nr=u(function(n,r,t,e){return{$:0,a:n,b:r,c:t,d:e}}),Er=[],Lr=L,Gr=e(function(n,r){return C(r)/C(n)}),xr=Lr(d(Gr,2,32)),Cr=$(Nr,0,xr,Er,Er),Fr=j,Mr=G,qr=function(n){return n.length},zr=e(function(n,r){return 0<c(n,r)?n:r}),Br=_,Or=e(function(n,r){for(;;){var t=d(Br,32,n),e=t.b,u=d(dr,{$:0,a:t.a},r);if(!e.b)return Tr(u);n=e,r=u}}),Rr=e(function(n,r){for(;;){var t=Lr(r/32);if(1===t)return d(Br,32,n).a;n=d(Or,n,p),r=t}}),Sr=e(function(n,r){if(r.i){var t=32*r.i,e=Mr(d(Gr,32,t-1)),u=n?Tr(r.m):r.m,a=d(Rr,u,r.i);return $(Nr,qr(r.l)+t,d(zr,5,e*xr),a,r.l)}return $(Nr,qr(r.l),xr,Er,r.l)}),Xr=a(function(n,r,t,e,u){for(;;){if(r<0)return d(Sr,!1,{m:e,i:t/32|0,l:u});var a={$:1,a:h(Fr,32,r,n)};n=n,r=r-32,t=t,e=d(dr,a,e),u=u}}),Yr=e(function(n,r){if(0<n){var t=n%32;return s(Xr,r,n-t-32,n,p,h(Fr,t,n-t,r))}return Cr}),Ir=function(n){return!n.$},Dr=Y,Pr=function(n){return{$:0,a:n}},Hr=function(n){switch(n.$){case 0:return 0;case 1:return 1;case 2:return 2;default:return 3}},Jr=function(n){return n},Kr=rn,Wr=Kr(0),Qr=u(function(n,r,t,e){if(e.b){var u=e.a,a=e.b;if(a.b){var i=a.a,f=a.b;if(f.b){var o=f.a,c=f.b;if(c.b){var v=c.b;return d(n,u,d(n,i,d(n,o,d(n,c.a,500<t?h(_r,n,r,Tr(v)):$(Qr,n,r,t+1,v)))))}return d(n,u,d(n,i,d(n,o,r)))}return d(n,u,d(n,i,r))}return d(n,u,r)}return r}),Ur=t(function(n,r,t){return $(Qr,n,r,0,t)}),Vr=e(function(t,n){return h(Ur,e(function(n,r){return d(dr,t(n),r)}),p,n)}),Zr=en,nt=e(function(r,n){return d(Zr,function(n){return Kr(r(n))},n)}),rt=t(function(t,n,e){return d(Zr,function(r){return d(Zr,function(n){return Kr(d(t,r,n))},e)},n)}),tt=function(n){return h(Ur,rt(dr),Kr(p),n)},et=mn,ut=e(function(n,r){var t=r;return fn(d(Zr,et(n),t))});hn.Task=$n(Wr,t(function(n,r){return d(nt,function(){return 0},tt(d(Vr,ut(n),r)))}),t(function(){return Kr(0)}),e(function(n,r){return d(nt,n,r)}));yn("Task");var at=cr,it=z,ft=function(n){return{$:2,m:n}}(p),ot=function(n){return{$:1,a:n}},ct=t(function(n,r,t){return{bd:t,b2:r,b5:n}}),vt=Kr(h(ct,p,Ar,0)),st=function(t){return tn(function(n){var r=t.f;2===r.$&&r.c&&r.c(),t.f=null,n(rn(v))})},bt=tn(function(n){n(rn(Date.now()))}),lt=tn(function(n){var r=sr(function(){n(rn(Date.now()))});return function(){vr(r)}}),dt=pn,ht=fn,$t=t(function(n,t,r){var e=r.b2,u=r.bd,a=b(e,t);if(1!==a.a.$)return a.b.b?Kr(h(ct,t,e,u)):d(Zr,function(){return vt},st(a.a.a));if(a.b.b){return d(Zr,function(r){return d(Zr,function(n){return Kr(h(ct,t,wr(r),n))},bt)},ht(d(Zr,dt(n),lt)))}return vt}),gt=Jr,mt=t(function(r,t,n){var e=n.b5,u=n.bd,a=function(n){return d(et,r,n.$?(0,n.a)(t-u):(0,n.a)(gt(t)))};return d(Zr,function(n){return d(Zr,function(){return Kr(h(ct,e,wr(n),t))},tt(d(Vr,a,e)))},ht(d(Zr,dt(r),lt)))}),pt=t(function(n,r,t){return n(r(t))});hn["Browser.AnimationManager"]=$n(vt,$t,mt,0,e(function(n,r){return r.$?ot(d(pt,n,r.a)):{$:0,a:d(pt,n,r.a)}}));var yt,wt=yn("Browser.AnimationManager"),At=function(n){return wt(ot(n))},kt=e(function(n,r){return b(r+1,ft)}),jt=function(n){return{$:0,a:n}},_t=function(n){return V(h(_r,e(function(n,r){return h(nn,n.a,n.b,r)}),{},n))},Tt=V,Nt=e(function(n,r){return _t(A([b("type",Tt("field")),b("name",Tt(n)),b("value",r)]))}),Et=function(n){return jt((r=function(n){switch(n){case 0:return"left";case 1:return"right";case 2:return"center";case 3:return"start";default:return"end"}}(n),d(Nt,"textAlign",Tt(r))));var r},Lt=function(n){return{$:1,a:n}},Gt=function(n){return{$:2,a:Lt(n)}},xt=function(n){var r,t=n.cC;return jt((r=kr(n.c6)+"px "+t,d(Nt,"font",Tt(r))))},Ct=t(function(n,r,t){return{$:0,a:n,b:r,c:t}}),Ft=t(function(n,r,t){return h(Ct,n,r,t)}),Mt=u(function(n,r,t,e){return{$:0,a:n,b:r,c:t,d:e}}),qt=t(function(n,r,t){return $(Mt,n,r,t,1)}),zt={$:0},Bt=e(function(n,r){return{$:3,a:n,b:r}}),Ot=e(function(n,r){var t=b(n,r);n:for(;;)switch(t.b.$){case 3:var e=t.b;return d(Bt,e.a,e.b);case 1:switch(t.a.$){case 1:return Lt(t.b.a);case 2:return d(Bt,t.b.a,t.a.a);case 3:var u=t.a;return d(Bt,t.b.a,u.b);default:break n}case 2:switch(t.a.$){case 2:return{$:2,a:t.b.a};case 1:return d(Bt,t.a.a,t.b.a);case 3:var a=t.a;return d(Bt,a.a,t.b.a);default:break n}default:if(t.a.$){return t.a}break n}return t.b}),Rt=e(function(n,r){return h(_r,e(function(n,r){var t=r;switch(n.$){case 0:return l(t,{G:d(dr,n.a,t.G)});case 1:return l(t,{G:h(_r,dr,t.G,n.a)});case 3:return l(t,{Y:(0,n.a)(t.Y)});default:return l(t,{X:d(Ot,t.X,n.a)})}}),r,n)}),St=e(function(n,r){return d(Rt,n,{G:p,X:zt,Y:(t=r,{$:1,a:t})});var t}),Xt=t(function(n,r,t){return d(Rt,n,{G:p,X:zt,Y:(e={a9:Ar,bX:r,bu:t},{$:0,a:e})});var e}),Yt=d(Gn("canvas"),p,p),It=e(function(n,r){return V(h(_r,function(t){return e(function(n,r){return r.push(Z(t(n))),r})}(n),[],r))}),Dt=e(function(n,r){return d(Mn,function(n){return"innerHTML"==n||"formAction"==n?"data-"+n:n}(n),zn(r))}),Pt=function(n){return xn(function(n){return"script"==n?"p":n}(n))},Ht=p,Jt=e(function(n,r){return _t(A([b("type",Tt("function")),b("name",Tt(n)),b("args",d(It,Jr,r))]))}),Kt=d(Jt,"beginPath",p),Wt=V,Qt=u(function(n,r,t,e){return d(Jt,"clearRect",A([Wt(n),Wt(r),Wt(t),Wt(e)]))}),Ut=u(function(n,r,t,e){return d(dr,$(Qt,n.a,n.b,r,t),e)}),Vt=V,Zt=i(function(n,r,t,e,u,a){return d(Jt,"arc",A([Wt(n),Wt(r),Wt(t),Wt(e),Wt(u),Vt(a)]))}),ne=t(function(n,r,t){return g(Zt,n,r,t,0,6.283185307179586,!1)}),re=N,te=e(function(n,r){return d(Jt,"moveTo",A([Wt(n),Wt(r)]))}),ee=u(function(n,r,t,e){return d(Jt,"rect",A([Wt(n),Wt(r),Wt(t),Wt(e)]))}),ue=a(function(n,r,t,e,u){return d(Jt,"arcTo",A([Wt(n),Wt(r),Wt(t),Wt(e),Wt(u)]))}),ae=i(function(n,r,t,e,u,a){return d(Jt,"bezierCurveTo",A([Wt(n),Wt(r),Wt(t),Wt(e),Wt(u),Wt(a)]))}),ie=e(function(n,r){return d(Jt,"lineTo",A([Wt(n),Wt(r)]))}),fe=u(function(n,r,t,e){return d(Jt,"quadraticCurveTo",A([Wt(n),Wt(r),Wt(t),Wt(e)]))}),oe=e(function(n,r){switch(n.$){case 0:var t=n.a,e=n.b;return d(dr,s(ue,t.a,t.b,e.a,e.b,n.c),r);case 1:var u=n.a,a=n.b,i=n.c;return d(dr,g(ae,u.a,u.b,a.a,a.b,i.a,i.b),r);case 2:var f=n.a;return d(dr,d(ie,f.a,f.b),r);case 3:var o=n.a;return d(dr,d(te,o.a,o.b),r);default:var c=n.a,v=n.b;return d(dr,$(fe,c.a,c.b,v.a,v.b),r)}}),ce=E,ve=e(function(n,r){switch(n.$){case 0:var t=n.a;return d(dr,$(ee,f=t.a,c=t.b,n.b,n.c),d(dr,d(te,f,c),r));case 1:var e=n.a,u=n.b;return d(dr,h(ne,f=e.a,c=e.b,u),d(dr,d(te,f+u,c),r));case 2:var a=n.a,i=n.b;return h(_r,oe,d(dr,d(te,f=a.a,c=a.b),r),i);default:var f,o=n.a,c=o.b,v=n.b,s=n.c,b=n.d,l=n.e;return d(dr,d(te,(f=o.a)+v*re(b),c+v*ce(b)),d(dr,g(Zt,f,c,v,s,b,l),d(dr,d(te,f+v*re(s),c+v*ce(s)),r)))}}),se=$(Mt,0,0,0,1),be=M,le=x,de=function(n){var r,t,e=n.b,u=n.c,a=n.d,i=function(n){return le(1e4*n)/100};return r=A(["rgba(",be(i(n.a)),"%,",be(i(e)),"%,",be(i(u)),"%,",be((t=a,le(1e3*t)/1e3)),")"]),d(jr,"",r)},he=function(n){return d(Nt,"fillStyle",Tt(de(n)))},$e=e(function(n,r){return d(dr,d(Jt,"fill",A([Tt(function(n){return n?"evenodd":"nonzero"}(0))])),d(dr,he(n),r))}),ge=d(Jt,"stroke",p),me=function(n){return d(Nt,"strokeStyle",Tt(de(n)))},pe=e(function(n,r){return d(dr,ge,d(dr,me(n),r))}),ye=e(function(n,r){switch(n.$){case 0:return d($e,se,r);case 1:return d($e,n.a,r);case 2:return d(pe,n.a,r);default:return d(pe,n.b,d($e,n.a,r))}}),we=u(function(n,r,t,e){if(1===e.$)return d(Jt,"fillText",A([Tt(n),Wt(r),Wt(t)]));var u=e.a;return d(Jt,"fillText",A([Tt(n),Wt(r),Wt(t),Wt(u)]))}),Ae=a(function(n,r,t,e,u){return d(dr,$(we,n.bu,r,t,n.a9),d(dr,he(e),u))}),ke=u(function(n,r,t,e){if(1===e.$)return d(Jt,"strokeText",A([Tt(n),Wt(r),Wt(t)]));var u=e.a;return d(Jt,"strokeText",A([Tt(n),Wt(r),Wt(t),Wt(u)]))}),je=a(function(n,r,t,e,u){return d(dr,$(ke,n.bu,r,t,n.a9),d(dr,me(e),u))}),_e=t(function(n,r,t){var e=r.bX,u=e.a,a=e.b;switch(n.$){case 0:return s(Ae,r,u,a,se,t);case 1:return s(Ae,r,u,a,n.a,t);case 2:return s(je,r,u,a,n.a,t);default:return s(je,r,u,a,n.b,s(Ae,r,u,a,n.a,t))}}),Te=t(function(n,r,t){return h(_e,n,r,t)}),Ne=f(function(n,r,t,e,u,a,i,f,o){return d(Jt,"drawImage",A([o,Wt(n),Wt(r),Wt(t),Wt(e),Wt(u),Wt(a),Wt(i),Wt(f)]))}),Ee=u(function(t,e,u,n){return d(dr,function(){if(u.$){var n=u.a;return o(Ne,n.cb,n.cc,n.ca,n.bG,t,e,n.ca,n.bG,(r=u.b).aN)}var r;return o(Ne,0,0,(r=u.a).ca,r.bG,t,e,r.ca,r.bG,r.aN)}(),n)}),Le=t(function(n,r,t){return $(Ee,n.a,n.b,r,t)}),Ge=t(function(n,r,t){switch(n.$){case 0:return h(Te,r,n.a,t);case 1:var e=n.a;return d(ye,r,h(_r,ve,d(dr,Kt,t),e));case 2:return h(Le,n.a,n.b,t);default:return $(Ut,n.a,n.b,n.c,t)}}),xe=d(Jt,"restore",p),Ce=d(Jt,"save",p),Fe=e(function(n,r){return d(dr,xe,h(Ge,n.Y,n.X,m(n.G,d(dr,Ce,r))))}),Me=e(function(n,r){return d(qn,function(n){return/^(on|formAction$)/i.test(n)?"data-"+n:n}(n),zn(r))}),qe=X,ze=R,Be=e(function(n,r){return h(Ur,ze,r,n)}),Oe=I,Re=O,Se=d(ze,"target",d(qe,function(e){return $(Oe,t(function(n,r,t){return"HTMLImageElement"===n?wr({$:0,a:{bG:t,aN:e,ca:r}}):Ar}),d(Be,A(["constructor","name"]),Re),d(ze,"width",it),d(ze,"height",it))},B)),Xe=Gn("img"),Ye=Cn,Ie=e(function(n,r){return d(Ye,n,{$:0,a:r})}),De=e(function(n,r){return d(Mn,n,Tt(r))}),Pe=Fn,He=function(n){var r=n.a,t=n.b;return b(r,d(Xe,A([function(n){return d(De,"src",zn(n))}(r),d(Me,"crossorigin","anonymous"),d(Pe,"display","none"),d(Ie,"load",d(Dr,t,Se)),d(Ie,"error",Pr(t(Ar)))]),p))},Je=t(function(n,r,t){return h(Pt,"elm-canvas",d(dr,(e=function(n){return h(_r,Fe,Ht,n)}(t),d(Dt,"cmds",d(It,Jr,e))),d(dr,d(qn,"height",kr(n.bG)),d(dr,function(n){return d(qn,"width",kr(n))}(n.ca),r))),d(dr,b("__canvas",Yt),d(Vr,He,n.b7)));var e}),Ke=t(function(n,r,t){return h(Je,{bG:n.b,b7:p,ca:n.a},r,t)}),We=$(Mt,1,1,1,1),Qe=at({cK:function(){return b(0,ft)},da:function(){return At(Jr)},dh:kt,di:function(n){return h(Ke,b(500,500),p,A([d(St,A([Gt(We)]),A([h(Ft,b(0,0),500,500)])),h(Xt,A([xt({cC:"sans-serif",c6:48}),Et(2),Gt(h(qt,255,0,0))]),b(250,250),kr(n))]))}});yt={Template:{init:Qe(it)(0)}},n.Elm?function n(r,t){for(var e in t)e in r?"init"==e?T(6):n(r[e],t[e]):r[e]=t[e]}(n.Elm,yt):n.Elm=yt}(this);