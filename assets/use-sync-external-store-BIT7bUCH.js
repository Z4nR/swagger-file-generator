import{g}from"./@babel-HId-Kyk9.js";import{r as h}from"./react-Dr9K8M-X.js";var $={exports:{}},w={},V={exports:{}},j={};/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var a=h;function O(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var _=typeof Object.is=="function"?Object.is:O,D=a.useState,k=a.useEffect,q=a.useLayoutEffect,W=a.useDebugValue;function M(e,t){var o=t(),s=D({inst:{value:o,getSnapshot:t}}),r=s[0].inst,n=s[1];return q(function(){r.value=o,r.getSnapshot=t,y(r)&&n({inst:r})},[e,o,t]),k(function(){return y(r)&&n({inst:r}),e(function(){y(r)&&n({inst:r})})},[e]),W(o),o}function y(e){var t=e.getSnapshot;e=e.value;try{var o=t();return!_(e,o)}catch{return!0}}function R(e,t){return t()}var C=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?R:M;j.useSyncExternalStore=a.useSyncExternalStore!==void 0?a.useSyncExternalStore:C;V.exports=j;var F=V.exports;/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var m=h,L=F;function z(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var A=typeof Object.is=="function"?Object.is:z,B=L.useSyncExternalStore,G=m.useRef,H=m.useEffect,I=m.useMemo,J=m.useDebugValue;w.useSyncExternalStoreWithSelector=function(e,t,o,s,r){var n=G(null);if(n.current===null){var i={hasValue:!1,value:null};n.current=i}else i=n.current;n=I(function(){function S(u){if(!p){if(p=!0,v=u,u=s(u),r!==void 0&&i.hasValue){var c=i.value;if(r(c,u))return f=c}return f=u}if(c=f,A(v,u))return c;var x=s(u);return r!==void 0&&r(c,x)?c:(v=u,f=x)}var p=!1,v,f,d=o===void 0?null:o;return[function(){return S(t())},d===null?void 0:function(){return S(d())}]},[t,o,s,r]);var l=B(e,n[0],n[1]);return H(function(){i.hasValue=!0,i.value=l},[l]),J(l),l};$.exports=w;var K=$.exports;const te=g(K);var N={};/**
 * @license React
 * use-sync-external-store-with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var E=h;function P(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Q=typeof Object.is=="function"?Object.is:P,T=E.useSyncExternalStore,U=E.useRef,X=E.useEffect,Y=E.useMemo,Z=E.useDebugValue;N.useSyncExternalStoreWithSelector=function(e,t,o,s,r){var n=U(null);if(n.current===null){var i={hasValue:!1,value:null};n.current=i}else i=n.current;n=Y(function(){function S(u){if(!p){if(p=!0,v=u,u=s(u),r!==void 0&&i.hasValue){var c=i.value;if(r(c,u))return f=c}return f=u}if(c=f,Q(v,u))return c;var x=s(u);return r!==void 0&&r(c,x)?c:(v=u,f=x)}var p=!1,v,f,d=o===void 0?null:o;return[function(){return S(t())},d===null?void 0:function(){return S(d())}]},[t,o,s,r]);var l=T(e,n[0],n[1]);return X(function(){i.hasValue=!0,i.value=l},[l]),Z(l),l};export{te as u};
