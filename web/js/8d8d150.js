/*! jQuery v3.2.1 | (c) JS Foundation and other contributors | jquery.org/license */
!function(a,b){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){"use strict";var c=[],d=a.document,e=Object.getPrototypeOf,f=c.slice,g=c.concat,h=c.push,i=c.indexOf,j={},k=j.toString,l=j.hasOwnProperty,m=l.toString,n=m.call(Object),o={};function p(a,b){b=b||d;var c=b.createElement("script");c.text=a,b.head.appendChild(c).parentNode.removeChild(c)}var q="3.2.1",r=function(a,b){return new r.fn.init(a,b)},s=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,t=/^-ms-/,u=/-([a-z])/g,v=function(a,b){return b.toUpperCase()};r.fn=r.prototype={jquery:q,constructor:r,length:0,toArray:function(){return f.call(this)},get:function(a){return null==a?f.call(this):a<0?this[a+this.length]:this[a]},pushStack:function(a){var b=r.merge(this.constructor(),a);return b.prevObject=this,b},each:function(a){return r.each(this,a)},map:function(a){return this.pushStack(r.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(f.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(a<0?b:0);return this.pushStack(c>=0&&c<b?[this[c]]:[])},end:function(){return this.prevObject||this.constructor()},push:h,sort:c.sort,splice:c.splice},r.extend=r.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||r.isFunction(g)||(g={}),h===i&&(g=this,h--);h<i;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(r.isPlainObject(d)||(e=Array.isArray(d)))?(e?(e=!1,f=c&&Array.isArray(c)?c:[]):f=c&&r.isPlainObject(c)?c:{},g[b]=r.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},r.extend({expando:"jQuery"+(q+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===r.type(a)},isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){var b=r.type(a);return("number"===b||"string"===b)&&!isNaN(a-parseFloat(a))},isPlainObject:function(a){var b,c;return!(!a||"[object Object]"!==k.call(a))&&(!(b=e(a))||(c=l.call(b,"constructor")&&b.constructor,"function"==typeof c&&m.call(c)===n))},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?j[k.call(a)]||"object":typeof a},globalEval:function(a){p(a)},camelCase:function(a){return a.replace(t,"ms-").replace(u,v)},each:function(a,b){var c,d=0;if(w(a)){for(c=a.length;d<c;d++)if(b.call(a[d],d,a[d])===!1)break}else for(d in a)if(b.call(a[d],d,a[d])===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(s,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(w(Object(a))?r.merge(c,"string"==typeof a?[a]:a):h.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:i.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;d<c;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;f<g;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,e,f=0,h=[];if(w(a))for(d=a.length;f<d;f++)e=b(a[f],f,c),null!=e&&h.push(e);else for(f in a)e=b(a[f],f,c),null!=e&&h.push(e);return g.apply([],h)},guid:1,proxy:function(a,b){var c,d,e;if("string"==typeof b&&(c=a[b],b=a,a=c),r.isFunction(a))return d=f.call(arguments,2),e=function(){return a.apply(b||this,d.concat(f.call(arguments)))},e.guid=a.guid=a.guid||r.guid++,e},now:Date.now,support:o}),"function"==typeof Symbol&&(r.fn[Symbol.iterator]=c[Symbol.iterator]),r.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(a,b){j["[object "+b+"]"]=b.toLowerCase()});function w(a){var b=!!a&&"length"in a&&a.length,c=r.type(a);return"function"!==c&&!r.isWindow(a)&&("array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a)}var x=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ha(),z=ha(),A=ha(),B=function(a,b){return a===b&&(l=!0),0},C={}.hasOwnProperty,D=[],E=D.pop,F=D.push,G=D.push,H=D.slice,I=function(a,b){for(var c=0,d=a.length;c<d;c++)if(a[c]===b)return c;return-1},J="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",K="[\\x20\\t\\r\\n\\f]",L="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",M="\\["+K+"*("+L+")(?:"+K+"*([*^$|!~]?=)"+K+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+L+"))|)"+K+"*\\]",N=":("+L+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+M+")*)|.*)\\)|)",O=new RegExp(K+"+","g"),P=new RegExp("^"+K+"+|((?:^|[^\\\\])(?:\\\\.)*)"+K+"+$","g"),Q=new RegExp("^"+K+"*,"+K+"*"),R=new RegExp("^"+K+"*([>+~]|"+K+")"+K+"*"),S=new RegExp("="+K+"*([^\\]'\"]*?)"+K+"*\\]","g"),T=new RegExp(N),U=new RegExp("^"+L+"$"),V={ID:new RegExp("^#("+L+")"),CLASS:new RegExp("^\\.("+L+")"),TAG:new RegExp("^("+L+"|[*])"),ATTR:new RegExp("^"+M),PSEUDO:new RegExp("^"+N),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+K+"*(even|odd|(([+-]|)(\\d*)n|)"+K+"*(?:([+-]|)"+K+"*(\\d+)|))"+K+"*\\)|)","i"),bool:new RegExp("^(?:"+J+")$","i"),needsContext:new RegExp("^"+K+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+K+"*((?:-\\d)?\\d*)"+K+"*\\)|)(?=[^-]|$)","i")},W=/^(?:input|select|textarea|button)$/i,X=/^h\d$/i,Y=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,$=/[+~]/,_=new RegExp("\\\\([\\da-f]{1,6}"+K+"?|("+K+")|.)","ig"),aa=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:d<0?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},ba=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ca=function(a,b){return b?"\0"===a?"\ufffd":a.slice(0,-1)+"\\"+a.charCodeAt(a.length-1).toString(16)+" ":"\\"+a},da=function(){m()},ea=ta(function(a){return a.disabled===!0&&("form"in a||"label"in a)},{dir:"parentNode",next:"legend"});try{G.apply(D=H.call(v.childNodes),v.childNodes),D[v.childNodes.length].nodeType}catch(fa){G={apply:D.length?function(a,b){F.apply(a,H.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function ga(a,b,d,e){var f,h,j,k,l,o,r,s=b&&b.ownerDocument,w=b?b.nodeType:9;if(d=d||[],"string"!=typeof a||!a||1!==w&&9!==w&&11!==w)return d;if(!e&&((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,p)){if(11!==w&&(l=Z.exec(a)))if(f=l[1]){if(9===w){if(!(j=b.getElementById(f)))return d;if(j.id===f)return d.push(j),d}else if(s&&(j=s.getElementById(f))&&t(b,j)&&j.id===f)return d.push(j),d}else{if(l[2])return G.apply(d,b.getElementsByTagName(a)),d;if((f=l[3])&&c.getElementsByClassName&&b.getElementsByClassName)return G.apply(d,b.getElementsByClassName(f)),d}if(c.qsa&&!A[a+" "]&&(!q||!q.test(a))){if(1!==w)s=b,r=a;else if("object"!==b.nodeName.toLowerCase()){(k=b.getAttribute("id"))?k=k.replace(ba,ca):b.setAttribute("id",k=u),o=g(a),h=o.length;while(h--)o[h]="#"+k+" "+sa(o[h]);r=o.join(","),s=$.test(a)&&qa(b.parentNode)||b}if(r)try{return G.apply(d,s.querySelectorAll(r)),d}catch(x){}finally{k===u&&b.removeAttribute("id")}}}return i(a.replace(P,"$1"),b,d,e)}function ha(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ia(a){return a[u]=!0,a}function ja(a){var b=n.createElement("fieldset");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ka(a,b){var c=a.split("|"),e=c.length;while(e--)d.attrHandle[c[e]]=b}function la(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&a.sourceIndex-b.sourceIndex;if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function na(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function oa(a){return function(b){return"form"in b?b.parentNode&&b.disabled===!1?"label"in b?"label"in b.parentNode?b.parentNode.disabled===a:b.disabled===a:b.isDisabled===a||b.isDisabled!==!a&&ea(b)===a:b.disabled===a:"label"in b&&b.disabled===a}}function pa(a){return ia(function(b){return b=+b,ia(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function qa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=ga.support={},f=ga.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return!!b&&"HTML"!==b.nodeName},m=ga.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=n.documentElement,p=!f(n),v!==n&&(e=n.defaultView)&&e.top!==e&&(e.addEventListener?e.addEventListener("unload",da,!1):e.attachEvent&&e.attachEvent("onunload",da)),c.attributes=ja(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ja(function(a){return a.appendChild(n.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=Y.test(n.getElementsByClassName),c.getById=ja(function(a){return o.appendChild(a).id=u,!n.getElementsByName||!n.getElementsByName(u).length}),c.getById?(d.filter.ID=function(a){var b=a.replace(_,aa);return function(a){return a.getAttribute("id")===b}},d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c?[c]:[]}}):(d.filter.ID=function(a){var b=a.replace(_,aa);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}},d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c,d,e,f=b.getElementById(a);if(f){if(c=f.getAttributeNode("id"),c&&c.value===a)return[f];e=b.getElementsByName(a),d=0;while(f=e[d++])if(c=f.getAttributeNode("id"),c&&c.value===a)return[f]}return[]}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){if("undefined"!=typeof b.getElementsByClassName&&p)return b.getElementsByClassName(a)},r=[],q=[],(c.qsa=Y.test(n.querySelectorAll))&&(ja(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\r\\' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+K+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+K+"*(?:value|"+J+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ja(function(a){a.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var b=n.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+K+"*[*^$|!~]?="),2!==a.querySelectorAll(":enabled").length&&q.push(":enabled",":disabled"),o.appendChild(a).disabled=!0,2!==a.querySelectorAll(":disabled").length&&q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=Y.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ja(function(a){c.disconnectedMatch=s.call(a,"*"),s.call(a,"[s!='']:x"),r.push("!=",N)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=Y.test(o.compareDocumentPosition),t=b||Y.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===n||a.ownerDocument===v&&t(v,a)?-1:b===n||b.ownerDocument===v&&t(v,b)?1:k?I(k,a)-I(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,g=[a],h=[b];if(!e||!f)return a===n?-1:b===n?1:e?-1:f?1:k?I(k,a)-I(k,b):0;if(e===f)return la(a,b);c=a;while(c=c.parentNode)g.unshift(c);c=b;while(c=c.parentNode)h.unshift(c);while(g[d]===h[d])d++;return d?la(g[d],h[d]):g[d]===v?-1:h[d]===v?1:0},n):n},ga.matches=function(a,b){return ga(a,null,null,b)},ga.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(S,"='$1']"),c.matchesSelector&&p&&!A[b+" "]&&(!r||!r.test(b))&&(!q||!q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return ga(b,n,null,[a]).length>0},ga.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},ga.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&C.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},ga.escape=function(a){return(a+"").replace(ba,ca)},ga.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},ga.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=ga.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=ga.selectors={cacheLength:50,createPseudo:ia,match:V,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(_,aa),a[3]=(a[3]||a[4]||a[5]||"").replace(_,aa),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||ga.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&ga.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return V.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&T.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(_,aa).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+K+")"+a+"("+K+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=ga.attr(d,a);return null==e?"!="===b:!b||(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(O," ")+" ").indexOf(c)>-1:"|="===b&&(e===c||e.slice(0,c.length+1)===c+"-"))}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h,t=!1;if(q){if(f){while(p){m=b;while(m=m[p])if(h?m.nodeName.toLowerCase()===r:1===m.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){m=q,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n&&j[2],m=n&&q.childNodes[n];while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if(1===m.nodeType&&++t&&m===b){k[a]=[w,n,t];break}}else if(s&&(m=b,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n),t===!1)while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if((h?m.nodeName.toLowerCase()===r:1===m.nodeType)&&++t&&(s&&(l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),k[a]=[w,t]),m===b))break;return t-=e,t===d||t%d===0&&t/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||ga.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ia(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=I(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ia(function(a){var b=[],c=[],d=h(a.replace(P,"$1"));return d[u]?ia(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ia(function(a){return function(b){return ga(a,b).length>0}}),contains:ia(function(a){return a=a.replace(_,aa),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ia(function(a){return U.test(a||"")||ga.error("unsupported lang: "+a),a=a.replace(_,aa).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:oa(!1),disabled:oa(!0),checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return X.test(a.nodeName)},input:function(a){return W.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:pa(function(){return[0]}),last:pa(function(a,b){return[b-1]}),eq:pa(function(a,b,c){return[c<0?c+b:c]}),even:pa(function(a,b){for(var c=0;c<b;c+=2)a.push(c);return a}),odd:pa(function(a,b){for(var c=1;c<b;c+=2)a.push(c);return a}),lt:pa(function(a,b,c){for(var d=c<0?c+b:c;--d>=0;)a.push(d);return a}),gt:pa(function(a,b,c){for(var d=c<0?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=ma(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=na(b);function ra(){}ra.prototype=d.filters=d.pseudos,d.setFilters=new ra,g=ga.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){c&&!(e=Q.exec(h))||(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=R.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(P," ")}),h=h.slice(c.length));for(g in d.filter)!(e=V[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?ga.error(a):z(a,i).slice(0)};function sa(a){for(var b=0,c=a.length,d="";b<c;b++)d+=a[b].value;return d}function ta(a,b,c){var d=b.dir,e=b.next,f=e||d,g=c&&"parentNode"===f,h=x++;return b.first?function(b,c,e){while(b=b[d])if(1===b.nodeType||g)return a(b,c,e);return!1}:function(b,c,i){var j,k,l,m=[w,h];if(i){while(b=b[d])if((1===b.nodeType||g)&&a(b,c,i))return!0}else while(b=b[d])if(1===b.nodeType||g)if(l=b[u]||(b[u]={}),k=l[b.uniqueID]||(l[b.uniqueID]={}),e&&e===b.nodeName.toLowerCase())b=b[d]||b;else{if((j=k[f])&&j[0]===w&&j[1]===h)return m[2]=j[2];if(k[f]=m,m[2]=a(b,c,i))return!0}return!1}}function ua(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function va(a,b,c){for(var d=0,e=b.length;d<e;d++)ga(a,b[d],c);return c}function wa(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;h<i;h++)(f=a[h])&&(c&&!c(f,d,e)||(g.push(f),j&&b.push(h)));return g}function xa(a,b,c,d,e,f){return d&&!d[u]&&(d=xa(d)),e&&!e[u]&&(e=xa(e,f)),ia(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||va(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:wa(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=wa(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?I(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=wa(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):G.apply(g,r)})}function ya(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=ta(function(a){return a===b},h,!0),l=ta(function(a){return I(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];i<f;i++)if(c=d.relative[a[i].type])m=[ta(ua(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;e<f;e++)if(d.relative[a[e].type])break;return xa(i>1&&ua(m),i>1&&sa(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(P,"$1"),c,i<e&&ya(a.slice(i,e)),e<f&&ya(a=a.slice(e)),e<f&&sa(a))}m.push(c)}return ua(m)}function za(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,o,q,r=0,s="0",t=f&&[],u=[],v=j,x=f||e&&d.find.TAG("*",k),y=w+=null==v?1:Math.random()||.1,z=x.length;for(k&&(j=g===n||g||k);s!==z&&null!=(l=x[s]);s++){if(e&&l){o=0,g||l.ownerDocument===n||(m(l),h=!p);while(q=a[o++])if(q(l,g||n,h)){i.push(l);break}k&&(w=y)}c&&((l=!q&&l)&&r--,f&&t.push(l))}if(r+=s,c&&s!==r){o=0;while(q=b[o++])q(t,u,g,h);if(f){if(r>0)while(s--)t[s]||u[s]||(u[s]=E.call(i));u=wa(u)}G.apply(i,u),k&&!f&&u.length>0&&r+b.length>1&&ga.uniqueSort(i)}return k&&(w=y,j=v),t};return c?ia(f):f}return h=ga.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=ya(b[c]),f[u]?d.push(f):e.push(f);f=A(a,za(e,d)),f.selector=a}return f},i=ga.select=function(a,b,c,e){var f,i,j,k,l,m="function"==typeof a&&a,n=!e&&g(a=m.selector||a);if(c=c||[],1===n.length){if(i=n[0]=n[0].slice(0),i.length>2&&"ID"===(j=i[0]).type&&9===b.nodeType&&p&&d.relative[i[1].type]){if(b=(d.find.ID(j.matches[0].replace(_,aa),b)||[])[0],!b)return c;m&&(b=b.parentNode),a=a.slice(i.shift().value.length)}f=V.needsContext.test(a)?0:i.length;while(f--){if(j=i[f],d.relative[k=j.type])break;if((l=d.find[k])&&(e=l(j.matches[0].replace(_,aa),$.test(i[0].type)&&qa(b.parentNode)||b))){if(i.splice(f,1),a=e.length&&sa(i),!a)return G.apply(c,e),c;break}}}return(m||h(a,n))(e,b,!p,c,!b||$.test(a)&&qa(b.parentNode)||b),c},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ja(function(a){return 1&a.compareDocumentPosition(n.createElement("fieldset"))}),ja(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ka("type|href|height|width",function(a,b,c){if(!c)return a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ja(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ka("value",function(a,b,c){if(!c&&"input"===a.nodeName.toLowerCase())return a.defaultValue}),ja(function(a){return null==a.getAttribute("disabled")})||ka(J,function(a,b,c){var d;if(!c)return a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),ga}(a);r.find=x,r.expr=x.selectors,r.expr[":"]=r.expr.pseudos,r.uniqueSort=r.unique=x.uniqueSort,r.text=x.getText,r.isXMLDoc=x.isXML,r.contains=x.contains,r.escapeSelector=x.escape;var y=function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&r(a).is(c))break;d.push(a)}return d},z=function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c},A=r.expr.match.needsContext;function B(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()}var C=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,D=/^.[^:#\[\.,]*$/;function E(a,b,c){return r.isFunction(b)?r.grep(a,function(a,d){return!!b.call(a,d,a)!==c}):b.nodeType?r.grep(a,function(a){return a===b!==c}):"string"!=typeof b?r.grep(a,function(a){return i.call(b,a)>-1!==c}):D.test(b)?r.filter(b,a,c):(b=r.filter(b,a),r.grep(a,function(a){return i.call(b,a)>-1!==c&&1===a.nodeType}))}r.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?r.find.matchesSelector(d,a)?[d]:[]:r.find.matches(a,r.grep(b,function(a){return 1===a.nodeType}))},r.fn.extend({find:function(a){var b,c,d=this.length,e=this;if("string"!=typeof a)return this.pushStack(r(a).filter(function(){for(b=0;b<d;b++)if(r.contains(e[b],this))return!0}));for(c=this.pushStack([]),b=0;b<d;b++)r.find(a,e[b],c);return d>1?r.uniqueSort(c):c},filter:function(a){return this.pushStack(E(this,a||[],!1))},not:function(a){return this.pushStack(E(this,a||[],!0))},is:function(a){return!!E(this,"string"==typeof a&&A.test(a)?r(a):a||[],!1).length}});var F,G=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,H=r.fn.init=function(a,b,c){var e,f;if(!a)return this;if(c=c||F,"string"==typeof a){if(e="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:G.exec(a),!e||!e[1]&&b)return!b||b.jquery?(b||c).find(a):this.constructor(b).find(a);if(e[1]){if(b=b instanceof r?b[0]:b,r.merge(this,r.parseHTML(e[1],b&&b.nodeType?b.ownerDocument||b:d,!0)),C.test(e[1])&&r.isPlainObject(b))for(e in b)r.isFunction(this[e])?this[e](b[e]):this.attr(e,b[e]);return this}return f=d.getElementById(e[2]),f&&(this[0]=f,this.length=1),this}return a.nodeType?(this[0]=a,this.length=1,this):r.isFunction(a)?void 0!==c.ready?c.ready(a):a(r):r.makeArray(a,this)};H.prototype=r.fn,F=r(d);var I=/^(?:parents|prev(?:Until|All))/,J={children:!0,contents:!0,next:!0,prev:!0};r.fn.extend({has:function(a){var b=r(a,this),c=b.length;return this.filter(function(){for(var a=0;a<c;a++)if(r.contains(this,b[a]))return!0})},closest:function(a,b){var c,d=0,e=this.length,f=[],g="string"!=typeof a&&r(a);if(!A.test(a))for(;d<e;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&r.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?r.uniqueSort(f):f)},index:function(a){return a?"string"==typeof a?i.call(r(a),this[0]):i.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(r.uniqueSort(r.merge(this.get(),r(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function K(a,b){while((a=a[b])&&1!==a.nodeType);return a}r.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return y(a,"parentNode")},parentsUntil:function(a,b,c){return y(a,"parentNode",c)},next:function(a){return K(a,"nextSibling")},prev:function(a){return K(a,"previousSibling")},nextAll:function(a){return y(a,"nextSibling")},prevAll:function(a){return y(a,"previousSibling")},nextUntil:function(a,b,c){return y(a,"nextSibling",c)},prevUntil:function(a,b,c){return y(a,"previousSibling",c)},siblings:function(a){return z((a.parentNode||{}).firstChild,a)},children:function(a){return z(a.firstChild)},contents:function(a){return B(a,"iframe")?a.contentDocument:(B(a,"template")&&(a=a.content||a),r.merge([],a.childNodes))}},function(a,b){r.fn[a]=function(c,d){var e=r.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=r.filter(d,e)),this.length>1&&(J[a]||r.uniqueSort(e),I.test(a)&&e.reverse()),this.pushStack(e)}});var L=/[^\x20\t\r\n\f]+/g;function M(a){var b={};return r.each(a.match(L)||[],function(a,c){b[c]=!0}),b}r.Callbacks=function(a){a="string"==typeof a?M(a):r.extend({},a);var b,c,d,e,f=[],g=[],h=-1,i=function(){for(e=e||a.once,d=b=!0;g.length;h=-1){c=g.shift();while(++h<f.length)f[h].apply(c[0],c[1])===!1&&a.stopOnFalse&&(h=f.length,c=!1)}a.memory||(c=!1),b=!1,e&&(f=c?[]:"")},j={add:function(){return f&&(c&&!b&&(h=f.length-1,g.push(c)),function d(b){r.each(b,function(b,c){r.isFunction(c)?a.unique&&j.has(c)||f.push(c):c&&c.length&&"string"!==r.type(c)&&d(c)})}(arguments),c&&!b&&i()),this},remove:function(){return r.each(arguments,function(a,b){var c;while((c=r.inArray(b,f,c))>-1)f.splice(c,1),c<=h&&h--}),this},has:function(a){return a?r.inArray(a,f)>-1:f.length>0},empty:function(){return f&&(f=[]),this},disable:function(){return e=g=[],f=c="",this},disabled:function(){return!f},lock:function(){return e=g=[],c||b||(f=c=""),this},locked:function(){return!!e},fireWith:function(a,c){return e||(c=c||[],c=[a,c.slice?c.slice():c],g.push(c),b||i()),this},fire:function(){return j.fireWith(this,arguments),this},fired:function(){return!!d}};return j};function N(a){return a}function O(a){throw a}function P(a,b,c,d){var e;try{a&&r.isFunction(e=a.promise)?e.call(a).done(b).fail(c):a&&r.isFunction(e=a.then)?e.call(a,b,c):b.apply(void 0,[a].slice(d))}catch(a){c.apply(void 0,[a])}}r.extend({Deferred:function(b){var c=[["notify","progress",r.Callbacks("memory"),r.Callbacks("memory"),2],["resolve","done",r.Callbacks("once memory"),r.Callbacks("once memory"),0,"resolved"],["reject","fail",r.Callbacks("once memory"),r.Callbacks("once memory"),1,"rejected"]],d="pending",e={state:function(){return d},always:function(){return f.done(arguments).fail(arguments),this},"catch":function(a){return e.then(null,a)},pipe:function(){var a=arguments;return r.Deferred(function(b){r.each(c,function(c,d){var e=r.isFunction(a[d[4]])&&a[d[4]];f[d[1]](function(){var a=e&&e.apply(this,arguments);a&&r.isFunction(a.promise)?a.promise().progress(b.notify).done(b.resolve).fail(b.reject):b[d[0]+"With"](this,e?[a]:arguments)})}),a=null}).promise()},then:function(b,d,e){var f=0;function g(b,c,d,e){return function(){var h=this,i=arguments,j=function(){var a,j;if(!(b<f)){if(a=d.apply(h,i),a===c.promise())throw new TypeError("Thenable self-resolution");j=a&&("object"==typeof a||"function"==typeof a)&&a.then,r.isFunction(j)?e?j.call(a,g(f,c,N,e),g(f,c,O,e)):(f++,j.call(a,g(f,c,N,e),g(f,c,O,e),g(f,c,N,c.notifyWith))):(d!==N&&(h=void 0,i=[a]),(e||c.resolveWith)(h,i))}},k=e?j:function(){try{j()}catch(a){r.Deferred.exceptionHook&&r.Deferred.exceptionHook(a,k.stackTrace),b+1>=f&&(d!==O&&(h=void 0,i=[a]),c.rejectWith(h,i))}};b?k():(r.Deferred.getStackHook&&(k.stackTrace=r.Deferred.getStackHook()),a.setTimeout(k))}}return r.Deferred(function(a){c[0][3].add(g(0,a,r.isFunction(e)?e:N,a.notifyWith)),c[1][3].add(g(0,a,r.isFunction(b)?b:N)),c[2][3].add(g(0,a,r.isFunction(d)?d:O))}).promise()},promise:function(a){return null!=a?r.extend(a,e):e}},f={};return r.each(c,function(a,b){var g=b[2],h=b[5];e[b[1]]=g.add,h&&g.add(function(){d=h},c[3-a][2].disable,c[0][2].lock),g.add(b[3].fire),f[b[0]]=function(){return f[b[0]+"With"](this===f?void 0:this,arguments),this},f[b[0]+"With"]=g.fireWith}),e.promise(f),b&&b.call(f,f),f},when:function(a){var b=arguments.length,c=b,d=Array(c),e=f.call(arguments),g=r.Deferred(),h=function(a){return function(c){d[a]=this,e[a]=arguments.length>1?f.call(arguments):c,--b||g.resolveWith(d,e)}};if(b<=1&&(P(a,g.done(h(c)).resolve,g.reject,!b),"pending"===g.state()||r.isFunction(e[c]&&e[c].then)))return g.then();while(c--)P(e[c],h(c),g.reject);return g.promise()}});var Q=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;r.Deferred.exceptionHook=function(b,c){a.console&&a.console.warn&&b&&Q.test(b.name)&&a.console.warn("jQuery.Deferred exception: "+b.message,b.stack,c)},r.readyException=function(b){a.setTimeout(function(){throw b})};var R=r.Deferred();r.fn.ready=function(a){return R.then(a)["catch"](function(a){r.readyException(a)}),this},r.extend({isReady:!1,readyWait:1,ready:function(a){(a===!0?--r.readyWait:r.isReady)||(r.isReady=!0,a!==!0&&--r.readyWait>0||R.resolveWith(d,[r]))}}),r.ready.then=R.then;function S(){d.removeEventListener("DOMContentLoaded",S),
    a.removeEventListener("load",S),r.ready()}"complete"===d.readyState||"loading"!==d.readyState&&!d.documentElement.doScroll?a.setTimeout(r.ready):(d.addEventListener("DOMContentLoaded",S),a.addEventListener("load",S));var T=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===r.type(c)){e=!0;for(h in c)T(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,r.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(r(a),c)})),b))for(;h<i;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},U=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function V(){this.expando=r.expando+V.uid++}V.uid=1,V.prototype={cache:function(a){var b=a[this.expando];return b||(b={},U(a)&&(a.nodeType?a[this.expando]=b:Object.defineProperty(a,this.expando,{value:b,configurable:!0}))),b},set:function(a,b,c){var d,e=this.cache(a);if("string"==typeof b)e[r.camelCase(b)]=c;else for(d in b)e[r.camelCase(d)]=b[d];return e},get:function(a,b){return void 0===b?this.cache(a):a[this.expando]&&a[this.expando][r.camelCase(b)]},access:function(a,b,c){return void 0===b||b&&"string"==typeof b&&void 0===c?this.get(a,b):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d=a[this.expando];if(void 0!==d){if(void 0!==b){Array.isArray(b)?b=b.map(r.camelCase):(b=r.camelCase(b),b=b in d?[b]:b.match(L)||[]),c=b.length;while(c--)delete d[b[c]]}(void 0===b||r.isEmptyObject(d))&&(a.nodeType?a[this.expando]=void 0:delete a[this.expando])}},hasData:function(a){var b=a[this.expando];return void 0!==b&&!r.isEmptyObject(b)}};var W=new V,X=new V,Y=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Z=/[A-Z]/g;function $(a){return"true"===a||"false"!==a&&("null"===a?null:a===+a+""?+a:Y.test(a)?JSON.parse(a):a)}function _(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(Z,"-$&").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c=$(c)}catch(e){}X.set(a,b,c)}else c=void 0;return c}r.extend({hasData:function(a){return X.hasData(a)||W.hasData(a)},data:function(a,b,c){return X.access(a,b,c)},removeData:function(a,b){X.remove(a,b)},_data:function(a,b,c){return W.access(a,b,c)},_removeData:function(a,b){W.remove(a,b)}}),r.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=X.get(f),1===f.nodeType&&!W.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=r.camelCase(d.slice(5)),_(f,d,e[d])));W.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){X.set(this,a)}):T(this,function(b){var c;if(f&&void 0===b){if(c=X.get(f,a),void 0!==c)return c;if(c=_(f,a),void 0!==c)return c}else this.each(function(){X.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){X.remove(this,a)})}}),r.extend({queue:function(a,b,c){var d;if(a)return b=(b||"fx")+"queue",d=W.get(a,b),c&&(!d||Array.isArray(c)?d=W.access(a,b,r.makeArray(c)):d.push(c)),d||[]},dequeue:function(a,b){b=b||"fx";var c=r.queue(a,b),d=c.length,e=c.shift(),f=r._queueHooks(a,b),g=function(){r.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return W.get(a,c)||W.access(a,c,{empty:r.Callbacks("once memory").add(function(){W.remove(a,[b+"queue",c])})})}}),r.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?r.queue(this[0],a):void 0===b?this:this.each(function(){var c=r.queue(this,a,b);r._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&r.dequeue(this,a)})},dequeue:function(a){return this.each(function(){r.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=r.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=W.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var aa=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,ba=new RegExp("^(?:([+-])=|)("+aa+")([a-z%]*)$","i"),ca=["Top","Right","Bottom","Left"],da=function(a,b){return a=b||a,"none"===a.style.display||""===a.style.display&&r.contains(a.ownerDocument,a)&&"none"===r.css(a,"display")},ea=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};function fa(a,b,c,d){var e,f=1,g=20,h=d?function(){return d.cur()}:function(){return r.css(a,b,"")},i=h(),j=c&&c[3]||(r.cssNumber[b]?"":"px"),k=(r.cssNumber[b]||"px"!==j&&+i)&&ba.exec(r.css(a,b));if(k&&k[3]!==j){j=j||k[3],c=c||[],k=+i||1;do f=f||".5",k/=f,r.style(a,b,k+j);while(f!==(f=h()/i)&&1!==f&&--g)}return c&&(k=+k||+i||0,e=c[1]?k+(c[1]+1)*c[2]:+c[2],d&&(d.unit=j,d.start=k,d.end=e)),e}var ga={};function ha(a){var b,c=a.ownerDocument,d=a.nodeName,e=ga[d];return e?e:(b=c.body.appendChild(c.createElement(d)),e=r.css(b,"display"),b.parentNode.removeChild(b),"none"===e&&(e="block"),ga[d]=e,e)}function ia(a,b){for(var c,d,e=[],f=0,g=a.length;f<g;f++)d=a[f],d.style&&(c=d.style.display,b?("none"===c&&(e[f]=W.get(d,"display")||null,e[f]||(d.style.display="")),""===d.style.display&&da(d)&&(e[f]=ha(d))):"none"!==c&&(e[f]="none",W.set(d,"display",c)));for(f=0;f<g;f++)null!=e[f]&&(a[f].style.display=e[f]);return a}r.fn.extend({show:function(){return ia(this,!0)},hide:function(){return ia(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){da(this)?r(this).show():r(this).hide()})}});var ja=/^(?:checkbox|radio)$/i,ka=/<([a-z][^\/\0>\x20\t\r\n\f]+)/i,la=/^$|\/(?:java|ecma)script/i,ma={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ma.optgroup=ma.option,ma.tbody=ma.tfoot=ma.colgroup=ma.caption=ma.thead,ma.th=ma.td;function na(a,b){var c;return c="undefined"!=typeof a.getElementsByTagName?a.getElementsByTagName(b||"*"):"undefined"!=typeof a.querySelectorAll?a.querySelectorAll(b||"*"):[],void 0===b||b&&B(a,b)?r.merge([a],c):c}function oa(a,b){for(var c=0,d=a.length;c<d;c++)W.set(a[c],"globalEval",!b||W.get(b[c],"globalEval"))}var pa=/<|&#?\w+;/;function qa(a,b,c,d,e){for(var f,g,h,i,j,k,l=b.createDocumentFragment(),m=[],n=0,o=a.length;n<o;n++)if(f=a[n],f||0===f)if("object"===r.type(f))r.merge(m,f.nodeType?[f]:f);else if(pa.test(f)){g=g||l.appendChild(b.createElement("div")),h=(ka.exec(f)||["",""])[1].toLowerCase(),i=ma[h]||ma._default,g.innerHTML=i[1]+r.htmlPrefilter(f)+i[2],k=i[0];while(k--)g=g.lastChild;r.merge(m,g.childNodes),g=l.firstChild,g.textContent=""}else m.push(b.createTextNode(f));l.textContent="",n=0;while(f=m[n++])if(d&&r.inArray(f,d)>-1)e&&e.push(f);else if(j=r.contains(f.ownerDocument,f),g=na(l.appendChild(f),"script"),j&&oa(g),c){k=0;while(f=g[k++])la.test(f.type||"")&&c.push(f)}return l}!function(){var a=d.createDocumentFragment(),b=a.appendChild(d.createElement("div")),c=d.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),o.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",o.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var ra=d.documentElement,sa=/^key/,ta=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,ua=/^([^.]*)(?:\.(.+)|)/;function va(){return!0}function wa(){return!1}function xa(){try{return d.activeElement}catch(a){}}function ya(a,b,c,d,e,f){var g,h;if("object"==typeof b){"string"!=typeof c&&(d=d||c,c=void 0);for(h in b)ya(a,h,c,d,b[h],f);return a}if(null==d&&null==e?(e=c,d=c=void 0):null==e&&("string"==typeof c?(e=d,d=void 0):(e=d,d=c,c=void 0)),e===!1)e=wa;else if(!e)return a;return 1===f&&(g=e,e=function(a){return r().off(a),g.apply(this,arguments)},e.guid=g.guid||(g.guid=r.guid++)),a.each(function(){r.event.add(this,b,e,d,c)})}r.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q=W.get(a);if(q){c.handler&&(f=c,c=f.handler,e=f.selector),e&&r.find.matchesSelector(ra,e),c.guid||(c.guid=r.guid++),(i=q.events)||(i=q.events={}),(g=q.handle)||(g=q.handle=function(b){return"undefined"!=typeof r&&r.event.triggered!==b.type?r.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(L)||[""],j=b.length;while(j--)h=ua.exec(b[j])||[],n=p=h[1],o=(h[2]||"").split(".").sort(),n&&(l=r.event.special[n]||{},n=(e?l.delegateType:l.bindType)||n,l=r.event.special[n]||{},k=r.extend({type:n,origType:p,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&r.expr.match.needsContext.test(e),namespace:o.join(".")},f),(m=i[n])||(m=i[n]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,o,g)!==!1||a.addEventListener&&a.addEventListener(n,g)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),r.event.global[n]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q=W.hasData(a)&&W.get(a);if(q&&(i=q.events)){b=(b||"").match(L)||[""],j=b.length;while(j--)if(h=ua.exec(b[j])||[],n=p=h[1],o=(h[2]||"").split(".").sort(),n){l=r.event.special[n]||{},n=(d?l.delegateType:l.bindType)||n,m=i[n]||[],h=h[2]&&new RegExp("(^|\\.)"+o.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&p!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,o,q.handle)!==!1||r.removeEvent(a,n,q.handle),delete i[n])}else for(n in i)r.event.remove(a,n+b[j],c,d,!0);r.isEmptyObject(i)&&W.remove(a,"handle events")}},dispatch:function(a){var b=r.event.fix(a),c,d,e,f,g,h,i=new Array(arguments.length),j=(W.get(this,"events")||{})[b.type]||[],k=r.event.special[b.type]||{};for(i[0]=b,c=1;c<arguments.length;c++)i[c]=arguments[c];if(b.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,b)!==!1){h=r.event.handlers.call(this,b,j),c=0;while((f=h[c++])&&!b.isPropagationStopped()){b.currentTarget=f.elem,d=0;while((g=f.handlers[d++])&&!b.isImmediatePropagationStopped())b.rnamespace&&!b.rnamespace.test(g.namespace)||(b.handleObj=g,b.data=g.data,e=((r.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==e&&(b.result=e)===!1&&(b.preventDefault(),b.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,b),b.result}},handlers:function(a,b){var c,d,e,f,g,h=[],i=b.delegateCount,j=a.target;if(i&&j.nodeType&&!("click"===a.type&&a.button>=1))for(;j!==this;j=j.parentNode||this)if(1===j.nodeType&&("click"!==a.type||j.disabled!==!0)){for(f=[],g={},c=0;c<i;c++)d=b[c],e=d.selector+" ",void 0===g[e]&&(g[e]=d.needsContext?r(e,this).index(j)>-1:r.find(e,this,null,[j]).length),g[e]&&f.push(d);f.length&&h.push({elem:j,handlers:f})}return j=this,i<b.length&&h.push({elem:j,handlers:b.slice(i)}),h},addProp:function(a,b){Object.defineProperty(r.Event.prototype,a,{enumerable:!0,configurable:!0,get:r.isFunction(b)?function(){if(this.originalEvent)return b(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[a]},set:function(b){Object.defineProperty(this,a,{enumerable:!0,configurable:!0,writable:!0,value:b})}})},fix:function(a){return a[r.expando]?a:new r.Event(a)},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==xa()&&this.focus)return this.focus(),!1},delegateType:"focusin"},blur:{trigger:function(){if(this===xa()&&this.blur)return this.blur(),!1},delegateType:"focusout"},click:{trigger:function(){if("checkbox"===this.type&&this.click&&B(this,"input"))return this.click(),!1},_default:function(a){return B(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}}},r.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c)},r.Event=function(a,b){return this instanceof r.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?va:wa,this.target=a.target&&3===a.target.nodeType?a.target.parentNode:a.target,this.currentTarget=a.currentTarget,this.relatedTarget=a.relatedTarget):this.type=a,b&&r.extend(this,b),this.timeStamp=a&&a.timeStamp||r.now(),void(this[r.expando]=!0)):new r.Event(a,b)},r.Event.prototype={constructor:r.Event,isDefaultPrevented:wa,isPropagationStopped:wa,isImmediatePropagationStopped:wa,isSimulated:!1,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=va,a&&!this.isSimulated&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=va,a&&!this.isSimulated&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=va,a&&!this.isSimulated&&a.stopImmediatePropagation(),this.stopPropagation()}},r.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(a){var b=a.button;return null==a.which&&sa.test(a.type)?null!=a.charCode?a.charCode:a.keyCode:!a.which&&void 0!==b&&ta.test(a.type)?1&b?1:2&b?3:4&b?2:0:a.which}},r.event.addProp),r.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){r.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return e&&(e===d||r.contains(d,e))||(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),r.fn.extend({on:function(a,b,c,d){return ya(this,a,b,c,d)},one:function(a,b,c,d){return ya(this,a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,r(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return b!==!1&&"function"!=typeof b||(c=b,b=void 0),c===!1&&(c=wa),this.each(function(){r.event.remove(this,a,c,b)})}});var za=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,Aa=/<script|<style|<link/i,Ba=/checked\s*(?:[^=]|=\s*.checked.)/i,Ca=/^true\/(.*)/,Da=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Ea(a,b){return B(a,"table")&&B(11!==b.nodeType?b:b.firstChild,"tr")?r(">tbody",a)[0]||a:a}function Fa(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function Ga(a){var b=Ca.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function Ha(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(W.hasData(a)&&(f=W.access(a),g=W.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;c<d;c++)r.event.add(b,e,j[e][c])}X.hasData(a)&&(h=X.access(a),i=r.extend({},h),X.set(b,i))}}function Ia(a,b){var c=b.nodeName.toLowerCase();"input"===c&&ja.test(a.type)?b.checked=a.checked:"input"!==c&&"textarea"!==c||(b.defaultValue=a.defaultValue)}function Ja(a,b,c,d){b=g.apply([],b);var e,f,h,i,j,k,l=0,m=a.length,n=m-1,q=b[0],s=r.isFunction(q);if(s||m>1&&"string"==typeof q&&!o.checkClone&&Ba.test(q))return a.each(function(e){var f=a.eq(e);s&&(b[0]=q.call(this,e,f.html())),Ja(f,b,c,d)});if(m&&(e=qa(b,a[0].ownerDocument,!1,a,d),f=e.firstChild,1===e.childNodes.length&&(e=f),f||d)){for(h=r.map(na(e,"script"),Fa),i=h.length;l<m;l++)j=e,l!==n&&(j=r.clone(j,!0,!0),i&&r.merge(h,na(j,"script"))),c.call(a[l],j,l);if(i)for(k=h[h.length-1].ownerDocument,r.map(h,Ga),l=0;l<i;l++)j=h[l],la.test(j.type||"")&&!W.access(j,"globalEval")&&r.contains(k,j)&&(j.src?r._evalUrl&&r._evalUrl(j.src):p(j.textContent.replace(Da,""),k))}return a}function Ka(a,b,c){for(var d,e=b?r.filter(b,a):a,f=0;null!=(d=e[f]);f++)c||1!==d.nodeType||r.cleanData(na(d)),d.parentNode&&(c&&r.contains(d.ownerDocument,d)&&oa(na(d,"script")),d.parentNode.removeChild(d));return a}r.extend({htmlPrefilter:function(a){return a.replace(za,"<$1></$2>")},clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=r.contains(a.ownerDocument,a);if(!(o.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||r.isXMLDoc(a)))for(g=na(h),f=na(a),d=0,e=f.length;d<e;d++)Ia(f[d],g[d]);if(b)if(c)for(f=f||na(a),g=g||na(h),d=0,e=f.length;d<e;d++)Ha(f[d],g[d]);else Ha(a,h);return g=na(h,"script"),g.length>0&&oa(g,!i&&na(a,"script")),h},cleanData:function(a){for(var b,c,d,e=r.event.special,f=0;void 0!==(c=a[f]);f++)if(U(c)){if(b=c[W.expando]){if(b.events)for(d in b.events)e[d]?r.event.remove(c,d):r.removeEvent(c,d,b.handle);c[W.expando]=void 0}c[X.expando]&&(c[X.expando]=void 0)}}}),r.fn.extend({detach:function(a){return Ka(this,a,!0)},remove:function(a){return Ka(this,a)},text:function(a){return T(this,function(a){return void 0===a?r.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=a)})},null,a,arguments.length)},append:function(){return Ja(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Ea(this,a);b.appendChild(a)}})},prepend:function(){return Ja(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Ea(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return Ja(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return Ja(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(r.cleanData(na(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null!=a&&a,b=null==b?a:b,this.map(function(){return r.clone(this,a,b)})},html:function(a){return T(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!Aa.test(a)&&!ma[(ka.exec(a)||["",""])[1].toLowerCase()]){a=r.htmlPrefilter(a);try{for(;c<d;c++)b=this[c]||{},1===b.nodeType&&(r.cleanData(na(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=[];return Ja(this,arguments,function(b){var c=this.parentNode;r.inArray(this,a)<0&&(r.cleanData(na(this)),c&&c.replaceChild(b,this))},a)}}),r.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){r.fn[a]=function(a){for(var c,d=[],e=r(a),f=e.length-1,g=0;g<=f;g++)c=g===f?this:this.clone(!0),r(e[g])[b](c),h.apply(d,c.get());return this.pushStack(d)}});var La=/^margin/,Ma=new RegExp("^("+aa+")(?!px)[a-z%]+$","i"),Na=function(b){var c=b.ownerDocument.defaultView;return c&&c.opener||(c=a),c.getComputedStyle(b)};!function(){function b(){if(i){i.style.cssText="box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",i.innerHTML="",ra.appendChild(h);var b=a.getComputedStyle(i);c="1%"!==b.top,g="2px"===b.marginLeft,e="4px"===b.width,i.style.marginRight="50%",f="4px"===b.marginRight,ra.removeChild(h),i=null}}var c,e,f,g,h=d.createElement("div"),i=d.createElement("div");i.style&&(i.style.backgroundClip="content-box",i.cloneNode(!0).style.backgroundClip="",o.clearCloneStyle="content-box"===i.style.backgroundClip,h.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",h.appendChild(i),r.extend(o,{pixelPosition:function(){return b(),c},boxSizingReliable:function(){return b(),e},pixelMarginRight:function(){return b(),f},reliableMarginLeft:function(){return b(),g}}))}();function Oa(a,b,c){var d,e,f,g,h=a.style;return c=c||Na(a),c&&(g=c.getPropertyValue(b)||c[b],""!==g||r.contains(a.ownerDocument,a)||(g=r.style(a,b)),!o.pixelMarginRight()&&Ma.test(g)&&La.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+"":g}function Pa(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}var Qa=/^(none|table(?!-c[ea]).+)/,Ra=/^--/,Sa={position:"absolute",visibility:"hidden",display:"block"},Ta={letterSpacing:"0",fontWeight:"400"},Ua=["Webkit","Moz","ms"],Va=d.createElement("div").style;function Wa(a){if(a in Va)return a;var b=a[0].toUpperCase()+a.slice(1),c=Ua.length;while(c--)if(a=Ua[c]+b,a in Va)return a}function Xa(a){var b=r.cssProps[a];return b||(b=r.cssProps[a]=Wa(a)||a),b}function Ya(a,b,c){var d=ba.exec(b);return d?Math.max(0,d[2]-(c||0))+(d[3]||"px"):b}function Za(a,b,c,d,e){var f,g=0;for(f=c===(d?"border":"content")?4:"width"===b?1:0;f<4;f+=2)"margin"===c&&(g+=r.css(a,c+ca[f],!0,e)),d?("content"===c&&(g-=r.css(a,"padding"+ca[f],!0,e)),"margin"!==c&&(g-=r.css(a,"border"+ca[f]+"Width",!0,e))):(g+=r.css(a,"padding"+ca[f],!0,e),"padding"!==c&&(g+=r.css(a,"border"+ca[f]+"Width",!0,e)));return g}function $a(a,b,c){var d,e=Na(a),f=Oa(a,b,e),g="border-box"===r.css(a,"boxSizing",!1,e);return Ma.test(f)?f:(d=g&&(o.boxSizingReliable()||f===a.style[b]),"auto"===f&&(f=a["offset"+b[0].toUpperCase()+b.slice(1)]),f=parseFloat(f)||0,f+Za(a,b,c||(g?"border":"content"),d,e)+"px")}r.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Oa(a,"opacity");return""===c?"1":c}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=r.camelCase(b),i=Ra.test(b),j=a.style;return i||(b=Xa(h)),g=r.cssHooks[b]||r.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:j[b]:(f=typeof c,"string"===f&&(e=ba.exec(c))&&e[1]&&(c=fa(a,b,e),f="number"),null!=c&&c===c&&("number"===f&&(c+=e&&e[3]||(r.cssNumber[h]?"":"px")),o.clearCloneStyle||""!==c||0!==b.indexOf("background")||(j[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i?j.setProperty(b,c):j[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=r.camelCase(b),i=Ra.test(b);return i||(b=Xa(h)),g=r.cssHooks[b]||r.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=Oa(a,b,d)),"normal"===e&&b in Ta&&(e=Ta[b]),""===c||c?(f=parseFloat(e),c===!0||isFinite(f)?f||0:e):e}}),r.each(["height","width"],function(a,b){r.cssHooks[b]={get:function(a,c,d){if(c)return!Qa.test(r.css(a,"display"))||a.getClientRects().length&&a.getBoundingClientRect().width?$a(a,b,d):ea(a,Sa,function(){return $a(a,b,d)})},set:function(a,c,d){var e,f=d&&Na(a),g=d&&Za(a,b,d,"border-box"===r.css(a,"boxSizing",!1,f),f);return g&&(e=ba.exec(c))&&"px"!==(e[3]||"px")&&(a.style[b]=c,c=r.css(a,b)),Ya(a,c,g)}}}),r.cssHooks.marginLeft=Pa(o.reliableMarginLeft,function(a,b){if(b)return(parseFloat(Oa(a,"marginLeft"))||a.getBoundingClientRect().left-ea(a,{marginLeft:0},function(){return a.getBoundingClientRect().left}))+"px"}),r.each({margin:"",padding:"",border:"Width"},function(a,b){r.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];d<4;d++)e[a+ca[d]+b]=f[d]||f[d-2]||f[0];return e}},La.test(a)||(r.cssHooks[a+b].set=Ya)}),r.fn.extend({css:function(a,b){return T(this,function(a,b,c){var d,e,f={},g=0;if(Array.isArray(b)){for(d=Na(a),e=b.length;g<e;g++)f[b[g]]=r.css(a,b[g],!1,d);return f}return void 0!==c?r.style(a,b,c):r.css(a,b)},a,b,arguments.length>1)}});function _a(a,b,c,d,e){return new _a.prototype.init(a,b,c,d,e)}r.Tween=_a,_a.prototype={constructor:_a,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||r.easing._default,this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(r.cssNumber[c]?"":"px")},cur:function(){var a=_a.propHooks[this.prop];return a&&a.get?a.get(this):_a.propHooks._default.get(this)},run:function(a){var b,c=_a.propHooks[this.prop];return this.options.duration?this.pos=b=r.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):_a.propHooks._default.set(this),this}},_a.prototype.init.prototype=_a.prototype,_a.propHooks={_default:{get:function(a){var b;return 1!==a.elem.nodeType||null!=a.elem[a.prop]&&null==a.elem.style[a.prop]?a.elem[a.prop]:(b=r.css(a.elem,a.prop,""),b&&"auto"!==b?b:0)},set:function(a){r.fx.step[a.prop]?r.fx.step[a.prop](a):1!==a.elem.nodeType||null==a.elem.style[r.cssProps[a.prop]]&&!r.cssHooks[a.prop]?a.elem[a.prop]=a.now:r.style(a.elem,a.prop,a.now+a.unit)}}},_a.propHooks.scrollTop=_a.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},r.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2},_default:"swing"},r.fx=_a.prototype.init,r.fx.step={};var ab,bb,cb=/^(?:toggle|show|hide)$/,db=/queueHooks$/;function eb(){bb&&(d.hidden===!1&&a.requestAnimationFrame?a.requestAnimationFrame(eb):a.setTimeout(eb,r.fx.interval),r.fx.tick())}function fb(){return a.setTimeout(function(){ab=void 0}),ab=r.now()}function gb(a,b){var c,d=0,e={height:a};for(b=b?1:0;d<4;d+=2-b)c=ca[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function hb(a,b,c){for(var d,e=(kb.tweeners[b]||[]).concat(kb.tweeners["*"]),f=0,g=e.length;f<g;f++)if(d=e[f].call(c,b,a))return d}function ib(a,b,c){var d,e,f,g,h,i,j,k,l="width"in b||"height"in b,m=this,n={},o=a.style,p=a.nodeType&&da(a),q=W.get(a,"fxshow");c.queue||(g=r._queueHooks(a,"fx"),null==g.unqueued&&(g.unqueued=0,h=g.empty.fire,g.empty.fire=function(){g.unqueued||h()}),g.unqueued++,m.always(function(){m.always(function(){g.unqueued--,r.queue(a,"fx").length||g.empty.fire()})}));for(d in b)if(e=b[d],cb.test(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}n[d]=q&&q[d]||r.style(a,d)}if(i=!r.isEmptyObject(b),i||!r.isEmptyObject(n)){l&&1===a.nodeType&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=q&&q.display,null==j&&(j=W.get(a,"display")),k=r.css(a,"display"),"none"===k&&(j?k=j:(ia([a],!0),j=a.style.display||j,k=r.css(a,"display"),ia([a]))),("inline"===k||"inline-block"===k&&null!=j)&&"none"===r.css(a,"float")&&(i||(m.done(function(){o.display=j}),null==j&&(k=o.display,j="none"===k?"":k)),o.display="inline-block")),c.overflow&&(o.overflow="hidden",m.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]})),i=!1;for(d in n)i||(q?"hidden"in q&&(p=q.hidden):q=W.access(a,"fxshow",{display:j}),f&&(q.hidden=!p),p&&ia([a],!0),m.done(function(){p||ia([a]),W.remove(a,"fxshow");for(d in n)r.style(a,d,n[d])})),i=hb(p?q[d]:0,d,m),d in q||(q[d]=i.start,p&&(i.end=i.start,i.start=0))}}function jb(a,b){var c,d,e,f,g;for(c in a)if(d=r.camelCase(c),e=b[d],f=a[c],Array.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=r.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function kb(a,b,c){var d,e,f=0,g=kb.prefilters.length,h=r.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=ab||fb(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;g<i;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),f<1&&i?c:(i||h.notifyWith(a,[j,1,0]),h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:r.extend({},b),opts:r.extend(!0,{specialEasing:{},easing:r.easing._default},c),originalProperties:b,originalOptions:c,startTime:ab||fb(),duration:c.duration,tweens:[],createTween:function(b,c){var d=r.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;c<d;c++)j.tweens[c].run(1);return b?(h.notifyWith(a,[j,1,0]),h.resolveWith(a,[j,b])):h.rejectWith(a,[j,b]),this}}),k=j.props;for(jb(k,j.opts.specialEasing);f<g;f++)if(d=kb.prefilters[f].call(j,a,k,j.opts))return r.isFunction(d.stop)&&(r._queueHooks(j.elem,j.opts.queue).stop=r.proxy(d.stop,d)),d;return r.map(k,hb,j),r.isFunction(j.opts.start)&&j.opts.start.call(a,j),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always),r.fx.timer(r.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j}r.Animation=r.extend(kb,{tweeners:{"*":[function(a,b){var c=this.createTween(a,b);return fa(c.elem,a,ba.exec(b),c),c}]},tweener:function(a,b){r.isFunction(a)?(b=a,a=["*"]):a=a.match(L);for(var c,d=0,e=a.length;d<e;d++)c=a[d],kb.tweeners[c]=kb.tweeners[c]||[],kb.tweeners[c].unshift(b)},prefilters:[ib],prefilter:function(a,b){b?kb.prefilters.unshift(a):kb.prefilters.push(a)}}),r.speed=function(a,b,c){var d=a&&"object"==typeof a?r.extend({},a):{complete:c||!c&&b||r.isFunction(a)&&a,duration:a,easing:c&&b||b&&!r.isFunction(b)&&b};return r.fx.off?d.duration=0:"number"!=typeof d.duration&&(d.duration in r.fx.speeds?d.duration=r.fx.speeds[d.duration]:d.duration=r.fx.speeds._default),null!=d.queue&&d.queue!==!0||(d.queue="fx"),d.old=d.complete,d.complete=function(){r.isFunction(d.old)&&d.old.call(this),d.queue&&r.dequeue(this,d.queue)},d},r.fn.extend({fadeTo:function(a,b,c,d){return this.filter(da).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=r.isEmptyObject(a),f=r.speed(b,c,d),g=function(){var b=kb(this,r.extend({},a),f);(e||W.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=r.timers,g=W.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&db.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));!b&&c||r.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=W.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=r.timers,g=d?d.length:0;for(c.finish=!0,r.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;b<g;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),r.each(["toggle","show","hide"],function(a,b){var c=r.fn[b];r.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(gb(b,!0),a,d,e)}}),r.each({slideDown:gb("show"),slideUp:gb("hide"),slideToggle:gb("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){r.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),r.timers=[],r.fx.tick=function(){var a,b=0,c=r.timers;for(ab=r.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||r.fx.stop(),ab=void 0},r.fx.timer=function(a){r.timers.push(a),r.fx.start()},r.fx.interval=13,r.fx.start=function(){bb||(bb=!0,eb())},r.fx.stop=function(){bb=null},r.fx.speeds={slow:600,fast:200,_default:400},r.fn.delay=function(b,c){return b=r.fx?r.fx.speeds[b]||b:b,c=c||"fx",this.queue(c,function(c,d){var e=a.setTimeout(c,b);d.stop=function(){a.clearTimeout(e)}})},function(){var a=d.createElement("input"),b=d.createElement("select"),c=b.appendChild(d.createElement("option"));a.type="checkbox",o.checkOn=""!==a.value,o.optSelected=c.selected,a=d.createElement("input"),a.value="t",a.type="radio",o.radioValue="t"===a.value}();var lb,mb=r.expr.attrHandle;r.fn.extend({attr:function(a,b){return T(this,r.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){r.removeAttr(this,a)})}}),r.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return"undefined"==typeof a.getAttribute?r.prop(a,b,c):(1===f&&r.isXMLDoc(a)||(e=r.attrHooks[b.toLowerCase()]||(r.expr.match.bool.test(b)?lb:void 0)),void 0!==c?null===c?void r.removeAttr(a,b):e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:(a.setAttribute(b,c+""),c):e&&"get"in e&&null!==(d=e.get(a,b))?d:(d=r.find.attr(a,b),
    null==d?void 0:d))},attrHooks:{type:{set:function(a,b){if(!o.radioValue&&"radio"===b&&B(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}},removeAttr:function(a,b){var c,d=0,e=b&&b.match(L);if(e&&1===a.nodeType)while(c=e[d++])a.removeAttribute(c)}}),lb={set:function(a,b,c){return b===!1?r.removeAttr(a,c):a.setAttribute(c,c),c}},r.each(r.expr.match.bool.source.match(/\w+/g),function(a,b){var c=mb[b]||r.find.attr;mb[b]=function(a,b,d){var e,f,g=b.toLowerCase();return d||(f=mb[g],mb[g]=e,e=null!=c(a,b,d)?g:null,mb[g]=f),e}});var nb=/^(?:input|select|textarea|button)$/i,ob=/^(?:a|area)$/i;r.fn.extend({prop:function(a,b){return T(this,r.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[r.propFix[a]||a]})}}),r.extend({prop:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return 1===f&&r.isXMLDoc(a)||(b=r.propFix[b]||b,e=r.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=r.find.attr(a,"tabindex");return b?parseInt(b,10):nb.test(a.nodeName)||ob.test(a.nodeName)&&a.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),o.optSelected||(r.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null},set:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex)}}),r.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){r.propFix[this.toLowerCase()]=this});function pb(a){var b=a.match(L)||[];return b.join(" ")}function qb(a){return a.getAttribute&&a.getAttribute("class")||""}r.fn.extend({addClass:function(a){var b,c,d,e,f,g,h,i=0;if(r.isFunction(a))return this.each(function(b){r(this).addClass(a.call(this,b,qb(this)))});if("string"==typeof a&&a){b=a.match(L)||[];while(c=this[i++])if(e=qb(c),d=1===c.nodeType&&" "+pb(e)+" "){g=0;while(f=b[g++])d.indexOf(" "+f+" ")<0&&(d+=f+" ");h=pb(d),e!==h&&c.setAttribute("class",h)}}return this},removeClass:function(a){var b,c,d,e,f,g,h,i=0;if(r.isFunction(a))return this.each(function(b){r(this).removeClass(a.call(this,b,qb(this)))});if(!arguments.length)return this.attr("class","");if("string"==typeof a&&a){b=a.match(L)||[];while(c=this[i++])if(e=qb(c),d=1===c.nodeType&&" "+pb(e)+" "){g=0;while(f=b[g++])while(d.indexOf(" "+f+" ")>-1)d=d.replace(" "+f+" "," ");h=pb(d),e!==h&&c.setAttribute("class",h)}}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):r.isFunction(a)?this.each(function(c){r(this).toggleClass(a.call(this,c,qb(this),b),b)}):this.each(function(){var b,d,e,f;if("string"===c){d=0,e=r(this),f=a.match(L)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else void 0!==a&&"boolean"!==c||(b=qb(this),b&&W.set(this,"__className__",b),this.setAttribute&&this.setAttribute("class",b||a===!1?"":W.get(this,"__className__")||""))})},hasClass:function(a){var b,c,d=0;b=" "+a+" ";while(c=this[d++])if(1===c.nodeType&&(" "+pb(qb(c))+" ").indexOf(b)>-1)return!0;return!1}});var rb=/\r/g;r.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=r.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,r(this).val()):a,null==e?e="":"number"==typeof e?e+="":Array.isArray(e)&&(e=r.map(e,function(a){return null==a?"":a+""})),b=r.valHooks[this.type]||r.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=r.valHooks[e.type]||r.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(rb,""):null==c?"":c)}}}),r.extend({valHooks:{option:{get:function(a){var b=r.find.attr(a,"value");return null!=b?b:pb(r.text(a))}},select:{get:function(a){var b,c,d,e=a.options,f=a.selectedIndex,g="select-one"===a.type,h=g?null:[],i=g?f+1:e.length;for(d=f<0?i:g?f:0;d<i;d++)if(c=e[d],(c.selected||d===f)&&!c.disabled&&(!c.parentNode.disabled||!B(c.parentNode,"optgroup"))){if(b=r(c).val(),g)return b;h.push(b)}return h},set:function(a,b){var c,d,e=a.options,f=r.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=r.inArray(r.valHooks.option.get(d),f)>-1)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),r.each(["radio","checkbox"],function(){r.valHooks[this]={set:function(a,b){if(Array.isArray(b))return a.checked=r.inArray(r(a).val(),b)>-1}},o.checkOn||(r.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var sb=/^(?:focusinfocus|focusoutblur)$/;r.extend(r.event,{trigger:function(b,c,e,f){var g,h,i,j,k,m,n,o=[e||d],p=l.call(b,"type")?b.type:b,q=l.call(b,"namespace")?b.namespace.split("."):[];if(h=i=e=e||d,3!==e.nodeType&&8!==e.nodeType&&!sb.test(p+r.event.triggered)&&(p.indexOf(".")>-1&&(q=p.split("."),p=q.shift(),q.sort()),k=p.indexOf(":")<0&&"on"+p,b=b[r.expando]?b:new r.Event(p,"object"==typeof b&&b),b.isTrigger=f?2:3,b.namespace=q.join("."),b.rnamespace=b.namespace?new RegExp("(^|\\.)"+q.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=e),c=null==c?[b]:r.makeArray(c,[b]),n=r.event.special[p]||{},f||!n.trigger||n.trigger.apply(e,c)!==!1)){if(!f&&!n.noBubble&&!r.isWindow(e)){for(j=n.delegateType||p,sb.test(j+p)||(h=h.parentNode);h;h=h.parentNode)o.push(h),i=h;i===(e.ownerDocument||d)&&o.push(i.defaultView||i.parentWindow||a)}g=0;while((h=o[g++])&&!b.isPropagationStopped())b.type=g>1?j:n.bindType||p,m=(W.get(h,"events")||{})[b.type]&&W.get(h,"handle"),m&&m.apply(h,c),m=k&&h[k],m&&m.apply&&U(h)&&(b.result=m.apply(h,c),b.result===!1&&b.preventDefault());return b.type=p,f||b.isDefaultPrevented()||n._default&&n._default.apply(o.pop(),c)!==!1||!U(e)||k&&r.isFunction(e[p])&&!r.isWindow(e)&&(i=e[k],i&&(e[k]=null),r.event.triggered=p,e[p](),r.event.triggered=void 0,i&&(e[k]=i)),b.result}},simulate:function(a,b,c){var d=r.extend(new r.Event,c,{type:a,isSimulated:!0});r.event.trigger(d,null,b)}}),r.fn.extend({trigger:function(a,b){return this.each(function(){r.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];if(c)return r.event.trigger(a,b,c,!0)}}),r.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(a,b){r.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),r.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}}),o.focusin="onfocusin"in a,o.focusin||r.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){r.event.simulate(b,a.target,r.event.fix(a))};r.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=W.access(d,b);e||d.addEventListener(a,c,!0),W.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=W.access(d,b)-1;e?W.access(d,b,e):(d.removeEventListener(a,c,!0),W.remove(d,b))}}});var tb=a.location,ub=r.now(),vb=/\?/;r.parseXML=function(b){var c;if(!b||"string"!=typeof b)return null;try{c=(new a.DOMParser).parseFromString(b,"text/xml")}catch(d){c=void 0}return c&&!c.getElementsByTagName("parsererror").length||r.error("Invalid XML: "+b),c};var wb=/\[\]$/,xb=/\r?\n/g,yb=/^(?:submit|button|image|reset|file)$/i,zb=/^(?:input|select|textarea|keygen)/i;function Ab(a,b,c,d){var e;if(Array.isArray(b))r.each(b,function(b,e){c||wb.test(a)?d(a,e):Ab(a+"["+("object"==typeof e&&null!=e?b:"")+"]",e,c,d)});else if(c||"object"!==r.type(b))d(a,b);else for(e in b)Ab(a+"["+e+"]",b[e],c,d)}r.param=function(a,b){var c,d=[],e=function(a,b){var c=r.isFunction(b)?b():b;d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(null==c?"":c)};if(Array.isArray(a)||a.jquery&&!r.isPlainObject(a))r.each(a,function(){e(this.name,this.value)});else for(c in a)Ab(c,a[c],b,e);return d.join("&")},r.fn.extend({serialize:function(){return r.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=r.prop(this,"elements");return a?r.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!r(this).is(":disabled")&&zb.test(this.nodeName)&&!yb.test(a)&&(this.checked||!ja.test(a))}).map(function(a,b){var c=r(this).val();return null==c?null:Array.isArray(c)?r.map(c,function(a){return{name:b.name,value:a.replace(xb,"\r\n")}}):{name:b.name,value:c.replace(xb,"\r\n")}}).get()}});var Bb=/%20/g,Cb=/#.*$/,Db=/([?&])_=[^&]*/,Eb=/^(.*?):[ \t]*([^\r\n]*)$/gm,Fb=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Gb=/^(?:GET|HEAD)$/,Hb=/^\/\//,Ib={},Jb={},Kb="*/".concat("*"),Lb=d.createElement("a");Lb.href=tb.href;function Mb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(L)||[];if(r.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function Nb(a,b,c,d){var e={},f=a===Jb;function g(h){var i;return e[h]=!0,r.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function Ob(a,b){var c,d,e=r.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&r.extend(!0,a,d),a}function Pb(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}if(f)return f!==i[0]&&i.unshift(f),c[f]}function Qb(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}r.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:tb.href,type:"GET",isLocal:Fb.test(tb.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Kb,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":r.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?Ob(Ob(a,r.ajaxSettings),b):Ob(r.ajaxSettings,a)},ajaxPrefilter:Mb(Ib),ajaxTransport:Mb(Jb),ajax:function(b,c){"object"==typeof b&&(c=b,b=void 0),c=c||{};var e,f,g,h,i,j,k,l,m,n,o=r.ajaxSetup({},c),p=o.context||o,q=o.context&&(p.nodeType||p.jquery)?r(p):r.event,s=r.Deferred(),t=r.Callbacks("once memory"),u=o.statusCode||{},v={},w={},x="canceled",y={readyState:0,getResponseHeader:function(a){var b;if(k){if(!h){h={};while(b=Eb.exec(g))h[b[1].toLowerCase()]=b[2]}b=h[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return k?g:null},setRequestHeader:function(a,b){return null==k&&(a=w[a.toLowerCase()]=w[a.toLowerCase()]||a,v[a]=b),this},overrideMimeType:function(a){return null==k&&(o.mimeType=a),this},statusCode:function(a){var b;if(a)if(k)y.always(a[y.status]);else for(b in a)u[b]=[u[b],a[b]];return this},abort:function(a){var b=a||x;return e&&e.abort(b),A(0,b),this}};if(s.promise(y),o.url=((b||o.url||tb.href)+"").replace(Hb,tb.protocol+"//"),o.type=c.method||c.type||o.method||o.type,o.dataTypes=(o.dataType||"*").toLowerCase().match(L)||[""],null==o.crossDomain){j=d.createElement("a");try{j.href=o.url,j.href=j.href,o.crossDomain=Lb.protocol+"//"+Lb.host!=j.protocol+"//"+j.host}catch(z){o.crossDomain=!0}}if(o.data&&o.processData&&"string"!=typeof o.data&&(o.data=r.param(o.data,o.traditional)),Nb(Ib,o,c,y),k)return y;l=r.event&&o.global,l&&0===r.active++&&r.event.trigger("ajaxStart"),o.type=o.type.toUpperCase(),o.hasContent=!Gb.test(o.type),f=o.url.replace(Cb,""),o.hasContent?o.data&&o.processData&&0===(o.contentType||"").indexOf("application/x-www-form-urlencoded")&&(o.data=o.data.replace(Bb,"+")):(n=o.url.slice(f.length),o.data&&(f+=(vb.test(f)?"&":"?")+o.data,delete o.data),o.cache===!1&&(f=f.replace(Db,"$1"),n=(vb.test(f)?"&":"?")+"_="+ub++ +n),o.url=f+n),o.ifModified&&(r.lastModified[f]&&y.setRequestHeader("If-Modified-Since",r.lastModified[f]),r.etag[f]&&y.setRequestHeader("If-None-Match",r.etag[f])),(o.data&&o.hasContent&&o.contentType!==!1||c.contentType)&&y.setRequestHeader("Content-Type",o.contentType),y.setRequestHeader("Accept",o.dataTypes[0]&&o.accepts[o.dataTypes[0]]?o.accepts[o.dataTypes[0]]+("*"!==o.dataTypes[0]?", "+Kb+"; q=0.01":""):o.accepts["*"]);for(m in o.headers)y.setRequestHeader(m,o.headers[m]);if(o.beforeSend&&(o.beforeSend.call(p,y,o)===!1||k))return y.abort();if(x="abort",t.add(o.complete),y.done(o.success),y.fail(o.error),e=Nb(Jb,o,c,y)){if(y.readyState=1,l&&q.trigger("ajaxSend",[y,o]),k)return y;o.async&&o.timeout>0&&(i=a.setTimeout(function(){y.abort("timeout")},o.timeout));try{k=!1,e.send(v,A)}catch(z){if(k)throw z;A(-1,z)}}else A(-1,"No Transport");function A(b,c,d,h){var j,m,n,v,w,x=c;k||(k=!0,i&&a.clearTimeout(i),e=void 0,g=h||"",y.readyState=b>0?4:0,j=b>=200&&b<300||304===b,d&&(v=Pb(o,y,d)),v=Qb(o,v,y,j),j?(o.ifModified&&(w=y.getResponseHeader("Last-Modified"),w&&(r.lastModified[f]=w),w=y.getResponseHeader("etag"),w&&(r.etag[f]=w)),204===b||"HEAD"===o.type?x="nocontent":304===b?x="notmodified":(x=v.state,m=v.data,n=v.error,j=!n)):(n=x,!b&&x||(x="error",b<0&&(b=0))),y.status=b,y.statusText=(c||x)+"",j?s.resolveWith(p,[m,x,y]):s.rejectWith(p,[y,x,n]),y.statusCode(u),u=void 0,l&&q.trigger(j?"ajaxSuccess":"ajaxError",[y,o,j?m:n]),t.fireWith(p,[y,x]),l&&(q.trigger("ajaxComplete",[y,o]),--r.active||r.event.trigger("ajaxStop")))}return y},getJSON:function(a,b,c){return r.get(a,b,c,"json")},getScript:function(a,b){return r.get(a,void 0,b,"script")}}),r.each(["get","post"],function(a,b){r[b]=function(a,c,d,e){return r.isFunction(c)&&(e=e||d,d=c,c=void 0),r.ajax(r.extend({url:a,type:b,dataType:e,data:c,success:d},r.isPlainObject(a)&&a))}}),r._evalUrl=function(a){return r.ajax({url:a,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,"throws":!0})},r.fn.extend({wrapAll:function(a){var b;return this[0]&&(r.isFunction(a)&&(a=a.call(this[0])),b=r(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this},wrapInner:function(a){return r.isFunction(a)?this.each(function(b){r(this).wrapInner(a.call(this,b))}):this.each(function(){var b=r(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=r.isFunction(a);return this.each(function(c){r(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(a){return this.parent(a).not("body").each(function(){r(this).replaceWith(this.childNodes)}),this}}),r.expr.pseudos.hidden=function(a){return!r.expr.pseudos.visible(a)},r.expr.pseudos.visible=function(a){return!!(a.offsetWidth||a.offsetHeight||a.getClientRects().length)},r.ajaxSettings.xhr=function(){try{return new a.XMLHttpRequest}catch(b){}};var Rb={0:200,1223:204},Sb=r.ajaxSettings.xhr();o.cors=!!Sb&&"withCredentials"in Sb,o.ajax=Sb=!!Sb,r.ajaxTransport(function(b){var c,d;if(o.cors||Sb&&!b.crossDomain)return{send:function(e,f){var g,h=b.xhr();if(h.open(b.type,b.url,b.async,b.username,b.password),b.xhrFields)for(g in b.xhrFields)h[g]=b.xhrFields[g];b.mimeType&&h.overrideMimeType&&h.overrideMimeType(b.mimeType),b.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest");for(g in e)h.setRequestHeader(g,e[g]);c=function(a){return function(){c&&(c=d=h.onload=h.onerror=h.onabort=h.onreadystatechange=null,"abort"===a?h.abort():"error"===a?"number"!=typeof h.status?f(0,"error"):f(h.status,h.statusText):f(Rb[h.status]||h.status,h.statusText,"text"!==(h.responseType||"text")||"string"!=typeof h.responseText?{binary:h.response}:{text:h.responseText},h.getAllResponseHeaders()))}},h.onload=c(),d=h.onerror=c("error"),void 0!==h.onabort?h.onabort=d:h.onreadystatechange=function(){4===h.readyState&&a.setTimeout(function(){c&&d()})},c=c("abort");try{h.send(b.hasContent&&b.data||null)}catch(i){if(c)throw i}},abort:function(){c&&c()}}}),r.ajaxPrefilter(function(a){a.crossDomain&&(a.contents.script=!1)}),r.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(a){return r.globalEval(a),a}}}),r.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),r.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(e,f){b=r("<script>").prop({charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&f("error"===a.type?404:200,a.type)}),d.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Tb=[],Ub=/(=)\?(?=&|$)|\?\?/;r.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Tb.pop()||r.expando+"_"+ub++;return this[a]=!0,a}}),r.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Ub.test(b.url)?"url":"string"==typeof b.data&&0===(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Ub.test(b.data)&&"data");if(h||"jsonp"===b.dataTypes[0])return e=b.jsonpCallback=r.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Ub,"$1"+e):b.jsonp!==!1&&(b.url+=(vb.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||r.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){void 0===f?r(a).removeProp(e):a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Tb.push(e)),g&&r.isFunction(f)&&f(g[0]),g=f=void 0}),"script"}),o.createHTMLDocument=function(){var a=d.implementation.createHTMLDocument("").body;return a.innerHTML="<form></form><form></form>",2===a.childNodes.length}(),r.parseHTML=function(a,b,c){if("string"!=typeof a)return[];"boolean"==typeof b&&(c=b,b=!1);var e,f,g;return b||(o.createHTMLDocument?(b=d.implementation.createHTMLDocument(""),e=b.createElement("base"),e.href=d.location.href,b.head.appendChild(e)):b=d),f=C.exec(a),g=!c&&[],f?[b.createElement(f[1])]:(f=qa([a],b,g),g&&g.length&&r(g).remove(),r.merge([],f.childNodes))},r.fn.load=function(a,b,c){var d,e,f,g=this,h=a.indexOf(" ");return h>-1&&(d=pb(a.slice(h)),a=a.slice(0,h)),r.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&r.ajax({url:a,type:e||"GET",dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?r("<div>").append(r.parseHTML(a)).find(d):a)}).always(c&&function(a,b){g.each(function(){c.apply(this,f||[a.responseText,b,a])})}),this},r.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){r.fn[b]=function(a){return this.on(b,a)}}),r.expr.pseudos.animated=function(a){return r.grep(r.timers,function(b){return a===b.elem}).length},r.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=r.css(a,"position"),l=r(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=r.css(a,"top"),i=r.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),r.isFunction(b)&&(b=b.call(a,c,r.extend({},h))),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},r.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){r.offset.setOffset(this,a,b)});var b,c,d,e,f=this[0];if(f)return f.getClientRects().length?(d=f.getBoundingClientRect(),b=f.ownerDocument,c=b.documentElement,e=b.defaultView,{top:d.top+e.pageYOffset-c.clientTop,left:d.left+e.pageXOffset-c.clientLeft}):{top:0,left:0}},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===r.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),B(a[0],"html")||(d=a.offset()),d={top:d.top+r.css(a[0],"borderTopWidth",!0),left:d.left+r.css(a[0],"borderLeftWidth",!0)}),{top:b.top-d.top-r.css(c,"marginTop",!0),left:b.left-d.left-r.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent;while(a&&"static"===r.css(a,"position"))a=a.offsetParent;return a||ra})}}),r.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c="pageYOffset"===b;r.fn[a]=function(d){return T(this,function(a,d,e){var f;return r.isWindow(a)?f=a:9===a.nodeType&&(f=a.defaultView),void 0===e?f?f[b]:a[d]:void(f?f.scrollTo(c?f.pageXOffset:e,c?e:f.pageYOffset):a[d]=e)},a,d,arguments.length)}}),r.each(["top","left"],function(a,b){r.cssHooks[b]=Pa(o.pixelPosition,function(a,c){if(c)return c=Oa(a,b),Ma.test(c)?r(a).position()[b]+"px":c})}),r.each({Height:"height",Width:"width"},function(a,b){r.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){r.fn[d]=function(e,f){var g=arguments.length&&(c||"boolean"!=typeof e),h=c||(e===!0||f===!0?"margin":"border");return T(this,function(b,c,e){var f;return r.isWindow(b)?0===d.indexOf("outer")?b["inner"+a]:b.document.documentElement["client"+a]:9===b.nodeType?(f=b.documentElement,Math.max(b.body["scroll"+a],f["scroll"+a],b.body["offset"+a],f["offset"+a],f["client"+a])):void 0===e?r.css(b,c,h):r.style(b,c,e,h)},b,g?e:void 0,g)}})}),r.fn.extend({bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}}),r.holdReady=function(a){a?r.readyWait++:r.ready(!0)},r.isArray=Array.isArray,r.parseJSON=JSON.parse,r.nodeName=B,"function"==typeof define&&define.amd&&define("jquery",[],function(){return r});var Vb=a.jQuery,Wb=a.$;return r.noConflict=function(b){return a.$===r&&(a.$=Wb),b&&a.jQuery===r&&(a.jQuery=Vb),r},b||(a.jQuery=a.$=r),r});

/*!
 * Bootstrap v3.3.4 (http://getbootstrap.com)
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */

if (typeof jQuery === 'undefined') {
  throw new Error('Bootstrap\'s JavaScript requires jQuery')
}

+function ($) {
  'use strict';
  var version = $.fn.jquery.split(' ')[0].split('.')
  if ((version[0] < 2 && version[1] < 9) || (version[0] == 1 && version[1] == 9 && version[2] < 1)) {
    throw new Error('Bootstrap\'s JavaScript requires jQuery version 1.9.1 or higher')
  }
}(jQuery);

/* ========================================================================
 * Bootstrap: transition.js v3.3.4
 * http://getbootstrap.com/javascript/#transitions
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // CSS TRANSITION SUPPORT (Shoutout: http://www.modernizr.com/)
  // ============================================================

  function transitionEnd() {
    var el = document.createElement('bootstrap')

    var transEndEventNames = {
      WebkitTransition : 'webkitTransitionEnd',
      MozTransition    : 'transitionend',
      OTransition      : 'oTransitionEnd otransitionend',
      transition       : 'transitionend'
    }

    for (var name in transEndEventNames) {
      if (el.style[name] !== undefined) {
        return { end: transEndEventNames[name] }
      }
    }

    return false // explicit for ie8 (  ._.)
  }

  // http://blog.alexmaccaw.com/css-transitions
  $.fn.emulateTransitionEnd = function (duration) {
    var called = false
    var $el = this
    $(this).one('bsTransitionEnd', function () { called = true })
    var callback = function () { if (!called) $($el).trigger($.support.transition.end) }
    setTimeout(callback, duration)
    return this
  }

  $(function () {
    $.support.transition = transitionEnd()

    if (!$.support.transition) return

    $.event.special.bsTransitionEnd = {
      bindType: $.support.transition.end,
      delegateType: $.support.transition.end,
      handle: function (e) {
        if ($(e.target).is(this)) return e.handleObj.handler.apply(this, arguments)
      }
    }
  })

}(jQuery);

/* ========================================================================
 * Bootstrap: alert.js v3.3.4
 * http://getbootstrap.com/javascript/#alerts
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // ALERT CLASS DEFINITION
  // ======================

  var dismiss = '[data-dismiss="alert"]'
  var Alert   = function (el) {
    $(el).on('click', dismiss, this.close)
  }

  Alert.VERSION = '3.3.4'

  Alert.TRANSITION_DURATION = 150

  Alert.prototype.close = function (e) {
    var $this    = $(this)
    var selector = $this.attr('data-target')

    if (!selector) {
      selector = $this.attr('href')
      selector = selector && selector.replace(/.*(?=#[^\s]*$)/, '') // strip for ie7
    }

    var $parent = $(selector)

    if (e) e.preventDefault()

    if (!$parent.length) {
      $parent = $this.closest('.alert')
    }

    $parent.trigger(e = $.Event('close.bs.alert'))

    if (e.isDefaultPrevented()) return

    $parent.removeClass('in')

    function removeElement() {
      // detach from parent, fire event then clean up data
      $parent.detach().trigger('closed.bs.alert').remove()
    }

    $.support.transition && $parent.hasClass('fade') ?
      $parent
        .one('bsTransitionEnd', removeElement)
        .emulateTransitionEnd(Alert.TRANSITION_DURATION) :
      removeElement()
  }


  // ALERT PLUGIN DEFINITION
  // =======================

  function Plugin(option) {
    return this.each(function () {
      var $this = $(this)
      var data  = $this.data('bs.alert')

      if (!data) $this.data('bs.alert', (data = new Alert(this)))
      if (typeof option == 'string') data[option].call($this)
    })
  }

  var old = $.fn.alert

  $.fn.alert             = Plugin
  $.fn.alert.Constructor = Alert


  // ALERT NO CONFLICT
  // =================

  $.fn.alert.noConflict = function () {
    $.fn.alert = old
    return this
  }


  // ALERT DATA-API
  // ==============

  $(document).on('click.bs.alert.data-api', dismiss, Alert.prototype.close)

}(jQuery);

/* ========================================================================
 * Bootstrap: button.js v3.3.4
 * http://getbootstrap.com/javascript/#buttons
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // BUTTON PUBLIC CLASS DEFINITION
  // ==============================

  var Button = function (element, options) {
    this.$element  = $(element)
    this.options   = $.extend({}, Button.DEFAULTS, options)
    this.isLoading = false
  }

  Button.VERSION  = '3.3.4'

  Button.DEFAULTS = {
    loadingText: 'loading...'
  }

  Button.prototype.setState = function (state) {
    var d    = 'disabled'
    var $el  = this.$element
    var val  = $el.is('input') ? 'val' : 'html'
    var data = $el.data()

    state = state + 'Text'

    if (data.resetText == null) $el.data('resetText', $el[val]())

    // push to event loop to allow forms to submit
    setTimeout($.proxy(function () {
      $el[val](data[state] == null ? this.options[state] : data[state])

      if (state == 'loadingText') {
        this.isLoading = true
        $el.addClass(d).attr(d, d)
      } else if (this.isLoading) {
        this.isLoading = false
        $el.removeClass(d).removeAttr(d)
      }
    }, this), 0)
  }

  Button.prototype.toggle = function () {
    var changed = true
    var $parent = this.$element.closest('[data-toggle="buttons"]')

    if ($parent.length) {
      var $input = this.$element.find('input')
      if ($input.prop('type') == 'radio') {
        if ($input.prop('checked') && this.$element.hasClass('active')) changed = false
        else $parent.find('.active').removeClass('active')
      }
      if (changed) $input.prop('checked', !this.$element.hasClass('active')).trigger('change')
    } else {
      this.$element.attr('aria-pressed', !this.$element.hasClass('active'))
    }

    if (changed) this.$element.toggleClass('active')
  }


  // BUTTON PLUGIN DEFINITION
  // ========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.button')
      var options = typeof option == 'object' && option

      if (!data) $this.data('bs.button', (data = new Button(this, options)))

      if (option == 'toggle') data.toggle()
      else if (option) data.setState(option)
    })
  }

  var old = $.fn.button

  $.fn.button             = Plugin
  $.fn.button.Constructor = Button


  // BUTTON NO CONFLICT
  // ==================

  $.fn.button.noConflict = function () {
    $.fn.button = old
    return this
  }


  // BUTTON DATA-API
  // ===============

  $(document)
    .on('click.bs.button.data-api', '[data-toggle^="button"]', function (e) {
      var $btn = $(e.target)
      if (!$btn.hasClass('btn')) $btn = $btn.closest('.btn')
      Plugin.call($btn, 'toggle')
      e.preventDefault()
    })
    .on('focus.bs.button.data-api blur.bs.button.data-api', '[data-toggle^="button"]', function (e) {
      $(e.target).closest('.btn').toggleClass('focus', /^focus(in)?$/.test(e.type))
    })

}(jQuery);

/* ========================================================================
 * Bootstrap: carousel.js v3.3.4
 * http://getbootstrap.com/javascript/#carousel
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // CAROUSEL CLASS DEFINITION
  // =========================

  var Carousel = function (element, options) {
    this.$element    = $(element)
    this.$indicators = this.$element.find('.carousel-indicators')
    this.options     = options
    this.paused      = null
    this.sliding     = null
    this.interval    = null
    this.$active     = null
    this.$items      = null

    this.options.keyboard && this.$element.on('keydown.bs.carousel', $.proxy(this.keydown, this))

    this.options.pause == 'hover' && !('ontouchstart' in document.documentElement) && this.$element
      .on('mouseenter.bs.carousel', $.proxy(this.pause, this))
      .on('mouseleave.bs.carousel', $.proxy(this.cycle, this))
  }

  Carousel.VERSION  = '3.3.4'

  Carousel.TRANSITION_DURATION = 600

  Carousel.DEFAULTS = {
    interval: 5000,
    pause: 'hover',
    wrap: true,
    keyboard: true
  }

  Carousel.prototype.keydown = function (e) {
    if (/input|textarea/i.test(e.target.tagName)) return
    switch (e.which) {
      case 37: this.prev(); break
      case 39: this.next(); break
      default: return
    }

    e.preventDefault()
  }

  Carousel.prototype.cycle = function (e) {
    e || (this.paused = false)

    this.interval && clearInterval(this.interval)

    this.options.interval
      && !this.paused
      && (this.interval = setInterval($.proxy(this.next, this), this.options.interval))

    return this
  }

  Carousel.prototype.getItemIndex = function (item) {
    this.$items = item.parent().children('.item')
    return this.$items.index(item || this.$active)
  }

  Carousel.prototype.getItemForDirection = function (direction, active) {
    var activeIndex = this.getItemIndex(active)
    var willWrap = (direction == 'prev' && activeIndex === 0)
                || (direction == 'next' && activeIndex == (this.$items.length - 1))
    if (willWrap && !this.options.wrap) return active
    var delta = direction == 'prev' ? -1 : 1
    var itemIndex = (activeIndex + delta) % this.$items.length
    return this.$items.eq(itemIndex)
  }

  Carousel.prototype.to = function (pos) {
    var that        = this
    var activeIndex = this.getItemIndex(this.$active = this.$element.find('.item.active'))

    if (pos > (this.$items.length - 1) || pos < 0) return

    if (this.sliding)       return this.$element.one('slid.bs.carousel', function () { that.to(pos) }) // yes, "slid"
    if (activeIndex == pos) return this.pause().cycle()

    return this.slide(pos > activeIndex ? 'next' : 'prev', this.$items.eq(pos))
  }

  Carousel.prototype.pause = function (e) {
    e || (this.paused = true)

    if (this.$element.find('.next, .prev').length && $.support.transition) {
      this.$element.trigger($.support.transition.end)
      this.cycle(true)
    }

    this.interval = clearInterval(this.interval)

    return this
  }

  Carousel.prototype.next = function () {
    if (this.sliding) return
    return this.slide('next')
  }

  Carousel.prototype.prev = function () {
    if (this.sliding) return
    return this.slide('prev')
  }

  Carousel.prototype.slide = function (type, next) {
    var $active   = this.$element.find('.item.active')
    var $next     = next || this.getItemForDirection(type, $active)
    var isCycling = this.interval
    var direction = type == 'next' ? 'left' : 'right'
    var that      = this

    if ($next.hasClass('active')) return (this.sliding = false)

    var relatedTarget = $next[0]
    var slideEvent = $.Event('slide.bs.carousel', {
      relatedTarget: relatedTarget,
      direction: direction
    })
    this.$element.trigger(slideEvent)
    if (slideEvent.isDefaultPrevented()) return

    this.sliding = true

    isCycling && this.pause()

    if (this.$indicators.length) {
      this.$indicators.find('.active').removeClass('active')
      var $nextIndicator = $(this.$indicators.children()[this.getItemIndex($next)])
      $nextIndicator && $nextIndicator.addClass('active')
    }

    var slidEvent = $.Event('slid.bs.carousel', { relatedTarget: relatedTarget, direction: direction }) // yes, "slid"
    if ($.support.transition && this.$element.hasClass('slide')) {
      $next.addClass(type)
      $next[0].offsetWidth // force reflow
      $active.addClass(direction)
      $next.addClass(direction)
      $active
        .one('bsTransitionEnd', function () {
          $next.removeClass([type, direction].join(' ')).addClass('active')
          $active.removeClass(['active', direction].join(' '))
          that.sliding = false
          setTimeout(function () {
            that.$element.trigger(slidEvent)
          }, 0)
        })
        .emulateTransitionEnd(Carousel.TRANSITION_DURATION)
    } else {
      $active.removeClass('active')
      $next.addClass('active')
      this.sliding = false
      this.$element.trigger(slidEvent)
    }

    isCycling && this.cycle()

    return this
  }


  // CAROUSEL PLUGIN DEFINITION
  // ==========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.carousel')
      var options = $.extend({}, Carousel.DEFAULTS, $this.data(), typeof option == 'object' && option)
      var action  = typeof option == 'string' ? option : options.slide

      if (!data) $this.data('bs.carousel', (data = new Carousel(this, options)))
      if (typeof option == 'number') data.to(option)
      else if (action) data[action]()
      else if (options.interval) data.pause().cycle()
    })
  }

  var old = $.fn.carousel

  $.fn.carousel             = Plugin
  $.fn.carousel.Constructor = Carousel


  // CAROUSEL NO CONFLICT
  // ====================

  $.fn.carousel.noConflict = function () {
    $.fn.carousel = old
    return this
  }


  // CAROUSEL DATA-API
  // =================

  var clickHandler = function (e) {
    var href
    var $this   = $(this)
    var $target = $($this.attr('data-target') || (href = $this.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '')) // strip for ie7
    if (!$target.hasClass('carousel')) return
    var options = $.extend({}, $target.data(), $this.data())
    var slideIndex = $this.attr('data-slide-to')
    if (slideIndex) options.interval = false

    Plugin.call($target, options)

    if (slideIndex) {
      $target.data('bs.carousel').to(slideIndex)
    }

    e.preventDefault()
  }

  $(document)
    .on('click.bs.carousel.data-api', '[data-slide]', clickHandler)
    .on('click.bs.carousel.data-api', '[data-slide-to]', clickHandler)

  $(window).on('load', function () {
    $('[data-ride="carousel"]').each(function () {
      var $carousel = $(this)
      Plugin.call($carousel, $carousel.data())
    })
  })

}(jQuery);

/* ========================================================================
 * Bootstrap: collapse.js v3.3.4
 * http://getbootstrap.com/javascript/#collapse
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // COLLAPSE PUBLIC CLASS DEFINITION
  // ================================

  var Collapse = function (element, options) {
    this.$element      = $(element)
    this.options       = $.extend({}, Collapse.DEFAULTS, options)
    this.$trigger      = $('[data-toggle="collapse"][href="#' + element.id + '"],' +
                           '[data-toggle="collapse"][data-target="#' + element.id + '"]')
    this.transitioning = null

    if (this.options.parent) {
      this.$parent = this.getParent()
    } else {
      this.addAriaAndCollapsedClass(this.$element, this.$trigger)
    }

    if (this.options.toggle) this.toggle()
  }

  Collapse.VERSION  = '3.3.4'

  Collapse.TRANSITION_DURATION = 350

  Collapse.DEFAULTS = {
    toggle: true
  }

  Collapse.prototype.dimension = function () {
    var hasWidth = this.$element.hasClass('width')
    return hasWidth ? 'width' : 'height'
  }

  Collapse.prototype.show = function () {
    if (this.transitioning || this.$element.hasClass('in')) return

    var activesData
    var actives = this.$parent && this.$parent.children('.panel').children('.in, .collapsing')

    if (actives && actives.length) {
      activesData = actives.data('bs.collapse')
      if (activesData && activesData.transitioning) return
    }

    var startEvent = $.Event('show.bs.collapse')
    this.$element.trigger(startEvent)
    if (startEvent.isDefaultPrevented()) return

    if (actives && actives.length) {
      Plugin.call(actives, 'hide')
      activesData || actives.data('bs.collapse', null)
    }

    var dimension = this.dimension()

    this.$element
      .removeClass('collapse')
      .addClass('collapsing')[dimension](0)
      .attr('aria-expanded', true)

    this.$trigger
      .removeClass('collapsed')
      .attr('aria-expanded', true)

    this.transitioning = 1

    var complete = function () {
      this.$element
        .removeClass('collapsing')
        .addClass('collapse in')[dimension]('')
      this.transitioning = 0
      this.$element
        .trigger('shown.bs.collapse')
    }

    if (!$.support.transition) return complete.call(this)

    var scrollSize = $.camelCase(['scroll', dimension].join('-'))

    this.$element
      .one('bsTransitionEnd', $.proxy(complete, this))
      .emulateTransitionEnd(Collapse.TRANSITION_DURATION)[dimension](this.$element[0][scrollSize])
  }

  Collapse.prototype.hide = function () {
    if (this.transitioning || !this.$element.hasClass('in')) return

    var startEvent = $.Event('hide.bs.collapse')
    this.$element.trigger(startEvent)
    if (startEvent.isDefaultPrevented()) return

    var dimension = this.dimension()

    this.$element[dimension](this.$element[dimension]())[0].offsetHeight

    this.$element
      .addClass('collapsing')
      .removeClass('collapse in')
      .attr('aria-expanded', false)

    this.$trigger
      .addClass('collapsed')
      .attr('aria-expanded', false)

    this.transitioning = 1

    var complete = function () {
      this.transitioning = 0
      this.$element
        .removeClass('collapsing')
        .addClass('collapse')
        .trigger('hidden.bs.collapse')
    }

    if (!$.support.transition) return complete.call(this)

    this.$element
      [dimension](0)
      .one('bsTransitionEnd', $.proxy(complete, this))
      .emulateTransitionEnd(Collapse.TRANSITION_DURATION)
  }

  Collapse.prototype.toggle = function () {
    this[this.$element.hasClass('in') ? 'hide' : 'show']()
  }

  Collapse.prototype.getParent = function () {
    return $(this.options.parent)
      .find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]')
      .each($.proxy(function (i, element) {
        var $element = $(element)
        this.addAriaAndCollapsedClass(getTargetFromTrigger($element), $element)
      }, this))
      .end()
  }

  Collapse.prototype.addAriaAndCollapsedClass = function ($element, $trigger) {
    var isOpen = $element.hasClass('in')

    $element.attr('aria-expanded', isOpen)
    $trigger
      .toggleClass('collapsed', !isOpen)
      .attr('aria-expanded', isOpen)
  }

  function getTargetFromTrigger($trigger) {
    var href
    var target = $trigger.attr('data-target')
      || (href = $trigger.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '') // strip for ie7

    return $(target)
  }


  // COLLAPSE PLUGIN DEFINITION
  // ==========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.collapse')
      var options = $.extend({}, Collapse.DEFAULTS, $this.data(), typeof option == 'object' && option)

      if (!data && options.toggle && /show|hide/.test(option)) options.toggle = false
      if (!data) $this.data('bs.collapse', (data = new Collapse(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.collapse

  $.fn.collapse             = Plugin
  $.fn.collapse.Constructor = Collapse


  // COLLAPSE NO CONFLICT
  // ====================

  $.fn.collapse.noConflict = function () {
    $.fn.collapse = old
    return this
  }


  // COLLAPSE DATA-API
  // =================

  $(document).on('click.bs.collapse.data-api', '[data-toggle="collapse"]', function (e) {
    var $this   = $(this)

    if (!$this.attr('data-target')) e.preventDefault()

    var $target = getTargetFromTrigger($this)
    var data    = $target.data('bs.collapse')
    var option  = data ? 'toggle' : $this.data()

    Plugin.call($target, option)
  })

}(jQuery);

/* ========================================================================
 * Bootstrap: dropdown.js v3.3.4
 * http://getbootstrap.com/javascript/#dropdowns
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // DROPDOWN CLASS DEFINITION
  // =========================

  var backdrop = '.dropdown-backdrop'
  var toggle   = '[data-toggle="dropdown"]'
  var Dropdown = function (element) {
    $(element).on('click.bs.dropdown', this.toggle)
  }

  Dropdown.VERSION = '3.3.4'

  Dropdown.prototype.toggle = function (e) {
    var $this = $(this)

    if ($this.is('.disabled, :disabled')) return

    var $parent  = getParent($this)
    var isActive = $parent.hasClass('open')

    clearMenus()

    if (!isActive) {
      if ('ontouchstart' in document.documentElement && !$parent.closest('.navbar-nav').length) {
        // if mobile we use a backdrop because click events don't delegate
        $('<div class="dropdown-backdrop"/>').insertAfter($(this)).on('click', clearMenus)
      }

      var relatedTarget = { relatedTarget: this }
      $parent.trigger(e = $.Event('show.bs.dropdown', relatedTarget))

      if (e.isDefaultPrevented()) return

      $this
        .trigger('focus')
        .attr('aria-expanded', 'true')

      $parent
        .toggleClass('open')
        .trigger('shown.bs.dropdown', relatedTarget)
    }

    return false
  }

  Dropdown.prototype.keydown = function (e) {
    if (!/(38|40|27|32)/.test(e.which) || /input|textarea/i.test(e.target.tagName)) return

    var $this = $(this)

    e.preventDefault()
    e.stopPropagation()

    if ($this.is('.disabled, :disabled')) return

    var $parent  = getParent($this)
    var isActive = $parent.hasClass('open')

    if ((!isActive && e.which != 27) || (isActive && e.which == 27)) {
      if (e.which == 27) $parent.find(toggle).trigger('focus')
      return $this.trigger('click')
    }

    var desc = ' li:not(.disabled):visible a'
    var $items = $parent.find('[role="menu"]' + desc + ', [role="listbox"]' + desc)

    if (!$items.length) return

    var index = $items.index(e.target)

    if (e.which == 38 && index > 0)                 index--                        // up
    if (e.which == 40 && index < $items.length - 1) index++                        // down
    if (!~index)                                      index = 0

    $items.eq(index).trigger('focus')
  }

  function clearMenus(e) {
    if (e && e.which === 3) return
    $(backdrop).remove()
    $(toggle).each(function () {
      var $this         = $(this)
      var $parent       = getParent($this)
      var relatedTarget = { relatedTarget: this }

      if (!$parent.hasClass('open')) return

      $parent.trigger(e = $.Event('hide.bs.dropdown', relatedTarget))

      if (e.isDefaultPrevented()) return

      $this.attr('aria-expanded', 'false')
      $parent.removeClass('open').trigger('hidden.bs.dropdown', relatedTarget)
    })
  }

  function getParent($this) {
    var selector = $this.attr('data-target')

    if (!selector) {
      selector = $this.attr('href')
      selector = selector && /#[A-Za-z]/.test(selector) && selector.replace(/.*(?=#[^\s]*$)/, '') // strip for ie7
    }

    var $parent = selector && $(selector)

    return $parent && $parent.length ? $parent : $this.parent()
  }


  // DROPDOWN PLUGIN DEFINITION
  // ==========================

  function Plugin(option) {
    return this.each(function () {
      var $this = $(this)
      var data  = $this.data('bs.dropdown')

      if (!data) $this.data('bs.dropdown', (data = new Dropdown(this)))
      if (typeof option == 'string') data[option].call($this)
    })
  }

  var old = $.fn.dropdown

  $.fn.dropdown             = Plugin
  $.fn.dropdown.Constructor = Dropdown


  // DROPDOWN NO CONFLICT
  // ====================

  $.fn.dropdown.noConflict = function () {
    $.fn.dropdown = old
    return this
  }


  // APPLY TO STANDARD DROPDOWN ELEMENTS
  // ===================================

  $(document)
    .on('click.bs.dropdown.data-api', clearMenus)
    .on('click.bs.dropdown.data-api', '.dropdown form', function (e) { e.stopPropagation() })
    .on('click.bs.dropdown.data-api', toggle, Dropdown.prototype.toggle)
    .on('keydown.bs.dropdown.data-api', toggle, Dropdown.prototype.keydown)
    .on('keydown.bs.dropdown.data-api', '[role="menu"]', Dropdown.prototype.keydown)
    .on('keydown.bs.dropdown.data-api', '[role="listbox"]', Dropdown.prototype.keydown)

}(jQuery);

/* ========================================================================
 * Bootstrap: modal.js v3.3.4
 * http://getbootstrap.com/javascript/#modals
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // MODAL CLASS DEFINITION
  // ======================

  var Modal = function (element, options) {
    this.options             = options
    this.$body               = $(document.body)
    this.$element            = $(element)
    this.$dialog             = this.$element.find('.modal-dialog')
    this.$backdrop           = null
    this.isShown             = null
    this.originalBodyPad     = null
    this.scrollbarWidth      = 0
    this.ignoreBackdropClick = false

    if (this.options.remote) {
      this.$element
        .find('.modal-content')
        .load(this.options.remote, $.proxy(function () {
          this.$element.trigger('loaded.bs.modal')
        }, this))
    }
  }

  Modal.VERSION  = '3.3.4'

  Modal.TRANSITION_DURATION = 300
  Modal.BACKDROP_TRANSITION_DURATION = 150

  Modal.DEFAULTS = {
    backdrop: true,
    keyboard: true,
    show: true
  }

  Modal.prototype.toggle = function (_relatedTarget) {
    return this.isShown ? this.hide() : this.show(_relatedTarget)
  }

  Modal.prototype.show = function (_relatedTarget) {
    var that = this
    var e    = $.Event('show.bs.modal', { relatedTarget: _relatedTarget })

    this.$element.trigger(e)

    if (this.isShown || e.isDefaultPrevented()) return

    this.isShown = true

    this.checkScrollbar()
    this.setScrollbar()
    this.$body.addClass('modal-open')

    this.escape()
    this.resize()

    this.$element.on('click.dismiss.bs.modal', '[data-dismiss="modal"]', $.proxy(this.hide, this))

    this.$dialog.on('mousedown.dismiss.bs.modal', function () {
      that.$element.one('mouseup.dismiss.bs.modal', function (e) {
        if ($(e.target).is(that.$element)) that.ignoreBackdropClick = true
      })
    })

    this.backdrop(function () {
      var transition = $.support.transition && that.$element.hasClass('fade')

      if (!that.$element.parent().length) {
        that.$element.appendTo(that.$body) // don't move modals dom position
      }

      that.$element
        .show()
        .scrollTop(0)

      that.adjustDialog()

      if (transition) {
        that.$element[0].offsetWidth // force reflow
      }

      that.$element
        .addClass('in')
        .attr('aria-hidden', false)

      that.enforceFocus()

      var e = $.Event('shown.bs.modal', { relatedTarget: _relatedTarget })

      transition ?
        that.$dialog // wait for modal to slide in
          .one('bsTransitionEnd', function () {
            that.$element.trigger('focus').trigger(e)
          })
          .emulateTransitionEnd(Modal.TRANSITION_DURATION) :
        that.$element.trigger('focus').trigger(e)
    })
  }

  Modal.prototype.hide = function (e) {
    if (e) e.preventDefault()

    e = $.Event('hide.bs.modal')

    this.$element.trigger(e)

    if (!this.isShown || e.isDefaultPrevented()) return

    this.isShown = false

    this.escape()
    this.resize()

    $(document).off('focusin.bs.modal')

    this.$element
      .removeClass('in')
      .attr('aria-hidden', true)
      .off('click.dismiss.bs.modal')
      .off('mouseup.dismiss.bs.modal')

    this.$dialog.off('mousedown.dismiss.bs.modal')

    $.support.transition && this.$element.hasClass('fade') ?
      this.$element
        .one('bsTransitionEnd', $.proxy(this.hideModal, this))
        .emulateTransitionEnd(Modal.TRANSITION_DURATION) :
      this.hideModal()
  }

  Modal.prototype.enforceFocus = function () {
    $(document)
      .off('focusin.bs.modal') // guard against infinite focus loop
      .on('focusin.bs.modal', $.proxy(function (e) {
        if (this.$element[0] !== e.target && !this.$element.has(e.target).length) {
          this.$element.trigger('focus')
        }
      }, this))
  }

  Modal.prototype.escape = function () {
    if (this.isShown && this.options.keyboard) {
      this.$element.on('keydown.dismiss.bs.modal', $.proxy(function (e) {
        e.which == 27 && this.hide()
      }, this))
    } else if (!this.isShown) {
      this.$element.off('keydown.dismiss.bs.modal')
    }
  }

  Modal.prototype.resize = function () {
    if (this.isShown) {
      $(window).on('resize.bs.modal', $.proxy(this.handleUpdate, this))
    } else {
      $(window).off('resize.bs.modal')
    }
  }

  Modal.prototype.hideModal = function () {
    var that = this
    this.$element.hide()
    this.backdrop(function () {
      that.$body.removeClass('modal-open')
      that.resetAdjustments()
      that.resetScrollbar()
      that.$element.trigger('hidden.bs.modal')
    })
  }

  Modal.prototype.removeBackdrop = function () {
    this.$backdrop && this.$backdrop.remove()
    this.$backdrop = null
  }

  Modal.prototype.backdrop = function (callback) {
    var that = this
    var animate = this.$element.hasClass('fade') ? 'fade' : ''

    if (this.isShown && this.options.backdrop) {
      var doAnimate = $.support.transition && animate

      this.$backdrop = $('<div class="modal-backdrop ' + animate + '" />')
        .appendTo(this.$body)

      this.$element.on('click.dismiss.bs.modal', $.proxy(function (e) {
        if (this.ignoreBackdropClick) {
          this.ignoreBackdropClick = false
          return
        }
        if (e.target !== e.currentTarget) return
        this.options.backdrop == 'static'
          ? this.$element[0].focus()
          : this.hide()
      }, this))

      if (doAnimate) this.$backdrop[0].offsetWidth // force reflow

      this.$backdrop.addClass('in')

      if (!callback) return

      doAnimate ?
        this.$backdrop
          .one('bsTransitionEnd', callback)
          .emulateTransitionEnd(Modal.BACKDROP_TRANSITION_DURATION) :
        callback()

    } else if (!this.isShown && this.$backdrop) {
      this.$backdrop.removeClass('in')

      var callbackRemove = function () {
        that.removeBackdrop()
        callback && callback()
      }
      $.support.transition && this.$element.hasClass('fade') ?
        this.$backdrop
          .one('bsTransitionEnd', callbackRemove)
          .emulateTransitionEnd(Modal.BACKDROP_TRANSITION_DURATION) :
        callbackRemove()

    } else if (callback) {
      callback()
    }
  }

  // these following methods are used to handle overflowing modals

  Modal.prototype.handleUpdate = function () {
    this.adjustDialog()
  }

  Modal.prototype.adjustDialog = function () {
    var modalIsOverflowing = this.$element[0].scrollHeight > document.documentElement.clientHeight

    this.$element.css({
      paddingLeft:  !this.bodyIsOverflowing && modalIsOverflowing ? this.scrollbarWidth : '',
      paddingRight: this.bodyIsOverflowing && !modalIsOverflowing ? this.scrollbarWidth : ''
    })
  }

  Modal.prototype.resetAdjustments = function () {
    this.$element.css({
      paddingLeft: '',
      paddingRight: ''
    })
  }

  Modal.prototype.checkScrollbar = function () {
    var fullWindowWidth = window.innerWidth
    if (!fullWindowWidth) { // workaround for missing window.innerWidth in IE8
      var documentElementRect = document.documentElement.getBoundingClientRect()
      fullWindowWidth = documentElementRect.right - Math.abs(documentElementRect.left)
    }
    this.bodyIsOverflowing = document.body.clientWidth < fullWindowWidth
    this.scrollbarWidth = this.measureScrollbar()
  }

  Modal.prototype.setScrollbar = function () {
    var bodyPad = parseInt((this.$body.css('padding-right') || 0), 10)
    this.originalBodyPad = document.body.style.paddingRight || ''
    if (this.bodyIsOverflowing) this.$body.css('padding-right', bodyPad + this.scrollbarWidth)
  }

  Modal.prototype.resetScrollbar = function () {
    this.$body.css('padding-right', this.originalBodyPad)
  }

  Modal.prototype.measureScrollbar = function () { // thx walsh
    var scrollDiv = document.createElement('div')
    scrollDiv.className = 'modal-scrollbar-measure'
    this.$body.append(scrollDiv)
    var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth
    this.$body[0].removeChild(scrollDiv)
    return scrollbarWidth
  }


  // MODAL PLUGIN DEFINITION
  // =======================

  function Plugin(option, _relatedTarget) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.modal')
      var options = $.extend({}, Modal.DEFAULTS, $this.data(), typeof option == 'object' && option)

      if (!data) $this.data('bs.modal', (data = new Modal(this, options)))
      if (typeof option == 'string') data[option](_relatedTarget)
      else if (options.show) data.show(_relatedTarget)
    })
  }

  var old = $.fn.modal

  $.fn.modal             = Plugin
  $.fn.modal.Constructor = Modal


  // MODAL NO CONFLICT
  // =================

  $.fn.modal.noConflict = function () {
    $.fn.modal = old
    return this
  }


  // MODAL DATA-API
  // ==============

  $(document).on('click.bs.modal.data-api', '[data-toggle="modal"]', function (e) {
    var $this   = $(this)
    var href    = $this.attr('href')
    var $target = $($this.attr('data-target') || (href && href.replace(/.*(?=#[^\s]+$)/, ''))) // strip for ie7
    var option  = $target.data('bs.modal') ? 'toggle' : $.extend({ remote: !/#/.test(href) && href }, $target.data(), $this.data())

    if ($this.is('a')) e.preventDefault()

    $target.one('show.bs.modal', function (showEvent) {
      if (showEvent.isDefaultPrevented()) return // only register focus restorer if modal will actually get shown
      $target.one('hidden.bs.modal', function () {
        $this.is(':visible') && $this.trigger('focus')
      })
    })
    Plugin.call($target, option, this)
  })

}(jQuery);

/* ========================================================================
 * Bootstrap: tooltip.js v3.3.4
 * http://getbootstrap.com/javascript/#tooltip
 * Inspired by the original jQuery.tipsy by Jason Frame
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // TOOLTIP PUBLIC CLASS DEFINITION
  // ===============================

  var Tooltip = function (element, options) {
    this.type       = null
    this.options    = null
    this.enabled    = null
    this.timeout    = null
    this.hoverState = null
    this.$element   = null

    this.init('tooltip', element, options)
  }

  Tooltip.VERSION  = '3.3.4'

  Tooltip.TRANSITION_DURATION = 150

  Tooltip.DEFAULTS = {
    animation: true,
    placement: 'top',
    selector: false,
    template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
    trigger: 'hover focus',
    title: '',
    delay: 0,
    html: false,
    container: false,
    viewport: {
      selector: 'body',
      padding: 0
    }
  }

  Tooltip.prototype.init = function (type, element, options) {
    this.enabled   = true
    this.type      = type
    this.$element  = $(element)
    this.options   = this.getOptions(options)
    this.$viewport = this.options.viewport && $(this.options.viewport.selector || this.options.viewport)

    if (this.$element[0] instanceof document.constructor && !this.options.selector) {
      throw new Error('`selector` option must be specified when initializing ' + this.type + ' on the window.document object!')
    }

    var triggers = this.options.trigger.split(' ')

    for (var i = triggers.length; i--;) {
      var trigger = triggers[i]

      if (trigger == 'click') {
        this.$element.on('click.' + this.type, this.options.selector, $.proxy(this.toggle, this))
      } else if (trigger != 'manual') {
        var eventIn  = trigger == 'hover' ? 'mouseenter' : 'focusin'
        var eventOut = trigger == 'hover' ? 'mouseleave' : 'focusout'

        this.$element.on(eventIn  + '.' + this.type, this.options.selector, $.proxy(this.enter, this))
        this.$element.on(eventOut + '.' + this.type, this.options.selector, $.proxy(this.leave, this))
      }
    }

    this.options.selector ?
      (this._options = $.extend({}, this.options, { trigger: 'manual', selector: '' })) :
      this.fixTitle()
  }

  Tooltip.prototype.getDefaults = function () {
    return Tooltip.DEFAULTS
  }

  Tooltip.prototype.getOptions = function (options) {
    options = $.extend({}, this.getDefaults(), this.$element.data(), options)

    if (options.delay && typeof options.delay == 'number') {
      options.delay = {
        show: options.delay,
        hide: options.delay
      }
    }

    return options
  }

  Tooltip.prototype.getDelegateOptions = function () {
    var options  = {}
    var defaults = this.getDefaults()

    this._options && $.each(this._options, function (key, value) {
      if (defaults[key] != value) options[key] = value
    })

    return options
  }

  Tooltip.prototype.enter = function (obj) {
    var self = obj instanceof this.constructor ?
      obj : $(obj.currentTarget).data('bs.' + this.type)

    if (self && self.$tip && self.$tip.is(':visible')) {
      self.hoverState = 'in'
      return
    }

    if (!self) {
      self = new this.constructor(obj.currentTarget, this.getDelegateOptions())
      $(obj.currentTarget).data('bs.' + this.type, self)
    }

    clearTimeout(self.timeout)

    self.hoverState = 'in'

    if (!self.options.delay || !self.options.delay.show) return self.show()

    self.timeout = setTimeout(function () {
      if (self.hoverState == 'in') self.show()
    }, self.options.delay.show)
  }

  Tooltip.prototype.leave = function (obj) {
    var self = obj instanceof this.constructor ?
      obj : $(obj.currentTarget).data('bs.' + this.type)

    if (!self) {
      self = new this.constructor(obj.currentTarget, this.getDelegateOptions())
      $(obj.currentTarget).data('bs.' + this.type, self)
    }

    clearTimeout(self.timeout)

    self.hoverState = 'out'

    if (!self.options.delay || !self.options.delay.hide) return self.hide()

    self.timeout = setTimeout(function () {
      if (self.hoverState == 'out') self.hide()
    }, self.options.delay.hide)
  }

  Tooltip.prototype.show = function () {
    var e = $.Event('show.bs.' + this.type)

    if (this.hasContent() && this.enabled) {
      this.$element.trigger(e)

      var inDom = $.contains(this.$element[0].ownerDocument.documentElement, this.$element[0])
      if (e.isDefaultPrevented() || !inDom) return
      var that = this

      var $tip = this.tip()

      var tipId = this.getUID(this.type)

      this.setContent()
      $tip.attr('id', tipId)
      this.$element.attr('aria-describedby', tipId)

      if (this.options.animation) $tip.addClass('fade')

      var placement = typeof this.options.placement == 'function' ?
        this.options.placement.call(this, $tip[0], this.$element[0]) :
        this.options.placement

      var autoToken = /\s?auto?\s?/i
      var autoPlace = autoToken.test(placement)
      if (autoPlace) placement = placement.replace(autoToken, '') || 'top'

      $tip
        .detach()
        .css({ top: 0, left: 0, display: 'block' })
        .addClass(placement)
        .data('bs.' + this.type, this)

      this.options.container ? $tip.appendTo(this.options.container) : $tip.insertAfter(this.$element)

      var pos          = this.getPosition()
      var actualWidth  = $tip[0].offsetWidth
      var actualHeight = $tip[0].offsetHeight

      if (autoPlace) {
        var orgPlacement = placement
        var $container   = this.options.container ? $(this.options.container) : this.$element.parent()
        var containerDim = this.getPosition($container)

        placement = placement == 'bottom' && pos.bottom + actualHeight > containerDim.bottom ? 'top'    :
                    placement == 'top'    && pos.top    - actualHeight < containerDim.top    ? 'bottom' :
                    placement == 'right'  && pos.right  + actualWidth  > containerDim.width  ? 'left'   :
                    placement == 'left'   && pos.left   - actualWidth  < containerDim.left   ? 'right'  :
                    placement

        $tip
          .removeClass(orgPlacement)
          .addClass(placement)
      }

      var calculatedOffset = this.getCalculatedOffset(placement, pos, actualWidth, actualHeight)

      this.applyPlacement(calculatedOffset, placement)

      var complete = function () {
        var prevHoverState = that.hoverState
        that.$element.trigger('shown.bs.' + that.type)
        that.hoverState = null

        if (prevHoverState == 'out') that.leave(that)
      }

      $.support.transition && this.$tip.hasClass('fade') ?
        $tip
          .one('bsTransitionEnd', complete)
          .emulateTransitionEnd(Tooltip.TRANSITION_DURATION) :
        complete()
    }
  }

  Tooltip.prototype.applyPlacement = function (offset, placement) {
    var $tip   = this.tip()
    var width  = $tip[0].offsetWidth
    var height = $tip[0].offsetHeight

    // manually read margins because getBoundingClientRect includes difference
    var marginTop = parseInt($tip.css('margin-top'), 10)
    var marginLeft = parseInt($tip.css('margin-left'), 10)

    // we must check for NaN for ie 8/9
    if (isNaN(marginTop))  marginTop  = 0
    if (isNaN(marginLeft)) marginLeft = 0

    offset.top  = offset.top  + marginTop
    offset.left = offset.left + marginLeft

    // $.fn.offset doesn't round pixel values
    // so we use setOffset directly with our own function B-0
    $.offset.setOffset($tip[0], $.extend({
      using: function (props) {
        $tip.css({
          top: Math.round(props.top),
          left: Math.round(props.left)
        })
      }
    }, offset), 0)

    $tip.addClass('in')

    // check to see if placing tip in new offset caused the tip to resize itself
    var actualWidth  = $tip[0].offsetWidth
    var actualHeight = $tip[0].offsetHeight

    if (placement == 'top' && actualHeight != height) {
      offset.top = offset.top + height - actualHeight
    }

    var delta = this.getViewportAdjustedDelta(placement, offset, actualWidth, actualHeight)

    if (delta.left) offset.left += delta.left
    else offset.top += delta.top

    var isVertical          = /top|bottom/.test(placement)
    var arrowDelta          = isVertical ? delta.left * 2 - width + actualWidth : delta.top * 2 - height + actualHeight
    var arrowOffsetPosition = isVertical ? 'offsetWidth' : 'offsetHeight'

    $tip.offset(offset)
    this.replaceArrow(arrowDelta, $tip[0][arrowOffsetPosition], isVertical)
  }

  Tooltip.prototype.replaceArrow = function (delta, dimension, isVertical) {
    this.arrow()
      .css(isVertical ? 'left' : 'top', 50 * (1 - delta / dimension) + '%')
      .css(isVertical ? 'top' : 'left', '')
  }

  Tooltip.prototype.setContent = function () {
    var $tip  = this.tip()
    var title = this.getTitle()

    $tip.find('.tooltip-inner')[this.options.html ? 'html' : 'text'](title)
    $tip.removeClass('fade in top bottom left right')
  }

  Tooltip.prototype.hide = function (callback) {
    var that = this
    var $tip = $(this.$tip)
    var e    = $.Event('hide.bs.' + this.type)

    function complete() {
      if (that.hoverState != 'in') $tip.detach()
      that.$element
        .removeAttr('aria-describedby')
        .trigger('hidden.bs.' + that.type)
      callback && callback()
    }

    this.$element.trigger(e)

    if (e.isDefaultPrevented()) return

    $tip.removeClass('in')

    $.support.transition && $tip.hasClass('fade') ?
      $tip
        .one('bsTransitionEnd', complete)
        .emulateTransitionEnd(Tooltip.TRANSITION_DURATION) :
      complete()

    this.hoverState = null

    return this
  }

  Tooltip.prototype.fixTitle = function () {
    var $e = this.$element
    if ($e.attr('title') || typeof ($e.attr('data-original-title')) != 'string') {
      $e.attr('data-original-title', $e.attr('title') || '').attr('title', '')
    }
  }

  Tooltip.prototype.hasContent = function () {
    return this.getTitle()
  }

  Tooltip.prototype.getPosition = function ($element) {
    $element   = $element || this.$element

    var el     = $element[0]
    var isBody = el.tagName == 'BODY'

    var elRect    = el.getBoundingClientRect()
    if (elRect.width == null) {
      // width and height are missing in IE8, so compute them manually; see https://github.com/twbs/bootstrap/issues/14093
      elRect = $.extend({}, elRect, { width: elRect.right - elRect.left, height: elRect.bottom - elRect.top })
    }
    var elOffset  = isBody ? { top: 0, left: 0 } : $element.offset()
    var scroll    = { scroll: isBody ? document.documentElement.scrollTop || document.body.scrollTop : $element.scrollTop() }
    var outerDims = isBody ? { width: $(window).width(), height: $(window).height() } : null

    return $.extend({}, elRect, scroll, outerDims, elOffset)
  }

  Tooltip.prototype.getCalculatedOffset = function (placement, pos, actualWidth, actualHeight) {
    return placement == 'bottom' ? { top: pos.top + pos.height,   left: pos.left + pos.width / 2 - actualWidth / 2 } :
           placement == 'top'    ? { top: pos.top - actualHeight, left: pos.left + pos.width / 2 - actualWidth / 2 } :
           placement == 'left'   ? { top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left - actualWidth } :
        /* placement == 'right' */ { top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left + pos.width }

  }

  Tooltip.prototype.getViewportAdjustedDelta = function (placement, pos, actualWidth, actualHeight) {
    var delta = { top: 0, left: 0 }
    if (!this.$viewport) return delta

    var viewportPadding = this.options.viewport && this.options.viewport.padding || 0
    var viewportDimensions = this.getPosition(this.$viewport)

    if (/right|left/.test(placement)) {
      var topEdgeOffset    = pos.top - viewportPadding - viewportDimensions.scroll
      var bottomEdgeOffset = pos.top + viewportPadding - viewportDimensions.scroll + actualHeight
      if (topEdgeOffset < viewportDimensions.top) { // top overflow
        delta.top = viewportDimensions.top - topEdgeOffset
      } else if (bottomEdgeOffset > viewportDimensions.top + viewportDimensions.height) { // bottom overflow
        delta.top = viewportDimensions.top + viewportDimensions.height - bottomEdgeOffset
      }
    } else {
      var leftEdgeOffset  = pos.left - viewportPadding
      var rightEdgeOffset = pos.left + viewportPadding + actualWidth
      if (leftEdgeOffset < viewportDimensions.left) { // left overflow
        delta.left = viewportDimensions.left - leftEdgeOffset
      } else if (rightEdgeOffset > viewportDimensions.width) { // right overflow
        delta.left = viewportDimensions.left + viewportDimensions.width - rightEdgeOffset
      }
    }

    return delta
  }

  Tooltip.prototype.getTitle = function () {
    var title
    var $e = this.$element
    var o  = this.options

    title = $e.attr('data-original-title')
      || (typeof o.title == 'function' ? o.title.call($e[0]) :  o.title)

    return title
  }

  Tooltip.prototype.getUID = function (prefix) {
    do prefix += ~~(Math.random() * 1000000)
    while (document.getElementById(prefix))
    return prefix
  }

  Tooltip.prototype.tip = function () {
    return (this.$tip = this.$tip || $(this.options.template))
  }

  Tooltip.prototype.arrow = function () {
    return (this.$arrow = this.$arrow || this.tip().find('.tooltip-arrow'))
  }

  Tooltip.prototype.enable = function () {
    this.enabled = true
  }

  Tooltip.prototype.disable = function () {
    this.enabled = false
  }

  Tooltip.prototype.toggleEnabled = function () {
    this.enabled = !this.enabled
  }

  Tooltip.prototype.toggle = function (e) {
    var self = this
    if (e) {
      self = $(e.currentTarget).data('bs.' + this.type)
      if (!self) {
        self = new this.constructor(e.currentTarget, this.getDelegateOptions())
        $(e.currentTarget).data('bs.' + this.type, self)
      }
    }

    self.tip().hasClass('in') ? self.leave(self) : self.enter(self)
  }

  Tooltip.prototype.destroy = function () {
    var that = this
    clearTimeout(this.timeout)
    this.hide(function () {
      that.$element.off('.' + that.type).removeData('bs.' + that.type)
    })
  }


  // TOOLTIP PLUGIN DEFINITION
  // =========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.tooltip')
      var options = typeof option == 'object' && option

      if (!data && /destroy|hide/.test(option)) return
      if (!data) $this.data('bs.tooltip', (data = new Tooltip(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.tooltip

  $.fn.tooltip             = Plugin
  $.fn.tooltip.Constructor = Tooltip


  // TOOLTIP NO CONFLICT
  // ===================

  $.fn.tooltip.noConflict = function () {
    $.fn.tooltip = old
    return this
  }

}(jQuery);

/* ========================================================================
 * Bootstrap: popover.js v3.3.4
 * http://getbootstrap.com/javascript/#popovers
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // POPOVER PUBLIC CLASS DEFINITION
  // ===============================

  var Popover = function (element, options) {
    this.init('popover', element, options)
  }

  if (!$.fn.tooltip) throw new Error('Popover requires tooltip.js')

  Popover.VERSION  = '3.3.4'

  Popover.DEFAULTS = $.extend({}, $.fn.tooltip.Constructor.DEFAULTS, {
    placement: 'right',
    trigger: 'click',
    content: '',
    template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
  })


  // NOTE: POPOVER EXTENDS tooltip.js
  // ================================

  Popover.prototype = $.extend({}, $.fn.tooltip.Constructor.prototype)

  Popover.prototype.constructor = Popover

  Popover.prototype.getDefaults = function () {
    return Popover.DEFAULTS
  }

  Popover.prototype.setContent = function () {
    var $tip    = this.tip()
    var title   = this.getTitle()
    var content = this.getContent()

    $tip.find('.popover-title')[this.options.html ? 'html' : 'text'](title)
    $tip.find('.popover-content').children().detach().end()[ // we use append for html objects to maintain js events
      this.options.html ? (typeof content == 'string' ? 'html' : 'append') : 'text'
    ](content)

    $tip.removeClass('fade top bottom left right in')

    // IE8 doesn't accept hiding via the `:empty` pseudo selector, we have to do
    // this manually by checking the contents.
    if (!$tip.find('.popover-title').html()) $tip.find('.popover-title').hide()
  }

  Popover.prototype.hasContent = function () {
    return this.getTitle() || this.getContent()
  }

  Popover.prototype.getContent = function () {
    var $e = this.$element
    var o  = this.options

    return $e.attr('data-content')
      || (typeof o.content == 'function' ?
            o.content.call($e[0]) :
            o.content)
  }

  Popover.prototype.arrow = function () {
    return (this.$arrow = this.$arrow || this.tip().find('.arrow'))
  }


  // POPOVER PLUGIN DEFINITION
  // =========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.popover')
      var options = typeof option == 'object' && option

      if (!data && /destroy|hide/.test(option)) return
      if (!data) $this.data('bs.popover', (data = new Popover(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.popover

  $.fn.popover             = Plugin
  $.fn.popover.Constructor = Popover


  // POPOVER NO CONFLICT
  // ===================

  $.fn.popover.noConflict = function () {
    $.fn.popover = old
    return this
  }

}(jQuery);

/* ========================================================================
 * Bootstrap: scrollspy.js v3.3.4
 * http://getbootstrap.com/javascript/#scrollspy
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // SCROLLSPY CLASS DEFINITION
  // ==========================

  function ScrollSpy(element, options) {
    this.$body          = $(document.body)
    this.$scrollElement = $(element).is(document.body) ? $(window) : $(element)
    this.options        = $.extend({}, ScrollSpy.DEFAULTS, options)
    this.selector       = (this.options.target || '') + ' .nav li > a'
    this.offsets        = []
    this.targets        = []
    this.activeTarget   = null
    this.scrollHeight   = 0

    this.$scrollElement.on('scroll.bs.scrollspy', $.proxy(this.process, this))
    this.refresh()
    this.process()
  }

  ScrollSpy.VERSION  = '3.3.4'

  ScrollSpy.DEFAULTS = {
    offset: 10
  }

  ScrollSpy.prototype.getScrollHeight = function () {
    return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
  }

  ScrollSpy.prototype.refresh = function () {
    var that          = this
    var offsetMethod  = 'offset'
    var offsetBase    = 0

    this.offsets      = []
    this.targets      = []
    this.scrollHeight = this.getScrollHeight()

    if (!$.isWindow(this.$scrollElement[0])) {
      offsetMethod = 'position'
      offsetBase   = this.$scrollElement.scrollTop()
    }

    this.$body
      .find(this.selector)
      .map(function () {
        var $el   = $(this)
        var href  = $el.data('target') || $el.attr('href')
        var $href = /^#./.test(href) && $(href)

        return ($href
          && $href.length
          && $href.is(':visible')
          && [[$href[offsetMethod]().top + offsetBase, href]]) || null
      })
      .sort(function (a, b) { return a[0] - b[0] })
      .each(function () {
        that.offsets.push(this[0])
        that.targets.push(this[1])
      })
  }

  ScrollSpy.prototype.process = function () {
    var scrollTop    = this.$scrollElement.scrollTop() + this.options.offset
    var scrollHeight = this.getScrollHeight()
    var maxScroll    = this.options.offset + scrollHeight - this.$scrollElement.height()
    var offsets      = this.offsets
    var targets      = this.targets
    var activeTarget = this.activeTarget
    var i

    if (this.scrollHeight != scrollHeight) {
      this.refresh()
    }

    if (scrollTop >= maxScroll) {
      return activeTarget != (i = targets[targets.length - 1]) && this.activate(i)
    }

    if (activeTarget && scrollTop < offsets[0]) {
      this.activeTarget = null
      return this.clear()
    }

    for (i = offsets.length; i--;) {
      activeTarget != targets[i]
        && scrollTop >= offsets[i]
        && (offsets[i + 1] === undefined || scrollTop < offsets[i + 1])
        && this.activate(targets[i])
    }
  }

  ScrollSpy.prototype.activate = function (target) {
    this.activeTarget = target

    this.clear()

    var selector = this.selector +
      '[data-target="' + target + '"],' +
      this.selector + '[href="' + target + '"]'

    var active = $(selector)
      .parents('li')
      .addClass('active')

    if (active.parent('.dropdown-menu').length) {
      active = active
        .closest('li.dropdown')
        .addClass('active')
    }

    active.trigger('activate.bs.scrollspy')
  }

  ScrollSpy.prototype.clear = function () {
    $(this.selector)
      .parentsUntil(this.options.target, '.active')
      .removeClass('active')
  }


  // SCROLLSPY PLUGIN DEFINITION
  // ===========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.scrollspy')
      var options = typeof option == 'object' && option

      if (!data) $this.data('bs.scrollspy', (data = new ScrollSpy(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.scrollspy

  $.fn.scrollspy             = Plugin
  $.fn.scrollspy.Constructor = ScrollSpy


  // SCROLLSPY NO CONFLICT
  // =====================

  $.fn.scrollspy.noConflict = function () {
    $.fn.scrollspy = old
    return this
  }


  // SCROLLSPY DATA-API
  // ==================

  $(window).on('load.bs.scrollspy.data-api', function () {
    $('[data-spy="scroll"]').each(function () {
      var $spy = $(this)
      Plugin.call($spy, $spy.data())
    })
  })

}(jQuery);

/* ========================================================================
 * Bootstrap: tab.js v3.3.4
 * http://getbootstrap.com/javascript/#tabs
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // TAB CLASS DEFINITION
  // ====================

  var Tab = function (element) {
    this.element = $(element)
  }

  Tab.VERSION = '3.3.4'

  Tab.TRANSITION_DURATION = 150

  Tab.prototype.show = function () {
    var $this    = this.element
    var $ul      = $this.closest('ul:not(.dropdown-menu)')
    var selector = $this.data('target')

    if (!selector) {
      selector = $this.attr('href')
      selector = selector && selector.replace(/.*(?=#[^\s]*$)/, '') // strip for ie7
    }

    if ($this.parent('li').hasClass('active')) return

    var $previous = $ul.find('.active:last a')
    var hideEvent = $.Event('hide.bs.tab', {
      relatedTarget: $this[0]
    })
    var showEvent = $.Event('show.bs.tab', {
      relatedTarget: $previous[0]
    })

    $previous.trigger(hideEvent)
    $this.trigger(showEvent)

    if (showEvent.isDefaultPrevented() || hideEvent.isDefaultPrevented()) return

    var $target = $(selector)

    this.activate($this.closest('li'), $ul)
    this.activate($target, $target.parent(), function () {
      $previous.trigger({
        type: 'hidden.bs.tab',
        relatedTarget: $this[0]
      })
      $this.trigger({
        type: 'shown.bs.tab',
        relatedTarget: $previous[0]
      })
    })
  }

  Tab.prototype.activate = function (element, container, callback) {
    var $active    = container.find('> .active')
    var transition = callback
      && $.support.transition
      && (($active.length && $active.hasClass('fade')) || !!container.find('> .fade').length)

    function next() {
      $active
        .removeClass('active')
        .find('> .dropdown-menu > .active')
          .removeClass('active')
        .end()
        .find('[data-toggle="tab"]')
          .attr('aria-expanded', false)

      element
        .addClass('active')
        .find('[data-toggle="tab"]')
          .attr('aria-expanded', true)

      if (transition) {
        element[0].offsetWidth // reflow for transition
        element.addClass('in')
      } else {
        element.removeClass('fade')
      }

      if (element.parent('.dropdown-menu').length) {
        element
          .closest('li.dropdown')
            .addClass('active')
          .end()
          .find('[data-toggle="tab"]')
            .attr('aria-expanded', true)
      }

      callback && callback()
    }

    $active.length && transition ?
      $active
        .one('bsTransitionEnd', next)
        .emulateTransitionEnd(Tab.TRANSITION_DURATION) :
      next()

    $active.removeClass('in')
  }


  // TAB PLUGIN DEFINITION
  // =====================

  function Plugin(option) {
    return this.each(function () {
      var $this = $(this)
      var data  = $this.data('bs.tab')

      if (!data) $this.data('bs.tab', (data = new Tab(this)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.tab

  $.fn.tab             = Plugin
  $.fn.tab.Constructor = Tab


  // TAB NO CONFLICT
  // ===============

  $.fn.tab.noConflict = function () {
    $.fn.tab = old
    return this
  }


  // TAB DATA-API
  // ============

  var clickHandler = function (e) {
    e.preventDefault()
    Plugin.call($(this), 'show')
  }

  $(document)
    .on('click.bs.tab.data-api', '[data-toggle="tab"]', clickHandler)
    .on('click.bs.tab.data-api', '[data-toggle="pill"]', clickHandler)

}(jQuery);

/* ========================================================================
 * Bootstrap: affix.js v3.3.4
 * http://getbootstrap.com/javascript/#affix
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // AFFIX CLASS DEFINITION
  // ======================

  var Affix = function (element, options) {
    this.options = $.extend({}, Affix.DEFAULTS, options)

    this.$target = $(this.options.target)
      .on('scroll.bs.affix.data-api', $.proxy(this.checkPosition, this))
      .on('click.bs.affix.data-api',  $.proxy(this.checkPositionWithEventLoop, this))

    this.$element     = $(element)
    this.affixed      = null
    this.unpin        = null
    this.pinnedOffset = null

    this.checkPosition()
  }

  Affix.VERSION  = '3.3.4'

  Affix.RESET    = 'affix affix-top affix-bottom'

  Affix.DEFAULTS = {
    offset: 0,
    target: window
  }

  Affix.prototype.getState = function (scrollHeight, height, offsetTop, offsetBottom) {
    var scrollTop    = this.$target.scrollTop()
    var position     = this.$element.offset()
    var targetHeight = this.$target.height()

    if (offsetTop != null && this.affixed == 'top') return scrollTop < offsetTop ? 'top' : false

    if (this.affixed == 'bottom') {
      if (offsetTop != null) return (scrollTop + this.unpin <= position.top) ? false : 'bottom'
      return (scrollTop + targetHeight <= scrollHeight - offsetBottom) ? false : 'bottom'
    }

    var initializing   = this.affixed == null
    var colliderTop    = initializing ? scrollTop : position.top
    var colliderHeight = initializing ? targetHeight : height

    if (offsetTop != null && scrollTop <= offsetTop) return 'top'
    if (offsetBottom != null && (colliderTop + colliderHeight >= scrollHeight - offsetBottom)) return 'bottom'

    return false
  }

  Affix.prototype.getPinnedOffset = function () {
    if (this.pinnedOffset) return this.pinnedOffset
    this.$element.removeClass(Affix.RESET).addClass('affix')
    var scrollTop = this.$target.scrollTop()
    var position  = this.$element.offset()
    return (this.pinnedOffset = position.top - scrollTop)
  }

  Affix.prototype.checkPositionWithEventLoop = function () {
    setTimeout($.proxy(this.checkPosition, this), 1)
  }

  Affix.prototype.checkPosition = function () {
    if (!this.$element.is(':visible')) return

    var height       = this.$element.height()
    var offset       = this.options.offset
    var offsetTop    = offset.top
    var offsetBottom = offset.bottom
    var scrollHeight = $(document.body).height()

    if (typeof offset != 'object')         offsetBottom = offsetTop = offset
    if (typeof offsetTop == 'function')    offsetTop    = offset.top(this.$element)
    if (typeof offsetBottom == 'function') offsetBottom = offset.bottom(this.$element)

    var affix = this.getState(scrollHeight, height, offsetTop, offsetBottom)

    if (this.affixed != affix) {
      if (this.unpin != null) this.$element.css('top', '')

      var affixType = 'affix' + (affix ? '-' + affix : '')
      var e         = $.Event(affixType + '.bs.affix')

      this.$element.trigger(e)

      if (e.isDefaultPrevented()) return

      this.affixed = affix
      this.unpin = affix == 'bottom' ? this.getPinnedOffset() : null

      this.$element
        .removeClass(Affix.RESET)
        .addClass(affixType)
        .trigger(affixType.replace('affix', 'affixed') + '.bs.affix')
    }

    if (affix == 'bottom') {
      this.$element.offset({
        top: scrollHeight - height - offsetBottom
      })
    }
  }


  // AFFIX PLUGIN DEFINITION
  // =======================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.affix')
      var options = typeof option == 'object' && option

      if (!data) $this.data('bs.affix', (data = new Affix(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.affix

  $.fn.affix             = Plugin
  $.fn.affix.Constructor = Affix


  // AFFIX NO CONFLICT
  // =================

  $.fn.affix.noConflict = function () {
    $.fn.affix = old
    return this
  }


  // AFFIX DATA-API
  // ==============

  $(window).on('load', function () {
    $('[data-spy="affix"]').each(function () {
      var $spy = $(this)
      var data = $spy.data()

      data.offset = data.offset || {}

      if (data.offsetBottom != null) data.offset.bottom = data.offsetBottom
      if (data.offsetTop    != null) data.offset.top    = data.offsetTop

      Plugin.call($spy, data)
    })
  })

}(jQuery);

!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):"object"==typeof module&&"object"==typeof module.exports?module.exports=a(require("jquery")):a(jQuery)}(function(a){return function(a){"use strict";var b=a.tablesorter={version:"2.26.2",parsers:[],widgets:[],defaults:{theme:"default",widthFixed:!1,showProcessing:!1,headerTemplate:"{content}",onRenderTemplate:null,onRenderHeader:null,cancelSelection:!0,tabIndex:!0,dateFormat:"mmddyyyy",sortMultiSortKey:"shiftKey",sortResetKey:"ctrlKey",usNumberFormat:!0,delayInit:!1,serverSideSorting:!1,resort:!0,headers:{},ignoreCase:!0,sortForce:null,sortList:[],sortAppend:null,sortStable:!1,sortInitialOrder:"asc",sortLocaleCompare:!1,sortReset:!1,sortRestart:!1,emptyTo:"bottom",stringTo:"max",duplicateSpan:!0,textExtraction:"basic",textAttribute:"data-text",textSorter:null,numberSorter:null,initWidgets:!0,widgetClass:"widget-{name}",widgets:[],widgetOptions:{zebra:["even","odd"]},initialized:null,tableClass:"",cssAsc:"",cssDesc:"",cssNone:"",cssHeader:"",cssHeaderRow:"",cssProcessing:"",cssChildRow:"tablesorter-childRow",cssInfoBlock:"tablesorter-infoOnly",cssNoSort:"tablesorter-noSort",cssIgnoreRow:"tablesorter-ignoreRow",cssIcon:"tablesorter-icon",cssIconNone:"",cssIconAsc:"",cssIconDesc:"",pointerClick:"click",pointerDown:"mousedown",pointerUp:"mouseup",selectorHeaders:"> thead th, > thead td",selectorSort:"th, td",selectorRemove:".remove-me",debug:!1,headerList:[],empties:{},strings:{},parsers:[]},css:{table:"tablesorter",cssHasChild:"tablesorter-hasChildRow",childRow:"tablesorter-childRow",colgroup:"tablesorter-colgroup",header:"tablesorter-header",headerRow:"tablesorter-headerRow",headerIn:"tablesorter-header-inner",icon:"tablesorter-icon",processing:"tablesorter-processing",sortAsc:"tablesorter-headerAsc",sortDesc:"tablesorter-headerDesc",sortNone:"tablesorter-headerUnSorted"},language:{sortAsc:"Ascending sort applied, ",sortDesc:"Descending sort applied, ",sortNone:"No sort applied, ",sortDisabled:"sorting is disabled",nextAsc:"activate to apply an ascending sort",nextDesc:"activate to apply a descending sort",nextNone:"activate to remove the sort"},regex:{templateContent:/\{content\}/g,templateIcon:/\{icon\}/g,templateName:/\{name\}/i,spaces:/\s+/g,nonWord:/\W/g,formElements:/(input|select|button|textarea)/i,chunk:/(^([+\-]?(?:\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?)?$|^0x[0-9a-f]+$|\d+)/gi,chunks:/(^\\0|\\0$)/,hex:/^0x[0-9a-f]+$/i,comma:/,/g,digitNonUS:/[\s|\.]/g,digitNegativeTest:/^\s*\([.\d]+\)/,digitNegativeReplace:/^\s*\(([.\d]+)\)/,digitTest:/^[\-+(]?\d+[)]?$/,digitReplace:/[,.'"\s]/g},string:{max:1,min:-1,emptymin:1,emptymax:-1,zero:0,none:0,"null":0,top:!0,bottom:!1},keyCodes:{enter:13},dates:{},instanceMethods:{},setup:function(c,d){if(!c||!c.tHead||0===c.tBodies.length||c.hasInitialized===!0)return void(d.debug&&(c.hasInitialized?console.warn("Stopping initialization. Tablesorter has already been initialized"):console.error("Stopping initialization! No table, thead or tbody",c)));var e="",f=a(c),g=a.metadata;c.hasInitialized=!1,c.isProcessing=!0,c.config=d,a.data(c,"tablesorter",d),d.debug&&(console[console.group?"group":"log"]("Initializing tablesorter"),a.data(c,"startoveralltimer",new Date)),d.supportsDataObject=function(a){return a[0]=parseInt(a[0],10),a[0]>1||1===a[0]&&parseInt(a[1],10)>=4}(a.fn.jquery.split(".")),d.emptyTo=d.emptyTo.toLowerCase(),d.stringTo=d.stringTo.toLowerCase(),d.last={sortList:[],clickedIndex:-1},/tablesorter\-/.test(f.attr("class"))||(e=""!==d.theme?" tablesorter-"+d.theme:""),d.table=c,d.$table=f.addClass(b.css.table+" "+d.tableClass+e).attr("role","grid"),d.$headers=f.find(d.selectorHeaders),d.namespace?d.namespace="."+d.namespace.replace(b.regex.nonWord,""):d.namespace=".tablesorter"+Math.random().toString(16).slice(2),d.$table.children().children("tr").attr("role","row"),d.$tbodies=f.children("tbody:not(."+d.cssInfoBlock+")").attr({"aria-live":"polite","aria-relevant":"all"}),d.$table.children("caption").length&&(e=d.$table.children("caption")[0],e.id||(e.id=d.namespace.slice(1)+"caption"),d.$table.attr("aria-labelledby",e.id)),d.widgetInit={},d.textExtraction=d.$table.attr("data-text-extraction")||d.textExtraction||"basic",b.buildHeaders(d),b.fixColumnWidth(c),b.addWidgetFromClass(c),b.applyWidgetOptions(c),b.setupParsers(d),d.totalRows=0,d.delayInit||b.buildCache(d),b.bindEvents(c,d.$headers,!0),b.bindMethods(d),d.supportsDataObject&&"undefined"!=typeof f.data().sortlist?d.sortList=f.data().sortlist:g&&f.metadata()&&f.metadata().sortlist&&(d.sortList=f.metadata().sortlist),b.applyWidget(c,!0),d.sortList.length>0?b.sortOn(d,d.sortList,{},!d.initWidgets):(b.setHeadersCss(d),d.initWidgets&&b.applyWidget(c,!1)),d.showProcessing&&f.unbind("sortBegin"+d.namespace+" sortEnd"+d.namespace).bind("sortBegin"+d.namespace+" sortEnd"+d.namespace,function(a){clearTimeout(d.timerProcessing),b.isProcessing(c),"sortBegin"===a.type&&(d.timerProcessing=setTimeout(function(){b.isProcessing(c,!0)},500))}),c.hasInitialized=!0,c.isProcessing=!1,d.debug&&(console.log("Overall initialization time: "+b.benchmark(a.data(c,"startoveralltimer"))),d.debug&&console.groupEnd&&console.groupEnd()),f.triggerHandler("tablesorter-initialized",c),"function"==typeof d.initialized&&d.initialized(c)},bindMethods:function(c){var d=c.$table,e=c.namespace,f="sortReset update updateRows updateAll updateHeaders addRows updateCell updateComplete sorton appendCache updateCache applyWidgetId applyWidgets refreshWidgets destroy mouseup mouseleave ".split(" ").join(e+" ");d.unbind(f.replace(b.regex.spaces," ")).bind("sortReset"+e,function(a,c){a.stopPropagation(),b.sortReset(this.config,c)}).bind("updateAll"+e,function(a,c,d){a.stopPropagation(),b.updateAll(this.config,c,d)}).bind("update"+e+" updateRows"+e,function(a,c,d){a.stopPropagation(),b.update(this.config,c,d)}).bind("updateHeaders"+e,function(a,c){a.stopPropagation(),b.updateHeaders(this.config,c)}).bind("updateCell"+e,function(a,c,d,e){a.stopPropagation(),b.updateCell(this.config,c,d,e)}).bind("addRows"+e,function(a,c,d,e){a.stopPropagation(),b.addRows(this.config,c,d,e)}).bind("updateComplete"+e,function(){this.isUpdating=!1}).bind("sorton"+e,function(a,c,d,e){a.stopPropagation(),b.sortOn(this.config,c,d,e)}).bind("appendCache"+e,function(c,d,e){c.stopPropagation(),b.appendCache(this.config,e),a.isFunction(d)&&d(this)}).bind("updateCache"+e,function(a,c,d){a.stopPropagation(),b.updateCache(this.config,c,d)}).bind("applyWidgetId"+e,function(a,c){a.stopPropagation(),b.applyWidgetId(this,c)}).bind("applyWidgets"+e,function(a,c){a.stopPropagation(),b.applyWidget(this,c)}).bind("refreshWidgets"+e,function(a,c,d){a.stopPropagation(),b.refreshWidgets(this,c,d)}).bind("removeWidget"+e,function(a,c,d){a.stopPropagation(),b.removeWidget(this,c,d)}).bind("destroy"+e,function(a,c,d){a.stopPropagation(),b.destroy(this,c,d)}).bind("resetToLoadState"+e,function(d){d.stopPropagation(),b.removeWidget(this,!0,!1),c=a.extend(!0,b.defaults,c.originalSettings),this.hasInitialized=!1,b.setup(this,c)})},bindEvents:function(c,d,e){c=a(c)[0];var f,g=c.config,h=g.namespace,i=null;e!==!0&&(d.addClass(h.slice(1)+"_extra_headers"),f=a.fn.closest?d.closest("table")[0]:d.parents("table")[0],f&&"TABLE"===f.nodeName&&f!==c&&a(f).addClass(h.slice(1)+"_extra_table")),f=(g.pointerDown+" "+g.pointerUp+" "+g.pointerClick+" sort keyup ").replace(b.regex.spaces," ").split(" ").join(h+" "),d.find(g.selectorSort).add(d.filter(g.selectorSort)).unbind(f).bind(f,function(c,e){var f,h,j,k=a(c.target),l=" "+c.type+" ";if(!(1!==(c.which||c.button)&&!l.match(" "+g.pointerClick+" | sort | keyup ")||" keyup "===l&&c.which!==b.keyCodes.enter||l.match(" "+g.pointerClick+" ")&&"undefined"!=typeof c.which||l.match(" "+g.pointerUp+" ")&&i!==c.target&&e!==!0)){if(l.match(" "+g.pointerDown+" "))return i=c.target,j=k.jquery.split("."),void("1"===j[0]&&j[1]<4&&c.preventDefault());if(i=null,b.regex.formElements.test(c.target.nodeName)||k.hasClass(g.cssNoSort)||k.parents("."+g.cssNoSort).length>0||k.parents("button").length>0)return!g.cancelSelection;g.delayInit&&b.isEmptyObject(g.cache)&&b.buildCache(g),f=a.fn.closest?a(this).closest("th, td"):/TH|TD/.test(this.nodeName)?a(this):a(this).parents("th, td"),j=d.index(f),g.last.clickedIndex=0>j?f.attr("data-column"):j,h=g.$headers[g.last.clickedIndex],h&&!h.sortDisabled&&b.initSort(g,h,c)}}),g.cancelSelection&&d.attr("unselectable","on").bind("selectstart",!1).css({"user-select":"none",MozUserSelect:"none"})},buildHeaders:function(c){var d,e,f,g;for(c.headerList=[],c.headerContent=[],c.sortVars=[],c.debug&&(f=new Date),c.columns=b.computeColumnIndex(c.$table.children("thead, tfoot").children("tr")),e=c.cssIcon?'<i class="'+(c.cssIcon===b.css.icon?b.css.icon:c.cssIcon+" "+b.css.icon)+'"></i>':"",c.$headers=a(a.map(c.$table.find(c.selectorHeaders),function(d,f){var g,h,i,j,k,l=a(d);if(!l.parent().hasClass(c.cssIgnoreRow))return g=b.getColumnData(c.table,c.headers,f,!0),c.headerContent[f]=l.html(),""===c.headerTemplate||l.find("."+b.css.headerIn).length||(j=c.headerTemplate.replace(b.regex.templateContent,l.html()).replace(b.regex.templateIcon,l.find("."+b.css.icon).length?"":e),c.onRenderTemplate&&(h=c.onRenderTemplate.apply(l,[f,j]),h&&"string"==typeof h&&(j=h)),l.html('<div class="'+b.css.headerIn+'">'+j+"</div>")),c.onRenderHeader&&c.onRenderHeader.apply(l,[f,c,c.$table]),i=parseInt(l.attr("data-column"),10),d.column=i,k=b.getData(l,g,"sortInitialOrder")||c.sortInitialOrder,c.sortVars[i]={count:-1,order:b.getOrder(k)?[1,0,2]:[0,1,2],lockedOrder:!1},k=b.getData(l,g,"lockedOrder")||!1,"undefined"!=typeof k&&k!==!1&&(c.sortVars[i].lockedOrder=!0,c.sortVars[i].order=b.getOrder(k)?[1,1,1]:[0,0,0]),c.headerList[f]=d,l.addClass(b.css.header+" "+c.cssHeader).parent().addClass(b.css.headerRow+" "+c.cssHeaderRow).attr("role","row"),c.tabIndex&&l.attr("tabindex",0),d})),c.$headerIndexed=[],g=0;g<c.columns;g++)b.isEmptyObject(c.sortVars[g])&&(c.sortVars[g]={}),d=c.$headers.filter('[data-column="'+g+'"]'),c.$headerIndexed[g]=d.length?d.not(".sorter-false").length?d.not(".sorter-false").filter(":last"):d.filter(":last"):a();c.$table.find(c.selectorHeaders).attr({scope:"col",role:"columnheader"}),b.updateHeader(c),c.debug&&(console.log("Built headers:"+b.benchmark(f)),console.log(c.$headers))},addInstanceMethods:function(c){a.extend(b.instanceMethods,c)},setupParsers:function(a,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r=a.table,s=0,t={};if(a.$tbodies=a.$table.children("tbody:not(."+a.cssInfoBlock+")"),p="undefined"==typeof c?a.$tbodies:c,q=p.length,0===q)return a.debug?console.warn("Warning: *Empty table!* Not building a parser cache"):"";for(a.debug&&(o=new Date,console[console.group?"group":"log"]("Detecting parsers for each column")),e={extractors:[],parsers:[]};q>s;){if(d=p[s].rows,d.length)for(h=0,g=a.columns,i=0;g>i;i++){if(j=a.$headerIndexed[h],j&&j.length&&(k=b.getColumnData(r,a.headers,h),n=b.getParserById(b.getData(j,k,"extractor")),m=b.getParserById(b.getData(j,k,"sorter")),l="false"===b.getData(j,k,"parser"),a.empties[h]=(b.getData(j,k,"empty")||a.emptyTo||(a.emptyToBottom?"bottom":"top")).toLowerCase(),a.strings[h]=(b.getData(j,k,"string")||a.stringTo||"max").toLowerCase(),l&&(m=b.getParserById("no-parser")),n||(n=!1),m||(m=b.detectParserForColumn(a,d,-1,h)),a.debug&&(t["("+h+") "+j.text()]={parser:m.id,extractor:n?n.id:"none",string:a.strings[h],empty:a.empties[h]}),e.parsers[h]=m,e.extractors[h]=n,f=j[0].colSpan-1,f>0))for(h+=f,g+=f;f+1>0;)e.parsers[h-f]=m,e.extractors[h-f]=n,f--;h++}s+=e.parsers.length?q:1}a.debug&&(b.isEmptyObject(t)?console.warn("  No parsers detected!"):console[console.table?"table":"log"](t),console.log("Completed detecting parsers"+b.benchmark(o)),console.groupEnd&&console.groupEnd()),a.parsers=e.parsers,a.extractors=e.extractors},addParser:function(a){var c,d=b.parsers.length,e=!0;for(c=0;d>c;c++)b.parsers[c].id.toLowerCase()===a.id.toLowerCase()&&(e=!1);e&&(b.parsers[b.parsers.length]=a)},getParserById:function(a){if("false"==a)return!1;var c,d=b.parsers.length;for(c=0;d>c;c++)if(b.parsers[c].id.toLowerCase()===a.toString().toLowerCase())return b.parsers[c];return!1},detectParserForColumn:function(c,d,e,f){for(var g,h,i,j=b.parsers.length,k=!1,l="",m=!0;""===l&&m;)e++,i=d[e],i&&50>e?i.className.indexOf(b.cssIgnoreRow)<0&&(k=d[e].cells[f],l=b.getElementText(c,k,f),h=a(k),c.debug&&console.log("Checking if value was empty on row "+e+", column: "+f+': "'+l+'"')):m=!1;for(;--j>=0;)if(g=b.parsers[j],g&&"text"!==g.id&&g.is&&g.is(l,c.table,k,h))return g;return b.getParserById("text")},getElementText:function(c,d,e){if(!d)return"";var f,g=c.textExtraction||"",h=d.jquery?d:a(d);return"string"==typeof g?"basic"===g&&"undefined"!=typeof(f=h.attr(c.textAttribute))?a.trim(f):a.trim(d.textContent||h.text()):"function"==typeof g?a.trim(g(h[0],c.table,e)):"function"==typeof(f=b.getColumnData(c.table,g,e))?a.trim(f(h[0],c.table,e)):a.trim(h[0].textContent||h.text())},getParsedText:function(a,c,d,e){"undefined"==typeof e&&(e=b.getElementText(a,c,d));var f=""+e,g=a.parsers[d],h=a.extractors[d];return g&&(h&&"function"==typeof h.format&&(e=h.format(e,a.table,c,d)),f="no-parser"===g.id?"":g.format(""+e,a.table,c,d),a.ignoreCase&&"string"==typeof f&&(f=f.toLowerCase())),f},buildCache:function(c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B=c.table,C=c.parsers;if(c.$tbodies=c.$table.children("tbody:not(."+c.cssInfoBlock+")"),l="undefined"==typeof e?c.$tbodies:e,c.cache={},c.totalRows=0,!C)return c.debug?console.warn("Warning: *Empty table!* Not building a cache"):"";for(c.debug&&(q=new Date),c.showProcessing&&b.isProcessing(B,!0),k=0;k<l.length;k++){for(u=[],f=c.cache[k]={normalized:[]},r=l[k]&&l[k].rows.length||0,i=0;r>i;++i)if(s={child:[],raw:[]},m=a(l[k].rows[i]),n=[],m.hasClass(c.cssChildRow)&&0!==i)for(z=f.normalized.length-1,t=f.normalized[z][c.columns],t.$row=t.$row.add(m),m.prev().hasClass(c.cssChildRow)||m.prev().addClass(b.css.cssHasChild),o=m.children("th, td"),z=t.child.length,t.child[z]=[],w=0,y=c.columns,j=0;y>j;j++)p=o[j],p&&(t.child[z][j]=b.getParsedText(c,p,j),v=o[j].colSpan-1,v>0&&(w+=v,y+=v)),w++;else{for(s.$row=m,s.order=i,w=0,y=c.columns,j=0;y>j;++j){if(p=m[0].cells[j],p&&w<c.columns&&(x="undefined"!=typeof C[w],!x&&c.debug&&console.warn("No parser found for row: "+i+", column: "+j+'; cell containing: "'+a(p).text()+'"; does it have a header?'),g=b.getElementText(c,p,w),s.raw[w]=g,h=b.getParsedText(c,p,w,g),n[w]=h,x&&"numeric"===(C[w].type||"").toLowerCase()&&(u[w]=Math.max(Math.abs(h)||0,u[w]||0)),v=p.colSpan-1,v>0)){for(A=0;v>=A;)h=c.duplicateSpan||0===A?g:"string"!=typeof c.textExtraction?b.getElementText(c,p,w+A)||"":"",s.raw[w+A]=h,n[w+A]=h,A++;w+=v,y+=v}w++}n[c.columns]=s,f.normalized[f.normalized.length]=n}f.colMax=u,c.totalRows+=f.normalized.length}if(c.showProcessing&&b.isProcessing(B),c.debug){for(z=Math.min(5,c.cache[0].normalized.length),console[console.group?"group":"log"]("Building cache for "+c.totalRows+" rows (showing "+z+" rows in log)"+b.benchmark(q)),g={},j=0;j<c.columns;j++)for(w=0;z>w;w++)g["row: "+w]||(g["row: "+w]={}),g["row: "+w][c.$headerIndexed[j].text()]=c.cache[0].normalized[w][j];console[console.table?"table":"log"](g),console.groupEnd&&console.groupEnd()}a.isFunction(d)&&d(B)},getColumnText:function(c,d,e,f){c=a(c)[0];var g,h,i,j,k,l,m,n,o,p,q="function"==typeof e,r="all"===d,s={raw:[],parsed:[],$cell:[]},t=c.config;if(!b.isEmptyObject(t)){for(k=t.$tbodies.length,g=0;k>g;g++)for(i=t.cache[g].normalized,l=i.length,h=0;l>h;h++)j=i[h],f&&!j[t.columns].$row.is(f)||(p=!0,n=r?j.slice(0,t.columns):j[d],j=j[t.columns],m=r?j.raw:j.raw[d],o=r?j.$row.children():j.$row.children().eq(d),q&&(p=e({tbodyIndex:g,rowIndex:h,parsed:n,raw:m,$row:j.$row,$cell:o})),p!==!1&&(s.parsed[s.parsed.length]=n,s.raw[s.raw.length]=m,s.$cell[s.$cell.length]=o));return s}t.debug&&console.warn("No cache found - aborting getColumnText function!")},setHeadersCss:function(c){var d,e,f,g=c.sortList,h=g.length,i=b.css.sortNone+" "+c.cssNone,j=[b.css.sortAsc+" "+c.cssAsc,b.css.sortDesc+" "+c.cssDesc],k=[c.cssIconAsc,c.cssIconDesc,c.cssIconNone],l=["ascending","descending"],m=c.$table.find("tfoot tr").children("td, th").add(a(c.namespace+"_extra_headers")).removeClass(j.join(" "));for(c.$headers.removeClass(j.join(" ")).addClass(i).attr("aria-sort","none").find("."+b.css.icon).removeClass(k.join(" ")).addClass(k[2]),e=0;h>e;e++)if(2!==g[e][1]&&(d=c.$headers.filter(function(a){for(var d=!0,e=c.$headers.eq(a),f=parseInt(e.attr("data-column"),10),g=f+c.$headers[a].colSpan;g>f;f++)d=d?d||b.isValueInArray(f,c.sortList)>-1:!1;return d}),d=d.not(".sorter-false").filter('[data-column="'+g[e][0]+'"]'+(1===h?":last":"")),d.length)){for(f=0;f<d.length;f++)d[f].sortDisabled||d.eq(f).removeClass(i).addClass(j[g[e][1]]).attr("aria-sort",l[g[e][1]]).find("."+b.css.icon).removeClass(k[2]).addClass(k[g[e][1]]);m.length&&m.filter('[data-column="'+g[e][0]+'"]').removeClass(i).addClass(j[g[e][1]])}for(h=c.$headers.length,e=0;h>e;e++)b.setColumnAriaLabel(c,c.$headers.eq(e))},setColumnAriaLabel:function(c,d,e){if(d.length){var f=parseInt(d.attr("data-column"),10),g=d.hasClass(b.css.sortAsc)?"sortAsc":d.hasClass(b.css.sortDesc)?"sortDesc":"sortNone",h=a.trim(d.text())+": "+b.language[g];d.hasClass("sorter-false")||e===!1?h+=b.language.sortDisabled:(e=c.sortVars[f].order[(c.sortVars[f].count+1)%(c.sortReset?3:2)],h+=b.language[0===e?"nextAsc":1===e?"nextDesc":"nextNone"]),d.attr("aria-label",h)}},updateHeader:function(a){var c,d,e,f,g=a.table,h=a.$headers.length;for(c=0;h>c;c++)e=a.$headers.eq(c),f=b.getColumnData(g,a.headers,c,!0),d="false"===b.getData(e,f,"sorter")||"false"===b.getData(e,f,"parser"),b.setColumnSort(a,e,d)},setColumnSort:function(a,b,c){var d=a.table.id;b[0].sortDisabled=c,b[c?"addClass":"removeClass"]("sorter-false").attr("aria-disabled",""+c),a.tabIndex&&(c?b.removeAttr("tabindex"):b.attr("tabindex","0")),d&&(c?b.removeAttr("aria-controls"):b.attr("aria-controls",d))},updateHeaderSortCount:function(c,d){var e,f,g,h,i,j,k,l,m=d||c.sortList,n=m.length;for(c.sortList=[],h=0;n>h;h++)if(k=m[h],e=parseInt(k[0],10),e<c.columns){switch(c.sortVars[e].order||(l=c.sortVars[e].order=b.getOrder(c.sortInitialOrder)?[1,0,2]:[0,1,2],c.sortVars[e].count=0),l=c.sortVars[e].order,f=(""+k[1]).match(/^(1|d|s|o|n)/),f=f?f[0]:""){case"1":case"d":f=1;break;case"s":f=i||0;break;case"o":j=l[(i||0)%(c.sortReset?3:2)],f=0===j?1:1===j?0:2;break;case"n":f=l[++c.sortVars[e].count%(c.sortReset?3:2)];break;default:f=0}i=0===h?f:i,g=[e,parseInt(f,10)||0],c.sortList[c.sortList.length]=g,f=a.inArray(g[1],l),c.sortVars[e].count=f>=0?f:g[1]%(c.sortReset?3:2)}},updateAll:function(a,c,d){var e=a.table;e.isUpdating=!0,b.refreshWidgets(e,!0,!0),b.buildHeaders(a),b.bindEvents(e,a.$headers,!0),b.bindMethods(a),b.commonUpdate(a,c,d)},update:function(a,c,d){var e=a.table;e.isUpdating=!0,b.updateHeader(a),b.commonUpdate(a,c,d)},updateHeaders:function(a,c){a.table.isUpdating=!0,b.buildHeaders(a),b.bindEvents(a.table,a.$headers,!0),b.resortComplete(a,c)},updateCell:function(c,d,e,f){if(b.isEmptyObject(c.cache))return b.updateHeader(c),void b.commonUpdate(c,e,f);c.table.isUpdating=!0,c.$table.find(c.selectorRemove).remove();var g,h,i,j,k,l,m=c.$tbodies,n=a(d),o=m.index(a.fn.closest?n.closest("tbody"):n.parents("tbody").filter(":first")),p=c.cache[o],q=a.fn.closest?n.closest("tr"):n.parents("tr").filter(":first");if(d=n[0],m.length&&o>=0){if(i=m.eq(o).find("tr").index(q),k=p.normalized[i],l=q[0].cells.length,l!==c.columns)for(j=0,g=!1,h=0;l>h;h++)g||q[0].cells[h]===d?g=!0:j+=q[0].cells[h].colSpan;else j=n.index();g=b.getElementText(c,d,j),k[c.columns].raw[j]=g,g=b.getParsedText(c,d,j,g),k[j]=g,k[c.columns].$row=q,"numeric"===(c.parsers[j].type||"").toLowerCase()&&(p.colMax[j]=Math.max(Math.abs(g)||0,p.colMax[j]||0)),g="undefined"!==e?e:c.resort,g!==!1?b.checkResort(c,g,f):b.resortComplete(c,f)}else c.debug&&console.error("updateCell aborted, tbody missing or not within the indicated table"),c.table.isUpdating=!1},addRows:function(c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q,r,s,t="string"==typeof d&&1===c.$tbodies.length&&/<tr/.test(d||""),u=c.table;if(t)d=a(d),c.$tbodies.append(d);else if(!(d&&d instanceof jQuery&&(a.fn.closest?d.closest("table")[0]:d.parents("table")[0])===c.table))return c.debug&&console.error("addRows method requires (1) a jQuery selector reference to rows that have already been added to the table, or (2) row HTML string to be added to a table with only one tbody"),!1;if(u.isUpdating=!0,b.isEmptyObject(c.cache))b.updateHeader(c),b.commonUpdate(c,e,f);else{for(k=d.filter("tr").attr("role","row").length,i=c.$tbodies.index(d.parents("tbody").filter(":first")),c.parsers&&c.parsers.length||b.setupParsers(c),j=0;k>j;j++){for(o=0,m=d[j].cells.length,n=c.cache[i].normalized.length,q=[],p={child:[],raw:[],$row:d.eq(j),order:n},l=0;m>l;l++)r=d[j].cells[l],g=b.getElementText(c,r,o),p.raw[o]=g,h=b.getParsedText(c,r,o,g),q[o]=h,"numeric"===(c.parsers[o].type||"").toLowerCase()&&(c.cache[i].colMax[o]=Math.max(Math.abs(h)||0,c.cache[i].colMax[o]||0)),s=r.colSpan-1,s>0&&(o+=s),o++;q[c.columns]=p,c.cache[i].normalized[n]=q}b.checkResort(c,e,f)}},updateCache:function(a,c,d){a.parsers&&a.parsers.length||b.setupParsers(a,d),b.buildCache(a,c,d)},appendCache:function(a,c){var d,e,f,g,h,i,j,k=a.table,l=a.widgetOptions,m=a.$tbodies,n=[],o=a.cache;if(b.isEmptyObject(o))return a.appender?a.appender(k,n):k.isUpdating?a.$table.triggerHandler("updateComplete",k):"";for(a.debug&&(j=new Date),i=0;i<m.length;i++)if(f=m.eq(i),f.length){for(g=b.processTbody(k,f,!0),d=o[i].normalized,e=d.length,h=0;e>h;h++)n[n.length]=d[h][a.columns].$row,a.appender&&(!a.pager||a.pager.removeRows&&l.pager_removeRows||a.pager.ajax)||g.append(d[h][a.columns].$row);b.processTbody(k,g,!1)}a.appender&&a.appender(k,n),a.debug&&console.log("Rebuilt table"+b.benchmark(j)),c||a.appender||b.applyWidget(k),k.isUpdating&&a.$table.triggerHandler("updateComplete",k)},commonUpdate:function(a,c,d){a.$table.find(a.selectorRemove).remove(),b.setupParsers(a),b.buildCache(a),b.checkResort(a,c,d)},initSort:function(c,d,e){if(c.table.isUpdating)return setTimeout(function(){b.initSort(c,d,e)},50);var f,g,h,i,j,k,l,m=!e[c.sortMultiSortKey],n=c.table,o=c.$headers.length,p=parseInt(a(d).attr("data-column"),10),q=c.sortVars[p].order;if(c.$table.triggerHandler("sortStart",n),c.sortVars[p].count=e[c.sortResetKey]?2:(c.sortVars[p].count+1)%(c.sortReset?3:2),c.sortRestart)for(h=0;o>h;h++)l=c.$headers.eq(h),k=parseInt(l.attr("data-column"),10),p!==k&&(m||l.hasClass(b.css.sortNone))&&(c.sortVars[k].count=-1);if(m){if(c.sortList=[],c.last.sortList=[],null!==c.sortForce)for(f=c.sortForce,g=0;g<f.length;g++)f[g][0]!==p&&(c.sortList[c.sortList.length]=f[g]);if(i=q[c.sortVars[p].count],2>i&&(c.sortList[c.sortList.length]=[p,i],d.colSpan>1))for(g=1;g<d.colSpan;g++)c.sortList[c.sortList.length]=[p+g,i],c.sortVars[p+g].count=a.inArray(i,q)}else if(c.sortList=a.extend([],c.last.sortList),b.isValueInArray(p,c.sortList)>=0)for(g=0;g<c.sortList.length;g++)k=c.sortList[g],k[0]===p&&(k[1]=q[c.sortVars[p].count],2===k[1]&&(c.sortList.splice(g,1),c.sortVars[p].count=-1));else if(i=q[c.sortVars[p].count],2>i&&(c.sortList[c.sortList.length]=[p,i],d.colSpan>1))for(g=1;g<d.colSpan;g++)c.sortList[c.sortList.length]=[p+g,i],c.sortVars[p+g].count=a.inArray(i,q);if(c.last.sortList=a.extend([],c.sortList),c.sortList.length&&c.sortAppend&&(f=a.isArray(c.sortAppend)?c.sortAppend:c.sortAppend[c.sortList[0][0]],!b.isEmptyObject(f)))for(g=0;g<f.length;g++)if(f[g][0]!==p&&b.isValueInArray(f[g][0],c.sortList)<0){if(i=f[g][1],j=(""+i).match(/^(a|d|s|o|n)/))switch(k=c.sortList[0][1],j[0]){case"d":i=1;break;case"s":i=k;break;case"o":i=0===k?1:0;break;case"n":i=(k+1)%(c.sortReset?3:2);break;default:i=0}c.sortList[c.sortList.length]=[f[g][0],i]}c.$table.triggerHandler("sortBegin",n),setTimeout(function(){b.setHeadersCss(c),b.multisort(c),b.appendCache(c),c.$table.triggerHandler("sortBeforeEnd",n),c.$table.triggerHandler("sortEnd",n)},1)},multisort:function(a){var c,d,e,f,g=a.table,h=0,i=a.textSorter||"",j=a.sortList,k=j.length,l=a.$tbodies.length;if(!a.serverSideSorting&&!b.isEmptyObject(a.cache)){for(a.debug&&(d=new Date),c=0;l>c;c++)e=a.cache[c].colMax,f=a.cache[c].normalized,f.sort(function(c,d){var f,l,m,n,o,p,q;for(f=0;k>f;f++){if(m=j[f][0],n=j[f][1],h=0===n,a.sortStable&&c[m]===d[m]&&1===k)return c[a.columns].order-d[a.columns].order;if(l=/n/i.test(b.getSortType(a.parsers,m)),l&&a.strings[m]?(l="boolean"==typeof b.string[a.strings[m]]?(h?1:-1)*(b.string[a.strings[m]]?-1:1):a.strings[m]?b.string[a.strings[m]]||0:0,o=a.numberSorter?a.numberSorter(c[m],d[m],h,e[m],g):b["sortNumeric"+(h?"Asc":"Desc")](c[m],d[m],l,e[m],m,a)):(p=h?c:d,q=h?d:c,o="function"==typeof i?i(p[m],q[m],h,m,g):"object"==typeof i&&i.hasOwnProperty(m)?i[m](p[m],q[m],h,m,g):b["sortNatural"+(h?"Asc":"Desc")](c[m],d[m],m,a)),o)return o}return c[a.columns].order-d[a.columns].order});a.debug&&console.log("Applying sort "+j.toString()+b.benchmark(d))}},resortComplete:function(b,c){b.table.isUpdating&&b.$table.triggerHandler("updateComplete",b.table),a.isFunction(c)&&c(b.table)},checkResort:function(c,d,e){var f=a.isArray(d)?d:c.sortList,g="undefined"==typeof d?c.resort:d;g===!1||c.serverSideSorting||c.table.isProcessing?(b.resortComplete(c,e),b.applyWidget(c.table,!1)):f.length?b.sortOn(c,f,function(){b.resortComplete(c,e)},!0):b.sortReset(c,function(){b.resortComplete(c,e),b.applyWidget(c.table,!1)})},sortOn:function(c,d,e,f){var g=c.table;c.$table.triggerHandler("sortStart",g),b.updateHeaderSortCount(c,d),b.setHeadersCss(c),c.delayInit&&b.isEmptyObject(c.cache)&&b.buildCache(c),c.$table.triggerHandler("sortBegin",g),b.multisort(c),b.appendCache(c,f),c.$table.triggerHandler("sortBeforeEnd",g),c.$table.triggerHandler("sortEnd",g),b.applyWidget(g),a.isFunction(e)&&e(g)},sortReset:function(c,d){c.sortList=[],b.setHeadersCss(c),b.multisort(c),b.appendCache(c),a.isFunction(d)&&d(c.table)},getSortType:function(a,b){return a&&a[b]?a[b].type||"":""},getOrder:function(a){return/^d/i.test(a)||1===a},sortNatural:function(a,c){if(a===c)return 0;var d,e,f,g,h,i,j=b.regex;if(j.hex.test(c)){if(d=parseInt(a.match(j.hex),16),e=parseInt(c.match(j.hex),16),e>d)return-1;if(d>e)return 1}for(d=a.replace(j.chunk,"\\0$1\\0").replace(j.chunks,"").split("\\0"),e=c.replace(j.chunk,"\\0$1\\0").replace(j.chunks,"").split("\\0"),i=Math.max(d.length,e.length),h=0;i>h;h++){if(f=isNaN(d[h])?d[h]||0:parseFloat(d[h])||0,g=isNaN(e[h])?e[h]||0:parseFloat(e[h])||0,isNaN(f)!==isNaN(g))return isNaN(f)?1:-1;if(typeof f!=typeof g&&(f+="",g+=""),g>f)return-1;if(f>g)return 1}return 0},sortNaturalAsc:function(a,c,d,e){if(a===c)return 0;var f=b.string[e.empties[d]||e.emptyTo];return""===a&&0!==f?"boolean"==typeof f?f?-1:1:-f||-1:""===c&&0!==f?"boolean"==typeof f?f?1:-1:f||1:b.sortNatural(a,c)},sortNaturalDesc:function(a,c,d,e){if(a===c)return 0;var f=b.string[e.empties[d]||e.emptyTo];return""===a&&0!==f?"boolean"==typeof f?f?-1:1:f||1:""===c&&0!==f?"boolean"==typeof f?f?1:-1:-f||-1:b.sortNatural(c,a)},sortText:function(a,b){return a>b?1:b>a?-1:0},getTextValue:function(a,b,c){if(c){var d,e=a?a.length:0,f=c+b;for(d=0;e>d;d++)f+=a.charCodeAt(d);return b*f}return 0},sortNumericAsc:function(a,c,d,e,f,g){if(a===c)return 0;var h=b.string[g.empties[f]||g.emptyTo];return""===a&&0!==h?"boolean"==typeof h?h?-1:1:-h||-1:""===c&&0!==h?"boolean"==typeof h?h?1:-1:h||1:(isNaN(a)&&(a=b.getTextValue(a,d,e)),isNaN(c)&&(c=b.getTextValue(c,d,e)),a-c)},sortNumericDesc:function(a,c,d,e,f,g){if(a===c)return 0;var h=b.string[g.empties[f]||g.emptyTo];return""===a&&0!==h?"boolean"==typeof h?h?-1:1:h||1:""===c&&0!==h?"boolean"==typeof h?h?1:-1:-h||-1:(isNaN(a)&&(a=b.getTextValue(a,d,e)),isNaN(c)&&(c=b.getTextValue(c,d,e)),c-a)},sortNumeric:function(a,b){return a-b},addWidget:function(a){a.id&&!b.isEmptyObject(b.getWidgetById(a.id))&&console.warn('"'+a.id+'" widget was loaded more than once!'),b.widgets[b.widgets.length]=a},hasWidget:function(b,c){return b=a(b),b.length&&b[0].config&&b[0].config.widgetInit[c]||!1},getWidgetById:function(a){var c,d,e=b.widgets.length;for(c=0;e>c;c++)if(d=b.widgets[c],d&&d.id&&d.id.toLowerCase()===a.toLowerCase())return d},applyWidgetOptions:function(c){var d,e,f=c.config,g=f.widgets.length;if(g)for(d=0;g>d;d++)e=b.getWidgetById(f.widgets[d]),e&&e.options&&(f.widgetOptions=a.extend(!0,{},e.options,f.widgetOptions))},addWidgetFromClass:function(a){var c,d,e=a.config,f="^"+e.widgetClass.replace(b.regex.templateName,"(\\S+)+")+"$",g=new RegExp(f,"g"),h=(a.className||"").split(b.regex.spaces);if(h.length)for(c=h.length,d=0;c>d;d++)h[d].match(g)&&(e.widgets[e.widgets.length]=h[d].replace(g,"$1"))},applyWidgetId:function(c,d,e){c=a(c)[0];var f,g,h,i=c.config,j=i.widgetOptions,k=b.getWidgetById(d);k&&(h=k.id,f=!1,a.inArray(h,i.widgets)<0&&(i.widgets[i.widgets.length]=h),i.debug&&(g=new Date),!e&&i.widgetInit[h]||(i.widgetInit[h]=!0,c.hasInitialized&&b.applyWidgetOptions(c),"function"==typeof k.init&&(f=!0,i.debug&&console[console.group?"group":"log"]("Initializing "+h+" widget"),k.init(c,k,i,j))),e||"function"!=typeof k.format||(f=!0,i.debug&&console[console.group?"group":"log"]("Updating "+h+" widget"),k.format(c,i,j,!1)),i.debug&&f&&(console.log("Completed "+(e?"initializing ":"applying ")+h+" widget"+b.benchmark(g)),console.groupEnd&&console.groupEnd()))},applyWidget:function(c,d,e){c=a(c)[0];var f,g,h,i,j,k=c.config,l=[];if(d===!1||!c.hasInitialized||!c.isApplyingWidgets&&!c.isUpdating){if(k.debug&&(j=new Date),b.addWidgetFromClass(c),clearTimeout(k.timerReady),k.widgets.length){for(c.isApplyingWidgets=!0,k.widgets=a.grep(k.widgets,function(b,c){return a.inArray(b,k.widgets)===c}),h=k.widgets||[],g=h.length,f=0;g>f;f++)i=b.getWidgetById(h[f]),i&&i.id?(i.priority||(i.priority=10),l[f]=i):k.debug&&console.warn('"'+h[f]+'" widget code does not exist!');for(l.sort(function(a,b){return a.priority<b.priority?-1:a.priority===b.priority?0:1}),g=l.length,k.debug&&console[console.group?"group":"log"]("Start "+(d?"initializing":"applying")+" widgets"),f=0;g>f;f++)i=l[f],i&&i.id&&b.applyWidgetId(c,i.id,d);k.debug&&console.groupEnd&&console.groupEnd(),d||"function"!=typeof e||e(c)}k.timerReady=setTimeout(function(){c.isApplyingWidgets=!1,a.data(c,"lastWidgetApplication",new Date),k.$table.triggerHandler("tablesorter-ready")},10),k.debug&&(i=k.widgets.length,console.log("Completed "+(d===!0?"initializing ":"applying ")+i+" widget"+(1!==i?"s":"")+b.benchmark(j)))}},removeWidget:function(c,d,e){c=a(c)[0];var f,g,h,i,j=c.config;if(d===!0)for(d=[],i=b.widgets.length,h=0;i>h;h++)g=b.widgets[h],g&&g.id&&(d[d.length]=g.id);else d=(a.isArray(d)?d.join(","):d||"").toLowerCase().split(/[\s,]+/);for(i=d.length,f=0;i>f;f++)g=b.getWidgetById(d[f]),h=a.inArray(d[f],j.widgets),h>=0&&e!==!0&&j.widgets.splice(h,1),g&&g.remove&&(j.debug&&console.log((e?"Refreshing":"Removing")+' "'+d[f]+'" widget'),g.remove(c,j,j.widgetOptions,e),j.widgetInit[d[f]]=!1)},refreshWidgets:function(c,d,e){c=a(c)[0];var f,g,h=c.config,i=h.widgets,j=b.widgets,k=j.length,l=[],m=function(b){a(b).triggerHandler("refreshComplete")};for(f=0;k>f;f++)g=j[f],g&&g.id&&(d||a.inArray(g.id,i)<0)&&(l[l.length]=g.id);b.removeWidget(c,l.join(","),!0),e!==!0?(b.applyWidget(c,d||!1,m),d&&b.applyWidget(c,!1,m)):m(c)},benchmark:function(a){return" ( "+((new Date).getTime()-a.getTime())+"ms )"},log:function(){console.log(arguments)},isEmptyObject:function(a){for(var b in a)return!1;return!0},isValueInArray:function(a,b){var c,d=b&&b.length||0;for(c=0;d>c;c++)if(b[c][0]===a)return c;return-1},formatFloat:function(c,d){if("string"!=typeof c||""===c)return c;var e,f=d&&d.config?d.config.usNumberFormat!==!1:"undefined"!=typeof d?d:!0;return c=f?c.replace(b.regex.comma,""):c.replace(b.regex.digitNonUS,"").replace(b.regex.comma,"."),b.regex.digitNegativeTest.test(c)&&(c=c.replace(b.regex.digitNegativeReplace,"-$1")),e=parseFloat(c),isNaN(e)?a.trim(c):e},isDigit:function(a){return isNaN(a)?b.regex.digitTest.test(a.toString().replace(b.regex.digitReplace,"")):""!==a},computeColumnIndex:function(b,c){
var d,e,f,g,h,i,j,k,l,m,n=c&&c.columns||0,o=[],p=new Array(n);for(d=0;d<b.length;d++)for(i=b[d].cells,e=0;e<i.length;e++){for(h=i[e],j=h.parentNode.rowIndex,k=h.rowSpan||1,l=h.colSpan||1,"undefined"==typeof o[j]&&(o[j]=[]),f=0;f<o[j].length+1;f++)if("undefined"==typeof o[j][f]){m=f;break}for(n&&h.cellIndex===m||(h.setAttribute?h.setAttribute("data-column",m):a(h).attr("data-column",m)),f=j;j+k>f;f++)for("undefined"==typeof o[f]&&(o[f]=[]),p=o[f],g=m;m+l>g;g++)p[g]="x"}return p.length},fixColumnWidth:function(c){c=a(c)[0];var d,e,f,g,h,i=c.config,j=i.$table.children("colgroup");if(j.length&&j.hasClass(b.css.colgroup)&&j.remove(),i.widthFixed&&0===i.$table.children("colgroup").length){for(j=a('<colgroup class="'+b.css.colgroup+'">'),d=i.$table.width(),f=i.$tbodies.find("tr:first").children(":visible"),g=f.length,h=0;g>h;h++)e=parseInt(f.eq(h).width()/d*1e3,10)/10+"%",j.append(a("<col>").css("width",e));i.$table.prepend(j)}},getData:function(b,c,d){var e,f,g="",h=a(b);return h.length?(e=a.metadata?h.metadata():!1,f=" "+(h.attr("class")||""),"undefined"!=typeof h.data(d)||"undefined"!=typeof h.data(d.toLowerCase())?g+=h.data(d)||h.data(d.toLowerCase()):e&&"undefined"!=typeof e[d]?g+=e[d]:c&&"undefined"!=typeof c[d]?g+=c[d]:" "!==f&&f.match(" "+d+"-")&&(g=f.match(new RegExp("\\s"+d+"-([\\w-]+)"))[1]||""),a.trim(g)):""},getColumnData:function(b,c,d,e,f){if("undefined"!=typeof c&&null!==c){b=a(b)[0];var g,h,i=b.config,j=f||i.$headers,k=i.$headerIndexed&&i.$headerIndexed[d]||j.filter('[data-column="'+d+'"]:last');if(c[d])return e?c[d]:c[j.index(k)];for(h in c)if("string"==typeof h&&(g=k.filter(h).add(k.find(h)),g.length))return c[h]}},isProcessing:function(c,d,e){c=a(c);var f=c[0].config,g=e||c.find("."+b.css.header);d?("undefined"!=typeof e&&f.sortList.length>0&&(g=g.filter(function(){return this.sortDisabled?!1:b.isValueInArray(parseFloat(a(this).attr("data-column")),f.sortList)>=0})),c.add(g).addClass(b.css.processing+" "+f.cssProcessing)):c.add(g).removeClass(b.css.processing+" "+f.cssProcessing)},processTbody:function(b,c,d){if(b=a(b)[0],d)return b.isProcessing=!0,c.before('<colgroup class="tablesorter-savemyplace"/>'),a.fn.detach?c.detach():c.remove();var e=a(b).find("colgroup.tablesorter-savemyplace");c.insertAfter(e),e.remove(),b.isProcessing=!1},clearTableBody:function(b){a(b)[0].config.$tbodies.children().detach()},characterEquivalents:{a:"áàâãäąå",A:"ÁÀÂÃÄĄÅ",c:"çćč",C:"ÇĆČ",e:"éèêëěę",E:"ÉÈÊËĚĘ",i:"íìİîïı",I:"ÍÌİÎÏ",o:"óòôõöō",O:"ÓÒÔÕÖŌ",ss:"ß",SS:"ẞ",u:"úùûüů",U:"ÚÙÛÜŮ"},replaceAccents:function(a){var c,d="[",e=b.characterEquivalents;if(!b.characterRegex){b.characterRegexArray={};for(c in e)"string"==typeof c&&(d+=e[c],b.characterRegexArray[c]=new RegExp("["+e[c]+"]","g"));b.characterRegex=new RegExp(d+"]")}if(b.characterRegex.test(a))for(c in e)"string"==typeof c&&(a=a.replace(b.characterRegexArray[c],c));return a},restoreHeaders:function(c){var d,e,f=a(c)[0].config,g=f.$table.find(f.selectorHeaders),h=g.length;for(d=0;h>d;d++)e=g.eq(d),e.find("."+b.css.headerIn).length&&e.html(f.headerContent[d])},destroy:function(c,d,e){if(c=a(c)[0],c.hasInitialized){b.removeWidget(c,!0,!1);var f,g=a(c),h=c.config,i=h.debug,j=g.find("thead:first"),k=j.find("tr."+b.css.headerRow).removeClass(b.css.headerRow+" "+h.cssHeaderRow),l=g.find("tfoot:first > tr").children("th, td");d===!1&&a.inArray("uitheme",h.widgets)>=0&&(g.triggerHandler("applyWidgetId",["uitheme"]),g.triggerHandler("applyWidgetId",["zebra"])),j.find("tr").not(k).remove(),f="sortReset update updateRows updateAll updateHeaders updateCell addRows updateComplete sorton appendCache updateCache applyWidgetId applyWidgets refreshWidgets removeWidget destroy mouseup mouseleave "+"keypress sortBegin sortEnd resetToLoadState ".split(" ").join(h.namespace+" "),g.removeData("tablesorter").unbind(f.replace(b.regex.spaces," ")),h.$headers.add(l).removeClass([b.css.header,h.cssHeader,h.cssAsc,h.cssDesc,b.css.sortAsc,b.css.sortDesc,b.css.sortNone].join(" ")).removeAttr("data-column").removeAttr("aria-label").attr("aria-disabled","true"),k.find(h.selectorSort).unbind("mousedown mouseup keypress ".split(" ").join(h.namespace+" ").replace(b.regex.spaces," ")),b.restoreHeaders(c),g.toggleClass(b.css.table+" "+h.tableClass+" tablesorter-"+h.theme,d===!1),c.hasInitialized=!1,delete c.config.cache,"function"==typeof e&&e(c),i&&console.log("tablesorter has been removed")}}};a.fn.tablesorter=function(c){return this.each(function(){var d=this,e=a.extend(!0,{},b.defaults,c,b.instanceMethods);e.originalSettings=c,!d.hasInitialized&&b.buildTable&&"TABLE"!==this.nodeName?b.buildTable(d,e):b.setup(d,e)})},window.console&&window.console.log||(b.logs=[],console={},console.log=console.warn=console.error=console.table=function(){var a=arguments.length>1?arguments:arguments[0];b.logs[b.logs.length]={date:Date.now(),log:a}}),b.addParser({id:"no-parser",is:function(){return!1},format:function(){return""},type:"text"}),b.addParser({id:"text",is:function(){return!0},format:function(c,d){var e=d.config;return c&&(c=a.trim(e.ignoreCase?c.toLocaleLowerCase():c),c=e.sortLocaleCompare?b.replaceAccents(c):c),c},type:"text"}),b.regex.nondigit=/[^\w,. \-()]/g,b.addParser({id:"digit",is:function(a){return b.isDigit(a)},format:function(c,d){var e=b.formatFloat((c||"").replace(b.regex.nondigit,""),d);return c&&"number"==typeof e?e:c?a.trim(c&&d.config.ignoreCase?c.toLocaleLowerCase():c):c},type:"numeric"}),b.regex.currencyReplace=/[+\-,. ]/g,b.regex.currencyTest=/^\(?\d+[\u00a3$\u20ac\u00a4\u00a5\u00a2?.]|[\u00a3$\u20ac\u00a4\u00a5\u00a2?.]\d+\)?$/,b.addParser({id:"currency",is:function(a){return a=(a||"").replace(b.regex.currencyReplace,""),b.regex.currencyTest.test(a)},format:function(c,d){var e=b.formatFloat((c||"").replace(b.regex.nondigit,""),d);return c&&"number"==typeof e?e:c?a.trim(c&&d.config.ignoreCase?c.toLocaleLowerCase():c):c},type:"numeric"}),b.regex.urlProtocolTest=/^(https?|ftp|file):\/\//,b.regex.urlProtocolReplace=/(https?|ftp|file):\/\//,b.addParser({id:"url",is:function(a){return b.regex.urlProtocolTest.test(a)},format:function(c){return c?a.trim(c.replace(b.regex.urlProtocolReplace,"")):c},parsed:!0,type:"text"}),b.regex.dash=/-/g,b.regex.isoDate=/^\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}/,b.addParser({id:"isoDate",is:function(a){return b.regex.isoDate.test(a)},format:function(a,c){var d=a?new Date(a.replace(b.regex.dash,"/")):a;return d instanceof Date&&isFinite(d)?d.getTime():a},type:"numeric"}),b.regex.percent=/%/g,b.regex.percentTest=/(\d\s*?%|%\s*?\d)/,b.addParser({id:"percent",is:function(a){return b.regex.percentTest.test(a)&&a.length<15},format:function(a,c){return a?b.formatFloat(a.replace(b.regex.percent,""),c):a},type:"numeric"}),b.addParser({id:"image",is:function(a,b,c,d){return d.find("img").length>0},format:function(b,c,d){return a(d).find("img").attr(c.config.imgAttr||"alt")||b},parsed:!0,type:"text"}),b.regex.dateReplace=/(\S)([AP]M)$/i,b.regex.usLongDateTest1=/^[A-Z]{3,10}\.?\s+\d{1,2},?\s+(\d{4})(\s+\d{1,2}:\d{2}(:\d{2})?(\s+[AP]M)?)?$/i,b.regex.usLongDateTest2=/^\d{1,2}\s+[A-Z]{3,10}\s+\d{4}/i,b.addParser({id:"usLongDate",is:function(a){return b.regex.usLongDateTest1.test(a)||b.regex.usLongDateTest2.test(a)},format:function(a,c){var d=a?new Date(a.replace(b.regex.dateReplace,"$1 $2")):a;return d instanceof Date&&isFinite(d)?d.getTime():a},type:"numeric"}),b.regex.shortDateTest=/(^\d{1,2}[\/\s]\d{1,2}[\/\s]\d{4})|(^\d{4}[\/\s]\d{1,2}[\/\s]\d{1,2})/,b.regex.shortDateReplace=/[\-.,]/g,b.regex.shortDateXXY=/(\d{1,2})[\/\s](\d{1,2})[\/\s](\d{4})/,b.regex.shortDateYMD=/(\d{4})[\/\s](\d{1,2})[\/\s](\d{1,2})/,b.convertFormat=function(a,c){a=(a||"").replace(b.regex.spaces," ").replace(b.regex.shortDateReplace,"/"),"mmddyyyy"===c?a=a.replace(b.regex.shortDateXXY,"$3/$1/$2"):"ddmmyyyy"===c?a=a.replace(b.regex.shortDateXXY,"$3/$2/$1"):"yyyymmdd"===c&&(a=a.replace(b.regex.shortDateYMD,"$1/$2/$3"));var d=new Date(a);return d instanceof Date&&isFinite(d)?d.getTime():""},b.addParser({id:"shortDate",is:function(a){return a=(a||"").replace(b.regex.spaces," ").replace(b.regex.shortDateReplace,"/"),b.regex.shortDateTest.test(a)},format:function(a,c,d,e){if(a){var f=c.config,g=f.$headerIndexed[e],h=g.length&&g.data("dateFormat")||b.getData(g,b.getColumnData(c,f.headers,e),"dateFormat")||f.dateFormat;return g.length&&g.data("dateFormat",h),b.convertFormat(a,h)||a}return a},type:"numeric"}),b.regex.timeTest=/^([1-9]|1[0-2]):([0-5]\d)(\s[AP]M)$|^((?:[01]\d|[2][0-4]):[0-5]\d)$/i,b.regex.timeMatch=/([1-9]|1[0-2]):([0-5]\d)(\s[AP]M)|((?:[01]\d|[2][0-4]):[0-5]\d)/i,b.addParser({id:"time",is:function(a){return b.regex.timeTest.test(a)},format:function(a,c){var d,e=(a||"").match(b.regex.timeMatch),f=new Date(a),g=a&&(null!==e?e[0]:"00:00 AM"),h=g?new Date("2000/01/01 "+g.replace(b.regex.dateReplace,"$1 $2")):g;return h instanceof Date&&isFinite(h)?(d=f instanceof Date&&isFinite(f)?f.getTime():0,d?parseFloat(h.getTime()+"."+f.getTime()):h.getTime()):a},type:"numeric"}),b.addParser({id:"metadata",is:function(){return!1},format:function(b,c,d){var e=c.config,f=e.parserMetadataName?e.parserMetadataName:"sortValue";return a(d).metadata()[f]},type:"numeric"}),b.addWidget({id:"zebra",priority:90,format:function(b,c,d){var e,f,g,h,i,j,k,l=new RegExp(c.cssChildRow,"i"),m=c.$tbodies.add(a(c.namespace+"_extra_table").children("tbody:not(."+c.cssInfoBlock+")"));for(i=0;i<m.length;i++)for(g=0,e=m.eq(i).children("tr:visible").not(c.selectorRemove),k=e.length,j=0;k>j;j++)f=e.eq(j),l.test(f[0].className)||g++,h=g%2===0,f.removeClass(d.zebra[h?1:0]).addClass(d.zebra[h?0:1])},remove:function(a,c,d,e){if(!e){var f,g,h=c.$tbodies,i=(d.zebra||["even","odd"]).join(" ");for(f=0;f<h.length;f++)g=b.processTbody(a,h.eq(f),!0),g.children().removeClass(i),b.processTbody(a,g,!1)}}})}(jQuery),a.tablesorter});
/*!
 * tablesorter (FORK) pager plugin
 * updated 5/1/2016 (v2.26.0)
 */
!function(a){"use strict";var b=a.tablesorter;a.extend({tablesorterPager:new function(){this.defaults={container:null,ajaxUrl:null,customAjaxUrl:function(a,b){return b},ajaxError:null,ajaxObject:{dataType:"json"},processAjaxOnInit:!0,ajaxProcessing:function(a){return[0,[],null]},output:"{startRow} to {endRow} of {totalRows} rows",updateArrows:!0,page:0,pageReset:0,size:10,maxOptionSize:20,savePages:!0,storageKey:"tablesorter-pager",fixedHeight:!1,countChildRows:!1,removeRows:!1,cssFirst:".first",cssPrev:".prev",cssNext:".next",cssLast:".last",cssGoto:".gotoPage",cssPageDisplay:".pagedisplay",cssPageSize:".pagesize",cssErrorRow:"tablesorter-errorRow",cssDisabled:"disabled",totalRows:0,totalPages:0,filteredRows:0,filteredPages:0,ajaxCounter:0,currentFilters:[],startRow:0,endRow:0,$size:null,last:{}};var c="filterInit filterStart filterEnd sortEnd disablePager enablePager destroyPager updateComplete pageSize pageSet pageAndSize pagerUpdate refreshComplete ",d=this,e=function(a,b,c){var d="addClass",e="removeClass",f=b.cssDisabled,g=!!c,h=g||0===b.page,i=t(a,b),j=g||b.page===i-1||0===i;b.updateArrows&&(b.$container.find(b.cssFirst+","+b.cssPrev)[h?d:e](f).attr("aria-disabled",h),b.$container.find(b.cssNext+","+b.cssLast)[j?d:e](f).attr("aria-disabled",j))},f=function(a,c){var d,e,f,g=a.config,h=g.$table.hasClass("hasFilters");if(h&&!c.ajaxUrl)if(b.isEmptyObject(g.cache))c.filteredRows=c.totalRows=g.$tbodies.eq(0).children("tr").not(c.countChildRows?"":"."+g.cssChildRow).length;else for(c.filteredRows=0,d=g.cache[0].normalized,f=d.length,e=0;f>e;e++)c.filteredRows+=c.regexRows.test(d[e][g.columns].$row[0].className)?0:1;else h||(c.filteredRows=c.totalRows)},g=function(c,d,g){if(!d.initializing){var j,k,l,m,n,o,p=c.config,q=p.namespace+"pager",r=u(d,d.size,"get");if("all"===r&&(r=d.totalRows),d.countChildRows&&(k[k.length]=p.cssChildRow),d.totalPages=Math.ceil(d.totalRows/r),p.totalRows=d.totalRows,v(c,d),f(c,d),p.filteredRows=d.filteredRows,d.filteredPages=Math.ceil(d.filteredRows/r)||0,t(c,d)>=0){if(k=r*d.page>d.filteredRows&&g,d.page=k?d.pageReset||0:d.page,d.startRow=k?r*d.page+1:0===d.filteredRows?0:r*d.page+1,d.endRow=Math.min(d.filteredRows,d.totalRows,r*(d.page+1)),l=d.$container.find(d.cssPageDisplay),j=(d.ajaxData&&d.ajaxData.output?d.ajaxData.output||d.output:d.output).replace(/\{page([\-+]\d+)?\}/gi,function(a,b){return d.totalPages?d.page+(b?parseInt(b,10):1):0}).replace(/\{\w+(\s*:\s*\w+)?\}/gi,function(a){var b,c,e=a.replace(/[{}\s]/g,""),f=e.split(":"),g=d.ajaxData,h=/(rows?|pages?)$/i.test(e)?0:"";return/(startRow|page)/.test(f[0])&&"input"===f[1]?(b=(""+("page"===f[0]?d.totalPages:d.totalRows)).length,c="page"===f[0]?d.page+1:d.startRow,'<input type="text" class="ts-'+f[0]+'" style="max-width:'+b+'em" value="'+c+'"/>'):f.length>1&&g&&g[f[0]]?g[f[0]][f[1]]:d[e]||(g?g[e]:h)||h}),d.$goto.length){for(k="",o=h(c,d),n=o.length,m=0;n>m;m++)k+='<option value="'+o[m]+'">'+o[m]+"</option>";d.$goto.html(k).val(d.page+1)}l.length&&(l["INPUT"===l[0].nodeName?"val":"html"](j),l.find(".ts-startRow, .ts-page").unbind("change"+q).bind("change"+q,function(){var b=a(this).val(),c=a(this).hasClass("ts-startRow")?Math.floor(b/r)+1:b;p.$table.triggerHandler("pageSet"+q,[c])}))}e(c,d),i(c,d),d.initialized&&g!==!1&&(p.debug&&console.log("Pager: Triggering pagerComplete"),p.$table.triggerHandler("pagerComplete",d),d.savePages&&b.storage&&b.storage(c,d.storageKey,{page:d.page,size:r===d.totalRows?"all":r}))}},h=function(b,c){var d,e,f,g,h,i,j=t(b,c)||1,k=5*Math.ceil(j/c.maxOptionSize/5),l=j>c.maxOptionSize,m=c.page+1,n=k,o=j-k,p=[1],q=l?k:1;for(d=q;j>=d;)p[p.length]=d,d+=l?k:1;if(p[p.length]=j,l){for(f=[],e=Math.max(Math.floor(c.maxOptionSize/k)-1,5),n=m-e,1>n&&(n=1),o=m+e,o>j&&(o=j),d=n;o>=d;d++)f[f.length]=d;p=a.grep(p,function(b,c){return a.inArray(b,p)===c}),h=p.length,i=f.length,h-i>k/2&&h+i>c.maxOptionSize&&(g=Math.floor(h/2)-Math.floor(i/2),Array.prototype.splice.apply(p,[g,i])),p=p.concat(f)}return p=a.grep(p,function(b,c){return a.inArray(b,p)===c}).sort(function(a,b){return a-b})},i=function(b,c){var d,e,f=b.config,g=f.$tbodies.eq(0);g.find("tr.pagerSavedHeightSpacer").remove(),c.fixedHeight&&!c.isDisabled&&(e=a.data(b,"pagerSavedHeight"),e&&(d=e-g.height(),d>5&&a.data(b,"pagerLastSize")===c.size&&g.children("tr:visible").length<("all"===c.size?c.totalRows:c.size)&&g.append('<tr class="pagerSavedHeightSpacer '+f.selectorRemove.slice(1)+'" style="height:'+d+'px;"></tr>')))},j=function(b,c){var d,e=b.config,f=e.$tbodies.eq(0);f.find("tr.pagerSavedHeightSpacer").remove(),f.children("tr:visible").length||f.append('<tr class="pagerSavedHeightSpacer '+e.selectorRemove.slice(1)+'"><td>&nbsp</td></tr>'),d=f.children("tr").eq(0).height()*("all"===c.size?c.totalRows:c.size),a.data(b,"pagerSavedHeight",d),i(b,c),a.data(b,"pagerLastSize",c.size)},k=function(a,c){if(!c.ajaxUrl){var d,e=0,f=a.config,g=f.$tbodies.eq(0).children("tr"),h=g.length,i="all"===c.size?c.totalRows:c.size,j=c.page*i,k=j+i,l=f.widgetOptions&&f.widgetOptions.filter_filteredRow||"filtered",m=0,n=0;for(c.cacheIndex=[],d=0;h>d;d++)g[d].className.match(l)||(n===j&&g[d].className.match(f.cssChildRow)?g[d].style.display="none":(g[d].style.display=n>=j&&k>n?"":"none",m!==n&&n>=j&&k>n&&(c.cacheIndex[c.cacheIndex.length]=d,m=n),n+=g[d].className.match(f.cssChildRow+"|"+f.selectorRemove.slice(1))&&!c.countChildRows?0:1,n===k&&"none"!==g[d].style.display&&g[d].className.match(b.css.cssHasChild)&&(e=d)));if(e>0&&g[e].className.match(b.css.cssHasChild))for(;++e<h&&g[e].className.match(f.cssChildRow);)g[e].style.display=""}},l=function(b,c){c.size=u(c,c.$size.val(),"get"),c.$size.val(c.size),a.data(b,"pagerLastSize",c.size),e(b,c),c.removeRows||(k(b,c),a(b).bind("sortEnd filterEnd ".split(" ").join(b.config.namespace+"pager "),function(){k(b,c)}))},m=function(c,d,e,f,h,i){if("function"==typeof e.ajaxProcessing){d.config.$tbodies.eq(0).empty();var j,k,l,m,n,o,p,q,r,s,t,v,w,x,y,z=d.config,A=z.$table,C="",D=e.ajaxProcessing(c,d,f)||[0,[]],E=A.find("thead th").length;if(b.showError(d),i)z.debug&&console.error("Pager: >> Ajax Error",f,h,i),b.showError(d,f,h,i),z.$tbodies.eq(0).children("tr").detach(),e.totalRows=0;else{if(a.isArray(D)?(l=isNaN(D[0])&&!isNaN(D[1]),w=D[l?1:0],e.totalRows=isNaN(w)?e.totalRows||0:w,z.totalRows=z.filteredRows=e.filteredRows=e.totalRows,t=0===e.totalRows?[]:D[l?0:1]||[],s=D[2]):(e.ajaxData=D,z.totalRows=e.totalRows=D.total,z.filteredRows=e.filteredRows="undefined"!=typeof D.filteredRows?D.filteredRows:D.total,s=D.headers,t=D.rows||[]),v=t&&t.length,t instanceof jQuery)e.processAjaxOnInit&&(z.$tbodies.eq(0).empty(),z.$tbodies.eq(0).append(t));else if(v){for(j=0;v>j;j++){for(C+="<tr>",k=0;k<t[j].length;k++)C+=/^\s*<td/.test(t[j][k])?a.trim(t[j][k]):"<td>"+t[j][k]+"</td>";C+="</tr>"}e.processAjaxOnInit&&z.$tbodies.eq(0).html(C)}if(e.processAjaxOnInit=!0,s&&s.length===E)for(m=A.hasClass("hasStickyHeaders"),o=m?z.widgetOptions.$sticky.children("thead:first").children("tr").children():"",n=A.find("tfoot tr:first").children(),p=z.$headers.filter("th "),x=p.length,k=0;x>k;k++)q=p.eq(k),q.find("."+b.css.icon).length?(r=q.find("."+b.css.icon).clone(!0),q.find(".tablesorter-header-inner").html(s[k]).append(r),m&&o.length&&(r=o.eq(k).find("."+b.css.icon).clone(!0),o.eq(k).find(".tablesorter-header-inner").html(s[k]).append(r))):(q.find(".tablesorter-header-inner").html(s[k]),m&&o.length&&o.eq(k).find(".tablesorter-header-inner").html(s[k])),n.eq(k).html(s[k])}z.showProcessing&&b.isProcessing(d),y=u(e,e.size,"get"),e.totalPages="all"===y?1:Math.ceil(e.totalRows/y),e.last.totalRows=e.totalRows,e.last.currentFilters=e.currentFilters,e.last.sortList=(z.sortList||[]).join(","),g(d,e,!1),b.updateCache(z,function(){e.initialized&&setTimeout(function(){z.debug&&console.log("Pager: Triggering pagerChange"),A.triggerHandler("pagerChange",e),b.applyWidget(d),g(d,e,!0)},0)})}e.initialized||B(d,e)},n=function(c,d){var e,f=o(c,d),g=a(document),h=c.config,i=h.namespace+"pager";""!==f&&(h.showProcessing&&b.isProcessing(c,!0),g.bind("ajaxError"+i,function(a,b,e,f){m(null,c,d,b,e,f),g.unbind("ajaxError"+i)}),e=++d.ajaxCounter,d.last.ajaxUrl=f,d.ajaxObject.url=f,d.ajaxObject.success=function(a,b,f){e<d.ajaxCounter||(m(a,c,d,f),g.unbind("ajaxError"+i),"function"==typeof d.oldAjaxSuccess&&d.oldAjaxSuccess(a))},h.debug&&console.log("Pager: Ajax initialized",d.ajaxObject),a.ajax(d.ajaxObject))},o=function(b,c){var d,e,f=b.config,g=c.ajaxUrl?c.ajaxUrl.replace(/\{page([\-+]\d+)?\}/,function(a,b){return c.page+(b?parseInt(b,10):0)}).replace(/\{size\}/g,c.size):"",h=f.sortList,i=c.currentFilters||a(b).data("lastSearch")||[],j=g.match(/\{\s*sort(?:List)?\s*:\s*(\w*)\s*\}/),k=g.match(/\{\s*filter(?:List)?\s*:\s*(\w*)\s*\}/),l=[];if(j){for(j=j[1],e=h.length,d=0;e>d;d++)l[l.length]=j+"["+h[d][0]+"]="+h[d][1];g=g.replace(/\{\s*sort(?:List)?\s*:\s*(\w*)\s*\}/g,l.length?l.join("&"):j),l=[]}if(k){for(k=k[1],e=i.length,d=0;e>d;d++)i[d]&&(l[l.length]=k+"["+d+"]="+encodeURIComponent(i[d]));g=g.replace(/\{\s*filter(?:List)?\s*:\s*(\w*)\s*\}/g,l.length?l.join("&"):k),c.currentFilters=i}return"function"==typeof c.customAjaxUrl&&(g=c.customAjaxUrl(b,g)),f.debug&&console.log("Pager: Ajax url = "+g),g},p=function(c,d,e){var f,h,i,j,l=a(c),m=c.config,n=m.$table.hasClass("hasFilters"),o=d&&d.length||0,p="all"===e.size?e.totalRows:e.size,q=e.page*p;if(1>o)return void(m.debug&&console.warn("Pager: >> No rows for pager to render"));if(e.page>=e.totalPages&&y(c,e),e.cacheIndex=[],e.isDisabled=!1,e.initialized&&(m.debug&&console.log("Pager: Triggering pagerChange"),l.triggerHandler("pagerChange",e)),e.removeRows){for(b.clearTableBody(c),f=b.processTbody(c,m.$tbodies.eq(0),!0),h=n?0:q,i=n?0:q,j=0;p>j&&h<d.length;)n&&/filtered/.test(d[h][0].className)||(i++,i>q&&p>=j&&(j++,e.cacheIndex[e.cacheIndex.length]=h,f.append(d[h]))),h++;b.processTbody(c,f,!1)}else k(c,e);g(c,e),c.isUpdating&&(m.debug&&console.log("Pager: Triggering updateComplete"),l.triggerHandler("updateComplete",[c,!0]))},q=function(c,d){var f,g,h;for(d.ajax?e(c,d,!0):(a.data(c,"pagerLastPage",d.page),a.data(c,"pagerLastSize",d.size),d.page=0,d.size="all",d.totalPages=1,a(c).addClass("pagerDisabled").removeAttr("aria-describedby").find("tr.pagerSavedHeightSpacer").remove(),p(c,c.config.rowsCopy,d),d.isDisabled=!0,b.applyWidget(c),c.config.debug&&console.log("Pager: Disabled")),g=d.$size.add(d.$goto).add(d.$container.find(".ts-startRow, .ts-page")),h=g.length,f=0;h>f;f++)g.eq(f).attr("aria-disabled","true").addClass(d.cssDisabled)[0].disabled=!0},r=function(a){var c=a.config,d=c.pager;b.updateCache(c,function(){var b,e=[],f=a.config.cache[0].normalized;for(d.totalRows=f.length,b=0;b<d.totalRows;b++)e[e.length]=f[b][c.columns].$row;c.rowsCopy=e,s(a,d,!0)})},s=function(c,d,e){if(!d.isDisabled){var g,h=c.config,i=a(c),j=d.last;return e!==!1&&d.initialized&&b.isEmptyObject(h.cache)?r(c):void(d.ajax&&b.hasWidget(c,"filter")&&!h.widgetOptions.filter_initialized||(v(c,d),f(c,d),j.currentFilters=""===(j.currentFilters||[]).join("")?[]:j.currentFilters,d.currentFilters=""===(d.currentFilters||[]).join("")?[]:d.currentFilters,j.page===d.page&&j.size===d.size&&j.totalRows===d.totalRows&&(j.currentFilters||[]).join(",")===(d.currentFilters||[]).join(",")&&(j.ajaxUrl||"")===(d.ajaxObject.url||"")&&(j.optAjaxUrl||"")===(d.ajaxUrl||"")&&j.sortList===(h.sortList||[]).join(",")||(h.debug&&console.log("Pager: Changing to page "+d.page),d.last={page:d.page,size:d.size,sortList:(h.sortList||[]).join(","),totalRows:d.totalRows,currentFilters:d.currentFilters||[],ajaxUrl:d.ajaxObject.url||"",optAjaxUrl:d.ajaxUrl||""},d.ajax?d.processAjaxOnInit||b.isEmptyObject(d.initialRows)?n(c,d):(d.processAjaxOnInit=!0,g=d.initialRows,d.totalRows="undefined"!=typeof g.total?g.total:h.debug?console.error("Pager: no initial total page set!")||0:0,d.filteredRows="undefined"!=typeof g.filtered?g.filtered:h.debug?console.error("Pager: no initial filtered page set!")||0:0,B(c,d)):d.ajax||p(c,h.rowsCopy,d),a.data(c,"pagerLastPage",d.page),d.initialized&&e!==!1&&(h.debug&&console.log("Pager: Triggering pageMoved"),i.triggerHandler("pageMoved",d),b.applyWidget(c),c.isUpdating&&(h.debug&&console.log("Pager: Triggering updateComplete"),i.triggerHandler("updateComplete",[c,!0]))))))}},t=function(a,c){return b.hasWidget(a,"filter")?Math.min(c.totalPages,c.filteredPages):c.totalPages},u=function(a,b,c){var d=parseInt(b,10)||a.size||a.settings.size||10;return/all/i.test(b)||d===a.totalRows?"all":"get"===c?d:a.size},v=function(a,b){var c=t(a,b)-1;return b.page=parseInt(b.page,10),(b.page<0||isNaN(b.page))&&(b.page=0),b.page>c&&c>=0&&(b.page=c),b.page},w=function(b,c,d){d.size=u(d,c,"get"),d.$size.val(u(d,d.size,"set")),a.data(b,"pagerLastPage",v(b,d)),a.data(b,"pagerLastSize",d.size),d.totalPages="all"===d.size?1:Math.ceil(d.totalRows/d.size),d.filteredPages="all"===d.size?1:Math.ceil(d.filteredRows/d.size),s(b,d)},x=function(a,b){b.page=0,s(a,b)},y=function(a,b){b.page=t(a,b)-1,s(a,b)},z=function(a,b){b.page++;var c=t(a,b)-1;b.page>=c&&(b.page=c),s(a,b)},A=function(a,b){b.page--,b.page<=0&&(b.page=0),s(a,b)},B=function(c,d){d.initialized=!0,d.initializing=!1,c.config.debug&&console.log("Pager: Triggering pagerInitialized"),a(c).triggerHandler("pagerInitialized",d),b.applyWidget(c),g(c,d)},C=function(a,c){var d=a.config,e=d.namespace+"pager",f=[c.cssFirst,c.cssPrev,c.cssNext,c.cssLast,c.cssGoto,c.cssPageSize].join(",");q(a,c),c.$container.hide().find(f).unbind(e),d.appender=null,d.$table.unbind(e),b.storage&&b.storage(a,c.storageKey,""),delete d.pager,delete d.rowsCopy},D=function(c,d,e){var f,g,h=c.config;d.$size.add(d.$goto).add(d.$container.find(".ts-startRow, .ts-page")).removeClass(d.cssDisabled).removeAttr("disabled").attr("aria-disabled","false"),d.isDisabled=!1,d.page=a.data(c,"pagerLastPage")||d.page||0,g=d.$size.find("option[selected]").val(),d.size=a.data(c,"pagerLastSize")||u(d,g,"get"),d.$size.val(d.size),d.totalPages="all"===d.size?1:Math.ceil(t(c,d)/d.size),c.id&&(f=c.id+"_pager_info",d.$container.find(d.cssPageDisplay).attr("id",f),h.$table.attr("aria-describedby",f)),j(c,d),e&&(b.update(h),w(c,d.size,d),l(c,d),h.debug&&console.log("Pager: Enabled"))};d.appender=function(b,c){var d=b.config,e=d.pager;e.ajax||(d.rowsCopy=c,e.totalRows=e.countChildRows?d.$tbodies.eq(0).children("tr").length:c.length,e.size=a.data(b,"pagerLastSize")||e.size||e.settings.size||10,e.totalPages="all"===e.size?1:Math.ceil(e.totalRows/e.size),p(b,c,e),g(b,e,!1))},d.construct=function(e){return this.each(function(){if(this.config&&this.hasInitialized){var f,h,i,m=this,n=m.config,o=n.widgetOptions,p=n.pager=a.extend(!0,{},a.tablesorterPager.defaults,e),t=n.$table,v=n.namespace+"pager",B=p.$container=a(p.container).addClass("tablesorter-pager").show();p.settings=a.extend(!0,{},a.tablesorterPager.defaults,e),n.debug&&console.log("Pager: Initializing"),p.oldAjaxSuccess=p.oldAjaxSuccess||p.ajaxObject.success,n.appender=d.appender,p.initializing=!0,p.savePages&&b.storage&&(f=b.storage(m,p.storageKey)||{},p.page=isNaN(f.page)?p.page:f.page,p.size="all"===f.size?f.size:(isNaN(f.size)?p.size:f.size)||p.setSize||10,a.data(m,"pagerLastSize",p.size),B.find(p.cssPageSize).val(p.size)),p.regexRows=new RegExp("("+(o.filter_filteredRow||"filtered")+"|"+n.selectorRemove.slice(1)+"|"+n.cssChildRow+")"),t.unbind(c.split(" ").join(v+" ").replace(/\s+/g," ")).bind("filterInit filterStart ".split(" ").join(v+" "),function(b,c){p.currentFilters=a.isArray(c)?c:n.$table.data("lastSearch"),"filterStart"===b.type&&p.pageReset!==!1&&(n.lastCombinedFilter||"")!==(p.currentFilters||[]).join("")&&(p.page=p.pageReset)}).bind("filterEnd sortEnd ".split(" ").join(v+" "),function(){p.currentFilters=n.$table.data("lastSearch"),(p.initialized||p.initializing)&&(n.delayInit&&n.rowsCopy&&0===n.rowsCopy.length&&r(m),g(m,p,!1),s(m,p,!1),b.applyWidget(m))}).bind("disablePager"+v,function(a){a.stopPropagation(),q(m,p)}).bind("enablePager"+v,function(a){a.stopPropagation(),D(m,p,!0)}).bind("destroyPager"+v,function(a){a.stopPropagation(),C(m,p)}).bind("updateComplete"+v,function(a,b,c){if(a.stopPropagation(),b&&!c&&!p.ajax){var d=n.$tbodies.eq(0).children("tr").not(n.selectorRemove);p.totalRows=d.length-(p.countChildRows?0:d.filter("."+n.cssChildRow).length),p.totalPages="all"===p.size?1:Math.ceil(p.totalRows/p.size),d.length&&n.rowsCopy&&0===n.rowsCopy.length&&r(b),p.page>=p.totalPages&&y(b,p),k(b,p),j(b,p),g(b,p,!0)}}).bind("pageSize refreshComplete ".split(" ").join(v+" "),function(a,b){a.stopPropagation(),w(m,u(p,b,"get"),p),k(m,p),g(m,p,!1)}).bind("pageSet pagerUpdate ".split(" ").join(v+" "),function(a,b){a.stopPropagation(),"pagerUpdate"===a.type&&(b="undefined"==typeof b?p.page+1:b,p.last.page=!0),p.page=(parseInt(b,10)||1)-1,s(m,p,!0),g(m,p,!1)}).bind("pageAndSize"+v,function(a,b,c){a.stopPropagation(),p.page=(parseInt(b,10)||1)-1,w(m,u(p,c,"get"),p),s(m,p,!0),k(m,p),g(m,p,!1)}),h=[p.cssFirst,p.cssPrev,p.cssNext,p.cssLast],i=[x,A,z,y],n.debug&&!B.length&&console.warn("Pager: >> Container not found"),B.find(h.join(",")).attr("tabindex",0).unbind("click"+v).bind("click"+v,function(b){b.stopPropagation();var c,d=a(this),e=h.length;if(!d.hasClass(p.cssDisabled))for(c=0;e>c;c++)if(d.is(h[c])){i[c](m,p);break}}),p.$goto=B.find(p.cssGoto),p.$goto.length?p.$goto.unbind("change"+v).bind("change"+v,function(){p.page=a(this).val()-1,s(m,p,!0),g(m,p,!1)}):n.debug&&console.warn("Pager: >> Goto selector not found"),p.$size=B.find(p.cssPageSize),p.$size.length?(p.$size.find("option").removeAttr("selected"),p.$size.unbind("change"+v).bind("change"+v,function(){if(!a(this).hasClass(p.cssDisabled)){var b=a(this).val();p.$size.val(b),w(m,b,p),j(m,p)}return!1})):n.debug&&console.warn("Pager: >> Size selector not found"),p.initialized=!1,t.triggerHandler("pagerBeforeInitialized",p),D(m,p,!1),"string"==typeof p.ajaxUrl?(p.ajax=!0,n.widgetOptions.filter_serversideFiltering=!0,n.serverSideSorting=!0,s(m,p)):(p.ajax=!1,b.appendCache(n,!0),l(m,p)),p.ajax||p.initialized||(p.initializing=!1,p.initialized=!0,s(m,p),n.debug&&console.log("Pager: Triggering pagerInitialized"),n.$table.triggerHandler("pagerInitialized",p),n.widgetOptions.filter_initialized&&b.hasWidget(m,"filter")||g(m,p,!1)),n.widgetInit.pager=!0}})}}}),b.showError=function(b,c,d,e){var f,g=a(b),h=g[0].config,i=h&&h.widgetOptions,j=h.pager&&h.pager.cssErrorRow||i&&i.pager_css&&i.pager_css.errorRow||"tablesorter-errorRow",k=typeof c,l=!0,m="",n=function(){h.$table.find("thead").find("."+j).remove()};if(!g.length)return void console.error("tablesorter showError: no table parameter passed");if("function"==typeof h.pager.ajaxError){if(l=h.pager.ajaxError(h,c,d,e),l===!1)return n();m=l}else if("function"==typeof i.pager_ajaxError){if(l=i.pager_ajaxError(h,c,d,e),l===!1)return n();m=l}if(""===m)if("object"===k)m=0===c.status?"Not connected, verify Network":404===c.status?"Requested page not found [404]":500===c.status?"Internal Server Error [500]":"parsererror"===e?"Requested JSON parse failed":"timeout"===e?"Time out error":"abort"===e?"Ajax Request aborted":"Uncaught error: "+c.statusText+" ["+c.status+"]";else{if("string"!==k)return n();m=c}f=a(/tr\>/.test(m)?m:'<tr><td colspan="'+h.columns+'">'+m+"</td></tr>").click(function(){a(this).remove()}).appendTo(h.$table.find("thead:first")).addClass(j+" "+h.selectorRemove.slice(1)).attr({role:"alert","aria-live":"assertive"})},a.fn.extend({tablesorterPager:a.tablesorterPager.construct})}(jQuery);
/*! Widget: filter - updated 7/4/2017 (v2.28.15) *//*
 * Requires tablesorter v2.8+ and jQuery 1.7+
 * by Rob Garrison
 */
;( function ( $ ) {
	'use strict';
	var tsf, tsfRegex,
		ts = $.tablesorter || {},
		tscss = ts.css,
		tskeyCodes = ts.keyCodes;

	$.extend( tscss, {
		filterRow      : 'tablesorter-filter-row',
		filter         : 'tablesorter-filter',
		filterDisabled : 'disabled',
		filterRowHide  : 'hideme'
	});

	$.extend( tskeyCodes, {
		backSpace : 8,
		escape : 27,
		space : 32,
		left : 37,
		down : 40
	});

	ts.addWidget({
		id: 'filter',
		priority: 50,
		options : {
			filter_cellFilter    : '',    // css class name added to the filter cell ( string or array )
			filter_childRows     : false, // if true, filter includes child row content in the search
			filter_childByColumn : false, // ( filter_childRows must be true ) if true = search child rows by column; false = search all child row text grouped
			filter_childWithSibs : true,  // if true, include matching child row siblings
			filter_columnAnyMatch: true,  // if true, allows using '#:{query}' in AnyMatch searches ( column:query )
			filter_columnFilters : true,  // if true, a filter will be added to the top of each table column
			filter_cssFilter     : '',    // css class name added to the filter row & each input in the row ( tablesorter-filter is ALWAYS added )
			filter_defaultAttrib : 'data-value', // data attribute in the header cell that contains the default filter value
			filter_defaultFilter : {},    // add a default column filter type '~{query}' to make fuzzy searches default; '{q1} AND {q2}' to make all searches use a logical AND.
			filter_excludeFilter : {},    // filters to exclude, per column
			filter_external      : '',    // jQuery selector string ( or jQuery object ) of external filters
			filter_filteredRow   : 'filtered', // class added to filtered rows; define in css with "display:none" to hide the filtered-out rows
			filter_formatter     : null,  // add custom filter elements to the filter row
			filter_functions     : null,  // add custom filter functions using this option
			filter_hideEmpty     : true,  // hide filter row when table is empty
			filter_hideFilters   : false, // collapse filter row when mouse leaves the area
			filter_ignoreCase    : true,  // if true, make all searches case-insensitive
			filter_liveSearch    : true,  // if true, search column content while the user types ( with a delay )
			filter_matchType     : { 'input': 'exact', 'select': 'exact' }, // global query settings ('exact' or 'match'); overridden by "filter-match" or "filter-exact" class
			filter_onlyAvail     : 'filter-onlyAvail', // a header with a select dropdown & this class name will only show available ( visible ) options within the drop down
			filter_placeholder   : { search : '', select : '' }, // default placeholder text ( overridden by any header 'data-placeholder' setting )
			filter_reset         : null,  // jQuery selector string of an element used to reset the filters
			filter_resetOnEsc    : true,  // Reset filter input when the user presses escape - normalized across browsers
			filter_saveFilters   : false, // Use the $.tablesorter.storage utility to save the most recent filters
			filter_searchDelay   : 300,   // typing delay in milliseconds before starting a search
			filter_searchFiltered: true,  // allow searching through already filtered rows in special circumstances; will speed up searching in large tables if true
			filter_selectSource  : null,  // include a function to return an array of values to be added to the column filter select
			filter_selectSourceSeparator : '|', // filter_selectSource array text left of the separator is added to the option value, right into the option text
			filter_serversideFiltering : false, // if true, must perform server-side filtering b/c client-side filtering is disabled, but the ui and events will still be used.
			filter_startsWith    : false, // if true, filter start from the beginning of the cell contents
			filter_useParsedData : false  // filter all data using parsed content
		},
		format: function( table, c, wo ) {
			if ( !c.$table.hasClass( 'hasFilters' ) ) {
				tsf.init( table, c, wo );
			}
		},
		remove: function( table, c, wo, refreshing ) {
			var tbodyIndex, $tbody,
				$table = c.$table,
				$tbodies = c.$tbodies,
				events = (
					'addRows updateCell update updateRows updateComplete appendCache filterReset ' +
					'filterAndSortReset filterFomatterUpdate filterEnd search stickyHeadersInit '
				).split( ' ' ).join( c.namespace + 'filter ' );
			$table
				.removeClass( 'hasFilters' )
				// add filter namespace to all BUT search
				.unbind( events.replace( ts.regex.spaces, ' ' ) )
				// remove the filter row even if refreshing, because the column might have been moved
				.find( '.' + tscss.filterRow ).remove();
			wo.filter_initialized = false;
			if ( refreshing ) { return; }
			for ( tbodyIndex = 0; tbodyIndex < $tbodies.length; tbodyIndex++ ) {
				$tbody = ts.processTbody( table, $tbodies.eq( tbodyIndex ), true ); // remove tbody
				$tbody.children().removeClass( wo.filter_filteredRow ).show();
				ts.processTbody( table, $tbody, false ); // restore tbody
			}
			if ( wo.filter_reset ) {
				$( document ).undelegate( wo.filter_reset, 'click' + c.namespace + 'filter' );
			}
		}
	});

	tsf = ts.filter = {

		// regex used in filter 'check' functions - not for general use and not documented
		regex: {
			regex     : /^\/((?:\\\/|[^\/])+)\/([migyu]{0,5})?$/, // regex to test for regex
			child     : /tablesorter-childRow/, // child row class name; this gets updated in the script
			filtered  : /filtered/, // filtered (hidden) row class name; updated in the script
			type      : /undefined|number/, // check type
			exact     : /(^[\"\'=]+)|([\"\'=]+$)/g, // exact match (allow '==')
			operators : /[<>=]/g, // replace operators
			query     : '(q|query)', // replace filter queries
			wild01    : /\?/g, // wild card match 0 or 1
			wild0More : /\*/g, // wild care match 0 or more
			quote     : /\"/g,
			isNeg1    : /(>=?\s*-\d)/,
			isNeg2    : /(<=?\s*\d)/
		},
		// function( c, data ) { }
		// c = table.config
		// data.$row = jQuery object of the row currently being processed
		// data.$cells = jQuery object of all cells within the current row
		// data.filters = array of filters for all columns ( some may be undefined )
		// data.filter = filter for the current column
		// data.iFilter = same as data.filter, except lowercase ( if wo.filter_ignoreCase is true )
		// data.exact = table cell text ( or parsed data if column parser enabled; may be a number & not a string )
		// data.iExact = same as data.exact, except lowercase ( if wo.filter_ignoreCase is true; may be a number & not a string )
		// data.cache = table cell text from cache, so it has been parsed ( & in all lower case if c.ignoreCase is true )
		// data.cacheArray = An array of parsed content from each table cell in the row being processed
		// data.index = column index; table = table element ( DOM )
		// data.parsed = array ( by column ) of boolean values ( from filter_useParsedData or 'filter-parsed' class )
		types: {
			or : function( c, data, vars ) {
				// look for "|", but not if it is inside of a regular expression
				if ( ( tsfRegex.orTest.test( data.iFilter ) || tsfRegex.orSplit.test( data.filter ) ) &&
					// this test for regex has potential to slow down the overall search
					!tsfRegex.regex.test( data.filter ) ) {
					var indx, filterMatched, query, regex,
						// duplicate data but split filter
						data2 = $.extend( {}, data ),
						filter = data.filter.split( tsfRegex.orSplit ),
						iFilter = data.iFilter.split( tsfRegex.orSplit ),
						len = filter.length;
					for ( indx = 0; indx < len; indx++ ) {
						data2.nestedFilters = true;
						data2.filter = '' + ( tsf.parseFilter( c, filter[ indx ], data ) || '' );
						data2.iFilter = '' + ( tsf.parseFilter( c, iFilter[ indx ], data ) || '' );
						query = '(' + ( tsf.parseFilter( c, data2.filter, data ) || '' ) + ')';
						try {
							// use try/catch, because query may not be a valid regex if "|" is contained within a partial regex search,
							// e.g "/(Alex|Aar" -> Uncaught SyntaxError: Invalid regular expression: /(/(Alex)/: Unterminated group
							regex = new RegExp( data.isMatch ? query : '^' + query + '$', c.widgetOptions.filter_ignoreCase ? 'i' : '' );
							// filterMatched = data2.filter === '' && indx > 0 ? true
							// look for an exact match with the 'or' unless the 'filter-match' class is found
							filterMatched = regex.test( data2.exact ) || tsf.processTypes( c, data2, vars );
							if ( filterMatched ) {
								return filterMatched;
							}
						} catch ( error ) {
							return null;
						}
					}
					// may be null from processing types
					return filterMatched || false;
				}
				return null;
			},
			// Look for an AND or && operator ( logical and )
			and : function( c, data, vars ) {
				if ( tsfRegex.andTest.test( data.filter ) ) {
					var indx, filterMatched, result, query, regex,
						// duplicate data but split filter
						data2 = $.extend( {}, data ),
						filter = data.filter.split( tsfRegex.andSplit ),
						iFilter = data.iFilter.split( tsfRegex.andSplit ),
						len = filter.length;
					for ( indx = 0; indx < len; indx++ ) {
						data2.nestedFilters = true;
						data2.filter = '' + ( tsf.parseFilter( c, filter[ indx ], data ) || '' );
						data2.iFilter = '' + ( tsf.parseFilter( c, iFilter[ indx ], data ) || '' );
						query = ( '(' + ( tsf.parseFilter( c, data2.filter, data ) || '' ) + ')' )
							// replace wild cards since /(a*)/i will match anything
							.replace( tsfRegex.wild01, '\\S{1}' ).replace( tsfRegex.wild0More, '\\S*' );
						try {
							// use try/catch just in case RegExp is invalid
							regex = new RegExp( data.isMatch ? query : '^' + query + '$', c.widgetOptions.filter_ignoreCase ? 'i' : '' );
							// look for an exact match with the 'and' unless the 'filter-match' class is found
							result = ( regex.test( data2.exact ) || tsf.processTypes( c, data2, vars ) );
							if ( indx === 0 ) {
								filterMatched = result;
							} else {
								filterMatched = filterMatched && result;
							}
						} catch ( error ) {
							return null;
						}
					}
					// may be null from processing types
					return filterMatched || false;
				}
				return null;
			},
			// Look for regex
			regex: function( c, data ) {
				if ( tsfRegex.regex.test( data.filter ) ) {
					var matches,
						// cache regex per column for optimal speed
						regex = data.filter_regexCache[ data.index ] || tsfRegex.regex.exec( data.filter ),
						isRegex = regex instanceof RegExp;
					try {
						if ( !isRegex ) {
							// force case insensitive search if ignoreCase option set?
							// if ( c.ignoreCase && !regex[2] ) { regex[2] = 'i'; }
							data.filter_regexCache[ data.index ] = regex = new RegExp( regex[1], regex[2] );
						}
						matches = regex.test( data.exact );
					} catch ( error ) {
						matches = false;
					}
					return matches;
				}
				return null;
			},
			// Look for operators >, >=, < or <=
			operators: function( c, data ) {
				// ignore empty strings... because '' < 10 is true
				if ( tsfRegex.operTest.test( data.iFilter ) && data.iExact !== '' ) {
					var cachedValue, result, txt,
						table = c.table,
						parsed = data.parsed[ data.index ],
						query = ts.formatFloat( data.iFilter.replace( tsfRegex.operators, '' ), table ),
						parser = c.parsers[ data.index ] || {},
						savedSearch = query;
					// parse filter value in case we're comparing numbers ( dates )
					if ( parsed || parser.type === 'numeric' ) {
						txt = $.trim( '' + data.iFilter.replace( tsfRegex.operators, '' ) );
						result = tsf.parseFilter( c, txt, data, true );
						query = ( typeof result === 'number' && result !== '' && !isNaN( result ) ) ? result : query;
					}
					// iExact may be numeric - see issue #149;
					// check if cached is defined, because sometimes j goes out of range? ( numeric columns )
					if ( ( parsed || parser.type === 'numeric' ) && !isNaN( query ) &&
						typeof data.cache !== 'undefined' ) {
						cachedValue = data.cache;
					} else {
						txt = isNaN( data.iExact ) ? data.iExact.replace( ts.regex.nondigit, '' ) : data.iExact;
						cachedValue = ts.formatFloat( txt, table );
					}
					if ( tsfRegex.gtTest.test( data.iFilter ) ) {
						result = tsfRegex.gteTest.test( data.iFilter ) ? cachedValue >= query : cachedValue > query;
					} else if ( tsfRegex.ltTest.test( data.iFilter ) ) {
						result = tsfRegex.lteTest.test( data.iFilter ) ? cachedValue <= query : cachedValue < query;
					}
					// keep showing all rows if nothing follows the operator
					if ( !result && savedSearch === '' ) {
						result = true;
					}
					return result;
				}
				return null;
			},
			// Look for a not match
			notMatch: function( c, data ) {
				if ( tsfRegex.notTest.test( data.iFilter ) ) {
					var indx,
						txt = data.iFilter.replace( '!', '' ),
						filter = tsf.parseFilter( c, txt, data ) || '';
					if ( tsfRegex.exact.test( filter ) ) {
						// look for exact not matches - see #628
						filter = filter.replace( tsfRegex.exact, '' );
						return filter === '' ? true : $.trim( filter ) !== data.iExact;
					} else {
						indx = data.iExact.search( $.trim( filter ) );
						return filter === '' ? true :
							// return true if not found
							data.anyMatch ? indx < 0 :
							// return false if found
							!( c.widgetOptions.filter_startsWith ? indx === 0 : indx >= 0 );
					}
				}
				return null;
			},
			// Look for quotes or equals to get an exact match; ignore type since iExact could be numeric
			exact: function( c, data ) {
				/*jshint eqeqeq:false */
				if ( tsfRegex.exact.test( data.iFilter ) ) {
					var txt = data.iFilter.replace( tsfRegex.exact, '' ),
						filter = tsf.parseFilter( c, txt, data ) || '';
					return data.anyMatch ? $.inArray( filter, data.rowArray ) >= 0 : filter == data.iExact;
				}
				return null;
			},
			// Look for a range ( using ' to ' or ' - ' ) - see issue #166; thanks matzhu!
			range : function( c, data ) {
				if ( tsfRegex.toTest.test( data.iFilter ) ) {
					var result, tmp, range1, range2,
						table = c.table,
						index = data.index,
						parsed = data.parsed[index],
						// make sure the dash is for a range and not indicating a negative number
						query = data.iFilter.split( tsfRegex.toSplit );

					tmp = query[0].replace( ts.regex.nondigit, '' ) || '';
					range1 = ts.formatFloat( tsf.parseFilter( c, tmp, data ), table );
					tmp = query[1].replace( ts.regex.nondigit, '' ) || '';
					range2 = ts.formatFloat( tsf.parseFilter( c, tmp, data ), table );
					// parse filter value in case we're comparing numbers ( dates )
					if ( parsed || c.parsers[ index ].type === 'numeric' ) {
						result = c.parsers[ index ].format( '' + query[0], table, c.$headers.eq( index ), index );
						range1 = ( result !== '' && !isNaN( result ) ) ? result : range1;
						result = c.parsers[ index ].format( '' + query[1], table, c.$headers.eq( index ), index );
						range2 = ( result !== '' && !isNaN( result ) ) ? result : range2;
					}
					if ( ( parsed || c.parsers[ index ].type === 'numeric' ) && !isNaN( range1 ) && !isNaN( range2 ) ) {
						result = data.cache;
					} else {
						tmp = isNaN( data.iExact ) ? data.iExact.replace( ts.regex.nondigit, '' ) : data.iExact;
						result = ts.formatFloat( tmp, table );
					}
					if ( range1 > range2 ) {
						tmp = range1; range1 = range2; range2 = tmp; // swap
					}
					return ( result >= range1 && result <= range2 ) || ( range1 === '' || range2 === '' );
				}
				return null;
			},
			// Look for wild card: ? = single, * = multiple, or | = logical OR
			wild : function( c, data ) {
				if ( tsfRegex.wildOrTest.test( data.iFilter ) ) {
					var query = '' + ( tsf.parseFilter( c, data.iFilter, data ) || '' );
					// look for an exact match with the 'or' unless the 'filter-match' class is found
					if ( !tsfRegex.wildTest.test( query ) && data.nestedFilters ) {
						query = data.isMatch ? query : '^(' + query + ')$';
					}
					// parsing the filter may not work properly when using wildcards =/
					try {
						return new RegExp(
							query.replace( tsfRegex.wild01, '\\S{1}' ).replace( tsfRegex.wild0More, '\\S*' ),
							c.widgetOptions.filter_ignoreCase ? 'i' : ''
						)
						.test( data.exact );
					} catch ( error ) {
						return null;
					}
				}
				return null;
			},
			// fuzzy text search; modified from https://github.com/mattyork/fuzzy ( MIT license )
			fuzzy: function( c, data ) {
				if ( tsfRegex.fuzzyTest.test( data.iFilter ) ) {
					var indx,
						patternIndx = 0,
						len = data.iExact.length,
						txt = data.iFilter.slice( 1 ),
						pattern = tsf.parseFilter( c, txt, data ) || '';
					for ( indx = 0; indx < len; indx++ ) {
						if ( data.iExact[ indx ] === pattern[ patternIndx ] ) {
							patternIndx += 1;
						}
					}
					return patternIndx === pattern.length;
				}
				return null;
			}
		},
		init: function( table ) {
			// filter language options
			ts.language = $.extend( true, {}, {
				to  : 'to',
				or  : 'or',
				and : 'and'
			}, ts.language );

			var options, string, txt, $header, column, val, fxn, noSelect,
				c = table.config,
				wo = c.widgetOptions;
			c.$table.addClass( 'hasFilters' );
			c.lastSearch = [];

			// define timers so using clearTimeout won't cause an undefined error
			wo.filter_searchTimer = null;
			wo.filter_initTimer = null;
			wo.filter_formatterCount = 0;
			wo.filter_formatterInit = [];
			wo.filter_anyColumnSelector = '[data-column="all"],[data-column="any"]';
			wo.filter_multipleColumnSelector = '[data-column*="-"],[data-column*=","]';

			val = '\\{' + tsfRegex.query + '\\}';
			$.extend( tsfRegex, {
				child : new RegExp( c.cssChildRow ),
				filtered : new RegExp( wo.filter_filteredRow ),
				alreadyFiltered : new RegExp( '(\\s+(' + ts.language.or + '|-|' + ts.language.to + ')\\s+)', 'i' ),
				toTest : new RegExp( '\\s+(-|' + ts.language.to + ')\\s+', 'i' ),
				toSplit : new RegExp( '(?:\\s+(?:-|' + ts.language.to + ')\\s+)', 'gi' ),
				andTest : new RegExp( '\\s+(' + ts.language.and + '|&&)\\s+', 'i' ),
				andSplit : new RegExp( '(?:\\s+(?:' + ts.language.and + '|&&)\\s+)', 'gi' ),
				orTest : new RegExp( '(\\||\\s+' + ts.language.or + '\\s+)', 'i' ),
				orSplit : new RegExp( '(?:\\s+(?:' + ts.language.or + ')\\s+|\\|)', 'gi' ),
				iQuery : new RegExp( val, 'i' ),
				igQuery : new RegExp( val, 'ig' ),
				operTest : /^[<>]=?/,
				gtTest  : />/,
				gteTest : />=/,
				ltTest  : /</,
				lteTest : /<=/,
				notTest : /^\!/,
				wildOrTest : /[\?\*\|]/,
				wildTest : /\?\*/,
				fuzzyTest : /^~/,
				exactTest : /[=\"\|!]/
			});

			// don't build filter row if columnFilters is false or all columns are set to 'filter-false'
			// see issue #156
			val = c.$headers.filter( '.filter-false, .parser-false' ).length;
			if ( wo.filter_columnFilters !== false && val !== c.$headers.length ) {
				// build filter row
				tsf.buildRow( table, c, wo );
			}

			txt = 'addRows updateCell update updateRows updateComplete appendCache filterReset ' +
				'filterAndSortReset filterResetSaved filterEnd search '.split( ' ' ).join( c.namespace + 'filter ' );
			c.$table.bind( txt, function( event, filter ) {
				val = wo.filter_hideEmpty &&
					$.isEmptyObject( c.cache ) &&
					!( c.delayInit && event.type === 'appendCache' );
				// hide filter row using the 'filtered' class name
				c.$table.find( '.' + tscss.filterRow ).toggleClass( wo.filter_filteredRow, val ); // fixes #450
				if ( !/(search|filter)/.test( event.type ) ) {
					event.stopPropagation();
					tsf.buildDefault( table, true );
				}
				// Add filterAndSortReset - see #1361
				if ( event.type === 'filterReset' || event.type === 'filterAndSortReset' ) {
					c.$table.find( '.' + tscss.filter ).add( wo.filter_$externalFilters ).val( '' );
					if ( event.type === 'filterAndSortReset' ) {
						ts.sortReset( this.config, function() {
							tsf.searching( table, [] );
						});
					} else {
						tsf.searching( table, [] );
					}
				} else if ( event.type === 'filterResetSaved' ) {
					ts.storage( table, 'tablesorter-filters', '' );
				} else if ( event.type === 'filterEnd' ) {
					tsf.buildDefault( table, true );
				} else {
					// send false argument to force a new search; otherwise if the filter hasn't changed,
					// it will return
					filter = event.type === 'search' ? filter :
						event.type === 'updateComplete' ? c.$table.data( 'lastSearch' ) : '';
					if ( /(update|add)/.test( event.type ) && event.type !== 'updateComplete' ) {
						// force a new search since content has changed
						c.lastCombinedFilter = null;
						c.lastSearch = [];
						// update filterFormatters after update (& small delay) - Fixes #1237
						setTimeout(function(){
							c.$table.triggerHandler( 'filterFomatterUpdate' );
						}, 100);
					}
					// pass true ( skipFirst ) to prevent the tablesorter.setFilters function from skipping the first
					// input ensures all inputs are updated when a search is triggered on the table
					// $( 'table' ).trigger( 'search', [...] );
					tsf.searching( table, filter, true );
				}
				return false;
			});

			// reset button/link
			if ( wo.filter_reset ) {
				if ( wo.filter_reset instanceof $ ) {
					// reset contains a jQuery object, bind to it
					wo.filter_reset.click( function() {
						c.$table.triggerHandler( 'filterReset' );
					});
				} else if ( $( wo.filter_reset ).length ) {
					// reset is a jQuery selector, use event delegation
					$( document )
						.undelegate( wo.filter_reset, 'click' + c.namespace + 'filter' )
						.delegate( wo.filter_reset, 'click' + c.namespace + 'filter', function() {
							// trigger a reset event, so other functions ( filter_formatter ) know when to reset
							c.$table.triggerHandler( 'filterReset' );
						});
				}
			}
			if ( wo.filter_functions ) {
				for ( column = 0; column < c.columns; column++ ) {
					fxn = ts.getColumnData( table, wo.filter_functions, column );
					if ( fxn ) {
						// remove 'filter-select' from header otherwise the options added here are replaced with
						// all options
						$header = c.$headerIndexed[ column ].removeClass( 'filter-select' );
						// don't build select if 'filter-false' or 'parser-false' set
						noSelect = !( $header.hasClass( 'filter-false' ) || $header.hasClass( 'parser-false' ) );
						options = '';
						if ( fxn === true && noSelect ) {
							tsf.buildSelect( table, column );
						} else if ( typeof fxn === 'object' && noSelect ) {
							// add custom drop down list
							for ( string in fxn ) {
								if ( typeof string === 'string' ) {
									options += options === '' ?
										'<option value="">' +
											( $header.data( 'placeholder' ) ||
												$header.attr( 'data-placeholder' ) ||
												wo.filter_placeholder.select ||
												''
											) +
										'</option>' : '';
									val = string;
									txt = string;
									if ( string.indexOf( wo.filter_selectSourceSeparator ) >= 0 ) {
										val = string.split( wo.filter_selectSourceSeparator );
										txt = val[1];
										val = val[0];
									}
									options += '<option ' +
										( txt === val ? '' : 'data-function-name="' + string + '" ' ) +
										'value="' + val + '">' + txt + '</option>';
								}
							}
							c.$table
								.find( 'thead' )
								.find( 'select.' + tscss.filter + '[data-column="' + column + '"]' )
								.append( options );
							txt = wo.filter_selectSource;
							fxn = typeof txt === 'function' ? true : ts.getColumnData( table, txt, column );
							if ( fxn ) {
								// updating so the extra options are appended
								tsf.buildSelect( c.table, column, '', true, $header.hasClass( wo.filter_onlyAvail ) );
							}
						}
					}
				}
			}
			// not really updating, but if the column has both the 'filter-select' class &
			// filter_functions set to true, it would append the same options twice.
			tsf.buildDefault( table, true );

			tsf.bindSearch( table, c.$table.find( '.' + tscss.filter ), true );
			if ( wo.filter_external ) {
				tsf.bindSearch( table, wo.filter_external );
			}

			if ( wo.filter_hideFilters ) {
				tsf.hideFilters( c );
			}

			// show processing icon
			if ( c.showProcessing ) {
				txt = 'filterStart filterEnd '.split( ' ' ).join( c.namespace + 'filter ' );
				c.$table
					.unbind( txt.replace( ts.regex.spaces, ' ' ) )
					.bind( txt, function( event, columns ) {
					// only add processing to certain columns to all columns
					$header = ( columns ) ?
						c.$table
							.find( '.' + tscss.header )
							.filter( '[data-column]' )
							.filter( function() {
								return columns[ $( this ).data( 'column' ) ] !== '';
							}) : '';
					ts.isProcessing( table, event.type === 'filterStart', columns ? $header : '' );
				});
			}

			// set filtered rows count ( intially unfiltered )
			c.filteredRows = c.totalRows;

			// add default values
			txt = 'tablesorter-initialized pagerBeforeInitialized '.split( ' ' ).join( c.namespace + 'filter ' );
			c.$table
			.unbind( txt.replace( ts.regex.spaces, ' ' ) )
			.bind( txt, function() {
				tsf.completeInit( this );
			});
			// if filter widget is added after pager has initialized; then set filter init flag
			if ( c.pager && c.pager.initialized && !wo.filter_initialized ) {
				c.$table.triggerHandler( 'filterFomatterUpdate' );
				setTimeout( function() {
					tsf.filterInitComplete( c );
				}, 100 );
			} else if ( !wo.filter_initialized ) {
				tsf.completeInit( table );
			}
		},
		completeInit: function( table ) {
			// redefine 'c' & 'wo' so they update properly inside this callback
			var c = table.config,
				wo = c.widgetOptions,
				filters = tsf.setDefaults( table, c, wo ) || [];
			if ( filters.length ) {
				// prevent delayInit from triggering a cache build if filters are empty
				if ( !( c.delayInit && filters.join( '' ) === '' ) ) {
					ts.setFilters( table, filters, true );
				}
			}
			c.$table.triggerHandler( 'filterFomatterUpdate' );
			// trigger init after setTimeout to prevent multiple filterStart/End/Init triggers
			setTimeout( function() {
				if ( !wo.filter_initialized ) {
					tsf.filterInitComplete( c );
				}
			}, 100 );
		},

		// $cell parameter, but not the config, is passed to the filter_formatters,
		// so we have to work with it instead
		formatterUpdated: function( $cell, column ) {
			// prevent error if $cell is undefined - see #1056
			var $table = $cell && $cell.closest( 'table' );
			var config = $table.length && $table[0].config,
				wo = config && config.widgetOptions;
			if ( wo && !wo.filter_initialized ) {
				// add updates by column since this function
				// may be called numerous times before initialization
				wo.filter_formatterInit[ column ] = 1;
			}
		},
		filterInitComplete: function( c ) {
			var indx, len,
				wo = c.widgetOptions,
				count = 0,
				completed = function() {
					wo.filter_initialized = true;
					// update lastSearch - it gets cleared often
					c.lastSearch = c.$table.data( 'lastSearch' );
					c.$table.triggerHandler( 'filterInit', c );
					tsf.findRows( c.table, c.lastSearch || [] );
				};
			if ( $.isEmptyObject( wo.filter_formatter ) ) {
				completed();
			} else {
				len = wo.filter_formatterInit.length;
				for ( indx = 0; indx < len; indx++ ) {
					if ( wo.filter_formatterInit[ indx ] === 1 ) {
						count++;
					}
				}
				clearTimeout( wo.filter_initTimer );
				if ( !wo.filter_initialized && count === wo.filter_formatterCount ) {
					// filter widget initialized
					completed();
				} else if ( !wo.filter_initialized ) {
					// fall back in case a filter_formatter doesn't call
					// $.tablesorter.filter.formatterUpdated( $cell, column ), and the count is off
					wo.filter_initTimer = setTimeout( function() {
						completed();
					}, 500 );
				}
			}
		},
		// encode or decode filters for storage; see #1026
		processFilters: function( filters, encode ) {
			var indx,
				// fixes #1237; previously returning an encoded "filters" value
				result = [],
				mode = encode ? encodeURIComponent : decodeURIComponent,
				len = filters.length;
			for ( indx = 0; indx < len; indx++ ) {
				if ( filters[ indx ] ) {
					result[ indx ] = mode( filters[ indx ] );
				}
			}
			return result;
		},
		setDefaults: function( table, c, wo ) {
			var isArray, saved, indx, col, $filters,
				// get current ( default ) filters
				filters = ts.getFilters( table ) || [];
			if ( wo.filter_saveFilters && ts.storage ) {
				saved = ts.storage( table, 'tablesorter-filters' ) || [];
				isArray = $.isArray( saved );
				// make sure we're not just getting an empty array
				if ( !( isArray && saved.join( '' ) === '' || !isArray ) ) {
					filters = tsf.processFilters( saved );
				}
			}
			// if no filters saved, then check default settings
			if ( filters.join( '' ) === '' ) {
				// allow adding default setting to external filters
				$filters = c.$headers.add( wo.filter_$externalFilters )
					.filter( '[' + wo.filter_defaultAttrib + ']' );
				for ( indx = 0; indx <= c.columns; indx++ ) {
					// include data-column='all' external filters
					col = indx === c.columns ? 'all' : indx;
					filters[ indx ] = $filters
						.filter( '[data-column="' + col + '"]' )
						.attr( wo.filter_defaultAttrib ) || filters[indx] || '';
				}
			}
			c.$table.data( 'lastSearch', filters );
			return filters;
		},
		parseFilter: function( c, filter, data, parsed ) {
			return parsed || data.parsed[ data.index ] ?
				c.parsers[ data.index ].format( filter, c.table, [], data.index ) :
				filter;
		},
		buildRow: function( table, c, wo ) {
			var $filter, col, column, $header, makeSelect, disabled, name, ffxn, tmp,
				// c.columns defined in computeThIndexes()
				cellFilter = wo.filter_cellFilter,
				columns = c.columns,
				arry = $.isArray( cellFilter ),
				buildFilter = '<tr role="row" class="' + tscss.filterRow + ' ' + c.cssIgnoreRow + '">';
			for ( column = 0; column < columns; column++ ) {
				if ( c.$headerIndexed[ column ].length ) {
					// account for entire column set with colspan. See #1047
					tmp = c.$headerIndexed[ column ] && c.$headerIndexed[ column ][0].colSpan || 0;
					if ( tmp > 1 ) {
						buildFilter += '<td data-column="' + column + '-' + ( column + tmp - 1 ) + '" colspan="' + tmp + '"';
					} else {
						buildFilter += '<td data-column="' + column + '"';
					}
					if ( arry ) {
						buildFilter += ( cellFilter[ column ] ? ' class="' + cellFilter[ column ] + '"' : '' );
					} else {
						buildFilter += ( cellFilter !== '' ? ' class="' + cellFilter + '"' : '' );
					}
					buildFilter += '></td>';
				}
			}
			c.$filters = $( buildFilter += '</tr>' )
				.appendTo( c.$table.children( 'thead' ).eq( 0 ) )
				.children( 'td' );
			// build each filter input
			for ( column = 0; column < columns; column++ ) {
				disabled = false;
				// assuming last cell of a column is the main column
				$header = c.$headerIndexed[ column ];
				if ( $header && $header.length ) {
					// $filter = c.$filters.filter( '[data-column="' + column + '"]' );
					$filter = tsf.getColumnElm( c, c.$filters, column );
					ffxn = ts.getColumnData( table, wo.filter_functions, column );
					makeSelect = ( wo.filter_functions && ffxn && typeof ffxn !== 'function' ) ||
						$header.hasClass( 'filter-select' );
					// get data from jQuery data, metadata, headers option or header class name
					col = ts.getColumnData( table, c.headers, column );
					disabled = ts.getData( $header[0], col, 'filter' ) === 'false' ||
						ts.getData( $header[0], col, 'parser' ) === 'false';

					if ( makeSelect ) {
						buildFilter = $( '<select>' ).appendTo( $filter );
					} else {
						ffxn = ts.getColumnData( table, wo.filter_formatter, column );
						if ( ffxn ) {
							wo.filter_formatterCount++;
							buildFilter = ffxn( $filter, column );
							// no element returned, so lets go find it
							if ( buildFilter && buildFilter.length === 0 ) {
								buildFilter = $filter.children( 'input' );
							}
							// element not in DOM, so lets attach it
							if ( buildFilter && ( buildFilter.parent().length === 0 ||
								( buildFilter.parent().length && buildFilter.parent()[0] !== $filter[0] ) ) ) {
								$filter.append( buildFilter );
							}
						} else {
							buildFilter = $( '<input type="search">' ).appendTo( $filter );
						}
						if ( buildFilter ) {
							tmp = $header.data( 'placeholder' ) ||
								$header.attr( 'data-placeholder' ) ||
								wo.filter_placeholder.search || '';
							buildFilter.attr( 'placeholder', tmp );
						}
					}
					if ( buildFilter ) {
						// add filter class name
						name = ( $.isArray( wo.filter_cssFilter ) ?
							( typeof wo.filter_cssFilter[column] !== 'undefined' ? wo.filter_cssFilter[column] || '' : '' ) :
							wo.filter_cssFilter ) || '';
						// copy data-column from table cell (it will include colspan)
						buildFilter.addClass( tscss.filter + ' ' + name ).attr( 'data-column', $filter.attr( 'data-column' ) );
						if ( disabled ) {
							buildFilter.attr( 'placeholder', '' ).addClass( tscss.filterDisabled )[0].disabled = true;
						}
					}
				}
			}
		},
		bindSearch: function( table, $el, internal ) {
			table = $( table )[0];
			$el = $( $el ); // allow passing a selector string
			if ( !$el.length ) { return; }
			var tmp,
				c = table.config,
				wo = c.widgetOptions,
				namespace = c.namespace + 'filter',
				$ext = wo.filter_$externalFilters;
			if ( internal !== true ) {
				// save anyMatch element
				tmp = wo.filter_anyColumnSelector + ',' + wo.filter_multipleColumnSelector;
				wo.filter_$anyMatch = $el.filter( tmp );
				if ( $ext && $ext.length ) {
					wo.filter_$externalFilters = wo.filter_$externalFilters.add( $el );
				} else {
					wo.filter_$externalFilters = $el;
				}
				// update values ( external filters added after table initialization )
				ts.setFilters( table, c.$table.data( 'lastSearch' ) || [], internal === false );
			}
			// unbind events
			tmp = ( 'keypress keyup keydown search change input '.split( ' ' ).join( namespace + ' ' ) );
			$el
			// use data attribute instead of jQuery data since the head is cloned without including
			// the data/binding
			.attr( 'data-lastSearchTime', new Date().getTime() )
			.unbind( tmp.replace( ts.regex.spaces, ' ' ) )
			.bind( 'keydown' + namespace, function( event ) {
				if ( event.which === tskeyCodes.escape && !table.config.widgetOptions.filter_resetOnEsc ) {
					// prevent keypress event
					return false;
				}
			})
			.bind( 'keyup' + namespace, function( event ) {
				wo = table.config.widgetOptions; // make sure "wo" isn't cached
				var column = parseInt( $( this ).attr( 'data-column' ), 10 ),
					liveSearch = typeof wo.filter_liveSearch === 'boolean' ? wo.filter_liveSearch :
						ts.getColumnData( table, wo.filter_liveSearch, column );
				if ( typeof liveSearch === 'undefined' ) {
					liveSearch = wo.filter_liveSearch.fallback || false;
				}
				$( this ).attr( 'data-lastSearchTime', new Date().getTime() );
				// emulate what webkit does.... escape clears the filter
				if ( event.which === tskeyCodes.escape ) {
					// make sure to restore the last value on escape
					this.value = wo.filter_resetOnEsc ? '' : c.lastSearch[column];
					// don't return if the search value is empty ( all rows need to be revealed )
				} else if ( this.value !== '' && (
					// liveSearch can contain a min value length; ignore arrow and meta keys, but allow backspace
					( typeof liveSearch === 'number' && this.value.length < liveSearch ) ||
					// let return & backspace continue on, but ignore arrows & non-valid characters
					( event.which !== tskeyCodes.enter && event.which !== tskeyCodes.backSpace &&
						( event.which < tskeyCodes.space || ( event.which >= tskeyCodes.left && event.which <= tskeyCodes.down ) ) ) ) ) {
					return;
					// live search
				} else if ( liveSearch === false ) {
					if ( this.value !== '' && event.which !== tskeyCodes.enter ) {
						return;
					}
				}
				// change event = no delay; last true flag tells getFilters to skip newest timed input
				tsf.searching( table, true, true, column );
			})
			// include change for select - fixes #473
			.bind( 'search change keypress input blur '.split( ' ' ).join( namespace + ' ' ), function( event ) {
				// don't get cached data, in case data-column changes dynamically
				var column = parseInt( $( this ).attr( 'data-column' ), 10 ),
					eventType = event.type,
					liveSearch = typeof wo.filter_liveSearch === 'boolean' ?
						wo.filter_liveSearch :
						ts.getColumnData( table, wo.filter_liveSearch, column );
				if ( table.config.widgetOptions.filter_initialized &&
					// immediate search if user presses enter
					( event.which === tskeyCodes.enter ||
						// immediate search if a "search" or "blur" is triggered on the input
						( eventType === 'search' || eventType === 'blur' ) ||
						// change & input events must be ignored if liveSearch !== true
						( eventType === 'change' || eventType === 'input' ) &&
						// prevent search if liveSearch is a number
						( liveSearch === true || liveSearch !== true && event.target.nodeName !== 'INPUT' ) &&
						// don't allow 'change' or 'input' event to process if the input value
						// is the same - fixes #685
						this.value !== c.lastSearch[column]
					)
				) {
					event.preventDefault();
					// init search with no delay
					$( this ).attr( 'data-lastSearchTime', new Date().getTime() );
					tsf.searching( table, eventType !== 'keypress', true, column );
				}
			});
		},
		searching: function( table, filter, skipFirst, column ) {
			var liveSearch,
				wo = table.config.widgetOptions;
			if (typeof column === 'undefined') {
				// no delay
				liveSearch = false;
			} else {
				liveSearch = typeof wo.filter_liveSearch === 'boolean' ?
					wo.filter_liveSearch :
					// get column setting, or set to fallback value, or default to false
					ts.getColumnData( table, wo.filter_liveSearch, column );
				if ( typeof liveSearch === 'undefined' ) {
					liveSearch = wo.filter_liveSearch.fallback || false;
				}
			}
			clearTimeout( wo.filter_searchTimer );
			if ( typeof filter === 'undefined' || filter === true ) {
				// delay filtering
				wo.filter_searchTimer = setTimeout( function() {
					tsf.checkFilters( table, filter, skipFirst );
				}, liveSearch ? wo.filter_searchDelay : 10 );
			} else {
				// skip delay
				tsf.checkFilters( table, filter, skipFirst );
			}
		},
		equalFilters: function (c, filter1, filter2) {
			var indx,
				f1 = [],
				f2 = [],
				len = c.columns + 1; // add one to include anyMatch filter
			filter1 = $.isArray(filter1) ? filter1 : [];
			filter2 = $.isArray(filter2) ? filter2 : [];
			for (indx = 0; indx < len; indx++) {
				f1[indx] = filter1[indx] || '';
				f2[indx] = filter2[indx] || '';
			}
			return f1.join(',') === f2.join(',');
		},
		checkFilters: function( table, filter, skipFirst ) {
			var c = table.config,
				wo = c.widgetOptions,
				filterArray = $.isArray( filter ),
				filters = ( filterArray ) ? filter : ts.getFilters( table, true ),
				currentFilters = filters || []; // current filter values
			// prevent errors if delay init is set
			if ( $.isEmptyObject( c.cache ) ) {
				// update cache if delayInit set & pager has initialized ( after user initiates a search )
				if ( c.delayInit && ( !c.pager || c.pager && c.pager.initialized ) ) {
					ts.updateCache( c, function() {
						tsf.checkFilters( table, false, skipFirst );
					});
				}
				return;
			}
			// add filter array back into inputs
			if ( filterArray ) {
				ts.setFilters( table, filters, false, skipFirst !== true );
				if ( !wo.filter_initialized ) {
					c.lastSearch = [];
					c.lastCombinedFilter = '';
				}
			}
			if ( wo.filter_hideFilters ) {
				// show/hide filter row as needed
				c.$table
					.find( '.' + tscss.filterRow )
					.triggerHandler( tsf.hideFiltersCheck( c ) ? 'mouseleave' : 'mouseenter' );
			}
			// return if the last search is the same; but filter === false when updating the search
			// see example-widget-filter.html filter toggle buttons
			if ( tsf.equalFilters(c, c.lastSearch, currentFilters) && filter !== false ) {
				return;
			} else if ( filter === false ) {
				// force filter refresh
				c.lastCombinedFilter = '';
				c.lastSearch = [];
			}
			// define filter inside it is false
			filters = filters || [];
			// convert filters to strings - see #1070
			filters = Array.prototype.map ?
				filters.map( String ) :
				// for IE8 & older browsers - maybe not the best method
				filters.join( '\ufffd' ).split( '\ufffd' );

			if ( wo.filter_initialized ) {
				c.$table.triggerHandler( 'filterStart', [ filters ] );
			}
			if ( c.showProcessing ) {
				// give it time for the processing icon to kick in
				setTimeout( function() {
					tsf.findRows( table, filters, currentFilters );
					return false;
				}, 30 );
			} else {
				tsf.findRows( table, filters, currentFilters );
				return false;
			}
		},
		hideFiltersCheck: function( c ) {
			if (typeof c.widgetOptions.filter_hideFilters === 'function') {
				var val = c.widgetOptions.filter_hideFilters( c );
				if (typeof val === 'boolean') {
					return val;
				}
			}
			return ts.getFilters( c.$table ).join( '' ) === '';
		},
		hideFilters: function( c, $table ) {
			var timer;
			( $table || c.$table )
				.find( '.' + tscss.filterRow )
				.addClass( tscss.filterRowHide )
				.bind( 'mouseenter mouseleave', function( e ) {
					// save event object - http://bugs.jquery.com/ticket/12140
					var event = e,
						$row = $( this );
					clearTimeout( timer );
					timer = setTimeout( function() {
						if ( /enter|over/.test( event.type ) ) {
							$row.removeClass( tscss.filterRowHide );
						} else {
							// don't hide if input has focus
							// $( ':focus' ) needs jQuery 1.6+
							if ( $( document.activeElement ).closest( 'tr' )[0] !== $row[0] ) {
								// don't hide row if any filter has a value
								$row.toggleClass( tscss.filterRowHide, tsf.hideFiltersCheck( c ) );
							}
						}
					}, 200 );
				})
				.find( 'input, select' ).bind( 'focus blur', function( e ) {
					var event = e,
						$row = $( this ).closest( 'tr' );
					clearTimeout( timer );
					timer = setTimeout( function() {
						clearTimeout( timer );
						// don't hide row if any filter has a value
						$row.toggleClass( tscss.filterRowHide, tsf.hideFiltersCheck( c ) && event.type !== 'focus' );
					}, 200 );
				});
		},
		defaultFilter: function( filter, mask ) {
			if ( filter === '' ) { return filter; }
			var regex = tsfRegex.iQuery,
				maskLen = mask.match( tsfRegex.igQuery ).length,
				query = maskLen > 1 ? $.trim( filter ).split( /\s/ ) : [ $.trim( filter ) ],
				len = query.length - 1,
				indx = 0,
				val = mask;
			if ( len < 1 && maskLen > 1 ) {
				// only one 'word' in query but mask has >1 slots
				query[1] = query[0];
			}
			// replace all {query} with query words...
			// if query = 'Bob', then convert mask from '!{query}' to '!Bob'
			// if query = 'Bob Joe Frank', then convert mask '{q} OR {q}' to 'Bob OR Joe OR Frank'
			while ( regex.test( val ) ) {
				val = val.replace( regex, query[indx++] || '' );
				if ( regex.test( val ) && indx < len && ( query[indx] || '' ) !== '' ) {
					val = mask.replace( regex, val );
				}
			}
			return val;
		},
		getLatestSearch: function( $input ) {
			if ( $input ) {
				return $input.sort( function( a, b ) {
					return $( b ).attr( 'data-lastSearchTime' ) - $( a ).attr( 'data-lastSearchTime' );
				});
			}
			return $input || $();
		},
		findRange: function( c, val, ignoreRanges ) {
			// look for multiple columns '1-3,4-6,8' in data-column
			var temp, ranges, range, start, end, singles, i, indx, len,
				columns = [];
			if ( /^[0-9]+$/.test( val ) ) {
				// always return an array
				return [ parseInt( val, 10 ) ];
			}
			// process column range
			if ( !ignoreRanges && /-/.test( val ) ) {
				ranges = val.match( /(\d+)\s*-\s*(\d+)/g );
				len = ranges ? ranges.length : 0;
				for ( indx = 0; indx < len; indx++ ) {
					range = ranges[indx].split( /\s*-\s*/ );
					start = parseInt( range[0], 10 ) || 0;
					end = parseInt( range[1], 10 ) || ( c.columns - 1 );
					if ( start > end ) {
						temp = start; start = end; end = temp; // swap
					}
					if ( end >= c.columns ) {
						end = c.columns - 1;
					}
					for ( ; start <= end; start++ ) {
						columns[ columns.length ] = start;
					}
					// remove processed range from val
					val = val.replace( ranges[ indx ], '' );
				}
			}
			// process single columns
			if ( !ignoreRanges && /,/.test( val ) ) {
				singles = val.split( /\s*,\s*/ );
				len = singles.length;
				for ( i = 0; i < len; i++ ) {
					if ( singles[ i ] !== '' ) {
						indx = parseInt( singles[ i ], 10 );
						if ( indx < c.columns ) {
							columns[ columns.length ] = indx;
						}
					}
				}
			}
			// return all columns
			if ( !columns.length ) {
				for ( indx = 0; indx < c.columns; indx++ ) {
					columns[ columns.length ] = indx;
				}
			}
			return columns;
		},
		getColumnElm: function( c, $elements, column ) {
			// data-column may contain multiple columns '1-3,5-6,8'
			// replaces: c.$filters.filter( '[data-column="' + column + '"]' );
			return $elements.filter( function() {
				var cols = tsf.findRange( c, $( this ).attr( 'data-column' ) );
				return $.inArray( column, cols ) > -1;
			});
		},
		multipleColumns: function( c, $input ) {
			// look for multiple columns '1-3,4-6,8' in data-column
			var wo = c.widgetOptions,
				// only target 'all' column inputs on initialization
				// & don't target 'all' column inputs if they don't exist
				targets = wo.filter_initialized || !$input.filter( wo.filter_anyColumnSelector ).length,
				val = $.trim( tsf.getLatestSearch( $input ).attr( 'data-column' ) || '' );
			return tsf.findRange( c, val, !targets );
		},
		processTypes: function( c, data, vars ) {
			var ffxn,
				filterMatched = null,
				matches = null;
			for ( ffxn in tsf.types ) {
				if ( $.inArray( ffxn, vars.excludeMatch ) < 0 && matches === null ) {
					matches = tsf.types[ffxn]( c, data, vars );
					if ( matches !== null ) {
						filterMatched = matches;
					}
				}
			}
			return filterMatched;
		},
		matchType: function( c, columnIndex ) {
			var isMatch,
				wo = c.widgetOptions,
				$el = c.$headerIndexed[ columnIndex ];
			// filter-exact > filter-match > filter_matchType for type
			if ( $el.hasClass( 'filter-exact' ) ) {
				isMatch = false;
			} else if ( $el.hasClass( 'filter-match' ) ) {
				isMatch = true;
			} else {
				// filter-select is not applied when filter_functions are used, so look for a select
				if ( wo.filter_columnFilters ) {
					$el = c.$filters
						.find( '.' + tscss.filter )
						.add( wo.filter_$externalFilters )
						.filter( '[data-column="' + columnIndex + '"]' );
				} else if ( wo.filter_$externalFilters ) {
					$el = wo.filter_$externalFilters.filter( '[data-column="' + columnIndex + '"]' );
				}
				isMatch = $el.length ?
					c.widgetOptions.filter_matchType[ ( $el[ 0 ].nodeName || '' ).toLowerCase() ] === 'match' :
					// default to exact, if no inputs found
					false;
			}
			return isMatch;
		},
		processRow: function( c, data, vars ) {
			var result, filterMatched,
				fxn, ffxn, txt,
				wo = c.widgetOptions,
				showRow = true,
				hasAnyMatchInput = wo.filter_$anyMatch && wo.filter_$anyMatch.length,

				// if wo.filter_$anyMatch data-column attribute is changed dynamically
				// we don't want to do an "anyMatch" search on one column using data
				// for the entire row - see #998
				columnIndex = wo.filter_$anyMatch && wo.filter_$anyMatch.length ?
					// look for multiple columns '1-3,4-6,8'
					tsf.multipleColumns( c, wo.filter_$anyMatch ) :
					[];
			data.$cells = data.$row.children();
			if ( data.anyMatchFlag && columnIndex.length > 1 || ( data.anyMatchFilter && !hasAnyMatchInput ) ) {
				data.anyMatch = true;
				data.isMatch = true;
				data.rowArray = data.$cells.map( function( i ) {
					if ( $.inArray( i, columnIndex ) > -1 || ( data.anyMatchFilter && !hasAnyMatchInput ) ) {
						if ( data.parsed[ i ] ) {
							txt = data.cacheArray[ i ];
						} else {
							txt = data.rawArray[ i ];
							txt = $.trim( wo.filter_ignoreCase ? txt.toLowerCase() : txt );
							if ( c.sortLocaleCompare ) {
								txt = ts.replaceAccents( txt );
							}
						}
						return txt;
					}
				}).get();
				data.filter = data.anyMatchFilter;
				data.iFilter = data.iAnyMatchFilter;
				data.exact = data.rowArray.join( ' ' );
				data.iExact = wo.filter_ignoreCase ? data.exact.toLowerCase() : data.exact;
				data.cache = data.cacheArray.slice( 0, -1 ).join( ' ' );
				vars.excludeMatch = vars.noAnyMatch;
				filterMatched = tsf.processTypes( c, data, vars );
				if ( filterMatched !== null ) {
					showRow = filterMatched;
				} else {
					if ( wo.filter_startsWith ) {
						showRow = false;
						// data.rowArray may not contain all columns
						columnIndex = Math.min( c.columns, data.rowArray.length );
						while ( !showRow && columnIndex > 0 ) {
							columnIndex--;
							showRow = showRow || data.rowArray[ columnIndex ].indexOf( data.iFilter ) === 0;
						}
					} else {
						showRow = ( data.iExact + data.childRowText ).indexOf( data.iFilter ) >= 0;
					}
				}
				data.anyMatch = false;
				// no other filters to process
				if ( data.filters.join( '' ) === data.filter ) {
					return showRow;
				}
			}

			for ( columnIndex = 0; columnIndex < c.columns; columnIndex++ ) {
				data.filter = data.filters[ columnIndex ];
				data.index = columnIndex;

				// filter types to exclude, per column
				vars.excludeMatch = vars.excludeFilter[ columnIndex ];

				// ignore if filter is empty or disabled
				if ( data.filter ) {
					data.cache = data.cacheArray[ columnIndex ];
					result = data.parsed[ columnIndex ] ? data.cache : data.rawArray[ columnIndex ] || '';
					data.exact = c.sortLocaleCompare ? ts.replaceAccents( result ) : result; // issue #405
					data.iExact = !tsfRegex.type.test( typeof data.exact ) && wo.filter_ignoreCase ?
						data.exact.toLowerCase() : data.exact;
					data.isMatch = tsf.matchType( c, columnIndex );

					result = showRow; // if showRow is true, show that row

					// in case select filter option has a different value vs text 'a - z|A through Z'
					ffxn = wo.filter_columnFilters ?
						c.$filters.add( wo.filter_$externalFilters )
							.filter( '[data-column="' + columnIndex + '"]' )
							.find( 'select option:selected' )
							.attr( 'data-function-name' ) || '' : '';
					// replace accents - see #357
					if ( c.sortLocaleCompare ) {
						data.filter = ts.replaceAccents( data.filter );
					}

					// replace column specific default filters - see #1088
					if ( wo.filter_defaultFilter && tsfRegex.iQuery.test( vars.defaultColFilter[ columnIndex ] ) ) {
						data.filter = tsf.defaultFilter( data.filter, vars.defaultColFilter[ columnIndex ] );
					}

					// data.iFilter = case insensitive ( if wo.filter_ignoreCase is true ),
					// data.filter = case sensitive
					data.iFilter = wo.filter_ignoreCase ? ( data.filter || '' ).toLowerCase() : data.filter;
					fxn = vars.functions[ columnIndex ];
					filterMatched = null;
					if ( fxn ) {
						if ( typeof fxn === 'function' ) {
							// filter callback( exact cell content, parser normalized content,
							// filter input value, column index, jQuery row object )
							filterMatched = fxn( data.exact, data.cache, data.filter, columnIndex, data.$row, c, data );
						} else if ( typeof fxn[ ffxn || data.filter ] === 'function' ) {
							// selector option function
							txt = ffxn || data.filter;
							filterMatched =
								fxn[ txt ]( data.exact, data.cache, data.filter, columnIndex, data.$row, c, data );
						}
					}
					if ( filterMatched === null ) {
						// cycle through the different filters
						// filters return a boolean or null if nothing matches
						filterMatched = tsf.processTypes( c, data, vars );
						if ( filterMatched !== null ) {
							result = filterMatched;
						// Look for match, and add child row data for matching
						} else {
							// check fxn (filter-select in header) after filter types are checked
							// without this, the filter + jQuery UI selectmenu demo was breaking
							if ( fxn === true ) {
								// default selector uses exact match unless 'filter-match' class is found
								result = data.isMatch ?
									// data.iExact may be a number
									( '' + data.iExact ).search( data.iFilter ) >= 0 :
									data.filter === data.exact;
							} else {
								txt = ( data.iExact + data.childRowText ).indexOf( tsf.parseFilter( c, data.iFilter, data ) );
								result = ( ( !wo.filter_startsWith && txt >= 0 ) || ( wo.filter_startsWith && txt === 0 ) );
							}
						}
					} else {
						result = filterMatched;
					}
					showRow = ( result ) ? showRow : false;
				}
			}
			return showRow;
		},
		findRows: function( table, filters, currentFilters ) {
			if (
				tsf.equalFilters(table.config, table.config.lastSearch, currentFilters) ||
				!table.config.widgetOptions.filter_initialized
			) {
				return;
			}
			var len, norm_rows, rowData, $rows, $row, rowIndex, tbodyIndex, $tbody, columnIndex,
				isChild, childRow, lastSearch, showRow, showParent, time, val, indx,
				notFiltered, searchFiltered, query, injected, res, id, txt,
				storedFilters = $.extend( [], filters ),
				c = table.config,
				wo = c.widgetOptions,
				// data object passed to filters; anyMatch is a flag for the filters
				data = {
					anyMatch: false,
					filters: filters,
					// regex filter type cache
					filter_regexCache : []
				},
				vars = {
					// anyMatch really screws up with these types of filters
					noAnyMatch: [ 'range',  'operators' ],
					// cache filter variables that use ts.getColumnData in the main loop
					functions : [],
					excludeFilter : [],
					defaultColFilter : [],
					defaultAnyFilter : ts.getColumnData( table, wo.filter_defaultFilter, c.columns, true ) || ''
				};

			// parse columns after formatter, in case the class is added at that point
			data.parsed = [];
			for ( columnIndex = 0; columnIndex < c.columns; columnIndex++ ) {
				data.parsed[ columnIndex ] = wo.filter_useParsedData ||
					// parser has a "parsed" parameter
					( c.parsers && c.parsers[ columnIndex ] && c.parsers[ columnIndex ].parsed ||
					// getData may not return 'parsed' if other 'filter-' class names exist
					// ( e.g. <th class="filter-select filter-parsed"> )
					ts.getData && ts.getData( c.$headerIndexed[ columnIndex ],
						ts.getColumnData( table, c.headers, columnIndex ), 'filter' ) === 'parsed' ||
					c.$headerIndexed[ columnIndex ].hasClass( 'filter-parsed' ) );

				vars.functions[ columnIndex ] =
					ts.getColumnData( table, wo.filter_functions, columnIndex ) ||
					c.$headerIndexed[ columnIndex ].hasClass( 'filter-select' );
				vars.defaultColFilter[ columnIndex ] =
					ts.getColumnData( table, wo.filter_defaultFilter, columnIndex ) || '';
				vars.excludeFilter[ columnIndex ] =
					( ts.getColumnData( table, wo.filter_excludeFilter, columnIndex, true ) || '' ).split( /\s+/ );
			}

			if ( c.debug ) {
				console.log( 'Filter: Starting filter widget search', filters );
				time = new Date();
			}
			// filtered rows count
			c.filteredRows = 0;
			c.totalRows = 0;
			currentFilters = ( storedFilters || [] );

			for ( tbodyIndex = 0; tbodyIndex < c.$tbodies.length; tbodyIndex++ ) {
				$tbody = ts.processTbody( table, c.$tbodies.eq( tbodyIndex ), true );
				// skip child rows & widget added ( removable ) rows - fixes #448 thanks to @hempel!
				// $rows = $tbody.children( 'tr' ).not( c.selectorRemove );
				columnIndex = c.columns;
				// convert stored rows into a jQuery object
				norm_rows = c.cache[ tbodyIndex ].normalized;
				$rows = $( $.map( norm_rows, function( el ) {
					return el[ columnIndex ].$row.get();
				}) );

				if ( currentFilters.join('') === '' || wo.filter_serversideFiltering ) {
					$rows
						.removeClass( wo.filter_filteredRow )
						.not( '.' + c.cssChildRow )
						.css( 'display', '' );
				} else {
					// filter out child rows
					$rows = $rows.not( '.' + c.cssChildRow );
					len = $rows.length;

					if ( ( wo.filter_$anyMatch && wo.filter_$anyMatch.length ) ||
						typeof filters[c.columns] !== 'undefined' ) {
						data.anyMatchFlag = true;
						data.anyMatchFilter = '' + (
							filters[ c.columns ] ||
							wo.filter_$anyMatch && tsf.getLatestSearch( wo.filter_$anyMatch ).val() ||
							''
						);
						if ( wo.filter_columnAnyMatch ) {
							// specific columns search
							query = data.anyMatchFilter.split( tsfRegex.andSplit );
							injected = false;
							for ( indx = 0; indx < query.length; indx++ ) {
								res = query[ indx ].split( ':' );
								if ( res.length > 1 ) {
									// make the column a one-based index ( non-developers start counting from one :P )
									if ( isNaN( res[0] ) ) {
										$.each( c.headerContent, function( i, txt ) {
											// multiple matches are possible
											if ( txt.toLowerCase().indexOf( res[0] ) > -1 ) {
												id = i;
												filters[ id ] = res[1];
											}
										});
									} else {
										id = parseInt( res[0], 10 ) - 1;
									}
									if ( id >= 0 && id < c.columns ) { // if id is an integer
										filters[ id ] = res[1];
										query.splice( indx, 1 );
										indx--;
										injected = true;
									}
								}
							}
							if ( injected ) {
								data.anyMatchFilter = query.join( ' && ' );
							}
						}
					}

					// optimize searching only through already filtered rows - see #313
					searchFiltered = wo.filter_searchFiltered;
					lastSearch = c.lastSearch || c.$table.data( 'lastSearch' ) || [];
					if ( searchFiltered ) {
						// cycle through all filters; include last ( columnIndex + 1 = match any column ). Fixes #669
						for ( indx = 0; indx < columnIndex + 1; indx++ ) {
							val = filters[indx] || '';
							// break out of loop if we've already determined not to search filtered rows
							if ( !searchFiltered ) { indx = columnIndex; }
							// search already filtered rows if...
							searchFiltered = searchFiltered && lastSearch.length &&
								// there are no changes from beginning of filter
								val.indexOf( lastSearch[indx] || '' ) === 0 &&
								// if there is NOT a logical 'or', or range ( 'to' or '-' ) in the string
								!tsfRegex.alreadyFiltered.test( val ) &&
								// if we are not doing exact matches, using '|' ( logical or ) or not '!'
								!tsfRegex.exactTest.test( val ) &&
								// don't search only filtered if the value is negative
								// ( '> -10' => '> -100' will ignore hidden rows )
								!( tsfRegex.isNeg1.test( val ) || tsfRegex.isNeg2.test( val ) ) &&
								// if filtering using a select without a 'filter-match' class ( exact match ) - fixes #593
								!( val !== '' && c.$filters && c.$filters.filter( '[data-column="' + indx + '"]' ).find( 'select' ).length &&
									!tsf.matchType( c, indx ) );
						}
					}
					notFiltered = $rows.not( '.' + wo.filter_filteredRow ).length;
					// can't search when all rows are hidden - this happens when looking for exact matches
					if ( searchFiltered && notFiltered === 0 ) { searchFiltered = false; }
					if ( c.debug ) {
						console.log( 'Filter: Searching through ' +
							( searchFiltered && notFiltered < len ? notFiltered : 'all' ) + ' rows' );
					}
					if ( data.anyMatchFlag ) {
						if ( c.sortLocaleCompare ) {
							// replace accents
							data.anyMatchFilter = ts.replaceAccents( data.anyMatchFilter );
						}
						if ( wo.filter_defaultFilter && tsfRegex.iQuery.test( vars.defaultAnyFilter ) ) {
							data.anyMatchFilter = tsf.defaultFilter( data.anyMatchFilter, vars.defaultAnyFilter );
							// clear search filtered flag because default filters are not saved to the last search
							searchFiltered = false;
						}
						// make iAnyMatchFilter lowercase unless both filter widget & core ignoreCase options are true
						// when c.ignoreCase is true, the cache contains all lower case data
						data.iAnyMatchFilter = !( wo.filter_ignoreCase && c.ignoreCase ) ?
							data.anyMatchFilter :
							data.anyMatchFilter.toLowerCase();
					}

					// loop through the rows
					for ( rowIndex = 0; rowIndex < len; rowIndex++ ) {

						txt = $rows[ rowIndex ].className;
						// the first row can never be a child row
						isChild = rowIndex && tsfRegex.child.test( txt );
						// skip child rows & already filtered rows
						if ( isChild || ( searchFiltered && tsfRegex.filtered.test( txt ) ) ) {
							continue;
						}

						data.$row = $rows.eq( rowIndex );
						data.rowIndex = rowIndex;
						data.cacheArray = norm_rows[ rowIndex ];
						rowData = data.cacheArray[ c.columns ];
						data.rawArray = rowData.raw;
						data.childRowText = '';

						if ( !wo.filter_childByColumn ) {
							txt = '';
							// child row cached text
							childRow = rowData.child;
							// so, if 'table.config.widgetOptions.filter_childRows' is true and there is
							// a match anywhere in the child row, then it will make the row visible
							// checked here so the option can be changed dynamically
							for ( indx = 0; indx < childRow.length; indx++ ) {
								txt += ' ' + childRow[indx].join( ' ' ) || '';
							}
							data.childRowText = wo.filter_childRows ?
								( wo.filter_ignoreCase ? txt.toLowerCase() : txt ) :
								'';
						}

						showRow = false;
						showParent = tsf.processRow( c, data, vars );
						$row = rowData.$row;

						// don't pass reference to val
						val = showParent ? true : false;
						childRow = rowData.$row.filter( ':gt(0)' );
						if ( wo.filter_childRows && childRow.length ) {
							if ( wo.filter_childByColumn ) {
								if ( !wo.filter_childWithSibs ) {
									// hide all child rows
									childRow.addClass( wo.filter_filteredRow );
									// if only showing resulting child row, only include parent
									$row = $row.eq( 0 );
								}
								// cycle through each child row
								for ( indx = 0; indx < childRow.length; indx++ ) {
									data.$row = childRow.eq( indx );
									data.cacheArray = rowData.child[ indx ];
									data.rawArray = data.cacheArray;
									val = tsf.processRow( c, data, vars );
									// use OR comparison on child rows
									showRow = showRow || val;
									if ( !wo.filter_childWithSibs && val ) {
										childRow.eq( indx ).removeClass( wo.filter_filteredRow );
									}
								}
							}
							// keep parent row match even if no child matches... see #1020
							showRow = showRow || showParent;
						} else {
							showRow = val;
						}
						$row
							.toggleClass( wo.filter_filteredRow, !showRow )[0]
							.display = showRow ? '' : 'none';
					}
				}
				c.filteredRows += $rows.not( '.' + wo.filter_filteredRow ).length;
				c.totalRows += $rows.length;
				ts.processTbody( table, $tbody, false );
			}
			// lastCombinedFilter is no longer used internally
			c.lastCombinedFilter = storedFilters.join(''); // save last search
			// don't save 'filters' directly since it may have altered ( AnyMatch column searches )
			c.lastSearch = storedFilters;
			c.$table.data( 'lastSearch', storedFilters );
			if ( wo.filter_saveFilters && ts.storage ) {
				ts.storage( table, 'tablesorter-filters', tsf.processFilters( storedFilters, true ) );
			}
			if ( c.debug ) {
				console.log( 'Completed filter widget search' + ts.benchmark(time) );
			}
			if ( wo.filter_initialized ) {
				c.$table.triggerHandler( 'filterBeforeEnd', c );
				c.$table.triggerHandler( 'filterEnd', c );
			}
			setTimeout( function() {
				ts.applyWidget( c.table ); // make sure zebra widget is applied
			}, 0 );
		},
		getOptionSource: function( table, column, onlyAvail ) {
			table = $( table )[0];
			var c = table.config,
				wo = c.widgetOptions,
				arry = false,
				source = wo.filter_selectSource,
				last = c.$table.data( 'lastSearch' ) || [],
				fxn = typeof source === 'function' ? true : ts.getColumnData( table, source, column );

			if ( onlyAvail && last[column] !== '' ) {
				onlyAvail = false;
			}

			// filter select source option
			if ( fxn === true ) {
				// OVERALL source
				arry = source( table, column, onlyAvail );
			} else if ( fxn instanceof $ || ( $.type( fxn ) === 'string' && fxn.indexOf( '</option>' ) >= 0 ) ) {
				// selectSource is a jQuery object or string of options
				return fxn;
			} else if ( $.isArray( fxn ) ) {
				arry = fxn;
			} else if ( $.type( source ) === 'object' && fxn ) {
				// custom select source function for a SPECIFIC COLUMN
				arry = fxn( table, column, onlyAvail );
				// abort - updating the selects from an external method
				if (arry === null) {
					return null;
				}
			}
			if ( arry === false ) {
				// fall back to original method
				arry = tsf.getOptions( table, column, onlyAvail );
			}

			return tsf.processOptions( table, column, arry );

		},
		processOptions: function( table, column, arry ) {
			if ( !$.isArray( arry ) ) {
				return false;
			}
			table = $( table )[0];
			var cts, txt, indx, len, parsedTxt, str,
				c = table.config,
				validColumn = typeof column !== 'undefined' && column !== null && column >= 0 && column < c.columns,
				direction = validColumn ? c.$headerIndexed[ column ].hasClass( 'filter-select-sort-desc' ) : false,
				parsed = [];
			// get unique elements and sort the list
			// if $.tablesorter.sortText exists ( not in the original tablesorter ),
			// then natural sort the list otherwise use a basic sort
			arry = $.grep( arry, function( value, indx ) {
				if ( value.text ) {
					return true;
				}
				return $.inArray( value, arry ) === indx;
			});
			if ( validColumn && c.$headerIndexed[ column ].hasClass( 'filter-select-nosort' ) ) {
				// unsorted select options
				return arry;
			} else {
				len = arry.length;
				// parse select option values
				for ( indx = 0; indx < len; indx++ ) {
					txt = arry[ indx ];
					// check for object
					str = txt.text ? txt.text : txt;
					// sortNatural breaks if you don't pass it strings
					parsedTxt = ( validColumn && c.parsers && c.parsers.length &&
						c.parsers[ column ].format( str, table, [], column ) || str ).toString();
					parsedTxt = c.widgetOptions.filter_ignoreCase ? parsedTxt.toLowerCase() : parsedTxt;
					// parse array data using set column parser; this DOES NOT pass the original
					// table cell to the parser format function
					if ( txt.text ) {
						txt.parsed = parsedTxt;
						parsed[ parsed.length ] = txt;
					} else {
						parsed[ parsed.length ] = {
							text : txt,
							// check parser length - fixes #934
							parsed : parsedTxt
						};
					}
				}
				// sort parsed select options
				cts = c.textSorter || '';
				parsed.sort( function( a, b ) {
					var x = direction ? b.parsed : a.parsed,
						y = direction ? a.parsed : b.parsed;
					if ( validColumn && typeof cts === 'function' ) {
						// custom OVERALL text sorter
						return cts( x, y, true, column, table );
					} else if ( validColumn && typeof cts === 'object' && cts.hasOwnProperty( column ) ) {
						// custom text sorter for a SPECIFIC COLUMN
						return cts[column]( x, y, true, column, table );
					} else if ( ts.sortNatural ) {
						// fall back to natural sort
						return ts.sortNatural( x, y );
					}
					// using an older version! do a basic sort
					return true;
				});
				// rebuild arry from sorted parsed data
				arry = [];
				len = parsed.length;
				for ( indx = 0; indx < len; indx++ ) {
					arry[ arry.length ] = parsed[indx];
				}
				return arry;
			}
		},
		getOptions: function( table, column, onlyAvail ) {
			table = $( table )[0];
			var rowIndex, tbodyIndex, len, row, cache, indx, child, childLen,
				c = table.config,
				wo = c.widgetOptions,
				arry = [];
			for ( tbodyIndex = 0; tbodyIndex < c.$tbodies.length; tbodyIndex++ ) {
				cache = c.cache[tbodyIndex];
				len = c.cache[tbodyIndex].normalized.length;
				// loop through the rows
				for ( rowIndex = 0; rowIndex < len; rowIndex++ ) {
					// get cached row from cache.row ( old ) or row data object
					// ( new; last item in normalized array )
					row = cache.row ?
						cache.row[ rowIndex ] :
						cache.normalized[ rowIndex ][ c.columns ].$row[0];
					// check if has class filtered
					if ( onlyAvail && row.className.match( wo.filter_filteredRow ) ) {
						continue;
					}
					// get non-normalized cell content
					if ( wo.filter_useParsedData ||
						c.parsers[column].parsed ||
						c.$headerIndexed[column].hasClass( 'filter-parsed' ) ) {
						arry[ arry.length ] = '' + cache.normalized[ rowIndex ][ column ];
						// child row parsed data
						if ( wo.filter_childRows && wo.filter_childByColumn ) {
							childLen = cache.normalized[ rowIndex ][ c.columns ].$row.length - 1;
							for ( indx = 0; indx < childLen; indx++ ) {
								arry[ arry.length ] = '' + cache.normalized[ rowIndex ][ c.columns ].child[ indx ][ column ];
							}
						}
					} else {
						// get raw cached data instead of content directly from the cells
						arry[ arry.length ] = cache.normalized[ rowIndex ][ c.columns ].raw[ column ];
						// child row unparsed data
						if ( wo.filter_childRows && wo.filter_childByColumn ) {
							childLen = cache.normalized[ rowIndex ][ c.columns ].$row.length;
							for ( indx = 1; indx < childLen; indx++ ) {
								child =  cache.normalized[ rowIndex ][ c.columns ].$row.eq( indx ).children().eq( column );
								arry[ arry.length ] = '' + ts.getElementText( c, child, column );
							}
						}
					}
				}
			}
			return arry;
		},
		buildSelect: function( table, column, arry, updating, onlyAvail ) {
			table = $( table )[0];
			column = parseInt( column, 10 );
			if ( !table.config.cache || $.isEmptyObject( table.config.cache ) ) {
				return;
			}

			var indx, val, txt, t, $filters, $filter, option,
				c = table.config,
				wo = c.widgetOptions,
				node = c.$headerIndexed[ column ],
				// t.data( 'placeholder' ) won't work in jQuery older than 1.4.3
				options = '<option value="">' +
					( node.data( 'placeholder' ) ||
						node.attr( 'data-placeholder' ) ||
						wo.filter_placeholder.select || ''
					) + '</option>',
				// Get curent filter value
				currentValue = c.$table
					.find( 'thead' )
					.find( 'select.' + tscss.filter + '[data-column="' + column + '"]' )
					.val();

			// nothing included in arry ( external source ), so get the options from
			// filter_selectSource or column data
			if ( typeof arry === 'undefined' || arry === '' ) {
				arry = tsf.getOptionSource( table, column, onlyAvail );
				// abort, selects are updated by an external method
				if (arry === null) {
					return;
				}
			}

			if ( $.isArray( arry ) ) {
				// build option list
				for ( indx = 0; indx < arry.length; indx++ ) {
					option = arry[ indx ];
					if ( option.text ) {
						// OBJECT!! add data-function-name in case the value is set in filter_functions
						option['data-function-name'] = typeof option.value === 'undefined' ? option.text : option.value;

						// support jQuery < v1.8, otherwise the below code could be shortened to
						// options += $( '<option>', option )[ 0 ].outerHTML;
						options += '<option';
						for ( val in option ) {
							if ( option.hasOwnProperty( val ) && val !== 'text' ) {
								options += ' ' + val + '="' + option[ val ] + '"';
							}
						}
						if ( !option.value ) {
							options += ' value="' + option.text + '"';
						}
						options += '>' + option.text + '</option>';
						// above code is needed in jQuery < v1.8

						// make sure we don't turn an object into a string (objects without a "text" property)
					} else if ( '' + option !== '[object Object]' ) {
						txt = option = ( '' + option ).replace( tsfRegex.quote, '&quot;' );
						val = txt;
						// allow including a symbol in the selectSource array
						// 'a-z|A through Z' so that 'a-z' becomes the option value
						// and 'A through Z' becomes the option text
						if ( txt.indexOf( wo.filter_selectSourceSeparator ) >= 0 ) {
							t = txt.split( wo.filter_selectSourceSeparator );
							val = t[0];
							txt = t[1];
						}
						// replace quotes - fixes #242 & ignore empty strings
						// see http://stackoverflow.com/q/14990971/145346
						options += option !== '' ?
							'<option ' +
								( val === txt ? '' : 'data-function-name="' + option + '" ' ) +
								'value="' + val + '">' + txt +
							'</option>' : '';
					}
				}
				// clear arry so it doesn't get appended twice
				arry = [];
			}

			// update all selects in the same column ( clone thead in sticky headers &
			// any external selects ) - fixes 473
			$filters = ( c.$filters ? c.$filters : c.$table.children( 'thead' ) )
				.find( '.' + tscss.filter );
			if ( wo.filter_$externalFilters ) {
				$filters = $filters && $filters.length ?
					$filters.add( wo.filter_$externalFilters ) :
					wo.filter_$externalFilters;
			}
			$filter = $filters.filter( 'select[data-column="' + column + '"]' );

			// make sure there is a select there!
			if ( $filter.length ) {
				$filter[ updating ? 'html' : 'append' ]( options );
				if ( !$.isArray( arry ) ) {
					// append options if arry is provided externally as a string or jQuery object
					// options ( default value ) was already added
					$filter.append( arry ).val( currentValue );
				}
				$filter.val( currentValue );
			}
		},
		buildDefault: function( table, updating ) {
			var columnIndex, $header, noSelect,
				c = table.config,
				wo = c.widgetOptions,
				columns = c.columns;
			// build default select dropdown
			for ( columnIndex = 0; columnIndex < columns; columnIndex++ ) {
				$header = c.$headerIndexed[columnIndex];
				noSelect = !( $header.hasClass( 'filter-false' ) || $header.hasClass( 'parser-false' ) );
				// look for the filter-select class; build/update it if found
				if ( ( $header.hasClass( 'filter-select' ) ||
					ts.getColumnData( table, wo.filter_functions, columnIndex ) === true ) && noSelect ) {
					tsf.buildSelect( table, columnIndex, '', updating, $header.hasClass( wo.filter_onlyAvail ) );
				}
			}
		}
	};

	// filter regex variable
	tsfRegex = tsf.regex;

	ts.getFilters = function( table, getRaw, setFilters, skipFirst ) {
		var i, $filters, $column, cols,
			filters = [],
			c = table ? $( table )[0].config : '',
			wo = c ? c.widgetOptions : '';
		if ( ( getRaw !== true && wo && !wo.filter_columnFilters ) ||
			// setFilters called, but last search is exactly the same as the current
			// fixes issue #733 & #903 where calling update causes the input values to reset
			( $.isArray(setFilters) && tsf.equalFilters(c, setFilters, c.lastSearch) )
		) {
			return $( table ).data( 'lastSearch' ) || [];
		}
		if ( c ) {
			if ( c.$filters ) {
				$filters = c.$filters.find( '.' + tscss.filter );
			}
			if ( wo.filter_$externalFilters ) {
				$filters = $filters && $filters.length ?
					$filters.add( wo.filter_$externalFilters ) :
					wo.filter_$externalFilters;
			}
			if ( $filters && $filters.length ) {
				filters = setFilters || [];
				for ( i = 0; i < c.columns + 1; i++ ) {
					cols = ( i === c.columns ?
						// 'all' columns can now include a range or set of columms ( data-column='0-2,4,6-7' )
						wo.filter_anyColumnSelector + ',' + wo.filter_multipleColumnSelector :
						'[data-column="' + i + '"]' );
					$column = $filters.filter( cols );
					if ( $column.length ) {
						// move the latest search to the first slot in the array
						$column = tsf.getLatestSearch( $column );
						if ( $.isArray( setFilters ) ) {
							// skip first ( latest input ) to maintain cursor position while typing
							if ( skipFirst && $column.length > 1 ) {
								$column = $column.slice( 1 );
							}
							if ( i === c.columns ) {
								// prevent data-column='all' from filling data-column='0,1' ( etc )
								cols = $column.filter( wo.filter_anyColumnSelector );
								$column = cols.length ? cols : $column;
							}
							$column
								.val( setFilters[ i ] )
								// must include a namespace here; but not c.namespace + 'filter'?
								.trigger( 'change' + c.namespace );
						} else {
							filters[i] = $column.val() || '';
							// don't change the first... it will move the cursor
							if ( i === c.columns ) {
								// don't update range columns from 'all' setting
								$column
									.slice( 1 )
									.filter( '[data-column*="' + $column.attr( 'data-column' ) + '"]' )
									.val( filters[ i ] );
							} else {
								$column
									.slice( 1 )
									.val( filters[ i ] );
							}
						}
						// save any match input dynamically
						if ( i === c.columns && $column.length ) {
							wo.filter_$anyMatch = $column;
						}
					}
				}
			}
		}
		return filters;
	};

	ts.setFilters = function( table, filter, apply, skipFirst ) {
		var c = table ? $( table )[0].config : '',
			valid = ts.getFilters( table, true, filter, skipFirst );
		// default apply to "true"
		if ( typeof apply === 'undefined' ) {
			apply = true;
		}
		if ( c && apply ) {
			// ensure new set filters are applied, even if the search is the same
			c.lastCombinedFilter = null;
			c.lastSearch = [];
			tsf.searching( c.table, filter, skipFirst );
			c.$table.triggerHandler( 'filterFomatterUpdate' );
		}
		return valid.length !== 0;
	};

})( jQuery );

/*! Widget: uitheme - updated 9/27/2017 (v2.29.0) */
;(function ($) {
	'use strict';
	var ts = $.tablesorter || {};

	ts.themes = {
		'bootstrap' : {
			table        : 'table table-bordered table-striped',
			caption      : 'caption',
			// header class names
			header       : 'bootstrap-header', // give the header a gradient background (theme.bootstrap_2.css)
			sortNone     : '',
			sortAsc      : '',
			sortDesc     : '',
			active       : '', // applied when column is sorted
			hover        : '', // custom css required - a defined bootstrap style may not override other classes
			// icon class names
			icons        : '', // add 'bootstrap-icon-white' to make them white; this icon class is added to the <i> in the header
			iconSortNone : 'bootstrap-icon-unsorted', // class name added to icon when column is not sorted
			iconSortAsc  : 'glyphicon glyphicon-chevron-up', // class name added to icon when column has ascending sort
			iconSortDesc : 'glyphicon glyphicon-chevron-down', // class name added to icon when column has descending sort
			filterRow    : '', // filter row class
			footerRow    : '',
			footerCells  : '',
			even         : '', // even row zebra striping
			odd          : ''  // odd row zebra striping
		},
		'jui' : {
			table        : 'ui-widget ui-widget-content ui-corner-all', // table classes
			caption      : 'ui-widget-content',
			// header class names
			header       : 'ui-widget-header ui-corner-all ui-state-default', // header classes
			sortNone     : '',
			sortAsc      : '',
			sortDesc     : '',
			active       : 'ui-state-active', // applied when column is sorted
			hover        : 'ui-state-hover',  // hover class
			// icon class names
			icons        : 'ui-icon', // icon class added to the <i> in the header
			iconSortNone : 'ui-icon-carat-2-n-s ui-icon-caret-2-n-s', // class name added to icon when column is not sorted
			iconSortAsc  : 'ui-icon-carat-1-n ui-icon-caret-1-n', // class name added to icon when column has ascending sort
			iconSortDesc : 'ui-icon-carat-1-s ui-icon-caret-1-s', // class name added to icon when column has descending sort
			filterRow    : '',
			footerRow    : '',
			footerCells  : '',
			even         : 'ui-widget-content', // even row zebra striping
			odd          : 'ui-state-default'   // odd row zebra striping
		}
	};

	$.extend(ts.css, {
		wrapper : 'tablesorter-wrapper' // ui theme & resizable
	});

	ts.addWidget({
		id: 'uitheme',
		priority: 10,
		format: function(table, c, wo) {
			var i, tmp, hdr, icon, time, $header, $icon, $tfoot, $h, oldtheme, oldremove, oldIconRmv, hasOldTheme,
				themesAll = ts.themes,
				$table = c.$table.add( $( c.namespace + '_extra_table' ) ),
				$headers = c.$headers.add( $( c.namespace + '_extra_headers' ) ),
				theme = c.theme || 'jui',
				themes = themesAll[theme] || {},
				remove = $.trim( [ themes.sortNone, themes.sortDesc, themes.sortAsc, themes.active ].join( ' ' ) ),
				iconRmv = $.trim( [ themes.iconSortNone, themes.iconSortDesc, themes.iconSortAsc ].join( ' ' ) );
			if (c.debug) { time = new Date(); }
			// initialization code - run once
			if (!$table.hasClass('tablesorter-' + theme) || c.theme !== c.appliedTheme || !wo.uitheme_applied) {
				wo.uitheme_applied = true;
				oldtheme = themesAll[c.appliedTheme] || {};
				hasOldTheme = !$.isEmptyObject(oldtheme);
				oldremove =  hasOldTheme ? [ oldtheme.sortNone, oldtheme.sortDesc, oldtheme.sortAsc, oldtheme.active ].join( ' ' ) : '';
				oldIconRmv = hasOldTheme ? [ oldtheme.iconSortNone, oldtheme.iconSortDesc, oldtheme.iconSortAsc ].join( ' ' ) : '';
				if (hasOldTheme) {
					wo.zebra[0] = $.trim( ' ' + wo.zebra[0].replace(' ' + oldtheme.even, '') );
					wo.zebra[1] = $.trim( ' ' + wo.zebra[1].replace(' ' + oldtheme.odd, '') );
					c.$tbodies.children().removeClass( [ oldtheme.even, oldtheme.odd ].join(' ') );
				}
				// update zebra stripes
				if (themes.even) { wo.zebra[0] += ' ' + themes.even; }
				if (themes.odd) { wo.zebra[1] += ' ' + themes.odd; }
				// add caption style
				$table.children('caption')
					.removeClass(oldtheme.caption || '')
					.addClass(themes.caption);
				// add table/footer class names
				$tfoot = $table
					// remove other selected themes
					.removeClass( (c.appliedTheme ? 'tablesorter-' + (c.appliedTheme || '') : '') + ' ' + (oldtheme.table || '') )
					.addClass('tablesorter-' + theme + ' ' + (themes.table || '')) // add theme widget class name
					.children('tfoot');
				c.appliedTheme = c.theme;

				if ($tfoot.length) {
					$tfoot
						// if oldtheme.footerRow or oldtheme.footerCells are undefined, all class names are removed
						.children('tr').removeClass(oldtheme.footerRow || '').addClass(themes.footerRow)
						.children('th, td').removeClass(oldtheme.footerCells || '').addClass(themes.footerCells);
				}
				// update header classes
				$headers
					.removeClass( (hasOldTheme ? [ oldtheme.header, oldtheme.hover, oldremove ].join(' ') : '') || '' )
					.addClass(themes.header)
					.not('.sorter-false')
					.unbind('mouseenter.tsuitheme mouseleave.tsuitheme')
					.bind('mouseenter.tsuitheme mouseleave.tsuitheme', function(event) {
						// toggleClass with switch added in jQuery 1.3
						$(this)[ event.type === 'mouseenter' ? 'addClass' : 'removeClass' ](themes.hover || '');
					});

				$headers.each(function(){
					var $this = $(this);
					if (!$this.find('.' + ts.css.wrapper).length) {
						// Firefox needs this inner div to position the icon & resizer correctly
						$this.wrapInner('<div class="' + ts.css.wrapper + '" style="position:relative;height:100%;width:100%"></div>');
					}
				});
				if (c.cssIcon) {
					// if c.cssIcon is '', then no <i> is added to the header
					$headers
						.find('.' + ts.css.icon)
						.removeClass(hasOldTheme ? [ oldtheme.icons, oldIconRmv ].join(' ') : '')
						.addClass(themes.icons || '');
				}
				// filter widget initializes after uitheme
				if (ts.hasWidget( c.table, 'filter' )) {
					tmp = function() {
						$table.children('thead').children('.' + ts.css.filterRow)
							.removeClass(hasOldTheme ? oldtheme.filterRow || '' : '')
							.addClass(themes.filterRow || '');
					};
					if (wo.filter_initialized) {
						tmp();
					} else {
						$table.one('filterInit', function() {
							tmp();
						});
					}
				}
			}
			for (i = 0; i < c.columns; i++) {
				$header = c.$headers
					.add($(c.namespace + '_extra_headers'))
					.not('.sorter-false')
					.filter('[data-column="' + i + '"]');
				$icon = (ts.css.icon) ? $header.find('.' + ts.css.icon) : $();
				$h = $headers.not('.sorter-false').filter('[data-column="' + i + '"]:last');
				if ($h.length) {
					$header.removeClass(remove);
					$icon.removeClass(iconRmv);
					if ($h[0].sortDisabled) {
						// no sort arrows for disabled columns!
						$icon.removeClass(themes.icons || '');
					} else {
						hdr = themes.sortNone;
						icon = themes.iconSortNone;
						if ($h.hasClass(ts.css.sortAsc)) {
							hdr = [ themes.sortAsc, themes.active ].join(' ');
							icon = themes.iconSortAsc;
						} else if ($h.hasClass(ts.css.sortDesc)) {
							hdr = [ themes.sortDesc, themes.active ].join(' ');
							icon = themes.iconSortDesc;
						}
						$header.addClass(hdr);
						$icon.addClass(icon || '');
					}
				}
			}
			if (c.debug) {
				console.log('Applying ' + theme + ' theme' + ts.benchmark(time));
			}
		},
		remove: function(table, c, wo, refreshing) {
			if (!wo.uitheme_applied) { return; }
			var $table = c.$table,
				theme = c.appliedTheme || 'jui',
				themes = ts.themes[ theme ] || ts.themes.jui,
				$headers = $table.children('thead').children(),
				remove = themes.sortNone + ' ' + themes.sortDesc + ' ' + themes.sortAsc,
				iconRmv = themes.iconSortNone + ' ' + themes.iconSortDesc + ' ' + themes.iconSortAsc;
			$table.removeClass('tablesorter-' + theme + ' ' + themes.table);
			wo.uitheme_applied = false;
			if (refreshing) { return; }
			$table.find(ts.css.header).removeClass(themes.header);
			$headers
				.unbind('mouseenter.tsuitheme mouseleave.tsuitheme') // remove hover
				.removeClass(themes.hover + ' ' + remove + ' ' + themes.active)
				.filter('.' + ts.css.filterRow)
				.removeClass(themes.filterRow);
			$headers.find('.' + ts.css.icon).removeClass(themes.icons + ' ' + iconRmv);
		}
	});

})(jQuery);

/*!
 * Bootstrap-select v1.12.1 (http://silviomoreto.github.io/bootstrap-select)
 *
 * Copyright 2013-2016 bootstrap-select
 * Licensed under MIT (https://github.com/silviomoreto/bootstrap-select/blob/master/LICENSE)
 */
!function(a,b){"function"==typeof define&&define.amd?define(["jquery"],function(a){return b(a)}):"object"==typeof module&&module.exports?module.exports=b(require("jquery")):b(a.jQuery)}(this,function(a){!function(a){"use strict";function b(b){var c=[{re:/[\xC0-\xC6]/g,ch:"A"},{re:/[\xE0-\xE6]/g,ch:"a"},{re:/[\xC8-\xCB]/g,ch:"E"},{re:/[\xE8-\xEB]/g,ch:"e"},{re:/[\xCC-\xCF]/g,ch:"I"},{re:/[\xEC-\xEF]/g,ch:"i"},{re:/[\xD2-\xD6]/g,ch:"O"},{re:/[\xF2-\xF6]/g,ch:"o"},{re:/[\xD9-\xDC]/g,ch:"U"},{re:/[\xF9-\xFC]/g,ch:"u"},{re:/[\xC7-\xE7]/g,ch:"c"},{re:/[\xD1]/g,ch:"N"},{re:/[\xF1]/g,ch:"n"}];return a.each(c,function(){b=b?b.replace(this.re,this.ch):""}),b}function c(b){var c=arguments,d=b;[].shift.apply(c);var e,f=this.each(function(){var b=a(this);if(b.is("select")){var f=b.data("selectpicker"),g="object"==typeof d&&d;if(f){if(g)for(var h in g)g.hasOwnProperty(h)&&(f.options[h]=g[h])}else{var i=a.extend({},k.DEFAULTS,a.fn.selectpicker.defaults||{},b.data(),g);i.template=a.extend({},k.DEFAULTS.template,a.fn.selectpicker.defaults?a.fn.selectpicker.defaults.template:{},b.data().template,g.template),b.data("selectpicker",f=new k(this,i))}"string"==typeof d&&(e=f[d]instanceof Function?f[d].apply(f,c):f.options[d])}});return"undefined"!=typeof e?e:f}String.prototype.includes||!function(){var a={}.toString,b=function(){try{var a={},b=Object.defineProperty,c=b(a,a,a)&&b}catch(a){}return c}(),c="".indexOf,d=function(b){if(null==this)throw new TypeError;var d=String(this);if(b&&"[object RegExp]"==a.call(b))throw new TypeError;var e=d.length,f=String(b),g=f.length,h=arguments.length>1?arguments[1]:void 0,i=h?Number(h):0;i!=i&&(i=0);var j=Math.min(Math.max(i,0),e);return!(g+j>e)&&c.call(d,f,i)!=-1};b?b(String.prototype,"includes",{value:d,configurable:!0,writable:!0}):String.prototype.includes=d}(),String.prototype.startsWith||!function(){var a=function(){try{var a={},b=Object.defineProperty,c=b(a,a,a)&&b}catch(a){}return c}(),b={}.toString,c=function(a){if(null==this)throw new TypeError;var c=String(this);if(a&&"[object RegExp]"==b.call(a))throw new TypeError;var d=c.length,e=String(a),f=e.length,g=arguments.length>1?arguments[1]:void 0,h=g?Number(g):0;h!=h&&(h=0);var i=Math.min(Math.max(h,0),d);if(f+i>d)return!1;for(var j=-1;++j<f;)if(c.charCodeAt(i+j)!=e.charCodeAt(j))return!1;return!0};a?a(String.prototype,"startsWith",{value:c,configurable:!0,writable:!0}):String.prototype.startsWith=c}(),Object.keys||(Object.keys=function(a,b,c){c=[];for(b in a)c.hasOwnProperty.call(a,b)&&c.push(b);return c});var d={useDefault:!1,_set:a.valHooks.select.set};a.valHooks.select.set=function(b,c){return c&&!d.useDefault&&a(b).data("selected",!0),d._set.apply(this,arguments)};var e=null;a.fn.triggerNative=function(a){var b,c=this[0];c.dispatchEvent?("function"==typeof Event?b=new Event(a,{bubbles:!0}):(b=document.createEvent("Event"),b.initEvent(a,!0,!1)),c.dispatchEvent(b)):c.fireEvent?(b=document.createEventObject(),b.eventType=a,c.fireEvent("on"+a,b)):this.trigger(a)},a.expr.pseudos.icontains=function(b,c,d){var e=a(b),f=(e.data("tokens")||e.text()).toString().toUpperCase();return f.includes(d[3].toUpperCase())},a.expr.pseudos.ibegins=function(b,c,d){var e=a(b),f=(e.data("tokens")||e.text()).toString().toUpperCase();return f.startsWith(d[3].toUpperCase())},a.expr.pseudos.aicontains=function(b,c,d){var e=a(b),f=(e.data("tokens")||e.data("normalizedText")||e.text()).toString().toUpperCase();return f.includes(d[3].toUpperCase())},a.expr.pseudos.aibegins=function(b,c,d){var e=a(b),f=(e.data("tokens")||e.data("normalizedText")||e.text()).toString().toUpperCase();return f.startsWith(d[3].toUpperCase())};var f={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},g={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#x27;":"'","&#x60;":"`"},h=function(a){var b=function(b){return a[b]},c="(?:"+Object.keys(a).join("|")+")",d=RegExp(c),e=RegExp(c,"g");return function(a){return a=null==a?"":""+a,d.test(a)?a.replace(e,b):a}},i=h(f),j=h(g),k=function(b,c){d.useDefault||(a.valHooks.select.set=d._set,d.useDefault=!0),this.$element=a(b),this.$newElement=null,this.$button=null,this.$menu=null,this.$lis=null,this.options=c,null===this.options.title&&(this.options.title=this.$element.attr("title"));var e=this.options.windowPadding;"number"==typeof e&&(this.options.windowPadding=[e,e,e,e]),this.val=k.prototype.val,this.render=k.prototype.render,this.refresh=k.prototype.refresh,this.setStyle=k.prototype.setStyle,this.selectAll=k.prototype.selectAll,this.deselectAll=k.prototype.deselectAll,this.destroy=k.prototype.destroy,this.remove=k.prototype.remove,this.show=k.prototype.show,this.hide=k.prototype.hide,this.init()};k.VERSION="1.12.1",k.DEFAULTS={noneSelectedText:"Nothing selected",noneResultsText:"No results matched {0}",countSelectedText:function(a,b){return 1==a?"{0} item selected":"{0} items selected"},maxOptionsText:function(a,b){return[1==a?"Limit reached ({n} item max)":"Limit reached ({n} items max)",1==b?"Group limit reached ({n} item max)":"Group limit reached ({n} items max)"]},selectAllText:"Select All",deselectAllText:"Deselect All",doneButton:!1,doneButtonText:"Close",multipleSeparator:", ",styleBase:"btn",style:"btn-default",size:"auto",title:null,selectedTextFormat:"values",width:!1,container:!1,hideDisabled:!1,showSubtext:!1,showIcon:!0,showContent:!0,dropupAuto:!0,header:!1,liveSearch:!1,liveSearchPlaceholder:null,liveSearchNormalize:!1,liveSearchStyle:"contains",actionsBox:!1,iconBase:"glyphicon",tickIcon:"glyphicon-ok",showTick:!1,template:{caret:'<span class="caret"></span>'},maxOptions:!1,mobile:!1,selectOnTab:!1,dropdownAlignRight:!1,windowPadding:0},k.prototype={constructor:k,init:function(){var b=this,c=this.$element.attr("id");this.$element.addClass("bs-select-hidden"),this.liObj={},this.multiple=this.$element.prop("multiple"),this.autofocus=this.$element.prop("autofocus"),this.$newElement=this.createView(),this.$element.after(this.$newElement).appendTo(this.$newElement),this.$button=this.$newElement.children("button"),this.$menu=this.$newElement.children(".dropdown-menu"),this.$menuInner=this.$menu.children(".inner"),this.$searchbox=this.$menu.find("input"),this.$element.removeClass("bs-select-hidden"),this.options.dropdownAlignRight===!0&&this.$menu.addClass("dropdown-menu-right"),"undefined"!=typeof c&&(this.$button.attr("data-id",c),a('label[for="'+c+'"]').click(function(a){a.preventDefault(),b.$button.focus()})),this.checkDisabled(),this.clickListener(),this.options.liveSearch&&this.liveSearchListener(),this.render(),this.setStyle(),this.setWidth(),this.options.container&&this.selectPosition(),this.$menu.data("this",this),this.$newElement.data("this",this),this.options.mobile&&this.mobile(),this.$newElement.on({"hide.bs.dropdown":function(a){b.$menuInner.attr("aria-expanded",!1),b.$element.trigger("hide.bs.select",a)},"hidden.bs.dropdown":function(a){b.$element.trigger("hidden.bs.select",a)},"show.bs.dropdown":function(a){b.$menuInner.attr("aria-expanded",!0),b.$element.trigger("show.bs.select",a)},"shown.bs.dropdown":function(a){b.$element.trigger("shown.bs.select",a)}}),b.$element[0].hasAttribute("required")&&this.$element.on("invalid",function(){b.$button.addClass("bs-invalid").focus(),b.$element.on({"focus.bs.select":function(){b.$button.focus(),b.$element.off("focus.bs.select")},"shown.bs.select":function(){b.$element.val(b.$element.val()).off("shown.bs.select")},"rendered.bs.select":function(){this.validity.valid&&b.$button.removeClass("bs-invalid"),b.$element.off("rendered.bs.select")}})}),setTimeout(function(){b.$element.trigger("loaded.bs.select")})},createDropdown:function(){var b=this.multiple||this.options.showTick?" show-tick":"",c=this.$element.parent().hasClass("input-group")?" input-group-btn":"",d=this.autofocus?" autofocus":"",e=this.options.header?'<div class="popover-title"><button type="button" class="close" aria-hidden="true">&times;</button>'+this.options.header+"</div>":"",f=this.options.liveSearch?'<div class="bs-searchbox"><input type="text" class="form-control" autocomplete="off"'+(null===this.options.liveSearchPlaceholder?"":' placeholder="'+i(this.options.liveSearchPlaceholder)+'"')+' role="textbox" aria-label="Search"></div>':"",g=this.multiple&&this.options.actionsBox?'<div class="bs-actionsbox"><div class="btn-group btn-group-sm btn-block"><button type="button" class="actions-btn bs-select-all btn btn-default">'+this.options.selectAllText+'</button><button type="button" class="actions-btn bs-deselect-all btn btn-default">'+this.options.deselectAllText+"</button></div></div>":"",h=this.multiple&&this.options.doneButton?'<div class="bs-donebutton"><div class="btn-group btn-block"><button type="button" class="btn btn-sm btn-default">'+this.options.doneButtonText+"</button></div></div>":"",j='<div class="btn-group bootstrap-select'+b+c+'"><button type="button" class="'+this.options.styleBase+' dropdown-toggle" data-toggle="dropdown"'+d+' role="button"><span class="filter-option pull-left"></span>&nbsp;<span class="bs-caret">'+this.options.template.caret+'</span></button><div class="dropdown-menu open" role="combobox">'+e+f+g+'<ul class="dropdown-menu inner" role="listbox" aria-expanded="false"></ul>'+h+"</div></div>";return a(j)},createView:function(){var a=this.createDropdown(),b=this.createLi();return a.find("ul")[0].innerHTML=b,a},reloadLi:function(){var a=this.createLi();this.$menuInner[0].innerHTML=a},createLi:function(){var c=this,d=[],e=0,f=document.createElement("option"),g=-1,h=function(a,b,c,d){return"<li"+("undefined"!=typeof c&""!==c?' class="'+c+'"':"")+("undefined"!=typeof b&null!==b?' data-original-index="'+b+'"':"")+("undefined"!=typeof d&null!==d?'data-optgroup="'+d+'"':"")+">"+a+"</li>"},j=function(d,e,f,g){return'<a tabindex="0"'+("undefined"!=typeof e?' class="'+e+'"':"")+(f?' style="'+f+'"':"")+(c.options.liveSearchNormalize?' data-normalized-text="'+b(i(a(d).html()))+'"':"")+("undefined"!=typeof g||null!==g?' data-tokens="'+g+'"':"")+' role="option">'+d+'<span class="'+c.options.iconBase+" "+c.options.tickIcon+' check-mark"></span></a>'};if(this.options.title&&!this.multiple&&(g--,!this.$element.find(".bs-title-option").length)){var k=this.$element[0];f.className="bs-title-option",f.innerHTML=this.options.title,f.value="",k.insertBefore(f,k.firstChild);var l=a(k.options[k.selectedIndex]);void 0===l.attr("selected")&&void 0===this.$element.data("selected")&&(f.selected=!0)}return this.$element.find("option").each(function(b){var f=a(this);if(g++,!f.hasClass("bs-title-option")){var k=this.className||"",l=this.style.cssText,m=f.data("content")?f.data("content"):f.html(),n=f.data("tokens")?f.data("tokens"):null,o="undefined"!=typeof f.data("subtext")?'<small class="text-muted">'+f.data("subtext")+"</small>":"",p="undefined"!=typeof f.data("icon")?'<span class="'+c.options.iconBase+" "+f.data("icon")+'"></span> ':"",q=f.parent(),r="OPTGROUP"===q[0].tagName,s=r&&q[0].disabled,t=this.disabled||s;if(""!==p&&t&&(p="<span>"+p+"</span>"),c.options.hideDisabled&&(t&&!r||s))return void g--;if(f.data("content")||(m=p+'<span class="text">'+m+o+"</span>"),r&&f.data("divider")!==!0){if(c.options.hideDisabled&&t){if(void 0===q.data("allOptionsDisabled")){var u=q.children();q.data("allOptionsDisabled",u.filter(":disabled").length===u.length)}if(q.data("allOptionsDisabled"))return void g--}var v=" "+q[0].className||"";if(0===f.index()){e+=1;var w=q[0].label,x="undefined"!=typeof q.data("subtext")?'<small class="text-muted">'+q.data("subtext")+"</small>":"",y=q.data("icon")?'<span class="'+c.options.iconBase+" "+q.data("icon")+'"></span> ':"";w=y+'<span class="text">'+i(w)+x+"</span>",0!==b&&d.length>0&&(g++,d.push(h("",null,"divider",e+"div"))),g++,d.push(h(w,null,"dropdown-header"+v,e))}if(c.options.hideDisabled&&t)return void g--;d.push(h(j(m,"opt "+k+v,l,n),b,"",e))}else if(f.data("divider")===!0)d.push(h("",b,"divider"));else if(f.data("hidden")===!0)d.push(h(j(m,k,l,n),b,"hidden is-hidden"));else{var z=this.previousElementSibling&&"OPTGROUP"===this.previousElementSibling.tagName;if(!z&&c.options.hideDisabled)for(var A=a(this).prevAll(),B=0;B<A.length;B++)if("OPTGROUP"===A[B].tagName){for(var C=0,D=0;D<B;D++){var E=A[D];(E.disabled||a(E).data("hidden")===!0)&&C++}C===B&&(z=!0);break}z&&(g++,d.push(h("",null,"divider",e+"div"))),d.push(h(j(m,k,l,n),b))}c.liObj[b]=g}}),this.multiple||0!==this.$element.find("option:selected").length||this.options.title||this.$element.find("option").eq(0).prop("selected",!0).attr("selected","selected"),d.join("")},findLis:function(){return null==this.$lis&&(this.$lis=this.$menu.find("li")),this.$lis},render:function(b){var c,d=this;b!==!1&&this.$element.find("option").each(function(a){var b=d.findLis().eq(d.liObj[a]);d.setDisabled(a,this.disabled||"OPTGROUP"===this.parentNode.tagName&&this.parentNode.disabled,b),d.setSelected(a,this.selected,b)}),this.togglePlaceholder(),this.tabIndex();var e=this.$element.find("option").map(function(){if(this.selected){if(d.options.hideDisabled&&(this.disabled||"OPTGROUP"===this.parentNode.tagName&&this.parentNode.disabled))return;var b,c=a(this),e=c.data("icon")&&d.options.showIcon?'<i class="'+d.options.iconBase+" "+c.data("icon")+'"></i> ':"";return b=d.options.showSubtext&&c.data("subtext")&&!d.multiple?' <small class="text-muted">'+c.data("subtext")+"</small>":"","undefined"!=typeof c.attr("title")?c.attr("title"):c.data("content")&&d.options.showContent?c.data("content").toString():e+c.html()+b}}).toArray(),f=this.multiple?e.join(this.options.multipleSeparator):e[0];if(this.multiple&&this.options.selectedTextFormat.indexOf("count")>-1){var g=this.options.selectedTextFormat.split(">");if(g.length>1&&e.length>g[1]||1==g.length&&e.length>=2){c=this.options.hideDisabled?", [disabled]":"";var h=this.$element.find("option").not('[data-divider="true"], [data-hidden="true"]'+c).length,i="function"==typeof this.options.countSelectedText?this.options.countSelectedText(e.length,h):this.options.countSelectedText;f=i.replace("{0}",e.length.toString()).replace("{1}",h.toString())}}void 0==this.options.title&&(this.options.title=this.$element.attr("title")),"static"==this.options.selectedTextFormat&&(f=this.options.title),f||(f="undefined"!=typeof this.options.title?this.options.title:this.options.noneSelectedText),this.$button.attr("title",j(a.trim(f.replace(/<[^>]*>?/g,"")))),this.$button.children(".filter-option").html(f),this.$element.trigger("rendered.bs.select")},setStyle:function(a,b){this.$element.attr("class")&&this.$newElement.addClass(this.$element.attr("class").replace(/selectpicker|mobile-device|bs-select-hidden|validate\[.*\]/gi,""));var c=a?a:this.options.style;"add"==b?this.$button.addClass(c):"remove"==b?this.$button.removeClass(c):(this.$button.removeClass(this.options.style),this.$button.addClass(c))},liHeight:function(b){if(b||this.options.size!==!1&&!this.sizeInfo){var c=document.createElement("div"),d=document.createElement("div"),e=document.createElement("ul"),f=document.createElement("li"),g=document.createElement("li"),h=document.createElement("a"),i=document.createElement("span"),j=this.options.header&&this.$menu.find(".popover-title").length>0?this.$menu.find(".popover-title")[0].cloneNode(!0):null,k=this.options.liveSearch?document.createElement("div"):null,l=this.options.actionsBox&&this.multiple&&this.$menu.find(".bs-actionsbox").length>0?this.$menu.find(".bs-actionsbox")[0].cloneNode(!0):null,m=this.options.doneButton&&this.multiple&&this.$menu.find(".bs-donebutton").length>0?this.$menu.find(".bs-donebutton")[0].cloneNode(!0):null;if(i.className="text",c.className=this.$menu[0].parentNode.className+" open",d.className="dropdown-menu open",e.className="dropdown-menu inner",f.className="divider",i.appendChild(document.createTextNode("Inner text")),h.appendChild(i),g.appendChild(h),e.appendChild(g),e.appendChild(f),j&&d.appendChild(j),k){var n=document.createElement("span");k.className="bs-searchbox",n.className="form-control",k.appendChild(n),d.appendChild(k)}l&&d.appendChild(l),d.appendChild(e),m&&d.appendChild(m),c.appendChild(d),document.body.appendChild(c);var o=h.offsetHeight,p=j?j.offsetHeight:0,q=k?k.offsetHeight:0,r=l?l.offsetHeight:0,s=m?m.offsetHeight:0,t=a(f).outerHeight(!0),u="function"==typeof getComputedStyle&&getComputedStyle(d),v=u?null:a(d),w={vert:parseInt(u?u.paddingTop:v.css("paddingTop"))+parseInt(u?u.paddingBottom:v.css("paddingBottom"))+parseInt(u?u.borderTopWidth:v.css("borderTopWidth"))+parseInt(u?u.borderBottomWidth:v.css("borderBottomWidth")),horiz:parseInt(u?u.paddingLeft:v.css("paddingLeft"))+parseInt(u?u.paddingRight:v.css("paddingRight"))+parseInt(u?u.borderLeftWidth:v.css("borderLeftWidth"))+parseInt(u?u.borderRightWidth:v.css("borderRightWidth"))},x={vert:w.vert+parseInt(u?u.marginTop:v.css("marginTop"))+parseInt(u?u.marginBottom:v.css("marginBottom"))+2,horiz:w.horiz+parseInt(u?u.marginLeft:v.css("marginLeft"))+parseInt(u?u.marginRight:v.css("marginRight"))+2};document.body.removeChild(c),this.sizeInfo={liHeight:o,headerHeight:p,searchHeight:q,actionsHeight:r,doneButtonHeight:s,dividerHeight:t,menuPadding:w,menuExtras:x}}},setSize:function(){if(this.findLis(),this.liHeight(),this.options.header&&this.$menu.css("padding-top",0),this.options.size!==!1){var b,c,d,e,f,g,h,i,j=this,k=this.$menu,l=this.$menuInner,m=a(window),n=this.$newElement[0].offsetHeight,o=this.$newElement[0].offsetWidth,p=this.sizeInfo.liHeight,q=this.sizeInfo.headerHeight,r=this.sizeInfo.searchHeight,s=this.sizeInfo.actionsHeight,t=this.sizeInfo.doneButtonHeight,u=this.sizeInfo.dividerHeight,v=this.sizeInfo.menuPadding,w=this.sizeInfo.menuExtras,x=this.options.hideDisabled?".disabled":"",y=function(){var b,c=j.$newElement.offset(),d=a(j.options.container);j.options.container&&!d.is("body")?(b=d.offset(),b.top+=parseInt(d.css("borderTopWidth")),b.left+=parseInt(d.css("borderLeftWidth"))):b={top:0,left:0};var e=j.options.windowPadding;f=c.top-b.top-m.scrollTop(),g=m.height()-f-n-b.top-e[2],h=c.left-b.left-m.scrollLeft(),i=m.width()-h-o-b.left-e[1],f-=e[0],h-=e[3]};if(y(),"auto"===this.options.size){var z=function(){var m,n=function(b,c){return function(d){return c?d.classList?d.classList.contains(b):a(d).hasClass(b):!(d.classList?d.classList.contains(b):a(d).hasClass(b))}},u=j.$menuInner[0].getElementsByTagName("li"),x=Array.prototype.filter?Array.prototype.filter.call(u,n("hidden",!1)):j.$lis.not(".hidden"),z=Array.prototype.filter?Array.prototype.filter.call(x,n("dropdown-header",!0)):x.filter(".dropdown-header");y(),b=g-w.vert,c=i-w.horiz,j.options.container?(k.data("height")||k.data("height",k.height()),d=k.data("height"),k.data("width")||k.data("width",k.width()),e=k.data("width")):(d=k.height(),e=k.width()),j.options.dropupAuto&&j.$newElement.toggleClass("dropup",f>g&&b-w.vert<d),j.$newElement.hasClass("dropup")&&(b=f-w.vert),"auto"===j.options.dropdownAlignRight&&k.toggleClass("dropdown-menu-right",h>i&&c-w.horiz<e-o),m=x.length+z.length>3?3*p+w.vert-2:0,k.css({"max-height":b+"px",overflow:"hidden","min-height":m+q+r+s+t+"px"}),l.css({"max-height":b-q-r-s-t-v.vert+"px","overflow-y":"auto","min-height":Math.max(m-v.vert,0)+"px"})};z(),this.$searchbox.off("input.getSize propertychange.getSize").on("input.getSize propertychange.getSize",z),m.off("resize.getSize scroll.getSize").on("resize.getSize scroll.getSize",z)}else if(this.options.size&&"auto"!=this.options.size&&this.$lis.not(x).length>this.options.size){var A=this.$lis.not(".divider").not(x).children().slice(0,this.options.size).last().parent().index(),B=this.$lis.slice(0,A+1).filter(".divider").length;b=p*this.options.size+B*u+v.vert,j.options.container?(k.data("height")||k.data("height",k.height()),d=k.data("height")):d=k.height(),j.options.dropupAuto&&this.$newElement.toggleClass("dropup",f>g&&b-w.vert<d),k.css({"max-height":b+q+r+s+t+"px",overflow:"hidden","min-height":""}),l.css({"max-height":b-v.vert+"px","overflow-y":"auto","min-height":""})}}},setWidth:function(){if("auto"===this.options.width){this.$menu.css("min-width","0");var a=this.$menu.parent().clone().appendTo("body"),b=this.options.container?this.$newElement.clone().appendTo("body"):a,c=a.children(".dropdown-menu").outerWidth(),d=b.css("width","auto").children("button").outerWidth();a.remove(),b.remove(),this.$newElement.css("width",Math.max(c,d)+"px")}else"fit"===this.options.width?(this.$menu.css("min-width",""),this.$newElement.css("width","").addClass("fit-width")):this.options.width?(this.$menu.css("min-width",""),this.$newElement.css("width",this.options.width)):(this.$menu.css("min-width",""),this.$newElement.css("width",""));this.$newElement.hasClass("fit-width")&&"fit"!==this.options.width&&this.$newElement.removeClass("fit-width")},selectPosition:function(){this.$bsContainer=a('<div class="bs-container" />');var b,c,d,e=this,f=a(this.options.container),g=function(a){e.$bsContainer.addClass(a.attr("class").replace(/form-control|fit-width/gi,"")).toggleClass("dropup",a.hasClass("dropup")),b=a.offset(),f.is("body")?c={top:0,left:0}:(c=f.offset(),c.top+=parseInt(f.css("borderTopWidth"))-f.scrollTop(),c.left+=parseInt(f.css("borderLeftWidth"))-f.scrollLeft()),d=a.hasClass("dropup")?0:a[0].offsetHeight,e.$bsContainer.css({top:b.top-c.top+d,left:b.left-c.left,width:a[0].offsetWidth})};this.$button.on("click",function(){var b=a(this);e.isDisabled()||(g(e.$newElement),e.$bsContainer.appendTo(e.options.container).toggleClass("open",!b.hasClass("open")).append(e.$menu))}),a(window).on("resize scroll",function(){g(e.$newElement)}),this.$element.on("hide.bs.select",function(){e.$menu.data("height",e.$menu.height()),e.$bsContainer.detach()})},setSelected:function(a,b,c){c||(this.togglePlaceholder(),c=this.findLis().eq(this.liObj[a])),c.toggleClass("selected",b).find("a").attr("aria-selected",b)},setDisabled:function(a,b,c){c||(c=this.findLis().eq(this.liObj[a])),b?c.addClass("disabled").children("a").attr("href","#").attr("tabindex",-1).attr("aria-disabled",!0):c.removeClass("disabled").children("a").removeAttr("href").attr("tabindex",0).attr("aria-disabled",!1)},isDisabled:function(){return this.$element[0].disabled},checkDisabled:function(){var a=this;this.isDisabled()?(this.$newElement.addClass("disabled"),this.$button.addClass("disabled").attr("tabindex",-1).attr("aria-disabled",!0)):(this.$button.hasClass("disabled")&&(this.$newElement.removeClass("disabled"),this.$button.removeClass("disabled").attr("aria-disabled",!1)),this.$button.attr("tabindex")!=-1||this.$element.data("tabindex")||this.$button.removeAttr("tabindex")),this.$button.click(function(){return!a.isDisabled()})},togglePlaceholder:function(){var a=this.$element.val();this.$button.toggleClass("bs-placeholder",null===a||""===a||a.constructor===Array&&0===a.length)},tabIndex:function(){this.$element.data("tabindex")!==this.$element.attr("tabindex")&&this.$element.attr("tabindex")!==-98&&"-98"!==this.$element.attr("tabindex")&&(this.$element.data("tabindex",this.$element.attr("tabindex")),this.$button.attr("tabindex",this.$element.data("tabindex"))),this.$element.attr("tabindex",-98)},clickListener:function(){var b=this,c=a(document);c.data("spaceSelect",!1),this.$button.on("keyup",function(a){/(32)/.test(a.keyCode.toString(10))&&c.data("spaceSelect")&&(a.preventDefault(),c.data("spaceSelect",!1))}),this.$button.on("click",function(){b.setSize()}),this.$element.on("shown.bs.select",function(){if(b.options.liveSearch||b.multiple){if(!b.multiple){var a=b.liObj[b.$element[0].selectedIndex];if("number"!=typeof a||b.options.size===!1)return;var c=b.$lis.eq(a)[0].offsetTop-b.$menuInner[0].offsetTop;c=c-b.$menuInner[0].offsetHeight/2+b.sizeInfo.liHeight/2,b.$menuInner[0].scrollTop=c}}else b.$menuInner.find(".selected a").focus()}),this.$menuInner.on("click","li a",function(c){var d=a(this),f=d.parent().data("originalIndex"),g=b.$element.val(),h=b.$element.prop("selectedIndex"),i=!0;if(b.multiple&&1!==b.options.maxOptions&&c.stopPropagation(),c.preventDefault(),!b.isDisabled()&&!d.parent().hasClass("disabled")){var j=b.$element.find("option"),k=j.eq(f),l=k.prop("selected"),m=k.parent("optgroup"),n=b.options.maxOptions,o=m.data("maxOptions")||!1;if(b.multiple){if(k.prop("selected",!l),b.setSelected(f,!l),d.blur(),n!==!1||o!==!1){var p=n<j.filter(":selected").length,q=o<m.find("option:selected").length;if(n&&p||o&&q)if(n&&1==n)j.prop("selected",!1),k.prop("selected",!0),b.$menuInner.find(".selected").removeClass("selected"),b.setSelected(f,!0);else if(o&&1==o){m.find("option:selected").prop("selected",!1),k.prop("selected",!0);var r=d.parent().data("optgroup");b.$menuInner.find('[data-optgroup="'+r+'"]').removeClass("selected"),b.setSelected(f,!0)}else{var s="string"==typeof b.options.maxOptionsText?[b.options.maxOptionsText,b.options.maxOptionsText]:b.options.maxOptionsText,t="function"==typeof s?s(n,o):s,u=t[0].replace("{n}",n),v=t[1].replace("{n}",o),w=a('<div class="notify"></div>');t[2]&&(u=u.replace("{var}",t[2][n>1?0:1]),v=v.replace("{var}",t[2][o>1?0:1])),k.prop("selected",!1),b.$menu.append(w),n&&p&&(w.append(a("<div>"+u+"</div>")),i=!1,b.$element.trigger("maxReached.bs.select")),o&&q&&(w.append(a("<div>"+v+"</div>")),i=!1,b.$element.trigger("maxReachedGrp.bs.select")),setTimeout(function(){b.setSelected(f,!1)},10),w.delay(750).fadeOut(300,function(){a(this).remove()})}}}else j.prop("selected",!1),k.prop("selected",!0),b.$menuInner.find(".selected").removeClass("selected").find("a").attr("aria-selected",!1),b.setSelected(f,!0);!b.multiple||b.multiple&&1===b.options.maxOptions?b.$button.focus():b.options.liveSearch&&b.$searchbox.focus(),i&&(g!=b.$element.val()&&b.multiple||h!=b.$element.prop("selectedIndex")&&!b.multiple)&&(e=[f,k.prop("selected"),l],b.$element.triggerNative("change"))}}),this.$menu.on("click","li.disabled a, .popover-title, .popover-title :not(.close)",function(c){c.currentTarget==this&&(c.preventDefault(),c.stopPropagation(),b.options.liveSearch&&!a(c.target).hasClass("close")?b.$searchbox.focus():b.$button.focus())}),this.$menuInner.on("click",".divider, .dropdown-header",function(a){a.preventDefault(),a.stopPropagation(),b.options.liveSearch?b.$searchbox.focus():b.$button.focus()}),this.$menu.on("click",".popover-title .close",function(){b.$button.click()}),this.$searchbox.on("click",function(a){a.stopPropagation()}),this.$menu.on("click",".actions-btn",function(c){b.options.liveSearch?b.$searchbox.focus():b.$button.focus(),c.preventDefault(),c.stopPropagation(),a(this).hasClass("bs-select-all")?b.selectAll():b.deselectAll()}),this.$element.change(function(){b.render(!1),b.$element.trigger("changed.bs.select",e),e=null})},liveSearchListener:function(){var c=this,d=a('<li class="no-results"></li>');this.$button.on("click.dropdown.data-api",function(){c.$menuInner.find(".active").removeClass("active"),c.$searchbox.val()&&(c.$searchbox.val(""),c.$lis.not(".is-hidden").removeClass("hidden"),d.parent().length&&d.remove()),c.multiple||c.$menuInner.find(".selected").addClass("active"),setTimeout(function(){c.$searchbox.focus()},10)}),this.$searchbox.on("click.dropdown.data-api focus.dropdown.data-api touchend.dropdown.data-api",function(a){a.stopPropagation()}),this.$searchbox.on("input propertychange",function(){if(c.$lis.not(".is-hidden").removeClass("hidden"),c.$lis.filter(".active").removeClass("active"),d.remove(),c.$searchbox.val()){var e,f=c.$lis.not(".is-hidden, .divider, .dropdown-header");if(e=c.options.liveSearchNormalize?f.not(":a"+c._searchStyle()+'("'+b(c.$searchbox.val())+'")'):f.not(":"+c._searchStyle()+'("'+c.$searchbox.val()+'")'),e.length===f.length)d.html(c.options.noneResultsText.replace("{0}",'"'+i(c.$searchbox.val())+'"')),c.$menuInner.append(d),c.$lis.addClass("hidden");else{e.addClass("hidden");var g,h=c.$lis.not(".hidden");h.each(function(b){var c=a(this);c.hasClass("divider")?void 0===g?c.addClass("hidden"):(g&&g.addClass("hidden"),g=c):c.hasClass("dropdown-header")&&h.eq(b+1).data("optgroup")!==c.data("optgroup")?c.addClass("hidden"):g=null}),g&&g.addClass("hidden"),f.not(".hidden").first().addClass("active")}}})},_searchStyle:function(){var a={begins:"ibegins",startsWith:"ibegins"};return a[this.options.liveSearchStyle]||"icontains"},val:function(a){return"undefined"!=typeof a?(this.$element.val(a),this.render(),this.$element):this.$element.val()},changeAll:function(b){if(this.multiple){"undefined"==typeof b&&(b=!0),this.findLis();var c=this.$element.find("option"),d=this.$lis.not(".divider, .dropdown-header, .disabled, .hidden"),e=d.length,f=[];if(b){if(d.filter(".selected").length===d.length)return}else if(0===d.filter(".selected").length)return;d.toggleClass("selected",b);for(var g=0;g<e;g++){var h=d[g].getAttribute("data-original-index");f[f.length]=c.eq(h)[0]}a(f).prop("selected",b),this.render(!1),this.togglePlaceholder(),this.$element.triggerNative("change")}},selectAll:function(){return this.changeAll(!0)},deselectAll:function(){return this.changeAll(!1)},toggle:function(a){a=a||window.event,a&&a.stopPropagation(),this.$button.trigger("click")},keydown:function(c){var d,e,f,g,h,i,j,k,l,m=a(this),n=m.is("input")?m.parent().parent():m.parent(),o=n.data("this"),p=":not(.disabled, .hidden, .dropdown-header, .divider)",q={32:" ",48:"0",49:"1",50:"2",51:"3",52:"4",53:"5",54:"6",55:"7",56:"8",57:"9",59:";",65:"a",66:"b",67:"c",68:"d",69:"e",70:"f",71:"g",72:"h",73:"i",74:"j",75:"k",76:"l",77:"m",78:"n",79:"o",80:"p",81:"q",82:"r",83:"s",84:"t",85:"u",86:"v",87:"w",88:"x",89:"y",90:"z",96:"0",97:"1",98:"2",99:"3",100:"4",101:"5",102:"6",103:"7",104:"8",105:"9"};if(o.options.liveSearch&&(n=m.parent().parent()),o.options.container&&(n=o.$menu),d=a('[role="listbox"] li',n),l=o.$newElement.hasClass("open"),!l&&(c.keyCode>=48&&c.keyCode<=57||c.keyCode>=96&&c.keyCode<=105||c.keyCode>=65&&c.keyCode<=90))return o.options.container?o.$button.trigger("click"):(o.setSize(),o.$menu.parent().addClass("open"),l=!0),void o.$searchbox.focus();if(o.options.liveSearch&&(/(^9$|27)/.test(c.keyCode.toString(10))&&l&&(c.preventDefault(),c.stopPropagation(),o.$menuInner.click(),o.$button.focus()),d=a('[role="listbox"] li'+p,n),m.val()||/(38|40)/.test(c.keyCode.toString(10))||0===d.filter(".active").length&&(d=o.$menuInner.find("li"),d=o.options.liveSearchNormalize?d.filter(":a"+o._searchStyle()+"("+b(q[c.keyCode])+")"):d.filter(":"+o._searchStyle()+"("+q[c.keyCode]+")"))),d.length){if(/(38|40)/.test(c.keyCode.toString(10)))e=d.index(d.find("a").filter(":focus").parent()),g=d.filter(p).first().index(),h=d.filter(p).last().index(),f=d.eq(e).nextAll(p).eq(0).index(),i=d.eq(e).prevAll(p).eq(0).index(),j=d.eq(f).prevAll(p).eq(0).index(),o.options.liveSearch&&(d.each(function(b){a(this).hasClass("disabled")||a(this).data("index",b)}),e=d.index(d.filter(".active")),g=d.first().data("index"),h=d.last().data("index"),f=d.eq(e).nextAll().eq(0).data("index"),i=d.eq(e).prevAll().eq(0).data("index"),j=d.eq(f).prevAll().eq(0).data("index")),k=m.data("prevIndex"),38==c.keyCode?(o.options.liveSearch&&e--,e!=j&&e>i&&(e=i),e<g&&(e=g),e==k&&(e=h)):40==c.keyCode&&(o.options.liveSearch&&e++,e==-1&&(e=0),e!=j&&e<f&&(e=f),e>h&&(e=h),e==k&&(e=g)),m.data("prevIndex",e),o.options.liveSearch?(c.preventDefault(),m.hasClass("dropdown-toggle")||(d.removeClass("active").eq(e).addClass("active").children("a").focus(),m.focus())):d.eq(e).children("a").focus();else if(!m.is("input")){var r,s,t=[];d.each(function(){a(this).hasClass("disabled")||a.trim(a(this).children("a").text().toLowerCase()).substring(0,1)==q[c.keyCode]&&t.push(a(this).index())}),r=a(document).data("keycount"),r++,a(document).data("keycount",r),s=a.trim(a(":focus").text().toLowerCase()).substring(0,1),s!=q[c.keyCode]?(r=1,a(document).data("keycount",r)):r>=t.length&&(a(document).data("keycount",0),r>t.length&&(r=1)),d.eq(t[r-1]).children("a").focus()}if((/(13|32)/.test(c.keyCode.toString(10))||/(^9$)/.test(c.keyCode.toString(10))&&o.options.selectOnTab)&&l){if(/(32)/.test(c.keyCode.toString(10))||c.preventDefault(),o.options.liveSearch)/(32)/.test(c.keyCode.toString(10))||(o.$menuInner.find(".active a").click(),m.focus());else{
var u=a(":focus");u.click(),u.focus(),c.preventDefault(),a(document).data("spaceSelect",!0)}a(document).data("keycount",0)}(/(^9$|27)/.test(c.keyCode.toString(10))&&l&&(o.multiple||o.options.liveSearch)||/(27)/.test(c.keyCode.toString(10))&&!l)&&(o.$menu.parent().removeClass("open"),o.options.container&&o.$newElement.removeClass("open"),o.$button.focus())}},mobile:function(){this.$element.addClass("mobile-device")},refresh:function(){this.$lis=null,this.liObj={},this.reloadLi(),this.render(),this.checkDisabled(),this.liHeight(!0),this.setStyle(),this.setWidth(),this.$lis&&this.$searchbox.trigger("propertychange"),this.$element.trigger("refreshed.bs.select")},hide:function(){this.$newElement.hide()},show:function(){this.$newElement.show()},remove:function(){this.$newElement.remove(),this.$element.remove()},destroy:function(){this.$newElement.before(this.$element).remove(),this.$bsContainer?this.$bsContainer.remove():this.$menu.remove(),this.$element.off(".bs.select").removeData("selectpicker").removeClass("bs-select-hidden selectpicker")}};var l=a.fn.selectpicker;a.fn.selectpicker=c,a.fn.selectpicker.Constructor=k,a.fn.selectpicker.noConflict=function(){return a.fn.selectpicker=l,this},a(document).data("keycount",0).on("keydown.bs.select",'.bootstrap-select [data-toggle=dropdown], .bootstrap-select [role="listbox"], .bs-searchbox input',k.prototype.keydown).on("focusin.modal",'.bootstrap-select [data-toggle=dropdown], .bootstrap-select [role="listbox"], .bs-searchbox input',function(a){a.stopPropagation()}),a(window).on("load.bs.select.data-api",function(){a(".selectpicker").each(function(){var b=a(this);c.call(b,b.data())})})}(a)});
//# sourceMappingURL=bootstrap-select.js.map
$(window).on('load', function () {
    $.tablesorter.themes.bootstrap = {
            // these classes are added to the table. To see other table classes available,
            // look here: http://getbootstrap.com/css/#tables
            table        : '',
            caption      : 'caption',
            // header class names
            header       : '',
            sortNone     : '',
            sortAsc      : '',
            sortDesc     : '',
            active       : 'colonne_tri', // applied when column is sorted
            hover        : '', // custom css required - a defined bootstrap style may not override other classes
            // icon class names
            icons        : '', // add "icon-white" to make them white; this icon class is added to the <i> in the header
            iconSortNone : 'bootstrap-icon-unsorted', // class name added to icon when column is not sorted
            iconSortAsc  : 'glyphicon glyphicon-chevron-up', // class name added to icon when column has ascending sort
            iconSortDesc : 'glyphicon glyphicon-chevron-down', // class name added to icon when column has descending sort
            filterRow    : '', // filter row class; use widgetOptions.filter_cssFilter for the input/select element
            footerRow    : '',
            footerCells  : '',
            even         : '', // even row zebra striping
            odd          : ''  // odd row zebra striping
        };

        var $table = $('#myTable').tablesorter({
            theme : "bootstrap",
            widthFixed: true,
            headerTemplate : '{content} {icon}',
            dateFormat : "ddmmyyyy",
            sortList: [[7,0]],
            // debug : true,
            headers: {
                0: {sorter: true},
                1: {sorter: true}
            },
            widgets: ["uitheme", "filter"],
            widgetOptions: {
                filter_external : '.search',

                filter_columnFilters: false,
                filter_saveFilters : false,
                filter_reset: '.reset'
            }
        })
        .tablesorterPager({
            container: $('#pager_tab_inscriptions'),
            // output string - default is '{page}/{totalPages}'; possible variables: {page}, {totalPages}, {startRow}, {endRow} and {totalRows}
            output: '{startRow} - {endRow} / {filteredRows}',
            size: 5,
            fixedHeight: false
        })
        
        var filtersCharacter = "";
        var filters = $.tablesorter.getFilters( $('#myTable') );

        if(filters[1] != ""){filtersCharacter = filters[1]; var arrayFilters = filters[1].split('|');
            arrayFilters.forEach(function(e){
                $('#selectToSearchCharacter option[value="' + e +'"]').prop('selected', true);
            });
        }
        
        $('#selectToSearchCharacter').on('change', function(){
            if($(this).val() != null){filtersCharacter = $(this).val().join("|"); } else { filtersCharacter = ""; }
            $('#myTable').trigger('search',[['', filtersCharacter ]]);
        });
});


$(window).on('load', function () {

        $('[data-toggle="tooltip"]').tooltip();

        $("a.lien_animation").click(function(event){
            event.preventDefault();
            if (!$("#panneau_animation").is(':visible')) {
                $("#panneau_animation").afficherPanneauLateral();
            }
            $('#contenu_panneau_animation')
                .empty()
                .load($(this).attr('href'), function(){
                    // $("#loader_panneau_reclamation").hide();
                });
            event.stopPropagation();
        });

        $('#btn_close').click(function () {
            $("#panneau_animation").cacherPanneauLateral();
        });

    }
);

jQuery.fn.afficherPanneauLateral = function() {
    // Si le panneau n'est pas affiché on l'affiche
    if (!$(this).is(':visible')) {
        $(this).addClass('moveFromTop').show();
    }
};

jQuery.fn.cacherPanneauLateral = function() {
    var panneau = $(this).attr('id');
    $(this).removeClass('moveFromTop').addClass('moveToTop');
    // Necessite un timeout pour que l'animation moveToRight ait le temps de s'éxécuter
    // Dans le cas contraire le panneau va se cacher tout de suite
    setTimeout("$('#" + panneau + "').hide().removeClass('moveToTop');", 150);
};