/*! (C) Andrea Giammarchi - @WebReflection - Mit Style License */
(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){(function(e,t,n,r){"use strict";function rt(e,t){for(var n=0,r=e.length;n<r;n++)vt(e[n],t)}function it(e){for(var t=0,n=e.length,r;t<n;t++)r=e[t],nt(r,b[ot(r)])}function st(e){return function(t){j(t)&&(vt(t,e),rt(t.querySelectorAll(w),e))}}function ot(e){var t=e.getAttribute("is"),n=e.nodeName.toUpperCase(),r=S.call(y,t?v+t.toUpperCase():d+n);return t&&-1<r&&!ut(n,t)?-1:r}function ut(e,t){return-1<w.indexOf(e+'[is="'+t+'"]')}function at(e){var t=e.currentTarget,n=e.attrChange,r=e.attrName,i=e.target;Q&&(!i||i===t)&&t.attributeChangedCallback&&r!=="style"&e.prevValue!==e.newValue&&t.attributeChangedCallback(r,n===e[a]?null:e.prevValue,n===e[l]?null:e.newValue)}function ft(e){var t=st(e);return function(e){X.push(t,e.target)}}function lt(e){K&&(K=!1,e.currentTarget.removeEventListener(h,lt)),rt((e.target||t).querySelectorAll(w),e.detail===o?o:s),B&&pt()}function ct(e,t){var n=this;q.call(n,e,t),G.call(n,{target:n})}function ht(e,t){D(e,t),et?et.observe(e,z):(J&&(e.setAttribute=ct,e[i]=Z(e),e.addEventListener(p,G)),e.addEventListener(c,at)),e.createdCallback&&Q&&(e.created=!0,e.createdCallback(),e.created=!1)}function pt(){for(var e,t=0,n=F.length;t<n;t++)e=F[t],E.contains(e)||(n--,F.splice(t--,1),vt(e,o))}function dt(e){throw new Error("A "+e+" type is already registered")}function vt(e,t){var n,r=ot(e);-1<r&&(tt(e,b[r]),r=0,t===s&&!e[s]?(e[o]=!1,e[s]=!0,r=1,B&&S.call(F,e)<0&&F.push(e)):t===o&&!e[o]&&(e[s]=!1,e[o]=!0,r=1),r&&(n=e[t+"Callback"])&&n.call(e))}if(r in t)return;var i="__"+r+(Math.random()*1e5>>0),s="attached",o="detached",u="extends",a="ADDITION",f="MODIFICATION",l="REMOVAL",c="DOMAttrModified",h="DOMContentLoaded",p="DOMSubtreeModified",d="<",v="=",m=/^[A-Z][A-Z0-9]*(?:-[A-Z0-9]+)+$/,g=["ANNOTATION-XML","COLOR-PROFILE","FONT-FACE","FONT-FACE-SRC","FONT-FACE-URI","FONT-FACE-FORMAT","FONT-FACE-NAME","MISSING-GLYPH"],y=[],b=[],w="",E=t.documentElement,S=y.indexOf||function(e){for(var t=this.length;t--&&this[t]!==e;);return t},x=n.prototype,T=x.hasOwnProperty,N=x.isPrototypeOf,C=n.defineProperty,k=n.getOwnPropertyDescriptor,L=n.getOwnPropertyNames,A=n.getPrototypeOf,O=n.setPrototypeOf,M=!!n.__proto__,_=n.create||function mt(e){return e?(mt.prototype=e,new mt):this},D=O||(M?function(e,t){return e.__proto__=t,e}:L&&k?function(){function e(e,t){for(var n,r=L(t),i=0,s=r.length;i<s;i++)n=r[i],T.call(e,n)||C(e,n,k(t,n))}return function(t,n){do e(t,n);while((n=A(n))&&!N.call(n,t));return t}}():function(e,t){for(var n in t)e[n]=t[n];return e}),P=e.MutationObserver||e.WebKitMutationObserver,H=(e.HTMLElement||e.Element||e.Node).prototype,B=!N.call(H,E),j=B?function(e){return e.nodeType===1}:function(e){return N.call(H,e)},F=B&&[],I=H.cloneNode,q=H.setAttribute,R=H.removeAttribute,U=t.createElement,z=P&&{attributes:!0,characterData:!0,attributeOldValue:!0},W=P||function(e){J=!1,E.removeEventListener(c,W)},X,V=e.requestAnimationFrame||e.webkitRequestAnimationFrame||e.mozRequestAnimationFrame||e.msRequestAnimationFrame||function(e){setTimeout(e,10)},$=!1,J=!0,K=!0,Q=!0,G,Y,Z,et,tt,nt;O||M?(tt=function(e,t){N.call(t,e)||ht(e,t)},nt=ht):(tt=function(e,t){e[i]||(e[i]=n(!0),ht(e,t))},nt=tt),B?(J=!1,function(){var e=k(H,"addEventListener"),t=e.value,n=function(e){var t=new CustomEvent(c,{bubbles:!0});t.attrName=e,t.prevValue=this.getAttribute(e),t.newValue=null,t[l]=t.attrChange=2,R.call(this,e),this.dispatchEvent(t)},r=function(e,t){var n=this.hasAttribute(e),r=n&&this.getAttribute(e),i=new CustomEvent(c,{bubbles:!0});q.call(this,e,t),i.attrName=e,i.prevValue=n?r:null,i.newValue=t,n?i[f]=i.attrChange=1:i[a]=i.attrChange=0,this.dispatchEvent(i)},s=function(e){var t=e.currentTarget,n=t[i],r=e.propertyName,s;n.hasOwnProperty(r)&&(n=n[r],s=new CustomEvent(c,{bubbles:!0}),s.attrName=n.name,s.prevValue=n.value||null,s.newValue=n.value=t[r]||null,s.prevValue==null?s[a]=s.attrChange=0:s[f]=s.attrChange=1,t.dispatchEvent(s))};e.value=function(e,o,u){e===c&&this.attributeChangedCallback&&this.setAttribute!==r&&(this[i]={className:{name:"class",value:this.className}},this.setAttribute=r,this.removeAttribute=n,t.call(this,"propertychange",s)),t.call(this,e,o,u)},C(H,"addEventListener",e)}()):P||(E.addEventListener(c,W),E.setAttribute(i,1),E.removeAttribute(i),J&&(G=function(e){var t=this,n,r,s;if(t===e.target){n=t[i],t[i]=r=Z(t);for(s in r){if(!(s in n))return Y(0,t,s,n[s],r[s],a);if(r[s]!==n[s])return Y(1,t,s,n[s],r[s],f)}for(s in n)if(!(s in r))return Y(2,t,s,n[s],r[s],l)}},Y=function(e,t,n,r,i,s){var o={attrChange:e,currentTarget:t,attrName:n,prevValue:r,newValue:i};o[s]=e,at(o)},Z=function(e){for(var t,n,r={},i=e.attributes,s=0,o=i.length;s<o;s++)t=i[s],n=t.name,n!=="setAttribute"&&(r[n]=t.value);return r})),t[r]=function(n,r){c=n.toUpperCase(),$||($=!0,P?(et=function(e,t){function n(e,t){for(var n=0,r=e.length;n<r;t(e[n++]));}return new P(function(r){for(var i,s,o,u=0,a=r.length;u<a;u++)i=r[u],i.type==="childList"?(n(i.addedNodes,e),n(i.removedNodes,t)):(s=i.target,Q&&s.attributeChangedCallback&&i.attributeName!=="style"&&(o=s.getAttribute(i.attributeName),o!==i.oldValue&&s.attributeChangedCallback(i.attributeName,i.oldValue,o)))})}(st(s),st(o)),et.observe(t,{childList:!0,subtree:!0})):(X=[],V(function E(){while(X.length)X.shift().call(null,X.shift());V(E)}),t.addEventListener("DOMNodeInserted",ft(s)),t.addEventListener("DOMNodeRemoved",ft(o))),t.addEventListener(h,lt),t.addEventListener("readystatechange",lt),t.createElement=function(e,n){var r=U.apply(t,arguments),i=""+e,s=S.call(y,(n?v:d)+(n||i).toUpperCase()),o=-1<s;return n&&(r.setAttribute("is",n=n.toLowerCase()),o&&(o=ut(i.toUpperCase(),n))),Q=!t.createElement.innerHTMLHelper,o&&nt(r,b[s]),r},H.cloneNode=function(e){var t=I.call(this,!!e),n=ot(t);return-1<n&&nt(t,b[n]),e&&it(t.querySelectorAll(w)),t}),-2<S.call(y,v+c)+S.call(y,d+c)&&dt(n);if(!m.test(c)||-1<S.call(g,c))throw new Error("The type "+n+" is invalid");var i=function(){return f?t.createElement(l,c):t.createElement(l)},a=r||x,f=T.call(a,u),l=f?r[u].toUpperCase():c,c,p;return f&&-1<S.call(y,d+l)&&dt(l),p=y.push((f?v:d)+c)-1,w=w.concat(w.length?",":"",f?l+'[is="'+n.toLowerCase()+'"]':l),i.prototype=b[p]=T.call(a,"prototype")?a.prototype:_(H),rt(t.querySelectorAll(w),s),i}})(window,document,Object,"registerElement")},{}],2:[function(require,module,exports){(function(global){var Class=require("es-class"),restyle=require("restyle");var DOMClass=function(g,A,O){"use strict";var ATTACHED="onAttached",ATTACHED_CALLBACK="attachedCallback",CHANGED="onChanged",CHANGED_CALLBACK="attributeChangedCallback",CONSTRUCTOR="constructor",CONSTRUCTOR_CALLBACK="createdCallback",CSS="css",STYLE="<style>",DETACHED="onDetached",DETACHED_CALLBAK="detachedCallback",EXTENDS="extends",NAME="name",hOP=O.hasOwnProperty,empty=A.prototype,copyOwn=function(source,target){for(var k,p=gOK(source),i=p.length;i--;){k=p[i];if(ignore.indexOf(k)<0&&!hOP.call(target,k)){dP(target,k,gOPD(source,k))}}},dP=O.defineProperty,gOPD=O.getOwnPropertyDescriptor,gOPN=O.getOwnPropertyNames||O.keys||function(o){var a=[],k;for(k in o)if(hOP.call(o,k))a.push(k);return a},gOPS=O.getOwnPropertySymbols||function(){return empty},getHTMLConstructor=function(name){return g["HTML"+name+"Element"]},gOK=function(obj){return gOPS(obj).concat(gOPN(obj))},grantArguments=function(el,args){if(!args.length){var attr=el.getAttribute("data-arguments");if(attr){args=attr.charAt(0)==="["?JSON.parse(attr):attr.split(/\s*,\s*/)}}return args},ignore=gOK(function(){}),setIfThere=function(where,what,target,alias){if(hOP.call(where,what)){target[alias]=where[what]}},slice=function slice(){for(var o=+this,i=o,l=arguments.length,n=l-o,a=new A(n<0?0:n);i<l;i++)a[i-o]=arguments[i];return a},uid=function(name){return name+"-i-"+(hOP.call(uids,name)?++uids[name]:uids[name]=0)},lazyStyle=function(el,key,uniqueClassId){var style;el.setAttribute("dom-class-uid",uniqueClassId);dP(el,CSS,{configurable:true,get:function(){return style||(style=restyle(key+'[dom-class-uid="'+uniqueClassId+'"]',{}))},set:function(info){el[CSS].replace(info)}})},uids={},i=0;return function DOMClass(description){var CustomElement=function CustomElement(){args=slice.apply(0,arguments);return new Element},args=empty,el={},css=hOP.call(description,CSS),init=hOP.call(description,CONSTRUCTOR),createdCallback=init&&description[CONSTRUCTOR],Element,constructor,key,proto,nodeName;setIfThere(description,ATTACHED,el,ATTACHED_CALLBACK);setIfThere(description,CHANGED,el,CHANGED_CALLBACK);setIfThere(description,DETACHED,el,DETACHED_CALLBAK);for(key in description){if(hOP.call(description,key)){switch(key){case ATTACHED:case CHANGED:case CONSTRUCTOR:case DETACHED:case EXTENDS:case NAME:case CSS:break;default:el[key]=description[key];break}}}el[EXTENDS]=hOP.call(description,EXTENDS)?description[EXTENDS].prototype:HTMLElement.prototype;if(el[EXTENDS]instanceof HTMLElement){switch(description[EXTENDS]){case getHTMLConstructor("Anchor"):nodeName="a";break;case getHTMLConstructor("Audio"):nodeName="audio";break;case getHTMLConstructor("BR"):nodeName="br";break;case getHTMLConstructor("Body"):nodeName="body";break;case getHTMLConstructor("Button"):nodeName="button";break;case getHTMLConstructor("Canvas"):nodeName="canvas";break;case getHTMLConstructor("Col"):nodeName="col";break;case getHTMLConstructor("DataList"):nodeName="dl";break;case getHTMLConstructor("Div"):nodeName="div";break;case getHTMLConstructor("Form"):nodeName="form";break;case getHTMLConstructor("HR"):nodeName="hr";break;case getHTMLConstructor("Head"):nodeName="head";break;case getHTMLConstructor("IFrame"):nodeName="iframe";break;case getHTMLConstructor("Image"):nodeName="img";break;case getHTMLConstructor("Input"):nodeName="input";break;case getHTMLConstructor("LI"):nodeName="li";break;case getHTMLConstructor("Label"):nodeName="label";break;case getHTMLConstructor("Legend"):nodeName="legend";break;case getHTMLConstructor("Link"):nodeName="link";break;case getHTMLConstructor("Menu"):nodeName="menu";break;case getHTMLConstructor("OList"):nodeName="ol";break;case getHTMLConstructor("Option"):nodeName="option";break;case getHTMLConstructor("Paragraph"):nodeName="p";break;case getHTMLConstructor("Progress"):nodeName="progress";break;case getHTMLConstructor("Quote"):nodeName="quote";break;case getHTMLConstructor("Select"):nodeName="select";break;case getHTMLConstructor("Span"):nodeName="span";break;case getHTMLConstructor("Style"):nodeName="style";break;case getHTMLConstructor("Table"):nodeName="table";break;case getHTMLConstructor("TableCaption"):nodeName="caption";break;case getHTMLConstructor("TableCell"):nodeName="td";break;case getHTMLConstructor("TableCol"):nodeName="colgroup";break;case getHTMLConstructor("TableRow"):nodeName="tr";break;case getHTMLConstructor("TableSection"):nodeName="tbody";break;case getHTMLConstructor("Table"):nodeName="table";break;case getHTMLConstructor("Table"):nodeName="table";break;case getHTMLConstructor("TextArea"):nodeName="textarea";break;case getHTMLConstructor("Track"):nodeName="track";break;case getHTMLConstructor("UList"):nodeName="ul";break;case getHTMLConstructor("Video"):nodeName="video";break}}key=hOP.call(description,NAME)?description[NAME]:"x-dom-class-"+i++;if(css)el[STYLE]=restyle(key,description[CSS]);el[CONSTRUCTOR_CALLBACK]=function(){var a=grantArguments(this,args);args=empty;constructor.apply(this,a);if(css)lazyStyle(this,key,uid(key));if(init)createdCallback.apply(this,a)};constructor=new Class(el);copyOwn(constructor,CustomElement);proto={prototype:constructor.prototype};if(nodeName)proto[EXTENDS]=nodeName;Element=document.registerElement(key,proto);CustomElement.prototype=Element.prototype;dP(Element.prototype,CONSTRUCTOR,{value:CustomElement});return CustomElement}}(this.window||global,Array,Object);module.exports=DOMClass}).call(this,typeof global!=="undefined"?global:typeof self!=="undefined"?self:typeof window!=="undefined"?window:{})},{"es-class":4,restyle:5}],3:[function(require,module,exports){(function(e){"use strict";function t(){return l.createDocumentFragment()}function n(e){return l.createElement(e)}function r(e){if(e.length===1)return i(e[0]);for(var n=t(),r=I.call(e),s=0;s<e.length;s++)n.appendChild(i(r[s]));return n}function i(e){return typeof e=="string"?l.createTextNode(e):e}for(var s,o,u,a,f,l=e.document,c=Object.defineProperty||function(e,t,n){e.__defineGetter__(t,n.get)},h=[].indexOf||function(t){var n=this.length;while(n--)if(this[n]===t)break;return n},p=function(e){if(!e)throw"SyntaxError";if(y.test(e))throw"InvalidCharacterError";return e},d=function(e){var t=e.className,n=typeof t=="object",r=(n?t.baseVal:t).replace(g,"");r.length&&F.push.apply(this,r.split(y)),this._isSVG=n,this._=e},v={get:function(){return new d(this)},set:function(){}},m="dom4-tmp-".concat(Math.random()*+new Date).replace(".","-"),g=/^\s+|\s+$/g,y=/\s+/,b=" ",w="classList",E=function(t,n){if(this.contains(t))n||this.remove(t);else if(n===undefined||n)n=!0,this.add(t);return!!n},S=e.DocumentFragment,x=e.Node,T=(x||Element).prototype,N=e.CharacterData||x,C=N&&N.prototype,k=e.DocumentType,L=k&&k.prototype,A=(e.Element||x||e.HTMLElement).prototype,O=e.HTMLSelectElement||n("select").constructor,M=O.prototype.remove,_=e.ShadowRoot,D=e.SVGElement,P=/ /g,H="\\ ",B=function(e){var t=e==="querySelectorAll";return function(n){var r,i,s,o,u,a,f=this.parentNode;if(f){for(s=this.getAttribute("id")||m,o=s===m?s:s.replace(P,H),a=n.split(","),i=0;i<a.length;i++)a[i]="#"+o+" "+a[i];n=a.join(",")}s===m&&this.setAttribute("id",s),u=(f||this)[e](n),s===m&&this.removeAttribute("id");if(t){i=u.length,r=new Array(i);while(i--)r[i]=u[i]}else r=u;return r}},j=(function(e){"query"in e||(e.query=A.query),"queryAll"in e||(e.queryAll=A.queryAll)}),F=["matches",A.matchesSelector||A.webkitMatchesSelector||A.khtmlMatchesSelector||A.mozMatchesSelector||A.msMatchesSelector||A.oMatchesSelector||function(t){var n=this.parentNode;return!!n&&-1<h.call(n.querySelectorAll(t),this)},"closest",function(t){var n=this,r;while((r=n&&n.matches)&&!n.matches(t))n=n.parentNode;return r?n:null},"prepend",function(){var t=this.firstChild,n=r(arguments);t?this.insertBefore(n,t):this.appendChild(n)},"append",function(){this.appendChild(r(arguments))},"before",function(){var t=this.parentNode;t&&t.insertBefore(r(arguments),this)},"after",function(){var t=this.parentNode,n=this.nextSibling,i=r(arguments);t&&(n?t.insertBefore(i,n):t.appendChild(i))},"replace",function(){this.replaceWith.apply(this,arguments)},"replaceWith",function(){var t=this.parentNode;t&&t.replaceChild(r(arguments),this)},"remove",function(){var t=this.parentNode;t&&t.removeChild(this)},"query",B("querySelector"),"queryAll",B("querySelectorAll")],I=F.slice,q=F.length;q;q-=2)o=F[q-2],o in A||(A[o]=F[q-1]),o==="remove"&&(O.prototype[o]=function(){return 0<arguments.length?M.apply(this,arguments):A.remove.call(this)}),/before|after|replace|remove/.test(o)&&(N&&!(o in C)&&(C[o]=F[q-1]),k&&!(o in L)&&(L[o]=F[q-1]));j(l);if(S)j(S.prototype);else try{j(t().constructor.prototype)}catch(R){}_&&j(_.prototype),n("a").matches("a")||(A[o]=function(e){return function(n){return e.call(this.parentNode?this:t().appendChild(this),n)}}(A[o])),d.prototype={length:0,add:function(){for(var t=0,n;t<arguments.length;t++)n=arguments[t],this.contains(n)||F.push.call(this,o);this._isSVG?this._.setAttribute("class",""+this):this._.className=""+this},contains:function(e){return function(n){return q=e.call(this,o=p(n)),-1<q}}([].indexOf||function(e){q=this.length;while(q--&&this[q]!==e);return q}),item:function(t){return this[t]||null},remove:function(){for(var t=0,n;t<arguments.length;t++)n=arguments[t],this.contains(n)&&F.splice.call(this,q,1);this._isSVG?this._.setAttribute("class",""+this):this._.className=""+this},toggle:E,toString:function U(){return F.join.call(this,b)}},D&&!(w in D.prototype)&&c(D.prototype,w,v),w in l.documentElement?(a=n("div")[w],a.add("a","b","a"),"a b"!=a&&(u=a.constructor.prototype,"add"in u||(u=e.TemporaryTokenList.prototype),f=function(e){return function(){var t=0;while(t<arguments.length)e.call(this,arguments[t++])}},u.add=f(u.add),u.remove=f(u.remove),u.toggle=E)):c(A,w,v),"contains"in T||c(T,"contains",{value:function(e){while(e&&e!==this)e=e.parentNode;return this===e}}),"head"in l||c(l,"head",{get:function(){return s||(s=l.getElementsByTagName("head")[0])}}),function(){for(var t,n=e.requestAnimationFrame,r=e.cancelAnimationFrame,i=["o","ms","moz","webkit"],s=i.length;!r&&s--;)n=n||e[i[s]+"RequestAnimationFrame"],r=e[i[s]+"CancelAnimationFrame"]||e[i[s]+"CancelRequestAnimationFrame"];r||(n?(t=n,n=function(e){var n=!0;return t(function(){n&&e.apply(this,arguments)}),function(){n=!1}},r=function(e){e()}):(n=function(e){return setTimeout(e,15,15)},r=function(e){clearTimeout(e)})),e.requestAnimationFrame=n,e.cancelAnimationFrame=r}();try{new e.CustomEvent("?")}catch(R){e.CustomEvent=function(e,t){function n(n,i){var s=l.createEvent(e);if(typeof n!="string")throw new Error("An event name must be provided");return e=="Event"&&(s.initCustomEvent=r),i==null&&(i=t),s.initCustomEvent(n,i.bubbles,i.cancelable,i.detail),s}function r(e,t,n,r){this.initEvent(e,t,n),this.detail=r}return n}(e.CustomEvent?"CustomEvent":"Event",{bubbles:!1,cancelable:!1,detail:null})}})(window)},{}],4:[function(require,module,exports){var Class=Class||function(Object){"use strict";var CONSTRUCTOR="constructor",EXTENDS="extends",IMPLEMENTS="implements",INIT="init",PROTOTYPE="prototype",STATIC="static",SUPER="super",TO_STRING="toString",VALUE="value",WITH="with",PROTO="__proto__",nonEnumerables=["hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString",TO_STRING,"valueOf"],ObjectPrototype=Object[PROTOTYPE],hOP=ObjectPrototype[nonEnumerables[0]],toString=ObjectPrototype[TO_STRING],propertyIsEnumerable=ObjectPrototype[nonEnumerables[2]]||function(p){for(var k in this)if(p===k)return hOP.call(this,p);return false},hasIEEnumerableBug=!propertyIsEnumerable.call({toString:0},TO_STRING),create=Object.create||function(proto){var isInstance=this instanceof create;create[PROTOTYPE]=isInstance?createPrototype:proto||ObjectPrototype;return isInstance?this:new create},createPrototype=create[PROTOTYPE],defineProperty=Object.defineProperty,gOPD=Object.getOwnPropertyDescriptor,gOPN=Object.getOwnPropertyNames||function(object){var names=[],i,key;for(key in object){if(hOP.call(object,key)){names.push(key)}}if(hasIEEnumerableBug){for(i=0;i<nonEnumerables.length;i++){key=nonEnumerables[i];if(hOP.call(object,key)){names.push(key)}}}return names},gOPS=Object.getOwnPropertySymbols||function(){return[]},getPrototypeOf=Object.getPrototypeOf,gPO=getPrototypeOf||function(o){return o[PROTO]||null},oK=function(o){return gOPN(o).concat(gOPS(o))},isArray=Array.isArray||function(a){return toString.call(a)==="[object Array]"},nativeFunctionOPN=gOPN(function(){}).concat("arguments"),indexOf=nativeFunctionOPN.indexOf||function(v){for(var i=this.length;i--&&this[i]!==v;){}return i},isClassDescriptor={value:true},trustSuper=(""+function(){this["super"]()}).indexOf(SUPER)<0?function(){return true}:function(method){var str=""+method,i=str.indexOf(SUPER);return i<0?false:isBoundary(str.charCodeAt(i-1))&&isBoundary(str.charCodeAt(i+5))};try{defineProperty({},"{}",{})}catch(o_O){if("__defineGetter__"in{}){defineProperty=function(object,name,descriptor){if(hOP.call(descriptor,VALUE)){object[name]=descriptor[VALUE]}else{if(hOP.call(descriptor,"get")){object.__defineGetter__(name,descriptor.get)}if(hOP.call(descriptor,"set")){object.__defineSetter__(name,descriptor.set)}}return object};gOPD=function(object,key){var get=object.__lookupGetter__(key),set=object.__lookupSetter__(key),descriptor={};if(get||set){if(get){descriptor.get=get}if(set){descriptor.set=set}}else{descriptor[VALUE]=object[key]}return descriptor}}else{defineProperty=function(object,name,descriptor){object[name]=descriptor[VALUE];return object};gOPD=function(object,key){return{value:object[key]}}}}function addMixins(mixins,target,inherits,isNOTExtendingNative){for(var source,init=[],i=0;i<mixins.length;i++){source=transformMixin(mixins[i]);if(hOP.call(source,INIT)){init.push(source[INIT])}copyOwn(source,target,inherits,false,false,isNOTExtendingNative)}return init}function copyDeep(source){for(var key,descriptor,value,target=create(gPO(source)),names=oK(source),i=0;i<names.length;i++){key=names[i];descriptor=gOPD(source,key);if(hOP.call(descriptor,VALUE)){copyValueIfObject(descriptor,copyDeep)}defineProperty(target,key,descriptor)}return target}function copyMerged(source,target){for(var key,descriptor,value,tvalue,names=oK(source),i=0;i<names.length;i++){key=names[i];descriptor=gOPD(source,key);if(hOP.call(target,key)){if(hOP.call(descriptor,VALUE)){value=descriptor[VALUE];if(isObject(value)){descriptor=gOPD(target,key);if(hOP.call(descriptor,VALUE)){tvalue=descriptor[VALUE];if(isObject(tvalue)){copyMerged(value,tvalue)}}}}}else{if(hOP.call(descriptor,VALUE)){copyValueIfObject(descriptor,copyDeep)}defineProperty(target,key,descriptor)}}}function copyOwn(source,target,inherits,publicStatic,allowInit,isNOTExtendingNative){for(var key,noFunctionCheck=typeof source!=="function",names=oK(source),i=0;i<names.length;i++){key=names[i];if((noFunctionCheck||indexOf.call(nativeFunctionOPN,key)<0)&&isNotASpecialKey(key,allowInit)){if(hOP.call(target,key)){warn("duplicated: "+key.toString())}setProperty(inherits,target,key,gOPD(source,key),publicStatic,isNOTExtendingNative)}}}function copyValueIfObject(where,how){var what=where[VALUE];if(isObject(what)){where[VALUE]=how(what)}}function createConstructor(hasParentPrototype,parent){var Class=function Class(){};return hasParentPrototype&&""+parent!==""+Class?function Class(){return parent.apply(this,arguments)}:Class}function define(target,key,value,publicStatic){var configurable=isConfigurable(key,publicStatic);defineProperty(target,key,{enumerable:false,configurable:configurable,writable:configurable,value:value})}function isBoundary(code){return code?(code<65||90<code)&&(code<97||122<code)&&code!==95:true}function isConfigurable(key,publicStatic){return publicStatic?!isPublicStatic(key):true}function isNotASpecialKey(key,allowInit){return key!==CONSTRUCTOR&&key!==EXTENDS&&key!==IMPLEMENTS&&key!==PROTOTYPE&&key!==STATIC&&key!==SUPER&&key!==WITH&&(allowInit||key!==INIT)}function isObject(value){return value!=null&&typeof value==="object"}function isPublicStatic(key){for(var c,i=0;i<key.length;i++){c=key.charCodeAt(i);if((c<65||90<c)&&c!==95){return false}}return true}function transformMixin(trait){if(isObject(trait))return trait;else{var i,key,keys,object,proto;if(trait.isClass){if(trait.length){warn((trait.name||"Class")+" should not expect arguments")}for(object={init:trait},proto=trait.prototype;proto&&proto!==Object.prototype;proto=gPO(proto)){for(i=0,keys=oK(proto);i<keys.length;i++){key=keys[i];if(isNotASpecialKey(key,false)&&!hOP.call(object,key)){defineProperty(object,key,gOPD(proto,key))}}}}else{for(i=0,object={},proto=trait({}),keys=oK(proto);i<keys.length;i++){key=keys[i];if(key!==INIT){if(~key.toString().indexOf("mixin:init")&&isArray(proto[key])){object.init=proto[key][0]}else{defineProperty(object,key,gOPD(proto,key))}}}}return object}}function setProperty(inherits,target,key,descriptor,publicStatic,isNOTExtendingNative){var hasValue=hOP.call(descriptor,VALUE),configurable,value;if(publicStatic){if(hOP.call(target,key)){if(inherits&&isObject(target[key])&&isObject(inherits[CONSTRUCTOR][key])){copyMerged(inherits[CONSTRUCTOR][key],target[key])}return}else if(hasValue){copyValueIfObject(descriptor,copyDeep)}}else if(hasValue){value=descriptor[VALUE];if(typeof value==="function"&&trustSuper(value)){descriptor[VALUE]=wrap(inherits,key,value,publicStatic)}}else if(isNOTExtendingNative){wrapGetOrSet(inherits,key,descriptor,"get");wrapGetOrSet(inherits,key,descriptor,"set")}configurable=isConfigurable(key,publicStatic);descriptor.enumerable=false;descriptor.configurable=configurable;if(hasValue){descriptor.writable=configurable}defineProperty(target,key,descriptor)}function verifyImplementations(interfaces,target){for(var current,key,i=0;i<interfaces.length;i++){current=interfaces[i];for(key in current){if(hOP.call(current,key)&&!hOP.call(target,key)){warn(key.toString()+" is not implemented")}}}}function warn(message){try{console.warn(message)}catch(meh){}}function wrap(inherits,key,method,publicStatic){return function(){if(!hOP.call(this,SUPER)){define(this,SUPER,null,publicStatic)}var previous=this[SUPER],current=this[SUPER]=inherits[key],result=method.apply(this,arguments);this[SUPER]=previous;return result}}function wrapGetOrSet(inherits,key,descriptor,gs,publicStatic){if(hOP.call(descriptor,gs)&&trustSuper(descriptor[gs])){descriptor[gs]=wrap(gOPD(inherits,key),gs,descriptor[gs],publicStatic)}}return function(description){var hasConstructor=hOP.call(description,CONSTRUCTOR),hasParent=hOP.call(description,EXTENDS),parent=hasParent&&description[EXTENDS],hasParentPrototype=hasParent&&typeof parent==="function",inherits=hasParentPrototype?parent[PROTOTYPE]:parent,constructor=hasConstructor?description[CONSTRUCTOR]:createConstructor(hasParentPrototype,parent),hasSuper=hasParent&&hasConstructor&&trustSuper(constructor),prototype=hasParent?create(inherits):constructor[PROTOTYPE],isNOTExtendingNative=toString.call(inherits).indexOf(" GObject_")<0,mixins,length;if(hasSuper&&isNOTExtendingNative){constructor=wrap(inherits,CONSTRUCTOR,constructor,false)}if(hOP.call(description,WITH)){mixins=addMixins([].concat(description[WITH]),prototype,inherits,isNOTExtendingNative);length=mixins.length;if(length){constructor=function(parent){return function(){var i=0;while(i<length)mixins[i++].call(this);return parent.apply(this,arguments)}}(constructor);constructor[PROTOTYPE]=prototype}}if(hOP.call(description,STATIC)){copyOwn(description[STATIC],constructor,inherits,true,true,isNOTExtendingNative)}if(hasParent){if(parent!==inherits){copyOwn(parent,constructor,inherits,true,true,isNOTExtendingNative)}constructor[PROTOTYPE]=prototype}if(prototype[CONSTRUCTOR]!==constructor){define(prototype,CONSTRUCTOR,constructor,false)}copyOwn(description,prototype,inherits,false,true,isNOTExtendingNative);if(hOP.call(description,IMPLEMENTS)){verifyImplementations([].concat(description[IMPLEMENTS]),prototype)}if(hasParent&&!getPrototypeOf){define(prototype,PROTO,inherits,false)}return defineProperty(constructor,"isClass",isClassDescriptor)}}(Object);module.exports=Class},{}],5:[function(require,module,exports){module.exports=function(O){"use strict";var toString=O.toString,has=O.hasOwnProperty,camelFind=/([a-z])([A-Z])/g,ignoreSpecial=/^@(?:page|font-face)/,isMedia=/^@(?:media)/,isArray=Array.isArray||function(arr){return toString.call(arr)==="[object Array]"},empty=[],restyle;function ReStyle(component,node,css,prefixes,doc){this.component=component;this.node=node;this.css=css;this.prefixes=prefixes;this.doc=doc}function replace(substitute){if(!(substitute instanceof ReStyle)){substitute=restyle(this.component,substitute,this.prefixes,this.doc)}this.remove();ReStyle.call(this,substitute.component,substitute.node,substitute.css,substitute.prefixes,substitute.doc)}ReStyle.prototype={overwrite:replace,replace:replace,set:replace,remove:function(){var node=this.node,parentNode=node.parentNode;if(parentNode){parentNode.removeChild(node)}},valueOf:function(){return this.css}};function camelReplace(m,$1,$2){return $1+"-"+$2.toLowerCase()}function create(key,value,prefixes){var css=[],pixels=typeof value==="number"?"px":"",k=key.replace(camelFind,camelReplace),i;for(i=0;i<prefixes.length;i++){css.push("-",prefixes[i],"-",k,":",value,pixels,";")}css.push(k,":",value,pixels,";");return css.join("")}function property(previous,key){return previous.length?previous+"-"+key:key}function generate(css,previous,obj,prefixes){var key,value,i;for(key in obj){if(has.call(obj,key)){if(typeof obj[key]==="object"){if(isArray(obj[key])){value=obj[key];for(i=0;i<value.length;i++){css.push(create(property(previous,key),value[i],prefixes))}}else{generate(css,property(previous,key),obj[key],prefixes)}}else{css.push(create(property(previous,key),obj[key],prefixes))}}}return css.join("")}function parse(component,obj,prefixes){var css=[],at,cmp,special,k,v,same,key,value,i,j;for(key in obj){if(has.call(obj,key)){j=key.length;if(!j)key=component.slice(0,-1);at=key.charAt(0)==="@";same=at||!component.indexOf(key+" ");cmp=at&&isMedia.test(key)?component:"";special=at&&!ignoreSpecial.test(key);k=special?key.slice(1):key;value=empty.concat(obj[j?key:""]);for(i=0;i<value.length;i++){v=value[i];if(special){j=prefixes.length;while(j--){css.push("@-",prefixes[j],"-",k,"{",parse(cmp,v,[prefixes[j]]),"}")}css.push(key,"{",parse(cmp,v,prefixes),"}")}else{css.push(same?key:component+key,"{",generate([],"",v,prefixes),"}")}}}}return css.join("")}if({undefined:true}[typeof document]){restyle=function(component,obj,prefixes){if(typeof component==="object"){prefixes=obj;obj=component;component=""}else{component+=" "}return parse(component,obj,prefixes||empty)};restyle.restyle=restyle}else{restyle=function(component,obj,prefixes,doc){if(typeof component==="object"){doc=prefixes;prefixes=obj;obj=component;c=component=""}else{c=component+" "}var c,d=doc||(doc=document),css=parse(c,obj,prefixes||(prefixes=restyle.prefixes)),head=d.head||d.getElementsByTagName("head")[0]||d.documentElement,node=head.insertBefore(d.createElement("style"),head.lastChild);node.type="text/css";if(node.styleSheet){node.styleSheet.cssText=css}else{node.appendChild(d.createTextNode(css))}return new ReStyle(component,node,css,prefixes,doc)}}if(!{undefined:true}[typeof window]){restyle.animate=function(g){var rAF=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.msRequestAnimationFrame||function(fn){setTimeout(fn,10)},liveStyles={},uid="restyle-".concat(Math.random()*+new Date,"-"),uidIndex=0,animationType,transitionType;switch(true){case!!g.AnimationEvent:animationType="animationend";break;case!!g.WebKitAnimationEvent:animationType="webkitAnimationEnd";break;case!!g.MSAnimationEvent:animationType="MSAnimationEnd";break;case!!g.OAnimationEvent:animationType="oanimationend";break}switch(true){case!!g.TransitionEvent:transitionType="transitionend";break;case!!g.WebKitTransitionEvent:transitionType="webkitTransitionEnd";break;case!!g.MSTransitionEvent:transitionType="MSTransitionEnd";break;case!!g.OTransitionEvent:transitionType="oTransitionEnd";break}restyle.transition=function(el,info,callback){var transition=info.transition||"all .3s ease-out",id=el.getAttribute("id"),to=[].concat(info.to),from=update({},info.from),noID=!id,style={},currentID,result,live,t;function drop(){if(transitionType){el.removeEventListener(transitionType,onTransitionEnd,false)}else{clearTimeout(t);t=0}}function next(){style[currentID]=live.last=update(from,to.shift());live.css.replace(style);if(transitionType){el.addEventListener(transitionType,onTransitionEnd,false)}else{t=setTimeout(onTransitionEnd,10)}}function onTransitionEnd(e){drop();if(to.length){rAF(next)}else{if(!e)e=new CustomEvent("transitionend",{detail:result});else e.detail=result;if(callback)callback.call(el,e)}}function update(target,source){for(var k in source)target[k]=source[k];return target}if(noID)el.setAttribute("id",id=(uid+uidIndex++).replace(".","-"));currentID="#"+id;if(liveStyles.hasOwnProperty(id)){live=liveStyles[id];from=live.last=update(live.last,from);style[currentID]=from;live.transition.remove();live.css.replace(style)}else{live=liveStyles[id]={last:style[currentID]=from,
css:restyle(style)}}rAF(function(){style[currentID]={transition:transition};live.transition=restyle(style);rAF(next)});return result={clean:function(){if(noID)el.removeAttribute("id");drop();live.transition.remove();live.css.remove();delete liveStyles[id]},drop:drop}};ReStyle.prototype.getAnimationDuration=function(el,name){for(var chunk,duration,classes=el.className.split(/\s+/),i=classes.length;i--;){chunk=classes[i];if(chunk.length&&new RegExp("\\."+chunk+"(?:|\\{|\\,)([^}]+?)\\}").test(this.css)){chunk=RegExp.$1;if(new RegExp("animation-name:"+name+";.*?animation-duration:([^;]+?);").test(chunk)||new RegExp("animation:\\s*"+name+"\\s+([^\\s]+?);").test(chunk)){chunk=RegExp.$1;duration=parseFloat(chunk);if(duration){return duration*(/[^m]s$/.test(chunk)?1e3:1)}}}}return-1};ReStyle.prototype.getTransitionDuration=function(el){var cs=getComputedStyle(el),duration=cs.getPropertyValue("transition-duration")||/\s(\d+(?:ms|s))/.test(cs.getPropertyValue("transition"))&&RegExp.$1;return parseFloat(duration)*(/[^m]s$/.test(duration)?1e3:1)};ReStyle.prototype.transit=transitionType?function(el,callback){function onTransitionEnd(e){drop();callback.call(el,e)}function drop(){el.removeEventListener(transitionType,onTransitionEnd,false)}el.addEventListener(transitionType,onTransitionEnd,false);return{drop:drop}}:function(el,callback){var i=setTimeout(callback,this.getTransitionDuration(el));return{drop:function(){clearTimeout(i)}}};ReStyle.prototype.animate=animationType?function animate(el,name,callback){function onAnimationEnd(e){if(e.animationName===name){drop();callback.call(el,e)}}function drop(){el.removeEventListener(animationType,onAnimationEnd,false)}el.addEventListener(animationType,onAnimationEnd,false);return{drop:drop}}:function animate(el,name,callback){var i,drop,duration=this.getAnimationDuration(el,name);if(duration<0){drop=O}else{i=setTimeout(function(){callback.call(el,{type:"animationend",animationName:name,currentTarget:el,target:el,stopImmediatePropagation:O,stopPropagation:O,preventDefault:O})},duration);drop=function(){clearTimeout(i)}}return{drop:drop}}}(window)}restyle.customElement=function(name,constructor,proto){var key,ext="extends",prototype=Object.create(constructor.prototype),descriptor={prototype:prototype},has=descriptor.hasOwnProperty,isExtending=proto&&has.call(proto,ext);if(isExtending){descriptor[ext]=proto[ext]}for(key in proto){if(key!==ext){prototype[key]=key==="css"?restyle(isExtending?proto[ext]+"[is="+name+"]":name,proto[key]):proto[key]}}return document.registerElement(name,descriptor)};restyle.prefixes=["webkit","moz","ms","o"];return restyle}({})},{}],6:[function(require,module,exports){require("dom4");require("document-register-element");window.Class=require("es-class");window.restyle=require("restyle");window.DOMClass=require("dom-class")},{"document-register-element":1,"dom-class":2,dom4:3,"es-class":4,restyle:5}]},{},[6]);
