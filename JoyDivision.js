!function(n){"use strict";function r(n,r,t){return t.a=n,t.f=r,t}function f(t){return r(2,t,function(r){return function(n){return t(r,n)}})}function t(e){return r(3,e,function(t){return function(r){return function(n){return e(t,r,n)}}})}function e(u){return r(4,u,function(e){return function(t){return function(r){return function(n){return u(e,t,r,n)}}}})}function u(a){return r(5,a,function(u){return function(e){return function(t){return function(r){return function(n){return a(u,e,t,r,n)}}}}})}function a(i){return r(6,i,function(a){return function(u){return function(e){return function(t){return function(r){return function(n){return i(a,u,e,t,r,n)}}}}}})}function i(c){return r(9,c,function(o){return function(f){return function(i){return function(a){return function(u){return function(e){return function(t){return function(r){return function(n){return c(o,f,i,a,u,e,t,r,n)}}}}}}}}})}function d(n,r,t){return 2===n.a?n.f(r,t):n(r)(t)}function h(n,r,t,e){return 3===n.a?n.f(r,t,e):n(r)(t)(e)}function $(n,r,t,e,u){return 4===n.a?n.f(r,t,e,u):n(r)(t)(e)(u)}function b(n,r,t,e,u,a){return 5===n.a?n.f(r,t,e,u,a):n(r)(t)(e)(u)(a)}function g(n,r,t,e,u,a,i){return 6===n.a?n.f(r,t,e,u,a,i):n(r)(t)(e)(u)(a)(i)}function o(n,r,t,e,u,a,i,f,o,c){return 9===n.a?n.f(r,t,e,u,a,i,f,o,c):n(r)(t)(e)(u)(a)(i)(f)(o)(c)}function l(n,r){for(var t,e=[],u=c(n,r,0,e);u&&(t=e.pop());u=c(t.a,t.b,0,e));return u}function c(n,r,t,e){if(n===r)return!0;if("object"!=typeof n||null===n||null===r)return"function"==typeof n&&q(5),!1;if(100<t)return e.push(m(n,r)),!0;for(var u in n.$<0&&(n=wr(n),r=wr(r)),n)if(!c(n[u],r[u],t+1,e))return!1;return!0}function v(n,r,t){if("object"!=typeof n)return n===r?0:n<r?-1:1;if(void 0===n.$)return(t=v(n.a,r.a))?t:(t=v(n.b,r.b))?t:v(n.c,r.c);for(;n.b&&r.b&&!(t=v(n.a,r.a));n=n.b,r=r.b);return t||(n.b?1:r.b?-1:0)}var s=0;function m(n,r){return{a:n,b:r}}function p(n,r){var t={};for(var e in n)t[e]=n[e];for(var e in r)t[e]=r[e];return t}function y(n,r){if("string"==typeof n)return n+r;if(!n.b)return r;var t=_(n.a,r);n=n.b;for(var e=t;n.b;n=n.b)e=e.b=_(n.a,r);return t}var w={$:0};function _(n,r){return{$:1,a:n,b:r}}var k=f(_);function A(n){for(var r=w,t=n.length;t--;)r=_(n[t],r);return r}function j(n){for(var r=[];n.b;n=n.b)r.push(n.a);return r}var T=t(function(n,r,t){for(var e=Array(n),u=0;u<n;u++)e[u]=t(r+u);return e}),x=f(function(n,r){for(var t=Array(n),e=0;e<n&&r.b;e++)t[e]=r.a,r=r.b;return t.length=e,m(t,r)}),L=f(function(n,r){return r[n]}),N=t(function(n,r,t){for(var e=t.length,u=Array(e),a=0;a<e;a++)u[a]=t[a];return u[n]=r,u}),E=f(function(n,r){for(var t=r.length,e=Array(t+1),u=0;u<t;u++)e[u]=r[u];return e[t]=n,e}),C=t(function(n,r,t){for(var e=t.length,u=0;u<e;u++)r=d(n,t[u],r);return r}),F=t(function(n,r,t){for(var e=t.length-1;0<=e;e--)r=d(n,t[e],r);return r}),X=t(function(n,r,t){for(var e=t.length,u=Array(e),a=0;a<e;a++)u[a]=d(n,r+a,t[a]);return u});function q(n){throw Error("https://github.com/elm/core/blob/1.0.0/hints/"+n+".md")}var z=Math.cos,G=Math.sin;var O=Math.ceil,R=Math.floor,S=Math.round,M=Math.log;var B=f(function(n,r){return r.join(n)});function Y(n){return n+""}function I(n){return{$:2,b:n}}I(function(n){return"number"!=typeof n?tn("an INT",n):-2147483647<n&&n<2147483647&&(0|n)===n?Nr(n):!isFinite(n)||n%1?tn("an INT",n):Nr(n)}),I(function(n){return"boolean"==typeof n?Nr(n):tn("a BOOL",n)});var J=I(function(n){return"number"==typeof n?Nr(n):tn("a FLOAT",n)}),D=I(function(n){return Nr(an(n))});I(function(n){return"string"==typeof n?Nr(n):n instanceof String?Nr(n+""):tn("a STRING",n)});var P=f(function(n,r){return{$:6,d:n,b:r}});function K(n,r){return{$:9,f:n,g:r}}var W=f(function(n,r){return{$:10,b:r,h:n}});var H=f(function(n,r){return K(n,[r])}),Q=t(function(n,r,t){return K(n,[r,t])}),U=f(function(n,r){return V(n,fn(r))});function V(n,r){switch(n.$){case 2:return n.b(r);case 5:return null===r?Nr(n.c):tn("null",r);case 3:return nn(r)?Z(n.b,r,A):tn("a LIST",r);case 4:return nn(r)?Z(n.b,r,rn):tn("an ARRAY",r);case 6:var t=n.d;if("object"!=typeof r||null===r||!(t in r))return tn("an OBJECT with a field named `"+t+"`",r);var e=V(n.b,r[t]);return tt(e)?e:jr(d(xr,t,e.a));case 7:var u=n.e;if(!nn(r))return tn("an ARRAY",r);if(r.length<=u)return tn("a LONGER array. Need index "+u+" but only see "+r.length+" entries",r);e=V(n.b,r[u]);return tt(e)?e:jr(d(Lr,u,e.a));case 8:if("object"!=typeof r||null===r||nn(r))return tn("an OBJECT",r);var a=w;for(var i in r)if(r.hasOwnProperty(i)){e=V(n.b,r[i]);if(!tt(e))return jr(d(xr,i,e.a));a=_(m(i,e.a),a)}return Nr(Gr(a));case 9:for(var f=n.f,o=n.g,c=0;c<o.length;c++){e=V(o[c],r);if(!tt(e))return e;f=f(e.a)}return Nr(f);case 10:e=V(n.b,r);return tt(e)?V(n.h(e.a),r):e;case 11:for(var v=w,b=n.g;b.b;b=b.b){e=V(b.a,r);if(tt(e))return e;v=_(e.a,v)}return jr(Er(Gr(v)));case 1:return jr(d(Tr,n.a,an(r)));case 0:return Nr(n.a)}}function Z(n,r,t){for(var e=r.length,u=Array(e),a=0;a<e;a++){var i=V(n,r[a]);if(!tt(i))return jr(d(Lr,a,i.a));u[a]=i.a}return Nr(t(u))}function nn(n){return Array.isArray(n)||"undefined"!=typeof FileList&&n instanceof FileList}function rn(r){return d(rt,r.length,function(n){return r[n]})}function tn(n,r){return jr(d(Tr,"Expecting "+n,an(r)))}function en(n,r){if(n===r)return!0;if(n.$!==r.$)return!1;switch(n.$){case 0:case 1:return n.a===r.a;case 2:return n.b===r.b;case 5:return n.c===r.c;case 3:case 4:case 8:return en(n.b,r.b);case 6:return n.d===r.d&&en(n.b,r.b);case 7:return n.e===r.e&&en(n.b,r.b);case 9:return n.f===r.f&&un(n.g,r.g);case 10:return n.h===r.h&&en(n.b,r.b);case 11:return un(n.g,r.g)}}function un(n,r){var t=n.length;if(t!==r.length)return!1;for(var e=0;e<t;e++)if(!en(n[e],r[e]))return!1;return!0}function an(n){return n}function fn(n){return n}var on=t(function(n,r,t){return t[n]=fn(r),t});an(null);function cn(n){return{$:0,a:n}}function vn(n){return{$:2,b:n,c:null}}var bn=f(function(n,r){return{$:3,b:n,d:r}});var sn=0;function ln(n){var r={$:0,e:sn++,f:n,g:null,h:[]};return mn(r),r}function dn(r){return vn(function(n){n(cn(ln(r)))})}function hn(n,r){n.h.push(r),mn(n)}var $n=!1,gn=[];function mn(n){if(gn.push(n),!$n){for($n=!0;n=gn.shift();)pn(n);$n=!1}}function pn(r){for(;r.f;){var n=r.f.$;if(0===n||1===n){for(;r.g&&r.g.$!==n;)r.g=r.g.i;if(!r.g)return;r.f=r.g.b(r.f.a),r.g=r.g.i}else{if(2===n)return void(r.f.c=r.f.b(function(n){r.f=n,mn(r)}));if(5===n){if(0===r.h.length)return;r.f=r.f.b(r.h.shift())}else r.g={$:3===n?0:1,b:r.f.b,i:r.g},r.f=r.f.d}}}function yn(n,r,t,e,u,a){var i=d(U,n,an(r?r.flags:void 0));tt(i)||q(2);var f={},o=t(i.a),c=o.a,v=a(s,c),b=function(n,r){var t;for(var e in wn){var u=wn[e];u.a&&((t=t||{})[e]=u.a(e,r)),n[e]=_n(u,r)}return t}(f,s);function s(n,r){var t=d(e,n,c);v(c=t.a,r),Ln(f,t.b,u(c))}return Ln(f,o.b,u(c)),b?{ports:b}:{}}var wn={};function _n(n,r){var e={g:r,h:void 0},u=n.c,a=n.d,i=n.e,f=n.f;function o(t){return d(bn,o,{$:5,b:function(n){var r=n.a;return 0===n.$?h(a,e,r,t):i&&f?$(u,e,r.i,r.j,t):h(u,e,i?r.i:r.j,t)}})}return e.h=ln(d(bn,o,n.b))}var kn=f(function(r,t){return vn(function(n){r.g(t),n(cn(s))})});function An(r){return function(n){return{$:1,k:r,l:n}}}function jn(n){return{$:2,m:n}}var Tn=[],xn=!1;function Ln(n,r,t){if(Tn.push({p:n,q:r,r:t}),!xn){xn=!0;for(var e;e=Tn.shift();)Nn(e.p,e.q,e.r);xn=!1}}function Nn(n,r,t){var e={};for(var u in En(!0,r,e,null),En(!1,t,e,null),n)hn(n[u],{$:"fx",a:e[u]||{i:w,j:w}})}function En(n,r,t,e){switch(r.$){case 1:var u=r.k,a=function(n,r,t,e){function u(n){for(var r=t;r;r=r.t)n=r.s(n);return n}return d(n?wn[r].e:wn[r].f,u,e)}(n,u,e,r.l);return void(t[u]=function(n,r,t){return t=t||{i:w,j:w},n?t.i=_(r,t.i):t.j=_(r,t.j),t}(n,a,t[u]));case 2:for(var i=r.m;i.b;i=i.b)En(n,i.a,t,e);return;case 3:return void En(n,r.o,t,{s:r.n,t:e})}}var Cn;var Fn="undefined"!=typeof document?document:{};function Xn(n,r){n.appendChild(r)}function qn(n){return{$:0,a:n}}var zn=f(function(a,i){return f(function(n,r){for(var t=[],e=0;r.b;r=r.b){var u=r.a;e+=u.b||0,t.push(u)}return e+=t.length,{$:1,c:i,d:In(n),e:t,f:a,b:e}})})(void 0),Gn=f(function(a,i){return f(function(n,r){for(var t=[],e=0;r.b;r=r.b){var u=r.a;e+=u.b.b||0,t.push(u)}return e+=t.length,{$:2,c:i,d:In(n),e:t,f:a,b:e}})})(void 0);var On=f(function(n,r){return{$:"a0",n:n,o:r}}),Rn=f(function(n,r){return{$:"a1",n:n,o:r}}),Sn=f(function(n,r){return{$:"a2",n:n,o:r}}),Mn=f(function(n,r){return{$:"a3",n:n,o:r}});function Bn(n){return/^\s*(javascript:|data:text\/html)/i.test(n)?"":n}var Yn;function In(n){for(var r={};n.b;n=n.b){var t=n.a,e=t.$,u=t.n,a=t.o;if("a2"!==e){var i=r[e]||(r[e]={});"a3"===e&&"class"===u?Jn(i,u,a):i[u]=a}else"className"===u?Jn(r,u,fn(a)):r[u]=fn(a)}return r}function Jn(n,r,t){var e=n[r];n[r]=e?e+" "+t:t}function Dn(n,r){var t=n.$;if(5===t)return Dn(n.k||(n.k=n.m()),r);if(0===t)return Fn.createTextNode(n.a);if(4===t){for(var e=n.k,u=n.j;4===e.$;)"object"!=typeof u?u=[u,e.j]:u.push(e.j),e=e.k;var a={j:u,p:r};return(i=Dn(e,a)).elm_event_node_ref=a,i}if(3===t)return Pn(i=n.h(n.g),r,n.d),i;var i=n.f?Fn.createElementNS(n.f,n.c):Fn.createElement(n.c);Cn&&"a"==n.c&&i.addEventListener("click",Cn(i)),Pn(i,r,n.d);for(var f=n.e,o=0;o<f.length;o++)Xn(i,Dn(1===t?f[o]:f[o].b,r));return i}function Pn(n,r,t){for(var e in t){var u=t[e];"a1"===e?Kn(n,u):"a0"===e?Qn(n,r,u):"a3"===e?Wn(n,u):"a4"===e?Hn(n,u):("value"!==e&&"checked"!==e||n[e]!==u)&&(n[e]=u)}}function Kn(n,r){var t=n.style;for(var e in r)t[e]=r[e]}function Wn(n,r){for(var t in r){var e=r[t];void 0!==e?n.setAttribute(t,e):n.removeAttribute(t)}}function Hn(n,r){for(var t in r){var e=r[t],u=e.f,a=e.o;void 0!==a?n.setAttributeNS(u,t,a):n.removeAttributeNS(u,t)}}function Qn(n,r,t){var e=n.elmFs||(n.elmFs={});for(var u in t){var a=t[u],i=e[u];if(a){if(i){if(i.q.$===a.$){i.q=a;continue}n.removeEventListener(u,i)}i=Un(r,a),n.addEventListener(u,i,Yn&&{passive:it(a)<2}),e[u]=i}else n.removeEventListener(u,i),e[u]=void 0}}try{window.addEventListener("t",null,Object.defineProperty({},"passive",{get:function(){Yn=!0}}))}catch(n){}function Un(v,n){function b(n){var r=b.q,t=V(r.a,n);if(tt(t)){for(var e,u=it(r),a=t.a,i=u?u<3?a.a:a.R:a,f=1==u?a.b:3==u&&a.bt,o=(f&&n.stopPropagation(),(2==u?a.b:3==u&&a.bl)&&n.preventDefault(),v);e=o.j;){if("function"==typeof e)i=e(i);else for(var c=e.length;c--;)i=e[c](i);o=o.p}o(i,f)}}return b.q=n,b}function Vn(n,r){return n.$==r.$&&en(n.a,r.a)}function Zn(n,r){var t=[];return rr(n,r,t,0),t}function nr(n,r,t,e){var u={$:r,r:t,s:e,t:void 0,u:void 0};return n.push(u),u}function rr(n,r,t,e){if(n!==r){var u=n.$,a=r.$;if(u!==a){if(1!==u||2!==a)return void nr(t,0,e,r);r=function(n){for(var r=n.e,t=r.length,e=Array(t),u=0;u<t;u++)e[u]=r[u].b;return{$:1,c:n.c,d:n.d,e:e,f:n.f,b:n.b}}(r),a=1}switch(a){case 5:for(var i=n.l,f=r.l,o=i.length,c=o===f.length;c&&o--;)c=i[o]===f[o];if(c)return void(r.k=n.k);r.k=r.m();var v=[];return rr(n.k,r.k,v,0),void(0<v.length&&nr(t,1,e,v));case 4:for(var b=n.j,s=r.j,l=!1,d=n.k;4===d.$;)l=!0,"object"!=typeof b?b=[b,d.j]:b.push(d.j),d=d.k;for(var h=r.k;4===h.$;)l=!0,"object"!=typeof s?s=[s,h.j]:s.push(h.j),h=h.k;return l&&b.length!==s.length?void nr(t,0,e,r):((l?function(n,r){for(var t=0;t<n.length;t++)if(n[t]!==r[t])return!1;return!0}(b,s):b===s)||nr(t,2,e,s),void rr(d,h,t,e+1));case 0:return void(n.a!==r.a&&nr(t,3,e,r.a));case 1:return void tr(n,r,t,e,ur);case 2:return void tr(n,r,t,e,ar);case 3:if(n.h!==r.h)return void nr(t,0,e,r);var $=er(n.d,r.d);$&&nr(t,4,e,$);var g=r.i(n.g,r.g);return void(g&&nr(t,5,e,g))}}}function tr(n,r,t,e,u){if(n.c===r.c&&n.f===r.f){var a=er(n.d,r.d);a&&nr(t,4,e,a),u(n,r,t,e)}else nr(t,0,e,r)}function er(n,r,t){var e;for(var u in n)if("a1"!==u&&"a0"!==u&&"a3"!==u&&"a4"!==u)if(u in r){var a=n[u],i=r[u];a===i&&"value"!==u&&"checked"!==u||"a0"===t&&Vn(a,i)||((e=e||{})[u]=i)}else(e=e||{})[u]=t?"a1"===t?"":"a0"===t||"a3"===t?void 0:{f:n[u].f,o:void 0}:"string"==typeof n[u]?"":null;else{var f=er(n[u],r[u]||{},u);f&&((e=e||{})[u]=f)}for(var o in r)o in n||((e=e||{})[o]=r[o]);return e}function ur(n,r,t,e){var u=n.e,a=r.e,i=u.length,f=a.length;f<i?nr(t,6,e,{v:f,i:i-f}):i<f&&nr(t,7,e,{v:i,e:a});for(var o=i<f?i:f,c=0;c<o;c++){var v=u[c];rr(v,a[c],t,++e),e+=v.b||0}}function ar(n,r,t,e){for(var u=[],a={},i=[],f=n.e,o=r.e,c=f.length,v=o.length,b=0,s=0,l=e;b<c&&s<v;){var d=(T=f[b]).a,h=(x=o[s]).a,$=T.b,g=x.b,m=void 0,p=void 0;if(d!==h){var y=f[b+1],w=o[s+1];if(y){var _=y.a,k=y.b;p=h===_}if(w){var A=w.a,j=w.b;m=d===A}if(m&&p)rr($,j,u,++l),fr(a,u,d,g,s,i),l+=$.b||0,or(a,u,d,k,++l),l+=k.b||0,b+=2,s+=2;else if(m)l++,fr(a,u,h,g,s,i),rr($,j,u,l),l+=$.b||0,b+=1,s+=2;else if(p)or(a,u,d,$,++l),l+=$.b||0,rr(k,g,u,++l),l+=k.b||0,b+=2,s+=1;else{if(!y||_!==A)break;or(a,u,d,$,++l),fr(a,u,h,g,s,i),l+=$.b||0,rr(k,j,u,++l),l+=k.b||0,b+=2,s+=2}}else rr($,g,u,++l),l+=$.b||0,b++,s++}for(;b<c;){var T;or(a,u,(T=f[b]).a,$=T.b,++l),l+=$.b||0,b++}for(;s<v;){var x,L=L||[];fr(a,u,(x=o[s]).a,x.b,void 0,L),s++}(0<u.length||0<i.length||L)&&nr(t,8,e,{w:u,x:i,y:L})}var ir="_elmW6BL";function fr(n,r,t,e,u,a){var i=n[t];if(!i)return a.push({r:u,A:i={c:0,z:e,r:u,s:void 0}}),void(n[t]=i);if(1===i.c){a.push({r:u,A:i}),i.c=2;var f=[];return rr(i.z,e,f,i.r),i.r=u,void(i.s.s={w:f,A:i})}fr(n,r,t+ir,e,u,a)}function or(n,r,t,e,u){var a=n[t];if(a){if(0===a.c){a.c=2;var i=[];return rr(e,a.z,i,u),void nr(r,9,u,{w:i,A:a})}or(n,r,t+ir,e,u)}else{var f=nr(r,9,u,void 0);n[t]={c:1,z:e,r:u,s:f}}}function cr(n,r,t,e){!function n(r,t,e,u,a,i,f){var o=e[u];var c=o.r;for(;c===a;){var v=o.$;if(1===v)cr(r,t.k,o.s,f);else if(8===v){o.t=r,o.u=f;var b=o.s.w;0<b.length&&n(r,t,b,0,a,i,f)}else if(9===v){o.t=r,o.u=f;var s=o.s;if(s){s.A.s=r;var b=s.w;0<b.length&&n(r,t,b,0,a,i,f)}}else o.t=r,o.u=f;if(!(o=e[++u])||(c=o.r)>i)return u}var l=t.$;if(4===l){for(var d=t.k;4===d.$;)d=d.k;return n(r,d,e,u,a+1,i,r.elm_event_node_ref)}var h=t.e;var $=r.childNodes;for(var g=0;g<h.length;g++){var m=1===l?h[g]:h[g].b,p=++a+(m.b||0);if(a<=c&&c<=p&&(u=n($[g],m,e,u,a,p,f),!(o=e[u])||(c=o.r)>i))return u;a=p}return u}(n,r,t,0,0,r.b,e)}function vr(n,r,t,e){return 0===t.length?n:(cr(n,r,t,e),br(n,t))}function br(n,r){for(var t=0;t<r.length;t++){var e=r[t],u=e.t,a=sr(u,e);u===n&&(n=a)}return n}function sr(n,r){switch(r.$){case 0:return function(n,r,t){var e=n.parentNode,u=Dn(r,t);u.elm_event_node_ref||(u.elm_event_node_ref=n.elm_event_node_ref);e&&u!==n&&e.replaceChild(u,n);return u}(n,r.s,r.u);case 4:return Pn(n,r.u,r.s),n;case 3:return n.replaceData(0,n.length,r.s),n;case 1:return br(n,r.s);case 2:return n.elm_event_node_ref?n.elm_event_node_ref.j=r.s:n.elm_event_node_ref={j:r.s,p:r.u},n;case 6:for(var t=r.s,e=0;e<t.i;e++)n.removeChild(n.childNodes[t.v]);return n;case 7:for(var u=(t=r.s).e,a=n.childNodes[e=t.v];e<u.length;e++)n.insertBefore(Dn(u[e],r.u),a);return n;case 9:if(!(t=r.s))return n.parentNode.removeChild(n),n;var i=t.A;return void 0!==i.r&&n.parentNode.removeChild(n),i.s=br(n,t.w),n;case 8:return function(n,r){var t=r.s,e=function(n,r){if(!n)return;for(var t=Fn.createDocumentFragment(),e=0;e<n.length;e++){var u=n[e],a=u.A;Xn(t,2===a.c?a.s:Dn(a.z,r.u))}return t}(t.y,r);n=br(n,t.w);for(var u=t.x,a=0;a<u.length;a++){var i=u[a],f=i.A,o=2===f.c?f.s:Dn(f.z,r.u);n.insertBefore(o,n.childNodes[i.r])}e&&Xn(n,e);return n}(n,r);case 5:return r.s(n);default:q(10)}}function lr(n){if(3===n.nodeType)return qn(n.textContent);if(1!==n.nodeType)return qn("");for(var r=w,t=n.attributes,e=t.length;e--;){var u=t[e];r=_(d(Mn,u.name,u.value),r)}var a=n.tagName.toLowerCase(),i=w,f=n.childNodes;for(e=f.length;e--;)i=_(lr(f[e]),i);return h(zn,a,r,i)}var dr=e(function(r,n,t,f){return yn(n,f,r.cJ,r.di,r.db,function(e,n){var u=r.dj,a=f.node,i=lr(a);return $r(n,function(n){var r=u(n),t=Zn(i,r);a=vr(a,i,t,e),i=r})})}),hr=("undefined"!=typeof cancelAnimationFrame&&cancelAnimationFrame,"undefined"!=typeof requestAnimationFrame?requestAnimationFrame:function(n){return setTimeout(n,1e3/60)});function $r(t,e){e(t);var u=0;function a(){u=1===u?0:(hr(a),e(t),1)}return function(n,r){t=n,r?(e(t),2===u&&(u=1)):(0===u&&hr(a),u=2)}}var gr={addEventListener:function(){},removeEventListener:function(){}};"undefined"!=typeof document&&document,"undefined"!=typeof window&&window;var mr,pr=k,yr=t(function(n,r,t){for(;;){if(-2===t.$)return r;var e=t.d,u=n,a=h(n,t.b,t.c,h(yr,n,r,t.e));n=u,r=a,t=e}}),wr=function(n){return h(yr,t(function(n,r,t){return d(pr,m(n,r),t)}),w,n)},_r=F,kr=t(function(t,n,r){var e=r.c,u=r.d,a=f(function(n,r){return h(_r,n.$?t:a,r,n.a)});return h(_r,a,h(_r,t,n,u),e)}),Ar=function(n){return h(kr,pr,w,n)},jr=function(n){return{$:1,a:n}},Tr=f(function(n,r){return{$:3,a:n,b:r}}),xr=f(function(n,r){return{$:0,a:n,b:r}}),Lr=f(function(n,r){return{$:1,a:n,b:r}}),Nr=function(n){return{$:0,a:n}},Er=function(n){return{$:2,a:n}},Cr=function(n){return{$:0,a:n}},Fr={$:1},Xr=Y,qr=f(function(n,r){return d(B,n,j(r))}),zr=t(function(n,r,t){for(;;){if(!t.b)return r;var e=t.b,u=n,a=d(n,t.a,r);n=u,r=a,t=e}}),Gr=function(n){return h(zr,pr,w,n)},Or=e(function(n,r,t,e){return{$:0,a:n,b:r,c:t,d:e}}),Rr=[],Sr=O,Mr=f(function(n,r){return M(r)/M(n)}),Br=function(n){return n},Yr=Sr(d(Mr,2,32)),Ir=$(Or,0,Yr,Rr,Rr),Jr=T,Dr=function(n){return{$:1,a:n}},Pr=R,Kr=function(n){return n.length},Wr=f(function(n,r){return 0<v(n,r)?n:r}),Hr=function(n){return{$:0,a:n}},Qr=x,Ur=f(function(n,r){for(;;){var t=d(Qr,32,n),e=t.b,u=d(pr,Hr(t.a),r);if(!e.b)return Gr(u);n=e,r=u}}),Vr=f(function(n,r){for(;;){var t=Sr(r/32);if(1===t)return d(Qr,32,n).a;n=d(Ur,n,w),r=t}}),Zr=f(function(n,r){if(r.i){var t=32*r.i,e=Pr(d(Mr,32,t-1)),u=n?Gr(r.m):r.m,a=d(Vr,u,r.i);return $(Or,Kr(r.l)+t,d(Wr,5,e*Yr),a,r.l)}return $(Or,Kr(r.l),Yr,Rr,r.l)}),nt=u(function(n,r,t,e,u){for(;;){if(r<0)return d(Zr,!1,{m:e,i:t/32|0,l:u});var a=Dr(h(Jr,32,r,n));n=n,r=r-32,t=t,e=d(pr,a,e),u=u}}),rt=f(function(n,r){if(0<n){var t=n%32;return b(nt,r,n-t-32,n,w,h(Jr,t,n-t,r))}return Ir}),tt=function(n){return!n.$},et=H,ut=Q,at=function(n){return{$:0,a:n}},it=function(n){switch(n.$){case 0:return 0;case 1:return 1;case 2:return 2;default:return 3}},ft=function(n){return n},ot=cn,ct=ot(0),vt=e(function(n,r,t,e){if(e.b){var u=e.a,a=e.b;if(a.b){var i=a.a,f=a.b;if(f.b){var o=f.a,c=f.b;if(c.b){var v=c.b;return d(n,u,d(n,i,d(n,o,d(n,c.a,500<t?h(zr,n,r,Gr(v)):$(vt,n,r,t+1,v)))))}return d(n,u,d(n,i,d(n,o,r)))}return d(n,u,d(n,i,r))}return d(n,u,r)}return r}),bt=t(function(n,r,t){return $(vt,n,r,0,t)}),st=f(function(t,n){return h(bt,f(function(n,r){return d(pr,t(n),r)}),w,n)}),lt=bn,dt=f(function(r,n){return d(lt,function(n){return ot(r(n))},n)}),ht=t(function(t,n,e){return d(lt,function(r){return d(lt,function(n){return ot(d(t,r,n))},e)},n)}),$t=kn,gt=f(function(n,r){var t=r;return dn(d(lt,$t(n),t))});wn.Task={b:ct,c:t(function(n,r){return d(dt,function(){return 0},(t=d(st,gt(n),r),h(bt,ht(pr),ot(w),t)));var t}),d:t(function(){return ot(0)}),e:f(function(n,r){return d(dt,n,r)}),f:mr};An("Task");var mt,pt=dr,yt=J,wt=function(n){return n<0?-n:n},_t=f(function(n,r){return{$:0,a:n,b:r}}),kt=function(n){var r=n.b;return d(_t,1664525*n.a+r>>>0,r)},At=function(n){var r=n.a,t=277803737*(r^r>>>4+(r>>>28));return(t>>>22^t)>>>0},jt=f(function(u,a){return function(n){var r=kt(n),t=wt(a-u),e=At(r);return m((134217728*(1*(67108863&At(n)))+1*(134217727&e))/9007199254740992*t+u,kt(r))}}),Tt=t(function(n,r,t){for(;;){var e=d(Qr,32,n),u=e.a,a=e.b;if(v(Kr(u),32)<0)return d(Zr,!0,{m:r,i:t,l:u});n=a,r=d(pr,Dr(u),r),t=t+1}}),xt=C,Lt=X,Nt=function(n){return n>>>5<<5},Et=f(function(e,n){var r=n.c,t=n.d,u={m:w,i:0,l:h(Lt,e,Nt(n.a),t)},a=f(function(n,r){if(n.$){var t=Dr(h(Lt,e,32*r.i,n.a));return{m:d(pr,t,r.m),i:r.i+1,l:r.l}}return h(xt,a,r,n.a)});return d(Zr,!0,h(xt,a,u,r))}),Ct=e(function(n,r,t,e){for(;;){if(r<1)return m(n,e);var u=t(e),a=u.b;n=d(pr,u.a,n),r=r-1,t=t,e=a}}),Ft=f(function(r,n){var t=n;return function(n){return $(Ct,w,r,t,n)}}),Xt=t(function(n,r,t){var e=t.b;return m(n(t.a),r(e))}),qt=f(function(n,r){var t=r.a,e=r.b,u=wt(t-250);return m(t,e+n*d(Wr,-u/(100/150)+150,0)/2*-1)}),zt=jn(w),Gt=f(function(n,r){return n(r)}),Ot=jn(w),Rt=f(function(n,r){return m(p(r,{aK:r.aK+1}),zt)}),St=function(n){return 3.141592653589793*n/180},Mt=e(function(n,r,t,e){return{$:0,a:n,b:r,c:t,d:e}}),Bt=e(function(n,r,t,e){var u=function(n,r,t){return{a:n,b:r,c:t}}(n,r,t),a=u.a,i=u.b,f=u.c,o=.5<f?f+i-f*i:f*(i+1),c=2*f-o,v=function(n){var r=n<0?n+1:1<n?n-1:n;return 6*r<1?c+(o-c)*r*6:2*r<1?o:3*r<2?c+(o-c)*(2/3-r)*6:c},b=v(a-1/3),s=v(a),l=v(a+1/3);return $(Mt,l,s,b,e)}),Yt=t(function(n,r,t){return $(Bt,n,r,t,1)}),It=h(Yt,St(260),.1,.1),Jt=f(function(n,r){return v(n,30)<0&&v(r,60)<0?30*r+n:-1}),Dt=function(n){return{$:1,a:n}},Pt=function(n){return{$:2,a:n}},Kt=function(n){return Pt(Dt(n))},Wt=4294967295>>>32-Yr,Ht=L,Qt=t(function(n,r,t){for(;;){var e=d(Ht,Wt&r>>>n,t);if(e.$)return d(Ht,Wt&r,e.a);n=n-Yr,r=r,t=e.a}}),Ut=f(function(n,r){var t=r.a,e=r.b,u=r.c,a=r.d;return n<0||-1<v(n,t)?Fr:-1<v(n,Nt(t))?Cr(d(Ht,Wt&n,a)):Cr(h(Qt,e,n,u))}),Vt=function(n){return an(h(zr,f(function(n,r){return h(on,n.a,n.b,r)}),{},n))},Zt=an,ne=f(function(n,r){return Vt(A([m("type",Zt("field")),m("name",Zt(n)),m("value",r)]))}),re=an,te=function(n){return{$:0,a:d(ne,"lineWidth",re(n))}},ee=f(function(n,r){return{$:2,a:n,b:r}}),ue=f(function(n,r){return d(ee,n,r)}),ae=E,ie=function(n){return[n]},fe=N,oe=e(function(n,r,t,e){var u=Wt&r>>>n;if(-1<v(u,Kr(e))){if(5===n)return d(ae,Dr(t),e);var a=Hr($(oe,n-Yr,r,t,Rr));return d(ae,a,e)}var i=d(Ht,u,e);if(i.$){a=Hr($(oe,n-Yr,r,t,ie(i)));return h(fe,u,a,e)}var a=Hr($(oe,n-Yr,r,t,i.a));return h(fe,u,a,e)}),ce=f(function(n,r){var t=r.a,e=r.b,u=r.c,a=Kr(r.d),i=Kr(n),f=t+(i-a);if(l(i,32)){if(0<v(f>>>Yr,1<<e)){var o=e+Yr,c=$(oe,o,t,n,ie(Hr(u)));return $(Or,f,o,c,Rr)}return $(Or,f,e,$(oe,e,t,n,u),Rr)}return $(Or,f,e,u,n)}),ve=f(function(n,r){return d(ce,d(ae,n,r.d),r)}),be=f(function(n,r){return{$:4,a:n,b:r}}),se=f(function(n,r){return d(be,n,r)}),le={$:0},de=f(function(n,r){return{$:3,a:n,b:r}}),he=function(n){return{$:2,a:n}},$e=f(function(n,r){var t=m(n,r);n:for(;;)switch(t.b.$){case 3:var e=t.b;return d(de,e.a,e.b);case 1:switch(t.a.$){case 1:return Dt(t.b.a);case 2:return d(de,t.b.a,t.a.a);case 3:var u=t.a;return d(de,t.b.a,u.b);default:break n}case 2:switch(t.a.$){case 2:return he(t.b.a);case 1:return d(de,t.a.a,t.b.a);case 3:var a=t.a;return d(de,a.a,t.b.a);default:break n}default:if(t.a.$){return t.a}break n}return t.b}),ge=f(function(n,r){return h(zr,f(function(n,r){var t=r;switch(n.$){case 0:return p(t,{G:d(pr,n.a,t.G)});case 1:return p(t,{G:h(zr,pr,t.G,n.a)});case 3:return p(t,{Y:(0,n.a)(t.Y)});default:return p(t,{X:d($e,t.X,n.a)})}}),r,n)}),me=f(function(n,r){return d(ge,n,{G:w,X:le,Y:(t=r,{$:1,a:t})});var t}),pe=f(function(n,r){return r.$?n:r.a}),ye=t(function(u,n,r){var t,a=n.a,i=n.b,e=r.a,f=r.b,o=d(pe,{bX:m(0,0),bn:0},d(Ut,d(Jt,a,i),u)).bX,c=o.a,v=o.b,b=function(){if(a){var n=d(pe,{bX:m(c+10,v),bn:0},d(Ut,d(Jt,a+1,i),u)).bX,r=m((c+n.a)/2,(v+n.b)/2),t=r.a,e=r.b;return d(se,m(c,v),m(t,e))}return{$:3,a:m(c,v)}}();if(l(a,29)){var s=d(me,A([te(1.5),Kt(It),(t=h(Yt,St(188),.3,.8),Pt(he(t)))]),A([d(ue,m(0,0),Ar(d(ve,b,e)))]));return m(Ir,d(ve,s,f))}return m(d(ve,b,e),f)}),we=t(function(n,i,r){var f=n.c4,o=n.co;return h(t(function(n,r,t){for(;;){if(-1<v(r,f))return t;if(v(n,o)>-1){n=e=0,r=u=r+1,t=a=t}else{var e=n+1,u=r,a=d(i,m(n,r),t);n=e,r=u,t=a}}}),0,0,r)}),_e=t(function(n,r,t){return{$:0,a:n,b:r,c:t}}),ke=t(function(n,r,t){return h(_e,n,r,t)}),Ae=d(zn("canvas"),w,w),je=f(function(n,r){return an(h(zr,function(t){return f(function(n,r){return r.push(fn(t(n))),r})}(n),[],r))}),Te=f(function(n,r){return d(Sn,function(n){return"innerHTML"==n||"formAction"==n?"data-"+n:n}(n),Bn(r))}),xe=function(n){return Gn(function(n){return"script"==n?"p":n}(n))},Le=w,Ne=f(function(n,r){return Vt(A([m("type",Zt("function")),m("name",Zt(n)),m("args",d(je,ft,r))]))}),Ee=d(Ne,"beginPath",w),Ce=e(function(n,r,t,e){return d(Ne,"clearRect",A([re(n),re(r),re(t),re(e)]))}),Fe=e(function(n,r,t,e){return d(pr,$(Ce,n.a,n.b,r,t),e)}),Xe=an,qe=a(function(n,r,t,e,u,a){return d(Ne,"arc",A([re(n),re(r),re(t),re(e),re(u),Xe(a)]))}),ze=t(function(n,r,t){return g(qe,n,r,t,0,6.283185307179586,!1)}),Ge=z,Oe=f(function(n,r){return d(Ne,"moveTo",A([re(n),re(r)]))}),Re=e(function(n,r,t,e){return d(Ne,"rect",A([re(n),re(r),re(t),re(e)]))}),Se=u(function(n,r,t,e,u){return d(Ne,"arcTo",A([re(n),re(r),re(t),re(e),re(u)]))}),Me=a(function(n,r,t,e,u,a){return d(Ne,"bezierCurveTo",A([re(n),re(r),re(t),re(e),re(u),re(a)]))}),Be=f(function(n,r){return d(Ne,"lineTo",A([re(n),re(r)]))}),Ye=e(function(n,r,t,e){return d(Ne,"quadraticCurveTo",A([re(n),re(r),re(t),re(e)]))}),Ie=f(function(n,r){switch(n.$){case 0:var t=n.a,e=n.b;return d(pr,b(Se,t.a,t.b,e.a,e.b,n.c),r);case 1:var u=n.a,a=n.b,i=n.c;return d(pr,g(Me,u.a,u.b,a.a,a.b,i.a,i.b),r);case 2:var f=n.a;return d(pr,d(Be,f.a,f.b),r);case 3:var o=n.a;return d(pr,d(Oe,o.a,o.b),r);default:var c=n.a,v=n.b;return d(pr,$(Ye,c.a,c.b,v.a,v.b),r)}}),Je=G,De=f(function(n,r){switch(n.$){case 0:var t=n.a;return d(pr,$(Re,f=t.a,c=t.b,n.b,n.c),d(pr,d(Oe,f,c),r));case 1:var e=n.a,u=n.b;return d(pr,h(ze,f=e.a,c=e.b,u),d(pr,d(Oe,f+u,c),r));case 2:var a=n.a,i=n.b;return h(zr,Ie,d(pr,d(Oe,f=a.a,c=a.b),r),i);default:var f,o=n.a,c=o.b,v=n.b,b=n.c,s=n.d,l=n.e;return d(pr,d(Oe,(f=o.a)+v*Ge(s),c+v*Je(s)),d(pr,g(qe,f,c,v,b,s,l),d(pr,d(Oe,f+v*Ge(b),c+v*Je(b)),r)))}}),Pe=$(Mt,0,0,0,1),Ke=Y,We=S,He=function(n){var r,t,e=n.b,u=n.c,a=n.d,i=function(n){return We(1e4*n)/100};return r=A(["rgba(",Ke(i(n.a)),"%,",Ke(i(e)),"%,",Ke(i(u)),"%,",Ke((t=a,We(1e3*t)/1e3)),")"]),d(qr,"",r)},Qe=function(n){return d(ne,"fillStyle",Zt(He(n)))},Ue=f(function(n,r){return d(pr,d(Ne,"fill",A([Zt(function(n){return n?"evenodd":"nonzero"}(0))])),d(pr,Qe(n),r))}),Ve=d(Ne,"stroke",w),Ze=function(n){return d(ne,"strokeStyle",Zt(He(n)))},nu=f(function(n,r){return d(pr,Ve,d(pr,Ze(n),r))}),ru=f(function(n,r){switch(n.$){case 0:return d(Ue,Pe,r);case 1:return d(Ue,n.a,r);case 2:return d(nu,n.a,r);default:return d(nu,n.b,d(Ue,n.a,r))}}),tu=e(function(n,r,t,e){if(1===e.$)return d(Ne,"fillText",A([Zt(n),re(r),re(t)]));var u=e.a;return d(Ne,"fillText",A([Zt(n),re(r),re(t),re(u)]))}),eu=u(function(n,r,t,e,u){return d(pr,$(tu,n.bu,r,t,n.a7),d(pr,Qe(e),u))}),uu=e(function(n,r,t,e){if(1===e.$)return d(Ne,"strokeText",A([Zt(n),re(r),re(t)]));var u=e.a;return d(Ne,"strokeText",A([Zt(n),re(r),re(t),re(u)]))}),au=u(function(n,r,t,e,u){return d(pr,$(uu,n.bu,r,t,n.a7),d(pr,Ze(e),u))}),iu=t(function(n,r,t){var e=r.bX,u=e.a,a=e.b;switch(n.$){case 0:return b(eu,r,u,a,Pe,t);case 1:return b(eu,r,u,a,n.a,t);case 2:return b(au,r,u,a,n.a,t);default:return b(au,r,u,a,n.b,b(eu,r,u,a,n.a,t))}}),fu=t(function(n,r,t){return h(iu,n,r,t)}),ou=i(function(n,r,t,e,u,a,i,f,o){return d(Ne,"drawImage",A([o,re(n),re(r),re(t),re(e),re(u),re(a),re(i),re(f)]))}),cu=e(function(t,e,u,n){return d(pr,function(){if(u.$){var n=u.a;return o(ou,n.ca,n.cb,n.bx,n.a_,t,e,n.bx,n.a_,(r=u.b).cL)}var r;return o(ou,0,0,(r=u.a).bx,r.a_,t,e,r.bx,r.a_,r.cL)}(),n)}),vu=t(function(n,r,t){return $(cu,n.a,n.b,r,t)}),bu=t(function(n,r,t){switch(n.$){case 0:return h(fu,r,n.a,t);case 1:var e=n.a;return d(ru,r,h(zr,De,d(pr,Ee,t),e));case 2:return h(vu,n.a,n.b,t);default:return $(Fe,n.a,n.b,n.c,t)}}),su=d(Ne,"restore",w),lu=d(Ne,"save",w),du=f(function(n,r){return d(pr,su,h(bu,n.Y,n.X,y(n.G,d(pr,lu,r))))}),hu=function(n){return{$:0,a:n}},$u=f(function(n,r){return d(Mn,function(n){return/^(on|formAction$)/i.test(n)?"data-"+n:n}(n),Bn(r))}),gu=t(function(n,r,t){return r(n(t))}),mu=W,pu=P,yu=f(function(n,r){return h(bt,pu,r,n)}),wu=d(mu,function(t){return h(ut,f(function(n,r){return{a_:r,cL:t,bx:n}}),d(yu,A(["target","width"]),yt),d(yu,A(["target","height"]),yt))},d(pu,"target",D)),_u=zn("img"),ku=On,Au=f(function(n,r){return d(ku,n,{$:0,a:r})}),ju=f(function(n,r){return d(Sn,n,Zt(r))}),Tu=Rn,xu=function(n){var r=n.a,t=n.b;return m(r,d(_u,A([function(n){return d(ju,"src",Bn(n))}(r),d($u,"crossorigin","anonymous"),d(Tu,"display","none"),d(Au,"load",d(et,d(gu,hu,d(gu,Cr,t)),wu)),d(Au,"error",at(t(Fr)))]),w))},Lu=t(function(n,r,t){return h(xe,"elm-canvas",d(pr,(e=function(n){return h(zr,du,Le,n)}(t),d(Te,"cmds",d(je,ft,e))),d(pr,d(Mn,"height",Xr(n.a_)),d(pr,function(n){return d(Mn,"width",Xr(n))}(n.bx),r))),d(pr,m("__canvas",Ae),d(st,xu,n.b7)));var e}),Nu=t(function(n,r,t){return h(Lu,{a_:n.b,b7:w,bx:n.a},r,t)}),Eu=pt({cJ:function(n){var r,t=f(function(n,r){return{bX:d(qt,r,(t=h(Xt,Br,Br,function(n){return m(n%30,n/30|0)}(n)),m(10*t.a+5+100,5*t.b+2.5+130))),bn:r};var t}),e=d(Gt,d(Ft,1800,d(jt,0,1)),function(n){var r=kt(d(_t,0,1013904223));return kt(d(_t,r.a+n>>>0,r.b))}(Pr(1e5*n)));return m({aK:0,bk:d(Et,t,(r=e.a).b?h(Tt,r,w,0):Ir)},zt)},db:function(){return Ot},di:Rt,dj:function(n){return h(Nu,m(500,500),w,d(pr,d(me,A([Kt(It)]),A([h(ke,m(0,0),500,500)])),Ar(h(we,{co:30,c4:60},ye(n.bk),m(Ir,Ir)).b)))}});mt={JoyDivision:{init:Eu(yt)(0)}},n.Elm?function n(r,t){for(var e in t)e in r?"init"==e?q(6):n(r[e],t[e]):r[e]=t[e]}(n.Elm,mt):n.Elm=mt}(this);