import{r as a}from"./react-Dz_KORO3.js";import{g as u}from"./get-nonce-C-Z93AgS.js";function i(){if(!document)return null;var t=document.createElement("style");t.type="text/css";var e=u();return e&&t.setAttribute("nonce",e),t}function c(t,e){t.styleSheet?t.styleSheet.cssText=e:t.appendChild(document.createTextNode(e))}function l(t){var e=document.head||document.getElementsByTagName("head")[0];e.appendChild(t)}var s=function(){var t=0,e=null;return{add:function(n){t==0&&(e=i())&&(c(e,n),l(e)),t++},remove:function(){t--,!t&&e&&(e.parentNode&&e.parentNode.removeChild(e),e=null)}}},d=function(){var t=s();return function(e,n){a.useEffect(function(){return t.add(e),function(){t.remove()}},[e&&n])}},y=function(){var t=d(),e=function(n){var r=n.styles,o=n.dynamic;return t(r,o),null};return e};export{y as s};
