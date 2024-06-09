import{g as E}from"./@babel-Bdh_LiN5.js";import{r as R}from"./react-Dz_KORO3.js";import{l as S}from"./lodash.debounce-DsVps9qj.js";var m={};function d(t){"@babel/helpers - typeof";return d=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},d(t)}Object.defineProperty(m,"__esModule",{value:!0});m.DebounceInput=void 0;var _=D(R),T=D(S),K=["element","onChange","value","minLength","debounceTimeout","forceNotifyByEnter","forceNotifyOnBlur","onKeyDown","onBlur","inputRef"];function D(t){return t&&t.__esModule?t:{default:t}}function I(t,n){if(t==null)return{};var o=x(t,n),r,e;if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(t);for(e=0;e<f.length;e++)r=f[e],!(n.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}function x(t,n){if(t==null)return{};var o={},r=Object.keys(t),e,f;for(f=0;f<r.length;f++)e=r[f],!(n.indexOf(e)>=0)&&(o[e]=t[e]);return o}function w(t,n){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),o.push.apply(o,r)}return o}function l(t){for(var n=1;n<arguments.length;n++){var o=arguments[n]!=null?arguments[n]:{};n%2?w(Object(o),!0).forEach(function(r){p(t,r,o[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):w(Object(o)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(o,r))})}return t}function L(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function k(t,n){for(var o=0;o<n.length;o++){var r=n[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function C(t,n,o){return n&&k(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function U(t,n){if(typeof n!="function"&&n!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),n&&g(t,n)}function g(t,n){return g=Object.setPrototypeOf||function(r,e){return r.__proto__=e,r},g(t,n)}function W(t){var n=$();return function(){var r=h(t),e;if(n){var f=h(this).constructor;e=Reflect.construct(r,arguments,f)}else e=r.apply(this,arguments);return V(this,e)}}function V(t,n){if(n&&(d(n)==="object"||typeof n=="function"))return n;if(n!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return s(t)}function s(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function $(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function h(t){return h=Object.setPrototypeOf?Object.getPrototypeOf:function(o){return o.__proto__||Object.getPrototypeOf(o)},h(t)}function p(t,n,o){return n in t?Object.defineProperty(t,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[n]=o,t}var P=function(t){U(o,t);var n=W(o);function o(r){var e;L(this,o),e=n.call(this,r),p(s(e),"onChange",function(i){i.persist();var u=e.state.value,a=e.props.minLength;e.setState({value:i.target.value},function(){var c=e.state.value;if(c.length>=a){e.notify(i);return}u.length>c.length&&e.notify(l(l({},i),{},{target:l(l({},i.target),{},{value:""})}))})}),p(s(e),"onKeyDown",function(i){i.key==="Enter"&&e.forceNotify(i);var u=e.props.onKeyDown;u&&(i.persist(),u(i))}),p(s(e),"onBlur",function(i){e.forceNotify(i);var u=e.props.onBlur;u&&(i.persist(),u(i))}),p(s(e),"createNotifier",function(i){if(i<0)e.notify=function(){return null};else if(i===0)e.notify=e.doNotify;else{var u=(0,T.default)(function(a){e.isDebouncing=!1,e.doNotify(a)},i);e.notify=function(a){e.isDebouncing=!0,u(a)},e.flush=function(){return u.flush()},e.cancel=function(){e.isDebouncing=!1,u.cancel()}}}),p(s(e),"doNotify",function(){var i=e.props.onChange;i.apply(void 0,arguments)}),p(s(e),"forceNotify",function(i){var u=e.props.debounceTimeout;if(!(!e.isDebouncing&&u>0)){e.cancel&&e.cancel();var a=e.state.value,c=e.props.minLength;a.length>=c?e.doNotify(i):e.doNotify(l(l({},i),{},{target:l(l({},i.target),{},{value:a})}))}}),e.isDebouncing=!1,e.state={value:typeof r.value>"u"||r.value===null?"":r.value};var f=e.props.debounceTimeout;return e.createNotifier(f),e}return C(o,[{key:"componentDidUpdate",value:function(e){if(!this.isDebouncing){var f=this.props,i=f.value,u=f.debounceTimeout,a=e.debounceTimeout,c=e.value,y=this.state.value;typeof i<"u"&&c!==i&&y!==i&&this.setState({value:i}),u!==a&&this.createNotifier(u)}}},{key:"componentWillUnmount",value:function(){this.flush&&this.flush()}},{key:"render",value:function(){var e=this.props,f=e.element;e.onChange,e.value,e.minLength,e.debounceTimeout;var i=e.forceNotifyByEnter,u=e.forceNotifyOnBlur,a=e.onKeyDown,c=e.onBlur,y=e.inputRef,B=I(e,K),N=this.state.value,v;i?v={onKeyDown:this.onKeyDown}:a?v={onKeyDown:a}:v={};var b;u?b={onBlur:this.onBlur}:c?b={onBlur:c}:b={};var j=y?{ref:y}:{};return _.default.createElement(f,l(l(l(l({},B),{},{onChange:this.onChange,value:N},v),b),j))}}]),o}(_.default.PureComponent);m.DebounceInput=P;p(P,"defaultProps",{element:"input",type:"text",onKeyDown:void 0,onBlur:void 0,value:void 0,minLength:0,debounceTimeout:100,forceNotifyByEnter:!0,forceNotifyOnBlur:!0,inputRef:void 0});var q=m,O=q.DebounceInput;O.DebounceInput=O;var M=O;const H=E(M);export{H as i};
