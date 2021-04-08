/*! jQuery v3.5.1 | (c) JS Foundation and other contributors | jquery.org/license */
!function(e,t){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(C,e){"use strict";var t=[],r=Object.getPrototypeOf,s=t.slice,g=t.flat?function(e){return t.flat.call(e)}:function(e){return t.concat.apply([],e)},u=t.push,i=t.indexOf,n={},o=n.toString,v=n.hasOwnProperty,a=v.toString,l=a.call(Object),y={},m=function(e){return"function"==typeof e&&"number"!=typeof e.nodeType},x=function(e){return null!=e&&e===e.window},E=C.document,c={type:!0,src:!0,nonce:!0,noModule:!0};function b(e,t,n){var r,i,o=(n=n||E).createElement("script");if(o.text=e,t)for(r in c)(i=t[r]||t.getAttribute&&t.getAttribute(r))&&o.setAttribute(r,i);n.head.appendChild(o).parentNode.removeChild(o)}function w(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?n[o.call(e)]||"object":typeof e}var f="3.5.1",S=function(e,t){return new S.fn.init(e,t)};function p(e){var t=!!e&&"length"in e&&e.length,n=w(e);return!m(e)&&!x(e)&&("array"===n||0===t||"number"==typeof t&&0<t&&t-1 in e)}S.fn=S.prototype={jquery:f,constructor:S,length:0,toArray:function(){return s.call(this)},get:function(e){return null==e?s.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=S.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return S.each(this,e)},map:function(n){return this.pushStack(S.map(this,function(e,t){return n.call(e,t,e)}))},slice:function(){return this.pushStack(s.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(S.grep(this,function(e,t){return(t+1)%2}))},odd:function(){return this.pushStack(S.grep(this,function(e,t){return t%2}))},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(0<=n&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:u,sort:t.sort,splice:t.splice},S.extend=S.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,l=!1;for("boolean"==typeof a&&(l=a,a=arguments[s]||{},s++),"object"==typeof a||m(a)||(a={}),s===u&&(a=this,s--);s<u;s++)if(null!=(e=arguments[s]))for(t in e)r=e[t],"__proto__"!==t&&a!==r&&(l&&r&&(S.isPlainObject(r)||(i=Array.isArray(r)))?(n=a[t],o=i&&!Array.isArray(n)?[]:i||S.isPlainObject(n)?n:{},i=!1,a[t]=S.extend(l,o,r)):void 0!==r&&(a[t]=r));return a},S.extend({expando:"jQuery"+(f+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==o.call(e))&&(!(t=r(e))||"function"==typeof(n=v.call(t,"constructor")&&t.constructor)&&a.call(n)===l)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e,t,n){b(e,{nonce:t&&t.nonce},n)},each:function(e,t){var n,r=0;if(p(e)){for(n=e.length;r<n;r++)if(!1===t.call(e[r],r,e[r]))break}else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},makeArray:function(e,t){var n=t||[];return null!=e&&(p(Object(e))?S.merge(n,"string"==typeof e?[e]:e):u.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:i.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r=[],i=0,o=e.length,a=!n;i<o;i++)!t(e[i],i)!==a&&r.push(e[i]);return r},map:function(e,t,n){var r,i,o=0,a=[];if(p(e))for(r=e.length;o<r;o++)null!=(i=t(e[o],o,n))&&a.push(i);else for(o in e)null!=(i=t(e[o],o,n))&&a.push(i);return g(a)},guid:1,support:y}),"function"==typeof Symbol&&(S.fn[Symbol.iterator]=t[Symbol.iterator]),S.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){n["[object "+t+"]"]=t.toLowerCase()});var d=function(n){var e,d,b,o,i,h,f,g,w,u,l,T,C,a,E,v,s,c,y,S="sizzle"+1*new Date,p=n.document,k=0,r=0,m=ue(),x=ue(),A=ue(),N=ue(),D=function(e,t){return e===t&&(l=!0),0},j={}.hasOwnProperty,t=[],q=t.pop,L=t.push,H=t.push,O=t.slice,P=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},R="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",I="(?:\\\\[\\da-fA-F]{1,6}"+M+"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",W="\\["+M+"*("+I+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+I+"))|)"+M+"*\\]",F=":("+I+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+W+")*)|.*)\\)|)",B=new RegExp(M+"+","g"),$=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),_=new RegExp("^"+M+"*,"+M+"*"),z=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=new RegExp(M+"|>"),X=new RegExp(F),V=new RegExp("^"+I+"$"),G={ID:new RegExp("^#("+I+")"),CLASS:new RegExp("^\\.("+I+")"),TAG:new RegExp("^("+I+"|[*])"),ATTR:new RegExp("^"+W),PSEUDO:new RegExp("^"+F),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+R+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Y=/HTML$/i,Q=/^(?:input|select|textarea|button)$/i,J=/^h\d$/i,K=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ee=/[+~]/,te=new RegExp("\\\\[\\da-fA-F]{1,6}"+M+"?|\\\\([^\\r\\n\\f])","g"),ne=function(e,t){var n="0x"+e.slice(1)-65536;return t||(n<0?String.fromCharCode(n+65536):String.fromCharCode(n>>10|55296,1023&n|56320))},re=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ie=function(e,t){return t?"\0"===e?"\ufffd":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},oe=function(){T()},ae=be(function(e){return!0===e.disabled&&"fieldset"===e.nodeName.toLowerCase()},{dir:"parentNode",next:"legend"});try{H.apply(t=O.call(p.childNodes),p.childNodes),t[p.childNodes.length].nodeType}catch(e){H={apply:t.length?function(e,t){L.apply(e,O.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function se(t,e,n,r){var i,o,a,s,u,l,c,f=e&&e.ownerDocument,p=e?e.nodeType:9;if(n=n||[],"string"!=typeof t||!t||1!==p&&9!==p&&11!==p)return n;if(!r&&(T(e),e=e||C,E)){if(11!==p&&(u=Z.exec(t)))if(i=u[1]){if(9===p){if(!(a=e.getElementById(i)))return n;if(a.id===i)return n.push(a),n}else if(f&&(a=f.getElementById(i))&&y(e,a)&&a.id===i)return n.push(a),n}else{if(u[2])return H.apply(n,e.getElementsByTagName(t)),n;if((i=u[3])&&d.getElementsByClassName&&e.getElementsByClassName)return H.apply(n,e.getElementsByClassName(i)),n}if(d.qsa&&!N[t+" "]&&(!v||!v.test(t))&&(1!==p||"object"!==e.nodeName.toLowerCase())){if(c=t,f=e,1===p&&(U.test(t)||z.test(t))){(f=ee.test(t)&&ye(e.parentNode)||e)===e&&d.scope||((s=e.getAttribute("id"))?s=s.replace(re,ie):e.setAttribute("id",s=S)),o=(l=h(t)).length;while(o--)l[o]=(s?"#"+s:":scope")+" "+xe(l[o]);c=l.join(",")}try{return H.apply(n,f.querySelectorAll(c)),n}catch(e){N(t,!0)}finally{s===S&&e.removeAttribute("id")}}}return g(t.replace($,"$1"),e,n,r)}function ue(){var r=[];return function e(t,n){return r.push(t+" ")>b.cacheLength&&delete e[r.shift()],e[t+" "]=n}}function le(e){return e[S]=!0,e}function ce(e){var t=C.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function fe(e,t){var n=e.split("|"),r=n.length;while(r--)b.attrHandle[n[r]]=t}function pe(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function de(t){return function(e){return"input"===e.nodeName.toLowerCase()&&e.type===t}}function he(n){return function(e){var t=e.nodeName.toLowerCase();return("input"===t||"button"===t)&&e.type===n}}function ge(t){return function(e){return"form"in e?e.parentNode&&!1===e.disabled?"label"in e?"label"in e.parentNode?e.parentNode.disabled===t:e.disabled===t:e.isDisabled===t||e.isDisabled!==!t&&ae(e)===t:e.disabled===t:"label"in e&&e.disabled===t}}function ve(a){return le(function(o){return o=+o,le(function(e,t){var n,r=a([],e.length,o),i=r.length;while(i--)e[n=r[i]]&&(e[n]=!(t[n]=e[n]))})})}function ye(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}for(e in d=se.support={},i=se.isXML=function(e){var t=e.namespaceURI,n=(e.ownerDocument||e).documentElement;return!Y.test(t||n&&n.nodeName||"HTML")},T=se.setDocument=function(e){var t,n,r=e?e.ownerDocument||e:p;return r!=C&&9===r.nodeType&&r.documentElement&&(a=(C=r).documentElement,E=!i(C),p!=C&&(n=C.defaultView)&&n.top!==n&&(n.addEventListener?n.addEventListener("unload",oe,!1):n.attachEvent&&n.attachEvent("onunload",oe)),d.scope=ce(function(e){return a.appendChild(e).appendChild(C.createElement("div")),"undefined"!=typeof e.querySelectorAll&&!e.querySelectorAll(":scope fieldset div").length}),d.attributes=ce(function(e){return e.className="i",!e.getAttribute("className")}),d.getElementsByTagName=ce(function(e){return e.appendChild(C.createComment("")),!e.getElementsByTagName("*").length}),d.getElementsByClassName=K.test(C.getElementsByClassName),d.getById=ce(function(e){return a.appendChild(e).id=S,!C.getElementsByName||!C.getElementsByName(S).length}),d.getById?(b.filter.ID=function(e){var t=e.replace(te,ne);return function(e){return e.getAttribute("id")===t}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n=t.getElementById(e);return n?[n]:[]}}):(b.filter.ID=function(e){var n=e.replace(te,ne);return function(e){var t="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return t&&t.value===n}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n,r,i,o=t.getElementById(e);if(o){if((n=o.getAttributeNode("id"))&&n.value===e)return[o];i=t.getElementsByName(e),r=0;while(o=i[r++])if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),b.find.TAG=d.getElementsByTagName?function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):d.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},b.find.CLASS=d.getElementsByClassName&&function(e,t){if("undefined"!=typeof t.getElementsByClassName&&E)return t.getElementsByClassName(e)},s=[],v=[],(d.qsa=K.test(C.querySelectorAll))&&(ce(function(e){var t;a.appendChild(e).innerHTML="<a id='"+S+"'></a><select id='"+S+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&v.push("[*^$]="+M+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||v.push("\\["+M+"*(?:value|"+R+")"),e.querySelectorAll("[id~="+S+"-]").length||v.push("~="),(t=C.createElement("input")).setAttribute("name",""),e.appendChild(t),e.querySelectorAll("[name='']").length||v.push("\\["+M+"*name"+M+"*="+M+"*(?:''|\"\")"),e.querySelectorAll(":checked").length||v.push(":checked"),e.querySelectorAll("a#"+S+"+*").length||v.push(".#.+[+~]"),e.querySelectorAll("\\\f"),v.push("[\\r\\n\\f]")}),ce(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t=C.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&v.push("name"+M+"*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&v.push(":enabled",":disabled"),a.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&v.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),v.push(",.*:")})),(d.matchesSelector=K.test(c=a.matches||a.webkitMatchesSelector||a.mozMatchesSelector||a.oMatchesSelector||a.msMatchesSelector))&&ce(function(e){d.disconnectedMatch=c.call(e,"*"),c.call(e,"[s!='']:x"),s.push("!=",F)}),v=v.length&&new RegExp(v.join("|")),s=s.length&&new RegExp(s.join("|")),t=K.test(a.compareDocumentPosition),y=t||K.test(a.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},D=t?function(e,t){if(e===t)return l=!0,0;var n=!e.compareDocumentPosition-!t.compareDocumentPosition;return n||(1&(n=(e.ownerDocument||e)==(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!d.sortDetached&&t.compareDocumentPosition(e)===n?e==C||e.ownerDocument==p&&y(p,e)?-1:t==C||t.ownerDocument==p&&y(p,t)?1:u?P(u,e)-P(u,t):0:4&n?-1:1)}:function(e,t){if(e===t)return l=!0,0;var n,r=0,i=e.parentNode,o=t.parentNode,a=[e],s=[t];if(!i||!o)return e==C?-1:t==C?1:i?-1:o?1:u?P(u,e)-P(u,t):0;if(i===o)return pe(e,t);n=e;while(n=n.parentNode)a.unshift(n);n=t;while(n=n.parentNode)s.unshift(n);while(a[r]===s[r])r++;return r?pe(a[r],s[r]):a[r]==p?-1:s[r]==p?1:0}),C},se.matches=function(e,t){return se(e,null,null,t)},se.matchesSelector=function(e,t){if(T(e),d.matchesSelector&&E&&!N[t+" "]&&(!s||!s.test(t))&&(!v||!v.test(t)))try{var n=c.call(e,t);if(n||d.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(e){N(t,!0)}return 0<se(t,C,null,[e]).length},se.contains=function(e,t){return(e.ownerDocument||e)!=C&&T(e),y(e,t)},se.attr=function(e,t){(e.ownerDocument||e)!=C&&T(e);var n=b.attrHandle[t.toLowerCase()],r=n&&j.call(b.attrHandle,t.toLowerCase())?n(e,t,!E):void 0;return void 0!==r?r:d.attributes||!E?e.getAttribute(t):(r=e.getAttributeNode(t))&&r.specified?r.value:null},se.escape=function(e){return(e+"").replace(re,ie)},se.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},se.uniqueSort=function(e){var t,n=[],r=0,i=0;if(l=!d.detectDuplicates,u=!d.sortStable&&e.slice(0),e.sort(D),l){while(t=e[i++])t===e[i]&&(r=n.push(i));while(r--)e.splice(n[r],1)}return u=null,e},o=se.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=o(e)}else if(3===i||4===i)return e.nodeValue}else while(t=e[r++])n+=o(t);return n},(b=se.selectors={cacheLength:50,createPseudo:le,match:G,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(te,ne),e[3]=(e[3]||e[4]||e[5]||"").replace(te,ne),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||se.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&se.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return G.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&X.test(n)&&(t=h(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(te,ne).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=m[e+" "];return t||(t=new RegExp("(^|"+M+")"+e+"("+M+"|$)"))&&m(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(n,r,i){return function(e){var t=se.attr(e,n);return null==t?"!="===r:!r||(t+="","="===r?t===i:"!="===r?t!==i:"^="===r?i&&0===t.indexOf(i):"*="===r?i&&-1<t.indexOf(i):"$="===r?i&&t.slice(-i.length)===i:"~="===r?-1<(" "+t.replace(B," ")+" ").indexOf(i):"|="===r&&(t===i||t.slice(0,i.length+1)===i+"-"))}},CHILD:function(h,e,t,g,v){var y="nth"!==h.slice(0,3),m="last"!==h.slice(-4),x="of-type"===e;return 1===g&&0===v?function(e){return!!e.parentNode}:function(e,t,n){var r,i,o,a,s,u,l=y!==m?"nextSibling":"previousSibling",c=e.parentNode,f=x&&e.nodeName.toLowerCase(),p=!n&&!x,d=!1;if(c){if(y){while(l){a=e;while(a=a[l])if(x?a.nodeName.toLowerCase()===f:1===a.nodeType)return!1;u=l="only"===h&&!u&&"nextSibling"}return!0}if(u=[m?c.firstChild:c.lastChild],m&&p){d=(s=(r=(i=(o=(a=c)[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===k&&r[1])&&r[2],a=s&&c.childNodes[s];while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if(1===a.nodeType&&++d&&a===e){i[h]=[k,s,d];break}}else if(p&&(d=s=(r=(i=(o=(a=e)[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===k&&r[1]),!1===d)while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if((x?a.nodeName.toLowerCase()===f:1===a.nodeType)&&++d&&(p&&((i=(o=a[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]=[k,d]),a===e))break;return(d-=v)===g||d%g==0&&0<=d/g}}},PSEUDO:function(e,o){var t,a=b.pseudos[e]||b.setFilters[e.toLowerCase()]||se.error("unsupported pseudo: "+e);return a[S]?a(o):1<a.length?(t=[e,e,"",o],b.setFilters.hasOwnProperty(e.toLowerCase())?le(function(e,t){var n,r=a(e,o),i=r.length;while(i--)e[n=P(e,r[i])]=!(t[n]=r[i])}):function(e){return a(e,0,t)}):a}},pseudos:{not:le(function(e){var r=[],i=[],s=f(e.replace($,"$1"));return s[S]?le(function(e,t,n,r){var i,o=s(e,null,r,[]),a=e.length;while(a--)(i=o[a])&&(e[a]=!(t[a]=i))}):function(e,t,n){return r[0]=e,s(r,null,n,i),r[0]=null,!i.pop()}}),has:le(function(t){return function(e){return 0<se(t,e).length}}),contains:le(function(t){return t=t.replace(te,ne),function(e){return-1<(e.textContent||o(e)).indexOf(t)}}),lang:le(function(n){return V.test(n||"")||se.error("unsupported lang: "+n),n=n.replace(te,ne).toLowerCase(),function(e){var t;do{if(t=E?e.lang:e.getAttribute("xml:lang")||e.getAttribute("lang"))return(t=t.toLowerCase())===n||0===t.indexOf(n+"-")}while((e=e.parentNode)&&1===e.nodeType);return!1}}),target:function(e){var t=n.location&&n.location.hash;return t&&t.slice(1)===e.id},root:function(e){return e===a},focus:function(e){return e===C.activeElement&&(!C.hasFocus||C.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:ge(!1),disabled:ge(!0),checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!b.pseudos.empty(e)},header:function(e){return J.test(e.nodeName)},input:function(e){return Q.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:ve(function(){return[0]}),last:ve(function(e,t){return[t-1]}),eq:ve(function(e,t,n){return[n<0?n+t:n]}),even:ve(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:ve(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:ve(function(e,t,n){for(var r=n<0?n+t:t<n?t:n;0<=--r;)e.push(r);return e}),gt:ve(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=b.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})b.pseudos[e]=de(e);for(e in{submit:!0,reset:!0})b.pseudos[e]=he(e);function me(){}function xe(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function be(s,e,t){var u=e.dir,l=e.next,c=l||u,f=t&&"parentNode"===c,p=r++;return e.first?function(e,t,n){while(e=e[u])if(1===e.nodeType||f)return s(e,t,n);return!1}:function(e,t,n){var r,i,o,a=[k,p];if(n){while(e=e[u])if((1===e.nodeType||f)&&s(e,t,n))return!0}else while(e=e[u])if(1===e.nodeType||f)if(i=(o=e[S]||(e[S]={}))[e.uniqueID]||(o[e.uniqueID]={}),l&&l===e.nodeName.toLowerCase())e=e[u]||e;else{if((r=i[c])&&r[0]===k&&r[1]===p)return a[2]=r[2];if((i[c]=a)[2]=s(e,t,n))return!0}return!1}}function we(i){return 1<i.length?function(e,t,n){var r=i.length;while(r--)if(!i[r](e,t,n))return!1;return!0}:i[0]}function Te(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;s<u;s++)(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),l&&t.push(s)));return a}function Ce(d,h,g,v,y,e){return v&&!v[S]&&(v=Ce(v)),y&&!y[S]&&(y=Ce(y,e)),le(function(e,t,n,r){var i,o,a,s=[],u=[],l=t.length,c=e||function(e,t,n){for(var r=0,i=t.length;r<i;r++)se(e,t[r],n);return n}(h||"*",n.nodeType?[n]:n,[]),f=!d||!e&&h?c:Te(c,s,d,n,r),p=g?y||(e?d:l||v)?[]:t:f;if(g&&g(f,p,n,r),v){i=Te(p,u),v(i,[],n,r),o=i.length;while(o--)(a=i[o])&&(p[u[o]]=!(f[u[o]]=a))}if(e){if(y||d){if(y){i=[],o=p.length;while(o--)(a=p[o])&&i.push(f[o]=a);y(null,p=[],i,r)}o=p.length;while(o--)(a=p[o])&&-1<(i=y?P(e,a):s[o])&&(e[i]=!(t[i]=a))}}else p=Te(p===t?p.splice(l,p.length):p),y?y(null,t,p,r):H.apply(t,p)})}function Ee(e){for(var i,t,n,r=e.length,o=b.relative[e[0].type],a=o||b.relative[" "],s=o?1:0,u=be(function(e){return e===i},a,!0),l=be(function(e){return-1<P(i,e)},a,!0),c=[function(e,t,n){var r=!o&&(n||t!==w)||((i=t).nodeType?u(e,t,n):l(e,t,n));return i=null,r}];s<r;s++)if(t=b.relative[e[s].type])c=[be(we(c),t)];else{if((t=b.filter[e[s].type].apply(null,e[s].matches))[S]){for(n=++s;n<r;n++)if(b.relative[e[n].type])break;return Ce(1<s&&we(c),1<s&&xe(e.slice(0,s-1).concat({value:" "===e[s-2].type?"*":""})).replace($,"$1"),t,s<n&&Ee(e.slice(s,n)),n<r&&Ee(e=e.slice(n)),n<r&&xe(e))}c.push(t)}return we(c)}return me.prototype=b.filters=b.pseudos,b.setFilters=new me,h=se.tokenize=function(e,t){var n,r,i,o,a,s,u,l=x[e+" "];if(l)return t?0:l.slice(0);a=e,s=[],u=b.preFilter;while(a){for(o in n&&!(r=_.exec(a))||(r&&(a=a.slice(r[0].length)||a),s.push(i=[])),n=!1,(r=z.exec(a))&&(n=r.shift(),i.push({value:n,type:r[0].replace($," ")}),a=a.slice(n.length)),b.filter)!(r=G[o].exec(a))||u[o]&&!(r=u[o](r))||(n=r.shift(),i.push({value:n,type:o,matches:r}),a=a.slice(n.length));if(!n)break}return t?a.length:a?se.error(e):x(e,s).slice(0)},f=se.compile=function(e,t){var n,v,y,m,x,r,i=[],o=[],a=A[e+" "];if(!a){t||(t=h(e)),n=t.length;while(n--)(a=Ee(t[n]))[S]?i.push(a):o.push(a);(a=A(e,(v=o,m=0<(y=i).length,x=0<v.length,r=function(e,t,n,r,i){var o,a,s,u=0,l="0",c=e&&[],f=[],p=w,d=e||x&&b.find.TAG("*",i),h=k+=null==p?1:Math.random()||.1,g=d.length;for(i&&(w=t==C||t||i);l!==g&&null!=(o=d[l]);l++){if(x&&o){a=0,t||o.ownerDocument==C||(T(o),n=!E);while(s=v[a++])if(s(o,t||C,n)){r.push(o);break}i&&(k=h)}m&&((o=!s&&o)&&u--,e&&c.push(o))}if(u+=l,m&&l!==u){a=0;while(s=y[a++])s(c,f,t,n);if(e){if(0<u)while(l--)c[l]||f[l]||(f[l]=q.call(r));f=Te(f)}H.apply(r,f),i&&!e&&0<f.length&&1<u+y.length&&se.uniqueSort(r)}return i&&(k=h,w=p),c},m?le(r):r))).selector=e}return a},g=se.select=function(e,t,n,r){var i,o,a,s,u,l="function"==typeof e&&e,c=!r&&h(e=l.selector||e);if(n=n||[],1===c.length){if(2<(o=c[0]=c[0].slice(0)).length&&"ID"===(a=o[0]).type&&9===t.nodeType&&E&&b.relative[o[1].type]){if(!(t=(b.find.ID(a.matches[0].replace(te,ne),t)||[])[0]))return n;l&&(t=t.parentNode),e=e.slice(o.shift().value.length)}i=G.needsContext.test(e)?0:o.length;while(i--){if(a=o[i],b.relative[s=a.type])break;if((u=b.find[s])&&(r=u(a.matches[0].replace(te,ne),ee.test(o[0].type)&&ye(t.parentNode)||t))){if(o.splice(i,1),!(e=r.length&&xe(o)))return H.apply(n,r),n;break}}}return(l||f(e,c))(r,t,!E,n,!t||ee.test(e)&&ye(t.parentNode)||t),n},d.sortStable=S.split("").sort(D).join("")===S,d.detectDuplicates=!!l,T(),d.sortDetached=ce(function(e){return 1&e.compareDocumentPosition(C.createElement("fieldset"))}),ce(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||fe("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),d.attributes&&ce(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||fe("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),ce(function(e){return null==e.getAttribute("disabled")})||fe(R,function(e,t,n){var r;if(!n)return!0===e[t]?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),se}(C);S.find=d,S.expr=d.selectors,S.expr[":"]=S.expr.pseudos,S.uniqueSort=S.unique=d.uniqueSort,S.text=d.getText,S.isXMLDoc=d.isXML,S.contains=d.contains,S.escapeSelector=d.escape;var h=function(e,t,n){var r=[],i=void 0!==n;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&S(e).is(n))break;r.push(e)}return r},T=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},k=S.expr.match.needsContext;function A(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}var N=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function D(e,n,r){return m(n)?S.grep(e,function(e,t){return!!n.call(e,t,e)!==r}):n.nodeType?S.grep(e,function(e){return e===n!==r}):"string"!=typeof n?S.grep(e,function(e){return-1<i.call(n,e)!==r}):S.filter(n,e,r)}S.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?S.find.matchesSelector(r,e)?[r]:[]:S.find.matches(e,S.grep(t,function(e){return 1===e.nodeType}))},S.fn.extend({find:function(e){var t,n,r=this.length,i=this;if("string"!=typeof e)return this.pushStack(S(e).filter(function(){for(t=0;t<r;t++)if(S.contains(i[t],this))return!0}));for(n=this.pushStack([]),t=0;t<r;t++)S.find(e,i[t],n);return 1<r?S.uniqueSort(n):n},filter:function(e){return this.pushStack(D(this,e||[],!1))},not:function(e){return this.pushStack(D(this,e||[],!0))},is:function(e){return!!D(this,"string"==typeof e&&k.test(e)?S(e):e||[],!1).length}});var j,q=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(S.fn.init=function(e,t,n){var r,i;if(!e)return this;if(n=n||j,"string"==typeof e){if(!(r="<"===e[0]&&">"===e[e.length-1]&&3<=e.length?[null,e,null]:q.exec(e))||!r[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(r[1]){if(t=t instanceof S?t[0]:t,S.merge(this,S.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:E,!0)),N.test(r[1])&&S.isPlainObject(t))for(r in t)m(this[r])?this[r](t[r]):this.attr(r,t[r]);return this}return(i=E.getElementById(r[2]))&&(this[0]=i,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):m(e)?void 0!==n.ready?n.ready(e):e(S):S.makeArray(e,this)}).prototype=S.fn,j=S(E);var L=/^(?:parents|prev(?:Until|All))/,H={children:!0,contents:!0,next:!0,prev:!0};function O(e,t){while((e=e[t])&&1!==e.nodeType);return e}S.fn.extend({has:function(e){var t=S(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(S.contains(this,t[e]))return!0})},closest:function(e,t){var n,r=0,i=this.length,o=[],a="string"!=typeof e&&S(e);if(!k.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?-1<a.index(n):1===n.nodeType&&S.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(1<o.length?S.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?i.call(S(e),this[0]):i.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(S.uniqueSort(S.merge(this.get(),S(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),S.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return h(e,"parentNode")},parentsUntil:function(e,t,n){return h(e,"parentNode",n)},next:function(e){return O(e,"nextSibling")},prev:function(e){return O(e,"previousSibling")},nextAll:function(e){return h(e,"nextSibling")},prevAll:function(e){return h(e,"previousSibling")},nextUntil:function(e,t,n){return h(e,"nextSibling",n)},prevUntil:function(e,t,n){return h(e,"previousSibling",n)},siblings:function(e){return T((e.parentNode||{}).firstChild,e)},children:function(e){return T(e.firstChild)},contents:function(e){return null!=e.contentDocument&&r(e.contentDocument)?e.contentDocument:(A(e,"template")&&(e=e.content||e),S.merge([],e.childNodes))}},function(r,i){S.fn[r]=function(e,t){var n=S.map(this,i,e);return"Until"!==r.slice(-5)&&(t=e),t&&"string"==typeof t&&(n=S.filter(t,n)),1<this.length&&(H[r]||S.uniqueSort(n),L.test(r)&&n.reverse()),this.pushStack(n)}});var P=/[^\x20\t\r\n\f]+/g;function R(e){return e}function M(e){throw e}function I(e,t,n,r){var i;try{e&&m(i=e.promise)?i.call(e).done(t).fail(n):e&&m(i=e.then)?i.call(e,t,n):t.apply(void 0,[e].slice(r))}catch(e){n.apply(void 0,[e])}}S.Callbacks=function(r){var e,n;r="string"==typeof r?(e=r,n={},S.each(e.match(P)||[],function(e,t){n[t]=!0}),n):S.extend({},r);var i,t,o,a,s=[],u=[],l=-1,c=function(){for(a=a||r.once,o=i=!0;u.length;l=-1){t=u.shift();while(++l<s.length)!1===s[l].apply(t[0],t[1])&&r.stopOnFalse&&(l=s.length,t=!1)}r.memory||(t=!1),i=!1,a&&(s=t?[]:"")},f={add:function(){return s&&(t&&!i&&(l=s.length-1,u.push(t)),function n(e){S.each(e,function(e,t){m(t)?r.unique&&f.has(t)||s.push(t):t&&t.length&&"string"!==w(t)&&n(t)})}(arguments),t&&!i&&c()),this},remove:function(){return S.each(arguments,function(e,t){var n;while(-1<(n=S.inArray(t,s,n)))s.splice(n,1),n<=l&&l--}),this},has:function(e){return e?-1<S.inArray(e,s):0<s.length},empty:function(){return s&&(s=[]),this},disable:function(){return a=u=[],s=t="",this},disabled:function(){return!s},lock:function(){return a=u=[],t||i||(s=t=""),this},locked:function(){return!!a},fireWith:function(e,t){return a||(t=[e,(t=t||[]).slice?t.slice():t],u.push(t),i||c()),this},fire:function(){return f.fireWith(this,arguments),this},fired:function(){return!!o}};return f},S.extend({Deferred:function(e){var o=[["notify","progress",S.Callbacks("memory"),S.Callbacks("memory"),2],["resolve","done",S.Callbacks("once memory"),S.Callbacks("once memory"),0,"resolved"],["reject","fail",S.Callbacks("once memory"),S.Callbacks("once memory"),1,"rejected"]],i="pending",a={state:function(){return i},always:function(){return s.done(arguments).fail(arguments),this},"catch":function(e){return a.then(null,e)},pipe:function(){var i=arguments;return S.Deferred(function(r){S.each(o,function(e,t){var n=m(i[t[4]])&&i[t[4]];s[t[1]](function(){var e=n&&n.apply(this,arguments);e&&m(e.promise)?e.promise().progress(r.notify).done(r.resolve).fail(r.reject):r[t[0]+"With"](this,n?[e]:arguments)})}),i=null}).promise()},then:function(t,n,r){var u=0;function l(i,o,a,s){return function(){var n=this,r=arguments,e=function(){var e,t;if(!(i<u)){if((e=a.apply(n,r))===o.promise())throw new TypeError("Thenable self-resolution");t=e&&("object"==typeof e||"function"==typeof e)&&e.then,m(t)?s?t.call(e,l(u,o,R,s),l(u,o,M,s)):(u++,t.call(e,l(u,o,R,s),l(u,o,M,s),l(u,o,R,o.notifyWith))):(a!==R&&(n=void 0,r=[e]),(s||o.resolveWith)(n,r))}},t=s?e:function(){try{e()}catch(e){S.Deferred.exceptionHook&&S.Deferred.exceptionHook(e,t.stackTrace),u<=i+1&&(a!==M&&(n=void 0,r=[e]),o.rejectWith(n,r))}};i?t():(S.Deferred.getStackHook&&(t.stackTrace=S.Deferred.getStackHook()),C.setTimeout(t))}}return S.Deferred(function(e){o[0][3].add(l(0,e,m(r)?r:R,e.notifyWith)),o[1][3].add(l(0,e,m(t)?t:R)),o[2][3].add(l(0,e,m(n)?n:M))}).promise()},promise:function(e){return null!=e?S.extend(e,a):a}},s={};return S.each(o,function(e,t){var n=t[2],r=t[5];a[t[1]]=n.add,r&&n.add(function(){i=r},o[3-e][2].disable,o[3-e][3].disable,o[0][2].lock,o[0][3].lock),n.add(t[3].fire),s[t[0]]=function(){return s[t[0]+"With"](this===s?void 0:this,arguments),this},s[t[0]+"With"]=n.fireWith}),a.promise(s),e&&e.call(s,s),s},when:function(e){var n=arguments.length,t=n,r=Array(t),i=s.call(arguments),o=S.Deferred(),a=function(t){return function(e){r[t]=this,i[t]=1<arguments.length?s.call(arguments):e,--n||o.resolveWith(r,i)}};if(n<=1&&(I(e,o.done(a(t)).resolve,o.reject,!n),"pending"===o.state()||m(i[t]&&i[t].then)))return o.then();while(t--)I(i[t],a(t),o.reject);return o.promise()}});var W=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;S.Deferred.exceptionHook=function(e,t){C.console&&C.console.warn&&e&&W.test(e.name)&&C.console.warn("jQuery.Deferred exception: "+e.message,e.stack,t)},S.readyException=function(e){C.setTimeout(function(){throw e})};var F=S.Deferred();function B(){E.removeEventListener("DOMContentLoaded",B),C.removeEventListener("load",B),S.ready()}S.fn.ready=function(e){return F.then(e)["catch"](function(e){S.readyException(e)}),this},S.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--S.readyWait:S.isReady)||(S.isReady=!0)!==e&&0<--S.readyWait||F.resolveWith(E,[S])}}),S.ready.then=F.then,"complete"===E.readyState||"loading"!==E.readyState&&!E.documentElement.doScroll?C.setTimeout(S.ready):(E.addEventListener("DOMContentLoaded",B),C.addEventListener("load",B));var $=function(e,t,n,r,i,o,a){var s=0,u=e.length,l=null==n;if("object"===w(n))for(s in i=!0,n)$(e,t,s,n[s],!0,o,a);else if(void 0!==r&&(i=!0,m(r)||(a=!0),l&&(a?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(S(e),n)})),t))for(;s<u;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?e:l?t.call(e):u?t(e[0],n):o},_=/^-ms-/,z=/-([a-z])/g;function U(e,t){return t.toUpperCase()}function X(e){return e.replace(_,"ms-").replace(z,U)}var V=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function G(){this.expando=S.expando+G.uid++}G.uid=1,G.prototype={cache:function(e){var t=e[this.expando];return t||(t={},V(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);if("string"==typeof t)i[X(t)]=n;else for(r in t)i[X(r)]=t[r];return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][X(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t){n=(t=Array.isArray(t)?t.map(X):(t=X(t))in r?[t]:t.match(P)||[]).length;while(n--)delete r[t[n]]}(void 0===t||S.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!S.isEmptyObject(t)}};var Y=new G,Q=new G,J=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,K=/[A-Z]/g;function Z(e,t,n){var r,i;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(K,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n="true"===(i=n)||"false"!==i&&("null"===i?null:i===+i+""?+i:J.test(i)?JSON.parse(i):i)}catch(e){}Q.set(e,t,n)}else n=void 0;return n}S.extend({hasData:function(e){return Q.hasData(e)||Y.hasData(e)},data:function(e,t,n){return Q.access(e,t,n)},removeData:function(e,t){Q.remove(e,t)},_data:function(e,t,n){return Y.access(e,t,n)},_removeData:function(e,t){Y.remove(e,t)}}),S.fn.extend({data:function(n,e){var t,r,i,o=this[0],a=o&&o.attributes;if(void 0===n){if(this.length&&(i=Q.get(o),1===o.nodeType&&!Y.get(o,"hasDataAttrs"))){t=a.length;while(t--)a[t]&&0===(r=a[t].name).indexOf("data-")&&(r=X(r.slice(5)),Z(o,r,i[r]));Y.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof n?this.each(function(){Q.set(this,n)}):$(this,function(e){var t;if(o&&void 0===e)return void 0!==(t=Q.get(o,n))?t:void 0!==(t=Z(o,n))?t:void 0;this.each(function(){Q.set(this,n,e)})},null,e,1<arguments.length,null,!0)},removeData:function(e){return this.each(function(){Q.remove(this,e)})}}),S.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=Y.get(e,t),n&&(!r||Array.isArray(n)?r=Y.access(e,t,S.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=S.queue(e,t),r=n.length,i=n.shift(),o=S._queueHooks(e,t);"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,function(){S.dequeue(e,t)},o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return Y.get(e,n)||Y.access(e,n,{empty:S.Callbacks("once memory").add(function(){Y.remove(e,[t+"queue",n])})})}}),S.fn.extend({queue:function(t,n){var e=2;return"string"!=typeof t&&(n=t,t="fx",e--),arguments.length<e?S.queue(this[0],t):void 0===n?this:this.each(function(){var e=S.queue(this,t,n);S._queueHooks(this,t),"fx"===t&&"inprogress"!==e[0]&&S.dequeue(this,t)})},dequeue:function(e){return this.each(function(){S.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=S.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=void 0),e=e||"fx";while(a--)(n=Y.get(o[a],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}});var ee=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,te=new RegExp("^(?:([+-])=|)("+ee+")([a-z%]*)$","i"),ne=["Top","Right","Bottom","Left"],re=E.documentElement,ie=function(e){return S.contains(e.ownerDocument,e)},oe={composed:!0};re.getRootNode&&(ie=function(e){return S.contains(e.ownerDocument,e)||e.getRootNode(oe)===e.ownerDocument});var ae=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&ie(e)&&"none"===S.css(e,"display")};function se(e,t,n,r){var i,o,a=20,s=r?function(){return r.cur()}:function(){return S.css(e,t,"")},u=s(),l=n&&n[3]||(S.cssNumber[t]?"":"px"),c=e.nodeType&&(S.cssNumber[t]||"px"!==l&&+u)&&te.exec(S.css(e,t));if(c&&c[3]!==l){u/=2,l=l||c[3],c=+u||1;while(a--)S.style(e,t,c+l),(1-o)*(1-(o=s()/u||.5))<=0&&(a=0),c/=o;c*=2,S.style(e,t,c+l),n=n||[]}return n&&(c=+c||+u||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i}var ue={};function le(e,t){for(var n,r,i,o,a,s,u,l=[],c=0,f=e.length;c<f;c++)(r=e[c]).style&&(n=r.style.display,t?("none"===n&&(l[c]=Y.get(r,"display")||null,l[c]||(r.style.display="")),""===r.style.display&&ae(r)&&(l[c]=(u=a=o=void 0,a=(i=r).ownerDocument,s=i.nodeName,(u=ue[s])||(o=a.body.appendChild(a.createElement(s)),u=S.css(o,"display"),o.parentNode.removeChild(o),"none"===u&&(u="block"),ue[s]=u)))):"none"!==n&&(l[c]="none",Y.set(r,"display",n)));for(c=0;c<f;c++)null!=l[c]&&(e[c].style.display=l[c]);return e}S.fn.extend({show:function(){return le(this,!0)},hide:function(){return le(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){ae(this)?S(this).show():S(this).hide()})}});var ce,fe,pe=/^(?:checkbox|radio)$/i,de=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,he=/^$|^module$|\/(?:java|ecma)script/i;ce=E.createDocumentFragment().appendChild(E.createElement("div")),(fe=E.createElement("input")).setAttribute("type","radio"),fe.setAttribute("checked","checked"),fe.setAttribute("name","t"),ce.appendChild(fe),y.checkClone=ce.cloneNode(!0).cloneNode(!0).lastChild.checked,ce.innerHTML="<textarea>x</textarea>",y.noCloneChecked=!!ce.cloneNode(!0).lastChild.defaultValue,ce.innerHTML="<option></option>",y.option=!!ce.lastChild;var ge={thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};function ve(e,t){var n;return n="undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(t||"*"):"undefined"!=typeof e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&A(e,t)?S.merge([e],n):n}function ye(e,t){for(var n=0,r=e.length;n<r;n++)Y.set(e[n],"globalEval",!t||Y.get(t[n],"globalEval"))}ge.tbody=ge.tfoot=ge.colgroup=ge.caption=ge.thead,ge.th=ge.td,y.option||(ge.optgroup=ge.option=[1,"<select multiple='multiple'>","</select>"]);var me=/<|&#?\w+;/;function xe(e,t,n,r,i){for(var o,a,s,u,l,c,f=t.createDocumentFragment(),p=[],d=0,h=e.length;d<h;d++)if((o=e[d])||0===o)if("object"===w(o))S.merge(p,o.nodeType?[o]:o);else if(me.test(o)){a=a||f.appendChild(t.createElement("div")),s=(de.exec(o)||["",""])[1].toLowerCase(),u=ge[s]||ge._default,a.innerHTML=u[1]+S.htmlPrefilter(o)+u[2],c=u[0];while(c--)a=a.lastChild;S.merge(p,a.childNodes),(a=f.firstChild).textContent=""}else p.push(t.createTextNode(o));f.textContent="",d=0;while(o=p[d++])if(r&&-1<S.inArray(o,r))i&&i.push(o);else if(l=ie(o),a=ve(f.appendChild(o),"script"),l&&ye(a),n){c=0;while(o=a[c++])he.test(o.type||"")&&n.push(o)}return f}var be=/^key/,we=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,Te=/^([^.]*)(?:\.(.+)|)/;function Ce(){return!0}function Ee(){return!1}function Se(e,t){return e===function(){try{return E.activeElement}catch(e){}}()==("focus"===t)}function ke(e,t,n,r,i,o){var a,s;if("object"==typeof t){for(s in"string"!=typeof n&&(r=r||n,n=void 0),t)ke(e,s,n,r,t[s],o);return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=Ee;else if(!i)return e;return 1===o&&(a=i,(i=function(e){return S().off(e),a.apply(this,arguments)}).guid=a.guid||(a.guid=S.guid++)),e.each(function(){S.event.add(this,t,i,r,n)})}function Ae(e,i,o){o?(Y.set(e,i,!1),S.event.add(e,i,{namespace:!1,handler:function(e){var t,n,r=Y.get(this,i);if(1&e.isTrigger&&this[i]){if(r.length)(S.event.special[i]||{}).delegateType&&e.stopPropagation();else if(r=s.call(arguments),Y.set(this,i,r),t=o(this,i),this[i](),r!==(n=Y.get(this,i))||t?Y.set(this,i,!1):n={},r!==n)return e.stopImmediatePropagation(),e.preventDefault(),n.value}else r.length&&(Y.set(this,i,{value:S.event.trigger(S.extend(r[0],S.Event.prototype),r.slice(1),this)}),e.stopImmediatePropagation())}})):void 0===Y.get(e,i)&&S.event.add(e,i,Ce)}S.event={global:{},add:function(t,e,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=Y.get(t);if(V(t)){n.handler&&(n=(o=n).handler,i=o.selector),i&&S.find.matchesSelector(re,i),n.guid||(n.guid=S.guid++),(u=v.events)||(u=v.events=Object.create(null)),(a=v.handle)||(a=v.handle=function(e){return"undefined"!=typeof S&&S.event.triggered!==e.type?S.event.dispatch.apply(t,arguments):void 0}),l=(e=(e||"").match(P)||[""]).length;while(l--)d=g=(s=Te.exec(e[l])||[])[1],h=(s[2]||"").split(".").sort(),d&&(f=S.event.special[d]||{},d=(i?f.delegateType:f.bindType)||d,f=S.event.special[d]||{},c=S.extend({type:d,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&S.expr.match.needsContext.test(i),namespace:h.join(".")},o),(p=u[d])||((p=u[d]=[]).delegateCount=0,f.setup&&!1!==f.setup.call(t,r,h,a)||t.addEventListener&&t.addEventListener(d,a)),f.add&&(f.add.call(t,c),c.handler.guid||(c.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,c):p.push(c),S.event.global[d]=!0)}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=Y.hasData(e)&&Y.get(e);if(v&&(u=v.events)){l=(t=(t||"").match(P)||[""]).length;while(l--)if(d=g=(s=Te.exec(t[l])||[])[1],h=(s[2]||"").split(".").sort(),d){f=S.event.special[d]||{},p=u[d=(r?f.delegateType:f.bindType)||d]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=p.length;while(o--)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));a&&!p.length&&(f.teardown&&!1!==f.teardown.call(e,h,v.handle)||S.removeEvent(e,d,v.handle),delete u[d])}else for(d in u)S.event.remove(e,d+t[l],n,r,!0);S.isEmptyObject(u)&&Y.remove(e,"handle events")}},dispatch:function(e){var t,n,r,i,o,a,s=new Array(arguments.length),u=S.event.fix(e),l=(Y.get(this,"events")||Object.create(null))[u.type]||[],c=S.event.special[u.type]||{};for(s[0]=u,t=1;t<arguments.length;t++)s[t]=arguments[t];if(u.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,u)){a=S.event.handlers.call(this,u,l),t=0;while((i=a[t++])&&!u.isPropagationStopped()){u.currentTarget=i.elem,n=0;while((o=i.handlers[n++])&&!u.isImmediatePropagationStopped())u.rnamespace&&!1!==o.namespace&&!u.rnamespace.test(o.namespace)||(u.handleObj=o,u.data=o.data,void 0!==(r=((S.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,s))&&!1===(u.result=r)&&(u.preventDefault(),u.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,u),u.result}},handlers:function(e,t){var n,r,i,o,a,s=[],u=t.delegateCount,l=e.target;if(u&&l.nodeType&&!("click"===e.type&&1<=e.button))for(;l!==this;l=l.parentNode||this)if(1===l.nodeType&&("click"!==e.type||!0!==l.disabled)){for(o=[],a={},n=0;n<u;n++)void 0===a[i=(r=t[n]).selector+" "]&&(a[i]=r.needsContext?-1<S(i,this).index(l):S.find(i,this,null,[l]).length),a[i]&&o.push(r);o.length&&s.push({elem:l,handlers:o})}return l=this,u<t.length&&s.push({elem:l,handlers:t.slice(u)}),s},addProp:function(t,e){Object.defineProperty(S.Event.prototype,t,{enumerable:!0,configurable:!0,get:m(e)?function(){if(this.originalEvent)return e(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[t]},set:function(e){Object.defineProperty(this,t,{enumerable:!0,configurable:!0,writable:!0,value:e})}})},fix:function(e){return e[S.expando]?e:new S.Event(e)},special:{load:{noBubble:!0},click:{setup:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&Ae(t,"click",Ce),!1},trigger:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&Ae(t,"click"),!0},_default:function(e){var t=e.target;return pe.test(t.type)&&t.click&&A(t,"input")&&Y.get(t,"click")||A(t,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},S.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},S.Event=function(e,t){if(!(this instanceof S.Event))return new S.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?Ce:Ee,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&S.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[S.expando]=!0},S.Event.prototype={constructor:S.Event,isDefaultPrevented:Ee,isPropagationStopped:Ee,isImmediatePropagationStopped:Ee,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=Ce,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=Ce,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=Ce,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},S.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(e){var t=e.button;return null==e.which&&be.test(e.type)?null!=e.charCode?e.charCode:e.keyCode:!e.which&&void 0!==t&&we.test(e.type)?1&t?1:2&t?3:4&t?2:0:e.which}},S.event.addProp),S.each({focus:"focusin",blur:"focusout"},function(e,t){S.event.special[e]={setup:function(){return Ae(this,e,Se),!1},trigger:function(){return Ae(this,e),!0},delegateType:t}}),S.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,i){S.event.special[e]={delegateType:i,bindType:i,handle:function(e){var t,n=e.relatedTarget,r=e.handleObj;return n&&(n===this||S.contains(this,n))||(e.type=r.origType,t=r.handler.apply(this,arguments),e.type=i),t}}}),S.fn.extend({on:function(e,t,n,r){return ke(this,e,t,n,r)},one:function(e,t,n,r){return ke(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,S(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=Ee),this.each(function(){S.event.remove(this,e,n,t)})}});var Ne=/<script|<style|<link/i,De=/checked\s*(?:[^=]|=\s*.checked.)/i,je=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function qe(e,t){return A(e,"table")&&A(11!==t.nodeType?t:t.firstChild,"tr")&&S(e).children("tbody")[0]||e}function Le(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function He(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function Oe(e,t){var n,r,i,o,a,s;if(1===t.nodeType){if(Y.hasData(e)&&(s=Y.get(e).events))for(i in Y.remove(t,"handle events"),s)for(n=0,r=s[i].length;n<r;n++)S.event.add(t,i,s[i][n]);Q.hasData(e)&&(o=Q.access(e),a=S.extend({},o),Q.set(t,a))}}function Pe(n,r,i,o){r=g(r);var e,t,a,s,u,l,c=0,f=n.length,p=f-1,d=r[0],h=m(d);if(h||1<f&&"string"==typeof d&&!y.checkClone&&De.test(d))return n.each(function(e){var t=n.eq(e);h&&(r[0]=d.call(this,e,t.html())),Pe(t,r,i,o)});if(f&&(t=(e=xe(r,n[0].ownerDocument,!1,n,o)).firstChild,1===e.childNodes.length&&(e=t),t||o)){for(s=(a=S.map(ve(e,"script"),Le)).length;c<f;c++)u=e,c!==p&&(u=S.clone(u,!0,!0),s&&S.merge(a,ve(u,"script"))),i.call(n[c],u,c);if(s)for(l=a[a.length-1].ownerDocument,S.map(a,He),c=0;c<s;c++)u=a[c],he.test(u.type||"")&&!Y.access(u,"globalEval")&&S.contains(l,u)&&(u.src&&"module"!==(u.type||"").toLowerCase()?S._evalUrl&&!u.noModule&&S._evalUrl(u.src,{nonce:u.nonce||u.getAttribute("nonce")},l):b(u.textContent.replace(je,""),u,l))}return n}function Re(e,t,n){for(var r,i=t?S.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||S.cleanData(ve(r)),r.parentNode&&(n&&ie(r)&&ye(ve(r,"script")),r.parentNode.removeChild(r));return e}S.extend({htmlPrefilter:function(e){return e},clone:function(e,t,n){var r,i,o,a,s,u,l,c=e.cloneNode(!0),f=ie(e);if(!(y.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||S.isXMLDoc(e)))for(a=ve(c),r=0,i=(o=ve(e)).length;r<i;r++)s=o[r],u=a[r],void 0,"input"===(l=u.nodeName.toLowerCase())&&pe.test(s.type)?u.checked=s.checked:"input"!==l&&"textarea"!==l||(u.defaultValue=s.defaultValue);if(t)if(n)for(o=o||ve(e),a=a||ve(c),r=0,i=o.length;r<i;r++)Oe(o[r],a[r]);else Oe(e,c);return 0<(a=ve(c,"script")).length&&ye(a,!f&&ve(e,"script")),c},cleanData:function(e){for(var t,n,r,i=S.event.special,o=0;void 0!==(n=e[o]);o++)if(V(n)){if(t=n[Y.expando]){if(t.events)for(r in t.events)i[r]?S.event.remove(n,r):S.removeEvent(n,r,t.handle);n[Y.expando]=void 0}n[Q.expando]&&(n[Q.expando]=void 0)}}}),S.fn.extend({detach:function(e){return Re(this,e,!0)},remove:function(e){return Re(this,e)},text:function(e){return $(this,function(e){return void 0===e?S.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return Pe(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||qe(this,e).appendChild(e)})},prepend:function(){return Pe(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=qe(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return Pe(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return Pe(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(S.cleanData(ve(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return S.clone(this,e,t)})},html:function(e){return $(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!Ne.test(e)&&!ge[(de.exec(e)||["",""])[1].toLowerCase()]){e=S.htmlPrefilter(e);try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(S.cleanData(ve(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var n=[];return Pe(this,arguments,function(e){var t=this.parentNode;S.inArray(this,n)<0&&(S.cleanData(ve(this)),t&&t.replaceChild(e,this))},n)}}),S.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,a){S.fn[e]=function(e){for(var t,n=[],r=S(e),i=r.length-1,o=0;o<=i;o++)t=o===i?this:this.clone(!0),S(r[o])[a](t),u.apply(n,t.get());return this.pushStack(n)}});var Me=new RegExp("^("+ee+")(?!px)[a-z%]+$","i"),Ie=function(e){var t=e.ownerDocument.defaultView;return t&&t.opener||(t=C),t.getComputedStyle(e)},We=function(e,t,n){var r,i,o={};for(i in t)o[i]=e.style[i],e.style[i]=t[i];for(i in r=n.call(e),t)e.style[i]=o[i];return r},Fe=new RegExp(ne.join("|"),"i");function Be(e,t,n){var r,i,o,a,s=e.style;return(n=n||Ie(e))&&(""!==(a=n.getPropertyValue(t)||n[t])||ie(e)||(a=S.style(e,t)),!y.pixelBoxStyles()&&Me.test(a)&&Fe.test(t)&&(r=s.width,i=s.minWidth,o=s.maxWidth,s.minWidth=s.maxWidth=s.width=a,a=n.width,s.width=r,s.minWidth=i,s.maxWidth=o)),void 0!==a?a+"":a}function $e(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}!function(){function e(){if(l){u.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",l.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",re.appendChild(u).appendChild(l);var e=C.getComputedStyle(l);n="1%"!==e.top,s=12===t(e.marginLeft),l.style.right="60%",o=36===t(e.right),r=36===t(e.width),l.style.position="absolute",i=12===t(l.offsetWidth/3),re.removeChild(u),l=null}}function t(e){return Math.round(parseFloat(e))}var n,r,i,o,a,s,u=E.createElement("div"),l=E.createElement("div");l.style&&(l.style.backgroundClip="content-box",l.cloneNode(!0).style.backgroundClip="",y.clearCloneStyle="content-box"===l.style.backgroundClip,S.extend(y,{boxSizingReliable:function(){return e(),r},pixelBoxStyles:function(){return e(),o},pixelPosition:function(){return e(),n},reliableMarginLeft:function(){return e(),s},scrollboxSize:function(){return e(),i},reliableTrDimensions:function(){var e,t,n,r;return null==a&&(e=E.createElement("table"),t=E.createElement("tr"),n=E.createElement("div"),e.style.cssText="position:absolute;left:-11111px",t.style.height="1px",n.style.height="9px",re.appendChild(e).appendChild(t).appendChild(n),r=C.getComputedStyle(t),a=3<parseInt(r.height),re.removeChild(e)),a}}))}();var _e=["Webkit","Moz","ms"],ze=E.createElement("div").style,Ue={};function Xe(e){var t=S.cssProps[e]||Ue[e];return t||(e in ze?e:Ue[e]=function(e){var t=e[0].toUpperCase()+e.slice(1),n=_e.length;while(n--)if((e=_e[n]+t)in ze)return e}(e)||e)}var Ve=/^(none|table(?!-c[ea]).+)/,Ge=/^--/,Ye={position:"absolute",visibility:"hidden",display:"block"},Qe={letterSpacing:"0",fontWeight:"400"};function Je(e,t,n){var r=te.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function Ke(e,t,n,r,i,o){var a="width"===t?1:0,s=0,u=0;if(n===(r?"border":"content"))return 0;for(;a<4;a+=2)"margin"===n&&(u+=S.css(e,n+ne[a],!0,i)),r?("content"===n&&(u-=S.css(e,"padding"+ne[a],!0,i)),"margin"!==n&&(u-=S.css(e,"border"+ne[a]+"Width",!0,i))):(u+=S.css(e,"padding"+ne[a],!0,i),"padding"!==n?u+=S.css(e,"border"+ne[a]+"Width",!0,i):s+=S.css(e,"border"+ne[a]+"Width",!0,i));return!r&&0<=o&&(u+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-u-s-.5))||0),u}function Ze(e,t,n){var r=Ie(e),i=(!y.boxSizingReliable()||n)&&"border-box"===S.css(e,"boxSizing",!1,r),o=i,a=Be(e,t,r),s="offset"+t[0].toUpperCase()+t.slice(1);if(Me.test(a)){if(!n)return a;a="auto"}return(!y.boxSizingReliable()&&i||!y.reliableTrDimensions()&&A(e,"tr")||"auto"===a||!parseFloat(a)&&"inline"===S.css(e,"display",!1,r))&&e.getClientRects().length&&(i="border-box"===S.css(e,"boxSizing",!1,r),(o=s in e)&&(a=e[s])),(a=parseFloat(a)||0)+Ke(e,t,n||(i?"border":"content"),o,r,a)+"px"}function et(e,t,n,r,i){return new et.prototype.init(e,t,n,r,i)}S.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Be(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=X(t),u=Ge.test(t),l=e.style;if(u||(t=Xe(s)),a=S.cssHooks[t]||S.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:l[t];"string"===(o=typeof n)&&(i=te.exec(n))&&i[1]&&(n=se(e,t,i),o="number"),null!=n&&n==n&&("number"!==o||u||(n+=i&&i[3]||(S.cssNumber[s]?"":"px")),y.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,r))||(u?l.setProperty(t,n):l[t]=n))}},css:function(e,t,n,r){var i,o,a,s=X(t);return Ge.test(t)||(t=Xe(s)),(a=S.cssHooks[t]||S.cssHooks[s])&&"get"in a&&(i=a.get(e,!0,n)),void 0===i&&(i=Be(e,t,r)),"normal"===i&&t in Qe&&(i=Qe[t]),""===n||n?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i}}),S.each(["height","width"],function(e,u){S.cssHooks[u]={get:function(e,t,n){if(t)return!Ve.test(S.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?Ze(e,u,n):We(e,Ye,function(){return Ze(e,u,n)})},set:function(e,t,n){var r,i=Ie(e),o=!y.scrollboxSize()&&"absolute"===i.position,a=(o||n)&&"border-box"===S.css(e,"boxSizing",!1,i),s=n?Ke(e,u,n,a,i):0;return a&&o&&(s-=Math.ceil(e["offset"+u[0].toUpperCase()+u.slice(1)]-parseFloat(i[u])-Ke(e,u,"border",!1,i)-.5)),s&&(r=te.exec(t))&&"px"!==(r[3]||"px")&&(e.style[u]=t,t=S.css(e,u)),Je(0,t,s)}}}),S.cssHooks.marginLeft=$e(y.reliableMarginLeft,function(e,t){if(t)return(parseFloat(Be(e,"marginLeft"))||e.getBoundingClientRect().left-We(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),S.each({margin:"",padding:"",border:"Width"},function(i,o){S.cssHooks[i+o]={expand:function(e){for(var t=0,n={},r="string"==typeof e?e.split(" "):[e];t<4;t++)n[i+ne[t]+o]=r[t]||r[t-2]||r[0];return n}},"margin"!==i&&(S.cssHooks[i+o].set=Je)}),S.fn.extend({css:function(e,t){return $(this,function(e,t,n){var r,i,o={},a=0;if(Array.isArray(t)){for(r=Ie(e),i=t.length;a<i;a++)o[t[a]]=S.css(e,t[a],!1,r);return o}return void 0!==n?S.style(e,t,n):S.css(e,t)},e,t,1<arguments.length)}}),((S.Tween=et).prototype={constructor:et,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||S.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(S.cssNumber[n]?"":"px")},cur:function(){var e=et.propHooks[this.prop];return e&&e.get?e.get(this):et.propHooks._default.get(this)},run:function(e){var t,n=et.propHooks[this.prop];return this.options.duration?this.pos=t=S.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):et.propHooks._default.set(this),this}}).init.prototype=et.prototype,(et.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=S.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){S.fx.step[e.prop]?S.fx.step[e.prop](e):1!==e.elem.nodeType||!S.cssHooks[e.prop]&&null==e.elem.style[Xe(e.prop)]?e.elem[e.prop]=e.now:S.style(e.elem,e.prop,e.now+e.unit)}}}).scrollTop=et.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},S.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},S.fx=et.prototype.init,S.fx.step={};var tt,nt,rt,it,ot=/^(?:toggle|show|hide)$/,at=/queueHooks$/;function st(){nt&&(!1===E.hidden&&C.requestAnimationFrame?C.requestAnimationFrame(st):C.setTimeout(st,S.fx.interval),S.fx.tick())}function ut(){return C.setTimeout(function(){tt=void 0}),tt=Date.now()}function lt(e,t){var n,r=0,i={height:e};for(t=t?1:0;r<4;r+=2-t)i["margin"+(n=ne[r])]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function ct(e,t,n){for(var r,i=(ft.tweeners[t]||[]).concat(ft.tweeners["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))return r}function ft(o,e,t){var n,a,r=0,i=ft.prefilters.length,s=S.Deferred().always(function(){delete u.elem}),u=function(){if(a)return!1;for(var e=tt||ut(),t=Math.max(0,l.startTime+l.duration-e),n=1-(t/l.duration||0),r=0,i=l.tweens.length;r<i;r++)l.tweens[r].run(n);return s.notifyWith(o,[l,n,t]),n<1&&i?t:(i||s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l]),!1)},l=s.promise({elem:o,props:S.extend({},e),opts:S.extend(!0,{specialEasing:{},easing:S.easing._default},t),originalProperties:e,originalOptions:t,startTime:tt||ut(),duration:t.duration,tweens:[],createTween:function(e,t){var n=S.Tween(o,l.opts,e,t,l.opts.specialEasing[e]||l.opts.easing);return l.tweens.push(n),n},stop:function(e){var t=0,n=e?l.tweens.length:0;if(a)return this;for(a=!0;t<n;t++)l.tweens[t].run(1);return e?(s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l,e])):s.rejectWith(o,[l,e]),this}}),c=l.props;for(!function(e,t){var n,r,i,o,a;for(n in e)if(i=t[r=X(n)],o=e[n],Array.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(a=S.cssHooks[r])&&"expand"in a)for(n in o=a.expand(o),delete e[r],o)n in e||(e[n]=o[n],t[n]=i);else t[r]=i}(c,l.opts.specialEasing);r<i;r++)if(n=ft.prefilters[r].call(l,o,c,l.opts))return m(n.stop)&&(S._queueHooks(l.elem,l.opts.queue).stop=n.stop.bind(n)),n;return S.map(c,ct,l),m(l.opts.start)&&l.opts.start.call(o,l),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always),S.fx.timer(S.extend(u,{elem:o,anim:l,queue:l.opts.queue})),l}S.Animation=S.extend(ft,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return se(n.elem,e,te.exec(t),n),n}]},tweener:function(e,t){m(e)?(t=e,e=["*"]):e=e.match(P);for(var n,r=0,i=e.length;r<i;r++)n=e[r],ft.tweeners[n]=ft.tweeners[n]||[],ft.tweeners[n].unshift(t)},prefilters:[function(e,t,n){var r,i,o,a,s,u,l,c,f="width"in t||"height"in t,p=this,d={},h=e.style,g=e.nodeType&&ae(e),v=Y.get(e,"fxshow");for(r in n.queue||(null==(a=S._queueHooks(e,"fx")).unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,p.always(function(){p.always(function(){a.unqueued--,S.queue(e,"fx").length||a.empty.fire()})})),t)if(i=t[r],ot.test(i)){if(delete t[r],o=o||"toggle"===i,i===(g?"hide":"show")){if("show"!==i||!v||void 0===v[r])continue;g=!0}d[r]=v&&v[r]||S.style(e,r)}if((u=!S.isEmptyObject(t))||!S.isEmptyObject(d))for(r in f&&1===e.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],null==(l=v&&v.display)&&(l=Y.get(e,"display")),"none"===(c=S.css(e,"display"))&&(l?c=l:(le([e],!0),l=e.style.display||l,c=S.css(e,"display"),le([e]))),("inline"===c||"inline-block"===c&&null!=l)&&"none"===S.css(e,"float")&&(u||(p.done(function(){h.display=l}),null==l&&(c=h.display,l="none"===c?"":c)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",p.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),u=!1,d)u||(v?"hidden"in v&&(g=v.hidden):v=Y.access(e,"fxshow",{display:l}),o&&(v.hidden=!g),g&&le([e],!0),p.done(function(){for(r in g||le([e]),Y.remove(e,"fxshow"),d)S.style(e,r,d[r])})),u=ct(g?v[r]:0,r,p),r in v||(v[r]=u.start,g&&(u.end=u.start,u.start=0))}],prefilter:function(e,t){t?ft.prefilters.unshift(e):ft.prefilters.push(e)}}),S.speed=function(e,t,n){var r=e&&"object"==typeof e?S.extend({},e):{complete:n||!n&&t||m(e)&&e,duration:e,easing:n&&t||t&&!m(t)&&t};return S.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in S.fx.speeds?r.duration=S.fx.speeds[r.duration]:r.duration=S.fx.speeds._default),null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){m(r.old)&&r.old.call(this),r.queue&&S.dequeue(this,r.queue)},r},S.fn.extend({fadeTo:function(e,t,n,r){return this.filter(ae).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(t,e,n,r){var i=S.isEmptyObject(t),o=S.speed(e,n,r),a=function(){var e=ft(this,S.extend({},t),o);(i||Y.get(this,"finish"))&&e.stop(!0)};return a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(i,e,o){var a=function(e){var t=e.stop;delete e.stop,t(o)};return"string"!=typeof i&&(o=e,e=i,i=void 0),e&&this.queue(i||"fx",[]),this.each(function(){var e=!0,t=null!=i&&i+"queueHooks",n=S.timers,r=Y.get(this);if(t)r[t]&&r[t].stop&&a(r[t]);else for(t in r)r[t]&&r[t].stop&&at.test(t)&&a(r[t]);for(t=n.length;t--;)n[t].elem!==this||null!=i&&n[t].queue!==i||(n[t].anim.stop(o),e=!1,n.splice(t,1));!e&&o||S.dequeue(this,i)})},finish:function(a){return!1!==a&&(a=a||"fx"),this.each(function(){var e,t=Y.get(this),n=t[a+"queue"],r=t[a+"queueHooks"],i=S.timers,o=n?n.length:0;for(t.finish=!0,S.queue(this,a,[]),r&&r.stop&&r.stop.call(this,!0),e=i.length;e--;)i[e].elem===this&&i[e].queue===a&&(i[e].anim.stop(!0),i.splice(e,1));for(e=0;e<o;e++)n[e]&&n[e].finish&&n[e].finish.call(this);delete t.finish})}}),S.each(["toggle","show","hide"],function(e,r){var i=S.fn[r];S.fn[r]=function(e,t,n){return null==e||"boolean"==typeof e?i.apply(this,arguments):this.animate(lt(r,!0),e,t,n)}}),S.each({slideDown:lt("show"),slideUp:lt("hide"),slideToggle:lt("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,r){S.fn[e]=function(e,t,n){return this.animate(r,e,t,n)}}),S.timers=[],S.fx.tick=function(){var e,t=0,n=S.timers;for(tt=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||S.fx.stop(),tt=void 0},S.fx.timer=function(e){S.timers.push(e),S.fx.start()},S.fx.interval=13,S.fx.start=function(){nt||(nt=!0,st())},S.fx.stop=function(){nt=null},S.fx.speeds={slow:600,fast:200,_default:400},S.fn.delay=function(r,e){return r=S.fx&&S.fx.speeds[r]||r,e=e||"fx",this.queue(e,function(e,t){var n=C.setTimeout(e,r);t.stop=function(){C.clearTimeout(n)}})},rt=E.createElement("input"),it=E.createElement("select").appendChild(E.createElement("option")),rt.type="checkbox",y.checkOn=""!==rt.value,y.optSelected=it.selected,(rt=E.createElement("input")).value="t",rt.type="radio",y.radioValue="t"===rt.value;var pt,dt=S.expr.attrHandle;S.fn.extend({attr:function(e,t){return $(this,S.attr,e,t,1<arguments.length)},removeAttr:function(e){return this.each(function(){S.removeAttr(this,e)})}}),S.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return"undefined"==typeof e.getAttribute?S.prop(e,t,n):(1===o&&S.isXMLDoc(e)||(i=S.attrHooks[t.toLowerCase()]||(S.expr.match.bool.test(t)?pt:void 0)),void 0!==n?null===n?void S.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:null==(r=S.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!y.radioValue&&"radio"===t&&A(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,i=t&&t.match(P);if(i&&1===e.nodeType)while(n=i[r++])e.removeAttribute(n)}}),pt={set:function(e,t,n){return!1===t?S.removeAttr(e,n):e.setAttribute(n,n),n}},S.each(S.expr.match.bool.source.match(/\w+/g),function(e,t){var a=dt[t]||S.find.attr;dt[t]=function(e,t,n){var r,i,o=t.toLowerCase();return n||(i=dt[o],dt[o]=r,r=null!=a(e,t,n)?o:null,dt[o]=i),r}});var ht=/^(?:input|select|textarea|button)$/i,gt=/^(?:a|area)$/i;function vt(e){return(e.match(P)||[]).join(" ")}function yt(e){return e.getAttribute&&e.getAttribute("class")||""}function mt(e){return Array.isArray(e)?e:"string"==typeof e&&e.match(P)||[]}S.fn.extend({prop:function(e,t){return $(this,S.prop,e,t,1<arguments.length)},removeProp:function(e){return this.each(function(){delete this[S.propFix[e]||e]})}}),S.extend({prop:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&S.isXMLDoc(e)||(t=S.propFix[t]||t,i=S.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=S.find.attr(e,"tabindex");return t?parseInt(t,10):ht.test(e.nodeName)||gt.test(e.nodeName)&&e.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),y.optSelected||(S.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),S.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){S.propFix[this.toLowerCase()]=this}),S.fn.extend({addClass:function(t){var e,n,r,i,o,a,s,u=0;if(m(t))return this.each(function(e){S(this).addClass(t.call(this,e,yt(this)))});if((e=mt(t)).length)while(n=this[u++])if(i=yt(n),r=1===n.nodeType&&" "+vt(i)+" "){a=0;while(o=e[a++])r.indexOf(" "+o+" ")<0&&(r+=o+" ");i!==(s=vt(r))&&n.setAttribute("class",s)}return this},removeClass:function(t){var e,n,r,i,o,a,s,u=0;if(m(t))return this.each(function(e){S(this).removeClass(t.call(this,e,yt(this)))});if(!arguments.length)return this.attr("class","");if((e=mt(t)).length)while(n=this[u++])if(i=yt(n),r=1===n.nodeType&&" "+vt(i)+" "){a=0;while(o=e[a++])while(-1<r.indexOf(" "+o+" "))r=r.replace(" "+o+" "," ");i!==(s=vt(r))&&n.setAttribute("class",s)}return this},toggleClass:function(i,t){var o=typeof i,a="string"===o||Array.isArray(i);return"boolean"==typeof t&&a?t?this.addClass(i):this.removeClass(i):m(i)?this.each(function(e){S(this).toggleClass(i.call(this,e,yt(this),t),t)}):this.each(function(){var e,t,n,r;if(a){t=0,n=S(this),r=mt(i);while(e=r[t++])n.hasClass(e)?n.removeClass(e):n.addClass(e)}else void 0!==i&&"boolean"!==o||((e=yt(this))&&Y.set(this,"__className__",e),this.setAttribute&&this.setAttribute("class",e||!1===i?"":Y.get(this,"__className__")||""))})},hasClass:function(e){var t,n,r=0;t=" "+e+" ";while(n=this[r++])if(1===n.nodeType&&-1<(" "+vt(yt(n))+" ").indexOf(t))return!0;return!1}});var xt=/\r/g;S.fn.extend({val:function(n){var r,e,i,t=this[0];return arguments.length?(i=m(n),this.each(function(e){var t;1===this.nodeType&&(null==(t=i?n.call(this,e,S(this).val()):n)?t="":"number"==typeof t?t+="":Array.isArray(t)&&(t=S.map(t,function(e){return null==e?"":e+""})),(r=S.valHooks[this.type]||S.valHooks[this.nodeName.toLowerCase()])&&"set"in r&&void 0!==r.set(this,t,"value")||(this.value=t))})):t?(r=S.valHooks[t.type]||S.valHooks[t.nodeName.toLowerCase()])&&"get"in r&&void 0!==(e=r.get(t,"value"))?e:"string"==typeof(e=t.value)?e.replace(xt,""):null==e?"":e:void 0}}),S.extend({valHooks:{option:{get:function(e){var t=S.find.attr(e,"value");return null!=t?t:vt(S.text(e))}},select:{get:function(e){var t,n,r,i=e.options,o=e.selectedIndex,a="select-one"===e.type,s=a?null:[],u=a?o+1:i.length;for(r=o<0?u:a?o:0;r<u;r++)if(((n=i[r]).selected||r===o)&&!n.disabled&&(!n.parentNode.disabled||!A(n.parentNode,"optgroup"))){if(t=S(n).val(),a)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=S.makeArray(t),a=i.length;while(a--)((r=i[a]).selected=-1<S.inArray(S.valHooks.option.get(r),o))&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),S.each(["radio","checkbox"],function(){S.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=-1<S.inArray(S(e).val(),t)}},y.checkOn||(S.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),y.focusin="onfocusin"in C;var bt=/^(?:focusinfocus|focusoutblur)$/,wt=function(e){e.stopPropagation()};S.extend(S.event,{trigger:function(e,t,n,r){var i,o,a,s,u,l,c,f,p=[n||E],d=v.call(e,"type")?e.type:e,h=v.call(e,"namespace")?e.namespace.split("."):[];if(o=f=a=n=n||E,3!==n.nodeType&&8!==n.nodeType&&!bt.test(d+S.event.triggered)&&(-1<d.indexOf(".")&&(d=(h=d.split(".")).shift(),h.sort()),u=d.indexOf(":")<0&&"on"+d,(e=e[S.expando]?e:new S.Event(d,"object"==typeof e&&e)).isTrigger=r?2:3,e.namespace=h.join("."),e.rnamespace=e.namespace?new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,e.result=void 0,e.target||(e.target=n),t=null==t?[e]:S.makeArray(t,[e]),c=S.event.special[d]||{},r||!c.trigger||!1!==c.trigger.apply(n,t))){if(!r&&!c.noBubble&&!x(n)){for(s=c.delegateType||d,bt.test(s+d)||(o=o.parentNode);o;o=o.parentNode)p.push(o),a=o;a===(n.ownerDocument||E)&&p.push(a.defaultView||a.parentWindow||C)}i=0;while((o=p[i++])&&!e.isPropagationStopped())f=o,e.type=1<i?s:c.bindType||d,(l=(Y.get(o,"events")||Object.create(null))[e.type]&&Y.get(o,"handle"))&&l.apply(o,t),(l=u&&o[u])&&l.apply&&V(o)&&(e.result=l.apply(o,t),!1===e.result&&e.preventDefault());return e.type=d,r||e.isDefaultPrevented()||c._default&&!1!==c._default.apply(p.pop(),t)||!V(n)||u&&m(n[d])&&!x(n)&&((a=n[u])&&(n[u]=null),S.event.triggered=d,e.isPropagationStopped()&&f.addEventListener(d,wt),n[d](),e.isPropagationStopped()&&f.removeEventListener(d,wt),S.event.triggered=void 0,a&&(n[u]=a)),e.result}},simulate:function(e,t,n){var r=S.extend(new S.Event,n,{type:e,isSimulated:!0});S.event.trigger(r,null,t)}}),S.fn.extend({trigger:function(e,t){return this.each(function(){S.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return S.event.trigger(e,t,n,!0)}}),y.focusin||S.each({focus:"focusin",blur:"focusout"},function(n,r){var i=function(e){S.event.simulate(r,e.target,S.event.fix(e))};S.event.special[r]={setup:function(){var e=this.ownerDocument||this.document||this,t=Y.access(e,r);t||e.addEventListener(n,i,!0),Y.access(e,r,(t||0)+1)},teardown:function(){var e=this.ownerDocument||this.document||this,t=Y.access(e,r)-1;t?Y.access(e,r,t):(e.removeEventListener(n,i,!0),Y.remove(e,r))}}});var Tt=C.location,Ct={guid:Date.now()},Et=/\?/;S.parseXML=function(e){var t;if(!e||"string"!=typeof e)return null;try{t=(new C.DOMParser).parseFromString(e,"text/xml")}catch(e){t=void 0}return t&&!t.getElementsByTagName("parsererror").length||S.error("Invalid XML: "+e),t};var St=/\[\]$/,kt=/\r?\n/g,At=/^(?:submit|button|image|reset|file)$/i,Nt=/^(?:input|select|textarea|keygen)/i;function Dt(n,e,r,i){var t;if(Array.isArray(e))S.each(e,function(e,t){r||St.test(n)?i(n,t):Dt(n+"["+("object"==typeof t&&null!=t?e:"")+"]",t,r,i)});else if(r||"object"!==w(e))i(n,e);else for(t in e)Dt(n+"["+t+"]",e[t],r,i)}S.param=function(e,t){var n,r=[],i=function(e,t){var n=m(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(null==e)return"";if(Array.isArray(e)||e.jquery&&!S.isPlainObject(e))S.each(e,function(){i(this.name,this.value)});else for(n in e)Dt(n,e[n],t,i);return r.join("&")},S.fn.extend({serialize:function(){return S.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=S.prop(this,"elements");return e?S.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!S(this).is(":disabled")&&Nt.test(this.nodeName)&&!At.test(e)&&(this.checked||!pe.test(e))}).map(function(e,t){var n=S(this).val();return null==n?null:Array.isArray(n)?S.map(n,function(e){return{name:t.name,value:e.replace(kt,"\r\n")}}):{name:t.name,value:n.replace(kt,"\r\n")}}).get()}});var jt=/%20/g,qt=/#.*$/,Lt=/([?&])_=[^&]*/,Ht=/^(.*?):[ \t]*([^\r\n]*)$/gm,Ot=/^(?:GET|HEAD)$/,Pt=/^\/\//,Rt={},Mt={},It="*/".concat("*"),Wt=E.createElement("a");function Ft(o){return function(e,t){"string"!=typeof e&&(t=e,e="*");var n,r=0,i=e.toLowerCase().match(P)||[];if(m(t))while(n=i[r++])"+"===n[0]?(n=n.slice(1)||"*",(o[n]=o[n]||[]).unshift(t)):(o[n]=o[n]||[]).push(t)}}function Bt(t,i,o,a){var s={},u=t===Mt;function l(e){var r;return s[e]=!0,S.each(t[e]||[],function(e,t){var n=t(i,o,a);return"string"!=typeof n||u||s[n]?u?!(r=n):void 0:(i.dataTypes.unshift(n),l(n),!1)}),r}return l(i.dataTypes[0])||!s["*"]&&l("*")}function $t(e,t){var n,r,i=S.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&S.extend(!0,e,r),e}Wt.href=Tt.href,S.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Tt.href,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Tt.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":It,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":S.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?$t($t(e,S.ajaxSettings),t):$t(S.ajaxSettings,e)},ajaxPrefilter:Ft(Rt),ajaxTransport:Ft(Mt),ajax:function(e,t){"object"==typeof e&&(t=e,e=void 0),t=t||{};var c,f,p,n,d,r,h,g,i,o,v=S.ajaxSetup({},t),y=v.context||v,m=v.context&&(y.nodeType||y.jquery)?S(y):S.event,x=S.Deferred(),b=S.Callbacks("once memory"),w=v.statusCode||{},a={},s={},u="canceled",T={readyState:0,getResponseHeader:function(e){var t;if(h){if(!n){n={};while(t=Ht.exec(p))n[t[1].toLowerCase()+" "]=(n[t[1].toLowerCase()+" "]||[]).concat(t[2])}t=n[e.toLowerCase()+" "]}return null==t?null:t.join(", ")},getAllResponseHeaders:function(){return h?p:null},setRequestHeader:function(e,t){return null==h&&(e=s[e.toLowerCase()]=s[e.toLowerCase()]||e,a[e]=t),this},overrideMimeType:function(e){return null==h&&(v.mimeType=e),this},statusCode:function(e){var t;if(e)if(h)T.always(e[T.status]);else for(t in e)w[t]=[w[t],e[t]];return this},abort:function(e){var t=e||u;return c&&c.abort(t),l(0,t),this}};if(x.promise(T),v.url=((e||v.url||Tt.href)+"").replace(Pt,Tt.protocol+"//"),v.type=t.method||t.type||v.method||v.type,v.dataTypes=(v.dataType||"*").toLowerCase().match(P)||[""],null==v.crossDomain){r=E.createElement("a");try{r.href=v.url,r.href=r.href,v.crossDomain=Wt.protocol+"//"+Wt.host!=r.protocol+"//"+r.host}catch(e){v.crossDomain=!0}}if(v.data&&v.processData&&"string"!=typeof v.data&&(v.data=S.param(v.data,v.traditional)),Bt(Rt,v,t,T),h)return T;for(i in(g=S.event&&v.global)&&0==S.active++&&S.event.trigger("ajaxStart"),v.type=v.type.toUpperCase(),v.hasContent=!Ot.test(v.type),f=v.url.replace(qt,""),v.hasContent?v.data&&v.processData&&0===(v.contentType||"").indexOf("application/x-www-form-urlencoded")&&(v.data=v.data.replace(jt,"+")):(o=v.url.slice(f.length),v.data&&(v.processData||"string"==typeof v.data)&&(f+=(Et.test(f)?"&":"?")+v.data,delete v.data),!1===v.cache&&(f=f.replace(Lt,"$1"),o=(Et.test(f)?"&":"?")+"_="+Ct.guid+++o),v.url=f+o),v.ifModified&&(S.lastModified[f]&&T.setRequestHeader("If-Modified-Since",S.lastModified[f]),S.etag[f]&&T.setRequestHeader("If-None-Match",S.etag[f])),(v.data&&v.hasContent&&!1!==v.contentType||t.contentType)&&T.setRequestHeader("Content-Type",v.contentType),T.setRequestHeader("Accept",v.dataTypes[0]&&v.accepts[v.dataTypes[0]]?v.accepts[v.dataTypes[0]]+("*"!==v.dataTypes[0]?", "+It+"; q=0.01":""):v.accepts["*"]),v.headers)T.setRequestHeader(i,v.headers[i]);if(v.beforeSend&&(!1===v.beforeSend.call(y,T,v)||h))return T.abort();if(u="abort",b.add(v.complete),T.done(v.success),T.fail(v.error),c=Bt(Mt,v,t,T)){if(T.readyState=1,g&&m.trigger("ajaxSend",[T,v]),h)return T;v.async&&0<v.timeout&&(d=C.setTimeout(function(){T.abort("timeout")},v.timeout));try{h=!1,c.send(a,l)}catch(e){if(h)throw e;l(-1,e)}}else l(-1,"No Transport");function l(e,t,n,r){var i,o,a,s,u,l=t;h||(h=!0,d&&C.clearTimeout(d),c=void 0,p=r||"",T.readyState=0<e?4:0,i=200<=e&&e<300||304===e,n&&(s=function(e,t,n){var r,i,o,a,s=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in s)if(s[i]&&s[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}a||(a=i)}o=o||a}if(o)return o!==u[0]&&u.unshift(o),n[o]}(v,T,n)),!i&&-1<S.inArray("script",v.dataTypes)&&(v.converters["text script"]=function(){}),s=function(e,t,n,r){var i,o,a,s,u,l={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(!(a=l[u+" "+o]||l["* "+o]))for(i in l)if((s=i.split(" "))[1]===o&&(a=l[u+" "+s[0]]||l["* "+s[0]])){!0===a?a=l[i]:!0!==l[i]&&(o=s[0],c.unshift(s[1]));break}if(!0!==a)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}(v,s,T,i),i?(v.ifModified&&((u=T.getResponseHeader("Last-Modified"))&&(S.lastModified[f]=u),(u=T.getResponseHeader("etag"))&&(S.etag[f]=u)),204===e||"HEAD"===v.type?l="nocontent":304===e?l="notmodified":(l=s.state,o=s.data,i=!(a=s.error))):(a=l,!e&&l||(l="error",e<0&&(e=0))),T.status=e,T.statusText=(t||l)+"",i?x.resolveWith(y,[o,l,T]):x.rejectWith(y,[T,l,a]),T.statusCode(w),w=void 0,g&&m.trigger(i?"ajaxSuccess":"ajaxError",[T,v,i?o:a]),b.fireWith(y,[T,l]),g&&(m.trigger("ajaxComplete",[T,v]),--S.active||S.event.trigger("ajaxStop")))}return T},getJSON:function(e,t,n){return S.get(e,t,n,"json")},getScript:function(e,t){return S.get(e,void 0,t,"script")}}),S.each(["get","post"],function(e,i){S[i]=function(e,t,n,r){return m(t)&&(r=r||n,n=t,t=void 0),S.ajax(S.extend({url:e,type:i,dataType:r,data:t,success:n},S.isPlainObject(e)&&e))}}),S.ajaxPrefilter(function(e){var t;for(t in e.headers)"content-type"===t.toLowerCase()&&(e.contentType=e.headers[t]||"")}),S._evalUrl=function(e,t,n){return S.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(e){S.globalEval(e,t,n)}})},S.fn.extend({wrapAll:function(e){var t;return this[0]&&(m(e)&&(e=e.call(this[0])),t=S(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(n){return m(n)?this.each(function(e){S(this).wrapInner(n.call(this,e))}):this.each(function(){var e=S(this),t=e.contents();t.length?t.wrapAll(n):e.append(n)})},wrap:function(t){var n=m(t);return this.each(function(e){S(this).wrapAll(n?t.call(this,e):t)})},unwrap:function(e){return this.parent(e).not("body").each(function(){S(this).replaceWith(this.childNodes)}),this}}),S.expr.pseudos.hidden=function(e){return!S.expr.pseudos.visible(e)},S.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},S.ajaxSettings.xhr=function(){try{return new C.XMLHttpRequest}catch(e){}};var _t={0:200,1223:204},zt=S.ajaxSettings.xhr();y.cors=!!zt&&"withCredentials"in zt,y.ajax=zt=!!zt,S.ajaxTransport(function(i){var o,a;if(y.cors||zt&&!i.crossDomain)return{send:function(e,t){var n,r=i.xhr();if(r.open(i.type,i.url,i.async,i.username,i.password),i.xhrFields)for(n in i.xhrFields)r[n]=i.xhrFields[n];for(n in i.mimeType&&r.overrideMimeType&&r.overrideMimeType(i.mimeType),i.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest"),e)r.setRequestHeader(n,e[n]);o=function(e){return function(){o&&(o=a=r.onload=r.onerror=r.onabort=r.ontimeout=r.onreadystatechange=null,"abort"===e?r.abort():"error"===e?"number"!=typeof r.status?t(0,"error"):t(r.status,r.statusText):t(_t[r.status]||r.status,r.statusText,"text"!==(r.responseType||"text")||"string"!=typeof r.responseText?{binary:r.response}:{text:r.responseText},r.getAllResponseHeaders()))}},r.onload=o(),a=r.onerror=r.ontimeout=o("error"),void 0!==r.onabort?r.onabort=a:r.onreadystatechange=function(){4===r.readyState&&C.setTimeout(function(){o&&a()})},o=o("abort");try{r.send(i.hasContent&&i.data||null)}catch(e){if(o)throw e}},abort:function(){o&&o()}}}),S.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),S.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return S.globalEval(e),e}}}),S.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),S.ajaxTransport("script",function(n){var r,i;if(n.crossDomain||n.scriptAttrs)return{send:function(e,t){r=S("<script>").attr(n.scriptAttrs||{}).prop({charset:n.scriptCharset,src:n.url}).on("load error",i=function(e){r.remove(),i=null,e&&t("error"===e.type?404:200,e.type)}),E.head.appendChild(r[0])},abort:function(){i&&i()}}});var Ut,Xt=[],Vt=/(=)\?(?=&|$)|\?\?/;S.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Xt.pop()||S.expando+"_"+Ct.guid++;return this[e]=!0,e}}),S.ajaxPrefilter("json jsonp",function(e,t,n){var r,i,o,a=!1!==e.jsonp&&(Vt.test(e.url)?"url":"string"==typeof e.data&&0===(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&Vt.test(e.data)&&"data");if(a||"jsonp"===e.dataTypes[0])return r=e.jsonpCallback=m(e.jsonpCallback)?e.jsonpCallback():e.jsonpCallback,a?e[a]=e[a].replace(Vt,"$1"+r):!1!==e.jsonp&&(e.url+=(Et.test(e.url)?"&":"?")+e.jsonp+"="+r),e.converters["script json"]=function(){return o||S.error(r+" was not called"),o[0]},e.dataTypes[0]="json",i=C[r],C[r]=function(){o=arguments},n.always(function(){void 0===i?S(C).removeProp(r):C[r]=i,e[r]&&(e.jsonpCallback=t.jsonpCallback,Xt.push(r)),o&&m(i)&&i(o[0]),o=i=void 0}),"script"}),y.createHTMLDocument=((Ut=E.implementation.createHTMLDocument("").body).innerHTML="<form></form><form></form>",2===Ut.childNodes.length),S.parseHTML=function(e,t,n){return"string"!=typeof e?[]:("boolean"==typeof t&&(n=t,t=!1),t||(y.createHTMLDocument?((r=(t=E.implementation.createHTMLDocument("")).createElement("base")).href=E.location.href,t.head.appendChild(r)):t=E),o=!n&&[],(i=N.exec(e))?[t.createElement(i[1])]:(i=xe([e],t,o),o&&o.length&&S(o).remove(),S.merge([],i.childNodes)));var r,i,o},S.fn.load=function(e,t,n){var r,i,o,a=this,s=e.indexOf(" ");return-1<s&&(r=vt(e.slice(s)),e=e.slice(0,s)),m(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),0<a.length&&S.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done(function(e){o=arguments,a.html(r?S("<div>").append(S.parseHTML(e)).find(r):e)}).always(n&&function(e,t){a.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},S.expr.pseudos.animated=function(t){return S.grep(S.timers,function(e){return t===e.elem}).length},S.offset={setOffset:function(e,t,n){var r,i,o,a,s,u,l=S.css(e,"position"),c=S(e),f={};"static"===l&&(e.style.position="relative"),s=c.offset(),o=S.css(e,"top"),u=S.css(e,"left"),("absolute"===l||"fixed"===l)&&-1<(o+u).indexOf("auto")?(a=(r=c.position()).top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),m(t)&&(t=t.call(e,n,S.extend({},s))),null!=t.top&&(f.top=t.top-s.top+a),null!=t.left&&(f.left=t.left-s.left+i),"using"in t?t.using.call(e,f):("number"==typeof f.top&&(f.top+="px"),"number"==typeof f.left&&(f.left+="px"),c.css(f))}},S.fn.extend({offset:function(t){if(arguments.length)return void 0===t?this:this.each(function(e){S.offset.setOffset(this,t,e)});var e,n,r=this[0];return r?r.getClientRects().length?(e=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:e.top+n.pageYOffset,left:e.left+n.pageXOffset}):{top:0,left:0}:void 0},position:function(){if(this[0]){var e,t,n,r=this[0],i={top:0,left:0};if("fixed"===S.css(r,"position"))t=r.getBoundingClientRect();else{t=this.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;while(e&&(e===n.body||e===n.documentElement)&&"static"===S.css(e,"position"))e=e.parentNode;e&&e!==r&&1===e.nodeType&&((i=S(e).offset()).top+=S.css(e,"borderTopWidth",!0),i.left+=S.css(e,"borderLeftWidth",!0))}return{top:t.top-i.top-S.css(r,"marginTop",!0),left:t.left-i.left-S.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent;while(e&&"static"===S.css(e,"position"))e=e.offsetParent;return e||re})}}),S.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,i){var o="pageYOffset"===i;S.fn[t]=function(e){return $(this,function(e,t,n){var r;if(x(e)?r=e:9===e.nodeType&&(r=e.defaultView),void 0===n)return r?r[i]:e[t];r?r.scrollTo(o?r.pageXOffset:n,o?n:r.pageYOffset):e[t]=n},t,e,arguments.length)}}),S.each(["top","left"],function(e,n){S.cssHooks[n]=$e(y.pixelPosition,function(e,t){if(t)return t=Be(e,n),Me.test(t)?S(e).position()[n]+"px":t})}),S.each({Height:"height",Width:"width"},function(a,s){S.each({padding:"inner"+a,content:s,"":"outer"+a},function(r,o){S.fn[o]=function(e,t){var n=arguments.length&&(r||"boolean"!=typeof e),i=r||(!0===e||!0===t?"margin":"border");return $(this,function(e,t,n){var r;return x(e)?0===o.indexOf("outer")?e["inner"+a]:e.document.documentElement["client"+a]:9===e.nodeType?(r=e.documentElement,Math.max(e.body["scroll"+a],r["scroll"+a],e.body["offset"+a],r["offset"+a],r["client"+a])):void 0===n?S.css(e,t,i):S.style(e,t,n,i)},s,n?e:void 0,n)}})}),S.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){S.fn[t]=function(e){return this.on(t,e)}}),S.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)},hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),S.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,n){S.fn[n]=function(e,t){return 0<arguments.length?this.on(n,null,e,t):this.trigger(n)}});var Gt=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;S.proxy=function(e,t){var n,r,i;if("string"==typeof t&&(n=e[t],t=e,e=n),m(e))return r=s.call(arguments,2),(i=function(){return e.apply(t||this,r.concat(s.call(arguments)))}).guid=e.guid=e.guid||S.guid++,i},S.holdReady=function(e){e?S.readyWait++:S.ready(!0)},S.isArray=Array.isArray,S.parseJSON=JSON.parse,S.nodeName=A,S.isFunction=m,S.isWindow=x,S.camelCase=X,S.type=w,S.now=Date.now,S.isNumeric=function(e){var t=S.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},S.trim=function(e){return null==e?"":(e+"").replace(Gt,"")},"function"==typeof define&&define.amd&&define("jquery",[],function(){return S});var Yt=C.jQuery,Qt=C.$;return S.noConflict=function(e){return C.$===S&&(C.$=Qt),e&&C.jQuery===S&&(C.jQuery=Yt),S},"undefined"==typeof e&&(C.jQuery=C.$=S),S});
;
!function(n,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define("underscore",r):(n=n||self,function(){var t=n._,e=n._=r();e.noConflict=function(){return n._=t,e}}())}(this,(function(){
//     Underscore.js 1.11.0
//     https://underscorejs.org
//     (c) 2009-2020 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
//     Underscore may be freely distributed under the MIT license.
var n="1.11.0",r="object"==typeof self&&self.self===self&&self||"object"==typeof global&&global.global===global&&global||Function("return this")()||{},t=Array.prototype,e=Object.prototype,u="undefined"!=typeof Symbol?Symbol.prototype:null,i=t.push,o=t.slice,a=e.toString,f=e.hasOwnProperty,c="undefined"!=typeof ArrayBuffer,l=Array.isArray,s=Object.keys,p=Object.create,v=c&&ArrayBuffer.isView,h=isNaN,y=isFinite,g=!{toString:null}.propertyIsEnumerable("toString"),d=["valueOf","isPrototypeOf","toString","propertyIsEnumerable","hasOwnProperty","toLocaleString"],m=Math.pow(2,53)-1;function b(n,r){return r=null==r?n.length-1:+r,function(){for(var t=Math.max(arguments.length-r,0),e=Array(t),u=0;u<t;u++)e[u]=arguments[u+r];switch(r){case 0:return n.call(this,e);case 1:return n.call(this,arguments[0],e);case 2:return n.call(this,arguments[0],arguments[1],e)}var i=Array(r+1);for(u=0;u<r;u++)i[u]=arguments[u];return i[r]=e,n.apply(this,i)}}function _(n){var r=typeof n;return"function"===r||"object"===r&&!!n}function j(n){return!0===n||!1===n||"[object Boolean]"===a.call(n)}function w(n){return function(r){return a.call(r)==="[object "+n+"]"}}var x=w("String"),A=w("Number"),S=w("Date"),O=w("RegExp"),M=w("Error"),E=w("Symbol"),B=w("Map"),N=w("WeakMap"),D=w("Set"),I=w("WeakSet"),k=w("ArrayBuffer"),T=w("DataView"),V=l||w("Array"),R=w("Function"),F=r.document&&r.document.childNodes;"function"!=typeof/./&&"object"!=typeof Int8Array&&"function"!=typeof F&&(R=function(n){return"function"==typeof n||!1});var U=R;function q(n,r){return null!=n&&f.call(n,r)}var W=w("Arguments");!function(){W(arguments)||(W=function(n){return q(n,"callee")})}();var z=W;function L(n){return A(n)&&h(n)}function P(n){return function(){return n}}function C(n){return function(r){var t=n(r);return"number"==typeof t&&t>=0&&t<=m}}function K(n){return function(r){return null==r?void 0:r[n]}}var J=K("byteLength"),$=C(J),G=/\[object ((I|Ui)nt(8|16|32)|Float(32|64)|Uint8Clamped|Big(I|Ui)nt64)Array\]/;var H=c?function(n){return v?v(n)&&!T(n):$(n)&&G.test(a.call(n))}:P(!1),Q=K("length"),X=C(Q);function Y(n,r){r=function(n){for(var r={},t=n.length,e=0;e<t;++e)r[n[e]]=!0;return{contains:function(n){return r[n]},push:function(t){return r[t]=!0,n.push(t)}}}(r);var t=d.length,u=n.constructor,i=U(u)&&u.prototype||e,o="constructor";for(q(n,o)&&!r.contains(o)&&r.push(o);t--;)(o=d[t])in n&&n[o]!==i[o]&&!r.contains(o)&&r.push(o)}function Z(n){if(!_(n))return[];if(s)return s(n);var r=[];for(var t in n)q(n,t)&&r.push(t);return g&&Y(n,r),r}function nn(n,r){var t=Z(r),e=t.length;if(null==n)return!e;for(var u=Object(n),i=0;i<e;i++){var o=t[i];if(r[o]!==u[o]||!(o in u))return!1}return!0}function rn(n){return n instanceof rn?n:this instanceof rn?void(this._wrapped=n):new rn(n)}function tn(n,r,t,e){if(n===r)return 0!==n||1/n==1/r;if(null==n||null==r)return!1;if(n!=n)return r!=r;var i=typeof n;return("function"===i||"object"===i||"object"==typeof r)&&function n(r,t,e,i){r instanceof rn&&(r=r._wrapped);t instanceof rn&&(t=t._wrapped);var o=a.call(r);if(o!==a.call(t))return!1;switch(o){case"[object RegExp]":case"[object String]":return""+r==""+t;case"[object Number]":return+r!=+r?+t!=+t:0==+r?1/+r==1/t:+r==+t;case"[object Date]":case"[object Boolean]":return+r==+t;case"[object Symbol]":return u.valueOf.call(r)===u.valueOf.call(t);case"[object ArrayBuffer]":return n(new DataView(r),new DataView(t),e,i);case"[object DataView]":var f=J(r);if(f!==J(t))return!1;for(;f--;)if(r.getUint8(f)!==t.getUint8(f))return!1;return!0}if(H(r))return n(new DataView(r.buffer),new DataView(t.buffer),e,i);var c="[object Array]"===o;if(!c){if("object"!=typeof r||"object"!=typeof t)return!1;var l=r.constructor,s=t.constructor;if(l!==s&&!(U(l)&&l instanceof l&&U(s)&&s instanceof s)&&"constructor"in r&&"constructor"in t)return!1}i=i||[];var p=(e=e||[]).length;for(;p--;)if(e[p]===r)return i[p]===t;if(e.push(r),i.push(t),c){if((p=r.length)!==t.length)return!1;for(;p--;)if(!tn(r[p],t[p],e,i))return!1}else{var v,h=Z(r);if(p=h.length,Z(t).length!==p)return!1;for(;p--;)if(v=h[p],!q(t,v)||!tn(r[v],t[v],e,i))return!1}return e.pop(),i.pop(),!0}(n,r,t,e)}function en(n){if(!_(n))return[];var r=[];for(var t in n)r.push(t);return g&&Y(n,r),r}function un(n){for(var r=Z(n),t=r.length,e=Array(t),u=0;u<t;u++)e[u]=n[r[u]];return e}function on(n){for(var r={},t=Z(n),e=0,u=t.length;e<u;e++)r[n[t[e]]]=t[e];return r}function an(n){var r=[];for(var t in n)U(n[t])&&r.push(t);return r.sort()}function fn(n,r){return function(t){var e=arguments.length;if(r&&(t=Object(t)),e<2||null==t)return t;for(var u=1;u<e;u++)for(var i=arguments[u],o=n(i),a=o.length,f=0;f<a;f++){var c=o[f];r&&void 0!==t[c]||(t[c]=i[c])}return t}}rn.VERSION=n,rn.prototype.value=function(){return this._wrapped},rn.prototype.valueOf=rn.prototype.toJSON=rn.prototype.value,rn.prototype.toString=function(){return String(this._wrapped)};var cn=fn(en),ln=fn(Z),sn=fn(en,!0);function pn(n){if(!_(n))return{};if(p)return p(n);var r=function(){};r.prototype=n;var t=new r;return r.prototype=null,t}function vn(n){return _(n)?V(n)?n.slice():cn({},n):n}function hn(n){return n}function yn(n){return n=ln({},n),function(r){return nn(r,n)}}function gn(n,r){for(var t=r.length,e=0;e<t;e++){if(null==n)return;n=n[r[e]]}return t?n:void 0}function dn(n){return V(n)?function(r){return gn(r,n)}:K(n)}function mn(n,r,t){if(void 0===r)return n;switch(null==t?3:t){case 1:return function(t){return n.call(r,t)};case 3:return function(t,e,u){return n.call(r,t,e,u)};case 4:return function(t,e,u,i){return n.call(r,t,e,u,i)}}return function(){return n.apply(r,arguments)}}function bn(n,r,t){return null==n?hn:U(n)?mn(n,r,t):_(n)&&!V(n)?yn(n):dn(n)}function _n(n,r){return bn(n,r,1/0)}function jn(n,r,t){return rn.iteratee!==_n?rn.iteratee(n,r):bn(n,r,t)}function wn(n,r){return null==r&&(r=n,n=0),n+Math.floor(Math.random()*(r-n+1))}rn.iteratee=_n;var xn=Date.now||function(){return(new Date).getTime()};function An(n){var r=function(r){return n[r]},t="(?:"+Z(n).join("|")+")",e=RegExp(t),u=RegExp(t,"g");return function(n){return n=null==n?"":""+n,e.test(n)?n.replace(u,r):n}}var Sn={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},On=An(Sn),Mn=An(on(Sn)),En=rn.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g},Bn=/(.)^/,Nn={"'":"'","\\":"\\","\r":"r","\n":"n","\u2028":"u2028","\u2029":"u2029"},Dn=/\\|'|\r|\n|\u2028|\u2029/g;function In(n){return"\\"+Nn[n]}var kn=0;function Tn(n,r,t,e,u){if(!(e instanceof r))return n.apply(t,u);var i=pn(n.prototype),o=n.apply(i,u);return _(o)?o:i}var Vn=b((function(n,r){var t=Vn.placeholder,e=function(){for(var u=0,i=r.length,o=Array(i),a=0;a<i;a++)o[a]=r[a]===t?arguments[u++]:r[a];for(;u<arguments.length;)o.push(arguments[u++]);return Tn(n,e,this,this,o)};return e}));Vn.placeholder=rn;var Rn=b((function(n,r,t){if(!U(n))throw new TypeError("Bind must be called on a function");var e=b((function(u){return Tn(n,e,r,this,t.concat(u))}));return e}));function Fn(n,r,t,e){if(e=e||[],r||0===r){if(r<=0)return e.concat(n)}else r=1/0;for(var u=e.length,i=0,o=Q(n);i<o;i++){var a=n[i];if(X(a)&&(V(a)||z(a)))if(r>1)Fn(a,r-1,t,e),u=e.length;else for(var f=0,c=a.length;f<c;)e[u++]=a[f++];else t||(e[u++]=a)}return e}var Un=b((function(n,r){var t=(r=Fn(r,!1,!1)).length;if(t<1)throw new Error("bindAll must be passed function names");for(;t--;){var e=r[t];n[e]=Rn(n[e],n)}return n}));var qn=b((function(n,r,t){return setTimeout((function(){return n.apply(null,t)}),r)})),Wn=Vn(qn,rn,1);function zn(n){return function(){return!n.apply(this,arguments)}}function Ln(n,r){var t;return function(){return--n>0&&(t=r.apply(this,arguments)),n<=1&&(r=null),t}}var Pn=Vn(Ln,2);function Cn(n,r,t){r=jn(r,t);for(var e,u=Z(n),i=0,o=u.length;i<o;i++)if(r(n[e=u[i]],e,n))return e}function Kn(n){return function(r,t,e){t=jn(t,e);for(var u=Q(r),i=n>0?0:u-1;i>=0&&i<u;i+=n)if(t(r[i],i,r))return i;return-1}}var Jn=Kn(1),$n=Kn(-1);function Gn(n,r,t,e){for(var u=(t=jn(t,e,1))(r),i=0,o=Q(n);i<o;){var a=Math.floor((i+o)/2);t(n[a])<u?i=a+1:o=a}return i}function Hn(n,r,t){return function(e,u,i){var a=0,f=Q(e);if("number"==typeof i)n>0?a=i>=0?i:Math.max(i+f,a):f=i>=0?Math.min(i+1,f):i+f+1;else if(t&&i&&f)return e[i=t(e,u)]===u?i:-1;if(u!=u)return(i=r(o.call(e,a,f),L))>=0?i+a:-1;for(i=n>0?a:f-1;i>=0&&i<f;i+=n)if(e[i]===u)return i;return-1}}var Qn=Hn(1,Jn,Gn),Xn=Hn(-1,$n);function Yn(n,r,t){var e=(X(n)?Jn:Cn)(n,r,t);if(void 0!==e&&-1!==e)return n[e]}function Zn(n,r,t){var e,u;if(r=mn(r,t),X(n))for(e=0,u=n.length;e<u;e++)r(n[e],e,n);else{var i=Z(n);for(e=0,u=i.length;e<u;e++)r(n[i[e]],i[e],n)}return n}function nr(n,r,t){r=jn(r,t);for(var e=!X(n)&&Z(n),u=(e||n).length,i=Array(u),o=0;o<u;o++){var a=e?e[o]:o;i[o]=r(n[a],a,n)}return i}function rr(n){var r=function(r,t,e,u){var i=!X(r)&&Z(r),o=(i||r).length,a=n>0?0:o-1;for(u||(e=r[i?i[a]:a],a+=n);a>=0&&a<o;a+=n){var f=i?i[a]:a;e=t(e,r[f],f,r)}return e};return function(n,t,e,u){var i=arguments.length>=3;return r(n,mn(t,u,4),e,i)}}var tr=rr(1),er=rr(-1);function ur(n,r,t){var e=[];return r=jn(r,t),Zn(n,(function(n,t,u){r(n,t,u)&&e.push(n)})),e}function ir(n,r,t){r=jn(r,t);for(var e=!X(n)&&Z(n),u=(e||n).length,i=0;i<u;i++){var o=e?e[i]:i;if(!r(n[o],o,n))return!1}return!0}function or(n,r,t){r=jn(r,t);for(var e=!X(n)&&Z(n),u=(e||n).length,i=0;i<u;i++){var o=e?e[i]:i;if(r(n[o],o,n))return!0}return!1}function ar(n,r,t,e){return X(n)||(n=un(n)),("number"!=typeof t||e)&&(t=0),Qn(n,r,t)>=0}var fr=b((function(n,r,t){var e,u;return U(r)?u=r:V(r)&&(e=r.slice(0,-1),r=r[r.length-1]),nr(n,(function(n){var i=u;if(!i){if(e&&e.length&&(n=gn(n,e)),null==n)return;i=n[r]}return null==i?i:i.apply(n,t)}))}));function cr(n,r){return nr(n,dn(r))}function lr(n,r,t){var e,u,i=-1/0,o=-1/0;if(null==r||"number"==typeof r&&"object"!=typeof n[0]&&null!=n)for(var a=0,f=(n=X(n)?n:un(n)).length;a<f;a++)null!=(e=n[a])&&e>i&&(i=e);else r=jn(r,t),Zn(n,(function(n,t,e){((u=r(n,t,e))>o||u===-1/0&&i===-1/0)&&(i=n,o=u)}));return i}function sr(n,r,t){if(null==r||t)return X(n)||(n=un(n)),n[wn(n.length-1)];var e=X(n)?vn(n):un(n),u=Q(e);r=Math.max(Math.min(r,u),0);for(var i=u-1,o=0;o<r;o++){var a=wn(o,i),f=e[o];e[o]=e[a],e[a]=f}return e.slice(0,r)}function pr(n,r){return function(t,e,u){var i=r?[[],[]]:{};return e=jn(e,u),Zn(t,(function(r,u){var o=e(r,u,t);n(i,r,o)})),i}}var vr=pr((function(n,r,t){q(n,t)?n[t].push(r):n[t]=[r]})),hr=pr((function(n,r,t){n[t]=r})),yr=pr((function(n,r,t){q(n,t)?n[t]++:n[t]=1})),gr=pr((function(n,r,t){n[t?0:1].push(r)}),!0),dr=/[^\ud800-\udfff]|[\ud800-\udbff][\udc00-\udfff]|[\ud800-\udfff]/g;function mr(n,r,t){return r in t}var br=b((function(n,r){var t={},e=r[0];if(null==n)return t;U(e)?(r.length>1&&(e=mn(e,r[1])),r=en(n)):(e=mr,r=Fn(r,!1,!1),n=Object(n));for(var u=0,i=r.length;u<i;u++){var o=r[u],a=n[o];e(a,o,n)&&(t[o]=a)}return t})),_r=b((function(n,r){var t,e=r[0];return U(e)?(e=zn(e),r.length>1&&(t=r[1])):(r=nr(Fn(r,!1,!1),String),e=function(n,t){return!ar(r,t)}),br(n,e,t)}));function jr(n,r,t){return o.call(n,0,Math.max(0,n.length-(null==r||t?1:r)))}function wr(n,r,t){return null==n||n.length<1?null==r||t?void 0:[]:null==r||t?n[0]:jr(n,n.length-r)}function xr(n,r,t){return o.call(n,null==r||t?1:r)}var Ar=b((function(n,r){return r=Fn(r,!0,!0),ur(n,(function(n){return!ar(r,n)}))})),Sr=b((function(n,r){return Ar(n,r)}));function Or(n,r,t,e){j(r)||(e=t,t=r,r=!1),null!=t&&(t=jn(t,e));for(var u=[],i=[],o=0,a=Q(n);o<a;o++){var f=n[o],c=t?t(f,o,n):f;r&&!t?(o&&i===c||u.push(f),i=c):t?ar(i,c)||(i.push(c),u.push(f)):ar(u,f)||u.push(f)}return u}var Mr=b((function(n){return Or(Fn(n,!0,!0))}));function Er(n){for(var r=n&&lr(n,Q).length||0,t=Array(r),e=0;e<r;e++)t[e]=cr(n,e);return t}var Br=b(Er);function Nr(n,r){return n._chain?rn(r).chain():r}function Dr(n){return Zn(an(n),(function(r){var t=rn[r]=n[r];rn.prototype[r]=function(){var n=[this._wrapped];return i.apply(n,arguments),Nr(this,t.apply(rn,n))}})),rn}Zn(["pop","push","reverse","shift","sort","splice","unshift"],(function(n){var r=t[n];rn.prototype[n]=function(){var t=this._wrapped;return null!=t&&(r.apply(t,arguments),"shift"!==n&&"splice"!==n||0!==t.length||delete t[0]),Nr(this,t)}})),Zn(["concat","join","slice"],(function(n){var r=t[n];rn.prototype[n]=function(){var n=this._wrapped;return null!=n&&(n=r.apply(n,arguments)),Nr(this,n)}}));var Ir=Dr({__proto__:null,VERSION:n,restArguments:b,isObject:_,isNull:function(n){return null===n},isUndefined:function(n){return void 0===n},isBoolean:j,isElement:function(n){return!(!n||1!==n.nodeType)},isString:x,isNumber:A,isDate:S,isRegExp:O,isError:M,isSymbol:E,isMap:B,isWeakMap:N,isSet:D,isWeakSet:I,isArrayBuffer:k,isDataView:T,isArray:V,isFunction:U,isArguments:z,isFinite:function(n){return!E(n)&&y(n)&&!isNaN(parseFloat(n))},isNaN:L,isTypedArray:H,isEmpty:function(n){return null==n||(X(n)&&(V(n)||x(n)||z(n))?0===n.length:0===Z(n).length)},isMatch:nn,isEqual:function(n,r){return tn(n,r)},keys:Z,allKeys:en,values:un,pairs:function(n){for(var r=Z(n),t=r.length,e=Array(t),u=0;u<t;u++)e[u]=[r[u],n[r[u]]];return e},invert:on,functions:an,methods:an,extend:cn,extendOwn:ln,assign:ln,defaults:sn,create:function(n,r){var t=pn(n);return r&&ln(t,r),t},clone:vn,tap:function(n,r){return r(n),n},has:function(n,r){if(!V(r))return q(n,r);for(var t=r.length,e=0;e<t;e++){var u=r[e];if(null==n||!f.call(n,u))return!1;n=n[u]}return!!t},mapObject:function(n,r,t){r=jn(r,t);for(var e=Z(n),u=e.length,i={},o=0;o<u;o++){var a=e[o];i[a]=r(n[a],a,n)}return i},identity:hn,constant:P,noop:function(){},property:dn,propertyOf:function(n){return null==n?function(){}:function(r){return V(r)?gn(n,r):n[r]}},matcher:yn,matches:yn,times:function(n,r,t){var e=Array(Math.max(0,n));r=mn(r,t,1);for(var u=0;u<n;u++)e[u]=r(u);return e},random:wn,now:xn,escape:On,unescape:Mn,templateSettings:En,template:function(n,r,t){!r&&t&&(r=t),r=sn({},r,rn.templateSettings);var e,u=RegExp([(r.escape||Bn).source,(r.interpolate||Bn).source,(r.evaluate||Bn).source].join("|")+"|$","g"),i=0,o="__p+='";n.replace(u,(function(r,t,e,u,a){return o+=n.slice(i,a).replace(Dn,In),i=a+r.length,t?o+="'+\n((__t=("+t+"))==null?'':_.escape(__t))+\n'":e?o+="'+\n((__t=("+e+"))==null?'':__t)+\n'":u&&(o+="';\n"+u+"\n__p+='"),r})),o+="';\n",r.variable||(o="with(obj||{}){\n"+o+"}\n"),o="var __t,__p='',__j=Array.prototype.join,"+"print=function(){__p+=__j.call(arguments,'');};\n"+o+"return __p;\n";try{e=new Function(r.variable||"obj","_",o)}catch(n){throw n.source=o,n}var a=function(n){return e.call(this,n,rn)},f=r.variable||"obj";return a.source="function("+f+"){\n"+o+"}",a},result:function(n,r,t){V(r)||(r=[r]);var e=r.length;if(!e)return U(t)?t.call(n):t;for(var u=0;u<e;u++){var i=null==n?void 0:n[r[u]];void 0===i&&(i=t,u=e),n=U(i)?i.call(n):i}return n},uniqueId:function(n){var r=++kn+"";return n?n+r:r},chain:function(n){var r=rn(n);return r._chain=!0,r},iteratee:_n,partial:Vn,bind:Rn,bindAll:Un,memoize:function(n,r){var t=function(e){var u=t.cache,i=""+(r?r.apply(this,arguments):e);return q(u,i)||(u[i]=n.apply(this,arguments)),u[i]};return t.cache={},t},delay:qn,defer:Wn,throttle:function(n,r,t){var e,u,i,o,a=0;t||(t={});var f=function(){a=!1===t.leading?0:xn(),e=null,o=n.apply(u,i),e||(u=i=null)},c=function(){var c=xn();a||!1!==t.leading||(a=c);var l=r-(c-a);return u=this,i=arguments,l<=0||l>r?(e&&(clearTimeout(e),e=null),a=c,o=n.apply(u,i),e||(u=i=null)):e||!1===t.trailing||(e=setTimeout(f,l)),o};return c.cancel=function(){clearTimeout(e),a=0,e=u=i=null},c},debounce:function(n,r,t){var e,u,i=function(r,t){e=null,t&&(u=n.apply(r,t))},o=b((function(o){if(e&&clearTimeout(e),t){var a=!e;e=setTimeout(i,r),a&&(u=n.apply(this,o))}else e=qn(i,r,this,o);return u}));return o.cancel=function(){clearTimeout(e),e=null},o},wrap:function(n,r){return Vn(r,n)},negate:zn,compose:function(){var n=arguments,r=n.length-1;return function(){for(var t=r,e=n[r].apply(this,arguments);t--;)e=n[t].call(this,e);return e}},after:function(n,r){return function(){if(--n<1)return r.apply(this,arguments)}},before:Ln,once:Pn,findKey:Cn,findIndex:Jn,findLastIndex:$n,sortedIndex:Gn,indexOf:Qn,lastIndexOf:Xn,find:Yn,detect:Yn,findWhere:function(n,r){return Yn(n,yn(r))},each:Zn,forEach:Zn,map:nr,collect:nr,reduce:tr,foldl:tr,inject:tr,reduceRight:er,foldr:er,filter:ur,select:ur,reject:function(n,r,t){return ur(n,zn(jn(r)),t)},every:ir,all:ir,some:or,any:or,contains:ar,includes:ar,include:ar,invoke:fr,pluck:cr,where:function(n,r){return ur(n,yn(r))},max:lr,min:function(n,r,t){var e,u,i=1/0,o=1/0;if(null==r||"number"==typeof r&&"object"!=typeof n[0]&&null!=n)for(var a=0,f=(n=X(n)?n:un(n)).length;a<f;a++)null!=(e=n[a])&&e<i&&(i=e);else r=jn(r,t),Zn(n,(function(n,t,e){((u=r(n,t,e))<o||u===1/0&&i===1/0)&&(i=n,o=u)}));return i},shuffle:function(n){return sr(n,1/0)},sample:sr,sortBy:function(n,r,t){var e=0;return r=jn(r,t),cr(nr(n,(function(n,t,u){return{value:n,index:e++,criteria:r(n,t,u)}})).sort((function(n,r){var t=n.criteria,e=r.criteria;if(t!==e){if(t>e||void 0===t)return 1;if(t<e||void 0===e)return-1}return n.index-r.index})),"value")},groupBy:vr,indexBy:hr,countBy:yr,partition:gr,toArray:function(n){return n?V(n)?o.call(n):x(n)?n.match(dr):X(n)?nr(n,hn):un(n):[]},size:function(n){return null==n?0:X(n)?n.length:Z(n).length},pick:br,omit:_r,first:wr,head:wr,take:wr,initial:jr,last:function(n,r,t){return null==n||n.length<1?null==r||t?void 0:[]:null==r||t?n[n.length-1]:xr(n,Math.max(0,n.length-r))},rest:xr,tail:xr,drop:xr,compact:function(n){return ur(n,Boolean)},flatten:function(n,r){return Fn(n,r,!1)},without:Sr,uniq:Or,unique:Or,union:Mr,intersection:function(n){for(var r=[],t=arguments.length,e=0,u=Q(n);e<u;e++){var i=n[e];if(!ar(r,i)){var o;for(o=1;o<t&&ar(arguments[o],i);o++);o===t&&r.push(i)}}return r},difference:Ar,unzip:Er,transpose:Er,zip:Br,object:function(n,r){for(var t={},e=0,u=Q(n);e<u;e++)r?t[n[e]]=r[e]:t[n[e][0]]=n[e][1];return t},range:function(n,r,t){null==r&&(r=n||0,n=0),t||(t=r<n?-1:1);for(var e=Math.max(Math.ceil((r-n)/t),0),u=Array(e),i=0;i<e;i++,n+=t)u[i]=n;return u},chunk:function(n,r){if(null==r||r<1)return[];for(var t=[],e=0,u=n.length;e<u;)t.push(o.call(n,e,e+=r));return t},mixin:Dr,default:rn});return Ir._=Ir,Ir}));;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

if (!Array.prototype.find) {
  Object.defineProperty(Array.prototype, 'find', {
    value: function value(predicate) {
      if (this == null) {
        throw TypeError('"this" is null or not defined');
      }

      var o = Object(this);
      var len = o.length >>> 0;

      if (typeof predicate !== 'function') {
        throw TypeError('predicate must be a function');
      }

      var thisArg = arguments[1];
      var k = 0;

      while (k < len) {
        var kValue = o[k];

        if (predicate.call(thisArg, kValue, k, o)) {
          return kValue;
        }

        k++;
      }

      return undefined;
    },
    configurable: true,
    writable: true
  });
};
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):t.ES6Promise=e()}(this,function(){"use strict";function t(t){var e=typeof t;return null!==t&&("object"===e||"function"===e)}function e(t){return"function"==typeof t}function n(t){W=t}function r(t){z=t}function o(){return function(){return process.nextTick(a)}}function i(){return"undefined"!=typeof U?function(){U(a)}:c()}function s(){var t=0,e=new H(a),n=document.createTextNode("");return e.observe(n,{characterData:!0}),function(){n.data=t=++t%2}}function u(){var t=new MessageChannel;return t.port1.onmessage=a,function(){return t.port2.postMessage(0)}}function c(){var t=setTimeout;return function(){return t(a,1)}}function a(){for(var t=0;t<N;t+=2){var e=Q[t],n=Q[t+1];e(n),Q[t]=void 0,Q[t+1]=void 0}N=0}function f(){try{var t=Function("return this")().require("vertx");return U=t.runOnLoop||t.runOnContext,i()}catch(e){return c()}}function l(t,e){var n=this,r=new this.constructor(p);void 0===r[V]&&x(r);var o=n._state;if(o){var i=arguments[o-1];z(function(){return T(o,r,i,n._result)})}else j(n,r,t,e);return r}function h(t){var e=this;if(t&&"object"==typeof t&&t.constructor===e)return t;var n=new e(p);return w(n,t),n}function p(){}function v(){return new TypeError("You cannot resolve a promise with itself")}function d(){return new TypeError("A promises callback cannot return that same promise.")}function _(t,e,n,r){try{t.call(e,n,r)}catch(o){return o}}function y(t,e,n){z(function(t){var r=!1,o=_(n,e,function(n){r||(r=!0,e!==n?w(t,n):A(t,n))},function(e){r||(r=!0,S(t,e))},"Settle: "+(t._label||" unknown promise"));!r&&o&&(r=!0,S(t,o))},t)}function m(t,e){e._state===Z?A(t,e._result):e._state===$?S(t,e._result):j(e,void 0,function(e){return w(t,e)},function(e){return S(t,e)})}function b(t,n,r){n.constructor===t.constructor&&r===l&&n.constructor.resolve===h?m(t,n):void 0===r?A(t,n):e(r)?y(t,n,r):A(t,n)}function w(e,n){if(e===n)S(e,v());else if(t(n)){var r=void 0;try{r=n.then}catch(o){return void S(e,o)}b(e,n,r)}else A(e,n)}function g(t){t._onerror&&t._onerror(t._result),E(t)}function A(t,e){t._state===X&&(t._result=e,t._state=Z,0!==t._subscribers.length&&z(E,t))}function S(t,e){t._state===X&&(t._state=$,t._result=e,z(g,t))}function j(t,e,n,r){var o=t._subscribers,i=o.length;t._onerror=null,o[i]=e,o[i+Z]=n,o[i+$]=r,0===i&&t._state&&z(E,t)}function E(t){var e=t._subscribers,n=t._state;if(0!==e.length){for(var r=void 0,o=void 0,i=t._result,s=0;s<e.length;s+=3)r=e[s],o=e[s+n],r?T(n,r,o,i):o(i);t._subscribers.length=0}}function T(t,n,r,o){var i=e(r),s=void 0,u=void 0,c=!0;if(i){try{s=r(o)}catch(a){c=!1,u=a}if(n===s)return void S(n,d())}else s=o;n._state!==X||(i&&c?w(n,s):c===!1?S(n,u):t===Z?A(n,s):t===$&&S(n,s))}function M(t,e){try{e(function(e){w(t,e)},function(e){S(t,e)})}catch(n){S(t,n)}}function P(){return tt++}function x(t){t[V]=tt++,t._state=void 0,t._result=void 0,t._subscribers=[]}function C(){return new Error("Array Methods must be provided an Array")}function O(t){return new et(this,t).promise}function k(t){var e=this;return new e(L(t)?function(n,r){for(var o=t.length,i=0;i<o;i++)e.resolve(t[i]).then(n,r)}:function(t,e){return e(new TypeError("You must pass an array to race."))})}function F(t){var e=this,n=new e(p);return S(n,t),n}function Y(){throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")}function q(){throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")}function D(){var t=void 0;if("undefined"!=typeof global)t=global;else if("undefined"!=typeof self)t=self;else try{t=Function("return this")()}catch(e){throw new Error("polyfill failed because global object is unavailable in this environment")}var n=t.Promise;if(n){var r=null;try{r=Object.prototype.toString.call(n.resolve())}catch(e){}if("[object Promise]"===r&&!n.cast)return}t.Promise=nt}var K=void 0;K=Array.isArray?Array.isArray:function(t){return"[object Array]"===Object.prototype.toString.call(t)};var L=K,N=0,U=void 0,W=void 0,z=function(t,e){Q[N]=t,Q[N+1]=e,N+=2,2===N&&(W?W(a):R())},B="undefined"!=typeof window?window:void 0,G=B||{},H=G.MutationObserver||G.WebKitMutationObserver,I="undefined"==typeof self&&"undefined"!=typeof process&&"[object process]"==={}.toString.call(process),J="undefined"!=typeof Uint8ClampedArray&&"undefined"!=typeof importScripts&&"undefined"!=typeof MessageChannel,Q=new Array(1e3),R=void 0;R=I?o():H?s():J?u():void 0===B&&"function"==typeof require?f():c();var V=Math.random().toString(36).substring(2),X=void 0,Z=1,$=2,tt=0,et=function(){function t(t,e){this._instanceConstructor=t,this.promise=new t(p),this.promise[V]||x(this.promise),L(e)?(this.length=e.length,this._remaining=e.length,this._result=new Array(this.length),0===this.length?A(this.promise,this._result):(this.length=this.length||0,this._enumerate(e),0===this._remaining&&A(this.promise,this._result))):S(this.promise,C())}return t.prototype._enumerate=function(t){for(var e=0;this._state===X&&e<t.length;e++)this._eachEntry(t[e],e)},t.prototype._eachEntry=function(t,e){var n=this._instanceConstructor,r=n.resolve;if(r===h){var o=void 0,i=void 0,s=!1;try{o=t.then}catch(u){s=!0,i=u}if(o===l&&t._state!==X)this._settledAt(t._state,e,t._result);else if("function"!=typeof o)this._remaining--,this._result[e]=t;else if(n===nt){var c=new n(p);s?S(c,i):b(c,t,o),this._willSettleAt(c,e)}else this._willSettleAt(new n(function(e){return e(t)}),e)}else this._willSettleAt(r(t),e)},t.prototype._settledAt=function(t,e,n){var r=this.promise;r._state===X&&(this._remaining--,t===$?S(r,n):this._result[e]=n),0===this._remaining&&A(r,this._result)},t.prototype._willSettleAt=function(t,e){var n=this;j(t,void 0,function(t){return n._settledAt(Z,e,t)},function(t){return n._settledAt($,e,t)})},t}(),nt=function(){function t(e){this[V]=P(),this._result=this._state=void 0,this._subscribers=[],p!==e&&("function"!=typeof e&&Y(),this instanceof t?M(this,e):q())}return t.prototype["catch"]=function(t){return this.then(null,t)},t.prototype["finally"]=function(t){var n=this,r=n.constructor;return e(t)?n.then(function(e){return r.resolve(t()).then(function(){return e})},function(e){return r.resolve(t()).then(function(){throw e})}):n.then(t,t)},t}();return nt.prototype.then=l,nt.all=O,nt.race=k,nt.resolve=h,nt.reject=F,nt._setScheduler=n,nt._setAsap=r,nt._asap=z,nt.polyfill=D,nt.Promise=nt,nt.polyfill(),nt});
;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

if (typeof Object.assign !== 'function') {
  Object.defineProperty(Object, 'assign', {
    value: function assign(target, varArgs) {
      'use strict';

      if (target === null || target === undefined) {
        throw new TypeError('Cannot convert undefined or null to object');
      }

      var to = Object(target);

      for (var index = 1; index < arguments.length; index++) {
        var nextSource = arguments[index];

        if (nextSource !== null && nextSource !== undefined) {
          for (var nextKey in nextSource) {
            if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
              to[nextKey] = nextSource[nextKey];
            }
          }
        }
      }

      return to;
    },
    writable: true,
    configurable: true
  });
};
/*!
 * jQuery Once v2.2.3 - http://github.com/robloach/jquery-once
 * @license MIT, GPL-2.0
 *   http://opensource.org/licenses/MIT
 *   http://opensource.org/licenses/GPL-2.0
 */
(function(e){"use strict";if(typeof exports==="object"&&typeof exports.nodeName!=="string"){e(require("jquery"))}else if(typeof define==="function"&&define.amd){define(["jquery"],e)}else{e(jQuery)}})(function(t){"use strict";var r=function(e){e=e||"once";if(typeof e!=="string"){throw new TypeError("The jQuery Once id parameter must be a string")}return e};t.fn.once=function(e){var n="jquery-once-"+r(e);return this.filter(function(){return t(this).data(n)!==true}).data(n,true)};t.fn.removeOnce=function(e){return this.findOnce(e).removeData("jquery-once-"+r(e))};t.fn.findOnce=function(e){var n="jquery-once-"+r(e);return this.filter(function(){return t(this).data(n)===true})}});

(function(t){var e=typeof self=="object"&&self.self===self&&self||typeof global=="object"&&global.global===global&&global;if(typeof define==="function"&&define.amd){define(["underscore","jquery","exports"],function(i,n,r){e.Backbone=t(e,r,i,n)})}else if(typeof exports!=="undefined"){var i=require("underscore"),n;try{n=require("jquery")}catch(r){}t(e,exports,i,n)}else{e.Backbone=t(e,{},e._,e.jQuery||e.Zepto||e.ender||e.$)}})(function(t,e,i,n){var r=t.Backbone;var s=Array.prototype.slice;e.VERSION="1.4.0";e.$=n;e.noConflict=function(){t.Backbone=r;return this};e.emulateHTTP=false;e.emulateJSON=false;var a=e.Events={};var o=/\s+/;var h;var u=function(t,e,n,r,s){var a=0,h;if(n&&typeof n==="object"){if(r!==void 0&&"context"in s&&s.context===void 0)s.context=r;for(h=i.keys(n);a<h.length;a++){e=u(t,e,h[a],n[h[a]],s)}}else if(n&&o.test(n)){for(h=n.split(o);a<h.length;a++){e=t(e,h[a],r,s)}}else{e=t(e,n,r,s)}return e};a.on=function(t,e,i){this._events=u(l,this._events||{},t,e,{context:i,ctx:this,listening:h});if(h){var n=this._listeners||(this._listeners={});n[h.id]=h;h.interop=false}return this};a.listenTo=function(t,e,n){if(!t)return this;var r=t._listenId||(t._listenId=i.uniqueId("l"));var s=this._listeningTo||(this._listeningTo={});var a=h=s[r];if(!a){this._listenId||(this._listenId=i.uniqueId("l"));a=h=s[r]=new g(this,t)}var o=c(t,e,n,this);h=void 0;if(o)throw o;if(a.interop)a.on(e,n);return this};var l=function(t,e,i,n){if(i){var r=t[e]||(t[e]=[]);var s=n.context,a=n.ctx,o=n.listening;if(o)o.count++;r.push({callback:i,context:s,ctx:s||a,listening:o})}return t};var c=function(t,e,i,n){try{t.on(e,i,n)}catch(r){return r}};a.off=function(t,e,i){if(!this._events)return this;this._events=u(f,this._events,t,e,{context:i,listeners:this._listeners});return this};a.stopListening=function(t,e,n){var r=this._listeningTo;if(!r)return this;var s=t?[t._listenId]:i.keys(r);for(var a=0;a<s.length;a++){var o=r[s[a]];if(!o)break;o.obj.off(e,n,this);if(o.interop)o.off(e,n)}if(i.isEmpty(r))this._listeningTo=void 0;return this};var f=function(t,e,n,r){if(!t)return;var s=r.context,a=r.listeners;var o=0,h;if(!e&&!s&&!n){for(h=i.keys(a);o<h.length;o++){a[h[o]].cleanup()}return}h=e?[e]:i.keys(t);for(;o<h.length;o++){e=h[o];var u=t[e];if(!u)break;var l=[];for(var c=0;c<u.length;c++){var f=u[c];if(n&&n!==f.callback&&n!==f.callback._callback||s&&s!==f.context){l.push(f)}else{var d=f.listening;if(d)d.off(e,n)}}if(l.length){t[e]=l}else{delete t[e]}}return t};a.once=function(t,e,i){var n=u(d,{},t,e,this.off.bind(this));if(typeof t==="string"&&i==null)e=void 0;return this.on(n,e,i)};a.listenToOnce=function(t,e,i){var n=u(d,{},e,i,this.stopListening.bind(this,t));return this.listenTo(t,n)};var d=function(t,e,n,r){if(n){var s=t[e]=i.once(function(){r(e,s);n.apply(this,arguments)});s._callback=n}return t};a.trigger=function(t){if(!this._events)return this;var e=Math.max(0,arguments.length-1);var i=Array(e);for(var n=0;n<e;n++)i[n]=arguments[n+1];u(v,this._events,t,void 0,i);return this};var v=function(t,e,i,n){if(t){var r=t[e];var s=t.all;if(r&&s)s=s.slice();if(r)p(r,n);if(s)p(s,[e].concat(n))}return t};var p=function(t,e){var i,n=-1,r=t.length,s=e[0],a=e[1],o=e[2];switch(e.length){case 0:while(++n<r)(i=t[n]).callback.call(i.ctx);return;case 1:while(++n<r)(i=t[n]).callback.call(i.ctx,s);return;case 2:while(++n<r)(i=t[n]).callback.call(i.ctx,s,a);return;case 3:while(++n<r)(i=t[n]).callback.call(i.ctx,s,a,o);return;default:while(++n<r)(i=t[n]).callback.apply(i.ctx,e);return}};var g=function(t,e){this.id=t._listenId;this.listener=t;this.obj=e;this.interop=true;this.count=0;this._events=void 0};g.prototype.on=a.on;g.prototype.off=function(t,e){var i;if(this.interop){this._events=u(f,this._events,t,e,{context:void 0,listeners:void 0});i=!this._events}else{this.count--;i=this.count===0}if(i)this.cleanup()};g.prototype.cleanup=function(){delete this.listener._listeningTo[this.obj._listenId];if(!this.interop)delete this.obj._listeners[this.id]};a.bind=a.on;a.unbind=a.off;i.extend(e,a);var m=e.Model=function(t,e){var n=t||{};e||(e={});this.preinitialize.apply(this,arguments);this.cid=i.uniqueId(this.cidPrefix);this.attributes={};if(e.collection)this.collection=e.collection;if(e.parse)n=this.parse(n,e)||{};var r=i.result(this,"defaults");n=i.defaults(i.extend({},r,n),r);this.set(n,e);this.changed={};this.initialize.apply(this,arguments)};i.extend(m.prototype,a,{changed:null,validationError:null,idAttribute:"id",cidPrefix:"c",preinitialize:function(){},initialize:function(){},toJSON:function(t){return i.clone(this.attributes)},sync:function(){return e.sync.apply(this,arguments)},get:function(t){return this.attributes[t]},escape:function(t){return i.escape(this.get(t))},has:function(t){return this.get(t)!=null},matches:function(t){return!!i.iteratee(t,this)(this.attributes)},set:function(t,e,n){if(t==null)return this;var r;if(typeof t==="object"){r=t;n=e}else{(r={})[t]=e}n||(n={});if(!this._validate(r,n))return false;var s=n.unset;var a=n.silent;var o=[];var h=this._changing;this._changing=true;if(!h){this._previousAttributes=i.clone(this.attributes);this.changed={}}var u=this.attributes;var l=this.changed;var c=this._previousAttributes;for(var f in r){e=r[f];if(!i.isEqual(u[f],e))o.push(f);if(!i.isEqual(c[f],e)){l[f]=e}else{delete l[f]}s?delete u[f]:u[f]=e}if(this.idAttribute in r)this.id=this.get(this.idAttribute);if(!a){if(o.length)this._pending=n;for(var d=0;d<o.length;d++){this.trigger("change:"+o[d],this,u[o[d]],n)}}if(h)return this;if(!a){while(this._pending){n=this._pending;this._pending=false;this.trigger("change",this,n)}}this._pending=false;this._changing=false;return this},unset:function(t,e){return this.set(t,void 0,i.extend({},e,{unset:true}))},clear:function(t){var e={};for(var n in this.attributes)e[n]=void 0;return this.set(e,i.extend({},t,{unset:true}))},hasChanged:function(t){if(t==null)return!i.isEmpty(this.changed);return i.has(this.changed,t)},changedAttributes:function(t){if(!t)return this.hasChanged()?i.clone(this.changed):false;var e=this._changing?this._previousAttributes:this.attributes;var n={};var r;for(var s in t){var a=t[s];if(i.isEqual(e[s],a))continue;n[s]=a;r=true}return r?n:false},previous:function(t){if(t==null||!this._previousAttributes)return null;return this._previousAttributes[t]},previousAttributes:function(){return i.clone(this._previousAttributes)},fetch:function(t){t=i.extend({parse:true},t);var e=this;var n=t.success;t.success=function(i){var r=t.parse?e.parse(i,t):i;if(!e.set(r,t))return false;if(n)n.call(t.context,e,i,t);e.trigger("sync",e,i,t)};G(this,t);return this.sync("read",this,t)},save:function(t,e,n){var r;if(t==null||typeof t==="object"){r=t;n=e}else{(r={})[t]=e}n=i.extend({validate:true,parse:true},n);var s=n.wait;if(r&&!s){if(!this.set(r,n))return false}else if(!this._validate(r,n)){return false}var a=this;var o=n.success;var h=this.attributes;n.success=function(t){a.attributes=h;var e=n.parse?a.parse(t,n):t;if(s)e=i.extend({},r,e);if(e&&!a.set(e,n))return false;if(o)o.call(n.context,a,t,n);a.trigger("sync",a,t,n)};G(this,n);if(r&&s)this.attributes=i.extend({},h,r);var u=this.isNew()?"create":n.patch?"patch":"update";if(u==="patch"&&!n.attrs)n.attrs=r;var l=this.sync(u,this,n);this.attributes=h;return l},destroy:function(t){t=t?i.clone(t):{};var e=this;var n=t.success;var r=t.wait;var s=function(){e.stopListening();e.trigger("destroy",e,e.collection,t)};t.success=function(i){if(r)s();if(n)n.call(t.context,e,i,t);if(!e.isNew())e.trigger("sync",e,i,t)};var a=false;if(this.isNew()){i.defer(t.success)}else{G(this,t);a=this.sync("delete",this,t)}if(!r)s();return a},url:function(){var t=i.result(this,"urlRoot")||i.result(this.collection,"url")||V();if(this.isNew())return t;var e=this.get(this.idAttribute);return t.replace(/[^\/]$/,"$&/")+encodeURIComponent(e)},parse:function(t,e){return t},clone:function(){return new this.constructor(this.attributes)},isNew:function(){return!this.has(this.idAttribute)},isValid:function(t){return this._validate({},i.extend({},t,{validate:true}))},_validate:function(t,e){if(!e.validate||!this.validate)return true;t=i.extend({},this.attributes,t);var n=this.validationError=this.validate(t,e)||null;if(!n)return true;this.trigger("invalid",this,n,i.extend(e,{validationError:n}));return false}});var _=e.Collection=function(t,e){e||(e={});this.preinitialize.apply(this,arguments);if(e.model)this.model=e.model;if(e.comparator!==void 0)this.comparator=e.comparator;this._reset();this.initialize.apply(this,arguments);if(t)this.reset(t,i.extend({silent:true},e))};var y={add:true,remove:true,merge:true};var b={add:true,remove:false};var x=function(t,e,i){i=Math.min(Math.max(i,0),t.length);var n=Array(t.length-i);var r=e.length;var s;for(s=0;s<n.length;s++)n[s]=t[s+i];for(s=0;s<r;s++)t[s+i]=e[s];for(s=0;s<n.length;s++)t[s+r+i]=n[s]};i.extend(_.prototype,a,{model:m,preinitialize:function(){},initialize:function(){},toJSON:function(t){return this.map(function(e){return e.toJSON(t)})},sync:function(){return e.sync.apply(this,arguments)},add:function(t,e){return this.set(t,i.extend({merge:false},e,b))},remove:function(t,e){e=i.extend({},e);var n=!i.isArray(t);t=n?[t]:t.slice();var r=this._removeModels(t,e);if(!e.silent&&r.length){e.changes={added:[],merged:[],removed:r};this.trigger("update",this,e)}return n?r[0]:r},set:function(t,e){if(t==null)return;e=i.extend({},y,e);if(e.parse&&!this._isModel(t)){t=this.parse(t,e)||[]}var n=!i.isArray(t);t=n?[t]:t.slice();var r=e.at;if(r!=null)r=+r;if(r>this.length)r=this.length;if(r<0)r+=this.length+1;var s=[];var a=[];var o=[];var h=[];var u={};var l=e.add;var c=e.merge;var f=e.remove;var d=false;var v=this.comparator&&r==null&&e.sort!==false;var p=i.isString(this.comparator)?this.comparator:null;var g,m;for(m=0;m<t.length;m++){g=t[m];var _=this.get(g);if(_){if(c&&g!==_){var b=this._isModel(g)?g.attributes:g;if(e.parse)b=_.parse(b,e);_.set(b,e);o.push(_);if(v&&!d)d=_.hasChanged(p)}if(!u[_.cid]){u[_.cid]=true;s.push(_)}t[m]=_}else if(l){g=t[m]=this._prepareModel(g,e);if(g){a.push(g);this._addReference(g,e);u[g.cid]=true;s.push(g)}}}if(f){for(m=0;m<this.length;m++){g=this.models[m];if(!u[g.cid])h.push(g)}if(h.length)this._removeModels(h,e)}var w=false;var E=!v&&l&&f;if(s.length&&E){w=this.length!==s.length||i.some(this.models,function(t,e){return t!==s[e]});this.models.length=0;x(this.models,s,0);this.length=this.models.length}else if(a.length){if(v)d=true;x(this.models,a,r==null?this.length:r);this.length=this.models.length}if(d)this.sort({silent:true});if(!e.silent){for(m=0;m<a.length;m++){if(r!=null)e.index=r+m;g=a[m];g.trigger("add",g,this,e)}if(d||w)this.trigger("sort",this,e);if(a.length||h.length||o.length){e.changes={added:a,removed:h,merged:o};this.trigger("update",this,e)}}return n?t[0]:t},reset:function(t,e){e=e?i.clone(e):{};for(var n=0;n<this.models.length;n++){this._removeReference(this.models[n],e)}e.previousModels=this.models;this._reset();t=this.add(t,i.extend({silent:true},e));if(!e.silent)this.trigger("reset",this,e);return t},push:function(t,e){return this.add(t,i.extend({at:this.length},e))},pop:function(t){var e=this.at(this.length-1);return this.remove(e,t)},unshift:function(t,e){return this.add(t,i.extend({at:0},e))},shift:function(t){var e=this.at(0);return this.remove(e,t)},slice:function(){return s.apply(this.models,arguments)},get:function(t){if(t==null)return void 0;return this._byId[t]||this._byId[this.modelId(this._isModel(t)?t.attributes:t)]||t.cid&&this._byId[t.cid]},has:function(t){return this.get(t)!=null},at:function(t){if(t<0)t+=this.length;return this.models[t]},where:function(t,e){return this[e?"find":"filter"](t)},findWhere:function(t){return this.where(t,true)},sort:function(t){var e=this.comparator;if(!e)throw new Error("Cannot sort a set without a comparator");t||(t={});var n=e.length;if(i.isFunction(e))e=e.bind(this);if(n===1||i.isString(e)){this.models=this.sortBy(e)}else{this.models.sort(e)}if(!t.silent)this.trigger("sort",this,t);return this},pluck:function(t){return this.map(t+"")},fetch:function(t){t=i.extend({parse:true},t);var e=t.success;var n=this;t.success=function(i){var r=t.reset?"reset":"set";n[r](i,t);if(e)e.call(t.context,n,i,t);n.trigger("sync",n,i,t)};G(this,t);return this.sync("read",this,t)},create:function(t,e){e=e?i.clone(e):{};var n=e.wait;t=this._prepareModel(t,e);if(!t)return false;if(!n)this.add(t,e);var r=this;var s=e.success;e.success=function(t,e,i){if(n)r.add(t,i);if(s)s.call(i.context,t,e,i)};t.save(null,e);return t},parse:function(t,e){return t},clone:function(){return new this.constructor(this.models,{model:this.model,comparator:this.comparator})},modelId:function(t){return t[this.model.prototype.idAttribute||"id"]},values:function(){return new E(this,k)},keys:function(){return new E(this,I)},entries:function(){return new E(this,S)},_reset:function(){this.length=0;this.models=[];this._byId={}},_prepareModel:function(t,e){if(this._isModel(t)){if(!t.collection)t.collection=this;return t}e=e?i.clone(e):{};e.collection=this;var n=new this.model(t,e);if(!n.validationError)return n;this.trigger("invalid",this,n.validationError,e);return false},_removeModels:function(t,e){var i=[];for(var n=0;n<t.length;n++){var r=this.get(t[n]);if(!r)continue;var s=this.indexOf(r);this.models.splice(s,1);this.length--;delete this._byId[r.cid];var a=this.modelId(r.attributes);if(a!=null)delete this._byId[a];if(!e.silent){e.index=s;r.trigger("remove",r,this,e)}i.push(r);this._removeReference(r,e)}return i},_isModel:function(t){return t instanceof m},_addReference:function(t,e){this._byId[t.cid]=t;var i=this.modelId(t.attributes);if(i!=null)this._byId[i]=t;t.on("all",this._onModelEvent,this)},_removeReference:function(t,e){delete this._byId[t.cid];var i=this.modelId(t.attributes);if(i!=null)delete this._byId[i];if(this===t.collection)delete t.collection;t.off("all",this._onModelEvent,this)},_onModelEvent:function(t,e,i,n){if(e){if((t==="add"||t==="remove")&&i!==this)return;if(t==="destroy")this.remove(e,n);if(t==="change"){var r=this.modelId(e.previousAttributes());var s=this.modelId(e.attributes);if(r!==s){if(r!=null)delete this._byId[r];if(s!=null)this._byId[s]=e}}}this.trigger.apply(this,arguments)}});var w=typeof Symbol==="function"&&Symbol.iterator;if(w){_.prototype[w]=_.prototype.values}var E=function(t,e){this._collection=t;this._kind=e;this._index=0};var k=1;var I=2;var S=3;if(w){E.prototype[w]=function(){return this}}E.prototype.next=function(){if(this._collection){if(this._index<this._collection.length){var t=this._collection.at(this._index);this._index++;var e;if(this._kind===k){e=t}else{var i=this._collection.modelId(t.attributes);if(this._kind===I){e=i}else{e=[i,t]}}return{value:e,done:false}}this._collection=void 0}return{value:void 0,done:true}};var T=e.View=function(t){this.cid=i.uniqueId("view");this.preinitialize.apply(this,arguments);i.extend(this,i.pick(t,H));this._ensureElement();this.initialize.apply(this,arguments)};var P=/^(\S+)\s*(.*)$/;var H=["model","collection","el","id","attributes","className","tagName","events"];i.extend(T.prototype,a,{tagName:"div",$:function(t){return this.$el.find(t)},preinitialize:function(){},initialize:function(){},render:function(){return this},remove:function(){this._removeElement();this.stopListening();return this},_removeElement:function(){this.$el.remove()},setElement:function(t){this.undelegateEvents();this._setElement(t);this.delegateEvents();return this},_setElement:function(t){this.$el=t instanceof e.$?t:e.$(t);this.el=this.$el[0]},delegateEvents:function(t){t||(t=i.result(this,"events"));if(!t)return this;this.undelegateEvents();for(var e in t){var n=t[e];if(!i.isFunction(n))n=this[n];if(!n)continue;var r=e.match(P);this.delegate(r[1],r[2],n.bind(this))}return this},delegate:function(t,e,i){this.$el.on(t+".delegateEvents"+this.cid,e,i);return this},undelegateEvents:function(){if(this.$el)this.$el.off(".delegateEvents"+this.cid);return this},undelegate:function(t,e,i){this.$el.off(t+".delegateEvents"+this.cid,e,i);return this},_createElement:function(t){return document.createElement(t)},_ensureElement:function(){if(!this.el){var t=i.extend({},i.result(this,"attributes"));if(this.id)t.id=i.result(this,"id");if(this.className)t["class"]=i.result(this,"className");this.setElement(this._createElement(i.result(this,"tagName")));this._setAttributes(t)}else{this.setElement(i.result(this,"el"))}},_setAttributes:function(t){this.$el.attr(t)}});var $=function(t,e,i,n){switch(e){case 1:return function(){return t[i](this[n])};case 2:return function(e){return t[i](this[n],e)};case 3:return function(e,r){return t[i](this[n],C(e,this),r)};case 4:return function(e,r,s){return t[i](this[n],C(e,this),r,s)};default:return function(){var e=s.call(arguments);e.unshift(this[n]);return t[i].apply(t,e)}}};var A=function(t,e,n,r){i.each(n,function(i,n){if(e[n])t.prototype[n]=$(e,i,n,r)})};var C=function(t,e){if(i.isFunction(t))return t;if(i.isObject(t)&&!e._isModel(t))return R(t);if(i.isString(t))return function(e){return e.get(t)};return t};var R=function(t){var e=i.matches(t);return function(t){return e(t.attributes)}};var M={forEach:3,each:3,map:3,collect:3,reduce:0,foldl:0,inject:0,reduceRight:0,foldr:0,find:3,detect:3,filter:3,select:3,reject:3,every:3,all:3,some:3,any:3,include:3,includes:3,contains:3,invoke:0,max:3,min:3,toArray:1,size:1,first:3,head:3,take:3,initial:3,rest:3,tail:3,drop:3,last:3,without:0,difference:0,indexOf:3,shuffle:1,lastIndexOf:3,isEmpty:1,chain:1,sample:3,partition:3,groupBy:3,countBy:3,sortBy:3,indexBy:3,findIndex:3,findLastIndex:3};var N={keys:1,values:1,pairs:1,invert:1,pick:0,omit:0,chain:1,isEmpty:1};i.each([[_,M,"models"],[m,N,"attributes"]],function(t){var e=t[0],n=t[1],r=t[2];e.mixin=function(t){var n=i.reduce(i.functions(t),function(t,e){t[e]=0;return t},{});A(e,t,n,r)};A(e,i,n,r)});e.sync=function(t,n,r){var s=j[t];i.defaults(r||(r={}),{emulateHTTP:e.emulateHTTP,emulateJSON:e.emulateJSON});var a={type:s,dataType:"json"};if(!r.url){a.url=i.result(n,"url")||V()}if(r.data==null&&n&&(t==="create"||t==="update"||t==="patch")){a.contentType="application/json";a.data=JSON.stringify(r.attrs||n.toJSON(r))}if(r.emulateJSON){a.contentType="application/x-www-form-urlencoded";a.data=a.data?{model:a.data}:{}}if(r.emulateHTTP&&(s==="PUT"||s==="DELETE"||s==="PATCH")){a.type="POST";if(r.emulateJSON)a.data._method=s;var o=r.beforeSend;r.beforeSend=function(t){t.setRequestHeader("X-HTTP-Method-Override",s);if(o)return o.apply(this,arguments)}}if(a.type!=="GET"&&!r.emulateJSON){a.processData=false}var h=r.error;r.error=function(t,e,i){r.textStatus=e;r.errorThrown=i;if(h)h.call(r.context,t,e,i)};var u=r.xhr=e.ajax(i.extend(a,r));n.trigger("request",n,u,r);return u};var j={create:"POST",update:"PUT",patch:"PATCH","delete":"DELETE",read:"GET"};e.ajax=function(){return e.$.ajax.apply(e.$,arguments)};var O=e.Router=function(t){t||(t={});this.preinitialize.apply(this,arguments);if(t.routes)this.routes=t.routes;this._bindRoutes();this.initialize.apply(this,arguments)};var U=/\((.*?)\)/g;var z=/(\(\?)?:\w+/g;var q=/\*\w+/g;var F=/[\-{}\[\]+?.,\\\^$|#\s]/g;i.extend(O.prototype,a,{preinitialize:function(){},initialize:function(){},route:function(t,n,r){if(!i.isRegExp(t))t=this._routeToRegExp(t);if(i.isFunction(n)){r=n;n=""}if(!r)r=this[n];var s=this;e.history.route(t,function(i){var a=s._extractParameters(t,i);if(s.execute(r,a,n)!==false){s.trigger.apply(s,["route:"+n].concat(a));s.trigger("route",n,a);e.history.trigger("route",s,n,a)}});return this},execute:function(t,e,i){if(t)t.apply(this,e)},navigate:function(t,i){e.history.navigate(t,i);return this},_bindRoutes:function(){if(!this.routes)return;this.routes=i.result(this,"routes");var t,e=i.keys(this.routes);while((t=e.pop())!=null){this.route(t,this.routes[t])}},_routeToRegExp:function(t){t=t.replace(F,"\\$&").replace(U,"(?:$1)?").replace(z,function(t,e){return e?t:"([^/?]+)"}).replace(q,"([^?]*?)");return new RegExp("^"+t+"(?:\\?([\\s\\S]*))?$")},_extractParameters:function(t,e){var n=t.exec(e).slice(1);return i.map(n,function(t,e){if(e===n.length-1)return t||null;return t?decodeURIComponent(t):null})}});var B=e.History=function(){this.handlers=[];this.checkUrl=this.checkUrl.bind(this);if(typeof window!=="undefined"){this.location=window.location;this.history=window.history}};var J=/^[#\/]|\s+$/g;var L=/^\/+|\/+$/g;var W=/#.*$/;B.started=false;i.extend(B.prototype,a,{interval:50,atRoot:function(){var t=this.location.pathname.replace(/[^\/]$/,"$&/");return t===this.root&&!this.getSearch()},matchRoot:function(){var t=this.decodeFragment(this.location.pathname);var e=t.slice(0,this.root.length-1)+"/";return e===this.root},decodeFragment:function(t){return decodeURI(t.replace(/%25/g,"%2525"))},getSearch:function(){var t=this.location.href.replace(/#.*/,"").match(/\?.+/);return t?t[0]:""},getHash:function(t){var e=(t||this).location.href.match(/#(.*)$/);return e?e[1]:""},getPath:function(){var t=this.decodeFragment(this.location.pathname+this.getSearch()).slice(this.root.length-1);return t.charAt(0)==="/"?t.slice(1):t},getFragment:function(t){if(t==null){if(this._usePushState||!this._wantsHashChange){t=this.getPath()}else{t=this.getHash()}}return t.replace(J,"")},start:function(t){if(B.started)throw new Error("Backbone.history has already been started");B.started=true;this.options=i.extend({root:"/"},this.options,t);this.root=this.options.root;this._wantsHashChange=this.options.hashChange!==false;this._hasHashChange="onhashchange"in window&&(document.documentMode===void 0||document.documentMode>7);this._useHashChange=this._wantsHashChange&&this._hasHashChange;this._wantsPushState=!!this.options.pushState;this._hasPushState=!!(this.history&&this.history.pushState);this._usePushState=this._wantsPushState&&this._hasPushState;this.fragment=this.getFragment();this.root=("/"+this.root+"/").replace(L,"/");if(this._wantsHashChange&&this._wantsPushState){if(!this._hasPushState&&!this.atRoot()){var e=this.root.slice(0,-1)||"/";this.location.replace(e+"#"+this.getPath());return true}else if(this._hasPushState&&this.atRoot()){this.navigate(this.getHash(),{replace:true})}}if(!this._hasHashChange&&this._wantsHashChange&&!this._usePushState){this.iframe=document.createElement("iframe");this.iframe.src="javascript:0";this.iframe.style.display="none";this.iframe.tabIndex=-1;var n=document.body;var r=n.insertBefore(this.iframe,n.firstChild).contentWindow;r.document.open();r.document.close();r.location.hash="#"+this.fragment}var s=window.addEventListener||function(t,e){return attachEvent("on"+t,e)};if(this._usePushState){s("popstate",this.checkUrl,false)}else if(this._useHashChange&&!this.iframe){s("hashchange",this.checkUrl,false)}else if(this._wantsHashChange){this._checkUrlInterval=setInterval(this.checkUrl,this.interval)}if(!this.options.silent)return this.loadUrl()},stop:function(){var t=window.removeEventListener||function(t,e){return detachEvent("on"+t,e)};if(this._usePushState){t("popstate",this.checkUrl,false)}else if(this._useHashChange&&!this.iframe){t("hashchange",this.checkUrl,false)}if(this.iframe){document.body.removeChild(this.iframe);this.iframe=null}if(this._checkUrlInterval)clearInterval(this._checkUrlInterval);B.started=false},route:function(t,e){this.handlers.unshift({route:t,callback:e})},checkUrl:function(t){var e=this.getFragment();if(e===this.fragment&&this.iframe){e=this.getHash(this.iframe.contentWindow)}if(e===this.fragment)return false;if(this.iframe)this.navigate(e);this.loadUrl()},loadUrl:function(t){if(!this.matchRoot())return false;t=this.fragment=this.getFragment(t);return i.some(this.handlers,function(e){if(e.route.test(t)){e.callback(t);return true}})},navigate:function(t,e){if(!B.started)return false;if(!e||e===true)e={trigger:!!e};t=this.getFragment(t||"");var i=this.root;if(t===""||t.charAt(0)==="?"){i=i.slice(0,-1)||"/"}var n=i+t;t=t.replace(W,"");var r=this.decodeFragment(t);if(this.fragment===r)return;this.fragment=r;if(this._usePushState){this.history[e.replace?"replaceState":"pushState"]({},document.title,n)}else if(this._wantsHashChange){this._updateHash(this.location,t,e.replace);if(this.iframe&&t!==this.getHash(this.iframe.contentWindow)){var s=this.iframe.contentWindow;if(!e.replace){s.document.open();s.document.close()}this._updateHash(s.location,t,e.replace)}}else{return this.location.assign(n)}if(e.trigger)return this.loadUrl(t)},_updateHash:function(t,e,i){if(i){var n=t.href.replace(/(javascript:|#).*$/,"");t.replace(n+"#"+e)}else{t.hash="#"+e}}});e.history=new B;var D=function(t,e){var n=this;var r;if(t&&i.has(t,"constructor")){r=t.constructor}else{r=function(){return n.apply(this,arguments)}}i.extend(r,n,e);r.prototype=i.create(n.prototype,t);r.prototype.constructor=r;r.__super__=n.prototype;return r};m.extend=_.extend=O.extend=T.extend=B.extend=D;var V=function(){throw new Error('A "url" property or function must be specified')};var G=function(t,e){var i=e.error;e.error=function(n){if(i)i.call(e.context,t,n,e);t.trigger("error",t,n,e)}};return e});

/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function () {
  var settingsElement = document.querySelector('head > script[type="application/json"][data-drupal-selector="drupal-settings-json"], body > script[type="application/json"][data-drupal-selector="drupal-settings-json"]');
  window.drupalSettings = {};

  if (settingsElement !== null) {
    window.drupalSettings = JSON.parse(settingsElement.textContent);
  }
})();;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

window.Drupal = {
  behaviors: {},
  locale: {}
};

(function (Drupal, drupalSettings, drupalTranslations, console, Proxy, Reflect) {
  Drupal.throwError = function (error) {
    setTimeout(function () {
      throw error;
    }, 0);
  };

  Drupal.attachBehaviors = function (context, settings) {
    context = context || document;
    settings = settings || drupalSettings;
    var behaviors = Drupal.behaviors;
    Object.keys(behaviors || {}).forEach(function (i) {
      if (typeof behaviors[i].attach === 'function') {
        try {
          behaviors[i].attach(context, settings);
        } catch (e) {
          Drupal.throwError(e);
        }
      }
    });
  };

  Drupal.detachBehaviors = function (context, settings, trigger) {
    context = context || document;
    settings = settings || drupalSettings;
    trigger = trigger || 'unload';
    var behaviors = Drupal.behaviors;
    Object.keys(behaviors || {}).forEach(function (i) {
      if (typeof behaviors[i].detach === 'function') {
        try {
          behaviors[i].detach(context, settings, trigger);
        } catch (e) {
          Drupal.throwError(e);
        }
      }
    });
  };

  Drupal.checkPlain = function (str) {
    str = str.toString().replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');
    return str;
  };

  Drupal.formatString = function (str, args) {
    var processedArgs = {};
    Object.keys(args || {}).forEach(function (key) {
      switch (key.charAt(0)) {
        case '@':
          processedArgs[key] = Drupal.checkPlain(args[key]);
          break;

        case '!':
          processedArgs[key] = args[key];
          break;

        default:
          processedArgs[key] = Drupal.theme('placeholder', args[key]);
          break;
      }
    });
    return Drupal.stringReplace(str, processedArgs, null);
  };

  Drupal.stringReplace = function (str, args, keys) {
    if (str.length === 0) {
      return str;
    }

    if (!Array.isArray(keys)) {
      keys = Object.keys(args || {});
      keys.sort(function (a, b) {
        return a.length - b.length;
      });
    }

    if (keys.length === 0) {
      return str;
    }

    var key = keys.pop();
    var fragments = str.split(key);

    if (keys.length) {
      for (var i = 0; i < fragments.length; i++) {
        fragments[i] = Drupal.stringReplace(fragments[i], args, keys.slice(0));
      }
    }

    return fragments.join(args[key]);
  };

  Drupal.t = function (str, args, options) {
    options = options || {};
    options.context = options.context || '';

    if (typeof drupalTranslations !== 'undefined' && drupalTranslations.strings && drupalTranslations.strings[options.context] && drupalTranslations.strings[options.context][str]) {
      str = drupalTranslations.strings[options.context][str];
    }

    if (args) {
      str = Drupal.formatString(str, args);
    }

    return str;
  };

  Drupal.url = function (path) {
    return drupalSettings.path.baseUrl + drupalSettings.path.pathPrefix + path;
  };

  Drupal.url.toAbsolute = function (url) {
    var urlParsingNode = document.createElement('a');

    try {
      url = decodeURIComponent(url);
    } catch (e) {}

    urlParsingNode.setAttribute('href', url);
    return urlParsingNode.cloneNode(false).href;
  };

  Drupal.url.isLocal = function (url) {
    var absoluteUrl = Drupal.url.toAbsolute(url);
    var protocol = window.location.protocol;

    if (protocol === 'http:' && absoluteUrl.indexOf('https:') === 0) {
      protocol = 'https:';
    }

    var baseUrl = "".concat(protocol, "//").concat(window.location.host).concat(drupalSettings.path.baseUrl.slice(0, -1));

    try {
      absoluteUrl = decodeURIComponent(absoluteUrl);
    } catch (e) {}

    try {
      baseUrl = decodeURIComponent(baseUrl);
    } catch (e) {}

    return absoluteUrl === baseUrl || absoluteUrl.indexOf("".concat(baseUrl, "/")) === 0;
  };

  Drupal.formatPlural = function (count, singular, plural, args, options) {
    args = args || {};
    args['@count'] = count;
    var pluralDelimiter = drupalSettings.pluralDelimiter;
    var translations = Drupal.t(singular + pluralDelimiter + plural, args, options).split(pluralDelimiter);
    var index = 0;

    if (typeof drupalTranslations !== 'undefined' && drupalTranslations.pluralFormula) {
      index = count in drupalTranslations.pluralFormula ? drupalTranslations.pluralFormula[count] : drupalTranslations.pluralFormula.default;
    } else if (args['@count'] !== 1) {
      index = 1;
    }

    return translations[index];
  };

  Drupal.encodePath = function (item) {
    return window.encodeURIComponent(item).replace(/%2F/g, '/');
  };

  Drupal.deprecationError = function (_ref) {
    var message = _ref.message;

    if (drupalSettings.suppressDeprecationErrors === false && typeof console !== 'undefined' && console.warn) {
      console.warn("[Deprecation] ".concat(message));
    }
  };

  Drupal.deprecatedProperty = function (_ref2) {
    var target = _ref2.target,
        deprecatedProperty = _ref2.deprecatedProperty,
        message = _ref2.message;

    if (!Proxy || !Reflect) {
      return target;
    }

    return new Proxy(target, {
      get: function get(target, key) {
        if (key === deprecatedProperty) {
          Drupal.deprecationError({
            message: message
          });
        }

        for (var _len = arguments.length, rest = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
          rest[_key - 2] = arguments[_key];
        }

        return Reflect.get.apply(Reflect, [target, key].concat(rest));
      }
    });
  };

  Drupal.theme = function (func) {
    if (func in Drupal.theme) {
      var _Drupal$theme;

      for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        args[_key2 - 1] = arguments[_key2];
      }

      return (_Drupal$theme = Drupal.theme)[func].apply(_Drupal$theme, args);
    }
  };

  Drupal.theme.placeholder = function (str) {
    return "<em class=\"placeholder\">".concat(Drupal.checkPlain(str), "</em>");
  };
})(Drupal, window.drupalSettings, window.drupalTranslations, window.console, window.Proxy, window.Reflect);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

if (window.jQuery) {
  jQuery.noConflict();
}

document.documentElement.className += ' js';

(function (Drupal, drupalSettings) {
  var domReady = function domReady(callback) {
    var listener = function listener() {
      callback();
      document.removeEventListener('DOMContentLoaded', listener);
    };

    if (document.readyState !== 'loading') {
      setTimeout(callback, 0);
    } else {
      document.addEventListener('DOMContentLoaded', listener);
    }
  };

  domReady(function () {
    Drupal.attachBehaviors(document, drupalSettings);
  });
})(Drupal, window.drupalSettings);;
/*!
 * jQuery UI :data 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
!function(e){"function"==typeof define&&define.amd?define(["jquery","./version"],e):e(jQuery)}((function(e){return e.extend(e.expr[":"],{data:e.expr.createPseudo?e.expr.createPseudo((function(n){return function(t){return!!e.data(t,n)}})):function(n,t,r){return!!e.data(n,r[3])}})}));;
/*!
 * jQuery UI Disable Selection 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
!function(e){"function"==typeof define&&define.amd?define(["jquery","./version"],e):e(jQuery)}((function(e){return e.fn.extend({disableSelection:(n="onselectstart"in document.createElement("div")?"selectstart":"mousedown",function(){return this.on(n+".ui-disableSelection",(function(e){e.preventDefault()}))}),enableSelection:function(){return this.off(".ui-disableSelection")}});var n}));;
!function(n){"function"==typeof define&&define.amd?define(["jquery","./version"],n):n(jQuery)}((function(n){return n.fn.form=function(){return"string"==typeof this[0].form?this.closest("form"):n(this[0].form)}}));;
/*!
 * jQuery UI Labels 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
!function(e){"function"==typeof define&&define.amd?define(["jquery","./version","./escape-selector"],e):e(jQuery)}((function(e){return e.fn.labels=function(){var t,s,i,n,a;return this[0].labels&&this[0].labels.length?this.pushStack(this[0].labels):(n=this.eq(0).parents("label"),(i=this.attr("id"))&&(a=(t=this.eq(0).parents().last()).add(t.length?t.siblings():this.siblings()),s="label[for='"+e.ui.escapeSelector(i)+"']",n=n.add(a.find(s).addBack(s))),this.pushStack(n))}}));;
/*!
 * jQuery UI Support for jQuery core 1.7.x 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 */
!function(t){"function"==typeof define&&define.amd?define(["jquery","./version"],t):t(jQuery)}((function(t){"1.7"===t.fn.jquery.substring(0,3)&&(t.each(["Width","Height"],(function(n,i){var e="Width"===i?["Left","Right"]:["Top","Bottom"],r=i.toLowerCase(),h={innerWidth:t.fn.innerWidth,innerHeight:t.fn.innerHeight,outerWidth:t.fn.outerWidth,outerHeight:t.fn.outerHeight};function s(n,i,r,h){return t.each(e,(function(){i-=parseFloat(t.css(n,"padding"+this))||0,r&&(i-=parseFloat(t.css(n,"border"+this+"Width"))||0),h&&(i-=parseFloat(t.css(n,"margin"+this))||0)})),i}t.fn["inner"+i]=function(n){return void 0===n?h["inner"+i].call(this):this.each((function(){t(this).css(r,s(this,n)+"px")}))},t.fn["outer"+i]=function(n,e){return"number"!=typeof n?h["outer"+i].call(this,n):this.each((function(){t(this).css(r,s(this,n,!0,e)+"px")}))}})),t.fn.addBack=function(t){return this.add(null==t?this.prevObject:this.prevObject.filter(t))})}));;
/*!
 * jQuery UI Scroll Parent 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
!function(e){"function"==typeof define&&define.amd?define(["jquery","./version"],e):e(jQuery)}((function(e){return e.fn.scrollParent=function(t){var n=this.css("position"),o="absolute"===n,s=t?/(auto|scroll|hidden)/:/(auto|scroll)/,i=this.parents().filter((function(){var t=e(this);return(!o||"static"!==t.css("position"))&&s.test(t.css("overflow")+t.css("overflow-y")+t.css("overflow-x"))})).eq(0);return"fixed"!==n&&i.length?i:e(this[0].ownerDocument||document)}}));;
/*!
 * jQuery UI Tabbable 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
!function(e){"function"==typeof define&&define.amd?define(["jquery","./version","./focusable"],e):e(jQuery)}((function(e){return e.extend(e.expr[":"],{tabbable:function(n){var t=e.attr(n,"tabindex"),u=null!=t;return(!u||t>=0)&&e.ui.focusable(n,u)}})}));;
/*!
 * jQuery UI Unique ID 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
!function(i){"function"==typeof define&&define.amd?define(["jquery","./version"],i):i(jQuery)}((function(i){return i.fn.extend({uniqueId:(n=0,function(){return this.each((function(){this.id||(this.id="ui-id-"+ ++n)}))}),removeUniqueId:function(){return this.each((function(){/^ui-id-\d+$/.test(this.id)&&i(this).removeAttr("id")}))}});var n}));;
!function(e){"function"==typeof define&&define.amd?define(["jquery"],e):e(jQuery)}((function(e){return e.ui=e.ui||{},e.ui.version="1.12.1"}));;
!function(e){"function"==typeof define&&define.amd?define(["jquery","./version"],e):e(jQuery)}((function(e){return e.ui.escapeSelector=(n=/([!"#$%&'()*+,./:;<=>?@[\]^`{|}~])/g,function(e){return e.replace(n,"\\$1")});var n}));;
/*!
 * jQuery UI Focusable 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
!function(e){"function"==typeof define&&define.amd?define(["jquery","./version"],e):e(jQuery)}((function(e){return e.ui.focusable=function(i,t){var n,a,r,s,o,u=i.nodeName.toLowerCase();return"area"===u?(a=(n=i.parentNode).name,!(!i.href||!a||"map"!==n.nodeName.toLowerCase())&&((r=e("img[usemap='#"+a+"']")).length>0&&r.is(":visible"))):(/^(input|select|textarea|button|object)$/.test(u)?(s=!i.disabled)&&(o=e(i).closest("fieldset")[0])&&(s=!o.disabled):s="a"===u&&i.href||t,s&&e(i).is(":visible")&&function(e){var i=e.css("visibility");for(;"inherit"===i;)i=(e=e.parent()).css("visibility");return"hidden"!==i}(e(i)))},e.extend(e.expr[":"],{focusable:function(i){return e.ui.focusable(i,null!=e.attr(i,"tabindex"))}}),e.ui.focusable}));;
/*!
 * jQuery UI Keycode 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
!function(E){"function"==typeof define&&define.amd?define(["jquery","./version"],E):E(jQuery)}((function(E){return E.ui.keyCode={BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38}}));;
!function(n){"function"==typeof define&&define.amd?define(["jquery","./version"],n):n(jQuery)}((function(n){return n.ui.plugin={add:function(e,i,o){var t,u=n.ui[e].prototype;for(t in o)u.plugins[t]=u.plugins[t]||[],u.plugins[t].push([i,o[t]])},call:function(n,e,i,o){var t,u=n.plugins[e];if(u&&(o||n.element[0].parentNode&&11!==n.element[0].parentNode.nodeType))for(t=0;t<u.length;t++)n.options[u[t][0]]&&u[t][1].apply(n.element,i)}}}));;
!function(e){"function"==typeof define&&define.amd?define(["jquery","./version"],e):e(jQuery)}((function(e){return e.ui.safeActiveElement=function(e){var n;try{n=e.activeElement}catch(t){n=e.body}return n||(n=e.body),n.nodeName||(n=e.body),n}}));;
!function(e){"function"==typeof define&&define.amd?define(["jquery","./version"],e):e(jQuery)}((function(e){return e.ui.safeBlur=function(n){n&&"body"!==n.nodeName.toLowerCase()&&e(n).trigger("blur")}}));;
/*!
 * jQuery UI Widget 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
!function(t){"function"==typeof define&&define.amd?define(["jquery","./version"],t):t(jQuery)}((function(t){var e,i=0,s=Array.prototype.slice;return t.cleanData=(e=t.cleanData,function(i){var s,n,o;for(o=0;null!=(n=i[o]);o++)try{(s=t._data(n,"events"))&&s.remove&&t(n).triggerHandler("remove")}catch(t){}e(i)}),t.widget=function(e,i,s){var n,o,a,r={},l=e.split(".")[0],u=l+"-"+(e=e.split(".")[1]);return s||(s=i,i=t.Widget),t.isArray(s)&&(s=t.extend.apply(null,[{}].concat(s))),t.expr[":"][u.toLowerCase()]=function(e){return!!t.data(e,u)},t[l]=t[l]||{},n=t[l][e],o=t[l][e]=function(t,e){if(!this._createWidget)return new o(t,e);arguments.length&&this._createWidget(t,e)},t.extend(o,n,{version:s.version,_proto:t.extend({},s),_childConstructors:[]}),(a=new i).options=t.widget.extend({},a.options),t.each(s,(function(e,s){t.isFunction(s)?r[e]=function(){function t(){return i.prototype[e].apply(this,arguments)}function n(t){return i.prototype[e].apply(this,t)}return function(){var e,i=this._super,o=this._superApply;return this._super=t,this._superApply=n,e=s.apply(this,arguments),this._super=i,this._superApply=o,e}}():r[e]=s})),o.prototype=t.widget.extend(a,{widgetEventPrefix:n&&a.widgetEventPrefix||e},r,{constructor:o,namespace:l,widgetName:e,widgetFullName:u}),n?(t.each(n._childConstructors,(function(e,i){var s=i.prototype;t.widget(s.namespace+"."+s.widgetName,o,i._proto)})),delete n._childConstructors):i._childConstructors.push(o),t.widget.bridge(e,o),o},t.widget.extend=function(e){for(var i,n,o=s.call(arguments,1),a=0,r=o.length;a<r;a++)for(i in o[a])n=o[a][i],o[a].hasOwnProperty(i)&&void 0!==n&&(t.isPlainObject(n)?e[i]=t.isPlainObject(e[i])?t.widget.extend({},e[i],n):t.widget.extend({},n):e[i]=n);return e},t.widget.bridge=function(e,i){var n=i.prototype.widgetFullName||e;t.fn[e]=function(o){var a="string"==typeof o,r=s.call(arguments,1),l=this;return a?this.length||"instance"!==o?this.each((function(){var i,s=t.data(this,n);return"instance"===o?(l=s,!1):s?t.isFunction(s[o])&&"_"!==o.charAt(0)?(i=s[o].apply(s,r))!==s&&void 0!==i?(l=i&&i.jquery?l.pushStack(i.get()):i,!1):void 0:t.error("no such method '"+o+"' for "+e+" widget instance"):t.error("cannot call methods on "+e+" prior to initialization; attempted to call method '"+o+"'")})):l=void 0:(r.length&&(o=t.widget.extend.apply(null,[o].concat(r))),this.each((function(){var e=t.data(this,n);e?(e.option(o||{}),e._init&&e._init()):t.data(this,n,new i(o,this))}))),l}},t.Widget=function(){},t.Widget._childConstructors=[],t.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{classes:{},disabled:!1,create:null},_createWidget:function(e,s){s=t(s||this.defaultElement||this)[0],this.element=t(s),this.uuid=i++,this.eventNamespace="."+this.widgetName+this.uuid,this.bindings=t(),this.hoverable=t(),this.focusable=t(),this.classesElementLookup={},s!==this&&(t.data(s,this.widgetFullName,this),this._on(!0,this.element,{remove:function(t){t.target===s&&this.destroy()}}),this.document=t(s.style?s.ownerDocument:s.document||s),this.window=t(this.document[0].defaultView||this.document[0].parentWindow)),this.options=t.widget.extend({},this.options,this._getCreateOptions(),e),this._create(),this.options.disabled&&this._setOptionDisabled(this.options.disabled),this._trigger("create",null,this._getCreateEventData()),this._init()},_getCreateOptions:function(){return{}},_getCreateEventData:t.noop,_create:t.noop,_init:t.noop,destroy:function(){var e=this;this._destroy(),t.each(this.classesElementLookup,(function(t,i){e._removeClass(i,t)})),this.element.off(this.eventNamespace).removeData(this.widgetFullName),this.widget().off(this.eventNamespace).removeAttr("aria-disabled"),this.bindings.off(this.eventNamespace)},_destroy:t.noop,widget:function(){return this.element},option:function(e,i){var s,n,o,a=e;if(0===arguments.length)return t.widget.extend({},this.options);if("string"==typeof e)if(a={},s=e.split("."),e=s.shift(),s.length){for(n=a[e]=t.widget.extend({},this.options[e]),o=0;o<s.length-1;o++)n[s[o]]=n[s[o]]||{},n=n[s[o]];if(e=s.pop(),1===arguments.length)return void 0===n[e]?null:n[e];n[e]=i}else{if(1===arguments.length)return void 0===this.options[e]?null:this.options[e];a[e]=i}return this._setOptions(a),this},_setOptions:function(t){var e;for(e in t)this._setOption(e,t[e]);return this},_setOption:function(t,e){return"classes"===t&&this._setOptionClasses(e),this.options[t]=e,"disabled"===t&&this._setOptionDisabled(e),this},_setOptionClasses:function(e){var i,s,n;for(i in e)n=this.classesElementLookup[i],e[i]!==this.options.classes[i]&&n&&n.length&&(s=t(n.get()),this._removeClass(n,i),s.addClass(this._classes({element:s,keys:i,classes:e,add:!0})))},_setOptionDisabled:function(t){this._toggleClass(this.widget(),this.widgetFullName+"-disabled",null,!!t),t&&(this._removeClass(this.hoverable,null,"ui-state-hover"),this._removeClass(this.focusable,null,"ui-state-focus"))},enable:function(){return this._setOptions({disabled:!1})},disable:function(){return this._setOptions({disabled:!0})},_classes:function(e){var i=[],s=this;function n(n,o){var a,r;for(r=0;r<n.length;r++)a=s.classesElementLookup[n[r]]||t(),a=e.add?t(t.unique(a.get().concat(e.element.get()))):t(a.not(e.element).get()),s.classesElementLookup[n[r]]=a,i.push(n[r]),o&&e.classes[n[r]]&&i.push(e.classes[n[r]])}return e=t.extend({element:this.element,classes:this.options.classes||{}},e),this._on(e.element,{remove:"_untrackClassesElement"}),e.keys&&n(e.keys.match(/\S+/g)||[],!0),e.extra&&n(e.extra.match(/\S+/g)||[]),i.join(" ")},_untrackClassesElement:function(e){var i=this;t.each(i.classesElementLookup,(function(s,n){-1!==t.inArray(e.target,n)&&(i.classesElementLookup[s]=t(n.not(e.target).get()))}))},_removeClass:function(t,e,i){return this._toggleClass(t,e,i,!1)},_addClass:function(t,e,i){return this._toggleClass(t,e,i,!0)},_toggleClass:function(t,e,i,s){s="boolean"==typeof s?s:i;var n="string"==typeof t||null===t,o={extra:n?e:i,keys:n?t:e,element:n?this.element:t,add:s};return o.element.toggleClass(this._classes(o),s),this},_on:function(e,i,s){var n,o=this;"boolean"!=typeof e&&(s=i,i=e,e=!1),s?(i=n=t(i),this.bindings=this.bindings.add(i)):(s=i,i=this.element,n=this.widget()),t.each(s,(function(s,a){function r(){if(e||!0!==o.options.disabled&&!t(this).hasClass("ui-state-disabled"))return("string"==typeof a?o[a]:a).apply(o,arguments)}"string"!=typeof a&&(r.guid=a.guid=a.guid||r.guid||t.guid++);var l=s.match(/^([\w:-]*)\s*(.*)$/),u=l[1]+o.eventNamespace,h=l[2];h?n.on(u,h,r):i.on(u,r)}))},_off:function(e,i){i=(i||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,e.off(i).off(i),this.bindings=t(this.bindings.not(e).get()),this.focusable=t(this.focusable.not(e).get()),this.hoverable=t(this.hoverable.not(e).get())},_delay:function(t,e){var i=this;return setTimeout((function(){return("string"==typeof t?i[t]:t).apply(i,arguments)}),e||0)},_hoverable:function(e){this.hoverable=this.hoverable.add(e),this._on(e,{mouseenter:function(e){this._addClass(t(e.currentTarget),null,"ui-state-hover")},mouseleave:function(e){this._removeClass(t(e.currentTarget),null,"ui-state-hover")}})},_focusable:function(e){this.focusable=this.focusable.add(e),this._on(e,{focusin:function(e){this._addClass(t(e.currentTarget),null,"ui-state-focus")},focusout:function(e){this._removeClass(t(e.currentTarget),null,"ui-state-focus")}})},_trigger:function(e,i,s){var n,o,a=this.options[e];if(s=s||{},(i=t.Event(i)).type=(e===this.widgetEventPrefix?e:this.widgetEventPrefix+e).toLowerCase(),i.target=this.element[0],o=i.originalEvent)for(n in o)n in i||(i[n]=o[n]);return this.element.trigger(i,s),!(t.isFunction(a)&&!1===a.apply(this.element[0],[i].concat(s))||i.isDefaultPrevented())}},t.each({show:"fadeIn",hide:"fadeOut"},(function(e,i){t.Widget.prototype["_"+e]=function(s,n,o){var a;"string"==typeof n&&(n={effect:n});var r=n?!0===n||"number"==typeof n?i:n.effect||i:e;"number"==typeof(n=n||{})&&(n={duration:n}),a=!t.isEmptyObject(n),n.complete=o,n.delay&&s.delay(n.delay),a&&t.effects&&t.effects.effect[r]?s[e](n):r!==e&&s[r]?s[r](n.duration,n.easing,o):s.queue((function(i){t(this)[e](),o&&o.call(s[0]),i()}))}})),t.widget}));;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, Drupal, drupalSettings, _, Backbone, JSON, storage) {
  var options = $.extend(drupalSettings.contextual, {
    strings: {
      open: Drupal.t('Open'),
      close: Drupal.t('Close')
    }
  });
  var cachedPermissionsHash = storage.getItem('Drupal.contextual.permissionsHash');
  var permissionsHash = drupalSettings.user.permissionsHash;

  if (cachedPermissionsHash !== permissionsHash) {
    if (typeof permissionsHash === 'string') {
      _.chain(storage).keys().each(function (key) {
        if (key.substring(0, 18) === 'Drupal.contextual.') {
          storage.removeItem(key);
        }
      });
    }

    storage.setItem('Drupal.contextual.permissionsHash', permissionsHash);
  }

  function adjustIfNestedAndOverlapping($contextual) {
    var $contextuals = $contextual.parents('.contextual-region').eq(-1).find('.contextual');

    if ($contextuals.length <= 1) {
      return;
    }

    var firstTop = $contextuals.eq(0).offset().top;
    var secondTop = $contextuals.eq(1).offset().top;

    if (firstTop === secondTop) {
      var $nestedContextual = $contextuals.eq(1);
      var height = 0;
      var $trigger = $nestedContextual.find('.trigger');
      $trigger.removeClass('visually-hidden');
      height = $nestedContextual.height();
      $trigger.addClass('visually-hidden');
      $nestedContextual.css({
        top: $nestedContextual.position().top + height
      });
    }
  }

  function initContextual($contextual, html) {
    var $region = $contextual.closest('.contextual-region');
    var contextual = Drupal.contextual;
    $contextual.html(html).addClass('contextual').prepend(Drupal.theme('contextualTrigger'));
    var destination = "destination=".concat(Drupal.encodePath(Drupal.url(drupalSettings.path.currentPath)));
    $contextual.find('.contextual-links a').each(function () {
      var url = this.getAttribute('href');
      var glue = url.indexOf('?') === -1 ? '?' : '&';
      this.setAttribute('href', url + glue + destination);
    });
    var model = new contextual.StateModel({
      title: $region.find('h2').eq(0).text().trim()
    });
    var viewOptions = $.extend({
      el: $contextual,
      model: model
    }, options);
    contextual.views.push({
      visual: new contextual.VisualView(viewOptions),
      aural: new contextual.AuralView(viewOptions),
      keyboard: new contextual.KeyboardView(viewOptions)
    });
    contextual.regionViews.push(new contextual.RegionView($.extend({
      el: $region,
      model: model
    }, options)));
    contextual.collection.add(model);
    $(document).trigger('drupalContextualLinkAdded', {
      $el: $contextual,
      $region: $region,
      model: model
    });
    adjustIfNestedAndOverlapping($contextual);
  }

  Drupal.behaviors.contextual = {
    attach: function attach(context) {
      var $context = $(context);
      var $placeholders = $context.find('[data-contextual-id]').once('contextual-render');

      if ($placeholders.length === 0) {
        return;
      }

      var ids = [];
      $placeholders.each(function () {
        ids.push({
          id: $(this).attr('data-contextual-id'),
          token: $(this).attr('data-contextual-token')
        });
      });
      var uncachedIDs = [];
      var uncachedTokens = [];
      ids.forEach(function (contextualID) {
        var html = storage.getItem("Drupal.contextual.".concat(contextualID.id));

        if (html && html.length) {
          window.setTimeout(function () {
            initContextual($context.find("[data-contextual-id=\"".concat(contextualID.id, "\"]:empty")).eq(0), html);
          });
          return;
        }

        uncachedIDs.push(contextualID.id);
        uncachedTokens.push(contextualID.token);
      });

      if (uncachedIDs.length > 0) {
        $.ajax({
          url: Drupal.url('contextual/render'),
          type: 'POST',
          data: {
            'ids[]': uncachedIDs,
            'tokens[]': uncachedTokens
          },
          dataType: 'json',
          success: function success(results) {
            _.each(results, function (html, contextualID) {
              storage.setItem("Drupal.contextual.".concat(contextualID), html);

              if (html.length > 0) {
                $placeholders = $context.find("[data-contextual-id=\"".concat(contextualID, "\"]"));

                for (var i = 0; i < $placeholders.length; i++) {
                  initContextual($placeholders.eq(i), html);
                }
              }
            });
          }
        });
      }
    }
  };
  Drupal.contextual = {
    views: [],
    regionViews: []
  };
  Drupal.contextual.collection = new Backbone.Collection([], {
    model: Drupal.contextual.StateModel
  });

  Drupal.theme.contextualTrigger = function () {
    return '<button class="trigger visually-hidden focusable" type="button"></button>';
  };

  $(document).on('drupalContextualLinkAdded', function (event, data) {
    Drupal.ajax.bindAjaxLinks(data.$el[0]);
  });
})(jQuery, Drupal, drupalSettings, _, Backbone, window.JSON, window.sessionStorage);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function (Drupal, Backbone) {
  Drupal.contextual.StateModel = Backbone.Model.extend({
    defaults: {
      title: '',
      regionIsHovered: false,
      hasFocus: false,
      isOpen: false,
      isLocked: false
    },
    toggleOpen: function toggleOpen() {
      var newIsOpen = !this.get('isOpen');
      this.set('isOpen', newIsOpen);

      if (newIsOpen) {
        this.focus();
      }

      return this;
    },
    close: function close() {
      this.set('isOpen', false);
      return this;
    },
    focus: function focus() {
      this.set('hasFocus', true);
      var cid = this.cid;
      this.collection.each(function (model) {
        if (model.cid !== cid) {
          model.close().blur();
        }
      });
      return this;
    },
    blur: function blur() {
      if (!this.get('isOpen')) {
        this.set('hasFocus', false);
      }

      return this;
    }
  });
})(Drupal, Backbone);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function (Drupal, Backbone) {
  Drupal.contextual.AuralView = Backbone.View.extend({
    initialize: function initialize(options) {
      this.options = options;
      this.listenTo(this.model, 'change', this.render);
      this.render();
    },
    render: function render() {
      var isOpen = this.model.get('isOpen');
      this.$el.find('.contextual-links').prop('hidden', !isOpen);
      this.$el.find('.trigger').text(Drupal.t('@action @title configuration options', {
        '@action': !isOpen ? this.options.strings.open : this.options.strings.close,
        '@title': this.model.get('title')
      })).attr('aria-pressed', isOpen);
    }
  });
})(Drupal, Backbone);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function (Drupal, Backbone) {
  Drupal.contextual.KeyboardView = Backbone.View.extend({
    events: {
      'focus .trigger': 'focus',
      'focus .contextual-links a': 'focus',
      'blur .trigger': function blurTrigger() {
        this.model.blur();
      },
      'blur .contextual-links a': function blurContextualLinksA() {
        var that = this;
        this.timer = window.setTimeout(function () {
          that.model.close().blur();
        }, 150);
      }
    },
    initialize: function initialize() {
      this.timer = NaN;
    },
    focus: function focus() {
      window.clearTimeout(this.timer);
      this.model.focus();
    }
  });
})(Drupal, Backbone);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function (Drupal, Backbone, Modernizr) {
  Drupal.contextual.RegionView = Backbone.View.extend({
    events: function events() {
      var mapping = {
        mouseenter: function mouseenter() {
          this.model.set('regionIsHovered', true);
        },
        mouseleave: function mouseleave() {
          this.model.close().blur().set('regionIsHovered', false);
        }
      };

      if (Modernizr.touchevents) {
        mapping = {};
      }

      return mapping;
    },
    initialize: function initialize() {
      this.listenTo(this.model, 'change:hasFocus', this.render);
    },
    render: function render() {
      this.$el.toggleClass('focus', this.model.get('hasFocus'));
      return this;
    }
  });
})(Drupal, Backbone, Modernizr);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function (Drupal, Backbone, Modernizr) {
  Drupal.contextual.VisualView = Backbone.View.extend({
    events: function events() {
      var touchEndToClick = function touchEndToClick(event) {
        event.preventDefault();
        event.target.click();
      };

      var mapping = {
        'click .trigger': function clickTrigger() {
          this.model.toggleOpen();
        },
        'touchend .trigger': touchEndToClick,
        'click .contextual-links a': function clickContextualLinksA() {
          this.model.close().blur();
        },
        'touchend .contextual-links a': touchEndToClick
      };

      if (!Modernizr.touchevents) {
        mapping.mouseenter = function () {
          this.model.focus();
        };
      }

      return mapping;
    },
    initialize: function initialize() {
      this.listenTo(this.model, 'change', this.render);
    },
    render: function render() {
      var isOpen = this.model.get('isOpen');
      var isVisible = this.model.get('isLocked') || this.model.get('regionIsHovered') || isOpen;
      this.$el.toggleClass('open', isOpen).find('.trigger').toggleClass('visually-hidden', !isVisible);

      if ('isOpen' in this.model.changed) {
        this.$el.closest('.contextual-region').find('.contextual .trigger:not(:first)').toggle(!isOpen);
      }

      return this;
    }
  });
})(Drupal, Backbone, Modernizr);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, Drupal, drupalSettings) {
  var handleFragmentLinkClickOrHashChange = function handleFragmentLinkClickOrHashChange(e, $target) {
    $target.parents('.vertical-tabs__pane').each(function (index, pane) {
      $(pane).data('verticalTab').focus();
    });
  };

  Drupal.behaviors.verticalTabs = {
    attach: function attach(context) {
      var width = drupalSettings.widthBreakpoint || 640;
      var mq = "(max-width: ".concat(width, "px)");

      if (window.matchMedia(mq).matches) {
        return;
      }

      $('body').once('vertical-tabs-fragments').on('formFragmentLinkClickOrHashChange.verticalTabs', handleFragmentLinkClickOrHashChange);
      $(context).find('[data-vertical-tabs-panes]').once('vertical-tabs').each(function () {
        var $this = $(this).addClass('vertical-tabs__panes');
        var focusID = $this.find(':hidden.vertical-tabs__active-tab').val();
        var tabFocus;
        var $details = $this.find('> details');

        if ($details.length === 0) {
          return;
        }

        var tabList = $('<ul class="vertical-tabs__menu"></ul>');
        $this.wrap('<div class="vertical-tabs clearfix"></div>').before(tabList);
        $details.each(function () {
          var $that = $(this);
          var verticalTab = new Drupal.verticalTab({
            title: $that.find('> summary').text(),
            details: $that
          });
          tabList.append(verticalTab.item);
          $that.removeClass('collapsed').attr('open', true).addClass('vertical-tabs__pane').data('verticalTab', verticalTab);

          if (this.id === focusID) {
            tabFocus = $that;
          }
        });
        $(tabList).find('> li').eq(0).addClass('first');
        $(tabList).find('> li').eq(-1).addClass('last');

        if (!tabFocus) {
          var $locationHash = $this.find(window.location.hash);

          if (window.location.hash && $locationHash.length) {
            tabFocus = $locationHash.closest('.vertical-tabs__pane');
          } else {
            tabFocus = $this.find('> .vertical-tabs__pane').eq(0);
          }
        }

        if (tabFocus.length) {
          tabFocus.data('verticalTab').focus();
        }
      });
    }
  };

  Drupal.verticalTab = function (settings) {
    var self = this;
    $.extend(this, settings, Drupal.theme('verticalTab', settings));
    this.link.attr('href', "#".concat(settings.details.attr('id')));
    this.link.on('click', function (e) {
      e.preventDefault();
      self.focus();
    });
    this.link.on('keydown', function (event) {
      if (event.keyCode === 13) {
        event.preventDefault();
        self.focus();
        $('.vertical-tabs__pane :input:visible:enabled').eq(0).trigger('focus');
      }
    });
    this.details.on('summaryUpdated', function () {
      self.updateSummary();
    }).trigger('summaryUpdated');
  };

  Drupal.verticalTab.prototype = {
    focus: function focus() {
      this.details.siblings('.vertical-tabs__pane').each(function () {
        var tab = $(this).data('verticalTab');
        tab.details.hide();
        tab.item.removeClass('is-selected');
      }).end().show().siblings(':hidden.vertical-tabs__active-tab').val(this.details.attr('id'));
      this.item.addClass('is-selected');
      $('#active-vertical-tab').remove();
      this.link.append("<span id=\"active-vertical-tab\" class=\"visually-hidden\">".concat(Drupal.t('(active tab)'), "</span>"));
    },
    updateSummary: function updateSummary() {
      this.summary.html(this.details.drupalGetSummary());
    },
    tabShow: function tabShow() {
      this.item.show();
      this.item.closest('.js-form-type-vertical-tabs').show();
      this.item.parent().children('.vertical-tabs__menu-item').removeClass('first').filter(':visible').eq(0).addClass('first');
      this.details.removeClass('vertical-tab--hidden').show();
      this.focus();
      return this;
    },
    tabHide: function tabHide() {
      this.item.hide();
      this.item.parent().children('.vertical-tabs__menu-item').removeClass('first').filter(':visible').eq(0).addClass('first');
      this.details.addClass('vertical-tab--hidden').hide();
      var $firstTab = this.details.siblings('.vertical-tabs__pane:not(.vertical-tab--hidden)').eq(0);

      if ($firstTab.length) {
        $firstTab.data('verticalTab').focus();
      } else {
          this.item.closest('.js-form-type-vertical-tabs').hide();
        }

      return this;
    }
  };

  Drupal.theme.verticalTab = function (settings) {
    var tab = {};
    tab.item = $('<li class="vertical-tabs__menu-item" tabindex="-1"></li>').append(tab.link = $('<a href="#"></a>').append(tab.title = $('<strong class="vertical-tabs__menu-item-title"></strong>').text(settings.title)).append(tab.summary = $('<span class="vertical-tabs__menu-item-summary"></span>')));
    return tab;
  };
})(jQuery, Drupal, drupalSettings);;
/*!
 * jQuery UI Position 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/position/
 */
!function(t){"function"==typeof define&&define.amd?define(["jquery","./version"],t):t(jQuery)}((function(t){return function(){var i,o=Math.max,e=Math.abs,n=/left|center|right/,l=/top|center|bottom/,f=/[\+\-]\d+(\.[\d]+)?%?/,s=/^\w+/,h=/%$/,r=t.fn.position;function p(t,i,o){return[parseFloat(t[0])*(h.test(t[0])?i/100:1),parseFloat(t[1])*(h.test(t[1])?o/100:1)]}function c(i,o){return parseInt(t.css(i,o),10)||0}function a(i){var o=i[0];return 9===o.nodeType?{width:i.width(),height:i.height(),offset:{top:0,left:0}}:t.isWindow(o)?{width:i.width(),height:i.height(),offset:{top:i.scrollTop(),left:i.scrollLeft()}}:o.preventDefault?{width:0,height:0,offset:{top:o.pageY,left:o.pageX}}:{width:i.outerWidth(),height:i.outerHeight(),offset:i.offset()}}t.position={scrollbarWidth:function(){if(void 0!==i)return i;var o,e,n=t("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),l=n.children()[0];return t("body").append(n),o=l.offsetWidth,n.css("overflow","scroll"),o===(e=l.offsetWidth)&&(e=n[0].clientWidth),n.remove(),i=o-e},getScrollInfo:function(i){var o=i.isWindow||i.isDocument?"":i.element.css("overflow-x"),e=i.isWindow||i.isDocument?"":i.element.css("overflow-y"),n="scroll"===o||"auto"===o&&i.width<i.element[0].scrollWidth;return{width:"scroll"===e||"auto"===e&&i.height<i.element[0].scrollHeight?t.position.scrollbarWidth():0,height:n?t.position.scrollbarWidth():0}},getWithinInfo:function(i){var o=t(i||window),e=t.isWindow(o[0]),n=!!o[0]&&9===o[0].nodeType;return{element:o,isWindow:e,isDocument:n,offset:!e&&!n?t(i).offset():{left:0,top:0},scrollLeft:o.scrollLeft(),scrollTop:o.scrollTop(),width:o.outerWidth(),height:o.outerHeight()}}},t.fn.position=function(i){if(!i||!i.of)return r.apply(this,arguments);i=t.extend({},i);var h,d,g,u,m,w,W=t(i.of),v=t.position.getWithinInfo(i.within),y=t.position.getScrollInfo(v),H=(i.collision||"flip").split(" "),b={};return w=a(W),W[0].preventDefault&&(i.at="left top"),d=w.width,g=w.height,u=w.offset,m=t.extend({},u),t.each(["my","at"],(function(){var t,o,e=(i[this]||"").split(" ");1===e.length&&(e=n.test(e[0])?e.concat(["center"]):l.test(e[0])?["center"].concat(e):["center","center"]),e[0]=n.test(e[0])?e[0]:"center",e[1]=l.test(e[1])?e[1]:"center",t=f.exec(e[0]),o=f.exec(e[1]),b[this]=[t?t[0]:0,o?o[0]:0],i[this]=[s.exec(e[0])[0],s.exec(e[1])[0]]})),1===H.length&&(H[1]=H[0]),"right"===i.at[0]?m.left+=d:"center"===i.at[0]&&(m.left+=d/2),"bottom"===i.at[1]?m.top+=g:"center"===i.at[1]&&(m.top+=g/2),h=p(b.at,d,g),m.left+=h[0],m.top+=h[1],this.each((function(){var n,l,f=t(this),s=f.outerWidth(),r=f.outerHeight(),a=c(this,"marginLeft"),w=c(this,"marginTop"),x=s+a+c(this,"marginRight")+y.width,T=r+w+c(this,"marginBottom")+y.height,L=t.extend({},m),P=p(b.my,f.outerWidth(),f.outerHeight());"right"===i.my[0]?L.left-=s:"center"===i.my[0]&&(L.left-=s/2),"bottom"===i.my[1]?L.top-=r:"center"===i.my[1]&&(L.top-=r/2),L.left+=P[0],L.top+=P[1],n={marginLeft:a,marginTop:w},t.each(["left","top"],(function(o,e){t.ui.position[H[o]]&&t.ui.position[H[o]][e](L,{targetWidth:d,targetHeight:g,elemWidth:s,elemHeight:r,collisionPosition:n,collisionWidth:x,collisionHeight:T,offset:[h[0]+P[0],h[1]+P[1]],my:i.my,at:i.at,within:v,elem:f})})),i.using&&(l=function(t){var n=u.left-L.left,l=n+d-s,h=u.top-L.top,p=h+g-r,c={target:{element:W,left:u.left,top:u.top,width:d,height:g},element:{element:f,left:L.left,top:L.top,width:s,height:r},horizontal:l<0?"left":n>0?"right":"center",vertical:p<0?"top":h>0?"bottom":"middle"};d<s&&e(n+l)<d&&(c.horizontal="center"),g<r&&e(h+p)<g&&(c.vertical="middle"),o(e(n),e(l))>o(e(h),e(p))?c.important="horizontal":c.important="vertical",i.using.call(this,t,c)}),f.offset(t.extend(L,{using:l}))}))},t.ui.position={fit:{left:function(t,i){var e,n=i.within,l=n.isWindow?n.scrollLeft:n.offset.left,f=n.width,s=t.left-i.collisionPosition.marginLeft,h=l-s,r=s+i.collisionWidth-f-l;i.collisionWidth>f?h>0&&r<=0?(e=t.left+h+i.collisionWidth-f-l,t.left+=h-e):t.left=r>0&&h<=0?l:h>r?l+f-i.collisionWidth:l:h>0?t.left+=h:r>0?t.left-=r:t.left=o(t.left-s,t.left)},top:function(t,i){var e,n=i.within,l=n.isWindow?n.scrollTop:n.offset.top,f=i.within.height,s=t.top-i.collisionPosition.marginTop,h=l-s,r=s+i.collisionHeight-f-l;i.collisionHeight>f?h>0&&r<=0?(e=t.top+h+i.collisionHeight-f-l,t.top+=h-e):t.top=r>0&&h<=0?l:h>r?l+f-i.collisionHeight:l:h>0?t.top+=h:r>0?t.top-=r:t.top=o(t.top-s,t.top)}},flip:{left:function(t,i){var o,n,l=i.within,f=l.offset.left+l.scrollLeft,s=l.width,h=l.isWindow?l.scrollLeft:l.offset.left,r=t.left-i.collisionPosition.marginLeft,p=r-h,c=r+i.collisionWidth-s-h,a="left"===i.my[0]?-i.elemWidth:"right"===i.my[0]?i.elemWidth:0,d="left"===i.at[0]?i.targetWidth:"right"===i.at[0]?-i.targetWidth:0,g=-2*i.offset[0];p<0?((o=t.left+a+d+g+i.collisionWidth-s-f)<0||o<e(p))&&(t.left+=a+d+g):c>0&&((n=t.left-i.collisionPosition.marginLeft+a+d+g-h)>0||e(n)<c)&&(t.left+=a+d+g)},top:function(t,i){var o,n,l=i.within,f=l.offset.top+l.scrollTop,s=l.height,h=l.isWindow?l.scrollTop:l.offset.top,r=t.top-i.collisionPosition.marginTop,p=r-h,c=r+i.collisionHeight-s-h,a="top"===i.my[1]?-i.elemHeight:"bottom"===i.my[1]?i.elemHeight:0,d="top"===i.at[1]?i.targetHeight:"bottom"===i.at[1]?-i.targetHeight:0,g=-2*i.offset[1];p<0?((n=t.top+a+d+g+i.collisionHeight-s-f)<0||n<e(p))&&(t.top+=a+d+g):c>0&&((o=t.top-i.collisionPosition.marginTop+a+d+g-h)>0||e(o)<c)&&(t.top+=a+d+g)}},flipfit:{left:function(){t.ui.position.flip.left.apply(this,arguments),t.ui.position.fit.left.apply(this,arguments)},top:function(){t.ui.position.flip.top.apply(this,arguments),t.ui.position.fit.top.apply(this,arguments)}}}}(),t.ui.position}));;
/*!
 * jQuery UI Menu 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
!function(e){"function"==typeof define&&define.amd?define(["jquery","../keycode","../position","../safe-active-element","../unique-id","../version","../widget"],e):e(jQuery)}((function(e){return e.widget("ui.menu",{version:"1.12.1",defaultElement:"<ul>",delay:300,options:{icons:{submenu:"ui-icon-caret-1-e"},items:"> *",menus:"ul",position:{my:"left top",at:"right top"},role:"menu",blur:null,focus:null,select:null},_create:function(){this.activeMenu=this.element,this.mouseHandled=!1,this.element.uniqueId().attr({role:this.options.role,tabIndex:0}),this._addClass("ui-menu","ui-widget ui-widget-content"),this._on({"mousedown .ui-menu-item":function(e){e.preventDefault()},"click .ui-menu-item":function(t){var i=e(t.target),s=e(e.ui.safeActiveElement(this.document[0]));!this.mouseHandled&&i.not(".ui-state-disabled").length&&(this.select(t),t.isPropagationStopped()||(this.mouseHandled=!0),i.has(".ui-menu").length?this.expand(t):!this.element.is(":focus")&&s.closest(".ui-menu").length&&(this.element.trigger("focus",[!0]),this.active&&1===this.active.parents(".ui-menu").length&&clearTimeout(this.timer)))},"mouseenter .ui-menu-item":function(t){if(!this.previousFilter){var i=e(t.target).closest(".ui-menu-item"),s=e(t.currentTarget);i[0]===s[0]&&(this._removeClass(s.siblings().children(".ui-state-active"),null,"ui-state-active"),this.focus(t,s))}},mouseleave:"collapseAll","mouseleave .ui-menu":"collapseAll",focus:function(e,t){var i=this.active||this.element.find(this.options.items).eq(0);t||this.focus(e,i)},blur:function(t){this._delay((function(){!e.contains(this.element[0],e.ui.safeActiveElement(this.document[0]))&&this.collapseAll(t)}))},keydown:"_keydown"}),this.refresh(),this._on(this.document,{click:function(e){this._closeOnDocumentClick(e)&&this.collapseAll(e),this.mouseHandled=!1}})},_destroy:function(){var t=this.element.find(".ui-menu-item").removeAttr("role aria-disabled").children(".ui-menu-item-wrapper").removeUniqueId().removeAttr("tabIndex role aria-haspopup");this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeAttr("role aria-labelledby aria-expanded aria-hidden aria-disabled tabIndex").removeUniqueId().show(),t.children().each((function(){var t=e(this);t.data("ui-menu-submenu-caret")&&t.remove()}))},_keydown:function(t){var i,s,n,a,u=!0;switch(t.keyCode){case e.ui.keyCode.PAGE_UP:this.previousPage(t);break;case e.ui.keyCode.PAGE_DOWN:this.nextPage(t);break;case e.ui.keyCode.HOME:this._move("first","first",t);break;case e.ui.keyCode.END:this._move("last","last",t);break;case e.ui.keyCode.UP:this.previous(t);break;case e.ui.keyCode.DOWN:this.next(t);break;case e.ui.keyCode.LEFT:this.collapse(t);break;case e.ui.keyCode.RIGHT:this.active&&!this.active.is(".ui-state-disabled")&&this.expand(t);break;case e.ui.keyCode.ENTER:case e.ui.keyCode.SPACE:this._activate(t);break;case e.ui.keyCode.ESCAPE:this.collapse(t);break;default:u=!1,s=this.previousFilter||"",a=!1,n=t.keyCode>=96&&t.keyCode<=105?(t.keyCode-96).toString():String.fromCharCode(t.keyCode),clearTimeout(this.filterTimer),n===s?a=!0:n=s+n,i=this._filterMenuItems(n),(i=a&&-1!==i.index(this.active.next())?this.active.nextAll(".ui-menu-item"):i).length||(n=String.fromCharCode(t.keyCode),i=this._filterMenuItems(n)),i.length?(this.focus(t,i),this.previousFilter=n,this.filterTimer=this._delay((function(){delete this.previousFilter}),1e3)):delete this.previousFilter}u&&t.preventDefault()},_activate:function(e){this.active&&!this.active.is(".ui-state-disabled")&&(this.active.children("[aria-haspopup='true']").length?this.expand(e):this.select(e))},refresh:function(){var t,i,s,n,a=this,u=this.options.icons.submenu,o=this.element.find(this.options.menus);this._toggleClass("ui-menu-icons",null,!!this.element.find(".ui-icon").length),i=o.filter(":not(.ui-menu)").hide().attr({role:this.options.role,"aria-hidden":"true","aria-expanded":"false"}).each((function(){var t=e(this),i=t.prev(),s=e("<span>").data("ui-menu-submenu-caret",!0);a._addClass(s,"ui-menu-icon","ui-icon "+u),i.attr("aria-haspopup","true").prepend(s),t.attr("aria-labelledby",i.attr("id"))})),this._addClass(i,"ui-menu","ui-widget ui-widget-content ui-front"),(t=o.add(this.element).find(this.options.items)).not(".ui-menu-item").each((function(){var t=e(this);a._isDivider(t)&&a._addClass(t,"ui-menu-divider","ui-widget-content")})),n=(s=t.not(".ui-menu-item, .ui-menu-divider")).children().not(".ui-menu").uniqueId().attr({tabIndex:-1,role:this._itemRole()}),this._addClass(s,"ui-menu-item")._addClass(n,"ui-menu-item-wrapper"),t.filter(".ui-state-disabled").attr("aria-disabled","true"),this.active&&!e.contains(this.element[0],this.active[0])&&this.blur()},_itemRole:function(){return{menu:"menuitem",listbox:"option"}[this.options.role]},_setOption:function(e,t){if("icons"===e){var i=this.element.find(".ui-menu-icon");this._removeClass(i,null,this.options.icons.submenu)._addClass(i,null,t.submenu)}this._super(e,t)},_setOptionDisabled:function(e){this._super(e),this.element.attr("aria-disabled",String(e)),this._toggleClass(null,"ui-state-disabled",!!e)},focus:function(e,t){var i,s,n;this.blur(e,e&&"focus"===e.type),this._scrollIntoView(t),this.active=t.first(),s=this.active.children(".ui-menu-item-wrapper"),this._addClass(s,null,"ui-state-active"),this.options.role&&this.element.attr("aria-activedescendant",s.attr("id")),n=this.active.parent().closest(".ui-menu-item").children(".ui-menu-item-wrapper"),this._addClass(n,null,"ui-state-active"),e&&"keydown"===e.type?this._close():this.timer=this._delay((function(){this._close()}),this.delay),(i=t.children(".ui-menu")).length&&e&&/^mouse/.test(e.type)&&this._startOpening(i),this.activeMenu=t.parent(),this._trigger("focus",e,{item:t})},_scrollIntoView:function(t){var i,s,n,a,u,o;this._hasScroll()&&(i=parseFloat(e.css(this.activeMenu[0],"borderTopWidth"))||0,s=parseFloat(e.css(this.activeMenu[0],"paddingTop"))||0,n=t.offset().top-this.activeMenu.offset().top-i-s,a=this.activeMenu.scrollTop(),u=this.activeMenu.height(),o=t.outerHeight(),n<0?this.activeMenu.scrollTop(a+n):n+o>u&&this.activeMenu.scrollTop(a+n-u+o))},blur:function(e,t){t||clearTimeout(this.timer),this.active&&(this._removeClass(this.active.children(".ui-menu-item-wrapper"),null,"ui-state-active"),this._trigger("blur",e,{item:this.active}),this.active=null)},_startOpening:function(e){clearTimeout(this.timer),"true"===e.attr("aria-hidden")&&(this.timer=this._delay((function(){this._close(),this._open(e)}),this.delay))},_open:function(t){var i=e.extend({of:this.active},this.options.position);clearTimeout(this.timer),this.element.find(".ui-menu").not(t.parents(".ui-menu")).hide().attr("aria-hidden","true"),t.show().removeAttr("aria-hidden").attr("aria-expanded","true").position(i)},collapseAll:function(t,i){clearTimeout(this.timer),this.timer=this._delay((function(){var s=i?this.element:e(t&&t.target).closest(this.element.find(".ui-menu"));s.length||(s=this.element),this._close(s),this.blur(t),this._removeClass(s.find(".ui-state-active"),null,"ui-state-active"),this.activeMenu=s}),this.delay)},_close:function(e){e||(e=this.active?this.active.parent():this.element),e.find(".ui-menu").hide().attr("aria-hidden","true").attr("aria-expanded","false")},_closeOnDocumentClick:function(t){return!e(t.target).closest(".ui-menu").length},_isDivider:function(e){return!/[^\-\u2014\u2013\s]/.test(e.text())},collapse:function(e){var t=this.active&&this.active.parent().closest(".ui-menu-item",this.element);t&&t.length&&(this._close(),this.focus(e,t))},expand:function(e){var t=this.active&&this.active.children(".ui-menu ").find(this.options.items).first();t&&t.length&&(this._open(t.parent()),this._delay((function(){this.focus(e,t)})))},next:function(e){this._move("next","first",e)},previous:function(e){this._move("prev","last",e)},isFirstItem:function(){return this.active&&!this.active.prevAll(".ui-menu-item").length},isLastItem:function(){return this.active&&!this.active.nextAll(".ui-menu-item").length},_move:function(e,t,i){var s;this.active&&(s="first"===e||"last"===e?this.active["first"===e?"prevAll":"nextAll"](".ui-menu-item").eq(-1):this.active[e+"All"](".ui-menu-item").eq(0)),s&&s.length&&this.active||(s=this.activeMenu.find(this.options.items)[t]()),this.focus(i,s)},nextPage:function(t){var i,s,n;this.active?this.isLastItem()||(this._hasScroll()?(s=this.active.offset().top,n=this.element.height(),this.active.nextAll(".ui-menu-item").each((function(){return(i=e(this)).offset().top-s-n<0})),this.focus(t,i)):this.focus(t,this.activeMenu.find(this.options.items)[this.active?"last":"first"]())):this.next(t)},previousPage:function(t){var i,s,n;this.active?this.isFirstItem()||(this._hasScroll()?(s=this.active.offset().top,n=this.element.height(),this.active.prevAll(".ui-menu-item").each((function(){return(i=e(this)).offset().top-s+n>0})),this.focus(t,i)):this.focus(t,this.activeMenu.find(this.options.items).first())):this.next(t)},_hasScroll:function(){return this.element.outerHeight()<this.element.prop("scrollHeight")},select:function(t){this.active=this.active||e(t.target).closest(".ui-menu-item");var i={item:this.active};this.active.has(".ui-menu").length||this.collapseAll(t,!0),this._trigger("select",t,i)},_filterMenuItems:function(t){var i=t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&"),s=new RegExp("^"+i,"i");return this.activeMenu.find(this.options.items).filter(".ui-menu-item").filter((function(){return s.test(e.trim(e(this).children(".ui-menu-item-wrapper").text()))}))}})}));;
/*!
 * jQuery UI Autocomplete 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
!function(e){"function"==typeof define&&define.amd?define(["jquery","./menu","../keycode","../position","../safe-active-element","../version","../widget"],e):e(jQuery)}((function(e){return e.widget("ui.autocomplete",{version:"1.12.1",defaultElement:"<input>",options:{appendTo:null,autoFocus:!1,delay:300,minLength:1,position:{my:"left top",at:"left bottom",collision:"none"},source:null,change:null,close:null,focus:null,open:null,response:null,search:null,select:null},requestIndex:0,pending:0,_create:function(){var t,i,s,n=this.element[0].nodeName.toLowerCase(),o="textarea"===n,u="input"===n;this.isMultiLine=o||!u&&this._isContentEditable(this.element),this.valueMethod=this.element[o||u?"val":"text"],this.isNewMenu=!0,this._addClass("ui-autocomplete-input"),this.element.attr("autocomplete","off"),this._on(this.element,{keydown:function(n){if(this.element.prop("readOnly"))return t=!0,s=!0,void(i=!0);t=!1,s=!1,i=!1;var o=e.ui.keyCode;switch(n.keyCode){case o.PAGE_UP:t=!0,this._move("previousPage",n);break;case o.PAGE_DOWN:t=!0,this._move("nextPage",n);break;case o.UP:t=!0,this._keyEvent("previous",n);break;case o.DOWN:t=!0,this._keyEvent("next",n);break;case o.ENTER:this.menu.active&&(t=!0,n.preventDefault(),this.menu.select(n));break;case o.TAB:this.menu.active&&this.menu.select(n);break;case o.ESCAPE:this.menu.element.is(":visible")&&(this.isMultiLine||this._value(this.term),this.close(n),n.preventDefault());break;default:i=!0,this._searchTimeout(n)}},keypress:function(s){if(t)return t=!1,void(this.isMultiLine&&!this.menu.element.is(":visible")||s.preventDefault());if(!i){var n=e.ui.keyCode;switch(s.keyCode){case n.PAGE_UP:this._move("previousPage",s);break;case n.PAGE_DOWN:this._move("nextPage",s);break;case n.UP:this._keyEvent("previous",s);break;case n.DOWN:this._keyEvent("next",s)}}},input:function(e){if(s)return s=!1,void e.preventDefault();this._searchTimeout(e)},focus:function(){this.selectedItem=null,this.previous=this._value()},blur:function(e){this.cancelBlur?delete this.cancelBlur:(clearTimeout(this.searching),this.close(e),this._change(e))}}),this._initSource(),this.menu=e("<ul>").appendTo(this._appendTo()).menu({role:null}).hide().menu("instance"),this._addClass(this.menu.element,"ui-autocomplete","ui-front"),this._on(this.menu.element,{mousedown:function(t){t.preventDefault(),this.cancelBlur=!0,this._delay((function(){delete this.cancelBlur,this.element[0]!==e.ui.safeActiveElement(this.document[0])&&this.element.trigger("focus")}))},menufocus:function(t,i){var s,n;if(this.isNewMenu&&(this.isNewMenu=!1,t.originalEvent&&/^mouse/.test(t.originalEvent.type)))return this.menu.blur(),void this.document.one("mousemove",(function(){e(t.target).trigger(t.originalEvent)}));n=i.item.data("ui-autocomplete-item"),!1!==this._trigger("focus",t,{item:n})&&t.originalEvent&&/^key/.test(t.originalEvent.type)&&this._value(n.value),(s=i.item.attr("aria-label")||n.value)&&e.trim(s).length&&(this.liveRegion.children().hide(),e("<div>").text(s).appendTo(this.liveRegion))},menuselect:function(t,i){var s=i.item.data("ui-autocomplete-item"),n=this.previous;this.element[0]!==e.ui.safeActiveElement(this.document[0])&&(this.element.trigger("focus"),this.previous=n,this._delay((function(){this.previous=n,this.selectedItem=s}))),!1!==this._trigger("select",t,{item:s})&&this._value(s.value),this.term=this._value(),this.close(t),this.selectedItem=s}}),this.liveRegion=e("<div>",{role:"status","aria-live":"assertive","aria-relevant":"additions"}).appendTo(this.document[0].body),this._addClass(this.liveRegion,null,"ui-helper-hidden-accessible"),this._on(this.window,{beforeunload:function(){this.element.removeAttr("autocomplete")}})},_destroy:function(){clearTimeout(this.searching),this.element.removeAttr("autocomplete"),this.menu.element.remove(),this.liveRegion.remove()},_setOption:function(e,t){this._super(e,t),"source"===e&&this._initSource(),"appendTo"===e&&this.menu.element.appendTo(this._appendTo()),"disabled"===e&&t&&this.xhr&&this.xhr.abort()},_isEventTargetInWidget:function(t){var i=this.menu.element[0];return t.target===this.element[0]||t.target===i||e.contains(i,t.target)},_closeOnClickOutside:function(e){this._isEventTargetInWidget(e)||this.close()},_appendTo:function(){var t=this.options.appendTo;return t&&(t=t.jquery||t.nodeType?e(t):this.document.find(t).eq(0)),t&&t[0]||(t=this.element.closest(".ui-front, dialog")),t.length||(t=this.document[0].body),t},_initSource:function(){var t,i,s=this;e.isArray(this.options.source)?(t=this.options.source,this.source=function(i,s){s(e.ui.autocomplete.filter(t,i.term))}):"string"==typeof this.options.source?(i=this.options.source,this.source=function(t,n){s.xhr&&s.xhr.abort(),s.xhr=e.ajax({url:i,data:t,dataType:"json",success:function(e){n(e)},error:function(){n([])}})}):this.source=this.options.source},_searchTimeout:function(e){clearTimeout(this.searching),this.searching=this._delay((function(){var t=this.term===this._value(),i=this.menu.element.is(":visible"),s=e.altKey||e.ctrlKey||e.metaKey||e.shiftKey;t&&(!t||i||s)||(this.selectedItem=null,this.search(null,e))}),this.options.delay)},search:function(e,t){return e=null!=e?e:this._value(),this.term=this._value(),e.length<this.options.minLength?this.close(t):!1!==this._trigger("search",t)?this._search(e):void 0},_search:function(e){this.pending++,this._addClass("ui-autocomplete-loading"),this.cancelSearch=!1,this.source({term:e},this._response())},_response:function(){var t=++this.requestIndex;return e.proxy((function(e){t===this.requestIndex&&this.__response(e),this.pending--,this.pending||this._removeClass("ui-autocomplete-loading")}),this)},__response:function(e){e&&(e=this._normalize(e)),this._trigger("response",null,{content:e}),!this.options.disabled&&e&&e.length&&!this.cancelSearch?(this._suggest(e),this._trigger("open")):this._close()},close:function(e){this.cancelSearch=!0,this._close(e)},_close:function(e){this._off(this.document,"mousedown"),this.menu.element.is(":visible")&&(this.menu.element.hide(),this.menu.blur(),this.isNewMenu=!0,this._trigger("close",e))},_change:function(e){this.previous!==this._value()&&this._trigger("change",e,{item:this.selectedItem})},_normalize:function(t){return t.length&&t[0].label&&t[0].value?t:e.map(t,(function(t){return"string"==typeof t?{label:t,value:t}:e.extend({},t,{label:t.label||t.value,value:t.value||t.label})}))},_suggest:function(t){var i=this.menu.element.empty();this._renderMenu(i,t),this.isNewMenu=!0,this.menu.refresh(),i.show(),this._resizeMenu(),i.position(e.extend({of:this.element},this.options.position)),this.options.autoFocus&&this.menu.next(),this._on(this.document,{mousedown:"_closeOnClickOutside"})},_resizeMenu:function(){var e=this.menu.element;e.outerWidth(Math.max(e.width("").outerWidth()+1,this.element.outerWidth()))},_renderMenu:function(t,i){var s=this;e.each(i,(function(e,i){s._renderItemData(t,i)}))},_renderItemData:function(e,t){return this._renderItem(e,t).data("ui-autocomplete-item",t)},_renderItem:function(t,i){return e("<li>").append(e("<div>").text(i.label)).appendTo(t)},_move:function(e,t){if(this.menu.element.is(":visible"))return this.menu.isFirstItem()&&/^previous/.test(e)||this.menu.isLastItem()&&/^next/.test(e)?(this.isMultiLine||this._value(this.term),void this.menu.blur()):void this.menu[e](t);this.search(null,t)},widget:function(){return this.menu.element},_value:function(){return this.valueMethod.apply(this.element,arguments)},_keyEvent:function(e,t){this.isMultiLine&&!this.menu.element.is(":visible")||(this._move(e,t),t.preventDefault())},_isContentEditable:function(e){if(!e.length)return!1;var t=e.prop("contentEditable");return"inherit"===t?this._isContentEditable(e.parent()):"true"===t}}),e.extend(e.ui.autocomplete,{escapeRegex:function(e){return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")},filter:function(t,i){var s=new RegExp(e.ui.autocomplete.escapeRegex(i),"i");return e.grep(t,(function(e){return s.test(e.label||e.value||e)}))}}),e.widget("ui.autocomplete",e.ui.autocomplete,{options:{messages:{noResults:"No search results.",results:function(e){return e+(e>1?" results are":" result is")+" available, use up and down arrow keys to navigate."}}},__response:function(t){var i;this._superApply(arguments),this.options.disabled||this.cancelSearch||(i=t&&t.length?this.options.messages.results(t.length):this.options.messages.noResults,this.liveRegion.children().hide(),e("<div>").text(i).appendTo(this.liveRegion))}}),e.ui.autocomplete}));;
/**
 * @file
 * JavaScript file for the Coffee module.
 */

(function ($, Drupal, drupalSettings, DrupalCoffee) {

  'use strict';

  // Remap the filter functions for autocomplete to recognise the
  // extra value "command".
  var proto = $.ui.autocomplete.prototype;
  var initSource = proto._initSource;

  function filter(array, term) {
    var matcher = new RegExp($.ui.autocomplete.escapeRegex(term), 'i');
    return $.grep(array, function (value) {
      return matcher.test(value.command) || matcher.test(value.label) || matcher.test(value.value);
    });
  }

  $.extend(proto, {
    _initSource: function () {
      if ($.isArray(this.options.source)) {
        this.source = function (request, response) {
          response(filter(this.options.source, request.term));
        };
      }
      else {
        initSource.call(this);
      }
    }
  });

  /**
   * Coffee module namespace.
   *
   * @namespace
   *
   * @todo put this in Drupal.coffee to expose it.
   */
  DrupalCoffee = DrupalCoffee || {};

  /**
   * Attaches coffee module behaviors.
   *
   * Initializes DOM elements coffee module needs to display the search.
   *
   * @type {Drupal~behavior}
   *
   * @prop {Drupal~behaviorAttach} attach
   *   Attach coffee functionality to the page.
   *
   * @todo get most of it out of the behavior in dedicated functions.
   */
  Drupal.behaviors.coffee = {
    attach: function () {
      $('body').once('coffee').each(function () {
        var body = $(this);
        DrupalCoffee.bg.appendTo(body).hide();
        DrupalCoffee.wrapper.appendTo('body').addClass('hide-form');
        DrupalCoffee.form
          .append(DrupalCoffee.label)
          .append(DrupalCoffee.field)
          .append(DrupalCoffee.results)
          .wrapInner('<div id="coffee-form-inner" />')
          .appendTo(DrupalCoffee.wrapper);

        // Load autocomplete data set, consider implementing
        // caching with local storage.
        DrupalCoffee.dataset = [];
        DrupalCoffee.isItemSelected = false;

        var autocomplete_data_element = 'ui-autocomplete';

        var url = drupalSettings.coffee.dataPath || Drupal.url('admin/coffee/get-data');
        $.ajax({
          url: url,
          dataType: 'json',
          success: function (data) {
            DrupalCoffee.dataset = data;

            // Apply autocomplete plugin on show.
            var $autocomplete = $(DrupalCoffee.field).autocomplete({
              source: DrupalCoffee.dataset,
              focus: function (event, ui) {
                // Prevents replacing the value of the input field.
                DrupalCoffee.isItemSelected = true;
                event.preventDefault();
              },
              change: function (event, ui) {
                DrupalCoffee.isItemSelected = false;
              },
              select: function (event, ui) {
                DrupalCoffee.redirect(ui.item.value, event.metaKey || event.ctrlKey);
                event.preventDefault();
                return false;
              },
              delay: 0,
              appendTo: DrupalCoffee.results
            });

            $autocomplete.data(autocomplete_data_element)._renderItem = function (ul, item) {
              // Strip the basePath when displaying the link description.
              var description = item.value;
              if (item.value.indexOf(drupalSettings.path.basePath) === 0) {
                description = item.value.substring(drupalSettings.path.basePath.length);
              }
              return $('<li></li>')
                .data('item.autocomplete', item)
                .append('<a>' + item.label + '<small class="description">' + description + '</small></a>')
                .appendTo(ul);
            };

            // We want to limit the number of results.
            $(DrupalCoffee.field).data(autocomplete_data_element)._renderMenu = function (ul, items) {
              var self = this;
              items = items.slice(0, drupalSettings.coffee.maxResults);
              $.each(items, function (index, item) {
                self._renderItemData(ul, item);
              });
            };

            DrupalCoffee.form.keydown(function (event) {
              if (event.keyCode === 13) {
                var openInNewWindow = false;

                if (event.metaKey || event.ctrlKey) {
                  openInNewWindow = true;
                }

                if (!DrupalCoffee.isItemSelected) {
                  var $firstItem = $(DrupalCoffee.results).find('li:first').data('item.autocomplete');
                  if (typeof $firstItem === 'object') {
                    DrupalCoffee.redirect($firstItem.value, openInNewWindow);
                    event.preventDefault();
                  }
                }
              }
            });
          },
          error: function () {
            DrupalCoffee.field.val('Could not load data, please refresh the page');
          }
        });

        $('.toolbar-icon-coffee').click(function (event) {
          event.preventDefault();
          DrupalCoffee.coffee_show();
        });
        // Key events.
        $(document).keydown(function (event) {

          // Show the form with alt + D. Use 2 keycodes as 'D' can be uppercase or lowercase.
          if (DrupalCoffee.wrapper.hasClass('hide-form') &&
            event.altKey === true &&
              // 68/206 = d/D, 75 = k.
            (event.keyCode === 68 || event.keyCode === 206 || event.keyCode === 75)) {
            DrupalCoffee.coffee_show();
            event.preventDefault();
          }
          // Close the form with esc or alt + D.
          else {
            if (!DrupalCoffee.wrapper.hasClass('hide-form') && (event.keyCode === 27 || (event.altKey === true && (event.keyCode === 68 || event.keyCode === 206)))) {
              DrupalCoffee.coffee_close();
              event.preventDefault();
            }
          }
        });
      });
    }
  };

  // Prefix the open and close functions to avoid
  // conflicts with autocomplete plugin.
  /**
   * Open the form and focus on the search field.
   */
  DrupalCoffee.coffee_show = function () {
    DrupalCoffee.wrapper.removeClass('hide-form');
    DrupalCoffee.bg.show();
    DrupalCoffee.field.focus();
    $(DrupalCoffee.field).autocomplete({enable: true});
  };

  /**
   * Close the form and destroy all data.
   */
  DrupalCoffee.coffee_close = function () {
    DrupalCoffee.field.val('');
    DrupalCoffee.wrapper.addClass('hide-form');
    DrupalCoffee.bg.hide();
    $(DrupalCoffee.field).autocomplete({enable: false});
  };

  /**
   * Close the Coffee form and redirect.
   *
   * @param {string} path
   *   URL to redirect to.
   * @param {bool} openInNewWindow
   *   Indicates if the URL should be open in a new window.
   */
  DrupalCoffee.redirect = function (path, openInNewWindow) {
    DrupalCoffee.coffee_close();

    if (openInNewWindow) {
      window.open(path);
    }
    else {
      document.location = path;
    }
  };

  /**
   * The HTML elements.
   *
   * @todo use Drupal.theme.
   */
  DrupalCoffee.label = $('<label for="coffee-q" class="hidden" />').text(Drupal.t('Query', '', ''));
  DrupalCoffee.results = $('<div id="coffee-results" />');
  DrupalCoffee.wrapper = $('<div class="coffee-form-wrapper" />');
  DrupalCoffee.form = $('<form id="coffee-form" action="#" />');
  DrupalCoffee.bg = $('<div id="coffee-bg" />').click(function () {
    DrupalCoffee.coffee_close();
  });

  DrupalCoffee.field = $('<input id="coffee-q" type="text" autocomplete="off" />');

})(jQuery, Drupal, drupalSettings);
;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, Drupal) {
  Drupal.theme.progressBar = function (id) {
    return "<div id=\"".concat(id, "\" class=\"progress\" aria-live=\"polite\">") + '<div class="progress__label">&nbsp;</div>' + '<div class="progress__track"><div class="progress__bar"></div></div>' + '<div class="progress__percentage"></div>' + '<div class="progress__description">&nbsp;</div>' + '</div>';
  };

  Drupal.ProgressBar = function (id, updateCallback, method, errorCallback) {
    this.id = id;
    this.method = method || 'GET';
    this.updateCallback = updateCallback;
    this.errorCallback = errorCallback;
    this.element = $(Drupal.theme('progressBar', id));
  };

  $.extend(Drupal.ProgressBar.prototype, {
    setProgress: function setProgress(percentage, message, label) {
      if (percentage >= 0 && percentage <= 100) {
        $(this.element).find('div.progress__bar').css('width', "".concat(percentage, "%"));
        $(this.element).find('div.progress__percentage').html("".concat(percentage, "%"));
      }

      $('div.progress__description', this.element).html(message);
      $('div.progress__label', this.element).html(label);

      if (this.updateCallback) {
        this.updateCallback(percentage, message, this);
      }
    },
    startMonitoring: function startMonitoring(uri, delay) {
      this.delay = delay;
      this.uri = uri;
      this.sendPing();
    },
    stopMonitoring: function stopMonitoring() {
      clearTimeout(this.timer);
      this.uri = null;
    },
    sendPing: function sendPing() {
      if (this.timer) {
        clearTimeout(this.timer);
      }

      if (this.uri) {
        var pb = this;
        var uri = this.uri;

        if (uri.indexOf('?') === -1) {
          uri += '?';
        } else {
          uri += '&';
        }

        uri += '_format=json';
        $.ajax({
          type: this.method,
          url: uri,
          data: '',
          dataType: 'json',
          success: function success(progress) {
            if (progress.status === 0) {
              pb.displayError(progress.data);
              return;
            }

            pb.setProgress(progress.percentage, progress.message, progress.label);
            pb.timer = setTimeout(function () {
              pb.sendPing();
            }, pb.delay);
          },
          error: function error(xmlhttp) {
            var e = new Drupal.AjaxError(xmlhttp, pb.uri);
            pb.displayError("<pre>".concat(e.message, "</pre>"));
          }
        });
      }
    },
    displayError: function displayError(string) {
      var error = $('<div class="messages messages--error"></div>').html(string);
      $(this.element).before(error).hide();

      if (this.errorCallback) {
        this.errorCallback(this);
      }
    }
  });
})(jQuery, Drupal);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

(function ($, window, Drupal, drupalSettings) {
  Drupal.behaviors.AJAX = {
    attach: function attach(context, settings) {
      function loadAjaxBehavior(base) {
        var elementSettings = settings.ajax[base];

        if (typeof elementSettings.selector === 'undefined') {
          elementSettings.selector = "#".concat(base);
        }

        $(elementSettings.selector).once('drupal-ajax').each(function () {
          elementSettings.element = this;
          elementSettings.base = base;
          Drupal.ajax(elementSettings);
        });
      }

      Object.keys(settings.ajax || {}).forEach(function (base) {
        return loadAjaxBehavior(base);
      });
      Drupal.ajax.bindAjaxLinks(document.body);
      $('.use-ajax-submit').once('ajax').each(function () {
        var elementSettings = {};
        elementSettings.url = $(this.form).attr('action');
        elementSettings.setClick = true;
        elementSettings.event = 'click';
        elementSettings.progress = {
          type: 'throbber'
        };
        elementSettings.base = $(this).attr('id');
        elementSettings.element = this;
        Drupal.ajax(elementSettings);
      });
    },
    detach: function detach(context, settings, trigger) {
      if (trigger === 'unload') {
        Drupal.ajax.expired().forEach(function (instance) {
          Drupal.ajax.instances[instance.instanceIndex] = null;
        });
      }
    }
  };

  Drupal.AjaxError = function (xmlhttp, uri, customMessage) {
    var statusCode;
    var statusText;
    var responseText;

    if (xmlhttp.status) {
      statusCode = "\n".concat(Drupal.t('An AJAX HTTP error occurred.'), "\n").concat(Drupal.t('HTTP Result Code: !status', {
        '!status': xmlhttp.status
      }));
    } else {
      statusCode = "\n".concat(Drupal.t('An AJAX HTTP request terminated abnormally.'));
    }

    statusCode += "\n".concat(Drupal.t('Debugging information follows.'));
    var pathText = "\n".concat(Drupal.t('Path: !uri', {
      '!uri': uri
    }));
    statusText = '';

    try {
      statusText = "\n".concat(Drupal.t('StatusText: !statusText', {
        '!statusText': $.trim(xmlhttp.statusText)
      }));
    } catch (e) {}

    responseText = '';

    try {
      responseText = "\n".concat(Drupal.t('ResponseText: !responseText', {
        '!responseText': $.trim(xmlhttp.responseText)
      }));
    } catch (e) {}

    responseText = responseText.replace(/<("[^"]*"|'[^']*'|[^'">])*>/gi, '');
    responseText = responseText.replace(/[\n]+\s+/g, '\n');
    var readyStateText = xmlhttp.status === 0 ? "\n".concat(Drupal.t('ReadyState: !readyState', {
      '!readyState': xmlhttp.readyState
    })) : '';
    customMessage = customMessage ? "\n".concat(Drupal.t('CustomMessage: !customMessage', {
      '!customMessage': customMessage
    })) : '';
    this.message = statusCode + pathText + statusText + customMessage + responseText + readyStateText;
    this.name = 'AjaxError';
  };

  Drupal.AjaxError.prototype = new Error();
  Drupal.AjaxError.prototype.constructor = Drupal.AjaxError;

  Drupal.ajax = function (settings) {
    if (arguments.length !== 1) {
      throw new Error('Drupal.ajax() function must be called with one configuration object only');
    }

    var base = settings.base || false;
    var element = settings.element || false;
    delete settings.base;
    delete settings.element;

    if (!settings.progress && !element) {
      settings.progress = false;
    }

    var ajax = new Drupal.Ajax(base, element, settings);
    ajax.instanceIndex = Drupal.ajax.instances.length;
    Drupal.ajax.instances.push(ajax);
    return ajax;
  };

  Drupal.ajax.instances = [];

  Drupal.ajax.expired = function () {
    return Drupal.ajax.instances.filter(function (instance) {
      return instance && instance.element !== false && !document.body.contains(instance.element);
    });
  };

  Drupal.ajax.bindAjaxLinks = function (element) {
    $(element).find('.use-ajax').once('ajax').each(function (i, ajaxLink) {
      var $linkElement = $(ajaxLink);
      var elementSettings = {
        progress: {
          type: 'throbber'
        },
        dialogType: $linkElement.data('dialog-type'),
        dialog: $linkElement.data('dialog-options'),
        dialogRenderer: $linkElement.data('dialog-renderer'),
        base: $linkElement.attr('id'),
        element: ajaxLink
      };
      var href = $linkElement.attr('href');

      if (href) {
        elementSettings.url = href;
        elementSettings.event = 'click';
      }

      Drupal.ajax(elementSettings);
    });
  };

  Drupal.Ajax = function (base, element, elementSettings) {
    var defaults = {
      event: element ? 'mousedown' : null,
      keypress: true,
      selector: base ? "#".concat(base) : null,
      effect: 'none',
      speed: 'none',
      method: 'replaceWith',
      progress: {
        type: 'throbber',
        message: Drupal.t('Please wait...')
      },
      submit: {
        js: true
      }
    };
    $.extend(this, defaults, elementSettings);
    this.commands = new Drupal.AjaxCommands();
    this.instanceIndex = false;

    if (this.wrapper) {
      this.wrapper = "#".concat(this.wrapper);
    }

    this.element = element;
    this.element_settings = elementSettings;
    this.elementSettings = elementSettings;

    if (this.element && this.element.form) {
      this.$form = $(this.element.form);
    }

    if (!this.url) {
      var $element = $(this.element);

      if ($element.is('a')) {
        this.url = $element.attr('href');
      } else if (this.element && element.form) {
        this.url = this.$form.attr('action');
      }
    }

    var originalUrl = this.url;
    this.url = this.url.replace(/\/nojs(\/|$|\?|#)/, '/ajax$1');

    if (drupalSettings.ajaxTrustedUrl[originalUrl]) {
      drupalSettings.ajaxTrustedUrl[this.url] = true;
    }

    var ajax = this;
    ajax.options = {
      url: ajax.url,
      data: ajax.submit,
      beforeSerialize: function beforeSerialize(elementSettings, options) {
        return ajax.beforeSerialize(elementSettings, options);
      },
      beforeSubmit: function beforeSubmit(formValues, elementSettings, options) {
        ajax.ajaxing = true;
        return ajax.beforeSubmit(formValues, elementSettings, options);
      },
      beforeSend: function beforeSend(xmlhttprequest, options) {
        ajax.ajaxing = true;
        return ajax.beforeSend(xmlhttprequest, options);
      },
      success: function success(response, status, xmlhttprequest) {
        if (typeof response === 'string') {
          response = $.parseJSON(response);
        }

        if (response !== null && !drupalSettings.ajaxTrustedUrl[ajax.url]) {
          if (xmlhttprequest.getResponseHeader('X-Drupal-Ajax-Token') !== '1') {
            var customMessage = Drupal.t('The response failed verification so will not be processed.');
            return ajax.error(xmlhttprequest, ajax.url, customMessage);
          }
        }

        return ajax.success(response, status);
      },
      complete: function complete(xmlhttprequest, status) {
        ajax.ajaxing = false;

        if (status === 'error' || status === 'parsererror') {
          return ajax.error(xmlhttprequest, ajax.url);
        }
      },
      dataType: 'json',
      jsonp: false,
      type: 'POST'
    };

    if (elementSettings.dialog) {
      ajax.options.data.dialogOptions = elementSettings.dialog;
    }

    if (ajax.options.url.indexOf('?') === -1) {
      ajax.options.url += '?';
    } else {
      ajax.options.url += '&';
    }

    var wrapper = "drupal_".concat(elementSettings.dialogType || 'ajax');

    if (elementSettings.dialogRenderer) {
      wrapper += ".".concat(elementSettings.dialogRenderer);
    }

    ajax.options.url += "".concat(Drupal.ajax.WRAPPER_FORMAT, "=").concat(wrapper);
    $(ajax.element).on(elementSettings.event, function (event) {
      if (!drupalSettings.ajaxTrustedUrl[ajax.url] && !Drupal.url.isLocal(ajax.url)) {
        throw new Error(Drupal.t('The callback URL is not local and not trusted: !url', {
          '!url': ajax.url
        }));
      }

      return ajax.eventResponse(this, event);
    });

    if (elementSettings.keypress) {
      $(ajax.element).on('keypress', function (event) {
        return ajax.keypressResponse(this, event);
      });
    }

    if (elementSettings.prevent) {
      $(ajax.element).on(elementSettings.prevent, false);
    }
  };

  Drupal.ajax.WRAPPER_FORMAT = '_wrapper_format';
  Drupal.Ajax.AJAX_REQUEST_PARAMETER = '_drupal_ajax';

  Drupal.Ajax.prototype.execute = function () {
    if (this.ajaxing) {
      return;
    }

    try {
      this.beforeSerialize(this.element, this.options);
      return $.ajax(this.options);
    } catch (e) {
      this.ajaxing = false;
      window.alert("An error occurred while attempting to process ".concat(this.options.url, ": ").concat(e.message));
      return $.Deferred().reject();
    }
  };

  Drupal.Ajax.prototype.keypressResponse = function (element, event) {
    var ajax = this;

    if (event.which === 13 || event.which === 32 && element.type !== 'text' && element.type !== 'textarea' && element.type !== 'tel' && element.type !== 'number') {
      event.preventDefault();
      event.stopPropagation();
      $(element).trigger(ajax.elementSettings.event);
    }
  };

  Drupal.Ajax.prototype.eventResponse = function (element, event) {
    event.preventDefault();
    event.stopPropagation();
    var ajax = this;

    if (ajax.ajaxing) {
      return;
    }

    try {
      if (ajax.$form) {
        if (ajax.setClick) {
          element.form.clk = element;
        }

        ajax.$form.ajaxSubmit(ajax.options);
      } else {
        ajax.beforeSerialize(ajax.element, ajax.options);
        $.ajax(ajax.options);
      }
    } catch (e) {
      ajax.ajaxing = false;
      window.alert("An error occurred while attempting to process ".concat(ajax.options.url, ": ").concat(e.message));
    }
  };

  Drupal.Ajax.prototype.beforeSerialize = function (element, options) {
    if (this.$form && document.body.contains(this.$form.get(0))) {
      var settings = this.settings || drupalSettings;
      Drupal.detachBehaviors(this.$form.get(0), settings, 'serialize');
    }

    options.data[Drupal.Ajax.AJAX_REQUEST_PARAMETER] = 1;
    var pageState = drupalSettings.ajaxPageState;
    options.data['ajax_page_state[theme]'] = pageState.theme;
    options.data['ajax_page_state[theme_token]'] = pageState.theme_token;
    options.data['ajax_page_state[libraries]'] = pageState.libraries;
  };

  Drupal.Ajax.prototype.beforeSubmit = function (formValues, element, options) {};

  Drupal.Ajax.prototype.beforeSend = function (xmlhttprequest, options) {
    if (this.$form) {
      options.extraData = options.extraData || {};
      options.extraData.ajax_iframe_upload = '1';
      var v = $.fieldValue(this.element);

      if (v !== null) {
        options.extraData[this.element.name] = v;
      }
    }

    $(this.element).prop('disabled', true);

    if (!this.progress || !this.progress.type) {
      return;
    }

    var progressIndicatorMethod = "setProgressIndicator".concat(this.progress.type.slice(0, 1).toUpperCase()).concat(this.progress.type.slice(1).toLowerCase());

    if (progressIndicatorMethod in this && typeof this[progressIndicatorMethod] === 'function') {
      this[progressIndicatorMethod].call(this);
    }
  };

  Drupal.theme.ajaxProgressThrobber = function (message) {
    var messageMarkup = typeof message === 'string' ? Drupal.theme('ajaxProgressMessage', message) : '';
    var throbber = '<div class="throbber">&nbsp;</div>';
    return "<div class=\"ajax-progress ajax-progress-throbber\">".concat(throbber).concat(messageMarkup, "</div>");
  };

  Drupal.theme.ajaxProgressIndicatorFullscreen = function () {
    return '<div class="ajax-progress ajax-progress-fullscreen">&nbsp;</div>';
  };

  Drupal.theme.ajaxProgressMessage = function (message) {
    return "<div class=\"message\">".concat(message, "</div>");
  };

  Drupal.theme.ajaxProgressBar = function ($element) {
    return $('<div class="ajax-progress ajax-progress-bar"></div>').append($element);
  };

  Drupal.Ajax.prototype.setProgressIndicatorBar = function () {
    var progressBar = new Drupal.ProgressBar("ajax-progress-".concat(this.element.id), $.noop, this.progress.method, $.noop);

    if (this.progress.message) {
      progressBar.setProgress(-1, this.progress.message);
    }

    if (this.progress.url) {
      progressBar.startMonitoring(this.progress.url, this.progress.interval || 1500);
    }

    this.progress.element = $(Drupal.theme('ajaxProgressBar', progressBar.element));
    this.progress.object = progressBar;
    $(this.element).after(this.progress.element);
  };

  Drupal.Ajax.prototype.setProgressIndicatorThrobber = function () {
    this.progress.element = $(Drupal.theme('ajaxProgressThrobber', this.progress.message));
    $(this.element).after(this.progress.element);
  };

  Drupal.Ajax.prototype.setProgressIndicatorFullscreen = function () {
    this.progress.element = $(Drupal.theme('ajaxProgressIndicatorFullscreen'));
    $('body').append(this.progress.element);
  };

  Drupal.Ajax.prototype.success = function (response, status) {
    var _this = this;

    if (this.progress.element) {
      $(this.progress.element).remove();
    }

    if (this.progress.object) {
      this.progress.object.stopMonitoring();
    }

    $(this.element).prop('disabled', false);
    var elementParents = $(this.element).parents('[data-drupal-selector]').addBack().toArray();
    var focusChanged = false;
    Object.keys(response || {}).forEach(function (i) {
      if (response[i].command && _this.commands[response[i].command]) {
        _this.commands[response[i].command](_this, response[i], status);

        if (response[i].command === 'invoke' && response[i].method === 'focus') {
          focusChanged = true;
        }
      }
    });

    if (!focusChanged && this.element && !$(this.element).data('disable-refocus')) {
      var target = false;

      for (var n = elementParents.length - 1; !target && n >= 0; n--) {
        target = document.querySelector("[data-drupal-selector=\"".concat(elementParents[n].getAttribute('data-drupal-selector'), "\"]"));
      }

      if (target) {
        $(target).trigger('focus');
      }
    }

    if (this.$form && document.body.contains(this.$form.get(0))) {
      var settings = this.settings || drupalSettings;
      Drupal.attachBehaviors(this.$form.get(0), settings);
    }

    this.settings = null;
  };

  Drupal.Ajax.prototype.getEffect = function (response) {
    var type = response.effect || this.effect;
    var speed = response.speed || this.speed;
    var effect = {};

    if (type === 'none') {
      effect.showEffect = 'show';
      effect.hideEffect = 'hide';
      effect.showSpeed = '';
    } else if (type === 'fade') {
      effect.showEffect = 'fadeIn';
      effect.hideEffect = 'fadeOut';
      effect.showSpeed = speed;
    } else {
      effect.showEffect = "".concat(type, "Toggle");
      effect.hideEffect = "".concat(type, "Toggle");
      effect.showSpeed = speed;
    }

    return effect;
  };

  Drupal.Ajax.prototype.error = function (xmlhttprequest, uri, customMessage) {
    if (this.progress.element) {
      $(this.progress.element).remove();
    }

    if (this.progress.object) {
      this.progress.object.stopMonitoring();
    }

    $(this.wrapper).show();
    $(this.element).prop('disabled', false);

    if (this.$form && document.body.contains(this.$form.get(0))) {
      var settings = this.settings || drupalSettings;
      Drupal.attachBehaviors(this.$form.get(0), settings);
    }

    throw new Drupal.AjaxError(xmlhttprequest, uri, customMessage);
  };

  Drupal.theme.ajaxWrapperNewContent = function ($newContent, ajax, response) {
    return (response.effect || ajax.effect) !== 'none' && $newContent.filter(function (i) {
      return !($newContent[i].nodeName === '#comment' || $newContent[i].nodeName === '#text' && /^(\s|\n|\r)*$/.test($newContent[i].textContent));
    }).length > 1 ? Drupal.theme('ajaxWrapperMultipleRootElements', $newContent) : $newContent;
  };

  Drupal.theme.ajaxWrapperMultipleRootElements = function ($elements) {
    return $('<div></div>').append($elements);
  };

  Drupal.AjaxCommands = function () {};

  Drupal.AjaxCommands.prototype = {
    insert: function insert(ajax, response) {
      var $wrapper = response.selector ? $(response.selector) : $(ajax.wrapper);
      var method = response.method || ajax.method;
      var effect = ajax.getEffect(response);
      var settings = response.settings || ajax.settings || drupalSettings;
      var $newContent = $($.parseHTML(response.data, document, true));
      $newContent = Drupal.theme('ajaxWrapperNewContent', $newContent, ajax, response);

      switch (method) {
        case 'html':
        case 'replaceWith':
        case 'replaceAll':
        case 'empty':
        case 'remove':
          Drupal.detachBehaviors($wrapper.get(0), settings);
          break;

        default:
          break;
      }

      $wrapper[method]($newContent);

      if (effect.showEffect !== 'show') {
        $newContent.hide();
      }

      var $ajaxNewContent = $newContent.find('.ajax-new-content');

      if ($ajaxNewContent.length) {
        $ajaxNewContent.hide();
        $newContent.show();
        $ajaxNewContent[effect.showEffect](effect.showSpeed);
      } else if (effect.showEffect !== 'show') {
        $newContent[effect.showEffect](effect.showSpeed);
      }

      if ($newContent.parents('html').length) {
        $newContent.each(function (index, element) {
          if (element.nodeType === Node.ELEMENT_NODE) {
            Drupal.attachBehaviors(element, settings);
          }
        });
      }
    },
    remove: function remove(ajax, response, status) {
      var settings = response.settings || ajax.settings || drupalSettings;
      $(response.selector).each(function () {
        Drupal.detachBehaviors(this, settings);
      }).remove();
    },
    changed: function changed(ajax, response, status) {
      var $element = $(response.selector);

      if (!$element.hasClass('ajax-changed')) {
        $element.addClass('ajax-changed');

        if (response.asterisk) {
          $element.find(response.asterisk).append(" <abbr class=\"ajax-changed\" title=\"".concat(Drupal.t('Changed'), "\">*</abbr> "));
        }
      }
    },
    alert: function alert(ajax, response, status) {
      window.alert(response.text);
    },
    announce: function announce(ajax, response) {
      if (response.priority) {
        Drupal.announce(response.text, response.priority);
      } else {
        Drupal.announce(response.text);
      }
    },
    redirect: function redirect(ajax, response, status) {
      window.location = response.url;
    },
    css: function css(ajax, response, status) {
      $(response.selector).css(response.argument);
    },
    settings: function settings(ajax, response, status) {
      var ajaxSettings = drupalSettings.ajax;

      if (ajaxSettings) {
        Drupal.ajax.expired().forEach(function (instance) {
          if (instance.selector) {
            var selector = instance.selector.replace('#', '');

            if (selector in ajaxSettings) {
              delete ajaxSettings[selector];
            }
          }
        });
      }

      if (response.merge) {
        $.extend(true, drupalSettings, response.settings);
      } else {
        ajax.settings = response.settings;
      }
    },
    data: function data(ajax, response, status) {
      $(response.selector).data(response.name, response.value);
    },
    invoke: function invoke(ajax, response, status) {
      var $element = $(response.selector);
      $element[response.method].apply($element, _toConsumableArray(response.args));
    },
    restripe: function restripe(ajax, response, status) {
      $(response.selector).find('> tbody > tr:visible, > tr:visible').removeClass('odd even').filter(':even').addClass('odd').end().filter(':odd').addClass('even');
    },
    update_build_id: function update_build_id(ajax, response, status) {
      $("input[name=\"form_build_id\"][value=\"".concat(response.old, "\"]")).val(response.new);
    },
    add_css: function add_css(ajax, response, status) {
      $('head').prepend(response.data);
    },
    message: function message(ajax, response) {
      var messages = new Drupal.Message(document.querySelector(response.messageWrapperQuerySelector));

      if (response.clearPrevious) {
        messages.clear();
      }

      messages.add(response.message, response.messageOptions);
    }
  };
})(jQuery, window, Drupal, drupalSettings);;
/*!
 * jQuery Form Plugin
 * version: 4.2.2
 * Requires jQuery v1.7.2 or later
 * Project repository: https://github.com/jquery-form/form

 * Copyright 2017 Kevin Morris
 * Copyright 2006 M. Alsup

 * Dual licensed under the LGPL-2.1+ or MIT licenses
 * https://github.com/jquery-form/form#license

 * This library is free software; you can redistribute it and/or
 * modify it under the terms of the GNU Lesser General Public
 * License as published by the Free Software Foundation; either
 * version 2.1 of the License, or (at your option) any later version.
 * This library is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
 * Lesser General Public License for more details.
 */
!function(e){"function"==typeof define&&define.amd?define(["jquery"],e):"object"==typeof module&&module.exports?module.exports=function(t,r){return void 0===r&&(r="undefined"!=typeof window?require("jquery"):require("jquery")(t)),e(r),r}:e(jQuery)}(function(e){"use strict";function t(t){var r=t.data;t.isDefaultPrevented()||(t.preventDefault(),e(t.target).closest("form").ajaxSubmit(r))}function r(t){var r=t.target,a=e(r);if(!a.is("[type=submit],[type=image]")){var n=a.closest("[type=submit]");if(0===n.length)return;r=n[0]}var i=r.form;if(i.clk=r,"image"===r.type)if(void 0!==t.offsetX)i.clk_x=t.offsetX,i.clk_y=t.offsetY;else if("function"==typeof e.fn.offset){var o=a.offset();i.clk_x=t.pageX-o.left,i.clk_y=t.pageY-o.top}else i.clk_x=t.pageX-r.offsetLeft,i.clk_y=t.pageY-r.offsetTop;setTimeout(function(){i.clk=i.clk_x=i.clk_y=null},100)}function a(){if(e.fn.ajaxSubmit.debug){var t="[jquery.form] "+Array.prototype.join.call(arguments,"");window.console&&window.console.log?window.console.log(t):window.opera&&window.opera.postError&&window.opera.postError(t)}}var n=/\r?\n/g,i={};i.fileapi=void 0!==e('<input type="file">').get(0).files,i.formdata=void 0!==window.FormData;var o=!!e.fn.prop;e.fn.attr2=function(){if(!o)return this.attr.apply(this,arguments);var e=this.prop.apply(this,arguments);return e&&e.jquery||"string"==typeof e?e:this.attr.apply(this,arguments)},e.fn.ajaxSubmit=function(t,r,n,s){function u(r){var a,n,i=e.param(r,t.traditional).split("&"),o=i.length,s=[];for(a=0;a<o;a++)i[a]=i[a].replace(/\+/g," "),n=i[a].split("="),s.push([decodeURIComponent(n[0]),decodeURIComponent(n[1])]);return s}function c(r){function n(e){var t=null;try{e.contentWindow&&(t=e.contentWindow.document)}catch(e){a("cannot get iframe.contentWindow document: "+e)}if(t)return t;try{t=e.contentDocument?e.contentDocument:e.document}catch(r){a("cannot get iframe.contentDocument: "+r),t=e.document}return t}function i(){function t(){try{var e=n(v).readyState;a("state = "+e),e&&"uninitialized"===e.toLowerCase()&&setTimeout(t,50)}catch(e){a("Server abort: ",e," (",e.name,")"),s(L),j&&clearTimeout(j),j=void 0}}var r=p.attr2("target"),i=p.attr2("action"),o=p.attr("enctype")||p.attr("encoding")||"multipart/form-data";w.setAttribute("target",m),l&&!/post/i.test(l)||w.setAttribute("method","POST"),i!==f.url&&w.setAttribute("action",f.url),f.skipEncodingOverride||l&&!/post/i.test(l)||p.attr({encoding:"multipart/form-data",enctype:"multipart/form-data"}),f.timeout&&(j=setTimeout(function(){T=!0,s(A)},f.timeout));var u=[];try{if(f.extraData)for(var c in f.extraData)f.extraData.hasOwnProperty(c)&&(e.isPlainObject(f.extraData[c])&&f.extraData[c].hasOwnProperty("name")&&f.extraData[c].hasOwnProperty("value")?u.push(e('<input type="hidden" name="'+f.extraData[c].name+'">',k).val(f.extraData[c].value).appendTo(w)[0]):u.push(e('<input type="hidden" name="'+c+'">',k).val(f.extraData[c]).appendTo(w)[0]));f.iframeTarget||h.appendTo(D),v.attachEvent?v.attachEvent("onload",s):v.addEventListener("load",s,!1),setTimeout(t,15);try{w.submit()}catch(e){document.createElement("form").submit.apply(w)}}finally{w.setAttribute("action",i),w.setAttribute("enctype",o),r?w.setAttribute("target",r):p.removeAttr("target"),e(u).remove()}}function s(t){if(!x.aborted&&!X){if((O=n(v))||(a("cannot access response document"),t=L),t===A&&x)return x.abort("timeout"),void S.reject(x,"timeout");if(t===L&&x)return x.abort("server abort"),void S.reject(x,"error","server abort");if(O&&O.location.href!==f.iframeSrc||T){v.detachEvent?v.detachEvent("onload",s):v.removeEventListener("load",s,!1);var r,i="success";try{if(T)throw"timeout";var o="xml"===f.dataType||O.XMLDocument||e.isXMLDoc(O);if(a("isXml="+o),!o&&window.opera&&(null===O.body||!O.body.innerHTML)&&--C)return a("requeing onLoad callback, DOM not available"),void setTimeout(s,250);var u=O.body?O.body:O.documentElement;x.responseText=u?u.innerHTML:null,x.responseXML=O.XMLDocument?O.XMLDocument:O,o&&(f.dataType="xml"),x.getResponseHeader=function(e){return{"content-type":f.dataType}[e.toLowerCase()]},u&&(x.status=Number(u.getAttribute("status"))||x.status,x.statusText=u.getAttribute("statusText")||x.statusText);var c=(f.dataType||"").toLowerCase(),l=/(json|script|text)/.test(c);if(l||f.textarea){var p=O.getElementsByTagName("textarea")[0];if(p)x.responseText=p.value,x.status=Number(p.getAttribute("status"))||x.status,x.statusText=p.getAttribute("statusText")||x.statusText;else if(l){var m=O.getElementsByTagName("pre")[0],g=O.getElementsByTagName("body")[0];m?x.responseText=m.textContent?m.textContent:m.innerText:g&&(x.responseText=g.textContent?g.textContent:g.innerText)}}else"xml"===c&&!x.responseXML&&x.responseText&&(x.responseXML=q(x.responseText));try{M=N(x,c,f)}catch(e){i="parsererror",x.error=r=e||i}}catch(e){a("error caught: ",e),i="error",x.error=r=e||i}x.aborted&&(a("upload aborted"),i=null),x.status&&(i=x.status>=200&&x.status<300||304===x.status?"success":"error"),"success"===i?(f.success&&f.success.call(f.context,M,"success",x),S.resolve(x.responseText,"success",x),d&&e.event.trigger("ajaxSuccess",[x,f])):i&&(void 0===r&&(r=x.statusText),f.error&&f.error.call(f.context,x,i,r),S.reject(x,"error",r),d&&e.event.trigger("ajaxError",[x,f,r])),d&&e.event.trigger("ajaxComplete",[x,f]),d&&!--e.active&&e.event.trigger("ajaxStop"),f.complete&&f.complete.call(f.context,x,i),X=!0,f.timeout&&clearTimeout(j),setTimeout(function(){f.iframeTarget?h.attr("src",f.iframeSrc):h.remove(),x.responseXML=null},100)}}}var u,c,f,d,m,h,v,x,y,b,T,j,w=p[0],S=e.Deferred();if(S.abort=function(e){x.abort(e)},r)for(c=0;c<g.length;c++)u=e(g[c]),o?u.prop("disabled",!1):u.removeAttr("disabled");(f=e.extend(!0,{},e.ajaxSettings,t)).context=f.context||f,m="jqFormIO"+(new Date).getTime();var k=w.ownerDocument,D=p.closest("body");if(f.iframeTarget?(b=(h=e(f.iframeTarget,k)).attr2("name"))?m=b:h.attr2("name",m):(h=e('<iframe name="'+m+'" src="'+f.iframeSrc+'" />',k)).css({position:"absolute",top:"-1000px",left:"-1000px"}),v=h[0],x={aborted:0,responseText:null,responseXML:null,status:0,statusText:"n/a",getAllResponseHeaders:function(){},getResponseHeader:function(){},setRequestHeader:function(){},abort:function(t){var r="timeout"===t?"timeout":"aborted";a("aborting upload... "+r),this.aborted=1;try{v.contentWindow.document.execCommand&&v.contentWindow.document.execCommand("Stop")}catch(e){}h.attr("src",f.iframeSrc),x.error=r,f.error&&f.error.call(f.context,x,r,t),d&&e.event.trigger("ajaxError",[x,f,r]),f.complete&&f.complete.call(f.context,x,r)}},(d=f.global)&&0==e.active++&&e.event.trigger("ajaxStart"),d&&e.event.trigger("ajaxSend",[x,f]),f.beforeSend&&!1===f.beforeSend.call(f.context,x,f))return f.global&&e.active--,S.reject(),S;if(x.aborted)return S.reject(),S;(y=w.clk)&&(b=y.name)&&!y.disabled&&(f.extraData=f.extraData||{},f.extraData[b]=y.value,"image"===y.type&&(f.extraData[b+".x"]=w.clk_x,f.extraData[b+".y"]=w.clk_y));var A=1,L=2,F=e("meta[name=csrf-token]").attr("content"),E=e("meta[name=csrf-param]").attr("content");E&&F&&(f.extraData=f.extraData||{},f.extraData[E]=F),f.forceSync?i():setTimeout(i,10);var M,O,X,C=50,q=e.parseXML||function(e,t){return window.ActiveXObject?((t=new ActiveXObject("Microsoft.XMLDOM")).async="false",t.loadXML(e)):t=(new DOMParser).parseFromString(e,"text/xml"),t&&t.documentElement&&"parsererror"!==t.documentElement.nodeName?t:null},_=e.parseJSON||function(e){return window.eval("("+e+")")},N=function(t,r,a){var n=t.getResponseHeader("content-type")||"",i=("xml"===r||!r)&&n.indexOf("xml")>=0,o=i?t.responseXML:t.responseText;return i&&"parsererror"===o.documentElement.nodeName&&e.error&&e.error("parsererror"),a&&a.dataFilter&&(o=a.dataFilter(o,r)),"string"==typeof o&&(("json"===r||!r)&&n.indexOf("json")>=0?o=_(o):("script"===r||!r)&&n.indexOf("javascript")>=0&&e.globalEval(o)),o};return S}if(!this.length)return a("ajaxSubmit: skipping submit process - no element selected"),this;var l,f,d,p=this;"function"==typeof t?t={success:t}:"string"==typeof t||!1===t&&arguments.length>0?(t={url:t,data:r,dataType:n},"function"==typeof s&&(t.success=s)):void 0===t&&(t={}),l=t.method||t.type||this.attr2("method"),(d=(d="string"==typeof(f=t.url||this.attr2("action"))?e.trim(f):"")||window.location.href||"")&&(d=(d.match(/^([^#]+)/)||[])[1]),t=e.extend(!0,{url:d,success:e.ajaxSettings.success,type:l||e.ajaxSettings.type,iframeSrc:/^https/i.test(window.location.href||"")?"javascript:false":"about:blank"},t);var m={};if(this.trigger("form-pre-serialize",[this,t,m]),m.veto)return a("ajaxSubmit: submit vetoed via form-pre-serialize trigger"),this;if(t.beforeSerialize&&!1===t.beforeSerialize(this,t))return a("ajaxSubmit: submit aborted via beforeSerialize callback"),this;var h=t.traditional;void 0===h&&(h=e.ajaxSettings.traditional);var v,g=[],x=this.formToArray(t.semantic,g,t.filtering);if(t.data){var y=e.isFunction(t.data)?t.data(x):t.data;t.extraData=y,v=e.param(y,h)}if(t.beforeSubmit&&!1===t.beforeSubmit(x,this,t))return a("ajaxSubmit: submit aborted via beforeSubmit callback"),this;if(this.trigger("form-submit-validate",[x,this,t,m]),m.veto)return a("ajaxSubmit: submit vetoed via form-submit-validate trigger"),this;var b=e.param(x,h);v&&(b=b?b+"&"+v:v),"GET"===t.type.toUpperCase()?(t.url+=(t.url.indexOf("?")>=0?"&":"?")+b,t.data=null):t.data=b;var T=[];if(t.resetForm&&T.push(function(){p.resetForm()}),t.clearForm&&T.push(function(){p.clearForm(t.includeHidden)}),!t.dataType&&t.target){var j=t.success||function(){};T.push(function(r,a,n){var i=arguments,o=t.replaceTarget?"replaceWith":"html";e(t.target)[o](r).each(function(){j.apply(this,i)})})}else t.success&&(e.isArray(t.success)?e.merge(T,t.success):T.push(t.success));if(t.success=function(e,r,a){for(var n=t.context||this,i=0,o=T.length;i<o;i++)T[i].apply(n,[e,r,a||p,p])},t.error){var w=t.error;t.error=function(e,r,a){var n=t.context||this;w.apply(n,[e,r,a,p])}}if(t.complete){var S=t.complete;t.complete=function(e,r){var a=t.context||this;S.apply(a,[e,r,p])}}var k=e("input[type=file]:enabled",this).filter(function(){return""!==e(this).val()}).length>0,D="multipart/form-data",A=p.attr("enctype")===D||p.attr("encoding")===D,L=i.fileapi&&i.formdata;a("fileAPI :"+L);var F,E=(k||A)&&!L;!1!==t.iframe&&(t.iframe||E)?t.closeKeepAlive?e.get(t.closeKeepAlive,function(){F=c(x)}):F=c(x):F=(k||A)&&L?function(r){for(var a=new FormData,n=0;n<r.length;n++)a.append(r[n].name,r[n].value);if(t.extraData){var i=u(t.extraData);for(n=0;n<i.length;n++)i[n]&&a.append(i[n][0],i[n][1])}t.data=null;var o=e.extend(!0,{},e.ajaxSettings,t,{contentType:!1,processData:!1,cache:!1,type:l||"POST"});t.uploadProgress&&(o.xhr=function(){var r=e.ajaxSettings.xhr();return r.upload&&r.upload.addEventListener("progress",function(e){var r=0,a=e.loaded||e.position,n=e.total;e.lengthComputable&&(r=Math.ceil(a/n*100)),t.uploadProgress(e,a,n,r)},!1),r}),o.data=null;var s=o.beforeSend;return o.beforeSend=function(e,r){t.formData?r.data=t.formData:r.data=a,s&&s.call(this,e,r)},e.ajax(o)}(x):e.ajax(t),p.removeData("jqxhr").data("jqxhr",F);for(var M=0;M<g.length;M++)g[M]=null;return this.trigger("form-submit-notify",[this,t]),this},e.fn.ajaxForm=function(n,i,o,s){if(("string"==typeof n||!1===n&&arguments.length>0)&&(n={url:n,data:i,dataType:o},"function"==typeof s&&(n.success=s)),n=n||{},n.delegation=n.delegation&&e.isFunction(e.fn.on),!n.delegation&&0===this.length){var u={s:this.selector,c:this.context};return!e.isReady&&u.s?(a("DOM not ready, queuing ajaxForm"),e(function(){e(u.s,u.c).ajaxForm(n)}),this):(a("terminating; zero elements found by selector"+(e.isReady?"":" (DOM not ready)")),this)}return n.delegation?(e(document).off("submit.form-plugin",this.selector,t).off("click.form-plugin",this.selector,r).on("submit.form-plugin",this.selector,n,t).on("click.form-plugin",this.selector,n,r),this):this.ajaxFormUnbind().on("submit.form-plugin",n,t).on("click.form-plugin",n,r)},e.fn.ajaxFormUnbind=function(){return this.off("submit.form-plugin click.form-plugin")},e.fn.formToArray=function(t,r,a){var n=[];if(0===this.length)return n;var o,s=this[0],u=this.attr("id"),c=t||void 0===s.elements?s.getElementsByTagName("*"):s.elements;if(c&&(c=e.makeArray(c)),u&&(t||/(Edge|Trident)\//.test(navigator.userAgent))&&(o=e(':input[form="'+u+'"]').get()).length&&(c=(c||[]).concat(o)),!c||!c.length)return n;e.isFunction(a)&&(c=e.map(c,a));var l,f,d,p,m,h,v;for(l=0,h=c.length;l<h;l++)if(m=c[l],(d=m.name)&&!m.disabled)if(t&&s.clk&&"image"===m.type)s.clk===m&&(n.push({name:d,value:e(m).val(),type:m.type}),n.push({name:d+".x",value:s.clk_x},{name:d+".y",value:s.clk_y}));else if((p=e.fieldValue(m,!0))&&p.constructor===Array)for(r&&r.push(m),f=0,v=p.length;f<v;f++)n.push({name:d,value:p[f]});else if(i.fileapi&&"file"===m.type){r&&r.push(m);var g=m.files;if(g.length)for(f=0;f<g.length;f++)n.push({name:d,value:g[f],type:m.type});else n.push({name:d,value:"",type:m.type})}else null!==p&&void 0!==p&&(r&&r.push(m),n.push({name:d,value:p,type:m.type,required:m.required}));if(!t&&s.clk){var x=e(s.clk),y=x[0];(d=y.name)&&!y.disabled&&"image"===y.type&&(n.push({name:d,value:x.val()}),n.push({name:d+".x",value:s.clk_x},{name:d+".y",value:s.clk_y}))}return n},e.fn.formSerialize=function(t){return e.param(this.formToArray(t))},e.fn.fieldSerialize=function(t){var r=[];return this.each(function(){var a=this.name;if(a){var n=e.fieldValue(this,t);if(n&&n.constructor===Array)for(var i=0,o=n.length;i<o;i++)r.push({name:a,value:n[i]});else null!==n&&void 0!==n&&r.push({name:this.name,value:n})}}),e.param(r)},e.fn.fieldValue=function(t){for(var r=[],a=0,n=this.length;a<n;a++){var i=this[a],o=e.fieldValue(i,t);null===o||void 0===o||o.constructor===Array&&!o.length||(o.constructor===Array?e.merge(r,o):r.push(o))}return r},e.fieldValue=function(t,r){var a=t.name,i=t.type,o=t.tagName.toLowerCase();if(void 0===r&&(r=!0),r&&(!a||t.disabled||"reset"===i||"button"===i||("checkbox"===i||"radio"===i)&&!t.checked||("submit"===i||"image"===i)&&t.form&&t.form.clk!==t||"select"===o&&-1===t.selectedIndex))return null;if("select"===o){var s=t.selectedIndex;if(s<0)return null;for(var u=[],c=t.options,l="select-one"===i,f=l?s+1:c.length,d=l?s:0;d<f;d++){var p=c[d];if(p.selected&&!p.disabled){var m=p.value;if(m||(m=p.attributes&&p.attributes.value&&!p.attributes.value.specified?p.text:p.value),l)return m;u.push(m)}}return u}return e(t).val().replace(n,"\r\n")},e.fn.clearForm=function(t){return this.each(function(){e("input,select,textarea",this).clearFields(t)})},e.fn.clearFields=e.fn.clearInputs=function(t){var r=/^(?:color|date|datetime|email|month|number|password|range|search|tel|text|time|url|week)$/i;return this.each(function(){var a=this.type,n=this.tagName.toLowerCase();r.test(a)||"textarea"===n?this.value="":"checkbox"===a||"radio"===a?this.checked=!1:"select"===n?this.selectedIndex=-1:"file"===a?/MSIE/.test(navigator.userAgent)?e(this).replaceWith(e(this).clone(!0)):e(this).val(""):t&&(!0===t&&/hidden/.test(a)||"string"==typeof t&&e(this).is(t))&&(this.value="")})},e.fn.resetForm=function(){return this.each(function(){var t=e(this),r=this.tagName.toLowerCase();switch(r){case"input":this.checked=this.defaultChecked;case"textarea":return this.value=this.defaultValue,!0;case"option":case"optgroup":var a=t.parents("select");return a.length&&a[0].multiple?"option"===r?this.selected=this.defaultSelected:t.find("option").resetForm():a.resetForm(),!0;case"select":return t.find("option").each(function(e){if(this.selected=this.defaultSelected,this.defaultSelected&&!t[0].multiple)return t[0].selectedIndex=e,!1}),!0;case"label":var n=e(t.attr("for")),i=t.find("input,select,textarea");return n[0]&&i.unshift(n[0]),i.resetForm(),!0;case"form":return("function"==typeof this.reset||"object"==typeof this.reset&&!this.reset.nodeType)&&this.reset(),!0;default:return t.find("form,input,label,select,textarea").resetForm(),!0}})},e.fn.enable=function(e){return void 0===e&&(e=!0),this.each(function(){this.disabled=!e})},e.fn.selected=function(t){return void 0===t&&(t=!0),this.each(function(){var r=this.type;if("checkbox"===r||"radio"===r)this.checked=t;else if("option"===this.tagName.toLowerCase()){var a=e(this).parent("select");t&&a[0]&&"select-one"===a[0].type&&a.find("option").selected(!1),this.selected=t}})},e.fn.ajaxSubmit.debug=!1});

;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

Drupal.debounce = function (func, wait, immediate) {
  var timeout;
  var result;
  return function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var context = this;

    var later = function later() {
      timeout = null;

      if (!immediate) {
        result = func.apply(context, args);
      }
    };

    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);

    if (callNow) {
      result = func.apply(context, args);
    }

    return result;
  };
};;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, Drupal, debounce) {
  var offsets = {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };

  function getRawOffset(el, edge) {
    var $el = $(el);
    var documentElement = document.documentElement;
    var displacement = 0;
    var horizontal = edge === 'left' || edge === 'right';
    var placement = $el.offset()[horizontal ? 'left' : 'top'];
    placement -= window["scroll".concat(horizontal ? 'X' : 'Y')] || document.documentElement["scroll".concat(horizontal ? 'Left' : 'Top')] || 0;

    switch (edge) {
      case 'top':
        displacement = placement + $el.outerHeight();
        break;

      case 'left':
        displacement = placement + $el.outerWidth();
        break;

      case 'bottom':
        displacement = documentElement.clientHeight - placement;
        break;

      case 'right':
        displacement = documentElement.clientWidth - placement;
        break;

      default:
        displacement = 0;
    }

    return displacement;
  }

  function calculateOffset(edge) {
    var edgeOffset = 0;
    var displacingElements = document.querySelectorAll("[data-offset-".concat(edge, "]"));
    var n = displacingElements.length;

    for (var i = 0; i < n; i++) {
      var el = displacingElements[i];

      if (el.style.display === 'none') {
        continue;
      }

      var displacement = parseInt(el.getAttribute("data-offset-".concat(edge)), 10);

      if (isNaN(displacement)) {
        displacement = getRawOffset(el, edge);
      }

      edgeOffset = Math.max(edgeOffset, displacement);
    }

    return edgeOffset;
  }

  function calculateOffsets() {
    return {
      top: calculateOffset('top'),
      right: calculateOffset('right'),
      bottom: calculateOffset('bottom'),
      left: calculateOffset('left')
    };
  }

  function displace(broadcast) {
    offsets = calculateOffsets();
    Drupal.displace.offsets = offsets;

    if (typeof broadcast === 'undefined' || broadcast) {
      $(document).trigger('drupalViewportOffsetChange', offsets);
    }

    return offsets;
  }

  Drupal.behaviors.drupalDisplace = {
    attach: function attach() {
      if (this.displaceProcessed) {
        return;
      }

      this.displaceProcessed = true;
      $(window).on('resize.drupalDisplace', debounce(displace, 200));
    }
  };
  Drupal.displace = displace;
  $.extend(Drupal.displace, {
    offsets: offsets,
    calculateOffset: calculateOffset
  });
})(jQuery, Drupal, Drupal.debounce);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, Drupal, debounce) {
  $.fn.drupalGetSummary = function () {
    var callback = this.data('summaryCallback');
    return this[0] && callback ? $.trim(callback(this[0])) : '';
  };

  $.fn.drupalSetSummary = function (callback) {
    var self = this;

    if (typeof callback !== 'function') {
      var val = callback;

      callback = function callback() {
        return val;
      };
    }

    return this.data('summaryCallback', callback).off('formUpdated.summary').on('formUpdated.summary', function () {
      self.trigger('summaryUpdated');
    }).trigger('summaryUpdated');
  };

  Drupal.behaviors.formSingleSubmit = {
    attach: function attach() {
      function onFormSubmit(e) {
        var $form = $(e.currentTarget);
        var formValues = $form.serialize();
        var previousValues = $form.attr('data-drupal-form-submit-last');

        if (previousValues === formValues) {
          e.preventDefault();
        } else {
          $form.attr('data-drupal-form-submit-last', formValues);
        }
      }

      $('body').once('form-single-submit').on('submit.singleSubmit', 'form:not([method~="GET"])', onFormSubmit);
    }
  };

  function triggerFormUpdated(element) {
    $(element).trigger('formUpdated');
  }

  function fieldsList(form) {
    var $fieldList = $(form).find('[name]').map(function (index, element) {
      return element.getAttribute('id');
    });
    return $.makeArray($fieldList);
  }

  Drupal.behaviors.formUpdated = {
    attach: function attach(context) {
      var $context = $(context);
      var contextIsForm = $context.is('form');
      var $forms = (contextIsForm ? $context : $context.find('form')).once('form-updated');
      var formFields;

      if ($forms.length) {
        $.makeArray($forms).forEach(function (form) {
          var events = 'change.formUpdated input.formUpdated ';
          var eventHandler = debounce(function (event) {
            triggerFormUpdated(event.target);
          }, 300);
          formFields = fieldsList(form).join(',');
          form.setAttribute('data-drupal-form-fields', formFields);
          $(form).on(events, eventHandler);
        });
      }

      if (contextIsForm) {
        formFields = fieldsList(context).join(',');
        var currentFields = $(context).attr('data-drupal-form-fields');

        if (formFields !== currentFields) {
          triggerFormUpdated(context);
        }
      }
    },
    detach: function detach(context, settings, trigger) {
      var $context = $(context);
      var contextIsForm = $context.is('form');

      if (trigger === 'unload') {
        var $forms = (contextIsForm ? $context : $context.find('form')).removeOnce('form-updated');

        if ($forms.length) {
          $.makeArray($forms).forEach(function (form) {
            form.removeAttribute('data-drupal-form-fields');
            $(form).off('.formUpdated');
          });
        }
      }
    }
  };
  Drupal.behaviors.fillUserInfoFromBrowser = {
    attach: function attach(context, settings) {
      var userInfo = ['name', 'mail', 'homepage'];
      var $forms = $('[data-user-info-from-browser]').once('user-info-from-browser');

      if ($forms.length) {
        userInfo.forEach(function (info) {
          var $element = $forms.find("[name=".concat(info, "]"));
          var browserData = localStorage.getItem("Drupal.visitor.".concat(info));
          var emptyOrDefault = $element.val() === '' || $element.attr('data-drupal-default-value') === $element.val();

          if ($element.length && emptyOrDefault && browserData) {
            $element.val(browserData);
          }
        });
      }

      $forms.on('submit', function () {
        userInfo.forEach(function (info) {
          var $element = $forms.find("[name=".concat(info, "]"));

          if ($element.length) {
            localStorage.setItem("Drupal.visitor.".concat(info), $element.val());
          }
        });
      });
    }
  };

  var handleFragmentLinkClickOrHashChange = function handleFragmentLinkClickOrHashChange(e) {
    var url;

    if (e.type === 'click') {
      url = e.currentTarget.location ? e.currentTarget.location : e.currentTarget;
    } else {
      url = window.location;
    }

    var hash = url.hash.substr(1);

    if (hash) {
      var $target = $("#".concat(hash));
      $('body').trigger('formFragmentLinkClickOrHashChange', [$target]);
      setTimeout(function () {
        return $target.trigger('focus');
      }, 300);
    }
  };

  var debouncedHandleFragmentLinkClickOrHashChange = debounce(handleFragmentLinkClickOrHashChange, 300, true);
  $(window).on('hashchange.form-fragment', debouncedHandleFragmentLinkClickOrHashChange);
  $(document).on('click.form-fragment', 'a[href*="#"]', debouncedHandleFragmentLinkClickOrHashChange);
})(jQuery, Drupal, Drupal.debounce);;
!function(e){"function"==typeof define&&define.amd?define(["jquery","./version"],e):e(jQuery)}((function(e){return e.ui.ie=!!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase())}));;
/*!
 * jQuery UI Mouse 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
!function(e){"function"==typeof define&&define.amd?define(["jquery","../ie","../version","../widget"],e):e(jQuery)}((function(e){var t=!1;return e(document).on("mouseup",(function(){t=!1})),e.widget("ui.mouse",{version:"1.12.1",options:{cancel:"input, textarea, button, select, option",distance:1,delay:0},_mouseInit:function(){var t=this;this.element.on("mousedown."+this.widgetName,(function(e){return t._mouseDown(e)})).on("click."+this.widgetName,(function(i){if(!0===e.data(i.target,t.widgetName+".preventClickEvent"))return e.removeData(i.target,t.widgetName+".preventClickEvent"),i.stopImmediatePropagation(),!1})),this.started=!1},_mouseDestroy:function(){this.element.off("."+this.widgetName),this._mouseMoveDelegate&&this.document.off("mousemove."+this.widgetName,this._mouseMoveDelegate).off("mouseup."+this.widgetName,this._mouseUpDelegate)},_mouseDown:function(i){if(!t){this._mouseMoved=!1,this._mouseStarted&&this._mouseUp(i),this._mouseDownEvent=i;var s=this,o=1===i.which,n=!("string"!=typeof this.options.cancel||!i.target.nodeName)&&e(i.target).closest(this.options.cancel).length;return!(o&&!n&&this._mouseCapture(i))||(this.mouseDelayMet=!this.options.delay,this.mouseDelayMet||(this._mouseDelayTimer=setTimeout((function(){s.mouseDelayMet=!0}),this.options.delay)),this._mouseDistanceMet(i)&&this._mouseDelayMet(i)&&(this._mouseStarted=!1!==this._mouseStart(i),!this._mouseStarted)?(i.preventDefault(),!0):(!0===e.data(i.target,this.widgetName+".preventClickEvent")&&e.removeData(i.target,this.widgetName+".preventClickEvent"),this._mouseMoveDelegate=function(e){return s._mouseMove(e)},this._mouseUpDelegate=function(e){return s._mouseUp(e)},this.document.on("mousemove."+this.widgetName,this._mouseMoveDelegate).on("mouseup."+this.widgetName,this._mouseUpDelegate),i.preventDefault(),t=!0,!0))}},_mouseMove:function(t){if(this._mouseMoved){if(e.ui.ie&&(!document.documentMode||document.documentMode<9)&&!t.button)return this._mouseUp(t);if(!t.which)if(t.originalEvent.altKey||t.originalEvent.ctrlKey||t.originalEvent.metaKey||t.originalEvent.shiftKey)this.ignoreMissingWhich=!0;else if(!this.ignoreMissingWhich)return this._mouseUp(t)}return(t.which||t.button)&&(this._mouseMoved=!0),this._mouseStarted?(this._mouseDrag(t),t.preventDefault()):(this._mouseDistanceMet(t)&&this._mouseDelayMet(t)&&(this._mouseStarted=!1!==this._mouseStart(this._mouseDownEvent,t),this._mouseStarted?this._mouseDrag(t):this._mouseUp(t)),!this._mouseStarted)},_mouseUp:function(i){this.document.off("mousemove."+this.widgetName,this._mouseMoveDelegate).off("mouseup."+this.widgetName,this._mouseUpDelegate),this._mouseStarted&&(this._mouseStarted=!1,i.target===this._mouseDownEvent.target&&e.data(i.target,this.widgetName+".preventClickEvent",!0),this._mouseStop(i)),this._mouseDelayTimer&&(clearTimeout(this._mouseDelayTimer),delete this._mouseDelayTimer),this.ignoreMissingWhich=!1,t=!1,i.preventDefault()},_mouseDistanceMet:function(e){return Math.max(Math.abs(this._mouseDownEvent.pageX-e.pageX),Math.abs(this._mouseDownEvent.pageY-e.pageY))>=this.options.distance},_mouseDelayMet:function(){return this.mouseDelayMet},_mouseStart:function(){},_mouseDrag:function(){},_mouseStop:function(){},_mouseCapture:function(){return!0}})}));;
/*!
 * jQuery UI Draggable 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
!function(t){"function"==typeof define&&define.amd?define(["jquery","./mouse","../data","../plugin","../safe-active-element","../safe-blur","../scroll-parent","../version","../widget"],t):t(jQuery)}((function(t){return t.widget("ui.draggable",t.ui.mouse,{version:"1.12.1",widgetEventPrefix:"drag",options:{addClasses:!0,appendTo:"parent",axis:!1,connectToSortable:!1,containment:!1,cursor:"auto",cursorAt:!1,grid:!1,handle:!1,helper:"original",iframeFix:!1,opacity:!1,refreshPositions:!1,revert:!1,revertDuration:500,scope:"default",scroll:!0,scrollSensitivity:20,scrollSpeed:20,snap:!1,snapMode:"both",snapTolerance:20,stack:!1,zIndex:!1,drag:null,start:null,stop:null},_create:function(){"original"===this.options.helper&&this._setPositionRelative(),this.options.addClasses&&this._addClass("ui-draggable"),this._setHandleClassName(),this._mouseInit()},_setOption:function(t,e){this._super(t,e),"handle"===t&&(this._removeHandleClassName(),this._setHandleClassName())},_destroy:function(){(this.helper||this.element).is(".ui-draggable-dragging")?this.destroyOnClear=!0:(this._removeHandleClassName(),this._mouseDestroy())},_mouseCapture:function(e){var s=this.options;return!(this.helper||s.disabled||t(e.target).closest(".ui-resizable-handle").length>0)&&(this.handle=this._getHandle(e),!!this.handle&&(this._blurActiveElement(e),this._blockFrames(!0===s.iframeFix?"iframe":s.iframeFix),!0))},_blockFrames:function(e){this.iframeBlocks=this.document.find(e).map((function(){var e=t(this);return t("<div>").css("position","absolute").appendTo(e.parent()).outerWidth(e.outerWidth()).outerHeight(e.outerHeight()).offset(e.offset())[0]}))},_unblockFrames:function(){this.iframeBlocks&&(this.iframeBlocks.remove(),delete this.iframeBlocks)},_blurActiveElement:function(e){var s=t.ui.safeActiveElement(this.document[0]);t(e.target).closest(s).length||t.ui.safeBlur(s)},_mouseStart:function(e){var s=this.options;return this.helper=this._createHelper(e),this._addClass(this.helper,"ui-draggable-dragging"),this._cacheHelperProportions(),t.ui.ddmanager&&(t.ui.ddmanager.current=this),this._cacheMargins(),this.cssPosition=this.helper.css("position"),this.scrollParent=this.helper.scrollParent(!0),this.offsetParent=this.helper.offsetParent(),this.hasFixedAncestor=this.helper.parents().filter((function(){return"fixed"===t(this).css("position")})).length>0,this.positionAbs=this.element.offset(),this._refreshOffsets(e),this.originalPosition=this.position=this._generatePosition(e,!1),this.originalPageX=e.pageX,this.originalPageY=e.pageY,s.cursorAt&&this._adjustOffsetFromHelper(s.cursorAt),this._setContainment(),!1===this._trigger("start",e)?(this._clear(),!1):(this._cacheHelperProportions(),t.ui.ddmanager&&!s.dropBehaviour&&t.ui.ddmanager.prepareOffsets(this,e),this._mouseDrag(e,!0),t.ui.ddmanager&&t.ui.ddmanager.dragStart(this,e),!0)},_refreshOffsets:function(t){this.offset={top:this.positionAbs.top-this.margins.top,left:this.positionAbs.left-this.margins.left,scroll:!1,parent:this._getParentOffset(),relative:this._getRelativeOffset()},this.offset.click={left:t.pageX-this.offset.left,top:t.pageY-this.offset.top}},_mouseDrag:function(e,s){if(this.hasFixedAncestor&&(this.offset.parent=this._getParentOffset()),this.position=this._generatePosition(e,!0),this.positionAbs=this._convertPositionTo("absolute"),!s){var i=this._uiHash();if(!1===this._trigger("drag",e,i))return this._mouseUp(new t.Event("mouseup",e)),!1;this.position=i.position}return this.helper[0].style.left=this.position.left+"px",this.helper[0].style.top=this.position.top+"px",t.ui.ddmanager&&t.ui.ddmanager.drag(this,e),!1},_mouseStop:function(e){var s=this,i=!1;return t.ui.ddmanager&&!this.options.dropBehaviour&&(i=t.ui.ddmanager.drop(this,e)),this.dropped&&(i=this.dropped,this.dropped=!1),"invalid"===this.options.revert&&!i||"valid"===this.options.revert&&i||!0===this.options.revert||t.isFunction(this.options.revert)&&this.options.revert.call(this.element,i)?t(this.helper).animate(this.originalPosition,parseInt(this.options.revertDuration,10),(function(){!1!==s._trigger("stop",e)&&s._clear()})):!1!==this._trigger("stop",e)&&this._clear(),!1},_mouseUp:function(e){return this._unblockFrames(),t.ui.ddmanager&&t.ui.ddmanager.dragStop(this,e),this.handleElement.is(e.target)&&this.element.trigger("focus"),t.ui.mouse.prototype._mouseUp.call(this,e)},cancel:function(){return this.helper.is(".ui-draggable-dragging")?this._mouseUp(new t.Event("mouseup",{target:this.element[0]})):this._clear(),this},_getHandle:function(e){return!this.options.handle||!!t(e.target).closest(this.element.find(this.options.handle)).length},_setHandleClassName:function(){this.handleElement=this.options.handle?this.element.find(this.options.handle):this.element,this._addClass(this.handleElement,"ui-draggable-handle")},_removeHandleClassName:function(){this._removeClass(this.handleElement,"ui-draggable-handle")},_createHelper:function(e){var s=this.options,i=t.isFunction(s.helper),o=i?t(s.helper.apply(this.element[0],[e])):"clone"===s.helper?this.element.clone().removeAttr("id"):this.element;return o.parents("body").length||o.appendTo("parent"===s.appendTo?this.element[0].parentNode:s.appendTo),i&&o[0]===this.element[0]&&this._setPositionRelative(),o[0]===this.element[0]||/(fixed|absolute)/.test(o.css("position"))||o.css("position","absolute"),o},_setPositionRelative:function(){/^(?:r|a|f)/.test(this.element.css("position"))||(this.element[0].style.position="relative")},_adjustOffsetFromHelper:function(e){"string"==typeof e&&(e=e.split(" ")),t.isArray(e)&&(e={left:+e[0],top:+e[1]||0}),"left"in e&&(this.offset.click.left=e.left+this.margins.left),"right"in e&&(this.offset.click.left=this.helperProportions.width-e.right+this.margins.left),"top"in e&&(this.offset.click.top=e.top+this.margins.top),"bottom"in e&&(this.offset.click.top=this.helperProportions.height-e.bottom+this.margins.top)},_isRootNode:function(t){return/(html|body)/i.test(t.tagName)||t===this.document[0]},_getParentOffset:function(){var e=this.offsetParent.offset(),s=this.document[0];return"absolute"===this.cssPosition&&this.scrollParent[0]!==s&&t.contains(this.scrollParent[0],this.offsetParent[0])&&(e.left+=this.scrollParent.scrollLeft(),e.top+=this.scrollParent.scrollTop()),this._isRootNode(this.offsetParent[0])&&(e={top:0,left:0}),{top:e.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:e.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if("relative"!==this.cssPosition)return{top:0,left:0};var t=this.element.position(),e=this._isRootNode(this.scrollParent[0]);return{top:t.top-(parseInt(this.helper.css("top"),10)||0)+(e?0:this.scrollParent.scrollTop()),left:t.left-(parseInt(this.helper.css("left"),10)||0)+(e?0:this.scrollParent.scrollLeft())}},_cacheMargins:function(){this.margins={left:parseInt(this.element.css("marginLeft"),10)||0,top:parseInt(this.element.css("marginTop"),10)||0,right:parseInt(this.element.css("marginRight"),10)||0,bottom:parseInt(this.element.css("marginBottom"),10)||0}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var e,s,i,o=this.options,n=this.document[0];this.relativeContainer=null,o.containment?"window"!==o.containment?"document"!==o.containment?o.containment.constructor!==Array?("parent"===o.containment&&(o.containment=this.helper[0].parentNode),(i=(s=t(o.containment))[0])&&(e=/(scroll|auto)/.test(s.css("overflow")),this.containment=[(parseInt(s.css("borderLeftWidth"),10)||0)+(parseInt(s.css("paddingLeft"),10)||0),(parseInt(s.css("borderTopWidth"),10)||0)+(parseInt(s.css("paddingTop"),10)||0),(e?Math.max(i.scrollWidth,i.offsetWidth):i.offsetWidth)-(parseInt(s.css("borderRightWidth"),10)||0)-(parseInt(s.css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left-this.margins.right,(e?Math.max(i.scrollHeight,i.offsetHeight):i.offsetHeight)-(parseInt(s.css("borderBottomWidth"),10)||0)-(parseInt(s.css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top-this.margins.bottom],this.relativeContainer=s)):this.containment=o.containment:this.containment=[0,0,t(n).width()-this.helperProportions.width-this.margins.left,(t(n).height()||n.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top]:this.containment=[t(window).scrollLeft()-this.offset.relative.left-this.offset.parent.left,t(window).scrollTop()-this.offset.relative.top-this.offset.parent.top,t(window).scrollLeft()+t(window).width()-this.helperProportions.width-this.margins.left,t(window).scrollTop()+(t(window).height()||n.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top]:this.containment=null},_convertPositionTo:function(t,e){e||(e=this.position);var s="absolute"===t?1:-1,i=this._isRootNode(this.scrollParent[0]);return{top:e.top+this.offset.relative.top*s+this.offset.parent.top*s-("fixed"===this.cssPosition?-this.offset.scroll.top:i?0:this.offset.scroll.top)*s,left:e.left+this.offset.relative.left*s+this.offset.parent.left*s-("fixed"===this.cssPosition?-this.offset.scroll.left:i?0:this.offset.scroll.left)*s}},_generatePosition:function(t,e){var s,i,o,n,r=this.options,l=this._isRootNode(this.scrollParent[0]),a=t.pageX,h=t.pageY;return l&&this.offset.scroll||(this.offset.scroll={top:this.scrollParent.scrollTop(),left:this.scrollParent.scrollLeft()}),e&&(this.containment&&(this.relativeContainer?(i=this.relativeContainer.offset(),s=[this.containment[0]+i.left,this.containment[1]+i.top,this.containment[2]+i.left,this.containment[3]+i.top]):s=this.containment,t.pageX-this.offset.click.left<s[0]&&(a=s[0]+this.offset.click.left),t.pageY-this.offset.click.top<s[1]&&(h=s[1]+this.offset.click.top),t.pageX-this.offset.click.left>s[2]&&(a=s[2]+this.offset.click.left),t.pageY-this.offset.click.top>s[3]&&(h=s[3]+this.offset.click.top)),r.grid&&(o=r.grid[1]?this.originalPageY+Math.round((h-this.originalPageY)/r.grid[1])*r.grid[1]:this.originalPageY,h=s?o-this.offset.click.top>=s[1]||o-this.offset.click.top>s[3]?o:o-this.offset.click.top>=s[1]?o-r.grid[1]:o+r.grid[1]:o,n=r.grid[0]?this.originalPageX+Math.round((a-this.originalPageX)/r.grid[0])*r.grid[0]:this.originalPageX,a=s?n-this.offset.click.left>=s[0]||n-this.offset.click.left>s[2]?n:n-this.offset.click.left>=s[0]?n-r.grid[0]:n+r.grid[0]:n),"y"===r.axis&&(a=this.originalPageX),"x"===r.axis&&(h=this.originalPageY)),{top:h-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+("fixed"===this.cssPosition?-this.offset.scroll.top:l?0:this.offset.scroll.top),left:a-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+("fixed"===this.cssPosition?-this.offset.scroll.left:l?0:this.offset.scroll.left)}},_clear:function(){this._removeClass(this.helper,"ui-draggable-dragging"),this.helper[0]===this.element[0]||this.cancelHelperRemoval||this.helper.remove(),this.helper=null,this.cancelHelperRemoval=!1,this.destroyOnClear&&this.destroy()},_trigger:function(e,s,i){return i=i||this._uiHash(),t.ui.plugin.call(this,e,[s,i,this],!0),/^(drag|start|stop)/.test(e)&&(this.positionAbs=this._convertPositionTo("absolute"),i.offset=this.positionAbs),t.Widget.prototype._trigger.call(this,e,s,i)},plugins:{},_uiHash:function(){return{helper:this.helper,position:this.position,originalPosition:this.originalPosition,offset:this.positionAbs}}}),t.ui.plugin.add("draggable","connectToSortable",{start:function(e,s,i){var o=t.extend({},s,{item:i.element});i.sortables=[],t(i.options.connectToSortable).each((function(){var s=t(this).sortable("instance");s&&!s.options.disabled&&(i.sortables.push(s),s.refreshPositions(),s._trigger("activate",e,o))}))},stop:function(e,s,i){var o=t.extend({},s,{item:i.element});i.cancelHelperRemoval=!1,t.each(i.sortables,(function(){var t=this;t.isOver?(t.isOver=0,i.cancelHelperRemoval=!0,t.cancelHelperRemoval=!1,t._storedCSS={position:t.placeholder.css("position"),top:t.placeholder.css("top"),left:t.placeholder.css("left")},t._mouseStop(e),t.options.helper=t.options._helper):(t.cancelHelperRemoval=!0,t._trigger("deactivate",e,o))}))},drag:function(e,s,i){t.each(i.sortables,(function(){var o=!1,n=this;n.positionAbs=i.positionAbs,n.helperProportions=i.helperProportions,n.offset.click=i.offset.click,n._intersectsWith(n.containerCache)&&(o=!0,t.each(i.sortables,(function(){return this.positionAbs=i.positionAbs,this.helperProportions=i.helperProportions,this.offset.click=i.offset.click,this!==n&&this._intersectsWith(this.containerCache)&&t.contains(n.element[0],this.element[0])&&(o=!1),o}))),o?(n.isOver||(n.isOver=1,i._parent=s.helper.parent(),n.currentItem=s.helper.appendTo(n.element).data("ui-sortable-item",!0),n.options._helper=n.options.helper,n.options.helper=function(){return s.helper[0]},e.target=n.currentItem[0],n._mouseCapture(e,!0),n._mouseStart(e,!0,!0),n.offset.click.top=i.offset.click.top,n.offset.click.left=i.offset.click.left,n.offset.parent.left-=i.offset.parent.left-n.offset.parent.left,n.offset.parent.top-=i.offset.parent.top-n.offset.parent.top,i._trigger("toSortable",e),i.dropped=n.element,t.each(i.sortables,(function(){this.refreshPositions()})),i.currentItem=i.element,n.fromOutside=i),n.currentItem&&(n._mouseDrag(e),s.position=n.position)):n.isOver&&(n.isOver=0,n.cancelHelperRemoval=!0,n.options._revert=n.options.revert,n.options.revert=!1,n._trigger("out",e,n._uiHash(n)),n._mouseStop(e,!0),n.options.revert=n.options._revert,n.options.helper=n.options._helper,n.placeholder&&n.placeholder.remove(),s.helper.appendTo(i._parent),i._refreshOffsets(e),s.position=i._generatePosition(e,!0),i._trigger("fromSortable",e),i.dropped=!1,t.each(i.sortables,(function(){this.refreshPositions()})))}))}}),t.ui.plugin.add("draggable","cursor",{start:function(e,s,i){var o=t("body"),n=i.options;o.css("cursor")&&(n._cursor=o.css("cursor")),o.css("cursor",n.cursor)},stop:function(e,s,i){var o=i.options;o._cursor&&t("body").css("cursor",o._cursor)}}),t.ui.plugin.add("draggable","opacity",{start:function(e,s,i){var o=t(s.helper),n=i.options;o.css("opacity")&&(n._opacity=o.css("opacity")),o.css("opacity",n.opacity)},stop:function(e,s,i){var o=i.options;o._opacity&&t(s.helper).css("opacity",o._opacity)}}),t.ui.plugin.add("draggable","scroll",{start:function(t,e,s){s.scrollParentNotHidden||(s.scrollParentNotHidden=s.helper.scrollParent(!1)),s.scrollParentNotHidden[0]!==s.document[0]&&"HTML"!==s.scrollParentNotHidden[0].tagName&&(s.overflowOffset=s.scrollParentNotHidden.offset())},drag:function(e,s,i){var o=i.options,n=!1,r=i.scrollParentNotHidden[0],l=i.document[0];r!==l&&"HTML"!==r.tagName?(o.axis&&"x"===o.axis||(i.overflowOffset.top+r.offsetHeight-e.pageY<o.scrollSensitivity?r.scrollTop=n=r.scrollTop+o.scrollSpeed:e.pageY-i.overflowOffset.top<o.scrollSensitivity&&(r.scrollTop=n=r.scrollTop-o.scrollSpeed)),o.axis&&"y"===o.axis||(i.overflowOffset.left+r.offsetWidth-e.pageX<o.scrollSensitivity?r.scrollLeft=n=r.scrollLeft+o.scrollSpeed:e.pageX-i.overflowOffset.left<o.scrollSensitivity&&(r.scrollLeft=n=r.scrollLeft-o.scrollSpeed))):(o.axis&&"x"===o.axis||(e.pageY-t(l).scrollTop()<o.scrollSensitivity?n=t(l).scrollTop(t(l).scrollTop()-o.scrollSpeed):t(window).height()-(e.pageY-t(l).scrollTop())<o.scrollSensitivity&&(n=t(l).scrollTop(t(l).scrollTop()+o.scrollSpeed))),o.axis&&"y"===o.axis||(e.pageX-t(l).scrollLeft()<o.scrollSensitivity?n=t(l).scrollLeft(t(l).scrollLeft()-o.scrollSpeed):t(window).width()-(e.pageX-t(l).scrollLeft())<o.scrollSensitivity&&(n=t(l).scrollLeft(t(l).scrollLeft()+o.scrollSpeed)))),!1!==n&&t.ui.ddmanager&&!o.dropBehaviour&&t.ui.ddmanager.prepareOffsets(i,e)}}),t.ui.plugin.add("draggable","snap",{start:function(e,s,i){var o=i.options;i.snapElements=[],t(o.snap.constructor!==String?o.snap.items||":data(ui-draggable)":o.snap).each((function(){var e=t(this),s=e.offset();this!==i.element[0]&&i.snapElements.push({item:this,width:e.outerWidth(),height:e.outerHeight(),top:s.top,left:s.left})}))},drag:function(e,s,i){var o,n,r,l,a,h,p,c,f,d,g=i.options,u=g.snapTolerance,m=s.offset.left,v=m+i.helperProportions.width,_=s.offset.top,P=_+i.helperProportions.height;for(f=i.snapElements.length-1;f>=0;f--)h=(a=i.snapElements[f].left-i.margins.left)+i.snapElements[f].width,c=(p=i.snapElements[f].top-i.margins.top)+i.snapElements[f].height,v<a-u||m>h+u||P<p-u||_>c+u||!t.contains(i.snapElements[f].item.ownerDocument,i.snapElements[f].item)?(i.snapElements[f].snapping&&i.options.snap.release&&i.options.snap.release.call(i.element,e,t.extend(i._uiHash(),{snapItem:i.snapElements[f].item})),i.snapElements[f].snapping=!1):("inner"!==g.snapMode&&(o=Math.abs(p-P)<=u,n=Math.abs(c-_)<=u,r=Math.abs(a-v)<=u,l=Math.abs(h-m)<=u,o&&(s.position.top=i._convertPositionTo("relative",{top:p-i.helperProportions.height,left:0}).top),n&&(s.position.top=i._convertPositionTo("relative",{top:c,left:0}).top),r&&(s.position.left=i._convertPositionTo("relative",{top:0,left:a-i.helperProportions.width}).left),l&&(s.position.left=i._convertPositionTo("relative",{top:0,left:h}).left)),d=o||n||r||l,"outer"!==g.snapMode&&(o=Math.abs(p-_)<=u,n=Math.abs(c-P)<=u,r=Math.abs(a-m)<=u,l=Math.abs(h-v)<=u,o&&(s.position.top=i._convertPositionTo("relative",{top:p,left:0}).top),n&&(s.position.top=i._convertPositionTo("relative",{top:c-i.helperProportions.height,left:0}).top),r&&(s.position.left=i._convertPositionTo("relative",{top:0,left:a}).left),l&&(s.position.left=i._convertPositionTo("relative",{top:0,left:h-i.helperProportions.width}).left)),!i.snapElements[f].snapping&&(o||n||r||l||d)&&i.options.snap.snap&&i.options.snap.snap.call(i.element,e,t.extend(i._uiHash(),{snapItem:i.snapElements[f].item})),i.snapElements[f].snapping=o||n||r||l||d)}}),t.ui.plugin.add("draggable","stack",{start:function(e,s,i){var o,n=i.options,r=t.makeArray(t(n.stack)).sort((function(e,s){return(parseInt(t(e).css("zIndex"),10)||0)-(parseInt(t(s).css("zIndex"),10)||0)}));r.length&&(o=parseInt(t(r[0]).css("zIndex"),10)||0,t(r).each((function(e){t(this).css("zIndex",o+e)})),this.css("zIndex",o+r.length))}}),t.ui.plugin.add("draggable","zIndex",{start:function(e,s,i){var o=t(s.helper),n=i.options;o.css("zIndex")&&(n._zIndex=o.css("zIndex")),o.css("zIndex",n.zIndex)},stop:function(e,s,i){var o=i.options;o._zIndex&&t(s.helper).css("zIndex",o._zIndex)}}),t.ui.draggable}));;
/*!
 * jQuery UI Resizable 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
!function(t){"function"==typeof define&&define.amd?define(["jquery","./mouse","../disable-selection","../plugin","../version","../widget"],t):t(jQuery)}((function(t){return t.widget("ui.resizable",t.ui.mouse,{version:"1.12.1",widgetEventPrefix:"resize",options:{alsoResize:!1,animate:!1,animateDuration:"slow",animateEasing:"swing",aspectRatio:!1,autoHide:!1,classes:{"ui-resizable-se":"ui-icon ui-icon-gripsmall-diagonal-se"},containment:!1,ghost:!1,grid:!1,handles:"e,s,se",helper:!1,maxHeight:null,maxWidth:null,minHeight:10,minWidth:10,zIndex:90,resize:null,start:null,stop:null},_num:function(t){return parseFloat(t)||0},_isNumber:function(t){return!isNaN(parseFloat(t))},_hasScroll:function(i,e){if("hidden"===t(i).css("overflow"))return!1;var s,h=e&&"left"===e?"scrollLeft":"scrollTop";return i[h]>0||(i[h]=1,s=i[h]>0,i[h]=0,s)},_create:function(){var i,e=this.options,s=this;this._addClass("ui-resizable"),t.extend(this,{_aspectRatio:!!e.aspectRatio,aspectRatio:e.aspectRatio,originalElement:this.element,_proportionallyResizeElements:[],_helper:e.helper||e.ghost||e.animate?e.helper||"ui-resizable-helper":null}),this.element[0].nodeName.match(/^(canvas|textarea|input|select|button|img)$/i)&&(this.element.wrap(t("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({position:this.element.css("position"),width:this.element.outerWidth(),height:this.element.outerHeight(),top:this.element.css("top"),left:this.element.css("left")})),this.element=this.element.parent().data("ui-resizable",this.element.resizable("instance")),this.elementIsWrapper=!0,i={marginTop:this.originalElement.css("marginTop"),marginRight:this.originalElement.css("marginRight"),marginBottom:this.originalElement.css("marginBottom"),marginLeft:this.originalElement.css("marginLeft")},this.element.css(i),this.originalElement.css("margin",0),this.originalResizeStyle=this.originalElement.css("resize"),this.originalElement.css("resize","none"),this._proportionallyResizeElements.push(this.originalElement.css({position:"static",zoom:1,display:"block"})),this.originalElement.css(i),this._proportionallyResize()),this._setupHandles(),e.autoHide&&t(this.element).on("mouseenter",(function(){e.disabled||(s._removeClass("ui-resizable-autohide"),s._handles.show())})).on("mouseleave",(function(){e.disabled||s.resizing||(s._addClass("ui-resizable-autohide"),s._handles.hide())})),this._mouseInit()},_destroy:function(){this._mouseDestroy();var i,e=function(i){t(i).removeData("resizable").removeData("ui-resizable").off(".resizable").find(".ui-resizable-handle").remove()};return this.elementIsWrapper&&(e(this.element),i=this.element,this.originalElement.css({position:i.css("position"),width:i.outerWidth(),height:i.outerHeight(),top:i.css("top"),left:i.css("left")}).insertAfter(i),i.remove()),this.originalElement.css("resize",this.originalResizeStyle),e(this.originalElement),this},_setOption:function(t,i){switch(this._super(t,i),t){case"handles":this._removeHandles(),this._setupHandles()}},_setupHandles:function(){var i,e,s,h,n,o=this.options,a=this;if(this.handles=o.handles||(t(".ui-resizable-handle",this.element).length?{n:".ui-resizable-n",e:".ui-resizable-e",s:".ui-resizable-s",w:".ui-resizable-w",se:".ui-resizable-se",sw:".ui-resizable-sw",ne:".ui-resizable-ne",nw:".ui-resizable-nw"}:"e,s,se"),this._handles=t(),this.handles.constructor===String)for("all"===this.handles&&(this.handles="n,e,s,w,se,sw,ne,nw"),s=this.handles.split(","),this.handles={},e=0;e<s.length;e++)h="ui-resizable-"+(i=t.trim(s[e])),n=t("<div>"),this._addClass(n,"ui-resizable-handle "+h),n.css({zIndex:o.zIndex}),this.handles[i]=".ui-resizable-"+i,this.element.append(n);this._renderAxis=function(i){var e,s,h,n;for(e in i=i||this.element,this.handles)this.handles[e].constructor===String?this.handles[e]=this.element.children(this.handles[e]).first().show():(this.handles[e].jquery||this.handles[e].nodeType)&&(this.handles[e]=t(this.handles[e]),this._on(this.handles[e],{mousedown:a._mouseDown})),this.elementIsWrapper&&this.originalElement[0].nodeName.match(/^(textarea|input|select|button)$/i)&&(s=t(this.handles[e],this.element),n=/sw|ne|nw|se|n|s/.test(e)?s.outerHeight():s.outerWidth(),h=["padding",/ne|nw|n/.test(e)?"Top":/se|sw|s/.test(e)?"Bottom":/^e$/.test(e)?"Right":"Left"].join(""),i.css(h,n),this._proportionallyResize()),this._handles=this._handles.add(this.handles[e])},this._renderAxis(this.element),this._handles=this._handles.add(this.element.find(".ui-resizable-handle")),this._handles.disableSelection(),this._handles.on("mouseover",(function(){a.resizing||(this.className&&(n=this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)),a.axis=n&&n[1]?n[1]:"se")})),o.autoHide&&(this._handles.hide(),this._addClass("ui-resizable-autohide"))},_removeHandles:function(){this._handles.remove()},_mouseCapture:function(i){var e,s,h=!1;for(e in this.handles)((s=t(this.handles[e])[0])===i.target||t.contains(s,i.target))&&(h=!0);return!this.options.disabled&&h},_mouseStart:function(i){var e,s,h,n=this.options,o=this.element;return this.resizing=!0,this._renderProxy(),e=this._num(this.helper.css("left")),s=this._num(this.helper.css("top")),n.containment&&(e+=t(n.containment).scrollLeft()||0,s+=t(n.containment).scrollTop()||0),this.offset=this.helper.offset(),this.position={left:e,top:s},this.size=this._helper?{width:this.helper.width(),height:this.helper.height()}:{width:o.width(),height:o.height()},this.originalSize=this._helper?{width:o.outerWidth(),height:o.outerHeight()}:{width:o.width(),height:o.height()},this.sizeDiff={width:o.outerWidth()-o.width(),height:o.outerHeight()-o.height()},this.originalPosition={left:e,top:s},this.originalMousePosition={left:i.pageX,top:i.pageY},this.aspectRatio="number"==typeof n.aspectRatio?n.aspectRatio:this.originalSize.width/this.originalSize.height||1,h=t(".ui-resizable-"+this.axis).css("cursor"),t("body").css("cursor","auto"===h?this.axis+"-resize":h),this._addClass("ui-resizable-resizing"),this._propagate("start",i),!0},_mouseDrag:function(i){var e,s,h=this.originalMousePosition,n=this.axis,o=i.pageX-h.left||0,a=i.pageY-h.top||0,l=this._change[n];return this._updatePrevProperties(),!!l&&(e=l.apply(this,[i,o,a]),this._updateVirtualBoundaries(i.shiftKey),(this._aspectRatio||i.shiftKey)&&(e=this._updateRatio(e,i)),e=this._respectSize(e,i),this._updateCache(e),this._propagate("resize",i),s=this._applyChanges(),!this._helper&&this._proportionallyResizeElements.length&&this._proportionallyResize(),t.isEmptyObject(s)||(this._updatePrevProperties(),this._trigger("resize",i,this.ui()),this._applyChanges()),!1)},_mouseStop:function(i){this.resizing=!1;var e,s,h,n,o,a,l,r=this.options,p=this;return this._helper&&(h=(s=(e=this._proportionallyResizeElements).length&&/textarea/i.test(e[0].nodeName))&&this._hasScroll(e[0],"left")?0:p.sizeDiff.height,n=s?0:p.sizeDiff.width,o={width:p.helper.width()-n,height:p.helper.height()-h},a=parseFloat(p.element.css("left"))+(p.position.left-p.originalPosition.left)||null,l=parseFloat(p.element.css("top"))+(p.position.top-p.originalPosition.top)||null,r.animate||this.element.css(t.extend(o,{top:l,left:a})),p.helper.height(p.size.height),p.helper.width(p.size.width),this._helper&&!r.animate&&this._proportionallyResize()),t("body").css("cursor","auto"),this._removeClass("ui-resizable-resizing"),this._propagate("stop",i),this._helper&&this.helper.remove(),!1},_updatePrevProperties:function(){this.prevPosition={top:this.position.top,left:this.position.left},this.prevSize={width:this.size.width,height:this.size.height}},_applyChanges:function(){var t={};return this.position.top!==this.prevPosition.top&&(t.top=this.position.top+"px"),this.position.left!==this.prevPosition.left&&(t.left=this.position.left+"px"),this.size.width!==this.prevSize.width&&(t.width=this.size.width+"px"),this.size.height!==this.prevSize.height&&(t.height=this.size.height+"px"),this.helper.css(t),t},_updateVirtualBoundaries:function(t){var i,e,s,h,n,o=this.options;n={minWidth:this._isNumber(o.minWidth)?o.minWidth:0,maxWidth:this._isNumber(o.maxWidth)?o.maxWidth:1/0,minHeight:this._isNumber(o.minHeight)?o.minHeight:0,maxHeight:this._isNumber(o.maxHeight)?o.maxHeight:1/0},(this._aspectRatio||t)&&(i=n.minHeight*this.aspectRatio,s=n.minWidth/this.aspectRatio,e=n.maxHeight*this.aspectRatio,h=n.maxWidth/this.aspectRatio,i>n.minWidth&&(n.minWidth=i),s>n.minHeight&&(n.minHeight=s),e<n.maxWidth&&(n.maxWidth=e),h<n.maxHeight&&(n.maxHeight=h)),this._vBoundaries=n},_updateCache:function(t){this.offset=this.helper.offset(),this._isNumber(t.left)&&(this.position.left=t.left),this._isNumber(t.top)&&(this.position.top=t.top),this._isNumber(t.height)&&(this.size.height=t.height),this._isNumber(t.width)&&(this.size.width=t.width)},_updateRatio:function(t){var i=this.position,e=this.size,s=this.axis;return this._isNumber(t.height)?t.width=t.height*this.aspectRatio:this._isNumber(t.width)&&(t.height=t.width/this.aspectRatio),"sw"===s&&(t.left=i.left+(e.width-t.width),t.top=null),"nw"===s&&(t.top=i.top+(e.height-t.height),t.left=i.left+(e.width-t.width)),t},_respectSize:function(t){var i=this._vBoundaries,e=this.axis,s=this._isNumber(t.width)&&i.maxWidth&&i.maxWidth<t.width,h=this._isNumber(t.height)&&i.maxHeight&&i.maxHeight<t.height,n=this._isNumber(t.width)&&i.minWidth&&i.minWidth>t.width,o=this._isNumber(t.height)&&i.minHeight&&i.minHeight>t.height,a=this.originalPosition.left+this.originalSize.width,l=this.originalPosition.top+this.originalSize.height,r=/sw|nw|w/.test(e),p=/nw|ne|n/.test(e);return n&&(t.width=i.minWidth),o&&(t.height=i.minHeight),s&&(t.width=i.maxWidth),h&&(t.height=i.maxHeight),n&&r&&(t.left=a-i.minWidth),s&&r&&(t.left=a-i.maxWidth),o&&p&&(t.top=l-i.minHeight),h&&p&&(t.top=l-i.maxHeight),t.width||t.height||t.left||!t.top?t.width||t.height||t.top||!t.left||(t.left=null):t.top=null,t},_getPaddingPlusBorderDimensions:function(t){for(var i=0,e=[],s=[t.css("borderTopWidth"),t.css("borderRightWidth"),t.css("borderBottomWidth"),t.css("borderLeftWidth")],h=[t.css("paddingTop"),t.css("paddingRight"),t.css("paddingBottom"),t.css("paddingLeft")];i<4;i++)e[i]=parseFloat(s[i])||0,e[i]+=parseFloat(h[i])||0;return{height:e[0]+e[2],width:e[1]+e[3]}},_proportionallyResize:function(){if(this._proportionallyResizeElements.length)for(var t,i=0,e=this.helper||this.element;i<this._proportionallyResizeElements.length;i++)t=this._proportionallyResizeElements[i],this.outerDimensions||(this.outerDimensions=this._getPaddingPlusBorderDimensions(t)),t.css({height:e.height()-this.outerDimensions.height||0,width:e.width()-this.outerDimensions.width||0})},_renderProxy:function(){var i=this.element,e=this.options;this.elementOffset=i.offset(),this._helper?(this.helper=this.helper||t("<div style='overflow:hidden;'></div>"),this._addClass(this.helper,this._helper),this.helper.css({width:this.element.outerWidth(),height:this.element.outerHeight(),position:"absolute",left:this.elementOffset.left+"px",top:this.elementOffset.top+"px",zIndex:++e.zIndex}),this.helper.appendTo("body").disableSelection()):this.helper=this.element},_change:{e:function(t,i){return{width:this.originalSize.width+i}},w:function(t,i){var e=this.originalSize;return{left:this.originalPosition.left+i,width:e.width-i}},n:function(t,i,e){var s=this.originalSize;return{top:this.originalPosition.top+e,height:s.height-e}},s:function(t,i,e){return{height:this.originalSize.height+e}},se:function(i,e,s){return t.extend(this._change.s.apply(this,arguments),this._change.e.apply(this,[i,e,s]))},sw:function(i,e,s){return t.extend(this._change.s.apply(this,arguments),this._change.w.apply(this,[i,e,s]))},ne:function(i,e,s){return t.extend(this._change.n.apply(this,arguments),this._change.e.apply(this,[i,e,s]))},nw:function(i,e,s){return t.extend(this._change.n.apply(this,arguments),this._change.w.apply(this,[i,e,s]))}},_propagate:function(i,e){t.ui.plugin.call(this,i,[e,this.ui()]),"resize"!==i&&this._trigger(i,e,this.ui())},plugins:{},ui:function(){return{originalElement:this.originalElement,element:this.element,helper:this.helper,position:this.position,size:this.size,originalSize:this.originalSize,originalPosition:this.originalPosition}}}),t.ui.plugin.add("resizable","animate",{stop:function(i){var e=t(this).resizable("instance"),s=e.options,h=e._proportionallyResizeElements,n=h.length&&/textarea/i.test(h[0].nodeName),o=n&&e._hasScroll(h[0],"left")?0:e.sizeDiff.height,a=n?0:e.sizeDiff.width,l={width:e.size.width-a,height:e.size.height-o},r=parseFloat(e.element.css("left"))+(e.position.left-e.originalPosition.left)||null,p=parseFloat(e.element.css("top"))+(e.position.top-e.originalPosition.top)||null;e.element.animate(t.extend(l,p&&r?{top:p,left:r}:{}),{duration:s.animateDuration,easing:s.animateEasing,step:function(){var s={width:parseFloat(e.element.css("width")),height:parseFloat(e.element.css("height")),top:parseFloat(e.element.css("top")),left:parseFloat(e.element.css("left"))};h&&h.length&&t(h[0]).css({width:s.width,height:s.height}),e._updateCache(s),e._propagate("resize",i)}})}}),t.ui.plugin.add("resizable","containment",{start:function(){var i,e,s,h,n,o,a,l=t(this).resizable("instance"),r=l.options,p=l.element,d=r.containment,g=d instanceof t?d.get(0):/parent/.test(d)?p.parent().get(0):d;g&&(l.containerElement=t(g),/document/.test(d)||d===document?(l.containerOffset={left:0,top:0},l.containerPosition={left:0,top:0},l.parentData={element:t(document),left:0,top:0,width:t(document).width(),height:t(document).height()||document.body.parentNode.scrollHeight}):(i=t(g),e=[],t(["Top","Right","Left","Bottom"]).each((function(t,s){e[t]=l._num(i.css("padding"+s))})),l.containerOffset=i.offset(),l.containerPosition=i.position(),l.containerSize={height:i.innerHeight()-e[3],width:i.innerWidth()-e[1]},s=l.containerOffset,h=l.containerSize.height,n=l.containerSize.width,o=l._hasScroll(g,"left")?g.scrollWidth:n,a=l._hasScroll(g)?g.scrollHeight:h,l.parentData={element:g,left:s.left,top:s.top,width:o,height:a}))},resize:function(i){var e,s,h,n,o=t(this).resizable("instance"),a=o.options,l=o.containerOffset,r=o.position,p=o._aspectRatio||i.shiftKey,d={top:0,left:0},g=o.containerElement,u=!0;g[0]!==document&&/static/.test(g.css("position"))&&(d=l),r.left<(o._helper?l.left:0)&&(o.size.width=o.size.width+(o._helper?o.position.left-l.left:o.position.left-d.left),p&&(o.size.height=o.size.width/o.aspectRatio,u=!1),o.position.left=a.helper?l.left:0),r.top<(o._helper?l.top:0)&&(o.size.height=o.size.height+(o._helper?o.position.top-l.top:o.position.top),p&&(o.size.width=o.size.height*o.aspectRatio,u=!1),o.position.top=o._helper?l.top:0),h=o.containerElement.get(0)===o.element.parent().get(0),n=/relative|absolute/.test(o.containerElement.css("position")),h&&n?(o.offset.left=o.parentData.left+o.position.left,o.offset.top=o.parentData.top+o.position.top):(o.offset.left=o.element.offset().left,o.offset.top=o.element.offset().top),e=Math.abs(o.sizeDiff.width+(o._helper?o.offset.left-d.left:o.offset.left-l.left)),s=Math.abs(o.sizeDiff.height+(o._helper?o.offset.top-d.top:o.offset.top-l.top)),e+o.size.width>=o.parentData.width&&(o.size.width=o.parentData.width-e,p&&(o.size.height=o.size.width/o.aspectRatio,u=!1)),s+o.size.height>=o.parentData.height&&(o.size.height=o.parentData.height-s,p&&(o.size.width=o.size.height*o.aspectRatio,u=!1)),u||(o.position.left=o.prevPosition.left,o.position.top=o.prevPosition.top,o.size.width=o.prevSize.width,o.size.height=o.prevSize.height)},stop:function(){var i=t(this).resizable("instance"),e=i.options,s=i.containerOffset,h=i.containerPosition,n=i.containerElement,o=t(i.helper),a=o.offset(),l=o.outerWidth()-i.sizeDiff.width,r=o.outerHeight()-i.sizeDiff.height;i._helper&&!e.animate&&/relative/.test(n.css("position"))&&t(this).css({left:a.left-h.left-s.left,width:l,height:r}),i._helper&&!e.animate&&/static/.test(n.css("position"))&&t(this).css({left:a.left-h.left-s.left,width:l,height:r})}}),t.ui.plugin.add("resizable","alsoResize",{start:function(){var i=t(this).resizable("instance").options;t(i.alsoResize).each((function(){var i=t(this);i.data("ui-resizable-alsoresize",{width:parseFloat(i.width()),height:parseFloat(i.height()),left:parseFloat(i.css("left")),top:parseFloat(i.css("top"))})}))},resize:function(i,e){var s=t(this).resizable("instance"),h=s.options,n=s.originalSize,o=s.originalPosition,a={height:s.size.height-n.height||0,width:s.size.width-n.width||0,top:s.position.top-o.top||0,left:s.position.left-o.left||0};t(h.alsoResize).each((function(){var i=t(this),s=t(this).data("ui-resizable-alsoresize"),h={},n=i.parents(e.originalElement[0]).length?["width","height"]:["width","height","top","left"];t.each(n,(function(t,i){var e=(s[i]||0)+(a[i]||0);e&&e>=0&&(h[i]=e||null)})),i.css(h)}))},stop:function(){t(this).removeData("ui-resizable-alsoresize")}}),t.ui.plugin.add("resizable","ghost",{start:function(){var i=t(this).resizable("instance"),e=i.size;i.ghost=i.originalElement.clone(),i.ghost.css({opacity:.25,display:"block",position:"relative",height:e.height,width:e.width,margin:0,left:0,top:0}),i._addClass(i.ghost,"ui-resizable-ghost"),!1!==t.uiBackCompat&&"string"==typeof i.options.ghost&&i.ghost.addClass(this.options.ghost),i.ghost.appendTo(i.helper)},resize:function(){var i=t(this).resizable("instance");i.ghost&&i.ghost.css({position:"relative",height:i.size.height,width:i.size.width})},stop:function(){var i=t(this).resizable("instance");i.ghost&&i.helper&&i.helper.get(0).removeChild(i.ghost.get(0))}}),t.ui.plugin.add("resizable","grid",{resize:function(){var i,e=t(this).resizable("instance"),s=e.options,h=e.size,n=e.originalSize,o=e.originalPosition,a=e.axis,l="number"==typeof s.grid?[s.grid,s.grid]:s.grid,r=l[0]||1,p=l[1]||1,d=Math.round((h.width-n.width)/r)*r,g=Math.round((h.height-n.height)/p)*p,u=n.width+d,f=n.height+g,c=s.maxWidth&&s.maxWidth<u,m=s.maxHeight&&s.maxHeight<f,z=s.minWidth&&s.minWidth>u,w=s.minHeight&&s.minHeight>f;s.grid=l,z&&(u+=r),w&&(f+=p),c&&(u-=r),m&&(f-=p),/^(se|s|e)$/.test(a)?(e.size.width=u,e.size.height=f):/^(ne)$/.test(a)?(e.size.width=u,e.size.height=f,e.position.top=o.top-g):/^(sw)$/.test(a)?(e.size.width=u,e.size.height=f,e.position.left=o.left-d):((f-p<=0||u-r<=0)&&(i=e._getPaddingPlusBorderDimensions(this)),f-p>0?(e.size.height=f,e.position.top=o.top-g):(f=p-i.height,e.size.height=f,e.position.top=o.top+n.height-f),u-r>0?(e.size.width=u,e.position.left=o.left-d):(u=r-i.width,e.size.width=u,e.position.left=o.left+n.width-u))}}),t.ui.resizable}));;
/*!
 * jQuery UI Form Reset Mixin 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
!function(e){"function"==typeof define&&define.amd?define(["jquery","./form","./version"],e):e(jQuery)}((function(e){return e.ui.formResetMixin={_formResetHandler:function(){var t=e(this);setTimeout((function(){var r=t.data("ui-form-reset-instances");e.each(r,(function(){this.refresh()}))}))},_bindFormResetHandler:function(){if(this.form=this.element.form(),this.form.length){var e=this.form.data("ui-form-reset-instances")||[];e.length||this.form.on("reset.ui-form-reset",this._formResetHandler),e.push(this),this.form.data("ui-form-reset-instances",e)}},_unbindFormResetHandler:function(){if(this.form.length){var t=this.form.data("ui-form-reset-instances");t.splice(e.inArray(this,t),1),t.length?this.form.data("ui-form-reset-instances",t):this.form.removeData("ui-form-reset-instances").off("reset.ui-form-reset")}}}}));;
/*!
 * jQuery UI Checkboxradio 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
!function(e){"function"==typeof define&&define.amd?define(["jquery","../escape-selector","../form-reset-mixin","../labels","../widget"],e):e(jQuery)}((function(e){return e.widget("ui.checkboxradio",[e.ui.formResetMixin,{version:"1.12.1",options:{disabled:null,label:null,icon:!0,classes:{"ui-checkboxradio-label":"ui-corner-all","ui-checkboxradio-icon":"ui-corner-all"}},_getCreateOptions:function(){var i,t,s=this,o=this._super()||{};return this._readType(),t=this.element.labels(),this.label=e(t[t.length-1]),this.label.length||e.error("No label found for checkboxradio widget"),this.originalLabel="",this.label.contents().not(this.element[0]).each((function(){s.originalLabel+=3===this.nodeType?e(this).text():this.outerHTML})),this.originalLabel&&(o.label=this.originalLabel),null!=(i=this.element[0].disabled)&&(o.disabled=i),o},_create:function(){var e=this.element[0].checked;this._bindFormResetHandler(),null==this.options.disabled&&(this.options.disabled=this.element[0].disabled),this._setOption("disabled",this.options.disabled),this._addClass("ui-checkboxradio","ui-helper-hidden-accessible"),this._addClass(this.label,"ui-checkboxradio-label","ui-button ui-widget"),"radio"===this.type&&this._addClass(this.label,"ui-checkboxradio-radio-label"),this.options.label&&this.options.label!==this.originalLabel?this._updateLabel():this.originalLabel&&(this.options.label=this.originalLabel),this._enhance(),e&&(this._addClass(this.label,"ui-checkboxradio-checked","ui-state-active"),this.icon&&this._addClass(this.icon,null,"ui-state-hover")),this._on({change:"_toggleClasses",focus:function(){this._addClass(this.label,null,"ui-state-focus ui-visual-focus")},blur:function(){this._removeClass(this.label,null,"ui-state-focus ui-visual-focus")}})},_readType:function(){var i=this.element[0].nodeName.toLowerCase();this.type=this.element[0].type,"input"===i&&/radio|checkbox/.test(this.type)||e.error("Can't create checkboxradio on element.nodeName="+i+" and element.type="+this.type)},_enhance:function(){this._updateIcon(this.element[0].checked)},widget:function(){return this.label},_getRadioGroup:function(){var i=this.element[0].name,t="input[name='"+e.ui.escapeSelector(i)+"']";return i?(this.form.length?e(this.form[0].elements).filter(t):e(t).filter((function(){return 0===e(this).form().length}))).not(this.element):e([])},_toggleClasses:function(){var i=this.element[0].checked;this._toggleClass(this.label,"ui-checkboxradio-checked","ui-state-active",i),this.options.icon&&"checkbox"===this.type&&this._toggleClass(this.icon,null,"ui-icon-check ui-state-checked",i)._toggleClass(this.icon,null,"ui-icon-blank",!i),"radio"===this.type&&this._getRadioGroup().each((function(){var i=e(this).checkboxradio("instance");i&&i._removeClass(i.label,"ui-checkboxradio-checked","ui-state-active")}))},_destroy:function(){this._unbindFormResetHandler(),this.icon&&(this.icon.remove(),this.iconSpace.remove())},_setOption:function(e,i){if("label"!==e||i){if(this._super(e,i),"disabled"===e)return this._toggleClass(this.label,null,"ui-state-disabled",i),void(this.element[0].disabled=i);this.refresh()}},_updateIcon:function(i){var t="ui-icon ui-icon-background ";this.options.icon?(this.icon||(this.icon=e("<span>"),this.iconSpace=e("<span> </span>"),this._addClass(this.iconSpace,"ui-checkboxradio-icon-space")),"checkbox"===this.type?(t+=i?"ui-icon-check ui-state-checked":"ui-icon-blank",this._removeClass(this.icon,null,i?"ui-icon-blank":"ui-icon-check")):t+="ui-icon-blank",this._addClass(this.icon,"ui-checkboxradio-icon",t),i||this._removeClass(this.icon,null,"ui-icon-check ui-state-checked"),this.icon.prependTo(this.label).after(this.iconSpace)):void 0!==this.icon&&(this.icon.remove(),this.iconSpace.remove(),delete this.icon)},_updateLabel:function(){var e=this.label.contents().not(this.element[0]);this.icon&&(e=e.not(this.icon[0])),this.iconSpace&&(e=e.not(this.iconSpace[0])),e.remove(),this.label.append(this.options.label)},refresh:function(){var e=this.element[0].checked,i=this.element[0].disabled;this._updateIcon(e),this._toggleClass(this.label,"ui-checkboxradio-checked","ui-state-active",e),null!==this.options.label&&this._updateLabel(),i!==this.options.disabled&&this._setOptions({disabled:i})}}]),e.ui.checkboxradio}));;
/*!
 * jQuery UI Controlgroup 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
!function(t){"function"==typeof define&&define.amd?define(["jquery","../widget"],t):t(jQuery)}((function(t){var e=/ui-corner-([a-z]){2,6}/g;return t.widget("ui.controlgroup",{version:"1.12.1",defaultElement:"<div>",options:{direction:"horizontal",disabled:null,onlyVisible:!0,items:{button:"input[type=button], input[type=submit], input[type=reset], button, a",controlgroupLabel:".ui-controlgroup-label",checkboxradio:"input[type='checkbox'], input[type='radio']",selectmenu:"select",spinner:".ui-spinner-input"}},_create:function(){this._enhance()},_enhance:function(){this.element.attr("role","toolbar"),this.refresh()},_destroy:function(){this._callChildMethod("destroy"),this.childWidgets.removeData("ui-controlgroup-data"),this.element.removeAttr("role"),this.options.items.controlgroupLabel&&this.element.find(this.options.items.controlgroupLabel).find(".ui-controlgroup-label-contents").contents().unwrap()},_initWidgets:function(){var e=this,i=[];t.each(this.options.items,(function(n,o){var s,l={};if(o)return"controlgroupLabel"===n?((s=e.element.find(o)).each((function(){var e=t(this);e.children(".ui-controlgroup-label-contents").length||e.contents().wrapAll("<span class='ui-controlgroup-label-contents'></span>")})),e._addClass(s,null,"ui-widget ui-widget-content ui-state-default"),void(i=i.concat(s.get()))):void(t.fn[n]&&(l=e["_"+n+"Options"]?e["_"+n+"Options"]("middle"):{classes:{}},e.element.find(o).each((function(){var o=t(this),s=o[n]("instance"),r=t.widget.extend({},l);if("button"!==n||!o.parent(".ui-spinner").length){s||(s=o[n]()[n]("instance")),s&&(r.classes=e._resolveClassesValues(r.classes,s)),o[n](r);var u=o[n]("widget");t.data(u[0],"ui-controlgroup-data",s||o[n]("instance")),i.push(u[0])}}))))})),this.childWidgets=t(t.unique(i)),this._addClass(this.childWidgets,"ui-controlgroup-item")},_callChildMethod:function(e){this.childWidgets.each((function(){var i=t(this).data("ui-controlgroup-data");i&&i[e]&&i[e]()}))},_updateCornerClass:function(t,e){var i=this._buildSimpleOptions(e,"label").classes.label;this._removeClass(t,null,"ui-corner-top ui-corner-bottom ui-corner-left ui-corner-right ui-corner-all"),this._addClass(t,null,i)},_buildSimpleOptions:function(t,e){var i="vertical"===this.options.direction,n={classes:{}};return n.classes[e]={middle:"",first:"ui-corner-"+(i?"top":"left"),last:"ui-corner-"+(i?"bottom":"right"),only:"ui-corner-all"}[t],n},_spinnerOptions:function(t){var e=this._buildSimpleOptions(t,"ui-spinner");return e.classes["ui-spinner-up"]="",e.classes["ui-spinner-down"]="",e},_buttonOptions:function(t){return this._buildSimpleOptions(t,"ui-button")},_checkboxradioOptions:function(t){return this._buildSimpleOptions(t,"ui-checkboxradio-label")},_selectmenuOptions:function(t){var e="vertical"===this.options.direction;return{width:!!e&&"auto",classes:{middle:{"ui-selectmenu-button-open":"","ui-selectmenu-button-closed":""},first:{"ui-selectmenu-button-open":"ui-corner-"+(e?"top":"tl"),"ui-selectmenu-button-closed":"ui-corner-"+(e?"top":"left")},last:{"ui-selectmenu-button-open":e?"":"ui-corner-tr","ui-selectmenu-button-closed":"ui-corner-"+(e?"bottom":"right")},only:{"ui-selectmenu-button-open":"ui-corner-top","ui-selectmenu-button-closed":"ui-corner-all"}}[t]}},_resolveClassesValues:function(i,n){var o={};return t.each(i,(function(s){var l=n.options.classes[s]||"";l=t.trim(l.replace(e,"")),o[s]=(l+" "+i[s]).replace(/\s+/g," ")})),o},_setOption:function(t,e){"direction"===t&&this._removeClass("ui-controlgroup-"+this.options.direction),this._super(t,e),"disabled"!==t?this.refresh():this._callChildMethod(e?"disable":"enable")},refresh:function(){var e,i=this;this._addClass("ui-controlgroup ui-controlgroup-"+this.options.direction),"horizontal"===this.options.direction&&this._addClass(null,"ui-helper-clearfix"),this._initWidgets(),e=this.childWidgets,this.options.onlyVisible&&(e=e.filter(":visible")),e.length&&(t.each(["first","last"],(function(t,n){var o=e[n]().data("ui-controlgroup-data");if(o&&i["_"+o.widgetName+"Options"]){var s=i["_"+o.widgetName+"Options"](1===e.length?"only":n);s.classes=i._resolveClassesValues(s.classes,o),o.element[o.widgetName](s)}else i._updateCornerClass(e[n](),n)})),this._callChildMethod("refresh"))}})}));;
/*!
 * jQuery UI Button 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
!function(t){"function"==typeof define&&define.amd?define(["jquery","./controlgroup","./checkboxradio","../keycode","../widget"],t):t(jQuery)}((function(t){var i;return t.widget("ui.button",{version:"1.12.1",defaultElement:"<button>",options:{classes:{"ui-button":"ui-corner-all"},disabled:null,icon:null,iconPosition:"beginning",label:null,showLabel:!0},_getCreateOptions:function(){var t,i=this._super()||{};return this.isInput=this.element.is("input"),null!=(t=this.element[0].disabled)&&(i.disabled=t),this.originalLabel=this.isInput?this.element.val():this.element.html(),this.originalLabel&&(i.label=this.originalLabel),i},_create:function(){!this.option.showLabel&!this.options.icon&&(this.options.showLabel=!0),null==this.options.disabled&&(this.options.disabled=this.element[0].disabled||!1),this.hasTitle=!!this.element.attr("title"),this.options.label&&this.options.label!==this.originalLabel&&(this.isInput?this.element.val(this.options.label):this.element.html(this.options.label)),this._addClass("ui-button","ui-widget"),this._setOption("disabled",this.options.disabled),this._enhance(),this.element.is("a")&&this._on({keyup:function(i){i.keyCode===t.ui.keyCode.SPACE&&(i.preventDefault(),this.element[0].click?this.element[0].click():this.element.trigger("click"))}})},_enhance:function(){this.element.is("button")||this.element.attr("role","button"),this.options.icon&&(this._updateIcon("icon",this.options.icon),this._updateTooltip())},_updateTooltip:function(){this.title=this.element.attr("title"),this.options.showLabel||this.title||this.element.attr("title",this.options.label)},_updateIcon:function(i,o){var s="iconPosition"!==i,n=s?this.options.iconPosition:o,e="top"===n||"bottom"===n;this.icon?s&&this._removeClass(this.icon,null,this.options.icon):(this.icon=t("<span>"),this._addClass(this.icon,"ui-button-icon","ui-icon"),this.options.showLabel||this._addClass("ui-button-icon-only")),s&&this._addClass(this.icon,null,o),this._attachIcon(n),e?(this._addClass(this.icon,null,"ui-widget-icon-block"),this.iconSpace&&this.iconSpace.remove()):(this.iconSpace||(this.iconSpace=t("<span> </span>"),this._addClass(this.iconSpace,"ui-button-icon-space")),this._removeClass(this.icon,null,"ui-wiget-icon-block"),this._attachIconSpace(n))},_destroy:function(){this.element.removeAttr("role"),this.icon&&this.icon.remove(),this.iconSpace&&this.iconSpace.remove(),this.hasTitle||this.element.removeAttr("title")},_attachIconSpace:function(t){this.icon[/^(?:end|bottom)/.test(t)?"before":"after"](this.iconSpace)},_attachIcon:function(t){this.element[/^(?:end|bottom)/.test(t)?"append":"prepend"](this.icon)},_setOptions:function(t){var i=void 0===t.showLabel?this.options.showLabel:t.showLabel,o=void 0===t.icon?this.options.icon:t.icon;i||o||(t.showLabel=!0),this._super(t)},_setOption:function(t,i){"icon"===t&&(i?this._updateIcon(t,i):this.icon&&(this.icon.remove(),this.iconSpace&&this.iconSpace.remove())),"iconPosition"===t&&this._updateIcon(t,i),"showLabel"===t&&(this._toggleClass("ui-button-icon-only",null,!i),this._updateTooltip()),"label"===t&&(this.isInput?this.element.val(i):(this.element.html(i),this.icon&&(this._attachIcon(this.options.iconPosition),this._attachIconSpace(this.options.iconPosition)))),this._super(t,i),"disabled"===t&&(this._toggleClass(null,"ui-state-disabled",i),this.element[0].disabled=i,i&&this.element.blur())},refresh:function(){var t=this.element.is("input, button")?this.element[0].disabled:this.element.hasClass("ui-button-disabled");t!==this.options.disabled&&this._setOptions({disabled:t}),this._updateTooltip()}}),!1!==t.uiBackCompat&&(t.widget("ui.button",t.ui.button,{options:{text:!0,icons:{primary:null,secondary:null}},_create:function(){this.options.showLabel&&!this.options.text&&(this.options.showLabel=this.options.text),!this.options.showLabel&&this.options.text&&(this.options.text=this.options.showLabel),this.options.icon||!this.options.icons.primary&&!this.options.icons.secondary?this.options.icon&&(this.options.icons.primary=this.options.icon):this.options.icons.primary?this.options.icon=this.options.icons.primary:(this.options.icon=this.options.icons.secondary,this.options.iconPosition="end"),this._super()},_setOption:function(t,i){"text"!==t?("showLabel"===t&&(this.options.text=i),"icon"===t&&(this.options.icons.primary=i),"icons"===t&&(i.primary?(this._super("icon",i.primary),this._super("iconPosition","beginning")):i.secondary&&(this._super("icon",i.secondary),this._super("iconPosition","end"))),this._superApply(arguments)):this._super("showLabel",i)}}),t.fn.button=(i=t.fn.button,function(){return!this.length||this.length&&"INPUT"!==this[0].tagName||this.length&&"INPUT"===this[0].tagName&&"checkbox"!==this.attr("type")&&"radio"!==this.attr("type")?i.apply(this,arguments):(t.ui.checkboxradio||t.error("Checkboxradio widget missing"),0===arguments.length?this.checkboxradio({icon:!1}):this.checkboxradio.apply(this,arguments))}),t.fn.buttonset=function(){return t.ui.controlgroup||t.error("Controlgroup widget missing"),"option"===arguments[0]&&"items"===arguments[1]&&arguments[2]?this.controlgroup.apply(this,[arguments[0],"items.button",arguments[2]]):"option"===arguments[0]&&"items"===arguments[1]?this.controlgroup.apply(this,[arguments[0],"items.button"]):("object"==typeof arguments[0]&&arguments[0].items&&(arguments[0].items={button:arguments[0].items}),this.controlgroup.apply(this,arguments))}),t.ui.button}));;
/*!
 * jQuery UI Dialog 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
!function(i){"function"==typeof define&&define.amd?define(["jquery","./button","./draggable","./mouse","./resizable","../focusable","../keycode","../position","../safe-active-element","../safe-blur","../tabbable","../unique-id","../version","../widget"],i):i(jQuery)}((function(i){return i.widget("ui.dialog",{version:"1.12.1",options:{appendTo:"body",autoOpen:!0,buttons:[],classes:{"ui-dialog":"ui-corner-all","ui-dialog-titlebar":"ui-corner-all"},closeOnEscape:!0,closeText:"Close",draggable:!0,hide:null,height:"auto",maxHeight:null,maxWidth:null,minHeight:150,minWidth:150,modal:!1,position:{my:"center",at:"center",of:window,collision:"fit",using:function(t){var e=i(this).css(t).offset().top;e<0&&i(this).css("top",t.top-e)}},resizable:!0,show:null,title:null,width:300,beforeClose:null,close:null,drag:null,dragStart:null,dragStop:null,focus:null,open:null,resize:null,resizeStart:null,resizeStop:null},sizeRelatedOptions:{buttons:!0,height:!0,maxHeight:!0,maxWidth:!0,minHeight:!0,minWidth:!0,width:!0},resizableRelatedOptions:{maxHeight:!0,maxWidth:!0,minHeight:!0,minWidth:!0},_create:function(){this.originalCss={display:this.element[0].style.display,width:this.element[0].style.width,minHeight:this.element[0].style.minHeight,maxHeight:this.element[0].style.maxHeight,height:this.element[0].style.height},this.originalPosition={parent:this.element.parent(),index:this.element.parent().children().index(this.element)},this.originalTitle=this.element.attr("title"),null==this.options.title&&null!=this.originalTitle&&(this.options.title=this.originalTitle),this.options.disabled&&(this.options.disabled=!1),this._createWrapper(),this.element.show().removeAttr("title").appendTo(this.uiDialog),this._addClass("ui-dialog-content","ui-widget-content"),this._createTitlebar(),this._createButtonPane(),this.options.draggable&&i.fn.draggable&&this._makeDraggable(),this.options.resizable&&i.fn.resizable&&this._makeResizable(),this._isOpen=!1,this._trackFocus()},_init:function(){this.options.autoOpen&&this.open()},_appendTo:function(){var t=this.options.appendTo;return t&&(t.jquery||t.nodeType)?i(t):this.document.find(t||"body").eq(0)},_destroy:function(){var i,t=this.originalPosition;this._untrackInstance(),this._destroyOverlay(),this.element.removeUniqueId().css(this.originalCss).detach(),this.uiDialog.remove(),this.originalTitle&&this.element.attr("title",this.originalTitle),(i=t.parent.children().eq(t.index)).length&&i[0]!==this.element[0]?i.before(this.element):t.parent.append(this.element)},widget:function(){return this.uiDialog},disable:i.noop,enable:i.noop,close:function(t){var e=this;this._isOpen&&!1!==this._trigger("beforeClose",t)&&(this._isOpen=!1,this._focusedElement=null,this._destroyOverlay(),this._untrackInstance(),this.opener.filter(":focusable").trigger("focus").length||i.ui.safeBlur(i.ui.safeActiveElement(this.document[0])),this._hide(this.uiDialog,this.options.hide,(function(){e._trigger("close",t)})))},isOpen:function(){return this._isOpen},moveToTop:function(){this._moveToTop()},_moveToTop:function(t,e){var o=!1,s=this.uiDialog.siblings(".ui-front:visible").map((function(){return+i(this).css("z-index")})).get(),n=Math.max.apply(null,s);return n>=+this.uiDialog.css("z-index")&&(this.uiDialog.css("z-index",n+1),o=!0),o&&!e&&this._trigger("focus",t),o},open:function(){var t=this;this._isOpen?this._moveToTop()&&this._focusTabbable():(this._isOpen=!0,this.opener=i(i.ui.safeActiveElement(this.document[0])),this._size(),this._position(),this._createOverlay(),this._moveToTop(null,!0),this.overlay&&this.overlay.css("z-index",this.uiDialog.css("z-index")-1),this._show(this.uiDialog,this.options.show,(function(){t._focusTabbable(),t._trigger("focus")})),this._makeFocusTarget(),this._trigger("open"))},_focusTabbable:function(){var i=this._focusedElement;i||(i=this.element.find("[autofocus]")),i.length||(i=this.element.find(":tabbable")),i.length||(i=this.uiDialogButtonPane.find(":tabbable")),i.length||(i=this.uiDialogTitlebarClose.filter(":tabbable")),i.length||(i=this.uiDialog),i.eq(0).trigger("focus")},_keepFocus:function(t){function e(){var t=i.ui.safeActiveElement(this.document[0]);this.uiDialog[0]===t||i.contains(this.uiDialog[0],t)||this._focusTabbable()}t.preventDefault(),e.call(this),this._delay(e)},_createWrapper:function(){this.uiDialog=i("<div>").hide().attr({tabIndex:-1,role:"dialog"}).appendTo(this._appendTo()),this._addClass(this.uiDialog,"ui-dialog","ui-widget ui-widget-content ui-front"),this._on(this.uiDialog,{keydown:function(t){if(this.options.closeOnEscape&&!t.isDefaultPrevented()&&t.keyCode&&t.keyCode===i.ui.keyCode.ESCAPE)return t.preventDefault(),void this.close(t);if(t.keyCode===i.ui.keyCode.TAB&&!t.isDefaultPrevented()){var e=this.uiDialog.find(":tabbable"),o=e.filter(":first"),s=e.filter(":last");t.target!==s[0]&&t.target!==this.uiDialog[0]||t.shiftKey?t.target!==o[0]&&t.target!==this.uiDialog[0]||!t.shiftKey||(this._delay((function(){s.trigger("focus")})),t.preventDefault()):(this._delay((function(){o.trigger("focus")})),t.preventDefault())}},mousedown:function(i){this._moveToTop(i)&&this._focusTabbable()}}),this.element.find("[aria-describedby]").length||this.uiDialog.attr({"aria-describedby":this.element.uniqueId().attr("id")})},_createTitlebar:function(){var t;this.uiDialogTitlebar=i("<div>"),this._addClass(this.uiDialogTitlebar,"ui-dialog-titlebar","ui-widget-header ui-helper-clearfix"),this._on(this.uiDialogTitlebar,{mousedown:function(t){i(t.target).closest(".ui-dialog-titlebar-close")||this.uiDialog.trigger("focus")}}),this.uiDialogTitlebarClose=i("<button type='button'></button>").button({label:i("<a>").text(this.options.closeText).html(),icon:"ui-icon-closethick",showLabel:!1}).appendTo(this.uiDialogTitlebar),this._addClass(this.uiDialogTitlebarClose,"ui-dialog-titlebar-close"),this._on(this.uiDialogTitlebarClose,{click:function(i){i.preventDefault(),this.close(i)}}),t=i("<span>").uniqueId().prependTo(this.uiDialogTitlebar),this._addClass(t,"ui-dialog-title"),this._title(t),this.uiDialogTitlebar.prependTo(this.uiDialog),this.uiDialog.attr({"aria-labelledby":t.attr("id")})},_title:function(i){this.options.title?i.text(this.options.title):i.html("&#160;")},_createButtonPane:function(){this.uiDialogButtonPane=i("<div>"),this._addClass(this.uiDialogButtonPane,"ui-dialog-buttonpane","ui-widget-content ui-helper-clearfix"),this.uiButtonSet=i("<div>").appendTo(this.uiDialogButtonPane),this._addClass(this.uiButtonSet,"ui-dialog-buttonset"),this._createButtons()},_createButtons:function(){var t=this,e=this.options.buttons;this.uiDialogButtonPane.remove(),this.uiButtonSet.empty(),i.isEmptyObject(e)||i.isArray(e)&&!e.length?this._removeClass(this.uiDialog,"ui-dialog-buttons"):(i.each(e,(function(e,o){var s,n;o=i.isFunction(o)?{click:o,text:e}:o,o=i.extend({type:"button"},o),s=o.click,n={icon:o.icon,iconPosition:o.iconPosition,showLabel:o.showLabel,icons:o.icons,text:o.text},delete o.click,delete o.icon,delete o.iconPosition,delete o.showLabel,delete o.icons,"boolean"==typeof o.text&&delete o.text,i("<button></button>",o).button(n).appendTo(t.uiButtonSet).on("click",(function(){s.apply(t.element[0],arguments)}))})),this._addClass(this.uiDialog,"ui-dialog-buttons"),this.uiDialogButtonPane.appendTo(this.uiDialog))},_makeDraggable:function(){var t=this,e=this.options;function o(i){return{position:i.position,offset:i.offset}}this.uiDialog.draggable({cancel:".ui-dialog-content, .ui-dialog-titlebar-close",handle:".ui-dialog-titlebar",containment:"document",start:function(e,s){t._addClass(i(this),"ui-dialog-dragging"),t._blockFrames(),t._trigger("dragStart",e,o(s))},drag:function(i,e){t._trigger("drag",i,o(e))},stop:function(s,n){var a=n.offset.left-t.document.scrollLeft(),l=n.offset.top-t.document.scrollTop();e.position={my:"left top",at:"left"+(a>=0?"+":"")+a+" top"+(l>=0?"+":"")+l,of:t.window},t._removeClass(i(this),"ui-dialog-dragging"),t._unblockFrames(),t._trigger("dragStop",s,o(n))}})},_makeResizable:function(){var t=this,e=this.options,o=e.resizable,s=this.uiDialog.css("position"),n="string"==typeof o?o:"n,e,s,w,se,sw,ne,nw";function a(i){return{originalPosition:i.originalPosition,originalSize:i.originalSize,position:i.position,size:i.size}}this.uiDialog.resizable({cancel:".ui-dialog-content",containment:"document",alsoResize:this.element,maxWidth:e.maxWidth,maxHeight:e.maxHeight,minWidth:e.minWidth,minHeight:this._minHeight(),handles:n,start:function(e,o){t._addClass(i(this),"ui-dialog-resizing"),t._blockFrames(),t._trigger("resizeStart",e,a(o))},resize:function(i,e){t._trigger("resize",i,a(e))},stop:function(o,s){var n=t.uiDialog.offset(),l=n.left-t.document.scrollLeft(),h=n.top-t.document.scrollTop();e.height=t.uiDialog.height(),e.width=t.uiDialog.width(),e.position={my:"left top",at:"left"+(l>=0?"+":"")+l+" top"+(h>=0?"+":"")+h,of:t.window},t._removeClass(i(this),"ui-dialog-resizing"),t._unblockFrames(),t._trigger("resizeStop",o,a(s))}}).css("position",s)},_trackFocus:function(){this._on(this.widget(),{focusin:function(t){this._makeFocusTarget(),this._focusedElement=i(t.target)}})},_makeFocusTarget:function(){this._untrackInstance(),this._trackingInstances().unshift(this)},_untrackInstance:function(){var t=this._trackingInstances(),e=i.inArray(this,t);-1!==e&&t.splice(e,1)},_trackingInstances:function(){var i=this.document.data("ui-dialog-instances");return i||(i=[],this.document.data("ui-dialog-instances",i)),i},_minHeight:function(){var i=this.options;return"auto"===i.height?i.minHeight:Math.min(i.minHeight,i.height)},_position:function(){var i=this.uiDialog.is(":visible");i||this.uiDialog.show(),this.uiDialog.position(this.options.position),i||this.uiDialog.hide()},_setOptions:function(t){var e=this,o=!1,s={};i.each(t,(function(i,t){e._setOption(i,t),i in e.sizeRelatedOptions&&(o=!0),i in e.resizableRelatedOptions&&(s[i]=t)})),o&&(this._size(),this._position()),this.uiDialog.is(":data(ui-resizable)")&&this.uiDialog.resizable("option",s)},_setOption:function(t,e){var o,s,n=this.uiDialog;"disabled"!==t&&(this._super(t,e),"appendTo"===t&&this.uiDialog.appendTo(this._appendTo()),"buttons"===t&&this._createButtons(),"closeText"===t&&this.uiDialogTitlebarClose.button({label:i("<a>").text(""+this.options.closeText).html()}),"draggable"===t&&((o=n.is(":data(ui-draggable)"))&&!e&&n.draggable("destroy"),!o&&e&&this._makeDraggable()),"position"===t&&this._position(),"resizable"===t&&((s=n.is(":data(ui-resizable)"))&&!e&&n.resizable("destroy"),s&&"string"==typeof e&&n.resizable("option","handles",e),s||!1===e||this._makeResizable()),"title"===t&&this._title(this.uiDialogTitlebar.find(".ui-dialog-title")))},_size:function(){var i,t,e,o=this.options;this.element.show().css({width:"auto",minHeight:0,maxHeight:"none",height:0}),o.minWidth>o.width&&(o.width=o.minWidth),i=this.uiDialog.css({height:"auto",width:o.width}).outerHeight(),t=Math.max(0,o.minHeight-i),e="number"==typeof o.maxHeight?Math.max(0,o.maxHeight-i):"none","auto"===o.height?this.element.css({minHeight:t,maxHeight:e,height:"auto"}):this.element.height(Math.max(0,o.height-i)),this.uiDialog.is(":data(ui-resizable)")&&this.uiDialog.resizable("option","minHeight",this._minHeight())},_blockFrames:function(){this.iframeBlocks=this.document.find("iframe").map((function(){var t=i(this);return i("<div>").css({position:"absolute",width:t.outerWidth(),height:t.outerHeight()}).appendTo(t.parent()).offset(t.offset())[0]}))},_unblockFrames:function(){this.iframeBlocks&&(this.iframeBlocks.remove(),delete this.iframeBlocks)},_allowInteraction:function(t){return!!i(t.target).closest(".ui-dialog").length||!!i(t.target).closest(".ui-datepicker").length},_createOverlay:function(){if(this.options.modal){var t=!0;this._delay((function(){t=!1})),this.document.data("ui-dialog-overlays")||this._on(this.document,{focusin:function(i){t||this._allowInteraction(i)||(i.preventDefault(),this._trackingInstances()[0]._focusTabbable())}}),this.overlay=i("<div>").appendTo(this._appendTo()),this._addClass(this.overlay,null,"ui-widget-overlay ui-front"),this._on(this.overlay,{mousedown:"_keepFocus"}),this.document.data("ui-dialog-overlays",(this.document.data("ui-dialog-overlays")||0)+1)}},_destroyOverlay:function(){if(this.options.modal&&this.overlay){var i=this.document.data("ui-dialog-overlays")-1;i?this.document.data("ui-dialog-overlays",i):(this._off(this.document,"focusin"),this.document.removeData("ui-dialog-overlays")),this.overlay.remove(),this.overlay=null}}}),!1!==i.uiBackCompat&&i.widget("ui.dialog",i.ui.dialog,{options:{dialogClass:""},_createWrapper:function(){this._super(),this.uiDialog.addClass(this.options.dialogClass)},_setOption:function(i,t){"dialogClass"===i&&this.uiDialog.removeClass(this.options.dialogClass).addClass(t),this._superApply(arguments)}}),i.ui.dialog}));;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, Drupal, drupalSettings) {
  drupalSettings.dialog = {
    autoOpen: true,
    dialogClass: '',
    buttonClass: 'button',
    buttonPrimaryClass: 'button--primary',
    close: function close(event) {
      Drupal.dialog(event.target).close();
      Drupal.detachBehaviors(event.target, null, 'unload');
    }
  };

  Drupal.dialog = function (element, options) {
    var undef;
    var $element = $(element);
    var dialog = {
      open: false,
      returnValue: undef
    };

    function openDialog(settings) {
      settings = $.extend({}, drupalSettings.dialog, options, settings);
      $(window).trigger('dialog:beforecreate', [dialog, $element, settings]);
      $element.dialog(settings);
      dialog.open = true;
      $(window).trigger('dialog:aftercreate', [dialog, $element, settings]);
    }

    function closeDialog(value) {
      $(window).trigger('dialog:beforeclose', [dialog, $element]);
      $element.dialog('close');
      dialog.returnValue = value;
      dialog.open = false;
      $(window).trigger('dialog:afterclose', [dialog, $element]);
    }

    dialog.show = function () {
      openDialog({
        modal: false
      });
    };

    dialog.showModal = function () {
      openDialog({
        modal: true
      });
    };

    dialog.close = closeDialog;
    return dialog;
  };
})(jQuery, Drupal, drupalSettings);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, Drupal, drupalSettings, debounce, displace) {
  drupalSettings.dialog = $.extend({
    autoResize: true,
    maxHeight: '95%'
  }, drupalSettings.dialog);

  function resetPosition(options) {
    var offsets = displace.offsets;
    var left = offsets.left - offsets.right;
    var top = offsets.top - offsets.bottom;
    var leftString = "".concat((left > 0 ? '+' : '-') + Math.abs(Math.round(left / 2)), "px");
    var topString = "".concat((top > 0 ? '+' : '-') + Math.abs(Math.round(top / 2)), "px");
    options.position = {
      my: "center".concat(left !== 0 ? leftString : '', " center").concat(top !== 0 ? topString : ''),
      of: window
    };
    return options;
  }

  function resetSize(event) {
    var positionOptions = ['width', 'height', 'minWidth', 'minHeight', 'maxHeight', 'maxWidth', 'position'];
    var adjustedOptions = {};
    var windowHeight = $(window).height();
    var option;
    var optionValue;
    var adjustedValue;

    for (var n = 0; n < positionOptions.length; n++) {
      option = positionOptions[n];
      optionValue = event.data.settings[option];

      if (optionValue) {
        if (typeof optionValue === 'string' && /%$/.test(optionValue) && /height/i.test(option)) {
          windowHeight -= displace.offsets.top + displace.offsets.bottom;
          adjustedValue = parseInt(0.01 * parseInt(optionValue, 10) * windowHeight, 10);

          if (option === 'height' && event.data.$element.parent().outerHeight() < adjustedValue) {
            adjustedValue = 'auto';
          }

          adjustedOptions[option] = adjustedValue;
        }
      }
    }

    if (!event.data.settings.modal) {
      adjustedOptions = resetPosition(adjustedOptions);
    }

    event.data.$element.dialog('option', adjustedOptions).trigger('dialogContentResize');
  }

  $(window).on({
    'dialog:aftercreate': function dialogAftercreate(event, dialog, $element, settings) {
      var autoResize = debounce(resetSize, 20);
      var eventData = {
        settings: settings,
        $element: $element
      };

      if (settings.autoResize === true || settings.autoResize === 'true') {
        $element.dialog('option', {
          resizable: false,
          draggable: false
        }).dialog('widget').css('position', 'fixed');
        $(window).on('resize.dialogResize scroll.dialogResize', eventData, autoResize).trigger('resize.dialogResize');
        $(document).on('drupalViewportOffsetChange.dialogResize', eventData, autoResize);
      }
    },
    'dialog:beforeclose': function dialogBeforeclose(event, dialog, $element) {
      $(window).off('.dialogResize');
      $(document).off('.dialogResize');
    }
  });
})(jQuery, Drupal, drupalSettings, Drupal.debounce, Drupal.displace);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($) {
  $.widget('ui.dialog', $.ui.dialog, {
    options: {
      buttonClass: 'button',
      buttonPrimaryClass: 'button--primary'
    },
    _createButtons: function _createButtons() {
      var opts = this.options;
      var primaryIndex;
      var index;
      var il = opts.buttons.length;

      for (index = 0; index < il; index++) {
        if (opts.buttons[index].primary && opts.buttons[index].primary === true) {
          primaryIndex = index;
          delete opts.buttons[index].primary;
          break;
        }
      }

      this._super();

      var $buttons = this.uiButtonSet.children().addClass(opts.buttonClass);

      if (typeof primaryIndex !== 'undefined') {
        $buttons.eq(index).addClass(opts.buttonPrimaryClass);
      }
    }
  });
})(jQuery);;
/**
 * @popperjs/core v2.5.4 - MIT License
 */

"use strict";!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e=e||self).Popper={})}(this,(function(e){function t(e){return{width:(e=e.getBoundingClientRect()).width,height:e.height,top:e.top,right:e.right,bottom:e.bottom,left:e.left,x:e.left,y:e.top}}function n(e){return"[object Window]"!==e.toString()?(e=e.ownerDocument)&&e.defaultView||window:e}function r(e){return{scrollLeft:(e=n(e)).pageXOffset,scrollTop:e.pageYOffset}}function o(e){return e instanceof n(e).Element||e instanceof Element}function i(e){return e instanceof n(e).HTMLElement||e instanceof HTMLElement}function a(e){return e?(e.nodeName||"").toLowerCase():null}function s(e){return((o(e)?e.ownerDocument:e.document)||window.document).documentElement}function f(e){return t(s(e)).left+r(e).scrollLeft}function c(e){return n(e).getComputedStyle(e)}function p(e){return e=c(e),/auto|scroll|overlay|hidden/.test(e.overflow+e.overflowY+e.overflowX)}function l(e,o,c){void 0===c&&(c=!1);var l=s(o);e=t(e);var u=i(o),d={scrollLeft:0,scrollTop:0},m={x:0,y:0};return(u||!u&&!c)&&(("body"!==a(o)||p(l))&&(d=o!==n(o)&&i(o)?{scrollLeft:o.scrollLeft,scrollTop:o.scrollTop}:r(o)),i(o)?((m=t(o)).x+=o.clientLeft,m.y+=o.clientTop):l&&(m.x=f(l))),{x:e.left+d.scrollLeft-m.x,y:e.top+d.scrollTop-m.y,width:e.width,height:e.height}}function u(e){return{x:e.offsetLeft,y:e.offsetTop,width:e.offsetWidth,height:e.offsetHeight}}function d(e){return"html"===a(e)?e:e.assignedSlot||e.parentNode||e.host||s(e)}function m(e,t){void 0===t&&(t=[]);var r=function e(t){return 0<=["html","body","#document"].indexOf(a(t))?t.ownerDocument.body:i(t)&&p(t)?t:e(d(t))}(e);e="body"===a(r);var o=n(r);return r=e?[o].concat(o.visualViewport||[],p(r)?r:[]):r,t=t.concat(r),e?t:t.concat(m(d(r)))}function h(e){if(!i(e)||"fixed"===c(e).position)return null;if(e=e.offsetParent){var t=s(e);if("body"===a(e)&&"static"===c(e).position&&"static"!==c(t).position)return t}return e}function g(e){for(var t=n(e),r=h(e);r&&0<=["table","td","th"].indexOf(a(r))&&"static"===c(r).position;)r=h(r);if(r&&"body"===a(r)&&"static"===c(r).position)return t;if(!r)e:{for(e=d(e);i(e)&&0>["html","body"].indexOf(a(e));){if("none"!==(r=c(e)).transform||"none"!==r.perspective||r.willChange&&"auto"!==r.willChange){r=e;break e}e=e.parentNode}r=null}return r||t}function v(e){var t=new Map,n=new Set,r=[];return e.forEach((function(e){t.set(e.name,e)})),e.forEach((function(e){n.has(e.name)||function e(o){n.add(o.name),[].concat(o.requires||[],o.requiresIfExists||[]).forEach((function(r){n.has(r)||(r=t.get(r))&&e(r)})),r.push(o)}(e)})),r}function b(e){var t;return function(){return t||(t=new Promise((function(n){Promise.resolve().then((function(){t=void 0,n(e())}))}))),t}}function y(e){return e.split("-")[0]}function O(e,t){var r,o=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if((r=o)&&(r=o instanceof(r=n(o).ShadowRoot)||o instanceof ShadowRoot),r)do{if(t&&e.isSameNode(t))return!0;t=t.parentNode||t.host}while(t);return!1}function w(e){return Object.assign(Object.assign({},e),{},{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function x(e,o){if("viewport"===o){o=n(e);var a=s(e);o=o.visualViewport;var p=a.clientWidth;a=a.clientHeight;var l=0,u=0;o&&(p=o.width,a=o.height,/^((?!chrome|android).)*safari/i.test(navigator.userAgent)||(l=o.offsetLeft,u=o.offsetTop)),e=w(e={width:p,height:a,x:l+f(e),y:u})}else i(o)?((e=t(o)).top+=o.clientTop,e.left+=o.clientLeft,e.bottom=e.top+o.clientHeight,e.right=e.left+o.clientWidth,e.width=o.clientWidth,e.height=o.clientHeight,e.x=e.left,e.y=e.top):(u=s(e),e=s(u),l=r(u),o=u.ownerDocument.body,p=Math.max(e.scrollWidth,e.clientWidth,o?o.scrollWidth:0,o?o.clientWidth:0),a=Math.max(e.scrollHeight,e.clientHeight,o?o.scrollHeight:0,o?o.clientHeight:0),u=-l.scrollLeft+f(u),l=-l.scrollTop,"rtl"===c(o||e).direction&&(u+=Math.max(e.clientWidth,o?o.clientWidth:0)-p),e=w({width:p,height:a,x:u,y:l}));return e}function j(e,t,n){return t="clippingParents"===t?function(e){var t=m(d(e)),n=0<=["absolute","fixed"].indexOf(c(e).position)&&i(e)?g(e):e;return o(n)?t.filter((function(e){return o(e)&&O(e,n)&&"body"!==a(e)})):[]}(e):[].concat(t),(n=(n=[].concat(t,[n])).reduce((function(t,n){return n=x(e,n),t.top=Math.max(n.top,t.top),t.right=Math.min(n.right,t.right),t.bottom=Math.min(n.bottom,t.bottom),t.left=Math.max(n.left,t.left),t}),x(e,n[0]))).width=n.right-n.left,n.height=n.bottom-n.top,n.x=n.left,n.y=n.top,n}function M(e){return 0<=["top","bottom"].indexOf(e)?"x":"y"}function E(e){var t=e.reference,n=e.element,r=(e=e.placement)?y(e):null;e=e?e.split("-")[1]:null;var o=t.x+t.width/2-n.width/2,i=t.y+t.height/2-n.height/2;switch(r){case"top":o={x:o,y:t.y-n.height};break;case"bottom":o={x:o,y:t.y+t.height};break;case"right":o={x:t.x+t.width,y:i};break;case"left":o={x:t.x-n.width,y:i};break;default:o={x:t.x,y:t.y}}if(null!=(r=r?M(r):null))switch(i="y"===r?"height":"width",e){case"start":o[r]=Math.floor(o[r])-Math.floor(t[i]/2-n[i]/2);break;case"end":o[r]=Math.floor(o[r])+Math.ceil(t[i]/2-n[i]/2)}return o}function D(e){return Object.assign(Object.assign({},{top:0,right:0,bottom:0,left:0}),e)}function P(e,t){return t.reduce((function(t,n){return t[n]=e,t}),{})}function L(e,n){void 0===n&&(n={});var r=n;n=void 0===(n=r.placement)?e.placement:n;var i=r.boundary,a=void 0===i?"clippingParents":i,f=void 0===(i=r.rootBoundary)?"viewport":i;i=void 0===(i=r.elementContext)?"popper":i;var c=r.altBoundary,p=void 0!==c&&c;r=D("number"!=typeof(r=void 0===(r=r.padding)?0:r)?r:P(r,T));var l=e.elements.reference;c=e.rects.popper,a=j(o(p=e.elements[p?"popper"===i?"reference":"popper":i])?p:p.contextElement||s(e.elements.popper),a,f),p=E({reference:f=t(l),element:c,strategy:"absolute",placement:n}),c=w(Object.assign(Object.assign({},c),p)),f="popper"===i?c:f;var u={top:a.top-f.top+r.top,bottom:f.bottom-a.bottom+r.bottom,left:a.left-f.left+r.left,right:f.right-a.right+r.right};if(e=e.modifiersData.offset,"popper"===i&&e){var d=e[n];Object.keys(u).forEach((function(e){var t=0<=["right","bottom"].indexOf(e)?1:-1,n=0<=["top","bottom"].indexOf(e)?"y":"x";u[e]+=d[n]*t}))}return u}function k(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return!t.some((function(e){return!(e&&"function"==typeof e.getBoundingClientRect)}))}function B(e){void 0===e&&(e={});var t=e.defaultModifiers,n=void 0===t?[]:t,r=void 0===(e=e.defaultOptions)?V:e;return function(e,t,i){function a(){f.forEach((function(e){return e()})),f=[]}void 0===i&&(i=r);var s={placement:"bottom",orderedModifiers:[],options:Object.assign(Object.assign({},V),r),modifiersData:{},elements:{reference:e,popper:t},attributes:{},styles:{}},f=[],c=!1,p={state:s,setOptions:function(i){return a(),s.options=Object.assign(Object.assign(Object.assign({},r),s.options),i),s.scrollParents={reference:o(e)?m(e):e.contextElement?m(e.contextElement):[],popper:m(t)},i=function(e){var t=v(e);return N.reduce((function(e,n){return e.concat(t.filter((function(e){return e.phase===n})))}),[])}(function(e){var t=e.reduce((function(e,t){var n=e[t.name];return e[t.name]=n?Object.assign(Object.assign(Object.assign({},n),t),{},{options:Object.assign(Object.assign({},n.options),t.options),data:Object.assign(Object.assign({},n.data),t.data)}):t,e}),{});return Object.keys(t).map((function(e){return t[e]}))}([].concat(n,s.options.modifiers))),s.orderedModifiers=i.filter((function(e){return e.enabled})),s.orderedModifiers.forEach((function(e){var t=e.name,n=e.options;n=void 0===n?{}:n,"function"==typeof(e=e.effect)&&(t=e({state:s,name:t,instance:p,options:n}),f.push(t||function(){}))})),p.update()},forceUpdate:function(){if(!c){var e=s.elements,t=e.reference;if(k(t,e=e.popper))for(s.rects={reference:l(t,g(e),"fixed"===s.options.strategy),popper:u(e)},s.reset=!1,s.placement=s.options.placement,s.orderedModifiers.forEach((function(e){return s.modifiersData[e.name]=Object.assign({},e.data)})),t=0;t<s.orderedModifiers.length;t++)if(!0===s.reset)s.reset=!1,t=-1;else{var n=s.orderedModifiers[t];e=n.fn;var r=n.options;r=void 0===r?{}:r,n=n.name,"function"==typeof e&&(s=e({state:s,options:r,name:n,instance:p})||s)}}},update:b((function(){return new Promise((function(e){p.forceUpdate(),e(s)}))})),destroy:function(){a(),c=!0}};return k(e,t)?(p.setOptions(i).then((function(e){!c&&i.onFirstUpdate&&i.onFirstUpdate(e)})),p):p}}function W(e){var t,r=e.popper,o=e.popperRect,i=e.placement,a=e.offsets,f=e.position,c=e.gpuAcceleration,p=e.adaptive,l=window.devicePixelRatio||1;e=Math.round(a.x*l)/l||0,l=Math.round(a.y*l)/l||0;var u=a.hasOwnProperty("x");a=a.hasOwnProperty("y");var d,m="left",h="top",v=window;if(p){var b=g(r);b===n(r)&&(b=s(r)),"top"===i&&(h="bottom",l-=b.clientHeight-o.height,l*=c?1:-1),"left"===i&&(m="right",e-=b.clientWidth-o.width,e*=c?1:-1)}return r=Object.assign({position:f},p&&z),c?Object.assign(Object.assign({},r),{},((d={})[h]=a?"0":"",d[m]=u?"0":"",d.transform=2>(v.devicePixelRatio||1)?"translate("+e+"px, "+l+"px)":"translate3d("+e+"px, "+l+"px, 0)",d)):Object.assign(Object.assign({},r),{},((t={})[h]=a?l+"px":"",t[m]=u?e+"px":"",t.transform="",t))}function A(e){return e.replace(/left|right|bottom|top/g,(function(e){return G[e]}))}function H(e){return e.replace(/start|end/g,(function(e){return J[e]}))}function R(e,t,n){return void 0===n&&(n={x:0,y:0}),{top:e.top-t.height-n.y,right:e.right-t.width+n.x,bottom:e.bottom-t.height+n.y,left:e.left-t.width-n.x}}function S(e){return["top","right","bottom","left"].some((function(t){return 0<=e[t]}))}var T=["top","bottom","right","left"],q=T.reduce((function(e,t){return e.concat([t+"-start",t+"-end"])}),[]),C=[].concat(T,["auto"]).reduce((function(e,t){return e.concat([t,t+"-start",t+"-end"])}),[]),N="beforeRead read afterRead beforeMain main afterMain beforeWrite write afterWrite".split(" "),V={placement:"bottom",modifiers:[],strategy:"absolute"},I={passive:!0},_={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(e){var t=e.state,r=e.instance,o=(e=e.options).scroll,i=void 0===o||o,a=void 0===(e=e.resize)||e,s=n(t.elements.popper),f=[].concat(t.scrollParents.reference,t.scrollParents.popper);return i&&f.forEach((function(e){e.addEventListener("scroll",r.update,I)})),a&&s.addEventListener("resize",r.update,I),function(){i&&f.forEach((function(e){e.removeEventListener("scroll",r.update,I)})),a&&s.removeEventListener("resize",r.update,I)}},data:{}},U={name:"popperOffsets",enabled:!0,phase:"read",fn:function(e){var t=e.state;t.modifiersData[e.name]=E({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})},data:{}},z={top:"auto",right:"auto",bottom:"auto",left:"auto"},F={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(e){var t=e.state,n=e.options;e=void 0===(e=n.gpuAcceleration)||e,n=void 0===(n=n.adaptive)||n,e={placement:y(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:e},null!=t.modifiersData.popperOffsets&&(t.styles.popper=Object.assign(Object.assign({},t.styles.popper),W(Object.assign(Object.assign({},e),{},{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:n})))),null!=t.modifiersData.arrow&&(t.styles.arrow=Object.assign(Object.assign({},t.styles.arrow),W(Object.assign(Object.assign({},e),{},{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1})))),t.attributes.popper=Object.assign(Object.assign({},t.attributes.popper),{},{"data-popper-placement":t.placement})},data:{}},X={name:"applyStyles",enabled:!0,phase:"write",fn:function(e){var t=e.state;Object.keys(t.elements).forEach((function(e){var n=t.styles[e]||{},r=t.attributes[e]||{},o=t.elements[e];i(o)&&a(o)&&(Object.assign(o.style,n),Object.keys(r).forEach((function(e){var t=r[e];!1===t?o.removeAttribute(e):o.setAttribute(e,!0===t?"":t)})))}))},effect:function(e){var t=e.state,n={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,n.popper),t.elements.arrow&&Object.assign(t.elements.arrow.style,n.arrow),function(){Object.keys(t.elements).forEach((function(e){var r=t.elements[e],o=t.attributes[e]||{};e=Object.keys(t.styles.hasOwnProperty(e)?t.styles[e]:n[e]).reduce((function(e,t){return e[t]="",e}),{}),i(r)&&a(r)&&(Object.assign(r.style,e),Object.keys(o).forEach((function(e){r.removeAttribute(e)})))}))}},requires:["computeStyles"]},Y={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(e){var t=e.state,n=e.name,r=void 0===(e=e.options.offset)?[0,0]:e,o=(e=C.reduce((function(e,n){var o=t.rects,i=y(n),a=0<=["left","top"].indexOf(i)?-1:1,s="function"==typeof r?r(Object.assign(Object.assign({},o),{},{placement:n})):r;return o=(o=s[0])||0,s=((s=s[1])||0)*a,i=0<=["left","right"].indexOf(i)?{x:s,y:o}:{x:o,y:s},e[n]=i,e}),{}))[t.placement],i=o.x;o=o.y,null!=t.modifiersData.popperOffsets&&(t.modifiersData.popperOffsets.x+=i,t.modifiersData.popperOffsets.y+=o),t.modifiersData[n]=e}},G={left:"right",right:"left",bottom:"top",top:"bottom"},J={start:"end",end:"start"},K={name:"flip",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options;if(e=e.name,!t.modifiersData[e]._skip){var r=n.mainAxis;r=void 0===r||r;var o=n.altAxis;o=void 0===o||o;var i=n.fallbackPlacements,a=n.padding,s=n.boundary,f=n.rootBoundary,c=n.altBoundary,p=n.flipVariations,l=void 0===p||p,u=n.allowedAutoPlacements;p=y(n=t.options.placement),i=i||(p!==n&&l?function(e){if("auto"===y(e))return[];var t=A(e);return[H(e),t,H(t)]}(n):[A(n)]);var d=[n].concat(i).reduce((function(e,n){return e.concat("auto"===y(n)?function(e,t){void 0===t&&(t={});var n=t.boundary,r=t.rootBoundary,o=t.padding,i=t.flipVariations,a=t.allowedAutoPlacements,s=void 0===a?C:a,f=t.placement.split("-")[1];0===(i=(t=f?i?q:q.filter((function(e){return e.split("-")[1]===f})):T).filter((function(e){return 0<=s.indexOf(e)}))).length&&(i=t);var c=i.reduce((function(t,i){return t[i]=L(e,{placement:i,boundary:n,rootBoundary:r,padding:o})[y(i)],t}),{});return Object.keys(c).sort((function(e,t){return c[e]-c[t]}))}(t,{placement:n,boundary:s,rootBoundary:f,padding:a,flipVariations:l,allowedAutoPlacements:u}):n)}),[]);n=t.rects.reference,i=t.rects.popper;var m=new Map;p=!0;for(var h=d[0],g=0;g<d.length;g++){var v=d[g],b=y(v),O="start"===v.split("-")[1],w=0<=["top","bottom"].indexOf(b),x=w?"width":"height",j=L(t,{placement:v,boundary:s,rootBoundary:f,altBoundary:c,padding:a});if(O=w?O?"right":"left":O?"bottom":"top",n[x]>i[x]&&(O=A(O)),x=A(O),w=[],r&&w.push(0>=j[b]),o&&w.push(0>=j[O],0>=j[x]),w.every((function(e){return e}))){h=v,p=!1;break}m.set(v,w)}if(p)for(r=function(e){var t=d.find((function(t){if(t=m.get(t))return t.slice(0,e).every((function(e){return e}))}));if(t)return h=t,"break"},o=l?3:1;0<o&&"break"!==r(o);o--);t.placement!==h&&(t.modifiersData[e]._skip=!0,t.placement=h,t.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}},Q={name:"preventOverflow",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options;e=e.name;var r=n.mainAxis,o=void 0===r||r;r=void 0!==(r=n.altAxis)&&r;var i=n.tether;i=void 0===i||i;var a=n.tetherOffset,s=void 0===a?0:a;n=L(t,{boundary:n.boundary,rootBoundary:n.rootBoundary,padding:n.padding,altBoundary:n.altBoundary}),a=y(t.placement);var f=t.placement.split("-")[1],c=!f,p=M(a);a="x"===p?"y":"x";var l=t.modifiersData.popperOffsets,d=t.rects.reference,m=t.rects.popper,h="function"==typeof s?s(Object.assign(Object.assign({},t.rects),{},{placement:t.placement})):s;if(s={x:0,y:0},l){if(o){var v="y"===p?"top":"left",b="y"===p?"bottom":"right",O="y"===p?"height":"width";o=l[p];var w=l[p]+n[v],x=l[p]-n[b],j=i?-m[O]/2:0,E="start"===f?d[O]:m[O];f="start"===f?-m[O]:-d[O],m=t.elements.arrow,m=i&&m?u(m):{width:0,height:0};var D=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0};v=D[v],b=D[b],m=Math.max(0,Math.min(d[O],m[O])),E=c?d[O]/2-j-m-v-h:E-m-v-h,c=c?-d[O]/2+j+m+b+h:f+m+b+h,h=t.elements.arrow&&g(t.elements.arrow),d=t.modifiersData.offset?t.modifiersData.offset[t.placement][p]:0,h=l[p]+E-d-(h?"y"===p?h.clientTop||0:h.clientLeft||0:0),c=l[p]+c-d,i=Math.max(i?Math.min(w,h):w,Math.min(o,i?Math.max(x,c):x)),l[p]=i,s[p]=i-o}r&&(r=l[a],i=Math.max(r+n["x"===p?"top":"left"],Math.min(r,r-n["x"===p?"bottom":"right"])),l[a]=i,s[a]=i-r),t.modifiersData[e]=s}},requiresIfExists:["offset"]},Z={name:"arrow",enabled:!0,phase:"main",fn:function(e){var t,n=e.state;e=e.name;var r=n.elements.arrow,o=n.modifiersData.popperOffsets,i=y(n.placement),a=M(i);if(i=0<=["left","right"].indexOf(i)?"height":"width",r&&o){var s=n.modifiersData[e+"#persistent"].padding,f=u(r),c="y"===a?"top":"left",p="y"===a?"bottom":"right",l=n.rects.reference[i]+n.rects.reference[a]-o[a]-n.rects.popper[i];o=o[a]-n.rects.reference[a],l=(r=(r=g(r))?"y"===a?r.clientHeight||0:r.clientWidth||0:0)/2-f[i]/2+(l/2-o/2),i=Math.max(s[c],Math.min(l,r-f[i]-s[p])),n.modifiersData[e]=((t={})[a]=i,t.centerOffset=i-l,t)}},effect:function(e){var t=e.state,n=e.options;e=e.name;var r=n.element;if(r=void 0===r?"[data-popper-arrow]":r,n=void 0===(n=n.padding)?0:n,null!=r){if("string"==typeof r&&!(r=t.elements.popper.querySelector(r)))return;O(t.elements.popper,r)&&(t.elements.arrow=r,t.modifiersData[e+"#persistent"]={padding:D("number"!=typeof n?n:P(n,T))})}},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]},$={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(e){var t=e.state;e=e.name;var n=t.rects.reference,r=t.rects.popper,o=t.modifiersData.preventOverflow,i=L(t,{elementContext:"reference"}),a=L(t,{altBoundary:!0});n=R(i,n),r=R(a,r,o),o=S(n),a=S(r),t.modifiersData[e]={referenceClippingOffsets:n,popperEscapeOffsets:r,isReferenceHidden:o,hasPopperEscaped:a},t.attributes.popper=Object.assign(Object.assign({},t.attributes.popper),{},{"data-popper-reference-hidden":o,"data-popper-escaped":a})}},ee=B({defaultModifiers:[_,U,F,X]}),te=[_,U,F,X,Y,K,Q,Z,$],ne=B({defaultModifiers:te});e.applyStyles=X,e.arrow=Z,e.computeStyles=F,e.createPopper=ne,e.createPopperLite=ee,e.defaultModifiers=te,e.detectOverflow=L,e.eventListeners=_,e.flip=K,e.hide=$,e.offset=Y,e.popperGenerator=B,e.popperOffsets=U,e.preventOverflow=Q,Object.defineProperty(e,"__esModule",{value:!0})}));

;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, _, Backbone, Drupal, drupalSettings, JSON, storage) {
  var options = $.extend(drupalSettings.quickedit, {
    strings: {
      quickEdit: Drupal.t('Quick edit')
    }
  });
  var fieldsMetadataQueue = [];
  var fieldsAvailableQueue = [];
  var contextualLinksQueue = [];
  var entityInstancesTracker = {};

  function initQuickEdit(bodyElement) {
    Drupal.quickedit.collections.entities = new Drupal.quickedit.EntityCollection();
    Drupal.quickedit.collections.fields = new Drupal.quickedit.FieldCollection();
    Drupal.quickedit.app = new Drupal.quickedit.AppView({
      el: bodyElement,
      model: new Drupal.quickedit.AppModel(),
      entitiesCollection: Drupal.quickedit.collections.entities,
      fieldsCollection: Drupal.quickedit.collections.fields
    });
  }

  function processEntity(entityElement) {
    var entityID = entityElement.getAttribute('data-quickedit-entity-id');

    if (!entityInstancesTracker.hasOwnProperty(entityID)) {
      entityInstancesTracker[entityID] = 0;
    } else {
      entityInstancesTracker[entityID]++;
    }

    var entityInstanceID = entityInstancesTracker[entityID];
    entityElement.setAttribute('data-quickedit-entity-instance-id', entityInstanceID);
  }

  function initializeField(fieldElement, fieldID, entityID, entityInstanceID) {
    var entity = Drupal.quickedit.collections.entities.findWhere({
      entityID: entityID,
      entityInstanceID: entityInstanceID
    });
    $(fieldElement).addClass('quickedit-field');
    var field = new Drupal.quickedit.FieldModel({
      el: fieldElement,
      fieldID: fieldID,
      id: "".concat(fieldID, "[").concat(entity.get('entityInstanceID'), "]"),
      entity: entity,
      metadata: Drupal.quickedit.metadata.get(fieldID),
      acceptStateChange: _.bind(Drupal.quickedit.app.acceptEditorStateChange, Drupal.quickedit.app)
    });
    Drupal.quickedit.collections.fields.add(field);
  }

  function loadMissingEditors(callback) {
    var loadedEditors = _.keys(Drupal.quickedit.editors);

    var missingEditors = [];
    Drupal.quickedit.collections.fields.each(function (fieldModel) {
      var metadata = Drupal.quickedit.metadata.get(fieldModel.get('fieldID'));

      if (metadata.access && _.indexOf(loadedEditors, metadata.editor) === -1) {
        missingEditors.push(metadata.editor);
        Drupal.quickedit.editors[metadata.editor] = false;
      }
    });
    missingEditors = _.uniq(missingEditors);

    if (missingEditors.length === 0) {
      callback();
      return;
    }

    var loadEditorsAjax = Drupal.ajax({
      url: Drupal.url('quickedit/attachments'),
      submit: {
        'editors[]': missingEditors
      }
    });
    var realInsert = Drupal.AjaxCommands.prototype.insert;

    loadEditorsAjax.commands.insert = function (ajax, response, status) {
      _.defer(callback);

      realInsert(ajax, response, status);
    };

    loadEditorsAjax.execute();
  }

  function initializeEntityContextualLink(contextualLink) {
    var metadata = Drupal.quickedit.metadata;

    function hasFieldWithPermission(fieldIDs) {
      for (var i = 0; i < fieldIDs.length; i++) {
        var fieldID = fieldIDs[i];

        if (metadata.get(fieldID, 'access') === true) {
          return true;
        }
      }

      return false;
    }

    function allMetadataExists(fieldIDs) {
      return fieldIDs.length === metadata.intersection(fieldIDs).length;
    }

    var fields = _.where(fieldsAvailableQueue, {
      entityID: contextualLink.entityID,
      entityInstanceID: contextualLink.entityInstanceID
    });

    var fieldIDs = _.pluck(fields, 'fieldID');

    if (fieldIDs.length === 0) {
      return false;
    }

    if (hasFieldWithPermission(fieldIDs)) {
      var entityModel = new Drupal.quickedit.EntityModel({
        el: contextualLink.region,
        entityID: contextualLink.entityID,
        entityInstanceID: contextualLink.entityInstanceID,
        id: "".concat(contextualLink.entityID, "[").concat(contextualLink.entityInstanceID, "]"),
        label: Drupal.quickedit.metadata.get(contextualLink.entityID, 'label')
      });
      Drupal.quickedit.collections.entities.add(entityModel);
      var entityDecorationView = new Drupal.quickedit.EntityDecorationView({
        el: contextualLink.region,
        model: entityModel
      });
      entityModel.set('entityDecorationView', entityDecorationView);

      _.each(fields, function (field) {
        initializeField(field.el, field.fieldID, contextualLink.entityID, contextualLink.entityInstanceID);
      });

      fieldsAvailableQueue = _.difference(fieldsAvailableQueue, fields);

      var initContextualLink = _.once(function () {
        var $links = $(contextualLink.el).find('.contextual-links');
        var contextualLinkView = new Drupal.quickedit.ContextualLinkView($.extend({
          el: $('<li class="quickedit"><a href="" role="button" aria-pressed="false"></a></li>').prependTo($links),
          model: entityModel,
          appModel: Drupal.quickedit.app.model
        }, options));
        entityModel.set('contextualLinkView', contextualLinkView);
      });

      loadMissingEditors(initContextualLink);
      return true;
    }

    if (allMetadataExists(fieldIDs)) {
      return true;
    }

    return false;
  }

  function extractEntityID(fieldID) {
    return fieldID.split('/').slice(0, 2).join('/');
  }

  function processField(fieldElement) {
    var metadata = Drupal.quickedit.metadata;
    var fieldID = fieldElement.getAttribute('data-quickedit-field-id');
    var entityID = extractEntityID(fieldID);
    var entityElementSelector = "[data-quickedit-entity-id=\"".concat(entityID, "\"]");
    var $entityElement = $(entityElementSelector);

    if (!$entityElement.length) {
      throw new Error("Quick Edit could not associate the rendered entity field markup (with [data-quickedit-field-id=\"".concat(fieldID, "\"]) with the corresponding rendered entity markup: no parent DOM node found with [data-quickedit-entity-id=\"").concat(entityID, "\"]. This is typically caused by the theme's template for this entity type forgetting to print the attributes."));
    }

    var entityElement = $(fieldElement).closest($entityElement);

    if (entityElement.length === 0) {
      var $lowestCommonParent = $entityElement.parents().has(fieldElement).first();
      entityElement = $lowestCommonParent.find($entityElement);
    }

    var entityInstanceID = entityElement.get(0).getAttribute('data-quickedit-entity-instance-id');

    if (!metadata.has(fieldID)) {
      fieldsMetadataQueue.push({
        el: fieldElement,
        fieldID: fieldID,
        entityID: entityID,
        entityInstanceID: entityInstanceID
      });
      return;
    }

    if (metadata.get(fieldID, 'access') !== true) {
      return;
    }

    if (Drupal.quickedit.collections.entities.findWhere({
      entityID: entityID,
      entityInstanceID: entityInstanceID
    })) {
      initializeField(fieldElement, fieldID, entityID, entityInstanceID);
    } else {
        fieldsAvailableQueue.push({
          el: fieldElement,
          fieldID: fieldID,
          entityID: entityID,
          entityInstanceID: entityInstanceID
        });
      }
  }

  function deleteContainedModelsAndQueues($context) {
    $context.find('[data-quickedit-entity-id]').addBack('[data-quickedit-entity-id]').each(function (index, entityElement) {
      var entityModel = Drupal.quickedit.collections.entities.findWhere({
        el: entityElement
      });

      if (entityModel) {
        var contextualLinkView = entityModel.get('contextualLinkView');
        contextualLinkView.undelegateEvents();
        contextualLinkView.remove();
        entityModel.get('entityDecorationView').remove();
        entityModel.destroy();
      }

      function hasOtherRegion(contextualLink) {
        return contextualLink.region !== entityElement;
      }

      contextualLinksQueue = _.filter(contextualLinksQueue, hasOtherRegion);
    });
    $context.find('[data-quickedit-field-id]').addBack('[data-quickedit-field-id]').each(function (index, fieldElement) {
      Drupal.quickedit.collections.fields.chain().filter(function (fieldModel) {
        return fieldModel.get('el') === fieldElement;
      }).invoke('destroy');

      function hasOtherFieldElement(field) {
        return field.el !== fieldElement;
      }

      fieldsMetadataQueue = _.filter(fieldsMetadataQueue, hasOtherFieldElement);
      fieldsAvailableQueue = _.filter(fieldsAvailableQueue, hasOtherFieldElement);
    });
  }

  function fetchMissingMetadata(callback) {
    if (fieldsMetadataQueue.length) {
      var fieldIDs = _.pluck(fieldsMetadataQueue, 'fieldID');

      var fieldElementsWithoutMetadata = _.pluck(fieldsMetadataQueue, 'el');

      var entityIDs = _.uniq(_.pluck(fieldsMetadataQueue, 'entityID'), true);

      entityIDs = _.difference(entityIDs, Drupal.quickedit.metadata.intersection(entityIDs));
      fieldsMetadataQueue = [];
      $.ajax({
        url: Drupal.url('quickedit/metadata'),
        type: 'POST',
        data: {
          'fields[]': fieldIDs,
          'entities[]': entityIDs
        },
        dataType: 'json',
        success: function success(results) {
          _.each(results, function (fieldMetadata, fieldID) {
            Drupal.quickedit.metadata.add(fieldID, fieldMetadata);
          });

          callback(fieldElementsWithoutMetadata);
        }
      });
    }
  }

  Drupal.behaviors.quickedit = {
    attach: function attach(context) {
      $('body').once('quickedit-init').each(initQuickEdit);
      var $fields = $(context).find('[data-quickedit-field-id]').once('quickedit');

      if ($fields.length === 0) {
        return;
      }

      $(context).find('[data-quickedit-entity-id]').once('quickedit').each(function (index, entityElement) {
        processEntity(entityElement);
      });
      $fields.each(function (index, fieldElement) {
        processField(fieldElement);
      });
      contextualLinksQueue = _.filter(contextualLinksQueue, function (contextualLink) {
        return !initializeEntityContextualLink(contextualLink);
      });
      fetchMissingMetadata(function (fieldElementsWithFreshMetadata) {
        _.each(fieldElementsWithFreshMetadata, processField);

        contextualLinksQueue = _.filter(contextualLinksQueue, function (contextualLink) {
          return !initializeEntityContextualLink(contextualLink);
        });
      });
    },
    detach: function detach(context, settings, trigger) {
      if (trigger === 'unload') {
        deleteContainedModelsAndQueues($(context));
      }
    }
  };
  Drupal.quickedit = {
    app: null,
    collections: {
      entities: null,
      fields: null
    },
    editors: {},
    metadata: {
      has: function has(fieldID) {
        return storage.getItem(this._prefixFieldID(fieldID)) !== null;
      },
      add: function add(fieldID, metadata) {
        storage.setItem(this._prefixFieldID(fieldID), JSON.stringify(metadata));
      },
      get: function get(fieldID, key) {
        var metadata = JSON.parse(storage.getItem(this._prefixFieldID(fieldID)));
        return typeof key === 'undefined' ? metadata : metadata[key];
      },
      _prefixFieldID: function _prefixFieldID(fieldID) {
        return "Drupal.quickedit.metadata.".concat(fieldID);
      },
      _unprefixFieldID: function _unprefixFieldID(fieldID) {
        return fieldID.substring(26);
      },
      intersection: function intersection(fieldIDs) {
        var prefixedFieldIDs = _.map(fieldIDs, this._prefixFieldID);

        var intersection = _.intersection(prefixedFieldIDs, _.keys(sessionStorage));

        return _.map(intersection, this._unprefixFieldID);
      }
    }
  };

  var permissionsHashKey = Drupal.quickedit.metadata._prefixFieldID('permissionsHash');

  var permissionsHashValue = storage.getItem(permissionsHashKey);
  var permissionsHash = drupalSettings.user.permissionsHash;

  if (permissionsHashValue !== permissionsHash) {
    if (typeof permissionsHash === 'string') {
      _.chain(storage).keys().each(function (key) {
        if (key.substring(0, 26) === 'Drupal.quickedit.metadata.') {
          storage.removeItem(key);
        }
      });
    }

    storage.setItem(permissionsHashKey, permissionsHash);
  }

  $(document).on('drupalContextualLinkAdded', function (event, data) {
    if (data.$region.is('[data-quickedit-entity-id]')) {
      if (!data.$region.is('[data-quickedit-entity-instance-id]')) {
        data.$region.once('quickedit');
        processEntity(data.$region.get(0));
      }

      var contextualLink = {
        entityID: data.$region.attr('data-quickedit-entity-id'),
        entityInstanceID: data.$region.attr('data-quickedit-entity-instance-id'),
        el: data.$el[0],
        region: data.$region[0]
      };

      if (!initializeEntityContextualLink(contextualLink)) {
        contextualLinksQueue.push(contextualLink);
      }
    }
  });
})(jQuery, _, Backbone, Drupal, drupalSettings, window.JSON, window.sessionStorage);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, Drupal) {
  Drupal.quickedit.util = Drupal.quickedit.util || {};
  Drupal.quickedit.util.constants = {};
  Drupal.quickedit.util.constants.transitionEnd = 'transitionEnd.quickedit webkitTransitionEnd.quickedit transitionend.quickedit msTransitionEnd.quickedit oTransitionEnd.quickedit';

  Drupal.quickedit.util.buildUrl = function (id, urlFormat) {
    var parts = id.split('/');
    return Drupal.formatString(decodeURIComponent(urlFormat), {
      '!entity_type': parts[0],
      '!id': parts[1],
      '!field_name': parts[2],
      '!langcode': parts[3],
      '!view_mode': parts[4]
    });
  };

  Drupal.quickedit.util.networkErrorModal = function (title, message) {
    var $message = $("<div>".concat(message, "</div>"));
    var networkErrorModal = Drupal.dialog($message.get(0), {
      title: title,
      dialogClass: 'quickedit-network-error',
      buttons: [{
        text: Drupal.t('OK'),
        click: function click() {
          networkErrorModal.close();
        },
        primary: true
      }],
      create: function create() {
        $(this).parent().find('.ui-dialog-titlebar-close').remove();
      },
      close: function close(event) {
        $(event.target).remove();
      }
    });
    networkErrorModal.showModal();
  };

  Drupal.quickedit.util.form = {
    load: function load(options, callback) {
      var fieldID = options.fieldID;
      var formLoaderAjax = Drupal.ajax({
        url: Drupal.quickedit.util.buildUrl(fieldID, Drupal.url('quickedit/form/!entity_type/!id/!field_name/!langcode/!view_mode')),
        submit: {
          nocssjs: options.nocssjs,
          reset: options.reset
        },
        error: function error(xhr, url) {
          var fieldLabel = Drupal.quickedit.metadata.get(fieldID, 'label');
          var message = Drupal.t('Could not load the form for <q>@field-label</q>, either due to a website problem or a network connection problem.<br>Please try again.', {
            '@field-label': fieldLabel
          });
          Drupal.quickedit.util.networkErrorModal(Drupal.t('Network problem!'), message);
          var fieldModel = Drupal.quickedit.app.model.get('activeField');
          fieldModel.set('state', 'candidate');
        }
      });

      formLoaderAjax.commands.quickeditFieldForm = function (ajax, response, status) {
        callback(response.data, ajax);
        Drupal.ajax.instances[this.instanceIndex] = null;
      };

      formLoaderAjax.execute();
    },
    ajaxifySaving: function ajaxifySaving(options, $submit) {
      var settings = {
        url: $submit.closest('form').attr('action'),
        setClick: true,
        event: 'click.quickedit',
        progress: false,
        submit: {
          nocssjs: options.nocssjs,
          other_view_modes: options.other_view_modes
        },
        success: function success(response, status) {
          var _this = this;

          Object.keys(response || {}).forEach(function (i) {
            if (response[i].command && _this.commands[response[i].command]) {
              _this.commands[response[i].command](_this, response[i], status);
            }
          });
        },
        base: $submit.attr('id'),
        element: $submit[0]
      };
      return Drupal.ajax(settings);
    },
    unajaxifySaving: function unajaxifySaving(ajax) {
      $(ajax.element).off('click.quickedit');
    }
  };
})(jQuery, Drupal);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

(function (Drupal, Backbone) {
  Drupal.quickedit.BaseModel = Backbone.Model.extend({
    initialize: function initialize(options) {
      this.__initialized = true;
      return Backbone.Model.prototype.initialize.call(this, options);
    },
    set: function set(key, val, options) {
      if (this.__initialized) {
        if (_typeof(key) === 'object') {
          key.validate = true;
        } else {
          if (!options) {
            options = {};
          }

          options.validate = true;
        }
      }

      return Backbone.Model.prototype.set.call(this, key, val, options);
    }
  });
})(Drupal, Backbone);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function (Backbone, Drupal) {
  Drupal.quickedit.AppModel = Backbone.Model.extend({
    defaults: {
      highlightedField: null,
      activeField: null,
      activeModal: null
    }
  });
})(Backbone, Drupal);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function (_, $, Backbone, Drupal) {
  Drupal.quickedit.EntityModel = Drupal.quickedit.BaseModel.extend({
    defaults: {
      el: null,
      entityID: null,
      entityInstanceID: null,
      id: null,
      label: null,
      fields: null,
      isActive: false,
      inTempStore: false,
      isDirty: false,
      isCommitting: false,
      state: 'closed',
      fieldsInTempStore: [],
      reload: false
    },
    initialize: function initialize() {
      this.set('fields', new Drupal.quickedit.FieldCollection());
      this.listenTo(this, 'change:state', this.stateChange);
      this.listenTo(this.get('fields'), 'change:state', this.fieldStateChange);
      Drupal.quickedit.BaseModel.prototype.initialize.call(this);
    },
    stateChange: function stateChange(entityModel, state, options) {
      var to = state;

      switch (to) {
        case 'closed':
          this.set({
            isActive: false,
            inTempStore: false,
            isDirty: false
          });
          break;

        case 'launching':
          break;

        case 'opening':
          entityModel.get('fields').each(function (fieldModel) {
            fieldModel.set('state', 'candidate', options);
          });
          break;

        case 'opened':
          this.set('isActive', true);
          break;

        case 'committing':
          {
            var fields = this.get('fields');
            fields.chain().filter(function (fieldModel) {
              return _.intersection([fieldModel.get('state')], ['active']).length;
            }).each(function (fieldModel) {
              fieldModel.set('state', 'candidate');
            });
            fields.chain().filter(function (fieldModel) {
              return _.intersection([fieldModel.get('state')], Drupal.quickedit.app.changedFieldStates).length;
            }).each(function (fieldModel) {
              fieldModel.set('state', 'saving');
            });
            break;
          }

        case 'deactivating':
          {
            var changedFields = this.get('fields').filter(function (fieldModel) {
              return _.intersection([fieldModel.get('state')], ['changed', 'invalid']).length;
            });

            if ((changedFields.length || this.get('fieldsInTempStore').length) && !options.saved && !options.confirmed) {
              this.set('state', 'opened', {
                confirming: true
              });

              _.defer(function () {
                Drupal.quickedit.app.confirmEntityDeactivation(entityModel);
              });
            } else {
              var invalidFields = this.get('fields').filter(function (fieldModel) {
                return _.intersection([fieldModel.get('state')], ['invalid']).length;
              });
              entityModel.set('reload', this.get('fieldsInTempStore').length || invalidFields.length);
              entityModel.get('fields').each(function (fieldModel) {
                if (_.intersection([fieldModel.get('state')], ['candidate', 'highlighted']).length) {
                  fieldModel.trigger('change:state', fieldModel, fieldModel.get('state'), options);
                } else {
                  fieldModel.set('state', 'candidate', options);
                }
              });
            }

            break;
          }

        case 'closing':
          options.reason = 'stop';
          this.get('fields').each(function (fieldModel) {
            fieldModel.set({
              inTempStore: false,
              state: 'inactive'
            }, options);
          });
          break;
      }
    },
    _updateInTempStoreAttributes: function _updateInTempStoreAttributes(entityModel, fieldModel) {
      var current = fieldModel.get('state');
      var previous = fieldModel.previous('state');
      var fieldsInTempStore = entityModel.get('fieldsInTempStore');

      if (current === 'saved') {
        entityModel.set('inTempStore', true);
        fieldModel.set('inTempStore', true);
        fieldsInTempStore.push(fieldModel.get('fieldID'));
        fieldsInTempStore = _.uniq(fieldsInTempStore);
        entityModel.set('fieldsInTempStore', fieldsInTempStore);
      } else if (current === 'candidate' && previous === 'inactive') {
          fieldModel.set('inTempStore', _.intersection([fieldModel.get('fieldID')], fieldsInTempStore).length > 0);
        }
    },
    fieldStateChange: function fieldStateChange(fieldModel, state) {
      var entityModel = this;
      var fieldState = state;

      switch (this.get('state')) {
        case 'closed':
        case 'launching':
          break;

        case 'opening':
          _.defer(function () {
            entityModel.set('state', 'opened', {
              'accept-field-states': Drupal.quickedit.app.readyFieldStates
            });
          });

          break;

        case 'opened':
          if (fieldState === 'changed') {
            entityModel.set('isDirty', true);
          } else {
            this._updateInTempStoreAttributes(entityModel, fieldModel);
          }

          break;

        case 'committing':
          {
            if (fieldState === 'invalid') {
              _.defer(function () {
                entityModel.set('state', 'opened', {
                  reason: 'invalid'
                });
              });
            } else {
              this._updateInTempStoreAttributes(entityModel, fieldModel);
            }

            var options = {
              'accept-field-states': Drupal.quickedit.app.readyFieldStates
            };

            if (entityModel.set('isCommitting', true, options)) {
              entityModel.save({
                success: function success() {
                  entityModel.set({
                    state: 'deactivating',
                    isCommitting: false
                  }, {
                    saved: true
                  });
                },
                error: function error() {
                  entityModel.set('isCommitting', false);
                  entityModel.set('state', 'opened', {
                    reason: 'networkerror'
                  });
                  var message = Drupal.t('Your changes to <q>@entity-title</q> could not be saved, either due to a website problem or a network connection problem.<br>Please try again.', {
                    '@entity-title': entityModel.get('label')
                  });
                  Drupal.quickedit.util.networkErrorModal(Drupal.t('Network problem!'), message);
                }
              });
            }

            break;
          }

        case 'deactivating':
          _.defer(function () {
            entityModel.set('state', 'closing', {
              'accept-field-states': Drupal.quickedit.app.readyFieldStates
            });
          });

          break;

        case 'closing':
          _.defer(function () {
            entityModel.set('state', 'closed', {
              'accept-field-states': ['inactive']
            });
          });

          break;
      }
    },
    save: function save(options) {
      var entityModel = this;
      var entitySaverAjax = Drupal.ajax({
        url: Drupal.url("quickedit/entity/".concat(entityModel.get('entityID'))),
        error: function error() {
          options.error.call(entityModel);
        }
      });

      entitySaverAjax.commands.quickeditEntitySaved = function (ajax, response, status) {
        entityModel.get('fields').each(function (fieldModel) {
          fieldModel.set('inTempStore', false);
        });
        entityModel.set('inTempStore', false);
        entityModel.set('fieldsInTempStore', []);

        if (options.success) {
          options.success.call(entityModel);
        }
      };

      entitySaverAjax.execute();
    },
    validate: function validate(attrs, options) {
      var acceptedFieldStates = options['accept-field-states'] || [];
      var currentState = this.get('state');
      var nextState = attrs.state;

      if (currentState !== nextState) {
        if (_.indexOf(this.constructor.states, nextState) === -1) {
          return "\"".concat(nextState, "\" is an invalid state");
        }

        if (!this._acceptStateChange(currentState, nextState, options)) {
          return 'state change not accepted';
        }

        if (!this._fieldsHaveAcceptableStates(acceptedFieldStates)) {
          return 'state change not accepted because fields are not in acceptable state';
        }
      }

      var currentIsCommitting = this.get('isCommitting');
      var nextIsCommitting = attrs.isCommitting;

      if (currentIsCommitting === false && nextIsCommitting === true) {
        if (!this._fieldsHaveAcceptableStates(acceptedFieldStates)) {
          return 'isCommitting change not accepted because fields are not in acceptable state';
        }
      } else if (currentIsCommitting === true && nextIsCommitting === true) {
        return 'isCommitting is a mutex, hence only changes are allowed';
      }
    },
    _acceptStateChange: function _acceptStateChange(from, to, context) {
      var accept = true;

      if (!this.constructor.followsStateSequence(from, to)) {
        accept = false;

        if (from === 'closing' && to === 'closed') {
          accept = true;
        } else if (from === 'committing' && to === 'opened' && context.reason && (context.reason === 'invalid' || context.reason === 'networkerror')) {
            accept = true;
          } else if (from === 'deactivating' && to === 'opened' && context.confirming) {
              accept = true;
            } else if (from === 'opened' && to === 'deactivating' && context.confirmed) {
                accept = true;
              }
      }

      return accept;
    },
    _fieldsHaveAcceptableStates: function _fieldsHaveAcceptableStates(acceptedFieldStates) {
      var accept = true;

      if (acceptedFieldStates.length > 0) {
        var fieldStates = this.get('fields').pluck('state') || [];

        if (_.difference(fieldStates, acceptedFieldStates).length) {
          accept = false;
        }
      }

      return accept;
    },
    destroy: function destroy(options) {
      Drupal.quickedit.BaseModel.prototype.destroy.call(this, options);
      this.stopListening();
      this.get('fields').reset();
    },
    sync: function sync() {}
  }, {
    states: ['closed', 'launching', 'opening', 'opened', 'committing', 'deactivating', 'closing'],
    followsStateSequence: function followsStateSequence(from, to) {
      return _.indexOf(this.states, from) < _.indexOf(this.states, to);
    }
  });
  Drupal.quickedit.EntityCollection = Backbone.Collection.extend({
    model: Drupal.quickedit.EntityModel
  });
})(_, jQuery, Backbone, Drupal);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function (_, Backbone, Drupal) {
  Drupal.quickedit.FieldModel = Drupal.quickedit.BaseModel.extend({
    defaults: {
      el: null,
      fieldID: null,
      id: null,
      entity: null,
      metadata: null,
      acceptStateChange: null,
      logicalFieldID: null,
      state: 'inactive',
      isChanged: false,
      inTempStore: false,
      html: null,
      htmlForOtherViewModes: null
    },
    initialize: function initialize(options) {
      this.set('html', options.el.outerHTML);
      this.get('entity').get('fields').add(this);
      this.set('logicalFieldID', this.get('fieldID').split('/').slice(0, 4).join('/'));
      Drupal.quickedit.BaseModel.prototype.initialize.call(this, options);
    },
    destroy: function destroy(options) {
      if (this.get('state') !== 'inactive') {
        throw new Error('FieldModel cannot be destroyed if it is not inactive state.');
      }

      Drupal.quickedit.BaseModel.prototype.destroy.call(this, options);
    },
    sync: function sync() {},
    validate: function validate(attrs, options) {
      var current = this.get('state');
      var next = attrs.state;

      if (current !== next) {
        if (_.indexOf(this.constructor.states, next) === -1) {
          return "\"".concat(next, "\" is an invalid state");
        }

        if (!this.get('acceptStateChange')(current, next, options, this)) {
          return 'state change not accepted';
        }
      }
    },
    getEntityID: function getEntityID() {
      return this.get('fieldID').split('/').slice(0, 2).join('/');
    },
    getViewMode: function getViewMode() {
      return this.get('fieldID').split('/').pop();
    },
    findOtherViewModes: function findOtherViewModes() {
      var currentField = this;
      var otherViewModes = [];
      Drupal.quickedit.collections.fields.where({
        logicalFieldID: currentField.get('logicalFieldID')
      }).forEach(function (field) {
        if (field !== currentField && field.get('fieldID') !== currentField.get('fieldID')) {
          otherViewModes.push(field.getViewMode());
        }
      });
      return otherViewModes;
    }
  }, {
    states: ['inactive', 'candidate', 'highlighted', 'activating', 'active', 'changed', 'saving', 'saved', 'invalid'],
    followsStateSequence: function followsStateSequence(from, to) {
      return _.indexOf(this.states, from) < _.indexOf(this.states, to);
    }
  });
  Drupal.quickedit.FieldCollection = Backbone.Collection.extend({
    model: Drupal.quickedit.FieldModel
  });
})(_, Backbone, Drupal);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function (Backbone, Drupal) {
  Drupal.quickedit.EditorModel = Backbone.Model.extend({
    defaults: {
      originalValue: null,
      currentValue: null,
      validationErrors: null
    }
  });
})(Backbone, Drupal);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, _, Backbone, Drupal) {
  var reload = false;
  Drupal.quickedit.AppView = Backbone.View.extend({
    initialize: function initialize(options) {
      this.activeFieldStates = ['activating', 'active'];
      this.singleFieldStates = ['highlighted', 'activating', 'active'];
      this.changedFieldStates = ['changed', 'saving', 'saved', 'invalid'];
      this.readyFieldStates = ['candidate', 'highlighted'];
      this.listenTo(options.entitiesCollection, 'change:state', this.appStateChange);
      this.listenTo(options.entitiesCollection, 'change:isActive', this.enforceSingleActiveEntity);
      this.listenTo(options.fieldsCollection, 'change:state', this.editorStateChange);
      this.listenTo(options.fieldsCollection, 'change:html', this.renderUpdatedField);
      this.listenTo(options.fieldsCollection, 'change:html', this.propagateUpdatedField);
      this.listenTo(options.fieldsCollection, 'add', this.rerenderedFieldToCandidate);
      this.listenTo(options.fieldsCollection, 'destroy', this.teardownEditor);
    },
    appStateChange: function appStateChange(entityModel, state) {
      var app = this;
      var entityToolbarView;

      switch (state) {
        case 'launching':
          reload = false;
          entityToolbarView = new Drupal.quickedit.EntityToolbarView({
            model: entityModel,
            appModel: this.model
          });
          entityModel.toolbarView = entityToolbarView;
          entityModel.get('fields').each(function (fieldModel) {
            app.setupEditor(fieldModel);
          });

          _.defer(function () {
            entityModel.set('state', 'opening');
          });

          break;

        case 'closed':
          entityToolbarView = entityModel.toolbarView;
          entityModel.get('fields').each(function (fieldModel) {
            app.teardownEditor(fieldModel);
          });

          if (entityToolbarView) {
            entityToolbarView.remove();
            delete entityModel.toolbarView;
          }

          if (reload) {
            reload = false;
            window.location.reload();
          }

          break;
      }
    },
    acceptEditorStateChange: function acceptEditorStateChange(from, to, context, fieldModel) {
      var accept = true;

      if (context && (context.reason === 'stop' || context.reason === 'rerender')) {
        if (from === 'candidate' && to === 'inactive') {
          accept = true;
        }
      } else {
          if (!Drupal.quickedit.FieldModel.followsStateSequence(from, to)) {
            accept = false;

            if (_.indexOf(this.activeFieldStates, from) !== -1 && to === 'candidate') {
              accept = true;
            } else if ((from === 'changed' || from === 'invalid') && to === 'candidate') {
                accept = true;
              } else if (from === 'highlighted' && to === 'candidate') {
                  accept = true;
                } else if (from === 'saved' && to === 'candidate') {
                    accept = true;
                  } else if (from === 'invalid' && to === 'saving') {
                      accept = true;
                    } else if (from === 'invalid' && to === 'activating') {
                        accept = true;
                      }
          }

          if (accept) {
            var activeField;
            var activeFieldState;

            if ((this.readyFieldStates.indexOf(from) !== -1 || from === 'invalid') && this.activeFieldStates.indexOf(to) !== -1) {
              activeField = this.model.get('activeField');

              if (activeField && activeField !== fieldModel) {
                activeFieldState = activeField.get('state');

                if (this.activeFieldStates.indexOf(activeFieldState) !== -1) {
                  activeField.set('state', 'candidate');
                } else if (activeFieldState === 'changed' || activeFieldState === 'invalid') {
                  activeField.set('state', 'saving');
                }

                if (from === 'invalid') {
                  this.model.set('activeField', fieldModel);
                  accept = false;
                }
              }
            } else if (_.indexOf(this.activeFieldStates, from) !== -1 && to === 'candidate') {
                if (context && context.reason === 'mouseleave') {
                  accept = false;
                }
              } else if ((from === 'changed' || from === 'invalid') && to === 'candidate') {
                  if (context && context.reason === 'mouseleave') {
                    accept = false;
                  } else if (context && context.confirmed) {
                      accept = true;
                    }
                }
          }
        }

      return accept;
    },
    setupEditor: function setupEditor(fieldModel) {
      var entityModel = fieldModel.get('entity');
      var entityToolbarView = entityModel.toolbarView;
      var fieldToolbarRoot = entityToolbarView.getToolbarRoot();
      var editorName = fieldModel.get('metadata').editor;
      var editorModel = new Drupal.quickedit.EditorModel();
      var editorView = new Drupal.quickedit.editors[editorName]({
        el: $(fieldModel.get('el')),
        model: editorModel,
        fieldModel: fieldModel
      });
      var toolbarView = new Drupal.quickedit.FieldToolbarView({
        el: fieldToolbarRoot,
        model: fieldModel,
        $editedElement: $(editorView.getEditedElement()),
        editorView: editorView,
        entityModel: entityModel
      });
      var decorationView = new Drupal.quickedit.FieldDecorationView({
        el: $(editorView.getEditedElement()),
        model: fieldModel,
        editorView: editorView
      });
      fieldModel.editorView = editorView;
      fieldModel.toolbarView = toolbarView;
      fieldModel.decorationView = decorationView;
    },
    teardownEditor: function teardownEditor(fieldModel) {
      if (typeof fieldModel.editorView === 'undefined') {
        return;
      }

      fieldModel.toolbarView.remove();
      delete fieldModel.toolbarView;
      fieldModel.decorationView.remove();
      delete fieldModel.decorationView;
      fieldModel.editorView.remove();
      delete fieldModel.editorView;
    },
    confirmEntityDeactivation: function confirmEntityDeactivation(entityModel) {
      var that = this;
      var discardDialog;

      function closeDiscardDialog(action) {
        discardDialog.close(action);
        that.model.set('activeModal', null);

        if (action === 'save') {
          entityModel.set('state', 'committing', {
            confirmed: true
          });
        } else {
          entityModel.set('state', 'deactivating', {
            confirmed: true
          });

          if (entityModel.get('reload')) {
            reload = true;
            entityModel.set('reload', false);
          }
        }
      }

      if (!this.model.get('activeModal')) {
        var $unsavedChanges = $("<div>".concat(Drupal.t('You have unsaved changes'), "</div>"));
        discardDialog = Drupal.dialog($unsavedChanges.get(0), {
          title: Drupal.t('Discard changes?'),
          dialogClass: 'quickedit-discard-modal',
          resizable: false,
          buttons: [{
            text: Drupal.t('Save'),
            click: function click() {
              closeDiscardDialog('save');
            },
            primary: true
          }, {
            text: Drupal.t('Discard changes'),
            click: function click() {
              closeDiscardDialog('discard');
            }
          }],
          closeOnEscape: false,
          create: function create() {
            $(this).parent().find('.ui-dialog-titlebar-close').remove();
          },
          beforeClose: false,
          close: function close(event) {
            $(event.target).remove();
          }
        });
        this.model.set('activeModal', discardDialog);
        discardDialog.showModal();
      }
    },
    editorStateChange: function editorStateChange(fieldModel, state) {
      var from = fieldModel.previous('state');
      var to = state;

      if (_.indexOf(this.singleFieldStates, to) !== -1 && this.model.get('highlightedField') !== fieldModel) {
        this.model.set('highlightedField', fieldModel);
      } else if (this.model.get('highlightedField') === fieldModel && to === 'candidate') {
        this.model.set('highlightedField', null);
      }

      if (_.indexOf(this.activeFieldStates, to) !== -1 && this.model.get('activeField') !== fieldModel) {
        this.model.set('activeField', fieldModel);
      } else if (this.model.get('activeField') === fieldModel && to === 'candidate') {
        if (from === 'changed' || from === 'invalid') {
          fieldModel.editorView.revert();
        }

        this.model.set('activeField', null);
      }
    },
    renderUpdatedField: function renderUpdatedField(fieldModel, html, options) {
      var $fieldWrapper = $(fieldModel.get('el'));
      var $context = $fieldWrapper.parent();

      var renderField = function renderField() {
        fieldModel.destroy();
        $fieldWrapper.replaceWith(html);
        Drupal.attachBehaviors($context.get(0));
      };

      if (!options.propagation) {
        _.defer(function () {
          fieldModel.set('state', 'candidate');

          _.defer(function () {
            fieldModel.set('state', 'inactive', {
              reason: 'rerender'
            });
            renderField();
          });
        });
      } else {
        renderField();
      }
    },
    propagateUpdatedField: function propagateUpdatedField(updatedField, html, options) {
      if (options.propagation) {
        return;
      }

      var htmlForOtherViewModes = updatedField.get('htmlForOtherViewModes');
      Drupal.quickedit.collections.fields.where({
        logicalFieldID: updatedField.get('logicalFieldID')
      }).forEach(function (field) {
        if (field === updatedField) {} else if (field.getViewMode() === updatedField.getViewMode()) {
            field.set('html', updatedField.get('html'));
          } else if (field.getViewMode() in htmlForOtherViewModes) {
              field.set('html', htmlForOtherViewModes[field.getViewMode()], {
                propagation: true
              });
            }
      });
    },
    rerenderedFieldToCandidate: function rerenderedFieldToCandidate(fieldModel) {
      var activeEntity = Drupal.quickedit.collections.entities.findWhere({
        isActive: true
      });

      if (!activeEntity) {
        return;
      }

      if (fieldModel.get('entity') === activeEntity) {
        this.setupEditor(fieldModel);
        fieldModel.set('state', 'candidate');
      }
    },
    enforceSingleActiveEntity: function enforceSingleActiveEntity(changedEntityModel) {
      if (changedEntityModel.get('isActive') === false) {
        return;
      }

      changedEntityModel.collection.chain().filter(function (entityModel) {
        return entityModel.get('isActive') === true && entityModel !== changedEntityModel;
      }).each(function (entityModel) {
        entityModel.set('state', 'deactivating');
      });
    }
  });
})(jQuery, _, Backbone, Drupal);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, Backbone, Drupal) {
  Drupal.quickedit.FieldDecorationView = Backbone.View.extend({
    _widthAttributeIsEmpty: null,
    events: {
      'mouseenter.quickedit': 'onMouseEnter',
      'mouseleave.quickedit': 'onMouseLeave',
      click: 'onClick',
      'tabIn.quickedit': 'onMouseEnter',
      'tabOut.quickedit': 'onMouseLeave'
    },
    initialize: function initialize(options) {
      this.editorView = options.editorView;
      this.listenTo(this.model, 'change:state', this.stateChange);
      this.listenTo(this.model, 'change:isChanged change:inTempStore', this.renderChanged);
    },
    remove: function remove() {
      this.setElement();
      Backbone.View.prototype.remove.call(this);
    },
    stateChange: function stateChange(model, state) {
      var from = model.previous('state');
      var to = state;

      switch (to) {
        case 'inactive':
          this.undecorate();
          break;

        case 'candidate':
          this.decorate();

          if (from !== 'inactive') {
            this.stopHighlight();

            if (from !== 'highlighted') {
              this.model.set('isChanged', false);
              this.stopEdit();
            }
          }

          this._unpad();

          break;

        case 'highlighted':
          this.startHighlight();
          break;

        case 'activating':
          this.prepareEdit();
          break;

        case 'active':
          if (from !== 'activating') {
            this.prepareEdit();
          }

          if (this.editorView.getQuickEditUISettings().padding) {
            this._pad();
          }

          break;

        case 'changed':
          this.model.set('isChanged', true);
          break;

        case 'saving':
          break;

        case 'saved':
          break;

        case 'invalid':
          break;
      }
    },
    renderChanged: function renderChanged() {
      this.$el.toggleClass('quickedit-changed', this.model.get('isChanged') || this.model.get('inTempStore'));
    },
    onMouseEnter: function onMouseEnter(event) {
      var that = this;
      that.model.set('state', 'highlighted');
      event.stopPropagation();
    },
    onMouseLeave: function onMouseLeave(event) {
      var that = this;
      that.model.set('state', 'candidate', {
        reason: 'mouseleave'
      });
      event.stopPropagation();
    },
    onClick: function onClick(event) {
      this.model.set('state', 'activating');
      event.preventDefault();
      event.stopPropagation();
    },
    decorate: function decorate() {
      this.$el.addClass('quickedit-candidate quickedit-editable');
    },
    undecorate: function undecorate() {
      this.$el.removeClass('quickedit-candidate quickedit-editable quickedit-highlighted quickedit-editing');
    },
    startHighlight: function startHighlight() {
      var that = this;
      that.$el.addClass('quickedit-highlighted');
    },
    stopHighlight: function stopHighlight() {
      this.$el.removeClass('quickedit-highlighted');
    },
    prepareEdit: function prepareEdit() {
      this.$el.addClass('quickedit-editing');

      if (this.editorView.getQuickEditUISettings().popup) {
        this.$el.addClass('quickedit-editor-is-popup');
      }
    },
    stopEdit: function stopEdit() {
      this.$el.removeClass('quickedit-highlighted quickedit-editing');

      if (this.editorView.getQuickEditUISettings().popup) {
        this.$el.removeClass('quickedit-editor-is-popup');
      }

      $('.quickedit-candidate').addClass('quickedit-editable');
    },
    _pad: function _pad() {
      if (this.$el.data('quickedit-padded')) {
        return;
      }

      var self = this;

      if (this.$el[0].style.width === '') {
        this._widthAttributeIsEmpty = true;
        this.$el.addClass('quickedit-animate-disable-width').css('width', this.$el.width());
      }

      var posProp = this._getPositionProperties(this.$el);

      setTimeout(function () {
        self.$el.removeClass('quickedit-animate-disable-width');
        self.$el.css({
          position: 'relative',
          top: "".concat(posProp.top - 5, "px"),
          left: "".concat(posProp.left - 5, "px"),
          'padding-top': "".concat(posProp['padding-top'] + 5, "px"),
          'padding-left': "".concat(posProp['padding-left'] + 5, "px"),
          'padding-right': "".concat(posProp['padding-right'] + 5, "px"),
          'padding-bottom': "".concat(posProp['padding-bottom'] + 5, "px"),
          'margin-bottom': "".concat(posProp['margin-bottom'] - 10, "px")
        }).data('quickedit-padded', true);
      }, 0);
    },
    _unpad: function _unpad() {
      if (!this.$el.data('quickedit-padded')) {
        return;
      }

      var self = this;

      if (this._widthAttributeIsEmpty) {
        this.$el.addClass('quickedit-animate-disable-width').css('width', '');
      }

      var posProp = this._getPositionProperties(this.$el);

      setTimeout(function () {
        self.$el.removeClass('quickedit-animate-disable-width');
        self.$el.css({
          position: 'relative',
          top: "".concat(posProp.top + 5, "px"),
          left: "".concat(posProp.left + 5, "px"),
          'padding-top': "".concat(posProp['padding-top'] - 5, "px"),
          'padding-left': "".concat(posProp['padding-left'] - 5, "px"),
          'padding-right': "".concat(posProp['padding-right'] - 5, "px"),
          'padding-bottom': "".concat(posProp['padding-bottom'] - 5, "px"),
          'margin-bottom': "".concat(posProp['margin-bottom'] + 10, "px")
        });
      }, 0);
      this.$el.removeData('quickedit-padded');
    },
    _getPositionProperties: function _getPositionProperties($e) {
      var p;
      var r = {};
      var props = ['top', 'left', 'bottom', 'right', 'padding-top', 'padding-left', 'padding-right', 'padding-bottom', 'margin-bottom'];
      var propCount = props.length;

      for (var i = 0; i < propCount; i++) {
        p = props[i];
        r[p] = parseInt(this._replaceBlankPosition($e.css(p)), 10);
      }

      return r;
    },
    _replaceBlankPosition: function _replaceBlankPosition(pos) {
      if (pos === 'auto' || !pos) {
        pos = '0px';
      }

      return pos;
    }
  });
})(jQuery, Backbone, Drupal);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function (Drupal, $, Backbone) {
  Drupal.quickedit.EntityDecorationView = Backbone.View.extend({
    initialize: function initialize() {
      this.listenTo(this.model, 'change', this.render);
    },
    render: function render() {
      this.$el.toggleClass('quickedit-entity-active', this.model.get('isActive'));
    },
    remove: function remove() {
      this.setElement(null);
      Backbone.View.prototype.remove.call(this);
    }
  });
})(Drupal, jQuery, Backbone);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, _, Backbone, Drupal, debounce, Popper) {
  Drupal.quickedit.EntityToolbarView = Backbone.View.extend({
    _fieldToolbarRoot: null,
    events: function events() {
      var map = {
        'click button.action-save': 'onClickSave',
        'click button.action-cancel': 'onClickCancel',
        mouseenter: 'onMouseenter'
      };
      return map;
    },
    initialize: function initialize(options) {
      var that = this;
      this.appModel = options.appModel;
      this.$entity = $(this.model.get('el'));
      this.listenTo(this.model, 'change:isActive change:isDirty change:state', this.render);
      this.listenTo(this.appModel, 'change:highlightedField change:activeField', this.render);
      this.listenTo(this.model.get('fields'), 'change:state', this.fieldStateChange);
      $(window).on('resize.quickedit scroll.quickedit drupalViewportOffsetChange.quickedit', debounce($.proxy(this.windowChangeHandler, this), 150));
      $(document).on('drupalViewportOffsetChange.quickedit', function (event, offsets) {
        if (that.$fence) {
          that.$fence.css(offsets);
        }
      });
      var $toolbar = this.buildToolbarEl();
      this.setElement($toolbar);
      this._fieldToolbarRoot = $toolbar.find('.quickedit-toolbar-field').get(0);
      this.render();
    },
    render: function render() {
      if (this.model.get('isActive')) {
        var $body = $('body');

        if ($body.children('#quickedit-entity-toolbar').length === 0) {
          $body.append(this.$el);
        }

        if ($body.children('#quickedit-toolbar-fence').length === 0) {
          this.$fence = $(Drupal.theme('quickeditEntityToolbarFence')).css(Drupal.displace()).appendTo($body);
        }

        this.label();
        this.show('ops');
        this.position();
      }

      var $button = this.$el.find('.quickedit-button.action-save');
      var isDirty = this.model.get('isDirty');

      switch (this.model.get('state')) {
        case 'opened':
          $button.removeClass('action-saving icon-throbber icon-end').text(Drupal.t('Save')).removeAttr('disabled').attr('aria-hidden', !isDirty);
          break;

        case 'committing':
          $button.addClass('action-saving icon-throbber icon-end').text(Drupal.t('Saving')).attr('disabled', 'disabled');
          break;

        default:
          $button.attr('aria-hidden', true);
          break;
      }

      return this;
    },
    remove: function remove() {
      this.$fence.remove();
      $(window).off('resize.quickedit scroll.quickedit drupalViewportOffsetChange.quickedit');
      $(document).off('drupalViewportOffsetChange.quickedit');
      Backbone.View.prototype.remove.call(this);
    },
    windowChangeHandler: function windowChangeHandler(event) {
      this.position();
    },
    fieldStateChange: function fieldStateChange(model, state) {
      switch (state) {
        case 'active':
          this.render();
          break;

        case 'invalid':
          this.render();
          break;
      }
    },
    position: function position(element) {
      clearTimeout(this.timer);
      var that = this;
      var edge = document.documentElement.dir === 'rtl' ? 'right' : 'left';
      var delay = 0;
      var check = 0;
      var horizontalPadding = 0;
      var of;
      var activeField;
      var highlightedField;

      do {
        switch (check) {
          case 0:
            of = element;
            break;

          case 1:
            activeField = Drupal.quickedit.app.model.get('activeField');
            of = activeField && activeField.editorView && activeField.editorView.$formContainer && activeField.editorView.$formContainer.find('.quickedit-form');
            break;

          case 2:
            of = activeField && activeField.editorView && activeField.editorView.getEditedElement();

            if (activeField && activeField.editorView && activeField.editorView.getQuickEditUISettings().padding) {
              horizontalPadding = 5;
            }

            break;

          case 3:
            highlightedField = Drupal.quickedit.app.model.get('highlightedField');
            of = highlightedField && highlightedField.editorView && highlightedField.editorView.getEditedElement();
            delay = 250;
            break;

          default:
            {
              var fieldModels = this.model.get('fields').models;
              var topMostPosition = 1000000;
              var topMostField = null;

              for (var i = 0; i < fieldModels.length; i++) {
                var pos = fieldModels[i].get('el').getBoundingClientRect().top;

                if (pos < topMostPosition) {
                  topMostPosition = pos;
                  topMostField = fieldModels[i];
                }
              }

              of = topMostField.get('el');
              delay = 50;
              break;
            }
        }

        check++;
      } while (!of);

      function refinePopper(_ref) {
        var state = _ref.state;
        var isBelow = state.placement.split('-')[0] === 'bottom';
        var classListMethod = isBelow ? 'add' : 'remove';
        state.elements.popper.classList[classListMethod]('quickedit-toolbar-pointer-top');
      }

      function positionToolbar() {
        var popperElement = that.el;
        var referenceElement = of;
        var boundariesElement = that.$fence[0];
        var popperedge = edge === 'left' ? 'start' : 'end';

        if (referenceElement !== undefined) {
          if (!popperElement.classList.contains('js-popper-processed')) {
            that.popper = Popper.createPopper(referenceElement, popperElement, {
              placement: "top-".concat(popperedge),
              modifiers: [{
                name: 'flip',
                options: {
                  boundary: boundariesElement
                }
              }, {
                name: 'preventOverflow',
                options: {
                  boundary: boundariesElement,
                  tether: false,
                  altAxis: true,
                  padding: {
                    top: 5,
                    bottom: 5
                  }
                }
              }, {
                name: 'computeStyles',
                options: {
                  adaptive: false
                }
              }, {
                name: 'refinePopper',
                phase: 'write',
                enabled: true,
                fn: refinePopper
              }]
            });
            popperElement.classList.add('js-popper-processed');
          } else {
            that.popper.state.elements.reference = referenceElement[0] ? referenceElement[0] : referenceElement;
            that.popper.forceUpdate();
          }
        }

        that.$el.css({
          'max-width': document.documentElement.clientWidth < 450 ? document.documentElement.clientWidth : 450,
          'min-width': document.documentElement.clientWidth < 240 ? document.documentElement.clientWidth : 240,
          width: '100%'
        });
      }

      this.timer = setTimeout(function () {
        _.defer(positionToolbar);
      }, delay);
    },
    onClickSave: function onClickSave(event) {
      event.stopPropagation();
      event.preventDefault();
      this.model.set('state', 'committing');
    },
    onClickCancel: function onClickCancel(event) {
      event.preventDefault();
      this.model.set('state', 'deactivating');
    },
    onMouseenter: function onMouseenter(event) {
      clearTimeout(this.timer);
    },
    buildToolbarEl: function buildToolbarEl() {
      var $toolbar = $(Drupal.theme('quickeditEntityToolbar', {
        id: 'quickedit-entity-toolbar'
      }));
      $toolbar.find('.quickedit-toolbar-entity').prepend(Drupal.theme('quickeditToolgroup', {
        classes: ['ops'],
        buttons: [{
          label: Drupal.t('Save'),
          type: 'submit',
          classes: 'action-save quickedit-button icon',
          attributes: {
            'aria-hidden': true
          }
        }, {
          label: Drupal.t('Close'),
          classes: 'action-cancel quickedit-button icon icon-close icon-only'
        }]
      }));
      $toolbar.css({
        left: this.$entity.offset().left,
        top: this.$entity.offset().top
      });
      return $toolbar;
    },
    getToolbarRoot: function getToolbarRoot() {
      return this._fieldToolbarRoot;
    },
    label: function label() {
      var label = '';
      var entityLabel = this.model.get('label');
      var activeField = Drupal.quickedit.app.model.get('activeField');
      var activeFieldLabel = activeField && activeField.get('metadata').label;
      var highlightedField = Drupal.quickedit.app.model.get('highlightedField');
      var highlightedFieldLabel = highlightedField && highlightedField.get('metadata').label;

      if (activeFieldLabel) {
        label = Drupal.theme('quickeditEntityToolbarLabel', {
          entityLabel: entityLabel,
          fieldLabel: activeFieldLabel
        });
      } else if (highlightedFieldLabel) {
        label = Drupal.theme('quickeditEntityToolbarLabel', {
          entityLabel: entityLabel,
          fieldLabel: highlightedFieldLabel
        });
      } else {
        label = Drupal.checkPlain(entityLabel);
      }

      this.$el.find('.quickedit-toolbar-label').html(label);
    },
    addClass: function addClass(toolgroup, classes) {
      this._find(toolgroup).addClass(classes);
    },
    removeClass: function removeClass(toolgroup, classes) {
      this._find(toolgroup).removeClass(classes);
    },
    _find: function _find(toolgroup) {
      return this.$el.find(".quickedit-toolbar .quickedit-toolgroup.".concat(toolgroup));
    },
    show: function show(toolgroup) {
      this.$el.removeClass('quickedit-animate-invisible');
    }
  });
})(jQuery, _, Backbone, Drupal, Drupal.debounce, Popper);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, Backbone, Drupal) {
  Drupal.quickedit.ContextualLinkView = Backbone.View.extend({
    events: function events() {
      function touchEndToClick(event) {
        event.preventDefault();
        event.target.click();
      }

      return {
        'click a': function clickA(event) {
          event.preventDefault();
          this.model.set('state', 'launching');
        },
        'touchEnd a': touchEndToClick
      };
    },
    initialize: function initialize(options) {
      this.$el.find('a').text(options.strings.quickEdit);
      this.render();
      this.listenTo(this.model, 'change:isActive', this.render);
    },
    render: function render(entityModel, isActive) {
      this.$el.find('a').attr('aria-pressed', isActive);
      this.$el.closest('.contextual').toggle(!isActive);
      return this;
    }
  });
})(jQuery, Backbone, Drupal);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, _, Backbone, Drupal) {
  Drupal.quickedit.FieldToolbarView = Backbone.View.extend({
    $editedElement: null,
    editorView: null,
    _id: null,
    initialize: function initialize(options) {
      this.$editedElement = options.$editedElement;
      this.editorView = options.editorView;
      this.$root = this.$el;
      this._id = "quickedit-toolbar-for-".concat(this.model.id.replace(/[/[\]]/g, '_'));
      this.listenTo(this.model, 'change:state', this.stateChange);
    },
    render: function render() {
      this.setElement($(Drupal.theme('quickeditFieldToolbar', {
        id: this._id
      })));
      this.$el.prependTo(this.$root);
      return this;
    },
    stateChange: function stateChange(model, state) {
      var from = model.previous('state');
      var to = state;

      switch (to) {
        case 'inactive':
          break;

        case 'candidate':
          if (from !== 'inactive' && from !== 'highlighted') {
            this.$el.remove();
            this.setElement();
          }

          break;

        case 'highlighted':
          break;

        case 'activating':
          this.render();

          if (this.editorView.getQuickEditUISettings().fullWidthToolbar) {
            this.$el.addClass('quickedit-toolbar-fullwidth');
          }

          if (this.editorView.getQuickEditUISettings().unifiedToolbar) {
            this.insertWYSIWYGToolGroups();
          }

          break;

        case 'active':
          break;

        case 'changed':
          break;

        case 'saving':
          break;

        case 'saved':
          break;

        case 'invalid':
          break;
      }
    },
    insertWYSIWYGToolGroups: function insertWYSIWYGToolGroups() {
      this.$el.append(Drupal.theme('quickeditToolgroup', {
        id: this.getFloatedWysiwygToolgroupId(),
        classes: ['wysiwyg-floated', 'quickedit-animate-slow', 'quickedit-animate-invisible', 'quickedit-animate-delay-veryfast'],
        buttons: []
      })).append(Drupal.theme('quickeditToolgroup', {
        id: this.getMainWysiwygToolgroupId(),
        classes: ['wysiwyg-main', 'quickedit-animate-slow', 'quickedit-animate-invisible', 'quickedit-animate-delay-veryfast'],
        buttons: []
      }));
      this.show('wysiwyg-floated');
      this.show('wysiwyg-main');
    },
    getId: function getId() {
      return "quickedit-toolbar-for-".concat(this._id);
    },
    getFloatedWysiwygToolgroupId: function getFloatedWysiwygToolgroupId() {
      return "quickedit-wysiwyg-floated-toolgroup-for-".concat(this._id);
    },
    getMainWysiwygToolgroupId: function getMainWysiwygToolgroupId() {
      return "quickedit-wysiwyg-main-toolgroup-for-".concat(this._id);
    },
    _find: function _find(toolgroup) {
      return this.$el.find(".quickedit-toolgroup.".concat(toolgroup));
    },
    show: function show(toolgroup) {
      var $group = this._find(toolgroup);

      $group.on(Drupal.quickedit.util.constants.transitionEnd, function (event) {
        $group.off(Drupal.quickedit.util.constants.transitionEnd);
      });
      window.setTimeout(function () {
        $group.removeClass('quickedit-animate-invisible');
      }, 0);
    }
  });
})(jQuery, _, Backbone, Drupal);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, Backbone, Drupal) {
  Drupal.quickedit.EditorView = Backbone.View.extend({
    initialize: function initialize(options) {
      this.fieldModel = options.fieldModel;
      this.listenTo(this.fieldModel, 'change:state', this.stateChange);
    },
    remove: function remove() {
      this.setElement();
      Backbone.View.prototype.remove.call(this);
    },
    getEditedElement: function getEditedElement() {
      return this.$el;
    },
    getQuickEditUISettings: function getQuickEditUISettings() {
      return {
        padding: false,
        unifiedToolbar: false,
        fullWidthToolbar: false,
        popup: false
      };
    },
    stateChange: function stateChange(fieldModel, state) {
      var from = fieldModel.previous('state');
      var to = state;

      switch (to) {
        case 'inactive':
          break;

        case 'candidate':
          if (from === 'invalid') {
            this.removeValidationErrors();
          }

          break;

        case 'highlighted':
          break;

        case 'activating':
          {
            var loadDependencies = function loadDependencies(callback) {
              callback();
            };

            loadDependencies(function () {
              fieldModel.set('state', 'active');
            });
            break;
          }

        case 'active':
          break;

        case 'changed':
          break;

        case 'saving':
          if (from === 'invalid') {
            this.removeValidationErrors();
          }

          this.save();
          break;

        case 'saved':
          break;

        case 'invalid':
          this.showValidationErrors();
          break;
      }
    },
    revert: function revert() {},
    save: function save() {
      var fieldModel = this.fieldModel;
      var editorModel = this.model;
      var backstageId = "quickedit_backstage-".concat(this.fieldModel.id.replace(/[/[\]_\s]/g, '-'));

      function fillAndSubmitForm(value) {
        var $form = $("#".concat(backstageId)).find('form');
        $form.find(':input[type!="hidden"][type!="submit"]:not(select)').not('[name$="\\[summary\\]"]').val(value);
        $form.find('.quickedit-form-submit').trigger('click.quickedit');
      }

      var formOptions = {
        fieldID: this.fieldModel.get('fieldID'),
        $el: this.$el,
        nocssjs: true,
        other_view_modes: fieldModel.findOtherViewModes(),
        reset: !this.fieldModel.get('entity').get('inTempStore')
      };
      var self = this;
      Drupal.quickedit.util.form.load(formOptions, function (form, ajax) {
        var $backstage = $(Drupal.theme('quickeditBackstage', {
          id: backstageId
        })).appendTo('body');
        var $form = $(form).appendTo($backstage);
        $form.prop('novalidate', true);
        var $submit = $form.find('.quickedit-form-submit');
        self.formSaveAjax = Drupal.quickedit.util.form.ajaxifySaving(formOptions, $submit);

        function removeHiddenForm() {
          Drupal.quickedit.util.form.unajaxifySaving(self.formSaveAjax);
          delete self.formSaveAjax;
          $backstage.remove();
        }

        self.formSaveAjax.commands.quickeditFieldFormSaved = function (ajax, response, status) {
          removeHiddenForm();
          fieldModel.set('state', 'saved');
          fieldModel.set('htmlForOtherViewModes', response.other_view_modes);
          fieldModel.set('html', response.data);
        };

        self.formSaveAjax.commands.quickeditFieldFormValidationErrors = function (ajax, response, status) {
          removeHiddenForm();
          editorModel.set('validationErrors', response.data);
          fieldModel.set('state', 'invalid');
        };

        self.formSaveAjax.commands.quickeditFieldForm = function () {};

        fillAndSubmitForm(editorModel.get('currentValue'));
      });
    },
    showValidationErrors: function showValidationErrors() {
      var $errors = $('<div class="quickedit-validation-errors"></div>').append(this.model.get('validationErrors'));
      this.getEditedElement().addClass('quickedit-validation-error').after($errors);
    },
    removeValidationErrors: function removeValidationErrors() {
      this.getEditedElement().removeClass('quickedit-validation-error').next('.quickedit-validation-errors').remove();
    }
  });
})(jQuery, Backbone, Drupal);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, Drupal) {
  Drupal.theme.quickeditBackstage = function (settings) {
    var html = '';
    html += "<div id=\"".concat(settings.id, "\"></div>");
    return html;
  };

  Drupal.theme.quickeditEntityToolbar = function (settings) {
    var html = '';
    html += "<div id=\"".concat(settings.id, "\" class=\"quickedit quickedit-toolbar-container clearfix\">");
    html += '<i class="quickedit-toolbar-pointer"></i>';
    html += '<div class="quickedit-toolbar-content">';
    html += '<div class="quickedit-toolbar quickedit-toolbar-entity clearfix icon icon-pencil">';
    html += '<div class="quickedit-toolbar-label"></div>';
    html += '</div>';
    html += '<div class="quickedit-toolbar quickedit-toolbar-field clearfix"></div>';
    html += '</div><div class="quickedit-toolbar-lining"></div></div>';
    return html;
  };

  Drupal.theme.quickeditEntityToolbarLabel = function (settings) {
    return "<span class=\"field\">".concat(Drupal.checkPlain(settings.fieldLabel), "</span>").concat(Drupal.checkPlain(settings.entityLabel));
  };

  Drupal.theme.quickeditEntityToolbarFence = function () {
    return '<div id="quickedit-toolbar-fence"></div>';
  };

  Drupal.theme.quickeditFieldToolbar = function (settings) {
    return "<div id=\"".concat(settings.id, "\"></div>");
  };

  Drupal.theme.quickeditToolgroup = function (settings) {
    var classes = settings.classes || [];
    classes.unshift('quickedit-toolgroup');
    var html = '';
    html += "<div class=\"".concat(classes.join(' '), "\"");

    if (settings.id) {
      html += " id=\"".concat(settings.id, "\"");
    }

    html += '>';
    html += Drupal.theme('quickeditButtons', {
      buttons: settings.buttons
    });
    html += '</div>';
    return html;
  };

  Drupal.theme.quickeditButtons = function (settings) {
    var html = '';

    var _loop = function _loop(i) {
      var button = settings.buttons[i];

      if (!button.hasOwnProperty('type')) {
        button.type = 'button';
      }

      var attributes = [];
      var attrMap = settings.buttons[i].attributes || {};
      Object.keys(attrMap).forEach(function (attr) {
        attributes.push(attr + (attrMap[attr] ? "=\"".concat(attrMap[attr], "\"") : ''));
      });
      html += "<button type=\"".concat(button.type, "\" class=\"").concat(button.classes, "\" ").concat(attributes.join(' '), ">").concat(button.label, "</button>");
    };

    for (var i = 0; i < settings.buttons.length; i++) {
      _loop(i);
    }

    return html;
  };

  Drupal.theme.quickeditFormContainer = function (settings) {
    var html = '';
    html += "<div id=\"".concat(settings.id, "\" class=\"quickedit-form-container\">");
    html += '  <div class="quickedit-form">';
    html += '    <div class="placeholder">';
    html += settings.loadingMsg;
    html += '    </div>';
    html += '  </div>';
    html += '</div>';
    return html;
  };
})(jQuery, Drupal);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function (Drupal) {
  Drupal.theme.checkbox = function () {
    return '<input type="checkbox" class="form-checkbox form-boolean form-boolean--type-checkbox"/>';
  };
})(Drupal);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

if (window.NodeList && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = function (callback, thisArg) {
    thisArg = thisArg || window;

    for (var i = 0; i < this.length; i++) {
      callback.call(thisArg, this[i], i, this);
    }
  };
}

if (!Element.prototype.matches) {
  Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
};
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function (Drupal) {
  Drupal.olivero = {};

  function isDesktopNav() {
    var navButtons = document.querySelector('.mobile-buttons');
    return window.getComputedStyle(navButtons).getPropertyValue('display') === 'none';
  }

  Drupal.olivero.isDesktopNav = isDesktopNav;
  var wideNavButton = document.querySelector('.nav-primary__button');
  var siteHeaderFixable = document.querySelector('.site-header__fixable');

  function wideNavIsOpen() {
    return wideNavButton.getAttribute('aria-expanded') === 'true';
  }

  function showWideNav() {
    if (isDesktopNav()) {
      wideNavButton.setAttribute('aria-expanded', 'true');
      siteHeaderFixable.classList.add('is-expanded');
    }
  }

  function hideWideNav() {
    if (isDesktopNav()) {
      wideNavButton.setAttribute('aria-expanded', 'false');
      siteHeaderFixable.classList.remove('is-expanded');
    }
  }

  if ('IntersectionObserver' in window && 'IntersectionObserverEntry' in window && 'intersectionRatio' in window.IntersectionObserverEntry.prototype) {
    var fixableElements = document.querySelectorAll('.fixable');

    function toggleDesktopNavVisibility(entries) {
      if (!isDesktopNav()) return;
      entries.forEach(function (entry) {
        if (entry.intersectionRatio < 1) {
          fixableElements.forEach(function (el) {
            return el.classList.add('js-fixed');
          });
        } else {
          fixableElements.forEach(function (el) {
            return el.classList.remove('js-fixed');
          });
        }
      });
    }

    function getRootMargin() {
      var rootMarginTop = 72;
      var _document = document,
          body = _document.body;

      if (body.classList.contains('toolbar-fixed')) {
        rootMarginTop -= 39;
      }

      if (body.classList.contains('toolbar-horizontal') && body.classList.contains('toolbar-tray-open')) {
        rootMarginTop -= 40;
      }

      return "".concat(rootMarginTop, "px 0px 0px 0px");
    }

    function monitorNavPosition() {
      var primaryNav = document.querySelector('.site-header');
      var options = {
        rootMargin: getRootMargin(),
        threshold: [0.999, 1]
      };
      var observer = new IntersectionObserver(toggleDesktopNavVisibility, options);
      observer.observe(primaryNav);
    }

    wideNavButton.addEventListener('click', function () {
      if (!wideNavIsOpen()) {
        showWideNav();
      } else {
        hideWideNav();
      }
    });
    siteHeaderFixable.querySelector('.site-header__inner').addEventListener('focusin', showWideNav);
    document.querySelector('.skip-link').addEventListener('click', hideWideNav);
    monitorNavPosition();
  }

  document.addEventListener('keyup', function (e) {
    if (e.keyCode === 27) {
      if ('toggleSearchVisibility' in Drupal.olivero && 'searchIsVisible' in Drupal.olivero && Drupal.olivero.searchIsVisible()) {
        Drupal.olivero.toggleSearchVisibility(false);
      } else {
          hideWideNav();
        }
    }
  });
})(Drupal);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function (Drupal) {
  function isNavOpen(navWrapper) {
    return navWrapper.classList.contains('is-active');
  }

  function toggleNav(props, state) {
    var value = !!state;
    props.navButton.setAttribute('aria-expanded', value);

    if (value) {
      props.body.classList.add('js-overlay-active');
      props.body.classList.add('js-fixed');
      props.navWrapper.classList.add('is-active');
    } else {
      props.body.classList.remove('js-overlay-active');
      props.body.classList.remove('js-fixed');
      props.navWrapper.classList.remove('is-active');
    }
  }

  function init(props) {
    props.navButton.setAttribute('aria-controls', props.navWrapperId);
    props.navButton.setAttribute('aria-expanded', 'false');
    props.navButton.addEventListener('click', function () {
      toggleNav(props, !isNavOpen(props.navWrapper));
    });
    document.addEventListener('keyup', function (e) {
      if (e.key === 'Escape') {
        if (props.olivero.areAnySubNavsOpen()) {
          props.olivero.closeAllSubNav();
        } else {
          toggleNav(props, false);
        }
      }
    });
    props.overlay.addEventListener('click', function () {
      toggleNav(props, false);
    });
    props.overlay.addEventListener('touchstart', function () {
      toggleNav(props, false);
    });
    props.navWrapper.addEventListener('keydown', function (e) {
      if (e.key === 'Tab') {
        if (e.shiftKey) {
          if (document.activeElement === props.firstFocusableEl && !props.olivero.isDesktopNav()) {
            props.navButton.focus();
            e.preventDefault();
          }
        } else if (document.activeElement === props.lastFocusableEl && !props.olivero.isDesktopNav()) {
          props.navButton.focus();
          e.preventDefault();
        }
      }
    });
    window.addEventListener('resize', function () {
      if (props.olivero.isDesktopNav()) {
        toggleNav(props, false);
        props.body.classList.remove('js-overlay-active');
        props.body.classList.remove('js-fixed');
      }

      Drupal.olivero.closeAllSubNav();
    });
  }

  Drupal.behaviors.oliveroNavigation = {
    attach: function attach(context, settings) {
      var navWrapperId = 'header-nav';
      var navWrapper = context.querySelector("#".concat(navWrapperId, ":not(.").concat(navWrapperId, "-processed)"));

      if (navWrapper) {
        navWrapper.classList.add("".concat(navWrapperId, "-processed"));
        var olivero = Drupal.olivero;
        var navButton = context.querySelector('.mobile-nav-button');
        var body = context.querySelector('body');
        var overlay = context.querySelector('.overlay');
        var focusableNavElements = navWrapper.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
        var firstFocusableEl = focusableNavElements[0];
        var lastFocusableEl = focusableNavElements[focusableNavElements.length - 1];
        init({
          settings: settings,
          olivero: olivero,
          navWrapperId: navWrapperId,
          navWrapper: navWrapper,
          navButton: navButton,
          body: body,
          overlay: overlay,
          firstFocusableEl: firstFocusableEl,
          lastFocusableEl: lastFocusableEl
        });
      }
    }
  };
})(Drupal);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function (Drupal) {
  var isDesktopNav = Drupal.olivero.isDesktopNav;
  var secondLevelNavMenus = document.querySelectorAll('.primary-nav__menu-item--has-children');

  function toggleSubNav(topLevelMenuITem, toState) {
    var buttonSelector = '.primary-nav__button-toggle, .primary-nav__menu-link--button';
    var button = topLevelMenuITem.querySelector(buttonSelector);
    var state = toState !== undefined ? toState : button.getAttribute('aria-expanded') !== 'true';

    if (state) {
      if (isDesktopNav()) {
        secondLevelNavMenus.forEach(function (el) {
          el.querySelector(buttonSelector).setAttribute('aria-expanded', 'false');
          el.querySelector('.primary-nav__menu--level-2').classList.remove('is-active');
        });
      }

      button.setAttribute('aria-expanded', 'true');
      topLevelMenuITem.querySelector('.primary-nav__menu--level-2').classList.add('is-active');
    } else {
      button.setAttribute('aria-expanded', 'false');
      topLevelMenuITem.querySelector('.primary-nav__menu--level-2').classList.remove('is-active');
    }
  }

  Drupal.olivero.toggleSubNav = toggleSubNav;
  secondLevelNavMenus.forEach(function (el) {
    var button = el.querySelector('.primary-nav__button-toggle, .primary-nav__menu-link--button');
    button.removeAttribute('aria-hidden');
    button.removeAttribute('tabindex');
    button.addEventListener('click', function (e) {
      var topLevelMenuITem = e.currentTarget.parentNode;
      toggleSubNav(topLevelMenuITem);
    });
    el.addEventListener('mouseover', function (e) {
      if (isDesktopNav()) {
        toggleSubNav(e.currentTarget, true);
      }
    });
    el.addEventListener('mouseout', function (e) {
      if (isDesktopNav()) {
        toggleSubNav(e.currentTarget, false);
      }
    });
  });

  function closeAllSubNav() {
    secondLevelNavMenus.forEach(function (el) {
      toggleSubNav(el, false);
    });
  }

  Drupal.olivero.closeAllSubNav = closeAllSubNav;

  function areAnySubNavsOpen() {
    var subNavsAreOpen = false;
    secondLevelNavMenus.forEach(function (el) {
      var button = el.querySelector('.primary-nav__button-toggle');
      var state = button.getAttribute('aria-expanded') === 'true';

      if (state) {
        subNavsAreOpen = true;
      }
    });
    return subNavsAreOpen;
  }

  Drupal.olivero.areAnySubNavsOpen = areAnySubNavsOpen;
  document.addEventListener('keyup', function (e) {
    if (e.keyCode === 27 && isDesktopNav()) {
      closeAllSubNav();
    }
  });
})(Drupal);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function (Drupal, drupalSettings) {
  Drupal.behaviors.activeLinks = {
    attach: function attach(context) {
      var path = drupalSettings.path;
      var queryString = JSON.stringify(path.currentQuery);
      var querySelector = path.currentQuery ? "[data-drupal-link-query='".concat(queryString, "']") : ':not([data-drupal-link-query])';
      var originalSelectors = ["[data-drupal-link-system-path=\"".concat(path.currentPath, "\"]")];
      var selectors;

      if (path.isFront) {
        originalSelectors.push('[data-drupal-link-system-path="<front>"]');
      }

      selectors = [].concat(originalSelectors.map(function (selector) {
        return "".concat(selector, ":not([hreflang])");
      }), originalSelectors.map(function (selector) {
        return "".concat(selector, "[hreflang=\"").concat(path.currentLanguage, "\"]");
      }));
      selectors = selectors.map(function (current) {
        return current + querySelector;
      });
      var activeLinks = context.querySelectorAll(selectors.join(','));
      var il = activeLinks.length;

      for (var i = 0; i < il; i++) {
        activeLinks[i].classList.add('is-active');
      }
    },
    detach: function detach(context, settings, trigger) {
      if (trigger === 'unload') {
        var activeLinks = context.querySelectorAll('[data-drupal-link-system-path].is-active');
        var il = activeLinks.length;

        for (var i = 0; i < il; i++) {
          activeLinks[i].classList.remove('is-active');
        }
      }
    }
  };
})(Drupal, drupalSettings);;
/*! Sortable 1.10.2 - MIT | git://github.com/SortableJS/Sortable.git */
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t=t||self).Sortable=e()}(this,function(){"use strict";function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function a(){return(a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t}).apply(this,arguments)}function I(i){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},e=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(e=e.concat(Object.getOwnPropertySymbols(r).filter(function(t){return Object.getOwnPropertyDescriptor(r,t).enumerable}))),e.forEach(function(t){var e,n,o;e=i,o=r[n=t],n in e?Object.defineProperty(e,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[n]=o})}return i}function l(t,e){if(null==t)return{};var n,o,i=function(t,e){if(null==t)return{};var n,o,i={},r=Object.keys(t);for(o=0;o<r.length;o++)n=r[o],0<=e.indexOf(n)||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(o=0;o<r.length;o++)n=r[o],0<=e.indexOf(n)||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}function e(t){return function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function t(t){if("undefined"!=typeof window&&window.navigator)return!!navigator.userAgent.match(t)}var w=t(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i),E=t(/Edge/i),c=t(/firefox/i),s=t(/safari/i)&&!t(/chrome/i)&&!t(/android/i),n=t(/iP(ad|od|hone)/i),i=t(/chrome/i)&&t(/android/i),r={capture:!1,passive:!1};function u(t,e,n){t.addEventListener(e,n,!w&&r)}function d(t,e,n){t.removeEventListener(e,n,!w&&r)}function h(t,e){if(e){if(">"===e[0]&&(e=e.substring(1)),t)try{if(t.matches)return t.matches(e);if(t.msMatchesSelector)return t.msMatchesSelector(e);if(t.webkitMatchesSelector)return t.webkitMatchesSelector(e)}catch(t){return!1}return!1}}function P(t,e,n,o){if(t){n=n||document;do{if(null!=e&&(">"===e[0]?t.parentNode===n&&h(t,e):h(t,e))||o&&t===n)return t;if(t===n)break}while(t=(i=t).host&&i!==document&&i.host.nodeType?i.host:i.parentNode)}var i;return null}var f,p=/\s+/g;function k(t,e,n){if(t&&e)if(t.classList)t.classList[n?"add":"remove"](e);else{var o=(" "+t.className+" ").replace(p," ").replace(" "+e+" "," ");t.className=(o+(n?" "+e:"")).replace(p," ")}}function R(t,e,n){var o=t&&t.style;if(o){if(void 0===n)return document.defaultView&&document.defaultView.getComputedStyle?n=document.defaultView.getComputedStyle(t,""):t.currentStyle&&(n=t.currentStyle),void 0===e?n:n[e];e in o||-1!==e.indexOf("webkit")||(e="-webkit-"+e),o[e]=n+("string"==typeof n?"":"px")}}function v(t,e){var n="";if("string"==typeof t)n=t;else do{var o=R(t,"transform");o&&"none"!==o&&(n=o+" "+n)}while(!e&&(t=t.parentNode));var i=window.DOMMatrix||window.WebKitCSSMatrix||window.CSSMatrix||window.MSCSSMatrix;return i&&new i(n)}function g(t,e,n){if(t){var o=t.getElementsByTagName(e),i=0,r=o.length;if(n)for(;i<r;i++)n(o[i],i);return o}return[]}function N(){var t=document.scrollingElement;return t||document.documentElement}function X(t,e,n,o,i){if(t.getBoundingClientRect||t===window){var r,a,l,s,c,u,d;if(d=t!==window&&t!==N()?(a=(r=t.getBoundingClientRect()).top,l=r.left,s=r.bottom,c=r.right,u=r.height,r.width):(l=a=0,s=window.innerHeight,c=window.innerWidth,u=window.innerHeight,window.innerWidth),(e||n)&&t!==window&&(i=i||t.parentNode,!w))do{if(i&&i.getBoundingClientRect&&("none"!==R(i,"transform")||n&&"static"!==R(i,"position"))){var h=i.getBoundingClientRect();a-=h.top+parseInt(R(i,"border-top-width")),l-=h.left+parseInt(R(i,"border-left-width")),s=a+r.height,c=l+r.width;break}}while(i=i.parentNode);if(o&&t!==window){var f=v(i||t),p=f&&f.a,g=f&&f.d;f&&(s=(a/=g)+(u/=g),c=(l/=p)+(d/=p))}return{top:a,left:l,bottom:s,right:c,width:d,height:u}}}function Y(t,e,n){for(var o=H(t,!0),i=X(t)[e];o;){var r=X(o)[n];if(!("top"===n||"left"===n?r<=i:i<=r))return o;if(o===N())break;o=H(o,!1)}return!1}function m(t,e,n){for(var o=0,i=0,r=t.children;i<r.length;){if("none"!==r[i].style.display&&r[i]!==Rt.ghost&&r[i]!==Rt.dragged&&P(r[i],n.draggable,t,!1)){if(o===e)return r[i];o++}i++}return null}function B(t,e){for(var n=t.lastElementChild;n&&(n===Rt.ghost||"none"===R(n,"display")||e&&!h(n,e));)n=n.previousElementSibling;return n||null}function F(t,e){var n=0;if(!t||!t.parentNode)return-1;for(;t=t.previousElementSibling;)"TEMPLATE"===t.nodeName.toUpperCase()||t===Rt.clone||e&&!h(t,e)||n++;return n}function b(t){var e=0,n=0,o=N();if(t)do{var i=v(t),r=i.a,a=i.d;e+=t.scrollLeft*r,n+=t.scrollTop*a}while(t!==o&&(t=t.parentNode));return[e,n]}function H(t,e){if(!t||!t.getBoundingClientRect)return N();var n=t,o=!1;do{if(n.clientWidth<n.scrollWidth||n.clientHeight<n.scrollHeight){var i=R(n);if(n.clientWidth<n.scrollWidth&&("auto"==i.overflowX||"scroll"==i.overflowX)||n.clientHeight<n.scrollHeight&&("auto"==i.overflowY||"scroll"==i.overflowY)){if(!n.getBoundingClientRect||n===document.body)return N();if(o||e)return n;o=!0}}}while(n=n.parentNode);return N()}function y(t,e){return Math.round(t.top)===Math.round(e.top)&&Math.round(t.left)===Math.round(e.left)&&Math.round(t.height)===Math.round(e.height)&&Math.round(t.width)===Math.round(e.width)}function D(e,n){return function(){if(!f){var t=arguments;1===t.length?e.call(this,t[0]):e.apply(this,t),f=setTimeout(function(){f=void 0},n)}}}function L(t,e,n){t.scrollLeft+=e,t.scrollTop+=n}function S(t){var e=window.Polymer,n=window.jQuery||window.Zepto;return e&&e.dom?e.dom(t).cloneNode(!0):n?n(t).clone(!0)[0]:t.cloneNode(!0)}function _(t,e){R(t,"position","absolute"),R(t,"top",e.top),R(t,"left",e.left),R(t,"width",e.width),R(t,"height",e.height)}function C(t){R(t,"position",""),R(t,"top",""),R(t,"left",""),R(t,"width",""),R(t,"height","")}var j="Sortable"+(new Date).getTime();function T(){var e,o=[];return{captureAnimationState:function(){o=[],this.options.animation&&[].slice.call(this.el.children).forEach(function(t){if("none"!==R(t,"display")&&t!==Rt.ghost){o.push({target:t,rect:X(t)});var e=I({},o[o.length-1].rect);if(t.thisAnimationDuration){var n=v(t,!0);n&&(e.top-=n.f,e.left-=n.e)}t.fromRect=e}})},addAnimationState:function(t){o.push(t)},removeAnimationState:function(t){o.splice(function(t,e){for(var n in t)if(t.hasOwnProperty(n))for(var o in e)if(e.hasOwnProperty(o)&&e[o]===t[n][o])return Number(n);return-1}(o,{target:t}),1)},animateAll:function(t){var c=this;if(!this.options.animation)return clearTimeout(e),void("function"==typeof t&&t());var u=!1,d=0;o.forEach(function(t){var e=0,n=t.target,o=n.fromRect,i=X(n),r=n.prevFromRect,a=n.prevToRect,l=t.rect,s=v(n,!0);s&&(i.top-=s.f,i.left-=s.e),n.toRect=i,n.thisAnimationDuration&&y(r,i)&&!y(o,i)&&(l.top-i.top)/(l.left-i.left)==(o.top-i.top)/(o.left-i.left)&&(e=function(t,e,n,o){return Math.sqrt(Math.pow(e.top-t.top,2)+Math.pow(e.left-t.left,2))/Math.sqrt(Math.pow(e.top-n.top,2)+Math.pow(e.left-n.left,2))*o.animation}(l,r,a,c.options)),y(i,o)||(n.prevFromRect=o,n.prevToRect=i,e||(e=c.options.animation),c.animate(n,l,i,e)),e&&(u=!0,d=Math.max(d,e),clearTimeout(n.animationResetTimer),n.animationResetTimer=setTimeout(function(){n.animationTime=0,n.prevFromRect=null,n.fromRect=null,n.prevToRect=null,n.thisAnimationDuration=null},e),n.thisAnimationDuration=e)}),clearTimeout(e),u?e=setTimeout(function(){"function"==typeof t&&t()},d):"function"==typeof t&&t(),o=[]},animate:function(t,e,n,o){if(o){R(t,"transition",""),R(t,"transform","");var i=v(this.el),r=i&&i.a,a=i&&i.d,l=(e.left-n.left)/(r||1),s=(e.top-n.top)/(a||1);t.animatingX=!!l,t.animatingY=!!s,R(t,"transform","translate3d("+l+"px,"+s+"px,0)"),function(t){t.offsetWidth}(t),R(t,"transition","transform "+o+"ms"+(this.options.easing?" "+this.options.easing:"")),R(t,"transform","translate3d(0,0,0)"),"number"==typeof t.animated&&clearTimeout(t.animated),t.animated=setTimeout(function(){R(t,"transition",""),R(t,"transform",""),t.animated=!1,t.animatingX=!1,t.animatingY=!1},o)}}}}var x=[],M={initializeByDefault:!0},O={mount:function(t){for(var e in M)!M.hasOwnProperty(e)||e in t||(t[e]=M[e]);x.push(t)},pluginEvent:function(e,n,o){var t=this;this.eventCanceled=!1,o.cancel=function(){t.eventCanceled=!0};var i=e+"Global";x.forEach(function(t){n[t.pluginName]&&(n[t.pluginName][i]&&n[t.pluginName][i](I({sortable:n},o)),n.options[t.pluginName]&&n[t.pluginName][e]&&n[t.pluginName][e](I({sortable:n},o)))})},initializePlugins:function(o,i,r,t){for(var e in x.forEach(function(t){var e=t.pluginName;if(o.options[e]||t.initializeByDefault){var n=new t(o,i,o.options);n.sortable=o,n.options=o.options,o[e]=n,a(r,n.defaults)}}),o.options)if(o.options.hasOwnProperty(e)){var n=this.modifyOption(o,e,o.options[e]);void 0!==n&&(o.options[e]=n)}},getEventProperties:function(e,n){var o={};return x.forEach(function(t){"function"==typeof t.eventProperties&&a(o,t.eventProperties.call(n[t.pluginName],e))}),o},modifyOption:function(e,n,o){var i;return x.forEach(function(t){e[t.pluginName]&&t.optionListeners&&"function"==typeof t.optionListeners[n]&&(i=t.optionListeners[n].call(e[t.pluginName],o))}),i}};function A(t){var e=t.sortable,n=t.rootEl,o=t.name,i=t.targetEl,r=t.cloneEl,a=t.toEl,l=t.fromEl,s=t.oldIndex,c=t.newIndex,u=t.oldDraggableIndex,d=t.newDraggableIndex,h=t.originalEvent,f=t.putSortable,p=t.extraEventProperties;if(e=e||n&&n[j]){var g,v=e.options,m="on"+o.charAt(0).toUpperCase()+o.substr(1);!window.CustomEvent||w||E?(g=document.createEvent("Event")).initEvent(o,!0,!0):g=new CustomEvent(o,{bubbles:!0,cancelable:!0}),g.to=a||n,g.from=l||n,g.item=i||n,g.clone=r,g.oldIndex=s,g.newIndex=c,g.oldDraggableIndex=u,g.newDraggableIndex=d,g.originalEvent=h,g.pullMode=f?f.lastPutMode:void 0;var b=I({},p,O.getEventProperties(o,e));for(var y in b)g[y]=b[y];n&&n.dispatchEvent(g),v[m]&&v[m].call(e,g)}}function K(t,e,n){var o=2<arguments.length&&void 0!==n?n:{},i=o.evt,r=l(o,["evt"]);O.pluginEvent.bind(Rt)(t,e,I({dragEl:z,parentEl:G,ghostEl:U,rootEl:q,nextEl:V,lastDownEl:Z,cloneEl:Q,cloneHidden:$,dragStarted:dt,putSortable:it,activeSortable:Rt.active,originalEvent:i,oldIndex:J,oldDraggableIndex:et,newIndex:tt,newDraggableIndex:nt,hideGhostForTarget:Nt,unhideGhostForTarget:It,cloneNowHidden:function(){$=!0},cloneNowShown:function(){$=!1},dispatchSortableEvent:function(t){W({sortable:e,name:t,originalEvent:i})}},r))}function W(t){A(I({putSortable:it,cloneEl:Q,targetEl:z,rootEl:q,oldIndex:J,oldDraggableIndex:et,newIndex:tt,newDraggableIndex:nt},t))}var z,G,U,q,V,Z,Q,$,J,tt,et,nt,ot,it,rt,at,lt,st,ct,ut,dt,ht,ft,pt,gt,vt=!1,mt=!1,bt=[],yt=!1,wt=!1,Et=[],Dt=!1,St=[],_t="undefined"!=typeof document,Ct=n,Tt=E||w?"cssFloat":"float",xt=_t&&!i&&!n&&"draggable"in document.createElement("div"),Mt=function(){if(_t){if(w)return!1;var t=document.createElement("x");return t.style.cssText="pointer-events:auto","auto"===t.style.pointerEvents}}(),Ot=function(t,e){var n=R(t),o=parseInt(n.width)-parseInt(n.paddingLeft)-parseInt(n.paddingRight)-parseInt(n.borderLeftWidth)-parseInt(n.borderRightWidth),i=m(t,0,e),r=m(t,1,e),a=i&&R(i),l=r&&R(r),s=a&&parseInt(a.marginLeft)+parseInt(a.marginRight)+X(i).width,c=l&&parseInt(l.marginLeft)+parseInt(l.marginRight)+X(r).width;if("flex"===n.display)return"column"===n.flexDirection||"column-reverse"===n.flexDirection?"vertical":"horizontal";if("grid"===n.display)return n.gridTemplateColumns.split(" ").length<=1?"vertical":"horizontal";if(i&&a.float&&"none"!==a.float){var u="left"===a.float?"left":"right";return!r||"both"!==l.clear&&l.clear!==u?"horizontal":"vertical"}return i&&("block"===a.display||"flex"===a.display||"table"===a.display||"grid"===a.display||o<=s&&"none"===n[Tt]||r&&"none"===n[Tt]&&o<s+c)?"vertical":"horizontal"},At=function(t){function s(a,l){return function(t,e,n,o){var i=t.options.group.name&&e.options.group.name&&t.options.group.name===e.options.group.name;if(null==a&&(l||i))return!0;if(null==a||!1===a)return!1;if(l&&"clone"===a)return a;if("function"==typeof a)return s(a(t,e,n,o),l)(t,e,n,o);var r=(l?t:e).options.group.name;return!0===a||"string"==typeof a&&a===r||a.join&&-1<a.indexOf(r)}}var e={},n=t.group;n&&"object"==o(n)||(n={name:n}),e.name=n.name,e.checkPull=s(n.pull,!0),e.checkPut=s(n.put),e.revertClone=n.revertClone,t.group=e},Nt=function(){!Mt&&U&&R(U,"display","none")},It=function(){!Mt&&U&&R(U,"display","")};_t&&document.addEventListener("click",function(t){if(mt)return t.preventDefault(),t.stopPropagation&&t.stopPropagation(),t.stopImmediatePropagation&&t.stopImmediatePropagation(),mt=!1},!0);function Pt(t){if(z){var e=function(r,a){var l;return bt.some(function(t){if(!B(t)){var e=X(t),n=t[j].options.emptyInsertThreshold,o=r>=e.left-n&&r<=e.right+n,i=a>=e.top-n&&a<=e.bottom+n;return n&&o&&i?l=t:void 0}}),l}((t=t.touches?t.touches[0]:t).clientX,t.clientY);if(e){var n={};for(var o in t)t.hasOwnProperty(o)&&(n[o]=t[o]);n.target=n.rootEl=e,n.preventDefault=void 0,n.stopPropagation=void 0,e[j]._onDragOver(n)}}}function kt(t){z&&z.parentNode[j]._isOutsideThisEl(t.target)}function Rt(t,e){if(!t||!t.nodeType||1!==t.nodeType)throw"Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(t));this.el=t,this.options=e=a({},e),t[j]=this;var n={group:null,sort:!0,disabled:!1,store:null,handle:null,draggable:/^[uo]l$/i.test(t.nodeName)?">li":">*",swapThreshold:1,invertSwap:!1,invertedSwapThreshold:null,removeCloneOnHide:!0,direction:function(){return Ot(t,this.options)},ghostClass:"sortable-ghost",chosenClass:"sortable-chosen",dragClass:"sortable-drag",ignore:"a, img",filter:null,preventOnFilter:!0,animation:0,easing:null,setData:function(t,e){t.setData("Text",e.textContent)},dropBubble:!1,dragoverBubble:!1,dataIdAttr:"data-id",delay:0,delayOnTouchOnly:!1,touchStartThreshold:(Number.parseInt?Number:window).parseInt(window.devicePixelRatio,10)||1,forceFallback:!1,fallbackClass:"sortable-fallback",fallbackOnBody:!1,fallbackTolerance:0,fallbackOffset:{x:0,y:0},supportPointer:!1!==Rt.supportPointer&&"PointerEvent"in window,emptyInsertThreshold:5};for(var o in O.initializePlugins(this,t,n),n)o in e||(e[o]=n[o]);for(var i in At(e),this)"_"===i.charAt(0)&&"function"==typeof this[i]&&(this[i]=this[i].bind(this));this.nativeDraggable=!e.forceFallback&&xt,this.nativeDraggable&&(this.options.touchStartThreshold=1),e.supportPointer?u(t,"pointerdown",this._onTapStart):(u(t,"mousedown",this._onTapStart),u(t,"touchstart",this._onTapStart)),this.nativeDraggable&&(u(t,"dragover",this),u(t,"dragenter",this)),bt.push(this.el),e.store&&e.store.get&&this.sort(e.store.get(this)||[]),a(this,T())}function Xt(t,e,n,o,i,r,a,l){var s,c,u=t[j],d=u.options.onMove;return!window.CustomEvent||w||E?(s=document.createEvent("Event")).initEvent("move",!0,!0):s=new CustomEvent("move",{bubbles:!0,cancelable:!0}),s.to=e,s.from=t,s.dragged=n,s.draggedRect=o,s.related=i||e,s.relatedRect=r||X(e),s.willInsertAfter=l,s.originalEvent=a,t.dispatchEvent(s),d&&(c=d.call(u,s,a)),c}function Yt(t){t.draggable=!1}function Bt(){Dt=!1}function Ft(t){for(var e=t.tagName+t.className+t.src+t.href+t.textContent,n=e.length,o=0;n--;)o+=e.charCodeAt(n);return o.toString(36)}function Ht(t){return setTimeout(t,0)}function Lt(t){return clearTimeout(t)}Rt.prototype={constructor:Rt,_isOutsideThisEl:function(t){this.el.contains(t)||t===this.el||(ht=null)},_getDirection:function(t,e){return"function"==typeof this.options.direction?this.options.direction.call(this,t,e,z):this.options.direction},_onTapStart:function(e){if(e.cancelable){var n=this,o=this.el,t=this.options,i=t.preventOnFilter,r=e.type,a=e.touches&&e.touches[0]||e.pointerType&&"touch"===e.pointerType&&e,l=(a||e).target,s=e.target.shadowRoot&&(e.path&&e.path[0]||e.composedPath&&e.composedPath()[0])||l,c=t.filter;if(function(t){St.length=0;var e=t.getElementsByTagName("input"),n=e.length;for(;n--;){var o=e[n];o.checked&&St.push(o)}}(o),!z&&!(/mousedown|pointerdown/.test(r)&&0!==e.button||t.disabled||s.isContentEditable||(l=P(l,t.draggable,o,!1))&&l.animated||Z===l)){if(J=F(l),et=F(l,t.draggable),"function"==typeof c){if(c.call(this,e,l,this))return W({sortable:n,rootEl:s,name:"filter",targetEl:l,toEl:o,fromEl:o}),K("filter",n,{evt:e}),void(i&&e.cancelable&&e.preventDefault())}else if(c&&(c=c.split(",").some(function(t){if(t=P(s,t.trim(),o,!1))return W({sortable:n,rootEl:t,name:"filter",targetEl:l,fromEl:o,toEl:o}),K("filter",n,{evt:e}),!0})))return void(i&&e.cancelable&&e.preventDefault());t.handle&&!P(s,t.handle,o,!1)||this._prepareDragStart(e,a,l)}}},_prepareDragStart:function(t,e,n){var o,i=this,r=i.el,a=i.options,l=r.ownerDocument;if(n&&!z&&n.parentNode===r){var s=X(n);if(q=r,G=(z=n).parentNode,V=z.nextSibling,Z=n,ot=a.group,rt={target:Rt.dragged=z,clientX:(e||t).clientX,clientY:(e||t).clientY},ct=rt.clientX-s.left,ut=rt.clientY-s.top,this._lastX=(e||t).clientX,this._lastY=(e||t).clientY,z.style["will-change"]="all",o=function(){K("delayEnded",i,{evt:t}),Rt.eventCanceled?i._onDrop():(i._disableDelayedDragEvents(),!c&&i.nativeDraggable&&(z.draggable=!0),i._triggerDragStart(t,e),W({sortable:i,name:"choose",originalEvent:t}),k(z,a.chosenClass,!0))},a.ignore.split(",").forEach(function(t){g(z,t.trim(),Yt)}),u(l,"dragover",Pt),u(l,"mousemove",Pt),u(l,"touchmove",Pt),u(l,"mouseup",i._onDrop),u(l,"touchend",i._onDrop),u(l,"touchcancel",i._onDrop),c&&this.nativeDraggable&&(this.options.touchStartThreshold=4,z.draggable=!0),K("delayStart",this,{evt:t}),!a.delay||a.delayOnTouchOnly&&!e||this.nativeDraggable&&(E||w))o();else{if(Rt.eventCanceled)return void this._onDrop();u(l,"mouseup",i._disableDelayedDrag),u(l,"touchend",i._disableDelayedDrag),u(l,"touchcancel",i._disableDelayedDrag),u(l,"mousemove",i._delayedDragTouchMoveHandler),u(l,"touchmove",i._delayedDragTouchMoveHandler),a.supportPointer&&u(l,"pointermove",i._delayedDragTouchMoveHandler),i._dragStartTimer=setTimeout(o,a.delay)}}},_delayedDragTouchMoveHandler:function(t){var e=t.touches?t.touches[0]:t;Math.max(Math.abs(e.clientX-this._lastX),Math.abs(e.clientY-this._lastY))>=Math.floor(this.options.touchStartThreshold/(this.nativeDraggable&&window.devicePixelRatio||1))&&this._disableDelayedDrag()},_disableDelayedDrag:function(){z&&Yt(z),clearTimeout(this._dragStartTimer),this._disableDelayedDragEvents()},_disableDelayedDragEvents:function(){var t=this.el.ownerDocument;d(t,"mouseup",this._disableDelayedDrag),d(t,"touchend",this._disableDelayedDrag),d(t,"touchcancel",this._disableDelayedDrag),d(t,"mousemove",this._delayedDragTouchMoveHandler),d(t,"touchmove",this._delayedDragTouchMoveHandler),d(t,"pointermove",this._delayedDragTouchMoveHandler)},_triggerDragStart:function(t,e){e=e||"touch"==t.pointerType&&t,!this.nativeDraggable||e?this.options.supportPointer?u(document,"pointermove",this._onTouchMove):u(document,e?"touchmove":"mousemove",this._onTouchMove):(u(z,"dragend",this),u(q,"dragstart",this._onDragStart));try{document.selection?Ht(function(){document.selection.empty()}):window.getSelection().removeAllRanges()}catch(t){}},_dragStarted:function(t,e){if(vt=!1,q&&z){K("dragStarted",this,{evt:e}),this.nativeDraggable&&u(document,"dragover",kt);var n=this.options;t||k(z,n.dragClass,!1),k(z,n.ghostClass,!0),Rt.active=this,t&&this._appendGhost(),W({sortable:this,name:"start",originalEvent:e})}else this._nulling()},_emulateDragOver:function(){if(at){this._lastX=at.clientX,this._lastY=at.clientY,Nt();for(var t=document.elementFromPoint(at.clientX,at.clientY),e=t;t&&t.shadowRoot&&(t=t.shadowRoot.elementFromPoint(at.clientX,at.clientY))!==e;)e=t;if(z.parentNode[j]._isOutsideThisEl(t),e)do{if(e[j]){if(e[j]._onDragOver({clientX:at.clientX,clientY:at.clientY,target:t,rootEl:e})&&!this.options.dragoverBubble)break}t=e}while(e=e.parentNode);It()}},_onTouchMove:function(t){if(rt){var e=this.options,n=e.fallbackTolerance,o=e.fallbackOffset,i=t.touches?t.touches[0]:t,r=U&&v(U,!0),a=U&&r&&r.a,l=U&&r&&r.d,s=Ct&&gt&&b(gt),c=(i.clientX-rt.clientX+o.x)/(a||1)+(s?s[0]-Et[0]:0)/(a||1),u=(i.clientY-rt.clientY+o.y)/(l||1)+(s?s[1]-Et[1]:0)/(l||1);if(!Rt.active&&!vt){if(n&&Math.max(Math.abs(i.clientX-this._lastX),Math.abs(i.clientY-this._lastY))<n)return;this._onDragStart(t,!0)}if(U){r?(r.e+=c-(lt||0),r.f+=u-(st||0)):r={a:1,b:0,c:0,d:1,e:c,f:u};var d="matrix(".concat(r.a,",").concat(r.b,",").concat(r.c,",").concat(r.d,",").concat(r.e,",").concat(r.f,")");R(U,"webkitTransform",d),R(U,"mozTransform",d),R(U,"msTransform",d),R(U,"transform",d),lt=c,st=u,at=i}t.cancelable&&t.preventDefault()}},_appendGhost:function(){if(!U){var t=this.options.fallbackOnBody?document.body:q,e=X(z,!0,Ct,!0,t),n=this.options;if(Ct){for(gt=t;"static"===R(gt,"position")&&"none"===R(gt,"transform")&&gt!==document;)gt=gt.parentNode;gt!==document.body&&gt!==document.documentElement?(gt===document&&(gt=N()),e.top+=gt.scrollTop,e.left+=gt.scrollLeft):gt=N(),Et=b(gt)}k(U=z.cloneNode(!0),n.ghostClass,!1),k(U,n.fallbackClass,!0),k(U,n.dragClass,!0),R(U,"transition",""),R(U,"transform",""),R(U,"box-sizing","border-box"),R(U,"margin",0),R(U,"top",e.top),R(U,"left",e.left),R(U,"width",e.width),R(U,"height",e.height),R(U,"opacity","0.8"),R(U,"position",Ct?"absolute":"fixed"),R(U,"zIndex","100000"),R(U,"pointerEvents","none"),Rt.ghost=U,t.appendChild(U),R(U,"transform-origin",ct/parseInt(U.style.width)*100+"% "+ut/parseInt(U.style.height)*100+"%")}},_onDragStart:function(t,e){var n=this,o=t.dataTransfer,i=n.options;K("dragStart",this,{evt:t}),Rt.eventCanceled?this._onDrop():(K("setupClone",this),Rt.eventCanceled||((Q=S(z)).draggable=!1,Q.style["will-change"]="",this._hideClone(),k(Q,this.options.chosenClass,!1),Rt.clone=Q),n.cloneId=Ht(function(){K("clone",n),Rt.eventCanceled||(n.options.removeCloneOnHide||q.insertBefore(Q,z),n._hideClone(),W({sortable:n,name:"clone"}))}),e||k(z,i.dragClass,!0),e?(mt=!0,n._loopId=setInterval(n._emulateDragOver,50)):(d(document,"mouseup",n._onDrop),d(document,"touchend",n._onDrop),d(document,"touchcancel",n._onDrop),o&&(o.effectAllowed="move",i.setData&&i.setData.call(n,o,z)),u(document,"drop",n),R(z,"transform","translateZ(0)")),vt=!0,n._dragStartId=Ht(n._dragStarted.bind(n,e,t)),u(document,"selectstart",n),dt=!0,s&&R(document.body,"user-select","none"))},_onDragOver:function(n){var o,i,r,a,l=this.el,s=n.target,e=this.options,t=e.group,c=Rt.active,u=ot===t,d=e.sort,h=it||c,f=this,p=!1;if(!Dt){if(void 0!==n.preventDefault&&n.cancelable&&n.preventDefault(),s=P(s,e.draggable,l,!0),M("dragOver"),Rt.eventCanceled)return p;if(z.contains(n.target)||s.animated&&s.animatingX&&s.animatingY||f._ignoreWhileAnimating===s)return A(!1);if(mt=!1,c&&!e.disabled&&(u?d||(r=!q.contains(z)):it===this||(this.lastPutMode=ot.checkPull(this,c,z,n))&&t.checkPut(this,c,z,n))){if(a="vertical"===this._getDirection(n,s),o=X(z),M("dragOverValid"),Rt.eventCanceled)return p;if(r)return G=q,O(),this._hideClone(),M("revert"),Rt.eventCanceled||(V?q.insertBefore(z,V):q.appendChild(z)),A(!0);var g=B(l,e.draggable);if(!g||function(t,e,n){var o=X(B(n.el,n.options.draggable));return e?t.clientX>o.right+10||t.clientX<=o.right&&t.clientY>o.bottom&&t.clientX>=o.left:t.clientX>o.right&&t.clientY>o.top||t.clientX<=o.right&&t.clientY>o.bottom+10}(n,a,this)&&!g.animated){if(g===z)return A(!1);if(g&&l===n.target&&(s=g),s&&(i=X(s)),!1!==Xt(q,l,z,o,s,i,n,!!s))return O(),l.appendChild(z),G=l,N(),A(!0)}else if(s.parentNode===l){i=X(s);var v,m,b,y=z.parentNode!==l,w=!function(t,e,n){var o=n?t.left:t.top,i=n?t.right:t.bottom,r=n?t.width:t.height,a=n?e.left:e.top,l=n?e.right:e.bottom,s=n?e.width:e.height;return o===a||i===l||o+r/2===a+s/2}(z.animated&&z.toRect||o,s.animated&&s.toRect||i,a),E=a?"top":"left",D=Y(s,"top","top")||Y(z,"top","top"),S=D?D.scrollTop:void 0;if(ht!==s&&(m=i[E],yt=!1,wt=!w&&e.invertSwap||y),0!==(v=function(t,e,n,o,i,r,a,l){var s=o?t.clientY:t.clientX,c=o?n.height:n.width,u=o?n.top:n.left,d=o?n.bottom:n.right,h=!1;if(!a)if(l&&pt<c*i){if(!yt&&(1===ft?u+c*r/2<s:s<d-c*r/2)&&(yt=!0),yt)h=!0;else if(1===ft?s<u+pt:d-pt<s)return-ft}else if(u+c*(1-i)/2<s&&s<d-c*(1-i)/2)return function(t){return F(z)<F(t)?1:-1}(e);if((h=h||a)&&(s<u+c*r/2||d-c*r/2<s))return u+c/2<s?1:-1;return 0}(n,s,i,a,w?1:e.swapThreshold,null==e.invertedSwapThreshold?e.swapThreshold:e.invertedSwapThreshold,wt,ht===s)))for(var _=F(z);_-=v,(b=G.children[_])&&("none"===R(b,"display")||b===U););if(0===v||b===s)return A(!1);ft=v;var C=(ht=s).nextElementSibling,T=!1,x=Xt(q,l,z,o,s,i,n,T=1===v);if(!1!==x)return 1!==x&&-1!==x||(T=1===x),Dt=!0,setTimeout(Bt,30),O(),T&&!C?l.appendChild(z):s.parentNode.insertBefore(z,T?C:s),D&&L(D,0,S-D.scrollTop),G=z.parentNode,void 0===m||wt||(pt=Math.abs(m-X(s)[E])),N(),A(!0)}if(l.contains(z))return A(!1)}return!1}function M(t,e){K(t,f,I({evt:n,isOwner:u,axis:a?"vertical":"horizontal",revert:r,dragRect:o,targetRect:i,canSort:d,fromSortable:h,target:s,completed:A,onMove:function(t,e){return Xt(q,l,z,o,t,X(t),n,e)},changed:N},e))}function O(){M("dragOverAnimationCapture"),f.captureAnimationState(),f!==h&&h.captureAnimationState()}function A(t){return M("dragOverCompleted",{insertion:t}),t&&(u?c._hideClone():c._showClone(f),f!==h&&(k(z,it?it.options.ghostClass:c.options.ghostClass,!1),k(z,e.ghostClass,!0)),it!==f&&f!==Rt.active?it=f:f===Rt.active&&it&&(it=null),h===f&&(f._ignoreWhileAnimating=s),f.animateAll(function(){M("dragOverAnimationComplete"),f._ignoreWhileAnimating=null}),f!==h&&(h.animateAll(),h._ignoreWhileAnimating=null)),(s===z&&!z.animated||s===l&&!s.animated)&&(ht=null),e.dragoverBubble||n.rootEl||s===document||(z.parentNode[j]._isOutsideThisEl(n.target),t||Pt(n)),!e.dragoverBubble&&n.stopPropagation&&n.stopPropagation(),p=!0}function N(){tt=F(z),nt=F(z,e.draggable),W({sortable:f,name:"change",toEl:l,newIndex:tt,newDraggableIndex:nt,originalEvent:n})}},_ignoreWhileAnimating:null,_offMoveEvents:function(){d(document,"mousemove",this._onTouchMove),d(document,"touchmove",this._onTouchMove),d(document,"pointermove",this._onTouchMove),d(document,"dragover",Pt),d(document,"mousemove",Pt),d(document,"touchmove",Pt)},_offUpEvents:function(){var t=this.el.ownerDocument;d(t,"mouseup",this._onDrop),d(t,"touchend",this._onDrop),d(t,"pointerup",this._onDrop),d(t,"touchcancel",this._onDrop),d(document,"selectstart",this)},_onDrop:function(t){var e=this.el,n=this.options;tt=F(z),nt=F(z,n.draggable),K("drop",this,{evt:t}),G=z&&z.parentNode,tt=F(z),nt=F(z,n.draggable),Rt.eventCanceled||(yt=wt=vt=!1,clearInterval(this._loopId),clearTimeout(this._dragStartTimer),Lt(this.cloneId),Lt(this._dragStartId),this.nativeDraggable&&(d(document,"drop",this),d(e,"dragstart",this._onDragStart)),this._offMoveEvents(),this._offUpEvents(),s&&R(document.body,"user-select",""),R(z,"transform",""),t&&(dt&&(t.cancelable&&t.preventDefault(),n.dropBubble||t.stopPropagation()),U&&U.parentNode&&U.parentNode.removeChild(U),(q===G||it&&"clone"!==it.lastPutMode)&&Q&&Q.parentNode&&Q.parentNode.removeChild(Q),z&&(this.nativeDraggable&&d(z,"dragend",this),Yt(z),z.style["will-change"]="",dt&&!vt&&k(z,it?it.options.ghostClass:this.options.ghostClass,!1),k(z,this.options.chosenClass,!1),W({sortable:this,name:"unchoose",toEl:G,newIndex:null,newDraggableIndex:null,originalEvent:t}),q!==G?(0<=tt&&(W({rootEl:G,name:"add",toEl:G,fromEl:q,originalEvent:t}),W({sortable:this,name:"remove",toEl:G,originalEvent:t}),W({rootEl:G,name:"sort",toEl:G,fromEl:q,originalEvent:t}),W({sortable:this,name:"sort",toEl:G,originalEvent:t})),it&&it.save()):tt!==J&&0<=tt&&(W({sortable:this,name:"update",toEl:G,originalEvent:t}),W({sortable:this,name:"sort",toEl:G,originalEvent:t})),Rt.active&&(null!=tt&&-1!==tt||(tt=J,nt=et),W({sortable:this,name:"end",toEl:G,originalEvent:t}),this.save())))),this._nulling()},_nulling:function(){K("nulling",this),q=z=G=U=V=Q=Z=$=rt=at=dt=tt=nt=J=et=ht=ft=it=ot=Rt.dragged=Rt.ghost=Rt.clone=Rt.active=null,St.forEach(function(t){t.checked=!0}),St.length=lt=st=0},handleEvent:function(t){switch(t.type){case"drop":case"dragend":this._onDrop(t);break;case"dragenter":case"dragover":z&&(this._onDragOver(t),function(t){t.dataTransfer&&(t.dataTransfer.dropEffect="move");t.cancelable&&t.preventDefault()}(t));break;case"selectstart":t.preventDefault()}},toArray:function(){for(var t,e=[],n=this.el.children,o=0,i=n.length,r=this.options;o<i;o++)P(t=n[o],r.draggable,this.el,!1)&&e.push(t.getAttribute(r.dataIdAttr)||Ft(t));return e},sort:function(t){var o={},i=this.el;this.toArray().forEach(function(t,e){var n=i.children[e];P(n,this.options.draggable,i,!1)&&(o[t]=n)},this),t.forEach(function(t){o[t]&&(i.removeChild(o[t]),i.appendChild(o[t]))})},save:function(){var t=this.options.store;t&&t.set&&t.set(this)},closest:function(t,e){return P(t,e||this.options.draggable,this.el,!1)},option:function(t,e){var n=this.options;if(void 0===e)return n[t];var o=O.modifyOption(this,t,e);n[t]=void 0!==o?o:e,"group"===t&&At(n)},destroy:function(){K("destroy",this);var t=this.el;t[j]=null,d(t,"mousedown",this._onTapStart),d(t,"touchstart",this._onTapStart),d(t,"pointerdown",this._onTapStart),this.nativeDraggable&&(d(t,"dragover",this),d(t,"dragenter",this)),Array.prototype.forEach.call(t.querySelectorAll("[draggable]"),function(t){t.removeAttribute("draggable")}),this._onDrop(),this._disableDelayedDragEvents(),bt.splice(bt.indexOf(this.el),1),this.el=t=null},_hideClone:function(){if(!$){if(K("hideClone",this),Rt.eventCanceled)return;R(Q,"display","none"),this.options.removeCloneOnHide&&Q.parentNode&&Q.parentNode.removeChild(Q),$=!0}},_showClone:function(t){if("clone"===t.lastPutMode){if($){if(K("showClone",this),Rt.eventCanceled)return;q.contains(z)&&!this.options.group.revertClone?q.insertBefore(Q,z):V?q.insertBefore(Q,V):q.appendChild(Q),this.options.group.revertClone&&this.animate(z,Q),R(Q,"display",""),$=!1}}else this._hideClone()}},_t&&u(document,"touchmove",function(t){(Rt.active||vt)&&t.cancelable&&t.preventDefault()}),Rt.utils={on:u,off:d,css:R,find:g,is:function(t,e){return!!P(t,e,t,!1)},extend:function(t,e){if(t&&e)for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n]);return t},throttle:D,closest:P,toggleClass:k,clone:S,index:F,nextTick:Ht,cancelNextTick:Lt,detectDirection:Ot,getChild:m},Rt.get=function(t){return t[j]},Rt.mount=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];e[0].constructor===Array&&(e=e[0]),e.forEach(function(t){if(!t.prototype||!t.prototype.constructor)throw"Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(t));t.utils&&(Rt.utils=I({},Rt.utils,t.utils)),O.mount(t)})},Rt.create=function(t,e){return new Rt(t,e)};var jt,Kt,Wt,zt,Gt,Ut,qt=[],Vt=!(Rt.version="1.10.2");function Zt(){qt.forEach(function(t){clearInterval(t.pid)}),qt=[]}function Qt(){clearInterval(Ut)}function $t(t){var e=t.originalEvent,n=t.putSortable,o=t.dragEl,i=t.activeSortable,r=t.dispatchSortableEvent,a=t.hideGhostForTarget,l=t.unhideGhostForTarget;if(e){var s=n||i;a();var c=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:e,u=document.elementFromPoint(c.clientX,c.clientY);l(),s&&!s.el.contains(u)&&(r("spill"),this.onSpill({dragEl:o,putSortable:n}))}}var Jt,te=D(function(n,t,e,o){if(t.scroll){var i,r=(n.touches?n.touches[0]:n).clientX,a=(n.touches?n.touches[0]:n).clientY,l=t.scrollSensitivity,s=t.scrollSpeed,c=N(),u=!1;Kt!==e&&(Kt=e,Zt(),jt=t.scroll,i=t.scrollFn,!0===jt&&(jt=H(e,!0)));var d=0,h=jt;do{var f=h,p=X(f),g=p.top,v=p.bottom,m=p.left,b=p.right,y=p.width,w=p.height,E=void 0,D=void 0,S=f.scrollWidth,_=f.scrollHeight,C=R(f),T=f.scrollLeft,x=f.scrollTop;D=f===c?(E=y<S&&("auto"===C.overflowX||"scroll"===C.overflowX||"visible"===C.overflowX),w<_&&("auto"===C.overflowY||"scroll"===C.overflowY||"visible"===C.overflowY)):(E=y<S&&("auto"===C.overflowX||"scroll"===C.overflowX),w<_&&("auto"===C.overflowY||"scroll"===C.overflowY));var M=E&&(Math.abs(b-r)<=l&&T+y<S)-(Math.abs(m-r)<=l&&!!T),O=D&&(Math.abs(v-a)<=l&&x+w<_)-(Math.abs(g-a)<=l&&!!x);if(!qt[d])for(var A=0;A<=d;A++)qt[A]||(qt[A]={});qt[d].vx==M&&qt[d].vy==O&&qt[d].el===f||(qt[d].el=f,qt[d].vx=M,qt[d].vy=O,clearInterval(qt[d].pid),0==M&&0==O||(u=!0,qt[d].pid=setInterval(function(){o&&0===this.layer&&Rt.active._onTouchMove(Gt);var t=qt[this.layer].vy?qt[this.layer].vy*s:0,e=qt[this.layer].vx?qt[this.layer].vx*s:0;"function"==typeof i&&"continue"!==i.call(Rt.dragged.parentNode[j],e,t,n,Gt,qt[this.layer].el)||L(qt[this.layer].el,e,t)}.bind({layer:d}),24))),d++}while(t.bubbleScroll&&h!==c&&(h=H(h,!1)));Vt=u}},30);function ee(){}function ne(){}ee.prototype={startIndex:null,dragStart:function(t){var e=t.oldDraggableIndex;this.startIndex=e},onSpill:function(t){var e=t.dragEl,n=t.putSortable;this.sortable.captureAnimationState(),n&&n.captureAnimationState();var o=m(this.sortable.el,this.startIndex,this.options);o?this.sortable.el.insertBefore(e,o):this.sortable.el.appendChild(e),this.sortable.animateAll(),n&&n.animateAll()},drop:$t},a(ee,{pluginName:"revertOnSpill"}),ne.prototype={onSpill:function(t){var e=t.dragEl,n=t.putSortable||this.sortable;n.captureAnimationState(),e.parentNode&&e.parentNode.removeChild(e),n.animateAll()},drop:$t},a(ne,{pluginName:"removeOnSpill"});var oe,ie,re,ae,le,se=[],ce=[],ue=!1,de=!1,he=!1;function fe(o,i){ce.forEach(function(t,e){var n=i.children[t.sortableIndex+(o?Number(e):0)];n?i.insertBefore(t,n):i.appendChild(t)})}function pe(){se.forEach(function(t){t!==re&&t.parentNode&&t.parentNode.removeChild(t)})}return Rt.mount(new function(){function t(){for(var t in this.defaults={scroll:!0,scrollSensitivity:30,scrollSpeed:10,bubbleScroll:!0},this)"_"===t.charAt(0)&&"function"==typeof this[t]&&(this[t]=this[t].bind(this))}return t.prototype={dragStarted:function(t){var e=t.originalEvent;this.sortable.nativeDraggable?u(document,"dragover",this._handleAutoScroll):this.options.supportPointer?u(document,"pointermove",this._handleFallbackAutoScroll):e.touches?u(document,"touchmove",this._handleFallbackAutoScroll):u(document,"mousemove",this._handleFallbackAutoScroll)},dragOverCompleted:function(t){var e=t.originalEvent;this.options.dragOverBubble||e.rootEl||this._handleAutoScroll(e)},drop:function(){this.sortable.nativeDraggable?d(document,"dragover",this._handleAutoScroll):(d(document,"pointermove",this._handleFallbackAutoScroll),d(document,"touchmove",this._handleFallbackAutoScroll),d(document,"mousemove",this._handleFallbackAutoScroll)),Qt(),Zt(),clearTimeout(f),f=void 0},nulling:function(){Gt=Kt=jt=Vt=Ut=Wt=zt=null,qt.length=0},_handleFallbackAutoScroll:function(t){this._handleAutoScroll(t,!0)},_handleAutoScroll:function(e,n){var o=this,i=(e.touches?e.touches[0]:e).clientX,r=(e.touches?e.touches[0]:e).clientY,t=document.elementFromPoint(i,r);if(Gt=e,n||E||w||s){te(e,this.options,t,n);var a=H(t,!0);!Vt||Ut&&i===Wt&&r===zt||(Ut&&Qt(),Ut=setInterval(function(){var t=H(document.elementFromPoint(i,r),!0);t!==a&&(a=t,Zt()),te(e,o.options,t,n)},10),Wt=i,zt=r)}else{if(!this.options.bubbleScroll||H(t,!0)===N())return void Zt();te(e,this.options,H(t,!1),!1)}}},a(t,{pluginName:"scroll",initializeByDefault:!0})}),Rt.mount(ne,ee),Rt.mount(new function(){function t(){this.defaults={swapClass:"sortable-swap-highlight"}}return t.prototype={dragStart:function(t){var e=t.dragEl;Jt=e},dragOverValid:function(t){var e=t.completed,n=t.target,o=t.onMove,i=t.activeSortable,r=t.changed,a=t.cancel;if(i.options.swap){var l=this.sortable.el,s=this.options;if(n&&n!==l){var c=Jt;Jt=!1!==o(n)?(k(n,s.swapClass,!0),n):null,c&&c!==Jt&&k(c,s.swapClass,!1)}r(),e(!0),a()}},drop:function(t){var e=t.activeSortable,n=t.putSortable,o=t.dragEl,i=n||this.sortable,r=this.options;Jt&&k(Jt,r.swapClass,!1),Jt&&(r.swap||n&&n.options.swap)&&o!==Jt&&(i.captureAnimationState(),i!==e&&e.captureAnimationState(),function(t,e){var n,o,i=t.parentNode,r=e.parentNode;if(!i||!r||i.isEqualNode(e)||r.isEqualNode(t))return;n=F(t),o=F(e),i.isEqualNode(r)&&n<o&&o++;i.insertBefore(e,i.children[n]),r.insertBefore(t,r.children[o])}(o,Jt),i.animateAll(),i!==e&&e.animateAll())},nulling:function(){Jt=null}},a(t,{pluginName:"swap",eventProperties:function(){return{swapItem:Jt}}})}),Rt.mount(new function(){function t(o){for(var t in this)"_"===t.charAt(0)&&"function"==typeof this[t]&&(this[t]=this[t].bind(this));o.options.supportPointer?u(document,"pointerup",this._deselectMultiDrag):(u(document,"mouseup",this._deselectMultiDrag),u(document,"touchend",this._deselectMultiDrag)),u(document,"keydown",this._checkKeyDown),u(document,"keyup",this._checkKeyUp),this.defaults={selectedClass:"sortable-selected",multiDragKey:null,setData:function(t,e){var n="";se.length&&ie===o?se.forEach(function(t,e){n+=(e?", ":"")+t.textContent}):n=e.textContent,t.setData("Text",n)}}}return t.prototype={multiDragKeyDown:!1,isMultiDrag:!1,delayStartGlobal:function(t){var e=t.dragEl;re=e},delayEnded:function(){this.isMultiDrag=~se.indexOf(re)},setupClone:function(t){var e=t.sortable,n=t.cancel;if(this.isMultiDrag){for(var o=0;o<se.length;o++)ce.push(S(se[o])),ce[o].sortableIndex=se[o].sortableIndex,ce[o].draggable=!1,ce[o].style["will-change"]="",k(ce[o],this.options.selectedClass,!1),se[o]===re&&k(ce[o],this.options.chosenClass,!1);e._hideClone(),n()}},clone:function(t){var e=t.sortable,n=t.rootEl,o=t.dispatchSortableEvent,i=t.cancel;this.isMultiDrag&&(this.options.removeCloneOnHide||se.length&&ie===e&&(fe(!0,n),o("clone"),i()))},showClone:function(t){var e=t.cloneNowShown,n=t.rootEl,o=t.cancel;this.isMultiDrag&&(fe(!1,n),ce.forEach(function(t){R(t,"display","")}),e(),le=!1,o())},hideClone:function(t){var e=this,n=(t.sortable,t.cloneNowHidden),o=t.cancel;this.isMultiDrag&&(ce.forEach(function(t){R(t,"display","none"),e.options.removeCloneOnHide&&t.parentNode&&t.parentNode.removeChild(t)}),n(),le=!0,o())},dragStartGlobal:function(t){t.sortable;!this.isMultiDrag&&ie&&ie.multiDrag._deselectMultiDrag(),se.forEach(function(t){t.sortableIndex=F(t)}),se=se.sort(function(t,e){return t.sortableIndex-e.sortableIndex}),he=!0},dragStarted:function(t){var e=this,n=t.sortable;if(this.isMultiDrag){if(this.options.sort&&(n.captureAnimationState(),this.options.animation)){se.forEach(function(t){t!==re&&R(t,"position","absolute")});var o=X(re,!1,!0,!0);se.forEach(function(t){t!==re&&_(t,o)}),ue=de=!0}n.animateAll(function(){ue=de=!1,e.options.animation&&se.forEach(function(t){C(t)}),e.options.sort&&pe()})}},dragOver:function(t){var e=t.target,n=t.completed,o=t.cancel;de&&~se.indexOf(e)&&(n(!1),o())},revert:function(t){var e=t.fromSortable,n=t.rootEl,o=t.sortable,i=t.dragRect;1<se.length&&(se.forEach(function(t){o.addAnimationState({target:t,rect:de?X(t):i}),C(t),t.fromRect=i,e.removeAnimationState(t)}),de=!1,function(o,i){se.forEach(function(t,e){var n=i.children[t.sortableIndex+(o?Number(e):0)];n?i.insertBefore(t,n):i.appendChild(t)})}(!this.options.removeCloneOnHide,n))},dragOverCompleted:function(t){var e=t.sortable,n=t.isOwner,o=t.insertion,i=t.activeSortable,r=t.parentEl,a=t.putSortable,l=this.options;if(o){if(n&&i._hideClone(),ue=!1,l.animation&&1<se.length&&(de||!n&&!i.options.sort&&!a)){var s=X(re,!1,!0,!0);se.forEach(function(t){t!==re&&(_(t,s),r.appendChild(t))}),de=!0}if(!n)if(de||pe(),1<se.length){var c=le;i._showClone(e),i.options.animation&&!le&&c&&ce.forEach(function(t){i.addAnimationState({target:t,rect:ae}),t.fromRect=ae,t.thisAnimationDuration=null})}else i._showClone(e)}},dragOverAnimationCapture:function(t){var e=t.dragRect,n=t.isOwner,o=t.activeSortable;if(se.forEach(function(t){t.thisAnimationDuration=null}),o.options.animation&&!n&&o.multiDrag.isMultiDrag){ae=a({},e);var i=v(re,!0);ae.top-=i.f,ae.left-=i.e}},dragOverAnimationComplete:function(){de&&(de=!1,pe())},drop:function(t){var e=t.originalEvent,n=t.rootEl,o=t.parentEl,i=t.sortable,r=t.dispatchSortableEvent,a=t.oldIndex,l=t.putSortable,s=l||this.sortable;if(e){var c=this.options,u=o.children;if(!he)if(c.multiDragKey&&!this.multiDragKeyDown&&this._deselectMultiDrag(),k(re,c.selectedClass,!~se.indexOf(re)),~se.indexOf(re))se.splice(se.indexOf(re),1),oe=null,A({sortable:i,rootEl:n,name:"deselect",targetEl:re,originalEvt:e});else{if(se.push(re),A({sortable:i,rootEl:n,name:"select",targetEl:re,originalEvt:e}),e.shiftKey&&oe&&i.el.contains(oe)){var d,h,f=F(oe),p=F(re);if(~f&&~p&&f!==p)for(d=f<p?(h=f,p):(h=p,f+1);h<d;h++)~se.indexOf(u[h])||(k(u[h],c.selectedClass,!0),se.push(u[h]),A({sortable:i,rootEl:n,name:"select",targetEl:u[h],originalEvt:e}))}else oe=re;ie=s}if(he&&this.isMultiDrag){if((o[j].options.sort||o!==n)&&1<se.length){var g=X(re),v=F(re,":not(."+this.options.selectedClass+")");if(!ue&&c.animation&&(re.thisAnimationDuration=null),s.captureAnimationState(),!ue&&(c.animation&&(re.fromRect=g,se.forEach(function(t){if(t.thisAnimationDuration=null,t!==re){var e=de?X(t):g;t.fromRect=e,s.addAnimationState({target:t,rect:e})}})),pe(),se.forEach(function(t){u[v]?o.insertBefore(t,u[v]):o.appendChild(t),v++}),a===F(re))){var m=!1;se.forEach(function(t){t.sortableIndex===F(t)||(m=!0)}),m&&r("update")}se.forEach(function(t){C(t)}),s.animateAll()}ie=s}(n===o||l&&"clone"!==l.lastPutMode)&&ce.forEach(function(t){t.parentNode&&t.parentNode.removeChild(t)})}},nullingGlobal:function(){this.isMultiDrag=he=!1,ce.length=0},destroyGlobal:function(){this._deselectMultiDrag(),d(document,"pointerup",this._deselectMultiDrag),d(document,"mouseup",this._deselectMultiDrag),d(document,"touchend",this._deselectMultiDrag),d(document,"keydown",this._checkKeyDown),d(document,"keyup",this._checkKeyUp)},_deselectMultiDrag:function(t){if(!(void 0!==he&&he||ie!==this.sortable||t&&P(t.target,this.options.draggable,this.sortable.el,!1)||t&&0!==t.button))for(;se.length;){var e=se[0];k(e,this.options.selectedClass,!1),se.shift(),A({sortable:this.sortable,rootEl:this.sortable.el,name:"deselect",targetEl:e,originalEvt:t})}},_checkKeyDown:function(t){t.key===this.options.multiDragKey&&(this.multiDragKeyDown=!0)},_checkKeyUp:function(t){t.key===this.options.multiDragKey&&(this.multiDragKeyDown=!1)}},a(t,{pluginName:"multiDrag",utils:{select:function(t){var e=t.parentNode[j];e&&e.options.multiDrag&&!~se.indexOf(t)&&(ie&&ie!==e&&(ie.multiDrag._deselectMultiDrag(),ie=e),k(t,e.options.selectedClass,!0),se.push(t))},deselect:function(t){var e=t.parentNode[j],n=se.indexOf(t);e&&e.options.multiDrag&&~n&&(k(t,e.options.selectedClass,!1),se.splice(n,1))}},eventProperties:function(){var n=this,o=[],i=[];return se.forEach(function(t){var e;o.push({multiDragElement:t,index:t.sortableIndex}),e=de&&t!==re?-1:de?F(t,":not(."+n.options.selectedClass+")"):F(t),i.push({multiDragElement:t,index:e})}),{items:e(se),clones:[].concat(ce),oldIndicies:o,newIndicies:i}},optionListeners:{multiDragKey:function(t){return"ctrl"===(t=t.toLowerCase())?t="Control":1<t.length&&(t=t.charAt(0).toUpperCase()+t.substr(1)),t}}})}),Rt});;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function (Drupal, debounce) {
  var liveElement;
  var announcements = [];
  Drupal.behaviors.drupalAnnounce = {
    attach: function attach(context) {
      if (!liveElement) {
        liveElement = document.createElement('div');
        liveElement.id = 'drupal-live-announce';
        liveElement.className = 'visually-hidden';
        liveElement.setAttribute('aria-live', 'polite');
        liveElement.setAttribute('aria-busy', 'false');
        document.body.appendChild(liveElement);
      }
    }
  };

  function announce() {
    var text = [];
    var priority = 'polite';
    var announcement;
    var il = announcements.length;

    for (var i = 0; i < il; i++) {
      announcement = announcements.pop();
      text.unshift(announcement.text);

      if (announcement.priority === 'assertive') {
        priority = 'assertive';
      }
    }

    if (text.length) {
      liveElement.innerHTML = '';
      liveElement.setAttribute('aria-busy', 'true');
      liveElement.setAttribute('aria-live', priority);
      liveElement.innerHTML = text.join('\n');
      liveElement.setAttribute('aria-busy', 'false');
    }
  }

  Drupal.announce = function (text, priority) {
    announcements.push({
      text: text,
      priority: priority
    });
    return debounce(announce, 200)();
  };
})(Drupal, Drupal.debounce);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, Drupal) {
  Drupal.behaviors.dialog = {
    attach: function attach(context, settings) {
      var $context = $(context);

      if (!$('#drupal-modal').length) {
        $('<div id="drupal-modal" class="ui-front"></div>').hide().appendTo('body');
      }

      var $dialog = $context.closest('.ui-dialog-content');

      if ($dialog.length) {
        if ($dialog.dialog('option', 'drupalAutoButtons')) {
          $dialog.trigger('dialogButtonsChange');
        }

        $dialog.dialog('widget').trigger('focus');
      }

      var originalClose = settings.dialog.close;

      settings.dialog.close = function (event) {
        for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }

        originalClose.apply(settings.dialog, [event].concat(args));
        $(event.target).remove();
      };
    },
    prepareDialogButtons: function prepareDialogButtons($dialog) {
      var buttons = [];
      var $buttons = $dialog.find('.form-actions input[type=submit], .form-actions a.button');
      $buttons.each(function () {
        var $originalButton = $(this).css({
          display: 'none'
        });
        buttons.push({
          text: $originalButton.html() || $originalButton.attr('value'),
          class: $originalButton.attr('class'),
          click: function click(e) {
            if ($originalButton.is('a')) {
              $originalButton[0].click();
            } else {
              $originalButton.trigger('mousedown').trigger('mouseup').trigger('click');
              e.preventDefault();
            }
          }
        });
      });
      return buttons;
    }
  };

  Drupal.AjaxCommands.prototype.openDialog = function (ajax, response, status) {
    if (!response.selector) {
      return false;
    }

    var $dialog = $(response.selector);

    if (!$dialog.length) {
      $dialog = $("<div id=\"".concat(response.selector.replace(/^#/, ''), "\" class=\"ui-front\"></div>")).appendTo('body');
    }

    if (!ajax.wrapper) {
      ajax.wrapper = $dialog.attr('id');
    }

    response.command = 'insert';
    response.method = 'html';
    ajax.commands.insert(ajax, response, status);

    if (!response.dialogOptions.buttons) {
      response.dialogOptions.drupalAutoButtons = true;
      response.dialogOptions.buttons = Drupal.behaviors.dialog.prepareDialogButtons($dialog);
    }

    $dialog.on('dialogButtonsChange', function () {
      var buttons = Drupal.behaviors.dialog.prepareDialogButtons($dialog);
      $dialog.dialog('option', 'buttons', buttons);
    });
    response.dialogOptions = response.dialogOptions || {};
    var dialog = Drupal.dialog($dialog.get(0), response.dialogOptions);

    if (response.dialogOptions.modal) {
      dialog.showModal();
    } else {
      dialog.show();
    }

    $dialog.parent().find('.ui-dialog-buttonset').addClass('form-actions');
  };

  Drupal.AjaxCommands.prototype.closeDialog = function (ajax, response, status) {
    var $dialog = $(response.selector);

    if ($dialog.length) {
      Drupal.dialog($dialog.get(0)).close();

      if (!response.persist) {
        $dialog.remove();
      }
    }

    $dialog.off('dialogButtonsChange');
  };

  Drupal.AjaxCommands.prototype.setDialogOption = function (ajax, response, status) {
    var $dialog = $(response.selector);

    if ($dialog.length) {
      $dialog.dialog('option', response.optionName, response.optionValue);
    }
  };

  $(window).on('dialog:aftercreate', function (e, dialog, $element, settings) {
    $element.on('click.dialog', '.dialog-cancel', function (e) {
      dialog.close('cancel');
      e.preventDefault();
      e.stopPropagation();
    });
  });
  $(window).on('dialog:beforeclose', function (e, dialog, $element) {
    $element.off('.dialog');
  });
})(jQuery, Drupal);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, Drupal, debounce, displace) {
  Drupal.offCanvas = {
    position: null,
    minimumHeight: 30,
    minDisplaceWidth: 768,
    $mainCanvasWrapper: $('[data-off-canvas-main-canvas]'),
    isOffCanvas: function isOffCanvas($element) {
      return $element.is('#drupal-off-canvas');
    },
    removeOffCanvasEvents: function removeOffCanvasEvents($element) {
      $element.off('.off-canvas');
      $(document).off('.off-canvas');
      $(window).off('.off-canvas');
    },
    beforeCreate: function beforeCreate(_ref) {
      var settings = _ref.settings,
          $element = _ref.$element;
      Drupal.offCanvas.removeOffCanvasEvents($element);
      $('body').addClass('js-off-canvas-dialog-open');
      settings.position = {
        my: 'left top',
        at: "".concat(Drupal.offCanvas.getEdge(), " top"),
        of: window
      };
      var position = settings.drupalOffCanvasPosition;
      var height = position === 'side' ? $(window).height() : settings.height;
      var width = position === 'side' ? settings.width : '100%';
      settings.height = height;
      settings.width = width;
    },
    beforeClose: function beforeClose(_ref2) {
      var $element = _ref2.$element;
      $('body').removeClass('js-off-canvas-dialog-open');
      Drupal.offCanvas.removeOffCanvasEvents($element);
      Drupal.offCanvas.resetPadding();
    },
    afterCreate: function afterCreate(_ref3) {
      var $element = _ref3.$element,
          settings = _ref3.settings;
      var eventData = {
        settings: settings,
        $element: $element,
        offCanvasDialog: this
      };
      $element.on('dialogContentResize.off-canvas', eventData, Drupal.offCanvas.handleDialogResize).on('dialogContentResize.off-canvas', eventData, Drupal.offCanvas.bodyPadding);
      Drupal.offCanvas.getContainer($element).attr("data-offset-".concat(Drupal.offCanvas.getEdge()), '');
      $(window).on('resize.off-canvas', eventData, debounce(Drupal.offCanvas.resetSize, 100)).trigger('resize.off-canvas');
    },
    render: function render(_ref4) {
      var settings = _ref4.settings;
      $('.ui-dialog-off-canvas, .ui-dialog-off-canvas .ui-dialog-titlebar').toggleClass('ui-dialog-empty-title', !settings.title);
    },
    handleDialogResize: function handleDialogResize(event) {
      var $element = event.data.$element;
      var $container = Drupal.offCanvas.getContainer($element);
      var $offsets = $container.find('> :not(#drupal-off-canvas, .ui-resizable-handle)');
      var offset = 0;
      $element.css({
        height: 'auto'
      });
      var modalHeight = $container.height();
      $offsets.each(function (i, e) {
        offset += $(e).outerHeight();
      });
      var scrollOffset = $element.outerHeight() - $element.height();
      $element.height(modalHeight - offset - scrollOffset);
    },
    resetSize: function resetSize(event) {
      var $element = event.data.$element;
      var container = Drupal.offCanvas.getContainer($element);
      var position = event.data.settings.drupalOffCanvasPosition;

      if (Drupal.offCanvas.position && Drupal.offCanvas.position !== position) {
        container.removeAttr("data-offset-".concat(Drupal.offCanvas.position));
      }

      if (position === 'top') {
        $element.css('min-height', "".concat(Drupal.offCanvas.minimumHeight, "px"));
      }

      displace();
      var offsets = displace.offsets;
      var topPosition = position === 'side' && offsets.top !== 0 ? "+".concat(offsets.top) : '';
      var adjustedOptions = {
        position: {
          my: "".concat(Drupal.offCanvas.getEdge(), " top"),
          at: "".concat(Drupal.offCanvas.getEdge(), " top").concat(topPosition),
          of: window
        }
      };
      var height = position === 'side' ? "".concat($(window).height() - (offsets.top + offsets.bottom), "px") : event.data.settings.height;
      container.css({
        position: 'fixed',
        height: height
      });
      $element.dialog('option', adjustedOptions).trigger('dialogContentResize.off-canvas');
      Drupal.offCanvas.position = position;
    },
    bodyPadding: function bodyPadding(event) {
      var position = event.data.settings.drupalOffCanvasPosition;

      if (position === 'side' && $('body').outerWidth() < Drupal.offCanvas.minDisplaceWidth) {
        return;
      }

      Drupal.offCanvas.resetPadding();
      var $element = event.data.$element;
      var $container = Drupal.offCanvas.getContainer($element);
      var $mainCanvasWrapper = Drupal.offCanvas.$mainCanvasWrapper;
      var width = $container.outerWidth();
      var mainCanvasPadding = $mainCanvasWrapper.css("padding-".concat(Drupal.offCanvas.getEdge()));

      if (position === 'side' && width !== mainCanvasPadding) {
        $mainCanvasWrapper.css("padding-".concat(Drupal.offCanvas.getEdge()), "".concat(width, "px"));
        $container.attr("data-offset-".concat(Drupal.offCanvas.getEdge()), width);
        displace();
      }

      var height = $container.outerHeight();

      if (position === 'top') {
        $mainCanvasWrapper.css('padding-top', "".concat(height, "px"));
        $container.attr('data-offset-top', height);
        displace();
      }
    },
    getContainer: function getContainer($element) {
      return $element.dialog('widget');
    },
    getEdge: function getEdge() {
      return document.documentElement.dir === 'rtl' ? 'left' : 'right';
    },
    resetPadding: function resetPadding() {
      Drupal.offCanvas.$mainCanvasWrapper.css("padding-".concat(Drupal.offCanvas.getEdge()), 0);
      Drupal.offCanvas.$mainCanvasWrapper.css('padding-top', 0);
      displace();
    }
  };
  Drupal.behaviors.offCanvasEvents = {
    attach: function attach() {
      $(window).once('off-canvas').on({
        'dialog:beforecreate': function dialogBeforecreate(event, dialog, $element, settings) {
          if (Drupal.offCanvas.isOffCanvas($element)) {
            Drupal.offCanvas.beforeCreate({
              dialog: dialog,
              $element: $element,
              settings: settings
            });
          }
        },
        'dialog:aftercreate': function dialogAftercreate(event, dialog, $element, settings) {
          if (Drupal.offCanvas.isOffCanvas($element)) {
            Drupal.offCanvas.render({
              dialog: dialog,
              $element: $element,
              settings: settings
            });
            Drupal.offCanvas.afterCreate({
              $element: $element,
              settings: settings
            });
          }
        },
        'dialog:beforeclose': function dialogBeforeclose(event, dialog, $element) {
          if (Drupal.offCanvas.isOffCanvas($element)) {
            Drupal.offCanvas.beforeClose({
              dialog: dialog,
              $element: $element
            });
          }
        }
      });
    }
  };
})(jQuery, Drupal, Drupal.debounce, Drupal.displace);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, Drupal, Sortable) {
  var ajax = Drupal.ajax,
      behaviors = Drupal.behaviors,
      debounce = Drupal.debounce,
      announce = Drupal.announce,
      formatPlural = Drupal.formatPlural;
  var layoutBuilderBlocksFiltered = false;
  behaviors.layoutBuilderBlockFilter = {
    attach: function attach(context) {
      var $categories = $('.js-layout-builder-categories', context);
      var $filterLinks = $categories.find('.js-layout-builder-block-link');

      var filterBlockList = function filterBlockList(e) {
        var query = $(e.target).val().toLowerCase();

        var toggleBlockEntry = function toggleBlockEntry(index, link) {
          var $link = $(link);
          var textMatch = $link.text().toLowerCase().indexOf(query) !== -1;
          $link.toggle(textMatch);
        };

        if (query.length >= 2) {
          $categories.find('.js-layout-builder-category:not([open])').attr('remember-closed', '');
          $categories.find('.js-layout-builder-category').attr('open', '');
          $filterLinks.each(toggleBlockEntry);
          $categories.find('.js-layout-builder-category:not(:has(.js-layout-builder-block-link:visible))').hide();
          announce(formatPlural($categories.find('.js-layout-builder-block-link:visible').length, '1 block is available in the modified list.', '@count blocks are available in the modified list.'));
          layoutBuilderBlocksFiltered = true;
        } else if (layoutBuilderBlocksFiltered) {
          layoutBuilderBlocksFiltered = false;
          $categories.find('.js-layout-builder-category[remember-closed]').removeAttr('open').removeAttr('remember-closed');
          $categories.find('.js-layout-builder-category').show();
          $filterLinks.show();
          announce(Drupal.t('All available blocks are listed.'));
        }
      };

      $('input.js-layout-builder-filter', context).once('block-filter-text').on('keyup', debounce(filterBlockList, 200));
    }
  };

  Drupal.layoutBuilderBlockUpdate = function (item, from, to) {
    var $item = $(item);
    var $from = $(from);
    var itemRegion = $item.closest('.js-layout-builder-region');

    if (to === itemRegion[0]) {
      var deltaTo = $item.closest('[data-layout-delta]').data('layout-delta');
      var deltaFrom = $from ? $from.closest('[data-layout-delta]').data('layout-delta') : deltaTo;
      ajax({
        url: [$item.closest('[data-layout-update-url]').data('layout-update-url'), deltaFrom, deltaTo, itemRegion.data('region'), $item.data('layout-block-uuid'), $item.prev('[data-layout-block-uuid]').data('layout-block-uuid')].filter(function (element) {
          return element !== undefined;
        }).join('/')
      }).execute();
    }
  };

  behaviors.layoutBuilderBlockDrag = {
    attach: function attach(context) {
      var regionSelector = '.js-layout-builder-region';
      Array.prototype.forEach.call(context.querySelectorAll(regionSelector), function (region) {
        Sortable.create(region, {
          draggable: '.js-layout-builder-block',
          ghostClass: 'ui-state-drop',
          group: 'builder-region',
          onEnd: function onEnd(event) {
            return Drupal.layoutBuilderBlockUpdate(event.item, event.from, event.to);
          }
        });
      });
    }
  };
  behaviors.layoutBuilderDisableInteractiveElements = {
    attach: function attach() {
      var $blocks = $('#layout-builder [data-layout-block-uuid]');
      $blocks.find('input, textarea, select').prop('disabled', true);
      $blocks.find('a').not(function (index, element) {
        return $(element).closest('[data-contextual-id]').length > 0;
      }).on('click mouseup touchstart', function (e) {
        e.preventDefault();
        e.stopPropagation();
      });
      $blocks.find('button, [href], input, select, textarea, iframe, [tabindex]:not([tabindex="-1"]):not(.tabbable)').not(function (index, element) {
        return $(element).closest('[data-contextual-id]').length > 0;
      }).attr('tabindex', -1);
    }
  };
  $(window).on('dialog:aftercreate', function (event, dialog, $element) {
    if (Drupal.offCanvas.isOffCanvas($element)) {
      $('.is-layout-builder-highlighted').removeClass('is-layout-builder-highlighted');
      var id = $element.find('[data-layout-builder-target-highlight-id]').attr('data-layout-builder-target-highlight-id');

      if (id) {
        $("[data-layout-builder-highlight-id=\"".concat(id, "\"]")).addClass('is-layout-builder-highlighted');
      }

      $('#layout-builder').removeClass('layout-builder--move-blocks-active');
      var layoutBuilderWrapperValue = $element.find('[data-add-layout-builder-wrapper]').attr('data-add-layout-builder-wrapper');

      if (layoutBuilderWrapperValue) {
        $('#layout-builder').addClass(layoutBuilderWrapperValue);
      }
    }
  });

  if (document.querySelector('[data-off-canvas-main-canvas]')) {
    var mainCanvas = document.querySelector('[data-off-canvas-main-canvas]');
    mainCanvas.addEventListener('transitionend', function () {
      var $target = $('.is-layout-builder-highlighted');

      if ($target.length > 0) {
        var targetTop = $target.offset().top;
        var targetBottom = targetTop + $target.outerHeight();
        var viewportTop = $(window).scrollTop();
        var viewportBottom = viewportTop + $(window).height();

        if (targetBottom < viewportTop || targetTop > viewportBottom) {
          var viewportMiddle = (viewportBottom + viewportTop) / 2;
          var scrollAmount = targetTop - viewportMiddle;

          if ('scrollBehavior' in document.documentElement.style) {
            window.scrollBy({
              top: scrollAmount,
              left: 0,
              behavior: 'smooth'
            });
          } else {
            window.scrollBy(0, scrollAmount);
          }
        }
      }
    });
  }

  $(window).on('dialog:afterclose', function (event, dialog, $element) {
    if (Drupal.offCanvas.isOffCanvas($element)) {
      $('.is-layout-builder-highlighted').removeClass('is-layout-builder-highlighted');
      $('#layout-builder').removeClass('layout-builder--move-blocks-active');
    }
  });
  behaviors.layoutBuilderToggleContentPreview = {
    attach: function attach(context) {
      var $layoutBuilder = $('#layout-builder');
      var $layoutBuilderContentPreview = $('#layout-builder-content-preview');
      var contentPreviewId = $layoutBuilderContentPreview.data('content-preview-id');
      var isContentPreview = JSON.parse(localStorage.getItem(contentPreviewId)) !== false;

      var disableContentPreview = function disableContentPreview() {
        $layoutBuilder.addClass('layout-builder--content-preview-disabled');
        $('[data-layout-content-preview-placeholder-label]', context).each(function (i, element) {
          var $element = $(element);
          $element.children(':not([data-contextual-id])').hide(0);
          var contentPreviewPlaceholderText = $element.attr('data-layout-content-preview-placeholder-label');
          var contentPreviewPlaceholderLabel = Drupal.theme('layoutBuilderPrependContentPreviewPlaceholderLabel', contentPreviewPlaceholderText);
          $element.prepend(contentPreviewPlaceholderLabel);
        });
      };

      var enableContentPreview = function enableContentPreview() {
        $layoutBuilder.removeClass('layout-builder--content-preview-disabled');
        $('.js-layout-builder-content-preview-placeholder-label').remove();
        $('[data-layout-content-preview-placeholder-label]').each(function (i, element) {
          $(element).children().show();
        });
      };

      $('#layout-builder-content-preview', context).on('change', function (event) {
        var isChecked = $(event.currentTarget).is(':checked');
        localStorage.setItem(contentPreviewId, JSON.stringify(isChecked));

        if (isChecked) {
          enableContentPreview();
          announce(Drupal.t('Block previews are visible. Block labels are hidden.'));
        } else {
          disableContentPreview();
          announce(Drupal.t('Block previews are hidden. Block labels are visible.'));
        }
      });

      if (!isContentPreview) {
        $layoutBuilderContentPreview.attr('checked', false);
        disableContentPreview();
      }
    }
  };

  Drupal.theme.layoutBuilderPrependContentPreviewPlaceholderLabel = function (contentPreviewPlaceholderText) {
    var contentPreviewPlaceholderLabel = document.createElement('div');
    contentPreviewPlaceholderLabel.className = 'layout-builder-block__content-preview-placeholder-label js-layout-builder-content-preview-placeholder-label';
    contentPreviewPlaceholderLabel.innerHTML = contentPreviewPlaceholderText;
    return "<div class=\"layout-builder-block__content-preview-placeholder-label js-layout-builder-content-preview-placeholder-label\">".concat(contentPreviewPlaceholderText, "</div>");
  };
})(jQuery, Drupal, Sortable);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, Drupal) {
  function DetailsSummarizedContent(node) {
    this.$node = $(node);
    this.setupSummary();
  }

  $.extend(DetailsSummarizedContent, {
    instances: []
  });
  $.extend(DetailsSummarizedContent.prototype, {
    setupSummary: function setupSummary() {
      this.$detailsSummarizedContentWrapper = $(Drupal.theme('detailsSummarizedContentWrapper'));
      this.$node.on('summaryUpdated', $.proxy(this.onSummaryUpdated, this)).trigger('summaryUpdated').find('> summary').append(this.$detailsSummarizedContentWrapper);
    },
    onSummaryUpdated: function onSummaryUpdated() {
      var text = $.trim(this.$node.drupalGetSummary());
      this.$detailsSummarizedContentWrapper.html(Drupal.theme('detailsSummarizedContentText', text));
    }
  });
  Drupal.behaviors.detailsSummary = {
    attach: function attach(context) {
      var $detailsElements = $(context).find('details').once('details');
      DetailsSummarizedContent.instances = DetailsSummarizedContent.instances.concat($detailsElements.map(function (index, details) {
        return new DetailsSummarizedContent(details);
      }).get());
    }
  };
  Drupal.DetailsSummarizedContent = DetailsSummarizedContent;

  Drupal.theme.detailsSummarizedContentWrapper = function () {
    return "<span class=\"summary\"></span>";
  };

  Drupal.theme.detailsSummarizedContentText = function (text) {
    return text ? " (".concat(text, ")") : '';
  };
})(jQuery, Drupal);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, Drupal) {
  Drupal.behaviors.detailsAria = {
    attach: function attach() {
      $('body').once('detailsAria').on('click.detailsAria', 'summary', function (event) {
        var $summary = $(event.currentTarget);
        var open = $(event.currentTarget.parentNode).attr('open') === 'open' ? 'false' : 'true';
        $summary.attr({
          'aria-expanded': open,
          'aria-pressed': open
        });
      });
    }
  };
})(jQuery, Drupal);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, Modernizr, Drupal) {
  function CollapsibleDetails(node) {
    this.$node = $(node);
    this.$node.data('details', this);
    var anchor = window.location.hash && window.location.hash !== '#' ? ", ".concat(window.location.hash) : '';

    if (this.$node.find(".error".concat(anchor)).length) {
      this.$node.attr('open', true);
    }

    this.setupSummaryPolyfill();
  }

  $.extend(CollapsibleDetails, {
    instances: []
  });
  $.extend(CollapsibleDetails.prototype, {
    setupSummaryPolyfill: function setupSummaryPolyfill() {
      var $summary = this.$node.find('> summary');
      $('<span class="details-summary-prefix visually-hidden"></span>').append(this.$node.attr('open') ? Drupal.t('Hide') : Drupal.t('Show')).prependTo($summary).after(document.createTextNode(' '));
      $('<a class="details-title"></a>').attr('href', "#".concat(this.$node.attr('id'))).prepend($summary.contents()).appendTo($summary);
      $summary.append(this.$summary).on('click', $.proxy(this.onSummaryClick, this));
    },
    onSummaryClick: function onSummaryClick(e) {
      this.toggle();
      e.preventDefault();
    },
    toggle: function toggle() {
      var _this = this;

      var isOpen = !!this.$node.attr('open');
      var $summaryPrefix = this.$node.find('> summary span.details-summary-prefix');

      if (isOpen) {
        $summaryPrefix.html(Drupal.t('Show'));
      } else {
        $summaryPrefix.html(Drupal.t('Hide'));
      }

      setTimeout(function () {
        _this.$node.attr('open', !isOpen);
      }, 0);
    }
  });
  Drupal.behaviors.collapse = {
    attach: function attach(context) {
      if (Modernizr.details) {
        return;
      }

      var $collapsibleDetails = $(context).find('details').once('collapse').addClass('collapse-processed');

      if ($collapsibleDetails.length) {
        for (var i = 0; i < $collapsibleDetails.length; i++) {
          CollapsibleDetails.instances.push(new CollapsibleDetails($collapsibleDetails[i]));
        }
      }
    }
  };

  var handleFragmentLinkClickOrHashChange = function handleFragmentLinkClickOrHashChange(e, $target) {
    $target.parents('details').not('[open]').find('> summary').trigger('click');
  };

  $('body').on('formFragmentLinkClickOrHashChange.details', handleFragmentLinkClickOrHashChange);
  Drupal.CollapsibleDetails = CollapsibleDetails;
})(jQuery, Modernizr, Drupal);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, Drupal) {
  Drupal.behaviors.entityContentDetailsSummaries = {
    attach: function attach(context) {
      var $context = $(context);
      $context.find('.entity-content-form-revision-information').drupalSetSummary(function (context) {
        var $revisionContext = $(context);
        var revisionCheckbox = $revisionContext.find('.js-form-item-revision input');

        if (revisionCheckbox.is(':checked') || !revisionCheckbox.length && $revisionContext.find('.js-form-item-revision-log textarea').length) {
          return Drupal.t('New revision');
        }

        return Drupal.t('No revision');
      });
      $context.find('details.entity-translation-options').drupalSetSummary(function (context) {
        var $translationContext = $(context);
        var translate;
        var $checkbox = $translationContext.find('.js-form-item-translation-translate input');

        if ($checkbox.length) {
          translate = $checkbox.is(':checked') ? Drupal.t('Needs to be updated') : Drupal.t('Does not need to be updated');
        } else {
          $checkbox = $translationContext.find('.js-form-item-translation-retranslate input');
          translate = $checkbox.is(':checked') ? Drupal.t('Flag other translations as outdated') : Drupal.t('Do not flag other translations as outdated');
        }

        return translate;
      });
    }
  };
})(jQuery, Drupal);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function (Drupal) {
  var closeMessage = function closeMessage(message) {
    var messageContainer = message.querySelector('.messages__container');
    var closeBtnWrapper = document.createElement('div');
    closeBtnWrapper.setAttribute('class', 'messages__button');
    var closeBtn = document.createElement('button');
    closeBtn.setAttribute('type', 'button');
    closeBtn.setAttribute('class', 'messages__close');
    var closeBtnText = document.createElement('span');
    closeBtnText.setAttribute('class', 'visually-hidden');
    closeBtnText.innerText = Drupal.t('Close message');
    messageContainer.appendChild(closeBtnWrapper);
    closeBtnWrapper.appendChild(closeBtn);
    closeBtn.appendChild(closeBtnText);
    message.classList.add('messages-processed');
    closeBtn.addEventListener('click', function () {
      message.classList.add('hidden');
    });
  };

  Drupal.theme.message = function (_ref, _ref2) {
    var text = _ref.text;
    var type = _ref2.type,
        id = _ref2.id;
    var messagesTypes = Drupal.Message.getMessageTypeLabels();
    var messageWrapper = document.createElement('div');
    messageWrapper.setAttribute('class', "messages-list__item messages messages--".concat(type, " messages-processed"));
    messageWrapper.setAttribute('role', type === 'error' || type === 'warning' ? 'alert' : 'status');
    messageWrapper.setAttribute('aria-labelledby', "".concat(id, "-title"));
    messageWrapper.setAttribute('data-drupal-message-id', id);
    messageWrapper.setAttribute('data-drupal-message-type', type);
    var svg = '';

    if (['error', 'warning', 'status', 'info'].indexOf(type) > -1) {
      svg = '<div class="messages__icon"><svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">';
    }

    if (type === 'error') {
      svg += '<path d="M0.117801 16.7381C0.202622 17.9153 0.292289 18.562 0.481317 19.3904C0.922384 21.3161 1.6785 23.0626 2.76178 24.6589C4.58178 27.3355 7.18213 29.3823 10.1993 30.5062C12.458 31.3467 14.942 31.6495 17.3461 31.3782C22.5831 30.7872 27.1246 27.6164 29.4875 22.9027C30.3769 21.132 30.8616 19.3929 31.0797 17.1983C31.1209 16.7768 31.1209 15.1733 31.0797 14.7518C30.8786 12.7195 30.4714 11.1693 29.7032 9.49549C28.3848 6.62269 26.1722 4.18589 23.4289 2.58235C19.4399 0.249712 14.5373 -0.171762 10.1993 1.44389C5.82985 3.07165 2.38372 6.62753 0.915114 11.0215C0.512822 12.223 0.289865 13.2863 0.161423 14.604C0.127495 14.9674 0.0959901 16.4425 0.117801 16.7381ZM4.02924 14.9577C4.2837 12.2108 5.46391 9.69412 7.40024 7.76115C9.15966 6.00743 11.3529 4.89319 13.8224 4.49352C14.4234 4.39905 14.8717 4.36514 15.6012 4.36271C16.6941 4.36271 17.4793 4.45718 18.5093 4.71636C19.2969 4.91257 20.0143 5.17902 20.7873 5.55931C21.2526 5.78943 21.9409 6.18183 21.9554 6.22786C21.9651 6.25692 5.90498 22.3093 5.86621 22.3093C5.82501 22.3093 5.46391 21.6916 5.21915 21.2071C4.51877 19.8071 4.10921 18.2956 4.005 16.7138C3.98077 16.336 3.99288 15.3453 4.02924 14.9577ZM25.3725 9.6384C25.4428 9.7038 25.816 10.3602 26.0341 10.8035C26.6618 12.0776 27.0301 13.359 27.1876 14.8366C27.2385 15.2968 27.2458 16.5225 27.2022 16.9561C27.0859 18.0776 26.8847 18.9786 26.526 19.9669C26.2377 20.7663 25.7748 21.6843 25.2998 22.394C23.8748 24.5232 21.7882 26.1364 19.3987 26.9576C18.1046 27.4009 16.985 27.585 15.5891 27.585C14.8232 27.585 14.4646 27.5607 13.786 27.4541C12.2568 27.2192 10.6574 26.6209 9.40685 25.8191L9.23237 25.7077L17.2879 17.6609C23.3562 11.598 25.3507 9.61903 25.3725 9.6384Z"/>';
    } else if (type === 'warning') {
      svg += '<path d="M16 0C7.16667 0 0 7.16667 0 16C0 24.8333 7.16667 32 16 32C24.8333 32 32 24.8333 32 16C32 7.16667 24.8333 0 16 0ZM18.6667 25.9792C18.6667 26.3542 18.375 26.6667 18.0208 26.6667H14.0208C13.6458 26.6667 13.3333 26.3542 13.3333 25.9792V22.0208C13.3333 21.6458 13.6458 21.3333 14.0208 21.3333H18.0208C18.375 21.3333 18.6667 21.6458 18.6667 22.0208V25.9792ZM18.625 18.8125C18.6042 19.1042 18.2917 19.3333 17.9167 19.3333H14.0625C13.6667 19.3333 13.3542 19.1042 13.3542 18.8125L13 5.875C13 5.72917 13.0625 5.58333 13.2083 5.5C13.3333 5.39583 13.5208 5.33333 13.7083 5.33333H18.2917C18.4792 5.33333 18.6667 5.39583 18.7917 5.5C18.9375 5.58333 19 5.72917 19 5.875L18.625 18.8125Z"/>';
    } else if (type === 'status') {
      svg += '<path d="M26.75 12.625C26.75 12.9792 26.625 13.3125 26.375 13.5625L15.0625 24.875C14.8125 25.125 14.4583 25.2708 14.1042 25.2708C13.7708 25.2708 13.4167 25.125 13.1667 24.875L5.625 17.3333C5.375 17.0833 5.25 16.75 5.25 16.3958C5.25 16.0417 5.375 15.6875 5.625 15.4375L7.52083 13.5625C7.77083 13.3125 8.10417 13.1667 8.45833 13.1667C8.8125 13.1667 9.14583 13.3125 9.39583 13.5625L14.1042 18.2708L22.6042 9.79167C22.8542 9.54167 23.1875 9.39583 23.5417 9.39583C23.8958 9.39583 24.2292 9.54167 24.4792 9.79167L26.375 11.6667C26.625 11.9167 26.75 12.2708 26.75 12.625ZM32 16C32 7.16667 24.8333 0 16 0C7.16667 0 0 7.16667 0 16C0 24.8333 7.16667 32 16 32C24.8333 32 32 24.8333 32 16Z"/>';
    } else if (type === 'info') {
      svg += '<path d="M32,16c0,8.8-7.2,16-16,16S0,24.8,0,16C0,7.2,7.2,0,16,0S32,7.2,32,16z M16.4,5.3c-3.5,0-5.8,1.5-7.5,4.1c-0.2,0.3-0.2,0.8,0.2,1l2.2,1.7c0.3,0.3,0.8,0.2,1.1-0.1c1.2-1.5,1.9-2.3,3.7-2.3c1.3,0,2.9,0.8,2.9,2.1c0,1-0.8,1.5-2.1,2.2c-1.5,0.9-3.5,1.9-3.5,4.6v0.3c0,0.4,0.3,0.8,0.8,0.8h3.6c0.4,0,0.8-0.3,0.8-0.8v-0.1c0-1.8,5.4-1.9,5.4-6.9C23.9,8.1,20.1,5.3,16.4,5.3z M16,21.3c-1.6,0-3,1.3-3,3c0,1.6,1.3,3,3,3s3-1.3,3-3C19,22.6,17.6,21.3,16,21.3z"/>';
    }

    if (['error', 'warning', 'status', 'info'].indexOf(type) > -1) {
      svg += '</svg></div>';
    }

    messageWrapper.innerHTML = "\n    <div class=\"messages__container\">\n      <div class=\"messages__header".concat(!svg ? ' no-icon' : '', "\">\n        <h2 class=\"visually-hidden\">").concat(messagesTypes[type], "</h2>\n        ").concat(svg, "\n      </div>\n      <div class=\"messages__content\">\n        ").concat(text, "\n      </div>\n    </div>\n    ");
    closeMessage(messageWrapper);
    return messageWrapper;
  };

  Drupal.behaviors.messages = {
    attach: function attach(context) {
      var messages = context.querySelectorAll('.messages:not(.messages-processed)');
      messages.forEach(function (message) {
        closeMessage(message);
      });
    }
  };
})(Drupal);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function (Drupal) {
  function init(el) {
    var tabs = el.querySelector('.tabs');
    var expandedClass = 'is-expanded';
    var activeTab = tabs.querySelector('.is-active');

    function isTabsMobileLayout() {
      return tabs.querySelector('.tabs__trigger').clientHeight > 0;
    }

    function handleTriggerClick(e) {
      if (!tabs.classList.contains(expandedClass)) {
        e.currentTarget.setAttribute('aria-expanded', 'true');
        tabs.classList.add(expandedClass);
      } else {
        e.currentTarget.setAttribute('aria-expanded', 'false');
        tabs.classList.remove(expandedClass);
      }
    }

    if (isTabsMobileLayout() && !activeTab.matches('.tabs__tab:first-child')) {
      var newActiveTab = activeTab.cloneNode(true);
      var firstTab = tabs.querySelector('.tabs__tab:first-child');
      tabs.insertBefore(newActiveTab, firstTab);
      tabs.removeChild(activeTab);
    }

    tabs.querySelector('.tabs__trigger').addEventListener('click', handleTriggerClick);
  }

  Drupal.behaviors.tabs = {
    attach: function attach(context) {
      context.querySelectorAll('[data-drupal-nav-tabs]').forEach(function (el) {
        return init(el);
      });
    }
  };
})(Drupal);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function (Drupal) {
  var searchWideButton = document.querySelector('.header-nav__search-button');
  var searchWideWrapper = document.querySelector('.search-wide__wrapper');

  function searchIsVisible() {
    return searchWideWrapper.classList.contains('is-active');
  }

  Drupal.olivero.searchIsVisible = searchIsVisible;

  function handleFocus() {
    if (searchIsVisible()) {
      searchWideWrapper.querySelector('input[type="search"]').focus();
    } else {
      searchWideButton.focus();
    }
  }

  function toggleSearchVisibility(visibility) {
    searchWideButton.setAttribute('aria-expanded', visibility === true);
    searchWideWrapper.addEventListener('transitionend', handleFocus, {
      once: true
    });

    if (visibility === true) {
      searchWideWrapper.classList.add('is-active');
    } else {
      searchWideWrapper.classList.remove('is-active');
    }
  }

  Drupal.olivero.toggleSearchVisibility = toggleSearchVisibility;
  document.addEventListener('click', function (e) {
    if (e.target.matches('.header-nav__search-button, .header-nav__search-button *')) {
      toggleSearchVisibility(!searchIsVisible());
    } else if (searchIsVisible() && !e.target.matches('.search-wide__wrapper, .search-wide__wrapper *')) {
      toggleSearchVisibility(false);
    }
  });
})(Drupal);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, Drupal, drupalSettings) {
  var activeItem = Drupal.url(drupalSettings.path.currentPath);

  $.fn.drupalToolbarMenu = function () {
    var ui = {
      handleOpen: Drupal.t('Extend'),
      handleClose: Drupal.t('Collapse')
    };

    function toggleList($item, switcher) {
      var $toggle = $item.children('.toolbar-box').children('.toolbar-handle');
      switcher = typeof switcher !== 'undefined' ? switcher : !$item.hasClass('open');
      $item.toggleClass('open', switcher);
      $toggle.toggleClass('open', switcher);
      $toggle.find('.action').text(switcher ? ui.handleClose : ui.handleOpen);
    }

    function toggleClickHandler(event) {
      var $toggle = $(event.target);
      var $item = $toggle.closest('li');
      toggleList($item);
      var $openItems = $item.siblings().filter('.open');
      toggleList($openItems, false);
    }

    function linkClickHandler(event) {
      if (!Drupal.toolbar.models.toolbarModel.get('isFixed')) {
        Drupal.toolbar.models.toolbarModel.set('activeTab', null);
      }

      event.stopPropagation();
    }

    function initItems($menu) {
      var options = {
        class: 'toolbar-icon toolbar-handle',
        action: ui.handleOpen,
        text: ''
      };
      $menu.find('li > a').wrap('<div class="toolbar-box">');
      $menu.find('li').each(function (index, element) {
        var $item = $(element);

        if ($item.children('ul.toolbar-menu').length) {
          var $box = $item.children('.toolbar-box');
          options.text = Drupal.t('@label', {
            '@label': $box.find('a').text()
          });
          $item.children('.toolbar-box').append(Drupal.theme('toolbarMenuItemToggle', options));
        }
      });
    }

    function markListLevels($lists, level) {
      level = !level ? 1 : level;
      var $lis = $lists.children('li').addClass("level-".concat(level));
      $lists = $lis.children('ul');

      if ($lists.length) {
        markListLevels($lists, level + 1);
      }
    }

    function openActiveItem($menu) {
      var pathItem = $menu.find("a[href=\"".concat(window.location.pathname, "\"]"));

      if (pathItem.length && !activeItem) {
        activeItem = window.location.pathname;
      }

      if (activeItem) {
        var $activeItem = $menu.find("a[href=\"".concat(activeItem, "\"]")).addClass('menu-item--active');
        var $activeTrail = $activeItem.parentsUntil('.root', 'li').addClass('menu-item--active-trail');
        toggleList($activeTrail, true);
      }
    }

    return this.each(function (selector) {
      var $menu = $(this).once('toolbar-menu');

      if ($menu.length) {
        $menu.on('click.toolbar', '.toolbar-box', toggleClickHandler).on('click.toolbar', '.toolbar-box a', linkClickHandler);
        $menu.addClass('root');
        initItems($menu);
        markListLevels($menu);
        openActiveItem($menu);
      }
    });
  };

  Drupal.theme.toolbarMenuItemToggle = function (options) {
    return "<button class=\"".concat(options.class, "\"><span class=\"action\">").concat(options.action, "</span> <span class=\"label\">").concat(options.text, "</span></button>");
  };
})(jQuery, Drupal, drupalSettings);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, Drupal, drupalSettings) {
  var options = $.extend({
    breakpoints: {
      'toolbar.narrow': '',
      'toolbar.standard': '',
      'toolbar.wide': ''
    }
  }, drupalSettings.toolbar, {
    strings: {
      horizontal: Drupal.t('Horizontal orientation'),
      vertical: Drupal.t('Vertical orientation')
    }
  });
  Drupal.behaviors.toolbar = {
    attach: function attach(context) {
      if (!window.matchMedia('only screen').matches) {
        return;
      }

      $(context).find('#toolbar-administration').once('toolbar').each(function () {
        var model = new Drupal.toolbar.ToolbarModel({
          locked: JSON.parse(localStorage.getItem('Drupal.toolbar.trayVerticalLocked')),
          activeTab: document.getElementById(JSON.parse(localStorage.getItem('Drupal.toolbar.activeTabID'))),
          height: $('#toolbar-administration').outerHeight()
        });
        Drupal.toolbar.models.toolbarModel = model;
        Object.keys(options.breakpoints).forEach(function (label) {
          var mq = options.breakpoints[label];
          var mql = window.matchMedia(mq);
          Drupal.toolbar.mql[label] = mql;
          mql.addListener(Drupal.toolbar.mediaQueryChangeHandler.bind(null, model, label));
          Drupal.toolbar.mediaQueryChangeHandler.call(null, model, label, mql);
        });
        Drupal.toolbar.views.toolbarVisualView = new Drupal.toolbar.ToolbarVisualView({
          el: this,
          model: model,
          strings: options.strings
        });
        Drupal.toolbar.views.toolbarAuralView = new Drupal.toolbar.ToolbarAuralView({
          el: this,
          model: model,
          strings: options.strings
        });
        Drupal.toolbar.views.bodyVisualView = new Drupal.toolbar.BodyVisualView({
          el: this,
          model: model
        });
        model.trigger('change:isFixed', model, model.get('isFixed'));
        model.trigger('change:activeTray', model, model.get('activeTray'));
        var menuModel = new Drupal.toolbar.MenuModel();
        Drupal.toolbar.models.menuModel = menuModel;
        Drupal.toolbar.views.menuVisualView = new Drupal.toolbar.MenuVisualView({
          el: $(this).find('.toolbar-menu-administration').get(0),
          model: menuModel,
          strings: options.strings
        });
        Drupal.toolbar.setSubtrees.done(function (subtrees) {
          menuModel.set('subtrees', subtrees);
          var theme = drupalSettings.ajaxPageState.theme;
          localStorage.setItem("Drupal.toolbar.subtrees.".concat(theme), JSON.stringify(subtrees));
          model.set('areSubtreesLoaded', true);
        });
        Drupal.toolbar.views.toolbarVisualView.loadSubtrees();
        $(document).on('drupalViewportOffsetChange.toolbar', function (event, offsets) {
          model.set('offsets', offsets);
        });
        model.on('change:orientation', function (model, orientation) {
          $(document).trigger('drupalToolbarOrientationChange', orientation);
        }).on('change:activeTab', function (model, tab) {
          $(document).trigger('drupalToolbarTabChange', tab);
        }).on('change:activeTray', function (model, tray) {
          $(document).trigger('drupalToolbarTrayChange', tray);
        });

        if (Drupal.toolbar.models.toolbarModel.get('orientation') === 'horizontal' && Drupal.toolbar.models.toolbarModel.get('activeTab') === null) {
          Drupal.toolbar.models.toolbarModel.set({
            activeTab: $('.toolbar-bar .toolbar-tab:not(.home-toolbar-tab) a').get(0)
          });
        }

        $(window).on({
          'dialog:aftercreate': function dialogAftercreate(event, dialog, $element, settings) {
            var $toolbar = $('#toolbar-bar');
            $toolbar.css('margin-top', '0');

            if (settings.drupalOffCanvasPosition === 'top') {
              var height = Drupal.offCanvas.getContainer($element).outerHeight();
              $toolbar.css('margin-top', "".concat(height, "px"));
              $element.on('dialogContentResize.off-canvas', function () {
                var newHeight = Drupal.offCanvas.getContainer($element).outerHeight();
                $toolbar.css('margin-top', "".concat(newHeight, "px"));
              });
            }
          },
          'dialog:beforeclose': function dialogBeforeclose() {
            $('#toolbar-bar').css('margin-top', '0');
          }
        });
      });
    }
  };
  Drupal.toolbar = {
    views: {},
    models: {},
    mql: {},
    setSubtrees: new $.Deferred(),
    mediaQueryChangeHandler: function mediaQueryChangeHandler(model, label, mql) {
      switch (label) {
        case 'toolbar.narrow':
          model.set({
            isOriented: mql.matches,
            isTrayToggleVisible: false
          });

          if (!mql.matches || !model.get('orientation')) {
            model.set({
              orientation: 'vertical'
            }, {
              validate: true
            });
          }

          break;

        case 'toolbar.standard':
          model.set({
            isFixed: mql.matches
          });
          break;

        case 'toolbar.wide':
          model.set({
            orientation: mql.matches && !model.get('locked') ? 'horizontal' : 'vertical'
          }, {
            validate: true
          });
          model.set({
            isTrayToggleVisible: mql.matches
          });
          break;

        default:
          break;
      }
    }
  };

  Drupal.theme.toolbarOrientationToggle = function () {
    return '<div class="toolbar-toggle-orientation"><div class="toolbar-lining">' + '<button class="toolbar-icon" type="button"></button>' + '</div></div>';
  };

  Drupal.AjaxCommands.prototype.setToolbarSubtrees = function (ajax, response, status) {
    Drupal.toolbar.setSubtrees.resolve(response.subtrees);
  };
})(jQuery, Drupal, drupalSettings);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function (Backbone, Drupal) {
  Drupal.toolbar.MenuModel = Backbone.Model.extend({
    defaults: {
      subtrees: {}
    }
  });
})(Backbone, Drupal);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function (Backbone, Drupal) {
  Drupal.toolbar.ToolbarModel = Backbone.Model.extend({
    defaults: {
      activeTab: null,
      activeTray: null,
      isOriented: false,
      isFixed: false,
      areSubtreesLoaded: false,
      isViewportOverflowConstrained: false,
      orientation: 'horizontal',
      locked: false,
      isTrayToggleVisible: true,
      height: null,
      offsets: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
      }
    },
    validate: function validate(attributes, options) {
      if (attributes.orientation === 'horizontal' && this.get('locked') && !options.override) {
        return Drupal.t('The toolbar cannot be set to a horizontal orientation when it is locked.');
      }
    }
  });
})(Backbone, Drupal);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, Drupal, Backbone) {
  Drupal.toolbar.BodyVisualView = Backbone.View.extend({
    initialize: function initialize() {
      this.listenTo(this.model, 'change:activeTray ', this.render);
      this.listenTo(this.model, 'change:isFixed change:isViewportOverflowConstrained', this.isToolbarFixed);
    },
    isToolbarFixed: function isToolbarFixed() {
      var isViewportOverflowConstrained = this.model.get('isViewportOverflowConstrained');
      $('body').toggleClass('toolbar-fixed', isViewportOverflowConstrained || this.model.get('isFixed'));
    },
    render: function render() {
      $('body').toggleClass('toolbar-tray-open', !!this.model.get('activeTray'));
    }
  });
})(jQuery, Drupal, Backbone);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, Backbone, Drupal) {
  Drupal.toolbar.MenuVisualView = Backbone.View.extend({
    initialize: function initialize() {
      this.listenTo(this.model, 'change:subtrees', this.render);
    },
    render: function render() {
      var _this = this;

      var subtrees = this.model.get('subtrees');
      Object.keys(subtrees || {}).forEach(function (id) {
        _this.$el.find("#toolbar-link-".concat(id)).once('toolbar-subtrees').after(subtrees[id]);
      });

      if ('drupalToolbarMenu' in $.fn) {
        this.$el.children('.toolbar-menu').drupalToolbarMenu();
      }
    }
  });
})(jQuery, Backbone, Drupal);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function (Backbone, Drupal) {
  Drupal.toolbar.ToolbarAuralView = Backbone.View.extend({
    initialize: function initialize(options) {
      this.strings = options.strings;
      this.listenTo(this.model, 'change:orientation', this.onOrientationChange);
      this.listenTo(this.model, 'change:activeTray', this.onActiveTrayChange);
    },
    onOrientationChange: function onOrientationChange(model, orientation) {
      Drupal.announce(Drupal.t('Tray orientation changed to @orientation.', {
        '@orientation': orientation
      }));
    },
    onActiveTrayChange: function onActiveTrayChange(model, tray) {
      var relevantTray = tray === null ? model.previous('activeTray') : tray;

      if (!relevantTray) {
        return;
      }

      var action = tray === null ? Drupal.t('closed') : Drupal.t('opened');
      var trayNameElement = relevantTray.querySelector('.toolbar-tray-name');
      var text;

      if (trayNameElement !== null) {
        text = Drupal.t('Tray "@tray" @action.', {
          '@tray': trayNameElement.textContent,
          '@action': action
        });
      } else {
        text = Drupal.t('Tray @action.', {
          '@action': action
        });
      }

      Drupal.announce(text);
    }
  });
})(Backbone, Drupal);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, Drupal, drupalSettings, Backbone) {
  Drupal.toolbar.ToolbarVisualView = Backbone.View.extend({
    events: function events() {
      var touchEndToClick = function touchEndToClick(event) {
        event.preventDefault();
        event.target.click();
      };

      return {
        'click .toolbar-bar .toolbar-tab .trigger': 'onTabClick',
        'click .toolbar-toggle-orientation button': 'onOrientationToggleClick',
        'touchend .toolbar-bar .toolbar-tab .trigger': touchEndToClick,
        'touchend .toolbar-toggle-orientation button': touchEndToClick
      };
    },
    initialize: function initialize(options) {
      this.strings = options.strings;
      this.listenTo(this.model, 'change:activeTab change:orientation change:isOriented change:isTrayToggleVisible', this.render);
      this.listenTo(this.model, 'change:mqMatches', this.onMediaQueryChange);
      this.listenTo(this.model, 'change:offsets', this.adjustPlacement);
      this.listenTo(this.model, 'change:activeTab change:orientation change:isOriented', this.updateToolbarHeight);
      this.$el.find('.toolbar-tray .toolbar-lining').append(Drupal.theme('toolbarOrientationToggle'));
      this.model.trigger('change:activeTab');
    },
    updateToolbarHeight: function updateToolbarHeight() {
      var toolbarTabOuterHeight = $('#toolbar-bar').find('.toolbar-tab').outerHeight() || 0;
      var toolbarTrayHorizontalOuterHeight = $('.is-active.toolbar-tray-horizontal').outerHeight() || 0;
      this.model.set('height', toolbarTabOuterHeight + toolbarTrayHorizontalOuterHeight);
      $('body').css({
        'padding-top': this.model.get('height')
      });
      this.triggerDisplace();
    },
    triggerDisplace: function triggerDisplace() {
      _.defer(function () {
        Drupal.displace(true);
      });
    },
    render: function render() {
      this.updateTabs();
      this.updateTrayOrientation();
      this.updateBarAttributes();
      $('body').removeClass('toolbar-loading');

      if (this.model.changed.orientation === 'vertical' || this.model.changed.activeTab) {
        this.loadSubtrees();
      }

      return this;
    },
    onTabClick: function onTabClick(event) {
      if (event.currentTarget.hasAttribute('data-toolbar-tray')) {
        var activeTab = this.model.get('activeTab');
        var clickedTab = event.currentTarget;
        this.model.set('activeTab', !activeTab || clickedTab !== activeTab ? clickedTab : null);
        event.preventDefault();
        event.stopPropagation();
      }
    },
    onOrientationToggleClick: function onOrientationToggleClick(event) {
      var orientation = this.model.get('orientation');
      var antiOrientation = orientation === 'vertical' ? 'horizontal' : 'vertical';
      var locked = antiOrientation === 'vertical';

      if (locked) {
        localStorage.setItem('Drupal.toolbar.trayVerticalLocked', 'true');
      } else {
        localStorage.removeItem('Drupal.toolbar.trayVerticalLocked');
      }

      this.model.set({
        locked: locked,
        orientation: antiOrientation
      }, {
        validate: true,
        override: true
      });
      event.preventDefault();
      event.stopPropagation();
    },
    updateTabs: function updateTabs() {
      var $tab = $(this.model.get('activeTab'));
      $(this.model.previous('activeTab')).removeClass('is-active').prop('aria-pressed', false);
      $(this.model.previous('activeTray')).removeClass('is-active');

      if ($tab.length > 0) {
        $tab.addClass('is-active').prop('aria-pressed', true);
        var name = $tab.attr('data-toolbar-tray');
        var id = $tab.get(0).id;

        if (id) {
          localStorage.setItem('Drupal.toolbar.activeTabID', JSON.stringify(id));
        }

        var $tray = this.$el.find("[data-toolbar-tray=\"".concat(name, "\"].toolbar-tray"));

        if ($tray.length) {
          $tray.addClass('is-active');
          this.model.set('activeTray', $tray.get(0));
        } else {
          this.model.set('activeTray', null);
        }
      } else {
        this.model.set('activeTray', null);
        localStorage.removeItem('Drupal.toolbar.activeTabID');
      }
    },
    updateBarAttributes: function updateBarAttributes() {
      var isOriented = this.model.get('isOriented');

      if (isOriented) {
        this.$el.find('.toolbar-bar').attr('data-offset-top', '');
      } else {
        this.$el.find('.toolbar-bar').removeAttr('data-offset-top');
      }

      this.$el.toggleClass('toolbar-oriented', isOriented);
    },
    updateTrayOrientation: function updateTrayOrientation() {
      var orientation = this.model.get('orientation');
      var antiOrientation = orientation === 'vertical' ? 'horizontal' : 'vertical';
      $('body').toggleClass('toolbar-vertical', orientation === 'vertical').toggleClass('toolbar-horizontal', orientation === 'horizontal');
      var removeClass = antiOrientation === 'horizontal' ? 'toolbar-tray-horizontal' : 'toolbar-tray-vertical';
      var $trays = this.$el.find('.toolbar-tray').removeClass(removeClass).addClass("toolbar-tray-".concat(orientation));
      var iconClass = "toolbar-icon-toggle-".concat(orientation);
      var iconAntiClass = "toolbar-icon-toggle-".concat(antiOrientation);
      var $orientationToggle = this.$el.find('.toolbar-toggle-orientation').toggle(this.model.get('isTrayToggleVisible'));
      $orientationToggle.find('button').val(antiOrientation).attr('title', this.strings[antiOrientation]).text(this.strings[antiOrientation]).removeClass(iconClass).addClass(iconAntiClass);
      var dir = document.documentElement.dir;
      var edge = dir === 'rtl' ? 'right' : 'left';
      $trays.removeAttr('data-offset-left data-offset-right data-offset-top');
      $trays.filter('.toolbar-tray-vertical.is-active').attr("data-offset-".concat(edge), '');
      $trays.filter('.toolbar-tray-horizontal.is-active').attr('data-offset-top', '');
    },
    adjustPlacement: function adjustPlacement() {
      var $trays = this.$el.find('.toolbar-tray');

      if (!this.model.get('isOriented')) {
        $trays.removeClass('toolbar-tray-horizontal').addClass('toolbar-tray-vertical');
      }
    },
    loadSubtrees: function loadSubtrees() {
      var $activeTab = $(this.model.get('activeTab'));
      var orientation = this.model.get('orientation');

      if (!this.model.get('areSubtreesLoaded') && typeof $activeTab.data('drupal-subtrees') !== 'undefined' && orientation === 'vertical') {
        var subtreesHash = drupalSettings.toolbar.subtreesHash;
        var theme = drupalSettings.ajaxPageState.theme;
        var endpoint = Drupal.url("toolbar/subtrees/".concat(subtreesHash));
        var cachedSubtreesHash = localStorage.getItem("Drupal.toolbar.subtreesHash.".concat(theme));
        var cachedSubtrees = JSON.parse(localStorage.getItem("Drupal.toolbar.subtrees.".concat(theme)));
        var isVertical = this.model.get('orientation') === 'vertical';

        if (isVertical && subtreesHash === cachedSubtreesHash && cachedSubtrees) {
          Drupal.toolbar.setSubtrees.resolve(cachedSubtrees);
        } else if (isVertical) {
            localStorage.removeItem("Drupal.toolbar.subtreesHash.".concat(theme));
            localStorage.removeItem("Drupal.toolbar.subtrees.".concat(theme));
            Drupal.ajax({
              url: endpoint
            }).execute();
            localStorage.setItem("Drupal.toolbar.subtreesHash.".concat(theme), subtreesHash);
          }
      }
    }
  });
})(jQuery, Drupal, drupalSettings, Backbone);;
  /*
 * jQuery Foundation Joyride Plugin 2.1
 * http://foundation.zurb.com
 * Copyright 2013, ZURB
 * Free to use under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
*/

/*jslint unparam: true, browser: true, indent: 2 */

;(function ($, window, undefined) {
  'use strict';

  var defaults = {
      'version'              : '2.1',
      'tipLocation'          : 'bottom',  // 'top' or 'bottom' in relation to parent
      'nubPosition'          : 'auto',    // override on a per tooltip bases
      'scroll'               : true,      // whether to scroll to tips
      'scrollSpeed'          : 300,       // Page scrolling speed in milliseconds
      'timer'                : 0,         // 0 = no timer , all other numbers = timer in milliseconds
      'autoStart'            : false,     // true or false - false tour starts when restart called
      'startTimerOnClick'    : true,      // true or false - true requires clicking the first button start the timer
      'startOffset'          : 0,         // the index of the tooltip you want to start on (index of the li)
      'nextButton'           : true,      // true or false to control whether a next button is used
      'tipAnimation'         : 'fade',    // 'pop' or 'fade' in each tip
      'pauseAfter'           : [],        // array of indexes where to pause the tour after
      'tipAnimationFadeSpeed': 300,       // when tipAnimation = 'fade' this is speed in milliseconds for the transition
      'cookieMonster'        : false,     // true or false to control whether cookies are used
      'cookieName'           : 'joyride', // Name the cookie you'll use
      'cookieDomain'         : false,     // Will this cookie be attached to a domain, ie. '.notableapp.com'
      'cookiePath'           : false,     // Set to '/' if you want the cookie for the whole website
      'localStorage'         : false,     // true or false to control whether localstorage is used
      'localStorageKey'      : 'joyride', // Keyname in localstorage
      'tipContainer'         : 'body',    // Where will the tip be attached
      'modal'                : false,     // Whether to cover page with modal during the tour
      'expose'               : false,     // Whether to expose the elements at each step in the tour (requires modal:true)
      'postExposeCallback'   : $.noop,    // A method to call after an element has been exposed
      'preRideCallback'      : $.noop,    // A method to call before the tour starts (passed index, tip, and cloned exposed element)
      'postRideCallback'     : $.noop,    // A method to call once the tour closes (canceled or complete)
      'preStepCallback'      : $.noop,    // A method to call before each step
      'postStepCallback'     : $.noop,    // A method to call after each step
      'template' : { // HTML segments for tip layout
        'link'    : '<a href="#close" class="joyride-close-tip">X</a>',
        'timer'   : '<div class="joyride-timer-indicator-wrap"><span class="joyride-timer-indicator"></span></div>',
        'tip'     : '<div class="joyride-tip-guide"><span class="joyride-nub"></span></div>',
        'wrapper' : '<div class="joyride-content-wrapper" role="dialog"></div>',
        'button'  : '<a href="#" class="joyride-next-tip"></a>',
        'modal'   : '<div class="joyride-modal-bg"></div>',
        'expose'  : '<div class="joyride-expose-wrapper"></div>',
        'exposeCover': '<div class="joyride-expose-cover"></div>'
      }
    },

    Modernizr = Modernizr || false,

    settings = {},

    methods = {

      init : function (opts) {
        return this.each(function () {

          if ($.isEmptyObject(settings)) {
            settings = $.extend(true, defaults, opts);

            // non configurable settings
            settings.document = window.document;
            settings.$document = $(settings.document);
            settings.$window = $(window);
            settings.$content_el = $(this);
            settings.$body = $(settings.tipContainer);
            settings.body_offset = $(settings.tipContainer).position();
            settings.$tip_content = $('> li', settings.$content_el);
            settings.paused = false;
            settings.attempts = 0;

            settings.tipLocationPatterns = {
              top: ['bottom'],
              bottom: [], // bottom should not need to be repositioned
              left: ['right', 'top', 'bottom'],
              right: ['left', 'top', 'bottom']
            };

            // are we using jQuery 1.7+
            methods.jquery_check();

            // can we create cookies?
            if (!$.isFunction($.cookie)) {
              settings.cookieMonster = false;
            }

            // generate the tips and insert into dom.
            if ( (!settings.cookieMonster || !$.cookie(settings.cookieName) ) &&
              (!settings.localStorage || !methods.support_localstorage() || !localStorage.getItem(settings.localStorageKey) ) ) {

              settings.$tip_content.each(function (index) {
                methods.create({$li : $(this), index : index});
              });

              // show first tip
              if(settings.autoStart)
              {
                if (!settings.startTimerOnClick && settings.timer > 0) {
                  methods.show('init');
                  methods.startTimer();
                } else {
                  methods.show('init');
                }
              }

            }

            settings.$document.on('click.joyride', '.joyride-next-tip, .joyride-modal-bg', function (e) {
              e.preventDefault();

              if (settings.$li.next().length < 1) {
                methods.end();
              } else if (settings.timer > 0) {
                clearTimeout(settings.automate);
                methods.hide();
                methods.show();
                methods.startTimer();
              } else {
                methods.hide();
                methods.show();
              }

            });

            settings.$document.on('click.joyride', '.joyride-close-tip', function (e) {
              e.preventDefault();
              methods.end(true /* isAborted */);
            });

            settings.$window.on('resize.joyride', function (e) {
              if(settings.$li){
              if(settings.exposed && settings.exposed.length>0){
                var $els = $(settings.exposed);
                $els.each(function(){
                  var $this = $(this);
                  methods.un_expose($this);
                  methods.expose($this);
                });
              }
              if (methods.is_phone()) {
                methods.pos_phone();
              } else {
                methods.pos_default();
              }
              }
            });
          } else {
            methods.restart();
          }

        });
      },

      // call this method when you want to resume the tour
      resume : function () {
        methods.set_li();
        methods.show();
      },

      nextTip: function(){
            if (settings.$li.next().length < 1) {
            methods.end();
            } else if (settings.timer > 0) {
            clearTimeout(settings.automate);
            methods.hide();
            methods.show();
            methods.startTimer();
            } else {
            methods.hide();
            methods.show();
            }
      },

      tip_template : function (opts) {
        var $blank, content, $wrapper;

        opts.tip_class = opts.tip_class || '';

        $blank = $(settings.template.tip).addClass(opts.tip_class);
        content = $.trim($(opts.li).html()) +
          methods.button_text(opts.button_text) +
          settings.template.link +
          methods.timer_instance(opts.index);

        $wrapper = $(settings.template.wrapper);
        if (opts.li.attr('data-aria-labelledby')) {
          $wrapper.attr('aria-labelledby', opts.li.attr('data-aria-labelledby'))
        }
        if (opts.li.attr('data-aria-describedby')) {
          $wrapper.attr('aria-describedby', opts.li.attr('data-aria-describedby'))
        }
        $blank.append($wrapper);
        $blank.first().attr('data-index', opts.index);
        $('.joyride-content-wrapper', $blank).append(content);

        return $blank[0];
      },

      timer_instance : function (index) {
        var txt;

        if ((index === 0 && settings.startTimerOnClick && settings.timer > 0) || settings.timer === 0) {
          txt = '';
        } else {
          txt = methods.outerHTML($(settings.template.timer)[0]);
        }
        return txt;
      },

      button_text : function (txt) {
        if (settings.nextButton) {
          txt = $.trim(txt) || 'Next';
          txt = methods.outerHTML($(settings.template.button).append(txt)[0]);
        } else {
          txt = '';
        }
        return txt;
      },

      create : function (opts) {
        // backwards compatibility with data-text attribute
        var buttonText = opts.$li.attr('data-button') || opts.$li.attr('data-text'),
          tipClass = opts.$li.attr('class'),
          $tip_content = $(methods.tip_template({
            tip_class : tipClass,
            index : opts.index,
            button_text : buttonText,
            li : opts.$li
          }));

        $(settings.tipContainer).append($tip_content);
      },

      show : function (init) {
        var opts = {}, ii, opts_arr = [], opts_len = 0, p,
            $timer = null;

        // are we paused?
        if (settings.$li === undefined || ($.inArray(settings.$li.index(), settings.pauseAfter) === -1)) {

          // don't go to the next li if the tour was paused
          if (settings.paused) {
            settings.paused = false;
          } else {
            methods.set_li(init);
          }

          settings.attempts = 0;

          if (settings.$li.length && settings.$target.length > 0) {
            if(init){ //run when we first start
                settings.preRideCallback(settings.$li.index(), settings.$next_tip );
                if(settings.modal){
                    methods.show_modal();
                }
            }
            settings.preStepCallback(settings.$li.index(), settings.$next_tip );

            // parse options
            opts_arr = (settings.$li.data('options') || ':').split(';');
            opts_len = opts_arr.length;
            for (ii = opts_len - 1; ii >= 0; ii--) {
              p = opts_arr[ii].split(':');

              if (p.length === 2) {
                opts[$.trim(p[0])] = $.trim(p[1]);
              }
            }
            settings.tipSettings = $.extend({}, settings, opts);
            settings.tipSettings.tipLocationPattern = settings.tipLocationPatterns[settings.tipSettings.tipLocation];

            if(settings.modal && settings.expose){
              methods.expose();
            }

            // scroll if not modal
            if (!settings.$target.is("body") && settings.scroll) {
              methods.scroll_to();
            }

            if (methods.is_phone()) {
              methods.pos_phone(true);
            } else {
              methods.pos_default(true);
            }

            $timer = $('.joyride-timer-indicator', settings.$next_tip);

            if (/pop/i.test(settings.tipAnimation)) {

              $timer.outerWidth(0);

              if (settings.timer > 0) {

                settings.$next_tip.show();
                $timer.animate({
                  width: $('.joyride-timer-indicator-wrap', settings.$next_tip).outerWidth()
                }, settings.timer);

              } else {

                settings.$next_tip.show();

              }


            } else if (/fade/i.test(settings.tipAnimation)) {

              $timer.outerWidth(0);

              if (settings.timer > 0) {

                settings.$next_tip.fadeIn(settings.tipAnimationFadeSpeed);

                settings.$next_tip.show();
                $timer.animate({
                  width: $('.joyride-timer-indicator-wrap', settings.$next_tip).outerWidth()
                }, settings.timer);

              } else {

                settings.$next_tip.fadeIn(settings.tipAnimationFadeSpeed);

              }
            }

            settings.$current_tip = settings.$next_tip;
            // Focus next button for keyboard users.
            $('.joyride-next-tip', settings.$current_tip).focus();
            methods.tabbable(settings.$current_tip);
          // skip non-existent targets
          } else if (settings.$li && settings.$target.length < 1) {

            methods.show();

          } else {

            methods.end();

          }
        } else {

          settings.paused = true;

        }

      },

      // detect phones with media queries if supported.
      is_phone : function () {
        if (Modernizr) {
          return Modernizr.mq('only screen and (max-width: 767px)');
        }

        return (settings.$window.width() < 767) ? true : false;
      },

      support_localstorage : function () {
        if (Modernizr) {
          return Modernizr.localstorage;
        } else {
          return !!window.localStorage;
        }
      },

      hide : function () {
        if(settings.modal && settings.expose){
          methods.un_expose();
        }
        if(!settings.modal){
        $('.joyride-modal-bg').hide();
        }
        settings.$current_tip.hide();
        settings.postStepCallback(settings.$li.index(), settings.$current_tip);
      },

      set_li : function (init) {
        if (init) {
          settings.$li = settings.$tip_content.eq(settings.startOffset);
          methods.set_next_tip();
          settings.$current_tip = settings.$next_tip;
        } else {
          settings.$li = settings.$li.next();
          methods.set_next_tip();
        }

        methods.set_target();
      },

      set_next_tip : function () {
        settings.$next_tip = $('.joyride-tip-guide[data-index=' + settings.$li.index() + ']');
      },

      set_target : function () {
        var cl = settings.$li.attr('data-class'),
            id = settings.$li.attr('data-id'),
            $sel = function () {
              if (id) {
                return $(settings.document.getElementById(id));
              } else if (cl) {
                return $('.' + cl).filter(":visible").first();
              } else {
                return $('body');
              }
            };

        settings.$target = $sel();
      },

      scroll_to : function () {
        var window_half, tipOffset;

        window_half = settings.$window.height() / 2;
        tipOffset = Math.ceil(settings.$target.offset().top - window_half + settings.$next_tip.outerHeight());

        $("html, body").stop().animate({
          scrollTop: tipOffset
        }, settings.scrollSpeed);
      },

      paused : function () {
        if (($.inArray((settings.$li.index() + 1), settings.pauseAfter) === -1)) {
          return true;
        }

        return false;
      },

      destroy : function () {
        if(!$.isEmptyObject(settings)){
        settings.$document.off('.joyride');
        }

        $(window).off('.joyride');
        $('.joyride-close-tip, .joyride-next-tip, .joyride-modal-bg').off('.joyride');
        $('.joyride-tip-guide, .joyride-modal-bg').remove();
        clearTimeout(settings.automate);
        settings = {};
      },

      restart : function () {
        if(!settings.autoStart)
        {
          if (!settings.startTimerOnClick && settings.timer > 0) {
            methods.show('init');
            methods.startTimer();
          } else {
            methods.show('init');
          }
          settings.autoStart = true;
        }
        else
        {
        methods.hide();
        settings.$li = undefined;
        methods.show('init');
        }
      },

      pos_default : function (init) {
        var half_fold = Math.ceil(settings.$window.height() / 2),
            tip_position = settings.$next_tip.offset(),
            $nub = $('.joyride-nub', settings.$next_tip),
            nub_width = Math.ceil($nub.outerWidth() / 2),
            nub_height = Math.ceil($nub.outerHeight() / 2),
            toggle = init || false;

        // tip must not be "display: none" to calculate position
        if (toggle) {
          settings.$next_tip.css('visibility', 'hidden');
          settings.$next_tip.show();
        }

        if (!settings.$target.is("body")) {
            var
              topAdjustment = settings.tipSettings.tipAdjustmentY ? parseInt(settings.tipSettings.tipAdjustmentY) : 0,
              leftAdjustment = settings.tipSettings.tipAdjustmentX ? parseInt(settings.tipSettings.tipAdjustmentX) : 0;

            if (methods.bottom()) {
              settings.$next_tip.css({
                top: (settings.$target.offset().top + nub_height + settings.$target.outerHeight() + topAdjustment),
                left: settings.$target.offset().left + leftAdjustment});

              if (/right/i.test(settings.tipSettings.nubPosition)) {
                settings.$next_tip.css('left', settings.$target.offset().left - settings.$next_tip.outerWidth() + settings.$target.outerWidth());
              }

              methods.nub_position($nub, settings.tipSettings.nubPosition, 'top');

            } else if (methods.top()) {

              settings.$next_tip.css({
                top: (settings.$target.offset().top - settings.$next_tip.outerHeight() - nub_height + topAdjustment),
                left: settings.$target.offset().left + leftAdjustment});

              methods.nub_position($nub, settings.tipSettings.nubPosition, 'bottom');

            } else if (methods.right()) {

              settings.$next_tip.css({
                top: settings.$target.offset().top + topAdjustment,
                left: (settings.$target.outerWidth() + settings.$target.offset().left + nub_width) + leftAdjustment});

              methods.nub_position($nub, settings.tipSettings.nubPosition, 'left');

            } else if (methods.left()) {

              settings.$next_tip.css({
                top: settings.$target.offset().top + topAdjustment,
                left: (settings.$target.offset().left - settings.$next_tip.outerWidth() - nub_width) + leftAdjustment});

              methods.nub_position($nub, settings.tipSettings.nubPosition, 'right');

            }

            if (!methods.visible(methods.corners(settings.$next_tip)) && settings.attempts < settings.tipSettings.tipLocationPattern.length) {

              $nub.removeClass('bottom')
                .removeClass('top')
                .removeClass('right')
                .removeClass('left');

              settings.tipSettings.tipLocation = settings.tipSettings.tipLocationPattern[settings.attempts];

              settings.attempts++;

              methods.pos_default(true);

            }

        } else if (settings.$li.length) {

          methods.pos_modal($nub);

        }

        if (toggle) {
          settings.$next_tip.hide();
          settings.$next_tip.css('visibility', 'visible');
        }

      },

      pos_phone : function (init) {
        var tip_height = settings.$next_tip.outerHeight(),
            tip_offset = settings.$next_tip.offset(),
            target_height = settings.$target.outerHeight(),
            $nub = $('.joyride-nub', settings.$next_tip),
            nub_height = Math.ceil($nub.outerHeight() / 2),
            toggle = init || false;

        $nub.removeClass('bottom')
          .removeClass('top')
          .removeClass('right')
          .removeClass('left');

        if (toggle) {
          settings.$next_tip.css('visibility', 'hidden');
          settings.$next_tip.show();
        }

        if (!settings.$target.is("body")) {

          if (methods.top()) {

              settings.$next_tip.offset({top: settings.$target.offset().top - tip_height - nub_height});
              $nub.addClass('bottom');

          } else {

            settings.$next_tip.offset({top: settings.$target.offset().top + target_height + nub_height});
            $nub.addClass('top');

          }

        } else if (settings.$li.length) {

          methods.pos_modal($nub);

        }

        if (toggle) {
          settings.$next_tip.hide();
          settings.$next_tip.css('visibility', 'visible');
        }
      },

      pos_modal : function ($nub) {
        methods.center();
        $nub.hide();

        methods.show_modal();

      },

      show_modal : function() {
        if ($('.joyride-modal-bg').length < 1) {
            $('body').append(settings.template.modal).show();
        }

        if (/pop/i.test(settings.tipAnimation)) {
          $('.joyride-modal-bg').show();
        } else {
          $('.joyride-modal-bg').fadeIn(settings.tipAnimationFadeSpeed);
        }
      },

      expose: function(){
        var expose,
          exposeCover,
          el,
          origCSS,
          randId = 'expose-'+Math.floor(Math.random()*10000);
        if (arguments.length>0 && arguments[0] instanceof $){
          el = arguments[0];
        } else if(settings.$target && !settings.$target.is("body")){
          el = settings.$target;
        }  else {
          return false;
        }
        if(el.length < 1){
          if(window.console){
            console.error('element not valid', el);
          }
          return false;
        }
        expose = $(settings.template.expose);
        settings.$body.append(expose);
        expose.css({
          top: el.offset().top,
          left: el.offset().left,
          width: el.outerWidth(true),
          height: el.outerHeight(true)
        });
        exposeCover = $(settings.template.exposeCover);
        origCSS = {
                  zIndex: el.css('z-index'),
                  position: el.css('position')
                  };
        el.css('z-index',expose.css('z-index')*1+1);
        if(origCSS.position == 'static'){
          el.css('position','relative');
        }
        el.data('expose-css',origCSS);
        exposeCover.css({
          top: el.offset().top,
          left: el.offset().left,
          width: el.outerWidth(true),
          height: el.outerHeight(true)
        });
        settings.$body.append(exposeCover);
        expose.addClass(randId);
        exposeCover.addClass(randId);
        if(settings.tipSettings['exposeClass']){
          expose.addClass(settings.tipSettings['exposeClass']);
          exposeCover.addClass(settings.tipSettings['exposeClass']);
        }
        el.data('expose', randId);
        settings.postExposeCallback(settings.$li.index(), settings.$next_tip, el);
        methods.add_exposed(el);
      },

      un_expose: function(){
        var exposeId,
          el,
          expose ,
          origCSS,
          clearAll = false;
        if (arguments.length>0 && arguments[0] instanceof $){
          el = arguments[0];
        } else if(settings.$target && !settings.$target.is("body")){
          el = settings.$target;
        }  else {
          return false;
        }
        if(el.length < 1){
          if(window.console){
            console.error('element not valid', el);
          }
          return false;
        }
        exposeId = el.data('expose');
        expose = $('.'+exposeId);
        if(arguments.length>1){
          clearAll = arguments[1];
        }
        if(clearAll === true){
          $('.joyride-expose-wrapper,.joyride-expose-cover').remove();
        } else {
          expose.remove();
        }
        origCSS = el.data('expose-css');
        if(origCSS.zIndex == 'auto'){
          el.css('z-index', '');
        } else {
          el.css('z-index',origCSS.zIndex);
        }
        if(origCSS.position != el.css('position')){
          if(origCSS.position == 'static'){// this is default, no need to set it.
            el.css('position', '');
          } else {
            el.css('position',origCSS.position);
          }
        }
        el.removeData('expose');
        el.removeData('expose-z-index');
        methods.remove_exposed(el);
      },

      add_exposed: function(el){
        settings.exposed = settings.exposed || [];
        if(el instanceof $){
          settings.exposed.push(el[0]);
        } else if(typeof el == 'string'){
          settings.exposed.push(el);
        }
      },

      remove_exposed: function(el){
        var search;
        if(el instanceof $){
          search = el[0]
        } else if (typeof el == 'string'){
          search = el;
        }
        settings.exposed = settings.exposed || [];
        for(var i=0; i<settings.exposed.length; i++){
          if(settings.exposed[i] == search){
            settings.exposed.splice(i,1);
            return;
          }
        }
      },

      center : function () {
        var $w = settings.$window;

        settings.$next_tip.css({
          top : ((($w.height() - settings.$next_tip.outerHeight()) / 2) + $w.scrollTop()),
          left : ((($w.width() - settings.$next_tip.outerWidth()) / 2) + $w.scrollLeft())
        });

        return true;
      },

      bottom : function () {
        return /bottom/i.test(settings.tipSettings.tipLocation);
      },

      top : function () {
        return /top/i.test(settings.tipSettings.tipLocation);
      },

      right : function () {
        return /right/i.test(settings.tipSettings.tipLocation);
      },

      left : function () {
        return /left/i.test(settings.tipSettings.tipLocation);
      },

      corners : function (el) {
        var w = settings.$window,
            window_half = w.height() / 2,
            tipOffset = Math.ceil(settings.$target.offset().top - window_half + settings.$next_tip.outerHeight()),//using this to calculate since scroll may not have finished yet.
            right = w.width() + w.scrollLeft(),
            offsetBottom =  w.height() + tipOffset,
            bottom = w.height() + w.scrollTop(),
            top = w.scrollTop();

            if(tipOffset < top){
              if (tipOffset <0 ){
                top = 0;
              } else {
                top = tipOffset;
              }
            }

            if(offsetBottom > bottom){
              bottom = offsetBottom;
            }

        return [
          el.offset().top < top,
          right < el.offset().left + el.outerWidth(),
          bottom < el.offset().top + el.outerHeight(),
          w.scrollLeft() > el.offset().left
        ];
      },

      visible : function (hidden_corners) {
        var i = hidden_corners.length;

        while (i--) {
          if (hidden_corners[i]) return false;
        }

        return true;
      },

      nub_position : function (nub, pos, def) {
        if (pos === 'auto') {
          nub.addClass(def);
        } else {
          nub.addClass(pos);
        }
      },

      startTimer : function () {
        if (settings.$li.length) {
          settings.automate = setTimeout(function () {
            methods.hide();
            methods.show();
            methods.startTimer();
          }, settings.timer);
        } else {
          clearTimeout(settings.automate);
        }
      },

      end : function (isAborted) {
        isAborted = isAborted || false;

        // Unbind resize events.
        if (isAborted) {
          settings.$window.off('resize.joyride');
        }

        if (settings.cookieMonster) {
          $.cookie(settings.cookieName, 'ridden', { expires: 365, domain: settings.cookieDomain, path: settings.cookiePath });
        }

        if (settings.localStorage) {
          localStorage.setItem(settings.localStorageKey, true);
        }

        if (settings.timer > 0) {
          clearTimeout(settings.automate);
        }
        if(settings.modal && settings.expose){
          methods.un_expose();
        }
        if (settings.$current_tip) {
          settings.$current_tip.hide();
        }
        if (settings.$li) {
          settings.postStepCallback(settings.$li.index(), settings.$current_tip, isAborted);
          settings.postRideCallback(settings.$li.index(), settings.$current_tip, isAborted);
        }
        $('.joyride-modal-bg').hide();
      },

      jquery_check : function () {
        // define on() and off() for older jQuery
        if (!$.isFunction($.fn.on)) {

          $.fn.on = function (types, sel, fn) {

            return this.delegate(sel, types, fn);

          };

          $.fn.off = function (types, sel, fn) {

            return this.undelegate(sel, types, fn);

          };

          return false;
        }

        return true;
      },

      outerHTML : function (el) {
        // support FireFox < 11
        return el.outerHTML || new XMLSerializer().serializeToString(el);
      },

      version : function () {
        return settings.version;
      },

      tabbable : function (el) {
        $(el).on('keydown', function( event ) {
          if (!event.isDefaultPrevented() && event.keyCode &&
              // Escape key.
              event.keyCode === 27 ) {
            event.preventDefault();
            methods.end(true /* isAborted */);
            return;
          }

          // Prevent tabbing out of tour items.
          if ( event.keyCode !== 9 ) {
            return;
          }
          var tabbables = $(el).find(":tabbable"),
            first = tabbables.filter(":first"),
            last  = tabbables.filter(":last");
          if ( event.target === last[0] && !event.shiftKey ) {
            first.focus( 1 );
            event.preventDefault();
          } else if ( event.target === first[0] && event.shiftKey ) {
            last.focus( 1 );
            event.preventDefault();
          }
        });
      }

    };

  $.fn.joyride = function (method) {
    if (methods[method]) {
      return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
    } else if (typeof method === 'object' || !method) {
      return methods.init.apply(this, arguments);
    } else {
      $.error('Method ' +  method + ' does not exist on jQuery.joyride');
    }
  };

}(jQuery, this));
;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, Backbone, Drupal, document) {
  var queryString = decodeURI(window.location.search);
  Drupal.behaviors.tour = {
    attach: function attach(context) {
      $('body').once('tour').each(function () {
        var model = new Drupal.tour.models.StateModel();
        new Drupal.tour.views.ToggleTourView({
          el: $(context).find('#toolbar-tab-tour'),
          model: model
        });
        model.on('change:isActive', function (model, isActive) {
          $(document).trigger(isActive ? 'drupalTourStarted' : 'drupalTourStopped');
        }).set('tour', $(context).find('ol#tour'));

        if (/tour=?/i.test(queryString)) {
          model.set('isActive', true);
        }
      });
    }
  };
  Drupal.tour = Drupal.tour || {
    models: {},
    views: {}
  };
  Drupal.tour.models.StateModel = Backbone.Model.extend({
    defaults: {
      tour: [],
      isActive: false,
      activeTour: []
    }
  });
  Drupal.tour.views.ToggleTourView = Backbone.View.extend({
    events: {
      click: 'onClick'
    },
    initialize: function initialize() {
      this.listenTo(this.model, 'change:tour change:isActive', this.render);
      this.listenTo(this.model, 'change:isActive', this.toggleTour);
    },
    render: function render() {
      this.$el.toggleClass('hidden', this._getTour().length === 0);
      var isActive = this.model.get('isActive');
      this.$el.find('button').toggleClass('is-active', isActive).prop('aria-pressed', isActive);
      return this;
    },
    toggleTour: function toggleTour() {
      if (this.model.get('isActive')) {
        var $tour = this._getTour();

        this._removeIrrelevantTourItems($tour, this._getDocument());

        var that = this;
        var close = Drupal.t('Close');

        if ($tour.find('li').length) {
          $tour.joyride({
            autoStart: true,
            postRideCallback: function postRideCallback() {
              that.model.set('isActive', false);
            },
            template: {
              link: "<a href=\"#close\" class=\"joyride-close-tip\" aria-label=\"".concat(close, "\">&times;</a>"),
              button: '<a href="#" class="button button--primary joyride-next-tip"></a>'
            }
          });
          this.model.set({
            isActive: true,
            activeTour: $tour
          });
        }
      } else {
        this.model.get('activeTour').joyride('destroy');
        this.model.set({
          isActive: false,
          activeTour: []
        });
      }
    },
    onClick: function onClick(event) {
      this.model.set('isActive', !this.model.get('isActive'));
      event.preventDefault();
      event.stopPropagation();
    },
    _getTour: function _getTour() {
      return this.model.get('tour');
    },
    _getDocument: function _getDocument() {
      return $(document);
    },
    _removeIrrelevantTourItems: function _removeIrrelevantTourItems($tour, $document) {
      var removals = false;
      var tips = /tips=([^&]+)/.exec(queryString);
      $tour.find('li').each(function () {
        var $this = $(this);
        var itemId = $this.attr('data-id');
        var itemClass = $this.attr('data-class');

        if (tips && !$(this).hasClass(tips[1])) {
          removals = true;
          $this.remove();
          return;
        }

        if (!itemId && !itemClass || itemId && $document.find("#".concat(itemId)).length || itemClass && $document.find(".".concat(itemClass)).length) {
          return;
        }

        removals = true;
        $this.remove();
      });

      if (removals) {
        var total = $tour.find('li').length;

        if (!total) {
          this.model.set({
            tour: []
          });
        }

        $tour.find('li').each(function (index) {
          var progress = Drupal.t('!tour_item of !total', {
            '!tour_item': index + 1,
            '!total': total
          });
          $(this).find('.tour-progress').text(progress);
        }).eq(-1).attr('data-text', Drupal.t('End tour'));
      }
    }
  });
})(jQuery, Backbone, Drupal, document);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, Drupal) {
  function TabbingManager() {
    this.stack = [];
  }

  function TabbingContext(options) {
    $.extend(this, {
      level: null,
      $tabbableElements: $(),
      $disabledElements: $(),
      released: false,
      active: false
    }, options);
  }

  $.extend(TabbingManager.prototype, {
    constrain: function constrain(elements) {
      var il = this.stack.length;

      for (var i = 0; i < il; i++) {
        this.stack[i].deactivate();
      }

      var $elements = $(elements).find(':tabbable').addBack(':tabbable');
      var tabbingContext = new TabbingContext({
        level: this.stack.length,
        $tabbableElements: $elements
      });
      this.stack.push(tabbingContext);
      tabbingContext.activate();
      $(document).trigger('drupalTabbingConstrained', tabbingContext);
      return tabbingContext;
    },
    release: function release() {
      var toActivate = this.stack.length - 1;

      while (toActivate >= 0 && this.stack[toActivate].released) {
        toActivate--;
      }

      this.stack.splice(toActivate + 1);

      if (toActivate >= 0) {
        this.stack[toActivate].activate();
      }
    },
    activate: function activate(tabbingContext) {
      var $set = tabbingContext.$tabbableElements;
      var level = tabbingContext.level;
      var $disabledSet = $(':tabbable').not($set);
      tabbingContext.$disabledElements = $disabledSet;
      var il = $disabledSet.length;

      for (var i = 0; i < il; i++) {
        this.recordTabindex($disabledSet.eq(i), level);
      }

      $disabledSet.prop('tabindex', -1).prop('autofocus', false);
      var $hasFocus = $set.filter('[autofocus]').eq(-1);

      if ($hasFocus.length === 0) {
        $hasFocus = $set.eq(0);
      }

      $hasFocus.trigger('focus');
    },
    deactivate: function deactivate(tabbingContext) {
      var $set = tabbingContext.$disabledElements;
      var level = tabbingContext.level;
      var il = $set.length;

      for (var i = 0; i < il; i++) {
        this.restoreTabindex($set.eq(i), level);
      }
    },
    recordTabindex: function recordTabindex($el, level) {
      var tabInfo = $el.data('drupalOriginalTabIndices') || {};
      tabInfo[level] = {
        tabindex: $el[0].getAttribute('tabindex'),
        autofocus: $el[0].hasAttribute('autofocus')
      };
      $el.data('drupalOriginalTabIndices', tabInfo);
    },
    restoreTabindex: function restoreTabindex($el, level) {
      var tabInfo = $el.data('drupalOriginalTabIndices');

      if (tabInfo && tabInfo[level]) {
        var data = tabInfo[level];

        if (data.tabindex) {
          $el[0].setAttribute('tabindex', data.tabindex);
        } else {
            $el[0].removeAttribute('tabindex');
          }

        if (data.autofocus) {
          $el[0].setAttribute('autofocus', 'autofocus');
        }

        if (level === 0) {
          $el.removeData('drupalOriginalTabIndices');
        } else {
          var levelToDelete = level;

          while (tabInfo.hasOwnProperty(levelToDelete)) {
            delete tabInfo[levelToDelete];
            levelToDelete++;
          }

          $el.data('drupalOriginalTabIndices', tabInfo);
        }
      }
    }
  });
  $.extend(TabbingContext.prototype, {
    release: function release() {
      if (!this.released) {
        this.deactivate();
        this.released = true;
        Drupal.tabbingManager.release(this);
        $(document).trigger('drupalTabbingContextReleased', this);
      }
    },
    activate: function activate() {
      if (!this.active && !this.released) {
        this.active = true;
        Drupal.tabbingManager.activate(this);
        $(document).trigger('drupalTabbingContextActivated', this);
      }
    },
    deactivate: function deactivate() {
      if (this.active) {
        this.active = false;
        Drupal.tabbingManager.deactivate(this);
        $(document).trigger('drupalTabbingContextDeactivated', this);
      }
    }
  });

  if (Drupal.tabbingManager) {
    return;
  }

  Drupal.tabbingManager = new TabbingManager();
})(jQuery, Drupal);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, Drupal, Backbone) {
  var strings = {
    tabbingReleased: Drupal.t('Tabbing is no longer constrained by the Contextual module.'),
    tabbingConstrained: Drupal.t('Tabbing is constrained to a set of @contextualsCount and the edit mode toggle.'),
    pressEsc: Drupal.t('Press the esc key to exit.')
  };

  function initContextualToolbar(context) {
    if (!Drupal.contextual || !Drupal.contextual.collection) {
      return;
    }

    var contextualToolbar = Drupal.contextualToolbar;
    contextualToolbar.model = new contextualToolbar.StateModel({
      isViewing: localStorage.getItem('Drupal.contextualToolbar.isViewing') !== 'false'
    }, {
      contextualCollection: Drupal.contextual.collection
    });
    var viewOptions = {
      el: $('.toolbar .toolbar-bar .contextual-toolbar-tab'),
      model: contextualToolbar.model,
      strings: strings
    };
    new contextualToolbar.VisualView(viewOptions);
    new contextualToolbar.AuralView(viewOptions);
  }

  Drupal.behaviors.contextualToolbar = {
    attach: function attach(context) {
      if ($('body').once('contextualToolbar-init').length) {
        initContextualToolbar(context);
      }
    }
  };
  Drupal.contextualToolbar = {
    model: null
  };
})(jQuery, Drupal, Backbone);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function (Drupal, Backbone) {
  Drupal.contextualToolbar.StateModel = Backbone.Model.extend({
    defaults: {
      isViewing: true,
      isVisible: false,
      contextualCount: 0,
      tabbingContext: null
    },
    initialize: function initialize(attrs, options) {
      this.listenTo(options.contextualCollection, 'reset remove add', this.countContextualLinks);
      this.listenTo(options.contextualCollection, 'add', this.lockNewContextualLinks);
      this.listenTo(this, 'change:contextualCount', this.updateVisibility);
      this.listenTo(this, 'change:isViewing', function (model, isViewing) {
        options.contextualCollection.each(function (contextualModel) {
          contextualModel.set('isLocked', !isViewing);
        });
      });
    },
    countContextualLinks: function countContextualLinks(contextualModel, contextualCollection) {
      this.set('contextualCount', contextualCollection.length);
    },
    lockNewContextualLinks: function lockNewContextualLinks(contextualModel, contextualCollection) {
      if (!this.get('isViewing')) {
        contextualModel.set('isLocked', true);
      }
    },
    updateVisibility: function updateVisibility() {
      this.set('isVisible', this.get('contextualCount') > 0);
    }
  });
})(Drupal, Backbone);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, Drupal, Backbone, _) {
  Drupal.contextualToolbar.AuralView = Backbone.View.extend({
    announcedOnce: false,
    initialize: function initialize(options) {
      this.options = options;
      this.listenTo(this.model, 'change', this.render);
      this.listenTo(this.model, 'change:isViewing', this.manageTabbing);
      $(document).on('keyup', _.bind(this.onKeypress, this));
      this.manageTabbing();
    },
    render: function render() {
      this.$el.find('button').attr('aria-pressed', !this.model.get('isViewing'));
      return this;
    },
    manageTabbing: function manageTabbing() {
      var tabbingContext = this.model.get('tabbingContext');

      if (tabbingContext) {
        if (tabbingContext.active) {
          Drupal.announce(this.options.strings.tabbingReleased);
        }

        tabbingContext.release();
      }

      if (!this.model.get('isViewing')) {
        tabbingContext = Drupal.tabbingManager.constrain($('.contextual-toolbar-tab, .contextual'));
        this.model.set('tabbingContext', tabbingContext);
        this.announceTabbingConstraint();
        this.announcedOnce = true;
      }
    },
    announceTabbingConstraint: function announceTabbingConstraint() {
      var strings = this.options.strings;
      Drupal.announce(Drupal.formatString(strings.tabbingConstrained, {
        '@contextualsCount': Drupal.formatPlural(Drupal.contextual.collection.length, '@count contextual link', '@count contextual links')
      }));
      Drupal.announce(strings.pressEsc);
    },
    onKeypress: function onKeypress(event) {
      if (!this.announcedOnce && event.keyCode === 9 && !this.model.get('isViewing')) {
        this.announceTabbingConstraint();
        this.announcedOnce = true;
      }

      if (event.keyCode === 27) {
        this.model.set('isViewing', true);
      }
    }
  });
})(jQuery, Drupal, Backbone, _);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function (Drupal, Backbone) {
  Drupal.contextualToolbar.VisualView = Backbone.View.extend({
    events: function events() {
      var touchEndToClick = function touchEndToClick(event) {
        event.preventDefault();
        event.target.click();
      };

      return {
        click: function click() {
          this.model.set('isViewing', !this.model.get('isViewing'));
        },
        touchend: touchEndToClick
      };
    },
    initialize: function initialize() {
      this.listenTo(this.model, 'change', this.render);
      this.listenTo(this.model, 'change:isViewing', this.persist);
    },
    render: function render() {
      this.$el.toggleClass('hidden', !this.model.get('isVisible'));
      this.$el.find('button').toggleClass('is-active', !this.model.get('isViewing'));
      return this;
    },
    persist: function persist(model, isViewing) {
      if (!isViewing) {
        localStorage.setItem('Drupal.contextualToolbar.isViewing', 'false');
      } else {
        localStorage.removeItem('Drupal.contextualToolbar.isViewing');
      }
    }
  });
})(Drupal, Backbone);;
;/*!
 * hoverIntent v1.8.1 // 2014.08.11 // jQuery v1.9.1+
 * http://briancherne.github.io/jquery-hoverIntent/
 *
 * You may use hoverIntent under the terms of the MIT license. Basically that
 * means you are free to use hoverIntent as long as this header is left intact.
 * Copyright 2007, 2014 Brian Cherne
 */

/* hoverIntent is similar to jQuery's built-in "hover" method except that
 * instead of firing the handlerIn function immediately, hoverIntent checks
 * to see if the user's mouse has slowed down (beneath the sensitivity
 * threshold) before firing the event. The handlerOut function is only
 * called after a matching handlerIn.
 *
 * // basic usage ... just like .hover()
 * .hoverIntent( handlerIn, handlerOut )
 * .hoverIntent( handlerInOut )
 *
 * // basic usage ... with event delegation!
 * .hoverIntent( handlerIn, handlerOut, selector )
 * .hoverIntent( handlerInOut, selector )
 *
 * // using a basic configuration object
 * .hoverIntent( config )
 *
 * @param  handlerIn   function OR configuration object
 * @param  handlerOut  function OR selector for delegation OR undefined
 * @param  selector    selector OR undefined
 * @author Brian Cherne <brian(at)cherne(dot)net>
 */(function (factory) {
  'use strict';
  if (typeof define === 'function' && define.amd) {
    define(['jquery'], factory);
  } else if (jQuery && !jQuery.fn.hoverIntent) {
    factory(jQuery);
  }
})(function ($) {
  'use strict';

  // default configuration values
  var _cfg = {
    interval: 100,
    sensitivity: 6,
    timeout: 0
  };

  // counter used to generate an ID for each instance
  var INSTANCE_COUNT = 0;

  // current X and Y position of mouse, updated during mousemove tracking (shared across instances)
  var cX, cY;

  // saves the current pointer position coordinates based on the given mousemove event
  var track = function (ev) {
    cX = ev.pageX;
    cY = ev.pageY;
  };

  // compares current and previous mouse positions
  var compare = function (ev,$el,s,cfg) {
    // compare mouse positions to see if pointer has slowed enough to trigger `over` function
    if ( Math.sqrt( (s.pX - cX) * (s.pX - cX) + (s.pY - cY) * (s.pY - cY) ) < cfg.sensitivity ) {
      $el.off(s.event,track);
      delete s.timeoutId;
      // set hoverIntent state as active for this element (permits `out` handler to trigger)
      s.isActive = true;
      // overwrite old mouseenter event coordinates with most recent pointer position
      ev.pageX = cX; ev.pageY = cY;
      // clear coordinate data from state object
      delete s.pX; delete s.pY;
      return cfg.over.apply($el[0],[ev]);
    } else {
      // set previous coordinates for next comparison
      s.pX = cX; s.pY = cY;
      // use self-calling timeout, guarantees intervals are spaced out properly (avoids JavaScript timer bugs)
      s.timeoutId = setTimeout( function () {compare(ev, $el, s, cfg);} , cfg.interval );
    }
  };

  // triggers given `out` function at configured `timeout` after a mouseleave and clears state
  var delay = function (ev,$el,s,out) {
    delete $el.data('hoverIntent')[s.id];
    return out.apply($el[0],[ev]);
  };

  $.fn.hoverIntent = function (handlerIn,handlerOut,selector) {
    // instance ID, used as a key to store and retrieve state information on an element
    var instanceId = INSTANCE_COUNT++;

    // extend the default configuration and parse parameters
    var cfg = $.extend({}, _cfg);
    if ( $.isPlainObject(handlerIn) ) {
      cfg = $.extend(cfg, handlerIn);
      if ( !$.isFunction(cfg.out) ) {
        cfg.out = cfg.over;
      }
    } else if ( $.isFunction(handlerOut) ) {
      cfg = $.extend(cfg, { over: handlerIn, out: handlerOut, selector: selector } );
    } else {
      cfg = $.extend(cfg, { over: handlerIn, out: handlerIn, selector: handlerOut } );
    }

    // A private function for handling mouse 'hovering'
    var handleHover = function (e) {
      // cloned event to pass to handlers (copy required for event object to be passed in IE)
      var ev = $.extend({},e);

      // the current target of the mouse event, wrapped in a jQuery object
      var $el = $(this);

      // read hoverIntent data from element (or initialize if not present)
      var hoverIntentData = $el.data('hoverIntent');
      if (!hoverIntentData) { $el.data('hoverIntent', (hoverIntentData = {})); }

      // read per-instance state from element (or initialize if not present)
      var state = hoverIntentData[instanceId];
      if (!state) { hoverIntentData[instanceId] = state = { id: instanceId }; }

      // state properties:
      // id = instance ID, used to clean up data
      // timeoutId = timeout ID, reused for tracking mouse position and delaying "out" handler
      // isActive = plugin state, true after `over` is called just until `out` is called
      // pX, pY = previously-measured pointer coordinates, updated at each polling interval
      // event = string representing the namespaced event used for mouse tracking

      // clear any existing timeout
      if (state.timeoutId) { state.timeoutId = clearTimeout(state.timeoutId); }

      // namespaced event used to register and unregister mousemove tracking
      var mousemove = state.event = 'mousemove.hoverIntent.hoverIntent' + instanceId;

      // handle the event, based on its type
      if (e.type === 'mouseenter') {
        // do nothing if already active
        if (state.isActive) { return; }
        // set "previous" X and Y position based on initial entry point
        state.pX = ev.pageX; state.pY = ev.pageY;
        // update "current" X and Y position based on mousemove
        $el.off(mousemove,track).on(mousemove,track);
        // start polling interval (self-calling timeout) to compare mouse coordinates over time
        state.timeoutId = setTimeout( function () {compare(ev,$el,state,cfg);} , cfg.interval );
      } else { // "mouseleave"
        // do nothing if not already active
        if (!state.isActive) { return; }
        // unbind expensive mousemove event
        $el.off(mousemove,track);
        // if hoverIntent state is true, then call the mouseOut function after the specified delay
        state.timeoutId = setTimeout( function () {delay(ev,$el,state,cfg.out);} , cfg.timeout );
      }
    };

    // listen for mouseenter and mouseleave
    return this.on({'mouseenter.hoverIntent':handleHover,'mouseleave.hoverIntent':handleHover}, cfg.selector);
  };
});
;
(function ($, Drupal) {
  Drupal.behaviors.adminToolbar = {
    attach: function (context, settings) {

      $('a.toolbar-icon', context).removeAttr('title');

      $('.toolbar-tray li.menu-item--expanded, .toolbar-tray ul li.menu-item--expanded .menu-item', context).hoverIntent({
        over: function () {
          // At the current depth, we should delete all "hover-intent" classes.
          // Other wise we get unwanted behaviour where menu items are expanded while already in hovering other ones.
          $(this).parent().find('li').removeClass('hover-intent');
          $(this).addClass('hover-intent');
        },
        out: function () {
          $(this).removeClass('hover-intent');
        },
        timeout: 250
      });

      // Make the toolbar menu navigable with keyboard.
      $('ul.toolbar-menu li.menu-item--expanded a', context).on('focusin', function () {
        $('li.menu-item--expanded', context).removeClass('hover-intent');
        $(this).parents('li.menu-item--expanded').addClass('hover-intent');
      });

      $('ul.toolbar-menu li.menu-item a', context).keydown(function (e) {
        if ((e.shiftKey && (e.keyCode || e.which) == 9)) {
          if ($(this).parent('.menu-item').prev().hasClass('menu-item--expanded')) {
            $(this).parent('.menu-item').prev().addClass('hover-intent');
          }
        }
      });

      $('.toolbar-menu:first-child > .menu-item:not(.menu-item--expanded) a, .toolbar-tab > a', context).on('focusin', function () {
        $('.menu-item--expanded').removeClass('hover-intent');
      });

      $('.toolbar-menu:first-child > .menu-item', context).on('hover', function () {
        $(this, 'a').css("background: #fff;");
      });

      $('ul:not(.toolbar-menu)', context).on({
        mousemove: function () {
          $('li.menu-item--expanded').removeClass('hover-intent');
        },
        hover: function () {
          $('li.menu-item--expanded').removeClass('hover-intent');
        }
      });

      // Always hide the dropdown menu on mobile.
      if ($('body:not(.toolbar-fixed) #toolbar-item-administration-tray').hasClass('toolbar-tray-vertical')) {
        $('#toolbar-item-administration').removeClass('is-active');
        $('#toolbar-item-administration-tray').removeClass('is-active');
      };

    }
  };
})(jQuery, Drupal);
;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, Drupal, drupalSettings) {
  var pathInfo = drupalSettings.path;
  var escapeAdminPath = sessionStorage.getItem('escapeAdminPath');
  var windowLocation = window.location;

  if (!pathInfo.currentPathIsAdmin && !/destination=/.test(windowLocation.search)) {
    sessionStorage.setItem('escapeAdminPath', windowLocation);
  }

  Drupal.behaviors.escapeAdmin = {
    attach: function attach() {
      var $toolbarEscape = $('[data-toolbar-escape-admin]').once('escapeAdmin');

      if ($toolbarEscape.length && pathInfo.currentPathIsAdmin) {
        if (escapeAdminPath !== null) {
          $toolbarEscape.attr('href', escapeAdminPath);
        } else {
          $toolbarEscape.text(Drupal.t('Home'));
        }
      }
    }
  };
})(jQuery, Drupal, drupalSettings);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, Drupal, drupalSettings) {
  function mapTextContentToAjaxResponse(content) {
    if (content === '') {
      return false;
    }

    try {
      return JSON.parse(content);
    } catch (e) {
      return false;
    }
  }

  function bigPipeProcessPlaceholderReplacement(index, placeholderReplacement) {
    var placeholderId = placeholderReplacement.getAttribute('data-big-pipe-replacement-for-placeholder-with-id');
    var content = this.textContent.trim();

    if (typeof drupalSettings.bigPipePlaceholderIds[placeholderId] !== 'undefined') {
      var response = mapTextContentToAjaxResponse(content);

      if (response === false) {
        $(this).removeOnce('big-pipe');
      } else {
        var ajaxObject = Drupal.ajax({
          url: '',
          base: false,
          element: false,
          progress: false
        });
        ajaxObject.success(response, 'success');
      }
    }
  }

  var interval = drupalSettings.bigPipeInterval || 50;
  var timeoutID;

  function bigPipeProcessDocument(context) {
    if (!context.querySelector('script[data-big-pipe-event="start"]')) {
      return false;
    }

    $(context).find('script[data-big-pipe-replacement-for-placeholder-with-id]').once('big-pipe').each(bigPipeProcessPlaceholderReplacement);

    if (context.querySelector('script[data-big-pipe-event="stop"]')) {
      if (timeoutID) {
        clearTimeout(timeoutID);
      }

      return true;
    }

    return false;
  }

  function bigPipeProcess() {
    timeoutID = setTimeout(function () {
      if (!bigPipeProcessDocument(document)) {
        bigPipeProcess();
      }
    }, interval);
  }

  bigPipeProcess();
  $(window).on('load', function () {
    if (timeoutID) {
      clearTimeout(timeoutID);
    }

    bigPipeProcessDocument(document);
  });
})(jQuery, Drupal, drupalSettings);;
