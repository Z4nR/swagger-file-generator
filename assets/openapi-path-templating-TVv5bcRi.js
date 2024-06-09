import{i as o,u as p,A as h,P as u}from"./apg-lite-C7hTpHjv.js";function c(){this.grammarObject="grammarObject",this.rules=[],this.rules[0]={name:"path-template",lower:"path-template",index:0,isBkr:!1},this.rules[1]={name:"path",lower:"path",index:1,isBkr:!1},this.rules[2]={name:"path-segment",lower:"path-segment",index:2,isBkr:!1},this.rules[3]={name:"query",lower:"query",index:3,isBkr:!1},this.rules[4]={name:"query-literal",lower:"query-literal",index:4,isBkr:!1},this.rules[5]={name:"query-marker",lower:"query-marker",index:5,isBkr:!1},this.rules[6]={name:"fragment",lower:"fragment",index:6,isBkr:!1},this.rules[7]={name:"fragment-literal",lower:"fragment-literal",index:7,isBkr:!1},this.rules[8]={name:"fragment-marker",lower:"fragment-marker",index:8,isBkr:!1},this.rules[9]={name:"slash",lower:"slash",index:9,isBkr:!1},this.rules[10]={name:"path-literal",lower:"path-literal",index:10,isBkr:!1},this.rules[11]={name:"template-expression",lower:"template-expression",index:11,isBkr:!1},this.rules[12]={name:"template-expression-param-name",lower:"template-expression-param-name",index:12,isBkr:!1},this.rules[13]={name:"unreserved",lower:"unreserved",index:13,isBkr:!1},this.rules[14]={name:"pct-encoded",lower:"pct-encoded",index:14,isBkr:!1},this.rules[15]={name:"sub-delims",lower:"sub-delims",index:15,isBkr:!1},this.rules[16]={name:"sub-delims-no-slash",lower:"sub-delims-no-slash",index:16,isBkr:!1},this.rules[17]={name:"ALPHA",lower:"alpha",index:17,isBkr:!1},this.rules[18]={name:"DIGIT",lower:"digit",index:18,isBkr:!1},this.rules[19]={name:"HEXDIG",lower:"hexdig",index:19,isBkr:!1},this.udts=[],this.rules[0].opcodes=[],this.rules[0].opcodes[0]={type:2,children:[1,2,6]},this.rules[0].opcodes[1]={type:4,index:1},this.rules[0].opcodes[2]={type:3,min:0,max:1},this.rules[0].opcodes[3]={type:2,children:[4,5]},this.rules[0].opcodes[4]={type:4,index:5},this.rules[0].opcodes[5]={type:4,index:3},this.rules[0].opcodes[6]={type:3,min:0,max:1},this.rules[0].opcodes[7]={type:2,children:[8,9]},this.rules[0].opcodes[8]={type:4,index:8},this.rules[0].opcodes[9]={type:4,index:6},this.rules[1].opcodes=[],this.rules[1].opcodes[0]={type:2,children:[1,2,6]},this.rules[1].opcodes[1]={type:4,index:9},this.rules[1].opcodes[2]={type:3,min:0,max:1/0},this.rules[1].opcodes[3]={type:2,children:[4,5]},this.rules[1].opcodes[4]={type:4,index:2},this.rules[1].opcodes[5]={type:4,index:9},this.rules[1].opcodes[6]={type:3,min:0,max:1},this.rules[1].opcodes[7]={type:4,index:2},this.rules[2].opcodes=[],this.rules[2].opcodes[0]={type:3,min:1,max:1/0},this.rules[2].opcodes[1]={type:1,children:[2,3]},this.rules[2].opcodes[2]={type:4,index:10},this.rules[2].opcodes[3]={type:4,index:11},this.rules[3].opcodes=[],this.rules[3].opcodes[0]={type:3,min:0,max:1/0},this.rules[3].opcodes[1]={type:4,index:4},this.rules[4].opcodes=[],this.rules[4].opcodes[0]={type:3,min:1,max:1/0},this.rules[4].opcodes[1]={type:1,children:[2,3,4,5,6,7,8,9,10]},this.rules[4].opcodes[2]={type:4,index:13},this.rules[4].opcodes[3]={type:4,index:14},this.rules[4].opcodes[4]={type:4,index:15},this.rules[4].opcodes[5]={type:7,string:[58]},this.rules[4].opcodes[6]={type:7,string:[64]},this.rules[4].opcodes[7]={type:7,string:[47]},this.rules[4].opcodes[8]={type:7,string:[63]},this.rules[4].opcodes[9]={type:7,string:[38]},this.rules[4].opcodes[10]={type:7,string:[61]},this.rules[5].opcodes=[],this.rules[5].opcodes[0]={type:7,string:[63]},this.rules[6].opcodes=[],this.rules[6].opcodes[0]={type:3,min:0,max:1/0},this.rules[6].opcodes[1]={type:4,index:7},this.rules[7].opcodes=[],this.rules[7].opcodes[0]={type:3,min:1,max:1/0},this.rules[7].opcodes[1]={type:1,children:[2,3,4,5,6,7,8]},this.rules[7].opcodes[2]={type:4,index:13},this.rules[7].opcodes[3]={type:4,index:14},this.rules[7].opcodes[4]={type:4,index:15},this.rules[7].opcodes[5]={type:7,string:[58]},this.rules[7].opcodes[6]={type:7,string:[64]},this.rules[7].opcodes[7]={type:7,string:[47]},this.rules[7].opcodes[8]={type:7,string:[63]},this.rules[8].opcodes=[],this.rules[8].opcodes[0]={type:7,string:[35]},this.rules[9].opcodes=[],this.rules[9].opcodes[0]={type:7,string:[47]},this.rules[10].opcodes=[],this.rules[10].opcodes[0]={type:3,min:1,max:1/0},this.rules[10].opcodes[1]={type:1,children:[2,3,4,5,6]},this.rules[10].opcodes[2]={type:4,index:13},this.rules[10].opcodes[3]={type:4,index:14},this.rules[10].opcodes[4]={type:4,index:16},this.rules[10].opcodes[5]={type:7,string:[58]},this.rules[10].opcodes[6]={type:7,string:[64]},this.rules[11].opcodes=[],this.rules[11].opcodes[0]={type:2,children:[1,2,3]},this.rules[11].opcodes[1]={type:7,string:[123]},this.rules[11].opcodes[2]={type:4,index:12},this.rules[11].opcodes[3]={type:7,string:[125]},this.rules[12].opcodes=[],this.rules[12].opcodes[0]={type:3,min:1,max:1/0},this.rules[12].opcodes[1]={type:1,children:[2,3,4,5,6]},this.rules[12].opcodes[2]={type:4,index:13},this.rules[12].opcodes[3]={type:4,index:14},this.rules[12].opcodes[4]={type:4,index:16},this.rules[12].opcodes[5]={type:7,string:[58]},this.rules[12].opcodes[6]={type:7,string:[64]},this.rules[13].opcodes=[],this.rules[13].opcodes[0]={type:1,children:[1,2,3,4,5,6]},this.rules[13].opcodes[1]={type:4,index:17},this.rules[13].opcodes[2]={type:4,index:18},this.rules[13].opcodes[3]={type:7,string:[45]},this.rules[13].opcodes[4]={type:7,string:[46]},this.rules[13].opcodes[5]={type:7,string:[95]},this.rules[13].opcodes[6]={type:7,string:[126]},this.rules[14].opcodes=[],this.rules[14].opcodes[0]={type:2,children:[1,2,3]},this.rules[14].opcodes[1]={type:7,string:[37]},this.rules[14].opcodes[2]={type:4,index:19},this.rules[14].opcodes[3]={type:4,index:19},this.rules[15].opcodes=[],this.rules[15].opcodes[0]={type:1,children:[1,2,3,4,5,6,7,8,9,10,11]},this.rules[15].opcodes[1]={type:7,string:[33]},this.rules[15].opcodes[2]={type:7,string:[36]},this.rules[15].opcodes[3]={type:7,string:[38]},this.rules[15].opcodes[4]={type:7,string:[39]},this.rules[15].opcodes[5]={type:7,string:[40]},this.rules[15].opcodes[6]={type:7,string:[41]},this.rules[15].opcodes[7]={type:7,string:[42]},this.rules[15].opcodes[8]={type:7,string:[43]},this.rules[15].opcodes[9]={type:7,string:[44]},this.rules[15].opcodes[10]={type:7,string:[59]},this.rules[15].opcodes[11]={type:7,string:[61]},this.rules[16].opcodes=[],this.rules[16].opcodes[0]={type:1,children:[1,2,3,4,5,6,7,8,9,10]},this.rules[16].opcodes[1]={type:7,string:[33]},this.rules[16].opcodes[2]={type:7,string:[36]},this.rules[16].opcodes[3]={type:7,string:[38]},this.rules[16].opcodes[4]={type:7,string:[39]},this.rules[16].opcodes[5]={type:7,string:[40]},this.rules[16].opcodes[6]={type:7,string:[41]},this.rules[16].opcodes[7]={type:7,string:[42]},this.rules[16].opcodes[8]={type:7,string:[43]},this.rules[16].opcodes[9]={type:7,string:[44]},this.rules[16].opcodes[10]={type:7,string:[59]},this.rules[17].opcodes=[],this.rules[17].opcodes[0]={type:1,children:[1,2]},this.rules[17].opcodes[1]={type:5,min:65,max:90},this.rules[17].opcodes[2]={type:5,min:97,max:122},this.rules[18].opcodes=[],this.rules[18].opcodes[0]={type:5,min:48,max:57},this.rules[19].opcodes=[],this.rules[19].opcodes[0]={type:1,children:[1,2,3,4,5,6,7]},this.rules[19].opcodes[1]={type:4,index:18},this.rules[19].opcodes[2]={type:7,string:[97]},this.rules[19].opcodes[3]={type:7,string:[98]},this.rules[19].opcodes[4]={type:7,string:[99]},this.rules[19].opcodes[5]={type:7,string:[100]},this.rules[19].opcodes[6]={type:7,string:[101]},this.rules[19].opcodes[7]={type:7,string:[102]},this.toString=function(){let e="";return e+=`; OpenAPI Path Templating ABNF syntax
`,e+=`path-template                  = path [ query-marker query ] [ fragment-marker fragment ]
`,e+=`path                           = slash *( path-segment slash ) [ path-segment ]
`,e+=`path-segment                   = 1*( path-literal / template-expression )
`,e+=`query                          = *( query-literal )
`,e+=`query-literal                  = 1*( unreserved / pct-encoded / sub-delims / ":" / "@" / "/" / "?" / "&" / "=" )
`,e+=`query-marker                   = "?"
`,e+=`fragment                       = *( fragment-literal )
`,e+=`fragment-literal               = 1*( unreserved / pct-encoded / sub-delims / ":" / "@" / "/" / "?" )
`,e+=`fragment-marker                = "#"
`,e+=`slash                          = "/"
`,e+=`path-literal                   = 1*( unreserved / pct-encoded / sub-delims-no-slash / ":" / "@" )
`,e+=`template-expression            = "{" template-expression-param-name "}"
`,e+=`template-expression-param-name = 1*( unreserved / pct-encoded / sub-delims-no-slash / ":" / "@" )
`,e+=`
`,e+=`; Characters definitions (from RFC 3986)
`,e+=`unreserved          = ALPHA / DIGIT / "-" / "." / "_" / "~"
`,e+=`pct-encoded         = "%" HEXDIG HEXDIG
`,e+=`sub-delims          = "!" / "$" / "&" / "'" / "(" / ")"
`,e+=`                    / "*" / "+" / "," / ";" / "="
`,e+=`sub-delims-no-slash = "!" / "$" / "&" / "'" / "(" / ")"
`,e+=`                    / "*" / "+" / "," / ";"
`,e+=`ALPHA               = %x41-5A / %x61-7A   ; A-Z / a-z
`,e+=`DIGIT               = %x30-39            ; 0-9
`,e+=`HEXDIG              = DIGIT / "A" / "B" / "C" / "D" / "E" / "F"
`,e}}const y=(s,e,t,i,r)=>(s===o.SEM_PRE&&r.push(["slash",p.charsToString(e,t,i)]),o.SEM_OK),m=(s,e,t,i,r)=>{if(s===o.SEM_PRE){if(Array.isArray(r)===!1)throw new Error("parser's user data must be an array");r.push(["path-template",p.charsToString(e,t,i)])}return o.SEM_OK},g=(s,e,t,i,r)=>(s===o.SEM_PRE&&r.push(["path",p.charsToString(e,t,i)]),o.SEM_OK),x=(s,e,t,i,r)=>(s===o.SEM_PRE&&r.push(["path-literal",p.charsToString(e,t,i)]),o.SEM_OK),f=(s,e,t,i,r)=>(s===o.SEM_PRE&&r.push(["query",p.charsToString(e,t,i)]),o.SEM_OK),k=(s,e,t,i,r)=>(s===o.SEM_PRE&&r.push(["query-marker",p.charsToString(e,t,i)]),o.SEM_OK),E=(s,e,t,i,r)=>(s===o.SEM_PRE&&r.push(["fragment",p.charsToString(e,t,i)]),o.SEM_OK),S=(s,e,t,i,r)=>(s===o.SEM_PRE&&r.push(["fragment-marker",p.charsToString(e,t,i)]),o.SEM_OK),w=(s,e,t,i,r)=>(s===o.SEM_PRE&&r.push(["template-expression",p.charsToString(e,t,i)]),o.SEM_OK),b=(s,e,t,i,r)=>(s===o.SEM_PRE&&r.push(["template-expression-param-name",p.charsToString(e,t,i)]),o.SEM_OK),I=new c,B=s=>{const e=new u;return e.ast=new h,e.ast.callbacks["path-template"]=m,e.ast.callbacks.path=g,e.ast.callbacks.query=f,e.ast.callbacks["query-marker"]=k,e.ast.callbacks.fragment=E,e.ast.callbacks["fragment-marker"]=S,e.ast.callbacks.slash=y,e.ast.callbacks["path-literal"]=x,e.ast.callbacks["template-expression"]=w,e.ast.callbacks["template-expression-param-name"]=b,{result:e.parse(I,"path-template",s),ast:e.ast}},M=s=>{try{return typeof s=="string"&&decodeURIComponent(s)!==s}catch{return!1}},P=s=>M(s)?s:encodeURIComponent(s),_=["slash","path-literal","query-marker","query-literal","template-expression-param-name"],A=(s,e={},t={})=>{const r={...{encoder:P},...t},a=B(s);if(!a.result.success)return s;const d=[];return a.ast.translate(d),d.filter(([l])=>_.includes(l)).map(([l,n])=>l==="template-expression-param-name"?Object.hasOwn(e,n)?r.encoder(e[n]):`{${n}}`:n).join("")};export{A as r};
