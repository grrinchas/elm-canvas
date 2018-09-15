!function(n){"use strict";function r(n,r,t){return t.a=n,t.f=r,t}function u(t){return r(2,t,function(r){return function(n){return t(r,n)}})}function t(e){return r(3,e,function(t){return function(r){return function(n){return e(t,r,n)}}})}function e(u){return r(4,u,function(e){return function(t){return function(r){return function(n){return u(e,t,r,n)}}}})}function a(a){return r(5,a,function(u){return function(e){return function(t){return function(r){return function(n){return a(u,e,t,r,n)}}}}})}function i(i){return r(6,i,function(a){return function(u){return function(e){return function(t){return function(r){return function(n){return i(a,u,e,t,r,n)}}}}}})}function p(n,r,t){return 2===n.a?n.f(r,t):n(r)(t)}function m(n,r,t,e){return 3===n.a?n.f(r,t,e):n(r)(t)(e)}function y(n,r,t,e,u){return 4===n.a?n.f(r,t,e,u):n(r)(t)(e)(u)}function w(n,r,t,e,u,a){return 5===n.a?n.f(r,t,e,u,a):n(r)(t)(e)(u)(a)}function A(n,r,t,e,u,a,i){return 6===n.a?n.f(r,t,e,u,a,i):n(r)(t)(e)(u)(a)(i)}var l={$:0};function b(n,r){return{$:1,a:n,b:r}}var o=u(b);function d(n){for(var r=l,t=n.length;t--;)r=b(n[t],r);return r}function f(n){for(var r=[];n.b;n=n.b)r.push(n.a);return r}function c(n,r,t){if("object"!=typeof n)return n===r?0:n<r?-1:1;if(!n.$)return(t=c(n.a,r.a))?t:(t=c(n.b,r.b))?t:c(n.c,r.c);for(;n.b&&r.b&&!(t=c(n.a,r.a));n=n.b,r=r.b);return t||(n.b?1:r.b?-1:0)}var s=0;function h(n,r){return{a:n,b:r}}function v(n,r){var t={};for(var e in n)t[e]=n[e];for(var e in r)t[e]=r[e];return t}function g(n,r){if("string"==typeof n)return n+r;if(!n.b)return r;var t=b(n.a,r);n=n.b;for(var e=t;n.b;n=n.b)e=e.b=b(n.a,r);return t}var $=t(function(n,r,t){for(var e=Array(n),u=0;u<n;u++)e[u]=t(r+u);return e}),k=u(function(n,r){for(var t=Array(n),e=0;e<n&&r.b;e++)t[e]=r.a,r=r.b;return t.length=e,h(t,r)});function j(n){throw Error("https://github.com/elm/core/blob/1.0.0/hints/"+n+".md")}var x=u(Math.pow),_=Math.cos,T=Math.sin;var L=Math.ceil,N=Math.floor,E=Math.round,C=Math.log;var q=u(function(n,r){return r.join(n)});function O(n){return n+""}var B=u(function(n,r){return M(n,G(r))});function M(n,r){switch(n.$){case 3:return"boolean"==typeof r?yr(r):D("a BOOL",r);case 2:return"number"!=typeof r?D("an INT",r):-2147483647<r&&r<2147483647&&(0|r)===r?yr(r):!isFinite(r)||r%1?D("an INT",r):yr(r);case 4:return"number"==typeof r?yr(r):D("a FLOAT",r);case 6:return"string"==typeof r?yr(r):r instanceof String?yr(r+""):D("a STRING",r);case 9:return null===r?yr(n.c):D("null",r);case 5:return yr(I(r));case 7:return Array.isArray(r)?S(n.b,r,d):D("a LIST",r);case 8:return Array.isArray(r)?S(n.b,r,z):D("an ARRAY",r);case 10:var t=n.d;if("object"!=typeof r||null===r||!(t in r))return D("an OBJECT with a field named `"+t+"`",r);var e=M(n.b,r[t]);return Zn(e)?e:mr(p(Ar,t,e.a));case 11:var u=n.e;if(!Array.isArray(r))return D("an ARRAY",r);if(r.length<=u)return D("a LONGER array. Need index "+u+" but only see "+r.length+" entries",r);e=M(n.b,r[u]);return Zn(e)?e:mr(p(kr,u,e.a));case 12:if("object"!=typeof r||null===r||Array.isArray(r))return D("an OBJECT",r);var a=l;for(var i in r)if(r.hasOwnProperty(i)){e=M(n.b,r[i]);if(!Zn(e))return mr(p(Ar,i,e.a));a=b(h(i,e.a),a)}return yr(or(a));case 13:for(var o=n.f,f=n.g,c=0;c<f.length;c++){e=M(f[c],r);if(!Zn(e))return e;o=o(e.a)}return yr(o);case 14:e=M(n.b,r);return Zn(e)?M(n.h(e.a),r):e;case 15:for(var s=l,v=n.g;v.b;v=v.b){e=M(v.a,r);if(Zn(e))return e;s=b(e.a,s)}return mr(jr(or(s)));case 1:return mr(p(wr,n.a,I(r)));case 0:return yr(n.a)}}function S(n,r,t){for(var e=r.length,u=Array(e),a=0;a<e;a++){var i=M(n,r[a]);if(!Zn(i))return mr(p(kr,a,i.a));u[a]=i.a}return yr(t(u))}function z(r){return p(gr,r.length,function(n){return r[n]})}function D(n,r){return mr(p(wr,"Expecting "+n,I(r)))}function F(n,r){if(n===r)return!0;if(n.$!==r.$)return!1;switch(n.$){case 0:case 1:return n.a===r.a;case 3:case 2:case 4:case 6:case 5:return!0;case 9:return n.c===r.c;case 7:case 8:case 12:return F(n.b,r.b);case 10:return n.d===r.d&&F(n.b,r.b);case 11:return n.e===r.e&&F(n.b,r.b);case 13:return n.f===r.f&&R(n.g,r.g);case 14:return n.h===r.h&&F(n.b,r.b);case 15:return R(n.g,r.g)}}function R(n,r){var t=n.length;if(t!==r.length)return!1;for(var e=0;e<t;e++)if(!F(n[e],r[e]))return!1;return!0}function I(n){return n}function G(n){return n}var J=t(function(n,r,t){return t[n]=G(r),t});I(null);function P(n){return{$:0,a:n}}function Q(n){return{$:2,b:n,c:null}}var H=u(function(n,r){return{$:3,b:n,d:r}});var Y=0;function K(n){var r={$:0,e:Y++,f:n,g:null,h:[]};return nn(r),r}function V(r){return Q(function(n){n(P(K(r)))})}function W(n,r){n.h.push(r),nn(n)}var Z=u(function(r,t){return Q(function(n){W(r,t),n(P(s))})});var X=!1,U=[];function nn(n){if(U.push(n),!X){for(X=!0;n=U.shift();)rn(n);X=!1}}function rn(r){for(;r.f;){var n=r.f.$;if(0===n||1===n){for(;r.g&&r.g.$!==n;)r.g=r.g.i;if(!r.g)return;r.f=r.g.b(r.f.a),r.g=r.g.i}else{if(2===n)return void(r.f.c=r.f.b(function(n){r.f=n,nn(r)}));if(5===n){if(0===r.h.length)return;r.f=r.f.b(r.h.shift())}else r.g={$:3===n?0:1,b:r.f.b,i:r.g},r.f=r.f.d}}}function tn(n,r,t,e,u,a){var i=p(B,n,I(r?r.flags:void 0));Zn(i)||j(2);var o={},f=(i=t(i.a)).a,c=a(v,f),s=function(n,r){var t;for(var e in en){var u=en[e];u.a&&((t=t||{})[e]=u.a(e,r)),n[e]=an(u,r)}return t}(o,v);function v(n,r){c(f=(i=p(e,n,f)).a,r),vn(o,i.b,u(f))}return vn(o,i.b,u(f)),s?{ports:s}:{}}var en={};function un(n,r,t,e,u){return{b:n,c:r,d:t,e:e,f:u}}function an(n,r){var e={g:r,h:void 0},u=n.c,a=n.d,i=n.e,o=n.f;function f(t){return p(H,f,{$:5,b:function(n){var r=n.a;return 0===n.$?m(a,e,r,t):i&&o?y(u,e,r.i,r.j,t):m(u,e,i?r.i:r.j,t)}})}return e.h=K(p(H,f,n.b))}var on=u(function(r,t){return Q(function(n){r.g(t),n(P(s))})}),fn=u(function(n,r){return p(Z,n.h,{$:0,a:r})});function cn(r){return function(n){return{$:1,k:r,l:n}}}function sn(n){return{$:2,m:n}}function vn(n,r,t){var e={};for(var u in ln(!0,r,e,null),ln(!1,t,e,null),n)W(n[u],{$:"fx",a:e[u]||{i:l,j:l}})}function ln(n,r,t,e){switch(r.$){case 1:var u=r.k,a=function(n,r,t,e){function u(n){for(var r=t;r;r=r.q)n=r.p(n);return n}return p(n?en[r].e:en[r].f,u,e)}(n,u,e,r.l);return void(t[u]=function(n,r,t){return t=t||{i:l,j:l},n?t.i=b(r,t.i):t.j=b(r,t.j),t}(n,a,t[u]));case 2:for(var i=r.m;i.b;i=i.b)ln(n,i.a,t,e);return;case 3:return void ln(n,r.o,t,{p:r.n,q:e})}}var bn;var dn="undefined"!=typeof document?document:{};function hn(n,r){n.appendChild(r)}function gn(n){return{$:0,a:n}}var $n=u(function(a,i){return u(function(n,r){for(var t=[],e=0;r.b;r=r.b){var u=r.a;e+=u.b||0,t.push(u)}return e+=t.length,{$:1,c:i,d:An(n),e:t,f:a,b:e}})})(void 0);u(function(a,i){return u(function(n,r){for(var t=[],e=0;r.b;r=r.b){var u=r.a;e+=u.b.b||0,t.push(u)}return e+=t.length,{$:2,c:i,d:An(n),e:t,f:a,b:e}})})(void 0);var pn=u(function(n,r){return{$:"a0",n:n,o:r}}),mn=u(function(n,r){return{$:"a2",n:n,o:r}}),yn=u(function(n,r){return{$:"a3",n:n,o:r}});var wn;function An(n){for(var r={};n.b;n=n.b){var t=n.a,e=t.$,u=t.n,a=t.o;if("a2"!==e){var i=r[e]||(r[e]={});"a3"===e&&"class"===u?kn(i,u,a):i[u]=a}else"className"===u?kn(r,u,G(a)):r[u]=G(a)}return r}function kn(n,r,t){var e=n[r];n[r]=e?e+" "+t:t}function jn(n,r){var t=n.$;if(5===t)return jn(n.k||(n.k=n.m()),r);if(0===t)return dn.createTextNode(n.a);if(4===t){for(var e=n.k,u=n.j;4===e.$;)"object"!=typeof u?u=[u,e.j]:u.push(e.j),e=e.k;var a={j:u,p:r};return(i=jn(e,a)).elm_event_node_ref=a,i}if(3===t)return xn(i=n.h(n.g),r,n.d),i;var i=n.f?dn.createElementNS(n.f,n.c):dn.createElement(n.c);bn&&"a"==n.c&&i.addEventListener("click",bn(i)),xn(i,r,n.d);for(var o=n.e,f=0;f<o.length;f++)hn(i,jn(1===t?o[f]:o[f].b,r));return i}function xn(n,r,t){for(var e in t){var u=t[e];"a1"===e?_n(n,u):"a0"===e?Nn(n,r,u):"a3"===e?Tn(n,u):"a4"===e?Ln(n,u):("value"!==e||"checked"!==e||n[e]!==u)&&(n[e]=u)}}function _n(n,r){var t=n.style;for(var e in r)t[e]=r[e]}function Tn(n,r){for(var t in r){var e=r[t];e?n.setAttribute(t,e):n.removeAttribute(t)}}function Ln(n,r){for(var t in r){var e=r[t],u=e.f,a=e.o;a?n.setAttributeNS(u,t,a):n.removeAttributeNS(u,t)}}function Nn(n,r,t){var e=n.elmFs||(n.elmFs={});for(var u in t){var a=t[u],i=e[u];if(a){if(i){if(i.q.$===a.$){i.q=a;continue}n.removeEventListener(u,i)}i=En(r,a),n.addEventListener(u,i,wn&&{passive:Qr(a)<2}),e[u]=i}else n.removeEventListener(u,i),e[u]=void 0}}try{window.addEventListener("t",null,Object.defineProperty({},"passive",{get:function(){wn=!0}}))}catch(n){}function En(s,n){function v(n){var r=v.q,t=M(r.a,n);if(Zn(t)){for(var e,u=Qr(r),a=t.a,i=u?u<3?a.a:a.M:a,o=1==u?a.b:3==u&&a.bo,f=(o&&n.stopPropagation(),(2==u?a.b:3==u&&a.bi)&&n.preventDefault(),s);e=f.j;){if("function"==typeof e)i=e(i);else for(var c=e.length;c--;)i=e[c](i);f=f.p}f(i,o)}}return v.q=n,v}function Cn(n,r){return n.$==r.$&&F(n.a,r.a)}function qn(n,r){var t=[];return Bn(n,r,t,0),t}function On(n,r,t,e){var u={$:r,r:t,s:e,t:void 0,u:void 0};return n.push(u),u}function Bn(n,r,t,e){if(n!==r){var u=n.$,a=r.$;if(u!==a){if(1!==u||2!==a)return void On(t,0,e,r);r=function(n){for(var r=n.e,t=r.length,e=Array(t),u=0;u<t;u++)e[u]=r[u].b;return{$:1,c:n.c,d:n.d,e:e,f:n.f,b:n.b}}(r),a=1}switch(a){case 5:for(var i=n.l,o=r.l,f=i.length,c=f===o.length;c&&f--;)c=i[f]===o[f];if(c)return void(r.k=n.k);r.k=r.m();var s=[];return Bn(n.k,r.k,s,0),void(0<s.length&&On(t,1,e,s));case 4:for(var v=n.j,l=r.j,b=!1,d=n.k;4===d.$;)b=!0,"object"!=typeof v?v=[v,d.j]:v.push(d.j),d=d.k;for(var h=r.k;4===h.$;)b=!0,"object"!=typeof l?l=[l,h.j]:l.push(h.j),h=h.k;return b&&v.length!==l.length?void On(t,0,e,r):((b?function(n,r){for(var t=0;t<n.length;t++)if(n[t]!==r[t])return!1;return!0}(v,l):v===l)||On(t,2,e,l),void Bn(d,h,t,e+1));case 0:return void(n.a!==r.a&&On(t,3,e,r.a));case 1:return void Mn(n,r,t,e,zn);case 2:return void Mn(n,r,t,e,Dn);case 3:if(n.h!==r.h)return void On(t,0,e,r);var g=Sn(n.d,r.d);g&&On(t,4,e,g);var $=r.i(n.g,r.g);return void($&&On(t,5,e,$))}}}function Mn(n,r,t,e,u){if(n.c===r.c&&n.f===r.f){var a=Sn(n.d,r.d);a&&On(t,4,e,a),u(n,r,t,e)}else On(t,0,e,r)}function Sn(n,r,t){var e;for(var u in n)if("a1"!==u&&"a0"!==u&&"a3"!==u&&"a4"!==u)if(u in r){var a=n[u],i=r[u];a===i&&"value"!==u&&"checked"!==u||"a0"===t&&Cn(a,i)||((e=e||{})[u]=i)}else(e=e||{})[u]=t?"a1"===t?"":"a0"===t||"a3"===t?void 0:{f:n[u].f,o:void 0}:"string"==typeof n[u]?"":null;else{var o=Sn(n[u],r[u]||{},u);o&&((e=e||{})[u]=o)}for(var f in r)f in n||((e=e||{})[f]=r[f]);return e}function zn(n,r,t,e){var u=n.e,a=r.e,i=u.length,o=a.length;o<i?On(t,6,e,{v:o,i:i-o}):i<o&&On(t,7,e,{v:i,e:a});for(var f=i<o?i:o,c=0;c<f;c++){var s=u[c];Bn(s,a[c],t,++e),e+=s.b||0}}function Dn(n,r,t,e){for(var u=[],a={},i=[],o=n.e,f=r.e,c=o.length,s=f.length,v=0,l=0,b=e;v<c&&l<s;){var d=(_=o[v]).a,h=(T=f[l]).a,g=_.b,$=T.b;if(d!==h){var p=o[v+1],m=f[l+1];if(p)var y=p.a,w=p.b,A=h===y;if(m)var k=m.a,j=m.b,x=d===k;if(x&&A)Bn(g,j,u,++b),Rn(a,u,d,$,l,i),b+=g.b||0,In(a,u,d,w,++b),b+=w.b||0,v+=2,l+=2;else if(x)b++,Rn(a,u,h,$,l,i),Bn(g,j,u,b),b+=g.b||0,v+=1,l+=2;else if(A)In(a,u,d,g,++b),b+=g.b||0,Bn(w,$,u,++b),b+=w.b||0,v+=2,l+=1;else{if(!p||y!==k)break;In(a,u,d,g,++b),Rn(a,u,h,$,l,i),b+=g.b||0,Bn(w,j,u,++b),b+=w.b||0,v+=2,l+=2}}else Bn(g,$,u,++b),b+=g.b||0,v++,l++}for(;v<c;){var _;In(a,u,(_=o[v]).a,g=_.b,++b),b+=g.b||0,v++}for(;l<s;){var T,L=L||[];Rn(a,u,(T=f[l]).a,T.b,void 0,L),l++}(0<u.length||0<i.length||L)&&On(t,8,e,{w:u,x:i,y:L})}var Fn="_elmW6BL";function Rn(n,r,t,e,u,a){var i=n[t];if(!i)return a.push({r:u,A:i={c:0,z:e,r:u,s:void 0}}),void(n[t]=i);if(1===i.c){a.push({r:u,A:i}),i.c=2;var o=[];return Bn(i.z,e,o,i.r),i.r=u,void(i.s.s={w:o,A:i})}Rn(n,r,t+Fn,e,u,a)}function In(n,r,t,e,u){var a=n[t];if(a){if(0===a.c){a.c=2;var i=[];return Bn(e,a.z,i,u),void On(r,9,u,{w:i,A:a})}In(n,r,t+Fn,e,u)}else{var o=On(r,9,u,void 0);n[t]={c:1,z:e,r:u,s:o}}}function Gn(n,r,t,e){!function n(r,t,e,u,a,i,o){var f=e[u];var c=f.r;for(;c===a;){var s=f.$;if(1===s)Gn(r,t.k,f.s,o);else if(8===s){f.t=r,f.u=o;var v=f.s.w;0<v.length&&n(r,t,v,0,a,i,o)}else if(9===s){f.t=r,f.u=o;var l=f.s;if(l){l.A.s=r;var v=l.w;0<v.length&&n(r,t,v,0,a,i,o)}}else f.t=r,f.u=o;if(!(f=e[++u])||(c=f.r)>i)return u}var b=t.$;if(4===b){for(var d=t.k;4===d.$;)d=d.k;return n(r,d,e,u,a+1,i,r.elm_event_node_ref)}var h=t.e;var g=r.childNodes;for(var $=0;$<h.length;$++){var p=1===b?h[$]:h[$].b,m=++a+(p.b||0);if(a<=c&&c<=m&&(u=n(g[$],p,e,u,a,m,o),!(f=e[u])||(c=f.r)>i))return u;a=m}return u}(n,r,t,0,0,r.b,e)}function Jn(n,r,t,e){return 0===t.length?n:(Gn(n,r,t,e),Pn(n,t))}function Pn(n,r){for(var t=0;t<r.length;t++){var e=r[t],u=e.t,a=Qn(u,e);u===n&&(n=a)}return n}function Qn(n,r){switch(r.$){case 0:return function(n,r,t){var e=n.parentNode,u=jn(r,t);u.elm_event_node_ref||(u.elm_event_node_ref=n.elm_event_node_ref);e&&u!==n&&e.replaceChild(u,n);return u}(n,r.s,r.u);case 4:return xn(n,r.u,r.s),n;case 3:return n.replaceData(0,n.length,r.s),n;case 1:return Pn(n,r.s);case 2:return n.elm_event_node_ref?n.elm_event_node_ref.j=r.s:n.elm_event_node_ref={j:r.s,p:r.u},n;case 6:for(var t=r.s,e=0;e<t.i;e++)n.removeChild(n.childNodes[t.v]);return n;case 7:for(var u=(t=r.s).e,a=n.childNodes[e=t.v];e<u.length;e++)n.insertBefore(jn(u[e],r.u),a);return n;case 9:if(!(t=r.s))return n.parentNode.removeChild(n),n;var i=t.A;return void 0!==i.r&&n.parentNode.removeChild(n),i.s=Pn(n,t.w),n;case 8:return function(n,r){var t=r.s,e=function(n,r){if(!n)return;for(var t=dn.createDocumentFragment(),e=0;e<n.length;e++){var u=n[e],a=u.A;hn(t,2===a.c?a.s:jn(a.z,r.u))}return t}(t.y,r);n=Pn(n,t.w);for(var u=t.x,a=0;a<u.length;a++){var i=u[a],o=i.A,f=2===o.c?o.s:jn(o.z,r.u);n.insertBefore(f,n.childNodes[i.r])}e&&hn(n,e);return n}(n,r);case 5:return r.s(n);default:j(10)}}function Hn(n){if(3===n.nodeType)return gn(n.textContent);if(1!==n.nodeType)return gn("");for(var r=l,t=n.attributes,e=t.length;e--;){var u=t[e];r=b(p(yn,u.name,u.value),r)}var a=n.tagName.toLowerCase(),i=l,o=n.childNodes;for(e=o.length;e--;)i=b(Hn(o[e]),i);return m($n,a,r,i)}var Yn=e(function(r,n,t,o){return tn(n,o,r.cx,r.c$,r.cV,function(e,n){var u=r.c1,a=o.node,i=Hn(a);return Vn(n,function(n){var r=u(n),t=qn(i,r);a=Jn(a,i,t,e),i=r})})}),Kn="undefined"!=typeof requestAnimationFrame?requestAnimationFrame:function(n){setTimeout(n,1e3/60)};function Vn(t,e){e(t);var u=0;function a(){u=1===u?0:(Kn(a),e(t),1)}return function(n,r){t=n,r?(e(t),2===u&&(u=1)):(0===u&&Kn(a),u=2)}}var Wn={addEventListener:function(){},removeEventListener:function(){}};"undefined"!=typeof document&&document,"undefined"!=typeof window&&window;var Zn=function(n){return!n.$},Xn=o,Un=e(function(n,r,t,e){return{$:0,a:n,b:r,c:t,d:e}}),nr=L,rr=u(function(n,r){return C(r)/C(n)}),tr=nr(p(rr,2,32)),er=[],ur=y(Un,0,tr,er,er),ar=k,ir=t(function(n,r,t){for(;;){if(!t.b)return r;var e=t.b,u=n,a=p(n,t.a,r);n=u,r=a,t=e}}),or=function(n){return m(ir,Xn,l,n)},fr=u(function(n,r){for(;;){var t=p(ar,32,n),e=t.b,u=p(Xn,{$:0,a:t.a},r);if(!e.b)return or(u);n=e,r=u}}),cr=u(function(n,r){for(;;){var t=nr(r/32);if(1===t)return p(ar,32,n).a;n=p(fr,n,l),r=t}}),sr=N,vr=u(function(n,r){return 0<c(n,r)?n:r}),lr=function(n){return n.length},br=u(function(n,r){if(r.k){var t=32*r.k,e=sr(p(rr,32,t-1)),u=n?or(r.o):r.o,a=p(cr,u,r.k);return y(Un,lr(r.n)+t,p(vr,5,e*tr),a,r.n)}return y(Un,lr(r.n),tr,er,r.n)}),dr=$,hr=a(function(n,r,t,e,u){for(;;){if(r<0)return p(br,!1,{o:e,k:t/32|0,n:u});var a={$:1,a:m(dr,32,r,n)};n=n,r=r-32,t=t,e=p(Xn,a,e),u=u}}),gr=u(function(n,r){if(0<n){var t=n%32;return w(hr,r,n-t-32,n,l,m(dr,t,n-t,r))}return ur}),$r=function(n){return{$:0,a:n}},pr={$:1},mr=function(n){return{$:1,a:n}},yr=function(n){return{$:0,a:n}},wr=u(function(n,r){return{$:3,a:n,b:r}}),Ar=u(function(n,r){return{$:0,a:n,b:r}}),kr=u(function(n,r){return{$:1,a:n,b:r}}),jr=function(n){return{$:2,a:n}},xr=O,_r=u(function(n,r){return p(q,n,f(r))}),Tr=sn(l),Lr=function(n){return{$:0,a:n}},Nr=function(n){return{$:0,a:n}},Er=t(function(n,r,t){return{a9:t,bZ:r,b0:n}}),Cr=P,qr=Cr(m(Er,l,pr,0)),Or=function(n){return n},Br=Cr(0),Mr=e(function(n,r,t,e){if(e.b){var u=e.a,a=e.b;if(a.b){var i=a.a,o=a.b;if(o.b){var f=o.a,c=o.b;if(c.b){var s=c.b;return p(n,u,p(n,i,p(n,f,p(n,c.a,500<t?m(ir,n,r,or(s)):y(Mr,n,r,t+1,s)))))}return p(n,u,p(n,i,p(n,f,r)))}return p(n,u,p(n,i,r))}return p(n,u,r)}return r}),Sr=t(function(n,r,t){return y(Mr,n,r,0,t)}),zr=u(function(t,n){return m(Sr,u(function(n,r){return p(Xn,t(n),r)}),l,n)}),Dr=H,Fr=u(function(r,n){return p(Dr,function(n){return Cr(r(n))},n)}),Rr=t(function(t,n,e){return p(Dr,function(r){return p(Dr,function(n){return Cr(p(t,r,n))},e)},n)}),Ir=function(n){return m(Sr,Rr(Xn),Cr(l),n)},Gr=on,Jr=u(function(n,r){var t=r;return V(p(Dr,Gr(n),t))});en.Task=un(Br,t(function(n,r){return p(Fr,function(){return 0},Ir(p(zr,Jr(n),r)))}),t(function(){return Cr(0)}),u(function(n,r){return p(Fr,n,r)}));cn("Task");var Pr=function(n){return{$:0,a:n}},Qr=function(n){switch(n.$){case 0:return 0;case 1:return 1;case 2:return 2;default:return 3}},Hr=Q(function(n){n(P(Date.now()))}),Yr=Q(function(n){var r=requestAnimationFrame(function(){n(P(Date.now()))});return function(){cancelAnimationFrame(r)}}),Kr=fn,Vr=function(t){return Q(function(n){var r=t.f;2===r.$&&r.c&&r.c(),t.f=null,n(P(s))})},Wr=V,Zr=t(function(n,t,r){var e=r.bZ,u=r.a9,a=h(e,t);if(1!==a.a.$)return a.b.b?Cr(m(Er,t,e,u)):p(Dr,function(){return qr},Vr(a.a.a));if(a.b.b){return p(Dr,function(r){return p(Dr,function(n){return Cr(m(Er,t,$r(r),n))},Hr)},Wr(p(Dr,Kr(n),Yr)))}return qr}),Xr=Or,Ur=t(function(r,t,n){var e=n.b0,u=n.a9,a=function(n){return p(Gr,r,n.$?(0,n.a)(t-u):(0,n.a)(Xr(t)))};return p(Dr,function(n){return p(Dr,function(){return Cr(m(Er,e,$r(n),t))},Ir(p(zr,a,e)))},Wr(p(Dr,Kr(r),Yr)))}),nt=t(function(n,r,t){return n(r(t))});en["Browser.AnimationManager"]=un(qr,Zr,Ur,0,u(function(n,r){return r.$?{$:1,a:p(nt,n,r.a)}:Nr(p(nt,n,r.a))}));var rt,tt=cn("Browser.AnimationManager"),et=function(n){return tt(Nr(n))},ut=sn(l),at=u(function(n,r){var t=r.a;return h(n.$?h(!t,r.b):h(t,function(n){return n}(n.a)),Tr)}),it=function(n){return{$:1,a:n}},ot=u(function(n,r){return{$:3,a:n,b:r}}),ft=u(function(r,n){var t=n;return v(t,{Q:function(){var n=t.Q;switch(n.$){case 0:case 1:return it(r);case 2:return p(ot,r,n.a);default:return p(ot,r,n.b)}}()})}),ct=t(function(n,r,t){return{$:0,a:n,b:r,c:t}}),st=t(function(n,r,t){return m(ct,n,r,t)}),vt={$:0},lt={aC:pr,aD:pr,ap:{aG:pr,aH:pr,aI:pr,aJ:pr,aK:pr,aL:pr},aS:pr},bt=function(n){return{Q:vt,al:(r=n,{$:1,a:r}),x:lt,av:l};var r},dt=u(function(n,r){return I(m(ir,function(t){return u(function(n,r){return r.push(G(t(n))),r})}(n),[],r))}),ht=function(n){return I(m(ir,u(function(n,r){return m(J,n.a,n.b,r)}),{},n))},gt=I,$t=u(function(n,r){return ht(d([h("type",gt("function")),h("name",gt(n)),h("args",p(dt,Or,r))]))}),pt=I,mt=I,yt=i(function(n,r,t,e,u,a){return p($t,"arc",d([mt(n),mt(r),mt(t),mt(e),mt(u),pt(a)]))}),wt=a(function(n,r,t,e,u){return p($t,"arcTo",d([mt(n),mt(r),mt(t),mt(e),mt(u)]))}),At=i(function(n,r,t,e,u,a){return p($t,"bezierCurveTo",d([mt(n),mt(r),mt(t),mt(e),mt(u),mt(a)]))}),kt=t(function(n,r,t){return A(yt,n,r,t,0,6.283185307179586,!1)}),jt=u(function(n,r){return p($t,"lineTo",d([mt(n),mt(r)]))}),xt=u(function(n,r){return p($t,"moveTo",d([mt(n),mt(r)]))}),_t=e(function(n,r,t,e){return p($t,"quadraticCurveTo",d([mt(n),mt(r),mt(t),mt(e)]))}),Tt=e(function(n,r,t,e){return p($t,"rect",d([mt(n),mt(r),mt(t),mt(e)]))}),Lt=_,Nt=T,Et=u(function(n,r){switch(n.$){case 0:var t=n.a;return p(Xn,y(Tt,d=t.a,h=t.b,n.b,n.c),p(Xn,p(xt,d,h),r));case 1:var e=n.a,u=n.b;return p(Xn,m(kt,d=e.a,h=e.b,u),p(Xn,p(xt,d+u,h),r));case 2:var a=n.a,i=n.c;return p(Xn,A(yt,d=a.a,h=a.b,n.b,i,n.d,n.e),p(Xn,p(xt,d+Lt(i),h+Nt(i)),r));case 3:var o=n.a,f=n.b;return p(Xn,w(wt,d=o.a,h=o.b,f.a,f.b,n.c),r);case 4:var c=n.a,s=n.b,v=n.c;return p(Xn,A(At,c.a,c.b,s.a,s.b,d=v.a,h=v.b),r);case 5:var l=n.a;return p(Xn,p(jt,d=l.a,h=l.b),r);case 6:var b=n.a;return p(Xn,p(xt,d=b.a,h=b.b),r);default:var d,h,g=n.a,$=n.b;return p(Xn,y(_t,g.a,g.b,d=$.a,h=$.b),r)}}),Ct=u(function(n,r){return ht(d([h("type",gt("field")),h("name",gt(n)),h("value",r)]))}),qt=E,Ot=O,Bt=function(n){var r,t,e=n.b,u=n.c,a=n.d,i=function(n){return qt(1e4*n)/100};return r=d(["rgba(",Ot(i(n.a)),"%,",Ot(i(e)),"%,",Ot(i(u)),"%,",Ot((t=a,qt(1e3*t)/1e3)),")"]),p(_r,"",r)},Mt=function(n){return p(Ct,"fillStyle",gt(Bt(n)))},St=u(function(n,r){return p(Xn,p($t,"fill",d([gt(function(n){return n?"evenodd":"nonzero"}(0))])),p(Xn,Mt(n),r))}),zt=p($t,"stroke",l),Dt=function(n){return p(Ct,"strokeStyle",gt(Bt(n)))},Ft=u(function(n,r){return p(Xn,zt,p(Xn,Dt(n),r))}),Rt=e(function(n,r,t,e){return{$:0,a:n,b:r,c:t,d:e}}),It=y(Rt,0,0,0,1),Gt=u(function(n,r){switch(n.$){case 0:return p(St,It,r);case 1:return p(St,n.a,r);case 2:return p(Ft,n.a,r);default:return p(Ft,n.b,p(St,n.a,r))}}),Jt=e(function(n,r,t,e){if(1===e.$)return p($t,"fillText",d([gt(n),mt(r),mt(t)]));var u=e.a;return p($t,"fillText",d([gt(n),mt(r),mt(t),mt(u)]))}),Pt=a(function(n,r,t,e,u){return p(Xn,y(Jt,n.bp,r,t,n.x.aq),p(Xn,Mt(e),u))}),Qt=e(function(n,r,t,e){if(1===e.$)return p($t,"strokeText",d([gt(n),mt(r),mt(t)]));var u=e.a;return p($t,"strokeText",d([gt(n),mt(r),mt(t),mt(u)]))}),Ht=a(function(n,r,t,e,u){return p(Xn,y(Qt,n.bp,r,t,n.x.aq),p(Xn,Dt(e),u))}),Yt=t(function(n,r,t){var e=r,u=e.bS,a=u.a,i=u.b;switch(n.$){case 0:return w(Pt,e,a,i,It,t);case 1:return w(Pt,e,a,i,n.a,t);case 2:return w(Ht,e,a,i,n.a,t);default:return w(Ht,e,a,i,n.b,w(Pt,e,a,i,n.a,t))}}),Kt=u(function(n,r){return r.$?pr:$r(n(r.a))}),Vt=u(function(n,r){return r.$?n:r.a}),Wt=t(function(n,r,t){return p(Vt,t,p(Kt,function(n){return r(n)},n))}),Zt=t(function(n,r,t){return m(Wt,n,function(n){return p(Xn,r(n),t)},t)}),Xt=function(n){switch(n){case 0:return"left";case 1:return"right";case 2:return"center";case 3:return"start";default:return"end"}},Ut=function(n){switch(n){case 0:return"top";case 1:return"hanging";case 2:return"middle";case 3:return"alphabetic";case 4:return"ideographic";default:return"bottom"}},ne=function(n){return p(Ct,"font",gt(n))},re=function(n){return p(Ct,"textAlign",gt(n))},te=function(n){return p(Ct,"textBaseline",gt(n))},ee=u(function(r,n){var t=u(function(n,r){return xr(n)+"px "+r}),e=function(){var n=h(r.aT,r.aB);if(n.a.$){if(n.b.$){return pr}return $r(p(t,20,n.b.a))}if(n.b.$){return $r(p(t,n.a.a,"sans-serif"))}return $r(p(t,n.a.a,n.b.a))}();return m(Zt,r.az,p(nt,te,Ut),m(Zt,r.ay,p(nt,re,Xt),m(Zt,e,ne,n)))}),ue=t(function(n,r,t){return m(Yt,n,r,p(ee,r.x,t))}),ae=p($t,"beginPath",l),ie=t(function(n,r,t){if(n.$){var e=n.a;return p(Gt,r,m(ir,Et,p(Xn,ae,t),e))}return m(ue,r,n.a,t)}),oe=function(n){switch(n){case 0:return"source-over";case 1:return"source-in";case 2:return"source-out";case 3:return"source-atop";case 4:return"destination-over";case 5:return"destination-in";case 6:return"destination-out";case 7:return"destination-atop";case 8:return"lighter";case 9:return"copy";case 10:return"xor";case 11:return"multiply";case 12:return"screen";case 13:return"overlay";case 14:return"darken";case 15:return"lighten";case 16:return"color-dodge";case 17:return"color-burn";case 18:return"hard-light";case 19:return"soft-light";case 20:return"difference";case 21:return"exclusion";case 22:return"hue";case 23:return"saturation";case 24:return"color";default:return"luminosity"}},fe=function(n){switch(n){case 0:return"butt";case 1:return"round";default:return"square"}},ce=function(n){switch(n){case 0:return"bevel";case 1:return"round";default:return"miter"}},se=function(n){return p(Ct,"lineCap",gt(n))},ve=function(n){return p(Ct,"lineDashOffset",mt(n))},le=function(n){return p(Ct,"lineJoin",gt(n))},be=function(n){return p(Ct,"lineWidth",mt(n))},de=function(n){return p(Ct,"miterLimit",mt(n))},he=function(n){return p($t,"setLineDash",d([p(dt,mt,n)]))},ge=u(function(n,r){return m(Zt,n.aH,he,m(Zt,n.aL,de,m(Zt,n.aK,be,m(Zt,n.aJ,p(nt,le,ce),m(Zt,n.aI,ve,m(Zt,n.aG,p(nt,se,fe),r))))))}),$e=u(function(n,r){var t=n.bv,e=n.bL,u=e.a,a=e.b;return p(Xn,p(Ct,"shadowBlur",mt(n.bt)),p(Xn,function(n){return p(Ct,"shadowColor",gt(Bt(n)))}(t),p(Xn,function(n){return p(Ct,"shadowOffsetX",mt(n))}(u),p(Xn,function(n){return p(Ct,"shadowOffsetY",mt(n))}(a),r))))}),pe=function(n){return p(Ct,"globalAlpha",mt(n))},me=function(n){return p(Ct,"globalCompositeOperation",gt(n))},ye=u(function(n,r){return p(ge,n.ap,m(Zt,n.aD,p(nt,me,oe),m(Zt,n.aC,pe,m(Wt,n.aS,function(n){return p($e,n,r)},r))))}),we=u(function(n,r){return p($t,"scale",d([mt(n),mt(r)]))}),Ae=i(function(n,r,t,e,u,a){return p($t,"transform",d([mt(n),mt(r),mt(t),mt(e),mt(u),mt(a)]))}),ke=u(function(n,r){return p($t,"translate",d([mt(n),mt(r)]))}),je=u(function(n,r){return m(ir,u(function(n,r){return p(Xn,function(){switch(n.$){case 0:return function(n){return p($t,"rotate",d([mt(n)]))}(n.a);case 1:return p(we,n.a,n.b);case 2:return p(ke,n.a,n.b);default:return A(Ae,n.a,n.b,n.c,n.d,n.e,n.f)}}(),r)}),r,n)}),xe=p($t,"restore",l),_e=p($t,"save",l),Te=u(function(n,r){return p(Xn,xe,m(ie,n.al,n.Q,p(je,n.av,p(ye,n.x,p(Xn,_e,r)))))}),Le=l,Ne=u(function(n,r){return p(mn,function(n){return"innerHTML"==n||"formAction"==n?"data-"+n:n}(n),function(n){return/^\s*(javascript:|data:text\/html)/i.test(n)?"":n}(r))}),Ee=$n("canvas"),Ce=function(n){return $n(function(n){return"script"==n?"p":n}(n))},qe=t(function(n,r,t){var e,u,a=n.a,i=n.b;return m(Ce,"elm-canvas",d([(u=function(n){return m(ir,Te,Le,n)}(t),p(Ne,"cmds",p(dt,Or,u)))]),d([p(Ee,p(Xn,(e=i,p(yn,"height",xr(e))),p(Xn,function(n){return p(yn,"width",xr(n))}(a),r)),l)]))}),Oe={$:1},Be=function(n){return{$:0,a:n}},Me=u(function(n,r){var t=r.av;return v(r,{av:t.b?g(t,n):n})}),Se=u(function(n,r){return{$:2,a:n,b:r}}),ze=x,De=t(function(n,r,t){var e=n/1e3,u=3.141592653589793*90/180,a=h(r.a,r.b),i=a.a,o=a.b,f=h(i/23,o/23),c=u+3.141592653589793*p(ze,Nt(e+(.4*f.a+.2*f.b)),3),s=h(o*(400/24)+50+400/24/2,i*(400/24)+50+400/24/2),v=s.a,l=s.b;return p(Xn,p(ft,It,p(Me,d([p(Se,v,l),Be(c),p(Se,-v,-l)]),bt(d([m(st,h(v-400/24*.65/2,l-400/24*.1/2),400/24*.65,400/24*.1)])))),t)}),Fe=t(function(n,i,r){var o=n.cR,f=n.cd;return m(t(function(n,r,t){for(;;){if(-1<c(r,o))return t;if(c(n,f)>-1){n=e=0,r=u=r+1,t=a=t}else{var e=n+1,u=r,a=p(i,h(n,r),t);n=e,r=u,t=a}}}),0,0,r)}),Re=y(Rt,1,1,1,1),Ie=pn,Ge=u(function(n,r){return p(Ie,n,{$:0,a:r})}),Je=Yn({cx:function(){return h(h(!0,0),Tr)},cV:function(n){return n.a?et(Lr):ut},c$:at,c1:function(n){var r,t=n.b;return m(qe,h(qt(500),qt(500)),d([(r=Oe,p(Ge,"click",Pr(r)))]),p(Xn,p(ft,Re,bt(d([m(st,h(0,0),500,500)]))),function(n){return m(Fe,{cd:24,cR:24},De(n),l)}(t)))}});rt={Examples:{AnimatedGrid:{init:Je(Pr(0))(0)}}},n.Elm?function n(r,t){for(var e in t)e in r?"init"==e?j(6):n(r[e],t[e]):r[e]=t[e]}(n.Elm,rt):n.Elm=rt}(this);