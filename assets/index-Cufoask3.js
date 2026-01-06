var tt=Object.defineProperty;var Ee=a=>{throw TypeError(a)};var nt=(a,e,t)=>e in a?tt(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t;var y=(a,e,t)=>nt(a,typeof e!="symbol"?e+"":e,t),st=(a,e,t)=>e.has(a)||Ee("Cannot "+t);var Ie=(a,e,t)=>e.has(a)?Ee("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(a):e.set(a,t);var V=(a,e,t)=>(st(a,e,"access private method"),t);import{initializeApp as it}from"https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";import{getFirestore as rt,query as Te,collection as X,onSnapshot as Re,getDocs as De,deleteDoc as Pe,doc as ie,setDoc as Ue}from"https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function t(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(s){if(s.ep)return;s.ep=!0;const i=t(s);fetch(s.href,i)}})();class at{constructor(){this.routes={},this.currentRoute=null,window.addEventListener("hashchange",()=>this.handleRoute()),window.addEventListener("load",()=>this.handleRoute())}on(e,t){return this.routes[e]=t,this}navigate(e){window.location.hash=e}handleRoute(){const e=window.location.hash.slice(1)||"/",[t,...n]=e.split("/").filter(Boolean),s="/"+(t||"");this.updateNavLinks(s);let i=this.routes[s],r=n;if(!i){for(const[o,l]of Object.entries(this.routes))if(o.includes(":")){const d=o.split("/").filter(Boolean),c=[t,...n];if(d.length===c.length){let p=!0;r={};for(let u=0;u<d.length;u++)if(d[u].startsWith(":"))r[d[u].slice(1)]=c[u];else if(d[u]!==c[u]){p=!1;break}if(p){i=l;break}}}}i?(this.currentRoute=s,Promise.resolve(i(r)).catch(o=>{console.error("Route handler error:",o)})):this.show404()}updateNavLinks(e){document.querySelectorAll(".nav-link").forEach(t=>{const n=t.getAttribute("href").slice(1);n===e||e.startsWith(n)&&n!=="/"?t.classList.add("active"):t.classList.remove("active")})}show404(){const e=document.getElementById("main-content");e.innerHTML=`
            <div class="container">
                <div class="empty-state fade-in">
                    <h2 class="empty-state-title">Page Not Found</h2>
                    <p class="empty-state-text">The page you're looking for doesn't exist.</p>
                    <br>
                    <a href="#/" class="btn btn-primary">Go Home</a>
                </div>
            </div>
        `}}function fe(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}let D=fe();function qe(a){D=a}const He=/[&<>"']/,ot=new RegExp(He.source,"g"),Ne=/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,lt=new RegExp(Ne.source,"g"),ct={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},Se=a=>ct[a];function x(a,e){if(e){if(He.test(a))return a.replace(ot,Se)}else if(Ne.test(a))return a.replace(lt,Se);return a}const dt=/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig;function ut(a){return a.replace(dt,(e,t)=>(t=t.toLowerCase(),t==="colon"?":":t.charAt(0)==="#"?t.charAt(1)==="x"?String.fromCharCode(parseInt(t.substring(2),16)):String.fromCharCode(+t.substring(1)):""))}const pt=/(^|[^\[])\^/g;function b(a,e){let t=typeof a=="string"?a:a.source;e=e||"";const n={replace:(s,i)=>{let r=typeof i=="string"?i:i.source;return r=r.replace(pt,"$1"),t=t.replace(s,r),n},getRegex:()=>new RegExp(t,e)};return n}function Le(a){try{a=encodeURI(a).replace(/%25/g,"%")}catch{return null}return a}const N={exec:()=>null};function ze(a,e){const t=a.replace(/\|/g,(i,r,o)=>{let l=!1,d=r;for(;--d>=0&&o[d]==="\\";)l=!l;return l?"|":" |"}),n=t.split(/ \|/);let s=0;if(n[0].trim()||n.shift(),n.length>0&&!n[n.length-1].trim()&&n.pop(),e)if(n.length>e)n.splice(e);else for(;n.length<e;)n.push("");for(;s<n.length;s++)n[s]=n[s].trim().replace(/\\\|/g,"|");return n}function K(a,e,t){const n=a.length;if(n===0)return"";let s=0;for(;s<n&&a.charAt(n-s-1)===e;)s++;return a.slice(0,n-s)}function ht(a,e){if(a.indexOf(e[1])===-1)return-1;let t=0;for(let n=0;n<a.length;n++)if(a[n]==="\\")n++;else if(a[n]===e[0])t++;else if(a[n]===e[1]&&(t--,t<0))return n;return-1}function Ae(a,e,t,n){const s=e.href,i=e.title?x(e.title):null,r=a[1].replace(/\\([\[\]])/g,"$1");if(a[0].charAt(0)!=="!"){n.state.inLink=!0;const o={type:"link",raw:t,href:s,title:i,text:r,tokens:n.inlineTokens(r)};return n.state.inLink=!1,o}return{type:"image",raw:t,href:s,title:i,text:x(r)}}function gt(a,e){const t=a.match(/^(\s+)(?:```)/);if(t===null)return e;const n=t[1];return e.split(`
`).map(s=>{const i=s.match(/^\s+/);if(i===null)return s;const[r]=i;return r.length>=n.length?s.slice(n.length):s}).join(`
`)}class J{constructor(e){y(this,"options");y(this,"rules");y(this,"lexer");this.options=e||D}space(e){const t=this.rules.block.newline.exec(e);if(t&&t[0].length>0)return{type:"space",raw:t[0]}}code(e){const t=this.rules.block.code.exec(e);if(t){const n=t[0].replace(/^ {1,4}/gm,"");return{type:"code",raw:t[0],codeBlockStyle:"indented",text:this.options.pedantic?n:K(n,`
`)}}}fences(e){const t=this.rules.block.fences.exec(e);if(t){const n=t[0],s=gt(n,t[3]||"");return{type:"code",raw:n,lang:t[2]?t[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):t[2],text:s}}}heading(e){const t=this.rules.block.heading.exec(e);if(t){let n=t[2].trim();if(/#$/.test(n)){const s=K(n,"#");(this.options.pedantic||!s||/ $/.test(s))&&(n=s.trim())}return{type:"heading",raw:t[0],depth:t[1].length,text:n,tokens:this.lexer.inline(n)}}}hr(e){const t=this.rules.block.hr.exec(e);if(t)return{type:"hr",raw:t[0]}}blockquote(e){const t=this.rules.block.blockquote.exec(e);if(t){let n=t[0].replace(/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,`
    $1`);n=K(n.replace(/^ *>[ \t]?/gm,""),`
`);const s=this.lexer.state.top;this.lexer.state.top=!0;const i=this.lexer.blockTokens(n);return this.lexer.state.top=s,{type:"blockquote",raw:t[0],tokens:i,text:n}}}list(e){let t=this.rules.block.list.exec(e);if(t){let n=t[1].trim();const s=n.length>1,i={type:"list",raw:"",ordered:s,start:s?+n.slice(0,-1):"",loose:!1,items:[]};n=s?`\\d{1,9}\\${n.slice(-1)}`:`\\${n}`,this.options.pedantic&&(n=s?n:"[*+-]");const r=new RegExp(`^( {0,3}${n})((?:[	 ][^\\n]*)?(?:\\n|$))`);let o="",l="",d=!1;for(;e;){let c=!1;if(!(t=r.exec(e))||this.rules.block.hr.test(e))break;o=t[0],e=e.substring(o.length);let p=t[2].split(`
`,1)[0].replace(/^\t+/,U=>" ".repeat(3*U.length)),u=e.split(`
`,1)[0],f=0;this.options.pedantic?(f=2,l=p.trimStart()):(f=t[2].search(/[^ ]/),f=f>4?1:f,l=p.slice(f),f+=t[1].length);let $=!1;if(!p&&/^ *$/.test(u)&&(o+=u+`
`,e=e.substring(u.length+1),c=!0),!c){const U=new RegExp(`^ {0,${Math.min(3,f-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),q=new RegExp(`^ {0,${Math.min(3,f-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),Q=new RegExp(`^ {0,${Math.min(3,f-1)}}(?:\`\`\`|~~~)`),G=new RegExp(`^ {0,${Math.min(3,f-1)}}#`);for(;e;){const B=e.split(`
`,1)[0];if(u=B,this.options.pedantic&&(u=u.replace(/^ {1,4}(?=( {4})*[^ ])/g,"  ")),Q.test(u)||G.test(u)||U.test(u)||q.test(e))break;if(u.search(/[^ ]/)>=f||!u.trim())l+=`
`+u.slice(f);else{if($||p.search(/[^ ]/)>=4||Q.test(p)||G.test(p)||q.test(p))break;l+=`
`+u}!$&&!u.trim()&&($=!0),o+=B+`
`,e=e.substring(B.length+1),p=u.slice(f)}}i.loose||(d?i.loose=!0:/\n *\n *$/.test(o)&&(d=!0));let k=null,R;this.options.gfm&&(k=/^\[[ xX]\] /.exec(l),k&&(R=k[0]!=="[ ] ",l=l.replace(/^\[[ xX]\] +/,""))),i.items.push({type:"list_item",raw:o,task:!!k,checked:R,loose:!1,text:l,tokens:[]}),i.raw+=o}i.items[i.items.length-1].raw=o.trimEnd(),i.items[i.items.length-1].text=l.trimEnd(),i.raw=i.raw.trimEnd();for(let c=0;c<i.items.length;c++)if(this.lexer.state.top=!1,i.items[c].tokens=this.lexer.blockTokens(i.items[c].text,[]),!i.loose){const p=i.items[c].tokens.filter(f=>f.type==="space"),u=p.length>0&&p.some(f=>/\n.*\n/.test(f.raw));i.loose=u}if(i.loose)for(let c=0;c<i.items.length;c++)i.items[c].loose=!0;return i}}html(e){const t=this.rules.block.html.exec(e);if(t)return{type:"html",block:!0,raw:t[0],pre:t[1]==="pre"||t[1]==="script"||t[1]==="style",text:t[0]}}def(e){const t=this.rules.block.def.exec(e);if(t){const n=t[1].toLowerCase().replace(/\s+/g," "),s=t[2]?t[2].replace(/^<(.*)>$/,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",i=t[3]?t[3].substring(1,t[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):t[3];return{type:"def",tag:n,raw:t[0],href:s,title:i}}}table(e){const t=this.rules.block.table.exec(e);if(!t||!/[:|]/.test(t[2]))return;const n=ze(t[1]),s=t[2].replace(/^\||\| *$/g,"").split("|"),i=t[3]&&t[3].trim()?t[3].replace(/\n[ \t]*$/,"").split(`
`):[],r={type:"table",raw:t[0],header:[],align:[],rows:[]};if(n.length===s.length){for(const o of s)/^ *-+: *$/.test(o)?r.align.push("right"):/^ *:-+: *$/.test(o)?r.align.push("center"):/^ *:-+ *$/.test(o)?r.align.push("left"):r.align.push(null);for(const o of n)r.header.push({text:o,tokens:this.lexer.inline(o)});for(const o of i)r.rows.push(ze(o,r.header.length).map(l=>({text:l,tokens:this.lexer.inline(l)})));return r}}lheading(e){const t=this.rules.block.lheading.exec(e);if(t)return{type:"heading",raw:t[0],depth:t[2].charAt(0)==="="?1:2,text:t[1],tokens:this.lexer.inline(t[1])}}paragraph(e){const t=this.rules.block.paragraph.exec(e);if(t){const n=t[1].charAt(t[1].length-1)===`
`?t[1].slice(0,-1):t[1];return{type:"paragraph",raw:t[0],text:n,tokens:this.lexer.inline(n)}}}text(e){const t=this.rules.block.text.exec(e);if(t)return{type:"text",raw:t[0],text:t[0],tokens:this.lexer.inline(t[0])}}escape(e){const t=this.rules.inline.escape.exec(e);if(t)return{type:"escape",raw:t[0],text:x(t[1])}}tag(e){const t=this.rules.inline.tag.exec(e);if(t)return!this.lexer.state.inLink&&/^<a /i.test(t[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&/^<\/a>/i.test(t[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&/^<(pre|code|kbd|script)(\s|>)/i.test(t[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(t[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:t[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:t[0]}}link(e){const t=this.rules.inline.link.exec(e);if(t){const n=t[2].trim();if(!this.options.pedantic&&/^</.test(n)){if(!/>$/.test(n))return;const r=K(n.slice(0,-1),"\\");if((n.length-r.length)%2===0)return}else{const r=ht(t[2],"()");if(r>-1){const l=(t[0].indexOf("!")===0?5:4)+t[1].length+r;t[2]=t[2].substring(0,r),t[0]=t[0].substring(0,l).trim(),t[3]=""}}let s=t[2],i="";if(this.options.pedantic){const r=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(s);r&&(s=r[1],i=r[3])}else i=t[3]?t[3].slice(1,-1):"";return s=s.trim(),/^</.test(s)&&(this.options.pedantic&&!/>$/.test(n)?s=s.slice(1):s=s.slice(1,-1)),Ae(t,{href:s&&s.replace(this.rules.inline.anyPunctuation,"$1"),title:i&&i.replace(this.rules.inline.anyPunctuation,"$1")},t[0],this.lexer)}}reflink(e,t){let n;if((n=this.rules.inline.reflink.exec(e))||(n=this.rules.inline.nolink.exec(e))){const s=(n[2]||n[1]).replace(/\s+/g," "),i=t[s.toLowerCase()];if(!i){const r=n[0].charAt(0);return{type:"text",raw:r,text:r}}return Ae(n,i,n[0],this.lexer)}}emStrong(e,t,n=""){let s=this.rules.inline.emStrongLDelim.exec(e);if(!s||s[3]&&n.match(/[\p{L}\p{N}]/u))return;if(!(s[1]||s[2]||"")||!n||this.rules.inline.punctuation.exec(n)){const r=[...s[0]].length-1;let o,l,d=r,c=0;const p=s[0][0]==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(p.lastIndex=0,t=t.slice(-1*e.length+r);(s=p.exec(t))!=null;){if(o=s[1]||s[2]||s[3]||s[4]||s[5]||s[6],!o)continue;if(l=[...o].length,s[3]||s[4]){d+=l;continue}else if((s[5]||s[6])&&r%3&&!((r+l)%3)){c+=l;continue}if(d-=l,d>0)continue;l=Math.min(l,l+d+c);const u=[...s[0]][0].length,f=e.slice(0,r+s.index+u+l);if(Math.min(r,l)%2){const k=f.slice(1,-1);return{type:"em",raw:f,text:k,tokens:this.lexer.inlineTokens(k)}}const $=f.slice(2,-2);return{type:"strong",raw:f,text:$,tokens:this.lexer.inlineTokens($)}}}}codespan(e){const t=this.rules.inline.code.exec(e);if(t){let n=t[2].replace(/\n/g," ");const s=/[^ ]/.test(n),i=/^ /.test(n)&&/ $/.test(n);return s&&i&&(n=n.substring(1,n.length-1)),n=x(n,!0),{type:"codespan",raw:t[0],text:n}}}br(e){const t=this.rules.inline.br.exec(e);if(t)return{type:"br",raw:t[0]}}del(e){const t=this.rules.inline.del.exec(e);if(t)return{type:"del",raw:t[0],text:t[2],tokens:this.lexer.inlineTokens(t[2])}}autolink(e){const t=this.rules.inline.autolink.exec(e);if(t){let n,s;return t[2]==="@"?(n=x(t[1]),s="mailto:"+n):(n=x(t[1]),s=n),{type:"link",raw:t[0],text:n,href:s,tokens:[{type:"text",raw:n,text:n}]}}}url(e){var n;let t;if(t=this.rules.inline.url.exec(e)){let s,i;if(t[2]==="@")s=x(t[0]),i="mailto:"+s;else{let r;do r=t[0],t[0]=((n=this.rules.inline._backpedal.exec(t[0]))==null?void 0:n[0])??"";while(r!==t[0]);s=x(t[0]),t[1]==="www."?i="http://"+t[0]:i=t[0]}return{type:"link",raw:t[0],text:s,href:i,tokens:[{type:"text",raw:s,text:s}]}}}inlineText(e){const t=this.rules.inline.text.exec(e);if(t){let n;return this.lexer.state.inRawBlock?n=t[0]:n=x(t[0]),{type:"text",raw:t[0],text:n}}}}const ft=/^(?: *(?:\n|$))+/,mt=/^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,wt=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,Z=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,bt=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,Oe=/(?:[*+-]|\d{1,9}[.)])/,We=b(/^(?!bull |blockCode|fences|blockquote|heading|html)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html))+?)\n {0,3}(=+|-+) *(?:\n+|$)/).replace(/bull/g,Oe).replace(/blockCode/g,/ {4}/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).getRegex(),me=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,yt=/^[^\n]+/,we=/(?!\s*\])(?:\\.|[^\[\]\\])+/,vt=b(/^ {0,3}\[(label)\]: *(?:\n *)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/).replace("label",we).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),kt=b(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,Oe).getRegex(),re="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",be=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,xt=b("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))","i").replace("comment",be).replace("tag",re).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),je=b(me).replace("hr",Z).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",re).getRegex(),$t=b(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",je).getRegex(),ye={blockquote:$t,code:mt,def:vt,fences:wt,heading:bt,hr:Z,html:xt,lheading:We,list:kt,newline:ft,paragraph:je,table:N,text:yt},_e=b("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",Z).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code"," {4}[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",re).getRegex(),Et={...ye,table:_e,paragraph:b(me).replace("hr",Z).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",_e).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",re).getRegex()},It={...ye,html:b(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",be).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:N,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:b(me).replace("hr",Z).replace("heading",` *#{1,6} *[^
]`).replace("lheading",We).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},Ze=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,Tt=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,Fe=/^( {2,}|\\)\n(?!\s*$)/,Rt=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,F="\\p{P}\\p{S}",St=b(/^((?![*_])[\spunctuation])/,"u").replace(/punctuation/g,F).getRegex(),Lt=/\[[^[\]]*?\]\([^\(\)]*?\)|`[^`]*?`|<[^<>]*?>/g,zt=b(/^(?:\*+(?:((?!\*)[punct])|[^\s*]))|^_+(?:((?!_)[punct])|([^\s_]))/,"u").replace(/punct/g,F).getRegex(),At=b("^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)[punct](\\*+)(?=[\\s]|$)|[^punct\\s](\\*+)(?!\\*)(?=[punct\\s]|$)|(?!\\*)[punct\\s](\\*+)(?=[^punct\\s])|[\\s](\\*+)(?!\\*)(?=[punct])|(?!\\*)[punct](\\*+)(?!\\*)(?=[punct])|[^punct\\s](\\*+)(?=[^punct\\s])","gu").replace(/punct/g,F).getRegex(),_t=b("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)[punct](_+)(?=[\\s]|$)|[^punct\\s](_+)(?!_)(?=[punct\\s]|$)|(?!_)[punct\\s](_+)(?=[^punct\\s])|[\\s](_+)(?!_)(?=[punct])|(?!_)[punct](_+)(?!_)(?=[punct])","gu").replace(/punct/g,F).getRegex(),Bt=b(/\\([punct])/,"gu").replace(/punct/g,F).getRegex(),Ct=b(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),Mt=b(be).replace("(?:-->|$)","-->").getRegex(),Dt=b("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",Mt).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),ee=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,Pt=b(/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/).replace("label",ee).replace("href",/<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),Qe=b(/^!?\[(label)\]\[(ref)\]/).replace("label",ee).replace("ref",we).getRegex(),Ge=b(/^!?\[(ref)\](?:\[\])?/).replace("ref",we).getRegex(),Ut=b("reflink|nolink(?!\\()","g").replace("reflink",Qe).replace("nolink",Ge).getRegex(),ve={_backpedal:N,anyPunctuation:Bt,autolink:Ct,blockSkip:Lt,br:Fe,code:Tt,del:N,emStrongLDelim:zt,emStrongRDelimAst:At,emStrongRDelimUnd:_t,escape:Ze,link:Pt,nolink:Ge,punctuation:St,reflink:Qe,reflinkSearch:Ut,tag:Dt,text:Rt,url:N},qt={...ve,link:b(/^!?\[(label)\]\((.*?)\)/).replace("label",ee).getRegex(),reflink:b(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",ee).getRegex()},pe={...ve,escape:b(Ze).replace("])","~|])").getRegex(),url:b(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,"i").replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/},Ht={...pe,br:b(Fe).replace("{2,}","*").getRegex(),text:b(pe.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},Y={normal:ye,gfm:Et,pedantic:It},H={normal:ve,gfm:pe,breaks:Ht,pedantic:qt};class I{constructor(e){y(this,"tokens");y(this,"options");y(this,"state");y(this,"tokenizer");y(this,"inlineQueue");this.tokens=[],this.tokens.links=Object.create(null),this.options=e||D,this.options.tokenizer=this.options.tokenizer||new J,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};const t={block:Y.normal,inline:H.normal};this.options.pedantic?(t.block=Y.pedantic,t.inline=H.pedantic):this.options.gfm&&(t.block=Y.gfm,this.options.breaks?t.inline=H.breaks:t.inline=H.gfm),this.tokenizer.rules=t}static get rules(){return{block:Y,inline:H}}static lex(e,t){return new I(t).lex(e)}static lexInline(e,t){return new I(t).inlineTokens(e)}lex(e){e=e.replace(/\r\n|\r/g,`
`),this.blockTokens(e,this.tokens);for(let t=0;t<this.inlineQueue.length;t++){const n=this.inlineQueue[t];this.inlineTokens(n.src,n.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(e,t=[]){this.options.pedantic?e=e.replace(/\t/g,"    ").replace(/^ +$/gm,""):e=e.replace(/^( *)(\t+)/gm,(o,l,d)=>l+"    ".repeat(d.length));let n,s,i,r;for(;e;)if(!(this.options.extensions&&this.options.extensions.block&&this.options.extensions.block.some(o=>(n=o.call({lexer:this},e,t))?(e=e.substring(n.raw.length),t.push(n),!0):!1))){if(n=this.tokenizer.space(e)){e=e.substring(n.raw.length),n.raw.length===1&&t.length>0?t[t.length-1].raw+=`
`:t.push(n);continue}if(n=this.tokenizer.code(e)){e=e.substring(n.raw.length),s=t[t.length-1],s&&(s.type==="paragraph"||s.type==="text")?(s.raw+=`
`+n.raw,s.text+=`
`+n.text,this.inlineQueue[this.inlineQueue.length-1].src=s.text):t.push(n);continue}if(n=this.tokenizer.fences(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.heading(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.hr(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.blockquote(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.list(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.html(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.def(e)){e=e.substring(n.raw.length),s=t[t.length-1],s&&(s.type==="paragraph"||s.type==="text")?(s.raw+=`
`+n.raw,s.text+=`
`+n.raw,this.inlineQueue[this.inlineQueue.length-1].src=s.text):this.tokens.links[n.tag]||(this.tokens.links[n.tag]={href:n.href,title:n.title});continue}if(n=this.tokenizer.table(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.lheading(e)){e=e.substring(n.raw.length),t.push(n);continue}if(i=e,this.options.extensions&&this.options.extensions.startBlock){let o=1/0;const l=e.slice(1);let d;this.options.extensions.startBlock.forEach(c=>{d=c.call({lexer:this},l),typeof d=="number"&&d>=0&&(o=Math.min(o,d))}),o<1/0&&o>=0&&(i=e.substring(0,o+1))}if(this.state.top&&(n=this.tokenizer.paragraph(i))){s=t[t.length-1],r&&s.type==="paragraph"?(s.raw+=`
`+n.raw,s.text+=`
`+n.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=s.text):t.push(n),r=i.length!==e.length,e=e.substring(n.raw.length);continue}if(n=this.tokenizer.text(e)){e=e.substring(n.raw.length),s=t[t.length-1],s&&s.type==="text"?(s.raw+=`
`+n.raw,s.text+=`
`+n.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=s.text):t.push(n);continue}if(e){const o="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(o);break}else throw new Error(o)}}return this.state.top=!0,t}inline(e,t=[]){return this.inlineQueue.push({src:e,tokens:t}),t}inlineTokens(e,t=[]){let n,s,i,r=e,o,l,d;if(this.tokens.links){const c=Object.keys(this.tokens.links);if(c.length>0)for(;(o=this.tokenizer.rules.inline.reflinkSearch.exec(r))!=null;)c.includes(o[0].slice(o[0].lastIndexOf("[")+1,-1))&&(r=r.slice(0,o.index)+"["+"a".repeat(o[0].length-2)+"]"+r.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(o=this.tokenizer.rules.inline.blockSkip.exec(r))!=null;)r=r.slice(0,o.index)+"["+"a".repeat(o[0].length-2)+"]"+r.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);for(;(o=this.tokenizer.rules.inline.anyPunctuation.exec(r))!=null;)r=r.slice(0,o.index)+"++"+r.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);for(;e;)if(l||(d=""),l=!1,!(this.options.extensions&&this.options.extensions.inline&&this.options.extensions.inline.some(c=>(n=c.call({lexer:this},e,t))?(e=e.substring(n.raw.length),t.push(n),!0):!1))){if(n=this.tokenizer.escape(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.tag(e)){e=e.substring(n.raw.length),s=t[t.length-1],s&&n.type==="text"&&s.type==="text"?(s.raw+=n.raw,s.text+=n.text):t.push(n);continue}if(n=this.tokenizer.link(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.reflink(e,this.tokens.links)){e=e.substring(n.raw.length),s=t[t.length-1],s&&n.type==="text"&&s.type==="text"?(s.raw+=n.raw,s.text+=n.text):t.push(n);continue}if(n=this.tokenizer.emStrong(e,r,d)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.codespan(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.br(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.del(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.autolink(e)){e=e.substring(n.raw.length),t.push(n);continue}if(!this.state.inLink&&(n=this.tokenizer.url(e))){e=e.substring(n.raw.length),t.push(n);continue}if(i=e,this.options.extensions&&this.options.extensions.startInline){let c=1/0;const p=e.slice(1);let u;this.options.extensions.startInline.forEach(f=>{u=f.call({lexer:this},p),typeof u=="number"&&u>=0&&(c=Math.min(c,u))}),c<1/0&&c>=0&&(i=e.substring(0,c+1))}if(n=this.tokenizer.inlineText(i)){e=e.substring(n.raw.length),n.raw.slice(-1)!=="_"&&(d=n.raw.slice(-1)),l=!0,s=t[t.length-1],s&&s.type==="text"?(s.raw+=n.raw,s.text+=n.text):t.push(n);continue}if(e){const c="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(c);break}else throw new Error(c)}}return t}}class te{constructor(e){y(this,"options");this.options=e||D}code(e,t,n){var i;const s=(i=(t||"").match(/^\S*/))==null?void 0:i[0];return e=e.replace(/\n$/,"")+`
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
`}strong(e){return`<strong>${e}</strong>`}em(e){return`<em>${e}</em>`}codespan(e){return`<code>${e}</code>`}br(){return"<br>"}del(e){return`<del>${e}</del>`}link(e,t,n){const s=Le(e);if(s===null)return n;e=s;let i='<a href="'+e+'"';return t&&(i+=' title="'+t+'"'),i+=">"+n+"</a>",i}image(e,t,n){const s=Le(e);if(s===null)return n;e=s;let i=`<img src="${e}" alt="${n}"`;return t&&(i+=` title="${t}"`),i+=">",i}text(e){return e}}class ke{strong(e){return e}em(e){return e}codespan(e){return e}del(e){return e}html(e){return e}text(e){return e}link(e,t,n){return""+n}image(e,t,n){return""+n}br(){return""}}class T{constructor(e){y(this,"options");y(this,"renderer");y(this,"textRenderer");this.options=e||D,this.options.renderer=this.options.renderer||new te,this.renderer=this.options.renderer,this.renderer.options=this.options,this.textRenderer=new ke}static parse(e,t){return new T(t).parse(e)}static parseInline(e,t){return new T(t).parseInline(e)}parse(e,t=!0){let n="";for(let s=0;s<e.length;s++){const i=e[s];if(this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[i.type]){const r=i,o=this.options.extensions.renderers[r.type].call({parser:this},r);if(o!==!1||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(r.type)){n+=o||"";continue}}switch(i.type){case"space":continue;case"hr":{n+=this.renderer.hr();continue}case"heading":{const r=i;n+=this.renderer.heading(this.parseInline(r.tokens),r.depth,ut(this.parseInline(r.tokens,this.textRenderer)));continue}case"code":{const r=i;n+=this.renderer.code(r.text,r.lang,!!r.escaped);continue}case"table":{const r=i;let o="",l="";for(let c=0;c<r.header.length;c++)l+=this.renderer.tablecell(this.parseInline(r.header[c].tokens),{header:!0,align:r.align[c]});o+=this.renderer.tablerow(l);let d="";for(let c=0;c<r.rows.length;c++){const p=r.rows[c];l="";for(let u=0;u<p.length;u++)l+=this.renderer.tablecell(this.parseInline(p[u].tokens),{header:!1,align:r.align[u]});d+=this.renderer.tablerow(l)}n+=this.renderer.table(o,d);continue}case"blockquote":{const r=i,o=this.parse(r.tokens);n+=this.renderer.blockquote(o);continue}case"list":{const r=i,o=r.ordered,l=r.start,d=r.loose;let c="";for(let p=0;p<r.items.length;p++){const u=r.items[p],f=u.checked,$=u.task;let k="";if(u.task){const R=this.renderer.checkbox(!!f);d?u.tokens.length>0&&u.tokens[0].type==="paragraph"?(u.tokens[0].text=R+" "+u.tokens[0].text,u.tokens[0].tokens&&u.tokens[0].tokens.length>0&&u.tokens[0].tokens[0].type==="text"&&(u.tokens[0].tokens[0].text=R+" "+u.tokens[0].tokens[0].text)):u.tokens.unshift({type:"text",text:R+" "}):k+=R+" "}k+=this.parse(u.tokens,d),c+=this.renderer.listitem(k,$,!!f)}n+=this.renderer.list(c,o,l);continue}case"html":{const r=i;n+=this.renderer.html(r.text,r.block);continue}case"paragraph":{const r=i;n+=this.renderer.paragraph(this.parseInline(r.tokens));continue}case"text":{let r=i,o=r.tokens?this.parseInline(r.tokens):r.text;for(;s+1<e.length&&e[s+1].type==="text";)r=e[++s],o+=`
`+(r.tokens?this.parseInline(r.tokens):r.text);n+=t?this.renderer.paragraph(o):o;continue}default:{const r='Token with "'+i.type+'" type was not found.';if(this.options.silent)return console.error(r),"";throw new Error(r)}}}return n}parseInline(e,t){t=t||this.renderer;let n="";for(let s=0;s<e.length;s++){const i=e[s];if(this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[i.type]){const r=this.options.extensions.renderers[i.type].call({parser:this},i);if(r!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(i.type)){n+=r||"";continue}}switch(i.type){case"escape":{const r=i;n+=t.text(r.text);break}case"html":{const r=i;n+=t.html(r.text);break}case"link":{const r=i;n+=t.link(r.href,r.title,this.parseInline(r.tokens,t));break}case"image":{const r=i;n+=t.image(r.href,r.title,r.text);break}case"strong":{const r=i;n+=t.strong(this.parseInline(r.tokens,t));break}case"em":{const r=i;n+=t.em(this.parseInline(r.tokens,t));break}case"codespan":{const r=i;n+=t.codespan(r.text);break}case"br":{n+=t.br();break}case"del":{const r=i;n+=t.del(this.parseInline(r.tokens,t));break}case"text":{const r=i;n+=t.text(r.text);break}default:{const r='Token with "'+i.type+'" type was not found.';if(this.options.silent)return console.error(r),"";throw new Error(r)}}}return n}}class O{constructor(e){y(this,"options");this.options=e||D}preprocess(e){return e}postprocess(e){return e}processAllTokens(e){return e}}y(O,"passThroughHooks",new Set(["preprocess","postprocess","processAllTokens"]));var M,he,Ve;class Nt{constructor(...e){Ie(this,M);y(this,"defaults",fe());y(this,"options",this.setOptions);y(this,"parse",V(this,M,he).call(this,I.lex,T.parse));y(this,"parseInline",V(this,M,he).call(this,I.lexInline,T.parseInline));y(this,"Parser",T);y(this,"Renderer",te);y(this,"TextRenderer",ke);y(this,"Lexer",I);y(this,"Tokenizer",J);y(this,"Hooks",O);this.use(...e)}walkTokens(e,t){var s,i;let n=[];for(const r of e)switch(n=n.concat(t.call(this,r)),r.type){case"table":{const o=r;for(const l of o.header)n=n.concat(this.walkTokens(l.tokens,t));for(const l of o.rows)for(const d of l)n=n.concat(this.walkTokens(d.tokens,t));break}case"list":{const o=r;n=n.concat(this.walkTokens(o.items,t));break}default:{const o=r;(i=(s=this.defaults.extensions)==null?void 0:s.childTokens)!=null&&i[o.type]?this.defaults.extensions.childTokens[o.type].forEach(l=>{const d=o[l].flat(1/0);n=n.concat(this.walkTokens(d,t))}):o.tokens&&(n=n.concat(this.walkTokens(o.tokens,t)))}}return n}use(...e){const t=this.defaults.extensions||{renderers:{},childTokens:{}};return e.forEach(n=>{const s={...n};if(s.async=this.defaults.async||s.async||!1,n.extensions&&(n.extensions.forEach(i=>{if(!i.name)throw new Error("extension name required");if("renderer"in i){const r=t.renderers[i.name];r?t.renderers[i.name]=function(...o){let l=i.renderer.apply(this,o);return l===!1&&(l=r.apply(this,o)),l}:t.renderers[i.name]=i.renderer}if("tokenizer"in i){if(!i.level||i.level!=="block"&&i.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");const r=t[i.level];r?r.unshift(i.tokenizer):t[i.level]=[i.tokenizer],i.start&&(i.level==="block"?t.startBlock?t.startBlock.push(i.start):t.startBlock=[i.start]:i.level==="inline"&&(t.startInline?t.startInline.push(i.start):t.startInline=[i.start]))}"childTokens"in i&&i.childTokens&&(t.childTokens[i.name]=i.childTokens)}),s.extensions=t),n.renderer){const i=this.defaults.renderer||new te(this.defaults);for(const r in n.renderer){if(!(r in i))throw new Error(`renderer '${r}' does not exist`);if(r==="options")continue;const o=r,l=n.renderer[o],d=i[o];i[o]=(...c)=>{let p=l.apply(i,c);return p===!1&&(p=d.apply(i,c)),p||""}}s.renderer=i}if(n.tokenizer){const i=this.defaults.tokenizer||new J(this.defaults);for(const r in n.tokenizer){if(!(r in i))throw new Error(`tokenizer '${r}' does not exist`);if(["options","rules","lexer"].includes(r))continue;const o=r,l=n.tokenizer[o],d=i[o];i[o]=(...c)=>{let p=l.apply(i,c);return p===!1&&(p=d.apply(i,c)),p}}s.tokenizer=i}if(n.hooks){const i=this.defaults.hooks||new O;for(const r in n.hooks){if(!(r in i))throw new Error(`hook '${r}' does not exist`);if(r==="options")continue;const o=r,l=n.hooks[o],d=i[o];O.passThroughHooks.has(r)?i[o]=c=>{if(this.defaults.async)return Promise.resolve(l.call(i,c)).then(u=>d.call(i,u));const p=l.call(i,c);return d.call(i,p)}:i[o]=(...c)=>{let p=l.apply(i,c);return p===!1&&(p=d.apply(i,c)),p}}s.hooks=i}if(n.walkTokens){const i=this.defaults.walkTokens,r=n.walkTokens;s.walkTokens=function(o){let l=[];return l.push(r.call(this,o)),i&&(l=l.concat(i.call(this,o))),l}}this.defaults={...this.defaults,...s}}),this}setOptions(e){return this.defaults={...this.defaults,...e},this}lexer(e,t){return I.lex(e,t??this.defaults)}parser(e,t){return T.parse(e,t??this.defaults)}}M=new WeakSet,he=function(e,t){return(n,s)=>{const i={...s},r={...this.defaults,...i};this.defaults.async===!0&&i.async===!1&&(r.silent||console.warn("marked(): The async option was set to true by an extension. The async: false option sent to parse will be ignored."),r.async=!0);const o=V(this,M,Ve).call(this,!!r.silent,!!r.async);if(typeof n>"u"||n===null)return o(new Error("marked(): input parameter is undefined or null"));if(typeof n!="string")return o(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(n)+", string expected"));if(r.hooks&&(r.hooks.options=r),r.async)return Promise.resolve(r.hooks?r.hooks.preprocess(n):n).then(l=>e(l,r)).then(l=>r.hooks?r.hooks.processAllTokens(l):l).then(l=>r.walkTokens?Promise.all(this.walkTokens(l,r.walkTokens)).then(()=>l):l).then(l=>t(l,r)).then(l=>r.hooks?r.hooks.postprocess(l):l).catch(o);try{r.hooks&&(n=r.hooks.preprocess(n));let l=e(n,r);r.hooks&&(l=r.hooks.processAllTokens(l)),r.walkTokens&&this.walkTokens(l,r.walkTokens);let d=t(l,r);return r.hooks&&(d=r.hooks.postprocess(d)),d}catch(l){return o(l)}}},Ve=function(e,t){return n=>{if(n.message+=`
Please report this to https://github.com/markedjs/marked.`,e){const s="<p>An error occurred:</p><pre>"+x(n.message+"",!0)+"</pre>";return t?Promise.resolve(s):s}if(t)return Promise.reject(n);throw n}};const C=new Nt;function m(a,e){return C.parse(a,e)}m.options=m.setOptions=function(a){return C.setOptions(a),m.defaults=C.defaults,qe(m.defaults),m};m.getDefaults=fe;m.defaults=D;m.use=function(...a){return C.use(...a),m.defaults=C.defaults,qe(m.defaults),m};m.walkTokens=function(a,e){return C.walkTokens(a,e)};m.parseInline=C.parseInline;m.Parser=T;m.parser=T.parse;m.Renderer=te;m.TextRenderer=ke;m.Lexer=I;m.lexer=I.lex;m.Tokenizer=J;m.Hooks=O;m.parse=m;m.options;m.setOptions;m.use;m.walkTokens;m.parseInline;T.parse;I.lex;m.setOptions({breaks:!0,gfm:!0});function Ke(a){const e=/^---\n([\s\S]*?)\n---\n/,t=a.match(e);if(!t)return{metadata:{},content:a};const n=t[1],s=a.slice(t[0].length),i={};return n.split(`
`).forEach(r=>{const o=r.indexOf(":");if(o>0){const l=r.slice(0,o).trim(),d=r.slice(o+1).trim().replace(/^["']|["']$/g,"");i[l]=d}}),{metadata:i,content:s}}function Ot(a){return m.parse(a)}function Wt(a,e=150){const{content:t}=Ke(a),n=t.replace(/#{1,6}\s+/g,"").replace(/\*\*|__/g,"").replace(/\*|_/g,"").replace(/\[([^\]]+)\]\([^)]+\)/g,"$1").replace(/`([^`]+)`/g,"$1").replace(/\n+/g," ").trim();return n.length<=e?n:n.slice(0,e).trim()+"..."}function P(a){return new Date(a).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"})}const S={omdb:{key:localStorage.getItem("omdb_api_key")||"5a9c220",baseUrl:"https://www.omdbapi.com/"},openLibrary:{baseUrl:"https://openlibrary.org"},deezer:{baseUrl:"https://api.deezer.com"}};function jt(a){a.omdb&&(localStorage.setItem("omdb_api_key",a.omdb),S.omdb.key=a.omdb)}function Zt(){return{omdb:S.omdb.key}}function Ft(a){switch(a){case"film":return!!S.omdb.key;case"book":return!0;case"song":case"album":return!0;case"restaurant":return!0;default:return!1}}async function Qt(a){if(!S.omdb.key)throw new Error("OMDb API key not configured. Please add it in the admin settings.");const e=`${S.omdb.baseUrl}?apikey=${S.omdb.key}&s=${encodeURIComponent(a)}&type=movie`,n=await(await fetch(e)).json();if(n.Error){if(n.Error==="Movie not found!")return[];throw new Error(n.Error)}return(n.Search||[]).map(s=>({id:s.imdbID,title:s.Title,year:s.Year,imageUrl:s.Poster!=="N/A"?s.Poster:null,externalUrl:`https://www.imdb.com/title/${s.imdbID}`,type:"film"}))}async function Gt(a){const e=`${S.openLibrary.baseUrl}/search.json?q=${encodeURIComponent(a)}&limit=10`,n=await(await fetch(e)).json();return!n.docs||n.docs.length===0?[]:n.docs.map(s=>{var i;return{id:((i=s.key)==null?void 0:i.replace("/works/",""))||s.cover_edition_key||String(Math.random()),title:s.title||"Unknown Title",author:s.author_name?s.author_name.join(", "):"Unknown",year:s.first_publish_year?String(s.first_publish_year):"",imageUrl:s.cover_i?`https://covers.openlibrary.org/b/id/${s.cover_i}-M.jpg`:null,externalUrl:s.key?`https://openlibrary.org${s.key}`:`https://openlibrary.org/search?q=${encodeURIComponent(a)}`,type:"book"}})}async function Vt(a){const e=`https://corsproxy.io/?${encodeURIComponent(`${S.deezer.baseUrl}/search?q=${encodeURIComponent(a)}&limit=10`)}`;try{const n=await(await fetch(e)).json();if(n.error)throw new Error(n.error.message||"Deezer search failed");return(n.data||[]).map(s=>{var i,r,o,l;return{id:s.id.toString(),title:s.title,artist:((i=s.artist)==null?void 0:i.name)||"Unknown Artist",album:((r=s.album)==null?void 0:r.title)||"",year:"",imageUrl:((o=s.album)==null?void 0:o.cover_medium)||((l=s.album)==null?void 0:l.cover)||null,externalUrl:s.link,type:"song"}})}catch{return Yt(a)}}async function Kt(a){const e=`https://corsproxy.io/?${encodeURIComponent(`${S.deezer.baseUrl}/search/album?q=${encodeURIComponent(a)}&limit=10`)}`;try{const n=await(await fetch(e)).json();if(n.error)throw new Error(n.error.message||"Deezer album search failed");return(n.data||[]).map(s=>{var i;return{id:s.id.toString(),title:s.title,artist:((i=s.artist)==null?void 0:i.name)||"Unknown Artist",year:"",imageUrl:s.cover_medium||s.cover_big||s.cover||null,externalUrl:s.link,type:"album"}})}catch{throw new Error("Album search is currently unavailable. Please try again later.")}}async function Yt(a){const e=`https://www.theaudiodb.com/api/v1/json/2/search.php?s=${encodeURIComponent(a)}`;try{const n=await(await fetch(e)).json();return!n.artists||n.artists.length===0?[]:n.artists.slice(0,10).map(s=>({id:s.idArtist,title:s.strArtist,artist:s.strGenre||"Music",year:s.intFormedYear||"",imageUrl:s.strArtistThumb||null,externalUrl:s.strWebsite?`https://${s.strWebsite}`:`https://www.theaudiodb.com/artist/${s.idArtist}`,type:"song"}))}catch{throw new Error("Song search is currently unavailable. Please try again later.")}}async function Xt(a,e){if(!a.trim())return[];switch(e){case"film":return Qt(a);case"book":return Gt(a);case"song":return Vt(a);case"album":return Kt(a);default:throw new Error(`Unknown media type: ${e}`)}}function L(a){return{film:{label:"Film",color:"#ef4444"},book:{label:"Book",color:"#3b82f6"},song:{label:"Song",color:"#22c55e"},album:{label:"Album",color:"#a855f7"},restaurant:{label:"Restaurant",color:"#f97316"}}[a]||{label:a,color:"#6366f1"}}const Jt={apiKey:"AIzaSyDGOa35ykPxXLNVTGKqBwn-DJWHuXaUDHg",authDomain:"zuber-5a216.firebaseapp.com",projectId:"zuber-5a216",storageBucket:"zuber-5a216.firebasestorage.app",messagingSenderId:"371730965722",appId:"1:371730965722:web:735ce1de62a6541a5c31e3",measurementId:"G-N452GHJNT5"},en=it(Jt),A=rt(en),ae="writings",oe="media";let W=[],j=[],ne=!1,se=!1;function tn(a,e){const t=Te(X(A,ae));Re(t,s=>{W=s.docs.map(i=>({id:i.id,...i.data()})),ne=!0,a&&a(W)},s=>{console.error("Error listening to writings:",s),ne=!0});const n=Te(X(A,oe));Re(n,s=>{j=s.docs.map(i=>({id:i.id,...i.data()})),se=!0,e&&e(j)},s=>{console.error("Error listening to media:",s),se=!0})}async function nn(){if(ne)return{writings:W};try{return W=(await De(X(A,ae))).docs.map(e=>({id:e.id,...e.data()})),ne=!0,{writings:W}}catch(a){return console.error("Error getting writings:",a),{writings:[]}}}async function sn(){if(se)return{media:j};try{return j=(await De(X(A,oe))).docs.map(e=>({id:e.id,...e.data()})),se=!0,{media:j}}catch(a){return console.error("Error getting media:",a),{media:[]}}}async function rn(a,e,t){const n=Date.now().toString(36)+Math.random().toString(36).substr(2);try{return await Ue(ie(A,ae,n),{title:a,date:e,content:t,createdAt:new Date().toISOString()}),n}catch(s){throw console.error("Error adding writing:",s),s}}async function an(a){try{await Pe(ie(A,ae,a))}catch(e){throw console.error("Error deleting writing:",e),e}}async function on(a,e,t){const n=Date.now().toString(36)+Math.random().toString(36).substr(2);try{return await Ue(ie(A,oe,n),{type:a.type,title:a.title,artist:a.artist||a.author||"",year:a.year||"",imageUrl:a.imageUrl,externalUrl:a.externalUrl,rating:e,review:t,date:new Date().toISOString().split("T")[0],createdAt:new Date().toISOString()}),n}catch(s){throw console.error("Error adding media review:",s),s}}async function ln(a){try{await Pe(ie(A,oe,a))}catch(e){throw console.error("Error deleting media review:",e),e}}const xe="zuber_seth_admin_auth",cn="admin123";function dn(){return localStorage.getItem(xe)==="authenticated"}function un(a){const e=localStorage.getItem("admin_password")||cn;return a===e?(localStorage.setItem(xe,"authenticated"),!0):!1}function pn(){localStorage.removeItem(xe)}function hn(a){localStorage.setItem("admin_password",a)}async function le(){return await nn()}async function $e(){return await sn()}async function gn(a,e,t){return await rn(a,e,t)}async function fn(a){return await an(a)}async function Be(a,e,t){return await on(a,e,t)}async function mn(a){return await ln(a)}function Ye(a){a.innerHTML=`
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
    `;const e=document.getElementById("login-form"),t=document.getElementById("login-error");e.addEventListener("submit",n=>{n.preventDefault();const s=document.getElementById("password-input").value;un(s)?Xe(a):(t.textContent="Incorrect password",t.style.display="block")})}function Xe(a){a.innerHTML=`
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
    `;const e=document.querySelectorAll(".admin-tab");e.forEach(t=>{t.addEventListener("click",()=>{e.forEach(n=>n.classList.remove("active")),t.classList.add("active"),Ce(t.dataset.tab)})}),document.getElementById("logout-btn").addEventListener("click",()=>{pn(),Ye(a)}),Ce("writing")}function Ce(a){const e=document.getElementById("admin-content");switch(a){case"writing":wn(e);break;case"media":bn(e);break;case"manage":ge(e);break;case"settings":yn(e);break}}function wn(a){a.innerHTML=`
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
    `;const e=document.getElementById("upload-zone"),t=document.getElementById("file-input"),n=document.getElementById("file-preview");e.addEventListener("click",()=>t.click()),e.addEventListener("dragover",i=>{i.preventDefault(),e.classList.add("dragover")}),e.addEventListener("dragleave",()=>{e.classList.remove("dragover")}),e.addEventListener("drop",i=>{i.preventDefault(),e.classList.remove("dragover");const r=i.dataTransfer.files[0];r&&s(r)}),t.addEventListener("change",i=>{const r=i.target.files[0];r&&s(r)});function s(i){const r=new FileReader;r.onload=o=>{const l=o.target.result;let d=i.name.replace(/\.(md|markdown|txt)$/,"").replace(/-/g," ");const c=l.match(/^#\s+(.+)$/m);c&&(d=c[1]),document.getElementById("writing-title").value=d,document.getElementById("writing-date").value=new Date().toISOString().split("T")[0],document.getElementById("writing-content").value=l,n.style.display="block",e.style.display="none"},r.readAsText(i)}document.getElementById("save-writing").addEventListener("click",async()=>{const i=document.getElementById("writing-title").value.trim(),r=document.getElementById("writing-date").value,o=document.getElementById("writing-content").value;if(!i||!r||!o){v("Please fill in all fields","error");return}try{await gn(i,r,o),v("Writing saved successfully!","success"),n.style.display="none",e.style.display="block",document.getElementById("writing-title").value="",document.getElementById("writing-content").value=""}catch(l){v("Error saving writing: "+l.message,"error")}})}function bn(a){a.innerHTML=`
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
    `;let e=null,t=0,n=0;const s=document.getElementById("media-search"),i=document.getElementById("search-btn"),r=document.getElementById("media-type"),o=document.getElementById("search-results"),l=document.getElementById("review-form"),d=document.getElementById("restaurant-form"),c=document.getElementById("restaurant-rating-slider"),p=document.getElementById("restaurant-rating-stars"),u=document.getElementById("restaurant-rating-value"),f=document.getElementById("restaurant-review-text");function $(g){const h=g/2;n=h;let w="";for(let E=1;E<=5;E++)h>=E?w+="★":h>=E-.5?w+="⯨":w+="☆";p.textContent=w,u.textContent=h.toFixed(1)}c.addEventListener("input",g=>{$(parseInt(g.target.value))}),$(0),f.addEventListener("input",()=>{const h=f.value.trim().split(/\s+/).filter(w=>w.length>0).length;document.getElementById("restaurant-word-count").textContent=h,document.getElementById("restaurant-word-count").style.color=h>100?"var(--color-error)":""}),document.getElementById("save-restaurant").addEventListener("click",async()=>{const g=document.getElementById("restaurant-name").value.trim(),h=document.getElementById("restaurant-location").value.trim();if(!g){v("Please enter a restaurant name","error");return}if(n===0){v("Please select a rating","error");return}const w=f.value.trim();if(w.split(/\s+/).filter(ue=>ue.length>0).length>100){v("Review must be 100 words or less","error");return}const et={type:"restaurant",title:g,artist:h,year:"",imageUrl:null,externalUrl:`https://www.google.com/search?q=${encodeURIComponent(g+" restaurant "+h)}`};try{await Be(et,n,w),v("Restaurant review saved!","success"),document.getElementById("restaurant-name").value="",document.getElementById("restaurant-location").value="",f.value="",c.value=0,$(0),document.getElementById("restaurant-word-count").textContent="0"}catch(ue){v("Error saving: "+ue.message,"error")}}),r.addEventListener("change",()=>{const g=r.value;g==="restaurant"?(d.style.display="block",s.style.display="none",i.style.display="none",o.innerHTML="",l.style.display="none"):(d.style.display="none",s.style.display="block",i.style.display="block",Ft(g)||v(`${L(g).label} search requires API configuration. Check Settings.`,"error"))});async function k(){const g=s.value.trim(),h=r.value;if(g){o.innerHTML='<div class="loading"><div class="spinner"></div></div>',l.style.display="none",e=null;try{const w=await Xt(g,h);R(w)}catch(w){o.innerHTML=`<p style="color: var(--color-error);">${w.message}</p>`}}}i.addEventListener("click",k),s.addEventListener("keypress",g=>{g.key==="Enter"&&k()});function R(g){if(g.length===0){o.innerHTML='<p style="color: var(--color-text-muted);">No results found</p>';return}o.innerHTML=g.map(h=>`
            <div class="search-result-item" data-id="${h.id}">
                <div class="search-result-image">
                    ${h.imageUrl?`<img src="${h.imageUrl}" alt="${h.title}">`:`<div style="display:flex;align-items:center;justify-content:center;height:100%;font-size:1rem;color:var(--color-text-muted);">${L(h.type).label}</div>`}
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
        `,t=0,q.value=0,B(0),document.getElementById("review-text").value="",document.getElementById("word-count").textContent="0",l.style.display="block"}const q=document.getElementById("rating-slider"),Q=document.getElementById("rating-stars"),G=document.getElementById("rating-value");function B(g){const h=g/2;t=h;let w="";for(let E=1;E<=5;E++)h>=E?w+="★":h>=E-.5?w+="⯨":w+="☆";Q.textContent=w,G.textContent=h.toFixed(1)}q.addEventListener("input",g=>{B(parseInt(g.target.value))}),B(0);const de=document.getElementById("review-text");de.addEventListener("input",()=>{const h=de.value.trim().split(/\s+/).filter(w=>w.length>0).length;document.getElementById("word-count").textContent=h,h>100?document.getElementById("word-count").style.color="var(--color-error)":document.getElementById("word-count").style.color=""}),document.getElementById("save-review").addEventListener("click",async()=>{if(!e){v("Please select a media item","error");return}if(t===0){v("Please select a rating","error");return}const g=de.value.trim();if(g.split(/\s+/).filter(w=>w.length>0).length>100){v("Review must be 100 words or less","error");return}try{await Be(e,t,g),v("Review saved successfully!","success"),o.innerHTML="",l.style.display="none",s.value="",e=null}catch(w){v("Error saving review: "+w.message,"error")}})}async function ge(a){a.innerHTML='<div class="loading"><div class="spinner"></div></div>';const e=await le(),t=await $e(),n=e.writings,s=t.media;a.innerHTML=`
        <div class="card" style="margin-bottom: var(--space-6);">
            <h3 style="margin-bottom: var(--space-6);">Writings (${n.length})</h3>
            <div class="content-list" id="writings-list">
                ${n.length===0?'<p style="color: var(--color-text-muted);">No writings yet</p>':n.map(i=>`
                        <div class="content-item">
                            <div class="content-item-info">
                                <div class="content-item-title">${i.title}</div>
                                <div class="content-item-meta">${P(i.date)}</div>
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
                                ${i.imageUrl?`<img src="${i.imageUrl}" alt="${i.title}">`:`<div style="display:flex;align-items:center;justify-content:center;height:100%;background:var(--color-bg-secondary);font-size:0.75rem;color:var(--color-text-muted);">${L(i.type).label}</div>`}
                            </div>
                            <div class="content-item-info">
                                <div class="content-item-title">${i.title}</div>
                                <div class="content-item-meta">
                                    ${L(i.type).label} • ${i.rating} stars • ${P(i.date)}
                                </div>
                            </div>
                            <div class="content-item-actions">
                                <button class="btn btn-danger btn-sm" data-delete-media="${i.id}">Delete</button>
                            </div>
                        </div>
                    `).join("")}
            </div>
        </div>
    `,a.querySelectorAll("[data-delete-writing]").forEach(i=>{i.addEventListener("click",async()=>{if(confirm("Are you sure you want to delete this writing?"))try{await fn(i.dataset.deleteWriting),v("Writing deleted","success"),ge(a)}catch(r){v("Error deleting: "+r.message,"error")}})}),a.querySelectorAll("[data-delete-media]").forEach(i=>{i.addEventListener("click",async()=>{if(confirm("Are you sure you want to delete this review?"))try{await mn(i.dataset.deleteMedia),v("Review deleted","success"),ge(a)}catch(r){v("Error deleting: "+r.message,"error")}})})}function yn(a){const e=Zt();a.innerHTML=`
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
    `,document.getElementById("change-password").addEventListener("click",()=>{const t=document.getElementById("new-password").value;if(t.length<4){v("Password must be at least 4 characters","error");return}hn(t),v("Password changed successfully","success"),document.getElementById("new-password").value=""}),document.getElementById("save-api-keys").addEventListener("click",()=>{jt({omdb:document.getElementById("omdb-key").value.trim()}),v("API keys saved successfully","success")})}function v(a,e="success"){let t=document.querySelector(".toast-container");t||(t=document.createElement("div"),t.className="toast-container",document.body.appendChild(t));const n=document.createElement("div");n.className=`toast toast-${e}`,n.textContent=a,t.appendChild(n),setTimeout(()=>{n.remove()},3e3)}const _=new at,z=document.getElementById("main-content");function Je(a){let e="";for(let t=1;t<=5;t++)a>=t?e+='<span class="star filled">★</span>':a>=t-.5?e+='<span class="star half">★</span>':e+='<span class="star">★</span>';return e}function ce(){z.innerHTML=`
        <div class="loading">
            <div class="spinner"></div>
        </div>
    `}_.on("/",async()=>{ce();const a=await le(),e=await $e(),t=a.writings,n=e.media,s=[...t].sort((r,o)=>new Date(o.date)-new Date(r.date)).slice(0,8),i=[...n].sort((r,o)=>new Date(o.date)-new Date(r.date)).slice(0,8);z.innerHTML=`
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
                                        <span class="shelf-item-date">${P(r.date)}</span>
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
                                    ${r.imageUrl?`<img src="${r.imageUrl}" alt="${r.title}" class="shelf-item-cover">`:`<div class="shelf-item-cover shelf-item-cover-placeholder">${L(r.type).label}</div>`}
                                    <div class="shelf-item-info">
                                        <span class="shelf-item-type">${L(r.type).label}</span>
                                        <div class="shelf-item-rating">${Je(r.rating)}</div>
                                    </div>
                                </a>
                            `).join("")}
                          </div>`}
                </div>
                <div class="shelf-base"></div>
            </section>
        </div>
    `});_.on("/writing",async()=>{ce();const e=(await le()).writings;if(e.length===0){z.innerHTML=`
            <div class="container">
                <div class="section-header fade-in">
                    <h1 class="section-title">Writing</h1>
                </div>
                <div class="empty-state">
                    <h2 class="empty-state-title">No writings yet</h2>
                    <p class="empty-state-text">Check back soon for new content.</p>
                </div>
            </div>
        `;return}const t=[...e].sort((n,s)=>new Date(s.date)-new Date(n.date));z.innerHTML=`
        <div class="container">
            <div class="section-header fade-in">
                <h1 class="section-title">Writing</h1>
            </div>
            <div class="writings-grid fade-in">
                ${t.map(n=>`
                    <a href="#/writing/${n.id}" class="card card-clickable writing-card">
                        <span class="writing-card-date">${P(n.date)}</span>
                        <h2 class="writing-card-title">${n.title}</h2>
                        <p class="writing-card-excerpt">${Wt(n.content)}</p>
                    </a>
                `).join("")}
            </div>
        </div>
    `});_.on("/writing/:id",async a=>{ce();const n=(await le()).writings.find(o=>o.id===a.id);if(!n){_.show404();return}const{metadata:s,content:i}=Ke(n.content),r=Ot(i);z.innerHTML=`
        <div class="container article-container fade-in">
            <div class="article-header">
                <a href="#/writing" class="article-back">← Back to Writing</a>
                <h1 class="article-title">${n.title}</h1>
                <p class="article-date">${P(n.date)}</p>
            </div>
            <div class="article-content">
                ${r}
            </div>
        </div>
    `});_.on("/media",async()=>{ce();const e=(await $e()).media;if(e.length===0){z.innerHTML=`
            <div class="container">
                <div class="section-header fade-in">
                    <h1 class="section-title">Media</h1>
                </div>
                <div class="empty-state">
                    <h2 class="empty-state-title">No reviews yet</h2>
                    <p class="empty-state-text">Check back soon for media reviews.</p>
                </div>
            </div>
        `;return}const t=[...e].sort((s,i)=>new Date(i.date)-new Date(s.date)),n=[...new Set(t.map(s=>s.type))];z.innerHTML=`
        <div class="container">
            <div class="section-header fade-in">
                <h1 class="section-title">Media</h1>
            </div>
            
            <div class="media-filters fade-in">
                <button class="filter-btn active" data-filter="all">All</button>
                ${n.map(s=>`
                    <button class="filter-btn" data-filter="${s}">${L(s).label}s</button>
                `).join("")}
            </div>
            
            <div class="media-grid fade-in" id="media-grid">
                ${Me(t)}
            </div>
        </div>
    `,document.querySelectorAll(".filter-btn").forEach(s=>{s.addEventListener("click",()=>{document.querySelectorAll(".filter-btn").forEach(o=>o.classList.remove("active")),s.classList.add("active");const i=s.dataset.filter,r=i==="all"?t:t.filter(o=>o.type===i);document.getElementById("media-grid").innerHTML=Me(r)})})});function Me(a){return a.map(e=>{let t;e.type==="restaurant"?t=`
                <div class="restaurant-cover">
                    <span class="restaurant-cover-name">${e.title}</span>
                    <span class="restaurant-cover-location">${e.artist||""}</span>
                </div>
            `:t=`<div style="display:flex;align-items:center;justify-content:center;height:100%;font-size:1rem;color:var(--color-text-muted);background:var(--color-bg-tertiary);">${L(e.type).label}</div>`;let n;switch(e.type){case"film":n="View on IMDb";break;case"book":n="View on Open Library";break;case"song":n="View on Deezer";break;case"album":n="View on Deezer";break;case"restaurant":n="Search on Google";break;default:n="View Details"}return`
        <div class="card media-card">
            <div class="media-card-image">
                ${e.imageUrl?`<img src="${e.imageUrl}" alt="${e.title}">`:t}
                <div class="media-card-overlay">
                    <a href="${e.externalUrl}" target="_blank" rel="noopener noreferrer" class="media-card-link">
                        ${n} →
                    </a>
                </div>
            </div>
            <div class="media-card-content">
                <span class="media-card-type">${L(e.type).label}</span>
                <h3 class="media-card-title">${e.title}</h3>
                <div class="star-rating">${Je(e.rating)}</div>
                ${e.review?`<p class="media-card-review">${e.review}</p>`:""}
                <span class="media-card-date">${P(e.date)}</span>
            </div>
        </div>
    `}).join("")}_.on("/admin",()=>{dn()?Xe(z):Ye(z)});tn(()=>{(window.location.hash==="#/"||window.location.hash===""||window.location.hash.startsWith("#/writing"))&&_.navigate(window.location.hash||"#/")},()=>{(window.location.hash==="#/"||window.location.hash===""||window.location.hash==="#/media")&&_.navigate(window.location.hash||"#/")});console.log("Zuber Seth Personal Website initialized with Firebase");
