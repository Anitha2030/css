(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
'use strict';var l;function ba(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}
var ca="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a};
function da(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}
var ea=da(this);function q(a,b){if(b)a:{var c=ea;a=a.split(".");for(var d=0;d<a.length-1;d++){var e=a[d];if(!(e in c))break a;c=c[e]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&ca(c,a,{configurable:!0,writable:!0,value:b})}}
q("Symbol",function(a){function b(f){if(this instanceof b)throw new TypeError("Symbol is not a constructor");return new c(d+(f||"")+"_"+e++,f)}
function c(f,g){this.h=f;ca(this,"description",{configurable:!0,writable:!0,value:g})}
if(a)return a;c.prototype.toString=function(){return this.h};
var d="jscomp_symbol_"+(1E9*Math.random()>>>0)+"_",e=0;return b});
q("Symbol.iterator",function(a){if(a)return a;a=Symbol("Symbol.iterator");for(var b="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),c=0;c<b.length;c++){var d=ea[b[c]];"function"===typeof d&&"function"!=typeof d.prototype[a]&&ca(d.prototype,a,{configurable:!0,writable:!0,value:function(){return fa(ba(this))}})}return a});
function fa(a){a={next:a};a[Symbol.iterator]=function(){return this};
return a}
function ia(a){return a.raw=a}
function r(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:ba(a)}}
function ja(a){if(!(a instanceof Array)){a=r(a);for(var b,c=[];!(b=a.next()).done;)c.push(b.value);a=c}return a}
function ka(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
var la="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)ka(d,e)&&(a[e]=d[e])}return a};
q("Object.assign",function(a){return a||la});
var ma="function"==typeof Object.create?Object.create:function(a){function b(){}
b.prototype=a;return new b},na=function(){function a(){function c(){}
new c;Reflect.construct(c,[],function(){});
return new c instanceof c}
if("undefined"!=typeof Reflect&&Reflect.construct){if(a())return Reflect.construct;var b=Reflect.construct;return function(c,d,e){c=b(c,d);e&&Reflect.setPrototypeOf(c,e.prototype);return c}}return function(c,d,e){void 0===e&&(e=c);
e=ma(e.prototype||Object.prototype);return Function.prototype.apply.call(c,e,d)||e}}(),pa;
if("function"==typeof Object.setPrototypeOf)pa=Object.setPrototypeOf;else{var ra;a:{var sa={a:!0},ua={};try{ua.__proto__=sa;ra=ua.a;break a}catch(a){}ra=!1}pa=ra?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var va=pa;
function u(a,b){a.prototype=ma(b.prototype);a.prototype.constructor=a;if(va)va(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.ta=b.prototype}
function wa(){this.H=!1;this.l=null;this.i=void 0;this.h=1;this.m=this.s=0;this.v=this.j=null}
function xa(a){if(a.H)throw new TypeError("Generator is already running");a.H=!0}
wa.prototype.Z=function(a){this.i=a};
function ya(a,b){a.j={md:b,wd:!0};a.h=a.s||a.m}
wa.prototype.return=function(a){this.j={return:a};this.h=this.m};
function w(a,b,c){a.h=c;return{value:b}}
wa.prototype.A=function(a){this.h=a};
function za(a,b,c){a.s=b;void 0!=c&&(a.m=c)}
function Aa(a,b){a.h=b;a.s=0}
function Ba(a){a.s=0;var b=a.j.md;a.j=null;return b}
function Ca(a){a.v=[a.j];a.s=0;a.m=0}
function Da(a){var b=a.v.splice(0)[0];(b=a.j=a.j||b)?b.wd?a.h=a.s||a.m:void 0!=b.A&&a.m<b.A?(a.h=b.A,a.j=null):a.h=a.m:a.h=0}
function Ea(a){this.h=new wa;this.i=a}
function Fa(a,b){xa(a.h);var c=a.h.l;if(c)return Ga(a,"return"in c?c["return"]:function(d){return{value:d,done:!0}},b,a.h.return);
a.h.return(b);return Ha(a)}
function Ga(a,b,c,d){try{var e=b.call(a.h.l,c);if(!(e instanceof Object))throw new TypeError("Iterator result "+e+" is not an object");if(!e.done)return a.h.H=!1,e;var f=e.value}catch(g){return a.h.l=null,ya(a.h,g),Ha(a)}a.h.l=null;d.call(a.h,f);return Ha(a)}
function Ha(a){for(;a.h.h;)try{var b=a.i(a.h);if(b)return a.h.H=!1,{value:b.value,done:!1}}catch(c){a.h.i=void 0,ya(a.h,c)}a.h.H=!1;if(a.h.j){b=a.h.j;a.h.j=null;if(b.wd)throw b.md;return{value:b.return,done:!0}}return{value:void 0,done:!0}}
function Ia(a){this.next=function(b){xa(a.h);a.h.l?b=Ga(a,a.h.l.next,b,a.h.Z):(a.h.Z(b),b=Ha(a));return b};
this.throw=function(b){xa(a.h);a.h.l?b=Ga(a,a.h.l["throw"],b,a.h.Z):(ya(a.h,b),b=Ha(a));return b};
this.return=function(b){return Fa(a,b)};
this[Symbol.iterator]=function(){return this}}
function Ja(a){function b(d){return a.next(d)}
function c(d){return a.throw(d)}
return new Promise(function(d,e){function f(g){g.done?d(g.value):Promise.resolve(g.value).then(b,c).then(f,e)}
f(a.next())})}
function x(a){return Ja(new Ia(new Ea(a)))}
function Ka(){for(var a=Number(this),b=[],c=a;c<arguments.length;c++)b[c-a]=arguments[c];return b}
q("Reflect",function(a){return a?a:{}});
q("Reflect.construct",function(){return na});
q("Reflect.setPrototypeOf",function(a){return a?a:va?function(b,c){try{return va(b,c),!0}catch(d){return!1}}:null});
q("Promise",function(a){function b(g){this.h=0;this.j=void 0;this.i=[];this.H=!1;var h=this.l();try{g(h.resolve,h.reject)}catch(k){h.reject(k)}}
function c(){this.h=null}
function d(g){return g instanceof b?g:new b(function(h){h(g)})}
if(a)return a;c.prototype.i=function(g){if(null==this.h){this.h=[];var h=this;this.j(function(){h.m()})}this.h.push(g)};
var e=ea.setTimeout;c.prototype.j=function(g){e(g,0)};
c.prototype.m=function(){for(;this.h&&this.h.length;){var g=this.h;this.h=[];for(var h=0;h<g.length;++h){var k=g[h];g[h]=null;try{k()}catch(m){this.l(m)}}}this.h=null};
c.prototype.l=function(g){this.j(function(){throw g;})};
b.prototype.l=function(){function g(m){return function(p){k||(k=!0,m.call(h,p))}}
var h=this,k=!1;return{resolve:g(this.V),reject:g(this.m)}};
b.prototype.V=function(g){if(g===this)this.m(new TypeError("A Promise cannot resolve to itself"));else if(g instanceof b)this.aa(g);else{a:switch(typeof g){case "object":var h=null!=g;break a;case "function":h=!0;break a;default:h=!1}h?this.R(g):this.s(g)}};
b.prototype.R=function(g){var h=void 0;try{h=g.then}catch(k){this.m(k);return}"function"==typeof h?this.ia(h,g):this.s(g)};
b.prototype.m=function(g){this.Z(2,g)};
b.prototype.s=function(g){this.Z(1,g)};
b.prototype.Z=function(g,h){if(0!=this.h)throw Error("Cannot settle("+g+", "+h+"): Promise already settled in state"+this.h);this.h=g;this.j=h;2===this.h&&this.Y();this.v()};
b.prototype.Y=function(){var g=this;e(function(){if(g.N()){var h=ea.console;"undefined"!==typeof h&&h.error(g.j)}},1)};
b.prototype.N=function(){if(this.H)return!1;var g=ea.CustomEvent,h=ea.Event,k=ea.dispatchEvent;if("undefined"===typeof k)return!0;"function"===typeof g?g=new g("unhandledrejection",{cancelable:!0}):"function"===typeof h?g=new h("unhandledrejection",{cancelable:!0}):(g=ea.document.createEvent("CustomEvent"),g.initCustomEvent("unhandledrejection",!1,!0,g));g.promise=this;g.reason=this.j;return k(g)};
b.prototype.v=function(){if(null!=this.i){for(var g=0;g<this.i.length;++g)f.i(this.i[g]);this.i=null}};
var f=new c;b.prototype.aa=function(g){var h=this.l();g.cc(h.resolve,h.reject)};
b.prototype.ia=function(g,h){var k=this.l();try{g.call(h,k.resolve,k.reject)}catch(m){k.reject(m)}};
b.prototype.then=function(g,h){function k(v,t){return"function"==typeof v?function(z){try{m(v(z))}catch(D){p(D)}}:t}
var m,p,n=new b(function(v,t){m=v;p=t});
this.cc(k(g,m),k(h,p));return n};
b.prototype.catch=function(g){return this.then(void 0,g)};
b.prototype.cc=function(g,h){function k(){switch(m.h){case 1:g(m.j);break;case 2:h(m.j);break;default:throw Error("Unexpected state: "+m.h);}}
var m=this;null==this.i?f.i(k):this.i.push(k);this.H=!0};
b.resolve=d;b.reject=function(g){return new b(function(h,k){k(g)})};
b.race=function(g){return new b(function(h,k){for(var m=r(g),p=m.next();!p.done;p=m.next())d(p.value).cc(h,k)})};
b.all=function(g){var h=r(g),k=h.next();return k.done?d([]):new b(function(m,p){function n(z){return function(D){v[z]=D;t--;0==t&&m(v)}}
var v=[],t=0;do v.push(void 0),t++,d(k.value).cc(n(v.length-1),p),k=h.next();while(!k.done)})};
return b});
q("WeakMap",function(a){function b(k){this.h=(h+=Math.random()+1).toString();if(k){k=r(k);for(var m;!(m=k.next()).done;)m=m.value,this.set(m[0],m[1])}}
function c(){}
function d(k){var m=typeof k;return"object"===m&&null!==k||"function"===m}
function e(k){if(!ka(k,g)){var m=new c;ca(k,g,{value:m})}}
function f(k){var m=Object[k];m&&(Object[k]=function(p){if(p instanceof c)return p;Object.isExtensible(p)&&e(p);return m(p)})}
if(function(){if(!a||!Object.seal)return!1;try{var k=Object.seal({}),m=Object.seal({}),p=new a([[k,2],[m,3]]);if(2!=p.get(k)||3!=p.get(m))return!1;p.delete(k);p.set(m,4);return!p.has(k)&&4==p.get(m)}catch(n){return!1}}())return a;
var g="$jscomp_hidden_"+Math.random();f("freeze");f("preventExtensions");f("seal");var h=0;b.prototype.set=function(k,m){if(!d(k))throw Error("Invalid WeakMap key");e(k);if(!ka(k,g))throw Error("WeakMap key fail: "+k);k[g][this.h]=m;return this};
b.prototype.get=function(k){return d(k)&&ka(k,g)?k[g][this.h]:void 0};
b.prototype.has=function(k){return d(k)&&ka(k,g)&&ka(k[g],this.h)};
b.prototype.delete=function(k){return d(k)&&ka(k,g)&&ka(k[g],this.h)?delete k[g][this.h]:!1};
return b});
q("Map",function(a){function b(){var h={};return h.previous=h.next=h.head=h}
function c(h,k){var m=h.h;return fa(function(){if(m){for(;m.head!=h.h;)m=m.previous;for(;m.next!=m.head;)return m=m.next,{done:!1,value:k(m)};m=null}return{done:!0,value:void 0}})}
function d(h,k){var m=k&&typeof k;"object"==m||"function"==m?f.has(k)?m=f.get(k):(m=""+ ++g,f.set(k,m)):m="p_"+k;var p=h.data_[m];if(p&&ka(h.data_,m))for(h=0;h<p.length;h++){var n=p[h];if(k!==k&&n.key!==n.key||k===n.key)return{id:m,list:p,index:h,entry:n}}return{id:m,list:p,index:-1,entry:void 0}}
function e(h){this.data_={};this.h=b();this.size=0;if(h){h=r(h);for(var k;!(k=h.next()).done;)k=k.value,this.set(k[0],k[1])}}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var h=Object.seal({x:4}),k=new a(r([[h,"s"]]));if("s"!=k.get(h)||1!=k.size||k.get({x:4})||k.set({x:4},"t")!=k||2!=k.size)return!1;var m=k.entries(),p=m.next();if(p.done||p.value[0]!=h||"s"!=p.value[1])return!1;p=m.next();return p.done||4!=p.value[0].x||"t"!=p.value[1]||!m.next().done?!1:!0}catch(n){return!1}}())return a;
var f=new WeakMap;e.prototype.set=function(h,k){h=0===h?0:h;var m=d(this,h);m.list||(m.list=this.data_[m.id]=[]);m.entry?m.entry.value=k:(m.entry={next:this.h,previous:this.h.previous,head:this.h,key:h,value:k},m.list.push(m.entry),this.h.previous.next=m.entry,this.h.previous=m.entry,this.size++);return this};
e.prototype.delete=function(h){h=d(this,h);return h.entry&&h.list?(h.list.splice(h.index,1),h.list.length||delete this.data_[h.id],h.entry.previous.next=h.entry.next,h.entry.next.previous=h.entry.previous,h.entry.head=null,this.size--,!0):!1};
e.prototype.clear=function(){this.data_={};this.h=this.h.previous=b();this.size=0};
e.prototype.has=function(h){return!!d(this,h).entry};
e.prototype.get=function(h){return(h=d(this,h).entry)&&h.value};
e.prototype.entries=function(){return c(this,function(h){return[h.key,h.value]})};
e.prototype.keys=function(){return c(this,function(h){return h.key})};
e.prototype.values=function(){return c(this,function(h){return h.value})};
e.prototype.forEach=function(h,k){for(var m=this.entries(),p;!(p=m.next()).done;)p=p.value,h.call(k,p[1],p[0],this)};
e.prototype[Symbol.iterator]=e.prototype.entries;var g=0;return e});
function La(a,b,c){if(null==a)throw new TypeError("The 'this' value for String.prototype."+c+" must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype."+c+" must not be a regular expression");return a+""}
q("String.prototype.endsWith",function(a){return a?a:function(b,c){var d=La(this,b,"endsWith");b+="";void 0===c&&(c=d.length);c=Math.max(0,Math.min(c|0,d.length));for(var e=b.length;0<e&&0<c;)if(d[--c]!=b[--e])return!1;return 0>=e}});
q("Array.prototype.find",function(a){return a?a:function(b,c){a:{var d=this;d instanceof String&&(d=String(d));for(var e=d.length,f=0;f<e;f++){var g=d[f];if(b.call(c,g,f,d)){b=g;break a}}b=void 0}return b}});
q("String.prototype.startsWith",function(a){return a?a:function(b,c){var d=La(this,b,"startsWith");b+="";var e=d.length,f=b.length;c=Math.max(0,Math.min(c|0,d.length));for(var g=0;g<f&&c<e;)if(d[c++]!=b[g++])return!1;return g>=f}});
q("Number.isFinite",function(a){return a?a:function(b){return"number"!==typeof b?!1:!isNaN(b)&&Infinity!==b&&-Infinity!==b}});
q("Number.isInteger",function(a){return a?a:function(b){return Number.isFinite(b)?b===Math.floor(b):!1}});
q("Number.MAX_SAFE_INTEGER",function(){return 9007199254740991});
q("Number.isNaN",function(a){return a?a:function(b){return"number"===typeof b&&isNaN(b)}});
function Ma(a,b){a instanceof String&&(a+="");var c=0,d=!1,e={next:function(){if(!d&&c<a.length){var f=c++;return{value:b(f,a[f]),done:!1}}d=!0;return{done:!0,value:void 0}}};
e[Symbol.iterator]=function(){return e};
return e}
q("Array.prototype.entries",function(a){return a?a:function(){return Ma(this,function(b,c){return[b,c]})}});
q("Array.from",function(a){return a?a:function(b,c,d){c=null!=c?c:function(h){return h};
var e=[],f="undefined"!=typeof Symbol&&Symbol.iterator&&b[Symbol.iterator];if("function"==typeof f){b=f.call(b);for(var g=0;!(f=b.next()).done;)e.push(c.call(d,f.value,g++))}else for(f=b.length,g=0;g<f;g++)e.push(c.call(d,b[g],g));return e}});
q("Array.prototype.keys",function(a){return a?a:function(){return Ma(this,function(b){return b})}});
q("Array.prototype.values",function(a){return a?a:function(){return Ma(this,function(b,c){return c})}});
q("Array.prototype.fill",function(a){return a?a:function(b,c,d){var e=this.length||0;0>c&&(c=Math.max(0,e+c));if(null==d||d>e)d=e;d=Number(d);0>d&&(d=Math.max(0,e+d));for(c=Number(c||0);c<d;c++)this[c]=b;return this}});
function Na(a){return a?a:Array.prototype.fill}
q("Int8Array.prototype.fill",Na);q("Uint8Array.prototype.fill",Na);q("Uint8ClampedArray.prototype.fill",Na);q("Int16Array.prototype.fill",Na);q("Uint16Array.prototype.fill",Na);q("Int32Array.prototype.fill",Na);q("Uint32Array.prototype.fill",Na);q("Float32Array.prototype.fill",Na);q("Float64Array.prototype.fill",Na);q("Object.setPrototypeOf",function(a){return a||va});
q("Set",function(a){function b(c){this.h=new Map;if(c){c=r(c);for(var d;!(d=c.next()).done;)this.add(d.value)}this.size=this.h.size}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var c=Object.seal({x:4}),d=new a(r([c]));if(!d.has(c)||1!=d.size||d.add(c)!=d||1!=d.size||d.add({x:4})!=d||2!=d.size)return!1;var e=d.entries(),f=e.next();if(f.done||f.value[0]!=c||f.value[1]!=c)return!1;f=e.next();return f.done||f.value[0]==c||4!=f.value[0].x||f.value[1]!=f.value[0]?!1:e.next().done}catch(g){return!1}}())return a;
b.prototype.add=function(c){c=0===c?0:c;this.h.set(c,c);this.size=this.h.size;return this};
b.prototype.delete=function(c){c=this.h.delete(c);this.size=this.h.size;return c};
b.prototype.clear=function(){this.h.clear();this.size=0};
b.prototype.has=function(c){return this.h.has(c)};
b.prototype.entries=function(){return this.h.entries()};
b.prototype.values=function(){return this.h.values()};
b.prototype.keys=b.prototype.values;b.prototype[Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(c,d){var e=this;this.h.forEach(function(f){return c.call(d,f,f,e)})};
return b});
q("Object.entries",function(a){return a?a:function(b){var c=[],d;for(d in b)ka(b,d)&&c.push([d,b[d]]);return c}});
q("Object.is",function(a){return a?a:function(b,c){return b===c?0!==b||1/b===1/c:b!==b&&c!==c}});
q("Array.prototype.includes",function(a){return a?a:function(b,c){var d=this;d instanceof String&&(d=String(d));var e=d.length;c=c||0;for(0>c&&(c=Math.max(c+e,0));c<e;c++){var f=d[c];if(f===b||Object.is(f,b))return!0}return!1}});
q("String.prototype.includes",function(a){return a?a:function(b,c){return-1!==La(this,b,"includes").indexOf(b,c||0)}});
q("globalThis",function(a){return a||ea});
q("Object.values",function(a){return a?a:function(b){var c=[],d;for(d in b)ka(b,d)&&c.push(b[d]);return c}});
var Oa=Oa||{},y=this||self;function A(a,b,c){a=a.split(".");c=c||y;a[0]in c||"undefined"==typeof c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)a.length||void 0===b?c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}:c[d]=b}
function B(a,b){a=a.split(".");b=b||y;for(var c=0;c<a.length;c++)if(b=b[a[c]],null==b)return null;return b}
function Pa(a){var b=typeof a;return"object"!=b?b:a?Array.isArray(a)?"array":b:"null"}
function Qa(a){var b=Pa(a);return"array"==b||"object"==b&&"number"==typeof a.length}
function Ra(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
function Sa(a){return Object.prototype.hasOwnProperty.call(a,Ta)&&a[Ta]||(a[Ta]=++Ua)}
var Ta="closure_uid_"+(1E9*Math.random()>>>0),Ua=0;function Va(a,b,c){return a.call.apply(a.bind,arguments)}
function Wa(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}}
function Xa(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?Xa=Va:Xa=Wa;return Xa.apply(null,arguments)}
function Ya(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var d=c.slice();d.push.apply(d,arguments);return a.apply(this,d)}}
function Za(a,b){function c(){}
c.prototype=b.prototype;a.ta=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.Ft=function(d,e,f){for(var g=Array(arguments.length-2),h=2;h<arguments.length;h++)g[h-2]=arguments[h];return b.prototype[e].apply(d,g)}}
function ab(a){return a}
;function bb(a,b){if(Error.captureStackTrace)Error.captureStackTrace(this,bb);else{var c=Error().stack;c&&(this.stack=c)}a&&(this.message=String(a));void 0!==b&&(this.cause=b)}
Za(bb,Error);bb.prototype.name="CustomError";function cb(a){a=a.url;var b=/[?&]dsh=1(&|$)/.test(a);this.j=!b&&/[?&]ae=1(&|$)/.test(a);this.l=!b&&/[?&]ae=2(&|$)/.test(a);if((this.h=/[?&]adurl=([^&]*)/.exec(a))&&this.h[1]){try{var c=decodeURIComponent(this.h[1])}catch(d){c=null}this.i=c}}
;function db(){}
function eb(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}
;var fb=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if("string"===typeof a)return"string"!==typeof b||1!=b.length?-1:a.indexOf(b,0);
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},gb=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e="string"===typeof a?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},hb=Array.prototype.filter?function(a,b){return Array.prototype.filter.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=[],e=0,f="string"===typeof a?a.split(""):a,g=0;g<c;g++)if(g in f){var h=f[g];
b.call(void 0,h,g,a)&&(d[e++]=h)}return d},ib=Array.prototype.map?function(a,b){return Array.prototype.map.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=Array(c),e="string"===typeof a?a.split(""):a,f=0;f<c;f++)f in e&&(d[f]=b.call(void 0,e[f],f,a));
return d},jb=Array.prototype.reduce?function(a,b,c){return Array.prototype.reduce.call(a,b,c)}:function(a,b,c){var d=c;
gb(a,function(e,f){d=b.call(void 0,d,e,f,a)});
return d};
function kb(a,b){a:{for(var c=a.length,d="string"===typeof a?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){b=e;break a}b=-1}return 0>b?null:"string"===typeof a?a.charAt(b):a[b]}
function lb(a,b){b=fb(a,b);var c;(c=0<=b)&&Array.prototype.splice.call(a,b,1);return c}
function mb(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(Qa(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
;function nb(a,b){for(var c in a)b.call(void 0,a[c],c,a)}
function ob(a){var b=pb,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
function qb(a){for(var b in a)return!1;return!0}
function rb(a,b){if(null!==a&&b in a)throw Error('The object already contains the key "'+b+'"');a[b]=!0}
function sb(a){return null!==a&&"privembed"in a?a.privembed:!1}
function tb(a,b){for(var c in a)if(!(c in b)||a[c]!==b[c])return!1;for(var d in b)if(!(d in a))return!1;return!0}
function ub(a){var b={},c;for(c in a)b[c]=a[c];return b}
function vb(a){if(!a||"object"!==typeof a)return a;if("function"===typeof a.clone)return a.clone();if("undefined"!==typeof Map&&a instanceof Map)return new Map(a);if("undefined"!==typeof Set&&a instanceof Set)return new Set(a);if(a instanceof Date)return new Date(a.getTime());var b=Array.isArray(a)?[]:"function"!==typeof ArrayBuffer||"function"!==typeof ArrayBuffer.isView||!ArrayBuffer.isView(a)||a instanceof DataView?{}:new a.constructor(a.length),c;for(c in a)b[c]=vb(a[c]);return b}
var wb="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function yb(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<wb.length;f++)c=wb[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;var zb;function Ab(){if(void 0===zb){var a=null,b=y.trustedTypes;if(b&&b.createPolicy){try{a=b.createPolicy("goog#html",{createHTML:ab,createScript:ab,createScriptURL:ab})}catch(c){y.console&&y.console.error(c.message)}zb=a}else zb=a}return zb}
;function Bb(a,b){this.j=a===Cb&&b||""}
Bb.prototype.i=!0;Bb.prototype.h=function(){return this.j};
function Db(a){return new Bb(Cb,a)}
var Cb={};Db("");var Eb={};function Fb(a,b){this.j=b===Eb?a:"";this.i=!0}
Fb.prototype.toString=function(){return this.j.toString()};
Fb.prototype.h=function(){return this.j.toString()};function Gb(a,b){this.j=b===Hb?a:""}
Gb.prototype.toString=function(){return this.j+""};
Gb.prototype.i=!0;Gb.prototype.h=function(){return this.j.toString()};
function Ib(a){if(a instanceof Gb&&a.constructor===Gb)return a.j;Pa(a);return"type_error:TrustedResourceUrl"}
var Hb={};function Jb(a){var b=Ab();a=b?b.createScriptURL(a):a;return new Gb(a,Hb)}
;var Kb=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]};
function Lb(a,b){return a<b?-1:a>b?1:0}
;function Mb(a,b){this.j=b===Nb?a:""}
Mb.prototype.toString=function(){return this.j.toString()};
Mb.prototype.i=!0;Mb.prototype.h=function(){return this.j.toString()};
function Ob(a){if(a instanceof Mb&&a.constructor===Mb)return a.j;Pa(a);return"type_error:SafeUrl"}
var Pb;try{new URL("s://g"),Pb=!0}catch(a){Pb=!1}var Sb=Pb,Nb={},Tb=new Mb("about:invalid#zClosurez",Nb);function Ub(){var a=y.navigator;return a&&(a=a.userAgent)?a:""}
function C(a){return-1!=Ub().indexOf(a)}
;function Vb(){return C("Trident")||C("MSIE")}
function Wb(){return C("Firefox")||C("FxiOS")}
function Xb(){return C("Safari")&&!(Yb()||C("Coast")||C("Opera")||C("Edge")||C("Edg/")||C("OPR")||Wb()||C("Silk")||C("Android"))}
function Yb(){return(C("Chrome")||C("CriOS"))&&!C("Edge")||C("Silk")}
function Zb(){return C("Android")&&!(Yb()||Wb()||C("Opera")||C("Silk"))}
function $b(a){var b={};a.forEach(function(c){b[c[0]]=c[1]});
return function(c){return b[c.find(function(d){return d in b})]||""}}
function ac(a){var b=Ub();if("Internet Explorer"===a){if(Vb())if((a=/rv: *([\d\.]*)/.exec(b))&&a[1])b=a[1];else{a="";var c=/MSIE +([\d\.]+)/.exec(b);if(c&&c[1])if(b=/Trident\/(\d.\d)/.exec(b),"7.0"==c[1])if(b&&b[1])switch(b[1]){case "4.0":a="8.0";break;case "5.0":a="9.0";break;case "6.0":a="10.0";break;case "7.0":a="11.0"}else a="7.0";else a=c[1];b=a}else b="";return b}var d=RegExp("([A-Z][\\w ]+)/([^\\s]+)\\s*(?:\\((.*?)\\))?","g");c=[];for(var e;e=d.exec(b);)c.push([e[1],e[2],e[3]||void 0]);b=$b(c);
switch(a){case "Opera":if(C("Opera"))return b(["Version","Opera"]);if(C("OPR"))return b(["OPR"]);break;case "Microsoft Edge":if(C("Edge"))return b(["Edge"]);if(C("Edg/"))return b(["Edg"]);break;case "Chromium":if(Yb())return b(["Chrome","CriOS","HeadlessChrome"])}return"Firefox"===a&&Wb()||"Safari"===a&&Xb()||"Android Browser"===a&&Zb()||"Silk"===a&&C("Silk")?(b=c[2])&&b[1]||"":""}
function bc(a){a=ac(a);if(""===a)return NaN;a=a.split(".");return 0===a.length?NaN:Number(a[0])}
;var cc={};function dc(a){this.j=cc===cc?a:"";this.i=!0}
dc.prototype.h=function(){return this.j.toString()};
dc.prototype.toString=function(){return this.j.toString()};function ec(a,b){if(!(b instanceof Mb||b instanceof Mb)){b="object"==typeof b&&b.i?b.h():String(b);b:{var c=b;if(Sb){try{var d=new URL(c)}catch(e){c="https:";break b}c=d.protocol}else c:{d=document.createElement("a");try{d.href=c}catch(e){c=void 0;break c}c=d.protocol;c=":"===c||""===c?"https:":c}}"javascript:"!==c||(b="about:invalid#zClosurez");b=new Mb(b,Nb)}a.href=Ob(b)}
function fc(a,b){a.rel="stylesheet";a.href=Ib(b).toString();(b=gc('style[nonce],link[rel="stylesheet"][nonce]',a.ownerDocument&&a.ownerDocument.defaultView))&&a.setAttribute("nonce",b)}
function hc(){return gc("script[nonce]")}
var ic=/^[\w+/_-]+[=]{0,2}$/;function gc(a,b){b=(b||y).document;return b.querySelector?(a=b.querySelector(a))&&(a=a.nonce||a.getAttribute("nonce"))&&ic.test(a)?a:"":""}
;function jc(a){for(var b=0,c=0;c<a.length;++c)b=31*b+a.charCodeAt(c)>>>0;return b}
;var kc=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function lc(a){return a?decodeURI(a):a}
function mc(a,b){return b.match(kc)[a]||null}
function pc(a){return lc(mc(3,a))}
function qc(a){var b=a.match(kc);a=b[5];var c=b[6];b=b[7];var d="";a&&(d+=a);c&&(d+="?"+c);b&&(d+="#"+b);return d}
function rc(a,b){if(!b)return a;var c=a.indexOf("#");0>c&&(c=a.length);var d=a.indexOf("?");if(0>d||d>c){d=c;var e=""}else e=a.substring(d+1,c);a=[a.slice(0,d),e,a.slice(c)];c=a[1];a[1]=b?c?c+"&"+b:b:c;return a[0]+(a[1]?"?"+a[1]:"")+a[2]}
function sc(a,b,c){if(Array.isArray(b))for(var d=0;d<b.length;d++)sc(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+encodeURIComponent(String(b))))}
function tc(a,b){var c=[];for(b=b||0;b<a.length;b+=2)sc(a[b],a[b+1],c);return c.join("&")}
function uc(a){var b=[],c;for(c in a)sc(c,a[c],b);return b.join("&")}
function vc(a,b){var c=2==arguments.length?tc(arguments[1],0):tc(arguments,1);return rc(a,c)}
function wc(a,b){b=uc(b);return rc(a,b)}
function xc(a,b,c){c=null!=c?"="+encodeURIComponent(String(c)):"";return rc(a,b+c)}
function yc(a,b,c,d){for(var e=c.length;0<=(b=a.indexOf(c,b))&&b<d;){var f=a.charCodeAt(b-1);if(38==f||63==f)if(f=a.charCodeAt(b+e),!f||61==f||38==f||35==f)return b;b+=e+1}return-1}
var zc=/#|$/,Ac=/[?&]($|#)/;function Bc(a,b){for(var c=a.search(zc),d=0,e,f=[];0<=(e=yc(a,d,b,c));)f.push(a.substring(d,e)),d=Math.min(a.indexOf("&",e)+1||c,c);f.push(a.slice(d));return f.join("").replace(Ac,"$1")}
;function Cc(a){y.setTimeout(function(){throw a;},0)}
;function Dc(){return C("iPhone")&&!C("iPod")&&!C("iPad")}
function Ec(){var a=Ub(),b="";C("Windows")?(b=/Windows (?:NT|Phone) ([0-9.]+)/,b=(a=b.exec(a))?a[1]:"0.0"):Dc()||C("iPad")||C("iPod")?(b=/(?:iPhone|iPod|iPad|CPU)\s+OS\s+(\S+)/,b=(a=b.exec(a))&&a[1].replace(/_/g,".")):C("Macintosh")?(b=/Mac OS X ([0-9_.]+)/,b=(a=b.exec(a))?a[1].replace(/_/g,"."):"10"):-1!=Ub().toLowerCase().indexOf("kaios")?(b=/(?:KaiOS)\/(\S+)/i,b=(a=b.exec(a))&&a[1]):C("Android")?(b=/Android\s+([^\);]+)(\)|;)/,b=(a=b.exec(a))&&a[1]):C("CrOS")&&(b=/(?:CrOS\s+(?:i686|x86_64)\s+([0-9.]+))/,
b=(a=b.exec(a))&&a[1]);a=0;b=Kb(String(b||"")).split(".");for(var c=Kb("12").split("."),d=Math.max(b.length,c.length),e=0;0==a&&e<d;e++){var f=b[e]||"",g=c[e]||"";do{f=/(\d*)(\D*)(.*)/.exec(f)||["","","",""];g=/(\d*)(\D*)(.*)/.exec(g)||["","","",""];if(0==f[0].length&&0==g[0].length)break;a=Lb(0==f[1].length?0:parseInt(f[1],10),0==g[1].length?0:parseInt(g[1],10))||Lb(0==f[2].length,0==g[2].length)||Lb(f[2],g[2]);f=f[3];g=g[3]}while(0==a)}}
;function Fc(a){Fc[" "](a);return a}
Fc[" "]=function(){};var Gc=C("Opera"),Hc=Vb(),Ic=C("Edge"),Jc=C("Gecko")&&!(-1!=Ub().toLowerCase().indexOf("webkit")&&!C("Edge"))&&!(C("Trident")||C("MSIE"))&&!C("Edge"),Kc=-1!=Ub().toLowerCase().indexOf("webkit")&&!C("Edge"),Lc=C("Android");function Mc(){var a=y.document;return a?a.documentMode:void 0}
var Nc;a:{var Oc="",Pc=function(){var a=Ub();if(Jc)return/rv:([^\);]+)(\)|;)/.exec(a);if(Ic)return/Edge\/([\d\.]+)/.exec(a);if(Hc)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(Kc)return/WebKit\/(\S+)/.exec(a);if(Gc)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
Pc&&(Oc=Pc?Pc[1]:"");if(Hc){var Tc=Mc();if(null!=Tc&&Tc>parseFloat(Oc)){Nc=String(Tc);break a}}Nc=Oc}var Uc=Nc,Vc;if(y.document&&Hc){var Wc=Mc();Vc=Wc?Wc:parseInt(Uc,10)||void 0}else Vc=void 0;var Xc=Vc;var Yc=Dc()||C("iPod"),Zc=C("iPad");Zb();Yb();var $c=Xb()&&!(Dc()||C("iPad")||C("iPod"));var ad={},bd=null;function cd(a,b){Qa(a);void 0===b&&(b=0);dd();b=ad[b];for(var c=Array(Math.floor(a.length/3)),d=b[64]||"",e=0,f=0;e<a.length-2;e+=3){var g=a[e],h=a[e+1],k=a[e+2],m=b[g>>2];g=b[(g&3)<<4|h>>4];h=b[(h&15)<<2|k>>6];k=b[k&63];c[f++]=""+m+g+h+k}m=0;k=d;switch(a.length-e){case 2:m=a[e+1],k=b[(m&15)<<2]||d;case 1:a=a[e],c[f]=""+b[a>>2]+b[(a&3)<<4|m>>4]+k+d}return c.join("")}
function ed(a){var b=a.length,c=3*b/4;c%3?c=Math.floor(c):-1!="=.".indexOf(a[b-1])&&(c=-1!="=.".indexOf(a[b-2])?c-2:c-1);var d=new Uint8Array(c),e=0;fd(a,function(f){d[e++]=f});
return e!==c?d.subarray(0,e):d}
function fd(a,b){function c(k){for(;d<a.length;){var m=a.charAt(d++),p=bd[m];if(null!=p)return p;if(!/^[\s\xa0]*$/.test(m))throw Error("Unknown base64 encoding at char: "+m);}return k}
dd();for(var d=0;;){var e=c(-1),f=c(0),g=c(64),h=c(64);if(64===h&&-1===e)break;b(e<<2|f>>4);64!=g&&(b(f<<4&240|g>>2),64!=h&&b(g<<6&192|h))}}
function dd(){if(!bd){bd={};for(var a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),b=["+/=","+/","-_=","-_.","-_"],c=0;5>c;c++){var d=a.concat(b[c].split(""));ad[c]=d;for(var e=0;e<d.length;e++){var f=d[e];void 0===bd[f]&&(bd[f]=e)}}}}
;var gd="undefined"!==typeof Uint8Array;function hd(a){return gd&&null!=a&&a instanceof Uint8Array}
var id={};var jd;function kd(a){if(a!==id)throw Error("illegal external caller");}
function ld(a,b){kd(b);this.za=a;if(null!=a&&0===a.length)throw Error("ByteString should be constructed with non-empty values");}
function md(){return jd||(jd=new ld(null,id))}
ld.prototype.Jb=function(){return null==this.za};
ld.prototype.sizeBytes=function(){kd(id);var a=this.za;null==a||hd(a)||("string"===typeof a?a=ed(a):(Pa(a),a=null));return(a=null==a?a:this.za=a)?a.length:0};var nd="function"===typeof Symbol&&"symbol"===typeof Symbol()?Symbol():void 0;function od(a,b){if(nd)return a[nd]|=b;if(void 0!==a.Ea)return a.Ea|=b;Object.defineProperties(a,{Ea:{value:b,configurable:!0,writable:!0,enumerable:!1}});return b}
function pd(a,b){var c=qd(a);(c&b)!==b&&(Object.isFrozen(a)&&(a=Array.prototype.slice.call(a)),rd(a,c|b));return a}
function sd(a,b){nd?a[nd]&&(a[nd]&=~b):void 0!==a.Ea&&(a.Ea&=~b)}
function qd(a){var b;nd?b=a[nd]:b=a.Ea;return null==b?0:b}
function rd(a,b){nd?a[nd]=b:void 0!==a.Ea?a.Ea=b:Object.defineProperties(a,{Ea:{value:b,configurable:!0,writable:!0,enumerable:!1}})}
function td(a){od(a,1);return a}
function ud(a){return!!(qd(a)&2)}
function vd(a,b){rd(b,(a|0)&-51)}
function wd(a,b){rd(b,(a|18)&-41)}
;var xd={};function yd(a){return null!==a&&"object"===typeof a&&!Array.isArray(a)&&a.constructor===Object}
var zd,Ad,Bd=[];rd(Bd,23);Ad=Object.freeze(Bd);function Cd(a){if(ud(a.M))throw Error("Cannot mutate an immutable Message");}
function Dd(a){var b=a.length;(b=b?a[b-1]:void 0)&&yd(b)?b.g=1:(b={},a.push((b.g=1,b)))}
;function Ed(a){if(null!=a&&"number"!==typeof a)throw Error("Value of float/double field must be a number|null|undefined, found "+typeof a+": "+a);return a}
function Fd(a){return a.displayName||a.name||"unknown type name"}
function Gd(a,b){if(!(a instanceof b))throw Error("Expected instanceof "+Fd(b)+" but got "+(a&&Fd(a.constructor)));return a}
;function Hd(a){var b=a.j+a.fb;return a.wa||(a.wa=a.M[b]={})}
function Id(a,b,c){return-1===b?null:b>=a.j?a.wa?a.wa[b]:void 0:c&&a.wa&&(c=a.wa[b],null!=c)?c:a.M[b+a.fb]}
function E(a,b,c,d){Cd(a);return Jd(a,b,c,d)}
function Jd(a,b,c,d){a.m&&(a.m=void 0);if(b>=a.j||d)return Hd(a)[b]=c,a;a.M[b+a.fb]=c;(c=a.wa)&&b in c&&delete c[b];return a}
function Kd(a,b){a&&ud(b.M)&&ud(a.M);return a}
function Ld(a,b,c,d,e){var f=Id(a,b,d);Array.isArray(f)||(f=Ad);var g=qd(f);g&1||td(f);if(e)g&2||od(f,2),c&1||Object.freeze(f);else{e=!(c&2);var h=g&2;c&1||!h?e&&g&16&&!h&&sd(f,16):(f=td(Array.prototype.slice.call(f)),Jd(a,b,f,d))}return f}
function Qd(a,b,c,d){Cd(a);(c=Rd(a,c))&&c!==b&&null!=d&&Jd(a,c,void 0,!1);return Jd(a,b,d)}
function Rd(a,b){for(var c=0,d=0;d<b.length;d++){var e=b[d];null!=Id(a,e)&&(0!==c&&Jd(a,c,void 0,!1),c=e)}return c}
function Sd(a,b,c,d){var e=d=void 0===d?!1:d,f=Id(a,c,e);var g=!1;var h=null==f||"object"!==typeof f||(g=Array.isArray(f))||f.Jc!==xd?g?new b(f):void 0:f;h!==f&&null!=h&&(Jd(a,c,h,e),od(h.M,qd(a.M)&18));b=Kd(h,a);if(null==b)return b;ud(a.M)||(e=Td(b),e!==b&&(b=e,Jd(a,c,b,d)));return Kd(b,a)}
function Ud(a,b,c,d,e,f){a.i||(a.i={});var g=a.i[c],h=Ld(a,c,3,d,f);if(!g){var k=h;g=[];var m=!!(qd(a.M)&16);h=ud(k);var p=k;!f&&h&&(k=Array.prototype.slice.call(k));for(var n=h,v=0;v<k.length;v++){var t=k[v];var z=b,D=!1;D=void 0===D?!1:D;t=Array.isArray(t)?new z(t):D?new z:void 0;if(void 0!==t){z=t.M;var F=D=qd(z);h&&(F|=2);m&&(F|=16);F!=D&&rd(z,F);z=F;n=n||!!(2&z);g.push(t)}}a.i[c]=g;b=k;k=!n;m=qd(b);n=m|33;n=k?n|8:n&-9;m!=n&&(Object.isFrozen(b)&&(b=Array.prototype.slice.call(b)),rd(b,n));k=b;
p!==k&&Jd(a,c,k,d);(f||e&&h)&&od(g,2);e&&Object.freeze(g);return g}f||(d=Object.isFrozen(g),e&&!d?Object.freeze(g):!e&&d&&(g=Array.prototype.slice.call(g),a.i[c]=g));return g}
function Vd(a,b,c,d){var e=ud(a.M);b=Ud(a,b,c,d,e,e);a=Ld(a,c,3,d,e);if(!(e||qd(a)&8)){for(e=0;e<b.length;e++)c=b[e],d=Td(c),c!==d&&(b[e]=d,a[e]=d.M);od(a,8)}return b}
function G(a,b,c,d){Cd(a);null!=d?Gd(d,b):d=void 0;return Jd(a,c,d)}
function Wd(a,b,c,d,e){Cd(a);null!=e?Gd(e,b):e=void 0;Qd(a,c,d,e)}
function Xd(a,b,c,d,e){Cd(a);var f=null==d?Ad:td([]);if(null!=d){for(var g=!!d.length,h=0;h<d.length;h++){var k=d[h];Gd(k,b);g=g&&!ud(k.M);f[h]=k.M}f=pd(f,(g?8:0)|1);a.i||(a.i={});a.i[c]=d}else a.i&&(a.i[c]=void 0);return Jd(a,c,f,e)}
function Yd(a,b,c,d){Cd(a);var e=Ud(a,c,b,void 0,!1,!1);c=null!=d?Gd(d,c):new c;a=Ld(a,b,2,void 0,!1);e.push(c);a.push(c.M);ud(c.M)&&sd(a,8)}
function Zd(a,b){return null==a?b:a}
function $d(a,b){return Zd(Id(a,b),"")}
;var ae;function be(a){switch(typeof a){case "number":return isFinite(a)?a:String(a);case "object":if(a)if(Array.isArray(a)){if(0!==(qd(a)&128))return a=Array.prototype.slice.call(a),Dd(a),a}else{if(hd(a))return cd(a);if(a instanceof ld){var b=a.za;return null==b?"":"string"===typeof b?b:a.za=cd(b)}}}return a}
;function ce(a,b,c,d){if(null!=a){if(Array.isArray(a))a=de(a,b,c,void 0!==d);else if(yd(a)){var e={},f;for(f in a)e[f]=ce(a[f],b,c,d);a=e}else a=b(a,d);return a}}
function de(a,b,c,d){var e=qd(a);d=d?!!(e&16):void 0;a=Array.prototype.slice.call(a);for(var f=0;f<a.length;f++)a[f]=ce(a[f],b,c,d);c(e,a);return a}
function ee(a){return a.Jc===xd?a.toJSON():be(a)}
function fe(a,b){a&128&&Dd(b)}
;function ge(a,b,c){c=void 0===c?wd:c;if(null!=a){if(gd&&a instanceof Uint8Array)return a.length?new ld(new Uint8Array(a),id):md();if(Array.isArray(a)){var d=qd(a);if(d&2)return a;if(b&&!(d&32)&&(d&16||0===d))return rd(a,d|2),a;a=de(a,ge,d&4?wd:c,!0);b=qd(a);b&4&&b&2&&Object.freeze(a);return a}return a.Jc===xd?he(a):a}}
function ie(a,b,c,d,e,f,g){(a=a.i&&a.i[c])?(d=0<a.length?a[0].constructor:void 0,f=qd(a),f&2||(a=ib(a,he),wd(f,a),Object.freeze(a)),Xd(b,d,c,a,e)):E(b,c,ge(d,f,g),e)}
function he(a){if(ud(a.M))return a;a=je(a,!0);od(a.M,2);return a}
function je(a,b){var c=a.M,d=[];od(d,16);var e=a.constructor.h;e&&d.push(e);e=a.wa;if(e){d.length=c.length;d.fill(void 0,d.length,c.length);var f={};d[d.length-1]=f}0!==(qd(c)&128)&&Dd(d);b=b||ud(a.M)?wd:vd;f=a.constructor;qd(d);ae=d;d=new f(d);ae=void 0;a.vd&&(d.vd=a.vd.slice());f=!!(qd(c)&16);for(var g=e?c.length-1:c.length,h=0;h<g;h++)ie(a,d,h-a.fb,c[h],!1,f,b);if(e)for(var k in e)c=e[k],g=+k,Number.isNaN(g),ie(a,d,g,c,!0,f,b);return d}
function Td(a){if(!ud(a.M))return a;var b=je(a,!1);b.m=a;return b}
;function H(a,b,c){null==a&&(a=ae);ae=void 0;var d=this.constructor.i||0,e=0<d,f=this.constructor.h,g=!1;if(null==a){a=f?[f]:[];var h=48;var k=!0;e&&(d=0,h|=128);rd(a,h)}else{if(!Array.isArray(a))throw Error();if(f&&f!==a[0])throw Error();var m=h=od(a,0);if(k=0!==(16&m))(g=0!==(32&m))||(m|=32);if(e)if(128&m)d=0;else{if(0<a.length){var p=a[a.length-1];if(yd(p)&&"g"in p){d=0;m|=128;delete p.g;var n=!0,v;for(v in p){n=!1;break}n&&a.pop()}}}else if(128&m)throw Error();h!==m&&rd(a,m)}this.fb=(f?0:-1)-d;
this.i=void 0;this.M=a;a:{f=this.M.length;d=f-1;if(f&&(f=this.M[d],yd(f))){this.wa=f;this.j=d-this.fb;break a}void 0!==b&&-1<b?(this.j=Math.max(b,d+1-this.fb),this.wa=void 0):this.j=Number.MAX_VALUE}if(!e&&this.wa&&"g"in this.wa)throw Error('Unexpected "g" flag in sparse object of message that is not a group type.');if(c){b=k&&!g&&!0;e=this.j;var t;for(k=0;k<c.length;k++)g=c[k],g<e?(g+=this.fb,(d=a[g])?ke(d,b):a[g]=Ad):(t||(t=Hd(this)),(d=t[g])?ke(d,b):t[g]=Ad)}}
H.prototype.toJSON=function(){var a=this.M,b;zd?b=a:b=de(a,ee,fe);return b};
function le(a){zd=!0;try{return JSON.stringify(a.toJSON(),me)}finally{zd=!1}}
H.prototype.clone=function(){return je(this,!1)};
function ke(a,b){if(Array.isArray(a)){var c=qd(a),d=1;!b||c&2||(d|=16);(c&d)!==d&&rd(a,c|d)}}
H.prototype.Jc=xd;H.prototype.toString=function(){return this.M.toString()};
function me(a,b){return be(b)}
;function ne(a){var b=this.h,c=this.i;return this.isRepeated?Vd(a,b,c,!0):Sd(a,b,c,!0)}
;function oe(a){this.fd=a}
;function pe(a,b,c){this.i=a;this.l=b;this.h=c||[];this.pb=new Map}
l=pe.prototype;l.Zd=function(a){var b=Ka.apply(1,arguments),c=this.yc(b);c?c.push(new oe(a)):this.Jd(a,b)};
l.Jd=function(a){this.pb.set(this.od(Ka.apply(1,arguments)),[new oe(a)])};
l.yc=function(){var a=this.od(Ka.apply(0,arguments));return this.pb.has(a)?this.pb.get(a):void 0};
l.qe=function(){var a=this.yc(Ka.apply(0,arguments));return a&&a.length?a[0]:void 0};
l.clear=function(){this.pb.clear()};
l.od=function(){var a=Ka.apply(0,arguments);return a?a.join(","):"key"};function qe(a,b){pe.call(this,a,3,b)}
u(qe,pe);qe.prototype.j=function(a){var b=Ka.apply(1,arguments),c=0,d=this.qe(b);d&&(c=d.fd);this.Jd(c+a,b)};function re(a,b){pe.call(this,a,2,b)}
u(re,pe);re.prototype.j=function(a){this.Zd(a,Ka.apply(1,arguments))};function se(a){a&&"function"==typeof a.dispose&&a.dispose()}
;function te(a){for(var b=0,c=arguments.length;b<c;++b){var d=arguments[b];Qa(d)?te.apply(null,d):se(d)}}
;function J(){this.Z=this.Z;this.H=this.H}
J.prototype.Z=!1;J.prototype.h=function(){return this.Z};
J.prototype.dispose=function(){this.Z||(this.Z=!0,this.L())};
function ue(a,b){ve(a,Ya(se,b))}
function ve(a,b){a.Z?b():(a.H||(a.H=[]),a.H.push(b))}
J.prototype.L=function(){if(this.H)for(;this.H.length;)this.H.shift()()};function we(a,b){this.type=a;this.h=this.target=b;this.defaultPrevented=this.j=!1}
we.prototype.stopPropagation=function(){this.j=!0};
we.prototype.preventDefault=function(){this.defaultPrevented=!0};function xe(a){var b=B("window.location.href");null==a&&(a='Unknown Error of type "null/undefined"');if("string"===typeof a)return{message:a,name:"Unknown error",lineNumber:"Not available",fileName:b,stack:"Not available"};var c=!1;try{var d=a.lineNumber||a.line||"Not available"}catch(g){d="Not available",c=!0}try{var e=a.fileName||a.filename||a.sourceURL||y.$googDebugFname||b}catch(g){e="Not available",c=!0}b=ye(a);if(!(!c&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name)){c=a.message;if(null==
c){if(a.constructor&&a.constructor instanceof Function){if(a.constructor.name)c=a.constructor.name;else if(c=a.constructor,ze[c])c=ze[c];else{c=String(c);if(!ze[c]){var f=/function\s+([^\(]+)/m.exec(c);ze[c]=f?f[1]:"[Anonymous]"}c=ze[c]}c='Unknown Error of type "'+c+'"'}else c="Unknown Error of unknown type";"function"===typeof a.toString&&Object.prototype.toString!==a.toString&&(c+=": "+a.toString())}return{message:c,name:a.name||"UnknownError",lineNumber:d,fileName:e,stack:b||"Not available"}}a.stack=
b;return{message:a.message,name:a.name,lineNumber:a.lineNumber,fileName:a.fileName,stack:a.stack}}
function ye(a,b){b||(b={});b[Ae(a)]=!0;var c=a.stack||"";(a=a.cause)&&!b[Ae(a)]&&(c+="\nCaused by: ",a.stack&&0==a.stack.indexOf(a.toString())||(c+="string"===typeof a?a:a.message+"\n"),c+=ye(a,b));return c}
function Ae(a){var b="";"function"===typeof a.toString&&(b=""+a);return b+a.stack}
var ze={};var Be=function(){if(!y.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0}});
try{y.addEventListener("test",function(){},b),y.removeEventListener("test",function(){},b)}catch(c){}return a}();function Ce(a,b){we.call(this,a?a.type:"");this.relatedTarget=this.h=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=0;this.key="";this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.state=null;this.pointerId=0;this.pointerType="";this.i=null;a&&this.init(a,b)}
Za(Ce,we);var De={2:"touch",3:"pen",4:"mouse"};
Ce.prototype.init=function(a,b){var c=this.type=a.type,d=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.h=b;if(b=a.relatedTarget){if(Jc){a:{try{Fc(b.nodeName);var e=!0;break a}catch(f){}e=!1}e||(b=null)}}else"mouseover"==c?b=a.fromElement:"mouseout"==c&&(b=a.toElement);this.relatedTarget=b;d?(this.clientX=void 0!==d.clientX?d.clientX:d.pageX,this.clientY=void 0!==d.clientY?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||
0):(this.clientX=void 0!==a.clientX?a.clientX:a.pageX,this.clientY=void 0!==a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0);this.button=a.button;this.keyCode=a.keyCode||0;this.key=a.key||"";this.charCode=a.charCode||("keypress"==c?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.pointerId=a.pointerId||0;this.pointerType="string"===typeof a.pointerType?a.pointerType:De[a.pointerType]||"";this.state=a.state;
this.i=a;a.defaultPrevented&&Ce.ta.preventDefault.call(this)};
Ce.prototype.stopPropagation=function(){Ce.ta.stopPropagation.call(this);this.i.stopPropagation?this.i.stopPropagation():this.i.cancelBubble=!0};
Ce.prototype.preventDefault=function(){Ce.ta.preventDefault.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var Ee="closure_listenable_"+(1E6*Math.random()|0);var Fe=0;function Ge(a,b,c,d,e){this.listener=a;this.proxy=null;this.src=b;this.type=c;this.capture=!!d;this.hc=e;this.key=++Fe;this.Nb=this.ac=!1}
function He(a){a.Nb=!0;a.listener=null;a.proxy=null;a.src=null;a.hc=null}
;function Ie(a){this.src=a;this.listeners={};this.h=0}
Ie.prototype.add=function(a,b,c,d,e){var f=a.toString();a=this.listeners[f];a||(a=this.listeners[f]=[],this.h++);var g=Je(a,b,d,e);-1<g?(b=a[g],c||(b.ac=!1)):(b=new Ge(b,this.src,f,!!d,e),b.ac=c,a.push(b));return b};
Ie.prototype.remove=function(a,b,c,d){a=a.toString();if(!(a in this.listeners))return!1;var e=this.listeners[a];b=Je(e,b,c,d);return-1<b?(He(e[b]),Array.prototype.splice.call(e,b,1),0==e.length&&(delete this.listeners[a],this.h--),!0):!1};
function Ke(a,b){var c=b.type;c in a.listeners&&lb(a.listeners[c],b)&&(He(b),0==a.listeners[c].length&&(delete a.listeners[c],a.h--))}
function Je(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.Nb&&f.listener==b&&f.capture==!!c&&f.hc==d)return e}return-1}
;var Le="closure_lm_"+(1E6*Math.random()|0),Me={},Ne=0;function Oe(a,b,c,d,e){if(d&&d.once)Pe(a,b,c,d,e);else if(Array.isArray(b))for(var f=0;f<b.length;f++)Oe(a,b[f],c,d,e);else c=Qe(c),a&&a[Ee]?a.Ma(b,c,Ra(d)?!!d.capture:!!d,e):Re(a,b,c,!1,d,e)}
function Re(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var g=Ra(e)?!!e.capture:!!e,h=Se(a);h||(a[Le]=h=new Ie(a));c=h.add(b,c,d,g,f);if(!c.proxy){d=Te();c.proxy=d;d.src=a;d.listener=c;if(a.addEventListener)Be||(e=g),void 0===e&&(e=!1),a.addEventListener(b.toString(),d,e);else if(a.attachEvent)a.attachEvent(Ue(b.toString()),d);else if(a.addListener&&a.removeListener)a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");Ne++}}
function Te(){function a(c){return b.call(a.src,a.listener,c)}
var b=Ve;return a}
function Pe(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)Pe(a,b[f],c,d,e);else c=Qe(c),a&&a[Ee]?a.l.add(String(b),c,!0,Ra(d)?!!d.capture:!!d,e):Re(a,b,c,!0,d,e)}
function We(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)We(a,b[f],c,d,e);else(d=Ra(d)?!!d.capture:!!d,c=Qe(c),a&&a[Ee])?a.l.remove(String(b),c,d,e):a&&(a=Se(a))&&(b=a.listeners[b.toString()],a=-1,b&&(a=Je(b,c,d,e)),(c=-1<a?b[a]:null)&&Xe(c))}
function Xe(a){if("number"!==typeof a&&a&&!a.Nb){var b=a.src;if(b&&b[Ee])Ke(b.l,a);else{var c=a.type,d=a.proxy;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent?b.detachEvent(Ue(c),d):b.addListener&&b.removeListener&&b.removeListener(d);Ne--;(c=Se(b))?(Ke(c,a),0==c.h&&(c.src=null,b[Le]=null)):He(a)}}}
function Ue(a){return a in Me?Me[a]:Me[a]="on"+a}
function Ve(a,b){if(a.Nb)a=!0;else{b=new Ce(b,this);var c=a.listener,d=a.hc||a.src;a.ac&&Xe(a);a=c.call(d,b)}return a}
function Se(a){a=a[Le];return a instanceof Ie?a:null}
var Ye="__closure_events_fn_"+(1E9*Math.random()>>>0);function Qe(a){if("function"===typeof a)return a;a[Ye]||(a[Ye]=function(b){return a.handleEvent(b)});
return a[Ye]}
;function Ze(){J.call(this);this.l=new Ie(this);this.Wd=this;this.Qa=null}
Za(Ze,J);Ze.prototype[Ee]=!0;Ze.prototype.addEventListener=function(a,b,c,d){Oe(this,a,b,c,d)};
Ze.prototype.removeEventListener=function(a,b,c,d){We(this,a,b,c,d)};
function $e(a,b){var c=a.Qa;if(c){var d=[];for(var e=1;c;c=c.Qa)d.push(c),++e}a=a.Wd;c=b.type||b;"string"===typeof b?b=new we(b,a):b instanceof we?b.target=b.target||a:(e=b,b=new we(c,a),yb(b,e));e=!0;if(d)for(var f=d.length-1;!b.j&&0<=f;f--){var g=b.h=d[f];e=af(g,c,!0,b)&&e}b.j||(g=b.h=a,e=af(g,c,!0,b)&&e,b.j||(e=af(g,c,!1,b)&&e));if(d)for(f=0;!b.j&&f<d.length;f++)g=b.h=d[f],e=af(g,c,!1,b)&&e}
Ze.prototype.L=function(){Ze.ta.L.call(this);if(this.l){var a=this.l,b=0,c;for(c in a.listeners){for(var d=a.listeners[c],e=0;e<d.length;e++)++b,He(d[e]);delete a.listeners[c];a.h--}}this.Qa=null};
Ze.prototype.Ma=function(a,b,c,d){return this.l.add(String(a),b,!1,c,d)};
function af(a,b,c,d){b=a.l.listeners[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var g=b[f];if(g&&!g.Nb&&g.capture==c){var h=g.listener,k=g.hc||g.src;g.ac&&Ke(a.l,g);e=!1!==h.call(k,d)&&e}}return e&&!d.defaultPrevented}
;function bf(a,b){this.j=a;this.l=b;this.i=0;this.h=null}
bf.prototype.get=function(){if(0<this.i){this.i--;var a=this.h;this.h=a.next;a.next=null}else a=this.j();return a};
function cf(a,b){a.l(b);100>a.i&&(a.i++,b.next=a.h,a.h=b)}
;function jf(a,b){return a+Math.random()*(b-a)}
;function kf(a,b){this.x=void 0!==a?a:0;this.y=void 0!==b?b:0}
l=kf.prototype;l.clone=function(){return new kf(this.x,this.y)};
l.equals=function(a){return a instanceof kf&&(this==a?!0:this&&a?this.x==a.x&&this.y==a.y:!1)};
l.ceil=function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this};
l.floor=function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this};
l.round=function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this};
l.scale=function(a,b){this.x*=a;this.y*="number"===typeof b?b:a;return this};function lf(a,b){this.width=a;this.height=b}
l=lf.prototype;l.clone=function(){return new lf(this.width,this.height)};
l.aspectRatio=function(){return this.width/this.height};
l.Jb=function(){return!(this.width*this.height)};
l.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
l.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
l.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};
l.scale=function(a,b){this.width*=a;this.height*="number"===typeof b?b:a;return this};function mf(a){var b=document;return"string"===typeof a?b.getElementById(a):a}
function nf(a){var b=document;a=String(a);"application/xhtml+xml"===b.contentType&&(a=a.toLowerCase());return b.createElement(a)}
function of(a,b){for(var c=0;a;){if(b(a))return a;a=a.parentNode;c++}return null}
;var pf;function qf(){var a=y.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!C("Presto")&&(a=function(){var e=nf("IFRAME");e.style.display="none";document.documentElement.appendChild(e);var f=e.contentWindow;e=f.document;e.open();e.close();var g="callImmediate"+Math.random(),h="file:"==f.location.protocol?"*":f.location.protocol+"//"+f.location.host;e=Xa(function(k){if(("*"==h||k.origin==h)&&k.data==g)this.port1.onmessage()},this);
f.addEventListener("message",e,!1);this.port1={};this.port2={postMessage:function(){f.postMessage(g,h)}}});
if("undefined"!==typeof a&&!Vb()){var b=new a,c={},d=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var e=c.ed;c.ed=null;e()}};
return function(e){d.next={ed:e};d=d.next;b.port2.postMessage(0)}}return function(e){y.setTimeout(e,0)}}
;function rf(){this.i=this.h=null}
rf.prototype.add=function(a,b){var c=sf.get();c.set(a,b);this.i?this.i.next=c:this.h=c;this.i=c};
rf.prototype.remove=function(){var a=null;this.h&&(a=this.h,this.h=this.h.next,this.h||(this.i=null),a.next=null);return a};
var sf=new bf(function(){return new tf},function(a){return a.reset()});
function tf(){this.next=this.scope=this.h=null}
tf.prototype.set=function(a,b){this.h=a;this.scope=b;this.next=null};
tf.prototype.reset=function(){this.next=this.scope=this.h=null};var uf,vf=!1,wf=new rf;function xf(a,b){uf||yf();vf||(uf(),vf=!0);wf.add(a,b)}
function yf(){if(y.Promise&&y.Promise.resolve){var a=y.Promise.resolve(void 0);uf=function(){a.then(zf)}}else uf=function(){var b=zf;
"function"!==typeof y.setImmediate||y.Window&&y.Window.prototype&&!C("Edge")&&y.Window.prototype.setImmediate==y.setImmediate?(pf||(pf=qf()),pf(b)):y.setImmediate(b)}}
function zf(){for(var a;a=wf.remove();){try{a.h.call(a.scope)}catch(b){Cc(b)}cf(sf,a)}vf=!1}
;function Af(a){this.h=0;this.H=void 0;this.l=this.i=this.j=null;this.m=this.s=!1;if(a!=db)try{var b=this;a.call(void 0,function(c){Bf(b,2,c)},function(c){Bf(b,3,c)})}catch(c){Bf(this,3,c)}}
function Cf(){this.next=this.context=this.i=this.j=this.h=null;this.l=!1}
Cf.prototype.reset=function(){this.context=this.i=this.j=this.h=null;this.l=!1};
var Df=new bf(function(){return new Cf},function(a){a.reset()});
function Ef(a,b,c){var d=Df.get();d.j=a;d.i=b;d.context=c;return d}
function Ff(a){return new Af(function(b,c){c(a)})}
Af.prototype.then=function(a,b,c){return Gf(this,"function"===typeof a?a:null,"function"===typeof b?b:null,c)};
Af.prototype.$goog_Thenable=!0;l=Af.prototype;l.sc=function(a,b){return Gf(this,null,a,b)};
l.catch=Af.prototype.sc;l.cancel=function(a){if(0==this.h){var b=new Hf(a);xf(function(){If(this,b)},this)}};
function If(a,b){if(0==a.h)if(a.j){var c=a.j;if(c.i){for(var d=0,e=null,f=null,g=c.i;g&&(g.l||(d++,g.h==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(0==c.h&&1==d?If(c,b):(f?(d=f,d.next==c.l&&(c.l=d),d.next=d.next.next):Jf(c),Kf(c,e,3,b)))}a.j=null}else Bf(a,3,b)}
function Lf(a,b){a.i||2!=a.h&&3!=a.h||Mf(a);a.l?a.l.next=b:a.i=b;a.l=b}
function Gf(a,b,c,d){var e=Ef(null,null,null);e.h=new Af(function(f,g){e.j=b?function(h){try{var k=b.call(d,h);f(k)}catch(m){g(m)}}:f;
e.i=c?function(h){try{var k=c.call(d,h);void 0===k&&h instanceof Hf?g(h):f(k)}catch(m){g(m)}}:g});
e.h.j=a;Lf(a,e);return e.h}
l.gf=function(a){this.h=0;Bf(this,2,a)};
l.hf=function(a){this.h=0;Bf(this,3,a)};
function Bf(a,b,c){if(0==a.h){a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.h=1;a:{var d=c,e=a.gf,f=a.hf;if(d instanceof Af){Lf(d,Ef(e||db,f||null,a));var g=!0}else{if(d)try{var h=!!d.$goog_Thenable}catch(m){h=!1}else h=!1;if(h)d.then(e,f,a),g=!0;else{if(Ra(d))try{var k=d.then;if("function"===typeof k){Nf(d,k,e,f,a);g=!0;break a}}catch(m){f.call(a,m);g=!0;break a}g=!1}}}g||(a.H=c,a.h=b,a.j=null,Mf(a),3!=b||c instanceof Hf||Of(a,c))}}
function Nf(a,b,c,d,e){function f(k){h||(h=!0,d.call(e,k))}
function g(k){h||(h=!0,c.call(e,k))}
var h=!1;try{b.call(a,g,f)}catch(k){f(k)}}
function Mf(a){a.s||(a.s=!0,xf(a.le,a))}
function Jf(a){var b=null;a.i&&(b=a.i,a.i=b.next,b.next=null);a.i||(a.l=null);return b}
l.le=function(){for(var a;a=Jf(this);)Kf(this,a,this.h,this.H);this.s=!1};
function Kf(a,b,c,d){if(3==c&&b.i&&!b.l)for(;a&&a.m;a=a.j)a.m=!1;if(b.h)b.h.j=null,Pf(b,c,d);else try{b.l?b.j.call(b.context):Pf(b,c,d)}catch(e){Qf.call(null,e)}cf(Df,b)}
function Pf(a,b,c){2==b?a.j.call(a.context,c):a.i&&a.i.call(a.context,c)}
function Of(a,b){a.m=!0;xf(function(){a.m&&Qf.call(null,b)})}
var Qf=Cc;function Hf(a){bb.call(this,a)}
Za(Hf,bb);Hf.prototype.name="cancel";function Rf(a,b){Ze.call(this);this.j=a||1;this.i=b||y;this.m=Xa(this.ef,this);this.s=Date.now()}
Za(Rf,Ze);l=Rf.prototype;l.enabled=!1;l.ya=null;function Sf(a,b){a.j=b;a.ya&&a.enabled?(a.stop(),a.start()):a.ya&&a.stop()}
l.ef=function(){if(this.enabled){var a=Date.now()-this.s;0<a&&a<.8*this.j?this.ya=this.i.setTimeout(this.m,this.j-a):(this.ya&&(this.i.clearTimeout(this.ya),this.ya=null),$e(this,"tick"),this.enabled&&(this.stop(),this.start()))}};
l.start=function(){this.enabled=!0;this.ya||(this.ya=this.i.setTimeout(this.m,this.j),this.s=Date.now())};
l.stop=function(){this.enabled=!1;this.ya&&(this.i.clearTimeout(this.ya),this.ya=null)};
l.L=function(){Rf.ta.L.call(this);this.stop();delete this.i};
function Tf(a,b,c){if("function"===typeof a)c&&(a=Xa(a,c));else if(a&&"function"==typeof a.handleEvent)a=Xa(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(b)?-1:y.setTimeout(a,b||0)}
;function Uf(a){this.H=a;this.h=new Map;this.s=new Set;this.j=0;this.l=100;this.flushInterval=3E4;this.i=new Rf(this.flushInterval);this.i.Ma("tick",this.vc,!1,this);this.m=!1}
l=Uf.prototype;l.sendIsolatedPayload=function(a){this.m=a;this.l=1};
function Vf(a){a.i.enabled||a.i.start();a.j++;a.j>=a.l&&a.vc()}
l.vc=function(){var a=this.h.values();a=[].concat(ja(a)).filter(function(b){return b.pb.size});
a.length&&this.H.flush(a,this.m);Wf(a);this.j=0;this.i.enabled&&this.i.stop()};
l.Zc=function(a){var b=Ka.apply(1,arguments);this.h.has(a)||this.h.set(a,new qe(a,b))};
l.bd=function(a){var b=Ka.apply(1,arguments);this.h.has(a)||this.h.set(a,new re(a,b))};
function Xf(a,b){return a.s.has(b)?void 0:a.h.get(b)}
l.tc=function(a){this.Ud.apply(this,[a,1].concat(ja(Ka.apply(1,arguments))))};
l.Ud=function(a,b){var c=Ka.apply(2,arguments),d=Xf(this,a);d&&d instanceof qe&&(d.j(b,c),Vf(this))};
l.uc=function(a,b){var c=Ka.apply(2,arguments),d=Xf(this,a);d&&d instanceof re&&(d.j(b,c),Vf(this))};
function Wf(a){for(var b=0;b<a.length;b++)a[b].clear()}
;function Yf(a){this.h=a;this.h.Zc("/client_streamz/bg/fiec",{Ib:3,Hb:"rk"},{Ib:2,Hb:"ec"})}
function Zf(a,b,c){a.h.tc("/client_streamz/bg/fiec",b,c)}
function $f(a){this.h=a;this.h.bd("/client_streamz/bg/fil",{Ib:3,Hb:"rk"})}
function ag(a){this.h=a;this.h.Zc("/client_streamz/bg/fsc",{Ib:3,Hb:"rk"})}
function bg(a){this.h=a;this.h.bd("/client_streamz/bg/fsl",{Ib:3,Hb:"rk"})}
;var cg={toString:function(a){var b=[],c=0;a-=-2147483648;b[c++]="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".charAt(a%52);for(a=Math.floor(a/52);0<a;)b[c++]="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789".charAt(a%62),a=Math.floor(a/62);return b.join("")}};function dg(a){function b(){c-=d;c-=e;c^=e>>>13;d-=e;d-=c;d^=c<<8;e-=c;e-=d;e^=d>>>13;c-=d;c-=e;c^=e>>>12;d-=e;d-=c;d^=c<<16;e-=c;e-=d;e^=d>>>5;c-=d;c-=e;c^=e>>>3;d-=e;d-=c;d^=c<<10;e-=c;e-=d;e^=d>>>15}
a=eg(a);for(var c=2654435769,d=2654435769,e=314159265,f=a.length,g=f,h=0;12<=g;g-=12,h+=12)c+=fg(a,h),d+=fg(a,h+4),e+=fg(a,h+8),b();e+=f;switch(g){case 11:e+=a[h+10]<<24;case 10:e+=a[h+9]<<16;case 9:e+=a[h+8]<<8;case 8:d+=a[h+7]<<24;case 7:d+=a[h+6]<<16;case 6:d+=a[h+5]<<8;case 5:d+=a[h+4];case 4:c+=a[h+3]<<24;case 3:c+=a[h+2]<<16;case 2:c+=a[h+1]<<8;case 1:c+=a[h+0]}b();return cg.toString(e)}
function eg(a){for(var b=[],c=0;c<a.length;c++)b.push(a.charCodeAt(c));return b}
function fg(a,b){return a[b+0]+(a[b+1]<<8)+(a[b+2]<<16)+(a[b+3]<<24)}
;function gg(a){H.call(this,a)}
u(gg,H);var hg=[1,2,3];function ig(a){H.call(this,a)}
u(ig,H);var jg=[1,2,3];function kg(a){H.call(this,a,-1,lg)}
u(kg,H);var lg=[1];function mg(a){H.call(this,a,-1,ng)}
u(mg,H);var ng=[3,6,4];function og(a){H.call(this,a,-1,pg)}
u(og,H);var pg=[1];function qg(a){if(!a)return"";if(/^about:(?:blank|srcdoc)$/.test(a))return window.origin||"";a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));c=a.substring(0,a.indexOf("://"));if(!c)throw Error("URI is missing protocol: "+a);if("http"!==c&&"https"!==c&&"chrome-extension"!==c&&"moz-extension"!==c&&"file"!==c&&"android-app"!==
c&&"chrome-search"!==c&&"chrome-untrusted"!==c&&"chrome"!==c&&"app"!==c&&"devtools"!==c)throw Error("Invalid URI scheme in origin: "+c);a="";var d=b.indexOf(":");if(-1!=d){var e=b.substring(d+1);b=b.substring(0,d);if("http"===c&&"80"!==e||"https"===c&&"443"!==e)a=":"+e}return c+"://"+b+a}
;function rg(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;p=m=0}
function b(n){for(var v=g,t=0;64>t;t+=4)v[t/4]=n[t]<<24|n[t+1]<<16|n[t+2]<<8|n[t+3];for(t=16;80>t;t++)n=v[t-3]^v[t-8]^v[t-14]^v[t-16],v[t]=(n<<1|n>>>31)&4294967295;n=e[0];var z=e[1],D=e[2],F=e[3],N=e[4];for(t=0;80>t;t++){if(40>t)if(20>t){var O=F^z&(D^F);var T=1518500249}else O=z^D^F,T=1859775393;else 60>t?(O=z&D|F&(z|D),T=2400959708):(O=z^D^F,T=3395469782);O=((n<<5|n>>>27)&4294967295)+O+N+T+v[t]&4294967295;N=F;F=D;D=(z<<30|z>>>2)&4294967295;z=n;n=O}e[0]=e[0]+n&4294967295;e[1]=e[1]+z&4294967295;e[2]=
e[2]+D&4294967295;e[3]=e[3]+F&4294967295;e[4]=e[4]+N&4294967295}
function c(n,v){if("string"===typeof n){n=unescape(encodeURIComponent(n));for(var t=[],z=0,D=n.length;z<D;++z)t.push(n.charCodeAt(z));n=t}v||(v=n.length);t=0;if(0==m)for(;t+64<v;)b(n.slice(t,t+64)),t+=64,p+=64;for(;t<v;)if(f[m++]=n[t++],p++,64==m)for(m=0,b(f);t+64<v;)b(n.slice(t,t+64)),t+=64,p+=64}
function d(){var n=[],v=8*p;56>m?c(h,56-m):c(h,64-(m-56));for(var t=63;56<=t;t--)f[t]=v&255,v>>>=8;b(f);for(t=v=0;5>t;t++)for(var z=24;0<=z;z-=8)n[v++]=e[t]>>z&255;return n}
for(var e=[],f=[],g=[],h=[128],k=1;64>k;++k)h[k]=0;var m,p;a();return{reset:a,update:c,digest:d,he:function(){for(var n=d(),v="",t=0;t<n.length;t++)v+="0123456789ABCDEF".charAt(Math.floor(n[t]/16))+"0123456789ABCDEF".charAt(n[t]%16);return v}}}
;function sg(a,b,c){var d=String(y.location.href);return d&&a&&b?[b,tg(qg(d),a,c||null)].join(" "):null}
function tg(a,b,c){var d=[],e=[];if(1==(Array.isArray(c)?2:1))return e=[b,a],gb(d,function(h){e.push(h)}),ug(e.join(" "));
var f=[],g=[];gb(c,function(h){g.push(h.key);f.push(h.value)});
c=Math.floor((new Date).getTime()/1E3);e=0==f.length?[c,b,a]:[f.join(":"),c,b,a];gb(d,function(h){e.push(h)});
a=ug(e.join(" "));a=[c,a];0==g.length||a.push(g.join(""));return a.join("_")}
function ug(a){var b=rg();b.update(a);return b.he().toLowerCase()}
;var vg={};function wg(a){this.h=a||{cookie:""}}
l=wg.prototype;l.isEnabled=function(){if(!y.navigator.cookieEnabled)return!1;if(!this.Jb())return!0;this.set("TESTCOOKIESENABLED","1",{kc:60});if("1"!==this.get("TESTCOOKIESENABLED"))return!1;this.remove("TESTCOOKIESENABLED");return!0};
l.set=function(a,b,c){var d=!1;if("object"===typeof c){var e=c.Xt;d=c.secure||!1;var f=c.domain||void 0;var g=c.path||void 0;var h=c.kc}if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');void 0===h&&(h=-1);c=f?";domain="+f:"";g=g?";path="+g:"";d=d?";secure":"";h=0>h?"":0==h?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(Date.now()+1E3*h)).toUTCString();this.h.cookie=a+"="+b+c+g+h+d+(null!=e?";samesite="+
e:"")};
l.get=function(a,b){for(var c=a+"=",d=(this.h.cookie||"").split(";"),e=0,f;e<d.length;e++){f=Kb(d[e]);if(0==f.lastIndexOf(c,0))return f.slice(c.length);if(f==a)return""}return b};
l.remove=function(a,b,c){var d=void 0!==this.get(a);this.set(a,"",{kc:0,path:b,domain:c});return d};
l.Bc=function(){return xg(this).keys};
l.Jb=function(){return!this.h.cookie};
l.clear=function(){for(var a=xg(this).keys,b=a.length-1;0<=b;b--)this.remove(a[b])};
function xg(a){a=(a.h.cookie||"").split(";");for(var b=[],c=[],d,e,f=0;f<a.length;f++)e=Kb(a[f]),d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));return{keys:b,values:c}}
var yg=new wg("undefined"==typeof document?null:document);function zg(a){return!!vg.FPA_SAMESITE_PHASE2_MOD||!(void 0===a||!a)}
function Ag(a){a=void 0===a?!1:a;var b=y.__SAPISID||y.__APISID||y.__3PSAPISID||y.__OVERRIDE_SID;zg(a)&&(b=b||y.__1PSAPISID);if(b)return!0;var c=new wg(document);b=c.get("SAPISID")||c.get("APISID")||c.get("__Secure-3PAPISID")||c.get("SID")||c.get("OSID");zg(a)&&(b=b||c.get("__Secure-1PAPISID"));return!!b}
function Bg(a,b,c,d){(a=y[a])||(a=(new wg(document)).get(b));return a?sg(a,c,d):null}
function Cg(a,b){b=void 0===b?!1:b;var c=qg(String(y.location.href)),d=[];if(Ag(b)){c=0==c.indexOf("https:")||0==c.indexOf("chrome-extension:")||0==c.indexOf("moz-extension:");var e=c?y.__SAPISID:y.__APISID;e||(e=new wg(document),e=e.get(c?"SAPISID":"APISID")||e.get("__Secure-3PAPISID"));(e=e?sg(e,c?"SAPISIDHASH":"APISIDHASH",a):null)&&d.push(e);c&&zg(b)&&((b=Bg("__1PSAPISID","__Secure-1PAPISID","SAPISID1PHASH",a))&&d.push(b),(a=Bg("__3PSAPISID","__Secure-3PAPISID","SAPISID3PHASH",a))&&d.push(a))}return 0==
d.length?null:d.join(" ")}
;function Dg(a){H.call(this,a,-1,Eg)}
u(Dg,H);var Eg=[2];function Fg(a){this.h=this.i=this.j=a}
Fg.prototype.reset=function(){this.h=this.i=this.j};
Fg.prototype.getValue=function(){return this.i};function Gg(a){var b=[];Hg(new Ig,a,b);return b.join("")}
function Ig(){}
function Hg(a,b,c){if(null==b)c.push("null");else{if("object"==typeof b){if(Array.isArray(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),Hg(a,d[f],c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");e="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(f=b[d],"function"!=typeof f&&(c.push(e),Jg(d,c),c.push(":"),Hg(a,f,c),e=","));c.push("}");return}}switch(typeof b){case "string":Jg(b,c);break;case "number":c.push(isFinite(b)&&
!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}}
var Kg={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\v":"\\u000b"},Lg=/\uffff/.test("\uffff")?/[\\"\x00-\x1f\x7f-\uffff]/g:/[\\"\x00-\x1f\x7f-\xff]/g;function Jg(a,b){b.push('"',a.replace(Lg,function(c){var d=Kg[c];d||(d="\\u"+(c.charCodeAt(0)|65536).toString(16).slice(1),Kg[c]=d);return d}),'"')}
;function Mg(){}
Mg.prototype.h=null;Mg.prototype.getOptions=function(){var a;(a=this.h)||(a={},Ng(this)&&(a[0]=!0,a[1]=!0),a=this.h=a);return a};var Og;function Pg(){}
Za(Pg,Mg);function Qg(a){return(a=Ng(a))?new ActiveXObject(a):new XMLHttpRequest}
function Ng(a){if(!a.i&&"undefined"==typeof XMLHttpRequest&&"undefined"!=typeof ActiveXObject){for(var b=["MSXML2.XMLHTTP.6.0","MSXML2.XMLHTTP.3.0","MSXML2.XMLHTTP","Microsoft.XMLHTTP"],c=0;c<b.length;c++){var d=b[c];try{return new ActiveXObject(d),a.i=d}catch(e){}}throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");}return a.i}
Og=new Pg;function Rg(a){Ze.call(this);this.headers=new Map;this.V=a||null;this.i=!1;this.R=this.F=null;this.m=this.ia="";this.j=this.aa=this.v=this.Y=!1;this.s=0;this.N=null;this.Aa="";this.oa=this.qa=!1}
Za(Rg,Ze);var Sg=/^https?$/i,Tg=["POST","PUT"],Ug=[];function Vg(a,b,c,d,e,f,g){var h=new Rg;Ug.push(h);b&&h.Ma("complete",b);h.l.add("ready",h.ee,!0,void 0,void 0);f&&(h.s=Math.max(0,f));g&&(h.qa=g);h.send(a,c,d,e)}
l=Rg.prototype;l.ee=function(){this.dispose();lb(Ug,this)};
l.send=function(a,b,c,d){if(this.F)throw Error("[goog.net.XhrIo] Object is active with another request="+this.ia+"; newUri="+a);b=b?b.toUpperCase():"GET";this.ia=a;this.m="";this.Y=!1;this.i=!0;this.F=this.V?Qg(this.V):Qg(Og);this.R=this.V?this.V.getOptions():Og.getOptions();this.F.onreadystatechange=Xa(this.Ad,this);try{this.getStatus(),this.aa=!0,this.F.open(b,String(a),!0),this.aa=!1}catch(g){this.getStatus();Wg(this,g);return}a=c||"";c=new Map(this.headers);if(d)if(Object.getPrototypeOf(d)===
Object.prototype)for(var e in d)c.set(e,d[e]);else if("function"===typeof d.keys&&"function"===typeof d.get){e=r(d.keys());for(var f=e.next();!f.done;f=e.next())f=f.value,c.set(f,d.get(f))}else throw Error("Unknown input type for opt_headers: "+String(d));d=Array.from(c.keys()).find(function(g){return"content-type"==g.toLowerCase()});
e=y.FormData&&a instanceof y.FormData;!(0<=fb(Tg,b))||d||e||c.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");b=r(c);for(d=b.next();!d.done;d=b.next())c=r(d.value),d=c.next().value,c=c.next().value,this.F.setRequestHeader(d,c);this.Aa&&(this.F.responseType=this.Aa);"withCredentials"in this.F&&this.F.withCredentials!==this.qa&&(this.F.withCredentials=this.qa);try{Xg(this),0<this.s&&(this.oa=Yg(this.F),this.getStatus(),this.oa?(this.F.timeout=this.s,this.F.ontimeout=Xa(this.Nd,
this)):this.N=Tf(this.Nd,this.s,this)),this.getStatus(),this.v=!0,this.F.send(a),this.v=!1}catch(g){this.getStatus(),Wg(this,g)}};
function Yg(a){return Hc&&"number"===typeof a.timeout&&void 0!==a.ontimeout}
l.Nd=function(){"undefined"!=typeof Oa&&this.F&&(this.m="Timed out after "+this.s+"ms, aborting",this.getStatus(),$e(this,"timeout"),this.abort(8))};
function Wg(a,b){a.i=!1;a.F&&(a.j=!0,a.F.abort(),a.j=!1);a.m=b;Zg(a);$g(a)}
function Zg(a){a.Y||(a.Y=!0,$e(a,"complete"),$e(a,"error"))}
l.abort=function(){this.F&&this.i&&(this.getStatus(),this.i=!1,this.j=!0,this.F.abort(),this.j=!1,$e(this,"complete"),$e(this,"abort"),$g(this))};
l.L=function(){this.F&&(this.i&&(this.i=!1,this.j=!0,this.F.abort(),this.j=!1),$g(this,!0));Rg.ta.L.call(this)};
l.Ad=function(){this.h()||(this.aa||this.v||this.j?ah(this):this.Ie())};
l.Ie=function(){ah(this)};
function ah(a){if(a.i&&"undefined"!=typeof Oa)if(a.R[1]&&4==bh(a)&&2==a.getStatus())a.getStatus();else if(a.v&&4==bh(a))Tf(a.Ad,0,a);else if($e(a,"readystatechange"),a.isComplete()){a.getStatus();a.i=!1;try{if(ch(a))$e(a,"complete"),$e(a,"success");else{try{var b=2<bh(a)?a.F.statusText:""}catch(c){b=""}a.m=b+" ["+a.getStatus()+"]";Zg(a)}}finally{$g(a)}}}
function $g(a,b){if(a.F){Xg(a);var c=a.F,d=a.R[0]?function(){}:null;
a.F=null;a.R=null;b||$e(a,"ready");try{c.onreadystatechange=d}catch(e){}}}
function Xg(a){a.F&&a.oa&&(a.F.ontimeout=null);a.N&&(y.clearTimeout(a.N),a.N=null)}
l.isActive=function(){return!!this.F};
l.isComplete=function(){return 4==bh(this)};
function ch(a){var b=a.getStatus();a:switch(b){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break a;default:c=!1}if(!c){if(b=0===b)a=mc(1,String(a.ia)),!a&&y.self&&y.self.location&&(a=y.self.location.protocol.slice(0,-1)),b=!Sg.test(a?a.toLowerCase():"");c=b}return c}
function bh(a){return a.F?a.F.readyState:0}
l.getStatus=function(){try{return 2<bh(this)?this.F.status:-1}catch(a){return-1}};
l.getLastError=function(){return"string"===typeof this.m?this.m:String(this.m)};function dh(a){H.call(this,a,-1,eh)}
u(dh,H);var eh=[1];function fh(a){H.call(this,a)}
u(fh,H);var gh=["platform","platformVersion","architecture","model","uaFullVersion"];new dh;function hh(a){H.call(this,a)}
u(hh,H);function ih(a){H.call(this,a,31,jh)}
u(ih,H);var jh=[3,20,27];function kh(a){H.call(this,a,17,lh)}
u(kh,H);var lh=[3,5];function mh(a){H.call(this,a,6,nh)}
u(mh,H);var nh=[5];function oh(a){H.call(this,a)}
u(oh,H);var ph;ph=new function(a,b,c){this.i=a;this.fieldName=b;this.h=c;this.isRepeated=0;this.j=ne}(175237375,{Nt:0},oh);function qh(a,b,c,d,e,f,g,h,k,m,p){Ze.call(this);var n=this;this.Y="";this.j=[];this.Xc="";this.Yc=this.eb=-1;this.Wb=!1;this.R=this.m=null;this.N=0;this.Xd=1;this.timeoutMillis=0;this.Aa=!1;Ze.call(this);this.Xb=b||function(){};
this.v=new rh(a,f);this.Vd=d;this.Vb=p;this.Yd=Ya(jf,0,1);this.ia=e||null;this.V=c||null;this.oa=g||!1;this.pageId=k||null;this.logger=null;this.withCredentials=!h;this.Cb=f||!1;!this.Cb&&(65<=bc("Chromium")||45<=bc("Firefox")||12<=bc("Safari")||(Dc()||C("iPad")||C("iPod"))&&Ec());a=E(new hh,1,1);sh(this.v,a);this.s=new Fg(1E4);this.i=new Rf(this.s.getValue());ue(this,this.i);m=th(this,m);Oe(this.i,"tick",m,!1,this);this.aa=new Rf(6E5);ue(this,this.aa);Oe(this.aa,"tick",m,!1,this);this.oa||this.aa.start();
this.Cb||(Oe(document,"visibilitychange",function(){"hidden"===document.visibilityState&&n.qa()}),Oe(document,"pagehide",this.qa,!1,this))}
u(qh,Ze);function th(a,b){return b?function(){b().then(function(){a.flush()})}:function(){a.flush()}}
qh.prototype.L=function(){this.qa();Ze.prototype.L.call(this)};
function uh(a){a.ia||(a.ia=.01>a.Yd()?"https://www.google.com/log?format=json&hasfast=true":"https://play.google.com/log?format=json&hasfast=true");return a.ia}
function vh(a,b){a.s=new Fg(1>b?1:b);Sf(a.i,a.s.getValue())}
qh.prototype.log=function(a){a=a.clone();var b=this.Xd++;E(a,21,b);this.Y&&E(a,26,this.Y);if(!Id(a,1)){b=a;var c=Date.now().toString();E(b,1,c)}null==Id(a,15)&&E(a,15,60*(new Date).getTimezoneOffset());this.m&&(b=this.m.clone(),G(a,Dg,16,b));for(;1E3<=this.j.length;)this.j.shift(),++this.N;this.j.push(a);$e(this,new wh(a));this.oa||this.i.enabled||this.i.start()};
qh.prototype.flush=function(a,b){var c=this;if(0===this.j.length)a&&a();else if(this.Aa)xh(this);else{var d=Date.now();if(this.Yc>d&&this.eb<d)b&&b("throttled");else{var e=Ah(this.v,this.j,this.N);d={};var f=this.Xb();f&&(d.Authorization=f);var g=uh(this);this.V&&(d["X-Goog-AuthUser"]=this.V,g=xc(g,"authuser",this.V));this.pageId&&(d["X-Goog-PageId"]=this.pageId,g=xc(g,"pageId",this.pageId));if(f&&this.Xc===f)b&&b("stale-auth-token");else{this.j=[];this.i.enabled&&this.i.stop();this.N=0;var h=le(e),
k;this.R&&this.R.isSupported(h.length)&&(k=this.R.compress(h));var m={url:g,body:h,ce:1,Oc:d,requestType:"POST",withCredentials:this.withCredentials,timeoutMillis:this.timeoutMillis},p=function(t){c.s.reset();Sf(c.i,c.s.getValue());if(t){var z=null;try{var D=JSON.parse(t.replace(")]}'\n",""));z=new mh(D)}catch(F){}z&&(t=Number(Zd(Id(z,1),"-1")),0<t&&(c.eb=Date.now(),c.Yc=c.eb+t),z=ph.j(z))&&(z=Id(z,1),z=null==z?-1:z,-1!=z&&(c.Wb||vh(c,z)))}a&&a()},n=function(t,z){var D=Vd(e,ih,3),F=c.s;
F.h=Math.min(3E5,2*F.h);F.i=Math.min(3E5,F.h+Math.round(.2*(Math.random()-.5)*F.h));Sf(c.i,c.s.getValue());401===t&&f&&(c.Xc=f);void 0===z&&(z=500<=t&&600>t||401===t||0===t);z&&(c.j=D.concat(c.j),c.oa||c.i.enabled||c.i.start());b&&b("net-send-failed",t)},v=function(){c.Vb?c.Vb.send(m,p,n):c.Vd(m,p,n)};
k?k.then(function(t){m.Oc["Content-Encoding"]="gzip";m.Oc["Content-Type"]="application/binary";m.body=t;m.ce=2;v()},function(){v()}):v()}}}};
qh.prototype.qa=function(){this.flush()};
function xh(a){Bh(a,function(b,c){b=xc(b,"format","json");var d=!1;try{d=window.navigator.sendBeacon(b,le(c))}catch(e){}a.Aa&&!d&&(a.Aa=!1);return d})}
function Bh(a,b){if(0!==a.j.length){var c=Bc(uh(a),"format");c=vc(c,"auth",a.Xb(),"authuser",a.V||"0");for(var d=0;10>d&&a.j.length;++d){var e=a.j.slice(0,32),f=Ah(a.v,e,a.N);if(!b(c,f))break;a.N=0;a.j=a.j.slice(e.length)}a.i.enabled&&a.i.stop()}}
function wh(){we.call(this,"event-logged",void 0)}
u(wh,we);function rh(a,b){this.i=b=void 0===b?!1:b;this.uach=this.locale=null;this.h=new kh;E(this.h,2,a);b||(this.locale=document.documentElement.getAttribute("lang"));sh(this,new hh)}
function sh(a,b){G(a.h,hh,1,b);Id(b,1)||E(b,1,1);a.i||(b=Ch(a),Id(b,5)||E(b,5,a.locale));a.uach&&(b=Ch(a),Sd(b,dh,9)||G(b,dh,9,a.uach))}
function Dh(a,b){var c=void 0===c?gh:c;b(window,c).then(function(d){a.uach=d;d=Ch(a);G(d,dh,9,a.uach);return!0}).catch(function(){return!1})}
function Ch(a){a=Sd(a.h,hh,1);var b=Sd(a,fh,11);b||(b=new fh,G(a,fh,11,b));return b}
function Ah(a,b,c){c=void 0===c?0:c;a=a.h.clone();var d=Date.now().toString();a=E(a,4,d);b=Xd(a,ih,3,b);c&&E(b,14,c);return b}
;function Eh(a,b,c){Vg(a.url,function(d){d=d.target;if(ch(d)){try{var e=d.F?d.F.responseText:""}catch(f){e=""}b(e)}else c(d.getStatus())},a.requestType,a.body,a.Oc,a.timeoutMillis,a.withCredentials)}
;function Fh(){this.j="https://play.google.com/log?format=json&hasfast=true";this.v=!1;this.m=Eh;this.h=""}
;function Gh(){var a=void 0===a?"":a;var b=void 0===b?"":b;var c=new Fh;c.h="";""!=a&&(c.j=a);b&&(c.i=b);a=new qh(1828,c.R?c.R:Cg,"0",c.m,c.j,c.v,!1,c.aa,void 0,void 0,c.s?c.s:void 0);c.Z&&sh(a.v,c.Z);if(c.i){b=c.i;var d=Ch(a.v);E(d,7,b)}c.l&&(a.R=c.l);c.h&&(a.Y=c.h);c.H&&((b=c.H)?(a.m||(a.m=new Dg),b=le(b),E(a.m,4,b)):a.m&&E(a.m,4,void 0,!1));c.V&&(d=c.V,a.m||(a.m=new Dg),b=a.m,d=null==d?Ad:pd(d,1),E(b,2,d));c.N&&(b=c.N,a.Wb=!0,vh(a,b));c.Y&&Dh(a.v,c.Y);this.h=a}
Gh.prototype.flush=function(a){var b=a||[];if(b.length){a=new og;for(var c=[],d=0;d<b.length;d++){var e=b[d],f=e,g=new mg;var h=E(g,1,f.i);var k=f;g=[];for(var m=0;m<k.h.length;m++)g.push(k.h[m].Hb);if(null==g)g=E(h,3,Ad);else{k=qd(g);if(!(k&4)){if(k&2||Object.isFrozen(g))g=Array.prototype.slice.call(g);for(m=0;m<g.length;m++)g[m]=g[m];rd(g,k|5)}g=E(h,3,g)}h=[];k=[];m=r(f.pb.keys());for(var p=m.next();!p.done;p=m.next())k.push(p.value.split(","));for(m=0;m<k.length;m++){p=k[m];var n=f.l;for(var v=
f.yc(p)||[],t=[],z=0;z<v.length;z++){var D=v[z];D=D&&D.fd;var F=new ig;switch(n){case 3:Qd(F,1,jg,Number(D));break;case 2:Qd(F,2,jg,Ed(Number(D)))}t.push(F)}n=t;for(v=0;v<n.length;v++){t=n[v];z=new kg;t=G(z,ig,2,t);z=p;D=[];F=f;for(var N=[],O=0;O<F.h.length;O++)N.push(F.h[O].Ib);F=N;for(N=0;N<F.length;N++){O=F[N];var T=z[N],aa=new gg;switch(O){case 3:Qd(aa,1,hg,String(T));break;case 2:Qd(aa,2,hg,Number(T));break;case 1:Qd(aa,3,hg,"true"==T)}D.push(aa)}Xd(t,gg,1,D);h.push(t)}}Xd(g,kg,4,h);c.push(g);
e.clear()}Xd(a,mg,1,c);b=this.h;a instanceof ih?b.log(a):(c=new ih,a=le(a),a=E(c,8,a),b.log(a));this.h.flush()}};function Hh(a){this.H=Ih();this.m=new Gh;this.h=new Uf(this.m);this.s=new $f(this.h);this.j=new ag(this.h);this.l=new bg(this.h);this.i=new Yf(this.h);this.Oa=dg(a)}
function Ih(){var a,b,c;return null!=(c=null==(a=globalThis.performance)?void 0:null==(b=a.now)?void 0:b.call(a))?c:Date.now()}
;function Jh(){var a=this;this.promise=new Promise(function(b,c){a.resolve=b;a.reject=c})}
;function Kh(a){var b=this;this.i=!1;var c=a.program;var d=a.se;if(a.Me){var e;this.Da=null!=(e=a.Da)?e:new Hh(d)}var f=new Jh;this.j=f.promise;if(y[d])if(y[d].a){var g;null!=(g=this.Da)&&Zf(g.i,g.Oa,3)}else{var h;null!=(h=this.Da)&&Zf(h.i,h.Oa,2)}else{var k;null!=(k=this.Da)&&Zf(k.i,k.Oa,1)}this.l=r((0,y[d].a)(c,function(m,p){Promise.resolve().then(function(){var n;if(null!=(n=b.Da)){var v=Ih()-n.H;n.s.h.uc("/client_streamz/bg/fil",v,n.Oa)}f.resolve({ae:m,af:p})})},!0)).next().value;
this.Ze=f.promise.then(function(){})}
Kh.prototype.snapshot=function(a){var b=this;if(this.i)throw Error("Already disposed");var c=Ih(),d;null!=(d=this.Da)&&d.j.h.tc("/client_streamz/bg/fsc",d.Oa);return this.j.then(function(e){var f=e.ae;return new Promise(function(g){f(function(h){var k;if(null!=(k=b.Da)){var m=Ih()-c;k.l.h.uc("/client_streamz/bg/fsl",m,k.Oa)}g(h)},[a.hd,
a.bf])})})};
Kh.prototype.Kd=function(a){if(this.i)throw Error("Already disposed");var b=Ih(),c;null!=(c=this.Da)&&c.j.h.tc("/client_streamz/bg/fsc",c.Oa);a=this.l([a.hd,a.bf]);null!=(c=this.Da)&&(b=Ih()-b,c.l.h.uc("/client_streamz/bg/fsl",b,c.Oa));return a};
Kh.prototype.dispose=function(){var a;null!=(a=this.Da)&&a.h.vc();this.i=!0;this.j.then(function(b){(b=b.af)&&b()})};
Kh.prototype.h=function(){return this.i};var Lh=window;Db("csi.gstatic.com");Db("googleads.g.doubleclick.net");Db("partner.googleadservices.com");Db("pubads.g.doubleclick.net");Db("securepubads.g.doubleclick.net");Db("tpc.googlesyndication.com");/*

 SPDX-License-Identifier: Apache-2.0
*/
var Mh;try{new URL("s://g"),Mh=!0}catch(a){Mh=!1}var Nh=Mh;var Oh={};function Ph(){}
function Qh(a){this.h=a}
u(Qh,Ph);Qh.prototype.toString=function(){return this.h};function Rh(a){var b="true".toString(),c=[new Qh(Sh[0].toLowerCase(),Oh)];if(0===c.length)throw Error("");if(c.map(function(d){if(d instanceof Qh)d=d.h;else throw Error("");return d}).every(function(d){return 0!=="data-loaded".indexOf(d)}))throw Error('Attribute "data-loaded" does not match any of the allowed prefixes.');
a.setAttribute("data-loaded",b)}
;function Th(a){var b,c,d=null==(c=(b=(a.ownerDocument&&a.ownerDocument.defaultView||window).document).querySelector)?void 0:c.call(b,"script[nonce]");(b=d?d.nonce||d.getAttribute("nonce")||"":"")&&a.setAttribute("nonce",b)}
function Uh(a,b){a.src=Ib(b);Th(a)}
;function Vh(a){this.Ae=a}
function Wh(a){return new Vh(function(b){return b.substr(0,a.length+1).toLowerCase()===a+":"})}
var Xh=[Wh("data"),Wh("http"),Wh("https"),Wh("mailto"),Wh("ftp"),new Vh(function(a){return/^[^:]*([/?#]|$)/.test(a)})];function Yh(a){var b=Zh;if(b)for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&a(b[c],c,b)}
function $h(){var a=[];Yh(function(b){a.push(b)});
return a}
var Zh={xf:"allow-forms",yf:"allow-modals",zf:"allow-orientation-lock",Af:"allow-pointer-lock",Bf:"allow-popups",Cf:"allow-popups-to-escape-sandbox",Df:"allow-presentation",Ef:"allow-same-origin",Ff:"allow-scripts",Gf:"allow-top-navigation",Hf:"allow-top-navigation-by-user-activation"},ai=eb(function(){return $h()});
function bi(){var a=ci(),b={};gb(ai(),function(c){a.sandbox&&a.sandbox.supports&&a.sandbox.supports(c)&&(b[c]=!0)});
return b}
function ci(){var a=void 0===a?document:a;return a.createElement("iframe")}
;function di(a){"number"==typeof a&&(a=Math.round(a)+"px");return a}
;var ei=(new Date).getTime();var fi="client_dev_domain client_dev_regex_map client_dev_root_url client_rollout_override expflag forcedCapability jsfeat jsmode mods".split(" ");ja(fi);"undefined"!==typeof TextDecoder&&new TextDecoder;var gi="undefined"!==typeof TextEncoder?new TextEncoder:null,hi=gi?function(a){return gi.encode(a)}:function(a){for(var b=[],c=0,d=0;d<a.length;d++){var e=a.charCodeAt(d);
128>e?b[c++]=e:(2048>e?b[c++]=e>>6|192:(55296==(e&64512)&&d+1<a.length&&56320==(a.charCodeAt(d+1)&64512)?(e=65536+((e&1023)<<10)+(a.charCodeAt(++d)&1023),b[c++]=e>>18|240,b[c++]=e>>12&63|128):b[c++]=e>>12|224,b[c++]=e>>6&63|128),b[c++]=e&63|128)}a=new Uint8Array(b.length);for(c=0;c<a.length;c++)a[c]=b[c];return a};function ii(a){Ze.call(this);var b=this;this.v=this.j=0;this.xa=null!=a?a:{fa:function(e,f){return setTimeout(e,f)},
Ca:function(e){clearTimeout(e)}};
var c,d;this.i=null!=(d=null==(c=window.navigator)?void 0:c.onLine)?d:!0;this.m=function(){return x(function(e){return w(e,ji(b),0)})};
window.addEventListener("offline",this.m);window.addEventListener("online",this.m);this.v||ki(this)}
u(ii,Ze);function li(){var a=mi;ii.h||(ii.h=new ii(a));return ii.h}
ii.prototype.dispose=function(){window.removeEventListener("offline",this.m);window.removeEventListener("online",this.m);this.xa.Ca(this.v);delete ii.h};
ii.prototype.ma=function(){return this.i};
function ki(a){a.v=a.xa.fa(function(){var b;return x(function(c){if(1==c.h)return a.i?(null==(b=window.navigator)?0:b.onLine)?c.A(3):w(c,ji(a),3):w(c,ji(a),3);ki(a);c.h=0})},3E4)}
function ji(a,b){return a.s?a.s:a.s=new Promise(function(c){var d,e,f,g;return x(function(h){switch(h.h){case 1:return d=window.AbortController?new window.AbortController:void 0,f=null==(e=d)?void 0:e.signal,g=!1,za(h,2,3),d&&(a.j=a.xa.fa(function(){d.abort()},b||2E4)),w(h,fetch("/generate_204",{method:"HEAD",
signal:f}),5);case 5:g=!0;case 3:Ca(h);a.s=void 0;a.j&&(a.xa.Ca(a.j),a.j=0);g!==a.i&&(a.i=g,a.i?$e(a,"networkstatus-online"):$e(a,"networkstatus-offline"));c(g);Da(h);break;case 2:Ba(h),g=!1,h.A(3)}})})}
;function ni(){this.data_=[];this.h=-1}
ni.prototype.set=function(a,b){b=void 0===b?!0:b;0<=a&&52>a&&Number.isInteger(a)&&this.data_[a]!==b&&(this.data_[a]=b,this.h=-1)};
ni.prototype.get=function(a){return!!this.data_[a]};
function oi(a){-1===a.h&&(a.h=jb(a.data_,function(b,c,d){return c?b+Math.pow(2,d):b},0));
return a.h}
;function pi(a,b){this.h=a[y.Symbol.iterator]();this.i=b}
pi.prototype[Symbol.iterator]=function(){return this};
pi.prototype.next=function(){var a=this.h.next();return{value:a.done?void 0:this.i.call(void 0,a.value),done:a.done}};
function qi(a,b){return new pi(a,b)}
;function ri(){this.blockSize=-1}
;function si(){this.blockSize=-1;this.blockSize=64;this.h=[];this.m=[];this.s=[];this.j=[];this.j[0]=128;for(var a=1;a<this.blockSize;++a)this.j[a]=0;this.l=this.i=0;this.reset()}
Za(si,ri);si.prototype.reset=function(){this.h[0]=1732584193;this.h[1]=4023233417;this.h[2]=2562383102;this.h[3]=271733878;this.h[4]=3285377520;this.l=this.i=0};
function ti(a,b,c){c||(c=0);var d=a.s;if("string"===typeof b)for(var e=0;16>e;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;16>e;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(e=16;80>e;e++){var f=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(f<<1|f>>>31)&4294967295}b=a.h[0];c=a.h[1];var g=a.h[2],h=a.h[3],k=a.h[4];for(e=0;80>e;e++){if(40>e)if(20>e){f=h^c&(g^h);var m=1518500249}else f=c^g^h,m=1859775393;else 60>e?(f=c&g|h&(c|g),m=2400959708):
(f=c^g^h,m=3395469782);f=(b<<5|b>>>27)+f+k+m+d[e]&4294967295;k=h;h=g;g=(c<<30|c>>>2)&4294967295;c=b;b=f}a.h[0]=a.h[0]+b&4294967295;a.h[1]=a.h[1]+c&4294967295;a.h[2]=a.h[2]+g&4294967295;a.h[3]=a.h[3]+h&4294967295;a.h[4]=a.h[4]+k&4294967295}
si.prototype.update=function(a,b){if(null!=a){void 0===b&&(b=a.length);for(var c=b-this.blockSize,d=0,e=this.m,f=this.i;d<b;){if(0==f)for(;d<=c;)ti(this,a,d),d+=this.blockSize;if("string"===typeof a)for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.blockSize){ti(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.blockSize){ti(this,e);f=0;break}}this.i=f;this.l+=b}};
si.prototype.digest=function(){var a=[],b=8*this.l;56>this.i?this.update(this.j,56-this.i):this.update(this.j,this.blockSize-(this.i-56));for(var c=this.blockSize-1;56<=c;c--)this.m[c]=b&255,b/=256;ti(this,this.m);for(c=b=0;5>c;c++)for(var d=24;0<=d;d-=8)a[b]=this.h[c]>>d&255,++b;return a};function ui(a){return"string"==typeof a.className?a.className:a.getAttribute&&a.getAttribute("class")||""}
function vi(a,b){"string"==typeof a.className?a.className=b:a.setAttribute&&a.setAttribute("class",b)}
function wi(a,b){a.classList?b=a.classList.contains(b):(a=a.classList?a.classList:ui(a).match(/\S+/g)||[],b=0<=fb(a,b));return b}
function xi(){var a=document.body;a.classList?a.classList.remove("inverted-hdpi"):wi(a,"inverted-hdpi")&&vi(a,Array.prototype.filter.call(a.classList?a.classList:ui(a).match(/\S+/g)||[],function(b){return"inverted-hdpi"!=b}).join(" "))}
;function yi(){}
yi.prototype.next=function(){return zi};
var zi={done:!0,value:void 0};function Ai(a){return{value:a,done:!1}}
yi.prototype.Ba=function(){return this};function Bi(a){if(a instanceof Ci||a instanceof Di||a instanceof Ei)return a;if("function"==typeof a.next)return new Ci(function(){return a});
if("function"==typeof a[Symbol.iterator])return new Ci(function(){return a[Symbol.iterator]()});
if("function"==typeof a.Ba)return new Ci(function(){return a.Ba()});
throw Error("Not an iterator or iterable.");}
function Ci(a){this.i=a}
Ci.prototype.Ba=function(){return new Di(this.i())};
Ci.prototype[Symbol.iterator]=function(){return new Ei(this.i())};
Ci.prototype.h=function(){return new Ei(this.i())};
function Di(a){this.i=a}
u(Di,yi);Di.prototype.next=function(){return this.i.next()};
Di.prototype[Symbol.iterator]=function(){return new Ei(this.i)};
Di.prototype.h=function(){return new Ei(this.i)};
function Ei(a){Ci.call(this,function(){return a});
this.j=a}
u(Ei,Ci);Ei.prototype.next=function(){return this.j.next()};function Fi(a,b){this.i={};this.h=[];this.Xa=this.size=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else if(a)if(a instanceof Fi)for(c=a.Bc(),d=0;d<c.length;d++)this.set(c[d],a.get(c[d]));else for(d in a)this.set(d,a[d])}
l=Fi.prototype;l.Bc=function(){Gi(this);return this.h.concat()};
l.has=function(a){return Hi(this.i,a)};
l.equals=function(a,b){if(this===a)return!0;if(this.size!=a.size)return!1;b=b||Ii;Gi(this);for(var c,d=0;c=this.h[d];d++)if(!b(this.get(c),a.get(c)))return!1;return!0};
function Ii(a,b){return a===b}
l.Jb=function(){return 0==this.size};
l.clear=function(){this.i={};this.Xa=this.size=this.h.length=0};
l.remove=function(a){return this.delete(a)};
l.delete=function(a){return Hi(this.i,a)?(delete this.i[a],--this.size,this.Xa++,this.h.length>2*this.size&&Gi(this),!0):!1};
function Gi(a){if(a.size!=a.h.length){for(var b=0,c=0;b<a.h.length;){var d=a.h[b];Hi(a.i,d)&&(a.h[c++]=d);b++}a.h.length=c}if(a.size!=a.h.length){var e={};for(c=b=0;b<a.h.length;)d=a.h[b],Hi(e,d)||(a.h[c++]=d,e[d]=1),b++;a.h.length=c}}
l.get=function(a,b){return Hi(this.i,a)?this.i[a]:b};
l.set=function(a,b){Hi(this.i,a)||(this.size+=1,this.h.push(a),this.Xa++);this.i[a]=b};
l.forEach=function(a,b){for(var c=this.Bc(),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};
l.clone=function(){return new Fi(this)};
l.keys=function(){return Bi(this.Ba(!0)).h()};
l.values=function(){return Bi(this.Ba(!1)).h()};
l.entries=function(){var a=this;return qi(this.keys(),function(b){return[b,a.get(b)]})};
l.Ba=function(a){Gi(this);var b=0,c=this.Xa,d=this,e=new yi;e.next=function(){if(c!=d.Xa)throw Error("The map has changed since the iterator was created");if(b>=d.h.length)return zi;var f=d.h[b++];return Ai(a?f:d.i[f])};
return e};
function Hi(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
;function Ji(a){J.call(this);this.s=1;this.l=[];this.m=0;this.i=[];this.j={};this.v=!!a}
Za(Ji,J);l=Ji.prototype;l.subscribe=function(a,b,c){var d=this.j[a];d||(d=this.j[a]=[]);var e=this.s;this.i[e]=a;this.i[e+1]=b;this.i[e+2]=c;this.s=e+3;d.push(e);return e};
function Ki(a,b,c,d){if(b=a.j[b]){var e=a.i;(b=b.find(function(f){return e[f+1]==c&&e[f+2]==d}))&&a.Bb(b)}}
l.Bb=function(a){var b=this.i[a];if(b){var c=this.j[b];0!=this.m?(this.l.push(a),this.i[a+1]=function(){}):(c&&lb(c,a),delete this.i[a],delete this.i[a+1],delete this.i[a+2])}return!!b};
l.cb=function(a,b){var c=this.j[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.v)for(e=0;e<c.length;e++){var g=c[e];Li(this.i[g+1],this.i[g+2],d)}else{this.m++;try{for(e=0,f=c.length;e<f&&!this.h();e++)g=c[e],this.i[g+1].apply(this.i[g+2],d)}finally{if(this.m--,0<this.l.length&&0==this.m)for(;c=this.l.pop();)this.Bb(c)}}return 0!=e}return!1};
function Li(a,b,c){xf(function(){a.apply(b,c)})}
l.clear=function(a){if(a){var b=this.j[a];b&&(b.forEach(this.Bb,this),delete this.j[a])}else this.i.length=0,this.j={}};
l.L=function(){Ji.ta.L.call(this);this.clear();this.l.length=0};function Mi(a){this.h=a}
Mi.prototype.set=function(a,b){void 0===b?this.h.remove(a):this.h.set(a,Gg(b))};
Mi.prototype.get=function(a){try{var b=this.h.get(a)}catch(c){return}if(null!==b)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
Mi.prototype.remove=function(a){this.h.remove(a)};function Ni(a){this.h=a}
Za(Ni,Mi);function Oi(a){this.data=a}
function Pi(a){return void 0===a||a instanceof Oi?a:new Oi(a)}
Ni.prototype.set=function(a,b){Ni.ta.set.call(this,a,Pi(b))};
Ni.prototype.i=function(a){a=Ni.ta.get.call(this,a);if(void 0===a||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
Ni.prototype.get=function(a){if(a=this.i(a)){if(a=a.data,void 0===a)throw"Storage: Invalid value was encountered";}else a=void 0;return a};function Qi(a){this.h=a}
Za(Qi,Ni);Qi.prototype.set=function(a,b,c){if(b=Pi(b)){if(c){if(c<Date.now()){Qi.prototype.remove.call(this,a);return}b.expiration=c}b.creation=Date.now()}Qi.ta.set.call(this,a,b)};
Qi.prototype.i=function(a){var b=Qi.ta.i.call(this,a);if(b){var c=b.creation,d=b.expiration;if(d&&d<Date.now()||c&&c>Date.now())Qi.prototype.remove.call(this,a);else return b}};function Ri(){}
;function Si(){}
Za(Si,Ri);Si.prototype[Symbol.iterator]=function(){return Bi(this.Ba(!0)).h()};
Si.prototype.clear=function(){var a=Array.from(this);a=r(a);for(var b=a.next();!b.done;b=a.next())this.remove(b.value)};function Ti(a){this.h=a}
Za(Ti,Si);l=Ti.prototype;l.isAvailable=function(){if(!this.h)return!1;try{return this.h.setItem("__sak","1"),this.h.removeItem("__sak"),!0}catch(a){return!1}};
l.set=function(a,b){try{this.h.setItem(a,b)}catch(c){if(0==this.h.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
l.get=function(a){a=this.h.getItem(a);if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
l.remove=function(a){this.h.removeItem(a)};
l.Ba=function(a){var b=0,c=this.h,d=new yi;d.next=function(){if(b>=c.length)return zi;var e=c.key(b++);if(a)return Ai(e);e=c.getItem(e);if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return Ai(e)};
return d};
l.clear=function(){this.h.clear()};
l.key=function(a){return this.h.key(a)};function Ui(){var a=null;try{a=window.localStorage||null}catch(b){}this.h=a}
Za(Ui,Ti);function Vi(a,b){this.i=a;this.h=null;var c;if(c=Hc)c=!(9<=Number(Xc));if(c){Wi||(Wi=new Fi);this.h=Wi.get(a);this.h||(b?this.h=document.getElementById(b):(this.h=document.createElement("userdata"),this.h.addBehavior("#default#userData"),document.body.appendChild(this.h)),Wi.set(a,this.h));try{this.h.load(this.i)}catch(d){this.h=null}}}
Za(Vi,Si);var Xi={".":".2E","!":".21","~":".7E","*":".2A","'":".27","(":".28",")":".29","%":"."},Wi=null;function Yi(a){return"_"+encodeURIComponent(a).replace(/[.!~*'()%]/g,function(b){return Xi[b]})}
l=Vi.prototype;l.isAvailable=function(){return!!this.h};
l.set=function(a,b){this.h.setAttribute(Yi(a),b);Zi(this)};
l.get=function(a){a=this.h.getAttribute(Yi(a));if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
l.remove=function(a){this.h.removeAttribute(Yi(a));Zi(this)};
l.Ba=function(a){var b=0,c=this.h.XMLDocument.documentElement.attributes,d=new yi;d.next=function(){if(b>=c.length)return zi;var e=c[b++];if(a)return Ai(decodeURIComponent(e.nodeName.replace(/\./g,"%")).slice(1));e=e.nodeValue;if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return Ai(e)};
return d};
l.clear=function(){for(var a=this.h.XMLDocument.documentElement,b=a.attributes.length;0<b;b--)a.removeAttribute(a.attributes[b-1].nodeName);Zi(this)};
function Zi(a){try{a.h.save(a.i)}catch(b){throw"Storage mechanism: Quota exceeded";}}
;function $i(a,b){this.i=a;this.h=b+"::"}
Za($i,Si);$i.prototype.set=function(a,b){this.i.set(this.h+a,b)};
$i.prototype.get=function(a){return this.i.get(this.h+a)};
$i.prototype.remove=function(a){this.i.remove(this.h+a)};
$i.prototype.Ba=function(a){var b=this.i[Symbol.iterator](),c=this,d=new yi;d.next=function(){var e=b.next();if(e.done)return e;for(e=e.value;e.slice(0,c.h.length)!=c.h;){e=b.next();if(e.done)return e;e=e.value}return Ai(a?e.slice(c.h.length):c.i.get(e))};
return d};/*

 (The MIT License)

 Copyright (C) 2014 by Vitaly Puzrin

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.

 -----------------------------------------------------------------------------
 Ported from zlib, which is under the following license
 https://github.com/madler/zlib/blob/master/zlib.h

 zlib.h -- interface of the 'zlib' general purpose compression library
   version 1.2.8, April 28th, 2013
   Copyright (C) 1995-2013 Jean-loup Gailly and Mark Adler
   This software is provided 'as-is', without any express or implied
   warranty.  In no event will the authors be held liable for any damages
   arising from the use of this software.
   Permission is granted to anyone to use this software for any purpose,
   including commercial applications, and to alter it and redistribute it
   freely, subject to the following restrictions:
   1. The origin of this software must not be misrepresented; you must not
      claim that you wrote the original software. If you use this software
      in a product, an acknowledgment in the product documentation would be
      appreciated but is not required.
   2. Altered source versions must be plainly marked as such, and must not be
      misrepresented as being the original software.
   3. This notice may not be removed or altered from any source distribution.
   Jean-loup Gailly        Mark Adler
   jloup@gzip.org          madler@alumni.caltech.edu
   The data format used by the zlib library is described by RFCs (Request for
   Comments) 1950 to 1952 in the files http://tools.ietf.org/html/rfc1950
   (zlib format), rfc1951 (deflate format) and rfc1952 (gzip format).
*/
var K={},aj="undefined"!==typeof Uint8Array&&"undefined"!==typeof Uint16Array&&"undefined"!==typeof Int32Array;K.assign=function(a){for(var b=Array.prototype.slice.call(arguments,1);b.length;){var c=b.shift();if(c){if("object"!==typeof c)throw new TypeError(c+"must be non-object");for(var d in c)Object.prototype.hasOwnProperty.call(c,d)&&(a[d]=c[d])}}return a};
K.Rc=function(a,b){if(a.length===b)return a;if(a.subarray)return a.subarray(0,b);a.length=b;return a};
var bj={ob:function(a,b,c,d,e){if(b.subarray&&a.subarray)a.set(b.subarray(c,c+d),e);else for(var f=0;f<d;f++)a[e+f]=b[c+f]},
nd:function(a){var b,c;var d=c=0;for(b=a.length;d<b;d++)c+=a[d].length;var e=new Uint8Array(c);d=c=0;for(b=a.length;d<b;d++){var f=a[d];e.set(f,c);c+=f.length}return e}},cj={ob:function(a,b,c,d,e){for(var f=0;f<d;f++)a[e+f]=b[c+f]},
nd:function(a){return[].concat.apply([],a)}};
K.Ye=function(){aj?(K.bb=Uint8Array,K.Ga=Uint16Array,K.Td=Int32Array,K.assign(K,bj)):(K.bb=Array,K.Ga=Array,K.Td=Array,K.assign(K,cj))};
K.Ye();var dj=!0;try{new Uint8Array(1)}catch(a){dj=!1}for(var ej=new K.bb(256),fj=0;256>fj;fj++)ej[fj]=252<=fj?6:248<=fj?5:240<=fj?4:224<=fj?3:192<=fj?2:1;ej[254]=ej[254]=1;
function gj(a){var b,c,d=a.length,e=0;for(b=0;b<d;b++){var f=a.charCodeAt(b);if(55296===(f&64512)&&b+1<d){var g=a.charCodeAt(b+1);56320===(g&64512)&&(f=65536+(f-55296<<10)+(g-56320),b++)}e+=128>f?1:2048>f?2:65536>f?3:4}var h=new K.bb(e);for(b=c=0;c<e;b++)f=a.charCodeAt(b),55296===(f&64512)&&b+1<d&&(g=a.charCodeAt(b+1),56320===(g&64512)&&(f=65536+(f-55296<<10)+(g-56320),b++)),128>f?h[c++]=f:(2048>f?h[c++]=192|f>>>6:(65536>f?h[c++]=224|f>>>12:(h[c++]=240|f>>>18,h[c++]=128|f>>>12&63),h[c++]=128|f>>>
6&63),h[c++]=128|f&63);return h}
;var hj={};hj=function(a,b,c,d){var e=a&65535|0;a=a>>>16&65535|0;for(var f;0!==c;){f=2E3<c?2E3:c;c-=f;do e=e+b[d++]|0,a=a+e|0;while(--f);e%=65521;a%=65521}return e|a<<16|0};for(var ij={},jj,kj=[],lj=0;256>lj;lj++){jj=lj;for(var mj=0;8>mj;mj++)jj=jj&1?3988292384^jj>>>1:jj>>>1;kj[lj]=jj}ij=function(a,b,c,d){c=d+c;for(a^=-1;d<c;d++)a=a>>>8^kj[(a^b[d])&255];return a^-1};var nj={};nj={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"};function oj(a){for(var b=a.length;0<=--b;)a[b]=0}
var pj=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],qj=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],rj=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],sj=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],tj=Array(576);oj(tj);var uj=Array(60);oj(uj);var vj=Array(512);oj(vj);var wj=Array(256);oj(wj);var xj=Array(29);oj(xj);var yj=Array(30);oj(yj);function zj(a,b,c,d,e){this.Ld=a;this.ne=b;this.me=c;this.ie=d;this.Ee=e;this.rd=a&&a.length}
var Aj,Bj,Cj;function Dj(a,b){this.ld=a;this.vb=0;this.Wa=b}
function Ej(a,b){a.S[a.pending++]=b&255;a.S[a.pending++]=b>>>8&255}
function Fj(a,b,c){a.ba>16-c?(a.ha|=b<<a.ba&65535,Ej(a,a.ha),a.ha=b>>16-a.ba,a.ba+=c-16):(a.ha|=b<<a.ba&65535,a.ba+=c)}
function Gj(a,b,c){Fj(a,c[2*b],c[2*b+1])}
function Hj(a,b){var c=0;do c|=a&1,a>>>=1,c<<=1;while(0<--b);return c>>>1}
function Ij(a,b,c){var d=Array(16),e=0,f;for(f=1;15>=f;f++)d[f]=e=e+c[f-1]<<1;for(c=0;c<=b;c++)e=a[2*c+1],0!==e&&(a[2*c]=Hj(d[e]++,e))}
function Jj(a){var b;for(b=0;286>b;b++)a.ja[2*b]=0;for(b=0;30>b;b++)a.gb[2*b]=0;for(b=0;19>b;b++)a.ca[2*b]=0;a.ja[512]=1;a.Na=a.yb=0;a.ra=a.matches=0}
function Kj(a){8<a.ba?Ej(a,a.ha):0<a.ba&&(a.S[a.pending++]=a.ha);a.ha=0;a.ba=0}
function Lj(a,b,c){Kj(a);Ej(a,c);Ej(a,~c);K.ob(a.S,a.window,b,c,a.pending);a.pending+=c}
function Mj(a,b,c,d){var e=2*b,f=2*c;return a[e]<a[f]||a[e]===a[f]&&d[b]<=d[c]}
function Nj(a,b,c){for(var d=a.U[c],e=c<<1;e<=a.Ka;){e<a.Ka&&Mj(b,a.U[e+1],a.U[e],a.depth)&&e++;if(Mj(b,d,a.U[e],a.depth))break;a.U[c]=a.U[e];c=e;e<<=1}a.U[c]=d}
function Oj(a,b,c){var d=0;if(0!==a.ra){do{var e=a.S[a.Eb+2*d]<<8|a.S[a.Eb+2*d+1];var f=a.S[a.Gc+d];d++;if(0===e)Gj(a,f,b);else{var g=wj[f];Gj(a,g+256+1,b);var h=pj[g];0!==h&&(f-=xj[g],Fj(a,f,h));e--;g=256>e?vj[e]:vj[256+(e>>>7)];Gj(a,g,c);h=qj[g];0!==h&&(e-=yj[g],Fj(a,e,h))}}while(d<a.ra)}Gj(a,256,b)}
function Pj(a,b){var c=b.ld,d=b.Wa.Ld,e=b.Wa.rd,f=b.Wa.ie,g,h=-1;a.Ka=0;a.sb=573;for(g=0;g<f;g++)0!==c[2*g]?(a.U[++a.Ka]=h=g,a.depth[g]=0):c[2*g+1]=0;for(;2>a.Ka;){var k=a.U[++a.Ka]=2>h?++h:0;c[2*k]=1;a.depth[k]=0;a.Na--;e&&(a.yb-=d[2*k+1])}b.vb=h;for(g=a.Ka>>1;1<=g;g--)Nj(a,c,g);k=f;do g=a.U[1],a.U[1]=a.U[a.Ka--],Nj(a,c,1),d=a.U[1],a.U[--a.sb]=g,a.U[--a.sb]=d,c[2*k]=c[2*g]+c[2*d],a.depth[k]=(a.depth[g]>=a.depth[d]?a.depth[g]:a.depth[d])+1,c[2*g+1]=c[2*d+1]=k,a.U[1]=k++,Nj(a,c,1);while(2<=a.Ka);a.U[--a.sb]=
a.U[1];g=b.ld;k=b.vb;d=b.Wa.Ld;e=b.Wa.rd;f=b.Wa.ne;var m=b.Wa.me,p=b.Wa.Ee,n,v=0;for(n=0;15>=n;n++)a.Ha[n]=0;g[2*a.U[a.sb]+1]=0;for(b=a.sb+1;573>b;b++){var t=a.U[b];n=g[2*g[2*t+1]+1]+1;n>p&&(n=p,v++);g[2*t+1]=n;if(!(t>k)){a.Ha[n]++;var z=0;t>=m&&(z=f[t-m]);var D=g[2*t];a.Na+=D*(n+z);e&&(a.yb+=D*(d[2*t+1]+z))}}if(0!==v){do{for(n=p-1;0===a.Ha[n];)n--;a.Ha[n]--;a.Ha[n+1]+=2;a.Ha[p]--;v-=2}while(0<v);for(n=p;0!==n;n--)for(t=a.Ha[n];0!==t;)d=a.U[--b],d>k||(g[2*d+1]!==n&&(a.Na+=(n-g[2*d+1])*g[2*d],g[2*
d+1]=n),t--)}Ij(c,h,a.Ha)}
function Qj(a,b,c){var d,e=-1,f=b[1],g=0,h=7,k=4;0===f&&(h=138,k=3);b[2*(c+1)+1]=65535;for(d=0;d<=c;d++){var m=f;f=b[2*(d+1)+1];++g<h&&m===f||(g<k?a.ca[2*m]+=g:0!==m?(m!==e&&a.ca[2*m]++,a.ca[32]++):10>=g?a.ca[34]++:a.ca[36]++,g=0,e=m,0===f?(h=138,k=3):m===f?(h=6,k=3):(h=7,k=4))}}
function Rj(a,b,c){var d,e=-1,f=b[1],g=0,h=7,k=4;0===f&&(h=138,k=3);for(d=0;d<=c;d++){var m=f;f=b[2*(d+1)+1];if(!(++g<h&&m===f)){if(g<k){do Gj(a,m,a.ca);while(0!==--g)}else 0!==m?(m!==e&&(Gj(a,m,a.ca),g--),Gj(a,16,a.ca),Fj(a,g-3,2)):10>=g?(Gj(a,17,a.ca),Fj(a,g-3,3)):(Gj(a,18,a.ca),Fj(a,g-11,7));g=0;e=m;0===f?(h=138,k=3):m===f?(h=6,k=3):(h=7,k=4)}}}
function Sj(a){var b=4093624447,c;for(c=0;31>=c;c++,b>>>=1)if(b&1&&0!==a.ja[2*c])return 0;if(0!==a.ja[18]||0!==a.ja[20]||0!==a.ja[26])return 1;for(c=32;256>c;c++)if(0!==a.ja[2*c])return 1;return 0}
var Tj=!1;function Uj(a,b,c){a.S[a.Eb+2*a.ra]=b>>>8&255;a.S[a.Eb+2*a.ra+1]=b&255;a.S[a.Gc+a.ra]=c&255;a.ra++;0===b?a.ja[2*c]++:(a.matches++,b--,a.ja[2*(wj[c]+256+1)]++,a.gb[2*(256>b?vj[b]:vj[256+(b>>>7)])]++);return a.ra===a.Kb-1}
;function Vj(a,b){a.msg=nj[b];return b}
function Wj(a){for(var b=a.length;0<=--b;)a[b]=0}
function Xj(a){var b=a.state,c=b.pending;c>a.I&&(c=a.I);0!==c&&(K.ob(a.Lb,b.S,b.Mb,c,a.wb),a.wb+=c,b.Mb+=c,a.Sc+=c,a.I-=c,b.pending-=c,0===b.pending&&(b.Mb=0))}
function Yj(a,b){var c=0<=a.la?a.la:-1,d=a.o-a.la,e=0;if(0<a.level){2===a.D.wc&&(a.D.wc=Sj(a));Pj(a,a.jc);Pj(a,a.ec);Qj(a,a.ja,a.jc.vb);Qj(a,a.gb,a.ec.vb);Pj(a,a.cd);for(e=18;3<=e&&0===a.ca[2*sj[e]+1];e--);a.Na+=3*(e+1)+14;var f=a.Na+3+7>>>3;var g=a.yb+3+7>>>3;g<=f&&(f=g)}else f=g=d+5;if(d+4<=f&&-1!==c)Fj(a,b?1:0,3),Lj(a,c,d);else if(4===a.strategy||g===f)Fj(a,2+(b?1:0),3),Oj(a,tj,uj);else{Fj(a,4+(b?1:0),3);c=a.jc.vb+1;d=a.ec.vb+1;e+=1;Fj(a,c-257,5);Fj(a,d-1,5);Fj(a,e-4,4);for(f=0;f<e;f++)Fj(a,a.ca[2*
sj[f]+1],3);Rj(a,a.ja,c-1);Rj(a,a.gb,d-1);Oj(a,a.ja,a.gb)}Jj(a);b&&Kj(a);a.la=a.o;Xj(a.D)}
function L(a,b){a.S[a.pending++]=b}
function Zj(a,b){a.S[a.pending++]=b>>>8&255;a.S[a.pending++]=b&255}
function ak(a,b){var c=a.xd,d=a.o,e=a.na,f=a.zd,g=a.o>a.ea-262?a.o-(a.ea-262):0,h=a.window,k=a.Ya,m=a.Fa,p=a.o+258,n=h[d+e-1],v=h[d+e];a.na>=a.qd&&(c>>=2);f>a.u&&(f=a.u);do{var t=b;if(h[t+e]===v&&h[t+e-1]===n&&h[t]===h[d]&&h[++t]===h[d+1]){d+=2;for(t++;h[++d]===h[++t]&&h[++d]===h[++t]&&h[++d]===h[++t]&&h[++d]===h[++t]&&h[++d]===h[++t]&&h[++d]===h[++t]&&h[++d]===h[++t]&&h[++d]===h[++t]&&d<p;);t=258-(p-d);d=p-258;if(t>e){a.ub=b;e=t;if(t>=f)break;n=h[d+e-1];v=h[d+e]}}}while((b=m[b&k])>g&&0!==--c);return e<=
a.u?e:a.u}
function bk(a){var b=a.ea,c;do{var d=a.Rd-a.u-a.o;if(a.o>=b+(b-262)){K.ob(a.window,a.window,b,b,0);a.ub-=b;a.o-=b;a.la-=b;var e=c=a.ic;do{var f=a.head[--e];a.head[e]=f>=b?f-b:0}while(--c);e=c=b;do f=a.Fa[--e],a.Fa[e]=f>=b?f-b:0;while(--c);d+=b}if(0===a.D.ga)break;e=a.D;c=a.window;f=a.o+a.u;var g=e.ga;g>d&&(g=d);0===g?c=0:(e.ga-=g,K.ob(c,e.input,e.jb,g,f),1===e.state.wrap?e.C=hj(e.C,c,g,f):2===e.state.wrap&&(e.C=ij(e.C,c,g,f)),e.jb+=g,e.mb+=g,c=g);a.u+=c;if(3<=a.u+a.ka)for(d=a.o-a.ka,a.G=a.window[d],
a.G=(a.G<<a.Ja^a.window[d+1])&a.Ia;a.ka&&!(a.G=(a.G<<a.Ja^a.window[d+3-1])&a.Ia,a.Fa[d&a.Ya]=a.head[a.G],a.head[a.G]=d,d++,a.ka--,3>a.u+a.ka););}while(262>a.u&&0!==a.D.ga)}
function ck(a,b){for(var c;;){if(262>a.u){bk(a);if(262>a.u&&0===b)return 1;if(0===a.u)break}c=0;3<=a.u&&(a.G=(a.G<<a.Ja^a.window[a.o+3-1])&a.Ia,c=a.Fa[a.o&a.Ya]=a.head[a.G],a.head[a.G]=a.o);0!==c&&a.o-c<=a.ea-262&&(a.J=ak(a,c));if(3<=a.J)if(c=Uj(a,a.o-a.ub,a.J-3),a.u-=a.J,a.J<=a.Hc&&3<=a.u){a.J--;do a.o++,a.G=(a.G<<a.Ja^a.window[a.o+3-1])&a.Ia,a.Fa[a.o&a.Ya]=a.head[a.G],a.head[a.G]=a.o;while(0!==--a.J);a.o++}else a.o+=a.J,a.J=0,a.G=a.window[a.o],a.G=(a.G<<a.Ja^a.window[a.o+1])&a.Ia;else c=Uj(a,0,
a.window[a.o]),a.u--,a.o++;if(c&&(Yj(a,!1),0===a.D.I))return 1}a.ka=2>a.o?a.o:2;return 4===b?(Yj(a,!0),0===a.D.I?3:4):a.ra&&(Yj(a,!1),0===a.D.I)?1:2}
function dk(a,b){for(var c,d;;){if(262>a.u){bk(a);if(262>a.u&&0===b)return 1;if(0===a.u)break}c=0;3<=a.u&&(a.G=(a.G<<a.Ja^a.window[a.o+3-1])&a.Ia,c=a.Fa[a.o&a.Ya]=a.head[a.G],a.head[a.G]=a.o);a.na=a.J;a.Cd=a.ub;a.J=2;0!==c&&a.na<a.Hc&&a.o-c<=a.ea-262&&(a.J=ak(a,c),5>=a.J&&(1===a.strategy||3===a.J&&4096<a.o-a.ub)&&(a.J=2));if(3<=a.na&&a.J<=a.na){d=a.o+a.u-3;c=Uj(a,a.o-1-a.Cd,a.na-3);a.u-=a.na-1;a.na-=2;do++a.o<=d&&(a.G=(a.G<<a.Ja^a.window[a.o+3-1])&a.Ia,a.Fa[a.o&a.Ya]=a.head[a.G],a.head[a.G]=a.o);
while(0!==--a.na);a.hb=0;a.J=2;a.o++;if(c&&(Yj(a,!1),0===a.D.I))return 1}else if(a.hb){if((c=Uj(a,0,a.window[a.o-1]))&&Yj(a,!1),a.o++,a.u--,0===a.D.I)return 1}else a.hb=1,a.o++,a.u--}a.hb&&(Uj(a,0,a.window[a.o-1]),a.hb=0);a.ka=2>a.o?a.o:2;return 4===b?(Yj(a,!0),0===a.D.I?3:4):a.ra&&(Yj(a,!1),0===a.D.I)?1:2}
function ek(a,b){for(var c,d,e,f=a.window;;){if(258>=a.u){bk(a);if(258>=a.u&&0===b)return 1;if(0===a.u)break}a.J=0;if(3<=a.u&&0<a.o&&(d=a.o-1,c=f[d],c===f[++d]&&c===f[++d]&&c===f[++d])){for(e=a.o+258;c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&d<e;);a.J=258-(e-d);a.J>a.u&&(a.J=a.u)}3<=a.J?(c=Uj(a,1,a.J-3),a.u-=a.J,a.o+=a.J,a.J=0):(c=Uj(a,0,a.window[a.o]),a.u--,a.o++);if(c&&(Yj(a,!1),0===a.D.I))return 1}a.ka=0;return 4===b?(Yj(a,!0),0===a.D.I?3:4):
a.ra&&(Yj(a,!1),0===a.D.I)?1:2}
function fk(a,b){for(var c;;){if(0===a.u&&(bk(a),0===a.u)){if(0===b)return 1;break}a.J=0;c=Uj(a,0,a.window[a.o]);a.u--;a.o++;if(c&&(Yj(a,!1),0===a.D.I))return 1}a.ka=0;return 4===b?(Yj(a,!0),0===a.D.I?3:4):a.ra&&(Yj(a,!1),0===a.D.I)?1:2}
function gk(a,b,c,d,e){this.te=a;this.De=b;this.He=c;this.Ce=d;this.pe=e}
var hk;hk=[new gk(0,0,0,0,function(a,b){var c=65535;for(c>a.sa-5&&(c=a.sa-5);;){if(1>=a.u){bk(a);if(0===a.u&&0===b)return 1;if(0===a.u)break}a.o+=a.u;a.u=0;var d=a.la+c;if(0===a.o||a.o>=d)if(a.u=a.o-d,a.o=d,Yj(a,!1),0===a.D.I)return 1;if(a.o-a.la>=a.ea-262&&(Yj(a,!1),0===a.D.I))return 1}a.ka=0;if(4===b)return Yj(a,!0),0===a.D.I?3:4;a.o>a.la&&Yj(a,!1);return 1}),
new gk(4,4,8,4,ck),new gk(4,5,16,8,ck),new gk(4,6,32,32,ck),new gk(4,4,16,16,dk),new gk(8,16,32,32,dk),new gk(8,16,128,128,dk),new gk(8,32,128,256,dk),new gk(32,128,258,1024,dk),new gk(32,258,258,4096,dk)];
function ik(){this.D=null;this.status=0;this.S=null;this.wrap=this.pending=this.Mb=this.sa=0;this.B=null;this.va=0;this.method=8;this.tb=-1;this.Ya=this.Uc=this.ea=0;this.window=null;this.Rd=0;this.head=this.Fa=null;this.zd=this.qd=this.strategy=this.level=this.Hc=this.xd=this.na=this.u=this.ub=this.o=this.hb=this.Cd=this.J=this.la=this.Ja=this.Ia=this.Cc=this.ic=this.G=0;this.ja=new K.Ga(1146);this.gb=new K.Ga(122);this.ca=new K.Ga(78);Wj(this.ja);Wj(this.gb);Wj(this.ca);this.cd=this.ec=this.jc=
null;this.Ha=new K.Ga(16);this.U=new K.Ga(573);Wj(this.U);this.sb=this.Ka=0;this.depth=new K.Ga(573);Wj(this.depth);this.ba=this.ha=this.ka=this.matches=this.yb=this.Na=this.Eb=this.ra=this.Kb=this.Gc=0}
function jk(a,b){if(!a||!a.state||5<b||0>b)return a?Vj(a,-2):-2;var c=a.state;if(!a.Lb||!a.input&&0!==a.ga||666===c.status&&4!==b)return Vj(a,0===a.I?-5:-2);c.D=a;var d=c.tb;c.tb=b;if(42===c.status)if(2===c.wrap)a.C=0,L(c,31),L(c,139),L(c,8),c.B?(L(c,(c.B.text?1:0)+(c.B.Ta?2:0)+(c.B.Sa?4:0)+(c.B.name?8:0)+(c.B.comment?16:0)),L(c,c.B.time&255),L(c,c.B.time>>8&255),L(c,c.B.time>>16&255),L(c,c.B.time>>24&255),L(c,9===c.level?2:2<=c.strategy||2>c.level?4:0),L(c,c.B.os&255),c.B.Sa&&c.B.Sa.length&&(L(c,
c.B.Sa.length&255),L(c,c.B.Sa.length>>8&255)),c.B.Ta&&(a.C=ij(a.C,c.S,c.pending,0)),c.va=0,c.status=69):(L(c,0),L(c,0),L(c,0),L(c,0),L(c,0),L(c,9===c.level?2:2<=c.strategy||2>c.level?4:0),L(c,3),c.status=113);else{var e=8+(c.Uc-8<<4)<<8;e|=(2<=c.strategy||2>c.level?0:6>c.level?1:6===c.level?2:3)<<6;0!==c.o&&(e|=32);c.status=113;Zj(c,e+(31-e%31));0!==c.o&&(Zj(c,a.C>>>16),Zj(c,a.C&65535));a.C=1}if(69===c.status)if(c.B.Sa){for(e=c.pending;c.va<(c.B.Sa.length&65535)&&(c.pending!==c.sa||(c.B.Ta&&c.pending>
e&&(a.C=ij(a.C,c.S,c.pending-e,e)),Xj(a),e=c.pending,c.pending!==c.sa));)L(c,c.B.Sa[c.va]&255),c.va++;c.B.Ta&&c.pending>e&&(a.C=ij(a.C,c.S,c.pending-e,e));c.va===c.B.Sa.length&&(c.va=0,c.status=73)}else c.status=73;if(73===c.status)if(c.B.name){e=c.pending;do{if(c.pending===c.sa&&(c.B.Ta&&c.pending>e&&(a.C=ij(a.C,c.S,c.pending-e,e)),Xj(a),e=c.pending,c.pending===c.sa)){var f=1;break}f=c.va<c.B.name.length?c.B.name.charCodeAt(c.va++)&255:0;L(c,f)}while(0!==f);c.B.Ta&&c.pending>e&&(a.C=ij(a.C,c.S,c.pending-
e,e));0===f&&(c.va=0,c.status=91)}else c.status=91;if(91===c.status)if(c.B.comment){e=c.pending;do{if(c.pending===c.sa&&(c.B.Ta&&c.pending>e&&(a.C=ij(a.C,c.S,c.pending-e,e)),Xj(a),e=c.pending,c.pending===c.sa)){f=1;break}f=c.va<c.B.comment.length?c.B.comment.charCodeAt(c.va++)&255:0;L(c,f)}while(0!==f);c.B.Ta&&c.pending>e&&(a.C=ij(a.C,c.S,c.pending-e,e));0===f&&(c.status=103)}else c.status=103;103===c.status&&(c.B.Ta?(c.pending+2>c.sa&&Xj(a),c.pending+2<=c.sa&&(L(c,a.C&255),L(c,a.C>>8&255),a.C=0,
c.status=113)):c.status=113);if(0!==c.pending){if(Xj(a),0===a.I)return c.tb=-1,0}else if(0===a.ga&&(b<<1)-(4<b?9:0)<=(d<<1)-(4<d?9:0)&&4!==b)return Vj(a,-5);if(666===c.status&&0!==a.ga)return Vj(a,-5);if(0!==a.ga||0!==c.u||0!==b&&666!==c.status){d=2===c.strategy?fk(c,b):3===c.strategy?ek(c,b):hk[c.level].pe(c,b);if(3===d||4===d)c.status=666;if(1===d||3===d)return 0===a.I&&(c.tb=-1),0;if(2===d&&(1===b?(Fj(c,2,3),Gj(c,256,tj),16===c.ba?(Ej(c,c.ha),c.ha=0,c.ba=0):8<=c.ba&&(c.S[c.pending++]=c.ha&255,
c.ha>>=8,c.ba-=8)):5!==b&&(Fj(c,0,3),Lj(c,0,0),3===b&&(Wj(c.head),0===c.u&&(c.o=0,c.la=0,c.ka=0))),Xj(a),0===a.I))return c.tb=-1,0}if(4!==b)return 0;if(0>=c.wrap)return 1;2===c.wrap?(L(c,a.C&255),L(c,a.C>>8&255),L(c,a.C>>16&255),L(c,a.C>>24&255),L(c,a.mb&255),L(c,a.mb>>8&255),L(c,a.mb>>16&255),L(c,a.mb>>24&255)):(Zj(c,a.C>>>16),Zj(c,a.C&65535));Xj(a);0<c.wrap&&(c.wrap=-c.wrap);return 0!==c.pending?0:1}
;var kk={};kk=function(){this.input=null;this.mb=this.ga=this.jb=0;this.Lb=null;this.Sc=this.I=this.wb=0;this.msg="";this.state=null;this.wc=2;this.C=0};var lk=Object.prototype.toString;
function mk(a){if(!(this instanceof mk))return new mk(a);a=this.options=K.assign({level:-1,method:8,chunkSize:16384,Za:15,Fe:8,strategy:0,K:""},a||{});a.raw&&0<a.Za?a.Za=-a.Za:a.ue&&0<a.Za&&16>a.Za&&(a.Za+=16);this.err=0;this.msg="";this.ended=!1;this.chunks=[];this.D=new kk;this.D.I=0;var b=this.D;var c=a.level,d=a.method,e=a.Za,f=a.Fe,g=a.strategy;if(b){var h=1;-1===c&&(c=6);0>e?(h=0,e=-e):15<e&&(h=2,e-=16);if(1>f||9<f||8!==d||8>e||15<e||0>c||9<c||0>g||4<g)b=Vj(b,-2);else{8===e&&(e=9);var k=new ik;
b.state=k;k.D=b;k.wrap=h;k.B=null;k.Uc=e;k.ea=1<<k.Uc;k.Ya=k.ea-1;k.Cc=f+7;k.ic=1<<k.Cc;k.Ia=k.ic-1;k.Ja=~~((k.Cc+3-1)/3);k.window=new K.bb(2*k.ea);k.head=new K.Ga(k.ic);k.Fa=new K.Ga(k.ea);k.Kb=1<<f+6;k.sa=4*k.Kb;k.S=new K.bb(k.sa);k.Eb=1*k.Kb;k.Gc=3*k.Kb;k.level=c;k.strategy=g;k.method=d;if(b&&b.state){b.mb=b.Sc=0;b.wc=2;c=b.state;c.pending=0;c.Mb=0;0>c.wrap&&(c.wrap=-c.wrap);c.status=c.wrap?42:113;b.C=2===c.wrap?0:1;c.tb=0;if(!Tj){d=Array(16);for(f=g=0;28>f;f++)for(xj[f]=g,e=0;e<1<<pj[f];e++)wj[g++]=
f;wj[g-1]=f;for(f=g=0;16>f;f++)for(yj[f]=g,e=0;e<1<<qj[f];e++)vj[g++]=f;for(g>>=7;30>f;f++)for(yj[f]=g<<7,e=0;e<1<<qj[f]-7;e++)vj[256+g++]=f;for(e=0;15>=e;e++)d[e]=0;for(e=0;143>=e;)tj[2*e+1]=8,e++,d[8]++;for(;255>=e;)tj[2*e+1]=9,e++,d[9]++;for(;279>=e;)tj[2*e+1]=7,e++,d[7]++;for(;287>=e;)tj[2*e+1]=8,e++,d[8]++;Ij(tj,287,d);for(e=0;30>e;e++)uj[2*e+1]=5,uj[2*e]=Hj(e,5);Aj=new zj(tj,pj,257,286,15);Bj=new zj(uj,qj,0,30,15);Cj=new zj([],rj,0,19,7);Tj=!0}c.jc=new Dj(c.ja,Aj);c.ec=new Dj(c.gb,Bj);c.cd=
new Dj(c.ca,Cj);c.ha=0;c.ba=0;Jj(c);c=0}else c=Vj(b,-2);0===c&&(b=b.state,b.Rd=2*b.ea,Wj(b.head),b.Hc=hk[b.level].De,b.qd=hk[b.level].te,b.zd=hk[b.level].He,b.xd=hk[b.level].Ce,b.o=0,b.la=0,b.u=0,b.ka=0,b.J=b.na=2,b.hb=0,b.G=0);b=c}}else b=-2;if(0!==b)throw Error(nj[b]);a.header&&(b=this.D)&&b.state&&2===b.state.wrap&&(b.state.B=a.header);if(a.Fb){var m;"string"===typeof a.Fb?m=gj(a.Fb):"[object ArrayBuffer]"===lk.call(a.Fb)?m=new Uint8Array(a.Fb):m=a.Fb;a=this.D;f=m;g=f.length;if(a&&a.state)if(m=
a.state,b=m.wrap,2===b||1===b&&42!==m.status||m.u)b=-2;else{1===b&&(a.C=hj(a.C,f,g,0));m.wrap=0;g>=m.ea&&(0===b&&(Wj(m.head),m.o=0,m.la=0,m.ka=0),c=new K.bb(m.ea),K.ob(c,f,g-m.ea,m.ea,0),f=c,g=m.ea);c=a.ga;d=a.jb;e=a.input;a.ga=g;a.jb=0;a.input=f;for(bk(m);3<=m.u;){f=m.o;g=m.u-2;do m.G=(m.G<<m.Ja^m.window[f+3-1])&m.Ia,m.Fa[f&m.Ya]=m.head[m.G],m.head[m.G]=f,f++;while(--g);m.o=f;m.u=2;bk(m)}m.o+=m.u;m.la=m.o;m.ka=m.u;m.u=0;m.J=m.na=2;m.hb=0;a.jb=d;a.input=e;a.ga=c;m.wrap=b;b=0}else b=-2;if(0!==b)throw Error(nj[b]);
this.Ct=!0}}
mk.prototype.push=function(a,b){var c=this.D,d=this.options.chunkSize;if(this.ended)return!1;var e=b===~~b?b:!0===b?4:0;"string"===typeof a?c.input=gj(a):"[object ArrayBuffer]"===lk.call(a)?c.input=new Uint8Array(a):c.input=a;c.jb=0;c.ga=c.input.length;do{0===c.I&&(c.Lb=new K.bb(d),c.wb=0,c.I=d);a=jk(c,e);if(1!==a&&0!==a)return nk(this,a),this.ended=!0,!1;if(0===c.I||0===c.ga&&(4===e||2===e))if("string"===this.options.K){var f=K.Rc(c.Lb,c.wb);b=f;f=f.length;if(65537>f&&(b.subarray&&dj||!b.subarray))b=
String.fromCharCode.apply(null,K.Rc(b,f));else{for(var g="",h=0;h<f;h++)g+=String.fromCharCode(b[h]);b=g}this.chunks.push(b)}else b=K.Rc(c.Lb,c.wb),this.chunks.push(b)}while((0<c.ga||0===c.I)&&1!==a);if(4===e)return(c=this.D)&&c.state?(d=c.state.status,42!==d&&69!==d&&73!==d&&91!==d&&103!==d&&113!==d&&666!==d?a=Vj(c,-2):(c.state=null,a=113===d?Vj(c,-3):0)):a=-2,nk(this,a),this.ended=!0,0===a;2===e&&(nk(this,0),c.I=0);return!0};
function nk(a,b){0===b&&(a.result="string"===a.options.K?a.chunks.join(""):K.nd(a.chunks));a.chunks=[];a.err=b;a.msg=a.D.msg}
function ok(a){var b=b||{};b.ue=!0;b=new mk(b);b.push(a,!0);if(b.err)throw b.msg||nj[b.err];return b.result}
;function pk(a){return Jb(null===a?"null":void 0===a?"undefined":a)}
;function qk(a){this.name=a}
;var rk=new qk("rawColdConfigGroup");var sk=new qk("rawHotConfigGroup");function tk(a){H.call(this,a)}
u(tk,H);function uk(a){H.call(this,a)}
u(uk,H);function vk(a){H.call(this,a)}
u(vk,H);function wk(a){H.call(this,a,-1,xk)}
u(wk,H);var xk=[2];function yk(a){H.call(this,a,-1,zk)}
u(yk,H);yk.prototype.getPlayerType=function(){return Id(this,36)};
yk.prototype.setHomeGroupInfo=function(a){return G(this,wk,81,a)};
yk.prototype.clearLocationPlayabilityToken=function(){return E(this,89,void 0,!1)};
var zk=[9,66,24,32,86,100,101];function Ak(a){H.call(this,a)}
u(Ak,H);Ak.prototype.getKey=function(){return $d(this,1)};
Ak.prototype.getValue=function(){return $d(this,2===Rd(this,Bk)?2:-1)};
var Bk=[2,3,4,5,6];function Ck(a){H.call(this,a,-1,Dk)}
u(Ck,H);var Dk=[15,26,28];function Ek(a){H.call(this,a,-1,Fk)}
u(Ek,H);var Fk=[5];function Gk(a){H.call(this,a)}
u(Gk,H);function Hk(a){H.call(this,a,-1,Ik)}
u(Hk,H);Hk.prototype.setSafetyMode=function(a){return E(this,5,a)};
var Ik=[12];function Jk(a){H.call(this,a,-1,Kk)}
u(Jk,H);Jk.prototype.l=function(a){return G(this,yk,1,a)};
var Kk=[12];var Lk=new qk("continuationCommand");var Mk=new qk("webCommandMetadata");var Nk=new qk("signalServiceEndpoint");var Ok={ik:"EMBEDDED_PLAYER_MODE_UNKNOWN",fk:"EMBEDDED_PLAYER_MODE_DEFAULT",hk:"EMBEDDED_PLAYER_MODE_PFP",gk:"EMBEDDED_PLAYER_MODE_PFL"};var Pk=new qk("feedbackEndpoint");var Qk={Ys:"WEB_DISPLAY_MODE_UNKNOWN",Us:"WEB_DISPLAY_MODE_BROWSER",Ws:"WEB_DISPLAY_MODE_MINIMAL_UI",Xs:"WEB_DISPLAY_MODE_STANDALONE",Vs:"WEB_DISPLAY_MODE_FULLSCREEN"};function Rk(a){H.call(this,a)}
u(Rk,H);Rk.prototype.getKey=function(){return $d(this,1)};
Rk.prototype.getValue=function(){return $d(this,2)};function Sk(a){H.call(this,a,-1,Tk)}
u(Sk,H);var Tk=[4,5];function Uk(a){H.call(this,a)}
u(Uk,H);function Vk(a){H.call(this,a)}
u(Vk,H);var Wk=[2,3,4];function ql(a){H.call(this,a)}
u(ql,H);ql.prototype.getMessage=function(){return $d(this,1)};function rl(a){H.call(this,a)}
u(rl,H);function sl(a){H.call(this,a)}
u(sl,H);function tl(a){H.call(this,a,-1,ul)}
u(tl,H);var ul=[10,17];function vl(a){H.call(this,a)}
u(vl,H);function wl(a){H.call(this,a)}
u(wl,H);function xl(a){H.call(this,a)}
u(xl,H);function yl(a){H.call(this,a)}
u(yl,H);function zl(a){H.call(this,a)}
u(zl,H);function Al(a){H.call(this,a,-1,Bl)}
u(Al,H);Al.prototype.getVideoData=function(){return Sd(this,zl,15)};
var Bl=[4];function Cl(a){H.call(this,a)}
u(Cl,H);function Dl(a,b){G(a,xl,1,b)}
;function El(a){H.call(this,a)}
u(El,H);function Fl(a,b){return G(a,xl,1,b)}
El.prototype.h=function(a){return E(this,2,a)};function Gl(a){H.call(this,a,-1,Hl)}
u(Gl,H);Gl.prototype.h=function(a){return E(this,1,a)};
function Il(a,b){return G(a,xl,2,b)}
var Hl=[3];function Jl(a){H.call(this,a)}
u(Jl,H);Jl.prototype.h=function(a){return E(this,1,a)};function Kl(a){H.call(this,a)}
u(Kl,H);Kl.prototype.h=function(a){return E(this,1,a)};function Ll(a){H.call(this,a)}
u(Ll,H);Ll.prototype.h=function(a){return E(this,1,a)};function Ml(a){H.call(this,a)}
u(Ml,H);Ml.prototype.h=function(a){return E(this,1,a)};function Nl(a){H.call(this,a)}
u(Nl,H);function Ol(a){H.call(this,a)}
u(Ol,H);function Pl(a){var b=new Ol;return E(b,1,a)}
Ol.prototype.getId=function(){return $d(this,2)};
function Ql(a,b){return E(a,2,b)}
;function Rl(a){H.call(this,a)}
u(Rl,H);function Sl(a){H.call(this,a,-1,Tl)}
u(Sl,H);Sl.prototype.getPlayerType=function(){return Zd(Id(this,7),0)};
Sl.prototype.setVideoId=function(a){return E(this,19,a)};
function Ul(a,b){Yd(a,68,Ol,b)}
var Tl=[83,68];function Vl(a){H.call(this,a)}
u(Vl,H);function Wl(a){H.call(this,a)}
u(Wl,H);function Xl(a){H.call(this,a)}
u(Xl,H);function Yl(a){H.call(this,a,459)}
u(Yl,H);
var Zl=[2,3,5,6,7,11,13,20,21,22,23,24,28,32,37,45,59,72,73,74,76,78,79,80,85,91,97,100,102,105,111,117,119,126,127,136,146,148,151,156,157,158,159,163,164,168,176,177,178,179,184,188,189,190,191,193,194,195,196,197,198,199,200,201,202,203,204,205,206,208,209,215,219,222,225,226,227,229,232,233,234,240,241,244,247,248,249,251,254,255,256,257,258,259,260,261,266,270,272,278,288,291,293,300,304,308,309,310,311,313,314,319,320,321,323,324,327,328,330,331,332,334,337,338,340,344,348,350,351,352,353,354,
355,356,357,358,361,363,364,368,369,370,373,374,375,378,380,381,383,388,389,402,403,410,411,412,413,414,415,416,417,418,423,424,425,426,427,429,430,431,439,441,444,448,458];var $l={ol:0,Tk:1,Zk:2,al:4,kl:8,bl:16,dl:32,nl:64,ml:128,Vk:256,Xk:512,il:1024,Wk:2048,Yk:4096,Uk:8192,fl:16384,ll:32768,jl:65536};function am(a){H.call(this,a)}
u(am,H);function bm(a){H.call(this,a)}
u(bm,H);bm.prototype.setVideoId=function(a){return Qd(this,1,cm,a)};
bm.prototype.getPlaylistId=function(){var a=2===Rd(this,cm)?2:-1;return Id(this,a)};
var cm=[1,2];function dm(a){H.call(this,a,-1,em)}
u(dm,H);var em=[3];var fm=new qk("webPlayerShareEntityServiceEndpoint");var gm=new qk("playlistEditEndpoint");var hm=new qk("modifyChannelNotificationPreferenceEndpoint");var im=new qk("unsubscribeEndpoint");var jm=new qk("subscribeEndpoint");function km(a,b){1<b.length?a[b[0]]=b[1]:1===b.length&&Object.assign(a,b[0])}
;var lm=y.window,mm,nm,om=(null==lm?void 0:null==(mm=lm.yt)?void 0:mm.config_)||(null==lm?void 0:null==(nm=lm.ytcfg)?void 0:nm.data_)||{};A("yt.config_",om);function pm(){km(om,arguments)}
function M(a,b){return a in om?om[a]:b}
function qm(){var a=om.EXPERIMENT_FLAGS;return a?a.web_disable_gel_stp_ecatcher_killswitch:void 0}
;function P(a){a=rm(a);return"string"===typeof a&&"false"===a?!1:!!a}
function sm(a,b){a=rm(a);return void 0===a&&void 0!==b?b:Number(a||0)}
function tm(){return M("EXPERIMENTS_TOKEN","")}
function rm(a){var b=M("EXPERIMENTS_FORCED_FLAGS",{})||{};return void 0!==b[a]?b[a]:M("EXPERIMENT_FLAGS",{})[a]}
function um(){for(var a=[],b=M("EXPERIMENTS_FORCED_FLAGS",{}),c=r(Object.keys(b)),d=c.next();!d.done;d=c.next())d=d.value,a.push({key:d,value:String(b[d])});c=M("EXPERIMENT_FLAGS",{});var e=r(Object.keys(c));for(d=e.next();!d.done;d=e.next())d=d.value,d.startsWith("force_")&&void 0===b[d]&&a.push({key:d,value:String(c[d])});return a}
;function vm(){var a=wm;B("yt.ads.biscotti.getId_")||A("yt.ads.biscotti.getId_",a)}
function xm(a){A("yt.ads.biscotti.lastId_",a)}
;var ym=[];function zm(a){ym.forEach(function(b){return b(a)})}
function Am(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){Bm(b)}}:a}
function Bm(a,b,c,d){var e=B("yt.logging.errors.log");e?e(a,"ERROR",b,c,d):(e=M("ERRORS",[]),e.push([a,"ERROR",b,c,d]),pm("ERRORS",e));zm(a)}
function Cm(a,b,c,d){var e=B("yt.logging.errors.log");e?e(a,"WARNING",b,c,d):(e=M("ERRORS",[]),e.push([a,"WARNING",b,c,d]),pm("ERRORS",e))}
;var Dm=/^[\w.]*$/,Em={q:!0,search_query:!0};function Fm(a,b){b=a.split(b);for(var c={},d=0,e=b.length;d<e;d++){var f=b[d].split("=");if(1==f.length&&f[0]||2==f.length)try{var g=Gm(f[0]||""),h=Gm(f[1]||"");g in c?Array.isArray(c[g])?mb(c[g],h):c[g]=[c[g],h]:c[g]=h}catch(n){var k=n,m=f[0],p=String(Fm);k.args=[{key:m,value:f[1],query:a,method:Hm==p?"unchanged":p}];Em.hasOwnProperty(m)||Cm(k)}}return c}
var Hm=String(Fm);function Im(a){var b=[];nb(a,function(c,d){var e=encodeURIComponent(String(d)),f;Array.isArray(c)?f=c:f=[c];gb(f,function(g){""==g?b.push(e):b.push(e+"="+encodeURIComponent(String(g)))})});
return b.join("&")}
function Jm(a){"?"==a.charAt(0)&&(a=a.substr(1));return Fm(a,"&")}
function Km(a){return-1!=a.indexOf("?")?(a=(a||"").split("#")[0],a=a.split("?",2),Jm(1<a.length?a[1]:a[0])):{}}
function Lm(a,b,c){var d=a.split("#",2);a=d[0];d=1<d.length?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=Jm(e[1]||"");for(var f in b)!c&&null!==e&&f in e||(e[f]=b[f]);return wc(a,e)+d}
function Mm(a){if(!b)var b=window.location.href;var c=mc(1,a),d=pc(a);c&&d?(a=a.match(kc),b=b.match(kc),a=a[3]==b[3]&&a[1]==b[1]&&a[4]==b[4]):a=d?pc(b)==d&&(Number(mc(4,b))||null)==(Number(mc(4,a))||null):!0;return a}
function Gm(a){return a&&a.match(Dm)?a:decodeURIComponent(a.replace(/\+/g," "))}
;function Nm(a){var b=Om;a=void 0===a?B("yt.ads.biscotti.lastId_")||"":a;var c=Object,d=c.assign,e={};e.dt=ei;e.flash="0";a:{try{var f=b.h.top.location.href}catch(ha){f=2;break a}f=f?f===b.i.location.href?0:1:2}e=(e.frm=f,e);try{e.u_tz=-(new Date).getTimezoneOffset();var g=void 0===g?Lh:g;try{var h=g.history.length}catch(ha){h=0}e.u_his=h;var k;e.u_h=null==(k=Lh.screen)?void 0:k.height;var m;e.u_w=null==(m=Lh.screen)?void 0:m.width;var p;e.u_ah=null==(p=Lh.screen)?void 0:p.availHeight;var n;e.u_aw=
null==(n=Lh.screen)?void 0:n.availWidth;var v;e.u_cd=null==(v=Lh.screen)?void 0:v.colorDepth}catch(ha){}h=b.h;try{var t=h.screenX;var z=h.screenY}catch(ha){}try{var D=h.outerWidth;var F=h.outerHeight}catch(ha){}try{var N=h.innerWidth;var O=h.innerHeight}catch(ha){}try{var T=h.screenLeft;var aa=h.screenTop}catch(ha){}try{N=h.innerWidth,O=h.innerHeight}catch(ha){}try{var W=h.screen.availWidth;var xb=h.screen.availTop}catch(ha){}t=[T,aa,t,z,W,xb,D,F,N,O];try{var $a=(b.h.top||window).document,qa="CSS1Compat"==
$a.compatMode?$a.documentElement:$a.body;var I=(new lf(qa.clientWidth,qa.clientHeight)).round()}catch(ha){I=new lf(-12245933,-12245933)}$a=I;I={};var oa=void 0===oa?y:oa;qa=new ni;oa.SVGElement&&oa.document.createElementNS&&qa.set(0);z=bi();z["allow-top-navigation-by-user-activation"]&&qa.set(1);z["allow-popups-to-escape-sandbox"]&&qa.set(2);oa.crypto&&oa.crypto.subtle&&qa.set(3);oa.TextDecoder&&oa.TextEncoder&&qa.set(4);oa=oi(qa);I.bc=oa;I.bih=$a.height;I.biw=$a.width;I.brdim=t.join();b=b.i;b=(I.vis=
b.prerendering?3:{visible:1,hidden:2,prerender:3,preview:4,unloaded:5}[b.visibilityState||b.webkitVisibilityState||b.mozVisibilityState||""]||0,I.wgl=!!Lh.WebGLRenderingContext,I);c=d.call(c,e,b);c.ca_type="image";a&&(c.bid=a);return c}
var Om=new function(){var a=window.document;this.h=window;this.i=a};
A("yt.ads_.signals_.getAdSignalsString",function(a){return Im(Nm(a))});Date.now();var Pm="XMLHttpRequest"in y?function(){return new XMLHttpRequest}:null;
function Qm(){if(!Pm)return null;var a=Pm();return"open"in a?a:null}
function Rm(a){switch(a&&"status"in a?a.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:return!0;default:return!1}}
;function Sm(a,b){"function"===typeof a&&(a=Am(a));return window.setTimeout(a,b)}
;var Tm={Authorization:"AUTHORIZATION","X-Goog-EOM-Visitor-Id":"EOM_VISITOR_DATA","X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-Youtube-Domain-Admin-State":"DOMAIN_ADMIN_STATE","X-Youtube-Chrome-Connected":"CHROME_CONNECTED_HEADER","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-YouTube-Delegation-Context":"INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT","X-YouTube-Device":"DEVICE","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL",
"X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM"},Um="app debugcss debugjs expflag force_ad_params force_ad_encrypted force_viral_ad_response_params forced_experiments innertube_snapshots innertube_goldens internalcountrycode internalipoverride absolute_experiments conditional_experiments sbb sr_bns_address".split(" ").concat(ja(fi)),Vm=!1;
function Wm(a,b){b=void 0===b?{}:b;var c=Mm(a),d=P("web_ajax_ignore_global_headers_if_set"),e;for(e in Tm){var f=M(Tm[e]);"X-Goog-Visitor-Id"!==e||f||(f=M("VISITOR_DATA"));!f||!c&&pc(a)||d&&void 0!==b[e]||(b[e]=f)}"X-Goog-EOM-Visitor-Id"in b&&"X-Goog-Visitor-Id"in b&&delete b["X-Goog-Visitor-Id"];if(c||!pc(a))b["X-YouTube-Utc-Offset"]=String(-(new Date).getTimezoneOffset());if(c||!pc(a)){try{var g=(new Intl.DateTimeFormat).resolvedOptions().timeZone}catch(h){}g&&(b["X-YouTube-Time-Zone"]=g)}document.location.hostname.endsWith("youtubeeducation.com")||
!c&&pc(a)||(b["X-YouTube-Ad-Signals"]=Im(Nm()));return b}
function Xm(a){var b=window.location.search,c=pc(a);P("debug_handle_relative_url_for_query_forward_killswitch")||!c&&Mm(a)&&(c=document.location.hostname);var d=lc(mc(5,a));d=(c=c&&(c.endsWith("youtube.com")||c.endsWith("youtube-nocookie.com")))&&d&&d.startsWith("/api/");if(!c||d)return a;var e=Jm(b),f={};gb(Um,function(g){e[g]&&(f[g]=e[g])});
return Lm(a,f||{},!1)}
function Ym(a,b){var c=b.format||"JSON";a=Zm(a,b);var d=$m(a,b),e=!1,f=an(a,function(k){if(!e){e=!0;h&&window.clearTimeout(h);var m=Rm(k),p=null,n=400<=k.status&&500>k.status,v=500<=k.status&&600>k.status;if(m||n||v)p=bn(a,c,k,b.convertToSafeHtml);if(m)a:if(k&&204==k.status)m=!0;else{switch(c){case "XML":m=0==parseInt(p&&p.return_code,10);break a;case "RAW":m=!0;break a}m=!!p}p=p||{};n=b.context||y;m?b.onSuccess&&b.onSuccess.call(n,k,p):b.onError&&b.onError.call(n,k,p);b.onFinish&&b.onFinish.call(n,
k,p)}},b.method,d,b.headers,b.responseType,b.withCredentials);
d=b.timeout||0;if(b.onTimeout&&0<d){var g=b.onTimeout;var h=Sm(function(){e||(e=!0,f.abort(),window.clearTimeout(h),g.call(b.context||y,f))},d)}return f}
function Zm(a,b){b.includeDomain&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var c=M("XSRF_FIELD_NAME");if(b=b.urlParams)b[c]&&delete b[c],a=Lm(a,b||{},!0);return a}
function $m(a,b){var c=M("XSRF_FIELD_NAME"),d=M("XSRF_TOKEN"),e=b.postBody||"",f=b.postParams,g=M("XSRF_FIELD_NAME"),h;b.headers&&(h=b.headers["Content-Type"]);b.excludeXsrf||pc(a)&&!b.withCredentials&&pc(a)!=document.location.hostname||"POST"!=b.method||h&&"application/x-www-form-urlencoded"!=h||b.postParams&&b.postParams[g]||(f||(f={}),f[c]=d);(P("ajax_parse_query_data_only_when_filled")&&f&&0<Object.keys(f).length||f)&&"string"===typeof e&&(e=Jm(e),yb(e,f),e=b.postBodyFormat&&"JSON"==b.postBodyFormat?
JSON.stringify(e):uc(e));f=e||f&&!qb(f);!Vm&&f&&"POST"!=b.method&&(Vm=!0,Bm(Error("AJAX request with postData should use POST")));return e}
function bn(a,b,c,d){var e=null;switch(b){case "JSON":try{var f=c.responseText}catch(g){throw d=Error("Error reading responseText"),d.params=a,Cm(d),g;}a=c.getResponseHeader("Content-Type")||"";f&&0<=a.indexOf("json")&&(")]}'\n"===f.substring(0,5)&&(f=f.substring(5)),e=JSON.parse(f));break;case "XML":if(a=(a=c.responseXML)?cn(a):null)e={},gb(a.getElementsByTagName("*"),function(g){e[g.tagName]=dn(g)})}d&&en(e);
return e}
function en(a){if(Ra(a))for(var b in a){var c;(c="html_content"==b)||(c=b.length-5,c=0<=c&&b.indexOf("_html",c)==c);if(c){c=b;var d=a[b],e=Ab();d=e?e.createHTML(d):d;a[c]=new dc(d)}else en(a[b])}}
function cn(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null}
function dn(a){var b="";gb(a.childNodes,function(c){b+=c.nodeValue});
return b}
function fn(a,b){b.method="POST";b.postParams||(b.postParams={});return Ym(a,b)}
function an(a,b,c,d,e,f,g){function h(){4==(k&&"readyState"in k?k.readyState:0)&&b&&Am(b)(k)}
c=void 0===c?"GET":c;d=void 0===d?"":d;var k=Qm();if(!k)return null;"onloadend"in k?k.addEventListener("loadend",h,!1):k.onreadystatechange=h;P("debug_forward_web_query_parameters")&&(a=Xm(a));k.open(c,a,!0);f&&(k.responseType=f);g&&(k.withCredentials=!0);c="POST"==c&&(void 0===window.FormData||!(d instanceof FormData));if(e=Wm(a,e))for(var m in e)k.setRequestHeader(m,e[m]),"content-type"==m.toLowerCase()&&(c=!1);c&&k.setRequestHeader("Content-Type","application/x-www-form-urlencoded");k.send(d);
return k}
;var gn=Yc||Zc;function hn(a){var b=Ub();return b?0<=b.toLowerCase().indexOf(a):!1}
;var jn=[{Ic:function(a){return"Cannot read property '"+a.key+"'"},
lc:{Error:[{regexp:/(Permission denied) to access property "([^']+)"/,groups:["reason","key"]}],TypeError:[{regexp:/Cannot read property '([^']+)' of (null|undefined)/,groups:["key","value"]},{regexp:/\u65e0\u6cd5\u83b7\u53d6\u672a\u5b9a\u4e49\u6216 (null|undefined) \u5f15\u7528\u7684\u5c5e\u6027\u201c([^\u201d]+)\u201d/,groups:["value","key"]},{regexp:/\uc815\uc758\ub418\uc9c0 \uc54a\uc74c \ub610\ub294 (null|undefined) \ucc38\uc870\uc778 '([^']+)' \uc18d\uc131\uc744 \uac00\uc838\uc62c \uc218 \uc5c6\uc2b5\ub2c8\ub2e4./,
groups:["value","key"]},{regexp:/No se puede obtener la propiedad '([^']+)' de referencia nula o sin definir/,groups:["key"]},{regexp:/Unable to get property '([^']+)' of (undefined or null) reference/,groups:["key","value"]},{regexp:/(null) is not an object \(evaluating '(?:([^.]+)\.)?([^']+)'\)/,groups:["value","base","key"]}]}},{Ic:function(a){return"Cannot call '"+a.key+"'"},
lc:{TypeError:[{regexp:/(?:([^ ]+)?\.)?([^ ]+) is not a function/,groups:["base","key"]},{regexp:/([^ ]+) called on (null or undefined)/,groups:["key","value"]},{regexp:/Object (.*) has no method '([^ ]+)'/,groups:["base","key"]},{regexp:/Object doesn't support property or method '([^ ]+)'/,groups:["key"]},{regexp:/\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f '([^']+)' \u30d7\u30ed\u30d1\u30c6\u30a3\u307e\u305f\u306f\u30e1\u30bd\u30c3\u30c9\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u305b\u3093/,
groups:["key"]},{regexp:/\uac1c\uccb4\uac00 '([^']+)' \uc18d\uc131\uc774\ub098 \uba54\uc11c\ub4dc\ub97c \uc9c0\uc6d0\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4./,groups:["key"]}]}},{Ic:function(a){return a.key+" is not defined"},
lc:{ReferenceError:[{regexp:/(.*) is not defined/,groups:["key"]},{regexp:/Can't find variable: (.*)/,groups:["key"]}]}}];var ln={Va:[],Ra:[{callback:kn,weight:500}]};function kn(a){if("JavaException"===a.name)return!0;a=a.stack;return a.includes("chrome://")||a.includes("chrome-extension://")||a.includes("moz-extension://")}
;function mn(){this.Ra=[];this.Va=[]}
var nn;function on(){if(!nn){var a=nn=new mn;a.Va.length=0;a.Ra.length=0;ln.Va&&a.Va.push.apply(a.Va,ln.Va);ln.Ra&&a.Ra.push.apply(a.Ra,ln.Ra)}return nn}
;var pn=new Ji;function qn(a){function b(){return a.charCodeAt(d++)}
var c=a.length,d=0;do{var e=rn(b);if(Infinity===e)break;var f=e>>3;switch(e&7){case 0:e=rn(b);if(2===f)return e;break;case 1:if(2===f)return;d+=8;break;case 2:e=rn(b);if(2===f)return a.substr(d,e);d+=e;break;case 5:if(2===f)return;d+=4;break;default:return}}while(d<c)}
function rn(a){var b=a(),c=b&127;if(128>b)return c;b=a();c|=(b&127)<<7;if(128>b)return c;b=a();c|=(b&127)<<14;if(128>b)return c;b=a();return 128>b?c|(b&127)<<21:Infinity}
;function sn(a,b,c,d){if(a)if(Array.isArray(a)){var e=d;for(d=0;d<a.length&&!(a[d]&&(e+=tn(d,a[d],b,c),500<e));d++);d=e}else if("object"===typeof a)for(e in a){if(a[e]){var f=a[e];var g=b;var h=c;g="string"!==typeof f||"clickTrackingParams"!==e&&"trackingParams"!==e?0:(f=qn(atob(f.replace(/-/g,"+").replace(/_/g,"/"))))?tn(e+".ve",f,g,h):0;d+=g;d+=tn(e,a[e],b,c);if(500<d)break}}else c[b]=un(a),d+=c[b].length;else c[b]=un(a),d+=c[b].length;return d}
function tn(a,b,c,d){c+="."+a;a=un(b);d[c]=a;return c.length+a.length}
function un(a){try{return("string"===typeof a?a:String(JSON.stringify(a))).substr(0,500)}catch(b){return"unable to serialize "+typeof a+" ("+b.message+")"}}
;function vn(){this.cf=!0}
function wn(){vn.h||(vn.h=new vn);return vn.h}
function xn(a,b){a={};var c=Cg([]);c&&(a.Authorization=c,c=b=null==b?void 0:b.sessionIndex,void 0===c&&(c=Number(M("SESSION_INDEX",0)),c=isNaN(c)?0:c),P("voice_search_auth_header_removal")||(a["X-Goog-AuthUser"]=c.toString()),"INNERTUBE_HOST_OVERRIDE"in om||(a["X-Origin"]=window.location.origin),void 0===b&&"DELEGATED_SESSION_ID"in om&&(a["X-Goog-PageId"]=M("DELEGATED_SESSION_ID")));return a}
;var yn={identityType:"UNAUTHENTICATED_IDENTITY_TYPE_UNKNOWN"};function zn(a){var b=this;this.i=void 0;this.h=!1;a.addEventListener("beforeinstallprompt",function(c){c.preventDefault();b.i=c});
a.addEventListener("appinstalled",function(){b.h=!0},{once:!0})}
function An(){if(!y.matchMedia)return"WEB_DISPLAY_MODE_UNKNOWN";try{return y.matchMedia("(display-mode: standalone)").matches?"WEB_DISPLAY_MODE_STANDALONE":y.matchMedia("(display-mode: minimal-ui)").matches?"WEB_DISPLAY_MODE_MINIMAL_UI":y.matchMedia("(display-mode: fullscreen)").matches?"WEB_DISPLAY_MODE_FULLSCREEN":y.matchMedia("(display-mode: browser)").matches?"WEB_DISPLAY_MODE_BROWSER":"WEB_DISPLAY_MODE_UNKNOWN"}catch(a){return"WEB_DISPLAY_MODE_UNKNOWN"}}
;function Bn(a,b,c,d,e){yg.set(""+a,b,{kc:c,path:"/",domain:void 0===d?"youtube.com":d,secure:void 0===e?!1:e})}
function Cn(a,b,c){yg.remove(""+a,void 0===b?"/":b,void 0===c?"youtube.com":c)}
function Dn(){if(!yg.isEnabled())return!1;if(!yg.Jb())return!0;yg.set("TESTCOOKIESENABLED","1",{kc:60});if("1"!==yg.get("TESTCOOKIESENABLED"))return!1;yg.remove("TESTCOOKIESENABLED");return!0}
;var En=B("ytglobal.prefsUserPrefsPrefs_")||{};A("ytglobal.prefsUserPrefsPrefs_",En);function Fn(){this.h=M("ALT_PREF_COOKIE_NAME","PREF");this.i=M("ALT_PREF_COOKIE_DOMAIN","youtube.com");var a=yg.get(""+this.h,void 0);if(a){a=decodeURIComponent(a).split("&");for(var b=0;b<a.length;b++){var c=a[b].split("="),d=c[0];(c=c[1])&&(En[d]=c.toString())}}}
Fn.prototype.get=function(a,b){Gn(a);Hn(a);a=void 0!==En[a]?En[a].toString():null;return null!=a?a:b?b:""};
Fn.prototype.set=function(a,b){Gn(a);Hn(a);if(null==b)throw Error("ExpectedNotNull");En[a]=b.toString()};
function In(a){return!!((Jn("f"+(Math.floor(a/31)+1))||0)&1<<a%31)}
Fn.prototype.remove=function(a){Gn(a);Hn(a);delete En[a]};
Fn.prototype.clear=function(){for(var a in En)delete En[a]};
function Hn(a){if(/^f([1-9][0-9]*)$/.test(a))throw Error("ExpectedRegexMatch: "+a);}
function Gn(a){if(!/^\w+$/.test(a))throw Error("ExpectedRegexMismatch: "+a);}
function Jn(a){a=void 0!==En[a]?En[a].toString():null;return null!=a&&/^[A-Fa-f0-9]+$/.test(a)?parseInt(a,16):null}
Fn.h=void 0;Fn.getInstance=function(){return Fn.h?Fn.h:Fn.h=new Fn};var Kn={bluetooth:"CONN_DISCO",cellular:"CONN_CELLULAR_UNKNOWN",ethernet:"CONN_WIFI",none:"CONN_NONE",wifi:"CONN_WIFI",wimax:"CONN_CELLULAR_4G",other:"CONN_UNKNOWN",unknown:"CONN_UNKNOWN","slow-2g":"CONN_CELLULAR_2G","2g":"CONN_CELLULAR_2G","3g":"CONN_CELLULAR_3G","4g":"CONN_CELLULAR_4G"},Ln={CONN_DEFAULT:0,CONN_UNKNOWN:1,CONN_NONE:2,CONN_WIFI:3,CONN_CELLULAR_2G:4,CONN_CELLULAR_3G:5,CONN_CELLULAR_4G:6,CONN_CELLULAR_UNKNOWN:7,CONN_DISCO:8,CONN_CELLULAR_5G:9,CONN_WIFI_METERED:10,CONN_CELLULAR_5G_SA:11,
CONN_CELLULAR_5G_NSA:12,CONN_INVALID:31},Mn={EFFECTIVE_CONNECTION_TYPE_UNKNOWN:0,EFFECTIVE_CONNECTION_TYPE_OFFLINE:1,EFFECTIVE_CONNECTION_TYPE_SLOW_2G:2,EFFECTIVE_CONNECTION_TYPE_2G:3,EFFECTIVE_CONNECTION_TYPE_3G:4,EFFECTIVE_CONNECTION_TYPE_4G:5},Nn={"slow-2g":"EFFECTIVE_CONNECTION_TYPE_SLOW_2G","2g":"EFFECTIVE_CONNECTION_TYPE_2G","3g":"EFFECTIVE_CONNECTION_TYPE_3G","4g":"EFFECTIVE_CONNECTION_TYPE_4G"};function On(){var a=y.navigator;return a?a.connection:void 0}
function Pn(){var a=On();if(a){var b=Kn[a.type||"unknown"]||"CONN_UNKNOWN";a=Kn[a.effectiveType||"unknown"]||"CONN_UNKNOWN";"CONN_CELLULAR_UNKNOWN"===b&&"CONN_UNKNOWN"!==a&&(b=a);if("CONN_UNKNOWN"!==b)return b;if("CONN_UNKNOWN"!==a)return a}}
function Qn(){var a=On();if(null!=a&&a.effectiveType)return Nn.hasOwnProperty(a.effectiveType)?Nn[a.effectiveType]:"EFFECTIVE_CONNECTION_TYPE_UNKNOWN"}
;function Rn(){}
function Sn(a,b){return Tn(a,0,b)}
Rn.prototype.fa=function(a,b){return Tn(a,1,b)};
function Un(a){var b=B("yt.scheduler.instance.addImmediateJob");b?b(a):a()}
;function Vn(){Rn.apply(this,arguments)}
u(Vn,Rn);function Wn(){Vn.h||(Vn.h=new Vn);return Vn.h}
function Tn(a,b,c){void 0!==c&&Number.isNaN(Number(c))&&(c=void 0);var d=B("yt.scheduler.instance.addJob");return d?d(a,b,c):void 0===c?(a(),NaN):Sm(a,c||0)}
Vn.prototype.Ca=function(a){if(void 0===a||!Number.isNaN(Number(a))){var b=B("yt.scheduler.instance.cancelJob");b?b(a):window.clearTimeout(a)}};
Vn.prototype.start=function(){var a=B("yt.scheduler.instance.start");a&&a()};
Vn.prototype.pause=function(){var a=B("yt.scheduler.instance.pause");a&&a()};
var mi=Wn();function Q(a){var b=Ka.apply(1,arguments);var c=Error.call(this,a);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.args=[].concat(ja(b))}
u(Q,Error);function Xn(){try{return Yn(),!0}catch(a){return!1}}
function Yn(a){if(void 0!==M("DATASYNC_ID"))return M("DATASYNC_ID");throw new Q("Datasync ID not set",void 0===a?"unknown":a);}
;function Zn(a){var b=new Ui;(b=b.isAvailable()?a?new $i(b,a):b:null)||(a=new Vi(a||"UserDataSharedStore"),b=a.isAvailable()?a:null);this.h=(a=b)?new Qi(a):null;this.i=document.domain||window.location.hostname}
Zn.prototype.set=function(a,b,c,d){c=c||31104E3;this.remove(a);if(this.h)try{this.h.set(a,b,Date.now()+1E3*c);return}catch(f){}var e="";if(d)try{e=escape(Gg(b))}catch(f){return}else e=escape(b);Bn(a,e,c,this.i)};
Zn.prototype.get=function(a,b){var c=void 0,d=!this.h;if(!d)try{c=this.h.get(a)}catch(e){d=!0}if(d&&(c=yg.get(""+a,void 0))&&(c=unescape(c),b))try{c=JSON.parse(c)}catch(e){this.remove(a),c=void 0}return c};
Zn.prototype.remove=function(a){this.h&&this.h.remove(a);Cn(a,"/",this.i)};var $n=function(){var a;return function(){a||(a=new Zn("ytidb"));return a}}();
function ao(){var a;return null==(a=$n())?void 0:a.get("LAST_RESULT_ENTRY_KEY",!0)}
;var bo=[],co,eo=!1;function fo(){var a={};for(co=new go(void 0===a.handleError?ho:a.handleError,void 0===a.logEvent?io:a.logEvent);0<bo.length;)switch(a=bo.shift(),a.type){case "ERROR":co.handleError(a.payload);break;case "EVENT":co.logEvent(a.eventType,a.payload)}}
function jo(a){eo||(co?co.handleError(a):(bo.push({type:"ERROR",payload:a}),10<bo.length&&bo.shift()))}
function ko(a,b){eo||(co?co.logEvent(a,b):(bo.push({type:"EVENT",eventType:a,payload:b}),10<bo.length&&bo.shift()))}
;function lo(a){if(0<=a.indexOf(":"))throw Error("Database name cannot contain ':'");}
function mo(a){return a.substr(0,a.indexOf(":"))||a}
;var no={},oo=(no.AUTH_INVALID="No user identifier specified.",no.EXPLICIT_ABORT="Transaction was explicitly aborted.",no.IDB_NOT_SUPPORTED="IndexedDB is not supported.",no.MISSING_INDEX="Index not created.",no.MISSING_OBJECT_STORES="Object stores not created.",no.DB_DELETED_BY_MISSING_OBJECT_STORES="Database is deleted because expected object stores were not created.",no.DB_REOPENED_BY_MISSING_OBJECT_STORES="Database is reopened because expected object stores were not created.",no.UNKNOWN_ABORT="Transaction was aborted for unknown reasons.",
no.QUOTA_EXCEEDED="The current transaction exceeded its quota limitations.",no.QUOTA_MAYBE_EXCEEDED="The current transaction may have failed because of exceeding quota limitations.",no.EXECUTE_TRANSACTION_ON_CLOSED_DB="Can't start a transaction on a closed database",no.INCOMPATIBLE_DB_VERSION="The binary is incompatible with the database version",no),po={},qo=(po.AUTH_INVALID="ERROR",po.EXECUTE_TRANSACTION_ON_CLOSED_DB="WARNING",po.EXPLICIT_ABORT="IGNORED",po.IDB_NOT_SUPPORTED="ERROR",po.MISSING_INDEX=
"WARNING",po.MISSING_OBJECT_STORES="ERROR",po.DB_DELETED_BY_MISSING_OBJECT_STORES="WARNING",po.DB_REOPENED_BY_MISSING_OBJECT_STORES="WARNING",po.QUOTA_EXCEEDED="WARNING",po.QUOTA_MAYBE_EXCEEDED="WARNING",po.UNKNOWN_ABORT="WARNING",po.INCOMPATIBLE_DB_VERSION="WARNING",po),ro={},so=(ro.AUTH_INVALID=!1,ro.EXECUTE_TRANSACTION_ON_CLOSED_DB=!1,ro.EXPLICIT_ABORT=!1,ro.IDB_NOT_SUPPORTED=!1,ro.MISSING_INDEX=!1,ro.MISSING_OBJECT_STORES=!1,ro.DB_DELETED_BY_MISSING_OBJECT_STORES=!1,ro.DB_REOPENED_BY_MISSING_OBJECT_STORES=
!1,ro.QUOTA_EXCEEDED=!1,ro.QUOTA_MAYBE_EXCEEDED=!0,ro.UNKNOWN_ABORT=!0,ro.INCOMPATIBLE_DB_VERSION=!1,ro);function to(a,b,c,d,e){b=void 0===b?{}:b;c=void 0===c?oo[a]:c;d=void 0===d?qo[a]:d;e=void 0===e?so[a]:e;Q.call(this,c,Object.assign({},{name:"YtIdbKnownError",isSw:void 0===self.document,isIframe:self!==self.top,type:a},b));this.type=a;this.message=c;this.level=d;this.h=e;Object.setPrototypeOf(this,to.prototype)}
u(to,Q);function uo(a,b){to.call(this,"MISSING_OBJECT_STORES",{expectedObjectStores:b,foundObjectStores:a},oo.MISSING_OBJECT_STORES);Object.setPrototypeOf(this,uo.prototype)}
u(uo,to);function vo(a,b){var c=Error.call(this);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.index=a;this.objectStore=b;Object.setPrototypeOf(this,vo.prototype)}
u(vo,Error);var wo=["The database connection is closing","Can't start a transaction on a closed database","A mutation operation was attempted on a database that did not allow mutations"];
function xo(a,b,c,d){b=mo(b);var e=a instanceof Error?a:Error("Unexpected error: "+a);if(e instanceof to)return e;a={objectStoreNames:c,dbName:b,dbVersion:d};if("QuotaExceededError"===e.name)return new to("QUOTA_EXCEEDED",a);if($c&&"UnknownError"===e.name)return new to("QUOTA_MAYBE_EXCEEDED",a);if(e instanceof vo)return new to("MISSING_INDEX",Object.assign({},a,{objectStore:e.objectStore,index:e.index}));if("InvalidStateError"===e.name&&wo.some(function(f){return e.message.includes(f)}))return new to("EXECUTE_TRANSACTION_ON_CLOSED_DB",
a);
if("AbortError"===e.name)return new to("UNKNOWN_ABORT",a,e.message);e.args=[Object.assign({},a,{name:"IdbError",Bd:e.name})];e.level="WARNING";return e}
function yo(a,b,c){var d=ao();return new to("IDB_NOT_SUPPORTED",{context:{caller:a,publicName:b,version:c,hasSucceededOnce:null==d?void 0:d.hasSucceededOnce}})}
;function zo(a){if(!a)throw Error();throw a;}
function Ao(a){return a}
function Bo(a){this.h=a}
function Co(a){function b(e){if("PENDING"===d.state.status){d.state={status:"REJECTED",reason:e};e=r(d.i);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
function c(e){if("PENDING"===d.state.status){d.state={status:"FULFILLED",value:e};e=r(d.h);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
var d=this;this.state={status:"PENDING"};this.h=[];this.i=[];a=a.h;try{a(c,b)}catch(e){b(e)}}
Co.all=function(a){return new Co(new Bo(function(b,c){var d=[],e=a.length;0===e&&b(d);for(var f={nb:0};f.nb<a.length;f={nb:f.nb},++f.nb)Co.resolve(a[f.nb]).then(function(g){return function(h){d[g.nb]=h;e--;0===e&&b(d)}}(f)).catch(function(g){c(g)})}))};
Co.resolve=function(a){return new Co(new Bo(function(b,c){a instanceof Co?a.then(b,c):b(a)}))};
Co.reject=function(a){return new Co(new Bo(function(b,c){c(a)}))};
Co.prototype.then=function(a,b){var c=this,d=null!=a?a:Ao,e=null!=b?b:zo;return new Co(new Bo(function(f,g){"PENDING"===c.state.status?(c.h.push(function(){Do(c,c,d,f,g)}),c.i.push(function(){Eo(c,c,e,f,g)})):"FULFILLED"===c.state.status?Do(c,c,d,f,g):"REJECTED"===c.state.status&&Eo(c,c,e,f,g)}))};
Co.prototype.catch=function(a){return this.then(void 0,a)};
function Do(a,b,c,d,e){try{if("FULFILLED"!==a.state.status)throw Error("calling handleResolve before the promise is fulfilled.");var f=c(a.state.value);f instanceof Co?Fo(a,b,f,d,e):d(f)}catch(g){e(g)}}
function Eo(a,b,c,d,e){try{if("REJECTED"!==a.state.status)throw Error("calling handleReject before the promise is rejected.");var f=c(a.state.reason);f instanceof Co?Fo(a,b,f,d,e):d(f)}catch(g){e(g)}}
function Fo(a,b,c,d,e){b===c?e(new TypeError("Circular promise chain detected.")):c.then(function(f){f instanceof Co?Fo(a,b,f,d,e):d(f)},function(f){e(f)})}
;function Go(a,b,c){function d(){c(a.error);f()}
function e(){b(a.result);f()}
function f(){try{a.removeEventListener("success",e),a.removeEventListener("error",d)}catch(g){}}
a.addEventListener("success",e);a.addEventListener("error",d)}
function Ho(a){return new Promise(function(b,c){Go(a,b,c)})}
function Io(a){return new Co(new Bo(function(b,c){Go(a,b,c)}))}
;function Jo(a,b){return new Co(new Bo(function(c,d){function e(){var f=a?b(a):null;f?f.then(function(g){a=g;e()},d):c()}
e()}))}
;var Ko=window,R=Ko.ytcsi&&Ko.ytcsi.now?Ko.ytcsi.now:Ko.performance&&Ko.performance.timing&&Ko.performance.now&&Ko.performance.timing.navigationStart?function(){return Ko.performance.timing.navigationStart+Ko.performance.now()}:function(){return(new Date).getTime()};function Lo(a,b){this.h=a;this.options=b;this.transactionCount=0;this.j=Math.round(R());this.i=!1}
l=Lo.prototype;l.add=function(a,b,c){return Mo(this,[a],{mode:"readwrite",da:!0},function(d){return d.objectStore(a).add(b,c)})};
l.clear=function(a){return Mo(this,[a],{mode:"readwrite",da:!0},function(b){return b.objectStore(a).clear()})};
l.close=function(){this.h.close();var a;(null==(a=this.options)?0:a.closed)&&this.options.closed()};
l.count=function(a,b){return Mo(this,[a],{mode:"readonly",da:!0},function(c){return c.objectStore(a).count(b)})};
function No(a,b,c){a=a.h.createObjectStore(b,c);return new Oo(a)}
l.delete=function(a,b){return Mo(this,[a],{mode:"readwrite",da:!0},function(c){return c.objectStore(a).delete(b)})};
l.get=function(a,b){return Mo(this,[a],{mode:"readonly",da:!0},function(c){return c.objectStore(a).get(b)})};
function Po(a,b,c){return Mo(a,[b],{mode:"readwrite",da:!0},function(d){d=d.objectStore(b);return Io(d.h.put(c,void 0))})}
l.objectStoreNames=function(){return Array.from(this.h.objectStoreNames)};
function Mo(a,b,c,d){var e,f,g,h,k,m,p,n,v,t,z,D;return x(function(F){switch(F.h){case 1:var N={mode:"readonly",da:!1,tag:"IDB_TRANSACTION_TAG_UNKNOWN"};"string"===typeof c?N.mode=c:Object.assign(N,c);e=N;a.transactionCount++;f=e.da?3:1;g=0;case 2:if(h){F.A(3);break}g++;k=Math.round(R());za(F,4);m=a.h.transaction(b,e.mode);N=new Qo(m);N=Ro(N,d);return w(F,N,6);case 6:return p=F.i,n=Math.round(R()),So(a,k,n,g,void 0,b.join(),e),F.return(p);case 4:v=Ba(F);t=Math.round(R());z=xo(v,a.h.name,b.join(),
a.h.version);if((D=z instanceof to&&!z.h)||g>=f)So(a,k,t,g,z,b.join(),e),h=z;F.A(2);break;case 3:return F.return(Promise.reject(h))}})}
function So(a,b,c,d,e,f,g){b=c-b;e?(e instanceof to&&("QUOTA_EXCEEDED"===e.type||"QUOTA_MAYBE_EXCEEDED"===e.type)&&ko("QUOTA_EXCEEDED",{dbName:mo(a.h.name),objectStoreNames:f,transactionCount:a.transactionCount,transactionMode:g.mode}),e instanceof to&&"UNKNOWN_ABORT"===e.type&&(c-=a.j,0>c&&c>=Math.pow(2,31)&&(c=0),ko("TRANSACTION_UNEXPECTEDLY_ABORTED",{objectStoreNames:f,transactionDuration:b,transactionCount:a.transactionCount,dbDuration:c}),a.i=!0),To(a,!1,d,f,b,g.tag),jo(e)):To(a,!0,d,f,b,g.tag)}
function To(a,b,c,d,e,f){ko("TRANSACTION_ENDED",{objectStoreNames:d,connectionHasUnknownAbortedTransaction:a.i,duration:e,isSuccessful:b,tryCount:c,tag:void 0===f?"IDB_TRANSACTION_TAG_UNKNOWN":f})}
l.getName=function(){return this.h.name};
function Oo(a){this.h=a}
l=Oo.prototype;l.add=function(a,b){return Io(this.h.add(a,b))};
l.autoIncrement=function(){return this.h.autoIncrement};
l.clear=function(){return Io(this.h.clear()).then(function(){})};
function Uo(a,b,c){a.h.createIndex(b,c,{unique:!1})}
l.count=function(a){return Io(this.h.count(a))};
function Vo(a,b){return Wo(a,{query:b},function(c){return c.delete().then(function(){return c.continue()})}).then(function(){})}
l.delete=function(a){return a instanceof IDBKeyRange?Vo(this,a):Io(this.h.delete(a))};
l.get=function(a){return Io(this.h.get(a))};
l.index=function(a){try{return new Xo(this.h.index(a))}catch(b){if(b instanceof Error&&"NotFoundError"===b.name)throw new vo(a,this.h.name);throw b;}};
l.getName=function(){return this.h.name};
l.keyPath=function(){return this.h.keyPath};
function Wo(a,b,c){a=a.h.openCursor(b.query,b.direction);return Yo(a).then(function(d){return Jo(d,c)})}
function Qo(a){var b=this;this.h=a;this.j=new Map;this.i=!1;this.done=new Promise(function(c,d){b.h.addEventListener("complete",function(){c()});
b.h.addEventListener("error",function(e){e.currentTarget===e.target&&d(b.h.error)});
b.h.addEventListener("abort",function(){var e=b.h.error;if(e)d(e);else if(!b.i){e=to;for(var f=b.h.objectStoreNames,g=[],h=0;h<f.length;h++){var k=f.item(h);if(null===k)throw Error("Invariant: item in DOMStringList is null");g.push(k)}e=new e("UNKNOWN_ABORT",{objectStoreNames:g.join(),dbName:b.h.db.name,mode:b.h.mode});d(e)}})})}
function Ro(a,b){var c=new Promise(function(d,e){try{b(a).then(function(f){d(f)}).catch(e)}catch(f){e(f),a.abort()}});
return Promise.all([c,a.done]).then(function(d){return r(d).next().value})}
Qo.prototype.abort=function(){this.h.abort();this.i=!0;throw new to("EXPLICIT_ABORT");};
Qo.prototype.objectStore=function(a){a=this.h.objectStore(a);var b=this.j.get(a);b||(b=new Oo(a),this.j.set(a,b));return b};
function Xo(a){this.h=a}
l=Xo.prototype;l.count=function(a){return Io(this.h.count(a))};
l.delete=function(a){return Zo(this,{query:a},function(b){return b.delete().then(function(){return b.continue()})})};
l.get=function(a){return Io(this.h.get(a))};
l.getKey=function(a){return Io(this.h.getKey(a))};
l.keyPath=function(){return this.h.keyPath};
l.unique=function(){return this.h.unique};
function Zo(a,b,c){a=a.h.openCursor(void 0===b.query?null:b.query,void 0===b.direction?"next":b.direction);return Yo(a).then(function(d){return Jo(d,c)})}
function $o(a,b){this.request=a;this.cursor=b}
function Yo(a){return Io(a).then(function(b){return b?new $o(a,b):null})}
l=$o.prototype;l.advance=function(a){this.cursor.advance(a);return Yo(this.request)};
l.continue=function(a){this.cursor.continue(a);return Yo(this.request)};
l.delete=function(){return Io(this.cursor.delete()).then(function(){})};
l.getKey=function(){return this.cursor.key};
l.getValue=function(){return this.cursor.value};
l.update=function(a){return Io(this.cursor.update(a))};function ap(a,b,c){return new Promise(function(d,e){function f(){v||(v=new Lo(g.result,{closed:n}));return v}
var g=void 0!==b?self.indexedDB.open(a,b):self.indexedDB.open(a);var h=c.be,k=c.blocking,m=c.df,p=c.upgrade,n=c.closed,v;g.addEventListener("upgradeneeded",function(t){try{if(null===t.newVersion)throw Error("Invariant: newVersion on IDbVersionChangeEvent is null");if(null===g.transaction)throw Error("Invariant: transaction on IDbOpenDbRequest is null");t.dataLoss&&"none"!==t.dataLoss&&ko("IDB_DATA_CORRUPTED",{reason:t.dataLossMessage||"unknown reason",dbName:mo(a)});var z=f(),D=new Qo(g.transaction);
p&&p(z,function(F){return t.oldVersion<F&&t.newVersion>=F},D);
D.done.catch(function(F){e(F)})}catch(F){e(F)}});
g.addEventListener("success",function(){var t=g.result;k&&t.addEventListener("versionchange",function(){k(f())});
t.addEventListener("close",function(){ko("IDB_UNEXPECTEDLY_CLOSED",{dbName:mo(a),dbVersion:t.version});m&&m()});
d(f())});
g.addEventListener("error",function(){e(g.error)});
h&&g.addEventListener("blocked",function(){h()})})}
function bp(a,b,c){c=void 0===c?{}:c;return ap(a,b,c)}
function cp(a,b){b=void 0===b?{}:b;var c,d,e,f;return x(function(g){if(1==g.h)return za(g,2),c=self.indexedDB.deleteDatabase(a),d=b,(e=d.be)&&c.addEventListener("blocked",function(){e()}),w(g,Ho(c),4);
if(2!=g.h)return Aa(g,0);f=Ba(g);throw xo(f,a,"",-1);})}
;function dp(a,b){this.name=a;this.options=b;this.j=!0;this.m=this.l=0}
dp.prototype.i=function(a,b,c){c=void 0===c?{}:c;return bp(a,b,c)};
dp.prototype.delete=function(a){a=void 0===a?{}:a;return cp(this.name,a)};
function ep(a,b){return new to("INCOMPATIBLE_DB_VERSION",{dbName:a.name,oldVersion:a.options.version,newVersion:b})}
function fp(a,b){if(!b)throw yo("openWithToken",mo(a.name));return gp(a)}
function gp(a){function b(){var f,g,h,k,m,p,n,v,t,z;return x(function(D){switch(D.h){case 1:return g=null!=(f=Error().stack)?f:"",za(D,2),w(D,a.i(a.name,a.options.version,d),4);case 4:h=D.i;for(var F=a.options,N=[],O=r(Object.keys(F.xb)),T=O.next();!T.done;T=O.next()){T=T.value;var aa=F.xb[T],W=void 0===aa.Ne?Number.MAX_VALUE:aa.Ne;!(h.h.version>=aa.Db)||h.h.version>=W||h.h.objectStoreNames.contains(T)||N.push(T)}k=N;if(0===k.length){D.A(5);break}m=Object.keys(a.options.xb);p=h.objectStoreNames();
if(a.m<sm("ytidb_reopen_db_retries",0))return a.m++,h.close(),jo(new to("DB_REOPENED_BY_MISSING_OBJECT_STORES",{dbName:a.name,expectedObjectStores:m,foundObjectStores:p})),D.return(b());if(!(a.l<sm("ytidb_remake_db_retries",1))){D.A(6);break}a.l++;return w(D,a.delete(),7);case 7:return jo(new to("DB_DELETED_BY_MISSING_OBJECT_STORES",{dbName:a.name,expectedObjectStores:m,foundObjectStores:p})),D.return(b());case 6:throw new uo(p,m);case 5:return D.return(h);case 2:n=Ba(D);if(n instanceof DOMException?
"VersionError"!==n.name:"DOMError"in self&&n instanceof DOMError?"VersionError"!==n.name:!(n instanceof Object&&"message"in n)||"An attempt was made to open a database using a lower version than the existing version."!==n.message){D.A(8);break}return w(D,a.i(a.name,void 0,Object.assign({},d,{upgrade:void 0})),9);case 9:v=D.i;t=v.h.version;if(void 0!==a.options.version&&t>a.options.version+1)throw v.close(),a.j=!1,ep(a,t);return D.return(v);case 8:throw c(),n instanceof Error&&!P("ytidb_async_stack_killswitch")&&
(n.stack=n.stack+"\n"+g.substring(g.indexOf("\n")+1)),xo(n,a.name,"",null!=(z=a.options.version)?z:-1);}})}
function c(){a.h===e&&(a.h=void 0)}
if(!a.j)throw ep(a);if(a.h)return a.h;var d={blocking:function(f){f.close()},
closed:c,df:c,upgrade:a.options.upgrade};var e=b();a.h=e;return a.h}
;var hp=new dp("YtIdbMeta",{xb:{databases:{Db:1}},upgrade:function(a,b){b(1)&&No(a,"databases",{keyPath:"actualName"})}});
function ip(a,b){var c;return x(function(d){if(1==d.h)return w(d,fp(hp,b),2);c=d.i;return d.return(Mo(c,["databases"],{da:!0,mode:"readwrite"},function(e){var f=e.objectStore("databases");return f.get(a.actualName).then(function(g){if(g?a.actualName!==g.actualName||a.publicName!==g.publicName||a.userIdentifier!==g.userIdentifier:1)return Io(f.h.put(a,void 0)).then(function(){})})}))})}
function jp(a,b){var c;return x(function(d){if(1==d.h)return a?w(d,fp(hp,b),2):d.return();c=d.i;return d.return(c.delete("databases",a))})}
function kp(a,b){var c,d;return x(function(e){return 1==e.h?(c=[],w(e,fp(hp,b),2)):3!=e.h?(d=e.i,w(e,Mo(d,["databases"],{da:!0,mode:"readonly"},function(f){c.length=0;return Wo(f.objectStore("databases"),{},function(g){a(g.getValue())&&c.push(g.getValue());return g.continue()})}),3)):e.return(c)})}
function lp(a){return kp(function(b){return"LogsDatabaseV2"===b.publicName&&void 0!==b.userIdentifier},a)}
function mp(a,b,c){return kp(function(d){return c?void 0!==d.userIdentifier&&!a.includes(d.userIdentifier)&&c.includes(d.publicName):void 0!==d.userIdentifier&&!a.includes(d.userIdentifier)},b)}
function np(a){var b,c;return x(function(d){if(1==d.h)return b=Yn("YtIdbMeta hasAnyMeta other"),w(d,kp(function(e){return void 0!==e.userIdentifier&&e.userIdentifier!==b},a),2);
c=d.i;return d.return(0<c.length)})}
;var op,pp=new function(){}(new function(){});
function qp(){var a,b,c,d;return x(function(e){switch(e.h){case 1:a=ao();if(null==(b=a)?0:b.hasSucceededOnce)return e.return(!0);var f;if(f=gn)f=/WebKit\/([0-9]+)/.exec(Ub()),f=!!(f&&600<=parseInt(f[1],10));f&&(f=/WebKit\/([0-9]+)/.exec(Ub()),f=!(f&&602<=parseInt(f[1],10)));if(f||Ic)return e.return(!1);try{if(c=self,!(c.indexedDB&&c.IDBIndex&&c.IDBKeyRange&&c.IDBObjectStore))return e.return(!1)}catch(g){return e.return(!1)}if(!("IDBTransaction"in self&&"objectStoreNames"in IDBTransaction.prototype))return e.return(!1);
za(e,2);d={actualName:"yt-idb-test-do-not-use",publicName:"yt-idb-test-do-not-use",userIdentifier:void 0};return w(e,ip(d,pp),4);case 4:return w(e,jp("yt-idb-test-do-not-use",pp),5);case 5:return e.return(!0);case 2:return Ba(e),e.return(!1)}})}
function rp(){if(void 0!==op)return op;eo=!0;return op=qp().then(function(a){eo=!1;var b;if(null!=(b=$n())&&b.h){var c;b={hasSucceededOnce:(null==(c=ao())?void 0:c.hasSucceededOnce)||a};var d;null==(d=$n())||d.set("LAST_RESULT_ENTRY_KEY",b,2592E3,!0)}return a})}
function sp(){return B("ytglobal.idbToken_")||void 0}
function tp(){var a=sp();return a?Promise.resolve(a):rp().then(function(b){(b=b?pp:void 0)&&A("ytglobal.idbToken_",b);return b})}
;var up=0;function vp(a,b){up||(up=mi.fa(function(){var c,d,e,f,g;return x(function(h){switch(h.h){case 1:return w(h,tp(),2);case 2:c=h.i;if(!c)return h.return();d=!0;za(h,3);return w(h,mp(a,c,b),5);case 5:e=h.i;if(!e.length){d=!1;h.A(6);break}f=e[0];return w(h,cp(f.actualName),7);case 7:return w(h,jp(f.actualName,c),6);case 6:Aa(h,4);break;case 3:g=Ba(h),jo(g),d=!1;case 4:mi.Ca(up),up=0,d&&vp(a,b),h.h=0}})}))}
function wp(){var a;return x(function(b){return 1==b.h?w(b,tp(),2):(a=b.i)?b.return(np(a)):b.return(!1)})}
new Jh;function xp(a){if(!Xn())throw a=new to("AUTH_INVALID",{dbName:a}),jo(a),a;var b=Yn();return{actualName:a+":"+b,publicName:a,userIdentifier:b}}
function yp(a,b,c,d){var e,f,g,h,k,m;return x(function(p){switch(p.h){case 1:return f=null!=(e=Error().stack)?e:"",w(p,tp(),2);case 2:g=p.i;if(!g)throw h=yo("openDbImpl",a,b),P("ytidb_async_stack_killswitch")||(h.stack=h.stack+"\n"+f.substring(f.indexOf("\n")+1)),jo(h),h;lo(a);k=c?{actualName:a,publicName:a,userIdentifier:void 0}:xp(a);za(p,3);return w(p,ip(k,g),5);case 5:return w(p,bp(k.actualName,b,d),6);case 6:return p.return(p.i);case 3:return m=Ba(p),za(p,7),w(p,jp(k.actualName,g),9);case 9:Aa(p,
8);break;case 7:Ba(p);case 8:throw m;}})}
function zp(a,b,c){c=void 0===c?{}:c;return yp(a,b,!1,c)}
function Ap(a,b,c){c=void 0===c?{}:c;return yp(a,b,!0,c)}
function Bp(a,b){b=void 0===b?{}:b;var c,d;return x(function(e){if(1==e.h)return w(e,tp(),2);if(3!=e.h){c=e.i;if(!c)return e.return();lo(a);d=xp(a);return w(e,cp(d.actualName,b),3)}return w(e,jp(d.actualName,c),0)})}
function Cp(a,b,c){a=a.map(function(d){return x(function(e){return 1==e.h?w(e,cp(d.actualName,b),2):w(e,jp(d.actualName,c),0)})});
return Promise.all(a).then(function(){})}
function Dp(){var a=void 0===a?{}:a;var b,c;return x(function(d){if(1==d.h)return w(d,tp(),2);if(3!=d.h){b=d.i;if(!b)return d.return();lo("LogsDatabaseV2");return w(d,lp(b),3)}c=d.i;return w(d,Cp(c,a,b),0)})}
function Ep(a,b){b=void 0===b?{}:b;var c;return x(function(d){if(1==d.h)return w(d,tp(),2);if(3!=d.h){c=d.i;if(!c)return d.return();lo(a);return w(d,cp(a,b),3)}return w(d,jp(a,c),0)})}
;function Fp(a,b){dp.call(this,a,b);this.options=b;lo(a)}
u(Fp,dp);function Gp(a,b){var c;return function(){c||(c=new Fp(a,b));return c}}
Fp.prototype.i=function(a,b,c){c=void 0===c?{}:c;return(this.options.qc?Ap:zp)(a,b,Object.assign({},c))};
Fp.prototype.delete=function(a){a=void 0===a?{}:a;return(this.options.qc?Ep:Bp)(this.name,a)};
function Hp(a,b){return Gp(a,b)}
;var Ip={},Jp=Hp("ytGcfConfig",{xb:(Ip.coldConfigStore={Db:1},Ip.hotConfigStore={Db:1},Ip),qc:!1,upgrade:function(a,b){b(1)&&(Uo(No(a,"hotConfigStore",{keyPath:"key",autoIncrement:!0}),"hotTimestampIndex","timestamp"),Uo(No(a,"coldConfigStore",{keyPath:"key",autoIncrement:!0}),"coldTimestampIndex","timestamp"))},
version:1});function Kp(a){return fp(Jp(),a)}
function Lp(a,b,c){var d,e,f;return x(function(g){switch(g.h){case 1:return d={config:a,hashData:b,timestamp:R()},w(g,Kp(c),2);case 2:return e=g.i,w(g,e.clear("hotConfigStore"),3);case 3:return w(g,Po(e,"hotConfigStore",d),4);case 4:return f=g.i,g.return(f)}})}
function Mp(a,b,c,d){var e,f,g;return x(function(h){switch(h.h){case 1:return e={config:a,hashData:b,configData:c,timestamp:R()},w(h,Kp(d),2);case 2:return f=h.i,w(h,f.clear("coldConfigStore"),3);case 3:return w(h,Po(f,"coldConfigStore",e),4);case 4:return g=h.i,h.return(g)}})}
function Np(a){var b,c;return x(function(d){return 1==d.h?w(d,Kp(a),2):3!=d.h?(b=d.i,c=void 0,w(d,Mo(b,["coldConfigStore"],{mode:"readwrite",da:!0},function(e){return Zo(e.objectStore("coldConfigStore").index("coldTimestampIndex"),{direction:"prev"},function(f){c=f.getValue()})}),3)):d.return(c)})}
function Op(a){var b,c;return x(function(d){return 1==d.h?w(d,Kp(a),2):3!=d.h?(b=d.i,c=void 0,w(d,Mo(b,["hotConfigStore"],{mode:"readwrite",da:!0},function(e){return Zo(e.objectStore("hotConfigStore").index("hotTimestampIndex"),{direction:"prev"},function(f){c=f.getValue()})}),3)):d.return(c)})}
;function Pp(){this.h=0}
function Qp(a,b,c){var d,e,f;return x(function(g){if(1==g.h){if(!P("update_log_event_config"))return g.A(0);c&&(a.i=c,A("yt.gcf.config.hotConfigGroup",a.i));a.hotHashData=b;A("yt.gcf.config.hotHashData",a.hotHashData);return(d=sp())?c?g.A(4):w(g,Op(d),5):g.A(0)}4!=g.h&&(e=g.i,c=null==(f=e)?void 0:f.config);return w(g,Lp(c,b,d),0)})}
function Rp(a,b,c){var d,e,f,g;return x(function(h){if(1==h.h){if(!P("update_log_event_config"))return h.A(0);a.coldHashData=b;A("yt.gcf.config.coldHashData",a.coldHashData);return(d=sp())?c?h.A(4):w(h,Np(d),5):h.A(0)}4!=h.h&&(e=h.i,c=null==(f=e)?void 0:f.config);if(!c)return h.A(0);g=c.configData;return w(h,Mp(c,b,g,d),0)})}
;function Sp(){return"INNERTUBE_API_KEY"in om&&"INNERTUBE_API_VERSION"in om}
function Tp(){return{innertubeApiKey:M("INNERTUBE_API_KEY"),innertubeApiVersion:M("INNERTUBE_API_VERSION"),Dc:M("INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO"),sd:M("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),we:M("INNERTUBE_CONTEXT_CLIENT_NAME",1),innertubeContextClientVersion:M("INNERTUBE_CONTEXT_CLIENT_VERSION"),ud:M("INNERTUBE_CONTEXT_HL"),td:M("INNERTUBE_CONTEXT_GL"),xe:M("INNERTUBE_HOST_OVERRIDE")||"",ze:!!M("INNERTUBE_USE_THIRD_PARTY_AUTH",!1),ye:!!M("INNERTUBE_OMIT_API_KEY_WHEN_AUTH_HEADER_IS_PRESENT",
!1),appInstallData:M("SERIALIZED_CLIENT_CONFIG_DATA")}}
function Up(a){var b={client:{hl:a.ud,gl:a.td,clientName:a.sd,clientVersion:a.innertubeContextClientVersion,configInfo:a.Dc}};navigator.userAgent&&(b.client.userAgent=String(navigator.userAgent));var c=y.devicePixelRatio;c&&1!=c&&(b.client.screenDensityFloat=String(c));c=tm();""!==c&&(b.client.experimentsToken=c);c=um();0<c.length&&(b.request={internalExperimentFlags:c});Vp(a,void 0,b);P("enable_third_party_info")&&Wp(void 0,b);Xp(void 0,b);Yp(a,void 0,b);Zp(void 0,b);P("start_sending_config_hash")&&
$p(void 0,b);M("DELEGATED_SESSION_ID")&&!P("pageid_as_header_web")&&(b.user={onBehalfOfUser:M("DELEGATED_SESSION_ID")});a=Object;c=a.assign;for(var d=b.client,e={},f=r(Object.entries(Jm(M("DEVICE","")))),g=f.next();!g.done;g=f.next()){var h=r(g.value);g=h.next().value;h=h.next().value;"cbrand"===g?e.deviceMake=h:"cmodel"===g?e.deviceModel=h:"cbr"===g?e.browserName=h:"cbrver"===g?e.browserVersion=h:"cos"===g?e.osName=h:"cosver"===g?e.osVersion=h:"cplatform"===g&&(e.platform=h)}b.client=c.call(a,d,
e);return b}
function aq(a){var b=new Jk,c=new yk;E(c,1,a.ud);E(c,2,a.td);E(c,16,a.we);E(c,17,a.innertubeContextClientVersion);if(a.Dc){var d=a.Dc,e=new uk;d.coldConfigData&&E(e,1,d.coldConfigData);d.appInstallData&&E(e,6,d.appInstallData);d.coldHashData&&E(e,3,d.coldHashData);d.hotHashData&&E(e,5,d.hotHashData);G(c,uk,62,e)}(d=y.devicePixelRatio)&&1!=d&&E(c,65,Ed(d));d=tm();""!==d&&E(c,54,d);d=um();if(0<d.length){e=new Ck;for(var f=0;f<d.length;f++){var g=new Ak;E(g,1,d[f].key);Qd(g,2,Bk,d[f].value);Yd(e,15,
Ak,g)}G(b,Ck,5,e)}Vp(a,c);P("enable_third_party_info")&&Wp(b);Xp(c);Yp(a,c);Zp(c);P("start_sending_config_hash")&&$p(c);M("DELEGATED_SESSION_ID")&&!P("pageid_as_header_web")&&(a=new Hk,E(a,3,M("DELEGATED_SESSION_ID")));a=r(Object.entries(Jm(M("DEVICE",""))));for(d=a.next();!d.done;d=a.next())e=r(d.value),d=e.next().value,e=e.next().value,"cbrand"===d?E(c,12,e):"cmodel"===d?E(c,13,e):"cbr"===d?E(c,87,e):"cbrver"===d?E(c,88,e):"cos"===d?E(c,18,e):"cosver"===d?E(c,19,e):"cplatform"===d&&E(c,42,e);b.l(c);
return b}
function Vp(a,b,c){a=a.sd;if("WEB"===a||"MWEB"===a||1===a||2===a)if(b){c=Sd(b,vk,96)||new vk;var d=An();d=Object.keys(Qk).indexOf(d);d=-1===d?null:d;null!==d&&E(c,3,d);G(b,vk,96,c)}else c&&(c.client.mainAppWebInfo=null!=(d=c.client.mainAppWebInfo)?d:{},c.client.mainAppWebInfo.webDisplayMode=An())}
function Wp(a,b){var c=B("yt.embedded_player.embed_url");c&&(a?(b=Sd(a,Ek,7)||new Ek,E(b,4,c),G(a,Ek,7,b)):b&&(b.thirdParty={embedUrl:c}))}
function Xp(a,b){var c;if(P("web_log_memory_total_kbytes")&&(null==(c=y.navigator)?0:c.deviceMemory)){var d;c=null==(d=y.navigator)?void 0:d.deviceMemory;a?E(a,95,1E6*c):b&&(b.client.memoryTotalKbytes=""+1E6*c)}}
function Yp(a,b,c){if(a.appInstallData)if(b){var d;c=null!=(d=Sd(b,uk,62))?d:new uk;E(c,6,a.appInstallData);G(b,uk,62,c)}else c&&(c.client.configInfo=c.client.configInfo||{},c.client.configInfo.appInstallData=a.appInstallData)}
function Zp(a,b){var c=Pn();c&&(a?E(a,61,Ln[c]):b&&(b.client.connectionType=c));P("web_log_effective_connection_type")&&(c=Qn())&&(a?E(a,94,Mn[c]):b&&(b.client.effectiveConnectionType=c))}
function bq(a,b,c){c=void 0===c?{}:c;var d={};M("EOM_VISITOR_DATA")?d={"X-Goog-EOM-Visitor-Id":M("EOM_VISITOR_DATA")}:d={"X-Goog-Visitor-Id":c.visitorData||M("VISITOR_DATA","")};if(b&&b.includes("www.youtube-nocookie.com"))return d;b=c.Et||M("AUTHORIZATION");b||(a?b="Bearer "+B("gapi.auth.getToken")().Dt:(a=xn(wn()),P("pageid_as_header_web")||delete a["X-Goog-PageId"],d=Object.assign({},d,a)));b&&(d.Authorization=b);return d}
function $p(a,b){Pp.h||(Pp.h=new Pp);var c=Pp.h;var d=R()-c.h;0!==c.h&&d<sm("send_config_hash_timer")?c=void 0:(c.h=R(),c={coldConfigData:B("yt.gcf.config.coldConfigData"),hotHashData:B("yt.gcf.config.hotHashData"),coldHashData:B("yt.gcf.config.coldHashData")});var e=c;if(e&&(c=e.coldConfigData,d=e.coldHashData,e=e.hotHashData,c&&d&&e))if(a){var f;b=null!=(f=Sd(a,uk,62))?f:new uk;E(b,1,c);E(b,3,d);E(b,5,e);G(a,uk,62,b)}else b&&(b.client.configInfo=b.client.configInfo||{},b.client.configInfo.coldConfigData=
c,b.client.configInfo.coldHashData=d,b.client.configInfo.hotHashData=e)}
;function cq(a,b){this.version=a;this.args=b}
;function dq(a,b){this.topic=a;this.h=b}
dq.prototype.toString=function(){return this.topic};var eq=B("ytPubsub2Pubsub2Instance")||new Ji;Ji.prototype.subscribe=Ji.prototype.subscribe;Ji.prototype.unsubscribeByKey=Ji.prototype.Bb;Ji.prototype.publish=Ji.prototype.cb;Ji.prototype.clear=Ji.prototype.clear;A("ytPubsub2Pubsub2Instance",eq);var fq=B("ytPubsub2Pubsub2SubscribedKeys")||{};A("ytPubsub2Pubsub2SubscribedKeys",fq);var gq=B("ytPubsub2Pubsub2TopicToKeys")||{};A("ytPubsub2Pubsub2TopicToKeys",gq);var hq=B("ytPubsub2Pubsub2IsAsync")||{};A("ytPubsub2Pubsub2IsAsync",hq);
A("ytPubsub2Pubsub2SkipSubKey",null);function iq(a,b){var c=jq();c&&c.publish.call(c,a.toString(),a,b)}
function kq(a){var b=lq,c=jq();if(!c)return 0;var d=c.subscribe(b.toString(),function(e,f){var g=B("ytPubsub2Pubsub2SkipSubKey");g&&g==d||(g=function(){if(fq[d])try{if(f&&b instanceof dq&&b!=e)try{var h=b.h,k=f;if(!k.args||!k.version)throw Error("yt.pubsub2.Data.deserialize(): serializedData is incomplete.");try{if(!h.Xa){var m=new h;h.Xa=m.version}var p=h.Xa}catch(F){}if(!p||k.version!=p)throw Error("yt.pubsub2.Data.deserialize(): serializedData version is incompatible.");try{p=Reflect;var n=p.construct;
var v=k.args,t=v.length;if(0<t){var z=Array(t);for(k=0;k<t;k++)z[k]=v[k];var D=z}else D=[];f=n.call(p,h,D)}catch(F){throw F.message="yt.pubsub2.Data.deserialize(): "+F.message,F;}}catch(F){throw F.message="yt.pubsub2.pubsub2 cross-binary conversion error for "+b.toString()+": "+F.message,F;}a.call(window,f)}catch(F){Bm(F)}},hq[b.toString()]?B("yt.scheduler.instance")?mi.fa(g):Sm(g,0):g())});
fq[d]=!0;gq[b.toString()]||(gq[b.toString()]=[]);gq[b.toString()].push(d);return d}
function mq(){var a=nq,b=kq(function(c){a.apply(void 0,arguments);oq(b)});
return b}
function oq(a){var b=jq();b&&("number"===typeof a&&(a=[a]),gb(a,function(c){b.unsubscribeByKey(c);delete fq[c]}))}
function jq(){return B("ytPubsub2Pubsub2Instance")}
;function pq(a,b,c,d){var e={startTime:R()};try{var f=ok(hi(b));e.endTime=R();!P("gel_compression_csi_killswitch")&&P("log_gel_compression_latency")&&.01>=Math.random()&&iq("gel_compression_latency_payload",e);if(!P("only_compress_gel_if_smaller")||(window.Blob?f.length<(new Blob(b.split(""))).size:1))c.headers||(c.headers={}),c.headers["Content-Encoding"]="gzip",c.postBody=f,c.postParams=void 0;d(a,c)}catch(g){Cm(g),d(a,c)}}
function qq(a){if(!a.body)return a;try{var b="string"===typeof a.body?a.body:JSON.stringify(a.body),c=ok(hi(b));if(P("only_compress_gel_if_smaller")&&!(window.Blob?c.length<(new Blob(b.split(""))).size:1))return a;a.headers=Object.assign({},{"Content-Encoding":"gzip"},a.headers||{});a.body=c;return a}catch(d){return Cm(d),a}}
;function rq(a){a=Object.assign({},a);delete a.Authorization;var b=Cg();if(b){var c=new si;c.update(M("INNERTUBE_API_KEY"));c.update(b);a.hash=cd(c.digest(),3)}return a}
;var sq;function tq(){sq||(sq=new Zn("yt.innertube"));return sq}
function uq(a,b,c,d){if(d)return null;d=tq().get("nextId",!0)||1;var e=tq().get("requests",!0)||{};e[d]={method:a,request:b,authState:rq(c),requestTime:Math.round(R())};tq().set("nextId",d+1,86400,!0);tq().set("requests",e,86400,!0);return d}
function vq(a){var b=tq().get("requests",!0)||{};delete b[a];tq().set("requests",b,86400,!0)}
function wq(a){var b=tq().get("requests",!0);if(b){for(var c in b){var d=b[c];if(!(6E4>Math.round(R())-d.requestTime)){var e=d.authState,f=rq(bq(!1));tb(e,f)&&(e=d.request,"requestTimeMs"in e&&(e.requestTimeMs=Math.round(R())),xq(a,d.method,e,{}));delete b[c]}}tq().set("requests",b,86400,!0)}}
;function yq(a){this.Zb=this.h=!1;this.potentialEsfErrorCounter=this.i=0;this.handleError=function(){};
this.rb=function(){};
this.now=Date.now;this.Gb=!1;var b;this.Md=null!=(b=a.Md)?b:100;var c;this.Hd=null!=(c=a.Hd)?c:1;var d;this.Fd=null!=(d=a.Fd)?d:2592E6;var e;this.Dd=null!=(e=a.Dd)?e:12E4;var f;this.Gd=null!=(f=a.Gd)?f:5E3;var g;this.P=null!=(g=a.P)?g:void 0;this.fc=!!a.fc;var h;this.dc=null!=(h=a.dc)?h:.1;var k;this.mc=null!=(k=a.mc)?k:10;a.handleError&&(this.handleError=a.handleError);a.rb&&(this.rb=a.rb);a.Gb&&(this.Gb=a.Gb);a.Zb&&(this.Zb=a.Zb);this.T=a.T;this.xa=a.xa;this.X=a.X;this.W=a.W;this.Pa=a.Pa;this.Lc=
a.Lc;this.Kc=a.Kc;zq(this)&&(!this.T||this.T("networkless_logging"))&&Aq(this)}
function Aq(a){zq(a)&&!a.Gb&&(a.h=!0,a.fc&&Math.random()<=a.dc&&a.X.de(a.P),Bq(a),a.W.ma()&&a.Pb(),a.W.Ma(a.Lc,a.Pb.bind(a)),a.W.Ma(a.Kc,a.dd.bind(a)))}
l=yq.prototype;l.writeThenSend=function(a,b){var c=this;b=void 0===b?{}:b;if(zq(this)&&this.h){var d={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0};this.X.set(d,this.P).then(function(e){d.id=e;c.W.ma()&&Cq(c,d)}).catch(function(e){Cq(c,d);
Dq(c,e)})}else this.Pa(a,b)};
l.sendThenWrite=function(a,b,c){var d=this;b=void 0===b?{}:b;if(zq(this)&&this.h){var e={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0};this.T&&this.T("nwl_skip_retry")&&(e.skipRetry=c);if(this.W.ma()||this.T&&this.T("nwl_aggressive_send_then_write")&&!e.skipRetry){if(!e.skipRetry){var f=b.onError?b.onError:function(){};
b.onError=function(g,h){return x(function(k){if(1==k.h)return w(k,d.X.set(e,d.P).catch(function(m){Dq(d,m)}),2);
f(g,h);k.h=0})}}this.Pa(a,b,e.skipRetry)}else this.X.set(e,this.P).catch(function(g){d.Pa(a,b,e.skipRetry);
Dq(d,g)})}else this.Pa(a,b,this.T&&this.T("nwl_skip_retry")&&c)};
l.sendAndWrite=function(a,b){var c=this;b=void 0===b?{}:b;if(zq(this)&&this.h){var d={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0},e=!1,f=b.onSuccess?b.onSuccess:function(){};
d.options.onSuccess=function(g,h){void 0!==d.id?c.X.qb(d.id,c.P):e=!0;c.W.ib&&c.T&&c.T("vss_network_hint")&&c.W.ib(!0);f(g,h)};
this.Pa(d.url,d.options);this.X.set(d,this.P).then(function(g){d.id=g;e&&c.X.qb(d.id,c.P)}).catch(function(g){Dq(c,g)})}else this.Pa(a,b)};
l.Pb=function(){var a=this;if(!zq(this))throw yo("throttleSend");this.i||(this.i=this.xa.fa(function(){var b;return x(function(c){if(1==c.h)return w(c,a.X.pd("NEW",a.P),2);if(3!=c.h)return b=c.i,b?w(c,Cq(a,b),3):(a.dd(),c.return());a.i&&(a.i=0,a.Pb());c.h=0})},this.Md))};
l.dd=function(){this.xa.Ca(this.i);this.i=0};
function Cq(a,b){var c,d;return x(function(e){switch(e.h){case 1:if(!zq(a))throw c=yo("immediateSend"),c;if(void 0===b.id){e.A(2);break}return w(e,a.X.Be(b.id,a.P),3);case 3:(d=e.i)||a.rb(Error("The request cannot be found in the database."));case 2:if(Eq(a,b,a.Fd)){e.A(4);break}a.rb(Error("Networkless Logging: Stored logs request expired age limit"));if(void 0===b.id){e.A(5);break}return w(e,a.X.qb(b.id,a.P),5);case 5:return e.return();case 4:b.skipRetry||(b=Fq(a,b));if(!b){e.A(0);break}if(!b.skipRetry||
void 0===b.id){e.A(8);break}return w(e,a.X.qb(b.id,a.P),8);case 8:a.Pa(b.url,b.options,!!b.skipRetry),e.h=0}})}
function Fq(a,b){if(!zq(a))throw yo("updateRequestHandlers");var c=b.options.onError?b.options.onError:function(){};
b.options.onError=function(e,f){var g,h,k,m;return x(function(p){switch(p.h){case 1:g=Gq(f);h=Hq(f);if(!(a.T&&a.T("nwl_consider_error_code")&&g||a.T&&!a.T("nwl_consider_error_code")&&a.potentialEsfErrorCounter<=a.mc)){p.A(2);break}if(!a.W.pc){p.A(3);break}return w(p,a.W.pc(),3);case 3:if(a.W.ma()){p.A(2);break}c(e,f);if(!a.T||!a.T("nwl_consider_error_code")||void 0===(null==(k=b)?void 0:k.id)){p.A(6);break}return w(p,a.X.Pc(b.id,a.P,!1),6);case 6:return p.return();case 2:if(a.T&&a.T("nwl_consider_error_code")&&
!g&&a.potentialEsfErrorCounter>a.mc)return p.return();a.potentialEsfErrorCounter++;if(void 0===(null==(m=b)?void 0:m.id)){p.A(8);break}return b.sendCount<a.Hd?w(p,a.X.Pc(b.id,a.P,!0,h?!1:void 0),12):w(p,a.X.qb(b.id,a.P),8);case 12:a.xa.fa(function(){a.W.ma()&&a.Pb()},a.Gd);
case 8:c(e,f),p.h=0}})};
var d=b.options.onSuccess?b.options.onSuccess:function(){};
b.options.onSuccess=function(e,f){var g;return x(function(h){if(1==h.h)return void 0===(null==(g=b)?void 0:g.id)?h.A(2):w(h,a.X.qb(b.id,a.P),2);a.W.ib&&a.T&&a.T("vss_network_hint")&&a.W.ib(!0);d(e,f);h.h=0})};
return b}
function Eq(a,b,c){b=b.timestamp;return a.now()-b>=c?!1:!0}
function Bq(a){if(!zq(a))throw yo("retryQueuedRequests");a.X.pd("QUEUED",a.P).then(function(b){b&&!Eq(a,b,a.Dd)?a.xa.fa(function(){return x(function(c){if(1==c.h)return void 0===b.id?c.A(2):w(c,a.X.Pc(b.id,a.P),2);Bq(a);c.h=0})}):a.W.ma()&&a.Pb()})}
function Dq(a,b){a.Sd&&!a.W.ma()?a.Sd(b):a.handleError(b)}
function zq(a){return!!a.P||a.Zb}
function Gq(a){var b;return(a=null==a?void 0:null==(b=a.error)?void 0:b.code)&&400<=a&&599>=a?!1:!0}
function Hq(a){var b;a=null==a?void 0:null==(b=a.error)?void 0:b.code;return!(400!==a&&415!==a)}
;var Iq;
function Jq(){if(Iq)return Iq();var a={};Iq=Hp("LogsDatabaseV2",{xb:(a.LogsRequestsStore={Db:2},a),qc:!1,upgrade:function(b,c,d){c(2)&&No(b,"LogsRequestsStore",{keyPath:"id",autoIncrement:!0});c(3);c(5)&&(d=d.objectStore("LogsRequestsStore"),d.h.indexNames.contains("newRequest")&&d.h.deleteIndex("newRequest"),Uo(d,"newRequestV2",["status","interface","timestamp"]));c(7)&&b.h.objectStoreNames.contains("sapisid")&&b.h.deleteObjectStore("sapisid");c(9)&&b.h.objectStoreNames.contains("SWHealthLog")&&b.h.deleteObjectStore("SWHealthLog")},
version:9});return Iq()}
;function Kq(a){return fp(Jq(),a)}
function Lq(a,b){var c,d,e,f;return x(function(g){if(1==g.h)return c={startTime:R(),transactionType:"YT_IDB_TRANSACTION_TYPE_WRITE"},w(g,Kq(b),2);if(3!=g.h)return d=g.i,e=Object.assign({},a,{options:JSON.parse(JSON.stringify(a.options)),interface:M("INNERTUBE_CONTEXT_CLIENT_NAME",0)}),w(g,Po(d,"LogsRequestsStore",e),3);f=g.i;c.ff=R();Mq(c);return g.return(f)})}
function Nq(a,b){var c,d,e,f,g,h,k;return x(function(m){if(1==m.h)return c={startTime:R(),transactionType:"YT_IDB_TRANSACTION_TYPE_READ"},w(m,Kq(b),2);if(3!=m.h)return d=m.i,e=M("INNERTUBE_CONTEXT_CLIENT_NAME",0),f=[a,e,0],g=[a,e,R()],h=IDBKeyRange.bound(f,g),k=void 0,w(m,Mo(d,["LogsRequestsStore"],{mode:"readwrite",da:!0},function(p){return Zo(p.objectStore("LogsRequestsStore").index("newRequestV2"),{query:h,direction:"prev"},function(n){n.getValue()&&(k=n.getValue(),"NEW"===a&&(k.status="QUEUED",
n.update(k)))})}),3);
c.ff=R();Mq(c);return m.return(k)})}
function Oq(a,b){var c;return x(function(d){if(1==d.h)return w(d,Kq(b),2);c=d.i;return d.return(Mo(c,["LogsRequestsStore"],{mode:"readwrite",da:!0},function(e){var f=e.objectStore("LogsRequestsStore");return f.get(a).then(function(g){if(g)return g.status="QUEUED",Io(f.h.put(g,void 0)).then(function(){return g})})}))})}
function br(a,b,c,d){c=void 0===c?!0:c;var e;return x(function(f){if(1==f.h)return w(f,Kq(b),2);e=f.i;return f.return(Mo(e,["LogsRequestsStore"],{mode:"readwrite",da:!0},function(g){var h=g.objectStore("LogsRequestsStore");return h.get(a).then(function(k){return k?(k.status="NEW",c&&(k.sendCount+=1),void 0!==d&&(k.options.compress=d),Io(h.h.put(k,void 0)).then(function(){return k})):Co.resolve(void 0)})}))})}
function Ar(a,b){var c;return x(function(d){if(1==d.h)return w(d,Kq(b),2);c=d.i;return d.return(c.delete("LogsRequestsStore",a))})}
function Br(a){var b,c;return x(function(d){if(1==d.h)return w(d,Kq(a),2);b=d.i;c=R()-2592E6;return w(d,Mo(b,["LogsRequestsStore"],{mode:"readwrite",da:!0},function(e){return Wo(e.objectStore("LogsRequestsStore"),{},function(f){if(f.getValue().timestamp<=c)return f.delete().then(function(){return f.continue()})})}),0)})}
function Cr(){x(function(a){return w(a,Dp(),0)})}
function Mq(a){P("nwl_csi_killswitch")||.01>=Math.random()&&iq("nwl_transaction_latency_payload",a)}
;var Dr={},Er=Hp("ServiceWorkerLogsDatabase",{xb:(Dr.SWHealthLog={Db:1},Dr),qc:!0,upgrade:function(a,b){b(1)&&Uo(No(a,"SWHealthLog",{keyPath:"id",autoIncrement:!0}),"swHealthNewRequest",["interface","timestamp"])},
version:1});function Fr(a){return fp(Er(),a)}
function Gr(a){var b,c;x(function(d){if(1==d.h)return w(d,Fr(a),2);b=d.i;c=R()-2592E6;return w(d,Mo(b,["SWHealthLog"],{mode:"readwrite",da:!0},function(e){return Wo(e.objectStore("SWHealthLog"),{},function(f){if(f.getValue().timestamp<=c)return f.delete().then(function(){return f.continue()})})}),0)})}
function Hr(a){var b;return x(function(c){if(1==c.h)return w(c,Fr(a),2);b=c.i;return w(c,b.clear("SWHealthLog"),0)})}
;var Ir={},Jr=0;function Kr(a){var b=new Image,c=""+Jr++;Ir[c]=b;b.onload=b.onerror=function(){delete Ir[c]};
b.src=a}
;function Lr(){this.h=new Map;this.i=!1}
function Mr(){if(!Lr.h){var a=B("yt.networkRequestMonitor.instance")||new Lr;A("yt.networkRequestMonitor.instance",a);Lr.h=a}return Lr.h}
Lr.prototype.requestComplete=function(a,b){b&&(this.i=!0);a=this.removeParams(a);this.h.get(a)||this.h.set(a,b)};
Lr.prototype.isEndpointCFR=function(a){a=this.removeParams(a);return(a=this.h.get(a))?!1:!1===a&&this.i?!0:null};
Lr.prototype.removeParams=function(a){return a.split("?")[0]};
Lr.prototype.removeParams=Lr.prototype.removeParams;Lr.prototype.isEndpointCFR=Lr.prototype.isEndpointCFR;Lr.prototype.requestComplete=Lr.prototype.requestComplete;Lr.getInstance=Mr;var Nr;function Or(){Nr||(Nr=new Zn("yt.offline"));return Nr}
function Pr(a){if(P("offline_error_handling")){var b=Or().get("errors",!0)||{};b[a.message]={name:a.name,stack:a.stack};a.level&&(b[a.message].level=a.level);Or().set("errors",b,2592E3,!0)}}
;function Qr(){Ze.call(this);var a=this;this.j=!1;this.i=li();this.i.Ma("networkstatus-online",function(){if(a.j&&P("offline_error_handling")){var b=Or().get("errors",!0);if(b){for(var c in b)if(b[c]){var d=new Q(c,"sent via offline_errors");d.name=b[c].name;d.stack=b[c].stack;d.level=b[c].level;Bm(d)}Or().set("errors",{},2592E3,!0)}}})}
u(Qr,Ze);function Rr(){if(!Qr.h){var a=B("yt.networkStatusManager.instance")||new Qr;A("yt.networkStatusManager.instance",a);Qr.h=a}return Qr.h}
l=Qr.prototype;l.ma=function(){return this.i.ma()};
l.ib=function(a){this.i.i=a};
l.re=function(){var a=window.navigator.onLine;return void 0===a?!0:a};
l.je=function(){this.j=!0};
l.Ma=function(a,b){return this.i.Ma(a,b)};
l.pc=function(a){a=ji(this.i,a);a.then(function(b){P("use_cfr_monitor")&&Mr().requestComplete("generate_204",b)});
return a};
Qr.prototype.sendNetworkCheckRequest=Qr.prototype.pc;Qr.prototype.listen=Qr.prototype.Ma;Qr.prototype.enableErrorFlushing=Qr.prototype.je;Qr.prototype.getWindowStatus=Qr.prototype.re;Qr.prototype.networkStatusHint=Qr.prototype.ib;Qr.prototype.isNetworkAvailable=Qr.prototype.ma;Qr.getInstance=Rr;function Sr(a){a=void 0===a?{}:a;Ze.call(this);var b=this;this.i=this.s=0;this.j=Rr();var c=B("yt.networkStatusManager.instance.listen").bind(this.j);c&&(a.oc?(this.oc=a.oc,c("networkstatus-online",function(){Tr(b,"publicytnetworkstatus-online")}),c("networkstatus-offline",function(){Tr(b,"publicytnetworkstatus-offline")})):(c("networkstatus-online",function(){$e(b,"publicytnetworkstatus-online")}),c("networkstatus-offline",function(){$e(b,"publicytnetworkstatus-offline")})))}
u(Sr,Ze);Sr.prototype.ma=function(){var a=B("yt.networkStatusManager.instance.isNetworkAvailable");return a?a.bind(this.j)():!0};
Sr.prototype.ib=function(a){var b=B("yt.networkStatusManager.instance.networkStatusHint").bind(this.j);b&&b(a)};
Sr.prototype.pc=function(a){var b=this,c;return x(function(d){c=B("yt.networkStatusManager.instance.sendNetworkCheckRequest").bind(b.j);return P("skip_network_check_if_cfr")&&Mr().isEndpointCFR("generate_204")?d.return(new Promise(function(e){var f;b.ib((null==(f=window.navigator)?void 0:f.onLine)||!0);e(b.ma())})):c?d.return(c(a)):d.return(!0)})};
function Tr(a,b){a.oc?a.i?(mi.Ca(a.s),a.s=mi.fa(function(){a.m!==b&&($e(a,b),a.m=b,a.i=R())},a.oc-(R()-a.i))):($e(a,b),a.m=b,a.i=R()):$e(a,b)}
;var Ur;function Vr(){var a=yq.call;Ur||(Ur=new Sr({Qt:!0,Kt:!0}));a.call(yq,this,{X:{de:Br,qb:Ar,pd:Nq,Be:Oq,Pc:br,set:Lq},W:Ur,handleError:Bm,rb:Cm,Pa:Wr,now:R,Sd:Pr,xa:Wn(),Lc:"publicytnetworkstatus-online",Kc:"publicytnetworkstatus-offline",fc:!0,dc:.1,mc:sm("potential_esf_error_limit",10),T:P,Gb:!(Xn()&&Xr())});this.j=new Jh;P("networkless_immediately_drop_all_requests")&&Cr();Ep("LogsDatabaseV2")}
u(Vr,yq);function Yr(){var a=B("yt.networklessRequestController.instance");a||(a=new Vr,A("yt.networklessRequestController.instance",a),P("networkless_logging")&&tp().then(function(b){a.P=b;Aq(a);a.j.resolve();a.fc&&Math.random()<=a.dc&&a.P&&Gr(a.P);P("networkless_immediately_drop_sw_health_store")&&Zr(a)}));
return a}
Vr.prototype.writeThenSend=function(a,b){b||(b={});Xn()||(this.h=!1);yq.prototype.writeThenSend.call(this,a,b)};
Vr.prototype.sendThenWrite=function(a,b,c){b||(b={});Xn()||(this.h=!1);yq.prototype.sendThenWrite.call(this,a,b,c)};
Vr.prototype.sendAndWrite=function(a,b){b||(b={});Xn()||(this.h=!1);yq.prototype.sendAndWrite.call(this,a,b)};
Vr.prototype.awaitInitialization=function(){return this.j.promise};
function Zr(a){var b;x(function(c){if(!a.P)throw b=yo("clearSWHealthLogsDb"),b;return c.return(Hr(a.P).catch(function(d){a.handleError(d)}))})}
function Wr(a,b,c){P("use_cfr_monitor")&&$r(a,b);if(P("use_request_time_ms_header"))b.headers&&(b.headers["X-Goog-Request-Time"]=JSON.stringify(Math.round(R())));else{var d;if(null==(d=b.postParams)?0:d.requestTimeMs)b.postParams.requestTimeMs=Math.round(R())}if(c&&0===Object.keys(b).length){var e=void 0===e?"":e;var f=void 0===f?!1:f;if(a)if(e)an(a,void 0,"POST",e);else if(M("USE_NET_AJAX_FOR_PING_TRANSPORT",!1))an(a,void 0,"GET","",void 0,void 0,f);else{b:{try{var g=new cb({url:a});if(g.j&&g.i||
g.l){var h=lc(mc(5,a)),k;if(!(k=!h||!h.endsWith("/aclk"))){var m=a.search(zc),p=yc(a,0,"ri",m);if(0>p)var n=null;else{var v=a.indexOf("&",p);if(0>v||v>m)v=m;n=decodeURIComponent(a.slice(p+3,-1!==v?v:0).replace(/\+/g," "))}k="1"!==n}var t=!k;break b}}catch(D){}t=!1}if(t){b:{try{if(window.navigator&&window.navigator.sendBeacon&&window.navigator.sendBeacon(a,"")){var z=!0;break b}}catch(D){}z=!1}c=z?!0:!1}else c=!1;c||Kr(a)}}else b.compress?b.postBody?("string"!==typeof b.postBody&&(b.postBody=JSON.stringify(b.postBody)),
pq(a,b.postBody,b,Ym)):pq(a,JSON.stringify(b.postParams),b,fn):Ym(a,b)}
function $r(a,b){var c=b.onError?b.onError:function(){};
b.onError=function(e,f){Mr().requestComplete(a,!1);c(e,f)};
var d=b.onSuccess?b.onSuccess:function(){};
b.onSuccess=function(e,f){Mr().requestComplete(a,!0);d(e,f)}}
function Xr(){return"www.youtube-nocookie.com"!==pc(document.location.toString())}
;var as=!1,bs=y.ytNetworklessLoggingInitializationOptions||{isNwlInitialized:as};A("ytNetworklessLoggingInitializationOptions",bs);function cs(){var a;x(function(b){if(1==b.h)return w(b,tp(),2);a=b.i;if(!a||!Xn()&&!P("nwl_init_require_datasync_id_killswitch")||!Xr())return b.A(0);as=!0;bs.isNwlInitialized=as;return w(b,Yr().awaitInitialization(),0)})}
;function ds(a){var b=this;this.config_=null;a?this.config_=a:Sp()&&(this.config_=Tp());Sn(function(){wq(b)},5E3)}
ds.prototype.isReady=function(){!this.config_&&Sp()&&(this.config_=Tp());return!!this.config_};
function xq(a,b,c,d){function e(z){z=void 0===z?!1:z;var D;if(d.retry&&"www.youtube-nocookie.com"!=h&&(z||P("skip_ls_gel_retry")||"application/json"!==g.headers["Content-Type"]||(D=uq(b,c,m,k)),D)){var F=g.onSuccess,N=g.onFetchSuccess;g.onSuccess=function(T,aa){vq(D);F(T,aa)};
c.onFetchSuccess=function(T,aa){vq(D);N(T,aa)}}try{if(z&&d.retry&&!d.yd.bypassNetworkless)g.method="POST",d.yd.writeThenSend?Yr().writeThenSend(t,g):Yr().sendAndWrite(t,g);
else if(d.compress)if(g.postBody){var O=g.postBody;"string"!==typeof O&&(O=JSON.stringify(g.postBody));pq(t,O,g,Ym)}else pq(t,JSON.stringify(g.postParams),g,fn);else P("web_all_payloads_via_jspb")?Ym(t,g):fn(t,g)}catch(T){if("InvalidAccessError"==T.name)D&&(vq(D),D=0),Cm(Error("An extension is blocking network request."));else throw T;}D&&Sn(function(){wq(a)},5E3)}
!M("VISITOR_DATA")&&"visitor_id"!==b&&.01>Math.random()&&Cm(new Q("Missing VISITOR_DATA when sending innertube request.",b,c,d));if(!a.isReady()){var f=new Q("innertube xhrclient not ready",b,c,d);Bm(f);throw f;}var g={headers:d.headers||{},method:"POST",postParams:c,postBody:d.postBody,postBodyFormat:d.postBodyFormat||"JSON",onTimeout:function(){d.onTimeout()},
onFetchTimeout:d.onTimeout,onSuccess:function(z,D){if(d.onSuccess)d.onSuccess(D)},
onFetchSuccess:function(z){if(d.onSuccess)d.onSuccess(z)},
onError:function(z,D){if(d.onError)d.onError(D)},
onFetchError:function(z){if(d.onError)d.onError(z)},
timeout:d.timeout,withCredentials:!0,compress:d.compress};g.headers["Content-Type"]||(g.headers["Content-Type"]="application/json");var h="";(f=a.config_.xe)&&(h=f);var k=a.config_.ze||!1,m=bq(k,h,d);Object.assign(g.headers,m);(f=g.headers.Authorization)&&!h&&k&&(g.headers["x-origin"]=window.location.origin);var p="/youtubei/"+a.config_.innertubeApiVersion+"/"+b,n={alt:"json"},v=a.config_.ye&&f;v=v&&f.startsWith("Bearer");v||(n.key=a.config_.innertubeApiKey);var t=Lm(""+h+p,n||{},!0);(B("ytNetworklessLoggingInitializationOptions")?
bs.isNwlInitialized:as)?rp().then(function(z){e(z)}):e(!1)}
;var es=0,fs=Kc?"webkit":Jc?"moz":Hc?"ms":Gc?"o":"";A("ytDomDomGetNextId",B("ytDomDomGetNextId")||function(){return++es});var gs={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};
function hs(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.ctrlKey=this.altKey=!1;this.rotation=this.clientY=this.clientX=0;this.scale=1;this.changedTouches=this.touches=null;try{if(a=a||window.event){this.event=a;for(var b in a)b in gs||(this[b]=a[b]);this.scale=a.scale;this.rotation=a.rotation;var c=a.target||a.srcElement;c&&3==c.nodeType&&(c=c.parentNode);this.target=c;var d=a.relatedTarget;
if(d)try{d=d.nodeName?d:null}catch(e){d=null}else"mouseover"==this.type?d=a.fromElement:"mouseout"==this.type&&(d=a.toElement);this.relatedTarget=d;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.h=a.pageX;this.i=a.pageY}}catch(e){}}
function is(a){if(document.body&&document.documentElement){var b=document.body.scrollTop+document.documentElement.scrollTop;a.h=a.clientX+(document.body.scrollLeft+document.documentElement.scrollLeft);a.i=a.clientY+b}}
hs.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
hs.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
hs.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var pb=y.ytEventsEventsListeners||{};A("ytEventsEventsListeners",pb);var js=y.ytEventsEventsCounter||{count:0};A("ytEventsEventsCounter",js);
function ks(a,b,c,d){d=void 0===d?{}:d;a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return ob(function(e){var f="boolean"===typeof e[4]&&e[4]==!!d,g=Ra(e[4])&&Ra(d)&&tb(e[4],d);return!!e.length&&e[0]==a&&e[1]==b&&e[2]==c&&(f||g)})}
var ls=eb(function(){var a=!1;try{var b=Object.defineProperty({},"capture",{get:function(){a=!0}});
window.addEventListener("test",null,b)}catch(c){}return a});
function ms(a,b,c,d){d=void 0===d?{}:d;if(!a||!a.addEventListener&&!a.attachEvent)return"";var e=ks(a,b,c,d);if(e)return e;e=++js.count+"";var f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document);var g=f?function(h){h=new hs(h);if(!of(h.relatedTarget,function(k){return k==a}))return h.currentTarget=a,h.type=b,c.call(a,h)}:function(h){h=new hs(h);
h.currentTarget=a;return c.call(a,h)};
g=Am(g);a.addEventListener?("mouseenter"==b&&f?b="mouseover":"mouseleave"==b&&f?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),ls()||"boolean"===typeof d?a.addEventListener(b,g,d):a.addEventListener(b,g,!!d.capture)):a.attachEvent("on"+b,g);pb[e]=[a,b,c,g,d];return e}
function ns(a){a&&("string"==typeof a&&(a=[a]),gb(a,function(b){if(b in pb){var c=pb[b],d=c[0],e=c[1],f=c[3];c=c[4];d.removeEventListener?ls()||"boolean"===typeof c?d.removeEventListener(e,f,c):d.removeEventListener(e,f,!!c.capture):d.detachEvent&&d.detachEvent("on"+e,f);delete pb[b]}}))}
;function os(a){this.N=a;this.i=null;this.m=0;this.v=null;this.s=0;this.j=[];for(a=0;4>a;a++)this.j.push(0);this.l=0;this.V=ms(window,"mousemove",Xa(this.Y,this));a=Xa(this.R,this);"function"===typeof a&&(a=Am(a));this.aa=window.setInterval(a,25)}
Za(os,J);os.prototype.Y=function(a){void 0===a.h&&is(a);var b=a.h;void 0===a.i&&is(a);this.i=new kf(b,a.i)};
os.prototype.R=function(){if(this.i){var a=R();if(0!=this.m){var b=this.v,c=this.i,d=b.x-c.x;b=b.y-c.y;d=Math.sqrt(d*d+b*b)/(a-this.m);this.j[this.l]=.5<Math.abs((d-this.s)/this.s)?1:0;for(c=b=0;4>c;c++)b+=this.j[c]||0;3<=b&&this.N();this.s=d}this.m=a;this.v=this.i;this.l=(this.l+1)%4}};
os.prototype.L=function(){window.clearInterval(this.aa);ns(this.V)};var ps={};
function qs(a){var b=void 0===a?{}:a;a=void 0===b.Ke?!1:b.Ke;b=void 0===b.ke?!0:b.ke;if(null==B("_lact",window)){var c=parseInt(M("LACT"),10);c=isFinite(c)?Date.now()-Math.max(c,0):-1;A("_lact",c,window);A("_fact",c,window);-1==c&&rs();ms(document,"keydown",rs);ms(document,"keyup",rs);ms(document,"mousedown",rs);ms(document,"mouseup",rs);a?ms(window,"touchmove",function(){ss("touchmove",200)},{passive:!0}):(ms(window,"resize",function(){ss("resize",200)}),b&&ms(window,"scroll",function(){ss("scroll",200)}));
new os(function(){ss("mouse",100)});
ms(document,"touchstart",rs,{passive:!0});ms(document,"touchend",rs,{passive:!0})}}
function ss(a,b){ps[a]||(ps[a]=!0,mi.fa(function(){rs();ps[a]=!1},b))}
function rs(){null==B("_lact",window)&&qs();var a=Date.now();A("_lact",a,window);-1==B("_fact",window)&&A("_fact",a,window);(a=B("ytglobal.ytUtilActivityCallback_"))&&a()}
function ts(){var a=B("_lact",window);return null==a?-1:Math.max(Date.now()-a,0)}
;var us=y.ytPubsubPubsubInstance||new Ji,vs=y.ytPubsubPubsubSubscribedKeys||{},ws=y.ytPubsubPubsubTopicToKeys||{},xs=y.ytPubsubPubsubIsSynchronous||{};function ys(a,b){var c=zs();if(c&&b){var d=c.subscribe(a,function(){var e=arguments;var f=function(){vs[d]&&b.apply&&"function"==typeof b.apply&&b.apply(window,e)};
try{xs[a]?f():Sm(f,0)}catch(g){Bm(g)}},void 0);
vs[d]=!0;ws[a]||(ws[a]=[]);ws[a].push(d);return d}return 0}
function As(a){var b=zs();b&&("number"===typeof a?a=[a]:"string"===typeof a&&(a=[parseInt(a,10)]),gb(a,function(c){b.unsubscribeByKey(c);delete vs[c]}))}
function Bs(a,b){var c=zs();c&&c.publish.apply(c,arguments)}
function Cs(a){var b=zs();if(b)if(b.clear(a),a)Ds(a);else for(var c in ws)Ds(c)}
function zs(){return y.ytPubsubPubsubInstance}
function Ds(a){ws[a]&&(a=ws[a],gb(a,function(b){vs[b]&&delete vs[b]}),a.length=0)}
Ji.prototype.subscribe=Ji.prototype.subscribe;Ji.prototype.unsubscribeByKey=Ji.prototype.Bb;Ji.prototype.publish=Ji.prototype.cb;Ji.prototype.clear=Ji.prototype.clear;A("ytPubsubPubsubInstance",us);A("ytPubsubPubsubTopicToKeys",ws);A("ytPubsubPubsubIsSynchronous",xs);A("ytPubsubPubsubSubscribedKeys",vs);var Es=Symbol("injectionDeps");function Fs(a){this.name=a}
Fs.prototype.toString=function(){return"InjectionToken("+this.name+")"};
function Gs(){this.key=Hs}
function Is(){this.h=new Map;this.i=new Map}
Is.prototype.resolve=function(a){return a instanceof Gs?Js(this,a.key,[],!0):Js(this,a,[])};
function Js(a,b,c,d){d=void 0===d?!1:d;if(-1<c.indexOf(b))throw Error("Deps cycle for: "+b);if(a.i.has(b))return a.i.get(b);if(!a.h.has(b)){if(d)return;throw Error("No provider for: "+b);}d=a.h.get(b);c.push(b);if(d.Pd)var e=d.Pd;else if(d.jf)e=d[Es]?Ks(a,d[Es],c):[],e=d.jf.apply(d,ja(e));else if(d.Od){e=d.Od;var f=e[Es]?Ks(a,e[Es],c):[];e=new (Function.prototype.bind.apply(e,[null].concat(ja(f))))}else throw Error("Could not resolve providers for: "+b);c.pop();d.au||a.i.set(b,e);return e}
function Ks(a,b,c){return b?b.map(function(d){return d instanceof Gs?Js(a,d.key,c,!0):Js(a,d,c)}):[]}
;var Ls;function Ms(){Ls||(Ls=new Is);return Ls}
;function Ns(){this.store={};this.h={}}
Ns.prototype.storePayload=function(a,b){a=Os(a);this.store[a]?this.store[a].push(b):(this.h={},this.store[a]=[b]);return a};
Ns.prototype.extractMatchingEntries=function(a){a=Ps(this,a);for(var b=[],c=0;c<a.length;c++)this.store[a[c]]&&(b.push.apply(b,ja(this.store[a[c]])),delete this.store[a[c]]);return b};
Ns.prototype.getSequenceCount=function(a){a=Ps(this,a);for(var b=0,c=0;c<a.length;c++)b+=this.store[a[c]].length||0;return b};
function Ps(a,b){var c=Os(b);if(a.h[c])return a.h[c];var d=Object.keys(a.store)||[];if(1>=d.length&&Os(b)===d[0])return d;for(var e=[],f=0;f<d.length;f++){var g=d[f].split("/");if(Qs(b.auth,g[0])){var h=b.isJspb;Qs(void 0===h?"undefined":h?"true":"false",g[1])&&Qs(b.cttAuthInfo,g[2])&&e.push(d[f])}}return a.h[c]=e}
function Qs(a,b){return void 0===a||"undefined"===a?!0:a===b}
Ns.prototype.getSequenceCount=Ns.prototype.getSequenceCount;Ns.prototype.extractMatchingEntries=Ns.prototype.extractMatchingEntries;Ns.prototype.storePayload=Ns.prototype.storePayload;function Os(a){return[void 0===a.auth?"undefined":a.auth,void 0===a.isJspb?"undefined":a.isJspb,void 0===a.cttAuthInfo?"undefined":a.cttAuthInfo].join("/")}
;function Rs(a,b){if(a)return a[b.name]}
;var Ss=sm("initial_gel_batch_timeout",2E3),Ts=sm("gel_queue_timeout_max_ms",6E4),Us=Math.pow(2,16)-1,Vs=void 0;function Ws(){this.j=this.h=this.i=0}
var Xs=new Ws,Ys=new Ws,Zs,$s=!0,at=y.ytLoggingTransportGELQueue_||new Map;A("ytLoggingTransportGELQueue_",at);var bt=y.ytLoggingTransportGELProtoQueue_||new Map;A("ytLoggingTransportGELProtoQueue_",bt);var ct=y.ytLoggingTransportTokensToCttTargetIds_||{};A("ytLoggingTransportTokensToCttTargetIds_",ct);var dt=y.ytLoggingTransportTokensToJspbCttTargetIds_||{};A("ytLoggingTransportTokensToJspbCttTargetIds_",dt);var et={};function ft(){var a=B("yt.logging.ims");a||(a=new Ns,A("yt.logging.ims",a));return a}
function gt(a,b){P("web_all_payloads_via_jspb")&&Cm(new Q("transport.log called for JSON in JSPB only experiment"));if("log_event"===a.endpoint){ht(a);var c=jt(a);if(P("use_new_in_memory_storage")){et[c]=!0;var d={cttAuthInfo:c,isJspb:!1};ft().storePayload(d,a.payload);kt(b,[],c,!1,d)}else d=at.get(c)||[],at.set(c,d),d.push(a.payload),kt(b,d,c)}}
function lt(a,b){if("log_event"===a.endpoint){ht(void 0,a);var c=jt(a,!0);if(P("use_new_in_memory_storage")){et[c]=!0;var d={cttAuthInfo:c,isJspb:!0};ft().storePayload(d,a.payload.toJSON());kt(b,[],c,!0,d)}else d=bt.get(c)||[],bt.set(c,d),a=a.payload.toJSON(),d.push(a),kt(b,d,c,!0)}}
function kt(a,b,c,d,e){d=void 0===d?!1:d;a&&(Vs=new a);a=sm("tvhtml5_logging_max_batch_ads_fork")||sm("tvhtml5_logging_max_batch")||sm("web_logging_max_batch")||100;var f=R(),g=d?Ys.j:Xs.j;b=b.length;e&&(b=ft().getSequenceCount(e));b>=a?Zs||(Zs=mt(function(){nt({writeThenSend:!0},P("flush_only_full_queue")?c:void 0,d);Zs=void 0},0)):10<=f-g&&(ot(d),d?Ys.j=f:Xs.j=f)}
function pt(a,b){P("web_all_payloads_via_jspb")&&Cm(new Q("transport.logIsolatedGelPayload called in JSPB only experiment"));if("log_event"===a.endpoint){ht(a);var c=jt(a),d=new Map;d.set(c,[a.payload]);b&&(Vs=new b);return new Af(function(e,f){Vs&&Vs.isReady()?qt(d,Vs,e,f,{bypassNetworkless:!0},!0):e()})}}
function rt(a,b){if("log_event"===a.endpoint){ht(void 0,a);var c=jt(a,!0),d=new Map;d.set(c,[a.payload.toJSON()]);b&&(Vs=new b);return new Af(function(e){Vs&&Vs.isReady()?st(d,Vs,e,{bypassNetworkless:!0},!0):e()})}}
function jt(a,b){var c="";if(a.dangerousLogToVisitorSession)c="visitorOnlyApprovedKey";else if(a.cttAuthInfo){if(void 0===b?0:b){b=a.cttAuthInfo.token;c=a.cttAuthInfo;var d=new bm;c.videoId?d.setVideoId(c.videoId):c.playlistId&&Qd(d,2,cm,c.playlistId);dt[b]=d}else b=a.cttAuthInfo,c={},b.videoId?c.videoId=b.videoId:b.playlistId&&(c.playlistId=b.playlistId),ct[a.cttAuthInfo.token]=c;c=a.cttAuthInfo.token}return c}
function nt(a,b,c){a=void 0===a?{}:a;c=void 0===c?!1:c;!c&&P("web_all_payloads_via_jspb")&&Cm(new Q("transport.flushLogs called for JSON in JSPB only experiment"));new Af(function(d,e){c?(tt(Ys.i),tt(Ys.h),Ys.h=0):(tt(Xs.i),tt(Xs.h),Xs.h=0);if(Vs&&Vs.isReady())if(P("use_new_in_memory_storage")){var f=a,g=c,h=Vs;f=void 0===f?{}:f;g=void 0===g?!1:g;var k=new Map,m=new Map;if(void 0!==b)g?(e=ft().extractMatchingEntries({isJspb:g,cttAuthInfo:b}),k.set(b,e),st(k,h,d,f)):(k=ft().extractMatchingEntries({isJspb:g,
cttAuthInfo:b}),m.set(b,k),qt(m,h,d,e,f));else if(g){e=r(Object.keys(et));for(g=e.next();!g.done;g=e.next())m=g.value,g=ft().extractMatchingEntries({isJspb:!0,cttAuthInfo:m}),0<g.length&&k.set(m,g),delete et[m];st(k,h,d,f)}else{k=r(Object.keys(et));for(g=k.next();!g.done;g=k.next()){g=g.value;var p=ft().extractMatchingEntries({isJspb:!1,cttAuthInfo:g});0<p.length&&m.set(g,p);delete et[g]}qt(m,h,d,e,f)}}else f=a,k=c,h=Vs,f=void 0===f?{}:f,k=void 0===k?!1:k,void 0!==b?k?(e=new Map,k=bt.get(b)||[],e.set(b,
k),st(e,h,d,f),bt.delete(b)):(k=new Map,m=at.get(b)||[],k.set(b,m),qt(k,h,d,e,f),at.delete(b)):k?(st(bt,h,d,f),bt.clear()):(qt(at,h,d,e,f),at.clear());else ot(c),d()})}
function ot(a){a=void 0===a?!1:a;if(P("web_gel_timeout_cap")&&(!a&&!Xs.h||a&&!Ys.h)){var b=mt(function(){nt({writeThenSend:!0},void 0,a)},Ts);
a?Ys.h=b:Xs.h=b}tt(a?Ys.i:Xs.i);b=M("LOGGING_BATCH_TIMEOUT",sm("web_gel_debounce_ms",1E4));P("shorten_initial_gel_batch_timeout")&&$s&&(b=Ss);b=mt(function(){nt({writeThenSend:!0},void 0,a)},b);
a?Ys.i=b:Xs.i=b}
function qt(a,b,c,d,e,f){e=void 0===e?{}:e;var g=Math.round(R()),h=a.size,k={};a=r(a);for(var m=a.next();!m.done;k={Sb:k.Sb,ab:k.ab,zb:k.zb,Ub:k.Ub,Tb:k.Tb},m=a.next()){var p=r(m.value);m=p.next().value;p=p.next().value;k.ab=vb({context:Up(b.config_||Tp())});if(!Qa(p)&&!P("throw_err_when_logevent_malformed_killswitch")){d();break}k.ab.events=p;(p=ct[m])&&ut(k.ab,m,p);delete ct[m];k.zb="visitorOnlyApprovedKey"===m;vt(k.ab,g,k.zb);wt(e);k.Ub=function(n){P("update_log_event_config")&&mi.fa(function(){return x(function(v){return w(v,
xt(n),0)})});
h--;h||c()};
k.Sb=0;k.Tb=function(n){return function(){n.Sb++;if(e.bypassNetworkless&&1===n.Sb)try{xq(b,"log_event",n.ab,zt({writeThenSend:!0},n.zb,n.Ub,n.Tb,f)),$s=!1}catch(v){Bm(v),d()}h--;h||c()}}(k);
try{xq(b,"log_event",k.ab,zt(e,k.zb,k.Ub,k.Tb,f)),$s=!1}catch(n){Bm(n),d()}}}
function st(a,b,c,d,e){d=void 0===d?{}:d;var f=Math.round(R()),g=a.size,h=new Map([].concat(ja(a)));h=r(h);for(var k=h.next();!k.done;k=h.next()){var m=r(k.value).next().value,p=a.get(m);k=new dm;var n=aq(b.config_||Tp());G(k,Jk,1,n);p=p?At(p):[];p=r(p);for(n=p.next();!n.done;n=p.next())Yd(k,3,Yl,n.value);(p=dt[m])&&Bt(k,m,p);delete dt[m];m="visitorOnlyApprovedKey"===m;Ct(k,f,m);wt(d);k=le(k);m=zt(d,m,function(v){P("update_log_event_config")&&mi.fa(function(){return x(function(t){return w(t,xt(v),
0)})});
g--;g||c()},function(){g--;
g||c()},e);
m.headers["Content-Type"]="application/json+protobuf";m.postBodyFormat="JSPB";m.postBody=k;xq(b,"log_event","",m);$s=!1}}
function wt(a){P("always_send_and_write")&&(a.writeThenSend=!1)}
function zt(a,b,c,d,e){a={retry:!0,onSuccess:c,onError:d,yd:a,dangerousLogToVisitorSession:b,Gt:!!e,headers:{},postBodyFormat:"",postBody:"",compress:P("compress_gel")};Dt()&&(a.headers["X-Goog-Request-Time"]=JSON.stringify(Math.round(R())));return a}
function vt(a,b,c){Dt()||(a.requestTimeMs=String(b));P("unsplit_gel_payloads_in_logs")&&(a.unsplitGelPayloadsInLogs=!0);!c&&(b=M("EVENT_ID"))&&(c=Et(),a.serializedClientEventId={serializedEventId:b,clientCounter:String(c)})}
function Ct(a,b,c){Dt()||E(a,2,b);if(!c&&(b=M("EVENT_ID"))){c=Et();var d=new am;E(d,1,b);E(d,2,c);G(a,am,5,d)}}
function Et(){var a=M("BATCH_CLIENT_COUNTER")||0;a||(a=Math.floor(Math.random()*Us/2));a++;a>Us&&(a=1);pm("BATCH_CLIENT_COUNTER",a);return a}
function ut(a,b,c){if(c.videoId)var d="VIDEO";else if(c.playlistId)d="PLAYLIST";else return;a.credentialTransferTokenTargetId=c;a.context=a.context||{};a.context.user=a.context.user||{};a.context.user.credentialTransferTokens=[{token:b,scope:d}]}
function Bt(a,b,c){var d=1===Rd(c,cm)?1:-1;if(Id(c,d))d=1;else if(c.getPlaylistId())d=2;else return;G(a,bm,4,c);a=Sd(a,Jk,1)||new Jk;c=Sd(a,Hk,3)||new Hk;var e=new Gk;E(e,2,b);E(e,1,d);Yd(c,12,Gk,e);G(a,Hk,3,c)}
function At(a){for(var b=[],c=0;c<a.length;c++)try{b.push(new Yl(a[c]))}catch(d){Bm(new Q("Transport failed to deserialize "+String(a[c])))}return b}
function ht(a,b){if(B("yt.logging.transport.enableScrapingForTest")){var c=B("yt.logging.transport.scrapedPayloadsForTesting"),d=B("yt.logging.transport.payloadToScrape","");b&&(b=B("yt.logging.transport.getScrapedPayloadFromClientEventsFunction").bind(b.payload)())&&c.push(b);a&&a.payload[d]&&c.push((null==a?void 0:a.payload)[d]);A("yt.logging.transport.scrapedPayloadsForTesting",c)}}
function Dt(){return P("use_request_time_ms_header")||P("lr_use_request_time_ms_header")}
function mt(a,b){return P("transport_use_scheduler")?Sn(a,b):Sm(a,b)}
function tt(a){P("transport_use_scheduler")?mi.Ca(a):window.clearTimeout(a)}
function xt(a){var b,c,d,e,f,g,h,k,m,p;return x(function(n){return 1==n.h?(d=null==(b=a)?void 0:null==(c=b.responseContext)?void 0:c.globalConfigGroup,e=Rs(d,sk),g=null==(f=d)?void 0:f.hotHashData,h=Rs(d,rk),m=null==(k=d)?void 0:k.coldHashData,p=Ms().resolve(Pp),g?e?w(n,Qp(p,g,e),2):w(n,Qp(p,g),2):n.A(2)):m?h?w(n,Rp(p,m,h),0):w(n,Rp(p,m),0):n.A(0)})}
;var Ft=y.ytLoggingGelSequenceIdObj_||{};A("ytLoggingGelSequenceIdObj_",Ft);
function Gt(a,b,c,d){d=void 0===d?{}:d;var e={},f=Math.round(d.timestamp||R());e.eventTimeMs=f<Number.MAX_SAFE_INTEGER?f:0;e[a]=b;P("enable_unknown_lact_fix_on_html5")&&qs();a=ts();e.context={lastActivityMs:String(d.timestamp||!isFinite(a)?-1:a)};P("log_sequence_info_on_gel_web")&&d.sequenceGroup&&(a=e.context,b=d.sequenceGroup,b={index:Ht(b),groupKey:b},a.sequence=b,d.endOfSequence&&delete Ft[d.sequenceGroup]);(d.sendIsolatedPayload?pt:gt)({endpoint:"log_event",payload:e,cttAuthInfo:d.cttAuthInfo,
dangerousLogToVisitorSession:d.dangerousLogToVisitorSession},c)}
function It(a){nt(void 0,void 0,void 0===a?!1:a)}
function Ht(a){Ft[a]=a in Ft?Ft[a]+1:0;return Ft[a]}
;var Jt=[];function io(a,b,c){c=void 0===c?{}:c;var d=ds;M("ytLoggingEventsDefaultDisabled",!1)&&ds===ds&&(d=null);P("web_all_payloads_via_jspb")?Jt.push({Mc:a,payload:b,options:c}):Gt(a,b,d,c)}
;var Kt=y.ytLoggingGelSequenceIdObj_||{};A("ytLoggingGelSequenceIdObj_",Kt);
function Lt(a,b,c){c=void 0===c?{}:c;var d=Math.round(c.timestamp||R());E(a,1,d<Number.MAX_SAFE_INTEGER?d:0);var e=ts();d=new Xl;E(d,1,c.timestamp||!isFinite(e)?-1:e);if(P("log_sequence_info_on_gel_web")&&c.sequenceGroup){e=c.sequenceGroup;var f=Ht(e),g=new Wl;E(g,2,f);E(g,1,e);G(d,Wl,3,g);c.endOfSequence&&delete Kt[c.sequenceGroup]}G(a,Xl,33,d);(c.sendIsolatedPayload?rt:lt)({endpoint:"log_event",payload:a,cttAuthInfo:c.cttAuthInfo,dangerousLogToVisitorSession:c.dangerousLogToVisitorSession},b)}
;function Mt(a,b){b=void 0===b?{}:b;var c=!1;M("ytLoggingEventsDefaultDisabled",!1)&&(c=!0);Lt(a,c?null:ds,b)}
;function Nt(a,b,c){var d=new Yl;Wd(d,Ll,72,Zl,a);c?Lt(d,c,b):Mt(d,b)}
function Ot(a,b,c){var d=new Yl;Wd(d,Kl,73,Zl,a);c?Lt(d,c,b):Mt(d,b)}
function Pt(a,b,c){var d=new Yl;Wd(d,Jl,78,Zl,a);c?Lt(d,c,b):Mt(d,b)}
function Qt(a,b,c){var d=new Yl;Wd(d,Ml,208,Zl,a);c?Lt(d,c,b):Mt(d,b)}
function Rt(a,b,c){var d=new Yl;Wd(d,El,156,Zl,a);c?Lt(d,c,b):Mt(d,b)}
function St(a,b,c){var d=new Yl;Wd(d,Gl,215,Zl,a);c?Lt(d,c,b):Mt(d,b)}
;var Tt=new Set,Ut=0,Vt=0,Wt=0,Xt=[],Yt=["PhantomJS","Googlebot","TO STOP THIS SECURITY SCAN go/scan"];function ho(a){Zt(a)}
function $t(a){Zt(a,"WARNING")}
function Zt(a,b,c,d,e,f){f=void 0===f?{}:f;f.name=c||M("INNERTUBE_CONTEXT_CLIENT_NAME",1);f.version=d||M("INNERTUBE_CONTEXT_CLIENT_VERSION");var g=f||{},h=void 0===b?"ERROR":b;h=void 0===h?"ERROR":h;if(a){a.hasOwnProperty("level")&&a.level&&(h=a.level);if(P("console_log_js_exceptions")){var k=[];k.push("Name: "+a.name);k.push("Message: "+a.message);a.hasOwnProperty("params")&&k.push("Error Params: "+JSON.stringify(a.params));a.hasOwnProperty("args")&&k.push("Error args: "+JSON.stringify(a.args));
k.push("File name: "+a.fileName);k.push("Stacktrace: "+a.stack);window.console.log(k.join("\n"),a)}if(!(5<=Ut)){var m=Xt,p=xe(a),n=p.message||"Unknown Error",v=p.name||"UnknownError",t=p.stack||a.i||"Not available";if(t.startsWith(v+": "+n)){var z=t.split("\n");z.shift();t=z.join("\n")}var D=p.lineNumber||"Not available",F=p.fileName||"Not available",N=t,O=0;if(a.hasOwnProperty("args")&&a.args&&a.args.length)for(var T=0;T<a.args.length&&!(O=sn(a.args[T],"params."+T,g,O),500<=O);T++);else if(a.hasOwnProperty("params")&&
a.params){var aa=a.params;if("object"===typeof a.params)for(var W in aa){if(aa[W]){var xb="params."+W,$a=un(aa[W]);g[xb]=$a;O+=xb.length+$a.length;if(500<O)break}}else g.params=un(aa)}if(m.length)for(var qa=0;qa<m.length&&!(O=sn(m[qa],"params.context."+qa,g,O),500<=O);qa++);navigator.vendor&&!g.hasOwnProperty("vendor")&&(g["device.vendor"]=navigator.vendor);var I={message:n,name:v,lineNumber:D,fileName:F,stack:N,params:g,sampleWeight:1},oa=Number(a.columnNumber);isNaN(oa)||(I.lineNumber=I.lineNumber+
":"+oa);if("IGNORED"===a.level)var ha=0;else a:{for(var df=on(),ef=r(df.Va),Md=ef.next();!Md.done;Md=ef.next()){var ta=Md.value;if(I.message&&I.message.match(ta.Rt)){ha=ta.weight;break a}}for(var Pq=r(df.Ra),Xk=Pq.next();!Xk.done;Xk=Pq.next()){var Qq=Xk.value;if(Qq.callback(I)){ha=Qq.weight;break a}}ha=1}I.sampleWeight=ha;for(var Rq=r(jn),Yk=Rq.next();!Yk.done;Yk=Rq.next()){var Zk=Yk.value;if(Zk.lc[I.name])for(var Sq=r(Zk.lc[I.name]),$k=Sq.next();!$k.done;$k=Sq.next()){var Tq=$k.value,yh=I.message.match(Tq.regexp);
if(yh){I.params["params.error.original"]=yh[0];for(var al=Tq.groups,Uq={},Nd=0;Nd<al.length;Nd++)Uq[al[Nd]]=yh[Nd+1],I.params["params.error."+al[Nd]]=yh[Nd+1];I.message=Zk.Ic(Uq);break}}}I.params||(I.params={});var Vq=on();I.params["params.errorServiceSignature"]="msg="+Vq.Va.length+"&cb="+Vq.Ra.length;I.params["params.serviceWorker"]="false";y.document&&y.document.querySelectorAll&&(I.params["params.fscripts"]=String(document.querySelectorAll("script:not([nonce])").length));Db("sample").constructor!==
Bb&&(I.params["params.fconst"]="true");window.yterr&&"function"===typeof window.yterr&&window.yterr(I);if(0!==I.sampleWeight&&!Tt.has(I.message)){if("ERROR"===h){pn.cb("handleError",I);if(P("record_app_crashed_web")&&0===Wt&&1===I.sampleWeight)if(Wt++,P("errors_via_jspb")){var bl=new vl;E(bl,1,1);if(!P("report_client_error_with_app_crash_ks")){var Wq=new ql;E(Wq,1,I.message);var Xq=new rl;G(Xq,ql,3,Wq);var Yq=new sl;G(Yq,rl,5,Xq);var Zq=new tl;G(Zq,sl,9,Yq);G(bl,tl,4,Zq)}var $q=new Yl;Wd($q,vl,20,
Zl,bl);Mt($q)}else{var ar={appCrashType:"APP_CRASH_TYPE_BREAKPAD"};P("report_client_error_with_app_crash_ks")||(ar.systemHealth={crashData:{clientError:{logMessage:{message:I.message}}}});io("appCrashed",ar)}Vt++}else"WARNING"===h&&pn.cb("handleWarning",I);if(P("kevlar_gel_error_routing"))a:{var ff=h;if(P("errors_via_jspb")){if(au())var cr=void 0;else{var Od=new Uk;E(Od,1,I.stack);I.fileName&&E(Od,4,I.fileName);var Qb=I.lineNumber&&I.lineNumber.split?I.lineNumber.split(":"):[];0!==Qb.length&&(1!==
Qb.length||isNaN(Number(Qb[0]))?2!==Qb.length||isNaN(Number(Qb[0]))||isNaN(Number(Qb[1]))||(E(Od,2,Number(Qb[0])),E(Od,3,Number(Qb[1]))):E(Od,2,Number(Qb[0])));var Qc=new ql;E(Qc,1,I.message);E(Qc,3,I.name);E(Qc,6,I.sampleWeight);"ERROR"===ff?E(Qc,2,2):"WARNING"===ff?E(Qc,2,1):E(Qc,2,0);var cl=new Vk;E(cl,1,!0);Wd(cl,Uk,3,Wk,Od);var nc=new Sk;E(nc,3,window.location.href);for(var dr=M("FEXP_EXPERIMENTS",[]),dl=0;dl<dr.length;dl++){var Rx=dr[dl];Cd(nc);Ld(nc,5,2,!1,!1).push(Rx)}var el=M("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS");
if(!qm()&&el)for(var er=r(Object.keys(el)),Rc=er.next();!Rc.done;Rc=er.next()){var fr=Rc.value,fl=new Rk;E(fl,1,fr);E(fl,2,String(el[fr]));Yd(nc,4,Rk,fl)}var gl=I.params;if(gl){var gr=r(Object.keys(gl));for(Rc=gr.next();!Rc.done;Rc=gr.next()){var hr=Rc.value,hl=new Rk;E(hl,1,"client."+hr);E(hl,2,String(gl[hr]));Yd(nc,4,Rk,hl)}}var ir=M("SERVER_NAME"),jr=M("SERVER_VERSION");if(ir&&jr){var il=new Rk;E(il,1,"server.name");E(il,2,ir);Yd(nc,4,Rk,il);var jl=new Rk;E(jl,1,"server.version");E(jl,2,jr);Yd(nc,
4,Rk,jl)}var zh=new rl;G(zh,Sk,1,nc);G(zh,Vk,2,cl);G(zh,ql,3,Qc);cr=zh}var kr=cr;if(!kr)break a;var lr=new Yl;Wd(lr,rl,163,Zl,kr);Mt(lr)}else{if(au())var mr=void 0;else{var gf={stackTrace:I.stack};I.fileName&&(gf.filename=I.fileName);var Rb=I.lineNumber&&I.lineNumber.split?I.lineNumber.split(":"):[];0!==Rb.length&&(1!==Rb.length||isNaN(Number(Rb[0]))?2!==Rb.length||isNaN(Number(Rb[0]))||isNaN(Number(Rb[1]))||(gf.lineNumber=Number(Rb[0]),gf.columnNumber=Number(Rb[1])):gf.lineNumber=Number(Rb[0]));
var kl={level:"ERROR_LEVEL_UNKNOWN",message:I.message,errorClassName:I.name,sampleWeight:I.sampleWeight};"ERROR"===ff?kl.level="ERROR_LEVEL_ERROR":"WARNING"===ff&&(kl.level="ERROR_LEVEL_WARNNING");var Sx={isObfuscated:!0,browserStackInfo:gf},Pd={pageUrl:window.location.href,kvPairs:[]};M("FEXP_EXPERIMENTS")&&(Pd.experimentIds=M("FEXP_EXPERIMENTS"));var ll=M("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS");if(!qm()&&ll)for(var nr=r(Object.keys(ll)),Sc=nr.next();!Sc.done;Sc=nr.next()){var or=Sc.value;Pd.kvPairs.push({key:or,
value:String(ll[or])})}var ml=I.params;if(ml){var pr=r(Object.keys(ml));for(Sc=pr.next();!Sc.done;Sc=pr.next()){var qr=Sc.value;Pd.kvPairs.push({key:"client."+qr,value:String(ml[qr])})}}var rr=M("SERVER_NAME"),sr=M("SERVER_VERSION");rr&&sr&&(Pd.kvPairs.push({key:"server.name",value:rr}),Pd.kvPairs.push({key:"server.version",value:sr}));mr={errorMetadata:Pd,stackTrace:Sx,logMessage:kl}}var tr=mr;if(!tr)break a;io("clientError",tr)}if("ERROR"===ff||P("errors_flush_gel_always_killswitch"))b:{if(P("web_fp_via_jspb")&&
(It(!0),!P("web_fp_via_jspb_and_json")))break b;It()}}if(!P("suppress_error_204_logging")){var hf=I.params||{},oc={urlParams:{a:"logerror",t:"jserror",type:I.name,msg:I.message.substr(0,250),line:I.lineNumber,level:h,"client.name":hf.name},postParams:{url:M("PAGE_NAME",window.location.href),file:I.fileName},method:"POST"};hf.version&&(oc["client.version"]=hf.version);if(oc.postParams){I.stack&&(oc.postParams.stack=I.stack);for(var ur=r(Object.keys(hf)),nl=ur.next();!nl.done;nl=ur.next()){var vr=nl.value;
oc.postParams["client."+vr]=hf[vr]}var ol=M("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS");if(ol)for(var wr=r(Object.keys(ol)),pl=wr.next();!pl.done;pl=wr.next()){var xr=pl.value;oc.postParams[xr]=ol[xr]}var yr=M("SERVER_NAME"),zr=M("SERVER_VERSION");yr&&zr&&(oc.postParams["server.name"]=yr,oc.postParams["server.version"]=zr)}Ym(M("ECATCHER_REPORT_HOST","")+"/error_204",oc)}try{Tt.add(I.message)}catch(Az){}Ut++}}}}
function au(){for(var a=r(Yt),b=a.next();!b.done;b=a.next())if(hn(b.value.toLowerCase()))return!0;return!1}
function bu(a){var b=Ka.apply(1,arguments);a.args||(a.args=[]);a.args.push.apply(a.args,ja(b))}
;function cu(){this.register=new Map}
function du(a){a=r(a.register.values());for(var b=a.next();!b.done;b=a.next())b.value.Vt("ABORTED")}
cu.prototype.clear=function(){du(this);this.register.clear()};
var eu=new cu;var fu=Date.now().toString();function gu(){for(var a=Array(16),b=0;16>b;b++){for(var c=Date.now(),d=0;d<c%23;d++)a[b]=Math.random();a[b]=Math.floor(256*Math.random())}if(fu)for(b=1,c=0;c<fu.length;c++)a[b%16]=a[b%16]^a[(b-1)%16]/4^fu.charCodeAt(c),b++;return a}
function hu(){if(window.crypto&&window.crypto.getRandomValues)try{var a=Array(16),b=new Uint8Array(16);window.crypto.getRandomValues(b);for(var c=0;c<a.length;c++)a[c]=b[c];return a}catch(d){}return gu()}
function iu(){for(var a=hu(),b=[],c=0;c<a.length;c++)b.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(a[c]&63));return b.join("")}
;var ju=y.ytLoggingDocDocumentNonce_;ju||(ju=iu(),A("ytLoggingDocDocumentNonce_",ju));var ku=ju;var lu={Uj:0,hg:1,rg:2,Tn:3,Wj:4,Ls:5,Oo:6,Gq:7,Vp:8,tq:9,0:"DEFAULT",1:"CHAT",2:"CONVERSATIONS",3:"MINIPLAYER",4:"DIALOG",5:"VOZ",6:"MUSIC_WATCH_TABS",7:"SHARE",8:"PUSH_NOTIFICATIONS",9:"RICH_GRID_WATCH"};function mu(a){this.O=a}
function nu(a){return new mu({trackingParams:a})}
mu.prototype.getAsJson=function(){var a={};void 0!==this.O.trackingParams?a.trackingParams=this.O.trackingParams:(a.veType=this.O.veType,void 0!==this.O.veCounter&&(a.veCounter=this.O.veCounter),void 0!==this.O.elementIndex&&(a.elementIndex=this.O.elementIndex));void 0!==this.O.dataElement&&(a.dataElement=this.O.dataElement.getAsJson());void 0!==this.O.youtubeData&&(a.youtubeData=this.O.youtubeData);return a};
mu.prototype.getAsJspb=function(){var a=new xl;if(void 0!==this.O.trackingParams){var b=this.O.trackingParams;if(null!=b)if("string"===typeof b)b=b?new ld(b,id):md();else if(b.constructor!==ld)if(hd(b))b=b.length?new ld(new Uint8Array(b),id):md();else throw Error();E(a,1,b)}else void 0!==this.O.veType&&E(a,2,this.O.veType),void 0!==this.O.veCounter&&E(a,6,this.O.veCounter),void 0!==this.O.elementIndex&&E(a,3,this.O.elementIndex);void 0!==this.O.dataElement&&(b=this.O.dataElement.getAsJspb(),G(a,xl,
7,b));void 0!==this.O.youtubeData&&G(a,tk,8,this.O.jspbYoutubeData);return a};
mu.prototype.toString=function(){return JSON.stringify(this.getAsJson())};
mu.prototype.isClientVe=function(){return!this.O.trackingParams&&!!this.O.veType};function ou(a){a=void 0===a?0:a;return 0===a?"client-screen-nonce":"client-screen-nonce."+a}
function pu(a){a=void 0===a?0:a;return 0===a?"ROOT_VE_TYPE":"ROOT_VE_TYPE."+a}
function qu(a){return M(pu(void 0===a?0:a))}
A("yt_logging_screen.getRootVeType",qu);function ru(a){return(a=qu(void 0===a?0:a))?new mu({veType:a,youtubeData:void 0,jspbYoutubeData:void 0}):null}
function su(){var a=M("csn-to-ctt-auth-info");a||(a={},pm("csn-to-ctt-auth-info",a));return a}
function tu(a){a=M(ou(void 0===a?0:a));if(!a&&!M("USE_CSN_FALLBACK",!0))return null;a||(a="UNDEFINED_CSN");return a?a:null}
A("yt_logging_screen.getCurrentCsn",tu);function uu(a){for(var b=r(Object.values(lu)),c=b.next();!c.done;c=b.next())if(tu(c.value)===a)return!0;return!1}
function vu(a,b,c){var d=su();(c=tu(c))&&delete d[c];b&&(d[a]=b)}
function wu(a){return su()[a]}
A("yt_logging_screen.getCttAuthInfo",wu);function xu(a,b,c,d){c=void 0===c?0:c;if(a!==M(ou(c))||b!==M(pu(c)))if(vu(a,d,c),pm(ou(c),a),pm(pu(c),b),b=function(){setTimeout(function(){if(a)if(P("web_time_via_jspb")){var e=new yl;E(e,1,ku);E(e,2,a);var f=new Yl;Wd(f,yl,111,Zl,e);Mt(f)}else io("foregroundHeartbeatScreenAssociated",{clientDocumentNonce:ku,clientScreenNonce:a})},0)},"requestAnimationFrame"in window)try{window.requestAnimationFrame(b)}catch(e){b()}else b()}
A("yt_logging_screen.setCurrentScreen",xu);var yu=window.yt&&window.yt.msgs_||window.ytcfg&&window.ytcfg.msgs||{};A("yt.msgs_",yu);function zu(a){km(yu,arguments)}
;var Au={gg:3611,kf:27686,lf:85013,mf:23462,pf:157557,qf:42016,rf:62407,sf:26926,nf:43781,tf:51236,uf:79148,vf:50160,wf:77504,If:153587,Jf:87907,Kf:18630,Lf:54445,Mf:80935,Nf:152172,Of:105675,Pf:150723,Qf:37521,Rf:147285,Sf:47786,Tf:98349,Uf:168271,Vf:168954,Wf:168277,Xf:168273,Yf:168270,Zf:123695,ag:6827,cg:29434,dg:171388,eg:7282,fg:124448,jg:32276,ig:76278,kg:147868,lg:147869,mg:93911,ng:106531,og:27259,pg:27262,qg:27263,sg:21759,tg:27107,ug:62936,vg:160866,wg:49568,xg:171243,yg:160789,zg:171244,
Ag:171241,Bg:171245,Cg:171242,Dg:38408,Eg:80637,Fg:68727,Gg:68728,Hg:80353,Ig:80356,Jg:74610,Kg:45707,Lg:83962,Mg:83970,Ng:46713,Og:166591,Pg:89711,Qg:74612,Rg:155792,Sg:93265,Tg:74611,Ug:131380,Wg:128979,Xg:139311,Yg:128978,Vg:131391,Zg:105350,bh:139312,dh:134800,ah:131392,fh:113533,gh:93252,hh:99357,jh:94521,kh:114252,lh:113532,mh:94522,ih:94583,nh:88E3,oh:139580,ph:93253,qh:93254,rh:94387,sh:94388,th:93255,uh:97424,eh:72502,vh:110111,wh:76019,yh:117092,zh:117093,xh:89431,Ah:110466,Bh:77240,Ch:60508,
Dh:148123,Eh:148124,Fh:137401,Gh:137402,Hh:137046,Ih:73393,Jh:113534,Kh:92098,Lh:131381,Mh:84517,Nh:83759,Oh:162711,Ph:162712,Qh:80357,Rh:86113,Sh:72598,Th:168413,Uh:72733,Vh:107349,Wh:124275,Xh:118203,Yh:133275,Zh:160157,ai:152569,bi:156651,ci:133274,di:160159,fi:160158,gi:133272,hi:133273,ii:133276,ji:144507,ki:143247,li:156652,mi:143248,ni:143249,oi:143250,ri:143251,si:156653,ti:144401,wi:117431,vi:133797,xi:153964,yi:128572,zi:133405,Ai:117429,Bi:117430,Ci:117432,Di:120080,Ei:117259,Fi:156655,
Gi:156654,Hi:121692,Ii:145656,Ji:156656,Ki:145655,Li:145653,Mi:145654,Ni:145657,Oi:132972,Pi:133051,Qi:133658,Ri:132971,Si:97615,Ui:143359,Ti:143356,Wi:143361,Vi:143358,Yi:143360,Xi:143357,Zi:142303,aj:143353,bj:143354,cj:144479,dj:143355,ej:31402,gj:133624,hj:146477,ij:133623,jj:133622,fj:133621,kj:84774,mj:160801,lj:95117,nj:150497,oj:98930,pj:98931,qj:98932,rj:153320,sj:153321,tj:43347,uj:129889,vj:149123,wj:45474,xj:100352,yj:84758,zj:98443,Aj:117985,Bj:74613,Cj:155911,Dj:74614,Ej:64502,Fj:136032,
Gj:74615,Hj:74616,Ij:122224,Jj:74617,Kj:77820,Lj:74618,Mj:93278,Nj:93274,Oj:93275,Pj:93276,Qj:22110,Rj:29433,Sj:133798,Tj:132295,Vj:120541,Xj:82047,Yj:113550,Zj:75836,ak:75837,bk:42352,ck:84512,dk:76065,ek:75989,jk:51879,kk:16623,lk:32594,mk:27240,nk:32633,pk:74858,qk:156999,sk:3945,rk:16989,tk:45520,uk:25488,vk:25492,wk:25494,xk:55760,yk:14057,zk:18451,Ak:57204,Bk:57203,Ck:17897,Dk:57205,Ek:18198,Fk:17898,Gk:17909,Hk:43980,Ik:46220,Jk:11721,Kk:147994,Lk:49954,Mk:96369,Nk:3854,Ok:151633,Pk:56251,
Qk:159108,Rk:25624,Sk:152036,pl:16906,ql:99999,rl:68172,sl:27068,ul:47973,vl:72773,wl:26970,xl:26971,yl:96805,zl:17752,Al:73233,Bl:109512,Cl:22256,Dl:14115,El:22696,Fl:89278,Gl:89277,Hl:109513,Il:43278,Jl:43459,Kl:43464,Ll:89279,Ml:43717,Nl:55764,Ol:22255,Pl:147912,Ql:89281,Rl:40963,Sl:43277,Tl:43442,Ul:91824,Vl:120137,Wl:96367,Xl:36850,Yl:72694,Zl:37414,am:36851,cm:124863,bm:121343,dm:73491,em:54473,fm:166861,gm:43375,hm:46674,im:143815,jm:139095,km:144402,lm:149968,mm:149969,nm:32473,om:72901,pm:72906,
qm:50947,rm:50612,sm:50613,tm:50942,um:84938,vm:84943,wm:84939,xm:84941,ym:84944,zm:84940,Am:84942,Bm:35585,Cm:51926,Dm:79983,Em:63238,Fm:18921,Gm:63241,Hm:57893,Im:41182,Jm:135732,Km:33424,Lm:22207,Mm:42993,Nm:36229,Om:22206,Pm:22205,Qm:18993,Rm:19001,Sm:18990,Tm:18991,Um:18997,Vm:18725,Wm:19003,Xm:36874,Ym:44763,Zm:33427,an:67793,bn:22182,cn:37091,dn:34650,en:50617,fn:47261,gn:22287,hn:25144,jn:97917,kn:62397,ln:150871,mn:150874,nn:125598,pn:137935,qn:36961,rn:108035,sn:27426,tn:27857,un:27846,
vn:27854,wn:69692,xn:61411,yn:39299,zn:38696,An:62520,Bn:36382,Cn:108701,Dn:50663,En:36387,Fn:14908,Gn:37533,Hn:105443,In:61635,Jn:62274,Kn:161670,Ln:133818,Mn:65702,Nn:65703,On:65701,Pn:76256,Qn:166382,Rn:37671,Sn:49953,Un:36216,Vn:28237,Wn:39553,Xn:29222,Yn:26107,Zn:38050,ao:26108,co:120745,bo:26109,eo:26110,fo:66881,ho:28236,jo:14586,ko:160598,lo:57929,mo:74723,no:44098,oo:44099,ro:23528,so:61699,po:134104,qo:134103,to:59149,vo:101951,uo:171502,wo:97346,xo:118051,yo:95102,zo:64882,Ao:119505,Bo:63595,
Co:63349,Do:95101,Eo:75240,Fo:27039,Go:68823,Ho:21537,Io:83464,Jo:75707,Ko:170215,Lo:83113,Mo:101952,No:101953,Po:79610,Qo:125755,Ro:24402,So:24400,To:32925,Vo:57173,Uo:156421,Wo:122502,Xo:145268,Yo:138480,Zo:64423,ap:64424,bp:33986,cp:100828,ep:129089,fp:21409,jp:135155,kp:135156,lp:135157,mp:135158,np:158225,qp:135159,rp:135160,sp:167651,tp:135161,vp:135162,wp:135163,up:158226,xp:158227,yp:135164,zp:135165,Ap:135166,gp:11070,hp:11074,ip:17880,Cp:30709,Dp:30707,Ep:30711,Fp:30710,Gp:30708,Bp:26984,
Hp:146143,Ip:63648,Jp:63649,Kp:111059,Lp:5754,Mp:20445,Np:151308,Op:151152,Rp:130975,Qp:130976,Pp:167637,Sp:110386,Tp:113746,Up:66557,Wp:17310,Xp:28631,Yp:21589,Zp:164817,aq:168011,bq:154946,cq:68012,fq:162617,gq:60480,hq:138664,iq:141121,jq:164502,kq:31571,lq:141978,mq:150105,nq:150106,oq:150107,pq:150108,qq:76980,rq:41577,sq:45469,uq:38669,wq:13768,xq:13777,yq:141842,zq:62985,Aq:4724,Bq:59369,Cq:43927,Dq:43928,Eq:12924,Fq:100355,Iq:56219,Jq:27669,Kq:10337,Hq:47896,Lq:122629,Nq:139723,Mq:139722,
Oq:121258,Pq:107598,Qq:127991,Rq:96639,Sq:107536,Tq:130169,Uq:96661,Vq:145188,Wq:96658,Xq:116646,Yq:159428,br:168611,dr:168612,Zq:121122,er:96660,fr:127738,gr:127083,hr:155281,ir:162959,jr:163566,kr:147842,lr:104443,mr:96659,pr:147595,qr:106442,rr:162776,sr:134840,tr:63667,ur:63668,vr:63669,wr:130686,xr:147036,yr:78314,zr:147799,Ar:148649,Br:55761,Cr:127098,Dr:134841,Er:96368,Fr:67374,Gr:48992,Hr:146176,Ir:49956,Jr:31961,Kr:26388,Lr:23811,Mr:5E4,Nr:126250,Or:96370,Pr:47355,Qr:47356,Rr:37935,Sr:45521,
Tr:21760,Ur:83769,Vr:49977,Wr:49974,Xr:93497,Yr:93498,Zr:34325,bs:140759,ds:115803,es:123707,gs:100081,hs:35309,ks:68314,ls:25602,ms:100339,ns:170873,qs:143516,rs:59018,ts:18248,us:50625,vs:9729,ws:37168,xs:37169,ys:21667,zs:16749,As:18635,Bs:39305,Cs:18046,Ds:53969,Es:8213,Fs:93926,Gs:102852,Hs:110099,Is:22678,Js:69076,Ks:137575,Ms:139224,Ns:100856,Os:154430,Ps:17736,Qs:3832,Rs:147111,Ss:55759,Ts:64031,Zs:93044,bt:93045,ct:170701,et:170702,ht:34388,ft:167841,gt:170419,jt:17657,kt:17655,lt:39579,
mt:39578,nt:170412,ot:77448,pt:8196,qt:11357,rt:69877,tt:8197,ut:168501,vt:156512,wt:161613,xt:156509,zt:161612,At:161614,Bt:82039};function Bu(){var a=ub(Cu),b;return(new Af(function(c,d){a.onSuccess=function(e){Rm(e)?c(new Du(e)):d(new Eu("Request failed, status="+(e&&"status"in e?e.status:-1),"net.badstatus",e))};
a.onError=function(e){d(new Eu("Unknown request error","net.unknown",e))};
a.onTimeout=function(e){d(new Eu("Request timed out","net.timeout",e))};
b=Ym("//googleads.g.doubleclick.net/pagead/id",a)})).sc(function(c){c instanceof Hf&&b.abort();
return Ff(c)})}
function Eu(a,b,c){bb.call(this,a+", errorCode="+b);this.errorCode=b;this.xhr=c;this.name="PromiseAjaxError"}
u(Eu,bb);function Du(a){this.xhr=a}
;function Fu(){this.h=0;this.za=null}
Fu.prototype.then=function(a,b,c){return 1===this.h&&a?(a=a.call(c,this.za))&&"function"===typeof a.then?a:Gu(a):2===this.h&&b?(a=b.call(c,this.za))&&"function"===typeof a.then?a:Hu(a):this};
Fu.prototype.getValue=function(){return this.za};
Fu.prototype.$goog_Thenable=!0;function Hu(a){var b=new Fu;a=void 0===a?null:a;b.h=2;b.za=void 0===a?null:a;return b}
function Gu(a){var b=new Fu;a=void 0===a?null:a;b.h=1;b.za=void 0===a?null:a;return b}
;function Iu(a,b){var c=void 0===c?{}:c;a={method:void 0===b?"POST":b,mode:Mm(a)?"same-origin":"cors",credentials:Mm(a)?"same-origin":"include"};b={};for(var d=r(Object.keys(c)),e=d.next();!e.done;e=d.next())e=e.value,c[e]&&(b[e]=c[e]);0<Object.keys(b).length&&(a.headers=b);return a}
;function Ju(){return Ag()||gn&&hn("applewebkit")&&!hn("version")&&(!hn("safari")||hn("gsa/"))||Lc&&hn("version/")?!0:M("EOM_VISITOR_DATA")?!1:!0}
;function Ku(a){a:{var b=a.raw_embedded_player_response;if(!b&&(a=a.embedded_player_response))try{b=JSON.parse(a)}catch(d){b="EMBEDDED_PLAYER_MODE_UNKNOWN";break a}if(b)b:{for(var c in Ok)if(Ok[c]==b.embeddedPlayerMode){b=Ok[c];break b}b="EMBEDDED_PLAYER_MODE_UNKNOWN"}else b="EMBEDDED_PLAYER_MODE_UNKNOWN"}return"EMBEDDED_PLAYER_MODE_PFL"===b}
;function Lu(a){bb.call(this,a.message||a.description||a.name);this.isMissing=a instanceof Mu;this.isTimeout=a instanceof Eu&&"net.timeout"==a.errorCode;this.isCanceled=a instanceof Hf}
u(Lu,bb);Lu.prototype.name="BiscottiError";function Mu(){bb.call(this,"Biscotti ID is missing from server")}
u(Mu,bb);Mu.prototype.name="BiscottiMissingError";var Cu={format:"RAW",method:"GET",timeout:5E3,withCredentials:!0},Nu=null;function Ou(){if(P("disable_biscotti_fetch_entirely_for_all_web_clients"))return Error("Biscotti id fetching has been disabled entirely.");if(!Ju())return Error("User has not consented - not fetching biscotti id.");var a=M("PLAYER_VARS",{});if("1"==sb(a))return Error("Biscotti ID is not available in private embed mode");if(Ku(a))return Error("Biscotti id fetching has been disabled for pfl.")}
function wm(){var a=Ou();if(void 0!==a)return Ff(a);Nu||(Nu=Bu().then(Pu).sc(function(b){return Qu(2,b)}));
return Nu}
function Pu(a){a=a.xhr.responseText;if(0!=a.lastIndexOf(")]}'",0))throw new Mu;a=JSON.parse(a.substr(4));if(1<(a.type||1))throw new Mu;a=a.id;xm(a);Nu=Gu(a);Ru(18E5,2);return a}
function Qu(a,b){b=new Lu(b);xm("");Nu=Hu(b);0<a&&Ru(12E4,a-1);throw b;}
function Ru(a,b){Sm(function(){Bu().then(Pu,function(c){return Qu(b,c)}).sc(db)},a)}
function Su(){try{var a=B("yt.ads.biscotti.getId_");return a?a():wm()}catch(b){return Ff(b)}}
;function Tu(a){if("1"!=sb(M("PLAYER_VARS",{}))){a&&vm();try{Su().then(function(){},function(){}),Sm(Tu,18E5)}catch(b){Bm(b)}}}
;function Uu(){var a=Fn.getInstance(),b=In(119),c=1<window.devicePixelRatio;if(document.body&&wi(document.body,"exp-invert-logo"))if(c&&!wi(document.body,"inverted-hdpi")){var d=document.body;if(d.classList)d.classList.add("inverted-hdpi");else if(!wi(d,"inverted-hdpi")){var e=ui(d);vi(d,e+(0<e.length?" inverted-hdpi":"inverted-hdpi"))}}else!c&&wi(document.body,"inverted-hdpi")&&xi();if(b!=c){b="f"+(Math.floor(119/31)+1);d=Jn(b)||0;d=c?d|67108864:d&-67108865;0==d?delete En[b]:(c=d.toString(16),En[b]=
c.toString());c=!0;P("web_secure_pref_cookie_killswitch")&&(c=!1);b=a.h;d=[];for(var f in En)d.push(f+"="+encodeURIComponent(String(En[f])));Bn(b,d.join("&"),63072E3,a.i,c)}}
;var Vu=new Map([["dark","USER_INTERFACE_THEME_DARK"],["light","USER_INTERFACE_THEME_LIGHT"]]);function Wu(){var a=void 0===a?window.location.href:a;if(P("kevlar_disable_theme_param"))return null;lc(mc(5,a));try{var b=Km(a).theme;return Vu.get(b)||null}catch(c){}return null}
;function Xu(){this.h={};if(this.i=Dn()){var a=yg.get("CONSISTENCY",void 0);a&&Yu(this,{encryptedTokenJarContents:a})}}
Xu.prototype.handleResponse=function(a,b){if(!b)throw Error("request needs to be passed into ConsistencyService");var c,d;b=(null==(c=b.La.context)?void 0:null==(d=c.request)?void 0:d.consistencyTokenJars)||[];var e;if(a=null==(e=a.responseContext)?void 0:e.consistencyTokenJar){e=r(b);for(c=e.next();!c.done;c=e.next())delete this.h[c.value.encryptedTokenJarContents];Yu(this,a)}};
function Yu(a,b){if(b.encryptedTokenJarContents&&(a.h[b.encryptedTokenJarContents]=b,"string"===typeof b.expirationSeconds)){var c=Number(b.expirationSeconds);setTimeout(function(){delete a.h[b.encryptedTokenJarContents]},1E3*c);
a.i&&Bn("CONSISTENCY",b.encryptedTokenJarContents,c,void 0,!0)}}
;var Zu=window.location.hostname.split(".").slice(-2).join(".");function $u(){var a=M("LOCATION_PLAYABILITY_TOKEN");"TVHTML5"===M("INNERTUBE_CLIENT_NAME")&&(this.h=av(this))&&(a=this.h.get("yt-location-playability-token"));a&&(this.locationPlayabilityToken=a,this.i=void 0)}
var bv;$u.getInstance=function(){bv=B("yt.clientLocationService.instance");bv||(bv=new $u,A("yt.clientLocationService.instance",bv));return bv};
l=$u.prototype;l.setLocationOnInnerTubeContext=function(a){a.client||(a.client={});this.i?(a.client.locationInfo||(a.client.locationInfo={}),a.client.locationInfo.latitudeE7=Math.floor(1E7*this.i.coords.latitude),a.client.locationInfo.longitudeE7=Math.floor(1E7*this.i.coords.longitude),a.client.locationInfo.horizontalAccuracyMeters=Math.round(this.i.coords.accuracy),a.client.locationInfo.forceLocationPlayabilityTokenRefresh=!0):this.locationPlayabilityToken&&(a.client.locationPlayabilityToken=this.locationPlayabilityToken)};
l.handleResponse=function(a){var b;a=null==(b=a.responseContext)?void 0:b.locationPlayabilityToken;void 0!==a&&(this.locationPlayabilityToken=a,this.i=void 0,"TVHTML5"===M("INNERTUBE_CLIENT_NAME")?(this.h=av(this))&&this.h.set("yt-location-playability-token",a,15552E3):Bn("YT_CL",JSON.stringify({loctok:a}),15552E3,Zu,!0))};
function av(a){return void 0===a.h?new Zn("yt-client-location"):a.h}
l.clearLocationPlayabilityToken=function(a){"TVHTML5"===a?(this.h=av(this))&&this.h.remove("yt-location-playability-token"):Cn("YT_CL")};
l.getCurrentPositionFromGeolocation=function(){var a=this;if(!(navigator&&navigator.geolocation&&navigator.geolocation.getCurrentPosition))return Promise.reject(Error("Geolocation unsupported"));var b=!1,c=1E4;"MWEB"===M("INNERTUBE_CLIENT_NAME")&&(b=!0,c=15E3);return new Promise(function(d,e){navigator.geolocation.getCurrentPosition(function(f){a.i=f;d(f)},function(f){e(f)},{enableHighAccuracy:b,
maximumAge:0,timeout:c})})};
l.createUnpluggedLocationInfo=function(a){var b={};a=a.coords;if(null==a?0:a.latitude)b.latitudeE7=Math.floor(1E7*a.latitude);if(null==a?0:a.longitude)b.longitudeE7=Math.floor(1E7*a.longitude);if(null==a?0:a.accuracy)b.locationRadiusMeters=Math.round(a.accuracy);return b};function cv(a,b){var c,d=null==(c=Rs(a,Nk))?void 0:c.signal;if(d&&b.Ob&&(c=b.Ob[d]))return c();var e;if((c=null==(e=Rs(a,Lk))?void 0:e.request)&&b.ge&&(e=b.ge[c]))return e();for(var f in a)if(b.gd[f]&&(a=b.gd[f]))return a()}
;function dv(a){return function(){return new a}}
;var ev={},fv=(ev.WEB_UNPLUGGED="^unplugged/",ev.WEB_UNPLUGGED_ONBOARDING="^unplugged/",ev.WEB_UNPLUGGED_OPS="^unplugged/",ev.WEB_UNPLUGGED_PUBLIC="^unplugged/",ev.WEB_CREATOR="^creator/",ev.WEB_KIDS="^kids/",ev.WEB_EXPERIMENTS="^experiments/",ev.WEB_MUSIC="^music/",ev.WEB_REMIX="^music/",ev.WEB_MUSIC_EMBEDDED_PLAYER="^music/",ev.WEB_MUSIC_EMBEDDED_PLAYER="^main_app/|^sfv/",ev);
function gv(a){var b=void 0===b?"UNKNOWN_INTERFACE":b;if(1===a.length)return a[0];var c=fv[b];if(c){var d=new RegExp(c),e=r(a);for(c=e.next();!c.done;c=e.next())if(c=c.value,d.exec(c))return c}var f=[];Object.entries(fv).forEach(function(g){var h=r(g);g=h.next().value;h=h.next().value;b!==g&&f.push(h)});
d=new RegExp(f.join("|"));a.sort(function(g,h){return g.length-h.length});
e=r(a);for(c=e.next();!c.done;c=e.next())if(c=c.value,!d.exec(c))return c;return a[0]}
;function hv(){}
hv.prototype.m=function(a,b,c){b=void 0===b?{}:b;c=void 0===c?yn:c;var d=a.clickTrackingParams,e=this.l,f=!1;f=void 0===f?!1:f;e=void 0===e?!1:e;var g=M("INNERTUBE_CONTEXT");if(g){g=vb(g);P("web_no_tracking_params_in_shell_killswitch")||delete g.clickTracking;g.client||(g.client={});var h=g.client;"MWEB"===h.clientName&&(h.clientFormFactor=M("IS_TABLET")?"LARGE_FORM_FACTOR":"SMALL_FORM_FACTOR");h.screenWidthPoints=window.innerWidth;h.screenHeightPoints=window.innerHeight;h.screenPixelDensity=Math.round(window.devicePixelRatio||
1);h.screenDensityFloat=window.devicePixelRatio||1;h.utcOffsetMinutes=-Math.floor((new Date).getTimezoneOffset());var k=void 0===k?!1:k;Fn.getInstance();var m="USER_INTERFACE_THEME_LIGHT";In(165)?m="USER_INTERFACE_THEME_DARK":In(174)?m="USER_INTERFACE_THEME_LIGHT":!P("kevlar_legacy_browsers")&&window.matchMedia&&window.matchMedia("(prefers-color-scheme)").matches&&window.matchMedia("(prefers-color-scheme: dark)").matches&&(m="USER_INTERFACE_THEME_DARK");k=k?m:Wu()||m;h.userInterfaceTheme=k;if(!f){if(k=
Pn())h.connectionType=k;P("web_log_effective_connection_type")&&(k=Qn())&&(g.client.effectiveConnectionType=k)}var p;if(P("web_log_memory_total_kbytes")&&(null==(p=y.navigator)?0:p.deviceMemory)){var n;p=null==(n=y.navigator)?void 0:n.deviceMemory;g.client.memoryTotalKbytes=""+1E6*p}n=Km(y.location.href);!P("web_populate_internal_geo_killswitch")&&n.internalcountrycode&&(h.internalGeo=n.internalcountrycode);"MWEB"===h.clientName||"WEB"===h.clientName?(h.mainAppWebInfo={graftUrl:y.location.href},P("kevlar_woffle")&&
zn.h&&(n=zn.h,h.mainAppWebInfo.pwaInstallabilityStatus=!n.h&&n.i?"PWA_INSTALLABILITY_STATUS_CAN_BE_INSTALLED":"PWA_INSTALLABILITY_STATUS_UNKNOWN"),h.mainAppWebInfo.webDisplayMode=An(),h.mainAppWebInfo.isWebNativeShareAvailable=navigator&&void 0!==navigator.share):"TVHTML5"===h.clientName&&(!P("web_lr_app_quality_killswitch")&&(n=M("LIVING_ROOM_APP_QUALITY"))&&(h.tvAppInfo=Object.assign(h.tvAppInfo||{},{appQuality:n})),n=M("LIVING_ROOM_CERTIFICATION_SCOPE"))&&(h.tvAppInfo=Object.assign(h.tvAppInfo||
{},{certificationScope:n}));if(!P("web_populate_time_zone_itc_killswitch")){b:{if("undefined"!==typeof Intl)try{var v=(new Intl.DateTimeFormat).resolvedOptions().timeZone;break b}catch(xb){}v=void 0}v&&(h.timeZone=v)}(v=tm())?h.experimentsToken=v:delete h.experimentsToken;v=um();Xu.h||(Xu.h=new Xu);h=Xu.h.h;n=[];p=0;for(var t in h)n[p++]=h[t];g.request=Object.assign({},g.request,{internalExperimentFlags:v,consistencyTokenJars:n});!P("web_prequest_context_killswitch")&&(t=M("INNERTUBE_CONTEXT_PREQUEST_CONTEXT"))&&
(g.request.externalPrequestContext=t);v=Fn.getInstance();t=In(58);v=v.get("gsml","");g.user=Object.assign({},g.user);t&&(g.user.enableSafetyMode=t);v&&(g.user.lockedSafetyMode=!0);P("warm_op_csn_cleanup")?e&&(f=tu())&&(g.clientScreenNonce=f):!f&&(f=tu())&&(g.clientScreenNonce=f);d&&(g.clickTracking={clickTrackingParams:d});if(d=B("yt.mdx.remote.remoteClient_"))g.remoteClient=d;$u.getInstance().setLocationOnInnerTubeContext(g);try{var z=Nm(),D=z.bid;delete z.bid;g.adSignalsInfo={params:[],bid:D};var F=
r(Object.entries(z));for(var N=F.next();!N.done;N=F.next()){var O=r(N.value),T=O.next().value,aa=O.next().value;z=T;D=aa;d=void 0;null==(d=g.adSignalsInfo.params)||d.push({key:z,value:""+D})}}catch(xb){Zt(xb)}F=g}else Zt(Error("Error: No InnerTubeContext shell provided in ytconfig.")),F={};F={context:F};if(N=this.h(a)){this.i(F,N,b);var W;b="/youtubei/v1/"+gv(this.j());(N=null==(W=Rs(a.commandMetadata,Mk))?void 0:W.apiUrl)&&(b=N);W=b;(b=M("INNERTUBE_HOST_OVERRIDE"))&&(W=String(b)+String(qc(W)));b=
{};b.key=M("INNERTUBE_API_KEY");P("json_condensed_response")&&(b.prettyPrint="false");W=Lm(W,b||{},!1);a=Object.assign({},{command:a},void 0);a={input:W,kb:Iu(W),La:F,config:a};a.config.Yb?a.config.Yb.identity=c:a.config.Yb={identity:c};return a}Zt(new Q("Error: Failed to create Request from Command.",a))};
ea.Object.defineProperties(hv.prototype,{l:{configurable:!0,enumerable:!0,get:function(){return!1}}});function iv(){}
u(iv,hv);iv.prototype.m=function(){return{input:"/getDatasyncIdsEndpoint",kb:Iu("/getDatasyncIdsEndpoint","GET"),La:{}}};
iv.prototype.j=function(){return[]};
iv.prototype.h=function(){};
iv.prototype.i=function(){};var jv={},kv=(jv.GET_DATASYNC_IDS=dv(iv),jv);function lv(a){var b=Ka.apply(1,arguments);if(!mv(a)||b.some(function(d){return!mv(d)}))throw Error("Only objects may be merged.");
b=r(b);for(var c=b.next();!c.done;c=b.next())nv(a,c.value);return a}
function nv(a,b){for(var c in b)if(mv(b[c])){if(c in a&&!mv(a[c]))throw Error("Cannot merge an object into a non-object.");c in a||(a[c]={});nv(a[c],b[c])}else if(ov(b[c])){if(c in a&&!ov(a[c]))throw Error("Cannot merge an array into a non-array.");c in a||(a[c]=[]);pv(a[c],b[c])}else a[c]=b[c];return a}
function pv(a,b){b=r(b);for(var c=b.next();!c.done;c=b.next())c=c.value,mv(c)?a.push(nv({},c)):ov(c)?a.push(pv([],c)):a.push(c);return a}
function mv(a){return"object"===typeof a&&!Array.isArray(a)}
function ov(a){return"object"===typeof a&&Array.isArray(a)}
;function qv(a){var b;(b=B("ytcsi."+(a||"")+"data_"))||(b={tick:{},info:{}},A("ytcsi."+(a||"")+"data_",b));return b}
function rv(){var a=qv();a.info||(a.info={});return a.info}
function sv(a){a=qv(a);a.metadata||(a.metadata={});return a.metadata}
function tv(a){a=qv(a);a.tick||(a.tick={});return a.tick}
function uv(a){a=qv(a);if(a.gel){var b=a.gel;b.gelInfos||(b.gelInfos={});b.gelTicks||(b.gelTicks={})}else a.gel={gelTicks:{},gelInfos:{}};return a.gel}
function vv(a){a=uv(a);a.gelInfos||(a.gelInfos={});return a.gelInfos}
function wv(a){var b=qv(a).nonce;b||(b=iu(),qv(a).nonce=b);return b}
;function xv(){var a=B("ytcsi.debug");a||(a=[],A("ytcsi.debug",a),A("ytcsi.reference",{}));return a}
function yv(a){a=a||"";var b=B("ytcsi.reference");b||(xv(),b=B("ytcsi.reference"));if(b[a])return b[a];var c=xv(),d={timerName:a,info:{},tick:{},span:{},jspbInfo:[]};c.push(d);return b[a]=d}
;var S={},zv=(S.auto_search="LATENCY_ACTION_AUTO_SEARCH",S.ad_to_ad="LATENCY_ACTION_AD_TO_AD",S.ad_to_video="LATENCY_ACTION_AD_TO_VIDEO",S["analytics.explore"]="LATENCY_ACTION_CREATOR_ANALYTICS_EXPLORE",S.app_startup="LATENCY_ACTION_APP_STARTUP",S["artist.analytics"]="LATENCY_ACTION_CREATOR_ARTIST_ANALYTICS",S["artist.events"]="LATENCY_ACTION_CREATOR_ARTIST_CONCERTS",S["artist.presskit"]="LATENCY_ACTION_CREATOR_ARTIST_PROFILE",S["asset.claimed_videos"]="LATENCY_ACTION_CREATOR_CMS_ASSET_CLAIMED_VIDEOS",
S["asset.composition"]="LATENCY_ACTION_CREATOR_CMS_ASSET_COMPOSITION",S["asset.embeds"]="LATENCY_ACTION_CREATOR_CMS_ASSET_EMBEDS",S["asset.issues"]="LATENCY_ACTION_CREATOR_CMS_ASSET_ISSUES",S["asset.licenses"]="LATENCY_ACTION_CREATOR_CMS_ASSET_LICENSES",S["asset.metadata"]="LATENCY_ACTION_CREATOR_CMS_ASSET_METADATA",S["asset.ownership"]="LATENCY_ACTION_CREATOR_CMS_ASSET_OWNERSHIP",S["asset.policy"]="LATENCY_ACTION_CREATOR_CMS_ASSET_POLICY",S["asset.references"]="LATENCY_ACTION_CREATOR_CMS_ASSET_REFERENCES",
S["asset.sound_recordings"]="LATENCY_ACTION_CREATOR_CMS_ASSET_SOUND_RECORDINGS",S["song.analytics"]="LATENCY_ACTION_CREATOR_SONG_ANALYTICS",S.browse="LATENCY_ACTION_BROWSE",S.cast_splash="LATENCY_ACTION_CAST_SPLASH",S.channels="LATENCY_ACTION_CHANNELS",S.creator_channel_dashboard="LATENCY_ACTION_CREATOR_CHANNEL_DASHBOARD",S["channel.analytics"]="LATENCY_ACTION_CREATOR_CHANNEL_ANALYTICS",S["channel.comments"]="LATENCY_ACTION_CREATOR_CHANNEL_COMMENTS",S["channel.content"]="LATENCY_ACTION_CREATOR_POST_LIST",
S["channel.content.promotions"]="LATENCY_ACTION_CREATOR_PROMOTION_LIST",S["channel.copyright"]="LATENCY_ACTION_CREATOR_CHANNEL_COPYRIGHT",S["channel.editing"]="LATENCY_ACTION_CREATOR_CHANNEL_EDITING",S["channel.monetization"]="LATENCY_ACTION_CREATOR_CHANNEL_MONETIZATION",S["channel.music"]="LATENCY_ACTION_CREATOR_CHANNEL_MUSIC",S["channel.music_storefront"]="LATENCY_ACTION_CREATOR_CHANNEL_MUSIC_STOREFRONT",S["channel.playlists"]="LATENCY_ACTION_CREATOR_CHANNEL_PLAYLISTS",S["channel.translations"]=
"LATENCY_ACTION_CREATOR_CHANNEL_TRANSLATIONS",S["channel.videos"]="LATENCY_ACTION_CREATOR_CHANNEL_VIDEOS",S["channel.live_streaming"]="LATENCY_ACTION_CREATOR_LIVE_STREAMING",S.chips="LATENCY_ACTION_CHIPS",S["dialog.copyright_strikes"]="LATENCY_ACTION_CREATOR_DIALOG_COPYRIGHT_STRIKES",S["dialog.video_copyright"]="LATENCY_ACTION_CREATOR_DIALOG_VIDEO_COPYRIGHT",S["dialog.uploads"]="LATENCY_ACTION_CREATOR_DIALOG_UPLOADS",S.direct_playback="LATENCY_ACTION_DIRECT_PLAYBACK",S.embed="LATENCY_ACTION_EMBED",
S.entity_key_serialization_perf="LATENCY_ACTION_ENTITY_KEY_SERIALIZATION_PERF",S.entity_key_deserialization_perf="LATENCY_ACTION_ENTITY_KEY_DESERIALIZATION_PERF",S.explore="LATENCY_ACTION_EXPLORE",S.home="LATENCY_ACTION_HOME",S.library="LATENCY_ACTION_LIBRARY",S.live="LATENCY_ACTION_LIVE",S.live_pagination="LATENCY_ACTION_LIVE_PAGINATION",S.onboarding="LATENCY_ACTION_ONBOARDING",S.owner="LATENCY_ACTION_CREATOR_CMS_DASHBOARD",S["owner.allowlist"]="LATENCY_ACTION_CREATOR_CMS_ALLOWLIST",S["owner.analytics"]=
"LATENCY_ACTION_CREATOR_CMS_ANALYTICS",S["owner.art_tracks"]="LATENCY_ACTION_CREATOR_CMS_ART_TRACKS",S["owner.assets"]="LATENCY_ACTION_CREATOR_CMS_ASSETS",S["owner.asset_groups"]="LATENCY_ACTION_CREATOR_CMS_ASSET_GROUPS",S["owner.campaigns"]="LATENCY_ACTION_CREATOR_CMS_CAMPAIGNS",S["owner.channels"]="LATENCY_ACTION_CREATOR_CMS_CHANNELS",S["owner.claimed_videos"]="LATENCY_ACTION_CREATOR_CMS_CLAIMED_VIDEOS",S["owner.claims"]="LATENCY_ACTION_CREATOR_CMS_MANUAL_CLAIMING",S["owner.claims.manual"]="LATENCY_ACTION_CREATOR_CMS_MANUAL_CLAIMING",
S["owner.delivery"]="LATENCY_ACTION_CREATOR_CMS_CONTENT_DELIVERY",S["owner.issues"]="LATENCY_ACTION_CREATOR_CMS_ISSUES",S["owner.licenses"]="LATENCY_ACTION_CREATOR_CMS_LICENSES",S["owner.pitch_music"]="LATENCY_ACTION_CREATOR_CMS_PITCH_MUSIC",S["owner.policies"]="LATENCY_ACTION_CREATOR_CMS_POLICIES",S["owner.releases"]="LATENCY_ACTION_CREATOR_CMS_RELEASES",S["owner.reports"]="LATENCY_ACTION_CREATOR_CMS_REPORTS",S["owner.videos"]="LATENCY_ACTION_CREATOR_CMS_VIDEOS",S.parent_profile_settings="LATENCY_ACTION_KIDS_PARENT_PROFILE_SETTINGS",
S.parent_tools_collection="LATENCY_ACTION_PARENT_TOOLS_COLLECTION",S.parent_tools_dashboard="LATENCY_ACTION_PARENT_TOOLS_DASHBOARD",S.player_att="LATENCY_ACTION_PLAYER_ATTESTATION",S["post.comments"]="LATENCY_ACTION_CREATOR_POST_COMMENTS",S["post.edit"]="LATENCY_ACTION_CREATOR_POST_EDIT",S.prebuffer="LATENCY_ACTION_PREBUFFER",S.prefetch="LATENCY_ACTION_PREFETCH",S.profile_settings="LATENCY_ACTION_KIDS_PROFILE_SETTINGS",S.profile_switcher="LATENCY_ACTION_LOGIN",S.reel_watch="LATENCY_ACTION_REEL_WATCH",
S.results="LATENCY_ACTION_RESULTS",S["promotion.edit"]="LATENCY_ACTION_CREATOR_PROMOTION_EDIT",S.search_ui="LATENCY_ACTION_SEARCH_UI",S.search_suggest="LATENCY_ACTION_SUGGEST",S.search_zero_state="LATENCY_ACTION_SEARCH_ZERO_STATE",S.secret_code="LATENCY_ACTION_KIDS_SECRET_CODE",S.seek="LATENCY_ACTION_PLAYER_SEEK",S.settings="LATENCY_ACTION_SETTINGS",S.store="LATENCY_ACTION_STORE",S.tenx="LATENCY_ACTION_TENX",S.video_to_ad="LATENCY_ACTION_VIDEO_TO_AD",S.watch="LATENCY_ACTION_WATCH",S.watch_it_again=
"LATENCY_ACTION_KIDS_WATCH_IT_AGAIN",S["watch,watch7"]="LATENCY_ACTION_WATCH",S["watch,watch7_html5"]="LATENCY_ACTION_WATCH",S["watch,watch7ad"]="LATENCY_ACTION_WATCH",S["watch,watch7ad_html5"]="LATENCY_ACTION_WATCH",S.wn_comments="LATENCY_ACTION_LOAD_COMMENTS",S.ww_rqs="LATENCY_ACTION_WHO_IS_WATCHING",S["video.analytics"]="LATENCY_ACTION_CREATOR_VIDEO_ANALYTICS",S["video.claims"]="LATENCY_ACTION_CREATOR_VIDEO_CLAIMS",S["video.comments"]="LATENCY_ACTION_CREATOR_VIDEO_COMMENTS",S["video.copyright"]=
"LATENCY_ACTION_CREATOR_VIDEO_COPYRIGHT",S["video.edit"]="LATENCY_ACTION_CREATOR_VIDEO_EDIT",S["video.editor"]="LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR",S["video.editor_async"]="LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR_ASYNC",S["video.live_settings"]="LATENCY_ACTION_CREATOR_VIDEO_LIVE_SETTINGS",S["video.live_streaming"]="LATENCY_ACTION_CREATOR_VIDEO_LIVE_STREAMING",S["video.monetization"]="LATENCY_ACTION_CREATOR_VIDEO_MONETIZATION",S["video.policy"]="LATENCY_ACTION_CREATOR_VIDEO_POLICY",S["video.rights_management"]=
"LATENCY_ACTION_CREATOR_VIDEO_RIGHTS_MANAGEMENT",S["video.translations"]="LATENCY_ACTION_CREATOR_VIDEO_TRANSLATIONS",S.voice_assistant="LATENCY_ACTION_VOICE_ASSISTANT",S.cast_load_by_entity_to_watch="LATENCY_ACTION_CAST_LOAD_BY_ENTITY_TO_WATCH",S.networkless_performance="LATENCY_ACTION_NETWORKLESS_PERFORMANCE",S.gel_compression="LATENCY_ACTION_GEL_COMPRESSION",S),U={},Av=(U.ad_allowed="adTypesAllowed",U.yt_abt="adBreakType",U.ad_cpn="adClientPlaybackNonce",U.ad_docid="adVideoId",U.yt_ad_an="adNetworks",
U.ad_at="adType",U.aida="appInstallDataAgeMs",U.browse_id="browseId",U.p="httpProtocol",U.t="transportProtocol",U.cs="commandSource",U.cpn="clientPlaybackNonce",U.ccs="creatorInfo.creatorCanaryState",U.ctop="creatorInfo.topEntityType",U.csn="clientScreenNonce",U.docid="videoId",U.GetHome_rid="requestIds",U.GetSearch_rid="requestIds",U.GetPlayer_rid="requestIds",U.GetWatchNext_rid="requestIds",U.GetBrowse_rid="requestIds",U.GetLibrary_rid="requestIds",U.is_continuation="isContinuation",U.is_nav="isNavigation",
U.b_p="kabukiInfo.browseParams",U.is_prefetch="kabukiInfo.isPrefetch",U.is_secondary_nav="kabukiInfo.isSecondaryNav",U.nav_type="kabukiInfo.navigationType",U.prev_browse_id="kabukiInfo.prevBrowseId",U.query_source="kabukiInfo.querySource",U.voz_type="kabukiInfo.vozType",U.yt_lt="loadType",U.mver="creatorInfo.measurementVersion",U.yt_ad="isMonetized",U.nr="webInfo.navigationReason",U.nrsu="navigationRequestedSameUrl",U.pnt="performanceNavigationTiming",U.prt="playbackRequiresTap",U.plt="playerInfo.playbackType",
U.pis="playerInfo.playerInitializedState",U.paused="playerInfo.isPausedOnLoad",U.yt_pt="playerType",U.fmt="playerInfo.itag",U.yt_pl="watchInfo.isPlaylist",U.yt_pre="playerInfo.preloadType",U.yt_ad_pr="prerollAllowed",U.pa="previousAction",U.yt_red="isRedSubscriber",U.rce="mwebInfo.responseContentEncoding",U.rc="resourceInfo.resourceCache",U.scrh="screenHeight",U.scrw="screenWidth",U.st="serverTimeMs",U.ssdm="shellStartupDurationMs",U.br_trs="tvInfo.bedrockTriggerState",U.kebqat="kabukiInfo.earlyBrowseRequestInfo.abandonmentType",
U.kebqa="kabukiInfo.earlyBrowseRequestInfo.adopted",U.label="tvInfo.label",U.is_mdx="tvInfo.isMdx",U.preloaded="tvInfo.isPreloaded",U.aac_type="tvInfo.authAccessCredentialType",U.upg_player_vis="playerInfo.visibilityState",U.query="unpluggedInfo.query",U.upg_chip_ids_string="unpluggedInfo.upgChipIdsString",U.yt_vst="videoStreamType",U.vph="viewportHeight",U.vpw="viewportWidth",U.yt_vis="isVisible",U.rcl="mwebInfo.responseContentLength",U.GetSettings_rid="requestIds",U.GetTrending_rid="requestIds",
U.GetMusicSearchSuggestions_rid="requestIds",U.REQUEST_ID="requestIds",U),Bv="isContinuation isNavigation kabukiInfo.earlyBrowseRequestInfo.adopted kabukiInfo.isPrefetch kabukiInfo.isSecondaryNav isMonetized navigationRequestedSameUrl performanceNavigationTiming playerInfo.isPausedOnLoad prerollAllowed isRedSubscriber tvInfo.isMdx tvInfo.isPreloaded isVisible watchInfo.isPlaylist playbackRequiresTap".split(" "),Cv={},Dv=(Cv.ccs="CANARY_STATE_",Cv.mver="MEASUREMENT_VERSION_",Cv.pis="PLAYER_INITIALIZED_STATE_",
Cv.yt_pt="LATENCY_PLAYER_",Cv.pa="LATENCY_ACTION_",Cv.ctop="TOP_ENTITY_TYPE_",Cv.yt_vst="VIDEO_STREAM_TYPE_",Cv),Ev="all_vc ap aq c cbr cbrand cbrver cmodel cos cosver cplatform ctheme cver ei l_an l_mm plid srt yt_fss yt_li vpst vpni2 vpil2 icrc icrt pa GetAccountOverview_rid GetHistory_rid cmt d_vpct d_vpnfi d_vpni nsru pc pfa pfeh pftr pnc prerender psc rc start tcrt tcrc ssr vpr vps yt_abt yt_fn yt_fs yt_pft yt_pre yt_pt yt_pvis ytu_pvis yt_ref yt_sts tds".split(" ");
function Fv(a){return zv[a]||"LATENCY_ACTION_UNKNOWN"}
function Gv(a,b,c){c=uv(c);if(c.gelInfos)c.gelInfos[a]=!0;else{var d={};c.gelInfos=(d[a]=!0,d)}if(a.match("_rid")){var e=a.split("_rid")[0];a="REQUEST_ID"}if(a in Av){c=Av[a];0<=fb(Bv,c)&&(b=!!b);a in Dv&&"string"===typeof b&&(b=Dv[a]+b.toUpperCase());a=b;b=c.split(".");for(var f=d={},g=0;g<b.length-1;g++){var h=b[g];f[h]={};f=f[h]}f[b[b.length-1]]="requestIds"===c?[{id:a,endpoint:e}]:a;return lv({},d)}0<=fb(Ev,a)||$t(new Q("Unknown label logged with GEL CSI",a))}
;var V={LATENCY_ACTION_SHORTS_VIDEO_INGESTION_TRANSCODING:179,LATENCY_ACTION_KIDS_PROFILE_SWITCHER:90,LATENCY_ACTION_OFFLINE_THUMBNAIL_TRANSFER:100,LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR_ASYNC:46,LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR:37,LATENCY_ACTION_SPINNER_DISPLAYED:14,LATENCY_ACTION_PLAYABILITY_CHECK:10,LATENCY_ACTION_PROCESS:9,LATENCY_ACTION_APP_STARTUP:5,LATENCY_ACTION_GEL_COMPRESSION:215,LATENCY_ACTION_PREMIUM_PAGE_GET_BROWSE:204,LATENCY_ACTION_COMMERCE_ACTION_COMMAND_RPC:203,LATENCY_ACTION_COMMERCE_TRANSACTION:184,
LATENCY_ACTION_LOG_PAYMENT_SERVER_ANALYTICS_RPC:173,LATENCY_ACTION_GET_PAYMENT_INSTRUMENTS_PARAMS_RPC:172,LATENCY_ACTION_GET_FIX_INSTRUMENT_PARAMS_RPC:171,LATENCY_ACTION_RESUME_SUBSCRIPTION_RPC:170,LATENCY_ACTION_PAUSE_SUBSCRIPTION_RPC:169,LATENCY_ACTION_GET_OFFLINE_UPSELL_RPC:168,LATENCY_ACTION_GET_OFFERS_RPC:167,LATENCY_ACTION_GET_CANCELLATION_YT_FLOW_RPC:166,LATENCY_ACTION_GET_CANCELLATION_FLOW_RPC:165,LATENCY_ACTION_UPDATE_CROSS_DEVICE_OFFLINE_STATE_RPC:164,LATENCY_ACTION_GET_OFFER_DETAILS_RPC:163,
LATENCY_ACTION_CANCEL_RECURRENCE_TRANSACTION_RPC:162,LATENCY_ACTION_GET_TIP_MODULE_RPC:161,LATENCY_ACTION_HANDLE_TRANSACTION_RPC:160,LATENCY_ACTION_COMPLETE_TRANSACTION_RPC:159,LATENCY_ACTION_GET_CART_RPC:158,LATENCY_ACTION_THUMBNAIL_FETCH:156,LATENCY_ACTION_ABANDONED_DIRECT_PLAYBACK:154,LATENCY_ACTION_SHARE_VIDEO:153,LATENCY_ACTION_AD_TO_VIDEO_INT:152,LATENCY_ACTION_ABANDONED_BROWSE:151,LATENCY_ACTION_PLAYER_ROTATION:150,LATENCY_ACTION_GENERIC_WEB_VIEW:183,LATENCY_ACTION_SHOPPING_IN_APP:124,LATENCY_ACTION_PLAYER_ATTESTATION:121,
LATENCY_ACTION_PLAYER_SEEK:119,LATENCY_ACTION_SUPER_STICKER_BUY_FLOW:114,LATENCY_ACTION_DOWNLOADS_DATA_ACCESS:180,LATENCY_ACTION_BLOCKS_PERFORMANCE:148,LATENCY_ACTION_ASSISTANT_QUERY:138,LATENCY_ACTION_ASSISTANT_SETTINGS:137,LATENCY_ACTION_ENTITY_KEY_DESERIALIZATION_PERF:129,LATENCY_ACTION_ENTITY_KEY_SERIALIZATION_PERF:128,LATENCY_ACTION_PROOF_OF_ORIGIN_TOKEN_CREATE:127,LATENCY_ACTION_EMBEDS_SDK_INITIALIZATION:123,LATENCY_ACTION_NETWORKLESS_PERFORMANCE:122,LATENCY_ACTION_DOWNLOADS_EXPANSION:133,LATENCY_ACTION_ENTITY_TRANSFORM:131,
LATENCY_ACTION_DOWNLOADS_COMPATIBILITY_LAYER:96,LATENCY_ACTION_EMBEDS_SET_VIDEO:95,LATENCY_ACTION_SETTINGS:93,LATENCY_ACTION_ABANDONED_STARTUP:81,LATENCY_ACTION_MEDIA_BROWSER_ALARM_PLAY:80,LATENCY_ACTION_MEDIA_BROWSER_SEARCH:79,LATENCY_ACTION_MEDIA_BROWSER_LOAD_TREE:78,LATENCY_ACTION_WHO_IS_WATCHING:77,LATENCY_ACTION_CAST_LOAD_BY_ENTITY_TO_WATCH:76,LATENCY_ACTION_LITE_SWITCH_ACCOUNT:73,LATENCY_ACTION_ELEMENTS_PERFORMANCE:70,LATENCY_ACTION_LOCATION_SIGNAL_COLLECTION:69,LATENCY_ACTION_MODIFY_CHANNEL_NOTIFICATION:65,
LATENCY_ACTION_OFFLINE_STORE_START:61,LATENCY_ACTION_REEL_EDITOR:58,LATENCY_ACTION_CHANNEL_SUBSCRIBE:56,LATENCY_ACTION_CHANNEL_PREVIEW:55,LATENCY_ACTION_PREFETCH:52,LATENCY_ACTION_ABANDONED_WATCH:45,LATENCY_ACTION_LOAD_COMMENT_REPLIES:26,LATENCY_ACTION_LOAD_COMMENTS:25,LATENCY_ACTION_EDIT_COMMENT:24,LATENCY_ACTION_NEW_COMMENT:23,LATENCY_ACTION_OFFLINE_SHARING_RECEIVER_PAIRING:19,LATENCY_ACTION_EMBED:18,LATENCY_ACTION_MDX_LAUNCH:15,LATENCY_ACTION_RESOLVE_URL:13,LATENCY_ACTION_CAST_SPLASH:149,LATENCY_ACTION_MDX_CONNECT_TO_SESSION:190,
LATENCY_ACTION_MDX_STREAM_TRANSFER:178,LATENCY_ACTION_MDX_CAST:120,LATENCY_ACTION_MDX_COMMAND:12,LATENCY_ACTION_MOBILE_LIVE_NAV_MDE:231,LATENCY_ACTION_REEL_SELECT_SEGMENT:136,LATENCY_ACTION_ACCELERATED_EFFECTS:145,LATENCY_ACTION_SHORTS_TRIM_TO_EDITOR_TRANSCODING:229,LATENCY_ACTION_EDIT_AUDIO_GEN:182,LATENCY_ACTION_UPLOAD_AUDIO_MIXER:147,LATENCY_ACTION_SHORTS_CLIENT_SIDE_RENDERING:157,LATENCY_ACTION_SHORTS_SEG_IMP_TRANSCODING:146,LATENCY_ACTION_SHORTS_AUDIO_PICKER_PLAYBACK:130,LATENCY_ACTION_SHORTS_WAVEFORM_DOWNLOAD:125,
LATENCY_ACTION_SHORTS_VIDEO_INGESTION:155,LATENCY_ACTION_SHORTS_GALLERY:107,LATENCY_ACTION_SHORTS_TRIM:105,LATENCY_ACTION_SHORTS_EDIT:104,LATENCY_ACTION_SHORTS_CAMERA:103,LATENCY_ACTION_PRODUCER_EXPORT_PROJECT:193,LATENCY_ACTION_PRODUCER_EDITOR:192,LATENCY_ACTION_PARENT_TOOLS_DASHBOARD:102,LATENCY_ACTION_PARENT_TOOLS_COLLECTION:101,LATENCY_ACTION_MUSIC_LOAD_RECOMMENDED_MEDIA_ITEMS:116,LATENCY_ACTION_MUSIC_LOAD_MEDIA_ITEMS:115,LATENCY_ACTION_MUSIC_ALBUM_DETAIL:72,LATENCY_ACTION_MUSIC_PLAYLIST_DETAIL:71,
LATENCY_ACTION_STORE:175,LATENCY_ACTION_CHIPS:68,LATENCY_ACTION_SEARCH_ZERO_STATE:67,LATENCY_ACTION_LIVE_PAGINATION:117,LATENCY_ACTION_LIVE:20,LATENCY_ACTION_PREBUFFER:40,LATENCY_ACTION_TENX:39,LATENCY_ACTION_KIDS_PROFILE_SETTINGS:94,LATENCY_ACTION_KIDS_WATCH_IT_AGAIN:92,LATENCY_ACTION_KIDS_SECRET_CODE:91,LATENCY_ACTION_KIDS_PARENT_PROFILE_SETTINGS:89,LATENCY_ACTION_KIDS_ONBOARDING:88,LATENCY_ACTION_KIDS_VOICE_SEARCH:82,LATENCY_ACTION_KIDS_CURATED_COLLECTION:62,LATENCY_ACTION_KIDS_LIBRARY:53,LATENCY_ACTION_CREATOR_VIDEO_TRANSLATIONS:38,
LATENCY_ACTION_CREATOR_VIDEO_RIGHTS_MANAGEMENT:219,LATENCY_ACTION_CREATOR_VIDEO_POLICY:217,LATENCY_ACTION_CREATOR_VIDEO_MONETIZATION:74,LATENCY_ACTION_CREATOR_VIDEO_LIVE_STREAMING:141,LATENCY_ACTION_CREATOR_VIDEO_LIVE_SETTINGS:142,LATENCY_ACTION_CREATOR_VIDEO_EDITOR_ASYNC:51,LATENCY_ACTION_CREATOR_VIDEO_EDITOR:50,LATENCY_ACTION_CREATOR_VIDEO_EDIT:36,LATENCY_ACTION_CREATOR_VIDEO_COPYRIGHT:218,LATENCY_ACTION_CREATOR_VIDEO_COMMENTS:34,LATENCY_ACTION_CREATOR_VIDEO_CLAIMS:216,LATENCY_ACTION_CREATOR_VIDEO_ANALYTICS:33,
LATENCY_ACTION_CREATOR_SONG_ANALYTICS:176,LATENCY_ACTION_CREATOR_PROMOTION_LIST:186,LATENCY_ACTION_CREATOR_PROMOTION_EDIT:185,LATENCY_ACTION_CREATOR_POST_LIST:112,LATENCY_ACTION_CREATOR_POST_EDIT:110,LATENCY_ACTION_CREATOR_POST_COMMENTS:111,LATENCY_ACTION_CREATOR_LIVE_STREAMING:108,LATENCY_ACTION_CREATOR_DIALOG_VIDEO_COPYRIGHT:174,LATENCY_ACTION_CREATOR_DIALOG_UPLOADS:86,LATENCY_ACTION_CREATOR_DIALOG_COPYRIGHT_STRIKES:87,LATENCY_ACTION_CREATOR_CMS_VIDEOS:202,LATENCY_ACTION_CREATOR_CMS_REPORTS:201,
LATENCY_ACTION_CREATOR_CMS_RELEASES:226,LATENCY_ACTION_CREATOR_CMS_POLICIES:225,LATENCY_ACTION_CREATOR_CMS_PITCH_MUSIC:224,LATENCY_ACTION_CREATOR_CMS_MANUAL_CLAIMING:200,LATENCY_ACTION_CREATOR_CMS_LICENSES:223,LATENCY_ACTION_CREATOR_CMS_ISSUES:191,LATENCY_ACTION_CREATOR_CMS_DASHBOARD:199,LATENCY_ACTION_CREATOR_CMS_CONTENT_DELIVERY:198,LATENCY_ACTION_CREATOR_CMS_CLAIMED_VIDEOS:197,LATENCY_ACTION_CREATOR_CMS_CHANNELS:196,LATENCY_ACTION_CREATOR_CMS_CAMPAIGNS:222,LATENCY_ACTION_CREATOR_CMS_ASSET_SOUND_RECORDINGS:214,
LATENCY_ACTION_CREATOR_CMS_ASSET_REFERENCES:209,LATENCY_ACTION_CREATOR_CMS_ASSET_POLICY:208,LATENCY_ACTION_CREATOR_CMS_ASSET_OWNERSHIP:207,LATENCY_ACTION_CREATOR_CMS_ASSET_METADATA:205,LATENCY_ACTION_CREATOR_CMS_ASSET_LICENSES:212,LATENCY_ACTION_CREATOR_CMS_ASSET_ISSUES:206,LATENCY_ACTION_CREATOR_CMS_ASSET_GROUPS:221,LATENCY_ACTION_CREATOR_CMS_ASSET_EMBEDS:210,LATENCY_ACTION_CREATOR_CMS_ASSET_COMPOSITION:213,LATENCY_ACTION_CREATOR_CMS_ASSET_CLAIMED_VIDEOS:211,LATENCY_ACTION_CREATOR_CMS_ASSETS:195,
LATENCY_ACTION_CREATOR_CMS_ART_TRACKS:220,LATENCY_ACTION_CREATOR_CMS_ANALYTICS:194,LATENCY_ACTION_CREATOR_CMS_ALLOWLIST:227,LATENCY_ACTION_CREATOR_CHANNEL_VIDEOS:32,LATENCY_ACTION_CREATOR_CHANNEL_TRANSLATIONS:48,LATENCY_ACTION_CREATOR_CHANNEL_PLAYLISTS:139,LATENCY_ACTION_CREATOR_CHANNEL_MUSIC_STOREFRONT:177,LATENCY_ACTION_CREATOR_CHANNEL_MUSIC:99,LATENCY_ACTION_CREATOR_CHANNEL_MONETIZATION:43,LATENCY_ACTION_CREATOR_CHANNEL_EDITING:113,LATENCY_ACTION_CREATOR_CHANNEL_DASHBOARD:49,LATENCY_ACTION_CREATOR_CHANNEL_COPYRIGHT:44,
LATENCY_ACTION_CREATOR_CHANNEL_COMMENTS:66,LATENCY_ACTION_CREATOR_CHANNEL_ANALYTICS:31,LATENCY_ACTION_CREATOR_ARTIST_PROFILE:85,LATENCY_ACTION_CREATOR_ARTIST_CONCERTS:84,LATENCY_ACTION_CREATOR_ARTIST_ANALYTICS:83,LATENCY_ACTION_CREATOR_ANALYTICS_EXPLORE:140,LATENCY_ACTION_EXPERIMENTAL_WATCH_UI:181,LATENCY_ACTION_FINE_SCRUBBING_THUMBNAILS:228,LATENCY_ACTION_STORYBOARD_THUMBNAILS:118,LATENCY_ACTION_SEARCH_THUMBNAILS:59,LATENCY_ACTION_ON_DEVICE_MODEL_DOWNLOAD:54,LATENCY_ACTION_VOICE_ASSISTANT:47,LATENCY_ACTION_SEARCH_UI:35,
LATENCY_ACTION_SUGGEST:30,LATENCY_ACTION_AUTO_SEARCH:126,LATENCY_ACTION_DOWNLOADS:98,LATENCY_ACTION_EXPLORE:75,LATENCY_ACTION_VIDEO_LIST:63,LATENCY_ACTION_HOME_RESUME:60,LATENCY_ACTION_SUBSCRIPTIONS_LIST:57,LATENCY_ACTION_THUMBNAIL_LOAD:42,LATENCY_ACTION_FIRST_THUMBNAIL_LOAD:29,LATENCY_ACTION_SUBSCRIPTIONS_FEED:109,LATENCY_ACTION_SUBSCRIPTIONS:28,LATENCY_ACTION_TRENDING:27,LATENCY_ACTION_LIBRARY:21,LATENCY_ACTION_VIDEO_THUMBNAIL:8,LATENCY_ACTION_SHOW_MORE:7,LATENCY_ACTION_VIDEO_PREVIEW:6,LATENCY_ACTION_AD_TO_AD:22,
LATENCY_ACTION_VIDEO_TO_AD:17,LATENCY_ACTION_AD_TO_VIDEO:16,LATENCY_ACTION_DIRECT_PLAYBACK:132,LATENCY_ACTION_PREBUFFER_VIDEO:144,LATENCY_ACTION_PREFETCH_VIDEO:143,LATENCY_ACTION_STARTUP:106,LATENCY_ACTION_INLINE_TO_WATCH:232,LATENCY_ACTION_MUSIC_IMMERSIVE_WATCH:230,LATENCY_ACTION_ONBOARDING:135,LATENCY_ACTION_LOGIN:97,LATENCY_ACTION_REEL_WATCH:41,LATENCY_ACTION_WATCH:3,LATENCY_ACTION_RESULTS:2,LATENCY_ACTION_CHANNELS:4,LATENCY_ACTION_HOME:1,LATENCY_ACTION_BROWSE:11,LATENCY_ACTION_USER_ACTION:189,
LATENCY_ACTION_INFRASTRUCTURE:188,LATENCY_ACTION_PAGE_NAVIGATION:187,LATENCY_ACTION_UNKNOWN:0};V[V.LATENCY_ACTION_SHORTS_VIDEO_INGESTION_TRANSCODING]="LATENCY_ACTION_SHORTS_VIDEO_INGESTION_TRANSCODING";V[V.LATENCY_ACTION_KIDS_PROFILE_SWITCHER]="LATENCY_ACTION_KIDS_PROFILE_SWITCHER";V[V.LATENCY_ACTION_OFFLINE_THUMBNAIL_TRANSFER]="LATENCY_ACTION_OFFLINE_THUMBNAIL_TRANSFER";V[V.LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR_ASYNC]="LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR_ASYNC";
V[V.LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR]="LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR";V[V.LATENCY_ACTION_SPINNER_DISPLAYED]="LATENCY_ACTION_SPINNER_DISPLAYED";V[V.LATENCY_ACTION_PLAYABILITY_CHECK]="LATENCY_ACTION_PLAYABILITY_CHECK";V[V.LATENCY_ACTION_PROCESS]="LATENCY_ACTION_PROCESS";V[V.LATENCY_ACTION_APP_STARTUP]="LATENCY_ACTION_APP_STARTUP";V[V.LATENCY_ACTION_GEL_COMPRESSION]="LATENCY_ACTION_GEL_COMPRESSION";V[V.LATENCY_ACTION_PREMIUM_PAGE_GET_BROWSE]="LATENCY_ACTION_PREMIUM_PAGE_GET_BROWSE";
V[V.LATENCY_ACTION_COMMERCE_ACTION_COMMAND_RPC]="LATENCY_ACTION_COMMERCE_ACTION_COMMAND_RPC";V[V.LATENCY_ACTION_COMMERCE_TRANSACTION]="LATENCY_ACTION_COMMERCE_TRANSACTION";V[V.LATENCY_ACTION_LOG_PAYMENT_SERVER_ANALYTICS_RPC]="LATENCY_ACTION_LOG_PAYMENT_SERVER_ANALYTICS_RPC";V[V.LATENCY_ACTION_GET_PAYMENT_INSTRUMENTS_PARAMS_RPC]="LATENCY_ACTION_GET_PAYMENT_INSTRUMENTS_PARAMS_RPC";V[V.LATENCY_ACTION_GET_FIX_INSTRUMENT_PARAMS_RPC]="LATENCY_ACTION_GET_FIX_INSTRUMENT_PARAMS_RPC";
V[V.LATENCY_ACTION_RESUME_SUBSCRIPTION_RPC]="LATENCY_ACTION_RESUME_SUBSCRIPTION_RPC";V[V.LATENCY_ACTION_PAUSE_SUBSCRIPTION_RPC]="LATENCY_ACTION_PAUSE_SUBSCRIPTION_RPC";V[V.LATENCY_ACTION_GET_OFFLINE_UPSELL_RPC]="LATENCY_ACTION_GET_OFFLINE_UPSELL_RPC";V[V.LATENCY_ACTION_GET_OFFERS_RPC]="LATENCY_ACTION_GET_OFFERS_RPC";V[V.LATENCY_ACTION_GET_CANCELLATION_YT_FLOW_RPC]="LATENCY_ACTION_GET_CANCELLATION_YT_FLOW_RPC";V[V.LATENCY_ACTION_GET_CANCELLATION_FLOW_RPC]="LATENCY_ACTION_GET_CANCELLATION_FLOW_RPC";
V[V.LATENCY_ACTION_UPDATE_CROSS_DEVICE_OFFLINE_STATE_RPC]="LATENCY_ACTION_UPDATE_CROSS_DEVICE_OFFLINE_STATE_RPC";V[V.LATENCY_ACTION_GET_OFFER_DETAILS_RPC]="LATENCY_ACTION_GET_OFFER_DETAILS_RPC";V[V.LATENCY_ACTION_CANCEL_RECURRENCE_TRANSACTION_RPC]="LATENCY_ACTION_CANCEL_RECURRENCE_TRANSACTION_RPC";V[V.LATENCY_ACTION_GET_TIP_MODULE_RPC]="LATENCY_ACTION_GET_TIP_MODULE_RPC";V[V.LATENCY_ACTION_HANDLE_TRANSACTION_RPC]="LATENCY_ACTION_HANDLE_TRANSACTION_RPC";
V[V.LATENCY_ACTION_COMPLETE_TRANSACTION_RPC]="LATENCY_ACTION_COMPLETE_TRANSACTION_RPC";V[V.LATENCY_ACTION_GET_CART_RPC]="LATENCY_ACTION_GET_CART_RPC";V[V.LATENCY_ACTION_THUMBNAIL_FETCH]="LATENCY_ACTION_THUMBNAIL_FETCH";V[V.LATENCY_ACTION_ABANDONED_DIRECT_PLAYBACK]="LATENCY_ACTION_ABANDONED_DIRECT_PLAYBACK";V[V.LATENCY_ACTION_SHARE_VIDEO]="LATENCY_ACTION_SHARE_VIDEO";V[V.LATENCY_ACTION_AD_TO_VIDEO_INT]="LATENCY_ACTION_AD_TO_VIDEO_INT";V[V.LATENCY_ACTION_ABANDONED_BROWSE]="LATENCY_ACTION_ABANDONED_BROWSE";
V[V.LATENCY_ACTION_PLAYER_ROTATION]="LATENCY_ACTION_PLAYER_ROTATION";V[V.LATENCY_ACTION_GENERIC_WEB_VIEW]="LATENCY_ACTION_GENERIC_WEB_VIEW";V[V.LATENCY_ACTION_SHOPPING_IN_APP]="LATENCY_ACTION_SHOPPING_IN_APP";V[V.LATENCY_ACTION_PLAYER_ATTESTATION]="LATENCY_ACTION_PLAYER_ATTESTATION";V[V.LATENCY_ACTION_PLAYER_SEEK]="LATENCY_ACTION_PLAYER_SEEK";V[V.LATENCY_ACTION_SUPER_STICKER_BUY_FLOW]="LATENCY_ACTION_SUPER_STICKER_BUY_FLOW";V[V.LATENCY_ACTION_DOWNLOADS_DATA_ACCESS]="LATENCY_ACTION_DOWNLOADS_DATA_ACCESS";
V[V.LATENCY_ACTION_BLOCKS_PERFORMANCE]="LATENCY_ACTION_BLOCKS_PERFORMANCE";V[V.LATENCY_ACTION_ASSISTANT_QUERY]="LATENCY_ACTION_ASSISTANT_QUERY";V[V.LATENCY_ACTION_ASSISTANT_SETTINGS]="LATENCY_ACTION_ASSISTANT_SETTINGS";V[V.LATENCY_ACTION_ENTITY_KEY_DESERIALIZATION_PERF]="LATENCY_ACTION_ENTITY_KEY_DESERIALIZATION_PERF";V[V.LATENCY_ACTION_ENTITY_KEY_SERIALIZATION_PERF]="LATENCY_ACTION_ENTITY_KEY_SERIALIZATION_PERF";V[V.LATENCY_ACTION_PROOF_OF_ORIGIN_TOKEN_CREATE]="LATENCY_ACTION_PROOF_OF_ORIGIN_TOKEN_CREATE";
V[V.LATENCY_ACTION_EMBEDS_SDK_INITIALIZATION]="LATENCY_ACTION_EMBEDS_SDK_INITIALIZATION";V[V.LATENCY_ACTION_NETWORKLESS_PERFORMANCE]="LATENCY_ACTION_NETWORKLESS_PERFORMANCE";V[V.LATENCY_ACTION_DOWNLOADS_EXPANSION]="LATENCY_ACTION_DOWNLOADS_EXPANSION";V[V.LATENCY_ACTION_ENTITY_TRANSFORM]="LATENCY_ACTION_ENTITY_TRANSFORM";V[V.LATENCY_ACTION_DOWNLOADS_COMPATIBILITY_LAYER]="LATENCY_ACTION_DOWNLOADS_COMPATIBILITY_LAYER";V[V.LATENCY_ACTION_EMBEDS_SET_VIDEO]="LATENCY_ACTION_EMBEDS_SET_VIDEO";
V[V.LATENCY_ACTION_SETTINGS]="LATENCY_ACTION_SETTINGS";V[V.LATENCY_ACTION_ABANDONED_STARTUP]="LATENCY_ACTION_ABANDONED_STARTUP";V[V.LATENCY_ACTION_MEDIA_BROWSER_ALARM_PLAY]="LATENCY_ACTION_MEDIA_BROWSER_ALARM_PLAY";V[V.LATENCY_ACTION_MEDIA_BROWSER_SEARCH]="LATENCY_ACTION_MEDIA_BROWSER_SEARCH";V[V.LATENCY_ACTION_MEDIA_BROWSER_LOAD_TREE]="LATENCY_ACTION_MEDIA_BROWSER_LOAD_TREE";V[V.LATENCY_ACTION_WHO_IS_WATCHING]="LATENCY_ACTION_WHO_IS_WATCHING";V[V.LATENCY_ACTION_CAST_LOAD_BY_ENTITY_TO_WATCH]="LATENCY_ACTION_CAST_LOAD_BY_ENTITY_TO_WATCH";
V[V.LATENCY_ACTION_LITE_SWITCH_ACCOUNT]="LATENCY_ACTION_LITE_SWITCH_ACCOUNT";V[V.LATENCY_ACTION_ELEMENTS_PERFORMANCE]="LATENCY_ACTION_ELEMENTS_PERFORMANCE";V[V.LATENCY_ACTION_LOCATION_SIGNAL_COLLECTION]="LATENCY_ACTION_LOCATION_SIGNAL_COLLECTION";V[V.LATENCY_ACTION_MODIFY_CHANNEL_NOTIFICATION]="LATENCY_ACTION_MODIFY_CHANNEL_NOTIFICATION";V[V.LATENCY_ACTION_OFFLINE_STORE_START]="LATENCY_ACTION_OFFLINE_STORE_START";V[V.LATENCY_ACTION_REEL_EDITOR]="LATENCY_ACTION_REEL_EDITOR";
V[V.LATENCY_ACTION_CHANNEL_SUBSCRIBE]="LATENCY_ACTION_CHANNEL_SUBSCRIBE";V[V.LATENCY_ACTION_CHANNEL_PREVIEW]="LATENCY_ACTION_CHANNEL_PREVIEW";V[V.LATENCY_ACTION_PREFETCH]="LATENCY_ACTION_PREFETCH";V[V.LATENCY_ACTION_ABANDONED_WATCH]="LATENCY_ACTION_ABANDONED_WATCH";V[V.LATENCY_ACTION_LOAD_COMMENT_REPLIES]="LATENCY_ACTION_LOAD_COMMENT_REPLIES";V[V.LATENCY_ACTION_LOAD_COMMENTS]="LATENCY_ACTION_LOAD_COMMENTS";V[V.LATENCY_ACTION_EDIT_COMMENT]="LATENCY_ACTION_EDIT_COMMENT";
V[V.LATENCY_ACTION_NEW_COMMENT]="LATENCY_ACTION_NEW_COMMENT";V[V.LATENCY_ACTION_OFFLINE_SHARING_RECEIVER_PAIRING]="LATENCY_ACTION_OFFLINE_SHARING_RECEIVER_PAIRING";V[V.LATENCY_ACTION_EMBED]="LATENCY_ACTION_EMBED";V[V.LATENCY_ACTION_MDX_LAUNCH]="LATENCY_ACTION_MDX_LAUNCH";V[V.LATENCY_ACTION_RESOLVE_URL]="LATENCY_ACTION_RESOLVE_URL";V[V.LATENCY_ACTION_CAST_SPLASH]="LATENCY_ACTION_CAST_SPLASH";V[V.LATENCY_ACTION_MDX_CONNECT_TO_SESSION]="LATENCY_ACTION_MDX_CONNECT_TO_SESSION";
V[V.LATENCY_ACTION_MDX_STREAM_TRANSFER]="LATENCY_ACTION_MDX_STREAM_TRANSFER";V[V.LATENCY_ACTION_MDX_CAST]="LATENCY_ACTION_MDX_CAST";V[V.LATENCY_ACTION_MDX_COMMAND]="LATENCY_ACTION_MDX_COMMAND";V[V.LATENCY_ACTION_MOBILE_LIVE_NAV_MDE]="LATENCY_ACTION_MOBILE_LIVE_NAV_MDE";V[V.LATENCY_ACTION_REEL_SELECT_SEGMENT]="LATENCY_ACTION_REEL_SELECT_SEGMENT";V[V.LATENCY_ACTION_ACCELERATED_EFFECTS]="LATENCY_ACTION_ACCELERATED_EFFECTS";V[V.LATENCY_ACTION_SHORTS_TRIM_TO_EDITOR_TRANSCODING]="LATENCY_ACTION_SHORTS_TRIM_TO_EDITOR_TRANSCODING";
V[V.LATENCY_ACTION_EDIT_AUDIO_GEN]="LATENCY_ACTION_EDIT_AUDIO_GEN";V[V.LATENCY_ACTION_UPLOAD_AUDIO_MIXER]="LATENCY_ACTION_UPLOAD_AUDIO_MIXER";V[V.LATENCY_ACTION_SHORTS_CLIENT_SIDE_RENDERING]="LATENCY_ACTION_SHORTS_CLIENT_SIDE_RENDERING";V[V.LATENCY_ACTION_SHORTS_SEG_IMP_TRANSCODING]="LATENCY_ACTION_SHORTS_SEG_IMP_TRANSCODING";V[V.LATENCY_ACTION_SHORTS_AUDIO_PICKER_PLAYBACK]="LATENCY_ACTION_SHORTS_AUDIO_PICKER_PLAYBACK";V[V.LATENCY_ACTION_SHORTS_WAVEFORM_DOWNLOAD]="LATENCY_ACTION_SHORTS_WAVEFORM_DOWNLOAD";
V[V.LATENCY_ACTION_SHORTS_VIDEO_INGESTION]="LATENCY_ACTION_SHORTS_VIDEO_INGESTION";V[V.LATENCY_ACTION_SHORTS_GALLERY]="LATENCY_ACTION_SHORTS_GALLERY";V[V.LATENCY_ACTION_SHORTS_TRIM]="LATENCY_ACTION_SHORTS_TRIM";V[V.LATENCY_ACTION_SHORTS_EDIT]="LATENCY_ACTION_SHORTS_EDIT";V[V.LATENCY_ACTION_SHORTS_CAMERA]="LATENCY_ACTION_SHORTS_CAMERA";V[V.LATENCY_ACTION_PRODUCER_EXPORT_PROJECT]="LATENCY_ACTION_PRODUCER_EXPORT_PROJECT";V[V.LATENCY_ACTION_PRODUCER_EDITOR]="LATENCY_ACTION_PRODUCER_EDITOR";
V[V.LATENCY_ACTION_PARENT_TOOLS_DASHBOARD]="LATENCY_ACTION_PARENT_TOOLS_DASHBOARD";V[V.LATENCY_ACTION_PARENT_TOOLS_COLLECTION]="LATENCY_ACTION_PARENT_TOOLS_COLLECTION";V[V.LATENCY_ACTION_MUSIC_LOAD_RECOMMENDED_MEDIA_ITEMS]="LATENCY_ACTION_MUSIC_LOAD_RECOMMENDED_MEDIA_ITEMS";V[V.LATENCY_ACTION_MUSIC_LOAD_MEDIA_ITEMS]="LATENCY_ACTION_MUSIC_LOAD_MEDIA_ITEMS";V[V.LATENCY_ACTION_MUSIC_ALBUM_DETAIL]="LATENCY_ACTION_MUSIC_ALBUM_DETAIL";V[V.LATENCY_ACTION_MUSIC_PLAYLIST_DETAIL]="LATENCY_ACTION_MUSIC_PLAYLIST_DETAIL";
V[V.LATENCY_ACTION_STORE]="LATENCY_ACTION_STORE";V[V.LATENCY_ACTION_CHIPS]="LATENCY_ACTION_CHIPS";V[V.LATENCY_ACTION_SEARCH_ZERO_STATE]="LATENCY_ACTION_SEARCH_ZERO_STATE";V[V.LATENCY_ACTION_LIVE_PAGINATION]="LATENCY_ACTION_LIVE_PAGINATION";V[V.LATENCY_ACTION_LIVE]="LATENCY_ACTION_LIVE";V[V.LATENCY_ACTION_PREBUFFER]="LATENCY_ACTION_PREBUFFER";V[V.LATENCY_ACTION_TENX]="LATENCY_ACTION_TENX";V[V.LATENCY_ACTION_KIDS_PROFILE_SETTINGS]="LATENCY_ACTION_KIDS_PROFILE_SETTINGS";
V[V.LATENCY_ACTION_KIDS_WATCH_IT_AGAIN]="LATENCY_ACTION_KIDS_WATCH_IT_AGAIN";V[V.LATENCY_ACTION_KIDS_SECRET_CODE]="LATENCY_ACTION_KIDS_SECRET_CODE";V[V.LATENCY_ACTION_KIDS_PARENT_PROFILE_SETTINGS]="LATENCY_ACTION_KIDS_PARENT_PROFILE_SETTINGS";V[V.LATENCY_ACTION_KIDS_ONBOARDING]="LATENCY_ACTION_KIDS_ONBOARDING";V[V.LATENCY_ACTION_KIDS_VOICE_SEARCH]="LATENCY_ACTION_KIDS_VOICE_SEARCH";V[V.LATENCY_ACTION_KIDS_CURATED_COLLECTION]="LATENCY_ACTION_KIDS_CURATED_COLLECTION";
V[V.LATENCY_ACTION_KIDS_LIBRARY]="LATENCY_ACTION_KIDS_LIBRARY";V[V.LATENCY_ACTION_CREATOR_VIDEO_TRANSLATIONS]="LATENCY_ACTION_CREATOR_VIDEO_TRANSLATIONS";V[V.LATENCY_ACTION_CREATOR_VIDEO_RIGHTS_MANAGEMENT]="LATENCY_ACTION_CREATOR_VIDEO_RIGHTS_MANAGEMENT";V[V.LATENCY_ACTION_CREATOR_VIDEO_POLICY]="LATENCY_ACTION_CREATOR_VIDEO_POLICY";V[V.LATENCY_ACTION_CREATOR_VIDEO_MONETIZATION]="LATENCY_ACTION_CREATOR_VIDEO_MONETIZATION";V[V.LATENCY_ACTION_CREATOR_VIDEO_LIVE_STREAMING]="LATENCY_ACTION_CREATOR_VIDEO_LIVE_STREAMING";
V[V.LATENCY_ACTION_CREATOR_VIDEO_LIVE_SETTINGS]="LATENCY_ACTION_CREATOR_VIDEO_LIVE_SETTINGS";V[V.LATENCY_ACTION_CREATOR_VIDEO_EDITOR_ASYNC]="LATENCY_ACTION_CREATOR_VIDEO_EDITOR_ASYNC";V[V.LATENCY_ACTION_CREATOR_VIDEO_EDITOR]="LATENCY_ACTION_CREATOR_VIDEO_EDITOR";V[V.LATENCY_ACTION_CREATOR_VIDEO_EDIT]="LATENCY_ACTION_CREATOR_VIDEO_EDIT";V[V.LATENCY_ACTION_CREATOR_VIDEO_COPYRIGHT]="LATENCY_ACTION_CREATOR_VIDEO_COPYRIGHT";V[V.LATENCY_ACTION_CREATOR_VIDEO_COMMENTS]="LATENCY_ACTION_CREATOR_VIDEO_COMMENTS";
V[V.LATENCY_ACTION_CREATOR_VIDEO_CLAIMS]="LATENCY_ACTION_CREATOR_VIDEO_CLAIMS";V[V.LATENCY_ACTION_CREATOR_VIDEO_ANALYTICS]="LATENCY_ACTION_CREATOR_VIDEO_ANALYTICS";V[V.LATENCY_ACTION_CREATOR_SONG_ANALYTICS]="LATENCY_ACTION_CREATOR_SONG_ANALYTICS";V[V.LATENCY_ACTION_CREATOR_PROMOTION_LIST]="LATENCY_ACTION_CREATOR_PROMOTION_LIST";V[V.LATENCY_ACTION_CREATOR_PROMOTION_EDIT]="LATENCY_ACTION_CREATOR_PROMOTION_EDIT";V[V.LATENCY_ACTION_CREATOR_POST_LIST]="LATENCY_ACTION_CREATOR_POST_LIST";
V[V.LATENCY_ACTION_CREATOR_POST_EDIT]="LATENCY_ACTION_CREATOR_POST_EDIT";V[V.LATENCY_ACTION_CREATOR_POST_COMMENTS]="LATENCY_ACTION_CREATOR_POST_COMMENTS";V[V.LATENCY_ACTION_CREATOR_LIVE_STREAMING]="LATENCY_ACTION_CREATOR_LIVE_STREAMING";V[V.LATENCY_ACTION_CREATOR_DIALOG_VIDEO_COPYRIGHT]="LATENCY_ACTION_CREATOR_DIALOG_VIDEO_COPYRIGHT";V[V.LATENCY_ACTION_CREATOR_DIALOG_UPLOADS]="LATENCY_ACTION_CREATOR_DIALOG_UPLOADS";V[V.LATENCY_ACTION_CREATOR_DIALOG_COPYRIGHT_STRIKES]="LATENCY_ACTION_CREATOR_DIALOG_COPYRIGHT_STRIKES";
V[V.LATENCY_ACTION_CREATOR_CMS_VIDEOS]="LATENCY_ACTION_CREATOR_CMS_VIDEOS";V[V.LATENCY_ACTION_CREATOR_CMS_REPORTS]="LATENCY_ACTION_CREATOR_CMS_REPORTS";V[V.LATENCY_ACTION_CREATOR_CMS_RELEASES]="LATENCY_ACTION_CREATOR_CMS_RELEASES";V[V.LATENCY_ACTION_CREATOR_CMS_POLICIES]="LATENCY_ACTION_CREATOR_CMS_POLICIES";V[V.LATENCY_ACTION_CREATOR_CMS_PITCH_MUSIC]="LATENCY_ACTION_CREATOR_CMS_PITCH_MUSIC";V[V.LATENCY_ACTION_CREATOR_CMS_MANUAL_CLAIMING]="LATENCY_ACTION_CREATOR_CMS_MANUAL_CLAIMING";
V[V.LATENCY_ACTION_CREATOR_CMS_LICENSES]="LATENCY_ACTION_CREATOR_CMS_LICENSES";V[V.LATENCY_ACTION_CREATOR_CMS_ISSUES]="LATENCY_ACTION_CREATOR_CMS_ISSUES";V[V.LATENCY_ACTION_CREATOR_CMS_DASHBOARD]="LATENCY_ACTION_CREATOR_CMS_DASHBOARD";V[V.LATENCY_ACTION_CREATOR_CMS_CONTENT_DELIVERY]="LATENCY_ACTION_CREATOR_CMS_CONTENT_DELIVERY";V[V.LATENCY_ACTION_CREATOR_CMS_CLAIMED_VIDEOS]="LATENCY_ACTION_CREATOR_CMS_CLAIMED_VIDEOS";V[V.LATENCY_ACTION_CREATOR_CMS_CHANNELS]="LATENCY_ACTION_CREATOR_CMS_CHANNELS";
V[V.LATENCY_ACTION_CREATOR_CMS_CAMPAIGNS]="LATENCY_ACTION_CREATOR_CMS_CAMPAIGNS";V[V.LATENCY_ACTION_CREATOR_CMS_ASSET_SOUND_RECORDINGS]="LATENCY_ACTION_CREATOR_CMS_ASSET_SOUND_RECORDINGS";V[V.LATENCY_ACTION_CREATOR_CMS_ASSET_REFERENCES]="LATENCY_ACTION_CREATOR_CMS_ASSET_REFERENCES";V[V.LATENCY_ACTION_CREATOR_CMS_ASSET_POLICY]="LATENCY_ACTION_CREATOR_CMS_ASSET_POLICY";V[V.LATENCY_ACTION_CREATOR_CMS_ASSET_OWNERSHIP]="LATENCY_ACTION_CREATOR_CMS_ASSET_OWNERSHIP";
V[V.LATENCY_ACTION_CREATOR_CMS_ASSET_METADATA]="LATENCY_ACTION_CREATOR_CMS_ASSET_METADATA";V[V.LATENCY_ACTION_CREATOR_CMS_ASSET_LICENSES]="LATENCY_ACTION_CREATOR_CMS_ASSET_LICENSES";V[V.LATENCY_ACTION_CREATOR_CMS_ASSET_ISSUES]="LATENCY_ACTION_CREATOR_CMS_ASSET_ISSUES";V[V.LATENCY_ACTION_CREATOR_CMS_ASSET_GROUPS]="LATENCY_ACTION_CREATOR_CMS_ASSET_GROUPS";V[V.LATENCY_ACTION_CREATOR_CMS_ASSET_EMBEDS]="LATENCY_ACTION_CREATOR_CMS_ASSET_EMBEDS";V[V.LATENCY_ACTION_CREATOR_CMS_ASSET_COMPOSITION]="LATENCY_ACTION_CREATOR_CMS_ASSET_COMPOSITION";
V[V.LATENCY_ACTION_CREATOR_CMS_ASSET_CLAIMED_VIDEOS]="LATENCY_ACTION_CREATOR_CMS_ASSET_CLAIMED_VIDEOS";V[V.LATENCY_ACTION_CREATOR_CMS_ASSETS]="LATENCY_ACTION_CREATOR_CMS_ASSETS";V[V.LATENCY_ACTION_CREATOR_CMS_ART_TRACKS]="LATENCY_ACTION_CREATOR_CMS_ART_TRACKS";V[V.LATENCY_ACTION_CREATOR_CMS_ANALYTICS]="LATENCY_ACTION_CREATOR_CMS_ANALYTICS";V[V.LATENCY_ACTION_CREATOR_CMS_ALLOWLIST]="LATENCY_ACTION_CREATOR_CMS_ALLOWLIST";V[V.LATENCY_ACTION_CREATOR_CHANNEL_VIDEOS]="LATENCY_ACTION_CREATOR_CHANNEL_VIDEOS";
V[V.LATENCY_ACTION_CREATOR_CHANNEL_TRANSLATIONS]="LATENCY_ACTION_CREATOR_CHANNEL_TRANSLATIONS";V[V.LATENCY_ACTION_CREATOR_CHANNEL_PLAYLISTS]="LATENCY_ACTION_CREATOR_CHANNEL_PLAYLISTS";V[V.LATENCY_ACTION_CREATOR_CHANNEL_MUSIC_STOREFRONT]="LATENCY_ACTION_CREATOR_CHANNEL_MUSIC_STOREFRONT";V[V.LATENCY_ACTION_CREATOR_CHANNEL_MUSIC]="LATENCY_ACTION_CREATOR_CHANNEL_MUSIC";V[V.LATENCY_ACTION_CREATOR_CHANNEL_MONETIZATION]="LATENCY_ACTION_CREATOR_CHANNEL_MONETIZATION";
V[V.LATENCY_ACTION_CREATOR_CHANNEL_EDITING]="LATENCY_ACTION_CREATOR_CHANNEL_EDITING";V[V.LATENCY_ACTION_CREATOR_CHANNEL_DASHBOARD]="LATENCY_ACTION_CREATOR_CHANNEL_DASHBOARD";V[V.LATENCY_ACTION_CREATOR_CHANNEL_COPYRIGHT]="LATENCY_ACTION_CREATOR_CHANNEL_COPYRIGHT";V[V.LATENCY_ACTION_CREATOR_CHANNEL_COMMENTS]="LATENCY_ACTION_CREATOR_CHANNEL_COMMENTS";V[V.LATENCY_ACTION_CREATOR_CHANNEL_ANALYTICS]="LATENCY_ACTION_CREATOR_CHANNEL_ANALYTICS";V[V.LATENCY_ACTION_CREATOR_ARTIST_PROFILE]="LATENCY_ACTION_CREATOR_ARTIST_PROFILE";
V[V.LATENCY_ACTION_CREATOR_ARTIST_CONCERTS]="LATENCY_ACTION_CREATOR_ARTIST_CONCERTS";V[V.LATENCY_ACTION_CREATOR_ARTIST_ANALYTICS]="LATENCY_ACTION_CREATOR_ARTIST_ANALYTICS";V[V.LATENCY_ACTION_CREATOR_ANALYTICS_EXPLORE]="LATENCY_ACTION_CREATOR_ANALYTICS_EXPLORE";V[V.LATENCY_ACTION_EXPERIMENTAL_WATCH_UI]="LATENCY_ACTION_EXPERIMENTAL_WATCH_UI";V[V.LATENCY_ACTION_FINE_SCRUBBING_THUMBNAILS]="LATENCY_ACTION_FINE_SCRUBBING_THUMBNAILS";V[V.LATENCY_ACTION_STORYBOARD_THUMBNAILS]="LATENCY_ACTION_STORYBOARD_THUMBNAILS";
V[V.LATENCY_ACTION_SEARCH_THUMBNAILS]="LATENCY_ACTION_SEARCH_THUMBNAILS";V[V.LATENCY_ACTION_ON_DEVICE_MODEL_DOWNLOAD]="LATENCY_ACTION_ON_DEVICE_MODEL_DOWNLOAD";V[V.LATENCY_ACTION_VOICE_ASSISTANT]="LATENCY_ACTION_VOICE_ASSISTANT";V[V.LATENCY_ACTION_SEARCH_UI]="LATENCY_ACTION_SEARCH_UI";V[V.LATENCY_ACTION_SUGGEST]="LATENCY_ACTION_SUGGEST";V[V.LATENCY_ACTION_AUTO_SEARCH]="LATENCY_ACTION_AUTO_SEARCH";V[V.LATENCY_ACTION_DOWNLOADS]="LATENCY_ACTION_DOWNLOADS";V[V.LATENCY_ACTION_EXPLORE]="LATENCY_ACTION_EXPLORE";
V[V.LATENCY_ACTION_VIDEO_LIST]="LATENCY_ACTION_VIDEO_LIST";V[V.LATENCY_ACTION_HOME_RESUME]="LATENCY_ACTION_HOME_RESUME";V[V.LATENCY_ACTION_SUBSCRIPTIONS_LIST]="LATENCY_ACTION_SUBSCRIPTIONS_LIST";V[V.LATENCY_ACTION_THUMBNAIL_LOAD]="LATENCY_ACTION_THUMBNAIL_LOAD";V[V.LATENCY_ACTION_FIRST_THUMBNAIL_LOAD]="LATENCY_ACTION_FIRST_THUMBNAIL_LOAD";V[V.LATENCY_ACTION_SUBSCRIPTIONS_FEED]="LATENCY_ACTION_SUBSCRIPTIONS_FEED";V[V.LATENCY_ACTION_SUBSCRIPTIONS]="LATENCY_ACTION_SUBSCRIPTIONS";
V[V.LATENCY_ACTION_TRENDING]="LATENCY_ACTION_TRENDING";V[V.LATENCY_ACTION_LIBRARY]="LATENCY_ACTION_LIBRARY";V[V.LATENCY_ACTION_VIDEO_THUMBNAIL]="LATENCY_ACTION_VIDEO_THUMBNAIL";V[V.LATENCY_ACTION_SHOW_MORE]="LATENCY_ACTION_SHOW_MORE";V[V.LATENCY_ACTION_VIDEO_PREVIEW]="LATENCY_ACTION_VIDEO_PREVIEW";V[V.LATENCY_ACTION_AD_TO_AD]="LATENCY_ACTION_AD_TO_AD";V[V.LATENCY_ACTION_VIDEO_TO_AD]="LATENCY_ACTION_VIDEO_TO_AD";V[V.LATENCY_ACTION_AD_TO_VIDEO]="LATENCY_ACTION_AD_TO_VIDEO";
V[V.LATENCY_ACTION_DIRECT_PLAYBACK]="LATENCY_ACTION_DIRECT_PLAYBACK";V[V.LATENCY_ACTION_PREBUFFER_VIDEO]="LATENCY_ACTION_PREBUFFER_VIDEO";V[V.LATENCY_ACTION_PREFETCH_VIDEO]="LATENCY_ACTION_PREFETCH_VIDEO";V[V.LATENCY_ACTION_STARTUP]="LATENCY_ACTION_STARTUP";V[V.LATENCY_ACTION_INLINE_TO_WATCH]="LATENCY_ACTION_INLINE_TO_WATCH";V[V.LATENCY_ACTION_MUSIC_IMMERSIVE_WATCH]="LATENCY_ACTION_MUSIC_IMMERSIVE_WATCH";V[V.LATENCY_ACTION_ONBOARDING]="LATENCY_ACTION_ONBOARDING";V[V.LATENCY_ACTION_LOGIN]="LATENCY_ACTION_LOGIN";
V[V.LATENCY_ACTION_REEL_WATCH]="LATENCY_ACTION_REEL_WATCH";V[V.LATENCY_ACTION_WATCH]="LATENCY_ACTION_WATCH";V[V.LATENCY_ACTION_RESULTS]="LATENCY_ACTION_RESULTS";V[V.LATENCY_ACTION_CHANNELS]="LATENCY_ACTION_CHANNELS";V[V.LATENCY_ACTION_HOME]="LATENCY_ACTION_HOME";V[V.LATENCY_ACTION_BROWSE]="LATENCY_ACTION_BROWSE";V[V.LATENCY_ACTION_USER_ACTION]="LATENCY_ACTION_USER_ACTION";V[V.LATENCY_ACTION_INFRASTRUCTURE]="LATENCY_ACTION_INFRASTRUCTURE";V[V.LATENCY_ACTION_PAGE_NAVIGATION]="LATENCY_ACTION_PAGE_NAVIGATION";
V[V.LATENCY_ACTION_UNKNOWN]="LATENCY_ACTION_UNKNOWN";var Hv={LATENCY_NETWORK_MOBILE:2,LATENCY_NETWORK_WIFI:1,LATENCY_NETWORK_UNKNOWN:0};Hv[Hv.LATENCY_NETWORK_MOBILE]="LATENCY_NETWORK_MOBILE";Hv[Hv.LATENCY_NETWORK_WIFI]="LATENCY_NETWORK_WIFI";Hv[Hv.LATENCY_NETWORK_UNKNOWN]="LATENCY_NETWORK_UNKNOWN";
var X={CONN_INVALID:31,CONN_CELLULAR_5G_NSA:12,CONN_CELLULAR_5G_SA:11,CONN_WIFI_METERED:10,CONN_CELLULAR_5G:9,CONN_DISCO:8,CONN_CELLULAR_UNKNOWN:7,CONN_CELLULAR_4G:6,CONN_CELLULAR_3G:5,CONN_CELLULAR_2G:4,CONN_WIFI:3,CONN_NONE:2,CONN_UNKNOWN:1,CONN_DEFAULT:0};X[X.CONN_INVALID]="CONN_INVALID";X[X.CONN_CELLULAR_5G_NSA]="CONN_CELLULAR_5G_NSA";X[X.CONN_CELLULAR_5G_SA]="CONN_CELLULAR_5G_SA";X[X.CONN_WIFI_METERED]="CONN_WIFI_METERED";X[X.CONN_CELLULAR_5G]="CONN_CELLULAR_5G";X[X.CONN_DISCO]="CONN_DISCO";
X[X.CONN_CELLULAR_UNKNOWN]="CONN_CELLULAR_UNKNOWN";X[X.CONN_CELLULAR_4G]="CONN_CELLULAR_4G";X[X.CONN_CELLULAR_3G]="CONN_CELLULAR_3G";X[X.CONN_CELLULAR_2G]="CONN_CELLULAR_2G";X[X.CONN_WIFI]="CONN_WIFI";X[X.CONN_NONE]="CONN_NONE";X[X.CONN_UNKNOWN]="CONN_UNKNOWN";X[X.CONN_DEFAULT]="CONN_DEFAULT";
var Y={DETAILED_NETWORK_TYPE_NR_NSA:126,DETAILED_NETWORK_TYPE_NR_SA:125,DETAILED_NETWORK_TYPE_INTERNAL_WIFI_IMPAIRED:124,DETAILED_NETWORK_TYPE_APP_WIFI_HOTSPOT:123,DETAILED_NETWORK_TYPE_DISCONNECTED:122,DETAILED_NETWORK_TYPE_NON_MOBILE_UNKNOWN:121,DETAILED_NETWORK_TYPE_MOBILE_UNKNOWN:120,DETAILED_NETWORK_TYPE_WIMAX:119,DETAILED_NETWORK_TYPE_ETHERNET:118,DETAILED_NETWORK_TYPE_BLUETOOTH:117,DETAILED_NETWORK_TYPE_WIFI:116,DETAILED_NETWORK_TYPE_LTE:115,DETAILED_NETWORK_TYPE_HSPAP:114,DETAILED_NETWORK_TYPE_EHRPD:113,
DETAILED_NETWORK_TYPE_EVDO_B:112,DETAILED_NETWORK_TYPE_UMTS:111,DETAILED_NETWORK_TYPE_IDEN:110,DETAILED_NETWORK_TYPE_HSUPA:109,DETAILED_NETWORK_TYPE_HSPA:108,DETAILED_NETWORK_TYPE_HSDPA:107,DETAILED_NETWORK_TYPE_EVDO_A:106,DETAILED_NETWORK_TYPE_EVDO_0:105,DETAILED_NETWORK_TYPE_CDMA:104,DETAILED_NETWORK_TYPE_1_X_RTT:103,DETAILED_NETWORK_TYPE_GPRS:102,DETAILED_NETWORK_TYPE_EDGE:101,DETAILED_NETWORK_TYPE_UNKNOWN:0};Y[Y.DETAILED_NETWORK_TYPE_NR_NSA]="DETAILED_NETWORK_TYPE_NR_NSA";
Y[Y.DETAILED_NETWORK_TYPE_NR_SA]="DETAILED_NETWORK_TYPE_NR_SA";Y[Y.DETAILED_NETWORK_TYPE_INTERNAL_WIFI_IMPAIRED]="DETAILED_NETWORK_TYPE_INTERNAL_WIFI_IMPAIRED";Y[Y.DETAILED_NETWORK_TYPE_APP_WIFI_HOTSPOT]="DETAILED_NETWORK_TYPE_APP_WIFI_HOTSPOT";Y[Y.DETAILED_NETWORK_TYPE_DISCONNECTED]="DETAILED_NETWORK_TYPE_DISCONNECTED";Y[Y.DETAILED_NETWORK_TYPE_NON_MOBILE_UNKNOWN]="DETAILED_NETWORK_TYPE_NON_MOBILE_UNKNOWN";Y[Y.DETAILED_NETWORK_TYPE_MOBILE_UNKNOWN]="DETAILED_NETWORK_TYPE_MOBILE_UNKNOWN";
Y[Y.DETAILED_NETWORK_TYPE_WIMAX]="DETAILED_NETWORK_TYPE_WIMAX";Y[Y.DETAILED_NETWORK_TYPE_ETHERNET]="DETAILED_NETWORK_TYPE_ETHERNET";Y[Y.DETAILED_NETWORK_TYPE_BLUETOOTH]="DETAILED_NETWORK_TYPE_BLUETOOTH";Y[Y.DETAILED_NETWORK_TYPE_WIFI]="DETAILED_NETWORK_TYPE_WIFI";Y[Y.DETAILED_NETWORK_TYPE_LTE]="DETAILED_NETWORK_TYPE_LTE";Y[Y.DETAILED_NETWORK_TYPE_HSPAP]="DETAILED_NETWORK_TYPE_HSPAP";Y[Y.DETAILED_NETWORK_TYPE_EHRPD]="DETAILED_NETWORK_TYPE_EHRPD";Y[Y.DETAILED_NETWORK_TYPE_EVDO_B]="DETAILED_NETWORK_TYPE_EVDO_B";
Y[Y.DETAILED_NETWORK_TYPE_UMTS]="DETAILED_NETWORK_TYPE_UMTS";Y[Y.DETAILED_NETWORK_TYPE_IDEN]="DETAILED_NETWORK_TYPE_IDEN";Y[Y.DETAILED_NETWORK_TYPE_HSUPA]="DETAILED_NETWORK_TYPE_HSUPA";Y[Y.DETAILED_NETWORK_TYPE_HSPA]="DETAILED_NETWORK_TYPE_HSPA";Y[Y.DETAILED_NETWORK_TYPE_HSDPA]="DETAILED_NETWORK_TYPE_HSDPA";Y[Y.DETAILED_NETWORK_TYPE_EVDO_A]="DETAILED_NETWORK_TYPE_EVDO_A";Y[Y.DETAILED_NETWORK_TYPE_EVDO_0]="DETAILED_NETWORK_TYPE_EVDO_0";Y[Y.DETAILED_NETWORK_TYPE_CDMA]="DETAILED_NETWORK_TYPE_CDMA";
Y[Y.DETAILED_NETWORK_TYPE_1_X_RTT]="DETAILED_NETWORK_TYPE_1_X_RTT";Y[Y.DETAILED_NETWORK_TYPE_GPRS]="DETAILED_NETWORK_TYPE_GPRS";Y[Y.DETAILED_NETWORK_TYPE_EDGE]="DETAILED_NETWORK_TYPE_EDGE";Y[Y.DETAILED_NETWORK_TYPE_UNKNOWN]="DETAILED_NETWORK_TYPE_UNKNOWN";var Iv={LATENCY_PLAYER_RTSP:7,LATENCY_PLAYER_HTML5_INLINE:6,LATENCY_PLAYER_HTML5_FULLSCREEN:5,LATENCY_PLAYER_HTML5:4,LATENCY_PLAYER_FRAMEWORK:3,LATENCY_PLAYER_FLASH:2,LATENCY_PLAYER_EXO:1,LATENCY_PLAYER_UNKNOWN:0};Iv[Iv.LATENCY_PLAYER_RTSP]="LATENCY_PLAYER_RTSP";
Iv[Iv.LATENCY_PLAYER_HTML5_INLINE]="LATENCY_PLAYER_HTML5_INLINE";Iv[Iv.LATENCY_PLAYER_HTML5_FULLSCREEN]="LATENCY_PLAYER_HTML5_FULLSCREEN";Iv[Iv.LATENCY_PLAYER_HTML5]="LATENCY_PLAYER_HTML5";Iv[Iv.LATENCY_PLAYER_FRAMEWORK]="LATENCY_PLAYER_FRAMEWORK";Iv[Iv.LATENCY_PLAYER_FLASH]="LATENCY_PLAYER_FLASH";Iv[Iv.LATENCY_PLAYER_EXO]="LATENCY_PLAYER_EXO";Iv[Iv.LATENCY_PLAYER_UNKNOWN]="LATENCY_PLAYER_UNKNOWN";
var Jv={LATENCY_AD_BREAK_TYPE_POSTROLL:3,LATENCY_AD_BREAK_TYPE_MIDROLL:2,LATENCY_AD_BREAK_TYPE_PREROLL:1,LATENCY_AD_BREAK_TYPE_UNKNOWN:0};Jv[Jv.LATENCY_AD_BREAK_TYPE_POSTROLL]="LATENCY_AD_BREAK_TYPE_POSTROLL";Jv[Jv.LATENCY_AD_BREAK_TYPE_MIDROLL]="LATENCY_AD_BREAK_TYPE_MIDROLL";Jv[Jv.LATENCY_AD_BREAK_TYPE_PREROLL]="LATENCY_AD_BREAK_TYPE_PREROLL";Jv[Jv.LATENCY_AD_BREAK_TYPE_UNKNOWN]="LATENCY_AD_BREAK_TYPE_UNKNOWN";var Kv={LATENCY_ACTION_ERROR_STARTUP_TIMEOUT:1,LATENCY_ACTION_ERROR_UNSPECIFIED:0};
Kv[Kv.LATENCY_ACTION_ERROR_STARTUP_TIMEOUT]="LATENCY_ACTION_ERROR_STARTUP_TIMEOUT";Kv[Kv.LATENCY_ACTION_ERROR_UNSPECIFIED]="LATENCY_ACTION_ERROR_UNSPECIFIED";var Lv={LIVE_STREAM_MODE_WINDOW:5,LIVE_STREAM_MODE_POST:4,LIVE_STREAM_MODE_LP:3,LIVE_STREAM_MODE_LIVE:2,LIVE_STREAM_MODE_DVR:1,LIVE_STREAM_MODE_UNKNOWN:0};Lv[Lv.LIVE_STREAM_MODE_WINDOW]="LIVE_STREAM_MODE_WINDOW";Lv[Lv.LIVE_STREAM_MODE_POST]="LIVE_STREAM_MODE_POST";Lv[Lv.LIVE_STREAM_MODE_LP]="LIVE_STREAM_MODE_LP";
Lv[Lv.LIVE_STREAM_MODE_LIVE]="LIVE_STREAM_MODE_LIVE";Lv[Lv.LIVE_STREAM_MODE_DVR]="LIVE_STREAM_MODE_DVR";Lv[Lv.LIVE_STREAM_MODE_UNKNOWN]="LIVE_STREAM_MODE_UNKNOWN";var Mv={VIDEO_STREAM_TYPE_VOD:3,VIDEO_STREAM_TYPE_DVR:2,VIDEO_STREAM_TYPE_LIVE:1,VIDEO_STREAM_TYPE_UNSPECIFIED:0};Mv[Mv.VIDEO_STREAM_TYPE_VOD]="VIDEO_STREAM_TYPE_VOD";Mv[Mv.VIDEO_STREAM_TYPE_DVR]="VIDEO_STREAM_TYPE_DVR";Mv[Mv.VIDEO_STREAM_TYPE_LIVE]="VIDEO_STREAM_TYPE_LIVE";Mv[Mv.VIDEO_STREAM_TYPE_UNSPECIFIED]="VIDEO_STREAM_TYPE_UNSPECIFIED";
var Nv={YT_IDB_TRANSACTION_TYPE_READ:2,YT_IDB_TRANSACTION_TYPE_WRITE:1,YT_IDB_TRANSACTION_TYPE_UNKNOWN:0};Nv[Nv.YT_IDB_TRANSACTION_TYPE_READ]="YT_IDB_TRANSACTION_TYPE_READ";Nv[Nv.YT_IDB_TRANSACTION_TYPE_WRITE]="YT_IDB_TRANSACTION_TYPE_WRITE";Nv[Nv.YT_IDB_TRANSACTION_TYPE_UNKNOWN]="YT_IDB_TRANSACTION_TYPE_UNKNOWN";var Ov={PLAYER_ROTATION_TYPE_PORTRAIT_TO_FULLSCREEN:2,PLAYER_ROTATION_TYPE_FULLSCREEN_TO_PORTRAIT:1,PLAYER_ROTATION_TYPE_UNKNOWN:0};Ov[Ov.PLAYER_ROTATION_TYPE_PORTRAIT_TO_FULLSCREEN]="PLAYER_ROTATION_TYPE_PORTRAIT_TO_FULLSCREEN";
Ov[Ov.PLAYER_ROTATION_TYPE_FULLSCREEN_TO_PORTRAIT]="PLAYER_ROTATION_TYPE_FULLSCREEN_TO_PORTRAIT";Ov[Ov.PLAYER_ROTATION_TYPE_UNKNOWN]="PLAYER_ROTATION_TYPE_UNKNOWN";var Pv="actionVisualElement spinnerInfo resourceInfo playerInfo commentInfo mdxInfo watchInfo thumbnailLoadInfo creatorInfo unpluggedInfo reelInfo subscriptionsFeedInfo requestIds mediaBrowserActionInfo musicLoadActionInfo shoppingInfo webViewInfo prefetchInfo accelerationSession commerceInfo webInfo tvInfo kabukiInfo mwebInfo musicInfo transcodingContext".split(" ");function Qv(a,b){cq.call(this,1,arguments);this.timer=b}
u(Qv,cq);var Rv=new dq("aft-recorded",Qv);var Sv=y.ytLoggingLatencyUsageStats_||{};A("ytLoggingLatencyUsageStats_",Sv);function Tv(){this.h=0}
function Uv(){Tv.h||(Tv.h=new Tv);return Tv.h}
Tv.prototype.tick=function(a,b,c,d){Vv(this,"tick_"+a+"_"+b)||(c={timestamp:c,cttAuthInfo:d},P("web_csi_via_jspb")?(d=new Vl,E(d,1,a),E(d,2,b),a=new Yl,Wd(a,Vl,5,Zl,d),Mt(a,c)):io("latencyActionTicked",{tickName:a,clientActionNonce:b},c))};
Tv.prototype.info=function(a,b,c){var d=Object.keys(a).join("");Vv(this,"info_"+d+"_"+b)||(a=Object.assign({},a),a.clientActionNonce=b,io("latencyActionInfo",a,{cttAuthInfo:c}))};
Tv.prototype.jspbInfo=function(a,b,c){for(var d="",e=0;e<a.toJSON().length;e++)void 0!==a.toJSON()[e]&&(d=0===e?d.concat(""+e):d.concat("_"+e));Vv(this,"info_"+d+"_"+b)||(E(a,2,b),b={cttAuthInfo:c},c=new Yl,Wd(c,Sl,7,Zl,a),Mt(c,b))};
Tv.prototype.span=function(a,b,c){var d=Object.keys(a).join("");Vv(this,"span_"+d+"_"+b)||(a.clientActionNonce=b,io("latencyActionSpan",a,{cttAuthInfo:c}))};
function Vv(a,b){Sv[b]=Sv[b]||{count:0};var c=Sv[b];c.count++;c.time=R();a.h||(a.h=Sn(function(){var d=R(),e;for(e in Sv)Sv[e]&&6E4<d-Sv[e].time&&delete Sv[e];a&&(a.h=0)},5E3));
return 5<c.count?(6===c.count&&1>1E5*Math.random()&&(c=new Q("CSI data exceeded logging limit with key",b.split("_")),0<=b.indexOf("plev")||$t(c)),!0):!1}
;var Wv=window;function Xv(){this.timing={};this.clearResourceTimings=function(){};
this.webkitClearResourceTimings=function(){};
this.mozClearResourceTimings=function(){};
this.msClearResourceTimings=function(){};
this.oClearResourceTimings=function(){}}
function Yv(){var a;if(P("csi_use_performance_navigation_timing")||P("csi_use_performance_navigation_timing_tvhtml5")){var b,c,d,e=null==Z?void 0:null==(a=Z.getEntriesByType)?void 0:null==(b=a.call(Z,"navigation"))?void 0:null==(c=b[0])?void 0:null==(d=c.toJSON)?void 0:d.call(c);e?(e.requestStart=Zv(e.requestStart),e.responseEnd=Zv(e.responseEnd),e.redirectStart=Zv(e.redirectStart),e.redirectEnd=Zv(e.redirectEnd),e.domainLookupEnd=Zv(e.domainLookupEnd),e.connectStart=Zv(e.connectStart),e.connectEnd=
Zv(e.connectEnd),e.responseStart=Zv(e.responseStart),e.secureConnectionStart=Zv(e.secureConnectionStart),e.domainLookupStart=Zv(e.domainLookupStart),e.isPerformanceNavigationTiming=!0,a=e):a=Z.timing}else a=Z.timing;return a}
function Zv(a){return Math.round($v()+a)}
function $v(){return(P("csi_use_time_origin")||P("csi_use_time_origin_tvhtml5"))&&Z.timeOrigin?Math.floor(Z.timeOrigin):Z.timing.navigationStart}
var Z=Wv.performance||Wv.mozPerformance||Wv.msPerformance||Wv.webkitPerformance||new Xv;var aw=!1,bw={'script[name="scheduler/scheduler"]':"sj",'script[name="player/base"]':"pj",'link[rel="stylesheet"][name="www-player"]':"pc",'link[rel="stylesheet"][name="player/www-player"]':"pc",'script[name="desktop_polymer/desktop_polymer"]':"dpj",'link[rel="import"][name="desktop_polymer"]':"dph",'script[name="mobile-c3"]':"mcj",'link[rel="stylesheet"][name="mobile-c3"]':"mcc",'script[name="player-plasma-ias-phone/base"]':"mcppj",'script[name="player-plasma-ias-tablet/base"]':"mcptj",'link[rel="stylesheet"][name="mobile-polymer-player-ias"]':"mcpc",
'link[rel="stylesheet"][name="mobile-polymer-player-svg-ias"]':"mcpsc",'script[name="mobile_blazer_core_mod"]':"mbcj",'link[rel="stylesheet"][name="mobile_blazer_css"]':"mbc",'script[name="mobile_blazer_logged_in_users_mod"]':"mbliuj",'script[name="mobile_blazer_logged_out_users_mod"]':"mblouj",'script[name="mobile_blazer_noncore_mod"]':"mbnj","#player_css":"mbpc",'script[name="mobile_blazer_desktopplayer_mod"]':"mbpj",'link[rel="stylesheet"][name="mobile_blazer_tablet_css"]':"mbtc",'script[name="mobile_blazer_watch_mod"]':"mbwj"};
Xa(Z.clearResourceTimings||Z.webkitClearResourceTimings||Z.mozClearResourceTimings||Z.msClearResourceTimings||Z.oClearResourceTimings||db,Z);function cw(a,b,c,d){if(null!==b){if("yt_lt"===a){var e="string"===typeof b?b:""+b;sv(c).loadType=e}(a=Gv(a,b,c))&&dw(a,c,d)}}
function dw(a,b,c){if(!P("web_csi_via_jspb")||(void 0===c?0:c))c=yv(b||""),lv(c.info,a),a.loadType&&(c=a.loadType,sv(b).loadType=c),lv(vv(b),a),c=wv(b),b=qv(b).cttAuthInfo,Uv().info(a,c,b);else{c=new Sl;var d=Object.keys(a);a=Object.values(a);for(var e=0;e<d.length;e++){var f=d[e];try{switch(f){case "actionType":E(c,1,V[a[e]]);break;case "clientActionNonce":E(c,2,a[e]);break;case "clientScreenNonce":E(c,4,a[e]);break;case "loadType":E(c,3,a[e]);break;case "isPrewarmedLaunch":E(c,92,a[e]);break;case "isFirstInstall":E(c,
55,a[e]);break;case "networkType":E(c,5,Hv[a[e]]);break;case "connectionType":E(c,26,X[a[e]]);break;case "detailedConnectionType":E(c,27,Y[a[e]]);break;case "isVisible":E(c,6,a[e]);break;case "playerType":E(c,7,Iv[a[e]]);break;case "clientPlaybackNonce":E(c,8,a[e]);break;case "adClientPlaybackNonce":E(c,28,a[e]);break;case "previousCpn":E(c,77,a[e]);break;case "targetCpn":E(c,76,a[e]);break;case "isMonetized":E(c,9,a[e]);break;case "isPrerollAllowed":E(c,16,a[e]);break;case "isPrerollShown":E(c,17,
a[e]);break;case "adType":E(c,12,a[e]);break;case "adTypesAllowed":E(c,36,a[e]);break;case "adNetworks":E(c,37,a[e]);break;case "previousAction":E(c,13,V[a[e]]);break;case "isRedSubscriber":E(c,14,a[e]);break;case "serverTimeMs":E(c,15,a[e]);break;case "videoId":c.setVideoId(a[e]);break;case "adVideoId":E(c,20,a[e]);break;case "targetVideoId":E(c,78,a[e]);break;case "adBreakType":E(c,21,Jv[a[e]]);break;case "isNavigation":E(c,25,a[e]);break;case "viewportHeight":E(c,29,a[e]);break;case "viewportWidth":E(c,
30,a[e]);break;case "screenHeight":E(c,84,a[e]);break;case "screenWidth":E(c,85,a[e]);break;case "browseId":E(c,31,a[e]);break;case "isCacheHit":E(c,32,a[e]);break;case "httpProtocol":E(c,33,a[e]);break;case "transportProtocol":E(c,34,a[e]);break;case "searchQuery":E(c,41,a[e]);break;case "isContinuation":E(c,42,a[e]);break;case "availableProcessors":E(c,43,a[e]);break;case "sdk":E(c,44,a[e]);break;case "isLocalStream":E(c,45,a[e]);break;case "navigationRequestedSameUrl":E(c,64,a[e]);break;case "shellStartupDurationMs":E(c,
70,a[e]);break;case "appInstallDataAgeMs":E(c,73,a[e]);break;case "latencyActionError":E(c,71,Kv[a[e]]);break;case "actionStep":E(c,79,a[e]);break;case "jsHeapSizeLimit":E(c,80,a[e]);break;case "totalJsHeapSize":E(c,81,a[e]);break;case "usedJsHeapSize":E(c,82,a[e]);break;case "sourceVideoDurationMs":E(c,90,a[e]);break;case "videoOutputFrames":E(c,93,a[e]);break;case "isResume":E(c,104,a[e]);break;case "debugTicksExcluded":E(c,105,a[e]);break;case "adPrebufferedTimeSecs":E(c,39,a[e]);break;case "isLivestream":E(c,
47,a[e]);break;case "liveStreamMode":E(c,91,Lv[a[e]]);break;case "adCpn2":E(c,48,a[e]);break;case "adDaiDriftMillis":E(c,49,a[e]);break;case "videoStreamType":E(c,53,Mv[a[e]]);break;case "playbackRequiresTap":E(c,56,a[e]);break;case "performanceNavigationTiming":E(c,67,a[e]);break;case "transactionType":E(c,74,Nv[a[e]]);break;case "playerRotationType":E(c,101,Ov[a[e]]);break;case "allowedPreroll":E(c,10,a[e]);break;case "shownPreroll":E(c,11,a[e]);break;case "getHomeRequestId":E(c,57,a[e]);break;
case "getSearchRequestId":E(c,60,a[e]);break;case "getPlayerRequestId":E(c,61,a[e]);break;case "getWatchNextRequestId":E(c,62,a[e]);break;case "getBrowseRequestId":E(c,63,a[e]);break;case "getLibraryRequestId":E(c,66,a[e]);break;case "isTransformerEnabledForFeature":E(c,106,a[e]);break;default:Pv.includes(f)&&Bm(new Q("Codegen laipb translator asked to translate message field",""+f))}}catch(g){Bm(Error("Codegen laipb translator failed to set "+f))}}ew(c,b)}}
function ew(a,b){var c=$d(a,3);c&&(sv(b).loadType=c);yv(b||"").jspbInfo.push(a);c=wv(b);b=qv(b).cttAuthInfo;Uv().jspbInfo(a,c,b)}
function fw(a,b,c){if(!b&&"_"!==a[0]){var d=a;Z.mark&&(0==d.lastIndexOf("mark_",0)||(d="mark_"+d),c&&(d+=" ("+c+")"),Z.mark(d))}d=yv(c||"");d.tick[a]=b||R();if(d.callback&&d.callback[a]){d=r(d.callback[a]);for(var e=d.next();!e.done;e=d.next())e=e.value,e()}d=uv(c);d.gelTicks&&(d.gelTicks[a]=!0);e=tv(c);d=b||R();P("log_repeated_ytcsi_ticks")?a in e||(e[a]=d):e[a]=d;e=wv(c);var f=qv(c).cttAuthInfo;"_start"===a?(a=Uv(),Vv(a,"baseline_"+e)||(b={timestamp:b,cttAuthInfo:f},P("web_csi_via_jspb")?(a=new Nl,
E(a,1,e),e=new Yl,Wd(e,Nl,6,Zl,a),Mt(e,b)):io("latencyActionBaselined",{clientActionNonce:e},b))):Uv().tick(a,e,b,f);gw(c);return d}
function hw(){var a=document;if("visibilityState"in a)a=a.visibilityState;else{var b=fs+"VisibilityState";a=b in a?a[b]:void 0}switch(a){case "hidden":return 0;case "visible":return 1;case "prerender":return 2;case "unloaded":return 3;default:return-1}}
function iw(a){var b=Yv(),c=$v(),d=M("CSI_START_TIMESTAMP_MILLIS",0);0<d&&!P("embeds_web_enable_csi_start_override_killswitch")&&(c=d);c&&(fw("srt",b.responseStart),1!==a.prerender&&fw("_start",c));a=jw();0<a&&fw("fpt",a);a=Yv();a.isPerformanceNavigationTiming&&dw({performanceNavigationTiming:!0});fw("nreqs",a.requestStart);fw("nress",a.responseStart);fw("nrese",a.responseEnd);0<a.redirectEnd-a.redirectStart&&(fw("nrs",a.redirectStart),fw("nre",a.redirectEnd));0<a.domainLookupEnd-a.domainLookupStart&&
(fw("ndnss",a.domainLookupStart),fw("ndnse",a.domainLookupEnd));0<a.connectEnd-a.connectStart&&(fw("ntcps",a.connectStart),fw("ntcpe",a.connectEnd));a.secureConnectionStart>=$v()&&0<a.connectEnd-a.secureConnectionStart&&(fw("nstcps",a.secureConnectionStart),fw("ntcpe",a.connectEnd));Z&&"getEntriesByType"in Z&&kw()}
function lw(a,b){a=document.querySelector(a);if(!a)return!1;var c="",d=a.nodeName;"SCRIPT"===d?(c=a.src,c||(c=a.getAttribute("data-timing-href"))&&(c=window.location.protocol+c)):"LINK"===d&&(c=a.href);hc()&&a.setAttribute("nonce",hc());return c?(a=Z.getEntriesByName(c))&&a[0]&&(a=a[0],c=$v(),fw("rsf_"+b,c+Math.round(a.fetchStart)),fw("rse_"+b,c+Math.round(a.responseEnd)),void 0!==a.transferSize&&0===a.transferSize)?!0:!1:!1}
function mw(){var a=[];if(document.querySelector&&Z&&Z.getEntriesByName)for(var b in bw)if(bw.hasOwnProperty(b)){var c=bw[b];lw(b,c)&&a.push(c)}return a}
function kw(){var a=window.location.protocol,b=Z.getEntriesByType("resource");b=hb(b,function(c){return 0===c.name.indexOf(a+"//fonts.gstatic.com/s/")});
(b=jb(b,function(c,d){return d.duration>c.duration?d:c},{duration:0}))&&0<b.startTime&&0<b.responseEnd&&(fw("wffs",Zv(b.startTime)),fw("wffe",Zv(b.responseEnd)))}
function nw(a){var b=ow("aft",a);if(b)return b;b=M((a||"")+"TIMING_AFT_KEYS",["ol"]);for(var c=b.length,d=0;d<c;d++){var e=ow(b[d],a);if(e)return e}return NaN}
function ow(a,b){if(a=tv(b)[a])return"number"===typeof a?a:a[a.length-1]}
function gw(a){var b=ow("_start",a),c=nw(a);b&&c&&!aw&&(iq(Rv,new Qv(Math.round(c-b),a)),aw=!0)}
function pw(a,b){for(var c=r(Object.keys(b)),d=c.next();!d.done;d=c.next())if(d=d.value,!Object.keys(a).includes(d)||"object"===typeof b[d]&&!pw(a[d],b[d]))return!1;return!0}
function jw(){if(Z.getEntriesByType){var a=Z.getEntriesByType("paint");if(a=kb(a,function(b){return"first-paint"===b.name}))return Zv(a.startTime)}a=Z.timing;
return a.Ge?Math.max(0,a.Ge):0}
;function qw(a,b){yv("").info.actionType=a;b&&pm("TIMING_AFT_KEYS",b);pm("TIMING_ACTION",a);if(P("web_csi_via_jspb")){a=M("TIMING_INFO",{});var c=new Sl;a=r(Object.entries(a));for(b=a.next();!b.done;b=a.next()){var d=r(b.value);b=d.next().value;d=d.next().value;switch(b){case "GetBrowse_rid":Ul(c,Ql(Pl(b),String(d)));break;case "GetGuide_rid":Ul(c,Ql(Pl(b),String(d)));break;case "GetHome_rid":Ul(c,Ql(Pl(b),String(d)));break;case "GetPlayer_rid":Ul(c,Ql(Pl(b),String(d)));break;case "GetSearch_rid":Ul(c,
Ql(Pl(b),String(d)));break;case "GetSettings_rid":Ul(c,Ql(Pl(b),String(d)));break;case "GetTrending_rid":Ul(c,Ql(Pl(b),String(d)));break;case "GetWatchNext_rid":Ul(c,Ql(Pl(b),String(d)));break;case "yt_red":E(c,14,!!d);break;case "yt_ad":E(c,9,!!d)}}ew(c);c=new Sl;c=E(c,25,!0);c=E(c,1,V[Fv(M("TIMING_ACTION"))]);(a=M("PREVIOUS_ACTION"))&&E(c,13,V[Fv(a)]);(a=M("CLIENT_PROTOCOL"))&&E(c,33,a);(a=M("CLIENT_TRANSPORT"))&&E(c,34,a);(a=tu())&&"UNDEFINED_CSN"!==a&&E(c,4,a);a=hw();1!==a&&-1!==a||E(c,6,!0);
a=rv();sv();E(c,3,"cold");iw(a);a=mw();if(0<a.length)for(a=r(a),b=a.next();!b.done;b=a.next())b=b.value,d=new Rl,E(d,1,b),Yd(c,83,Rl,d);ew(c)}else{a=M("TIMING_INFO",{});for(c in a)a.hasOwnProperty(c)&&cw(c,a[c]);c={isNavigation:!0,actionType:Fv(M("TIMING_ACTION"))};if(a=M("PREVIOUS_ACTION"))c.previousAction=Fv(a);if(a=M("CLIENT_PROTOCOL"))c.httpProtocol=a;if(a=M("CLIENT_TRANSPORT"))c.transportProtocol=a;(a=tu())&&"UNDEFINED_CSN"!==a&&(c.clientScreenNonce=a);a=hw();if(1===a||-1===a)c.isVisible=!0;
sv();rv();c.loadType="cold";iw(rv());a=mw();if(0<a.length)for(c.resourceInfo=[],a=r(a),b=a.next();!b.done;b=a.next())c.resourceInfo.push({resourceCache:b.value});dw(c)}c=rv();a=vv();if("cold"===sv().loadType&&("cold"===c.yt_lt||"cold"===a.loadType)){b=tv();d=uv();d=d.gelTicks?d.gelTicks:d.gelTicks={};for(var e in b)if(!(e in d))if("number"===typeof b[e])fw(e,ow(e));else if(P("log_repeated_ytcsi_ticks"))for(var f=r(b[e]),g=f.next();!g.done;g=f.next())fw(e.slice(1),g.value);e={};b=!1;d=r(Object.keys(c));
for(f=d.next();!f.done;f=d.next())f=f.value,(f=Gv(f,c[f]))&&!pw(vv(),f)&&(lv(a,f),lv(e,f),b=!0);b&&dw(e)}A("ytglobal.timingready_",!0);e=M("TIMING_ACTION");B("ytglobal.timingready_")&&e&&"_start"in tv()&&nw()&&gw()}
function rw(a,b,c,d){cw(a,b,c,d)}
function sw(a,b,c){return fw(a,b,c)}
function tw(){var a=wv();requestAnimationFrame(function(){setTimeout(function(){a===wv()&&fw("ol")},0)})}
var uw=window;uw.ytcsi&&(uw.ytcsi.info=rw,uw.ytcsi.tick=sw);var vw="tokens consistency mss client_location entities response_received_commands store PLAYER_PRELOAD".split(" "),ww=["type.googleapis.com/youtube.api.pfiinnertube.YoutubeApiInnertube.BrowseResponse"];function xw(a,b,c,d){this.m=a;this.W=b;this.l=c;this.j=d;this.i=void 0;this.h=new Map;a.Ob||(a.Ob={});a.Ob=Object.assign({},kv,a.Ob)}
function yw(a,b,c,d){if(void 0!==xw.h){if(d=xw.h,a=[a!==d.m,b!==d.W,c!==d.l,!1,!1,void 0!==d.i],a.some(function(e){return e}))throw new Q("InnerTubeTransportService is already initialized",a);
}else xw.h=new xw(a,b,c,d)}
function zw(a){var b={signalServiceEndpoint:{signal:"GET_DATASYNC_IDS"}};var c=void 0===c?yn:c;var d=cv(b,a.m);if(!d)return Ff(new Q("Error: No request builder found for command.",b));var e=d.m(b,void 0,c);return e?new Af(function(f){var g,h,k;return x(function(m){if(1==m.h){h="cors"===(null==(g=e.kb)?void 0:g.mode)?"cors":void 0;if(a.l.cf){var p=e.config,n;p=null==p?void 0:null==(n=p.Yb)?void 0:n.sessionIndex;n=xn(0,{sessionIndex:p});k=Object.assign({},Aw(h),n);return m.A(2)}return w(m,Bw(e.config,
h),3)}2!=m.h&&(k=m.i);f(Cw(a,e,k));m.h=0})}):Ff(new Q("Error: Failed to build request for command.",b))}
function Dw(a,b,c){var d;if(b&&!(null==b?0:null==(d=b.Yt)?0:d.bu)&&a.j){d=r(vw);for(var e=d.next();!e.done;e=d.next())e=e.value,a.j[e]&&a.j[e].handleResponse(b,c)}}
function Cw(a,b,c){var d,e,f,g,h,k,m,p,n,v,t,z,D,F,N,O,T,aa,W,xb,$a,qa,I,oa,ha,df,ef,Md;return x(function(ta){switch(ta.h){case 1:ta.A(2);break;case 3:if((d=ta.i)&&!d.isExpired())return ta.return(Promise.resolve(d.h()));case 2:if(null==(e=b)?0:null==(f=e.La)?0:f.context)for(g=r([]),h=g.next();!h.done;h=g.next())k=h.value,k.Ut(b.La.context);if(null==(m=a.i)||!m.Zt(b.input,b.La)){ta.A(4);break}return w(ta,a.i.Pt(b.input,b.La),5);case 5:return p=ta.i,P("kevlar_process_local_innertube_responses_killswitch")||
Dw(a,p,b),ta.return(p);case 4:return(t=null==(v=b.config)?void 0:v.Oa)&&a.h.has(t)&&P("web_memoize_inflight_requests")?n=a.h.get(t):(z=JSON.stringify(b.La),N=null!=(F=null==(D=b.kb)?void 0:D.headers)?F:{},b.kb=Object.assign({},b.kb,{headers:Object.assign({},N,c)}),O=Object.assign({},b.kb),"POST"===b.kb.method&&(O=Object.assign({},O,{body:z})),(null==(T=b.config)?0:T.Oe)&&fw(b.config.Oe),aa=function(){return a.W.fetch(b.input,O,b.config)},n=aa(),t&&a.h.set(t,n)),w(ta,n,6);
case 6:if((W=ta.i)&&"error"in W&&(null==(xb=W)?0:null==($a=xb.error)?0:$a.details))for(qa=W.error.details,I=r(qa),oa=I.next();!oa.done;oa=I.next())ha=oa.value,(df=ha["@type"])&&-1<ww.indexOf(df)&&(delete ha["@type"],W=ha);t&&a.h.has(t)&&a.h.delete(t);(null==(ef=b.config)?0:ef.Pe)&&fw(b.config.Pe);if(W||null==(Md=a.i)||!Md.Ht(b.input,b.La)){ta.A(7);break}return w(ta,a.i.Ot(b.input,b.La),8);case 8:W=ta.i;case 7:return Dw(a,W,b),ta.return(W||void 0)}})}
function Bw(a,b){var c,d,e,f;return x(function(g){if(1==g.h){e=null==(c=a)?void 0:null==(d=c.Yb)?void 0:d.sessionIndex;var h=xn(0,{sessionIndex:e});if(!(h instanceof Af)){var k=new Af(db);Bf(k,2,h);h=k}return w(g,h,2)}f=g.i;return g.return(Promise.resolve(Object.assign({},Aw(b),f)))})}
function Aw(a){var b={"Content-Type":"application/json"};M("EOM_VISITOR_DATA")?b["X-Goog-EOM-Visitor-Id"]=M("EOM_VISITOR_DATA"):M("VISITOR_DATA")&&(b["X-Goog-Visitor-Id"]=M("VISITOR_DATA"));b["X-Youtube-Bootstrap-Logged-In"]=M("LOGGED_IN",!1);"cors"!==a&&((a=M("INNERTUBE_CONTEXT_CLIENT_NAME"))&&(b["X-Youtube-Client-Name"]=a),(a=M("INNERTUBE_CONTEXT_CLIENT_VERSION"))&&(b["X-Youtube-Client-Version"]=a),(a=M("CHROME_CONNECTED_HEADER"))&&(b["X-Youtube-Chrome-Connected"]=a),(a=M("DOMAIN_ADMIN_STATE"))&&
(b["X-Youtube-Domain-Admin-State"]=a));return b}
;var Ew=new Fs("INNERTUBE_TRANSPORT_TOKEN");var Fw=["share/get_web_player_share_panel"],Gw=["feedback"],Hw=["notification/modify_channel_preference"],Iw=["browse/edit_playlist"],Jw=["subscription/subscribe"],Kw=["subscription/unsubscribe"];function Lw(){}
u(Lw,hv);Lw.prototype.j=function(){return Jw};
Lw.prototype.h=function(a){return Rs(a,jm)||void 0};
Lw.prototype.i=function(a,b,c){c=void 0===c?{}:c;b.channelIds&&(a.channelIds=b.channelIds);b.siloName&&(a.siloName=b.siloName);b.params&&(a.params=b.params);c.botguardResponse&&(a.botguardResponse=c.botguardResponse);c.feature&&(a.clientFeature=c.feature)};
ea.Object.defineProperties(Lw.prototype,{l:{configurable:!0,enumerable:!0,get:function(){return!0}}});function Mw(){}
u(Mw,hv);Mw.prototype.j=function(){return Kw};
Mw.prototype.h=function(a){return Rs(a,im)||void 0};
Mw.prototype.i=function(a,b){b.channelIds&&(a.channelIds=b.channelIds);b.siloName&&(a.siloName=b.siloName);b.params&&(a.params=b.params)};
ea.Object.defineProperties(Mw.prototype,{l:{configurable:!0,enumerable:!0,get:function(){return!0}}});function Nw(){}
u(Nw,hv);Nw.prototype.j=function(){return Gw};
Nw.prototype.h=function(a){return Rs(a,Pk)||void 0};
Nw.prototype.i=function(a,b,c){a.feedbackTokens=[];b.feedbackToken&&a.feedbackTokens.push(b.feedbackToken);if(b=b.cpn||c.cpn)a.feedbackContext={cpn:b};a.isFeedbackTokenUnencrypted=!!c.is_feedback_token_unencrypted;a.shouldMerge=!1;c.extra_feedback_tokens&&(a.shouldMerge=!0,a.feedbackTokens=a.feedbackTokens.concat(c.extra_feedback_tokens))};
ea.Object.defineProperties(Nw.prototype,{l:{configurable:!0,enumerable:!0,get:function(){return!0}}});function Ow(){}
u(Ow,hv);Ow.prototype.j=function(){return Hw};
Ow.prototype.h=function(a){return Rs(a,hm)||void 0};
Ow.prototype.i=function(a,b){b.params&&(a.params=b.params);b.secondaryParams&&(a.secondaryParams=b.secondaryParams)};function Pw(){}
u(Pw,hv);Pw.prototype.j=function(){return Iw};
Pw.prototype.h=function(a){return Rs(a,gm)||void 0};
Pw.prototype.i=function(a,b){b.actions&&(a.actions=b.actions);b.params&&(a.params=b.params);b.playlistId&&(a.playlistId=b.playlistId)};function Qw(){}
u(Qw,hv);Qw.prototype.j=function(){return Fw};
Qw.prototype.h=function(a){return Rs(a,fm)};
Qw.prototype.i=function(a,b,c){c=void 0===c?{}:c;b.serializedShareEntity&&(a.serializedSharedEntity=b.serializedShareEntity);c.includeListId&&(a.includeListId=!0)};var Hs=new Fs("NETWORK_SLI_TOKEN");function Rw(a){this.h=a}
Rw.prototype.fetch=function(a,b){var c=this,d,e,f;return x(function(g){c.h&&(d=lc(mc(5,Bc(a,"key")))||"/UNKNOWN_PATH",c.h.start(d));e=b;P("wug_networking_gzip_request")&&(e=qq(b));f=new window.Request(a,e);return P("web_fetch_promise_cleanup_killswitch")?g.return(Promise.resolve(fetch(f).then(function(h){return c.handleResponse(h)}).catch(function(h){$t(h)}))):g.return(fetch(f).then(function(h){return c.handleResponse(h)}).catch(function(h){$t(h)}))})};
Rw.prototype.handleResponse=function(a){var b=a.text().then(function(c){return JSON.parse(c.replace(")]}'",""))});
a.redirected||a.ok?this.h&&this.h.success():(this.h&&this.h.Lt(),b=b.then(function(c){$t(new Q("Error: API fetch failed",a.status,a.url,c));return Object.assign({},c,{errorMetadata:{status:a.status}})}));
return b};
Rw[Es]=[new Gs];var Sw=new Fs("NETWORK_MANAGER_TOKEN");var Tw;function Uw(a){a=void 0===a||a?hu():gu();for(var b=[],c=0;c<a.length;c++)b.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(a[c]&63));return b.join("")}
;function Vw(a){cq.call(this,1,arguments);this.csn=a}
u(Vw,cq);var lq=new dq("screen-created",Vw),Ww=[],Yw=Xw,Zw=0;function $w(a,b,c,d,e,f,g){function h(){$t(new Q("newScreen() parent element does not have a VE - rootVe",b))}
var k=Yw(),m=new mu({veType:b,youtubeData:f,jspbYoutubeData:void 0});f={sequenceGroup:k};e&&(f.cttAuthInfo=e);P("il_via_jspb")?(e=Fl((new El).h(k),m.getAsJspb()),c&&c.visualElement?(m=new Cl,c.clientScreenNonce&&E(m,2,c.clientScreenNonce),Dl(m,c.visualElement.getAsJspb()),g&&E(m,4,$l[g]),G(e,Cl,5,m)):c&&h(),d&&E(e,3,d),Rt(e,f,a)):(e={csn:k,pageVe:m.getAsJson()},c&&c.visualElement?(e.implicitGesture={parentCsn:c.clientScreenNonce,gesturedVe:c.visualElement.getAsJson()},g&&(e.implicitGesture.gestureType=
g)):c&&h(),d&&(e.cloneCsn=d),a?Gt("screenCreated",e,a,f):io("screenCreated",e,f));iq(lq,new Vw(k));return k}
function ax(a,b,c,d){var e=d.filter(function(k){k.csn!==b?(k.csn=b,k=!0):k=!1;return k}),f={cttAuthInfo:wu(b)||void 0,
sequenceGroup:b};d=r(d);for(var g=d.next();!g.done;g=d.next())g=g.value.getAsJson(),(qb(g)||!g.trackingParams&&!g.veType)&&$t(Error("Child VE logged with no data"));if(P("il_via_jspb")){var h=Il((new Gl).h(b),c.getAsJspb());ib(e,function(k){k=k.getAsJspb();Yd(h,3,xl,k)});
"UNDEFINED_CSN"===b?bx("visualElementAttached",f,void 0,h):St(h,f,a)}else c={csn:b,parentVe:c.getAsJson(),childVes:ib(e,function(k){return k.getAsJson()})},"UNDEFINED_CSN"===b?bx("visualElementAttached",f,c):a?Gt("visualElementAttached",c,a,f):io("visualElementAttached",c,f)}
function cx(a,b,c,d,e,f){dx(a,b,c,e,f)}
function dx(a,b,c,d,e){var f={cttAuthInfo:wu(b)||void 0,sequenceGroup:b};P("il_via_jspb")?(d=(new Ll).h(b),c=c.getAsJspb(),c=G(d,xl,2,c),c=E(c,4,1),e&&G(c,Al,3,e),"UNDEFINED_CSN"===b?bx("visualElementShown",f,void 0,c):Nt(c,f,a)):(e={csn:b,ve:c.getAsJson(),eventType:1},d&&(e.clientData=d),"UNDEFINED_CSN"===b?bx("visualElementShown",f,e):a?Gt("visualElementShown",e,a,f):io("visualElementShown",e,f))}
function ex(a,b,c){var d=!0,e=(d=void 0===d?!1:d)?16:8,f={cttAuthInfo:wu(b)||void 0,sequenceGroup:b,endOfSequence:d};P("il_via_jspb")?(e=(new Kl).h(b),c=c.getAsJspb(),c=G(e,xl,2,c),E(c,4,d?16:8),"UNDEFINED_CSN"===b?bx("visualElementHidden",f,void 0,c):Ot(c,f,a)):(d={csn:b,ve:c.getAsJson(),eventType:e},"UNDEFINED_CSN"===b?bx("visualElementHidden",f,d):a?Gt("visualElementHidden",d,a,f):io("visualElementHidden",d,f))}
function Xw(){if(P("enable_web_96_bit_csn"))var a=Uw();else if(P("enable_web_96_bit_csn_no_crypto"))a=Uw(!1);else{a=Math.random()+"";for(var b=[],c=0,d=0;d<a.length;d++){var e=a.charCodeAt(d);255<e&&(b[c++]=e&255,e>>=8);b[c++]=e}a=cd(b,3)}return a}
function bx(a,b,c,d){Ww.push({Mc:a,payload:c,Ua:d,options:b});Zw||(Zw=mq())}
function nq(a){if(Ww){for(var b=r(Ww),c=b.next();!c.done;c=b.next())if(c=c.value,P("il_via_jspb")&&c.Ua)switch(c.Ua.h(a.csn),c.Mc){case "screenCreated":Rt(c.Ua,c.options);break;case "visualElementAttached":St(c.Ua,c.options);break;case "visualElementShown":Nt(c.Ua,c.options);break;case "visualElementHidden":Ot(c.Ua,c.options);break;case "visualElementGestured":Pt(c.Ua,c.options);break;case "visualElementStateChanged":Qt(c.Ua,c.options);break;default:$t(new Q("flushQueue unable to map payloadName to JSPB setter"))}else c.payload&&
(c.payload.csn=a.csn,io(c.Mc,c.payload,c.options));Ww.length=0}Zw=0}
;function fx(a,b){P("safe_logging_library_killswitch")?dx(void 0,a,b):Am(cx)(void 0,a,b,void 0,void 0,void 0)}
;function gx(){this.j=new Set;this.h=new Set;this.m=new Map;this.client=void 0;this.csn=null}
function hx(){gx.h||(gx.h=new gx);return gx.h}
gx.prototype.l=function(a){this.client=a};
gx.prototype.i=function(){this.clear();this.csn=tu()};
gx.prototype.clear=function(){this.j.clear();this.h.clear();this.m.clear();this.csn=null};function ix(){this.i=new Set;this.h=new Set;this.j=new Map;this.client=void 0;this.csn=null}
ix.prototype.l=function(a){P("safe_logging_library_killswitch")?this.client=a:Am(hx().l).bind(hx())(a)};
function jx(){ix.h||(ix.h=new ix);var a=ix.h;P("safe_logging_library_killswitch")?(a.clear(),a.csn=tu()):Am(hx().i).bind(hx())()}
ix.prototype.clear=function(){P("safe_logging_library_killswitch")?(this.i.clear(),this.h.clear(),this.j.clear(),this.csn=null):Am(hx().clear).bind(hx())()};function kx(){this.s=[];this.H=[];this.h=[];this.m=[];this.Z=[];this.i=new Set;this.v=new Map}
kx.prototype.l=function(a){this.client=a};
function lx(a,b,c){c=void 0===c?0:c;b.then(function(d){a.i.has(c)&&a.j&&a.j();var e=tu(c),f=ru(c);if(e&&f){var g;(null==d?0:null==(g=d.response)?0:g.trackingParams)&&ax(a.client,e,f,[nu(d.response.trackingParams)]);var h;(null==d?0:null==(h=d.playerResponse)?0:h.trackingParams)&&ax(a.client,e,f,[nu(d.playerResponse.trackingParams)])}})}
function mx(a,b,c,d){d=void 0===d?0:d;if(a.i.has(d))a.s.push([b,c]);else{var e=tu(d);c=c||ru(d);e&&c&&ax(a.client,e,c,[b])}}
kx.prototype.clickCommand=function(a,b,c){var d=a.clickTrackingParams;c=void 0===c?0:c;if(d)if(c=tu(void 0===c?0:c)){a=this.client;var e=nu(d);d={cttAuthInfo:wu(c)||void 0,sequenceGroup:c};P("il_via_jspb")?(b=(new Jl).h(c),e=e.getAsJspb(),b=G(b,xl,2,e),E(b,4,$l.INTERACTION_LOGGING_GESTURE_TYPE_GENERIC_CLICK),"UNDEFINED_CSN"===c?bx("visualElementGestured",d,void 0,b):Pt(b,d,a)):(e={csn:c,ve:e.getAsJson(),gestureType:"INTERACTION_LOGGING_GESTURE_TYPE_GENERIC_CLICK"},b&&(e.clientData=b),"UNDEFINED_CSN"===
c?bx("visualElementGestured",d,e):a?Gt("visualElementGestured",e,a,d):io("visualElementGestured",e,d));b=!0}else b=!1;else b=!1;return b};
kx.prototype.visualElementStateChanged=function(a,b,c){c=void 0===c?0:c;0===c&&this.i.has(c)?this.H.push([a,b]):nx(this,a,b,c)};
function nx(a,b,c,d){d=void 0===d?0:d;var e=tu(d);d=b||ru(d);e&&d&&(a=a.client,b={cttAuthInfo:wu(e)||void 0,sequenceGroup:e},P("il_via_jspb")?(c=new Ml,c.h(e),d=d.getAsJspb(),G(c,xl,2,d),"UNDEFINED_CSN"===e?bx("visualElementStateChanged",b,void 0,c):Qt(c,b,a)):(c={csn:e,ve:d.getAsJson(),clientData:c},"UNDEFINED_CSN"===e?bx("visualElementStateChanged",b,c):a?Gt("visualElementStateChanged",c,a,b):io("visualElementStateChanged",c,b)))}
function ox(a,b,c){c=void 0===c?{}:c;a.i.add(c.layer||0);a.j=function(){px(a,b,c);var f=ru(c.layer);if(f){for(var g=r(a.s),h=g.next();!h.done;h=g.next())h=h.value,mx(a,h[0],h[1]||f,c.layer);f=r(a.H);for(g=f.next();!g.done;g=f.next())g=g.value,nx(a,g[0],g[1])}};
tu(c.layer)||a.j();if(c.kd)for(var d=r(c.kd),e=d.next();!e.done;e=d.next())lx(a,e.value,c.layer);else Zt(Error("Delayed screen needs a data promise."))}
function px(a,b,c){c=void 0===c?{}:c;var d=void 0;c.layer||(c.layer=0);d=void 0!==c.Je?c.Je:c.layer;var e=tu(d);d=ru(d);var f;d&&(void 0!==c.parentCsn?f={clientScreenNonce:c.parentCsn,visualElement:d}:e&&"UNDEFINED_CSN"!==e&&(f={clientScreenNonce:e,visualElement:d}));var g,h=M("EVENT_ID");"UNDEFINED_CSN"===e&&h&&(g={servletData:{serializedServletEventId:h}});try{var k=$w(a.client,b,f,c.jd,c.cttAuthInfo,g,c.Mt)}catch(n){bu(n,{Wt:b,rootVe:d,Tt:void 0,It:e,St:f,jd:c.jd});Zt(n);return}xu(k,b,c.layer,
c.cttAuthInfo);e&&"UNDEFINED_CSN"!==e&&d&&!uu(e)&&ex(a.client,e,d);a.h[a.h.length-1]&&!a.h[a.h.length-1].csn&&(a.h[a.h.length-1].csn=k||"");dw({clientScreenNonce:k},void 0,!1);jx();var m=ru(c.layer);e&&"UNDEFINED_CSN"!==e&&m&&(P("web_mark_root_visible")||P("music_web_mark_root_visible"))&&fx(k,m);a.i.delete(c.layer||0);a.j=void 0;var p;null==(p=a.v.get(c.layer))||p.forEach(function(n,v){n?mx(a,v,n,c.layer):m&&mx(a,v,m,c.layer)});
qx(a)}
function qx(a){for(var b=0;b<a.m.length;b++){var c=a.m[b];try{c()}catch(d){Zt(d)}}for(b=a.m.length=0;b<a.Z.length;b++){c=a.Z[b];try{c()}catch(d){Zt(d)}}}
;function rx(){var a,b,c;return x(function(d){if(1==d.h)return a=Ms().resolve(Ew),a?w(d,zw(a),2):($t(Error("InnertubeTransportService unavailable in fetchDatasyncIds")),d.return(void 0));if(b=d.i){if(b.errorMetadata)return $t(Error("Datasync IDs fetch responded with "+b.errorMetadata.status+": "+b.error)),d.return(void 0);c=b.Jt;return d.return(c)}$t(Error("Network request to get Datasync IDs failed."));return d.return(void 0)})}
;var sx=y.caches,tx;function ux(a){var b=a.indexOf(":");return-1===b?{Bd:a}:{Bd:a.substring(0,b),datasyncId:a.substring(b+1)}}
function vx(){return x(function(a){if(void 0!==tx)return a.return(tx);tx=new Promise(function(b){var c;return x(function(d){switch(d.h){case 1:return za(d,2),w(d,sx.open("test-only"),4);case 4:return w(d,sx.delete("test-only"),5);case 5:Aa(d,3);break;case 2:if(c=Ba(d),c instanceof Error&&"SecurityError"===c.name)return b(!1),d.return();case 3:b("caches"in window),d.h=0}})});
return a.return(tx)})}
function wx(a){var b,c,d,e,f,g,h;x(function(k){if(1==k.h)return w(k,vx(),2);if(3!=k.h){if(!k.i)return k.return(!1);b=[];return w(k,sx.keys(),3)}c=k.i;d=r(c);for(e=d.next();!e.done;e=d.next())f=e.value,g=ux(f),h=g.datasyncId,!h||a.includes(h)||b.push(sx.delete(f));return k.return(Promise.all(b).then(function(m){return m.some(function(p){return p})}))})}
function xx(){var a,b,c,d,e,f,g;return x(function(h){if(1==h.h)return w(h,vx(),2);if(3!=h.h){if(!h.i)return h.return(!1);a=Yn("cache contains other");return w(h,sx.keys(),3)}b=h.i;c=r(b);for(d=c.next();!d.done;d=c.next())if(e=d.value,f=ux(e),(g=f.datasyncId)&&g!==a)return h.return(!0);return h.return(!1)})}
;function yx(){try{return!!self.localStorage}catch(a){return!1}}
;function zx(a){a=a.match(/(.*)::.*::.*/);if(null!==a)return a[1]}
function Ax(a){if(yx()){var b=Object.keys(window.localStorage);b=r(b);for(var c=b.next();!c.done;c=b.next()){c=c.value;var d=zx(c);void 0===d||a.includes(d)||self.localStorage.removeItem(c)}}}
function Bx(){if(!yx())return!1;var a=Yn(),b=Object.keys(window.localStorage);b=r(b);for(var c=b.next();!c.done;c=b.next())if(c=zx(c.value),void 0!==c&&c!==a)return!0;return!1}
;function Cx(){rx().then(function(a){a&&(vp(a),wx(a),Ax(a))})}
function Dx(){var a=new Sr;mi.fa(function(){var b,c,d,e;return x(function(f){switch(f.h){case 1:if(P("ytidb_clear_optimizations_killswitch")){f.A(2);break}b=Yn("clear");if(b.startsWith("V")){var g=[b];vp(g);wx(g);Ax(g);return f.return()}c=Bx();return w(f,xx(),3);case 3:return d=f.i,w(f,wp(),4);case 4:if(e=f.i,!c&&!d&&!e)return f.return();case 2:a.ma()?Cx():a.l.add("publicytnetworkstatus-online",Cx,!0,void 0,void 0),f.h=0}})})}
;var Sh=ia(["data-"]);function Ex(a){a&&(a.dataset?a.dataset[Fx("loaded")]="true":Rh(a))}
function Gx(a,b){return a?a.dataset?a.dataset[Fx(b)]:a.getAttribute("data-"+b):null}
var Hx={};function Fx(a){return Hx[a]||(Hx[a]=String(a).replace(/\-([a-z])/g,function(b,c){return c.toUpperCase()}))}
;var Ix=/\.vflset|-vfl[a-zA-Z0-9_+=-]+/,Jx=/-[a-zA-Z]{2,3}_[a-zA-Z]{2,3}(?=(\/|$))/;function Kx(a,b,c){c=void 0===c?null:c;if(window.spf&&spf.script){c="";if(a){var d=a.indexOf("jsbin/"),e=a.lastIndexOf(".js"),f=d+6;-1<d&&-1<e&&e>f&&(c=a.substring(f,e),c=c.replace(Ix,""),c=c.replace(Jx,""),c=c.replace("debug-",""),c=c.replace("tracing-",""))}spf.script.load(a,c,b)}else Lx(a,b,c)}
function Lx(a,b,c){c=void 0===c?null:c;var d=Mx(a),e=document.getElementById(d),f=e&&Gx(e,"loaded"),g=e&&!f;f?b&&b():(b&&(f=ys(d,b),b=""+Sa(b),Nx[b]=f),g||(e=Ox(a,d,function(){Gx(e,"loaded")||(Ex(e),Bs(d),Sm(Ya(Cs,d),0))},c)))}
function Ox(a,b,c,d){d=void 0===d?null:d;var e=nf("SCRIPT");e.id=b;e.onload=function(){c&&setTimeout(c,0)};
e.onreadystatechange=function(){switch(e.readyState){case "loaded":case "complete":e.onload()}};
d&&e.setAttribute("nonce",d);Uh(e,pk(a));a=document.getElementsByTagName("head")[0]||document.body;a.insertBefore(e,a.firstChild);return e}
function Px(a){a=Mx(a);var b=document.getElementById(a);b&&(Cs(a),b.parentNode.removeChild(b))}
function Qx(a,b){a&&b&&(a=""+Sa(b),(a=Nx[a])&&As(a))}
function Mx(a){var b=document.createElement("a");ec(b,a);a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"js-"+jc(a)}
var Nx={};var Tx=[],Ux=!1;function Vx(){if(!P("disable_biscotti_fetch_for_ad_blocker_detection")&&!P("disable_biscotti_fetch_entirely_for_all_web_clients")&&Ju()){var a=M("PLAYER_VARS",{});if("1"!=sb(a)&&!Ku(a)){var b=function(){Ux=!0;"google_ad_status"in window?pm("DCLKSTAT",1):pm("DCLKSTAT",2)};
try{Kx("//static.doubleclick.net/instream/ad_status.js",b)}catch(c){}Tx.push(mi.fa(function(){if(!(Ux||"google_ad_status"in window)){try{Qx("//static.doubleclick.net/instream/ad_status.js",b)}catch(c){}Ux=!0;pm("DCLKSTAT",3)}},5E3))}}}
function Wx(){var a=Number(M("DCLKSTAT",0));return isNaN(a)?0:a}
;function Xx(a){var b=this;var c=void 0===c?0:c;var d=void 0===d?Wn():d;this.l=c;this.j=d;this.i=new Jh;this.h=a;a={};c=r(this.h.entries());for(d=c.next();!d.done;a={Ab:a.Ab,Qb:a.Qb},d=c.next()){var e=r(d.value);d=e.next().value;e=e.next().value;a.Qb=d;a.Ab=e;d=function(f){return function(){f.Ab.Fc();b.h[f.Qb].nc=!0;b.h.every(function(g){return!0===g.nc})&&b.i.resolve()}}(a);
e=Tn(d,Yx(this,a.Ab));this.h[a.Qb]=Object.assign({},a.Ab,{Fc:d,jobId:e})}}
function Zx(a){var b=Array.from(a.h.keys()).sort(function(d,e){return Yx(a,a.h[e])-Yx(a,a.h[d])});
b=r(b);for(var c=b.next();!c.done;c=b.next())c=a.h[c.value],void 0===c.jobId||c.nc||(a.j.Ca(c.jobId),Tn(c.Fc,10))}
Xx.prototype.cancel=function(){for(var a=r(this.h),b=a.next();!b.done;b=a.next())b=b.value,void 0===b.jobId||b.nc||this.j.Ca(b.jobId),b.nc=!0;this.i.resolve()};
function Yx(a,b){var c;return null!=(c=b.priority)?c:a.l}
;function $x(a){this.state=a;this.plugins=[];this.j=void 0}
$x.prototype.install=function(a){this.plugins.push(a);return this};
$x.prototype.uninstall=function(){var a=this;Ka.apply(0,arguments).forEach(function(b){b=a.plugins.indexOf(b);-1<b&&a.plugins.splice(b,1)})};
$x.prototype.transition=function(a,b){var c=this,d=this.transitions.find(function(f){return Array.isArray(f.from)?f.from.find(function(g){return g===c.state&&f.K===a}):f.from===c.state&&f.K===a});
if(d){this.l&&(Zx(this.l),this.l=void 0);this.state=a;d=d.action.bind(this);var e=this.plugins.filter(function(f){return f[a]}).map(function(f){return f[a]});
d(ay(this,e),b)}else throw Error("no transition specified from "+this.state+" to "+a);};
function ay(a,b){return function(){var c=Ka.apply(0,arguments),d=b.filter(function(h){var k,m;return 10===(null!=(m=null!=(k=a.j)?k:h.priority)?m:0)}),e=b.filter(function(h){var k,m;
return 10!==(null!=(m=null!=(k=a.j)?k:h.priority)?m:0)});
Wn();var f={};d=r(d);for(var g=d.next();!g.done;f={Rb:f.Rb},g=d.next())f.Rb=g.value,Un(function(h){return function(){h.Rb.callback.apply(h.Rb,ja(c))}}(f));
e=e.map(function(h){var k,m;return{Fc:function(){h.callback.apply(h,ja(c))},
priority:null!=(m=null!=(k=a.j)?k:h.priority)?m:0}});
e.length&&(a.l=new Xx(e))}}
ea.Object.defineProperties($x.prototype,{currentState:{configurable:!0,enumerable:!0,get:function(){return this.state}}});function by(a){$x.call(this,void 0===a?"document_active":a);var b=this;this.j=10;this.h=new Map;this.transitions=[{from:"document_active",K:"document_disposed_preventable",action:this.H},{from:"document_active",K:"document_disposed",action:this.m},{from:"document_disposed_preventable",K:"document_disposed",action:this.m},{from:"document_disposed_preventable",K:"flush_logs",action:this.s},{from:"document_disposed_preventable",K:"document_active",action:this.i},{from:"document_disposed",K:"flush_logs",
action:this.s},{from:"document_disposed",K:"document_active",action:this.i},{from:"document_disposed",K:"document_disposed",action:function(){}},
{from:"flush_logs",K:"document_active",action:this.i}];window.addEventListener("pagehide",function(c){b.transition("document_disposed",{event:c})});
window.addEventListener("beforeunload",function(c){b.transition("document_disposed_preventable",{event:c})})}
u(by,$x);by.prototype.H=function(a,b){if(!this.h.get("document_disposed_preventable")){a(null==b?void 0:b.event);var c,d;if((null==b?0:null==(c=b.event)?0:c.defaultPrevented)||(null==b?0:null==(d=b.event)?0:d.returnValue)){b.event.returnValue||(b.event.returnValue=!0);b.event.defaultPrevented||b.event.preventDefault();this.h=new Map;this.transition("document_active");return}}this.h.set("document_disposed_preventable",!0);this.h.get("document_disposed")?this.transition("flush_logs"):this.transition("document_disposed")};
by.prototype.m=function(a,b){this.h.get("document_disposed")?this.transition("document_active"):(a(null==b?void 0:b.event),this.h.set("document_disposed",!0),this.transition("flush_logs"))};
by.prototype.s=function(a,b){a(null==b?void 0:b.event);this.transition("document_active")};
by.prototype.i=function(){this.h=new Map};function cy(a){$x.call(this,void 0===a?"document_visibility_unknown":a);var b=this;this.transitions=[{from:"document_visibility_unknown",K:"document_visible",action:this.i},{from:"document_visibility_unknown",K:"document_hidden",action:this.h},{from:"document_visibility_unknown",K:"document_foregrounded",action:this.s},{from:"document_visibility_unknown",K:"document_backgrounded",action:this.m},{from:"document_visible",K:"document_hidden",action:this.h},{from:"document_visible",K:"document_foregrounded",
action:this.s},{from:"document_visible",K:"document_visible",action:this.i},{from:"document_foregrounded",K:"document_visible",action:this.i},{from:"document_foregrounded",K:"document_hidden",action:this.h},{from:"document_foregrounded",K:"document_foregrounded",action:this.s},{from:"document_hidden",K:"document_visible",action:this.i},{from:"document_hidden",K:"document_backgrounded",action:this.m},{from:"document_hidden",K:"document_hidden",action:this.h},{from:"document_backgrounded",K:"document_hidden",
action:this.h},{from:"document_backgrounded",K:"document_backgrounded",action:this.m},{from:"document_backgrounded",K:"document_visible",action:this.i}];document.addEventListener("visibilitychange",function(c){"visible"===document.visibilityState?b.transition("document_visible",{event:c}):b.transition("document_hidden",{event:c})});
P("visibility_lifecycles_dynamic_backgrounding")&&(window.addEventListener("blur",function(c){b.transition("document_backgrounded",{event:c})}),window.addEventListener("focus",function(c){b.transition("document_foregrounded",{event:c})}))}
u(cy,$x);cy.prototype.i=function(a,b){a(null==b?void 0:b.event);P("visibility_lifecycles_dynamic_backgrounding")&&this.transition("document_foregrounded")};
cy.prototype.h=function(a,b){a(null==b?void 0:b.event);P("visibility_lifecycles_dynamic_backgrounding")&&this.transition("document_backgrounded")};
cy.prototype.m=function(a,b){a(null==b?void 0:b.event)};
cy.prototype.s=function(a,b){a(null==b?void 0:b.event)};function dy(){this.j=new by;this.l=new cy}
dy.prototype.install=function(){var a=Ka.apply(0,arguments),b=this;a.forEach(function(c){b.j.install(c)});
a.forEach(function(c){b.l.install(c)})};function ey(){dy.call(this);var a={};this.install((a.document_disposed={callback:this.h},a));a={};this.install((a.flush_logs={callback:this.i},a))}
var fy;u(ey,dy);ey.prototype.i=function(){if(P("web_fp_via_jspb")){var a=new wl,b=tu();b&&E(a,1,b);b=new Yl;Wd(b,wl,380,Zl,a);Mt(b);P("web_fp_via_jspb_and_json")&&io("finalPayload",{csn:tu()})}else io("finalPayload",{csn:tu()})};
ey.prototype.h=function(){du(eu)};function gy(){}
gy.getInstance=function(){var a=B("ytglobal.storage_");a||(a=new gy,A("ytglobal.storage_",a));return a};
gy.prototype.estimate=function(){var a,b,c;return x(function(d){a=navigator;return(null==(b=a.storage)?0:b.estimate)?d.return(a.storage.estimate()):(null==(c=a.webkitTemporaryStorage)?0:c.queryUsageAndQuota)?d.return(hy()):d.return()})};
function hy(){var a=navigator;return new Promise(function(b,c){var d;null!=(d=a.webkitTemporaryStorage)&&d.queryUsageAndQuota?a.webkitTemporaryStorage.queryUsageAndQuota(function(e,f){b({usage:e,quota:f})},function(e){c(e)}):c(Error("webkitTemporaryStorage is not supported."))})}
A("ytglobal.storageClass_",gy);function go(a,b){var c=this;this.handleError=a;this.h=b;this.i=!1;void 0===self.document||self.addEventListener("beforeunload",function(){c.i=!0});
this.j=Math.random()<=sm("ytidb_transaction_ended_event_rate_limit_session",.2)}
go.prototype.logEvent=function(a,b){switch(a){case "IDB_DATA_CORRUPTED":P("idb_data_corrupted_killswitch")||this.h("idbDataCorrupted",b);break;case "IDB_UNEXPECTEDLY_CLOSED":this.h("idbUnexpectedlyClosed",b);break;case "IS_SUPPORTED_COMPLETED":P("idb_is_supported_completed_killswitch")||this.h("idbIsSupportedCompleted",b);break;case "QUOTA_EXCEEDED":iy(this,b);break;case "TRANSACTION_ENDED":this.j&&Math.random()<=sm("ytidb_transaction_ended_event_rate_limit_transaction",.1)&&this.h("idbTransactionEnded",
b);break;case "TRANSACTION_UNEXPECTEDLY_ABORTED":a=Object.assign({},b,{hasWindowUnloaded:this.i}),this.h("idbTransactionAborted",a)}};
function iy(a,b){gy.getInstance().estimate().then(function(c){c=Object.assign({},b,{isSw:void 0===self.document,isIframe:self!==self.top,deviceStorageUsageMbytes:jy(null==c?void 0:c.usage),deviceStorageQuotaMbytes:jy(null==c?void 0:c.quota)});a.h("idbQuotaExceeded",c)})}
function jy(a){return"undefined"===typeof a?"-1":String(Math.ceil(a/1048576))}
;function ky(a,b,c){J.call(this);var d=this;c=c||M("POST_MESSAGE_ORIGIN")||window.document.location.protocol+"//"+window.document.location.hostname;this.l=b||null;this.targetOrigin="*";this.m=c;this.sessionId=null;this.i="widget";this.R=!!a;this.N=function(e){a:if(!("*"!=d.m&&e.origin!=d.m||d.l&&e.source!=d.l||"string"!==typeof e.data)){try{var f=JSON.parse(e.data)}catch(g){break a}if(!(null==f||d.R&&(d.sessionId&&d.sessionId!=f.id||d.i&&d.i!=f.channel))&&f)switch(f.event){case "listening":"null"!=
e.origin&&(d.m=d.targetOrigin=e.origin);d.l=e.source;d.sessionId=f.id;d.j&&(d.j(),d.j=null);break;case "command":d.s&&(!d.v||0<=fb(d.v,f.func))&&d.s(f.func,f.args,e.origin)}}};
this.v=this.j=this.s=null;window.addEventListener("message",this.N)}
u(ky,J);ky.prototype.sendMessage=function(a,b){if(b=b||this.l){this.sessionId&&(a.id=this.sessionId);this.i&&(a.channel=this.i);try{var c=JSON.stringify(a);b.postMessage(c,this.targetOrigin)}catch(d){Cm(d)}}};
ky.prototype.L=function(){window.removeEventListener("message",this.N);J.prototype.L.call(this)};function ly(){this.i=[];this.isReady=!1;this.j={};var a=this.h=new ky(!!M("WIDGET_ID_ENFORCE")),b=this.Le.bind(this);a.s=b;a.v=null;this.h.i="widget";if(a=M("WIDGET_ID"))this.h.sessionId=a}
l=ly.prototype;l.Le=function(a,b,c){"addEventListener"===a&&b?this.Ec(b[0],c):this.Vc(a,b,c)};
l.Vc=function(){};
l.xc=function(a){var b=this;return function(c){return b.sendMessage(a,c)}};
l.Ec=function(a,b){this.j[a]||"onReady"===a||(this.addEventListener(a,this.xc(a,b)),this.j[a]=!0)};
l.addEventListener=function(){};
l.oe=function(){this.isReady=!0;this.sendMessage("initialDelivery",this.Ac());this.sendMessage("onReady");gb(this.i,this.Id,this);this.i=[]};
l.Ac=function(){return null};
function my(a,b){a.sendMessage("infoDelivery",b)}
l.Id=function(a){this.isReady?this.h.sendMessage(a):this.i.push(a)};
l.sendMessage=function(a,b){this.Id({event:a,info:void 0===b?null:b})};
l.dispose=function(){this.h=null};var ny={},oy=(ny["api.invalidparam"]=2,ny.auth=150,ny["drm.auth"]=150,ny["heartbeat.net"]=150,ny["heartbeat.servererror"]=150,ny["heartbeat.stop"]=150,ny["html5.unsupportedads"]=5,ny["fmt.noneavailable"]=5,ny["fmt.decode"]=5,ny["fmt.unplayable"]=5,ny["html5.missingapi"]=5,ny["html5.unsupportedlive"]=5,ny["drm.unavailable"]=5,ny["mrm.blocked"]=151,ny);var py=new Set("endSeconds startSeconds mediaContentUrl suggestedQuality videoId rct rctn".split(" "));function qy(a){return(0===a.search("cue")||0===a.search("load"))&&"loadModule"!==a}
function ry(a,b,c){if("string"===typeof a)return{videoId:a,startSeconds:b,suggestedQuality:c};b={};c=r(py);for(var d=c.next();!d.done;d=c.next())d=d.value,a[d]&&(b[d]=a[d]);return b}
function sy(a,b,c,d){if(Ra(a)&&!Array.isArray(a)){b="playlist list listType index startSeconds suggestedQuality".split(" ");c={};for(d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}b={index:b,startSeconds:c,suggestedQuality:d};"string"===typeof a&&16===a.length?b.list="PL"+a:b.playlist=a;return b}
;function ty(a){ly.call(this);this.listeners=[];this.l=!1;this.api=a;this.addEventListener("onReady",this.onReady.bind(this));this.addEventListener("onVideoProgress",this.Ve.bind(this));this.addEventListener("onVolumeChange",this.We.bind(this));this.addEventListener("onApiChange",this.Qe.bind(this));this.addEventListener("onPlaybackQualityChange",this.Se.bind(this));this.addEventListener("onPlaybackRateChange",this.Te.bind(this));this.addEventListener("onStateChange",this.Ue.bind(this));this.addEventListener("onWebglSettingsChanged",
this.Xe.bind(this))}
u(ty,ly);l=ty.prototype;
l.Vc=function(a,b,c){if(this.api.isExternalMethodAvailable(a,c)){b=b||[];if(0<b.length&&qy(a)){var d=b;if(Ra(d[0])&&!Array.isArray(d[0]))var e=d[0];else switch(e={},a){case "loadVideoById":case "cueVideoById":e=ry(d[0],void 0!==d[1]?Number(d[1]):void 0,d[2]);break;case "loadVideoByUrl":case "cueVideoByUrl":e=d[0];"string"===typeof e&&(e={mediaContentUrl:e,startSeconds:void 0!==d[1]?Number(d[1]):void 0,suggestedQuality:d[2]});b:{if((d=e.mediaContentUrl)&&(d=/\/([ve]|embed)\/([^#?]+)/.exec(d))&&d[2]){d=
d[2];break b}d=null}e.videoId=d;e=ry(e);break;case "loadPlaylist":case "cuePlaylist":e=sy(d[0],d[1],d[2],d[3])}b.length=1;b[0]=e}this.api.handleExternalCall(a,b,c);qy(a)&&my(this,this.Ac())}};
l.Ec=function(a,b){("onReady"===a||"onError"===a&&this.l)&&this.api.logApiCall(a+" invocation",b);this.api.logApiCall(a+" registration",b);ly.prototype.Ec.call(this,a,b)};
l.xc=function(a,b){var c=this,d=ly.prototype.xc.call(this,a,b);return function(e){c.api.logApiCall(a+" invocation",b);d(e)}};
l.onReady=function(){var a=this.oe.bind(this);this.h.j=a;a=this.api.getVideoData();if(!a.isPlayable){this.l=!0;a=a.errorCode;var b=void 0===b?5:b;this.sendMessage("onError",(a?oy[a]||b:b).toString())}};
l.addEventListener=function(a,b){this.listeners.push({eventType:a,listener:b});this.api.addEventListener(a,b)};
l.Ac=function(){if(!this.api)return null;var a=this.api.getApiInterface();lb(a,"getVideoData");for(var b={apiInterface:a},c=0,d=a.length;c<d;c++){var e=a[c];if(0===e.search("get")||0===e.search("is")){var f=0;0===e.search("get")?f=3:0===e.search("is")&&(f=2);f=e.charAt(f).toLowerCase()+e.substr(f+1);try{var g=this.api[e]();b[f]=g}catch(h){}}}b.videoData=this.api.getVideoData();b.currentTimeLastUpdated_=Date.now()/1E3;return b};
l.Ue=function(a){a={playerState:a,currentTime:this.api.getCurrentTime(),duration:this.api.getDuration(),videoData:this.api.getVideoData(),videoStartBytes:0,videoBytesTotal:this.api.getVideoBytesTotal(),videoLoadedFraction:this.api.getVideoLoadedFraction(),playbackQuality:this.api.getPlaybackQuality(),availableQualityLevels:this.api.getAvailableQualityLevels(),currentTimeLastUpdated_:Date.now()/1E3,playbackRate:this.api.getPlaybackRate(),mediaReferenceTime:this.api.getMediaReferenceTime()};this.api.getVideoUrl&&
(a.videoUrl=this.api.getVideoUrl());this.api.getVideoContentRect&&(a.videoContentRect=this.api.getVideoContentRect());this.api.getProgressState&&(a.progressState=this.api.getProgressState());this.api.getPlaylist&&(a.playlist=this.api.getPlaylist());this.api.getPlaylistIndex&&(a.playlistIndex=this.api.getPlaylistIndex());this.api.getStoryboardFormat&&(a.storyboardFormat=this.api.getStoryboardFormat());my(this,a)};
l.Se=function(a){my(this,{playbackQuality:a})};
l.Te=function(a){my(this,{playbackRate:a})};
l.Qe=function(){for(var a=this.api.getOptions(),b={namespaces:a},c=0,d=a.length;c<d;c++){var e=a[c],f=this.api.getOptions(e);b[e]={options:f};for(var g=0,h=f.length;g<h;g++){var k=f[g],m=this.api.getOption(e,k);b[e][k]=m}}this.sendMessage("apiInfoDelivery",b)};
l.We=function(){my(this,{muted:this.api.isMuted(),volume:this.api.getVolume()})};
l.Ve=function(a){a={currentTime:a,videoBytesLoaded:this.api.getVideoBytesLoaded(),videoLoadedFraction:this.api.getVideoLoadedFraction(),currentTimeLastUpdated_:Date.now()/1E3,playbackRate:this.api.getPlaybackRate(),mediaReferenceTime:this.api.getMediaReferenceTime()};this.api.getProgressState&&(a.progressState=this.api.getProgressState());my(this,a)};
l.Xe=function(){var a={sphericalProperties:this.api.getSphericalProperties()};my(this,a)};
l.dispose=function(){ly.prototype.dispose.call(this);for(var a=0;a<this.listeners.length;a++){var b=this.listeners[a];this.api.removeEventListener(b.eventType,b.listener)}this.listeners=[]};function uy(a){J.call(this);this.i={};this.started=!1;this.connection=a;this.connection.subscribe("command",this.Ed,this)}
u(uy,J);l=uy.prototype;l.start=function(){this.started||this.h()||(this.started=!0,this.connection.lb("RECEIVING"))};
l.lb=function(a,b){this.started&&!this.h()&&this.connection.lb(a,b)};
l.Ed=function(a,b,c){if(this.started&&!this.h()){var d=b||{};switch(a){case "addEventListener":"string"===typeof d.event&&this.addListener(d.event);break;case "removeEventListener":"string"===typeof d.event&&this.removeListener(d.event);break;default:this.api.isReady()&&this.api.isExternalMethodAvailable(a,c||null)&&(b=vy(a,b||{}),c=this.api.handleExternalCall(a,b,c||null),(c=wy(a,c))&&this.lb(a,c))}}};
l.addListener=function(a){if(!(a in this.i)){var b=this.Re.bind(this,a);this.i[a]=b;this.addEventListener(a,b)}};
l.Re=function(a,b){this.started&&!this.h()&&this.connection.lb(a,this.zc(a,b))};
l.zc=function(a,b){if(null!=b)return{value:b}};
l.removeListener=function(a){a in this.i&&(this.removeEventListener(a,this.i[a]),delete this.i[a])};
l.L=function(){var a=this.connection;a.h()||Ki(a.i,"command",this.Ed,this);this.connection=null;for(var b in this.i)this.i.hasOwnProperty(b)&&this.removeListener(b);J.prototype.L.call(this)};function xy(a,b){uy.call(this,b);this.api=a;this.start()}
u(xy,uy);xy.prototype.addEventListener=function(a,b){this.api.addEventListener(a,b)};
xy.prototype.removeEventListener=function(a,b){this.api.removeEventListener(a,b)};
function vy(a,b){switch(a){case "loadVideoById":return a=ry(b),[a];case "cueVideoById":return a=ry(b),[a];case "loadVideoByPlayerVars":return[b];case "cueVideoByPlayerVars":return[b];case "loadPlaylist":return a=sy(b),[a];case "cuePlaylist":return a=sy(b),[a];case "seekTo":return[b.seconds,b.allowSeekAhead];case "playVideoAt":return[b.index];case "setVolume":return[b.volume];case "setPlaybackQuality":return[b.suggestedQuality];case "setPlaybackRate":return[b.suggestedRate];case "setLoop":return[b.loopPlaylists];
case "setShuffle":return[b.shufflePlaylist];case "getOptions":return[b.module];case "getOption":return[b.module,b.option];case "setOption":return[b.module,b.option,b.value];case "handleGlobalKeyDown":return[b.keyCode,b.shiftKey,b.ctrlKey,b.altKey,b.metaKey,b.key,b.code]}return[]}
function wy(a,b){switch(a){case "isMuted":return{muted:b};case "getVolume":return{volume:b};case "getPlaybackRate":return{playbackRate:b};case "getAvailablePlaybackRates":return{availablePlaybackRates:b};case "getVideoLoadedFraction":return{videoLoadedFraction:b};case "getPlayerState":return{playerState:b};case "getCurrentTime":return{currentTime:b};case "getPlaybackQuality":return{playbackQuality:b};case "getAvailableQualityLevels":return{availableQualityLevels:b};case "getDuration":return{duration:b};
case "getVideoUrl":return{videoUrl:b};case "getVideoEmbedCode":return{videoEmbedCode:b};case "getPlaylist":return{playlist:b};case "getPlaylistIndex":return{playlistIndex:b};case "getOptions":return{options:b};case "getOption":return{option:b}}}
xy.prototype.zc=function(a,b){switch(a){case "onReady":return;case "onStateChange":return{playerState:b};case "onPlaybackQualityChange":return{playbackQuality:b};case "onPlaybackRateChange":return{playbackRate:b};case "onError":return{errorCode:b}}return uy.prototype.zc.call(this,a,b)};
xy.prototype.L=function(){uy.prototype.L.call(this);delete this.api};function yy(a){a=void 0===a?!1:a;J.call(this);this.i=new Ji(a);ue(this,this.i)}
Za(yy,J);yy.prototype.subscribe=function(a,b,c){return this.h()?0:this.i.subscribe(a,b,c)};
yy.prototype.m=function(a,b){this.h()||this.i.cb.apply(this.i,arguments)};function zy(a,b,c){yy.call(this);this.l=a;this.j=b;this.id=c}
u(zy,yy);zy.prototype.lb=function(a,b){this.h()||this.l.lb(this.j,this.id,a,b)};
zy.prototype.L=function(){this.j=this.l=null;yy.prototype.L.call(this)};function Ay(a,b,c){J.call(this);this.i=a;this.origin=c;this.j=ms(window,"message",this.l.bind(this));this.connection=new zy(this,a,b);ue(this,this.connection)}
u(Ay,J);Ay.prototype.lb=function(a,b,c,d){this.h()||a!==this.i||(a={id:b,command:c},d&&(a.data=d),this.i.postMessage(JSON.stringify(a),this.origin))};
Ay.prototype.l=function(a){if(!this.h()&&a.origin===this.origin){var b=a.data;if("string"===typeof b){try{b=JSON.parse(b)}catch(d){return}if(b.command){var c=this.connection;c.h()||c.m("command",b.command,b.data,a.origin)}}}};
Ay.prototype.L=function(){ns(this.j);this.i=null;J.prototype.L.call(this)};function By(){this.state=1;this.h=null}
l=By.prototype;
l.initialize=function(a,b,c){if(a.program){var d,e=null!=(d=a.interpreterUrl)?d:null;if(a.interpreterSafeScript){d=a.interpreterSafeScript;Db("From proto message. b/166824318");d=d.privateDoNotAccessOrElseSafeScriptWrappedValue||"";var f=Ab();d=f?f.createScript(d):d;d=new Fb(d,Eb)}else d=null!=(f=a.interpreterScript)?f:null;a.interpreterSafeUrl&&(e=a.interpreterSafeUrl,Db("From proto message. b/166824318"),e=Jb(e.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue||"").toString());Cy(this,d,e,
a.program,b,c)}else $t(Error("Cannot initialize botguard without program"))};
function Cy(a,b,c,d,e,f){var g=void 0===g?"trayride":g;c?(a.state=2,Kx(c,function(){window[g]?Dy(a,d,g,e):(a.state=3,Px(c),$t(new Q("Unable to load Botguard","from "+c)))},f)):b?(f=nf("SCRIPT"),b instanceof Fb?(b instanceof Fb&&b.constructor===Fb?b=b.j:(Pa(b),b="type_error:SafeScript"),f.textContent=b,Th(f)):f.textContent=b,f.nonce=hc(),document.head.appendChild(f),document.head.removeChild(f),window[g]?Dy(a,d,g,e):(a.state=4,$t(new Q("Unable to load Botguard from JS")))):$t(new Q("Unable to load VM; no url or JS provided"))}
function Dy(a,b,c,d){a.state=5;try{var e=new Kh({program:b,se:c,Me:P("att_web_record_metrics")});e.Ze.then(function(){a.state=6;d&&d(b)});
a.Qc(e)}catch(f){a.state=7,f instanceof Error&&$t(f)}}
l.invoke=function(a){a=void 0===a?{}:a;return this.Tc()?this.Qd({hd:a}):null};
l.dispose=function(){this.Wc()};
l.Wc=function(){this.Qc(null);this.state=8};
l.Tc=function(){return!!this.h};
l.Qd=function(a){return this.h.Kd(a)};
l.Qc=function(a){se(this.h);this.h=a};function Ey(){var a=B("yt.abuse.playerAttLoader");return a&&["bgvma","bgvmb","bgvmc"].every(function(b){return b in a})?a:null}
;function Fy(){By.apply(this,arguments)}
u(Fy,By);Fy.prototype.Wc=function(){this.state=8};
Fy.prototype.Qc=function(a){var b;null==(b=Ey())||b.bgvma();a?(b={bgvma:a.dispose.bind(a),bgvmb:a.snapshot.bind(a),bgvmc:a.Kd.bind(a)},A("yt.abuse.playerAttLoader",b),A("yt.abuse.playerAttLoaderRun",function(c){return a.snapshot(c)})):(A("yt.abuse.playerAttLoader",null),A("yt.abuse.playerAttLoaderRun",null))};
Fy.prototype.Tc=function(){return!!Ey()};
Fy.prototype.Qd=function(a){return Ey().bgvmc(a)};var Gy=new Fy;function Hy(){return Gy.Tc()}
function Iy(a){a=void 0===a?{}:a;return Gy.invoke(a)}
;function Jy(a){a=a||{};var b={},c={};this.url=a.url||"";this.args=a.args||ub(b);this.assets=a.assets||{};this.attrs=a.attrs||ub(c);this.fallback=a.fallback||null;this.fallbackMessage=a.fallbackMessage||null;this.html5=!!a.html5;this.disable=a.disable||{};this.loaded=!!a.loaded;this.messages=a.messages||{}}
Jy.prototype.clone=function(){var a=new Jy,b;for(b in this)if(this.hasOwnProperty(b)){var c=this[b];"object"==Pa(c)?a[b]=ub(c):a[b]=c}return a};var Ky=/cssbin\/(?:debug-)?([a-zA-Z0-9_-]+?)(?:-2x|-web|-rtl|-vfl|.css)/;function Ly(a){a=a||"";if(window.spf){var b=a.match(Ky);spf.style.load(a,b?b[1]:"",void 0)}else My(a)}
function My(a){var b=Ny(a),c=document.getElementById(b),d=c&&Gx(c,"loaded");d||c&&!d||(c=Oy(a,b,function(){Gx(c,"loaded")||(Ex(c),Bs(b),Sm(Ya(Cs,b),0))}))}
function Oy(a,b,c){var d=document.createElement("link");d.id=b;d.onload=function(){c&&setTimeout(c,0)};
a=pk(a);fc(d,a);(document.getElementsByTagName("head")[0]||document.body).appendChild(d);return d}
function Ny(a){var b=nf("A");ec(b,new Mb(a,Nb));a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"css-"+jc(a)}
;function Py(){J.call(this);this.i=[]}
u(Py,J);Py.prototype.L=function(){for(;this.i.length;){var a=this.i.pop();a.target.removeEventListener(a.name,a.callback,void 0)}J.prototype.L.call(this)};function Qy(){Py.apply(this,arguments)}
u(Qy,Py);function Ry(a,b,c,d,e){J.call(this);var f=this;this.v=b;this.webPlayerContextConfig=d;this.Vb=e;this.Aa=!1;this.api={};this.oa=this.s=null;this.V=new Ji;this.i={};this.aa=this.qa=this.elementId=this.eb=this.config=null;this.Y=!1;this.l=this.N=null;this.Qa={};this.Wb=["onReady"];this.lastError=null;this.Cb=NaN;this.R={};this.Xb=new Qy(this);this.ia=0;this.j=this.m=a;ue(this,this.V);Sy(this);Ty(this);ue(this,this.Xb);c?this.ia=Sm(function(){f.loadNewVideoConfig(c)},0):d&&(Uy(this),Vy(this))}
u(Ry,J);l=Ry.prototype;l.getId=function(){return this.v};
l.loadNewVideoConfig=function(a){if(!this.h()){this.ia&&(window.clearTimeout(this.ia),this.ia=0);var b=a||{};b instanceof Jy||(b=new Jy(b));this.config=b;this.setConfig(a);Vy(this);this.isReady()&&Wy(this)}};
function Uy(a){var b;a.webPlayerContextConfig?b=a.webPlayerContextConfig.rootElementId:b=a.config.attrs.id;a.elementId=b||a.elementId;"video-player"===a.elementId&&(a.elementId=a.v,a.webPlayerContextConfig?a.webPlayerContextConfig.rootElementId=a.v:a.config.attrs.id=a.v);var c;(null==(c=a.j)?void 0:c.id)===a.elementId&&(a.elementId+="-player",a.webPlayerContextConfig?a.webPlayerContextConfig.rootElementId=a.elementId:a.config.attrs.id=a.elementId)}
l.setConfig=function(a){this.eb=a;this.config=Xy(a);Uy(this);if(!this.qa){var b;this.qa=Yy(this,(null==(b=this.config.args)?void 0:b.jsapicallback)||"onYouTubePlayerReady")}this.config.args?this.config.args.jsapicallback=null:this.config.args={jsapicallback:null};var c;if(null==(c=this.config)?0:c.attrs)a=this.config.attrs,(b=a.width)&&this.j&&(this.j.style.width=di(Number(b)||b)),(a=a.height)&&this.j&&(this.j.style.height=di(Number(a)||a))};
function Wy(a){if(a.config&&!0!==a.config.loaded)if(a.config.loaded=!0,!a.config.args||"0"!==a.config.args.autoplay&&0!==a.config.args.autoplay&&!1!==a.config.args.autoplay){var b;a.api.loadVideoByPlayerVars(null!=(b=a.config.args)?b:null)}else a.api.cueVideoByPlayerVars(a.config.args)}
function Zy(a){var b=!0,c=$y(a);c&&a.config&&(a=az(a),b=Gx(c,"version")===a);return b&&!!B("yt.player.Application.create")}
function Vy(a){if(!a.h()&&!a.Y){var b=Zy(a);if(b&&"html5"===($y(a)?"html5":null))a.aa="html5",a.isReady()||bz(a);else if(cz(a),a.aa="html5",b&&a.l&&a.m)a.m.appendChild(a.l),bz(a);else{a.config&&(a.config.loaded=!0);var c=!1;a.N=function(){c=!0;var d=dz(a,"player_bootstrap_method")?B("yt.player.Application.createAlternate")||B("yt.player.Application.create"):B("yt.player.Application.create");var e=a.config?Xy(a.config):void 0;d&&d(a.m,e,a.webPlayerContextConfig,a.Vb);bz(a)};
a.Y=!0;b?a.N():(Kx(az(a),a.N),(b=ez(a))&&Ly(b),fz(a)&&!c&&A("yt.player.Application.create",null))}}}
function $y(a){var b=mf(a.elementId);!b&&a.j&&a.j.querySelector&&(b=a.j.querySelector("#"+a.elementId));return b}
function bz(a){if(!a.h()){var b=$y(a),c=!1;b&&b.getApiInterface&&b.getApiInterface()&&(c=!0);if(c){a.Y=!1;if(!dz(a,"html5_remove_not_servable_check_killswitch")){var d;if((null==b?0:b.isNotServable)&&a.config&&(null==b?0:b.isNotServable(null==(d=a.config.args)?void 0:d.video_id)))return}gz(a)}else a.Cb=Sm(function(){bz(a)},50)}}
function gz(a){Sy(a);a.Aa=!0;var b=$y(a);if(b){a.s=hz(a,b,"addEventListener");a.oa=hz(a,b,"removeEventListener");var c=b.getApiInterface();c=c.concat(b.getInternalApiInterface());for(var d=a.api,e=0;e<c.length;e++){var f=c[e];d[f]||(d[f]=hz(a,b,f))}}for(var g in a.i)a.i.hasOwnProperty(g)&&a.s&&a.s(g,a.i[g]);Wy(a);a.qa&&a.qa(a.api);a.V.cb("onReady",a.api)}
function hz(a,b,c){var d=b[c];return function(){var e=Ka.apply(0,arguments);try{return a.lastError=null,d.apply(b,e)}catch(f){"sendAbandonmentPing"!==c&&(f.params=c,a.lastError=f,$t(f))}}}
function Sy(a){a.Aa=!1;if(a.oa)for(var b in a.i)a.i.hasOwnProperty(b)&&a.oa(b,a.i[b]);for(var c in a.R)a.R.hasOwnProperty(c)&&window.clearTimeout(Number(c));a.R={};a.s=null;a.oa=null;b=a.api;for(var d in b)b.hasOwnProperty(d)&&(b[d]=null);b.addEventListener=function(e,f){a.addEventListener(e,f)};
b.removeEventListener=function(e,f){a.removeEventListener(e,f)};
b.destroy=function(){a.dispose()};
b.getLastError=function(){return a.getLastError()};
b.getPlayerType=function(){return a.getPlayerType()};
b.getCurrentVideoConfig=function(){return a.eb};
b.loadNewVideoConfig=function(e){a.loadNewVideoConfig(e)};
b.isReady=function(){return a.isReady()}}
l.isReady=function(){return this.Aa};
function Ty(a){a.addEventListener("WATCH_LATER_VIDEO_ADDED",function(b){Bs("WATCH_LATER_VIDEO_ADDED",b)});
a.addEventListener("WATCH_LATER_VIDEO_REMOVED",function(b){Bs("WATCH_LATER_VIDEO_REMOVED",b)})}
l.addEventListener=function(a,b){var c=this,d=Yy(this,b);d&&(0<=fb(this.Wb,a)||this.i[a]||(b=iz(this,a),this.s&&this.s(a,b)),this.V.subscribe(a,d),"onReady"===a&&this.isReady()&&Sm(function(){d(c.api)},0))};
l.removeEventListener=function(a,b){this.h()||(b=Yy(this,b))&&Ki(this.V,a,b)};
function Yy(a,b){var c=b;if("string"===typeof b){if(a.Qa[b])return a.Qa[b];c=function(){var d=Ka.apply(0,arguments),e=B(b);if(e)try{e.apply(y,d)}catch(f){Zt(f)}};
a.Qa[b]=c}return c?c:null}
function iz(a,b){var c="ytPlayer"+b+a.v;a.i[b]=c;y[c]=function(d){var e=Sm(function(){if(!a.h()){try{a.V.cb(b,null!=d?d:void 0)}catch(h){$t(new Q("PlayerProxy error when creating global callback",{error:h,event:b,playerId:a.v,data:d}))}var f=a.R,g=String(e);g in f&&delete f[g]}},0);
rb(a.R,String(e))};
return c}
l.getPlayerType=function(){return this.aa||($y(this)?"html5":null)};
l.getLastError=function(){return this.lastError};
function cz(a){a.cancel();Sy(a);a.aa=null;a.config&&(a.config.loaded=!1);var b=$y(a);b&&(Zy(a)||!fz(a)?a.l=b:(b&&b.destroy&&b.destroy(),a.l=null));if(a.m)for(a=a.m;b=a.firstChild;)a.removeChild(b)}
l.cancel=function(){this.N&&Qx(az(this),this.N);window.clearTimeout(this.Cb);this.Y=!1};
l.L=function(){cz(this);if(this.l&&this.config&&this.l.destroy)try{this.l.destroy()}catch(b){Zt(b)}this.Qa=null;for(var a in this.i)this.i.hasOwnProperty(a)&&(y[this.i[a]]=null);this.eb=this.config=this.api=null;delete this.m;delete this.j;J.prototype.L.call(this)};
function fz(a){var b,c;a=null==(b=a.config)?void 0:null==(c=b.args)?void 0:c.fflags;return!!a&&-1!==a.indexOf("player_destroy_old_version=true")}
function az(a){return a.webPlayerContextConfig?a.webPlayerContextConfig.jsUrl:(a=a.config.assets)?a.js:""}
function ez(a){return a.webPlayerContextConfig?a.webPlayerContextConfig.cssUrl:(a=a.config.assets)?a.css:""}
function dz(a,b){if(a.webPlayerContextConfig)var c=a.webPlayerContextConfig.serializedExperimentFlags;else{var d;if(null==(d=a.config)?0:d.args)c=a.config.args.fflags}return"true"===Fm(c||"","&")[b]}
function Xy(a){for(var b={},c=r(Object.keys(a)),d=c.next();!d.done;d=c.next()){d=d.value;var e=a[d];b[d]="object"===typeof e?ub(e):e}return b}
;var jz={},kz="player_uid_"+(1E9*Math.random()>>>0);function lz(a,b){var c="player",d=!1;d=void 0===d?!0:d;c="string"===typeof c?mf(c):c;var e=kz+"_"+Sa(c),f=jz[e];if(f&&d)return mz(a,b)?f.api.loadVideoByPlayerVars(a.args||null):f.loadNewVideoConfig(a),f.api;f=new Ry(c,e,a,b,void 0);jz[e]=f;Bs("player-added",f.api);ve(f,function(){delete jz[f.getId()]});
return f.api}
function mz(a,b){return b&&b.serializedExperimentFlags?b.serializedExperimentFlags.includes("web_player_remove_playerproxy=true"):a&&a.args&&a.args.fflags?a.args.fflags.includes("web_player_remove_playerproxy=true"):!1}
;var nz=null,oz=null,pz=null;function qz(){rz()}
function sz(){rz()}
function rz(){var a=nz.getVideoData(1);a=a.title?a.title+" - YouTube":"YouTube";document.title!==a&&(document.title=a)}
function tz(){nz&&nz.sendAbandonmentPing&&nz.sendAbandonmentPing();M("PL_ATT")&&Gy.dispose();for(var a=mi,b=0,c=Tx.length;b<c;b++)a.Ca(Tx[b]);Tx.length=0;Px("//static.doubleclick.net/instream/ad_status.js");Ux=!1;pm("DCLKSTAT",0);te(pz,oz);nz&&(nz.removeEventListener("onVideoDataChange",qz),nz.destroy())}
;function uz(a,b,c){a="ST-"+jc(a).toString(36);b=b?uc(b):"";c=c||5;Ju()&&Bn(a,b,c)}
;function vz(a,b,c){b=void 0===b?{}:b;c=void 0===c?!1:c;var d=M("EVENT_ID");d&&(b.ei||(b.ei=d));if(b){d=a;var e=void 0===e?!0:e;var f=M("VALID_SESSION_TEMPDATA_DOMAINS",[]),g=pc(window.location.href);g&&f.push(g);g=pc(d);if(0<=fb(f,g)||!g&&0==d.lastIndexOf("/",0))if(P("autoescape_tempdata_url")&&(f=document.createElement("a"),ec(f,d),d=f.href),d&&(d=qc(d),f=d.indexOf("#"),d=0>f?d:d.slice(0,f)))if(e&&!b.csn&&(b.itct||b.ved)&&(b=Object.assign({csn:tu()},b)),h){var h=parseInt(h,10);isFinite(h)&&0<h&&
uz(d,b,h)}else uz(d,b)}if(c)return!1;if((window.ytspf||{}).enabled)spf.navigate(a);else{var k=void 0===k?{}:k;var m=void 0===m?"":m;var p=void 0===p?window:p;c=p.location;a=wc(a,k)+m;var n=void 0===n?Xh:n;a:{n=void 0===n?Xh:n;for(k=0;k<n.length;++k)if(m=n[k],m instanceof Vh&&m.Ae(a)){n=new Mb(a,Nb);break a}n=void 0}n=n||Tb;if(n instanceof Mb)var v=Ob(n);else{b:if(Nh){try{v=new URL(n)}catch(t){v="https:";break b}v=v.protocol}else c:{v=document.createElement("a");try{v.href=n}catch(t){v=void 0;break c}v=
v.protocol;v=":"===v||""===v?"https:":v}v="javascript:"!==v?n:void 0}void 0!==v&&(c.href=v)}return!0}
;A("yt.setConfig",pm);A("yt.config.set",pm);A("yt.setMsg",zu);A("yt.msgs.set",zu);A("yt.logging.errors.log",Zt);
A("writeEmbed",function(){var a=M("PLAYER_CONFIG");if(!a){var b=M("PLAYER_VARS");b&&(a={args:b})}Tu(!0);"gvn"===a.args.ps&&(document.body.style.backgroundColor="transparent");a.attrs||(a.attrs={width:"100%",height:"100%",id:"video-player"});var c=document.referrer;b=M("POST_MESSAGE_ORIGIN");window!==window.top&&c&&c!==document.URL&&(a.args.loaderUrl=c);qw("embed",["ol"]);c=M("WEB_PLAYER_CONTEXT_CONFIGS").WEB_PLAYER_CONTEXT_CONFIG_ID_EMBEDDED_PLAYER;if(!c.serializedForcedExperimentIds){var d=Km(window.location.href);
d.forced_experiments&&(c.serializedForcedExperimentIds=d.forced_experiments)}var e;P("embeds_web_enable_watch_on_autoplay")&&(null==(e=a.args)?0:e.autoplay)&&qw("watch",["pbs","pbu","pbp"]);nz=lz(a,c);nz.addEventListener("onVideoDataChange",qz);nz.addEventListener("onReady",sz);a=M("POST_MESSAGE_ID","player");M("ENABLE_JS_API")?pz=new ty(nz):M("ENABLE_POST_API")&&"string"===typeof a&&"string"===typeof b&&(oz=new Ay(window.parent,a,b),pz=new xy(nz,oz.connection));Vx();P("ytidb_create_logger_embed_killswitch")||
P("embeds_web_disable_nwl")||fo();a={};fy||(fy=new ey);fy.install((a.flush_logs={callback:function(){nt()}},a));
P("embeds_web_disable_nwl")||cs();P("ytidb_clear_embedded_player")&&mi.fa(function(){var f,g;if(!Tw){var h=Ms(),k={Nc:Sw,Od:Rw};h.h.set(k.Nc,k);k={gd:{feedbackEndpoint:dv(Nw),modifyChannelNotificationPreferenceEndpoint:dv(Ow),playlistEditEndpoint:dv(Pw),subscribeEndpoint:dv(Lw),unsubscribeEndpoint:dv(Mw),webPlayerShareEntityServiceEndpoint:dv(Qw)}};var m=$u.getInstance(),p={};m&&(p.client_location=m);void 0===f&&(f=wn());void 0===g&&(g=h.resolve(Sw));yw(k,g,f,p);f={Nc:Ew,Pd:xw.h};h.h.set(f.Nc,f);
Tw=h.resolve(Ew)}Dx()})});
var wz=Am(function(){tw();Uu();if(!P("embeds_web_enable_ve_logging_unification")){kx.h||(kx.h=new kx);var a=kx.h;var b=16623;var c=void 0===c?{}:c;Object.values(Au).includes(b)||($t(new Q("createClientScreen() called with a non-page VE",b)),b=83769);c.isHistoryNavigation||a.h.push({rootVe:b,key:c.key||""});a.s=[];a.H=[];c.kd?ox(a,b,c):px(a,b,c)}}),xz=Am(function(a){a.persisted||(tw(),Uu())}),yz=Am(function(a){P("embeds_web_enable_dispose_player_if_page_not_cached_killswitch")?tz():a.persisted||tz()}),
zz=Am(tz);
window.addEventListener?(window.addEventListener("load",wz),window.addEventListener("pageshow",xz),window.addEventListener("pagehide",yz)):window.attachEvent&&(window.attachEvent("onload",wz),window.attachEvent("onunload",zz));A("yt.abuse.player.botguardInitialized",B("yt.abuse.player.botguardInitialized")||Hy);A("yt.abuse.player.invokeBotguard",B("yt.abuse.player.invokeBotguard")||Iy);A("yt.abuse.dclkstatus.checkDclkStatus",B("yt.abuse.dclkstatus.checkDclkStatus")||Wx);
A("yt.player.exports.navigate",B("yt.player.exports.navigate")||vz);A("yt.util.activity.init",B("yt.util.activity.init")||qs);A("yt.util.activity.getTimeSinceActive",B("yt.util.activity.getTimeSinceActive")||ts);A("yt.util.activity.setTimestamp",B("yt.util.activity.setTimestamp")||rs);}).call(this);
