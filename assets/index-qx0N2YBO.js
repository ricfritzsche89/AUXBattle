function HI(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function qI(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Gy={exports:{}},Hl={},Qy={exports:{}},re={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var No=Symbol.for("react.element"),KI=Symbol.for("react.portal"),GI=Symbol.for("react.fragment"),QI=Symbol.for("react.strict_mode"),YI=Symbol.for("react.profiler"),XI=Symbol.for("react.provider"),JI=Symbol.for("react.context"),ZI=Symbol.for("react.forward_ref"),eT=Symbol.for("react.suspense"),tT=Symbol.for("react.memo"),nT=Symbol.for("react.lazy"),om=Symbol.iterator;function rT(t){return t===null||typeof t!="object"?null:(t=om&&t[om]||t["@@iterator"],typeof t=="function"?t:null)}var Yy={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Xy=Object.assign,Jy={};function rs(t,e,n){this.props=t,this.context=e,this.refs=Jy,this.updater=n||Yy}rs.prototype.isReactComponent={};rs.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};rs.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Zy(){}Zy.prototype=rs.prototype;function md(t,e,n){this.props=t,this.context=e,this.refs=Jy,this.updater=n||Yy}var gd=md.prototype=new Zy;gd.constructor=md;Xy(gd,rs.prototype);gd.isPureReactComponent=!0;var am=Array.isArray,ev=Object.prototype.hasOwnProperty,yd={current:null},tv={key:!0,ref:!0,__self:!0,__source:!0};function nv(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)ev.call(e,r)&&!tv.hasOwnProperty(r)&&(i[r]=e[r]);var u=arguments.length-2;if(u===1)i.children=n;else if(1<u){for(var l=Array(u),c=0;c<u;c++)l[c]=arguments[c+2];i.children=l}if(t&&t.defaultProps)for(r in u=t.defaultProps,u)i[r]===void 0&&(i[r]=u[r]);return{$$typeof:No,type:t,key:s,ref:o,props:i,_owner:yd.current}}function iT(t,e){return{$$typeof:No,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function vd(t){return typeof t=="object"&&t!==null&&t.$$typeof===No}function sT(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var lm=/\/+/g;function ic(t,e){return typeof t=="object"&&t!==null&&t.key!=null?sT(""+t.key):e.toString(36)}function Oa(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case No:case KI:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+ic(o,0):r,am(i)?(n="",t!=null&&(n=t.replace(lm,"$&/")+"/"),Oa(i,e,n,"",function(c){return c})):i!=null&&(vd(i)&&(i=iT(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(lm,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",am(t))for(var u=0;u<t.length;u++){s=t[u];var l=r+ic(s,u);o+=Oa(s,e,n,l,i)}else if(l=rT(t),typeof l=="function")for(t=l.call(t),u=0;!(s=t.next()).done;)s=s.value,l=r+ic(s,u++),o+=Oa(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function ha(t,e,n){if(t==null)return t;var r=[],i=0;return Oa(t,r,"","",function(s){return e.call(n,s,i++)}),r}function oT(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var pt={current:null},Ma={transition:null},aT={ReactCurrentDispatcher:pt,ReactCurrentBatchConfig:Ma,ReactCurrentOwner:yd};function rv(){throw Error("act(...) is not supported in production builds of React.")}re.Children={map:ha,forEach:function(t,e,n){ha(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return ha(t,function(){e++}),e},toArray:function(t){return ha(t,function(e){return e})||[]},only:function(t){if(!vd(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};re.Component=rs;re.Fragment=GI;re.Profiler=YI;re.PureComponent=md;re.StrictMode=QI;re.Suspense=eT;re.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=aT;re.act=rv;re.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Xy({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=yd.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var u=t.type.defaultProps;for(l in e)ev.call(e,l)&&!tv.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&u!==void 0?u[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){u=Array(l);for(var c=0;c<l;c++)u[c]=arguments[c+2];r.children=u}return{$$typeof:No,type:t.type,key:i,ref:s,props:r,_owner:o}};re.createContext=function(t){return t={$$typeof:JI,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:XI,_context:t},t.Consumer=t};re.createElement=nv;re.createFactory=function(t){var e=nv.bind(null,t);return e.type=t,e};re.createRef=function(){return{current:null}};re.forwardRef=function(t){return{$$typeof:ZI,render:t}};re.isValidElement=vd;re.lazy=function(t){return{$$typeof:nT,_payload:{_status:-1,_result:t},_init:oT}};re.memo=function(t,e){return{$$typeof:tT,type:t,compare:e===void 0?null:e}};re.startTransition=function(t){var e=Ma.transition;Ma.transition={};try{t()}finally{Ma.transition=e}};re.unstable_act=rv;re.useCallback=function(t,e){return pt.current.useCallback(t,e)};re.useContext=function(t){return pt.current.useContext(t)};re.useDebugValue=function(){};re.useDeferredValue=function(t){return pt.current.useDeferredValue(t)};re.useEffect=function(t,e){return pt.current.useEffect(t,e)};re.useId=function(){return pt.current.useId()};re.useImperativeHandle=function(t,e,n){return pt.current.useImperativeHandle(t,e,n)};re.useInsertionEffect=function(t,e){return pt.current.useInsertionEffect(t,e)};re.useLayoutEffect=function(t,e){return pt.current.useLayoutEffect(t,e)};re.useMemo=function(t,e){return pt.current.useMemo(t,e)};re.useReducer=function(t,e,n){return pt.current.useReducer(t,e,n)};re.useRef=function(t){return pt.current.useRef(t)};re.useState=function(t){return pt.current.useState(t)};re.useSyncExternalStore=function(t,e,n){return pt.current.useSyncExternalStore(t,e,n)};re.useTransition=function(){return pt.current.useTransition()};re.version="18.3.1";Qy.exports=re;var U=Qy.exports;const Pe=qI(U),lT=HI({__proto__:null,default:Pe},[U]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var uT=U,cT=Symbol.for("react.element"),hT=Symbol.for("react.fragment"),dT=Object.prototype.hasOwnProperty,fT=uT.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,pT={key:!0,ref:!0,__self:!0,__source:!0};function iv(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)dT.call(e,r)&&!pT.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:cT,type:t,key:s,ref:o,props:i,_owner:fT.current}}Hl.Fragment=hT;Hl.jsx=iv;Hl.jsxs=iv;Gy.exports=Hl;var y=Gy.exports,qc={},sv={exports:{}},bt={},ov={exports:{}},av={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(j,W){var X=j.length;j.push(W);e:for(;0<X;){var ue=X-1>>>1,se=j[ue];if(0<i(se,W))j[ue]=W,j[X]=se,X=ue;else break e}}function n(j){return j.length===0?null:j[0]}function r(j){if(j.length===0)return null;var W=j[0],X=j.pop();if(X!==W){j[0]=X;e:for(var ue=0,se=j.length,me=se>>>1;ue<me;){var Bt=2*(ue+1)-1,mn=j[Bt],gn=Bt+1,yn=j[gn];if(0>i(mn,X))gn<se&&0>i(yn,mn)?(j[ue]=yn,j[gn]=X,ue=gn):(j[ue]=mn,j[Bt]=X,ue=Bt);else if(gn<se&&0>i(yn,X))j[ue]=yn,j[gn]=X,ue=gn;else break e}}return W}function i(j,W){var X=j.sortIndex-W.sortIndex;return X!==0?X:j.id-W.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,u=o.now();t.unstable_now=function(){return o.now()-u}}var l=[],c=[],d=1,p=null,m=3,_=!1,x=!1,P=!1,C=typeof setTimeout=="function"?setTimeout:null,S=typeof clearTimeout=="function"?clearTimeout:null,w=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function E(j){for(var W=n(c);W!==null;){if(W.callback===null)r(c);else if(W.startTime<=j)r(c),W.sortIndex=W.expirationTime,e(l,W);else break;W=n(c)}}function D(j){if(P=!1,E(j),!x)if(n(l)!==null)x=!0,Q(M);else{var W=n(c);W!==null&&q(D,W.startTime-j)}}function M(j,W){x=!1,P&&(P=!1,S(v),v=-1),_=!0;var X=m;try{for(E(W),p=n(l);p!==null&&(!(p.expirationTime>W)||j&&!R());){var ue=p.callback;if(typeof ue=="function"){p.callback=null,m=p.priorityLevel;var se=ue(p.expirationTime<=W);W=t.unstable_now(),typeof se=="function"?p.callback=se:p===n(l)&&r(l),E(W)}else r(l);p=n(l)}if(p!==null)var me=!0;else{var Bt=n(c);Bt!==null&&q(D,Bt.startTime-W),me=!1}return me}finally{p=null,m=X,_=!1}}var V=!1,I=null,v=-1,T=5,A=-1;function R(){return!(t.unstable_now()-A<T)}function N(){if(I!==null){var j=t.unstable_now();A=j;var W=!0;try{W=I(!0,j)}finally{W?k():(V=!1,I=null)}}else V=!1}var k;if(typeof w=="function")k=function(){w(N)};else if(typeof MessageChannel<"u"){var pe=new MessageChannel,K=pe.port2;pe.port1.onmessage=N,k=function(){K.postMessage(null)}}else k=function(){C(N,0)};function Q(j){I=j,V||(V=!0,k())}function q(j,W){v=C(function(){j(t.unstable_now())},W)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(j){j.callback=null},t.unstable_continueExecution=function(){x||_||(x=!0,Q(M))},t.unstable_forceFrameRate=function(j){0>j||125<j?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<j?Math.floor(1e3/j):5},t.unstable_getCurrentPriorityLevel=function(){return m},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(j){switch(m){case 1:case 2:case 3:var W=3;break;default:W=m}var X=m;m=W;try{return j()}finally{m=X}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(j,W){switch(j){case 1:case 2:case 3:case 4:case 5:break;default:j=3}var X=m;m=j;try{return W()}finally{m=X}},t.unstable_scheduleCallback=function(j,W,X){var ue=t.unstable_now();switch(typeof X=="object"&&X!==null?(X=X.delay,X=typeof X=="number"&&0<X?ue+X:ue):X=ue,j){case 1:var se=-1;break;case 2:se=250;break;case 5:se=1073741823;break;case 4:se=1e4;break;default:se=5e3}return se=X+se,j={id:d++,callback:W,priorityLevel:j,startTime:X,expirationTime:se,sortIndex:-1},X>ue?(j.sortIndex=X,e(c,j),n(l)===null&&j===n(c)&&(P?(S(v),v=-1):P=!0,q(D,X-ue))):(j.sortIndex=se,e(l,j),x||_||(x=!0,Q(M))),j},t.unstable_shouldYield=R,t.unstable_wrapCallback=function(j){var W=m;return function(){var X=m;m=W;try{return j.apply(this,arguments)}finally{m=X}}}})(av);ov.exports=av;var mT=ov.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gT=U,Nt=mT;function B(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var lv=new Set,ro={};function Zr(t,e){Fi(t,e),Fi(t+"Capture",e)}function Fi(t,e){for(ro[t]=e,t=0;t<e.length;t++)lv.add(e[t])}var Cn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Kc=Object.prototype.hasOwnProperty,yT=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,um={},cm={};function vT(t){return Kc.call(cm,t)?!0:Kc.call(um,t)?!1:yT.test(t)?cm[t]=!0:(um[t]=!0,!1)}function _T(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function wT(t,e,n,r){if(e===null||typeof e>"u"||_T(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function mt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Ye={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ye[t]=new mt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ye[e]=new mt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ye[t]=new mt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ye[t]=new mt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ye[t]=new mt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ye[t]=new mt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ye[t]=new mt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ye[t]=new mt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ye[t]=new mt(t,5,!1,t.toLowerCase(),null,!1,!1)});var _d=/[\-:]([a-z])/g;function wd(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(_d,wd);Ye[e]=new mt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(_d,wd);Ye[e]=new mt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(_d,wd);Ye[e]=new mt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ye[t]=new mt(t,1,!1,t.toLowerCase(),null,!1,!1)});Ye.xlinkHref=new mt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ye[t]=new mt(t,1,!1,t.toLowerCase(),null,!0,!0)});function Ed(t,e,n,r){var i=Ye.hasOwnProperty(e)?Ye[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(wT(e,n,i,r)&&(n=null),r||i===null?vT(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var jn=gT.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,da=Symbol.for("react.element"),mi=Symbol.for("react.portal"),gi=Symbol.for("react.fragment"),Id=Symbol.for("react.strict_mode"),Gc=Symbol.for("react.profiler"),uv=Symbol.for("react.provider"),cv=Symbol.for("react.context"),Td=Symbol.for("react.forward_ref"),Qc=Symbol.for("react.suspense"),Yc=Symbol.for("react.suspense_list"),Sd=Symbol.for("react.memo"),Wn=Symbol.for("react.lazy"),hv=Symbol.for("react.offscreen"),hm=Symbol.iterator;function Ss(t){return t===null||typeof t!="object"?null:(t=hm&&t[hm]||t["@@iterator"],typeof t=="function"?t:null)}var Se=Object.assign,sc;function Ds(t){if(sc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);sc=e&&e[1]||""}return`
`+sc+t}var oc=!1;function ac(t,e){if(!t||oc)return"";oc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,u=s.length-1;1<=o&&0<=u&&i[o]!==s[u];)u--;for(;1<=o&&0<=u;o--,u--)if(i[o]!==s[u]){if(o!==1||u!==1)do if(o--,u--,0>u||i[o]!==s[u]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=u);break}}}finally{oc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Ds(t):""}function ET(t){switch(t.tag){case 5:return Ds(t.type);case 16:return Ds("Lazy");case 13:return Ds("Suspense");case 19:return Ds("SuspenseList");case 0:case 2:case 15:return t=ac(t.type,!1),t;case 11:return t=ac(t.type.render,!1),t;case 1:return t=ac(t.type,!0),t;default:return""}}function Xc(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case gi:return"Fragment";case mi:return"Portal";case Gc:return"Profiler";case Id:return"StrictMode";case Qc:return"Suspense";case Yc:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case cv:return(t.displayName||"Context")+".Consumer";case uv:return(t._context.displayName||"Context")+".Provider";case Td:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Sd:return e=t.displayName||null,e!==null?e:Xc(t.type)||"Memo";case Wn:e=t._payload,t=t._init;try{return Xc(t(e))}catch{}}return null}function IT(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Xc(e);case 8:return e===Id?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function mr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function dv(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function TT(t){var e=dv(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function fa(t){t._valueTracker||(t._valueTracker=TT(t))}function fv(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=dv(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function tl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Jc(t,e){var n=e.checked;return Se({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function dm(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=mr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function pv(t,e){e=e.checked,e!=null&&Ed(t,"checked",e,!1)}function Zc(t,e){pv(t,e);var n=mr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?eh(t,e.type,n):e.hasOwnProperty("defaultValue")&&eh(t,e.type,mr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function fm(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function eh(t,e,n){(e!=="number"||tl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Os=Array.isArray;function Ci(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+mr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function th(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(B(91));return Se({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function pm(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(B(92));if(Os(n)){if(1<n.length)throw Error(B(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:mr(n)}}function mv(t,e){var n=mr(e.value),r=mr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function mm(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function gv(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function nh(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?gv(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var pa,yv=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(pa=pa||document.createElement("div"),pa.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=pa.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function io(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var zs={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ST=["Webkit","ms","Moz","O"];Object.keys(zs).forEach(function(t){ST.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),zs[e]=zs[t]})});function vv(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||zs.hasOwnProperty(t)&&zs[t]?(""+e).trim():e+"px"}function _v(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=vv(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var xT=Se({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function rh(t,e){if(e){if(xT[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(B(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(B(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(B(61))}if(e.style!=null&&typeof e.style!="object")throw Error(B(62))}}function ih(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var sh=null;function xd(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var oh=null,Pi=null,Ni=null;function gm(t){if(t=Oo(t)){if(typeof oh!="function")throw Error(B(280));var e=t.stateNode;e&&(e=Yl(e),oh(t.stateNode,t.type,e))}}function wv(t){Pi?Ni?Ni.push(t):Ni=[t]:Pi=t}function Ev(){if(Pi){var t=Pi,e=Ni;if(Ni=Pi=null,gm(t),e)for(t=0;t<e.length;t++)gm(e[t])}}function Iv(t,e){return t(e)}function Tv(){}var lc=!1;function Sv(t,e,n){if(lc)return t(e,n);lc=!0;try{return Iv(t,e,n)}finally{lc=!1,(Pi!==null||Ni!==null)&&(Tv(),Ev())}}function so(t,e){var n=t.stateNode;if(n===null)return null;var r=Yl(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(B(231,e,typeof n));return n}var ah=!1;if(Cn)try{var xs={};Object.defineProperty(xs,"passive",{get:function(){ah=!0}}),window.addEventListener("test",xs,xs),window.removeEventListener("test",xs,xs)}catch{ah=!1}function AT(t,e,n,r,i,s,o,u,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(d){this.onError(d)}}var $s=!1,nl=null,rl=!1,lh=null,kT={onError:function(t){$s=!0,nl=t}};function RT(t,e,n,r,i,s,o,u,l){$s=!1,nl=null,AT.apply(kT,arguments)}function CT(t,e,n,r,i,s,o,u,l){if(RT.apply(this,arguments),$s){if($s){var c=nl;$s=!1,nl=null}else throw Error(B(198));rl||(rl=!0,lh=c)}}function ei(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function xv(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function ym(t){if(ei(t)!==t)throw Error(B(188))}function PT(t){var e=t.alternate;if(!e){if(e=ei(t),e===null)throw Error(B(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return ym(i),t;if(s===r)return ym(i),e;s=s.sibling}throw Error(B(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,u=i.child;u;){if(u===n){o=!0,n=i,r=s;break}if(u===r){o=!0,r=i,n=s;break}u=u.sibling}if(!o){for(u=s.child;u;){if(u===n){o=!0,n=s,r=i;break}if(u===r){o=!0,r=s,n=i;break}u=u.sibling}if(!o)throw Error(B(189))}}if(n.alternate!==r)throw Error(B(190))}if(n.tag!==3)throw Error(B(188));return n.stateNode.current===n?t:e}function Av(t){return t=PT(t),t!==null?kv(t):null}function kv(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=kv(t);if(e!==null)return e;t=t.sibling}return null}var Rv=Nt.unstable_scheduleCallback,vm=Nt.unstable_cancelCallback,NT=Nt.unstable_shouldYield,bT=Nt.unstable_requestPaint,be=Nt.unstable_now,DT=Nt.unstable_getCurrentPriorityLevel,Ad=Nt.unstable_ImmediatePriority,Cv=Nt.unstable_UserBlockingPriority,il=Nt.unstable_NormalPriority,OT=Nt.unstable_LowPriority,Pv=Nt.unstable_IdlePriority,ql=null,tn=null;function MT(t){if(tn&&typeof tn.onCommitFiberRoot=="function")try{tn.onCommitFiberRoot(ql,t,void 0,(t.current.flags&128)===128)}catch{}}var Kt=Math.clz32?Math.clz32:jT,VT=Math.log,LT=Math.LN2;function jT(t){return t>>>=0,t===0?32:31-(VT(t)/LT|0)|0}var ma=64,ga=4194304;function Ms(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function sl(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var u=o&~i;u!==0?r=Ms(u):(s&=o,s!==0&&(r=Ms(s)))}else o=n&~i,o!==0?r=Ms(o):s!==0&&(r=Ms(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Kt(e),i=1<<n,r|=t[n],e&=~i;return r}function FT(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function UT(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Kt(s),u=1<<o,l=i[o];l===-1?(!(u&n)||u&r)&&(i[o]=FT(u,e)):l<=e&&(t.expiredLanes|=u),s&=~u}}function uh(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Nv(){var t=ma;return ma<<=1,!(ma&4194240)&&(ma=64),t}function uc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function bo(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Kt(e),t[e]=n}function BT(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Kt(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function kd(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Kt(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var de=0;function bv(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Dv,Rd,Ov,Mv,Vv,ch=!1,ya=[],rr=null,ir=null,sr=null,oo=new Map,ao=new Map,qn=[],zT="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function _m(t,e){switch(t){case"focusin":case"focusout":rr=null;break;case"dragenter":case"dragleave":ir=null;break;case"mouseover":case"mouseout":sr=null;break;case"pointerover":case"pointerout":oo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ao.delete(e.pointerId)}}function As(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Oo(e),e!==null&&Rd(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function $T(t,e,n,r,i){switch(e){case"focusin":return rr=As(rr,t,e,n,r,i),!0;case"dragenter":return ir=As(ir,t,e,n,r,i),!0;case"mouseover":return sr=As(sr,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return oo.set(s,As(oo.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,ao.set(s,As(ao.get(s)||null,t,e,n,r,i)),!0}return!1}function Lv(t){var e=Nr(t.target);if(e!==null){var n=ei(e);if(n!==null){if(e=n.tag,e===13){if(e=xv(n),e!==null){t.blockedOn=e,Vv(t.priority,function(){Ov(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Va(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=hh(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);sh=r,n.target.dispatchEvent(r),sh=null}else return e=Oo(n),e!==null&&Rd(e),t.blockedOn=n,!1;e.shift()}return!0}function wm(t,e,n){Va(t)&&n.delete(e)}function WT(){ch=!1,rr!==null&&Va(rr)&&(rr=null),ir!==null&&Va(ir)&&(ir=null),sr!==null&&Va(sr)&&(sr=null),oo.forEach(wm),ao.forEach(wm)}function ks(t,e){t.blockedOn===e&&(t.blockedOn=null,ch||(ch=!0,Nt.unstable_scheduleCallback(Nt.unstable_NormalPriority,WT)))}function lo(t){function e(i){return ks(i,t)}if(0<ya.length){ks(ya[0],t);for(var n=1;n<ya.length;n++){var r=ya[n];r.blockedOn===t&&(r.blockedOn=null)}}for(rr!==null&&ks(rr,t),ir!==null&&ks(ir,t),sr!==null&&ks(sr,t),oo.forEach(e),ao.forEach(e),n=0;n<qn.length;n++)r=qn[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<qn.length&&(n=qn[0],n.blockedOn===null);)Lv(n),n.blockedOn===null&&qn.shift()}var bi=jn.ReactCurrentBatchConfig,ol=!0;function HT(t,e,n,r){var i=de,s=bi.transition;bi.transition=null;try{de=1,Cd(t,e,n,r)}finally{de=i,bi.transition=s}}function qT(t,e,n,r){var i=de,s=bi.transition;bi.transition=null;try{de=4,Cd(t,e,n,r)}finally{de=i,bi.transition=s}}function Cd(t,e,n,r){if(ol){var i=hh(t,e,n,r);if(i===null)_c(t,e,r,al,n),_m(t,r);else if($T(i,t,e,n,r))r.stopPropagation();else if(_m(t,r),e&4&&-1<zT.indexOf(t)){for(;i!==null;){var s=Oo(i);if(s!==null&&Dv(s),s=hh(t,e,n,r),s===null&&_c(t,e,r,al,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else _c(t,e,r,null,n)}}var al=null;function hh(t,e,n,r){if(al=null,t=xd(r),t=Nr(t),t!==null)if(e=ei(t),e===null)t=null;else if(n=e.tag,n===13){if(t=xv(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return al=t,null}function jv(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(DT()){case Ad:return 1;case Cv:return 4;case il:case OT:return 16;case Pv:return 536870912;default:return 16}default:return 16}}var Jn=null,Pd=null,La=null;function Fv(){if(La)return La;var t,e=Pd,n=e.length,r,i="value"in Jn?Jn.value:Jn.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return La=i.slice(t,1<r?1-r:void 0)}function ja(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function va(){return!0}function Em(){return!1}function Dt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var u in t)t.hasOwnProperty(u)&&(n=t[u],this[u]=n?n(s):s[u]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?va:Em,this.isPropagationStopped=Em,this}return Se(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=va)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=va)},persist:function(){},isPersistent:va}),e}var is={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Nd=Dt(is),Do=Se({},is,{view:0,detail:0}),KT=Dt(Do),cc,hc,Rs,Kl=Se({},Do,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:bd,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Rs&&(Rs&&t.type==="mousemove"?(cc=t.screenX-Rs.screenX,hc=t.screenY-Rs.screenY):hc=cc=0,Rs=t),cc)},movementY:function(t){return"movementY"in t?t.movementY:hc}}),Im=Dt(Kl),GT=Se({},Kl,{dataTransfer:0}),QT=Dt(GT),YT=Se({},Do,{relatedTarget:0}),dc=Dt(YT),XT=Se({},is,{animationName:0,elapsedTime:0,pseudoElement:0}),JT=Dt(XT),ZT=Se({},is,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),e1=Dt(ZT),t1=Se({},is,{data:0}),Tm=Dt(t1),n1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},r1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},i1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function s1(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=i1[t])?!!e[t]:!1}function bd(){return s1}var o1=Se({},Do,{key:function(t){if(t.key){var e=n1[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=ja(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?r1[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:bd,charCode:function(t){return t.type==="keypress"?ja(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ja(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),a1=Dt(o1),l1=Se({},Kl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Sm=Dt(l1),u1=Se({},Do,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:bd}),c1=Dt(u1),h1=Se({},is,{propertyName:0,elapsedTime:0,pseudoElement:0}),d1=Dt(h1),f1=Se({},Kl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),p1=Dt(f1),m1=[9,13,27,32],Dd=Cn&&"CompositionEvent"in window,Ws=null;Cn&&"documentMode"in document&&(Ws=document.documentMode);var g1=Cn&&"TextEvent"in window&&!Ws,Uv=Cn&&(!Dd||Ws&&8<Ws&&11>=Ws),xm=" ",Am=!1;function Bv(t,e){switch(t){case"keyup":return m1.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function zv(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var yi=!1;function y1(t,e){switch(t){case"compositionend":return zv(e);case"keypress":return e.which!==32?null:(Am=!0,xm);case"textInput":return t=e.data,t===xm&&Am?null:t;default:return null}}function v1(t,e){if(yi)return t==="compositionend"||!Dd&&Bv(t,e)?(t=Fv(),La=Pd=Jn=null,yi=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Uv&&e.locale!=="ko"?null:e.data;default:return null}}var _1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function km(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!_1[t.type]:e==="textarea"}function $v(t,e,n,r){wv(r),e=ll(e,"onChange"),0<e.length&&(n=new Nd("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Hs=null,uo=null;function w1(t){e_(t,0)}function Gl(t){var e=wi(t);if(fv(e))return t}function E1(t,e){if(t==="change")return e}var Wv=!1;if(Cn){var fc;if(Cn){var pc="oninput"in document;if(!pc){var Rm=document.createElement("div");Rm.setAttribute("oninput","return;"),pc=typeof Rm.oninput=="function"}fc=pc}else fc=!1;Wv=fc&&(!document.documentMode||9<document.documentMode)}function Cm(){Hs&&(Hs.detachEvent("onpropertychange",Hv),uo=Hs=null)}function Hv(t){if(t.propertyName==="value"&&Gl(uo)){var e=[];$v(e,uo,t,xd(t)),Sv(w1,e)}}function I1(t,e,n){t==="focusin"?(Cm(),Hs=e,uo=n,Hs.attachEvent("onpropertychange",Hv)):t==="focusout"&&Cm()}function T1(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Gl(uo)}function S1(t,e){if(t==="click")return Gl(e)}function x1(t,e){if(t==="input"||t==="change")return Gl(e)}function A1(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Qt=typeof Object.is=="function"?Object.is:A1;function co(t,e){if(Qt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Kc.call(e,i)||!Qt(t[i],e[i]))return!1}return!0}function Pm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Nm(t,e){var n=Pm(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Pm(n)}}function qv(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?qv(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Kv(){for(var t=window,e=tl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=tl(t.document)}return e}function Od(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function k1(t){var e=Kv(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&qv(n.ownerDocument.documentElement,n)){if(r!==null&&Od(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Nm(n,s);var o=Nm(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var R1=Cn&&"documentMode"in document&&11>=document.documentMode,vi=null,dh=null,qs=null,fh=!1;function bm(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;fh||vi==null||vi!==tl(r)||(r=vi,"selectionStart"in r&&Od(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),qs&&co(qs,r)||(qs=r,r=ll(dh,"onSelect"),0<r.length&&(e=new Nd("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=vi)))}function _a(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var _i={animationend:_a("Animation","AnimationEnd"),animationiteration:_a("Animation","AnimationIteration"),animationstart:_a("Animation","AnimationStart"),transitionend:_a("Transition","TransitionEnd")},mc={},Gv={};Cn&&(Gv=document.createElement("div").style,"AnimationEvent"in window||(delete _i.animationend.animation,delete _i.animationiteration.animation,delete _i.animationstart.animation),"TransitionEvent"in window||delete _i.transitionend.transition);function Ql(t){if(mc[t])return mc[t];if(!_i[t])return t;var e=_i[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Gv)return mc[t]=e[n];return t}var Qv=Ql("animationend"),Yv=Ql("animationiteration"),Xv=Ql("animationstart"),Jv=Ql("transitionend"),Zv=new Map,Dm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function wr(t,e){Zv.set(t,e),Zr(e,[t])}for(var gc=0;gc<Dm.length;gc++){var yc=Dm[gc],C1=yc.toLowerCase(),P1=yc[0].toUpperCase()+yc.slice(1);wr(C1,"on"+P1)}wr(Qv,"onAnimationEnd");wr(Yv,"onAnimationIteration");wr(Xv,"onAnimationStart");wr("dblclick","onDoubleClick");wr("focusin","onFocus");wr("focusout","onBlur");wr(Jv,"onTransitionEnd");Fi("onMouseEnter",["mouseout","mouseover"]);Fi("onMouseLeave",["mouseout","mouseover"]);Fi("onPointerEnter",["pointerout","pointerover"]);Fi("onPointerLeave",["pointerout","pointerover"]);Zr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Zr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Zr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Zr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Zr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Zr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Vs="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),N1=new Set("cancel close invalid load scroll toggle".split(" ").concat(Vs));function Om(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,CT(r,e,void 0,t),t.currentTarget=null}function e_(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var u=r[o],l=u.instance,c=u.currentTarget;if(u=u.listener,l!==s&&i.isPropagationStopped())break e;Om(i,u,c),s=l}else for(o=0;o<r.length;o++){if(u=r[o],l=u.instance,c=u.currentTarget,u=u.listener,l!==s&&i.isPropagationStopped())break e;Om(i,u,c),s=l}}}if(rl)throw t=lh,rl=!1,lh=null,t}function _e(t,e){var n=e[vh];n===void 0&&(n=e[vh]=new Set);var r=t+"__bubble";n.has(r)||(t_(e,t,2,!1),n.add(r))}function vc(t,e,n){var r=0;e&&(r|=4),t_(n,t,r,e)}var wa="_reactListening"+Math.random().toString(36).slice(2);function ho(t){if(!t[wa]){t[wa]=!0,lv.forEach(function(n){n!=="selectionchange"&&(N1.has(n)||vc(n,!1,t),vc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[wa]||(e[wa]=!0,vc("selectionchange",!1,e))}}function t_(t,e,n,r){switch(jv(e)){case 1:var i=HT;break;case 4:i=qT;break;default:i=Cd}n=i.bind(null,e,n,t),i=void 0,!ah||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function _c(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var u=r.stateNode.containerInfo;if(u===i||u.nodeType===8&&u.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;u!==null;){if(o=Nr(u),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}u=u.parentNode}}r=r.return}Sv(function(){var c=s,d=xd(n),p=[];e:{var m=Zv.get(t);if(m!==void 0){var _=Nd,x=t;switch(t){case"keypress":if(ja(n)===0)break e;case"keydown":case"keyup":_=a1;break;case"focusin":x="focus",_=dc;break;case"focusout":x="blur",_=dc;break;case"beforeblur":case"afterblur":_=dc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":_=Im;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":_=QT;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":_=c1;break;case Qv:case Yv:case Xv:_=JT;break;case Jv:_=d1;break;case"scroll":_=KT;break;case"wheel":_=p1;break;case"copy":case"cut":case"paste":_=e1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":_=Sm}var P=(e&4)!==0,C=!P&&t==="scroll",S=P?m!==null?m+"Capture":null:m;P=[];for(var w=c,E;w!==null;){E=w;var D=E.stateNode;if(E.tag===5&&D!==null&&(E=D,S!==null&&(D=so(w,S),D!=null&&P.push(fo(w,D,E)))),C)break;w=w.return}0<P.length&&(m=new _(m,x,null,n,d),p.push({event:m,listeners:P}))}}if(!(e&7)){e:{if(m=t==="mouseover"||t==="pointerover",_=t==="mouseout"||t==="pointerout",m&&n!==sh&&(x=n.relatedTarget||n.fromElement)&&(Nr(x)||x[Pn]))break e;if((_||m)&&(m=d.window===d?d:(m=d.ownerDocument)?m.defaultView||m.parentWindow:window,_?(x=n.relatedTarget||n.toElement,_=c,x=x?Nr(x):null,x!==null&&(C=ei(x),x!==C||x.tag!==5&&x.tag!==6)&&(x=null)):(_=null,x=c),_!==x)){if(P=Im,D="onMouseLeave",S="onMouseEnter",w="mouse",(t==="pointerout"||t==="pointerover")&&(P=Sm,D="onPointerLeave",S="onPointerEnter",w="pointer"),C=_==null?m:wi(_),E=x==null?m:wi(x),m=new P(D,w+"leave",_,n,d),m.target=C,m.relatedTarget=E,D=null,Nr(d)===c&&(P=new P(S,w+"enter",x,n,d),P.target=E,P.relatedTarget=C,D=P),C=D,_&&x)t:{for(P=_,S=x,w=0,E=P;E;E=hi(E))w++;for(E=0,D=S;D;D=hi(D))E++;for(;0<w-E;)P=hi(P),w--;for(;0<E-w;)S=hi(S),E--;for(;w--;){if(P===S||S!==null&&P===S.alternate)break t;P=hi(P),S=hi(S)}P=null}else P=null;_!==null&&Mm(p,m,_,P,!1),x!==null&&C!==null&&Mm(p,C,x,P,!0)}}e:{if(m=c?wi(c):window,_=m.nodeName&&m.nodeName.toLowerCase(),_==="select"||_==="input"&&m.type==="file")var M=E1;else if(km(m))if(Wv)M=x1;else{M=T1;var V=I1}else(_=m.nodeName)&&_.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(M=S1);if(M&&(M=M(t,c))){$v(p,M,n,d);break e}V&&V(t,m,c),t==="focusout"&&(V=m._wrapperState)&&V.controlled&&m.type==="number"&&eh(m,"number",m.value)}switch(V=c?wi(c):window,t){case"focusin":(km(V)||V.contentEditable==="true")&&(vi=V,dh=c,qs=null);break;case"focusout":qs=dh=vi=null;break;case"mousedown":fh=!0;break;case"contextmenu":case"mouseup":case"dragend":fh=!1,bm(p,n,d);break;case"selectionchange":if(R1)break;case"keydown":case"keyup":bm(p,n,d)}var I;if(Dd)e:{switch(t){case"compositionstart":var v="onCompositionStart";break e;case"compositionend":v="onCompositionEnd";break e;case"compositionupdate":v="onCompositionUpdate";break e}v=void 0}else yi?Bv(t,n)&&(v="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(v="onCompositionStart");v&&(Uv&&n.locale!=="ko"&&(yi||v!=="onCompositionStart"?v==="onCompositionEnd"&&yi&&(I=Fv()):(Jn=d,Pd="value"in Jn?Jn.value:Jn.textContent,yi=!0)),V=ll(c,v),0<V.length&&(v=new Tm(v,t,null,n,d),p.push({event:v,listeners:V}),I?v.data=I:(I=zv(n),I!==null&&(v.data=I)))),(I=g1?y1(t,n):v1(t,n))&&(c=ll(c,"onBeforeInput"),0<c.length&&(d=new Tm("onBeforeInput","beforeinput",null,n,d),p.push({event:d,listeners:c}),d.data=I))}e_(p,e)})}function fo(t,e,n){return{instance:t,listener:e,currentTarget:n}}function ll(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=so(t,n),s!=null&&r.unshift(fo(t,s,i)),s=so(t,e),s!=null&&r.push(fo(t,s,i))),t=t.return}return r}function hi(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Mm(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var u=n,l=u.alternate,c=u.stateNode;if(l!==null&&l===r)break;u.tag===5&&c!==null&&(u=c,i?(l=so(n,s),l!=null&&o.unshift(fo(n,l,u))):i||(l=so(n,s),l!=null&&o.push(fo(n,l,u)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var b1=/\r\n?/g,D1=/\u0000|\uFFFD/g;function Vm(t){return(typeof t=="string"?t:""+t).replace(b1,`
`).replace(D1,"")}function Ea(t,e,n){if(e=Vm(e),Vm(t)!==e&&n)throw Error(B(425))}function ul(){}var ph=null,mh=null;function gh(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var yh=typeof setTimeout=="function"?setTimeout:void 0,O1=typeof clearTimeout=="function"?clearTimeout:void 0,Lm=typeof Promise=="function"?Promise:void 0,M1=typeof queueMicrotask=="function"?queueMicrotask:typeof Lm<"u"?function(t){return Lm.resolve(null).then(t).catch(V1)}:yh;function V1(t){setTimeout(function(){throw t})}function wc(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),lo(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);lo(e)}function or(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function jm(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var ss=Math.random().toString(36).slice(2),en="__reactFiber$"+ss,po="__reactProps$"+ss,Pn="__reactContainer$"+ss,vh="__reactEvents$"+ss,L1="__reactListeners$"+ss,j1="__reactHandles$"+ss;function Nr(t){var e=t[en];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Pn]||n[en]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=jm(t);t!==null;){if(n=t[en])return n;t=jm(t)}return e}t=n,n=t.parentNode}return null}function Oo(t){return t=t[en]||t[Pn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function wi(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(B(33))}function Yl(t){return t[po]||null}var _h=[],Ei=-1;function Er(t){return{current:t}}function we(t){0>Ei||(t.current=_h[Ei],_h[Ei]=null,Ei--)}function ye(t,e){Ei++,_h[Ei]=t.current,t.current=e}var gr={},at=Er(gr),wt=Er(!1),Br=gr;function Ui(t,e){var n=t.type.contextTypes;if(!n)return gr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Et(t){return t=t.childContextTypes,t!=null}function cl(){we(wt),we(at)}function Fm(t,e,n){if(at.current!==gr)throw Error(B(168));ye(at,e),ye(wt,n)}function n_(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(B(108,IT(t)||"Unknown",i));return Se({},n,r)}function hl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||gr,Br=at.current,ye(at,t),ye(wt,wt.current),!0}function Um(t,e,n){var r=t.stateNode;if(!r)throw Error(B(169));n?(t=n_(t,e,Br),r.__reactInternalMemoizedMergedChildContext=t,we(wt),we(at),ye(at,t)):we(wt),ye(wt,n)}var En=null,Xl=!1,Ec=!1;function r_(t){En===null?En=[t]:En.push(t)}function F1(t){Xl=!0,r_(t)}function Ir(){if(!Ec&&En!==null){Ec=!0;var t=0,e=de;try{var n=En;for(de=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}En=null,Xl=!1}catch(i){throw En!==null&&(En=En.slice(t+1)),Rv(Ad,Ir),i}finally{de=e,Ec=!1}}return null}var Ii=[],Ti=0,dl=null,fl=0,Ot=[],Mt=0,zr=null,In=1,Tn="";function Rr(t,e){Ii[Ti++]=fl,Ii[Ti++]=dl,dl=t,fl=e}function i_(t,e,n){Ot[Mt++]=In,Ot[Mt++]=Tn,Ot[Mt++]=zr,zr=t;var r=In;t=Tn;var i=32-Kt(r)-1;r&=~(1<<i),n+=1;var s=32-Kt(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,In=1<<32-Kt(e)+i|n<<i|r,Tn=s+t}else In=1<<s|n<<i|r,Tn=t}function Md(t){t.return!==null&&(Rr(t,1),i_(t,1,0))}function Vd(t){for(;t===dl;)dl=Ii[--Ti],Ii[Ti]=null,fl=Ii[--Ti],Ii[Ti]=null;for(;t===zr;)zr=Ot[--Mt],Ot[Mt]=null,Tn=Ot[--Mt],Ot[Mt]=null,In=Ot[--Mt],Ot[Mt]=null}var Ct=null,kt=null,Ee=!1,qt=null;function s_(t,e){var n=Vt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Bm(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Ct=t,kt=or(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Ct=t,kt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=zr!==null?{id:In,overflow:Tn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Vt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Ct=t,kt=null,!0):!1;default:return!1}}function wh(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Eh(t){if(Ee){var e=kt;if(e){var n=e;if(!Bm(t,e)){if(wh(t))throw Error(B(418));e=or(n.nextSibling);var r=Ct;e&&Bm(t,e)?s_(r,n):(t.flags=t.flags&-4097|2,Ee=!1,Ct=t)}}else{if(wh(t))throw Error(B(418));t.flags=t.flags&-4097|2,Ee=!1,Ct=t}}}function zm(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Ct=t}function Ia(t){if(t!==Ct)return!1;if(!Ee)return zm(t),Ee=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!gh(t.type,t.memoizedProps)),e&&(e=kt)){if(wh(t))throw o_(),Error(B(418));for(;e;)s_(t,e),e=or(e.nextSibling)}if(zm(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(B(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){kt=or(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}kt=null}}else kt=Ct?or(t.stateNode.nextSibling):null;return!0}function o_(){for(var t=kt;t;)t=or(t.nextSibling)}function Bi(){kt=Ct=null,Ee=!1}function Ld(t){qt===null?qt=[t]:qt.push(t)}var U1=jn.ReactCurrentBatchConfig;function Cs(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(B(309));var r=n.stateNode}if(!r)throw Error(B(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var u=i.refs;o===null?delete u[s]:u[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(B(284));if(!n._owner)throw Error(B(290,t))}return t}function Ta(t,e){throw t=Object.prototype.toString.call(e),Error(B(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function $m(t){var e=t._init;return e(t._payload)}function a_(t){function e(S,w){if(t){var E=S.deletions;E===null?(S.deletions=[w],S.flags|=16):E.push(w)}}function n(S,w){if(!t)return null;for(;w!==null;)e(S,w),w=w.sibling;return null}function r(S,w){for(S=new Map;w!==null;)w.key!==null?S.set(w.key,w):S.set(w.index,w),w=w.sibling;return S}function i(S,w){return S=cr(S,w),S.index=0,S.sibling=null,S}function s(S,w,E){return S.index=E,t?(E=S.alternate,E!==null?(E=E.index,E<w?(S.flags|=2,w):E):(S.flags|=2,w)):(S.flags|=1048576,w)}function o(S){return t&&S.alternate===null&&(S.flags|=2),S}function u(S,w,E,D){return w===null||w.tag!==6?(w=Rc(E,S.mode,D),w.return=S,w):(w=i(w,E),w.return=S,w)}function l(S,w,E,D){var M=E.type;return M===gi?d(S,w,E.props.children,D,E.key):w!==null&&(w.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===Wn&&$m(M)===w.type)?(D=i(w,E.props),D.ref=Cs(S,w,E),D.return=S,D):(D=Ha(E.type,E.key,E.props,null,S.mode,D),D.ref=Cs(S,w,E),D.return=S,D)}function c(S,w,E,D){return w===null||w.tag!==4||w.stateNode.containerInfo!==E.containerInfo||w.stateNode.implementation!==E.implementation?(w=Cc(E,S.mode,D),w.return=S,w):(w=i(w,E.children||[]),w.return=S,w)}function d(S,w,E,D,M){return w===null||w.tag!==7?(w=Lr(E,S.mode,D,M),w.return=S,w):(w=i(w,E),w.return=S,w)}function p(S,w,E){if(typeof w=="string"&&w!==""||typeof w=="number")return w=Rc(""+w,S.mode,E),w.return=S,w;if(typeof w=="object"&&w!==null){switch(w.$$typeof){case da:return E=Ha(w.type,w.key,w.props,null,S.mode,E),E.ref=Cs(S,null,w),E.return=S,E;case mi:return w=Cc(w,S.mode,E),w.return=S,w;case Wn:var D=w._init;return p(S,D(w._payload),E)}if(Os(w)||Ss(w))return w=Lr(w,S.mode,E,null),w.return=S,w;Ta(S,w)}return null}function m(S,w,E,D){var M=w!==null?w.key:null;if(typeof E=="string"&&E!==""||typeof E=="number")return M!==null?null:u(S,w,""+E,D);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case da:return E.key===M?l(S,w,E,D):null;case mi:return E.key===M?c(S,w,E,D):null;case Wn:return M=E._init,m(S,w,M(E._payload),D)}if(Os(E)||Ss(E))return M!==null?null:d(S,w,E,D,null);Ta(S,E)}return null}function _(S,w,E,D,M){if(typeof D=="string"&&D!==""||typeof D=="number")return S=S.get(E)||null,u(w,S,""+D,M);if(typeof D=="object"&&D!==null){switch(D.$$typeof){case da:return S=S.get(D.key===null?E:D.key)||null,l(w,S,D,M);case mi:return S=S.get(D.key===null?E:D.key)||null,c(w,S,D,M);case Wn:var V=D._init;return _(S,w,E,V(D._payload),M)}if(Os(D)||Ss(D))return S=S.get(E)||null,d(w,S,D,M,null);Ta(w,D)}return null}function x(S,w,E,D){for(var M=null,V=null,I=w,v=w=0,T=null;I!==null&&v<E.length;v++){I.index>v?(T=I,I=null):T=I.sibling;var A=m(S,I,E[v],D);if(A===null){I===null&&(I=T);break}t&&I&&A.alternate===null&&e(S,I),w=s(A,w,v),V===null?M=A:V.sibling=A,V=A,I=T}if(v===E.length)return n(S,I),Ee&&Rr(S,v),M;if(I===null){for(;v<E.length;v++)I=p(S,E[v],D),I!==null&&(w=s(I,w,v),V===null?M=I:V.sibling=I,V=I);return Ee&&Rr(S,v),M}for(I=r(S,I);v<E.length;v++)T=_(I,S,v,E[v],D),T!==null&&(t&&T.alternate!==null&&I.delete(T.key===null?v:T.key),w=s(T,w,v),V===null?M=T:V.sibling=T,V=T);return t&&I.forEach(function(R){return e(S,R)}),Ee&&Rr(S,v),M}function P(S,w,E,D){var M=Ss(E);if(typeof M!="function")throw Error(B(150));if(E=M.call(E),E==null)throw Error(B(151));for(var V=M=null,I=w,v=w=0,T=null,A=E.next();I!==null&&!A.done;v++,A=E.next()){I.index>v?(T=I,I=null):T=I.sibling;var R=m(S,I,A.value,D);if(R===null){I===null&&(I=T);break}t&&I&&R.alternate===null&&e(S,I),w=s(R,w,v),V===null?M=R:V.sibling=R,V=R,I=T}if(A.done)return n(S,I),Ee&&Rr(S,v),M;if(I===null){for(;!A.done;v++,A=E.next())A=p(S,A.value,D),A!==null&&(w=s(A,w,v),V===null?M=A:V.sibling=A,V=A);return Ee&&Rr(S,v),M}for(I=r(S,I);!A.done;v++,A=E.next())A=_(I,S,v,A.value,D),A!==null&&(t&&A.alternate!==null&&I.delete(A.key===null?v:A.key),w=s(A,w,v),V===null?M=A:V.sibling=A,V=A);return t&&I.forEach(function(N){return e(S,N)}),Ee&&Rr(S,v),M}function C(S,w,E,D){if(typeof E=="object"&&E!==null&&E.type===gi&&E.key===null&&(E=E.props.children),typeof E=="object"&&E!==null){switch(E.$$typeof){case da:e:{for(var M=E.key,V=w;V!==null;){if(V.key===M){if(M=E.type,M===gi){if(V.tag===7){n(S,V.sibling),w=i(V,E.props.children),w.return=S,S=w;break e}}else if(V.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===Wn&&$m(M)===V.type){n(S,V.sibling),w=i(V,E.props),w.ref=Cs(S,V,E),w.return=S,S=w;break e}n(S,V);break}else e(S,V);V=V.sibling}E.type===gi?(w=Lr(E.props.children,S.mode,D,E.key),w.return=S,S=w):(D=Ha(E.type,E.key,E.props,null,S.mode,D),D.ref=Cs(S,w,E),D.return=S,S=D)}return o(S);case mi:e:{for(V=E.key;w!==null;){if(w.key===V)if(w.tag===4&&w.stateNode.containerInfo===E.containerInfo&&w.stateNode.implementation===E.implementation){n(S,w.sibling),w=i(w,E.children||[]),w.return=S,S=w;break e}else{n(S,w);break}else e(S,w);w=w.sibling}w=Cc(E,S.mode,D),w.return=S,S=w}return o(S);case Wn:return V=E._init,C(S,w,V(E._payload),D)}if(Os(E))return x(S,w,E,D);if(Ss(E))return P(S,w,E,D);Ta(S,E)}return typeof E=="string"&&E!==""||typeof E=="number"?(E=""+E,w!==null&&w.tag===6?(n(S,w.sibling),w=i(w,E),w.return=S,S=w):(n(S,w),w=Rc(E,S.mode,D),w.return=S,S=w),o(S)):n(S,w)}return C}var zi=a_(!0),l_=a_(!1),pl=Er(null),ml=null,Si=null,jd=null;function Fd(){jd=Si=ml=null}function Ud(t){var e=pl.current;we(pl),t._currentValue=e}function Ih(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Di(t,e){ml=t,jd=Si=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(_t=!0),t.firstContext=null)}function Ft(t){var e=t._currentValue;if(jd!==t)if(t={context:t,memoizedValue:e,next:null},Si===null){if(ml===null)throw Error(B(308));Si=t,ml.dependencies={lanes:0,firstContext:t}}else Si=Si.next=t;return e}var br=null;function Bd(t){br===null?br=[t]:br.push(t)}function u_(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Bd(e)):(n.next=i.next,i.next=n),e.interleaved=n,Nn(t,r)}function Nn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Hn=!1;function zd(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function c_(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function kn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function ar(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,le&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Nn(t,n)}return i=r.interleaved,i===null?(e.next=e,Bd(r)):(e.next=i.next,i.next=e),r.interleaved=e,Nn(t,n)}function Fa(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,kd(t,n)}}function Wm(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function gl(t,e,n,r){var i=t.updateQueue;Hn=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,u=i.shared.pending;if(u!==null){i.shared.pending=null;var l=u,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var d=t.alternate;d!==null&&(d=d.updateQueue,u=d.lastBaseUpdate,u!==o&&(u===null?d.firstBaseUpdate=c:u.next=c,d.lastBaseUpdate=l))}if(s!==null){var p=i.baseState;o=0,d=c=l=null,u=s;do{var m=u.lane,_=u.eventTime;if((r&m)===m){d!==null&&(d=d.next={eventTime:_,lane:0,tag:u.tag,payload:u.payload,callback:u.callback,next:null});e:{var x=t,P=u;switch(m=e,_=n,P.tag){case 1:if(x=P.payload,typeof x=="function"){p=x.call(_,p,m);break e}p=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=P.payload,m=typeof x=="function"?x.call(_,p,m):x,m==null)break e;p=Se({},p,m);break e;case 2:Hn=!0}}u.callback!==null&&u.lane!==0&&(t.flags|=64,m=i.effects,m===null?i.effects=[u]:m.push(u))}else _={eventTime:_,lane:m,tag:u.tag,payload:u.payload,callback:u.callback,next:null},d===null?(c=d=_,l=p):d=d.next=_,o|=m;if(u=u.next,u===null){if(u=i.shared.pending,u===null)break;m=u,u=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(!0);if(d===null&&(l=p),i.baseState=l,i.firstBaseUpdate=c,i.lastBaseUpdate=d,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Wr|=o,t.lanes=o,t.memoizedState=p}}function Hm(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(B(191,i));i.call(r)}}}var Mo={},nn=Er(Mo),mo=Er(Mo),go=Er(Mo);function Dr(t){if(t===Mo)throw Error(B(174));return t}function $d(t,e){switch(ye(go,e),ye(mo,t),ye(nn,Mo),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:nh(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=nh(e,t)}we(nn),ye(nn,e)}function $i(){we(nn),we(mo),we(go)}function h_(t){Dr(go.current);var e=Dr(nn.current),n=nh(e,t.type);e!==n&&(ye(mo,t),ye(nn,n))}function Wd(t){mo.current===t&&(we(nn),we(mo))}var Ie=Er(0);function yl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Ic=[];function Hd(){for(var t=0;t<Ic.length;t++)Ic[t]._workInProgressVersionPrimary=null;Ic.length=0}var Ua=jn.ReactCurrentDispatcher,Tc=jn.ReactCurrentBatchConfig,$r=0,Te=null,Me=null,Be=null,vl=!1,Ks=!1,yo=0,B1=0;function tt(){throw Error(B(321))}function qd(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Qt(t[n],e[n]))return!1;return!0}function Kd(t,e,n,r,i,s){if($r=s,Te=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Ua.current=t===null||t.memoizedState===null?H1:q1,t=n(r,i),Ks){s=0;do{if(Ks=!1,yo=0,25<=s)throw Error(B(301));s+=1,Be=Me=null,e.updateQueue=null,Ua.current=K1,t=n(r,i)}while(Ks)}if(Ua.current=_l,e=Me!==null&&Me.next!==null,$r=0,Be=Me=Te=null,vl=!1,e)throw Error(B(300));return t}function Gd(){var t=yo!==0;return yo=0,t}function Zt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Be===null?Te.memoizedState=Be=t:Be=Be.next=t,Be}function Ut(){if(Me===null){var t=Te.alternate;t=t!==null?t.memoizedState:null}else t=Me.next;var e=Be===null?Te.memoizedState:Be.next;if(e!==null)Be=e,Me=t;else{if(t===null)throw Error(B(310));Me=t,t={memoizedState:Me.memoizedState,baseState:Me.baseState,baseQueue:Me.baseQueue,queue:Me.queue,next:null},Be===null?Te.memoizedState=Be=t:Be=Be.next=t}return Be}function vo(t,e){return typeof e=="function"?e(t):e}function Sc(t){var e=Ut(),n=e.queue;if(n===null)throw Error(B(311));n.lastRenderedReducer=t;var r=Me,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var u=o=null,l=null,c=s;do{var d=c.lane;if(($r&d)===d)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var p={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(u=l=p,o=r):l=l.next=p,Te.lanes|=d,Wr|=d}c=c.next}while(c!==null&&c!==s);l===null?o=r:l.next=u,Qt(r,e.memoizedState)||(_t=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,Te.lanes|=s,Wr|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function xc(t){var e=Ut(),n=e.queue;if(n===null)throw Error(B(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);Qt(s,e.memoizedState)||(_t=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function d_(){}function f_(t,e){var n=Te,r=Ut(),i=e(),s=!Qt(r.memoizedState,i);if(s&&(r.memoizedState=i,_t=!0),r=r.queue,Qd(g_.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Be!==null&&Be.memoizedState.tag&1){if(n.flags|=2048,_o(9,m_.bind(null,n,r,i,e),void 0,null),ze===null)throw Error(B(349));$r&30||p_(n,e,i)}return i}function p_(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Te.updateQueue,e===null?(e={lastEffect:null,stores:null},Te.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function m_(t,e,n,r){e.value=n,e.getSnapshot=r,y_(e)&&v_(t)}function g_(t,e,n){return n(function(){y_(e)&&v_(t)})}function y_(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Qt(t,n)}catch{return!0}}function v_(t){var e=Nn(t,1);e!==null&&Gt(e,t,1,-1)}function qm(t){var e=Zt();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:vo,lastRenderedState:t},e.queue=t,t=t.dispatch=W1.bind(null,Te,t),[e.memoizedState,t]}function _o(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Te.updateQueue,e===null?(e={lastEffect:null,stores:null},Te.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function __(){return Ut().memoizedState}function Ba(t,e,n,r){var i=Zt();Te.flags|=t,i.memoizedState=_o(1|e,n,void 0,r===void 0?null:r)}function Jl(t,e,n,r){var i=Ut();r=r===void 0?null:r;var s=void 0;if(Me!==null){var o=Me.memoizedState;if(s=o.destroy,r!==null&&qd(r,o.deps)){i.memoizedState=_o(e,n,s,r);return}}Te.flags|=t,i.memoizedState=_o(1|e,n,s,r)}function Km(t,e){return Ba(8390656,8,t,e)}function Qd(t,e){return Jl(2048,8,t,e)}function w_(t,e){return Jl(4,2,t,e)}function E_(t,e){return Jl(4,4,t,e)}function I_(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function T_(t,e,n){return n=n!=null?n.concat([t]):null,Jl(4,4,I_.bind(null,e,t),n)}function Yd(){}function S_(t,e){var n=Ut();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&qd(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function x_(t,e){var n=Ut();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&qd(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function A_(t,e,n){return $r&21?(Qt(n,e)||(n=Nv(),Te.lanes|=n,Wr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,_t=!0),t.memoizedState=n)}function z1(t,e){var n=de;de=n!==0&&4>n?n:4,t(!0);var r=Tc.transition;Tc.transition={};try{t(!1),e()}finally{de=n,Tc.transition=r}}function k_(){return Ut().memoizedState}function $1(t,e,n){var r=ur(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},R_(t))C_(e,n);else if(n=u_(t,e,n,r),n!==null){var i=ft();Gt(n,t,r,i),P_(n,e,r)}}function W1(t,e,n){var r=ur(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(R_(t))C_(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,u=s(o,n);if(i.hasEagerState=!0,i.eagerState=u,Qt(u,o)){var l=e.interleaved;l===null?(i.next=i,Bd(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=u_(t,e,i,r),n!==null&&(i=ft(),Gt(n,t,r,i),P_(n,e,r))}}function R_(t){var e=t.alternate;return t===Te||e!==null&&e===Te}function C_(t,e){Ks=vl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function P_(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,kd(t,n)}}var _l={readContext:Ft,useCallback:tt,useContext:tt,useEffect:tt,useImperativeHandle:tt,useInsertionEffect:tt,useLayoutEffect:tt,useMemo:tt,useReducer:tt,useRef:tt,useState:tt,useDebugValue:tt,useDeferredValue:tt,useTransition:tt,useMutableSource:tt,useSyncExternalStore:tt,useId:tt,unstable_isNewReconciler:!1},H1={readContext:Ft,useCallback:function(t,e){return Zt().memoizedState=[t,e===void 0?null:e],t},useContext:Ft,useEffect:Km,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Ba(4194308,4,I_.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Ba(4194308,4,t,e)},useInsertionEffect:function(t,e){return Ba(4,2,t,e)},useMemo:function(t,e){var n=Zt();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Zt();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=$1.bind(null,Te,t),[r.memoizedState,t]},useRef:function(t){var e=Zt();return t={current:t},e.memoizedState=t},useState:qm,useDebugValue:Yd,useDeferredValue:function(t){return Zt().memoizedState=t},useTransition:function(){var t=qm(!1),e=t[0];return t=z1.bind(null,t[1]),Zt().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Te,i=Zt();if(Ee){if(n===void 0)throw Error(B(407));n=n()}else{if(n=e(),ze===null)throw Error(B(349));$r&30||p_(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Km(g_.bind(null,r,s,t),[t]),r.flags|=2048,_o(9,m_.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=Zt(),e=ze.identifierPrefix;if(Ee){var n=Tn,r=In;n=(r&~(1<<32-Kt(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=yo++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=B1++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},q1={readContext:Ft,useCallback:S_,useContext:Ft,useEffect:Qd,useImperativeHandle:T_,useInsertionEffect:w_,useLayoutEffect:E_,useMemo:x_,useReducer:Sc,useRef:__,useState:function(){return Sc(vo)},useDebugValue:Yd,useDeferredValue:function(t){var e=Ut();return A_(e,Me.memoizedState,t)},useTransition:function(){var t=Sc(vo)[0],e=Ut().memoizedState;return[t,e]},useMutableSource:d_,useSyncExternalStore:f_,useId:k_,unstable_isNewReconciler:!1},K1={readContext:Ft,useCallback:S_,useContext:Ft,useEffect:Qd,useImperativeHandle:T_,useInsertionEffect:w_,useLayoutEffect:E_,useMemo:x_,useReducer:xc,useRef:__,useState:function(){return xc(vo)},useDebugValue:Yd,useDeferredValue:function(t){var e=Ut();return Me===null?e.memoizedState=t:A_(e,Me.memoizedState,t)},useTransition:function(){var t=xc(vo)[0],e=Ut().memoizedState;return[t,e]},useMutableSource:d_,useSyncExternalStore:f_,useId:k_,unstable_isNewReconciler:!1};function Wt(t,e){if(t&&t.defaultProps){e=Se({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Th(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Se({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Zl={isMounted:function(t){return(t=t._reactInternals)?ei(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=ft(),i=ur(t),s=kn(r,i);s.payload=e,n!=null&&(s.callback=n),e=ar(t,s,i),e!==null&&(Gt(e,t,i,r),Fa(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=ft(),i=ur(t),s=kn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=ar(t,s,i),e!==null&&(Gt(e,t,i,r),Fa(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=ft(),r=ur(t),i=kn(n,r);i.tag=2,e!=null&&(i.callback=e),e=ar(t,i,r),e!==null&&(Gt(e,t,r,n),Fa(e,t,r))}};function Gm(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!co(n,r)||!co(i,s):!0}function N_(t,e,n){var r=!1,i=gr,s=e.contextType;return typeof s=="object"&&s!==null?s=Ft(s):(i=Et(e)?Br:at.current,r=e.contextTypes,s=(r=r!=null)?Ui(t,i):gr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Zl,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Qm(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Zl.enqueueReplaceState(e,e.state,null)}function Sh(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},zd(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Ft(s):(s=Et(e)?Br:at.current,i.context=Ui(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Th(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Zl.enqueueReplaceState(i,i.state,null),gl(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Wi(t,e){try{var n="",r=e;do n+=ET(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Ac(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function xh(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var G1=typeof WeakMap=="function"?WeakMap:Map;function b_(t,e,n){n=kn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){El||(El=!0,Mh=r),xh(t,e)},n}function D_(t,e,n){n=kn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){xh(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){xh(t,e),typeof r!="function"&&(lr===null?lr=new Set([this]):lr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Ym(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new G1;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=lS.bind(null,t,e,n),e.then(t,t))}function Xm(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Jm(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=kn(-1,1),e.tag=2,ar(n,e,1))),n.lanes|=1),t)}var Q1=jn.ReactCurrentOwner,_t=!1;function dt(t,e,n,r){e.child=t===null?l_(e,null,n,r):zi(e,t.child,n,r)}function Zm(t,e,n,r,i){n=n.render;var s=e.ref;return Di(e,i),r=Kd(t,e,n,r,s,i),n=Gd(),t!==null&&!_t?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,bn(t,e,i)):(Ee&&n&&Md(e),e.flags|=1,dt(t,e,r,i),e.child)}function eg(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!sf(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,O_(t,e,s,r,i)):(t=Ha(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:co,n(o,r)&&t.ref===e.ref)return bn(t,e,i)}return e.flags|=1,t=cr(s,r),t.ref=e.ref,t.return=e,e.child=t}function O_(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(co(s,r)&&t.ref===e.ref)if(_t=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(_t=!0);else return e.lanes=t.lanes,bn(t,e,i)}return Ah(t,e,n,r,i)}function M_(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ye(Ai,At),At|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ye(Ai,At),At|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,ye(Ai,At),At|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,ye(Ai,At),At|=r;return dt(t,e,i,n),e.child}function V_(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Ah(t,e,n,r,i){var s=Et(n)?Br:at.current;return s=Ui(e,s),Di(e,i),n=Kd(t,e,n,r,s,i),r=Gd(),t!==null&&!_t?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,bn(t,e,i)):(Ee&&r&&Md(e),e.flags|=1,dt(t,e,n,i),e.child)}function tg(t,e,n,r,i){if(Et(n)){var s=!0;hl(e)}else s=!1;if(Di(e,i),e.stateNode===null)za(t,e),N_(e,n,r),Sh(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,u=e.memoizedProps;o.props=u;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Ft(c):(c=Et(n)?Br:at.current,c=Ui(e,c));var d=n.getDerivedStateFromProps,p=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";p||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(u!==r||l!==c)&&Qm(e,o,r,c),Hn=!1;var m=e.memoizedState;o.state=m,gl(e,r,o,i),l=e.memoizedState,u!==r||m!==l||wt.current||Hn?(typeof d=="function"&&(Th(e,n,d,r),l=e.memoizedState),(u=Hn||Gm(e,n,u,r,m,l,c))?(p||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=c,r=u):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,c_(t,e),u=e.memoizedProps,c=e.type===e.elementType?u:Wt(e.type,u),o.props=c,p=e.pendingProps,m=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Ft(l):(l=Et(n)?Br:at.current,l=Ui(e,l));var _=n.getDerivedStateFromProps;(d=typeof _=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(u!==p||m!==l)&&Qm(e,o,r,l),Hn=!1,m=e.memoizedState,o.state=m,gl(e,r,o,i);var x=e.memoizedState;u!==p||m!==x||wt.current||Hn?(typeof _=="function"&&(Th(e,n,_,r),x=e.memoizedState),(c=Hn||Gm(e,n,c,r,m,x,l)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,x,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,x,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||u===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||u===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=x),o.props=r,o.state=x,o.context=l,r=c):(typeof o.componentDidUpdate!="function"||u===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||u===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),r=!1)}return kh(t,e,n,r,s,i)}function kh(t,e,n,r,i,s){V_(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Um(e,n,!1),bn(t,e,s);r=e.stateNode,Q1.current=e;var u=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=zi(e,t.child,null,s),e.child=zi(e,null,u,s)):dt(t,e,u,s),e.memoizedState=r.state,i&&Um(e,n,!0),e.child}function L_(t){var e=t.stateNode;e.pendingContext?Fm(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Fm(t,e.context,!1),$d(t,e.containerInfo)}function ng(t,e,n,r,i){return Bi(),Ld(i),e.flags|=256,dt(t,e,n,r),e.child}var Rh={dehydrated:null,treeContext:null,retryLane:0};function Ch(t){return{baseLanes:t,cachePool:null,transitions:null}}function j_(t,e,n){var r=e.pendingProps,i=Ie.current,s=!1,o=(e.flags&128)!==0,u;if((u=o)||(u=t!==null&&t.memoizedState===null?!1:(i&2)!==0),u?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),ye(Ie,i&1),t===null)return Eh(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=nu(o,r,0,null),t=Lr(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Ch(n),e.memoizedState=Rh,t):Xd(e,o));if(i=t.memoizedState,i!==null&&(u=i.dehydrated,u!==null))return Y1(t,e,o,r,u,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,u=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=cr(i,l),r.subtreeFlags=i.subtreeFlags&14680064),u!==null?s=cr(u,s):(s=Lr(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Ch(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Rh,r}return s=t.child,t=s.sibling,r=cr(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Xd(t,e){return e=nu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Sa(t,e,n,r){return r!==null&&Ld(r),zi(e,t.child,null,n),t=Xd(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Y1(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Ac(Error(B(422))),Sa(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=nu({mode:"visible",children:r.children},i,0,null),s=Lr(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&zi(e,t.child,null,o),e.child.memoizedState=Ch(o),e.memoizedState=Rh,s);if(!(e.mode&1))return Sa(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var u=r.dgst;return r=u,s=Error(B(419)),r=Ac(s,r,void 0),Sa(t,e,o,r)}if(u=(o&t.childLanes)!==0,_t||u){if(r=ze,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Nn(t,i),Gt(r,t,i,-1))}return rf(),r=Ac(Error(B(421))),Sa(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=uS.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,kt=or(i.nextSibling),Ct=e,Ee=!0,qt=null,t!==null&&(Ot[Mt++]=In,Ot[Mt++]=Tn,Ot[Mt++]=zr,In=t.id,Tn=t.overflow,zr=e),e=Xd(e,r.children),e.flags|=4096,e)}function rg(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Ih(t.return,e,n)}function kc(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function F_(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(dt(t,e,r.children,n),r=Ie.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&rg(t,n,e);else if(t.tag===19)rg(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(ye(Ie,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&yl(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),kc(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&yl(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}kc(e,!0,n,null,s);break;case"together":kc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function za(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function bn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Wr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(B(153));if(e.child!==null){for(t=e.child,n=cr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=cr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function X1(t,e,n){switch(e.tag){case 3:L_(e),Bi();break;case 5:h_(e);break;case 1:Et(e.type)&&hl(e);break;case 4:$d(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;ye(pl,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(ye(Ie,Ie.current&1),e.flags|=128,null):n&e.child.childLanes?j_(t,e,n):(ye(Ie,Ie.current&1),t=bn(t,e,n),t!==null?t.sibling:null);ye(Ie,Ie.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return F_(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ye(Ie,Ie.current),r)break;return null;case 22:case 23:return e.lanes=0,M_(t,e,n)}return bn(t,e,n)}var U_,Ph,B_,z_;U_=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Ph=function(){};B_=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Dr(nn.current);var s=null;switch(n){case"input":i=Jc(t,i),r=Jc(t,r),s=[];break;case"select":i=Se({},i,{value:void 0}),r=Se({},r,{value:void 0}),s=[];break;case"textarea":i=th(t,i),r=th(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=ul)}rh(n,r);var o;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var u=i[c];for(o in u)u.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(ro.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in r){var l=r[c];if(u=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&l!==u&&(l!=null||u!=null))if(c==="style")if(u){for(o in u)!u.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&u[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,u=u?u.__html:void 0,l!=null&&u!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(ro.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&_e("scroll",t),s||u===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};z_=function(t,e,n,r){n!==r&&(e.flags|=4)};function Ps(t,e){if(!Ee)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function nt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function J1(t,e,n){var r=e.pendingProps;switch(Vd(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return nt(e),null;case 1:return Et(e.type)&&cl(),nt(e),null;case 3:return r=e.stateNode,$i(),we(wt),we(at),Hd(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Ia(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,qt!==null&&(jh(qt),qt=null))),Ph(t,e),nt(e),null;case 5:Wd(e);var i=Dr(go.current);if(n=e.type,t!==null&&e.stateNode!=null)B_(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(B(166));return nt(e),null}if(t=Dr(nn.current),Ia(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[en]=e,r[po]=s,t=(e.mode&1)!==0,n){case"dialog":_e("cancel",r),_e("close",r);break;case"iframe":case"object":case"embed":_e("load",r);break;case"video":case"audio":for(i=0;i<Vs.length;i++)_e(Vs[i],r);break;case"source":_e("error",r);break;case"img":case"image":case"link":_e("error",r),_e("load",r);break;case"details":_e("toggle",r);break;case"input":dm(r,s),_e("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},_e("invalid",r);break;case"textarea":pm(r,s),_e("invalid",r)}rh(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var u=s[o];o==="children"?typeof u=="string"?r.textContent!==u&&(s.suppressHydrationWarning!==!0&&Ea(r.textContent,u,t),i=["children",u]):typeof u=="number"&&r.textContent!==""+u&&(s.suppressHydrationWarning!==!0&&Ea(r.textContent,u,t),i=["children",""+u]):ro.hasOwnProperty(o)&&u!=null&&o==="onScroll"&&_e("scroll",r)}switch(n){case"input":fa(r),fm(r,s,!0);break;case"textarea":fa(r),mm(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=ul)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=gv(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[en]=e,t[po]=r,U_(t,e,!1,!1),e.stateNode=t;e:{switch(o=ih(n,r),n){case"dialog":_e("cancel",t),_e("close",t),i=r;break;case"iframe":case"object":case"embed":_e("load",t),i=r;break;case"video":case"audio":for(i=0;i<Vs.length;i++)_e(Vs[i],t);i=r;break;case"source":_e("error",t),i=r;break;case"img":case"image":case"link":_e("error",t),_e("load",t),i=r;break;case"details":_e("toggle",t),i=r;break;case"input":dm(t,r),i=Jc(t,r),_e("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Se({},r,{value:void 0}),_e("invalid",t);break;case"textarea":pm(t,r),i=th(t,r),_e("invalid",t);break;default:i=r}rh(n,i),u=i;for(s in u)if(u.hasOwnProperty(s)){var l=u[s];s==="style"?_v(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&yv(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&io(t,l):typeof l=="number"&&io(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(ro.hasOwnProperty(s)?l!=null&&s==="onScroll"&&_e("scroll",t):l!=null&&Ed(t,s,l,o))}switch(n){case"input":fa(t),fm(t,r,!1);break;case"textarea":fa(t),mm(t);break;case"option":r.value!=null&&t.setAttribute("value",""+mr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Ci(t,!!r.multiple,s,!1):r.defaultValue!=null&&Ci(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=ul)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return nt(e),null;case 6:if(t&&e.stateNode!=null)z_(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(B(166));if(n=Dr(go.current),Dr(nn.current),Ia(e)){if(r=e.stateNode,n=e.memoizedProps,r[en]=e,(s=r.nodeValue!==n)&&(t=Ct,t!==null))switch(t.tag){case 3:Ea(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Ea(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[en]=e,e.stateNode=r}return nt(e),null;case 13:if(we(Ie),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Ee&&kt!==null&&e.mode&1&&!(e.flags&128))o_(),Bi(),e.flags|=98560,s=!1;else if(s=Ia(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(B(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(B(317));s[en]=e}else Bi(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;nt(e),s=!1}else qt!==null&&(jh(qt),qt=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Ie.current&1?Le===0&&(Le=3):rf())),e.updateQueue!==null&&(e.flags|=4),nt(e),null);case 4:return $i(),Ph(t,e),t===null&&ho(e.stateNode.containerInfo),nt(e),null;case 10:return Ud(e.type._context),nt(e),null;case 17:return Et(e.type)&&cl(),nt(e),null;case 19:if(we(Ie),s=e.memoizedState,s===null)return nt(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Ps(s,!1);else{if(Le!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=yl(t),o!==null){for(e.flags|=128,Ps(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ye(Ie,Ie.current&1|2),e.child}t=t.sibling}s.tail!==null&&be()>Hi&&(e.flags|=128,r=!0,Ps(s,!1),e.lanes=4194304)}else{if(!r)if(t=yl(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Ps(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Ee)return nt(e),null}else 2*be()-s.renderingStartTime>Hi&&n!==1073741824&&(e.flags|=128,r=!0,Ps(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=be(),e.sibling=null,n=Ie.current,ye(Ie,r?n&1|2:n&1),e):(nt(e),null);case 22:case 23:return nf(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?At&1073741824&&(nt(e),e.subtreeFlags&6&&(e.flags|=8192)):nt(e),null;case 24:return null;case 25:return null}throw Error(B(156,e.tag))}function Z1(t,e){switch(Vd(e),e.tag){case 1:return Et(e.type)&&cl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return $i(),we(wt),we(at),Hd(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Wd(e),null;case 13:if(we(Ie),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(B(340));Bi()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return we(Ie),null;case 4:return $i(),null;case 10:return Ud(e.type._context),null;case 22:case 23:return nf(),null;case 24:return null;default:return null}}var xa=!1,st=!1,eS=typeof WeakSet=="function"?WeakSet:Set,$=null;function xi(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Re(t,e,r)}else n.current=null}function Nh(t,e,n){try{n()}catch(r){Re(t,e,r)}}var ig=!1;function tS(t,e){if(ph=ol,t=Kv(),Od(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,u=-1,l=-1,c=0,d=0,p=t,m=null;t:for(;;){for(var _;p!==n||i!==0&&p.nodeType!==3||(u=o+i),p!==s||r!==0&&p.nodeType!==3||(l=o+r),p.nodeType===3&&(o+=p.nodeValue.length),(_=p.firstChild)!==null;)m=p,p=_;for(;;){if(p===t)break t;if(m===n&&++c===i&&(u=o),m===s&&++d===r&&(l=o),(_=p.nextSibling)!==null)break;p=m,m=p.parentNode}p=_}n=u===-1||l===-1?null:{start:u,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(mh={focusedElem:t,selectionRange:n},ol=!1,$=e;$!==null;)if(e=$,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,$=t;else for(;$!==null;){e=$;try{var x=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var P=x.memoizedProps,C=x.memoizedState,S=e.stateNode,w=S.getSnapshotBeforeUpdate(e.elementType===e.type?P:Wt(e.type,P),C);S.__reactInternalSnapshotBeforeUpdate=w}break;case 3:var E=e.stateNode.containerInfo;E.nodeType===1?E.textContent="":E.nodeType===9&&E.documentElement&&E.removeChild(E.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(B(163))}}catch(D){Re(e,e.return,D)}if(t=e.sibling,t!==null){t.return=e.return,$=t;break}$=e.return}return x=ig,ig=!1,x}function Gs(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Nh(e,n,s)}i=i.next}while(i!==r)}}function eu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function bh(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function $_(t){var e=t.alternate;e!==null&&(t.alternate=null,$_(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[en],delete e[po],delete e[vh],delete e[L1],delete e[j1])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function W_(t){return t.tag===5||t.tag===3||t.tag===4}function sg(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||W_(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Dh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=ul));else if(r!==4&&(t=t.child,t!==null))for(Dh(t,e,n),t=t.sibling;t!==null;)Dh(t,e,n),t=t.sibling}function Oh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Oh(t,e,n),t=t.sibling;t!==null;)Oh(t,e,n),t=t.sibling}var He=null,Ht=!1;function zn(t,e,n){for(n=n.child;n!==null;)H_(t,e,n),n=n.sibling}function H_(t,e,n){if(tn&&typeof tn.onCommitFiberUnmount=="function")try{tn.onCommitFiberUnmount(ql,n)}catch{}switch(n.tag){case 5:st||xi(n,e);case 6:var r=He,i=Ht;He=null,zn(t,e,n),He=r,Ht=i,He!==null&&(Ht?(t=He,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):He.removeChild(n.stateNode));break;case 18:He!==null&&(Ht?(t=He,n=n.stateNode,t.nodeType===8?wc(t.parentNode,n):t.nodeType===1&&wc(t,n),lo(t)):wc(He,n.stateNode));break;case 4:r=He,i=Ht,He=n.stateNode.containerInfo,Ht=!0,zn(t,e,n),He=r,Ht=i;break;case 0:case 11:case 14:case 15:if(!st&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Nh(n,e,o),i=i.next}while(i!==r)}zn(t,e,n);break;case 1:if(!st&&(xi(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(u){Re(n,e,u)}zn(t,e,n);break;case 21:zn(t,e,n);break;case 22:n.mode&1?(st=(r=st)||n.memoizedState!==null,zn(t,e,n),st=r):zn(t,e,n);break;default:zn(t,e,n)}}function og(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new eS),e.forEach(function(r){var i=cS.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function $t(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,u=o;e:for(;u!==null;){switch(u.tag){case 5:He=u.stateNode,Ht=!1;break e;case 3:He=u.stateNode.containerInfo,Ht=!0;break e;case 4:He=u.stateNode.containerInfo,Ht=!0;break e}u=u.return}if(He===null)throw Error(B(160));H_(s,o,i),He=null,Ht=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(c){Re(i,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)q_(e,t),e=e.sibling}function q_(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if($t(e,t),Jt(t),r&4){try{Gs(3,t,t.return),eu(3,t)}catch(P){Re(t,t.return,P)}try{Gs(5,t,t.return)}catch(P){Re(t,t.return,P)}}break;case 1:$t(e,t),Jt(t),r&512&&n!==null&&xi(n,n.return);break;case 5:if($t(e,t),Jt(t),r&512&&n!==null&&xi(n,n.return),t.flags&32){var i=t.stateNode;try{io(i,"")}catch(P){Re(t,t.return,P)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,u=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{u==="input"&&s.type==="radio"&&s.name!=null&&pv(i,s),ih(u,o);var c=ih(u,s);for(o=0;o<l.length;o+=2){var d=l[o],p=l[o+1];d==="style"?_v(i,p):d==="dangerouslySetInnerHTML"?yv(i,p):d==="children"?io(i,p):Ed(i,d,p,c)}switch(u){case"input":Zc(i,s);break;case"textarea":mv(i,s);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var _=s.value;_!=null?Ci(i,!!s.multiple,_,!1):m!==!!s.multiple&&(s.defaultValue!=null?Ci(i,!!s.multiple,s.defaultValue,!0):Ci(i,!!s.multiple,s.multiple?[]:"",!1))}i[po]=s}catch(P){Re(t,t.return,P)}}break;case 6:if($t(e,t),Jt(t),r&4){if(t.stateNode===null)throw Error(B(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(P){Re(t,t.return,P)}}break;case 3:if($t(e,t),Jt(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{lo(e.containerInfo)}catch(P){Re(t,t.return,P)}break;case 4:$t(e,t),Jt(t);break;case 13:$t(e,t),Jt(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(ef=be())),r&4&&og(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(st=(c=st)||d,$t(e,t),st=c):$t(e,t),Jt(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!d&&t.mode&1)for($=t,d=t.child;d!==null;){for(p=$=d;$!==null;){switch(m=$,_=m.child,m.tag){case 0:case 11:case 14:case 15:Gs(4,m,m.return);break;case 1:xi(m,m.return);var x=m.stateNode;if(typeof x.componentWillUnmount=="function"){r=m,n=m.return;try{e=r,x.props=e.memoizedProps,x.state=e.memoizedState,x.componentWillUnmount()}catch(P){Re(r,n,P)}}break;case 5:xi(m,m.return);break;case 22:if(m.memoizedState!==null){lg(p);continue}}_!==null?(_.return=m,$=_):lg(p)}d=d.sibling}e:for(d=null,p=t;;){if(p.tag===5){if(d===null){d=p;try{i=p.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(u=p.stateNode,l=p.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,u.style.display=vv("display",o))}catch(P){Re(t,t.return,P)}}}else if(p.tag===6){if(d===null)try{p.stateNode.nodeValue=c?"":p.memoizedProps}catch(P){Re(t,t.return,P)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===t)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===t)break e;for(;p.sibling===null;){if(p.return===null||p.return===t)break e;d===p&&(d=null),p=p.return}d===p&&(d=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:$t(e,t),Jt(t),r&4&&og(t);break;case 21:break;default:$t(e,t),Jt(t)}}function Jt(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(W_(n)){var r=n;break e}n=n.return}throw Error(B(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(io(i,""),r.flags&=-33);var s=sg(t);Oh(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,u=sg(t);Dh(t,u,o);break;default:throw Error(B(161))}}catch(l){Re(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function nS(t,e,n){$=t,K_(t)}function K_(t,e,n){for(var r=(t.mode&1)!==0;$!==null;){var i=$,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||xa;if(!o){var u=i.alternate,l=u!==null&&u.memoizedState!==null||st;u=xa;var c=st;if(xa=o,(st=l)&&!c)for($=i;$!==null;)o=$,l=o.child,o.tag===22&&o.memoizedState!==null?ug(i):l!==null?(l.return=o,$=l):ug(i);for(;s!==null;)$=s,K_(s),s=s.sibling;$=i,xa=u,st=c}ag(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,$=s):ag(t)}}function ag(t){for(;$!==null;){var e=$;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:st||eu(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!st)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Wt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Hm(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Hm(e,o,n)}break;case 5:var u=e.stateNode;if(n===null&&e.flags&4){n=u;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var p=d.dehydrated;p!==null&&lo(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(B(163))}st||e.flags&512&&bh(e)}catch(m){Re(e,e.return,m)}}if(e===t){$=null;break}if(n=e.sibling,n!==null){n.return=e.return,$=n;break}$=e.return}}function lg(t){for(;$!==null;){var e=$;if(e===t){$=null;break}var n=e.sibling;if(n!==null){n.return=e.return,$=n;break}$=e.return}}function ug(t){for(;$!==null;){var e=$;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{eu(4,e)}catch(l){Re(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){Re(e,i,l)}}var s=e.return;try{bh(e)}catch(l){Re(e,s,l)}break;case 5:var o=e.return;try{bh(e)}catch(l){Re(e,o,l)}}}catch(l){Re(e,e.return,l)}if(e===t){$=null;break}var u=e.sibling;if(u!==null){u.return=e.return,$=u;break}$=e.return}}var rS=Math.ceil,wl=jn.ReactCurrentDispatcher,Jd=jn.ReactCurrentOwner,Lt=jn.ReactCurrentBatchConfig,le=0,ze=null,Oe=null,Ge=0,At=0,Ai=Er(0),Le=0,wo=null,Wr=0,tu=0,Zd=0,Qs=null,yt=null,ef=0,Hi=1/0,wn=null,El=!1,Mh=null,lr=null,Aa=!1,Zn=null,Il=0,Ys=0,Vh=null,$a=-1,Wa=0;function ft(){return le&6?be():$a!==-1?$a:$a=be()}function ur(t){return t.mode&1?le&2&&Ge!==0?Ge&-Ge:U1.transition!==null?(Wa===0&&(Wa=Nv()),Wa):(t=de,t!==0||(t=window.event,t=t===void 0?16:jv(t.type)),t):1}function Gt(t,e,n,r){if(50<Ys)throw Ys=0,Vh=null,Error(B(185));bo(t,n,r),(!(le&2)||t!==ze)&&(t===ze&&(!(le&2)&&(tu|=n),Le===4&&Kn(t,Ge)),It(t,r),n===1&&le===0&&!(e.mode&1)&&(Hi=be()+500,Xl&&Ir()))}function It(t,e){var n=t.callbackNode;UT(t,e);var r=sl(t,t===ze?Ge:0);if(r===0)n!==null&&vm(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&vm(n),e===1)t.tag===0?F1(cg.bind(null,t)):r_(cg.bind(null,t)),M1(function(){!(le&6)&&Ir()}),n=null;else{switch(bv(r)){case 1:n=Ad;break;case 4:n=Cv;break;case 16:n=il;break;case 536870912:n=Pv;break;default:n=il}n=t0(n,G_.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function G_(t,e){if($a=-1,Wa=0,le&6)throw Error(B(327));var n=t.callbackNode;if(Oi()&&t.callbackNode!==n)return null;var r=sl(t,t===ze?Ge:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Tl(t,r);else{e=r;var i=le;le|=2;var s=Y_();(ze!==t||Ge!==e)&&(wn=null,Hi=be()+500,Vr(t,e));do try{oS();break}catch(u){Q_(t,u)}while(!0);Fd(),wl.current=s,le=i,Oe!==null?e=0:(ze=null,Ge=0,e=Le)}if(e!==0){if(e===2&&(i=uh(t),i!==0&&(r=i,e=Lh(t,i))),e===1)throw n=wo,Vr(t,0),Kn(t,r),It(t,be()),n;if(e===6)Kn(t,r);else{if(i=t.current.alternate,!(r&30)&&!iS(i)&&(e=Tl(t,r),e===2&&(s=uh(t),s!==0&&(r=s,e=Lh(t,s))),e===1))throw n=wo,Vr(t,0),Kn(t,r),It(t,be()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(B(345));case 2:Cr(t,yt,wn);break;case 3:if(Kn(t,r),(r&130023424)===r&&(e=ef+500-be(),10<e)){if(sl(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){ft(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=yh(Cr.bind(null,t,yt,wn),e);break}Cr(t,yt,wn);break;case 4:if(Kn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-Kt(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=be()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*rS(r/1960))-r,10<r){t.timeoutHandle=yh(Cr.bind(null,t,yt,wn),r);break}Cr(t,yt,wn);break;case 5:Cr(t,yt,wn);break;default:throw Error(B(329))}}}return It(t,be()),t.callbackNode===n?G_.bind(null,t):null}function Lh(t,e){var n=Qs;return t.current.memoizedState.isDehydrated&&(Vr(t,e).flags|=256),t=Tl(t,e),t!==2&&(e=yt,yt=n,e!==null&&jh(e)),t}function jh(t){yt===null?yt=t:yt.push.apply(yt,t)}function iS(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Qt(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Kn(t,e){for(e&=~Zd,e&=~tu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Kt(e),r=1<<n;t[n]=-1,e&=~r}}function cg(t){if(le&6)throw Error(B(327));Oi();var e=sl(t,0);if(!(e&1))return It(t,be()),null;var n=Tl(t,e);if(t.tag!==0&&n===2){var r=uh(t);r!==0&&(e=r,n=Lh(t,r))}if(n===1)throw n=wo,Vr(t,0),Kn(t,e),It(t,be()),n;if(n===6)throw Error(B(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Cr(t,yt,wn),It(t,be()),null}function tf(t,e){var n=le;le|=1;try{return t(e)}finally{le=n,le===0&&(Hi=be()+500,Xl&&Ir())}}function Hr(t){Zn!==null&&Zn.tag===0&&!(le&6)&&Oi();var e=le;le|=1;var n=Lt.transition,r=de;try{if(Lt.transition=null,de=1,t)return t()}finally{de=r,Lt.transition=n,le=e,!(le&6)&&Ir()}}function nf(){At=Ai.current,we(Ai)}function Vr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,O1(n)),Oe!==null)for(n=Oe.return;n!==null;){var r=n;switch(Vd(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&cl();break;case 3:$i(),we(wt),we(at),Hd();break;case 5:Wd(r);break;case 4:$i();break;case 13:we(Ie);break;case 19:we(Ie);break;case 10:Ud(r.type._context);break;case 22:case 23:nf()}n=n.return}if(ze=t,Oe=t=cr(t.current,null),Ge=At=e,Le=0,wo=null,Zd=tu=Wr=0,yt=Qs=null,br!==null){for(e=0;e<br.length;e++)if(n=br[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}br=null}return t}function Q_(t,e){do{var n=Oe;try{if(Fd(),Ua.current=_l,vl){for(var r=Te.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}vl=!1}if($r=0,Be=Me=Te=null,Ks=!1,yo=0,Jd.current=null,n===null||n.return===null){Le=1,wo=e,Oe=null;break}e:{var s=t,o=n.return,u=n,l=e;if(e=Ge,u.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,d=u,p=d.tag;if(!(d.mode&1)&&(p===0||p===11||p===15)){var m=d.alternate;m?(d.updateQueue=m.updateQueue,d.memoizedState=m.memoizedState,d.lanes=m.lanes):(d.updateQueue=null,d.memoizedState=null)}var _=Xm(o);if(_!==null){_.flags&=-257,Jm(_,o,u,s,e),_.mode&1&&Ym(s,c,e),e=_,l=c;var x=e.updateQueue;if(x===null){var P=new Set;P.add(l),e.updateQueue=P}else x.add(l);break e}else{if(!(e&1)){Ym(s,c,e),rf();break e}l=Error(B(426))}}else if(Ee&&u.mode&1){var C=Xm(o);if(C!==null){!(C.flags&65536)&&(C.flags|=256),Jm(C,o,u,s,e),Ld(Wi(l,u));break e}}s=l=Wi(l,u),Le!==4&&(Le=2),Qs===null?Qs=[s]:Qs.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var S=b_(s,l,e);Wm(s,S);break e;case 1:u=l;var w=s.type,E=s.stateNode;if(!(s.flags&128)&&(typeof w.getDerivedStateFromError=="function"||E!==null&&typeof E.componentDidCatch=="function"&&(lr===null||!lr.has(E)))){s.flags|=65536,e&=-e,s.lanes|=e;var D=D_(s,u,e);Wm(s,D);break e}}s=s.return}while(s!==null)}J_(n)}catch(M){e=M,Oe===n&&n!==null&&(Oe=n=n.return);continue}break}while(!0)}function Y_(){var t=wl.current;return wl.current=_l,t===null?_l:t}function rf(){(Le===0||Le===3||Le===2)&&(Le=4),ze===null||!(Wr&268435455)&&!(tu&268435455)||Kn(ze,Ge)}function Tl(t,e){var n=le;le|=2;var r=Y_();(ze!==t||Ge!==e)&&(wn=null,Vr(t,e));do try{sS();break}catch(i){Q_(t,i)}while(!0);if(Fd(),le=n,wl.current=r,Oe!==null)throw Error(B(261));return ze=null,Ge=0,Le}function sS(){for(;Oe!==null;)X_(Oe)}function oS(){for(;Oe!==null&&!NT();)X_(Oe)}function X_(t){var e=e0(t.alternate,t,At);t.memoizedProps=t.pendingProps,e===null?J_(t):Oe=e,Jd.current=null}function J_(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=Z1(n,e),n!==null){n.flags&=32767,Oe=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Le=6,Oe=null;return}}else if(n=J1(n,e,At),n!==null){Oe=n;return}if(e=e.sibling,e!==null){Oe=e;return}Oe=e=t}while(e!==null);Le===0&&(Le=5)}function Cr(t,e,n){var r=de,i=Lt.transition;try{Lt.transition=null,de=1,aS(t,e,n,r)}finally{Lt.transition=i,de=r}return null}function aS(t,e,n,r){do Oi();while(Zn!==null);if(le&6)throw Error(B(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(B(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(BT(t,s),t===ze&&(Oe=ze=null,Ge=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Aa||(Aa=!0,t0(il,function(){return Oi(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Lt.transition,Lt.transition=null;var o=de;de=1;var u=le;le|=4,Jd.current=null,tS(t,n),q_(n,t),k1(mh),ol=!!ph,mh=ph=null,t.current=n,nS(n),bT(),le=u,de=o,Lt.transition=s}else t.current=n;if(Aa&&(Aa=!1,Zn=t,Il=i),s=t.pendingLanes,s===0&&(lr=null),MT(n.stateNode),It(t,be()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(El)throw El=!1,t=Mh,Mh=null,t;return Il&1&&t.tag!==0&&Oi(),s=t.pendingLanes,s&1?t===Vh?Ys++:(Ys=0,Vh=t):Ys=0,Ir(),null}function Oi(){if(Zn!==null){var t=bv(Il),e=Lt.transition,n=de;try{if(Lt.transition=null,de=16>t?16:t,Zn===null)var r=!1;else{if(t=Zn,Zn=null,Il=0,le&6)throw Error(B(331));var i=le;for(le|=4,$=t.current;$!==null;){var s=$,o=s.child;if($.flags&16){var u=s.deletions;if(u!==null){for(var l=0;l<u.length;l++){var c=u[l];for($=c;$!==null;){var d=$;switch(d.tag){case 0:case 11:case 15:Gs(8,d,s)}var p=d.child;if(p!==null)p.return=d,$=p;else for(;$!==null;){d=$;var m=d.sibling,_=d.return;if($_(d),d===c){$=null;break}if(m!==null){m.return=_,$=m;break}$=_}}}var x=s.alternate;if(x!==null){var P=x.child;if(P!==null){x.child=null;do{var C=P.sibling;P.sibling=null,P=C}while(P!==null)}}$=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,$=o;else e:for(;$!==null;){if(s=$,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Gs(9,s,s.return)}var S=s.sibling;if(S!==null){S.return=s.return,$=S;break e}$=s.return}}var w=t.current;for($=w;$!==null;){o=$;var E=o.child;if(o.subtreeFlags&2064&&E!==null)E.return=o,$=E;else e:for(o=w;$!==null;){if(u=$,u.flags&2048)try{switch(u.tag){case 0:case 11:case 15:eu(9,u)}}catch(M){Re(u,u.return,M)}if(u===o){$=null;break e}var D=u.sibling;if(D!==null){D.return=u.return,$=D;break e}$=u.return}}if(le=i,Ir(),tn&&typeof tn.onPostCommitFiberRoot=="function")try{tn.onPostCommitFiberRoot(ql,t)}catch{}r=!0}return r}finally{de=n,Lt.transition=e}}return!1}function hg(t,e,n){e=Wi(n,e),e=b_(t,e,1),t=ar(t,e,1),e=ft(),t!==null&&(bo(t,1,e),It(t,e))}function Re(t,e,n){if(t.tag===3)hg(t,t,n);else for(;e!==null;){if(e.tag===3){hg(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(lr===null||!lr.has(r))){t=Wi(n,t),t=D_(e,t,1),e=ar(e,t,1),t=ft(),e!==null&&(bo(e,1,t),It(e,t));break}}e=e.return}}function lS(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=ft(),t.pingedLanes|=t.suspendedLanes&n,ze===t&&(Ge&n)===n&&(Le===4||Le===3&&(Ge&130023424)===Ge&&500>be()-ef?Vr(t,0):Zd|=n),It(t,e)}function Z_(t,e){e===0&&(t.mode&1?(e=ga,ga<<=1,!(ga&130023424)&&(ga=4194304)):e=1);var n=ft();t=Nn(t,e),t!==null&&(bo(t,e,n),It(t,n))}function uS(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Z_(t,n)}function cS(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(B(314))}r!==null&&r.delete(e),Z_(t,n)}var e0;e0=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||wt.current)_t=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return _t=!1,X1(t,e,n);_t=!!(t.flags&131072)}else _t=!1,Ee&&e.flags&1048576&&i_(e,fl,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;za(t,e),t=e.pendingProps;var i=Ui(e,at.current);Di(e,n),i=Kd(null,e,r,t,i,n);var s=Gd();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Et(r)?(s=!0,hl(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,zd(e),i.updater=Zl,e.stateNode=i,i._reactInternals=e,Sh(e,r,t,n),e=kh(null,e,r,!0,s,n)):(e.tag=0,Ee&&s&&Md(e),dt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(za(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=dS(r),t=Wt(r,t),i){case 0:e=Ah(null,e,r,t,n);break e;case 1:e=tg(null,e,r,t,n);break e;case 11:e=Zm(null,e,r,t,n);break e;case 14:e=eg(null,e,r,Wt(r.type,t),n);break e}throw Error(B(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Wt(r,i),Ah(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Wt(r,i),tg(t,e,r,i,n);case 3:e:{if(L_(e),t===null)throw Error(B(387));r=e.pendingProps,s=e.memoizedState,i=s.element,c_(t,e),gl(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Wi(Error(B(423)),e),e=ng(t,e,r,n,i);break e}else if(r!==i){i=Wi(Error(B(424)),e),e=ng(t,e,r,n,i);break e}else for(kt=or(e.stateNode.containerInfo.firstChild),Ct=e,Ee=!0,qt=null,n=l_(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Bi(),r===i){e=bn(t,e,n);break e}dt(t,e,r,n)}e=e.child}return e;case 5:return h_(e),t===null&&Eh(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,gh(r,i)?o=null:s!==null&&gh(r,s)&&(e.flags|=32),V_(t,e),dt(t,e,o,n),e.child;case 6:return t===null&&Eh(e),null;case 13:return j_(t,e,n);case 4:return $d(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=zi(e,null,r,n):dt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Wt(r,i),Zm(t,e,r,i,n);case 7:return dt(t,e,e.pendingProps,n),e.child;case 8:return dt(t,e,e.pendingProps.children,n),e.child;case 12:return dt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,ye(pl,r._currentValue),r._currentValue=o,s!==null)if(Qt(s.value,o)){if(s.children===i.children&&!wt.current){e=bn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var u=s.dependencies;if(u!==null){o=s.child;for(var l=u.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=kn(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?l.next=l:(l.next=d.next,d.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Ih(s.return,n,e),u.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(B(341));o.lanes|=n,u=o.alternate,u!==null&&(u.lanes|=n),Ih(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}dt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Di(e,n),i=Ft(i),r=r(i),e.flags|=1,dt(t,e,r,n),e.child;case 14:return r=e.type,i=Wt(r,e.pendingProps),i=Wt(r.type,i),eg(t,e,r,i,n);case 15:return O_(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Wt(r,i),za(t,e),e.tag=1,Et(r)?(t=!0,hl(e)):t=!1,Di(e,n),N_(e,r,i),Sh(e,r,i,n),kh(null,e,r,!0,t,n);case 19:return F_(t,e,n);case 22:return M_(t,e,n)}throw Error(B(156,e.tag))};function t0(t,e){return Rv(t,e)}function hS(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Vt(t,e,n,r){return new hS(t,e,n,r)}function sf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function dS(t){if(typeof t=="function")return sf(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Td)return 11;if(t===Sd)return 14}return 2}function cr(t,e){var n=t.alternate;return n===null?(n=Vt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Ha(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")sf(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case gi:return Lr(n.children,i,s,e);case Id:o=8,i|=8;break;case Gc:return t=Vt(12,n,e,i|2),t.elementType=Gc,t.lanes=s,t;case Qc:return t=Vt(13,n,e,i),t.elementType=Qc,t.lanes=s,t;case Yc:return t=Vt(19,n,e,i),t.elementType=Yc,t.lanes=s,t;case hv:return nu(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case uv:o=10;break e;case cv:o=9;break e;case Td:o=11;break e;case Sd:o=14;break e;case Wn:o=16,r=null;break e}throw Error(B(130,t==null?t:typeof t,""))}return e=Vt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Lr(t,e,n,r){return t=Vt(7,t,r,e),t.lanes=n,t}function nu(t,e,n,r){return t=Vt(22,t,r,e),t.elementType=hv,t.lanes=n,t.stateNode={isHidden:!1},t}function Rc(t,e,n){return t=Vt(6,t,null,e),t.lanes=n,t}function Cc(t,e,n){return e=Vt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function fS(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=uc(0),this.expirationTimes=uc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=uc(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function of(t,e,n,r,i,s,o,u,l){return t=new fS(t,e,n,u,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Vt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},zd(s),t}function pS(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:mi,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function n0(t){if(!t)return gr;t=t._reactInternals;e:{if(ei(t)!==t||t.tag!==1)throw Error(B(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Et(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(B(171))}if(t.tag===1){var n=t.type;if(Et(n))return n_(t,n,e)}return e}function r0(t,e,n,r,i,s,o,u,l){return t=of(n,r,!0,t,i,s,o,u,l),t.context=n0(null),n=t.current,r=ft(),i=ur(n),s=kn(r,i),s.callback=e??null,ar(n,s,i),t.current.lanes=i,bo(t,i,r),It(t,r),t}function ru(t,e,n,r){var i=e.current,s=ft(),o=ur(i);return n=n0(n),e.context===null?e.context=n:e.pendingContext=n,e=kn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=ar(i,e,o),t!==null&&(Gt(t,i,o,s),Fa(t,i,o)),o}function Sl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function dg(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function af(t,e){dg(t,e),(t=t.alternate)&&dg(t,e)}function mS(){return null}var i0=typeof reportError=="function"?reportError:function(t){console.error(t)};function lf(t){this._internalRoot=t}iu.prototype.render=lf.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(B(409));ru(t,e,null,null)};iu.prototype.unmount=lf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Hr(function(){ru(null,t,null,null)}),e[Pn]=null}};function iu(t){this._internalRoot=t}iu.prototype.unstable_scheduleHydration=function(t){if(t){var e=Mv();t={blockedOn:null,target:t,priority:e};for(var n=0;n<qn.length&&e!==0&&e<qn[n].priority;n++);qn.splice(n,0,t),n===0&&Lv(t)}};function uf(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function su(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function fg(){}function gS(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var c=Sl(o);s.call(c)}}var o=r0(e,r,t,0,null,!1,!1,"",fg);return t._reactRootContainer=o,t[Pn]=o.current,ho(t.nodeType===8?t.parentNode:t),Hr(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var u=r;r=function(){var c=Sl(l);u.call(c)}}var l=of(t,0,!1,null,null,!1,!1,"",fg);return t._reactRootContainer=l,t[Pn]=l.current,ho(t.nodeType===8?t.parentNode:t),Hr(function(){ru(e,l,n,r)}),l}function ou(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var u=i;i=function(){var l=Sl(o);u.call(l)}}ru(e,o,t,i)}else o=gS(n,e,t,i,r);return Sl(o)}Dv=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Ms(e.pendingLanes);n!==0&&(kd(e,n|1),It(e,be()),!(le&6)&&(Hi=be()+500,Ir()))}break;case 13:Hr(function(){var r=Nn(t,1);if(r!==null){var i=ft();Gt(r,t,1,i)}}),af(t,1)}};Rd=function(t){if(t.tag===13){var e=Nn(t,134217728);if(e!==null){var n=ft();Gt(e,t,134217728,n)}af(t,134217728)}};Ov=function(t){if(t.tag===13){var e=ur(t),n=Nn(t,e);if(n!==null){var r=ft();Gt(n,t,e,r)}af(t,e)}};Mv=function(){return de};Vv=function(t,e){var n=de;try{return de=t,e()}finally{de=n}};oh=function(t,e,n){switch(e){case"input":if(Zc(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Yl(r);if(!i)throw Error(B(90));fv(r),Zc(r,i)}}}break;case"textarea":mv(t,n);break;case"select":e=n.value,e!=null&&Ci(t,!!n.multiple,e,!1)}};Iv=tf;Tv=Hr;var yS={usingClientEntryPoint:!1,Events:[Oo,wi,Yl,wv,Ev,tf]},Ns={findFiberByHostInstance:Nr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},vS={bundleType:Ns.bundleType,version:Ns.version,rendererPackageName:Ns.rendererPackageName,rendererConfig:Ns.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:jn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Av(t),t===null?null:t.stateNode},findFiberByHostInstance:Ns.findFiberByHostInstance||mS,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ka=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ka.isDisabled&&ka.supportsFiber)try{ql=ka.inject(vS),tn=ka}catch{}}bt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=yS;bt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!uf(e))throw Error(B(200));return pS(t,e,null,n)};bt.createRoot=function(t,e){if(!uf(t))throw Error(B(299));var n=!1,r="",i=i0;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=of(t,1,!1,null,null,n,!1,r,i),t[Pn]=e.current,ho(t.nodeType===8?t.parentNode:t),new lf(e)};bt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(B(188)):(t=Object.keys(t).join(","),Error(B(268,t)));return t=Av(e),t=t===null?null:t.stateNode,t};bt.flushSync=function(t){return Hr(t)};bt.hydrate=function(t,e,n){if(!su(e))throw Error(B(200));return ou(null,t,e,!0,n)};bt.hydrateRoot=function(t,e,n){if(!uf(t))throw Error(B(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=i0;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=r0(e,null,t,1,n??null,i,!1,s,o),t[Pn]=e.current,ho(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new iu(e)};bt.render=function(t,e,n){if(!su(e))throw Error(B(200));return ou(null,t,e,!1,n)};bt.unmountComponentAtNode=function(t){if(!su(t))throw Error(B(40));return t._reactRootContainer?(Hr(function(){ou(null,null,t,!1,function(){t._reactRootContainer=null,t[Pn]=null})}),!0):!1};bt.unstable_batchedUpdates=tf;bt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!su(n))throw Error(B(200));if(t==null||t._reactInternals===void 0)throw Error(B(38));return ou(t,e,n,!1,r)};bt.version="18.3.1-next-f1338f8080-20240426";function s0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s0)}catch(t){console.error(t)}}s0(),sv.exports=bt;var _S=sv.exports,pg=_S;qc.createRoot=pg.createRoot,qc.hydrateRoot=pg.hydrateRoot;/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Eo(){return Eo=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Eo.apply(this,arguments)}var er;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(er||(er={}));const mg="popstate";function wS(t){t===void 0&&(t={});function e(i,s){let{pathname:o="/",search:u="",hash:l=""}=ti(i.location.hash.substr(1));return!o.startsWith("/")&&!o.startsWith(".")&&(o="/"+o),Fh("",{pathname:o,search:u,hash:l},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function n(i,s){let o=i.document.querySelector("base"),u="";if(o&&o.getAttribute("href")){let l=i.location.href,c=l.indexOf("#");u=c===-1?l:l.slice(0,c)}return u+"#"+(typeof s=="string"?s:o0(s))}function r(i,s){au(i.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(s)+")")}return IS(e,n,r,t)}function je(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function au(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function ES(){return Math.random().toString(36).substr(2,8)}function gg(t,e){return{usr:t.state,key:t.key,idx:e}}function Fh(t,e,n,r){return n===void 0&&(n=null),Eo({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?ti(e):e,{state:n,key:e&&e.key||r||ES()})}function o0(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function ti(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function IS(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,u=er.Pop,l=null,c=d();c==null&&(c=0,o.replaceState(Eo({},o.state,{idx:c}),""));function d(){return(o.state||{idx:null}).idx}function p(){u=er.Pop;let C=d(),S=C==null?null:C-c;c=C,l&&l({action:u,location:P.location,delta:S})}function m(C,S){u=er.Push;let w=Fh(P.location,C,S);n&&n(w,C),c=d()+1;let E=gg(w,c),D=P.createHref(w);try{o.pushState(E,"",D)}catch(M){if(M instanceof DOMException&&M.name==="DataCloneError")throw M;i.location.assign(D)}s&&l&&l({action:u,location:P.location,delta:1})}function _(C,S){u=er.Replace;let w=Fh(P.location,C,S);n&&n(w,C),c=d();let E=gg(w,c),D=P.createHref(w);o.replaceState(E,"",D),s&&l&&l({action:u,location:P.location,delta:0})}function x(C){let S=i.location.origin!=="null"?i.location.origin:i.location.href,w=typeof C=="string"?C:o0(C);return w=w.replace(/ $/,"%20"),je(S,"No window.location.(origin|href) available to create URL for href: "+w),new URL(w,S)}let P={get action(){return u},get location(){return t(i,o)},listen(C){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(mg,p),l=C,()=>{i.removeEventListener(mg,p),l=null}},createHref(C){return e(i,C)},createURL:x,encodeLocation(C){let S=x(C);return{pathname:S.pathname,search:S.search,hash:S.hash}},push:m,replace:_,go(C){return o.go(C)}};return P}var yg;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(yg||(yg={}));function TS(t,e,n){return n===void 0&&(n="/"),SS(t,e,n)}function SS(t,e,n,r){let i=typeof e=="string"?ti(e):e,s=u0(i.pathname||"/",n);if(s==null)return null;let o=a0(t);xS(o);let u=null;for(let l=0;u==null&&l<o.length;++l){let c=LS(s);u=OS(o[l],c)}return u}function a0(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,u)=>{let l={relativePath:u===void 0?s.path||"":u,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(je(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let c=jr([r,l.relativePath]),d=n.concat(l);s.children&&s.children.length>0&&(je(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),a0(s.children,e,d,c)),!(s.path==null&&!s.index)&&e.push({path:c,score:bS(c,s.index),routesMeta:d})};return t.forEach((s,o)=>{var u;if(s.path===""||!((u=s.path)!=null&&u.includes("?")))i(s,o);else for(let l of l0(s.path))i(s,o,l)}),e}function l0(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=l0(r.join("/")),u=[];return u.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&u.push(...o),u.map(l=>t.startsWith("/")&&l===""?"/":l)}function xS(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:DS(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const AS=/^:[\w-]+$/,kS=3,RS=2,CS=1,PS=10,NS=-2,vg=t=>t==="*";function bS(t,e){let n=t.split("/"),r=n.length;return n.some(vg)&&(r+=NS),e&&(r+=RS),n.filter(i=>!vg(i)).reduce((i,s)=>i+(AS.test(s)?kS:s===""?CS:PS),r)}function DS(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function OS(t,e,n){let{routesMeta:r}=t,i={},s="/",o=[];for(let u=0;u<r.length;++u){let l=r[u],c=u===r.length-1,d=s==="/"?e:e.slice(s.length)||"/",p=MS({path:l.relativePath,caseSensitive:l.caseSensitive,end:c},d),m=l.route;if(!p)return null;Object.assign(i,p.params),o.push({params:i,pathname:jr([s,p.pathname]),pathnameBase:WS(jr([s,p.pathnameBase])),route:m}),p.pathnameBase!=="/"&&(s=jr([s,p.pathnameBase]))}return o}function MS(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=VS(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),u=i.slice(1);return{params:r.reduce((c,d,p)=>{let{paramName:m,isOptional:_}=d;if(m==="*"){let P=u[p]||"";o=s.slice(0,s.length-P.length).replace(/(.)\/+$/,"$1")}const x=u[p];return _&&!x?c[m]=void 0:c[m]=(x||"").replace(/%2F/g,"/"),c},{}),pathname:s,pathnameBase:o,pattern:t}}function VS(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),au(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,u,l)=>(r.push({paramName:u,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function LS(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return au(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function u0(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}const jS=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,FS=t=>jS.test(t);function US(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?ti(t):t,s;if(n)if(FS(n))s=n;else{if(n.includes("//")){let o=n;n=n.replace(/\/\/+/g,"/"),au(!1,"Pathnames cannot have embedded double slashes - normalizing "+(o+" -> "+n))}n.startsWith("/")?s=_g(n.substring(1),"/"):s=_g(n,e)}else s=e;return{pathname:s,search:HS(r),hash:qS(i)}}function _g(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Pc(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function BS(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function zS(t,e){let n=BS(t);return e?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function $S(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=ti(t):(i=Eo({},t),je(!i.pathname||!i.pathname.includes("?"),Pc("?","pathname","search",i)),je(!i.pathname||!i.pathname.includes("#"),Pc("#","pathname","hash",i)),je(!i.search||!i.search.includes("#"),Pc("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,u;if(o==null)u=n;else{let p=e.length-1;if(!r&&o.startsWith("..")){let m=o.split("/");for(;m[0]==="..";)m.shift(),p-=1;i.pathname=m.join("/")}u=p>=0?e[p]:"/"}let l=US(i,u),c=o&&o!=="/"&&o.endsWith("/"),d=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(c||d)&&(l.pathname+="/"),l}const jr=t=>t.join("/").replace(/\/\/+/g,"/"),WS=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),HS=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,qS=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function KS(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const c0=["post","put","patch","delete"];new Set(c0);const GS=["get",...c0];new Set(GS);/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Io(){return Io=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Io.apply(this,arguments)}const cf=U.createContext(null),QS=U.createContext(null),lu=U.createContext(null),uu=U.createContext(null),ni=U.createContext({outlet:null,matches:[],isDataRoute:!1}),h0=U.createContext(null);function cu(){return U.useContext(uu)!=null}function d0(){return cu()||je(!1),U.useContext(uu).location}function f0(t){U.useContext(lu).static||U.useLayoutEffect(t)}function hu(){let{isDataRoute:t}=U.useContext(ni);return t?lx():YS()}function YS(){cu()||je(!1);let t=U.useContext(cf),{basename:e,future:n,navigator:r}=U.useContext(lu),{matches:i}=U.useContext(ni),{pathname:s}=d0(),o=JSON.stringify(zS(i,n.v7_relativeSplatPath)),u=U.useRef(!1);return f0(()=>{u.current=!0}),U.useCallback(function(c,d){if(d===void 0&&(d={}),!u.current)return;if(typeof c=="number"){r.go(c);return}let p=$S(c,JSON.parse(o),s,d.relative==="path");t==null&&e!=="/"&&(p.pathname=p.pathname==="/"?e:jr([e,p.pathname])),(d.replace?r.replace:r.push)(p,d.state,d)},[e,r,o,s,t])}function hf(){let{matches:t}=U.useContext(ni),e=t[t.length-1];return e?e.params:{}}function XS(t,e){return JS(t,e)}function JS(t,e,n,r){cu()||je(!1);let{navigator:i}=U.useContext(lu),{matches:s}=U.useContext(ni),o=s[s.length-1],u=o?o.params:{};o&&o.pathname;let l=o?o.pathnameBase:"/";o&&o.route;let c=d0(),d;if(e){var p;let C=typeof e=="string"?ti(e):e;l==="/"||(p=C.pathname)!=null&&p.startsWith(l)||je(!1),d=C}else d=c;let m=d.pathname||"/",_=m;if(l!=="/"){let C=l.replace(/^\//,"").split("/");_="/"+m.replace(/^\//,"").split("/").slice(C.length).join("/")}let x=TS(t,{pathname:_}),P=rx(x&&x.map(C=>Object.assign({},C,{params:Object.assign({},u,C.params),pathname:jr([l,i.encodeLocation?i.encodeLocation(C.pathname).pathname:C.pathname]),pathnameBase:C.pathnameBase==="/"?l:jr([l,i.encodeLocation?i.encodeLocation(C.pathnameBase).pathname:C.pathnameBase])})),s,n,r);return e&&P?U.createElement(uu.Provider,{value:{location:Io({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:er.Pop}},P):P}function ZS(){let t=ax(),e=KS(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return U.createElement(U.Fragment,null,U.createElement("h2",null,"Unexpected Application Error!"),U.createElement("h3",{style:{fontStyle:"italic"}},e),n?U.createElement("pre",{style:i},n):null,null)}const ex=U.createElement(ZS,null);class tx extends U.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?U.createElement(ni.Provider,{value:this.props.routeContext},U.createElement(h0.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function nx(t){let{routeContext:e,match:n,children:r}=t,i=U.useContext(cf);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),U.createElement(ni.Provider,{value:e},r)}function rx(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var s;if(!n)return null;if(n.errors)t=n.matches;else if((s=r)!=null&&s.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let o=t,u=(i=n)==null?void 0:i.errors;if(u!=null){let d=o.findIndex(p=>p.route.id&&(u==null?void 0:u[p.route.id])!==void 0);d>=0||je(!1),o=o.slice(0,Math.min(o.length,d+1))}let l=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let d=0;d<o.length;d++){let p=o[d];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(c=d),p.route.id){let{loaderData:m,errors:_}=n,x=p.route.loader&&m[p.route.id]===void 0&&(!_||_[p.route.id]===void 0);if(p.route.lazy||x){l=!0,c>=0?o=o.slice(0,c+1):o=[o[0]];break}}}return o.reduceRight((d,p,m)=>{let _,x=!1,P=null,C=null;n&&(_=u&&p.route.id?u[p.route.id]:void 0,P=p.route.errorElement||ex,l&&(c<0&&m===0?(ux("route-fallback"),x=!0,C=null):c===m&&(x=!0,C=p.route.hydrateFallbackElement||null)));let S=e.concat(o.slice(0,m+1)),w=()=>{let E;return _?E=P:x?E=C:p.route.Component?E=U.createElement(p.route.Component,null):p.route.element?E=p.route.element:E=d,U.createElement(nx,{match:p,routeContext:{outlet:d,matches:S,isDataRoute:n!=null},children:E})};return n&&(p.route.ErrorBoundary||p.route.errorElement||m===0)?U.createElement(tx,{location:n.location,revalidation:n.revalidation,component:P,error:_,children:w(),routeContext:{outlet:null,matches:S,isDataRoute:!0}}):w()},null)}var p0=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(p0||{}),m0=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(m0||{});function ix(t){let e=U.useContext(cf);return e||je(!1),e}function sx(t){let e=U.useContext(QS);return e||je(!1),e}function ox(t){let e=U.useContext(ni);return e||je(!1),e}function g0(t){let e=ox(),n=e.matches[e.matches.length-1];return n.route.id||je(!1),n.route.id}function ax(){var t;let e=U.useContext(h0),n=sx(),r=g0();return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function lx(){let{router:t}=ix(p0.UseNavigateStable),e=g0(m0.UseNavigateStable),n=U.useRef(!1);return f0(()=>{n.current=!0}),U.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,Io({fromRouteId:e},s)))},[t,e])}const wg={};function ux(t,e,n){wg[t]||(wg[t]=!0)}function cx(t,e){t==null||t.v7_startTransition,t==null||t.v7_relativeSplatPath}function Ls(t){je(!1)}function hx(t){let{basename:e="/",children:n=null,location:r,navigationType:i=er.Pop,navigator:s,static:o=!1,future:u}=t;cu()&&je(!1);let l=e.replace(/^\/*/,"/"),c=U.useMemo(()=>({basename:l,navigator:s,static:o,future:Io({v7_relativeSplatPath:!1},u)}),[l,u,s,o]);typeof r=="string"&&(r=ti(r));let{pathname:d="/",search:p="",hash:m="",state:_=null,key:x="default"}=r,P=U.useMemo(()=>{let C=u0(d,l);return C==null?null:{location:{pathname:C,search:p,hash:m,state:_,key:x},navigationType:i}},[l,d,p,m,_,x,i]);return P==null?null:U.createElement(lu.Provider,{value:c},U.createElement(uu.Provider,{children:n,value:P}))}function dx(t){let{children:e,location:n}=t;return XS(Uh(e),n)}new Promise(()=>{});function Uh(t,e){e===void 0&&(e=[]);let n=[];return U.Children.forEach(t,(r,i)=>{if(!U.isValidElement(r))return;let s=[...e,i];if(r.type===U.Fragment){n.push.apply(n,Uh(r.props.children,s));return}r.type!==Ls&&je(!1),!r.props.index||!r.props.children||je(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=Uh(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const fx="6";try{window.__reactRouterVersion=fx}catch{}const px="startTransition",Eg=lT[px];function mx(t){let{basename:e,children:n,future:r,window:i}=t,s=U.useRef();s.current==null&&(s.current=wS({window:i,v5Compat:!0}));let o=s.current,[u,l]=U.useState({action:o.action,location:o.location}),{v7_startTransition:c}=r||{},d=U.useCallback(p=>{c&&Eg?Eg(()=>l(p)):l(p)},[l,c]);return U.useLayoutEffect(()=>o.listen(d),[o,d]),U.useEffect(()=>cx(r),[r]),U.createElement(hx,{basename:e,children:n,location:u.location,navigationType:u.action,navigator:o,future:r})}var Ig;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(Ig||(Ig={}));var Tg;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(Tg||(Tg={}));/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y0=(...t)=>t.filter((e,n,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===n).join(" ").trim();/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gx=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yx=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,n,r)=>r?r.toUpperCase():n.toLowerCase());/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sg=t=>{const e=yx(t);return e.charAt(0).toUpperCase()+e.slice(1)};/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var vx={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _x=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0;return!1};/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wx=U.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:i="",children:s,iconNode:o,...u},l)=>U.createElement("svg",{ref:l,...vx,width:e,height:e,stroke:t,strokeWidth:r?Number(n)*24/Number(e):n,className:y0("lucide",i),...!s&&!_x(u)&&{"aria-hidden":"true"},...u},[...o.map(([c,d])=>U.createElement(c,d)),...Array.isArray(s)?s:[s]]));/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gt=(t,e)=>{const n=U.forwardRef(({className:r,...i},s)=>U.createElement(wx,{ref:s,iconNode:e,className:y0(`lucide-${gx(Sg(t))}`,`lucide-${t}`,r),...i}));return n.displayName=Sg(t),n};/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ex=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],v0=gt("chevron-right",Ex);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ix=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],xl=gt("circle-check-big",Ix);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tx=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]],Sx=gt("copy",Tx);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xx=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]],hr=gt("loader-circle",xx);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ax=[["path",{d:"M9 18V5l12-2v13",key:"1jmyc2"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["circle",{cx:"18",cy:"16",r:"3",key:"1hluhg"}]],du=gt("music",Ax);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kx=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],Rx=gt("plus",kx);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cx=[["rect",{width:"5",height:"5",x:"3",y:"3",rx:"1",key:"1tu5fj"}],["rect",{width:"5",height:"5",x:"16",y:"3",rx:"1",key:"1v8r4q"}],["rect",{width:"5",height:"5",x:"3",y:"16",rx:"1",key:"1x03jg"}],["path",{d:"M21 16h-3a2 2 0 0 0-2 2v3",key:"177gqh"}],["path",{d:"M21 21v.01",key:"ents32"}],["path",{d:"M12 7v3a2 2 0 0 1-2 2H7",key:"8crl2c"}],["path",{d:"M3 12h.01",key:"nlz23k"}],["path",{d:"M12 3h.01",key:"n36tog"}],["path",{d:"M12 16v.01",key:"133mhm"}],["path",{d:"M16 12h1",key:"1slzba"}],["path",{d:"M21 12v.01",key:"1lwtk9"}],["path",{d:"M12 21v-1",key:"1880an"}]],Px=gt("qr-code",Cx);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nx=[["path",{d:"M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8",key:"1p45f6"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}]],bx=gt("rotate-cw",Nx);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dx=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],Nc=gt("search",Dx);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ox=[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]],Mx=gt("send",Ox);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vx=[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]],Lx=gt("star",Vx);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jx=[["path",{d:"M10 14.66v1.626a2 2 0 0 1-.976 1.696A5 5 0 0 0 7 21.978",key:"1n3hpd"}],["path",{d:"M14 14.66v1.626a2 2 0 0 0 .976 1.696A5 5 0 0 1 17 21.978",key:"rfe1zi"}],["path",{d:"M18 9h1.5a1 1 0 0 0 0-5H18",key:"7xy6bh"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z",key:"1mhfuq"}],["path",{d:"M6 9H4.5a1 1 0 0 1 0-5H6",key:"tex48p"}]],Bh=gt("trophy",jx);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fx=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744",key:"16gr8j"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]],Ux=gt("users",Fx);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bx=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],zx=gt("x",Bx);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $x=[["path",{d:"M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17",key:"1q2vi4"}],["path",{d:"m10 15 5-3-5-3z",key:"1jp15x"}]],xg=gt("youtube",$x);var Ag={};/**
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
 */const _0=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Wx=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],u=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|u&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},w0={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,u=o?t[i+1]:0,l=i+2<t.length,c=l?t[i+2]:0,d=s>>2,p=(s&3)<<4|u>>4;let m=(u&15)<<2|c>>6,_=c&63;l||(_=64,o||(m=64)),r.push(n[d],n[p],n[m],n[_])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(_0(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Wx(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],u=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const p=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||u==null||c==null||p==null)throw new Hx;const m=s<<2|u>>4;if(r.push(m),c!==64){const _=u<<4&240|c>>2;if(r.push(_),p!==64){const x=c<<6&192|p;r.push(x)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Hx extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const qx=function(t){const e=_0(t);return w0.encodeByteArray(e,!0)},Al=function(t){return qx(t).replace(/\./g,"")},E0=function(t){try{return w0.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Kx(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Gx=()=>Kx().__FIREBASE_DEFAULTS__,Qx=()=>{if(typeof process>"u"||typeof Ag>"u")return;const t=Ag.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Yx=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&E0(t[1]);return e&&JSON.parse(e)},fu=()=>{try{return Gx()||Qx()||Yx()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},I0=t=>{var e,n;return(n=(e=fu())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Xx=t=>{const e=I0(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},T0=()=>{var t;return(t=fu())===null||t===void 0?void 0:t.config},S0=t=>{var e;return(e=fu())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class Jx{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function Zx(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Al(JSON.stringify(n)),Al(JSON.stringify(o)),""].join(".")}/**
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
 */function lt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function eA(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(lt())}function tA(){var t;const e=(t=fu())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function nA(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function x0(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function rA(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function iA(){const t=lt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function sA(){return!tA()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function A0(){try{return typeof indexedDB=="object"}catch{return!1}}function k0(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}function oA(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const aA="FirebaseError";class Xt extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=aA,Object.setPrototypeOf(this,Xt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ri.prototype.create)}}class ri{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?lA(s,r):"Error",u=`${this.serviceName}: ${o} (${i}).`;return new Xt(i,u,r)}}function lA(t,e){return t.replace(uA,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const uA=/\{\$([^}]+)}/g;function cA(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function qi(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(kg(s)&&kg(o)){if(!qi(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function kg(t){return t!==null&&typeof t=="object"}/**
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
 */function Vo(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function hA(t,e){const n=new dA(t,e);return n.subscribe.bind(n)}class dA{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");fA(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=bc),i.error===void 0&&(i.error=bc),i.complete===void 0&&(i.complete=bc);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function fA(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function bc(){}/**
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
 */const pA=1e3,mA=2,gA=4*60*60*1e3,yA=.5;function Rg(t,e=pA,n=mA){const r=e*Math.pow(n,t),i=Math.round(yA*r*(Math.random()-.5)*2);return Math.min(gA,r+i)}/**
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
 */function ut(t){return t&&t._delegate?t._delegate:t}class Yt{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */class vA{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Jx;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(wA(e))try{this.getOrInitializeService({instanceIdentifier:Pr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Pr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Pr){return this.instances.has(e)}getOptions(e=Pr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const u=this.normalizeInstanceIdentifier(s);r===u&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:_A(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Pr){return this.component?this.component.multipleInstances?e:Pr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function _A(t){return t===Pr?void 0:t}function wA(t){return t.instantiationMode==="EAGER"}/**
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
 */class EA{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new vA(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var oe;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(oe||(oe={}));const IA={debug:oe.DEBUG,verbose:oe.VERBOSE,info:oe.INFO,warn:oe.WARN,error:oe.ERROR,silent:oe.SILENT},TA=oe.INFO,SA={[oe.DEBUG]:"log",[oe.VERBOSE]:"log",[oe.INFO]:"info",[oe.WARN]:"warn",[oe.ERROR]:"error"},xA=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=SA[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class pu{constructor(e){this.name=e,this._logLevel=TA,this._logHandler=xA,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in oe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?IA[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,oe.DEBUG,...e),this._logHandler(this,oe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,oe.VERBOSE,...e),this._logHandler(this,oe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,oe.INFO,...e),this._logHandler(this,oe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,oe.WARN,...e),this._logHandler(this,oe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,oe.ERROR,...e),this._logHandler(this,oe.ERROR,...e)}}const AA=(t,e)=>e.some(n=>t instanceof n);let Cg,Pg;function kA(){return Cg||(Cg=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function RA(){return Pg||(Pg=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const R0=new WeakMap,zh=new WeakMap,C0=new WeakMap,Dc=new WeakMap,df=new WeakMap;function CA(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(dr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&R0.set(n,t)}).catch(()=>{}),df.set(e,t),e}function PA(t){if(zh.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});zh.set(t,e)}let $h={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return zh.get(t);if(e==="objectStoreNames")return t.objectStoreNames||C0.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return dr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function NA(t){$h=t($h)}function bA(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Oc(this),e,...n);return C0.set(r,e.sort?e.sort():[e]),dr(r)}:RA().includes(t)?function(...e){return t.apply(Oc(this),e),dr(R0.get(this))}:function(...e){return dr(t.apply(Oc(this),e))}}function DA(t){return typeof t=="function"?bA(t):(t instanceof IDBTransaction&&PA(t),AA(t,kA())?new Proxy(t,$h):t)}function dr(t){if(t instanceof IDBRequest)return CA(t);if(Dc.has(t))return Dc.get(t);const e=DA(t);return e!==t&&(Dc.set(t,e),df.set(e,t)),e}const Oc=t=>df.get(t);function P0(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),u=dr(o);return r&&o.addEventListener("upgradeneeded",l=>{r(dr(o.result),l.oldVersion,l.newVersion,dr(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),u.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),u}const OA=["get","getKey","getAll","getAllKeys","count"],MA=["put","add","delete","clear"],Mc=new Map;function Ng(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Mc.get(e))return Mc.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=MA.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||OA.includes(n)))return;const s=async function(o,...u){const l=this.transaction(o,i?"readwrite":"readonly");let c=l.store;return r&&(c=c.index(u.shift())),(await Promise.all([c[n](...u),i&&l.done]))[0]};return Mc.set(e,s),s}NA(t=>({...t,get:(e,n,r)=>Ng(e,n)||t.get(e,n,r),has:(e,n)=>!!Ng(e,n)||t.has(e,n)}));/**
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
 */class VA{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(LA(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function LA(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Wh="@firebase/app",bg="0.10.13";/**
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
 */const Dn=new pu("@firebase/app"),jA="@firebase/app-compat",FA="@firebase/analytics-compat",UA="@firebase/analytics",BA="@firebase/app-check-compat",zA="@firebase/app-check",$A="@firebase/auth",WA="@firebase/auth-compat",HA="@firebase/database",qA="@firebase/data-connect",KA="@firebase/database-compat",GA="@firebase/functions",QA="@firebase/functions-compat",YA="@firebase/installations",XA="@firebase/installations-compat",JA="@firebase/messaging",ZA="@firebase/messaging-compat",ek="@firebase/performance",tk="@firebase/performance-compat",nk="@firebase/remote-config",rk="@firebase/remote-config-compat",ik="@firebase/storage",sk="@firebase/storage-compat",ok="@firebase/firestore",ak="@firebase/vertexai-preview",lk="@firebase/firestore-compat",uk="firebase",ck="10.14.1";/**
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
 */const Hh="[DEFAULT]",hk={[Wh]:"fire-core",[jA]:"fire-core-compat",[UA]:"fire-analytics",[FA]:"fire-analytics-compat",[zA]:"fire-app-check",[BA]:"fire-app-check-compat",[$A]:"fire-auth",[WA]:"fire-auth-compat",[HA]:"fire-rtdb",[qA]:"fire-data-connect",[KA]:"fire-rtdb-compat",[GA]:"fire-fn",[QA]:"fire-fn-compat",[YA]:"fire-iid",[XA]:"fire-iid-compat",[JA]:"fire-fcm",[ZA]:"fire-fcm-compat",[ek]:"fire-perf",[tk]:"fire-perf-compat",[nk]:"fire-rc",[rk]:"fire-rc-compat",[ik]:"fire-gcs",[sk]:"fire-gcs-compat",[ok]:"fire-fst",[lk]:"fire-fst-compat",[ak]:"fire-vertex","fire-js":"fire-js",[uk]:"fire-js-all"};/**
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
 */const kl=new Map,dk=new Map,qh=new Map;function Dg(t,e){try{t.container.addComponent(e)}catch(n){Dn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function dn(t){const e=t.name;if(qh.has(e))return Dn.debug(`There were multiple attempts to register component ${e}.`),!1;qh.set(e,t);for(const n of kl.values())Dg(n,t);for(const n of dk.values())Dg(n,t);return!0}function ii(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function tr(t){return t.settings!==void 0}/**
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
 */const fk={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},fr=new ri("app","Firebase",fk);/**
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
 */class pk{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Yt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw fr.create("app-deleted",{appName:this._name})}}/**
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
 */const os=ck;function N0(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Hh,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw fr.create("bad-app-name",{appName:String(i)});if(n||(n=T0()),!n)throw fr.create("no-options");const s=kl.get(i);if(s){if(qi(n,s.options)&&qi(r,s.config))return s;throw fr.create("duplicate-app",{appName:i})}const o=new EA(i);for(const l of qh.values())o.addComponent(l);const u=new pk(n,r,o);return kl.set(i,u),u}function ff(t=Hh){const e=kl.get(t);if(!e&&t===Hh&&T0())return N0();if(!e)throw fr.create("no-app",{appName:t});return e}function jt(t,e,n){var r;let i=(r=hk[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const u=[`Unable to register library "${i}" with version "${e}":`];s&&u.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&u.push("and"),o&&u.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Dn.warn(u.join(" "));return}dn(new Yt(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const mk="firebase-heartbeat-database",gk=1,To="firebase-heartbeat-store";let Vc=null;function b0(){return Vc||(Vc=P0(mk,gk,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(To)}catch(n){console.warn(n)}}}}).catch(t=>{throw fr.create("idb-open",{originalErrorMessage:t.message})})),Vc}async function yk(t){try{const n=(await b0()).transaction(To),r=await n.objectStore(To).get(D0(t));return await n.done,r}catch(e){if(e instanceof Xt)Dn.warn(e.message);else{const n=fr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Dn.warn(n.message)}}}async function Og(t,e){try{const r=(await b0()).transaction(To,"readwrite");await r.objectStore(To).put(e,D0(t)),await r.done}catch(n){if(n instanceof Xt)Dn.warn(n.message);else{const r=fr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Dn.warn(r.message)}}}function D0(t){return`${t.name}!${t.options.appId}`}/**
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
 */const vk=1024,_k=30*24*60*60*1e3;class wk{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Ik(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Mg();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const u=new Date(o.date).valueOf();return Date.now()-u<=_k}),this._storage.overwrite(this._heartbeatsCache))}catch(r){Dn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Mg(),{heartbeatsToSend:r,unsentEntries:i}=Ek(this._heartbeatsCache.heartbeats),s=Al(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return Dn.warn(n),""}}}function Mg(){return new Date().toISOString().substring(0,10)}function Ek(t,e=vk){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Vg(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Vg(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Ik{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return A0()?k0().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await yk(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Og(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Og(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Vg(t){return Al(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function Tk(t){dn(new Yt("platform-logger",e=>new VA(e),"PRIVATE")),dn(new Yt("heartbeat",e=>new wk(e),"PRIVATE")),jt(Wh,bg,t),jt(Wh,bg,"esm2017"),jt("fire-js","")}Tk("");var Lg=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Fr,O0;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(I,v){function T(){}T.prototype=v.prototype,I.D=v.prototype,I.prototype=new T,I.prototype.constructor=I,I.C=function(A,R,N){for(var k=Array(arguments.length-2),pe=2;pe<arguments.length;pe++)k[pe-2]=arguments[pe];return v.prototype[R].apply(A,k)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(I,v,T){T||(T=0);var A=Array(16);if(typeof v=="string")for(var R=0;16>R;++R)A[R]=v.charCodeAt(T++)|v.charCodeAt(T++)<<8|v.charCodeAt(T++)<<16|v.charCodeAt(T++)<<24;else for(R=0;16>R;++R)A[R]=v[T++]|v[T++]<<8|v[T++]<<16|v[T++]<<24;v=I.g[0],T=I.g[1],R=I.g[2];var N=I.g[3],k=v+(N^T&(R^N))+A[0]+3614090360&4294967295;v=T+(k<<7&4294967295|k>>>25),k=N+(R^v&(T^R))+A[1]+3905402710&4294967295,N=v+(k<<12&4294967295|k>>>20),k=R+(T^N&(v^T))+A[2]+606105819&4294967295,R=N+(k<<17&4294967295|k>>>15),k=T+(v^R&(N^v))+A[3]+3250441966&4294967295,T=R+(k<<22&4294967295|k>>>10),k=v+(N^T&(R^N))+A[4]+4118548399&4294967295,v=T+(k<<7&4294967295|k>>>25),k=N+(R^v&(T^R))+A[5]+1200080426&4294967295,N=v+(k<<12&4294967295|k>>>20),k=R+(T^N&(v^T))+A[6]+2821735955&4294967295,R=N+(k<<17&4294967295|k>>>15),k=T+(v^R&(N^v))+A[7]+4249261313&4294967295,T=R+(k<<22&4294967295|k>>>10),k=v+(N^T&(R^N))+A[8]+1770035416&4294967295,v=T+(k<<7&4294967295|k>>>25),k=N+(R^v&(T^R))+A[9]+2336552879&4294967295,N=v+(k<<12&4294967295|k>>>20),k=R+(T^N&(v^T))+A[10]+4294925233&4294967295,R=N+(k<<17&4294967295|k>>>15),k=T+(v^R&(N^v))+A[11]+2304563134&4294967295,T=R+(k<<22&4294967295|k>>>10),k=v+(N^T&(R^N))+A[12]+1804603682&4294967295,v=T+(k<<7&4294967295|k>>>25),k=N+(R^v&(T^R))+A[13]+4254626195&4294967295,N=v+(k<<12&4294967295|k>>>20),k=R+(T^N&(v^T))+A[14]+2792965006&4294967295,R=N+(k<<17&4294967295|k>>>15),k=T+(v^R&(N^v))+A[15]+1236535329&4294967295,T=R+(k<<22&4294967295|k>>>10),k=v+(R^N&(T^R))+A[1]+4129170786&4294967295,v=T+(k<<5&4294967295|k>>>27),k=N+(T^R&(v^T))+A[6]+3225465664&4294967295,N=v+(k<<9&4294967295|k>>>23),k=R+(v^T&(N^v))+A[11]+643717713&4294967295,R=N+(k<<14&4294967295|k>>>18),k=T+(N^v&(R^N))+A[0]+3921069994&4294967295,T=R+(k<<20&4294967295|k>>>12),k=v+(R^N&(T^R))+A[5]+3593408605&4294967295,v=T+(k<<5&4294967295|k>>>27),k=N+(T^R&(v^T))+A[10]+38016083&4294967295,N=v+(k<<9&4294967295|k>>>23),k=R+(v^T&(N^v))+A[15]+3634488961&4294967295,R=N+(k<<14&4294967295|k>>>18),k=T+(N^v&(R^N))+A[4]+3889429448&4294967295,T=R+(k<<20&4294967295|k>>>12),k=v+(R^N&(T^R))+A[9]+568446438&4294967295,v=T+(k<<5&4294967295|k>>>27),k=N+(T^R&(v^T))+A[14]+3275163606&4294967295,N=v+(k<<9&4294967295|k>>>23),k=R+(v^T&(N^v))+A[3]+4107603335&4294967295,R=N+(k<<14&4294967295|k>>>18),k=T+(N^v&(R^N))+A[8]+1163531501&4294967295,T=R+(k<<20&4294967295|k>>>12),k=v+(R^N&(T^R))+A[13]+2850285829&4294967295,v=T+(k<<5&4294967295|k>>>27),k=N+(T^R&(v^T))+A[2]+4243563512&4294967295,N=v+(k<<9&4294967295|k>>>23),k=R+(v^T&(N^v))+A[7]+1735328473&4294967295,R=N+(k<<14&4294967295|k>>>18),k=T+(N^v&(R^N))+A[12]+2368359562&4294967295,T=R+(k<<20&4294967295|k>>>12),k=v+(T^R^N)+A[5]+4294588738&4294967295,v=T+(k<<4&4294967295|k>>>28),k=N+(v^T^R)+A[8]+2272392833&4294967295,N=v+(k<<11&4294967295|k>>>21),k=R+(N^v^T)+A[11]+1839030562&4294967295,R=N+(k<<16&4294967295|k>>>16),k=T+(R^N^v)+A[14]+4259657740&4294967295,T=R+(k<<23&4294967295|k>>>9),k=v+(T^R^N)+A[1]+2763975236&4294967295,v=T+(k<<4&4294967295|k>>>28),k=N+(v^T^R)+A[4]+1272893353&4294967295,N=v+(k<<11&4294967295|k>>>21),k=R+(N^v^T)+A[7]+4139469664&4294967295,R=N+(k<<16&4294967295|k>>>16),k=T+(R^N^v)+A[10]+3200236656&4294967295,T=R+(k<<23&4294967295|k>>>9),k=v+(T^R^N)+A[13]+681279174&4294967295,v=T+(k<<4&4294967295|k>>>28),k=N+(v^T^R)+A[0]+3936430074&4294967295,N=v+(k<<11&4294967295|k>>>21),k=R+(N^v^T)+A[3]+3572445317&4294967295,R=N+(k<<16&4294967295|k>>>16),k=T+(R^N^v)+A[6]+76029189&4294967295,T=R+(k<<23&4294967295|k>>>9),k=v+(T^R^N)+A[9]+3654602809&4294967295,v=T+(k<<4&4294967295|k>>>28),k=N+(v^T^R)+A[12]+3873151461&4294967295,N=v+(k<<11&4294967295|k>>>21),k=R+(N^v^T)+A[15]+530742520&4294967295,R=N+(k<<16&4294967295|k>>>16),k=T+(R^N^v)+A[2]+3299628645&4294967295,T=R+(k<<23&4294967295|k>>>9),k=v+(R^(T|~N))+A[0]+4096336452&4294967295,v=T+(k<<6&4294967295|k>>>26),k=N+(T^(v|~R))+A[7]+1126891415&4294967295,N=v+(k<<10&4294967295|k>>>22),k=R+(v^(N|~T))+A[14]+2878612391&4294967295,R=N+(k<<15&4294967295|k>>>17),k=T+(N^(R|~v))+A[5]+4237533241&4294967295,T=R+(k<<21&4294967295|k>>>11),k=v+(R^(T|~N))+A[12]+1700485571&4294967295,v=T+(k<<6&4294967295|k>>>26),k=N+(T^(v|~R))+A[3]+2399980690&4294967295,N=v+(k<<10&4294967295|k>>>22),k=R+(v^(N|~T))+A[10]+4293915773&4294967295,R=N+(k<<15&4294967295|k>>>17),k=T+(N^(R|~v))+A[1]+2240044497&4294967295,T=R+(k<<21&4294967295|k>>>11),k=v+(R^(T|~N))+A[8]+1873313359&4294967295,v=T+(k<<6&4294967295|k>>>26),k=N+(T^(v|~R))+A[15]+4264355552&4294967295,N=v+(k<<10&4294967295|k>>>22),k=R+(v^(N|~T))+A[6]+2734768916&4294967295,R=N+(k<<15&4294967295|k>>>17),k=T+(N^(R|~v))+A[13]+1309151649&4294967295,T=R+(k<<21&4294967295|k>>>11),k=v+(R^(T|~N))+A[4]+4149444226&4294967295,v=T+(k<<6&4294967295|k>>>26),k=N+(T^(v|~R))+A[11]+3174756917&4294967295,N=v+(k<<10&4294967295|k>>>22),k=R+(v^(N|~T))+A[2]+718787259&4294967295,R=N+(k<<15&4294967295|k>>>17),k=T+(N^(R|~v))+A[9]+3951481745&4294967295,I.g[0]=I.g[0]+v&4294967295,I.g[1]=I.g[1]+(R+(k<<21&4294967295|k>>>11))&4294967295,I.g[2]=I.g[2]+R&4294967295,I.g[3]=I.g[3]+N&4294967295}r.prototype.u=function(I,v){v===void 0&&(v=I.length);for(var T=v-this.blockSize,A=this.B,R=this.h,N=0;N<v;){if(R==0)for(;N<=T;)i(this,I,N),N+=this.blockSize;if(typeof I=="string"){for(;N<v;)if(A[R++]=I.charCodeAt(N++),R==this.blockSize){i(this,A),R=0;break}}else for(;N<v;)if(A[R++]=I[N++],R==this.blockSize){i(this,A),R=0;break}}this.h=R,this.o+=v},r.prototype.v=function(){var I=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);I[0]=128;for(var v=1;v<I.length-8;++v)I[v]=0;var T=8*this.o;for(v=I.length-8;v<I.length;++v)I[v]=T&255,T/=256;for(this.u(I),I=Array(16),v=T=0;4>v;++v)for(var A=0;32>A;A+=8)I[T++]=this.g[v]>>>A&255;return I};function s(I,v){var T=u;return Object.prototype.hasOwnProperty.call(T,I)?T[I]:T[I]=v(I)}function o(I,v){this.h=v;for(var T=[],A=!0,R=I.length-1;0<=R;R--){var N=I[R]|0;A&&N==v||(T[R]=N,A=!1)}this.g=T}var u={};function l(I){return-128<=I&&128>I?s(I,function(v){return new o([v|0],0>v?-1:0)}):new o([I|0],0>I?-1:0)}function c(I){if(isNaN(I)||!isFinite(I))return p;if(0>I)return C(c(-I));for(var v=[],T=1,A=0;I>=T;A++)v[A]=I/T|0,T*=4294967296;return new o(v,0)}function d(I,v){if(I.length==0)throw Error("number format error: empty string");if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(I.charAt(0)=="-")return C(d(I.substring(1),v));if(0<=I.indexOf("-"))throw Error('number format error: interior "-" character');for(var T=c(Math.pow(v,8)),A=p,R=0;R<I.length;R+=8){var N=Math.min(8,I.length-R),k=parseInt(I.substring(R,R+N),v);8>N?(N=c(Math.pow(v,N)),A=A.j(N).add(c(k))):(A=A.j(T),A=A.add(c(k)))}return A}var p=l(0),m=l(1),_=l(16777216);t=o.prototype,t.m=function(){if(P(this))return-C(this).m();for(var I=0,v=1,T=0;T<this.g.length;T++){var A=this.i(T);I+=(0<=A?A:4294967296+A)*v,v*=4294967296}return I},t.toString=function(I){if(I=I||10,2>I||36<I)throw Error("radix out of range: "+I);if(x(this))return"0";if(P(this))return"-"+C(this).toString(I);for(var v=c(Math.pow(I,6)),T=this,A="";;){var R=D(T,v).g;T=S(T,R.j(v));var N=((0<T.g.length?T.g[0]:T.h)>>>0).toString(I);if(T=R,x(T))return N+A;for(;6>N.length;)N="0"+N;A=N+A}},t.i=function(I){return 0>I?0:I<this.g.length?this.g[I]:this.h};function x(I){if(I.h!=0)return!1;for(var v=0;v<I.g.length;v++)if(I.g[v]!=0)return!1;return!0}function P(I){return I.h==-1}t.l=function(I){return I=S(this,I),P(I)?-1:x(I)?0:1};function C(I){for(var v=I.g.length,T=[],A=0;A<v;A++)T[A]=~I.g[A];return new o(T,~I.h).add(m)}t.abs=function(){return P(this)?C(this):this},t.add=function(I){for(var v=Math.max(this.g.length,I.g.length),T=[],A=0,R=0;R<=v;R++){var N=A+(this.i(R)&65535)+(I.i(R)&65535),k=(N>>>16)+(this.i(R)>>>16)+(I.i(R)>>>16);A=k>>>16,N&=65535,k&=65535,T[R]=k<<16|N}return new o(T,T[T.length-1]&-2147483648?-1:0)};function S(I,v){return I.add(C(v))}t.j=function(I){if(x(this)||x(I))return p;if(P(this))return P(I)?C(this).j(C(I)):C(C(this).j(I));if(P(I))return C(this.j(C(I)));if(0>this.l(_)&&0>I.l(_))return c(this.m()*I.m());for(var v=this.g.length+I.g.length,T=[],A=0;A<2*v;A++)T[A]=0;for(A=0;A<this.g.length;A++)for(var R=0;R<I.g.length;R++){var N=this.i(A)>>>16,k=this.i(A)&65535,pe=I.i(R)>>>16,K=I.i(R)&65535;T[2*A+2*R]+=k*K,w(T,2*A+2*R),T[2*A+2*R+1]+=N*K,w(T,2*A+2*R+1),T[2*A+2*R+1]+=k*pe,w(T,2*A+2*R+1),T[2*A+2*R+2]+=N*pe,w(T,2*A+2*R+2)}for(A=0;A<v;A++)T[A]=T[2*A+1]<<16|T[2*A];for(A=v;A<2*v;A++)T[A]=0;return new o(T,0)};function w(I,v){for(;(I[v]&65535)!=I[v];)I[v+1]+=I[v]>>>16,I[v]&=65535,v++}function E(I,v){this.g=I,this.h=v}function D(I,v){if(x(v))throw Error("division by zero");if(x(I))return new E(p,p);if(P(I))return v=D(C(I),v),new E(C(v.g),C(v.h));if(P(v))return v=D(I,C(v)),new E(C(v.g),v.h);if(30<I.g.length){if(P(I)||P(v))throw Error("slowDivide_ only works with positive integers.");for(var T=m,A=v;0>=A.l(I);)T=M(T),A=M(A);var R=V(T,1),N=V(A,1);for(A=V(A,2),T=V(T,2);!x(A);){var k=N.add(A);0>=k.l(I)&&(R=R.add(T),N=k),A=V(A,1),T=V(T,1)}return v=S(I,R.j(v)),new E(R,v)}for(R=p;0<=I.l(v);){for(T=Math.max(1,Math.floor(I.m()/v.m())),A=Math.ceil(Math.log(T)/Math.LN2),A=48>=A?1:Math.pow(2,A-48),N=c(T),k=N.j(v);P(k)||0<k.l(I);)T-=A,N=c(T),k=N.j(v);x(N)&&(N=m),R=R.add(N),I=S(I,k)}return new E(R,I)}t.A=function(I){return D(this,I).h},t.and=function(I){for(var v=Math.max(this.g.length,I.g.length),T=[],A=0;A<v;A++)T[A]=this.i(A)&I.i(A);return new o(T,this.h&I.h)},t.or=function(I){for(var v=Math.max(this.g.length,I.g.length),T=[],A=0;A<v;A++)T[A]=this.i(A)|I.i(A);return new o(T,this.h|I.h)},t.xor=function(I){for(var v=Math.max(this.g.length,I.g.length),T=[],A=0;A<v;A++)T[A]=this.i(A)^I.i(A);return new o(T,this.h^I.h)};function M(I){for(var v=I.g.length+1,T=[],A=0;A<v;A++)T[A]=I.i(A)<<1|I.i(A-1)>>>31;return new o(T,I.h)}function V(I,v){var T=v>>5;v%=32;for(var A=I.g.length-T,R=[],N=0;N<A;N++)R[N]=0<v?I.i(N+T)>>>v|I.i(N+T+1)<<32-v:I.i(N+T);return new o(R,I.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,O0=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=c,o.fromString=d,Fr=o}).apply(typeof Lg<"u"?Lg:typeof self<"u"?self:typeof window<"u"?window:{});var Ra=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var M0,js,V0,qa,Kh,L0,j0,F0;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,h,f){return a==Array.prototype||a==Object.prototype||(a[h]=f.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Ra=="object"&&Ra];for(var h=0;h<a.length;++h){var f=a[h];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var r=n(this);function i(a,h){if(h)e:{var f=r;a=a.split(".");for(var g=0;g<a.length-1;g++){var b=a[g];if(!(b in f))break e;f=f[b]}a=a[a.length-1],g=f[a],h=h(g),h!=g&&h!=null&&e(f,a,{configurable:!0,writable:!0,value:h})}}function s(a,h){a instanceof String&&(a+="");var f=0,g=!1,b={next:function(){if(!g&&f<a.length){var O=f++;return{value:h(O,a[O]),done:!1}}return g=!0,{done:!0,value:void 0}}};return b[Symbol.iterator]=function(){return b},b}i("Array.prototype.values",function(a){return a||function(){return s(this,function(h,f){return f})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},u=this||self;function l(a){var h=typeof a;return h=h!="object"?h:a?Array.isArray(a)?"array":h:"null",h=="array"||h=="object"&&typeof a.length=="number"}function c(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function d(a,h,f){return a.call.apply(a.bind,arguments)}function p(a,h,f){if(!a)throw Error();if(2<arguments.length){var g=Array.prototype.slice.call(arguments,2);return function(){var b=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(b,g),a.apply(h,b)}}return function(){return a.apply(h,arguments)}}function m(a,h,f){return m=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?d:p,m.apply(null,arguments)}function _(a,h){var f=Array.prototype.slice.call(arguments,1);return function(){var g=f.slice();return g.push.apply(g,arguments),a.apply(this,g)}}function x(a,h){function f(){}f.prototype=h.prototype,a.aa=h.prototype,a.prototype=new f,a.prototype.constructor=a,a.Qb=function(g,b,O){for(var z=Array(arguments.length-2),ge=2;ge<arguments.length;ge++)z[ge-2]=arguments[ge];return h.prototype[b].apply(g,z)}}function P(a){const h=a.length;if(0<h){const f=Array(h);for(let g=0;g<h;g++)f[g]=a[g];return f}return[]}function C(a,h){for(let f=1;f<arguments.length;f++){const g=arguments[f];if(l(g)){const b=a.length||0,O=g.length||0;a.length=b+O;for(let z=0;z<O;z++)a[b+z]=g[z]}else a.push(g)}}class S{constructor(h,f){this.i=h,this.j=f,this.h=0,this.g=null}get(){let h;return 0<this.h?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function w(a){return/^[\s\xa0]*$/.test(a)}function E(){var a=u.navigator;return a&&(a=a.userAgent)?a:""}function D(a){return D[" "](a),a}D[" "]=function(){};var M=E().indexOf("Gecko")!=-1&&!(E().toLowerCase().indexOf("webkit")!=-1&&E().indexOf("Edge")==-1)&&!(E().indexOf("Trident")!=-1||E().indexOf("MSIE")!=-1)&&E().indexOf("Edge")==-1;function V(a,h,f){for(const g in a)h.call(f,a[g],g,a)}function I(a,h){for(const f in a)h.call(void 0,a[f],f,a)}function v(a){const h={};for(const f in a)h[f]=a[f];return h}const T="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function A(a,h){let f,g;for(let b=1;b<arguments.length;b++){g=arguments[b];for(f in g)a[f]=g[f];for(let O=0;O<T.length;O++)f=T[O],Object.prototype.hasOwnProperty.call(g,f)&&(a[f]=g[f])}}function R(a){var h=1;a=a.split(":");const f=[];for(;0<h&&a.length;)f.push(a.shift()),h--;return a.length&&f.push(a.join(":")),f}function N(a){u.setTimeout(()=>{throw a},0)}function k(){var a=W;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class pe{constructor(){this.h=this.g=null}add(h,f){const g=K.get();g.set(h,f),this.h?this.h.next=g:this.g=g,this.h=g}}var K=new S(()=>new Q,a=>a.reset());class Q{constructor(){this.next=this.g=this.h=null}set(h,f){this.h=h,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let q,j=!1,W=new pe,X=()=>{const a=u.Promise.resolve(void 0);q=()=>{a.then(ue)}};var ue=()=>{for(var a;a=k();){try{a.h.call(a.g)}catch(f){N(f)}var h=K;h.j(a),100>h.h&&(h.h++,a.next=h.g,h.g=a)}j=!1};function se(){this.s=this.s,this.C=this.C}se.prototype.s=!1,se.prototype.ma=function(){this.s||(this.s=!0,this.N())},se.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function me(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}me.prototype.h=function(){this.defaultPrevented=!0};var Bt=function(){if(!u.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const f=()=>{};u.addEventListener("test",f,h),u.removeEventListener("test",f,h)}catch{}return a}();function mn(a,h){if(me.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var f=this.type=a.type,g=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget){if(M){e:{try{D(h.nodeName);var b=!0;break e}catch{}b=!1}b||(h=null)}}else f=="mouseover"?h=a.fromElement:f=="mouseout"&&(h=a.toElement);this.relatedTarget=h,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:gn[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&mn.aa.h.call(this)}}x(mn,me);var gn={2:"touch",3:"pen",4:"mouse"};mn.prototype.h=function(){mn.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var yn="closure_listenable_"+(1e6*Math.random()|0),pI=0;function mI(a,h,f,g,b){this.listener=a,this.proxy=null,this.src=h,this.type=f,this.capture=!!g,this.ha=b,this.key=++pI,this.da=this.fa=!1}function Ko(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Go(a){this.src=a,this.g={},this.h=0}Go.prototype.add=function(a,h,f,g,b){var O=a.toString();a=this.g[O],a||(a=this.g[O]=[],this.h++);var z=Vu(a,h,g,b);return-1<z?(h=a[z],f||(h.fa=!1)):(h=new mI(h,this.src,O,!!g,b),h.fa=f,a.push(h)),h};function Mu(a,h){var f=h.type;if(f in a.g){var g=a.g[f],b=Array.prototype.indexOf.call(g,h,void 0),O;(O=0<=b)&&Array.prototype.splice.call(g,b,1),O&&(Ko(h),a.g[f].length==0&&(delete a.g[f],a.h--))}}function Vu(a,h,f,g){for(var b=0;b<a.length;++b){var O=a[b];if(!O.da&&O.listener==h&&O.capture==!!f&&O.ha==g)return b}return-1}var Lu="closure_lm_"+(1e6*Math.random()|0),ju={};function ap(a,h,f,g,b){if(Array.isArray(h)){for(var O=0;O<h.length;O++)ap(a,h[O],f,g,b);return null}return f=cp(f),a&&a[yn]?a.K(h,f,c(g)?!!g.capture:!1,b):gI(a,h,f,!1,g,b)}function gI(a,h,f,g,b,O){if(!h)throw Error("Invalid event type");var z=c(b)?!!b.capture:!!b,ge=Uu(a);if(ge||(a[Lu]=ge=new Go(a)),f=ge.add(h,f,g,z,O),f.proxy)return f;if(g=yI(),f.proxy=g,g.src=a,g.listener=f,a.addEventListener)Bt||(b=z),b===void 0&&(b=!1),a.addEventListener(h.toString(),g,b);else if(a.attachEvent)a.attachEvent(up(h.toString()),g);else if(a.addListener&&a.removeListener)a.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return f}function yI(){function a(f){return h.call(a.src,a.listener,f)}const h=vI;return a}function lp(a,h,f,g,b){if(Array.isArray(h))for(var O=0;O<h.length;O++)lp(a,h[O],f,g,b);else g=c(g)?!!g.capture:!!g,f=cp(f),a&&a[yn]?(a=a.i,h=String(h).toString(),h in a.g&&(O=a.g[h],f=Vu(O,f,g,b),-1<f&&(Ko(O[f]),Array.prototype.splice.call(O,f,1),O.length==0&&(delete a.g[h],a.h--)))):a&&(a=Uu(a))&&(h=a.g[h.toString()],a=-1,h&&(a=Vu(h,f,g,b)),(f=-1<a?h[a]:null)&&Fu(f))}function Fu(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[yn])Mu(h.i,a);else{var f=a.type,g=a.proxy;h.removeEventListener?h.removeEventListener(f,g,a.capture):h.detachEvent?h.detachEvent(up(f),g):h.addListener&&h.removeListener&&h.removeListener(g),(f=Uu(h))?(Mu(f,a),f.h==0&&(f.src=null,h[Lu]=null)):Ko(a)}}}function up(a){return a in ju?ju[a]:ju[a]="on"+a}function vI(a,h){if(a.da)a=!0;else{h=new mn(h,this);var f=a.listener,g=a.ha||a.src;a.fa&&Fu(a),a=f.call(g,h)}return a}function Uu(a){return a=a[Lu],a instanceof Go?a:null}var Bu="__closure_events_fn_"+(1e9*Math.random()>>>0);function cp(a){return typeof a=="function"?a:(a[Bu]||(a[Bu]=function(h){return a.handleEvent(h)}),a[Bu])}function Je(){se.call(this),this.i=new Go(this),this.M=this,this.F=null}x(Je,se),Je.prototype[yn]=!0,Je.prototype.removeEventListener=function(a,h,f,g){lp(this,a,h,f,g)};function ct(a,h){var f,g=a.F;if(g)for(f=[];g;g=g.F)f.push(g);if(a=a.M,g=h.type||h,typeof h=="string")h=new me(h,a);else if(h instanceof me)h.target=h.target||a;else{var b=h;h=new me(g,a),A(h,b)}if(b=!0,f)for(var O=f.length-1;0<=O;O--){var z=h.g=f[O];b=Qo(z,g,!0,h)&&b}if(z=h.g=a,b=Qo(z,g,!0,h)&&b,b=Qo(z,g,!1,h)&&b,f)for(O=0;O<f.length;O++)z=h.g=f[O],b=Qo(z,g,!1,h)&&b}Je.prototype.N=function(){if(Je.aa.N.call(this),this.i){var a=this.i,h;for(h in a.g){for(var f=a.g[h],g=0;g<f.length;g++)Ko(f[g]);delete a.g[h],a.h--}}this.F=null},Je.prototype.K=function(a,h,f,g){return this.i.add(String(a),h,!1,f,g)},Je.prototype.L=function(a,h,f,g){return this.i.add(String(a),h,!0,f,g)};function Qo(a,h,f,g){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();for(var b=!0,O=0;O<h.length;++O){var z=h[O];if(z&&!z.da&&z.capture==f){var ge=z.listener,$e=z.ha||z.src;z.fa&&Mu(a.i,z),b=ge.call($e,g)!==!1&&b}}return b&&!g.defaultPrevented}function hp(a,h,f){if(typeof a=="function")f&&(a=m(a,f));else if(a&&typeof a.handleEvent=="function")a=m(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(h)?-1:u.setTimeout(a,h||0)}function dp(a){a.g=hp(()=>{a.g=null,a.i&&(a.i=!1,dp(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class _I extends se{constructor(h,f){super(),this.m=h,this.l=f,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:dp(this)}N(){super.N(),this.g&&(u.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function hs(a){se.call(this),this.h=a,this.g={}}x(hs,se);var fp=[];function pp(a){V(a.g,function(h,f){this.g.hasOwnProperty(f)&&Fu(h)},a),a.g={}}hs.prototype.N=function(){hs.aa.N.call(this),pp(this)},hs.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var zu=u.JSON.stringify,wI=u.JSON.parse,EI=class{stringify(a){return u.JSON.stringify(a,void 0)}parse(a){return u.JSON.parse(a,void 0)}};function $u(){}$u.prototype.h=null;function mp(a){return a.h||(a.h=a.i())}function gp(){}var ds={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Wu(){me.call(this,"d")}x(Wu,me);function Hu(){me.call(this,"c")}x(Hu,me);var Sr={},yp=null;function Yo(){return yp=yp||new Je}Sr.La="serverreachability";function vp(a){me.call(this,Sr.La,a)}x(vp,me);function fs(a){const h=Yo();ct(h,new vp(h))}Sr.STAT_EVENT="statevent";function _p(a,h){me.call(this,Sr.STAT_EVENT,a),this.stat=h}x(_p,me);function ht(a){const h=Yo();ct(h,new _p(h,a))}Sr.Ma="timingevent";function wp(a,h){me.call(this,Sr.Ma,a),this.size=h}x(wp,me);function ps(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return u.setTimeout(function(){a()},h)}function ms(){this.g=!0}ms.prototype.xa=function(){this.g=!1};function II(a,h,f,g,b,O){a.info(function(){if(a.g)if(O)for(var z="",ge=O.split("&"),$e=0;$e<ge.length;$e++){var ce=ge[$e].split("=");if(1<ce.length){var Ze=ce[0];ce=ce[1];var et=Ze.split("_");z=2<=et.length&&et[1]=="type"?z+(Ze+"="+ce+"&"):z+(Ze+"=redacted&")}}else z=null;else z=O;return"XMLHTTP REQ ("+g+") [attempt "+b+"]: "+h+`
`+f+`
`+z})}function TI(a,h,f,g,b,O,z){a.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+b+"]: "+h+`
`+f+`
`+O+" "+z})}function ai(a,h,f,g){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+xI(a,f)+(g?" "+g:"")})}function SI(a,h){a.info(function(){return"TIMEOUT: "+h})}ms.prototype.info=function(){};function xI(a,h){if(!a.g)return h;if(!h)return null;try{var f=JSON.parse(h);if(f){for(a=0;a<f.length;a++)if(Array.isArray(f[a])){var g=f[a];if(!(2>g.length)){var b=g[1];if(Array.isArray(b)&&!(1>b.length)){var O=b[0];if(O!="noop"&&O!="stop"&&O!="close")for(var z=1;z<b.length;z++)b[z]=""}}}}return zu(f)}catch{return h}}var Xo={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Ep={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},qu;function Jo(){}x(Jo,$u),Jo.prototype.g=function(){return new XMLHttpRequest},Jo.prototype.i=function(){return{}},qu=new Jo;function Fn(a,h,f,g){this.j=a,this.i=h,this.l=f,this.R=g||1,this.U=new hs(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Ip}function Ip(){this.i=null,this.g="",this.h=!1}var Tp={},Ku={};function Gu(a,h,f){a.L=1,a.v=na(vn(h)),a.m=f,a.P=!0,Sp(a,null)}function Sp(a,h){a.F=Date.now(),Zo(a),a.A=vn(a.v);var f=a.A,g=a.R;Array.isArray(g)||(g=[String(g)]),jp(f.i,"t",g),a.C=0,f=a.j.J,a.h=new Ip,a.g=nm(a.j,f?h:null,!a.m),0<a.O&&(a.M=new _I(m(a.Y,a,a.g),a.O)),h=a.U,f=a.g,g=a.ca;var b="readystatechange";Array.isArray(b)||(b&&(fp[0]=b.toString()),b=fp);for(var O=0;O<b.length;O++){var z=ap(f,b[O],g||h.handleEvent,!1,h.h||h);if(!z)break;h.g[z.key]=z}h=a.H?v(a.H):{},a.m?(a.u||(a.u="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,h)):(a.u="GET",a.g.ea(a.A,a.u,null,h)),fs(),II(a.i,a.u,a.A,a.l,a.R,a.m)}Fn.prototype.ca=function(a){a=a.target;const h=this.M;h&&_n(a)==3?h.j():this.Y(a)},Fn.prototype.Y=function(a){try{if(a==this.g)e:{const et=_n(this.g);var h=this.g.Ba();const ci=this.g.Z();if(!(3>et)&&(et!=3||this.g&&(this.h.h||this.g.oa()||Hp(this.g)))){this.J||et!=4||h==7||(h==8||0>=ci?fs(3):fs(2)),Qu(this);var f=this.g.Z();this.X=f;t:if(xp(this)){var g=Hp(this.g);a="";var b=g.length,O=_n(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){xr(this),gs(this);var z="";break t}this.h.i=new u.TextDecoder}for(h=0;h<b;h++)this.h.h=!0,a+=this.h.i.decode(g[h],{stream:!(O&&h==b-1)});g.length=0,this.h.g+=a,this.C=0,z=this.h.g}else z=this.g.oa();if(this.o=f==200,TI(this.i,this.u,this.A,this.l,this.R,et,f),this.o){if(this.T&&!this.K){t:{if(this.g){var ge,$e=this.g;if((ge=$e.g?$e.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!w(ge)){var ce=ge;break t}}ce=null}if(f=ce)ai(this.i,this.l,f,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Yu(this,f);else{this.o=!1,this.s=3,ht(12),xr(this),gs(this);break e}}if(this.P){f=!0;let zt;for(;!this.J&&this.C<z.length;)if(zt=AI(this,z),zt==Ku){et==4&&(this.s=4,ht(14),f=!1),ai(this.i,this.l,null,"[Incomplete Response]");break}else if(zt==Tp){this.s=4,ht(15),ai(this.i,this.l,z,"[Invalid Chunk]"),f=!1;break}else ai(this.i,this.l,zt,null),Yu(this,zt);if(xp(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),et!=4||z.length!=0||this.h.h||(this.s=1,ht(16),f=!1),this.o=this.o&&f,!f)ai(this.i,this.l,z,"[Invalid Chunked Response]"),xr(this),gs(this);else if(0<z.length&&!this.W){this.W=!0;var Ze=this.j;Ze.g==this&&Ze.ba&&!Ze.M&&(Ze.j.info("Great, no buffering proxy detected. Bytes received: "+z.length),nc(Ze),Ze.M=!0,ht(11))}}else ai(this.i,this.l,z,null),Yu(this,z);et==4&&xr(this),this.o&&!this.J&&(et==4?Jp(this.j,this):(this.o=!1,Zo(this)))}else $I(this.g),f==400&&0<z.indexOf("Unknown SID")?(this.s=3,ht(12)):(this.s=0,ht(13)),xr(this),gs(this)}}}catch{}finally{}};function xp(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function AI(a,h){var f=a.C,g=h.indexOf(`
`,f);return g==-1?Ku:(f=Number(h.substring(f,g)),isNaN(f)?Tp:(g+=1,g+f>h.length?Ku:(h=h.slice(g,g+f),a.C=g+f,h)))}Fn.prototype.cancel=function(){this.J=!0,xr(this)};function Zo(a){a.S=Date.now()+a.I,Ap(a,a.I)}function Ap(a,h){if(a.B!=null)throw Error("WatchDog timer not null");a.B=ps(m(a.ba,a),h)}function Qu(a){a.B&&(u.clearTimeout(a.B),a.B=null)}Fn.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(SI(this.i,this.A),this.L!=2&&(fs(),ht(17)),xr(this),this.s=2,gs(this)):Ap(this,this.S-a)};function gs(a){a.j.G==0||a.J||Jp(a.j,a)}function xr(a){Qu(a);var h=a.M;h&&typeof h.ma=="function"&&h.ma(),a.M=null,pp(a.U),a.g&&(h=a.g,a.g=null,h.abort(),h.ma())}function Yu(a,h){try{var f=a.j;if(f.G!=0&&(f.g==a||Xu(f.h,a))){if(!a.K&&Xu(f.h,a)&&f.G==3){try{var g=f.Da.g.parse(h)}catch{g=null}if(Array.isArray(g)&&g.length==3){var b=g;if(b[0]==0){e:if(!f.u){if(f.g)if(f.g.F+3e3<a.F)la(f),oa(f);else break e;tc(f),ht(18)}}else f.za=b[1],0<f.za-f.T&&37500>b[2]&&f.F&&f.v==0&&!f.C&&(f.C=ps(m(f.Za,f),6e3));if(1>=Cp(f.h)&&f.ca){try{f.ca()}catch{}f.ca=void 0}}else kr(f,11)}else if((a.K||f.g==a)&&la(f),!w(h))for(b=f.Da.g.parse(h),h=0;h<b.length;h++){let ce=b[h];if(f.T=ce[0],ce=ce[1],f.G==2)if(ce[0]=="c"){f.K=ce[1],f.ia=ce[2];const Ze=ce[3];Ze!=null&&(f.la=Ze,f.j.info("VER="+f.la));const et=ce[4];et!=null&&(f.Aa=et,f.j.info("SVER="+f.Aa));const ci=ce[5];ci!=null&&typeof ci=="number"&&0<ci&&(g=1.5*ci,f.L=g,f.j.info("backChannelRequestTimeoutMs_="+g)),g=f;const zt=a.g;if(zt){const ca=zt.g?zt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ca){var O=g.h;O.g||ca.indexOf("spdy")==-1&&ca.indexOf("quic")==-1&&ca.indexOf("h2")==-1||(O.j=O.l,O.g=new Set,O.h&&(Ju(O,O.h),O.h=null))}if(g.D){const rc=zt.g?zt.g.getResponseHeader("X-HTTP-Session-Id"):null;rc&&(g.ya=rc,ve(g.I,g.D,rc))}}f.G=3,f.l&&f.l.ua(),f.ba&&(f.R=Date.now()-a.F,f.j.info("Handshake RTT: "+f.R+"ms")),g=f;var z=a;if(g.qa=tm(g,g.J?g.ia:null,g.W),z.K){Pp(g.h,z);var ge=z,$e=g.L;$e&&(ge.I=$e),ge.B&&(Qu(ge),Zo(ge)),g.g=z}else Yp(g);0<f.i.length&&aa(f)}else ce[0]!="stop"&&ce[0]!="close"||kr(f,7);else f.G==3&&(ce[0]=="stop"||ce[0]=="close"?ce[0]=="stop"?kr(f,7):ec(f):ce[0]!="noop"&&f.l&&f.l.ta(ce),f.v=0)}}fs(4)}catch{}}var kI=class{constructor(a,h){this.g=a,this.map=h}};function kp(a){this.l=a||10,u.PerformanceNavigationTiming?(a=u.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(u.chrome&&u.chrome.loadTimes&&u.chrome.loadTimes()&&u.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Rp(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Cp(a){return a.h?1:a.g?a.g.size:0}function Xu(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function Ju(a,h){a.g?a.g.add(h):a.h=h}function Pp(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}kp.prototype.cancel=function(){if(this.i=Np(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function Np(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const f of a.g.values())h=h.concat(f.D);return h}return P(a.i)}function RI(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(l(a)){for(var h=[],f=a.length,g=0;g<f;g++)h.push(a[g]);return h}h=[],f=0;for(g in a)h[f++]=a[g];return h}function CI(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(l(a)||typeof a=="string"){var h=[];a=a.length;for(var f=0;f<a;f++)h.push(f);return h}h=[],f=0;for(const g in a)h[f++]=g;return h}}}function bp(a,h){if(a.forEach&&typeof a.forEach=="function")a.forEach(h,void 0);else if(l(a)||typeof a=="string")Array.prototype.forEach.call(a,h,void 0);else for(var f=CI(a),g=RI(a),b=g.length,O=0;O<b;O++)h.call(void 0,g[O],f&&f[O],a)}var Dp=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function PI(a,h){if(a){a=a.split("&");for(var f=0;f<a.length;f++){var g=a[f].indexOf("="),b=null;if(0<=g){var O=a[f].substring(0,g);b=a[f].substring(g+1)}else O=a[f];h(O,b?decodeURIComponent(b.replace(/\+/g," ")):"")}}}function Ar(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof Ar){this.h=a.h,ea(this,a.j),this.o=a.o,this.g=a.g,ta(this,a.s),this.l=a.l;var h=a.i,f=new _s;f.i=h.i,h.g&&(f.g=new Map(h.g),f.h=h.h),Op(this,f),this.m=a.m}else a&&(h=String(a).match(Dp))?(this.h=!1,ea(this,h[1]||"",!0),this.o=ys(h[2]||""),this.g=ys(h[3]||"",!0),ta(this,h[4]),this.l=ys(h[5]||"",!0),Op(this,h[6]||"",!0),this.m=ys(h[7]||"")):(this.h=!1,this.i=new _s(null,this.h))}Ar.prototype.toString=function(){var a=[],h=this.j;h&&a.push(vs(h,Mp,!0),":");var f=this.g;return(f||h=="file")&&(a.push("//"),(h=this.o)&&a.push(vs(h,Mp,!0),"@"),a.push(encodeURIComponent(String(f)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.s,f!=null&&a.push(":",String(f))),(f=this.l)&&(this.g&&f.charAt(0)!="/"&&a.push("/"),a.push(vs(f,f.charAt(0)=="/"?DI:bI,!0))),(f=this.i.toString())&&a.push("?",f),(f=this.m)&&a.push("#",vs(f,MI)),a.join("")};function vn(a){return new Ar(a)}function ea(a,h,f){a.j=f?ys(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function ta(a,h){if(h){if(h=Number(h),isNaN(h)||0>h)throw Error("Bad port number "+h);a.s=h}else a.s=null}function Op(a,h,f){h instanceof _s?(a.i=h,VI(a.i,a.h)):(f||(h=vs(h,OI)),a.i=new _s(h,a.h))}function ve(a,h,f){a.i.set(h,f)}function na(a){return ve(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function ys(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function vs(a,h,f){return typeof a=="string"?(a=encodeURI(a).replace(h,NI),f&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function NI(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Mp=/[#\/\?@]/g,bI=/[#\?:]/g,DI=/[#\?]/g,OI=/[#\?@]/g,MI=/#/g;function _s(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function Un(a){a.g||(a.g=new Map,a.h=0,a.i&&PI(a.i,function(h,f){a.add(decodeURIComponent(h.replace(/\+/g," ")),f)}))}t=_s.prototype,t.add=function(a,h){Un(this),this.i=null,a=li(this,a);var f=this.g.get(a);return f||this.g.set(a,f=[]),f.push(h),this.h+=1,this};function Vp(a,h){Un(a),h=li(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function Lp(a,h){return Un(a),h=li(a,h),a.g.has(h)}t.forEach=function(a,h){Un(this),this.g.forEach(function(f,g){f.forEach(function(b){a.call(h,b,g,this)},this)},this)},t.na=function(){Un(this);const a=Array.from(this.g.values()),h=Array.from(this.g.keys()),f=[];for(let g=0;g<h.length;g++){const b=a[g];for(let O=0;O<b.length;O++)f.push(h[g])}return f},t.V=function(a){Un(this);let h=[];if(typeof a=="string")Lp(this,a)&&(h=h.concat(this.g.get(li(this,a))));else{a=Array.from(this.g.values());for(let f=0;f<a.length;f++)h=h.concat(a[f])}return h},t.set=function(a,h){return Un(this),this.i=null,a=li(this,a),Lp(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},t.get=function(a,h){return a?(a=this.V(a),0<a.length?String(a[0]):h):h};function jp(a,h,f){Vp(a,h),0<f.length&&(a.i=null,a.g.set(li(a,h),P(f)),a.h+=f.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(var f=0;f<h.length;f++){var g=h[f];const O=encodeURIComponent(String(g)),z=this.V(g);for(g=0;g<z.length;g++){var b=O;z[g]!==""&&(b+="="+encodeURIComponent(String(z[g]))),a.push(b)}}return this.i=a.join("&")};function li(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function VI(a,h){h&&!a.j&&(Un(a),a.i=null,a.g.forEach(function(f,g){var b=g.toLowerCase();g!=b&&(Vp(this,g),jp(this,b,f))},a)),a.j=h}function LI(a,h){const f=new ms;if(u.Image){const g=new Image;g.onload=_(Bn,f,"TestLoadImage: loaded",!0,h,g),g.onerror=_(Bn,f,"TestLoadImage: error",!1,h,g),g.onabort=_(Bn,f,"TestLoadImage: abort",!1,h,g),g.ontimeout=_(Bn,f,"TestLoadImage: timeout",!1,h,g),u.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=a}else h(!1)}function jI(a,h){const f=new ms,g=new AbortController,b=setTimeout(()=>{g.abort(),Bn(f,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:g.signal}).then(O=>{clearTimeout(b),O.ok?Bn(f,"TestPingServer: ok",!0,h):Bn(f,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(b),Bn(f,"TestPingServer: error",!1,h)})}function Bn(a,h,f,g,b){try{b&&(b.onload=null,b.onerror=null,b.onabort=null,b.ontimeout=null),g(f)}catch{}}function FI(){this.g=new EI}function UI(a,h,f){const g=f||"";try{bp(a,function(b,O){let z=b;c(b)&&(z=zu(b)),h.push(g+O+"="+encodeURIComponent(z))})}catch(b){throw h.push(g+"type="+encodeURIComponent("_badmap")),b}}function ra(a){this.l=a.Ub||null,this.j=a.eb||!1}x(ra,$u),ra.prototype.g=function(){return new ia(this.l,this.j)},ra.prototype.i=function(a){return function(){return a}}({});function ia(a,h){Je.call(this),this.D=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}x(ia,Je),t=ia.prototype,t.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=h,this.readyState=1,Es(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const h={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(h.body=a),(this.D||u).fetch(new Request(this.A,h)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ws(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Es(this)),this.g&&(this.readyState=3,Es(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof u.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Fp(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function Fp(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.v.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?ws(this):Es(this),this.readyState==3&&Fp(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,ws(this))},t.Qa=function(a){this.g&&(this.response=a,ws(this))},t.ga=function(){this.g&&ws(this)};function ws(a){a.readyState=4,a.l=null,a.j=null,a.v=null,Es(a)}t.setRequestHeader=function(a,h){this.u.append(a,h)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var f=h.next();!f.done;)f=f.value,a.push(f[0]+": "+f[1]),f=h.next();return a.join(`\r
`)};function Es(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(ia.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Up(a){let h="";return V(a,function(f,g){h+=g,h+=":",h+=f,h+=`\r
`}),h}function Zu(a,h,f){e:{for(g in f){var g=!1;break e}g=!0}g||(f=Up(f),typeof a=="string"?f!=null&&encodeURIComponent(String(f)):ve(a,h,f))}function Ae(a){Je.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}x(Ae,Je);var BI=/^https?$/i,zI=["POST","PUT"];t=Ae.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,h,f,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():qu.g(),this.v=this.o?mp(this.o):mp(qu),this.g.onreadystatechange=m(this.Ea,this);try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(O){Bp(this,O);return}if(a=f||"",f=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var b in g)f.set(b,g[b]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const O of g.keys())f.set(O,g.get(O));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(f.keys()).find(O=>O.toLowerCase()=="content-type"),b=u.FormData&&a instanceof u.FormData,!(0<=Array.prototype.indexOf.call(zI,h,void 0))||g||b||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[O,z]of f)this.g.setRequestHeader(O,z);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Wp(this),this.u=!0,this.g.send(a),this.u=!1}catch(O){Bp(this,O)}};function Bp(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.m=5,zp(a),sa(a)}function zp(a){a.A||(a.A=!0,ct(a,"complete"),ct(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,ct(this,"complete"),ct(this,"abort"),sa(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),sa(this,!0)),Ae.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?$p(this):this.bb())},t.bb=function(){$p(this)};function $p(a){if(a.h&&typeof o<"u"&&(!a.v[1]||_n(a)!=4||a.Z()!=2)){if(a.u&&_n(a)==4)hp(a.Ea,0,a);else if(ct(a,"readystatechange"),_n(a)==4){a.h=!1;try{const z=a.Z();e:switch(z){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var f;if(!(f=h)){var g;if(g=z===0){var b=String(a.D).match(Dp)[1]||null;!b&&u.self&&u.self.location&&(b=u.self.location.protocol.slice(0,-1)),g=!BI.test(b?b.toLowerCase():"")}f=g}if(f)ct(a,"complete"),ct(a,"success");else{a.m=6;try{var O=2<_n(a)?a.g.statusText:""}catch{O=""}a.l=O+" ["+a.Z()+"]",zp(a)}}finally{sa(a)}}}}function sa(a,h){if(a.g){Wp(a);const f=a.g,g=a.v[0]?()=>{}:null;a.g=null,a.v=null,h||ct(a,"ready");try{f.onreadystatechange=g}catch{}}}function Wp(a){a.I&&(u.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function _n(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<_n(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),wI(h)}};function Hp(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function $I(a){const h={};a=(a.g&&2<=_n(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<a.length;g++){if(w(a[g]))continue;var f=R(a[g]);const b=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const O=h[b]||[];h[b]=O,O.push(f)}I(h,function(g){return g.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Is(a,h,f){return f&&f.internalChannelParams&&f.internalChannelParams[a]||h}function qp(a){this.Aa=0,this.i=[],this.j=new ms,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Is("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Is("baseRetryDelayMs",5e3,a),this.cb=Is("retryDelaySeedMs",1e4,a),this.Wa=Is("forwardChannelMaxRetries",2,a),this.wa=Is("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new kp(a&&a.concurrentRequestLimit),this.Da=new FI,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=qp.prototype,t.la=8,t.G=1,t.connect=function(a,h,f,g){ht(0),this.W=a,this.H=h||{},f&&g!==void 0&&(this.H.OSID=f,this.H.OAID=g),this.F=this.X,this.I=tm(this,null,this.W),aa(this)};function ec(a){if(Kp(a),a.G==3){var h=a.U++,f=vn(a.I);if(ve(f,"SID",a.K),ve(f,"RID",h),ve(f,"TYPE","terminate"),Ts(a,f),h=new Fn(a,a.j,h),h.L=2,h.v=na(vn(f)),f=!1,u.navigator&&u.navigator.sendBeacon)try{f=u.navigator.sendBeacon(h.v.toString(),"")}catch{}!f&&u.Image&&(new Image().src=h.v,f=!0),f||(h.g=nm(h.j,null),h.g.ea(h.v)),h.F=Date.now(),Zo(h)}em(a)}function oa(a){a.g&&(nc(a),a.g.cancel(),a.g=null)}function Kp(a){oa(a),a.u&&(u.clearTimeout(a.u),a.u=null),la(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&u.clearTimeout(a.s),a.s=null)}function aa(a){if(!Rp(a.h)&&!a.s){a.s=!0;var h=a.Ga;q||X(),j||(q(),j=!0),W.add(h,a),a.B=0}}function WI(a,h){return Cp(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=h.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=ps(m(a.Ga,a,h),Zp(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const b=new Fn(this,this.j,a);let O=this.o;if(this.S&&(O?(O=v(O),A(O,this.S)):O=this.S),this.m!==null||this.O||(b.H=O,O=null),this.P)e:{for(var h=0,f=0;f<this.i.length;f++){t:{var g=this.i[f];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(h+=g,4096<h){h=f;break e}if(h===4096||f===this.i.length-1){h=f+1;break e}}h=1e3}else h=1e3;h=Qp(this,b,h),f=vn(this.I),ve(f,"RID",a),ve(f,"CVER",22),this.D&&ve(f,"X-HTTP-Session-Id",this.D),Ts(this,f),O&&(this.O?h="headers="+encodeURIComponent(String(Up(O)))+"&"+h:this.m&&Zu(f,this.m,O)),Ju(this.h,b),this.Ua&&ve(f,"TYPE","init"),this.P?(ve(f,"$req",h),ve(f,"SID","null"),b.T=!0,Gu(b,f,null)):Gu(b,f,h),this.G=2}}else this.G==3&&(a?Gp(this,a):this.i.length==0||Rp(this.h)||Gp(this))};function Gp(a,h){var f;h?f=h.l:f=a.U++;const g=vn(a.I);ve(g,"SID",a.K),ve(g,"RID",f),ve(g,"AID",a.T),Ts(a,g),a.m&&a.o&&Zu(g,a.m,a.o),f=new Fn(a,a.j,f,a.B+1),a.m===null&&(f.H=a.o),h&&(a.i=h.D.concat(a.i)),h=Qp(a,f,1e3),f.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),Ju(a.h,f),Gu(f,g,h)}function Ts(a,h){a.H&&V(a.H,function(f,g){ve(h,g,f)}),a.l&&bp({},function(f,g){ve(h,g,f)})}function Qp(a,h,f){f=Math.min(a.i.length,f);var g=a.l?m(a.l.Na,a.l,a):null;e:{var b=a.i;let O=-1;for(;;){const z=["count="+f];O==-1?0<f?(O=b[0].g,z.push("ofs="+O)):O=0:z.push("ofs="+O);let ge=!0;for(let $e=0;$e<f;$e++){let ce=b[$e].g;const Ze=b[$e].map;if(ce-=O,0>ce)O=Math.max(0,b[$e].g-100),ge=!1;else try{UI(Ze,z,"req"+ce+"_")}catch{g&&g(Ze)}}if(ge){g=z.join("&");break e}}}return a=a.i.splice(0,f),h.D=a,g}function Yp(a){if(!a.g&&!a.u){a.Y=1;var h=a.Fa;q||X(),j||(q(),j=!0),W.add(h,a),a.v=0}}function tc(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=ps(m(a.Fa,a),Zp(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,Xp(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=ps(m(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,ht(10),oa(this),Xp(this))};function nc(a){a.A!=null&&(u.clearTimeout(a.A),a.A=null)}function Xp(a){a.g=new Fn(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var h=vn(a.qa);ve(h,"RID","rpc"),ve(h,"SID",a.K),ve(h,"AID",a.T),ve(h,"CI",a.F?"0":"1"),!a.F&&a.ja&&ve(h,"TO",a.ja),ve(h,"TYPE","xmlhttp"),Ts(a,h),a.m&&a.o&&Zu(h,a.m,a.o),a.L&&(a.g.I=a.L);var f=a.g;a=a.ia,f.L=1,f.v=na(vn(h)),f.m=null,f.P=!0,Sp(f,a)}t.Za=function(){this.C!=null&&(this.C=null,oa(this),tc(this),ht(19))};function la(a){a.C!=null&&(u.clearTimeout(a.C),a.C=null)}function Jp(a,h){var f=null;if(a.g==h){la(a),nc(a),a.g=null;var g=2}else if(Xu(a.h,h))f=h.D,Pp(a.h,h),g=1;else return;if(a.G!=0){if(h.o)if(g==1){f=h.m?h.m.length:0,h=Date.now()-h.F;var b=a.B;g=Yo(),ct(g,new wp(g,f)),aa(a)}else Yp(a);else if(b=h.s,b==3||b==0&&0<h.X||!(g==1&&WI(a,h)||g==2&&tc(a)))switch(f&&0<f.length&&(h=a.h,h.i=h.i.concat(f)),b){case 1:kr(a,5);break;case 4:kr(a,10);break;case 3:kr(a,6);break;default:kr(a,2)}}}function Zp(a,h){let f=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(f*=2),f*h}function kr(a,h){if(a.j.info("Error code "+h),h==2){var f=m(a.fb,a),g=a.Xa;const b=!g;g=new Ar(g||"//www.google.com/images/cleardot.gif"),u.location&&u.location.protocol=="http"||ea(g,"https"),na(g),b?LI(g.toString(),f):jI(g.toString(),f)}else ht(2);a.G=0,a.l&&a.l.sa(h),em(a),Kp(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),ht(2)):(this.j.info("Failed to ping google.com"),ht(1))};function em(a){if(a.G=0,a.ka=[],a.l){const h=Np(a.h);(h.length!=0||a.i.length!=0)&&(C(a.ka,h),C(a.ka,a.i),a.h.i.length=0,P(a.i),a.i.length=0),a.l.ra()}}function tm(a,h,f){var g=f instanceof Ar?vn(f):new Ar(f);if(g.g!="")h&&(g.g=h+"."+g.g),ta(g,g.s);else{var b=u.location;g=b.protocol,h=h?h+"."+b.hostname:b.hostname,b=+b.port;var O=new Ar(null);g&&ea(O,g),h&&(O.g=h),b&&ta(O,b),f&&(O.l=f),g=O}return f=a.D,h=a.ya,f&&h&&ve(g,f,h),ve(g,"VER",a.la),Ts(a,g),g}function nm(a,h,f){if(h&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Ca&&!a.pa?new Ae(new ra({eb:f})):new Ae(a.pa),h.Ha(a.J),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function rm(){}t=rm.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function ua(){}ua.prototype.g=function(a,h){return new xt(a,h)};function xt(a,h){Je.call(this),this.g=new qp(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.va&&(a?a["X-WebChannel-Client-Profile"]=h.va:a={"X-WebChannel-Client-Profile":h.va}),this.g.S=a,(a=h&&h.Sb)&&!w(a)&&(this.g.m=a),this.v=h&&h.supportsCrossDomainXhr||!1,this.u=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!w(h)&&(this.g.D=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new ui(this)}x(xt,Je),xt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},xt.prototype.close=function(){ec(this.g)},xt.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var f={};f.__data__=a,a=f}else this.u&&(f={},f.__data__=zu(a),a=f);h.i.push(new kI(h.Ya++,a)),h.G==3&&aa(h)},xt.prototype.N=function(){this.g.l=null,delete this.j,ec(this.g),delete this.g,xt.aa.N.call(this)};function im(a){Wu.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const f in h){a=f;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}x(im,Wu);function sm(){Hu.call(this),this.status=1}x(sm,Hu);function ui(a){this.g=a}x(ui,rm),ui.prototype.ua=function(){ct(this.g,"a")},ui.prototype.ta=function(a){ct(this.g,new im(a))},ui.prototype.sa=function(a){ct(this.g,new sm)},ui.prototype.ra=function(){ct(this.g,"b")},ua.prototype.createWebChannel=ua.prototype.g,xt.prototype.send=xt.prototype.o,xt.prototype.open=xt.prototype.m,xt.prototype.close=xt.prototype.close,F0=function(){return new ua},j0=function(){return Yo()},L0=Sr,Kh={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Xo.NO_ERROR=0,Xo.TIMEOUT=8,Xo.HTTP_ERROR=6,qa=Xo,Ep.COMPLETE="complete",V0=Ep,gp.EventType=ds,ds.OPEN="a",ds.CLOSE="b",ds.ERROR="c",ds.MESSAGE="d",Je.prototype.listen=Je.prototype.K,js=gp,Ae.prototype.listenOnce=Ae.prototype.L,Ae.prototype.getLastError=Ae.prototype.Ka,Ae.prototype.getLastErrorCode=Ae.prototype.Ba,Ae.prototype.getStatus=Ae.prototype.Z,Ae.prototype.getResponseJson=Ae.prototype.Oa,Ae.prototype.getResponseText=Ae.prototype.oa,Ae.prototype.send=Ae.prototype.ea,Ae.prototype.setWithCredentials=Ae.prototype.Ha,M0=Ae}).apply(typeof Ra<"u"?Ra:typeof self<"u"?self:typeof window<"u"?window:{});const jg="@firebase/firestore";/**
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
 */class it{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}it.UNAUTHENTICATED=new it(null),it.GOOGLE_CREDENTIALS=new it("google-credentials-uid"),it.FIRST_PARTY=new it("first-party-uid"),it.MOCK_USER=new it("mock-user");/**
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
 */let as="10.14.0";/**
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
 */const qr=new pu("@firebase/firestore");function bs(){return qr.logLevel}function H(t,...e){if(qr.logLevel<=oe.DEBUG){const n=e.map(pf);qr.debug(`Firestore (${as}): ${t}`,...n)}}function On(t,...e){if(qr.logLevel<=oe.ERROR){const n=e.map(pf);qr.error(`Firestore (${as}): ${t}`,...n)}}function Ki(t,...e){if(qr.logLevel<=oe.WARN){const n=e.map(pf);qr.warn(`Firestore (${as}): ${t}`,...n)}}function pf(t){if(typeof t=="string")return t;try{/**
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
 */function Z(t="Unexpected state"){const e=`FIRESTORE (${as}) INTERNAL ASSERTION FAILED: `+t;throw On(e),new Error(e)}function fe(t,e){t||Z()}function te(t,e){return t}/**
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
 */const F={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class G extends Xt{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class pr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class U0{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Sk{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(it.UNAUTHENTICATED))}shutdown(){}}class xk{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class Ak{constructor(e){this.t=e,this.currentUser=it.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){fe(this.o===void 0);let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let s=new pr;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new pr,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},u=l=>{H("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(l=>u(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?u(l):(H("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new pr)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(H("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(fe(typeof r.accessToken=="string"),new U0(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return fe(e===null||typeof e=="string"),new it(e)}}class kk{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=it.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class Rk{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new kk(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(it.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Ck{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Pk{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){fe(this.o===void 0);const r=s=>{s.error!=null&&H("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,H("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{H("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):H("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(fe(typeof n.token=="string"),this.R=n.token,new Ck(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function Nk(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class B0{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=Nk(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function he(t,e){return t<e?-1:t>e?1:0}function Gi(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
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
 */class Fe{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new G(F.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new G(F.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new G(F.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new G(F.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Fe.fromMillis(Date.now())}static fromDate(e){return Fe.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Fe(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?he(this.nanoseconds,e.nanoseconds):he(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class ee{constructor(e){this.timestamp=e}static fromTimestamp(e){return new ee(e)}static min(){return new ee(new Fe(0,0))}static max(){return new ee(new Fe(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class So{constructor(e,n,r){n===void 0?n=0:n>e.length&&Z(),r===void 0?r=e.length-n:r>e.length-n&&Z(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return So.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof So?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Ce extends So{construct(e,n,r){return new Ce(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new G(F.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new Ce(n)}static emptyPath(){return new Ce([])}}const bk=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ke extends So{construct(e,n,r){return new Ke(e,n,r)}static isValidIdentifier(e){return bk.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ke.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Ke(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new G(F.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const u=e[i];if(u==="\\"){if(i+1===e.length)throw new G(F.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new G(F.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else u==="`"?(o=!o,i++):u!=="."||o?(r+=u,i++):(s(),i++)}if(s(),o)throw new G(F.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ke(n)}static emptyPath(){return new Ke([])}}/**
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
 */class Y{constructor(e){this.path=e}static fromPath(e){return new Y(Ce.fromString(e))}static fromName(e){return new Y(Ce.fromString(e).popFirst(5))}static empty(){return new Y(Ce.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ce.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Ce.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Y(new Ce(e.slice()))}}function Dk(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=ee.fromTimestamp(r===1e9?new Fe(n+1,0):new Fe(n,r));return new yr(i,Y.empty(),e)}function Ok(t){return new yr(t.readTime,t.key,-1)}class yr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new yr(ee.min(),Y.empty(),-1)}static max(){return new yr(ee.max(),Y.empty(),-1)}}function Mk(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=Y.comparator(t.documentKey,e.documentKey),n!==0?n:he(t.largestBatchId,e.largestBatchId))}/**
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
 */const Vk="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Lk{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Lo(t){if(t.code!==F.FAILED_PRECONDITION||t.message!==Vk)throw t;H("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class L{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&Z(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new L((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof L?n:L.resolve(n)}catch(n){return L.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):L.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):L.reject(n)}static resolve(e){return new L((n,r)=>{n(e)})}static reject(e){return new L((n,r)=>{r(e)})}static waitFor(e){return new L((n,r)=>{let i=0,s=0,o=!1;e.forEach(u=>{++i,u.next(()=>{++s,o&&s===i&&n()},l=>r(l))}),o=!0,s===i&&n()})}static or(e){let n=L.resolve(!1);for(const r of e)n=n.next(i=>i?L.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new L((r,i)=>{const s=e.length,o=new Array(s);let u=0;for(let l=0;l<s;l++){const c=l;n(e[c]).next(d=>{o[c]=d,++u,u===s&&r(o)},d=>i(d))}})}static doWhile(e,n){return new L((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function jk(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function jo(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class mf{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}mf.oe=-1;function mu(t){return t==null}function Rl(t){return t===0&&1/t==-1/0}function Fk(t){return typeof t=="number"&&Number.isInteger(t)&&!Rl(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function Fg(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function si(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function z0(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class xe{constructor(e,n){this.comparator=e,this.root=n||qe.EMPTY}insert(e,n){return new xe(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,qe.BLACK,null,null))}remove(e){return new xe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,qe.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ca(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ca(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ca(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ca(this.root,e,this.comparator,!0)}}class Ca{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class qe{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??qe.RED,this.left=i??qe.EMPTY,this.right=s??qe.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new qe(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return qe.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return qe.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,qe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,qe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Z();const e=this.left.check();if(e!==this.right.check())throw Z();return e+(this.isRed()?0:1)}}qe.EMPTY=null,qe.RED=!0,qe.BLACK=!1;qe.EMPTY=new class{constructor(){this.size=0}get key(){throw Z()}get value(){throw Z()}get color(){throw Z()}get left(){throw Z()}get right(){throw Z()}copy(e,n,r,i,s){return this}insert(e,n,r){return new qe(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Qe{constructor(e){this.comparator=e,this.data=new xe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Ug(this.data.getIterator())}getIteratorFrom(e){return new Ug(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Qe)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Qe(this.comparator);return n.data=e,n}}class Ug{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Rt{constructor(e){this.fields=e,e.sort(Ke.comparator)}static empty(){return new Rt([])}unionWith(e){let n=new Qe(Ke.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Rt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Gi(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class $0 extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Xe{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new $0("Invalid base64 string: "+s):s}}(e);return new Xe(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new Xe(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return he(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Xe.EMPTY_BYTE_STRING=new Xe("");const Uk=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function vr(t){if(fe(!!t),typeof t=="string"){let e=0;const n=Uk.exec(t);if(fe(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ne(t.seconds),nanos:Ne(t.nanos)}}function Ne(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Kr(t){return typeof t=="string"?Xe.fromBase64String(t):Xe.fromUint8Array(t)}/**
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
 */function gf(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function yf(t){const e=t.mapValue.fields.__previous_value__;return gf(e)?yf(e):e}function xo(t){const e=vr(t.mapValue.fields.__local_write_time__.timestampValue);return new Fe(e.seconds,e.nanos)}/**
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
 */class Bk{constructor(e,n,r,i,s,o,u,l,c){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=u,this.longPollingOptions=l,this.useFetchStreams=c}}class Ao{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Ao("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Ao&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Pa={mapValue:{}};function Gr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?gf(t)?4:$k(t)?9007199254740991:zk(t)?10:11:Z()}function fn(t,e){if(t===e)return!0;const n=Gr(t);if(n!==Gr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return xo(t).isEqual(xo(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=vr(i.timestampValue),u=vr(s.timestampValue);return o.seconds===u.seconds&&o.nanos===u.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return Kr(i.bytesValue).isEqual(Kr(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return Ne(i.geoPointValue.latitude)===Ne(s.geoPointValue.latitude)&&Ne(i.geoPointValue.longitude)===Ne(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Ne(i.integerValue)===Ne(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=Ne(i.doubleValue),u=Ne(s.doubleValue);return o===u?Rl(o)===Rl(u):isNaN(o)&&isNaN(u)}return!1}(t,e);case 9:return Gi(t.arrayValue.values||[],e.arrayValue.values||[],fn);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},u=s.mapValue.fields||{};if(Fg(o)!==Fg(u))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(u[l]===void 0||!fn(o[l],u[l])))return!1;return!0}(t,e);default:return Z()}}function ko(t,e){return(t.values||[]).find(n=>fn(n,e))!==void 0}function Qi(t,e){if(t===e)return 0;const n=Gr(t),r=Gr(e);if(n!==r)return he(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return he(t.booleanValue,e.booleanValue);case 2:return function(s,o){const u=Ne(s.integerValue||s.doubleValue),l=Ne(o.integerValue||o.doubleValue);return u<l?-1:u>l?1:u===l?0:isNaN(u)?isNaN(l)?0:-1:1}(t,e);case 3:return Bg(t.timestampValue,e.timestampValue);case 4:return Bg(xo(t),xo(e));case 5:return he(t.stringValue,e.stringValue);case 6:return function(s,o){const u=Kr(s),l=Kr(o);return u.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const u=s.split("/"),l=o.split("/");for(let c=0;c<u.length&&c<l.length;c++){const d=he(u[c],l[c]);if(d!==0)return d}return he(u.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const u=he(Ne(s.latitude),Ne(o.latitude));return u!==0?u:he(Ne(s.longitude),Ne(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return zg(t.arrayValue,e.arrayValue);case 10:return function(s,o){var u,l,c,d;const p=s.fields||{},m=o.fields||{},_=(u=p.value)===null||u===void 0?void 0:u.arrayValue,x=(l=m.value)===null||l===void 0?void 0:l.arrayValue,P=he(((c=_==null?void 0:_.values)===null||c===void 0?void 0:c.length)||0,((d=x==null?void 0:x.values)===null||d===void 0?void 0:d.length)||0);return P!==0?P:zg(_,x)}(t.mapValue,e.mapValue);case 11:return function(s,o){if(s===Pa.mapValue&&o===Pa.mapValue)return 0;if(s===Pa.mapValue)return 1;if(o===Pa.mapValue)return-1;const u=s.fields||{},l=Object.keys(u),c=o.fields||{},d=Object.keys(c);l.sort(),d.sort();for(let p=0;p<l.length&&p<d.length;++p){const m=he(l[p],d[p]);if(m!==0)return m;const _=Qi(u[l[p]],c[d[p]]);if(_!==0)return _}return he(l.length,d.length)}(t.mapValue,e.mapValue);default:throw Z()}}function Bg(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return he(t,e);const n=vr(t),r=vr(e),i=he(n.seconds,r.seconds);return i!==0?i:he(n.nanos,r.nanos)}function zg(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const s=Qi(n[i],r[i]);if(s)return s}return he(n.length,r.length)}function Yi(t){return Gh(t)}function Gh(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=vr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Kr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return Y.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=Gh(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${Gh(n.fields[o])}`;return i+"}"}(t.mapValue):Z()}function Qh(t){return!!t&&"integerValue"in t}function vf(t){return!!t&&"arrayValue"in t}function $g(t){return!!t&&"nullValue"in t}function Wg(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Ka(t){return!!t&&"mapValue"in t}function zk(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function Xs(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return si(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Xs(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Xs(t.arrayValue.values[n]);return e}return Object.assign({},t)}function $k(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class vt{constructor(e){this.value=e}static empty(){return new vt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Ka(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Xs(n)}setAll(e){let n=Ke.emptyPath(),r={},i=[];e.forEach((o,u)=>{if(!n.isImmediateParentOf(u)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=u.popLast()}o?r[u.lastSegment()]=Xs(o):i.push(u.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());Ka(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return fn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Ka(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){si(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new vt(Xs(this.value))}}function W0(t){const e=[];return si(t.fields,(n,r)=>{const i=new Ke([n]);if(Ka(r)){const s=W0(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Rt(e)}/**
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
 */class ot{constructor(e,n,r,i,s,o,u){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=u}static newInvalidDocument(e){return new ot(e,0,ee.min(),ee.min(),ee.min(),vt.empty(),0)}static newFoundDocument(e,n,r,i){return new ot(e,1,n,ee.min(),r,i,0)}static newNoDocument(e,n){return new ot(e,2,n,ee.min(),ee.min(),vt.empty(),0)}static newUnknownDocument(e,n){return new ot(e,3,n,ee.min(),ee.min(),vt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(ee.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=vt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=vt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ee.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ot&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ot(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Cl{constructor(e,n){this.position=e,this.inclusive=n}}function Hg(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=Y.comparator(Y.fromName(o.referenceValue),n.key):r=Qi(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function qg(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!fn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Pl{constructor(e,n="asc"){this.field=e,this.dir=n}}function Wk(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class H0{}class Ve extends H0{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new qk(e,n,r):n==="array-contains"?new Qk(e,r):n==="in"?new Yk(e,r):n==="not-in"?new Xk(e,r):n==="array-contains-any"?new Jk(e,r):new Ve(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new Kk(e,r):new Gk(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Qi(n,this.value)):n!==null&&Gr(this.value)===Gr(n)&&this.matchesComparison(Qi(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Z()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class pn extends H0{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new pn(e,n)}matches(e){return q0(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function q0(t){return t.op==="and"}function K0(t){return Hk(t)&&q0(t)}function Hk(t){for(const e of t.filters)if(e instanceof pn)return!1;return!0}function Yh(t){if(t instanceof Ve)return t.field.canonicalString()+t.op.toString()+Yi(t.value);if(K0(t))return t.filters.map(e=>Yh(e)).join(",");{const e=t.filters.map(n=>Yh(n)).join(",");return`${t.op}(${e})`}}function G0(t,e){return t instanceof Ve?function(r,i){return i instanceof Ve&&r.op===i.op&&r.field.isEqual(i.field)&&fn(r.value,i.value)}(t,e):t instanceof pn?function(r,i){return i instanceof pn&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,u)=>s&&G0(o,i.filters[u]),!0):!1}(t,e):void Z()}function Q0(t){return t instanceof Ve?function(n){return`${n.field.canonicalString()} ${n.op} ${Yi(n.value)}`}(t):t instanceof pn?function(n){return n.op.toString()+" {"+n.getFilters().map(Q0).join(" ,")+"}"}(t):"Filter"}class qk extends Ve{constructor(e,n,r){super(e,n,r),this.key=Y.fromName(r.referenceValue)}matches(e){const n=Y.comparator(e.key,this.key);return this.matchesComparison(n)}}class Kk extends Ve{constructor(e,n){super(e,"in",n),this.keys=Y0("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class Gk extends Ve{constructor(e,n){super(e,"not-in",n),this.keys=Y0("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Y0(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>Y.fromName(r.referenceValue))}class Qk extends Ve{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return vf(n)&&ko(n.arrayValue,this.value)}}class Yk extends Ve{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&ko(this.value.arrayValue,n)}}class Xk extends Ve{constructor(e,n){super(e,"not-in",n)}matches(e){if(ko(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!ko(this.value.arrayValue,n)}}class Jk extends Ve{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!vf(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>ko(this.value.arrayValue,r))}}/**
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
 */class Zk{constructor(e,n=null,r=[],i=[],s=null,o=null,u=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=u,this.ue=null}}function Kg(t,e=null,n=[],r=[],i=null,s=null,o=null){return new Zk(t,e,n,r,i,s,o)}function _f(t){const e=te(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Yh(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),mu(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Yi(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Yi(r)).join(",")),e.ue=n}return e.ue}function wf(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!Wk(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!G0(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!qg(t.startAt,e.startAt)&&qg(t.endAt,e.endAt)}function Xh(t){return Y.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class gu{constructor(e,n=null,r=[],i=[],s=null,o="F",u=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=u,this.endAt=l,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function eR(t,e,n,r,i,s,o,u){return new gu(t,e,n,r,i,s,o,u)}function yu(t){return new gu(t)}function Gg(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function tR(t){return t.collectionGroup!==null}function Js(t){const e=te(t);if(e.ce===null){e.ce=[];const n=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let u=new Qe(Ke.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(c=>{c.isInequality()&&(u=u.add(c.field))})}),u})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.ce.push(new Pl(s,r))}),n.has(Ke.keyField().canonicalString())||e.ce.push(new Pl(Ke.keyField(),r))}return e.ce}function rn(t){const e=te(t);return e.le||(e.le=nR(e,Js(t))),e.le}function nR(t,e){if(t.limitType==="F")return Kg(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new Pl(i.field,s)});const n=t.endAt?new Cl(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Cl(t.startAt.position,t.startAt.inclusive):null;return Kg(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Jh(t,e,n){return new gu(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function vu(t,e){return wf(rn(t),rn(e))&&t.limitType===e.limitType}function X0(t){return`${_f(rn(t))}|lt:${t.limitType}`}function di(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>Q0(i)).join(", ")}]`),mu(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>Yi(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>Yi(i)).join(",")),`Target(${r})`}(rn(t))}; limitType=${t.limitType})`}function _u(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):Y.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of Js(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,u,l){const c=Hg(o,u,l);return o.inclusive?c<=0:c<0}(r.startAt,Js(r),i)||r.endAt&&!function(o,u,l){const c=Hg(o,u,l);return o.inclusive?c>=0:c>0}(r.endAt,Js(r),i))}(t,e)}function rR(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function J0(t){return(e,n)=>{let r=!1;for(const i of Js(t)){const s=iR(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function iR(t,e,n){const r=t.field.isKeyField()?Y.comparator(e.key,n.key):function(s,o,u){const l=o.data.field(s),c=u.data.field(s);return l!==null&&c!==null?Qi(l,c):Z()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return Z()}}/**
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
 */class ls{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){si(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return z0(this.inner)}size(){return this.innerSize}}/**
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
 */const sR=new xe(Y.comparator);function Mn(){return sR}const Z0=new xe(Y.comparator);function Fs(...t){let e=Z0;for(const n of t)e=e.insert(n.key,n);return e}function ew(t){let e=Z0;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Or(){return Zs()}function tw(){return Zs()}function Zs(){return new ls(t=>t.toString(),(t,e)=>t.isEqual(e))}const oR=new xe(Y.comparator),aR=new Qe(Y.comparator);function ie(...t){let e=aR;for(const n of t)e=e.add(n);return e}const lR=new Qe(he);function uR(){return lR}/**
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
 */function Ef(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Rl(e)?"-0":e}}function nw(t){return{integerValue:""+t}}function cR(t,e){return Fk(e)?nw(e):Ef(t,e)}/**
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
 */class wu{constructor(){this._=void 0}}function hR(t,e,n){return t instanceof Nl?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&gf(s)&&(s=yf(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof Xi?iw(t,e):t instanceof Ro?sw(t,e):function(i,s){const o=rw(i,s),u=Qg(o)+Qg(i.Pe);return Qh(o)&&Qh(i.Pe)?nw(u):Ef(i.serializer,u)}(t,e)}function dR(t,e,n){return t instanceof Xi?iw(t,e):t instanceof Ro?sw(t,e):n}function rw(t,e){return t instanceof bl?function(r){return Qh(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class Nl extends wu{}class Xi extends wu{constructor(e){super(),this.elements=e}}function iw(t,e){const n=ow(e);for(const r of t.elements)n.some(i=>fn(i,r))||n.push(r);return{arrayValue:{values:n}}}class Ro extends wu{constructor(e){super(),this.elements=e}}function sw(t,e){let n=ow(e);for(const r of t.elements)n=n.filter(i=>!fn(i,r));return{arrayValue:{values:n}}}class bl extends wu{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function Qg(t){return Ne(t.integerValue||t.doubleValue)}function ow(t){return vf(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
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
 */class fR{constructor(e,n){this.field=e,this.transform=n}}function pR(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof Xi&&i instanceof Xi||r instanceof Ro&&i instanceof Ro?Gi(r.elements,i.elements,fn):r instanceof bl&&i instanceof bl?fn(r.Pe,i.Pe):r instanceof Nl&&i instanceof Nl}(t.transform,e.transform)}class mR{constructor(e,n){this.version=e,this.transformResults=n}}class sn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new sn}static exists(e){return new sn(void 0,e)}static updateTime(e){return new sn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Ga(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Eu{}function aw(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new uw(t.key,sn.none()):new Fo(t.key,t.data,sn.none());{const n=t.data,r=vt.empty();let i=new Qe(Ke.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Tr(t.key,r,new Rt(i.toArray()),sn.none())}}function gR(t,e,n){t instanceof Fo?function(i,s,o){const u=i.value.clone(),l=Xg(i.fieldTransforms,s,o.transformResults);u.setAll(l),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):t instanceof Tr?function(i,s,o){if(!Ga(i.precondition,s))return void s.convertToUnknownDocument(o.version);const u=Xg(i.fieldTransforms,s,o.transformResults),l=s.data;l.setAll(lw(i)),l.setAll(u),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function eo(t,e,n,r){return t instanceof Fo?function(s,o,u,l){if(!Ga(s.precondition,o))return u;const c=s.value.clone(),d=Jg(s.fieldTransforms,l,o);return c.setAll(d),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof Tr?function(s,o,u,l){if(!Ga(s.precondition,o))return u;const c=Jg(s.fieldTransforms,l,o),d=o.data;return d.setAll(lw(s)),d.setAll(c),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),u===null?null:u.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(p=>p.field))}(t,e,n,r):function(s,o,u){return Ga(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):u}(t,e,n)}function yR(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=rw(r.transform,i||null);s!=null&&(n===null&&(n=vt.empty()),n.set(r.field,s))}return n||null}function Yg(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Gi(r,i,(s,o)=>pR(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Fo extends Eu{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Tr extends Eu{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function lw(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Xg(t,e,n){const r=new Map;fe(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,u=e.data.field(s.field);r.set(s.field,dR(o,u,n[i]))}return r}function Jg(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,hR(s,o,e))}return r}class uw extends Eu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class vR extends Eu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class _R{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&gR(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=eo(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=eo(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=tw();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let u=this.applyToLocalView(o,s.mutatedFields);u=n.has(i.key)?null:u;const l=aw(o,u);l!==null&&r.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(ee.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ie())}isEqual(e){return this.batchId===e.batchId&&Gi(this.mutations,e.mutations,(n,r)=>Yg(n,r))&&Gi(this.baseMutations,e.baseMutations,(n,r)=>Yg(n,r))}}class If{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){fe(e.mutations.length===r.length);let i=function(){return oR}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new If(e,n,r,i)}}/**
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
 */class wR{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class ER{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var De,ae;function IR(t){switch(t){default:return Z();case F.CANCELLED:case F.UNKNOWN:case F.DEADLINE_EXCEEDED:case F.RESOURCE_EXHAUSTED:case F.INTERNAL:case F.UNAVAILABLE:case F.UNAUTHENTICATED:return!1;case F.INVALID_ARGUMENT:case F.NOT_FOUND:case F.ALREADY_EXISTS:case F.PERMISSION_DENIED:case F.FAILED_PRECONDITION:case F.ABORTED:case F.OUT_OF_RANGE:case F.UNIMPLEMENTED:case F.DATA_LOSS:return!0}}function cw(t){if(t===void 0)return On("GRPC error has no .code"),F.UNKNOWN;switch(t){case De.OK:return F.OK;case De.CANCELLED:return F.CANCELLED;case De.UNKNOWN:return F.UNKNOWN;case De.DEADLINE_EXCEEDED:return F.DEADLINE_EXCEEDED;case De.RESOURCE_EXHAUSTED:return F.RESOURCE_EXHAUSTED;case De.INTERNAL:return F.INTERNAL;case De.UNAVAILABLE:return F.UNAVAILABLE;case De.UNAUTHENTICATED:return F.UNAUTHENTICATED;case De.INVALID_ARGUMENT:return F.INVALID_ARGUMENT;case De.NOT_FOUND:return F.NOT_FOUND;case De.ALREADY_EXISTS:return F.ALREADY_EXISTS;case De.PERMISSION_DENIED:return F.PERMISSION_DENIED;case De.FAILED_PRECONDITION:return F.FAILED_PRECONDITION;case De.ABORTED:return F.ABORTED;case De.OUT_OF_RANGE:return F.OUT_OF_RANGE;case De.UNIMPLEMENTED:return F.UNIMPLEMENTED;case De.DATA_LOSS:return F.DATA_LOSS;default:return Z()}}(ae=De||(De={}))[ae.OK=0]="OK",ae[ae.CANCELLED=1]="CANCELLED",ae[ae.UNKNOWN=2]="UNKNOWN",ae[ae.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ae[ae.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ae[ae.NOT_FOUND=5]="NOT_FOUND",ae[ae.ALREADY_EXISTS=6]="ALREADY_EXISTS",ae[ae.PERMISSION_DENIED=7]="PERMISSION_DENIED",ae[ae.UNAUTHENTICATED=16]="UNAUTHENTICATED",ae[ae.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ae[ae.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ae[ae.ABORTED=10]="ABORTED",ae[ae.OUT_OF_RANGE=11]="OUT_OF_RANGE",ae[ae.UNIMPLEMENTED=12]="UNIMPLEMENTED",ae[ae.INTERNAL=13]="INTERNAL",ae[ae.UNAVAILABLE=14]="UNAVAILABLE",ae[ae.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function TR(){return new TextEncoder}/**
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
 */const SR=new Fr([4294967295,4294967295],0);function Zg(t){const e=TR().encode(t),n=new O0;return n.update(e),new Uint8Array(n.digest())}function ey(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Fr([n,r],0),new Fr([i,s],0)]}class Tf{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Us(`Invalid padding: ${n}`);if(r<0)throw new Us(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Us(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Us(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=Fr.fromNumber(this.Ie)}Ee(e,n,r){let i=e.add(n.multiply(Fr.fromNumber(r)));return i.compare(SR)===1&&(i=new Fr([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=Zg(e),[r,i]=ey(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);if(!this.de(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new Tf(s,i,n);return r.forEach(u=>o.insert(u)),o}insert(e){if(this.Ie===0)return;const n=Zg(e),[r,i]=ey(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Us extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Iu{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,Uo.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Iu(ee.min(),i,new xe(he),Mn(),ie())}}class Uo{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Uo(r,n,ie(),ie(),ie())}}/**
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
 */class Qa{constructor(e,n,r,i){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=i}}class hw{constructor(e,n){this.targetId=e,this.me=n}}class dw{constructor(e,n,r=Xe.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class ty{constructor(){this.fe=0,this.ge=ry(),this.pe=Xe.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=ie(),n=ie(),r=ie();return this.ge.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:Z()}}),new Uo(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=ry()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,fe(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class xR{constructor(e){this.Le=e,this.Be=new Map,this.ke=Mn(),this.qe=ny(),this.Qe=new xe(he)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:Z()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,i)=>{this.ze(i)&&n(i)})}He(e){const n=e.targetId,r=e.me.count,i=this.Je(n);if(i){const s=i.target;if(Xh(s))if(r===0){const o=new Y(s.path);this.Ue(n,o,ot.newNoDocument(o,ee.min()))}else fe(r===1);else{const o=this.Ye(n);if(o!==r){const u=this.Ze(e),l=u?this.Xe(u,e,o):1;if(l!==0){this.je(n);const c=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,c)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,u;try{o=Kr(r).toUint8Array()}catch(l){if(l instanceof $0)return Ki("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{u=new Tf(o,i,s)}catch(l){return Ki(l instanceof Us?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return u.Ie===0?null:u}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Le.tt(),u=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(u)||(this.Ue(n,s,null),i++)}),i}rt(e){const n=new Map;this.Be.forEach((s,o)=>{const u=this.Je(o);if(u){if(s.current&&Xh(u.target)){const l=new Y(u.target.path);this.ke.get(l)!==null||this.it(o,l)||this.Ue(o,l,ot.newNoDocument(l,e))}s.be&&(n.set(o,s.ve()),s.Ce())}});let r=ie();this.qe.forEach((s,o)=>{let u=!0;o.forEachWhile(l=>{const c=this.Je(l);return!c||c.purpose==="TargetPurposeLimboResolution"||(u=!1,!1)}),u&&(r=r.add(s))}),this.ke.forEach((s,o)=>o.setReadTime(e));const i=new Iu(e,n,this.Qe,this.ke,r);return this.ke=Mn(),this.qe=ny(),this.Qe=new xe(he),i}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,n)?i.Fe(n,1):i.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new ty,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new Qe(he),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||H("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new ty),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function ny(){return new xe(Y.comparator)}function ry(){return new xe(Y.comparator)}const AR={asc:"ASCENDING",desc:"DESCENDING"},kR={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},RR={and:"AND",or:"OR"};class CR{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Zh(t,e){return t.useProto3Json||mu(e)?e:{value:e}}function Dl(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function fw(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function PR(t,e){return Dl(t,e.toTimestamp())}function on(t){return fe(!!t),ee.fromTimestamp(function(n){const r=vr(n);return new Fe(r.seconds,r.nanos)}(t))}function Sf(t,e){return ed(t,e).canonicalString()}function ed(t,e){const n=function(i){return new Ce(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function pw(t){const e=Ce.fromString(t);return fe(_w(e)),e}function td(t,e){return Sf(t.databaseId,e.path)}function Lc(t,e){const n=pw(e);if(n.get(1)!==t.databaseId.projectId)throw new G(F.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new G(F.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new Y(gw(n))}function mw(t,e){return Sf(t.databaseId,e)}function NR(t){const e=pw(t);return e.length===4?Ce.emptyPath():gw(e)}function nd(t){return new Ce(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function gw(t){return fe(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function iy(t,e,n){return{name:td(t,e),fields:n.value.mapValue.fields}}function bR(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:Z()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(c,d){return c.useProto3Json?(fe(d===void 0||typeof d=="string"),Xe.fromBase64String(d||"")):(fe(d===void 0||d instanceof Buffer||d instanceof Uint8Array),Xe.fromUint8Array(d||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,u=o&&function(c){const d=c.code===void 0?F.UNKNOWN:cw(c.code);return new G(d,c.message||"")}(o);n=new dw(r,i,s,u||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Lc(t,r.document.name),s=on(r.document.updateTime),o=r.document.createTime?on(r.document.createTime):ee.min(),u=new vt({mapValue:{fields:r.document.fields}}),l=ot.newFoundDocument(i,s,o,u),c=r.targetIds||[],d=r.removedTargetIds||[];n=new Qa(c,d,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Lc(t,r.document),s=r.readTime?on(r.readTime):ee.min(),o=ot.newNoDocument(i,s),u=r.removedTargetIds||[];n=new Qa([],u,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Lc(t,r.document),s=r.removedTargetIds||[];n=new Qa([],s,i,null)}else{if(!("filter"in e))return Z();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new ER(i,s),u=r.targetId;n=new hw(u,o)}}return n}function DR(t,e){let n;if(e instanceof Fo)n={update:iy(t,e.key,e.value)};else if(e instanceof uw)n={delete:td(t,e.key)};else if(e instanceof Tr)n={update:iy(t,e.key,e.data),updateMask:zR(e.fieldMask)};else{if(!(e instanceof vR))return Z();n={verify:td(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const u=o.transform;if(u instanceof Nl)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(u instanceof Xi)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:u.elements}};if(u instanceof Ro)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:u.elements}};if(u instanceof bl)return{fieldPath:o.field.canonicalString(),increment:u.Pe};throw Z()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:PR(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:Z()}(t,e.precondition)),n}function OR(t,e){return t&&t.length>0?(fe(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?on(i.updateTime):on(s);return o.isEqual(ee.min())&&(o=on(s)),new mR(o,i.transformResults||[])}(n,e))):[]}function MR(t,e){return{documents:[mw(t,e.path)]}}function VR(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=mw(t,i);const s=function(c){if(c.length!==0)return vw(pn.create(c,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(c){if(c.length!==0)return c.map(d=>function(m){return{field:fi(m.field),direction:FR(m.dir)}}(d))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const u=Zh(t,e.limit);return u!==null&&(n.structuredQuery.limit=u),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),{_t:n,parent:i}}function LR(t){let e=NR(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){fe(r===1);const d=n.from[0];d.allDescendants?i=d.collectionId:e=e.child(d.collectionId)}let s=[];n.where&&(s=function(p){const m=yw(p);return m instanceof pn&&K0(m)?m.getFilters():[m]}(n.where));let o=[];n.orderBy&&(o=function(p){return p.map(m=>function(x){return new Pl(pi(x.field),function(C){switch(C){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(x.direction))}(m))}(n.orderBy));let u=null;n.limit&&(u=function(p){let m;return m=typeof p=="object"?p.value:p,mu(m)?null:m}(n.limit));let l=null;n.startAt&&(l=function(p){const m=!!p.before,_=p.values||[];return new Cl(_,m)}(n.startAt));let c=null;return n.endAt&&(c=function(p){const m=!p.before,_=p.values||[];return new Cl(_,m)}(n.endAt)),eR(e,i,o,s,u,"F",l,c)}function jR(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Z()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function yw(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=pi(n.unaryFilter.field);return Ve.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=pi(n.unaryFilter.field);return Ve.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=pi(n.unaryFilter.field);return Ve.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=pi(n.unaryFilter.field);return Ve.create(o,"!=",{nullValue:"NULL_VALUE"});default:return Z()}}(t):t.fieldFilter!==void 0?function(n){return Ve.create(pi(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Z()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return pn.create(n.compositeFilter.filters.map(r=>yw(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return Z()}}(n.compositeFilter.op))}(t):Z()}function FR(t){return AR[t]}function UR(t){return kR[t]}function BR(t){return RR[t]}function fi(t){return{fieldPath:t.canonicalString()}}function pi(t){return Ke.fromServerFormat(t.fieldPath)}function vw(t){return t instanceof Ve?function(n){if(n.op==="=="){if(Wg(n.value))return{unaryFilter:{field:fi(n.field),op:"IS_NAN"}};if($g(n.value))return{unaryFilter:{field:fi(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Wg(n.value))return{unaryFilter:{field:fi(n.field),op:"IS_NOT_NAN"}};if($g(n.value))return{unaryFilter:{field:fi(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:fi(n.field),op:UR(n.op),value:n.value}}}(t):t instanceof pn?function(n){const r=n.getFilters().map(i=>vw(i));return r.length===1?r[0]:{compositeFilter:{op:BR(n.op),filters:r}}}(t):Z()}function zR(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function _w(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class nr{constructor(e,n,r,i,s=ee.min(),o=ee.min(),u=Xe.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=u,this.expectedCount=l}withSequenceNumber(e){return new nr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new nr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new nr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new nr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class $R{constructor(e){this.ct=e}}function WR(t){const e=LR({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Jh(e,e.limit,"L"):e}/**
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
 */class HR{constructor(){this.un=new qR}addToCollectionParentIndex(e,n){return this.un.add(n),L.resolve()}getCollectionParents(e,n){return L.resolve(this.un.getEntries(n))}addFieldIndex(e,n){return L.resolve()}deleteFieldIndex(e,n){return L.resolve()}deleteAllFieldIndexes(e){return L.resolve()}createTargetIndexes(e,n){return L.resolve()}getDocumentsMatchingTarget(e,n){return L.resolve(null)}getIndexType(e,n){return L.resolve(0)}getFieldIndexes(e,n){return L.resolve([])}getNextCollectionGroupToUpdate(e){return L.resolve(null)}getMinOffset(e,n){return L.resolve(yr.min())}getMinOffsetFromCollectionGroup(e,n){return L.resolve(yr.min())}updateCollectionGroup(e,n,r){return L.resolve()}updateIndexEntries(e,n){return L.resolve()}}class qR{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new Qe(Ce.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Qe(Ce.comparator)).toArray()}}/**
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
 */class Ji{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new Ji(0)}static kn(){return new Ji(-1)}}/**
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
 */class KR{constructor(){this.changes=new ls(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,ot.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?L.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class GR{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class QR{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&eo(r.mutation,i,Rt.empty(),Fe.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ie()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ie()){const i=Or();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=Fs();return s.forEach((u,l)=>{o=o.insert(u,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Or();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ie()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,u)=>{n.set(o,u)})})}computeViews(e,n,r,i){let s=Mn();const o=Zs(),u=function(){return Zs()}();return n.forEach((l,c)=>{const d=r.get(c.key);i.has(c.key)&&(d===void 0||d.mutation instanceof Tr)?s=s.insert(c.key,c):d!==void 0?(o.set(c.key,d.mutation.getFieldMask()),eo(d.mutation,c,d.mutation.getFieldMask(),Fe.now())):o.set(c.key,Rt.empty())}),this.recalculateAndSaveOverlays(e,s).next(l=>(l.forEach((c,d)=>o.set(c,d)),n.forEach((c,d)=>{var p;return u.set(c,new GR(d,(p=o.get(c))!==null&&p!==void 0?p:null))}),u))}recalculateAndSaveOverlays(e,n){const r=Zs();let i=new xe((o,u)=>o-u),s=ie();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const u of o)u.keys().forEach(l=>{const c=n.get(l);if(c===null)return;let d=r.get(l)||Rt.empty();d=u.applyToLocalView(c,d),r.set(l,d);const p=(i.get(u.batchId)||ie()).add(l);i=i.insert(u.batchId,p)})}).next(()=>{const o=[],u=i.getReverseIterator();for(;u.hasNext();){const l=u.getNext(),c=l.key,d=l.value,p=tw();d.forEach(m=>{if(!s.has(m)){const _=aw(n.get(m),r.get(m));_!==null&&p.set(m,_),s=s.add(m)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,p))}return L.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return Y.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):tR(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):L.resolve(Or());let u=-1,l=s;return o.next(c=>L.forEach(c,(d,p)=>(u<p.largestBatchId&&(u=p.largestBatchId),s.get(d)?L.resolve():this.remoteDocumentCache.getEntry(e,d).next(m=>{l=l.insert(d,m)}))).next(()=>this.populateOverlays(e,c,s)).next(()=>this.computeViews(e,l,c,ie())).next(d=>({batchId:u,changes:ew(d)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new Y(n)).next(r=>{let i=Fs();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=Fs();return this.indexManager.getCollectionParents(e,s).next(u=>L.forEach(u,l=>{const c=function(p,m){return new gu(m,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,l.child(s));return this.getDocumentsMatchingCollectionQuery(e,c,r,i).next(d=>{d.forEach((p,m)=>{o=o.insert(p,m)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((l,c)=>{const d=c.getKey();o.get(d)===null&&(o=o.insert(d,ot.newInvalidDocument(d)))});let u=Fs();return o.forEach((l,c)=>{const d=s.get(l);d!==void 0&&eo(d.mutation,c,Rt.empty(),Fe.now()),_u(n,c)&&(u=u.insert(l,c))}),u})}}/**
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
 */class YR{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,n){return L.resolve(this.hr.get(n))}saveBundleMetadata(e,n){return this.hr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:on(i.createTime)}}(n)),L.resolve()}getNamedQuery(e,n){return L.resolve(this.Pr.get(n))}saveNamedQuery(e,n){return this.Pr.set(n.name,function(i){return{name:i.name,query:WR(i.bundledQuery),readTime:on(i.readTime)}}(n)),L.resolve()}}/**
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
 */class XR{constructor(){this.overlays=new xe(Y.comparator),this.Ir=new Map}getOverlay(e,n){return L.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Or();return L.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ht(e,n,s)}),L.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Ir.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Ir.delete(r)),L.resolve()}getOverlaysForCollection(e,n,r){const i=Or(),s=n.length+1,o=new Y(n.child("")),u=this.overlays.getIteratorFrom(o);for(;u.hasNext();){const l=u.getNext().value,c=l.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return L.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new xe((c,d)=>c-d);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let d=s.get(c.largestBatchId);d===null&&(d=Or(),s=s.insert(c.largestBatchId,d)),d.set(c.getKey(),c)}}const u=Or(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((c,d)=>u.set(c,d)),!(u.size()>=i)););return L.resolve(u)}ht(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.Ir.get(i.largestBatchId).delete(r.key);this.Ir.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new wR(n,r));let s=this.Ir.get(n);s===void 0&&(s=ie(),this.Ir.set(n,s)),this.Ir.set(n,s.add(r.key))}}/**
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
 */class JR{constructor(){this.sessionToken=Xe.EMPTY_BYTE_STRING}getSessionToken(e){return L.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,L.resolve()}}/**
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
 */class xf{constructor(){this.Tr=new Qe(Ue.Er),this.dr=new Qe(Ue.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,n){const r=new Ue(e,n);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Vr(new Ue(e,n))}mr(e,n){e.forEach(r=>this.removeReference(r,n))}gr(e){const n=new Y(new Ce([])),r=new Ue(n,e),i=new Ue(n,e+1),s=[];return this.dr.forEachInRange([r,i],o=>{this.Vr(o),s.push(o.key)}),s}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const n=new Y(new Ce([])),r=new Ue(n,e),i=new Ue(n,e+1);let s=ie();return this.dr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new Ue(e,0),r=this.Tr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Ue{constructor(e,n){this.key=e,this.wr=n}static Er(e,n){return Y.comparator(e.key,n.key)||he(e.wr,n.wr)}static Ar(e,n){return he(e.wr,n.wr)||Y.comparator(e.key,n.key)}}/**
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
 */class ZR{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Sr=1,this.br=new Qe(Ue.Er)}checkEmpty(e){return L.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new _R(s,n,r,i);this.mutationQueue.push(o);for(const u of i)this.br=this.br.add(new Ue(u.key,s)),this.indexManager.addToCollectionParentIndex(e,u.key.path.popLast());return L.resolve(o)}lookupMutationBatch(e,n){return L.resolve(this.Dr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.vr(r),s=i<0?0:i;return L.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return L.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return L.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Ue(n,0),i=new Ue(n,Number.POSITIVE_INFINITY),s=[];return this.br.forEachInRange([r,i],o=>{const u=this.Dr(o.wr);s.push(u)}),L.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Qe(he);return n.forEach(i=>{const s=new Ue(i,0),o=new Ue(i,Number.POSITIVE_INFINITY);this.br.forEachInRange([s,o],u=>{r=r.add(u.wr)})}),L.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;Y.isDocumentKey(s)||(s=s.child(""));const o=new Ue(new Y(s),0);let u=new Qe(he);return this.br.forEachWhile(l=>{const c=l.key.path;return!!r.isPrefixOf(c)&&(c.length===i&&(u=u.add(l.wr)),!0)},o),L.resolve(this.Cr(u))}Cr(e){const n=[];return e.forEach(r=>{const i=this.Dr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){fe(this.Fr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return L.forEach(n.mutations,i=>{const s=new Ue(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,n){const r=new Ue(n,0),i=this.br.firstAfterOrEqual(r);return L.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,L.resolve()}Fr(e,n){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const n=this.vr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class eC{constructor(e){this.Mr=e,this.docs=function(){return new xe(Y.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Mr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return L.resolve(r?r.document.mutableCopy():ot.newInvalidDocument(n))}getEntries(e,n){let r=Mn();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():ot.newInvalidDocument(i))}),L.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=Mn();const o=n.path,u=new Y(o.child("")),l=this.docs.getIteratorFrom(u);for(;l.hasNext();){const{key:c,value:{document:d}}=l.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||Mk(Ok(d),r)<=0||(i.has(d.key)||_u(n,d))&&(s=s.insert(d.key,d.mutableCopy()))}return L.resolve(s)}getAllFromCollectionGroup(e,n,r,i){Z()}Or(e,n){return L.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new tC(this)}getSize(e){return L.resolve(this.size)}}class tC extends KR{constructor(e){super(),this.cr=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.cr.addEntry(e,i)):this.cr.removeEntry(r)}),L.waitFor(n)}getFromCache(e,n){return this.cr.getEntry(e,n)}getAllFromCache(e,n){return this.cr.getEntries(e,n)}}/**
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
 */class nC{constructor(e){this.persistence=e,this.Nr=new ls(n=>_f(n),wf),this.lastRemoteSnapshotVersion=ee.min(),this.highestTargetId=0,this.Lr=0,this.Br=new xf,this.targetCount=0,this.kr=Ji.Bn()}forEachTarget(e,n){return this.Nr.forEach((r,i)=>n(i)),L.resolve()}getLastRemoteSnapshotVersion(e){return L.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return L.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),L.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Lr&&(this.Lr=n),L.resolve()}Kn(e){this.Nr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.kr=new Ji(n),this.highestTargetId=n),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,n){return this.Kn(n),this.targetCount+=1,L.resolve()}updateTargetData(e,n){return this.Kn(n),L.resolve()}removeTargetData(e,n){return this.Nr.delete(n.target),this.Br.gr(n.targetId),this.targetCount-=1,L.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Nr.forEach((o,u)=>{u.sequenceNumber<=n&&r.get(u.targetId)===null&&(this.Nr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,u.targetId)),i++)}),L.waitFor(s).next(()=>i)}getTargetCount(e){return L.resolve(this.targetCount)}getTargetData(e,n){const r=this.Nr.get(n)||null;return L.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Rr(n,r),L.resolve()}removeMatchingKeys(e,n,r){this.Br.mr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),L.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Br.gr(n),L.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.yr(n);return L.resolve(r)}containsKey(e,n){return L.resolve(this.Br.containsKey(n))}}/**
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
 */class rC{constructor(e,n){this.qr={},this.overlays={},this.Qr=new mf(0),this.Kr=!1,this.Kr=!0,this.$r=new JR,this.referenceDelegate=e(this),this.Ur=new nC(this),this.indexManager=new HR,this.remoteDocumentCache=function(i){return new eC(i)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new $R(n),this.Gr=new YR(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new XR,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.qr[e.toKey()];return r||(r=new ZR(n,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,n,r){H("MemoryPersistence","Starting transaction:",e);const i=new iC(this.Qr.next());return this.referenceDelegate.zr(),r(i).next(s=>this.referenceDelegate.jr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Hr(e,n){return L.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,n)))}}class iC extends Lk{constructor(e){super(),this.currentSequenceNumber=e}}class Af{constructor(e){this.persistence=e,this.Jr=new xf,this.Yr=null}static Zr(e){return new Af(e)}get Xr(){if(this.Yr)return this.Yr;throw Z()}addReference(e,n,r){return this.Jr.addReference(r,n),this.Xr.delete(r.toString()),L.resolve()}removeReference(e,n,r){return this.Jr.removeReference(r,n),this.Xr.add(r.toString()),L.resolve()}markPotentiallyOrphaned(e,n){return this.Xr.add(n.toString()),L.resolve()}removeTarget(e,n){this.Jr.gr(n.targetId).forEach(i=>this.Xr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Xr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}zr(){this.Yr=new Set}jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return L.forEach(this.Xr,r=>{const i=Y.fromPath(r);return this.ei(e,i).next(s=>{s||n.removeEntry(i,ee.min())})}).next(()=>(this.Yr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ei(e,n).next(r=>{r?this.Xr.delete(n.toString()):this.Xr.add(n.toString())})}Wr(e){return 0}ei(e,n){return L.or([()=>L.resolve(this.Jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Hr(e,n)])}}/**
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
 */class kf{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.$i=r,this.Ui=i}static Wi(e,n){let r=ie(),i=ie();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new kf(e,n.fromCache,r,i)}}/**
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
 */class sC{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class oC{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return sA()?8:jk(lt())>0?6:4}()}initialize(e,n){this.Ji=e,this.indexManager=n,this.Gi=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.Yi(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Zi(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new sC;return this.Xi(e,n,o).next(u=>{if(s.result=u,this.zi)return this.es(e,n,o,u.size)})}).next(()=>s.result)}es(e,n,r,i){return r.documentReadCount<this.ji?(bs()<=oe.DEBUG&&H("QueryEngine","SDK will not create cache indexes for query:",di(n),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),L.resolve()):(bs()<=oe.DEBUG&&H("QueryEngine","Query:",di(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Hi*i?(bs()<=oe.DEBUG&&H("QueryEngine","The SDK decides to create cache indexes for query:",di(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,rn(n))):L.resolve())}Yi(e,n){if(Gg(n))return L.resolve(null);let r=rn(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Jh(n,null,"F"),r=rn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=ie(...s);return this.Ji.getDocuments(e,o).next(u=>this.indexManager.getMinOffset(e,r).next(l=>{const c=this.ts(n,u);return this.ns(n,c,o,l.readTime)?this.Yi(e,Jh(n,null,"F")):this.rs(e,c,n,l)}))})))}Zi(e,n,r,i){return Gg(n)||i.isEqual(ee.min())?L.resolve(null):this.Ji.getDocuments(e,r).next(s=>{const o=this.ts(n,s);return this.ns(n,o,r,i)?L.resolve(null):(bs()<=oe.DEBUG&&H("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),di(n)),this.rs(e,o,n,Dk(i,-1)).next(u=>u))})}ts(e,n){let r=new Qe(J0(e));return n.forEach((i,s)=>{_u(e,s)&&(r=r.add(s))}),r}ns(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Xi(e,n,r){return bs()<=oe.DEBUG&&H("QueryEngine","Using full collection scan to execute query:",di(n)),this.Ji.getDocumentsMatchingQuery(e,n,yr.min(),r)}rs(e,n,r,i){return this.Ji.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
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
 */class aC{constructor(e,n,r,i){this.persistence=e,this.ss=n,this.serializer=i,this.os=new xe(he),this._s=new ls(s=>_f(s),wf),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new QR(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.os))}}function lC(t,e,n,r){return new aC(t,e,n,r)}async function ww(t,e){const n=te(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.ls(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],u=[];let l=ie();for(const c of i){o.push(c.batchId);for(const d of c.mutations)l=l.add(d.key)}for(const c of s){u.push(c.batchId);for(const d of c.mutations)l=l.add(d.key)}return n.localDocuments.getDocuments(r,l).next(c=>({hs:c,removedBatchIds:o,addedBatchIds:u}))})})}function uC(t,e){const n=te(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.cs.newChangeBuffer({trackRemovals:!0});return function(u,l,c,d){const p=c.batch,m=p.keys();let _=L.resolve();return m.forEach(x=>{_=_.next(()=>d.getEntry(l,x)).next(P=>{const C=c.docVersions.get(x);fe(C!==null),P.version.compareTo(C)<0&&(p.applyToRemoteDocument(P,c),P.isValidDocument()&&(P.setReadTime(c.commitVersion),d.addEntry(P)))})}),_.next(()=>u.mutationQueue.removeMutationBatch(l,p))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(u){let l=ie();for(let c=0;c<u.mutationResults.length;++c)u.mutationResults[c].transformResults.length>0&&(l=l.add(u.batch.mutations[c].key));return l}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function Ew(t){const e=te(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ur.getLastRemoteSnapshotVersion(n))}function cC(t,e){const n=te(t),r=e.snapshotVersion;let i=n.os;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.cs.newChangeBuffer({trackRemovals:!0});i=n.os;const u=[];e.targetChanges.forEach((d,p)=>{const m=i.get(p);if(!m)return;u.push(n.Ur.removeMatchingKeys(s,d.removedDocuments,p).next(()=>n.Ur.addMatchingKeys(s,d.addedDocuments,p)));let _=m.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(p)!==null?_=_.withResumeToken(Xe.EMPTY_BYTE_STRING,ee.min()).withLastLimboFreeSnapshotVersion(ee.min()):d.resumeToken.approximateByteSize()>0&&(_=_.withResumeToken(d.resumeToken,r)),i=i.insert(p,_),function(P,C,S){return P.resumeToken.approximateByteSize()===0||C.snapshotVersion.toMicroseconds()-P.snapshotVersion.toMicroseconds()>=3e8?!0:S.addedDocuments.size+S.modifiedDocuments.size+S.removedDocuments.size>0}(m,_,d)&&u.push(n.Ur.updateTargetData(s,_))});let l=Mn(),c=ie();if(e.documentUpdates.forEach(d=>{e.resolvedLimboDocuments.has(d)&&u.push(n.persistence.referenceDelegate.updateLimboDocument(s,d))}),u.push(hC(s,o,e.documentUpdates).next(d=>{l=d.Ps,c=d.Is})),!r.isEqual(ee.min())){const d=n.Ur.getLastRemoteSnapshotVersion(s).next(p=>n.Ur.setTargetsMetadata(s,s.currentSequenceNumber,r));u.push(d)}return L.waitFor(u).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,l,c)).next(()=>l)}).then(s=>(n.os=i,s))}function hC(t,e,n){let r=ie(),i=ie();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=Mn();return n.forEach((u,l)=>{const c=s.get(u);l.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(u)),l.isNoDocument()&&l.version.isEqual(ee.min())?(e.removeEntry(u,l.readTime),o=o.insert(u,l)):!c.isValidDocument()||l.version.compareTo(c.version)>0||l.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(l),o=o.insert(u,l)):H("LocalStore","Ignoring outdated watch update for ",u,". Current version:",c.version," Watch version:",l.version)}),{Ps:o,Is:i}})}function dC(t,e){const n=te(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function fC(t,e){const n=te(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Ur.getTargetData(r,e).next(s=>s?(i=s,L.resolve(i)):n.Ur.allocateTargetId(r).next(o=>(i=new nr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Ur.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.os.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.os=n.os.insert(r.targetId,r),n._s.set(e,r.targetId)),r})}async function rd(t,e,n){const r=te(t),i=r.os.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!jo(o))throw o;H("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.os=r.os.remove(e),r._s.delete(i.target)}function sy(t,e,n){const r=te(t);let i=ee.min(),s=ie();return r.persistence.runTransaction("Execute query","readwrite",o=>function(l,c,d){const p=te(l),m=p._s.get(d);return m!==void 0?L.resolve(p.os.get(m)):p.Ur.getTargetData(c,d)}(r,o,rn(e)).next(u=>{if(u)return i=u.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(o,u.targetId).next(l=>{s=l})}).next(()=>r.ss.getDocumentsMatchingQuery(o,e,n?i:ee.min(),n?s:ie())).next(u=>(pC(r,rR(e),u),{documents:u,Ts:s})))}function pC(t,e,n){let r=t.us.get(e)||ee.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.us.set(e,r)}class oy{constructor(){this.activeTargetIds=uR()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class mC{constructor(){this.so=new oy,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,n,r){this.oo[e]=n}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new oy,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class gC{_o(e){}shutdown(){}}/**
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
 */class ay{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){H("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){H("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Na=null;function jc(){return Na===null?Na=function(){return 268435456+Math.round(2147483648*Math.random())}():Na++,"0x"+Na.toString(16)}/**
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
 */const yC={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class vC{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
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
 */const rt="WebChannelConnection";class _C extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+n.host,this.vo=`projects/${i}/databases/${s}`,this.Co=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get Fo(){return!1}Mo(n,r,i,s,o){const u=jc(),l=this.xo(n,r.toUriEncodedString());H("RestConnection",`Sending RPC '${n}' ${u}:`,l,i);const c={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(c,s,o),this.No(n,l,c,i).then(d=>(H("RestConnection",`Received RPC '${n}' ${u}: `,d),d),d=>{throw Ki("RestConnection",`RPC '${n}' ${u} failed with error: `,d,"url: ",l,"request:",i),d})}Lo(n,r,i,s,o,u){return this.Mo(n,r,i,s,o)}Oo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+as}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}xo(n,r){const i=yC[n];return`${this.Do}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,n,r,i){const s=jc();return new Promise((o,u)=>{const l=new M0;l.setWithCredentials(!0),l.listenOnce(V0.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case qa.NO_ERROR:const d=l.getResponseJson();H(rt,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(d)),o(d);break;case qa.TIMEOUT:H(rt,`RPC '${e}' ${s} timed out`),u(new G(F.DEADLINE_EXCEEDED,"Request time out"));break;case qa.HTTP_ERROR:const p=l.getStatus();if(H(rt,`RPC '${e}' ${s} failed with status:`,p,"response text:",l.getResponseText()),p>0){let m=l.getResponseJson();Array.isArray(m)&&(m=m[0]);const _=m==null?void 0:m.error;if(_&&_.status&&_.message){const x=function(C){const S=C.toLowerCase().replace(/_/g,"-");return Object.values(F).indexOf(S)>=0?S:F.UNKNOWN}(_.status);u(new G(x,_.message))}else u(new G(F.UNKNOWN,"Server responded with status "+l.getStatus()))}else u(new G(F.UNAVAILABLE,"Connection failed."));break;default:Z()}}finally{H(rt,`RPC '${e}' ${s} completed.`)}});const c=JSON.stringify(i);H(rt,`RPC '${e}' ${s} sending request:`,i),l.send(n,"POST",c,r,15)})}Bo(e,n,r){const i=jc(),s=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=F0(),u=j0(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(l.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Oo(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const d=s.join("");H(rt,`Creating RPC '${e}' stream ${i}: ${d}`,l);const p=o.createWebChannel(d,l);let m=!1,_=!1;const x=new vC({Io:C=>{_?H(rt,`Not sending because RPC '${e}' stream ${i} is closed:`,C):(m||(H(rt,`Opening RPC '${e}' stream ${i} transport.`),p.open(),m=!0),H(rt,`RPC '${e}' stream ${i} sending:`,C),p.send(C))},To:()=>p.close()}),P=(C,S,w)=>{C.listen(S,E=>{try{w(E)}catch(D){setTimeout(()=>{throw D},0)}})};return P(p,js.EventType.OPEN,()=>{_||(H(rt,`RPC '${e}' stream ${i} transport opened.`),x.yo())}),P(p,js.EventType.CLOSE,()=>{_||(_=!0,H(rt,`RPC '${e}' stream ${i} transport closed`),x.So())}),P(p,js.EventType.ERROR,C=>{_||(_=!0,Ki(rt,`RPC '${e}' stream ${i} transport errored:`,C),x.So(new G(F.UNAVAILABLE,"The operation could not be completed")))}),P(p,js.EventType.MESSAGE,C=>{var S;if(!_){const w=C.data[0];fe(!!w);const E=w,D=E.error||((S=E[0])===null||S===void 0?void 0:S.error);if(D){H(rt,`RPC '${e}' stream ${i} received error:`,D);const M=D.status;let V=function(T){const A=De[T];if(A!==void 0)return cw(A)}(M),I=D.message;V===void 0&&(V=F.INTERNAL,I="Unknown error status: "+M+" with message "+D.message),_=!0,x.So(new G(V,I)),p.close()}else H(rt,`RPC '${e}' stream ${i} received:`,w),x.bo(w)}}),P(u,L0.STAT_EVENT,C=>{C.stat===Kh.PROXY?H(rt,`RPC '${e}' stream ${i} detected buffering proxy`):C.stat===Kh.NOPROXY&&H(rt,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{x.wo()},0),x}}function Fc(){return typeof document<"u"?document:null}/**
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
 */function Tu(t){return new CR(t,!0)}/**
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
 */class Iw{constructor(e,n,r=1e3,i=1.5,s=6e4){this.ui=e,this.timerId=n,this.ko=r,this.qo=i,this.Qo=s,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),i=Math.max(0,n-r);i>0&&H("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,i,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
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
 */class Tw{constructor(e,n,r,i,s,o,u,l){this.ui=e,this.Ho=r,this.Jo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=u,this.listener=l,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new Iw(e,n)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,n){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():n&&n.code===F.RESOURCE_EXHAUSTED?(On(n.toString()),On("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):n&&n.code===F.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(n)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),n=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Yo===n&&this.P_(r,i)},r=>{e(()=>{const i=new G(F.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(i)})})}P_(e,n){const r=this.h_(this.Yo);this.stream=this.T_(e,n),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(i=>{r(()=>this.I_(i))}),this.stream.onMessage(i=>{r(()=>++this.e_==1?this.E_(i):this.onNext(i))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return H("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return n=>{this.ui.enqueueAndForget(()=>this.Yo===e?n():(H("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class wC extends Tw{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}T_(e,n){return this.connection.Bo("Listen",e,n)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const n=bR(this.serializer,e),r=function(s){if(!("targetChange"in s))return ee.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?ee.min():o.readTime?on(o.readTime):ee.min()}(e);return this.listener.d_(n,r)}A_(e){const n={};n.database=nd(this.serializer),n.addTarget=function(s,o){let u;const l=o.target;if(u=Xh(l)?{documents:MR(s,l)}:{query:VR(s,l)._t},u.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){u.resumeToken=fw(s,o.resumeToken);const c=Zh(s,o.expectedCount);c!==null&&(u.expectedCount=c)}else if(o.snapshotVersion.compareTo(ee.min())>0){u.readTime=Dl(s,o.snapshotVersion.toTimestamp());const c=Zh(s,o.expectedCount);c!==null&&(u.expectedCount=c)}return u}(this.serializer,e);const r=jR(this.serializer,e);r&&(n.labels=r),this.a_(n)}R_(e){const n={};n.database=nd(this.serializer),n.removeTarget=e,this.a_(n)}}class EC extends Tw{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,n){return this.connection.Bo("Write",e,n)}E_(e){return fe(!!e.streamToken),this.lastStreamToken=e.streamToken,fe(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){fe(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const n=OR(e.writeResults,e.commitTime),r=on(e.commitTime);return this.listener.g_(r,n)}p_(){const e={};e.database=nd(this.serializer),this.a_(e)}m_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>DR(this.serializer,r))};this.a_(n)}}/**
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
 */class IC extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.y_=!1}w_(){if(this.y_)throw new G(F.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,n,r,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Mo(e,ed(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===F.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new G(F.UNKNOWN,s.toString())})}Lo(e,n,r,i,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,u])=>this.connection.Lo(e,ed(n,r),i,o,u,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===F.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new G(F.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class TC{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const n=`Could not reach Cloud Firestore backend. ${e}
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
 */class SC{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=s,this.k_._o(o=>{r.enqueueAndForget(async()=>{oi(this)&&(H("RemoteStore","Restarting streams for network reachability change."),await async function(l){const c=te(l);c.L_.add(4),await Bo(c),c.q_.set("Unknown"),c.L_.delete(4),await Su(c)}(this))})}),this.q_=new TC(r,i)}}async function Su(t){if(oi(t))for(const e of t.B_)await e(!0)}async function Bo(t){for(const e of t.B_)await e(!1)}function Sw(t,e){const n=te(t);n.N_.has(e.targetId)||(n.N_.set(e.targetId,e),Nf(n)?Pf(n):us(n).r_()&&Cf(n,e))}function Rf(t,e){const n=te(t),r=us(n);n.N_.delete(e),r.r_()&&xw(n,e),n.N_.size===0&&(r.r_()?r.o_():oi(n)&&n.q_.set("Unknown"))}function Cf(t,e){if(t.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ee.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}us(t).A_(e)}function xw(t,e){t.Q_.xe(e),us(t).R_(e)}function Pf(t){t.Q_=new xR({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.N_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),us(t).start(),t.q_.v_()}function Nf(t){return oi(t)&&!us(t).n_()&&t.N_.size>0}function oi(t){return te(t).L_.size===0}function Aw(t){t.Q_=void 0}async function xC(t){t.q_.set("Online")}async function AC(t){t.N_.forEach((e,n)=>{Cf(t,e)})}async function kC(t,e){Aw(t),Nf(t)?(t.q_.M_(e),Pf(t)):t.q_.set("Unknown")}async function RC(t,e,n){if(t.q_.set("Online"),e instanceof dw&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const u of s.targetIds)i.N_.has(u)&&(await i.remoteSyncer.rejectListen(u,o),i.N_.delete(u),i.Q_.removeTarget(u))}(t,e)}catch(r){H("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Ol(t,r)}else if(e instanceof Qa?t.Q_.Ke(e):e instanceof hw?t.Q_.He(e):t.Q_.We(e),!n.isEqual(ee.min()))try{const r=await Ew(t.localStore);n.compareTo(r)>=0&&await function(s,o){const u=s.Q_.rt(o);return u.targetChanges.forEach((l,c)=>{if(l.resumeToken.approximateByteSize()>0){const d=s.N_.get(c);d&&s.N_.set(c,d.withResumeToken(l.resumeToken,o))}}),u.targetMismatches.forEach((l,c)=>{const d=s.N_.get(l);if(!d)return;s.N_.set(l,d.withResumeToken(Xe.EMPTY_BYTE_STRING,d.snapshotVersion)),xw(s,l);const p=new nr(d.target,l,c,d.sequenceNumber);Cf(s,p)}),s.remoteSyncer.applyRemoteEvent(u)}(t,n)}catch(r){H("RemoteStore","Failed to raise snapshot:",r),await Ol(t,r)}}async function Ol(t,e,n){if(!jo(e))throw e;t.L_.add(1),await Bo(t),t.q_.set("Offline"),n||(n=()=>Ew(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{H("RemoteStore","Retrying IndexedDB access"),await n(),t.L_.delete(1),await Su(t)})}function kw(t,e){return e().catch(n=>Ol(t,n,e))}async function xu(t){const e=te(t),n=_r(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;CC(e);)try{const i=await dC(e.localStore,r);if(i===null){e.O_.length===0&&n.o_();break}r=i.batchId,PC(e,i)}catch(i){await Ol(e,i)}Rw(e)&&Cw(e)}function CC(t){return oi(t)&&t.O_.length<10}function PC(t,e){t.O_.push(e);const n=_r(t);n.r_()&&n.V_&&n.m_(e.mutations)}function Rw(t){return oi(t)&&!_r(t).n_()&&t.O_.length>0}function Cw(t){_r(t).start()}async function NC(t){_r(t).p_()}async function bC(t){const e=_r(t);for(const n of t.O_)e.m_(n.mutations)}async function DC(t,e,n){const r=t.O_.shift(),i=If.from(r,e,n);await kw(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await xu(t)}async function OC(t,e){e&&_r(t).V_&&await async function(r,i){if(function(o){return IR(o)&&o!==F.ABORTED}(i.code)){const s=r.O_.shift();_r(r).s_(),await kw(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await xu(r)}}(t,e),Rw(t)&&Cw(t)}async function ly(t,e){const n=te(t);n.asyncQueue.verifyOperationInProgress(),H("RemoteStore","RemoteStore received new credentials");const r=oi(n);n.L_.add(3),await Bo(n),r&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.L_.delete(3),await Su(n)}async function MC(t,e){const n=te(t);e?(n.L_.delete(2),await Su(n)):e||(n.L_.add(2),await Bo(n),n.q_.set("Unknown"))}function us(t){return t.K_||(t.K_=function(n,r,i){const s=te(n);return s.w_(),new wC(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Eo:xC.bind(null,t),Ro:AC.bind(null,t),mo:kC.bind(null,t),d_:RC.bind(null,t)}),t.B_.push(async e=>{e?(t.K_.s_(),Nf(t)?Pf(t):t.q_.set("Unknown")):(await t.K_.stop(),Aw(t))})),t.K_}function _r(t){return t.U_||(t.U_=function(n,r,i){const s=te(n);return s.w_(),new EC(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Eo:()=>Promise.resolve(),Ro:NC.bind(null,t),mo:OC.bind(null,t),f_:bC.bind(null,t),g_:DC.bind(null,t)}),t.B_.push(async e=>{e?(t.U_.s_(),await xu(t)):(await t.U_.stop(),t.O_.length>0&&(H("RemoteStore",`Stopping write stream with ${t.O_.length} pending writes`),t.O_=[]))})),t.U_}/**
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
 */class bf{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new pr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,u=new bf(e,n,o,i,s);return u.start(r),u}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new G(F.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Df(t,e){if(On("AsyncQueue",`${e}: ${t}`),jo(t))return new G(F.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class Mi{constructor(e){this.comparator=e?(n,r)=>e(n,r)||Y.comparator(n.key,r.key):(n,r)=>Y.comparator(n.key,r.key),this.keyedMap=Fs(),this.sortedSet=new xe(this.comparator)}static emptySet(e){return new Mi(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Mi)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Mi;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class uy{constructor(){this.W_=new xe(Y.comparator)}track(e){const n=e.doc.key,r=this.W_.get(n);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(n,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(n):e.type===1&&r.type===2?this.W_=this.W_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):Z():this.W_=this.W_.insert(n,e)}G_(){const e=[];return this.W_.inorderTraversal((n,r)=>{e.push(r)}),e}}class Zi{constructor(e,n,r,i,s,o,u,l,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=u,this.excludesMetadataChanges=l,this.hasCachedResults=c}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(u=>{o.push({type:0,doc:u})}),new Zi(e,n,Mi.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&vu(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class VC{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class LC{constructor(){this.queries=cy(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(n,r){const i=te(n),s=i.queries;i.queries=cy(),s.forEach((o,u)=>{for(const l of u.j_)l.onError(r)})})(this,new G(F.ABORTED,"Firestore shutting down"))}}function cy(){return new ls(t=>X0(t),vu)}async function Pw(t,e){const n=te(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.H_()&&e.J_()&&(r=2):(s=new VC,r=e.J_()?0:1);try{switch(r){case 0:s.z_=await n.onListen(i,!0);break;case 1:s.z_=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const u=Df(o,`Initialization of query '${di(e.query)}' failed`);return void e.onError(u)}n.queries.set(i,s),s.j_.push(e),e.Z_(n.onlineState),s.z_&&e.X_(s.z_)&&Of(n)}async function Nw(t,e){const n=te(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.j_.indexOf(e);o>=0&&(s.j_.splice(o,1),s.j_.length===0?i=e.J_()?0:1:!s.H_()&&e.J_()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function jC(t,e){const n=te(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const u of o.j_)u.X_(i)&&(r=!0);o.z_=i}}r&&Of(n)}function FC(t,e,n){const r=te(t),i=r.queries.get(e);if(i)for(const s of i.j_)s.onError(n);r.queries.delete(e)}function Of(t){t.Y_.forEach(e=>{e.next()})}var id,hy;(hy=id||(id={})).ea="default",hy.Cache="cache";class bw{constructor(e,n,r){this.query=e,this.ta=n,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Zi(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.na?this.ia(e)&&(this.ta.next(e),n=!0):this.sa(e,this.onlineState)&&(this.oa(e),n=!0),this.ra=e,n}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let n=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),n=!0),n}sa(e,n){if(!e.fromCache||!this.J_())return!0;const r=n!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const n=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}oa(e){e=Zi.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==id.Cache}}/**
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
 */class Dw{constructor(e){this.key=e}}class Ow{constructor(e){this.key=e}}class UC{constructor(e,n){this.query=e,this.Ta=n,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=ie(),this.mutatedKeys=ie(),this.Aa=J0(e),this.Ra=new Mi(this.Aa)}get Va(){return this.Ta}ma(e,n){const r=n?n.fa:new uy,i=n?n.Ra:this.Ra;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,u=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((d,p)=>{const m=i.get(d),_=_u(this.query,p)?p:null,x=!!m&&this.mutatedKeys.has(m.key),P=!!_&&(_.hasLocalMutations||this.mutatedKeys.has(_.key)&&_.hasCommittedMutations);let C=!1;m&&_?m.data.isEqual(_.data)?x!==P&&(r.track({type:3,doc:_}),C=!0):this.ga(m,_)||(r.track({type:2,doc:_}),C=!0,(l&&this.Aa(_,l)>0||c&&this.Aa(_,c)<0)&&(u=!0)):!m&&_?(r.track({type:0,doc:_}),C=!0):m&&!_&&(r.track({type:1,doc:m}),C=!0,(l||c)&&(u=!0)),C&&(_?(o=o.add(_),s=P?s.add(d):s.delete(d)):(o=o.delete(d),s=s.delete(d)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const d=this.query.limitType==="F"?o.last():o.first();o=o.delete(d.key),s=s.delete(d.key),r.track({type:1,doc:d})}return{Ra:o,fa:r,ns:u,mutatedKeys:s}}ga(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const o=e.fa.G_();o.sort((d,p)=>function(_,x){const P=C=>{switch(C){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Z()}};return P(_)-P(x)}(d.type,p.type)||this.Aa(d.doc,p.doc)),this.pa(r),i=i!=null&&i;const u=n&&!i?this.ya():[],l=this.da.size===0&&this.current&&!i?1:0,c=l!==this.Ea;return this.Ea=l,o.length!==0||c?{snapshot:new Zi(this.query,e.Ra,s,o,e.mutatedKeys,l===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:u}:{wa:u}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new uy,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(n=>this.Ta=this.Ta.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ta=this.Ta.delete(n)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=ie(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const n=[];return e.forEach(r=>{this.da.has(r)||n.push(new Ow(r))}),this.da.forEach(r=>{e.has(r)||n.push(new Dw(r))}),n}ba(e){this.Ta=e.Ts,this.da=ie();const n=this.ma(e.documents);return this.applyChanges(n,!0)}Da(){return Zi.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class BC{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class zC{constructor(e){this.key=e,this.va=!1}}class $C{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new ls(u=>X0(u),vu),this.Ma=new Map,this.xa=new Set,this.Oa=new xe(Y.comparator),this.Na=new Map,this.La=new xf,this.Ba={},this.ka=new Map,this.qa=Ji.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function WC(t,e,n=!0){const r=Uw(t);let i;const s=r.Fa.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.Da()):i=await Mw(r,e,n,!0),i}async function HC(t,e){const n=Uw(t);await Mw(n,e,!0,!1)}async function Mw(t,e,n,r){const i=await fC(t.localStore,rn(e)),s=i.targetId,o=t.sharedClientState.addLocalQueryTarget(s,n);let u;return r&&(u=await qC(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&Sw(t.remoteStore,i),u}async function qC(t,e,n,r,i){t.Ka=(p,m,_)=>async function(P,C,S,w){let E=C.view.ma(S);E.ns&&(E=await sy(P.localStore,C.query,!1).then(({documents:I})=>C.view.ma(I,E)));const D=w&&w.targetChanges.get(C.targetId),M=w&&w.targetMismatches.get(C.targetId)!=null,V=C.view.applyChanges(E,P.isPrimaryClient,D,M);return fy(P,C.targetId,V.wa),V.snapshot}(t,p,m,_);const s=await sy(t.localStore,e,!0),o=new UC(e,s.Ts),u=o.ma(s.documents),l=Uo.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),c=o.applyChanges(u,t.isPrimaryClient,l);fy(t,n,c.wa);const d=new BC(e,n,o);return t.Fa.set(e,d),t.Ma.has(n)?t.Ma.get(n).push(e):t.Ma.set(n,[e]),c.snapshot}async function KC(t,e,n){const r=te(t),i=r.Fa.get(e),s=r.Ma.get(i.targetId);if(s.length>1)return r.Ma.set(i.targetId,s.filter(o=>!vu(o,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await rd(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&Rf(r.remoteStore,i.targetId),sd(r,i.targetId)}).catch(Lo)):(sd(r,i.targetId),await rd(r.localStore,i.targetId,!0))}async function GC(t,e){const n=te(t),r=n.Fa.get(e),i=n.Ma.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Rf(n.remoteStore,r.targetId))}async function QC(t,e,n){const r=nP(t);try{const i=await function(o,u){const l=te(o),c=Fe.now(),d=u.reduce((_,x)=>_.add(x.key),ie());let p,m;return l.persistence.runTransaction("Locally write mutations","readwrite",_=>{let x=Mn(),P=ie();return l.cs.getEntries(_,d).next(C=>{x=C,x.forEach((S,w)=>{w.isValidDocument()||(P=P.add(S))})}).next(()=>l.localDocuments.getOverlayedDocuments(_,x)).next(C=>{p=C;const S=[];for(const w of u){const E=yR(w,p.get(w.key).overlayedDocument);E!=null&&S.push(new Tr(w.key,E,W0(E.value.mapValue),sn.exists(!0)))}return l.mutationQueue.addMutationBatch(_,c,S,u)}).next(C=>{m=C;const S=C.applyToLocalDocumentSet(p,P);return l.documentOverlayCache.saveOverlays(_,C.batchId,S)})}).then(()=>({batchId:m.batchId,changes:ew(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,u,l){let c=o.Ba[o.currentUser.toKey()];c||(c=new xe(he)),c=c.insert(u,l),o.Ba[o.currentUser.toKey()]=c}(r,i.batchId,n),await zo(r,i.changes),await xu(r.remoteStore)}catch(i){const s=Df(i,"Failed to persist write");n.reject(s)}}async function Vw(t,e){const n=te(t);try{const r=await cC(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Na.get(s);o&&(fe(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.va=!0:i.modifiedDocuments.size>0?fe(o.va):i.removedDocuments.size>0&&(fe(o.va),o.va=!1))}),await zo(n,r,e)}catch(r){await Lo(r)}}function dy(t,e,n){const r=te(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Fa.forEach((s,o)=>{const u=o.view.Z_(e);u.snapshot&&i.push(u.snapshot)}),function(o,u){const l=te(o);l.onlineState=u;let c=!1;l.queries.forEach((d,p)=>{for(const m of p.j_)m.Z_(u)&&(c=!0)}),c&&Of(l)}(r.eventManager,e),i.length&&r.Ca.d_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function YC(t,e,n){const r=te(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Na.get(e),s=i&&i.key;if(s){let o=new xe(Y.comparator);o=o.insert(s,ot.newNoDocument(s,ee.min()));const u=ie().add(s),l=new Iu(ee.min(),new Map,new xe(he),o,u);await Vw(r,l),r.Oa=r.Oa.remove(s),r.Na.delete(e),Mf(r)}else await rd(r.localStore,e,!1).then(()=>sd(r,e,n)).catch(Lo)}async function XC(t,e){const n=te(t),r=e.batch.batchId;try{const i=await uC(n.localStore,e);jw(n,r,null),Lw(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await zo(n,i)}catch(i){await Lo(i)}}async function JC(t,e,n){const r=te(t);try{const i=await function(o,u){const l=te(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let d;return l.mutationQueue.lookupMutationBatch(c,u).next(p=>(fe(p!==null),d=p.keys(),l.mutationQueue.removeMutationBatch(c,p))).next(()=>l.mutationQueue.performConsistencyCheck(c)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(c,d,u)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,d)).next(()=>l.localDocuments.getDocuments(c,d))})}(r.localStore,e);jw(r,e,n),Lw(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await zo(r,i)}catch(i){await Lo(i)}}function Lw(t,e){(t.ka.get(e)||[]).forEach(n=>{n.resolve()}),t.ka.delete(e)}function jw(t,e,n){const r=te(t);let i=r.Ba[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Ba[r.currentUser.toKey()]=i}}function sd(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Ma.get(e))t.Fa.delete(r),n&&t.Ca.$a(r,n);t.Ma.delete(e),t.isPrimaryClient&&t.La.gr(e).forEach(r=>{t.La.containsKey(r)||Fw(t,r)})}function Fw(t,e){t.xa.delete(e.path.canonicalString());const n=t.Oa.get(e);n!==null&&(Rf(t.remoteStore,n),t.Oa=t.Oa.remove(e),t.Na.delete(n),Mf(t))}function fy(t,e,n){for(const r of n)r instanceof Dw?(t.La.addReference(r.key,e),ZC(t,r)):r instanceof Ow?(H("SyncEngine","Document no longer in limbo: "+r.key),t.La.removeReference(r.key,e),t.La.containsKey(r.key)||Fw(t,r.key)):Z()}function ZC(t,e){const n=e.key,r=n.path.canonicalString();t.Oa.get(n)||t.xa.has(r)||(H("SyncEngine","New document in limbo: "+n),t.xa.add(r),Mf(t))}function Mf(t){for(;t.xa.size>0&&t.Oa.size<t.maxConcurrentLimboResolutions;){const e=t.xa.values().next().value;t.xa.delete(e);const n=new Y(Ce.fromString(e)),r=t.qa.next();t.Na.set(r,new zC(n)),t.Oa=t.Oa.insert(n,r),Sw(t.remoteStore,new nr(rn(yu(n.path)),r,"TargetPurposeLimboResolution",mf.oe))}}async function zo(t,e,n){const r=te(t),i=[],s=[],o=[];r.Fa.isEmpty()||(r.Fa.forEach((u,l)=>{o.push(r.Ka(l,e,n).then(c=>{var d;if((c||n)&&r.isPrimaryClient){const p=c?!c.fromCache:(d=n==null?void 0:n.targetChanges.get(l.targetId))===null||d===void 0?void 0:d.current;r.sharedClientState.updateQueryState(l.targetId,p?"current":"not-current")}if(c){i.push(c);const p=kf.Wi(l.targetId,c);s.push(p)}}))}),await Promise.all(o),r.Ca.d_(i),await async function(l,c){const d=te(l);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>L.forEach(c,m=>L.forEach(m.$i,_=>d.persistence.referenceDelegate.addReference(p,m.targetId,_)).next(()=>L.forEach(m.Ui,_=>d.persistence.referenceDelegate.removeReference(p,m.targetId,_)))))}catch(p){if(!jo(p))throw p;H("LocalStore","Failed to update sequence numbers: "+p)}for(const p of c){const m=p.targetId;if(!p.fromCache){const _=d.os.get(m),x=_.snapshotVersion,P=_.withLastLimboFreeSnapshotVersion(x);d.os=d.os.insert(m,P)}}}(r.localStore,s))}async function eP(t,e){const n=te(t);if(!n.currentUser.isEqual(e)){H("SyncEngine","User change. New user:",e.toKey());const r=await ww(n.localStore,e);n.currentUser=e,function(s,o){s.ka.forEach(u=>{u.forEach(l=>{l.reject(new G(F.CANCELLED,o))})}),s.ka.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await zo(n,r.hs)}}function tP(t,e){const n=te(t),r=n.Na.get(e);if(r&&r.va)return ie().add(r.key);{let i=ie();const s=n.Ma.get(e);if(!s)return i;for(const o of s){const u=n.Fa.get(o);i=i.unionWith(u.view.Va)}return i}}function Uw(t){const e=te(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Vw.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=tP.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=YC.bind(null,e),e.Ca.d_=jC.bind(null,e.eventManager),e.Ca.$a=FC.bind(null,e.eventManager),e}function nP(t){const e=te(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=XC.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=JC.bind(null,e),e}class Ml{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Tu(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,n){return null}Ha(e,n){return null}za(e){return lC(this.persistence,new oC,e.initialUser,this.serializer)}Ga(e){return new rC(Af.Zr,this.serializer)}Wa(e){return new mC}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Ml.provider={build:()=>new Ml};class od{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>dy(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=eP.bind(null,this.syncEngine),await MC(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new LC}()}createDatastore(e){const n=Tu(e.databaseInfo.databaseId),r=function(s){return new _C(s)}(e.databaseInfo);return function(s,o,u,l){return new IC(s,o,u,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,u){return new SC(r,i,s,o,u)}(this.localStore,this.datastore,e.asyncQueue,n=>dy(this.syncEngine,n,0),function(){return ay.D()?new ay:new gC}())}createSyncEngine(e,n){return function(i,s,o,u,l,c,d){const p=new $C(i,s,o,u,l,c);return d&&(p.Qa=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const s=te(i);H("RemoteStore","RemoteStore shutting down."),s.L_.add(5),await Bo(s),s.k_.shutdown(),s.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}od.provider={build:()=>new od};/**
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
 */class Bw{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):On("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class rP{constructor(e,n,r,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=it.UNAUTHENTICATED,this.clientId=B0.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async o=>{H("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(H("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new pr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Df(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Uc(t,e){t.asyncQueue.verifyOperationInProgress(),H("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await ww(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function py(t,e){t.asyncQueue.verifyOperationInProgress();const n=await iP(t);H("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>ly(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>ly(e.remoteStore,i)),t._onlineComponents=e}async function iP(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){H("FirestoreClient","Using user provided OfflineComponentProvider");try{await Uc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(i){return i.name==="FirebaseError"?i.code===F.FAILED_PRECONDITION||i.code===F.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(n))throw n;Ki("Error using user provided cache. Falling back to memory cache: "+n),await Uc(t,new Ml)}}else H("FirestoreClient","Using default OfflineComponentProvider"),await Uc(t,new Ml);return t._offlineComponents}async function zw(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(H("FirestoreClient","Using user provided OnlineComponentProvider"),await py(t,t._uninitializedComponentsProvider._online)):(H("FirestoreClient","Using default OnlineComponentProvider"),await py(t,new od))),t._onlineComponents}function sP(t){return zw(t).then(e=>e.syncEngine)}async function ad(t){const e=await zw(t),n=e.eventManager;return n.onListen=WC.bind(null,e.syncEngine),n.onUnlisten=KC.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=HC.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=GC.bind(null,e.syncEngine),n}function oP(t,e,n={}){const r=new pr;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,u,l,c){const d=new Bw({next:m=>{d.Za(),o.enqueueAndForget(()=>Nw(s,p));const _=m.docs.has(u);!_&&m.fromCache?c.reject(new G(F.UNAVAILABLE,"Failed to get document because the client is offline.")):_&&m.fromCache&&l&&l.source==="server"?c.reject(new G(F.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(m)},error:m=>c.reject(m)}),p=new bw(yu(u.path),d,{includeMetadataChanges:!0,_a:!0});return Pw(s,p)}(await ad(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function $w(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const my=new Map;/**
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
 */function aP(t,e,n){if(!n)throw new G(F.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function lP(t,e,n,r){if(e===!0&&r===!0)throw new G(F.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function gy(t){if(!Y.isDocumentKey(t))throw new G(F.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Vf(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Z()}function an(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new G(F.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Vf(t);throw new G(F.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class yy{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new G(F.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new G(F.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}lP("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=$w((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new G(F.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new G(F.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new G(F.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Lf{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new yy({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new G(F.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new G(F.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new yy(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Sk;switch(r.type){case"firstParty":return new Rk(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new G(F.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=my.get(n);r&&(H("ComponentProvider","Removing Datastore"),my.delete(n),r.terminate())}(this),Promise.resolve()}}function uP(t,e,n,r={}){var i;const s=(t=an(t,Lf))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&Ki("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let u,l;if(typeof r.mockUserToken=="string")u=r.mockUserToken,l=it.MOCK_USER;else{u=Zx(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new G(F.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new it(c)}t._authCredentials=new xk(new U0(u,l))}}/**
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
 */class Au{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Au(this.firestore,e,this._query)}}class Tt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Co(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Tt(this.firestore,e,this._key)}}class Co extends Au{constructor(e,n,r){super(e,n,yu(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Tt(this.firestore,null,new Y(e))}withConverter(e){return new Co(this.firestore,e,this._path)}}function ln(t,e,...n){if(t=ut(t),arguments.length===1&&(e=B0.newId()),aP("doc","path",e),t instanceof Lf){const r=Ce.fromString(e,...n);return gy(r),new Tt(t,null,new Y(r))}{if(!(t instanceof Tt||t instanceof Co))throw new G(F.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ce.fromString(e,...n));return gy(r),new Tt(t.firestore,t instanceof Co?t.converter:null,new Y(r))}}/**
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
 */class vy{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new Iw(this,"async_queue_retry"),this.Vu=()=>{const r=Fc();r&&H("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const n=Fc();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const n=Fc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const n=new pr;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!jo(e))throw e;H("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const n=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const i=function(o){let u=o.message||"";return o.stack&&(u=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),u}(r);throw On("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.du=!1,r))));return this.mu=n,n}enqueueAfterDelay(e,n,r){this.fu(),this.Ru.indexOf(e)>-1&&(n=0);const i=bf.createAndSchedule(this,e,n,r,s=>this.yu(s));return this.Tu.push(i),i}fu(){this.Eu&&Z()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const n of this.Tu)if(n.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Tu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const n=this.Tu.indexOf(e);this.Tu.splice(n,1)}}function _y(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const i=n;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(t,["next","error","complete"])}class es extends Lf{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new vy,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new vy(e),this._firestoreClient=void 0,await e}}}function cP(t,e){const n=typeof t=="object"?t:ff(),r=typeof t=="string"?t:"(default)",i=ii(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=Xx("firestore");s&&uP(i,...s)}return i}function jf(t){if(t._terminated)throw new G(F.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||hP(t),t._firestoreClient}function hP(t){var e,n,r;const i=t._freezeSettings(),s=function(u,l,c,d){return new Bk(u,l,c,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,$w(d.experimentalLongPollingOptions),d.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._componentsProvider||!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),t._firestoreClient=new rP(t._authCredentials,t._appCheckCredentials,t._queue,s,t._componentsProvider&&function(u){const l=u==null?void 0:u._online.build();return{_offline:u==null?void 0:u._offline.build(l),_online:l}}(t._componentsProvider))}/**
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
 */class ts{constructor(e){this._byteString=e}static fromBase64String(e){try{return new ts(Xe.fromBase64String(e))}catch(n){throw new G(F.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new ts(Xe.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class ku{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new G(F.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ke(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Ff{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new G(F.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new G(F.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return he(this._lat,e._lat)||he(this._long,e._long)}}/**
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
 */class Uf{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}}/**
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
 */const dP=/^__.*__$/;class fP{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Tr(e,this.data,this.fieldMask,n,this.fieldTransforms):new Fo(e,this.data,n,this.fieldTransforms)}}class Ww{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Tr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function Hw(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Z()}}class Cu{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.vu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new Cu(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.Ou(e),i}Nu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.vu(),i}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return Vl(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(Hw(this.Cu)&&dP.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class pP{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Tu(e)}Qu(e,n,r,i=!1){return new Cu({Cu:e,methodName:n,qu:r,path:Ke.emptyPath(),xu:!1,ku:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function qw(t){const e=t._freezeSettings(),n=Tu(t._databaseId);return new pP(t._databaseId,!!e.ignoreUndefinedProperties,n)}function mP(t,e,n,r,i,s={}){const o=t.Qu(s.merge||s.mergeFields?2:0,e,n,i);zf("Data must be an object, but it was:",o,r);const u=Kw(r,o);let l,c;if(s.merge)l=new Rt(o.fieldMask),c=o.fieldTransforms;else if(s.mergeFields){const d=[];for(const p of s.mergeFields){const m=ld(e,p,n);if(!o.contains(m))throw new G(F.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);Qw(d,m)||d.push(m)}l=new Rt(d),c=o.fieldTransforms.filter(p=>l.covers(p.field))}else l=null,c=o.fieldTransforms;return new fP(new vt(u),l,c)}class Pu extends Ru{_toFieldTransform(e){if(e.Cu!==2)throw e.Cu===1?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Pu}}function gP(t,e,n){return new Cu({Cu:3,qu:e.settings.qu,methodName:t._methodName,xu:n},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class Bf extends Ru{constructor(e,n){super(e),this.Ku=n}_toFieldTransform(e){const n=gP(this,e,!0),r=this.Ku.map(s=>$o(s,n)),i=new Xi(r);return new fR(e.path,i)}isEqual(e){return e instanceof Bf&&qi(this.Ku,e.Ku)}}function yP(t,e,n,r){const i=t.Qu(1,e,n);zf("Data must be an object, but it was:",i,r);const s=[],o=vt.empty();si(r,(l,c)=>{const d=$f(e,l,n);c=ut(c);const p=i.Nu(d);if(c instanceof Pu)s.push(d);else{const m=$o(c,p);m!=null&&(s.push(d),o.set(d,m))}});const u=new Rt(s);return new Ww(o,u,i.fieldTransforms)}function vP(t,e,n,r,i,s){const o=t.Qu(1,e,n),u=[ld(e,r,n)],l=[i];if(s.length%2!=0)throw new G(F.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let m=0;m<s.length;m+=2)u.push(ld(e,s[m])),l.push(s[m+1]);const c=[],d=vt.empty();for(let m=u.length-1;m>=0;--m)if(!Qw(c,u[m])){const _=u[m];let x=l[m];x=ut(x);const P=o.Nu(_);if(x instanceof Pu)c.push(_);else{const C=$o(x,P);C!=null&&(c.push(_),d.set(_,C))}}const p=new Rt(c);return new Ww(d,p,o.fieldTransforms)}function $o(t,e){if(Gw(t=ut(t)))return zf("Unsupported field value:",e,t),Kw(t,e);if(t instanceof Ru)return function(r,i){if(!Hw(i.Cu))throw i.Bu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Bu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const u of r){let l=$o(u,i.Lu(o));l==null&&(l={nullValue:"NULL_VALUE"}),s.push(l),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=ut(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return cR(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=Fe.fromDate(r);return{timestampValue:Dl(i.serializer,s)}}if(r instanceof Fe){const s=new Fe(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Dl(i.serializer,s)}}if(r instanceof Ff)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof ts)return{bytesValue:fw(i.serializer,r._byteString)};if(r instanceof Tt){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Bu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Sf(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof Uf)return function(o,u){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(l=>{if(typeof l!="number")throw u.Bu("VectorValues must only contain numeric values.");return Ef(u.serializer,l)})}}}}}}(r,i);throw i.Bu(`Unsupported field value: ${Vf(r)}`)}(t,e)}function Kw(t,e){const n={};return z0(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):si(t,(r,i)=>{const s=$o(i,e.Mu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function Gw(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Fe||t instanceof Ff||t instanceof ts||t instanceof Tt||t instanceof Ru||t instanceof Uf)}function zf(t,e,n){if(!Gw(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=Vf(n);throw r==="an object"?e.Bu(t+" a custom object"):e.Bu(t+" "+r)}}function ld(t,e,n){if((e=ut(e))instanceof ku)return e._internalPath;if(typeof e=="string")return $f(t,e);throw Vl("Field path arguments must be of type string or ",t,!1,void 0,n)}const _P=new RegExp("[~\\*/\\[\\]]");function $f(t,e,n){if(e.search(_P)>=0)throw Vl(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new ku(...e.split("."))._internalPath}catch{throw Vl(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Vl(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let u=`Function ${e}() called with invalid data`;n&&(u+=" (via `toFirestore()`)"),u+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new G(F.INVALID_ARGUMENT,u+t+l)}function Qw(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class Yw{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Tt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new wP(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Xw("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class wP extends Yw{data(){return super.data()}}function Xw(t,e){return typeof e=="string"?$f(t,e):e instanceof ku?e._internalPath:e._delegate._internalPath}/**
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
 */function EP(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new G(F.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class IP{convertValue(e,n="none"){switch(Gr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ne(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Kr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw Z()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return si(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertVectorValue(e){var n,r,i;const s=(i=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(o=>Ne(o.doubleValue));return new Uf(s)}convertGeoPoint(e){return new Ff(Ne(e.latitude),Ne(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=yf(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(xo(e));default:return null}}convertTimestamp(e){const n=vr(e);return new Fe(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Ce.fromString(e);fe(_w(r));const i=new Ao(r.get(1),r.get(3)),s=new Y(r.popFirst(5));return i.isEqual(n)||On(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
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
 */function TP(t,e,n){let r;return r=t?t.toFirestore(e):e,r}/**
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
 */class Bs{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Jw extends Yw{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Ya(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Xw("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Ya extends Jw{data(e={}){return super.data(e)}}class SP{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Bs(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Ya(this._firestore,this._userDataWriter,r.key,r,new Bs(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new G(F.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(u=>{const l=new Ya(i._firestore,i._userDataWriter,u.doc.key,u.doc,new Bs(i._snapshot.mutatedKeys.has(u.doc.key),i._snapshot.fromCache),i.query.converter);return u.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(u=>s||u.type!==3).map(u=>{const l=new Ya(i._firestore,i._userDataWriter,u.doc.key,u.doc,new Bs(i._snapshot.mutatedKeys.has(u.doc.key),i._snapshot.fromCache),i.query.converter);let c=-1,d=-1;return u.type!==0&&(c=o.indexOf(u.doc.key),o=o.delete(u.doc.key)),u.type!==1&&(o=o.add(u.doc),d=o.indexOf(u.doc.key)),{type:xP(u.type),doc:l,oldIndex:c,newIndex:d}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function xP(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Z()}}/**
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
 */function AP(t){t=an(t,Tt);const e=an(t.firestore,es);return oP(jf(e),t._key).then(n=>tE(e,t,n))}class Zw extends IP{constructor(e){super(),this.firestore=e}convertBytes(e){return new ts(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Tt(this.firestore,null,n)}}function kP(t,e,n){t=an(t,Tt);const r=an(t.firestore,es),i=TP(t.converter,e);return eE(r,[mP(qw(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,sn.none())])}function Rn(t,e,n,...r){t=an(t,Tt);const i=an(t.firestore,es),s=qw(i);let o;return o=typeof(e=ut(e))=="string"||e instanceof ku?vP(s,"updateDoc",t._key,e,n,r):yP(s,"updateDoc",t._key,e),eE(i,[o.toMutation(t._key,sn.exists(!0))])}function RP(t,...e){var n,r,i;t=ut(t);let s={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||_y(e[o])||(s=e[o],o++);const u={includeMetadataChanges:s.includeMetadataChanges,source:s.source};if(_y(e[o])){const p=e[o];e[o]=(n=p.next)===null||n===void 0?void 0:n.bind(p),e[o+1]=(r=p.error)===null||r===void 0?void 0:r.bind(p),e[o+2]=(i=p.complete)===null||i===void 0?void 0:i.bind(p)}let l,c,d;if(t instanceof Tt)c=an(t.firestore,es),d=yu(t._key.path),l={next:p=>{e[o]&&e[o](tE(c,t,p))},error:e[o+1],complete:e[o+2]};else{const p=an(t,Au);c=an(p.firestore,es),d=p._query;const m=new Zw(c);l={next:_=>{e[o]&&e[o](new SP(c,m,p,_))},error:e[o+1],complete:e[o+2]},EP(t._query)}return function(m,_,x,P){const C=new Bw(P),S=new bw(_,C,x);return m.asyncQueue.enqueueAndForget(async()=>Pw(await ad(m),S)),()=>{C.Za(),m.asyncQueue.enqueueAndForget(async()=>Nw(await ad(m),S))}}(jf(c),d,u,l)}function eE(t,e){return function(r,i){const s=new pr;return r.asyncQueue.enqueueAndForget(async()=>QC(await sP(r),i,s)),s.promise}(jf(t),e)}function tE(t,e,n){const r=n.docs.get(e._key),i=new Zw(t);return new Jw(t,i,e._key,r,new Bs(n.hasPendingWrites,n.fromCache),e.converter)}function CP(...t){return new Bf("arrayUnion",t)}(function(e,n=!0){(function(i){as=i})(os),dn(new Yt("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),u=new es(new Ak(r.getProvider("auth-internal")),new Pk(r.getProvider("app-check-internal")),function(c,d){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new G(F.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ao(c.options.projectId,d)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),u._setSettings(s),u},"PUBLIC").setMultipleInstances(!0)),jt(jg,"4.7.3",e),jt(jg,"4.7.3","esm2017")})();var PP="firebase",NP="10.14.1";/**
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
 */jt(PP,NP,"app");function Wf(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function nE(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const bP=nE,rE=new ri("auth","Firebase",nE());/**
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
 */const Ll=new pu("@firebase/auth");function DP(t,...e){Ll.logLevel<=oe.WARN&&Ll.warn(`Auth (${os}): ${t}`,...e)}function Xa(t,...e){Ll.logLevel<=oe.ERROR&&Ll.error(`Auth (${os}): ${t}`,...e)}/**
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
 */function Vn(t,...e){throw Hf(t,...e)}function un(t,...e){return Hf(t,...e)}function iE(t,e,n){const r=Object.assign(Object.assign({},bP()),{[e]:n});return new ri("auth","Firebase",r).create(e,{appName:t.name})}function Ur(t){return iE(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Hf(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return rE.create(t,...e)}function J(t,e,...n){if(!t)throw Hf(e,...n)}function Sn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Xa(e),new Error(e)}function Ln(t,e){t||Sn(e)}/**
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
 */function ud(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function OP(){return wy()==="http:"||wy()==="https:"}function wy(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function MP(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(OP()||x0()||"connection"in navigator)?navigator.onLine:!0}function VP(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Wo{constructor(e,n){this.shortDelay=e,this.longDelay=n,Ln(n>e,"Short delay should be less than long delay!"),this.isMobile=eA()||rA()}get(){return MP()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function qf(t,e){Ln(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class sE{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Sn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Sn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Sn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const LP={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const jP=new Wo(3e4,6e4);function Kf(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function cs(t,e,n,r,i={}){return oE(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const u=Vo(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode);const c=Object.assign({method:e,headers:l},s);return nA()||(c.referrerPolicy="no-referrer"),sE.fetch()(aE(t,t.config.apiHost,n,u),c)})}async function oE(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},LP),e);try{const i=new UP(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw ba(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const u=s.ok?o.errorMessage:o.error.message,[l,c]=u.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw ba(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw ba(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw ba(t,"user-disabled",o);const d=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw iE(t,d,c);Vn(t,d)}}catch(i){if(i instanceof Xt)throw i;Vn(t,"network-request-failed",{message:String(i)})}}async function FP(t,e,n,r,i={}){const s=await cs(t,e,n,r,i);return"mfaPendingCredential"in s&&Vn(t,"multi-factor-auth-required",{_serverResponse:s}),s}function aE(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?qf(t.config,i):`${t.config.apiScheme}://${i}`}class UP{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(un(this.auth,"network-request-failed")),jP.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function ba(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=un(t,e,r);return i.customData._tokenResponse=n,i}/**
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
 */async function BP(t,e){return cs(t,"POST","/v1/accounts:delete",e)}async function lE(t,e){return cs(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function to(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function zP(t,e=!1){const n=ut(t),r=await n.getIdToken(e),i=Gf(r);J(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:to(Bc(i.auth_time)),issuedAtTime:to(Bc(i.iat)),expirationTime:to(Bc(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Bc(t){return Number(t)*1e3}function Gf(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Xa("JWT malformed, contained fewer than 3 sections"),null;try{const i=E0(n);return i?JSON.parse(i):(Xa("Failed to decode base64 JWT payload"),null)}catch(i){return Xa("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Ey(t){const e=Gf(t);return J(e,"internal-error"),J(typeof e.exp<"u","internal-error"),J(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Po(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Xt&&$P(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function $P({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class WP{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class cd{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=to(this.lastLoginAt),this.creationTime=to(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function jl(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Po(t,lE(n,{idToken:r}));J(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?uE(s.providerUserInfo):[],u=qP(t.providerData,o),l=t.isAnonymous,c=!(t.email&&s.passwordHash)&&!(u!=null&&u.length),d=l?c:!1,p={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:u,metadata:new cd(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(t,p)}async function HP(t){const e=ut(t);await jl(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function qP(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function uE(t){return t.map(e=>{var{providerId:n}=e,r=Wf(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function KP(t,e){const n=await oE(t,{},async()=>{const r=Vo({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=aE(t,i,"/v1/token",`key=${s}`),u=await t._getAdditionalHeaders();return u["Content-Type"]="application/x-www-form-urlencoded",sE.fetch()(o,{method:"POST",headers:u,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function GP(t,e){return cs(t,"POST","/v2/accounts:revokeToken",Kf(t,e))}/**
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
 */class Vi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){J(e.idToken,"internal-error"),J(typeof e.idToken<"u","internal-error"),J(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Ey(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){J(e.length!==0,"internal-error");const n=Ey(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(J(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await KP(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Vi;return r&&(J(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(J(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(J(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Vi,this.toJSON())}_performRefresh(){return Sn("not implemented")}}/**
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
 */function $n(t,e){J(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class xn{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Wf(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new WP(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new cd(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Po(this,this.stsTokenManager.getToken(this.auth,e));return J(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return zP(this,e)}reload(){return HP(this)}_assign(e){this!==e&&(J(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new xn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){J(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await jl(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(tr(this.auth.app))return Promise.reject(Ur(this.auth));const e=await this.getIdToken();return await Po(this,BP(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,u,l,c,d;const p=(r=n.displayName)!==null&&r!==void 0?r:void 0,m=(i=n.email)!==null&&i!==void 0?i:void 0,_=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,x=(o=n.photoURL)!==null&&o!==void 0?o:void 0,P=(u=n.tenantId)!==null&&u!==void 0?u:void 0,C=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,S=(c=n.createdAt)!==null&&c!==void 0?c:void 0,w=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:E,emailVerified:D,isAnonymous:M,providerData:V,stsTokenManager:I}=n;J(E&&I,e,"internal-error");const v=Vi.fromJSON(this.name,I);J(typeof E=="string",e,"internal-error"),$n(p,e.name),$n(m,e.name),J(typeof D=="boolean",e,"internal-error"),J(typeof M=="boolean",e,"internal-error"),$n(_,e.name),$n(x,e.name),$n(P,e.name),$n(C,e.name),$n(S,e.name),$n(w,e.name);const T=new xn({uid:E,auth:e,email:m,emailVerified:D,displayName:p,isAnonymous:M,photoURL:x,phoneNumber:_,tenantId:P,stsTokenManager:v,createdAt:S,lastLoginAt:w});return V&&Array.isArray(V)&&(T.providerData=V.map(A=>Object.assign({},A))),C&&(T._redirectEventId=C),T}static async _fromIdTokenResponse(e,n,r=!1){const i=new Vi;i.updateFromServerResponse(n);const s=new xn({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await jl(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];J(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?uE(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),u=new Vi;u.updateFromIdToken(r);const l=new xn({uid:i.localId,auth:e,stsTokenManager:u,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new cd(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(l,c),l}}/**
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
 */const Iy=new Map;function An(t){Ln(t instanceof Function,"Expected a class definition");let e=Iy.get(t);return e?(Ln(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Iy.set(t,e),e)}/**
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
 */class cE{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}cE.type="NONE";const Ty=cE;/**
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
 */function Ja(t,e,n){return`firebase:${t}:${e}:${n}`}class Li{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Ja(this.userKey,i.apiKey,s),this.fullPersistenceKey=Ja("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?xn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Li(An(Ty),e,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||An(Ty);const o=Ja(r,e.config.apiKey,e.name);let u=null;for(const c of n)try{const d=await c._get(o);if(d){const p=xn._fromJSON(e,d);c!==s&&(u=p),s=c;break}}catch{}const l=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new Li(s,e,r):(s=l[0],u&&await s._set(o,u.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new Li(s,e,r))}}/**
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
 */function Sy(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(pE(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(hE(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(gE(e))return"Blackberry";if(yE(e))return"Webos";if(dE(e))return"Safari";if((e.includes("chrome/")||fE(e))&&!e.includes("edge/"))return"Chrome";if(mE(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function hE(t=lt()){return/firefox\//i.test(t)}function dE(t=lt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function fE(t=lt()){return/crios\//i.test(t)}function pE(t=lt()){return/iemobile/i.test(t)}function mE(t=lt()){return/android/i.test(t)}function gE(t=lt()){return/blackberry/i.test(t)}function yE(t=lt()){return/webos/i.test(t)}function Qf(t=lt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function QP(t=lt()){var e;return Qf(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function YP(){return iA()&&document.documentMode===10}function vE(t=lt()){return Qf(t)||mE(t)||yE(t)||gE(t)||/windows phone/i.test(t)||pE(t)}/**
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
 */function _E(t,e=[]){let n;switch(t){case"Browser":n=Sy(lt());break;case"Worker":n=`${Sy(lt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${os}/${r}`}/**
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
 */class XP{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,u)=>{try{const l=e(s);o(l)}catch(l){u(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function JP(t,e={}){return cs(t,"GET","/v2/passwordPolicy",Kf(t,e))}/**
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
 */const ZP=6;class e2{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:ZP,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,u;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(s=l.containsUppercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(u=l.containsNonAlphanumericCharacter)!==null&&u!==void 0?u:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class t2{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new xy(this),this.idTokenSubscription=new xy(this),this.beforeStateQueue=new XP(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=rE,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=An(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Li.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await lE(this,{idToken:e}),r=await xn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(tr(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(u=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(u,u))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,u=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===u)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return J(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await jl(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=VP()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(tr(this.app))return Promise.reject(Ur(this));const n=e?ut(e):null;return n&&J(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&J(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return tr(this.app)?Promise.reject(Ur(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return tr(this.app)?Promise.reject(Ur(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(An(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await JP(this),n=new e2(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new ri("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await GP(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&An(e)||this._popupRedirectResolver;J(n,this,"argument-error"),this.redirectPersistenceManager=await Li.create(this,[An(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const u=this._isInitialized?Promise.resolve():this._initializationPromise;if(J(u,this,"internal-error"),u.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,i);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return J(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=_E(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&DP(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Yf(t){return ut(t)}class xy{constructor(e){this.auth=e,this.observer=null,this.addObserver=hA(n=>this.observer=n)}get next(){return J(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Xf={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function n2(t){Xf=t}function r2(t){return Xf.loadJS(t)}function i2(){return Xf.gapiScript}function s2(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
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
 */function o2(t,e){const n=ii(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(qi(s,e??{}))return i;Vn(i,"already-initialized")}return n.initialize({options:e})}function a2(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(An);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function l2(t,e,n){const r=Yf(t);J(r._canInitEmulator,r,"emulator-config-failed"),J(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=wE(e),{host:o,port:u}=u2(e),l=u===null?"":`:${u}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:u,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),c2()}function wE(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function u2(t){const e=wE(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Ay(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Ay(o)}}}function Ay(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function c2(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class EE{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Sn("not implemented")}_getIdTokenResponse(e){return Sn("not implemented")}_linkToIdToken(e,n){return Sn("not implemented")}_getReauthenticationResolver(e){return Sn("not implemented")}}/**
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
 */async function ji(t,e){return FP(t,"POST","/v1/accounts:signInWithIdp",Kf(t,e))}/**
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
 */const h2="http://localhost";class Qr extends EE{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Qr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Vn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Wf(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Qr(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return ji(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,ji(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ji(e,n)}buildRequest(){const e={requestUri:h2,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Vo(n)}return e}}/**
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
 */class IE{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Ho extends IE{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Gn extends Ho{constructor(){super("facebook.com")}static credential(e){return Qr._fromParams({providerId:Gn.PROVIDER_ID,signInMethod:Gn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Gn.credentialFromTaggedObject(e)}static credentialFromError(e){return Gn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Gn.credential(e.oauthAccessToken)}catch{return null}}}Gn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Gn.PROVIDER_ID="facebook.com";/**
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
 */class Qn extends Ho{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Qr._fromParams({providerId:Qn.PROVIDER_ID,signInMethod:Qn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Qn.credentialFromTaggedObject(e)}static credentialFromError(e){return Qn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Qn.credential(n,r)}catch{return null}}}Qn.GOOGLE_SIGN_IN_METHOD="google.com";Qn.PROVIDER_ID="google.com";/**
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
 */class Yn extends Ho{constructor(){super("github.com")}static credential(e){return Qr._fromParams({providerId:Yn.PROVIDER_ID,signInMethod:Yn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Yn.credentialFromTaggedObject(e)}static credentialFromError(e){return Yn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Yn.credential(e.oauthAccessToken)}catch{return null}}}Yn.GITHUB_SIGN_IN_METHOD="github.com";Yn.PROVIDER_ID="github.com";/**
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
 */class Xn extends Ho{constructor(){super("twitter.com")}static credential(e,n){return Qr._fromParams({providerId:Xn.PROVIDER_ID,signInMethod:Xn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Xn.credentialFromTaggedObject(e)}static credentialFromError(e){return Xn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Xn.credential(n,r)}catch{return null}}}Xn.TWITTER_SIGN_IN_METHOD="twitter.com";Xn.PROVIDER_ID="twitter.com";/**
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
 */class ns{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await xn._fromIdTokenResponse(e,r,i),o=ky(r);return new ns({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=ky(r);return new ns({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function ky(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Fl extends Xt{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Fl.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Fl(e,n,r,i)}}function TE(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Fl._fromErrorAndOperation(t,s,e,r):s})}async function d2(t,e,n=!1){const r=await Po(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return ns._forOperation(t,"link",r)}/**
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
 */async function f2(t,e,n=!1){const{auth:r}=t;if(tr(r.app))return Promise.reject(Ur(r));const i="reauthenticate";try{const s=await Po(t,TE(r,i,e,t),n);J(s.idToken,r,"internal-error");const o=Gf(s.idToken);J(o,r,"internal-error");const{sub:u}=o;return J(t.uid===u,r,"user-mismatch"),ns._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Vn(r,"user-mismatch"),s}}/**
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
 */async function p2(t,e,n=!1){if(tr(t.app))return Promise.reject(Ur(t));const r="signIn",i=await TE(t,r,e),s=await ns._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}function m2(t,e,n,r){return ut(t).onIdTokenChanged(e,n,r)}function g2(t,e,n){return ut(t).beforeAuthStateChanged(e,n)}const Ul="__sak";/**
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
 */class SE{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Ul,"1"),this.storage.removeItem(Ul),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const y2=1e3,v2=10;class xE extends SE{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=vE(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,u,l)=>{this.notifyListeners(o,l)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);YP()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,v2):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},y2)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}xE.type="LOCAL";const _2=xE;/**
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
 */class AE extends SE{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}AE.type="SESSION";const kE=AE;/**
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
 */function w2(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Nu{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Nu(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const u=Array.from(o).map(async c=>c(n.origin,s)),l=await w2(u);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Nu.receivers=[];/**
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
 */function Jf(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class E2{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((u,l)=>{const c=Jf("",20);i.port1.start();const d=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(p){const m=p;if(m.data.eventId===c)switch(m.data.status){case"ack":clearTimeout(d),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),u(m.data.response);break;default:clearTimeout(d),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function cn(){return window}function I2(t){cn().location.href=t}/**
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
 */function RE(){return typeof cn().WorkerGlobalScope<"u"&&typeof cn().importScripts=="function"}async function T2(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function S2(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function x2(){return RE()?self:null}/**
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
 */const CE="firebaseLocalStorageDb",A2=1,Bl="firebaseLocalStorage",PE="fbase_key";class qo{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function bu(t,e){return t.transaction([Bl],e?"readwrite":"readonly").objectStore(Bl)}function k2(){const t=indexedDB.deleteDatabase(CE);return new qo(t).toPromise()}function hd(){const t=indexedDB.open(CE,A2);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Bl,{keyPath:PE})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Bl)?e(r):(r.close(),await k2(),e(await hd()))})})}async function Ry(t,e,n){const r=bu(t,!0).put({[PE]:e,value:n});return new qo(r).toPromise()}async function R2(t,e){const n=bu(t,!1).get(e),r=await new qo(n).toPromise();return r===void 0?null:r.value}function Cy(t,e){const n=bu(t,!0).delete(e);return new qo(n).toPromise()}const C2=800,P2=3;class NE{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await hd(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>P2)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return RE()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Nu._getInstance(x2()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await T2(),!this.activeServiceWorker)return;this.sender=new E2(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||S2()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await hd();return await Ry(e,Ul,"1"),await Cy(e,Ul),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Ry(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>R2(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Cy(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=bu(i,!1).getAll();return new qo(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),C2)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}NE.type="LOCAL";const N2=NE;new Wo(3e4,6e4);/**
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
 */function b2(t,e){return e?An(e):(J(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Zf extends EE{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ji(e,this._buildIdpRequest())}_linkToIdToken(e,n){return ji(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return ji(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function D2(t){return p2(t.auth,new Zf(t),t.bypassAuthState)}function O2(t){const{auth:e,user:n}=t;return J(n,e,"internal-error"),f2(n,new Zf(t),t.bypassAuthState)}async function M2(t){const{auth:e,user:n}=t;return J(n,e,"internal-error"),d2(n,new Zf(t),t.bypassAuthState)}/**
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
 */class bE{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:u}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(u)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return D2;case"linkViaPopup":case"linkViaRedirect":return M2;case"reauthViaPopup":case"reauthViaRedirect":return O2;default:Vn(this.auth,"internal-error")}}resolve(e){Ln(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Ln(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const V2=new Wo(2e3,1e4);class ki extends bE{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,ki.currentPopupAction&&ki.currentPopupAction.cancel(),ki.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return J(e,this.auth,"internal-error"),e}async onExecution(){Ln(this.filter.length===1,"Popup operations only handle one event");const e=Jf();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(un(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(un(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ki.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(un(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,V2.get())};e()}}ki.currentPopupAction=null;/**
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
 */const L2="pendingRedirect",Za=new Map;class j2 extends bE{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Za.get(this.auth._key());if(!e){try{const r=await F2(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Za.set(this.auth._key(),e)}return this.bypassAuthState||Za.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function F2(t,e){const n=z2(e),r=B2(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function U2(t,e){Za.set(t._key(),e)}function B2(t){return An(t._redirectPersistence)}function z2(t){return Ja(L2,t.config.apiKey,t.name)}async function $2(t,e,n=!1){if(tr(t.app))return Promise.reject(Ur(t));const r=Yf(t),i=b2(r,e),o=await new j2(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const W2=10*60*1e3;class H2{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!q2(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!DE(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(un(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=W2&&this.cachedEventUids.clear(),this.cachedEventUids.has(Py(e))}saveEventToCache(e){this.cachedEventUids.add(Py(e)),this.lastProcessedEventTime=Date.now()}}function Py(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function DE({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function q2(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return DE(t);default:return!1}}/**
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
 */async function K2(t,e={}){return cs(t,"GET","/v1/projects",e)}/**
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
 */const G2=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Q2=/^https?/;async function Y2(t){if(t.config.emulator)return;const{authorizedDomains:e}=await K2(t);for(const n of e)try{if(X2(n))return}catch{}Vn(t,"unauthorized-domain")}function X2(t){const e=ud(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!Q2.test(n))return!1;if(G2.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const J2=new Wo(3e4,6e4);function Ny(){const t=cn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Z2(t){return new Promise((e,n)=>{var r,i,s;function o(){Ny(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Ny(),n(un(t,"network-request-failed"))},timeout:J2.get()})}if(!((i=(r=cn().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=cn().gapi)===null||s===void 0)&&s.load)o();else{const u=s2("iframefcb");return cn()[u]=()=>{gapi.load?o():n(un(t,"network-request-failed"))},r2(`${i2()}?onload=${u}`).catch(l=>n(l))}}).catch(e=>{throw el=null,e})}let el=null;function eN(t){return el=el||Z2(t),el}/**
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
 */const tN=new Wo(5e3,15e3),nN="__/auth/iframe",rN="emulator/auth/iframe",iN={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},sN=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function oN(t){const e=t.config;J(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?qf(e,rN):`https://${t.config.authDomain}/${nN}`,r={apiKey:e.apiKey,appName:t.name,v:os},i=sN.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Vo(r).slice(1)}`}async function aN(t){const e=await eN(t),n=cn().gapi;return J(n,t,"internal-error"),e.open({where:document.body,url:oN(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:iN,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=un(t,"network-request-failed"),u=cn().setTimeout(()=>{s(o)},tN.get());function l(){cn().clearTimeout(u),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
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
 */const lN={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},uN=500,cN=600,hN="_blank",dN="http://localhost";class by{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function fN(t,e,n,r=uN,i=cN){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let u="";const l=Object.assign(Object.assign({},lN),{width:r.toString(),height:i.toString(),top:s,left:o}),c=lt().toLowerCase();n&&(u=fE(c)?hN:n),hE(c)&&(e=e||dN,l.scrollbars="yes");const d=Object.entries(l).reduce((m,[_,x])=>`${m}${_}=${x},`,"");if(QP(c)&&u!=="_self")return pN(e||"",u),new by(null);const p=window.open(e||"",u,d);J(p,t,"popup-blocked");try{p.focus()}catch{}return new by(p)}function pN(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const mN="__/auth/handler",gN="emulator/auth/handler",yN=encodeURIComponent("fac");async function Dy(t,e,n,r,i,s){J(t.config.authDomain,t,"auth-domain-config-required"),J(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:os,eventId:i};if(e instanceof IE){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",cA(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,p]of Object.entries({}))o[d]=p}if(e instanceof Ho){const d=e.getScopes().filter(p=>p!=="");d.length>0&&(o.scopes=d.join(","))}t.tenantId&&(o.tid=t.tenantId);const u=o;for(const d of Object.keys(u))u[d]===void 0&&delete u[d];const l=await t._getAppCheckToken(),c=l?`#${yN}=${encodeURIComponent(l)}`:"";return`${vN(t)}?${Vo(u).slice(1)}${c}`}function vN({config:t}){return t.emulator?qf(t,gN):`https://${t.authDomain}/${mN}`}/**
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
 */const zc="webStorageSupport";class _N{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=kE,this._completeRedirectFn=$2,this._overrideRedirectResult=U2}async _openPopup(e,n,r,i){var s;Ln((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await Dy(e,n,r,ud(),i);return fN(e,o,Jf())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await Dy(e,n,r,ud(),i);return I2(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Ln(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await aN(e),r=new H2(e);return n.register("authEvent",i=>(J(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(zc,{type:zc},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[zc];o!==void 0&&n(!!o),Vn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Y2(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return vE()||dE()||Qf()}}const wN=_N;var Oy="@firebase/auth",My="1.7.9";/**
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
 */class EN{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){J(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function IN(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function TN(t){dn(new Yt("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:u}=r.options;J(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:u,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:_E(t)},c=new t2(r,i,s,l);return a2(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),dn(new Yt("auth-internal",e=>{const n=Yf(e.getProvider("auth").getImmediate());return(r=>new EN(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),jt(Oy,My,IN(t)),jt(Oy,My,"esm2017")}/**
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
 */const SN=5*60,xN=S0("authIdTokenMaxAge")||SN;let Vy=null;const AN=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>xN)return;const i=n==null?void 0:n.token;Vy!==i&&(Vy=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function kN(t=ff()){const e=ii(t,"auth");if(e.isInitialized())return e.getImmediate();const n=o2(t,{popupRedirectResolver:wN,persistence:[N2,_2,kE]}),r=S0("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=AN(s.toString());g2(n,o,()=>o(n.currentUser)),m2(n,u=>o(u))}}const i=I0("auth");return i&&l2(n,`http://${i}`),n}function RN(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}n2({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=un("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",RN().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});TN("Browser");const OE="@firebase/installations",ep="0.6.9";/**
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
 */const ME=1e4,VE=`w:${ep}`,LE="FIS_v2",CN="https://firebaseinstallations.googleapis.com/v1",PN=60*60*1e3,NN="installations",bN="Installations";/**
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
 */const DN={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Yr=new ri(NN,bN,DN);function jE(t){return t instanceof Xt&&t.code.includes("request-failed")}/**
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
 */function FE({projectId:t}){return`${CN}/projects/${t}/installations`}function UE(t){return{token:t.token,requestStatus:2,expiresIn:MN(t.expiresIn),creationTime:Date.now()}}async function BE(t,e){const r=(await e.json()).error;return Yr.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function zE({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function ON(t,{refreshToken:e}){const n=zE(t);return n.append("Authorization",VN(e)),n}async function $E(t){const e=await t();return e.status>=500&&e.status<600?t():e}function MN(t){return Number(t.replace("s","000"))}function VN(t){return`${LE} ${t}`}/**
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
 */async function LN({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=FE(t),i=zE(t),s=e.getImmediate({optional:!0});if(s){const c=await s.getHeartbeatsHeader();c&&i.append("x-firebase-client",c)}const o={fid:n,authVersion:LE,appId:t.appId,sdkVersion:VE},u={method:"POST",headers:i,body:JSON.stringify(o)},l=await $E(()=>fetch(r,u));if(l.ok){const c=await l.json();return{fid:c.fid||n,registrationStatus:2,refreshToken:c.refreshToken,authToken:UE(c.authToken)}}else throw await BE("Create Installation",l)}/**
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
 */function WE(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */function jN(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const FN=/^[cdef][\w-]{21}$/,dd="";function UN(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=BN(t);return FN.test(n)?n:dd}catch{return dd}}function BN(t){return jN(t).substr(0,22)}/**
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
 */function Du(t){return`${t.appName}!${t.appId}`}/**
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
 */const HE=new Map;function qE(t,e){const n=Du(t);KE(n,e),zN(n,e)}function KE(t,e){const n=HE.get(t);if(n)for(const r of n)r(e)}function zN(t,e){const n=$N();n&&n.postMessage({key:t,fid:e}),WN()}let Mr=null;function $N(){return!Mr&&"BroadcastChannel"in self&&(Mr=new BroadcastChannel("[Firebase] FID Change"),Mr.onmessage=t=>{KE(t.data.key,t.data.fid)}),Mr}function WN(){HE.size===0&&Mr&&(Mr.close(),Mr=null)}/**
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
 */const HN="firebase-installations-database",qN=1,Xr="firebase-installations-store";let $c=null;function tp(){return $c||($c=P0(HN,qN,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Xr)}}})),$c}async function zl(t,e){const n=Du(t),i=(await tp()).transaction(Xr,"readwrite"),s=i.objectStore(Xr),o=await s.get(n);return await s.put(e,n),await i.done,(!o||o.fid!==e.fid)&&qE(t,e.fid),e}async function GE(t){const e=Du(t),r=(await tp()).transaction(Xr,"readwrite");await r.objectStore(Xr).delete(e),await r.done}async function Ou(t,e){const n=Du(t),i=(await tp()).transaction(Xr,"readwrite"),s=i.objectStore(Xr),o=await s.get(n),u=e(o);return u===void 0?await s.delete(n):await s.put(u,n),await i.done,u&&(!o||o.fid!==u.fid)&&qE(t,u.fid),u}/**
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
 */async function np(t){let e;const n=await Ou(t.appConfig,r=>{const i=KN(r),s=GN(t,i);return e=s.registrationPromise,s.installationEntry});return n.fid===dd?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function KN(t){const e=t||{fid:UN(),registrationStatus:0};return QE(e)}function GN(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(Yr.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=QN(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:YN(t)}:{installationEntry:e}}async function QN(t,e){try{const n=await LN(t,e);return zl(t.appConfig,n)}catch(n){throw jE(n)&&n.customData.serverCode===409?await GE(t.appConfig):await zl(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function YN(t){let e=await Ly(t.appConfig);for(;e.registrationStatus===1;)await WE(100),e=await Ly(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await np(t);return r||n}return e}function Ly(t){return Ou(t,e=>{if(!e)throw Yr.create("installation-not-found");return QE(e)})}function QE(t){return XN(t)?{fid:t.fid,registrationStatus:0}:t}function XN(t){return t.registrationStatus===1&&t.registrationTime+ME<Date.now()}/**
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
 */async function JN({appConfig:t,heartbeatServiceProvider:e},n){const r=ZN(t,n),i=ON(t,n),s=e.getImmediate({optional:!0});if(s){const c=await s.getHeartbeatsHeader();c&&i.append("x-firebase-client",c)}const o={installation:{sdkVersion:VE,appId:t.appId}},u={method:"POST",headers:i,body:JSON.stringify(o)},l=await $E(()=>fetch(r,u));if(l.ok){const c=await l.json();return UE(c)}else throw await BE("Generate Auth Token",l)}function ZN(t,{fid:e}){return`${FE(t)}/${e}/authTokens:generate`}/**
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
 */async function rp(t,e=!1){let n;const r=await Ou(t.appConfig,s=>{if(!YE(s))throw Yr.create("not-registered");const o=s.authToken;if(!e&&nb(o))return s;if(o.requestStatus===1)return n=eb(t,e),s;{if(!navigator.onLine)throw Yr.create("app-offline");const u=ib(s);return n=tb(t,u),u}});return n?await n:r.authToken}async function eb(t,e){let n=await jy(t.appConfig);for(;n.authToken.requestStatus===1;)await WE(100),n=await jy(t.appConfig);const r=n.authToken;return r.requestStatus===0?rp(t,e):r}function jy(t){return Ou(t,e=>{if(!YE(e))throw Yr.create("not-registered");const n=e.authToken;return sb(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function tb(t,e){try{const n=await JN(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await zl(t.appConfig,r),n}catch(n){if(jE(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await GE(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await zl(t.appConfig,r)}throw n}}function YE(t){return t!==void 0&&t.registrationStatus===2}function nb(t){return t.requestStatus===2&&!rb(t)}function rb(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+PN}function ib(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function sb(t){return t.requestStatus===1&&t.requestTime+ME<Date.now()}/**
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
 */async function ob(t){const e=t,{installationEntry:n,registrationPromise:r}=await np(e);return r?r.catch(console.error):rp(e).catch(console.error),n.fid}/**
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
 */async function ab(t,e=!1){const n=t;return await lb(n),(await rp(n,e)).token}async function lb(t){const{registrationPromise:e}=await np(t);e&&await e}/**
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
 */function ub(t){if(!t||!t.options)throw Wc("App Configuration");if(!t.name)throw Wc("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw Wc(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function Wc(t){return Yr.create("missing-app-config-values",{valueName:t})}/**
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
 */const XE="installations",cb="installations-internal",hb=t=>{const e=t.getProvider("app").getImmediate(),n=ub(e),r=ii(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},db=t=>{const e=t.getProvider("app").getImmediate(),n=ii(e,XE).getImmediate();return{getId:()=>ob(n),getToken:i=>ab(n,i)}};function fb(){dn(new Yt(XE,hb,"PUBLIC")),dn(new Yt(cb,db,"PRIVATE"))}fb();jt(OE,ep);jt(OE,ep,"esm2017");/**
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
 */const $l="analytics",pb="firebase_id",mb="origin",gb=60*1e3,yb="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",ip="https://www.googletagmanager.com/gtag/js";/**
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
 */const St=new pu("@firebase/analytics");/**
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
 */const vb={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Pt=new ri("analytics","Analytics",vb);/**
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
 */function _b(t){if(!t.startsWith(ip)){const e=Pt.create("invalid-gtag-resource",{gtagURL:t});return St.warn(e.message),""}return t}function JE(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function wb(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function Eb(t,e){const n=wb("firebase-js-sdk-policy",{createScriptURL:_b}),r=document.createElement("script"),i=`${ip}?l=${t}&id=${e}`;r.src=n?n==null?void 0:n.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function Ib(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function Tb(t,e,n,r,i,s){const o=r[i];try{if(o)await e[o];else{const l=(await JE(n)).find(c=>c.measurementId===i);l&&await e[l.appId]}}catch(u){St.error(u)}t("config",i,s)}async function Sb(t,e,n,r,i){try{let s=[];if(i&&i.send_to){let o=i.send_to;Array.isArray(o)||(o=[o]);const u=await JE(n);for(const l of o){const c=u.find(p=>p.measurementId===l),d=c&&e[c.appId];if(d)s.push(d);else{s=[];break}}}s.length===0&&(s=Object.values(e)),await Promise.all(s),t("event",r,i||{})}catch(s){St.error(s)}}function xb(t,e,n,r){async function i(s,...o){try{if(s==="event"){const[u,l]=o;await Sb(t,e,n,u,l)}else if(s==="config"){const[u,l]=o;await Tb(t,e,n,r,u,l)}else if(s==="consent"){const[u,l]=o;t("consent",u,l)}else if(s==="get"){const[u,l,c]=o;t("get",u,l,c)}else if(s==="set"){const[u]=o;t("set",u)}else t(s,...o)}catch(u){St.error(u)}}return i}function Ab(t,e,n,r,i){let s=function(...o){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(s=window[i]),window[i]=xb(s,t,e,n),{gtagCore:s,wrappedGtag:window[i]}}function kb(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(ip)&&n.src.includes(t))return n;return null}/**
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
 */const Rb=30,Cb=1e3;class Pb{constructor(e={},n=Cb){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const ZE=new Pb;function Nb(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function bb(t){var e;const{appId:n,apiKey:r}=t,i={method:"GET",headers:Nb(r)},s=yb.replace("{app-id}",n),o=await fetch(s,i);if(o.status!==200&&o.status!==304){let u="";try{const l=await o.json();!((e=l.error)===null||e===void 0)&&e.message&&(u=l.error.message)}catch{}throw Pt.create("config-fetch-failed",{httpStatus:o.status,responseMessage:u})}return o.json()}async function Db(t,e=ZE,n){const{appId:r,apiKey:i,measurementId:s}=t.options;if(!r)throw Pt.create("no-app-id");if(!i){if(s)return{measurementId:s,appId:r};throw Pt.create("no-api-key")}const o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},u=new Vb;return setTimeout(async()=>{u.abort()},gb),eI({appId:r,apiKey:i,measurementId:s},o,u,e)}async function eI(t,{throttleEndTimeMillis:e,backoffCount:n},r,i=ZE){var s;const{appId:o,measurementId:u}=t;try{await Ob(r,e)}catch(l){if(u)return St.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${u} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:o,measurementId:u};throw l}try{const l=await bb(t);return i.deleteThrottleMetadata(o),l}catch(l){const c=l;if(!Mb(c)){if(i.deleteThrottleMetadata(o),u)return St.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${u} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:o,measurementId:u};throw l}const d=Number((s=c==null?void 0:c.customData)===null||s===void 0?void 0:s.httpStatus)===503?Rg(n,i.intervalMillis,Rb):Rg(n,i.intervalMillis),p={throttleEndTimeMillis:Date.now()+d,backoffCount:n+1};return i.setThrottleMetadata(o,p),St.debug(`Calling attemptFetch again in ${d} millis`),eI(t,p,r,i)}}function Ob(t,e){return new Promise((n,r)=>{const i=Math.max(e-Date.now(),0),s=setTimeout(n,i);t.addEventListener(()=>{clearTimeout(s),r(Pt.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function Mb(t){if(!(t instanceof Xt)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class Vb{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function Lb(t,e,n,r,i){if(i&&i.global){t("event",n,r);return}else{const s=await e,o=Object.assign(Object.assign({},r),{send_to:s});t("event",n,o)}}/**
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
 */async function jb(){if(A0())try{await k0()}catch(t){return St.warn(Pt.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return St.warn(Pt.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function Fb(t,e,n,r,i,s,o){var u;const l=Db(t);l.then(_=>{n[_.measurementId]=_.appId,t.options.measurementId&&_.measurementId!==t.options.measurementId&&St.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${_.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(_=>St.error(_)),e.push(l);const c=jb().then(_=>{if(_)return r.getId()}),[d,p]=await Promise.all([l,c]);kb(s)||Eb(s,d.measurementId),i("js",new Date);const m=(u=o==null?void 0:o.config)!==null&&u!==void 0?u:{};return m[mb]="firebase",m.update=!0,p!=null&&(m[pb]=p),i("config",d.measurementId,m),d.measurementId}/**
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
 */class Ub{constructor(e){this.app=e}_delete(){return delete no[this.app.options.appId],Promise.resolve()}}let no={},Fy=[];const Uy={};let Hc="dataLayer",Bb="gtag",By,tI,zy=!1;function zb(){const t=[];if(x0()&&t.push("This is a browser extension environment."),oA()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=Pt.create("invalid-analytics-context",{errorInfo:e});St.warn(n.message)}}function $b(t,e,n){zb();const r=t.options.appId;if(!r)throw Pt.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)St.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Pt.create("no-api-key");if(no[r]!=null)throw Pt.create("already-exists",{id:r});if(!zy){Ib(Hc);const{wrappedGtag:s,gtagCore:o}=Ab(no,Fy,Uy,Hc,Bb);tI=s,By=o,zy=!0}return no[r]=Fb(t,Fy,Uy,e,By,Hc,n),new Ub(t)}function Wb(t=ff()){t=ut(t);const e=ii(t,$l);return e.isInitialized()?e.getImmediate():Hb(t)}function Hb(t,e={}){const n=ii(t,$l);if(n.isInitialized()){const i=n.getImmediate();if(qi(e,n.getOptions()))return i;throw Pt.create("already-initialized")}return n.initialize({options:e})}function qb(t,e,n,r){t=ut(t),Lb(tI,no[t.app.options.appId],e,n,r).catch(i=>St.error(i))}const $y="@firebase/analytics",Wy="0.10.8";function Kb(){dn(new Yt($l,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return $b(r,i,n)},"PUBLIC")),dn(new Yt("analytics-internal",t,"PRIVATE")),jt($y,Wy),jt($y,Wy,"esm2017");function t(e){try{const n=e.getProvider($l).getImmediate();return{logEvent:(r,i,s)=>qb(n,r,i,s)}}catch(n){throw Pt.create("interop-component-reg-failed",{reason:n})}}}Kb();const Gb={apiKey:"AIzaSyDeS5dNsUcUZ0403nBiObnvZR-0ED5Ys-4",authDomain:"shoplist-40d7a.firebaseapp.com",projectId:"shoplist-40d7a",storageBucket:"shoplist-40d7a.firebasestorage.app",messagingSenderId:"590512090231",appId:"1:590512090231:web:08ecd6b16f96f3e8456a72",measurementId:"G-52S3CBQXWQ"},sp=N0(Gb);kN(sp);const hn=cP(sp);Wb(sp);const Qb=async(t,e)=>{const n=Math.random().toString(36).substring(2,8).toUpperCase(),r=ln(hn,"lobbies",n),i={id:n,hostId:t,status:"waiting",players:[{id:t,name:e,isReady:!1}],createdAt:new Date().toISOString(),currentRound:0,wheelArtists:[],currentPlayerTurn:null,portfolios:{}};return await kP(r,i),n},Yb=async(t,e,n)=>{const r=ln(hn,"lobbies",t);if(!(await AP(r)).exists())throw new Error("Lobby nicht gefunden");await Rn(r,{players:CP({id:e,name:n,isReady:!1})})},op=(t,e)=>{const n=ln(hn,"lobbies",t);return RP(n,r=>{r.exists()&&e(r.data())})};let Da;const Xb=new Uint8Array(16);function Jb(){if(!Da&&(Da=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!Da))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return Da(Xb)}const We=[];for(let t=0;t<256;++t)We.push((t+256).toString(16).slice(1));function Zb(t,e=0){return We[t[e+0]]+We[t[e+1]]+We[t[e+2]]+We[t[e+3]]+"-"+We[t[e+4]]+We[t[e+5]]+"-"+We[t[e+6]]+We[t[e+7]]+"-"+We[t[e+8]]+We[t[e+9]]+"-"+We[t[e+10]]+We[t[e+11]]+We[t[e+12]]+We[t[e+13]]+We[t[e+14]]+We[t[e+15]]}const eD=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),Hy={randomUUID:eD};function qy(t,e,n){if(Hy.randomUUID&&!t)return Hy.randomUUID();t=t||{};const r=t.random||(t.rng||Jb)();return r[6]=r[6]&15|64,r[8]=r[8]&63|128,Zb(r)}function tD(){const[t,e]=U.useState(""),[n,r]=U.useState(""),[i,s]=U.useState(!1),o=hu(),u=async()=>{if(!t)return alert("Bitte Nickname eingeben");s(!0);try{const c=qy();localStorage.setItem("playerId",c),localStorage.setItem("nickname",t);const d=await Qb(c,t);o(`/lobby/${d}`)}catch(c){console.error(c),alert("Fehler beim Erstellen der Lobby")}finally{s(!1)}},l=()=>{if(!t||!n)return alert("Bitte Nickname und Lobby-Code eingeben");const c=qy();localStorage.setItem("playerId",c),localStorage.setItem("nickname",t),o(`/lobby/${n.toUpperCase()}`)};return y.jsx("div",{className:"flex-1 flex flex-col items-center justify-center p-6 bg-dark",children:y.jsxs("div",{className:"w-full max-w-md space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700",children:[y.jsxs("div",{className:"text-center space-y-2",children:[y.jsx("div",{className:"inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-primary/10 text-primary mb-4 p-4",children:y.jsx(du,{size:48})}),y.jsx("h1",{className:"text-4xl font-black tracking-tighter text-white",children:"AUX BATTLE"}),y.jsx("p",{className:"text-gray-400",children:"Das ultimative Musik-Duell-Spiel"})]}),y.jsxs("div",{className:"space-y-4",children:[y.jsxs("div",{className:"space-y-2",children:[y.jsx("label",{className:"text-xs font-bold uppercase tracking-widest text-gray-500 ml-1",children:"Nickname"}),y.jsx("input",{type:"text",placeholder:"z.B. DJ Saufkopp",value:t,onChange:c=>e(c.target.value),className:"w-full bg-secondary border-none rounded-xl p-4 text-white focus:ring-2 focus:ring-primary outline-none transition-all placeholder:text-gray-600"})]}),y.jsxs("div",{className:"grid grid-cols-1 gap-4 pt-4",children:[y.jsxs("button",{onClick:u,disabled:i,className:"group relative w-full bg-primary hover:bg-primary/90 text-black font-bold py-4 px-6 rounded-xl flex items-center justify-center gap-3 transition-all active:scale-95 disabled:opacity-50",children:[y.jsx(Rx,{size:20}),"LOBBY ERSTELLEN"]}),y.jsxs("div",{className:"relative py-2",children:[y.jsx("div",{className:"absolute inset-0 flex items-center",children:y.jsx("div",{className:"w-full border-t border-gray-800"})}),y.jsx("div",{className:"relative flex justify-center text-xs uppercase",children:y.jsx("span",{className:"bg-dark px-2 text-gray-600 font-bold",children:"Oder Beitreten"})})]}),y.jsxs("div",{className:"space-y-3",children:[y.jsx("input",{type:"text",placeholder:"Lobby-Code (6-stellig)",value:n,onChange:c=>r(c.target.value),className:"w-full bg-secondary border-none rounded-xl p-4 text-center text-xl font-mono tracking-widest text-white focus:ring-2 focus:ring-primary outline-none transition-all placeholder:text-gray-600"}),y.jsxs("button",{onClick:l,className:"w-full bg-white/5 hover:bg-white/10 text-white font-bold py-4 px-6 rounded-xl flex items-center justify-center gap-3 transition-all active:scale-95 border border-white/10",children:[y.jsx(Ux,{size:20}),"LOBBY BEITRETEN"]})]})]})]}),y.jsx("div",{className:"pt-8 text-center",children:y.jsx("p",{className:"text-[10px] text-gray-600 font-bold uppercase tracking-[0.2em]",children:"Build v0.1.0 • AUXBattle Studio"})})]})})}var nD=Object.defineProperty,Wl=Object.getOwnPropertySymbols,nI=Object.prototype.hasOwnProperty,rI=Object.prototype.propertyIsEnumerable,Ky=(t,e,n)=>e in t?nD(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,fd=(t,e)=>{for(var n in e||(e={}))nI.call(e,n)&&Ky(t,n,e[n]);if(Wl)for(var n of Wl(e))rI.call(e,n)&&Ky(t,n,e[n]);return t},pd=(t,e)=>{var n={};for(var r in t)nI.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&Wl)for(var r of Wl(t))e.indexOf(r)<0&&rI.call(t,r)&&(n[r]=t[r]);return n};/**
 * @license QR Code generator library (TypeScript)
 * Copyright (c) Project Nayuki.
 * SPDX-License-Identifier: MIT
 */var Jr;(t=>{const e=class ne{constructor(l,c,d,p){if(this.version=l,this.errorCorrectionLevel=c,this.modules=[],this.isFunction=[],l<ne.MIN_VERSION||l>ne.MAX_VERSION)throw new RangeError("Version value out of range");if(p<-1||p>7)throw new RangeError("Mask value out of range");this.size=l*4+17;let m=[];for(let x=0;x<this.size;x++)m.push(!1);for(let x=0;x<this.size;x++)this.modules.push(m.slice()),this.isFunction.push(m.slice());this.drawFunctionPatterns();const _=this.addEccAndInterleave(d);if(this.drawCodewords(_),p==-1){let x=1e9;for(let P=0;P<8;P++){this.applyMask(P),this.drawFormatBits(P);const C=this.getPenaltyScore();C<x&&(p=P,x=C),this.applyMask(P)}}i(0<=p&&p<=7),this.mask=p,this.applyMask(p),this.drawFormatBits(p),this.isFunction=[]}static encodeText(l,c){const d=t.QrSegment.makeSegments(l);return ne.encodeSegments(d,c)}static encodeBinary(l,c){const d=t.QrSegment.makeBytes(l);return ne.encodeSegments([d],c)}static encodeSegments(l,c,d=1,p=40,m=-1,_=!0){if(!(ne.MIN_VERSION<=d&&d<=p&&p<=ne.MAX_VERSION)||m<-1||m>7)throw new RangeError("Invalid value");let x,P;for(x=d;;x++){const E=ne.getNumDataCodewords(x,c)*8,D=o.getTotalBits(l,x);if(D<=E){P=D;break}if(x>=p)throw new RangeError("Data too long")}for(const E of[ne.Ecc.MEDIUM,ne.Ecc.QUARTILE,ne.Ecc.HIGH])_&&P<=ne.getNumDataCodewords(x,E)*8&&(c=E);let C=[];for(const E of l){n(E.mode.modeBits,4,C),n(E.numChars,E.mode.numCharCountBits(x),C);for(const D of E.getData())C.push(D)}i(C.length==P);const S=ne.getNumDataCodewords(x,c)*8;i(C.length<=S),n(0,Math.min(4,S-C.length),C),n(0,(8-C.length%8)%8,C),i(C.length%8==0);for(let E=236;C.length<S;E^=253)n(E,8,C);let w=[];for(;w.length*8<C.length;)w.push(0);return C.forEach((E,D)=>w[D>>>3]|=E<<7-(D&7)),new ne(x,c,w,m)}getModule(l,c){return 0<=l&&l<this.size&&0<=c&&c<this.size&&this.modules[c][l]}getModules(){return this.modules}drawFunctionPatterns(){for(let d=0;d<this.size;d++)this.setFunctionModule(6,d,d%2==0),this.setFunctionModule(d,6,d%2==0);this.drawFinderPattern(3,3),this.drawFinderPattern(this.size-4,3),this.drawFinderPattern(3,this.size-4);const l=this.getAlignmentPatternPositions(),c=l.length;for(let d=0;d<c;d++)for(let p=0;p<c;p++)d==0&&p==0||d==0&&p==c-1||d==c-1&&p==0||this.drawAlignmentPattern(l[d],l[p]);this.drawFormatBits(0),this.drawVersion()}drawFormatBits(l){const c=this.errorCorrectionLevel.formatBits<<3|l;let d=c;for(let m=0;m<10;m++)d=d<<1^(d>>>9)*1335;const p=(c<<10|d)^21522;i(p>>>15==0);for(let m=0;m<=5;m++)this.setFunctionModule(8,m,r(p,m));this.setFunctionModule(8,7,r(p,6)),this.setFunctionModule(8,8,r(p,7)),this.setFunctionModule(7,8,r(p,8));for(let m=9;m<15;m++)this.setFunctionModule(14-m,8,r(p,m));for(let m=0;m<8;m++)this.setFunctionModule(this.size-1-m,8,r(p,m));for(let m=8;m<15;m++)this.setFunctionModule(8,this.size-15+m,r(p,m));this.setFunctionModule(8,this.size-8,!0)}drawVersion(){if(this.version<7)return;let l=this.version;for(let d=0;d<12;d++)l=l<<1^(l>>>11)*7973;const c=this.version<<12|l;i(c>>>18==0);for(let d=0;d<18;d++){const p=r(c,d),m=this.size-11+d%3,_=Math.floor(d/3);this.setFunctionModule(m,_,p),this.setFunctionModule(_,m,p)}}drawFinderPattern(l,c){for(let d=-4;d<=4;d++)for(let p=-4;p<=4;p++){const m=Math.max(Math.abs(p),Math.abs(d)),_=l+p,x=c+d;0<=_&&_<this.size&&0<=x&&x<this.size&&this.setFunctionModule(_,x,m!=2&&m!=4)}}drawAlignmentPattern(l,c){for(let d=-2;d<=2;d++)for(let p=-2;p<=2;p++)this.setFunctionModule(l+p,c+d,Math.max(Math.abs(p),Math.abs(d))!=1)}setFunctionModule(l,c,d){this.modules[c][l]=d,this.isFunction[c][l]=!0}addEccAndInterleave(l){const c=this.version,d=this.errorCorrectionLevel;if(l.length!=ne.getNumDataCodewords(c,d))throw new RangeError("Invalid argument");const p=ne.NUM_ERROR_CORRECTION_BLOCKS[d.ordinal][c],m=ne.ECC_CODEWORDS_PER_BLOCK[d.ordinal][c],_=Math.floor(ne.getNumRawDataModules(c)/8),x=p-_%p,P=Math.floor(_/p);let C=[];const S=ne.reedSolomonComputeDivisor(m);for(let E=0,D=0;E<p;E++){let M=l.slice(D,D+P-m+(E<x?0:1));D+=M.length;const V=ne.reedSolomonComputeRemainder(M,S);E<x&&M.push(0),C.push(M.concat(V))}let w=[];for(let E=0;E<C[0].length;E++)C.forEach((D,M)=>{(E!=P-m||M>=x)&&w.push(D[E])});return i(w.length==_),w}drawCodewords(l){if(l.length!=Math.floor(ne.getNumRawDataModules(this.version)/8))throw new RangeError("Invalid argument");let c=0;for(let d=this.size-1;d>=1;d-=2){d==6&&(d=5);for(let p=0;p<this.size;p++)for(let m=0;m<2;m++){const _=d-m,P=(d+1&2)==0?this.size-1-p:p;!this.isFunction[P][_]&&c<l.length*8&&(this.modules[P][_]=r(l[c>>>3],7-(c&7)),c++)}}i(c==l.length*8)}applyMask(l){if(l<0||l>7)throw new RangeError("Mask value out of range");for(let c=0;c<this.size;c++)for(let d=0;d<this.size;d++){let p;switch(l){case 0:p=(d+c)%2==0;break;case 1:p=c%2==0;break;case 2:p=d%3==0;break;case 3:p=(d+c)%3==0;break;case 4:p=(Math.floor(d/3)+Math.floor(c/2))%2==0;break;case 5:p=d*c%2+d*c%3==0;break;case 6:p=(d*c%2+d*c%3)%2==0;break;case 7:p=((d+c)%2+d*c%3)%2==0;break;default:throw new Error("Unreachable")}!this.isFunction[c][d]&&p&&(this.modules[c][d]=!this.modules[c][d])}}getPenaltyScore(){let l=0;for(let m=0;m<this.size;m++){let _=!1,x=0,P=[0,0,0,0,0,0,0];for(let C=0;C<this.size;C++)this.modules[m][C]==_?(x++,x==5?l+=ne.PENALTY_N1:x>5&&l++):(this.finderPenaltyAddHistory(x,P),_||(l+=this.finderPenaltyCountPatterns(P)*ne.PENALTY_N3),_=this.modules[m][C],x=1);l+=this.finderPenaltyTerminateAndCount(_,x,P)*ne.PENALTY_N3}for(let m=0;m<this.size;m++){let _=!1,x=0,P=[0,0,0,0,0,0,0];for(let C=0;C<this.size;C++)this.modules[C][m]==_?(x++,x==5?l+=ne.PENALTY_N1:x>5&&l++):(this.finderPenaltyAddHistory(x,P),_||(l+=this.finderPenaltyCountPatterns(P)*ne.PENALTY_N3),_=this.modules[C][m],x=1);l+=this.finderPenaltyTerminateAndCount(_,x,P)*ne.PENALTY_N3}for(let m=0;m<this.size-1;m++)for(let _=0;_<this.size-1;_++){const x=this.modules[m][_];x==this.modules[m][_+1]&&x==this.modules[m+1][_]&&x==this.modules[m+1][_+1]&&(l+=ne.PENALTY_N2)}let c=0;for(const m of this.modules)c=m.reduce((_,x)=>_+(x?1:0),c);const d=this.size*this.size,p=Math.ceil(Math.abs(c*20-d*10)/d)-1;return i(0<=p&&p<=9),l+=p*ne.PENALTY_N4,i(0<=l&&l<=2568888),l}getAlignmentPatternPositions(){if(this.version==1)return[];{const l=Math.floor(this.version/7)+2,c=this.version==32?26:Math.ceil((this.version*4+4)/(l*2-2))*2;let d=[6];for(let p=this.size-7;d.length<l;p-=c)d.splice(1,0,p);return d}}static getNumRawDataModules(l){if(l<ne.MIN_VERSION||l>ne.MAX_VERSION)throw new RangeError("Version number out of range");let c=(16*l+128)*l+64;if(l>=2){const d=Math.floor(l/7)+2;c-=(25*d-10)*d-55,l>=7&&(c-=36)}return i(208<=c&&c<=29648),c}static getNumDataCodewords(l,c){return Math.floor(ne.getNumRawDataModules(l)/8)-ne.ECC_CODEWORDS_PER_BLOCK[c.ordinal][l]*ne.NUM_ERROR_CORRECTION_BLOCKS[c.ordinal][l]}static reedSolomonComputeDivisor(l){if(l<1||l>255)throw new RangeError("Degree out of range");let c=[];for(let p=0;p<l-1;p++)c.push(0);c.push(1);let d=1;for(let p=0;p<l;p++){for(let m=0;m<c.length;m++)c[m]=ne.reedSolomonMultiply(c[m],d),m+1<c.length&&(c[m]^=c[m+1]);d=ne.reedSolomonMultiply(d,2)}return c}static reedSolomonComputeRemainder(l,c){let d=c.map(p=>0);for(const p of l){const m=p^d.shift();d.push(0),c.forEach((_,x)=>d[x]^=ne.reedSolomonMultiply(_,m))}return d}static reedSolomonMultiply(l,c){if(l>>>8||c>>>8)throw new RangeError("Byte out of range");let d=0;for(let p=7;p>=0;p--)d=d<<1^(d>>>7)*285,d^=(c>>>p&1)*l;return i(d>>>8==0),d}finderPenaltyCountPatterns(l){const c=l[1];i(c<=this.size*3);const d=c>0&&l[2]==c&&l[3]==c*3&&l[4]==c&&l[5]==c;return(d&&l[0]>=c*4&&l[6]>=c?1:0)+(d&&l[6]>=c*4&&l[0]>=c?1:0)}finderPenaltyTerminateAndCount(l,c,d){return l&&(this.finderPenaltyAddHistory(c,d),c=0),c+=this.size,this.finderPenaltyAddHistory(c,d),this.finderPenaltyCountPatterns(d)}finderPenaltyAddHistory(l,c){c[0]==0&&(l+=this.size),c.pop(),c.unshift(l)}};e.MIN_VERSION=1,e.MAX_VERSION=40,e.PENALTY_N1=3,e.PENALTY_N2=3,e.PENALTY_N3=40,e.PENALTY_N4=10,e.ECC_CODEWORDS_PER_BLOCK=[[-1,7,10,15,20,26,18,20,24,30,18,20,24,26,30,22,24,28,30,28,28,28,28,30,30,26,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,10,16,26,18,24,16,18,22,22,26,30,22,22,24,24,28,28,26,26,26,26,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28],[-1,13,22,18,26,18,24,18,22,20,24,28,26,24,20,30,24,28,28,26,30,28,30,30,30,30,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,17,28,22,16,22,28,26,26,24,28,24,28,22,24,24,30,28,28,26,28,30,24,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30]],e.NUM_ERROR_CORRECTION_BLOCKS=[[-1,1,1,1,1,1,2,2,2,2,4,4,4,4,4,6,6,6,6,7,8,8,9,9,10,12,12,12,13,14,15,16,17,18,19,19,20,21,22,24,25],[-1,1,1,1,2,2,4,4,4,5,5,5,8,9,9,10,10,11,13,14,16,17,17,18,20,21,23,25,26,28,29,31,33,35,37,38,40,43,45,47,49],[-1,1,1,2,2,4,4,6,6,8,8,8,10,12,16,12,17,16,18,21,20,23,23,25,27,29,34,34,35,38,40,43,45,48,51,53,56,59,62,65,68],[-1,1,1,2,4,4,4,5,6,8,8,11,11,16,16,18,16,19,21,25,25,25,34,30,32,35,37,40,42,45,48,51,54,57,60,63,66,70,74,77,81]],t.QrCode=e;function n(u,l,c){if(l<0||l>31||u>>>l)throw new RangeError("Value out of range");for(let d=l-1;d>=0;d--)c.push(u>>>d&1)}function r(u,l){return(u>>>l&1)!=0}function i(u){if(!u)throw new Error("Assertion error")}const s=class ke{constructor(l,c,d){if(this.mode=l,this.numChars=c,this.bitData=d,c<0)throw new RangeError("Invalid argument");this.bitData=d.slice()}static makeBytes(l){let c=[];for(const d of l)n(d,8,c);return new ke(ke.Mode.BYTE,l.length,c)}static makeNumeric(l){if(!ke.isNumeric(l))throw new RangeError("String contains non-numeric characters");let c=[];for(let d=0;d<l.length;){const p=Math.min(l.length-d,3);n(parseInt(l.substring(d,d+p),10),p*3+1,c),d+=p}return new ke(ke.Mode.NUMERIC,l.length,c)}static makeAlphanumeric(l){if(!ke.isAlphanumeric(l))throw new RangeError("String contains unencodable characters in alphanumeric mode");let c=[],d;for(d=0;d+2<=l.length;d+=2){let p=ke.ALPHANUMERIC_CHARSET.indexOf(l.charAt(d))*45;p+=ke.ALPHANUMERIC_CHARSET.indexOf(l.charAt(d+1)),n(p,11,c)}return d<l.length&&n(ke.ALPHANUMERIC_CHARSET.indexOf(l.charAt(d)),6,c),new ke(ke.Mode.ALPHANUMERIC,l.length,c)}static makeSegments(l){return l==""?[]:ke.isNumeric(l)?[ke.makeNumeric(l)]:ke.isAlphanumeric(l)?[ke.makeAlphanumeric(l)]:[ke.makeBytes(ke.toUtf8ByteArray(l))]}static makeEci(l){let c=[];if(l<0)throw new RangeError("ECI assignment value out of range");if(l<128)n(l,8,c);else if(l<16384)n(2,2,c),n(l,14,c);else if(l<1e6)n(6,3,c),n(l,21,c);else throw new RangeError("ECI assignment value out of range");return new ke(ke.Mode.ECI,0,c)}static isNumeric(l){return ke.NUMERIC_REGEX.test(l)}static isAlphanumeric(l){return ke.ALPHANUMERIC_REGEX.test(l)}getData(){return this.bitData.slice()}static getTotalBits(l,c){let d=0;for(const p of l){const m=p.mode.numCharCountBits(c);if(p.numChars>=1<<m)return 1/0;d+=4+m+p.bitData.length}return d}static toUtf8ByteArray(l){l=encodeURI(l);let c=[];for(let d=0;d<l.length;d++)l.charAt(d)!="%"?c.push(l.charCodeAt(d)):(c.push(parseInt(l.substring(d+1,d+3),16)),d+=2);return c}};s.NUMERIC_REGEX=/^[0-9]*$/,s.ALPHANUMERIC_REGEX=/^[A-Z0-9 $%*+.\/:-]*$/,s.ALPHANUMERIC_CHARSET="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:";let o=s;t.QrSegment=s})(Jr||(Jr={}));(t=>{(e=>{const n=class{constructor(i,s){this.ordinal=i,this.formatBits=s}};n.LOW=new n(0,1),n.MEDIUM=new n(1,0),n.QUARTILE=new n(2,3),n.HIGH=new n(3,2),e.Ecc=n})(t.QrCode||(t.QrCode={}))})(Jr||(Jr={}));(t=>{(e=>{const n=class{constructor(i,s){this.modeBits=i,this.numBitsCharCount=s}numCharCountBits(i){return this.numBitsCharCount[Math.floor((i+7)/17)]}};n.NUMERIC=new n(1,[10,12,14]),n.ALPHANUMERIC=new n(2,[9,11,13]),n.BYTE=new n(4,[8,16,16]),n.KANJI=new n(8,[8,10,12]),n.ECI=new n(7,[0,0,0]),e.Mode=n})(t.QrSegment||(t.QrSegment={}))})(Jr||(Jr={}));var Ri=Jr;/**
 * @license qrcode.react
 * Copyright (c) Paul O'Shannessy
 * SPDX-License-Identifier: ISC
 */var rD={L:Ri.QrCode.Ecc.LOW,M:Ri.QrCode.Ecc.MEDIUM,Q:Ri.QrCode.Ecc.QUARTILE,H:Ri.QrCode.Ecc.HIGH},iI=128,sI="L",oI="#FFFFFF",aI="#000000",lI=!1,uI=1,iD=4,sD=0,oD=.1;function cI(t,e=0){const n=[];return t.forEach(function(r,i){let s=null;r.forEach(function(o,u){if(!o&&s!==null){n.push(`M${s+e} ${i+e}h${u-s}v1H${s+e}z`),s=null;return}if(u===r.length-1){if(!o)return;s===null?n.push(`M${u+e},${i+e} h1v1H${u+e}z`):n.push(`M${s+e},${i+e} h${u+1-s}v1H${s+e}z`);return}o&&s===null&&(s=u)})}),n.join("")}function hI(t,e){return t.slice().map((n,r)=>r<e.y||r>=e.y+e.h?n:n.map((i,s)=>s<e.x||s>=e.x+e.w?i:!1))}function aD(t,e,n,r){if(r==null)return null;const i=t.length+n*2,s=Math.floor(e*oD),o=i/e,u=(r.width||s)*o,l=(r.height||s)*o,c=r.x==null?t.length/2-u/2:r.x*o,d=r.y==null?t.length/2-l/2:r.y*o,p=r.opacity==null?1:r.opacity;let m=null;if(r.excavate){let x=Math.floor(c),P=Math.floor(d),C=Math.ceil(u+c-x),S=Math.ceil(l+d-P);m={x,y:P,w:C,h:S}}const _=r.crossOrigin;return{x:c,y:d,h:l,w:u,excavation:m,opacity:p,crossOrigin:_}}function lD(t,e){return e!=null?Math.max(Math.floor(e),0):t?iD:sD}function dI({value:t,level:e,minVersion:n,includeMargin:r,marginSize:i,imageSettings:s,size:o,boostLevel:u}){let l=Pe.useMemo(()=>{const x=(Array.isArray(t)?t:[t]).reduce((P,C)=>(P.push(...Ri.QrSegment.makeSegments(C)),P),[]);return Ri.QrCode.encodeSegments(x,rD[e],n,void 0,void 0,u)},[t,e,n,u]);const{cells:c,margin:d,numCells:p,calculatedImageSettings:m}=Pe.useMemo(()=>{let _=l.getModules();const x=lD(r,i),P=_.length+x*2,C=aD(_,o,x,s);return{cells:_,margin:x,numCells:P,calculatedImageSettings:C}},[l,o,s,r,i]);return{qrcode:l,margin:d,cells:c,numCells:p,calculatedImageSettings:m}}var uD=function(){try{new Path2D().addPath(new Path2D)}catch{return!1}return!0}(),cD=Pe.forwardRef(function(e,n){const r=e,{value:i,size:s=iI,level:o=sI,bgColor:u=oI,fgColor:l=aI,includeMargin:c=lI,minVersion:d=uI,boostLevel:p,marginSize:m,imageSettings:_}=r,P=pd(r,["value","size","level","bgColor","fgColor","includeMargin","minVersion","boostLevel","marginSize","imageSettings"]),{style:C}=P,S=pd(P,["style"]),w=_==null?void 0:_.src,E=Pe.useRef(null),D=Pe.useRef(null),M=Pe.useCallback(pe=>{E.current=pe,typeof n=="function"?n(pe):n&&(n.current=pe)},[n]),[V,I]=Pe.useState(!1),{margin:v,cells:T,numCells:A,calculatedImageSettings:R}=dI({value:i,level:o,minVersion:d,boostLevel:p,includeMargin:c,marginSize:m,imageSettings:_,size:s});Pe.useEffect(()=>{if(E.current!=null){const pe=E.current,K=pe.getContext("2d");if(!K)return;let Q=T;const q=D.current,j=R!=null&&q!==null&&q.complete&&q.naturalHeight!==0&&q.naturalWidth!==0;j&&R.excavation!=null&&(Q=hI(T,R.excavation));const W=window.devicePixelRatio||1;pe.height=pe.width=s*W;const X=s/A*W;K.scale(X,X),K.fillStyle=u,K.fillRect(0,0,A,A),K.fillStyle=l,uD?K.fill(new Path2D(cI(Q,v))):T.forEach(function(ue,se){ue.forEach(function(me,Bt){me&&K.fillRect(Bt+v,se+v,1,1)})}),R&&(K.globalAlpha=R.opacity),j&&K.drawImage(q,R.x+v,R.y+v,R.w,R.h)}}),Pe.useEffect(()=>{I(!1)},[w]);const N=fd({height:s,width:s},C);let k=null;return w!=null&&(k=Pe.createElement("img",{src:w,key:w,style:{display:"none"},onLoad:()=>{I(!0)},ref:D,crossOrigin:R==null?void 0:R.crossOrigin})),Pe.createElement(Pe.Fragment,null,Pe.createElement("canvas",fd({style:N,height:s,width:s,ref:M,role:"img"},S)),k)});cD.displayName="QRCodeCanvas";var fI=Pe.forwardRef(function(e,n){const r=e,{value:i,size:s=iI,level:o=sI,bgColor:u=oI,fgColor:l=aI,includeMargin:c=lI,minVersion:d=uI,boostLevel:p,title:m,marginSize:_,imageSettings:x}=r,P=pd(r,["value","size","level","bgColor","fgColor","includeMargin","minVersion","boostLevel","title","marginSize","imageSettings"]),{margin:C,cells:S,numCells:w,calculatedImageSettings:E}=dI({value:i,level:o,minVersion:d,boostLevel:p,includeMargin:c,marginSize:_,imageSettings:x,size:s});let D=S,M=null;x!=null&&E!=null&&(E.excavation!=null&&(D=hI(S,E.excavation)),M=Pe.createElement("image",{href:x.src,height:E.h,width:E.w,x:E.x+C,y:E.y+C,preserveAspectRatio:"none",opacity:E.opacity,crossOrigin:E.crossOrigin}));const V=cI(D,C);return Pe.createElement("svg",fd({height:s,width:s,viewBox:`0 0 ${w} ${w}`,ref:n,role:"img"},P),!!m&&Pe.createElement("title",null,m),Pe.createElement("path",{fill:u,d:`M0,0 h${w}v${w}H0z`,shapeRendering:"crispEdges"}),Pe.createElement("path",{fill:l,d:V,shapeRendering:"crispEdges"}),M)});fI.displayName="QRCodeSVG";function hD({artists:t=[]}){return y.jsxs("div",{className:"relative w-64 h-64 md:w-80 md:h-80 mx-auto transition-all duration-700 ease-out transform",children:[y.jsx("div",{className:"absolute inset-0 rounded-full border-8 border-secondary shadow-[0_0_30px_rgba(0,0,0,0.5)] z-10"}),y.jsx("div",{className:"absolute inset-2 rounded-full overflow-hidden bg-black/40 rotate-[-15deg]",children:[...Array(12)].map((r,i)=>y.jsx("div",{className:"absolute top-0 left-1/2 w-1/2 h-1/2 origin-bottom-left border-l border-white/5",style:{transform:`rotate(${i*30}deg)`,backgroundColor:t[i]?`hsla(${i*30}, 70%, 50%, 0.3)`:"transparent"},children:y.jsx("div",{className:"absolute top-4 left-4 -rotate-[30deg] origin-center text-[10px] font-black uppercase tracking-tighter text-white/80 max-w-[60px] truncate",style:{transform:"rotate(15deg) translate(10px, 0)"},children:t[i]||i+1})},i))}),y.jsx("div",{className:"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-secondary rounded-full z-20 flex items-center justify-center border-4 border-dark shadow-xl",children:y.jsx("div",{className:"w-2 h-2 bg-primary rounded-full animate-pulse"})}),y.jsx("div",{className:"absolute -top-2 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-t-[20px] border-t-primary z-30 drop-shadow-lg"})]})}function dD(){var I,v,T,A,R,N,k,pe,K;const{id:t}=hf(),e=hu(),[n,r]=U.useState(null),[i,s]=U.useState(""),[o,u]=U.useState(!1),[l,c]=U.useState(localStorage.getItem("playerId")),[d,p]=U.useState(localStorage.getItem("nickname")),[m,_]=U.useState(""),[x,P]=U.useState(!1),C=window.location.href;U.useEffect(()=>{if(!l||!d)return;const Q=op(t,j=>{r(j),j.status==="drafting"?e(`/drafting/${t}`):j.status==="battling_ko"&&e(`/battle/${t}`)});return(async()=>{try{await Yb(t,l,d)}catch{console.log("Join attempt done")}})(),()=>Q()},[t,l,d,e]),U.useEffect(()=>{var Q;(n==null?void 0:n.hostId)===l&&((Q=n==null?void 0:n.players)==null?void 0:Q.length)>0&&!(n!=null&&n.currentPlayerTurn)&&(async()=>{const j=ln(hn,"lobbies",t);await Rn(j,{currentPlayerTurn:l})})()},[n==null?void 0:n.hostId,n==null?void 0:n.players,n==null?void 0:n.currentPlayerTurn,l,t]);const S=async()=>{var Q;if(!(!i.trim()||!n||((Q=n.wheelArtists)==null?void 0:Q.length)>=12)&&n.currentPlayerTurn===l)try{const q=ln(hn,"lobbies",t),W=[...n.wheelArtists||[],i.trim()],ue=(n.players.findIndex(me=>me.id===l)+1)%n.players.length,se=n.players[ue].id;await Rn(q,{wheelArtists:W,currentPlayerTurn:se}),s("")}catch(q){console.error("Fehler beim Hinzufügen:",q)}},w=async()=>{var q;if(((q=n.wheelArtists)==null?void 0:q.length)<12)return alert("Das Rad muss voll sein!");const Q=ln(hn,"lobbies",t);await Rn(Q,{status:"drafting"})},E=async Q=>{if(Q.preventDefault(),!m.trim())return;const q=Math.random().toString(36).substring(2,9);localStorage.setItem("playerId",q),localStorage.setItem("nickname",m.trim()),c(q),p(m.trim())},D=()=>{navigator.clipboard.writeText(C),P(!0),setTimeout(()=>P(!1),2e3)};if(!l||!d)return y.jsx("div",{className:"flex-1 flex flex-col items-center justify-center p-6 bg-dark",children:y.jsxs("div",{className:"w-full max-w-sm bg-secondary p-8 rounded-3xl border border-white/5 shadow-2xl space-y-6 animate-in fade-in zoom-in-95 duration-300",children:[y.jsxs("div",{className:"text-center space-y-2",children:[y.jsx("h2",{className:"text-3xl font-black italic tracking-tighter",children:"LOBBY JOIN"}),y.jsxs("p",{className:"text-gray-400 text-sm font-medium",children:["Lobby ",y.jsx("span",{className:"text-primary font-bold",children:t})," beitreten"]})]}),y.jsxs("form",{onSubmit:E,className:"space-y-4",children:[y.jsx("input",{type:"text",placeholder:"Dein Stage-Name",value:m,onChange:Q=>_(Q.target.value),className:"w-full bg-black/40 border border-white/10 rounded-2xl p-4 text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-primary transition-all text-center font-bold",autoFocus:!0,required:!0}),y.jsx("button",{type:"submit",className:"w-full bg-primary text-black font-black py-4 rounded-2xl hover:bg-primary/90 transition-all active:scale-95 shadow-lg shadow-primary/20 uppercase tracking-widest",children:"Ready to Battle"})]})]})});if(!n)return y.jsx("div",{className:"flex-1 flex items-center justify-center bg-dark text-white",children:y.jsx(hr,{className:"animate-spin text-primary",size:40})});const M=n.hostId===l,V=n.currentPlayerTurn===l;return y.jsxs("div",{className:"flex-1 flex flex-col bg-dark text-white p-4 md:p-6 max-w-4xl mx-auto w-full overflow-y-auto pb-24",children:[o&&y.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200",children:y.jsxs("div",{className:"bg-secondary p-8 rounded-[2.5rem] border border-white/10 shadow-2xl max-w-xs w-full relative animate-in zoom-in-95 duration-300",children:[y.jsx("button",{onClick:()=>u(!1),className:"absolute top-4 right-4 p-2 bg-white/5 rounded-full hover:bg-white/10 transition-colors",children:y.jsx(zx,{size:20})}),y.jsxs("div",{className:"text-center space-y-6",children:[y.jsxs("div",{children:[y.jsx("h3",{className:"text-xl font-black italic",children:"EINLADEN"}),y.jsx("p",{className:"text-gray-400 text-xs font-bold uppercase tracking-widest",children:"Scannen zum Beitreten"})]}),y.jsx("div",{className:"bg-white p-4 rounded-3xl inline-block shadow-inner mx-auto",children:y.jsx(fI,{value:C,size:180})}),y.jsxs("div",{className:"space-y-2",children:[y.jsx("p",{className:"text-[10px] text-gray-500 font-bold uppercase",children:"Direkt-Link"}),y.jsxs("button",{onClick:D,className:"w-full bg-black/40 border border-white/5 rounded-xl p-3 text-[10px] font-mono flex items-center justify-between hover:bg-black/60 transition-all",children:[y.jsx("span",{className:"truncate mr-2",children:C}),x?y.jsx(xl,{size:14,className:"text-primary"}):y.jsx(Sx,{size:14})]})]})]})]})}),y.jsxs("header",{className:"flex justify-between items-center mb-6",children:[y.jsxs("div",{className:"flex flex-col",children:[y.jsx("h1",{className:"text-3xl font-black italic tracking-tighter leading-none",children:"AUX BATTLE"}),y.jsxs("div",{className:"flex items-center gap-2 mt-1",children:[y.jsx("span",{className:"text-[10px] font-black bg-primary text-black px-2 py-0.5 rounded italic",children:"LOBBY"}),y.jsx("span",{className:"text-[10px] font-bold text-gray-500 tracking-widest uppercase",children:t})]})]}),y.jsx("button",{onClick:()=>u(!0),className:"p-3 bg-secondary rounded-2xl border border-white/5 text-primary hover:bg-secondary/80 transition-all active:scale-95",children:y.jsx(Px,{size:24})})]}),y.jsxs("div",{className:"flex flex-col lg:grid lg:grid-cols-12 gap-6 flex-1",children:[y.jsx("div",{className:"lg:col-span-7 flex flex-col space-y-6",children:y.jsxs("section",{className:"bg-secondary/30 rounded-[2.5rem] p-6 md:p-8 border border-white/5 flex flex-col items-center justify-center relative overflow-hidden",children:[y.jsx("div",{className:"absolute top-0 left-0 w-full h-full bg-gradient-to-b from-primary/5 to-transparent pointer-events-none"}),y.jsxs("div",{className:"relative z-10 w-full text-center mb-8",children:[y.jsx("h3",{className:"text-sm font-black uppercase tracking-[0.2em] text-gray-500 mb-6",children:"GLÜCKSRAD FÜLLEN"}),y.jsx(hD,{artists:n.wheelArtists})]}),y.jsxs("div",{className:"w-full max-w-sm z-10 space-y-4",children:[y.jsx("div",{className:"text-center mb-2",children:V?y.jsxs("div",{className:"inline-flex items-center gap-2 bg-primary text-black font-black px-6 py-2 rounded-full text-xs animate-pulse uppercase tracking-widest shadow-lg shadow-primary/20",children:[y.jsx(du,{size:14})," DEIN ZUG!"]}):y.jsxs("div",{className:"inline-flex items-center gap-2 bg-white/5 text-gray-400 font-bold px-6 py-2 rounded-full text-xs uppercase tracking-widest border border-white/5",children:[y.jsx(hr,{size:12,className:"animate-spin"})," Warte auf ",((I=n.players.find(Q=>Q.id===n.currentPlayerTurn))==null?void 0:I.name)||"..."]})}),y.jsxs("div",{className:"relative group",children:[y.jsx("input",{type:"text",placeholder:"Interpret eingeben...",value:i,onChange:Q=>s(Q.target.value),onKeyDown:Q=>Q.key==="Enter"&&S(),disabled:!V||((v=n.wheelArtists)==null?void 0:v.length)>=12,className:"w-full bg-black/60 border-2 border-white/5 rounded-2xl p-5 pr-16 text-white font-bold placeholder-gray-700 focus:border-primary outline-none transition-all disabled:opacity-50 text-center"}),y.jsx("button",{onClick:S,disabled:!V||!i.trim()||((T=n.wheelArtists)==null?void 0:T.length)>=12,className:"absolute right-2 top-2 bottom-2 aspect-square bg-primary text-black rounded-xl flex items-center justify-center disabled:opacity-0 transition-all hover:bg-primary/90 active:scale-90",children:y.jsx(Mx,{size:20})})]}),y.jsxs("div",{className:"flex justify-between items-center px-2",children:[y.jsx("p",{className:"text-[10px] font-black text-gray-600 uppercase tracking-widest",children:"Fortschritt"}),y.jsxs("p",{className:"text-[10px] font-black text-primary uppercase tracking-widest",children:[((A=n.wheelArtists)==null?void 0:A.length)||0," / 12 Slots"]})]}),y.jsx("div",{className:"h-1.5 w-full bg-white/5 rounded-full overflow-hidden border border-white/5 p-[1px]",children:y.jsx("div",{className:"h-full bg-primary rounded-full transition-all duration-500 shadow-[0_0_10px_rgba(29,185,84,0.3)]",style:{width:`${(((R=n.wheelArtists)==null?void 0:R.length)||0)/12*100}%`}})})]})]})}),y.jsx("div",{className:"lg:col-span-5 flex flex-col space-y-6",children:y.jsxs("section",{className:"bg-secondary/30 rounded-[2.5rem] p-6 border border-white/5 flex-1",children:[y.jsxs("div",{className:"flex items-center justify-between mb-6",children:[y.jsx("h3",{className:"text-sm font-black uppercase tracking-[0.2em] text-gray-500",children:"PLAYERS"}),y.jsx("div",{className:"bg-white/5 px-3 py-1 rounded-lg border border-white/5",children:y.jsx("span",{className:"text-xs font-black text-primary",children:n.players.length})})]}),y.jsx("div",{className:"space-y-3",children:n.players.map((Q,q)=>{const j=n.currentPlayerTurn===Q.id;return y.jsxs("div",{className:`group flex items-center justify-between p-4 rounded-2xl border transition-all duration-300 ${j?"bg-primary/10 border-primary/30 shadow-lg shadow-primary/5 translate-x-1":"bg-black/20 border-white/5"}`,children:[y.jsxs("div",{className:"flex items-center gap-4",children:[y.jsx("div",{className:`w-8 h-8 rounded-xl flex items-center justify-center font-black text-xs ${j?"bg-primary text-black":"bg-white/5 text-gray-500"}`,children:q+1}),y.jsxs("div",{className:"flex flex-col",children:[y.jsxs("span",{className:`font-bold text-sm ${j?"text-white":"text-gray-400"}`,children:[Q.name," ",Q.id===l&&y.jsx("span",{className:"text-[10px] opacity-50 ml-1 font-medium",children:"(DU)"})]}),j&&y.jsx("span",{className:"text-[10px] text-primary font-black uppercase tracking-tighter",children:"Schreibt gerade..."})]})]}),j?y.jsx("div",{className:"w-2 h-2 rounded-full bg-primary animate-ping"}):y.jsx(xl,{size:18,className:"text-gray-700 group-hover:text-primary/40 transition-colors"})]},Q.id)})})]})})]}),y.jsx("footer",{className:"fixed bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-dark via-dark to-transparent md:relative md:bg-none md:p-0 md:mt-8 z-40",children:y.jsx("div",{className:"max-w-4xl mx-auto",children:M?y.jsx("button",{disabled:((N=n.wheelArtists)==null?void 0:N.length)<12,onClick:w,className:`w-full py-5 rounded-2xl font-black uppercase tracking-[0.2em] transition-all active:scale-95 shadow-2xl flex items-center justify-center gap-3 ${((k=n.wheelArtists)==null?void 0:k.length)<12?"bg-secondary text-gray-600 border border-white/5 cursor-not-allowed":"bg-primary text-black hover:bg-primary/90 shadow-primary/20 cursor-pointer"}`,children:((pe=n.wheelArtists)==null?void 0:pe.length)<12?`Warte auf ${12-(((K=n.wheelArtists)==null?void 0:K.length)||0)} Interpreten`:"WETTBEWERB STARTEN"}):y.jsx("div",{className:"bg-secondary/80 backdrop-blur-md p-5 rounded-2xl border border-white/5 text-center",children:y.jsx("p",{className:"text-xs font-black text-gray-500 uppercase tracking-[0.2em] animate-pulse",children:"Warte auf Host zum Starten..."})})})})]})}const fD="AIzaSyDnYEK9RJD1pipQElmQ96NZE5LFuBiVcSo",pD="https://www.googleapis.com/youtube/v3",mD=async t=>{if(!t)return[];try{const e=await fetch(`${pD}/search?part=snippet&maxResults=8&q=${encodeURIComponent(t)}&type=video&videoEmbeddable=true&videoSyndicated=true&key=${fD}`);if(!e.ok)throw new Error("YouTube API Error");return(await e.json()).items.map(r=>({videoId:r.id.videoId,title:r.snippet.title,channelTitle:r.snippet.channelTitle,thumbnail:r.snippet.thumbnails.default.url}))}catch(e){return console.error("Error searching YouTube:",e),[]}};function gD({artists:t=[],isSpinning:e,targetIndex:n,onFinished:r}){const[o,u]=U.useState(0),l=U.useRef(0);return U.useEffect(()=>{if(e&&n!==null){const d=1800+(12-n)*30,p=l.current+d;u(p),l.current=p;const m=setTimeout(()=>{r()},4e3);return()=>clearTimeout(m)}},[e,n]),y.jsxs("div",{className:"relative w-72 h-72 md:w-96 md:h-96 mx-auto perspective-1000",children:[y.jsx("div",{className:`absolute inset-0 rounded-full bg-primary/20 blur-3xl transition-opacity duration-1000 ${e?"opacity-100":"opacity-0"}`}),y.jsxs("div",{className:"absolute inset-0 transition-transform duration-[4000ms] cubic-bezier(0.15, 0, 0.15, 1)",style:{transform:`rotate(${o}deg)`},children:[y.jsx("div",{className:"absolute inset-0 rounded-full border-[12px] border-secondary shadow-[0_0_50px_rgba(0,0,0,0.8)] z-10"}),y.jsx("div",{className:"absolute inset-2 rounded-full overflow-hidden bg-black/60",children:[...Array(12)].map((c,d)=>y.jsx("div",{className:"absolute top-0 left-1/2 w-1/2 h-1/2 origin-bottom-left border-l border-white/10",style:{transform:`rotate(${d*30}deg)`,backgroundColor:t[d]?`hsla(${d*30}, 70%, 40%, 0.4)`:"rgba(255,255,255,0.02)"},children:y.jsx("div",{className:"absolute top-8 left-6 -rotate-[30deg] origin-center text-[10px] md:text-xs font-black uppercase tracking-tighter text-white/90 max-w-[80px] truncate",style:{transform:"rotate(15deg) translate(10px, 0)"},children:t[d]||d+1})},d))}),[...Array(12)].map((c,d)=>y.jsx("div",{className:"absolute top-0 left-1/2 w-2 h-2 bg-white/20 rounded-full -translate-x-1/2 mt-1 z-20",style:{transform:`rotate(${d*30}deg) origin-bottom`}},`stud-${d}`))]}),y.jsx("div",{className:"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-secondary rounded-full z-30 flex items-center justify-center border-4 border-dark shadow-2xl",children:y.jsx(du,{size:20,className:`${e?"animate-bounce text-primary":"text-gray-500"}`})}),y.jsx("div",{className:"absolute -top-4 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[16px] border-l-transparent border-r-[16px] border-r-transparent border-t-[28px] border-t-primary z-40 drop-shadow-[0_0_10px_rgba(29,185,84,0.5)]"})]})}function yD(){var k,pe;const{id:t}=hf(),e=hu(),[n,r]=U.useState(null),[i]=U.useState(localStorage.getItem("playerId")),[s,o]=U.useState(!1),[u,l]=U.useState(null),[c,d]=U.useState(null),[p,m]=U.useState(""),[_,x]=U.useState([]),[P,C]=U.useState(!1),[S,w]=U.useState(null);U.useEffect(()=>{const K=op(t,Q=>{r(Q),Q.status==="battling_ko"&&e(`/battle/${t}`)});return()=>K()},[t,e]);const E=async()=>{if(n.currentPlayerTurn!==i||s||c)return;const K=n.wheelArtists.map((q,j)=>q?j:null).filter(q=>q!==null);if(K.length===0)return;const Q=K[Math.floor(Math.random()*K.length)];l(Q),o(!0)},D=()=>{o(!1);const K=n.wheelArtists[u];d(K),m(K+" "),x([])},M=async()=>{if(!p.trim())return;C(!0);const K=await mD(p);x(K),C(!1)},V=async K=>{if(!(!n||!c))try{const Q=ln(hn,"lobbies",t),q=n.portfolios||{},j=q[i]||[],W={...q,[i]:[...j,{...K,pickedArtist:c}]},ue=(n.players.findIndex(me=>me.id===i)+1)%n.players.length,se=n.players[ue].id;await Rn(Q,{portfolios:W,currentPlayerTurn:se}),d(null),l(null),x([]),m(""),w(null)}catch(Q){console.error("Fehler beim Portfolio Update:",Q)}},I=3,v=n&&n.players.every(K=>{var q;return(((q=n.portfolios)==null?void 0:q[K.id])||[]).length>=I}),T=async()=>{if(!v)return;const K=ln(hn,"lobbies",t),Q=[];n.players.forEach(W=>{var ue;(((ue=n.portfolios)==null?void 0:ue[W.id])||[]).forEach(se=>{Q.push({...se,playerId:W.id,playerName:W.name})})});const q=[...Q].sort(()=>Math.random()-.5),j=[];for(let W=0;W<q.length;W+=2)q[W]&&q[W+1]&&j.push({songA:q[W],songB:q[W+1],votesA:0,votesB:0,votedPlayersA:[],votedPlayersB:[]});await Rn(K,{status:"battling_ko",battles:j,currentBattleIndex:0,currentRound:1})};if(!n)return y.jsx("div",{className:"flex-1 flex items-center justify-center bg-dark text-white",children:y.jsx(hr,{className:"animate-spin text-primary",size:40})});const A=n.hostId===i,R=n.currentPlayerTurn===i,N=((k=n.portfolios)==null?void 0:k[i])||[];return y.jsxs("div",{className:"flex-1 flex flex-col bg-dark text-white p-4 md:p-6 max-w-6xl mx-auto w-full overflow-y-auto pb-24",children:[y.jsxs("header",{className:"flex justify-between items-center mb-8",children:[y.jsxs("div",{className:"flex flex-col",children:[y.jsx("h1",{className:"text-2xl font-black italic tracking-tighter leading-none",children:"DRAFTING"}),y.jsxs("div",{className:"flex items-center gap-2 mt-1",children:[y.jsx("span",{className:"text-[10px] font-black bg-primary text-black px-2 py-0.5 rounded italic",children:"PHASE 2"}),y.jsx("span",{className:"text-[10px] font-bold text-gray-500 tracking-widest uppercase",children:"SONG SELECTION"})]})]}),y.jsxs("div",{className:"flex items-center gap-3",children:[y.jsxs("div",{className:"hidden md:flex flex-col text-right",children:[y.jsx("span",{className:"text-[10px] font-black text-gray-500 uppercase tracking-widest",children:"Dein Deck"}),y.jsxs("span",{className:"text-sm font-bold text-primary",children:[N.length," / ",I," Songs"]})]}),y.jsx("div",{className:"w-10 h-10 rounded-xl bg-secondary border border-white/5 flex items-center justify-center text-primary",children:y.jsx(Bh,{size:20})})]})]}),y.jsxs("div",{className:"flex flex-col lg:grid lg:grid-cols-12 gap-8 flex-1",children:[y.jsx("div",{className:"lg:col-span-7 flex flex-col",children:y.jsxs("section",{className:"bg-secondary/30 rounded-[2.5rem] p-8 border border-white/5 flex flex-col items-center justify-center relative overflow-hidden flex-1 min-h-[450px]",children:[y.jsx("div",{className:"absolute top-0 left-0 w-full h-full bg-gradient-to-b from-primary/5 to-transparent pointer-events-none"}),y.jsx("div",{className:"relative z-10 w-full text-center",children:c?y.jsxs("div",{className:"animate-in zoom-in-95 duration-500 text-center",children:[y.jsx("div",{className:"inline-block bg-primary/10 border border-primary/20 p-2 rounded-2xl mb-4",children:y.jsx("div",{className:"bg-primary text-black font-black px-4 py-1 rounded-xl text-[10px] uppercase tracking-widest",children:"GEWONNEN!"})}),y.jsx("h2",{className:"text-5xl font-black italic tracking-tighter mb-2 break-words max-w-md mx-auto",children:c}),y.jsx("p",{className:"text-gray-400 font-bold uppercase tracking-widest text-xs mb-8",children:"Wähle jetzt deinen Battle-Song"}),y.jsx("div",{className:"w-16 h-1 bg-primary mx-auto rounded-full mb-8 shadow-[0_0_15px_rgba(29,185,84,0.5)]"})]}):y.jsxs(y.Fragment,{children:[y.jsx("h3",{className:"text-xs font-black uppercase tracking-[0.3em] text-gray-500 mb-10",children:"GLÜCKSRAD DREHEN"}),y.jsx(gD,{artists:n.wheelArtists,isSpinning:s,targetIndex:u,onFinished:D}),y.jsx("div",{className:"mt-10",children:R?y.jsxs("button",{onClick:E,disabled:s,className:"group relative bg-primary text-black font-black py-4 px-10 rounded-2xl hover:bg-primary/90 transition-all active:scale-95 shadow-xl shadow-primary/20 flex items-center gap-3 mx-auto disabled:opacity-50 disabled:cursor-not-allowed",children:[y.jsx(bx,{size:20,className:s?"animate-spin":"group-hover:rotate-180 transition-transform duration-500"}),"JETZT DREHEN"]}):y.jsx("div",{className:"flex flex-col items-center gap-4",children:y.jsxs("div",{className:"flex items-center gap-2 bg-white/5 px-6 py-2 rounded-full border border-white/5 text-gray-400 text-xs font-bold uppercase tracking-widest",children:[y.jsx(hr,{size:14,className:"animate-spin text-primary"}),(pe=n.players.find(K=>K.id===n.currentPlayerTurn))==null?void 0:pe.name," am Zug..."]})})})]})})]})}),y.jsx("div",{className:"lg:col-span-5 flex flex-col space-y-6",children:c&&R?y.jsxs("section",{className:"bg-secondary/30 rounded-[2.5rem] p-6 border border-white/5 animate-in slide-in-from-bottom-4 duration-500",children:[y.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[y.jsx("div",{className:"p-2 bg-primary/20 rounded-lg text-primary",children:y.jsx(Nc,{size:18})}),y.jsx("h3",{className:"text-sm font-black uppercase tracking-widest",children:"YOUTUBE SUCHE"})]}),y.jsxs("div",{className:"flex gap-2 mb-6",children:[y.jsx("input",{type:"text",value:p,onChange:K=>m(K.target.value),onKeyDown:K=>K.key==="Enter"&&M(),className:"flex-1 bg-black/40 border border-white/10 rounded-xl p-4 text-white font-bold placeholder-gray-700 focus:ring-1 focus:ring-primary outline-none transition-all"}),y.jsx("button",{onClick:M,disabled:P,className:"bg-primary text-black p-4 rounded-xl hover:bg-primary/90 transition-all active:scale-90",children:P?y.jsx(hr,{size:20,className:"animate-spin"}):y.jsx(Nc,{size:20})})]}),y.jsx("div",{className:"space-y-2 max-h-[350px] overflow-y-auto pr-2 custom-scrollbar",children:_.length>0?_.map(K=>y.jsxs("button",{onClick:()=>V(K),className:"w-full flex items-center gap-4 bg-black/20 hover:bg-white/5 p-3 rounded-2xl transition-all text-left group border border-transparent hover:border-primary/30",children:[y.jsxs("div",{className:"relative shrink-0",children:[y.jsx("img",{src:K.thumbnail,alt:"",className:"w-14 h-14 object-cover rounded-xl"}),y.jsx("div",{className:"absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl flex items-center justify-center",children:y.jsx(xl,{size:20,className:"text-white"})})]}),y.jsxs("div",{className:"flex-1 min-w-0",children:[y.jsx("p",{className:"font-bold truncate text-sm group-hover:text-primary transition-colors",children:K.title}),y.jsx("p",{className:"text-[10px] text-gray-500 truncate font-bold uppercase tracking-tighter mt-1",children:K.channelTitle})]}),y.jsx(v0,{size:16,className:"text-gray-700 group-hover:text-primary transition-all mr-2"})]},K.videoId)):!P&&y.jsxs("div",{className:"text-center py-10 text-gray-600",children:[y.jsx(Nc,{size:40,className:"mx-auto mb-2 opacity-20"}),y.jsx("p",{className:"text-xs font-bold uppercase tracking-widest",children:"Keine Ergebnisse"})]})})]}):y.jsxs("section",{className:"bg-secondary/30 rounded-[2.5rem] p-6 border border-white/5 flex flex-col flex-1",children:[y.jsxs("div",{className:"flex items-center justify-between mb-8",children:[y.jsxs("div",{className:"flex items-center gap-3",children:[y.jsx("div",{className:"p-2 bg-primary/20 rounded-lg text-primary",children:y.jsx(du,{size:18})}),y.jsx("h3",{className:"text-sm font-black uppercase tracking-widest",children:"DEIN DECK"})]}),y.jsxs("span",{className:"text-[10px] font-black text-gray-500 uppercase tracking-widest",children:[N.length," / ",I]})]}),y.jsx("div",{className:"space-y-3 flex-1 overflow-y-auto pr-1",children:[...Array(I)].map((K,Q)=>{const q=N[Q];return y.jsxs("div",{className:`flex items-center gap-4 p-4 rounded-2xl border transition-all ${q?"bg-black/40 border-primary/20":"bg-black/10 border-white/5 border-dashed opacity-40"}`,children:[y.jsx("div",{className:`w-10 h-10 rounded-xl flex items-center justify-center font-black text-xs ${q?"bg-primary text-black":"bg-white/5 text-gray-500"}`,children:Q+1}),y.jsx("div",{className:"flex-1 min-w-0",children:q?y.jsxs(y.Fragment,{children:[y.jsx("p",{className:"font-bold truncate text-sm",children:q.title}),y.jsx("p",{className:"text-[10px] text-primary font-black uppercase tracking-tighter",children:q.pickedArtist})]}):y.jsx("p",{className:"text-xs font-bold text-gray-700 uppercase tracking-widest",children:"Slot leer"})}),q&&y.jsx(xl,{size:16,className:"text-primary"})]},Q)})}),y.jsxs("div",{className:"mt-8 pt-6 border-t border-white/5",children:[y.jsx("h4",{className:"text-[10px] font-black text-gray-500 uppercase tracking-[0.2em] mb-4 text-center",children:"GRUPPEN-FORTSCHRITT"}),y.jsx("div",{className:"flex flex-wrap justify-center gap-2",children:n.players.map(K=>{var q,j;const Q=((j=(q=n.portfolios)==null?void 0:q[K.id])==null?void 0:j.length)||0;return y.jsxs("div",{className:"flex flex-col items-center gap-1",children:[y.jsx("div",{className:"flex gap-1",children:[...Array(I)].map((W,X)=>y.jsx("div",{className:`w-2 h-2 rounded-full ${X<Q?"bg-primary":"bg-white/10"}`},X))}),y.jsx("span",{className:"text-[8px] font-bold text-gray-600 uppercase truncate max-w-[40px]",children:K.name})]},K.id)})})]})]})})]}),y.jsx("footer",{className:"fixed bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-dark via-dark to-transparent md:relative md:bg-none md:p-0 md:mt-8 z-40",children:y.jsx("div",{className:"max-w-6xl mx-auto",children:A?y.jsx("button",{disabled:!v,onClick:T,className:`w-full py-5 rounded-2xl font-black uppercase tracking-[0.2em] transition-all active:scale-95 shadow-2xl flex items-center justify-center gap-3 ${v?"bg-primary text-black hover:bg-primary/90 shadow-primary/20 cursor-pointer":"bg-secondary text-gray-600 border border-white/5 cursor-not-allowed"}`,children:v?"BATTLE STARTEN":"Warte auf alle Spieler..."}):y.jsx("div",{className:"bg-secondary/80 backdrop-blur-md p-5 rounded-2xl border border-white/5 text-center",children:y.jsx("p",{className:"text-xs font-black text-gray-500 uppercase tracking-[0.2em] animate-pulse",children:v?"Warte auf Host für Battle...":"Drafting läuft..."})})})})]})}function vD(){var w;const{id:t}=hf(),e=hu(),[n,r]=U.useState(null),[i]=U.useState(localStorage.getItem("playerId")),[s,o]=U.useState(!1),[u,l]=U.useState(!1),[c,d]=U.useState(0),[p,m]=U.useState(!1),[_,x]=U.useState(null);U.useEffect(()=>{const E=op(t,D=>{var V,I,v;r(D);const M=D.currentBattleIndex||0;if((V=D==null?void 0:D.battles)!=null&&V[M]){const T=D.battles[M],A=(((I=T.votedPlayersA)==null?void 0:I.length)||0)+(((v=T.votedPlayersB)==null?void 0:v.length)||0),R=D.players.length*2;if(A>=R&&!p){const N=T.votesA||0,k=T.votesB||0,pe=N>=k?T.songA:T.songB;x(pe),m(!0),D.hostId===i&&setTimeout(()=>P(D),6e3)}}});return()=>E()},[t,i,p]);const P=async E=>{const D=(E.currentBattleIndex||0)+1,M=ln(hn,"lobbies",t);D<E.battles.length?await Rn(M,{currentBattleIndex:D}):await Rn(M,{status:"finished"})};U.useEffect(()=>{(n==null?void 0:n.currentBattleIndex)!==void 0&&n.currentBattleIndex!==c&&(d(n.currentBattleIndex),o(!1),l(!1),m(!1),x(null))},[n==null?void 0:n.currentBattleIndex]);const C=async(E,D)=>{if(E==="A"&&s||E==="B"&&u)return;const M=ln(hn,"lobbies",t);try{const V=[...n.battles],I=V[c];E==="A"?(I.votesA=(I.votesA||0)+D,I.votedPlayersA=[...I.votedPlayersA||[],i],o(!0)):(I.votesB=(I.votesB||0)+D,I.votedPlayersB=[...I.votedPlayersB||[],i],l(!0)),await Rn(M,{battles:V})}catch(V){console.error(V)}};if(!n)return y.jsx("div",{className:"flex-1 flex items-center justify-center bg-dark",children:y.jsx(hr,{className:"animate-spin text-primary",size:40})});if(n.status==="finished")return y.jsxs("div",{className:"flex-1 flex flex-col items-center justify-center bg-dark text-white p-6 text-center space-y-8 animate-in fade-in zoom-in duration-700",children:[y.jsxs("div",{className:"relative",children:[y.jsx(Bh,{size:120,className:"text-yellow-400 mx-auto animate-pulse drop-shadow-[0_0_30px_rgba(250,204,21,0.5)]"}),y.jsx(Lx,{className:"absolute -top-4 -right-4 text-primary animate-ping"})]}),y.jsxs("div",{className:"space-y-2",children:[y.jsx("h2",{className:"text-6xl font-black italic italic tracking-tighter",children:"BATTLE ENDE"}),y.jsx("p",{className:"text-gray-400 font-bold uppercase tracking-widest text-sm",children:"Das Turnier ist vorbei!"})]}),y.jsxs("button",{onClick:()=>e("/"),className:"group bg-primary text-black font-black py-5 px-12 rounded-2xl hover:bg-primary/90 transition-all active:scale-95 shadow-xl shadow-primary/20 flex items-center gap-3",children:["NEUES SPIEL STARTEN ",y.jsx(v0,{size:20,className:"group-hover:translate-x-1 transition-transform"})]})]});const S=(w=n.battles)==null?void 0:w[c];return S?p&&_?y.jsxs("div",{className:"flex-1 flex flex-col items-center justify-center bg-dark text-white p-6 text-center space-y-10 animate-in zoom-in duration-500 overflow-hidden relative",children:[y.jsx("div",{className:"absolute inset-0 bg-primary/5 blur-[120px] pointer-events-none"}),y.jsxs("div",{className:"space-y-4 relative z-10",children:[y.jsx("div",{className:"inline-block bg-primary text-black font-black px-4 py-1 rounded-xl text-[10px] uppercase tracking-[0.2em] mb-4",children:"ROUND WINNER"}),y.jsx("h2",{className:"text-5xl md:text-7xl font-black italic tracking-tighter text-white leading-none break-words max-w-2xl",children:_.title}),y.jsx("p",{className:"text-xl text-primary font-black uppercase tracking-widest",children:_.playerName})]}),y.jsxs("div",{className:"relative z-10 w-full max-w-lg aspect-video rounded-[2.5rem] overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.8)] border-4 border-primary shadow-primary/20",children:[y.jsx("img",{src:_.thumbnail,alt:_.title,className:"w-full h-full object-cover"}),y.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-center justify-center",children:y.jsx("div",{className:"p-6 bg-dark/80 backdrop-blur-md rounded-full border border-primary/30 shadow-2xl",children:y.jsx(Bh,{size:64,className:"text-primary animate-bounce"})})})]}),y.jsxs("div",{className:"relative z-10 flex flex-col items-center gap-4",children:[y.jsxs("div",{className:"flex gap-2",children:[y.jsx("div",{className:"w-2 h-2 rounded-full bg-primary animate-bounce",style:{animationDelay:"0ms"}}),y.jsx("div",{className:"w-2 h-2 rounded-full bg-primary animate-bounce",style:{animationDelay:"150ms"}}),y.jsx("div",{className:"w-2 h-2 rounded-full bg-primary animate-bounce",style:{animationDelay:"300ms"}})]}),y.jsx("p",{className:"text-gray-500 font-bold uppercase tracking-[0.2em] text-xs",children:"Nächstes Duell wird geladen..."})]})]}):y.jsxs("div",{className:"flex-1 flex flex-col bg-dark text-white p-4 md:p-8 overflow-y-auto pb-24",children:[y.jsxs("header",{className:"flex flex-col items-center text-center mb-10 space-y-2",children:[y.jsx("div",{className:"inline-flex items-center gap-2 bg-primary text-black py-1 px-4 rounded-full text-[10px] font-black uppercase tracking-widest italic shadow-lg shadow-primary/10",children:"BATTLE AKTIV"}),y.jsx("h2",{className:"text-4xl font-black italic tracking-tighter",children:"DAS DUELL"}),y.jsxs("div",{className:"flex items-center gap-4 text-gray-500 text-[10px] font-black uppercase tracking-[0.2em]",children:[y.jsxs("span",{children:["RUNDE ",n.currentRound]}),y.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-white/10"}),y.jsxs("span",{children:["BATTLE ",c+1," / ",n.battles.length]})]})]}),y.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-7xl mx-auto w-full flex-1 mb-20",children:[y.jsxs("div",{className:"flex flex-col space-y-6 bg-secondary/30 p-6 md:p-8 rounded-[2.5rem] border border-white/5 relative overflow-hidden group",children:[y.jsx("div",{className:"absolute top-0 right-0 p-8 opacity-5 -rotate-12 group-hover:opacity-10 transition-opacity",children:y.jsx(xg,{size:120})}),y.jsx("div",{className:"aspect-video bg-black rounded-3xl overflow-hidden shadow-2xl border-2 border-white/5 relative z-10",children:y.jsx("iframe",{width:"100%",height:"100%",src:`https://www.youtube-nocookie.com/embed/${S.songA.videoId}?autoplay=0&controls=1&playsinline=1&rel=0&modestbranding=1&origin=${window.location.origin}`,title:"Song A",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",sandbox:"allow-same-origin allow-scripts allow-presentation allow-popups allow-popups-to-escape-sandbox",allowFullScreen:!0,className:"w-full h-full"})}),y.jsxs("div",{className:"text-center space-y-6 relative z-10 flex-1 flex flex-col",children:[y.jsxs("div",{className:"flex-1",children:[y.jsx("h3",{className:"text-xl md:text-2xl font-black line-clamp-2 italic leading-tight mb-2",children:S.songA.title}),y.jsxs("div",{className:"flex items-center justify-center gap-2",children:[y.jsx("span",{className:"text-[10px] font-black bg-white/5 text-gray-500 px-2 py-0.5 rounded uppercase tracking-widest",children:S.songA.playerName}),y.jsx("span",{className:"text-[10px] font-black text-primary uppercase tracking-widest truncate",children:S.songA.pickedArtist})]})]}),y.jsxs("div",{className:"space-y-4",children:[y.jsx("p",{className:`text-[10px] font-black uppercase tracking-widest transition-colors ${s?"text-primary":"text-gray-600"}`,children:s?"DEINE BEWERTUNG":"WIE VIELE PUNKTE?"}),y.jsx("div",{className:"flex justify-center gap-2",children:[1,2,3,4,5].map(E=>y.jsx("button",{onClick:()=>C("A",E),disabled:s,className:`w-11 h-11 md:w-14 md:h-14 rounded-2xl font-black text-lg transition-all active:scale-90 border-2 ${s?"bg-black/40 border-primary/20 text-primary":"bg-primary border-primary text-black hover:bg-white hover:border-white shadow-lg shadow-primary/10"}`,children:E},E))})]})]})]}),y.jsxs("div",{className:"flex flex-col space-y-6 bg-secondary/30 p-6 md:p-8 rounded-[2.5rem] border border-white/5 relative overflow-hidden group",children:[y.jsx("div",{className:"absolute top-0 right-0 p-8 opacity-5 -rotate-12 group-hover:opacity-10 transition-opacity",children:y.jsx(xg,{size:120})}),y.jsx("div",{className:"aspect-video bg-black rounded-3xl overflow-hidden shadow-2xl border-2 border-white/5 relative z-10",children:y.jsx("iframe",{width:"100%",height:"100%",src:`https://www.youtube-nocookie.com/embed/${S.songB.videoId}?autoplay=0&controls=1&playsinline=1&rel=0&modestbranding=1&origin=${window.location.origin}`,title:"Song B",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",sandbox:"allow-same-origin allow-scripts allow-presentation allow-popups allow-popups-to-escape-sandbox",allowFullScreen:!0,className:"w-full h-full"})}),y.jsxs("div",{className:"text-center space-y-6 relative z-10 flex-1 flex flex-col",children:[y.jsxs("div",{className:"flex-1",children:[y.jsx("h3",{className:"text-xl md:text-2xl font-black line-clamp-2 italic leading-tight mb-2",children:S.songB.title}),y.jsxs("div",{className:"flex items-center justify-center gap-2",children:[y.jsx("span",{className:"text-[10px] font-black bg-white/5 text-gray-500 px-2 py-0.5 rounded uppercase tracking-widest",children:S.songB.playerName}),y.jsx("span",{className:"text-[10px] font-black text-primary uppercase tracking-widest truncate",children:S.songB.pickedArtist})]})]}),y.jsxs("div",{className:"space-y-4",children:[y.jsx("p",{className:`text-[10px] font-black uppercase tracking-widest transition-colors ${u?"text-primary":"text-gray-600"}`,children:u?"DEINE BEWERTUNG":"WIE VIELE PUNKTE?"}),y.jsx("div",{className:"flex justify-center gap-2",children:[1,2,3,4,5].map(E=>y.jsx("button",{onClick:()=>C("B",E),disabled:u,className:`w-11 h-11 md:w-14 md:h-14 rounded-2xl font-black text-lg transition-all active:scale-90 border-2 ${u?"bg-black/40 border-primary/20 text-primary":"bg-primary border-primary text-black hover:bg-white hover:border-white shadow-lg shadow-primary/10"}`,children:E},E))})]})]})]})]}),y.jsx("footer",{className:"fixed bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-dark via-dark to-transparent z-40",children:y.jsx("div",{className:"max-w-7xl mx-auto",children:y.jsxs("div",{className:"bg-secondary/80 backdrop-blur-md p-4 rounded-2xl border border-white/5 flex items-center justify-between",children:[y.jsxs("div",{className:"flex items-center gap-4",children:[y.jsx("div",{className:"flex -space-x-2",children:n.players.map((E,D)=>{var M,V;return y.jsx("div",{className:`w-8 h-8 rounded-full border-2 border-dark flex items-center justify-center text-[10px] font-black ${(M=S.votedPlayersA)!=null&&M.includes(E.id)&&((V=S.votedPlayersB)!=null&&V.includes(E.id))?"bg-primary text-black":"bg-secondary text-gray-600"}`,children:E.name[0].toUpperCase()},E.id)})}),y.jsx("span",{className:"text-[10px] font-black text-gray-500 uppercase tracking-widest",children:"Voting Progress"})]}),y.jsxs("div",{className:"flex items-center gap-2",children:[y.jsx(hr,{size:12,className:"animate-spin text-primary"}),y.jsx("span",{className:"text-[10px] font-black text-primary uppercase tracking-widest italic",children:"Live Battle"})]})]})})})]}):y.jsxs("div",{className:"flex-1 flex flex-col items-center justify-center bg-dark text-white p-6 text-center",children:[y.jsx(hr,{className:"animate-spin text-primary mb-4",size:40}),y.jsx("p",{className:"text-gray-500 font-black uppercase tracking-[0.2em]",children:"Battles werden vorbereitet..."})]})}console.log("AUX Battle: Starting full app...");qc.createRoot(document.getElementById("root")).render(y.jsx(Pe.StrictMode,{children:y.jsx(mx,{children:y.jsx("div",{className:"flex-1 flex flex-col min-h-screen bg-dark text-white",children:y.jsxs(dx,{children:[y.jsx(Ls,{path:"/",element:y.jsx(tD,{})}),y.jsx(Ls,{path:"/lobby/:id",element:y.jsx(dD,{})}),y.jsx(Ls,{path:"/drafting/:id",element:y.jsx(yD,{})}),y.jsx(Ls,{path:"/battle/:id",element:y.jsx(vD,{})})]})})})}));
