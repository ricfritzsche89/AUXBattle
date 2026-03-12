function $I(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function HI(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Wy={exports:{}},Hl={},qy={exports:{}},ee={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var No=Symbol.for("react.element"),WI=Symbol.for("react.portal"),qI=Symbol.for("react.fragment"),KI=Symbol.for("react.strict_mode"),GI=Symbol.for("react.profiler"),QI=Symbol.for("react.provider"),YI=Symbol.for("react.context"),XI=Symbol.for("react.forward_ref"),JI=Symbol.for("react.suspense"),ZI=Symbol.for("react.memo"),eT=Symbol.for("react.lazy"),nm=Symbol.iterator;function tT(t){return t===null||typeof t!="object"?null:(t=nm&&t[nm]||t["@@iterator"],typeof t=="function"?t:null)}var Ky={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Gy=Object.assign,Qy={};function ns(t,e,n){this.props=t,this.context=e,this.refs=Qy,this.updater=n||Ky}ns.prototype.isReactComponent={};ns.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};ns.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Yy(){}Yy.prototype=ns.prototype;function hd(t,e,n){this.props=t,this.context=e,this.refs=Qy,this.updater=n||Ky}var dd=hd.prototype=new Yy;dd.constructor=hd;Gy(dd,ns.prototype);dd.isPureReactComponent=!0;var rm=Array.isArray,Xy=Object.prototype.hasOwnProperty,fd={current:null},Jy={key:!0,ref:!0,__self:!0,__source:!0};function Zy(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Xy.call(e,r)&&!Jy.hasOwnProperty(r)&&(i[r]=e[r]);var u=arguments.length-2;if(u===1)i.children=n;else if(1<u){for(var l=Array(u),c=0;c<u;c++)l[c]=arguments[c+2];i.children=l}if(t&&t.defaultProps)for(r in u=t.defaultProps,u)i[r]===void 0&&(i[r]=u[r]);return{$$typeof:No,type:t,key:s,ref:o,props:i,_owner:fd.current}}function nT(t,e){return{$$typeof:No,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function pd(t){return typeof t=="object"&&t!==null&&t.$$typeof===No}function rT(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var im=/\/+/g;function nc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?rT(""+t.key):e.toString(36)}function Oa(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case No:case WI:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+nc(o,0):r,rm(i)?(n="",t!=null&&(n=t.replace(im,"$&/")+"/"),Oa(i,e,n,"",function(c){return c})):i!=null&&(pd(i)&&(i=nT(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(im,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",rm(t))for(var u=0;u<t.length;u++){s=t[u];var l=r+nc(s,u);o+=Oa(s,e,n,l,i)}else if(l=tT(t),typeof l=="function")for(t=l.call(t),u=0;!(s=t.next()).done;)s=s.value,l=r+nc(s,u++),o+=Oa(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function ha(t,e,n){if(t==null)return t;var r=[],i=0;return Oa(t,r,"","",function(s){return e.call(n,s,i++)}),r}function iT(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var ft={current:null},Va={transition:null},sT={ReactCurrentDispatcher:ft,ReactCurrentBatchConfig:Va,ReactCurrentOwner:fd};function ev(){throw Error("act(...) is not supported in production builds of React.")}ee.Children={map:ha,forEach:function(t,e,n){ha(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return ha(t,function(){e++}),e},toArray:function(t){return ha(t,function(e){return e})||[]},only:function(t){if(!pd(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ee.Component=ns;ee.Fragment=qI;ee.Profiler=GI;ee.PureComponent=hd;ee.StrictMode=KI;ee.Suspense=JI;ee.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=sT;ee.act=ev;ee.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Gy({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=fd.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var u=t.type.defaultProps;for(l in e)Xy.call(e,l)&&!Jy.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&u!==void 0?u[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){u=Array(l);for(var c=0;c<l;c++)u[c]=arguments[c+2];r.children=u}return{$$typeof:No,type:t.type,key:i,ref:s,props:r,_owner:o}};ee.createContext=function(t){return t={$$typeof:YI,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:QI,_context:t},t.Consumer=t};ee.createElement=Zy;ee.createFactory=function(t){var e=Zy.bind(null,t);return e.type=t,e};ee.createRef=function(){return{current:null}};ee.forwardRef=function(t){return{$$typeof:XI,render:t}};ee.isValidElement=pd;ee.lazy=function(t){return{$$typeof:eT,_payload:{_status:-1,_result:t},_init:iT}};ee.memo=function(t,e){return{$$typeof:ZI,type:t,compare:e===void 0?null:e}};ee.startTransition=function(t){var e=Va.transition;Va.transition={};try{t()}finally{Va.transition=e}};ee.unstable_act=ev;ee.useCallback=function(t,e){return ft.current.useCallback(t,e)};ee.useContext=function(t){return ft.current.useContext(t)};ee.useDebugValue=function(){};ee.useDeferredValue=function(t){return ft.current.useDeferredValue(t)};ee.useEffect=function(t,e){return ft.current.useEffect(t,e)};ee.useId=function(){return ft.current.useId()};ee.useImperativeHandle=function(t,e,n){return ft.current.useImperativeHandle(t,e,n)};ee.useInsertionEffect=function(t,e){return ft.current.useInsertionEffect(t,e)};ee.useLayoutEffect=function(t,e){return ft.current.useLayoutEffect(t,e)};ee.useMemo=function(t,e){return ft.current.useMemo(t,e)};ee.useReducer=function(t,e,n){return ft.current.useReducer(t,e,n)};ee.useRef=function(t){return ft.current.useRef(t)};ee.useState=function(t){return ft.current.useState(t)};ee.useSyncExternalStore=function(t,e,n){return ft.current.useSyncExternalStore(t,e,n)};ee.useTransition=function(){return ft.current.useTransition()};ee.version="18.3.1";qy.exports=ee;var j=qy.exports;const ke=HI(j),oT=$I({__proto__:null,default:ke},[j]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var aT=j,lT=Symbol.for("react.element"),uT=Symbol.for("react.fragment"),cT=Object.prototype.hasOwnProperty,hT=aT.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,dT={key:!0,ref:!0,__self:!0,__source:!0};function tv(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)cT.call(e,r)&&!dT.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:lT,type:t,key:s,ref:o,props:i,_owner:hT.current}}Hl.Fragment=uT;Hl.jsx=tv;Hl.jsxs=tv;Wy.exports=Hl;var k=Wy.exports,$c={},nv={exports:{}},xt={},rv={exports:{}},iv={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(z,K){var Y=z.length;z.push(K);e:for(;0<Y;){var de=Y-1>>>1,ae=z[de];if(0<i(ae,K))z[de]=K,z[Y]=ae,Y=de;else break e}}function n(z){return z.length===0?null:z[0]}function r(z){if(z.length===0)return null;var K=z[0],Y=z.pop();if(Y!==K){z[0]=Y;e:for(var de=0,ae=z.length,ve=ae>>>1;de<ve;){var jt=2*(de+1)-1,mn=z[jt],gn=jt+1,yn=z[gn];if(0>i(mn,Y))gn<ae&&0>i(yn,mn)?(z[de]=yn,z[gn]=Y,de=gn):(z[de]=mn,z[jt]=Y,de=jt);else if(gn<ae&&0>i(yn,Y))z[de]=yn,z[gn]=Y,de=gn;else break e}}return K}function i(z,K){var Y=z.sortIndex-K.sortIndex;return Y!==0?Y:z.id-K.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,u=o.now();t.unstable_now=function(){return o.now()-u}}var l=[],c=[],d=1,p=null,m=3,w=!1,A=!1,x=!1,P=typeof setTimeout=="function"?setTimeout:null,S=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function E(z){for(var K=n(c);K!==null;){if(K.callback===null)r(c);else if(K.startTime<=z)r(c),K.sortIndex=K.expirationTime,e(l,K);else break;K=n(c)}}function D(z){if(x=!1,E(z),!A)if(n(l)!==null)A=!0,bt(V);else{var K=n(c);K!==null&&Be(D,K.startTime-z)}}function V(z,K){A=!1,x&&(x=!1,S(y),y=-1),w=!0;var Y=m;try{for(E(K),p=n(l);p!==null&&(!(p.expirationTime>K)||z&&!C());){var de=p.callback;if(typeof de=="function"){p.callback=null,m=p.priorityLevel;var ae=de(p.expirationTime<=K);K=t.unstable_now(),typeof ae=="function"?p.callback=ae:p===n(l)&&r(l),E(K)}else r(l);p=n(l)}if(p!==null)var ve=!0;else{var jt=n(c);jt!==null&&Be(D,jt.startTime-K),ve=!1}return ve}finally{p=null,m=Y,w=!1}}var M=!1,T=null,y=-1,v=5,I=-1;function C(){return!(t.unstable_now()-I<v)}function N(){if(T!==null){var z=t.unstable_now();I=z;var K=!0;try{K=T(!0,z)}finally{K?R():(M=!1,T=null)}}else M=!1}var R;if(typeof _=="function")R=function(){_(N)};else if(typeof MessageChannel<"u"){var ye=new MessageChannel,Ce=ye.port2;ye.port1.onmessage=N,R=function(){Ce.postMessage(null)}}else R=function(){P(N,0)};function bt(z){T=z,M||(M=!0,R())}function Be(z,K){y=P(function(){z(t.unstable_now())},K)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(z){z.callback=null},t.unstable_continueExecution=function(){A||w||(A=!0,bt(V))},t.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):v=0<z?Math.floor(1e3/z):5},t.unstable_getCurrentPriorityLevel=function(){return m},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(z){switch(m){case 1:case 2:case 3:var K=3;break;default:K=m}var Y=m;m=K;try{return z()}finally{m=Y}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(z,K){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var Y=m;m=z;try{return K()}finally{m=Y}},t.unstable_scheduleCallback=function(z,K,Y){var de=t.unstable_now();switch(typeof Y=="object"&&Y!==null?(Y=Y.delay,Y=typeof Y=="number"&&0<Y?de+Y:de):Y=de,z){case 1:var ae=-1;break;case 2:ae=250;break;case 5:ae=1073741823;break;case 4:ae=1e4;break;default:ae=5e3}return ae=Y+ae,z={id:d++,callback:K,priorityLevel:z,startTime:Y,expirationTime:ae,sortIndex:-1},Y>de?(z.sortIndex=Y,e(c,z),n(l)===null&&z===n(c)&&(x?(S(y),y=-1):x=!0,Be(D,Y-de))):(z.sortIndex=ae,e(l,z),A||w||(A=!0,bt(V))),z},t.unstable_shouldYield=C,t.unstable_wrapCallback=function(z){var K=m;return function(){var Y=m;m=K;try{return z.apply(this,arguments)}finally{m=Y}}}})(iv);rv.exports=iv;var fT=rv.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pT=j,Pt=fT;function U(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var sv=new Set,no={};function Jr(t,e){Fi(t,e),Fi(t+"Capture",e)}function Fi(t,e){for(no[t]=e,t=0;t<e.length;t++)sv.add(e[t])}var Pn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Hc=Object.prototype.hasOwnProperty,mT=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,sm={},om={};function gT(t){return Hc.call(om,t)?!0:Hc.call(sm,t)?!1:mT.test(t)?om[t]=!0:(sm[t]=!0,!1)}function yT(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function vT(t,e,n,r){if(e===null||typeof e>"u"||yT(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function pt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Qe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Qe[t]=new pt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Qe[e]=new pt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Qe[t]=new pt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Qe[t]=new pt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Qe[t]=new pt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Qe[t]=new pt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Qe[t]=new pt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Qe[t]=new pt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Qe[t]=new pt(t,5,!1,t.toLowerCase(),null,!1,!1)});var md=/[\-:]([a-z])/g;function gd(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(md,gd);Qe[e]=new pt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(md,gd);Qe[e]=new pt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(md,gd);Qe[e]=new pt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Qe[t]=new pt(t,1,!1,t.toLowerCase(),null,!1,!1)});Qe.xlinkHref=new pt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Qe[t]=new pt(t,1,!1,t.toLowerCase(),null,!0,!0)});function yd(t,e,n,r){var i=Qe.hasOwnProperty(e)?Qe[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(vT(e,n,i,r)&&(n=null),r||i===null?gT(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Fn=pT.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,da=Symbol.for("react.element"),pi=Symbol.for("react.portal"),mi=Symbol.for("react.fragment"),vd=Symbol.for("react.strict_mode"),Wc=Symbol.for("react.profiler"),ov=Symbol.for("react.provider"),av=Symbol.for("react.context"),_d=Symbol.for("react.forward_ref"),qc=Symbol.for("react.suspense"),Kc=Symbol.for("react.suspense_list"),wd=Symbol.for("react.memo"),Hn=Symbol.for("react.lazy"),lv=Symbol.for("react.offscreen"),am=Symbol.iterator;function Ts(t){return t===null||typeof t!="object"?null:(t=am&&t[am]||t["@@iterator"],typeof t=="function"?t:null)}var Ee=Object.assign,rc;function bs(t){if(rc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);rc=e&&e[1]||""}return`
`+rc+t}var ic=!1;function sc(t,e){if(!t||ic)return"";ic=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,u=s.length-1;1<=o&&0<=u&&i[o]!==s[u];)u--;for(;1<=o&&0<=u;o--,u--)if(i[o]!==s[u]){if(o!==1||u!==1)do if(o--,u--,0>u||i[o]!==s[u]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=u);break}}}finally{ic=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?bs(t):""}function _T(t){switch(t.tag){case 5:return bs(t.type);case 16:return bs("Lazy");case 13:return bs("Suspense");case 19:return bs("SuspenseList");case 0:case 2:case 15:return t=sc(t.type,!1),t;case 11:return t=sc(t.type.render,!1),t;case 1:return t=sc(t.type,!0),t;default:return""}}function Gc(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case mi:return"Fragment";case pi:return"Portal";case Wc:return"Profiler";case vd:return"StrictMode";case qc:return"Suspense";case Kc:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case av:return(t.displayName||"Context")+".Consumer";case ov:return(t._context.displayName||"Context")+".Provider";case _d:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case wd:return e=t.displayName||null,e!==null?e:Gc(t.type)||"Memo";case Hn:e=t._payload,t=t._init;try{return Gc(t(e))}catch{}}return null}function wT(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Gc(e);case 8:return e===vd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function pr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function uv(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function ET(t){var e=uv(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function fa(t){t._valueTracker||(t._valueTracker=ET(t))}function cv(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=uv(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function tl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Qc(t,e){var n=e.checked;return Ee({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function lm(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=pr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function hv(t,e){e=e.checked,e!=null&&yd(t,"checked",e,!1)}function Yc(t,e){hv(t,e);var n=pr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Xc(t,e.type,n):e.hasOwnProperty("defaultValue")&&Xc(t,e.type,pr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function um(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Xc(t,e,n){(e!=="number"||tl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Ds=Array.isArray;function ki(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+pr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Jc(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(U(91));return Ee({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function cm(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(U(92));if(Ds(n)){if(1<n.length)throw Error(U(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:pr(n)}}function dv(t,e){var n=pr(e.value),r=pr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function hm(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function fv(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Zc(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?fv(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var pa,pv=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(pa=pa||document.createElement("div"),pa.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=pa.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function ro(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Bs={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},IT=["Webkit","ms","Moz","O"];Object.keys(Bs).forEach(function(t){IT.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Bs[e]=Bs[t]})});function mv(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Bs.hasOwnProperty(t)&&Bs[t]?(""+e).trim():e+"px"}function gv(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=mv(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var TT=Ee({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function eh(t,e){if(e){if(TT[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(U(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(U(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(U(61))}if(e.style!=null&&typeof e.style!="object")throw Error(U(62))}}function th(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var nh=null;function Ed(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var rh=null,Pi=null,xi=null;function dm(t){if(t=Oo(t)){if(typeof rh!="function")throw Error(U(280));var e=t.stateNode;e&&(e=Ql(e),rh(t.stateNode,t.type,e))}}function yv(t){Pi?xi?xi.push(t):xi=[t]:Pi=t}function vv(){if(Pi){var t=Pi,e=xi;if(xi=Pi=null,dm(t),e)for(t=0;t<e.length;t++)dm(e[t])}}function _v(t,e){return t(e)}function wv(){}var oc=!1;function Ev(t,e,n){if(oc)return t(e,n);oc=!0;try{return _v(t,e,n)}finally{oc=!1,(Pi!==null||xi!==null)&&(wv(),vv())}}function io(t,e){var n=t.stateNode;if(n===null)return null;var r=Ql(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(U(231,e,typeof n));return n}var ih=!1;if(Pn)try{var Ss={};Object.defineProperty(Ss,"passive",{get:function(){ih=!0}}),window.addEventListener("test",Ss,Ss),window.removeEventListener("test",Ss,Ss)}catch{ih=!1}function ST(t,e,n,r,i,s,o,u,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(d){this.onError(d)}}var zs=!1,nl=null,rl=!1,sh=null,AT={onError:function(t){zs=!0,nl=t}};function RT(t,e,n,r,i,s,o,u,l){zs=!1,nl=null,ST.apply(AT,arguments)}function CT(t,e,n,r,i,s,o,u,l){if(RT.apply(this,arguments),zs){if(zs){var c=nl;zs=!1,nl=null}else throw Error(U(198));rl||(rl=!0,sh=c)}}function Zr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Iv(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function fm(t){if(Zr(t)!==t)throw Error(U(188))}function kT(t){var e=t.alternate;if(!e){if(e=Zr(t),e===null)throw Error(U(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return fm(i),t;if(s===r)return fm(i),e;s=s.sibling}throw Error(U(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,u=i.child;u;){if(u===n){o=!0,n=i,r=s;break}if(u===r){o=!0,r=i,n=s;break}u=u.sibling}if(!o){for(u=s.child;u;){if(u===n){o=!0,n=s,r=i;break}if(u===r){o=!0,r=s,n=i;break}u=u.sibling}if(!o)throw Error(U(189))}}if(n.alternate!==r)throw Error(U(190))}if(n.tag!==3)throw Error(U(188));return n.stateNode.current===n?t:e}function Tv(t){return t=kT(t),t!==null?Sv(t):null}function Sv(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Sv(t);if(e!==null)return e;t=t.sibling}return null}var Av=Pt.unstable_scheduleCallback,pm=Pt.unstable_cancelCallback,PT=Pt.unstable_shouldYield,xT=Pt.unstable_requestPaint,xe=Pt.unstable_now,NT=Pt.unstable_getCurrentPriorityLevel,Id=Pt.unstable_ImmediatePriority,Rv=Pt.unstable_UserBlockingPriority,il=Pt.unstable_NormalPriority,bT=Pt.unstable_LowPriority,Cv=Pt.unstable_IdlePriority,Wl=null,en=null;function DT(t){if(en&&typeof en.onCommitFiberRoot=="function")try{en.onCommitFiberRoot(Wl,t,void 0,(t.current.flags&128)===128)}catch{}}var qt=Math.clz32?Math.clz32:MT,OT=Math.log,VT=Math.LN2;function MT(t){return t>>>=0,t===0?32:31-(OT(t)/VT|0)|0}var ma=64,ga=4194304;function Os(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function sl(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var u=o&~i;u!==0?r=Os(u):(s&=o,s!==0&&(r=Os(s)))}else o=n&~i,o!==0?r=Os(o):s!==0&&(r=Os(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-qt(e),i=1<<n,r|=t[n],e&=~i;return r}function LT(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function FT(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-qt(s),u=1<<o,l=i[o];l===-1?(!(u&n)||u&r)&&(i[o]=LT(u,e)):l<=e&&(t.expiredLanes|=u),s&=~u}}function oh(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function kv(){var t=ma;return ma<<=1,!(ma&4194240)&&(ma=64),t}function ac(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function bo(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-qt(e),t[e]=n}function UT(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-qt(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Td(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-qt(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var le=0;function Pv(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var xv,Sd,Nv,bv,Dv,ah=!1,ya=[],rr=null,ir=null,sr=null,so=new Map,oo=new Map,qn=[],jT="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function mm(t,e){switch(t){case"focusin":case"focusout":rr=null;break;case"dragenter":case"dragleave":ir=null;break;case"mouseover":case"mouseout":sr=null;break;case"pointerover":case"pointerout":so.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":oo.delete(e.pointerId)}}function As(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Oo(e),e!==null&&Sd(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function BT(t,e,n,r,i){switch(e){case"focusin":return rr=As(rr,t,e,n,r,i),!0;case"dragenter":return ir=As(ir,t,e,n,r,i),!0;case"mouseover":return sr=As(sr,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return so.set(s,As(so.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,oo.set(s,As(oo.get(s)||null,t,e,n,r,i)),!0}return!1}function Ov(t){var e=xr(t.target);if(e!==null){var n=Zr(e);if(n!==null){if(e=n.tag,e===13){if(e=Iv(n),e!==null){t.blockedOn=e,Dv(t.priority,function(){Nv(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Ma(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=lh(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);nh=r,n.target.dispatchEvent(r),nh=null}else return e=Oo(n),e!==null&&Sd(e),t.blockedOn=n,!1;e.shift()}return!0}function gm(t,e,n){Ma(t)&&n.delete(e)}function zT(){ah=!1,rr!==null&&Ma(rr)&&(rr=null),ir!==null&&Ma(ir)&&(ir=null),sr!==null&&Ma(sr)&&(sr=null),so.forEach(gm),oo.forEach(gm)}function Rs(t,e){t.blockedOn===e&&(t.blockedOn=null,ah||(ah=!0,Pt.unstable_scheduleCallback(Pt.unstable_NormalPriority,zT)))}function ao(t){function e(i){return Rs(i,t)}if(0<ya.length){Rs(ya[0],t);for(var n=1;n<ya.length;n++){var r=ya[n];r.blockedOn===t&&(r.blockedOn=null)}}for(rr!==null&&Rs(rr,t),ir!==null&&Rs(ir,t),sr!==null&&Rs(sr,t),so.forEach(e),oo.forEach(e),n=0;n<qn.length;n++)r=qn[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<qn.length&&(n=qn[0],n.blockedOn===null);)Ov(n),n.blockedOn===null&&qn.shift()}var Ni=Fn.ReactCurrentBatchConfig,ol=!0;function $T(t,e,n,r){var i=le,s=Ni.transition;Ni.transition=null;try{le=1,Ad(t,e,n,r)}finally{le=i,Ni.transition=s}}function HT(t,e,n,r){var i=le,s=Ni.transition;Ni.transition=null;try{le=4,Ad(t,e,n,r)}finally{le=i,Ni.transition=s}}function Ad(t,e,n,r){if(ol){var i=lh(t,e,n,r);if(i===null)yc(t,e,r,al,n),mm(t,r);else if(BT(i,t,e,n,r))r.stopPropagation();else if(mm(t,r),e&4&&-1<jT.indexOf(t)){for(;i!==null;){var s=Oo(i);if(s!==null&&xv(s),s=lh(t,e,n,r),s===null&&yc(t,e,r,al,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else yc(t,e,r,null,n)}}var al=null;function lh(t,e,n,r){if(al=null,t=Ed(r),t=xr(t),t!==null)if(e=Zr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Iv(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return al=t,null}function Vv(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(NT()){case Id:return 1;case Rv:return 4;case il:case bT:return 16;case Cv:return 536870912;default:return 16}default:return 16}}var Jn=null,Rd=null,La=null;function Mv(){if(La)return La;var t,e=Rd,n=e.length,r,i="value"in Jn?Jn.value:Jn.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return La=i.slice(t,1<r?1-r:void 0)}function Fa(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function va(){return!0}function ym(){return!1}function Nt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var u in t)t.hasOwnProperty(u)&&(n=t[u],this[u]=n?n(s):s[u]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?va:ym,this.isPropagationStopped=ym,this}return Ee(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=va)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=va)},persist:function(){},isPersistent:va}),e}var rs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Cd=Nt(rs),Do=Ee({},rs,{view:0,detail:0}),WT=Nt(Do),lc,uc,Cs,ql=Ee({},Do,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:kd,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Cs&&(Cs&&t.type==="mousemove"?(lc=t.screenX-Cs.screenX,uc=t.screenY-Cs.screenY):uc=lc=0,Cs=t),lc)},movementY:function(t){return"movementY"in t?t.movementY:uc}}),vm=Nt(ql),qT=Ee({},ql,{dataTransfer:0}),KT=Nt(qT),GT=Ee({},Do,{relatedTarget:0}),cc=Nt(GT),QT=Ee({},rs,{animationName:0,elapsedTime:0,pseudoElement:0}),YT=Nt(QT),XT=Ee({},rs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),JT=Nt(XT),ZT=Ee({},rs,{data:0}),_m=Nt(ZT),eS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},tS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},nS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function rS(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=nS[t])?!!e[t]:!1}function kd(){return rS}var iS=Ee({},Do,{key:function(t){if(t.key){var e=eS[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Fa(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?tS[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:kd,charCode:function(t){return t.type==="keypress"?Fa(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Fa(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),sS=Nt(iS),oS=Ee({},ql,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),wm=Nt(oS),aS=Ee({},Do,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:kd}),lS=Nt(aS),uS=Ee({},rs,{propertyName:0,elapsedTime:0,pseudoElement:0}),cS=Nt(uS),hS=Ee({},ql,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),dS=Nt(hS),fS=[9,13,27,32],Pd=Pn&&"CompositionEvent"in window,$s=null;Pn&&"documentMode"in document&&($s=document.documentMode);var pS=Pn&&"TextEvent"in window&&!$s,Lv=Pn&&(!Pd||$s&&8<$s&&11>=$s),Em=" ",Im=!1;function Fv(t,e){switch(t){case"keyup":return fS.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Uv(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var gi=!1;function mS(t,e){switch(t){case"compositionend":return Uv(e);case"keypress":return e.which!==32?null:(Im=!0,Em);case"textInput":return t=e.data,t===Em&&Im?null:t;default:return null}}function gS(t,e){if(gi)return t==="compositionend"||!Pd&&Fv(t,e)?(t=Mv(),La=Rd=Jn=null,gi=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Lv&&e.locale!=="ko"?null:e.data;default:return null}}var yS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Tm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!yS[t.type]:e==="textarea"}function jv(t,e,n,r){yv(r),e=ll(e,"onChange"),0<e.length&&(n=new Cd("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Hs=null,lo=null;function vS(t){Xv(t,0)}function Kl(t){var e=_i(t);if(cv(e))return t}function _S(t,e){if(t==="change")return e}var Bv=!1;if(Pn){var hc;if(Pn){var dc="oninput"in document;if(!dc){var Sm=document.createElement("div");Sm.setAttribute("oninput","return;"),dc=typeof Sm.oninput=="function"}hc=dc}else hc=!1;Bv=hc&&(!document.documentMode||9<document.documentMode)}function Am(){Hs&&(Hs.detachEvent("onpropertychange",zv),lo=Hs=null)}function zv(t){if(t.propertyName==="value"&&Kl(lo)){var e=[];jv(e,lo,t,Ed(t)),Ev(vS,e)}}function wS(t,e,n){t==="focusin"?(Am(),Hs=e,lo=n,Hs.attachEvent("onpropertychange",zv)):t==="focusout"&&Am()}function ES(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Kl(lo)}function IS(t,e){if(t==="click")return Kl(e)}function TS(t,e){if(t==="input"||t==="change")return Kl(e)}function SS(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Gt=typeof Object.is=="function"?Object.is:SS;function uo(t,e){if(Gt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Hc.call(e,i)||!Gt(t[i],e[i]))return!1}return!0}function Rm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Cm(t,e){var n=Rm(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Rm(n)}}function $v(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?$v(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Hv(){for(var t=window,e=tl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=tl(t.document)}return e}function xd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function AS(t){var e=Hv(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&$v(n.ownerDocument.documentElement,n)){if(r!==null&&xd(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Cm(n,s);var o=Cm(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var RS=Pn&&"documentMode"in document&&11>=document.documentMode,yi=null,uh=null,Ws=null,ch=!1;function km(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ch||yi==null||yi!==tl(r)||(r=yi,"selectionStart"in r&&xd(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ws&&uo(Ws,r)||(Ws=r,r=ll(uh,"onSelect"),0<r.length&&(e=new Cd("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=yi)))}function _a(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var vi={animationend:_a("Animation","AnimationEnd"),animationiteration:_a("Animation","AnimationIteration"),animationstart:_a("Animation","AnimationStart"),transitionend:_a("Transition","TransitionEnd")},fc={},Wv={};Pn&&(Wv=document.createElement("div").style,"AnimationEvent"in window||(delete vi.animationend.animation,delete vi.animationiteration.animation,delete vi.animationstart.animation),"TransitionEvent"in window||delete vi.transitionend.transition);function Gl(t){if(fc[t])return fc[t];if(!vi[t])return t;var e=vi[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Wv)return fc[t]=e[n];return t}var qv=Gl("animationend"),Kv=Gl("animationiteration"),Gv=Gl("animationstart"),Qv=Gl("transitionend"),Yv=new Map,Pm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function _r(t,e){Yv.set(t,e),Jr(e,[t])}for(var pc=0;pc<Pm.length;pc++){var mc=Pm[pc],CS=mc.toLowerCase(),kS=mc[0].toUpperCase()+mc.slice(1);_r(CS,"on"+kS)}_r(qv,"onAnimationEnd");_r(Kv,"onAnimationIteration");_r(Gv,"onAnimationStart");_r("dblclick","onDoubleClick");_r("focusin","onFocus");_r("focusout","onBlur");_r(Qv,"onTransitionEnd");Fi("onMouseEnter",["mouseout","mouseover"]);Fi("onMouseLeave",["mouseout","mouseover"]);Fi("onPointerEnter",["pointerout","pointerover"]);Fi("onPointerLeave",["pointerout","pointerover"]);Jr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Jr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Jr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Jr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Jr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Jr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Vs="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),PS=new Set("cancel close invalid load scroll toggle".split(" ").concat(Vs));function xm(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,CT(r,e,void 0,t),t.currentTarget=null}function Xv(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var u=r[o],l=u.instance,c=u.currentTarget;if(u=u.listener,l!==s&&i.isPropagationStopped())break e;xm(i,u,c),s=l}else for(o=0;o<r.length;o++){if(u=r[o],l=u.instance,c=u.currentTarget,u=u.listener,l!==s&&i.isPropagationStopped())break e;xm(i,u,c),s=l}}}if(rl)throw t=sh,rl=!1,sh=null,t}function pe(t,e){var n=e[mh];n===void 0&&(n=e[mh]=new Set);var r=t+"__bubble";n.has(r)||(Jv(e,t,2,!1),n.add(r))}function gc(t,e,n){var r=0;e&&(r|=4),Jv(n,t,r,e)}var wa="_reactListening"+Math.random().toString(36).slice(2);function co(t){if(!t[wa]){t[wa]=!0,sv.forEach(function(n){n!=="selectionchange"&&(PS.has(n)||gc(n,!1,t),gc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[wa]||(e[wa]=!0,gc("selectionchange",!1,e))}}function Jv(t,e,n,r){switch(Vv(e)){case 1:var i=$T;break;case 4:i=HT;break;default:i=Ad}n=i.bind(null,e,n,t),i=void 0,!ih||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function yc(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var u=r.stateNode.containerInfo;if(u===i||u.nodeType===8&&u.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;u!==null;){if(o=xr(u),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}u=u.parentNode}}r=r.return}Ev(function(){var c=s,d=Ed(n),p=[];e:{var m=Yv.get(t);if(m!==void 0){var w=Cd,A=t;switch(t){case"keypress":if(Fa(n)===0)break e;case"keydown":case"keyup":w=sS;break;case"focusin":A="focus",w=cc;break;case"focusout":A="blur",w=cc;break;case"beforeblur":case"afterblur":w=cc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":w=vm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":w=KT;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":w=lS;break;case qv:case Kv:case Gv:w=YT;break;case Qv:w=cS;break;case"scroll":w=WT;break;case"wheel":w=dS;break;case"copy":case"cut":case"paste":w=JT;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":w=wm}var x=(e&4)!==0,P=!x&&t==="scroll",S=x?m!==null?m+"Capture":null:m;x=[];for(var _=c,E;_!==null;){E=_;var D=E.stateNode;if(E.tag===5&&D!==null&&(E=D,S!==null&&(D=io(_,S),D!=null&&x.push(ho(_,D,E)))),P)break;_=_.return}0<x.length&&(m=new w(m,A,null,n,d),p.push({event:m,listeners:x}))}}if(!(e&7)){e:{if(m=t==="mouseover"||t==="pointerover",w=t==="mouseout"||t==="pointerout",m&&n!==nh&&(A=n.relatedTarget||n.fromElement)&&(xr(A)||A[xn]))break e;if((w||m)&&(m=d.window===d?d:(m=d.ownerDocument)?m.defaultView||m.parentWindow:window,w?(A=n.relatedTarget||n.toElement,w=c,A=A?xr(A):null,A!==null&&(P=Zr(A),A!==P||A.tag!==5&&A.tag!==6)&&(A=null)):(w=null,A=c),w!==A)){if(x=vm,D="onMouseLeave",S="onMouseEnter",_="mouse",(t==="pointerout"||t==="pointerover")&&(x=wm,D="onPointerLeave",S="onPointerEnter",_="pointer"),P=w==null?m:_i(w),E=A==null?m:_i(A),m=new x(D,_+"leave",w,n,d),m.target=P,m.relatedTarget=E,D=null,xr(d)===c&&(x=new x(S,_+"enter",A,n,d),x.target=E,x.relatedTarget=P,D=x),P=D,w&&A)t:{for(x=w,S=A,_=0,E=x;E;E=ci(E))_++;for(E=0,D=S;D;D=ci(D))E++;for(;0<_-E;)x=ci(x),_--;for(;0<E-_;)S=ci(S),E--;for(;_--;){if(x===S||S!==null&&x===S.alternate)break t;x=ci(x),S=ci(S)}x=null}else x=null;w!==null&&Nm(p,m,w,x,!1),A!==null&&P!==null&&Nm(p,P,A,x,!0)}}e:{if(m=c?_i(c):window,w=m.nodeName&&m.nodeName.toLowerCase(),w==="select"||w==="input"&&m.type==="file")var V=_S;else if(Tm(m))if(Bv)V=TS;else{V=ES;var M=wS}else(w=m.nodeName)&&w.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(V=IS);if(V&&(V=V(t,c))){jv(p,V,n,d);break e}M&&M(t,m,c),t==="focusout"&&(M=m._wrapperState)&&M.controlled&&m.type==="number"&&Xc(m,"number",m.value)}switch(M=c?_i(c):window,t){case"focusin":(Tm(M)||M.contentEditable==="true")&&(yi=M,uh=c,Ws=null);break;case"focusout":Ws=uh=yi=null;break;case"mousedown":ch=!0;break;case"contextmenu":case"mouseup":case"dragend":ch=!1,km(p,n,d);break;case"selectionchange":if(RS)break;case"keydown":case"keyup":km(p,n,d)}var T;if(Pd)e:{switch(t){case"compositionstart":var y="onCompositionStart";break e;case"compositionend":y="onCompositionEnd";break e;case"compositionupdate":y="onCompositionUpdate";break e}y=void 0}else gi?Fv(t,n)&&(y="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(y="onCompositionStart");y&&(Lv&&n.locale!=="ko"&&(gi||y!=="onCompositionStart"?y==="onCompositionEnd"&&gi&&(T=Mv()):(Jn=d,Rd="value"in Jn?Jn.value:Jn.textContent,gi=!0)),M=ll(c,y),0<M.length&&(y=new _m(y,t,null,n,d),p.push({event:y,listeners:M}),T?y.data=T:(T=Uv(n),T!==null&&(y.data=T)))),(T=pS?mS(t,n):gS(t,n))&&(c=ll(c,"onBeforeInput"),0<c.length&&(d=new _m("onBeforeInput","beforeinput",null,n,d),p.push({event:d,listeners:c}),d.data=T))}Xv(p,e)})}function ho(t,e,n){return{instance:t,listener:e,currentTarget:n}}function ll(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=io(t,n),s!=null&&r.unshift(ho(t,s,i)),s=io(t,e),s!=null&&r.push(ho(t,s,i))),t=t.return}return r}function ci(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Nm(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var u=n,l=u.alternate,c=u.stateNode;if(l!==null&&l===r)break;u.tag===5&&c!==null&&(u=c,i?(l=io(n,s),l!=null&&o.unshift(ho(n,l,u))):i||(l=io(n,s),l!=null&&o.push(ho(n,l,u)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var xS=/\r\n?/g,NS=/\u0000|\uFFFD/g;function bm(t){return(typeof t=="string"?t:""+t).replace(xS,`
`).replace(NS,"")}function Ea(t,e,n){if(e=bm(e),bm(t)!==e&&n)throw Error(U(425))}function ul(){}var hh=null,dh=null;function fh(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var ph=typeof setTimeout=="function"?setTimeout:void 0,bS=typeof clearTimeout=="function"?clearTimeout:void 0,Dm=typeof Promise=="function"?Promise:void 0,DS=typeof queueMicrotask=="function"?queueMicrotask:typeof Dm<"u"?function(t){return Dm.resolve(null).then(t).catch(OS)}:ph;function OS(t){setTimeout(function(){throw t})}function vc(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),ao(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);ao(e)}function or(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Om(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var is=Math.random().toString(36).slice(2),Zt="__reactFiber$"+is,fo="__reactProps$"+is,xn="__reactContainer$"+is,mh="__reactEvents$"+is,VS="__reactListeners$"+is,MS="__reactHandles$"+is;function xr(t){var e=t[Zt];if(e)return e;for(var n=t.parentNode;n;){if(e=n[xn]||n[Zt]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Om(t);t!==null;){if(n=t[Zt])return n;t=Om(t)}return e}t=n,n=t.parentNode}return null}function Oo(t){return t=t[Zt]||t[xn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function _i(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(U(33))}function Ql(t){return t[fo]||null}var gh=[],wi=-1;function wr(t){return{current:t}}function me(t){0>wi||(t.current=gh[wi],gh[wi]=null,wi--)}function he(t,e){wi++,gh[wi]=t.current,t.current=e}var mr={},ot=wr(mr),vt=wr(!1),jr=mr;function Ui(t,e){var n=t.type.contextTypes;if(!n)return mr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function _t(t){return t=t.childContextTypes,t!=null}function cl(){me(vt),me(ot)}function Vm(t,e,n){if(ot.current!==mr)throw Error(U(168));he(ot,e),he(vt,n)}function Zv(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(U(108,wT(t)||"Unknown",i));return Ee({},n,r)}function hl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||mr,jr=ot.current,he(ot,t),he(vt,vt.current),!0}function Mm(t,e,n){var r=t.stateNode;if(!r)throw Error(U(169));n?(t=Zv(t,e,jr),r.__reactInternalMemoizedMergedChildContext=t,me(vt),me(ot),he(ot,t)):me(vt),he(vt,n)}var En=null,Yl=!1,_c=!1;function e_(t){En===null?En=[t]:En.push(t)}function LS(t){Yl=!0,e_(t)}function Er(){if(!_c&&En!==null){_c=!0;var t=0,e=le;try{var n=En;for(le=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}En=null,Yl=!1}catch(i){throw En!==null&&(En=En.slice(t+1)),Av(Id,Er),i}finally{le=e,_c=!1}}return null}var Ei=[],Ii=0,dl=null,fl=0,Dt=[],Ot=0,Br=null,In=1,Tn="";function Cr(t,e){Ei[Ii++]=fl,Ei[Ii++]=dl,dl=t,fl=e}function t_(t,e,n){Dt[Ot++]=In,Dt[Ot++]=Tn,Dt[Ot++]=Br,Br=t;var r=In;t=Tn;var i=32-qt(r)-1;r&=~(1<<i),n+=1;var s=32-qt(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,In=1<<32-qt(e)+i|n<<i|r,Tn=s+t}else In=1<<s|n<<i|r,Tn=t}function Nd(t){t.return!==null&&(Cr(t,1),t_(t,1,0))}function bd(t){for(;t===dl;)dl=Ei[--Ii],Ei[Ii]=null,fl=Ei[--Ii],Ei[Ii]=null;for(;t===Br;)Br=Dt[--Ot],Dt[Ot]=null,Tn=Dt[--Ot],Dt[Ot]=null,In=Dt[--Ot],Dt[Ot]=null}var Ct=null,At=null,ge=!1,Wt=null;function n_(t,e){var n=Vt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Lm(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Ct=t,At=or(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Ct=t,At=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Br!==null?{id:In,overflow:Tn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Vt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Ct=t,At=null,!0):!1;default:return!1}}function yh(t){return(t.mode&1)!==0&&(t.flags&128)===0}function vh(t){if(ge){var e=At;if(e){var n=e;if(!Lm(t,e)){if(yh(t))throw Error(U(418));e=or(n.nextSibling);var r=Ct;e&&Lm(t,e)?n_(r,n):(t.flags=t.flags&-4097|2,ge=!1,Ct=t)}}else{if(yh(t))throw Error(U(418));t.flags=t.flags&-4097|2,ge=!1,Ct=t}}}function Fm(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Ct=t}function Ia(t){if(t!==Ct)return!1;if(!ge)return Fm(t),ge=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!fh(t.type,t.memoizedProps)),e&&(e=At)){if(yh(t))throw r_(),Error(U(418));for(;e;)n_(t,e),e=or(e.nextSibling)}if(Fm(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(U(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){At=or(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}At=null}}else At=Ct?or(t.stateNode.nextSibling):null;return!0}function r_(){for(var t=At;t;)t=or(t.nextSibling)}function ji(){At=Ct=null,ge=!1}function Dd(t){Wt===null?Wt=[t]:Wt.push(t)}var FS=Fn.ReactCurrentBatchConfig;function ks(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(U(309));var r=n.stateNode}if(!r)throw Error(U(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var u=i.refs;o===null?delete u[s]:u[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(U(284));if(!n._owner)throw Error(U(290,t))}return t}function Ta(t,e){throw t=Object.prototype.toString.call(e),Error(U(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Um(t){var e=t._init;return e(t._payload)}function i_(t){function e(S,_){if(t){var E=S.deletions;E===null?(S.deletions=[_],S.flags|=16):E.push(_)}}function n(S,_){if(!t)return null;for(;_!==null;)e(S,_),_=_.sibling;return null}function r(S,_){for(S=new Map;_!==null;)_.key!==null?S.set(_.key,_):S.set(_.index,_),_=_.sibling;return S}function i(S,_){return S=cr(S,_),S.index=0,S.sibling=null,S}function s(S,_,E){return S.index=E,t?(E=S.alternate,E!==null?(E=E.index,E<_?(S.flags|=2,_):E):(S.flags|=2,_)):(S.flags|=1048576,_)}function o(S){return t&&S.alternate===null&&(S.flags|=2),S}function u(S,_,E,D){return _===null||_.tag!==6?(_=Rc(E,S.mode,D),_.return=S,_):(_=i(_,E),_.return=S,_)}function l(S,_,E,D){var V=E.type;return V===mi?d(S,_,E.props.children,D,E.key):_!==null&&(_.elementType===V||typeof V=="object"&&V!==null&&V.$$typeof===Hn&&Um(V)===_.type)?(D=i(_,E.props),D.ref=ks(S,_,E),D.return=S,D):(D=Wa(E.type,E.key,E.props,null,S.mode,D),D.ref=ks(S,_,E),D.return=S,D)}function c(S,_,E,D){return _===null||_.tag!==4||_.stateNode.containerInfo!==E.containerInfo||_.stateNode.implementation!==E.implementation?(_=Cc(E,S.mode,D),_.return=S,_):(_=i(_,E.children||[]),_.return=S,_)}function d(S,_,E,D,V){return _===null||_.tag!==7?(_=Mr(E,S.mode,D,V),_.return=S,_):(_=i(_,E),_.return=S,_)}function p(S,_,E){if(typeof _=="string"&&_!==""||typeof _=="number")return _=Rc(""+_,S.mode,E),_.return=S,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case da:return E=Wa(_.type,_.key,_.props,null,S.mode,E),E.ref=ks(S,null,_),E.return=S,E;case pi:return _=Cc(_,S.mode,E),_.return=S,_;case Hn:var D=_._init;return p(S,D(_._payload),E)}if(Ds(_)||Ts(_))return _=Mr(_,S.mode,E,null),_.return=S,_;Ta(S,_)}return null}function m(S,_,E,D){var V=_!==null?_.key:null;if(typeof E=="string"&&E!==""||typeof E=="number")return V!==null?null:u(S,_,""+E,D);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case da:return E.key===V?l(S,_,E,D):null;case pi:return E.key===V?c(S,_,E,D):null;case Hn:return V=E._init,m(S,_,V(E._payload),D)}if(Ds(E)||Ts(E))return V!==null?null:d(S,_,E,D,null);Ta(S,E)}return null}function w(S,_,E,D,V){if(typeof D=="string"&&D!==""||typeof D=="number")return S=S.get(E)||null,u(_,S,""+D,V);if(typeof D=="object"&&D!==null){switch(D.$$typeof){case da:return S=S.get(D.key===null?E:D.key)||null,l(_,S,D,V);case pi:return S=S.get(D.key===null?E:D.key)||null,c(_,S,D,V);case Hn:var M=D._init;return w(S,_,E,M(D._payload),V)}if(Ds(D)||Ts(D))return S=S.get(E)||null,d(_,S,D,V,null);Ta(_,D)}return null}function A(S,_,E,D){for(var V=null,M=null,T=_,y=_=0,v=null;T!==null&&y<E.length;y++){T.index>y?(v=T,T=null):v=T.sibling;var I=m(S,T,E[y],D);if(I===null){T===null&&(T=v);break}t&&T&&I.alternate===null&&e(S,T),_=s(I,_,y),M===null?V=I:M.sibling=I,M=I,T=v}if(y===E.length)return n(S,T),ge&&Cr(S,y),V;if(T===null){for(;y<E.length;y++)T=p(S,E[y],D),T!==null&&(_=s(T,_,y),M===null?V=T:M.sibling=T,M=T);return ge&&Cr(S,y),V}for(T=r(S,T);y<E.length;y++)v=w(T,S,y,E[y],D),v!==null&&(t&&v.alternate!==null&&T.delete(v.key===null?y:v.key),_=s(v,_,y),M===null?V=v:M.sibling=v,M=v);return t&&T.forEach(function(C){return e(S,C)}),ge&&Cr(S,y),V}function x(S,_,E,D){var V=Ts(E);if(typeof V!="function")throw Error(U(150));if(E=V.call(E),E==null)throw Error(U(151));for(var M=V=null,T=_,y=_=0,v=null,I=E.next();T!==null&&!I.done;y++,I=E.next()){T.index>y?(v=T,T=null):v=T.sibling;var C=m(S,T,I.value,D);if(C===null){T===null&&(T=v);break}t&&T&&C.alternate===null&&e(S,T),_=s(C,_,y),M===null?V=C:M.sibling=C,M=C,T=v}if(I.done)return n(S,T),ge&&Cr(S,y),V;if(T===null){for(;!I.done;y++,I=E.next())I=p(S,I.value,D),I!==null&&(_=s(I,_,y),M===null?V=I:M.sibling=I,M=I);return ge&&Cr(S,y),V}for(T=r(S,T);!I.done;y++,I=E.next())I=w(T,S,y,I.value,D),I!==null&&(t&&I.alternate!==null&&T.delete(I.key===null?y:I.key),_=s(I,_,y),M===null?V=I:M.sibling=I,M=I);return t&&T.forEach(function(N){return e(S,N)}),ge&&Cr(S,y),V}function P(S,_,E,D){if(typeof E=="object"&&E!==null&&E.type===mi&&E.key===null&&(E=E.props.children),typeof E=="object"&&E!==null){switch(E.$$typeof){case da:e:{for(var V=E.key,M=_;M!==null;){if(M.key===V){if(V=E.type,V===mi){if(M.tag===7){n(S,M.sibling),_=i(M,E.props.children),_.return=S,S=_;break e}}else if(M.elementType===V||typeof V=="object"&&V!==null&&V.$$typeof===Hn&&Um(V)===M.type){n(S,M.sibling),_=i(M,E.props),_.ref=ks(S,M,E),_.return=S,S=_;break e}n(S,M);break}else e(S,M);M=M.sibling}E.type===mi?(_=Mr(E.props.children,S.mode,D,E.key),_.return=S,S=_):(D=Wa(E.type,E.key,E.props,null,S.mode,D),D.ref=ks(S,_,E),D.return=S,S=D)}return o(S);case pi:e:{for(M=E.key;_!==null;){if(_.key===M)if(_.tag===4&&_.stateNode.containerInfo===E.containerInfo&&_.stateNode.implementation===E.implementation){n(S,_.sibling),_=i(_,E.children||[]),_.return=S,S=_;break e}else{n(S,_);break}else e(S,_);_=_.sibling}_=Cc(E,S.mode,D),_.return=S,S=_}return o(S);case Hn:return M=E._init,P(S,_,M(E._payload),D)}if(Ds(E))return A(S,_,E,D);if(Ts(E))return x(S,_,E,D);Ta(S,E)}return typeof E=="string"&&E!==""||typeof E=="number"?(E=""+E,_!==null&&_.tag===6?(n(S,_.sibling),_=i(_,E),_.return=S,S=_):(n(S,_),_=Rc(E,S.mode,D),_.return=S,S=_),o(S)):n(S,_)}return P}var Bi=i_(!0),s_=i_(!1),pl=wr(null),ml=null,Ti=null,Od=null;function Vd(){Od=Ti=ml=null}function Md(t){var e=pl.current;me(pl),t._currentValue=e}function _h(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function bi(t,e){ml=t,Od=Ti=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(yt=!0),t.firstContext=null)}function Ft(t){var e=t._currentValue;if(Od!==t)if(t={context:t,memoizedValue:e,next:null},Ti===null){if(ml===null)throw Error(U(308));Ti=t,ml.dependencies={lanes:0,firstContext:t}}else Ti=Ti.next=t;return e}var Nr=null;function Ld(t){Nr===null?Nr=[t]:Nr.push(t)}function o_(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Ld(e)):(n.next=i.next,i.next=n),e.interleaved=n,Nn(t,r)}function Nn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Wn=!1;function Fd(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function a_(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Cn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function ar(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,ie&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Nn(t,n)}return i=r.interleaved,i===null?(e.next=e,Ld(r)):(e.next=i.next,i.next=e),r.interleaved=e,Nn(t,n)}function Ua(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Td(t,n)}}function jm(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function gl(t,e,n,r){var i=t.updateQueue;Wn=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,u=i.shared.pending;if(u!==null){i.shared.pending=null;var l=u,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var d=t.alternate;d!==null&&(d=d.updateQueue,u=d.lastBaseUpdate,u!==o&&(u===null?d.firstBaseUpdate=c:u.next=c,d.lastBaseUpdate=l))}if(s!==null){var p=i.baseState;o=0,d=c=l=null,u=s;do{var m=u.lane,w=u.eventTime;if((r&m)===m){d!==null&&(d=d.next={eventTime:w,lane:0,tag:u.tag,payload:u.payload,callback:u.callback,next:null});e:{var A=t,x=u;switch(m=e,w=n,x.tag){case 1:if(A=x.payload,typeof A=="function"){p=A.call(w,p,m);break e}p=A;break e;case 3:A.flags=A.flags&-65537|128;case 0:if(A=x.payload,m=typeof A=="function"?A.call(w,p,m):A,m==null)break e;p=Ee({},p,m);break e;case 2:Wn=!0}}u.callback!==null&&u.lane!==0&&(t.flags|=64,m=i.effects,m===null?i.effects=[u]:m.push(u))}else w={eventTime:w,lane:m,tag:u.tag,payload:u.payload,callback:u.callback,next:null},d===null?(c=d=w,l=p):d=d.next=w,o|=m;if(u=u.next,u===null){if(u=i.shared.pending,u===null)break;m=u,u=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(!0);if(d===null&&(l=p),i.baseState=l,i.firstBaseUpdate=c,i.lastBaseUpdate=d,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);$r|=o,t.lanes=o,t.memoizedState=p}}function Bm(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(U(191,i));i.call(r)}}}var Vo={},tn=wr(Vo),po=wr(Vo),mo=wr(Vo);function br(t){if(t===Vo)throw Error(U(174));return t}function Ud(t,e){switch(he(mo,e),he(po,t),he(tn,Vo),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Zc(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Zc(e,t)}me(tn),he(tn,e)}function zi(){me(tn),me(po),me(mo)}function l_(t){br(mo.current);var e=br(tn.current),n=Zc(e,t.type);e!==n&&(he(po,t),he(tn,n))}function jd(t){po.current===t&&(me(tn),me(po))}var _e=wr(0);function yl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var wc=[];function Bd(){for(var t=0;t<wc.length;t++)wc[t]._workInProgressVersionPrimary=null;wc.length=0}var ja=Fn.ReactCurrentDispatcher,Ec=Fn.ReactCurrentBatchConfig,zr=0,we=null,De=null,Ue=null,vl=!1,qs=!1,go=0,US=0;function et(){throw Error(U(321))}function zd(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Gt(t[n],e[n]))return!1;return!0}function $d(t,e,n,r,i,s){if(zr=s,we=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,ja.current=t===null||t.memoizedState===null?$S:HS,t=n(r,i),qs){s=0;do{if(qs=!1,go=0,25<=s)throw Error(U(301));s+=1,Ue=De=null,e.updateQueue=null,ja.current=WS,t=n(r,i)}while(qs)}if(ja.current=_l,e=De!==null&&De.next!==null,zr=0,Ue=De=we=null,vl=!1,e)throw Error(U(300));return t}function Hd(){var t=go!==0;return go=0,t}function Jt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ue===null?we.memoizedState=Ue=t:Ue=Ue.next=t,Ue}function Ut(){if(De===null){var t=we.alternate;t=t!==null?t.memoizedState:null}else t=De.next;var e=Ue===null?we.memoizedState:Ue.next;if(e!==null)Ue=e,De=t;else{if(t===null)throw Error(U(310));De=t,t={memoizedState:De.memoizedState,baseState:De.baseState,baseQueue:De.baseQueue,queue:De.queue,next:null},Ue===null?we.memoizedState=Ue=t:Ue=Ue.next=t}return Ue}function yo(t,e){return typeof e=="function"?e(t):e}function Ic(t){var e=Ut(),n=e.queue;if(n===null)throw Error(U(311));n.lastRenderedReducer=t;var r=De,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var u=o=null,l=null,c=s;do{var d=c.lane;if((zr&d)===d)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var p={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(u=l=p,o=r):l=l.next=p,we.lanes|=d,$r|=d}c=c.next}while(c!==null&&c!==s);l===null?o=r:l.next=u,Gt(r,e.memoizedState)||(yt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,we.lanes|=s,$r|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Tc(t){var e=Ut(),n=e.queue;if(n===null)throw Error(U(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);Gt(s,e.memoizedState)||(yt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function u_(){}function c_(t,e){var n=we,r=Ut(),i=e(),s=!Gt(r.memoizedState,i);if(s&&(r.memoizedState=i,yt=!0),r=r.queue,Wd(f_.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Ue!==null&&Ue.memoizedState.tag&1){if(n.flags|=2048,vo(9,d_.bind(null,n,r,i,e),void 0,null),je===null)throw Error(U(349));zr&30||h_(n,e,i)}return i}function h_(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=we.updateQueue,e===null?(e={lastEffect:null,stores:null},we.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function d_(t,e,n,r){e.value=n,e.getSnapshot=r,p_(e)&&m_(t)}function f_(t,e,n){return n(function(){p_(e)&&m_(t)})}function p_(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Gt(t,n)}catch{return!0}}function m_(t){var e=Nn(t,1);e!==null&&Kt(e,t,1,-1)}function zm(t){var e=Jt();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:yo,lastRenderedState:t},e.queue=t,t=t.dispatch=zS.bind(null,we,t),[e.memoizedState,t]}function vo(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=we.updateQueue,e===null?(e={lastEffect:null,stores:null},we.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function g_(){return Ut().memoizedState}function Ba(t,e,n,r){var i=Jt();we.flags|=t,i.memoizedState=vo(1|e,n,void 0,r===void 0?null:r)}function Xl(t,e,n,r){var i=Ut();r=r===void 0?null:r;var s=void 0;if(De!==null){var o=De.memoizedState;if(s=o.destroy,r!==null&&zd(r,o.deps)){i.memoizedState=vo(e,n,s,r);return}}we.flags|=t,i.memoizedState=vo(1|e,n,s,r)}function $m(t,e){return Ba(8390656,8,t,e)}function Wd(t,e){return Xl(2048,8,t,e)}function y_(t,e){return Xl(4,2,t,e)}function v_(t,e){return Xl(4,4,t,e)}function __(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function w_(t,e,n){return n=n!=null?n.concat([t]):null,Xl(4,4,__.bind(null,e,t),n)}function qd(){}function E_(t,e){var n=Ut();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&zd(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function I_(t,e){var n=Ut();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&zd(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function T_(t,e,n){return zr&21?(Gt(n,e)||(n=kv(),we.lanes|=n,$r|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,yt=!0),t.memoizedState=n)}function jS(t,e){var n=le;le=n!==0&&4>n?n:4,t(!0);var r=Ec.transition;Ec.transition={};try{t(!1),e()}finally{le=n,Ec.transition=r}}function S_(){return Ut().memoizedState}function BS(t,e,n){var r=ur(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},A_(t))R_(e,n);else if(n=o_(t,e,n,r),n!==null){var i=dt();Kt(n,t,r,i),C_(n,e,r)}}function zS(t,e,n){var r=ur(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(A_(t))R_(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,u=s(o,n);if(i.hasEagerState=!0,i.eagerState=u,Gt(u,o)){var l=e.interleaved;l===null?(i.next=i,Ld(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=o_(t,e,i,r),n!==null&&(i=dt(),Kt(n,t,r,i),C_(n,e,r))}}function A_(t){var e=t.alternate;return t===we||e!==null&&e===we}function R_(t,e){qs=vl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function C_(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Td(t,n)}}var _l={readContext:Ft,useCallback:et,useContext:et,useEffect:et,useImperativeHandle:et,useInsertionEffect:et,useLayoutEffect:et,useMemo:et,useReducer:et,useRef:et,useState:et,useDebugValue:et,useDeferredValue:et,useTransition:et,useMutableSource:et,useSyncExternalStore:et,useId:et,unstable_isNewReconciler:!1},$S={readContext:Ft,useCallback:function(t,e){return Jt().memoizedState=[t,e===void 0?null:e],t},useContext:Ft,useEffect:$m,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Ba(4194308,4,__.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Ba(4194308,4,t,e)},useInsertionEffect:function(t,e){return Ba(4,2,t,e)},useMemo:function(t,e){var n=Jt();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Jt();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=BS.bind(null,we,t),[r.memoizedState,t]},useRef:function(t){var e=Jt();return t={current:t},e.memoizedState=t},useState:zm,useDebugValue:qd,useDeferredValue:function(t){return Jt().memoizedState=t},useTransition:function(){var t=zm(!1),e=t[0];return t=jS.bind(null,t[1]),Jt().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=we,i=Jt();if(ge){if(n===void 0)throw Error(U(407));n=n()}else{if(n=e(),je===null)throw Error(U(349));zr&30||h_(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,$m(f_.bind(null,r,s,t),[t]),r.flags|=2048,vo(9,d_.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=Jt(),e=je.identifierPrefix;if(ge){var n=Tn,r=In;n=(r&~(1<<32-qt(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=go++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=US++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},HS={readContext:Ft,useCallback:E_,useContext:Ft,useEffect:Wd,useImperativeHandle:w_,useInsertionEffect:y_,useLayoutEffect:v_,useMemo:I_,useReducer:Ic,useRef:g_,useState:function(){return Ic(yo)},useDebugValue:qd,useDeferredValue:function(t){var e=Ut();return T_(e,De.memoizedState,t)},useTransition:function(){var t=Ic(yo)[0],e=Ut().memoizedState;return[t,e]},useMutableSource:u_,useSyncExternalStore:c_,useId:S_,unstable_isNewReconciler:!1},WS={readContext:Ft,useCallback:E_,useContext:Ft,useEffect:Wd,useImperativeHandle:w_,useInsertionEffect:y_,useLayoutEffect:v_,useMemo:I_,useReducer:Tc,useRef:g_,useState:function(){return Tc(yo)},useDebugValue:qd,useDeferredValue:function(t){var e=Ut();return De===null?e.memoizedState=t:T_(e,De.memoizedState,t)},useTransition:function(){var t=Tc(yo)[0],e=Ut().memoizedState;return[t,e]},useMutableSource:u_,useSyncExternalStore:c_,useId:S_,unstable_isNewReconciler:!1};function $t(t,e){if(t&&t.defaultProps){e=Ee({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function wh(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Ee({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Jl={isMounted:function(t){return(t=t._reactInternals)?Zr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=dt(),i=ur(t),s=Cn(r,i);s.payload=e,n!=null&&(s.callback=n),e=ar(t,s,i),e!==null&&(Kt(e,t,i,r),Ua(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=dt(),i=ur(t),s=Cn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=ar(t,s,i),e!==null&&(Kt(e,t,i,r),Ua(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=dt(),r=ur(t),i=Cn(n,r);i.tag=2,e!=null&&(i.callback=e),e=ar(t,i,r),e!==null&&(Kt(e,t,r,n),Ua(e,t,r))}};function Hm(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!uo(n,r)||!uo(i,s):!0}function k_(t,e,n){var r=!1,i=mr,s=e.contextType;return typeof s=="object"&&s!==null?s=Ft(s):(i=_t(e)?jr:ot.current,r=e.contextTypes,s=(r=r!=null)?Ui(t,i):mr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Jl,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Wm(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Jl.enqueueReplaceState(e,e.state,null)}function Eh(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},Fd(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Ft(s):(s=_t(e)?jr:ot.current,i.context=Ui(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(wh(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Jl.enqueueReplaceState(i,i.state,null),gl(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function $i(t,e){try{var n="",r=e;do n+=_T(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Sc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Ih(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var qS=typeof WeakMap=="function"?WeakMap:Map;function P_(t,e,n){n=Cn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){El||(El=!0,bh=r),Ih(t,e)},n}function x_(t,e,n){n=Cn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Ih(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Ih(t,e),typeof r!="function"&&(lr===null?lr=new Set([this]):lr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function qm(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new qS;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=o1.bind(null,t,e,n),e.then(t,t))}function Km(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Gm(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Cn(-1,1),e.tag=2,ar(n,e,1))),n.lanes|=1),t)}var KS=Fn.ReactCurrentOwner,yt=!1;function ht(t,e,n,r){e.child=t===null?s_(e,null,n,r):Bi(e,t.child,n,r)}function Qm(t,e,n,r,i){n=n.render;var s=e.ref;return bi(e,i),r=$d(t,e,n,r,s,i),n=Hd(),t!==null&&!yt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,bn(t,e,i)):(ge&&n&&Nd(e),e.flags|=1,ht(t,e,r,i),e.child)}function Ym(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!ef(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,N_(t,e,s,r,i)):(t=Wa(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:uo,n(o,r)&&t.ref===e.ref)return bn(t,e,i)}return e.flags|=1,t=cr(s,r),t.ref=e.ref,t.return=e,e.child=t}function N_(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(uo(s,r)&&t.ref===e.ref)if(yt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(yt=!0);else return e.lanes=t.lanes,bn(t,e,i)}return Th(t,e,n,r,i)}function b_(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},he(Ai,St),St|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,he(Ai,St),St|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,he(Ai,St),St|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,he(Ai,St),St|=r;return ht(t,e,i,n),e.child}function D_(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Th(t,e,n,r,i){var s=_t(n)?jr:ot.current;return s=Ui(e,s),bi(e,i),n=$d(t,e,n,r,s,i),r=Hd(),t!==null&&!yt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,bn(t,e,i)):(ge&&r&&Nd(e),e.flags|=1,ht(t,e,n,i),e.child)}function Xm(t,e,n,r,i){if(_t(n)){var s=!0;hl(e)}else s=!1;if(bi(e,i),e.stateNode===null)za(t,e),k_(e,n,r),Eh(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,u=e.memoizedProps;o.props=u;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Ft(c):(c=_t(n)?jr:ot.current,c=Ui(e,c));var d=n.getDerivedStateFromProps,p=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";p||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(u!==r||l!==c)&&Wm(e,o,r,c),Wn=!1;var m=e.memoizedState;o.state=m,gl(e,r,o,i),l=e.memoizedState,u!==r||m!==l||vt.current||Wn?(typeof d=="function"&&(wh(e,n,d,r),l=e.memoizedState),(u=Wn||Hm(e,n,u,r,m,l,c))?(p||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=c,r=u):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,a_(t,e),u=e.memoizedProps,c=e.type===e.elementType?u:$t(e.type,u),o.props=c,p=e.pendingProps,m=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Ft(l):(l=_t(n)?jr:ot.current,l=Ui(e,l));var w=n.getDerivedStateFromProps;(d=typeof w=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(u!==p||m!==l)&&Wm(e,o,r,l),Wn=!1,m=e.memoizedState,o.state=m,gl(e,r,o,i);var A=e.memoizedState;u!==p||m!==A||vt.current||Wn?(typeof w=="function"&&(wh(e,n,w,r),A=e.memoizedState),(c=Wn||Hm(e,n,c,r,m,A,l)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,A,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,A,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||u===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||u===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=A),o.props=r,o.state=A,o.context=l,r=c):(typeof o.componentDidUpdate!="function"||u===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||u===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),r=!1)}return Sh(t,e,n,r,s,i)}function Sh(t,e,n,r,i,s){D_(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Mm(e,n,!1),bn(t,e,s);r=e.stateNode,KS.current=e;var u=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Bi(e,t.child,null,s),e.child=Bi(e,null,u,s)):ht(t,e,u,s),e.memoizedState=r.state,i&&Mm(e,n,!0),e.child}function O_(t){var e=t.stateNode;e.pendingContext?Vm(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Vm(t,e.context,!1),Ud(t,e.containerInfo)}function Jm(t,e,n,r,i){return ji(),Dd(i),e.flags|=256,ht(t,e,n,r),e.child}var Ah={dehydrated:null,treeContext:null,retryLane:0};function Rh(t){return{baseLanes:t,cachePool:null,transitions:null}}function V_(t,e,n){var r=e.pendingProps,i=_e.current,s=!1,o=(e.flags&128)!==0,u;if((u=o)||(u=t!==null&&t.memoizedState===null?!1:(i&2)!==0),u?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),he(_e,i&1),t===null)return vh(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=tu(o,r,0,null),t=Mr(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Rh(n),e.memoizedState=Ah,t):Kd(e,o));if(i=t.memoizedState,i!==null&&(u=i.dehydrated,u!==null))return GS(t,e,o,r,u,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,u=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=cr(i,l),r.subtreeFlags=i.subtreeFlags&14680064),u!==null?s=cr(u,s):(s=Mr(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Rh(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Ah,r}return s=t.child,t=s.sibling,r=cr(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Kd(t,e){return e=tu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Sa(t,e,n,r){return r!==null&&Dd(r),Bi(e,t.child,null,n),t=Kd(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function GS(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Sc(Error(U(422))),Sa(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=tu({mode:"visible",children:r.children},i,0,null),s=Mr(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Bi(e,t.child,null,o),e.child.memoizedState=Rh(o),e.memoizedState=Ah,s);if(!(e.mode&1))return Sa(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var u=r.dgst;return r=u,s=Error(U(419)),r=Sc(s,r,void 0),Sa(t,e,o,r)}if(u=(o&t.childLanes)!==0,yt||u){if(r=je,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Nn(t,i),Kt(r,t,i,-1))}return Zd(),r=Sc(Error(U(421))),Sa(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=a1.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,At=or(i.nextSibling),Ct=e,ge=!0,Wt=null,t!==null&&(Dt[Ot++]=In,Dt[Ot++]=Tn,Dt[Ot++]=Br,In=t.id,Tn=t.overflow,Br=e),e=Kd(e,r.children),e.flags|=4096,e)}function Zm(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),_h(t.return,e,n)}function Ac(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function M_(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(ht(t,e,r.children,n),r=_e.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Zm(t,n,e);else if(t.tag===19)Zm(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(he(_e,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&yl(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Ac(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&yl(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Ac(e,!0,n,null,s);break;case"together":Ac(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function za(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function bn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),$r|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(U(153));if(e.child!==null){for(t=e.child,n=cr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=cr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function QS(t,e,n){switch(e.tag){case 3:O_(e),ji();break;case 5:l_(e);break;case 1:_t(e.type)&&hl(e);break;case 4:Ud(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;he(pl,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(he(_e,_e.current&1),e.flags|=128,null):n&e.child.childLanes?V_(t,e,n):(he(_e,_e.current&1),t=bn(t,e,n),t!==null?t.sibling:null);he(_e,_e.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return M_(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),he(_e,_e.current),r)break;return null;case 22:case 23:return e.lanes=0,b_(t,e,n)}return bn(t,e,n)}var L_,Ch,F_,U_;L_=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Ch=function(){};F_=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,br(tn.current);var s=null;switch(n){case"input":i=Qc(t,i),r=Qc(t,r),s=[];break;case"select":i=Ee({},i,{value:void 0}),r=Ee({},r,{value:void 0}),s=[];break;case"textarea":i=Jc(t,i),r=Jc(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=ul)}eh(n,r);var o;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var u=i[c];for(o in u)u.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(no.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in r){var l=r[c];if(u=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&l!==u&&(l!=null||u!=null))if(c==="style")if(u){for(o in u)!u.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&u[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,u=u?u.__html:void 0,l!=null&&u!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(no.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&pe("scroll",t),s||u===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};U_=function(t,e,n,r){n!==r&&(e.flags|=4)};function Ps(t,e){if(!ge)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function tt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function YS(t,e,n){var r=e.pendingProps;switch(bd(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return tt(e),null;case 1:return _t(e.type)&&cl(),tt(e),null;case 3:return r=e.stateNode,zi(),me(vt),me(ot),Bd(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Ia(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Wt!==null&&(Vh(Wt),Wt=null))),Ch(t,e),tt(e),null;case 5:jd(e);var i=br(mo.current);if(n=e.type,t!==null&&e.stateNode!=null)F_(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(U(166));return tt(e),null}if(t=br(tn.current),Ia(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Zt]=e,r[fo]=s,t=(e.mode&1)!==0,n){case"dialog":pe("cancel",r),pe("close",r);break;case"iframe":case"object":case"embed":pe("load",r);break;case"video":case"audio":for(i=0;i<Vs.length;i++)pe(Vs[i],r);break;case"source":pe("error",r);break;case"img":case"image":case"link":pe("error",r),pe("load",r);break;case"details":pe("toggle",r);break;case"input":lm(r,s),pe("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},pe("invalid",r);break;case"textarea":cm(r,s),pe("invalid",r)}eh(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var u=s[o];o==="children"?typeof u=="string"?r.textContent!==u&&(s.suppressHydrationWarning!==!0&&Ea(r.textContent,u,t),i=["children",u]):typeof u=="number"&&r.textContent!==""+u&&(s.suppressHydrationWarning!==!0&&Ea(r.textContent,u,t),i=["children",""+u]):no.hasOwnProperty(o)&&u!=null&&o==="onScroll"&&pe("scroll",r)}switch(n){case"input":fa(r),um(r,s,!0);break;case"textarea":fa(r),hm(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=ul)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=fv(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Zt]=e,t[fo]=r,L_(t,e,!1,!1),e.stateNode=t;e:{switch(o=th(n,r),n){case"dialog":pe("cancel",t),pe("close",t),i=r;break;case"iframe":case"object":case"embed":pe("load",t),i=r;break;case"video":case"audio":for(i=0;i<Vs.length;i++)pe(Vs[i],t);i=r;break;case"source":pe("error",t),i=r;break;case"img":case"image":case"link":pe("error",t),pe("load",t),i=r;break;case"details":pe("toggle",t),i=r;break;case"input":lm(t,r),i=Qc(t,r),pe("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Ee({},r,{value:void 0}),pe("invalid",t);break;case"textarea":cm(t,r),i=Jc(t,r),pe("invalid",t);break;default:i=r}eh(n,i),u=i;for(s in u)if(u.hasOwnProperty(s)){var l=u[s];s==="style"?gv(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&pv(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&ro(t,l):typeof l=="number"&&ro(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(no.hasOwnProperty(s)?l!=null&&s==="onScroll"&&pe("scroll",t):l!=null&&yd(t,s,l,o))}switch(n){case"input":fa(t),um(t,r,!1);break;case"textarea":fa(t),hm(t);break;case"option":r.value!=null&&t.setAttribute("value",""+pr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?ki(t,!!r.multiple,s,!1):r.defaultValue!=null&&ki(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=ul)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return tt(e),null;case 6:if(t&&e.stateNode!=null)U_(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(U(166));if(n=br(mo.current),br(tn.current),Ia(e)){if(r=e.stateNode,n=e.memoizedProps,r[Zt]=e,(s=r.nodeValue!==n)&&(t=Ct,t!==null))switch(t.tag){case 3:Ea(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Ea(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Zt]=e,e.stateNode=r}return tt(e),null;case 13:if(me(_e),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ge&&At!==null&&e.mode&1&&!(e.flags&128))r_(),ji(),e.flags|=98560,s=!1;else if(s=Ia(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(U(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(U(317));s[Zt]=e}else ji(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;tt(e),s=!1}else Wt!==null&&(Vh(Wt),Wt=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||_e.current&1?Ve===0&&(Ve=3):Zd())),e.updateQueue!==null&&(e.flags|=4),tt(e),null);case 4:return zi(),Ch(t,e),t===null&&co(e.stateNode.containerInfo),tt(e),null;case 10:return Md(e.type._context),tt(e),null;case 17:return _t(e.type)&&cl(),tt(e),null;case 19:if(me(_e),s=e.memoizedState,s===null)return tt(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Ps(s,!1);else{if(Ve!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=yl(t),o!==null){for(e.flags|=128,Ps(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return he(_e,_e.current&1|2),e.child}t=t.sibling}s.tail!==null&&xe()>Hi&&(e.flags|=128,r=!0,Ps(s,!1),e.lanes=4194304)}else{if(!r)if(t=yl(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Ps(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!ge)return tt(e),null}else 2*xe()-s.renderingStartTime>Hi&&n!==1073741824&&(e.flags|=128,r=!0,Ps(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=xe(),e.sibling=null,n=_e.current,he(_e,r?n&1|2:n&1),e):(tt(e),null);case 22:case 23:return Jd(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?St&1073741824&&(tt(e),e.subtreeFlags&6&&(e.flags|=8192)):tt(e),null;case 24:return null;case 25:return null}throw Error(U(156,e.tag))}function XS(t,e){switch(bd(e),e.tag){case 1:return _t(e.type)&&cl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return zi(),me(vt),me(ot),Bd(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return jd(e),null;case 13:if(me(_e),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(U(340));ji()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return me(_e),null;case 4:return zi(),null;case 10:return Md(e.type._context),null;case 22:case 23:return Jd(),null;case 24:return null;default:return null}}var Aa=!1,it=!1,JS=typeof WeakSet=="function"?WeakSet:Set,$=null;function Si(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Ae(t,e,r)}else n.current=null}function kh(t,e,n){try{n()}catch(r){Ae(t,e,r)}}var eg=!1;function ZS(t,e){if(hh=ol,t=Hv(),xd(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,u=-1,l=-1,c=0,d=0,p=t,m=null;t:for(;;){for(var w;p!==n||i!==0&&p.nodeType!==3||(u=o+i),p!==s||r!==0&&p.nodeType!==3||(l=o+r),p.nodeType===3&&(o+=p.nodeValue.length),(w=p.firstChild)!==null;)m=p,p=w;for(;;){if(p===t)break t;if(m===n&&++c===i&&(u=o),m===s&&++d===r&&(l=o),(w=p.nextSibling)!==null)break;p=m,m=p.parentNode}p=w}n=u===-1||l===-1?null:{start:u,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(dh={focusedElem:t,selectionRange:n},ol=!1,$=e;$!==null;)if(e=$,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,$=t;else for(;$!==null;){e=$;try{var A=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(A!==null){var x=A.memoizedProps,P=A.memoizedState,S=e.stateNode,_=S.getSnapshotBeforeUpdate(e.elementType===e.type?x:$t(e.type,x),P);S.__reactInternalSnapshotBeforeUpdate=_}break;case 3:var E=e.stateNode.containerInfo;E.nodeType===1?E.textContent="":E.nodeType===9&&E.documentElement&&E.removeChild(E.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(U(163))}}catch(D){Ae(e,e.return,D)}if(t=e.sibling,t!==null){t.return=e.return,$=t;break}$=e.return}return A=eg,eg=!1,A}function Ks(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&kh(e,n,s)}i=i.next}while(i!==r)}}function Zl(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Ph(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function j_(t){var e=t.alternate;e!==null&&(t.alternate=null,j_(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Zt],delete e[fo],delete e[mh],delete e[VS],delete e[MS])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function B_(t){return t.tag===5||t.tag===3||t.tag===4}function tg(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||B_(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function xh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=ul));else if(r!==4&&(t=t.child,t!==null))for(xh(t,e,n),t=t.sibling;t!==null;)xh(t,e,n),t=t.sibling}function Nh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Nh(t,e,n),t=t.sibling;t!==null;)Nh(t,e,n),t=t.sibling}var He=null,Ht=!1;function zn(t,e,n){for(n=n.child;n!==null;)z_(t,e,n),n=n.sibling}function z_(t,e,n){if(en&&typeof en.onCommitFiberUnmount=="function")try{en.onCommitFiberUnmount(Wl,n)}catch{}switch(n.tag){case 5:it||Si(n,e);case 6:var r=He,i=Ht;He=null,zn(t,e,n),He=r,Ht=i,He!==null&&(Ht?(t=He,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):He.removeChild(n.stateNode));break;case 18:He!==null&&(Ht?(t=He,n=n.stateNode,t.nodeType===8?vc(t.parentNode,n):t.nodeType===1&&vc(t,n),ao(t)):vc(He,n.stateNode));break;case 4:r=He,i=Ht,He=n.stateNode.containerInfo,Ht=!0,zn(t,e,n),He=r,Ht=i;break;case 0:case 11:case 14:case 15:if(!it&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&kh(n,e,o),i=i.next}while(i!==r)}zn(t,e,n);break;case 1:if(!it&&(Si(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(u){Ae(n,e,u)}zn(t,e,n);break;case 21:zn(t,e,n);break;case 22:n.mode&1?(it=(r=it)||n.memoizedState!==null,zn(t,e,n),it=r):zn(t,e,n);break;default:zn(t,e,n)}}function ng(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new JS),e.forEach(function(r){var i=l1.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function zt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,u=o;e:for(;u!==null;){switch(u.tag){case 5:He=u.stateNode,Ht=!1;break e;case 3:He=u.stateNode.containerInfo,Ht=!0;break e;case 4:He=u.stateNode.containerInfo,Ht=!0;break e}u=u.return}if(He===null)throw Error(U(160));z_(s,o,i),He=null,Ht=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(c){Ae(i,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)$_(e,t),e=e.sibling}function $_(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(zt(e,t),Xt(t),r&4){try{Ks(3,t,t.return),Zl(3,t)}catch(x){Ae(t,t.return,x)}try{Ks(5,t,t.return)}catch(x){Ae(t,t.return,x)}}break;case 1:zt(e,t),Xt(t),r&512&&n!==null&&Si(n,n.return);break;case 5:if(zt(e,t),Xt(t),r&512&&n!==null&&Si(n,n.return),t.flags&32){var i=t.stateNode;try{ro(i,"")}catch(x){Ae(t,t.return,x)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,u=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{u==="input"&&s.type==="radio"&&s.name!=null&&hv(i,s),th(u,o);var c=th(u,s);for(o=0;o<l.length;o+=2){var d=l[o],p=l[o+1];d==="style"?gv(i,p):d==="dangerouslySetInnerHTML"?pv(i,p):d==="children"?ro(i,p):yd(i,d,p,c)}switch(u){case"input":Yc(i,s);break;case"textarea":dv(i,s);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var w=s.value;w!=null?ki(i,!!s.multiple,w,!1):m!==!!s.multiple&&(s.defaultValue!=null?ki(i,!!s.multiple,s.defaultValue,!0):ki(i,!!s.multiple,s.multiple?[]:"",!1))}i[fo]=s}catch(x){Ae(t,t.return,x)}}break;case 6:if(zt(e,t),Xt(t),r&4){if(t.stateNode===null)throw Error(U(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(x){Ae(t,t.return,x)}}break;case 3:if(zt(e,t),Xt(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ao(e.containerInfo)}catch(x){Ae(t,t.return,x)}break;case 4:zt(e,t),Xt(t);break;case 13:zt(e,t),Xt(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Yd=xe())),r&4&&ng(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(it=(c=it)||d,zt(e,t),it=c):zt(e,t),Xt(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!d&&t.mode&1)for($=t,d=t.child;d!==null;){for(p=$=d;$!==null;){switch(m=$,w=m.child,m.tag){case 0:case 11:case 14:case 15:Ks(4,m,m.return);break;case 1:Si(m,m.return);var A=m.stateNode;if(typeof A.componentWillUnmount=="function"){r=m,n=m.return;try{e=r,A.props=e.memoizedProps,A.state=e.memoizedState,A.componentWillUnmount()}catch(x){Ae(r,n,x)}}break;case 5:Si(m,m.return);break;case 22:if(m.memoizedState!==null){ig(p);continue}}w!==null?(w.return=m,$=w):ig(p)}d=d.sibling}e:for(d=null,p=t;;){if(p.tag===5){if(d===null){d=p;try{i=p.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(u=p.stateNode,l=p.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,u.style.display=mv("display",o))}catch(x){Ae(t,t.return,x)}}}else if(p.tag===6){if(d===null)try{p.stateNode.nodeValue=c?"":p.memoizedProps}catch(x){Ae(t,t.return,x)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===t)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===t)break e;for(;p.sibling===null;){if(p.return===null||p.return===t)break e;d===p&&(d=null),p=p.return}d===p&&(d=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:zt(e,t),Xt(t),r&4&&ng(t);break;case 21:break;default:zt(e,t),Xt(t)}}function Xt(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(B_(n)){var r=n;break e}n=n.return}throw Error(U(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(ro(i,""),r.flags&=-33);var s=tg(t);Nh(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,u=tg(t);xh(t,u,o);break;default:throw Error(U(161))}}catch(l){Ae(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function e1(t,e,n){$=t,H_(t)}function H_(t,e,n){for(var r=(t.mode&1)!==0;$!==null;){var i=$,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Aa;if(!o){var u=i.alternate,l=u!==null&&u.memoizedState!==null||it;u=Aa;var c=it;if(Aa=o,(it=l)&&!c)for($=i;$!==null;)o=$,l=o.child,o.tag===22&&o.memoizedState!==null?sg(i):l!==null?(l.return=o,$=l):sg(i);for(;s!==null;)$=s,H_(s),s=s.sibling;$=i,Aa=u,it=c}rg(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,$=s):rg(t)}}function rg(t){for(;$!==null;){var e=$;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:it||Zl(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!it)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:$t(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Bm(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Bm(e,o,n)}break;case 5:var u=e.stateNode;if(n===null&&e.flags&4){n=u;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var p=d.dehydrated;p!==null&&ao(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(U(163))}it||e.flags&512&&Ph(e)}catch(m){Ae(e,e.return,m)}}if(e===t){$=null;break}if(n=e.sibling,n!==null){n.return=e.return,$=n;break}$=e.return}}function ig(t){for(;$!==null;){var e=$;if(e===t){$=null;break}var n=e.sibling;if(n!==null){n.return=e.return,$=n;break}$=e.return}}function sg(t){for(;$!==null;){var e=$;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Zl(4,e)}catch(l){Ae(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){Ae(e,i,l)}}var s=e.return;try{Ph(e)}catch(l){Ae(e,s,l)}break;case 5:var o=e.return;try{Ph(e)}catch(l){Ae(e,o,l)}}}catch(l){Ae(e,e.return,l)}if(e===t){$=null;break}var u=e.sibling;if(u!==null){u.return=e.return,$=u;break}$=e.return}}var t1=Math.ceil,wl=Fn.ReactCurrentDispatcher,Gd=Fn.ReactCurrentOwner,Mt=Fn.ReactCurrentBatchConfig,ie=0,je=null,be=null,Ke=0,St=0,Ai=wr(0),Ve=0,_o=null,$r=0,eu=0,Qd=0,Gs=null,mt=null,Yd=0,Hi=1/0,wn=null,El=!1,bh=null,lr=null,Ra=!1,Zn=null,Il=0,Qs=0,Dh=null,$a=-1,Ha=0;function dt(){return ie&6?xe():$a!==-1?$a:$a=xe()}function ur(t){return t.mode&1?ie&2&&Ke!==0?Ke&-Ke:FS.transition!==null?(Ha===0&&(Ha=kv()),Ha):(t=le,t!==0||(t=window.event,t=t===void 0?16:Vv(t.type)),t):1}function Kt(t,e,n,r){if(50<Qs)throw Qs=0,Dh=null,Error(U(185));bo(t,n,r),(!(ie&2)||t!==je)&&(t===je&&(!(ie&2)&&(eu|=n),Ve===4&&Kn(t,Ke)),wt(t,r),n===1&&ie===0&&!(e.mode&1)&&(Hi=xe()+500,Yl&&Er()))}function wt(t,e){var n=t.callbackNode;FT(t,e);var r=sl(t,t===je?Ke:0);if(r===0)n!==null&&pm(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&pm(n),e===1)t.tag===0?LS(og.bind(null,t)):e_(og.bind(null,t)),DS(function(){!(ie&6)&&Er()}),n=null;else{switch(Pv(r)){case 1:n=Id;break;case 4:n=Rv;break;case 16:n=il;break;case 536870912:n=Cv;break;default:n=il}n=J_(n,W_.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function W_(t,e){if($a=-1,Ha=0,ie&6)throw Error(U(327));var n=t.callbackNode;if(Di()&&t.callbackNode!==n)return null;var r=sl(t,t===je?Ke:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Tl(t,r);else{e=r;var i=ie;ie|=2;var s=K_();(je!==t||Ke!==e)&&(wn=null,Hi=xe()+500,Vr(t,e));do try{i1();break}catch(u){q_(t,u)}while(!0);Vd(),wl.current=s,ie=i,be!==null?e=0:(je=null,Ke=0,e=Ve)}if(e!==0){if(e===2&&(i=oh(t),i!==0&&(r=i,e=Oh(t,i))),e===1)throw n=_o,Vr(t,0),Kn(t,r),wt(t,xe()),n;if(e===6)Kn(t,r);else{if(i=t.current.alternate,!(r&30)&&!n1(i)&&(e=Tl(t,r),e===2&&(s=oh(t),s!==0&&(r=s,e=Oh(t,s))),e===1))throw n=_o,Vr(t,0),Kn(t,r),wt(t,xe()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(U(345));case 2:kr(t,mt,wn);break;case 3:if(Kn(t,r),(r&130023424)===r&&(e=Yd+500-xe(),10<e)){if(sl(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){dt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=ph(kr.bind(null,t,mt,wn),e);break}kr(t,mt,wn);break;case 4:if(Kn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-qt(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=xe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*t1(r/1960))-r,10<r){t.timeoutHandle=ph(kr.bind(null,t,mt,wn),r);break}kr(t,mt,wn);break;case 5:kr(t,mt,wn);break;default:throw Error(U(329))}}}return wt(t,xe()),t.callbackNode===n?W_.bind(null,t):null}function Oh(t,e){var n=Gs;return t.current.memoizedState.isDehydrated&&(Vr(t,e).flags|=256),t=Tl(t,e),t!==2&&(e=mt,mt=n,e!==null&&Vh(e)),t}function Vh(t){mt===null?mt=t:mt.push.apply(mt,t)}function n1(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Gt(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Kn(t,e){for(e&=~Qd,e&=~eu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-qt(e),r=1<<n;t[n]=-1,e&=~r}}function og(t){if(ie&6)throw Error(U(327));Di();var e=sl(t,0);if(!(e&1))return wt(t,xe()),null;var n=Tl(t,e);if(t.tag!==0&&n===2){var r=oh(t);r!==0&&(e=r,n=Oh(t,r))}if(n===1)throw n=_o,Vr(t,0),Kn(t,e),wt(t,xe()),n;if(n===6)throw Error(U(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,kr(t,mt,wn),wt(t,xe()),null}function Xd(t,e){var n=ie;ie|=1;try{return t(e)}finally{ie=n,ie===0&&(Hi=xe()+500,Yl&&Er())}}function Hr(t){Zn!==null&&Zn.tag===0&&!(ie&6)&&Di();var e=ie;ie|=1;var n=Mt.transition,r=le;try{if(Mt.transition=null,le=1,t)return t()}finally{le=r,Mt.transition=n,ie=e,!(ie&6)&&Er()}}function Jd(){St=Ai.current,me(Ai)}function Vr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,bS(n)),be!==null)for(n=be.return;n!==null;){var r=n;switch(bd(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&cl();break;case 3:zi(),me(vt),me(ot),Bd();break;case 5:jd(r);break;case 4:zi();break;case 13:me(_e);break;case 19:me(_e);break;case 10:Md(r.type._context);break;case 22:case 23:Jd()}n=n.return}if(je=t,be=t=cr(t.current,null),Ke=St=e,Ve=0,_o=null,Qd=eu=$r=0,mt=Gs=null,Nr!==null){for(e=0;e<Nr.length;e++)if(n=Nr[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Nr=null}return t}function q_(t,e){do{var n=be;try{if(Vd(),ja.current=_l,vl){for(var r=we.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}vl=!1}if(zr=0,Ue=De=we=null,qs=!1,go=0,Gd.current=null,n===null||n.return===null){Ve=1,_o=e,be=null;break}e:{var s=t,o=n.return,u=n,l=e;if(e=Ke,u.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,d=u,p=d.tag;if(!(d.mode&1)&&(p===0||p===11||p===15)){var m=d.alternate;m?(d.updateQueue=m.updateQueue,d.memoizedState=m.memoizedState,d.lanes=m.lanes):(d.updateQueue=null,d.memoizedState=null)}var w=Km(o);if(w!==null){w.flags&=-257,Gm(w,o,u,s,e),w.mode&1&&qm(s,c,e),e=w,l=c;var A=e.updateQueue;if(A===null){var x=new Set;x.add(l),e.updateQueue=x}else A.add(l);break e}else{if(!(e&1)){qm(s,c,e),Zd();break e}l=Error(U(426))}}else if(ge&&u.mode&1){var P=Km(o);if(P!==null){!(P.flags&65536)&&(P.flags|=256),Gm(P,o,u,s,e),Dd($i(l,u));break e}}s=l=$i(l,u),Ve!==4&&(Ve=2),Gs===null?Gs=[s]:Gs.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var S=P_(s,l,e);jm(s,S);break e;case 1:u=l;var _=s.type,E=s.stateNode;if(!(s.flags&128)&&(typeof _.getDerivedStateFromError=="function"||E!==null&&typeof E.componentDidCatch=="function"&&(lr===null||!lr.has(E)))){s.flags|=65536,e&=-e,s.lanes|=e;var D=x_(s,u,e);jm(s,D);break e}}s=s.return}while(s!==null)}Q_(n)}catch(V){e=V,be===n&&n!==null&&(be=n=n.return);continue}break}while(!0)}function K_(){var t=wl.current;return wl.current=_l,t===null?_l:t}function Zd(){(Ve===0||Ve===3||Ve===2)&&(Ve=4),je===null||!($r&268435455)&&!(eu&268435455)||Kn(je,Ke)}function Tl(t,e){var n=ie;ie|=2;var r=K_();(je!==t||Ke!==e)&&(wn=null,Vr(t,e));do try{r1();break}catch(i){q_(t,i)}while(!0);if(Vd(),ie=n,wl.current=r,be!==null)throw Error(U(261));return je=null,Ke=0,Ve}function r1(){for(;be!==null;)G_(be)}function i1(){for(;be!==null&&!PT();)G_(be)}function G_(t){var e=X_(t.alternate,t,St);t.memoizedProps=t.pendingProps,e===null?Q_(t):be=e,Gd.current=null}function Q_(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=XS(n,e),n!==null){n.flags&=32767,be=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ve=6,be=null;return}}else if(n=YS(n,e,St),n!==null){be=n;return}if(e=e.sibling,e!==null){be=e;return}be=e=t}while(e!==null);Ve===0&&(Ve=5)}function kr(t,e,n){var r=le,i=Mt.transition;try{Mt.transition=null,le=1,s1(t,e,n,r)}finally{Mt.transition=i,le=r}return null}function s1(t,e,n,r){do Di();while(Zn!==null);if(ie&6)throw Error(U(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(U(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(UT(t,s),t===je&&(be=je=null,Ke=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ra||(Ra=!0,J_(il,function(){return Di(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Mt.transition,Mt.transition=null;var o=le;le=1;var u=ie;ie|=4,Gd.current=null,ZS(t,n),$_(n,t),AS(dh),ol=!!hh,dh=hh=null,t.current=n,e1(n),xT(),ie=u,le=o,Mt.transition=s}else t.current=n;if(Ra&&(Ra=!1,Zn=t,Il=i),s=t.pendingLanes,s===0&&(lr=null),DT(n.stateNode),wt(t,xe()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(El)throw El=!1,t=bh,bh=null,t;return Il&1&&t.tag!==0&&Di(),s=t.pendingLanes,s&1?t===Dh?Qs++:(Qs=0,Dh=t):Qs=0,Er(),null}function Di(){if(Zn!==null){var t=Pv(Il),e=Mt.transition,n=le;try{if(Mt.transition=null,le=16>t?16:t,Zn===null)var r=!1;else{if(t=Zn,Zn=null,Il=0,ie&6)throw Error(U(331));var i=ie;for(ie|=4,$=t.current;$!==null;){var s=$,o=s.child;if($.flags&16){var u=s.deletions;if(u!==null){for(var l=0;l<u.length;l++){var c=u[l];for($=c;$!==null;){var d=$;switch(d.tag){case 0:case 11:case 15:Ks(8,d,s)}var p=d.child;if(p!==null)p.return=d,$=p;else for(;$!==null;){d=$;var m=d.sibling,w=d.return;if(j_(d),d===c){$=null;break}if(m!==null){m.return=w,$=m;break}$=w}}}var A=s.alternate;if(A!==null){var x=A.child;if(x!==null){A.child=null;do{var P=x.sibling;x.sibling=null,x=P}while(x!==null)}}$=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,$=o;else e:for(;$!==null;){if(s=$,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Ks(9,s,s.return)}var S=s.sibling;if(S!==null){S.return=s.return,$=S;break e}$=s.return}}var _=t.current;for($=_;$!==null;){o=$;var E=o.child;if(o.subtreeFlags&2064&&E!==null)E.return=o,$=E;else e:for(o=_;$!==null;){if(u=$,u.flags&2048)try{switch(u.tag){case 0:case 11:case 15:Zl(9,u)}}catch(V){Ae(u,u.return,V)}if(u===o){$=null;break e}var D=u.sibling;if(D!==null){D.return=u.return,$=D;break e}$=u.return}}if(ie=i,Er(),en&&typeof en.onPostCommitFiberRoot=="function")try{en.onPostCommitFiberRoot(Wl,t)}catch{}r=!0}return r}finally{le=n,Mt.transition=e}}return!1}function ag(t,e,n){e=$i(n,e),e=P_(t,e,1),t=ar(t,e,1),e=dt(),t!==null&&(bo(t,1,e),wt(t,e))}function Ae(t,e,n){if(t.tag===3)ag(t,t,n);else for(;e!==null;){if(e.tag===3){ag(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(lr===null||!lr.has(r))){t=$i(n,t),t=x_(e,t,1),e=ar(e,t,1),t=dt(),e!==null&&(bo(e,1,t),wt(e,t));break}}e=e.return}}function o1(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=dt(),t.pingedLanes|=t.suspendedLanes&n,je===t&&(Ke&n)===n&&(Ve===4||Ve===3&&(Ke&130023424)===Ke&&500>xe()-Yd?Vr(t,0):Qd|=n),wt(t,e)}function Y_(t,e){e===0&&(t.mode&1?(e=ga,ga<<=1,!(ga&130023424)&&(ga=4194304)):e=1);var n=dt();t=Nn(t,e),t!==null&&(bo(t,e,n),wt(t,n))}function a1(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Y_(t,n)}function l1(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(U(314))}r!==null&&r.delete(e),Y_(t,n)}var X_;X_=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||vt.current)yt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return yt=!1,QS(t,e,n);yt=!!(t.flags&131072)}else yt=!1,ge&&e.flags&1048576&&t_(e,fl,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;za(t,e),t=e.pendingProps;var i=Ui(e,ot.current);bi(e,n),i=$d(null,e,r,t,i,n);var s=Hd();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,_t(r)?(s=!0,hl(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Fd(e),i.updater=Jl,e.stateNode=i,i._reactInternals=e,Eh(e,r,t,n),e=Sh(null,e,r,!0,s,n)):(e.tag=0,ge&&s&&Nd(e),ht(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(za(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=c1(r),t=$t(r,t),i){case 0:e=Th(null,e,r,t,n);break e;case 1:e=Xm(null,e,r,t,n);break e;case 11:e=Qm(null,e,r,t,n);break e;case 14:e=Ym(null,e,r,$t(r.type,t),n);break e}throw Error(U(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:$t(r,i),Th(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:$t(r,i),Xm(t,e,r,i,n);case 3:e:{if(O_(e),t===null)throw Error(U(387));r=e.pendingProps,s=e.memoizedState,i=s.element,a_(t,e),gl(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=$i(Error(U(423)),e),e=Jm(t,e,r,n,i);break e}else if(r!==i){i=$i(Error(U(424)),e),e=Jm(t,e,r,n,i);break e}else for(At=or(e.stateNode.containerInfo.firstChild),Ct=e,ge=!0,Wt=null,n=s_(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ji(),r===i){e=bn(t,e,n);break e}ht(t,e,r,n)}e=e.child}return e;case 5:return l_(e),t===null&&vh(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,fh(r,i)?o=null:s!==null&&fh(r,s)&&(e.flags|=32),D_(t,e),ht(t,e,o,n),e.child;case 6:return t===null&&vh(e),null;case 13:return V_(t,e,n);case 4:return Ud(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Bi(e,null,r,n):ht(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:$t(r,i),Qm(t,e,r,i,n);case 7:return ht(t,e,e.pendingProps,n),e.child;case 8:return ht(t,e,e.pendingProps.children,n),e.child;case 12:return ht(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,he(pl,r._currentValue),r._currentValue=o,s!==null)if(Gt(s.value,o)){if(s.children===i.children&&!vt.current){e=bn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var u=s.dependencies;if(u!==null){o=s.child;for(var l=u.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=Cn(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?l.next=l:(l.next=d.next,d.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),_h(s.return,n,e),u.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(U(341));o.lanes|=n,u=o.alternate,u!==null&&(u.lanes|=n),_h(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}ht(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,bi(e,n),i=Ft(i),r=r(i),e.flags|=1,ht(t,e,r,n),e.child;case 14:return r=e.type,i=$t(r,e.pendingProps),i=$t(r.type,i),Ym(t,e,r,i,n);case 15:return N_(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:$t(r,i),za(t,e),e.tag=1,_t(r)?(t=!0,hl(e)):t=!1,bi(e,n),k_(e,r,i),Eh(e,r,i,n),Sh(null,e,r,!0,t,n);case 19:return M_(t,e,n);case 22:return b_(t,e,n)}throw Error(U(156,e.tag))};function J_(t,e){return Av(t,e)}function u1(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Vt(t,e,n,r){return new u1(t,e,n,r)}function ef(t){return t=t.prototype,!(!t||!t.isReactComponent)}function c1(t){if(typeof t=="function")return ef(t)?1:0;if(t!=null){if(t=t.$$typeof,t===_d)return 11;if(t===wd)return 14}return 2}function cr(t,e){var n=t.alternate;return n===null?(n=Vt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Wa(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")ef(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case mi:return Mr(n.children,i,s,e);case vd:o=8,i|=8;break;case Wc:return t=Vt(12,n,e,i|2),t.elementType=Wc,t.lanes=s,t;case qc:return t=Vt(13,n,e,i),t.elementType=qc,t.lanes=s,t;case Kc:return t=Vt(19,n,e,i),t.elementType=Kc,t.lanes=s,t;case lv:return tu(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case ov:o=10;break e;case av:o=9;break e;case _d:o=11;break e;case wd:o=14;break e;case Hn:o=16,r=null;break e}throw Error(U(130,t==null?t:typeof t,""))}return e=Vt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Mr(t,e,n,r){return t=Vt(7,t,r,e),t.lanes=n,t}function tu(t,e,n,r){return t=Vt(22,t,r,e),t.elementType=lv,t.lanes=n,t.stateNode={isHidden:!1},t}function Rc(t,e,n){return t=Vt(6,t,null,e),t.lanes=n,t}function Cc(t,e,n){return e=Vt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function h1(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ac(0),this.expirationTimes=ac(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ac(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function tf(t,e,n,r,i,s,o,u,l){return t=new h1(t,e,n,u,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Vt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Fd(s),t}function d1(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:pi,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function Z_(t){if(!t)return mr;t=t._reactInternals;e:{if(Zr(t)!==t||t.tag!==1)throw Error(U(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(_t(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(U(171))}if(t.tag===1){var n=t.type;if(_t(n))return Zv(t,n,e)}return e}function e0(t,e,n,r,i,s,o,u,l){return t=tf(n,r,!0,t,i,s,o,u,l),t.context=Z_(null),n=t.current,r=dt(),i=ur(n),s=Cn(r,i),s.callback=e??null,ar(n,s,i),t.current.lanes=i,bo(t,i,r),wt(t,r),t}function nu(t,e,n,r){var i=e.current,s=dt(),o=ur(i);return n=Z_(n),e.context===null?e.context=n:e.pendingContext=n,e=Cn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=ar(i,e,o),t!==null&&(Kt(t,i,o,s),Ua(t,i,o)),o}function Sl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function lg(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function nf(t,e){lg(t,e),(t=t.alternate)&&lg(t,e)}function f1(){return null}var t0=typeof reportError=="function"?reportError:function(t){console.error(t)};function rf(t){this._internalRoot=t}ru.prototype.render=rf.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(U(409));nu(t,e,null,null)};ru.prototype.unmount=rf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Hr(function(){nu(null,t,null,null)}),e[xn]=null}};function ru(t){this._internalRoot=t}ru.prototype.unstable_scheduleHydration=function(t){if(t){var e=bv();t={blockedOn:null,target:t,priority:e};for(var n=0;n<qn.length&&e!==0&&e<qn[n].priority;n++);qn.splice(n,0,t),n===0&&Ov(t)}};function sf(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function iu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function ug(){}function p1(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var c=Sl(o);s.call(c)}}var o=e0(e,r,t,0,null,!1,!1,"",ug);return t._reactRootContainer=o,t[xn]=o.current,co(t.nodeType===8?t.parentNode:t),Hr(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var u=r;r=function(){var c=Sl(l);u.call(c)}}var l=tf(t,0,!1,null,null,!1,!1,"",ug);return t._reactRootContainer=l,t[xn]=l.current,co(t.nodeType===8?t.parentNode:t),Hr(function(){nu(e,l,n,r)}),l}function su(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var u=i;i=function(){var l=Sl(o);u.call(l)}}nu(e,o,t,i)}else o=p1(n,e,t,i,r);return Sl(o)}xv=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Os(e.pendingLanes);n!==0&&(Td(e,n|1),wt(e,xe()),!(ie&6)&&(Hi=xe()+500,Er()))}break;case 13:Hr(function(){var r=Nn(t,1);if(r!==null){var i=dt();Kt(r,t,1,i)}}),nf(t,1)}};Sd=function(t){if(t.tag===13){var e=Nn(t,134217728);if(e!==null){var n=dt();Kt(e,t,134217728,n)}nf(t,134217728)}};Nv=function(t){if(t.tag===13){var e=ur(t),n=Nn(t,e);if(n!==null){var r=dt();Kt(n,t,e,r)}nf(t,e)}};bv=function(){return le};Dv=function(t,e){var n=le;try{return le=t,e()}finally{le=n}};rh=function(t,e,n){switch(e){case"input":if(Yc(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Ql(r);if(!i)throw Error(U(90));cv(r),Yc(r,i)}}}break;case"textarea":dv(t,n);break;case"select":e=n.value,e!=null&&ki(t,!!n.multiple,e,!1)}};_v=Xd;wv=Hr;var m1={usingClientEntryPoint:!1,Events:[Oo,_i,Ql,yv,vv,Xd]},xs={findFiberByHostInstance:xr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},g1={bundleType:xs.bundleType,version:xs.version,rendererPackageName:xs.rendererPackageName,rendererConfig:xs.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Fn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Tv(t),t===null?null:t.stateNode},findFiberByHostInstance:xs.findFiberByHostInstance||f1,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ca=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ca.isDisabled&&Ca.supportsFiber)try{Wl=Ca.inject(g1),en=Ca}catch{}}xt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=m1;xt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!sf(e))throw Error(U(200));return d1(t,e,null,n)};xt.createRoot=function(t,e){if(!sf(t))throw Error(U(299));var n=!1,r="",i=t0;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=tf(t,1,!1,null,null,n,!1,r,i),t[xn]=e.current,co(t.nodeType===8?t.parentNode:t),new rf(e)};xt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(U(188)):(t=Object.keys(t).join(","),Error(U(268,t)));return t=Tv(e),t=t===null?null:t.stateNode,t};xt.flushSync=function(t){return Hr(t)};xt.hydrate=function(t,e,n){if(!iu(e))throw Error(U(200));return su(null,t,e,!0,n)};xt.hydrateRoot=function(t,e,n){if(!sf(t))throw Error(U(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=t0;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=e0(e,null,t,1,n??null,i,!1,s,o),t[xn]=e.current,co(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new ru(e)};xt.render=function(t,e,n){if(!iu(e))throw Error(U(200));return su(null,t,e,!1,n)};xt.unmountComponentAtNode=function(t){if(!iu(t))throw Error(U(40));return t._reactRootContainer?(Hr(function(){su(null,null,t,!1,function(){t._reactRootContainer=null,t[xn]=null})}),!0):!1};xt.unstable_batchedUpdates=Xd;xt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!iu(n))throw Error(U(200));if(t==null||t._reactInternals===void 0)throw Error(U(38));return su(t,e,n,!1,r)};xt.version="18.3.1-next-f1338f8080-20240426";function n0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n0)}catch(t){console.error(t)}}n0(),nv.exports=xt;var y1=nv.exports,cg=y1;$c.createRoot=cg.createRoot,$c.hydrateRoot=cg.hydrateRoot;/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function wo(){return wo=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},wo.apply(this,arguments)}var er;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(er||(er={}));const hg="popstate";function v1(t){t===void 0&&(t={});function e(i,s){let{pathname:o="/",search:u="",hash:l=""}=ei(i.location.hash.substr(1));return!o.startsWith("/")&&!o.startsWith(".")&&(o="/"+o),Mh("",{pathname:o,search:u,hash:l},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function n(i,s){let o=i.document.querySelector("base"),u="";if(o&&o.getAttribute("href")){let l=i.location.href,c=l.indexOf("#");u=c===-1?l:l.slice(0,c)}return u+"#"+(typeof s=="string"?s:r0(s))}function r(i,s){ou(i.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(s)+")")}return w1(e,n,r,t)}function Me(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function ou(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function _1(){return Math.random().toString(36).substr(2,8)}function dg(t,e){return{usr:t.state,key:t.key,idx:e}}function Mh(t,e,n,r){return n===void 0&&(n=null),wo({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?ei(e):e,{state:n,key:e&&e.key||r||_1()})}function r0(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function ei(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function w1(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,u=er.Pop,l=null,c=d();c==null&&(c=0,o.replaceState(wo({},o.state,{idx:c}),""));function d(){return(o.state||{idx:null}).idx}function p(){u=er.Pop;let P=d(),S=P==null?null:P-c;c=P,l&&l({action:u,location:x.location,delta:S})}function m(P,S){u=er.Push;let _=Mh(x.location,P,S);n&&n(_,P),c=d()+1;let E=dg(_,c),D=x.createHref(_);try{o.pushState(E,"",D)}catch(V){if(V instanceof DOMException&&V.name==="DataCloneError")throw V;i.location.assign(D)}s&&l&&l({action:u,location:x.location,delta:1})}function w(P,S){u=er.Replace;let _=Mh(x.location,P,S);n&&n(_,P),c=d();let E=dg(_,c),D=x.createHref(_);o.replaceState(E,"",D),s&&l&&l({action:u,location:x.location,delta:0})}function A(P){let S=i.location.origin!=="null"?i.location.origin:i.location.href,_=typeof P=="string"?P:r0(P);return _=_.replace(/ $/,"%20"),Me(S,"No window.location.(origin|href) available to create URL for href: "+_),new URL(_,S)}let x={get action(){return u},get location(){return t(i,o)},listen(P){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(hg,p),l=P,()=>{i.removeEventListener(hg,p),l=null}},createHref(P){return e(i,P)},createURL:A,encodeLocation(P){let S=A(P);return{pathname:S.pathname,search:S.search,hash:S.hash}},push:m,replace:w,go(P){return o.go(P)}};return x}var fg;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(fg||(fg={}));function E1(t,e,n){return n===void 0&&(n="/"),I1(t,e,n)}function I1(t,e,n,r){let i=typeof e=="string"?ei(e):e,s=o0(i.pathname||"/",n);if(s==null)return null;let o=i0(t);T1(o);let u=null;for(let l=0;u==null&&l<o.length;++l){let c=V1(s);u=b1(o[l],c)}return u}function i0(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,u)=>{let l={relativePath:u===void 0?s.path||"":u,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(Me(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let c=Lr([r,l.relativePath]),d=n.concat(l);s.children&&s.children.length>0&&(Me(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),i0(s.children,e,d,c)),!(s.path==null&&!s.index)&&e.push({path:c,score:x1(c,s.index),routesMeta:d})};return t.forEach((s,o)=>{var u;if(s.path===""||!((u=s.path)!=null&&u.includes("?")))i(s,o);else for(let l of s0(s.path))i(s,o,l)}),e}function s0(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=s0(r.join("/")),u=[];return u.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&u.push(...o),u.map(l=>t.startsWith("/")&&l===""?"/":l)}function T1(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:N1(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const S1=/^:[\w-]+$/,A1=3,R1=2,C1=1,k1=10,P1=-2,pg=t=>t==="*";function x1(t,e){let n=t.split("/"),r=n.length;return n.some(pg)&&(r+=P1),e&&(r+=R1),n.filter(i=>!pg(i)).reduce((i,s)=>i+(S1.test(s)?A1:s===""?C1:k1),r)}function N1(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function b1(t,e,n){let{routesMeta:r}=t,i={},s="/",o=[];for(let u=0;u<r.length;++u){let l=r[u],c=u===r.length-1,d=s==="/"?e:e.slice(s.length)||"/",p=D1({path:l.relativePath,caseSensitive:l.caseSensitive,end:c},d),m=l.route;if(!p)return null;Object.assign(i,p.params),o.push({params:i,pathname:Lr([s,p.pathname]),pathnameBase:z1(Lr([s,p.pathnameBase])),route:m}),p.pathnameBase!=="/"&&(s=Lr([s,p.pathnameBase]))}return o}function D1(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=O1(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),u=i.slice(1);return{params:r.reduce((c,d,p)=>{let{paramName:m,isOptional:w}=d;if(m==="*"){let x=u[p]||"";o=s.slice(0,s.length-x.length).replace(/(.)\/+$/,"$1")}const A=u[p];return w&&!A?c[m]=void 0:c[m]=(A||"").replace(/%2F/g,"/"),c},{}),pathname:s,pathnameBase:o,pattern:t}}function O1(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),ou(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,u,l)=>(r.push({paramName:u,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function V1(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return ou(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function o0(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}const M1=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,L1=t=>M1.test(t);function F1(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?ei(t):t,s;if(n)if(L1(n))s=n;else{if(n.includes("//")){let o=n;n=n.replace(/\/\/+/g,"/"),ou(!1,"Pathnames cannot have embedded double slashes - normalizing "+(o+" -> "+n))}n.startsWith("/")?s=mg(n.substring(1),"/"):s=mg(n,e)}else s=e;return{pathname:s,search:$1(r),hash:H1(i)}}function mg(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function kc(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function U1(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function j1(t,e){let n=U1(t);return e?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function B1(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=ei(t):(i=wo({},t),Me(!i.pathname||!i.pathname.includes("?"),kc("?","pathname","search",i)),Me(!i.pathname||!i.pathname.includes("#"),kc("#","pathname","hash",i)),Me(!i.search||!i.search.includes("#"),kc("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,u;if(o==null)u=n;else{let p=e.length-1;if(!r&&o.startsWith("..")){let m=o.split("/");for(;m[0]==="..";)m.shift(),p-=1;i.pathname=m.join("/")}u=p>=0?e[p]:"/"}let l=F1(i,u),c=o&&o!=="/"&&o.endsWith("/"),d=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(c||d)&&(l.pathname+="/"),l}const Lr=t=>t.join("/").replace(/\/\/+/g,"/"),z1=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),$1=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,H1=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function W1(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const a0=["post","put","patch","delete"];new Set(a0);const q1=["get",...a0];new Set(q1);/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Eo(){return Eo=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Eo.apply(this,arguments)}const of=j.createContext(null),K1=j.createContext(null),au=j.createContext(null),lu=j.createContext(null),ti=j.createContext({outlet:null,matches:[],isDataRoute:!1}),l0=j.createContext(null);function uu(){return j.useContext(lu)!=null}function u0(){return uu()||Me(!1),j.useContext(lu).location}function c0(t){j.useContext(au).static||j.useLayoutEffect(t)}function cu(){let{isDataRoute:t}=j.useContext(ti);return t?oA():G1()}function G1(){uu()||Me(!1);let t=j.useContext(of),{basename:e,future:n,navigator:r}=j.useContext(au),{matches:i}=j.useContext(ti),{pathname:s}=u0(),o=JSON.stringify(j1(i,n.v7_relativeSplatPath)),u=j.useRef(!1);return c0(()=>{u.current=!0}),j.useCallback(function(c,d){if(d===void 0&&(d={}),!u.current)return;if(typeof c=="number"){r.go(c);return}let p=B1(c,JSON.parse(o),s,d.relative==="path");t==null&&e!=="/"&&(p.pathname=p.pathname==="/"?e:Lr([e,p.pathname])),(d.replace?r.replace:r.push)(p,d.state,d)},[e,r,o,s,t])}function af(){let{matches:t}=j.useContext(ti),e=t[t.length-1];return e?e.params:{}}function Q1(t,e){return Y1(t,e)}function Y1(t,e,n,r){uu()||Me(!1);let{navigator:i}=j.useContext(au),{matches:s}=j.useContext(ti),o=s[s.length-1],u=o?o.params:{};o&&o.pathname;let l=o?o.pathnameBase:"/";o&&o.route;let c=u0(),d;if(e){var p;let P=typeof e=="string"?ei(e):e;l==="/"||(p=P.pathname)!=null&&p.startsWith(l)||Me(!1),d=P}else d=c;let m=d.pathname||"/",w=m;if(l!=="/"){let P=l.replace(/^\//,"").split("/");w="/"+m.replace(/^\//,"").split("/").slice(P.length).join("/")}let A=E1(t,{pathname:w}),x=tA(A&&A.map(P=>Object.assign({},P,{params:Object.assign({},u,P.params),pathname:Lr([l,i.encodeLocation?i.encodeLocation(P.pathname).pathname:P.pathname]),pathnameBase:P.pathnameBase==="/"?l:Lr([l,i.encodeLocation?i.encodeLocation(P.pathnameBase).pathname:P.pathnameBase])})),s,n,r);return e&&x?j.createElement(lu.Provider,{value:{location:Eo({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:er.Pop}},x):x}function X1(){let t=sA(),e=W1(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return j.createElement(j.Fragment,null,j.createElement("h2",null,"Unexpected Application Error!"),j.createElement("h3",{style:{fontStyle:"italic"}},e),n?j.createElement("pre",{style:i},n):null,null)}const J1=j.createElement(X1,null);class Z1 extends j.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?j.createElement(ti.Provider,{value:this.props.routeContext},j.createElement(l0.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function eA(t){let{routeContext:e,match:n,children:r}=t,i=j.useContext(of);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),j.createElement(ti.Provider,{value:e},r)}function tA(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var s;if(!n)return null;if(n.errors)t=n.matches;else if((s=r)!=null&&s.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let o=t,u=(i=n)==null?void 0:i.errors;if(u!=null){let d=o.findIndex(p=>p.route.id&&(u==null?void 0:u[p.route.id])!==void 0);d>=0||Me(!1),o=o.slice(0,Math.min(o.length,d+1))}let l=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let d=0;d<o.length;d++){let p=o[d];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(c=d),p.route.id){let{loaderData:m,errors:w}=n,A=p.route.loader&&m[p.route.id]===void 0&&(!w||w[p.route.id]===void 0);if(p.route.lazy||A){l=!0,c>=0?o=o.slice(0,c+1):o=[o[0]];break}}}return o.reduceRight((d,p,m)=>{let w,A=!1,x=null,P=null;n&&(w=u&&p.route.id?u[p.route.id]:void 0,x=p.route.errorElement||J1,l&&(c<0&&m===0?(aA("route-fallback"),A=!0,P=null):c===m&&(A=!0,P=p.route.hydrateFallbackElement||null)));let S=e.concat(o.slice(0,m+1)),_=()=>{let E;return w?E=x:A?E=P:p.route.Component?E=j.createElement(p.route.Component,null):p.route.element?E=p.route.element:E=d,j.createElement(eA,{match:p,routeContext:{outlet:d,matches:S,isDataRoute:n!=null},children:E})};return n&&(p.route.ErrorBoundary||p.route.errorElement||m===0)?j.createElement(Z1,{location:n.location,revalidation:n.revalidation,component:x,error:w,children:_(),routeContext:{outlet:null,matches:S,isDataRoute:!0}}):_()},null)}var h0=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(h0||{}),d0=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(d0||{});function nA(t){let e=j.useContext(of);return e||Me(!1),e}function rA(t){let e=j.useContext(K1);return e||Me(!1),e}function iA(t){let e=j.useContext(ti);return e||Me(!1),e}function f0(t){let e=iA(),n=e.matches[e.matches.length-1];return n.route.id||Me(!1),n.route.id}function sA(){var t;let e=j.useContext(l0),n=rA(),r=f0();return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function oA(){let{router:t}=nA(h0.UseNavigateStable),e=f0(d0.UseNavigateStable),n=j.useRef(!1);return c0(()=>{n.current=!0}),j.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,Eo({fromRouteId:e},s)))},[t,e])}const gg={};function aA(t,e,n){gg[t]||(gg[t]=!0)}function lA(t,e){t==null||t.v7_startTransition,t==null||t.v7_relativeSplatPath}function Ms(t){Me(!1)}function uA(t){let{basename:e="/",children:n=null,location:r,navigationType:i=er.Pop,navigator:s,static:o=!1,future:u}=t;uu()&&Me(!1);let l=e.replace(/^\/*/,"/"),c=j.useMemo(()=>({basename:l,navigator:s,static:o,future:Eo({v7_relativeSplatPath:!1},u)}),[l,u,s,o]);typeof r=="string"&&(r=ei(r));let{pathname:d="/",search:p="",hash:m="",state:w=null,key:A="default"}=r,x=j.useMemo(()=>{let P=o0(d,l);return P==null?null:{location:{pathname:P,search:p,hash:m,state:w,key:A},navigationType:i}},[l,d,p,m,w,A,i]);return x==null?null:j.createElement(au.Provider,{value:c},j.createElement(lu.Provider,{children:n,value:x}))}function cA(t){let{children:e,location:n}=t;return Q1(Lh(e),n)}new Promise(()=>{});function Lh(t,e){e===void 0&&(e=[]);let n=[];return j.Children.forEach(t,(r,i)=>{if(!j.isValidElement(r))return;let s=[...e,i];if(r.type===j.Fragment){n.push.apply(n,Lh(r.props.children,s));return}r.type!==Ms&&Me(!1),!r.props.index||!r.props.children||Me(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=Lh(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const hA="6";try{window.__reactRouterVersion=hA}catch{}const dA="startTransition",yg=oT[dA];function fA(t){let{basename:e,children:n,future:r,window:i}=t,s=j.useRef();s.current==null&&(s.current=v1({window:i,v5Compat:!0}));let o=s.current,[u,l]=j.useState({action:o.action,location:o.location}),{v7_startTransition:c}=r||{},d=j.useCallback(p=>{c&&yg?yg(()=>l(p)):l(p)},[l,c]);return j.useLayoutEffect(()=>o.listen(d),[o,d]),j.useEffect(()=>lA(r),[r]),j.createElement(uA,{basename:e,children:n,location:u.location,navigationType:u.action,navigator:o,future:r})}var vg;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(vg||(vg={}));var _g;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(_g||(_g={}));/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p0=(...t)=>t.filter((e,n,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===n).join(" ").trim();/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pA=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mA=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,n,r)=>r?r.toUpperCase():n.toLowerCase());/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wg=t=>{const e=mA(t);return e.charAt(0).toUpperCase()+e.slice(1)};/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var gA={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yA=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0;return!1};/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vA=j.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:i="",children:s,iconNode:o,...u},l)=>j.createElement("svg",{ref:l,...gA,width:e,height:e,stroke:t,strokeWidth:r?Number(n)*24/Number(e):n,className:p0("lucide",i),...!s&&!yA(u)&&{"aria-hidden":"true"},...u},[...o.map(([c,d])=>j.createElement(c,d)),...Array.isArray(s)?s:[s]]));/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pn=(t,e)=>{const n=j.forwardRef(({className:r,...i},s)=>j.createElement(vA,{ref:s,iconNode:e,className:p0(`lucide-${pA(wg(t))}`,`lucide-${t}`,r),...i}));return n.displayName=wg(t),n};/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _A=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],wA=pn("circle-check-big",_A);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const EA=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]],Io=pn("loader-circle",EA);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IA=[["path",{d:"M9 18V5l12-2v13",key:"1jmyc2"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["circle",{cx:"18",cy:"16",r:"3",key:"1hluhg"}]],TA=pn("music",IA);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SA=[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]],AA=pn("play",SA);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RA=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],CA=pn("plus",RA);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kA=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],PA=pn("search",kA);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xA=[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]],m0=pn("send",xA);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NA=[["path",{d:"M10 14.66v1.626a2 2 0 0 1-.976 1.696A5 5 0 0 0 7 21.978",key:"1n3hpd"}],["path",{d:"M14 14.66v1.626a2 2 0 0 0 .976 1.696A5 5 0 0 1 17 21.978",key:"rfe1zi"}],["path",{d:"M18 9h1.5a1 1 0 0 0 0-5H18",key:"7xy6bh"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z",key:"1mhfuq"}],["path",{d:"M6 9H4.5a1 1 0 0 1 0-5H6",key:"tex48p"}]],Eg=pn("trophy",NA);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bA=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744",key:"16gr8j"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]],g0=pn("users",bA);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DA=[["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}],["path",{d:"M5 7c0-1.1.9-2 2-2h10a2 2 0 0 1 2 2v12H5V7Z",key:"1ezoue"}],["path",{d:"M22 19H2",key:"nuriw5"}]],Ig=pn("vote",DA);var Tg={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const y0=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},OA=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],u=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|u&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},v0={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,u=o?t[i+1]:0,l=i+2<t.length,c=l?t[i+2]:0,d=s>>2,p=(s&3)<<4|u>>4;let m=(u&15)<<2|c>>6,w=c&63;l||(w=64,o||(m=64)),r.push(n[d],n[p],n[m],n[w])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(y0(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):OA(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],u=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const p=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||u==null||c==null||p==null)throw new VA;const m=s<<2|u>>4;if(r.push(m),c!==64){const w=u<<4&240|c>>2;if(r.push(w),p!==64){const A=c<<6&192|p;r.push(A)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class VA extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const MA=function(t){const e=y0(t);return v0.encodeByteArray(e,!0)},Al=function(t){return MA(t).replace(/\./g,"")},_0=function(t){try{return v0.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LA(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FA=()=>LA().__FIREBASE_DEFAULTS__,UA=()=>{if(typeof process>"u"||typeof Tg>"u")return;const t=Tg.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},jA=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&_0(t[1]);return e&&JSON.parse(e)},hu=()=>{try{return FA()||UA()||jA()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},w0=t=>{var e,n;return(n=(e=hu())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},BA=t=>{const e=w0(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},E0=()=>{var t;return(t=hu())===null||t===void 0?void 0:t.config},I0=t=>{var e;return(e=hu())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zA{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $A(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Al(JSON.stringify(n)),Al(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function at(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function HA(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(at())}function WA(){var t;const e=(t=hu())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function qA(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function T0(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function KA(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function GA(){const t=at();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function QA(){return!WA()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function S0(){try{return typeof indexedDB=="object"}catch{return!1}}function A0(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}function YA(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XA="FirebaseError";class Yt extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=XA,Object.setPrototypeOf(this,Yt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ni.prototype.create)}}class ni{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?JA(s,r):"Error",u=`${this.serviceName}: ${o} (${i}).`;return new Yt(i,u,r)}}function JA(t,e){return t.replace(ZA,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const ZA=/\{\$([^}]+)}/g;function eR(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Wi(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Sg(s)&&Sg(o)){if(!Wi(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Sg(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mo(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function tR(t,e){const n=new nR(t,e);return n.subscribe.bind(n)}class nR{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");rR(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Pc),i.error===void 0&&(i.error=Pc),i.complete===void 0&&(i.complete=Pc);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function rR(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Pc(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iR=1e3,sR=2,oR=4*60*60*1e3,aR=.5;function Ag(t,e=iR,n=sR){const r=e*Math.pow(n,t),i=Math.round(aR*r*(Math.random()-.5)*2);return Math.min(oR,r+i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lt(t){return t&&t._delegate?t._delegate:t}class Qt{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lR{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new zA;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(cR(e))try{this.getOrInitializeService({instanceIdentifier:Pr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Pr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Pr){return this.instances.has(e)}getOptions(e=Pr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const u=this.normalizeInstanceIdentifier(s);r===u&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:uR(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Pr){return this.component?this.component.multipleInstances?e:Pr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function uR(t){return t===Pr?void 0:t}function cR(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hR{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new lR(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ne;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ne||(ne={}));const dR={debug:ne.DEBUG,verbose:ne.VERBOSE,info:ne.INFO,warn:ne.WARN,error:ne.ERROR,silent:ne.SILENT},fR=ne.INFO,pR={[ne.DEBUG]:"log",[ne.VERBOSE]:"log",[ne.INFO]:"info",[ne.WARN]:"warn",[ne.ERROR]:"error"},mR=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=pR[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class du{constructor(e){this.name=e,this._logLevel=fR,this._logHandler=mR,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ne))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?dR[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ne.DEBUG,...e),this._logHandler(this,ne.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ne.VERBOSE,...e),this._logHandler(this,ne.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ne.INFO,...e),this._logHandler(this,ne.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ne.WARN,...e),this._logHandler(this,ne.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ne.ERROR,...e),this._logHandler(this,ne.ERROR,...e)}}const gR=(t,e)=>e.some(n=>t instanceof n);let Rg,Cg;function yR(){return Rg||(Rg=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function vR(){return Cg||(Cg=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const R0=new WeakMap,Fh=new WeakMap,C0=new WeakMap,xc=new WeakMap,lf=new WeakMap;function _R(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(hr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&R0.set(n,t)}).catch(()=>{}),lf.set(e,t),e}function wR(t){if(Fh.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Fh.set(t,e)}let Uh={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Fh.get(t);if(e==="objectStoreNames")return t.objectStoreNames||C0.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return hr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function ER(t){Uh=t(Uh)}function IR(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Nc(this),e,...n);return C0.set(r,e.sort?e.sort():[e]),hr(r)}:vR().includes(t)?function(...e){return t.apply(Nc(this),e),hr(R0.get(this))}:function(...e){return hr(t.apply(Nc(this),e))}}function TR(t){return typeof t=="function"?IR(t):(t instanceof IDBTransaction&&wR(t),gR(t,yR())?new Proxy(t,Uh):t)}function hr(t){if(t instanceof IDBRequest)return _R(t);if(xc.has(t))return xc.get(t);const e=TR(t);return e!==t&&(xc.set(t,e),lf.set(e,t)),e}const Nc=t=>lf.get(t);function k0(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),u=hr(o);return r&&o.addEventListener("upgradeneeded",l=>{r(hr(o.result),l.oldVersion,l.newVersion,hr(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),u.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),u}const SR=["get","getKey","getAll","getAllKeys","count"],AR=["put","add","delete","clear"],bc=new Map;function kg(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(bc.get(e))return bc.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=AR.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||SR.includes(n)))return;const s=async function(o,...u){const l=this.transaction(o,i?"readwrite":"readonly");let c=l.store;return r&&(c=c.index(u.shift())),(await Promise.all([c[n](...u),i&&l.done]))[0]};return bc.set(e,s),s}ER(t=>({...t,get:(e,n,r)=>kg(e,n)||t.get(e,n,r),has:(e,n)=>!!kg(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RR{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(CR(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function CR(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const jh="@firebase/app",Pg="0.10.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dn=new du("@firebase/app"),kR="@firebase/app-compat",PR="@firebase/analytics-compat",xR="@firebase/analytics",NR="@firebase/app-check-compat",bR="@firebase/app-check",DR="@firebase/auth",OR="@firebase/auth-compat",VR="@firebase/database",MR="@firebase/data-connect",LR="@firebase/database-compat",FR="@firebase/functions",UR="@firebase/functions-compat",jR="@firebase/installations",BR="@firebase/installations-compat",zR="@firebase/messaging",$R="@firebase/messaging-compat",HR="@firebase/performance",WR="@firebase/performance-compat",qR="@firebase/remote-config",KR="@firebase/remote-config-compat",GR="@firebase/storage",QR="@firebase/storage-compat",YR="@firebase/firestore",XR="@firebase/vertexai-preview",JR="@firebase/firestore-compat",ZR="firebase",eC="10.14.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bh="[DEFAULT]",tC={[jh]:"fire-core",[kR]:"fire-core-compat",[xR]:"fire-analytics",[PR]:"fire-analytics-compat",[bR]:"fire-app-check",[NR]:"fire-app-check-compat",[DR]:"fire-auth",[OR]:"fire-auth-compat",[VR]:"fire-rtdb",[MR]:"fire-data-connect",[LR]:"fire-rtdb-compat",[FR]:"fire-fn",[UR]:"fire-fn-compat",[jR]:"fire-iid",[BR]:"fire-iid-compat",[zR]:"fire-fcm",[$R]:"fire-fcm-compat",[HR]:"fire-perf",[WR]:"fire-perf-compat",[qR]:"fire-rc",[KR]:"fire-rc-compat",[GR]:"fire-gcs",[QR]:"fire-gcs-compat",[YR]:"fire-fst",[JR]:"fire-fst-compat",[XR]:"fire-vertex","fire-js":"fire-js",[ZR]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rl=new Map,nC=new Map,zh=new Map;function xg(t,e){try{t.container.addComponent(e)}catch(n){Dn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function hn(t){const e=t.name;if(zh.has(e))return Dn.debug(`There were multiple attempts to register component ${e}.`),!1;zh.set(e,t);for(const n of Rl.values())xg(n,t);for(const n of nC.values())xg(n,t);return!0}function ri(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function tr(t){return t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rC={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},dr=new ni("app","Firebase",rC);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iC{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Qt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw dr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ss=eC;function P0(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Bh,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw dr.create("bad-app-name",{appName:String(i)});if(n||(n=E0()),!n)throw dr.create("no-options");const s=Rl.get(i);if(s){if(Wi(n,s.options)&&Wi(r,s.config))return s;throw dr.create("duplicate-app",{appName:i})}const o=new hR(i);for(const l of zh.values())o.addComponent(l);const u=new iC(n,r,o);return Rl.set(i,u),u}function uf(t=Bh){const e=Rl.get(t);if(!e&&t===Bh&&E0())return P0();if(!e)throw dr.create("no-app",{appName:t});return e}function Lt(t,e,n){var r;let i=(r=tC[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const u=[`Unable to register library "${i}" with version "${e}":`];s&&u.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&u.push("and"),o&&u.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Dn.warn(u.join(" "));return}hn(new Qt(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sC="firebase-heartbeat-database",oC=1,To="firebase-heartbeat-store";let Dc=null;function x0(){return Dc||(Dc=k0(sC,oC,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(To)}catch(n){console.warn(n)}}}}).catch(t=>{throw dr.create("idb-open",{originalErrorMessage:t.message})})),Dc}async function aC(t){try{const n=(await x0()).transaction(To),r=await n.objectStore(To).get(N0(t));return await n.done,r}catch(e){if(e instanceof Yt)Dn.warn(e.message);else{const n=dr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Dn.warn(n.message)}}}async function Ng(t,e){try{const r=(await x0()).transaction(To,"readwrite");await r.objectStore(To).put(e,N0(t)),await r.done}catch(n){if(n instanceof Yt)Dn.warn(n.message);else{const r=dr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Dn.warn(r.message)}}}function N0(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lC=1024,uC=30*24*60*60*1e3;class cC{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new dC(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=bg();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const u=new Date(o.date).valueOf();return Date.now()-u<=uC}),this._storage.overwrite(this._heartbeatsCache))}catch(r){Dn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=bg(),{heartbeatsToSend:r,unsentEntries:i}=hC(this._heartbeatsCache.heartbeats),s=Al(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return Dn.warn(n),""}}}function bg(){return new Date().toISOString().substring(0,10)}function hC(t,e=lC){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Dg(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Dg(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class dC{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return S0()?A0().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await aC(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Ng(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Ng(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Dg(t){return Al(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fC(t){hn(new Qt("platform-logger",e=>new RR(e),"PRIVATE")),hn(new Qt("heartbeat",e=>new cC(e),"PRIVATE")),Lt(jh,Pg,t),Lt(jh,Pg,"esm2017"),Lt("fire-js","")}fC("");var Og=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Fr,b0;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(T,y){function v(){}v.prototype=y.prototype,T.D=y.prototype,T.prototype=new v,T.prototype.constructor=T,T.C=function(I,C,N){for(var R=Array(arguments.length-2),ye=2;ye<arguments.length;ye++)R[ye-2]=arguments[ye];return y.prototype[C].apply(I,R)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(T,y,v){v||(v=0);var I=Array(16);if(typeof y=="string")for(var C=0;16>C;++C)I[C]=y.charCodeAt(v++)|y.charCodeAt(v++)<<8|y.charCodeAt(v++)<<16|y.charCodeAt(v++)<<24;else for(C=0;16>C;++C)I[C]=y[v++]|y[v++]<<8|y[v++]<<16|y[v++]<<24;y=T.g[0],v=T.g[1],C=T.g[2];var N=T.g[3],R=y+(N^v&(C^N))+I[0]+3614090360&4294967295;y=v+(R<<7&4294967295|R>>>25),R=N+(C^y&(v^C))+I[1]+3905402710&4294967295,N=y+(R<<12&4294967295|R>>>20),R=C+(v^N&(y^v))+I[2]+606105819&4294967295,C=N+(R<<17&4294967295|R>>>15),R=v+(y^C&(N^y))+I[3]+3250441966&4294967295,v=C+(R<<22&4294967295|R>>>10),R=y+(N^v&(C^N))+I[4]+4118548399&4294967295,y=v+(R<<7&4294967295|R>>>25),R=N+(C^y&(v^C))+I[5]+1200080426&4294967295,N=y+(R<<12&4294967295|R>>>20),R=C+(v^N&(y^v))+I[6]+2821735955&4294967295,C=N+(R<<17&4294967295|R>>>15),R=v+(y^C&(N^y))+I[7]+4249261313&4294967295,v=C+(R<<22&4294967295|R>>>10),R=y+(N^v&(C^N))+I[8]+1770035416&4294967295,y=v+(R<<7&4294967295|R>>>25),R=N+(C^y&(v^C))+I[9]+2336552879&4294967295,N=y+(R<<12&4294967295|R>>>20),R=C+(v^N&(y^v))+I[10]+4294925233&4294967295,C=N+(R<<17&4294967295|R>>>15),R=v+(y^C&(N^y))+I[11]+2304563134&4294967295,v=C+(R<<22&4294967295|R>>>10),R=y+(N^v&(C^N))+I[12]+1804603682&4294967295,y=v+(R<<7&4294967295|R>>>25),R=N+(C^y&(v^C))+I[13]+4254626195&4294967295,N=y+(R<<12&4294967295|R>>>20),R=C+(v^N&(y^v))+I[14]+2792965006&4294967295,C=N+(R<<17&4294967295|R>>>15),R=v+(y^C&(N^y))+I[15]+1236535329&4294967295,v=C+(R<<22&4294967295|R>>>10),R=y+(C^N&(v^C))+I[1]+4129170786&4294967295,y=v+(R<<5&4294967295|R>>>27),R=N+(v^C&(y^v))+I[6]+3225465664&4294967295,N=y+(R<<9&4294967295|R>>>23),R=C+(y^v&(N^y))+I[11]+643717713&4294967295,C=N+(R<<14&4294967295|R>>>18),R=v+(N^y&(C^N))+I[0]+3921069994&4294967295,v=C+(R<<20&4294967295|R>>>12),R=y+(C^N&(v^C))+I[5]+3593408605&4294967295,y=v+(R<<5&4294967295|R>>>27),R=N+(v^C&(y^v))+I[10]+38016083&4294967295,N=y+(R<<9&4294967295|R>>>23),R=C+(y^v&(N^y))+I[15]+3634488961&4294967295,C=N+(R<<14&4294967295|R>>>18),R=v+(N^y&(C^N))+I[4]+3889429448&4294967295,v=C+(R<<20&4294967295|R>>>12),R=y+(C^N&(v^C))+I[9]+568446438&4294967295,y=v+(R<<5&4294967295|R>>>27),R=N+(v^C&(y^v))+I[14]+3275163606&4294967295,N=y+(R<<9&4294967295|R>>>23),R=C+(y^v&(N^y))+I[3]+4107603335&4294967295,C=N+(R<<14&4294967295|R>>>18),R=v+(N^y&(C^N))+I[8]+1163531501&4294967295,v=C+(R<<20&4294967295|R>>>12),R=y+(C^N&(v^C))+I[13]+2850285829&4294967295,y=v+(R<<5&4294967295|R>>>27),R=N+(v^C&(y^v))+I[2]+4243563512&4294967295,N=y+(R<<9&4294967295|R>>>23),R=C+(y^v&(N^y))+I[7]+1735328473&4294967295,C=N+(R<<14&4294967295|R>>>18),R=v+(N^y&(C^N))+I[12]+2368359562&4294967295,v=C+(R<<20&4294967295|R>>>12),R=y+(v^C^N)+I[5]+4294588738&4294967295,y=v+(R<<4&4294967295|R>>>28),R=N+(y^v^C)+I[8]+2272392833&4294967295,N=y+(R<<11&4294967295|R>>>21),R=C+(N^y^v)+I[11]+1839030562&4294967295,C=N+(R<<16&4294967295|R>>>16),R=v+(C^N^y)+I[14]+4259657740&4294967295,v=C+(R<<23&4294967295|R>>>9),R=y+(v^C^N)+I[1]+2763975236&4294967295,y=v+(R<<4&4294967295|R>>>28),R=N+(y^v^C)+I[4]+1272893353&4294967295,N=y+(R<<11&4294967295|R>>>21),R=C+(N^y^v)+I[7]+4139469664&4294967295,C=N+(R<<16&4294967295|R>>>16),R=v+(C^N^y)+I[10]+3200236656&4294967295,v=C+(R<<23&4294967295|R>>>9),R=y+(v^C^N)+I[13]+681279174&4294967295,y=v+(R<<4&4294967295|R>>>28),R=N+(y^v^C)+I[0]+3936430074&4294967295,N=y+(R<<11&4294967295|R>>>21),R=C+(N^y^v)+I[3]+3572445317&4294967295,C=N+(R<<16&4294967295|R>>>16),R=v+(C^N^y)+I[6]+76029189&4294967295,v=C+(R<<23&4294967295|R>>>9),R=y+(v^C^N)+I[9]+3654602809&4294967295,y=v+(R<<4&4294967295|R>>>28),R=N+(y^v^C)+I[12]+3873151461&4294967295,N=y+(R<<11&4294967295|R>>>21),R=C+(N^y^v)+I[15]+530742520&4294967295,C=N+(R<<16&4294967295|R>>>16),R=v+(C^N^y)+I[2]+3299628645&4294967295,v=C+(R<<23&4294967295|R>>>9),R=y+(C^(v|~N))+I[0]+4096336452&4294967295,y=v+(R<<6&4294967295|R>>>26),R=N+(v^(y|~C))+I[7]+1126891415&4294967295,N=y+(R<<10&4294967295|R>>>22),R=C+(y^(N|~v))+I[14]+2878612391&4294967295,C=N+(R<<15&4294967295|R>>>17),R=v+(N^(C|~y))+I[5]+4237533241&4294967295,v=C+(R<<21&4294967295|R>>>11),R=y+(C^(v|~N))+I[12]+1700485571&4294967295,y=v+(R<<6&4294967295|R>>>26),R=N+(v^(y|~C))+I[3]+2399980690&4294967295,N=y+(R<<10&4294967295|R>>>22),R=C+(y^(N|~v))+I[10]+4293915773&4294967295,C=N+(R<<15&4294967295|R>>>17),R=v+(N^(C|~y))+I[1]+2240044497&4294967295,v=C+(R<<21&4294967295|R>>>11),R=y+(C^(v|~N))+I[8]+1873313359&4294967295,y=v+(R<<6&4294967295|R>>>26),R=N+(v^(y|~C))+I[15]+4264355552&4294967295,N=y+(R<<10&4294967295|R>>>22),R=C+(y^(N|~v))+I[6]+2734768916&4294967295,C=N+(R<<15&4294967295|R>>>17),R=v+(N^(C|~y))+I[13]+1309151649&4294967295,v=C+(R<<21&4294967295|R>>>11),R=y+(C^(v|~N))+I[4]+4149444226&4294967295,y=v+(R<<6&4294967295|R>>>26),R=N+(v^(y|~C))+I[11]+3174756917&4294967295,N=y+(R<<10&4294967295|R>>>22),R=C+(y^(N|~v))+I[2]+718787259&4294967295,C=N+(R<<15&4294967295|R>>>17),R=v+(N^(C|~y))+I[9]+3951481745&4294967295,T.g[0]=T.g[0]+y&4294967295,T.g[1]=T.g[1]+(C+(R<<21&4294967295|R>>>11))&4294967295,T.g[2]=T.g[2]+C&4294967295,T.g[3]=T.g[3]+N&4294967295}r.prototype.u=function(T,y){y===void 0&&(y=T.length);for(var v=y-this.blockSize,I=this.B,C=this.h,N=0;N<y;){if(C==0)for(;N<=v;)i(this,T,N),N+=this.blockSize;if(typeof T=="string"){for(;N<y;)if(I[C++]=T.charCodeAt(N++),C==this.blockSize){i(this,I),C=0;break}}else for(;N<y;)if(I[C++]=T[N++],C==this.blockSize){i(this,I),C=0;break}}this.h=C,this.o+=y},r.prototype.v=function(){var T=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);T[0]=128;for(var y=1;y<T.length-8;++y)T[y]=0;var v=8*this.o;for(y=T.length-8;y<T.length;++y)T[y]=v&255,v/=256;for(this.u(T),T=Array(16),y=v=0;4>y;++y)for(var I=0;32>I;I+=8)T[v++]=this.g[y]>>>I&255;return T};function s(T,y){var v=u;return Object.prototype.hasOwnProperty.call(v,T)?v[T]:v[T]=y(T)}function o(T,y){this.h=y;for(var v=[],I=!0,C=T.length-1;0<=C;C--){var N=T[C]|0;I&&N==y||(v[C]=N,I=!1)}this.g=v}var u={};function l(T){return-128<=T&&128>T?s(T,function(y){return new o([y|0],0>y?-1:0)}):new o([T|0],0>T?-1:0)}function c(T){if(isNaN(T)||!isFinite(T))return p;if(0>T)return P(c(-T));for(var y=[],v=1,I=0;T>=v;I++)y[I]=T/v|0,v*=4294967296;return new o(y,0)}function d(T,y){if(T.length==0)throw Error("number format error: empty string");if(y=y||10,2>y||36<y)throw Error("radix out of range: "+y);if(T.charAt(0)=="-")return P(d(T.substring(1),y));if(0<=T.indexOf("-"))throw Error('number format error: interior "-" character');for(var v=c(Math.pow(y,8)),I=p,C=0;C<T.length;C+=8){var N=Math.min(8,T.length-C),R=parseInt(T.substring(C,C+N),y);8>N?(N=c(Math.pow(y,N)),I=I.j(N).add(c(R))):(I=I.j(v),I=I.add(c(R)))}return I}var p=l(0),m=l(1),w=l(16777216);t=o.prototype,t.m=function(){if(x(this))return-P(this).m();for(var T=0,y=1,v=0;v<this.g.length;v++){var I=this.i(v);T+=(0<=I?I:4294967296+I)*y,y*=4294967296}return T},t.toString=function(T){if(T=T||10,2>T||36<T)throw Error("radix out of range: "+T);if(A(this))return"0";if(x(this))return"-"+P(this).toString(T);for(var y=c(Math.pow(T,6)),v=this,I="";;){var C=D(v,y).g;v=S(v,C.j(y));var N=((0<v.g.length?v.g[0]:v.h)>>>0).toString(T);if(v=C,A(v))return N+I;for(;6>N.length;)N="0"+N;I=N+I}},t.i=function(T){return 0>T?0:T<this.g.length?this.g[T]:this.h};function A(T){if(T.h!=0)return!1;for(var y=0;y<T.g.length;y++)if(T.g[y]!=0)return!1;return!0}function x(T){return T.h==-1}t.l=function(T){return T=S(this,T),x(T)?-1:A(T)?0:1};function P(T){for(var y=T.g.length,v=[],I=0;I<y;I++)v[I]=~T.g[I];return new o(v,~T.h).add(m)}t.abs=function(){return x(this)?P(this):this},t.add=function(T){for(var y=Math.max(this.g.length,T.g.length),v=[],I=0,C=0;C<=y;C++){var N=I+(this.i(C)&65535)+(T.i(C)&65535),R=(N>>>16)+(this.i(C)>>>16)+(T.i(C)>>>16);I=R>>>16,N&=65535,R&=65535,v[C]=R<<16|N}return new o(v,v[v.length-1]&-2147483648?-1:0)};function S(T,y){return T.add(P(y))}t.j=function(T){if(A(this)||A(T))return p;if(x(this))return x(T)?P(this).j(P(T)):P(P(this).j(T));if(x(T))return P(this.j(P(T)));if(0>this.l(w)&&0>T.l(w))return c(this.m()*T.m());for(var y=this.g.length+T.g.length,v=[],I=0;I<2*y;I++)v[I]=0;for(I=0;I<this.g.length;I++)for(var C=0;C<T.g.length;C++){var N=this.i(I)>>>16,R=this.i(I)&65535,ye=T.i(C)>>>16,Ce=T.i(C)&65535;v[2*I+2*C]+=R*Ce,_(v,2*I+2*C),v[2*I+2*C+1]+=N*Ce,_(v,2*I+2*C+1),v[2*I+2*C+1]+=R*ye,_(v,2*I+2*C+1),v[2*I+2*C+2]+=N*ye,_(v,2*I+2*C+2)}for(I=0;I<y;I++)v[I]=v[2*I+1]<<16|v[2*I];for(I=y;I<2*y;I++)v[I]=0;return new o(v,0)};function _(T,y){for(;(T[y]&65535)!=T[y];)T[y+1]+=T[y]>>>16,T[y]&=65535,y++}function E(T,y){this.g=T,this.h=y}function D(T,y){if(A(y))throw Error("division by zero");if(A(T))return new E(p,p);if(x(T))return y=D(P(T),y),new E(P(y.g),P(y.h));if(x(y))return y=D(T,P(y)),new E(P(y.g),y.h);if(30<T.g.length){if(x(T)||x(y))throw Error("slowDivide_ only works with positive integers.");for(var v=m,I=y;0>=I.l(T);)v=V(v),I=V(I);var C=M(v,1),N=M(I,1);for(I=M(I,2),v=M(v,2);!A(I);){var R=N.add(I);0>=R.l(T)&&(C=C.add(v),N=R),I=M(I,1),v=M(v,1)}return y=S(T,C.j(y)),new E(C,y)}for(C=p;0<=T.l(y);){for(v=Math.max(1,Math.floor(T.m()/y.m())),I=Math.ceil(Math.log(v)/Math.LN2),I=48>=I?1:Math.pow(2,I-48),N=c(v),R=N.j(y);x(R)||0<R.l(T);)v-=I,N=c(v),R=N.j(y);A(N)&&(N=m),C=C.add(N),T=S(T,R)}return new E(C,T)}t.A=function(T){return D(this,T).h},t.and=function(T){for(var y=Math.max(this.g.length,T.g.length),v=[],I=0;I<y;I++)v[I]=this.i(I)&T.i(I);return new o(v,this.h&T.h)},t.or=function(T){for(var y=Math.max(this.g.length,T.g.length),v=[],I=0;I<y;I++)v[I]=this.i(I)|T.i(I);return new o(v,this.h|T.h)},t.xor=function(T){for(var y=Math.max(this.g.length,T.g.length),v=[],I=0;I<y;I++)v[I]=this.i(I)^T.i(I);return new o(v,this.h^T.h)};function V(T){for(var y=T.g.length+1,v=[],I=0;I<y;I++)v[I]=T.i(I)<<1|T.i(I-1)>>>31;return new o(v,T.h)}function M(T,y){var v=y>>5;y%=32;for(var I=T.g.length-v,C=[],N=0;N<I;N++)C[N]=0<y?T.i(N+v)>>>y|T.i(N+v+1)<<32-y:T.i(N+v);return new o(C,T.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,b0=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=c,o.fromString=d,Fr=o}).apply(typeof Og<"u"?Og:typeof self<"u"?self:typeof window<"u"?window:{});var ka=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var D0,Ls,O0,qa,$h,V0,M0,L0;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,h,f){return a==Array.prototype||a==Object.prototype||(a[h]=f.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof ka=="object"&&ka];for(var h=0;h<a.length;++h){var f=a[h];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var r=n(this);function i(a,h){if(h)e:{var f=r;a=a.split(".");for(var g=0;g<a.length-1;g++){var b=a[g];if(!(b in f))break e;f=f[b]}a=a[a.length-1],g=f[a],h=h(g),h!=g&&h!=null&&e(f,a,{configurable:!0,writable:!0,value:h})}}function s(a,h){a instanceof String&&(a+="");var f=0,g=!1,b={next:function(){if(!g&&f<a.length){var O=f++;return{value:h(O,a[O]),done:!1}}return g=!0,{done:!0,value:void 0}}};return b[Symbol.iterator]=function(){return b},b}i("Array.prototype.values",function(a){return a||function(){return s(this,function(h,f){return f})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},u=this||self;function l(a){var h=typeof a;return h=h!="object"?h:a?Array.isArray(a)?"array":h:"null",h=="array"||h=="object"&&typeof a.length=="number"}function c(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function d(a,h,f){return a.call.apply(a.bind,arguments)}function p(a,h,f){if(!a)throw Error();if(2<arguments.length){var g=Array.prototype.slice.call(arguments,2);return function(){var b=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(b,g),a.apply(h,b)}}return function(){return a.apply(h,arguments)}}function m(a,h,f){return m=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?d:p,m.apply(null,arguments)}function w(a,h){var f=Array.prototype.slice.call(arguments,1);return function(){var g=f.slice();return g.push.apply(g,arguments),a.apply(this,g)}}function A(a,h){function f(){}f.prototype=h.prototype,a.aa=h.prototype,a.prototype=new f,a.prototype.constructor=a,a.Qb=function(g,b,O){for(var B=Array(arguments.length-2),ce=2;ce<arguments.length;ce++)B[ce-2]=arguments[ce];return h.prototype[b].apply(g,B)}}function x(a){const h=a.length;if(0<h){const f=Array(h);for(let g=0;g<h;g++)f[g]=a[g];return f}return[]}function P(a,h){for(let f=1;f<arguments.length;f++){const g=arguments[f];if(l(g)){const b=a.length||0,O=g.length||0;a.length=b+O;for(let B=0;B<O;B++)a[b+B]=g[B]}else a.push(g)}}class S{constructor(h,f){this.i=h,this.j=f,this.h=0,this.g=null}get(){let h;return 0<this.h?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function _(a){return/^[\s\xa0]*$/.test(a)}function E(){var a=u.navigator;return a&&(a=a.userAgent)?a:""}function D(a){return D[" "](a),a}D[" "]=function(){};var V=E().indexOf("Gecko")!=-1&&!(E().toLowerCase().indexOf("webkit")!=-1&&E().indexOf("Edge")==-1)&&!(E().indexOf("Trident")!=-1||E().indexOf("MSIE")!=-1)&&E().indexOf("Edge")==-1;function M(a,h,f){for(const g in a)h.call(f,a[g],g,a)}function T(a,h){for(const f in a)h.call(void 0,a[f],f,a)}function y(a){const h={};for(const f in a)h[f]=a[f];return h}const v="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function I(a,h){let f,g;for(let b=1;b<arguments.length;b++){g=arguments[b];for(f in g)a[f]=g[f];for(let O=0;O<v.length;O++)f=v[O],Object.prototype.hasOwnProperty.call(g,f)&&(a[f]=g[f])}}function C(a){var h=1;a=a.split(":");const f=[];for(;0<h&&a.length;)f.push(a.shift()),h--;return a.length&&f.push(a.join(":")),f}function N(a){u.setTimeout(()=>{throw a},0)}function R(){var a=K;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class ye{constructor(){this.h=this.g=null}add(h,f){const g=Ce.get();g.set(h,f),this.h?this.h.next=g:this.g=g,this.h=g}}var Ce=new S(()=>new bt,a=>a.reset());class bt{constructor(){this.next=this.g=this.h=null}set(h,f){this.h=h,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let Be,z=!1,K=new ye,Y=()=>{const a=u.Promise.resolve(void 0);Be=()=>{a.then(de)}};var de=()=>{for(var a;a=R();){try{a.h.call(a.g)}catch(f){N(f)}var h=Ce;h.j(a),100>h.h&&(h.h++,a.next=h.g,h.g=a)}z=!1};function ae(){this.s=this.s,this.C=this.C}ae.prototype.s=!1,ae.prototype.ma=function(){this.s||(this.s=!0,this.N())},ae.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ve(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}ve.prototype.h=function(){this.defaultPrevented=!0};var jt=function(){if(!u.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const f=()=>{};u.addEventListener("test",f,h),u.removeEventListener("test",f,h)}catch{}return a}();function mn(a,h){if(ve.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var f=this.type=a.type,g=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget){if(V){e:{try{D(h.nodeName);var b=!0;break e}catch{}b=!1}b||(h=null)}}else f=="mouseover"?h=a.fromElement:f=="mouseout"&&(h=a.toElement);this.relatedTarget=h,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:gn[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&mn.aa.h.call(this)}}A(mn,ve);var gn={2:"touch",3:"pen",4:"mouse"};mn.prototype.h=function(){mn.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var yn="closure_listenable_"+(1e6*Math.random()|0),dI=0;function fI(a,h,f,g,b){this.listener=a,this.proxy=null,this.src=h,this.type=f,this.capture=!!g,this.ha=b,this.key=++dI,this.da=this.fa=!1}function Ko(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Go(a){this.src=a,this.g={},this.h=0}Go.prototype.add=function(a,h,f,g,b){var O=a.toString();a=this.g[O],a||(a=this.g[O]=[],this.h++);var B=Ou(a,h,g,b);return-1<B?(h=a[B],f||(h.fa=!1)):(h=new fI(h,this.src,O,!!g,b),h.fa=f,a.push(h)),h};function Du(a,h){var f=h.type;if(f in a.g){var g=a.g[f],b=Array.prototype.indexOf.call(g,h,void 0),O;(O=0<=b)&&Array.prototype.splice.call(g,b,1),O&&(Ko(h),a.g[f].length==0&&(delete a.g[f],a.h--))}}function Ou(a,h,f,g){for(var b=0;b<a.length;++b){var O=a[b];if(!O.da&&O.listener==h&&O.capture==!!f&&O.ha==g)return b}return-1}var Vu="closure_lm_"+(1e6*Math.random()|0),Mu={};function rp(a,h,f,g,b){if(Array.isArray(h)){for(var O=0;O<h.length;O++)rp(a,h[O],f,g,b);return null}return f=op(f),a&&a[yn]?a.K(h,f,c(g)?!!g.capture:!1,b):pI(a,h,f,!1,g,b)}function pI(a,h,f,g,b,O){if(!h)throw Error("Invalid event type");var B=c(b)?!!b.capture:!!b,ce=Fu(a);if(ce||(a[Vu]=ce=new Go(a)),f=ce.add(h,f,g,B,O),f.proxy)return f;if(g=mI(),f.proxy=g,g.src=a,g.listener=f,a.addEventListener)jt||(b=B),b===void 0&&(b=!1),a.addEventListener(h.toString(),g,b);else if(a.attachEvent)a.attachEvent(sp(h.toString()),g);else if(a.addListener&&a.removeListener)a.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return f}function mI(){function a(f){return h.call(a.src,a.listener,f)}const h=gI;return a}function ip(a,h,f,g,b){if(Array.isArray(h))for(var O=0;O<h.length;O++)ip(a,h[O],f,g,b);else g=c(g)?!!g.capture:!!g,f=op(f),a&&a[yn]?(a=a.i,h=String(h).toString(),h in a.g&&(O=a.g[h],f=Ou(O,f,g,b),-1<f&&(Ko(O[f]),Array.prototype.splice.call(O,f,1),O.length==0&&(delete a.g[h],a.h--)))):a&&(a=Fu(a))&&(h=a.g[h.toString()],a=-1,h&&(a=Ou(h,f,g,b)),(f=-1<a?h[a]:null)&&Lu(f))}function Lu(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[yn])Du(h.i,a);else{var f=a.type,g=a.proxy;h.removeEventListener?h.removeEventListener(f,g,a.capture):h.detachEvent?h.detachEvent(sp(f),g):h.addListener&&h.removeListener&&h.removeListener(g),(f=Fu(h))?(Du(f,a),f.h==0&&(f.src=null,h[Vu]=null)):Ko(a)}}}function sp(a){return a in Mu?Mu[a]:Mu[a]="on"+a}function gI(a,h){if(a.da)a=!0;else{h=new mn(h,this);var f=a.listener,g=a.ha||a.src;a.fa&&Lu(a),a=f.call(g,h)}return a}function Fu(a){return a=a[Vu],a instanceof Go?a:null}var Uu="__closure_events_fn_"+(1e9*Math.random()>>>0);function op(a){return typeof a=="function"?a:(a[Uu]||(a[Uu]=function(h){return a.handleEvent(h)}),a[Uu])}function Xe(){ae.call(this),this.i=new Go(this),this.M=this,this.F=null}A(Xe,ae),Xe.prototype[yn]=!0,Xe.prototype.removeEventListener=function(a,h,f,g){ip(this,a,h,f,g)};function ut(a,h){var f,g=a.F;if(g)for(f=[];g;g=g.F)f.push(g);if(a=a.M,g=h.type||h,typeof h=="string")h=new ve(h,a);else if(h instanceof ve)h.target=h.target||a;else{var b=h;h=new ve(g,a),I(h,b)}if(b=!0,f)for(var O=f.length-1;0<=O;O--){var B=h.g=f[O];b=Qo(B,g,!0,h)&&b}if(B=h.g=a,b=Qo(B,g,!0,h)&&b,b=Qo(B,g,!1,h)&&b,f)for(O=0;O<f.length;O++)B=h.g=f[O],b=Qo(B,g,!1,h)&&b}Xe.prototype.N=function(){if(Xe.aa.N.call(this),this.i){var a=this.i,h;for(h in a.g){for(var f=a.g[h],g=0;g<f.length;g++)Ko(f[g]);delete a.g[h],a.h--}}this.F=null},Xe.prototype.K=function(a,h,f,g){return this.i.add(String(a),h,!1,f,g)},Xe.prototype.L=function(a,h,f,g){return this.i.add(String(a),h,!0,f,g)};function Qo(a,h,f,g){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();for(var b=!0,O=0;O<h.length;++O){var B=h[O];if(B&&!B.da&&B.capture==f){var ce=B.listener,ze=B.ha||B.src;B.fa&&Du(a.i,B),b=ce.call(ze,g)!==!1&&b}}return b&&!g.defaultPrevented}function ap(a,h,f){if(typeof a=="function")f&&(a=m(a,f));else if(a&&typeof a.handleEvent=="function")a=m(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(h)?-1:u.setTimeout(a,h||0)}function lp(a){a.g=ap(()=>{a.g=null,a.i&&(a.i=!1,lp(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class yI extends ae{constructor(h,f){super(),this.m=h,this.l=f,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:lp(this)}N(){super.N(),this.g&&(u.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function cs(a){ae.call(this),this.h=a,this.g={}}A(cs,ae);var up=[];function cp(a){M(a.g,function(h,f){this.g.hasOwnProperty(f)&&Lu(h)},a),a.g={}}cs.prototype.N=function(){cs.aa.N.call(this),cp(this)},cs.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ju=u.JSON.stringify,vI=u.JSON.parse,_I=class{stringify(a){return u.JSON.stringify(a,void 0)}parse(a){return u.JSON.parse(a,void 0)}};function Bu(){}Bu.prototype.h=null;function hp(a){return a.h||(a.h=a.i())}function dp(){}var hs={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function zu(){ve.call(this,"d")}A(zu,ve);function $u(){ve.call(this,"c")}A($u,ve);var Tr={},fp=null;function Yo(){return fp=fp||new Xe}Tr.La="serverreachability";function pp(a){ve.call(this,Tr.La,a)}A(pp,ve);function ds(a){const h=Yo();ut(h,new pp(h))}Tr.STAT_EVENT="statevent";function mp(a,h){ve.call(this,Tr.STAT_EVENT,a),this.stat=h}A(mp,ve);function ct(a){const h=Yo();ut(h,new mp(h,a))}Tr.Ma="timingevent";function gp(a,h){ve.call(this,Tr.Ma,a),this.size=h}A(gp,ve);function fs(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return u.setTimeout(function(){a()},h)}function ps(){this.g=!0}ps.prototype.xa=function(){this.g=!1};function wI(a,h,f,g,b,O){a.info(function(){if(a.g)if(O)for(var B="",ce=O.split("&"),ze=0;ze<ce.length;ze++){var se=ce[ze].split("=");if(1<se.length){var Je=se[0];se=se[1];var Ze=Je.split("_");B=2<=Ze.length&&Ze[1]=="type"?B+(Je+"="+se+"&"):B+(Je+"=redacted&")}}else B=null;else B=O;return"XMLHTTP REQ ("+g+") [attempt "+b+"]: "+h+`
`+f+`
`+B})}function EI(a,h,f,g,b,O,B){a.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+b+"]: "+h+`
`+f+`
`+O+" "+B})}function oi(a,h,f,g){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+TI(a,f)+(g?" "+g:"")})}function II(a,h){a.info(function(){return"TIMEOUT: "+h})}ps.prototype.info=function(){};function TI(a,h){if(!a.g)return h;if(!h)return null;try{var f=JSON.parse(h);if(f){for(a=0;a<f.length;a++)if(Array.isArray(f[a])){var g=f[a];if(!(2>g.length)){var b=g[1];if(Array.isArray(b)&&!(1>b.length)){var O=b[0];if(O!="noop"&&O!="stop"&&O!="close")for(var B=1;B<b.length;B++)b[B]=""}}}}return ju(f)}catch{return h}}var Xo={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},yp={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Hu;function Jo(){}A(Jo,Bu),Jo.prototype.g=function(){return new XMLHttpRequest},Jo.prototype.i=function(){return{}},Hu=new Jo;function Un(a,h,f,g){this.j=a,this.i=h,this.l=f,this.R=g||1,this.U=new cs(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new vp}function vp(){this.i=null,this.g="",this.h=!1}var _p={},Wu={};function qu(a,h,f){a.L=1,a.v=na(vn(h)),a.m=f,a.P=!0,wp(a,null)}function wp(a,h){a.F=Date.now(),Zo(a),a.A=vn(a.v);var f=a.A,g=a.R;Array.isArray(g)||(g=[String(g)]),Op(f.i,"t",g),a.C=0,f=a.j.J,a.h=new vp,a.g=Jp(a.j,f?h:null,!a.m),0<a.O&&(a.M=new yI(m(a.Y,a,a.g),a.O)),h=a.U,f=a.g,g=a.ca;var b="readystatechange";Array.isArray(b)||(b&&(up[0]=b.toString()),b=up);for(var O=0;O<b.length;O++){var B=rp(f,b[O],g||h.handleEvent,!1,h.h||h);if(!B)break;h.g[B.key]=B}h=a.H?y(a.H):{},a.m?(a.u||(a.u="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,h)):(a.u="GET",a.g.ea(a.A,a.u,null,h)),ds(),wI(a.i,a.u,a.A,a.l,a.R,a.m)}Un.prototype.ca=function(a){a=a.target;const h=this.M;h&&_n(a)==3?h.j():this.Y(a)},Un.prototype.Y=function(a){try{if(a==this.g)e:{const Ze=_n(this.g);var h=this.g.Ba();const ui=this.g.Z();if(!(3>Ze)&&(Ze!=3||this.g&&(this.h.h||this.g.oa()||Bp(this.g)))){this.J||Ze!=4||h==7||(h==8||0>=ui?ds(3):ds(2)),Ku(this);var f=this.g.Z();this.X=f;t:if(Ep(this)){var g=Bp(this.g);a="";var b=g.length,O=_n(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Sr(this),ms(this);var B="";break t}this.h.i=new u.TextDecoder}for(h=0;h<b;h++)this.h.h=!0,a+=this.h.i.decode(g[h],{stream:!(O&&h==b-1)});g.length=0,this.h.g+=a,this.C=0,B=this.h.g}else B=this.g.oa();if(this.o=f==200,EI(this.i,this.u,this.A,this.l,this.R,Ze,f),this.o){if(this.T&&!this.K){t:{if(this.g){var ce,ze=this.g;if((ce=ze.g?ze.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!_(ce)){var se=ce;break t}}se=null}if(f=se)oi(this.i,this.l,f,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Gu(this,f);else{this.o=!1,this.s=3,ct(12),Sr(this),ms(this);break e}}if(this.P){f=!0;let Bt;for(;!this.J&&this.C<B.length;)if(Bt=SI(this,B),Bt==Wu){Ze==4&&(this.s=4,ct(14),f=!1),oi(this.i,this.l,null,"[Incomplete Response]");break}else if(Bt==_p){this.s=4,ct(15),oi(this.i,this.l,B,"[Invalid Chunk]"),f=!1;break}else oi(this.i,this.l,Bt,null),Gu(this,Bt);if(Ep(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Ze!=4||B.length!=0||this.h.h||(this.s=1,ct(16),f=!1),this.o=this.o&&f,!f)oi(this.i,this.l,B,"[Invalid Chunked Response]"),Sr(this),ms(this);else if(0<B.length&&!this.W){this.W=!0;var Je=this.j;Je.g==this&&Je.ba&&!Je.M&&(Je.j.info("Great, no buffering proxy detected. Bytes received: "+B.length),ec(Je),Je.M=!0,ct(11))}}else oi(this.i,this.l,B,null),Gu(this,B);Ze==4&&Sr(this),this.o&&!this.J&&(Ze==4?Gp(this.j,this):(this.o=!1,Zo(this)))}else BI(this.g),f==400&&0<B.indexOf("Unknown SID")?(this.s=3,ct(12)):(this.s=0,ct(13)),Sr(this),ms(this)}}}catch{}finally{}};function Ep(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function SI(a,h){var f=a.C,g=h.indexOf(`
`,f);return g==-1?Wu:(f=Number(h.substring(f,g)),isNaN(f)?_p:(g+=1,g+f>h.length?Wu:(h=h.slice(g,g+f),a.C=g+f,h)))}Un.prototype.cancel=function(){this.J=!0,Sr(this)};function Zo(a){a.S=Date.now()+a.I,Ip(a,a.I)}function Ip(a,h){if(a.B!=null)throw Error("WatchDog timer not null");a.B=fs(m(a.ba,a),h)}function Ku(a){a.B&&(u.clearTimeout(a.B),a.B=null)}Un.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(II(this.i,this.A),this.L!=2&&(ds(),ct(17)),Sr(this),this.s=2,ms(this)):Ip(this,this.S-a)};function ms(a){a.j.G==0||a.J||Gp(a.j,a)}function Sr(a){Ku(a);var h=a.M;h&&typeof h.ma=="function"&&h.ma(),a.M=null,cp(a.U),a.g&&(h=a.g,a.g=null,h.abort(),h.ma())}function Gu(a,h){try{var f=a.j;if(f.G!=0&&(f.g==a||Qu(f.h,a))){if(!a.K&&Qu(f.h,a)&&f.G==3){try{var g=f.Da.g.parse(h)}catch{g=null}if(Array.isArray(g)&&g.length==3){var b=g;if(b[0]==0){e:if(!f.u){if(f.g)if(f.g.F+3e3<a.F)la(f),oa(f);else break e;Zu(f),ct(18)}}else f.za=b[1],0<f.za-f.T&&37500>b[2]&&f.F&&f.v==0&&!f.C&&(f.C=fs(m(f.Za,f),6e3));if(1>=Ap(f.h)&&f.ca){try{f.ca()}catch{}f.ca=void 0}}else Rr(f,11)}else if((a.K||f.g==a)&&la(f),!_(h))for(b=f.Da.g.parse(h),h=0;h<b.length;h++){let se=b[h];if(f.T=se[0],se=se[1],f.G==2)if(se[0]=="c"){f.K=se[1],f.ia=se[2];const Je=se[3];Je!=null&&(f.la=Je,f.j.info("VER="+f.la));const Ze=se[4];Ze!=null&&(f.Aa=Ze,f.j.info("SVER="+f.Aa));const ui=se[5];ui!=null&&typeof ui=="number"&&0<ui&&(g=1.5*ui,f.L=g,f.j.info("backChannelRequestTimeoutMs_="+g)),g=f;const Bt=a.g;if(Bt){const ca=Bt.g?Bt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ca){var O=g.h;O.g||ca.indexOf("spdy")==-1&&ca.indexOf("quic")==-1&&ca.indexOf("h2")==-1||(O.j=O.l,O.g=new Set,O.h&&(Yu(O,O.h),O.h=null))}if(g.D){const tc=Bt.g?Bt.g.getResponseHeader("X-HTTP-Session-Id"):null;tc&&(g.ya=tc,fe(g.I,g.D,tc))}}f.G=3,f.l&&f.l.ua(),f.ba&&(f.R=Date.now()-a.F,f.j.info("Handshake RTT: "+f.R+"ms")),g=f;var B=a;if(g.qa=Xp(g,g.J?g.ia:null,g.W),B.K){Rp(g.h,B);var ce=B,ze=g.L;ze&&(ce.I=ze),ce.B&&(Ku(ce),Zo(ce)),g.g=B}else qp(g);0<f.i.length&&aa(f)}else se[0]!="stop"&&se[0]!="close"||Rr(f,7);else f.G==3&&(se[0]=="stop"||se[0]=="close"?se[0]=="stop"?Rr(f,7):Ju(f):se[0]!="noop"&&f.l&&f.l.ta(se),f.v=0)}}ds(4)}catch{}}var AI=class{constructor(a,h){this.g=a,this.map=h}};function Tp(a){this.l=a||10,u.PerformanceNavigationTiming?(a=u.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(u.chrome&&u.chrome.loadTimes&&u.chrome.loadTimes()&&u.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Sp(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Ap(a){return a.h?1:a.g?a.g.size:0}function Qu(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function Yu(a,h){a.g?a.g.add(h):a.h=h}function Rp(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}Tp.prototype.cancel=function(){if(this.i=Cp(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function Cp(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const f of a.g.values())h=h.concat(f.D);return h}return x(a.i)}function RI(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(l(a)){for(var h=[],f=a.length,g=0;g<f;g++)h.push(a[g]);return h}h=[],f=0;for(g in a)h[f++]=a[g];return h}function CI(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(l(a)||typeof a=="string"){var h=[];a=a.length;for(var f=0;f<a;f++)h.push(f);return h}h=[],f=0;for(const g in a)h[f++]=g;return h}}}function kp(a,h){if(a.forEach&&typeof a.forEach=="function")a.forEach(h,void 0);else if(l(a)||typeof a=="string")Array.prototype.forEach.call(a,h,void 0);else for(var f=CI(a),g=RI(a),b=g.length,O=0;O<b;O++)h.call(void 0,g[O],f&&f[O],a)}var Pp=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function kI(a,h){if(a){a=a.split("&");for(var f=0;f<a.length;f++){var g=a[f].indexOf("="),b=null;if(0<=g){var O=a[f].substring(0,g);b=a[f].substring(g+1)}else O=a[f];h(O,b?decodeURIComponent(b.replace(/\+/g," ")):"")}}}function Ar(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof Ar){this.h=a.h,ea(this,a.j),this.o=a.o,this.g=a.g,ta(this,a.s),this.l=a.l;var h=a.i,f=new vs;f.i=h.i,h.g&&(f.g=new Map(h.g),f.h=h.h),xp(this,f),this.m=a.m}else a&&(h=String(a).match(Pp))?(this.h=!1,ea(this,h[1]||"",!0),this.o=gs(h[2]||""),this.g=gs(h[3]||"",!0),ta(this,h[4]),this.l=gs(h[5]||"",!0),xp(this,h[6]||"",!0),this.m=gs(h[7]||"")):(this.h=!1,this.i=new vs(null,this.h))}Ar.prototype.toString=function(){var a=[],h=this.j;h&&a.push(ys(h,Np,!0),":");var f=this.g;return(f||h=="file")&&(a.push("//"),(h=this.o)&&a.push(ys(h,Np,!0),"@"),a.push(encodeURIComponent(String(f)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.s,f!=null&&a.push(":",String(f))),(f=this.l)&&(this.g&&f.charAt(0)!="/"&&a.push("/"),a.push(ys(f,f.charAt(0)=="/"?NI:xI,!0))),(f=this.i.toString())&&a.push("?",f),(f=this.m)&&a.push("#",ys(f,DI)),a.join("")};function vn(a){return new Ar(a)}function ea(a,h,f){a.j=f?gs(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function ta(a,h){if(h){if(h=Number(h),isNaN(h)||0>h)throw Error("Bad port number "+h);a.s=h}else a.s=null}function xp(a,h,f){h instanceof vs?(a.i=h,OI(a.i,a.h)):(f||(h=ys(h,bI)),a.i=new vs(h,a.h))}function fe(a,h,f){a.i.set(h,f)}function na(a){return fe(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function gs(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function ys(a,h,f){return typeof a=="string"?(a=encodeURI(a).replace(h,PI),f&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function PI(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Np=/[#\/\?@]/g,xI=/[#\?:]/g,NI=/[#\?]/g,bI=/[#\?@]/g,DI=/#/g;function vs(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function jn(a){a.g||(a.g=new Map,a.h=0,a.i&&kI(a.i,function(h,f){a.add(decodeURIComponent(h.replace(/\+/g," ")),f)}))}t=vs.prototype,t.add=function(a,h){jn(this),this.i=null,a=ai(this,a);var f=this.g.get(a);return f||this.g.set(a,f=[]),f.push(h),this.h+=1,this};function bp(a,h){jn(a),h=ai(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function Dp(a,h){return jn(a),h=ai(a,h),a.g.has(h)}t.forEach=function(a,h){jn(this),this.g.forEach(function(f,g){f.forEach(function(b){a.call(h,b,g,this)},this)},this)},t.na=function(){jn(this);const a=Array.from(this.g.values()),h=Array.from(this.g.keys()),f=[];for(let g=0;g<h.length;g++){const b=a[g];for(let O=0;O<b.length;O++)f.push(h[g])}return f},t.V=function(a){jn(this);let h=[];if(typeof a=="string")Dp(this,a)&&(h=h.concat(this.g.get(ai(this,a))));else{a=Array.from(this.g.values());for(let f=0;f<a.length;f++)h=h.concat(a[f])}return h},t.set=function(a,h){return jn(this),this.i=null,a=ai(this,a),Dp(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},t.get=function(a,h){return a?(a=this.V(a),0<a.length?String(a[0]):h):h};function Op(a,h,f){bp(a,h),0<f.length&&(a.i=null,a.g.set(ai(a,h),x(f)),a.h+=f.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(var f=0;f<h.length;f++){var g=h[f];const O=encodeURIComponent(String(g)),B=this.V(g);for(g=0;g<B.length;g++){var b=O;B[g]!==""&&(b+="="+encodeURIComponent(String(B[g]))),a.push(b)}}return this.i=a.join("&")};function ai(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function OI(a,h){h&&!a.j&&(jn(a),a.i=null,a.g.forEach(function(f,g){var b=g.toLowerCase();g!=b&&(bp(this,g),Op(this,b,f))},a)),a.j=h}function VI(a,h){const f=new ps;if(u.Image){const g=new Image;g.onload=w(Bn,f,"TestLoadImage: loaded",!0,h,g),g.onerror=w(Bn,f,"TestLoadImage: error",!1,h,g),g.onabort=w(Bn,f,"TestLoadImage: abort",!1,h,g),g.ontimeout=w(Bn,f,"TestLoadImage: timeout",!1,h,g),u.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=a}else h(!1)}function MI(a,h){const f=new ps,g=new AbortController,b=setTimeout(()=>{g.abort(),Bn(f,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:g.signal}).then(O=>{clearTimeout(b),O.ok?Bn(f,"TestPingServer: ok",!0,h):Bn(f,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(b),Bn(f,"TestPingServer: error",!1,h)})}function Bn(a,h,f,g,b){try{b&&(b.onload=null,b.onerror=null,b.onabort=null,b.ontimeout=null),g(f)}catch{}}function LI(){this.g=new _I}function FI(a,h,f){const g=f||"";try{kp(a,function(b,O){let B=b;c(b)&&(B=ju(b)),h.push(g+O+"="+encodeURIComponent(B))})}catch(b){throw h.push(g+"type="+encodeURIComponent("_badmap")),b}}function ra(a){this.l=a.Ub||null,this.j=a.eb||!1}A(ra,Bu),ra.prototype.g=function(){return new ia(this.l,this.j)},ra.prototype.i=function(a){return function(){return a}}({});function ia(a,h){Xe.call(this),this.D=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}A(ia,Xe),t=ia.prototype,t.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=h,this.readyState=1,ws(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const h={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(h.body=a),(this.D||u).fetch(new Request(this.A,h)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,_s(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,ws(this)),this.g&&(this.readyState=3,ws(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof u.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Vp(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function Vp(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.v.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?_s(this):ws(this),this.readyState==3&&Vp(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,_s(this))},t.Qa=function(a){this.g&&(this.response=a,_s(this))},t.ga=function(){this.g&&_s(this)};function _s(a){a.readyState=4,a.l=null,a.j=null,a.v=null,ws(a)}t.setRequestHeader=function(a,h){this.u.append(a,h)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var f=h.next();!f.done;)f=f.value,a.push(f[0]+": "+f[1]),f=h.next();return a.join(`\r
`)};function ws(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(ia.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Mp(a){let h="";return M(a,function(f,g){h+=g,h+=":",h+=f,h+=`\r
`}),h}function Xu(a,h,f){e:{for(g in f){var g=!1;break e}g=!0}g||(f=Mp(f),typeof a=="string"?f!=null&&encodeURIComponent(String(f)):fe(a,h,f))}function Te(a){Xe.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}A(Te,Xe);var UI=/^https?$/i,jI=["POST","PUT"];t=Te.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,h,f,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Hu.g(),this.v=this.o?hp(this.o):hp(Hu),this.g.onreadystatechange=m(this.Ea,this);try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(O){Lp(this,O);return}if(a=f||"",f=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var b in g)f.set(b,g[b]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const O of g.keys())f.set(O,g.get(O));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(f.keys()).find(O=>O.toLowerCase()=="content-type"),b=u.FormData&&a instanceof u.FormData,!(0<=Array.prototype.indexOf.call(jI,h,void 0))||g||b||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[O,B]of f)this.g.setRequestHeader(O,B);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{jp(this),this.u=!0,this.g.send(a),this.u=!1}catch(O){Lp(this,O)}};function Lp(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.m=5,Fp(a),sa(a)}function Fp(a){a.A||(a.A=!0,ut(a,"complete"),ut(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,ut(this,"complete"),ut(this,"abort"),sa(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),sa(this,!0)),Te.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Up(this):this.bb())},t.bb=function(){Up(this)};function Up(a){if(a.h&&typeof o<"u"&&(!a.v[1]||_n(a)!=4||a.Z()!=2)){if(a.u&&_n(a)==4)ap(a.Ea,0,a);else if(ut(a,"readystatechange"),_n(a)==4){a.h=!1;try{const B=a.Z();e:switch(B){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var f;if(!(f=h)){var g;if(g=B===0){var b=String(a.D).match(Pp)[1]||null;!b&&u.self&&u.self.location&&(b=u.self.location.protocol.slice(0,-1)),g=!UI.test(b?b.toLowerCase():"")}f=g}if(f)ut(a,"complete"),ut(a,"success");else{a.m=6;try{var O=2<_n(a)?a.g.statusText:""}catch{O=""}a.l=O+" ["+a.Z()+"]",Fp(a)}}finally{sa(a)}}}}function sa(a,h){if(a.g){jp(a);const f=a.g,g=a.v[0]?()=>{}:null;a.g=null,a.v=null,h||ut(a,"ready");try{f.onreadystatechange=g}catch{}}}function jp(a){a.I&&(u.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function _n(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<_n(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),vI(h)}};function Bp(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function BI(a){const h={};a=(a.g&&2<=_n(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<a.length;g++){if(_(a[g]))continue;var f=C(a[g]);const b=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const O=h[b]||[];h[b]=O,O.push(f)}T(h,function(g){return g.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Es(a,h,f){return f&&f.internalChannelParams&&f.internalChannelParams[a]||h}function zp(a){this.Aa=0,this.i=[],this.j=new ps,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Es("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Es("baseRetryDelayMs",5e3,a),this.cb=Es("retryDelaySeedMs",1e4,a),this.Wa=Es("forwardChannelMaxRetries",2,a),this.wa=Es("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new Tp(a&&a.concurrentRequestLimit),this.Da=new LI,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=zp.prototype,t.la=8,t.G=1,t.connect=function(a,h,f,g){ct(0),this.W=a,this.H=h||{},f&&g!==void 0&&(this.H.OSID=f,this.H.OAID=g),this.F=this.X,this.I=Xp(this,null,this.W),aa(this)};function Ju(a){if($p(a),a.G==3){var h=a.U++,f=vn(a.I);if(fe(f,"SID",a.K),fe(f,"RID",h),fe(f,"TYPE","terminate"),Is(a,f),h=new Un(a,a.j,h),h.L=2,h.v=na(vn(f)),f=!1,u.navigator&&u.navigator.sendBeacon)try{f=u.navigator.sendBeacon(h.v.toString(),"")}catch{}!f&&u.Image&&(new Image().src=h.v,f=!0),f||(h.g=Jp(h.j,null),h.g.ea(h.v)),h.F=Date.now(),Zo(h)}Yp(a)}function oa(a){a.g&&(ec(a),a.g.cancel(),a.g=null)}function $p(a){oa(a),a.u&&(u.clearTimeout(a.u),a.u=null),la(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&u.clearTimeout(a.s),a.s=null)}function aa(a){if(!Sp(a.h)&&!a.s){a.s=!0;var h=a.Ga;Be||Y(),z||(Be(),z=!0),K.add(h,a),a.B=0}}function zI(a,h){return Ap(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=h.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=fs(m(a.Ga,a,h),Qp(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const b=new Un(this,this.j,a);let O=this.o;if(this.S&&(O?(O=y(O),I(O,this.S)):O=this.S),this.m!==null||this.O||(b.H=O,O=null),this.P)e:{for(var h=0,f=0;f<this.i.length;f++){t:{var g=this.i[f];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(h+=g,4096<h){h=f;break e}if(h===4096||f===this.i.length-1){h=f+1;break e}}h=1e3}else h=1e3;h=Wp(this,b,h),f=vn(this.I),fe(f,"RID",a),fe(f,"CVER",22),this.D&&fe(f,"X-HTTP-Session-Id",this.D),Is(this,f),O&&(this.O?h="headers="+encodeURIComponent(String(Mp(O)))+"&"+h:this.m&&Xu(f,this.m,O)),Yu(this.h,b),this.Ua&&fe(f,"TYPE","init"),this.P?(fe(f,"$req",h),fe(f,"SID","null"),b.T=!0,qu(b,f,null)):qu(b,f,h),this.G=2}}else this.G==3&&(a?Hp(this,a):this.i.length==0||Sp(this.h)||Hp(this))};function Hp(a,h){var f;h?f=h.l:f=a.U++;const g=vn(a.I);fe(g,"SID",a.K),fe(g,"RID",f),fe(g,"AID",a.T),Is(a,g),a.m&&a.o&&Xu(g,a.m,a.o),f=new Un(a,a.j,f,a.B+1),a.m===null&&(f.H=a.o),h&&(a.i=h.D.concat(a.i)),h=Wp(a,f,1e3),f.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),Yu(a.h,f),qu(f,g,h)}function Is(a,h){a.H&&M(a.H,function(f,g){fe(h,g,f)}),a.l&&kp({},function(f,g){fe(h,g,f)})}function Wp(a,h,f){f=Math.min(a.i.length,f);var g=a.l?m(a.l.Na,a.l,a):null;e:{var b=a.i;let O=-1;for(;;){const B=["count="+f];O==-1?0<f?(O=b[0].g,B.push("ofs="+O)):O=0:B.push("ofs="+O);let ce=!0;for(let ze=0;ze<f;ze++){let se=b[ze].g;const Je=b[ze].map;if(se-=O,0>se)O=Math.max(0,b[ze].g-100),ce=!1;else try{FI(Je,B,"req"+se+"_")}catch{g&&g(Je)}}if(ce){g=B.join("&");break e}}}return a=a.i.splice(0,f),h.D=a,g}function qp(a){if(!a.g&&!a.u){a.Y=1;var h=a.Fa;Be||Y(),z||(Be(),z=!0),K.add(h,a),a.v=0}}function Zu(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=fs(m(a.Fa,a),Qp(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,Kp(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=fs(m(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,ct(10),oa(this),Kp(this))};function ec(a){a.A!=null&&(u.clearTimeout(a.A),a.A=null)}function Kp(a){a.g=new Un(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var h=vn(a.qa);fe(h,"RID","rpc"),fe(h,"SID",a.K),fe(h,"AID",a.T),fe(h,"CI",a.F?"0":"1"),!a.F&&a.ja&&fe(h,"TO",a.ja),fe(h,"TYPE","xmlhttp"),Is(a,h),a.m&&a.o&&Xu(h,a.m,a.o),a.L&&(a.g.I=a.L);var f=a.g;a=a.ia,f.L=1,f.v=na(vn(h)),f.m=null,f.P=!0,wp(f,a)}t.Za=function(){this.C!=null&&(this.C=null,oa(this),Zu(this),ct(19))};function la(a){a.C!=null&&(u.clearTimeout(a.C),a.C=null)}function Gp(a,h){var f=null;if(a.g==h){la(a),ec(a),a.g=null;var g=2}else if(Qu(a.h,h))f=h.D,Rp(a.h,h),g=1;else return;if(a.G!=0){if(h.o)if(g==1){f=h.m?h.m.length:0,h=Date.now()-h.F;var b=a.B;g=Yo(),ut(g,new gp(g,f)),aa(a)}else qp(a);else if(b=h.s,b==3||b==0&&0<h.X||!(g==1&&zI(a,h)||g==2&&Zu(a)))switch(f&&0<f.length&&(h=a.h,h.i=h.i.concat(f)),b){case 1:Rr(a,5);break;case 4:Rr(a,10);break;case 3:Rr(a,6);break;default:Rr(a,2)}}}function Qp(a,h){let f=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(f*=2),f*h}function Rr(a,h){if(a.j.info("Error code "+h),h==2){var f=m(a.fb,a),g=a.Xa;const b=!g;g=new Ar(g||"//www.google.com/images/cleardot.gif"),u.location&&u.location.protocol=="http"||ea(g,"https"),na(g),b?VI(g.toString(),f):MI(g.toString(),f)}else ct(2);a.G=0,a.l&&a.l.sa(h),Yp(a),$p(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),ct(2)):(this.j.info("Failed to ping google.com"),ct(1))};function Yp(a){if(a.G=0,a.ka=[],a.l){const h=Cp(a.h);(h.length!=0||a.i.length!=0)&&(P(a.ka,h),P(a.ka,a.i),a.h.i.length=0,x(a.i),a.i.length=0),a.l.ra()}}function Xp(a,h,f){var g=f instanceof Ar?vn(f):new Ar(f);if(g.g!="")h&&(g.g=h+"."+g.g),ta(g,g.s);else{var b=u.location;g=b.protocol,h=h?h+"."+b.hostname:b.hostname,b=+b.port;var O=new Ar(null);g&&ea(O,g),h&&(O.g=h),b&&ta(O,b),f&&(O.l=f),g=O}return f=a.D,h=a.ya,f&&h&&fe(g,f,h),fe(g,"VER",a.la),Is(a,g),g}function Jp(a,h,f){if(h&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Ca&&!a.pa?new Te(new ra({eb:f})):new Te(a.pa),h.Ha(a.J),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Zp(){}t=Zp.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function ua(){}ua.prototype.g=function(a,h){return new Tt(a,h)};function Tt(a,h){Xe.call(this),this.g=new zp(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.va&&(a?a["X-WebChannel-Client-Profile"]=h.va:a={"X-WebChannel-Client-Profile":h.va}),this.g.S=a,(a=h&&h.Sb)&&!_(a)&&(this.g.m=a),this.v=h&&h.supportsCrossDomainXhr||!1,this.u=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!_(h)&&(this.g.D=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new li(this)}A(Tt,Xe),Tt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Tt.prototype.close=function(){Ju(this.g)},Tt.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var f={};f.__data__=a,a=f}else this.u&&(f={},f.__data__=ju(a),a=f);h.i.push(new AI(h.Ya++,a)),h.G==3&&aa(h)},Tt.prototype.N=function(){this.g.l=null,delete this.j,Ju(this.g),delete this.g,Tt.aa.N.call(this)};function em(a){zu.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const f in h){a=f;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}A(em,zu);function tm(){$u.call(this),this.status=1}A(tm,$u);function li(a){this.g=a}A(li,Zp),li.prototype.ua=function(){ut(this.g,"a")},li.prototype.ta=function(a){ut(this.g,new em(a))},li.prototype.sa=function(a){ut(this.g,new tm)},li.prototype.ra=function(){ut(this.g,"b")},ua.prototype.createWebChannel=ua.prototype.g,Tt.prototype.send=Tt.prototype.o,Tt.prototype.open=Tt.prototype.m,Tt.prototype.close=Tt.prototype.close,L0=function(){return new ua},M0=function(){return Yo()},V0=Tr,$h={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Xo.NO_ERROR=0,Xo.TIMEOUT=8,Xo.HTTP_ERROR=6,qa=Xo,yp.COMPLETE="complete",O0=yp,dp.EventType=hs,hs.OPEN="a",hs.CLOSE="b",hs.ERROR="c",hs.MESSAGE="d",Xe.prototype.listen=Xe.prototype.K,Ls=dp,Te.prototype.listenOnce=Te.prototype.L,Te.prototype.getLastError=Te.prototype.Ka,Te.prototype.getLastErrorCode=Te.prototype.Ba,Te.prototype.getStatus=Te.prototype.Z,Te.prototype.getResponseJson=Te.prototype.Oa,Te.prototype.getResponseText=Te.prototype.oa,Te.prototype.send=Te.prototype.ea,Te.prototype.setWithCredentials=Te.prototype.Ha,D0=Te}).apply(typeof ka<"u"?ka:typeof self<"u"?self:typeof window<"u"?window:{});const Vg="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}rt.UNAUTHENTICATED=new rt(null),rt.GOOGLE_CREDENTIALS=new rt("google-credentials-uid"),rt.FIRST_PARTY=new rt("first-party-uid"),rt.MOCK_USER=new rt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let os="10.14.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wr=new du("@firebase/firestore");function Ns(){return Wr.logLevel}function H(t,...e){if(Wr.logLevel<=ne.DEBUG){const n=e.map(cf);Wr.debug(`Firestore (${os}): ${t}`,...n)}}function On(t,...e){if(Wr.logLevel<=ne.ERROR){const n=e.map(cf);Wr.error(`Firestore (${os}): ${t}`,...n)}}function qi(t,...e){if(Wr.logLevel<=ne.WARN){const n=e.map(cf);Wr.warn(`Firestore (${os}): ${t}`,...n)}}function cf(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q(t="Unexpected state"){const e=`FIRESTORE (${os}) INTERNAL ASSERTION FAILED: `+t;throw On(e),new Error(e)}function ue(t,e){t||Q()}function J(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class W extends Yt{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F0{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class pC{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(rt.UNAUTHENTICATED))}shutdown(){}}class mC{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class gC{constructor(e){this.t=e,this.currentUser=rt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){ue(this.o===void 0);let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let s=new fr;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new fr,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},u=l=>{H("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(l=>u(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?u(l):(H("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new fr)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(H("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ue(typeof r.accessToken=="string"),new F0(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return ue(e===null||typeof e=="string"),new rt(e)}}class yC{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=rt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class vC{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new yC(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(rt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class _C{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class wC{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){ue(this.o===void 0);const r=s=>{s.error!=null&&H("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,H("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{H("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):H("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(ue(typeof n.token=="string"),this.R=n.token,new _C(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function EC(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U0{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=EC(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function oe(t,e){return t<e?-1:t>e?1:0}function Ki(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Le{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new W(F.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new W(F.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new W(F.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new W(F.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Le.fromMillis(Date.now())}static fromDate(e){return Le.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Le(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?oe(this.nanoseconds,e.nanoseconds):oe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X{constructor(e){this.timestamp=e}static fromTimestamp(e){return new X(e)}static min(){return new X(new Le(0,0))}static max(){return new X(new Le(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class So{constructor(e,n,r){n===void 0?n=0:n>e.length&&Q(),r===void 0?r=e.length-n:r>e.length-n&&Q(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return So.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof So?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Re extends So{construct(e,n,r){return new Re(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new W(F.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new Re(n)}static emptyPath(){return new Re([])}}const IC=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class qe extends So{construct(e,n,r){return new qe(e,n,r)}static isValidIdentifier(e){return IC.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),qe.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new qe(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new W(F.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const u=e[i];if(u==="\\"){if(i+1===e.length)throw new W(F.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new W(F.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else u==="`"?(o=!o,i++):u!=="."||o?(r+=u,i++):(s(),i++)}if(s(),o)throw new W(F.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new qe(n)}static emptyPath(){return new qe([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q{constructor(e){this.path=e}static fromPath(e){return new q(Re.fromString(e))}static fromName(e){return new q(Re.fromString(e).popFirst(5))}static empty(){return new q(Re.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Re.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Re.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new q(new Re(e.slice()))}}function TC(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=X.fromTimestamp(r===1e9?new Le(n+1,0):new Le(n,r));return new gr(i,q.empty(),e)}function SC(t){return new gr(t.readTime,t.key,-1)}class gr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new gr(X.min(),q.empty(),-1)}static max(){return new gr(X.max(),q.empty(),-1)}}function AC(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=q.comparator(t.documentKey,e.documentKey),n!==0?n:oe(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RC="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class CC{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Lo(t){if(t.code!==F.FAILED_PRECONDITION||t.message!==RC)throw t;H("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&Q(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new L((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof L?n:L.resolve(n)}catch(n){return L.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):L.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):L.reject(n)}static resolve(e){return new L((n,r)=>{n(e)})}static reject(e){return new L((n,r)=>{r(e)})}static waitFor(e){return new L((n,r)=>{let i=0,s=0,o=!1;e.forEach(u=>{++i,u.next(()=>{++s,o&&s===i&&n()},l=>r(l))}),o=!0,s===i&&n()})}static or(e){let n=L.resolve(!1);for(const r of e)n=n.next(i=>i?L.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new L((r,i)=>{const s=e.length,o=new Array(s);let u=0;for(let l=0;l<s;l++){const c=l;n(e[c]).next(d=>{o[c]=d,++u,u===s&&r(o)},d=>i(d))}})}static doWhile(e,n){return new L((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function kC(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Fo(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hf{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}hf.oe=-1;function fu(t){return t==null}function Cl(t){return t===0&&1/t==-1/0}function PC(t){return typeof t=="number"&&Number.isInteger(t)&&!Cl(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mg(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function ii(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function j0(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ie{constructor(e,n){this.comparator=e,this.root=n||We.EMPTY}insert(e,n){return new Ie(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,We.BLACK,null,null))}remove(e){return new Ie(this.comparator,this.root.remove(e,this.comparator).copy(null,null,We.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Pa(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Pa(this.root,e,this.comparator,!1)}getReverseIterator(){return new Pa(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Pa(this.root,e,this.comparator,!0)}}class Pa{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class We{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??We.RED,this.left=i??We.EMPTY,this.right=s??We.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new We(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return We.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return We.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,We.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,We.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Q();const e=this.left.check();if(e!==this.right.check())throw Q();return e+(this.isRed()?0:1)}}We.EMPTY=null,We.RED=!0,We.BLACK=!1;We.EMPTY=new class{constructor(){this.size=0}get key(){throw Q()}get value(){throw Q()}get color(){throw Q()}get left(){throw Q()}get right(){throw Q()}copy(e,n,r,i,s){return this}insert(e,n,r){return new We(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ge{constructor(e){this.comparator=e,this.data=new Ie(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Lg(this.data.getIterator())}getIteratorFrom(e){return new Lg(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Ge)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Ge(this.comparator);return n.data=e,n}}class Lg{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rt{constructor(e){this.fields=e,e.sort(qe.comparator)}static empty(){return new Rt([])}unionWith(e){let n=new Ge(qe.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Rt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Ki(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B0 extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ye{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new B0("Invalid base64 string: "+s):s}}(e);return new Ye(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new Ye(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return oe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ye.EMPTY_BYTE_STRING=new Ye("");const xC=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function yr(t){if(ue(!!t),typeof t=="string"){let e=0;const n=xC.exec(t);if(ue(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Pe(t.seconds),nanos:Pe(t.nanos)}}function Pe(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function qr(t){return typeof t=="string"?Ye.fromBase64String(t):Ye.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function df(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function ff(t){const e=t.mapValue.fields.__previous_value__;return df(e)?ff(e):e}function Ao(t){const e=yr(t.mapValue.fields.__local_write_time__.timestampValue);return new Le(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NC{constructor(e,n,r,i,s,o,u,l,c){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=u,this.longPollingOptions=l,this.useFetchStreams=c}}class Ro{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Ro("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Ro&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xa={mapValue:{}};function Kr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?df(t)?4:DC(t)?9007199254740991:bC(t)?10:11:Q()}function dn(t,e){if(t===e)return!0;const n=Kr(t);if(n!==Kr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Ao(t).isEqual(Ao(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=yr(i.timestampValue),u=yr(s.timestampValue);return o.seconds===u.seconds&&o.nanos===u.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return qr(i.bytesValue).isEqual(qr(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return Pe(i.geoPointValue.latitude)===Pe(s.geoPointValue.latitude)&&Pe(i.geoPointValue.longitude)===Pe(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Pe(i.integerValue)===Pe(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=Pe(i.doubleValue),u=Pe(s.doubleValue);return o===u?Cl(o)===Cl(u):isNaN(o)&&isNaN(u)}return!1}(t,e);case 9:return Ki(t.arrayValue.values||[],e.arrayValue.values||[],dn);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},u=s.mapValue.fields||{};if(Mg(o)!==Mg(u))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(u[l]===void 0||!dn(o[l],u[l])))return!1;return!0}(t,e);default:return Q()}}function Co(t,e){return(t.values||[]).find(n=>dn(n,e))!==void 0}function Gi(t,e){if(t===e)return 0;const n=Kr(t),r=Kr(e);if(n!==r)return oe(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return oe(t.booleanValue,e.booleanValue);case 2:return function(s,o){const u=Pe(s.integerValue||s.doubleValue),l=Pe(o.integerValue||o.doubleValue);return u<l?-1:u>l?1:u===l?0:isNaN(u)?isNaN(l)?0:-1:1}(t,e);case 3:return Fg(t.timestampValue,e.timestampValue);case 4:return Fg(Ao(t),Ao(e));case 5:return oe(t.stringValue,e.stringValue);case 6:return function(s,o){const u=qr(s),l=qr(o);return u.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const u=s.split("/"),l=o.split("/");for(let c=0;c<u.length&&c<l.length;c++){const d=oe(u[c],l[c]);if(d!==0)return d}return oe(u.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const u=oe(Pe(s.latitude),Pe(o.latitude));return u!==0?u:oe(Pe(s.longitude),Pe(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return Ug(t.arrayValue,e.arrayValue);case 10:return function(s,o){var u,l,c,d;const p=s.fields||{},m=o.fields||{},w=(u=p.value)===null||u===void 0?void 0:u.arrayValue,A=(l=m.value)===null||l===void 0?void 0:l.arrayValue,x=oe(((c=w==null?void 0:w.values)===null||c===void 0?void 0:c.length)||0,((d=A==null?void 0:A.values)===null||d===void 0?void 0:d.length)||0);return x!==0?x:Ug(w,A)}(t.mapValue,e.mapValue);case 11:return function(s,o){if(s===xa.mapValue&&o===xa.mapValue)return 0;if(s===xa.mapValue)return 1;if(o===xa.mapValue)return-1;const u=s.fields||{},l=Object.keys(u),c=o.fields||{},d=Object.keys(c);l.sort(),d.sort();for(let p=0;p<l.length&&p<d.length;++p){const m=oe(l[p],d[p]);if(m!==0)return m;const w=Gi(u[l[p]],c[d[p]]);if(w!==0)return w}return oe(l.length,d.length)}(t.mapValue,e.mapValue);default:throw Q()}}function Fg(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return oe(t,e);const n=yr(t),r=yr(e),i=oe(n.seconds,r.seconds);return i!==0?i:oe(n.nanos,r.nanos)}function Ug(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const s=Gi(n[i],r[i]);if(s)return s}return oe(n.length,r.length)}function Qi(t){return Hh(t)}function Hh(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=yr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return qr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return q.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=Hh(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${Hh(n.fields[o])}`;return i+"}"}(t.mapValue):Q()}function Wh(t){return!!t&&"integerValue"in t}function pf(t){return!!t&&"arrayValue"in t}function jg(t){return!!t&&"nullValue"in t}function Bg(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Ka(t){return!!t&&"mapValue"in t}function bC(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function Ys(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return ii(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Ys(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Ys(t.arrayValue.values[n]);return e}return Object.assign({},t)}function DC(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt{constructor(e){this.value=e}static empty(){return new gt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Ka(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ys(n)}setAll(e){let n=qe.emptyPath(),r={},i=[];e.forEach((o,u)=>{if(!n.isImmediateParentOf(u)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=u.popLast()}o?r[u.lastSegment()]=Ys(o):i.push(u.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());Ka(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return dn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Ka(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){ii(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new gt(Ys(this.value))}}function z0(t){const e=[];return ii(t.fields,(n,r)=>{const i=new qe([n]);if(Ka(r)){const s=z0(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Rt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st{constructor(e,n,r,i,s,o,u){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=u}static newInvalidDocument(e){return new st(e,0,X.min(),X.min(),X.min(),gt.empty(),0)}static newFoundDocument(e,n,r,i){return new st(e,1,n,X.min(),r,i,0)}static newNoDocument(e,n){return new st(e,2,n,X.min(),X.min(),gt.empty(),0)}static newUnknownDocument(e,n){return new st(e,3,n,X.min(),X.min(),gt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(X.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=gt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=gt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=X.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof st&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new st(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kl{constructor(e,n){this.position=e,this.inclusive=n}}function zg(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=q.comparator(q.fromName(o.referenceValue),n.key):r=Gi(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function $g(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!dn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pl{constructor(e,n="asc"){this.field=e,this.dir=n}}function OC(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $0{}class Oe extends $0{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new MC(e,n,r):n==="array-contains"?new UC(e,r):n==="in"?new jC(e,r):n==="not-in"?new BC(e,r):n==="array-contains-any"?new zC(e,r):new Oe(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new LC(e,r):new FC(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Gi(n,this.value)):n!==null&&Kr(this.value)===Kr(n)&&this.matchesComparison(Gi(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Q()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class fn extends $0{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new fn(e,n)}matches(e){return H0(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function H0(t){return t.op==="and"}function W0(t){return VC(t)&&H0(t)}function VC(t){for(const e of t.filters)if(e instanceof fn)return!1;return!0}function qh(t){if(t instanceof Oe)return t.field.canonicalString()+t.op.toString()+Qi(t.value);if(W0(t))return t.filters.map(e=>qh(e)).join(",");{const e=t.filters.map(n=>qh(n)).join(",");return`${t.op}(${e})`}}function q0(t,e){return t instanceof Oe?function(r,i){return i instanceof Oe&&r.op===i.op&&r.field.isEqual(i.field)&&dn(r.value,i.value)}(t,e):t instanceof fn?function(r,i){return i instanceof fn&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,u)=>s&&q0(o,i.filters[u]),!0):!1}(t,e):void Q()}function K0(t){return t instanceof Oe?function(n){return`${n.field.canonicalString()} ${n.op} ${Qi(n.value)}`}(t):t instanceof fn?function(n){return n.op.toString()+" {"+n.getFilters().map(K0).join(" ,")+"}"}(t):"Filter"}class MC extends Oe{constructor(e,n,r){super(e,n,r),this.key=q.fromName(r.referenceValue)}matches(e){const n=q.comparator(e.key,this.key);return this.matchesComparison(n)}}class LC extends Oe{constructor(e,n){super(e,"in",n),this.keys=G0("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class FC extends Oe{constructor(e,n){super(e,"not-in",n),this.keys=G0("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function G0(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>q.fromName(r.referenceValue))}class UC extends Oe{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return pf(n)&&Co(n.arrayValue,this.value)}}class jC extends Oe{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Co(this.value.arrayValue,n)}}class BC extends Oe{constructor(e,n){super(e,"not-in",n)}matches(e){if(Co(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Co(this.value.arrayValue,n)}}class zC extends Oe{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!pf(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Co(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $C{constructor(e,n=null,r=[],i=[],s=null,o=null,u=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=u,this.ue=null}}function Hg(t,e=null,n=[],r=[],i=null,s=null,o=null){return new $C(t,e,n,r,i,s,o)}function mf(t){const e=J(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>qh(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),fu(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Qi(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Qi(r)).join(",")),e.ue=n}return e.ue}function gf(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!OC(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!q0(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!$g(t.startAt,e.startAt)&&$g(t.endAt,e.endAt)}function Kh(t){return q.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pu{constructor(e,n=null,r=[],i=[],s=null,o="F",u=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=u,this.endAt=l,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function HC(t,e,n,r,i,s,o,u){return new pu(t,e,n,r,i,s,o,u)}function mu(t){return new pu(t)}function Wg(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function WC(t){return t.collectionGroup!==null}function Xs(t){const e=J(t);if(e.ce===null){e.ce=[];const n=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let u=new Ge(qe.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(c=>{c.isInequality()&&(u=u.add(c.field))})}),u})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.ce.push(new Pl(s,r))}),n.has(qe.keyField().canonicalString())||e.ce.push(new Pl(qe.keyField(),r))}return e.ce}function nn(t){const e=J(t);return e.le||(e.le=qC(e,Xs(t))),e.le}function qC(t,e){if(t.limitType==="F")return Hg(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new Pl(i.field,s)});const n=t.endAt?new kl(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new kl(t.startAt.position,t.startAt.inclusive):null;return Hg(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Gh(t,e,n){return new pu(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function gu(t,e){return gf(nn(t),nn(e))&&t.limitType===e.limitType}function Q0(t){return`${mf(nn(t))}|lt:${t.limitType}`}function hi(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>K0(i)).join(", ")}]`),fu(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>Qi(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>Qi(i)).join(",")),`Target(${r})`}(nn(t))}; limitType=${t.limitType})`}function yu(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):q.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of Xs(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,u,l){const c=zg(o,u,l);return o.inclusive?c<=0:c<0}(r.startAt,Xs(r),i)||r.endAt&&!function(o,u,l){const c=zg(o,u,l);return o.inclusive?c>=0:c>0}(r.endAt,Xs(r),i))}(t,e)}function KC(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Y0(t){return(e,n)=>{let r=!1;for(const i of Xs(t)){const s=GC(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function GC(t,e,n){const r=t.field.isKeyField()?q.comparator(e.key,n.key):function(s,o,u){const l=o.data.field(s),c=u.data.field(s);return l!==null&&c!==null?Gi(l,c):Q()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return Q()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class as{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){ii(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return j0(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QC=new Ie(q.comparator);function Vn(){return QC}const X0=new Ie(q.comparator);function Fs(...t){let e=X0;for(const n of t)e=e.insert(n.key,n);return e}function J0(t){let e=X0;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Dr(){return Js()}function Z0(){return Js()}function Js(){return new as(t=>t.toString(),(t,e)=>t.isEqual(e))}const YC=new Ie(q.comparator),XC=new Ge(q.comparator);function te(...t){let e=XC;for(const n of t)e=e.add(n);return e}const JC=new Ge(oe);function ZC(){return JC}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yf(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Cl(e)?"-0":e}}function ew(t){return{integerValue:""+t}}function ek(t,e){return PC(e)?ew(e):yf(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vu{constructor(){this._=void 0}}function tk(t,e,n){return t instanceof xl?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&df(s)&&(s=ff(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof Yi?nw(t,e):t instanceof ko?rw(t,e):function(i,s){const o=tw(i,s),u=qg(o)+qg(i.Pe);return Wh(o)&&Wh(i.Pe)?ew(u):yf(i.serializer,u)}(t,e)}function nk(t,e,n){return t instanceof Yi?nw(t,e):t instanceof ko?rw(t,e):n}function tw(t,e){return t instanceof Nl?function(r){return Wh(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class xl extends vu{}class Yi extends vu{constructor(e){super(),this.elements=e}}function nw(t,e){const n=iw(e);for(const r of t.elements)n.some(i=>dn(i,r))||n.push(r);return{arrayValue:{values:n}}}class ko extends vu{constructor(e){super(),this.elements=e}}function rw(t,e){let n=iw(e);for(const r of t.elements)n=n.filter(i=>!dn(i,r));return{arrayValue:{values:n}}}class Nl extends vu{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function qg(t){return Pe(t.integerValue||t.doubleValue)}function iw(t){return pf(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rk{constructor(e,n){this.field=e,this.transform=n}}function ik(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof Yi&&i instanceof Yi||r instanceof ko&&i instanceof ko?Ki(r.elements,i.elements,dn):r instanceof Nl&&i instanceof Nl?dn(r.Pe,i.Pe):r instanceof xl&&i instanceof xl}(t.transform,e.transform)}class sk{constructor(e,n){this.version=e,this.transformResults=n}}class rn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new rn}static exists(e){return new rn(void 0,e)}static updateTime(e){return new rn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Ga(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class _u{}function sw(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new aw(t.key,rn.none()):new Uo(t.key,t.data,rn.none());{const n=t.data,r=gt.empty();let i=new Ge(qe.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Ir(t.key,r,new Rt(i.toArray()),rn.none())}}function ok(t,e,n){t instanceof Uo?function(i,s,o){const u=i.value.clone(),l=Gg(i.fieldTransforms,s,o.transformResults);u.setAll(l),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):t instanceof Ir?function(i,s,o){if(!Ga(i.precondition,s))return void s.convertToUnknownDocument(o.version);const u=Gg(i.fieldTransforms,s,o.transformResults),l=s.data;l.setAll(ow(i)),l.setAll(u),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Zs(t,e,n,r){return t instanceof Uo?function(s,o,u,l){if(!Ga(s.precondition,o))return u;const c=s.value.clone(),d=Qg(s.fieldTransforms,l,o);return c.setAll(d),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof Ir?function(s,o,u,l){if(!Ga(s.precondition,o))return u;const c=Qg(s.fieldTransforms,l,o),d=o.data;return d.setAll(ow(s)),d.setAll(c),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),u===null?null:u.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(p=>p.field))}(t,e,n,r):function(s,o,u){return Ga(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):u}(t,e,n)}function ak(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=tw(r.transform,i||null);s!=null&&(n===null&&(n=gt.empty()),n.set(r.field,s))}return n||null}function Kg(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Ki(r,i,(s,o)=>ik(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Uo extends _u{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Ir extends _u{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function ow(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Gg(t,e,n){const r=new Map;ue(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,u=e.data.field(s.field);r.set(s.field,nk(o,u,n[i]))}return r}function Qg(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,tk(s,o,e))}return r}class aw extends _u{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class lk extends _u{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uk{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&ok(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Zs(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Zs(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=Z0();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let u=this.applyToLocalView(o,s.mutatedFields);u=n.has(i.key)?null:u;const l=sw(o,u);l!==null&&r.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(X.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),te())}isEqual(e){return this.batchId===e.batchId&&Ki(this.mutations,e.mutations,(n,r)=>Kg(n,r))&&Ki(this.baseMutations,e.baseMutations,(n,r)=>Kg(n,r))}}class vf{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){ue(e.mutations.length===r.length);let i=function(){return YC}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new vf(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ck{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hk{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ne,re;function dk(t){switch(t){default:return Q();case F.CANCELLED:case F.UNKNOWN:case F.DEADLINE_EXCEEDED:case F.RESOURCE_EXHAUSTED:case F.INTERNAL:case F.UNAVAILABLE:case F.UNAUTHENTICATED:return!1;case F.INVALID_ARGUMENT:case F.NOT_FOUND:case F.ALREADY_EXISTS:case F.PERMISSION_DENIED:case F.FAILED_PRECONDITION:case F.ABORTED:case F.OUT_OF_RANGE:case F.UNIMPLEMENTED:case F.DATA_LOSS:return!0}}function lw(t){if(t===void 0)return On("GRPC error has no .code"),F.UNKNOWN;switch(t){case Ne.OK:return F.OK;case Ne.CANCELLED:return F.CANCELLED;case Ne.UNKNOWN:return F.UNKNOWN;case Ne.DEADLINE_EXCEEDED:return F.DEADLINE_EXCEEDED;case Ne.RESOURCE_EXHAUSTED:return F.RESOURCE_EXHAUSTED;case Ne.INTERNAL:return F.INTERNAL;case Ne.UNAVAILABLE:return F.UNAVAILABLE;case Ne.UNAUTHENTICATED:return F.UNAUTHENTICATED;case Ne.INVALID_ARGUMENT:return F.INVALID_ARGUMENT;case Ne.NOT_FOUND:return F.NOT_FOUND;case Ne.ALREADY_EXISTS:return F.ALREADY_EXISTS;case Ne.PERMISSION_DENIED:return F.PERMISSION_DENIED;case Ne.FAILED_PRECONDITION:return F.FAILED_PRECONDITION;case Ne.ABORTED:return F.ABORTED;case Ne.OUT_OF_RANGE:return F.OUT_OF_RANGE;case Ne.UNIMPLEMENTED:return F.UNIMPLEMENTED;case Ne.DATA_LOSS:return F.DATA_LOSS;default:return Q()}}(re=Ne||(Ne={}))[re.OK=0]="OK",re[re.CANCELLED=1]="CANCELLED",re[re.UNKNOWN=2]="UNKNOWN",re[re.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",re[re.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",re[re.NOT_FOUND=5]="NOT_FOUND",re[re.ALREADY_EXISTS=6]="ALREADY_EXISTS",re[re.PERMISSION_DENIED=7]="PERMISSION_DENIED",re[re.UNAUTHENTICATED=16]="UNAUTHENTICATED",re[re.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",re[re.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",re[re.ABORTED=10]="ABORTED",re[re.OUT_OF_RANGE=11]="OUT_OF_RANGE",re[re.UNIMPLEMENTED=12]="UNIMPLEMENTED",re[re.INTERNAL=13]="INTERNAL",re[re.UNAVAILABLE=14]="UNAVAILABLE",re[re.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fk(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pk=new Fr([4294967295,4294967295],0);function Yg(t){const e=fk().encode(t),n=new b0;return n.update(e),new Uint8Array(n.digest())}function Xg(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Fr([n,r],0),new Fr([i,s],0)]}class _f{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Us(`Invalid padding: ${n}`);if(r<0)throw new Us(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Us(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Us(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=Fr.fromNumber(this.Ie)}Ee(e,n,r){let i=e.add(n.multiply(Fr.fromNumber(r)));return i.compare(pk)===1&&(i=new Fr([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=Yg(e),[r,i]=Xg(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);if(!this.de(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new _f(s,i,n);return r.forEach(u=>o.insert(u)),o}insert(e){if(this.Ie===0)return;const n=Yg(e),[r,i]=Xg(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Us extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wu{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,jo.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new wu(X.min(),i,new Ie(oe),Vn(),te())}}class jo{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new jo(r,n,te(),te(),te())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qa{constructor(e,n,r,i){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=i}}class uw{constructor(e,n){this.targetId=e,this.me=n}}class cw{constructor(e,n,r=Ye.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class Jg{constructor(){this.fe=0,this.ge=ey(),this.pe=Ye.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=te(),n=te(),r=te();return this.ge.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:Q()}}),new jo(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=ey()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,ue(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class mk{constructor(e){this.Le=e,this.Be=new Map,this.ke=Vn(),this.qe=Zg(),this.Qe=new Ie(oe)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:Q()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,i)=>{this.ze(i)&&n(i)})}He(e){const n=e.targetId,r=e.me.count,i=this.Je(n);if(i){const s=i.target;if(Kh(s))if(r===0){const o=new q(s.path);this.Ue(n,o,st.newNoDocument(o,X.min()))}else ue(r===1);else{const o=this.Ye(n);if(o!==r){const u=this.Ze(e),l=u?this.Xe(u,e,o):1;if(l!==0){this.je(n);const c=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,c)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,u;try{o=qr(r).toUint8Array()}catch(l){if(l instanceof B0)return qi("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{u=new _f(o,i,s)}catch(l){return qi(l instanceof Us?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return u.Ie===0?null:u}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Le.tt(),u=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(u)||(this.Ue(n,s,null),i++)}),i}rt(e){const n=new Map;this.Be.forEach((s,o)=>{const u=this.Je(o);if(u){if(s.current&&Kh(u.target)){const l=new q(u.target.path);this.ke.get(l)!==null||this.it(o,l)||this.Ue(o,l,st.newNoDocument(l,e))}s.be&&(n.set(o,s.ve()),s.Ce())}});let r=te();this.qe.forEach((s,o)=>{let u=!0;o.forEachWhile(l=>{const c=this.Je(l);return!c||c.purpose==="TargetPurposeLimboResolution"||(u=!1,!1)}),u&&(r=r.add(s))}),this.ke.forEach((s,o)=>o.setReadTime(e));const i=new wu(e,n,this.Qe,this.ke,r);return this.ke=Vn(),this.qe=Zg(),this.Qe=new Ie(oe),i}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,n)?i.Fe(n,1):i.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new Jg,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new Ge(oe),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||H("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new Jg),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function Zg(){return new Ie(q.comparator)}function ey(){return new Ie(q.comparator)}const gk={asc:"ASCENDING",desc:"DESCENDING"},yk={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},vk={and:"AND",or:"OR"};class _k{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Qh(t,e){return t.useProto3Json||fu(e)?e:{value:e}}function bl(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function hw(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function wk(t,e){return bl(t,e.toTimestamp())}function sn(t){return ue(!!t),X.fromTimestamp(function(n){const r=yr(n);return new Le(r.seconds,r.nanos)}(t))}function wf(t,e){return Yh(t,e).canonicalString()}function Yh(t,e){const n=function(i){return new Re(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function dw(t){const e=Re.fromString(t);return ue(yw(e)),e}function Xh(t,e){return wf(t.databaseId,e.path)}function Oc(t,e){const n=dw(e);if(n.get(1)!==t.databaseId.projectId)throw new W(F.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new W(F.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new q(pw(n))}function fw(t,e){return wf(t.databaseId,e)}function Ek(t){const e=dw(t);return e.length===4?Re.emptyPath():pw(e)}function Jh(t){return new Re(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function pw(t){return ue(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function ty(t,e,n){return{name:Xh(t,e),fields:n.value.mapValue.fields}}function Ik(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:Q()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(c,d){return c.useProto3Json?(ue(d===void 0||typeof d=="string"),Ye.fromBase64String(d||"")):(ue(d===void 0||d instanceof Buffer||d instanceof Uint8Array),Ye.fromUint8Array(d||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,u=o&&function(c){const d=c.code===void 0?F.UNKNOWN:lw(c.code);return new W(d,c.message||"")}(o);n=new cw(r,i,s,u||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Oc(t,r.document.name),s=sn(r.document.updateTime),o=r.document.createTime?sn(r.document.createTime):X.min(),u=new gt({mapValue:{fields:r.document.fields}}),l=st.newFoundDocument(i,s,o,u),c=r.targetIds||[],d=r.removedTargetIds||[];n=new Qa(c,d,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Oc(t,r.document),s=r.readTime?sn(r.readTime):X.min(),o=st.newNoDocument(i,s),u=r.removedTargetIds||[];n=new Qa([],u,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Oc(t,r.document),s=r.removedTargetIds||[];n=new Qa([],s,i,null)}else{if(!("filter"in e))return Q();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new hk(i,s),u=r.targetId;n=new uw(u,o)}}return n}function Tk(t,e){let n;if(e instanceof Uo)n={update:ty(t,e.key,e.value)};else if(e instanceof aw)n={delete:Xh(t,e.key)};else if(e instanceof Ir)n={update:ty(t,e.key,e.data),updateMask:bk(e.fieldMask)};else{if(!(e instanceof lk))return Q();n={verify:Xh(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const u=o.transform;if(u instanceof xl)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(u instanceof Yi)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:u.elements}};if(u instanceof ko)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:u.elements}};if(u instanceof Nl)return{fieldPath:o.field.canonicalString(),increment:u.Pe};throw Q()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:wk(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:Q()}(t,e.precondition)),n}function Sk(t,e){return t&&t.length>0?(ue(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?sn(i.updateTime):sn(s);return o.isEqual(X.min())&&(o=sn(s)),new sk(o,i.transformResults||[])}(n,e))):[]}function Ak(t,e){return{documents:[fw(t,e.path)]}}function Rk(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=fw(t,i);const s=function(c){if(c.length!==0)return gw(fn.create(c,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(c){if(c.length!==0)return c.map(d=>function(m){return{field:di(m.field),direction:Pk(m.dir)}}(d))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const u=Qh(t,e.limit);return u!==null&&(n.structuredQuery.limit=u),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),{_t:n,parent:i}}function Ck(t){let e=Ek(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){ue(r===1);const d=n.from[0];d.allDescendants?i=d.collectionId:e=e.child(d.collectionId)}let s=[];n.where&&(s=function(p){const m=mw(p);return m instanceof fn&&W0(m)?m.getFilters():[m]}(n.where));let o=[];n.orderBy&&(o=function(p){return p.map(m=>function(A){return new Pl(fi(A.field),function(P){switch(P){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(A.direction))}(m))}(n.orderBy));let u=null;n.limit&&(u=function(p){let m;return m=typeof p=="object"?p.value:p,fu(m)?null:m}(n.limit));let l=null;n.startAt&&(l=function(p){const m=!!p.before,w=p.values||[];return new kl(w,m)}(n.startAt));let c=null;return n.endAt&&(c=function(p){const m=!p.before,w=p.values||[];return new kl(w,m)}(n.endAt)),HC(e,i,o,s,u,"F",l,c)}function kk(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Q()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function mw(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=fi(n.unaryFilter.field);return Oe.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=fi(n.unaryFilter.field);return Oe.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=fi(n.unaryFilter.field);return Oe.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=fi(n.unaryFilter.field);return Oe.create(o,"!=",{nullValue:"NULL_VALUE"});default:return Q()}}(t):t.fieldFilter!==void 0?function(n){return Oe.create(fi(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Q()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return fn.create(n.compositeFilter.filters.map(r=>mw(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return Q()}}(n.compositeFilter.op))}(t):Q()}function Pk(t){return gk[t]}function xk(t){return yk[t]}function Nk(t){return vk[t]}function di(t){return{fieldPath:t.canonicalString()}}function fi(t){return qe.fromServerFormat(t.fieldPath)}function gw(t){return t instanceof Oe?function(n){if(n.op==="=="){if(Bg(n.value))return{unaryFilter:{field:di(n.field),op:"IS_NAN"}};if(jg(n.value))return{unaryFilter:{field:di(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Bg(n.value))return{unaryFilter:{field:di(n.field),op:"IS_NOT_NAN"}};if(jg(n.value))return{unaryFilter:{field:di(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:di(n.field),op:xk(n.op),value:n.value}}}(t):t instanceof fn?function(n){const r=n.getFilters().map(i=>gw(i));return r.length===1?r[0]:{compositeFilter:{op:Nk(n.op),filters:r}}}(t):Q()}function bk(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function yw(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nr{constructor(e,n,r,i,s=X.min(),o=X.min(),u=Ye.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=u,this.expectedCount=l}withSequenceNumber(e){return new nr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new nr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new nr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new nr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dk{constructor(e){this.ct=e}}function Ok(t){const e=Ck({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Gh(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vk{constructor(){this.un=new Mk}addToCollectionParentIndex(e,n){return this.un.add(n),L.resolve()}getCollectionParents(e,n){return L.resolve(this.un.getEntries(n))}addFieldIndex(e,n){return L.resolve()}deleteFieldIndex(e,n){return L.resolve()}deleteAllFieldIndexes(e){return L.resolve()}createTargetIndexes(e,n){return L.resolve()}getDocumentsMatchingTarget(e,n){return L.resolve(null)}getIndexType(e,n){return L.resolve(0)}getFieldIndexes(e,n){return L.resolve([])}getNextCollectionGroupToUpdate(e){return L.resolve(null)}getMinOffset(e,n){return L.resolve(gr.min())}getMinOffsetFromCollectionGroup(e,n){return L.resolve(gr.min())}updateCollectionGroup(e,n,r){return L.resolve()}updateIndexEntries(e,n){return L.resolve()}}class Mk{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new Ge(Re.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Ge(Re.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xi{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new Xi(0)}static kn(){return new Xi(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lk{constructor(){this.changes=new as(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,st.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?L.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fk{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uk{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&Zs(r.mutation,i,Rt.empty(),Le.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,te()).next(()=>r))}getLocalViewOfDocuments(e,n,r=te()){const i=Dr();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=Fs();return s.forEach((u,l)=>{o=o.insert(u,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Dr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,te()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,u)=>{n.set(o,u)})})}computeViews(e,n,r,i){let s=Vn();const o=Js(),u=function(){return Js()}();return n.forEach((l,c)=>{const d=r.get(c.key);i.has(c.key)&&(d===void 0||d.mutation instanceof Ir)?s=s.insert(c.key,c):d!==void 0?(o.set(c.key,d.mutation.getFieldMask()),Zs(d.mutation,c,d.mutation.getFieldMask(),Le.now())):o.set(c.key,Rt.empty())}),this.recalculateAndSaveOverlays(e,s).next(l=>(l.forEach((c,d)=>o.set(c,d)),n.forEach((c,d)=>{var p;return u.set(c,new Fk(d,(p=o.get(c))!==null&&p!==void 0?p:null))}),u))}recalculateAndSaveOverlays(e,n){const r=Js();let i=new Ie((o,u)=>o-u),s=te();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const u of o)u.keys().forEach(l=>{const c=n.get(l);if(c===null)return;let d=r.get(l)||Rt.empty();d=u.applyToLocalView(c,d),r.set(l,d);const p=(i.get(u.batchId)||te()).add(l);i=i.insert(u.batchId,p)})}).next(()=>{const o=[],u=i.getReverseIterator();for(;u.hasNext();){const l=u.getNext(),c=l.key,d=l.value,p=Z0();d.forEach(m=>{if(!s.has(m)){const w=sw(n.get(m),r.get(m));w!==null&&p.set(m,w),s=s.add(m)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,p))}return L.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return q.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):WC(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):L.resolve(Dr());let u=-1,l=s;return o.next(c=>L.forEach(c,(d,p)=>(u<p.largestBatchId&&(u=p.largestBatchId),s.get(d)?L.resolve():this.remoteDocumentCache.getEntry(e,d).next(m=>{l=l.insert(d,m)}))).next(()=>this.populateOverlays(e,c,s)).next(()=>this.computeViews(e,l,c,te())).next(d=>({batchId:u,changes:J0(d)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new q(n)).next(r=>{let i=Fs();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=Fs();return this.indexManager.getCollectionParents(e,s).next(u=>L.forEach(u,l=>{const c=function(p,m){return new pu(m,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,l.child(s));return this.getDocumentsMatchingCollectionQuery(e,c,r,i).next(d=>{d.forEach((p,m)=>{o=o.insert(p,m)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((l,c)=>{const d=c.getKey();o.get(d)===null&&(o=o.insert(d,st.newInvalidDocument(d)))});let u=Fs();return o.forEach((l,c)=>{const d=s.get(l);d!==void 0&&Zs(d.mutation,c,Rt.empty(),Le.now()),yu(n,c)&&(u=u.insert(l,c))}),u})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jk{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,n){return L.resolve(this.hr.get(n))}saveBundleMetadata(e,n){return this.hr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:sn(i.createTime)}}(n)),L.resolve()}getNamedQuery(e,n){return L.resolve(this.Pr.get(n))}saveNamedQuery(e,n){return this.Pr.set(n.name,function(i){return{name:i.name,query:Ok(i.bundledQuery),readTime:sn(i.readTime)}}(n)),L.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bk{constructor(){this.overlays=new Ie(q.comparator),this.Ir=new Map}getOverlay(e,n){return L.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Dr();return L.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ht(e,n,s)}),L.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Ir.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Ir.delete(r)),L.resolve()}getOverlaysForCollection(e,n,r){const i=Dr(),s=n.length+1,o=new q(n.child("")),u=this.overlays.getIteratorFrom(o);for(;u.hasNext();){const l=u.getNext().value,c=l.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return L.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Ie((c,d)=>c-d);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let d=s.get(c.largestBatchId);d===null&&(d=Dr(),s=s.insert(c.largestBatchId,d)),d.set(c.getKey(),c)}}const u=Dr(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((c,d)=>u.set(c,d)),!(u.size()>=i)););return L.resolve(u)}ht(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.Ir.get(i.largestBatchId).delete(r.key);this.Ir.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new ck(n,r));let s=this.Ir.get(n);s===void 0&&(s=te(),this.Ir.set(n,s)),this.Ir.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zk{constructor(){this.sessionToken=Ye.EMPTY_BYTE_STRING}getSessionToken(e){return L.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,L.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ef{constructor(){this.Tr=new Ge(Fe.Er),this.dr=new Ge(Fe.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,n){const r=new Fe(e,n);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Vr(new Fe(e,n))}mr(e,n){e.forEach(r=>this.removeReference(r,n))}gr(e){const n=new q(new Re([])),r=new Fe(n,e),i=new Fe(n,e+1),s=[];return this.dr.forEachInRange([r,i],o=>{this.Vr(o),s.push(o.key)}),s}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const n=new q(new Re([])),r=new Fe(n,e),i=new Fe(n,e+1);let s=te();return this.dr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new Fe(e,0),r=this.Tr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Fe{constructor(e,n){this.key=e,this.wr=n}static Er(e,n){return q.comparator(e.key,n.key)||oe(e.wr,n.wr)}static Ar(e,n){return oe(e.wr,n.wr)||q.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $k{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Sr=1,this.br=new Ge(Fe.Er)}checkEmpty(e){return L.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new uk(s,n,r,i);this.mutationQueue.push(o);for(const u of i)this.br=this.br.add(new Fe(u.key,s)),this.indexManager.addToCollectionParentIndex(e,u.key.path.popLast());return L.resolve(o)}lookupMutationBatch(e,n){return L.resolve(this.Dr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.vr(r),s=i<0?0:i;return L.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return L.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return L.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Fe(n,0),i=new Fe(n,Number.POSITIVE_INFINITY),s=[];return this.br.forEachInRange([r,i],o=>{const u=this.Dr(o.wr);s.push(u)}),L.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Ge(oe);return n.forEach(i=>{const s=new Fe(i,0),o=new Fe(i,Number.POSITIVE_INFINITY);this.br.forEachInRange([s,o],u=>{r=r.add(u.wr)})}),L.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;q.isDocumentKey(s)||(s=s.child(""));const o=new Fe(new q(s),0);let u=new Ge(oe);return this.br.forEachWhile(l=>{const c=l.key.path;return!!r.isPrefixOf(c)&&(c.length===i&&(u=u.add(l.wr)),!0)},o),L.resolve(this.Cr(u))}Cr(e){const n=[];return e.forEach(r=>{const i=this.Dr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){ue(this.Fr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return L.forEach(n.mutations,i=>{const s=new Fe(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,n){const r=new Fe(n,0),i=this.br.firstAfterOrEqual(r);return L.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,L.resolve()}Fr(e,n){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const n=this.vr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hk{constructor(e){this.Mr=e,this.docs=function(){return new Ie(q.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Mr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return L.resolve(r?r.document.mutableCopy():st.newInvalidDocument(n))}getEntries(e,n){let r=Vn();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():st.newInvalidDocument(i))}),L.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=Vn();const o=n.path,u=new q(o.child("")),l=this.docs.getIteratorFrom(u);for(;l.hasNext();){const{key:c,value:{document:d}}=l.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||AC(SC(d),r)<=0||(i.has(d.key)||yu(n,d))&&(s=s.insert(d.key,d.mutableCopy()))}return L.resolve(s)}getAllFromCollectionGroup(e,n,r,i){Q()}Or(e,n){return L.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new Wk(this)}getSize(e){return L.resolve(this.size)}}class Wk extends Lk{constructor(e){super(),this.cr=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.cr.addEntry(e,i)):this.cr.removeEntry(r)}),L.waitFor(n)}getFromCache(e,n){return this.cr.getEntry(e,n)}getAllFromCache(e,n){return this.cr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qk{constructor(e){this.persistence=e,this.Nr=new as(n=>mf(n),gf),this.lastRemoteSnapshotVersion=X.min(),this.highestTargetId=0,this.Lr=0,this.Br=new Ef,this.targetCount=0,this.kr=Xi.Bn()}forEachTarget(e,n){return this.Nr.forEach((r,i)=>n(i)),L.resolve()}getLastRemoteSnapshotVersion(e){return L.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return L.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),L.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Lr&&(this.Lr=n),L.resolve()}Kn(e){this.Nr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.kr=new Xi(n),this.highestTargetId=n),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,n){return this.Kn(n),this.targetCount+=1,L.resolve()}updateTargetData(e,n){return this.Kn(n),L.resolve()}removeTargetData(e,n){return this.Nr.delete(n.target),this.Br.gr(n.targetId),this.targetCount-=1,L.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Nr.forEach((o,u)=>{u.sequenceNumber<=n&&r.get(u.targetId)===null&&(this.Nr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,u.targetId)),i++)}),L.waitFor(s).next(()=>i)}getTargetCount(e){return L.resolve(this.targetCount)}getTargetData(e,n){const r=this.Nr.get(n)||null;return L.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Rr(n,r),L.resolve()}removeMatchingKeys(e,n,r){this.Br.mr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),L.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Br.gr(n),L.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.yr(n);return L.resolve(r)}containsKey(e,n){return L.resolve(this.Br.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kk{constructor(e,n){this.qr={},this.overlays={},this.Qr=new hf(0),this.Kr=!1,this.Kr=!0,this.$r=new zk,this.referenceDelegate=e(this),this.Ur=new qk(this),this.indexManager=new Vk,this.remoteDocumentCache=function(i){return new Hk(i)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new Dk(n),this.Gr=new jk(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new Bk,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.qr[e.toKey()];return r||(r=new $k(n,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,n,r){H("MemoryPersistence","Starting transaction:",e);const i=new Gk(this.Qr.next());return this.referenceDelegate.zr(),r(i).next(s=>this.referenceDelegate.jr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Hr(e,n){return L.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,n)))}}class Gk extends CC{constructor(e){super(),this.currentSequenceNumber=e}}class If{constructor(e){this.persistence=e,this.Jr=new Ef,this.Yr=null}static Zr(e){return new If(e)}get Xr(){if(this.Yr)return this.Yr;throw Q()}addReference(e,n,r){return this.Jr.addReference(r,n),this.Xr.delete(r.toString()),L.resolve()}removeReference(e,n,r){return this.Jr.removeReference(r,n),this.Xr.add(r.toString()),L.resolve()}markPotentiallyOrphaned(e,n){return this.Xr.add(n.toString()),L.resolve()}removeTarget(e,n){this.Jr.gr(n.targetId).forEach(i=>this.Xr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Xr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}zr(){this.Yr=new Set}jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return L.forEach(this.Xr,r=>{const i=q.fromPath(r);return this.ei(e,i).next(s=>{s||n.removeEntry(i,X.min())})}).next(()=>(this.Yr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ei(e,n).next(r=>{r?this.Xr.delete(n.toString()):this.Xr.add(n.toString())})}Wr(e){return 0}ei(e,n){return L.or([()=>L.resolve(this.Jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Hr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tf{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.$i=r,this.Ui=i}static Wi(e,n){let r=te(),i=te();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Tf(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qk{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yk{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return QA()?8:kC(at())>0?6:4}()}initialize(e,n){this.Ji=e,this.indexManager=n,this.Gi=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.Yi(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Zi(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new Qk;return this.Xi(e,n,o).next(u=>{if(s.result=u,this.zi)return this.es(e,n,o,u.size)})}).next(()=>s.result)}es(e,n,r,i){return r.documentReadCount<this.ji?(Ns()<=ne.DEBUG&&H("QueryEngine","SDK will not create cache indexes for query:",hi(n),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),L.resolve()):(Ns()<=ne.DEBUG&&H("QueryEngine","Query:",hi(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Hi*i?(Ns()<=ne.DEBUG&&H("QueryEngine","The SDK decides to create cache indexes for query:",hi(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,nn(n))):L.resolve())}Yi(e,n){if(Wg(n))return L.resolve(null);let r=nn(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Gh(n,null,"F"),r=nn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=te(...s);return this.Ji.getDocuments(e,o).next(u=>this.indexManager.getMinOffset(e,r).next(l=>{const c=this.ts(n,u);return this.ns(n,c,o,l.readTime)?this.Yi(e,Gh(n,null,"F")):this.rs(e,c,n,l)}))})))}Zi(e,n,r,i){return Wg(n)||i.isEqual(X.min())?L.resolve(null):this.Ji.getDocuments(e,r).next(s=>{const o=this.ts(n,s);return this.ns(n,o,r,i)?L.resolve(null):(Ns()<=ne.DEBUG&&H("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),hi(n)),this.rs(e,o,n,TC(i,-1)).next(u=>u))})}ts(e,n){let r=new Ge(Y0(e));return n.forEach((i,s)=>{yu(e,s)&&(r=r.add(s))}),r}ns(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Xi(e,n,r){return Ns()<=ne.DEBUG&&H("QueryEngine","Using full collection scan to execute query:",hi(n)),this.Ji.getDocumentsMatchingQuery(e,n,gr.min(),r)}rs(e,n,r,i){return this.Ji.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xk{constructor(e,n,r,i){this.persistence=e,this.ss=n,this.serializer=i,this.os=new Ie(oe),this._s=new as(s=>mf(s),gf),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Uk(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.os))}}function Jk(t,e,n,r){return new Xk(t,e,n,r)}async function vw(t,e){const n=J(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.ls(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],u=[];let l=te();for(const c of i){o.push(c.batchId);for(const d of c.mutations)l=l.add(d.key)}for(const c of s){u.push(c.batchId);for(const d of c.mutations)l=l.add(d.key)}return n.localDocuments.getDocuments(r,l).next(c=>({hs:c,removedBatchIds:o,addedBatchIds:u}))})})}function Zk(t,e){const n=J(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.cs.newChangeBuffer({trackRemovals:!0});return function(u,l,c,d){const p=c.batch,m=p.keys();let w=L.resolve();return m.forEach(A=>{w=w.next(()=>d.getEntry(l,A)).next(x=>{const P=c.docVersions.get(A);ue(P!==null),x.version.compareTo(P)<0&&(p.applyToRemoteDocument(x,c),x.isValidDocument()&&(x.setReadTime(c.commitVersion),d.addEntry(x)))})}),w.next(()=>u.mutationQueue.removeMutationBatch(l,p))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(u){let l=te();for(let c=0;c<u.mutationResults.length;++c)u.mutationResults[c].transformResults.length>0&&(l=l.add(u.batch.mutations[c].key));return l}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function _w(t){const e=J(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ur.getLastRemoteSnapshotVersion(n))}function eP(t,e){const n=J(t),r=e.snapshotVersion;let i=n.os;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.cs.newChangeBuffer({trackRemovals:!0});i=n.os;const u=[];e.targetChanges.forEach((d,p)=>{const m=i.get(p);if(!m)return;u.push(n.Ur.removeMatchingKeys(s,d.removedDocuments,p).next(()=>n.Ur.addMatchingKeys(s,d.addedDocuments,p)));let w=m.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(p)!==null?w=w.withResumeToken(Ye.EMPTY_BYTE_STRING,X.min()).withLastLimboFreeSnapshotVersion(X.min()):d.resumeToken.approximateByteSize()>0&&(w=w.withResumeToken(d.resumeToken,r)),i=i.insert(p,w),function(x,P,S){return x.resumeToken.approximateByteSize()===0||P.snapshotVersion.toMicroseconds()-x.snapshotVersion.toMicroseconds()>=3e8?!0:S.addedDocuments.size+S.modifiedDocuments.size+S.removedDocuments.size>0}(m,w,d)&&u.push(n.Ur.updateTargetData(s,w))});let l=Vn(),c=te();if(e.documentUpdates.forEach(d=>{e.resolvedLimboDocuments.has(d)&&u.push(n.persistence.referenceDelegate.updateLimboDocument(s,d))}),u.push(tP(s,o,e.documentUpdates).next(d=>{l=d.Ps,c=d.Is})),!r.isEqual(X.min())){const d=n.Ur.getLastRemoteSnapshotVersion(s).next(p=>n.Ur.setTargetsMetadata(s,s.currentSequenceNumber,r));u.push(d)}return L.waitFor(u).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,l,c)).next(()=>l)}).then(s=>(n.os=i,s))}function tP(t,e,n){let r=te(),i=te();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=Vn();return n.forEach((u,l)=>{const c=s.get(u);l.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(u)),l.isNoDocument()&&l.version.isEqual(X.min())?(e.removeEntry(u,l.readTime),o=o.insert(u,l)):!c.isValidDocument()||l.version.compareTo(c.version)>0||l.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(l),o=o.insert(u,l)):H("LocalStore","Ignoring outdated watch update for ",u,". Current version:",c.version," Watch version:",l.version)}),{Ps:o,Is:i}})}function nP(t,e){const n=J(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function rP(t,e){const n=J(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Ur.getTargetData(r,e).next(s=>s?(i=s,L.resolve(i)):n.Ur.allocateTargetId(r).next(o=>(i=new nr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Ur.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.os.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.os=n.os.insert(r.targetId,r),n._s.set(e,r.targetId)),r})}async function Zh(t,e,n){const r=J(t),i=r.os.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Fo(o))throw o;H("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.os=r.os.remove(e),r._s.delete(i.target)}function ny(t,e,n){const r=J(t);let i=X.min(),s=te();return r.persistence.runTransaction("Execute query","readwrite",o=>function(l,c,d){const p=J(l),m=p._s.get(d);return m!==void 0?L.resolve(p.os.get(m)):p.Ur.getTargetData(c,d)}(r,o,nn(e)).next(u=>{if(u)return i=u.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(o,u.targetId).next(l=>{s=l})}).next(()=>r.ss.getDocumentsMatchingQuery(o,e,n?i:X.min(),n?s:te())).next(u=>(iP(r,KC(e),u),{documents:u,Ts:s})))}function iP(t,e,n){let r=t.us.get(e)||X.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.us.set(e,r)}class ry{constructor(){this.activeTargetIds=ZC()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class sP{constructor(){this.so=new ry,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,n,r){this.oo[e]=n}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new ry,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oP{_o(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iy{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){H("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){H("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Na=null;function Vc(){return Na===null?Na=function(){return 268435456+Math.round(2147483648*Math.random())}():Na++,"0x"+Na.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aP={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lP{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nt="WebChannelConnection";class uP extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+n.host,this.vo=`projects/${i}/databases/${s}`,this.Co=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get Fo(){return!1}Mo(n,r,i,s,o){const u=Vc(),l=this.xo(n,r.toUriEncodedString());H("RestConnection",`Sending RPC '${n}' ${u}:`,l,i);const c={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(c,s,o),this.No(n,l,c,i).then(d=>(H("RestConnection",`Received RPC '${n}' ${u}: `,d),d),d=>{throw qi("RestConnection",`RPC '${n}' ${u} failed with error: `,d,"url: ",l,"request:",i),d})}Lo(n,r,i,s,o,u){return this.Mo(n,r,i,s,o)}Oo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+os}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}xo(n,r){const i=aP[n];return`${this.Do}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,n,r,i){const s=Vc();return new Promise((o,u)=>{const l=new D0;l.setWithCredentials(!0),l.listenOnce(O0.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case qa.NO_ERROR:const d=l.getResponseJson();H(nt,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(d)),o(d);break;case qa.TIMEOUT:H(nt,`RPC '${e}' ${s} timed out`),u(new W(F.DEADLINE_EXCEEDED,"Request time out"));break;case qa.HTTP_ERROR:const p=l.getStatus();if(H(nt,`RPC '${e}' ${s} failed with status:`,p,"response text:",l.getResponseText()),p>0){let m=l.getResponseJson();Array.isArray(m)&&(m=m[0]);const w=m==null?void 0:m.error;if(w&&w.status&&w.message){const A=function(P){const S=P.toLowerCase().replace(/_/g,"-");return Object.values(F).indexOf(S)>=0?S:F.UNKNOWN}(w.status);u(new W(A,w.message))}else u(new W(F.UNKNOWN,"Server responded with status "+l.getStatus()))}else u(new W(F.UNAVAILABLE,"Connection failed."));break;default:Q()}}finally{H(nt,`RPC '${e}' ${s} completed.`)}});const c=JSON.stringify(i);H(nt,`RPC '${e}' ${s} sending request:`,i),l.send(n,"POST",c,r,15)})}Bo(e,n,r){const i=Vc(),s=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=L0(),u=M0(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(l.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Oo(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const d=s.join("");H(nt,`Creating RPC '${e}' stream ${i}: ${d}`,l);const p=o.createWebChannel(d,l);let m=!1,w=!1;const A=new lP({Io:P=>{w?H(nt,`Not sending because RPC '${e}' stream ${i} is closed:`,P):(m||(H(nt,`Opening RPC '${e}' stream ${i} transport.`),p.open(),m=!0),H(nt,`RPC '${e}' stream ${i} sending:`,P),p.send(P))},To:()=>p.close()}),x=(P,S,_)=>{P.listen(S,E=>{try{_(E)}catch(D){setTimeout(()=>{throw D},0)}})};return x(p,Ls.EventType.OPEN,()=>{w||(H(nt,`RPC '${e}' stream ${i} transport opened.`),A.yo())}),x(p,Ls.EventType.CLOSE,()=>{w||(w=!0,H(nt,`RPC '${e}' stream ${i} transport closed`),A.So())}),x(p,Ls.EventType.ERROR,P=>{w||(w=!0,qi(nt,`RPC '${e}' stream ${i} transport errored:`,P),A.So(new W(F.UNAVAILABLE,"The operation could not be completed")))}),x(p,Ls.EventType.MESSAGE,P=>{var S;if(!w){const _=P.data[0];ue(!!_);const E=_,D=E.error||((S=E[0])===null||S===void 0?void 0:S.error);if(D){H(nt,`RPC '${e}' stream ${i} received error:`,D);const V=D.status;let M=function(v){const I=Ne[v];if(I!==void 0)return lw(I)}(V),T=D.message;M===void 0&&(M=F.INTERNAL,T="Unknown error status: "+V+" with message "+D.message),w=!0,A.So(new W(M,T)),p.close()}else H(nt,`RPC '${e}' stream ${i} received:`,_),A.bo(_)}}),x(u,V0.STAT_EVENT,P=>{P.stat===$h.PROXY?H(nt,`RPC '${e}' stream ${i} detected buffering proxy`):P.stat===$h.NOPROXY&&H(nt,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{A.wo()},0),A}}function Mc(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Eu(t){return new _k(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ww{constructor(e,n,r=1e3,i=1.5,s=6e4){this.ui=e,this.timerId=n,this.ko=r,this.qo=i,this.Qo=s,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),i=Math.max(0,n-r);i>0&&H("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,i,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ew{constructor(e,n,r,i,s,o,u,l){this.ui=e,this.Ho=r,this.Jo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=u,this.listener=l,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new ww(e,n)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,n){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():n&&n.code===F.RESOURCE_EXHAUSTED?(On(n.toString()),On("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):n&&n.code===F.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(n)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),n=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Yo===n&&this.P_(r,i)},r=>{e(()=>{const i=new W(F.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(i)})})}P_(e,n){const r=this.h_(this.Yo);this.stream=this.T_(e,n),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(i=>{r(()=>this.I_(i))}),this.stream.onMessage(i=>{r(()=>++this.e_==1?this.E_(i):this.onNext(i))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return H("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return n=>{this.ui.enqueueAndForget(()=>this.Yo===e?n():(H("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class cP extends Ew{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}T_(e,n){return this.connection.Bo("Listen",e,n)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const n=Ik(this.serializer,e),r=function(s){if(!("targetChange"in s))return X.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?X.min():o.readTime?sn(o.readTime):X.min()}(e);return this.listener.d_(n,r)}A_(e){const n={};n.database=Jh(this.serializer),n.addTarget=function(s,o){let u;const l=o.target;if(u=Kh(l)?{documents:Ak(s,l)}:{query:Rk(s,l)._t},u.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){u.resumeToken=hw(s,o.resumeToken);const c=Qh(s,o.expectedCount);c!==null&&(u.expectedCount=c)}else if(o.snapshotVersion.compareTo(X.min())>0){u.readTime=bl(s,o.snapshotVersion.toTimestamp());const c=Qh(s,o.expectedCount);c!==null&&(u.expectedCount=c)}return u}(this.serializer,e);const r=kk(this.serializer,e);r&&(n.labels=r),this.a_(n)}R_(e){const n={};n.database=Jh(this.serializer),n.removeTarget=e,this.a_(n)}}class hP extends Ew{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,n){return this.connection.Bo("Write",e,n)}E_(e){return ue(!!e.streamToken),this.lastStreamToken=e.streamToken,ue(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){ue(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const n=Sk(e.writeResults,e.commitTime),r=sn(e.commitTime);return this.listener.g_(r,n)}p_(){const e={};e.database=Jh(this.serializer),this.a_(e)}m_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>Tk(this.serializer,r))};this.a_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dP extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.y_=!1}w_(){if(this.y_)throw new W(F.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,n,r,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Mo(e,Yh(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===F.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new W(F.UNKNOWN,s.toString())})}Lo(e,n,r,i,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,u])=>this.connection.Lo(e,Yh(n,r),i,o,u,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===F.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new W(F.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class fP{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(On(n),this.D_=!1):H("OnlineStateTracker",n)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pP{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=s,this.k_._o(o=>{r.enqueueAndForget(async()=>{si(this)&&(H("RemoteStore","Restarting streams for network reachability change."),await async function(l){const c=J(l);c.L_.add(4),await Bo(c),c.q_.set("Unknown"),c.L_.delete(4),await Iu(c)}(this))})}),this.q_=new fP(r,i)}}async function Iu(t){if(si(t))for(const e of t.B_)await e(!0)}async function Bo(t){for(const e of t.B_)await e(!1)}function Iw(t,e){const n=J(t);n.N_.has(e.targetId)||(n.N_.set(e.targetId,e),Cf(n)?Rf(n):ls(n).r_()&&Af(n,e))}function Sf(t,e){const n=J(t),r=ls(n);n.N_.delete(e),r.r_()&&Tw(n,e),n.N_.size===0&&(r.r_()?r.o_():si(n)&&n.q_.set("Unknown"))}function Af(t,e){if(t.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(X.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}ls(t).A_(e)}function Tw(t,e){t.Q_.xe(e),ls(t).R_(e)}function Rf(t){t.Q_=new mk({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.N_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),ls(t).start(),t.q_.v_()}function Cf(t){return si(t)&&!ls(t).n_()&&t.N_.size>0}function si(t){return J(t).L_.size===0}function Sw(t){t.Q_=void 0}async function mP(t){t.q_.set("Online")}async function gP(t){t.N_.forEach((e,n)=>{Af(t,e)})}async function yP(t,e){Sw(t),Cf(t)?(t.q_.M_(e),Rf(t)):t.q_.set("Unknown")}async function vP(t,e,n){if(t.q_.set("Online"),e instanceof cw&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const u of s.targetIds)i.N_.has(u)&&(await i.remoteSyncer.rejectListen(u,o),i.N_.delete(u),i.Q_.removeTarget(u))}(t,e)}catch(r){H("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Dl(t,r)}else if(e instanceof Qa?t.Q_.Ke(e):e instanceof uw?t.Q_.He(e):t.Q_.We(e),!n.isEqual(X.min()))try{const r=await _w(t.localStore);n.compareTo(r)>=0&&await function(s,o){const u=s.Q_.rt(o);return u.targetChanges.forEach((l,c)=>{if(l.resumeToken.approximateByteSize()>0){const d=s.N_.get(c);d&&s.N_.set(c,d.withResumeToken(l.resumeToken,o))}}),u.targetMismatches.forEach((l,c)=>{const d=s.N_.get(l);if(!d)return;s.N_.set(l,d.withResumeToken(Ye.EMPTY_BYTE_STRING,d.snapshotVersion)),Tw(s,l);const p=new nr(d.target,l,c,d.sequenceNumber);Af(s,p)}),s.remoteSyncer.applyRemoteEvent(u)}(t,n)}catch(r){H("RemoteStore","Failed to raise snapshot:",r),await Dl(t,r)}}async function Dl(t,e,n){if(!Fo(e))throw e;t.L_.add(1),await Bo(t),t.q_.set("Offline"),n||(n=()=>_w(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{H("RemoteStore","Retrying IndexedDB access"),await n(),t.L_.delete(1),await Iu(t)})}function Aw(t,e){return e().catch(n=>Dl(t,n,e))}async function Tu(t){const e=J(t),n=vr(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;_P(e);)try{const i=await nP(e.localStore,r);if(i===null){e.O_.length===0&&n.o_();break}r=i.batchId,wP(e,i)}catch(i){await Dl(e,i)}Rw(e)&&Cw(e)}function _P(t){return si(t)&&t.O_.length<10}function wP(t,e){t.O_.push(e);const n=vr(t);n.r_()&&n.V_&&n.m_(e.mutations)}function Rw(t){return si(t)&&!vr(t).n_()&&t.O_.length>0}function Cw(t){vr(t).start()}async function EP(t){vr(t).p_()}async function IP(t){const e=vr(t);for(const n of t.O_)e.m_(n.mutations)}async function TP(t,e,n){const r=t.O_.shift(),i=vf.from(r,e,n);await Aw(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Tu(t)}async function SP(t,e){e&&vr(t).V_&&await async function(r,i){if(function(o){return dk(o)&&o!==F.ABORTED}(i.code)){const s=r.O_.shift();vr(r).s_(),await Aw(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Tu(r)}}(t,e),Rw(t)&&Cw(t)}async function sy(t,e){const n=J(t);n.asyncQueue.verifyOperationInProgress(),H("RemoteStore","RemoteStore received new credentials");const r=si(n);n.L_.add(3),await Bo(n),r&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.L_.delete(3),await Iu(n)}async function AP(t,e){const n=J(t);e?(n.L_.delete(2),await Iu(n)):e||(n.L_.add(2),await Bo(n),n.q_.set("Unknown"))}function ls(t){return t.K_||(t.K_=function(n,r,i){const s=J(n);return s.w_(),new cP(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Eo:mP.bind(null,t),Ro:gP.bind(null,t),mo:yP.bind(null,t),d_:vP.bind(null,t)}),t.B_.push(async e=>{e?(t.K_.s_(),Cf(t)?Rf(t):t.q_.set("Unknown")):(await t.K_.stop(),Sw(t))})),t.K_}function vr(t){return t.U_||(t.U_=function(n,r,i){const s=J(n);return s.w_(),new hP(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Eo:()=>Promise.resolve(),Ro:EP.bind(null,t),mo:SP.bind(null,t),f_:IP.bind(null,t),g_:TP.bind(null,t)}),t.B_.push(async e=>{e?(t.U_.s_(),await Tu(t)):(await t.U_.stop(),t.O_.length>0&&(H("RemoteStore",`Stopping write stream with ${t.O_.length} pending writes`),t.O_=[]))})),t.U_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kf{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new fr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,u=new kf(e,n,o,i,s);return u.start(r),u}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new W(F.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Pf(t,e){if(On("AsyncQueue",`${e}: ${t}`),Fo(t))return new W(F.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oi{constructor(e){this.comparator=e?(n,r)=>e(n,r)||q.comparator(n.key,r.key):(n,r)=>q.comparator(n.key,r.key),this.keyedMap=Fs(),this.sortedSet=new Ie(this.comparator)}static emptySet(e){return new Oi(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Oi)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Oi;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oy{constructor(){this.W_=new Ie(q.comparator)}track(e){const n=e.doc.key,r=this.W_.get(n);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(n,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(n):e.type===1&&r.type===2?this.W_=this.W_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):Q():this.W_=this.W_.insert(n,e)}G_(){const e=[];return this.W_.inorderTraversal((n,r)=>{e.push(r)}),e}}class Ji{constructor(e,n,r,i,s,o,u,l,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=u,this.excludesMetadataChanges=l,this.hasCachedResults=c}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(u=>{o.push({type:0,doc:u})}),new Ji(e,n,Oi.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&gu(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RP{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class CP{constructor(){this.queries=ay(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(n,r){const i=J(n),s=i.queries;i.queries=ay(),s.forEach((o,u)=>{for(const l of u.j_)l.onError(r)})})(this,new W(F.ABORTED,"Firestore shutting down"))}}function ay(){return new as(t=>Q0(t),gu)}async function kw(t,e){const n=J(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.H_()&&e.J_()&&(r=2):(s=new RP,r=e.J_()?0:1);try{switch(r){case 0:s.z_=await n.onListen(i,!0);break;case 1:s.z_=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const u=Pf(o,`Initialization of query '${hi(e.query)}' failed`);return void e.onError(u)}n.queries.set(i,s),s.j_.push(e),e.Z_(n.onlineState),s.z_&&e.X_(s.z_)&&xf(n)}async function Pw(t,e){const n=J(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.j_.indexOf(e);o>=0&&(s.j_.splice(o,1),s.j_.length===0?i=e.J_()?0:1:!s.H_()&&e.J_()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function kP(t,e){const n=J(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const u of o.j_)u.X_(i)&&(r=!0);o.z_=i}}r&&xf(n)}function PP(t,e,n){const r=J(t),i=r.queries.get(e);if(i)for(const s of i.j_)s.onError(n);r.queries.delete(e)}function xf(t){t.Y_.forEach(e=>{e.next()})}var ed,ly;(ly=ed||(ed={})).ea="default",ly.Cache="cache";class xw{constructor(e,n,r){this.query=e,this.ta=n,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Ji(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.na?this.ia(e)&&(this.ta.next(e),n=!0):this.sa(e,this.onlineState)&&(this.oa(e),n=!0),this.ra=e,n}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let n=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),n=!0),n}sa(e,n){if(!e.fromCache||!this.J_())return!0;const r=n!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const n=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}oa(e){e=Ji.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==ed.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nw{constructor(e){this.key=e}}class bw{constructor(e){this.key=e}}class xP{constructor(e,n){this.query=e,this.Ta=n,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=te(),this.mutatedKeys=te(),this.Aa=Y0(e),this.Ra=new Oi(this.Aa)}get Va(){return this.Ta}ma(e,n){const r=n?n.fa:new oy,i=n?n.Ra:this.Ra;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,u=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((d,p)=>{const m=i.get(d),w=yu(this.query,p)?p:null,A=!!m&&this.mutatedKeys.has(m.key),x=!!w&&(w.hasLocalMutations||this.mutatedKeys.has(w.key)&&w.hasCommittedMutations);let P=!1;m&&w?m.data.isEqual(w.data)?A!==x&&(r.track({type:3,doc:w}),P=!0):this.ga(m,w)||(r.track({type:2,doc:w}),P=!0,(l&&this.Aa(w,l)>0||c&&this.Aa(w,c)<0)&&(u=!0)):!m&&w?(r.track({type:0,doc:w}),P=!0):m&&!w&&(r.track({type:1,doc:m}),P=!0,(l||c)&&(u=!0)),P&&(w?(o=o.add(w),s=x?s.add(d):s.delete(d)):(o=o.delete(d),s=s.delete(d)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const d=this.query.limitType==="F"?o.last():o.first();o=o.delete(d.key),s=s.delete(d.key),r.track({type:1,doc:d})}return{Ra:o,fa:r,ns:u,mutatedKeys:s}}ga(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const o=e.fa.G_();o.sort((d,p)=>function(w,A){const x=P=>{switch(P){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Q()}};return x(w)-x(A)}(d.type,p.type)||this.Aa(d.doc,p.doc)),this.pa(r),i=i!=null&&i;const u=n&&!i?this.ya():[],l=this.da.size===0&&this.current&&!i?1:0,c=l!==this.Ea;return this.Ea=l,o.length!==0||c?{snapshot:new Ji(this.query,e.Ra,s,o,e.mutatedKeys,l===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:u}:{wa:u}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new oy,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(n=>this.Ta=this.Ta.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ta=this.Ta.delete(n)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=te(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const n=[];return e.forEach(r=>{this.da.has(r)||n.push(new bw(r))}),this.da.forEach(r=>{e.has(r)||n.push(new Nw(r))}),n}ba(e){this.Ta=e.Ts,this.da=te();const n=this.ma(e.documents);return this.applyChanges(n,!0)}Da(){return Ji.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class NP{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class bP{constructor(e){this.key=e,this.va=!1}}class DP{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new as(u=>Q0(u),gu),this.Ma=new Map,this.xa=new Set,this.Oa=new Ie(q.comparator),this.Na=new Map,this.La=new Ef,this.Ba={},this.ka=new Map,this.qa=Xi.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function OP(t,e,n=!0){const r=Fw(t);let i;const s=r.Fa.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.Da()):i=await Dw(r,e,n,!0),i}async function VP(t,e){const n=Fw(t);await Dw(n,e,!0,!1)}async function Dw(t,e,n,r){const i=await rP(t.localStore,nn(e)),s=i.targetId,o=t.sharedClientState.addLocalQueryTarget(s,n);let u;return r&&(u=await MP(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&Iw(t.remoteStore,i),u}async function MP(t,e,n,r,i){t.Ka=(p,m,w)=>async function(x,P,S,_){let E=P.view.ma(S);E.ns&&(E=await ny(x.localStore,P.query,!1).then(({documents:T})=>P.view.ma(T,E)));const D=_&&_.targetChanges.get(P.targetId),V=_&&_.targetMismatches.get(P.targetId)!=null,M=P.view.applyChanges(E,x.isPrimaryClient,D,V);return cy(x,P.targetId,M.wa),M.snapshot}(t,p,m,w);const s=await ny(t.localStore,e,!0),o=new xP(e,s.Ts),u=o.ma(s.documents),l=jo.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),c=o.applyChanges(u,t.isPrimaryClient,l);cy(t,n,c.wa);const d=new NP(e,n,o);return t.Fa.set(e,d),t.Ma.has(n)?t.Ma.get(n).push(e):t.Ma.set(n,[e]),c.snapshot}async function LP(t,e,n){const r=J(t),i=r.Fa.get(e),s=r.Ma.get(i.targetId);if(s.length>1)return r.Ma.set(i.targetId,s.filter(o=>!gu(o,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await Zh(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&Sf(r.remoteStore,i.targetId),td(r,i.targetId)}).catch(Lo)):(td(r,i.targetId),await Zh(r.localStore,i.targetId,!0))}async function FP(t,e){const n=J(t),r=n.Fa.get(e),i=n.Ma.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Sf(n.remoteStore,r.targetId))}async function UP(t,e,n){const r=qP(t);try{const i=await function(o,u){const l=J(o),c=Le.now(),d=u.reduce((w,A)=>w.add(A.key),te());let p,m;return l.persistence.runTransaction("Locally write mutations","readwrite",w=>{let A=Vn(),x=te();return l.cs.getEntries(w,d).next(P=>{A=P,A.forEach((S,_)=>{_.isValidDocument()||(x=x.add(S))})}).next(()=>l.localDocuments.getOverlayedDocuments(w,A)).next(P=>{p=P;const S=[];for(const _ of u){const E=ak(_,p.get(_.key).overlayedDocument);E!=null&&S.push(new Ir(_.key,E,z0(E.value.mapValue),rn.exists(!0)))}return l.mutationQueue.addMutationBatch(w,c,S,u)}).next(P=>{m=P;const S=P.applyToLocalDocumentSet(p,x);return l.documentOverlayCache.saveOverlays(w,P.batchId,S)})}).then(()=>({batchId:m.batchId,changes:J0(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,u,l){let c=o.Ba[o.currentUser.toKey()];c||(c=new Ie(oe)),c=c.insert(u,l),o.Ba[o.currentUser.toKey()]=c}(r,i.batchId,n),await zo(r,i.changes),await Tu(r.remoteStore)}catch(i){const s=Pf(i,"Failed to persist write");n.reject(s)}}async function Ow(t,e){const n=J(t);try{const r=await eP(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Na.get(s);o&&(ue(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.va=!0:i.modifiedDocuments.size>0?ue(o.va):i.removedDocuments.size>0&&(ue(o.va),o.va=!1))}),await zo(n,r,e)}catch(r){await Lo(r)}}function uy(t,e,n){const r=J(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Fa.forEach((s,o)=>{const u=o.view.Z_(e);u.snapshot&&i.push(u.snapshot)}),function(o,u){const l=J(o);l.onlineState=u;let c=!1;l.queries.forEach((d,p)=>{for(const m of p.j_)m.Z_(u)&&(c=!0)}),c&&xf(l)}(r.eventManager,e),i.length&&r.Ca.d_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function jP(t,e,n){const r=J(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Na.get(e),s=i&&i.key;if(s){let o=new Ie(q.comparator);o=o.insert(s,st.newNoDocument(s,X.min()));const u=te().add(s),l=new wu(X.min(),new Map,new Ie(oe),o,u);await Ow(r,l),r.Oa=r.Oa.remove(s),r.Na.delete(e),Nf(r)}else await Zh(r.localStore,e,!1).then(()=>td(r,e,n)).catch(Lo)}async function BP(t,e){const n=J(t),r=e.batch.batchId;try{const i=await Zk(n.localStore,e);Mw(n,r,null),Vw(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await zo(n,i)}catch(i){await Lo(i)}}async function zP(t,e,n){const r=J(t);try{const i=await function(o,u){const l=J(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let d;return l.mutationQueue.lookupMutationBatch(c,u).next(p=>(ue(p!==null),d=p.keys(),l.mutationQueue.removeMutationBatch(c,p))).next(()=>l.mutationQueue.performConsistencyCheck(c)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(c,d,u)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,d)).next(()=>l.localDocuments.getDocuments(c,d))})}(r.localStore,e);Mw(r,e,n),Vw(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await zo(r,i)}catch(i){await Lo(i)}}function Vw(t,e){(t.ka.get(e)||[]).forEach(n=>{n.resolve()}),t.ka.delete(e)}function Mw(t,e,n){const r=J(t);let i=r.Ba[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Ba[r.currentUser.toKey()]=i}}function td(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Ma.get(e))t.Fa.delete(r),n&&t.Ca.$a(r,n);t.Ma.delete(e),t.isPrimaryClient&&t.La.gr(e).forEach(r=>{t.La.containsKey(r)||Lw(t,r)})}function Lw(t,e){t.xa.delete(e.path.canonicalString());const n=t.Oa.get(e);n!==null&&(Sf(t.remoteStore,n),t.Oa=t.Oa.remove(e),t.Na.delete(n),Nf(t))}function cy(t,e,n){for(const r of n)r instanceof Nw?(t.La.addReference(r.key,e),$P(t,r)):r instanceof bw?(H("SyncEngine","Document no longer in limbo: "+r.key),t.La.removeReference(r.key,e),t.La.containsKey(r.key)||Lw(t,r.key)):Q()}function $P(t,e){const n=e.key,r=n.path.canonicalString();t.Oa.get(n)||t.xa.has(r)||(H("SyncEngine","New document in limbo: "+n),t.xa.add(r),Nf(t))}function Nf(t){for(;t.xa.size>0&&t.Oa.size<t.maxConcurrentLimboResolutions;){const e=t.xa.values().next().value;t.xa.delete(e);const n=new q(Re.fromString(e)),r=t.qa.next();t.Na.set(r,new bP(n)),t.Oa=t.Oa.insert(n,r),Iw(t.remoteStore,new nr(nn(mu(n.path)),r,"TargetPurposeLimboResolution",hf.oe))}}async function zo(t,e,n){const r=J(t),i=[],s=[],o=[];r.Fa.isEmpty()||(r.Fa.forEach((u,l)=>{o.push(r.Ka(l,e,n).then(c=>{var d;if((c||n)&&r.isPrimaryClient){const p=c?!c.fromCache:(d=n==null?void 0:n.targetChanges.get(l.targetId))===null||d===void 0?void 0:d.current;r.sharedClientState.updateQueryState(l.targetId,p?"current":"not-current")}if(c){i.push(c);const p=Tf.Wi(l.targetId,c);s.push(p)}}))}),await Promise.all(o),r.Ca.d_(i),await async function(l,c){const d=J(l);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>L.forEach(c,m=>L.forEach(m.$i,w=>d.persistence.referenceDelegate.addReference(p,m.targetId,w)).next(()=>L.forEach(m.Ui,w=>d.persistence.referenceDelegate.removeReference(p,m.targetId,w)))))}catch(p){if(!Fo(p))throw p;H("LocalStore","Failed to update sequence numbers: "+p)}for(const p of c){const m=p.targetId;if(!p.fromCache){const w=d.os.get(m),A=w.snapshotVersion,x=w.withLastLimboFreeSnapshotVersion(A);d.os=d.os.insert(m,x)}}}(r.localStore,s))}async function HP(t,e){const n=J(t);if(!n.currentUser.isEqual(e)){H("SyncEngine","User change. New user:",e.toKey());const r=await vw(n.localStore,e);n.currentUser=e,function(s,o){s.ka.forEach(u=>{u.forEach(l=>{l.reject(new W(F.CANCELLED,o))})}),s.ka.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await zo(n,r.hs)}}function WP(t,e){const n=J(t),r=n.Na.get(e);if(r&&r.va)return te().add(r.key);{let i=te();const s=n.Ma.get(e);if(!s)return i;for(const o of s){const u=n.Fa.get(o);i=i.unionWith(u.view.Va)}return i}}function Fw(t){const e=J(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Ow.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=WP.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=jP.bind(null,e),e.Ca.d_=kP.bind(null,e.eventManager),e.Ca.$a=PP.bind(null,e.eventManager),e}function qP(t){const e=J(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=BP.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=zP.bind(null,e),e}class Ol{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Eu(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,n){return null}Ha(e,n){return null}za(e){return Jk(this.persistence,new Yk,e.initialUser,this.serializer)}Ga(e){return new Kk(If.Zr,this.serializer)}Wa(e){return new sP}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Ol.provider={build:()=>new Ol};class nd{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>uy(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=HP.bind(null,this.syncEngine),await AP(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new CP}()}createDatastore(e){const n=Eu(e.databaseInfo.databaseId),r=function(s){return new uP(s)}(e.databaseInfo);return function(s,o,u,l){return new dP(s,o,u,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,u){return new pP(r,i,s,o,u)}(this.localStore,this.datastore,e.asyncQueue,n=>uy(this.syncEngine,n,0),function(){return iy.D()?new iy:new oP}())}createSyncEngine(e,n){return function(i,s,o,u,l,c,d){const p=new DP(i,s,o,u,l,c);return d&&(p.Qa=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const s=J(i);H("RemoteStore","RemoteStore shutting down."),s.L_.add(5),await Bo(s),s.k_.shutdown(),s.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}nd.provider={build:()=>new nd};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uw{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):On("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KP{constructor(e,n,r,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=rt.UNAUTHENTICATED,this.clientId=U0.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async o=>{H("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(H("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new fr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Pf(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Lc(t,e){t.asyncQueue.verifyOperationInProgress(),H("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await vw(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function hy(t,e){t.asyncQueue.verifyOperationInProgress();const n=await GP(t);H("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>sy(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>sy(e.remoteStore,i)),t._onlineComponents=e}async function GP(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){H("FirestoreClient","Using user provided OfflineComponentProvider");try{await Lc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(i){return i.name==="FirebaseError"?i.code===F.FAILED_PRECONDITION||i.code===F.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(n))throw n;qi("Error using user provided cache. Falling back to memory cache: "+n),await Lc(t,new Ol)}}else H("FirestoreClient","Using default OfflineComponentProvider"),await Lc(t,new Ol);return t._offlineComponents}async function jw(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(H("FirestoreClient","Using user provided OnlineComponentProvider"),await hy(t,t._uninitializedComponentsProvider._online)):(H("FirestoreClient","Using default OnlineComponentProvider"),await hy(t,new nd))),t._onlineComponents}function QP(t){return jw(t).then(e=>e.syncEngine)}async function rd(t){const e=await jw(t),n=e.eventManager;return n.onListen=OP.bind(null,e.syncEngine),n.onUnlisten=LP.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=VP.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=FP.bind(null,e.syncEngine),n}function YP(t,e,n={}){const r=new fr;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,u,l,c){const d=new Uw({next:m=>{d.Za(),o.enqueueAndForget(()=>Pw(s,p));const w=m.docs.has(u);!w&&m.fromCache?c.reject(new W(F.UNAVAILABLE,"Failed to get document because the client is offline.")):w&&m.fromCache&&l&&l.source==="server"?c.reject(new W(F.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(m)},error:m=>c.reject(m)}),p=new xw(mu(u.path),d,{includeMetadataChanges:!0,_a:!0});return kw(s,p)}(await rd(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bw(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dy=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XP(t,e,n){if(!n)throw new W(F.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function JP(t,e,n,r){if(e===!0&&r===!0)throw new W(F.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function fy(t){if(!q.isDocumentKey(t))throw new W(F.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function bf(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Q()}function on(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new W(F.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=bf(t);throw new W(F.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class py{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new W(F.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new W(F.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}JP("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Bw((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new W(F.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new W(F.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new W(F.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Df{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new py({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new W(F.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new W(F.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new py(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new pC;switch(r.type){case"firstParty":return new vC(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new W(F.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=dy.get(n);r&&(H("ComponentProvider","Removing Datastore"),dy.delete(n),r.terminate())}(this),Promise.resolve()}}function ZP(t,e,n,r={}){var i;const s=(t=on(t,Df))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&qi("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let u,l;if(typeof r.mockUserToken=="string")u=r.mockUserToken,l=rt.MOCK_USER;else{u=$A(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new W(F.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new rt(c)}t._authCredentials=new mC(new F0(u,l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Su{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Su(this.firestore,e,this._query)}}class Et{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Po(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Et(this.firestore,e,this._key)}}class Po extends Su{constructor(e,n,r){super(e,n,mu(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Et(this.firestore,null,new q(e))}withConverter(e){return new Po(this.firestore,e,this._path)}}function an(t,e,...n){if(t=lt(t),arguments.length===1&&(e=U0.newId()),XP("doc","path",e),t instanceof Df){const r=Re.fromString(e,...n);return fy(r),new Et(t,null,new q(r))}{if(!(t instanceof Et||t instanceof Po))throw new W(F.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Re.fromString(e,...n));return fy(r),new Et(t.firestore,t instanceof Po?t.converter:null,new q(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class my{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new ww(this,"async_queue_retry"),this.Vu=()=>{const r=Mc();r&&H("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const n=Mc();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const n=Mc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const n=new fr;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!Fo(e))throw e;H("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const n=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const i=function(o){let u=o.message||"";return o.stack&&(u=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),u}(r);throw On("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.du=!1,r))));return this.mu=n,n}enqueueAfterDelay(e,n,r){this.fu(),this.Ru.indexOf(e)>-1&&(n=0);const i=kf.createAndSchedule(this,e,n,r,s=>this.yu(s));return this.Tu.push(i),i}fu(){this.Eu&&Q()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const n of this.Tu)if(n.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Tu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const n=this.Tu.indexOf(e);this.Tu.splice(n,1)}}function gy(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const i=n;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(t,["next","error","complete"])}class Zi extends Df{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new my,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new my(e),this._firestoreClient=void 0,await e}}}function ex(t,e){const n=typeof t=="object"?t:uf(),r=typeof t=="string"?t:"(default)",i=ri(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=BA("firestore");s&&ZP(i,...s)}return i}function Of(t){if(t._terminated)throw new W(F.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||tx(t),t._firestoreClient}function tx(t){var e,n,r;const i=t._freezeSettings(),s=function(u,l,c,d){return new NC(u,l,c,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,Bw(d.experimentalLongPollingOptions),d.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._componentsProvider||!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),t._firestoreClient=new KP(t._authCredentials,t._appCheckCredentials,t._queue,s,t._componentsProvider&&function(u){const l=u==null?void 0:u._online.build();return{_offline:u==null?void 0:u._offline.build(l),_online:l}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class es{constructor(e){this._byteString=e}static fromBase64String(e){try{return new es(Ye.fromBase64String(e))}catch(n){throw new W(F.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new es(Ye.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Au{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new W(F.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new qe(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ru{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vf{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new W(F.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new W(F.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return oe(this._lat,e._lat)||oe(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mf{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nx=/^__.*__$/;class rx{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Ir(e,this.data,this.fieldMask,n,this.fieldTransforms):new Uo(e,this.data,n,this.fieldTransforms)}}class zw{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Ir(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function $w(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Q()}}class Cu{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.vu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new Cu(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.Ou(e),i}Nu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.vu(),i}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return Vl(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if($w(this.Cu)&&nx.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class ix{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Eu(e)}Qu(e,n,r,i=!1){return new Cu({Cu:e,methodName:n,qu:r,path:qe.emptyPath(),xu:!1,ku:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Hw(t){const e=t._freezeSettings(),n=Eu(t._databaseId);return new ix(t._databaseId,!!e.ignoreUndefinedProperties,n)}function sx(t,e,n,r,i,s={}){const o=t.Qu(s.merge||s.mergeFields?2:0,e,n,i);Ff("Data must be an object, but it was:",o,r);const u=Ww(r,o);let l,c;if(s.merge)l=new Rt(o.fieldMask),c=o.fieldTransforms;else if(s.mergeFields){const d=[];for(const p of s.mergeFields){const m=id(e,p,n);if(!o.contains(m))throw new W(F.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);Kw(d,m)||d.push(m)}l=new Rt(d),c=o.fieldTransforms.filter(p=>l.covers(p.field))}else l=null,c=o.fieldTransforms;return new rx(new gt(u),l,c)}class ku extends Ru{_toFieldTransform(e){if(e.Cu!==2)throw e.Cu===1?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof ku}}function ox(t,e,n){return new Cu({Cu:3,qu:e.settings.qu,methodName:t._methodName,xu:n},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class Lf extends Ru{constructor(e,n){super(e),this.Ku=n}_toFieldTransform(e){const n=ox(this,e,!0),r=this.Ku.map(s=>$o(s,n)),i=new Yi(r);return new rk(e.path,i)}isEqual(e){return e instanceof Lf&&Wi(this.Ku,e.Ku)}}function ax(t,e,n,r){const i=t.Qu(1,e,n);Ff("Data must be an object, but it was:",i,r);const s=[],o=gt.empty();ii(r,(l,c)=>{const d=Uf(e,l,n);c=lt(c);const p=i.Nu(d);if(c instanceof ku)s.push(d);else{const m=$o(c,p);m!=null&&(s.push(d),o.set(d,m))}});const u=new Rt(s);return new zw(o,u,i.fieldTransforms)}function lx(t,e,n,r,i,s){const o=t.Qu(1,e,n),u=[id(e,r,n)],l=[i];if(s.length%2!=0)throw new W(F.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let m=0;m<s.length;m+=2)u.push(id(e,s[m])),l.push(s[m+1]);const c=[],d=gt.empty();for(let m=u.length-1;m>=0;--m)if(!Kw(c,u[m])){const w=u[m];let A=l[m];A=lt(A);const x=o.Nu(w);if(A instanceof ku)c.push(w);else{const P=$o(A,x);P!=null&&(c.push(w),d.set(w,P))}}const p=new Rt(c);return new zw(d,p,o.fieldTransforms)}function $o(t,e){if(qw(t=lt(t)))return Ff("Unsupported field value:",e,t),Ww(t,e);if(t instanceof Ru)return function(r,i){if(!$w(i.Cu))throw i.Bu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Bu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const u of r){let l=$o(u,i.Lu(o));l==null&&(l={nullValue:"NULL_VALUE"}),s.push(l),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=lt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return ek(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=Le.fromDate(r);return{timestampValue:bl(i.serializer,s)}}if(r instanceof Le){const s=new Le(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:bl(i.serializer,s)}}if(r instanceof Vf)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof es)return{bytesValue:hw(i.serializer,r._byteString)};if(r instanceof Et){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Bu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:wf(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof Mf)return function(o,u){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(l=>{if(typeof l!="number")throw u.Bu("VectorValues must only contain numeric values.");return yf(u.serializer,l)})}}}}}}(r,i);throw i.Bu(`Unsupported field value: ${bf(r)}`)}(t,e)}function Ww(t,e){const n={};return j0(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ii(t,(r,i)=>{const s=$o(i,e.Mu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function qw(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Le||t instanceof Vf||t instanceof es||t instanceof Et||t instanceof Ru||t instanceof Mf)}function Ff(t,e,n){if(!qw(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=bf(n);throw r==="an object"?e.Bu(t+" a custom object"):e.Bu(t+" "+r)}}function id(t,e,n){if((e=lt(e))instanceof Au)return e._internalPath;if(typeof e=="string")return Uf(t,e);throw Vl("Field path arguments must be of type string or ",t,!1,void 0,n)}const ux=new RegExp("[~\\*/\\[\\]]");function Uf(t,e,n){if(e.search(ux)>=0)throw Vl(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Au(...e.split("."))._internalPath}catch{throw Vl(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Vl(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let u=`Function ${e}() called with invalid data`;n&&(u+=" (via `toFirestore()`)"),u+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new W(F.INVALID_ARGUMENT,u+t+l)}function Kw(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gw{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Et(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new cx(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Qw("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class cx extends Gw{data(){return super.data()}}function Qw(t,e){return typeof e=="string"?Uf(t,e):e instanceof Au?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hx(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new W(F.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class dx{convertValue(e,n="none"){switch(Kr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Pe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(qr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw Q()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return ii(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertVectorValue(e){var n,r,i;const s=(i=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(o=>Pe(o.doubleValue));return new Mf(s)}convertGeoPoint(e){return new Vf(Pe(e.latitude),Pe(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=ff(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Ao(e));default:return null}}convertTimestamp(e){const n=yr(e);return new Le(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Re.fromString(e);ue(yw(r));const i=new Ro(r.get(1),r.get(3)),s=new q(r.popFirst(5));return i.isEqual(n)||On(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fx(t,e,n){let r;return r=t?t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class js{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Yw extends Gw{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Ya(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Qw("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Ya extends Yw{data(e={}){return super.data(e)}}class px{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new js(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Ya(this._firestore,this._userDataWriter,r.key,r,new js(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new W(F.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(u=>{const l=new Ya(i._firestore,i._userDataWriter,u.doc.key,u.doc,new js(i._snapshot.mutatedKeys.has(u.doc.key),i._snapshot.fromCache),i.query.converter);return u.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(u=>s||u.type!==3).map(u=>{const l=new Ya(i._firestore,i._userDataWriter,u.doc.key,u.doc,new js(i._snapshot.mutatedKeys.has(u.doc.key),i._snapshot.fromCache),i.query.converter);let c=-1,d=-1;return u.type!==0&&(c=o.indexOf(u.doc.key),o=o.delete(u.doc.key)),u.type!==1&&(o=o.add(u.doc),d=o.indexOf(u.doc.key)),{type:mx(u.type),doc:l,oldIndex:c,newIndex:d}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function mx(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Q()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gx(t){t=on(t,Et);const e=on(t.firestore,Zi);return YP(Of(e),t._key).then(n=>Zw(e,t,n))}class Xw extends dx{constructor(e){super(),this.firestore=e}convertBytes(e){return new es(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Et(this.firestore,null,n)}}function yx(t,e,n){t=on(t,Et);const r=on(t.firestore,Zi),i=fx(t.converter,e);return Jw(r,[sx(Hw(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,rn.none())])}function kn(t,e,n,...r){t=on(t,Et);const i=on(t.firestore,Zi),s=Hw(i);let o;return o=typeof(e=lt(e))=="string"||e instanceof Au?lx(s,"updateDoc",t._key,e,n,r):ax(s,"updateDoc",t._key,e),Jw(i,[o.toMutation(t._key,rn.exists(!0))])}function vx(t,...e){var n,r,i;t=lt(t);let s={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||gy(e[o])||(s=e[o],o++);const u={includeMetadataChanges:s.includeMetadataChanges,source:s.source};if(gy(e[o])){const p=e[o];e[o]=(n=p.next)===null||n===void 0?void 0:n.bind(p),e[o+1]=(r=p.error)===null||r===void 0?void 0:r.bind(p),e[o+2]=(i=p.complete)===null||i===void 0?void 0:i.bind(p)}let l,c,d;if(t instanceof Et)c=on(t.firestore,Zi),d=mu(t._key.path),l={next:p=>{e[o]&&e[o](Zw(c,t,p))},error:e[o+1],complete:e[o+2]};else{const p=on(t,Su);c=on(p.firestore,Zi),d=p._query;const m=new Xw(c);l={next:w=>{e[o]&&e[o](new px(c,m,p,w))},error:e[o+1],complete:e[o+2]},hx(t._query)}return function(m,w,A,x){const P=new Uw(x),S=new xw(w,P,A);return m.asyncQueue.enqueueAndForget(async()=>kw(await rd(m),S)),()=>{P.Za(),m.asyncQueue.enqueueAndForget(async()=>Pw(await rd(m),S))}}(Of(c),d,u,l)}function Jw(t,e){return function(r,i){const s=new fr;return r.asyncQueue.enqueueAndForget(async()=>UP(await QP(r),i,s)),s.promise}(Of(t),e)}function Zw(t,e,n){const r=n.docs.get(e._key),i=new Xw(t);return new Yw(t,i,e._key,r,new js(n.hasPendingWrites,n.fromCache),e.converter)}function _x(...t){return new Lf("arrayUnion",t)}(function(e,n=!0){(function(i){os=i})(ss),hn(new Qt("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),u=new Zi(new gC(r.getProvider("auth-internal")),new wC(r.getProvider("app-check-internal")),function(c,d){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new W(F.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ro(c.options.projectId,d)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),u._setSettings(s),u},"PUBLIC").setMultipleInstances(!0)),Lt(Vg,"4.7.3",e),Lt(Vg,"4.7.3","esm2017")})();var wx="firebase",Ex="10.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Lt(wx,Ex,"app");function jf(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function eE(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Ix=eE,tE=new ni("auth","Firebase",eE());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ml=new du("@firebase/auth");function Tx(t,...e){Ml.logLevel<=ne.WARN&&Ml.warn(`Auth (${ss}): ${t}`,...e)}function Xa(t,...e){Ml.logLevel<=ne.ERROR&&Ml.error(`Auth (${ss}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mn(t,...e){throw Bf(t,...e)}function ln(t,...e){return Bf(t,...e)}function nE(t,e,n){const r=Object.assign(Object.assign({},Ix()),{[e]:n});return new ni("auth","Firebase",r).create(e,{appName:t.name})}function Ur(t){return nE(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Bf(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return tE.create(t,...e)}function G(t,e,...n){if(!t)throw Bf(e,...n)}function Sn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Xa(e),new Error(e)}function Ln(t,e){t||Sn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sd(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Sx(){return yy()==="http:"||yy()==="https:"}function yy(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ax(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Sx()||T0()||"connection"in navigator)?navigator.onLine:!0}function Rx(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ho{constructor(e,n){this.shortDelay=e,this.longDelay=n,Ln(n>e,"Short delay should be less than long delay!"),this.isMobile=HA()||KA()}get(){return Ax()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zf(t,e){Ln(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rE{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Sn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Sn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Sn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cx={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kx=new Ho(3e4,6e4);function $f(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function us(t,e,n,r,i={}){return iE(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const u=Mo(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode);const c=Object.assign({method:e,headers:l},s);return qA()||(c.referrerPolicy="no-referrer"),rE.fetch()(sE(t,t.config.apiHost,n,u),c)})}async function iE(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},Cx),e);try{const i=new xx(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw ba(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const u=s.ok?o.errorMessage:o.error.message,[l,c]=u.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw ba(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw ba(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw ba(t,"user-disabled",o);const d=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw nE(t,d,c);Mn(t,d)}}catch(i){if(i instanceof Yt)throw i;Mn(t,"network-request-failed",{message:String(i)})}}async function Px(t,e,n,r,i={}){const s=await us(t,e,n,r,i);return"mfaPendingCredential"in s&&Mn(t,"multi-factor-auth-required",{_serverResponse:s}),s}function sE(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?zf(t.config,i):`${t.config.apiScheme}://${i}`}class xx{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(ln(this.auth,"network-request-failed")),kx.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function ba(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=ln(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Nx(t,e){return us(t,"POST","/v1/accounts:delete",e)}async function oE(t,e){return us(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eo(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function bx(t,e=!1){const n=lt(t),r=await n.getIdToken(e),i=Hf(r);G(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:eo(Fc(i.auth_time)),issuedAtTime:eo(Fc(i.iat)),expirationTime:eo(Fc(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Fc(t){return Number(t)*1e3}function Hf(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Xa("JWT malformed, contained fewer than 3 sections"),null;try{const i=_0(n);return i?JSON.parse(i):(Xa("Failed to decode base64 JWT payload"),null)}catch(i){return Xa("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function vy(t){const e=Hf(t);return G(e,"internal-error"),G(typeof e.exp<"u","internal-error"),G(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xo(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Yt&&Dx(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function Dx({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ox{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class od{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=eo(this.lastLoginAt),this.creationTime=eo(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ll(t){var e;const n=t.auth,r=await t.getIdToken(),i=await xo(t,oE(n,{idToken:r}));G(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?aE(s.providerUserInfo):[],u=Mx(t.providerData,o),l=t.isAnonymous,c=!(t.email&&s.passwordHash)&&!(u!=null&&u.length),d=l?c:!1,p={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:u,metadata:new od(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(t,p)}async function Vx(t){const e=lt(t);await Ll(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Mx(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function aE(t){return t.map(e=>{var{providerId:n}=e,r=jf(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Lx(t,e){const n=await iE(t,{},async()=>{const r=Mo({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=sE(t,i,"/v1/token",`key=${s}`),u=await t._getAdditionalHeaders();return u["Content-Type"]="application/x-www-form-urlencoded",rE.fetch()(o,{method:"POST",headers:u,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function Fx(t,e){return us(t,"POST","/v2/accounts:revokeToken",$f(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){G(e.idToken,"internal-error"),G(typeof e.idToken<"u","internal-error"),G(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):vy(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){G(e.length!==0,"internal-error");const n=vy(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(G(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await Lx(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Vi;return r&&(G(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(G(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(G(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Vi,this.toJSON())}_performRefresh(){return Sn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $n(t,e){G(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class An{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=jf(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Ox(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new od(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await xo(this,this.stsTokenManager.getToken(this.auth,e));return G(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return bx(this,e)}reload(){return Vx(this)}_assign(e){this!==e&&(G(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new An(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){G(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Ll(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(tr(this.auth.app))return Promise.reject(Ur(this.auth));const e=await this.getIdToken();return await xo(this,Nx(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,u,l,c,d;const p=(r=n.displayName)!==null&&r!==void 0?r:void 0,m=(i=n.email)!==null&&i!==void 0?i:void 0,w=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,A=(o=n.photoURL)!==null&&o!==void 0?o:void 0,x=(u=n.tenantId)!==null&&u!==void 0?u:void 0,P=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,S=(c=n.createdAt)!==null&&c!==void 0?c:void 0,_=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:E,emailVerified:D,isAnonymous:V,providerData:M,stsTokenManager:T}=n;G(E&&T,e,"internal-error");const y=Vi.fromJSON(this.name,T);G(typeof E=="string",e,"internal-error"),$n(p,e.name),$n(m,e.name),G(typeof D=="boolean",e,"internal-error"),G(typeof V=="boolean",e,"internal-error"),$n(w,e.name),$n(A,e.name),$n(x,e.name),$n(P,e.name),$n(S,e.name),$n(_,e.name);const v=new An({uid:E,auth:e,email:m,emailVerified:D,displayName:p,isAnonymous:V,photoURL:A,phoneNumber:w,tenantId:x,stsTokenManager:y,createdAt:S,lastLoginAt:_});return M&&Array.isArray(M)&&(v.providerData=M.map(I=>Object.assign({},I))),P&&(v._redirectEventId=P),v}static async _fromIdTokenResponse(e,n,r=!1){const i=new Vi;i.updateFromServerResponse(n);const s=new An({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Ll(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];G(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?aE(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),u=new Vi;u.updateFromIdToken(r);const l=new An({uid:i.localId,auth:e,stsTokenManager:u,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new od(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(l,c),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _y=new Map;function Rn(t){Ln(t instanceof Function,"Expected a class definition");let e=_y.get(t);return e?(Ln(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,_y.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lE{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}lE.type="NONE";const wy=lE;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ja(t,e,n){return`firebase:${t}:${e}:${n}`}class Mi{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Ja(this.userKey,i.apiKey,s),this.fullPersistenceKey=Ja("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?An._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Mi(Rn(wy),e,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||Rn(wy);const o=Ja(r,e.config.apiKey,e.name);let u=null;for(const c of n)try{const d=await c._get(o);if(d){const p=An._fromJSON(e,d);c!==s&&(u=p),s=c;break}}catch{}const l=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new Mi(s,e,r):(s=l[0],u&&await s._set(o,u.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new Mi(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ey(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(dE(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(uE(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(pE(e))return"Blackberry";if(mE(e))return"Webos";if(cE(e))return"Safari";if((e.includes("chrome/")||hE(e))&&!e.includes("edge/"))return"Chrome";if(fE(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function uE(t=at()){return/firefox\//i.test(t)}function cE(t=at()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function hE(t=at()){return/crios\//i.test(t)}function dE(t=at()){return/iemobile/i.test(t)}function fE(t=at()){return/android/i.test(t)}function pE(t=at()){return/blackberry/i.test(t)}function mE(t=at()){return/webos/i.test(t)}function Wf(t=at()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Ux(t=at()){var e;return Wf(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function jx(){return GA()&&document.documentMode===10}function gE(t=at()){return Wf(t)||fE(t)||mE(t)||pE(t)||/windows phone/i.test(t)||dE(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yE(t,e=[]){let n;switch(t){case"Browser":n=Ey(at());break;case"Worker":n=`${Ey(at())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ss}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bx{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,u)=>{try{const l=e(s);o(l)}catch(l){u(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zx(t,e={}){return us(t,"GET","/v2/passwordPolicy",$f(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $x=6;class Hx{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:$x,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,u;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(s=l.containsUppercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(u=l.containsNonAlphanumericCharacter)!==null&&u!==void 0?u:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wx{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Iy(this),this.idTokenSubscription=new Iy(this),this.beforeStateQueue=new Bx(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=tE,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Rn(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Mi.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await oE(this,{idToken:e}),r=await An._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(tr(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(u=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(u,u))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,u=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===u)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return G(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Ll(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Rx()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(tr(this.app))return Promise.reject(Ur(this));const n=e?lt(e):null;return n&&G(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&G(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return tr(this.app)?Promise.reject(Ur(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return tr(this.app)?Promise.reject(Ur(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Rn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await zx(this),n=new Hx(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new ni("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await Fx(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Rn(e)||this._popupRedirectResolver;G(n,this,"argument-error"),this.redirectPersistenceManager=await Mi.create(this,[Rn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const u=this._isInitialized?Promise.resolve():this._initializationPromise;if(G(u,this,"internal-error"),u.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,i);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return G(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=yE(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&Tx(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function qf(t){return lt(t)}class Iy{constructor(e){this.auth=e,this.observer=null,this.addObserver=tR(n=>this.observer=n)}get next(){return G(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Kf={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function qx(t){Kf=t}function Kx(t){return Kf.loadJS(t)}function Gx(){return Kf.gapiScript}function Qx(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yx(t,e){const n=ri(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Wi(s,e??{}))return i;Mn(i,"already-initialized")}return n.initialize({options:e})}function Xx(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Rn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function Jx(t,e,n){const r=qf(t);G(r._canInitEmulator,r,"emulator-config-failed"),G(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=vE(e),{host:o,port:u}=Zx(e),l=u===null?"":`:${u}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:u,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),eN()}function vE(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Zx(t){const e=vE(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Ty(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Ty(o)}}}function Ty(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function eN(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _E{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Sn("not implemented")}_getIdTokenResponse(e){return Sn("not implemented")}_linkToIdToken(e,n){return Sn("not implemented")}_getReauthenticationResolver(e){return Sn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Li(t,e){return Px(t,"POST","/v1/accounts:signInWithIdp",$f(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tN="http://localhost";class Gr extends _E{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Gr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Mn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=jf(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Gr(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Li(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Li(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Li(e,n)}buildRequest(){const e={requestUri:tN,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Mo(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wE{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wo extends wE{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gn extends Wo{constructor(){super("facebook.com")}static credential(e){return Gr._fromParams({providerId:Gn.PROVIDER_ID,signInMethod:Gn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Gn.credentialFromTaggedObject(e)}static credentialFromError(e){return Gn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Gn.credential(e.oauthAccessToken)}catch{return null}}}Gn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Gn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qn extends Wo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Gr._fromParams({providerId:Qn.PROVIDER_ID,signInMethod:Qn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Qn.credentialFromTaggedObject(e)}static credentialFromError(e){return Qn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Qn.credential(n,r)}catch{return null}}}Qn.GOOGLE_SIGN_IN_METHOD="google.com";Qn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yn extends Wo{constructor(){super("github.com")}static credential(e){return Gr._fromParams({providerId:Yn.PROVIDER_ID,signInMethod:Yn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Yn.credentialFromTaggedObject(e)}static credentialFromError(e){return Yn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Yn.credential(e.oauthAccessToken)}catch{return null}}}Yn.GITHUB_SIGN_IN_METHOD="github.com";Yn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xn extends Wo{constructor(){super("twitter.com")}static credential(e,n){return Gr._fromParams({providerId:Xn.PROVIDER_ID,signInMethod:Xn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Xn.credentialFromTaggedObject(e)}static credentialFromError(e){return Xn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Xn.credential(n,r)}catch{return null}}}Xn.TWITTER_SIGN_IN_METHOD="twitter.com";Xn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ts{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await An._fromIdTokenResponse(e,r,i),o=Sy(r);return new ts({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Sy(r);return new ts({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Sy(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fl extends Yt{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Fl.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Fl(e,n,r,i)}}function EE(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Fl._fromErrorAndOperation(t,s,e,r):s})}async function nN(t,e,n=!1){const r=await xo(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return ts._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rN(t,e,n=!1){const{auth:r}=t;if(tr(r.app))return Promise.reject(Ur(r));const i="reauthenticate";try{const s=await xo(t,EE(r,i,e,t),n);G(s.idToken,r,"internal-error");const o=Hf(s.idToken);G(o,r,"internal-error");const{sub:u}=o;return G(t.uid===u,r,"user-mismatch"),ts._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Mn(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function iN(t,e,n=!1){if(tr(t.app))return Promise.reject(Ur(t));const r="signIn",i=await EE(t,r,e),s=await ts._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}function sN(t,e,n,r){return lt(t).onIdTokenChanged(e,n,r)}function oN(t,e,n){return lt(t).beforeAuthStateChanged(e,n)}const Ul="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IE{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Ul,"1"),this.storage.removeItem(Ul),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aN=1e3,lN=10;class TE extends IE{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=gE(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,u,l)=>{this.notifyListeners(o,l)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);jx()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,lN):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},aN)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}TE.type="LOCAL";const uN=TE;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SE extends IE{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}SE.type="SESSION";const AE=SE;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cN(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pu{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Pu(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const u=Array.from(o).map(async c=>c(n.origin,s)),l=await cN(u);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Pu.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gf(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hN{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((u,l)=>{const c=Gf("",20);i.port1.start();const d=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(p){const m=p;if(m.data.eventId===c)switch(m.data.status){case"ack":clearTimeout(d),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),u(m.data.response);break;default:clearTimeout(d),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function un(){return window}function dN(t){un().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RE(){return typeof un().WorkerGlobalScope<"u"&&typeof un().importScripts=="function"}async function fN(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function pN(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function mN(){return RE()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CE="firebaseLocalStorageDb",gN=1,jl="firebaseLocalStorage",kE="fbase_key";class qo{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function xu(t,e){return t.transaction([jl],e?"readwrite":"readonly").objectStore(jl)}function yN(){const t=indexedDB.deleteDatabase(CE);return new qo(t).toPromise()}function ad(){const t=indexedDB.open(CE,gN);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(jl,{keyPath:kE})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(jl)?e(r):(r.close(),await yN(),e(await ad()))})})}async function Ay(t,e,n){const r=xu(t,!0).put({[kE]:e,value:n});return new qo(r).toPromise()}async function vN(t,e){const n=xu(t,!1).get(e),r=await new qo(n).toPromise();return r===void 0?null:r.value}function Ry(t,e){const n=xu(t,!0).delete(e);return new qo(n).toPromise()}const _N=800,wN=3;class PE{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ad(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>wN)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return RE()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Pu._getInstance(mN()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await fN(),!this.activeServiceWorker)return;this.sender=new hN(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||pN()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ad();return await Ay(e,Ul,"1"),await Ry(e,Ul),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Ay(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>vN(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Ry(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=xu(i,!1).getAll();return new qo(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),_N)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}PE.type="LOCAL";const EN=PE;new Ho(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IN(t,e){return e?Rn(e):(G(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qf extends _E{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Li(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Li(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Li(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function TN(t){return iN(t.auth,new Qf(t),t.bypassAuthState)}function SN(t){const{auth:e,user:n}=t;return G(n,e,"internal-error"),rN(n,new Qf(t),t.bypassAuthState)}async function AN(t){const{auth:e,user:n}=t;return G(n,e,"internal-error"),nN(n,new Qf(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xE{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:u}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(u)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return TN;case"linkViaPopup":case"linkViaRedirect":return AN;case"reauthViaPopup":case"reauthViaRedirect":return SN;default:Mn(this.auth,"internal-error")}}resolve(e){Ln(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Ln(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RN=new Ho(2e3,1e4);class Ri extends xE{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Ri.currentPopupAction&&Ri.currentPopupAction.cancel(),Ri.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return G(e,this.auth,"internal-error"),e}async onExecution(){Ln(this.filter.length===1,"Popup operations only handle one event");const e=Gf();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(ln(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(ln(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ri.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ln(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,RN.get())};e()}}Ri.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CN="pendingRedirect",Za=new Map;class kN extends xE{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Za.get(this.auth._key());if(!e){try{const r=await PN(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Za.set(this.auth._key(),e)}return this.bypassAuthState||Za.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function PN(t,e){const n=bN(e),r=NN(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function xN(t,e){Za.set(t._key(),e)}function NN(t){return Rn(t._redirectPersistence)}function bN(t){return Ja(CN,t.config.apiKey,t.name)}async function DN(t,e,n=!1){if(tr(t.app))return Promise.reject(Ur(t));const r=qf(t),i=IN(r,e),o=await new kN(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ON=10*60*1e3;class VN{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!MN(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!NE(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(ln(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=ON&&this.cachedEventUids.clear(),this.cachedEventUids.has(Cy(e))}saveEventToCache(e){this.cachedEventUids.add(Cy(e)),this.lastProcessedEventTime=Date.now()}}function Cy(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function NE({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function MN(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return NE(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function LN(t,e={}){return us(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FN=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,UN=/^https?/;async function jN(t){if(t.config.emulator)return;const{authorizedDomains:e}=await LN(t);for(const n of e)try{if(BN(n))return}catch{}Mn(t,"unauthorized-domain")}function BN(t){const e=sd(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!UN.test(n))return!1;if(FN.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zN=new Ho(3e4,6e4);function ky(){const t=un().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function $N(t){return new Promise((e,n)=>{var r,i,s;function o(){ky(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{ky(),n(ln(t,"network-request-failed"))},timeout:zN.get()})}if(!((i=(r=un().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=un().gapi)===null||s===void 0)&&s.load)o();else{const u=Qx("iframefcb");return un()[u]=()=>{gapi.load?o():n(ln(t,"network-request-failed"))},Kx(`${Gx()}?onload=${u}`).catch(l=>n(l))}}).catch(e=>{throw el=null,e})}let el=null;function HN(t){return el=el||$N(t),el}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WN=new Ho(5e3,15e3),qN="__/auth/iframe",KN="emulator/auth/iframe",GN={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},QN=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function YN(t){const e=t.config;G(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?zf(e,KN):`https://${t.config.authDomain}/${qN}`,r={apiKey:e.apiKey,appName:t.name,v:ss},i=QN.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Mo(r).slice(1)}`}async function XN(t){const e=await HN(t),n=un().gapi;return G(n,t,"internal-error"),e.open({where:document.body,url:YN(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:GN,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=ln(t,"network-request-failed"),u=un().setTimeout(()=>{s(o)},WN.get());function l(){un().clearTimeout(u),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JN={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},ZN=500,e2=600,t2="_blank",n2="http://localhost";class Py{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function r2(t,e,n,r=ZN,i=e2){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let u="";const l=Object.assign(Object.assign({},JN),{width:r.toString(),height:i.toString(),top:s,left:o}),c=at().toLowerCase();n&&(u=hE(c)?t2:n),uE(c)&&(e=e||n2,l.scrollbars="yes");const d=Object.entries(l).reduce((m,[w,A])=>`${m}${w}=${A},`,"");if(Ux(c)&&u!=="_self")return i2(e||"",u),new Py(null);const p=window.open(e||"",u,d);G(p,t,"popup-blocked");try{p.focus()}catch{}return new Py(p)}function i2(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s2="__/auth/handler",o2="emulator/auth/handler",a2=encodeURIComponent("fac");async function xy(t,e,n,r,i,s){G(t.config.authDomain,t,"auth-domain-config-required"),G(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:ss,eventId:i};if(e instanceof wE){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",eR(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,p]of Object.entries({}))o[d]=p}if(e instanceof Wo){const d=e.getScopes().filter(p=>p!=="");d.length>0&&(o.scopes=d.join(","))}t.tenantId&&(o.tid=t.tenantId);const u=o;for(const d of Object.keys(u))u[d]===void 0&&delete u[d];const l=await t._getAppCheckToken(),c=l?`#${a2}=${encodeURIComponent(l)}`:"";return`${l2(t)}?${Mo(u).slice(1)}${c}`}function l2({config:t}){return t.emulator?zf(t,o2):`https://${t.authDomain}/${s2}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uc="webStorageSupport";class u2{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=AE,this._completeRedirectFn=DN,this._overrideRedirectResult=xN}async _openPopup(e,n,r,i){var s;Ln((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await xy(e,n,r,sd(),i);return r2(e,o,Gf())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await xy(e,n,r,sd(),i);return dN(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Ln(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await XN(e),r=new VN(e);return n.register("authEvent",i=>(G(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Uc,{type:Uc},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Uc];o!==void 0&&n(!!o),Mn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=jN(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return gE()||cE()||Wf()}}const c2=u2;var Ny="@firebase/auth",by="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h2{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){G(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function d2(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function f2(t){hn(new Qt("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:u}=r.options;G(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:u,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:yE(t)},c=new Wx(r,i,s,l);return Xx(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),hn(new Qt("auth-internal",e=>{const n=qf(e.getProvider("auth").getImmediate());return(r=>new h2(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Lt(Ny,by,d2(t)),Lt(Ny,by,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const p2=5*60,m2=I0("authIdTokenMaxAge")||p2;let Dy=null;const g2=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>m2)return;const i=n==null?void 0:n.token;Dy!==i&&(Dy=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function y2(t=uf()){const e=ri(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Yx(t,{popupRedirectResolver:c2,persistence:[EN,uN,AE]}),r=I0("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=g2(s.toString());oN(n,o,()=>o(n.currentUser)),sN(n,u=>o(u))}}const i=w0("auth");return i&&Jx(n,`http://${i}`),n}function v2(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}qx({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=ln("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",v2().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});f2("Browser");const bE="@firebase/installations",Yf="0.6.9";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DE=1e4,OE=`w:${Yf}`,VE="FIS_v2",_2="https://firebaseinstallations.googleapis.com/v1",w2=60*60*1e3,E2="installations",I2="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T2={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Qr=new ni(E2,I2,T2);function ME(t){return t instanceof Yt&&t.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LE({projectId:t}){return`${_2}/projects/${t}/installations`}function FE(t){return{token:t.token,requestStatus:2,expiresIn:A2(t.expiresIn),creationTime:Date.now()}}async function UE(t,e){const r=(await e.json()).error;return Qr.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function jE({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function S2(t,{refreshToken:e}){const n=jE(t);return n.append("Authorization",R2(e)),n}async function BE(t){const e=await t();return e.status>=500&&e.status<600?t():e}function A2(t){return Number(t.replace("s","000"))}function R2(t){return`${VE} ${t}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function C2({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=LE(t),i=jE(t),s=e.getImmediate({optional:!0});if(s){const c=await s.getHeartbeatsHeader();c&&i.append("x-firebase-client",c)}const o={fid:n,authVersion:VE,appId:t.appId,sdkVersion:OE},u={method:"POST",headers:i,body:JSON.stringify(o)},l=await BE(()=>fetch(r,u));if(l.ok){const c=await l.json();return{fid:c.fid||n,registrationStatus:2,refreshToken:c.refreshToken,authToken:FE(c.authToken)}}else throw await UE("Create Installation",l)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zE(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function k2(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P2=/^[cdef][\w-]{21}$/,ld="";function x2(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=N2(t);return P2.test(n)?n:ld}catch{return ld}}function N2(t){return k2(t).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nu(t){return`${t.appName}!${t.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $E=new Map;function HE(t,e){const n=Nu(t);WE(n,e),b2(n,e)}function WE(t,e){const n=$E.get(t);if(n)for(const r of n)r(e)}function b2(t,e){const n=D2();n&&n.postMessage({key:t,fid:e}),O2()}let Or=null;function D2(){return!Or&&"BroadcastChannel"in self&&(Or=new BroadcastChannel("[Firebase] FID Change"),Or.onmessage=t=>{WE(t.data.key,t.data.fid)}),Or}function O2(){$E.size===0&&Or&&(Or.close(),Or=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V2="firebase-installations-database",M2=1,Yr="firebase-installations-store";let jc=null;function Xf(){return jc||(jc=k0(V2,M2,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Yr)}}})),jc}async function Bl(t,e){const n=Nu(t),i=(await Xf()).transaction(Yr,"readwrite"),s=i.objectStore(Yr),o=await s.get(n);return await s.put(e,n),await i.done,(!o||o.fid!==e.fid)&&HE(t,e.fid),e}async function qE(t){const e=Nu(t),r=(await Xf()).transaction(Yr,"readwrite");await r.objectStore(Yr).delete(e),await r.done}async function bu(t,e){const n=Nu(t),i=(await Xf()).transaction(Yr,"readwrite"),s=i.objectStore(Yr),o=await s.get(n),u=e(o);return u===void 0?await s.delete(n):await s.put(u,n),await i.done,u&&(!o||o.fid!==u.fid)&&HE(t,u.fid),u}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jf(t){let e;const n=await bu(t.appConfig,r=>{const i=L2(r),s=F2(t,i);return e=s.registrationPromise,s.installationEntry});return n.fid===ld?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function L2(t){const e=t||{fid:x2(),registrationStatus:0};return KE(e)}function F2(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(Qr.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=U2(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:j2(t)}:{installationEntry:e}}async function U2(t,e){try{const n=await C2(t,e);return Bl(t.appConfig,n)}catch(n){throw ME(n)&&n.customData.serverCode===409?await qE(t.appConfig):await Bl(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function j2(t){let e=await Oy(t.appConfig);for(;e.registrationStatus===1;)await zE(100),e=await Oy(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await Jf(t);return r||n}return e}function Oy(t){return bu(t,e=>{if(!e)throw Qr.create("installation-not-found");return KE(e)})}function KE(t){return B2(t)?{fid:t.fid,registrationStatus:0}:t}function B2(t){return t.registrationStatus===1&&t.registrationTime+DE<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function z2({appConfig:t,heartbeatServiceProvider:e},n){const r=$2(t,n),i=S2(t,n),s=e.getImmediate({optional:!0});if(s){const c=await s.getHeartbeatsHeader();c&&i.append("x-firebase-client",c)}const o={installation:{sdkVersion:OE,appId:t.appId}},u={method:"POST",headers:i,body:JSON.stringify(o)},l=await BE(()=>fetch(r,u));if(l.ok){const c=await l.json();return FE(c)}else throw await UE("Generate Auth Token",l)}function $2(t,{fid:e}){return`${LE(t)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zf(t,e=!1){let n;const r=await bu(t.appConfig,s=>{if(!GE(s))throw Qr.create("not-registered");const o=s.authToken;if(!e&&q2(o))return s;if(o.requestStatus===1)return n=H2(t,e),s;{if(!navigator.onLine)throw Qr.create("app-offline");const u=G2(s);return n=W2(t,u),u}});return n?await n:r.authToken}async function H2(t,e){let n=await Vy(t.appConfig);for(;n.authToken.requestStatus===1;)await zE(100),n=await Vy(t.appConfig);const r=n.authToken;return r.requestStatus===0?Zf(t,e):r}function Vy(t){return bu(t,e=>{if(!GE(e))throw Qr.create("not-registered");const n=e.authToken;return Q2(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function W2(t,e){try{const n=await z2(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await Bl(t.appConfig,r),n}catch(n){if(ME(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await qE(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Bl(t.appConfig,r)}throw n}}function GE(t){return t!==void 0&&t.registrationStatus===2}function q2(t){return t.requestStatus===2&&!K2(t)}function K2(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+w2}function G2(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function Q2(t){return t.requestStatus===1&&t.requestTime+DE<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Y2(t){const e=t,{installationEntry:n,registrationPromise:r}=await Jf(e);return r?r.catch(console.error):Zf(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function X2(t,e=!1){const n=t;return await J2(n),(await Zf(n,e)).token}async function J2(t){const{registrationPromise:e}=await Jf(t);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Z2(t){if(!t||!t.options)throw Bc("App Configuration");if(!t.name)throw Bc("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw Bc(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function Bc(t){return Qr.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QE="installations",eb="installations-internal",tb=t=>{const e=t.getProvider("app").getImmediate(),n=Z2(e),r=ri(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},nb=t=>{const e=t.getProvider("app").getImmediate(),n=ri(e,QE).getImmediate();return{getId:()=>Y2(n),getToken:i=>X2(n,i)}};function rb(){hn(new Qt(QE,tb,"PUBLIC")),hn(new Qt(eb,nb,"PRIVATE"))}rb();Lt(bE,Yf);Lt(bE,Yf,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zl="analytics",ib="firebase_id",sb="origin",ob=60*1e3,ab="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",ep="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const It=new du("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lb={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},kt=new ni("analytics","Analytics",lb);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ub(t){if(!t.startsWith(ep)){const e=kt.create("invalid-gtag-resource",{gtagURL:t});return It.warn(e.message),""}return t}function YE(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function cb(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function hb(t,e){const n=cb("firebase-js-sdk-policy",{createScriptURL:ub}),r=document.createElement("script"),i=`${ep}?l=${t}&id=${e}`;r.src=n?n==null?void 0:n.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function db(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function fb(t,e,n,r,i,s){const o=r[i];try{if(o)await e[o];else{const l=(await YE(n)).find(c=>c.measurementId===i);l&&await e[l.appId]}}catch(u){It.error(u)}t("config",i,s)}async function pb(t,e,n,r,i){try{let s=[];if(i&&i.send_to){let o=i.send_to;Array.isArray(o)||(o=[o]);const u=await YE(n);for(const l of o){const c=u.find(p=>p.measurementId===l),d=c&&e[c.appId];if(d)s.push(d);else{s=[];break}}}s.length===0&&(s=Object.values(e)),await Promise.all(s),t("event",r,i||{})}catch(s){It.error(s)}}function mb(t,e,n,r){async function i(s,...o){try{if(s==="event"){const[u,l]=o;await pb(t,e,n,u,l)}else if(s==="config"){const[u,l]=o;await fb(t,e,n,r,u,l)}else if(s==="consent"){const[u,l]=o;t("consent",u,l)}else if(s==="get"){const[u,l,c]=o;t("get",u,l,c)}else if(s==="set"){const[u]=o;t("set",u)}else t(s,...o)}catch(u){It.error(u)}}return i}function gb(t,e,n,r,i){let s=function(...o){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(s=window[i]),window[i]=mb(s,t,e,n),{gtagCore:s,wrappedGtag:window[i]}}function yb(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(ep)&&n.src.includes(t))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vb=30,_b=1e3;class wb{constructor(e={},n=_b){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const XE=new wb;function Eb(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function Ib(t){var e;const{appId:n,apiKey:r}=t,i={method:"GET",headers:Eb(r)},s=ab.replace("{app-id}",n),o=await fetch(s,i);if(o.status!==200&&o.status!==304){let u="";try{const l=await o.json();!((e=l.error)===null||e===void 0)&&e.message&&(u=l.error.message)}catch{}throw kt.create("config-fetch-failed",{httpStatus:o.status,responseMessage:u})}return o.json()}async function Tb(t,e=XE,n){const{appId:r,apiKey:i,measurementId:s}=t.options;if(!r)throw kt.create("no-app-id");if(!i){if(s)return{measurementId:s,appId:r};throw kt.create("no-api-key")}const o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},u=new Rb;return setTimeout(async()=>{u.abort()},ob),JE({appId:r,apiKey:i,measurementId:s},o,u,e)}async function JE(t,{throttleEndTimeMillis:e,backoffCount:n},r,i=XE){var s;const{appId:o,measurementId:u}=t;try{await Sb(r,e)}catch(l){if(u)return It.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${u} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:o,measurementId:u};throw l}try{const l=await Ib(t);return i.deleteThrottleMetadata(o),l}catch(l){const c=l;if(!Ab(c)){if(i.deleteThrottleMetadata(o),u)return It.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${u} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:o,measurementId:u};throw l}const d=Number((s=c==null?void 0:c.customData)===null||s===void 0?void 0:s.httpStatus)===503?Ag(n,i.intervalMillis,vb):Ag(n,i.intervalMillis),p={throttleEndTimeMillis:Date.now()+d,backoffCount:n+1};return i.setThrottleMetadata(o,p),It.debug(`Calling attemptFetch again in ${d} millis`),JE(t,p,r,i)}}function Sb(t,e){return new Promise((n,r)=>{const i=Math.max(e-Date.now(),0),s=setTimeout(n,i);t.addEventListener(()=>{clearTimeout(s),r(kt.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function Ab(t){if(!(t instanceof Yt)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class Rb{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function Cb(t,e,n,r,i){if(i&&i.global){t("event",n,r);return}else{const s=await e,o=Object.assign(Object.assign({},r),{send_to:s});t("event",n,o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kb(){if(S0())try{await A0()}catch(t){return It.warn(kt.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return It.warn(kt.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function Pb(t,e,n,r,i,s,o){var u;const l=Tb(t);l.then(w=>{n[w.measurementId]=w.appId,t.options.measurementId&&w.measurementId!==t.options.measurementId&&It.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${w.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(w=>It.error(w)),e.push(l);const c=kb().then(w=>{if(w)return r.getId()}),[d,p]=await Promise.all([l,c]);yb(s)||hb(s,d.measurementId),i("js",new Date);const m=(u=o==null?void 0:o.config)!==null&&u!==void 0?u:{};return m[sb]="firebase",m.update=!0,p!=null&&(m[ib]=p),i("config",d.measurementId,m),d.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xb{constructor(e){this.app=e}_delete(){return delete to[this.app.options.appId],Promise.resolve()}}let to={},My=[];const Ly={};let zc="dataLayer",Nb="gtag",Fy,ZE,Uy=!1;function bb(){const t=[];if(T0()&&t.push("This is a browser extension environment."),YA()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=kt.create("invalid-analytics-context",{errorInfo:e});It.warn(n.message)}}function Db(t,e,n){bb();const r=t.options.appId;if(!r)throw kt.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)It.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw kt.create("no-api-key");if(to[r]!=null)throw kt.create("already-exists",{id:r});if(!Uy){db(zc);const{wrappedGtag:s,gtagCore:o}=gb(to,My,Ly,zc,Nb);ZE=s,Fy=o,Uy=!0}return to[r]=Pb(t,My,Ly,e,Fy,zc,n),new xb(t)}function Ob(t=uf()){t=lt(t);const e=ri(t,zl);return e.isInitialized()?e.getImmediate():Vb(t)}function Vb(t,e={}){const n=ri(t,zl);if(n.isInitialized()){const i=n.getImmediate();if(Wi(e,n.getOptions()))return i;throw kt.create("already-initialized")}return n.initialize({options:e})}function Mb(t,e,n,r){t=lt(t),Cb(ZE,to[t.app.options.appId],e,n,r).catch(i=>It.error(i))}const jy="@firebase/analytics",By="0.10.8";function Lb(){hn(new Qt(zl,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return Db(r,i,n)},"PUBLIC")),hn(new Qt("analytics-internal",t,"PRIVATE")),Lt(jy,By),Lt(jy,By,"esm2017");function t(e){try{const n=e.getProvider(zl).getImmediate();return{logEvent:(r,i,s)=>Mb(n,r,i,s)}}catch(n){throw kt.create("interop-component-reg-failed",{reason:n})}}}Lb();const Fb={apiKey:"AIzaSyDeS5dNsUcUZ0403nBiObnvZR-0ED5Ys-4",authDomain:"shoplist-40d7a.firebaseapp.com",projectId:"shoplist-40d7a",storageBucket:"shoplist-40d7a.firebasestorage.app",messagingSenderId:"590512090231",appId:"1:590512090231:web:08ecd6b16f96f3e8456a72",measurementId:"G-52S3CBQXWQ"},tp=P0(Fb);y2(tp);const cn=ex(tp);Ob(tp);const Ub=async(t,e)=>{const n=Math.random().toString(36).substring(2,8).toUpperCase(),r=an(cn,"lobbies",n),i={id:n,hostId:t,status:"waiting",players:[{id:t,name:e,isReady:!1}],createdAt:new Date().toISOString(),currentRound:0,wheelArtists:[],currentPlayerTurn:null,portfolios:{}};return await yx(r,i),n},jb=async(t,e,n)=>{const r=an(cn,"lobbies",t);if(!(await gx(r)).exists())throw new Error("Lobby nicht gefunden");await kn(r,{players:_x({id:e,name:n,isReady:!1})})},np=(t,e)=>{const n=an(cn,"lobbies",t);return vx(n,r=>{r.exists()&&e(r.data())})};let Da;const Bb=new Uint8Array(16);function zb(){if(!Da&&(Da=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!Da))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return Da(Bb)}const $e=[];for(let t=0;t<256;++t)$e.push((t+256).toString(16).slice(1));function $b(t,e=0){return $e[t[e+0]]+$e[t[e+1]]+$e[t[e+2]]+$e[t[e+3]]+"-"+$e[t[e+4]]+$e[t[e+5]]+"-"+$e[t[e+6]]+$e[t[e+7]]+"-"+$e[t[e+8]]+$e[t[e+9]]+"-"+$e[t[e+10]]+$e[t[e+11]]+$e[t[e+12]]+$e[t[e+13]]+$e[t[e+14]]+$e[t[e+15]]}const Hb=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),zy={randomUUID:Hb};function $y(t,e,n){if(zy.randomUUID&&!t)return zy.randomUUID();t=t||{};const r=t.random||(t.rng||zb)();return r[6]=r[6]&15|64,r[8]=r[8]&63|128,$b(r)}function Wb(){const[t,e]=j.useState(""),[n,r]=j.useState(""),[i,s]=j.useState(!1),o=cu(),u=async()=>{if(!t)return alert("Bitte Nickname eingeben");s(!0);try{const c=$y();localStorage.setItem("playerId",c),localStorage.setItem("nickname",t);const d=await Ub(c,t);o(`/lobby/${d}`)}catch(c){console.error(c),alert("Fehler beim Erstellen der Lobby")}finally{s(!1)}},l=()=>{if(!t||!n)return alert("Bitte Nickname und Lobby-Code eingeben");const c=$y();localStorage.setItem("playerId",c),localStorage.setItem("nickname",t),o(`/lobby/${n.toUpperCase()}`)};return k.jsx("div",{className:"flex-1 flex flex-col items-center justify-center p-6 bg-dark",children:k.jsxs("div",{className:"w-full max-w-md space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700",children:[k.jsxs("div",{className:"text-center space-y-2",children:[k.jsx("div",{className:"inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-primary/10 text-primary mb-4 p-4",children:k.jsx(TA,{size:48})}),k.jsx("h1",{className:"text-4xl font-black tracking-tighter text-white",children:"AUX BATTLE"}),k.jsx("p",{className:"text-gray-400",children:"Das ultimative Musik-Duell-Spiel"})]}),k.jsxs("div",{className:"space-y-4",children:[k.jsxs("div",{className:"space-y-2",children:[k.jsx("label",{className:"text-xs font-bold uppercase tracking-widest text-gray-500 ml-1",children:"Nickname"}),k.jsx("input",{type:"text",placeholder:"z.B. DJ Saufkopp",value:t,onChange:c=>e(c.target.value),className:"w-full bg-secondary border-none rounded-xl p-4 text-white focus:ring-2 focus:ring-primary outline-none transition-all placeholder:text-gray-600"})]}),k.jsxs("div",{className:"grid grid-cols-1 gap-4 pt-4",children:[k.jsxs("button",{onClick:u,disabled:i,className:"group relative w-full bg-primary hover:bg-primary/90 text-black font-bold py-4 px-6 rounded-xl flex items-center justify-center gap-3 transition-all active:scale-95 disabled:opacity-50",children:[k.jsx(CA,{size:20}),"LOBBY ERSTELLEN"]}),k.jsxs("div",{className:"relative py-2",children:[k.jsx("div",{className:"absolute inset-0 flex items-center",children:k.jsx("div",{className:"w-full border-t border-gray-800"})}),k.jsx("div",{className:"relative flex justify-center text-xs uppercase",children:k.jsx("span",{className:"bg-dark px-2 text-gray-600 font-bold",children:"Oder Beitreten"})})]}),k.jsxs("div",{className:"space-y-3",children:[k.jsx("input",{type:"text",placeholder:"Lobby-Code (6-stellig)",value:n,onChange:c=>r(c.target.value),className:"w-full bg-secondary border-none rounded-xl p-4 text-center text-xl font-mono tracking-widest text-white focus:ring-2 focus:ring-primary outline-none transition-all placeholder:text-gray-600"}),k.jsxs("button",{onClick:l,className:"w-full bg-white/5 hover:bg-white/10 text-white font-bold py-4 px-6 rounded-xl flex items-center justify-center gap-3 transition-all active:scale-95 border border-white/10",children:[k.jsx(g0,{size:20}),"LOBBY BEITRETEN"]})]})]})]}),k.jsx("div",{className:"pt-8 text-center",children:k.jsx("p",{className:"text-[10px] text-gray-600 font-bold uppercase tracking-[0.2em]",children:"Build v0.1.0 • AUXBattle Studio"})})]})})}var qb=Object.defineProperty,$l=Object.getOwnPropertySymbols,eI=Object.prototype.hasOwnProperty,tI=Object.prototype.propertyIsEnumerable,Hy=(t,e,n)=>e in t?qb(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,ud=(t,e)=>{for(var n in e||(e={}))eI.call(e,n)&&Hy(t,n,e[n]);if($l)for(var n of $l(e))tI.call(e,n)&&Hy(t,n,e[n]);return t},cd=(t,e)=>{var n={};for(var r in t)eI.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&$l)for(var r of $l(t))e.indexOf(r)<0&&tI.call(t,r)&&(n[r]=t[r]);return n};/**
 * @license QR Code generator library (TypeScript)
 * Copyright (c) Project Nayuki.
 * SPDX-License-Identifier: MIT
 */var Xr;(t=>{const e=class Z{constructor(l,c,d,p){if(this.version=l,this.errorCorrectionLevel=c,this.modules=[],this.isFunction=[],l<Z.MIN_VERSION||l>Z.MAX_VERSION)throw new RangeError("Version value out of range");if(p<-1||p>7)throw new RangeError("Mask value out of range");this.size=l*4+17;let m=[];for(let A=0;A<this.size;A++)m.push(!1);for(let A=0;A<this.size;A++)this.modules.push(m.slice()),this.isFunction.push(m.slice());this.drawFunctionPatterns();const w=this.addEccAndInterleave(d);if(this.drawCodewords(w),p==-1){let A=1e9;for(let x=0;x<8;x++){this.applyMask(x),this.drawFormatBits(x);const P=this.getPenaltyScore();P<A&&(p=x,A=P),this.applyMask(x)}}i(0<=p&&p<=7),this.mask=p,this.applyMask(p),this.drawFormatBits(p),this.isFunction=[]}static encodeText(l,c){const d=t.QrSegment.makeSegments(l);return Z.encodeSegments(d,c)}static encodeBinary(l,c){const d=t.QrSegment.makeBytes(l);return Z.encodeSegments([d],c)}static encodeSegments(l,c,d=1,p=40,m=-1,w=!0){if(!(Z.MIN_VERSION<=d&&d<=p&&p<=Z.MAX_VERSION)||m<-1||m>7)throw new RangeError("Invalid value");let A,x;for(A=d;;A++){const E=Z.getNumDataCodewords(A,c)*8,D=o.getTotalBits(l,A);if(D<=E){x=D;break}if(A>=p)throw new RangeError("Data too long")}for(const E of[Z.Ecc.MEDIUM,Z.Ecc.QUARTILE,Z.Ecc.HIGH])w&&x<=Z.getNumDataCodewords(A,E)*8&&(c=E);let P=[];for(const E of l){n(E.mode.modeBits,4,P),n(E.numChars,E.mode.numCharCountBits(A),P);for(const D of E.getData())P.push(D)}i(P.length==x);const S=Z.getNumDataCodewords(A,c)*8;i(P.length<=S),n(0,Math.min(4,S-P.length),P),n(0,(8-P.length%8)%8,P),i(P.length%8==0);for(let E=236;P.length<S;E^=253)n(E,8,P);let _=[];for(;_.length*8<P.length;)_.push(0);return P.forEach((E,D)=>_[D>>>3]|=E<<7-(D&7)),new Z(A,c,_,m)}getModule(l,c){return 0<=l&&l<this.size&&0<=c&&c<this.size&&this.modules[c][l]}getModules(){return this.modules}drawFunctionPatterns(){for(let d=0;d<this.size;d++)this.setFunctionModule(6,d,d%2==0),this.setFunctionModule(d,6,d%2==0);this.drawFinderPattern(3,3),this.drawFinderPattern(this.size-4,3),this.drawFinderPattern(3,this.size-4);const l=this.getAlignmentPatternPositions(),c=l.length;for(let d=0;d<c;d++)for(let p=0;p<c;p++)d==0&&p==0||d==0&&p==c-1||d==c-1&&p==0||this.drawAlignmentPattern(l[d],l[p]);this.drawFormatBits(0),this.drawVersion()}drawFormatBits(l){const c=this.errorCorrectionLevel.formatBits<<3|l;let d=c;for(let m=0;m<10;m++)d=d<<1^(d>>>9)*1335;const p=(c<<10|d)^21522;i(p>>>15==0);for(let m=0;m<=5;m++)this.setFunctionModule(8,m,r(p,m));this.setFunctionModule(8,7,r(p,6)),this.setFunctionModule(8,8,r(p,7)),this.setFunctionModule(7,8,r(p,8));for(let m=9;m<15;m++)this.setFunctionModule(14-m,8,r(p,m));for(let m=0;m<8;m++)this.setFunctionModule(this.size-1-m,8,r(p,m));for(let m=8;m<15;m++)this.setFunctionModule(8,this.size-15+m,r(p,m));this.setFunctionModule(8,this.size-8,!0)}drawVersion(){if(this.version<7)return;let l=this.version;for(let d=0;d<12;d++)l=l<<1^(l>>>11)*7973;const c=this.version<<12|l;i(c>>>18==0);for(let d=0;d<18;d++){const p=r(c,d),m=this.size-11+d%3,w=Math.floor(d/3);this.setFunctionModule(m,w,p),this.setFunctionModule(w,m,p)}}drawFinderPattern(l,c){for(let d=-4;d<=4;d++)for(let p=-4;p<=4;p++){const m=Math.max(Math.abs(p),Math.abs(d)),w=l+p,A=c+d;0<=w&&w<this.size&&0<=A&&A<this.size&&this.setFunctionModule(w,A,m!=2&&m!=4)}}drawAlignmentPattern(l,c){for(let d=-2;d<=2;d++)for(let p=-2;p<=2;p++)this.setFunctionModule(l+p,c+d,Math.max(Math.abs(p),Math.abs(d))!=1)}setFunctionModule(l,c,d){this.modules[c][l]=d,this.isFunction[c][l]=!0}addEccAndInterleave(l){const c=this.version,d=this.errorCorrectionLevel;if(l.length!=Z.getNumDataCodewords(c,d))throw new RangeError("Invalid argument");const p=Z.NUM_ERROR_CORRECTION_BLOCKS[d.ordinal][c],m=Z.ECC_CODEWORDS_PER_BLOCK[d.ordinal][c],w=Math.floor(Z.getNumRawDataModules(c)/8),A=p-w%p,x=Math.floor(w/p);let P=[];const S=Z.reedSolomonComputeDivisor(m);for(let E=0,D=0;E<p;E++){let V=l.slice(D,D+x-m+(E<A?0:1));D+=V.length;const M=Z.reedSolomonComputeRemainder(V,S);E<A&&V.push(0),P.push(V.concat(M))}let _=[];for(let E=0;E<P[0].length;E++)P.forEach((D,V)=>{(E!=x-m||V>=A)&&_.push(D[E])});return i(_.length==w),_}drawCodewords(l){if(l.length!=Math.floor(Z.getNumRawDataModules(this.version)/8))throw new RangeError("Invalid argument");let c=0;for(let d=this.size-1;d>=1;d-=2){d==6&&(d=5);for(let p=0;p<this.size;p++)for(let m=0;m<2;m++){const w=d-m,x=(d+1&2)==0?this.size-1-p:p;!this.isFunction[x][w]&&c<l.length*8&&(this.modules[x][w]=r(l[c>>>3],7-(c&7)),c++)}}i(c==l.length*8)}applyMask(l){if(l<0||l>7)throw new RangeError("Mask value out of range");for(let c=0;c<this.size;c++)for(let d=0;d<this.size;d++){let p;switch(l){case 0:p=(d+c)%2==0;break;case 1:p=c%2==0;break;case 2:p=d%3==0;break;case 3:p=(d+c)%3==0;break;case 4:p=(Math.floor(d/3)+Math.floor(c/2))%2==0;break;case 5:p=d*c%2+d*c%3==0;break;case 6:p=(d*c%2+d*c%3)%2==0;break;case 7:p=((d+c)%2+d*c%3)%2==0;break;default:throw new Error("Unreachable")}!this.isFunction[c][d]&&p&&(this.modules[c][d]=!this.modules[c][d])}}getPenaltyScore(){let l=0;for(let m=0;m<this.size;m++){let w=!1,A=0,x=[0,0,0,0,0,0,0];for(let P=0;P<this.size;P++)this.modules[m][P]==w?(A++,A==5?l+=Z.PENALTY_N1:A>5&&l++):(this.finderPenaltyAddHistory(A,x),w||(l+=this.finderPenaltyCountPatterns(x)*Z.PENALTY_N3),w=this.modules[m][P],A=1);l+=this.finderPenaltyTerminateAndCount(w,A,x)*Z.PENALTY_N3}for(let m=0;m<this.size;m++){let w=!1,A=0,x=[0,0,0,0,0,0,0];for(let P=0;P<this.size;P++)this.modules[P][m]==w?(A++,A==5?l+=Z.PENALTY_N1:A>5&&l++):(this.finderPenaltyAddHistory(A,x),w||(l+=this.finderPenaltyCountPatterns(x)*Z.PENALTY_N3),w=this.modules[P][m],A=1);l+=this.finderPenaltyTerminateAndCount(w,A,x)*Z.PENALTY_N3}for(let m=0;m<this.size-1;m++)for(let w=0;w<this.size-1;w++){const A=this.modules[m][w];A==this.modules[m][w+1]&&A==this.modules[m+1][w]&&A==this.modules[m+1][w+1]&&(l+=Z.PENALTY_N2)}let c=0;for(const m of this.modules)c=m.reduce((w,A)=>w+(A?1:0),c);const d=this.size*this.size,p=Math.ceil(Math.abs(c*20-d*10)/d)-1;return i(0<=p&&p<=9),l+=p*Z.PENALTY_N4,i(0<=l&&l<=2568888),l}getAlignmentPatternPositions(){if(this.version==1)return[];{const l=Math.floor(this.version/7)+2,c=this.version==32?26:Math.ceil((this.version*4+4)/(l*2-2))*2;let d=[6];for(let p=this.size-7;d.length<l;p-=c)d.splice(1,0,p);return d}}static getNumRawDataModules(l){if(l<Z.MIN_VERSION||l>Z.MAX_VERSION)throw new RangeError("Version number out of range");let c=(16*l+128)*l+64;if(l>=2){const d=Math.floor(l/7)+2;c-=(25*d-10)*d-55,l>=7&&(c-=36)}return i(208<=c&&c<=29648),c}static getNumDataCodewords(l,c){return Math.floor(Z.getNumRawDataModules(l)/8)-Z.ECC_CODEWORDS_PER_BLOCK[c.ordinal][l]*Z.NUM_ERROR_CORRECTION_BLOCKS[c.ordinal][l]}static reedSolomonComputeDivisor(l){if(l<1||l>255)throw new RangeError("Degree out of range");let c=[];for(let p=0;p<l-1;p++)c.push(0);c.push(1);let d=1;for(let p=0;p<l;p++){for(let m=0;m<c.length;m++)c[m]=Z.reedSolomonMultiply(c[m],d),m+1<c.length&&(c[m]^=c[m+1]);d=Z.reedSolomonMultiply(d,2)}return c}static reedSolomonComputeRemainder(l,c){let d=c.map(p=>0);for(const p of l){const m=p^d.shift();d.push(0),c.forEach((w,A)=>d[A]^=Z.reedSolomonMultiply(w,m))}return d}static reedSolomonMultiply(l,c){if(l>>>8||c>>>8)throw new RangeError("Byte out of range");let d=0;for(let p=7;p>=0;p--)d=d<<1^(d>>>7)*285,d^=(c>>>p&1)*l;return i(d>>>8==0),d}finderPenaltyCountPatterns(l){const c=l[1];i(c<=this.size*3);const d=c>0&&l[2]==c&&l[3]==c*3&&l[4]==c&&l[5]==c;return(d&&l[0]>=c*4&&l[6]>=c?1:0)+(d&&l[6]>=c*4&&l[0]>=c?1:0)}finderPenaltyTerminateAndCount(l,c,d){return l&&(this.finderPenaltyAddHistory(c,d),c=0),c+=this.size,this.finderPenaltyAddHistory(c,d),this.finderPenaltyCountPatterns(d)}finderPenaltyAddHistory(l,c){c[0]==0&&(l+=this.size),c.pop(),c.unshift(l)}};e.MIN_VERSION=1,e.MAX_VERSION=40,e.PENALTY_N1=3,e.PENALTY_N2=3,e.PENALTY_N3=40,e.PENALTY_N4=10,e.ECC_CODEWORDS_PER_BLOCK=[[-1,7,10,15,20,26,18,20,24,30,18,20,24,26,30,22,24,28,30,28,28,28,28,30,30,26,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,10,16,26,18,24,16,18,22,22,26,30,22,22,24,24,28,28,26,26,26,26,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28],[-1,13,22,18,26,18,24,18,22,20,24,28,26,24,20,30,24,28,28,26,30,28,30,30,30,30,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,17,28,22,16,22,28,26,26,24,28,24,28,22,24,24,30,28,28,26,28,30,24,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30]],e.NUM_ERROR_CORRECTION_BLOCKS=[[-1,1,1,1,1,1,2,2,2,2,4,4,4,4,4,6,6,6,6,7,8,8,9,9,10,12,12,12,13,14,15,16,17,18,19,19,20,21,22,24,25],[-1,1,1,1,2,2,4,4,4,5,5,5,8,9,9,10,10,11,13,14,16,17,17,18,20,21,23,25,26,28,29,31,33,35,37,38,40,43,45,47,49],[-1,1,1,2,2,4,4,6,6,8,8,8,10,12,16,12,17,16,18,21,20,23,23,25,27,29,34,34,35,38,40,43,45,48,51,53,56,59,62,65,68],[-1,1,1,2,4,4,4,5,6,8,8,11,11,16,16,18,16,19,21,25,25,25,34,30,32,35,37,40,42,45,48,51,54,57,60,63,66,70,74,77,81]],t.QrCode=e;function n(u,l,c){if(l<0||l>31||u>>>l)throw new RangeError("Value out of range");for(let d=l-1;d>=0;d--)c.push(u>>>d&1)}function r(u,l){return(u>>>l&1)!=0}function i(u){if(!u)throw new Error("Assertion error")}const s=class Se{constructor(l,c,d){if(this.mode=l,this.numChars=c,this.bitData=d,c<0)throw new RangeError("Invalid argument");this.bitData=d.slice()}static makeBytes(l){let c=[];for(const d of l)n(d,8,c);return new Se(Se.Mode.BYTE,l.length,c)}static makeNumeric(l){if(!Se.isNumeric(l))throw new RangeError("String contains non-numeric characters");let c=[];for(let d=0;d<l.length;){const p=Math.min(l.length-d,3);n(parseInt(l.substring(d,d+p),10),p*3+1,c),d+=p}return new Se(Se.Mode.NUMERIC,l.length,c)}static makeAlphanumeric(l){if(!Se.isAlphanumeric(l))throw new RangeError("String contains unencodable characters in alphanumeric mode");let c=[],d;for(d=0;d+2<=l.length;d+=2){let p=Se.ALPHANUMERIC_CHARSET.indexOf(l.charAt(d))*45;p+=Se.ALPHANUMERIC_CHARSET.indexOf(l.charAt(d+1)),n(p,11,c)}return d<l.length&&n(Se.ALPHANUMERIC_CHARSET.indexOf(l.charAt(d)),6,c),new Se(Se.Mode.ALPHANUMERIC,l.length,c)}static makeSegments(l){return l==""?[]:Se.isNumeric(l)?[Se.makeNumeric(l)]:Se.isAlphanumeric(l)?[Se.makeAlphanumeric(l)]:[Se.makeBytes(Se.toUtf8ByteArray(l))]}static makeEci(l){let c=[];if(l<0)throw new RangeError("ECI assignment value out of range");if(l<128)n(l,8,c);else if(l<16384)n(2,2,c),n(l,14,c);else if(l<1e6)n(6,3,c),n(l,21,c);else throw new RangeError("ECI assignment value out of range");return new Se(Se.Mode.ECI,0,c)}static isNumeric(l){return Se.NUMERIC_REGEX.test(l)}static isAlphanumeric(l){return Se.ALPHANUMERIC_REGEX.test(l)}getData(){return this.bitData.slice()}static getTotalBits(l,c){let d=0;for(const p of l){const m=p.mode.numCharCountBits(c);if(p.numChars>=1<<m)return 1/0;d+=4+m+p.bitData.length}return d}static toUtf8ByteArray(l){l=encodeURI(l);let c=[];for(let d=0;d<l.length;d++)l.charAt(d)!="%"?c.push(l.charCodeAt(d)):(c.push(parseInt(l.substring(d+1,d+3),16)),d+=2);return c}};s.NUMERIC_REGEX=/^[0-9]*$/,s.ALPHANUMERIC_REGEX=/^[A-Z0-9 $%*+.\/:-]*$/,s.ALPHANUMERIC_CHARSET="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:";let o=s;t.QrSegment=s})(Xr||(Xr={}));(t=>{(e=>{const n=class{constructor(i,s){this.ordinal=i,this.formatBits=s}};n.LOW=new n(0,1),n.MEDIUM=new n(1,0),n.QUARTILE=new n(2,3),n.HIGH=new n(3,2),e.Ecc=n})(t.QrCode||(t.QrCode={}))})(Xr||(Xr={}));(t=>{(e=>{const n=class{constructor(i,s){this.modeBits=i,this.numBitsCharCount=s}numCharCountBits(i){return this.numBitsCharCount[Math.floor((i+7)/17)]}};n.NUMERIC=new n(1,[10,12,14]),n.ALPHANUMERIC=new n(2,[9,11,13]),n.BYTE=new n(4,[8,16,16]),n.KANJI=new n(8,[8,10,12]),n.ECI=new n(7,[0,0,0]),e.Mode=n})(t.QrSegment||(t.QrSegment={}))})(Xr||(Xr={}));var Ci=Xr;/**
 * @license qrcode.react
 * Copyright (c) Paul O'Shannessy
 * SPDX-License-Identifier: ISC
 */var Kb={L:Ci.QrCode.Ecc.LOW,M:Ci.QrCode.Ecc.MEDIUM,Q:Ci.QrCode.Ecc.QUARTILE,H:Ci.QrCode.Ecc.HIGH},nI=128,rI="L",iI="#FFFFFF",sI="#000000",oI=!1,aI=1,Gb=4,Qb=0,Yb=.1;function lI(t,e=0){const n=[];return t.forEach(function(r,i){let s=null;r.forEach(function(o,u){if(!o&&s!==null){n.push(`M${s+e} ${i+e}h${u-s}v1H${s+e}z`),s=null;return}if(u===r.length-1){if(!o)return;s===null?n.push(`M${u+e},${i+e} h1v1H${u+e}z`):n.push(`M${s+e},${i+e} h${u+1-s}v1H${s+e}z`);return}o&&s===null&&(s=u)})}),n.join("")}function uI(t,e){return t.slice().map((n,r)=>r<e.y||r>=e.y+e.h?n:n.map((i,s)=>s<e.x||s>=e.x+e.w?i:!1))}function Xb(t,e,n,r){if(r==null)return null;const i=t.length+n*2,s=Math.floor(e*Yb),o=i/e,u=(r.width||s)*o,l=(r.height||s)*o,c=r.x==null?t.length/2-u/2:r.x*o,d=r.y==null?t.length/2-l/2:r.y*o,p=r.opacity==null?1:r.opacity;let m=null;if(r.excavate){let A=Math.floor(c),x=Math.floor(d),P=Math.ceil(u+c-A),S=Math.ceil(l+d-x);m={x:A,y:x,w:P,h:S}}const w=r.crossOrigin;return{x:c,y:d,h:l,w:u,excavation:m,opacity:p,crossOrigin:w}}function Jb(t,e){return e!=null?Math.max(Math.floor(e),0):t?Gb:Qb}function cI({value:t,level:e,minVersion:n,includeMargin:r,marginSize:i,imageSettings:s,size:o,boostLevel:u}){let l=ke.useMemo(()=>{const A=(Array.isArray(t)?t:[t]).reduce((x,P)=>(x.push(...Ci.QrSegment.makeSegments(P)),x),[]);return Ci.QrCode.encodeSegments(A,Kb[e],n,void 0,void 0,u)},[t,e,n,u]);const{cells:c,margin:d,numCells:p,calculatedImageSettings:m}=ke.useMemo(()=>{let w=l.getModules();const A=Jb(r,i),x=w.length+A*2,P=Xb(w,o,A,s);return{cells:w,margin:A,numCells:x,calculatedImageSettings:P}},[l,o,s,r,i]);return{qrcode:l,margin:d,cells:c,numCells:p,calculatedImageSettings:m}}var Zb=function(){try{new Path2D().addPath(new Path2D)}catch{return!1}return!0}(),eD=ke.forwardRef(function(e,n){const r=e,{value:i,size:s=nI,level:o=rI,bgColor:u=iI,fgColor:l=sI,includeMargin:c=oI,minVersion:d=aI,boostLevel:p,marginSize:m,imageSettings:w}=r,x=cd(r,["value","size","level","bgColor","fgColor","includeMargin","minVersion","boostLevel","marginSize","imageSettings"]),{style:P}=x,S=cd(x,["style"]),_=w==null?void 0:w.src,E=ke.useRef(null),D=ke.useRef(null),V=ke.useCallback(ye=>{E.current=ye,typeof n=="function"?n(ye):n&&(n.current=ye)},[n]),[M,T]=ke.useState(!1),{margin:y,cells:v,numCells:I,calculatedImageSettings:C}=cI({value:i,level:o,minVersion:d,boostLevel:p,includeMargin:c,marginSize:m,imageSettings:w,size:s});ke.useEffect(()=>{if(E.current!=null){const ye=E.current,Ce=ye.getContext("2d");if(!Ce)return;let bt=v;const Be=D.current,z=C!=null&&Be!==null&&Be.complete&&Be.naturalHeight!==0&&Be.naturalWidth!==0;z&&C.excavation!=null&&(bt=uI(v,C.excavation));const K=window.devicePixelRatio||1;ye.height=ye.width=s*K;const Y=s/I*K;Ce.scale(Y,Y),Ce.fillStyle=u,Ce.fillRect(0,0,I,I),Ce.fillStyle=l,Zb?Ce.fill(new Path2D(lI(bt,y))):v.forEach(function(de,ae){de.forEach(function(ve,jt){ve&&Ce.fillRect(jt+y,ae+y,1,1)})}),C&&(Ce.globalAlpha=C.opacity),z&&Ce.drawImage(Be,C.x+y,C.y+y,C.w,C.h)}}),ke.useEffect(()=>{T(!1)},[_]);const N=ud({height:s,width:s},P);let R=null;return _!=null&&(R=ke.createElement("img",{src:_,key:_,style:{display:"none"},onLoad:()=>{T(!0)},ref:D,crossOrigin:C==null?void 0:C.crossOrigin})),ke.createElement(ke.Fragment,null,ke.createElement("canvas",ud({style:N,height:s,width:s,ref:V,role:"img"},S)),R)});eD.displayName="QRCodeCanvas";var hI=ke.forwardRef(function(e,n){const r=e,{value:i,size:s=nI,level:o=rI,bgColor:u=iI,fgColor:l=sI,includeMargin:c=oI,minVersion:d=aI,boostLevel:p,title:m,marginSize:w,imageSettings:A}=r,x=cd(r,["value","size","level","bgColor","fgColor","includeMargin","minVersion","boostLevel","title","marginSize","imageSettings"]),{margin:P,cells:S,numCells:_,calculatedImageSettings:E}=cI({value:i,level:o,minVersion:d,boostLevel:p,includeMargin:c,marginSize:w,imageSettings:A,size:s});let D=S,V=null;A!=null&&E!=null&&(E.excavation!=null&&(D=uI(S,E.excavation)),V=ke.createElement("image",{href:A.src,height:E.h,width:E.w,x:E.x+P,y:E.y+P,preserveAspectRatio:"none",opacity:E.opacity,crossOrigin:E.crossOrigin}));const M=lI(D,P);return ke.createElement("svg",ud({height:s,width:s,viewBox:`0 0 ${_} ${_}`,ref:n,role:"img"},x),!!m&&ke.createElement("title",null,m),ke.createElement("path",{fill:u,d:`M0,0 h${_}v${_}H0z`,shapeRendering:"crispEdges"}),ke.createElement("path",{fill:l,d:M,shapeRendering:"crispEdges"}),V)});hI.displayName="QRCodeSVG";function tD(){var E,D,V,M,T,y;const{id:t}=af(),e=cu(),[n,r]=j.useState(null),[i,s]=j.useState(""),[o,u]=j.useState(!1),[l,c]=j.useState(localStorage.getItem("playerId")),[d,p]=j.useState(localStorage.getItem("nickname")),[m,w]=j.useState(""),A=window.location.href;j.useEffect(()=>{var I;if(!l||!d)return;np(t,C=>{r(C),C.status==="drafting"?e(`/drafting/${t}`):C.status==="battling_ko"&&e(`/battle/${t}`)}),(async()=>{try{const C=await jb(t,l,d)}catch{console.log("Join attempt done")}})(),(n==null?void 0:n.hostId)===l&&((I=n==null?void 0:n.players)==null?void 0:I.length)>0&&!(n!=null&&n.currentPlayerTurn)&&(async()=>{const N=an(cn,"lobbies",t);await kn(N,{currentPlayerTurn:l})})()},[t,l,d,e,n==null?void 0:n.hostId,n==null?void 0:n.currentPlayerTurn]);const x=async()=>{var v;if(!(!i.trim()||!n||((v=n.wheelArtists)==null?void 0:v.length)>=12)){if(n.currentPlayerTurn!==l)return alert("Du bist nicht dran!");try{const I=an(cn,"lobbies",t),N=[...n.wheelArtists||[],i.trim()],ye=(n.players.findIndex(bt=>bt.id===l)+1)%n.players.length,Ce=n.players[ye].id;await kn(I,{wheelArtists:N,currentPlayerTurn:Ce}),s("")}catch(I){console.error("Fehler beim Hinzufügen:",I)}}},P=async()=>{var I;if(((I=n.wheelArtists)==null?void 0:I.length)<1)return alert("Es müssen Artists im Rad sein!");const v=an(cn,"lobbies",t);await kn(v,{status:"drafting"})},S=async v=>{if(v.preventDefault(),!m.trim())return;const I=Math.random().toString(36).substring(2,9);localStorage.setItem("playerId",I),localStorage.setItem("nickname",m.trim()),c(I),p(m.trim())};if(!l||!d)return k.jsx("div",{className:"flex-1 flex flex-col items-center justify-center p-6 bg-dark",children:k.jsxs("div",{className:"w-full max-w-sm bg-secondary p-8 rounded-3xl border border-white/5 shadow-2xl space-y-6",children:[k.jsxs("div",{className:"text-center space-y-2",children:[k.jsx("h2",{className:"text-3xl font-black",children:"Lobby beitreten"}),k.jsxs("p",{className:"text-gray-400 text-sm",children:["Gib deinen Namen ein, um Lobby ",k.jsx("span",{className:"text-primary font-bold",children:t})," beizutreten."]})]}),k.jsxs("form",{onSubmit:S,className:"space-y-4",children:[k.jsx("input",{type:"text",placeholder:"Dein Name",value:m,onChange:v=>w(v.target.value),className:"w-full bg-black/50 border border-white/10 rounded-xl p-4 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary",autoFocus:!0,required:!0}),k.jsx("button",{type:"submit",className:"w-full bg-primary text-black font-black py-4 rounded-xl hover:bg-primary/90 transition-all active:scale-95 shadow-lg shadow-primary/20",children:"BEITRETEN"})]})]})});if(!n)return k.jsx("div",{className:"flex-1 flex items-center justify-center bg-dark text-white",children:k.jsx(Io,{className:"animate-spin"})});const _=n.hostId===l;return n.players.every(v=>v.isReady),k.jsxs("div",{className:"flex-1 flex flex-col bg-dark text-white p-6 max-w-2xl mx-auto w-full",children:[k.jsxs("header",{className:"flex justify-between items-start mb-8",children:[k.jsxs("div",{children:[k.jsx("h2",{className:"text-xs font-bold uppercase tracking-widest text-primary",children:"Lobby Code"}),k.jsxs("div",{className:"flex items-center gap-4",children:[k.jsx("p",{className:"text-3xl font-black tracking-tighter",children:t}),k.jsx("button",{onClick:()=>u(!o),className:"text-xs bg-primary/20 text-primary px-3 py-1 rounded-full font-bold hover:bg-primary/30 transition-colors",children:"QR Anzeigen"})]}),o&&k.jsxs("div",{className:"mt-4 p-4 bg-white rounded-2xl inline-block shadow-2xl animate-in fade-in slide-in-from-top-2",children:[k.jsx(hI,{value:A,size:150}),k.jsx("p",{className:"text-black text-center text-xs mt-2 font-bold break-all max-w-[150px]",children:A})]})]}),k.jsx("div",{className:"text-right",children:k.jsxs("div",{className:"inline-flex items-center gap-2 bg-white/5 py-2 px-4 rounded-full border border-white/10",children:[k.jsx(g0,{size:16,className:"text-primary"}),k.jsxs("span",{className:"font-bold text-sm",children:[n.players.length," Spieler"]})]})})]}),k.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8",children:[k.jsxs("section",{className:"space-y-4",children:[k.jsx("h3",{className:"text-sm font-bold uppercase tracking-widest text-gray-500",children:"Spieler"}),k.jsx("div",{className:"space-y-2",children:n.players.map(v=>k.jsxs("div",{className:"flex items-center justify-between bg-secondary p-4 rounded-xl border border-white/5",children:[k.jsxs("span",{className:"font-bold",children:[v.name," ",v.id===l?"(Du)":""]}),v.isReady?k.jsx(wA,{size:20,className:"text-primary fill-primary/20"}):k.jsx("div",{className:"w-5 h-5 rounded-full border-2 border-white/10"})]},v.id))})]}),k.jsxs("section",{className:"space-y-4",children:[k.jsxs("div",{className:"flex justify-between items-end",children:[k.jsx("h3",{className:"text-sm font-bold uppercase tracking-widest text-gray-500",children:"Glücksrad füllen"}),k.jsxs("span",{className:"text-xs font-bold bg-white/10 px-2 py-1 rounded-md",children:[((E=n.wheelArtists)==null?void 0:E.length)||0," / 12"]})]}),k.jsxs("div",{className:"bg-primary/5 border border-primary/20 p-6 rounded-2xl space-y-6",children:[k.jsx("div",{className:"text-center",children:n.currentPlayerTurn===l?k.jsx("div",{className:"inline-block bg-primary text-black font-black px-4 py-1 rounded-full text-sm animate-pulse shadow-[0_0_15px_rgba(29,185,84,0.5)]",children:"DEIN ZUG!"}):k.jsxs("div",{className:"inline-block bg-white/10 text-gray-400 font-bold px-4 py-1 rounded-full text-sm",children:["Warte auf ",((D=n.players.find(v=>v.id===n.currentPlayerTurn))==null?void 0:D.name)||"nächsten Spieler","..."]})}),k.jsxs("div",{className:"flex gap-2",children:[k.jsx("input",{type:"text",placeholder:"Interpret / Band eingeben...",value:i,onChange:v=>s(v.target.value),onKeyDown:v=>v.key==="Enter"&&x(),disabled:n.currentPlayerTurn!==l||((V=n.wheelArtists)==null?void 0:V.length)>=12,className:"flex-1 bg-secondary border border-white/10 rounded-xl p-3 text-white focus:ring-1 focus:ring-primary outline-none disabled:opacity-50"}),k.jsx("button",{onClick:x,disabled:n.currentPlayerTurn!==l||((M=n.wheelArtists)==null?void 0:M.length)>=12,className:"bg-primary text-black p-3 rounded-xl disabled:opacity-50 disabled:bg-gray-700 hover:bg-primary/90 transition-colors",children:k.jsx(m0,{size:20})})]}),k.jsx("div",{className:"grid grid-cols-2 gap-2 mt-4",children:[...Array(12)].map((v,I)=>{var N;const C=(N=n.wheelArtists)==null?void 0:N[I];return k.jsx("div",{className:`p-2 text-xs font-bold rounded-lg border text-center truncate ${C?"border-primary/50 bg-primary/10 text-white":"border-white/5 bg-black/20 text-gray-600"}`,children:C||`${I+1}`},I)})})]})]})]}),k.jsxs("footer",{className:"mt-auto pt-8",children:[_&&k.jsx("button",{disabled:((T=n.wheelArtists)==null?void 0:T.length)<12,onClick:P,className:"w-full bg-primary disabled:bg-gray-800 disabled:text-gray-500 text-black font-black py-5 rounded-2xl flex items-center justify-center gap-3 transition-all active:scale-95 shadow-xl shadow-primary/10",children:((y=n.wheelArtists)==null?void 0:y.length)<12?"RAD NOCH NICHT VOLL":"ZUM GLÜCKSRAD (DRAFT) STARTEN"}),!_&&k.jsx("div",{className:"text-center text-gray-500 font-bold uppercase tracking-widest text-xs",children:"Warte auf Host zum Starten..."})]})]})}const nD="AIzaSyDnYEK9RJD1pipQElmQ96NZE5LFuBiVcSo",rD="https://www.googleapis.com/youtube/v3",iD=async t=>{if(!t)return[];try{const e=await fetch(`${rD}/search?part=snippet&maxResults=8&q=${encodeURIComponent(t)}&type=video&videoEmbeddable=true&videoSyndicated=true&key=${nD}`);if(!e.ok)throw new Error("YouTube API Error");return(await e.json()).items.map(r=>({videoId:r.id.videoId,title:r.snippet.title,channelTitle:r.snippet.channelTitle,thumbnail:r.snippet.thumbnails.default.url}))}catch(e){return console.error("Error searching YouTube:",e),[]}};function sD(){var T,y;const{id:t}=af(),e=cu(),[n,r]=j.useState(null),[i]=j.useState(localStorage.getItem("playerId")),[s,o]=j.useState(!1),[u,l]=j.useState(null),[c,d]=j.useState(""),[p,m]=j.useState([]),[w,A]=j.useState(!1);j.useEffect(()=>{const v=np(t,I=>{r(I),I.status==="battling_ko"&&e(`/battle/${t}`)});return()=>v()},[t,e]);const x=()=>{n.currentPlayerTurn!==i||s||(o(!0),l(null),m([]),d(""),setTimeout(()=>{const v=Math.floor(Math.random()*n.wheelArtists.length),I=n.wheelArtists[v];l(I),d(I+" "),o(!1)},3e3))},P=async()=>{if(!c)return;A(!0);const v=c.includes(u)?c:`${u} ${c}`,I=await iD(v);m(I),A(!1)},S=async v=>{if(!(!n||!u))try{const I=an(cn,"lobbies",t),C=n.portfolios||{},N=C[i]||[],R={...C,[i]:[...N,{...v,artist:u}]},Ce=(n.players.findIndex(Be=>Be.id===i)+1)%n.players.length,bt=n.players[Ce].id;await kn(I,{portfolios:R,currentPlayerTurn:bt}),l(null),m([])}catch(I){console.error("Fehler beim Portfolio Update:",I)}},_=3,E=n&&n.players.every(v=>{var C;return(((C=n.portfolios)==null?void 0:C[v.id])||[]).length>=_}),D=async()=>{const v=an(cn,"lobbies",t);await kn(v,{status:"battling_ko"})};if(!n)return k.jsx("div",{className:"flex-1 flex items-center justify-center bg-dark text-white",children:k.jsx(Io,{className:"animate-spin"})});const V=n.hostId===i,M=((T=n.portfolios)==null?void 0:T[i])||[];return k.jsxs("div",{className:"flex-1 flex flex-col bg-dark text-white p-6 max-w-4xl mx-auto w-full",children:[k.jsxs("header",{className:"flex justify-between items-center mb-8",children:[k.jsxs("div",{children:[k.jsx("h2",{className:"text-xs font-bold uppercase tracking-widest text-primary",children:"Drafting Phase"}),k.jsx("p",{className:"text-3xl font-black tracking-tighter",children:"GLÜCKSRAD"})]}),k.jsx("div",{className:"text-right",children:k.jsxs("div",{className:"inline-flex items-center gap-2 bg-white/5 py-2 px-4 rounded-full border border-white/10",children:[k.jsx(Music,{size:16,className:"text-primary"}),k.jsxs("span",{className:"font-bold text-sm",children:["Dein Deck: ",M.length,"/",_]})]})})]}),k.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8 flex-1",children:[k.jsxs("section",{className:"flex flex-col items-center justify-center bg-primary/5 rounded-3xl border border-primary/20 p-8 relative overflow-hidden",children:[n.currentPlayerTurn===i&&!u&&!s&&k.jsx("div",{className:"absolute top-4 bg-primary text-black font-black px-4 py-1 rounded-full text-sm animate-bounce shadow-[0_0_15px_rgba(29,185,84,0.5)]",children:"DU BIST DRAN!"}),k.jsxs("div",{className:`w-64 h-64 border-8 border-white/10 rounded-full flex items-center justify-center bg-black/50 relative shadow-2xl ${s?"animate-spin":""}`,style:{animationDuration:"0.5s"},children:[k.jsx("div",{className:"absolute top-0 w-4 h-4 bg-primary -mt-2 rotate-45"}),s?k.jsx(Trophy,{size:48,className:"text-primary/50"}):u?k.jsxs("div",{className:"text-center p-4",children:[k.jsx("p",{className:"text-xs text-primary font-bold uppercase tracking-widest mb-2",children:"Gewählt"}),k.jsx("h3",{className:"text-2xl font-black leading-tight break-words",children:u})]}):k.jsxs("button",{onClick:x,disabled:n.currentPlayerTurn!==i,className:"w-32 h-32 bg-primary rounded-full text-black font-black text-2xl hover:scale-105 active:scale-95 transition-all disabled:opacity-50 disabled:bg-gray-700 disabled:text-gray-400 disabled:hover:scale-100 flex flex-col items-center justify-center gap-2 shadow-xl shadow-primary/20",children:[k.jsx(AA,{size:32,fill:"currentColor"}),"SPIN"]})]}),!s&&!u&&n.currentPlayerTurn!==i&&k.jsxs("p",{className:"mt-8 font-bold text-gray-400 text-sm",children:[(y=n.players.find(v=>v.id===n.currentPlayerTurn))==null?void 0:y.name," dreht das Rad..."]})]}),k.jsx("section",{className:"space-y-6 flex flex-col",children:u&&n.currentPlayerTurn===i?k.jsxs("div",{className:"bg-white/5 p-6 rounded-2xl border border-white/10 animate-in fade-in slide-in-from-right-4",children:[k.jsxs("h3",{className:"font-black text-xl mb-4 text-primary",children:["Suche einen Song von ",u]}),k.jsxs("div",{className:"flex gap-2 mb-4",children:[k.jsx("input",{type:"text",value:c,onChange:v=>d(v.target.value),onKeyDown:v=>v.key==="Enter"&&P(),className:"flex-1 bg-black/50 border border-white/10 rounded-xl p-3 text-white focus:ring-1 focus:ring-primary outline-none"}),k.jsx("button",{onClick:P,className:"bg-primary text-black p-3 rounded-xl hover:bg-primary/90",children:k.jsx(PA,{size:20})})]}),k.jsxs("div",{className:"space-y-2 max-h-[250px] overflow-y-auto pr-2 custom-scrollbar",children:[p.map(v=>k.jsxs("button",{onClick:()=>S(v),className:"w-full flex items-center gap-3 bg-black/30 hover:bg-white/10 p-3 rounded-xl transition-all text-left group border border-transparent hover:border-primary/50",children:[k.jsx("img",{src:v.thumbnail,alt:"",className:"w-12 h-12 object-cover rounded-md"}),k.jsxs("div",{className:"flex-1 min-w-0",children:[k.jsx("p",{className:"font-bold truncate text-sm",children:v.title}),k.jsx("p",{className:"text-xs text-gray-400 truncate",children:v.channelTitle})]}),k.jsx(m0,{size:16,className:"text-primary opacity-0 group-hover:opacity-100 transition-all gap-2"})]},v.videoId)),w&&k.jsx("div",{className:"text-center py-4",children:k.jsx(Io,{className:"animate-spin mx-auto text-primary"})})]})]}):k.jsxs("div",{className:"bg-white/5 p-6 rounded-2xl border border-white/10 flex-1 flex flex-col",children:[k.jsx("h3",{className:"text-sm font-bold uppercase tracking-widest text-gray-500 mb-4",children:"Dein Portfolio"}),k.jsx("div",{className:"space-y-3 flex-1 overflow-y-auto",children:M.length===0?k.jsxs("div",{className:"h-full flex flex-col items-center justify-center text-gray-600 space-y-2",children:[k.jsx(Music,{size:48,className:"opacity-20"}),k.jsx("p",{className:"font-bold text-sm",children:"Noch leeres Deck"})]}):M.map((v,I)=>k.jsxs("div",{className:"flex items-center gap-3 bg-black/40 p-3 rounded-xl border border-white/5",children:[k.jsx("div",{className:"w-8 h-8 rounded-full bg-primary/20 text-primary flex items-center justify-center font-black text-xs",children:I+1}),k.jsxs("div",{className:"flex-1 min-w-0",children:[k.jsx("p",{className:"font-bold truncate text-sm",children:v.title}),k.jsx("p",{className:"text-xs text-primary truncate",children:v.artist})]})]},I))})]})})]}),k.jsx("footer",{className:"mt-8 pt-6 border-t border-white/10",children:V?k.jsx("button",{disabled:!E,onClick:D,className:"w-full bg-primary disabled:bg-gray-800 disabled:text-gray-500 text-black font-black py-4 rounded-xl flex items-center justify-center gap-3 transition-all active:scale-95 shadow-xl shadow-primary/10",children:E?"KO-RUNDE STARTEN":"WARTE AUF ALLE SPIELER (PORTFOLIOS FÜLLEN)"}):k.jsx("div",{className:"text-center text-gray-500 font-bold uppercase tracking-widest text-xs py-4",children:E?"Warte auf Host für Turnierstart...":"Portfolios werden gefüllt..."})})]})}function oD(){const{id:t}=af(),e=cu(),[n,r]=j.useState(null),[i]=j.useState(localStorage.getItem("playerId")),[s,o]=j.useState(!1),[u,l]=j.useState(!1),[c,d]=j.useState(0),[p,m]=j.useState(!1),[w,A]=j.useState(null);j.useEffect(()=>{const _=np(t,E=>{var D;if(r(E),(D=E==null?void 0:E.battles)!=null&&D[c]){const V=E.battles[c],M=(V.votesA||0)+(V.votesB||0),T=E.players.length;if(M>0&&M>=T&&!p){const y=(V.votesA||0)>=(V.votesB||0)?V.songA:V.songB;A(y),m(!0),E.hostId===i&&setTimeout(()=>x(E),5e3)}}});return()=>_()},[t,c,p,i]);const x=async _=>{const E=c+1,D=an(cn,"lobbies",t);E<_.battles.length?await kn(D,{currentBattleIndex:E}):await kn(D,{status:"finished"})};j.useEffect(()=>{(n==null?void 0:n.currentBattleIndex)!==void 0&&n.currentBattleIndex!==c&&(d(n.currentBattleIndex),o(!1),l(!1),m(!1),A(null))},[n==null?void 0:n.currentBattleIndex]);const P=async(_,E)=>{if(_==="A"&&s||_==="B"&&u)return;_==="A"&&o(!0),_==="B"&&l(!0);const D=an(cn,"lobbies",t),V=`votes${_}`,M=`votedPlayers${_}`;try{const T=[...n.battles],y=T[c];y[V]=(y[V]||0)+E,y[M]=y[M]||[],y[M].includes(i)||y[M].push(i),await kn(D,{battles:T})}catch(T){console.error(T)}};if(!n||!n.battles)return k.jsx("div",{className:"flex-1 flex items-center justify-center bg-dark",children:k.jsx(Io,{className:"animate-spin text-primary"})});if(n.status==="finished")return k.jsxs("div",{className:"flex-1 flex flex-col items-center justify-center bg-dark text-white p-6 text-center space-y-6 animate-in fade-in slide-in-from-bottom-8",children:[k.jsx(Eg,{size:80,className:"text-yellow-400 mx-auto animate-bounce"}),k.jsx("h2",{className:"text-5xl font-black",children:"TURNIER BEENDET"}),k.jsx("p",{className:"text-gray-400",children:"Alle Battles wurden ausgetragen!"}),k.jsx("button",{onClick:()=>e("/"),className:"mt-8 bg-primary text-black font-bold py-4 px-8 rounded-full",children:"Neues Spiel"})]});const S=n.battles[c];return S?p&&w?k.jsxs("div",{className:"flex-1 flex flex-col items-center justify-center bg-dark text-white p-6 text-center space-y-8 animate-in zoom-in duration-500",children:[k.jsxs("div",{className:"space-y-2",children:[k.jsx("p",{className:"text-primary font-bold tracking-widest uppercase",children:"Gewinner dieser Runde"}),k.jsx("h2",{className:"text-4xl md:text-6xl font-black text-white",children:w.title}),k.jsx("p",{className:"text-xl text-gray-400",children:w.channelTitle})]}),k.jsxs("div",{className:"aspect-video w-full max-w-lg bg-black rounded-3xl overflow-hidden shadow-2xl border-4 border-primary/50 relative",children:[k.jsx("img",{src:w.thumbnail,alt:w.title,className:"w-full h-full object-cover opacity-50"}),k.jsx("div",{className:"absolute inset-0 flex items-center justify-center",children:k.jsx(Eg,{size:64,className:"text-yellow-400 drop-shadow-[0_0_30px_rgba(250,204,21,0.5)]"})})]}),k.jsx(Io,{className:"animate-spin mx-auto text-primary mt-8"}),k.jsx("p",{className:"text-gray-500 text-sm",children:"Nächstes Battle startet gleich..."})]}):k.jsxs("div",{className:"flex-1 flex flex-col bg-dark text-white p-6 md:p-12 overflow-y-auto",children:[k.jsxs("header",{className:"text-center mb-12 space-y-4",children:[k.jsx("div",{className:"inline-flex items-center gap-2 bg-primary/10 text-primary py-2 px-6 rounded-full border border-primary/20 text-sm font-bold animate-pulse",children:"BATTLE AKTIV"}),k.jsx("h2",{className:"text-4xl md:text-6xl font-black tracking-tighter",children:"WER GEWINNT?"}),k.jsxs("p",{className:"text-gray-500 font-bold uppercase tracking-widest text-sm",children:["Runde ",n.currentRound," • Battle ",c+1,"/",n.battles.length]})]}),k.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 max-w-6xl mx-auto w-full flex-1",children:[k.jsxs("div",{className:"flex flex-col space-y-6",children:[k.jsx("div",{className:"aspect-video bg-black rounded-3xl overflow-hidden shadow-2xl border-4 border-white/5 group relative",children:k.jsx("iframe",{width:"100%",height:"100%",src:`https://www.youtube-nocookie.com/embed/${S.songA.videoId}?autoplay=0&controls=1&playsinline=1&rel=0&modestbranding=1&origin=${window.location.origin}`,title:"Song A",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",sandbox:"allow-same-origin allow-scripts allow-presentation allow-popups allow-popups-to-escape-sandbox",allowFullScreen:!0,className:"w-full h-full"})}),k.jsxs("div",{className:"text-center space-y-4",children:[k.jsxs("div",{children:[k.jsx("h3",{className:"text-2xl font-black line-clamp-2",children:S.songA.title}),k.jsx("p",{className:"text-primary font-bold mb-2",children:S.songA.channelTitle})]}),s?k.jsxs("div",{className:"py-4 border border-primary/20 bg-primary/10 rounded-2xl flex items-center justify-center gap-3",children:[k.jsx(Ig,{size:20,className:"text-primary"}),k.jsx("span",{className:"font-bold text-primary",children:"Bewertet!"})]}):k.jsxs("div",{className:"space-y-2",children:[k.jsx("p",{className:"text-xs text-gray-400 font-bold uppercase tracking-widest",children:"Punkte Vergeben"}),k.jsx("div",{className:"flex justify-center gap-2",children:[1,2,3,4,5].map(_=>k.jsx("button",{onClick:()=>P("A",_),className:"w-12 h-12 rounded-full font-black bg-primary text-black hover:scale-110 active:scale-95 transition-all shadow-lg shadow-primary/20",children:_},_))})]})]})]}),k.jsx("div",{className:"hidden md:flex items-center justify-center",children:k.jsx("div",{className:"w-16 h-16 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-2xl font-black italic text-gray-500",children:"VS"})}),k.jsxs("div",{className:"flex flex-col space-y-6",children:[k.jsx("div",{className:"aspect-video bg-black rounded-3xl overflow-hidden shadow-2xl border-4 border-white/5 group relative",children:k.jsx("iframe",{width:"100%",height:"100%",src:`https://www.youtube-nocookie.com/embed/${S.songB.videoId}?autoplay=0&controls=1&playsinline=1&rel=0&modestbranding=1&origin=${window.location.origin}`,title:"Song B",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",sandbox:"allow-same-origin allow-scripts allow-presentation allow-popups allow-popups-to-escape-sandbox",allowFullScreen:!0})}),k.jsxs("div",{className:"text-center space-y-4",children:[k.jsxs("div",{children:[k.jsx("h3",{className:"text-2xl font-black line-clamp-2",children:S.songB.title}),k.jsx("p",{className:"text-primary font-bold mb-2",children:S.songB.channelTitle})]}),u?k.jsxs("div",{className:"py-4 border border-primary/20 bg-primary/10 rounded-2xl flex items-center justify-center gap-3",children:[k.jsx(Ig,{size:20,className:"text-primary"}),k.jsx("span",{className:"font-bold text-primary",children:"Bewertet!"})]}):k.jsxs("div",{className:"space-y-2",children:[k.jsx("p",{className:"text-xs text-gray-400 font-bold uppercase tracking-widest",children:"Punkte Vergeben"}),k.jsx("div",{className:"flex justify-center gap-2",children:[1,2,3,4,5].map(_=>k.jsx("button",{onClick:()=>P("B",_),className:"w-12 h-12 rounded-full font-black bg-primary text-black hover:scale-110 active:scale-95 transition-all shadow-lg shadow-primary/20",children:_},_))})]})]})]})]}),s&&u&&k.jsxs("div",{className:"mt-12 text-center animate-bounce",children:[k.jsx("p",{className:"text-primary font-black uppercase tracking-widest",children:"Punkte vergeben!"}),k.jsx("p",{className:"text-gray-500 text-sm",children:"Warte auf das Endergebnis..."})]})]}):k.jsx("div",{children:"Kein Battle gefunden"})}console.log("AUX Battle: Starting full app...");$c.createRoot(document.getElementById("root")).render(k.jsx(ke.StrictMode,{children:k.jsx(fA,{children:k.jsx("div",{className:"flex-1 flex flex-col min-h-screen bg-dark text-white",children:k.jsxs(cA,{children:[k.jsx(Ms,{path:"/",element:k.jsx(Wb,{})}),k.jsx(Ms,{path:"/lobby/:id",element:k.jsx(tD,{})}),k.jsx(Ms,{path:"/drafting/:id",element:k.jsx(sD,{})}),k.jsx(Ms,{path:"/battle/:id",element:k.jsx(oD,{})})]})})})}));
