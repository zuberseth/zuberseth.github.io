var Be=Object.defineProperty;var le=o=>{throw TypeError(o)};var Ce=(o,e,t)=>e in o?Be(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t;var k=(o,e,t)=>Ce(o,typeof e!="symbol"?e+"":e,t),Me=(o,e,t)=>e.has(o)||le("Cannot "+t);var ce=(o,e,t)=>e.has(o)?le("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(o):e.set(o,t);var q=(o,e,t)=>(Me(o,e,"access private method"),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function t(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(r){if(r.ep)return;r.ep=!0;const i=t(r);fetch(r.href,i)}})();class Pe{constructor(){this.routes={},this.currentRoute=null,window.addEventListener("hashchange",()=>this.handleRoute()),window.addEventListener("load",()=>this.handleRoute())}on(e,t){return this.routes[e]=t,this}navigate(e){window.location.hash=e}handleRoute(){const e=window.location.hash.slice(1)||"/",[t,...n]=e.split("/").filter(Boolean),r="/"+(t||"");this.updateNavLinks(r);let i=this.routes[r],s=n;if(!i){for(const[a,l]of Object.entries(this.routes))if(a.includes(":")){const u=a.split("/").filter(Boolean),d=[t,...n];if(u.length===d.length){let h=!0;s={};for(let c=0;c<u.length;c++)if(u[c].startsWith(":"))s[u[c].slice(1)]=d[c];else if(u[c]!==d[c]){h=!1;break}if(h){i=l;break}}}}i?(this.currentRoute=r,i(s)):this.show404()}updateNavLinks(e){document.querySelectorAll(".nav-link").forEach(t=>{const n=t.getAttribute("href").slice(1);n===e||e.startsWith(n)&&n!=="/"?t.classList.add("active"):t.classList.remove("active")})}show404(){const e=document.getElementById("main-content");e.innerHTML=`
            <div class="container">
                <div class="empty-state fade-in">
                    <h2 class="empty-state-title">Page Not Found</h2>
                    <p class="empty-state-text">The page you're looking for doesn't exist.</p>
                    <br>
                    <a href="#/" class="btn btn-primary">Go Home</a>
                </div>
            </div>
        `}}function X(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}let L=X();function ke(o){L=o}const be=/[&<>"']/,De=new RegExp(be.source,"g"),ye=/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,qe=new RegExp(ye.source,"g"),Ue={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},de=o=>Ue[o];function y(o,e){if(e){if(be.test(o))return o.replace(De,de)}else if(ye.test(o))return o.replace(qe,de);return o}const Oe=/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig;function He(o){return o.replace(Oe,(e,t)=>(t=t.toLowerCase(),t==="colon"?":":t.charAt(0)==="#"?t.charAt(1)==="x"?String.fromCharCode(parseInt(t.substring(2),16)):String.fromCharCode(+t.substring(1)):""))}const je=/(^|[^\[])\^/g;function g(o,e){let t=typeof o=="string"?o:o.source;e=e||"";const n={replace:(r,i)=>{let s=typeof i=="string"?i:i.source;return s=s.replace(je,"$1"),t=t.replace(r,s),n},getRegex:()=>new RegExp(t,e)};return n}function ue(o){try{o=encodeURI(o).replace(/%25/g,"%")}catch{return null}return o}const A={exec:()=>null};function pe(o,e){const t=o.replace(/\|/g,(i,s,a)=>{let l=!1,u=s;for(;--u>=0&&a[u]==="\\";)l=!l;return l?"|":" |"}),n=t.split(/ \|/);let r=0;if(n[0].trim()||n.shift(),n.length>0&&!n[n.length-1].trim()&&n.pop(),e)if(n.length>e)n.splice(e);else for(;n.length<e;)n.push("");for(;r<n.length;r++)n[r]=n[r].trim().replace(/\\\|/g,"|");return n}function U(o,e,t){const n=o.length;if(n===0)return"";let r=0;for(;r<n&&o.charAt(n-r-1)===e;)r++;return o.slice(0,n-r)}function Ne(o,e){if(o.indexOf(e[1])===-1)return-1;let t=0;for(let n=0;n<o.length;n++)if(o[n]==="\\")n++;else if(o[n]===e[0])t++;else if(o[n]===e[1]&&(t--,t<0))return n;return-1}function he(o,e,t,n){const r=e.href,i=e.title?y(e.title):null,s=o[1].replace(/\\([\[\]])/g,"$1");if(o[0].charAt(0)!=="!"){n.state.inLink=!0;const a={type:"link",raw:t,href:r,title:i,text:s,tokens:n.inlineTokens(s)};return n.state.inLink=!1,a}return{type:"image",raw:t,href:r,title:i,text:y(s)}}function Ze(o,e){const t=o.match(/^(\s+)(?:```)/);if(t===null)return e;const n=t[1];return e.split(`
`).map(r=>{const i=r.match(/^\s+/);if(i===null)return r;const[s]=i;return s.length>=n.length?r.slice(n.length):r}).join(`
`)}class H{constructor(e){k(this,"options");k(this,"rules");k(this,"lexer");this.options=e||L}space(e){const t=this.rules.block.newline.exec(e);if(t&&t[0].length>0)return{type:"space",raw:t[0]}}code(e){const t=this.rules.block.code.exec(e);if(t){const n=t[0].replace(/^ {1,4}/gm,"");return{type:"code",raw:t[0],codeBlockStyle:"indented",text:this.options.pedantic?n:U(n,`
`)}}}fences(e){const t=this.rules.block.fences.exec(e);if(t){const n=t[0],r=Ze(n,t[3]||"");return{type:"code",raw:n,lang:t[2]?t[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):t[2],text:r}}}heading(e){const t=this.rules.block.heading.exec(e);if(t){let n=t[2].trim();if(/#$/.test(n)){const r=U(n,"#");(this.options.pedantic||!r||/ $/.test(r))&&(n=r.trim())}return{type:"heading",raw:t[0],depth:t[1].length,text:n,tokens:this.lexer.inline(n)}}}hr(e){const t=this.rules.block.hr.exec(e);if(t)return{type:"hr",raw:t[0]}}blockquote(e){const t=this.rules.block.blockquote.exec(e);if(t){let n=t[0].replace(/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,`
    $1`);n=U(n.replace(/^ *>[ \t]?/gm,""),`
`);const r=this.lexer.state.top;this.lexer.state.top=!0;const i=this.lexer.blockTokens(n);return this.lexer.state.top=r,{type:"blockquote",raw:t[0],tokens:i,text:n}}}list(e){let t=this.rules.block.list.exec(e);if(t){let n=t[1].trim();const r=n.length>1,i={type:"list",raw:"",ordered:r,start:r?+n.slice(0,-1):"",loose:!1,items:[]};n=r?`\\d{1,9}\\${n.slice(-1)}`:`\\${n}`,this.options.pedantic&&(n=r?n:"[*+-]");const s=new RegExp(`^( {0,3}${n})((?:[	 ][^\\n]*)?(?:\\n|$))`);let a="",l="",u=!1;for(;e;){let d=!1;if(!(t=s.exec(e))||this.rules.block.hr.test(e))break;a=t[0],e=e.substring(a.length);let h=t[2].split(`
`,1)[0].replace(/^\t+/,F=>" ".repeat(3*F.length)),c=e.split(`
`,1)[0],p=0;this.options.pedantic?(p=2,l=h.trimStart()):(p=t[2].search(/[^ ]/),p=p>4?1:p,l=h.slice(p),p+=t[1].length);let b=!1;if(!h&&/^ *$/.test(c)&&(a+=c+`
`,e=e.substring(c.length+1),d=!0),!d){const F=new RegExp(`^ {0,${Math.min(3,p-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),re=new RegExp(`^ {0,${Math.min(3,p-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),oe=new RegExp(`^ {0,${Math.min(3,p-1)}}(?:\`\`\`|~~~)`),ae=new RegExp(`^ {0,${Math.min(3,p-1)}}#`);for(;e;){const Q=e.split(`
`,1)[0];if(c=Q,this.options.pedantic&&(c=c.replace(/^ {1,4}(?=( {4})*[^ ])/g,"  ")),oe.test(c)||ae.test(c)||F.test(c)||re.test(e))break;if(c.search(/[^ ]/)>=p||!c.trim())l+=`
`+c.slice(p);else{if(b||h.search(/[^ ]/)>=4||oe.test(h)||ae.test(h)||re.test(h))break;l+=`
`+c}!b&&!c.trim()&&(b=!0),a+=Q+`
`,e=e.substring(Q.length+1),h=c.slice(p)}}i.loose||(u?i.loose=!0:/\n *\n *$/.test(a)&&(u=!0));let v=null,T;this.options.gfm&&(v=/^\[[ xX]\] /.exec(l),v&&(T=v[0]!=="[ ] ",l=l.replace(/^\[[ xX]\] +/,""))),i.items.push({type:"list_item",raw:a,task:!!v,checked:T,loose:!1,text:l,tokens:[]}),i.raw+=a}i.items[i.items.length-1].raw=a.trimEnd(),i.items[i.items.length-1].text=l.trimEnd(),i.raw=i.raw.trimEnd();for(let d=0;d<i.items.length;d++)if(this.lexer.state.top=!1,i.items[d].tokens=this.lexer.blockTokens(i.items[d].text,[]),!i.loose){const h=i.items[d].tokens.filter(p=>p.type==="space"),c=h.length>0&&h.some(p=>/\n.*\n/.test(p.raw));i.loose=c}if(i.loose)for(let d=0;d<i.items.length;d++)i.items[d].loose=!0;return i}}html(e){const t=this.rules.block.html.exec(e);if(t)return{type:"html",block:!0,raw:t[0],pre:t[1]==="pre"||t[1]==="script"||t[1]==="style",text:t[0]}}def(e){const t=this.rules.block.def.exec(e);if(t){const n=t[1].toLowerCase().replace(/\s+/g," "),r=t[2]?t[2].replace(/^<(.*)>$/,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",i=t[3]?t[3].substring(1,t[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):t[3];return{type:"def",tag:n,raw:t[0],href:r,title:i}}}table(e){const t=this.rules.block.table.exec(e);if(!t||!/[:|]/.test(t[2]))return;const n=pe(t[1]),r=t[2].replace(/^\||\| *$/g,"").split("|"),i=t[3]&&t[3].trim()?t[3].replace(/\n[ \t]*$/,"").split(`
`):[],s={type:"table",raw:t[0],header:[],align:[],rows:[]};if(n.length===r.length){for(const a of r)/^ *-+: *$/.test(a)?s.align.push("right"):/^ *:-+: *$/.test(a)?s.align.push("center"):/^ *:-+ *$/.test(a)?s.align.push("left"):s.align.push(null);for(const a of n)s.header.push({text:a,tokens:this.lexer.inline(a)});for(const a of i)s.rows.push(pe(a,s.header.length).map(l=>({text:l,tokens:this.lexer.inline(l)})));return s}}lheading(e){const t=this.rules.block.lheading.exec(e);if(t)return{type:"heading",raw:t[0],depth:t[2].charAt(0)==="="?1:2,text:t[1],tokens:this.lexer.inline(t[1])}}paragraph(e){const t=this.rules.block.paragraph.exec(e);if(t){const n=t[1].charAt(t[1].length-1)===`
`?t[1].slice(0,-1):t[1];return{type:"paragraph",raw:t[0],text:n,tokens:this.lexer.inline(n)}}}text(e){const t=this.rules.block.text.exec(e);if(t)return{type:"text",raw:t[0],text:t[0],tokens:this.lexer.inline(t[0])}}escape(e){const t=this.rules.inline.escape.exec(e);if(t)return{type:"escape",raw:t[0],text:y(t[1])}}tag(e){const t=this.rules.inline.tag.exec(e);if(t)return!this.lexer.state.inLink&&/^<a /i.test(t[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&/^<\/a>/i.test(t[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&/^<(pre|code|kbd|script)(\s|>)/i.test(t[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(t[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:t[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:t[0]}}link(e){const t=this.rules.inline.link.exec(e);if(t){const n=t[2].trim();if(!this.options.pedantic&&/^</.test(n)){if(!/>$/.test(n))return;const s=U(n.slice(0,-1),"\\");if((n.length-s.length)%2===0)return}else{const s=Ne(t[2],"()");if(s>-1){const l=(t[0].indexOf("!")===0?5:4)+t[1].length+s;t[2]=t[2].substring(0,s),t[0]=t[0].substring(0,l).trim(),t[3]=""}}let r=t[2],i="";if(this.options.pedantic){const s=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(r);s&&(r=s[1],i=s[3])}else i=t[3]?t[3].slice(1,-1):"";return r=r.trim(),/^</.test(r)&&(this.options.pedantic&&!/>$/.test(n)?r=r.slice(1):r=r.slice(1,-1)),he(t,{href:r&&r.replace(this.rules.inline.anyPunctuation,"$1"),title:i&&i.replace(this.rules.inline.anyPunctuation,"$1")},t[0],this.lexer)}}reflink(e,t){let n;if((n=this.rules.inline.reflink.exec(e))||(n=this.rules.inline.nolink.exec(e))){const r=(n[2]||n[1]).replace(/\s+/g," "),i=t[r.toLowerCase()];if(!i){const s=n[0].charAt(0);return{type:"text",raw:s,text:s}}return he(n,i,n[0],this.lexer)}}emStrong(e,t,n=""){let r=this.rules.inline.emStrongLDelim.exec(e);if(!r||r[3]&&n.match(/[\p{L}\p{N}]/u))return;if(!(r[1]||r[2]||"")||!n||this.rules.inline.punctuation.exec(n)){const s=[...r[0]].length-1;let a,l,u=s,d=0;const h=r[0][0]==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(h.lastIndex=0,t=t.slice(-1*e.length+s);(r=h.exec(t))!=null;){if(a=r[1]||r[2]||r[3]||r[4]||r[5]||r[6],!a)continue;if(l=[...a].length,r[3]||r[4]){u+=l;continue}else if((r[5]||r[6])&&s%3&&!((s+l)%3)){d+=l;continue}if(u-=l,u>0)continue;l=Math.min(l,l+u+d);const c=[...r[0]][0].length,p=e.slice(0,s+r.index+c+l);if(Math.min(s,l)%2){const v=p.slice(1,-1);return{type:"em",raw:p,text:v,tokens:this.lexer.inlineTokens(v)}}const b=p.slice(2,-2);return{type:"strong",raw:p,text:b,tokens:this.lexer.inlineTokens(b)}}}}codespan(e){const t=this.rules.inline.code.exec(e);if(t){let n=t[2].replace(/\n/g," ");const r=/[^ ]/.test(n),i=/^ /.test(n)&&/ $/.test(n);return r&&i&&(n=n.substring(1,n.length-1)),n=y(n,!0),{type:"codespan",raw:t[0],text:n}}}br(e){const t=this.rules.inline.br.exec(e);if(t)return{type:"br",raw:t[0]}}del(e){const t=this.rules.inline.del.exec(e);if(t)return{type:"del",raw:t[0],text:t[2],tokens:this.lexer.inlineTokens(t[2])}}autolink(e){const t=this.rules.inline.autolink.exec(e);if(t){let n,r;return t[2]==="@"?(n=y(t[1]),r="mailto:"+n):(n=y(t[1]),r=n),{type:"link",raw:t[0],text:n,href:r,tokens:[{type:"text",raw:n,text:n}]}}}url(e){var n;let t;if(t=this.rules.inline.url.exec(e)){let r,i;if(t[2]==="@")r=y(t[0]),i="mailto:"+r;else{let s;do s=t[0],t[0]=((n=this.rules.inline._backpedal.exec(t[0]))==null?void 0:n[0])??"";while(s!==t[0]);r=y(t[0]),t[1]==="www."?i="http://"+t[0]:i=t[0]}return{type:"link",raw:t[0],text:r,href:i,tokens:[{type:"text",raw:r,text:r}]}}}inlineText(e){const t=this.rules.inline.text.exec(e);if(t){let n;return this.lexer.state.inRawBlock?n=t[0]:n=y(t[0]),{type:"text",raw:t[0],text:n}}}}const We=/^(?: *(?:\n|$))+/,Fe=/^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,Qe=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,M=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,Ge=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,we=/(?:[*+-]|\d{1,9}[.)])/,ve=g(/^(?!bull |blockCode|fences|blockquote|heading|html)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html))+?)\n {0,3}(=+|-+) *(?:\n+|$)/).replace(/bull/g,we).replace(/blockCode/g,/ {4}/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).getRegex(),Y=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,Ke=/^[^\n]+/,V=/(?!\s*\])(?:\\.|[^\[\]\\])+/,Je=g(/^ {0,3}\[(label)\]: *(?:\n *)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/).replace("label",V).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),Xe=g(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,we).getRegex(),Z="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",ee=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,Ye=g("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))","i").replace("comment",ee).replace("tag",Z).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),xe=g(Y).replace("hr",M).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Z).getRegex(),Ve=g(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",xe).getRegex(),te={blockquote:Ve,code:Fe,def:Je,fences:Qe,heading:Ge,hr:M,html:Ye,lheading:ve,list:Xe,newline:We,paragraph:xe,table:A,text:Ke},fe=g("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",M).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code"," {4}[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Z).getRegex(),et={...te,table:fe,paragraph:g(Y).replace("hr",M).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",fe).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Z).getRegex()},tt={...te,html:g(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",ee).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:A,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:g(Y).replace("hr",M).replace("heading",` *#{1,6} *[^
]`).replace("lheading",ve).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},$e=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,nt=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,Ie=/^( {2,}|\\)\n(?!\s*$)/,st=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,P="\\p{P}\\p{S}",it=g(/^((?![*_])[\spunctuation])/,"u").replace(/punctuation/g,P).getRegex(),rt=/\[[^[\]]*?\]\([^\(\)]*?\)|`[^`]*?`|<[^<>]*?>/g,ot=g(/^(?:\*+(?:((?!\*)[punct])|[^\s*]))|^_+(?:((?!_)[punct])|([^\s_]))/,"u").replace(/punct/g,P).getRegex(),at=g("^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)[punct](\\*+)(?=[\\s]|$)|[^punct\\s](\\*+)(?!\\*)(?=[punct\\s]|$)|(?!\\*)[punct\\s](\\*+)(?=[^punct\\s])|[\\s](\\*+)(?!\\*)(?=[punct])|(?!\\*)[punct](\\*+)(?!\\*)(?=[punct])|[^punct\\s](\\*+)(?=[^punct\\s])","gu").replace(/punct/g,P).getRegex(),lt=g("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)[punct](_+)(?=[\\s]|$)|[^punct\\s](_+)(?!_)(?=[punct\\s]|$)|(?!_)[punct\\s](_+)(?=[^punct\\s])|[\\s](_+)(?!_)(?=[punct])|(?!_)[punct](_+)(?!_)(?=[punct])","gu").replace(/punct/g,P).getRegex(),ct=g(/\\([punct])/,"gu").replace(/punct/g,P).getRegex(),dt=g(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),ut=g(ee).replace("(?:-->|$)","-->").getRegex(),pt=g("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",ut).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),j=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,ht=g(/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/).replace("label",j).replace("href",/<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),Te=g(/^!?\[(label)\]\[(ref)\]/).replace("label",j).replace("ref",V).getRegex(),Se=g(/^!?\[(ref)\](?:\[\])?/).replace("ref",V).getRegex(),ft=g("reflink|nolink(?!\\()","g").replace("reflink",Te).replace("nolink",Se).getRegex(),ne={_backpedal:A,anyPunctuation:ct,autolink:dt,blockSkip:rt,br:Ie,code:nt,del:A,emStrongLDelim:ot,emStrongRDelimAst:at,emStrongRDelimUnd:lt,escape:$e,link:ht,nolink:Se,punctuation:it,reflink:Te,reflinkSearch:ft,tag:pt,text:st,url:A},gt={...ne,link:g(/^!?\[(label)\]\((.*?)\)/).replace("label",j).getRegex(),reflink:g(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",j).getRegex()},G={...ne,escape:g($e).replace("])","~|])").getRegex(),url:g(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,"i").replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/},mt={...G,br:g(Ie).replace("{2,}","*").getRegex(),text:g(G.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},O={normal:te,gfm:et,pedantic:tt},z={normal:ne,gfm:G,breaks:mt,pedantic:gt};class x{constructor(e){k(this,"tokens");k(this,"options");k(this,"state");k(this,"tokenizer");k(this,"inlineQueue");this.tokens=[],this.tokens.links=Object.create(null),this.options=e||L,this.options.tokenizer=this.options.tokenizer||new H,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};const t={block:O.normal,inline:z.normal};this.options.pedantic?(t.block=O.pedantic,t.inline=z.pedantic):this.options.gfm&&(t.block=O.gfm,this.options.breaks?t.inline=z.breaks:t.inline=z.gfm),this.tokenizer.rules=t}static get rules(){return{block:O,inline:z}}static lex(e,t){return new x(t).lex(e)}static lexInline(e,t){return new x(t).inlineTokens(e)}lex(e){e=e.replace(/\r\n|\r/g,`
`),this.blockTokens(e,this.tokens);for(let t=0;t<this.inlineQueue.length;t++){const n=this.inlineQueue[t];this.inlineTokens(n.src,n.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(e,t=[]){this.options.pedantic?e=e.replace(/\t/g,"    ").replace(/^ +$/gm,""):e=e.replace(/^( *)(\t+)/gm,(a,l,u)=>l+"    ".repeat(u.length));let n,r,i,s;for(;e;)if(!(this.options.extensions&&this.options.extensions.block&&this.options.extensions.block.some(a=>(n=a.call({lexer:this},e,t))?(e=e.substring(n.raw.length),t.push(n),!0):!1))){if(n=this.tokenizer.space(e)){e=e.substring(n.raw.length),n.raw.length===1&&t.length>0?t[t.length-1].raw+=`
`:t.push(n);continue}if(n=this.tokenizer.code(e)){e=e.substring(n.raw.length),r=t[t.length-1],r&&(r.type==="paragraph"||r.type==="text")?(r.raw+=`
`+n.raw,r.text+=`
`+n.text,this.inlineQueue[this.inlineQueue.length-1].src=r.text):t.push(n);continue}if(n=this.tokenizer.fences(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.heading(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.hr(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.blockquote(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.list(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.html(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.def(e)){e=e.substring(n.raw.length),r=t[t.length-1],r&&(r.type==="paragraph"||r.type==="text")?(r.raw+=`
`+n.raw,r.text+=`
`+n.raw,this.inlineQueue[this.inlineQueue.length-1].src=r.text):this.tokens.links[n.tag]||(this.tokens.links[n.tag]={href:n.href,title:n.title});continue}if(n=this.tokenizer.table(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.lheading(e)){e=e.substring(n.raw.length),t.push(n);continue}if(i=e,this.options.extensions&&this.options.extensions.startBlock){let a=1/0;const l=e.slice(1);let u;this.options.extensions.startBlock.forEach(d=>{u=d.call({lexer:this},l),typeof u=="number"&&u>=0&&(a=Math.min(a,u))}),a<1/0&&a>=0&&(i=e.substring(0,a+1))}if(this.state.top&&(n=this.tokenizer.paragraph(i))){r=t[t.length-1],s&&r.type==="paragraph"?(r.raw+=`
`+n.raw,r.text+=`
`+n.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=r.text):t.push(n),s=i.length!==e.length,e=e.substring(n.raw.length);continue}if(n=this.tokenizer.text(e)){e=e.substring(n.raw.length),r=t[t.length-1],r&&r.type==="text"?(r.raw+=`
`+n.raw,r.text+=`
`+n.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=r.text):t.push(n);continue}if(e){const a="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(a);break}else throw new Error(a)}}return this.state.top=!0,t}inline(e,t=[]){return this.inlineQueue.push({src:e,tokens:t}),t}inlineTokens(e,t=[]){let n,r,i,s=e,a,l,u;if(this.tokens.links){const d=Object.keys(this.tokens.links);if(d.length>0)for(;(a=this.tokenizer.rules.inline.reflinkSearch.exec(s))!=null;)d.includes(a[0].slice(a[0].lastIndexOf("[")+1,-1))&&(s=s.slice(0,a.index)+"["+"a".repeat(a[0].length-2)+"]"+s.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(a=this.tokenizer.rules.inline.blockSkip.exec(s))!=null;)s=s.slice(0,a.index)+"["+"a".repeat(a[0].length-2)+"]"+s.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);for(;(a=this.tokenizer.rules.inline.anyPunctuation.exec(s))!=null;)s=s.slice(0,a.index)+"++"+s.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);for(;e;)if(l||(u=""),l=!1,!(this.options.extensions&&this.options.extensions.inline&&this.options.extensions.inline.some(d=>(n=d.call({lexer:this},e,t))?(e=e.substring(n.raw.length),t.push(n),!0):!1))){if(n=this.tokenizer.escape(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.tag(e)){e=e.substring(n.raw.length),r=t[t.length-1],r&&n.type==="text"&&r.type==="text"?(r.raw+=n.raw,r.text+=n.text):t.push(n);continue}if(n=this.tokenizer.link(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.reflink(e,this.tokens.links)){e=e.substring(n.raw.length),r=t[t.length-1],r&&n.type==="text"&&r.type==="text"?(r.raw+=n.raw,r.text+=n.text):t.push(n);continue}if(n=this.tokenizer.emStrong(e,s,u)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.codespan(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.br(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.del(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.autolink(e)){e=e.substring(n.raw.length),t.push(n);continue}if(!this.state.inLink&&(n=this.tokenizer.url(e))){e=e.substring(n.raw.length),t.push(n);continue}if(i=e,this.options.extensions&&this.options.extensions.startInline){let d=1/0;const h=e.slice(1);let c;this.options.extensions.startInline.forEach(p=>{c=p.call({lexer:this},h),typeof c=="number"&&c>=0&&(d=Math.min(d,c))}),d<1/0&&d>=0&&(i=e.substring(0,d+1))}if(n=this.tokenizer.inlineText(i)){e=e.substring(n.raw.length),n.raw.slice(-1)!=="_"&&(u=n.raw.slice(-1)),l=!0,r=t[t.length-1],r&&r.type==="text"?(r.raw+=n.raw,r.text+=n.text):t.push(n);continue}if(e){const d="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(d);break}else throw new Error(d)}}return t}}class N{constructor(e){k(this,"options");this.options=e||L}code(e,t,n){var i;const r=(i=(t||"").match(/^\S*/))==null?void 0:i[0];return e=e.replace(/\n$/,"")+`
`,r?'<pre><code class="language-'+y(r)+'">'+(n?e:y(e,!0))+`</code></pre>
`:"<pre><code>"+(n?e:y(e,!0))+`</code></pre>
`}blockquote(e){return`<blockquote>
${e}</blockquote>
`}html(e,t){return e}heading(e,t,n){return`<h${t}>${e}</h${t}>
`}hr(){return`<hr>
`}list(e,t,n){const r=t?"ol":"ul",i=t&&n!==1?' start="'+n+'"':"";return"<"+r+i+`>
`+e+"</"+r+`>
`}listitem(e,t,n){return`<li>${e}</li>
`}checkbox(e){return"<input "+(e?'checked="" ':"")+'disabled="" type="checkbox">'}paragraph(e){return`<p>${e}</p>
`}table(e,t){return t&&(t=`<tbody>${t}</tbody>`),`<table>
<thead>
`+e+`</thead>
`+t+`</table>
`}tablerow(e){return`<tr>
${e}</tr>
`}tablecell(e,t){const n=t.header?"th":"td";return(t.align?`<${n} align="${t.align}">`:`<${n}>`)+e+`</${n}>
`}strong(e){return`<strong>${e}</strong>`}em(e){return`<em>${e}</em>`}codespan(e){return`<code>${e}</code>`}br(){return"<br>"}del(e){return`<del>${e}</del>`}link(e,t,n){const r=ue(e);if(r===null)return n;e=r;let i='<a href="'+e+'"';return t&&(i+=' title="'+t+'"'),i+=">"+n+"</a>",i}image(e,t,n){const r=ue(e);if(r===null)return n;e=r;let i=`<img src="${e}" alt="${n}"`;return t&&(i+=` title="${t}"`),i+=">",i}text(e){return e}}class se{strong(e){return e}em(e){return e}codespan(e){return e}del(e){return e}html(e){return e}text(e){return e}link(e,t,n){return""+n}image(e,t,n){return""+n}br(){return""}}class ${constructor(e){k(this,"options");k(this,"renderer");k(this,"textRenderer");this.options=e||L,this.options.renderer=this.options.renderer||new N,this.renderer=this.options.renderer,this.renderer.options=this.options,this.textRenderer=new se}static parse(e,t){return new $(t).parse(e)}static parseInline(e,t){return new $(t).parseInline(e)}parse(e,t=!0){let n="";for(let r=0;r<e.length;r++){const i=e[r];if(this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[i.type]){const s=i,a=this.options.extensions.renderers[s.type].call({parser:this},s);if(a!==!1||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(s.type)){n+=a||"";continue}}switch(i.type){case"space":continue;case"hr":{n+=this.renderer.hr();continue}case"heading":{const s=i;n+=this.renderer.heading(this.parseInline(s.tokens),s.depth,He(this.parseInline(s.tokens,this.textRenderer)));continue}case"code":{const s=i;n+=this.renderer.code(s.text,s.lang,!!s.escaped);continue}case"table":{const s=i;let a="",l="";for(let d=0;d<s.header.length;d++)l+=this.renderer.tablecell(this.parseInline(s.header[d].tokens),{header:!0,align:s.align[d]});a+=this.renderer.tablerow(l);let u="";for(let d=0;d<s.rows.length;d++){const h=s.rows[d];l="";for(let c=0;c<h.length;c++)l+=this.renderer.tablecell(this.parseInline(h[c].tokens),{header:!1,align:s.align[c]});u+=this.renderer.tablerow(l)}n+=this.renderer.table(a,u);continue}case"blockquote":{const s=i,a=this.parse(s.tokens);n+=this.renderer.blockquote(a);continue}case"list":{const s=i,a=s.ordered,l=s.start,u=s.loose;let d="";for(let h=0;h<s.items.length;h++){const c=s.items[h],p=c.checked,b=c.task;let v="";if(c.task){const T=this.renderer.checkbox(!!p);u?c.tokens.length>0&&c.tokens[0].type==="paragraph"?(c.tokens[0].text=T+" "+c.tokens[0].text,c.tokens[0].tokens&&c.tokens[0].tokens.length>0&&c.tokens[0].tokens[0].type==="text"&&(c.tokens[0].tokens[0].text=T+" "+c.tokens[0].tokens[0].text)):c.tokens.unshift({type:"text",text:T+" "}):v+=T+" "}v+=this.parse(c.tokens,u),d+=this.renderer.listitem(v,b,!!p)}n+=this.renderer.list(d,a,l);continue}case"html":{const s=i;n+=this.renderer.html(s.text,s.block);continue}case"paragraph":{const s=i;n+=this.renderer.paragraph(this.parseInline(s.tokens));continue}case"text":{let s=i,a=s.tokens?this.parseInline(s.tokens):s.text;for(;r+1<e.length&&e[r+1].type==="text";)s=e[++r],a+=`
`+(s.tokens?this.parseInline(s.tokens):s.text);n+=t?this.renderer.paragraph(a):a;continue}default:{const s='Token with "'+i.type+'" type was not found.';if(this.options.silent)return console.error(s),"";throw new Error(s)}}}return n}parseInline(e,t){t=t||this.renderer;let n="";for(let r=0;r<e.length;r++){const i=e[r];if(this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[i.type]){const s=this.options.extensions.renderers[i.type].call({parser:this},i);if(s!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(i.type)){n+=s||"";continue}}switch(i.type){case"escape":{const s=i;n+=t.text(s.text);break}case"html":{const s=i;n+=t.html(s.text);break}case"link":{const s=i;n+=t.link(s.href,s.title,this.parseInline(s.tokens,t));break}case"image":{const s=i;n+=t.image(s.href,s.title,s.text);break}case"strong":{const s=i;n+=t.strong(this.parseInline(s.tokens,t));break}case"em":{const s=i;n+=t.em(this.parseInline(s.tokens,t));break}case"codespan":{const s=i;n+=t.codespan(s.text);break}case"br":{n+=t.br();break}case"del":{const s=i;n+=t.del(this.parseInline(s.tokens,t));break}case"text":{const s=i;n+=t.text(s.text);break}default:{const s='Token with "'+i.type+'" type was not found.';if(this.options.silent)return console.error(s),"";throw new Error(s)}}}return n}}class B{constructor(e){k(this,"options");this.options=e||L}preprocess(e){return e}postprocess(e){return e}processAllTokens(e){return e}}k(B,"passThroughHooks",new Set(["preprocess","postprocess","processAllTokens"]));var _,K,Ee;class kt{constructor(...e){ce(this,_);k(this,"defaults",X());k(this,"options",this.setOptions);k(this,"parse",q(this,_,K).call(this,x.lex,$.parse));k(this,"parseInline",q(this,_,K).call(this,x.lexInline,$.parseInline));k(this,"Parser",$);k(this,"Renderer",N);k(this,"TextRenderer",se);k(this,"Lexer",x);k(this,"Tokenizer",H);k(this,"Hooks",B);this.use(...e)}walkTokens(e,t){var r,i;let n=[];for(const s of e)switch(n=n.concat(t.call(this,s)),s.type){case"table":{const a=s;for(const l of a.header)n=n.concat(this.walkTokens(l.tokens,t));for(const l of a.rows)for(const u of l)n=n.concat(this.walkTokens(u.tokens,t));break}case"list":{const a=s;n=n.concat(this.walkTokens(a.items,t));break}default:{const a=s;(i=(r=this.defaults.extensions)==null?void 0:r.childTokens)!=null&&i[a.type]?this.defaults.extensions.childTokens[a.type].forEach(l=>{const u=a[l].flat(1/0);n=n.concat(this.walkTokens(u,t))}):a.tokens&&(n=n.concat(this.walkTokens(a.tokens,t)))}}return n}use(...e){const t=this.defaults.extensions||{renderers:{},childTokens:{}};return e.forEach(n=>{const r={...n};if(r.async=this.defaults.async||r.async||!1,n.extensions&&(n.extensions.forEach(i=>{if(!i.name)throw new Error("extension name required");if("renderer"in i){const s=t.renderers[i.name];s?t.renderers[i.name]=function(...a){let l=i.renderer.apply(this,a);return l===!1&&(l=s.apply(this,a)),l}:t.renderers[i.name]=i.renderer}if("tokenizer"in i){if(!i.level||i.level!=="block"&&i.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");const s=t[i.level];s?s.unshift(i.tokenizer):t[i.level]=[i.tokenizer],i.start&&(i.level==="block"?t.startBlock?t.startBlock.push(i.start):t.startBlock=[i.start]:i.level==="inline"&&(t.startInline?t.startInline.push(i.start):t.startInline=[i.start]))}"childTokens"in i&&i.childTokens&&(t.childTokens[i.name]=i.childTokens)}),r.extensions=t),n.renderer){const i=this.defaults.renderer||new N(this.defaults);for(const s in n.renderer){if(!(s in i))throw new Error(`renderer '${s}' does not exist`);if(s==="options")continue;const a=s,l=n.renderer[a],u=i[a];i[a]=(...d)=>{let h=l.apply(i,d);return h===!1&&(h=u.apply(i,d)),h||""}}r.renderer=i}if(n.tokenizer){const i=this.defaults.tokenizer||new H(this.defaults);for(const s in n.tokenizer){if(!(s in i))throw new Error(`tokenizer '${s}' does not exist`);if(["options","rules","lexer"].includes(s))continue;const a=s,l=n.tokenizer[a],u=i[a];i[a]=(...d)=>{let h=l.apply(i,d);return h===!1&&(h=u.apply(i,d)),h}}r.tokenizer=i}if(n.hooks){const i=this.defaults.hooks||new B;for(const s in n.hooks){if(!(s in i))throw new Error(`hook '${s}' does not exist`);if(s==="options")continue;const a=s,l=n.hooks[a],u=i[a];B.passThroughHooks.has(s)?i[a]=d=>{if(this.defaults.async)return Promise.resolve(l.call(i,d)).then(c=>u.call(i,c));const h=l.call(i,d);return u.call(i,h)}:i[a]=(...d)=>{let h=l.apply(i,d);return h===!1&&(h=u.apply(i,d)),h}}r.hooks=i}if(n.walkTokens){const i=this.defaults.walkTokens,s=n.walkTokens;r.walkTokens=function(a){let l=[];return l.push(s.call(this,a)),i&&(l=l.concat(i.call(this,a))),l}}this.defaults={...this.defaults,...r}}),this}setOptions(e){return this.defaults={...this.defaults,...e},this}lexer(e,t){return x.lex(e,t??this.defaults)}parser(e,t){return $.parse(e,t??this.defaults)}}_=new WeakSet,K=function(e,t){return(n,r)=>{const i={...r},s={...this.defaults,...i};this.defaults.async===!0&&i.async===!1&&(s.silent||console.warn("marked(): The async option was set to true by an extension. The async: false option sent to parse will be ignored."),s.async=!0);const a=q(this,_,Ee).call(this,!!s.silent,!!s.async);if(typeof n>"u"||n===null)return a(new Error("marked(): input parameter is undefined or null"));if(typeof n!="string")return a(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(n)+", string expected"));if(s.hooks&&(s.hooks.options=s),s.async)return Promise.resolve(s.hooks?s.hooks.preprocess(n):n).then(l=>e(l,s)).then(l=>s.hooks?s.hooks.processAllTokens(l):l).then(l=>s.walkTokens?Promise.all(this.walkTokens(l,s.walkTokens)).then(()=>l):l).then(l=>t(l,s)).then(l=>s.hooks?s.hooks.postprocess(l):l).catch(a);try{s.hooks&&(n=s.hooks.preprocess(n));let l=e(n,s);s.hooks&&(l=s.hooks.processAllTokens(l)),s.walkTokens&&this.walkTokens(l,s.walkTokens);let u=t(l,s);return s.hooks&&(u=s.hooks.postprocess(u)),u}catch(l){return a(l)}}},Ee=function(e,t){return n=>{if(n.message+=`
Please report this to https://github.com/markedjs/marked.`,e){const r="<p>An error occurred:</p><pre>"+y(n.message+"",!0)+"</pre>";return t?Promise.resolve(r):r}if(t)return Promise.reject(n);throw n}};const S=new kt;function f(o,e){return S.parse(o,e)}f.options=f.setOptions=function(o){return S.setOptions(o),f.defaults=S.defaults,ke(f.defaults),f};f.getDefaults=X;f.defaults=L;f.use=function(...o){return S.use(...o),f.defaults=S.defaults,ke(f.defaults),f};f.walkTokens=function(o,e){return S.walkTokens(o,e)};f.parseInline=S.parseInline;f.Parser=$;f.parser=$.parse;f.Renderer=N;f.TextRenderer=se;f.Lexer=x;f.lexer=x.lex;f.Tokenizer=H;f.Hooks=B;f.parse=f;f.options;f.setOptions;f.use;f.walkTokens;f.parseInline;$.parse;x.lex;f.setOptions({breaks:!0,gfm:!0});function _e(o){const e=/^---\n([\s\S]*?)\n---\n/,t=o.match(e);if(!t)return{metadata:{},content:o};const n=t[1],r=o.slice(t[0].length),i={};return n.split(`
`).forEach(s=>{const a=s.indexOf(":");if(a>0){const l=s.slice(0,a).trim(),u=s.slice(a+1).trim().replace(/^["']|["']$/g,"");i[l]=u}}),{metadata:i,content:r}}function bt(o){return f.parse(o)}function yt(o,e=150){const{content:t}=_e(o),n=t.replace(/#{1,6}\s+/g,"").replace(/\*\*|__/g,"").replace(/\*|_/g,"").replace(/\[([^\]]+)\]\([^)]+\)/g,"$1").replace(/`([^`]+)`/g,"$1").replace(/\n+/g," ").trim();return n.length<=e?n:n.slice(0,e).trim()+"..."}function C(o){return new Date(o).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"})}const m={omdb:{key:localStorage.getItem("omdb_api_key")||"",baseUrl:"https://www.omdbapi.com/"},googleBooks:{key:localStorage.getItem("google_books_api_key")||"",baseUrl:"https://www.googleapis.com/books/v1/volumes"},spotify:{clientId:localStorage.getItem("spotify_client_id")||"",clientSecret:localStorage.getItem("spotify_client_secret")||"",accessToken:null,tokenExpiry:null}};function wt(o){o.omdb&&(localStorage.setItem("omdb_api_key",o.omdb),m.omdb.key=o.omdb),o.googleBooks&&(localStorage.setItem("google_books_api_key",o.googleBooks),m.googleBooks.key=o.googleBooks),o.spotifyClientId&&(localStorage.setItem("spotify_client_id",o.spotifyClientId),m.spotify.clientId=o.spotifyClientId),o.spotifyClientSecret&&(localStorage.setItem("spotify_client_secret",o.spotifyClientSecret),m.spotify.clientSecret=o.spotifyClientSecret)}function vt(){return{omdb:m.omdb.key,googleBooks:m.googleBooks.key,spotifyClientId:m.spotify.clientId,spotifyClientSecret:m.spotify.clientSecret}}function xt(o){switch(o){case"film":return!!m.omdb.key;case"book":return!0;case"song":return!!m.spotify.clientId&&!!m.spotify.clientSecret;default:return!1}}async function $t(o){if(!m.omdb.key)throw new Error("OMDb API key not configured. Please add it in the admin settings.");const e=`${m.omdb.baseUrl}?apikey=${m.omdb.key}&s=${encodeURIComponent(o)}&type=movie`,n=await(await fetch(e)).json();if(n.Error){if(n.Error==="Movie not found!")return[];throw new Error(n.Error)}return(n.Search||[]).map(r=>({id:r.imdbID,title:r.Title,year:r.Year,imageUrl:r.Poster!=="N/A"?r.Poster:null,externalUrl:`https://www.imdb.com/title/${r.imdbID}`,type:"film"}))}async function It(o){let e=`${m.googleBooks.baseUrl}?q=${encodeURIComponent(o)}&maxResults=10`;m.googleBooks.key&&(e+=`&key=${m.googleBooks.key}`);const n=await(await fetch(e)).json();if(n.error)throw new Error(n.error.message);return(n.items||[]).map(r=>{var s,a;const i=r.volumeInfo;return{id:r.id,title:i.title,author:i.authors?i.authors.join(", "):"Unknown",year:i.publishedDate?i.publishedDate.split("-")[0]:"",imageUrl:((a=(s=i.imageLinks)==null?void 0:s.thumbnail)==null?void 0:a.replace("http:","https:"))||null,externalUrl:i.infoLink,type:"book"}})}async function Tt(){if(!m.spotify.clientId||!m.spotify.clientSecret)throw new Error("Spotify API credentials not configured. Please add them in the admin settings.");if(m.spotify.accessToken&&m.spotify.tokenExpiry>Date.now())return m.spotify.accessToken;const o=btoa(`${m.spotify.clientId}:${m.spotify.clientSecret}`),t=await(await fetch("https://accounts.spotify.com/api/token",{method:"POST",headers:{Authorization:`Basic ${o}`,"Content-Type":"application/x-www-form-urlencoded"},body:"grant_type=client_credentials"})).json();if(t.error)throw new Error(t.error_description||t.error);return m.spotify.accessToken=t.access_token,m.spotify.tokenExpiry=Date.now()+t.expires_in*1e3-6e4,t.access_token}async function St(o){var r;const e=await Tt(),n=await(await fetch(`https://api.spotify.com/v1/search?q=${encodeURIComponent(o)}&type=track&limit=10`,{headers:{Authorization:`Bearer ${e}`}})).json();if(n.error)throw new Error(n.error.message);return(((r=n.tracks)==null?void 0:r.items)||[]).map(i=>{var s;return{id:i.id,title:i.name,artist:i.artists.map(a=>a.name).join(", "),album:i.album.name,year:i.album.release_date?i.album.release_date.split("-")[0]:"",imageUrl:((s=i.album.images[0])==null?void 0:s.url)||null,externalUrl:i.external_urls.spotify,type:"song"}})}async function Et(o,e){if(!o.trim())return[];switch(e){case"film":return $t(o);case"book":return It(o);case"song":return St(o);default:throw new Error(`Unknown media type: ${e}`)}}function E(o){return{film:{label:"Film",color:"#ef4444"},book:{label:"Book",color:"#3b82f6"},song:{label:"Song",color:"#22c55e"}}[o]||{label:o,color:"#6366f1"}}const ie="zuber_seth_admin_auth",_t="admin123";function Lt(){return localStorage.getItem(ie)==="authenticated"}function Rt(o){const e=localStorage.getItem("admin_password")||_t;return o===e?(localStorage.setItem(ie,"authenticated"),!0):!1}function zt(){localStorage.removeItem(ie)}function At(o){localStorage.setItem("admin_password",o)}function D(){const o=localStorage.getItem("writings_data");return o?JSON.parse(o):{writings:[]}}function Le(o){localStorage.setItem("writings_data",JSON.stringify(o))}function W(){const o=localStorage.getItem("media_data");return o?JSON.parse(o):{media:[]}}function Re(o){localStorage.setItem("media_data",JSON.stringify(o))}function Bt(o,e,t){const n=D(),r=Date.now().toString(36)+Math.random().toString(36).substr(2);return n.writings.push({id:r,title:o,date:e,content:t}),Le(n),r}function Ct(o){const e=D();e.writings=e.writings.filter(t=>t.id!==o),Le(e)}function Mt(o,e,t){const n=W(),r=Date.now().toString(36)+Math.random().toString(36).substr(2);return n.media.push({id:r,type:o.type,title:o.title,artist:o.artist||o.author||"",year:o.year||"",imageUrl:o.imageUrl,externalUrl:o.externalUrl,rating:e,review:t,date:new Date().toISOString().split("T")[0]}),Re(n),r}function Pt(o){const e=W();e.media=e.media.filter(t=>t.id!==o),Re(e)}function ze(o){o.innerHTML=`
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
    `;const e=document.getElementById("login-form"),t=document.getElementById("login-error");e.addEventListener("submit",n=>{n.preventDefault();const r=document.getElementById("password-input").value;Rt(r)?Ae(o):(t.textContent="Incorrect password",t.style.display="block")})}function Ae(o){o.innerHTML=`
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
    `;const e=document.querySelectorAll(".admin-tab");e.forEach(t=>{t.addEventListener("click",()=>{e.forEach(n=>n.classList.remove("active")),t.classList.add("active"),ge(t.dataset.tab)})}),document.getElementById("logout-btn").addEventListener("click",()=>{zt(),ze(o)}),ge("writing")}function ge(o){const e=document.getElementById("admin-content");switch(o){case"writing":Dt(e);break;case"media":qt(e);break;case"manage":J(e);break;case"settings":Ut(e);break}}function Dt(o){o.innerHTML=`
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
    `;const e=document.getElementById("upload-zone"),t=document.getElementById("file-input"),n=document.getElementById("file-preview");e.addEventListener("click",()=>t.click()),e.addEventListener("dragover",i=>{i.preventDefault(),e.classList.add("dragover")}),e.addEventListener("dragleave",()=>{e.classList.remove("dragover")}),e.addEventListener("drop",i=>{i.preventDefault(),e.classList.remove("dragover");const s=i.dataTransfer.files[0];s&&r(s)}),t.addEventListener("change",i=>{const s=i.target.files[0];s&&r(s)});function r(i){const s=new FileReader;s.onload=a=>{const l=a.target.result;let u=i.name.replace(/\.(md|markdown|txt)$/,"").replace(/-/g," ");const d=l.match(/^#\s+(.+)$/m);d&&(u=d[1]),document.getElementById("writing-title").value=u,document.getElementById("writing-date").value=new Date().toISOString().split("T")[0],document.getElementById("writing-content").value=l,n.style.display="block",e.style.display="none"},s.readAsText(i)}document.getElementById("save-writing").addEventListener("click",()=>{const i=document.getElementById("writing-title").value.trim(),s=document.getElementById("writing-date").value,a=document.getElementById("writing-content").value;if(!i||!s||!a){w("Please fill in all fields","error");return}Bt(i,s,a),w("Writing saved successfully!","success"),n.style.display="none",e.style.display="block",document.getElementById("writing-title").value="",document.getElementById("writing-content").value=""})}function qt(o){o.innerHTML=`
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
                    <div class="rating-input" id="rating-input">
                        ${[1,2,3,4,5].map(c=>`<span class="rating-star" data-rating="${c}">★</span>`).join("")}
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
    `;let e=null,t=0;const n=document.getElementById("media-search"),r=document.getElementById("search-btn"),i=document.getElementById("media-type"),s=document.getElementById("search-results"),a=document.getElementById("review-form");i.addEventListener("change",()=>{const c=i.value;xt(c)||w(`${E(c).label} search requires API configuration. Check Settings.`,"error")});async function l(){const c=n.value.trim(),p=i.value;if(c){s.innerHTML='<div class="loading"><div class="spinner"></div></div>',a.style.display="none",e=null;try{const b=await Et(c,p);u(b)}catch(b){s.innerHTML=`<p style="color: var(--color-error);">${b.message}</p>`}}}r.addEventListener("click",l),n.addEventListener("keypress",c=>{c.key==="Enter"&&l()});function u(c){if(c.length===0){s.innerHTML='<p style="color: var(--color-text-muted);">No results found</p>';return}s.innerHTML=c.map(p=>`
            <div class="search-result-item" data-id="${p.id}">
                <div class="search-result-image">
                    ${p.imageUrl?`<img src="${p.imageUrl}" alt="${p.title}">`:`<div style="display:flex;align-items:center;justify-content:center;height:100%;font-size:1rem;color:var(--color-text-muted);">${E(p.type).label}</div>`}
                </div>
                <div class="search-result-info">
                    <div class="search-result-title">${p.title}</div>
                    <div class="search-result-meta">${p.artist||p.author||""} ${p.year?`(${p.year})`:""}</div>
                </div>
            </div>
        `).join(""),window._searchResults=c,s.querySelectorAll(".search-result-item").forEach(p=>{p.addEventListener("click",()=>{s.querySelectorAll(".search-result-item").forEach(b=>b.classList.remove("selected")),p.classList.add("selected"),e=window._searchResults.find(b=>b.id===p.dataset.id),d(e)})})}function d(c){const p=document.getElementById("selected-media-info");p.innerHTML=`
            <div style="display: flex; align-items: center; gap: var(--space-4);">
                ${c.imageUrl?`<img src="${c.imageUrl}" style="width: 60px; height: 60px; object-fit: cover; border-radius: var(--radius-md);">`:""}
                <div>
                    <strong>${c.title}</strong><br>
                    <span style="color: var(--color-text-muted);">${c.artist||c.author||""} ${c.year?`(${c.year})`:""}</span>
                </div>
            </div>
        `,t=0,document.querySelectorAll(".rating-star").forEach(b=>b.classList.remove("active")),document.getElementById("review-text").value="",document.getElementById("word-count").textContent="0",a.style.display="block"}document.getElementById("rating-input").addEventListener("click",c=>{c.target.classList.contains("rating-star")&&(t=parseInt(c.target.dataset.rating),document.querySelectorAll(".rating-star").forEach(p=>{p.classList.toggle("active",parseInt(p.dataset.rating)<=t)}))});const h=document.getElementById("review-text");h.addEventListener("input",()=>{const p=h.value.trim().split(/\s+/).filter(b=>b.length>0).length;document.getElementById("word-count").textContent=p,p>100?document.getElementById("word-count").style.color="var(--color-error)":document.getElementById("word-count").style.color=""}),document.getElementById("save-review").addEventListener("click",()=>{if(!e){w("Please select a media item","error");return}if(t===0){w("Please select a rating","error");return}const c=h.value.trim();if(c.split(/\s+/).filter(b=>b.length>0).length>100){w("Review must be 100 words or less","error");return}Mt(e,t,c),w("Review saved successfully!","success"),s.innerHTML="",a.style.display="none",n.value="",e=null})}function J(o){const e=D().writings,t=W().media;o.innerHTML=`
        <div class="card" style="margin-bottom: var(--space-6);">
            <h3 style="margin-bottom: var(--space-6);">Writings (${e.length})</h3>
            <div class="content-list" id="writings-list">
                ${e.length===0?'<p style="color: var(--color-text-muted);">No writings yet</p>':e.map(n=>`
                        <div class="content-item">
                            <div class="content-item-info">
                                <div class="content-item-title">${n.title}</div>
                                <div class="content-item-meta">${C(n.date)}</div>
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
                                ${n.imageUrl?`<img src="${n.imageUrl}" alt="${n.title}">`:`<div style="display:flex;align-items:center;justify-content:center;height:100%;background:var(--color-bg-secondary);font-size:0.75rem;color:var(--color-text-muted);">${E(n.type).label}</div>`}
                            </div>
                            <div class="content-item-info">
                                <div class="content-item-title">${n.title}</div>
                                <div class="content-item-meta">
                                    ${E(n.type).label} • ${"★".repeat(n.rating)}${"☆".repeat(5-n.rating)} • ${C(n.date)}
                                </div>
                            </div>
                            <div class="content-item-actions">
                                <button class="btn btn-danger btn-sm" data-delete-media="${n.id}">Delete</button>
                            </div>
                        </div>
                    `).join("")}
            </div>
        </div>
    `,o.querySelectorAll("[data-delete-writing]").forEach(n=>{n.addEventListener("click",()=>{confirm("Are you sure you want to delete this writing?")&&(Ct(n.dataset.deleteWriting),w("Writing deleted","success"),J(o))})}),o.querySelectorAll("[data-delete-media]").forEach(n=>{n.addEventListener("click",()=>{confirm("Are you sure you want to delete this review?")&&(Pt(n.dataset.deleteMedia),w("Review deleted","success"),J(o))})})}function Ut(o){const e=vt();o.innerHTML=`
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
            
            <div class="form-group" style="margin-bottom: var(--space-4);">
                <label class="form-label">Google Books API Key (optional)</label>
                <input type="text" class="form-input" id="google-books-key" value="${e.googleBooks}" placeholder="Get from Google Cloud Console">
            </div>
            
            <div class="form-group" style="margin-bottom: var(--space-4);">
                <label class="form-label">Spotify Client ID (for songs)</label>
                <input type="text" class="form-input" id="spotify-client-id" value="${e.spotifyClientId}" placeholder="Get from Spotify Developer Dashboard">
            </div>
            
            <div class="form-group" style="margin-bottom: var(--space-4);">
                <label class="form-label">Spotify Client Secret</label>
                <input type="password" class="form-input" id="spotify-client-secret" value="${e.spotifyClientSecret}" placeholder="Get from Spotify Developer Dashboard">
            </div>
            
            <button class="btn btn-primary" id="save-api-keys" style="margin-top: var(--space-4);">
                Save API Keys
            </button>
        </div>
    `,document.getElementById("change-password").addEventListener("click",()=>{const t=document.getElementById("new-password").value;if(t.length<4){w("Password must be at least 4 characters","error");return}At(t),w("Password changed successfully","success"),document.getElementById("new-password").value=""}),document.getElementById("save-api-keys").addEventListener("click",()=>{wt({omdb:document.getElementById("omdb-key").value.trim(),googleBooks:document.getElementById("google-books-key").value.trim(),spotifyClientId:document.getElementById("spotify-client-id").value.trim(),spotifyClientSecret:document.getElementById("spotify-client-secret").value.trim()}),w("API keys saved successfully","success")})}function w(o,e="success"){let t=document.querySelector(".toast-container");t||(t=document.createElement("div"),t.className="toast-container",document.body.appendChild(t));const n=document.createElement("div");n.className=`toast toast-${e}`,n.textContent=o,t.appendChild(n),setTimeout(()=>{n.remove()},3e3)}const R=new Pe,I=document.getElementById("main-content");function Ot(o){return Array(5).fill(0).map((e,t)=>`<span class="star ${t<o?"filled":""}">★</span>`).join("")}R.on("/",()=>{I.innerHTML=`
        <div class="container">
            <div class="home-hero fade-in">
                <h1 class="home-title">Zuber Seth</h1>
                <p class="home-subtitle">Welcome to my personal space on the web.</p>
                <nav class="home-nav">
                    <a href="#/writing" class="home-nav-link">Writing</a>
                    <a href="#/media" class="home-nav-link">Media</a>
                </nav>
            </div>
        </div>
    `});R.on("/writing",()=>{const o=D().writings;if(o.length===0){I.innerHTML=`
            <div class="container">
                <div class="section-header fade-in">
                    <h1 class="section-title">Writing</h1>
                </div>
                <div class="empty-state">
                    <h2 class="empty-state-title">No writings yet</h2>
                    <p class="empty-state-text">Check back soon for new content.</p>
                </div>
            </div>
        `;return}const e=[...o].sort((t,n)=>new Date(n.date)-new Date(t.date));I.innerHTML=`
        <div class="container">
            <div class="section-header fade-in">
                <h1 class="section-title">Writing</h1>
            </div>
            <div class="writings-grid fade-in">
                ${e.map(t=>`
                    <a href="#/writing/${t.id}" class="card card-clickable writing-card">
                        <span class="writing-card-date">${C(t.date)}</span>
                        <h2 class="writing-card-title">${t.title}</h2>
                        <p class="writing-card-excerpt">${yt(t.content)}</p>
                    </a>
                `).join("")}
            </div>
        </div>
    `});R.on("/writing/:id",o=>{const t=D().writings.find(s=>s.id===o.id);if(!t){R.show404();return}const{metadata:n,content:r}=_e(t.content),i=bt(r);I.innerHTML=`
        <div class="container article-container fade-in">
            <div class="article-header">
                <a href="#/writing" class="article-back">← Back to Writing</a>
                <h1 class="article-title">${t.title}</h1>
                <p class="article-date">${C(t.date)}</p>
            </div>
            <div class="article-content">
                ${i}
            </div>
        </div>
    `});R.on("/media",()=>{const o=W().media;if(o.length===0){I.innerHTML=`
            <div class="container">
                <div class="section-header fade-in">
                    <h1 class="section-title">Media</h1>
                </div>
                <div class="empty-state">
                    <h2 class="empty-state-title">No reviews yet</h2>
                    <p class="empty-state-text">Check back soon for media reviews.</p>
                </div>
            </div>
        `;return}const e=[...o].sort((n,r)=>new Date(r.date)-new Date(n.date)),t=[...new Set(e.map(n=>n.type))];I.innerHTML=`
        <div class="container">
            <div class="section-header fade-in">
                <h1 class="section-title">Media</h1>
            </div>
            
            <div class="media-filters fade-in">
                <button class="filter-btn active" data-filter="all">All</button>
                ${t.map(n=>`
                    <button class="filter-btn" data-filter="${n}">${E(n).label}s</button>
                `).join("")}
            </div>
            
            <div class="media-grid fade-in" id="media-grid">
                ${me(e)}
            </div>
        </div>
    `,document.querySelectorAll(".filter-btn").forEach(n=>{n.addEventListener("click",()=>{document.querySelectorAll(".filter-btn").forEach(s=>s.classList.remove("active")),n.classList.add("active");const r=n.dataset.filter,i=r==="all"?e:e.filter(s=>s.type===r);document.getElementById("media-grid").innerHTML=me(i)})})});function me(o){return o.map(e=>`
        <div class="card media-card">
            <div class="media-card-image">
                ${e.imageUrl?`<img src="${e.imageUrl}" alt="${e.title}">`:`<div style="display:flex;align-items:center;justify-content:center;height:100%;font-size:1rem;color:var(--color-text-muted);background:var(--color-bg-tertiary);">${E(e.type).label}</div>`}
                <div class="media-card-overlay">
                    <a href="${e.externalUrl}" target="_blank" rel="noopener noreferrer" class="media-card-link">
                        View on ${e.type==="film"?"IMDb":e.type==="book"?"Google Books":"Spotify"} →
                    </a>
                </div>
            </div>
            <div class="media-card-content">
                <span class="media-card-type">${E(e.type).label}</span>
                <h3 class="media-card-title">${e.title}</h3>
                <div class="star-rating">${Ot(e.rating)}</div>
                ${e.review?`<p class="media-card-review">${e.review}</p>`:""}
                <span class="media-card-date">${C(e.date)}</span>
            </div>
        </div>
    `).join("")}R.on("/admin",()=>{Lt()?Ae(I):ze(I)});console.log("Zuber Seth Personal Website initialized");
