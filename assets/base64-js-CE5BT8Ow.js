function A(r,e){for(var t=0;t<e.length;t++){const a=e[t];if(typeof a!="string"&&!Array.isArray(a)){for(const n in a)if(n!=="default"&&!(n in r)){const o=Object.getOwnPropertyDescriptor(a,n);o&&Object.defineProperty(r,n,o.get?o:{enumerable:!0,get:()=>a[n]})}}}return Object.freeze(Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}))}var l={},F=l.byteLength=C,p=l.toByteArray=B,g=l.fromByteArray=j,y=[],c=[],x=typeof Uint8Array<"u"?Uint8Array:Array,u="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(var h=0,i=u.length;h<i;++h)y[h]=u[h],c[u.charCodeAt(h)]=h;c[45]=62;c[95]=63;function s(r){var e=r.length;if(e%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var t=r.indexOf("=");t===-1&&(t=e);var a=t===e?0:4-t%4;return[t,a]}function C(r){var e=s(r),t=e[0],a=e[1];return(t+a)*3/4-a}function L(r,e,t){return(e+t)*3/4-t}function B(r){var e,t=s(r),a=t[0],n=t[1],o=new x(L(r,a,n)),v=0,d=n>0?a-4:a,f;for(f=0;f<d;f+=4)e=c[r.charCodeAt(f)]<<18|c[r.charCodeAt(f+1)]<<12|c[r.charCodeAt(f+2)]<<6|c[r.charCodeAt(f+3)],o[v++]=e>>16&255,o[v++]=e>>8&255,o[v++]=e&255;return n===2&&(e=c[r.charCodeAt(f)]<<2|c[r.charCodeAt(f+1)]>>4,o[v++]=e&255),n===1&&(e=c[r.charCodeAt(f)]<<10|c[r.charCodeAt(f+1)]<<4|c[r.charCodeAt(f+2)]>>2,o[v++]=e>>8&255,o[v++]=e&255),o}function m(r){return y[r>>18&63]+y[r>>12&63]+y[r>>6&63]+y[r&63]}function _(r,e,t){for(var a,n=[],o=e;o<t;o+=3)a=(r[o]<<16&16711680)+(r[o+1]<<8&65280)+(r[o+2]&255),n.push(m(a));return n.join("")}function j(r){for(var e,t=r.length,a=t%3,n=[],o=16383,v=0,d=t-a;v<d;v+=o)n.push(_(r,v,v+o>d?d:v+o));return a===1?(e=r[t-1],n.push(y[e>>2]+y[e<<4&63]+"==")):a===2&&(e=(r[t-2]<<8)+r[t-1],n.push(y[e>>10]+y[e>>4&63]+y[e<<2&63]+"=")),n.join("")}const O=A({__proto__:null,byteLength:F,default:l,fromByteArray:g,toByteArray:p},[l]);export{O as e};
