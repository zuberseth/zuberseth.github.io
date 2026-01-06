var Qe=Object.defineProperty;var be=a=>{throw TypeError(a)};var Ge=(a,e,t)=>e in a?Qe(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t;var b=(a,e,t)=>Ge(a,typeof e!="symbol"?e+"":e,t),Ke=(a,e,t)=>e.has(a)||be("Cannot "+t);var ke=(a,e,t)=>e.has(a)?be("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(a):e.set(a,t);var N=(a,e,t)=>(Ke(a,e,"access private method"),t);import{initializeApp as Ve}from"https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";import{getFirestore as Xe,query as ye,collection as F,onSnapshot as ve,getDocs as Re,deleteDoc as ze,doc as Y,setDoc as Ae}from"https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function t(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(s){if(s.ep)return;s.ep=!0;const i=t(s);fetch(s.href,i)}})();class Ye{constructor(){this.routes={},this.currentRoute=null,window.addEventListener("hashchange",()=>this.handleRoute()),window.addEventListener("load",()=>this.handleRoute())}on(e,t){return this.routes[e]=t,this}navigate(e){window.location.hash=e}handleRoute(){const e=window.location.hash.slice(1)||"/",[t,...n]=e.split("/").filter(Boolean),s="/"+(t||"");this.updateNavLinks(s);let i=this.routes[s],r=n;if(!i){for(const[o,l]of Object.entries(this.routes))if(o.includes(":")){const d=o.split("/").filter(Boolean),c=[t,...n];if(d.length===c.length){let p=!0;r={};for(let u=0;u<d.length;u++)if(d[u].startsWith(":"))r[d[u].slice(1)]=c[u];else if(d[u]!==c[u]){p=!1;break}if(p){i=l;break}}}}i?(this.currentRoute=s,Promise.resolve(i(r)).catch(o=>{console.error("Route handler error:",o)})):this.show404()}updateNavLinks(e){document.querySelectorAll(".nav-link").forEach(t=>{const n=t.getAttribute("href").slice(1);n===e||e.startsWith(n)&&n!=="/"?t.classList.add("active"):t.classList.remove("active")})}show404(){const e=document.getElementById("main-content");e.innerHTML=`
            <div class="container">
                <div class="empty-state fade-in">
                    <h2 class="empty-state-title">Page Not Found</h2>
                    <p class="empty-state-text">The page you're looking for doesn't exist.</p>
                    <br>
                    <a href="#/" class="btn btn-primary">Go Home</a>
                </div>
            </div>
        `}}function le(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}let M=le();function _e(a){M=a}const Be=/[&<>"']/,Je=new RegExp(Be.source,"g"),Me=/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,et=new RegExp(Me.source,"g"),tt={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},xe=a=>tt[a];function x(a,e){if(e){if(Be.test(a))return a.replace(Je,xe)}else if(Me.test(a))return a.replace(et,xe);return a}const nt=/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig;function st(a){return a.replace(nt,(e,t)=>(t=t.toLowerCase(),t==="colon"?":":t.charAt(0)==="#"?t.charAt(1)==="x"?String.fromCharCode(parseInt(t.substring(2),16)):String.fromCharCode(+t.substring(1)):""))}const it=/(^|[^\[])\^/g;function w(a,e){let t=typeof a=="string"?a:a.source;e=e||"";const n={replace:(s,i)=>{let r=typeof i=="string"?i:i.source;return r=r.replace(it,"$1"),t=t.replace(s,r),n},getRegex:()=>new RegExp(t,e)};return n}function $e(a){try{a=encodeURI(a).replace(/%25/g,"%")}catch{return null}return a}const P={exec:()=>null};function Te(a,e){const t=a.replace(/\|/g,(i,r,o)=>{let l=!1,d=r;for(;--d>=0&&o[d]==="\\";)l=!l;return l?"|":" |"}),n=t.split(/ \|/);let s=0;if(n[0].trim()||n.shift(),n.length>0&&!n[n.length-1].trim()&&n.pop(),e)if(n.length>e)n.splice(e);else for(;n.length<e;)n.push("");for(;s<n.length;s++)n[s]=n[s].trim().replace(/\\\|/g,"|");return n}function W(a,e,t){const n=a.length;if(n===0)return"";let s=0;for(;s<n&&a.charAt(n-s-1)===e;)s++;return a.slice(0,n-s)}function rt(a,e){if(a.indexOf(e[1])===-1)return-1;let t=0;for(let n=0;n<a.length;n++)if(a[n]==="\\")n++;else if(a[n]===e[0])t++;else if(a[n]===e[1]&&(t--,t<0))return n;return-1}function Ee(a,e,t,n){const s=e.href,i=e.title?x(e.title):null,r=a[1].replace(/\\([\[\]])/g,"$1");if(a[0].charAt(0)!=="!"){n.state.inLink=!0;const o={type:"link",raw:t,href:s,title:i,text:r,tokens:n.inlineTokens(r)};return n.state.inLink=!1,o}return{type:"image",raw:t,href:s,title:i,text:x(r)}}function at(a,e){const t=a.match(/^(\s+)(?:```)/);if(t===null)return e;const n=t[1];return e.split(`
`).map(s=>{const i=s.match(/^\s+/);if(i===null)return s;const[r]=i;return r.length>=n.length?s.slice(n.length):s}).join(`
`)}class Q{constructor(e){b(this,"options");b(this,"rules");b(this,"lexer");this.options=e||M}space(e){const t=this.rules.block.newline.exec(e);if(t&&t[0].length>0)return{type:"space",raw:t[0]}}code(e){const t=this.rules.block.code.exec(e);if(t){const n=t[0].replace(/^ {1,4}/gm,"");return{type:"code",raw:t[0],codeBlockStyle:"indented",text:this.options.pedantic?n:W(n,`
`)}}}fences(e){const t=this.rules.block.fences.exec(e);if(t){const n=t[0],s=at(n,t[3]||"");return{type:"code",raw:n,lang:t[2]?t[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):t[2],text:s}}}heading(e){const t=this.rules.block.heading.exec(e);if(t){let n=t[2].trim();if(/#$/.test(n)){const s=W(n,"#");(this.options.pedantic||!s||/ $/.test(s))&&(n=s.trim())}return{type:"heading",raw:t[0],depth:t[1].length,text:n,tokens:this.lexer.inline(n)}}}hr(e){const t=this.rules.block.hr.exec(e);if(t)return{type:"hr",raw:t[0]}}blockquote(e){const t=this.rules.block.blockquote.exec(e);if(t){let n=t[0].replace(/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,`
    $1`);n=W(n.replace(/^ *>[ \t]?/gm,""),`
`);const s=this.lexer.state.top;this.lexer.state.top=!0;const i=this.lexer.blockTokens(n);return this.lexer.state.top=s,{type:"blockquote",raw:t[0],tokens:i,text:n}}}list(e){let t=this.rules.block.list.exec(e);if(t){let n=t[1].trim();const s=n.length>1,i={type:"list",raw:"",ordered:s,start:s?+n.slice(0,-1):"",loose:!1,items:[]};n=s?`\\d{1,9}\\${n.slice(-1)}`:`\\${n}`,this.options.pedantic&&(n=s?n:"[*+-]");const r=new RegExp(`^( {0,3}${n})((?:[	 ][^\\n]*)?(?:\\n|$))`);let o="",l="",d=!1;for(;e;){let c=!1;if(!(t=r.exec(e))||this.rules.block.hr.test(e))break;o=t[0],e=e.substring(o.length);let p=t[2].split(`
`,1)[0].replace(/^\t+/,g=>" ".repeat(3*g.length)),u=e.split(`
`,1)[0],f=0;this.options.pedantic?(f=2,l=p.trimStart()):(f=t[2].search(/[^ ]/),f=f>4?1:f,l=p.slice(f),f+=t[1].length);let $=!1;if(!p&&/^ *$/.test(u)&&(o+=u+`
`,e=e.substring(u.length+1),c=!0),!c){const g=new RegExp(`^ {0,${Math.min(3,f-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),k=new RegExp(`^ {0,${Math.min(3,f-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),A=new RegExp(`^ {0,${Math.min(3,f-1)}}(?:\`\`\`|~~~)`),we=new RegExp(`^ {0,${Math.min(3,f-1)}}#`);for(;e;){const ie=e.split(`
`,1)[0];if(u=ie,this.options.pedantic&&(u=u.replace(/^ {1,4}(?=( {4})*[^ ])/g,"  ")),A.test(u)||we.test(u)||g.test(u)||k.test(e))break;if(u.search(/[^ ]/)>=f||!u.trim())l+=`
`+u.slice(f);else{if($||p.search(/[^ ]/)>=4||A.test(p)||we.test(p)||k.test(p))break;l+=`
`+u}!$&&!u.trim()&&($=!0),o+=ie+`
`,e=e.substring(ie.length+1),p=u.slice(f)}}i.loose||(d?i.loose=!0:/\n *\n *$/.test(o)&&(d=!0));let v=null,h;this.options.gfm&&(v=/^\[[ xX]\] /.exec(l),v&&(h=v[0]!=="[ ] ",l=l.replace(/^\[[ xX]\] +/,""))),i.items.push({type:"list_item",raw:o,task:!!v,checked:h,loose:!1,text:l,tokens:[]}),i.raw+=o}i.items[i.items.length-1].raw=o.trimEnd(),i.items[i.items.length-1].text=l.trimEnd(),i.raw=i.raw.trimEnd();for(let c=0;c<i.items.length;c++)if(this.lexer.state.top=!1,i.items[c].tokens=this.lexer.blockTokens(i.items[c].text,[]),!i.loose){const p=i.items[c].tokens.filter(f=>f.type==="space"),u=p.length>0&&p.some(f=>/\n.*\n/.test(f.raw));i.loose=u}if(i.loose)for(let c=0;c<i.items.length;c++)i.items[c].loose=!0;return i}}html(e){const t=this.rules.block.html.exec(e);if(t)return{type:"html",block:!0,raw:t[0],pre:t[1]==="pre"||t[1]==="script"||t[1]==="style",text:t[0]}}def(e){const t=this.rules.block.def.exec(e);if(t){const n=t[1].toLowerCase().replace(/\s+/g," "),s=t[2]?t[2].replace(/^<(.*)>$/,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",i=t[3]?t[3].substring(1,t[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):t[3];return{type:"def",tag:n,raw:t[0],href:s,title:i}}}table(e){const t=this.rules.block.table.exec(e);if(!t||!/[:|]/.test(t[2]))return;const n=Te(t[1]),s=t[2].replace(/^\||\| *$/g,"").split("|"),i=t[3]&&t[3].trim()?t[3].replace(/\n[ \t]*$/,"").split(`
`):[],r={type:"table",raw:t[0],header:[],align:[],rows:[]};if(n.length===s.length){for(const o of s)/^ *-+: *$/.test(o)?r.align.push("right"):/^ *:-+: *$/.test(o)?r.align.push("center"):/^ *:-+ *$/.test(o)?r.align.push("left"):r.align.push(null);for(const o of n)r.header.push({text:o,tokens:this.lexer.inline(o)});for(const o of i)r.rows.push(Te(o,r.header.length).map(l=>({text:l,tokens:this.lexer.inline(l)})));return r}}lheading(e){const t=this.rules.block.lheading.exec(e);if(t)return{type:"heading",raw:t[0],depth:t[2].charAt(0)==="="?1:2,text:t[1],tokens:this.lexer.inline(t[1])}}paragraph(e){const t=this.rules.block.paragraph.exec(e);if(t){const n=t[1].charAt(t[1].length-1)===`
`?t[1].slice(0,-1):t[1];return{type:"paragraph",raw:t[0],text:n,tokens:this.lexer.inline(n)}}}text(e){const t=this.rules.block.text.exec(e);if(t)return{type:"text",raw:t[0],text:t[0],tokens:this.lexer.inline(t[0])}}escape(e){const t=this.rules.inline.escape.exec(e);if(t)return{type:"escape",raw:t[0],text:x(t[1])}}tag(e){const t=this.rules.inline.tag.exec(e);if(t)return!this.lexer.state.inLink&&/^<a /i.test(t[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&/^<\/a>/i.test(t[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&/^<(pre|code|kbd|script)(\s|>)/i.test(t[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(t[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:t[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:t[0]}}link(e){const t=this.rules.inline.link.exec(e);if(t){const n=t[2].trim();if(!this.options.pedantic&&/^</.test(n)){if(!/>$/.test(n))return;const r=W(n.slice(0,-1),"\\");if((n.length-r.length)%2===0)return}else{const r=rt(t[2],"()");if(r>-1){const l=(t[0].indexOf("!")===0?5:4)+t[1].length+r;t[2]=t[2].substring(0,r),t[0]=t[0].substring(0,l).trim(),t[3]=""}}let s=t[2],i="";if(this.options.pedantic){const r=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(s);r&&(s=r[1],i=r[3])}else i=t[3]?t[3].slice(1,-1):"";return s=s.trim(),/^</.test(s)&&(this.options.pedantic&&!/>$/.test(n)?s=s.slice(1):s=s.slice(1,-1)),Ee(t,{href:s&&s.replace(this.rules.inline.anyPunctuation,"$1"),title:i&&i.replace(this.rules.inline.anyPunctuation,"$1")},t[0],this.lexer)}}reflink(e,t){let n;if((n=this.rules.inline.reflink.exec(e))||(n=this.rules.inline.nolink.exec(e))){const s=(n[2]||n[1]).replace(/\s+/g," "),i=t[s.toLowerCase()];if(!i){const r=n[0].charAt(0);return{type:"text",raw:r,text:r}}return Ee(n,i,n[0],this.lexer)}}emStrong(e,t,n=""){let s=this.rules.inline.emStrongLDelim.exec(e);if(!s||s[3]&&n.match(/[\p{L}\p{N}]/u))return;if(!(s[1]||s[2]||"")||!n||this.rules.inline.punctuation.exec(n)){const r=[...s[0]].length-1;let o,l,d=r,c=0;const p=s[0][0]==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(p.lastIndex=0,t=t.slice(-1*e.length+r);(s=p.exec(t))!=null;){if(o=s[1]||s[2]||s[3]||s[4]||s[5]||s[6],!o)continue;if(l=[...o].length,s[3]||s[4]){d+=l;continue}else if((s[5]||s[6])&&r%3&&!((r+l)%3)){c+=l;continue}if(d-=l,d>0)continue;l=Math.min(l,l+d+c);const u=[...s[0]][0].length,f=e.slice(0,r+s.index+u+l);if(Math.min(r,l)%2){const v=f.slice(1,-1);return{type:"em",raw:f,text:v,tokens:this.lexer.inlineTokens(v)}}const $=f.slice(2,-2);return{type:"strong",raw:f,text:$,tokens:this.lexer.inlineTokens($)}}}}codespan(e){const t=this.rules.inline.code.exec(e);if(t){let n=t[2].replace(/\n/g," ");const s=/[^ ]/.test(n),i=/^ /.test(n)&&/ $/.test(n);return s&&i&&(n=n.substring(1,n.length-1)),n=x(n,!0),{type:"codespan",raw:t[0],text:n}}}br(e){const t=this.rules.inline.br.exec(e);if(t)return{type:"br",raw:t[0]}}del(e){const t=this.rules.inline.del.exec(e);if(t)return{type:"del",raw:t[0],text:t[2],tokens:this.lexer.inlineTokens(t[2])}}autolink(e){const t=this.rules.inline.autolink.exec(e);if(t){let n,s;return t[2]==="@"?(n=x(t[1]),s="mailto:"+n):(n=x(t[1]),s=n),{type:"link",raw:t[0],text:n,href:s,tokens:[{type:"text",raw:n,text:n}]}}}url(e){var n;let t;if(t=this.rules.inline.url.exec(e)){let s,i;if(t[2]==="@")s=x(t[0]),i="mailto:"+s;else{let r;do r=t[0],t[0]=((n=this.rules.inline._backpedal.exec(t[0]))==null?void 0:n[0])??"";while(r!==t[0]);s=x(t[0]),t[1]==="www."?i="http://"+t[0]:i=t[0]}return{type:"link",raw:t[0],text:s,href:i,tokens:[{type:"text",raw:s,text:s}]}}}inlineText(e){const t=this.rules.inline.text.exec(e);if(t){let n;return this.lexer.state.inRawBlock?n=t[0]:n=x(t[0]),{type:"text",raw:t[0],text:n}}}}const ot=/^(?: *(?:\n|$))+/,lt=/^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,ct=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,H=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,dt=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,Ce=/(?:[*+-]|\d{1,9}[.)])/,De=w(/^(?!bull |blockCode|fences|blockquote|heading|html)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html))+?)\n {0,3}(=+|-+) *(?:\n+|$)/).replace(/bull/g,Ce).replace(/blockCode/g,/ {4}/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).getRegex(),ce=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,ut=/^[^\n]+/,de=/(?!\s*\])(?:\\.|[^\[\]\\])+/,pt=w(/^ {0,3}\[(label)\]: *(?:\n *)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/).replace("label",de).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),ht=w(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,Ce).getRegex(),J="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",ue=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,gt=w("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))","i").replace("comment",ue).replace("tag",J).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),Pe=w(ce).replace("hr",H).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",J).getRegex(),ft=w(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",Pe).getRegex(),pe={blockquote:ft,code:lt,def:pt,fences:ct,heading:dt,hr:H,html:gt,lheading:De,list:ht,newline:ot,paragraph:Pe,table:P,text:ut},Ie=w("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",H).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code"," {4}[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",J).getRegex(),mt={...pe,table:Ie,paragraph:w(ce).replace("hr",H).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",Ie).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",J).getRegex()},wt={...pe,html:w(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",ue).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:P,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:w(ce).replace("hr",H).replace("heading",` *#{1,6} *[^
]`).replace("lheading",De).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},Ue=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,bt=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,qe=/^( {2,}|\\)\n(?!\s*$)/,kt=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,j="\\p{P}\\p{S}",yt=w(/^((?![*_])[\spunctuation])/,"u").replace(/punctuation/g,j).getRegex(),vt=/\[[^[\]]*?\]\([^\(\)]*?\)|`[^`]*?`|<[^<>]*?>/g,xt=w(/^(?:\*+(?:((?!\*)[punct])|[^\s*]))|^_+(?:((?!_)[punct])|([^\s_]))/,"u").replace(/punct/g,j).getRegex(),$t=w("^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)[punct](\\*+)(?=[\\s]|$)|[^punct\\s](\\*+)(?!\\*)(?=[punct\\s]|$)|(?!\\*)[punct\\s](\\*+)(?=[^punct\\s])|[\\s](\\*+)(?!\\*)(?=[punct])|(?!\\*)[punct](\\*+)(?!\\*)(?=[punct])|[^punct\\s](\\*+)(?=[^punct\\s])","gu").replace(/punct/g,j).getRegex(),Tt=w("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)[punct](_+)(?=[\\s]|$)|[^punct\\s](_+)(?!_)(?=[punct\\s]|$)|(?!_)[punct\\s](_+)(?=[^punct\\s])|[\\s](_+)(?!_)(?=[punct])|(?!_)[punct](_+)(?!_)(?=[punct])","gu").replace(/punct/g,j).getRegex(),Et=w(/\\([punct])/,"gu").replace(/punct/g,j).getRegex(),It=w(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),St=w(ue).replace("(?:-->|$)","-->").getRegex(),Lt=w("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",St).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),G=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,Rt=w(/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/).replace("label",G).replace("href",/<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),Oe=w(/^!?\[(label)\]\[(ref)\]/).replace("label",G).replace("ref",de).getRegex(),He=w(/^!?\[(ref)\](?:\[\])?/).replace("ref",de).getRegex(),zt=w("reflink|nolink(?!\\()","g").replace("reflink",Oe).replace("nolink",He).getRegex(),he={_backpedal:P,anyPunctuation:Et,autolink:It,blockSkip:vt,br:qe,code:bt,del:P,emStrongLDelim:xt,emStrongRDelimAst:$t,emStrongRDelimUnd:Tt,escape:Ue,link:Rt,nolink:He,punctuation:yt,reflink:Oe,reflinkSearch:zt,tag:Lt,text:kt,url:P},At={...he,link:w(/^!?\[(label)\]\((.*?)\)/).replace("label",G).getRegex(),reflink:w(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",G).getRegex()},re={...he,escape:w(Ue).replace("])","~|])").getRegex(),url:w(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,"i").replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/},_t={...re,br:w(qe).replace("{2,}","*").getRegex(),text:w(re.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},Z={normal:pe,gfm:mt,pedantic:wt},D={normal:he,gfm:re,breaks:_t,pedantic:At};class T{constructor(e){b(this,"tokens");b(this,"options");b(this,"state");b(this,"tokenizer");b(this,"inlineQueue");this.tokens=[],this.tokens.links=Object.create(null),this.options=e||M,this.options.tokenizer=this.options.tokenizer||new Q,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};const t={block:Z.normal,inline:D.normal};this.options.pedantic?(t.block=Z.pedantic,t.inline=D.pedantic):this.options.gfm&&(t.block=Z.gfm,this.options.breaks?t.inline=D.breaks:t.inline=D.gfm),this.tokenizer.rules=t}static get rules(){return{block:Z,inline:D}}static lex(e,t){return new T(t).lex(e)}static lexInline(e,t){return new T(t).inlineTokens(e)}lex(e){e=e.replace(/\r\n|\r/g,`
`),this.blockTokens(e,this.tokens);for(let t=0;t<this.inlineQueue.length;t++){const n=this.inlineQueue[t];this.inlineTokens(n.src,n.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(e,t=[]){this.options.pedantic?e=e.replace(/\t/g,"    ").replace(/^ +$/gm,""):e=e.replace(/^( *)(\t+)/gm,(o,l,d)=>l+"    ".repeat(d.length));let n,s,i,r;for(;e;)if(!(this.options.extensions&&this.options.extensions.block&&this.options.extensions.block.some(o=>(n=o.call({lexer:this},e,t))?(e=e.substring(n.raw.length),t.push(n),!0):!1))){if(n=this.tokenizer.space(e)){e=e.substring(n.raw.length),n.raw.length===1&&t.length>0?t[t.length-1].raw+=`
`:t.push(n);continue}if(n=this.tokenizer.code(e)){e=e.substring(n.raw.length),s=t[t.length-1],s&&(s.type==="paragraph"||s.type==="text")?(s.raw+=`
`+n.raw,s.text+=`
`+n.text,this.inlineQueue[this.inlineQueue.length-1].src=s.text):t.push(n);continue}if(n=this.tokenizer.fences(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.heading(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.hr(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.blockquote(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.list(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.html(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.def(e)){e=e.substring(n.raw.length),s=t[t.length-1],s&&(s.type==="paragraph"||s.type==="text")?(s.raw+=`
`+n.raw,s.text+=`
`+n.raw,this.inlineQueue[this.inlineQueue.length-1].src=s.text):this.tokens.links[n.tag]||(this.tokens.links[n.tag]={href:n.href,title:n.title});continue}if(n=this.tokenizer.table(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.lheading(e)){e=e.substring(n.raw.length),t.push(n);continue}if(i=e,this.options.extensions&&this.options.extensions.startBlock){let o=1/0;const l=e.slice(1);let d;this.options.extensions.startBlock.forEach(c=>{d=c.call({lexer:this},l),typeof d=="number"&&d>=0&&(o=Math.min(o,d))}),o<1/0&&o>=0&&(i=e.substring(0,o+1))}if(this.state.top&&(n=this.tokenizer.paragraph(i))){s=t[t.length-1],r&&s.type==="paragraph"?(s.raw+=`
`+n.raw,s.text+=`
`+n.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=s.text):t.push(n),r=i.length!==e.length,e=e.substring(n.raw.length);continue}if(n=this.tokenizer.text(e)){e=e.substring(n.raw.length),s=t[t.length-1],s&&s.type==="text"?(s.raw+=`
`+n.raw,s.text+=`
`+n.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=s.text):t.push(n);continue}if(e){const o="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(o);break}else throw new Error(o)}}return this.state.top=!0,t}inline(e,t=[]){return this.inlineQueue.push({src:e,tokens:t}),t}inlineTokens(e,t=[]){let n,s,i,r=e,o,l,d;if(this.tokens.links){const c=Object.keys(this.tokens.links);if(c.length>0)for(;(o=this.tokenizer.rules.inline.reflinkSearch.exec(r))!=null;)c.includes(o[0].slice(o[0].lastIndexOf("[")+1,-1))&&(r=r.slice(0,o.index)+"["+"a".repeat(o[0].length-2)+"]"+r.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(o=this.tokenizer.rules.inline.blockSkip.exec(r))!=null;)r=r.slice(0,o.index)+"["+"a".repeat(o[0].length-2)+"]"+r.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);for(;(o=this.tokenizer.rules.inline.anyPunctuation.exec(r))!=null;)r=r.slice(0,o.index)+"++"+r.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);for(;e;)if(l||(d=""),l=!1,!(this.options.extensions&&this.options.extensions.inline&&this.options.extensions.inline.some(c=>(n=c.call({lexer:this},e,t))?(e=e.substring(n.raw.length),t.push(n),!0):!1))){if(n=this.tokenizer.escape(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.tag(e)){e=e.substring(n.raw.length),s=t[t.length-1],s&&n.type==="text"&&s.type==="text"?(s.raw+=n.raw,s.text+=n.text):t.push(n);continue}if(n=this.tokenizer.link(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.reflink(e,this.tokens.links)){e=e.substring(n.raw.length),s=t[t.length-1],s&&n.type==="text"&&s.type==="text"?(s.raw+=n.raw,s.text+=n.text):t.push(n);continue}if(n=this.tokenizer.emStrong(e,r,d)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.codespan(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.br(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.del(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.autolink(e)){e=e.substring(n.raw.length),t.push(n);continue}if(!this.state.inLink&&(n=this.tokenizer.url(e))){e=e.substring(n.raw.length),t.push(n);continue}if(i=e,this.options.extensions&&this.options.extensions.startInline){let c=1/0;const p=e.slice(1);let u;this.options.extensions.startInline.forEach(f=>{u=f.call({lexer:this},p),typeof u=="number"&&u>=0&&(c=Math.min(c,u))}),c<1/0&&c>=0&&(i=e.substring(0,c+1))}if(n=this.tokenizer.inlineText(i)){e=e.substring(n.raw.length),n.raw.slice(-1)!=="_"&&(d=n.raw.slice(-1)),l=!0,s=t[t.length-1],s&&s.type==="text"?(s.raw+=n.raw,s.text+=n.text):t.push(n);continue}if(e){const c="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(c);break}else throw new Error(c)}}return t}}class K{constructor(e){b(this,"options");this.options=e||M}code(e,t,n){var i;const s=(i=(t||"").match(/^\S*/))==null?void 0:i[0];return e=e.replace(/\n$/,"")+`
`,s?'<pre><code class="language-'+x(s)+'">'+(n?e:x(e,!0))+`</code></pre>
`:"<pre><code>"+(n?e:x(e,!0))+`</code></pre>
`}blockquote(e){return`<blockquote>
${e}</blockquote>
`}html(e,t){return e}heading(e,t,n){return`<h${t}>${e}</h${t}>
`}hr(){return`<hr>
`}list(e,t,n){const s=t?"ol":"ul",i=t&&n!==1?' start="'+n+'"':"";return"<"+s+i+`>
`+e+"</"+s+`>
`}listitem(e,t,n){return`<li>${e}</li>
`}checkbox(e){return"<input "+(e?'checked="" ':"")+'disabled="" type="checkbox">'}paragraph(e){return`<p>${e}</p>
`}table(e,t){return t&&(t=`<tbody>${t}</tbody>`),`<table>
<thead>
`+e+`</thead>
`+t+`</table>
`}tablerow(e){return`<tr>
${e}</tr>
`}tablecell(e,t){const n=t.header?"th":"td";return(t.align?`<${n} align="${t.align}">`:`<${n}>`)+e+`</${n}>
`}strong(e){return`<strong>${e}</strong>`}em(e){return`<em>${e}</em>`}codespan(e){return`<code>${e}</code>`}br(){return"<br>"}del(e){return`<del>${e}</del>`}link(e,t,n){const s=$e(e);if(s===null)return n;e=s;let i='<a href="'+e+'"';return t&&(i+=' title="'+t+'"'),i+=">"+n+"</a>",i}image(e,t,n){const s=$e(e);if(s===null)return n;e=s;let i=`<img src="${e}" alt="${n}"`;return t&&(i+=` title="${t}"`),i+=">",i}text(e){return e}}class ge{strong(e){return e}em(e){return e}codespan(e){return e}del(e){return e}html(e){return e}text(e){return e}link(e,t,n){return""+n}image(e,t,n){return""+n}br(){return""}}class E{constructor(e){b(this,"options");b(this,"renderer");b(this,"textRenderer");this.options=e||M,this.options.renderer=this.options.renderer||new K,this.renderer=this.options.renderer,this.renderer.options=this.options,this.textRenderer=new ge}static parse(e,t){return new E(t).parse(e)}static parseInline(e,t){return new E(t).parseInline(e)}parse(e,t=!0){let n="";for(let s=0;s<e.length;s++){const i=e[s];if(this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[i.type]){const r=i,o=this.options.extensions.renderers[r.type].call({parser:this},r);if(o!==!1||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(r.type)){n+=o||"";continue}}switch(i.type){case"space":continue;case"hr":{n+=this.renderer.hr();continue}case"heading":{const r=i;n+=this.renderer.heading(this.parseInline(r.tokens),r.depth,st(this.parseInline(r.tokens,this.textRenderer)));continue}case"code":{const r=i;n+=this.renderer.code(r.text,r.lang,!!r.escaped);continue}case"table":{const r=i;let o="",l="";for(let c=0;c<r.header.length;c++)l+=this.renderer.tablecell(this.parseInline(r.header[c].tokens),{header:!0,align:r.align[c]});o+=this.renderer.tablerow(l);let d="";for(let c=0;c<r.rows.length;c++){const p=r.rows[c];l="";for(let u=0;u<p.length;u++)l+=this.renderer.tablecell(this.parseInline(p[u].tokens),{header:!1,align:r.align[u]});d+=this.renderer.tablerow(l)}n+=this.renderer.table(o,d);continue}case"blockquote":{const r=i,o=this.parse(r.tokens);n+=this.renderer.blockquote(o);continue}case"list":{const r=i,o=r.ordered,l=r.start,d=r.loose;let c="";for(let p=0;p<r.items.length;p++){const u=r.items[p],f=u.checked,$=u.task;let v="";if(u.task){const h=this.renderer.checkbox(!!f);d?u.tokens.length>0&&u.tokens[0].type==="paragraph"?(u.tokens[0].text=h+" "+u.tokens[0].text,u.tokens[0].tokens&&u.tokens[0].tokens.length>0&&u.tokens[0].tokens[0].type==="text"&&(u.tokens[0].tokens[0].text=h+" "+u.tokens[0].tokens[0].text)):u.tokens.unshift({type:"text",text:h+" "}):v+=h+" "}v+=this.parse(u.tokens,d),c+=this.renderer.listitem(v,$,!!f)}n+=this.renderer.list(c,o,l);continue}case"html":{const r=i;n+=this.renderer.html(r.text,r.block);continue}case"paragraph":{const r=i;n+=this.renderer.paragraph(this.parseInline(r.tokens));continue}case"text":{let r=i,o=r.tokens?this.parseInline(r.tokens):r.text;for(;s+1<e.length&&e[s+1].type==="text";)r=e[++s],o+=`
`+(r.tokens?this.parseInline(r.tokens):r.text);n+=t?this.renderer.paragraph(o):o;continue}default:{const r='Token with "'+i.type+'" type was not found.';if(this.options.silent)return console.error(r),"";throw new Error(r)}}}return n}parseInline(e,t){t=t||this.renderer;let n="";for(let s=0;s<e.length;s++){const i=e[s];if(this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[i.type]){const r=this.options.extensions.renderers[i.type].call({parser:this},i);if(r!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(i.type)){n+=r||"";continue}}switch(i.type){case"escape":{const r=i;n+=t.text(r.text);break}case"html":{const r=i;n+=t.html(r.text);break}case"link":{const r=i;n+=t.link(r.href,r.title,this.parseInline(r.tokens,t));break}case"image":{const r=i;n+=t.image(r.href,r.title,r.text);break}case"strong":{const r=i;n+=t.strong(this.parseInline(r.tokens,t));break}case"em":{const r=i;n+=t.em(this.parseInline(r.tokens,t));break}case"codespan":{const r=i;n+=t.codespan(r.text);break}case"br":{n+=t.br();break}case"del":{const r=i;n+=t.del(this.parseInline(r.tokens,t));break}case"text":{const r=i;n+=t.text(r.text);break}default:{const r='Token with "'+i.type+'" type was not found.';if(this.options.silent)return console.error(r),"";throw new Error(r)}}}return n}}class U{constructor(e){b(this,"options");this.options=e||M}preprocess(e){return e}postprocess(e){return e}processAllTokens(e){return e}}b(U,"passThroughHooks",new Set(["preprocess","postprocess","processAllTokens"]));var B,ae,je;class Bt{constructor(...e){ke(this,B);b(this,"defaults",le());b(this,"options",this.setOptions);b(this,"parse",N(this,B,ae).call(this,T.lex,E.parse));b(this,"parseInline",N(this,B,ae).call(this,T.lexInline,E.parseInline));b(this,"Parser",E);b(this,"Renderer",K);b(this,"TextRenderer",ge);b(this,"Lexer",T);b(this,"Tokenizer",Q);b(this,"Hooks",U);this.use(...e)}walkTokens(e,t){var s,i;let n=[];for(const r of e)switch(n=n.concat(t.call(this,r)),r.type){case"table":{const o=r;for(const l of o.header)n=n.concat(this.walkTokens(l.tokens,t));for(const l of o.rows)for(const d of l)n=n.concat(this.walkTokens(d.tokens,t));break}case"list":{const o=r;n=n.concat(this.walkTokens(o.items,t));break}default:{const o=r;(i=(s=this.defaults.extensions)==null?void 0:s.childTokens)!=null&&i[o.type]?this.defaults.extensions.childTokens[o.type].forEach(l=>{const d=o[l].flat(1/0);n=n.concat(this.walkTokens(d,t))}):o.tokens&&(n=n.concat(this.walkTokens(o.tokens,t)))}}return n}use(...e){const t=this.defaults.extensions||{renderers:{},childTokens:{}};return e.forEach(n=>{const s={...n};if(s.async=this.defaults.async||s.async||!1,n.extensions&&(n.extensions.forEach(i=>{if(!i.name)throw new Error("extension name required");if("renderer"in i){const r=t.renderers[i.name];r?t.renderers[i.name]=function(...o){let l=i.renderer.apply(this,o);return l===!1&&(l=r.apply(this,o)),l}:t.renderers[i.name]=i.renderer}if("tokenizer"in i){if(!i.level||i.level!=="block"&&i.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");const r=t[i.level];r?r.unshift(i.tokenizer):t[i.level]=[i.tokenizer],i.start&&(i.level==="block"?t.startBlock?t.startBlock.push(i.start):t.startBlock=[i.start]:i.level==="inline"&&(t.startInline?t.startInline.push(i.start):t.startInline=[i.start]))}"childTokens"in i&&i.childTokens&&(t.childTokens[i.name]=i.childTokens)}),s.extensions=t),n.renderer){const i=this.defaults.renderer||new K(this.defaults);for(const r in n.renderer){if(!(r in i))throw new Error(`renderer '${r}' does not exist`);if(r==="options")continue;const o=r,l=n.renderer[o],d=i[o];i[o]=(...c)=>{let p=l.apply(i,c);return p===!1&&(p=d.apply(i,c)),p||""}}s.renderer=i}if(n.tokenizer){const i=this.defaults.tokenizer||new Q(this.defaults);for(const r in n.tokenizer){if(!(r in i))throw new Error(`tokenizer '${r}' does not exist`);if(["options","rules","lexer"].includes(r))continue;const o=r,l=n.tokenizer[o],d=i[o];i[o]=(...c)=>{let p=l.apply(i,c);return p===!1&&(p=d.apply(i,c)),p}}s.tokenizer=i}if(n.hooks){const i=this.defaults.hooks||new U;for(const r in n.hooks){if(!(r in i))throw new Error(`hook '${r}' does not exist`);if(r==="options")continue;const o=r,l=n.hooks[o],d=i[o];U.passThroughHooks.has(r)?i[o]=c=>{if(this.defaults.async)return Promise.resolve(l.call(i,c)).then(u=>d.call(i,u));const p=l.call(i,c);return d.call(i,p)}:i[o]=(...c)=>{let p=l.apply(i,c);return p===!1&&(p=d.apply(i,c)),p}}s.hooks=i}if(n.walkTokens){const i=this.defaults.walkTokens,r=n.walkTokens;s.walkTokens=function(o){let l=[];return l.push(r.call(this,o)),i&&(l=l.concat(i.call(this,o))),l}}this.defaults={...this.defaults,...s}}),this}setOptions(e){return this.defaults={...this.defaults,...e},this}lexer(e,t){return T.lex(e,t??this.defaults)}parser(e,t){return E.parse(e,t??this.defaults)}}B=new WeakSet,ae=function(e,t){return(n,s)=>{const i={...s},r={...this.defaults,...i};this.defaults.async===!0&&i.async===!1&&(r.silent||console.warn("marked(): The async option was set to true by an extension. The async: false option sent to parse will be ignored."),r.async=!0);const o=N(this,B,je).call(this,!!r.silent,!!r.async);if(typeof n>"u"||n===null)return o(new Error("marked(): input parameter is undefined or null"));if(typeof n!="string")return o(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(n)+", string expected"));if(r.hooks&&(r.hooks.options=r),r.async)return Promise.resolve(r.hooks?r.hooks.preprocess(n):n).then(l=>e(l,r)).then(l=>r.hooks?r.hooks.processAllTokens(l):l).then(l=>r.walkTokens?Promise.all(this.walkTokens(l,r.walkTokens)).then(()=>l):l).then(l=>t(l,r)).then(l=>r.hooks?r.hooks.postprocess(l):l).catch(o);try{r.hooks&&(n=r.hooks.preprocess(n));let l=e(n,r);r.hooks&&(l=r.hooks.processAllTokens(l)),r.walkTokens&&this.walkTokens(l,r.walkTokens);let d=t(l,r);return r.hooks&&(d=r.hooks.postprocess(d)),d}catch(l){return o(l)}}},je=function(e,t){return n=>{if(n.message+=`
Please report this to https://github.com/markedjs/marked.`,e){const s="<p>An error occurred:</p><pre>"+x(n.message+"",!0)+"</pre>";return t?Promise.resolve(s):s}if(t)return Promise.reject(n);throw n}};const _=new Bt;function m(a,e){return _.parse(a,e)}m.options=m.setOptions=function(a){return _.setOptions(a),m.defaults=_.defaults,_e(m.defaults),m};m.getDefaults=le;m.defaults=M;m.use=function(...a){return _.use(...a),m.defaults=_.defaults,_e(m.defaults),m};m.walkTokens=function(a,e){return _.walkTokens(a,e)};m.parseInline=_.parseInline;m.Parser=E;m.parser=E.parse;m.Renderer=K;m.TextRenderer=ge;m.Lexer=T;m.lexer=T.lex;m.Tokenizer=Q;m.Hooks=U;m.parse=m;m.options;m.setOptions;m.use;m.walkTokens;m.parseInline;E.parse;T.lex;m.setOptions({breaks:!0,gfm:!0});function Ne(a){const e=/^---\n([\s\S]*?)\n---\n/,t=a.match(e);if(!t)return{metadata:{},content:a};const n=t[1],s=a.slice(t[0].length),i={};return n.split(`
`).forEach(r=>{const o=r.indexOf(":");if(o>0){const l=r.slice(0,o).trim(),d=r.slice(o+1).trim().replace(/^["']|["']$/g,"");i[l]=d}}),{metadata:i,content:s}}function Mt(a){return m.parse(a)}function Ct(a,e=150){const{content:t}=Ne(a),n=t.replace(/#{1,6}\s+/g,"").replace(/\*\*|__/g,"").replace(/\*|_/g,"").replace(/\[([^\]]+)\]\([^)]+\)/g,"$1").replace(/`([^`]+)`/g,"$1").replace(/\n+/g," ").trim();return n.length<=e?n:n.slice(0,e).trim()+"..."}function C(a){return new Date(a).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"})}const I={omdb:{key:localStorage.getItem("omdb_api_key")||"5a9c220",baseUrl:"https://www.omdbapi.com/"},openLibrary:{baseUrl:"https://openlibrary.org"},deezer:{baseUrl:"https://api.deezer.com"}};function Dt(a){a.omdb&&(localStorage.setItem("omdb_api_key",a.omdb),I.omdb.key=a.omdb)}function Pt(){return{omdb:I.omdb.key}}function Ut(a){switch(a){case"film":return!!I.omdb.key;case"book":return!0;case"song":return!0;default:return!1}}async function qt(a){if(!I.omdb.key)throw new Error("OMDb API key not configured. Please add it in the admin settings.");const e=`${I.omdb.baseUrl}?apikey=${I.omdb.key}&s=${encodeURIComponent(a)}&type=movie`,n=await(await fetch(e)).json();if(n.Error){if(n.Error==="Movie not found!")return[];throw new Error(n.Error)}return(n.Search||[]).map(s=>({id:s.imdbID,title:s.Title,year:s.Year,imageUrl:s.Poster!=="N/A"?s.Poster:null,externalUrl:`https://www.imdb.com/title/${s.imdbID}`,type:"film"}))}async function Ot(a){const e=`${I.openLibrary.baseUrl}/search.json?q=${encodeURIComponent(a)}&limit=10`,n=await(await fetch(e)).json();return!n.docs||n.docs.length===0?[]:n.docs.map(s=>{var i;return{id:((i=s.key)==null?void 0:i.replace("/works/",""))||s.cover_edition_key||String(Math.random()),title:s.title||"Unknown Title",author:s.author_name?s.author_name.join(", "):"Unknown",year:s.first_publish_year?String(s.first_publish_year):"",imageUrl:s.cover_i?`https://covers.openlibrary.org/b/id/${s.cover_i}-M.jpg`:null,externalUrl:s.key?`https://openlibrary.org${s.key}`:`https://openlibrary.org/search?q=${encodeURIComponent(a)}`,type:"book"}})}async function Ht(a){const e=`https://corsproxy.io/?${encodeURIComponent(`${I.deezer.baseUrl}/search?q=${encodeURIComponent(a)}&limit=10`)}`;try{const n=await(await fetch(e)).json();if(n.error)throw new Error(n.error.message||"Deezer search failed");return(n.data||[]).map(s=>{var i,r,o,l;return{id:s.id.toString(),title:s.title,artist:((i=s.artist)==null?void 0:i.name)||"Unknown Artist",album:((r=s.album)==null?void 0:r.title)||"",year:"",imageUrl:((o=s.album)==null?void 0:o.cover_medium)||((l=s.album)==null?void 0:l.cover)||null,externalUrl:s.link,type:"song"}})}catch{return Nt(a)}}async function jt(a){const e=`https://corsproxy.io/?${encodeURIComponent(`${I.deezer.baseUrl}/search/album?q=${encodeURIComponent(a)}&limit=10`)}`;try{const n=await(await fetch(e)).json();if(n.error)throw new Error(n.error.message||"Deezer album search failed");return(n.data||[]).map(s=>{var i;return{id:s.id.toString(),title:s.title,artist:((i=s.artist)==null?void 0:i.name)||"Unknown Artist",year:"",imageUrl:s.cover_medium||s.cover_big||s.cover||null,externalUrl:s.link,type:"album"}})}catch{throw new Error("Album search is currently unavailable. Please try again later.")}}async function Nt(a){const e=`https://www.theaudiodb.com/api/v1/json/2/search.php?s=${encodeURIComponent(a)}`;try{const n=await(await fetch(e)).json();return!n.artists||n.artists.length===0?[]:n.artists.slice(0,10).map(s=>({id:s.idArtist,title:s.strArtist,artist:s.strGenre||"Music",year:s.intFormedYear||"",imageUrl:s.strArtistThumb||null,externalUrl:s.strWebsite?`https://${s.strWebsite}`:`https://www.theaudiodb.com/artist/${s.idArtist}`,type:"song"}))}catch{throw new Error("Song search is currently unavailable. Please try again later.")}}async function Wt(a,e){if(!a.trim())return[];switch(e){case"film":return qt(a);case"book":return Ot(a);case"song":return Ht(a);case"album":return jt(a);default:throw new Error(`Unknown media type: ${e}`)}}function S(a){return{film:{label:"Film",color:"#ef4444"},book:{label:"Book",color:"#3b82f6"},song:{label:"Song",color:"#22c55e"},album:{label:"Album",color:"#a855f7"}}[a]||{label:a,color:"#6366f1"}}const Zt={apiKey:"AIzaSyDGOa35ykPxXLNVTGKqBwn-DJWHuXaUDHg",authDomain:"zuber-5a216.firebaseapp.com",projectId:"zuber-5a216",storageBucket:"zuber-5a216.firebasestorage.app",messagingSenderId:"371730965722",appId:"1:371730965722:web:735ce1de62a6541a5c31e3",measurementId:"G-N452GHJNT5"},Ft=Ve(Zt),R=Xe(Ft),ee="writings",te="media";let q=[],O=[],V=!1,X=!1;function Qt(a,e){const t=ye(F(R,ee));ve(t,s=>{q=s.docs.map(i=>({id:i.id,...i.data()})),V=!0,a&&a(q)},s=>{console.error("Error listening to writings:",s),V=!0});const n=ye(F(R,te));ve(n,s=>{O=s.docs.map(i=>({id:i.id,...i.data()})),X=!0,e&&e(O)},s=>{console.error("Error listening to media:",s),X=!0})}async function Gt(){if(V)return{writings:q};try{return q=(await Re(F(R,ee))).docs.map(e=>({id:e.id,...e.data()})),V=!0,{writings:q}}catch(a){return console.error("Error getting writings:",a),{writings:[]}}}async function Kt(){if(X)return{media:O};try{return O=(await Re(F(R,te))).docs.map(e=>({id:e.id,...e.data()})),X=!0,{media:O}}catch(a){return console.error("Error getting media:",a),{media:[]}}}async function Vt(a,e,t){const n=Date.now().toString(36)+Math.random().toString(36).substr(2);try{return await Ae(Y(R,ee,n),{title:a,date:e,content:t,createdAt:new Date().toISOString()}),n}catch(s){throw console.error("Error adding writing:",s),s}}async function Xt(a){try{await ze(Y(R,ee,a))}catch(e){throw console.error("Error deleting writing:",e),e}}async function Yt(a,e,t){const n=Date.now().toString(36)+Math.random().toString(36).substr(2);try{return await Ae(Y(R,te,n),{type:a.type,title:a.title,artist:a.artist||a.author||"",year:a.year||"",imageUrl:a.imageUrl,externalUrl:a.externalUrl,rating:e,review:t,date:new Date().toISOString().split("T")[0],createdAt:new Date().toISOString()}),n}catch(s){throw console.error("Error adding media review:",s),s}}async function Jt(a){try{await ze(Y(R,te,a))}catch(e){throw console.error("Error deleting media review:",e),e}}const fe="zuber_seth_admin_auth",en="admin123";function tn(){return localStorage.getItem(fe)==="authenticated"}function nn(a){const e=localStorage.getItem("admin_password")||en;return a===e?(localStorage.setItem(fe,"authenticated"),!0):!1}function sn(){localStorage.removeItem(fe)}function rn(a){localStorage.setItem("admin_password",a)}async function ne(){return await Gt()}async function me(){return await Kt()}async function an(a,e,t){return await Vt(a,e,t)}async function on(a){return await Xt(a)}async function ln(a,e,t){return await Yt(a,e,t)}async function cn(a){return await Jt(a)}function We(a){a.innerHTML=`
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
    `;const e=document.getElementById("login-form"),t=document.getElementById("login-error");e.addEventListener("submit",n=>{n.preventDefault();const s=document.getElementById("password-input").value;nn(s)?Ze(a):(t.textContent="Incorrect password",t.style.display="block")})}function Ze(a){a.innerHTML=`
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
    `;const e=document.querySelectorAll(".admin-tab");e.forEach(t=>{t.addEventListener("click",()=>{e.forEach(n=>n.classList.remove("active")),t.classList.add("active"),Se(t.dataset.tab)})}),document.getElementById("logout-btn").addEventListener("click",()=>{sn(),We(a)}),Se("writing")}function Se(a){const e=document.getElementById("admin-content");switch(a){case"writing":dn(e);break;case"media":un(e);break;case"manage":oe(e);break;case"settings":pn(e);break}}function dn(a){a.innerHTML=`
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
    `;const e=document.getElementById("upload-zone"),t=document.getElementById("file-input"),n=document.getElementById("file-preview");e.addEventListener("click",()=>t.click()),e.addEventListener("dragover",i=>{i.preventDefault(),e.classList.add("dragover")}),e.addEventListener("dragleave",()=>{e.classList.remove("dragover")}),e.addEventListener("drop",i=>{i.preventDefault(),e.classList.remove("dragover");const r=i.dataTransfer.files[0];r&&s(r)}),t.addEventListener("change",i=>{const r=i.target.files[0];r&&s(r)});function s(i){const r=new FileReader;r.onload=o=>{const l=o.target.result;let d=i.name.replace(/\.(md|markdown|txt)$/,"").replace(/-/g," ");const c=l.match(/^#\s+(.+)$/m);c&&(d=c[1]),document.getElementById("writing-title").value=d,document.getElementById("writing-date").value=new Date().toISOString().split("T")[0],document.getElementById("writing-content").value=l,n.style.display="block",e.style.display="none"},r.readAsText(i)}document.getElementById("save-writing").addEventListener("click",async()=>{const i=document.getElementById("writing-title").value.trim(),r=document.getElementById("writing-date").value,o=document.getElementById("writing-content").value;if(!i||!r||!o){y("Please fill in all fields","error");return}try{await an(i,r,o),y("Writing saved successfully!","success"),n.style.display="none",e.style.display="block",document.getElementById("writing-title").value="",document.getElementById("writing-content").value=""}catch(l){y("Error saving writing: "+l.message,"error")}})}function un(a){a.innerHTML=`
        <div class="card">
            <h3 style="margin-bottom: var(--space-6);">Add Media Review</h3>
            
            <div class="search-container">
                <div class="search-form">
                    <select class="search-type-select" id="media-type">
                        <option value="film">Film</option>
                        <option value="book">Book</option>
                        <option value="song">Song</option>
                        <option value="album">Album</option>
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
    `;let e=null,t=0;const n=document.getElementById("media-search"),s=document.getElementById("search-btn"),i=document.getElementById("media-type"),r=document.getElementById("search-results"),o=document.getElementById("review-form");i.addEventListener("change",()=>{const h=i.value;Ut(h)||y(`${S(h).label} search requires API configuration. Check Settings.`,"error")});async function l(){const h=n.value.trim(),g=i.value;if(h){r.innerHTML='<div class="loading"><div class="spinner"></div></div>',o.style.display="none",e=null;try{const k=await Wt(h,g);d(k)}catch(k){r.innerHTML=`<p style="color: var(--color-error);">${k.message}</p>`}}}s.addEventListener("click",l),n.addEventListener("keypress",h=>{h.key==="Enter"&&l()});function d(h){if(h.length===0){r.innerHTML='<p style="color: var(--color-text-muted);">No results found</p>';return}r.innerHTML=h.map(g=>`
            <div class="search-result-item" data-id="${g.id}">
                <div class="search-result-image">
                    ${g.imageUrl?`<img src="${g.imageUrl}" alt="${g.title}">`:`<div style="display:flex;align-items:center;justify-content:center;height:100%;font-size:1rem;color:var(--color-text-muted);">${S(g.type).label}</div>`}
                </div>
                <div class="search-result-info">
                    <div class="search-result-title">${g.title}</div>
                    <div class="search-result-meta">${g.artist||g.author||""} ${g.year?`(${g.year})`:""}</div>
                </div>
            </div>
        `).join(""),window._searchResults=h,r.querySelectorAll(".search-result-item").forEach(g=>{g.addEventListener("click",()=>{r.querySelectorAll(".search-result-item").forEach(k=>k.classList.remove("selected")),g.classList.add("selected"),e=window._searchResults.find(k=>k.id===g.dataset.id),c(e)})})}function c(h){const g=document.getElementById("selected-media-info");g.innerHTML=`
            <div style="display: flex; align-items: center; gap: var(--space-4);">
                ${h.imageUrl?`<img src="${h.imageUrl}" style="width: 60px; height: 60px; object-fit: cover; border-radius: var(--radius-md);">`:""}
                <div>
                    <strong>${h.title}</strong><br>
                    <span style="color: var(--color-text-muted);">${h.artist||h.author||""} ${h.year?`(${h.year})`:""}</span>
                </div>
            </div>
        `,t=0,p.value=0,$(0),document.getElementById("review-text").value="",document.getElementById("word-count").textContent="0",o.style.display="block"}const p=document.getElementById("rating-slider"),u=document.getElementById("rating-stars"),f=document.getElementById("rating-value");function $(h){const g=h/2;t=g;let k="";for(let A=1;A<=5;A++)g>=A?k+="★":g>=A-.5?k+="⯨":k+="☆";u.textContent=k,f.textContent=g.toFixed(1)}p.addEventListener("input",h=>{$(parseInt(h.target.value))}),$(0);const v=document.getElementById("review-text");v.addEventListener("input",()=>{const g=v.value.trim().split(/\s+/).filter(k=>k.length>0).length;document.getElementById("word-count").textContent=g,g>100?document.getElementById("word-count").style.color="var(--color-error)":document.getElementById("word-count").style.color=""}),document.getElementById("save-review").addEventListener("click",async()=>{if(!e){y("Please select a media item","error");return}if(t===0){y("Please select a rating","error");return}const h=v.value.trim();if(h.split(/\s+/).filter(k=>k.length>0).length>100){y("Review must be 100 words or less","error");return}try{await ln(e,t,h),y("Review saved successfully!","success"),r.innerHTML="",o.style.display="none",n.value="",e=null}catch(k){y("Error saving review: "+k.message,"error")}})}async function oe(a){a.innerHTML='<div class="loading"><div class="spinner"></div></div>';const e=await ne(),t=await me(),n=e.writings,s=t.media;a.innerHTML=`
        <div class="card" style="margin-bottom: var(--space-6);">
            <h3 style="margin-bottom: var(--space-6);">Writings (${n.length})</h3>
            <div class="content-list" id="writings-list">
                ${n.length===0?'<p style="color: var(--color-text-muted);">No writings yet</p>':n.map(i=>`
                        <div class="content-item">
                            <div class="content-item-info">
                                <div class="content-item-title">${i.title}</div>
                                <div class="content-item-meta">${C(i.date)}</div>
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
                                ${i.imageUrl?`<img src="${i.imageUrl}" alt="${i.title}">`:`<div style="display:flex;align-items:center;justify-content:center;height:100%;background:var(--color-bg-secondary);font-size:0.75rem;color:var(--color-text-muted);">${S(i.type).label}</div>`}
                            </div>
                            <div class="content-item-info">
                                <div class="content-item-title">${i.title}</div>
                                <div class="content-item-meta">
                                    ${S(i.type).label} • ${i.rating} stars • ${C(i.date)}
                                </div>
                            </div>
                            <div class="content-item-actions">
                                <button class="btn btn-danger btn-sm" data-delete-media="${i.id}">Delete</button>
                            </div>
                        </div>
                    `).join("")}
            </div>
        </div>
    `,a.querySelectorAll("[data-delete-writing]").forEach(i=>{i.addEventListener("click",async()=>{if(confirm("Are you sure you want to delete this writing?"))try{await on(i.dataset.deleteWriting),y("Writing deleted","success"),oe(a)}catch(r){y("Error deleting: "+r.message,"error")}})}),a.querySelectorAll("[data-delete-media]").forEach(i=>{i.addEventListener("click",async()=>{if(confirm("Are you sure you want to delete this review?"))try{await cn(i.dataset.deleteMedia),y("Review deleted","success"),oe(a)}catch(r){y("Error deleting: "+r.message,"error")}})})}function pn(a){const e=Pt();a.innerHTML=`
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
    `,document.getElementById("change-password").addEventListener("click",()=>{const t=document.getElementById("new-password").value;if(t.length<4){y("Password must be at least 4 characters","error");return}rn(t),y("Password changed successfully","success"),document.getElementById("new-password").value=""}),document.getElementById("save-api-keys").addEventListener("click",()=>{Dt({omdb:document.getElementById("omdb-key").value.trim()}),y("API keys saved successfully","success")})}function y(a,e="success"){let t=document.querySelector(".toast-container");t||(t=document.createElement("div"),t.className="toast-container",document.body.appendChild(t));const n=document.createElement("div");n.className=`toast toast-${e}`,n.textContent=a,t.appendChild(n),setTimeout(()=>{n.remove()},3e3)}const z=new Ye,L=document.getElementById("main-content");function Fe(a){let e="";for(let t=1;t<=5;t++)a>=t?e+='<span class="star filled">★</span>':a>=t-.5?e+='<span class="star half">★</span>':e+='<span class="star">★</span>';return e}function se(){L.innerHTML=`
        <div class="loading">
            <div class="spinner"></div>
        </div>
    `}z.on("/",async()=>{se();const a=await ne(),e=await me(),t=a.writings,n=e.media,s=[...t].sort((r,o)=>new Date(o.date)-new Date(r.date)).slice(0,8),i=[...n].sort((r,o)=>new Date(o.date)-new Date(r.date)).slice(0,8);L.innerHTML=`
        <div class="container home-container fade-in">
            <!-- Writing Shelf -->
            <section class="bookshelf">
                <div class="shelf-header">
                    <h2 class="shelf-title">Writing</h2>
                    ${t.length>0?'<a href="#/writing" class="shelf-link">View all</a>':""}
                </div>
                <div class="shelf-content">
                    ${s.length===0?'<div class="shelf-empty">No writings yet</div>':`<div class="shelf-scroll">
                            ${s.map(r=>`
                                <a href="#/writing/${r.id}" class="shelf-item shelf-item-writing">
                                    <div class="shelf-item-spine"></div>
                                    <div class="shelf-item-content">
                                        <span class="shelf-item-date">${C(r.date)}</span>
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
                    ${n.length>0?'<a href="#/media" class="shelf-link">View all</a>':""}
                </div>
                <div class="shelf-content">
                    ${i.length===0?'<div class="shelf-empty">No media yet</div>':`<div class="shelf-scroll">
                            ${i.map(r=>`
                                <a href="#/media" class="shelf-item shelf-item-media">
                                    ${r.imageUrl?`<img src="${r.imageUrl}" alt="${r.title}" class="shelf-item-cover">`:`<div class="shelf-item-cover shelf-item-cover-placeholder">${S(r.type).label}</div>`}
                                    <div class="shelf-item-info">
                                        <span class="shelf-item-type">${S(r.type).label}</span>
                                        <div class="shelf-item-rating">${Fe(r.rating)}</div>
                                    </div>
                                </a>
                            `).join("")}
                          </div>`}
                </div>
                <div class="shelf-base"></div>
            </section>
        </div>
    `});z.on("/writing",async()=>{se();const e=(await ne()).writings;if(e.length===0){L.innerHTML=`
            <div class="container">
                <div class="section-header fade-in">
                    <h1 class="section-title">Writing</h1>
                </div>
                <div class="empty-state">
                    <h2 class="empty-state-title">No writings yet</h2>
                    <p class="empty-state-text">Check back soon for new content.</p>
                </div>
            </div>
        `;return}const t=[...e].sort((n,s)=>new Date(s.date)-new Date(n.date));L.innerHTML=`
        <div class="container">
            <div class="section-header fade-in">
                <h1 class="section-title">Writing</h1>
            </div>
            <div class="writings-grid fade-in">
                ${t.map(n=>`
                    <a href="#/writing/${n.id}" class="card card-clickable writing-card">
                        <span class="writing-card-date">${C(n.date)}</span>
                        <h2 class="writing-card-title">${n.title}</h2>
                        <p class="writing-card-excerpt">${Ct(n.content)}</p>
                    </a>
                `).join("")}
            </div>
        </div>
    `});z.on("/writing/:id",async a=>{se();const n=(await ne()).writings.find(o=>o.id===a.id);if(!n){z.show404();return}const{metadata:s,content:i}=Ne(n.content),r=Mt(i);L.innerHTML=`
        <div class="container article-container fade-in">
            <div class="article-header">
                <a href="#/writing" class="article-back">← Back to Writing</a>
                <h1 class="article-title">${n.title}</h1>
                <p class="article-date">${C(n.date)}</p>
            </div>
            <div class="article-content">
                ${r}
            </div>
        </div>
    `});z.on("/media",async()=>{se();const e=(await me()).media;if(e.length===0){L.innerHTML=`
            <div class="container">
                <div class="section-header fade-in">
                    <h1 class="section-title">Media</h1>
                </div>
                <div class="empty-state">
                    <h2 class="empty-state-title">No reviews yet</h2>
                    <p class="empty-state-text">Check back soon for media reviews.</p>
                </div>
            </div>
        `;return}const t=[...e].sort((s,i)=>new Date(i.date)-new Date(s.date)),n=[...new Set(t.map(s=>s.type))];L.innerHTML=`
        <div class="container">
            <div class="section-header fade-in">
                <h1 class="section-title">Media</h1>
            </div>
            
            <div class="media-filters fade-in">
                <button class="filter-btn active" data-filter="all">All</button>
                ${n.map(s=>`
                    <button class="filter-btn" data-filter="${s}">${S(s).label}s</button>
                `).join("")}
            </div>
            
            <div class="media-grid fade-in" id="media-grid">
                ${Le(t)}
            </div>
        </div>
    `,document.querySelectorAll(".filter-btn").forEach(s=>{s.addEventListener("click",()=>{document.querySelectorAll(".filter-btn").forEach(o=>o.classList.remove("active")),s.classList.add("active");const i=s.dataset.filter,r=i==="all"?t:t.filter(o=>o.type===i);document.getElementById("media-grid").innerHTML=Le(r)})})});function Le(a){return a.map(e=>`
        <div class="card media-card">
            <div class="media-card-image">
                ${e.imageUrl?`<img src="${e.imageUrl}" alt="${e.title}">`:`<div style="display:flex;align-items:center;justify-content:center;height:100%;font-size:1rem;color:var(--color-text-muted);background:var(--color-bg-tertiary);">${S(e.type).label}</div>`}
                <div class="media-card-overlay">
                    <a href="${e.externalUrl}" target="_blank" rel="noopener noreferrer" class="media-card-link">
                        View on ${e.type==="film"?"IMDb":e.type==="book"?"Open Library":"Deezer"} →
                    </a>
                </div>
            </div>
            <div class="media-card-content">
                <span class="media-card-type">${S(e.type).label}</span>
                <h3 class="media-card-title">${e.title}</h3>
                <div class="star-rating">${Fe(e.rating)}</div>
                ${e.review?`<p class="media-card-review">${e.review}</p>`:""}
                <span class="media-card-date">${C(e.date)}</span>
            </div>
        </div>
    `).join("")}z.on("/admin",()=>{tn()?Ze(L):We(L)});Qt(()=>{(window.location.hash==="#/"||window.location.hash===""||window.location.hash.startsWith("#/writing"))&&z.navigate(window.location.hash||"#/")},()=>{(window.location.hash==="#/"||window.location.hash===""||window.location.hash==="#/media")&&z.navigate(window.location.hash||"#/")});console.log("Zuber Seth Personal Website initialized with Firebase");
