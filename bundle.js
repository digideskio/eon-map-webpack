/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	window.PubNub = __webpack_require__(1);
	__webpack_require__(2);
	__webpack_require__(3);
	__webpack_require__(34);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.PubNub=t():e.PubNub=t()}(this,function(){return function(e){function t(r){if(n[r])return n[r].exports;var i=n[r]={exports:{},id:r,loaded:!1};return e[r].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function a(e){return!(!navigator||!navigator.sendBeacon)&&void navigator.sendBeacon(e)}Object.defineProperty(t,"__esModule",{value:!0});var u=n(1),c=r(u),l=(n(13),{get:function(e){try{return localStorage.getItem(e)}catch(e){return null}},set:function(e,t){try{return localStorage.setItem(e,t)}catch(e){return null}}}),h=function(e){function t(e){i(this,t),e.db=l,e.sendBeacon=a,e.sdkFamily="Web";var n=s(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return window.addEventListener("offline",function(){n._listenerManager.announceNetworkDown(),n.stop()}),window.addEventListener("online",function(){n._listenerManager.announceNetworkUp(),n.reconnect()}),n}return o(t,e),t}(c.default);t.default=h,e.exports=t.default},function(e,t,n){"use strict";function r(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function i(e){return e&&e.__esModule?e:{default:e}}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n(2),u=i(a),c=n(4),l=i(c),h=n(12),f=i(h),p=n(11),d=i(p),g=n(17),y=i(g),v=n(18),b=i(v),_=n(23),m=i(_),k=n(24),P=r(k),w=n(25),S=r(w),O=n(26),C=r(O),T=n(27),M=r(T),x=n(28),E=r(x),N=n(29),R=r(N),K=n(30),A=r(K),j=n(31),G=r(j),D=n(32),U=r(D),B=n(33),I=r(B),H=n(34),L=r(H),q=n(35),z=r(q),F=n(36),X=r(F),W=n(37),J=r(W),V=n(38),$=r(V),Q=n(39),Y=r(Q),Z=n(40),ee=r(Z),te=n(41),ne=r(te),re=n(42),ie=r(re),se=n(20),oe=r(se),ae=n(43),ue=r(ae),ce=n(14),le=i(ce),he=n(21),fe=i(he),pe=n(16),de=i(pe),ge=(n(13),function(){function e(t){var n=this;s(this,e);var r=t.sendBeacon,i=t.db,o=this._config=new f.default({setup:t,db:i}),a=new d.default({config:o}),u=new l.default({config:o,crypto:a,sendBeacon:r}),c={config:o,networking:u,crypto:a},h=this._listenerManager=new b.default,p=m.default.bind(this,c,oe),g=m.default.bind(this,c,I),v=m.default.bind(this,c,z),_=m.default.bind(this,c,J),k=m.default.bind(this,c,ue),w=new y.default({timeEndpoint:p,leaveEndpoint:g,heartbeatEndpoint:v,setStateEndpoint:_,subscribeEndpoint:k,crypto:c.crypto,config:c.config,listenerManager:h});this.addListener=h.addListener.bind(h),this.removeListener=h.removeListener.bind(h),this.removeAllListeners=h.removeAllListeners.bind(h),this.channelGroups={listGroups:m.default.bind(this,c,M),listChannels:m.default.bind(this,c,E),addChannels:m.default.bind(this,c,P),removeChannels:m.default.bind(this,c,S),deleteGroup:m.default.bind(this,c,C)},this.push={addChannels:m.default.bind(this,c,R),removeChannels:m.default.bind(this,c,A),deleteDevice:m.default.bind(this,c,U),listChannels:m.default.bind(this,c,G)},this.hereNow=m.default.bind(this,c,$),this.whereNow=m.default.bind(this,c,L),this.getState=m.default.bind(this,c,X),this.setState=w.adaptStateChange.bind(w),this.grant=m.default.bind(this,c,ee),this.audit=m.default.bind(this,c,Y),this.publish=m.default.bind(this,c,ne),this.fire=function(e,t){e.replicate=!1,e.storeInHistory=!1,n.publish(e,t)},this.history=m.default.bind(this,c,ie),this.time=p,this.subscribe=w.adaptSubscribeChange.bind(w),this.unsubscribe=w.adaptUnsubscribeChange.bind(w),this.reconnect=w.reconnect.bind(w),this.stop=function(){w.unsubscribeAll(),w.disconnect()},this.unsubscribeAll=w.unsubscribeAll.bind(w),this.getSubscribedChannels=w.getSubscribedChannels.bind(w),this.getSubscribedChannelGroups=w.getSubscribedChannelGroups.bind(w),this.encrypt=a.encrypt.bind(a),this.decrypt=a.decrypt.bind(a),this.getAuthKey=c.config.getAuthKey.bind(c.config),this.setAuthKey=c.config.setAuthKey.bind(c.config),this.setCipherKey=c.config.setCipherKey.bind(c.config),this.getUUID=c.config.getUUID.bind(c.config),this.setUUID=c.config.setUUID.bind(c.config),this.getFilterExpression=c.config.getFilterExpression.bind(c.config),this.setFilterExpression=c.config.setFilterExpression.bind(c.config)}return o(e,[{key:"getVersion",value:function(){return le.default.version}}],[{key:"generateUUID",value:function(){return u.default.v4()}}]),e}());ge.OPERATIONS=fe.default,ge.CATEGORIES=de.default,t.default=ge,e.exports=t.default},function(e,t,n){function r(e,t,n){var r=t&&n||0,i=0;for(t=t||[],e.toLowerCase().replace(/[0-9a-f]{2}/g,function(e){i<16&&(t[r+i++]=c[e])});i<16;)t[r+i++]=0;return t}function i(e,t){var n=t||0,r=u;return r[e[n++]]+r[e[n++]]+r[e[n++]]+r[e[n++]]+"-"+r[e[n++]]+r[e[n++]]+"-"+r[e[n++]]+r[e[n++]]+"-"+r[e[n++]]+r[e[n++]]+"-"+r[e[n++]]+r[e[n++]]+r[e[n++]]+r[e[n++]]+r[e[n++]]+r[e[n++]]}function s(e,t,n){var r=t&&n||0,s=t||[];e=e||{};var o=void 0!==e.clockseq?e.clockseq:p,a=void 0!==e.msecs?e.msecs:(new Date).getTime(),u=void 0!==e.nsecs?e.nsecs:g+1,c=a-d+(u-g)/1e4;if(c<0&&void 0===e.clockseq&&(o=o+1&16383),(c<0||a>d)&&void 0===e.nsecs&&(u=0),u>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");d=a,g=u,p=o,a+=122192928e5;var l=(1e4*(268435455&a)+u)%4294967296;s[r++]=l>>>24&255,s[r++]=l>>>16&255,s[r++]=l>>>8&255,s[r++]=255&l;var h=a/4294967296*1e4&268435455;s[r++]=h>>>8&255,s[r++]=255&h,s[r++]=h>>>24&15|16,s[r++]=h>>>16&255,s[r++]=o>>>8|128,s[r++]=255&o;for(var y=e.node||f,v=0;v<6;v++)s[r+v]=y[v];return t?t:i(s)}function o(e,t,n){var r=t&&n||0;"string"==typeof e&&(t="binary"==e?new Array(16):null,e=null),e=e||{};var s=e.random||(e.rng||a)();if(s[6]=15&s[6]|64,s[8]=63&s[8]|128,t)for(var o=0;o<16;o++)t[r+o]=s[o];return t||i(s)}for(var a=n(3),u=[],c={},l=0;l<256;l++)u[l]=(l+256).toString(16).substr(1),c[u[l]]=l;var h=a(),f=[1|h[0],h[1],h[2],h[3],h[4],h[5]],p=16383&(h[6]<<8|h[7]),d=0,g=0,y=o;y.v1=s,y.v4=o,y.parse=r,y.unparse=i,e.exports=y},function(e,t){(function(t){var n,r=t.crypto||t.msCrypto;if(r&&r.getRandomValues){var i=new Uint8Array(16);n=function(){return r.getRandomValues(i),i}}if(!n){var s=new Array(16);n=function(){for(var e,t=0;t<16;t++)0===(3&t)&&(e=4294967296*Math.random()),s[t]=e>>>((3&t)<<3)&255;return s}}e.exports=n}).call(t,function(){return this}())},function(e,t,n){(function(r){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n(6),u=i(a),c=n(11),l=(i(c),n(12)),h=(i(l),n(16)),f=i(h),p=(n(13),function(){function e(t){var n=t.config,r=t.crypto,i=t.sendBeacon;s(this,e),this._config=n,this._crypto=r,this._sendBeacon=i,this._maxSubDomain=20,this._currentSubDomain=Math.floor(Math.random()*this._maxSubDomain),this._providedFQDN=(this._config.secure?"https://":"http://")+this._config.origin,this._coreParams={},this.shiftStandardOrigin()}return o(e,[{key:"nextOrigin",value:function(){if(this._providedFQDN.indexOf("pubsub.")===-1)return this._providedFQDN;var e=void 0;return this._currentSubDomain=this._currentSubDomain+1,this._currentSubDomain>=this._maxSubDomain&&(this._currentSubDomain=1),e=this._currentSubDomain.toString(),this._providedFQDN.replace("pubsub","ps"+e)}},{key:"shiftStandardOrigin",value:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return this._standardOrigin=this.nextOrigin(e),this._standardOrigin}},{key:"getStandardOrigin",value:function(){return this._standardOrigin}},{key:"POST",value:function(e,t,n,r){var i=u.default.post(this.getStandardOrigin()+n.url).query(e).send(t);return this._abstractedXDR(i,n,r)}},{key:"GET",value:function(e,t,n){var r=u.default.get(this.getStandardOrigin()+t.url).query(e);return this._abstractedXDR(r,t,n)}},{key:"_abstractedXDR",value:function(e,t,n){var r=this;return this._config.logVerbosity&&(e=e.use(this._attachSuperagentLogger)),e.timeout(t.timeout).end(function(e,i){var s={};if(s.error=null!==e,s.operation=t.operation,i&&i.status&&(s.statusCode=i.status),e)return s.errorData=e,s.category=r._detectErrorCategory(e),n(s,null);var o=JSON.parse(i.text);return n(s,o)})}},{key:"_detectErrorCategory",value:function(e){if("ENOTFOUND"===e.code)return f.default.PNNetworkIssuesCategory;if(0===e.status||e.hasOwnProperty("status")&&"undefined"==typeof e.status)return f.default.PNNetworkIssuesCategory;if(e.timeout)return f.default.PNTimeoutCategory;if(e.response){if(e.response.badRequest)return f.default.PNBadRequestCategory;if(e.response.forbidden)return f.default.PNAccessDeniedCategory}return f.default.PNUnknownCategory}},{key:"_attachSuperagentLogger",value:function(e){var t=function(){return r&&r.log?r:window&&window.console&&window.console.log?window.console:r},n=(new Date).getTime(),i=(new Date).toISOString(),s=t();s.log("<<<<<"),s.log("["+i+"]","\n",e.url,"\n",e.qs),s.log("-----"),e.on("response",function(t){var r=(new Date).getTime(),i=r-n,o=(new Date).toISOString();s.log(">>>>>>"),s.log("["+o+" / "+i+"]","\n",e.url,"\n",e.qs,"\n",t.text),s.log("-----")})}}]),e}());t.default=p,e.exports=t.default}).call(t,n(5))},function(e,t){},function(e,t,n){(function(t){function r(){}function i(e){if(!v(e))return e;var t=[];for(var n in e)s(t,n,e[n]);return t.join("&")}function s(e,t,n){if(null!=n)if(Array.isArray(n))n.forEach(function(n){s(e,t,n)});else if(v(n))for(var r in n)s(e,t+"["+r+"]",n[r]);else e.push(encodeURIComponent(t)+"="+encodeURIComponent(n));else null===n&&e.push(encodeURIComponent(t))}function o(e){for(var t,n,r={},i=e.split("&"),s=0,o=i.length;s<o;++s)t=i[s],n=t.indexOf("="),n==-1?r[decodeURIComponent(t)]="":r[decodeURIComponent(t.slice(0,n))]=decodeURIComponent(t.slice(n+1));return r}function a(e){var t,n,r,i,s=e.split(/\r?\n/),o={};s.pop();for(var a=0,u=s.length;a<u;++a)n=s[a],t=n.indexOf(":"),r=n.slice(0,t).toLowerCase(),i=_(n.slice(t+1)),o[r]=i;return o}function u(e){return/[\/+]json\b/.test(e)}function c(e){return e.split(/ *; */).shift()}function l(e){return e.split(/ *; */).reduce(function(e,t){var n=t.split(/ *= */),r=n.shift(),i=n.shift();return r&&i&&(e[r]=i),e},{})}function h(e,t){t=t||{},this.req=e,this.xhr=this.req.xhr,this.text="HEAD"!=this.req.method&&(""===this.xhr.responseType||"text"===this.xhr.responseType)||"undefined"==typeof this.xhr.responseType?this.xhr.responseText:null,this.statusText=this.req.xhr.statusText,this._setStatusProperties(this.xhr.status),this.header=this.headers=a(this.xhr.getAllResponseHeaders()),this.header["content-type"]=this.xhr.getResponseHeader("content-type"),this._setHeaderProperties(this.header),this.body="HEAD"!=this.req.method?this._parseBody(this.text?this.text:this.xhr.response):null}function f(e,t){var n=this;this._query=this._query||[],this.method=e,this.url=t,this.header={},this._header={},this.on("end",function(){var e=null,t=null;try{t=new h(n)}catch(t){return e=new Error("Parser is unable to parse the response"),e.parse=!0,e.original=t,e.rawResponse=n.xhr&&n.xhr.responseText?n.xhr.responseText:null,e.statusCode=n.xhr&&n.xhr.status?n.xhr.status:null,n.callback(e)}n.emit("response",t);var r;try{(t.status<200||t.status>=300)&&(r=new Error(t.statusText||"Unsuccessful HTTP response"),r.original=e,r.response=t,r.status=t.status)}catch(e){r=e}r?n.callback(r,t):n.callback(null,t)})}function p(e,t){var n=b("DELETE",e);return t&&n.end(t),n}var d;"undefined"!=typeof window?d=window:"undefined"!=typeof self?d=self:(t.warn("Using browser-only version of superagent in non-browser environment"),d=this);var g=n(7),y=n(8),v=n(9),b=e.exports=n(10).bind(null,f);b.getXHR=function(){if(!(!d.XMLHttpRequest||d.location&&"file:"==d.location.protocol&&d.ActiveXObject))return new XMLHttpRequest;try{return new ActiveXObject("Microsoft.XMLHTTP")}catch(e){}try{return new ActiveXObject("Msxml2.XMLHTTP.6.0")}catch(e){}try{return new ActiveXObject("Msxml2.XMLHTTP.3.0")}catch(e){}try{return new ActiveXObject("Msxml2.XMLHTTP")}catch(e){}throw Error("Browser-only verison of superagent could not find XHR")};var _="".trim?function(e){return e.trim()}:function(e){return e.replace(/(^\s*|\s*$)/g,"")};b.serializeObject=i,b.parseString=o,b.types={html:"text/html",json:"application/json",xml:"application/xml",urlencoded:"application/x-www-form-urlencoded",form:"application/x-www-form-urlencoded","form-data":"application/x-www-form-urlencoded"},b.serialize={"application/x-www-form-urlencoded":i,"application/json":JSON.stringify},b.parse={"application/x-www-form-urlencoded":o,"application/json":JSON.parse},h.prototype.get=function(e){return this.header[e.toLowerCase()]},h.prototype._setHeaderProperties=function(e){var t=this.header["content-type"]||"";this.type=c(t);var n=l(t);for(var r in n)this[r]=n[r]},h.prototype._parseBody=function(e){var t=b.parse[this.type];return!t&&u(this.type)&&(t=b.parse["application/json"]),t&&e&&(e.length||e instanceof Object)?t(e):null},h.prototype._setStatusProperties=function(e){1223===e&&(e=204);var t=e/100|0;this.status=this.statusCode=e,this.statusType=t,this.info=1==t,this.ok=2==t,this.clientError=4==t,this.serverError=5==t,this.error=(4==t||5==t)&&this.toError(),this.accepted=202==e,this.noContent=204==e,this.badRequest=400==e,this.unauthorized=401==e,this.notAcceptable=406==e,this.notFound=404==e,this.forbidden=403==e},h.prototype.toError=function(){var e=this.req,t=e.method,n=e.url,r="cannot "+t+" "+n+" ("+this.status+")",i=new Error(r);return i.status=this.status,i.method=t,i.url=n,i},b.Response=h,g(f.prototype);for(var m in y)f.prototype[m]=y[m];f.prototype.type=function(e){return this.set("Content-Type",b.types[e]||e),this},f.prototype.responseType=function(e){return this._responseType=e,this},f.prototype.accept=function(e){return this.set("Accept",b.types[e]||e),this},f.prototype.auth=function(e,t,n){switch(n||(n={type:"basic"}),n.type){case"basic":var r=btoa(e+":"+t);this.set("Authorization","Basic "+r);break;case"auto":this.username=e,this.password=t}return this},f.prototype.query=function(e){return"string"!=typeof e&&(e=i(e)),e&&this._query.push(e),this},f.prototype.attach=function(e,t,n){return this._getFormData().append(e,t,n||t.name),this},f.prototype._getFormData=function(){return this._formData||(this._formData=new d.FormData),this._formData},f.prototype.callback=function(e,t){var n=this._callback;this.clearTimeout(),n(e,t)},f.prototype.crossDomainError=function(){var e=new Error("Request has been terminated\nPossible causes: the network is offline, Origin is not allowed by Access-Control-Allow-Origin, the page is being unloaded, etc.");e.crossDomain=!0,e.status=this.status,e.method=this.method,e.url=this.url,this.callback(e)},f.prototype._timeoutError=function(){var e=this._timeout,t=new Error("timeout of "+e+"ms exceeded");t.timeout=e,this.callback(t)},f.prototype._appendQueryString=function(){var e=this._query.join("&");e&&(this.url+=~this.url.indexOf("?")?"&"+e:"?"+e)},f.prototype.end=function(e){var t=this,n=this.xhr=b.getXHR(),i=this._timeout,s=this._formData||this._data;this._callback=e||r,n.onreadystatechange=function(){if(4==n.readyState){var e;try{e=n.status}catch(t){e=0}if(0==e){if(t.timedout)return t._timeoutError();if(t._aborted)return;return t.crossDomainError()}t.emit("end")}};var o=function(e,n){n.total>0&&(n.percent=n.loaded/n.total*100),n.direction=e,t.emit("progress",n)};if(this.hasListeners("progress"))try{n.onprogress=o.bind(null,"download"),n.upload&&(n.upload.onprogress=o.bind(null,"upload"))}catch(e){}if(i&&!this._timer&&(this._timer=setTimeout(function(){t.timedout=!0,t.abort()},i)),this._appendQueryString(),this.username&&this.password?n.open(this.method,this.url,!0,this.username,this.password):n.open(this.method,this.url,!0),this._withCredentials&&(n.withCredentials=!0),"GET"!=this.method&&"HEAD"!=this.method&&"string"!=typeof s&&!this._isHost(s)){var a=this._header["content-type"],c=this._serializer||b.serialize[a?a.split(";")[0]:""];!c&&u(a)&&(c=b.serialize["application/json"]),c&&(s=c(s))}for(var l in this.header)null!=this.header[l]&&n.setRequestHeader(l,this.header[l]);return this._responseType&&(n.responseType=this._responseType),this.emit("request",this),n.send("undefined"!=typeof s?s:null),this},b.Request=f,b.get=function(e,t,n){var r=b("GET",e);return"function"==typeof t&&(n=t,t=null),t&&r.query(t),n&&r.end(n),r},b.head=function(e,t,n){var r=b("HEAD",e);return"function"==typeof t&&(n=t,t=null),t&&r.send(t),n&&r.end(n),r},b.options=function(e,t,n){var r=b("OPTIONS",e);return"function"==typeof t&&(n=t,t=null),t&&r.send(t),n&&r.end(n),r},b.del=p,b.delete=p,b.patch=function(e,t,n){var r=b("PATCH",e);return"function"==typeof t&&(n=t,t=null),t&&r.send(t),n&&r.end(n),r},b.post=function(e,t,n){var r=b("POST",e);return"function"==typeof t&&(n=t,t=null),t&&r.send(t),n&&r.end(n),r},b.put=function(e,t,n){var r=b("PUT",e);return"function"==typeof t&&(n=t,t=null),t&&r.send(t),n&&r.end(n),r}}).call(t,n(5))},function(e,t,n){function r(e){if(e)return i(e)}function i(e){for(var t in r.prototype)e[t]=r.prototype[t];return e}e.exports=r,r.prototype.on=r.prototype.addEventListener=function(e,t){return this._callbacks=this._callbacks||{},(this._callbacks["$"+e]=this._callbacks["$"+e]||[]).push(t),this},r.prototype.once=function(e,t){function n(){this.off(e,n),t.apply(this,arguments)}return n.fn=t,this.on(e,n),this},r.prototype.off=r.prototype.removeListener=r.prototype.removeAllListeners=r.prototype.removeEventListener=function(e,t){if(this._callbacks=this._callbacks||{},0==arguments.length)return this._callbacks={},this;var n=this._callbacks["$"+e];if(!n)return this;if(1==arguments.length)return delete this._callbacks["$"+e],this;for(var r,i=0;i<n.length;i++)if(r=n[i],r===t||r.fn===t){n.splice(i,1);break}return this},r.prototype.emit=function(e){this._callbacks=this._callbacks||{};var t=[].slice.call(arguments,1),n=this._callbacks["$"+e];if(n){n=n.slice(0);for(var r=0,i=n.length;r<i;++r)n[r].apply(this,t)}return this},r.prototype.listeners=function(e){return this._callbacks=this._callbacks||{},this._callbacks["$"+e]||[]},r.prototype.hasListeners=function(e){return!!this.listeners(e).length}},function(e,t,n){var r=n(9);t.clearTimeout=function(){return this._timeout=0,clearTimeout(this._timer),this},t.parse=function(e){return this._parser=e,this},t.serialize=function(e){return this._serializer=e,this},t.timeout=function(e){return this._timeout=e,this},t.then=function(e,t){if(!this._fullfilledPromise){var n=this;this._fullfilledPromise=new Promise(function(e,t){n.end(function(n,r){n?t(n):e(r)})})}return this._fullfilledPromise.then(e,t)},t.catch=function(e){return this.then(void 0,e)},t.use=function(e){return e(this),this},t.get=function(e){return this._header[e.toLowerCase()]},t.getHeader=t.get,t.set=function(e,t){if(r(e)){for(var n in e)this.set(n,e[n]);return this}return this._header[e.toLowerCase()]=t,this.header[e]=t,this},t.unset=function(e){return delete this._header[e.toLowerCase()],delete this.header[e],this},t.field=function(e,t){if(null===e||void 0===e)throw new Error(".field(name, val) name can not be empty");if(r(e)){for(var n in e)this.field(n,e[n]);return this}if(null===t||void 0===t)throw new Error(".field(name, val) val can not be empty");return this._getFormData().append(e,t),this},t.abort=function(){return this._aborted?this:(this._aborted=!0,this.xhr&&this.xhr.abort(),this.req&&this.req.abort(),this.clearTimeout(),this.emit("abort"),this)},t.withCredentials=function(){return this._withCredentials=!0,this},t.redirects=function(e){return this._maxRedirects=e,this},t.toJSON=function(){return{method:this.method,url:this.url,data:this._data,headers:this._header}},t._isHost=function(e){var t={}.toString.call(e);switch(t){case"[object File]":case"[object Blob]":case"[object FormData]":return!0;default:return!1}},t.send=function(e){var t=r(e),n=this._header["content-type"];if(t&&r(this._data))for(var i in e)this._data[i]=e[i];else"string"==typeof e?(n||this.type("form"),n=this._header["content-type"],"application/x-www-form-urlencoded"==n?this._data=this._data?this._data+"&"+e:e:this._data=(this._data||"")+e):this._data=e;return!t||this._isHost(e)?this:(n||this.type("json"),this)}},function(e,t){function n(e){return null!==e&&"object"==typeof e}e.exports=n},function(e,t){function n(e,t,n){return"function"==typeof n?new e("GET",t).end(n):2==arguments.length?new e("GET",t):new e(t,n)}e.exports=n},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n(12),a=(r(o),n(15)),u=r(a),c=function(){function e(t){var n=t.config;i(this,e),this._config=n,this._iv="0123456789012345",this._allowedKeyEncodings=["hex","utf8","base64","binary"],this._allowedKeyLengths=[128,256],this._allowedModes=["ecb","cbc"],this._defaultOptions={encryptKey:!0,keyEncoding:"utf8",keyLength:256,mode:"cbc"}}return s(e,[{key:"HMACSHA256",value:function(e){var t=u.default.HmacSHA256(e,this._config.secretKey);return t.toString(u.default.enc.Base64)}},{key:"SHA256",value:function(e){return u.default.SHA256(e).toString(u.default.enc.Hex)}},{key:"_parseOptions",value:function(e){var t=e||{};return t.hasOwnProperty("encryptKey")||(t.encryptKey=this._defaultOptions.encryptKey),t.hasOwnProperty("keyEncoding")||(t.keyEncoding=this._defaultOptions.keyEncoding),t.hasOwnProperty("keyLength")||(t.keyLength=this._defaultOptions.keyLength),t.hasOwnProperty("mode")||(t.mode=this._defaultOptions.mode),this._allowedKeyEncodings.indexOf(t.keyEncoding.toLowerCase())===-1&&(t.keyEncoding=this._defaultOptions.keyEncoding),this._allowedKeyLengths.indexOf(parseInt(t.keyLength,10))===-1&&(t.keyLength=this._defaultOptions.keyLength),this._allowedModes.indexOf(t.mode.toLowerCase())===-1&&(t.mode=this._defaultOptions.mode),t}},{key:"_decodeKey",value:function(e,t){return"base64"===t.keyEncoding?u.default.enc.Base64.parse(e):"hex"===t.keyEncoding?u.default.enc.Hex.parse(e):e}},{key:"_getPaddedKey",value:function(e,t){return e=this._decodeKey(e,t),t.encryptKey?u.default.enc.Utf8.parse(this.SHA256(e).slice(0,32)):e}},{key:"_getMode",value:function(e){return"ecb"===e.mode?u.default.mode.ECB:u.default.mode.CBC}},{key:"_getIV",value:function(e){return"cbc"===e.mode?u.default.enc.Utf8.parse(this._iv):null}},{key:"encrypt",value:function(e,t,n){if(!t&&!this._config.cipherKey)return e;n=this._parseOptions(n);var r=this._getIV(n),i=this._getMode(n),s=this._getPaddedKey(t||this._config.cipherKey,n),o=u.default.AES.encrypt(e,s,{iv:r,mode:i}).ciphertext,a=o.toString(u.default.enc.Base64);return a||e}},{key:"decrypt",value:function(e,t,n){if(!t&&!this._config.cipherKey)return e;n=this._parseOptions(n);var r=this._getIV(n),i=this._getMode(n),s=this._getPaddedKey(t||this._config.cipherKey,n);try{var o=u.default.enc.Base64.parse(e),a=u.default.AES.decrypt({ciphertext:o},s,{iv:r,mode:i}).toString(u.default.enc.Utf8),c=JSON.parse(a);return c}catch(e){return null}}}]),e}();t.default=c,e.exports=t.default},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n(2),a=r(o),u=(n(13),n(14)),c=r(u),l=function(){function e(t){var n=t.setup,r=t.db;i(this,e),this._db=r,this.instanceId=a.default.v4(),this.secretKey=n.secretKey,this.subscribeKey=n.subscribeKey,this.publishKey=n.publishKey,this.sdkFamily=n.sdkFamily,this.partnerId=n.partnerId,this.setAuthKey(n.authKey),this.setCipherKey(n.cipherKey),this.setFilterExpression(n.filterExpression),this.origin=n.origin||"pubsub.pubnub.com",this.secure=n.ssl||!1,"undefined"!=typeof location&&"https:"===location.protocol&&(this.secure=!0),this.logVerbosity=n.logVerbosity||!1,this.suppressLeaveEvents=n.suppressLeaveEvents||!1,this.announceFailedHeartbeats=n.announceFailedHeartbeats||!0,this.announceSuccessfulHeartbeats=n.announceSuccessfulHeartbeats||!1,this.useInstanceId=n.useInstanceId||!1,this.useRequestId=n.useRequestId||!1,this.setTransactionTimeout(n.transactionalRequestTimeout||15e3),this.setSubscribeTimeout(n.subscribeRequestTimeout||31e4),this.setSendBeaconConfig(n.useSendBeacon||!0),this.setPresenceTimeout(n.presenceTimeout||300),n.heartbeatInterval&&this.setHeartbeatInterval(n.heartbeatInterval),this.setUUID(this._decideUUID(n.uuid))}return s(e,[{key:"getAuthKey",value:function(){return this.authKey}},{key:"setAuthKey",value:function(e){return this.authKey=e,this}},{key:"setCipherKey",value:function(e){return this.cipherKey=e,this}},{key:"getUUID",value:function(){return this.UUID}},{key:"setUUID",value:function(e){return this._db&&this._db.set&&this._db.set(this.subscribeKey+"uuid",e),this.UUID=e,this}},{key:"getFilterExpression",value:function(){return this.filterExpression}},{key:"setFilterExpression",value:function(e){return this.filterExpression=e,this}},{key:"getPresenceTimeout",value:function(){return this._presenceTimeout}},{key:"setPresenceTimeout",value:function(e){return this._presenceTimeout=e,this.setHeartbeatInterval(this._presenceTimeout/2-1),this}},{key:"getHeartbeatInterval",value:function(){return this._heartbeatInterval}},{key:"setHeartbeatInterval",value:function(e){return this._heartbeatInterval=e,this}},{key:"getSubscribeTimeout",value:function(){return this._subscribeRequestTimeout}},{key:"setSubscribeTimeout",value:function(e){return this._subscribeRequestTimeout=e,this}},{key:"getTransactionTimeout",value:function(){return this._transactionalRequestTimeout}},{key:"setTransactionTimeout",value:function(e){return this._transactionalRequestTimeout=e,this}},{key:"isSendBeaconEnabled",value:function(){return this._useSendBeacon}},{key:"setSendBeaconConfig",value:function(e){return this._useSendBeacon=e,this}},{key:"getVersion",value:function(){return c.default.version}},{key:"_decideUUID",value:function(e){return e?e:this._db&&this._db.get&&this._db.get(this.subscribeKey+"uuid")?this._db.get(this.subscribeKey+"uuid"):a.default.v4()}}]),e}();t.default=l,e.exports=t.default},function(e,t){"use strict";e.exports={}},function(e,t){e.exports={name:"pubnub",preferGlobal:!1,version:"4.1.0",author:"PubNub <support@pubnub.com>",description:"Publish & Subscribe Real-time Messaging with PubNub",bin:{},scripts:{codecov:"cat coverage/lcov.info | codecov"},main:"./lib/node/index.js","react-native":"./lib/node/index.js",browser:"./dist/web/pubnub.min.js",repository:{type:"git",url:"git://github.com/pubnub/javascript.git"},keywords:["cloud","publish","subscribe","websockets","comet","bosh","xmpp","real-time","messaging"],dependencies:{superagent:"^2.3.0",uuid:"^2.0.3"},noAnalyze:!1,devDependencies:{"babel-core":"^6.17.0","babel-eslint":"7.0.0","babel-plugin-add-module-exports":"^0.2.1","babel-plugin-transform-class-properties":"^6.16.0","babel-plugin-transform-flow-strip-types":"^6.14.0","babel-preset-es2015":"^6.16.0","babel-register":"^6.16.3",chai:"^3.5.0","eslint-config-airbnb":"12.0.0","eslint-plugin-flowtype":"2.19.0","eslint-plugin-import":"^1.16.0","eslint-plugin-mocha":"4.6.0","eslint-plugin-react":"6.3.0","flow-bin":"^0.33.0",gulp:"^3.9.1","gulp-babel":"^6.1.2","gulp-clean":"^0.3.2","gulp-eslint":"^3.0.1","gulp-exec":"^2.1.2","gulp-flowtype":"^1.0.0","gulp-gzip":"^1.4.0","gulp-istanbul":"^1.1.1","gulp-mocha":"^3.0.1","gulp-rename":"^1.2.2","gulp-sourcemaps":"^1.6.0","gulp-uglify":"^2.0.0","imports-loader":"0.6.5",isparta:"^4.0.0","json-loader":"0.5.4",karma:"1.3.0","karma-babel-preprocessor":"^6.0.1","karma-chai":"0.1.0","karma-chrome-launcher":"^2.0.0","karma-mocha":"^1.2.0","karma-phantomjs-launcher":"1.0.2","karma-spec-reporter":"0.0.26",mocha:"3.1.0",nock:"^8.0.0","phantomjs-prebuilt":"2.1.12","remap-istanbul":"^0.6.4","run-sequence":"^1.2.2",sinon:"^1.17.6","stats-webpack-plugin":"^0.4.2","uglify-js":"^2.7.3",underscore:"^1.8.3",webpack:"^1.13.2","webpack-dev-server":"1.16.1","webpack-stream":"^3.2.0"},bundleDependencies:[],license:"MIT",engine:{node:">=0.8"}}},function(e,t){"use strict";var n=n||function(e,t){var n={},r=n.lib={},i=function(){},s=r.Base={extend:function(e){i.prototype=this;var t=new i;return e&&t.mixIn(e),t.hasOwnProperty("init")||(t.init=function(){t.$super.init.apply(this,arguments)}),t.init.prototype=t,t.$super=this,t},create:function(){var e=this.extend();return e.init.apply(e,arguments),e},init:function(){},mixIn:function(e){for(var t in e)e.hasOwnProperty(t)&&(this[t]=e[t]);e.hasOwnProperty("toString")&&(this.toString=e.toString)},clone:function(){return this.init.prototype.extend(this)}},o=r.WordArray=s.extend({init:function(e,n){e=this.words=e||[],this.sigBytes=n!=t?n:4*e.length},toString:function(e){return(e||u).stringify(this)},concat:function(e){var t=this.words,n=e.words,r=this.sigBytes;if(e=e.sigBytes,this.clamp(),r%4)for(var i=0;i<e;i++)t[r+i>>>2]|=(n[i>>>2]>>>24-8*(i%4)&255)<<24-8*((r+i)%4);else if(65535<n.length)for(i=0;i<e;i+=4)t[r+i>>>2]=n[i>>>2];else t.push.apply(t,n);return this.sigBytes+=e,this},clamp:function(){var t=this.words,n=this.sigBytes;t[n>>>2]&=4294967295<<32-8*(n%4),t.length=e.ceil(n/4)},clone:function(){var e=s.clone.call(this);return e.words=this.words.slice(0),e},random:function(t){for(var n=[],r=0;r<t;r+=4)n.push(4294967296*e.random()|0);return new o.init(n,t)}}),a=n.enc={},u=a.Hex={stringify:function(e){var t=e.words;e=e.sigBytes;for(var n=[],r=0;r<e;r++){var i=t[r>>>2]>>>24-8*(r%4)&255;n.push((i>>>4).toString(16)),n.push((15&i).toString(16))}return n.join("")},parse:function(e){for(var t=e.length,n=[],r=0;r<t;r+=2)n[r>>>3]|=parseInt(e.substr(r,2),16)<<24-4*(r%8);return new o.init(n,t/2)}},c=a.Latin1={stringify:function(e){var t=e.words;e=e.sigBytes;for(var n=[],r=0;r<e;r++)n.push(String.fromCharCode(t[r>>>2]>>>24-8*(r%4)&255));return n.join("")},parse:function(e){for(var t=e.length,n=[],r=0;r<t;r++)n[r>>>2]|=(255&e.charCodeAt(r))<<24-8*(r%4);return new o.init(n,t)}},l=a.Utf8={stringify:function(e){try{return decodeURIComponent(escape(c.stringify(e)))}catch(e){throw Error("Malformed UTF-8 data")}},parse:function(e){return c.parse(unescape(encodeURIComponent(e)))}},h=r.BufferedBlockAlgorithm=s.extend({reset:function(){this._data=new o.init,this._nDataBytes=0},_append:function(e){"string"==typeof e&&(e=l.parse(e)),this._data.concat(e),this._nDataBytes+=e.sigBytes},_process:function(t){var n=this._data,r=n.words,i=n.sigBytes,s=this.blockSize,a=i/(4*s),a=t?e.ceil(a):e.max((0|a)-this._minBufferSize,0);
	if(t=a*s,i=e.min(4*t,i),t){for(var u=0;u<t;u+=s)this._doProcessBlock(r,u);u=r.splice(0,t),n.sigBytes-=i}return new o.init(u,i)},clone:function(){var e=s.clone.call(this);return e._data=this._data.clone(),e},_minBufferSize:0});r.Hasher=h.extend({cfg:s.extend(),init:function(e){this.cfg=this.cfg.extend(e),this.reset()},reset:function(){h.reset.call(this),this._doReset()},update:function(e){return this._append(e),this._process(),this},finalize:function(e){return e&&this._append(e),this._doFinalize()},blockSize:16,_createHelper:function(e){return function(t,n){return new e.init(n).finalize(t)}},_createHmacHelper:function(e){return function(t,n){return new f.HMAC.init(e,n).finalize(t)}}});var f=n.algo={};return n}(Math);!function(e){for(var t=n,r=t.lib,i=r.WordArray,s=r.Hasher,r=t.algo,o=[],a=[],u=function(e){return 4294967296*(e-(0|e))|0},c=2,l=0;64>l;){var h;e:{h=c;for(var f=e.sqrt(h),p=2;p<=f;p++)if(!(h%p)){h=!1;break e}h=!0}h&&(8>l&&(o[l]=u(e.pow(c,.5))),a[l]=u(e.pow(c,1/3)),l++),c++}var d=[],r=r.SHA256=s.extend({_doReset:function(){this._hash=new i.init(o.slice(0))},_doProcessBlock:function(e,t){for(var n=this._hash.words,r=n[0],i=n[1],s=n[2],o=n[3],u=n[4],c=n[5],l=n[6],h=n[7],f=0;64>f;f++){if(16>f)d[f]=0|e[t+f];else{var p=d[f-15],g=d[f-2];d[f]=((p<<25|p>>>7)^(p<<14|p>>>18)^p>>>3)+d[f-7]+((g<<15|g>>>17)^(g<<13|g>>>19)^g>>>10)+d[f-16]}p=h+((u<<26|u>>>6)^(u<<21|u>>>11)^(u<<7|u>>>25))+(u&c^~u&l)+a[f]+d[f],g=((r<<30|r>>>2)^(r<<19|r>>>13)^(r<<10|r>>>22))+(r&i^r&s^i&s),h=l,l=c,c=u,u=o+p|0,o=s,s=i,i=r,r=p+g|0}n[0]=n[0]+r|0,n[1]=n[1]+i|0,n[2]=n[2]+s|0,n[3]=n[3]+o|0,n[4]=n[4]+u|0,n[5]=n[5]+c|0,n[6]=n[6]+l|0,n[7]=n[7]+h|0},_doFinalize:function(){var t=this._data,n=t.words,r=8*this._nDataBytes,i=8*t.sigBytes;return n[i>>>5]|=128<<24-i%32,n[(i+64>>>9<<4)+14]=e.floor(r/4294967296),n[(i+64>>>9<<4)+15]=r,t.sigBytes=4*n.length,this._process(),this._hash},clone:function(){var e=s.clone.call(this);return e._hash=this._hash.clone(),e}});t.SHA256=s._createHelper(r),t.HmacSHA256=s._createHmacHelper(r)}(Math),function(){var e=n,t=e.enc.Utf8;e.algo.HMAC=e.lib.Base.extend({init:function(e,n){e=this._hasher=new e.init,"string"==typeof n&&(n=t.parse(n));var r=e.blockSize,i=4*r;n.sigBytes>i&&(n=e.finalize(n)),n.clamp();for(var s=this._oKey=n.clone(),o=this._iKey=n.clone(),a=s.words,u=o.words,c=0;c<r;c++)a[c]^=1549556828,u[c]^=909522486;s.sigBytes=o.sigBytes=i,this.reset()},reset:function(){var e=this._hasher;e.reset(),e.update(this._iKey)},update:function(e){return this._hasher.update(e),this},finalize:function(e){var t=this._hasher;return e=t.finalize(e),t.reset(),t.finalize(this._oKey.clone().concat(e))}})}(),function(){var e=n,t=e.lib.WordArray;e.enc.Base64={stringify:function(e){var t=e.words,n=e.sigBytes,r=this._map;e.clamp(),e=[];for(var i=0;i<n;i+=3)for(var s=(t[i>>>2]>>>24-8*(i%4)&255)<<16|(t[i+1>>>2]>>>24-8*((i+1)%4)&255)<<8|t[i+2>>>2]>>>24-8*((i+2)%4)&255,o=0;4>o&&i+.75*o<n;o++)e.push(r.charAt(s>>>6*(3-o)&63));if(t=r.charAt(64))for(;e.length%4;)e.push(t);return e.join("")},parse:function(e){var n=e.length,r=this._map,i=r.charAt(64);i&&(i=e.indexOf(i),-1!=i&&(n=i));for(var i=[],s=0,o=0;o<n;o++)if(o%4){var a=r.indexOf(e.charAt(o-1))<<2*(o%4),u=r.indexOf(e.charAt(o))>>>6-2*(o%4);i[s>>>2]|=(a|u)<<24-8*(s%4),s++}return t.create(i,s)},_map:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="}}(),function(e){function t(e,t,n,r,i,s,o){return e=e+(t&n|~t&r)+i+o,(e<<s|e>>>32-s)+t}function r(e,t,n,r,i,s,o){return e=e+(t&r|n&~r)+i+o,(e<<s|e>>>32-s)+t}function i(e,t,n,r,i,s,o){return e=e+(t^n^r)+i+o,(e<<s|e>>>32-s)+t}function s(e,t,n,r,i,s,o){return e=e+(n^(t|~r))+i+o,(e<<s|e>>>32-s)+t}for(var o=n,a=o.lib,u=a.WordArray,c=a.Hasher,a=o.algo,l=[],h=0;64>h;h++)l[h]=4294967296*e.abs(e.sin(h+1))|0;a=a.MD5=c.extend({_doReset:function(){this._hash=new u.init([1732584193,4023233417,2562383102,271733878])},_doProcessBlock:function(e,n){for(var o=0;16>o;o++){var a=n+o,u=e[a];e[a]=16711935&(u<<8|u>>>24)|4278255360&(u<<24|u>>>8)}var o=this._hash.words,a=e[n+0],u=e[n+1],c=e[n+2],h=e[n+3],f=e[n+4],p=e[n+5],d=e[n+6],g=e[n+7],y=e[n+8],v=e[n+9],b=e[n+10],_=e[n+11],m=e[n+12],k=e[n+13],P=e[n+14],w=e[n+15],S=o[0],O=o[1],C=o[2],T=o[3],S=t(S,O,C,T,a,7,l[0]),T=t(T,S,O,C,u,12,l[1]),C=t(C,T,S,O,c,17,l[2]),O=t(O,C,T,S,h,22,l[3]),S=t(S,O,C,T,f,7,l[4]),T=t(T,S,O,C,p,12,l[5]),C=t(C,T,S,O,d,17,l[6]),O=t(O,C,T,S,g,22,l[7]),S=t(S,O,C,T,y,7,l[8]),T=t(T,S,O,C,v,12,l[9]),C=t(C,T,S,O,b,17,l[10]),O=t(O,C,T,S,_,22,l[11]),S=t(S,O,C,T,m,7,l[12]),T=t(T,S,O,C,k,12,l[13]),C=t(C,T,S,O,P,17,l[14]),O=t(O,C,T,S,w,22,l[15]),S=r(S,O,C,T,u,5,l[16]),T=r(T,S,O,C,d,9,l[17]),C=r(C,T,S,O,_,14,l[18]),O=r(O,C,T,S,a,20,l[19]),S=r(S,O,C,T,p,5,l[20]),T=r(T,S,O,C,b,9,l[21]),C=r(C,T,S,O,w,14,l[22]),O=r(O,C,T,S,f,20,l[23]),S=r(S,O,C,T,v,5,l[24]),T=r(T,S,O,C,P,9,l[25]),C=r(C,T,S,O,h,14,l[26]),O=r(O,C,T,S,y,20,l[27]),S=r(S,O,C,T,k,5,l[28]),T=r(T,S,O,C,c,9,l[29]),C=r(C,T,S,O,g,14,l[30]),O=r(O,C,T,S,m,20,l[31]),S=i(S,O,C,T,p,4,l[32]),T=i(T,S,O,C,y,11,l[33]),C=i(C,T,S,O,_,16,l[34]),O=i(O,C,T,S,P,23,l[35]),S=i(S,O,C,T,u,4,l[36]),T=i(T,S,O,C,f,11,l[37]),C=i(C,T,S,O,g,16,l[38]),O=i(O,C,T,S,b,23,l[39]),S=i(S,O,C,T,k,4,l[40]),T=i(T,S,O,C,a,11,l[41]),C=i(C,T,S,O,h,16,l[42]),O=i(O,C,T,S,d,23,l[43]),S=i(S,O,C,T,v,4,l[44]),T=i(T,S,O,C,m,11,l[45]),C=i(C,T,S,O,w,16,l[46]),O=i(O,C,T,S,c,23,l[47]),S=s(S,O,C,T,a,6,l[48]),T=s(T,S,O,C,g,10,l[49]),C=s(C,T,S,O,P,15,l[50]),O=s(O,C,T,S,p,21,l[51]),S=s(S,O,C,T,m,6,l[52]),T=s(T,S,O,C,h,10,l[53]),C=s(C,T,S,O,b,15,l[54]),O=s(O,C,T,S,u,21,l[55]),S=s(S,O,C,T,y,6,l[56]),T=s(T,S,O,C,w,10,l[57]),C=s(C,T,S,O,d,15,l[58]),O=s(O,C,T,S,k,21,l[59]),S=s(S,O,C,T,f,6,l[60]),T=s(T,S,O,C,_,10,l[61]),C=s(C,T,S,O,c,15,l[62]),O=s(O,C,T,S,v,21,l[63]);o[0]=o[0]+S|0,o[1]=o[1]+O|0,o[2]=o[2]+C|0,o[3]=o[3]+T|0},_doFinalize:function(){var t=this._data,n=t.words,r=8*this._nDataBytes,i=8*t.sigBytes;n[i>>>5]|=128<<24-i%32;var s=e.floor(r/4294967296);for(n[(i+64>>>9<<4)+15]=16711935&(s<<8|s>>>24)|4278255360&(s<<24|s>>>8),n[(i+64>>>9<<4)+14]=16711935&(r<<8|r>>>24)|4278255360&(r<<24|r>>>8),t.sigBytes=4*(n.length+1),this._process(),t=this._hash,n=t.words,r=0;4>r;r++)i=n[r],n[r]=16711935&(i<<8|i>>>24)|4278255360&(i<<24|i>>>8);return t},clone:function(){var e=c.clone.call(this);return e._hash=this._hash.clone(),e}}),o.MD5=c._createHelper(a),o.HmacMD5=c._createHmacHelper(a)}(Math),function(){var e=n,t=e.lib,r=t.Base,i=t.WordArray,t=e.algo,s=t.EvpKDF=r.extend({cfg:r.extend({keySize:4,hasher:t.MD5,iterations:1}),init:function(e){this.cfg=this.cfg.extend(e)},compute:function(e,t){for(var n=this.cfg,r=n.hasher.create(),s=i.create(),o=s.words,a=n.keySize,n=n.iterations;o.length<a;){u&&r.update(u);var u=r.update(e).finalize(t);r.reset();for(var c=1;c<n;c++)u=r.finalize(u),r.reset();s.concat(u)}return s.sigBytes=4*a,s}});e.EvpKDF=function(e,t,n){return s.create(n).compute(e,t)}}(),n.lib.Cipher||function(e){var t=n,r=t.lib,i=r.Base,s=r.WordArray,o=r.BufferedBlockAlgorithm,a=t.enc.Base64,u=t.algo.EvpKDF,c=r.Cipher=o.extend({cfg:i.extend(),createEncryptor:function(e,t){return this.create(this._ENC_XFORM_MODE,e,t)},createDecryptor:function(e,t){return this.create(this._DEC_XFORM_MODE,e,t)},init:function(e,t,n){this.cfg=this.cfg.extend(n),this._xformMode=e,this._key=t,this.reset()},reset:function(){o.reset.call(this),this._doReset()},process:function(e){return this._append(e),this._process()},finalize:function(e){return e&&this._append(e),this._doFinalize()},keySize:4,ivSize:4,_ENC_XFORM_MODE:1,_DEC_XFORM_MODE:2,_createHelper:function(e){return{encrypt:function(t,n,r){return("string"==typeof n?g:d).encrypt(e,t,n,r)},decrypt:function(t,n,r){return("string"==typeof n?g:d).decrypt(e,t,n,r)}}}});r.StreamCipher=c.extend({_doFinalize:function(){return this._process(!0)},blockSize:1});var l=t.mode={},h=function(t,n,r){var i=this._iv;i?this._iv=e:i=this._prevBlock;for(var s=0;s<r;s++)t[n+s]^=i[s]},f=(r.BlockCipherMode=i.extend({createEncryptor:function(e,t){return this.Encryptor.create(e,t)},createDecryptor:function(e,t){return this.Decryptor.create(e,t)},init:function(e,t){this._cipher=e,this._iv=t}})).extend();f.Encryptor=f.extend({processBlock:function(e,t){var n=this._cipher,r=n.blockSize;h.call(this,e,t,r),n.encryptBlock(e,t),this._prevBlock=e.slice(t,t+r)}}),f.Decryptor=f.extend({processBlock:function(e,t){var n=this._cipher,r=n.blockSize,i=e.slice(t,t+r);n.decryptBlock(e,t),h.call(this,e,t,r),this._prevBlock=i}}),l=l.CBC=f,f=(t.pad={}).Pkcs7={pad:function(e,t){for(var n=4*t,n=n-e.sigBytes%n,r=n<<24|n<<16|n<<8|n,i=[],o=0;o<n;o+=4)i.push(r);n=s.create(i,n),e.concat(n)},unpad:function(e){e.sigBytes-=255&e.words[e.sigBytes-1>>>2]}},r.BlockCipher=c.extend({cfg:c.cfg.extend({mode:l,padding:f}),reset:function(){c.reset.call(this);var e=this.cfg,t=e.iv,e=e.mode;if(this._xformMode==this._ENC_XFORM_MODE)var n=e.createEncryptor;else n=e.createDecryptor,this._minBufferSize=1;this._mode=n.call(e,this,t&&t.words)},_doProcessBlock:function(e,t){this._mode.processBlock(e,t)},_doFinalize:function(){var e=this.cfg.padding;if(this._xformMode==this._ENC_XFORM_MODE){e.pad(this._data,this.blockSize);var t=this._process(!0)}else t=this._process(!0),e.unpad(t);return t},blockSize:4});var p=r.CipherParams=i.extend({init:function(e){this.mixIn(e)},toString:function(e){return(e||this.formatter).stringify(this)}}),l=(t.format={}).OpenSSL={stringify:function(e){var t=e.ciphertext;return e=e.salt,(e?s.create([1398893684,1701076831]).concat(e).concat(t):t).toString(a)},parse:function(e){e=a.parse(e);var t=e.words;if(1398893684==t[0]&&1701076831==t[1]){var n=s.create(t.slice(2,4));t.splice(0,4),e.sigBytes-=16}return p.create({ciphertext:e,salt:n})}},d=r.SerializableCipher=i.extend({cfg:i.extend({format:l}),encrypt:function(e,t,n,r){r=this.cfg.extend(r);var i=e.createEncryptor(n,r);return t=i.finalize(t),i=i.cfg,p.create({ciphertext:t,key:n,iv:i.iv,algorithm:e,mode:i.mode,padding:i.padding,blockSize:e.blockSize,formatter:r.format})},decrypt:function(e,t,n,r){return r=this.cfg.extend(r),t=this._parse(t,r.format),e.createDecryptor(n,r).finalize(t.ciphertext)},_parse:function(e,t){return"string"==typeof e?t.parse(e,this):e}}),t=(t.kdf={}).OpenSSL={execute:function(e,t,n,r){return r||(r=s.random(8)),e=u.create({keySize:t+n}).compute(e,r),n=s.create(e.words.slice(t),4*n),e.sigBytes=4*t,p.create({key:e,iv:n,salt:r})}},g=r.PasswordBasedCipher=d.extend({cfg:d.cfg.extend({kdf:t}),encrypt:function(e,t,n,r){return r=this.cfg.extend(r),n=r.kdf.execute(n,e.keySize,e.ivSize),r.iv=n.iv,e=d.encrypt.call(this,e,t,n.key,r),e.mixIn(n),e},decrypt:function(e,t,n,r){return r=this.cfg.extend(r),t=this._parse(t,r.format),n=r.kdf.execute(n,e.keySize,e.ivSize,t.salt),r.iv=n.iv,d.decrypt.call(this,e,t,n.key,r)}})}(),function(){for(var e=n,t=e.lib.BlockCipher,r=e.algo,i=[],s=[],o=[],a=[],u=[],c=[],l=[],h=[],f=[],p=[],d=[],g=0;256>g;g++)d[g]=128>g?g<<1:g<<1^283;for(var y=0,v=0,g=0;256>g;g++){var b=v^v<<1^v<<2^v<<3^v<<4,b=b>>>8^255&b^99;i[y]=b,s[b]=y;var _=d[y],m=d[_],k=d[m],P=257*d[b]^16843008*b;o[y]=P<<24|P>>>8,a[y]=P<<16|P>>>16,u[y]=P<<8|P>>>24,c[y]=P,P=16843009*k^65537*m^257*_^16843008*y,l[b]=P<<24|P>>>8,h[b]=P<<16|P>>>16,f[b]=P<<8|P>>>24,p[b]=P,y?(y=_^d[d[d[k^_]]],v^=d[d[v]]):y=v=1}var w=[0,1,2,4,8,16,32,64,128,27,54],r=r.AES=t.extend({_doReset:function(){for(var e=this._key,t=e.words,n=e.sigBytes/4,e=4*((this._nRounds=n+6)+1),r=this._keySchedule=[],s=0;s<e;s++)if(s<n)r[s]=t[s];else{var o=r[s-1];s%n?6<n&&4==s%n&&(o=i[o>>>24]<<24|i[o>>>16&255]<<16|i[o>>>8&255]<<8|i[255&o]):(o=o<<8|o>>>24,o=i[o>>>24]<<24|i[o>>>16&255]<<16|i[o>>>8&255]<<8|i[255&o],o^=w[s/n|0]<<24),r[s]=r[s-n]^o}for(t=this._invKeySchedule=[],n=0;n<e;n++)s=e-n,o=n%4?r[s]:r[s-4],t[n]=4>n||4>=s?o:l[i[o>>>24]]^h[i[o>>>16&255]]^f[i[o>>>8&255]]^p[i[255&o]]},encryptBlock:function(e,t){this._doCryptBlock(e,t,this._keySchedule,o,a,u,c,i)},decryptBlock:function(e,t){var n=e[t+1];e[t+1]=e[t+3],e[t+3]=n,this._doCryptBlock(e,t,this._invKeySchedule,l,h,f,p,s),n=e[t+1],e[t+1]=e[t+3],e[t+3]=n},_doCryptBlock:function(e,t,n,r,i,s,o,a){for(var u=this._nRounds,c=e[t]^n[0],l=e[t+1]^n[1],h=e[t+2]^n[2],f=e[t+3]^n[3],p=4,d=1;d<u;d++)var g=r[c>>>24]^i[l>>>16&255]^s[h>>>8&255]^o[255&f]^n[p++],y=r[l>>>24]^i[h>>>16&255]^s[f>>>8&255]^o[255&c]^n[p++],v=r[h>>>24]^i[f>>>16&255]^s[c>>>8&255]^o[255&l]^n[p++],f=r[f>>>24]^i[c>>>16&255]^s[l>>>8&255]^o[255&h]^n[p++],c=g,l=y,h=v;g=(a[c>>>24]<<24|a[l>>>16&255]<<16|a[h>>>8&255]<<8|a[255&f])^n[p++],y=(a[l>>>24]<<24|a[h>>>16&255]<<16|a[f>>>8&255]<<8|a[255&c])^n[p++],v=(a[h>>>24]<<24|a[f>>>16&255]<<16|a[c>>>8&255]<<8|a[255&l])^n[p++],f=(a[f>>>24]<<24|a[c>>>16&255]<<16|a[l>>>8&255]<<8|a[255&h])^n[p++],e[t]=g,e[t+1]=y,e[t+2]=v,e[t+3]=f},keySize:8});e.AES=t._createHelper(r)}(),n.mode.ECB=function(){var e=n.lib.BlockCipherMode.extend();return e.Encryptor=e.extend({processBlock:function(e,t){this._cipher.encryptBlock(e,t)}}),e.Decryptor=e.extend({processBlock:function(e,t){this._cipher.decryptBlock(e,t)}}),e}(),e.exports=n},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={PNNetworkUpCategory:"PNNetworkUpCategory",PNNetworkDownCategory:"PNNetworkDownCategory",PNNetworkIssuesCategory:"PNNetworkIssuesCategory",PNTimeoutCategory:"PNTimeoutCategory",PNBadRequestCategory:"PNBadRequestCategory",PNAccessDeniedCategory:"PNAccessDeniedCategory",PNUnknownCategory:"PNUnknownCategory",PNReconnectedCategory:"PNReconnectedCategory",PNConnectedCategory:"PNConnectedCategory"},e.exports=t.default},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n(11),a=(r(o),n(12)),u=(r(a),n(18)),c=(r(u),n(19)),l=r(c),h=n(22),f=r(h),p=(n(13),n(16)),d=r(p),g=function(){function e(t){var n=t.subscribeEndpoint,r=t.leaveEndpoint,s=t.heartbeatEndpoint,o=t.setStateEndpoint,a=t.timeEndpoint,u=t.config,c=t.crypto,h=t.listenerManager;i(this,e),this._listenerManager=h,this._config=u,this._leaveEndpoint=r,this._heartbeatEndpoint=s,this._setStateEndpoint=o,this._subscribeEndpoint=n,this._crypto=c,this._channels={},this._presenceChannels={},this._channelGroups={},this._presenceChannelGroups={},this._pendingChannelSubscriptions=[],this._pendingChannelGroupSubscriptions=[],this._timetoken=0,this._subscriptionStatusAnnounced=!1,this._reconnectionManager=new l.default({timeEndpoint:a})}return s(e,[{key:"adaptStateChange",value:function(e,t){var n=this,r=e.state,i=e.channels,s=void 0===i?[]:i,o=e.channelGroups,a=void 0===o?[]:o;s.forEach(function(e){e in n._channels&&(n._channels[e].state=r)}),a.forEach(function(e){e in n._channelGroups&&(n._channelGroups[e].state=r)}),this._setStateEndpoint({state:r,channels:s,channelGroups:a},t)}},{key:"adaptSubscribeChange",value:function(e){var t=this,n=e.timetoken,r=e.channels,i=void 0===r?[]:r,s=e.channelGroups,o=void 0===s?[]:s,a=e.withPresence,u=void 0!==a&&a;n&&(this._timetoken=n),i.forEach(function(e){t._channels[e]={state:{}},u&&(t._presenceChannels[e]={}),t._pendingChannelSubscriptions.push(e)}),o.forEach(function(e){t._channelGroups[e]={state:{}},u&&(t._presenceChannelGroups[e]={}),t._pendingChannelGroupSubscriptions.push(e)}),this._subscriptionStatusAnnounced=!1,this.reconnect()}},{key:"adaptUnsubscribeChange",value:function(e){var t=this,n=e.channels,r=void 0===n?[]:n,i=e.channelGroups,s=void 0===i?[]:i;r.forEach(function(e){e in t._channels&&delete t._channels[e],e in t._presenceChannels&&delete t._presenceChannels[e]}),s.forEach(function(e){e in t._channelGroups&&delete t._channelGroups[e],e in t._presenceChannelGroups&&delete t._channelGroups[e]}),this._config.suppressLeaveEvents===!1&&this._leaveEndpoint({channels:r,channelGroups:s},function(e){e.affectedChannels=r,e.affectedChannelGroups=s,t._listenerManager.announceStatus(e)}),0===Object.keys(this._channels).length&&0===Object.keys(this._presenceChannels).length&&0===Object.keys(this._channelGroups).length&&0===Object.keys(this._presenceChannelGroups).length&&(this._timetoken=0,this._region=null),this.reconnect()}},{key:"unsubscribeAll",value:function(){this.adaptUnsubscribeChange({channels:this.getSubscribedChannels(),channelGroups:this.getSubscribedChannelGroups()})}},{key:"getSubscribedChannels",value:function(){return Object.keys(this._channels)}},{key:"getSubscribedChannelGroups",value:function(){return Object.keys(this._channelGroups)}},{key:"reconnect",value:function(){this._startSubscribeLoop(),this._registerHeartbeatTimer()}},{key:"disconnect",value:function(){this._stopSubscribeLoop(),this._stopHeartbeatTimer()}},{key:"_registerHeartbeatTimer",value:function(){this._stopHeartbeatTimer(),this._performHeartbeatLoop(),this._heartbeatTimer=setInterval(this._performHeartbeatLoop.bind(this),1e3*this._config.getHeartbeatInterval())}},{key:"_stopHeartbeatTimer",value:function(){this._heartbeatTimer&&(clearInterval(this._heartbeatTimer),this._heartbeatTimer=null)}},{key:"_performHeartbeatLoop",value:function(){var e=this,t=Object.keys(this._channels),n=Object.keys(this._channelGroups),r={};if(0!==t.length||0!==n.length){t.forEach(function(t){var n=e._channels[t].state;Object.keys(n).length&&(r[t]=n)}),n.forEach(function(t){var n=e._channelGroups[t].state;Object.keys(n).length&&(r[t]=n)});var i=function(t){t.error&&e._config.announceFailedHeartbeats&&e._listenerManager.announceStatus(t),!t.error&&e._config.announceSuccessfulHeartbeats&&e._listenerManager.announceStatus(t)};this._heartbeatEndpoint({channels:t,channelGroups:n,state:r},i.bind(this))}}},{key:"_startSubscribeLoop",value:function(){this._stopSubscribeLoop();var e=[],t=[];if(Object.keys(this._channels).forEach(function(t){return e.push(t)}),Object.keys(this._presenceChannels).forEach(function(t){return e.push(t+"-pnpres")}),Object.keys(this._channelGroups).forEach(function(e){return t.push(e)}),Object.keys(this._presenceChannelGroups).forEach(function(e){return t.push(e+"-pnpres")}),0!==e.length||0!==t.length){var n={channels:e,channelGroups:t,timetoken:this._timetoken,filterExpression:this._config.filterExpression,region:this._region};this._subscribeCall=this._subscribeEndpoint(n,this._processSubscribeResponse.bind(this))}}},{key:"_processSubscribeResponse",value:function(e,t){var n=this;if(e.error)return void(e.category===d.default.PNTimeoutCategory?this._startSubscribeLoop():e.category===d.default.PNNetworkIssuesCategory?(this.disconnect(),this._reconnectionManager.onReconnection(function(){n.reconnect(),n._subscriptionStatusAnnounced=!0;var t={category:d.default.PNReconnectedCategory,operation:e.operation};n._listenerManager.announceStatus(t)}),this._reconnectionManager.startPolling(),this._listenerManager.announceStatus(e)):this._listenerManager.announceStatus(e));if(!this._subscriptionStatusAnnounced){var r={};r.category=d.default.PNConnectedCategory,r.operation=e.operation,r.affectedChannels=this._pendingChannelSubscriptions,r.affectedChannelGroups=this._pendingChannelGroupSubscriptions,this._subscriptionStatusAnnounced=!0,this._listenerManager.announceStatus(r),this._pendingChannelSubscriptions=[],this._pendingChannelGroupSubscriptions=[]}t.messages.forEach(function(e){var t=e.channel,r=e.subscriptionMatch,i=e.publishMetaData;if(t===r&&(r=null),f.default.endsWith(e.channel,"-pnpres")){var s={};s.channel=null,s.subscription=null,s.actualChannel=null!=r?t:null,s.subscribedChannel=null!=r?r:t,t&&(s.channel=t.substring(0,t.lastIndexOf("-pnpres"))),r&&(s.subscription=r.substring(0,r.lastIndexOf("-pnpres"))),s.action=e.payload.action,s.state=e.payload.data,s.timetoken=i.publishTimetoken,s.occupancy=e.payload.occupancy,s.uuid=e.payload.uuid,s.timestamp=e.payload.timestamp,n._listenerManager.announcePresence(s)}else{var o={};o.channel=null,o.subscription=null,o.actualChannel=null!=r?t:null,o.subscribedChannel=null!=r?r:t,o.channel=t,o.subscription=r,o.timetoken=i.publishTimetoken,n._config.cipherKey?o.message=n._crypto.decrypt(e.payload):o.message=e.payload,n._listenerManager.announceMessage(o)}}),this._region=t.metadata.region,this._timetoken=t.metadata.timetoken,this._startSubscribeLoop()}},{key:"_stopSubscribeLoop",value:function(){this._subscribeCall&&(this._subscribeCall.abort(),this._subscribeCall=null)}}]),e}();t.default=g,e.exports=t.default},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=(n(13),n(16)),a=r(o),u=function(){function e(){i(this,e),this._listeners=[]}return s(e,[{key:"addListener",value:function(e){this._listeners.push(e)}},{key:"removeListener",value:function(e){var t=[];this._listeners.forEach(function(n){n!==e&&t.push(n)}),this._listeners=t}},{key:"removeAllListeners",value:function(){this._listeners=[]}},{key:"announcePresence",value:function(e){this._listeners.forEach(function(t){t.presence&&t.presence(e)})}},{key:"announceStatus",value:function(e){this._listeners.forEach(function(t){t.status&&t.status(e)})}},{key:"announceMessage",value:function(e){this._listeners.forEach(function(t){t.message&&t.message(e)})}},{key:"announceNetworkUp",value:function(){var e={};e.category=a.default.PNNetworkUpCategory,this.announceStatus(e)}},{key:"announceNetworkDown",value:function(){var e={};e.category=a.default.PNNetworkDownCategory,this.announceStatus(e)}}]),e}();t.default=u,e.exports=t.default},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n(20),a=(r(o),n(13),function(){function e(t){var n=t.timeEndpoint;i(this,e),this._timeEndpoint=n}return s(e,[{key:"onReconnection",value:function(e){this._reconnectionCallback=e}},{key:"startPolling",value:function(){this._timeTimer=setInterval(this._performTimeLoop.bind(this),3e3)}},{key:"_performTimeLoop",value:function(){var e=this;this._timeEndpoint(function(t){t.error||(clearInterval(e._timeTimer),e._reconnectionCallback())})}}]),e}());t.default=a,e.exports=t.default},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function i(){return f.default.PNTimeOperation}function s(){return"/time/0"}function o(e){var t=e.config;return t.getTransactionTimeout()}function a(){return{}}function u(){return!1}function c(e,t){return{timetoken:t[0]}}function l(){}Object.defineProperty(t,"__esModule",{value:!0}),t.getOperation=i,t.getURL=s,t.getRequestTimeout=o,t.prepareParams=a,t.isAuthSupported=u,t.handleResponse=c,t.validateParams=l;var h=(n(13),n(21)),f=r(h)},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={PNTimeOperation:"PNTimeOperation",PNHistoryOperation:"PNHistoryOperation",PNSubscribeOperation:"PNSubscribeOperation",PNUnsubscribeOperation:"PNUnsubscribeOperation",PNPublishOperation:"PNPublishOperation",PNPushNotificationEnabledChannelsOperation:"PNPushNotificationEnabledChannelsOperation",PNRemoveAllPushNotificationsOperation:"PNRemoveAllPushNotificationsOperation",PNWhereNowOperation:"PNWhereNowOperation",PNSetStateOperation:"PNSetStateOperation",PNHereNowOperation:"PNHereNowOperation",PNGetStateOperation:"PNGetStateOperation",PNHeartbeatOperation:"PNHeartbeatOperation",PNChannelGroupsOperation:"PNChannelGroupsOperation",PNRemoveGroupOperation:"PNRemoveGroupOperation",PNChannelsForGroupOperation:"PNChannelsForGroupOperation",PNAddChannelsToGroupOperation:"PNAddChannelsToGroupOperation",PNRemoveChannelsFromGroupOperation:"PNRemoveChannelsFromGroupOperation",PNAccessManagerGrant:"PNAccessManagerGrant",PNAccessManagerAudit:"PNAccessManagerAudit"},e.exports=t.default},function(e,t){"use strict";function n(e){return encodeURIComponent(e).replace(/[!'()*~]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function r(e){var t=[];return Object.keys(e).forEach(function(e){return t.push(e)}),t}function i(e){return r(e).sort()}function s(e){var t=i(e);return t.map(function(t){return t+"="+n(e[t])}).join("&")}e.exports={signPamFromParams:s,endsWith:function(e,t){return e.indexOf(t,this.length-t.length)!==-1}}},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function i(e,t){return e.type=t,e}function s(e){return i({message:e},"validationError")}function o(e,t,n){return e.usePost&&e.usePost(t,n)?e.postURL(t,n):e.getURL(t,n)}function a(e){var t="PubNub-JS-"+e.sdkFamily;return e.partnerId&&(t+="-"+e.partnerId),t+="/"+e.getVersion()}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var n=e.networking,r=e.config,i=e.crypto,u=null,l={};t.getOperation()===d.default.PNTimeOperation||t.getOperation()===d.default.PNChannelGroupsOperation?u=arguments.length<=2?void 0:arguments[2]:(l=arguments.length<=2?void 0:arguments[2],u=arguments.length<=3?void 0:arguments[3]);var f=t.validateParams(e,l);if(f)return void u(s(f));var p=t.prepareParams(e,l),g=o(t,e,l),y=void 0,v={url:g,operation:t.getOperation(),timeout:t.getRequestTimeout(e)};if(p.uuid=r.UUID,p.pnsdk=a(r),r.useInstanceId&&(p.instanceid=r.instanceId),r.useRequestId&&(p.requestid=c.default.v4()),t.isAuthSupported()&&r.getAuthKey()&&(p.auth=r.getAuthKey()),r.secretKey){p.timestamp=Math.floor((new Date).getTime()/1e3);var b=r.subscribeKey+"\n"+r.publishKey+"\n";b+=t.getOperation()===d.default.PNAccessManagerGrant?"grant\n":t.getOperation()===d.default.PNAccessManagerAudit?"audit\n":g+"\n",b+=h.default.signPamFromParams(p),p.signature=i.HMACSHA256(b)}var _=function(n,r){if(u){if(n.error)return u(n);u(n,t.handleResponse(e,r,l))}};if(t.usePost&&t.usePost(e,l)){var m=t.postPayload(e,l);y=n.POST(p,m,v,_)}else y=n.GET(p,v,_);return t.getOperation()===d.default.PNSubscribeOperation?y:void 0};var u=n(2),c=r(u),l=(n(13),n(22)),h=r(l),f=n(12),p=(r(f),n(21)),d=r(p);e.exports=t.default},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function i(){return f.default.PNAddChannelsToGroupOperation}function s(e,t){var n=t.channels,r=t.channelGroup,i=e.config;return r?n&&0!==n.length?i.subscribeKey?void 0:"Missing Subscribe Key":"Missing Channels":"Missing Channel Group"}function o(e,t){var n=t.channelGroup,r=e.config;return"/v1/channel-registration/sub-key/"+r.subscribeKey+"/channel-group/"+n}function a(e){var t=e.config;return t.getTransactionTimeout()}function u(){return!0}function c(e,t){var n=t.channels,r=void 0===n?[]:n;return{add:r.join(",")}}function l(){return{}}Object.defineProperty(t,"__esModule",{value:!0}),t.getOperation=i,t.validateParams=s,t.getURL=o,t.getRequestTimeout=a,t.isAuthSupported=u,t.prepareParams=c,t.handleResponse=l;var h=(n(13),n(21)),f=r(h)},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function i(){return f.default.PNRemoveChannelsFromGroupOperation}function s(e,t){var n=t.channels,r=t.channelGroup,i=e.config;return r?n&&0!==n.length?i.subscribeKey?void 0:"Missing Subscribe Key":"Missing Channels":"Missing Channel Group"}function o(e,t){var n=t.channelGroup,r=e.config;return"/v1/channel-registration/sub-key/"+r.subscribeKey+"/channel-group/"+n}function a(e){var t=e.config;return t.getTransactionTimeout()}function u(){return!0}function c(e,t){var n=t.channels,r=void 0===n?[]:n;return{remove:r.join(",")}}function l(){return{}}Object.defineProperty(t,"__esModule",{value:!0}),t.getOperation=i,t.validateParams=s,t.getURL=o,t.getRequestTimeout=a,t.isAuthSupported=u,t.prepareParams=c,t.handleResponse=l;var h=(n(13),n(21)),f=r(h)},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function i(){return f.default.PNRemoveGroupOperation}function s(e,t){var n=t.channelGroup,r=e.config;return n?r.subscribeKey?void 0:"Missing Subscribe Key":"Missing Channel Group"}function o(e,t){var n=t.channelGroup,r=e.config;return"/v1/channel-registration/sub-key/"+r.subscribeKey+"/channel-group/"+n+"/remove"}function a(){return!0}function u(e){var t=e.config;return t.getTransactionTimeout()}function c(){return{}}function l(){return{}}Object.defineProperty(t,"__esModule",{value:!0}),t.getOperation=i,t.validateParams=s,t.getURL=o,t.isAuthSupported=a,t.getRequestTimeout=u,t.prepareParams=c,t.handleResponse=l;var h=(n(13),n(21)),f=r(h)},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function i(){return f.default.PNChannelGroupsOperation}function s(e){var t=e.config;if(!t.subscribeKey)return"Missing Subscribe Key"}function o(e){var t=e.config;return"/v1/channel-registration/sub-key/"+t.subscribeKey+"/channel-group"}function a(e){var t=e.config;return t.getTransactionTimeout()}function u(){return!0}function c(){return{}}function l(e,t){return{groups:t.payload.groups}}Object.defineProperty(t,"__esModule",{value:!0}),t.getOperation=i,t.validateParams=s,t.getURL=o,t.getRequestTimeout=a,t.isAuthSupported=u,t.prepareParams=c,t.handleResponse=l;var h=(n(13),n(21)),f=r(h)},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function i(){return f.default.PNChannelsForGroupOperation}function s(e,t){var n=t.channelGroup,r=e.config;return n?r.subscribeKey?void 0:"Missing Subscribe Key":"Missing Channel Group"}function o(e,t){var n=t.channelGroup,r=e.config;return"/v1/channel-registration/sub-key/"+r.subscribeKey+"/channel-group/"+n}function a(e){var t=e.config;return t.getTransactionTimeout()}function u(){return!0}function c(){return{}}function l(e,t){return{channels:t.payload.channels}}Object.defineProperty(t,"__esModule",{value:!0}),t.getOperation=i,t.validateParams=s,t.getURL=o,t.getRequestTimeout=a,t.isAuthSupported=u,t.prepareParams=c,t.handleResponse=l;var h=(n(13),n(21)),f=r(h)},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function i(){return f.default.PNPushNotificationEnabledChannelsOperation}function s(e,t){var n=t.device,r=t.pushGateway,i=t.channels,s=e.config;return n?r?i&&0!==i.length?s.subscribeKey?void 0:"Missing Subscribe Key":"Missing Channels":"Missing GW Type (pushGateway: gcm or apns)":"Missing Device ID (device)"}function o(e,t){var n=t.device,r=e.config;return"/v1/push/sub-key/"+r.subscribeKey+"/devices/"+n}function a(e){var t=e.config;return t.getTransactionTimeout()}function u(){return!0}function c(e,t){var n=t.pushGateway,r=t.channels,i=void 0===r?[]:r;return{type:n,add:i.join(",")}}function l(){return{}}Object.defineProperty(t,"__esModule",{value:!0}),t.getOperation=i,t.validateParams=s,t.getURL=o,t.getRequestTimeout=a,t.isAuthSupported=u,t.prepareParams=c,t.handleResponse=l;var h=(n(13),n(21)),f=r(h)},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function i(){return f.default.PNPushNotificationEnabledChannelsOperation}function s(e,t){var n=t.device,r=t.pushGateway,i=t.channels,s=e.config;return n?r?i&&0!==i.length?s.subscribeKey?void 0:"Missing Subscribe Key":"Missing Channels":"Missing GW Type (pushGateway: gcm or apns)":"Missing Device ID (device)"}function o(e,t){var n=t.device,r=e.config;return"/v1/push/sub-key/"+r.subscribeKey+"/devices/"+n}function a(e){var t=e.config;return t.getTransactionTimeout()}function u(){return!0}function c(e,t){var n=t.pushGateway,r=t.channels,i=void 0===r?[]:r;return{type:n,remove:i.join(",")}}function l(){return{}}Object.defineProperty(t,"__esModule",{value:!0}),t.getOperation=i,t.validateParams=s,t.getURL=o,
	t.getRequestTimeout=a,t.isAuthSupported=u,t.prepareParams=c,t.handleResponse=l;var h=(n(13),n(21)),f=r(h)},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function i(){return f.default.PNPushNotificationEnabledChannelsOperation}function s(e,t){var n=t.device,r=t.pushGateway,i=e.config;return n?r?i.subscribeKey?void 0:"Missing Subscribe Key":"Missing GW Type (pushGateway: gcm or apns)":"Missing Device ID (device)"}function o(e,t){var n=t.device,r=e.config;return"/v1/push/sub-key/"+r.subscribeKey+"/devices/"+n}function a(e){var t=e.config;return t.getTransactionTimeout()}function u(){return!0}function c(e,t){var n=t.pushGateway;return{type:n}}function l(e,t){return{channels:t}}Object.defineProperty(t,"__esModule",{value:!0}),t.getOperation=i,t.validateParams=s,t.getURL=o,t.getRequestTimeout=a,t.isAuthSupported=u,t.prepareParams=c,t.handleResponse=l;var h=(n(13),n(21)),f=r(h)},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function i(){return f.default.PNRemoveAllPushNotificationsOperation}function s(e,t){var n=t.device,r=t.pushGateway,i=e.config;return n?r?i.subscribeKey?void 0:"Missing Subscribe Key":"Missing GW Type (pushGateway: gcm or apns)":"Missing Device ID (device)"}function o(e,t){var n=t.device,r=e.config;return"/v1/push/sub-key/"+r.subscribeKey+"/devices/"+n+"/remove"}function a(e){var t=e.config;return t.getTransactionTimeout()}function u(){return!0}function c(e,t){var n=t.pushGateway;return{type:n}}function l(){return{}}Object.defineProperty(t,"__esModule",{value:!0}),t.getOperation=i,t.validateParams=s,t.getURL=o,t.getRequestTimeout=a,t.isAuthSupported=u,t.prepareParams=c,t.handleResponse=l;var h=(n(13),n(21)),f=r(h)},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function i(){return f.default.PNUnsubscribeOperation}function s(e){var t=e.config;if(!t.subscribeKey)return"Missing Subscribe Key"}function o(e,t){var n=e.config,r=t.channels,i=void 0===r?[]:r,s=i.length>0?i.join(","):",";return"/v2/presence/sub-key/"+n.subscribeKey+"/channel/"+encodeURIComponent(s)+"/leave"}function a(e){var t=e.config;return t.getTransactionTimeout()}function u(){return!0}function c(e,t){var n=t.channelGroups,r=void 0===n?[]:n,i={};return r.length>0&&(i["channel-group"]=r.join(",")),i}function l(){return{}}Object.defineProperty(t,"__esModule",{value:!0}),t.getOperation=i,t.validateParams=s,t.getURL=o,t.getRequestTimeout=a,t.isAuthSupported=u,t.prepareParams=c,t.handleResponse=l;var h=(n(13),n(21)),f=r(h)},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function i(){return f.default.PNWhereNowOperation}function s(e){var t=e.config;if(!t.subscribeKey)return"Missing Subscribe Key"}function o(e,t){var n=e.config,r=t.uuid,i=void 0===r?n.UUID:r;return"/v2/presence/sub-key/"+n.subscribeKey+"/uuid/"+i}function a(e){var t=e.config;return t.getTransactionTimeout()}function u(){return!0}function c(){return{}}function l(e,t){return{channels:t.payload.channels}}Object.defineProperty(t,"__esModule",{value:!0}),t.getOperation=i,t.validateParams=s,t.getURL=o,t.getRequestTimeout=a,t.isAuthSupported=u,t.prepareParams=c,t.handleResponse=l;var h=(n(13),n(21)),f=r(h)},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function i(){return f.default.PNHeartbeatOperation}function s(e){var t=e.config;if(!t.subscribeKey)return"Missing Subscribe Key"}function o(e,t){var n=e.config,r=t.channels,i=void 0===r?[]:r,s=i.length>0?i.join(","):",";return"/v2/presence/sub-key/"+n.subscribeKey+"/channel/"+encodeURIComponent(s)+"/heartbeat"}function a(){return!0}function u(e){var t=e.config;return t.getTransactionTimeout()}function c(e,t){var n=t.channelGroups,r=void 0===n?[]:n,i=t.state,s=void 0===i?{}:i,o=e.config,a={};return r.length>0&&(a["channel-group"]=r.join(",")),a.state=JSON.stringify(s),a.heartbeat=o.getPresenceTimeout(),a}function l(){return{}}Object.defineProperty(t,"__esModule",{value:!0}),t.getOperation=i,t.validateParams=s,t.getURL=o,t.isAuthSupported=a,t.getRequestTimeout=u,t.prepareParams=c,t.handleResponse=l;var h=(n(13),n(21)),f=r(h)},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function i(){return f.default.PNGetStateOperation}function s(e){var t=e.config;if(!t.subscribeKey)return"Missing Subscribe Key"}function o(e,t){var n=e.config,r=t.uuid,i=void 0===r?n.UUID:r,s=t.channels,o=void 0===s?[]:s,a=o.length>0?o.join(","):",";return"/v2/presence/sub-key/"+n.subscribeKey+"/channel/"+a+"/uuid/"+i}function a(e){var t=e.config;return t.getTransactionTimeout()}function u(){return!0}function c(e,t){var n=t.channelGroups,r=void 0===n?[]:n,i={};return r.length>0&&(i["channel-group"]=r.join(",")),i}function l(e,t,n){var r=n.channels,i=void 0===r?[]:r,s=n.channelGroups,o=void 0===s?[]:s,a={};return 1===i.length&&0===o.length?a[i[0]]=t.payload:a=t.payload,{channels:a}}Object.defineProperty(t,"__esModule",{value:!0}),t.getOperation=i,t.validateParams=s,t.getURL=o,t.getRequestTimeout=a,t.isAuthSupported=u,t.prepareParams=c,t.handleResponse=l;var h=(n(13),n(21)),f=r(h)},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function i(){return f.default.PNSetStateOperation}function s(e,t){var n=e.config,r=t.state;return r?n.subscribeKey?void 0:"Missing Subscribe Key":"Missing State"}function o(e,t){var n=e.config,r=t.channels,i=void 0===r?[]:r,s=i.length>0?i.join(","):",";return"/v2/presence/sub-key/"+n.subscribeKey+"/channel/"+s+"/uuid/"+n.UUID+"/data"}function a(e){var t=e.config;return t.getTransactionTimeout()}function u(){return!0}function c(e,t){var n=t.state,r=t.channelGroups,i=void 0===r?[]:r,s={};return s.state=JSON.stringify(n),i.length>0&&(s["channel-group"]=i.join(",")),s}function l(e,t){return{state:t.payload}}Object.defineProperty(t,"__esModule",{value:!0}),t.getOperation=i,t.validateParams=s,t.getURL=o,t.getRequestTimeout=a,t.isAuthSupported=u,t.prepareParams=c,t.handleResponse=l;var h=(n(13),n(21)),f=r(h)},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function i(){return f.default.PNHereNowOperation}function s(e){var t=e.config;if(!t.subscribeKey)return"Missing Subscribe Key"}function o(e,t){var n=e.config,r=t.channels,i=void 0===r?[]:r,s=t.channelGroups,o=void 0===s?[]:s,a="/v2/presence/sub-key/"+n.subscribeKey;if(i.length>0||o.length>0){var u=i.length>0?i.join(","):",";a+="/channel/"+encodeURIComponent(u)}return a}function a(e){var t=e.config;return t.getTransactionTimeout()}function u(){return!0}function c(e,t){var n=t.channelGroups,r=void 0===n?[]:n,i=t.includeUUIDs,s=void 0===i||i,o=t.includeState,a=void 0!==o&&o,u={};return s||(u.disable_uuids=1),a&&(u.state=1),r.length>0&&(u["channel-group"]=r.join(",")),u}function l(e,t,n){var r=n.channels,i=void 0===r?[]:r,s=n.channelGroups,o=void 0===s?[]:s,a=n.includeUUIDs,u=void 0===a||a,c=n.includeState,l=void 0!==c&&c,h=function(){var e={},n=[];return e.totalChannels=1,e.totalOccupancy=t.occupancy,e.channels={},e.channels[i[0]]={occupants:n,name:i[0],occupancy:t.occupancy},u&&t.uuids.forEach(function(e){l?n.push({state:e.state,uuid:e.uuid}):n.push({state:null,uuid:e})}),e},f=function(){var e={};return e.totalChannels=t.payload.total_channels,e.totalOccupancy=t.payload.total_occupancy,e.channels={},Object.keys(t.payload.channels).forEach(function(n){var r=t.payload.channels[n],i=[];return e.channels[n]={occupants:i,name:n,occupancy:r.occupancy},u&&r.uuids.forEach(function(e){l?i.push({state:e.state,uuid:e.uuid}):i.push({state:null,uuid:e})}),e}),e},p=void 0;return p=i.length>1||o.length>0||0===o.length&&0===i.length?f():h()}Object.defineProperty(t,"__esModule",{value:!0}),t.getOperation=i,t.validateParams=s,t.getURL=o,t.getRequestTimeout=a,t.isAuthSupported=u,t.prepareParams=c,t.handleResponse=l;var h=(n(13),n(21)),f=r(h)},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function i(){return f.default.PNAccessManagerAudit}function s(e){var t=e.config;if(!t.subscribeKey)return"Missing Subscribe Key"}function o(e){var t=e.config;return"/v1/auth/audit/sub-key/"+t.subscribeKey}function a(e){var t=e.config;return t.getTransactionTimeout()}function u(){return!1}function c(e,t){var n=t.channel,r=t.channelGroup,i=t.authKeys,s=void 0===i?[]:i,o={};return n&&(o.channel=n),r&&(o["channel-group"]=r),s.length>0&&(o.auth=s.join(",")),o}function l(e,t){return t.payload}Object.defineProperty(t,"__esModule",{value:!0}),t.getOperation=i,t.validateParams=s,t.getURL=o,t.getRequestTimeout=a,t.isAuthSupported=u,t.prepareParams=c,t.handleResponse=l;var h=(n(13),n(21)),f=r(h)},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function i(){return f.default.PNAccessManagerGrant}function s(e){var t=e.config;if(!t.subscribeKey)return"Missing Subscribe Key"}function o(e){var t=e.config;return"/v1/auth/grant/sub-key/"+t.subscribeKey}function a(e){var t=e.config;return t.getTransactionTimeout()}function u(){return!1}function c(e,t){var n=t.channels,r=void 0===n?[]:n,i=t.channelGroups,s=void 0===i?[]:i,o=t.ttl,a=t.read,u=void 0!==a&&a,c=t.write,l=void 0!==c&&c,h=t.manage,f=void 0!==h&&h,p=t.authKeys,d=void 0===p?[]:p,g={};return g.r=u?"1":"0",g.w=l?"1":"0",g.m=f?"1":"0",r.length>0&&(g.channel=r.join(",")),s.length>0&&(g["channel-group"]=s.join(",")),d.length>0&&(g.auth=d.join(",")),(o||0===o)&&(g.ttl=o),g}function l(){return{}}Object.defineProperty(t,"__esModule",{value:!0}),t.getOperation=i,t.validateParams=s,t.getURL=o,t.getRequestTimeout=a,t.isAuthSupported=u,t.prepareParams=c,t.handleResponse=l;var h=(n(13),n(21)),f=r(h)},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function i(e,t){var n=e.crypto,r=e.config,i=JSON.stringify(t);return r.cipherKey&&(i=n.encrypt(i),i=JSON.stringify(i)),i}function s(){return v.default.PNPublishOperation}function o(e,t){var n=e.config,r=t.message,i=t.channel;return i?r?n.subscribeKey?void 0:"Missing Subscribe Key":"Missing Message":"Missing Channel"}function a(e,t){var n=t.sendByPost,r=void 0!==n&&n;return r}function u(e,t){var n=e.config,r=t.channel,s=t.message,o=i(e,s);return"/publish/"+n.publishKey+"/"+n.subscribeKey+"/0/"+encodeURIComponent(r)+"/0/"+encodeURIComponent(o)}function c(e,t){var n=e.config,r=t.channel;return"/publish/"+n.publishKey+"/"+n.subscribeKey+"/0/"+encodeURIComponent(r)+"/0"}function l(e){var t=e.config;return t.getTransactionTimeout()}function h(){return!0}function f(e,t){var n=t.message;return i(e,n)}function p(e,t){var n=t.meta,r=t.replicate,i=void 0===r||r,s=t.storeInHistory,o={};return null!=s&&(s?o.store="1":o.store="0"),i===!1&&(o.norep="true"),n&&"object"===("undefined"==typeof n?"undefined":g(n))&&(o.meta=JSON.stringify(n)),o}function d(e,t){return{timetoken:t[2]}}Object.defineProperty(t,"__esModule",{value:!0});var g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.getOperation=s,t.validateParams=o,t.usePost=a,t.getURL=u,t.postURL=c,t.getRequestTimeout=l,t.isAuthSupported=h,t.postPayload=f,t.prepareParams=p,t.handleResponse=d;var y=(n(13),n(21)),v=r(y)},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function i(e,t){var n=e.config,r=e.crypto;if(!n.cipherKey)return t;try{return r.decrypt(t)}catch(e){return t}}function s(){return p.default.PNHistoryOperation}function o(e,t){var n=t.channel,r=e.config;return n?r.subscribeKey?void 0:"Missing Subscribe Key":"Missing channel"}function a(e,t){var n=t.channel,r=e.config;return"/v2/history/sub-key/"+r.subscribeKey+"/channel/"+encodeURIComponent(n)}function u(e){var t=e.config;return t.getTransactionTimeout()}function c(){return!0}function l(e,t){var n=t.start,r=t.end,i=t.includeTimetoken,s=void 0!==i&&i,o=t.reverse,a=t.count,u=void 0===a?100:a,c=t.stringifiedTimeToken,l=void 0!==c&&c,h={};return h.count=u,n&&(h.start=n),r&&(h.end=r),l&&(h.string_message_token="true"),s&&(h.include_token="true"),null!=o&&(h.reverse=o.toString()),h}function h(e,t){var n={messages:[],startTimeToken:t[1],endTimeToken:t[2]};return t[0].forEach(function(t){var r={timetoken:null,entry:null};t.timetoken?(r.timetoken=t.timetoken,r.entry=i(e,t.message)):r.entry=i(e,t),n.messages.push(r)}),n}Object.defineProperty(t,"__esModule",{value:!0}),t.getOperation=s,t.validateParams=o,t.getURL=a,t.getRequestTimeout=u,t.isAuthSupported=c,t.prepareParams=l,t.handleResponse=h;var f=(n(13),n(21)),p=r(f)},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function i(){return f.default.PNSubscribeOperation}function s(e){var t=e.config;if(!t.subscribeKey)return"Missing Subscribe Key"}function o(e,t){var n=e.config,r=t.channels,i=void 0===r?[]:r,s=i.length>0?i.join(","):",";return"/v2/subscribe/"+n.subscribeKey+"/"+encodeURIComponent(s)+"/0"}function a(e){var t=e.config;return t.getSubscribeTimeout()}function u(){return!0}function c(e,t){var n=e.config,r=t.channelGroups,i=void 0===r?[]:r,s=t.timetoken,o=t.filterExpression,a=t.region,u={heartbeat:n.getPresenceTimeout()};return i.length>0&&(u["channel-group"]=i.join(",")),o&&o.length>0&&(u["filter-expr"]=o),s&&(u.tt=s),a&&(u.tr=a),u}function l(e,t){var n=[];t.m.forEach(function(e){var t={publishTimetoken:e.p.t,region:e.p.r},r={shard:parseInt(e.a,10),subscriptionMatch:e.b,channel:e.c,payload:e.d,flags:e.f,issuingClientId:e.i,subscribeKey:e.k,originationTimetoken:e.o,publishMetaData:t};n.push(r)});var r={timetoken:t.t.t,region:t.t.r};return{messages:n,metadata:r}}Object.defineProperty(t,"__esModule",{value:!0}),t.getOperation=i,t.validateParams=s,t.getURL=o,t.getRequestTimeout=a,t.isAuthSupported=u,t.prepareParams=c,t.handleResponse=l;var h=(n(13),n(21)),f=r(h)}])});

/***/ },
/* 2 */
/***/ function(module, exports) {

	window.eon = window.eon || {};
	window.eon.m = {
	  create: function (options) {

	    options.debug = options.debug || false;

	    var clog = function(s, o, e) {

	      if (options.debug) {
	        if (e) {
	          console.log('EON-MAP:', s, o, e);
	        } else {
	          console.log('EON-MAP:', s, o);
	        }
	      }
	    };

	    if(typeof(options.pubnub) == "undefined" && console) {
	      return console.error("PubNub not found. See http://www.pubnub.com/docs/javascript/javascript-sdk.html#_where_do_i_get_the_code");
	    }

	    if(typeof(options.mb_token) == "undefined" && console) {
	      return console.error("Please supply a Mapbox Token: https://www.mapbox.com/help/create-api-access-token/");
	    }

	    if(typeof(options.mb_id) == "undefined" && console) {
	      return console.error("Please supply a Mapbox Map ID: https://www.mapbox.com/help/define-map-id/");
	    }

	    if(typeof(L) == "undefined" && console) {
	      return console.error("You need to include the Mapbox Javascript library.");
	    }

	    var self = this;

	    L.mapbox.accessToken = options.mb_token;

	    var geo = {
	      bearing : function (lat1,lng1,lat2,lng2) {
	        var dLon = this._toRad(lng2-lng1);
	        var y = Math.sin(dLon) * Math.cos(this._toRad(lat2));
	        var x = Math.cos(this._toRad(lat1))*Math.sin(this._toRad(lat2)) - Math.sin(this._toRad(lat1))*Math.cos(this._toRad(lat2))*Math.cos(dLon);
	        var brng = this._toDeg(Math.atan2(y, x));
	        return ((brng + 360) % 360);
	      },
	      _toRad : function(deg) {
	         return deg * Math.PI / 180;
	      },
	      _toDeg : function(rad) {
	        return rad * 180 / Math.PI;
	      }
	    };

	    self.pubnub = options.pubnub || PubNub || false;

	    if(!self.pubnub) {
	      error = "PubNub not found. See http://www.pubnub.com/docs/javascript/javascript-sdk.html#_where_do_i_get_the_code";
	    }

	    options.id = options.id || false;
	    options.channel = options.channel || false;
	    options.transform = options.transform || function(m){return m};
	    options.history = options.history || false;
	    options.message = options.message || function(){};
	    options.connect = options.connect || function(){};
	    options.rotate = options.rotate || false;
	    options.marker = options.marker || L.marker;
	    options.options = options.options || {};

	    clog('Options', options);

	    self.markers = {};

	    if(!options.id) {
	      return console.error('You need to set an ID for your Mapbox element.');
	      }

	    self.map = L.mapbox.map(options.id, options.mb_id, options.options);

	    self.refreshRate = options.refreshRate || 10;

	    self.lastUpdate = new Date().getTime();

	    self.update = function (seed, animate) {
	      
	      clog('Markers:', 'Updating');

	      for(var key in seed) {

	        if(seed.hasOwnProperty(key)) {

	          if(!self.markers[key]) {

	            var data = seed[key].data || {};

	            self.markers[key]= options.marker(seed[key].latlng, seed[key].data);
	            self.markers[key].addTo(self.map);

	          } else {

	            if(animate) {
	              clog('Markers:', 'Animating');
	              self.animate(key, seed[key].latlng);
	            } else {
	              clog('Markers:', 'Updating');
	              self.updateMarker(key, seed[key].latlng);
	            }

	          }

	        }

	      }

	      self.lastUpdate = new Date().getTime();

	    };

	    var isNumber = function(n) {
	      return !isNaN(parseFloat(n)) && isFinite(n);
	    };

	    self.updateMarker = function (index, point) {

	      if(point && point.length > 1) {

	        if(isNumber(point[0]) && isNumber(point[1])) {
	          self.markers[index].setLatLng(point);
	        }

	      }

	    };

	    self.animations = {};

	    self.animate = function (index, destination) {

	      var startlatlng = self.markers[index].getLatLng();

	      var animation = {
	        start: startlatlng,
	        dest: destination,
	        time: new Date().getTime(),
	        length: new Date().getTime() - self.lastUpdate
	      };

	      clog('Animation:', animation);

	      self.animations[index] = animation;

	      clog('Animations:', self.animations);

	    };

	    self.refresh = function() {

	      var s = {};

	      for(var index in self.markers) {

	        if(self.markers.hasOwnProperty(index) && typeof self.animations[index] !== 'undefined') {

	          s.position = self.animations[index].start;

	          // number of steps in this animation
	          s.maxSteps = Math.round(self.animations[index].length / self.refreshRate)

	          // time that has passed since that message
	          s.timeSince = new Date().getTime() - self.animations[index].time;
	          s.numSteps = Math.round(s.timeSince / self.refreshRate); // if this is 1 or 0 it fucks up steps

	          if(s.numSteps <= s.maxSteps) {

	            // probably has to do with this math
	            s.latDistance = self.animations[index].dest[0] - s.position.lat;
	            s.lngDistance = self.animations[index].dest[1] - s.position.lng;

	            s.lat = s.position.lat + ((s.latDistance / s.maxSteps) * s.numSteps);
	            s.lng = s.position.lng + ((s.lngDistance / s.maxSteps) * s.numSteps);

	            s.nextStep = [s.lat, s.lng];

	            self.updateMarker(index, s.nextStep);

	            if(options.rotate) {
	              self.markers[index].options.angle = geo.bearing(s.position.lat, s.position.lng, s.lat, s.lng);
	            }
	             
	          }

	        }

	        index++;

	      }

	    };

	    self.pubnub.addListener({
	      status: function(statusEvent) {
	        if (statusEvent.category === "PNConnectedCategory") {
	          options.connect();
	        }
	      },
	      message: function(m) {
	        
	        if(m.channel == options.channel) {
	          
	          clog('PubNub:', 'Got Message');

	          message = options.transform(m.message);

	          options.message(message, m.timetoken, m.channel);
	          self.update(message, true);
	        }

	      }
	    });

	    self.pubnub.subscribe({
	      channels: [options.channel]
	    });

	    if(options.history) {

	      self.pubnub.history({
	        channel: options.channel,
	        includeTimetoken: true
	      }, function(status, payload) {

	        for(var a in payload.messages) {
	          payload.messages[a].entry = options.transform(payload.messages[a].entry);
	          options.message(payload.messages[a].entry, payload.messages[a].timetoken, options.channel);
	          self.update(payload.messages[a].entry, true);
	        }

	        options.connect();

	      }
	     );

	    } else {
	      options.connect();
	    }

	    self.refresh();
	    setInterval(self.refresh, self.refreshRate);

	    return self.map;

	  }
	};
	window.eon.map = function(o) {
	  return new window.eon.m.create(o);
	};


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var leaflet = __webpack_require__(4);

	__webpack_require__(6);

	module.exports = leaflet;


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = window.L = __webpack_require__(5);


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*
	 Leaflet, a JavaScript library for mobile-friendly interactive maps. http://leafletjs.com
	 (c) 2010-2013, Vladimir Agafonkin
	 (c) 2010-2011, CloudMade
	*/
	(function (window, document, undefined) {
	var oldL = window.L,
	    L = {};

	L.version = '0.7.7';

	// define Leaflet for Node module pattern loaders, including Browserify
	if (typeof module === 'object' && typeof module.exports === 'object') {
		module.exports = L;

	// define Leaflet as an AMD module
	} else if (true) {
		!(__WEBPACK_AMD_DEFINE_FACTORY__ = (L), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	}

	// define Leaflet as a global L variable, saving the original L to restore later if needed

	L.noConflict = function () {
		window.L = oldL;
		return this;
	};

	window.L = L;


	/*
	 * L.Util contains various utility functions used throughout Leaflet code.
	 */

	L.Util = {
		extend: function (dest) { // (Object[, Object, ...]) ->
			var sources = Array.prototype.slice.call(arguments, 1),
			    i, j, len, src;

			for (j = 0, len = sources.length; j < len; j++) {
				src = sources[j] || {};
				for (i in src) {
					if (src.hasOwnProperty(i)) {
						dest[i] = src[i];
					}
				}
			}
			return dest;
		},

		bind: function (fn, obj) { // (Function, Object) -> Function
			var args = arguments.length > 2 ? Array.prototype.slice.call(arguments, 2) : null;
			return function () {
				return fn.apply(obj, args || arguments);
			};
		},

		stamp: (function () {
			var lastId = 0,
			    key = '_leaflet_id';
			return function (obj) {
				obj[key] = obj[key] || ++lastId;
				return obj[key];
			};
		}()),

		invokeEach: function (obj, method, context) {
			var i, args;

			if (typeof obj === 'object') {
				args = Array.prototype.slice.call(arguments, 3);

				for (i in obj) {
					method.apply(context, [i, obj[i]].concat(args));
				}
				return true;
			}

			return false;
		},

		limitExecByInterval: function (fn, time, context) {
			var lock, execOnUnlock;

			return function wrapperFn() {
				var args = arguments;

				if (lock) {
					execOnUnlock = true;
					return;
				}

				lock = true;

				setTimeout(function () {
					lock = false;

					if (execOnUnlock) {
						wrapperFn.apply(context, args);
						execOnUnlock = false;
					}
				}, time);

				fn.apply(context, args);
			};
		},

		falseFn: function () {
			return false;
		},

		formatNum: function (num, digits) {
			var pow = Math.pow(10, digits || 5);
			return Math.round(num * pow) / pow;
		},

		trim: function (str) {
			return str.trim ? str.trim() : str.replace(/^\s+|\s+$/g, '');
		},

		splitWords: function (str) {
			return L.Util.trim(str).split(/\s+/);
		},

		setOptions: function (obj, options) {
			obj.options = L.extend({}, obj.options, options);
			return obj.options;
		},

		getParamString: function (obj, existingUrl, uppercase) {
			var params = [];
			for (var i in obj) {
				params.push(encodeURIComponent(uppercase ? i.toUpperCase() : i) + '=' + encodeURIComponent(obj[i]));
			}
			return ((!existingUrl || existingUrl.indexOf('?') === -1) ? '?' : '&') + params.join('&');
		},
		template: function (str, data) {
			return str.replace(/\{ *([\w_]+) *\}/g, function (str, key) {
				var value = data[key];
				if (value === undefined) {
					throw new Error('No value provided for variable ' + str);
				} else if (typeof value === 'function') {
					value = value(data);
				}
				return value;
			});
		},

		isArray: Array.isArray || function (obj) {
			return (Object.prototype.toString.call(obj) === '[object Array]');
		},

		emptyImageUrl: 'data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs='
	};

	(function () {

		// inspired by http://paulirish.com/2011/requestanimationframe-for-smart-animating/

		function getPrefixed(name) {
			var i, fn,
			    prefixes = ['webkit', 'moz', 'o', 'ms'];

			for (i = 0; i < prefixes.length && !fn; i++) {
				fn = window[prefixes[i] + name];
			}

			return fn;
		}

		var lastTime = 0;

		function timeoutDefer(fn) {
			var time = +new Date(),
			    timeToCall = Math.max(0, 16 - (time - lastTime));

			lastTime = time + timeToCall;
			return window.setTimeout(fn, timeToCall);
		}

		var requestFn = window.requestAnimationFrame ||
		        getPrefixed('RequestAnimationFrame') || timeoutDefer;

		var cancelFn = window.cancelAnimationFrame ||
		        getPrefixed('CancelAnimationFrame') ||
		        getPrefixed('CancelRequestAnimationFrame') ||
		        function (id) { window.clearTimeout(id); };


		L.Util.requestAnimFrame = function (fn, context, immediate, element) {
			fn = L.bind(fn, context);

			if (immediate && requestFn === timeoutDefer) {
				fn();
			} else {
				return requestFn.call(window, fn, element);
			}
		};

		L.Util.cancelAnimFrame = function (id) {
			if (id) {
				cancelFn.call(window, id);
			}
		};

	}());

	// shortcuts for most used utility functions
	L.extend = L.Util.extend;
	L.bind = L.Util.bind;
	L.stamp = L.Util.stamp;
	L.setOptions = L.Util.setOptions;


	/*
	 * L.Class powers the OOP facilities of the library.
	 * Thanks to John Resig and Dean Edwards for inspiration!
	 */

	L.Class = function () {};

	L.Class.extend = function (props) {

		// extended class with the new prototype
		var NewClass = function () {

			// call the constructor
			if (this.initialize) {
				this.initialize.apply(this, arguments);
			}

			// call all constructor hooks
			if (this._initHooks) {
				this.callInitHooks();
			}
		};

		// instantiate class without calling constructor
		var F = function () {};
		F.prototype = this.prototype;

		var proto = new F();
		proto.constructor = NewClass;

		NewClass.prototype = proto;

		//inherit parent's statics
		for (var i in this) {
			if (this.hasOwnProperty(i) && i !== 'prototype') {
				NewClass[i] = this[i];
			}
		}

		// mix static properties into the class
		if (props.statics) {
			L.extend(NewClass, props.statics);
			delete props.statics;
		}

		// mix includes into the prototype
		if (props.includes) {
			L.Util.extend.apply(null, [proto].concat(props.includes));
			delete props.includes;
		}

		// merge options
		if (props.options && proto.options) {
			props.options = L.extend({}, proto.options, props.options);
		}

		// mix given properties into the prototype
		L.extend(proto, props);

		proto._initHooks = [];

		var parent = this;
		// jshint camelcase: false
		NewClass.__super__ = parent.prototype;

		// add method for calling all hooks
		proto.callInitHooks = function () {

			if (this._initHooksCalled) { return; }

			if (parent.prototype.callInitHooks) {
				parent.prototype.callInitHooks.call(this);
			}

			this._initHooksCalled = true;

			for (var i = 0, len = proto._initHooks.length; i < len; i++) {
				proto._initHooks[i].call(this);
			}
		};

		return NewClass;
	};


	// method for adding properties to prototype
	L.Class.include = function (props) {
		L.extend(this.prototype, props);
	};

	// merge new default options to the Class
	L.Class.mergeOptions = function (options) {
		L.extend(this.prototype.options, options);
	};

	// add a constructor hook
	L.Class.addInitHook = function (fn) { // (Function) || (String, args...)
		var args = Array.prototype.slice.call(arguments, 1);

		var init = typeof fn === 'function' ? fn : function () {
			this[fn].apply(this, args);
		};

		this.prototype._initHooks = this.prototype._initHooks || [];
		this.prototype._initHooks.push(init);
	};


	/*
	 * L.Mixin.Events is used to add custom events functionality to Leaflet classes.
	 */

	var eventsKey = '_leaflet_events';

	L.Mixin = {};

	L.Mixin.Events = {

		addEventListener: function (types, fn, context) { // (String, Function[, Object]) or (Object[, Object])

			// types can be a map of types/handlers
			if (L.Util.invokeEach(types, this.addEventListener, this, fn, context)) { return this; }

			var events = this[eventsKey] = this[eventsKey] || {},
			    contextId = context && context !== this && L.stamp(context),
			    i, len, event, type, indexKey, indexLenKey, typeIndex;

			// types can be a string of space-separated words
			types = L.Util.splitWords(types);

			for (i = 0, len = types.length; i < len; i++) {
				event = {
					action: fn,
					context: context || this
				};
				type = types[i];

				if (contextId) {
					// store listeners of a particular context in a separate hash (if it has an id)
					// gives a major performance boost when removing thousands of map layers

					indexKey = type + '_idx';
					indexLenKey = indexKey + '_len';

					typeIndex = events[indexKey] = events[indexKey] || {};

					if (!typeIndex[contextId]) {
						typeIndex[contextId] = [];

						// keep track of the number of keys in the index to quickly check if it's empty
						events[indexLenKey] = (events[indexLenKey] || 0) + 1;
					}

					typeIndex[contextId].push(event);


				} else {
					events[type] = events[type] || [];
					events[type].push(event);
				}
			}

			return this;
		},

		hasEventListeners: function (type) { // (String) -> Boolean
			var events = this[eventsKey];
			return !!events && ((type in events && events[type].length > 0) ||
			                    (type + '_idx' in events && events[type + '_idx_len'] > 0));
		},

		removeEventListener: function (types, fn, context) { // ([String, Function, Object]) or (Object[, Object])

			if (!this[eventsKey]) {
				return this;
			}

			if (!types) {
				return this.clearAllEventListeners();
			}

			if (L.Util.invokeEach(types, this.removeEventListener, this, fn, context)) { return this; }

			var events = this[eventsKey],
			    contextId = context && context !== this && L.stamp(context),
			    i, len, type, listeners, j, indexKey, indexLenKey, typeIndex, removed;

			types = L.Util.splitWords(types);

			for (i = 0, len = types.length; i < len; i++) {
				type = types[i];
				indexKey = type + '_idx';
				indexLenKey = indexKey + '_len';

				typeIndex = events[indexKey];

				if (!fn) {
					// clear all listeners for a type if function isn't specified
					delete events[type];
					delete events[indexKey];
					delete events[indexLenKey];

				} else {
					listeners = contextId && typeIndex ? typeIndex[contextId] : events[type];

					if (listeners) {
						for (j = listeners.length - 1; j >= 0; j--) {
							if ((listeners[j].action === fn) && (!context || (listeners[j].context === context))) {
								removed = listeners.splice(j, 1);
								// set the old action to a no-op, because it is possible
								// that the listener is being iterated over as part of a dispatch
								removed[0].action = L.Util.falseFn;
							}
						}

						if (context && typeIndex && (listeners.length === 0)) {
							delete typeIndex[contextId];
							events[indexLenKey]--;
						}
					}
				}
			}

			return this;
		},

		clearAllEventListeners: function () {
			delete this[eventsKey];
			return this;
		},

		fireEvent: function (type, data) { // (String[, Object])
			if (!this.hasEventListeners(type)) {
				return this;
			}

			var event = L.Util.extend({}, data, { type: type, target: this });

			var events = this[eventsKey],
			    listeners, i, len, typeIndex, contextId;

			if (events[type]) {
				// make sure adding/removing listeners inside other listeners won't cause infinite loop
				listeners = events[type].slice();

				for (i = 0, len = listeners.length; i < len; i++) {
					listeners[i].action.call(listeners[i].context, event);
				}
			}

			// fire event for the context-indexed listeners as well
			typeIndex = events[type + '_idx'];

			for (contextId in typeIndex) {
				listeners = typeIndex[contextId].slice();

				if (listeners) {
					for (i = 0, len = listeners.length; i < len; i++) {
						listeners[i].action.call(listeners[i].context, event);
					}
				}
			}

			return this;
		},

		addOneTimeEventListener: function (types, fn, context) {

			if (L.Util.invokeEach(types, this.addOneTimeEventListener, this, fn, context)) { return this; }

			var handler = L.bind(function () {
				this
				    .removeEventListener(types, fn, context)
				    .removeEventListener(types, handler, context);
			}, this);

			return this
			    .addEventListener(types, fn, context)
			    .addEventListener(types, handler, context);
		}
	};

	L.Mixin.Events.on = L.Mixin.Events.addEventListener;
	L.Mixin.Events.off = L.Mixin.Events.removeEventListener;
	L.Mixin.Events.once = L.Mixin.Events.addOneTimeEventListener;
	L.Mixin.Events.fire = L.Mixin.Events.fireEvent;


	/*
	 * L.Browser handles different browser and feature detections for internal Leaflet use.
	 */

	(function () {

		var ie = 'ActiveXObject' in window,
			ielt9 = ie && !document.addEventListener,

		    // terrible browser detection to work around Safari / iOS / Android browser bugs
		    ua = navigator.userAgent.toLowerCase(),
		    webkit = ua.indexOf('webkit') !== -1,
		    chrome = ua.indexOf('chrome') !== -1,
		    phantomjs = ua.indexOf('phantom') !== -1,
		    android = ua.indexOf('android') !== -1,
		    android23 = ua.search('android [23]') !== -1,
			gecko = ua.indexOf('gecko') !== -1,

		    mobile = typeof orientation !== undefined + '',
		    msPointer = !window.PointerEvent && window.MSPointerEvent,
			pointer = (window.PointerEvent && window.navigator.pointerEnabled) ||
					  msPointer,
		    retina = ('devicePixelRatio' in window && window.devicePixelRatio > 1) ||
		             ('matchMedia' in window && window.matchMedia('(min-resolution:144dpi)') &&
		              window.matchMedia('(min-resolution:144dpi)').matches),

		    doc = document.documentElement,
		    ie3d = ie && ('transition' in doc.style),
		    webkit3d = ('WebKitCSSMatrix' in window) && ('m11' in new window.WebKitCSSMatrix()) && !android23,
		    gecko3d = 'MozPerspective' in doc.style,
		    opera3d = 'OTransition' in doc.style,
		    any3d = !window.L_DISABLE_3D && (ie3d || webkit3d || gecko3d || opera3d) && !phantomjs;

		var touch = !window.L_NO_TOUCH && !phantomjs && (pointer || 'ontouchstart' in window ||
			(window.DocumentTouch && document instanceof window.DocumentTouch));

		L.Browser = {
			ie: ie,
			ielt9: ielt9,
			webkit: webkit,
			gecko: gecko && !webkit && !window.opera && !ie,

			android: android,
			android23: android23,

			chrome: chrome,

			ie3d: ie3d,
			webkit3d: webkit3d,
			gecko3d: gecko3d,
			opera3d: opera3d,
			any3d: any3d,

			mobile: mobile,
			mobileWebkit: mobile && webkit,
			mobileWebkit3d: mobile && webkit3d,
			mobileOpera: mobile && window.opera,

			touch: touch,
			msPointer: msPointer,
			pointer: pointer,

			retina: retina
		};

	}());


	/*
	 * L.Point represents a point with x and y coordinates.
	 */

	L.Point = function (/*Number*/ x, /*Number*/ y, /*Boolean*/ round) {
		this.x = (round ? Math.round(x) : x);
		this.y = (round ? Math.round(y) : y);
	};

	L.Point.prototype = {

		clone: function () {
			return new L.Point(this.x, this.y);
		},

		// non-destructive, returns a new point
		add: function (point) {
			return this.clone()._add(L.point(point));
		},

		// destructive, used directly for performance in situations where it's safe to modify existing point
		_add: function (point) {
			this.x += point.x;
			this.y += point.y;
			return this;
		},

		subtract: function (point) {
			return this.clone()._subtract(L.point(point));
		},

		_subtract: function (point) {
			this.x -= point.x;
			this.y -= point.y;
			return this;
		},

		divideBy: function (num) {
			return this.clone()._divideBy(num);
		},

		_divideBy: function (num) {
			this.x /= num;
			this.y /= num;
			return this;
		},

		multiplyBy: function (num) {
			return this.clone()._multiplyBy(num);
		},

		_multiplyBy: function (num) {
			this.x *= num;
			this.y *= num;
			return this;
		},

		round: function () {
			return this.clone()._round();
		},

		_round: function () {
			this.x = Math.round(this.x);
			this.y = Math.round(this.y);
			return this;
		},

		floor: function () {
			return this.clone()._floor();
		},

		_floor: function () {
			this.x = Math.floor(this.x);
			this.y = Math.floor(this.y);
			return this;
		},

		distanceTo: function (point) {
			point = L.point(point);

			var x = point.x - this.x,
			    y = point.y - this.y;

			return Math.sqrt(x * x + y * y);
		},

		equals: function (point) {
			point = L.point(point);

			return point.x === this.x &&
			       point.y === this.y;
		},

		contains: function (point) {
			point = L.point(point);

			return Math.abs(point.x) <= Math.abs(this.x) &&
			       Math.abs(point.y) <= Math.abs(this.y);
		},

		toString: function () {
			return 'Point(' +
			        L.Util.formatNum(this.x) + ', ' +
			        L.Util.formatNum(this.y) + ')';
		}
	};

	L.point = function (x, y, round) {
		if (x instanceof L.Point) {
			return x;
		}
		if (L.Util.isArray(x)) {
			return new L.Point(x[0], x[1]);
		}
		if (x === undefined || x === null) {
			return x;
		}
		return new L.Point(x, y, round);
	};


	/*
	 * L.Bounds represents a rectangular area on the screen in pixel coordinates.
	 */

	L.Bounds = function (a, b) { //(Point, Point) or Point[]
		if (!a) { return; }

		var points = b ? [a, b] : a;

		for (var i = 0, len = points.length; i < len; i++) {
			this.extend(points[i]);
		}
	};

	L.Bounds.prototype = {
		// extend the bounds to contain the given point
		extend: function (point) { // (Point)
			point = L.point(point);

			if (!this.min && !this.max) {
				this.min = point.clone();
				this.max = point.clone();
			} else {
				this.min.x = Math.min(point.x, this.min.x);
				this.max.x = Math.max(point.x, this.max.x);
				this.min.y = Math.min(point.y, this.min.y);
				this.max.y = Math.max(point.y, this.max.y);
			}
			return this;
		},

		getCenter: function (round) { // (Boolean) -> Point
			return new L.Point(
			        (this.min.x + this.max.x) / 2,
			        (this.min.y + this.max.y) / 2, round);
		},

		getBottomLeft: function () { // -> Point
			return new L.Point(this.min.x, this.max.y);
		},

		getTopRight: function () { // -> Point
			return new L.Point(this.max.x, this.min.y);
		},

		getSize: function () {
			return this.max.subtract(this.min);
		},

		contains: function (obj) { // (Bounds) or (Point) -> Boolean
			var min, max;

			if (typeof obj[0] === 'number' || obj instanceof L.Point) {
				obj = L.point(obj);
			} else {
				obj = L.bounds(obj);
			}

			if (obj instanceof L.Bounds) {
				min = obj.min;
				max = obj.max;
			} else {
				min = max = obj;
			}

			return (min.x >= this.min.x) &&
			       (max.x <= this.max.x) &&
			       (min.y >= this.min.y) &&
			       (max.y <= this.max.y);
		},

		intersects: function (bounds) { // (Bounds) -> Boolean
			bounds = L.bounds(bounds);

			var min = this.min,
			    max = this.max,
			    min2 = bounds.min,
			    max2 = bounds.max,
			    xIntersects = (max2.x >= min.x) && (min2.x <= max.x),
			    yIntersects = (max2.y >= min.y) && (min2.y <= max.y);

			return xIntersects && yIntersects;
		},

		isValid: function () {
			return !!(this.min && this.max);
		}
	};

	L.bounds = function (a, b) { // (Bounds) or (Point, Point) or (Point[])
		if (!a || a instanceof L.Bounds) {
			return a;
		}
		return new L.Bounds(a, b);
	};


	/*
	 * L.Transformation is an utility class to perform simple point transformations through a 2d-matrix.
	 */

	L.Transformation = function (a, b, c, d) {
		this._a = a;
		this._b = b;
		this._c = c;
		this._d = d;
	};

	L.Transformation.prototype = {
		transform: function (point, scale) { // (Point, Number) -> Point
			return this._transform(point.clone(), scale);
		},

		// destructive transform (faster)
		_transform: function (point, scale) {
			scale = scale || 1;
			point.x = scale * (this._a * point.x + this._b);
			point.y = scale * (this._c * point.y + this._d);
			return point;
		},

		untransform: function (point, scale) {
			scale = scale || 1;
			return new L.Point(
			        (point.x / scale - this._b) / this._a,
			        (point.y / scale - this._d) / this._c);
		}
	};


	/*
	 * L.DomUtil contains various utility functions for working with DOM.
	 */

	L.DomUtil = {
		get: function (id) {
			return (typeof id === 'string' ? document.getElementById(id) : id);
		},

		getStyle: function (el, style) {

			var value = el.style[style];

			if (!value && el.currentStyle) {
				value = el.currentStyle[style];
			}

			if ((!value || value === 'auto') && document.defaultView) {
				var css = document.defaultView.getComputedStyle(el, null);
				value = css ? css[style] : null;
			}

			return value === 'auto' ? null : value;
		},

		getViewportOffset: function (element) {

			var top = 0,
			    left = 0,
			    el = element,
			    docBody = document.body,
			    docEl = document.documentElement,
			    pos;

			do {
				top  += el.offsetTop  || 0;
				left += el.offsetLeft || 0;

				//add borders
				top += parseInt(L.DomUtil.getStyle(el, 'borderTopWidth'), 10) || 0;
				left += parseInt(L.DomUtil.getStyle(el, 'borderLeftWidth'), 10) || 0;

				pos = L.DomUtil.getStyle(el, 'position');

				if (el.offsetParent === docBody && pos === 'absolute') { break; }

				if (pos === 'fixed') {
					top  += docBody.scrollTop  || docEl.scrollTop  || 0;
					left += docBody.scrollLeft || docEl.scrollLeft || 0;
					break;
				}

				if (pos === 'relative' && !el.offsetLeft) {
					var width = L.DomUtil.getStyle(el, 'width'),
					    maxWidth = L.DomUtil.getStyle(el, 'max-width'),
					    r = el.getBoundingClientRect();

					if (width !== 'none' || maxWidth !== 'none') {
						left += r.left + el.clientLeft;
					}

					//calculate full y offset since we're breaking out of the loop
					top += r.top + (docBody.scrollTop  || docEl.scrollTop  || 0);

					break;
				}

				el = el.offsetParent;

			} while (el);

			el = element;

			do {
				if (el === docBody) { break; }

				top  -= el.scrollTop  || 0;
				left -= el.scrollLeft || 0;

				el = el.parentNode;
			} while (el);

			return new L.Point(left, top);
		},

		documentIsLtr: function () {
			if (!L.DomUtil._docIsLtrCached) {
				L.DomUtil._docIsLtrCached = true;
				L.DomUtil._docIsLtr = L.DomUtil.getStyle(document.body, 'direction') === 'ltr';
			}
			return L.DomUtil._docIsLtr;
		},

		create: function (tagName, className, container) {

			var el = document.createElement(tagName);
			el.className = className;

			if (container) {
				container.appendChild(el);
			}

			return el;
		},

		hasClass: function (el, name) {
			if (el.classList !== undefined) {
				return el.classList.contains(name);
			}
			var className = L.DomUtil._getClass(el);
			return className.length > 0 && new RegExp('(^|\\s)' + name + '(\\s|$)').test(className);
		},

		addClass: function (el, name) {
			if (el.classList !== undefined) {
				var classes = L.Util.splitWords(name);
				for (var i = 0, len = classes.length; i < len; i++) {
					el.classList.add(classes[i]);
				}
			} else if (!L.DomUtil.hasClass(el, name)) {
				var className = L.DomUtil._getClass(el);
				L.DomUtil._setClass(el, (className ? className + ' ' : '') + name);
			}
		},

		removeClass: function (el, name) {
			if (el.classList !== undefined) {
				el.classList.remove(name);
			} else {
				L.DomUtil._setClass(el, L.Util.trim((' ' + L.DomUtil._getClass(el) + ' ').replace(' ' + name + ' ', ' ')));
			}
		},

		_setClass: function (el, name) {
			if (el.className.baseVal === undefined) {
				el.className = name;
			} else {
				// in case of SVG element
				el.className.baseVal = name;
			}
		},

		_getClass: function (el) {
			return el.className.baseVal === undefined ? el.className : el.className.baseVal;
		},

		setOpacity: function (el, value) {

			if ('opacity' in el.style) {
				el.style.opacity = value;

			} else if ('filter' in el.style) {

				var filter = false,
				    filterName = 'DXImageTransform.Microsoft.Alpha';

				// filters collection throws an error if we try to retrieve a filter that doesn't exist
				try {
					filter = el.filters.item(filterName);
				} catch (e) {
					// don't set opacity to 1 if we haven't already set an opacity,
					// it isn't needed and breaks transparent pngs.
					if (value === 1) { return; }
				}

				value = Math.round(value * 100);

				if (filter) {
					filter.Enabled = (value !== 100);
					filter.Opacity = value;
				} else {
					el.style.filter += ' progid:' + filterName + '(opacity=' + value + ')';
				}
			}
		},

		testProp: function (props) {

			var style = document.documentElement.style;

			for (var i = 0; i < props.length; i++) {
				if (props[i] in style) {
					return props[i];
				}
			}
			return false;
		},

		getTranslateString: function (point) {
			// on WebKit browsers (Chrome/Safari/iOS Safari/Android) using translate3d instead of translate
			// makes animation smoother as it ensures HW accel is used. Firefox 13 doesn't care
			// (same speed either way), Opera 12 doesn't support translate3d

			var is3d = L.Browser.webkit3d,
			    open = 'translate' + (is3d ? '3d' : '') + '(',
			    close = (is3d ? ',0' : '') + ')';

			return open + point.x + 'px,' + point.y + 'px' + close;
		},

		getScaleString: function (scale, origin) {

			var preTranslateStr = L.DomUtil.getTranslateString(origin.add(origin.multiplyBy(-1 * scale))),
			    scaleStr = ' scale(' + scale + ') ';

			return preTranslateStr + scaleStr;
		},

		setPosition: function (el, point, disable3D) { // (HTMLElement, Point[, Boolean])

			// jshint camelcase: false
			el._leaflet_pos = point;

			if (!disable3D && L.Browser.any3d) {
				el.style[L.DomUtil.TRANSFORM] =  L.DomUtil.getTranslateString(point);
			} else {
				el.style.left = point.x + 'px';
				el.style.top = point.y + 'px';
			}
		},

		getPosition: function (el) {
			// this method is only used for elements previously positioned using setPosition,
			// so it's safe to cache the position for performance

			// jshint camelcase: false
			return el._leaflet_pos;
		}
	};


	// prefix style property names

	L.DomUtil.TRANSFORM = L.DomUtil.testProp(
	        ['transform', 'WebkitTransform', 'OTransform', 'MozTransform', 'msTransform']);

	// webkitTransition comes first because some browser versions that drop vendor prefix don't do
	// the same for the transitionend event, in particular the Android 4.1 stock browser

	L.DomUtil.TRANSITION = L.DomUtil.testProp(
	        ['webkitTransition', 'transition', 'OTransition', 'MozTransition', 'msTransition']);

	L.DomUtil.TRANSITION_END =
	        L.DomUtil.TRANSITION === 'webkitTransition' || L.DomUtil.TRANSITION === 'OTransition' ?
	        L.DomUtil.TRANSITION + 'End' : 'transitionend';

	(function () {
	    if ('onselectstart' in document) {
	        L.extend(L.DomUtil, {
	            disableTextSelection: function () {
	                L.DomEvent.on(window, 'selectstart', L.DomEvent.preventDefault);
	            },

	            enableTextSelection: function () {
	                L.DomEvent.off(window, 'selectstart', L.DomEvent.preventDefault);
	            }
	        });
	    } else {
	        var userSelectProperty = L.DomUtil.testProp(
	            ['userSelect', 'WebkitUserSelect', 'OUserSelect', 'MozUserSelect', 'msUserSelect']);

	        L.extend(L.DomUtil, {
	            disableTextSelection: function () {
	                if (userSelectProperty) {
	                    var style = document.documentElement.style;
	                    this._userSelect = style[userSelectProperty];
	                    style[userSelectProperty] = 'none';
	                }
	            },

	            enableTextSelection: function () {
	                if (userSelectProperty) {
	                    document.documentElement.style[userSelectProperty] = this._userSelect;
	                    delete this._userSelect;
	                }
	            }
	        });
	    }

		L.extend(L.DomUtil, {
			disableImageDrag: function () {
				L.DomEvent.on(window, 'dragstart', L.DomEvent.preventDefault);
			},

			enableImageDrag: function () {
				L.DomEvent.off(window, 'dragstart', L.DomEvent.preventDefault);
			}
		});
	})();


	/*
	 * L.LatLng represents a geographical point with latitude and longitude coordinates.
	 */

	L.LatLng = function (lat, lng, alt) { // (Number, Number, Number)
		lat = parseFloat(lat);
		lng = parseFloat(lng);

		if (isNaN(lat) || isNaN(lng)) {
			throw new Error('Invalid LatLng object: (' + lat + ', ' + lng + ')');
		}

		this.lat = lat;
		this.lng = lng;

		if (alt !== undefined) {
			this.alt = parseFloat(alt);
		}
	};

	L.extend(L.LatLng, {
		DEG_TO_RAD: Math.PI / 180,
		RAD_TO_DEG: 180 / Math.PI,
		MAX_MARGIN: 1.0E-9 // max margin of error for the "equals" check
	});

	L.LatLng.prototype = {
		equals: function (obj) { // (LatLng) -> Boolean
			if (!obj) { return false; }

			obj = L.latLng(obj);

			var margin = Math.max(
			        Math.abs(this.lat - obj.lat),
			        Math.abs(this.lng - obj.lng));

			return margin <= L.LatLng.MAX_MARGIN;
		},

		toString: function (precision) { // (Number) -> String
			return 'LatLng(' +
			        L.Util.formatNum(this.lat, precision) + ', ' +
			        L.Util.formatNum(this.lng, precision) + ')';
		},

		// Haversine distance formula, see http://en.wikipedia.org/wiki/Haversine_formula
		// TODO move to projection code, LatLng shouldn't know about Earth
		distanceTo: function (other) { // (LatLng) -> Number
			other = L.latLng(other);

			var R = 6378137, // earth radius in meters
			    d2r = L.LatLng.DEG_TO_RAD,
			    dLat = (other.lat - this.lat) * d2r,
			    dLon = (other.lng - this.lng) * d2r,
			    lat1 = this.lat * d2r,
			    lat2 = other.lat * d2r,
			    sin1 = Math.sin(dLat / 2),
			    sin2 = Math.sin(dLon / 2);

			var a = sin1 * sin1 + sin2 * sin2 * Math.cos(lat1) * Math.cos(lat2);

			return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
		},

		wrap: function (a, b) { // (Number, Number) -> LatLng
			var lng = this.lng;

			a = a || -180;
			b = b ||  180;

			lng = (lng + b) % (b - a) + (lng < a || lng === b ? b : a);

			return new L.LatLng(this.lat, lng);
		}
	};

	L.latLng = function (a, b) { // (LatLng) or ([Number, Number]) or (Number, Number)
		if (a instanceof L.LatLng) {
			return a;
		}
		if (L.Util.isArray(a)) {
			if (typeof a[0] === 'number' || typeof a[0] === 'string') {
				return new L.LatLng(a[0], a[1], a[2]);
			} else {
				return null;
			}
		}
		if (a === undefined || a === null) {
			return a;
		}
		if (typeof a === 'object' && 'lat' in a) {
			return new L.LatLng(a.lat, 'lng' in a ? a.lng : a.lon);
		}
		if (b === undefined) {
			return null;
		}
		return new L.LatLng(a, b);
	};



	/*
	 * L.LatLngBounds represents a rectangular area on the map in geographical coordinates.
	 */

	L.LatLngBounds = function (southWest, northEast) { // (LatLng, LatLng) or (LatLng[])
		if (!southWest) { return; }

		var latlngs = northEast ? [southWest, northEast] : southWest;

		for (var i = 0, len = latlngs.length; i < len; i++) {
			this.extend(latlngs[i]);
		}
	};

	L.LatLngBounds.prototype = {
		// extend the bounds to contain the given point or bounds
		extend: function (obj) { // (LatLng) or (LatLngBounds)
			if (!obj) { return this; }

			var latLng = L.latLng(obj);
			if (latLng !== null) {
				obj = latLng;
			} else {
				obj = L.latLngBounds(obj);
			}

			if (obj instanceof L.LatLng) {
				if (!this._southWest && !this._northEast) {
					this._southWest = new L.LatLng(obj.lat, obj.lng);
					this._northEast = new L.LatLng(obj.lat, obj.lng);
				} else {
					this._southWest.lat = Math.min(obj.lat, this._southWest.lat);
					this._southWest.lng = Math.min(obj.lng, this._southWest.lng);

					this._northEast.lat = Math.max(obj.lat, this._northEast.lat);
					this._northEast.lng = Math.max(obj.lng, this._northEast.lng);
				}
			} else if (obj instanceof L.LatLngBounds) {
				this.extend(obj._southWest);
				this.extend(obj._northEast);
			}
			return this;
		},

		// extend the bounds by a percentage
		pad: function (bufferRatio) { // (Number) -> LatLngBounds
			var sw = this._southWest,
			    ne = this._northEast,
			    heightBuffer = Math.abs(sw.lat - ne.lat) * bufferRatio,
			    widthBuffer = Math.abs(sw.lng - ne.lng) * bufferRatio;

			return new L.LatLngBounds(
			        new L.LatLng(sw.lat - heightBuffer, sw.lng - widthBuffer),
			        new L.LatLng(ne.lat + heightBuffer, ne.lng + widthBuffer));
		},

		getCenter: function () { // -> LatLng
			return new L.LatLng(
			        (this._southWest.lat + this._northEast.lat) / 2,
			        (this._southWest.lng + this._northEast.lng) / 2);
		},

		getSouthWest: function () {
			return this._southWest;
		},

		getNorthEast: function () {
			return this._northEast;
		},

		getNorthWest: function () {
			return new L.LatLng(this.getNorth(), this.getWest());
		},

		getSouthEast: function () {
			return new L.LatLng(this.getSouth(), this.getEast());
		},

		getWest: function () {
			return this._southWest.lng;
		},

		getSouth: function () {
			return this._southWest.lat;
		},

		getEast: function () {
			return this._northEast.lng;
		},

		getNorth: function () {
			return this._northEast.lat;
		},

		contains: function (obj) { // (LatLngBounds) or (LatLng) -> Boolean
			if (typeof obj[0] === 'number' || obj instanceof L.LatLng) {
				obj = L.latLng(obj);
			} else {
				obj = L.latLngBounds(obj);
			}

			var sw = this._southWest,
			    ne = this._northEast,
			    sw2, ne2;

			if (obj instanceof L.LatLngBounds) {
				sw2 = obj.getSouthWest();
				ne2 = obj.getNorthEast();
			} else {
				sw2 = ne2 = obj;
			}

			return (sw2.lat >= sw.lat) && (ne2.lat <= ne.lat) &&
			       (sw2.lng >= sw.lng) && (ne2.lng <= ne.lng);
		},

		intersects: function (bounds) { // (LatLngBounds)
			bounds = L.latLngBounds(bounds);

			var sw = this._southWest,
			    ne = this._northEast,
			    sw2 = bounds.getSouthWest(),
			    ne2 = bounds.getNorthEast(),

			    latIntersects = (ne2.lat >= sw.lat) && (sw2.lat <= ne.lat),
			    lngIntersects = (ne2.lng >= sw.lng) && (sw2.lng <= ne.lng);

			return latIntersects && lngIntersects;
		},

		toBBoxString: function () {
			return [this.getWest(), this.getSouth(), this.getEast(), this.getNorth()].join(',');
		},

		equals: function (bounds) { // (LatLngBounds)
			if (!bounds) { return false; }

			bounds = L.latLngBounds(bounds);

			return this._southWest.equals(bounds.getSouthWest()) &&
			       this._northEast.equals(bounds.getNorthEast());
		},

		isValid: function () {
			return !!(this._southWest && this._northEast);
		}
	};

	//TODO International date line?

	L.latLngBounds = function (a, b) { // (LatLngBounds) or (LatLng, LatLng)
		if (!a || a instanceof L.LatLngBounds) {
			return a;
		}
		return new L.LatLngBounds(a, b);
	};


	/*
	 * L.Projection contains various geographical projections used by CRS classes.
	 */

	L.Projection = {};


	/*
	 * Spherical Mercator is the most popular map projection, used by EPSG:3857 CRS used by default.
	 */

	L.Projection.SphericalMercator = {
		MAX_LATITUDE: 85.0511287798,

		project: function (latlng) { // (LatLng) -> Point
			var d = L.LatLng.DEG_TO_RAD,
			    max = this.MAX_LATITUDE,
			    lat = Math.max(Math.min(max, latlng.lat), -max),
			    x = latlng.lng * d,
			    y = lat * d;

			y = Math.log(Math.tan((Math.PI / 4) + (y / 2)));

			return new L.Point(x, y);
		},

		unproject: function (point) { // (Point, Boolean) -> LatLng
			var d = L.LatLng.RAD_TO_DEG,
			    lng = point.x * d,
			    lat = (2 * Math.atan(Math.exp(point.y)) - (Math.PI / 2)) * d;

			return new L.LatLng(lat, lng);
		}
	};


	/*
	 * Simple equirectangular (Plate Carree) projection, used by CRS like EPSG:4326 and Simple.
	 */

	L.Projection.LonLat = {
		project: function (latlng) {
			return new L.Point(latlng.lng, latlng.lat);
		},

		unproject: function (point) {
			return new L.LatLng(point.y, point.x);
		}
	};


	/*
	 * L.CRS is a base object for all defined CRS (Coordinate Reference Systems) in Leaflet.
	 */

	L.CRS = {
		latLngToPoint: function (latlng, zoom) { // (LatLng, Number) -> Point
			var projectedPoint = this.projection.project(latlng),
			    scale = this.scale(zoom);

			return this.transformation._transform(projectedPoint, scale);
		},

		pointToLatLng: function (point, zoom) { // (Point, Number[, Boolean]) -> LatLng
			var scale = this.scale(zoom),
			    untransformedPoint = this.transformation.untransform(point, scale);

			return this.projection.unproject(untransformedPoint);
		},

		project: function (latlng) {
			return this.projection.project(latlng);
		},

		scale: function (zoom) {
			return 256 * Math.pow(2, zoom);
		},

		getSize: function (zoom) {
			var s = this.scale(zoom);
			return L.point(s, s);
		}
	};


	/*
	 * A simple CRS that can be used for flat non-Earth maps like panoramas or game maps.
	 */

	L.CRS.Simple = L.extend({}, L.CRS, {
		projection: L.Projection.LonLat,
		transformation: new L.Transformation(1, 0, -1, 0),

		scale: function (zoom) {
			return Math.pow(2, zoom);
		}
	});


	/*
	 * L.CRS.EPSG3857 (Spherical Mercator) is the most common CRS for web mapping
	 * and is used by Leaflet by default.
	 */

	L.CRS.EPSG3857 = L.extend({}, L.CRS, {
		code: 'EPSG:3857',

		projection: L.Projection.SphericalMercator,
		transformation: new L.Transformation(0.5 / Math.PI, 0.5, -0.5 / Math.PI, 0.5),

		project: function (latlng) { // (LatLng) -> Point
			var projectedPoint = this.projection.project(latlng),
			    earthRadius = 6378137;
			return projectedPoint.multiplyBy(earthRadius);
		}
	});

	L.CRS.EPSG900913 = L.extend({}, L.CRS.EPSG3857, {
		code: 'EPSG:900913'
	});


	/*
	 * L.CRS.EPSG4326 is a CRS popular among advanced GIS specialists.
	 */

	L.CRS.EPSG4326 = L.extend({}, L.CRS, {
		code: 'EPSG:4326',

		projection: L.Projection.LonLat,
		transformation: new L.Transformation(1 / 360, 0.5, -1 / 360, 0.5)
	});


	/*
	 * L.Map is the central class of the API - it is used to create a map.
	 */

	L.Map = L.Class.extend({

		includes: L.Mixin.Events,

		options: {
			crs: L.CRS.EPSG3857,

			/*
			center: LatLng,
			zoom: Number,
			layers: Array,
			*/

			fadeAnimation: L.DomUtil.TRANSITION && !L.Browser.android23,
			trackResize: true,
			markerZoomAnimation: L.DomUtil.TRANSITION && L.Browser.any3d
		},

		initialize: function (id, options) { // (HTMLElement or String, Object)
			options = L.setOptions(this, options);


			this._initContainer(id);
			this._initLayout();

			// hack for https://github.com/Leaflet/Leaflet/issues/1980
			this._onResize = L.bind(this._onResize, this);

			this._initEvents();

			if (options.maxBounds) {
				this.setMaxBounds(options.maxBounds);
			}

			if (options.center && options.zoom !== undefined) {
				this.setView(L.latLng(options.center), options.zoom, {reset: true});
			}

			this._handlers = [];

			this._layers = {};
			this._zoomBoundLayers = {};
			this._tileLayersNum = 0;

			this.callInitHooks();

			this._addLayers(options.layers);
		},


		// public methods that modify map state

		// replaced by animation-powered implementation in Map.PanAnimation.js
		setView: function (center, zoom) {
			zoom = zoom === undefined ? this.getZoom() : zoom;
			this._resetView(L.latLng(center), this._limitZoom(zoom));
			return this;
		},

		setZoom: function (zoom, options) {
			if (!this._loaded) {
				this._zoom = this._limitZoom(zoom);
				return this;
			}
			return this.setView(this.getCenter(), zoom, {zoom: options});
		},

		zoomIn: function (delta, options) {
			return this.setZoom(this._zoom + (delta || 1), options);
		},

		zoomOut: function (delta, options) {
			return this.setZoom(this._zoom - (delta || 1), options);
		},

		setZoomAround: function (latlng, zoom, options) {
			var scale = this.getZoomScale(zoom),
			    viewHalf = this.getSize().divideBy(2),
			    containerPoint = latlng instanceof L.Point ? latlng : this.latLngToContainerPoint(latlng),

			    centerOffset = containerPoint.subtract(viewHalf).multiplyBy(1 - 1 / scale),
			    newCenter = this.containerPointToLatLng(viewHalf.add(centerOffset));

			return this.setView(newCenter, zoom, {zoom: options});
		},

		fitBounds: function (bounds, options) {

			options = options || {};
			bounds = bounds.getBounds ? bounds.getBounds() : L.latLngBounds(bounds);

			var paddingTL = L.point(options.paddingTopLeft || options.padding || [0, 0]),
			    paddingBR = L.point(options.paddingBottomRight || options.padding || [0, 0]),

			    zoom = this.getBoundsZoom(bounds, false, paddingTL.add(paddingBR));

			zoom = (options.maxZoom) ? Math.min(options.maxZoom, zoom) : zoom;

			var paddingOffset = paddingBR.subtract(paddingTL).divideBy(2),

			    swPoint = this.project(bounds.getSouthWest(), zoom),
			    nePoint = this.project(bounds.getNorthEast(), zoom),
			    center = this.unproject(swPoint.add(nePoint).divideBy(2).add(paddingOffset), zoom);

			return this.setView(center, zoom, options);
		},

		fitWorld: function (options) {
			return this.fitBounds([[-90, -180], [90, 180]], options);
		},

		panTo: function (center, options) { // (LatLng)
			return this.setView(center, this._zoom, {pan: options});
		},

		panBy: function (offset) { // (Point)
			// replaced with animated panBy in Map.PanAnimation.js
			this.fire('movestart');

			this._rawPanBy(L.point(offset));

			this.fire('move');
			return this.fire('moveend');
		},

		setMaxBounds: function (bounds) {
			bounds = L.latLngBounds(bounds);

			this.options.maxBounds = bounds;

			if (!bounds) {
				return this.off('moveend', this._panInsideMaxBounds, this);
			}

			if (this._loaded) {
				this._panInsideMaxBounds();
			}

			return this.on('moveend', this._panInsideMaxBounds, this);
		},

		panInsideBounds: function (bounds, options) {
			var center = this.getCenter(),
				newCenter = this._limitCenter(center, this._zoom, bounds);

			if (center.equals(newCenter)) { return this; }

			return this.panTo(newCenter, options);
		},

		addLayer: function (layer) {
			// TODO method is too big, refactor

			var id = L.stamp(layer);

			if (this._layers[id]) { return this; }

			this._layers[id] = layer;

			// TODO getMaxZoom, getMinZoom in ILayer (instead of options)
			if (layer.options && (!isNaN(layer.options.maxZoom) || !isNaN(layer.options.minZoom))) {
				this._zoomBoundLayers[id] = layer;
				this._updateZoomLevels();
			}

			// TODO looks ugly, refactor!!!
			if (this.options.zoomAnimation && L.TileLayer && (layer instanceof L.TileLayer)) {
				this._tileLayersNum++;
				this._tileLayersToLoad++;
				layer.on('load', this._onTileLayerLoad, this);
			}

			if (this._loaded) {
				this._layerAdd(layer);
			}

			return this;
		},

		removeLayer: function (layer) {
			var id = L.stamp(layer);

			if (!this._layers[id]) { return this; }

			if (this._loaded) {
				layer.onRemove(this);
			}

			delete this._layers[id];

			if (this._loaded) {
				this.fire('layerremove', {layer: layer});
			}

			if (this._zoomBoundLayers[id]) {
				delete this._zoomBoundLayers[id];
				this._updateZoomLevels();
			}

			// TODO looks ugly, refactor
			if (this.options.zoomAnimation && L.TileLayer && (layer instanceof L.TileLayer)) {
				this._tileLayersNum--;
				this._tileLayersToLoad--;
				layer.off('load', this._onTileLayerLoad, this);
			}

			return this;
		},

		hasLayer: function (layer) {
			if (!layer) { return false; }

			return (L.stamp(layer) in this._layers);
		},

		eachLayer: function (method, context) {
			for (var i in this._layers) {
				method.call(context, this._layers[i]);
			}
			return this;
		},

		invalidateSize: function (options) {
			if (!this._loaded) { return this; }

			options = L.extend({
				animate: false,
				pan: true
			}, options === true ? {animate: true} : options);

			var oldSize = this.getSize();
			this._sizeChanged = true;
			this._initialCenter = null;

			var newSize = this.getSize(),
			    oldCenter = oldSize.divideBy(2).round(),
			    newCenter = newSize.divideBy(2).round(),
			    offset = oldCenter.subtract(newCenter);

			if (!offset.x && !offset.y) { return this; }

			if (options.animate && options.pan) {
				this.panBy(offset);

			} else {
				if (options.pan) {
					this._rawPanBy(offset);
				}

				this.fire('move');

				if (options.debounceMoveend) {
					clearTimeout(this._sizeTimer);
					this._sizeTimer = setTimeout(L.bind(this.fire, this, 'moveend'), 200);
				} else {
					this.fire('moveend');
				}
			}

			return this.fire('resize', {
				oldSize: oldSize,
				newSize: newSize
			});
		},

		// TODO handler.addTo
		addHandler: function (name, HandlerClass) {
			if (!HandlerClass) { return this; }

			var handler = this[name] = new HandlerClass(this);

			this._handlers.push(handler);

			if (this.options[name]) {
				handler.enable();
			}

			return this;
		},

		remove: function () {
			if (this._loaded) {
				this.fire('unload');
			}

			this._initEvents('off');

			try {
				// throws error in IE6-8
				delete this._container._leaflet;
			} catch (e) {
				this._container._leaflet = undefined;
			}

			this._clearPanes();
			if (this._clearControlPos) {
				this._clearControlPos();
			}

			this._clearHandlers();

			return this;
		},


		// public methods for getting map state

		getCenter: function () { // (Boolean) -> LatLng
			this._checkIfLoaded();

			if (this._initialCenter && !this._moved()) {
				return this._initialCenter;
			}
			return this.layerPointToLatLng(this._getCenterLayerPoint());
		},

		getZoom: function () {
			return this._zoom;
		},

		getBounds: function () {
			var bounds = this.getPixelBounds(),
			    sw = this.unproject(bounds.getBottomLeft()),
			    ne = this.unproject(bounds.getTopRight());

			return new L.LatLngBounds(sw, ne);
		},

		getMinZoom: function () {
			return this.options.minZoom === undefined ?
				(this._layersMinZoom === undefined ? 0 : this._layersMinZoom) :
				this.options.minZoom;
		},

		getMaxZoom: function () {
			return this.options.maxZoom === undefined ?
				(this._layersMaxZoom === undefined ? Infinity : this._layersMaxZoom) :
				this.options.maxZoom;
		},

		getBoundsZoom: function (bounds, inside, padding) { // (LatLngBounds[, Boolean, Point]) -> Number
			bounds = L.latLngBounds(bounds);

			var zoom = this.getMinZoom() - (inside ? 1 : 0),
			    maxZoom = this.getMaxZoom(),
			    size = this.getSize(),

			    nw = bounds.getNorthWest(),
			    se = bounds.getSouthEast(),

			    zoomNotFound = true,
			    boundsSize;

			padding = L.point(padding || [0, 0]);

			do {
				zoom++;
				boundsSize = this.project(se, zoom).subtract(this.project(nw, zoom)).add(padding);
				zoomNotFound = !inside ? size.contains(boundsSize) : boundsSize.x < size.x || boundsSize.y < size.y;

			} while (zoomNotFound && zoom <= maxZoom);

			if (zoomNotFound && inside) {
				return null;
			}

			return inside ? zoom : zoom - 1;
		},

		getSize: function () {
			if (!this._size || this._sizeChanged) {
				this._size = new L.Point(
					this._container.clientWidth,
					this._container.clientHeight);

				this._sizeChanged = false;
			}
			return this._size.clone();
		},

		getPixelBounds: function () {
			var topLeftPoint = this._getTopLeftPoint();
			return new L.Bounds(topLeftPoint, topLeftPoint.add(this.getSize()));
		},

		getPixelOrigin: function () {
			this._checkIfLoaded();
			return this._initialTopLeftPoint;
		},

		getPanes: function () {
			return this._panes;
		},

		getContainer: function () {
			return this._container;
		},


		// TODO replace with universal implementation after refactoring projections

		getZoomScale: function (toZoom) {
			var crs = this.options.crs;
			return crs.scale(toZoom) / crs.scale(this._zoom);
		},

		getScaleZoom: function (scale) {
			return this._zoom + (Math.log(scale) / Math.LN2);
		},


		// conversion methods

		project: function (latlng, zoom) { // (LatLng[, Number]) -> Point
			zoom = zoom === undefined ? this._zoom : zoom;
			return this.options.crs.latLngToPoint(L.latLng(latlng), zoom);
		},

		unproject: function (point, zoom) { // (Point[, Number]) -> LatLng
			zoom = zoom === undefined ? this._zoom : zoom;
			return this.options.crs.pointToLatLng(L.point(point), zoom);
		},

		layerPointToLatLng: function (point) { // (Point)
			var projectedPoint = L.point(point).add(this.getPixelOrigin());
			return this.unproject(projectedPoint);
		},

		latLngToLayerPoint: function (latlng) { // (LatLng)
			var projectedPoint = this.project(L.latLng(latlng))._round();
			return projectedPoint._subtract(this.getPixelOrigin());
		},

		containerPointToLayerPoint: function (point) { // (Point)
			return L.point(point).subtract(this._getMapPanePos());
		},

		layerPointToContainerPoint: function (point) { // (Point)
			return L.point(point).add(this._getMapPanePos());
		},

		containerPointToLatLng: function (point) {
			var layerPoint = this.containerPointToLayerPoint(L.point(point));
			return this.layerPointToLatLng(layerPoint);
		},

		latLngToContainerPoint: function (latlng) {
			return this.layerPointToContainerPoint(this.latLngToLayerPoint(L.latLng(latlng)));
		},

		mouseEventToContainerPoint: function (e) { // (MouseEvent)
			return L.DomEvent.getMousePosition(e, this._container);
		},

		mouseEventToLayerPoint: function (e) { // (MouseEvent)
			return this.containerPointToLayerPoint(this.mouseEventToContainerPoint(e));
		},

		mouseEventToLatLng: function (e) { // (MouseEvent)
			return this.layerPointToLatLng(this.mouseEventToLayerPoint(e));
		},


		// map initialization methods

		_initContainer: function (id) {
			var container = this._container = L.DomUtil.get(id);

			if (!container) {
				throw new Error('Map container not found.');
			} else if (container._leaflet) {
				throw new Error('Map container is already initialized.');
			}

			container._leaflet = true;
		},

		_initLayout: function () {
			var container = this._container;

			L.DomUtil.addClass(container, 'leaflet-container' +
				(L.Browser.touch ? ' leaflet-touch' : '') +
				(L.Browser.retina ? ' leaflet-retina' : '') +
				(L.Browser.ielt9 ? ' leaflet-oldie' : '') +
				(this.options.fadeAnimation ? ' leaflet-fade-anim' : ''));

			var position = L.DomUtil.getStyle(container, 'position');

			if (position !== 'absolute' && position !== 'relative' && position !== 'fixed') {
				container.style.position = 'relative';
			}

			this._initPanes();

			if (this._initControlPos) {
				this._initControlPos();
			}
		},

		_initPanes: function () {
			var panes = this._panes = {};

			this._mapPane = panes.mapPane = this._createPane('leaflet-map-pane', this._container);

			this._tilePane = panes.tilePane = this._createPane('leaflet-tile-pane', this._mapPane);
			panes.objectsPane = this._createPane('leaflet-objects-pane', this._mapPane);
			panes.shadowPane = this._createPane('leaflet-shadow-pane');
			panes.overlayPane = this._createPane('leaflet-overlay-pane');
			panes.markerPane = this._createPane('leaflet-marker-pane');
			panes.popupPane = this._createPane('leaflet-popup-pane');

			var zoomHide = ' leaflet-zoom-hide';

			if (!this.options.markerZoomAnimation) {
				L.DomUtil.addClass(panes.markerPane, zoomHide);
				L.DomUtil.addClass(panes.shadowPane, zoomHide);
				L.DomUtil.addClass(panes.popupPane, zoomHide);
			}
		},

		_createPane: function (className, container) {
			return L.DomUtil.create('div', className, container || this._panes.objectsPane);
		},

		_clearPanes: function () {
			this._container.removeChild(this._mapPane);
		},

		_addLayers: function (layers) {
			layers = layers ? (L.Util.isArray(layers) ? layers : [layers]) : [];

			for (var i = 0, len = layers.length; i < len; i++) {
				this.addLayer(layers[i]);
			}
		},


		// private methods that modify map state

		_resetView: function (center, zoom, preserveMapOffset, afterZoomAnim) {

			var zoomChanged = (this._zoom !== zoom);

			if (!afterZoomAnim) {
				this.fire('movestart');

				if (zoomChanged) {
					this.fire('zoomstart');
				}
			}

			this._zoom = zoom;
			this._initialCenter = center;

			this._initialTopLeftPoint = this._getNewTopLeftPoint(center);

			if (!preserveMapOffset) {
				L.DomUtil.setPosition(this._mapPane, new L.Point(0, 0));
			} else {
				this._initialTopLeftPoint._add(this._getMapPanePos());
			}

			this._tileLayersToLoad = this._tileLayersNum;

			var loading = !this._loaded;
			this._loaded = true;

			this.fire('viewreset', {hard: !preserveMapOffset});

			if (loading) {
				this.fire('load');
				this.eachLayer(this._layerAdd, this);
			}

			this.fire('move');

			if (zoomChanged || afterZoomAnim) {
				this.fire('zoomend');
			}

			this.fire('moveend', {hard: !preserveMapOffset});
		},

		_rawPanBy: function (offset) {
			L.DomUtil.setPosition(this._mapPane, this._getMapPanePos().subtract(offset));
		},

		_getZoomSpan: function () {
			return this.getMaxZoom() - this.getMinZoom();
		},

		_updateZoomLevels: function () {
			var i,
				minZoom = Infinity,
				maxZoom = -Infinity,
				oldZoomSpan = this._getZoomSpan();

			for (i in this._zoomBoundLayers) {
				var layer = this._zoomBoundLayers[i];
				if (!isNaN(layer.options.minZoom)) {
					minZoom = Math.min(minZoom, layer.options.minZoom);
				}
				if (!isNaN(layer.options.maxZoom)) {
					maxZoom = Math.max(maxZoom, layer.options.maxZoom);
				}
			}

			if (i === undefined) { // we have no tilelayers
				this._layersMaxZoom = this._layersMinZoom = undefined;
			} else {
				this._layersMaxZoom = maxZoom;
				this._layersMinZoom = minZoom;
			}

			if (oldZoomSpan !== this._getZoomSpan()) {
				this.fire('zoomlevelschange');
			}
		},

		_panInsideMaxBounds: function () {
			this.panInsideBounds(this.options.maxBounds);
		},

		_checkIfLoaded: function () {
			if (!this._loaded) {
				throw new Error('Set map center and zoom first.');
			}
		},

		// map events

		_initEvents: function (onOff) {
			if (!L.DomEvent) { return; }

			onOff = onOff || 'on';

			L.DomEvent[onOff](this._container, 'click', this._onMouseClick, this);

			var events = ['dblclick', 'mousedown', 'mouseup', 'mouseenter',
			              'mouseleave', 'mousemove', 'contextmenu'],
			    i, len;

			for (i = 0, len = events.length; i < len; i++) {
				L.DomEvent[onOff](this._container, events[i], this._fireMouseEvent, this);
			}

			if (this.options.trackResize) {
				L.DomEvent[onOff](window, 'resize', this._onResize, this);
			}
		},

		_onResize: function () {
			L.Util.cancelAnimFrame(this._resizeRequest);
			this._resizeRequest = L.Util.requestAnimFrame(
			        function () { this.invalidateSize({debounceMoveend: true}); }, this, false, this._container);
		},

		_onMouseClick: function (e) {
			if (!this._loaded || (!e._simulated &&
			        ((this.dragging && this.dragging.moved()) ||
			         (this.boxZoom  && this.boxZoom.moved()))) ||
			            L.DomEvent._skipped(e)) { return; }

			this.fire('preclick');
			this._fireMouseEvent(e);
		},

		_fireMouseEvent: function (e) {
			if (!this._loaded || L.DomEvent._skipped(e)) { return; }

			var type = e.type;

			type = (type === 'mouseenter' ? 'mouseover' : (type === 'mouseleave' ? 'mouseout' : type));

			if (!this.hasEventListeners(type)) { return; }

			if (type === 'contextmenu') {
				L.DomEvent.preventDefault(e);
			}

			var containerPoint = this.mouseEventToContainerPoint(e),
			    layerPoint = this.containerPointToLayerPoint(containerPoint),
			    latlng = this.layerPointToLatLng(layerPoint);

			this.fire(type, {
				latlng: latlng,
				layerPoint: layerPoint,
				containerPoint: containerPoint,
				originalEvent: e
			});
		},

		_onTileLayerLoad: function () {
			this._tileLayersToLoad--;
			if (this._tileLayersNum && !this._tileLayersToLoad) {
				this.fire('tilelayersload');
			}
		},

		_clearHandlers: function () {
			for (var i = 0, len = this._handlers.length; i < len; i++) {
				this._handlers[i].disable();
			}
		},

		whenReady: function (callback, context) {
			if (this._loaded) {
				callback.call(context || this, this);
			} else {
				this.on('load', callback, context);
			}
			return this;
		},

		_layerAdd: function (layer) {
			layer.onAdd(this);
			this.fire('layeradd', {layer: layer});
		},


		// private methods for getting map state

		_getMapPanePos: function () {
			return L.DomUtil.getPosition(this._mapPane);
		},

		_moved: function () {
			var pos = this._getMapPanePos();
			return pos && !pos.equals([0, 0]);
		},

		_getTopLeftPoint: function () {
			return this.getPixelOrigin().subtract(this._getMapPanePos());
		},

		_getNewTopLeftPoint: function (center, zoom) {
			var viewHalf = this.getSize()._divideBy(2);
			// TODO round on display, not calculation to increase precision?
			return this.project(center, zoom)._subtract(viewHalf)._round();
		},

		_latLngToNewLayerPoint: function (latlng, newZoom, newCenter) {
			var topLeft = this._getNewTopLeftPoint(newCenter, newZoom).add(this._getMapPanePos());
			return this.project(latlng, newZoom)._subtract(topLeft);
		},

		// layer point of the current center
		_getCenterLayerPoint: function () {
			return this.containerPointToLayerPoint(this.getSize()._divideBy(2));
		},

		// offset of the specified place to the current center in pixels
		_getCenterOffset: function (latlng) {
			return this.latLngToLayerPoint(latlng).subtract(this._getCenterLayerPoint());
		},

		// adjust center for view to get inside bounds
		_limitCenter: function (center, zoom, bounds) {

			if (!bounds) { return center; }

			var centerPoint = this.project(center, zoom),
			    viewHalf = this.getSize().divideBy(2),
			    viewBounds = new L.Bounds(centerPoint.subtract(viewHalf), centerPoint.add(viewHalf)),
			    offset = this._getBoundsOffset(viewBounds, bounds, zoom);

			return this.unproject(centerPoint.add(offset), zoom);
		},

		// adjust offset for view to get inside bounds
		_limitOffset: function (offset, bounds) {
			if (!bounds) { return offset; }

			var viewBounds = this.getPixelBounds(),
			    newBounds = new L.Bounds(viewBounds.min.add(offset), viewBounds.max.add(offset));

			return offset.add(this._getBoundsOffset(newBounds, bounds));
		},

		// returns offset needed for pxBounds to get inside maxBounds at a specified zoom
		_getBoundsOffset: function (pxBounds, maxBounds, zoom) {
			var nwOffset = this.project(maxBounds.getNorthWest(), zoom).subtract(pxBounds.min),
			    seOffset = this.project(maxBounds.getSouthEast(), zoom).subtract(pxBounds.max),

			    dx = this._rebound(nwOffset.x, -seOffset.x),
			    dy = this._rebound(nwOffset.y, -seOffset.y);

			return new L.Point(dx, dy);
		},

		_rebound: function (left, right) {
			return left + right > 0 ?
				Math.round(left - right) / 2 :
				Math.max(0, Math.ceil(left)) - Math.max(0, Math.floor(right));
		},

		_limitZoom: function (zoom) {
			var min = this.getMinZoom(),
			    max = this.getMaxZoom();

			return Math.max(min, Math.min(max, zoom));
		}
	});

	L.map = function (id, options) {
		return new L.Map(id, options);
	};


	/*
	 * Mercator projection that takes into account that the Earth is not a perfect sphere.
	 * Less popular than spherical mercator; used by projections like EPSG:3395.
	 */

	L.Projection.Mercator = {
		MAX_LATITUDE: 85.0840591556,

		R_MINOR: 6356752.314245179,
		R_MAJOR: 6378137,

		project: function (latlng) { // (LatLng) -> Point
			var d = L.LatLng.DEG_TO_RAD,
			    max = this.MAX_LATITUDE,
			    lat = Math.max(Math.min(max, latlng.lat), -max),
			    r = this.R_MAJOR,
			    r2 = this.R_MINOR,
			    x = latlng.lng * d * r,
			    y = lat * d,
			    tmp = r2 / r,
			    eccent = Math.sqrt(1.0 - tmp * tmp),
			    con = eccent * Math.sin(y);

			con = Math.pow((1 - con) / (1 + con), eccent * 0.5);

			var ts = Math.tan(0.5 * ((Math.PI * 0.5) - y)) / con;
			y = -r * Math.log(ts);

			return new L.Point(x, y);
		},

		unproject: function (point) { // (Point, Boolean) -> LatLng
			var d = L.LatLng.RAD_TO_DEG,
			    r = this.R_MAJOR,
			    r2 = this.R_MINOR,
			    lng = point.x * d / r,
			    tmp = r2 / r,
			    eccent = Math.sqrt(1 - (tmp * tmp)),
			    ts = Math.exp(- point.y / r),
			    phi = (Math.PI / 2) - 2 * Math.atan(ts),
			    numIter = 15,
			    tol = 1e-7,
			    i = numIter,
			    dphi = 0.1,
			    con;

			while ((Math.abs(dphi) > tol) && (--i > 0)) {
				con = eccent * Math.sin(phi);
				dphi = (Math.PI / 2) - 2 * Math.atan(ts *
				            Math.pow((1.0 - con) / (1.0 + con), 0.5 * eccent)) - phi;
				phi += dphi;
			}

			return new L.LatLng(phi * d, lng);
		}
	};



	L.CRS.EPSG3395 = L.extend({}, L.CRS, {
		code: 'EPSG:3395',

		projection: L.Projection.Mercator,

		transformation: (function () {
			var m = L.Projection.Mercator,
			    r = m.R_MAJOR,
			    scale = 0.5 / (Math.PI * r);

			return new L.Transformation(scale, 0.5, -scale, 0.5);
		}())
	});


	/*
	 * L.TileLayer is used for standard xyz-numbered tile layers.
	 */

	L.TileLayer = L.Class.extend({
		includes: L.Mixin.Events,

		options: {
			minZoom: 0,
			maxZoom: 18,
			tileSize: 256,
			subdomains: 'abc',
			errorTileUrl: '',
			attribution: '',
			zoomOffset: 0,
			opacity: 1,
			/*
			maxNativeZoom: null,
			zIndex: null,
			tms: false,
			continuousWorld: false,
			noWrap: false,
			zoomReverse: false,
			detectRetina: false,
			reuseTiles: false,
			bounds: false,
			*/
			unloadInvisibleTiles: L.Browser.mobile,
			updateWhenIdle: L.Browser.mobile
		},

		initialize: function (url, options) {
			options = L.setOptions(this, options);

			// detecting retina displays, adjusting tileSize and zoom levels
			if (options.detectRetina && L.Browser.retina && options.maxZoom > 0) {

				options.tileSize = Math.floor(options.tileSize / 2);
				options.zoomOffset++;

				if (options.minZoom > 0) {
					options.minZoom--;
				}
				this.options.maxZoom--;
			}

			if (options.bounds) {
				options.bounds = L.latLngBounds(options.bounds);
			}

			this._url = url;

			var subdomains = this.options.subdomains;

			if (typeof subdomains === 'string') {
				this.options.subdomains = subdomains.split('');
			}
		},

		onAdd: function (map) {
			this._map = map;
			this._animated = map._zoomAnimated;

			// create a container div for tiles
			this._initContainer();

			// set up events
			map.on({
				'viewreset': this._reset,
				'moveend': this._update
			}, this);

			if (this._animated) {
				map.on({
					'zoomanim': this._animateZoom,
					'zoomend': this._endZoomAnim
				}, this);
			}

			if (!this.options.updateWhenIdle) {
				this._limitedUpdate = L.Util.limitExecByInterval(this._update, 150, this);
				map.on('move', this._limitedUpdate, this);
			}

			this._reset();
			this._update();
		},

		addTo: function (map) {
			map.addLayer(this);
			return this;
		},

		onRemove: function (map) {
			this._container.parentNode.removeChild(this._container);

			map.off({
				'viewreset': this._reset,
				'moveend': this._update
			}, this);

			if (this._animated) {
				map.off({
					'zoomanim': this._animateZoom,
					'zoomend': this._endZoomAnim
				}, this);
			}

			if (!this.options.updateWhenIdle) {
				map.off('move', this._limitedUpdate, this);
			}

			this._container = null;
			this._map = null;
		},

		bringToFront: function () {
			var pane = this._map._panes.tilePane;

			if (this._container) {
				pane.appendChild(this._container);
				this._setAutoZIndex(pane, Math.max);
			}

			return this;
		},

		bringToBack: function () {
			var pane = this._map._panes.tilePane;

			if (this._container) {
				pane.insertBefore(this._container, pane.firstChild);
				this._setAutoZIndex(pane, Math.min);
			}

			return this;
		},

		getAttribution: function () {
			return this.options.attribution;
		},

		getContainer: function () {
			return this._container;
		},

		setOpacity: function (opacity) {
			this.options.opacity = opacity;

			if (this._map) {
				this._updateOpacity();
			}

			return this;
		},

		setZIndex: function (zIndex) {
			this.options.zIndex = zIndex;
			this._updateZIndex();

			return this;
		},

		setUrl: function (url, noRedraw) {
			this._url = url;

			if (!noRedraw) {
				this.redraw();
			}

			return this;
		},

		redraw: function () {
			if (this._map) {
				this._reset({hard: true});
				this._update();
			}
			return this;
		},

		_updateZIndex: function () {
			if (this._container && this.options.zIndex !== undefined) {
				this._container.style.zIndex = this.options.zIndex;
			}
		},

		_setAutoZIndex: function (pane, compare) {

			var layers = pane.children,
			    edgeZIndex = -compare(Infinity, -Infinity), // -Infinity for max, Infinity for min
			    zIndex, i, len;

			for (i = 0, len = layers.length; i < len; i++) {

				if (layers[i] !== this._container) {
					zIndex = parseInt(layers[i].style.zIndex, 10);

					if (!isNaN(zIndex)) {
						edgeZIndex = compare(edgeZIndex, zIndex);
					}
				}
			}

			this.options.zIndex = this._container.style.zIndex =
			        (isFinite(edgeZIndex) ? edgeZIndex : 0) + compare(1, -1);
		},

		_updateOpacity: function () {
			var i,
			    tiles = this._tiles;

			if (L.Browser.ielt9) {
				for (i in tiles) {
					L.DomUtil.setOpacity(tiles[i], this.options.opacity);
				}
			} else {
				L.DomUtil.setOpacity(this._container, this.options.opacity);
			}
		},

		_initContainer: function () {
			var tilePane = this._map._panes.tilePane;

			if (!this._container) {
				this._container = L.DomUtil.create('div', 'leaflet-layer');

				this._updateZIndex();

				if (this._animated) {
					var className = 'leaflet-tile-container';

					this._bgBuffer = L.DomUtil.create('div', className, this._container);
					this._tileContainer = L.DomUtil.create('div', className, this._container);

				} else {
					this._tileContainer = this._container;
				}

				tilePane.appendChild(this._container);

				if (this.options.opacity < 1) {
					this._updateOpacity();
				}
			}
		},

		_reset: function (e) {
			for (var key in this._tiles) {
				this.fire('tileunload', {tile: this._tiles[key]});
			}

			this._tiles = {};
			this._tilesToLoad = 0;

			if (this.options.reuseTiles) {
				this._unusedTiles = [];
			}

			this._tileContainer.innerHTML = '';

			if (this._animated && e && e.hard) {
				this._clearBgBuffer();
			}

			this._initContainer();
		},

		_getTileSize: function () {
			var map = this._map,
			    zoom = map.getZoom() + this.options.zoomOffset,
			    zoomN = this.options.maxNativeZoom,
			    tileSize = this.options.tileSize;

			if (zoomN && zoom > zoomN) {
				tileSize = Math.round(map.getZoomScale(zoom) / map.getZoomScale(zoomN) * tileSize);
			}

			return tileSize;
		},

		_update: function () {

			if (!this._map) { return; }

			var map = this._map,
			    bounds = map.getPixelBounds(),
			    zoom = map.getZoom(),
			    tileSize = this._getTileSize();

			if (zoom > this.options.maxZoom || zoom < this.options.minZoom) {
				return;
			}

			var tileBounds = L.bounds(
			        bounds.min.divideBy(tileSize)._floor(),
			        bounds.max.divideBy(tileSize)._floor());

			this._addTilesFromCenterOut(tileBounds);

			if (this.options.unloadInvisibleTiles || this.options.reuseTiles) {
				this._removeOtherTiles(tileBounds);
			}
		},

		_addTilesFromCenterOut: function (bounds) {
			var queue = [],
			    center = bounds.getCenter();

			var j, i, point;

			for (j = bounds.min.y; j <= bounds.max.y; j++) {
				for (i = bounds.min.x; i <= bounds.max.x; i++) {
					point = new L.Point(i, j);

					if (this._tileShouldBeLoaded(point)) {
						queue.push(point);
					}
				}
			}

			var tilesToLoad = queue.length;

			if (tilesToLoad === 0) { return; }

			// load tiles in order of their distance to center
			queue.sort(function (a, b) {
				return a.distanceTo(center) - b.distanceTo(center);
			});

			var fragment = document.createDocumentFragment();

			// if its the first batch of tiles to load
			if (!this._tilesToLoad) {
				this.fire('loading');
			}

			this._tilesToLoad += tilesToLoad;

			for (i = 0; i < tilesToLoad; i++) {
				this._addTile(queue[i], fragment);
			}

			this._tileContainer.appendChild(fragment);
		},

		_tileShouldBeLoaded: function (tilePoint) {
			if ((tilePoint.x + ':' + tilePoint.y) in this._tiles) {
				return false; // already loaded
			}

			var options = this.options;

			if (!options.continuousWorld) {
				var limit = this._getWrapTileNum();

				// don't load if exceeds world bounds
				if ((options.noWrap && (tilePoint.x < 0 || tilePoint.x >= limit.x)) ||
					tilePoint.y < 0 || tilePoint.y >= limit.y) { return false; }
			}

			if (options.bounds) {
				var tileSize = this._getTileSize(),
				    nwPoint = tilePoint.multiplyBy(tileSize),
				    sePoint = nwPoint.add([tileSize, tileSize]),
				    nw = this._map.unproject(nwPoint),
				    se = this._map.unproject(sePoint);

				// TODO temporary hack, will be removed after refactoring projections
				// https://github.com/Leaflet/Leaflet/issues/1618
				if (!options.continuousWorld && !options.noWrap) {
					nw = nw.wrap();
					se = se.wrap();
				}

				if (!options.bounds.intersects([nw, se])) { return false; }
			}

			return true;
		},

		_removeOtherTiles: function (bounds) {
			var kArr, x, y, key;

			for (key in this._tiles) {
				kArr = key.split(':');
				x = parseInt(kArr[0], 10);
				y = parseInt(kArr[1], 10);

				// remove tile if it's out of bounds
				if (x < bounds.min.x || x > bounds.max.x || y < bounds.min.y || y > bounds.max.y) {
					this._removeTile(key);
				}
			}
		},

		_removeTile: function (key) {
			var tile = this._tiles[key];

			this.fire('tileunload', {tile: tile, url: tile.src});

			if (this.options.reuseTiles) {
				L.DomUtil.removeClass(tile, 'leaflet-tile-loaded');
				this._unusedTiles.push(tile);

			} else if (tile.parentNode === this._tileContainer) {
				this._tileContainer.removeChild(tile);
			}

			// for https://github.com/CloudMade/Leaflet/issues/137
			if (!L.Browser.android) {
				tile.onload = null;
				tile.src = L.Util.emptyImageUrl;
			}

			delete this._tiles[key];
		},

		_addTile: function (tilePoint, container) {
			var tilePos = this._getTilePos(tilePoint);

			// get unused tile - or create a new tile
			var tile = this._getTile();

			/*
			Chrome 20 layouts much faster with top/left (verify with timeline, frames)
			Android 4 browser has display issues with top/left and requires transform instead
			(other browsers don't currently care) - see debug/hacks/jitter.html for an example
			*/
			L.DomUtil.setPosition(tile, tilePos, L.Browser.chrome);

			this._tiles[tilePoint.x + ':' + tilePoint.y] = tile;

			this._loadTile(tile, tilePoint);

			if (tile.parentNode !== this._tileContainer) {
				container.appendChild(tile);
			}
		},

		_getZoomForUrl: function () {

			var options = this.options,
			    zoom = this._map.getZoom();

			if (options.zoomReverse) {
				zoom = options.maxZoom - zoom;
			}

			zoom += options.zoomOffset;

			return options.maxNativeZoom ? Math.min(zoom, options.maxNativeZoom) : zoom;
		},

		_getTilePos: function (tilePoint) {
			var origin = this._map.getPixelOrigin(),
			    tileSize = this._getTileSize();

			return tilePoint.multiplyBy(tileSize).subtract(origin);
		},

		// image-specific code (override to implement e.g. Canvas or SVG tile layer)

		getTileUrl: function (tilePoint) {
			return L.Util.template(this._url, L.extend({
				s: this._getSubdomain(tilePoint),
				z: tilePoint.z,
				x: tilePoint.x,
				y: tilePoint.y
			}, this.options));
		},

		_getWrapTileNum: function () {
			var crs = this._map.options.crs,
			    size = crs.getSize(this._map.getZoom());
			return size.divideBy(this._getTileSize())._floor();
		},

		_adjustTilePoint: function (tilePoint) {

			var limit = this._getWrapTileNum();

			// wrap tile coordinates
			if (!this.options.continuousWorld && !this.options.noWrap) {
				tilePoint.x = ((tilePoint.x % limit.x) + limit.x) % limit.x;
			}

			if (this.options.tms) {
				tilePoint.y = limit.y - tilePoint.y - 1;
			}

			tilePoint.z = this._getZoomForUrl();
		},

		_getSubdomain: function (tilePoint) {
			var index = Math.abs(tilePoint.x + tilePoint.y) % this.options.subdomains.length;
			return this.options.subdomains[index];
		},

		_getTile: function () {
			if (this.options.reuseTiles && this._unusedTiles.length > 0) {
				var tile = this._unusedTiles.pop();
				this._resetTile(tile);
				return tile;
			}
			return this._createTile();
		},

		// Override if data stored on a tile needs to be cleaned up before reuse
		_resetTile: function (/*tile*/) {},

		_createTile: function () {
			var tile = L.DomUtil.create('img', 'leaflet-tile');
			tile.style.width = tile.style.height = this._getTileSize() + 'px';
			tile.galleryimg = 'no';

			tile.onselectstart = tile.onmousemove = L.Util.falseFn;

			if (L.Browser.ielt9 && this.options.opacity !== undefined) {
				L.DomUtil.setOpacity(tile, this.options.opacity);
			}
			// without this hack, tiles disappear after zoom on Chrome for Android
			// https://github.com/Leaflet/Leaflet/issues/2078
			if (L.Browser.mobileWebkit3d) {
				tile.style.WebkitBackfaceVisibility = 'hidden';
			}
			return tile;
		},

		_loadTile: function (tile, tilePoint) {
			tile._layer  = this;
			tile.onload  = this._tileOnLoad;
			tile.onerror = this._tileOnError;

			this._adjustTilePoint(tilePoint);
			tile.src     = this.getTileUrl(tilePoint);

			this.fire('tileloadstart', {
				tile: tile,
				url: tile.src
			});
		},

		_tileLoaded: function () {
			this._tilesToLoad--;

			if (this._animated) {
				L.DomUtil.addClass(this._tileContainer, 'leaflet-zoom-animated');
			}

			if (!this._tilesToLoad) {
				this.fire('load');

				if (this._animated) {
					// clear scaled tiles after all new tiles are loaded (for performance)
					clearTimeout(this._clearBgBufferTimer);
					this._clearBgBufferTimer = setTimeout(L.bind(this._clearBgBuffer, this), 500);
				}
			}
		},

		_tileOnLoad: function () {
			var layer = this._layer;

			//Only if we are loading an actual image
			if (this.src !== L.Util.emptyImageUrl) {
				L.DomUtil.addClass(this, 'leaflet-tile-loaded');

				layer.fire('tileload', {
					tile: this,
					url: this.src
				});
			}

			layer._tileLoaded();
		},

		_tileOnError: function () {
			var layer = this._layer;

			layer.fire('tileerror', {
				tile: this,
				url: this.src
			});

			var newUrl = layer.options.errorTileUrl;
			if (newUrl) {
				this.src = newUrl;
			}

			layer._tileLoaded();
		}
	});

	L.tileLayer = function (url, options) {
		return new L.TileLayer(url, options);
	};


	/*
	 * L.TileLayer.WMS is used for putting WMS tile layers on the map.
	 */

	L.TileLayer.WMS = L.TileLayer.extend({

		defaultWmsParams: {
			service: 'WMS',
			request: 'GetMap',
			version: '1.1.1',
			layers: '',
			styles: '',
			format: 'image/jpeg',
			transparent: false
		},

		initialize: function (url, options) { // (String, Object)

			this._url = url;

			var wmsParams = L.extend({}, this.defaultWmsParams),
			    tileSize = options.tileSize || this.options.tileSize;

			if (options.detectRetina && L.Browser.retina) {
				wmsParams.width = wmsParams.height = tileSize * 2;
			} else {
				wmsParams.width = wmsParams.height = tileSize;
			}

			for (var i in options) {
				// all keys that are not TileLayer options go to WMS params
				if (!this.options.hasOwnProperty(i) && i !== 'crs') {
					wmsParams[i] = options[i];
				}
			}

			this.wmsParams = wmsParams;

			L.setOptions(this, options);
		},

		onAdd: function (map) {

			this._crs = this.options.crs || map.options.crs;

			this._wmsVersion = parseFloat(this.wmsParams.version);

			var projectionKey = this._wmsVersion >= 1.3 ? 'crs' : 'srs';
			this.wmsParams[projectionKey] = this._crs.code;

			L.TileLayer.prototype.onAdd.call(this, map);
		},

		getTileUrl: function (tilePoint) { // (Point, Number) -> String

			var map = this._map,
			    tileSize = this.options.tileSize,

			    nwPoint = tilePoint.multiplyBy(tileSize),
			    sePoint = nwPoint.add([tileSize, tileSize]),

			    nw = this._crs.project(map.unproject(nwPoint, tilePoint.z)),
			    se = this._crs.project(map.unproject(sePoint, tilePoint.z)),
			    bbox = this._wmsVersion >= 1.3 && this._crs === L.CRS.EPSG4326 ?
			        [se.y, nw.x, nw.y, se.x].join(',') :
			        [nw.x, se.y, se.x, nw.y].join(','),

			    url = L.Util.template(this._url, {s: this._getSubdomain(tilePoint)});

			return url + L.Util.getParamString(this.wmsParams, url, true) + '&BBOX=' + bbox;
		},

		setParams: function (params, noRedraw) {

			L.extend(this.wmsParams, params);

			if (!noRedraw) {
				this.redraw();
			}

			return this;
		}
	});

	L.tileLayer.wms = function (url, options) {
		return new L.TileLayer.WMS(url, options);
	};


	/*
	 * L.TileLayer.Canvas is a class that you can use as a base for creating
	 * dynamically drawn Canvas-based tile layers.
	 */

	L.TileLayer.Canvas = L.TileLayer.extend({
		options: {
			async: false
		},

		initialize: function (options) {
			L.setOptions(this, options);
		},

		redraw: function () {
			if (this._map) {
				this._reset({hard: true});
				this._update();
			}

			for (var i in this._tiles) {
				this._redrawTile(this._tiles[i]);
			}
			return this;
		},

		_redrawTile: function (tile) {
			this.drawTile(tile, tile._tilePoint, this._map._zoom);
		},

		_createTile: function () {
			var tile = L.DomUtil.create('canvas', 'leaflet-tile');
			tile.width = tile.height = this.options.tileSize;
			tile.onselectstart = tile.onmousemove = L.Util.falseFn;
			return tile;
		},

		_loadTile: function (tile, tilePoint) {
			tile._layer = this;
			tile._tilePoint = tilePoint;

			this._redrawTile(tile);

			if (!this.options.async) {
				this.tileDrawn(tile);
			}
		},

		drawTile: function (/*tile, tilePoint*/) {
			// override with rendering code
		},

		tileDrawn: function (tile) {
			this._tileOnLoad.call(tile);
		}
	});


	L.tileLayer.canvas = function (options) {
		return new L.TileLayer.Canvas(options);
	};


	/*
	 * L.ImageOverlay is used to overlay images over the map (to specific geographical bounds).
	 */

	L.ImageOverlay = L.Class.extend({
		includes: L.Mixin.Events,

		options: {
			opacity: 1
		},

		initialize: function (url, bounds, options) { // (String, LatLngBounds, Object)
			this._url = url;
			this._bounds = L.latLngBounds(bounds);

			L.setOptions(this, options);
		},

		onAdd: function (map) {
			this._map = map;

			if (!this._image) {
				this._initImage();
			}

			map._panes.overlayPane.appendChild(this._image);

			map.on('viewreset', this._reset, this);

			if (map.options.zoomAnimation && L.Browser.any3d) {
				map.on('zoomanim', this._animateZoom, this);
			}

			this._reset();
		},

		onRemove: function (map) {
			map.getPanes().overlayPane.removeChild(this._image);

			map.off('viewreset', this._reset, this);

			if (map.options.zoomAnimation) {
				map.off('zoomanim', this._animateZoom, this);
			}
		},

		addTo: function (map) {
			map.addLayer(this);
			return this;
		},

		setOpacity: function (opacity) {
			this.options.opacity = opacity;
			this._updateOpacity();
			return this;
		},

		// TODO remove bringToFront/bringToBack duplication from TileLayer/Path
		bringToFront: function () {
			if (this._image) {
				this._map._panes.overlayPane.appendChild(this._image);
			}
			return this;
		},

		bringToBack: function () {
			var pane = this._map._panes.overlayPane;
			if (this._image) {
				pane.insertBefore(this._image, pane.firstChild);
			}
			return this;
		},

		setUrl: function (url) {
			this._url = url;
			this._image.src = this._url;
		},

		getAttribution: function () {
			return this.options.attribution;
		},

		_initImage: function () {
			this._image = L.DomUtil.create('img', 'leaflet-image-layer');

			if (this._map.options.zoomAnimation && L.Browser.any3d) {
				L.DomUtil.addClass(this._image, 'leaflet-zoom-animated');
			} else {
				L.DomUtil.addClass(this._image, 'leaflet-zoom-hide');
			}

			this._updateOpacity();

			//TODO createImage util method to remove duplication
			L.extend(this._image, {
				galleryimg: 'no',
				onselectstart: L.Util.falseFn,
				onmousemove: L.Util.falseFn,
				onload: L.bind(this._onImageLoad, this),
				src: this._url
			});
		},

		_animateZoom: function (e) {
			var map = this._map,
			    image = this._image,
			    scale = map.getZoomScale(e.zoom),
			    nw = this._bounds.getNorthWest(),
			    se = this._bounds.getSouthEast(),

			    topLeft = map._latLngToNewLayerPoint(nw, e.zoom, e.center),
			    size = map._latLngToNewLayerPoint(se, e.zoom, e.center)._subtract(topLeft),
			    origin = topLeft._add(size._multiplyBy((1 / 2) * (1 - 1 / scale)));

			image.style[L.DomUtil.TRANSFORM] =
			        L.DomUtil.getTranslateString(origin) + ' scale(' + scale + ') ';
		},

		_reset: function () {
			var image   = this._image,
			    topLeft = this._map.latLngToLayerPoint(this._bounds.getNorthWest()),
			    size = this._map.latLngToLayerPoint(this._bounds.getSouthEast())._subtract(topLeft);

			L.DomUtil.setPosition(image, topLeft);

			image.style.width  = size.x + 'px';
			image.style.height = size.y + 'px';
		},

		_onImageLoad: function () {
			this.fire('load');
		},

		_updateOpacity: function () {
			L.DomUtil.setOpacity(this._image, this.options.opacity);
		}
	});

	L.imageOverlay = function (url, bounds, options) {
		return new L.ImageOverlay(url, bounds, options);
	};


	/*
	 * L.Icon is an image-based icon class that you can use with L.Marker for custom markers.
	 */

	L.Icon = L.Class.extend({
		options: {
			/*
			iconUrl: (String) (required)
			iconRetinaUrl: (String) (optional, used for retina devices if detected)
			iconSize: (Point) (can be set through CSS)
			iconAnchor: (Point) (centered by default, can be set in CSS with negative margins)
			popupAnchor: (Point) (if not specified, popup opens in the anchor point)
			shadowUrl: (String) (no shadow by default)
			shadowRetinaUrl: (String) (optional, used for retina devices if detected)
			shadowSize: (Point)
			shadowAnchor: (Point)
			*/
			className: ''
		},

		initialize: function (options) {
			L.setOptions(this, options);
		},

		createIcon: function (oldIcon) {
			return this._createIcon('icon', oldIcon);
		},

		createShadow: function (oldIcon) {
			return this._createIcon('shadow', oldIcon);
		},

		_createIcon: function (name, oldIcon) {
			var src = this._getIconUrl(name);

			if (!src) {
				if (name === 'icon') {
					throw new Error('iconUrl not set in Icon options (see the docs).');
				}
				return null;
			}

			var img;
			if (!oldIcon || oldIcon.tagName !== 'IMG') {
				img = this._createImg(src);
			} else {
				img = this._createImg(src, oldIcon);
			}
			this._setIconStyles(img, name);

			return img;
		},

		_setIconStyles: function (img, name) {
			var options = this.options,
			    size = L.point(options[name + 'Size']),
			    anchor;

			if (name === 'shadow') {
				anchor = L.point(options.shadowAnchor || options.iconAnchor);
			} else {
				anchor = L.point(options.iconAnchor);
			}

			if (!anchor && size) {
				anchor = size.divideBy(2, true);
			}

			img.className = 'leaflet-marker-' + name + ' ' + options.className;

			if (anchor) {
				img.style.marginLeft = (-anchor.x) + 'px';
				img.style.marginTop  = (-anchor.y) + 'px';
			}

			if (size) {
				img.style.width  = size.x + 'px';
				img.style.height = size.y + 'px';
			}
		},

		_createImg: function (src, el) {
			el = el || document.createElement('img');
			el.src = src;
			return el;
		},

		_getIconUrl: function (name) {
			if (L.Browser.retina && this.options[name + 'RetinaUrl']) {
				return this.options[name + 'RetinaUrl'];
			}
			return this.options[name + 'Url'];
		}
	});

	L.icon = function (options) {
		return new L.Icon(options);
	};


	/*
	 * L.Icon.Default is the blue marker icon used by default in Leaflet.
	 */

	L.Icon.Default = L.Icon.extend({

		options: {
			iconSize: [25, 41],
			iconAnchor: [12, 41],
			popupAnchor: [1, -34],

			shadowSize: [41, 41]
		},

		_getIconUrl: function (name) {
			var key = name + 'Url';

			if (this.options[key]) {
				return this.options[key];
			}

			if (L.Browser.retina && name === 'icon') {
				name += '-2x';
			}

			var path = L.Icon.Default.imagePath;

			if (!path) {
				throw new Error('Couldn\'t autodetect L.Icon.Default.imagePath, set it manually.');
			}

			return path + '/marker-' + name + '.png';
		}
	});

	L.Icon.Default.imagePath = (function () {
		var scripts = document.getElementsByTagName('script'),
		    leafletRe = /[\/^]leaflet[\-\._]?([\w\-\._]*)\.js\??/;

		var i, len, src, matches, path;

		for (i = 0, len = scripts.length; i < len; i++) {
			src = scripts[i].src;
			matches = src.match(leafletRe);

			if (matches) {
				path = src.split(leafletRe)[0];
				return (path ? path + '/' : '') + 'images';
			}
		}
	}());


	/*
	 * L.Marker is used to display clickable/draggable icons on the map.
	 */

	L.Marker = L.Class.extend({

		includes: L.Mixin.Events,

		options: {
			icon: new L.Icon.Default(),
			title: '',
			alt: '',
			clickable: true,
			draggable: false,
			keyboard: true,
			zIndexOffset: 0,
			opacity: 1,
			riseOnHover: false,
			riseOffset: 250
		},

		initialize: function (latlng, options) {
			L.setOptions(this, options);
			this._latlng = L.latLng(latlng);
		},

		onAdd: function (map) {
			this._map = map;

			map.on('viewreset', this.update, this);

			this._initIcon();
			this.update();
			this.fire('add');

			if (map.options.zoomAnimation && map.options.markerZoomAnimation) {
				map.on('zoomanim', this._animateZoom, this);
			}
		},

		addTo: function (map) {
			map.addLayer(this);
			return this;
		},

		onRemove: function (map) {
			if (this.dragging) {
				this.dragging.disable();
			}

			this._removeIcon();
			this._removeShadow();

			this.fire('remove');

			map.off({
				'viewreset': this.update,
				'zoomanim': this._animateZoom
			}, this);

			this._map = null;
		},

		getLatLng: function () {
			return this._latlng;
		},

		setLatLng: function (latlng) {
			this._latlng = L.latLng(latlng);

			this.update();

			return this.fire('move', { latlng: this._latlng });
		},

		setZIndexOffset: function (offset) {
			this.options.zIndexOffset = offset;
			this.update();

			return this;
		},

		setIcon: function (icon) {

			this.options.icon = icon;

			if (this._map) {
				this._initIcon();
				this.update();
			}

			if (this._popup) {
				this.bindPopup(this._popup);
			}

			return this;
		},

		update: function () {
			if (this._icon) {
				this._setPos(this._map.latLngToLayerPoint(this._latlng).round());
			}
			return this;
		},

		_initIcon: function () {
			var options = this.options,
			    map = this._map,
			    animation = (map.options.zoomAnimation && map.options.markerZoomAnimation),
			    classToAdd = animation ? 'leaflet-zoom-animated' : 'leaflet-zoom-hide';

			var icon = options.icon.createIcon(this._icon),
				addIcon = false;

			// if we're not reusing the icon, remove the old one and init new one
			if (icon !== this._icon) {
				if (this._icon) {
					this._removeIcon();
				}
				addIcon = true;

				if (options.title) {
					icon.title = options.title;
				}

				if (options.alt) {
					icon.alt = options.alt;
				}
			}

			L.DomUtil.addClass(icon, classToAdd);

			if (options.keyboard) {
				icon.tabIndex = '0';
			}

			this._icon = icon;

			this._initInteraction();

			if (options.riseOnHover) {
				L.DomEvent
					.on(icon, 'mouseover', this._bringToFront, this)
					.on(icon, 'mouseout', this._resetZIndex, this);
			}

			var newShadow = options.icon.createShadow(this._shadow),
				addShadow = false;

			if (newShadow !== this._shadow) {
				this._removeShadow();
				addShadow = true;
			}

			if (newShadow) {
				L.DomUtil.addClass(newShadow, classToAdd);
			}
			this._shadow = newShadow;


			if (options.opacity < 1) {
				this._updateOpacity();
			}


			var panes = this._map._panes;

			if (addIcon) {
				panes.markerPane.appendChild(this._icon);
			}

			if (newShadow && addShadow) {
				panes.shadowPane.appendChild(this._shadow);
			}
		},

		_removeIcon: function () {
			if (this.options.riseOnHover) {
				L.DomEvent
				    .off(this._icon, 'mouseover', this._bringToFront)
				    .off(this._icon, 'mouseout', this._resetZIndex);
			}

			this._map._panes.markerPane.removeChild(this._icon);

			this._icon = null;
		},

		_removeShadow: function () {
			if (this._shadow) {
				this._map._panes.shadowPane.removeChild(this._shadow);
			}
			this._shadow = null;
		},

		_setPos: function (pos) {
			L.DomUtil.setPosition(this._icon, pos);

			if (this._shadow) {
				L.DomUtil.setPosition(this._shadow, pos);
			}

			this._zIndex = pos.y + this.options.zIndexOffset;

			this._resetZIndex();
		},

		_updateZIndex: function (offset) {
			this._icon.style.zIndex = this._zIndex + offset;
		},

		_animateZoom: function (opt) {
			var pos = this._map._latLngToNewLayerPoint(this._latlng, opt.zoom, opt.center).round();

			this._setPos(pos);
		},

		_initInteraction: function () {

			if (!this.options.clickable) { return; }

			// TODO refactor into something shared with Map/Path/etc. to DRY it up

			var icon = this._icon,
			    events = ['dblclick', 'mousedown', 'mouseover', 'mouseout', 'contextmenu'];

			L.DomUtil.addClass(icon, 'leaflet-clickable');
			L.DomEvent.on(icon, 'click', this._onMouseClick, this);
			L.DomEvent.on(icon, 'keypress', this._onKeyPress, this);

			for (var i = 0; i < events.length; i++) {
				L.DomEvent.on(icon, events[i], this._fireMouseEvent, this);
			}

			if (L.Handler.MarkerDrag) {
				this.dragging = new L.Handler.MarkerDrag(this);

				if (this.options.draggable) {
					this.dragging.enable();
				}
			}
		},

		_onMouseClick: function (e) {
			var wasDragged = this.dragging && this.dragging.moved();

			if (this.hasEventListeners(e.type) || wasDragged) {
				L.DomEvent.stopPropagation(e);
			}

			if (wasDragged) { return; }

			if ((!this.dragging || !this.dragging._enabled) && this._map.dragging && this._map.dragging.moved()) { return; }

			this.fire(e.type, {
				originalEvent: e,
				latlng: this._latlng
			});
		},

		_onKeyPress: function (e) {
			if (e.keyCode === 13) {
				this.fire('click', {
					originalEvent: e,
					latlng: this._latlng
				});
			}
		},

		_fireMouseEvent: function (e) {

			this.fire(e.type, {
				originalEvent: e,
				latlng: this._latlng
			});

			// TODO proper custom event propagation
			// this line will always be called if marker is in a FeatureGroup
			if (e.type === 'contextmenu' && this.hasEventListeners(e.type)) {
				L.DomEvent.preventDefault(e);
			}
			if (e.type !== 'mousedown') {
				L.DomEvent.stopPropagation(e);
			} else {
				L.DomEvent.preventDefault(e);
			}
		},

		setOpacity: function (opacity) {
			this.options.opacity = opacity;
			if (this._map) {
				this._updateOpacity();
			}

			return this;
		},

		_updateOpacity: function () {
			L.DomUtil.setOpacity(this._icon, this.options.opacity);
			if (this._shadow) {
				L.DomUtil.setOpacity(this._shadow, this.options.opacity);
			}
		},

		_bringToFront: function () {
			this._updateZIndex(this.options.riseOffset);
		},

		_resetZIndex: function () {
			this._updateZIndex(0);
		}
	});

	L.marker = function (latlng, options) {
		return new L.Marker(latlng, options);
	};


	/*
	 * L.DivIcon is a lightweight HTML-based icon class (as opposed to the image-based L.Icon)
	 * to use with L.Marker.
	 */

	L.DivIcon = L.Icon.extend({
		options: {
			iconSize: [12, 12], // also can be set through CSS
			/*
			iconAnchor: (Point)
			popupAnchor: (Point)
			html: (String)
			bgPos: (Point)
			*/
			className: 'leaflet-div-icon',
			html: false
		},

		createIcon: function (oldIcon) {
			var div = (oldIcon && oldIcon.tagName === 'DIV') ? oldIcon : document.createElement('div'),
			    options = this.options;

			if (options.html !== false) {
				div.innerHTML = options.html;
			} else {
				div.innerHTML = '';
			}

			if (options.bgPos) {
				div.style.backgroundPosition =
				        (-options.bgPos.x) + 'px ' + (-options.bgPos.y) + 'px';
			}

			this._setIconStyles(div, 'icon');
			return div;
		},

		createShadow: function () {
			return null;
		}
	});

	L.divIcon = function (options) {
		return new L.DivIcon(options);
	};


	/*
	 * L.Popup is used for displaying popups on the map.
	 */

	L.Map.mergeOptions({
		closePopupOnClick: true
	});

	L.Popup = L.Class.extend({
		includes: L.Mixin.Events,

		options: {
			minWidth: 50,
			maxWidth: 300,
			// maxHeight: null,
			autoPan: true,
			closeButton: true,
			offset: [0, 7],
			autoPanPadding: [5, 5],
			// autoPanPaddingTopLeft: null,
			// autoPanPaddingBottomRight: null,
			keepInView: false,
			className: '',
			zoomAnimation: true
		},

		initialize: function (options, source) {
			L.setOptions(this, options);

			this._source = source;
			this._animated = L.Browser.any3d && this.options.zoomAnimation;
			this._isOpen = false;
		},

		onAdd: function (map) {
			this._map = map;

			if (!this._container) {
				this._initLayout();
			}

			var animFade = map.options.fadeAnimation;

			if (animFade) {
				L.DomUtil.setOpacity(this._container, 0);
			}
			map._panes.popupPane.appendChild(this._container);

			map.on(this._getEvents(), this);

			this.update();

			if (animFade) {
				L.DomUtil.setOpacity(this._container, 1);
			}

			this.fire('open');

			map.fire('popupopen', {popup: this});

			if (this._source) {
				this._source.fire('popupopen', {popup: this});
			}
		},

		addTo: function (map) {
			map.addLayer(this);
			return this;
		},

		openOn: function (map) {
			map.openPopup(this);
			return this;
		},

		onRemove: function (map) {
			map._panes.popupPane.removeChild(this._container);

			L.Util.falseFn(this._container.offsetWidth); // force reflow

			map.off(this._getEvents(), this);

			if (map.options.fadeAnimation) {
				L.DomUtil.setOpacity(this._container, 0);
			}

			this._map = null;

			this.fire('close');

			map.fire('popupclose', {popup: this});

			if (this._source) {
				this._source.fire('popupclose', {popup: this});
			}
		},

		getLatLng: function () {
			return this._latlng;
		},

		setLatLng: function (latlng) {
			this._latlng = L.latLng(latlng);
			if (this._map) {
				this._updatePosition();
				this._adjustPan();
			}
			return this;
		},

		getContent: function () {
			return this._content;
		},

		setContent: function (content) {
			this._content = content;
			this.update();
			return this;
		},

		update: function () {
			if (!this._map) { return; }

			this._container.style.visibility = 'hidden';

			this._updateContent();
			this._updateLayout();
			this._updatePosition();

			this._container.style.visibility = '';

			this._adjustPan();
		},

		_getEvents: function () {
			var events = {
				viewreset: this._updatePosition
			};

			if (this._animated) {
				events.zoomanim = this._zoomAnimation;
			}
			if ('closeOnClick' in this.options ? this.options.closeOnClick : this._map.options.closePopupOnClick) {
				events.preclick = this._close;
			}
			if (this.options.keepInView) {
				events.moveend = this._adjustPan;
			}

			return events;
		},

		_close: function () {
			if (this._map) {
				this._map.closePopup(this);
			}
		},

		_initLayout: function () {
			var prefix = 'leaflet-popup',
				containerClass = prefix + ' ' + this.options.className + ' leaflet-zoom-' +
				        (this._animated ? 'animated' : 'hide'),
				container = this._container = L.DomUtil.create('div', containerClass),
				closeButton;

			if (this.options.closeButton) {
				closeButton = this._closeButton =
				        L.DomUtil.create('a', prefix + '-close-button', container);
				closeButton.href = '#close';
				closeButton.innerHTML = '&#215;';
				L.DomEvent.disableClickPropagation(closeButton);

				L.DomEvent.on(closeButton, 'click', this._onCloseButtonClick, this);
			}

			var wrapper = this._wrapper =
			        L.DomUtil.create('div', prefix + '-content-wrapper', container);
			L.DomEvent.disableClickPropagation(wrapper);

			this._contentNode = L.DomUtil.create('div', prefix + '-content', wrapper);

			L.DomEvent.disableScrollPropagation(this._contentNode);
			L.DomEvent.on(wrapper, 'contextmenu', L.DomEvent.stopPropagation);

			this._tipContainer = L.DomUtil.create('div', prefix + '-tip-container', container);
			this._tip = L.DomUtil.create('div', prefix + '-tip', this._tipContainer);
		},

		_updateContent: function () {
			if (!this._content) { return; }

			if (typeof this._content === 'string') {
				this._contentNode.innerHTML = this._content;
			} else {
				while (this._contentNode.hasChildNodes()) {
					this._contentNode.removeChild(this._contentNode.firstChild);
				}
				this._contentNode.appendChild(this._content);
			}
			this.fire('contentupdate');
		},

		_updateLayout: function () {
			var container = this._contentNode,
			    style = container.style;

			style.width = '';
			style.whiteSpace = 'nowrap';

			var width = container.offsetWidth;
			width = Math.min(width, this.options.maxWidth);
			width = Math.max(width, this.options.minWidth);

			style.width = (width + 1) + 'px';
			style.whiteSpace = '';

			style.height = '';

			var height = container.offsetHeight,
			    maxHeight = this.options.maxHeight,
			    scrolledClass = 'leaflet-popup-scrolled';

			if (maxHeight && height > maxHeight) {
				style.height = maxHeight + 'px';
				L.DomUtil.addClass(container, scrolledClass);
			} else {
				L.DomUtil.removeClass(container, scrolledClass);
			}

			this._containerWidth = this._container.offsetWidth;
		},

		_updatePosition: function () {
			if (!this._map) { return; }

			var pos = this._map.latLngToLayerPoint(this._latlng),
			    animated = this._animated,
			    offset = L.point(this.options.offset);

			if (animated) {
				L.DomUtil.setPosition(this._container, pos);
			}

			this._containerBottom = -offset.y - (animated ? 0 : pos.y);
			this._containerLeft = -Math.round(this._containerWidth / 2) + offset.x + (animated ? 0 : pos.x);

			// bottom position the popup in case the height of the popup changes (images loading etc)
			this._container.style.bottom = this._containerBottom + 'px';
			this._container.style.left = this._containerLeft + 'px';
		},

		_zoomAnimation: function (opt) {
			var pos = this._map._latLngToNewLayerPoint(this._latlng, opt.zoom, opt.center);

			L.DomUtil.setPosition(this._container, pos);
		},

		_adjustPan: function () {
			if (!this.options.autoPan) { return; }

			var map = this._map,
			    containerHeight = this._container.offsetHeight,
			    containerWidth = this._containerWidth,

			    layerPos = new L.Point(this._containerLeft, -containerHeight - this._containerBottom);

			if (this._animated) {
				layerPos._add(L.DomUtil.getPosition(this._container));
			}

			var containerPos = map.layerPointToContainerPoint(layerPos),
			    padding = L.point(this.options.autoPanPadding),
			    paddingTL = L.point(this.options.autoPanPaddingTopLeft || padding),
			    paddingBR = L.point(this.options.autoPanPaddingBottomRight || padding),
			    size = map.getSize(),
			    dx = 0,
			    dy = 0;

			if (containerPos.x + containerWidth + paddingBR.x > size.x) { // right
				dx = containerPos.x + containerWidth - size.x + paddingBR.x;
			}
			if (containerPos.x - dx - paddingTL.x < 0) { // left
				dx = containerPos.x - paddingTL.x;
			}
			if (containerPos.y + containerHeight + paddingBR.y > size.y) { // bottom
				dy = containerPos.y + containerHeight - size.y + paddingBR.y;
			}
			if (containerPos.y - dy - paddingTL.y < 0) { // top
				dy = containerPos.y - paddingTL.y;
			}

			if (dx || dy) {
				map
				    .fire('autopanstart')
				    .panBy([dx, dy]);
			}
		},

		_onCloseButtonClick: function (e) {
			this._close();
			L.DomEvent.stop(e);
		}
	});

	L.popup = function (options, source) {
		return new L.Popup(options, source);
	};


	L.Map.include({
		openPopup: function (popup, latlng, options) { // (Popup) or (String || HTMLElement, LatLng[, Object])
			this.closePopup();

			if (!(popup instanceof L.Popup)) {
				var content = popup;

				popup = new L.Popup(options)
				    .setLatLng(latlng)
				    .setContent(content);
			}
			popup._isOpen = true;

			this._popup = popup;
			return this.addLayer(popup);
		},

		closePopup: function (popup) {
			if (!popup || popup === this._popup) {
				popup = this._popup;
				this._popup = null;
			}
			if (popup) {
				this.removeLayer(popup);
				popup._isOpen = false;
			}
			return this;
		}
	});


	/*
	 * Popup extension to L.Marker, adding popup-related methods.
	 */

	L.Marker.include({
		openPopup: function () {
			if (this._popup && this._map && !this._map.hasLayer(this._popup)) {
				this._popup.setLatLng(this._latlng);
				this._map.openPopup(this._popup);
			}

			return this;
		},

		closePopup: function () {
			if (this._popup) {
				this._popup._close();
			}
			return this;
		},

		togglePopup: function () {
			if (this._popup) {
				if (this._popup._isOpen) {
					this.closePopup();
				} else {
					this.openPopup();
				}
			}
			return this;
		},

		bindPopup: function (content, options) {
			var anchor = L.point(this.options.icon.options.popupAnchor || [0, 0]);

			anchor = anchor.add(L.Popup.prototype.options.offset);

			if (options && options.offset) {
				anchor = anchor.add(options.offset);
			}

			options = L.extend({offset: anchor}, options);

			if (!this._popupHandlersAdded) {
				this
				    .on('click', this.togglePopup, this)
				    .on('remove', this.closePopup, this)
				    .on('move', this._movePopup, this);
				this._popupHandlersAdded = true;
			}

			if (content instanceof L.Popup) {
				L.setOptions(content, options);
				this._popup = content;
				content._source = this;
			} else {
				this._popup = new L.Popup(options, this)
					.setContent(content);
			}

			return this;
		},

		setPopupContent: function (content) {
			if (this._popup) {
				this._popup.setContent(content);
			}
			return this;
		},

		unbindPopup: function () {
			if (this._popup) {
				this._popup = null;
				this
				    .off('click', this.togglePopup, this)
				    .off('remove', this.closePopup, this)
				    .off('move', this._movePopup, this);
				this._popupHandlersAdded = false;
			}
			return this;
		},

		getPopup: function () {
			return this._popup;
		},

		_movePopup: function (e) {
			this._popup.setLatLng(e.latlng);
		}
	});


	/*
	 * L.LayerGroup is a class to combine several layers into one so that
	 * you can manipulate the group (e.g. add/remove it) as one layer.
	 */

	L.LayerGroup = L.Class.extend({
		initialize: function (layers) {
			this._layers = {};

			var i, len;

			if (layers) {
				for (i = 0, len = layers.length; i < len; i++) {
					this.addLayer(layers[i]);
				}
			}
		},

		addLayer: function (layer) {
			var id = this.getLayerId(layer);

			this._layers[id] = layer;

			if (this._map) {
				this._map.addLayer(layer);
			}

			return this;
		},

		removeLayer: function (layer) {
			var id = layer in this._layers ? layer : this.getLayerId(layer);

			if (this._map && this._layers[id]) {
				this._map.removeLayer(this._layers[id]);
			}

			delete this._layers[id];

			return this;
		},

		hasLayer: function (layer) {
			if (!layer) { return false; }

			return (layer in this._layers || this.getLayerId(layer) in this._layers);
		},

		clearLayers: function () {
			this.eachLayer(this.removeLayer, this);
			return this;
		},

		invoke: function (methodName) {
			var args = Array.prototype.slice.call(arguments, 1),
			    i, layer;

			for (i in this._layers) {
				layer = this._layers[i];

				if (layer[methodName]) {
					layer[methodName].apply(layer, args);
				}
			}

			return this;
		},

		onAdd: function (map) {
			this._map = map;
			this.eachLayer(map.addLayer, map);
		},

		onRemove: function (map) {
			this.eachLayer(map.removeLayer, map);
			this._map = null;
		},

		addTo: function (map) {
			map.addLayer(this);
			return this;
		},

		eachLayer: function (method, context) {
			for (var i in this._layers) {
				method.call(context, this._layers[i]);
			}
			return this;
		},

		getLayer: function (id) {
			return this._layers[id];
		},

		getLayers: function () {
			var layers = [];

			for (var i in this._layers) {
				layers.push(this._layers[i]);
			}
			return layers;
		},

		setZIndex: function (zIndex) {
			return this.invoke('setZIndex', zIndex);
		},

		getLayerId: function (layer) {
			return L.stamp(layer);
		}
	});

	L.layerGroup = function (layers) {
		return new L.LayerGroup(layers);
	};


	/*
	 * L.FeatureGroup extends L.LayerGroup by introducing mouse events and additional methods
	 * shared between a group of interactive layers (like vectors or markers).
	 */

	L.FeatureGroup = L.LayerGroup.extend({
		includes: L.Mixin.Events,

		statics: {
			EVENTS: 'click dblclick mouseover mouseout mousemove contextmenu popupopen popupclose'
		},

		addLayer: function (layer) {
			if (this.hasLayer(layer)) {
				return this;
			}

			if ('on' in layer) {
				layer.on(L.FeatureGroup.EVENTS, this._propagateEvent, this);
			}

			L.LayerGroup.prototype.addLayer.call(this, layer);

			if (this._popupContent && layer.bindPopup) {
				layer.bindPopup(this._popupContent, this._popupOptions);
			}

			return this.fire('layeradd', {layer: layer});
		},

		removeLayer: function (layer) {
			if (!this.hasLayer(layer)) {
				return this;
			}
			if (layer in this._layers) {
				layer = this._layers[layer];
			}

			if ('off' in layer) {
				layer.off(L.FeatureGroup.EVENTS, this._propagateEvent, this);
			}

			L.LayerGroup.prototype.removeLayer.call(this, layer);

			if (this._popupContent) {
				this.invoke('unbindPopup');
			}

			return this.fire('layerremove', {layer: layer});
		},

		bindPopup: function (content, options) {
			this._popupContent = content;
			this._popupOptions = options;
			return this.invoke('bindPopup', content, options);
		},

		openPopup: function (latlng) {
			// open popup on the first layer
			for (var id in this._layers) {
				this._layers[id].openPopup(latlng);
				break;
			}
			return this;
		},

		setStyle: function (style) {
			return this.invoke('setStyle', style);
		},

		bringToFront: function () {
			return this.invoke('bringToFront');
		},

		bringToBack: function () {
			return this.invoke('bringToBack');
		},

		getBounds: function () {
			var bounds = new L.LatLngBounds();

			this.eachLayer(function (layer) {
				bounds.extend(layer instanceof L.Marker ? layer.getLatLng() : layer.getBounds());
			});

			return bounds;
		},

		_propagateEvent: function (e) {
			e = L.extend({
				layer: e.target,
				target: this
			}, e);
			this.fire(e.type, e);
		}
	});

	L.featureGroup = function (layers) {
		return new L.FeatureGroup(layers);
	};


	/*
	 * L.Path is a base class for rendering vector paths on a map. Inherited by Polyline, Circle, etc.
	 */

	L.Path = L.Class.extend({
		includes: [L.Mixin.Events],

		statics: {
			// how much to extend the clip area around the map view
			// (relative to its size, e.g. 0.5 is half the screen in each direction)
			// set it so that SVG element doesn't exceed 1280px (vectors flicker on dragend if it is)
			CLIP_PADDING: (function () {
				var max = L.Browser.mobile ? 1280 : 2000,
				    target = (max / Math.max(window.outerWidth, window.outerHeight) - 1) / 2;
				return Math.max(0, Math.min(0.5, target));
			})()
		},

		options: {
			stroke: true,
			color: '#0033ff',
			dashArray: null,
			lineCap: null,
			lineJoin: null,
			weight: 5,
			opacity: 0.5,

			fill: false,
			fillColor: null, //same as color by default
			fillOpacity: 0.2,

			clickable: true
		},

		initialize: function (options) {
			L.setOptions(this, options);
		},

		onAdd: function (map) {
			this._map = map;

			if (!this._container) {
				this._initElements();
				this._initEvents();
			}

			this.projectLatlngs();
			this._updatePath();

			if (this._container) {
				this._map._pathRoot.appendChild(this._container);
			}

			this.fire('add');

			map.on({
				'viewreset': this.projectLatlngs,
				'moveend': this._updatePath
			}, this);
		},

		addTo: function (map) {
			map.addLayer(this);
			return this;
		},

		onRemove: function (map) {
			map._pathRoot.removeChild(this._container);

			// Need to fire remove event before we set _map to null as the event hooks might need the object
			this.fire('remove');
			this._map = null;

			if (L.Browser.vml) {
				this._container = null;
				this._stroke = null;
				this._fill = null;
			}

			map.off({
				'viewreset': this.projectLatlngs,
				'moveend': this._updatePath
			}, this);
		},

		projectLatlngs: function () {
			// do all projection stuff here
		},

		setStyle: function (style) {
			L.setOptions(this, style);

			if (this._container) {
				this._updateStyle();
			}

			return this;
		},

		redraw: function () {
			if (this._map) {
				this.projectLatlngs();
				this._updatePath();
			}
			return this;
		}
	});

	L.Map.include({
		_updatePathViewport: function () {
			var p = L.Path.CLIP_PADDING,
			    size = this.getSize(),
			    panePos = L.DomUtil.getPosition(this._mapPane),
			    min = panePos.multiplyBy(-1)._subtract(size.multiplyBy(p)._round()),
			    max = min.add(size.multiplyBy(1 + p * 2)._round());

			this._pathViewport = new L.Bounds(min, max);
		}
	});


	/*
	 * Extends L.Path with SVG-specific rendering code.
	 */

	L.Path.SVG_NS = 'http://www.w3.org/2000/svg';

	L.Browser.svg = !!(document.createElementNS && document.createElementNS(L.Path.SVG_NS, 'svg').createSVGRect);

	L.Path = L.Path.extend({
		statics: {
			SVG: L.Browser.svg
		},

		bringToFront: function () {
			var root = this._map._pathRoot,
			    path = this._container;

			if (path && root.lastChild !== path) {
				root.appendChild(path);
			}
			return this;
		},

		bringToBack: function () {
			var root = this._map._pathRoot,
			    path = this._container,
			    first = root.firstChild;

			if (path && first !== path) {
				root.insertBefore(path, first);
			}
			return this;
		},

		getPathString: function () {
			// form path string here
		},

		_createElement: function (name) {
			return document.createElementNS(L.Path.SVG_NS, name);
		},

		_initElements: function () {
			this._map._initPathRoot();
			this._initPath();
			this._initStyle();
		},

		_initPath: function () {
			this._container = this._createElement('g');

			this._path = this._createElement('path');

			if (this.options.className) {
				L.DomUtil.addClass(this._path, this.options.className);
			}

			this._container.appendChild(this._path);
		},

		_initStyle: function () {
			if (this.options.stroke) {
				this._path.setAttribute('stroke-linejoin', 'round');
				this._path.setAttribute('stroke-linecap', 'round');
			}
			if (this.options.fill) {
				this._path.setAttribute('fill-rule', 'evenodd');
			}
			if (this.options.pointerEvents) {
				this._path.setAttribute('pointer-events', this.options.pointerEvents);
			}
			if (!this.options.clickable && !this.options.pointerEvents) {
				this._path.setAttribute('pointer-events', 'none');
			}
			this._updateStyle();
		},

		_updateStyle: function () {
			if (this.options.stroke) {
				this._path.setAttribute('stroke', this.options.color);
				this._path.setAttribute('stroke-opacity', this.options.opacity);
				this._path.setAttribute('stroke-width', this.options.weight);
				if (this.options.dashArray) {
					this._path.setAttribute('stroke-dasharray', this.options.dashArray);
				} else {
					this._path.removeAttribute('stroke-dasharray');
				}
				if (this.options.lineCap) {
					this._path.setAttribute('stroke-linecap', this.options.lineCap);
				}
				if (this.options.lineJoin) {
					this._path.setAttribute('stroke-linejoin', this.options.lineJoin);
				}
			} else {
				this._path.setAttribute('stroke', 'none');
			}
			if (this.options.fill) {
				this._path.setAttribute('fill', this.options.fillColor || this.options.color);
				this._path.setAttribute('fill-opacity', this.options.fillOpacity);
			} else {
				this._path.setAttribute('fill', 'none');
			}
		},

		_updatePath: function () {
			var str = this.getPathString();
			if (!str) {
				// fix webkit empty string parsing bug
				str = 'M0 0';
			}
			this._path.setAttribute('d', str);
		},

		// TODO remove duplication with L.Map
		_initEvents: function () {
			if (this.options.clickable) {
				if (L.Browser.svg || !L.Browser.vml) {
					L.DomUtil.addClass(this._path, 'leaflet-clickable');
				}

				L.DomEvent.on(this._container, 'click', this._onMouseClick, this);

				var events = ['dblclick', 'mousedown', 'mouseover',
				              'mouseout', 'mousemove', 'contextmenu'];
				for (var i = 0; i < events.length; i++) {
					L.DomEvent.on(this._container, events[i], this._fireMouseEvent, this);
				}
			}
		},

		_onMouseClick: function (e) {
			if (this._map.dragging && this._map.dragging.moved()) { return; }

			this._fireMouseEvent(e);
		},

		_fireMouseEvent: function (e) {
			if (!this._map || !this.hasEventListeners(e.type)) { return; }

			var map = this._map,
			    containerPoint = map.mouseEventToContainerPoint(e),
			    layerPoint = map.containerPointToLayerPoint(containerPoint),
			    latlng = map.layerPointToLatLng(layerPoint);

			this.fire(e.type, {
				latlng: latlng,
				layerPoint: layerPoint,
				containerPoint: containerPoint,
				originalEvent: e
			});

			if (e.type === 'contextmenu') {
				L.DomEvent.preventDefault(e);
			}
			if (e.type !== 'mousemove') {
				L.DomEvent.stopPropagation(e);
			}
		}
	});

	L.Map.include({
		_initPathRoot: function () {
			if (!this._pathRoot) {
				this._pathRoot = L.Path.prototype._createElement('svg');
				this._panes.overlayPane.appendChild(this._pathRoot);

				if (this.options.zoomAnimation && L.Browser.any3d) {
					L.DomUtil.addClass(this._pathRoot, 'leaflet-zoom-animated');

					this.on({
						'zoomanim': this._animatePathZoom,
						'zoomend': this._endPathZoom
					});
				} else {
					L.DomUtil.addClass(this._pathRoot, 'leaflet-zoom-hide');
				}

				this.on('moveend', this._updateSvgViewport);
				this._updateSvgViewport();
			}
		},

		_animatePathZoom: function (e) {
			var scale = this.getZoomScale(e.zoom),
			    offset = this._getCenterOffset(e.center)._multiplyBy(-scale)._add(this._pathViewport.min);

			this._pathRoot.style[L.DomUtil.TRANSFORM] =
			        L.DomUtil.getTranslateString(offset) + ' scale(' + scale + ') ';

			this._pathZooming = true;
		},

		_endPathZoom: function () {
			this._pathZooming = false;
		},

		_updateSvgViewport: function () {

			if (this._pathZooming) {
				// Do not update SVGs while a zoom animation is going on otherwise the animation will break.
				// When the zoom animation ends we will be updated again anyway
				// This fixes the case where you do a momentum move and zoom while the move is still ongoing.
				return;
			}

			this._updatePathViewport();

			var vp = this._pathViewport,
			    min = vp.min,
			    max = vp.max,
			    width = max.x - min.x,
			    height = max.y - min.y,
			    root = this._pathRoot,
			    pane = this._panes.overlayPane;

			// Hack to make flicker on drag end on mobile webkit less irritating
			if (L.Browser.mobileWebkit) {
				pane.removeChild(root);
			}

			L.DomUtil.setPosition(root, min);
			root.setAttribute('width', width);
			root.setAttribute('height', height);
			root.setAttribute('viewBox', [min.x, min.y, width, height].join(' '));

			if (L.Browser.mobileWebkit) {
				pane.appendChild(root);
			}
		}
	});


	/*
	 * Popup extension to L.Path (polylines, polygons, circles), adding popup-related methods.
	 */

	L.Path.include({

		bindPopup: function (content, options) {

			if (content instanceof L.Popup) {
				this._popup = content;
			} else {
				if (!this._popup || options) {
					this._popup = new L.Popup(options, this);
				}
				this._popup.setContent(content);
			}

			if (!this._popupHandlersAdded) {
				this
				    .on('click', this._openPopup, this)
				    .on('remove', this.closePopup, this);

				this._popupHandlersAdded = true;
			}

			return this;
		},

		unbindPopup: function () {
			if (this._popup) {
				this._popup = null;
				this
				    .off('click', this._openPopup)
				    .off('remove', this.closePopup);

				this._popupHandlersAdded = false;
			}
			return this;
		},

		openPopup: function (latlng) {

			if (this._popup) {
				// open the popup from one of the path's points if not specified
				latlng = latlng || this._latlng ||
				         this._latlngs[Math.floor(this._latlngs.length / 2)];

				this._openPopup({latlng: latlng});
			}

			return this;
		},

		closePopup: function () {
			if (this._popup) {
				this._popup._close();
			}
			return this;
		},

		_openPopup: function (e) {
			this._popup.setLatLng(e.latlng);
			this._map.openPopup(this._popup);
		}
	});


	/*
	 * Vector rendering for IE6-8 through VML.
	 * Thanks to Dmitry Baranovsky and his Raphael library for inspiration!
	 */

	L.Browser.vml = !L.Browser.svg && (function () {
		try {
			var div = document.createElement('div');
			div.innerHTML = '<v:shape adj="1"/>';

			var shape = div.firstChild;
			shape.style.behavior = 'url(#default#VML)';

			return shape && (typeof shape.adj === 'object');

		} catch (e) {
			return false;
		}
	}());

	L.Path = L.Browser.svg || !L.Browser.vml ? L.Path : L.Path.extend({
		statics: {
			VML: true,
			CLIP_PADDING: 0.02
		},

		_createElement: (function () {
			try {
				document.namespaces.add('lvml', 'urn:schemas-microsoft-com:vml');
				return function (name) {
					return document.createElement('<lvml:' + name + ' class="lvml">');
				};
			} catch (e) {
				return function (name) {
					return document.createElement(
					        '<' + name + ' xmlns="urn:schemas-microsoft.com:vml" class="lvml">');
				};
			}
		}()),

		_initPath: function () {
			var container = this._container = this._createElement('shape');

			L.DomUtil.addClass(container, 'leaflet-vml-shape' +
				(this.options.className ? ' ' + this.options.className : ''));

			if (this.options.clickable) {
				L.DomUtil.addClass(container, 'leaflet-clickable');
			}

			container.coordsize = '1 1';

			this._path = this._createElement('path');
			container.appendChild(this._path);

			this._map._pathRoot.appendChild(container);
		},

		_initStyle: function () {
			this._updateStyle();
		},

		_updateStyle: function () {
			var stroke = this._stroke,
			    fill = this._fill,
			    options = this.options,
			    container = this._container;

			container.stroked = options.stroke;
			container.filled = options.fill;

			if (options.stroke) {
				if (!stroke) {
					stroke = this._stroke = this._createElement('stroke');
					stroke.endcap = 'round';
					container.appendChild(stroke);
				}
				stroke.weight = options.weight + 'px';
				stroke.color = options.color;
				stroke.opacity = options.opacity;

				if (options.dashArray) {
					stroke.dashStyle = L.Util.isArray(options.dashArray) ?
					    options.dashArray.join(' ') :
					    options.dashArray.replace(/( *, *)/g, ' ');
				} else {
					stroke.dashStyle = '';
				}
				if (options.lineCap) {
					stroke.endcap = options.lineCap.replace('butt', 'flat');
				}
				if (options.lineJoin) {
					stroke.joinstyle = options.lineJoin;
				}

			} else if (stroke) {
				container.removeChild(stroke);
				this._stroke = null;
			}

			if (options.fill) {
				if (!fill) {
					fill = this._fill = this._createElement('fill');
					container.appendChild(fill);
				}
				fill.color = options.fillColor || options.color;
				fill.opacity = options.fillOpacity;

			} else if (fill) {
				container.removeChild(fill);
				this._fill = null;
			}
		},

		_updatePath: function () {
			var style = this._container.style;

			style.display = 'none';
			this._path.v = this.getPathString() + ' '; // the space fixes IE empty path string bug
			style.display = '';
		}
	});

	L.Map.include(L.Browser.svg || !L.Browser.vml ? {} : {
		_initPathRoot: function () {
			if (this._pathRoot) { return; }

			var root = this._pathRoot = document.createElement('div');
			root.className = 'leaflet-vml-container';
			this._panes.overlayPane.appendChild(root);

			this.on('moveend', this._updatePathViewport);
			this._updatePathViewport();
		}
	});


	/*
	 * Vector rendering for all browsers that support canvas.
	 */

	L.Browser.canvas = (function () {
		return !!document.createElement('canvas').getContext;
	}());

	L.Path = (L.Path.SVG && !window.L_PREFER_CANVAS) || !L.Browser.canvas ? L.Path : L.Path.extend({
		statics: {
			//CLIP_PADDING: 0.02, // not sure if there's a need to set it to a small value
			CANVAS: true,
			SVG: false
		},

		redraw: function () {
			if (this._map) {
				this.projectLatlngs();
				this._requestUpdate();
			}
			return this;
		},

		setStyle: function (style) {
			L.setOptions(this, style);

			if (this._map) {
				this._updateStyle();
				this._requestUpdate();
			}
			return this;
		},

		onRemove: function (map) {
			map
			    .off('viewreset', this.projectLatlngs, this)
			    .off('moveend', this._updatePath, this);

			if (this.options.clickable) {
				this._map.off('click', this._onClick, this);
				this._map.off('mousemove', this._onMouseMove, this);
			}

			this._requestUpdate();
			
			this.fire('remove');
			this._map = null;
		},

		_requestUpdate: function () {
			if (this._map && !L.Path._updateRequest) {
				L.Path._updateRequest = L.Util.requestAnimFrame(this._fireMapMoveEnd, this._map);
			}
		},

		_fireMapMoveEnd: function () {
			L.Path._updateRequest = null;
			this.fire('moveend');
		},

		_initElements: function () {
			this._map._initPathRoot();
			this._ctx = this._map._canvasCtx;
		},

		_updateStyle: function () {
			var options = this.options;

			if (options.stroke) {
				this._ctx.lineWidth = options.weight;
				this._ctx.strokeStyle = options.color;
			}
			if (options.fill) {
				this._ctx.fillStyle = options.fillColor || options.color;
			}

			if (options.lineCap) {
				this._ctx.lineCap = options.lineCap;
			}
			if (options.lineJoin) {
				this._ctx.lineJoin = options.lineJoin;
			}
		},

		_drawPath: function () {
			var i, j, len, len2, point, drawMethod;

			this._ctx.beginPath();

			for (i = 0, len = this._parts.length; i < len; i++) {
				for (j = 0, len2 = this._parts[i].length; j < len2; j++) {
					point = this._parts[i][j];
					drawMethod = (j === 0 ? 'move' : 'line') + 'To';

					this._ctx[drawMethod](point.x, point.y);
				}
				// TODO refactor ugly hack
				if (this instanceof L.Polygon) {
					this._ctx.closePath();
				}
			}
		},

		_checkIfEmpty: function () {
			return !this._parts.length;
		},

		_updatePath: function () {
			if (this._checkIfEmpty()) { return; }

			var ctx = this._ctx,
			    options = this.options;

			this._drawPath();
			ctx.save();
			this._updateStyle();

			if (options.fill) {
				ctx.globalAlpha = options.fillOpacity;
				ctx.fill(options.fillRule || 'evenodd');
			}

			if (options.stroke) {
				ctx.globalAlpha = options.opacity;
				ctx.stroke();
			}

			ctx.restore();

			// TODO optimization: 1 fill/stroke for all features with equal style instead of 1 for each feature
		},

		_initEvents: function () {
			if (this.options.clickable) {
				this._map.on('mousemove', this._onMouseMove, this);
				this._map.on('click dblclick contextmenu', this._fireMouseEvent, this);
			}
		},

		_fireMouseEvent: function (e) {
			if (this._containsPoint(e.layerPoint)) {
				this.fire(e.type, e);
			}
		},

		_onMouseMove: function (e) {
			if (!this._map || this._map._animatingZoom) { return; }

			// TODO don't do on each move
			if (this._containsPoint(e.layerPoint)) {
				this._ctx.canvas.style.cursor = 'pointer';
				this._mouseInside = true;
				this.fire('mouseover', e);

			} else if (this._mouseInside) {
				this._ctx.canvas.style.cursor = '';
				this._mouseInside = false;
				this.fire('mouseout', e);
			}
		}
	});

	L.Map.include((L.Path.SVG && !window.L_PREFER_CANVAS) || !L.Browser.canvas ? {} : {
		_initPathRoot: function () {
			var root = this._pathRoot,
			    ctx;

			if (!root) {
				root = this._pathRoot = document.createElement('canvas');
				root.style.position = 'absolute';
				ctx = this._canvasCtx = root.getContext('2d');

				ctx.lineCap = 'round';
				ctx.lineJoin = 'round';

				this._panes.overlayPane.appendChild(root);

				if (this.options.zoomAnimation) {
					this._pathRoot.className = 'leaflet-zoom-animated';
					this.on('zoomanim', this._animatePathZoom);
					this.on('zoomend', this._endPathZoom);
				}
				this.on('moveend', this._updateCanvasViewport);
				this._updateCanvasViewport();
			}
		},

		_updateCanvasViewport: function () {
			// don't redraw while zooming. See _updateSvgViewport for more details
			if (this._pathZooming) { return; }
			this._updatePathViewport();

			var vp = this._pathViewport,
			    min = vp.min,
			    size = vp.max.subtract(min),
			    root = this._pathRoot;

			//TODO check if this works properly on mobile webkit
			L.DomUtil.setPosition(root, min);
			root.width = size.x;
			root.height = size.y;
			root.getContext('2d').translate(-min.x, -min.y);
		}
	});


	/*
	 * L.LineUtil contains different utility functions for line segments
	 * and polylines (clipping, simplification, distances, etc.)
	 */

	/*jshint bitwise:false */ // allow bitwise operations for this file

	L.LineUtil = {

		// Simplify polyline with vertex reduction and Douglas-Peucker simplification.
		// Improves rendering performance dramatically by lessening the number of points to draw.

		simplify: function (/*Point[]*/ points, /*Number*/ tolerance) {
			if (!tolerance || !points.length) {
				return points.slice();
			}

			var sqTolerance = tolerance * tolerance;

			// stage 1: vertex reduction
			points = this._reducePoints(points, sqTolerance);

			// stage 2: Douglas-Peucker simplification
			points = this._simplifyDP(points, sqTolerance);

			return points;
		},

		// distance from a point to a segment between two points
		pointToSegmentDistance:  function (/*Point*/ p, /*Point*/ p1, /*Point*/ p2) {
			return Math.sqrt(this._sqClosestPointOnSegment(p, p1, p2, true));
		},

		closestPointOnSegment: function (/*Point*/ p, /*Point*/ p1, /*Point*/ p2) {
			return this._sqClosestPointOnSegment(p, p1, p2);
		},

		// Douglas-Peucker simplification, see http://en.wikipedia.org/wiki/Douglas-Peucker_algorithm
		_simplifyDP: function (points, sqTolerance) {

			var len = points.length,
			    ArrayConstructor = typeof Uint8Array !== undefined + '' ? Uint8Array : Array,
			    markers = new ArrayConstructor(len);

			markers[0] = markers[len - 1] = 1;

			this._simplifyDPStep(points, markers, sqTolerance, 0, len - 1);

			var i,
			    newPoints = [];

			for (i = 0; i < len; i++) {
				if (markers[i]) {
					newPoints.push(points[i]);
				}
			}

			return newPoints;
		},

		_simplifyDPStep: function (points, markers, sqTolerance, first, last) {

			var maxSqDist = 0,
			    index, i, sqDist;

			for (i = first + 1; i <= last - 1; i++) {
				sqDist = this._sqClosestPointOnSegment(points[i], points[first], points[last], true);

				if (sqDist > maxSqDist) {
					index = i;
					maxSqDist = sqDist;
				}
			}

			if (maxSqDist > sqTolerance) {
				markers[index] = 1;

				this._simplifyDPStep(points, markers, sqTolerance, first, index);
				this._simplifyDPStep(points, markers, sqTolerance, index, last);
			}
		},

		// reduce points that are too close to each other to a single point
		_reducePoints: function (points, sqTolerance) {
			var reducedPoints = [points[0]];

			for (var i = 1, prev = 0, len = points.length; i < len; i++) {
				if (this._sqDist(points[i], points[prev]) > sqTolerance) {
					reducedPoints.push(points[i]);
					prev = i;
				}
			}
			if (prev < len - 1) {
				reducedPoints.push(points[len - 1]);
			}
			return reducedPoints;
		},

		// Cohen-Sutherland line clipping algorithm.
		// Used to avoid rendering parts of a polyline that are not currently visible.

		clipSegment: function (a, b, bounds, useLastCode) {
			var codeA = useLastCode ? this._lastCode : this._getBitCode(a, bounds),
			    codeB = this._getBitCode(b, bounds),

			    codeOut, p, newCode;

			// save 2nd code to avoid calculating it on the next segment
			this._lastCode = codeB;

			while (true) {
				// if a,b is inside the clip window (trivial accept)
				if (!(codeA | codeB)) {
					return [a, b];
				// if a,b is outside the clip window (trivial reject)
				} else if (codeA & codeB) {
					return false;
				// other cases
				} else {
					codeOut = codeA || codeB;
					p = this._getEdgeIntersection(a, b, codeOut, bounds);
					newCode = this._getBitCode(p, bounds);

					if (codeOut === codeA) {
						a = p;
						codeA = newCode;
					} else {
						b = p;
						codeB = newCode;
					}
				}
			}
		},

		_getEdgeIntersection: function (a, b, code, bounds) {
			var dx = b.x - a.x,
			    dy = b.y - a.y,
			    min = bounds.min,
			    max = bounds.max;

			if (code & 8) { // top
				return new L.Point(a.x + dx * (max.y - a.y) / dy, max.y);
			} else if (code & 4) { // bottom
				return new L.Point(a.x + dx * (min.y - a.y) / dy, min.y);
			} else if (code & 2) { // right
				return new L.Point(max.x, a.y + dy * (max.x - a.x) / dx);
			} else if (code & 1) { // left
				return new L.Point(min.x, a.y + dy * (min.x - a.x) / dx);
			}
		},

		_getBitCode: function (/*Point*/ p, bounds) {
			var code = 0;

			if (p.x < bounds.min.x) { // left
				code |= 1;
			} else if (p.x > bounds.max.x) { // right
				code |= 2;
			}
			if (p.y < bounds.min.y) { // bottom
				code |= 4;
			} else if (p.y > bounds.max.y) { // top
				code |= 8;
			}

			return code;
		},

		// square distance (to avoid unnecessary Math.sqrt calls)
		_sqDist: function (p1, p2) {
			var dx = p2.x - p1.x,
			    dy = p2.y - p1.y;
			return dx * dx + dy * dy;
		},

		// return closest point on segment or distance to that point
		_sqClosestPointOnSegment: function (p, p1, p2, sqDist) {
			var x = p1.x,
			    y = p1.y,
			    dx = p2.x - x,
			    dy = p2.y - y,
			    dot = dx * dx + dy * dy,
			    t;

			if (dot > 0) {
				t = ((p.x - x) * dx + (p.y - y) * dy) / dot;

				if (t > 1) {
					x = p2.x;
					y = p2.y;
				} else if (t > 0) {
					x += dx * t;
					y += dy * t;
				}
			}

			dx = p.x - x;
			dy = p.y - y;

			return sqDist ? dx * dx + dy * dy : new L.Point(x, y);
		}
	};


	/*
	 * L.Polyline is used to display polylines on a map.
	 */

	L.Polyline = L.Path.extend({
		initialize: function (latlngs, options) {
			L.Path.prototype.initialize.call(this, options);

			this._latlngs = this._convertLatLngs(latlngs);
		},

		options: {
			// how much to simplify the polyline on each zoom level
			// more = better performance and smoother look, less = more accurate
			smoothFactor: 1.0,
			noClip: false
		},

		projectLatlngs: function () {
			this._originalPoints = [];

			for (var i = 0, len = this._latlngs.length; i < len; i++) {
				this._originalPoints[i] = this._map.latLngToLayerPoint(this._latlngs[i]);
			}
		},

		getPathString: function () {
			for (var i = 0, len = this._parts.length, str = ''; i < len; i++) {
				str += this._getPathPartStr(this._parts[i]);
			}
			return str;
		},

		getLatLngs: function () {
			return this._latlngs;
		},

		setLatLngs: function (latlngs) {
			this._latlngs = this._convertLatLngs(latlngs);
			return this.redraw();
		},

		addLatLng: function (latlng) {
			this._latlngs.push(L.latLng(latlng));
			return this.redraw();
		},

		spliceLatLngs: function () { // (Number index, Number howMany)
			var removed = [].splice.apply(this._latlngs, arguments);
			this._convertLatLngs(this._latlngs, true);
			this.redraw();
			return removed;
		},

		closestLayerPoint: function (p) {
			var minDistance = Infinity, parts = this._parts, p1, p2, minPoint = null;

			for (var j = 0, jLen = parts.length; j < jLen; j++) {
				var points = parts[j];
				for (var i = 1, len = points.length; i < len; i++) {
					p1 = points[i - 1];
					p2 = points[i];
					var sqDist = L.LineUtil._sqClosestPointOnSegment(p, p1, p2, true);
					if (sqDist < minDistance) {
						minDistance = sqDist;
						minPoint = L.LineUtil._sqClosestPointOnSegment(p, p1, p2);
					}
				}
			}
			if (minPoint) {
				minPoint.distance = Math.sqrt(minDistance);
			}
			return minPoint;
		},

		getBounds: function () {
			return new L.LatLngBounds(this.getLatLngs());
		},

		_convertLatLngs: function (latlngs, overwrite) {
			var i, len, target = overwrite ? latlngs : [];

			for (i = 0, len = latlngs.length; i < len; i++) {
				if (L.Util.isArray(latlngs[i]) && typeof latlngs[i][0] !== 'number') {
					return;
				}
				target[i] = L.latLng(latlngs[i]);
			}
			return target;
		},

		_initEvents: function () {
			L.Path.prototype._initEvents.call(this);
		},

		_getPathPartStr: function (points) {
			var round = L.Path.VML;

			for (var j = 0, len2 = points.length, str = '', p; j < len2; j++) {
				p = points[j];
				if (round) {
					p._round();
				}
				str += (j ? 'L' : 'M') + p.x + ' ' + p.y;
			}
			return str;
		},

		_clipPoints: function () {
			var points = this._originalPoints,
			    len = points.length,
			    i, k, segment;

			if (this.options.noClip) {
				this._parts = [points];
				return;
			}

			this._parts = [];

			var parts = this._parts,
			    vp = this._map._pathViewport,
			    lu = L.LineUtil;

			for (i = 0, k = 0; i < len - 1; i++) {
				segment = lu.clipSegment(points[i], points[i + 1], vp, i);
				if (!segment) {
					continue;
				}

				parts[k] = parts[k] || [];
				parts[k].push(segment[0]);

				// if segment goes out of screen, or it's the last one, it's the end of the line part
				if ((segment[1] !== points[i + 1]) || (i === len - 2)) {
					parts[k].push(segment[1]);
					k++;
				}
			}
		},

		// simplify each clipped part of the polyline
		_simplifyPoints: function () {
			var parts = this._parts,
			    lu = L.LineUtil;

			for (var i = 0, len = parts.length; i < len; i++) {
				parts[i] = lu.simplify(parts[i], this.options.smoothFactor);
			}
		},

		_updatePath: function () {
			if (!this._map) { return; }

			this._clipPoints();
			this._simplifyPoints();

			L.Path.prototype._updatePath.call(this);
		}
	});

	L.polyline = function (latlngs, options) {
		return new L.Polyline(latlngs, options);
	};


	/*
	 * L.PolyUtil contains utility functions for polygons (clipping, etc.).
	 */

	/*jshint bitwise:false */ // allow bitwise operations here

	L.PolyUtil = {};

	/*
	 * Sutherland-Hodgeman polygon clipping algorithm.
	 * Used to avoid rendering parts of a polygon that are not currently visible.
	 */
	L.PolyUtil.clipPolygon = function (points, bounds) {
		var clippedPoints,
		    edges = [1, 4, 2, 8],
		    i, j, k,
		    a, b,
		    len, edge, p,
		    lu = L.LineUtil;

		for (i = 0, len = points.length; i < len; i++) {
			points[i]._code = lu._getBitCode(points[i], bounds);
		}

		// for each edge (left, bottom, right, top)
		for (k = 0; k < 4; k++) {
			edge = edges[k];
			clippedPoints = [];

			for (i = 0, len = points.length, j = len - 1; i < len; j = i++) {
				a = points[i];
				b = points[j];

				// if a is inside the clip window
				if (!(a._code & edge)) {
					// if b is outside the clip window (a->b goes out of screen)
					if (b._code & edge) {
						p = lu._getEdgeIntersection(b, a, edge, bounds);
						p._code = lu._getBitCode(p, bounds);
						clippedPoints.push(p);
					}
					clippedPoints.push(a);

				// else if b is inside the clip window (a->b enters the screen)
				} else if (!(b._code & edge)) {
					p = lu._getEdgeIntersection(b, a, edge, bounds);
					p._code = lu._getBitCode(p, bounds);
					clippedPoints.push(p);
				}
			}
			points = clippedPoints;
		}

		return points;
	};


	/*
	 * L.Polygon is used to display polygons on a map.
	 */

	L.Polygon = L.Polyline.extend({
		options: {
			fill: true
		},

		initialize: function (latlngs, options) {
			L.Polyline.prototype.initialize.call(this, latlngs, options);
			this._initWithHoles(latlngs);
		},

		_initWithHoles: function (latlngs) {
			var i, len, hole;
			if (latlngs && L.Util.isArray(latlngs[0]) && (typeof latlngs[0][0] !== 'number')) {
				this._latlngs = this._convertLatLngs(latlngs[0]);
				this._holes = latlngs.slice(1);

				for (i = 0, len = this._holes.length; i < len; i++) {
					hole = this._holes[i] = this._convertLatLngs(this._holes[i]);
					if (hole[0].equals(hole[hole.length - 1])) {
						hole.pop();
					}
				}
			}

			// filter out last point if its equal to the first one
			latlngs = this._latlngs;

			if (latlngs.length >= 2 && latlngs[0].equals(latlngs[latlngs.length - 1])) {
				latlngs.pop();
			}
		},

		projectLatlngs: function () {
			L.Polyline.prototype.projectLatlngs.call(this);

			// project polygon holes points
			// TODO move this logic to Polyline to get rid of duplication
			this._holePoints = [];

			if (!this._holes) { return; }

			var i, j, len, len2;

			for (i = 0, len = this._holes.length; i < len; i++) {
				this._holePoints[i] = [];

				for (j = 0, len2 = this._holes[i].length; j < len2; j++) {
					this._holePoints[i][j] = this._map.latLngToLayerPoint(this._holes[i][j]);
				}
			}
		},

		setLatLngs: function (latlngs) {
			if (latlngs && L.Util.isArray(latlngs[0]) && (typeof latlngs[0][0] !== 'number')) {
				this._initWithHoles(latlngs);
				return this.redraw();
			} else {
				return L.Polyline.prototype.setLatLngs.call(this, latlngs);
			}
		},

		_clipPoints: function () {
			var points = this._originalPoints,
			    newParts = [];

			this._parts = [points].concat(this._holePoints);

			if (this.options.noClip) { return; }

			for (var i = 0, len = this._parts.length; i < len; i++) {
				var clipped = L.PolyUtil.clipPolygon(this._parts[i], this._map._pathViewport);
				if (clipped.length) {
					newParts.push(clipped);
				}
			}

			this._parts = newParts;
		},

		_getPathPartStr: function (points) {
			var str = L.Polyline.prototype._getPathPartStr.call(this, points);
			return str + (L.Browser.svg ? 'z' : 'x');
		}
	});

	L.polygon = function (latlngs, options) {
		return new L.Polygon(latlngs, options);
	};


	/*
	 * Contains L.MultiPolyline and L.MultiPolygon layers.
	 */

	(function () {
		function createMulti(Klass) {

			return L.FeatureGroup.extend({

				initialize: function (latlngs, options) {
					this._layers = {};
					this._options = options;
					this.setLatLngs(latlngs);
				},

				setLatLngs: function (latlngs) {
					var i = 0,
					    len = latlngs.length;

					this.eachLayer(function (layer) {
						if (i < len) {
							layer.setLatLngs(latlngs[i++]);
						} else {
							this.removeLayer(layer);
						}
					}, this);

					while (i < len) {
						this.addLayer(new Klass(latlngs[i++], this._options));
					}

					return this;
				},

				getLatLngs: function () {
					var latlngs = [];

					this.eachLayer(function (layer) {
						latlngs.push(layer.getLatLngs());
					});

					return latlngs;
				}
			});
		}

		L.MultiPolyline = createMulti(L.Polyline);
		L.MultiPolygon = createMulti(L.Polygon);

		L.multiPolyline = function (latlngs, options) {
			return new L.MultiPolyline(latlngs, options);
		};

		L.multiPolygon = function (latlngs, options) {
			return new L.MultiPolygon(latlngs, options);
		};
	}());


	/*
	 * L.Rectangle extends Polygon and creates a rectangle when passed a LatLngBounds object.
	 */

	L.Rectangle = L.Polygon.extend({
		initialize: function (latLngBounds, options) {
			L.Polygon.prototype.initialize.call(this, this._boundsToLatLngs(latLngBounds), options);
		},

		setBounds: function (latLngBounds) {
			this.setLatLngs(this._boundsToLatLngs(latLngBounds));
		},

		_boundsToLatLngs: function (latLngBounds) {
			latLngBounds = L.latLngBounds(latLngBounds);
			return [
				latLngBounds.getSouthWest(),
				latLngBounds.getNorthWest(),
				latLngBounds.getNorthEast(),
				latLngBounds.getSouthEast()
			];
		}
	});

	L.rectangle = function (latLngBounds, options) {
		return new L.Rectangle(latLngBounds, options);
	};


	/*
	 * L.Circle is a circle overlay (with a certain radius in meters).
	 */

	L.Circle = L.Path.extend({
		initialize: function (latlng, radius, options) {
			L.Path.prototype.initialize.call(this, options);

			this._latlng = L.latLng(latlng);
			this._mRadius = radius;
		},

		options: {
			fill: true
		},

		setLatLng: function (latlng) {
			this._latlng = L.latLng(latlng);
			return this.redraw();
		},

		setRadius: function (radius) {
			this._mRadius = radius;
			return this.redraw();
		},

		projectLatlngs: function () {
			var lngRadius = this._getLngRadius(),
			    latlng = this._latlng,
			    pointLeft = this._map.latLngToLayerPoint([latlng.lat, latlng.lng - lngRadius]);

			this._point = this._map.latLngToLayerPoint(latlng);
			this._radius = Math.max(this._point.x - pointLeft.x, 1);
		},

		getBounds: function () {
			var lngRadius = this._getLngRadius(),
			    latRadius = (this._mRadius / 40075017) * 360,
			    latlng = this._latlng;

			return new L.LatLngBounds(
			        [latlng.lat - latRadius, latlng.lng - lngRadius],
			        [latlng.lat + latRadius, latlng.lng + lngRadius]);
		},

		getLatLng: function () {
			return this._latlng;
		},

		getPathString: function () {
			var p = this._point,
			    r = this._radius;

			if (this._checkIfEmpty()) {
				return '';
			}

			if (L.Browser.svg) {
				return 'M' + p.x + ',' + (p.y - r) +
				       'A' + r + ',' + r + ',0,1,1,' +
				       (p.x - 0.1) + ',' + (p.y - r) + ' z';
			} else {
				p._round();
				r = Math.round(r);
				return 'AL ' + p.x + ',' + p.y + ' ' + r + ',' + r + ' 0,' + (65535 * 360);
			}
		},

		getRadius: function () {
			return this._mRadius;
		},

		// TODO Earth hardcoded, move into projection code!

		_getLatRadius: function () {
			return (this._mRadius / 40075017) * 360;
		},

		_getLngRadius: function () {
			return this._getLatRadius() / Math.cos(L.LatLng.DEG_TO_RAD * this._latlng.lat);
		},

		_checkIfEmpty: function () {
			if (!this._map) {
				return false;
			}
			var vp = this._map._pathViewport,
			    r = this._radius,
			    p = this._point;

			return p.x - r > vp.max.x || p.y - r > vp.max.y ||
			       p.x + r < vp.min.x || p.y + r < vp.min.y;
		}
	});

	L.circle = function (latlng, radius, options) {
		return new L.Circle(latlng, radius, options);
	};


	/*
	 * L.CircleMarker is a circle overlay with a permanent pixel radius.
	 */

	L.CircleMarker = L.Circle.extend({
		options: {
			radius: 10,
			weight: 2
		},

		initialize: function (latlng, options) {
			L.Circle.prototype.initialize.call(this, latlng, null, options);
			this._radius = this.options.radius;
		},

		projectLatlngs: function () {
			this._point = this._map.latLngToLayerPoint(this._latlng);
		},

		_updateStyle : function () {
			L.Circle.prototype._updateStyle.call(this);
			this.setRadius(this.options.radius);
		},

		setLatLng: function (latlng) {
			L.Circle.prototype.setLatLng.call(this, latlng);
			if (this._popup && this._popup._isOpen) {
				this._popup.setLatLng(latlng);
			}
			return this;
		},

		setRadius: function (radius) {
			this.options.radius = this._radius = radius;
			return this.redraw();
		},

		getRadius: function () {
			return this._radius;
		}
	});

	L.circleMarker = function (latlng, options) {
		return new L.CircleMarker(latlng, options);
	};


	/*
	 * Extends L.Polyline to be able to manually detect clicks on Canvas-rendered polylines.
	 */

	L.Polyline.include(!L.Path.CANVAS ? {} : {
		_containsPoint: function (p, closed) {
			var i, j, k, len, len2, dist, part,
			    w = this.options.weight / 2;

			if (L.Browser.touch) {
				w += 10; // polyline click tolerance on touch devices
			}

			for (i = 0, len = this._parts.length; i < len; i++) {
				part = this._parts[i];
				for (j = 0, len2 = part.length, k = len2 - 1; j < len2; k = j++) {
					if (!closed && (j === 0)) {
						continue;
					}

					dist = L.LineUtil.pointToSegmentDistance(p, part[k], part[j]);

					if (dist <= w) {
						return true;
					}
				}
			}
			return false;
		}
	});


	/*
	 * Extends L.Polygon to be able to manually detect clicks on Canvas-rendered polygons.
	 */

	L.Polygon.include(!L.Path.CANVAS ? {} : {
		_containsPoint: function (p) {
			var inside = false,
			    part, p1, p2,
			    i, j, k,
			    len, len2;

			// TODO optimization: check if within bounds first

			if (L.Polyline.prototype._containsPoint.call(this, p, true)) {
				// click on polygon border
				return true;
			}

			// ray casting algorithm for detecting if point is in polygon

			for (i = 0, len = this._parts.length; i < len; i++) {
				part = this._parts[i];

				for (j = 0, len2 = part.length, k = len2 - 1; j < len2; k = j++) {
					p1 = part[j];
					p2 = part[k];

					if (((p1.y > p.y) !== (p2.y > p.y)) &&
							(p.x < (p2.x - p1.x) * (p.y - p1.y) / (p2.y - p1.y) + p1.x)) {
						inside = !inside;
					}
				}
			}

			return inside;
		}
	});


	/*
	 * Extends L.Circle with Canvas-specific code.
	 */

	L.Circle.include(!L.Path.CANVAS ? {} : {
		_drawPath: function () {
			var p = this._point;
			this._ctx.beginPath();
			this._ctx.arc(p.x, p.y, this._radius, 0, Math.PI * 2, false);
		},

		_containsPoint: function (p) {
			var center = this._point,
			    w2 = this.options.stroke ? this.options.weight / 2 : 0;

			return (p.distanceTo(center) <= this._radius + w2);
		}
	});


	/*
	 * CircleMarker canvas specific drawing parts.
	 */

	L.CircleMarker.include(!L.Path.CANVAS ? {} : {
		_updateStyle: function () {
			L.Path.prototype._updateStyle.call(this);
		}
	});


	/*
	 * L.GeoJSON turns any GeoJSON data into a Leaflet layer.
	 */

	L.GeoJSON = L.FeatureGroup.extend({

		initialize: function (geojson, options) {
			L.setOptions(this, options);

			this._layers = {};

			if (geojson) {
				this.addData(geojson);
			}
		},

		addData: function (geojson) {
			var features = L.Util.isArray(geojson) ? geojson : geojson.features,
			    i, len, feature;

			if (features) {
				for (i = 0, len = features.length; i < len; i++) {
					// Only add this if geometry or geometries are set and not null
					feature = features[i];
					if (feature.geometries || feature.geometry || feature.features || feature.coordinates) {
						this.addData(features[i]);
					}
				}
				return this;
			}

			var options = this.options;

			if (options.filter && !options.filter(geojson)) { return; }

			var layer = L.GeoJSON.geometryToLayer(geojson, options.pointToLayer, options.coordsToLatLng, options);
			layer.feature = L.GeoJSON.asFeature(geojson);

			layer.defaultOptions = layer.options;
			this.resetStyle(layer);

			if (options.onEachFeature) {
				options.onEachFeature(geojson, layer);
			}

			return this.addLayer(layer);
		},

		resetStyle: function (layer) {
			var style = this.options.style;
			if (style) {
				// reset any custom styles
				L.Util.extend(layer.options, layer.defaultOptions);

				this._setLayerStyle(layer, style);
			}
		},

		setStyle: function (style) {
			this.eachLayer(function (layer) {
				this._setLayerStyle(layer, style);
			}, this);
		},

		_setLayerStyle: function (layer, style) {
			if (typeof style === 'function') {
				style = style(layer.feature);
			}
			if (layer.setStyle) {
				layer.setStyle(style);
			}
		}
	});

	L.extend(L.GeoJSON, {
		geometryToLayer: function (geojson, pointToLayer, coordsToLatLng, vectorOptions) {
			var geometry = geojson.type === 'Feature' ? geojson.geometry : geojson,
			    coords = geometry.coordinates,
			    layers = [],
			    latlng, latlngs, i, len;

			coordsToLatLng = coordsToLatLng || this.coordsToLatLng;

			switch (geometry.type) {
			case 'Point':
				latlng = coordsToLatLng(coords);
				return pointToLayer ? pointToLayer(geojson, latlng) : new L.Marker(latlng);

			case 'MultiPoint':
				for (i = 0, len = coords.length; i < len; i++) {
					latlng = coordsToLatLng(coords[i]);
					layers.push(pointToLayer ? pointToLayer(geojson, latlng) : new L.Marker(latlng));
				}
				return new L.FeatureGroup(layers);

			case 'LineString':
				latlngs = this.coordsToLatLngs(coords, 0, coordsToLatLng);
				return new L.Polyline(latlngs, vectorOptions);

			case 'Polygon':
				if (coords.length === 2 && !coords[1].length) {
					throw new Error('Invalid GeoJSON object.');
				}
				latlngs = this.coordsToLatLngs(coords, 1, coordsToLatLng);
				return new L.Polygon(latlngs, vectorOptions);

			case 'MultiLineString':
				latlngs = this.coordsToLatLngs(coords, 1, coordsToLatLng);
				return new L.MultiPolyline(latlngs, vectorOptions);

			case 'MultiPolygon':
				latlngs = this.coordsToLatLngs(coords, 2, coordsToLatLng);
				return new L.MultiPolygon(latlngs, vectorOptions);

			case 'GeometryCollection':
				for (i = 0, len = geometry.geometries.length; i < len; i++) {

					layers.push(this.geometryToLayer({
						geometry: geometry.geometries[i],
						type: 'Feature',
						properties: geojson.properties
					}, pointToLayer, coordsToLatLng, vectorOptions));
				}
				return new L.FeatureGroup(layers);

			default:
				throw new Error('Invalid GeoJSON object.');
			}
		},

		coordsToLatLng: function (coords) { // (Array[, Boolean]) -> LatLng
			return new L.LatLng(coords[1], coords[0], coords[2]);
		},

		coordsToLatLngs: function (coords, levelsDeep, coordsToLatLng) { // (Array[, Number, Function]) -> Array
			var latlng, i, len,
			    latlngs = [];

			for (i = 0, len = coords.length; i < len; i++) {
				latlng = levelsDeep ?
				        this.coordsToLatLngs(coords[i], levelsDeep - 1, coordsToLatLng) :
				        (coordsToLatLng || this.coordsToLatLng)(coords[i]);

				latlngs.push(latlng);
			}

			return latlngs;
		},

		latLngToCoords: function (latlng) {
			var coords = [latlng.lng, latlng.lat];

			if (latlng.alt !== undefined) {
				coords.push(latlng.alt);
			}
			return coords;
		},

		latLngsToCoords: function (latLngs) {
			var coords = [];

			for (var i = 0, len = latLngs.length; i < len; i++) {
				coords.push(L.GeoJSON.latLngToCoords(latLngs[i]));
			}

			return coords;
		},

		getFeature: function (layer, newGeometry) {
			return layer.feature ? L.extend({}, layer.feature, {geometry: newGeometry}) : L.GeoJSON.asFeature(newGeometry);
		},

		asFeature: function (geoJSON) {
			if (geoJSON.type === 'Feature') {
				return geoJSON;
			}

			return {
				type: 'Feature',
				properties: {},
				geometry: geoJSON
			};
		}
	});

	var PointToGeoJSON = {
		toGeoJSON: function () {
			return L.GeoJSON.getFeature(this, {
				type: 'Point',
				coordinates: L.GeoJSON.latLngToCoords(this.getLatLng())
			});
		}
	};

	L.Marker.include(PointToGeoJSON);
	L.Circle.include(PointToGeoJSON);
	L.CircleMarker.include(PointToGeoJSON);

	L.Polyline.include({
		toGeoJSON: function () {
			return L.GeoJSON.getFeature(this, {
				type: 'LineString',
				coordinates: L.GeoJSON.latLngsToCoords(this.getLatLngs())
			});
		}
	});

	L.Polygon.include({
		toGeoJSON: function () {
			var coords = [L.GeoJSON.latLngsToCoords(this.getLatLngs())],
			    i, len, hole;

			coords[0].push(coords[0][0]);

			if (this._holes) {
				for (i = 0, len = this._holes.length; i < len; i++) {
					hole = L.GeoJSON.latLngsToCoords(this._holes[i]);
					hole.push(hole[0]);
					coords.push(hole);
				}
			}

			return L.GeoJSON.getFeature(this, {
				type: 'Polygon',
				coordinates: coords
			});
		}
	});

	(function () {
		function multiToGeoJSON(type) {
			return function () {
				var coords = [];

				this.eachLayer(function (layer) {
					coords.push(layer.toGeoJSON().geometry.coordinates);
				});

				return L.GeoJSON.getFeature(this, {
					type: type,
					coordinates: coords
				});
			};
		}

		L.MultiPolyline.include({toGeoJSON: multiToGeoJSON('MultiLineString')});
		L.MultiPolygon.include({toGeoJSON: multiToGeoJSON('MultiPolygon')});

		L.LayerGroup.include({
			toGeoJSON: function () {

				var geometry = this.feature && this.feature.geometry,
					jsons = [],
					json;

				if (geometry && geometry.type === 'MultiPoint') {
					return multiToGeoJSON('MultiPoint').call(this);
				}

				var isGeometryCollection = geometry && geometry.type === 'GeometryCollection';

				this.eachLayer(function (layer) {
					if (layer.toGeoJSON) {
						json = layer.toGeoJSON();
						jsons.push(isGeometryCollection ? json.geometry : L.GeoJSON.asFeature(json));
					}
				});

				if (isGeometryCollection) {
					return L.GeoJSON.getFeature(this, {
						geometries: jsons,
						type: 'GeometryCollection'
					});
				}

				return {
					type: 'FeatureCollection',
					features: jsons
				};
			}
		});
	}());

	L.geoJson = function (geojson, options) {
		return new L.GeoJSON(geojson, options);
	};


	/*
	 * L.DomEvent contains functions for working with DOM events.
	 */

	L.DomEvent = {
		/* inspired by John Resig, Dean Edwards and YUI addEvent implementations */
		addListener: function (obj, type, fn, context) { // (HTMLElement, String, Function[, Object])

			var id = L.stamp(fn),
			    key = '_leaflet_' + type + id,
			    handler, originalHandler, newType;

			if (obj[key]) { return this; }

			handler = function (e) {
				return fn.call(context || obj, e || L.DomEvent._getEvent());
			};

			if (L.Browser.pointer && type.indexOf('touch') === 0) {
				return this.addPointerListener(obj, type, handler, id);
			}
			if (L.Browser.touch && (type === 'dblclick') && this.addDoubleTapListener) {
				this.addDoubleTapListener(obj, handler, id);
			}

			if ('addEventListener' in obj) {

				if (type === 'mousewheel') {
					obj.addEventListener('DOMMouseScroll', handler, false);
					obj.addEventListener(type, handler, false);

				} else if ((type === 'mouseenter') || (type === 'mouseleave')) {

					originalHandler = handler;
					newType = (type === 'mouseenter' ? 'mouseover' : 'mouseout');

					handler = function (e) {
						if (!L.DomEvent._checkMouse(obj, e)) { return; }
						return originalHandler(e);
					};

					obj.addEventListener(newType, handler, false);

				} else if (type === 'click' && L.Browser.android) {
					originalHandler = handler;
					handler = function (e) {
						return L.DomEvent._filterClick(e, originalHandler);
					};

					obj.addEventListener(type, handler, false);
				} else {
					obj.addEventListener(type, handler, false);
				}

			} else if ('attachEvent' in obj) {
				obj.attachEvent('on' + type, handler);
			}

			obj[key] = handler;

			return this;
		},

		removeListener: function (obj, type, fn) {  // (HTMLElement, String, Function)

			var id = L.stamp(fn),
			    key = '_leaflet_' + type + id,
			    handler = obj[key];

			if (!handler) { return this; }

			if (L.Browser.pointer && type.indexOf('touch') === 0) {
				this.removePointerListener(obj, type, id);
			} else if (L.Browser.touch && (type === 'dblclick') && this.removeDoubleTapListener) {
				this.removeDoubleTapListener(obj, id);

			} else if ('removeEventListener' in obj) {

				if (type === 'mousewheel') {
					obj.removeEventListener('DOMMouseScroll', handler, false);
					obj.removeEventListener(type, handler, false);

				} else if ((type === 'mouseenter') || (type === 'mouseleave')) {
					obj.removeEventListener((type === 'mouseenter' ? 'mouseover' : 'mouseout'), handler, false);
				} else {
					obj.removeEventListener(type, handler, false);
				}
			} else if ('detachEvent' in obj) {
				obj.detachEvent('on' + type, handler);
			}

			obj[key] = null;

			return this;
		},

		stopPropagation: function (e) {

			if (e.stopPropagation) {
				e.stopPropagation();
			} else {
				e.cancelBubble = true;
			}
			L.DomEvent._skipped(e);

			return this;
		},

		disableScrollPropagation: function (el) {
			var stop = L.DomEvent.stopPropagation;

			return L.DomEvent
				.on(el, 'mousewheel', stop)
				.on(el, 'MozMousePixelScroll', stop);
		},

		disableClickPropagation: function (el) {
			var stop = L.DomEvent.stopPropagation;

			for (var i = L.Draggable.START.length - 1; i >= 0; i--) {
				L.DomEvent.on(el, L.Draggable.START[i], stop);
			}

			return L.DomEvent
				.on(el, 'click', L.DomEvent._fakeStop)
				.on(el, 'dblclick', stop);
		},

		preventDefault: function (e) {

			if (e.preventDefault) {
				e.preventDefault();
			} else {
				e.returnValue = false;
			}
			return this;
		},

		stop: function (e) {
			return L.DomEvent
				.preventDefault(e)
				.stopPropagation(e);
		},

		getMousePosition: function (e, container) {
			if (!container) {
				return new L.Point(e.clientX, e.clientY);
			}

			var rect = container.getBoundingClientRect();

			return new L.Point(
				e.clientX - rect.left - container.clientLeft,
				e.clientY - rect.top - container.clientTop);
		},

		getWheelDelta: function (e) {

			var delta = 0;

			if (e.wheelDelta) {
				delta = e.wheelDelta / 120;
			}
			if (e.detail) {
				delta = -e.detail / 3;
			}
			return delta;
		},

		_skipEvents: {},

		_fakeStop: function (e) {
			// fakes stopPropagation by setting a special event flag, checked/reset with L.DomEvent._skipped(e)
			L.DomEvent._skipEvents[e.type] = true;
		},

		_skipped: function (e) {
			var skipped = this._skipEvents[e.type];
			// reset when checking, as it's only used in map container and propagates outside of the map
			this._skipEvents[e.type] = false;
			return skipped;
		},

		// check if element really left/entered the event target (for mouseenter/mouseleave)
		_checkMouse: function (el, e) {

			var related = e.relatedTarget;

			if (!related) { return true; }

			try {
				while (related && (related !== el)) {
					related = related.parentNode;
				}
			} catch (err) {
				return false;
			}
			return (related !== el);
		},

		_getEvent: function () { // evil magic for IE
			/*jshint noarg:false */
			var e = window.event;
			if (!e) {
				var caller = arguments.callee.caller;
				while (caller) {
					e = caller['arguments'][0];
					if (e && window.Event === e.constructor) {
						break;
					}
					caller = caller.caller;
				}
			}
			return e;
		},

		// this is a horrible workaround for a bug in Android where a single touch triggers two click events
		_filterClick: function (e, handler) {
			var timeStamp = (e.timeStamp || e.originalEvent.timeStamp),
				elapsed = L.DomEvent._lastClick && (timeStamp - L.DomEvent._lastClick);

			// are they closer together than 500ms yet more than 100ms?
			// Android typically triggers them ~300ms apart while multiple listeners
			// on the same event should be triggered far faster;
			// or check if click is simulated on the element, and if it is, reject any non-simulated events

			if ((elapsed && elapsed > 100 && elapsed < 500) || (e.target._simulatedClick && !e._simulated)) {
				L.DomEvent.stop(e);
				return;
			}
			L.DomEvent._lastClick = timeStamp;

			return handler(e);
		}
	};

	L.DomEvent.on = L.DomEvent.addListener;
	L.DomEvent.off = L.DomEvent.removeListener;


	/*
	 * L.Draggable allows you to add dragging capabilities to any element. Supports mobile devices too.
	 */

	L.Draggable = L.Class.extend({
		includes: L.Mixin.Events,

		statics: {
			START: L.Browser.touch ? ['touchstart', 'mousedown'] : ['mousedown'],
			END: {
				mousedown: 'mouseup',
				touchstart: 'touchend',
				pointerdown: 'touchend',
				MSPointerDown: 'touchend'
			},
			MOVE: {
				mousedown: 'mousemove',
				touchstart: 'touchmove',
				pointerdown: 'touchmove',
				MSPointerDown: 'touchmove'
			}
		},

		initialize: function (element, dragStartTarget) {
			this._element = element;
			this._dragStartTarget = dragStartTarget || element;
		},

		enable: function () {
			if (this._enabled) { return; }

			for (var i = L.Draggable.START.length - 1; i >= 0; i--) {
				L.DomEvent.on(this._dragStartTarget, L.Draggable.START[i], this._onDown, this);
			}

			this._enabled = true;
		},

		disable: function () {
			if (!this._enabled) { return; }

			for (var i = L.Draggable.START.length - 1; i >= 0; i--) {
				L.DomEvent.off(this._dragStartTarget, L.Draggable.START[i], this._onDown, this);
			}

			this._enabled = false;
			this._moved = false;
		},

		_onDown: function (e) {
			this._moved = false;

			if (e.shiftKey || ((e.which !== 1) && (e.button !== 1) && !e.touches)) { return; }

			L.DomEvent.stopPropagation(e);

			if (L.Draggable._disabled) { return; }

			L.DomUtil.disableImageDrag();
			L.DomUtil.disableTextSelection();

			if (this._moving) { return; }

			var first = e.touches ? e.touches[0] : e;

			this._startPoint = new L.Point(first.clientX, first.clientY);
			this._startPos = this._newPos = L.DomUtil.getPosition(this._element);

			L.DomEvent
			    .on(document, L.Draggable.MOVE[e.type], this._onMove, this)
			    .on(document, L.Draggable.END[e.type], this._onUp, this);
		},

		_onMove: function (e) {
			if (e.touches && e.touches.length > 1) {
				this._moved = true;
				return;
			}

			var first = (e.touches && e.touches.length === 1 ? e.touches[0] : e),
			    newPoint = new L.Point(first.clientX, first.clientY),
			    offset = newPoint.subtract(this._startPoint);

			if (!offset.x && !offset.y) { return; }
			if (L.Browser.touch && Math.abs(offset.x) + Math.abs(offset.y) < 3) { return; }

			L.DomEvent.preventDefault(e);

			if (!this._moved) {
				this.fire('dragstart');

				this._moved = true;
				this._startPos = L.DomUtil.getPosition(this._element).subtract(offset);

				L.DomUtil.addClass(document.body, 'leaflet-dragging');
				this._lastTarget = e.target || e.srcElement;
				L.DomUtil.addClass(this._lastTarget, 'leaflet-drag-target');
			}

			this._newPos = this._startPos.add(offset);
			this._moving = true;

			L.Util.cancelAnimFrame(this._animRequest);
			this._animRequest = L.Util.requestAnimFrame(this._updatePosition, this, true, this._dragStartTarget);
		},

		_updatePosition: function () {
			this.fire('predrag');
			L.DomUtil.setPosition(this._element, this._newPos);
			this.fire('drag');
		},

		_onUp: function () {
			L.DomUtil.removeClass(document.body, 'leaflet-dragging');

			if (this._lastTarget) {
				L.DomUtil.removeClass(this._lastTarget, 'leaflet-drag-target');
				this._lastTarget = null;
			}

			for (var i in L.Draggable.MOVE) {
				L.DomEvent
				    .off(document, L.Draggable.MOVE[i], this._onMove)
				    .off(document, L.Draggable.END[i], this._onUp);
			}

			L.DomUtil.enableImageDrag();
			L.DomUtil.enableTextSelection();

			if (this._moved && this._moving) {
				// ensure drag is not fired after dragend
				L.Util.cancelAnimFrame(this._animRequest);

				this.fire('dragend', {
					distance: this._newPos.distanceTo(this._startPos)
				});
			}

			this._moving = false;
		}
	});


	/*
		L.Handler is a base class for handler classes that are used internally to inject
		interaction features like dragging to classes like Map and Marker.
	*/

	L.Handler = L.Class.extend({
		initialize: function (map) {
			this._map = map;
		},

		enable: function () {
			if (this._enabled) { return; }

			this._enabled = true;
			this.addHooks();
		},

		disable: function () {
			if (!this._enabled) { return; }

			this._enabled = false;
			this.removeHooks();
		},

		enabled: function () {
			return !!this._enabled;
		}
	});


	/*
	 * L.Handler.MapDrag is used to make the map draggable (with panning inertia), enabled by default.
	 */

	L.Map.mergeOptions({
		dragging: true,

		inertia: !L.Browser.android23,
		inertiaDeceleration: 3400, // px/s^2
		inertiaMaxSpeed: Infinity, // px/s
		inertiaThreshold: L.Browser.touch ? 32 : 18, // ms
		easeLinearity: 0.25,

		// TODO refactor, move to CRS
		worldCopyJump: false
	});

	L.Map.Drag = L.Handler.extend({
		addHooks: function () {
			if (!this._draggable) {
				var map = this._map;

				this._draggable = new L.Draggable(map._mapPane, map._container);

				this._draggable.on({
					'dragstart': this._onDragStart,
					'drag': this._onDrag,
					'dragend': this._onDragEnd
				}, this);

				if (map.options.worldCopyJump) {
					this._draggable.on('predrag', this._onPreDrag, this);
					map.on('viewreset', this._onViewReset, this);

					map.whenReady(this._onViewReset, this);
				}
			}
			this._draggable.enable();
		},

		removeHooks: function () {
			this._draggable.disable();
		},

		moved: function () {
			return this._draggable && this._draggable._moved;
		},

		_onDragStart: function () {
			var map = this._map;

			if (map._panAnim) {
				map._panAnim.stop();
			}

			map
			    .fire('movestart')
			    .fire('dragstart');

			if (map.options.inertia) {
				this._positions = [];
				this._times = [];
			}
		},

		_onDrag: function () {
			if (this._map.options.inertia) {
				var time = this._lastTime = +new Date(),
				    pos = this._lastPos = this._draggable._newPos;

				this._positions.push(pos);
				this._times.push(time);

				if (time - this._times[0] > 200) {
					this._positions.shift();
					this._times.shift();
				}
			}

			this._map
			    .fire('move')
			    .fire('drag');
		},

		_onViewReset: function () {
			// TODO fix hardcoded Earth values
			var pxCenter = this._map.getSize()._divideBy(2),
			    pxWorldCenter = this._map.latLngToLayerPoint([0, 0]);

			this._initialWorldOffset = pxWorldCenter.subtract(pxCenter).x;
			this._worldWidth = this._map.project([0, 180]).x;
		},

		_onPreDrag: function () {
			// TODO refactor to be able to adjust map pane position after zoom
			var worldWidth = this._worldWidth,
			    halfWidth = Math.round(worldWidth / 2),
			    dx = this._initialWorldOffset,
			    x = this._draggable._newPos.x,
			    newX1 = (x - halfWidth + dx) % worldWidth + halfWidth - dx,
			    newX2 = (x + halfWidth + dx) % worldWidth - halfWidth - dx,
			    newX = Math.abs(newX1 + dx) < Math.abs(newX2 + dx) ? newX1 : newX2;

			this._draggable._newPos.x = newX;
		},

		_onDragEnd: function (e) {
			var map = this._map,
			    options = map.options,
			    delay = +new Date() - this._lastTime,

			    noInertia = !options.inertia || delay > options.inertiaThreshold || !this._positions[0];

			map.fire('dragend', e);

			if (noInertia) {
				map.fire('moveend');

			} else {

				var direction = this._lastPos.subtract(this._positions[0]),
				    duration = (this._lastTime + delay - this._times[0]) / 1000,
				    ease = options.easeLinearity,

				    speedVector = direction.multiplyBy(ease / duration),
				    speed = speedVector.distanceTo([0, 0]),

				    limitedSpeed = Math.min(options.inertiaMaxSpeed, speed),
				    limitedSpeedVector = speedVector.multiplyBy(limitedSpeed / speed),

				    decelerationDuration = limitedSpeed / (options.inertiaDeceleration * ease),
				    offset = limitedSpeedVector.multiplyBy(-decelerationDuration / 2).round();

				if (!offset.x || !offset.y) {
					map.fire('moveend');

				} else {
					offset = map._limitOffset(offset, map.options.maxBounds);

					L.Util.requestAnimFrame(function () {
						map.panBy(offset, {
							duration: decelerationDuration,
							easeLinearity: ease,
							noMoveStart: true
						});
					});
				}
			}
		}
	});

	L.Map.addInitHook('addHandler', 'dragging', L.Map.Drag);


	/*
	 * L.Handler.DoubleClickZoom is used to handle double-click zoom on the map, enabled by default.
	 */

	L.Map.mergeOptions({
		doubleClickZoom: true
	});

	L.Map.DoubleClickZoom = L.Handler.extend({
		addHooks: function () {
			this._map.on('dblclick', this._onDoubleClick, this);
		},

		removeHooks: function () {
			this._map.off('dblclick', this._onDoubleClick, this);
		},

		_onDoubleClick: function (e) {
			var map = this._map,
			    zoom = map.getZoom() + (e.originalEvent.shiftKey ? -1 : 1);

			if (map.options.doubleClickZoom === 'center') {
				map.setZoom(zoom);
			} else {
				map.setZoomAround(e.containerPoint, zoom);
			}
		}
	});

	L.Map.addInitHook('addHandler', 'doubleClickZoom', L.Map.DoubleClickZoom);


	/*
	 * L.Handler.ScrollWheelZoom is used by L.Map to enable mouse scroll wheel zoom on the map.
	 */

	L.Map.mergeOptions({
		scrollWheelZoom: true
	});

	L.Map.ScrollWheelZoom = L.Handler.extend({
		addHooks: function () {
			L.DomEvent.on(this._map._container, 'mousewheel', this._onWheelScroll, this);
			L.DomEvent.on(this._map._container, 'MozMousePixelScroll', L.DomEvent.preventDefault);
			this._delta = 0;
		},

		removeHooks: function () {
			L.DomEvent.off(this._map._container, 'mousewheel', this._onWheelScroll);
			L.DomEvent.off(this._map._container, 'MozMousePixelScroll', L.DomEvent.preventDefault);
		},

		_onWheelScroll: function (e) {
			var delta = L.DomEvent.getWheelDelta(e);

			this._delta += delta;
			this._lastMousePos = this._map.mouseEventToContainerPoint(e);

			if (!this._startTime) {
				this._startTime = +new Date();
			}

			var left = Math.max(40 - (+new Date() - this._startTime), 0);

			clearTimeout(this._timer);
			this._timer = setTimeout(L.bind(this._performZoom, this), left);

			L.DomEvent.preventDefault(e);
			L.DomEvent.stopPropagation(e);
		},

		_performZoom: function () {
			var map = this._map,
			    delta = this._delta,
			    zoom = map.getZoom();

			delta = delta > 0 ? Math.ceil(delta) : Math.floor(delta);
			delta = Math.max(Math.min(delta, 4), -4);
			delta = map._limitZoom(zoom + delta) - zoom;

			this._delta = 0;
			this._startTime = null;

			if (!delta) { return; }

			if (map.options.scrollWheelZoom === 'center') {
				map.setZoom(zoom + delta);
			} else {
				map.setZoomAround(this._lastMousePos, zoom + delta);
			}
		}
	});

	L.Map.addInitHook('addHandler', 'scrollWheelZoom', L.Map.ScrollWheelZoom);


	/*
	 * Extends the event handling code with double tap support for mobile browsers.
	 */

	L.extend(L.DomEvent, {

		_touchstart: L.Browser.msPointer ? 'MSPointerDown' : L.Browser.pointer ? 'pointerdown' : 'touchstart',
		_touchend: L.Browser.msPointer ? 'MSPointerUp' : L.Browser.pointer ? 'pointerup' : 'touchend',

		// inspired by Zepto touch code by Thomas Fuchs
		addDoubleTapListener: function (obj, handler, id) {
			var last,
			    doubleTap = false,
			    delay = 250,
			    touch,
			    pre = '_leaflet_',
			    touchstart = this._touchstart,
			    touchend = this._touchend,
			    trackedTouches = [];

			function onTouchStart(e) {
				var count;

				if (L.Browser.pointer) {
					trackedTouches.push(e.pointerId);
					count = trackedTouches.length;
				} else {
					count = e.touches.length;
				}
				if (count > 1) {
					return;
				}

				var now = Date.now(),
					delta = now - (last || now);

				touch = e.touches ? e.touches[0] : e;
				doubleTap = (delta > 0 && delta <= delay);
				last = now;
			}

			function onTouchEnd(e) {
				if (L.Browser.pointer) {
					var idx = trackedTouches.indexOf(e.pointerId);
					if (idx === -1) {
						return;
					}
					trackedTouches.splice(idx, 1);
				}

				if (doubleTap) {
					if (L.Browser.pointer) {
						// work around .type being readonly with MSPointer* events
						var newTouch = { },
							prop;

						// jshint forin:false
						for (var i in touch) {
							prop = touch[i];
							if (typeof prop === 'function') {
								newTouch[i] = prop.bind(touch);
							} else {
								newTouch[i] = prop;
							}
						}
						touch = newTouch;
					}
					touch.type = 'dblclick';
					handler(touch);
					last = null;
				}
			}
			obj[pre + touchstart + id] = onTouchStart;
			obj[pre + touchend + id] = onTouchEnd;

			// on pointer we need to listen on the document, otherwise a drag starting on the map and moving off screen
			// will not come through to us, so we will lose track of how many touches are ongoing
			var endElement = L.Browser.pointer ? document.documentElement : obj;

			obj.addEventListener(touchstart, onTouchStart, false);
			endElement.addEventListener(touchend, onTouchEnd, false);

			if (L.Browser.pointer) {
				endElement.addEventListener(L.DomEvent.POINTER_CANCEL, onTouchEnd, false);
			}

			return this;
		},

		removeDoubleTapListener: function (obj, id) {
			var pre = '_leaflet_';

			obj.removeEventListener(this._touchstart, obj[pre + this._touchstart + id], false);
			(L.Browser.pointer ? document.documentElement : obj).removeEventListener(
			        this._touchend, obj[pre + this._touchend + id], false);

			if (L.Browser.pointer) {
				document.documentElement.removeEventListener(L.DomEvent.POINTER_CANCEL, obj[pre + this._touchend + id],
					false);
			}

			return this;
		}
	});


	/*
	 * Extends L.DomEvent to provide touch support for Internet Explorer and Windows-based devices.
	 */

	L.extend(L.DomEvent, {

		//static
		POINTER_DOWN: L.Browser.msPointer ? 'MSPointerDown' : 'pointerdown',
		POINTER_MOVE: L.Browser.msPointer ? 'MSPointerMove' : 'pointermove',
		POINTER_UP: L.Browser.msPointer ? 'MSPointerUp' : 'pointerup',
		POINTER_CANCEL: L.Browser.msPointer ? 'MSPointerCancel' : 'pointercancel',

		_pointers: [],
		_pointerDocumentListener: false,

		// Provides a touch events wrapper for (ms)pointer events.
		// Based on changes by veproza https://github.com/CloudMade/Leaflet/pull/1019
		//ref http://www.w3.org/TR/pointerevents/ https://www.w3.org/Bugs/Public/show_bug.cgi?id=22890

		addPointerListener: function (obj, type, handler, id) {

			switch (type) {
			case 'touchstart':
				return this.addPointerListenerStart(obj, type, handler, id);
			case 'touchend':
				return this.addPointerListenerEnd(obj, type, handler, id);
			case 'touchmove':
				return this.addPointerListenerMove(obj, type, handler, id);
			default:
				throw 'Unknown touch event type';
			}
		},

		addPointerListenerStart: function (obj, type, handler, id) {
			var pre = '_leaflet_',
			    pointers = this._pointers;

			var cb = function (e) {
				if (e.pointerType !== 'mouse' && e.pointerType !== e.MSPOINTER_TYPE_MOUSE) {
					L.DomEvent.preventDefault(e);
				}

				var alreadyInArray = false;
				for (var i = 0; i < pointers.length; i++) {
					if (pointers[i].pointerId === e.pointerId) {
						alreadyInArray = true;
						break;
					}
				}
				if (!alreadyInArray) {
					pointers.push(e);
				}

				e.touches = pointers.slice();
				e.changedTouches = [e];

				handler(e);
			};

			obj[pre + 'touchstart' + id] = cb;
			obj.addEventListener(this.POINTER_DOWN, cb, false);

			// need to also listen for end events to keep the _pointers list accurate
			// this needs to be on the body and never go away
			if (!this._pointerDocumentListener) {
				var internalCb = function (e) {
					for (var i = 0; i < pointers.length; i++) {
						if (pointers[i].pointerId === e.pointerId) {
							pointers.splice(i, 1);
							break;
						}
					}
				};
				//We listen on the documentElement as any drags that end by moving the touch off the screen get fired there
				document.documentElement.addEventListener(this.POINTER_UP, internalCb, false);
				document.documentElement.addEventListener(this.POINTER_CANCEL, internalCb, false);

				this._pointerDocumentListener = true;
			}

			return this;
		},

		addPointerListenerMove: function (obj, type, handler, id) {
			var pre = '_leaflet_',
			    touches = this._pointers;

			function cb(e) {

				// don't fire touch moves when mouse isn't down
				if ((e.pointerType === e.MSPOINTER_TYPE_MOUSE || e.pointerType === 'mouse') && e.buttons === 0) { return; }

				for (var i = 0; i < touches.length; i++) {
					if (touches[i].pointerId === e.pointerId) {
						touches[i] = e;
						break;
					}
				}

				e.touches = touches.slice();
				e.changedTouches = [e];

				handler(e);
			}

			obj[pre + 'touchmove' + id] = cb;
			obj.addEventListener(this.POINTER_MOVE, cb, false);

			return this;
		},

		addPointerListenerEnd: function (obj, type, handler, id) {
			var pre = '_leaflet_',
			    touches = this._pointers;

			var cb = function (e) {
				for (var i = 0; i < touches.length; i++) {
					if (touches[i].pointerId === e.pointerId) {
						touches.splice(i, 1);
						break;
					}
				}

				e.touches = touches.slice();
				e.changedTouches = [e];

				handler(e);
			};

			obj[pre + 'touchend' + id] = cb;
			obj.addEventListener(this.POINTER_UP, cb, false);
			obj.addEventListener(this.POINTER_CANCEL, cb, false);

			return this;
		},

		removePointerListener: function (obj, type, id) {
			var pre = '_leaflet_',
			    cb = obj[pre + type + id];

			switch (type) {
			case 'touchstart':
				obj.removeEventListener(this.POINTER_DOWN, cb, false);
				break;
			case 'touchmove':
				obj.removeEventListener(this.POINTER_MOVE, cb, false);
				break;
			case 'touchend':
				obj.removeEventListener(this.POINTER_UP, cb, false);
				obj.removeEventListener(this.POINTER_CANCEL, cb, false);
				break;
			}

			return this;
		}
	});


	/*
	 * L.Handler.TouchZoom is used by L.Map to add pinch zoom on supported mobile browsers.
	 */

	L.Map.mergeOptions({
		touchZoom: L.Browser.touch && !L.Browser.android23,
		bounceAtZoomLimits: true
	});

	L.Map.TouchZoom = L.Handler.extend({
		addHooks: function () {
			L.DomEvent.on(this._map._container, 'touchstart', this._onTouchStart, this);
		},

		removeHooks: function () {
			L.DomEvent.off(this._map._container, 'touchstart', this._onTouchStart, this);
		},

		_onTouchStart: function (e) {
			var map = this._map;

			if (!e.touches || e.touches.length !== 2 || map._animatingZoom || this._zooming) { return; }

			var p1 = map.mouseEventToLayerPoint(e.touches[0]),
			    p2 = map.mouseEventToLayerPoint(e.touches[1]),
			    viewCenter = map._getCenterLayerPoint();

			this._startCenter = p1.add(p2)._divideBy(2);
			this._startDist = p1.distanceTo(p2);

			this._moved = false;
			this._zooming = true;

			this._centerOffset = viewCenter.subtract(this._startCenter);

			if (map._panAnim) {
				map._panAnim.stop();
			}

			L.DomEvent
			    .on(document, 'touchmove', this._onTouchMove, this)
			    .on(document, 'touchend', this._onTouchEnd, this);

			L.DomEvent.preventDefault(e);
		},

		_onTouchMove: function (e) {
			var map = this._map;

			if (!e.touches || e.touches.length !== 2 || !this._zooming) { return; }

			var p1 = map.mouseEventToLayerPoint(e.touches[0]),
			    p2 = map.mouseEventToLayerPoint(e.touches[1]);

			this._scale = p1.distanceTo(p2) / this._startDist;
			this._delta = p1._add(p2)._divideBy(2)._subtract(this._startCenter);

			if (this._scale === 1) { return; }

			if (!map.options.bounceAtZoomLimits) {
				if ((map.getZoom() === map.getMinZoom() && this._scale < 1) ||
				    (map.getZoom() === map.getMaxZoom() && this._scale > 1)) { return; }
			}

			if (!this._moved) {
				L.DomUtil.addClass(map._mapPane, 'leaflet-touching');

				map
				    .fire('movestart')
				    .fire('zoomstart');

				this._moved = true;
			}

			L.Util.cancelAnimFrame(this._animRequest);
			this._animRequest = L.Util.requestAnimFrame(
			        this._updateOnMove, this, true, this._map._container);

			L.DomEvent.preventDefault(e);
		},

		_updateOnMove: function () {
			var map = this._map,
			    origin = this._getScaleOrigin(),
			    center = map.layerPointToLatLng(origin),
			    zoom = map.getScaleZoom(this._scale);

			map._animateZoom(center, zoom, this._startCenter, this._scale, this._delta, false, true);
		},

		_onTouchEnd: function () {
			if (!this._moved || !this._zooming) {
				this._zooming = false;
				return;
			}

			var map = this._map;

			this._zooming = false;
			L.DomUtil.removeClass(map._mapPane, 'leaflet-touching');
			L.Util.cancelAnimFrame(this._animRequest);

			L.DomEvent
			    .off(document, 'touchmove', this._onTouchMove)
			    .off(document, 'touchend', this._onTouchEnd);

			var origin = this._getScaleOrigin(),
			    center = map.layerPointToLatLng(origin),

			    oldZoom = map.getZoom(),
			    floatZoomDelta = map.getScaleZoom(this._scale) - oldZoom,
			    roundZoomDelta = (floatZoomDelta > 0 ?
			            Math.ceil(floatZoomDelta) : Math.floor(floatZoomDelta)),

			    zoom = map._limitZoom(oldZoom + roundZoomDelta),
			    scale = map.getZoomScale(zoom) / this._scale;

			map._animateZoom(center, zoom, origin, scale);
		},

		_getScaleOrigin: function () {
			var centerOffset = this._centerOffset.subtract(this._delta).divideBy(this._scale);
			return this._startCenter.add(centerOffset);
		}
	});

	L.Map.addInitHook('addHandler', 'touchZoom', L.Map.TouchZoom);


	/*
	 * L.Map.Tap is used to enable mobile hacks like quick taps and long hold.
	 */

	L.Map.mergeOptions({
		tap: true,
		tapTolerance: 15
	});

	L.Map.Tap = L.Handler.extend({
		addHooks: function () {
			L.DomEvent.on(this._map._container, 'touchstart', this._onDown, this);
		},

		removeHooks: function () {
			L.DomEvent.off(this._map._container, 'touchstart', this._onDown, this);
		},

		_onDown: function (e) {
			if (!e.touches) { return; }

			L.DomEvent.preventDefault(e);

			this._fireClick = true;

			// don't simulate click or track longpress if more than 1 touch
			if (e.touches.length > 1) {
				this._fireClick = false;
				clearTimeout(this._holdTimeout);
				return;
			}

			var first = e.touches[0],
			    el = first.target;

			this._startPos = this._newPos = new L.Point(first.clientX, first.clientY);

			// if touching a link, highlight it
			if (el.tagName && el.tagName.toLowerCase() === 'a') {
				L.DomUtil.addClass(el, 'leaflet-active');
			}

			// simulate long hold but setting a timeout
			this._holdTimeout = setTimeout(L.bind(function () {
				if (this._isTapValid()) {
					this._fireClick = false;
					this._onUp();
					this._simulateEvent('contextmenu', first);
				}
			}, this), 1000);

			L.DomEvent
				.on(document, 'touchmove', this._onMove, this)
				.on(document, 'touchend', this._onUp, this);
		},

		_onUp: function (e) {
			clearTimeout(this._holdTimeout);

			L.DomEvent
				.off(document, 'touchmove', this._onMove, this)
				.off(document, 'touchend', this._onUp, this);

			if (this._fireClick && e && e.changedTouches) {

				var first = e.changedTouches[0],
				    el = first.target;

				if (el && el.tagName && el.tagName.toLowerCase() === 'a') {
					L.DomUtil.removeClass(el, 'leaflet-active');
				}

				// simulate click if the touch didn't move too much
				if (this._isTapValid()) {
					this._simulateEvent('click', first);
				}
			}
		},

		_isTapValid: function () {
			return this._newPos.distanceTo(this._startPos) <= this._map.options.tapTolerance;
		},

		_onMove: function (e) {
			var first = e.touches[0];
			this._newPos = new L.Point(first.clientX, first.clientY);
		},

		_simulateEvent: function (type, e) {
			var simulatedEvent = document.createEvent('MouseEvents');

			simulatedEvent._simulated = true;
			e.target._simulatedClick = true;

			simulatedEvent.initMouseEvent(
			        type, true, true, window, 1,
			        e.screenX, e.screenY,
			        e.clientX, e.clientY,
			        false, false, false, false, 0, null);

			e.target.dispatchEvent(simulatedEvent);
		}
	});

	if (L.Browser.touch && !L.Browser.pointer) {
		L.Map.addInitHook('addHandler', 'tap', L.Map.Tap);
	}


	/*
	 * L.Handler.ShiftDragZoom is used to add shift-drag zoom interaction to the map
	  * (zoom to a selected bounding box), enabled by default.
	 */

	L.Map.mergeOptions({
		boxZoom: true
	});

	L.Map.BoxZoom = L.Handler.extend({
		initialize: function (map) {
			this._map = map;
			this._container = map._container;
			this._pane = map._panes.overlayPane;
			this._moved = false;
		},

		addHooks: function () {
			L.DomEvent.on(this._container, 'mousedown', this._onMouseDown, this);
		},

		removeHooks: function () {
			L.DomEvent.off(this._container, 'mousedown', this._onMouseDown);
			this._moved = false;
		},

		moved: function () {
			return this._moved;
		},

		_onMouseDown: function (e) {
			this._moved = false;

			if (!e.shiftKey || ((e.which !== 1) && (e.button !== 1))) { return false; }

			L.DomUtil.disableTextSelection();
			L.DomUtil.disableImageDrag();

			this._startLayerPoint = this._map.mouseEventToLayerPoint(e);

			L.DomEvent
			    .on(document, 'mousemove', this._onMouseMove, this)
			    .on(document, 'mouseup', this._onMouseUp, this)
			    .on(document, 'keydown', this._onKeyDown, this);
		},

		_onMouseMove: function (e) {
			if (!this._moved) {
				this._box = L.DomUtil.create('div', 'leaflet-zoom-box', this._pane);
				L.DomUtil.setPosition(this._box, this._startLayerPoint);

				//TODO refactor: move cursor to styles
				this._container.style.cursor = 'crosshair';
				this._map.fire('boxzoomstart');
			}

			var startPoint = this._startLayerPoint,
			    box = this._box,

			    layerPoint = this._map.mouseEventToLayerPoint(e),
			    offset = layerPoint.subtract(startPoint),

			    newPos = new L.Point(
			        Math.min(layerPoint.x, startPoint.x),
			        Math.min(layerPoint.y, startPoint.y));

			L.DomUtil.setPosition(box, newPos);

			this._moved = true;

			// TODO refactor: remove hardcoded 4 pixels
			box.style.width  = (Math.max(0, Math.abs(offset.x) - 4)) + 'px';
			box.style.height = (Math.max(0, Math.abs(offset.y) - 4)) + 'px';
		},

		_finish: function () {
			if (this._moved) {
				this._pane.removeChild(this._box);
				this._container.style.cursor = '';
			}

			L.DomUtil.enableTextSelection();
			L.DomUtil.enableImageDrag();

			L.DomEvent
			    .off(document, 'mousemove', this._onMouseMove)
			    .off(document, 'mouseup', this._onMouseUp)
			    .off(document, 'keydown', this._onKeyDown);
		},

		_onMouseUp: function (e) {

			this._finish();

			var map = this._map,
			    layerPoint = map.mouseEventToLayerPoint(e);

			if (this._startLayerPoint.equals(layerPoint)) { return; }

			var bounds = new L.LatLngBounds(
			        map.layerPointToLatLng(this._startLayerPoint),
			        map.layerPointToLatLng(layerPoint));

			map.fitBounds(bounds);

			map.fire('boxzoomend', {
				boxZoomBounds: bounds
			});
		},

		_onKeyDown: function (e) {
			if (e.keyCode === 27) {
				this._finish();
			}
		}
	});

	L.Map.addInitHook('addHandler', 'boxZoom', L.Map.BoxZoom);


	/*
	 * L.Map.Keyboard is handling keyboard interaction with the map, enabled by default.
	 */

	L.Map.mergeOptions({
		keyboard: true,
		keyboardPanOffset: 80,
		keyboardZoomOffset: 1
	});

	L.Map.Keyboard = L.Handler.extend({

		keyCodes: {
			left:    [37],
			right:   [39],
			down:    [40],
			up:      [38],
			zoomIn:  [187, 107, 61, 171],
			zoomOut: [189, 109, 173]
		},

		initialize: function (map) {
			this._map = map;

			this._setPanOffset(map.options.keyboardPanOffset);
			this._setZoomOffset(map.options.keyboardZoomOffset);
		},

		addHooks: function () {
			var container = this._map._container;

			// make the container focusable by tabbing
			if (container.tabIndex === -1) {
				container.tabIndex = '0';
			}

			L.DomEvent
			    .on(container, 'focus', this._onFocus, this)
			    .on(container, 'blur', this._onBlur, this)
			    .on(container, 'mousedown', this._onMouseDown, this);

			this._map
			    .on('focus', this._addHooks, this)
			    .on('blur', this._removeHooks, this);
		},

		removeHooks: function () {
			this._removeHooks();

			var container = this._map._container;

			L.DomEvent
			    .off(container, 'focus', this._onFocus, this)
			    .off(container, 'blur', this._onBlur, this)
			    .off(container, 'mousedown', this._onMouseDown, this);

			this._map
			    .off('focus', this._addHooks, this)
			    .off('blur', this._removeHooks, this);
		},

		_onMouseDown: function () {
			if (this._focused) { return; }

			var body = document.body,
			    docEl = document.documentElement,
			    top = body.scrollTop || docEl.scrollTop,
			    left = body.scrollLeft || docEl.scrollLeft;

			this._map._container.focus();

			window.scrollTo(left, top);
		},

		_onFocus: function () {
			this._focused = true;
			this._map.fire('focus');
		},

		_onBlur: function () {
			this._focused = false;
			this._map.fire('blur');
		},

		_setPanOffset: function (pan) {
			var keys = this._panKeys = {},
			    codes = this.keyCodes,
			    i, len;

			for (i = 0, len = codes.left.length; i < len; i++) {
				keys[codes.left[i]] = [-1 * pan, 0];
			}
			for (i = 0, len = codes.right.length; i < len; i++) {
				keys[codes.right[i]] = [pan, 0];
			}
			for (i = 0, len = codes.down.length; i < len; i++) {
				keys[codes.down[i]] = [0, pan];
			}
			for (i = 0, len = codes.up.length; i < len; i++) {
				keys[codes.up[i]] = [0, -1 * pan];
			}
		},

		_setZoomOffset: function (zoom) {
			var keys = this._zoomKeys = {},
			    codes = this.keyCodes,
			    i, len;

			for (i = 0, len = codes.zoomIn.length; i < len; i++) {
				keys[codes.zoomIn[i]] = zoom;
			}
			for (i = 0, len = codes.zoomOut.length; i < len; i++) {
				keys[codes.zoomOut[i]] = -zoom;
			}
		},

		_addHooks: function () {
			L.DomEvent.on(document, 'keydown', this._onKeyDown, this);
		},

		_removeHooks: function () {
			L.DomEvent.off(document, 'keydown', this._onKeyDown, this);
		},

		_onKeyDown: function (e) {
			var key = e.keyCode,
			    map = this._map;

			if (key in this._panKeys) {

				if (map._panAnim && map._panAnim._inProgress) { return; }

				map.panBy(this._panKeys[key]);

				if (map.options.maxBounds) {
					map.panInsideBounds(map.options.maxBounds);
				}

			} else if (key in this._zoomKeys) {
				map.setZoom(map.getZoom() + this._zoomKeys[key]);

			} else {
				return;
			}

			L.DomEvent.stop(e);
		}
	});

	L.Map.addInitHook('addHandler', 'keyboard', L.Map.Keyboard);


	/*
	 * L.Handler.MarkerDrag is used internally by L.Marker to make the markers draggable.
	 */

	L.Handler.MarkerDrag = L.Handler.extend({
		initialize: function (marker) {
			this._marker = marker;
		},

		addHooks: function () {
			var icon = this._marker._icon;
			if (!this._draggable) {
				this._draggable = new L.Draggable(icon, icon);
			}

			this._draggable
				.on('dragstart', this._onDragStart, this)
				.on('drag', this._onDrag, this)
				.on('dragend', this._onDragEnd, this);
			this._draggable.enable();
			L.DomUtil.addClass(this._marker._icon, 'leaflet-marker-draggable');
		},

		removeHooks: function () {
			this._draggable
				.off('dragstart', this._onDragStart, this)
				.off('drag', this._onDrag, this)
				.off('dragend', this._onDragEnd, this);

			this._draggable.disable();
			L.DomUtil.removeClass(this._marker._icon, 'leaflet-marker-draggable');
		},

		moved: function () {
			return this._draggable && this._draggable._moved;
		},

		_onDragStart: function () {
			this._marker
			    .closePopup()
			    .fire('movestart')
			    .fire('dragstart');
		},

		_onDrag: function () {
			var marker = this._marker,
			    shadow = marker._shadow,
			    iconPos = L.DomUtil.getPosition(marker._icon),
			    latlng = marker._map.layerPointToLatLng(iconPos);

			// update shadow position
			if (shadow) {
				L.DomUtil.setPosition(shadow, iconPos);
			}

			marker._latlng = latlng;

			marker
			    .fire('move', {latlng: latlng})
			    .fire('drag');
		},

		_onDragEnd: function (e) {
			this._marker
			    .fire('moveend')
			    .fire('dragend', e);
		}
	});


	/*
	 * L.Control is a base class for implementing map controls. Handles positioning.
	 * All other controls extend from this class.
	 */

	L.Control = L.Class.extend({
		options: {
			position: 'topright'
		},

		initialize: function (options) {
			L.setOptions(this, options);
		},

		getPosition: function () {
			return this.options.position;
		},

		setPosition: function (position) {
			var map = this._map;

			if (map) {
				map.removeControl(this);
			}

			this.options.position = position;

			if (map) {
				map.addControl(this);
			}

			return this;
		},

		getContainer: function () {
			return this._container;
		},

		addTo: function (map) {
			this._map = map;

			var container = this._container = this.onAdd(map),
			    pos = this.getPosition(),
			    corner = map._controlCorners[pos];

			L.DomUtil.addClass(container, 'leaflet-control');

			if (pos.indexOf('bottom') !== -1) {
				corner.insertBefore(container, corner.firstChild);
			} else {
				corner.appendChild(container);
			}

			return this;
		},

		removeFrom: function (map) {
			var pos = this.getPosition(),
			    corner = map._controlCorners[pos];

			corner.removeChild(this._container);
			this._map = null;

			if (this.onRemove) {
				this.onRemove(map);
			}

			return this;
		},

		_refocusOnMap: function () {
			if (this._map) {
				this._map.getContainer().focus();
			}
		}
	});

	L.control = function (options) {
		return new L.Control(options);
	};


	// adds control-related methods to L.Map

	L.Map.include({
		addControl: function (control) {
			control.addTo(this);
			return this;
		},

		removeControl: function (control) {
			control.removeFrom(this);
			return this;
		},

		_initControlPos: function () {
			var corners = this._controlCorners = {},
			    l = 'leaflet-',
			    container = this._controlContainer =
			            L.DomUtil.create('div', l + 'control-container', this._container);

			function createCorner(vSide, hSide) {
				var className = l + vSide + ' ' + l + hSide;

				corners[vSide + hSide] = L.DomUtil.create('div', className, container);
			}

			createCorner('top', 'left');
			createCorner('top', 'right');
			createCorner('bottom', 'left');
			createCorner('bottom', 'right');
		},

		_clearControlPos: function () {
			this._container.removeChild(this._controlContainer);
		}
	});


	/*
	 * L.Control.Zoom is used for the default zoom buttons on the map.
	 */

	L.Control.Zoom = L.Control.extend({
		options: {
			position: 'topleft',
			zoomInText: '+',
			zoomInTitle: 'Zoom in',
			zoomOutText: '-',
			zoomOutTitle: 'Zoom out'
		},

		onAdd: function (map) {
			var zoomName = 'leaflet-control-zoom',
			    container = L.DomUtil.create('div', zoomName + ' leaflet-bar');

			this._map = map;

			this._zoomInButton  = this._createButton(
			        this.options.zoomInText, this.options.zoomInTitle,
			        zoomName + '-in',  container, this._zoomIn,  this);
			this._zoomOutButton = this._createButton(
			        this.options.zoomOutText, this.options.zoomOutTitle,
			        zoomName + '-out', container, this._zoomOut, this);

			this._updateDisabled();
			map.on('zoomend zoomlevelschange', this._updateDisabled, this);

			return container;
		},

		onRemove: function (map) {
			map.off('zoomend zoomlevelschange', this._updateDisabled, this);
		},

		_zoomIn: function (e) {
			this._map.zoomIn(e.shiftKey ? 3 : 1);
		},

		_zoomOut: function (e) {
			this._map.zoomOut(e.shiftKey ? 3 : 1);
		},

		_createButton: function (html, title, className, container, fn, context) {
			var link = L.DomUtil.create('a', className, container);
			link.innerHTML = html;
			link.href = '#';
			link.title = title;

			var stop = L.DomEvent.stopPropagation;

			L.DomEvent
			    .on(link, 'click', stop)
			    .on(link, 'mousedown', stop)
			    .on(link, 'dblclick', stop)
			    .on(link, 'click', L.DomEvent.preventDefault)
			    .on(link, 'click', fn, context)
			    .on(link, 'click', this._refocusOnMap, context);

			return link;
		},

		_updateDisabled: function () {
			var map = this._map,
				className = 'leaflet-disabled';

			L.DomUtil.removeClass(this._zoomInButton, className);
			L.DomUtil.removeClass(this._zoomOutButton, className);

			if (map._zoom === map.getMinZoom()) {
				L.DomUtil.addClass(this._zoomOutButton, className);
			}
			if (map._zoom === map.getMaxZoom()) {
				L.DomUtil.addClass(this._zoomInButton, className);
			}
		}
	});

	L.Map.mergeOptions({
		zoomControl: true
	});

	L.Map.addInitHook(function () {
		if (this.options.zoomControl) {
			this.zoomControl = new L.Control.Zoom();
			this.addControl(this.zoomControl);
		}
	});

	L.control.zoom = function (options) {
		return new L.Control.Zoom(options);
	};



	/*
	 * L.Control.Attribution is used for displaying attribution on the map (added by default).
	 */

	L.Control.Attribution = L.Control.extend({
		options: {
			position: 'bottomright',
			prefix: '<a href="http://leafletjs.com" title="A JS library for interactive maps">Leaflet</a>'
		},

		initialize: function (options) {
			L.setOptions(this, options);

			this._attributions = {};
		},

		onAdd: function (map) {
			this._container = L.DomUtil.create('div', 'leaflet-control-attribution');
			L.DomEvent.disableClickPropagation(this._container);

			for (var i in map._layers) {
				if (map._layers[i].getAttribution) {
					this.addAttribution(map._layers[i].getAttribution());
				}
			}
			
			map
			    .on('layeradd', this._onLayerAdd, this)
			    .on('layerremove', this._onLayerRemove, this);

			this._update();

			return this._container;
		},

		onRemove: function (map) {
			map
			    .off('layeradd', this._onLayerAdd)
			    .off('layerremove', this._onLayerRemove);

		},

		setPrefix: function (prefix) {
			this.options.prefix = prefix;
			this._update();
			return this;
		},

		addAttribution: function (text) {
			if (!text) { return; }

			if (!this._attributions[text]) {
				this._attributions[text] = 0;
			}
			this._attributions[text]++;

			this._update();

			return this;
		},

		removeAttribution: function (text) {
			if (!text) { return; }

			if (this._attributions[text]) {
				this._attributions[text]--;
				this._update();
			}

			return this;
		},

		_update: function () {
			if (!this._map) { return; }

			var attribs = [];

			for (var i in this._attributions) {
				if (this._attributions[i]) {
					attribs.push(i);
				}
			}

			var prefixAndAttribs = [];

			if (this.options.prefix) {
				prefixAndAttribs.push(this.options.prefix);
			}
			if (attribs.length) {
				prefixAndAttribs.push(attribs.join(', '));
			}

			this._container.innerHTML = prefixAndAttribs.join(' | ');
		},

		_onLayerAdd: function (e) {
			if (e.layer.getAttribution) {
				this.addAttribution(e.layer.getAttribution());
			}
		},

		_onLayerRemove: function (e) {
			if (e.layer.getAttribution) {
				this.removeAttribution(e.layer.getAttribution());
			}
		}
	});

	L.Map.mergeOptions({
		attributionControl: true
	});

	L.Map.addInitHook(function () {
		if (this.options.attributionControl) {
			this.attributionControl = (new L.Control.Attribution()).addTo(this);
		}
	});

	L.control.attribution = function (options) {
		return new L.Control.Attribution(options);
	};


	/*
	 * L.Control.Scale is used for displaying metric/imperial scale on the map.
	 */

	L.Control.Scale = L.Control.extend({
		options: {
			position: 'bottomleft',
			maxWidth: 100,
			metric: true,
			imperial: true,
			updateWhenIdle: false
		},

		onAdd: function (map) {
			this._map = map;

			var className = 'leaflet-control-scale',
			    container = L.DomUtil.create('div', className),
			    options = this.options;

			this._addScales(options, className, container);

			map.on(options.updateWhenIdle ? 'moveend' : 'move', this._update, this);
			map.whenReady(this._update, this);

			return container;
		},

		onRemove: function (map) {
			map.off(this.options.updateWhenIdle ? 'moveend' : 'move', this._update, this);
		},

		_addScales: function (options, className, container) {
			if (options.metric) {
				this._mScale = L.DomUtil.create('div', className + '-line', container);
			}
			if (options.imperial) {
				this._iScale = L.DomUtil.create('div', className + '-line', container);
			}
		},

		_update: function () {
			var bounds = this._map.getBounds(),
			    centerLat = bounds.getCenter().lat,
			    halfWorldMeters = 6378137 * Math.PI * Math.cos(centerLat * Math.PI / 180),
			    dist = halfWorldMeters * (bounds.getNorthEast().lng - bounds.getSouthWest().lng) / 180,

			    size = this._map.getSize(),
			    options = this.options,
			    maxMeters = 0;

			if (size.x > 0) {
				maxMeters = dist * (options.maxWidth / size.x);
			}

			this._updateScales(options, maxMeters);
		},

		_updateScales: function (options, maxMeters) {
			if (options.metric && maxMeters) {
				this._updateMetric(maxMeters);
			}

			if (options.imperial && maxMeters) {
				this._updateImperial(maxMeters);
			}
		},

		_updateMetric: function (maxMeters) {
			var meters = this._getRoundNum(maxMeters);

			this._mScale.style.width = this._getScaleWidth(meters / maxMeters) + 'px';
			this._mScale.innerHTML = meters < 1000 ? meters + ' m' : (meters / 1000) + ' km';
		},

		_updateImperial: function (maxMeters) {
			var maxFeet = maxMeters * 3.2808399,
			    scale = this._iScale,
			    maxMiles, miles, feet;

			if (maxFeet > 5280) {
				maxMiles = maxFeet / 5280;
				miles = this._getRoundNum(maxMiles);

				scale.style.width = this._getScaleWidth(miles / maxMiles) + 'px';
				scale.innerHTML = miles + ' mi';

			} else {
				feet = this._getRoundNum(maxFeet);

				scale.style.width = this._getScaleWidth(feet / maxFeet) + 'px';
				scale.innerHTML = feet + ' ft';
			}
		},

		_getScaleWidth: function (ratio) {
			return Math.round(this.options.maxWidth * ratio) - 10;
		},

		_getRoundNum: function (num) {
			var pow10 = Math.pow(10, (Math.floor(num) + '').length - 1),
			    d = num / pow10;

			d = d >= 10 ? 10 : d >= 5 ? 5 : d >= 3 ? 3 : d >= 2 ? 2 : 1;

			return pow10 * d;
		}
	});

	L.control.scale = function (options) {
		return new L.Control.Scale(options);
	};


	/*
	 * L.Control.Layers is a control to allow users to switch between different layers on the map.
	 */

	L.Control.Layers = L.Control.extend({
		options: {
			collapsed: true,
			position: 'topright',
			autoZIndex: true
		},

		initialize: function (baseLayers, overlays, options) {
			L.setOptions(this, options);

			this._layers = {};
			this._lastZIndex = 0;
			this._handlingClick = false;

			for (var i in baseLayers) {
				this._addLayer(baseLayers[i], i);
			}

			for (i in overlays) {
				this._addLayer(overlays[i], i, true);
			}
		},

		onAdd: function (map) {
			this._initLayout();
			this._update();

			map
			    .on('layeradd', this._onLayerChange, this)
			    .on('layerremove', this._onLayerChange, this);

			return this._container;
		},

		onRemove: function (map) {
			map
			    .off('layeradd', this._onLayerChange, this)
			    .off('layerremove', this._onLayerChange, this);
		},

		addBaseLayer: function (layer, name) {
			this._addLayer(layer, name);
			this._update();
			return this;
		},

		addOverlay: function (layer, name) {
			this._addLayer(layer, name, true);
			this._update();
			return this;
		},

		removeLayer: function (layer) {
			var id = L.stamp(layer);
			delete this._layers[id];
			this._update();
			return this;
		},

		_initLayout: function () {
			var className = 'leaflet-control-layers',
			    container = this._container = L.DomUtil.create('div', className);

			//Makes this work on IE10 Touch devices by stopping it from firing a mouseout event when the touch is released
			container.setAttribute('aria-haspopup', true);

			if (!L.Browser.touch) {
				L.DomEvent
					.disableClickPropagation(container)
					.disableScrollPropagation(container);
			} else {
				L.DomEvent.on(container, 'click', L.DomEvent.stopPropagation);
			}

			var form = this._form = L.DomUtil.create('form', className + '-list');

			if (this.options.collapsed) {
				if (!L.Browser.android) {
					L.DomEvent
					    .on(container, 'mouseover', this._expand, this)
					    .on(container, 'mouseout', this._collapse, this);
				}
				var link = this._layersLink = L.DomUtil.create('a', className + '-toggle', container);
				link.href = '#';
				link.title = 'Layers';

				if (L.Browser.touch) {
					L.DomEvent
					    .on(link, 'click', L.DomEvent.stop)
					    .on(link, 'click', this._expand, this);
				}
				else {
					L.DomEvent.on(link, 'focus', this._expand, this);
				}
				//Work around for Firefox android issue https://github.com/Leaflet/Leaflet/issues/2033
				L.DomEvent.on(form, 'click', function () {
					setTimeout(L.bind(this._onInputClick, this), 0);
				}, this);

				this._map.on('click', this._collapse, this);
				// TODO keyboard accessibility
			} else {
				this._expand();
			}

			this._baseLayersList = L.DomUtil.create('div', className + '-base', form);
			this._separator = L.DomUtil.create('div', className + '-separator', form);
			this._overlaysList = L.DomUtil.create('div', className + '-overlays', form);

			container.appendChild(form);
		},

		_addLayer: function (layer, name, overlay) {
			var id = L.stamp(layer);

			this._layers[id] = {
				layer: layer,
				name: name,
				overlay: overlay
			};

			if (this.options.autoZIndex && layer.setZIndex) {
				this._lastZIndex++;
				layer.setZIndex(this._lastZIndex);
			}
		},

		_update: function () {
			if (!this._container) {
				return;
			}

			this._baseLayersList.innerHTML = '';
			this._overlaysList.innerHTML = '';

			var baseLayersPresent = false,
			    overlaysPresent = false,
			    i, obj;

			for (i in this._layers) {
				obj = this._layers[i];
				this._addItem(obj);
				overlaysPresent = overlaysPresent || obj.overlay;
				baseLayersPresent = baseLayersPresent || !obj.overlay;
			}

			this._separator.style.display = overlaysPresent && baseLayersPresent ? '' : 'none';
		},

		_onLayerChange: function (e) {
			var obj = this._layers[L.stamp(e.layer)];

			if (!obj) { return; }

			if (!this._handlingClick) {
				this._update();
			}

			var type = obj.overlay ?
				(e.type === 'layeradd' ? 'overlayadd' : 'overlayremove') :
				(e.type === 'layeradd' ? 'baselayerchange' : null);

			if (type) {
				this._map.fire(type, obj);
			}
		},

		// IE7 bugs out if you create a radio dynamically, so you have to do it this hacky way (see http://bit.ly/PqYLBe)
		_createRadioElement: function (name, checked) {

			var radioHtml = '<input type="radio" class="leaflet-control-layers-selector" name="' + name + '"';
			if (checked) {
				radioHtml += ' checked="checked"';
			}
			radioHtml += '/>';

			var radioFragment = document.createElement('div');
			radioFragment.innerHTML = radioHtml;

			return radioFragment.firstChild;
		},

		_addItem: function (obj) {
			var label = document.createElement('label'),
			    input,
			    checked = this._map.hasLayer(obj.layer);

			if (obj.overlay) {
				input = document.createElement('input');
				input.type = 'checkbox';
				input.className = 'leaflet-control-layers-selector';
				input.defaultChecked = checked;
			} else {
				input = this._createRadioElement('leaflet-base-layers', checked);
			}

			input.layerId = L.stamp(obj.layer);

			L.DomEvent.on(input, 'click', this._onInputClick, this);

			var name = document.createElement('span');
			name.innerHTML = ' ' + obj.name;

			label.appendChild(input);
			label.appendChild(name);

			var container = obj.overlay ? this._overlaysList : this._baseLayersList;
			container.appendChild(label);

			return label;
		},

		_onInputClick: function () {
			var i, input, obj,
			    inputs = this._form.getElementsByTagName('input'),
			    inputsLen = inputs.length;

			this._handlingClick = true;

			for (i = 0; i < inputsLen; i++) {
				input = inputs[i];
				obj = this._layers[input.layerId];

				if (input.checked && !this._map.hasLayer(obj.layer)) {
					this._map.addLayer(obj.layer);

				} else if (!input.checked && this._map.hasLayer(obj.layer)) {
					this._map.removeLayer(obj.layer);
				}
			}

			this._handlingClick = false;

			this._refocusOnMap();
		},

		_expand: function () {
			L.DomUtil.addClass(this._container, 'leaflet-control-layers-expanded');
		},

		_collapse: function () {
			this._container.className = this._container.className.replace(' leaflet-control-layers-expanded', '');
		}
	});

	L.control.layers = function (baseLayers, overlays, options) {
		return new L.Control.Layers(baseLayers, overlays, options);
	};


	/*
	 * L.PosAnimation is used by Leaflet internally for pan animations.
	 */

	L.PosAnimation = L.Class.extend({
		includes: L.Mixin.Events,

		run: function (el, newPos, duration, easeLinearity) { // (HTMLElement, Point[, Number, Number])
			this.stop();

			this._el = el;
			this._inProgress = true;
			this._newPos = newPos;

			this.fire('start');

			el.style[L.DomUtil.TRANSITION] = 'all ' + (duration || 0.25) +
			        's cubic-bezier(0,0,' + (easeLinearity || 0.5) + ',1)';

			L.DomEvent.on(el, L.DomUtil.TRANSITION_END, this._onTransitionEnd, this);
			L.DomUtil.setPosition(el, newPos);

			// toggle reflow, Chrome flickers for some reason if you don't do this
			L.Util.falseFn(el.offsetWidth);

			// there's no native way to track value updates of transitioned properties, so we imitate this
			this._stepTimer = setInterval(L.bind(this._onStep, this), 50);
		},

		stop: function () {
			if (!this._inProgress) { return; }

			// if we just removed the transition property, the element would jump to its final position,
			// so we need to make it stay at the current position

			L.DomUtil.setPosition(this._el, this._getPos());
			this._onTransitionEnd();
			L.Util.falseFn(this._el.offsetWidth); // force reflow in case we are about to start a new animation
		},

		_onStep: function () {
			var stepPos = this._getPos();
			if (!stepPos) {
				this._onTransitionEnd();
				return;
			}
			// jshint camelcase: false
			// make L.DomUtil.getPosition return intermediate position value during animation
			this._el._leaflet_pos = stepPos;

			this.fire('step');
		},

		// you can't easily get intermediate values of properties animated with CSS3 Transitions,
		// we need to parse computed style (in case of transform it returns matrix string)

		_transformRe: /([-+]?(?:\d*\.)?\d+)\D*, ([-+]?(?:\d*\.)?\d+)\D*\)/,

		_getPos: function () {
			var left, top, matches,
			    el = this._el,
			    style = window.getComputedStyle(el);

			if (L.Browser.any3d) {
				matches = style[L.DomUtil.TRANSFORM].match(this._transformRe);
				if (!matches) { return; }
				left = parseFloat(matches[1]);
				top  = parseFloat(matches[2]);
			} else {
				left = parseFloat(style.left);
				top  = parseFloat(style.top);
			}

			return new L.Point(left, top, true);
		},

		_onTransitionEnd: function () {
			L.DomEvent.off(this._el, L.DomUtil.TRANSITION_END, this._onTransitionEnd, this);

			if (!this._inProgress) { return; }
			this._inProgress = false;

			this._el.style[L.DomUtil.TRANSITION] = '';

			// jshint camelcase: false
			// make sure L.DomUtil.getPosition returns the final position value after animation
			this._el._leaflet_pos = this._newPos;

			clearInterval(this._stepTimer);

			this.fire('step').fire('end');
		}

	});


	/*
	 * Extends L.Map to handle panning animations.
	 */

	L.Map.include({

		setView: function (center, zoom, options) {

			zoom = zoom === undefined ? this._zoom : this._limitZoom(zoom);
			center = this._limitCenter(L.latLng(center), zoom, this.options.maxBounds);
			options = options || {};

			if (this._panAnim) {
				this._panAnim.stop();
			}

			if (this._loaded && !options.reset && options !== true) {

				if (options.animate !== undefined) {
					options.zoom = L.extend({animate: options.animate}, options.zoom);
					options.pan = L.extend({animate: options.animate}, options.pan);
				}

				// try animating pan or zoom
				var animated = (this._zoom !== zoom) ?
					this._tryAnimatedZoom && this._tryAnimatedZoom(center, zoom, options.zoom) :
					this._tryAnimatedPan(center, options.pan);

				if (animated) {
					// prevent resize handler call, the view will refresh after animation anyway
					clearTimeout(this._sizeTimer);
					return this;
				}
			}

			// animation didn't start, just reset the map view
			this._resetView(center, zoom);

			return this;
		},

		panBy: function (offset, options) {
			offset = L.point(offset).round();
			options = options || {};

			if (!offset.x && !offset.y) {
				return this;
			}

			if (!this._panAnim) {
				this._panAnim = new L.PosAnimation();

				this._panAnim.on({
					'step': this._onPanTransitionStep,
					'end': this._onPanTransitionEnd
				}, this);
			}

			// don't fire movestart if animating inertia
			if (!options.noMoveStart) {
				this.fire('movestart');
			}

			// animate pan unless animate: false specified
			if (options.animate !== false) {
				L.DomUtil.addClass(this._mapPane, 'leaflet-pan-anim');

				var newPos = this._getMapPanePos().subtract(offset);
				this._panAnim.run(this._mapPane, newPos, options.duration || 0.25, options.easeLinearity);
			} else {
				this._rawPanBy(offset);
				this.fire('move').fire('moveend');
			}

			return this;
		},

		_onPanTransitionStep: function () {
			this.fire('move');
		},

		_onPanTransitionEnd: function () {
			L.DomUtil.removeClass(this._mapPane, 'leaflet-pan-anim');
			this.fire('moveend');
		},

		_tryAnimatedPan: function (center, options) {
			// difference between the new and current centers in pixels
			var offset = this._getCenterOffset(center)._floor();

			// don't animate too far unless animate: true specified in options
			if ((options && options.animate) !== true && !this.getSize().contains(offset)) { return false; }

			this.panBy(offset, options);

			return true;
		}
	});


	/*
	 * L.PosAnimation fallback implementation that powers Leaflet pan animations
	 * in browsers that don't support CSS3 Transitions.
	 */

	L.PosAnimation = L.DomUtil.TRANSITION ? L.PosAnimation : L.PosAnimation.extend({

		run: function (el, newPos, duration, easeLinearity) { // (HTMLElement, Point[, Number, Number])
			this.stop();

			this._el = el;
			this._inProgress = true;
			this._duration = duration || 0.25;
			this._easeOutPower = 1 / Math.max(easeLinearity || 0.5, 0.2);

			this._startPos = L.DomUtil.getPosition(el);
			this._offset = newPos.subtract(this._startPos);
			this._startTime = +new Date();

			this.fire('start');

			this._animate();
		},

		stop: function () {
			if (!this._inProgress) { return; }

			this._step();
			this._complete();
		},

		_animate: function () {
			// animation loop
			this._animId = L.Util.requestAnimFrame(this._animate, this);
			this._step();
		},

		_step: function () {
			var elapsed = (+new Date()) - this._startTime,
			    duration = this._duration * 1000;

			if (elapsed < duration) {
				this._runFrame(this._easeOut(elapsed / duration));
			} else {
				this._runFrame(1);
				this._complete();
			}
		},

		_runFrame: function (progress) {
			var pos = this._startPos.add(this._offset.multiplyBy(progress));
			L.DomUtil.setPosition(this._el, pos);

			this.fire('step');
		},

		_complete: function () {
			L.Util.cancelAnimFrame(this._animId);

			this._inProgress = false;
			this.fire('end');
		},

		_easeOut: function (t) {
			return 1 - Math.pow(1 - t, this._easeOutPower);
		}
	});


	/*
	 * Extends L.Map to handle zoom animations.
	 */

	L.Map.mergeOptions({
		zoomAnimation: true,
		zoomAnimationThreshold: 4
	});

	if (L.DomUtil.TRANSITION) {

		L.Map.addInitHook(function () {
			// don't animate on browsers without hardware-accelerated transitions or old Android/Opera
			this._zoomAnimated = this.options.zoomAnimation && L.DomUtil.TRANSITION &&
					L.Browser.any3d && !L.Browser.android23 && !L.Browser.mobileOpera;

			// zoom transitions run with the same duration for all layers, so if one of transitionend events
			// happens after starting zoom animation (propagating to the map pane), we know that it ended globally
			if (this._zoomAnimated) {
				L.DomEvent.on(this._mapPane, L.DomUtil.TRANSITION_END, this._catchTransitionEnd, this);
			}
		});
	}

	L.Map.include(!L.DomUtil.TRANSITION ? {} : {

		_catchTransitionEnd: function (e) {
			if (this._animatingZoom && e.propertyName.indexOf('transform') >= 0) {
				this._onZoomTransitionEnd();
			}
		},

		_nothingToAnimate: function () {
			return !this._container.getElementsByClassName('leaflet-zoom-animated').length;
		},

		_tryAnimatedZoom: function (center, zoom, options) {

			if (this._animatingZoom) { return true; }

			options = options || {};

			// don't animate if disabled, not supported or zoom difference is too large
			if (!this._zoomAnimated || options.animate === false || this._nothingToAnimate() ||
			        Math.abs(zoom - this._zoom) > this.options.zoomAnimationThreshold) { return false; }

			// offset is the pixel coords of the zoom origin relative to the current center
			var scale = this.getZoomScale(zoom),
			    offset = this._getCenterOffset(center)._divideBy(1 - 1 / scale),
				origin = this._getCenterLayerPoint()._add(offset);

			// don't animate if the zoom origin isn't within one screen from the current center, unless forced
			if (options.animate !== true && !this.getSize().contains(offset)) { return false; }

			this
			    .fire('movestart')
			    .fire('zoomstart');

			this._animateZoom(center, zoom, origin, scale, null, true);

			return true;
		},

		_animateZoom: function (center, zoom, origin, scale, delta, backwards, forTouchZoom) {

			if (!forTouchZoom) {
				this._animatingZoom = true;
			}

			// put transform transition on all layers with leaflet-zoom-animated class
			L.DomUtil.addClass(this._mapPane, 'leaflet-zoom-anim');

			// remember what center/zoom to set after animation
			this._animateToCenter = center;
			this._animateToZoom = zoom;

			// disable any dragging during animation
			if (L.Draggable) {
				L.Draggable._disabled = true;
			}

			L.Util.requestAnimFrame(function () {
				this.fire('zoomanim', {
					center: center,
					zoom: zoom,
					origin: origin,
					scale: scale,
					delta: delta,
					backwards: backwards
				});
				// horrible hack to work around a Chrome bug https://github.com/Leaflet/Leaflet/issues/3689
				setTimeout(L.bind(this._onZoomTransitionEnd, this), 250);
			}, this);
		},

		_onZoomTransitionEnd: function () {
			if (!this._animatingZoom) { return; }

			this._animatingZoom = false;

			L.DomUtil.removeClass(this._mapPane, 'leaflet-zoom-anim');

			L.Util.requestAnimFrame(function () {
				this._resetView(this._animateToCenter, this._animateToZoom, true, true);

				if (L.Draggable) {
					L.Draggable._disabled = false;
				}
			}, this);
		}
	});


	/*
		Zoom animation logic for L.TileLayer.
	*/

	L.TileLayer.include({
		_animateZoom: function (e) {
			if (!this._animating) {
				this._animating = true;
				this._prepareBgBuffer();
			}

			var bg = this._bgBuffer,
			    transform = L.DomUtil.TRANSFORM,
			    initialTransform = e.delta ? L.DomUtil.getTranslateString(e.delta) : bg.style[transform],
			    scaleStr = L.DomUtil.getScaleString(e.scale, e.origin);

			bg.style[transform] = e.backwards ?
					scaleStr + ' ' + initialTransform :
					initialTransform + ' ' + scaleStr;
		},

		_endZoomAnim: function () {
			var front = this._tileContainer,
			    bg = this._bgBuffer;

			front.style.visibility = '';
			front.parentNode.appendChild(front); // Bring to fore

			// force reflow
			L.Util.falseFn(bg.offsetWidth);

			var zoom = this._map.getZoom();
			if (zoom > this.options.maxZoom || zoom < this.options.minZoom) {
				this._clearBgBuffer();
			}

			this._animating = false;
		},

		_clearBgBuffer: function () {
			var map = this._map;

			if (map && !map._animatingZoom && !map.touchZoom._zooming) {
				this._bgBuffer.innerHTML = '';
				this._bgBuffer.style[L.DomUtil.TRANSFORM] = '';
			}
		},

		_prepareBgBuffer: function () {

			var front = this._tileContainer,
			    bg = this._bgBuffer;

			// if foreground layer doesn't have many tiles but bg layer does,
			// keep the existing bg layer and just zoom it some more

			var bgLoaded = this._getLoadedTilesPercentage(bg),
			    frontLoaded = this._getLoadedTilesPercentage(front);

			if (bg && bgLoaded > 0.5 && frontLoaded < 0.5) {

				front.style.visibility = 'hidden';
				this._stopLoadingImages(front);
				return;
			}

			// prepare the buffer to become the front tile pane
			bg.style.visibility = 'hidden';
			bg.style[L.DomUtil.TRANSFORM] = '';

			// switch out the current layer to be the new bg layer (and vice-versa)
			this._tileContainer = bg;
			bg = this._bgBuffer = front;

			this._stopLoadingImages(bg);

			//prevent bg buffer from clearing right after zoom
			clearTimeout(this._clearBgBufferTimer);
		},

		_getLoadedTilesPercentage: function (container) {
			var tiles = container.getElementsByTagName('img'),
			    i, len, count = 0;

			for (i = 0, len = tiles.length; i < len; i++) {
				if (tiles[i].complete) {
					count++;
				}
			}
			return count / len;
		},

		// stops loading all tiles in the background layer
		_stopLoadingImages: function (container) {
			var tiles = Array.prototype.slice.call(container.getElementsByTagName('img')),
			    i, len, tile;

			for (i = 0, len = tiles.length; i < len; i++) {
				tile = tiles[i];

				if (!tile.complete) {
					tile.onload = L.Util.falseFn;
					tile.onerror = L.Util.falseFn;
					tile.src = L.Util.emptyImageUrl;

					tile.parentNode.removeChild(tile);
				}
			}
		}
	});


	/*
	 * Provides L.Map with convenient shortcuts for using browser geolocation features.
	 */

	L.Map.include({
		_defaultLocateOptions: {
			watch: false,
			setView: false,
			maxZoom: Infinity,
			timeout: 10000,
			maximumAge: 0,
			enableHighAccuracy: false
		},

		locate: function (/*Object*/ options) {

			options = this._locateOptions = L.extend(this._defaultLocateOptions, options);

			if (!navigator.geolocation) {
				this._handleGeolocationError({
					code: 0,
					message: 'Geolocation not supported.'
				});
				return this;
			}

			var onResponse = L.bind(this._handleGeolocationResponse, this),
				onError = L.bind(this._handleGeolocationError, this);

			if (options.watch) {
				this._locationWatchId =
				        navigator.geolocation.watchPosition(onResponse, onError, options);
			} else {
				navigator.geolocation.getCurrentPosition(onResponse, onError, options);
			}
			return this;
		},

		stopLocate: function () {
			if (navigator.geolocation) {
				navigator.geolocation.clearWatch(this._locationWatchId);
			}
			if (this._locateOptions) {
				this._locateOptions.setView = false;
			}
			return this;
		},

		_handleGeolocationError: function (error) {
			var c = error.code,
			    message = error.message ||
			            (c === 1 ? 'permission denied' :
			            (c === 2 ? 'position unavailable' : 'timeout'));

			if (this._locateOptions.setView && !this._loaded) {
				this.fitWorld();
			}

			this.fire('locationerror', {
				code: c,
				message: 'Geolocation error: ' + message + '.'
			});
		},

		_handleGeolocationResponse: function (pos) {
			var lat = pos.coords.latitude,
			    lng = pos.coords.longitude,
			    latlng = new L.LatLng(lat, lng),

			    latAccuracy = 180 * pos.coords.accuracy / 40075017,
			    lngAccuracy = latAccuracy / Math.cos(L.LatLng.DEG_TO_RAD * lat),

			    bounds = L.latLngBounds(
			            [lat - latAccuracy, lng - lngAccuracy],
			            [lat + latAccuracy, lng + lngAccuracy]),

			    options = this._locateOptions;

			if (options.setView) {
				var zoom = Math.min(this.getBoundsZoom(bounds), options.maxZoom);
				this.setView(latlng, zoom);
			}

			var data = {
				latlng: latlng,
				bounds: bounds,
				timestamp: pos.timestamp
			};

			for (var i in pos.coords) {
				if (typeof pos.coords[i] === 'number') {
					data[i] = pos.coords[i];
				}
			}

			this.fire('locationfound', data);
		}
	});


	}(window, document));

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var geocoderControl = __webpack_require__(7),
	    gridControl = __webpack_require__(17),
	    featureLayer = __webpack_require__(21),
	    legendControl = __webpack_require__(24),
	    shareControl = __webpack_require__(25),
	    tileLayer = __webpack_require__(27),
	    infoControl = __webpack_require__(28),
	    map = __webpack_require__(29),
	    gridLayer = __webpack_require__(30),
	    styleLayer = __webpack_require__(33);

	L.mapbox = module.exports = {
	    VERSION: __webpack_require__(13).version,
	    geocoder: __webpack_require__(8),
	    marker: __webpack_require__(22),
	    simplestyle: __webpack_require__(23),
	    tileLayer: tileLayer.tileLayer,
	    TileLayer: tileLayer.TileLayer,
	    styleLayer: styleLayer.styleLayer,
	    StyleLayer: styleLayer.StyleLayer,
	    infoControl: infoControl.infoControl,
	    InfoControl: infoControl.InfoControl,
	    shareControl: shareControl.shareControl,
	    ShareControl: shareControl.ShareControl,
	    legendControl: legendControl.legendControl,
	    LegendControl: legendControl.LegendControl,
	    geocoderControl: geocoderControl.geocoderControl,
	    GeocoderControl: geocoderControl.GeocoderControl,
	    gridControl: gridControl.gridControl,
	    GridControl: gridControl.GridControl,
	    gridLayer: gridLayer.gridLayer,
	    GridLayer: gridLayer.GridLayer,
	    featureLayer: featureLayer.featureLayer,
	    FeatureLayer: featureLayer.FeatureLayer,
	    map: map.map,
	    Map: map.Map,
	    config: __webpack_require__(12),
	    sanitize: __webpack_require__(19),
	    template: __webpack_require__(18).to_html,
	    feedback: __webpack_require__(14)
	};


	// Hardcode image path, because Leaflet's autodetection
	// fails, because mapbox.js is not named leaflet.js
	window.L.Icon.Default.imagePath =
	    // Detect bad-news protocols like file:// and hardcode
	    // to https if they're detected.
	    ((document.location.protocol === 'https:' ||
	    document.location.protocol === 'http:') ? '' : 'https:') +
	    '//api.tiles.mapbox.com/mapbox.js/' + 'v' +
	    __webpack_require__(13).version + '/images';


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var geocoder = __webpack_require__(8),
	    util = __webpack_require__(10);

	var GeocoderControl = L.Control.extend({
	    includes: L.Mixin.Events,

	    options: {
	        proximity: true,
	        position: 'topleft',
	        pointZoom: 16,
	        keepOpen: false,
	        autocomplete: false,
	        queryOptions: {}
	    },

	    initialize: function(_, options) {
	        L.Util.setOptions(this, options);
	        this.setURL(_);
	        this._updateSubmit = L.bind(this._updateSubmit, this);
	        this._updateAutocomplete = L.bind(this._updateAutocomplete, this);
	        this._chooseResult = L.bind(this._chooseResult, this);
	    },

	    setURL: function(_) {
	        this.geocoder = geocoder(_, {
	            accessToken: this.options.accessToken
	        });
	        return this;
	    },

	    getURL: function() {
	        return this.geocoder.getURL();
	    },

	    setID: function(_) {
	        return this.setURL(_);
	    },

	    setTileJSON: function(_) {
	        return this.setURL(_.geocoder);
	    },

	    _toggle: function(e) {
	        if (e) L.DomEvent.stop(e);
	        if (L.DomUtil.hasClass(this._container, 'active')) {
	            L.DomUtil.removeClass(this._container, 'active');
	            this._results.innerHTML = '';
	            this._input.blur();
	        } else {
	            L.DomUtil.addClass(this._container, 'active');
	            this._input.focus();
	            this._input.select();
	        }
	    },

	    _closeIfOpen: function() {
	        if (L.DomUtil.hasClass(this._container, 'active') &&
	            !this.options.keepOpen) {
	            L.DomUtil.removeClass(this._container, 'active');
	            this._results.innerHTML = '';
	            this._input.blur();
	        }
	    },

	    onAdd: function(map) {

	        var container = L.DomUtil.create('div', 'leaflet-control-mapbox-geocoder leaflet-bar leaflet-control'),
	            link = L.DomUtil.create('a', 'leaflet-control-mapbox-geocoder-toggle mapbox-icon mapbox-icon-geocoder', container),
	            results = L.DomUtil.create('div', 'leaflet-control-mapbox-geocoder-results', container),
	            wrap = L.DomUtil.create('div', 'leaflet-control-mapbox-geocoder-wrap', container),
	            form = L.DomUtil.create('form', 'leaflet-control-mapbox-geocoder-form', wrap),
	            input = L.DomUtil.create('input', '', form);

	        link.href = '#';
	        link.innerHTML = '&nbsp;';

	        input.type = 'text';
	        input.setAttribute('placeholder', 'Search');

	        L.DomEvent.addListener(form, 'submit', this._geocode, this);
	        L.DomEvent.addListener(input, 'keyup', this._autocomplete, this);
	        L.DomEvent.disableClickPropagation(container);

	        this._map = map;
	        this._results = results;
	        this._input = input;
	        this._form = form;

	        if (this.options.keepOpen) {
	            L.DomUtil.addClass(container, 'active');
	        } else {
	            this._map.on('click', this._closeIfOpen, this);
	            L.DomEvent.addListener(link, 'click', this._toggle, this);
	        }

	        return container;
	    },

	    _updateSubmit: function(err, resp) {
	        L.DomUtil.removeClass(this._container, 'searching');
	        this._results.innerHTML = '';
	        if (err || !resp) {
	            this.fire('error', {error: err});
	        } else {
	            var features = [];
	            if (resp.results && resp.results.features) {
	                features = resp.results.features;
	            }
	            if (features.length === 1) {
	                this.fire('autoselect', { feature: features[0] });
	                this.fire('found', {results: resp.results});
	                this._chooseResult(features[0]);
	                this._closeIfOpen();
	            } else if (features.length > 1) {
	                this.fire('found', {results: resp.results});
	                this._displayResults(features);
	            } else {
	                this.fire('notfound');
	                this._displayResults(features);
	            }
	        }
	    },

	    _updateAutocomplete: function(err, resp) {
	        this._results.innerHTML = '';
	        if (err || !resp) {
	            this.fire('error', {error: err});
	        } else {
	            var features = [];
	            if (resp.results && resp.results.features) {
	                features = resp.results.features;
	            }
	            if (features.length) {
	                this.fire('found', {results: resp.results});
	            } else {
	                this.fire('notfound');
	            }
	            this._displayResults(features);
	        }
	    },

	    _displayResults: function(features) {
	        for (var i = 0, l = Math.min(features.length, 5); i < l; i++) {
	            var feature = features[i];
	            var name = feature.place_name;
	            if (!name.length) continue;

	            var r = L.DomUtil.create('a', '', this._results);
	            var text = ('innerText' in r) ? 'innerText' : 'textContent';
	            r[text] = name;
	            r.setAttribute('title', name);
	            r.href = '#';

	            (L.bind(function(feature) {
	                L.DomEvent.addListener(r, 'click', function(e) {
	                    this._chooseResult(feature);
	                    L.DomEvent.stop(e);
	                    this.fire('select', { feature: feature });
	                }, this);
	            }, this))(feature);
	        }
	        if (features.length > 5) {
	            var outof = L.DomUtil.create('span', '', this._results);
	            outof.innerHTML = 'Top 5 of ' + features.length + '  results';
	        }
	    },

	    _chooseResult: function(result) {
	        if (result.bbox) {
	            this._map.fitBounds(util.lbounds(result.bbox));
	        } else if (result.center) {
	            this._map.setView([result.center[1], result.center[0]], (this._map.getZoom() === undefined) ?
	                this.options.pointZoom :
	                Math.max(this._map.getZoom(), this.options.pointZoom));
	        }
	    },

	    _geocode: function(e) {
	        L.DomEvent.preventDefault(e);
	        if (this._input.value === '') return this._updateSubmit();
	        L.DomUtil.addClass(this._container, 'searching');
	        this.geocoder.query(L.Util.extend({
	            query: this._input.value,
	            proximity: this.options.proximity ? this._map.getCenter() : false
	        }, this.options.queryOptions), this._updateSubmit);
	    },

	    _autocomplete: function() {
	        if (!this.options.autocomplete) return;
	        if (this._input.value === '') return this._updateAutocomplete();
	        this.geocoder.query(L.Util.extend({
	            query: this._input.value,
	            proximity: this.options.proximity ? this._map.getCenter() : false
	        }, this.options.queryOptions), this._updateAutocomplete);
	    }
	});

	module.exports.GeocoderControl = GeocoderControl;

	module.exports.geocoderControl = function(_, options) {
	    return new GeocoderControl(_, options);
	};


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var isArray = __webpack_require__(9),
	    util = __webpack_require__(10),
	    format_url = __webpack_require__(11),
	    feedback = __webpack_require__(14),
	    request = __webpack_require__(15);

	// Low-level geocoding interface - wraps specific API calls and their
	// return values.
	module.exports = function(url, options) {
	    if (!options) options = {};
	    var geocoder = {};

	    util.strict(url, 'string');

	    if (url.indexOf('/') === -1) {
	        url = format_url('/geocoding/v5/' + url + '/{query}.json', options.accessToken, 5);
	    }

	    function roundTo(latLng, precision) {
	        var mult = Math.pow(10, precision);
	        latLng.lat = Math.round(latLng.lat * mult) / mult;
	        latLng.lng = Math.round(latLng.lng * mult) / mult;
	        return latLng;
	    }

	    geocoder.getURL = function() {
	        return url;
	    };

	    geocoder.queryURL = function(_) {
	        var isObject = !(isArray(_) || typeof _ === 'string'),
	            query = isObject ? _.query : _;

	        if (isArray(query)) {
	            var parts = [];
	            for (var i = 0; i < query.length; i++) {
	                parts[i] = encodeURIComponent(query[i]);
	            }
	            query = parts.join(';');
	        } else {
	            query = encodeURIComponent(query);
	        }

	        feedback.record({ geocoding: query });

	        var url = L.Util.template(geocoder.getURL(), {query: query});

	        if (isObject) {
	            if (_.types) {
	                if (isArray(_.types)) {
	                    url += '&types=' + _.types.join();
	                } else {
	                    url += '&types=' + _.types;
	                }
	            }

	            if (_.country) {
	                if (isArray(_.country)) {
	                    url += '&country=' + _.country.join();
	                } else {
	                    url += '&country=' + _.country;
	                }
	            }

	            if (_.proximity) {
	                var proximity = roundTo(L.latLng(_.proximity), 3);
	                url += '&proximity=' + proximity.lng + ',' + proximity.lat;
	            }

	            if (typeof _.autocomplete === 'boolean') {
	                url += '&autocomplete=' + _.autocomplete;
	            }
	        }

	        return url;
	    };

	    geocoder.query = function(_, callback) {
	        util.strict(callback, 'function');

	        request(geocoder.queryURL(_), function(err, json) {
	            if (json && (json.length || json.features)) {
	                var res = {
	                    results: json
	                };
	                if (json.features && json.features.length) {
	                    res.latlng = [
	                        json.features[0].center[1],
	                        json.features[0].center[0]];

	                    if (json.features[0].bbox) {
	                        res.bounds = json.features[0].bbox;
	                        res.lbounds = util.lbounds(res.bounds);
	                    }
	                }
	                callback(null, res);
	            } else callback(err || true);
	        });

	        return geocoder;
	    };

	    // a reverse geocode:
	    //
	    //  geocoder.reverseQuery([80, 20])
	    geocoder.reverseQuery = function(_, callback) {
	        var q = '';

	        // sort through different ways people represent lat and lon pairs
	        function normalize(x) {
	            var latLng;
	            if (x.lat !== undefined && x.lng !== undefined) {
	                latLng = L.latLng(x.lat, x.lng);
	            } else if (x.lat !== undefined && x.lon !== undefined) {
	                latLng = L.latLng(x.lat, x.lon);
	            } else {
	                latLng = L.latLng(x[1], x[0]);
	            }
	            latLng = roundTo(latLng, 5);
	            return latLng.lng + ',' + latLng.lat;
	        }

	        if (_.length && _[0].length) {
	            for (var i = 0, pts = []; i < _.length; i++) {
	                pts.push(normalize(_[i]));
	            }
	            q = pts.join(';');
	        } else {
	            q = normalize(_);
	        }

	        request(geocoder.queryURL(q), function(err, json) {
	            callback(err, json);
	        });

	        return geocoder;
	    };

	    return geocoder;
	};


/***/ },
/* 9 */
/***/ function(module, exports) {

	module.exports = Array.isArray || function (arr) {
	  return Object.prototype.toString.call(arr) == '[object Array]';
	};


/***/ },
/* 10 */
/***/ function(module, exports) {

	'use strict';

	function contains(item, list) {
	    if (!list || !list.length) return false;
	    for (var i = 0; i < list.length; i++) {
	        if (list[i] === item) return true;
	    }
	    return false;
	}

	module.exports = {
	    idUrl: function(_, t) {
	        if (_.indexOf('/') === -1) t.loadID(_);
	        else t.loadURL(_);
	    },
	    log: function(_) {
	        if (typeof console === 'object' &&
	            typeof console.error === 'function') {
	            console.error(_);
	        }
	    },
	    strict: function(_, type) {
	        if (typeof _ !== type) {
	            throw new Error('Invalid argument: ' + type + ' expected');
	        }
	    },
	    strict_instance: function(_, klass, name) {
	        if (!(_ instanceof klass)) {
	            throw new Error('Invalid argument: ' + name + ' expected');
	        }
	    },
	    strict_oneof: function(_, values) {
	        if (!contains(_, values)) {
	            throw new Error('Invalid argument: ' + _ + ' given, valid values are ' +
	                values.join(', '));
	        }
	    },
	    strip_tags: function(_) {
	        return _.replace(/<[^<]+>/g, '');
	    },
	    lbounds: function(_) {
	        // leaflet-compatible bounds, since leaflet does not do geojson
	        return new L.LatLngBounds([[_[1], _[0]], [_[3], _[2]]]);
	    }
	};


/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var config = __webpack_require__(12),
	    version = __webpack_require__(13).version;

	module.exports = function(path, accessToken) {
	    accessToken = accessToken || L.mapbox.accessToken;

	    if (!accessToken && config.REQUIRE_ACCESS_TOKEN) {
	        throw new Error('An API access token is required to use Mapbox.js. ' +
	            'See https://www.mapbox.com/mapbox.js/api/v' + version + '/api-access-tokens/');
	    }

	    var url = (document.location.protocol === 'https:' || config.FORCE_HTTPS) ? config.HTTPS_URL : config.HTTP_URL;
	    url = url.replace(/\/v4$/, '');
	    url += path;

	    if (config.REQUIRE_ACCESS_TOKEN) {
	        if (accessToken[0] === 's') {
	            throw new Error('Use a public access token (pk.*) with Mapbox.js, not a secret access token (sk.*). ' +
	                'See https://www.mapbox.com/mapbox.js/api/v' + version + '/api-access-tokens/');
	        }

	        url += url.indexOf('?') !== -1 ? '&access_token=' : '?access_token=';
	        url += accessToken;
	    }

	    return url;
	};

	module.exports.tileJSON = function(urlOrMapID, accessToken) {

	    if (urlOrMapID.indexOf('mapbox://styles') === 0) {
	        throw new Error('Styles created with Mapbox Studio need to be used with ' +
	            'L.mapbox.styleLayer, not L.mapbox.tileLayer');
	    }

	    if (urlOrMapID.indexOf('/') !== -1)
	        return urlOrMapID;

	    var url = module.exports('/v4/' + urlOrMapID + '.json', accessToken);

	    // TileJSON requests need a secure flag appended to their URLs so
	    // that the server knows to send SSL-ified resource references.
	    if (url.indexOf('https') === 0)
	        url += '&secure';

	    return url;
	};


	module.exports.style = function(styleURL, accessToken) {
	    if (styleURL.indexOf('mapbox://styles/') === -1) throw new Error('Incorrectly formatted Mapbox style at ' + styleURL);

	    var ownerIDStyle = styleURL.split('mapbox://styles/')[1];
	    var url = module.exports('/styles/v1/' + ownerIDStyle, accessToken)
	        .replace('http://', 'https://');

	    return url;
	};


/***/ },
/* 12 */
/***/ function(module, exports) {

	'use strict';

	module.exports = {
	    HTTP_URL: 'http://a.tiles.mapbox.com/v4',
	    HTTPS_URL: 'https://a.tiles.mapbox.com/v4',
	    FORCE_HTTPS: false,
	    REQUIRE_ACCESS_TOKEN: true
	};


/***/ },
/* 13 */
/***/ function(module, exports) {

	module.exports = {
		"_args": [
			[
				{
					"raw": "mapbox.js@^2.4.0",
					"scope": null,
					"escapedName": "mapbox.js",
					"name": "mapbox.js",
					"rawSpec": "^2.4.0",
					"spec": ">=2.4.0 <3.0.0",
					"type": "range"
				},
				"/Users/ian/Development/eon-map-npm"
			]
		],
		"_from": "mapbox.js@>=2.4.0 <3.0.0",
		"_id": "mapbox.js@2.4.0",
		"_inCache": true,
		"_installable": true,
		"_location": "/mapbox.js",
		"_nodeVersion": "5.9.1",
		"_npmOperationalInternal": {
			"host": "packages-16-east.internal.npmjs.com",
			"tmp": "tmp/mapbox.js-2.4.0.tgz_1459367631719_0.44528863835148513"
		},
		"_npmUser": {
			"name": "tmcw",
			"email": "tom@macwright.org"
		},
		"_npmVersion": "3.7.3",
		"_phantomChildren": {},
		"_requested": {
			"raw": "mapbox.js@^2.4.0",
			"scope": null,
			"escapedName": "mapbox.js",
			"name": "mapbox.js",
			"rawSpec": "^2.4.0",
			"spec": ">=2.4.0 <3.0.0",
			"type": "range"
		},
		"_requiredBy": [
			"/"
		],
		"_resolved": "https://registry.npmjs.org/mapbox.js/-/mapbox.js-2.4.0.tgz",
		"_shasum": "c43b084a5dd71334c83ee1df28fa67443d73c29c",
		"_shrinkwrap": null,
		"_spec": "mapbox.js@^2.4.0",
		"_where": "/Users/ian/Development/eon-map-npm",
		"author": {
			"name": "Mapbox"
		},
		"bugs": {
			"url": "https://github.com/mapbox/mapbox.js/issues"
		},
		"dependencies": {
			"corslite": "0.0.6",
			"isarray": "0.0.1",
			"leaflet": "0.7.7",
			"mustache": "2.2.1",
			"sanitize-caja": "0.1.3"
		},
		"description": "mapbox javascript api",
		"devDependencies": {
			"browserify": "^13.0.0",
			"clean-css": "~2.0.7",
			"eslint": "^0.23.0",
			"expect.js": "0.3.1",
			"happen": "0.1.3",
			"leaflet-fullscreen": "0.0.4",
			"leaflet-hash": "0.2.1",
			"marked": "~0.3.0",
			"minifyify": "^6.1.0",
			"minimist": "0.0.5",
			"mocha": "2.4.5",
			"mocha-phantomjs": "4.0.2",
			"sinon": "1.10.2"
		},
		"directories": {},
		"dist": {
			"shasum": "c43b084a5dd71334c83ee1df28fa67443d73c29c",
			"tarball": "https://registry.npmjs.org/mapbox.js/-/mapbox.js-2.4.0.tgz"
		},
		"engines": {
			"node": "*"
		},
		"gitHead": "60c85505a0c99805a94c9ea9262412c43c9e971a",
		"homepage": "http://mapbox.com/",
		"license": "BSD-3-Clause",
		"main": "src/index.js",
		"maintainers": [
			{
				"name": "1ec5",
				"email": "mxn@1ec5.org"
			},
			{
				"name": "aaronlidman",
				"email": "aaronlidman@gmail.com"
			},
			{
				"name": "ajashton",
				"email": "aj.ashton@gmail.com"
			},
			{
				"name": "alulsh",
				"email": "ulsh@mapbox.com"
			},
			{
				"name": "ansis",
				"email": "ansis.brammanis@gmail.com"
			},
			{
				"name": "apendleton",
				"email": "andrew@mapbox.com"
			},
			{
				"name": "bergwerkgis",
				"email": "wb@bergwerk-gis.at"
			},
			{
				"name": "bhousel",
				"email": "bryan@mapbox.com"
			},
			{
				"name": "bsudekum",
				"email": "bobby@mapbox.com"
			},
			{
				"name": "camilleanne",
				"email": "camille@mapbox.com"
			},
			{
				"name": "dnomadb",
				"email": "damon@mapbox.com"
			},
			{
				"name": "dthompson",
				"email": "dthompson@gmail.com"
			},
			{
				"name": "emilymcafee",
				"email": "emily@mapbox.com"
			},
			{
				"name": "flippmoke",
				"email": "flippmoke@gmail.com"
			},
			{
				"name": "freenerd",
				"email": "spam@freenerd.de"
			},
			{
				"name": "gretacb",
				"email": "carol@mapbox.com"
			},
			{
				"name": "ian29",
				"email": "ian.villeda@gmail.com"
			},
			{
				"name": "ianshward",
				"email": "ian@mapbox.com"
			},
			{
				"name": "ingalls",
				"email": "nicholas.ingalls@gmail.com"
			},
			{
				"name": "jfirebaugh",
				"email": "john.firebaugh@gmail.com"
			},
			{
				"name": "jrpruit1",
				"email": "jake@jakepruitt.com"
			},
			{
				"name": "karenzshea",
				"email": "karen@mapbox.com"
			},
			{
				"name": "kelvinabrokwa",
				"email": "kelvinabrokwa@gmail.com"
			},
			{
				"name": "kkaefer",
				"email": "kkaefer@gmail.com"
			},
			{
				"name": "lbud",
				"email": "lauren@mapbox.com"
			},
			{
				"name": "lucaswoj",
				"email": "lucas@lucaswoj.com"
			},
			{
				"name": "lxbarth",
				"email": "alex@mapbox.com"
			},
			{
				"name": "lyzidiamond",
				"email": "lyzi@mapbox.com"
			},
			{
				"name": "mapbox-admin",
				"email": "accounts@mapbox.com"
			},
			{
				"name": "mateov",
				"email": "matt@mapbox.com"
			},
			{
				"name": "mcwhittemore",
				"email": "mcwhittemore@gmail.com"
			},
			{
				"name": "miccolis",
				"email": "jeff@miccolis.net"
			},
			{
				"name": "mikemorris",
				"email": "michael.patrick.morris@gmail.com"
			},
			{
				"name": "morganherlocker",
				"email": "morgan.herlocker@gmail.com"
			},
			{
				"name": "mourner",
				"email": "agafonkin@gmail.com"
			},
			{
				"name": "mtirwin",
				"email": "irwin@mapbox.com"
			},
			{
				"name": "nickidlugash",
				"email": "nicki@mapbox.com"
			},
			{
				"name": "rclark",
				"email": "ryan.clark.j@gmail.com"
			},
			{
				"name": "samanbb",
				"email": "saman@mapbox.com"
			},
			{
				"name": "sbma44",
				"email": "tlee@mapbox.com"
			},
			{
				"name": "scothis",
				"email": "scothis@gmail.com"
			},
			{
				"name": "sgillies",
				"email": "sean@mapbox.com"
			},
			{
				"name": "springmeyer",
				"email": "dane@mapbox.com"
			},
			{
				"name": "themarex",
				"email": "patrick@mapbox.com"
			},
			{
				"name": "tmcw",
				"email": "tom@macwright.org"
			},
			{
				"name": "tristen",
				"email": "tristen.brown@gmail.com"
			},
			{
				"name": "willwhite",
				"email": "will@mapbox.com"
			},
			{
				"name": "yhahn",
				"email": "young@mapbox.com"
			}
		],
		"name": "mapbox.js",
		"optionalDependencies": {},
		"readme": "ERROR: No README data found!",
		"repository": {
			"type": "git",
			"url": "git://github.com/mapbox/mapbox.js.git"
		},
		"scripts": {
			"test": "eslint --no-eslintrc -c .eslintrc src && mocha-phantomjs test/index.html"
		},
		"version": "2.4.0"
	};

/***/ },
/* 14 */
/***/ function(module, exports) {

	'use strict';

	var Feedback = L.Class.extend({
	    includes: L.Mixin.Events,
	    data: {},
	    record: function(data) {
	        L.extend(this.data, data);
	        this.fire('change');
	    }
	});

	module.exports = new Feedback();


/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var corslite = __webpack_require__(16),
	    strict = __webpack_require__(10).strict,
	    config = __webpack_require__(12);

	var protocol = /^(https?:)?(?=\/\/(.|api)\.tiles\.mapbox\.com\/)/;

	module.exports = function(url, callback) {
	    strict(url, 'string');
	    strict(callback, 'function');

	    url = url.replace(protocol, function(match, protocol) {
	        if (!('withCredentials' in new window.XMLHttpRequest())) {
	            // XDomainRequest in use; doesn't support cross-protocol requests
	            return document.location.protocol;
	        } else if (protocol === 'https:' || document.location.protocol === 'https:' || config.FORCE_HTTPS) {
	            return 'https:';
	        } else {
	            return 'http:';
	        }
	    });

	    function onload(err, resp) {
	        if (!err && resp) {
	            resp = JSON.parse(resp.responseText);
	        }
	        callback(err, resp);
	    }

	    return corslite(url, onload);
	};


/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	function corslite(url, callback, cors) {
	    var sent = false;

	    if (typeof window.XMLHttpRequest === 'undefined') {
	        return callback(Error('Browser not supported'));
	    }

	    if (typeof cors === 'undefined') {
	        var m = url.match(/^\s*https?:\/\/[^\/]*/);
	        cors = m && (m[0] !== location.protocol + '//' + location.domain +
	                (location.port ? ':' + location.port : ''));
	    }

	    var x = new window.XMLHttpRequest();

	    function isSuccessful(status) {
	        return status >= 200 && status < 300 || status === 304;
	    }

	    if (cors && !('withCredentials' in x)) {
	        // IE8-9
	        x = new window.XDomainRequest();

	        // Ensure callback is never called synchronously, i.e., before
	        // x.send() returns (this has been observed in the wild).
	        // See https://github.com/mapbox/mapbox.js/issues/472
	        var original = callback;
	        callback = function() {
	            if (sent) {
	                original.apply(this, arguments);
	            } else {
	                var that = this, args = arguments;
	                setTimeout(function() {
	                    original.apply(that, args);
	                }, 0);
	            }
	        }
	    }

	    function loaded() {
	        if (
	            // XDomainRequest
	            x.status === undefined ||
	            // modern browsers
	            isSuccessful(x.status)) callback.call(x, null, x);
	        else callback.call(x, x, null);
	    }

	    // Both `onreadystatechange` and `onload` can fire. `onreadystatechange`
	    // has [been supported for longer](http://stackoverflow.com/a/9181508/229001).
	    if ('onload' in x) {
	        x.onload = loaded;
	    } else {
	        x.onreadystatechange = function readystate() {
	            if (x.readyState === 4) {
	                loaded();
	            }
	        };
	    }

	    // Call the callback with the XMLHttpRequest object as an error and prevent
	    // it from ever being called again by reassigning it to `noop`
	    x.onerror = function error(evt) {
	        // XDomainRequest provides no evt parameter
	        callback.call(this, evt || true, null);
	        callback = function() { };
	    };

	    // IE9 must have onprogress be set to a unique function.
	    x.onprogress = function() { };

	    x.ontimeout = function(evt) {
	        callback.call(this, evt, null);
	        callback = function() { };
	    };

	    x.onabort = function(evt) {
	        callback.call(this, evt, null);
	        callback = function() { };
	    };

	    // GET is the only supported HTTP Verb by XDomainRequest and is the
	    // only one supported here.
	    x.open('GET', url, true);

	    // Send the request. Sending data is not supported.
	    x.send(null);
	    sent = true;

	    return x;
	}

	if (true) module.exports = corslite;


/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var util = __webpack_require__(10),
	    Mustache = __webpack_require__(18);

	var GridControl = L.Control.extend({

	    options: {
	        pinnable: true,
	        follow: false,
	        sanitizer: __webpack_require__(19),
	        touchTeaser: true,
	        location: true
	    },

	    _currentContent: '',

	    // pinned means that this control is on a feature and the user has likely
	    // clicked. pinned will not become false unless the user clicks off
	    // of the feature onto another or clicks x
	    _pinned: false,

	    initialize: function(_, options) {
	        L.Util.setOptions(this, options);
	        util.strict_instance(_, L.Class, 'L.mapbox.gridLayer');
	        this._layer = _;
	    },

	    setTemplate: function(template) {
	        util.strict(template, 'string');
	        this.options.template = template;
	        return this;
	    },

	    _template: function(format, data) {
	        if (!data) return;
	        var template = this.options.template || this._layer.getTileJSON().template;
	        if (template) {
	            var d = {};
	            d['__' + format + '__'] = true;
	            return this.options.sanitizer(
	                Mustache.to_html(template, L.extend(d, data)));
	        }
	    },

	    // change the content of the tooltip HTML if it has changed, otherwise
	    // noop
	    _show: function(content, o) {
	        if (content === this._currentContent) return;

	        this._currentContent = content;

	        if (this.options.follow) {
	            this._popup.setContent(content)
	                .setLatLng(o.latLng);
	            if (this._map._popup !== this._popup) this._popup.openOn(this._map);
	        } else {
	            this._container.style.display = 'block';
	            this._contentWrapper.innerHTML = content;
	        }
	    },

	    hide: function() {
	        this._pinned = false;
	        this._currentContent = '';

	        this._map.closePopup();
	        this._container.style.display = 'none';
	        this._contentWrapper.innerHTML = '';

	        L.DomUtil.removeClass(this._container, 'closable');

	        return this;
	    },

	    _mouseover: function(o) {
	        if (o.data) {
	            L.DomUtil.addClass(this._map._container, 'map-clickable');
	        } else {
	            L.DomUtil.removeClass(this._map._container, 'map-clickable');
	        }

	        if (this._pinned) return;

	        var content = this._template('teaser', o.data);
	        if (content) {
	            this._show(content, o);
	        } else {
	            this.hide();
	        }
	    },

	    _mousemove: function(o) {
	        if (this._pinned) return;
	        if (!this.options.follow) return;

	        this._popup.setLatLng(o.latLng);
	    },

	    _navigateTo: function(url) {
	        window.top.location.href = url;
	    },

	    _click: function(o) {

	        var location_formatted = this._template('location', o.data);
	        if (this.options.location && location_formatted &&
	            location_formatted.search(/^https?:/) === 0) {
	            return this._navigateTo(this._template('location', o.data));
	        }

	        if (!this.options.pinnable) return;

	        var content = this._template('full', o.data);

	        if (!content && this.options.touchTeaser && L.Browser.touch) {
	            content = this._template('teaser', o.data);
	        }

	        if (content) {
	            L.DomUtil.addClass(this._container, 'closable');
	            this._pinned = true;
	            this._show(content, o);
	        } else if (this._pinned) {
	            L.DomUtil.removeClass(this._container, 'closable');
	            this._pinned = false;
	            this.hide();
	        }
	    },

	    _onPopupClose: function() {
	        this._currentContent = null;
	        this._pinned = false;
	    },

	    _createClosebutton: function(container, fn) {
	        var link = L.DomUtil.create('a', 'close', container);

	        link.innerHTML = 'close';
	        link.href = '#';
	        link.title = 'close';

	        L.DomEvent
	            .on(link, 'click', L.DomEvent.stopPropagation)
	            .on(link, 'mousedown', L.DomEvent.stopPropagation)
	            .on(link, 'dblclick', L.DomEvent.stopPropagation)
	            .on(link, 'click', L.DomEvent.preventDefault)
	            .on(link, 'click', fn, this);

	        return link;
	    },

	    onAdd: function(map) {
	        this._map = map;

	        var className = 'leaflet-control-grid map-tooltip',
	            container = L.DomUtil.create('div', className),
	            contentWrapper = L.DomUtil.create('div', 'map-tooltip-content');

	        // hide the container element initially
	        container.style.display = 'none';
	        this._createClosebutton(container, this.hide);
	        container.appendChild(contentWrapper);

	        this._contentWrapper = contentWrapper;
	        this._popup = new L.Popup({ autoPan: false, closeOnClick: false });

	        map.on('popupclose', this._onPopupClose, this);

	        L.DomEvent
	            .disableClickPropagation(container)
	            // allow people to scroll tooltips with mousewheel
	            .addListener(container, 'mousewheel', L.DomEvent.stopPropagation);

	        this._layer
	            .on('mouseover', this._mouseover, this)
	            .on('mousemove', this._mousemove, this)
	            .on('click', this._click, this);

	        return container;
	    },

	    onRemove: function (map) {

	        map.off('popupclose', this._onPopupClose, this);

	        this._layer
	            .off('mouseover', this._mouseover, this)
	            .off('mousemove', this._mousemove, this)
	            .off('click', this._click, this);
	    }
	});

	module.exports.GridControl = GridControl;

	module.exports.gridControl = function(_, options) {
	    return new GridControl(_, options);
	};


/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	 * mustache.js - Logic-less {{mustache}} templates with JavaScript
	 * http://github.com/janl/mustache.js
	 */

	/*global define: false Mustache: true*/

	(function defineMustache (global, factory) {
	  if (typeof exports === 'object' && exports && typeof exports.nodeName !== 'string') {
	    factory(exports); // CommonJS
	  } else if (true) {
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)); // AMD
	  } else {
	    global.Mustache = {};
	    factory(global.Mustache); // script, wsh, asp
	  }
	}(this, function mustacheFactory (mustache) {

	  var objectToString = Object.prototype.toString;
	  var isArray = Array.isArray || function isArrayPolyfill (object) {
	    return objectToString.call(object) === '[object Array]';
	  };

	  function isFunction (object) {
	    return typeof object === 'function';
	  }

	  /**
	   * More correct typeof string handling array
	   * which normally returns typeof 'object'
	   */
	  function typeStr (obj) {
	    return isArray(obj) ? 'array' : typeof obj;
	  }

	  function escapeRegExp (string) {
	    return string.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, '\\$&');
	  }

	  /**
	   * Null safe way of checking whether or not an object,
	   * including its prototype, has a given property
	   */
	  function hasProperty (obj, propName) {
	    return obj != null && typeof obj === 'object' && (propName in obj);
	  }

	  // Workaround for https://issues.apache.org/jira/browse/COUCHDB-577
	  // See https://github.com/janl/mustache.js/issues/189
	  var regExpTest = RegExp.prototype.test;
	  function testRegExp (re, string) {
	    return regExpTest.call(re, string);
	  }

	  var nonSpaceRe = /\S/;
	  function isWhitespace (string) {
	    return !testRegExp(nonSpaceRe, string);
	  }

	  var entityMap = {
	    '&': '&amp;',
	    '<': '&lt;',
	    '>': '&gt;',
	    '"': '&quot;',
	    "'": '&#39;',
	    '/': '&#x2F;',
	    '`': '&#x60;',
	    '=': '&#x3D;'
	  };

	  function escapeHtml (string) {
	    return String(string).replace(/[&<>"'`=\/]/g, function fromEntityMap (s) {
	      return entityMap[s];
	    });
	  }

	  var whiteRe = /\s*/;
	  var spaceRe = /\s+/;
	  var equalsRe = /\s*=/;
	  var curlyRe = /\s*\}/;
	  var tagRe = /#|\^|\/|>|\{|&|=|!/;

	  /**
	   * Breaks up the given `template` string into a tree of tokens. If the `tags`
	   * argument is given here it must be an array with two string values: the
	   * opening and closing tags used in the template (e.g. [ "<%", "%>" ]). Of
	   * course, the default is to use mustaches (i.e. mustache.tags).
	   *
	   * A token is an array with at least 4 elements. The first element is the
	   * mustache symbol that was used inside the tag, e.g. "#" or "&". If the tag
	   * did not contain a symbol (i.e. {{myValue}}) this element is "name". For
	   * all text that appears outside a symbol this element is "text".
	   *
	   * The second element of a token is its "value". For mustache tags this is
	   * whatever else was inside the tag besides the opening symbol. For text tokens
	   * this is the text itself.
	   *
	   * The third and fourth elements of the token are the start and end indices,
	   * respectively, of the token in the original template.
	   *
	   * Tokens that are the root node of a subtree contain two more elements: 1) an
	   * array of tokens in the subtree and 2) the index in the original template at
	   * which the closing tag for that section begins.
	   */
	  function parseTemplate (template, tags) {
	    if (!template)
	      return [];

	    var sections = [];     // Stack to hold section tokens
	    var tokens = [];       // Buffer to hold the tokens
	    var spaces = [];       // Indices of whitespace tokens on the current line
	    var hasTag = false;    // Is there a {{tag}} on the current line?
	    var nonSpace = false;  // Is there a non-space char on the current line?

	    // Strips all whitespace tokens array for the current line
	    // if there was a {{#tag}} on it and otherwise only space.
	    function stripSpace () {
	      if (hasTag && !nonSpace) {
	        while (spaces.length)
	          delete tokens[spaces.pop()];
	      } else {
	        spaces = [];
	      }

	      hasTag = false;
	      nonSpace = false;
	    }

	    var openingTagRe, closingTagRe, closingCurlyRe;
	    function compileTags (tagsToCompile) {
	      if (typeof tagsToCompile === 'string')
	        tagsToCompile = tagsToCompile.split(spaceRe, 2);

	      if (!isArray(tagsToCompile) || tagsToCompile.length !== 2)
	        throw new Error('Invalid tags: ' + tagsToCompile);

	      openingTagRe = new RegExp(escapeRegExp(tagsToCompile[0]) + '\\s*');
	      closingTagRe = new RegExp('\\s*' + escapeRegExp(tagsToCompile[1]));
	      closingCurlyRe = new RegExp('\\s*' + escapeRegExp('}' + tagsToCompile[1]));
	    }

	    compileTags(tags || mustache.tags);

	    var scanner = new Scanner(template);

	    var start, type, value, chr, token, openSection;
	    while (!scanner.eos()) {
	      start = scanner.pos;

	      // Match any text between tags.
	      value = scanner.scanUntil(openingTagRe);

	      if (value) {
	        for (var i = 0, valueLength = value.length; i < valueLength; ++i) {
	          chr = value.charAt(i);

	          if (isWhitespace(chr)) {
	            spaces.push(tokens.length);
	          } else {
	            nonSpace = true;
	          }

	          tokens.push([ 'text', chr, start, start + 1 ]);
	          start += 1;

	          // Check for whitespace on the current line.
	          if (chr === '\n')
	            stripSpace();
	        }
	      }

	      // Match the opening tag.
	      if (!scanner.scan(openingTagRe))
	        break;

	      hasTag = true;

	      // Get the tag type.
	      type = scanner.scan(tagRe) || 'name';
	      scanner.scan(whiteRe);

	      // Get the tag value.
	      if (type === '=') {
	        value = scanner.scanUntil(equalsRe);
	        scanner.scan(equalsRe);
	        scanner.scanUntil(closingTagRe);
	      } else if (type === '{') {
	        value = scanner.scanUntil(closingCurlyRe);
	        scanner.scan(curlyRe);
	        scanner.scanUntil(closingTagRe);
	        type = '&';
	      } else {
	        value = scanner.scanUntil(closingTagRe);
	      }

	      // Match the closing tag.
	      if (!scanner.scan(closingTagRe))
	        throw new Error('Unclosed tag at ' + scanner.pos);

	      token = [ type, value, start, scanner.pos ];
	      tokens.push(token);

	      if (type === '#' || type === '^') {
	        sections.push(token);
	      } else if (type === '/') {
	        // Check section nesting.
	        openSection = sections.pop();

	        if (!openSection)
	          throw new Error('Unopened section "' + value + '" at ' + start);

	        if (openSection[1] !== value)
	          throw new Error('Unclosed section "' + openSection[1] + '" at ' + start);
	      } else if (type === 'name' || type === '{' || type === '&') {
	        nonSpace = true;
	      } else if (type === '=') {
	        // Set the tags for the next time around.
	        compileTags(value);
	      }
	    }

	    // Make sure there are no open sections when we're done.
	    openSection = sections.pop();

	    if (openSection)
	      throw new Error('Unclosed section "' + openSection[1] + '" at ' + scanner.pos);

	    return nestTokens(squashTokens(tokens));
	  }

	  /**
	   * Combines the values of consecutive text tokens in the given `tokens` array
	   * to a single token.
	   */
	  function squashTokens (tokens) {
	    var squashedTokens = [];

	    var token, lastToken;
	    for (var i = 0, numTokens = tokens.length; i < numTokens; ++i) {
	      token = tokens[i];

	      if (token) {
	        if (token[0] === 'text' && lastToken && lastToken[0] === 'text') {
	          lastToken[1] += token[1];
	          lastToken[3] = token[3];
	        } else {
	          squashedTokens.push(token);
	          lastToken = token;
	        }
	      }
	    }

	    return squashedTokens;
	  }

	  /**
	   * Forms the given array of `tokens` into a nested tree structure where
	   * tokens that represent a section have two additional items: 1) an array of
	   * all tokens that appear in that section and 2) the index in the original
	   * template that represents the end of that section.
	   */
	  function nestTokens (tokens) {
	    var nestedTokens = [];
	    var collector = nestedTokens;
	    var sections = [];

	    var token, section;
	    for (var i = 0, numTokens = tokens.length; i < numTokens; ++i) {
	      token = tokens[i];

	      switch (token[0]) {
	        case '#':
	        case '^':
	          collector.push(token);
	          sections.push(token);
	          collector = token[4] = [];
	          break;
	        case '/':
	          section = sections.pop();
	          section[5] = token[2];
	          collector = sections.length > 0 ? sections[sections.length - 1][4] : nestedTokens;
	          break;
	        default:
	          collector.push(token);
	      }
	    }

	    return nestedTokens;
	  }

	  /**
	   * A simple string scanner that is used by the template parser to find
	   * tokens in template strings.
	   */
	  function Scanner (string) {
	    this.string = string;
	    this.tail = string;
	    this.pos = 0;
	  }

	  /**
	   * Returns `true` if the tail is empty (end of string).
	   */
	  Scanner.prototype.eos = function eos () {
	    return this.tail === '';
	  };

	  /**
	   * Tries to match the given regular expression at the current position.
	   * Returns the matched text if it can match, the empty string otherwise.
	   */
	  Scanner.prototype.scan = function scan (re) {
	    var match = this.tail.match(re);

	    if (!match || match.index !== 0)
	      return '';

	    var string = match[0];

	    this.tail = this.tail.substring(string.length);
	    this.pos += string.length;

	    return string;
	  };

	  /**
	   * Skips all text until the given regular expression can be matched. Returns
	   * the skipped string, which is the entire tail if no match can be made.
	   */
	  Scanner.prototype.scanUntil = function scanUntil (re) {
	    var index = this.tail.search(re), match;

	    switch (index) {
	      case -1:
	        match = this.tail;
	        this.tail = '';
	        break;
	      case 0:
	        match = '';
	        break;
	      default:
	        match = this.tail.substring(0, index);
	        this.tail = this.tail.substring(index);
	    }

	    this.pos += match.length;

	    return match;
	  };

	  /**
	   * Represents a rendering context by wrapping a view object and
	   * maintaining a reference to the parent context.
	   */
	  function Context (view, parentContext) {
	    this.view = view;
	    this.cache = { '.': this.view };
	    this.parent = parentContext;
	  }

	  /**
	   * Creates a new context using the given view with this context
	   * as the parent.
	   */
	  Context.prototype.push = function push (view) {
	    return new Context(view, this);
	  };

	  /**
	   * Returns the value of the given name in this context, traversing
	   * up the context hierarchy if the value is absent in this context's view.
	   */
	  Context.prototype.lookup = function lookup (name) {
	    var cache = this.cache;

	    var value;
	    if (cache.hasOwnProperty(name)) {
	      value = cache[name];
	    } else {
	      var context = this, names, index, lookupHit = false;

	      while (context) {
	        if (name.indexOf('.') > 0) {
	          value = context.view;
	          names = name.split('.');
	          index = 0;

	          /**
	           * Using the dot notion path in `name`, we descend through the
	           * nested objects.
	           *
	           * To be certain that the lookup has been successful, we have to
	           * check if the last object in the path actually has the property
	           * we are looking for. We store the result in `lookupHit`.
	           *
	           * This is specially necessary for when the value has been set to
	           * `undefined` and we want to avoid looking up parent contexts.
	           **/
	          while (value != null && index < names.length) {
	            if (index === names.length - 1)
	              lookupHit = hasProperty(value, names[index]);

	            value = value[names[index++]];
	          }
	        } else {
	          value = context.view[name];
	          lookupHit = hasProperty(context.view, name);
	        }

	        if (lookupHit)
	          break;

	        context = context.parent;
	      }

	      cache[name] = value;
	    }

	    if (isFunction(value))
	      value = value.call(this.view);

	    return value;
	  };

	  /**
	   * A Writer knows how to take a stream of tokens and render them to a
	   * string, given a context. It also maintains a cache of templates to
	   * avoid the need to parse the same template twice.
	   */
	  function Writer () {
	    this.cache = {};
	  }

	  /**
	   * Clears all cached templates in this writer.
	   */
	  Writer.prototype.clearCache = function clearCache () {
	    this.cache = {};
	  };

	  /**
	   * Parses and caches the given `template` and returns the array of tokens
	   * that is generated from the parse.
	   */
	  Writer.prototype.parse = function parse (template, tags) {
	    var cache = this.cache;
	    var tokens = cache[template];

	    if (tokens == null)
	      tokens = cache[template] = parseTemplate(template, tags);

	    return tokens;
	  };

	  /**
	   * High-level method that is used to render the given `template` with
	   * the given `view`.
	   *
	   * The optional `partials` argument may be an object that contains the
	   * names and templates of partials that are used in the template. It may
	   * also be a function that is used to load partial templates on the fly
	   * that takes a single argument: the name of the partial.
	   */
	  Writer.prototype.render = function render (template, view, partials) {
	    var tokens = this.parse(template);
	    var context = (view instanceof Context) ? view : new Context(view);
	    return this.renderTokens(tokens, context, partials, template);
	  };

	  /**
	   * Low-level method that renders the given array of `tokens` using
	   * the given `context` and `partials`.
	   *
	   * Note: The `originalTemplate` is only ever used to extract the portion
	   * of the original template that was contained in a higher-order section.
	   * If the template doesn't use higher-order sections, this argument may
	   * be omitted.
	   */
	  Writer.prototype.renderTokens = function renderTokens (tokens, context, partials, originalTemplate) {
	    var buffer = '';

	    var token, symbol, value;
	    for (var i = 0, numTokens = tokens.length; i < numTokens; ++i) {
	      value = undefined;
	      token = tokens[i];
	      symbol = token[0];

	      if (symbol === '#') value = this.renderSection(token, context, partials, originalTemplate);
	      else if (symbol === '^') value = this.renderInverted(token, context, partials, originalTemplate);
	      else if (symbol === '>') value = this.renderPartial(token, context, partials, originalTemplate);
	      else if (symbol === '&') value = this.unescapedValue(token, context);
	      else if (symbol === 'name') value = this.escapedValue(token, context);
	      else if (symbol === 'text') value = this.rawValue(token);

	      if (value !== undefined)
	        buffer += value;
	    }

	    return buffer;
	  };

	  Writer.prototype.renderSection = function renderSection (token, context, partials, originalTemplate) {
	    var self = this;
	    var buffer = '';
	    var value = context.lookup(token[1]);

	    // This function is used to render an arbitrary template
	    // in the current context by higher-order sections.
	    function subRender (template) {
	      return self.render(template, context, partials);
	    }

	    if (!value) return;

	    if (isArray(value)) {
	      for (var j = 0, valueLength = value.length; j < valueLength; ++j) {
	        buffer += this.renderTokens(token[4], context.push(value[j]), partials, originalTemplate);
	      }
	    } else if (typeof value === 'object' || typeof value === 'string' || typeof value === 'number') {
	      buffer += this.renderTokens(token[4], context.push(value), partials, originalTemplate);
	    } else if (isFunction(value)) {
	      if (typeof originalTemplate !== 'string')
	        throw new Error('Cannot use higher-order sections without the original template');

	      // Extract the portion of the original template that the section contains.
	      value = value.call(context.view, originalTemplate.slice(token[3], token[5]), subRender);

	      if (value != null)
	        buffer += value;
	    } else {
	      buffer += this.renderTokens(token[4], context, partials, originalTemplate);
	    }
	    return buffer;
	  };

	  Writer.prototype.renderInverted = function renderInverted (token, context, partials, originalTemplate) {
	    var value = context.lookup(token[1]);

	    // Use JavaScript's definition of falsy. Include empty arrays.
	    // See https://github.com/janl/mustache.js/issues/186
	    if (!value || (isArray(value) && value.length === 0))
	      return this.renderTokens(token[4], context, partials, originalTemplate);
	  };

	  Writer.prototype.renderPartial = function renderPartial (token, context, partials) {
	    if (!partials) return;

	    var value = isFunction(partials) ? partials(token[1]) : partials[token[1]];
	    if (value != null)
	      return this.renderTokens(this.parse(value), context, partials, value);
	  };

	  Writer.prototype.unescapedValue = function unescapedValue (token, context) {
	    var value = context.lookup(token[1]);
	    if (value != null)
	      return value;
	  };

	  Writer.prototype.escapedValue = function escapedValue (token, context) {
	    var value = context.lookup(token[1]);
	    if (value != null)
	      return mustache.escape(value);
	  };

	  Writer.prototype.rawValue = function rawValue (token) {
	    return token[1];
	  };

	  mustache.name = 'mustache.js';
	  mustache.version = '2.2.1';
	  mustache.tags = [ '{{', '}}' ];

	  // All high-level mustache.* functions use this writer.
	  var defaultWriter = new Writer();

	  /**
	   * Clears all cached templates in the default writer.
	   */
	  mustache.clearCache = function clearCache () {
	    return defaultWriter.clearCache();
	  };

	  /**
	   * Parses and caches the given template in the default writer and returns the
	   * array of tokens it contains. Doing this ahead of time avoids the need to
	   * parse templates on the fly as they are rendered.
	   */
	  mustache.parse = function parse (template, tags) {
	    return defaultWriter.parse(template, tags);
	  };

	  /**
	   * Renders the `template` with the given `view` and `partials` using the
	   * default writer.
	   */
	  mustache.render = function render (template, view, partials) {
	    if (typeof template !== 'string') {
	      throw new TypeError('Invalid template! Template should be a "string" ' +
	                          'but "' + typeStr(template) + '" was given as the first ' +
	                          'argument for mustache#render(template, view, partials)');
	    }

	    return defaultWriter.render(template, view, partials);
	  };

	  // This is here for backwards compatibility with 0.4.x.,
	  /*eslint-disable */ // eslint wants camel cased function name
	  mustache.to_html = function to_html (template, view, partials, send) {
	    /*eslint-enable*/

	    var result = mustache.render(template, view, partials);

	    if (isFunction(send)) {
	      send(result);
	    } else {
	      return result;
	    }
	  };

	  // Export the escaping function so that the user may override it.
	  // See https://github.com/janl/mustache.js/issues/244
	  mustache.escape = escapeHtml;

	  // Export these mainly for testing, but also for advanced usage.
	  mustache.Scanner = Scanner;
	  mustache.Context = Context;
	  mustache.Writer = Writer;

	}));


/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	var html_sanitize = __webpack_require__(20);

	module.exports = function(_) {
	    if (!_) return '';
	    return html_sanitize(_, cleanUrl, cleanId);
	};

	// https://bugzilla.mozilla.org/show_bug.cgi?id=255107
	function cleanUrl(url) {
	    'use strict';
	    if (/^https?/.test(url.getScheme())) return url.toString();
	    if (/^mailto?/.test(url.getScheme())) return url.toString();
	    if ('data' == url.getScheme() && /^image/.test(url.getPath())) {
	        return url.toString();
	    }
	}

	function cleanId(id) { return id; }


/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	
	// Copyright (C) 2010 Google Inc.
	//
	// Licensed under the Apache License, Version 2.0 (the "License");
	// you may not use this file except in compliance with the License.
	// You may obtain a copy of the License at
	//
	//      http://www.apache.org/licenses/LICENSE-2.0
	//
	// Unless required by applicable law or agreed to in writing, software
	// distributed under the License is distributed on an "AS IS" BASIS,
	// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	// See the License for the specific language governing permissions and
	// limitations under the License.

	/**
	 * @fileoverview
	 * Implements RFC 3986 for parsing/formatting URIs.
	 *
	 * @author mikesamuel@gmail.com
	 * \@provides URI
	 * \@overrides window
	 */

	var URI = (function () {

	/**
	 * creates a uri from the string form.  The parser is relaxed, so special
	 * characters that aren't escaped but don't cause ambiguities will not cause
	 * parse failures.
	 *
	 * @return {URI|null}
	 */
	function parse(uriStr) {
	  var m = ('' + uriStr).match(URI_RE_);
	  if (!m) { return null; }
	  return new URI(
	      nullIfAbsent(m[1]),
	      nullIfAbsent(m[2]),
	      nullIfAbsent(m[3]),
	      nullIfAbsent(m[4]),
	      nullIfAbsent(m[5]),
	      nullIfAbsent(m[6]),
	      nullIfAbsent(m[7]));
	}


	/**
	 * creates a uri from the given parts.
	 *
	 * @param scheme {string} an unencoded scheme such as "http" or null
	 * @param credentials {string} unencoded user credentials or null
	 * @param domain {string} an unencoded domain name or null
	 * @param port {number} a port number in [1, 32768].
	 *    -1 indicates no port, as does null.
	 * @param path {string} an unencoded path
	 * @param query {Array.<string>|string|null} a list of unencoded cgi
	 *   parameters where even values are keys and odds the corresponding values
	 *   or an unencoded query.
	 * @param fragment {string} an unencoded fragment without the "#" or null.
	 * @return {URI}
	 */
	function create(scheme, credentials, domain, port, path, query, fragment) {
	  var uri = new URI(
	      encodeIfExists2(scheme, URI_DISALLOWED_IN_SCHEME_OR_CREDENTIALS_),
	      encodeIfExists2(
	          credentials, URI_DISALLOWED_IN_SCHEME_OR_CREDENTIALS_),
	      encodeIfExists(domain),
	      port > 0 ? port.toString() : null,
	      encodeIfExists2(path, URI_DISALLOWED_IN_PATH_),
	      null,
	      encodeIfExists(fragment));
	  if (query) {
	    if ('string' === typeof query) {
	      uri.setRawQuery(query.replace(/[^?&=0-9A-Za-z_\-~.%]/g, encodeOne));
	    } else {
	      uri.setAllParameters(query);
	    }
	  }
	  return uri;
	}
	function encodeIfExists(unescapedPart) {
	  if ('string' == typeof unescapedPart) {
	    return encodeURIComponent(unescapedPart);
	  }
	  return null;
	};
	/**
	 * if unescapedPart is non null, then escapes any characters in it that aren't
	 * valid characters in a url and also escapes any special characters that
	 * appear in extra.
	 *
	 * @param unescapedPart {string}
	 * @param extra {RegExp} a character set of characters in [\01-\177].
	 * @return {string|null} null iff unescapedPart == null.
	 */
	function encodeIfExists2(unescapedPart, extra) {
	  if ('string' == typeof unescapedPart) {
	    return encodeURI(unescapedPart).replace(extra, encodeOne);
	  }
	  return null;
	};
	/** converts a character in [\01-\177] to its url encoded equivalent. */
	function encodeOne(ch) {
	  var n = ch.charCodeAt(0);
	  return '%' + '0123456789ABCDEF'.charAt((n >> 4) & 0xf) +
	      '0123456789ABCDEF'.charAt(n & 0xf);
	}

	/**
	 * {@updoc
	 *  $ normPath('foo/./bar')
	 *  # 'foo/bar'
	 *  $ normPath('./foo')
	 *  # 'foo'
	 *  $ normPath('foo/.')
	 *  # 'foo'
	 *  $ normPath('foo//bar')
	 *  # 'foo/bar'
	 * }
	 */
	function normPath(path) {
	  return path.replace(/(^|\/)\.(?:\/|$)/g, '$1').replace(/\/{2,}/g, '/');
	}

	var PARENT_DIRECTORY_HANDLER = new RegExp(
	    ''
	    // A path break
	    + '(/|^)'
	    // followed by a non .. path element
	    // (cannot be . because normPath is used prior to this RegExp)
	    + '(?:[^./][^/]*|\\.{2,}(?:[^./][^/]*)|\\.{3,}[^/]*)'
	    // followed by .. followed by a path break.
	    + '/\\.\\.(?:/|$)');

	var PARENT_DIRECTORY_HANDLER_RE = new RegExp(PARENT_DIRECTORY_HANDLER);

	var EXTRA_PARENT_PATHS_RE = /^(?:\.\.\/)*(?:\.\.$)?/;

	/**
	 * Normalizes its input path and collapses all . and .. sequences except for
	 * .. sequences that would take it above the root of the current parent
	 * directory.
	 * {@updoc
	 *  $ collapse_dots('foo/../bar')
	 *  # 'bar'
	 *  $ collapse_dots('foo/./bar')
	 *  # 'foo/bar'
	 *  $ collapse_dots('foo/../bar/./../../baz')
	 *  # 'baz'
	 *  $ collapse_dots('../foo')
	 *  # '../foo'
	 *  $ collapse_dots('../foo').replace(EXTRA_PARENT_PATHS_RE, '')
	 *  # 'foo'
	 * }
	 */
	function collapse_dots(path) {
	  if (path === null) { return null; }
	  var p = normPath(path);
	  // Only /../ left to flatten
	  var r = PARENT_DIRECTORY_HANDLER_RE;
	  // We replace with $1 which matches a / before the .. because this
	  // guarantees that:
	  // (1) we have at most 1 / between the adjacent place,
	  // (2) always have a slash if there is a preceding path section, and
	  // (3) we never turn a relative path into an absolute path.
	  for (var q; (q = p.replace(r, '$1')) != p; p = q) {};
	  return p;
	}

	/**
	 * resolves a relative url string to a base uri.
	 * @return {URI}
	 */
	function resolve(baseUri, relativeUri) {
	  // there are several kinds of relative urls:
	  // 1. //foo - replaces everything from the domain on.  foo is a domain name
	  // 2. foo - replaces the last part of the path, the whole query and fragment
	  // 3. /foo - replaces the the path, the query and fragment
	  // 4. ?foo - replace the query and fragment
	  // 5. #foo - replace the fragment only

	  var absoluteUri = baseUri.clone();
	  // we satisfy these conditions by looking for the first part of relativeUri
	  // that is not blank and applying defaults to the rest

	  var overridden = relativeUri.hasScheme();

	  if (overridden) {
	    absoluteUri.setRawScheme(relativeUri.getRawScheme());
	  } else {
	    overridden = relativeUri.hasCredentials();
	  }

	  if (overridden) {
	    absoluteUri.setRawCredentials(relativeUri.getRawCredentials());
	  } else {
	    overridden = relativeUri.hasDomain();
	  }

	  if (overridden) {
	    absoluteUri.setRawDomain(relativeUri.getRawDomain());
	  } else {
	    overridden = relativeUri.hasPort();
	  }

	  var rawPath = relativeUri.getRawPath();
	  var simplifiedPath = collapse_dots(rawPath);
	  if (overridden) {
	    absoluteUri.setPort(relativeUri.getPort());
	    simplifiedPath = simplifiedPath
	        && simplifiedPath.replace(EXTRA_PARENT_PATHS_RE, '');
	  } else {
	    overridden = !!rawPath;
	    if (overridden) {
	      // resolve path properly
	      if (simplifiedPath.charCodeAt(0) !== 0x2f /* / */) {  // path is relative
	        var absRawPath = collapse_dots(absoluteUri.getRawPath() || '')
	            .replace(EXTRA_PARENT_PATHS_RE, '');
	        var slash = absRawPath.lastIndexOf('/') + 1;
	        simplifiedPath = collapse_dots(
	            (slash ? absRawPath.substring(0, slash) : '')
	            + collapse_dots(rawPath))
	            .replace(EXTRA_PARENT_PATHS_RE, '');
	      }
	    } else {
	      simplifiedPath = simplifiedPath
	          && simplifiedPath.replace(EXTRA_PARENT_PATHS_RE, '');
	      if (simplifiedPath !== rawPath) {
	        absoluteUri.setRawPath(simplifiedPath);
	      }
	    }
	  }

	  if (overridden) {
	    absoluteUri.setRawPath(simplifiedPath);
	  } else {
	    overridden = relativeUri.hasQuery();
	  }

	  if (overridden) {
	    absoluteUri.setRawQuery(relativeUri.getRawQuery());
	  } else {
	    overridden = relativeUri.hasFragment();
	  }

	  if (overridden) {
	    absoluteUri.setRawFragment(relativeUri.getRawFragment());
	  }

	  return absoluteUri;
	}

	/**
	 * a mutable URI.
	 *
	 * This class contains setters and getters for the parts of the URI.
	 * The <tt>getXYZ</tt>/<tt>setXYZ</tt> methods return the decoded part -- so
	 * <code>uri.parse('/foo%20bar').getPath()</code> will return the decoded path,
	 * <tt>/foo bar</tt>.
	 *
	 * <p>The raw versions of fields are available too.
	 * <code>uri.parse('/foo%20bar').getRawPath()</code> will return the raw path,
	 * <tt>/foo%20bar</tt>.  Use the raw setters with care, since
	 * <code>URI::toString</code> is not guaranteed to return a valid url if a
	 * raw setter was used.
	 *
	 * <p>All setters return <tt>this</tt> and so may be chained, a la
	 * <code>uri.parse('/foo').setFragment('part').toString()</code>.
	 *
	 * <p>You should not use this constructor directly -- please prefer the factory
	 * functions {@link uri.parse}, {@link uri.create}, {@link uri.resolve}
	 * instead.</p>
	 *
	 * <p>The parameters are all raw (assumed to be properly escaped) parts, and
	 * any (but not all) may be null.  Undefined is not allowed.</p>
	 *
	 * @constructor
	 */
	function URI(
	    rawScheme,
	    rawCredentials, rawDomain, port,
	    rawPath, rawQuery, rawFragment) {
	  this.scheme_ = rawScheme;
	  this.credentials_ = rawCredentials;
	  this.domain_ = rawDomain;
	  this.port_ = port;
	  this.path_ = rawPath;
	  this.query_ = rawQuery;
	  this.fragment_ = rawFragment;
	  /**
	   * @type {Array|null}
	   */
	  this.paramCache_ = null;
	}

	/** returns the string form of the url. */
	URI.prototype.toString = function () {
	  var out = [];
	  if (null !== this.scheme_) { out.push(this.scheme_, ':'); }
	  if (null !== this.domain_) {
	    out.push('//');
	    if (null !== this.credentials_) { out.push(this.credentials_, '@'); }
	    out.push(this.domain_);
	    if (null !== this.port_) { out.push(':', this.port_.toString()); }
	  }
	  if (null !== this.path_) { out.push(this.path_); }
	  if (null !== this.query_) { out.push('?', this.query_); }
	  if (null !== this.fragment_) { out.push('#', this.fragment_); }
	  return out.join('');
	};

	URI.prototype.clone = function () {
	  return new URI(this.scheme_, this.credentials_, this.domain_, this.port_,
	                 this.path_, this.query_, this.fragment_);
	};

	URI.prototype.getScheme = function () {
	  // HTML5 spec does not require the scheme to be lowercased but
	  // all common browsers except Safari lowercase the scheme.
	  return this.scheme_ && decodeURIComponent(this.scheme_).toLowerCase();
	};
	URI.prototype.getRawScheme = function () {
	  return this.scheme_;
	};
	URI.prototype.setScheme = function (newScheme) {
	  this.scheme_ = encodeIfExists2(
	      newScheme, URI_DISALLOWED_IN_SCHEME_OR_CREDENTIALS_);
	  return this;
	};
	URI.prototype.setRawScheme = function (newScheme) {
	  this.scheme_ = newScheme ? newScheme : null;
	  return this;
	};
	URI.prototype.hasScheme = function () {
	  return null !== this.scheme_;
	};


	URI.prototype.getCredentials = function () {
	  return this.credentials_ && decodeURIComponent(this.credentials_);
	};
	URI.prototype.getRawCredentials = function () {
	  return this.credentials_;
	};
	URI.prototype.setCredentials = function (newCredentials) {
	  this.credentials_ = encodeIfExists2(
	      newCredentials, URI_DISALLOWED_IN_SCHEME_OR_CREDENTIALS_);

	  return this;
	};
	URI.prototype.setRawCredentials = function (newCredentials) {
	  this.credentials_ = newCredentials ? newCredentials : null;
	  return this;
	};
	URI.prototype.hasCredentials = function () {
	  return null !== this.credentials_;
	};


	URI.prototype.getDomain = function () {
	  return this.domain_ && decodeURIComponent(this.domain_);
	};
	URI.prototype.getRawDomain = function () {
	  return this.domain_;
	};
	URI.prototype.setDomain = function (newDomain) {
	  return this.setRawDomain(newDomain && encodeURIComponent(newDomain));
	};
	URI.prototype.setRawDomain = function (newDomain) {
	  this.domain_ = newDomain ? newDomain : null;
	  // Maintain the invariant that paths must start with a slash when the URI
	  // is not path-relative.
	  return this.setRawPath(this.path_);
	};
	URI.prototype.hasDomain = function () {
	  return null !== this.domain_;
	};


	URI.prototype.getPort = function () {
	  return this.port_ && decodeURIComponent(this.port_);
	};
	URI.prototype.setPort = function (newPort) {
	  if (newPort) {
	    newPort = Number(newPort);
	    if (newPort !== (newPort & 0xffff)) {
	      throw new Error('Bad port number ' + newPort);
	    }
	    this.port_ = '' + newPort;
	  } else {
	    this.port_ = null;
	  }
	  return this;
	};
	URI.prototype.hasPort = function () {
	  return null !== this.port_;
	};


	URI.prototype.getPath = function () {
	  return this.path_ && decodeURIComponent(this.path_);
	};
	URI.prototype.getRawPath = function () {
	  return this.path_;
	};
	URI.prototype.setPath = function (newPath) {
	  return this.setRawPath(encodeIfExists2(newPath, URI_DISALLOWED_IN_PATH_));
	};
	URI.prototype.setRawPath = function (newPath) {
	  if (newPath) {
	    newPath = String(newPath);
	    this.path_ = 
	      // Paths must start with '/' unless this is a path-relative URL.
	      (!this.domain_ || /^\//.test(newPath)) ? newPath : '/' + newPath;
	  } else {
	    this.path_ = null;
	  }
	  return this;
	};
	URI.prototype.hasPath = function () {
	  return null !== this.path_;
	};


	URI.prototype.getQuery = function () {
	  // From http://www.w3.org/Addressing/URL/4_URI_Recommentations.html
	  // Within the query string, the plus sign is reserved as shorthand notation
	  // for a space.
	  return this.query_ && decodeURIComponent(this.query_).replace(/\+/g, ' ');
	};
	URI.prototype.getRawQuery = function () {
	  return this.query_;
	};
	URI.prototype.setQuery = function (newQuery) {
	  this.paramCache_ = null;
	  this.query_ = encodeIfExists(newQuery);
	  return this;
	};
	URI.prototype.setRawQuery = function (newQuery) {
	  this.paramCache_ = null;
	  this.query_ = newQuery ? newQuery : null;
	  return this;
	};
	URI.prototype.hasQuery = function () {
	  return null !== this.query_;
	};

	/**
	 * sets the query given a list of strings of the form
	 * [ key0, value0, key1, value1, ... ].
	 *
	 * <p><code>uri.setAllParameters(['a', 'b', 'c', 'd']).getQuery()</code>
	 * will yield <code>'a=b&c=d'</code>.
	 */
	URI.prototype.setAllParameters = function (params) {
	  if (typeof params === 'object') {
	    if (!(params instanceof Array)
	        && (params instanceof Object
	            || Object.prototype.toString.call(params) !== '[object Array]')) {
	      var newParams = [];
	      var i = -1;
	      for (var k in params) {
	        var v = params[k];
	        if ('string' === typeof v) {
	          newParams[++i] = k;
	          newParams[++i] = v;
	        }
	      }
	      params = newParams;
	    }
	  }
	  this.paramCache_ = null;
	  var queryBuf = [];
	  var separator = '';
	  for (var j = 0; j < params.length;) {
	    var k = params[j++];
	    var v = params[j++];
	    queryBuf.push(separator, encodeURIComponent(k.toString()));
	    separator = '&';
	    if (v) {
	      queryBuf.push('=', encodeURIComponent(v.toString()));
	    }
	  }
	  this.query_ = queryBuf.join('');
	  return this;
	};
	URI.prototype.checkParameterCache_ = function () {
	  if (!this.paramCache_) {
	    var q = this.query_;
	    if (!q) {
	      this.paramCache_ = [];
	    } else {
	      var cgiParams = q.split(/[&\?]/);
	      var out = [];
	      var k = -1;
	      for (var i = 0; i < cgiParams.length; ++i) {
	        var m = cgiParams[i].match(/^([^=]*)(?:=(.*))?$/);
	        // From http://www.w3.org/Addressing/URL/4_URI_Recommentations.html
	        // Within the query string, the plus sign is reserved as shorthand
	        // notation for a space.
	        out[++k] = decodeURIComponent(m[1]).replace(/\+/g, ' ');
	        out[++k] = decodeURIComponent(m[2] || '').replace(/\+/g, ' ');
	      }
	      this.paramCache_ = out;
	    }
	  }
	};
	/**
	 * sets the values of the named cgi parameters.
	 *
	 * <p>So, <code>uri.parse('foo?a=b&c=d&e=f').setParameterValues('c', ['new'])
	 * </code> yields <tt>foo?a=b&c=new&e=f</tt>.</p>
	 *
	 * @param key {string}
	 * @param values {Array.<string>} the new values.  If values is a single string
	 *   then it will be treated as the sole value.
	 */
	URI.prototype.setParameterValues = function (key, values) {
	  // be nice and avoid subtle bugs where [] operator on string performs charAt
	  // on some browsers and crashes on IE
	  if (typeof values === 'string') {
	    values = [ values ];
	  }

	  this.checkParameterCache_();
	  var newValueIndex = 0;
	  var pc = this.paramCache_;
	  var params = [];
	  for (var i = 0, k = 0; i < pc.length; i += 2) {
	    if (key === pc[i]) {
	      if (newValueIndex < values.length) {
	        params.push(key, values[newValueIndex++]);
	      }
	    } else {
	      params.push(pc[i], pc[i + 1]);
	    }
	  }
	  while (newValueIndex < values.length) {
	    params.push(key, values[newValueIndex++]);
	  }
	  this.setAllParameters(params);
	  return this;
	};
	URI.prototype.removeParameter = function (key) {
	  return this.setParameterValues(key, []);
	};
	/**
	 * returns the parameters specified in the query part of the uri as a list of
	 * keys and values like [ key0, value0, key1, value1, ... ].
	 *
	 * @return {Array.<string>}
	 */
	URI.prototype.getAllParameters = function () {
	  this.checkParameterCache_();
	  return this.paramCache_.slice(0, this.paramCache_.length);
	};
	/**
	 * returns the value<b>s</b> for a given cgi parameter as a list of decoded
	 * query parameter values.
	 * @return {Array.<string>}
	 */
	URI.prototype.getParameterValues = function (paramNameUnescaped) {
	  this.checkParameterCache_();
	  var values = [];
	  for (var i = 0; i < this.paramCache_.length; i += 2) {
	    if (paramNameUnescaped === this.paramCache_[i]) {
	      values.push(this.paramCache_[i + 1]);
	    }
	  }
	  return values;
	};
	/**
	 * returns a map of cgi parameter names to (non-empty) lists of values.
	 * @return {Object.<string,Array.<string>>}
	 */
	URI.prototype.getParameterMap = function (paramNameUnescaped) {
	  this.checkParameterCache_();
	  var paramMap = {};
	  for (var i = 0; i < this.paramCache_.length; i += 2) {
	    var key = this.paramCache_[i++],
	      value = this.paramCache_[i++];
	    if (!(key in paramMap)) {
	      paramMap[key] = [value];
	    } else {
	      paramMap[key].push(value);
	    }
	  }
	  return paramMap;
	};
	/**
	 * returns the first value for a given cgi parameter or null if the given
	 * parameter name does not appear in the query string.
	 * If the given parameter name does appear, but has no '<tt>=</tt>' following
	 * it, then the empty string will be returned.
	 * @return {string|null}
	 */
	URI.prototype.getParameterValue = function (paramNameUnescaped) {
	  this.checkParameterCache_();
	  for (var i = 0; i < this.paramCache_.length; i += 2) {
	    if (paramNameUnescaped === this.paramCache_[i]) {
	      return this.paramCache_[i + 1];
	    }
	  }
	  return null;
	};

	URI.prototype.getFragment = function () {
	  return this.fragment_ && decodeURIComponent(this.fragment_);
	};
	URI.prototype.getRawFragment = function () {
	  return this.fragment_;
	};
	URI.prototype.setFragment = function (newFragment) {
	  this.fragment_ = newFragment ? encodeURIComponent(newFragment) : null;
	  return this;
	};
	URI.prototype.setRawFragment = function (newFragment) {
	  this.fragment_ = newFragment ? newFragment : null;
	  return this;
	};
	URI.prototype.hasFragment = function () {
	  return null !== this.fragment_;
	};

	function nullIfAbsent(matchPart) {
	  return ('string' == typeof matchPart) && (matchPart.length > 0)
	         ? matchPart
	         : null;
	}




	/**
	 * a regular expression for breaking a URI into its component parts.
	 *
	 * <p>http://www.gbiv.com/protocols/uri/rfc/rfc3986.html#RFC2234 says
	 * As the "first-match-wins" algorithm is identical to the "greedy"
	 * disambiguation method used by POSIX regular expressions, it is natural and
	 * commonplace to use a regular expression for parsing the potential five
	 * components of a URI reference.
	 *
	 * <p>The following line is the regular expression for breaking-down a
	 * well-formed URI reference into its components.
	 *
	 * <pre>
	 * ^(([^:/?#]+):)?(//([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?
	 *  12            3  4          5       6  7        8 9
	 * </pre>
	 *
	 * <p>The numbers in the second line above are only to assist readability; they
	 * indicate the reference points for each subexpression (i.e., each paired
	 * parenthesis). We refer to the value matched for subexpression <n> as $<n>.
	 * For example, matching the above expression to
	 * <pre>
	 *     http://www.ics.uci.edu/pub/ietf/uri/#Related
	 * </pre>
	 * results in the following subexpression matches:
	 * <pre>
	 *    $1 = http:
	 *    $2 = http
	 *    $3 = //www.ics.uci.edu
	 *    $4 = www.ics.uci.edu
	 *    $5 = /pub/ietf/uri/
	 *    $6 = <undefined>
	 *    $7 = <undefined>
	 *    $8 = #Related
	 *    $9 = Related
	 * </pre>
	 * where <undefined> indicates that the component is not present, as is the
	 * case for the query component in the above example. Therefore, we can
	 * determine the value of the five components as
	 * <pre>
	 *    scheme    = $2
	 *    authority = $4
	 *    path      = $5
	 *    query     = $7
	 *    fragment  = $9
	 * </pre>
	 *
	 * <p>msamuel: I have modified the regular expression slightly to expose the
	 * credentials, domain, and port separately from the authority.
	 * The modified version yields
	 * <pre>
	 *    $1 = http              scheme
	 *    $2 = <undefined>       credentials -\
	 *    $3 = www.ics.uci.edu   domain       | authority
	 *    $4 = <undefined>       port        -/
	 *    $5 = /pub/ietf/uri/    path
	 *    $6 = <undefined>       query without ?
	 *    $7 = Related           fragment without #
	 * </pre>
	 */
	var URI_RE_ = new RegExp(
	      "^" +
	      "(?:" +
	        "([^:/?#]+)" +         // scheme
	      ":)?" +
	      "(?://" +
	        "(?:([^/?#]*)@)?" +    // credentials
	        "([^/?#:@]*)" +        // domain
	        "(?::([0-9]+))?" +     // port
	      ")?" +
	      "([^?#]+)?" +            // path
	      "(?:\\?([^#]*))?" +      // query
	      "(?:#(.*))?" +           // fragment
	      "$"
	      );

	var URI_DISALLOWED_IN_SCHEME_OR_CREDENTIALS_ = /[#\/\?@]/g;
	var URI_DISALLOWED_IN_PATH_ = /[\#\?]/g;

	URI.parse = parse;
	URI.create = create;
	URI.resolve = resolve;
	URI.collapse_dots = collapse_dots;  // Visible for testing.

	// lightweight string-based api for loadModuleMaker
	URI.utils = {
	  mimeTypeOf: function (uri) {
	    var uriObj = parse(uri);
	    if (/\.html$/.test(uriObj.getPath())) {
	      return 'text/html';
	    } else {
	      return 'application/javascript';
	    }
	  },
	  resolve: function (base, uri) {
	    if (base) {
	      return resolve(parse(base), parse(uri)).toString();
	    } else {
	      return '' + uri;
	    }
	  }
	};


	return URI;
	})();

	// Copyright Google Inc.
	// Licensed under the Apache Licence Version 2.0
	// Autogenerated at Mon Feb 25 13:05:42 EST 2013
	// @overrides window
	// @provides html4
	var html4 = {};
	html4.atype = {
	  'NONE': 0,
	  'URI': 1,
	  'URI_FRAGMENT': 11,
	  'SCRIPT': 2,
	  'STYLE': 3,
	  'HTML': 12,
	  'ID': 4,
	  'IDREF': 5,
	  'IDREFS': 6,
	  'GLOBAL_NAME': 7,
	  'LOCAL_NAME': 8,
	  'CLASSES': 9,
	  'FRAME_TARGET': 10,
	  'MEDIA_QUERY': 13
	};
	html4[ 'atype' ] = html4.atype;
	html4.ATTRIBS = {
	  '*::class': 9,
	  '*::dir': 0,
	  '*::draggable': 0,
	  '*::hidden': 0,
	  '*::id': 4,
	  '*::inert': 0,
	  '*::itemprop': 0,
	  '*::itemref': 6,
	  '*::itemscope': 0,
	  '*::lang': 0,
	  '*::onblur': 2,
	  '*::onchange': 2,
	  '*::onclick': 2,
	  '*::ondblclick': 2,
	  '*::onfocus': 2,
	  '*::onkeydown': 2,
	  '*::onkeypress': 2,
	  '*::onkeyup': 2,
	  '*::onload': 2,
	  '*::onmousedown': 2,
	  '*::onmousemove': 2,
	  '*::onmouseout': 2,
	  '*::onmouseover': 2,
	  '*::onmouseup': 2,
	  '*::onreset': 2,
	  '*::onscroll': 2,
	  '*::onselect': 2,
	  '*::onsubmit': 2,
	  '*::onunload': 2,
	  '*::spellcheck': 0,
	  '*::style': 3,
	  '*::title': 0,
	  '*::translate': 0,
	  'a::accesskey': 0,
	  'a::coords': 0,
	  'a::href': 1,
	  'a::hreflang': 0,
	  'a::name': 7,
	  'a::onblur': 2,
	  'a::onfocus': 2,
	  'a::shape': 0,
	  'a::tabindex': 0,
	  'a::target': 10,
	  'a::type': 0,
	  'area::accesskey': 0,
	  'area::alt': 0,
	  'area::coords': 0,
	  'area::href': 1,
	  'area::nohref': 0,
	  'area::onblur': 2,
	  'area::onfocus': 2,
	  'area::shape': 0,
	  'area::tabindex': 0,
	  'area::target': 10,
	  'audio::controls': 0,
	  'audio::loop': 0,
	  'audio::mediagroup': 5,
	  'audio::muted': 0,
	  'audio::preload': 0,
	  'bdo::dir': 0,
	  'blockquote::cite': 1,
	  'br::clear': 0,
	  'button::accesskey': 0,
	  'button::disabled': 0,
	  'button::name': 8,
	  'button::onblur': 2,
	  'button::onfocus': 2,
	  'button::tabindex': 0,
	  'button::type': 0,
	  'button::value': 0,
	  'canvas::height': 0,
	  'canvas::width': 0,
	  'caption::align': 0,
	  'col::align': 0,
	  'col::char': 0,
	  'col::charoff': 0,
	  'col::span': 0,
	  'col::valign': 0,
	  'col::width': 0,
	  'colgroup::align': 0,
	  'colgroup::char': 0,
	  'colgroup::charoff': 0,
	  'colgroup::span': 0,
	  'colgroup::valign': 0,
	  'colgroup::width': 0,
	  'command::checked': 0,
	  'command::command': 5,
	  'command::disabled': 0,
	  'command::icon': 1,
	  'command::label': 0,
	  'command::radiogroup': 0,
	  'command::type': 0,
	  'data::value': 0,
	  'del::cite': 1,
	  'del::datetime': 0,
	  'details::open': 0,
	  'dir::compact': 0,
	  'div::align': 0,
	  'dl::compact': 0,
	  'fieldset::disabled': 0,
	  'font::color': 0,
	  'font::face': 0,
	  'font::size': 0,
	  'form::accept': 0,
	  'form::action': 1,
	  'form::autocomplete': 0,
	  'form::enctype': 0,
	  'form::method': 0,
	  'form::name': 7,
	  'form::novalidate': 0,
	  'form::onreset': 2,
	  'form::onsubmit': 2,
	  'form::target': 10,
	  'h1::align': 0,
	  'h2::align': 0,
	  'h3::align': 0,
	  'h4::align': 0,
	  'h5::align': 0,
	  'h6::align': 0,
	  'hr::align': 0,
	  'hr::noshade': 0,
	  'hr::size': 0,
	  'hr::width': 0,
	  'iframe::align': 0,
	  'iframe::frameborder': 0,
	  'iframe::height': 0,
	  'iframe::marginheight': 0,
	  'iframe::marginwidth': 0,
	  'iframe::width': 0,
	  'img::align': 0,
	  'img::alt': 0,
	  'img::border': 0,
	  'img::height': 0,
	  'img::hspace': 0,
	  'img::ismap': 0,
	  'img::name': 7,
	  'img::src': 1,
	  'img::usemap': 11,
	  'img::vspace': 0,
	  'img::width': 0,
	  'input::accept': 0,
	  'input::accesskey': 0,
	  'input::align': 0,
	  'input::alt': 0,
	  'input::autocomplete': 0,
	  'input::checked': 0,
	  'input::disabled': 0,
	  'input::inputmode': 0,
	  'input::ismap': 0,
	  'input::list': 5,
	  'input::max': 0,
	  'input::maxlength': 0,
	  'input::min': 0,
	  'input::multiple': 0,
	  'input::name': 8,
	  'input::onblur': 2,
	  'input::onchange': 2,
	  'input::onfocus': 2,
	  'input::onselect': 2,
	  'input::placeholder': 0,
	  'input::readonly': 0,
	  'input::required': 0,
	  'input::size': 0,
	  'input::src': 1,
	  'input::step': 0,
	  'input::tabindex': 0,
	  'input::type': 0,
	  'input::usemap': 11,
	  'input::value': 0,
	  'ins::cite': 1,
	  'ins::datetime': 0,
	  'label::accesskey': 0,
	  'label::for': 5,
	  'label::onblur': 2,
	  'label::onfocus': 2,
	  'legend::accesskey': 0,
	  'legend::align': 0,
	  'li::type': 0,
	  'li::value': 0,
	  'map::name': 7,
	  'menu::compact': 0,
	  'menu::label': 0,
	  'menu::type': 0,
	  'meter::high': 0,
	  'meter::low': 0,
	  'meter::max': 0,
	  'meter::min': 0,
	  'meter::value': 0,
	  'ol::compact': 0,
	  'ol::reversed': 0,
	  'ol::start': 0,
	  'ol::type': 0,
	  'optgroup::disabled': 0,
	  'optgroup::label': 0,
	  'option::disabled': 0,
	  'option::label': 0,
	  'option::selected': 0,
	  'option::value': 0,
	  'output::for': 6,
	  'output::name': 8,
	  'p::align': 0,
	  'pre::width': 0,
	  'progress::max': 0,
	  'progress::min': 0,
	  'progress::value': 0,
	  'q::cite': 1,
	  'select::autocomplete': 0,
	  'select::disabled': 0,
	  'select::multiple': 0,
	  'select::name': 8,
	  'select::onblur': 2,
	  'select::onchange': 2,
	  'select::onfocus': 2,
	  'select::required': 0,
	  'select::size': 0,
	  'select::tabindex': 0,
	  'source::type': 0,
	  'table::align': 0,
	  'table::bgcolor': 0,
	  'table::border': 0,
	  'table::cellpadding': 0,
	  'table::cellspacing': 0,
	  'table::frame': 0,
	  'table::rules': 0,
	  'table::summary': 0,
	  'table::width': 0,
	  'tbody::align': 0,
	  'tbody::char': 0,
	  'tbody::charoff': 0,
	  'tbody::valign': 0,
	  'td::abbr': 0,
	  'td::align': 0,
	  'td::axis': 0,
	  'td::bgcolor': 0,
	  'td::char': 0,
	  'td::charoff': 0,
	  'td::colspan': 0,
	  'td::headers': 6,
	  'td::height': 0,
	  'td::nowrap': 0,
	  'td::rowspan': 0,
	  'td::scope': 0,
	  'td::valign': 0,
	  'td::width': 0,
	  'textarea::accesskey': 0,
	  'textarea::autocomplete': 0,
	  'textarea::cols': 0,
	  'textarea::disabled': 0,
	  'textarea::inputmode': 0,
	  'textarea::name': 8,
	  'textarea::onblur': 2,
	  'textarea::onchange': 2,
	  'textarea::onfocus': 2,
	  'textarea::onselect': 2,
	  'textarea::placeholder': 0,
	  'textarea::readonly': 0,
	  'textarea::required': 0,
	  'textarea::rows': 0,
	  'textarea::tabindex': 0,
	  'textarea::wrap': 0,
	  'tfoot::align': 0,
	  'tfoot::char': 0,
	  'tfoot::charoff': 0,
	  'tfoot::valign': 0,
	  'th::abbr': 0,
	  'th::align': 0,
	  'th::axis': 0,
	  'th::bgcolor': 0,
	  'th::char': 0,
	  'th::charoff': 0,
	  'th::colspan': 0,
	  'th::headers': 6,
	  'th::height': 0,
	  'th::nowrap': 0,
	  'th::rowspan': 0,
	  'th::scope': 0,
	  'th::valign': 0,
	  'th::width': 0,
	  'thead::align': 0,
	  'thead::char': 0,
	  'thead::charoff': 0,
	  'thead::valign': 0,
	  'tr::align': 0,
	  'tr::bgcolor': 0,
	  'tr::char': 0,
	  'tr::charoff': 0,
	  'tr::valign': 0,
	  'track::default': 0,
	  'track::kind': 0,
	  'track::label': 0,
	  'track::srclang': 0,
	  'ul::compact': 0,
	  'ul::type': 0,
	  'video::controls': 0,
	  'video::height': 0,
	  'video::loop': 0,
	  'video::mediagroup': 5,
	  'video::muted': 0,
	  'video::poster': 1,
	  'video::preload': 0,
	  'video::width': 0
	};
	html4[ 'ATTRIBS' ] = html4.ATTRIBS;
	html4.eflags = {
	  'OPTIONAL_ENDTAG': 1,
	  'EMPTY': 2,
	  'CDATA': 4,
	  'RCDATA': 8,
	  'UNSAFE': 16,
	  'FOLDABLE': 32,
	  'SCRIPT': 64,
	  'STYLE': 128,
	  'VIRTUALIZED': 256
	};
	html4[ 'eflags' ] = html4.eflags;
	// these are bitmasks of the eflags above.
	html4.ELEMENTS = {
	  'a': 0,
	  'abbr': 0,
	  'acronym': 0,
	  'address': 0,
	  'applet': 272,
	  'area': 2,
	  'article': 0,
	  'aside': 0,
	  'audio': 0,
	  'b': 0,
	  'base': 274,
	  'basefont': 274,
	  'bdi': 0,
	  'bdo': 0,
	  'big': 0,
	  'blockquote': 0,
	  'body': 305,
	  'br': 2,
	  'button': 0,
	  'canvas': 0,
	  'caption': 0,
	  'center': 0,
	  'cite': 0,
	  'code': 0,
	  'col': 2,
	  'colgroup': 1,
	  'command': 2,
	  'data': 0,
	  'datalist': 0,
	  'dd': 1,
	  'del': 0,
	  'details': 0,
	  'dfn': 0,
	  'dialog': 272,
	  'dir': 0,
	  'div': 0,
	  'dl': 0,
	  'dt': 1,
	  'em': 0,
	  'fieldset': 0,
	  'figcaption': 0,
	  'figure': 0,
	  'font': 0,
	  'footer': 0,
	  'form': 0,
	  'frame': 274,
	  'frameset': 272,
	  'h1': 0,
	  'h2': 0,
	  'h3': 0,
	  'h4': 0,
	  'h5': 0,
	  'h6': 0,
	  'head': 305,
	  'header': 0,
	  'hgroup': 0,
	  'hr': 2,
	  'html': 305,
	  'i': 0,
	  'iframe': 16,
	  'img': 2,
	  'input': 2,
	  'ins': 0,
	  'isindex': 274,
	  'kbd': 0,
	  'keygen': 274,
	  'label': 0,
	  'legend': 0,
	  'li': 1,
	  'link': 274,
	  'map': 0,
	  'mark': 0,
	  'menu': 0,
	  'meta': 274,
	  'meter': 0,
	  'nav': 0,
	  'nobr': 0,
	  'noembed': 276,
	  'noframes': 276,
	  'noscript': 276,
	  'object': 272,
	  'ol': 0,
	  'optgroup': 0,
	  'option': 1,
	  'output': 0,
	  'p': 1,
	  'param': 274,
	  'pre': 0,
	  'progress': 0,
	  'q': 0,
	  's': 0,
	  'samp': 0,
	  'script': 84,
	  'section': 0,
	  'select': 0,
	  'small': 0,
	  'source': 2,
	  'span': 0,
	  'strike': 0,
	  'strong': 0,
	  'style': 148,
	  'sub': 0,
	  'summary': 0,
	  'sup': 0,
	  'table': 0,
	  'tbody': 1,
	  'td': 1,
	  'textarea': 8,
	  'tfoot': 1,
	  'th': 1,
	  'thead': 1,
	  'time': 0,
	  'title': 280,
	  'tr': 1,
	  'track': 2,
	  'tt': 0,
	  'u': 0,
	  'ul': 0,
	  'var': 0,
	  'video': 0,
	  'wbr': 2
	};
	html4[ 'ELEMENTS' ] = html4.ELEMENTS;
	html4.ELEMENT_DOM_INTERFACES = {
	  'a': 'HTMLAnchorElement',
	  'abbr': 'HTMLElement',
	  'acronym': 'HTMLElement',
	  'address': 'HTMLElement',
	  'applet': 'HTMLAppletElement',
	  'area': 'HTMLAreaElement',
	  'article': 'HTMLElement',
	  'aside': 'HTMLElement',
	  'audio': 'HTMLAudioElement',
	  'b': 'HTMLElement',
	  'base': 'HTMLBaseElement',
	  'basefont': 'HTMLBaseFontElement',
	  'bdi': 'HTMLElement',
	  'bdo': 'HTMLElement',
	  'big': 'HTMLElement',
	  'blockquote': 'HTMLQuoteElement',
	  'body': 'HTMLBodyElement',
	  'br': 'HTMLBRElement',
	  'button': 'HTMLButtonElement',
	  'canvas': 'HTMLCanvasElement',
	  'caption': 'HTMLTableCaptionElement',
	  'center': 'HTMLElement',
	  'cite': 'HTMLElement',
	  'code': 'HTMLElement',
	  'col': 'HTMLTableColElement',
	  'colgroup': 'HTMLTableColElement',
	  'command': 'HTMLCommandElement',
	  'data': 'HTMLElement',
	  'datalist': 'HTMLDataListElement',
	  'dd': 'HTMLElement',
	  'del': 'HTMLModElement',
	  'details': 'HTMLDetailsElement',
	  'dfn': 'HTMLElement',
	  'dialog': 'HTMLDialogElement',
	  'dir': 'HTMLDirectoryElement',
	  'div': 'HTMLDivElement',
	  'dl': 'HTMLDListElement',
	  'dt': 'HTMLElement',
	  'em': 'HTMLElement',
	  'fieldset': 'HTMLFieldSetElement',
	  'figcaption': 'HTMLElement',
	  'figure': 'HTMLElement',
	  'font': 'HTMLFontElement',
	  'footer': 'HTMLElement',
	  'form': 'HTMLFormElement',
	  'frame': 'HTMLFrameElement',
	  'frameset': 'HTMLFrameSetElement',
	  'h1': 'HTMLHeadingElement',
	  'h2': 'HTMLHeadingElement',
	  'h3': 'HTMLHeadingElement',
	  'h4': 'HTMLHeadingElement',
	  'h5': 'HTMLHeadingElement',
	  'h6': 'HTMLHeadingElement',
	  'head': 'HTMLHeadElement',
	  'header': 'HTMLElement',
	  'hgroup': 'HTMLElement',
	  'hr': 'HTMLHRElement',
	  'html': 'HTMLHtmlElement',
	  'i': 'HTMLElement',
	  'iframe': 'HTMLIFrameElement',
	  'img': 'HTMLImageElement',
	  'input': 'HTMLInputElement',
	  'ins': 'HTMLModElement',
	  'isindex': 'HTMLUnknownElement',
	  'kbd': 'HTMLElement',
	  'keygen': 'HTMLKeygenElement',
	  'label': 'HTMLLabelElement',
	  'legend': 'HTMLLegendElement',
	  'li': 'HTMLLIElement',
	  'link': 'HTMLLinkElement',
	  'map': 'HTMLMapElement',
	  'mark': 'HTMLElement',
	  'menu': 'HTMLMenuElement',
	  'meta': 'HTMLMetaElement',
	  'meter': 'HTMLMeterElement',
	  'nav': 'HTMLElement',
	  'nobr': 'HTMLElement',
	  'noembed': 'HTMLElement',
	  'noframes': 'HTMLElement',
	  'noscript': 'HTMLElement',
	  'object': 'HTMLObjectElement',
	  'ol': 'HTMLOListElement',
	  'optgroup': 'HTMLOptGroupElement',
	  'option': 'HTMLOptionElement',
	  'output': 'HTMLOutputElement',
	  'p': 'HTMLParagraphElement',
	  'param': 'HTMLParamElement',
	  'pre': 'HTMLPreElement',
	  'progress': 'HTMLProgressElement',
	  'q': 'HTMLQuoteElement',
	  's': 'HTMLElement',
	  'samp': 'HTMLElement',
	  'script': 'HTMLScriptElement',
	  'section': 'HTMLElement',
	  'select': 'HTMLSelectElement',
	  'small': 'HTMLElement',
	  'source': 'HTMLSourceElement',
	  'span': 'HTMLSpanElement',
	  'strike': 'HTMLElement',
	  'strong': 'HTMLElement',
	  'style': 'HTMLStyleElement',
	  'sub': 'HTMLElement',
	  'summary': 'HTMLElement',
	  'sup': 'HTMLElement',
	  'table': 'HTMLTableElement',
	  'tbody': 'HTMLTableSectionElement',
	  'td': 'HTMLTableDataCellElement',
	  'textarea': 'HTMLTextAreaElement',
	  'tfoot': 'HTMLTableSectionElement',
	  'th': 'HTMLTableHeaderCellElement',
	  'thead': 'HTMLTableSectionElement',
	  'time': 'HTMLTimeElement',
	  'title': 'HTMLTitleElement',
	  'tr': 'HTMLTableRowElement',
	  'track': 'HTMLTrackElement',
	  'tt': 'HTMLElement',
	  'u': 'HTMLElement',
	  'ul': 'HTMLUListElement',
	  'var': 'HTMLElement',
	  'video': 'HTMLVideoElement',
	  'wbr': 'HTMLElement'
	};
	html4[ 'ELEMENT_DOM_INTERFACES' ] = html4.ELEMENT_DOM_INTERFACES;
	html4.ueffects = {
	  'NOT_LOADED': 0,
	  'SAME_DOCUMENT': 1,
	  'NEW_DOCUMENT': 2
	};
	html4[ 'ueffects' ] = html4.ueffects;
	html4.URIEFFECTS = {
	  'a::href': 2,
	  'area::href': 2,
	  'blockquote::cite': 0,
	  'command::icon': 1,
	  'del::cite': 0,
	  'form::action': 2,
	  'img::src': 1,
	  'input::src': 1,
	  'ins::cite': 0,
	  'q::cite': 0,
	  'video::poster': 1
	};
	html4[ 'URIEFFECTS' ] = html4.URIEFFECTS;
	html4.ltypes = {
	  'UNSANDBOXED': 2,
	  'SANDBOXED': 1,
	  'DATA': 0
	};
	html4[ 'ltypes' ] = html4.ltypes;
	html4.LOADERTYPES = {
	  'a::href': 2,
	  'area::href': 2,
	  'blockquote::cite': 2,
	  'command::icon': 1,
	  'del::cite': 2,
	  'form::action': 2,
	  'img::src': 1,
	  'input::src': 1,
	  'ins::cite': 2,
	  'q::cite': 2,
	  'video::poster': 1
	};
	html4[ 'LOADERTYPES' ] = html4.LOADERTYPES;

	// Copyright (C) 2006 Google Inc.
	//
	// Licensed under the Apache License, Version 2.0 (the "License");
	// you may not use this file except in compliance with the License.
	// You may obtain a copy of the License at
	//
	//      http://www.apache.org/licenses/LICENSE-2.0
	//
	// Unless required by applicable law or agreed to in writing, software
	// distributed under the License is distributed on an "AS IS" BASIS,
	// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	// See the License for the specific language governing permissions and
	// limitations under the License.

	/**
	 * @fileoverview
	 * An HTML sanitizer that can satisfy a variety of security policies.
	 *
	 * <p>
	 * The HTML sanitizer is built around a SAX parser and HTML element and
	 * attributes schemas.
	 *
	 * If the cssparser is loaded, inline styles are sanitized using the
	 * css property and value schemas.  Else they are remove during
	 * sanitization.
	 *
	 * If it exists, uses parseCssDeclarations, sanitizeCssProperty,  cssSchema
	 *
	 * @author mikesamuel@gmail.com
	 * @author jasvir@gmail.com
	 * \@requires html4, URI
	 * \@overrides window
	 * \@provides html, html_sanitize
	 */

	// The Turkish i seems to be a non-issue, but abort in case it is.
	if ('I'.toLowerCase() !== 'i') { throw 'I/i problem'; }

	/**
	 * \@namespace
	 */
	var html = (function(html4) {

	  // For closure compiler
	  var parseCssDeclarations, sanitizeCssProperty, cssSchema;
	  if ('undefined' !== typeof window) {
	    parseCssDeclarations = window['parseCssDeclarations'];
	    sanitizeCssProperty = window['sanitizeCssProperty'];
	    cssSchema = window['cssSchema'];
	  }

	  // The keys of this object must be 'quoted' or JSCompiler will mangle them!
	  // This is a partial list -- lookupEntity() uses the host browser's parser
	  // (when available) to implement full entity lookup.
	  // Note that entities are in general case-sensitive; the uppercase ones are
	  // explicitly defined by HTML5 (presumably as compatibility).
	  var ENTITIES = {
	    'lt': '<',
	    'LT': '<',
	    'gt': '>',
	    'GT': '>',
	    'amp': '&',
	    'AMP': '&',
	    'quot': '"',
	    'apos': '\'',
	    'nbsp': '\240'
	  };

	  // Patterns for types of entity/character reference names.
	  var decimalEscapeRe = /^#(\d+)$/;
	  var hexEscapeRe = /^#x([0-9A-Fa-f]+)$/;
	  // contains every entity per http://www.w3.org/TR/2011/WD-html5-20110113/named-character-references.html
	  var safeEntityNameRe = /^[A-Za-z][A-za-z0-9]+$/;
	  // Used as a hook to invoke the browser's entity parsing. <textarea> is used
	  // because its content is parsed for entities but not tags.
	  // TODO(kpreid): This retrieval is a kludge and leads to silent loss of
	  // functionality if the document isn't available.
	  var entityLookupElement =
	      ('undefined' !== typeof window && window['document'])
	          ? window['document'].createElement('textarea') : null;
	  /**
	   * Decodes an HTML entity.
	   *
	   * {\@updoc
	   * $ lookupEntity('lt')
	   * # '<'
	   * $ lookupEntity('GT')
	   * # '>'
	   * $ lookupEntity('amp')
	   * # '&'
	   * $ lookupEntity('nbsp')
	   * # '\xA0'
	   * $ lookupEntity('apos')
	   * # "'"
	   * $ lookupEntity('quot')
	   * # '"'
	   * $ lookupEntity('#xa')
	   * # '\n'
	   * $ lookupEntity('#10')
	   * # '\n'
	   * $ lookupEntity('#x0a')
	   * # '\n'
	   * $ lookupEntity('#010')
	   * # '\n'
	   * $ lookupEntity('#x00A')
	   * # '\n'
	   * $ lookupEntity('Pi')      // Known failure
	   * # '\u03A0'
	   * $ lookupEntity('pi')      // Known failure
	   * # '\u03C0'
	   * }
	   *
	   * @param {string} name the content between the '&' and the ';'.
	   * @return {string} a single unicode code-point as a string.
	   */
	  function lookupEntity(name) {
	    // TODO: entity lookup as specified by HTML5 actually depends on the
	    // presence of the ";".
	    if (ENTITIES.hasOwnProperty(name)) { return ENTITIES[name]; }
	    var m = name.match(decimalEscapeRe);
	    if (m) {
	      return String.fromCharCode(parseInt(m[1], 10));
	    } else if (!!(m = name.match(hexEscapeRe))) {
	      return String.fromCharCode(parseInt(m[1], 16));
	    } else if (entityLookupElement && safeEntityNameRe.test(name)) {
	      entityLookupElement.innerHTML = '&' + name + ';';
	      var text = entityLookupElement.textContent;
	      ENTITIES[name] = text;
	      return text;
	    } else {
	      return '&' + name + ';';
	    }
	  }

	  function decodeOneEntity(_, name) {
	    return lookupEntity(name);
	  }

	  var nulRe = /\0/g;
	  function stripNULs(s) {
	    return s.replace(nulRe, '');
	  }

	  var ENTITY_RE_1 = /&(#[0-9]+|#[xX][0-9A-Fa-f]+|\w+);/g;
	  var ENTITY_RE_2 = /^(#[0-9]+|#[xX][0-9A-Fa-f]+|\w+);/;
	  /**
	   * The plain text of a chunk of HTML CDATA which possibly containing.
	   *
	   * {\@updoc
	   * $ unescapeEntities('')
	   * # ''
	   * $ unescapeEntities('hello World!')
	   * # 'hello World!'
	   * $ unescapeEntities('1 &lt; 2 &amp;&AMP; 4 &gt; 3&#10;')
	   * # '1 < 2 && 4 > 3\n'
	   * $ unescapeEntities('&lt;&lt <- unfinished entity&gt;')
	   * # '<&lt <- unfinished entity>'
	   * $ unescapeEntities('/foo?bar=baz&copy=true')  // & often unescaped in URLS
	   * # '/foo?bar=baz&copy=true'
	   * $ unescapeEntities('pi=&pi;&#x3c0;, Pi=&Pi;\u03A0') // FIXME: known failure
	   * # 'pi=\u03C0\u03c0, Pi=\u03A0\u03A0'
	   * }
	   *
	   * @param {string} s a chunk of HTML CDATA.  It must not start or end inside
	   *     an HTML entity.
	   */
	  function unescapeEntities(s) {
	    return s.replace(ENTITY_RE_1, decodeOneEntity);
	  }

	  var ampRe = /&/g;
	  var looseAmpRe = /&([^a-z#]|#(?:[^0-9x]|x(?:[^0-9a-f]|$)|$)|$)/gi;
	  var ltRe = /[<]/g;
	  var gtRe = />/g;
	  var quotRe = /\"/g;

	  /**
	   * Escapes HTML special characters in attribute values.
	   *
	   * {\@updoc
	   * $ escapeAttrib('')
	   * # ''
	   * $ escapeAttrib('"<<&==&>>"')  // Do not just escape the first occurrence.
	   * # '&#34;&lt;&lt;&amp;&#61;&#61;&amp;&gt;&gt;&#34;'
	   * $ escapeAttrib('Hello <World>!')
	   * # 'Hello &lt;World&gt;!'
	   * }
	   */
	  function escapeAttrib(s) {
	    return ('' + s).replace(ampRe, '&amp;').replace(ltRe, '&lt;')
	        .replace(gtRe, '&gt;').replace(quotRe, '&#34;');
	  }

	  /**
	   * Escape entities in RCDATA that can be escaped without changing the meaning.
	   * {\@updoc
	   * $ normalizeRCData('1 < 2 &&amp; 3 > 4 &amp;& 5 &lt; 7&8')
	   * # '1 &lt; 2 &amp;&amp; 3 &gt; 4 &amp;&amp; 5 &lt; 7&amp;8'
	   * }
	   */
	  function normalizeRCData(rcdata) {
	    return rcdata
	        .replace(looseAmpRe, '&amp;$1')
	        .replace(ltRe, '&lt;')
	        .replace(gtRe, '&gt;');
	  }

	  // TODO(felix8a): validate sanitizer regexs against the HTML5 grammar at
	  // http://www.whatwg.org/specs/web-apps/current-work/multipage/syntax.html
	  // http://www.whatwg.org/specs/web-apps/current-work/multipage/parsing.html
	  // http://www.whatwg.org/specs/web-apps/current-work/multipage/tokenization.html
	  // http://www.whatwg.org/specs/web-apps/current-work/multipage/tree-construction.html

	  // We initially split input so that potentially meaningful characters
	  // like '<' and '>' are separate tokens, using a fast dumb process that
	  // ignores quoting.  Then we walk that token stream, and when we see a
	  // '<' that's the start of a tag, we use ATTR_RE to extract tag
	  // attributes from the next token.  That token will never have a '>'
	  // character.  However, it might have an unbalanced quote character, and
	  // when we see that, we combine additional tokens to balance the quote.

	  var ATTR_RE = new RegExp(
	    '^\\s*' +
	    '([-.:\\w]+)' +             // 1 = Attribute name
	    '(?:' + (
	      '\\s*(=)\\s*' +           // 2 = Is there a value?
	      '(' + (                   // 3 = Attribute value
	        // TODO(felix8a): maybe use backref to match quotes
	        '(\")[^\"]*(\"|$)' +    // 4, 5 = Double-quoted string
	        '|' +
	        '(\')[^\']*(\'|$)' +    // 6, 7 = Single-quoted string
	        '|' +
	        // Positive lookahead to prevent interpretation of
	        // <foo a= b=c> as <foo a='b=c'>
	        // TODO(felix8a): might be able to drop this case
	        '(?=[a-z][-\\w]*\\s*=)' +
	        '|' +
	        // Unquoted value that isn't an attribute name
	        // (since we didn't match the positive lookahead above)
	        '[^\"\'\\s]*' ) +
	      ')' ) +
	    ')?',
	    'i');

	  // false on IE<=8, true on most other browsers
	  var splitWillCapture = ('a,b'.split(/(,)/).length === 3);

	  // bitmask for tags with special parsing, like <script> and <textarea>
	  var EFLAGS_TEXT = html4.eflags['CDATA'] | html4.eflags['RCDATA'];

	  /**
	   * Given a SAX-like event handler, produce a function that feeds those
	   * events and a parameter to the event handler.
	   *
	   * The event handler has the form:{@code
	   * {
	   *   // Name is an upper-case HTML tag name.  Attribs is an array of
	   *   // alternating upper-case attribute names, and attribute values.  The
	   *   // attribs array is reused by the parser.  Param is the value passed to
	   *   // the saxParser.
	   *   startTag: function (name, attribs, param) { ... },
	   *   endTag:   function (name, param) { ... },
	   *   pcdata:   function (text, param) { ... },
	   *   rcdata:   function (text, param) { ... },
	   *   cdata:    function (text, param) { ... },
	   *   startDoc: function (param) { ... },
	   *   endDoc:   function (param) { ... }
	   * }}
	   *
	   * @param {Object} handler a record containing event handlers.
	   * @return {function(string, Object)} A function that takes a chunk of HTML
	   *     and a parameter.  The parameter is passed on to the handler methods.
	   */
	  function makeSaxParser(handler) {
	    // Accept quoted or unquoted keys (Closure compat)
	    var hcopy = {
	      cdata: handler.cdata || handler['cdata'],
	      comment: handler.comment || handler['comment'],
	      endDoc: handler.endDoc || handler['endDoc'],
	      endTag: handler.endTag || handler['endTag'],
	      pcdata: handler.pcdata || handler['pcdata'],
	      rcdata: handler.rcdata || handler['rcdata'],
	      startDoc: handler.startDoc || handler['startDoc'],
	      startTag: handler.startTag || handler['startTag']
	    };
	    return function(htmlText, param) {
	      return parse(htmlText, hcopy, param);
	    };
	  }

	  // Parsing strategy is to split input into parts that might be lexically
	  // meaningful (every ">" becomes a separate part), and then recombine
	  // parts if we discover they're in a different context.

	  // TODO(felix8a): Significant performance regressions from -legacy,
	  // tested on
	  //    Chrome 18.0
	  //    Firefox 11.0
	  //    IE 6, 7, 8, 9
	  //    Opera 11.61
	  //    Safari 5.1.3
	  // Many of these are unusual patterns that are linearly slower and still
	  // pretty fast (eg 1ms to 5ms), so not necessarily worth fixing.

	  // TODO(felix8a): "<script> && && && ... <\/script>" is slower on all
	  // browsers.  The hotspot is htmlSplit.

	  // TODO(felix8a): "<p title='>>>>...'><\/p>" is slower on all browsers.
	  // This is partly htmlSplit, but the hotspot is parseTagAndAttrs.

	  // TODO(felix8a): "<a><\/a><a><\/a>..." is slower on IE9.
	  // "<a>1<\/a><a>1<\/a>..." is faster, "<a><\/a>2<a><\/a>2..." is faster.

	  // TODO(felix8a): "<p<p<p..." is slower on IE[6-8]

	  var continuationMarker = {};
	  function parse(htmlText, handler, param) {
	    var m, p, tagName;
	    var parts = htmlSplit(htmlText);
	    var state = {
	      noMoreGT: false,
	      noMoreEndComments: false
	    };
	    parseCPS(handler, parts, 0, state, param);
	  }

	  function continuationMaker(h, parts, initial, state, param) {
	    return function () {
	      parseCPS(h, parts, initial, state, param);
	    };
	  }

	  function parseCPS(h, parts, initial, state, param) {
	    try {
	      if (h.startDoc && initial == 0) { h.startDoc(param); }
	      var m, p, tagName;
	      for (var pos = initial, end = parts.length; pos < end;) {
	        var current = parts[pos++];
	        var next = parts[pos];
	        switch (current) {
	        case '&':
	          if (ENTITY_RE_2.test(next)) {
	            if (h.pcdata) {
	              h.pcdata('&' + next, param, continuationMarker,
	                continuationMaker(h, parts, pos, state, param));
	            }
	            pos++;
	          } else {
	            if (h.pcdata) { h.pcdata("&amp;", param, continuationMarker,
	                continuationMaker(h, parts, pos, state, param));
	            }
	          }
	          break;
	        case '<\/':
	          if (m = /^([-\w:]+)[^\'\"]*/.exec(next)) {
	            if (m[0].length === next.length && parts[pos + 1] === '>') {
	              // fast case, no attribute parsing needed
	              pos += 2;
	              tagName = m[1].toLowerCase();
	              if (h.endTag) {
	                h.endTag(tagName, param, continuationMarker,
	                  continuationMaker(h, parts, pos, state, param));
	              }
	            } else {
	              // slow case, need to parse attributes
	              // TODO(felix8a): do we really care about misparsing this?
	              pos = parseEndTag(
	                parts, pos, h, param, continuationMarker, state);
	            }
	          } else {
	            if (h.pcdata) {
	              h.pcdata('&lt;/', param, continuationMarker,
	                continuationMaker(h, parts, pos, state, param));
	            }
	          }
	          break;
	        case '<':
	          if (m = /^([-\w:]+)\s*\/?/.exec(next)) {
	            if (m[0].length === next.length && parts[pos + 1] === '>') {
	              // fast case, no attribute parsing needed
	              pos += 2;
	              tagName = m[1].toLowerCase();
	              if (h.startTag) {
	                h.startTag(tagName, [], param, continuationMarker,
	                  continuationMaker(h, parts, pos, state, param));
	              }
	              // tags like <script> and <textarea> have special parsing
	              var eflags = html4.ELEMENTS[tagName];
	              if (eflags & EFLAGS_TEXT) {
	                var tag = { name: tagName, next: pos, eflags: eflags };
	                pos = parseText(
	                  parts, tag, h, param, continuationMarker, state);
	              }
	            } else {
	              // slow case, need to parse attributes
	              pos = parseStartTag(
	                parts, pos, h, param, continuationMarker, state);
	            }
	          } else {
	            if (h.pcdata) {
	              h.pcdata('&lt;', param, continuationMarker,
	                continuationMaker(h, parts, pos, state, param));
	            }
	          }
	          break;
	        case '<\!--':
	          // The pathological case is n copies of '<\!--' without '-->', and
	          // repeated failure to find '-->' is quadratic.  We avoid that by
	          // remembering when search for '-->' fails.
	          if (!state.noMoreEndComments) {
	            // A comment <\!--x--> is split into three tokens:
	            //   '<\!--', 'x--', '>'
	            // We want to find the next '>' token that has a preceding '--'.
	            // pos is at the 'x--'.
	            for (p = pos + 1; p < end; p++) {
	              if (parts[p] === '>' && /--$/.test(parts[p - 1])) { break; }
	            }
	            if (p < end) {
	              if (h.comment) {
	                var comment = parts.slice(pos, p).join('');
	                h.comment(
	                  comment.substr(0, comment.length - 2), param,
	                  continuationMarker,
	                  continuationMaker(h, parts, p + 1, state, param));
	              }
	              pos = p + 1;
	            } else {
	              state.noMoreEndComments = true;
	            }
	          }
	          if (state.noMoreEndComments) {
	            if (h.pcdata) {
	              h.pcdata('&lt;!--', param, continuationMarker,
	                continuationMaker(h, parts, pos, state, param));
	            }
	          }
	          break;
	        case '<\!':
	          if (!/^\w/.test(next)) {
	            if (h.pcdata) {
	              h.pcdata('&lt;!', param, continuationMarker,
	                continuationMaker(h, parts, pos, state, param));
	            }
	          } else {
	            // similar to noMoreEndComment logic
	            if (!state.noMoreGT) {
	              for (p = pos + 1; p < end; p++) {
	                if (parts[p] === '>') { break; }
	              }
	              if (p < end) {
	                pos = p + 1;
	              } else {
	                state.noMoreGT = true;
	              }
	            }
	            if (state.noMoreGT) {
	              if (h.pcdata) {
	                h.pcdata('&lt;!', param, continuationMarker,
	                  continuationMaker(h, parts, pos, state, param));
	              }
	            }
	          }
	          break;
	        case '<?':
	          // similar to noMoreEndComment logic
	          if (!state.noMoreGT) {
	            for (p = pos + 1; p < end; p++) {
	              if (parts[p] === '>') { break; }
	            }
	            if (p < end) {
	              pos = p + 1;
	            } else {
	              state.noMoreGT = true;
	            }
	          }
	          if (state.noMoreGT) {
	            if (h.pcdata) {
	              h.pcdata('&lt;?', param, continuationMarker,
	                continuationMaker(h, parts, pos, state, param));
	            }
	          }
	          break;
	        case '>':
	          if (h.pcdata) {
	            h.pcdata("&gt;", param, continuationMarker,
	              continuationMaker(h, parts, pos, state, param));
	          }
	          break;
	        case '':
	          break;
	        default:
	          if (h.pcdata) {
	            h.pcdata(current, param, continuationMarker,
	              continuationMaker(h, parts, pos, state, param));
	          }
	          break;
	        }
	      }
	      if (h.endDoc) { h.endDoc(param); }
	    } catch (e) {
	      if (e !== continuationMarker) { throw e; }
	    }
	  }

	  // Split str into parts for the html parser.
	  function htmlSplit(str) {
	    // can't hoist this out of the function because of the re.exec loop.
	    var re = /(<\/|<\!--|<[!?]|[&<>])/g;
	    str += '';
	    if (splitWillCapture) {
	      return str.split(re);
	    } else {
	      var parts = [];
	      var lastPos = 0;
	      var m;
	      while ((m = re.exec(str)) !== null) {
	        parts.push(str.substring(lastPos, m.index));
	        parts.push(m[0]);
	        lastPos = m.index + m[0].length;
	      }
	      parts.push(str.substring(lastPos));
	      return parts;
	    }
	  }

	  function parseEndTag(parts, pos, h, param, continuationMarker, state) {
	    var tag = parseTagAndAttrs(parts, pos);
	    // drop unclosed tags
	    if (!tag) { return parts.length; }
	    if (h.endTag) {
	      h.endTag(tag.name, param, continuationMarker,
	        continuationMaker(h, parts, pos, state, param));
	    }
	    return tag.next;
	  }

	  function parseStartTag(parts, pos, h, param, continuationMarker, state) {
	    var tag = parseTagAndAttrs(parts, pos);
	    // drop unclosed tags
	    if (!tag) { return parts.length; }
	    if (h.startTag) {
	      h.startTag(tag.name, tag.attrs, param, continuationMarker,
	        continuationMaker(h, parts, tag.next, state, param));
	    }
	    // tags like <script> and <textarea> have special parsing
	    if (tag.eflags & EFLAGS_TEXT) {
	      return parseText(parts, tag, h, param, continuationMarker, state);
	    } else {
	      return tag.next;
	    }
	  }

	  var endTagRe = {};

	  // Tags like <script> and <textarea> are flagged as CDATA or RCDATA,
	  // which means everything is text until we see the correct closing tag.
	  function parseText(parts, tag, h, param, continuationMarker, state) {
	    var end = parts.length;
	    if (!endTagRe.hasOwnProperty(tag.name)) {
	      endTagRe[tag.name] = new RegExp('^' + tag.name + '(?:[\\s\\/]|$)', 'i');
	    }
	    var re = endTagRe[tag.name];
	    var first = tag.next;
	    var p = tag.next + 1;
	    for (; p < end; p++) {
	      if (parts[p - 1] === '<\/' && re.test(parts[p])) { break; }
	    }
	    if (p < end) { p -= 1; }
	    var buf = parts.slice(first, p).join('');
	    if (tag.eflags & html4.eflags['CDATA']) {
	      if (h.cdata) {
	        h.cdata(buf, param, continuationMarker,
	          continuationMaker(h, parts, p, state, param));
	      }
	    } else if (tag.eflags & html4.eflags['RCDATA']) {
	      if (h.rcdata) {
	        h.rcdata(normalizeRCData(buf), param, continuationMarker,
	          continuationMaker(h, parts, p, state, param));
	      }
	    } else {
	      throw new Error('bug');
	    }
	    return p;
	  }

	  // at this point, parts[pos-1] is either "<" or "<\/".
	  function parseTagAndAttrs(parts, pos) {
	    var m = /^([-\w:]+)/.exec(parts[pos]);
	    var tag = {};
	    tag.name = m[1].toLowerCase();
	    tag.eflags = html4.ELEMENTS[tag.name];
	    var buf = parts[pos].substr(m[0].length);
	    // Find the next '>'.  We optimistically assume this '>' is not in a
	    // quoted context, and further down we fix things up if it turns out to
	    // be quoted.
	    var p = pos + 1;
	    var end = parts.length;
	    for (; p < end; p++) {
	      if (parts[p] === '>') { break; }
	      buf += parts[p];
	    }
	    if (end <= p) { return void 0; }
	    var attrs = [];
	    while (buf !== '') {
	      m = ATTR_RE.exec(buf);
	      if (!m) {
	        // No attribute found: skip garbage
	        buf = buf.replace(/^[\s\S][^a-z\s]*/, '');

	      } else if ((m[4] && !m[5]) || (m[6] && !m[7])) {
	        // Unterminated quote: slurp to the next unquoted '>'
	        var quote = m[4] || m[6];
	        var sawQuote = false;
	        var abuf = [buf, parts[p++]];
	        for (; p < end; p++) {
	          if (sawQuote) {
	            if (parts[p] === '>') { break; }
	          } else if (0 <= parts[p].indexOf(quote)) {
	            sawQuote = true;
	          }
	          abuf.push(parts[p]);
	        }
	        // Slurp failed: lose the garbage
	        if (end <= p) { break; }
	        // Otherwise retry attribute parsing
	        buf = abuf.join('');
	        continue;

	      } else {
	        // We have an attribute
	        var aName = m[1].toLowerCase();
	        var aValue = m[2] ? decodeValue(m[3]) : '';
	        attrs.push(aName, aValue);
	        buf = buf.substr(m[0].length);
	      }
	    }
	    tag.attrs = attrs;
	    tag.next = p + 1;
	    return tag;
	  }

	  function decodeValue(v) {
	    var q = v.charCodeAt(0);
	    if (q === 0x22 || q === 0x27) { // " or '
	      v = v.substr(1, v.length - 2);
	    }
	    return unescapeEntities(stripNULs(v));
	  }

	  /**
	   * Returns a function that strips unsafe tags and attributes from html.
	   * @param {function(string, Array.<string>): ?Array.<string>} tagPolicy
	   *     A function that takes (tagName, attribs[]), where tagName is a key in
	   *     html4.ELEMENTS and attribs is an array of alternating attribute names
	   *     and values.  It should return a record (as follows), or null to delete
	   *     the element.  It's okay for tagPolicy to modify the attribs array,
	   *     but the same array is reused, so it should not be held between calls.
	   *     Record keys:
	   *        attribs: (required) Sanitized attributes array.
	   *        tagName: Replacement tag name.
	   * @return {function(string, Array)} A function that sanitizes a string of
	   *     HTML and appends result strings to the second argument, an array.
	   */
	  function makeHtmlSanitizer(tagPolicy) {
	    var stack;
	    var ignoring;
	    var emit = function (text, out) {
	      if (!ignoring) { out.push(text); }
	    };
	    return makeSaxParser({
	      'startDoc': function(_) {
	        stack = [];
	        ignoring = false;
	      },
	      'startTag': function(tagNameOrig, attribs, out) {
	        if (ignoring) { return; }
	        if (!html4.ELEMENTS.hasOwnProperty(tagNameOrig)) { return; }
	        var eflagsOrig = html4.ELEMENTS[tagNameOrig];
	        if (eflagsOrig & html4.eflags['FOLDABLE']) {
	          return;
	        }

	        var decision = tagPolicy(tagNameOrig, attribs);
	        if (!decision) {
	          ignoring = !(eflagsOrig & html4.eflags['EMPTY']);
	          return;
	        } else if (typeof decision !== 'object') {
	          throw new Error('tagPolicy did not return object (old API?)');
	        }
	        if ('attribs' in decision) {
	          attribs = decision['attribs'];
	        } else {
	          throw new Error('tagPolicy gave no attribs');
	        }
	        var eflagsRep;
	        var tagNameRep;
	        if ('tagName' in decision) {
	          tagNameRep = decision['tagName'];
	          eflagsRep = html4.ELEMENTS[tagNameRep];
	        } else {
	          tagNameRep = tagNameOrig;
	          eflagsRep = eflagsOrig;
	        }
	        // TODO(mikesamuel): relying on tagPolicy not to insert unsafe
	        // attribute names.

	        // If this is an optional-end-tag element and either this element or its
	        // previous like sibling was rewritten, then insert a close tag to
	        // preserve structure.
	        if (eflagsOrig & html4.eflags['OPTIONAL_ENDTAG']) {
	          var onStack = stack[stack.length - 1];
	          if (onStack && onStack.orig === tagNameOrig &&
	              (onStack.rep !== tagNameRep || tagNameOrig !== tagNameRep)) {
	                out.push('<\/', onStack.rep, '>');
	          }
	        }

	        if (!(eflagsOrig & html4.eflags['EMPTY'])) {
	          stack.push({orig: tagNameOrig, rep: tagNameRep});
	        }

	        out.push('<', tagNameRep);
	        for (var i = 0, n = attribs.length; i < n; i += 2) {
	          var attribName = attribs[i],
	              value = attribs[i + 1];
	          if (value !== null && value !== void 0) {
	            out.push(' ', attribName, '="', escapeAttrib(value), '"');
	          }
	        }
	        out.push('>');

	        if ((eflagsOrig & html4.eflags['EMPTY'])
	            && !(eflagsRep & html4.eflags['EMPTY'])) {
	          // replacement is non-empty, synthesize end tag
	          out.push('<\/', tagNameRep, '>');
	        }
	      },
	      'endTag': function(tagName, out) {
	        if (ignoring) {
	          ignoring = false;
	          return;
	        }
	        if (!html4.ELEMENTS.hasOwnProperty(tagName)) { return; }
	        var eflags = html4.ELEMENTS[tagName];
	        if (!(eflags & (html4.eflags['EMPTY'] | html4.eflags['FOLDABLE']))) {
	          var index;
	          if (eflags & html4.eflags['OPTIONAL_ENDTAG']) {
	            for (index = stack.length; --index >= 0;) {
	              var stackElOrigTag = stack[index].orig;
	              if (stackElOrigTag === tagName) { break; }
	              if (!(html4.ELEMENTS[stackElOrigTag] &
	                    html4.eflags['OPTIONAL_ENDTAG'])) {
	                // Don't pop non optional end tags looking for a match.
	                return;
	              }
	            }
	          } else {
	            for (index = stack.length; --index >= 0;) {
	              if (stack[index].orig === tagName) { break; }
	            }
	          }
	          if (index < 0) { return; }  // Not opened.
	          for (var i = stack.length; --i > index;) {
	            var stackElRepTag = stack[i].rep;
	            if (!(html4.ELEMENTS[stackElRepTag] &
	                  html4.eflags['OPTIONAL_ENDTAG'])) {
	              out.push('<\/', stackElRepTag, '>');
	            }
	          }
	          if (index < stack.length) {
	            tagName = stack[index].rep;
	          }
	          stack.length = index;
	          out.push('<\/', tagName, '>');
	        }
	      },
	      'pcdata': emit,
	      'rcdata': emit,
	      'cdata': emit,
	      'endDoc': function(out) {
	        for (; stack.length; stack.length--) {
	          out.push('<\/', stack[stack.length - 1].rep, '>');
	        }
	      }
	    });
	  }

	  var ALLOWED_URI_SCHEMES = /^(?:https?|mailto|data)$/i;

	  function safeUri(uri, effect, ltype, hints, naiveUriRewriter) {
	    if (!naiveUriRewriter) { return null; }
	    try {
	      var parsed = URI.parse('' + uri);
	      if (parsed) {
	        if (!parsed.hasScheme() ||
	            ALLOWED_URI_SCHEMES.test(parsed.getScheme())) {
	          var safe = naiveUriRewriter(parsed, effect, ltype, hints);
	          return safe ? safe.toString() : null;
	        }
	      }
	    } catch (e) {
	      return null;
	    }
	    return null;
	  }

	  function log(logger, tagName, attribName, oldValue, newValue) {
	    if (!attribName) {
	      logger(tagName + " removed", {
	        change: "removed",
	        tagName: tagName
	      });
	    }
	    if (oldValue !== newValue) {
	      var changed = "changed";
	      if (oldValue && !newValue) {
	        changed = "removed";
	      } else if (!oldValue && newValue)  {
	        changed = "added";
	      }
	      logger(tagName + "." + attribName + " " + changed, {
	        change: changed,
	        tagName: tagName,
	        attribName: attribName,
	        oldValue: oldValue,
	        newValue: newValue
	      });
	    }
	  }

	  function lookupAttribute(map, tagName, attribName) {
	    var attribKey;
	    attribKey = tagName + '::' + attribName;
	    if (map.hasOwnProperty(attribKey)) {
	      return map[attribKey];
	    }
	    attribKey = '*::' + attribName;
	    if (map.hasOwnProperty(attribKey)) {
	      return map[attribKey];
	    }
	    return void 0;
	  }
	  function getAttributeType(tagName, attribName) {
	    return lookupAttribute(html4.ATTRIBS, tagName, attribName);
	  }
	  function getLoaderType(tagName, attribName) {
	    return lookupAttribute(html4.LOADERTYPES, tagName, attribName);
	  }
	  function getUriEffect(tagName, attribName) {
	    return lookupAttribute(html4.URIEFFECTS, tagName, attribName);
	  }

	  /**
	   * Sanitizes attributes on an HTML tag.
	   * @param {string} tagName An HTML tag name in lowercase.
	   * @param {Array.<?string>} attribs An array of alternating names and values.
	   * @param {?function(?string): ?string} opt_naiveUriRewriter A transform to
	   *     apply to URI attributes; it can return a new string value, or null to
	   *     delete the attribute.  If unspecified, URI attributes are deleted.
	   * @param {function(?string): ?string} opt_nmTokenPolicy A transform to apply
	   *     to attributes containing HTML names, element IDs, and space-separated
	   *     lists of classes; it can return a new string value, or null to delete
	   *     the attribute.  If unspecified, these attributes are kept unchanged.
	   * @return {Array.<?string>} The sanitized attributes as a list of alternating
	   *     names and values, where a null value means to omit the attribute.
	   */
	  function sanitizeAttribs(tagName, attribs,
	    opt_naiveUriRewriter, opt_nmTokenPolicy, opt_logger) {
	    // TODO(felix8a): it's obnoxious that domado duplicates much of this
	    // TODO(felix8a): maybe consistently enforce constraints like target=
	    for (var i = 0; i < attribs.length; i += 2) {
	      var attribName = attribs[i];
	      var value = attribs[i + 1];
	      var oldValue = value;
	      var atype = null, attribKey;
	      if ((attribKey = tagName + '::' + attribName,
	           html4.ATTRIBS.hasOwnProperty(attribKey)) ||
	          (attribKey = '*::' + attribName,
	           html4.ATTRIBS.hasOwnProperty(attribKey))) {
	        atype = html4.ATTRIBS[attribKey];
	      }
	      if (atype !== null) {
	        switch (atype) {
	          case html4.atype['NONE']: break;
	          case html4.atype['SCRIPT']:
	            value = null;
	            if (opt_logger) {
	              log(opt_logger, tagName, attribName, oldValue, value);
	            }
	            break;
	          case html4.atype['STYLE']:
	            if ('undefined' === typeof parseCssDeclarations) {
	              value = null;
	              if (opt_logger) {
	                log(opt_logger, tagName, attribName, oldValue, value);
		      }
	              break;
	            }
	            var sanitizedDeclarations = [];
	            parseCssDeclarations(
	                value,
	                {
	                  declaration: function (property, tokens) {
	                    var normProp = property.toLowerCase();
	                    var schema = cssSchema[normProp];
	                    if (!schema) {
	                      return;
	                    }
	                    sanitizeCssProperty(
	                        normProp, schema, tokens,
	                        opt_naiveUriRewriter
	                        ? function (url) {
	                            return safeUri(
	                                url, html4.ueffects.SAME_DOCUMENT,
	                                html4.ltypes.SANDBOXED,
	                                {
	                                  "TYPE": "CSS",
	                                  "CSS_PROP": normProp
	                                }, opt_naiveUriRewriter);
	                          }
	                        : null);
	                    sanitizedDeclarations.push(property + ': ' + tokens.join(' '));
	                  }
	                });
	            value = sanitizedDeclarations.length > 0 ?
	              sanitizedDeclarations.join(' ; ') : null;
	            if (opt_logger) {
	              log(opt_logger, tagName, attribName, oldValue, value);
	            }
	            break;
	          case html4.atype['ID']:
	          case html4.atype['IDREF']:
	          case html4.atype['IDREFS']:
	          case html4.atype['GLOBAL_NAME']:
	          case html4.atype['LOCAL_NAME']:
	          case html4.atype['CLASSES']:
	            value = opt_nmTokenPolicy ? opt_nmTokenPolicy(value) : value;
	            if (opt_logger) {
	              log(opt_logger, tagName, attribName, oldValue, value);
	            }
	            break;
	          case html4.atype['URI']:
	            value = safeUri(value,
	              getUriEffect(tagName, attribName),
	              getLoaderType(tagName, attribName),
	              {
	                "TYPE": "MARKUP",
	                "XML_ATTR": attribName,
	                "XML_TAG": tagName
	              }, opt_naiveUriRewriter);
	              if (opt_logger) {
	              log(opt_logger, tagName, attribName, oldValue, value);
	            }
	            break;
	          case html4.atype['URI_FRAGMENT']:
	            if (value && '#' === value.charAt(0)) {
	              value = value.substring(1);  // remove the leading '#'
	              value = opt_nmTokenPolicy ? opt_nmTokenPolicy(value) : value;
	              if (value !== null && value !== void 0) {
	                value = '#' + value;  // restore the leading '#'
	              }
	            } else {
	              value = null;
	            }
	            if (opt_logger) {
	              log(opt_logger, tagName, attribName, oldValue, value);
	            }
	            break;
	          default:
	            value = null;
	            if (opt_logger) {
	              log(opt_logger, tagName, attribName, oldValue, value);
	            }
	            break;
	        }
	      } else {
	        value = null;
	        if (opt_logger) {
	          log(opt_logger, tagName, attribName, oldValue, value);
	        }
	      }
	      attribs[i + 1] = value;
	    }
	    return attribs;
	  }

	  /**
	   * Creates a tag policy that omits all tags marked UNSAFE in html4-defs.js
	   * and applies the default attribute sanitizer with the supplied policy for
	   * URI attributes and NMTOKEN attributes.
	   * @param {?function(?string): ?string} opt_naiveUriRewriter A transform to
	   *     apply to URI attributes.  If not given, URI attributes are deleted.
	   * @param {function(?string): ?string} opt_nmTokenPolicy A transform to apply
	   *     to attributes containing HTML names, element IDs, and space-separated
	   *     lists of classes.  If not given, such attributes are left unchanged.
	   * @return {function(string, Array.<?string>)} A tagPolicy suitable for
	   *     passing to html.sanitize.
	   */
	  function makeTagPolicy(
	    opt_naiveUriRewriter, opt_nmTokenPolicy, opt_logger) {
	    return function(tagName, attribs) {
	      if (!(html4.ELEMENTS[tagName] & html4.eflags['UNSAFE'])) {
	        return {
	          'attribs': sanitizeAttribs(tagName, attribs,
	            opt_naiveUriRewriter, opt_nmTokenPolicy, opt_logger)
	        };
	      } else {
	        if (opt_logger) {
	          log(opt_logger, tagName, undefined, undefined, undefined);
	        }
	      }
	    };
	  }

	  /**
	   * Sanitizes HTML tags and attributes according to a given policy.
	   * @param {string} inputHtml The HTML to sanitize.
	   * @param {function(string, Array.<?string>)} tagPolicy A function that
	   *     decides which tags to accept and sanitizes their attributes (see
	   *     makeHtmlSanitizer above for details).
	   * @return {string} The sanitized HTML.
	   */
	  function sanitizeWithPolicy(inputHtml, tagPolicy) {
	    var outputArray = [];
	    makeHtmlSanitizer(tagPolicy)(inputHtml, outputArray);
	    return outputArray.join('');
	  }

	  /**
	   * Strips unsafe tags and attributes from HTML.
	   * @param {string} inputHtml The HTML to sanitize.
	   * @param {?function(?string): ?string} opt_naiveUriRewriter A transform to
	   *     apply to URI attributes.  If not given, URI attributes are deleted.
	   * @param {function(?string): ?string} opt_nmTokenPolicy A transform to apply
	   *     to attributes containing HTML names, element IDs, and space-separated
	   *     lists of classes.  If not given, such attributes are left unchanged.
	   */
	  function sanitize(inputHtml,
	    opt_naiveUriRewriter, opt_nmTokenPolicy, opt_logger) {
	    var tagPolicy = makeTagPolicy(
	      opt_naiveUriRewriter, opt_nmTokenPolicy, opt_logger);
	    return sanitizeWithPolicy(inputHtml, tagPolicy);
	  }

	  // Export both quoted and unquoted names for Closure linkage.
	  var html = {};
	  html.escapeAttrib = html['escapeAttrib'] = escapeAttrib;
	  html.makeHtmlSanitizer = html['makeHtmlSanitizer'] = makeHtmlSanitizer;
	  html.makeSaxParser = html['makeSaxParser'] = makeSaxParser;
	  html.makeTagPolicy = html['makeTagPolicy'] = makeTagPolicy;
	  html.normalizeRCData = html['normalizeRCData'] = normalizeRCData;
	  html.sanitize = html['sanitize'] = sanitize;
	  html.sanitizeAttribs = html['sanitizeAttribs'] = sanitizeAttribs;
	  html.sanitizeWithPolicy = html['sanitizeWithPolicy'] = sanitizeWithPolicy;
	  html.unescapeEntities = html['unescapeEntities'] = unescapeEntities;
	  return html;
	})(html4);

	var html_sanitize = html['sanitize'];

	// Loosen restrictions of Caja's
	// html-sanitizer to allow for styling
	html4.ATTRIBS['*::style'] = 0;
	html4.ELEMENTS['style'] = 0;
	html4.ATTRIBS['a::target'] = 0;
	html4.ELEMENTS['video'] = 0;
	html4.ATTRIBS['video::src'] = 0;
	html4.ATTRIBS['video::poster'] = 0;
	html4.ATTRIBS['video::controls'] = 0;
	html4.ELEMENTS['audio'] = 0;
	html4.ATTRIBS['audio::src'] = 0;
	html4.ATTRIBS['video::autoplay'] = 0;
	html4.ATTRIBS['video::controls'] = 0;

	if (true) {
	    module.exports = html_sanitize;
	}


/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var util = __webpack_require__(10),
	    format_url = __webpack_require__(11),
	    request = __webpack_require__(15),
	    marker = __webpack_require__(22),
	    simplestyle = __webpack_require__(23);

	// # featureLayer
	//
	// A layer of features, loaded from Mapbox or else. Adds the ability
	// to reset features, filter them, and load them from a GeoJSON URL.
	var FeatureLayer = L.FeatureGroup.extend({
	    options: {
	        filter: function() { return true; },
	        sanitizer: __webpack_require__(19),
	        style: simplestyle.style,
	        popupOptions: { closeButton: false }
	    },

	    initialize: function(_, options) {
	        L.setOptions(this, options);

	        this._layers = {};

	        if (typeof _ === 'string') {
	            util.idUrl(_, this);
	        // javascript object of TileJSON data
	        } else if (_ && typeof _ === 'object') {
	            this.setGeoJSON(_);
	        }
	    },

	    setGeoJSON: function(_) {
	        this._geojson = _;
	        this.clearLayers();
	        this._initialize(_);
	        return this;
	    },

	    getGeoJSON: function() {
	        return this._geojson;
	    },

	    loadURL: function(url) {
	        if (this._request && 'abort' in this._request) this._request.abort();
	        this._request = request(url, L.bind(function(err, json) {
	            this._request = null;
	            if (err && err.type !== 'abort') {
	                util.log('could not load features at ' + url);
	                this.fire('error', {error: err});
	            } else if (json) {
	                this.setGeoJSON(json);
	                this.fire('ready');
	            }
	        }, this));
	        return this;
	    },

	    loadID: function(id) {
	        return this.loadURL(format_url('/v4/' + id + '/features.json', this.options.accessToken));
	    },

	    setFilter: function(_) {
	        this.options.filter = _;
	        if (this._geojson) {
	            this.clearLayers();
	            this._initialize(this._geojson);
	        }
	        return this;
	    },

	    getFilter: function() {
	        return this.options.filter;
	    },

	    _initialize: function(json) {
	        var features = L.Util.isArray(json) ? json : json.features,
	            i, len;

	        if (features) {
	            for (i = 0, len = features.length; i < len; i++) {
	                // Only add this if geometry or geometries are set and not null
	                if (features[i].geometries || features[i].geometry || features[i].features) {
	                    this._initialize(features[i]);
	                }
	            }
	        } else if (this.options.filter(json)) {

	            var opts = {accessToken: this.options.accessToken},
	                pointToLayer = this.options.pointToLayer || function(feature, latlon) {
	                  return marker.style(feature, latlon, opts);
	                },
	                layer = L.GeoJSON.geometryToLayer(json, pointToLayer),
	                popupHtml = marker.createPopup(json, this.options.sanitizer),
	                style = this.options.style,
	                defaultStyle = style === simplestyle.style;

	            if (style && 'setStyle' in layer &&
	                // if the style method is the simplestyle default, then
	                // never style L.Circle or L.CircleMarker because
	                // simplestyle has no rules over them, only over geometry
	                // primitives directly from GeoJSON
	                (!(defaultStyle && (layer instanceof L.Circle ||
	                  layer instanceof L.CircleMarker)))) {
	                if (typeof style === 'function') {
	                    style = style(json);
	                }
	                layer.setStyle(style);
	            }

	            layer.feature = json;

	            if (popupHtml) {
	                layer.bindPopup(popupHtml, this.options.popupOptions);
	            }

	            this.addLayer(layer);
	        }
	    }
	});

	module.exports.FeatureLayer = FeatureLayer;

	module.exports.featureLayer = function(_, options) {
	    return new FeatureLayer(_, options);
	};


/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var format_url = __webpack_require__(11),
	    util = __webpack_require__(10),
	    sanitize = __webpack_require__(19);

	// mapbox-related markers functionality
	// provide an icon from mapbox's simple-style spec and hosted markers
	// service
	function icon(fp, options) {
	    fp = fp || {};

	    var sizes = {
	            small: [20, 50],
	            medium: [30, 70],
	            large: [35, 90]
	        },
	        size = fp['marker-size'] || 'medium',
	        symbol = ('marker-symbol' in fp && fp['marker-symbol'] !== '') ? '-' + fp['marker-symbol'] : '',
	        color = (fp['marker-color'] || '7e7e7e').replace('#', '');

	    return L.icon({
	        iconUrl: format_url('/v4/marker/' +
	            'pin-' + size.charAt(0) + symbol + '+' + color +
	            // detect and use retina markers, which are x2 resolution
	            (L.Browser.retina ? '@2x' : '') + '.png', options && options.accessToken),
	        iconSize: sizes[size],
	        iconAnchor: [sizes[size][0] / 2, sizes[size][1] / 2],
	        popupAnchor: [0, -sizes[size][1] / 2]
	    });
	}

	// a factory that provides markers for Leaflet from Mapbox's
	// [simple-style specification](https://github.com/mapbox/simplestyle-spec)
	// and [Markers API](http://mapbox.com/developers/api/#markers).
	function style(f, latlon, options) {
	    return L.marker(latlon, {
	        icon: icon(f.properties, options),
	        title: util.strip_tags(
	            sanitize((f.properties && f.properties.title) || ''))
	    });
	}

	// Sanitize and format properties of a GeoJSON Feature object in order
	// to form the HTML string used as the argument for `L.createPopup`
	function createPopup(f, sanitizer) {
	    if (!f || !f.properties) return '';
	    var popup = '';

	    if (f.properties.title) {
	        popup += '<div class="marker-title">' + f.properties.title + '</div>';
	    }

	    if (f.properties.description) {
	        popup += '<div class="marker-description">' + f.properties.description + '</div>';
	    }

	    return (sanitizer || sanitize)(popup);
	}

	module.exports = {
	    icon: icon,
	    style: style,
	    createPopup: createPopup
	};


/***/ },
/* 23 */
/***/ function(module, exports) {

	'use strict';

	// an implementation of the simplestyle spec for polygon and linestring features
	// https://github.com/mapbox/simplestyle-spec
	var defaults = {
	    stroke: '#555555',
	    'stroke-width': 2,
	    'stroke-opacity': 1,
	    fill: '#555555',
	    'fill-opacity': 0.5
	};

	var mapping = [
	    ['stroke', 'color'],
	    ['stroke-width', 'weight'],
	    ['stroke-opacity', 'opacity'],
	    ['fill', 'fillColor'],
	    ['fill-opacity', 'fillOpacity']
	];

	function fallback(a, b) {
	    var c = {};
	    for (var k in b) {
	        if (a[k] === undefined) c[k] = b[k];
	        else c[k] = a[k];
	    }
	    return c;
	}

	function remap(a) {
	    var d = {};
	    for (var i = 0; i < mapping.length; i++) {
	        d[mapping[i][1]] = a[mapping[i][0]];
	    }
	    return d;
	}

	function style(feature) {
	    return remap(fallback(feature.properties || {}, defaults));
	}

	module.exports = {
	    style: style,
	    defaults: defaults
	};


/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var LegendControl = L.Control.extend({

	    options: {
	        position: 'bottomright',
	        sanitizer: __webpack_require__(19)
	    },

	    initialize: function(options) {
	        L.setOptions(this, options);
	        this._legends = {};
	    },

	    onAdd: function() {
	        this._container = L.DomUtil.create('div', 'map-legends wax-legends');
	        L.DomEvent.disableClickPropagation(this._container);

	        this._update();

	        return this._container;
	    },

	    addLegend: function(text) {
	        if (!text) { return this; }

	        if (!this._legends[text]) {
	            this._legends[text] = 0;
	        }

	        this._legends[text]++;
	        return this._update();
	    },

	    removeLegend: function(text) {
	        if (!text) { return this; }
	        if (this._legends[text]) this._legends[text]--;
	        return this._update();
	    },

	    _update: function() {
	        if (!this._map) { return this; }

	        this._container.innerHTML = '';
	        var hide = 'none';

	        for (var i in this._legends) {
	            if (this._legends.hasOwnProperty(i) && this._legends[i]) {
	                var div = L.DomUtil.create('div', 'map-legend wax-legend', this._container);
	                div.innerHTML = this.options.sanitizer(i);
	                hide = 'block';
	            }
	        }

	        // hide the control entirely unless there is at least one legend;
	        // otherwise there will be a small grey blemish on the map.
	        this._container.style.display = hide;

	        return this;
	    }
	});

	module.exports.LegendControl = LegendControl;

	module.exports.legendControl = function(options) {
	    return new LegendControl(options);
	};


/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var format_url = __webpack_require__(11);

	var ShareControl = L.Control.extend({
	    includes: [__webpack_require__(26)],

	    options: {
	        position: 'topleft',
	        url: ''
	    },

	    initialize: function(_, options) {
	        L.setOptions(this, options);
	        this._loadTileJSON(_);
	    },

	    _setTileJSON: function(json) {
	        this._tilejson = json;
	    },

	    onAdd: function(map) {
	        this._map = map;

	        var container = L.DomUtil.create('div', 'leaflet-control-mapbox-share leaflet-bar');
	        var link = L.DomUtil.create('a', 'mapbox-share mapbox-icon mapbox-icon-share', container);
	        link.href = '#';

	        this._modal = L.DomUtil.create('div', 'mapbox-modal', this._map._container);
	        this._mask = L.DomUtil.create('div', 'mapbox-modal-mask', this._modal);
	        this._content = L.DomUtil.create('div', 'mapbox-modal-content', this._modal);

	        L.DomEvent.addListener(link, 'click', this._shareClick, this);
	        L.DomEvent.disableClickPropagation(container);

	        this._map.on('mousedown', this._clickOut, this);

	        return container;
	    },

	    _clickOut: function(e) {
	        if (this._sharing) {
	            L.DomEvent.preventDefault(e);
	            L.DomUtil.removeClass(this._modal, 'active');
	            this._content.innerHTML = '';
	            this._sharing = null;
	            return;
	        }
	    },

	    _shareClick: function(e) {
	        L.DomEvent.stop(e);
	        if (this._sharing) return this._clickOut(e);

	        var tilejson = this._tilejson || this._map._tilejson || {},
	            url = encodeURIComponent(this.options.url || tilejson.webpage || window.location),
	            name = encodeURIComponent(tilejson.name),
	            image = format_url('/v4/' + tilejson.id + '/' + this._map.getCenter().lng + ',' + this._map.getCenter().lat + ',' + this._map.getZoom() + '/600x600.png', this.options.accessToken),
	            embed = format_url('/v4/' + tilejson.id + '.html', this.options.accessToken),
	            twitterURL = '//twitter.com/intent/tweet?status=' + name + ' ' + url,
	            facebookURL = '//www.facebook.com/sharer.php?u=' + url + '&t=' + name,
	            pinterestURL = '//www.pinterest.com/pin/create/button/?url=' + url + '&media=' + image + '&description=' + name,
	            embedValue = '<iframe width="100%" height="500px" frameBorder="0" src="' + embed + '"></iframe>',
	            embedLabel = 'Copy and paste this <strong>HTML code</strong> into documents to embed this map on web pages.';

	        function createShareButton(buttonClass, href, socialMediaName) {
	            var elem = document.createElement('a');
	            elem.setAttribute('class', buttonClass);
	            elem.setAttribute('href', href);
	            elem.setAttribute('target', '_blank');
	            socialMediaName = document.createTextNode(socialMediaName);
	            elem.appendChild(socialMediaName);

	            return elem;
	        }

	        L.DomUtil.addClass(this._modal, 'active');

	        this._sharing = L.DomUtil.create('div', 'mapbox-modal-body', this._content);

	        var twitterButton = createShareButton('mapbox-button mapbox-button-icon mapbox-icon-twitter', twitterURL, 'Twitter');
	        var facebookButton = createShareButton('mapbox-button mapbox-button-icon mapbox-icon-facebook', facebookURL, 'Facebook');
	        var pinterestButton = createShareButton('mapbox-button mapbox-button-icon mapbox-icon-pinterest', pinterestURL, 'Pinterest');

	        var shareHeader = document.createElement('h3');
	        var shareText = document.createTextNode('Share this map');
	        shareHeader.appendChild(shareText);

	        var shareButtons = document.createElement('div');
	        shareButtons.setAttribute('class', 'mapbox-share-buttons');
	        shareButtons.appendChild(facebookButton);
	        shareButtons.appendChild(twitterButton);
	        shareButtons.appendChild(pinterestButton);

	        this._sharing.appendChild(shareHeader);
	        this._sharing.appendChild(shareButtons);

	        var input = L.DomUtil.create('input', 'mapbox-embed', this._sharing);
	        input.type = 'text';
	        input.value = embedValue;

	        var label = L.DomUtil.create('label', 'mapbox-embed-description', this._sharing);
	        label.innerHTML = embedLabel;

	        var close = L.DomUtil.create('a', 'leaflet-popup-close-button', this._sharing);
	        close.href = '#';

	        L.DomEvent.disableClickPropagation(this._sharing);
	        L.DomEvent.addListener(close, 'click', this._clickOut, this);
	        L.DomEvent.addListener(input, 'click', function(e) {
	            e.target.focus();
	            e.target.select();
	        });
	    }
	});

	module.exports.ShareControl = ShareControl;

	module.exports.shareControl = function(_, options) {
	    return new ShareControl(_, options);
	};


/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var request = __webpack_require__(15),
	    format_url = __webpack_require__(11),
	    util = __webpack_require__(10);

	module.exports = {
	    _loadTileJSON: function(_) {
	        if (typeof _ === 'string') {
	            _ = format_url.tileJSON(_, this.options && this.options.accessToken);
	            request(_, L.bind(function(err, json) {
	                if (err) {
	                    util.log('could not load TileJSON at ' + _);
	                    this.fire('error', {error: err});
	                } else if (json) {
	                    this._setTileJSON(json);
	                    this.fire('ready');
	                }
	            }, this));
	        } else if (_ && typeof _ === 'object') {
	            this._setTileJSON(_);
	        }
	    }
	};


/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var util = __webpack_require__(10);
	var formatPattern = /\.((?:png|jpg)\d*)(?=$|\?)/;

	var TileLayer = L.TileLayer.extend({
	    includes: [__webpack_require__(26)],

	    options: {
	        sanitizer: __webpack_require__(19)
	    },

	    // http://mapbox.com/developers/api/#image_quality
	    formats: [
	        'png', 'jpg',
	        // PNG
	        'png32', 'png64', 'png128', 'png256',
	        // JPG
	        'jpg70', 'jpg80', 'jpg90'],

	    scalePrefix: '@2x.',

	    initialize: function(_, options) {
	        L.TileLayer.prototype.initialize.call(this, undefined, options);

	        this._tilejson = {};

	        if (options && options.format) {
	            util.strict_oneof(options.format, this.formats);
	        }

	        this._loadTileJSON(_);
	    },

	    setFormat: function(_) {
	        util.strict(_, 'string');
	        this.options.format = _;
	        this.redraw();
	        return this;
	    },

	    // disable the setUrl function, which is not available on mapbox tilelayers
	    setUrl: null,

	    _setTileJSON: function(json) {
	        util.strict(json, 'object');

	        this.options.format = this.options.format ||
	            json.tiles[0].match(formatPattern)[1];

	        L.extend(this.options, {
	            tiles: json.tiles,
	            attribution: this.options.sanitizer(json.attribution),
	            minZoom: json.minzoom || 0,
	            maxZoom: json.maxzoom || 18,
	            tms: json.scheme === 'tms',
	            bounds: json.bounds && util.lbounds(json.bounds)
	        });

	        this._tilejson = json;
	        this.redraw();
	        return this;
	    },

	    getTileJSON: function() {
	        return this._tilejson;
	    },

	    // this is an exception to mapbox.js naming rules because it's called
	    // by `L.map`
	    getTileUrl: function(tilePoint) {
	        var tiles = this.options.tiles,
	            index = Math.floor(Math.abs(tilePoint.x + tilePoint.y) % tiles.length),
	            url = tiles[index];

	        var templated = L.Util.template(url, tilePoint);
	        if (!templated) {
	            return templated;
	        } else {
	            return templated.replace(formatPattern,
	                (L.Browser.retina ? this.scalePrefix : '.') + this.options.format);
	        }
	    },

	    // TileJSON.TileLayers are added to the map immediately, so that they get
	    // the desired z-index, but do not update until the TileJSON has been loaded.
	    _update: function() {
	        if (this.options.tiles) {
	            L.TileLayer.prototype._update.call(this);
	        }
	    }
	});

	module.exports.TileLayer = TileLayer;

	module.exports.tileLayer = function(_, options) {
	    return new TileLayer(_, options);
	};


/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var InfoControl = L.Control.extend({
	    options: {
	        position: 'bottomright',
	        sanitizer: __webpack_require__(19)
	    },

	    initialize: function(options) {
	        L.setOptions(this, options);
	        this._info = {};
	        console.warn('infoControl has been deprecated and will be removed in mapbox.js v3.0.0. Use the default attribution control instead, which is now responsive.');
	    },

	    onAdd: function(map) {
	        this._container = L.DomUtil.create('div', 'mapbox-control-info mapbox-small');
	        this._content = L.DomUtil.create('div', 'map-info-container', this._container);

	        var link = L.DomUtil.create('a', 'mapbox-info-toggle mapbox-icon mapbox-icon-info', this._container);
	        link.href = '#';

	        L.DomEvent.addListener(link, 'click', this._showInfo, this);
	        L.DomEvent.disableClickPropagation(this._container);

	        for (var i in map._layers) {
	            if (map._layers[i].getAttribution) {
	                this.addInfo(map._layers[i].getAttribution());
	            }
	        }

	        map
	            .on('layeradd', this._onLayerAdd, this)
	            .on('layerremove', this._onLayerRemove, this);

	        this._update();
	        return this._container;
	    },

	    onRemove: function(map) {
	        map
	            .off('layeradd', this._onLayerAdd, this)
	            .off('layerremove', this._onLayerRemove, this);
	    },

	    addInfo: function(text) {
	        if (!text) return this;
	        if (!this._info[text]) this._info[text] = 0;
	        this._info[text] = true;
	        return this._update();
	    },

	    removeInfo: function (text) {
	        if (!text) return this;
	        if (this._info[text]) this._info[text] = false;
	        return this._update();
	    },

	    _showInfo: function(e) {
	        L.DomEvent.preventDefault(e);
	        if (this._active === true) return this._hidecontent();

	        L.DomUtil.addClass(this._container, 'active');
	        this._active = true;
	        this._update();
	    },

	    _hidecontent: function() {
	        this._content.innerHTML = '';
	        this._active = false;
	        L.DomUtil.removeClass(this._container, 'active');
	        return;
	    },

	    _update: function() {
	        if (!this._map) { return this; }
	        this._content.innerHTML = '';
	        var hide = 'none';
	        var info = [];

	        for (var i in this._info) {
	            if (this._info.hasOwnProperty(i) && this._info[i]) {
	                info.push(this.options.sanitizer(i));
	                hide = 'block';
	            }
	        }

	        this._content.innerHTML += info.join(' | ');

	        // If there are no results in _info then hide this.
	        this._container.style.display = hide;
	        return this;
	    },

	    _onLayerAdd: function(e) {
	        if (e.layer.getAttribution && e.layer.getAttribution()) {
	            this.addInfo(e.layer.getAttribution());
	        } else if ('on' in e.layer && e.layer.getAttribution) {
	            e.layer.on('ready', L.bind(function() {
	                this.addInfo(e.layer.getAttribution());
	            }, this));
	        }
	    },

	    _onLayerRemove: function (e) {
	        if (e.layer.getAttribution) {
	            this.removeInfo(e.layer.getAttribution());
	        }
	    }
	});

	module.exports.InfoControl = InfoControl;

	module.exports.infoControl = function(options) {
	    return new InfoControl(options);
	};


/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var tileLayer = __webpack_require__(27).tileLayer,
	    featureLayer = __webpack_require__(21).featureLayer,
	    gridLayer = __webpack_require__(30).gridLayer,
	    gridControl = __webpack_require__(17).gridControl,
	    infoControl = __webpack_require__(28).infoControl,
	    shareControl = __webpack_require__(25).shareControl,
	    legendControl = __webpack_require__(24).legendControl,
	    mapboxLogoControl = __webpack_require__(32).mapboxLogoControl,
	    feedback = __webpack_require__(14);

	function withAccessToken(options, accessToken) {
	    if (!accessToken || options.accessToken)
	        return options;
	    return L.extend({accessToken: accessToken}, options);
	}

	var LMap = L.Map.extend({
	    includes: [__webpack_require__(26)],

	    options: {
	        tileLayer: {},
	        featureLayer: {},
	        gridLayer: {},
	        legendControl: {},
	        gridControl: {},
	        infoControl: false,
	        shareControl: false,
	        sanitizer: __webpack_require__(19)
	    },

	    _tilejson: {},

	    initialize: function(element, _, options) {

	        L.Map.prototype.initialize.call(this, element,
	            L.extend({}, L.Map.prototype.options, options));

	        // Disable the default 'Leaflet' text
	        if (this.attributionControl) {
	            this.attributionControl.setPrefix('');

	            var compact = this.options.attributionControl.compact;
	            // Set a compact display if map container width is < 640 or
	            // compact is set to `true` in attributionControl options.
	            if (compact || (compact !== false && this._container.offsetWidth <= 640)) {
	                L.DomUtil.addClass(this.attributionControl._container, 'leaflet-compact-attribution');
	            }

	            if (compact === undefined) {
	                this.on('resize', function() {
	                    if (this._container.offsetWidth > 640) {
	                        L.DomUtil.removeClass(this.attributionControl._container, 'leaflet-compact-attribution');
	                    } else {
	                        L.DomUtil.addClass(this.attributionControl._container, 'leaflet-compact-attribution');
	                    }
	                });
	            }
	        }

	        if (this.options.tileLayer) {
	            this.tileLayer = tileLayer(undefined,
	                withAccessToken(this.options.tileLayer, this.options.accessToken));
	            this.addLayer(this.tileLayer);
	        }

	        if (this.options.featureLayer) {
	            this.featureLayer = featureLayer(undefined,
	                withAccessToken(this.options.featureLayer, this.options.accessToken));
	            this.addLayer(this.featureLayer);
	        }

	        if (this.options.gridLayer) {
	            this.gridLayer = gridLayer(undefined,
	                withAccessToken(this.options.gridLayer, this.options.accessToken));
	            this.addLayer(this.gridLayer);
	        }

	        if (this.options.gridLayer && this.options.gridControl) {
	            this.gridControl = gridControl(this.gridLayer, this.options.gridControl);
	            this.addControl(this.gridControl);
	        }

	        if (this.options.infoControl) {
	            this.infoControl = infoControl(this.options.infoControl);
	            this.addControl(this.infoControl);
	        }

	        if (this.options.legendControl) {
	            this.legendControl = legendControl(this.options.legendControl);
	            this.addControl(this.legendControl);
	        }

	        if (this.options.shareControl) {
	            this.shareControl = shareControl(undefined,
	                withAccessToken(this.options.shareControl, this.options.accessToken));
	            this.addControl(this.shareControl);
	        }

	        this._mapboxLogoControl = mapboxLogoControl(this.options.mapboxLogoControl);
	        this.addControl(this._mapboxLogoControl);

	        this._loadTileJSON(_);

	        this.on('layeradd', this._onLayerAdd, this)
	            .on('layerremove', this._onLayerRemove, this)
	            .on('moveend', this._updateMapFeedbackLink, this);

	        this.whenReady(function () {
	            feedback.on('change', this._updateMapFeedbackLink, this);
	        });

	        this.on('unload', function () {
	            feedback.off('change', this._updateMapFeedbackLink, this);
	        });
	    },

	    // use a javascript object of tilejson data to configure this layer
	    _setTileJSON: function(_) {
	        this._tilejson = _;
	        this._initialize(_);
	        return this;
	    },

	    getTileJSON: function() {
	        return this._tilejson;
	    },

	    _initialize: function(json) {
	        if (this.tileLayer) {
	            this.tileLayer._setTileJSON(json);
	            this._updateLayer(this.tileLayer);
	        }

	        if (this.featureLayer && !this.featureLayer.getGeoJSON() && json.data && json.data[0]) {
	            this.featureLayer.loadURL(json.data[0]);
	        }

	        if (this.gridLayer) {
	            this.gridLayer._setTileJSON(json);
	            this._updateLayer(this.gridLayer);
	        }

	        if (this.infoControl && json.attribution) {
	            this.infoControl.addInfo(this.options.sanitizer(json.attribution));
	            this._updateMapFeedbackLink();
	        }

	        if (this.legendControl && json.legend) {
	            this.legendControl.addLegend(json.legend);
	        }

	        if (this.shareControl) {
	            this.shareControl._setTileJSON(json);
	        }

	        this._mapboxLogoControl._setTileJSON(json);

	        if (!this._loaded && json.center) {
	            var zoom = this.getZoom() !== undefined ? this.getZoom() : json.center[2],
	                center = L.latLng(json.center[1], json.center[0]);

	            this.setView(center, zoom);
	        }
	    },

	    _updateMapFeedbackLink: function() {
	        if (!this._controlContainer.getElementsByClassName) return;
	        var link = this._controlContainer.getElementsByClassName('mapbox-improve-map');
	        if (link.length && this._loaded) {
	            var center = this.getCenter().wrap();
	            var tilejson = this._tilejson || {};
	            var id = tilejson.id || '';

	            var hash = '#' + id + '/' +
	                center.lng.toFixed(3) + '/' +
	                center.lat.toFixed(3) + '/' +
	                this.getZoom();

	            for (var key in feedback.data) {
	                hash += '/' + key + '=' + feedback.data[key];
	            }

	            for (var i = 0; i < link.length; i++) {
	                link[i].hash = hash;
	            }
	        }
	    },

	    _onLayerAdd: function(e) {
	        if ('on' in e.layer) {
	            e.layer.on('ready', this._onLayerReady, this);
	        }
	        window.setTimeout(L.bind(this._updateMapFeedbackLink, this), 0); // Update after attribution control resets the HTML.
	    },

	    _onLayerRemove: function(e) {
	        if ('on' in e.layer) {
	            e.layer.off('ready', this._onLayerReady, this);
	        }
	        window.setTimeout(L.bind(this._updateMapFeedbackLink, this), 0); // Update after attribution control resets the HTML.
	    },

	    _onLayerReady: function(e) {
	        this._updateLayer(e.target);
	    },

	    _updateLayer: function(layer) {
	        if (!layer.options) return;

	        if (this.infoControl && this._loaded) {
	            this.infoControl.addInfo(layer.options.infoControl);
	        }

	        if (this.attributionControl && this._loaded && layer.getAttribution) {
	            this.attributionControl.addAttribution(layer.getAttribution());
	        }

	        if (!(L.stamp(layer) in this._zoomBoundLayers) &&
	                (layer.options.maxZoom || layer.options.minZoom)) {
	            this._zoomBoundLayers[L.stamp(layer)] = layer;
	        }

	        this._updateMapFeedbackLink();
	        this._updateZoomLevels();
	    }
	});

	module.exports.Map = LMap;

	module.exports.map = function(element, _, options) {
	    return new LMap(element, _, options);
	};


/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var util = __webpack_require__(10),
	    request = __webpack_require__(15),
	    grid = __webpack_require__(31);

	// forked from danzel/L.UTFGrid
	var GridLayer = L.Class.extend({
	    includes: [L.Mixin.Events, __webpack_require__(26)],

	    options: {
	        template: function() { return ''; }
	    },

	    _mouseOn: null,
	    _tilejson: {},
	    _cache: {},

	    initialize: function(_, options) {
	        L.Util.setOptions(this, options);
	        this._loadTileJSON(_);
	    },

	    _setTileJSON: function(json) {
	        util.strict(json, 'object');

	        L.extend(this.options, {
	            grids: json.grids,
	            minZoom: json.minzoom,
	            maxZoom: json.maxzoom,
	            bounds: json.bounds && util.lbounds(json.bounds)
	        });

	        this._tilejson = json;
	        this._cache = {};
	        this._update();

	        return this;
	    },

	    getTileJSON: function() {
	        return this._tilejson;
	    },

	    active: function() {
	        return !!(this._map && this.options.grids && this.options.grids.length);
	    },

	    addTo: function (map) {
	        map.addLayer(this);
	        return this;
	    },

	    onAdd: function(map) {
	        this._map = map;
	        this._update();

	        this._map
	            .on('click', this._click, this)
	            .on('mousemove', this._move, this)
	            .on('moveend', this._update, this);
	    },

	    onRemove: function() {
	        this._map
	            .off('click', this._click, this)
	            .off('mousemove', this._move, this)
	            .off('moveend', this._update, this);
	    },

	    getData: function(latlng, callback) {
	        if (!this.active()) return;

	        var map = this._map,
	            point = map.project(latlng.wrap()),
	            tileSize = 256,
	            resolution = 4,
	            x = Math.floor(point.x / tileSize),
	            y = Math.floor(point.y / tileSize),
	            max = map.options.crs.scale(map.getZoom()) / tileSize;

	        x = (x + max) % max;
	        y = (y + max) % max;

	        this._getTile(map.getZoom(), x, y, function(grid) {
	            var gridX = Math.floor((point.x - (x * tileSize)) / resolution),
	                gridY = Math.floor((point.y - (y * tileSize)) / resolution);

	            callback(grid(gridX, gridY));
	        });

	        return this;
	    },

	    _click: function(e) {
	        this.getData(e.latlng, L.bind(function(data) {
	            this.fire('click', {
	                latLng: e.latlng,
	                data: data
	            });
	        }, this));
	    },

	    _move: function(e) {
	        this.getData(e.latlng, L.bind(function(data) {
	            if (data !== this._mouseOn) {
	                if (this._mouseOn) {
	                    this.fire('mouseout', {
	                        latLng: e.latlng,
	                        data: this._mouseOn
	                    });
	                }

	                this.fire('mouseover', {
	                    latLng: e.latlng,
	                    data: data
	                });

	                this._mouseOn = data;
	            } else {
	                this.fire('mousemove', {
	                    latLng: e.latlng,
	                    data: data
	                });
	            }
	        }, this));
	    },

	    _getTileURL: function(tilePoint) {
	        var urls = this.options.grids,
	            index = (tilePoint.x + tilePoint.y) % urls.length,
	            url = urls[index];

	        return L.Util.template(url, tilePoint);
	    },

	    // Load up all required json grid files
	    _update: function() {
	        if (!this.active()) return;

	        var bounds = this._map.getPixelBounds(),
	            z = this._map.getZoom(),
	            tileSize = 256;

	        if (z > this.options.maxZoom || z < this.options.minZoom) return;

	        var tileBounds = L.bounds(
	                bounds.min.divideBy(tileSize)._floor(),
	                bounds.max.divideBy(tileSize)._floor()),
	            max = this._map.options.crs.scale(z) / tileSize;

	        for (var x = tileBounds.min.x; x <= tileBounds.max.x; x++) {
	            for (var y = tileBounds.min.y; y <= tileBounds.max.y; y++) {
	                // x wrapped
	                this._getTile(z, ((x % max) + max) % max, ((y % max) + max) % max);
	            }
	        }
	    },

	    _getTile: function(z, x, y, callback) {
	        var key = z + '_' + x + '_' + y,
	            tilePoint = L.point(x, y);

	        tilePoint.z = z;

	        if (!this._tileShouldBeLoaded(tilePoint)) {
	            return;
	        }

	        if (key in this._cache) {
	            if (!callback) return;

	            if (typeof this._cache[key] === 'function') {
	                callback(this._cache[key]); // Already loaded
	            } else {
	                this._cache[key].push(callback); // Pending
	            }

	            return;
	        }

	        this._cache[key] = [];

	        if (callback) {
	            this._cache[key].push(callback);
	        }

	        request(this._getTileURL(tilePoint), L.bind(function(err, json) {
	            var callbacks = this._cache[key];
	            this._cache[key] = grid(json);
	            for (var i = 0; i < callbacks.length; ++i) {
	                callbacks[i](this._cache[key]);
	            }
	        }, this));
	    },

	    _tileShouldBeLoaded: function(tilePoint) {
	        if (tilePoint.z > this.options.maxZoom || tilePoint.z < this.options.minZoom) {
	            return false;
	        }

	        if (this.options.bounds) {
	            var tileSize = 256,
	                nwPoint = tilePoint.multiplyBy(tileSize),
	                sePoint = nwPoint.add(new L.Point(tileSize, tileSize)),
	                nw = this._map.unproject(nwPoint),
	                se = this._map.unproject(sePoint),
	                bounds = new L.LatLngBounds([nw, se]);

	            if (!this.options.bounds.intersects(bounds)) {
	                return false;
	            }
	        }

	        return true;
	    }
	});

	module.exports.GridLayer = GridLayer;

	module.exports.gridLayer = function(_, options) {
	    return new GridLayer(_, options);
	};


/***/ },
/* 31 */
/***/ function(module, exports) {

	'use strict';

	function utfDecode(c) {
	    if (c >= 93) c--;
	    if (c >= 35) c--;
	    return c - 32;
	}

	module.exports = function(data) {
	    return function(x, y) {
	        if (!data) return;
	        var idx = utfDecode(data.grid[y].charCodeAt(x)),
	            key = data.keys[idx];
	        return data.data[key];
	    };
	};


/***/ },
/* 32 */
/***/ function(module, exports) {

	'use strict';

	var MapboxLogoControl = L.Control.extend({

	    options: {
	        position: 'bottomleft'
	    },

	    initialize: function(options) {
	        L.setOptions(this, options);
	    },

	    onAdd: function() {
	        this._container = L.DomUtil.create('div', 'mapbox-logo');
	        return this._container;
	    },

	    _setTileJSON: function(json) {
	        // Check if account referenced by the accessToken
	        // is asscociated with the Mapbox Logo
	        // as determined by mapbox-maps.
	        if (json.mapbox_logo) {
	            L.DomUtil.addClass(this._container, 'mapbox-logo-true');
	        }
	    }
	});

	module.exports.MapboxLogoControl = MapboxLogoControl;

	module.exports.mapboxLogoControl = function(options) {
	    return new MapboxLogoControl(options);
	};


/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var util = __webpack_require__(10);
	var format_url = __webpack_require__(11);
	var request = __webpack_require__(15);

	var StyleLayer = L.TileLayer.extend({

	    options: {
	        sanitizer: __webpack_require__(19)
	    },

	    initialize: function(_, options) {
	        L.TileLayer.prototype.initialize.call(this, undefined, options);

	        this.options.tiles = this._formatTileURL(_);
	        this.options.tileSize = 512;
	        this.options.zoomOffset = -1;
	        this.options.tms = false;

	        this._getAttribution(_);
	    },

	    _getAttribution: function(_) {
	        var styleURL = format_url.style(_, this.options && this.options.accessToken);
	        request(styleURL, L.bind(function(err, style) {
	            if (err) {
	                util.log('could not load Mapbox style at ' + styleURL);
	                this.fire('error', {error: err});
	            }
	            var sources = [];
	            for (var id in style.sources) {
	                var source = style.sources[id].url.split('mapbox://')[1];
	                sources.push(source);
	            }
	            request(format_url.tileJSON(sources.join(), this.options.accessToken), L.bind(function(err, json) {
	                if (err) {
	                    util.log('could not load TileJSON at ' + _);
	                    this.fire('error', {error: err});
	                } else if (json) {
	                    util.strict(json, 'object');

	                    this.options.attribution = this.options.sanitizer(json.attribution);

	                    this._tilejson = json;
	                    this.fire('ready');
	                }
	            }, this));
	        }, this));
	    },

	    // disable the setUrl function, which is not available on mapbox tilelayers
	    setUrl: null,

	    _formatTileURL: function(style) {
	        var retina = L.Browser.retina ? '@2x' : '';
	        if (typeof style === 'string') {
	            if (style.indexOf('mapbox://styles/') === -1) {
	                util.log('Incorrectly formatted Mapbox style at ' + style);
	                this.fire('error');
	            }
	            var ownerIDStyle = style.split('mapbox://styles/')[1];
	            return format_url('/styles/v1/' + ownerIDStyle + '/tiles/{z}/{x}/{y}' + retina, this.options.accessToken);
	        } else if (typeof style === 'object') {
	            return format_url('/styles/v1/' + style.owner + '/' + style.id + '/tiles/{z}/{x}/{y}' + retina, this.options.accessToken);
	        }
	    },

	    // this is an exception to mapbox.js naming rules because it's called
	    // by `L.map`
	    getTileUrl: function(tilePoint) {
	        var templated = L.Util.template(this.options.tiles, tilePoint);
	        return templated;
	    }
	});

	module.exports.StyleLayer = StyleLayer;

	module.exports.styleLayer = function(_, options) {
	    return new StyleLayer(_, options);
	};


/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(35);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(39)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../css-loader/index.js!./style.css", function() {
				var newContent = require("!!./../../css-loader/index.js!./style.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(36)();
	// imports


	// module
	exports.push([module.id, "/* general typography */\n.leaflet-container {\n  background:#fff;\n  font:12px/20px 'Helvetica Neue', Arial, Helvetica, sans-serif;\n  color:#404040;\n  color:rgba(0,0,0,0.75);\n  outline:0;\n  overflow:hidden;\n  -ms-touch-action:none;\n  }\n\n.leaflet-container *,\n.leaflet-container *:after,\n.leaflet-container *:before {\n  -webkit-box-sizing:border-box;\n     -moz-box-sizing:border-box;\n          box-sizing:border-box;\n  }\n\n.leaflet-container h1,\n.leaflet-container h2,\n.leaflet-container h3,\n.leaflet-container h4,\n.leaflet-container h5,\n.leaflet-container h6,\n.leaflet-container p {\n  font-size:15px;\n  line-height:20px;\n  margin:0 0 10px;\n  }\n\n.leaflet-container .marker-description img {\n  margin-bottom: 10px;\n  }\n\n.leaflet-container a {\n  color:#3887BE;\n  font-weight:normal;\n  text-decoration:none;\n  }\n  .leaflet-container a:hover      { color:#63b6e5; }\n  .leaflet-container.dark a       { color:#63b6e5; }\n  .leaflet-container.dark a:hover { color:#8fcaec; }\n\n.leaflet-container.dark .mapbox-button,\n.leaflet-container .mapbox-button {\n  background-color:#3887be;\n  display:inline-block;\n  height:40px;\n  line-height:40px;\n  text-decoration:none;\n  color:#fff;\n  font-size:12px;\n  white-space:nowrap;\n  text-overflow:ellipsis;\n  }\n  .leaflet-container.dark .mapbox-button:hover,\n  .leaflet-container .mapbox-button:hover {\n    color:#fff;\n    background-color:#3bb2d0;\n    }\n\n/* Base Leaflet\n------------------------------------------------------- */\n.leaflet-map-pane,\n.leaflet-tile,\n.leaflet-marker-icon,\n.leaflet-marker-shadow,\n.leaflet-tile-pane,\n.leaflet-tile-container,\n.leaflet-overlay-pane,\n.leaflet-shadow-pane,\n.leaflet-marker-pane,\n.leaflet-popup-pane,\n.leaflet-overlay-pane svg,\n.leaflet-zoom-box,\n.leaflet-image-layer,\n.leaflet-layer {\n  position:absolute;\n  left:0;\n  top:0;\n  }\n\n.leaflet-tile,\n.leaflet-marker-icon,\n.leaflet-marker-shadow {\n  -webkit-user-drag:none;\n  -webkit-user-select:none;\n     -moz-user-select:none;\n          user-select:none;\n  }\n.leaflet-marker-icon,\n.leaflet-marker-shadow {\n  display: block;\n  }\n\n.leaflet-tile {\n  filter:inherit;\n  visibility:hidden;\n  }\n.leaflet-tile-loaded {\n  visibility:inherit;\n  }\n.leaflet-zoom-box {\n  width:0;\n  height:0;\n  }\n\n.leaflet-tile-pane    { z-index:2; }\n.leaflet-objects-pane { z-index:3; }\n.leaflet-overlay-pane { z-index:4; }\n.leaflet-shadow-pane  { z-index:5; }\n.leaflet-marker-pane  { z-index:6; }\n.leaflet-popup-pane   { z-index:7; }\n\n.leaflet-control {\n  position:relative;\n  z-index:7;\n  pointer-events:auto;\n  float:left;\n  clear:both;\n  }\n  .leaflet-right .leaflet-control   { float:right; }\n  .leaflet-top .leaflet-control     { margin-top:10px; }\n  .leaflet-bottom .leaflet-control  { margin-bottom:10px; }\n  .leaflet-left .leaflet-control    { margin-left:10px; }\n  .leaflet-right .leaflet-control   { margin-right:10px; }\n\n.leaflet-top,\n.leaflet-bottom {\n  position:absolute;\n  z-index:1000;\n  pointer-events:none;\n  }\n  .leaflet-top    { top:0; }\n  .leaflet-right  { right:0; }\n  .leaflet-bottom { bottom:0; }\n  .leaflet-left   { left:0; }\n\n/* zoom and fade animations */\n.leaflet-fade-anim .leaflet-tile,\n.leaflet-fade-anim .leaflet-popup {\n  opacity:0;\n  -webkit-transition:opacity 0.2s linear;\n     -moz-transition:opacity 0.2s linear;\n       -o-transition:opacity 0.2s linear;\n          transition:opacity 0.2s linear;\n  }\n  .leaflet-fade-anim .leaflet-tile-loaded,\n  .leaflet-fade-anim .leaflet-map-pane .leaflet-popup {\n    opacity:1;\n    }\n\n.leaflet-zoom-anim .leaflet-zoom-animated {\n  -webkit-transition:-webkit-transform 0.25s cubic-bezier(0,0,0.25,1);\n     -moz-transition:   -moz-transform 0.25s cubic-bezier(0,0,0.25,1);\n       -o-transition:     -o-transform 0.25s cubic-bezier(0,0,0.25,1);\n          transition:        transform 0.25s cubic-bezier(0,0,0.25,1);\n  }\n.leaflet-zoom-anim .leaflet-tile,\n.leaflet-pan-anim .leaflet-tile,\n.leaflet-touching .leaflet-zoom-animated {\n  -webkit-transition:none;\n     -moz-transition:none;\n       -o-transition:none;\n          transition:none;\n  }\n.leaflet-zoom-anim .leaflet-zoom-hide { visibility: hidden; }\n\n/* cursors */\n.leaflet-container {\n  cursor:-webkit-grab;\n  cursor:   -moz-grab;\n  }\n.leaflet-overlay-pane path,\n.leaflet-marker-icon,\n.leaflet-container.map-clickable,\n.leaflet-container.leaflet-clickable {\n  cursor:pointer;\n  }\n.leaflet-popup-pane,\n.leaflet-control {\n  cursor:auto;\n  }\n.leaflet-dragging,\n.leaflet-dragging .map-clickable,\n.leaflet-dragging .leaflet-clickable,\n.leaflet-dragging .leaflet-container {\n  cursor:move;\n  cursor:-webkit-grabbing;\n  cursor:   -moz-grabbing;\n  }\n\n.leaflet-zoom-box {\n  background:#fff;\n  border:2px dotted #202020;\n  opacity:0.5;\n  }\n\n/* general toolbar styles */\n.leaflet-control-layers,\n.leaflet-bar {\n  background-color:#fff;\n  border:1px solid #999;\n  border-color:rgba(0,0,0,0.4);\n  border-radius:3px;\n  box-shadow:none;\n  }\n.leaflet-bar a,\n.leaflet-bar a:hover {\n  color:#404040;\n  color:rgba(0,0,0,0.75);\n  border-bottom:1px solid #ddd;\n  border-bottom-color:rgba(0,0,0,0.10);\n  }\n  .leaflet-bar a:hover,\n  .leaflet-bar a:active {\n    background-color:#f8f8f8;\n    cursor:pointer;\n    }\n  .leaflet-bar a:hover:first-child {\n    border-radius:3px 3px 0 0;\n    }\n  .leaflet-bar a:hover:last-child {\n    border-bottom:none;\n    border-radius:0 0 3px 3px;\n    }\n  .leaflet-bar a:hover:only-of-type {\n    border-radius:3px;\n    }\n\n.leaflet-bar .leaflet-disabled {\n  cursor:default;\n  opacity:0.75;\n  }\n.leaflet-control-zoom-in,\n.leaflet-control-zoom-out {\n  display:block;\n  content:'';\n  text-indent:-999em;\n  }\n\n.leaflet-control-layers .leaflet-control-layers-list,\n.leaflet-control-layers-expanded .leaflet-control-layers-toggle {\n  display:none;\n  }\n  .leaflet-control-layers-expanded .leaflet-control-layers-list {\n    display:block;\n    position:relative;\n    }\n\n.leaflet-control-layers-expanded {\n  background:#fff;\n  padding:6px 10px 6px 6px;\n  color:#404040;\n  color:rgba(0,0,0,0.75);\n  }\n.leaflet-control-layers-selector {\n  margin-top:2px;\n  position:relative;\n  top:1px;\n  }\n.leaflet-control-layers label {\n  display: block;\n  }\n.leaflet-control-layers-separator {\n  height:0;\n  border-top:1px solid #ddd;\n  border-top-color:rgba(0,0,0,0.10);\n  margin:5px -10px 5px -6px;\n  }\n\n.leaflet-container .leaflet-control-attribution {\n  background-color:rgba(255,255,255,0.5);\n  margin:0;\n  box-shadow:none;\n  }\n  .leaflet-container .leaflet-control-attribution a,\n  .leaflet-container .map-info-container a {\n    color:#404040;\n    }\n    .leaflet-control-attribution a:hover,\n    .map-info-container a:hover {\n      color:inherit;\n      text-decoration:underline;\n      }\n\n.leaflet-control-attribution,\n.leaflet-control-scale-line {\n  padding:0 5px;\n  }\n  .leaflet-left .leaflet-control-scale    { margin-left:5px; }\n  .leaflet-bottom .leaflet-control-scale  { margin-bottom:5px; }\n\n/* Used for smaller map containers & triggered by container size */\n.leaflet-container .leaflet-control-attribution.leaflet-compact-attribution { margin:10px; }\n.leaflet-container .leaflet-control-attribution.leaflet-compact-attribution {\n  background:#fff;\n  border-radius:3px 13px 13px 3px;\n  padding:3px 31px 3px 3px;\n  visibility:hidden;\n  }\n  .leaflet-control-attribution.leaflet-compact-attribution:hover {\n    visibility:visible;\n    }\n\n.leaflet-control-attribution.leaflet-compact-attribution:after {\n  content:'';\n  background-color:#fff;\n  background-color:rgba(255,255,255,0.5);\n  background-position:0 -78px;\n  border-radius:50%;\n  position:absolute;\n  display:inline-block;\n  width:26px;\n  height:26px;\n  vertical-align:middle;\n  bottom:0;\n  z-index:1;\n  visibility:visible;\n  cursor:pointer;\n  }\n  .leaflet-control-attribution.leaflet-compact-attribution:hover:after { background-color:#fff; }\n\n.leaflet-right .leaflet-control-attribution.leaflet-compact-attribution:after { right:0; }\n.leaflet-left .leaflet-control-attribution.leaflet-compact-attribution:after { left:0; }\n\n.leaflet-control-scale-line {\n  background-color:rgba(255,255,255,0.5);\n  border:1px solid #999;\n  border-color:rgba(0,0,0,0.4);\n  border-top:none;\n  padding:2px 5px 1px;\n  white-space:nowrap;\n  overflow:hidden;\n  }\n  .leaflet-control-scale-line:not(:first-child) {\n    border-top:2px solid #ddd;\n    border-top-color:rgba(0,0,0,0.10);\n    border-bottom:none;\n    margin-top:-2px;\n    }\n  .leaflet-control-scale-line:not(:first-child):not(:last-child) {\n    border-bottom:2px solid #777;\n    }\n\n/* popup */\n.leaflet-popup {\n  position:absolute;\n  text-align:center;\n  pointer-events:none;\n  }\n.leaflet-popup-content-wrapper {\n  padding:1px;\n  text-align:left;\n  pointer-events:all;\n  }\n.leaflet-popup-content {\n  padding:10px 10px 15px;\n  margin:0;\n  line-height:inherit;\n  }\n  .leaflet-popup-close-button + .leaflet-popup-content-wrapper .leaflet-popup-content {\n    padding-top:15px;\n    }\n\n.leaflet-popup-tip-container {\n  width:20px;\n  height:20px;\n  margin:0 auto;\n  position:relative;\n  }\n.leaflet-popup-tip {\n  width:0;\n\theight:0;\n  margin:0;\n\tborder-left:10px solid transparent;\n\tborder-right:10px solid transparent;\n\tborder-top:10px solid #fff;\n  box-shadow:none;\n  }\n.leaflet-popup-close-button {\n  text-indent:-999em;\n  position:absolute;\n  top:0;right:0;\n  pointer-events:all;\n  }\n  .leaflet-popup-close-button:hover {\n    background-color:#f8f8f8;\n    }\n\n.leaflet-popup-scrolled {\n  overflow:auto;\n  border-bottom:1px solid #ddd;\n  border-top:1px solid #ddd;\n  }\n\n/* div icon */\n.leaflet-div-icon {\n  background:#fff;\n  border:1px solid #999;\n  border-color:rgba(0,0,0,0.4);\n  }\n.leaflet-editing-icon {\n  border-radius:3px;\n  }\n\n/* Leaflet + Mapbox\n------------------------------------------------------- */\n.leaflet-bar a,\n.mapbox-icon,\n.map-tooltip.closable .close,\n.leaflet-control-layers-toggle,\n.leaflet-popup-close-button,\n.mapbox-button-icon:before {\n  content:'';\n  display:inline-block;\n  width:26px;\n  height:26px;\n  vertical-align:middle;\n  background-repeat:no-repeat;\n  }\n.leaflet-bar a {\n  display:block;\n  }\n\n.leaflet-control-attribution:after,\n.leaflet-control-zoom-in,\n.leaflet-control-zoom-out,\n.leaflet-popup-close-button,\n.leaflet-control-layers-toggle,\n.leaflet-container.dark .map-tooltip .close,\n.map-tooltip .close,\n.mapbox-icon {\n  opacity: .75;\n  background-image:url(" + __webpack_require__(37) + ");\n  background-repeat:no-repeat;\n  background-size:26px 260px;\n  }\n  .leaflet-container.dark .leaflet-control-attribution:after,\n  .mapbox-button-icon:before,\n  .leaflet-container.dark .leaflet-control-zoom-in,\n  .leaflet-container.dark .leaflet-control-zoom-out,\n  .leaflet-container.dark .leaflet-control-layers-toggle,\n  .leaflet-container.dark .mapbox-icon {\n    opacity: 1;\n    background-image:url(" + __webpack_require__(38) + ");\n    background-size:26px 260px;\n    }\n  .leaflet-bar .leaflet-control-zoom-in                 { background-position:0 0; }\n  .leaflet-bar .leaflet-control-zoom-out                { background-position:0 -26px; }\n  .map-tooltip.closable .close,\n  .leaflet-popup-close-button {\n    background-position:-3px -55px;\n    width:20px;\n    height:20px;\n    border-radius:0 3px 0 0;\n    }\n  .mapbox-icon-info                                     { background-position:0 -78px; }\n  .leaflet-control-layers-toggle                        { background-position:0 -104px; }\n  .mapbox-icon.mapbox-icon-share:before, .mapbox-icon.mapbox-icon-share         { background-position:0 -130px; }\n  .mapbox-icon.mapbox-icon-geocoder:before, .mapbox-icon.mapbox-icon-geocoder   { background-position:0 -156px; }\n  .mapbox-icon-facebook:before, .mapbox-icon-facebook   { background-position:0 -182px; }\n  .mapbox-icon-twitter:before, .mapbox-icon-twitter     { background-position:0 -208px; }\n  .mapbox-icon-pinterest:before, .mapbox-icon-pinterest { background-position:0 -234px; }\n\n.leaflet-popup-content-wrapper,\n.map-legends,\n.map-tooltip {\n  background:#fff;\n  border-radius:3px;\n  box-shadow:0 1px 2px rgba(0,0,0,0.10);\n  }\n.map-legends,\n.map-tooltip {\n  max-width:300px;\n  }\n.map-legends .map-legend {\n  padding:10px;\n  }\n.map-tooltip {\n  z-index:999999;\n  padding:10px;\n  min-width:180px;\n  max-height:400px;\n  overflow:auto;\n  opacity:1;\n  -webkit-transition:opacity 150ms;\n     -moz-transition:opacity 150ms;\n       -o-transition:opacity 150ms;\n          transition:opacity 150ms;\n  }\n\n.map-tooltip .close {\n  text-indent:-999em;\n  overflow:hidden;\n  display:none;\n  }\n  .map-tooltip.closable .close {\n    position:absolute;\n    top:0;right:0;\n    border-radius:3px;\n    }\n    .map-tooltip.closable .close:active  {\n      background-color:#f8f8f8;\n      }\n\n.leaflet-control-interaction {\n  position:absolute;\n  top:10px;\n  right:10px;\n  width:300px;\n  }\n.leaflet-popup-content .marker-title {\n  font-weight:bold;\n  }\n.leaflet-control .mapbox-button {\n  background-color:#fff;\n  border:1px solid #ddd;\n  border-color:rgba(0,0,0,0.10);\n  padding:5px 10px;\n  border-radius:3px;\n  }\n\n/* Share modal\n------------------------------------------------------- */\n.mapbox-modal > div {\n  position:absolute;\n  top:0;\n  left:0;\n  width:100%;\n  height:100%;\n  z-index:-1;\n  overflow-y:auto;\n  }\n  .mapbox-modal.active > div {\n    z-index:99999;\n    transition:all .2s, z-index 0 0;\n    }\n\n.mapbox-modal .mapbox-modal-mask {\n  background:rgba(0,0,0,0.5);\n  opacity:0;\n  }\n  .mapbox-modal.active .mapbox-modal-mask { opacity:1; }\n\n.mapbox-modal .mapbox-modal-content {\n  -webkit-transform:translateY(-100%);\n     -moz-transform:translateY(-100%);\n      -ms-transform:translateY(-100%);\n          transform:translateY(-100%);\n  }\n  .mapbox-modal.active .mapbox-modal-content {\n    -webkit-transform:translateY(0);\n       -moz-transform:translateY(0);\n        -ms-transform:translateY(0);\n            transform:translateY(0);\n    }\n\n.mapbox-modal-body {\n  position:relative;\n  background:#fff;\n  padding:20px;\n  z-index:1000;\n  width:50%;\n  margin:20px 0 20px 25%;\n  }\n.mapbox-share-buttons {\n  margin:0 0 20px;\n  }\n.mapbox-share-buttons a {\n  width:33.3333%;\n  border-left:1px solid #fff;\n  text-align:center;\n  border-radius:0;\n  }\n  .mapbox-share-buttons a:last-child  { border-radius:0 3px 3px 0; }\n  .mapbox-share-buttons a:first-child { border:none; border-radius:3px 0 0 3px; }\n\n.mapbox-modal input {\n  width:100%;\n  height:40px;\n  padding:10px;\n  border:1px solid #ddd;\n  border-color:rgba(0,0,0,0.10);\n  color:rgba(0,0,0,0.5);\n  }\n\n/* Info Control\n------------------------------------------------------- */\n.leaflet-control.mapbox-control-info {\n  margin:5px 30px 10px 10px;\n  min-height:26px;\n  }\n  .leaflet-right .leaflet-control.mapbox-control-info {\n    margin:5px 10px 10px 30px;\n    }\n\n.mapbox-info-toggle {\n  background-color:#fff;\n  background-color:rgba(255,255,255,0.5);\n  border-radius:50%;\n  position:absolute;\n  bottom:0;left:0;\n  z-index:1;\n  }\n  .leaflet-right .mapbox-control-info .mapbox-info-toggle  { left:auto; right:0; }\n  .mapbox-info-toggle:hover { background-color:#fff; }\n\n.map-info-container {\n  background:#fff;\n  padding:3px 5px 3px 27px;\n  display:none;\n  position:relative;\n  bottom:0;left:0;\n  border-radius:13px 3px 3px 13px;\n  }\n  .leaflet-right .map-info-container {\n    left:auto;\n    right:0;\n    padding:3px 27px 3px 5px;\n    border-radius:3px 13px 13px 3px;\n    }\n\n.mapbox-control-info.active .map-info-container { display:inline-block; }\n.leaflet-container .mapbox-improve-map { font-weight:bold; }\n\n/* Geocoder\n------------------------------------------------------- */\n.leaflet-control-mapbox-geocoder {\n  position:relative;\n  }\n.leaflet-control-mapbox-geocoder.searching {\n  opacity:0.75;\n  }\n.leaflet-control-mapbox-geocoder .leaflet-control-mapbox-geocoder-wrap {\n  background:#fff;\n  position:absolute;\n  border:1px solid #999;\n  border-color:rgba(0,0,0,0.4);\n  overflow:hidden;\n  left:26px;\n  height:28px;\n  width:0;\n  top:-1px;\n  border-radius:0 3px 3px 0;\n  opacity:0;\n  -webkit-transition:opacity 100ms;\n     -moz-transition:opacity 100ms;\n       -o-transition:opacity 100ms;\n          transition:opacity 100ms;\n  }\n.leaflet-control-mapbox-geocoder.active .leaflet-control-mapbox-geocoder-wrap {\n  width:180px;\n  opacity:1;\n  }\n.leaflet-bar .leaflet-control-mapbox-geocoder-toggle,\n.leaflet-bar .leaflet-control-mapbox-geocoder-toggle:hover {\n  border-bottom:none;\n  }\n.leaflet-control-mapbox-geocoder-toggle {\n  border-radius:3px;\n  }\n.leaflet-control-mapbox-geocoder.active,\n.leaflet-control-mapbox-geocoder.active .leaflet-control-mapbox-geocoder-toggle {\n  border-top-right-radius:0;\n  border-bottom-right-radius:0;\n  }\n.leaflet-control-mapbox-geocoder .leaflet-control-mapbox-geocoder-form input {\n  background:transparent;\n  border:0;\n  width:180px;\n  padding:0 0 0 10px;\n  height:26px;\n  outline:none;\n  }\n.leaflet-control-mapbox-geocoder-results {\n  width:180px;\n  position:absolute;\n  left:26px;\n  top:25px;\n  border-radius:0 0 3px 3px;\n  }\n  .leaflet-control-mapbox-geocoder.active .leaflet-control-mapbox-geocoder-results {\n    background:#fff;\n    border:1px solid #999;\n    border-color:rgba(0,0,0,0.4);\n    }\n.leaflet-control-mapbox-geocoder-results a,\n.leaflet-control-mapbox-geocoder-results span {\n  padding:0 10px;\n  text-overflow:ellipsis;\n  white-space:nowrap;\n  display:block;\n  width:100%;\n  font-size:12px;\n  line-height:26px;\n  text-align:left;\n  overflow:hidden;\n  }\n  .leaflet-container.dark .leaflet-control .leaflet-control-mapbox-geocoder-results a:hover,\n  .leaflet-control-mapbox-geocoder-results a:hover {\n    background:#f8f8f8;\n    opacity:1;\n    }\n\n.leaflet-right .leaflet-control-mapbox-geocoder-wrap,\n.leaflet-right .leaflet-control-mapbox-geocoder-results {\n  left:auto;\n  right:26px;\n  }\n.leaflet-right .leaflet-control-mapbox-geocoder-wrap {\n  border-radius:3px 0 0 3px;\n  }\n.leaflet-right .leaflet-control-mapbox-geocoder.active,\n.leaflet-right .leaflet-control-mapbox-geocoder.active .leaflet-control-mapbox-geocoder-toggle {\n  border-radius:0 3px 3px 0;\n  }\n\n.leaflet-bottom .leaflet-control-mapbox-geocoder-results {\n  top:auto;\n  bottom:25px;\n  border-radius:3px 3px 0 0;\n  }\n\n/* Mapbox Logo\n------------------------------------------------------- */\n.mapbox-logo-true:before {\n  content:'';\n  display:inline-block;\n  width:61px;\n  height:19px;\n  vertical-align:middle;\n}\n.mapbox-logo-true {\n  background-repeat:no-repeat;\n  background-size:61px 19px;\n  background-image:url('data:image/svg+xml;charset=utf-8;base64,PHN2ZyB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOmNjPSJodHRwOi8vY3JlYXRpdmVjb21tb25zLm9yZy9ucyMiIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyIgeG1sbnM6c3ZnPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiIHdpZHRoPSI2NSIgaGVpZ2h0PSIyMCI+PGRlZnMvPjxtZXRhZGF0YT48cmRmOlJERj48Y2M6V29yayByZGY6YWJvdXQ9IiI+PGRjOmZvcm1hdD5pbWFnZS9zdmcreG1sPC9kYzpmb3JtYXQ+PGRjOnR5cGUgcmRmOnJlc291cmNlPSJodHRwOi8vcHVybC5vcmcvZGMvZGNtaXR5cGUvU3RpbGxJbWFnZSIvPjxkYzp0aXRsZS8+PC9jYzpXb3JrPjwvcmRmOlJERj48L21ldGFkYXRhPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yNjEuODQ4MywtOTguNTAzOTUpIj48ZyB0cmFuc2Zvcm09Im1hdHJpeCgwLjE3NDQxODM2LDAsMCwwLjE3NDQxODM2LDIyMC41MjI4MiwyOS4yMjkzNDIpIiBzdHlsZT0ib3BhY2l0eTowLjI1O2ZpbGw6I2ZmZmZmZjtzdHJva2U6IzAwMDAwMDtzdHJva2Utd2lkdGg6MTcuMjAwMDIzNjU7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO3N0cm9rZS1taXRlcmxpbWl0OjQ7c3Ryb2tlLW9wYWNpdHk6MTtzdHJva2UtZGFzaGFycmF5Om5vbmUiPjxwYXRoIGQ9Ik0gNS4yOCAxLjUgQyA0LjU0IDEuNTYgMy45IDIuMjUgMy45MSAzIGwgMCAxMS44OCBjIDAuMDIgMC43NyAwLjcyIDEuNDcgMS41IDEuNDcgbCAxLjc1IDAgYyAwLjc4IDAgMS40OCAtMC42OSAxLjUgLTEuNDcgbCAwIC00LjI4IDAuNzIgMS4xOSBjIDAuNTMgMC44NyAyLjAzIDAuODcgMi41NiAwIGwgMC43MiAtMS4xOSAwIDQuMjggYyAwLjAyIDAuNzYgMC43IDEuNDUgMS40NyAxLjQ3IGwgMS43NSAwIGMgMC43OCAwIDEuNDggLTAuNjkgMS41IC0xLjQ3IGwgMCAtMC4xNiBjIDEuMDIgMS4xMiAyLjQ2IDEuODEgNC4wOSAxLjgxIGwgNC4wOSAwIDAgMS40NyBjIC0wIDAuNzggMC42OSAxLjQ4IDEuNDcgMS41IGwgMS43NSAwIGMgMC43OSAtMCAxLjUgLTAuNzEgMS41IC0xLjUgbCAwLjAyIC0xLjQ3IGMgMS43MiAwIDMuMDggLTAuNjQgNC4xNCAtMS42OSBsIDAgMC4xOSBjIDAgMC4zOSAwLjE2IDAuNzkgMC40NCAxLjA2IDAuMjggMC4yOCAwLjY3IDAuNDQgMS4wNiAwLjQ0IGwgMy4zMSAwIGMgMi4wMyAwIDMuODUgLTEuMDYgNC45MSAtMi42OSAxLjA1IDEuNjEgMi44NCAyLjY5IDQuODggMi42OSAxLjAzIDAgMS45OCAtMC4yNyAyLjgxIC0wLjc1IDAuMjggMC4zNSAwLjczIDAuNTcgMS4xOSAwLjU2IGwgMi4xMiAwIGMgMC40OCAwLjAxIDAuOTcgLTAuMjMgMS4yNSAtMC42MiBsIDAuOTEgLTEuMjggMC45MSAxLjI4IGMgMC4yOCAwLjM5IDAuNzQgMC42MyAxLjIyIDAuNjIgbCAyLjE2IDAgQyA2Mi42NyAxNi4zMyA2My40MiAxNC44OSA2Mi44MSAxNCBMIDYwLjIyIDEwLjM4IDYyLjYyIDcgQyA2My4yNiA2LjExIDYyLjUgNC42MiA2MS40MSA0LjYyIGwgLTIuMTYgMCBDIDU4Ljc4IDQuNjIgNTguMzEgNC44NiA1OC4wMyA1LjI1IEwgNTcuMzEgNi4yOCA1Ni41NiA1LjI1IEMgNTYuMjkgNC44NiA1NS44MiA0LjYyIDU1LjM0IDQuNjIgbCAtMi4xNiAwIGMgLTAuNDkgLTAgLTAuOTcgMC4yNSAtMS4yNSAwLjY2IC0wLjg2IC0wLjUxIC0xLjg0IC0wLjgxIC0yLjkxIC0wLjgxIC0yLjAzIDAgLTMuODMgMS4wOCAtNC44OCAyLjY5IEMgNDMuMSA1LjUzIDQxLjI3IDQuNDcgMzkuMTkgNC40NyBMIDM5LjE5IDMgQyAzOS4xOSAyLjYxIDM5LjAzIDIuMjEgMzguNzUgMS45NCAzOC40NyAxLjY2IDM4LjA4IDEuNSAzNy42OSAxLjUgbCAtMS43NSAwIGMgLTAuNzEgMCAtMS41IDAuODMgLTEuNSAxLjUgbCAwIDMuMTYgQyAzMy4zOCA1LjEgMzEuOTYgNC40NyAzMC4zOCA0LjQ3IGwgLTMuMzQgMCBjIC0wLjc3IDAuMDIgLTEuNDcgMC43MiAtMS40NyAxLjUgbCAwIDAuMzEgYyAtMS4wMiAtMS4xMiAtMi40NiAtMS44MSAtNC4wOSAtMS44MSAtMS42MyAwIC0zLjA3IDAuNyAtNC4wOSAxLjgxIEwgMTcuMzggMyBjIC0wIC0wLjc5IC0wLjcxIC0xLjUgLTEuNSAtMS41IEwgMTQuNSAxLjUgQyAxMy41NSAxLjUgMTIuMjggMS44NyAxMS42NiAyLjk0IGwgLTEgMS42OSAtMSAtMS42OSBDIDkuMDMgMS44NyA3Ljc3IDEuNSA2LjgxIDEuNSBsIC0xLjQxIDAgQyA1LjM2IDEuNSA1LjMyIDEuNSA1LjI4IDEuNSB6IG0gMTYuMTkgNy43MiBjIDAuNTMgMCAwLjk0IDAuMzUgMC45NCAxLjI4IGwgMCAxLjI4IC0wLjk0IDAgYyAtMC41MiAwIC0wLjk0IC0wLjM4IC0wLjk0IC0xLjI4IC0wIC0wLjkgMC40MiAtMS4yOCAwLjk0IC0xLjI4IHogbSA4LjgxIDAgYyAwLjgzIDAgMS4xOCAwLjY4IDEuMTkgMS4yOCAwLjAxIDAuOTQgLTAuNjIgMS4yOCAtMS4xOSAxLjI4IHogbSA4LjcyIDAgYyAwLjcyIDAgMS4zNyAwLjYgMS4zNyAxLjI4IDAgMC43NyAtMC41MSAxLjI4IC0xLjM3IDEuMjggeiBtIDEwLjAzIDAgYyAwLjU4IDAgMS4wOSAwLjUgMS4wOSAxLjI4IDAgMC43OCAtMC41MSAxLjI4IC0xLjA5IDEuMjggLTAuNTggMCAtMS4xMiAtMC41IC0xLjEyIC0xLjI4IDAgLTAuNzggMC41NCAtMS4yOCAxLjEyIC0xLjI4IHoiIHRyYW5zZm9ybT0ibWF0cml4KDUuNzMzMzQxNCwwLDAsNS43MzMzNDE0LDIzNi45MzMwOCwzOTcuMTc0OTgpIiBzdHlsZT0iZm9udC1zaXplOm1lZGl1bTtmb250LXN0eWxlOm5vcm1hbDtmb250LXZhcmlhbnQ6bm9ybWFsO2ZvbnQtd2VpZ2h0Om5vcm1hbDtmb250LXN0cmV0Y2g6bm9ybWFsO3RleHQtaW5kZW50OjA7dGV4dC1hbGlnbjpzdGFydDt0ZXh0LWRlY29yYXRpb246bm9uZTtsaW5lLWhlaWdodDpub3JtYWw7bGV0dGVyLXNwYWNpbmc6bm9ybWFsO3dvcmQtc3BhY2luZzpub3JtYWw7dGV4dC10cmFuc2Zvcm06bm9uZTtkaXJlY3Rpb246bHRyO2Jsb2NrLXByb2dyZXNzaW9uOnRiO3dyaXRpbmctbW9kZTpsci10Yjt0ZXh0LWFuY2hvcjpzdGFydDtiYXNlbGluZS1zaGlmdDpiYXNlbGluZTtjb2xvcjojMDAwMDAwO2ZpbGw6IzAwMDAwMDtmaWxsLW9wYWNpdHk6MTtmaWxsLXJ1bGU6bm9uemVybztzdHJva2U6bm9uZTtzdHJva2Utd2lkdGg6MTcuMjAwMDIzNjU7bWFya2VyOm5vbmU7dmlzaWJpbGl0eTp2aXNpYmxlO2Rpc3BsYXk6aW5saW5lO292ZXJmbG93OnZpc2libGU7ZW5hYmxlLWJhY2tncm91bmQ6YWNjdW11bGF0ZTtmb250LWZhbWlseTpTYW5zOy1pbmtzY2FwZS1mb250LXNwZWNpZmljYXRpb246U2FucyIvPjwvZz48ZyB0cmFuc2Zvcm09Im1hdHJpeCgwLjE3NDQxODM2LDAsMCwwLjE3NDQxODM2LDIyMC41MjI4MiwyOS4yMjkzNDIpIiBzdHlsZT0iZmlsbDojZmZmZmZmIj48cGF0aCBkPSJtIDUuNDEgMyAwIDEyIDEuNzUgMCAwIC05LjkxIDMuNSA1Ljk0IDMuNDcgLTUuOTQgMCA5LjkxIDEuNzUgMCAwIC0xMiBMIDE0LjUgMyBDIDEzLjggMyAxMy4yNSAzLjE2IDEyLjk0IDMuNjkgTCAxMC42NiA3LjU5IDguMzggMy42OSBDIDguMDcgMy4xNiA3LjUxIDMgNi44MSAzIHogTSAzNiAzIGwgMCAxMi4wMyAzLjI1IDAgYyAyLjQ0IDAgNC4zOCAtMS45MSA0LjM4IC00LjUzIDAgLTIuNjIgLTEuOTMgLTQuNDcgLTQuMzggLTQuNDcgQyAzOC43IDYuMDMgMzguMzIgNiAzNy43NSA2IGwgMCAtMyB6IE0gMjEuNDcgNS45NyBjIC0yLjQ0IDAgLTQuMTkgMS45MSAtNC4xOSA0LjUzIDAgMi42MiAxLjc1IDQuNTMgNC4xOSA0LjUzIGwgNC4xOSAwIDAgLTQuNTMgYyAwIC0yLjYyIC0xLjc1IC00LjUzIC00LjE5IC00LjUzIHogbSAyNy41NiAwIGMgLTIuNDEgMCAtNC4zOCAyLjAzIC00LjM4IDQuNTMgMCAyLjUgMS45NyA0LjUzIDQuMzggNC41MyAyLjQxIDAgNC4zNCAtMi4wMyA0LjM0IC00LjUzIDAgLTIuNSAtMS45NCAtNC41MyAtNC4zNCAtNC41MyB6IG0gLTIyIDAuMDMgMCAxMiAxLjc1IDAgMCAtMi45NyBjIDAuNTcgMCAxLjA0IC0wIDEuNTkgMCAyLjQ0IDAgNC4zNCAtMS45MSA0LjM0IC00LjUzIDAgLTIuNjIgLTEuOSAtNC41IC00LjM0IC00LjUgeiBtIDI2LjE2IDAgMy4wMyA0LjM4IC0zLjE5IDQuNjIgMi4xMiAwIEwgNTcuMzEgMTEuOTEgNTkuNDQgMTUgNjEuNTkgMTUgNTguMzggMTAuMzggNjEuNDEgNiA1OS4yNSA2IDU3LjMxIDguODEgNTUuMzQgNiB6IE0gMjEuNDcgNy43MiBjIDEuNCAwIDIuNDQgMS4xOSAyLjQ0IDIuNzggbCAwIDIuNzggLTIuNDQgMCBjIC0xLjQgMCAtMi40NCAtMS4yMSAtMi40NCAtMi43OCAtMCAtMS41NyAxLjA0IC0yLjc4IDIuNDQgLTIuNzggeiBtIDI3LjU2IDAgYyAxLjQ0IDAgMi41OSAxLjI0IDIuNTkgMi43OCAwIDEuNTQgLTEuMTUgMi43OCAtMi41OSAyLjc4IC0xLjQ0IDAgLTIuNjIgLTEuMjQgLTIuNjIgLTIuNzggMCAtMS41NCAxLjE4IC0yLjc4IDIuNjIgLTIuNzggeiBtIC0yMC4yNSAwLjAzIDEuNTkgMCBjIDEuNTkgMCAyLjU5IDEuMjggMi41OSAyLjc1IDAgMS40NyAtMS4xMyAyLjc4IC0yLjU5IDIuNzggbCAtMS41OSAwIHogbSA4Ljk3IDAgMS41IDAgYyAxLjQ3IDAgMi42MiAxLjI4IDIuNjIgMi43NSAwIDEuNDcgLTEuMDQgMi43OCAtMi42MiAyLjc4IGwgLTEuNSAwIHoiIHRyYW5zZm9ybT0ibWF0cml4KDUuNzMzMzQxNCwwLDAsNS43MzMzNDE0LDIzNi45MzMwOCwzOTcuMTc0OTgpIiBzdHlsZT0iZmlsbDojZmZmZmZmO2ZpbGwtb3BhY2l0eToxO2ZpbGwtcnVsZTpub256ZXJvO3N0cm9rZTpub25lIi8+PC9nPjwvZz48L3N2Zz4=');\n}\n\n/* Dark Theme\n------------------------------------------------------- */\n.leaflet-container.dark .leaflet-bar {\n  background-color:#404040;\n  border-color:#202020;\n  border-color:rgba(0,0,0,0.75);\n  }\n  .leaflet-container.dark .leaflet-bar a {\n    color:#404040;\n    border-color:rgba(0,0,0,0.5);\n    }\n  .leaflet-container.dark .leaflet-bar a:active,\n  .leaflet-container.dark .leaflet-bar a:hover {\n    background-color:#505050;\n    }\n\n.leaflet-container.dark .leaflet-control-attribution:after,\n.leaflet-container.dark .mapbox-info-toggle,\n.leaflet-container.dark .map-info-container,\n.leaflet-container.dark .leaflet-control-attribution {\n  background-color:rgba(0,0,0,0.5);\n  color:#f8f8f8;\n  }\n  .leaflet-container.dark .leaflet-control-attribution a,\n  .leaflet-container.dark .leaflet-control-attribution a:hover,\n  .leaflet-container.dark .map-info-container a,\n  .leaflet-container.dark .map-info-container a:hover {\n    color:#fff;\n    }\n\n.leaflet-container.dark .leaflet-control-attribution:hover:after {\n  background-color:#000;\n  }\n.leaflet-container.dark .leaflet-control-layers-list span {\n  color:#f8f8f8;\n  }\n.leaflet-container.dark .leaflet-control-layers-separator {\n  border-top-color:rgba(255,255,255,0.10);\n  }\n.leaflet-container.dark .leaflet-bar a.leaflet-disabled,\n.leaflet-container.dark .leaflet-control .mapbox-button.disabled {\n  background-color:#252525;\n  color:#404040;\n  }\n.leaflet-container.dark .leaflet-control-mapbox-geocoder > div {\n  border-color:#202020;\n  border-color:rgba(0,0,0,0.75);\n  }\n  .leaflet-container.dark .leaflet-control .leaflet-control-mapbox-geocoder-results a {\n    border-color:#ddd #202020;\n    border-color:rgba(0,0,0,0.10) rgba(0,0,0,0.75);\n    }\n  .leaflet-container.dark .leaflet-control .leaflet-control-mapbox-geocoder-results span {\n    border-color:#202020;\n    border-color:rgba(0,0,0,0.75);\n    }\n\n/* Larger Screens\n------------------------------------------------------- */\n@media only screen and (max-width:800px) {\n.mapbox-modal-body {\n  width:83.3333%;\n  margin-left:8.3333%;\n  }\n}\n\n/* Smaller Screens\n------------------------------------------------------- */\n@media only screen and (max-width:640px) {\n.mapbox-modal-body {\n  width:100%;\n  height:100%;\n  margin:0;\n  }\n}\n\n/* Print\n------------------------------------------------------- */\n@media print { .mapbox-improve-map { display:none; } }\n\n/* Browser Fixes\n------------------------------------------------------- */\n/* VML support for IE8 */\n.leaflet-vml-shape { width:1px; height:1px; }\n.lvml { behavior:url(#default#VML); display:inline-block; position:absolute; }\n/* Map is broken in FF if you have max-width: 100% on tiles */\n.leaflet-container img.leaflet-tile { max-width:none !important; }\n/* Markers are broken in FF/IE if you have max-width: 100% on marker images */\n.leaflet-container img.leaflet-marker-icon { max-width:none; }\n/* Stupid Android 2 doesn't understand \"max-width: none\" properly */\n.leaflet-container img.leaflet-image-layer { max-width:15000px !important; }\n/* workaround for https://bugzilla.mozilla.org/show_bug.cgi?id=888319 */\n.leaflet-overlay-pane svg { -moz-user-select:none; }\n/* Older IEs don't support the translateY property for display animation */\n.leaflet-oldie .mapbox-modal .mapbox-modal-content        { display:none; }\n.leaflet-oldie .mapbox-modal.active .mapbox-modal-content { display:block; }\n.map-tooltip { width:280px\\8; /* < IE9 */ }\n\n/* < IE8 */\n.leaflet-oldie .leaflet-control-zoom-in,\n.leaflet-oldie .leaflet-control-zoom-out,\n.leaflet-oldie .leaflet-popup-close-button,\n.leaflet-oldie .leaflet-control-layers-toggle,\n.leaflet-oldie .leaflet-container.dark .map-tooltip .close,\n.leaflet-oldie .map-tooltip .close,\n.leaflet-oldie .mapbox-icon {\n  background-image:url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAEECAYAAAA24SSRAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAN1wAADdcBQiibeAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAXnSURBVHic7ZxfiFVFGMB/33pRUQsKto002DY3McJ6yBYkESQxpYTypaB66KEXYRWLYOlhr9RTRGWRUkk9RyEU+Y9ClECJVTKlPybWBilqkYuWrqBOD/NdPV7PmTPn3NPtat/AcO6ZP9/vfN/Mmfl2Zs6Kc452hK62UAxkIANdEURkVERGC9crOjKIiANwzkmRep1lOjWXa2ijaU7jaGWgKsL110a1EnV+LQMqbLqyobO6t4EMZCADGchABrqmQUlPNSWOVgaqIpi7ZSADGchABjKQga49kIjURaQem14apGE4KVR/D0fXds5FRaAOOL1e+h1dP7ZgE6wQxDnXvs7QWaZLE1wUVmRNdY1zrp6wRF0kfqHYnHwDGchABjJQIETNRyIyFVgBzAPmavIIsAt4xzn3d66QiNl1PnCYy05JczwMzG9pKlfIhQCkES/kwUKQqRma9GpM02xqGXdrBdCXZm2NzaFP66SGUGeYl5E+WqJO0HRHSG+PXtJN54AjVbhbjQcbBSjiakH4hR0p+hChOiHQrhKg7Drt6t7//Qtb9RAU5XtXMaiak28gAxnIQO0Gicg0EXlMRDaIyFGNGzRtWhQpMA/1A6uAL4BzZM9H57TMKqC/8HyUPFhZJLiMI4sh0/UDK4FtwHig3LiWWal1UkPsDDsFWAgsBZZo8hZgM7DdOXcmV0igjQ4Ba4HFwORAuclaZi1wqNU2OgNsVw22aNoS1XAhMCXx4OkubOBJZwKDwFbgLNm97qyWGQRmtuoFWRsV0ujabCPzVA1kIAMZqBNAIjIgImPNRxUzK+SsmtRJn4Pqmj8AjCXzsmTlaTSck/8zcDRX/QiNMp8S6Ab2a5nvG5plyioDaoLs1/sBYKwyUBokkTdQJeiVZgi6UR+UVQI0QWHdoXKFvKDYz7RiynXctk7LPlmeRmsKyAqWNQfSQAYykIGuS5CI1ERkSET2ishpvQ6JSLE93ByfoQbsRHeNgfe4vOO8E6iF6hdxToZU6OqGUIWv1vShqkB7VYNaU3pN0/fGgvLa6C5gk3PufJO5zwObgDuraqM8jbZWpdEnwG3AYKOX6XVQ07+sSqNQr3P4QxS9LXeGBGxIzTiGXwR8QSHRsCj7ZjxAbxFYaVAKbMe/BkrAduRpZJ6qgQxkoP8DKDRY1sk/s5W6YFhoUG3nFnZeOIJfxLgXWB7zBFmmyzPT44my9zXSC098OZCTwCQttzOZVzVoX1a5LHmdtYyWDM29yjknItKF3xSelFWvKo1mhCClQLo1sC95T8T/ebr+xrqOABVZT82tY56qgQxkIAN1CkhEulsGiUi3iCzKyJsjIpuBYyLyo4isFpHXReTuTFLAr1sOnAeeT8nbzNW+3rfAM2UcyAcSQj4FngR68Ot0F1NA24CuMqBu4PMUgYdS0hzwYqlFJ+AeNV3s30aLSoEUtjEScoHE3nkZ0Ay1fR7o3ZCcGNAEYHcO5A/g5pZACpsMPEf6UexTwCN5MvI6w2zgaeBt4HQK5BsC57ubY+jPll/wHzn1Ayc07QD+u6MR4GPn3LlA/SuCOZAGMpCBDFRhiF50EpFl+PP49wOzgIPAHmCLc+6zXAERE18P+b7DRqAnJCfvfF0P/mTgLZr0l97vB27CL3HO0rwTwBzn3PHCGiU0uQisA6bhzT0T/T4ZeAr4s6FZmal8WcI0LwETgdfwHzY1XKz3teyjibLLioLWa8UDeG/oZbxD+QHwdULwg1r+K71fXxQ0ohXfAgS/Mvyh5i1MgNZp2qt6P5ImL/QezdbrSeAG4EbVJJkH8LteJ+p1FikhBPpNr3Odc6fUNHdo2oJEucbX8Y2zDQeLgr7T62IReRb4AX9mGGC6Xo8Bu0VkOvCQpu1JlRZoo6Vc/WL2ad4C4A28CWvAR5TtdU0dwqH/ewHvHi8HbgUexh+euDRCFH6PVOh0/FKzw3um4M8zpA1DxwkMQzFjXR9+d/9N1WI8BZI71kU56Aq8HXgC+Ak/5o3gX+rUNmmO5nsbqP2gfwCyvJzPNoKXiAAAAABJRU5ErkJggg==');\n}\n.leaflet-oldie .mapbox-button-icon:before,\n.leaflet-oldie .leaflet-container.dark .leaflet-control-zoom-in,\n.leaflet-oldie .leaflet-container.dark .leaflet-control-zoom-out,\n.leaflet-oldie .leaflet-container.dark .leaflet-control-layers-toggle,\n.leaflet-oldie .leaflet-container.dark .mapbox-icon {\n  background-image:url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAEECAYAAAA24SSRAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAN1wAADdcBQiibeAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAXYSURBVHic7ZxfiFVFHMc/a4uKWtDDtqJGZprYgwX5ByTdkkLbSgghCiKih14EBYtg6aEr9RRREKRUUs9hGEVtChKaYMkq2VqWmnUX2tKiNDNZY/Xbw/wue7x7zsw559626zY/GM6df7/P+c3MPfO7M3NumyTGQiaMCSWCIiiC6qVqoZC0lXgy1Cq0FanUck1XxVmSNL8WrzYT1LCMvz5qL1FnoAyoTNOVkpYb3hEUQREUQREUQRF0RYOqjHim9aHaTFDDEt2tCIqgCIqgCIqgCLoiQRULedNLgwCeq1NasbR8IilvqMhJpe5zrvpFQElYIYiksRsMLdd0aYoLwYqsqW5i9KjLLdHJj6AIiqAIiiCP5J2PpgLrgGXAYkvrA/YBrwF/BTXkmB2XSzqhbDlhZRqaypdLuuiB1ORiCOaDTM2wZLaFNMumZunzDYZ1wJy01ubyPfOazLE6qeIbDMsy0qsl6ngtWpyRfqOFInVKbWFXS9TxWtRXQl9mHR9oXwlQdp2xGt4t8YVt6iMor+/d8EM1OvkRFEERFEH/AWga8CCwFfjJwlZLm5ZHge/pPQ+4z8IKYGJGub+BT4GPLBwvCio7f6QeWfQ13TxgA7ATGPKUG7IyG6xOOj3nxDcFWAl0A/da2sdAL/AJcD6kwAc6bop6gT1kWzUZ6LKb6CbDqrx9dB535704S8BZ1o2zdEpSZ1HQ3MRddtmdp8kQzuKa9d8VBSUl9lEh0Pjro6ZKy00TERRBERRBLQZaCpxh9FHFUqBKiiJZ+n5gFfBHnrsKgUKb7t/j/PCwBNZwapKW1yGp3/KPSDrjKVsalIT0W3ypwZoGSoPU8pY2E/RCCqSiwJ55GdBVBusIlCu0Xpf3Na1guZbb1mnYJwtZtKmALm/Z6EBGUARFUASNV1A70AMcBP60aw9F93ADPkO7pD3mDwxKesOusvT2QP3czkmPKd2YUNpucVl+LlBo4jsITAduAIbrmnMAOAncnqflQn10M26JebgufdjSb8oDyQM6hlv3ru/4dkv/vFmgd4EZwPoErN3iM4BdeUGNjDpJqsrtmzc86mqwHkkH5X4t7JD0tEFyw3INzYwwuwisEVA9bPe/CarBdocsip5qBEVQBP3fQRWyX4jOCpUsZS2xhR2SQdwixq3A2lDhMkcTa7Ie2G6fwzfsmax8clrSJCu3py4vVV/ZphsALtjnFXkqtNwyWlLqR1Ub7obPA5OyKjXLolk+SFmQgEN18eD/PLXEI2j8gYqspwbrRE81giIogiKohUAdzQB1APdk5C3Ends6CXwLbAReBm7J1OZxINdKGpb0VEpeb4pT+aWkx8os0SxJKHlf0iOSOiXNkHQpBbRT0oQyoA5JH6YoPJ6SJknPeHR5+6gTWJ2SPjej/BceXV7QV8AHvsoJucTlvt5o8ZkraZa1fUheD+gJfo9+Bq4JlPkNt4Xgl9CdSJos6UlJF1IsOSvp/hw6vL8mFgCLgCXA44w+730IeIiM89314gP9ACzHHXD9xdIO49476gO2MfJjLCjRgYygCIqgCGqiFFl0WoM7j78ImA8cBQ7gzuaHp/wck1anpO2BqXy7lSu9I9YJ9APXWfycxfuBa4HbzDpwc9ZC4FQZi2qWXJK0WdI0ue3SuRp5P/lRSb8nLCvsQK5JNM2zkiZKeknSkKVdlPSmlX0gUXZNUdAWq3hY7tzj83K++FuS9icU32Hl91p8S1FQn1V8VVKb3Mrw25a3MgHabGkvWrwvTZ/ve7TArqeBq3H+3f66PIBf7VrzkuaTIj7Qj3ZdDJwF9jLy5wJdiXK1t+NrZxuOFgV9bddVwBPAN8ARS5tp15PAZxa/29IOpGrz9FG3Rsscy+uS9IqkBXLD/Z1GRl1yQEjuHANy7vFaSdMlrZa0K1Gm1PcISTMlDZiSbZa2I8VSSTolz2Mo9PQeBO7CvTE1iDtRc2dKuffwPX4CfVQfrpf0sKRjks5Zs27J6pP6EH3vCBp70D8db2VXFPfIagAAAABJRU5ErkJggg==');\n}\n\n.leaflet-oldie .mapbox-logo-true {\n  background-image: none;\n}\n", ""]);

	// exports


/***/ },
/* 36 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 37 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAIICAMAAAAWgT0mAAAAYFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD6T+iNAAAAIHRSTlMAt/+ANr7Y9FEgxEDr+0cCF12ufA2Z4yhyCEyMZ1Wgzz2snYUAAASxSURBVHgB7dyH0qLMFoXh5aIFRVoQAUUE7v8uj5R+dMmRZmuN9U/YT4WJL2EDPRGhlPqbrMgV3sWbfzxa0aF0hpz4ViQ/PL24gkdDKaWUUr81pb+H/d0ppZRSSgXB5OuShgwmXxdFDKZflVeukVeukVeyZlLJG1e55quRO7zvDkI+cvnFld9G37hhpY/G55RSSikTrMMoCteBgdQm5CjcQGIb80m8xaJdwolkt9hYcsouVNuELyRb+Ljz2QN7d17euXGEG458MwznohCzDPl8eI7BnICzAsxZc9Zackru8JZOKuLcIBj92iicj0LRIHAjGkQwiUQjN/OR+bW3kfyG/fzRkD+E8sf9CwuLbAmTL5ZfWJbllFJKpSnelB3yJMkPGcTMMbYc0MZHg2XFpqz4pCo3BTxO57XlC3Z9PmEOPX5ttD2vIr4Qrc5beNSX/x/EpYbjn8dkAsLJe2fthM2+xgv1vgl904tW1+1kOtdVJBh52Ozqxy52TSi/TlF+3W6veaTXSa/Tf3adfh9KKaWKmKOPKngEHAVPlaRx1XLEaYSDOHJNa2URHNfIItfYQyyNXNOiiKWRazBUwsg1QyWLXDMoRNHeNUEAxxsV8diQgSwaqnsD3kgjFHu8ETl/TTT1nSjgSwGE1aT5+ymllDLHvKryo4Fc0fGhKyBkKo4qA5FiaMpLll3KoSog0ZHVDhjsKrKDgCE5NPeKpMGyI1liVJJHLMvJC0YXMseyiswwysjqkyj55PD6TwZRfmvk04sbfnAbkcHbN6yr5I9G6CrZQ5j0pUHgKrk/pZJHrpI3rnpqlFJKBZwRyBtRRY9vR/1xs9uU70XnFDftW1EHvB3Z4oMoxM2hf28QOW5CiiN3SvyLIjioPohqfhCdPokuf8HINQrmI/ES6yJfo5RS6vdWmPaUYkFdPH2rsSSTA+pDV2PWJS7gmp53ccQr5jV0FRqOmrbFrDVZ7XFXW/6wdl379nTTZRgYOr4GFw7sapMCLZ0TPOqYd1Gfd3QyeLQm5As2hceKEV+o4HPkSzl8ioqvXOFlkheNzeC37SJOdVgQxAkn7AkLjOVUiUXttOprLDvlER1GJ4i0CUeJgUC6i+lUy/sxQddHdGxTSM6ntBxF3Qky2bXJ+ygJV+WlhlJKqd9Dapr7e6mNSSFTnxOOknMNgU3FJ9Xmo78qDrCg4wudaD+2L68mM9emF+xrwwF7gx/XaOlF6rrijT2mALJ9a2oA2zVvqhpzzhxchh3c86b4+a3ZGTPS5HHW2YoPYfF4tzpJfW+hVwWQk4zc4Drfe+jN4zhasjLYJxxkwIE3je/N+h3QkwcAJR/fPvnerQ9J2gJpRJv9XLMhT63nlfeIZAWcyHjcMfdA4fu8gOR+Dtl9s3XEwQkwvih+bLmiHSbNwfC1lp7D6x632YEsgOM48qNvEEfeJMPxhQDyn1NKK9/I9xz0pwvLIfrZ0ZW+i4ueA2uHOcP0tF16v4s9txEOfNhiYDIAxYreGxZp5f4Y0xQYbEMuPBrYWA5yoLDh2ZhzHgk+zeD8cyybd5aW5nGTlpKFxVWWPCGtJPtxTM8CB9li6aRnIBQvy05x7OLE/QKg1G/ifyZmTPT8xDL0AAAAAElFTkSuQmCC"

/***/ },
/* 38 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAIICAMAAAAWgT0mAAAAYFBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////98JRy6AAAAIHRSTlMAt/+ANr7Y9FEgxEDr+0cCF12ufA2Z4yhyCEyMZ1Wgzz2snYUAAASxSURBVHgB7dyH0qLMFoXh5aIFRVoQAUUE7v8uj5R+dMmRZmuN9U/YT4WJL2EDPRGhlPqbrMgV3sWbfzxa0aF0hpz4ViQ/PL24gkdDKaWUUr81pb+H/d0ppZRSSgXB5OuShgwmXxdFDKZflVeukVeukVeyZlLJG1e55quRO7zvDkI+cvnFld9G37hhpY/G55RSSikTrMMoCteBgdQm5CjcQGIb80m8xaJdwolkt9hYcsouVNuELyRb+Ljz2QN7d17euXGEG458MwznohCzDPl8eI7BnICzAsxZc9Zackru8JZOKuLcIBj92iicj0LRIHAjGkQwiUQjN/OR+bW3kfyG/fzRkD+E8sf9CwuLbAmTL5ZfWJbllFJKpSnelB3yJMkPGcTMMbYc0MZHg2XFpqz4pCo3BTxO57XlC3Z9PmEOPX5ttD2vIr4Qrc5beNSX/x/EpYbjn8dkAsLJe2fthM2+xgv1vgl904tW1+1kOtdVJBh52Ozqxy52TSi/TlF+3W6veaTXSa/Tf3adfh9KKaWKmKOPKngEHAVPlaRx1XLEaYSDOHJNa2URHNfIItfYQyyNXNOiiKWRazBUwsg1QyWLXDMoRNHeNUEAxxsV8diQgSwaqnsD3kgjFHu8ETl/TTT1nSjgSwGE1aT5+ymllDLHvKryo4Fc0fGhKyBkKo4qA5FiaMpLll3KoSog0ZHVDhjsKrKDgCE5NPeKpMGyI1liVJJHLMvJC0YXMseyiswwysjqkyj55PD6TwZRfmvk04sbfnAbkcHbN6yr5I9G6CrZQ5j0pUHgKrk/pZJHrpI3rnpqlFJKBZwRyBtRRY9vR/1xs9uU70XnFDftW1EHvB3Z4oMoxM2hf28QOW5CiiN3SvyLIjioPohqfhCdPokuf8HINQrmI/ES6yJfo5RS6vdWmPaUYkFdPH2rsSSTA+pDV2PWJS7gmp53ccQr5jV0FRqOmrbFrDVZ7XFXW/6wdl379nTTZRgYOr4GFw7sapMCLZ0TPOqYd1Gfd3QyeLQm5As2hceKEV+o4HPkSzl8ioqvXOFlkheNzeC37SJOdVgQxAkn7AkLjOVUiUXttOprLDvlER1GJ4i0CUeJgUC6i+lUy/sxQddHdGxTSM6ntBxF3Qky2bXJ+ygJV+WlhlJKqd9Dapr7e6mNSSFTnxOOknMNgU3FJ9Xmo78qDrCg4wudaD+2L68mM9emF+xrwwF7gx/XaOlF6rrijT2mALJ9a2oA2zVvqhpzzhxchh3c86b4+a3ZGTPS5HHW2YoPYfF4tzpJfW+hVwWQk4zc4Drfe+jN4zhasjLYJxxkwIE3je/N+h3QkwcAJR/fPvnerQ9J2gJpRJv9XLMhT63nlfeIZAWcyHjcMfdA4fu8gOR+Dtl9s3XEwQkwvih+bLmiHSbNwfC1lp7D6x632YEsgOM48qNvEEfeJMPxhQDyn1NKK9/I9xz0pwvLIfrZ0ZW+i4ueA2uHOcP0tF16v4s9txEOfNhiYDIAxYreGxZp5f4Y0xQYbEMuPBrYWA5yoLDh2ZhzHgk+zeD8cyybd5aW5nGTlpKFxVWWPCGtJPtxTM8CB9li6aRnIBQvy05x7OLE/QKg1G/ifyZmTPT8xDL0AAAAAElFTkSuQmCC"

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ }
/******/ ]);