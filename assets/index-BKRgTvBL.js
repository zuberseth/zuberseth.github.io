var st=Object.defineProperty;var Re=a=>{throw TypeError(a)};var it=(a,e,n)=>e in a?st(a,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):a[e]=n;var v=(a,e,n)=>it(a,typeof e!="symbol"?e+"":e,n),rt=(a,e,n)=>e.has(a)||Re("Cannot "+n);var Se=(a,e,n)=>e.has(a)?Re("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(a):e.set(a,n);var V=(a,e,n)=>(rt(a,e,"access private method"),n);import{initializeApp as at}from"https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";import{getFirestore as ot,query as Le,collection as X,onSnapshot as ze,getDocs as qe,deleteDoc as Ne,doc as ie,setDoc as He}from"https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))t(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&t(r)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function t(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();class lt{constructor(){this.routes={},this.currentRoute=null,window.addEventListener("hashchange",()=>this.handleRoute()),window.addEventListener("load",()=>this.handleRoute())}on(e,n){return this.routes[e]=n,this}navigate(e){window.location.hash=e}handleRoute(){const e=window.location.hash.slice(1)||"/",[n,...t]=e.split("/").filter(Boolean),s="/"+(n||"");this.updateNavLinks(s);let i=this.routes[s],r=t;if(!i){for(const[o,l]of Object.entries(this.routes))if(o.includes(":")){const d=o.split("/").filter(Boolean),c=[n,...t];if(d.length===c.length){let p=!0;r={};for(let u=0;u<d.length;u++)if(d[u].startsWith(":"))r[d[u].slice(1)]=c[u];else if(d[u]!==c[u]){p=!1;break}if(p){i=l;break}}}}i?(this.currentRoute=s,Promise.resolve(i(r)).catch(o=>{console.error("Route handler error:",o)})):this.show404()}updateNavLinks(e){document.querySelectorAll(".nav-link").forEach(n=>{const t=n.getAttribute("href").slice(1);t===e||e.startsWith(t)&&t!=="/"?n.classList.add("active"):n.classList.remove("active")})}show404(){const e=document.getElementById("main-content");e.innerHTML=`
            <div class="container">
                <div class="empty-state fade-in">
                    <h2 class="empty-state-title">Page Not Found</h2>
                    <p class="empty-state-text">The page you're looking for doesn't exist.</p>
                    <br>
                    <a href="#/" class="btn btn-primary">Go Home</a>
                </div>
            </div>
        `}}function we(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}let P=we();function Oe(a){P=a}const je=/[&<>"']/,ct=new RegExp(je.source,"g"),We=/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,dt=new RegExp(We.source,"g"),ut={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},Ae=a=>ut[a];function x(a,e){if(e){if(je.test(a))return a.replace(ct,Ae)}else if(We.test(a))return a.replace(dt,Ae);return a}const pt=/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig;function ht(a){return a.replace(pt,(e,n)=>(n=n.toLowerCase(),n==="colon"?":":n.charAt(0)==="#"?n.charAt(1)==="x"?String.fromCharCode(parseInt(n.substring(2),16)):String.fromCharCode(+n.substring(1)):""))}const gt=/(^|[^\[])\^/g;function b(a,e){let n=typeof a=="string"?a:a.source;e=e||"";const t={replace:(s,i)=>{let r=typeof i=="string"?i:i.source;return r=r.replace(gt,"$1"),n=n.replace(s,r),t},getRegex:()=>new RegExp(n,e)};return t}function _e(a){try{a=encodeURI(a).replace(/%25/g,"%")}catch{return null}return a}const H={exec:()=>null};function Be(a,e){const n=a.replace(/\|/g,(i,r,o)=>{let l=!1,d=r;for(;--d>=0&&o[d]==="\\";)l=!l;return l?"|":" |"}),t=n.split(/ \|/);let s=0;if(t[0].trim()||t.shift(),t.length>0&&!t[t.length-1].trim()&&t.pop(),e)if(t.length>e)t.splice(e);else for(;t.length<e;)t.push("");for(;s<t.length;s++)t[s]=t[s].trim().replace(/\\\|/g,"|");return t}function K(a,e,n){const t=a.length;if(t===0)return"";let s=0;for(;s<t&&a.charAt(t-s-1)===e;)s++;return a.slice(0,t-s)}function ft(a,e){if(a.indexOf(e[1])===-1)return-1;let n=0;for(let t=0;t<a.length;t++)if(a[t]==="\\")t++;else if(a[t]===e[0])n++;else if(a[t]===e[1]&&(n--,n<0))return t;return-1}function Ce(a,e,n,t){const s=e.href,i=e.title?x(e.title):null,r=a[1].replace(/\\([\[\]])/g,"$1");if(a[0].charAt(0)!=="!"){t.state.inLink=!0;const o={type:"link",raw:n,href:s,title:i,text:r,tokens:t.inlineTokens(r)};return t.state.inLink=!1,o}return{type:"image",raw:n,href:s,title:i,text:x(r)}}function mt(a,e){const n=a.match(/^(\s+)(?:```)/);if(n===null)return e;const t=n[1];return e.split(`
`).map(s=>{const i=s.match(/^\s+/);if(i===null)return s;const[r]=i;return r.length>=t.length?s.slice(t.length):s}).join(`
`)}class J{constructor(e){v(this,"options");v(this,"rules");v(this,"lexer");this.options=e||P}space(e){const n=this.rules.block.newline.exec(e);if(n&&n[0].length>0)return{type:"space",raw:n[0]}}code(e){const n=this.rules.block.code.exec(e);if(n){const t=n[0].replace(/^ {1,4}/gm,"");return{type:"code",raw:n[0],codeBlockStyle:"indented",text:this.options.pedantic?t:K(t,`
`)}}}fences(e){const n=this.rules.block.fences.exec(e);if(n){const t=n[0],s=mt(t,n[3]||"");return{type:"code",raw:t,lang:n[2]?n[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):n[2],text:s}}}heading(e){const n=this.rules.block.heading.exec(e);if(n){let t=n[2].trim();if(/#$/.test(t)){const s=K(t,"#");(this.options.pedantic||!s||/ $/.test(s))&&(t=s.trim())}return{type:"heading",raw:n[0],depth:n[1].length,text:t,tokens:this.lexer.inline(t)}}}hr(e){const n=this.rules.block.hr.exec(e);if(n)return{type:"hr",raw:n[0]}}blockquote(e){const n=this.rules.block.blockquote.exec(e);if(n){let t=n[0].replace(/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,`
    $1`);t=K(t.replace(/^ *>[ \t]?/gm,""),`
`);const s=this.lexer.state.top;this.lexer.state.top=!0;const i=this.lexer.blockTokens(t);return this.lexer.state.top=s,{type:"blockquote",raw:n[0],tokens:i,text:t}}}list(e){let n=this.rules.block.list.exec(e);if(n){let t=n[1].trim();const s=t.length>1,i={type:"list",raw:"",ordered:s,start:s?+t.slice(0,-1):"",loose:!1,items:[]};t=s?`\\d{1,9}\\${t.slice(-1)}`:`\\${t}`,this.options.pedantic&&(t=s?t:"[*+-]");const r=new RegExp(`^( {0,3}${t})((?:[	 ][^\\n]*)?(?:\\n|$))`);let o="",l="",d=!1;for(;e;){let c=!1;if(!(n=r.exec(e))||this.rules.block.hr.test(e))break;o=n[0],e=e.substring(o.length);let p=n[2].split(`
`,1)[0].replace(/^\t+/,U=>" ".repeat(3*U.length)),u=e.split(`
`,1)[0],f=0;this.options.pedantic?(f=2,l=p.trimStart()):(f=n[2].search(/[^ ]/),f=f>4?1:f,l=p.slice(f),f+=n[1].length);let $=!1;if(!p&&/^ *$/.test(u)&&(o+=u+`
`,e=e.substring(u.length+1),c=!0),!c){const U=new RegExp(`^ {0,${Math.min(3,f-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),q=new RegExp(`^ {0,${Math.min(3,f-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),Q=new RegExp(`^ {0,${Math.min(3,f-1)}}(?:\`\`\`|~~~)`),G=new RegExp(`^ {0,${Math.min(3,f-1)}}#`);for(;e;){const B=e.split(`
`,1)[0];if(u=B,this.options.pedantic&&(u=u.replace(/^ {1,4}(?=( {4})*[^ ])/g,"  ")),Q.test(u)||G.test(u)||U.test(u)||q.test(e))break;if(u.search(/[^ ]/)>=f||!u.trim())l+=`
`+u.slice(f);else{if($||p.search(/[^ ]/)>=4||Q.test(p)||G.test(p)||q.test(p))break;l+=`
`+u}!$&&!u.trim()&&($=!0),o+=B+`
`,e=e.substring(B.length+1),p=u.slice(f)}}i.loose||(d?i.loose=!0:/\n *\n *$/.test(o)&&(d=!0));let k=null,z;this.options.gfm&&(k=/^\[[ xX]\] /.exec(l),k&&(z=k[0]!=="[ ] ",l=l.replace(/^\[[ xX]\] +/,""))),i.items.push({type:"list_item",raw:o,task:!!k,checked:z,loose:!1,text:l,tokens:[]}),i.raw+=o}i.items[i.items.length-1].raw=o.trimEnd(),i.items[i.items.length-1].text=l.trimEnd(),i.raw=i.raw.trimEnd();for(let c=0;c<i.items.length;c++)if(this.lexer.state.top=!1,i.items[c].tokens=this.lexer.blockTokens(i.items[c].text,[]),!i.loose){const p=i.items[c].tokens.filter(f=>f.type==="space"),u=p.length>0&&p.some(f=>/\n.*\n/.test(f.raw));i.loose=u}if(i.loose)for(let c=0;c<i.items.length;c++)i.items[c].loose=!0;return i}}html(e){const n=this.rules.block.html.exec(e);if(n)return{type:"html",block:!0,raw:n[0],pre:n[1]==="pre"||n[1]==="script"||n[1]==="style",text:n[0]}}def(e){const n=this.rules.block.def.exec(e);if(n){const t=n[1].toLowerCase().replace(/\s+/g," "),s=n[2]?n[2].replace(/^<(.*)>$/,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",i=n[3]?n[3].substring(1,n[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):n[3];return{type:"def",tag:t,raw:n[0],href:s,title:i}}}table(e){const n=this.rules.block.table.exec(e);if(!n||!/[:|]/.test(n[2]))return;const t=Be(n[1]),s=n[2].replace(/^\||\| *$/g,"").split("|"),i=n[3]&&n[3].trim()?n[3].replace(/\n[ \t]*$/,"").split(`
`):[],r={type:"table",raw:n[0],header:[],align:[],rows:[]};if(t.length===s.length){for(const o of s)/^ *-+: *$/.test(o)?r.align.push("right"):/^ *:-+: *$/.test(o)?r.align.push("center"):/^ *:-+ *$/.test(o)?r.align.push("left"):r.align.push(null);for(const o of t)r.header.push({text:o,tokens:this.lexer.inline(o)});for(const o of i)r.rows.push(Be(o,r.header.length).map(l=>({text:l,tokens:this.lexer.inline(l)})));return r}}lheading(e){const n=this.rules.block.lheading.exec(e);if(n)return{type:"heading",raw:n[0],depth:n[2].charAt(0)==="="?1:2,text:n[1],tokens:this.lexer.inline(n[1])}}paragraph(e){const n=this.rules.block.paragraph.exec(e);if(n){const t=n[1].charAt(n[1].length-1)===`
`?n[1].slice(0,-1):n[1];return{type:"paragraph",raw:n[0],text:t,tokens:this.lexer.inline(t)}}}text(e){const n=this.rules.block.text.exec(e);if(n)return{type:"text",raw:n[0],text:n[0],tokens:this.lexer.inline(n[0])}}escape(e){const n=this.rules.inline.escape.exec(e);if(n)return{type:"escape",raw:n[0],text:x(n[1])}}tag(e){const n=this.rules.inline.tag.exec(e);if(n)return!this.lexer.state.inLink&&/^<a /i.test(n[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&/^<\/a>/i.test(n[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&/^<(pre|code|kbd|script)(\s|>)/i.test(n[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(n[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:n[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:n[0]}}link(e){const n=this.rules.inline.link.exec(e);if(n){const t=n[2].trim();if(!this.options.pedantic&&/^</.test(t)){if(!/>$/.test(t))return;const r=K(t.slice(0,-1),"\\");if((t.length-r.length)%2===0)return}else{const r=ft(n[2],"()");if(r>-1){const l=(n[0].indexOf("!")===0?5:4)+n[1].length+r;n[2]=n[2].substring(0,r),n[0]=n[0].substring(0,l).trim(),n[3]=""}}let s=n[2],i="";if(this.options.pedantic){const r=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(s);r&&(s=r[1],i=r[3])}else i=n[3]?n[3].slice(1,-1):"";return s=s.trim(),/^</.test(s)&&(this.options.pedantic&&!/>$/.test(t)?s=s.slice(1):s=s.slice(1,-1)),Ce(n,{href:s&&s.replace(this.rules.inline.anyPunctuation,"$1"),title:i&&i.replace(this.rules.inline.anyPunctuation,"$1")},n[0],this.lexer)}}reflink(e,n){let t;if((t=this.rules.inline.reflink.exec(e))||(t=this.rules.inline.nolink.exec(e))){const s=(t[2]||t[1]).replace(/\s+/g," "),i=n[s.toLowerCase()];if(!i){const r=t[0].charAt(0);return{type:"text",raw:r,text:r}}return Ce(t,i,t[0],this.lexer)}}emStrong(e,n,t=""){let s=this.rules.inline.emStrongLDelim.exec(e);if(!s||s[3]&&t.match(/[\p{L}\p{N}]/u))return;if(!(s[1]||s[2]||"")||!t||this.rules.inline.punctuation.exec(t)){const r=[...s[0]].length-1;let o,l,d=r,c=0;const p=s[0][0]==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(p.lastIndex=0,n=n.slice(-1*e.length+r);(s=p.exec(n))!=null;){if(o=s[1]||s[2]||s[3]||s[4]||s[5]||s[6],!o)continue;if(l=[...o].length,s[3]||s[4]){d+=l;continue}else if((s[5]||s[6])&&r%3&&!((r+l)%3)){c+=l;continue}if(d-=l,d>0)continue;l=Math.min(l,l+d+c);const u=[...s[0]][0].length,f=e.slice(0,r+s.index+u+l);if(Math.min(r,l)%2){const k=f.slice(1,-1);return{type:"em",raw:f,text:k,tokens:this.lexer.inlineTokens(k)}}const $=f.slice(2,-2);return{type:"strong",raw:f,text:$,tokens:this.lexer.inlineTokens($)}}}}codespan(e){const n=this.rules.inline.code.exec(e);if(n){let t=n[2].replace(/\n/g," ");const s=/[^ ]/.test(t),i=/^ /.test(t)&&/ $/.test(t);return s&&i&&(t=t.substring(1,t.length-1)),t=x(t,!0),{type:"codespan",raw:n[0],text:t}}}br(e){const n=this.rules.inline.br.exec(e);if(n)return{type:"br",raw:n[0]}}del(e){const n=this.rules.inline.del.exec(e);if(n)return{type:"del",raw:n[0],text:n[2],tokens:this.lexer.inlineTokens(n[2])}}autolink(e){const n=this.rules.inline.autolink.exec(e);if(n){let t,s;return n[2]==="@"?(t=x(n[1]),s="mailto:"+t):(t=x(n[1]),s=t),{type:"link",raw:n[0],text:t,href:s,tokens:[{type:"text",raw:t,text:t}]}}}url(e){var t;let n;if(n=this.rules.inline.url.exec(e)){let s,i;if(n[2]==="@")s=x(n[0]),i="mailto:"+s;else{let r;do r=n[0],n[0]=((t=this.rules.inline._backpedal.exec(n[0]))==null?void 0:t[0])??"";while(r!==n[0]);s=x(n[0]),n[1]==="www."?i="http://"+n[0]:i=n[0]}return{type:"link",raw:n[0],text:s,href:i,tokens:[{type:"text",raw:s,text:s}]}}}inlineText(e){const n=this.rules.inline.text.exec(e);if(n){let t;return this.lexer.state.inRawBlock?t=n[0]:t=x(n[0]),{type:"text",raw:n[0],text:t}}}}const wt=/^(?: *(?:\n|$))+/,bt=/^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,vt=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,F=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,yt=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,Fe=/(?:[*+-]|\d{1,9}[.)])/,Ze=b(/^(?!bull |blockCode|fences|blockquote|heading|html)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html))+?)\n {0,3}(=+|-+) *(?:\n+|$)/).replace(/bull/g,Fe).replace(/blockCode/g,/ {4}/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).getRegex(),be=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,kt=/^[^\n]+/,ve=/(?!\s*\])(?:\\.|[^\[\]\\])+/,xt=b(/^ {0,3}\[(label)\]: *(?:\n *)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/).replace("label",ve).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),$t=b(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,Fe).getRegex(),re="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",ye=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,Et=b("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))","i").replace("comment",ye).replace("tag",re).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),Qe=b(be).replace("hr",F).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",re).getRegex(),Tt=b(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",Qe).getRegex(),ke={blockquote:Tt,code:bt,def:xt,fences:vt,heading:yt,hr:F,html:Et,lheading:Ze,list:$t,newline:wt,paragraph:Qe,table:H,text:kt},Me=b("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",F).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code"," {4}[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",re).getRegex(),It={...ke,table:Me,paragraph:b(be).replace("hr",F).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",Me).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",re).getRegex()},Rt={...ke,html:b(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",ye).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:H,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:b(be).replace("hr",F).replace("heading",` *#{1,6} *[^
]`).replace("lheading",Ze).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},Ge=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,St=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,Ve=/^( {2,}|\\)\n(?!\s*$)/,Lt=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,Z="\\p{P}\\p{S}",zt=b(/^((?![*_])[\spunctuation])/,"u").replace(/punctuation/g,Z).getRegex(),At=/\[[^[\]]*?\]\([^\(\)]*?\)|`[^`]*?`|<[^<>]*?>/g,_t=b(/^(?:\*+(?:((?!\*)[punct])|[^\s*]))|^_+(?:((?!_)[punct])|([^\s_]))/,"u").replace(/punct/g,Z).getRegex(),Bt=b("^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)[punct](\\*+)(?=[\\s]|$)|[^punct\\s](\\*+)(?!\\*)(?=[punct\\s]|$)|(?!\\*)[punct\\s](\\*+)(?=[^punct\\s])|[\\s](\\*+)(?!\\*)(?=[punct])|(?!\\*)[punct](\\*+)(?!\\*)(?=[punct])|[^punct\\s](\\*+)(?=[^punct\\s])","gu").replace(/punct/g,Z).getRegex(),Ct=b("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)[punct](_+)(?=[\\s]|$)|[^punct\\s](_+)(?!_)(?=[punct\\s]|$)|(?!_)[punct\\s](_+)(?=[^punct\\s])|[\\s](_+)(?!_)(?=[punct])|(?!_)[punct](_+)(?!_)(?=[punct])","gu").replace(/punct/g,Z).getRegex(),Mt=b(/\\([punct])/,"gu").replace(/punct/g,Z).getRegex(),Dt=b(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),Pt=b(ye).replace("(?:-->|$)","-->").getRegex(),Ut=b("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",Pt).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),ee=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,qt=b(/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/).replace("label",ee).replace("href",/<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),Ke=b(/^!?\[(label)\]\[(ref)\]/).replace("label",ee).replace("ref",ve).getRegex(),Ye=b(/^!?\[(ref)\](?:\[\])?/).replace("ref",ve).getRegex(),Nt=b("reflink|nolink(?!\\()","g").replace("reflink",Ke).replace("nolink",Ye).getRegex(),xe={_backpedal:H,anyPunctuation:Mt,autolink:Dt,blockSkip:At,br:Ve,code:St,del:H,emStrongLDelim:_t,emStrongRDelimAst:Bt,emStrongRDelimUnd:Ct,escape:Ge,link:qt,nolink:Ye,punctuation:zt,reflink:Ke,reflinkSearch:Nt,tag:Ut,text:Lt,url:H},Ht={...xe,link:b(/^!?\[(label)\]\((.*?)\)/).replace("label",ee).getRegex(),reflink:b(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",ee).getRegex()},ge={...xe,escape:b(Ge).replace("])","~|])").getRegex(),url:b(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,"i").replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/},Ot={...ge,br:b(Ve).replace("{2,}","*").getRegex(),text:b(ge.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},Y={normal:ke,gfm:It,pedantic:Rt},N={normal:xe,gfm:ge,breaks:Ot,pedantic:Ht};class R{constructor(e){v(this,"tokens");v(this,"options");v(this,"state");v(this,"tokenizer");v(this,"inlineQueue");this.tokens=[],this.tokens.links=Object.create(null),this.options=e||P,this.options.tokenizer=this.options.tokenizer||new J,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};const n={block:Y.normal,inline:N.normal};this.options.pedantic?(n.block=Y.pedantic,n.inline=N.pedantic):this.options.gfm&&(n.block=Y.gfm,this.options.breaks?n.inline=N.breaks:n.inline=N.gfm),this.tokenizer.rules=n}static get rules(){return{block:Y,inline:N}}static lex(e,n){return new R(n).lex(e)}static lexInline(e,n){return new R(n).inlineTokens(e)}lex(e){e=e.replace(/\r\n|\r/g,`
`),this.blockTokens(e,this.tokens);for(let n=0;n<this.inlineQueue.length;n++){const t=this.inlineQueue[n];this.inlineTokens(t.src,t.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(e,n=[]){this.options.pedantic?e=e.replace(/\t/g,"    ").replace(/^ +$/gm,""):e=e.replace(/^( *)(\t+)/gm,(o,l,d)=>l+"    ".repeat(d.length));let t,s,i,r;for(;e;)if(!(this.options.extensions&&this.options.extensions.block&&this.options.extensions.block.some(o=>(t=o.call({lexer:this},e,n))?(e=e.substring(t.raw.length),n.push(t),!0):!1))){if(t=this.tokenizer.space(e)){e=e.substring(t.raw.length),t.raw.length===1&&n.length>0?n[n.length-1].raw+=`
`:n.push(t);continue}if(t=this.tokenizer.code(e)){e=e.substring(t.raw.length),s=n[n.length-1],s&&(s.type==="paragraph"||s.type==="text")?(s.raw+=`
`+t.raw,s.text+=`
`+t.text,this.inlineQueue[this.inlineQueue.length-1].src=s.text):n.push(t);continue}if(t=this.tokenizer.fences(e)){e=e.substring(t.raw.length),n.push(t);continue}if(t=this.tokenizer.heading(e)){e=e.substring(t.raw.length),n.push(t);continue}if(t=this.tokenizer.hr(e)){e=e.substring(t.raw.length),n.push(t);continue}if(t=this.tokenizer.blockquote(e)){e=e.substring(t.raw.length),n.push(t);continue}if(t=this.tokenizer.list(e)){e=e.substring(t.raw.length),n.push(t);continue}if(t=this.tokenizer.html(e)){e=e.substring(t.raw.length),n.push(t);continue}if(t=this.tokenizer.def(e)){e=e.substring(t.raw.length),s=n[n.length-1],s&&(s.type==="paragraph"||s.type==="text")?(s.raw+=`
`+t.raw,s.text+=`
`+t.raw,this.inlineQueue[this.inlineQueue.length-1].src=s.text):this.tokens.links[t.tag]||(this.tokens.links[t.tag]={href:t.href,title:t.title});continue}if(t=this.tokenizer.table(e)){e=e.substring(t.raw.length),n.push(t);continue}if(t=this.tokenizer.lheading(e)){e=e.substring(t.raw.length),n.push(t);continue}if(i=e,this.options.extensions&&this.options.extensions.startBlock){let o=1/0;const l=e.slice(1);let d;this.options.extensions.startBlock.forEach(c=>{d=c.call({lexer:this},l),typeof d=="number"&&d>=0&&(o=Math.min(o,d))}),o<1/0&&o>=0&&(i=e.substring(0,o+1))}if(this.state.top&&(t=this.tokenizer.paragraph(i))){s=n[n.length-1],r&&s.type==="paragraph"?(s.raw+=`
`+t.raw,s.text+=`
`+t.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=s.text):n.push(t),r=i.length!==e.length,e=e.substring(t.raw.length);continue}if(t=this.tokenizer.text(e)){e=e.substring(t.raw.length),s=n[n.length-1],s&&s.type==="text"?(s.raw+=`
`+t.raw,s.text+=`
`+t.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=s.text):n.push(t);continue}if(e){const o="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(o);break}else throw new Error(o)}}return this.state.top=!0,n}inline(e,n=[]){return this.inlineQueue.push({src:e,tokens:n}),n}inlineTokens(e,n=[]){let t,s,i,r=e,o,l,d;if(this.tokens.links){const c=Object.keys(this.tokens.links);if(c.length>0)for(;(o=this.tokenizer.rules.inline.reflinkSearch.exec(r))!=null;)c.includes(o[0].slice(o[0].lastIndexOf("[")+1,-1))&&(r=r.slice(0,o.index)+"["+"a".repeat(o[0].length-2)+"]"+r.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(o=this.tokenizer.rules.inline.blockSkip.exec(r))!=null;)r=r.slice(0,o.index)+"["+"a".repeat(o[0].length-2)+"]"+r.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);for(;(o=this.tokenizer.rules.inline.anyPunctuation.exec(r))!=null;)r=r.slice(0,o.index)+"++"+r.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);for(;e;)if(l||(d=""),l=!1,!(this.options.extensions&&this.options.extensions.inline&&this.options.extensions.inline.some(c=>(t=c.call({lexer:this},e,n))?(e=e.substring(t.raw.length),n.push(t),!0):!1))){if(t=this.tokenizer.escape(e)){e=e.substring(t.raw.length),n.push(t);continue}if(t=this.tokenizer.tag(e)){e=e.substring(t.raw.length),s=n[n.length-1],s&&t.type==="text"&&s.type==="text"?(s.raw+=t.raw,s.text+=t.text):n.push(t);continue}if(t=this.tokenizer.link(e)){e=e.substring(t.raw.length),n.push(t);continue}if(t=this.tokenizer.reflink(e,this.tokens.links)){e=e.substring(t.raw.length),s=n[n.length-1],s&&t.type==="text"&&s.type==="text"?(s.raw+=t.raw,s.text+=t.text):n.push(t);continue}if(t=this.tokenizer.emStrong(e,r,d)){e=e.substring(t.raw.length),n.push(t);continue}if(t=this.tokenizer.codespan(e)){e=e.substring(t.raw.length),n.push(t);continue}if(t=this.tokenizer.br(e)){e=e.substring(t.raw.length),n.push(t);continue}if(t=this.tokenizer.del(e)){e=e.substring(t.raw.length),n.push(t);continue}if(t=this.tokenizer.autolink(e)){e=e.substring(t.raw.length),n.push(t);continue}if(!this.state.inLink&&(t=this.tokenizer.url(e))){e=e.substring(t.raw.length),n.push(t);continue}if(i=e,this.options.extensions&&this.options.extensions.startInline){let c=1/0;const p=e.slice(1);let u;this.options.extensions.startInline.forEach(f=>{u=f.call({lexer:this},p),typeof u=="number"&&u>=0&&(c=Math.min(c,u))}),c<1/0&&c>=0&&(i=e.substring(0,c+1))}if(t=this.tokenizer.inlineText(i)){e=e.substring(t.raw.length),t.raw.slice(-1)!=="_"&&(d=t.raw.slice(-1)),l=!0,s=n[n.length-1],s&&s.type==="text"?(s.raw+=t.raw,s.text+=t.text):n.push(t);continue}if(e){const c="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(c);break}else throw new Error(c)}}return n}}class te{constructor(e){v(this,"options");this.options=e||P}code(e,n,t){var i;const s=(i=(n||"").match(/^\S*/))==null?void 0:i[0];return e=e.replace(/\n$/,"")+`
`,s?'<pre><code class="language-'+x(s)+'">'+(t?e:x(e,!0))+`</code></pre>
`:"<pre><code>"+(t?e:x(e,!0))+`</code></pre>
`}blockquote(e){return`<blockquote>
${e}</blockquote>
`}html(e,n){return e}heading(e,n,t){return`<h${n}>${e}</h${n}>
`}hr(){return`<hr>
`}list(e,n,t){const s=n?"ol":"ul",i=n&&t!==1?' start="'+t+'"':"";return"<"+s+i+`>
`+e+"</"+s+`>
`}listitem(e,n,t){return`<li>${e}</li>
`}checkbox(e){return"<input "+(e?'checked="" ':"")+'disabled="" type="checkbox">'}paragraph(e){return`<p>${e}</p>
`}table(e,n){return n&&(n=`<tbody>${n}</tbody>`),`<table>
<thead>
`+e+`</thead>
`+n+`</table>
`}tablerow(e){return`<tr>
${e}</tr>
`}tablecell(e,n){const t=n.header?"th":"td";return(n.align?`<${t} align="${n.align}">`:`<${t}>`)+e+`</${t}>
`}strong(e){return`<strong>${e}</strong>`}em(e){return`<em>${e}</em>`}codespan(e){return`<code>${e}</code>`}br(){return"<br>"}del(e){return`<del>${e}</del>`}link(e,n,t){const s=_e(e);if(s===null)return t;e=s;let i='<a href="'+e+'"';return n&&(i+=' title="'+n+'"'),i+=">"+t+"</a>",i}image(e,n,t){const s=_e(e);if(s===null)return t;e=s;let i=`<img src="${e}" alt="${t}"`;return n&&(i+=` title="${n}"`),i+=">",i}text(e){return e}}class $e{strong(e){return e}em(e){return e}codespan(e){return e}del(e){return e}html(e){return e}text(e){return e}link(e,n,t){return""+t}image(e,n,t){return""+t}br(){return""}}class S{constructor(e){v(this,"options");v(this,"renderer");v(this,"textRenderer");this.options=e||P,this.options.renderer=this.options.renderer||new te,this.renderer=this.options.renderer,this.renderer.options=this.options,this.textRenderer=new $e}static parse(e,n){return new S(n).parse(e)}static parseInline(e,n){return new S(n).parseInline(e)}parse(e,n=!0){let t="";for(let s=0;s<e.length;s++){const i=e[s];if(this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[i.type]){const r=i,o=this.options.extensions.renderers[r.type].call({parser:this},r);if(o!==!1||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(r.type)){t+=o||"";continue}}switch(i.type){case"space":continue;case"hr":{t+=this.renderer.hr();continue}case"heading":{const r=i;t+=this.renderer.heading(this.parseInline(r.tokens),r.depth,ht(this.parseInline(r.tokens,this.textRenderer)));continue}case"code":{const r=i;t+=this.renderer.code(r.text,r.lang,!!r.escaped);continue}case"table":{const r=i;let o="",l="";for(let c=0;c<r.header.length;c++)l+=this.renderer.tablecell(this.parseInline(r.header[c].tokens),{header:!0,align:r.align[c]});o+=this.renderer.tablerow(l);let d="";for(let c=0;c<r.rows.length;c++){const p=r.rows[c];l="";for(let u=0;u<p.length;u++)l+=this.renderer.tablecell(this.parseInline(p[u].tokens),{header:!1,align:r.align[u]});d+=this.renderer.tablerow(l)}t+=this.renderer.table(o,d);continue}case"blockquote":{const r=i,o=this.parse(r.tokens);t+=this.renderer.blockquote(o);continue}case"list":{const r=i,o=r.ordered,l=r.start,d=r.loose;let c="";for(let p=0;p<r.items.length;p++){const u=r.items[p],f=u.checked,$=u.task;let k="";if(u.task){const z=this.renderer.checkbox(!!f);d?u.tokens.length>0&&u.tokens[0].type==="paragraph"?(u.tokens[0].text=z+" "+u.tokens[0].text,u.tokens[0].tokens&&u.tokens[0].tokens.length>0&&u.tokens[0].tokens[0].type==="text"&&(u.tokens[0].tokens[0].text=z+" "+u.tokens[0].tokens[0].text)):u.tokens.unshift({type:"text",text:z+" "}):k+=z+" "}k+=this.parse(u.tokens,d),c+=this.renderer.listitem(k,$,!!f)}t+=this.renderer.list(c,o,l);continue}case"html":{const r=i;t+=this.renderer.html(r.text,r.block);continue}case"paragraph":{const r=i;t+=this.renderer.paragraph(this.parseInline(r.tokens));continue}case"text":{let r=i,o=r.tokens?this.parseInline(r.tokens):r.text;for(;s+1<e.length&&e[s+1].type==="text";)r=e[++s],o+=`
`+(r.tokens?this.parseInline(r.tokens):r.text);t+=n?this.renderer.paragraph(o):o;continue}default:{const r='Token with "'+i.type+'" type was not found.';if(this.options.silent)return console.error(r),"";throw new Error(r)}}}return t}parseInline(e,n){n=n||this.renderer;let t="";for(let s=0;s<e.length;s++){const i=e[s];if(this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[i.type]){const r=this.options.extensions.renderers[i.type].call({parser:this},i);if(r!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(i.type)){t+=r||"";continue}}switch(i.type){case"escape":{const r=i;t+=n.text(r.text);break}case"html":{const r=i;t+=n.html(r.text);break}case"link":{const r=i;t+=n.link(r.href,r.title,this.parseInline(r.tokens,n));break}case"image":{const r=i;t+=n.image(r.href,r.title,r.text);break}case"strong":{const r=i;t+=n.strong(this.parseInline(r.tokens,n));break}case"em":{const r=i;t+=n.em(this.parseInline(r.tokens,n));break}case"codespan":{const r=i;t+=n.codespan(r.text);break}case"br":{t+=n.br();break}case"del":{const r=i;t+=n.del(this.parseInline(r.tokens,n));break}case"text":{const r=i;t+=n.text(r.text);break}default:{const r='Token with "'+i.type+'" type was not found.';if(this.options.silent)return console.error(r),"";throw new Error(r)}}}return t}}class O{constructor(e){v(this,"options");this.options=e||P}preprocess(e){return e}postprocess(e){return e}processAllTokens(e){return e}}v(O,"passThroughHooks",new Set(["preprocess","postprocess","processAllTokens"]));var D,fe,Xe;class jt{constructor(...e){Se(this,D);v(this,"defaults",we());v(this,"options",this.setOptions);v(this,"parse",V(this,D,fe).call(this,R.lex,S.parse));v(this,"parseInline",V(this,D,fe).call(this,R.lexInline,S.parseInline));v(this,"Parser",S);v(this,"Renderer",te);v(this,"TextRenderer",$e);v(this,"Lexer",R);v(this,"Tokenizer",J);v(this,"Hooks",O);this.use(...e)}walkTokens(e,n){var s,i;let t=[];for(const r of e)switch(t=t.concat(n.call(this,r)),r.type){case"table":{const o=r;for(const l of o.header)t=t.concat(this.walkTokens(l.tokens,n));for(const l of o.rows)for(const d of l)t=t.concat(this.walkTokens(d.tokens,n));break}case"list":{const o=r;t=t.concat(this.walkTokens(o.items,n));break}default:{const o=r;(i=(s=this.defaults.extensions)==null?void 0:s.childTokens)!=null&&i[o.type]?this.defaults.extensions.childTokens[o.type].forEach(l=>{const d=o[l].flat(1/0);t=t.concat(this.walkTokens(d,n))}):o.tokens&&(t=t.concat(this.walkTokens(o.tokens,n)))}}return t}use(...e){const n=this.defaults.extensions||{renderers:{},childTokens:{}};return e.forEach(t=>{const s={...t};if(s.async=this.defaults.async||s.async||!1,t.extensions&&(t.extensions.forEach(i=>{if(!i.name)throw new Error("extension name required");if("renderer"in i){const r=n.renderers[i.name];r?n.renderers[i.name]=function(...o){let l=i.renderer.apply(this,o);return l===!1&&(l=r.apply(this,o)),l}:n.renderers[i.name]=i.renderer}if("tokenizer"in i){if(!i.level||i.level!=="block"&&i.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");const r=n[i.level];r?r.unshift(i.tokenizer):n[i.level]=[i.tokenizer],i.start&&(i.level==="block"?n.startBlock?n.startBlock.push(i.start):n.startBlock=[i.start]:i.level==="inline"&&(n.startInline?n.startInline.push(i.start):n.startInline=[i.start]))}"childTokens"in i&&i.childTokens&&(n.childTokens[i.name]=i.childTokens)}),s.extensions=n),t.renderer){const i=this.defaults.renderer||new te(this.defaults);for(const r in t.renderer){if(!(r in i))throw new Error(`renderer '${r}' does not exist`);if(r==="options")continue;const o=r,l=t.renderer[o],d=i[o];i[o]=(...c)=>{let p=l.apply(i,c);return p===!1&&(p=d.apply(i,c)),p||""}}s.renderer=i}if(t.tokenizer){const i=this.defaults.tokenizer||new J(this.defaults);for(const r in t.tokenizer){if(!(r in i))throw new Error(`tokenizer '${r}' does not exist`);if(["options","rules","lexer"].includes(r))continue;const o=r,l=t.tokenizer[o],d=i[o];i[o]=(...c)=>{let p=l.apply(i,c);return p===!1&&(p=d.apply(i,c)),p}}s.tokenizer=i}if(t.hooks){const i=this.defaults.hooks||new O;for(const r in t.hooks){if(!(r in i))throw new Error(`hook '${r}' does not exist`);if(r==="options")continue;const o=r,l=t.hooks[o],d=i[o];O.passThroughHooks.has(r)?i[o]=c=>{if(this.defaults.async)return Promise.resolve(l.call(i,c)).then(u=>d.call(i,u));const p=l.call(i,c);return d.call(i,p)}:i[o]=(...c)=>{let p=l.apply(i,c);return p===!1&&(p=d.apply(i,c)),p}}s.hooks=i}if(t.walkTokens){const i=this.defaults.walkTokens,r=t.walkTokens;s.walkTokens=function(o){let l=[];return l.push(r.call(this,o)),i&&(l=l.concat(i.call(this,o))),l}}this.defaults={...this.defaults,...s}}),this}setOptions(e){return this.defaults={...this.defaults,...e},this}lexer(e,n){return R.lex(e,n??this.defaults)}parser(e,n){return S.parse(e,n??this.defaults)}}D=new WeakSet,fe=function(e,n){return(t,s)=>{const i={...s},r={...this.defaults,...i};this.defaults.async===!0&&i.async===!1&&(r.silent||console.warn("marked(): The async option was set to true by an extension. The async: false option sent to parse will be ignored."),r.async=!0);const o=V(this,D,Xe).call(this,!!r.silent,!!r.async);if(typeof t>"u"||t===null)return o(new Error("marked(): input parameter is undefined or null"));if(typeof t!="string")return o(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(t)+", string expected"));if(r.hooks&&(r.hooks.options=r),r.async)return Promise.resolve(r.hooks?r.hooks.preprocess(t):t).then(l=>e(l,r)).then(l=>r.hooks?r.hooks.processAllTokens(l):l).then(l=>r.walkTokens?Promise.all(this.walkTokens(l,r.walkTokens)).then(()=>l):l).then(l=>n(l,r)).then(l=>r.hooks?r.hooks.postprocess(l):l).catch(o);try{r.hooks&&(t=r.hooks.preprocess(t));let l=e(t,r);r.hooks&&(l=r.hooks.processAllTokens(l)),r.walkTokens&&this.walkTokens(l,r.walkTokens);let d=n(l,r);return r.hooks&&(d=r.hooks.postprocess(d)),d}catch(l){return o(l)}}},Xe=function(e,n){return t=>{if(t.message+=`
Please report this to https://github.com/markedjs/marked.`,e){const s="<p>An error occurred:</p><pre>"+x(t.message+"",!0)+"</pre>";return n?Promise.resolve(s):s}if(n)return Promise.reject(t);throw t}};const C=new jt;function m(a,e){return C.parse(a,e)}m.options=m.setOptions=function(a){return C.setOptions(a),m.defaults=C.defaults,Oe(m.defaults),m};m.getDefaults=we;m.defaults=P;m.use=function(...a){return C.use(...a),m.defaults=C.defaults,Oe(m.defaults),m};m.walkTokens=function(a,e){return C.walkTokens(a,e)};m.parseInline=C.parseInline;m.Parser=S;m.parser=S.parse;m.Renderer=te;m.TextRenderer=$e;m.Lexer=R;m.lexer=R.lex;m.Tokenizer=J;m.Hooks=O;m.parse=m;m.options;m.setOptions;m.use;m.walkTokens;m.parseInline;S.parse;R.lex;m.setOptions({breaks:!0,gfm:!0});function Je(a){const e=/^---\n([\s\S]*?)\n---\n/,n=a.match(e);if(!n)return{metadata:{},content:a};const t=n[1],s=a.slice(n[0].length),i={};return t.split(`
`).forEach(r=>{const o=r.indexOf(":");if(o>0){const l=r.slice(0,o).trim(),d=r.slice(o+1).trim().replace(/^["']|["']$/g,"");i[l]=d}}),{metadata:i,content:s}}function Wt(a){return m.parse(a)}function Ft(a,e=150){const{content:n}=Je(a),t=n.replace(/#{1,6}\s+/g,"").replace(/\*\*|__/g,"").replace(/\*|_/g,"").replace(/\[([^\]]+)\]\([^)]+\)/g,"$1").replace(/`([^`]+)`/g,"$1").replace(/\n+/g," ").trim();return t.length<=e?t:t.slice(0,e).trim()+"..."}function M(a){return new Date(a).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"})}const A={omdb:{key:localStorage.getItem("omdb_api_key")||"5a9c220",baseUrl:"https://www.omdbapi.com/"},openLibrary:{baseUrl:"https://openlibrary.org"},deezer:{baseUrl:"https://api.deezer.com"}};function Zt(a){a.omdb&&(localStorage.setItem("omdb_api_key",a.omdb),A.omdb.key=a.omdb)}function Qt(){return{omdb:A.omdb.key}}function Gt(a){switch(a){case"film":return!!A.omdb.key;case"book":return!0;case"song":case"album":return!0;case"restaurant":return!0;default:return!1}}async function Vt(a){if(!A.omdb.key)throw new Error("OMDb API key not configured. Please add it in the admin settings.");const e=`${A.omdb.baseUrl}?apikey=${A.omdb.key}&s=${encodeURIComponent(a)}&type=movie`,t=await(await fetch(e)).json();if(t.Error){if(t.Error==="Movie not found!")return[];throw new Error(t.Error)}return(t.Search||[]).map(s=>({id:s.imdbID,title:s.Title,year:s.Year,imageUrl:s.Poster!=="N/A"?s.Poster:null,externalUrl:`https://www.imdb.com/title/${s.imdbID}`,type:"film"}))}async function Kt(a){const e=`${A.openLibrary.baseUrl}/search.json?q=${encodeURIComponent(a)}&limit=10`,t=await(await fetch(e)).json();return!t.docs||t.docs.length===0?[]:t.docs.map(s=>{var i;return{id:((i=s.key)==null?void 0:i.replace("/works/",""))||s.cover_edition_key||String(Math.random()),title:s.title||"Unknown Title",author:s.author_name?s.author_name.join(", "):"Unknown",year:s.first_publish_year?String(s.first_publish_year):"",imageUrl:s.cover_i?`https://covers.openlibrary.org/b/id/${s.cover_i}-M.jpg`:null,externalUrl:s.key?`https://openlibrary.org${s.key}`:`https://openlibrary.org/search?q=${encodeURIComponent(a)}`,type:"book"}})}async function Yt(a){const e=`https://corsproxy.io/?${encodeURIComponent(`${A.deezer.baseUrl}/search?q=${encodeURIComponent(a)}&limit=10`)}`;try{const t=await(await fetch(e)).json();if(t.error)throw new Error(t.error.message||"Deezer search failed");return(t.data||[]).map(s=>{var i,r,o,l;return{id:s.id.toString(),title:s.title,artist:((i=s.artist)==null?void 0:i.name)||"Unknown Artist",album:((r=s.album)==null?void 0:r.title)||"",year:"",imageUrl:((o=s.album)==null?void 0:o.cover_medium)||((l=s.album)==null?void 0:l.cover)||null,externalUrl:s.link,type:"song"}})}catch{return Jt(a)}}async function Xt(a){const e=`https://corsproxy.io/?${encodeURIComponent(`${A.deezer.baseUrl}/search/album?q=${encodeURIComponent(a)}&limit=10`)}`;try{const t=await(await fetch(e)).json();if(t.error)throw new Error(t.error.message||"Deezer album search failed");return(t.data||[]).map(s=>{var i;return{id:s.id.toString(),title:s.title,artist:((i=s.artist)==null?void 0:i.name)||"Unknown Artist",year:"",imageUrl:s.cover_medium||s.cover_big||s.cover||null,externalUrl:s.link,type:"album"}})}catch{throw new Error("Album search is currently unavailable. Please try again later.")}}async function Jt(a){const e=`https://www.theaudiodb.com/api/v1/json/2/search.php?s=${encodeURIComponent(a)}`;try{const t=await(await fetch(e)).json();return!t.artists||t.artists.length===0?[]:t.artists.slice(0,10).map(s=>({id:s.idArtist,title:s.strArtist,artist:s.strGenre||"Music",year:s.intFormedYear||"",imageUrl:s.strArtistThumb||null,externalUrl:s.strWebsite?`https://${s.strWebsite}`:`https://www.theaudiodb.com/artist/${s.idArtist}`,type:"song"}))}catch{throw new Error("Song search is currently unavailable. Please try again later.")}}async function en(a,e){if(!a.trim())return[];switch(e){case"film":return Vt(a);case"book":return Kt(a);case"song":return Yt(a);case"album":return Xt(a);default:throw new Error(`Unknown media type: ${e}`)}}function E(a){return{film:{label:"Film",color:"#ef4444"},book:{label:"Book",color:"#3b82f6"},song:{label:"Song",color:"#22c55e"},album:{label:"Album",color:"#a855f7"},restaurant:{label:"Restaurant",color:"#f97316"}}[a]||{label:a,color:"#6366f1"}}const tn={apiKey:"AIzaSyDGOa35ykPxXLNVTGKqBwn-DJWHuXaUDHg",authDomain:"zuber-5a216.firebaseapp.com",projectId:"zuber-5a216",storageBucket:"zuber-5a216.firebasestorage.app",messagingSenderId:"371730965722",appId:"1:371730965722:web:735ce1de62a6541a5c31e3",measurementId:"G-N452GHJNT5"},nn=at(tn),_=ot(nn),ae="writings",oe="media";let j=[],W=[],ne=!1,se=!1;function sn(a,e){const n=Le(X(_,ae));ze(n,s=>{j=s.docs.map(i=>({id:i.id,...i.data()})),ne=!0,a&&a(j)},s=>{console.error("Error listening to writings:",s),ne=!0});const t=Le(X(_,oe));ze(t,s=>{W=s.docs.map(i=>({id:i.id,...i.data()})),se=!0,e&&e(W)},s=>{console.error("Error listening to media:",s),se=!0})}async function rn(){if(ne)return{writings:j};try{return j=(await qe(X(_,ae))).docs.map(e=>({id:e.id,...e.data()})),ne=!0,{writings:j}}catch(a){return console.error("Error getting writings:",a),{writings:[]}}}async function an(){if(se)return{media:W};try{return W=(await qe(X(_,oe))).docs.map(e=>({id:e.id,...e.data()})),se=!0,{media:W}}catch(a){return console.error("Error getting media:",a),{media:[]}}}async function on(a,e,n){const t=Date.now().toString(36)+Math.random().toString(36).substr(2);try{return await He(ie(_,ae,t),{title:a,date:e,content:n,createdAt:new Date().toISOString()}),t}catch(s){throw console.error("Error adding writing:",s),s}}async function ln(a){try{await Ne(ie(_,ae,a))}catch(e){throw console.error("Error deleting writing:",e),e}}async function cn(a,e,n){const t=Date.now().toString(36)+Math.random().toString(36).substr(2);try{return await He(ie(_,oe,t),{type:a.type,title:a.title,artist:a.artist||a.author||"",year:a.year||"",imageUrl:a.imageUrl,externalUrl:a.externalUrl,rating:e,review:n,date:new Date().toISOString().split("T")[0],createdAt:new Date().toISOString()}),t}catch(s){throw console.error("Error adding media review:",s),s}}async function dn(a){try{await Ne(ie(_,oe,a))}catch(e){throw console.error("Error deleting media review:",e),e}}const Ee="zuber_seth_admin_auth",un="admin123";function pn(){return localStorage.getItem(Ee)==="authenticated"}function hn(a){const e=localStorage.getItem("admin_password")||un;return a===e?(localStorage.setItem(Ee,"authenticated"),!0):!1}function gn(){localStorage.removeItem(Ee)}function fn(a){localStorage.setItem("admin_password",a)}async function le(){return await rn()}async function ce(){return await an()}async function mn(a,e,n){return await on(a,e,n)}async function wn(a){return await ln(a)}async function De(a,e,n){return await cn(a,e,n)}async function bn(a){return await dn(a)}function et(a){a.innerHTML=`
        <div class="container">
            <div class="login-container fade-in">
                <div class="card login-card">
                    <h2 class="login-title">Admin Login</h2>
                    <form class="login-form" id="login-form">
                        <div class="form-group">
                            <input 
                                type="password" 
                                class="form-input" 
                                id="password-input"
                                placeholder="Enter password"
                                autocomplete="current-password"
                            >
                        </div>
                        <div class="form-error" id="login-error" style="display: none;"></div>
                        <button type="submit" class="btn btn-primary btn-full">Login</button>
                    </form>
                </div>
            </div>
        </div>
    `;const e=document.getElementById("login-form"),n=document.getElementById("login-error");e.addEventListener("submit",t=>{t.preventDefault();const s=document.getElementById("password-input").value;hn(s)?tt(a):(n.textContent="Incorrect password",n.style.display="block")})}function tt(a){a.innerHTML=`
        <div class="container admin-container fade-in">
            <div class="admin-header">
                <h1 class="admin-title">Admin Dashboard</h1>
                <button class="btn btn-secondary" id="logout-btn">Logout</button>
            </div>
            
            <div class="admin-tabs">
                <button class="admin-tab active" data-tab="writing">Add Writing</button>
                <button class="admin-tab" data-tab="media">Add Media Review</button>
                <button class="admin-tab" data-tab="manage">Manage Content</button>
                <button class="admin-tab" data-tab="settings">Settings</button>
            </div>
            
            <div id="admin-content">
                <!-- Tab content will be rendered here -->
            </div>
        </div>
    `;const e=document.querySelectorAll(".admin-tab");e.forEach(n=>{n.addEventListener("click",()=>{e.forEach(t=>t.classList.remove("active")),n.classList.add("active"),Pe(n.dataset.tab)})}),document.getElementById("logout-btn").addEventListener("click",()=>{gn(),et(a)}),Pe("writing")}function Pe(a){const e=document.getElementById("admin-content");switch(a){case"writing":vn(e);break;case"media":yn(e);break;case"manage":me(e);break;case"settings":kn(e);break}}function vn(a){a.innerHTML=`
        <div class="card">
            <h3 style="margin-bottom: var(--space-6);">Upload New Writing</h3>
            
            <div class="upload-zone" id="upload-zone">
                <div class="upload-icon" style="font-size: var(--text-4xl); opacity: 0.3;">+</div>
                <p class="upload-text">Drag and drop a Markdown file here</p>
                <p class="upload-hint">or click to browse</p>
                <input type="file" id="file-input" accept=".md,.markdown,.txt" style="display: none;">
            </div>
            
            <div id="file-preview" style="display: none; margin-top: var(--space-6);">
                <div class="form-group">
                    <label class="form-label">Title</label>
                    <input type="text" class="form-input" id="writing-title" placeholder="Article title">
                </div>
                
                <div class="form-group" style="margin-top: var(--space-4);">
                    <label class="form-label">Date</label>
                    <input type="date" class="form-input" id="writing-date">
                </div>
                
                <div class="form-group" style="margin-top: var(--space-4);">
                    <label class="form-label">Content Preview</label>
                    <textarea class="form-textarea" id="writing-content" rows="10"></textarea>
                </div>
                
                <button class="btn btn-primary" id="save-writing" style="margin-top: var(--space-4);">
                    Save Writing
                </button>
            </div>
        </div>
    `;const e=document.getElementById("upload-zone"),n=document.getElementById("file-input"),t=document.getElementById("file-preview");e.addEventListener("click",()=>n.click()),e.addEventListener("dragover",i=>{i.preventDefault(),e.classList.add("dragover")}),e.addEventListener("dragleave",()=>{e.classList.remove("dragover")}),e.addEventListener("drop",i=>{i.preventDefault(),e.classList.remove("dragover");const r=i.dataTransfer.files[0];r&&s(r)}),n.addEventListener("change",i=>{const r=i.target.files[0];r&&s(r)});function s(i){const r=new FileReader;r.onload=o=>{const l=o.target.result;let d=i.name.replace(/\.(md|markdown|txt)$/,"").replace(/-/g," ");const c=l.match(/^#\s+(.+)$/m);c&&(d=c[1]),document.getElementById("writing-title").value=d,document.getElementById("writing-date").value=new Date().toISOString().split("T")[0],document.getElementById("writing-content").value=l,t.style.display="block",e.style.display="none"},r.readAsText(i)}document.getElementById("save-writing").addEventListener("click",async()=>{const i=document.getElementById("writing-title").value.trim(),r=document.getElementById("writing-date").value,o=document.getElementById("writing-content").value;if(!i||!r||!o){y("Please fill in all fields","error");return}try{await mn(i,r,o),y("Writing saved successfully!","success"),t.style.display="none",e.style.display="block",document.getElementById("writing-title").value="",document.getElementById("writing-content").value=""}catch(l){y("Error saving writing: "+l.message,"error")}})}function yn(a){a.innerHTML=`
        <div class="card">
            <h3 style="margin-bottom: var(--space-6);">Add Media Review</h3>
            
            <div class="search-container">
                <div class="search-form">
                    <select class="search-type-select" id="media-type">
                        <option value="film">Film</option>
                        <option value="book">Book</option>
                        <option value="song">Song</option>
                        <option value="album">Album</option>
                        <option value="restaurant">Restaurant</option>
                    </select>
                    <input 
                        type="text" 
                        class="form-input search-input" 
                        id="media-search"
                        placeholder="Search for media..."
                    >
                    <button class="btn btn-primary" id="search-btn">Search</button>
                </div>
            </div>
            
            <!-- Manual entry form for restaurants -->
            <div id="restaurant-form" class="review-form" style="display: none; margin-top: var(--space-6);">
                <h4 style="margin-bottom: var(--space-4);">Add Restaurant</h4>
                
                <div class="form-group" style="margin-bottom: var(--space-4);">
                    <label class="form-label">Restaurant Name</label>
                    <input type="text" class="form-input" id="restaurant-name" placeholder="e.g., Nobu, The French Laundry">
                </div>
                
                <div class="form-group" style="margin-bottom: var(--space-4);">
                    <label class="form-label">Location / Cuisine (optional)</label>
                    <input type="text" class="form-input" id="restaurant-location" placeholder="e.g., New York, NY or Japanese">
                </div>
                
                <div class="form-group">
                    <label class="form-label">Rating</label>
                    <div class="rating-input-wrapper">
                        <input type="range" id="restaurant-rating-slider" min="0" max="10" value="0" step="1" class="rating-slider">
                        <div class="rating-display" id="restaurant-rating-display">
                            <span class="rating-stars" id="restaurant-rating-stars"></span>
                            <span class="rating-value" id="restaurant-rating-value">0</span>
                        </div>
                    </div>
                </div>
                
                <div class="form-group">
                    <label class="form-label">Review (max 100 words)</label>
                    <textarea 
                        class="form-textarea" 
                        id="restaurant-review-text" 
                        placeholder="What did you have? How was it?"
                        rows="4"
                    ></textarea>
                    <div class="word-count"><span id="restaurant-word-count">0</span>/100 words</div>
                </div>
                
                <button class="btn btn-primary" id="save-restaurant">Save Restaurant Review</button>
            </div>
            
            <div id="search-results" class="search-results"></div>
            
            <div id="review-form" class="review-form" style="display: none;">
                <h4 style="margin-bottom: var(--space-4);">Write Your Review</h4>
                
                <div id="selected-media-info" style="margin-bottom: var(--space-4);"></div>
                
                <div class="form-group">
                    <label class="form-label">Rating</label>
                    <div class="rating-input-wrapper">
                        <input type="range" id="rating-slider" min="0" max="10" value="0" step="1" class="rating-slider">
                        <div class="rating-display" id="rating-display">
                            <span class="rating-stars" id="rating-stars"></span>
                            <span class="rating-value" id="rating-value">0</span>
                        </div>
                    </div>
                </div>
                
                <div class="form-group">
                    <label class="form-label">Review (max 100 words)</label>
                    <textarea 
                        class="form-textarea" 
                        id="review-text" 
                        placeholder="Write your review..."
                        rows="4"
                    ></textarea>
                    <div class="word-count"><span id="word-count">0</span>/100 words</div>
                </div>
                
                <button class="btn btn-primary" id="save-review">Save Review</button>
            </div>
        </div>
    `;let e=null,n=0,t=0;const s=document.getElementById("media-search"),i=document.getElementById("search-btn"),r=document.getElementById("media-type"),o=document.getElementById("search-results"),l=document.getElementById("review-form"),d=document.getElementById("restaurant-form"),c=document.getElementById("restaurant-rating-slider"),p=document.getElementById("restaurant-rating-stars"),u=document.getElementById("restaurant-rating-value"),f=document.getElementById("restaurant-review-text");function $(g){const h=g/2;t=h;let w="";for(let I=1;I<=5;I++)h>=I?w+="★":h>=I-.5?w+="⯨":w+="☆";p.textContent=w,u.textContent=h.toFixed(1)}c.addEventListener("input",g=>{$(parseInt(g.target.value))}),$(0),f.addEventListener("input",()=>{const h=f.value.trim().split(/\s+/).filter(w=>w.length>0).length;document.getElementById("restaurant-word-count").textContent=h,document.getElementById("restaurant-word-count").style.color=h>100?"var(--color-error)":""}),document.getElementById("save-restaurant").addEventListener("click",async()=>{const g=document.getElementById("restaurant-name").value.trim(),h=document.getElementById("restaurant-location").value.trim();if(!g){y("Please enter a restaurant name","error");return}if(t===0){y("Please select a rating","error");return}const w=f.value.trim();if(w.split(/\s+/).filter(pe=>pe.length>0).length>100){y("Review must be 100 words or less","error");return}const nt={type:"restaurant",title:g,artist:h,year:"",imageUrl:null,externalUrl:`https://www.google.com/search?q=${encodeURIComponent(g+" restaurant "+h)}`};try{await De(nt,t,w),y("Restaurant review saved!","success"),document.getElementById("restaurant-name").value="",document.getElementById("restaurant-location").value="",f.value="",c.value=0,$(0),document.getElementById("restaurant-word-count").textContent="0"}catch(pe){y("Error saving: "+pe.message,"error")}}),r.addEventListener("change",()=>{const g=r.value;g==="restaurant"?(d.style.display="block",s.style.display="none",i.style.display="none",o.innerHTML="",l.style.display="none"):(d.style.display="none",s.style.display="block",i.style.display="block",Gt(g)||y(`${E(g).label} search requires API configuration. Check Settings.`,"error"))});async function k(){const g=s.value.trim(),h=r.value;if(g){o.innerHTML='<div class="loading"><div class="spinner"></div></div>',l.style.display="none",e=null;try{const w=await en(g,h);z(w)}catch(w){o.innerHTML=`<p style="color: var(--color-error);">${w.message}</p>`}}}i.addEventListener("click",k),s.addEventListener("keypress",g=>{g.key==="Enter"&&k()});function z(g){if(g.length===0){o.innerHTML='<p style="color: var(--color-text-muted);">No results found</p>';return}o.innerHTML=g.map(h=>`
            <div class="search-result-item" data-id="${h.id}">
                <div class="search-result-image">
                    ${h.imageUrl?`<img src="${h.imageUrl}" alt="${h.title}">`:`<div style="display:flex;align-items:center;justify-content:center;height:100%;font-size:1rem;color:var(--color-text-muted);">${E(h.type).label}</div>`}
                </div>
                <div class="search-result-info">
                    <div class="search-result-title">${h.title}</div>
                    <div class="search-result-meta">${h.artist||h.author||""} ${h.year?`(${h.year})`:""}</div>
                </div>
            </div>
        `).join(""),window._searchResults=g,o.querySelectorAll(".search-result-item").forEach(h=>{h.addEventListener("click",()=>{o.querySelectorAll(".search-result-item").forEach(w=>w.classList.remove("selected")),h.classList.add("selected"),e=window._searchResults.find(w=>w.id===h.dataset.id),U(e)})})}function U(g){const h=document.getElementById("selected-media-info");h.innerHTML=`
            <div style="display: flex; align-items: center; gap: var(--space-4);">
                ${g.imageUrl?`<img src="${g.imageUrl}" style="width: 60px; height: 60px; object-fit: cover; border-radius: var(--radius-md);">`:""}
                <div>
                    <strong>${g.title}</strong><br>
                    <span style="color: var(--color-text-muted);">${g.artist||g.author||""} ${g.year?`(${g.year})`:""}</span>
                </div>
            </div>
        `,n=0,q.value=0,B(0),document.getElementById("review-text").value="",document.getElementById("word-count").textContent="0",l.style.display="block"}const q=document.getElementById("rating-slider"),Q=document.getElementById("rating-stars"),G=document.getElementById("rating-value");function B(g){const h=g/2;n=h;let w="";for(let I=1;I<=5;I++)h>=I?w+="★":h>=I-.5?w+="⯨":w+="☆";Q.textContent=w,G.textContent=h.toFixed(1)}q.addEventListener("input",g=>{B(parseInt(g.target.value))}),B(0);const ue=document.getElementById("review-text");ue.addEventListener("input",()=>{const h=ue.value.trim().split(/\s+/).filter(w=>w.length>0).length;document.getElementById("word-count").textContent=h,h>100?document.getElementById("word-count").style.color="var(--color-error)":document.getElementById("word-count").style.color=""}),document.getElementById("save-review").addEventListener("click",async()=>{if(!e){y("Please select a media item","error");return}if(n===0){y("Please select a rating","error");return}const g=ue.value.trim();if(g.split(/\s+/).filter(w=>w.length>0).length>100){y("Review must be 100 words or less","error");return}try{await De(e,n,g),y("Review saved successfully!","success"),o.innerHTML="",l.style.display="none",s.value="",e=null}catch(w){y("Error saving review: "+w.message,"error")}})}async function me(a){a.innerHTML='<div class="loading"><div class="spinner"></div></div>';const e=await le(),n=await ce(),t=e.writings,s=n.media;a.innerHTML=`
        <div class="card" style="margin-bottom: var(--space-6);">
            <h3 style="margin-bottom: var(--space-6);">Writings (${t.length})</h3>
            <div class="content-list" id="writings-list">
                ${t.length===0?'<p style="color: var(--color-text-muted);">No writings yet</p>':t.map(i=>`
                        <div class="content-item">
                            <div class="content-item-info">
                                <div class="content-item-title">${i.title}</div>
                                <div class="content-item-meta">${M(i.date)}</div>
                            </div>
                            <div class="content-item-actions">
                                <button class="btn btn-danger btn-sm" data-delete-writing="${i.id}">Delete</button>
                            </div>
                        </div>
                    `).join("")}
            </div>
        </div>
        
        <div class="card">
            <h3 style="margin-bottom: var(--space-6);">Media Reviews (${s.length})</h3>
            <div class="content-list" id="media-list">
                ${s.length===0?'<p style="color: var(--color-text-muted);">No media reviews yet</p>':s.map(i=>`
                        <div class="content-item">
                            <div class="content-item-image">
                                ${i.imageUrl?`<img src="${i.imageUrl}" alt="${i.title}">`:`<div style="display:flex;align-items:center;justify-content:center;height:100%;background:var(--color-bg-secondary);font-size:0.75rem;color:var(--color-text-muted);">${E(i.type).label}</div>`}
                            </div>
                            <div class="content-item-info">
                                <div class="content-item-title">${i.title}</div>
                                <div class="content-item-meta">
                                    ${E(i.type).label} • ${i.rating} stars • ${M(i.date)}
                                </div>
                            </div>
                            <div class="content-item-actions">
                                <button class="btn btn-danger btn-sm" data-delete-media="${i.id}">Delete</button>
                            </div>
                        </div>
                    `).join("")}
            </div>
        </div>
    `,a.querySelectorAll("[data-delete-writing]").forEach(i=>{i.addEventListener("click",async()=>{if(confirm("Are you sure you want to delete this writing?"))try{await wn(i.dataset.deleteWriting),y("Writing deleted","success"),me(a)}catch(r){y("Error deleting: "+r.message,"error")}})}),a.querySelectorAll("[data-delete-media]").forEach(i=>{i.addEventListener("click",async()=>{if(confirm("Are you sure you want to delete this review?"))try{await bn(i.dataset.deleteMedia),y("Review deleted","success"),me(a)}catch(r){y("Error deleting: "+r.message,"error")}})})}function kn(a){const e=Qt();a.innerHTML=`
        <div class="card" style="margin-bottom: var(--space-6);">
            <h3 style="margin-bottom: var(--space-6);">Change Password</h3>
            <div class="form-group">
                <input type="password" class="form-input" id="new-password" placeholder="New password">
            </div>
            <button class="btn btn-primary" id="change-password" style="margin-top: var(--space-4);">
                Change Password
            </button>
        </div>
        
        <div class="card">
            <h3 style="margin-bottom: var(--space-6);">API Keys</h3>
            <p style="color: var(--color-text-secondary); margin-bottom: var(--space-6);">
                Configure API keys for media search. These are stored locally in your browser.
            </p>
            
            <div class="form-group" style="margin-bottom: var(--space-4);">
                <label class="form-label">OMDb API Key (for films)</label>
                <input type="text" class="form-input" id="omdb-key" value="${e.omdb}" placeholder="Get from omdbapi.com">
            </div>
            
            <p style="color: var(--color-text-muted); font-size: var(--text-sm); margin-top: var(--space-4);">
                Book search uses Open Library (no API key required).<br>
                Song search uses Deezer (no API key required).
            </p>
            
            <button class="btn btn-primary" id="save-api-keys" style="margin-top: var(--space-4);">
                Save API Keys
            </button>
        </div>
    `,document.getElementById("change-password").addEventListener("click",()=>{const n=document.getElementById("new-password").value;if(n.length<4){y("Password must be at least 4 characters","error");return}fn(n),y("Password changed successfully","success"),document.getElementById("new-password").value=""}),document.getElementById("save-api-keys").addEventListener("click",()=>{Zt({omdb:document.getElementById("omdb-key").value.trim()}),y("API keys saved successfully","success")})}function y(a,e="success"){let n=document.querySelector(".toast-container");n||(n=document.createElement("div"),n.className="toast-container",document.body.appendChild(n));const t=document.createElement("div");t.className=`toast toast-${e}`,t.textContent=a,n.appendChild(t),setTimeout(()=>{t.remove()},3e3)}const L=new lt,he=["linear-gradient(135deg, #f97316 0%, #ea580c 50%, #c2410c 100%)","linear-gradient(135deg, #ec4899 0%, #db2777 50%, #be185d 100%)","linear-gradient(135deg, #8b5cf6 0%, #7c3aed 50%, #6d28d9 100%)","linear-gradient(135deg, #3b82f6 0%, #2563eb 50%, #1d4ed8 100%)","linear-gradient(135deg, #10b981 0%, #059669 50%, #047857 100%)","linear-gradient(135deg, #ef4444 0%, #dc2626 50%, #b91c1c 100%)","linear-gradient(135deg, #06b6d4 0%, #0891b2 50%, #0e7490 100%)"];function Te(a){if(!a)return he[0];let e=0;for(let t=0;t<a.length;t++)e=a.charCodeAt(t)+((e<<5)-e);const n=Math.abs(e)%he.length;return he[n]}const T=document.getElementById("main-content");function Ie(a){let e="";for(let n=1;n<=5;n++)a>=n?e+='<span class="star filled">★</span>':a>=n-.5?e+='<span class="star half">★</span>':e+='<span class="star">★</span>';return e}function de(){T.innerHTML=`
        <div class="loading">
            <div class="spinner"></div>
        </div>
    `}L.on("/",async()=>{de();const a=await le(),e=await ce(),n=a.writings,t=e.media,s=[...n].sort((r,o)=>new Date(o.date)-new Date(r.date)).slice(0,8),i=[...t].sort((r,o)=>new Date(o.date)-new Date(r.date)).slice(0,8);T.innerHTML=`
        <div class="container home-container fade-in">
            <!-- Writing Shelf -->
            <section class="bookshelf">
                <div class="shelf-header">
                    <h2 class="shelf-title">Writing</h2>
                    ${n.length>0?'<a href="#/writing" class="shelf-link">View all</a>':""}
                </div>
                <div class="shelf-content">
                    ${s.length===0?'<div class="shelf-empty">No writings yet</div>':`<div class="shelf-scroll">
                            ${s.map(r=>`
                                <a href="#/writing/${r.id}" class="shelf-item shelf-item-writing">
                                    <div class="shelf-item-spine"></div>
                                    <div class="shelf-item-content">
                                        <span class="shelf-item-date">${M(r.date)}</span>
                                        <h3 class="shelf-item-title">${r.title}</h3>
                                    </div>
                                </a>
                            `).join("")}
                          </div>`}
                </div>
                <div class="shelf-base"></div>
            </section>

            <!-- Media Shelf -->
            <section class="bookshelf">
                <div class="shelf-header">
                    <h2 class="shelf-title">Media</h2>
                    ${t.length>0?'<a href="#/media" class="shelf-link">View all</a>':""}
                </div>
                <div class="shelf-content">
                    ${i.length===0?'<div class="shelf-empty">No media yet</div>':`<div class="shelf-scroll">
                            ${i.map(r=>{let o;return r.imageUrl?o=`<img src="${r.imageUrl}" alt="${r.title}" class="shelf-item-cover">`:r.type==="restaurant"?o=`
                                        <div class="shelf-item-cover restaurant-cover" style="background: ${Te(r.id)}">
                                            <span class="restaurant-cover-name">${r.title}</span>
                                            <span class="restaurant-cover-location">${r.artist||""}</span>
                                        </div>
                                    `:o=`<div class="shelf-item-cover shelf-item-cover-placeholder">${E(r.type).label}</div>`,`
                                <a href="#/media/${r.id}" class="shelf-item shelf-item-media">
                                    ${o}
                                    <div class="shelf-item-info">
                                        <span class="shelf-item-type">${E(r.type).label}</span>
                                        <div class="shelf-item-rating">${Ie(r.rating)}</div>
                                    </div>
                                </a>
                            `}).join("")}
                          </div>`}
                </div>
                <div class="shelf-base"></div>
            </section>
        </div>
    `});L.on("/writing",async()=>{de();const e=(await le()).writings;if(e.length===0){T.innerHTML=`
            <div class="container">
                <div class="section-header fade-in">
                    <h1 class="section-title">Writing</h1>
                </div>
                <div class="empty-state">
                    <h2 class="empty-state-title">No writings yet</h2>
                    <p class="empty-state-text">Check back soon for new content.</p>
                </div>
            </div>
        `;return}const n=[...e].sort((t,s)=>new Date(s.date)-new Date(t.date));T.innerHTML=`
        <div class="container">
            <div class="section-header fade-in">
                <h1 class="section-title">Writing</h1>
            </div>
            <div class="writings-grid fade-in">
                ${n.map(t=>`
                    <a href="#/writing/${t.id}" class="card card-clickable writing-card">
                        <span class="writing-card-date">${M(t.date)}</span>
                        <h2 class="writing-card-title">${t.title}</h2>
                        <p class="writing-card-excerpt">${Ft(t.content)}</p>
                    </a>
                `).join("")}
            </div>
        </div>
    `});L.on("/writing/:id",async a=>{de();const t=(await le()).writings.find(o=>o.id===a.id);if(!t){L.show404();return}const{metadata:s,content:i}=Je(t.content),r=Wt(i);T.innerHTML=`
        <div class="container article-container fade-in">
            <div class="article-header">
                <a href="#/writing" class="article-back">← Back to Writing</a>
                <h1 class="article-title">${t.title}</h1>
                <p class="article-date">${M(t.date)}</p>
            </div>
            <div class="article-content">
                ${r}
            </div>
        </div>
    `});L.on("/media",async()=>{de();const e=(await ce()).media;if(e.length===0){T.innerHTML=`
            <div class="container">
                <div class="section-header fade-in">
                    <h1 class="section-title">Media</h1>
                </div>
                <div class="empty-state">
                    <h2 class="empty-state-title">No reviews yet</h2>
                    <p class="empty-state-text">Check back soon for media reviews.</p>
                </div>
            </div>
        `;return}const n=[...e].sort((s,i)=>new Date(i.date)-new Date(s.date)),t=[...new Set(n.map(s=>s.type))];T.innerHTML=`
        <div class="container">
            <div class="section-header fade-in">
                <h1 class="section-title">Media</h1>
            </div>
            
            <div class="media-filters fade-in">
                <button class="filter-btn active" data-filter="all">All</button>
                ${t.map(s=>`
                    <button class="filter-btn" data-filter="${s}">${E(s).label}s</button>
                `).join("")}
            </div>
            
            <div class="media-grid fade-in" id="media-grid">
                ${Ue(n)}
            </div>
        </div>
    `,document.querySelectorAll(".filter-btn").forEach(s=>{s.addEventListener("click",()=>{document.querySelectorAll(".filter-btn").forEach(o=>o.classList.remove("active")),s.classList.add("active");const i=s.dataset.filter,r=i==="all"?n:n.filter(o=>o.type===i);document.getElementById("media-grid").innerHTML=Ue(r)})})});L.on("/media/:id",async a=>{T.innerHTML='<div class="loading"><div class="spinner"></div></div>',window.scrollTo(0,0);const t=(await ce()).media.find(r=>r.id===a.id);if(!t){L.show404();return}let s;t.imageUrl?s=`<img src="${t.imageUrl}" alt="${t.title}" class="article-hero-image" style="width: 100%; height: 100%; object-fit: cover; border-radius: var(--radius-lg);">`:t.type==="restaurant"?s=`
            <div class="article-hero-placeholder" style="background: ${Te(t.id)}; aspect-ratio: 16/9; display: flex; flex-direction: column; align-items: center; justify-content: center; color: white; border-radius: var(--radius-lg); margin-bottom: var(--space-6); width: 100%;">
                <span style="font-size: var(--text-4xl); font-weight: var(--font-light); margin-bottom: var(--space-2); text-align: center;">${t.title}</span>
                <span style="font-size: var(--text-xl); font-weight: var(--font-ultralight); opacity: 0.9; font-style: italic;">${t.artist||""}</span>
            </div>
        `:s=`<div class="article-hero-placeholder" style="background: var(--color-bg-tertiary); aspect-ratio: 16/9; display: flex; align-items: center; justify-content: center; color: var(--color-text-muted); border-radius: var(--radius-lg); margin-bottom: var(--space-6);">${E(t.type).label}</div>`;let i;switch(t.type){case"film":i="View on IMDb";break;case"book":i="View on Open Library";break;case"song":i="View on Deezer";break;case"album":i="View on Deezer";break;case"restaurant":i="Search on Google";break;default:i="View Details"}T.innerHTML=`
        <div class="container article-container fade-in">
            <div class="article-header">
                <a href="#/media" class="article-back">← Back to Media</a>
                <span class="media-card-type" style="display: block; margin-top: var(--space-4); margin-bottom: var(--space-2); color: ${E(t.type).color};">${E(t.type).label}</span>
                <h1 class="article-title">${t.title}</h1>
                <div style="display: flex; align-items: center; gap: var(--space-3); margin: var(--space-4) 0;">
                    <div class="star-rating" style="font-size: 1.25rem;">${Ie(t.rating)}</div>
                    <span class="article-date" style="margin: 0; opacity: 0.6;">${M(t.date)}</span>
                </div>
            </div>
            
            <div class="article-content" style="max-width: 800px; margin: 0 auto;">
                <div style="margin-bottom: var(--space-8); box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);">
                    ${s}
                </div>
                
                <div class="media-review-content" style="font-size: var(--text-lg); line-height: 1.6; margin-bottom: var(--space-8);">
                    ${t.review?`<p>${t.review}</p>`:'<p style="font-style: italic; opacity: 0.6;">No written review.</p>'}
                </div>

                <a href="${t.externalUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary">
                    ${i} →
                </a>
            </div>
        </div>
    `});function Ue(a){return a.map(e=>{let n;switch(e.type==="restaurant"?n=`
                <div class="restaurant-cover" style="background: ${Te(e.id)}">
                    <span class="restaurant-cover-name">${e.title}</span>
                    <span class="restaurant-cover-location">${e.artist||""}</span>
                </div>
            `:n=`<div style="display:flex;align-items:center;justify-content:center;height:100%;font-size:1rem;color:var(--color-text-muted);background:var(--color-bg-tertiary);">${E(e.type).label}</div>`,e.type){}return`
        <div class="card media-card">
            <a href="#/media/${e.id}" style="text-decoration: none; color: inherit; display: block; height: 100%;">
                <div class="media-card-image">
                    ${e.imageUrl?`<img src="${e.imageUrl}" alt="${e.title}">`:n}
                    <div class="media-card-overlay">
                        <span class="media-card-link">Read Review →</span>
                    </div>
                </div>
                <div class="media-card-content">
                    <span class="media-card-type">${E(e.type).label}</span>
                    <h3 class="media-card-title">${e.title}</h3>
                    <div class="star-rating">${Ie(e.rating)}</div>
                    ${e.review?`<p class="media-card-review">${e.review}</p>`:""}
                    <span class="media-card-date">${M(e.date)}</span>
                </div>
            </a>
        </div>
    `}).join("")}L.on("/admin",()=>{pn()?tt(T):et(T)});sn(()=>{(window.location.hash==="#/"||window.location.hash===""||window.location.hash.startsWith("#/writing"))&&L.navigate(window.location.hash||"#/")},()=>{(window.location.hash==="#/"||window.location.hash===""||window.location.hash==="#/media")&&L.navigate(window.location.hash||"#/")});console.log("Zuber Seth Personal Website initialized with Firebase");
