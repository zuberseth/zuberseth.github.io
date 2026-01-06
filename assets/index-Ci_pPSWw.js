var Me=Object.defineProperty;var oe=a=>{throw TypeError(a)};var Ce=(a,e,t)=>e in a?Me(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t;var k=(a,e,t)=>Ce(a,typeof e!="symbol"?e+"":e,t),Pe=(a,e,t)=>e.has(a)||oe("Cannot "+t);var ce=(a,e,t)=>e.has(a)?oe("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(a):e.set(a,t);var N=(a,e,t)=>(Pe(a,e,"access private method"),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();class Ue{constructor(){this.routes={},this.currentRoute=null,window.addEventListener("hashchange",()=>this.handleRoute()),window.addEventListener("load",()=>this.handleRoute())}on(e,t){return this.routes[e]=t,this}navigate(e){window.location.hash=e}handleRoute(){const e=window.location.hash.slice(1)||"/",[t,...n]=e.split("/").filter(Boolean),s="/"+(t||"");this.updateNavLinks(s);let r=this.routes[s],i=n;if(!r){for(const[l,o]of Object.entries(this.routes))if(l.includes(":")){const d=l.split("/").filter(Boolean),c=[t,...n];if(d.length===c.length){let p=!0;i={};for(let u=0;u<d.length;u++)if(d[u].startsWith(":"))i[d[u].slice(1)]=c[u];else if(d[u]!==c[u]){p=!1;break}if(p){r=o;break}}}}r?(this.currentRoute=s,r(i)):this.show404()}updateNavLinks(e){document.querySelectorAll(".nav-link").forEach(t=>{const n=t.getAttribute("href").slice(1);n===e||e.startsWith(n)&&n!=="/"?t.classList.add("active"):t.classList.remove("active")})}show404(){const e=document.getElementById("main-content");e.innerHTML=`
            <div class="container">
                <div class="empty-state fade-in">
                    <h2 class="empty-state-title">Page Not Found</h2>
                    <p class="empty-state-text">The page you're looking for doesn't exist.</p>
                    <br>
                    <a href="#/" class="btn btn-primary">Go Home</a>
                </div>
            </div>
        `}}function X(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}let A=X();function be(a){A=a}const ke=/[&<>"']/,De=new RegExp(ke.source,"g"),we=/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,qe=new RegExp(we.source,"g"),Oe={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},de=a=>Oe[a];function y(a,e){if(e){if(ke.test(a))return a.replace(De,de)}else if(we.test(a))return a.replace(qe,de);return a}const je=/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig;function Ne(a){return a.replace(je,(e,t)=>(t=t.toLowerCase(),t==="colon"?":":t.charAt(0)==="#"?t.charAt(1)==="x"?String.fromCharCode(parseInt(t.substring(2),16)):String.fromCharCode(+t.substring(1)):""))}const He=/(^|[^\[])\^/g;function b(a,e){let t=typeof a=="string"?a:a.source;e=e||"";const n={replace:(s,r)=>{let i=typeof r=="string"?r:r.source;return i=i.replace(He,"$1"),t=t.replace(s,i),n},getRegex:()=>new RegExp(t,e)};return n}function ue(a){try{a=encodeURI(a).replace(/%25/g,"%")}catch{return null}return a}const U={exec:()=>null};function pe(a,e){const t=a.replace(/\|/g,(r,i,l)=>{let o=!1,d=i;for(;--d>=0&&l[d]==="\\";)o=!o;return o?"|":" |"}),n=t.split(/ \|/);let s=0;if(n[0].trim()||n.shift(),n.length>0&&!n[n.length-1].trim()&&n.pop(),e)if(n.length>e)n.splice(e);else for(;n.length<e;)n.push("");for(;s<n.length;s++)n[s]=n[s].trim().replace(/\\\|/g,"|");return n}function H(a,e,t){const n=a.length;if(n===0)return"";let s=0;for(;s<n&&a.charAt(n-s-1)===e;)s++;return a.slice(0,n-s)}function We(a,e){if(a.indexOf(e[1])===-1)return-1;let t=0;for(let n=0;n<a.length;n++)if(a[n]==="\\")n++;else if(a[n]===e[0])t++;else if(a[n]===e[1]&&(t--,t<0))return n;return-1}function he(a,e,t,n){const s=e.href,r=e.title?y(e.title):null,i=a[1].replace(/\\([\[\]])/g,"$1");if(a[0].charAt(0)!=="!"){n.state.inLink=!0;const l={type:"link",raw:t,href:s,title:r,text:i,tokens:n.inlineTokens(i)};return n.state.inLink=!1,l}return{type:"image",raw:t,href:s,title:r,text:y(i)}}function Ze(a,e){const t=a.match(/^(\s+)(?:```)/);if(t===null)return e;const n=t[1];return e.split(`
`).map(s=>{const r=s.match(/^\s+/);if(r===null)return s;const[i]=r;return i.length>=n.length?s.slice(n.length):s}).join(`
`)}class Z{constructor(e){k(this,"options");k(this,"rules");k(this,"lexer");this.options=e||A}space(e){const t=this.rules.block.newline.exec(e);if(t&&t[0].length>0)return{type:"space",raw:t[0]}}code(e){const t=this.rules.block.code.exec(e);if(t){const n=t[0].replace(/^ {1,4}/gm,"");return{type:"code",raw:t[0],codeBlockStyle:"indented",text:this.options.pedantic?n:H(n,`
`)}}}fences(e){const t=this.rules.block.fences.exec(e);if(t){const n=t[0],s=Ze(n,t[3]||"");return{type:"code",raw:n,lang:t[2]?t[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):t[2],text:s}}}heading(e){const t=this.rules.block.heading.exec(e);if(t){let n=t[2].trim();if(/#$/.test(n)){const s=H(n,"#");(this.options.pedantic||!s||/ $/.test(s))&&(n=s.trim())}return{type:"heading",raw:t[0],depth:t[1].length,text:n,tokens:this.lexer.inline(n)}}}hr(e){const t=this.rules.block.hr.exec(e);if(t)return{type:"hr",raw:t[0]}}blockquote(e){const t=this.rules.block.blockquote.exec(e);if(t){let n=t[0].replace(/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,`
    $1`);n=H(n.replace(/^ *>[ \t]?/gm,""),`
`);const s=this.lexer.state.top;this.lexer.state.top=!0;const r=this.lexer.blockTokens(n);return this.lexer.state.top=s,{type:"blockquote",raw:t[0],tokens:r,text:n}}}list(e){let t=this.rules.block.list.exec(e);if(t){let n=t[1].trim();const s=n.length>1,r={type:"list",raw:"",ordered:s,start:s?+n.slice(0,-1):"",loose:!1,items:[]};n=s?`\\d{1,9}\\${n.slice(-1)}`:`\\${n}`,this.options.pedantic&&(n=s?n:"[*+-]");const i=new RegExp(`^( {0,3}${n})((?:[	 ][^\\n]*)?(?:\\n|$))`);let l="",o="",d=!1;for(;e;){let c=!1;if(!(t=i.exec(e))||this.rules.block.hr.test(e))break;l=t[0],e=e.substring(l.length);let p=t[2].split(`
`,1)[0].replace(/^\t+/,f=>" ".repeat(3*f.length)),u=e.split(`
`,1)[0],g=0;this.options.pedantic?(g=2,o=p.trimStart()):(g=t[2].search(/[^ ]/),g=g>4?1:g,o=p.slice(g),g+=t[1].length);let x=!1;if(!p&&/^ *$/.test(u)&&(l+=u+`
`,e=e.substring(u.length+1),c=!0),!c){const f=new RegExp(`^ {0,${Math.min(3,g-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),w=new RegExp(`^ {0,${Math.min(3,g-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),L=new RegExp(`^ {0,${Math.min(3,g-1)}}(?:\`\`\`|~~~)`),le=new RegExp(`^ {0,${Math.min(3,g-1)}}#`);for(;e;){const K=e.split(`
`,1)[0];if(u=K,this.options.pedantic&&(u=u.replace(/^ {1,4}(?=( {4})*[^ ])/g,"  ")),L.test(u)||le.test(u)||f.test(u)||w.test(e))break;if(u.search(/[^ ]/)>=g||!u.trim())o+=`
`+u.slice(g);else{if(x||p.search(/[^ ]/)>=4||L.test(p)||le.test(p)||w.test(p))break;o+=`
`+u}!x&&!u.trim()&&(x=!0),l+=K+`
`,e=e.substring(K.length+1),p=u.slice(g)}}r.loose||(d?r.loose=!0:/\n *\n *$/.test(l)&&(d=!0));let v=null,h;this.options.gfm&&(v=/^\[[ xX]\] /.exec(o),v&&(h=v[0]!=="[ ] ",o=o.replace(/^\[[ xX]\] +/,""))),r.items.push({type:"list_item",raw:l,task:!!v,checked:h,loose:!1,text:o,tokens:[]}),r.raw+=l}r.items[r.items.length-1].raw=l.trimEnd(),r.items[r.items.length-1].text=o.trimEnd(),r.raw=r.raw.trimEnd();for(let c=0;c<r.items.length;c++)if(this.lexer.state.top=!1,r.items[c].tokens=this.lexer.blockTokens(r.items[c].text,[]),!r.loose){const p=r.items[c].tokens.filter(g=>g.type==="space"),u=p.length>0&&p.some(g=>/\n.*\n/.test(g.raw));r.loose=u}if(r.loose)for(let c=0;c<r.items.length;c++)r.items[c].loose=!0;return r}}html(e){const t=this.rules.block.html.exec(e);if(t)return{type:"html",block:!0,raw:t[0],pre:t[1]==="pre"||t[1]==="script"||t[1]==="style",text:t[0]}}def(e){const t=this.rules.block.def.exec(e);if(t){const n=t[1].toLowerCase().replace(/\s+/g," "),s=t[2]?t[2].replace(/^<(.*)>$/,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",r=t[3]?t[3].substring(1,t[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):t[3];return{type:"def",tag:n,raw:t[0],href:s,title:r}}}table(e){const t=this.rules.block.table.exec(e);if(!t||!/[:|]/.test(t[2]))return;const n=pe(t[1]),s=t[2].replace(/^\||\| *$/g,"").split("|"),r=t[3]&&t[3].trim()?t[3].replace(/\n[ \t]*$/,"").split(`
`):[],i={type:"table",raw:t[0],header:[],align:[],rows:[]};if(n.length===s.length){for(const l of s)/^ *-+: *$/.test(l)?i.align.push("right"):/^ *:-+: *$/.test(l)?i.align.push("center"):/^ *:-+ *$/.test(l)?i.align.push("left"):i.align.push(null);for(const l of n)i.header.push({text:l,tokens:this.lexer.inline(l)});for(const l of r)i.rows.push(pe(l,i.header.length).map(o=>({text:o,tokens:this.lexer.inline(o)})));return i}}lheading(e){const t=this.rules.block.lheading.exec(e);if(t)return{type:"heading",raw:t[0],depth:t[2].charAt(0)==="="?1:2,text:t[1],tokens:this.lexer.inline(t[1])}}paragraph(e){const t=this.rules.block.paragraph.exec(e);if(t){const n=t[1].charAt(t[1].length-1)===`
`?t[1].slice(0,-1):t[1];return{type:"paragraph",raw:t[0],text:n,tokens:this.lexer.inline(n)}}}text(e){const t=this.rules.block.text.exec(e);if(t)return{type:"text",raw:t[0],text:t[0],tokens:this.lexer.inline(t[0])}}escape(e){const t=this.rules.inline.escape.exec(e);if(t)return{type:"escape",raw:t[0],text:y(t[1])}}tag(e){const t=this.rules.inline.tag.exec(e);if(t)return!this.lexer.state.inLink&&/^<a /i.test(t[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&/^<\/a>/i.test(t[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&/^<(pre|code|kbd|script)(\s|>)/i.test(t[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(t[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:t[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:t[0]}}link(e){const t=this.rules.inline.link.exec(e);if(t){const n=t[2].trim();if(!this.options.pedantic&&/^</.test(n)){if(!/>$/.test(n))return;const i=H(n.slice(0,-1),"\\");if((n.length-i.length)%2===0)return}else{const i=We(t[2],"()");if(i>-1){const o=(t[0].indexOf("!")===0?5:4)+t[1].length+i;t[2]=t[2].substring(0,i),t[0]=t[0].substring(0,o).trim(),t[3]=""}}let s=t[2],r="";if(this.options.pedantic){const i=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(s);i&&(s=i[1],r=i[3])}else r=t[3]?t[3].slice(1,-1):"";return s=s.trim(),/^</.test(s)&&(this.options.pedantic&&!/>$/.test(n)?s=s.slice(1):s=s.slice(1,-1)),he(t,{href:s&&s.replace(this.rules.inline.anyPunctuation,"$1"),title:r&&r.replace(this.rules.inline.anyPunctuation,"$1")},t[0],this.lexer)}}reflink(e,t){let n;if((n=this.rules.inline.reflink.exec(e))||(n=this.rules.inline.nolink.exec(e))){const s=(n[2]||n[1]).replace(/\s+/g," "),r=t[s.toLowerCase()];if(!r){const i=n[0].charAt(0);return{type:"text",raw:i,text:i}}return he(n,r,n[0],this.lexer)}}emStrong(e,t,n=""){let s=this.rules.inline.emStrongLDelim.exec(e);if(!s||s[3]&&n.match(/[\p{L}\p{N}]/u))return;if(!(s[1]||s[2]||"")||!n||this.rules.inline.punctuation.exec(n)){const i=[...s[0]].length-1;let l,o,d=i,c=0;const p=s[0][0]==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(p.lastIndex=0,t=t.slice(-1*e.length+i);(s=p.exec(t))!=null;){if(l=s[1]||s[2]||s[3]||s[4]||s[5]||s[6],!l)continue;if(o=[...l].length,s[3]||s[4]){d+=o;continue}else if((s[5]||s[6])&&i%3&&!((i+o)%3)){c+=o;continue}if(d-=o,d>0)continue;o=Math.min(o,o+d+c);const u=[...s[0]][0].length,g=e.slice(0,i+s.index+u+o);if(Math.min(i,o)%2){const v=g.slice(1,-1);return{type:"em",raw:g,text:v,tokens:this.lexer.inlineTokens(v)}}const x=g.slice(2,-2);return{type:"strong",raw:g,text:x,tokens:this.lexer.inlineTokens(x)}}}}codespan(e){const t=this.rules.inline.code.exec(e);if(t){let n=t[2].replace(/\n/g," ");const s=/[^ ]/.test(n),r=/^ /.test(n)&&/ $/.test(n);return s&&r&&(n=n.substring(1,n.length-1)),n=y(n,!0),{type:"codespan",raw:t[0],text:n}}}br(e){const t=this.rules.inline.br.exec(e);if(t)return{type:"br",raw:t[0]}}del(e){const t=this.rules.inline.del.exec(e);if(t)return{type:"del",raw:t[0],text:t[2],tokens:this.lexer.inlineTokens(t[2])}}autolink(e){const t=this.rules.inline.autolink.exec(e);if(t){let n,s;return t[2]==="@"?(n=y(t[1]),s="mailto:"+n):(n=y(t[1]),s=n),{type:"link",raw:t[0],text:n,href:s,tokens:[{type:"text",raw:n,text:n}]}}}url(e){var n;let t;if(t=this.rules.inline.url.exec(e)){let s,r;if(t[2]==="@")s=y(t[0]),r="mailto:"+s;else{let i;do i=t[0],t[0]=((n=this.rules.inline._backpedal.exec(t[0]))==null?void 0:n[0])??"";while(i!==t[0]);s=y(t[0]),t[1]==="www."?r="http://"+t[0]:r=t[0]}return{type:"link",raw:t[0],text:s,href:r,tokens:[{type:"text",raw:s,text:s}]}}}inlineText(e){const t=this.rules.inline.text.exec(e);if(t){let n;return this.lexer.state.inRawBlock?n=t[0]:n=y(t[0]),{type:"text",raw:t[0],text:n}}}}const Fe=/^(?: *(?:\n|$))+/,Qe=/^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,Ge=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,q=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,Ke=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,ve=/(?:[*+-]|\d{1,9}[.)])/,ye=b(/^(?!bull |blockCode|fences|blockquote|heading|html)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html))+?)\n {0,3}(=+|-+) *(?:\n+|$)/).replace(/bull/g,ve).replace(/blockCode/g,/ {4}/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).getRegex(),ee=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,Je=/^[^\n]+/,te=/(?!\s*\])(?:\\.|[^\[\]\\])+/,Ve=b(/^ {0,3}\[(label)\]: *(?:\n *)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/).replace("label",te).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),Ye=b(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,ve).getRegex(),G="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",ne=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,Xe=b("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))","i").replace("comment",ne).replace("tag",G).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),xe=b(ee).replace("hr",q).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",G).getRegex(),et=b(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",xe).getRegex(),se={blockquote:et,code:Qe,def:Ve,fences:Ge,heading:Ke,hr:q,html:Xe,lheading:ye,list:Ye,newline:Fe,paragraph:xe,table:U,text:Je},fe=b("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",q).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code"," {4}[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",G).getRegex(),tt={...se,table:fe,paragraph:b(ee).replace("hr",q).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",fe).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",G).getRegex()},nt={...se,html:b(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",ne).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:U,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:b(ee).replace("hr",q).replace("heading",` *#{1,6} *[^
]`).replace("lheading",ye).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},$e=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,st=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,Te=/^( {2,}|\\)\n(?!\s*$)/,it=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,O="\\p{P}\\p{S}",rt=b(/^((?![*_])[\spunctuation])/,"u").replace(/punctuation/g,O).getRegex(),at=/\[[^[\]]*?\]\([^\(\)]*?\)|`[^`]*?`|<[^<>]*?>/g,lt=b(/^(?:\*+(?:((?!\*)[punct])|[^\s*]))|^_+(?:((?!_)[punct])|([^\s_]))/,"u").replace(/punct/g,O).getRegex(),ot=b("^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)[punct](\\*+)(?=[\\s]|$)|[^punct\\s](\\*+)(?!\\*)(?=[punct\\s]|$)|(?!\\*)[punct\\s](\\*+)(?=[^punct\\s])|[\\s](\\*+)(?!\\*)(?=[punct])|(?!\\*)[punct](\\*+)(?!\\*)(?=[punct])|[^punct\\s](\\*+)(?=[^punct\\s])","gu").replace(/punct/g,O).getRegex(),ct=b("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)[punct](_+)(?=[\\s]|$)|[^punct\\s](_+)(?!_)(?=[punct\\s]|$)|(?!_)[punct\\s](_+)(?=[^punct\\s])|[\\s](_+)(?!_)(?=[punct])|(?!_)[punct](_+)(?!_)(?=[punct])","gu").replace(/punct/g,O).getRegex(),dt=b(/\\([punct])/,"gu").replace(/punct/g,O).getRegex(),ut=b(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),pt=b(ne).replace("(?:-->|$)","-->").getRegex(),ht=b("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",pt).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),F=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,ft=b(/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/).replace("label",F).replace("href",/<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),Ee=b(/^!?\[(label)\]\[(ref)\]/).replace("label",F).replace("ref",te).getRegex(),Ie=b(/^!?\[(ref)\](?:\[\])?/).replace("ref",te).getRegex(),gt=b("reflink|nolink(?!\\()","g").replace("reflink",Ee).replace("nolink",Ie).getRegex(),ie={_backpedal:U,anyPunctuation:dt,autolink:ut,blockSkip:at,br:Te,code:st,del:U,emStrongLDelim:lt,emStrongRDelimAst:ot,emStrongRDelimUnd:ct,escape:$e,link:ft,nolink:Ie,punctuation:rt,reflink:Ee,reflinkSearch:gt,tag:ht,text:it,url:U},mt={...ie,link:b(/^!?\[(label)\]\((.*?)\)/).replace("label",F).getRegex(),reflink:b(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",F).getRegex()},J={...ie,escape:b($e).replace("])","~|])").getRegex(),url:b(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,"i").replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/},bt={...J,br:b(Te).replace("{2,}","*").getRegex(),text:b(J.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},W={normal:se,gfm:tt,pedantic:nt},P={normal:ie,gfm:J,breaks:bt,pedantic:mt};class T{constructor(e){k(this,"tokens");k(this,"options");k(this,"state");k(this,"tokenizer");k(this,"inlineQueue");this.tokens=[],this.tokens.links=Object.create(null),this.options=e||A,this.options.tokenizer=this.options.tokenizer||new Z,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};const t={block:W.normal,inline:P.normal};this.options.pedantic?(t.block=W.pedantic,t.inline=P.pedantic):this.options.gfm&&(t.block=W.gfm,this.options.breaks?t.inline=P.breaks:t.inline=P.gfm),this.tokenizer.rules=t}static get rules(){return{block:W,inline:P}}static lex(e,t){return new T(t).lex(e)}static lexInline(e,t){return new T(t).inlineTokens(e)}lex(e){e=e.replace(/\r\n|\r/g,`
`),this.blockTokens(e,this.tokens);for(let t=0;t<this.inlineQueue.length;t++){const n=this.inlineQueue[t];this.inlineTokens(n.src,n.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(e,t=[]){this.options.pedantic?e=e.replace(/\t/g,"    ").replace(/^ +$/gm,""):e=e.replace(/^( *)(\t+)/gm,(l,o,d)=>o+"    ".repeat(d.length));let n,s,r,i;for(;e;)if(!(this.options.extensions&&this.options.extensions.block&&this.options.extensions.block.some(l=>(n=l.call({lexer:this},e,t))?(e=e.substring(n.raw.length),t.push(n),!0):!1))){if(n=this.tokenizer.space(e)){e=e.substring(n.raw.length),n.raw.length===1&&t.length>0?t[t.length-1].raw+=`
`:t.push(n);continue}if(n=this.tokenizer.code(e)){e=e.substring(n.raw.length),s=t[t.length-1],s&&(s.type==="paragraph"||s.type==="text")?(s.raw+=`
`+n.raw,s.text+=`
`+n.text,this.inlineQueue[this.inlineQueue.length-1].src=s.text):t.push(n);continue}if(n=this.tokenizer.fences(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.heading(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.hr(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.blockquote(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.list(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.html(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.def(e)){e=e.substring(n.raw.length),s=t[t.length-1],s&&(s.type==="paragraph"||s.type==="text")?(s.raw+=`
`+n.raw,s.text+=`
`+n.raw,this.inlineQueue[this.inlineQueue.length-1].src=s.text):this.tokens.links[n.tag]||(this.tokens.links[n.tag]={href:n.href,title:n.title});continue}if(n=this.tokenizer.table(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.lheading(e)){e=e.substring(n.raw.length),t.push(n);continue}if(r=e,this.options.extensions&&this.options.extensions.startBlock){let l=1/0;const o=e.slice(1);let d;this.options.extensions.startBlock.forEach(c=>{d=c.call({lexer:this},o),typeof d=="number"&&d>=0&&(l=Math.min(l,d))}),l<1/0&&l>=0&&(r=e.substring(0,l+1))}if(this.state.top&&(n=this.tokenizer.paragraph(r))){s=t[t.length-1],i&&s.type==="paragraph"?(s.raw+=`
`+n.raw,s.text+=`
`+n.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=s.text):t.push(n),i=r.length!==e.length,e=e.substring(n.raw.length);continue}if(n=this.tokenizer.text(e)){e=e.substring(n.raw.length),s=t[t.length-1],s&&s.type==="text"?(s.raw+=`
`+n.raw,s.text+=`
`+n.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=s.text):t.push(n);continue}if(e){const l="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(l);break}else throw new Error(l)}}return this.state.top=!0,t}inline(e,t=[]){return this.inlineQueue.push({src:e,tokens:t}),t}inlineTokens(e,t=[]){let n,s,r,i=e,l,o,d;if(this.tokens.links){const c=Object.keys(this.tokens.links);if(c.length>0)for(;(l=this.tokenizer.rules.inline.reflinkSearch.exec(i))!=null;)c.includes(l[0].slice(l[0].lastIndexOf("[")+1,-1))&&(i=i.slice(0,l.index)+"["+"a".repeat(l[0].length-2)+"]"+i.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(l=this.tokenizer.rules.inline.blockSkip.exec(i))!=null;)i=i.slice(0,l.index)+"["+"a".repeat(l[0].length-2)+"]"+i.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);for(;(l=this.tokenizer.rules.inline.anyPunctuation.exec(i))!=null;)i=i.slice(0,l.index)+"++"+i.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);for(;e;)if(o||(d=""),o=!1,!(this.options.extensions&&this.options.extensions.inline&&this.options.extensions.inline.some(c=>(n=c.call({lexer:this},e,t))?(e=e.substring(n.raw.length),t.push(n),!0):!1))){if(n=this.tokenizer.escape(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.tag(e)){e=e.substring(n.raw.length),s=t[t.length-1],s&&n.type==="text"&&s.type==="text"?(s.raw+=n.raw,s.text+=n.text):t.push(n);continue}if(n=this.tokenizer.link(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.reflink(e,this.tokens.links)){e=e.substring(n.raw.length),s=t[t.length-1],s&&n.type==="text"&&s.type==="text"?(s.raw+=n.raw,s.text+=n.text):t.push(n);continue}if(n=this.tokenizer.emStrong(e,i,d)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.codespan(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.br(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.del(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.autolink(e)){e=e.substring(n.raw.length),t.push(n);continue}if(!this.state.inLink&&(n=this.tokenizer.url(e))){e=e.substring(n.raw.length),t.push(n);continue}if(r=e,this.options.extensions&&this.options.extensions.startInline){let c=1/0;const p=e.slice(1);let u;this.options.extensions.startInline.forEach(g=>{u=g.call({lexer:this},p),typeof u=="number"&&u>=0&&(c=Math.min(c,u))}),c<1/0&&c>=0&&(r=e.substring(0,c+1))}if(n=this.tokenizer.inlineText(r)){e=e.substring(n.raw.length),n.raw.slice(-1)!=="_"&&(d=n.raw.slice(-1)),o=!0,s=t[t.length-1],s&&s.type==="text"?(s.raw+=n.raw,s.text+=n.text):t.push(n);continue}if(e){const c="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(c);break}else throw new Error(c)}}return t}}class Q{constructor(e){k(this,"options");this.options=e||A}code(e,t,n){var r;const s=(r=(t||"").match(/^\S*/))==null?void 0:r[0];return e=e.replace(/\n$/,"")+`
`,s?'<pre><code class="language-'+y(s)+'">'+(n?e:y(e,!0))+`</code></pre>
`:"<pre><code>"+(n?e:y(e,!0))+`</code></pre>
`}blockquote(e){return`<blockquote>
${e}</blockquote>
`}html(e,t){return e}heading(e,t,n){return`<h${t}>${e}</h${t}>
`}hr(){return`<hr>
`}list(e,t,n){const s=t?"ol":"ul",r=t&&n!==1?' start="'+n+'"':"";return"<"+s+r+`>
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
`}strong(e){return`<strong>${e}</strong>`}em(e){return`<em>${e}</em>`}codespan(e){return`<code>${e}</code>`}br(){return"<br>"}del(e){return`<del>${e}</del>`}link(e,t,n){const s=ue(e);if(s===null)return n;e=s;let r='<a href="'+e+'"';return t&&(r+=' title="'+t+'"'),r+=">"+n+"</a>",r}image(e,t,n){const s=ue(e);if(s===null)return n;e=s;let r=`<img src="${e}" alt="${n}"`;return t&&(r+=` title="${t}"`),r+=">",r}text(e){return e}}class re{strong(e){return e}em(e){return e}codespan(e){return e}del(e){return e}html(e){return e}text(e){return e}link(e,t,n){return""+n}image(e,t,n){return""+n}br(){return""}}class E{constructor(e){k(this,"options");k(this,"renderer");k(this,"textRenderer");this.options=e||A,this.options.renderer=this.options.renderer||new Q,this.renderer=this.options.renderer,this.renderer.options=this.options,this.textRenderer=new re}static parse(e,t){return new E(t).parse(e)}static parseInline(e,t){return new E(t).parseInline(e)}parse(e,t=!0){let n="";for(let s=0;s<e.length;s++){const r=e[s];if(this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[r.type]){const i=r,l=this.options.extensions.renderers[i.type].call({parser:this},i);if(l!==!1||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(i.type)){n+=l||"";continue}}switch(r.type){case"space":continue;case"hr":{n+=this.renderer.hr();continue}case"heading":{const i=r;n+=this.renderer.heading(this.parseInline(i.tokens),i.depth,Ne(this.parseInline(i.tokens,this.textRenderer)));continue}case"code":{const i=r;n+=this.renderer.code(i.text,i.lang,!!i.escaped);continue}case"table":{const i=r;let l="",o="";for(let c=0;c<i.header.length;c++)o+=this.renderer.tablecell(this.parseInline(i.header[c].tokens),{header:!0,align:i.align[c]});l+=this.renderer.tablerow(o);let d="";for(let c=0;c<i.rows.length;c++){const p=i.rows[c];o="";for(let u=0;u<p.length;u++)o+=this.renderer.tablecell(this.parseInline(p[u].tokens),{header:!1,align:i.align[u]});d+=this.renderer.tablerow(o)}n+=this.renderer.table(l,d);continue}case"blockquote":{const i=r,l=this.parse(i.tokens);n+=this.renderer.blockquote(l);continue}case"list":{const i=r,l=i.ordered,o=i.start,d=i.loose;let c="";for(let p=0;p<i.items.length;p++){const u=i.items[p],g=u.checked,x=u.task;let v="";if(u.task){const h=this.renderer.checkbox(!!g);d?u.tokens.length>0&&u.tokens[0].type==="paragraph"?(u.tokens[0].text=h+" "+u.tokens[0].text,u.tokens[0].tokens&&u.tokens[0].tokens.length>0&&u.tokens[0].tokens[0].type==="text"&&(u.tokens[0].tokens[0].text=h+" "+u.tokens[0].tokens[0].text)):u.tokens.unshift({type:"text",text:h+" "}):v+=h+" "}v+=this.parse(u.tokens,d),c+=this.renderer.listitem(v,x,!!g)}n+=this.renderer.list(c,l,o);continue}case"html":{const i=r;n+=this.renderer.html(i.text,i.block);continue}case"paragraph":{const i=r;n+=this.renderer.paragraph(this.parseInline(i.tokens));continue}case"text":{let i=r,l=i.tokens?this.parseInline(i.tokens):i.text;for(;s+1<e.length&&e[s+1].type==="text";)i=e[++s],l+=`
`+(i.tokens?this.parseInline(i.tokens):i.text);n+=t?this.renderer.paragraph(l):l;continue}default:{const i='Token with "'+r.type+'" type was not found.';if(this.options.silent)return console.error(i),"";throw new Error(i)}}}return n}parseInline(e,t){t=t||this.renderer;let n="";for(let s=0;s<e.length;s++){const r=e[s];if(this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[r.type]){const i=this.options.extensions.renderers[r.type].call({parser:this},r);if(i!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(r.type)){n+=i||"";continue}}switch(r.type){case"escape":{const i=r;n+=t.text(i.text);break}case"html":{const i=r;n+=t.html(i.text);break}case"link":{const i=r;n+=t.link(i.href,i.title,this.parseInline(i.tokens,t));break}case"image":{const i=r;n+=t.image(i.href,i.title,i.text);break}case"strong":{const i=r;n+=t.strong(this.parseInline(i.tokens,t));break}case"em":{const i=r;n+=t.em(this.parseInline(i.tokens,t));break}case"codespan":{const i=r;n+=t.codespan(i.text);break}case"br":{n+=t.br();break}case"del":{const i=r;n+=t.del(this.parseInline(i.tokens,t));break}case"text":{const i=r;n+=t.text(i.text);break}default:{const i='Token with "'+r.type+'" type was not found.';if(this.options.silent)return console.error(i),"";throw new Error(i)}}}return n}}class D{constructor(e){k(this,"options");this.options=e||A}preprocess(e){return e}postprocess(e){return e}processAllTokens(e){return e}}k(D,"passThroughHooks",new Set(["preprocess","postprocess","processAllTokens"]));var z,V,Se;class kt{constructor(...e){ce(this,z);k(this,"defaults",X());k(this,"options",this.setOptions);k(this,"parse",N(this,z,V).call(this,T.lex,E.parse));k(this,"parseInline",N(this,z,V).call(this,T.lexInline,E.parseInline));k(this,"Parser",E);k(this,"Renderer",Q);k(this,"TextRenderer",re);k(this,"Lexer",T);k(this,"Tokenizer",Z);k(this,"Hooks",D);this.use(...e)}walkTokens(e,t){var s,r;let n=[];for(const i of e)switch(n=n.concat(t.call(this,i)),i.type){case"table":{const l=i;for(const o of l.header)n=n.concat(this.walkTokens(o.tokens,t));for(const o of l.rows)for(const d of o)n=n.concat(this.walkTokens(d.tokens,t));break}case"list":{const l=i;n=n.concat(this.walkTokens(l.items,t));break}default:{const l=i;(r=(s=this.defaults.extensions)==null?void 0:s.childTokens)!=null&&r[l.type]?this.defaults.extensions.childTokens[l.type].forEach(o=>{const d=l[o].flat(1/0);n=n.concat(this.walkTokens(d,t))}):l.tokens&&(n=n.concat(this.walkTokens(l.tokens,t)))}}return n}use(...e){const t=this.defaults.extensions||{renderers:{},childTokens:{}};return e.forEach(n=>{const s={...n};if(s.async=this.defaults.async||s.async||!1,n.extensions&&(n.extensions.forEach(r=>{if(!r.name)throw new Error("extension name required");if("renderer"in r){const i=t.renderers[r.name];i?t.renderers[r.name]=function(...l){let o=r.renderer.apply(this,l);return o===!1&&(o=i.apply(this,l)),o}:t.renderers[r.name]=r.renderer}if("tokenizer"in r){if(!r.level||r.level!=="block"&&r.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");const i=t[r.level];i?i.unshift(r.tokenizer):t[r.level]=[r.tokenizer],r.start&&(r.level==="block"?t.startBlock?t.startBlock.push(r.start):t.startBlock=[r.start]:r.level==="inline"&&(t.startInline?t.startInline.push(r.start):t.startInline=[r.start]))}"childTokens"in r&&r.childTokens&&(t.childTokens[r.name]=r.childTokens)}),s.extensions=t),n.renderer){const r=this.defaults.renderer||new Q(this.defaults);for(const i in n.renderer){if(!(i in r))throw new Error(`renderer '${i}' does not exist`);if(i==="options")continue;const l=i,o=n.renderer[l],d=r[l];r[l]=(...c)=>{let p=o.apply(r,c);return p===!1&&(p=d.apply(r,c)),p||""}}s.renderer=r}if(n.tokenizer){const r=this.defaults.tokenizer||new Z(this.defaults);for(const i in n.tokenizer){if(!(i in r))throw new Error(`tokenizer '${i}' does not exist`);if(["options","rules","lexer"].includes(i))continue;const l=i,o=n.tokenizer[l],d=r[l];r[l]=(...c)=>{let p=o.apply(r,c);return p===!1&&(p=d.apply(r,c)),p}}s.tokenizer=r}if(n.hooks){const r=this.defaults.hooks||new D;for(const i in n.hooks){if(!(i in r))throw new Error(`hook '${i}' does not exist`);if(i==="options")continue;const l=i,o=n.hooks[l],d=r[l];D.passThroughHooks.has(i)?r[l]=c=>{if(this.defaults.async)return Promise.resolve(o.call(r,c)).then(u=>d.call(r,u));const p=o.call(r,c);return d.call(r,p)}:r[l]=(...c)=>{let p=o.apply(r,c);return p===!1&&(p=d.apply(r,c)),p}}s.hooks=r}if(n.walkTokens){const r=this.defaults.walkTokens,i=n.walkTokens;s.walkTokens=function(l){let o=[];return o.push(i.call(this,l)),r&&(o=o.concat(r.call(this,l))),o}}this.defaults={...this.defaults,...s}}),this}setOptions(e){return this.defaults={...this.defaults,...e},this}lexer(e,t){return T.lex(e,t??this.defaults)}parser(e,t){return E.parse(e,t??this.defaults)}}z=new WeakSet,V=function(e,t){return(n,s)=>{const r={...s},i={...this.defaults,...r};this.defaults.async===!0&&r.async===!1&&(i.silent||console.warn("marked(): The async option was set to true by an extension. The async: false option sent to parse will be ignored."),i.async=!0);const l=N(this,z,Se).call(this,!!i.silent,!!i.async);if(typeof n>"u"||n===null)return l(new Error("marked(): input parameter is undefined or null"));if(typeof n!="string")return l(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(n)+", string expected"));if(i.hooks&&(i.hooks.options=i),i.async)return Promise.resolve(i.hooks?i.hooks.preprocess(n):n).then(o=>e(o,i)).then(o=>i.hooks?i.hooks.processAllTokens(o):o).then(o=>i.walkTokens?Promise.all(this.walkTokens(o,i.walkTokens)).then(()=>o):o).then(o=>t(o,i)).then(o=>i.hooks?i.hooks.postprocess(o):o).catch(l);try{i.hooks&&(n=i.hooks.preprocess(n));let o=e(n,i);i.hooks&&(o=i.hooks.processAllTokens(o)),i.walkTokens&&this.walkTokens(o,i.walkTokens);let d=t(o,i);return i.hooks&&(d=i.hooks.postprocess(d)),d}catch(o){return l(o)}}},Se=function(e,t){return n=>{if(n.message+=`
Please report this to https://github.com/markedjs/marked.`,e){const s="<p>An error occurred:</p><pre>"+y(n.message+"",!0)+"</pre>";return t?Promise.resolve(s):s}if(t)return Promise.reject(n);throw n}};const _=new kt;function m(a,e){return _.parse(a,e)}m.options=m.setOptions=function(a){return _.setOptions(a),m.defaults=_.defaults,be(m.defaults),m};m.getDefaults=X;m.defaults=A;m.use=function(...a){return _.use(...a),m.defaults=_.defaults,be(m.defaults),m};m.walkTokens=function(a,e){return _.walkTokens(a,e)};m.parseInline=_.parseInline;m.Parser=E;m.parser=E.parse;m.Renderer=Q;m.TextRenderer=re;m.Lexer=T;m.lexer=T.lex;m.Tokenizer=Z;m.Hooks=D;m.parse=m;m.options;m.setOptions;m.use;m.walkTokens;m.parseInline;E.parse;T.lex;m.setOptions({breaks:!0,gfm:!0});function Re(a){const e=/^---\n([\s\S]*?)\n---\n/,t=a.match(e);if(!t)return{metadata:{},content:a};const n=t[1],s=a.slice(t[0].length),r={};return n.split(`
`).forEach(i=>{const l=i.indexOf(":");if(l>0){const o=i.slice(0,l).trim(),d=i.slice(l+1).trim().replace(/^["']|["']$/g,"");r[o]=d}}),{metadata:r,content:s}}function wt(a){return m.parse(a)}function vt(a,e=150){const{content:t}=Re(a),n=t.replace(/#{1,6}\s+/g,"").replace(/\*\*|__/g,"").replace(/\*|_/g,"").replace(/\[([^\]]+)\]\([^)]+\)/g,"$1").replace(/`([^`]+)`/g,"$1").replace(/\n+/g," ").trim();return n.length<=e?n:n.slice(0,e).trim()+"..."}function B(a){return new Date(a).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"})}const S={omdb:{key:localStorage.getItem("omdb_api_key")||"5a9c220",baseUrl:"https://www.omdbapi.com/"},openLibrary:{baseUrl:"https://openlibrary.org"},deezer:{baseUrl:"https://api.deezer.com"}};function yt(a){a.omdb&&(localStorage.setItem("omdb_api_key",a.omdb),S.omdb.key=a.omdb)}function xt(){return{omdb:S.omdb.key}}function $t(a){switch(a){case"film":return!!S.omdb.key;case"book":return!0;case"song":return!0;default:return!1}}async function Tt(a){if(!S.omdb.key)throw new Error("OMDb API key not configured. Please add it in the admin settings.");const e=`${S.omdb.baseUrl}?apikey=${S.omdb.key}&s=${encodeURIComponent(a)}&type=movie`,n=await(await fetch(e)).json();if(n.Error){if(n.Error==="Movie not found!")return[];throw new Error(n.Error)}return(n.Search||[]).map(s=>({id:s.imdbID,title:s.Title,year:s.Year,imageUrl:s.Poster!=="N/A"?s.Poster:null,externalUrl:`https://www.imdb.com/title/${s.imdbID}`,type:"film"}))}async function Et(a){const e=`${S.openLibrary.baseUrl}/search.json?q=${encodeURIComponent(a)}&limit=10`,n=await(await fetch(e)).json();return!n.docs||n.docs.length===0?[]:n.docs.map(s=>{var r;return{id:((r=s.key)==null?void 0:r.replace("/works/",""))||s.cover_edition_key||String(Math.random()),title:s.title||"Unknown Title",author:s.author_name?s.author_name.join(", "):"Unknown",year:s.first_publish_year?String(s.first_publish_year):"",imageUrl:s.cover_i?`https://covers.openlibrary.org/b/id/${s.cover_i}-M.jpg`:null,externalUrl:s.key?`https://openlibrary.org${s.key}`:`https://openlibrary.org/search?q=${encodeURIComponent(a)}`,type:"book"}})}async function It(a){const e=`https://corsproxy.io/?${encodeURIComponent(`${S.deezer.baseUrl}/search?q=${encodeURIComponent(a)}&limit=10`)}`;try{const n=await(await fetch(e)).json();if(n.error)throw new Error(n.error.message||"Deezer search failed");return(n.data||[]).map(s=>{var r,i,l,o;return{id:s.id.toString(),title:s.title,artist:((r=s.artist)==null?void 0:r.name)||"Unknown Artist",album:((i=s.album)==null?void 0:i.title)||"",year:"",imageUrl:((l=s.album)==null?void 0:l.cover_medium)||((o=s.album)==null?void 0:o.cover)||null,externalUrl:s.link,type:"song"}})}catch{return St(a)}}async function St(a){const e=`https://www.theaudiodb.com/api/v1/json/2/search.php?s=${encodeURIComponent(a)}`;try{const n=await(await fetch(e)).json();return!n.artists||n.artists.length===0?[]:n.artists.slice(0,10).map(s=>({id:s.idArtist,title:s.strArtist,artist:s.strGenre||"Music",year:s.intFormedYear||"",imageUrl:s.strArtistThumb||null,externalUrl:s.strWebsite?`https://${s.strWebsite}`:`https://www.theaudiodb.com/artist/${s.idArtist}`,type:"song"}))}catch{throw new Error("Song search is currently unavailable. Please try again later.")}}async function Rt(a,e){if(!a.trim())return[];switch(e){case"film":return Tt(a);case"book":return Et(a);case"song":return It(a);default:throw new Error(`Unknown media type: ${e}`)}}function I(a){return{film:{label:"Film",color:"#ef4444"},book:{label:"Book",color:"#3b82f6"},song:{label:"Song",color:"#22c55e"}}[a]||{label:a,color:"#6366f1"}}const ae="zuber_seth_admin_auth",Lt="admin123";function _t(){return localStorage.getItem(ae)==="authenticated"}function zt(a){const e=localStorage.getItem("admin_password")||Lt;return a===e?(localStorage.setItem(ae,"authenticated"),!0):!1}function At(){localStorage.removeItem(ae)}function Bt(a){localStorage.setItem("admin_password",a)}function C(){const a=localStorage.getItem("writings_data");return a?JSON.parse(a):{writings:[]}}function Le(a){localStorage.setItem("writings_data",JSON.stringify(a))}function j(){const a=localStorage.getItem("media_data");return a?JSON.parse(a):{media:[]}}function _e(a){localStorage.setItem("media_data",JSON.stringify(a))}function Mt(a,e,t){const n=C(),s=Date.now().toString(36)+Math.random().toString(36).substr(2);return n.writings.push({id:s,title:a,date:e,content:t}),Le(n),s}function Ct(a){const e=C();e.writings=e.writings.filter(t=>t.id!==a),Le(e)}function Pt(a,e,t){const n=j(),s=Date.now().toString(36)+Math.random().toString(36).substr(2);return n.media.push({id:s,type:a.type,title:a.title,artist:a.artist||a.author||"",year:a.year||"",imageUrl:a.imageUrl,externalUrl:a.externalUrl,rating:e,review:t,date:new Date().toISOString().split("T")[0]}),_e(n),s}function Ut(a){const e=j();e.media=e.media.filter(t=>t.id!==a),_e(e)}function ze(a){a.innerHTML=`
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
    `;const e=document.getElementById("login-form"),t=document.getElementById("login-error");e.addEventListener("submit",n=>{n.preventDefault();const s=document.getElementById("password-input").value;zt(s)?Ae(a):(t.textContent="Incorrect password",t.style.display="block")})}function Ae(a){a.innerHTML=`
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
    `;const e=document.querySelectorAll(".admin-tab");e.forEach(t=>{t.addEventListener("click",()=>{e.forEach(n=>n.classList.remove("active")),t.classList.add("active"),ge(t.dataset.tab)})}),document.getElementById("logout-btn").addEventListener("click",()=>{At(),ze(a)}),ge("writing")}function ge(a){const e=document.getElementById("admin-content");switch(a){case"writing":Dt(e);break;case"media":qt(e);break;case"manage":Y(e);break;case"settings":Ot(e);break}}function Dt(a){a.innerHTML=`
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
    `;const e=document.getElementById("upload-zone"),t=document.getElementById("file-input"),n=document.getElementById("file-preview");e.addEventListener("click",()=>t.click()),e.addEventListener("dragover",r=>{r.preventDefault(),e.classList.add("dragover")}),e.addEventListener("dragleave",()=>{e.classList.remove("dragover")}),e.addEventListener("drop",r=>{r.preventDefault(),e.classList.remove("dragover");const i=r.dataTransfer.files[0];i&&s(i)}),t.addEventListener("change",r=>{const i=r.target.files[0];i&&s(i)});function s(r){const i=new FileReader;i.onload=l=>{const o=l.target.result;let d=r.name.replace(/\.(md|markdown|txt)$/,"").replace(/-/g," ");const c=o.match(/^#\s+(.+)$/m);c&&(d=c[1]),document.getElementById("writing-title").value=d,document.getElementById("writing-date").value=new Date().toISOString().split("T")[0],document.getElementById("writing-content").value=o,n.style.display="block",e.style.display="none"},i.readAsText(r)}document.getElementById("save-writing").addEventListener("click",()=>{const r=document.getElementById("writing-title").value.trim(),i=document.getElementById("writing-date").value,l=document.getElementById("writing-content").value;if(!r||!i||!l){$("Please fill in all fields","error");return}Mt(r,i,l),$("Writing saved successfully!","success"),n.style.display="none",e.style.display="block",document.getElementById("writing-title").value="",document.getElementById("writing-content").value=""})}function qt(a){a.innerHTML=`
        <div class="card">
            <h3 style="margin-bottom: var(--space-6);">Add Media Review</h3>
            
            <div class="search-container">
                <div class="search-form">
                    <select class="search-type-select" id="media-type">
                        <option value="film">Film</option>
                        <option value="book">Book</option>
                        <option value="song">Song</option>
                    </select>
                    <input 
                        type="text" 
                        class="form-input search-input" 
                        id="media-search"
                        placeholder="Search for a film, book, or song..."
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
    `;let e=null,t=0;const n=document.getElementById("media-search"),s=document.getElementById("search-btn"),r=document.getElementById("media-type"),i=document.getElementById("search-results"),l=document.getElementById("review-form");r.addEventListener("change",()=>{const h=r.value;$t(h)||$(`${I(h).label} search requires API configuration. Check Settings.`,"error")});async function o(){const h=n.value.trim(),f=r.value;if(h){i.innerHTML='<div class="loading"><div class="spinner"></div></div>',l.style.display="none",e=null;try{const w=await Rt(h,f);d(w)}catch(w){i.innerHTML=`<p style="color: var(--color-error);">${w.message}</p>`}}}s.addEventListener("click",o),n.addEventListener("keypress",h=>{h.key==="Enter"&&o()});function d(h){if(h.length===0){i.innerHTML='<p style="color: var(--color-text-muted);">No results found</p>';return}i.innerHTML=h.map(f=>`
            <div class="search-result-item" data-id="${f.id}">
                <div class="search-result-image">
                    ${f.imageUrl?`<img src="${f.imageUrl}" alt="${f.title}">`:`<div style="display:flex;align-items:center;justify-content:center;height:100%;font-size:1rem;color:var(--color-text-muted);">${I(f.type).label}</div>`}
                </div>
                <div class="search-result-info">
                    <div class="search-result-title">${f.title}</div>
                    <div class="search-result-meta">${f.artist||f.author||""} ${f.year?`(${f.year})`:""}</div>
                </div>
            </div>
        `).join(""),window._searchResults=h,i.querySelectorAll(".search-result-item").forEach(f=>{f.addEventListener("click",()=>{i.querySelectorAll(".search-result-item").forEach(w=>w.classList.remove("selected")),f.classList.add("selected"),e=window._searchResults.find(w=>w.id===f.dataset.id),c(e)})})}function c(h){const f=document.getElementById("selected-media-info");f.innerHTML=`
            <div style="display: flex; align-items: center; gap: var(--space-4);">
                ${h.imageUrl?`<img src="${h.imageUrl}" style="width: 60px; height: 60px; object-fit: cover; border-radius: var(--radius-md);">`:""}
                <div>
                    <strong>${h.title}</strong><br>
                    <span style="color: var(--color-text-muted);">${h.artist||h.author||""} ${h.year?`(${h.year})`:""}</span>
                </div>
            </div>
        `,t=0,p.value=0,x(0),document.getElementById("review-text").value="",document.getElementById("word-count").textContent="0",l.style.display="block"}const p=document.getElementById("rating-slider"),u=document.getElementById("rating-stars"),g=document.getElementById("rating-value");function x(h){const f=h/2;t=f;let w="";for(let L=1;L<=5;L++)f>=L?w+="★":f>=L-.5?w+="⯨":w+="☆";u.textContent=w,g.textContent=f.toFixed(1)}p.addEventListener("input",h=>{x(parseInt(h.target.value))}),x(0);const v=document.getElementById("review-text");v.addEventListener("input",()=>{const f=v.value.trim().split(/\s+/).filter(w=>w.length>0).length;document.getElementById("word-count").textContent=f,f>100?document.getElementById("word-count").style.color="var(--color-error)":document.getElementById("word-count").style.color=""}),document.getElementById("save-review").addEventListener("click",()=>{if(!e){$("Please select a media item","error");return}if(t===0){$("Please select a rating","error");return}const h=v.value.trim();if(h.split(/\s+/).filter(w=>w.length>0).length>100){$("Review must be 100 words or less","error");return}Pt(e,t,h),$("Review saved successfully!","success"),i.innerHTML="",l.style.display="none",n.value="",e=null})}function Y(a){const e=C().writings,t=j().media;a.innerHTML=`
        <div class="card" style="margin-bottom: var(--space-6);">
            <h3 style="margin-bottom: var(--space-6);">Writings (${e.length})</h3>
            <div class="content-list" id="writings-list">
                ${e.length===0?'<p style="color: var(--color-text-muted);">No writings yet</p>':e.map(n=>`
                        <div class="content-item">
                            <div class="content-item-info">
                                <div class="content-item-title">${n.title}</div>
                                <div class="content-item-meta">${B(n.date)}</div>
                            </div>
                            <div class="content-item-actions">
                                <button class="btn btn-danger btn-sm" data-delete-writing="${n.id}">Delete</button>
                            </div>
                        </div>
                    `).join("")}
            </div>
        </div>
        
        <div class="card">
            <h3 style="margin-bottom: var(--space-6);">Media Reviews (${t.length})</h3>
            <div class="content-list" id="media-list">
                ${t.length===0?'<p style="color: var(--color-text-muted);">No media reviews yet</p>':t.map(n=>`
                        <div class="content-item">
                            <div class="content-item-image">
                                ${n.imageUrl?`<img src="${n.imageUrl}" alt="${n.title}">`:`<div style="display:flex;align-items:center;justify-content:center;height:100%;background:var(--color-bg-secondary);font-size:0.75rem;color:var(--color-text-muted);">${I(n.type).label}</div>`}
                            </div>
                            <div class="content-item-info">
                                <div class="content-item-title">${n.title}</div>
                                <div class="content-item-meta">
                                    ${I(n.type).label} • ${"★".repeat(n.rating)}${"☆".repeat(5-n.rating)} • ${B(n.date)}
                                </div>
                            </div>
                            <div class="content-item-actions">
                                <button class="btn btn-danger btn-sm" data-delete-media="${n.id}">Delete</button>
                            </div>
                        </div>
                    `).join("")}
            </div>
        </div>
    `,a.querySelectorAll("[data-delete-writing]").forEach(n=>{n.addEventListener("click",()=>{confirm("Are you sure you want to delete this writing?")&&(Ct(n.dataset.deleteWriting),$("Writing deleted","success"),Y(a))})}),a.querySelectorAll("[data-delete-media]").forEach(n=>{n.addEventListener("click",()=>{confirm("Are you sure you want to delete this review?")&&(Ut(n.dataset.deleteMedia),$("Review deleted","success"),Y(a))})})}function Ot(a){const e=xt();a.innerHTML=`
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
    `,document.getElementById("change-password").addEventListener("click",()=>{const t=document.getElementById("new-password").value;if(t.length<4){$("Password must be at least 4 characters","error");return}Bt(t),$("Password changed successfully","success"),document.getElementById("new-password").value=""}),document.getElementById("save-api-keys").addEventListener("click",()=>{yt({omdb:document.getElementById("omdb-key").value.trim()}),$("API keys saved successfully","success")})}function $(a,e="success"){let t=document.querySelector(".toast-container");t||(t=document.createElement("div"),t.className="toast-container",document.body.appendChild(t));const n=document.createElement("div");n.className=`toast toast-${e}`,n.textContent=a,t.appendChild(n),setTimeout(()=>{n.remove()},3e3)}const M=new Ue,R=document.getElementById("main-content");function Be(a){let e="";for(let t=1;t<=5;t++)a>=t?e+='<span class="star filled">★</span>':a>=t-.5?e+='<span class="star half">★</span>':e+='<span class="star">★</span>';return e}M.on("/",()=>{const a=C().writings,e=j().media,t=[...a].sort((s,r)=>new Date(r.date)-new Date(s.date)).slice(0,8),n=[...e].sort((s,r)=>new Date(r.date)-new Date(s.date)).slice(0,8);R.innerHTML=`
        <div class="container home-container fade-in">
            <!-- Writing Shelf -->
            <section class="bookshelf">
                <div class="shelf-header">
                    <h2 class="shelf-title">Writing</h2>
                    ${a.length>0?'<a href="#/writing" class="shelf-link">View all</a>':""}
                </div>
                <div class="shelf-content">
                    ${t.length===0?'<div class="shelf-empty">No writings yet</div>':`<div class="shelf-scroll">
                            ${t.map(s=>`
                                <a href="#/writing/${s.id}" class="shelf-item shelf-item-writing">
                                    <div class="shelf-item-spine"></div>
                                    <div class="shelf-item-content">
                                        <span class="shelf-item-date">${B(s.date)}</span>
                                        <h3 class="shelf-item-title">${s.title}</h3>
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
                    ${e.length>0?'<a href="#/media" class="shelf-link">View all</a>':""}
                </div>
                <div class="shelf-content">
                    ${n.length===0?'<div class="shelf-empty">No media yet</div>':`<div class="shelf-scroll">
                            ${n.map(s=>`
                                <a href="#/media" class="shelf-item shelf-item-media">
                                    ${s.imageUrl?`<img src="${s.imageUrl}" alt="${s.title}" class="shelf-item-cover">`:`<div class="shelf-item-cover shelf-item-cover-placeholder">${I(s.type).label}</div>`}
                                    <div class="shelf-item-info">
                                        <span class="shelf-item-type">${I(s.type).label}</span>
                                        <div class="shelf-item-rating">${Be(s.rating)}</div>
                                    </div>
                                </a>
                            `).join("")}
                          </div>`}
                </div>
                <div class="shelf-base"></div>
            </section>
        </div>
    `});M.on("/writing",()=>{const a=C().writings;if(a.length===0){R.innerHTML=`
            <div class="container">
                <div class="section-header fade-in">
                    <h1 class="section-title">Writing</h1>
                </div>
                <div class="empty-state">
                    <h2 class="empty-state-title">No writings yet</h2>
                    <p class="empty-state-text">Check back soon for new content.</p>
                </div>
            </div>
        `;return}const e=[...a].sort((t,n)=>new Date(n.date)-new Date(t.date));R.innerHTML=`
        <div class="container">
            <div class="section-header fade-in">
                <h1 class="section-title">Writing</h1>
            </div>
            <div class="writings-grid fade-in">
                ${e.map(t=>`
                    <a href="#/writing/${t.id}" class="card card-clickable writing-card">
                        <span class="writing-card-date">${B(t.date)}</span>
                        <h2 class="writing-card-title">${t.title}</h2>
                        <p class="writing-card-excerpt">${vt(t.content)}</p>
                    </a>
                `).join("")}
            </div>
        </div>
    `});M.on("/writing/:id",a=>{const t=C().writings.find(i=>i.id===a.id);if(!t){M.show404();return}const{metadata:n,content:s}=Re(t.content),r=wt(s);R.innerHTML=`
        <div class="container article-container fade-in">
            <div class="article-header">
                <a href="#/writing" class="article-back">← Back to Writing</a>
                <h1 class="article-title">${t.title}</h1>
                <p class="article-date">${B(t.date)}</p>
            </div>
            <div class="article-content">
                ${r}
            </div>
        </div>
    `});M.on("/media",()=>{const a=j().media;if(a.length===0){R.innerHTML=`
            <div class="container">
                <div class="section-header fade-in">
                    <h1 class="section-title">Media</h1>
                </div>
                <div class="empty-state">
                    <h2 class="empty-state-title">No reviews yet</h2>
                    <p class="empty-state-text">Check back soon for media reviews.</p>
                </div>
            </div>
        `;return}const e=[...a].sort((n,s)=>new Date(s.date)-new Date(n.date)),t=[...new Set(e.map(n=>n.type))];R.innerHTML=`
        <div class="container">
            <div class="section-header fade-in">
                <h1 class="section-title">Media</h1>
            </div>
            
            <div class="media-filters fade-in">
                <button class="filter-btn active" data-filter="all">All</button>
                ${t.map(n=>`
                    <button class="filter-btn" data-filter="${n}">${I(n).label}s</button>
                `).join("")}
            </div>
            
            <div class="media-grid fade-in" id="media-grid">
                ${me(e)}
            </div>
        </div>
    `,document.querySelectorAll(".filter-btn").forEach(n=>{n.addEventListener("click",()=>{document.querySelectorAll(".filter-btn").forEach(i=>i.classList.remove("active")),n.classList.add("active");const s=n.dataset.filter,r=s==="all"?e:e.filter(i=>i.type===s);document.getElementById("media-grid").innerHTML=me(r)})})});function me(a){return a.map(e=>`
        <div class="card media-card">
            <div class="media-card-image">
                ${e.imageUrl?`<img src="${e.imageUrl}" alt="${e.title}">`:`<div style="display:flex;align-items:center;justify-content:center;height:100%;font-size:1rem;color:var(--color-text-muted);background:var(--color-bg-tertiary);">${I(e.type).label}</div>`}
                <div class="media-card-overlay">
                    <a href="${e.externalUrl}" target="_blank" rel="noopener noreferrer" class="media-card-link">
                        View on ${e.type==="film"?"IMDb":e.type==="book"?"Google Books":"Spotify"} →
                    </a>
                </div>
            </div>
            <div class="media-card-content">
                <span class="media-card-type">${I(e.type).label}</span>
                <h3 class="media-card-title">${e.title}</h3>
                <div class="star-rating">${Be(e.rating)}</div>
                ${e.review?`<p class="media-card-review">${e.review}</p>`:""}
                <span class="media-card-date">${B(e.date)}</span>
            </div>
        </div>
    `).join("")}M.on("/admin",()=>{_t()?Ae(R):ze(R)});console.log("Zuber Seth Personal Website initialized");
