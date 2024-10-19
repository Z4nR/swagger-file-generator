function V(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function Y(e){if(Array.isArray(e))return e}function Z(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function C(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function N(e,t,n){return t&&C(e.prototype,t),e}function U(e,t){return t!=null&&typeof Symbol<"u"&&t[Symbol.hasInstance]?!!t[Symbol.hasInstance](e):e instanceof t}function ee(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var a=[],u=!0,o=!1,i,c;try{for(n=n.call(e);!(u=(i=n.next()).done)&&(a.push(i.value),!(t&&a.length===t));u=!0);}catch(y){o=!0,c=y}finally{try{!u&&n.return!=null&&n.return()}finally{if(o)throw c}}return a}}function ne(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function te(e,t){return Y(e)||ee(e,t)||re(e,t)||ne()}function S(e){"@swc/helpers - typeof";return e&&typeof Symbol<"u"&&e.constructor===Symbol?"symbol":typeof e}function re(e,t){if(e){if(typeof e=="string")return V(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(n);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return V(e,t)}}var $=function(e){throw TypeError(e)},q=function(e,t,n){return t.has(e)||$("Cannot "+n)},s=function(e,t,n){return q(e,t,"read from private field"),t.get(e)},G=function(e,t,n){return t.has(e)?$("Cannot add the same private member more than once"):U(t,WeakSet)?t.add(e):t.set(e,n)},P=function(e,t,n,a){return q(e,t,"write to private field"),t.set(e,n),n},k=function(e){return Object.prototype.toString.call(e)},z=function(e){return ArrayBuffer.isView(e)&&!U(e,DataView)},ae=function(e){return k(e)==="[object Date]"},ue=function(e){return k(e)==="[object RegExp]"},oe=function(e){return k(e)==="[object Error]"},ie=function(e){return k(e)==="[object Boolean]"},fe=function(e){return k(e)==="[object Number]"},le=function(e){return k(e)==="[object String]"},J=Array.isArray,se=Object.getOwnPropertyDescriptor,ce=Object.prototype.propertyIsEnumerable,ve=Object.getOwnPropertySymbols,R=Object.prototype.hasOwnProperty;function D(e){for(var t=Object.keys(e),n=ve(e),a=0;a<n.length;a++)ce.call(e,n[a])&&t.push(n[a]);return t}function pe(e,t){var n;return!(!((n=se(e,t))===null||n===void 0)&&n.writable)}function K(e,t){if((typeof e>"u"?"undefined":S(e))==="object"&&e!==null){var n;if(J(e))n=[];else if(ae(e))n=new Date(e.getTime?e.getTime():e);else if(ue(e))n=new RegExp(e);else if(oe(e))n={message:e.message};else if(ie(e)||fe(e)||le(e))n=Object(e);else{if(z(e))return e.slice();n=Object.create(Object.getPrototypeOf(e))}var a=t.includeSymbols?D:Object.keys,u=!0,o=!1,i=void 0;try{for(var c=a(e)[Symbol.iterator](),y;!(u=(y=c.next()).done);u=!0){var b=y.value;n[b]=e[b]}}catch(_){o=!0,i=_}finally{try{!u&&c.return!=null&&c.return()}finally{if(o)throw i}}return n}return e}var Q={includeSymbols:!1,immutable:!1};function H(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:Q,a=[],u=[],o=!0,i=n.includeSymbols?D:Object.keys,c=!!n.immutable;return function y(b){var _=c?K(b,n):b,f={},g=!0,r={node:_,node_:b,path:[].concat(a),parent:u[u.length-1],parents:u,key:a[a.length-1],isRoot:a.length===0,level:a.length,circular:void 0,isLeaf:!1,notLeaf:!0,notRoot:!0,isFirst:!1,isLast:!1,update:function(v){var X=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;r.isRoot||(r.parent.node[r.key]=v),r.node=v,X&&(g=!1)},delete:function(v){delete r.parent.node[r.key],v&&(g=!1)},remove:function(v){J(r.parent.node)?r.parent.node.splice(r.key,1):delete r.parent.node[r.key],v&&(g=!1)},keys:null,before:function(v){f.before=v},after:function(v){f.after=v},pre:function(v){f.pre=v},post:function(v){f.post=v},stop:function(){o=!1},block:function(){g=!1}};if(!o)return r;function O(){if(S(r.node)==="object"&&r.node!==null){(!r.keys||r.node_!==r.node)&&(r.keys=i(r.node)),r.isLeaf=r.keys.length===0;for(var l=0;l<u.length;l++)if(u[l].node_===b){r.circular=u[l];break}}else r.isLeaf=!0,r.keys=null;r.notLeaf=!r.isLeaf,r.notRoot=!r.isRoot}O();var j=t.call(r,r.node);if(j!==void 0&&r.update&&r.update(j),f.before&&f.before.call(r,r.node),!g)return r;if(S(r.node)==="object"&&r.node!==null&&!r.circular){u.push(r),O();var A,L=!0,I=!1,M=void 0;try{for(var T=Object.entries((A=r.keys)!==null&&A!==void 0?A:[])[Symbol.iterator](),W;!(L=(W=T.next()).done);L=!0){var B=te(W.value,2),F=B[0],w=B[1],x;a.push(w),f.pre&&f.pre.call(r,r.node[w],w);var E=y(r.node[w]);c&&R.call(r.node,w)&&!pe(r.node,w)&&(r.node[w]=E.node),E.isLast=!((x=r.keys)===null||x===void 0)&&x.length?+F===r.keys.length-1:!1,E.isFirst=+F==0,f.post&&f.post.call(r,E),a.pop()}}catch(l){I=!0,M=l}finally{try{!L&&T.return!=null&&T.return()}finally{if(I)throw M}}u.pop()}return f.after&&f.after.call(r,r.node),r}(e).node}var p,m,d=function(){function e(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Q;Z(this,e),G(this,p),G(this,m),P(this,p,t),P(this,m,n)}return N(e,[{key:"get",value:function(n){for(var a=s(this,p),u=0;a&&u<n.length;u++){var o=n[u];if(!R.call(a,o)||!s(this,m).includeSymbols&&(typeof o>"u"?"undefined":S(o))==="symbol")return;a=a[o]}return a}},{key:"has",value:function(n){for(var a=s(this,p),u=0;a&&u<n.length;u++){var o=n[u];if(!R.call(a,o)||!s(this,m).includeSymbols&&(typeof o>"u"?"undefined":S(o))==="symbol")return!1;a=a[o]}return!0}},{key:"set",value:function(n,a){var u=s(this,p),o=0;for(o=0;o<n.length-1;o++){var i=n[o];R.call(u,i)||(u[i]={}),u=u[i]}return u[n[o]]=a,a}},{key:"map",value:function(n){return H(s(this,p),n,{immutable:!0,includeSymbols:!!s(this,m).includeSymbols})}},{key:"forEach",value:function(n){return P(this,p,H(s(this,p),n,s(this,m))),s(this,p)}},{key:"reduce",value:function(n,a){var u=arguments.length===1,o=u?s(this,p):a;return this.forEach(function(i){(!this.isRoot||!u)&&(o=n.call(this,o,i))}),o}},{key:"paths",value:function(){var n=[];return this.forEach(function(){n.push(this.path)}),n}},{key:"nodes",value:function(){var n=[];return this.forEach(function(){n.push(this.node)}),n}},{key:"clone",value:function(){var n=[],a=[],u=s(this,m);return z(s(this,p))?s(this,p).slice():function o(i){for(var c=0;c<n.length;c++)if(n[c]===i)return a[c];if((typeof i>"u"?"undefined":S(i))==="object"&&i!==null){var y=K(i,u);n.push(i),a.push(y);var b=u.includeSymbols?D:Object.keys,_=!0,f=!1,g=void 0;try{for(var r=b(i)[Symbol.iterator](),O;!(_=(O=r.next()).done);_=!0){var j=O.value;y[j]=o(i[j])}}catch(A){f=!0,g=A}finally{try{!_&&r.return!=null&&r.return()}finally{if(f)throw g}}return n.pop(),a.pop(),y}return i}(s(this,p))}}]),e}();p=new WeakMap;m=new WeakMap;var h=function(e,t){return new d(e,t)};h.get=function(e,t,n){return new d(e,n).get(t)};h.set=function(e,t,n,a){return new d(e,a).set(t,n)};h.has=function(e,t,n){return new d(e,n).has(t)};h.map=function(e,t,n){return new d(e,n).map(t)};h.forEach=function(e,t,n){return new d(e,n).forEach(t)};h.reduce=function(e,t,n,a){return new d(e,a).reduce(t,n)};h.paths=function(e,t){return new d(e,t).paths()};h.nodes=function(e,t){return new d(e,t).nodes()};h.clone=function(e,t){return new d(e,t).clone()};var ye=h;export{ye as s};
