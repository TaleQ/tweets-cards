/*! For license information please see 876.9d3a93b2.chunk.js.LICENSE.txt */
(self.webpackChunktweets_cards=self.webpackChunktweets_cards||[]).push([[876],{757:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return d}});var r=n(2678),o=n.p+"static/media/bg_video.64c0d61bae3714b09523.mp4",i=n(3329),u=function(){return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(r.Z,{style:{width:"100%",height:"100%",position:"fixed",top:0,left:0,zIndex:-1},className:"video",src:o,autoPlay:!0,muted:!0,loop:!0})})},a=n(1087),s="Home_navBtn__pjU5b",l="Home_homeThumb__9cUf9",c="Home_title__L087v",d=function(){return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)("div",{className:l,children:[(0,i.jsx)("h2",{className:c,children:"Be trendy with Tweets Cards!"}),(0,i.jsx)("p",{children:"Explore our website and start your amazing journey to the world of tweets, information, and trends!"}),(0,i.jsx)("p",{children:"Follow your favorite users in one click!"}),(0,i.jsx)("button",{className:s,children:(0,i.jsx)(a.OL,{to:"/tweets",children:"Go to Tweets"})})]}),(0,i.jsx)(u,{})]})}},1978:function(e){e.exports=function(e,t,n,r){var o,i,u,a,s;n=void 0!==n?n:.5,r=void 0!==r?r:.5;var l=t.clientWidth,c=t.clientHeight;return l/c>(o=e instanceof HTMLVideoElement?e.videoWidth/e.videoHeight:e instanceof HTMLImageElement?void 0!==e.naturalWidth?e.naturalWidth/e.naturalHeight:e.width/e.height:e.clientWidth/e.clientHeight)?(i=l,a=-((u=l/o)-c)*r,s=0):(u=c,a=0,s=-((i=c*o)-l)*n),t.style.overflow="hidden",e.style.position="absolute",e.width=i,e.height=u,e.style.width=i+"px",e.style.height=u+"px",e.style.top=a+"px",e.style.left=s+"px",{elWidth:i,elHeight:u,elPosTop:a,elPosLeft:s}}},8522:function(){Array.prototype.map||(Array.prototype.map=function(e){"use strict";if(void 0===this||null===this)throw new TypeError;var t=Object(this),n=t.length>>>0;if("function"!==typeof e)throw new TypeError;var r,o=new Array(n),i=arguments.length>=2?arguments[1]:void 0;for(r=0;r<n;r++)r in t&&(o[r]=e.call(i,t[r],r,t));return o})},9937:function(e,t,n){"use strict";n(4339),n(8522);var r=/([a-z])([A-Z])/g,o="$1-$2",i={};function u(e){if(i[e])return i[e];var t,n,u;function a(){if(t)return t;var r=document.createElement("style");return document.body.appendChild(r),r.setAttribute("data-context",e),t=document.styleSheets[document.styleSheets.length-1],n=t.cssRules?"cssRules":"rules",u=t.removeRule?"removeRule":"deleteRule",t}function s(e,t){var i=function(e){return"string"===typeof e?e:"[object Object]"!==Object.prototype.toString.call(e)?"":Object.keys(e).map((function(t){return t.replace(r,o).toLowerCase()+":"+e[t]})).join(";")}(t),u=a(),s=u[n].length;u.insertRule?u.insertRule(e+"{"+i+"}",s):u.addRule&&u.addRule(e,i,s)}function u(e){var t,r=a();for(t=r[n].length-1;t>=0;t--)r[n][t].selectorText===e&&r[u](t)}return s.clear=function(){for(var e=a();e[n].length;)e[u](0)},s.remove=u,i[e]=s,i[e]}var a=u("default");a.context=u,e.exports=a},4339:function(){Object.keys||(Object.keys=function(){"use strict";var e=Object.prototype.hasOwnProperty,t=!{toString:null}.propertyIsEnumerable("toString"),n=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"],r=n.length;return function(o){if("object"!==typeof o&&("function"!==typeof o||null===o))throw new TypeError("Object.keys called on non-object");var i,u,a=[];for(i in o)e.call(o,i)&&a.push(i);if(t)for(u=0;u<r;u++)e.call(o,n[u])&&a.push(n[u]);return a}}())},781:function(e,t,n){"use strict";function r(e,t,n,r){var o,i;function u(n){o=t(u,r),e(n-(i||n)),i=n}return{start:function(){o||u(0)},stop:function(){n(o),o=null,i=0}}}function o(e,t,n){function r(r){n&&!n(e,t)||r.stopImmediatePropagation()}return e.addEventListener(t,r),r}function i(e,t,n,r){function o(e){n[t]=e}r&&o(e[t]),Object.defineProperty(e,t,{get:function(){return n[t]},set:o})}function u(e,t,n){n.addEventListener(t,(function(){return e.dispatchEvent(new Event(t))}))}function a(e,t){Promise.resolve().then((function(){e.dispatchEvent(new Event(t))}))}n.r(t),n.d(t,{default:function(){return O}});var s="object"===typeof document&&"object-fit"in document.head.style&&!matchMedia("(-webkit-video-playable-inline)").matches,l="bfred-it:iphone-inline-video",c="bfred-it:iphone-inline-video:event",d="bfred-it:iphone-inline-video:nativeplay",f="bfred-it:iphone-inline-video:nativepause";var p,v=[],y=0;function h(e,t,n){(p||0)+200<Date.now()&&(e[c]=!0,p=Date.now()),n||(e.currentTime=t),v[++y%3]=100*t|0}function m(e){return e.driver.currentTime>=e.video.duration}function b(e){var t=this;t.video.readyState>=t.video.HAVE_FUTURE_DATA?(t.hasAudio||(t.driver.currentTime=t.video.currentTime+e*t.video.playbackRate/1e3,t.video.loop&&m(t)&&(t.driver.currentTime=0)),h(t.video,t.driver.currentTime)):t.video.networkState===t.video.NETWORK_IDLE&&0===t.video.buffered.length&&t.video.load(),t.video.ended&&(delete t.video[c],t.video.pause(!0))}function g(){var e=this,t=e[l];e.webkitDisplayingFullscreen?e[d]():("data:"!==t.driver.src&&t.driver.src!==e.src&&(h(e,0,!0),t.driver.src=e.src),e.paused&&(t.paused=!1,0===e.buffered.length&&e.load(),t.driver.play(),t.updater.start(),t.hasAudio||(a(e,"play"),t.video.readyState>=t.video.HAVE_ENOUGH_DATA&&a(e,"playing"))))}function w(e){var t=this,n=t[l];n.driver.pause(),n.updater.stop(),t.webkitDisplayingFullscreen&&t[f](),n.paused&&!e||(n.paused=!0,n.hasAudio||a(t,"pause"),t.ended&&!t.webkitDisplayingFullscreen&&(t[c]=!0,a(t,"ended")))}function _(e,t){var n={};e[l]=n,n.paused=!0,n.hasAudio=t,n.video=e,n.updater=r(b.bind(n),requestAnimationFrame,cancelAnimationFrame),t?n.driver=function(e){var t=new Audio;return u(e,"play",t),u(e,"playing",t),u(e,"pause",t),t.crossOrigin=e.crossOrigin,t.src=e.src||e.currentSrc||"data:",t}(e):(e.addEventListener("canplay",(function(){e.paused||a(e,"playing")})),n.driver={src:e.src||e.currentSrc||"data:",muted:!0,paused:!0,pause:function(){n.driver.paused=!0},play:function(){n.driver.paused=!1,m(n)&&h(e,0)},get ended(){return m(n)}}),e.addEventListener("emptied",(function(){var r=!n.driver.src||"data:"===n.driver.src;n.driver.src&&n.driver.src!==e.src&&(h(e,0,!0),n.driver.src=e.src,r||!t&&e.autoplay?n.driver.play():n.updater.stop())}),!1),e.addEventListener("webkitbeginfullscreen",(function(){e.paused?t&&0===n.driver.buffered.length&&n.driver.load():(e.pause(),e[d]())})),t&&(e.addEventListener("webkitendfullscreen",(function(){n.driver.currentTime=e.currentTime})),e.addEventListener("seeking",(function(){v.indexOf(100*e.currentTime|0)<0&&(n.driver.currentTime=e.currentTime)})))}function k(e){var t=e[c];return delete e[c],!e.webkitDisplayingFullscreen&&!t}var O=function(e,t){if(void 0===t&&(t={}),!e[l]){if(!t.everywhere){if(!s)return;if(!(t.iPad||t.ipad?/iPhone|iPod|iPad/:/iPhone|iPod/).test(navigator.userAgent))return}e.pause();var n=e.autoplay;e.autoplay=!1,_(e,!e.muted),function(e){var t=e[l];e[d]=e.play,e[f]=e.pause,e.play=g,e.pause=w,i(e,"paused",t.driver),i(e,"muted",t.driver,!0),i(e,"playbackRate",t.driver,!0),i(e,"ended",t.driver),i(e,"loop",t.driver,!0),o(e,"seeking",(function(e){return!e.webkitDisplayingFullscreen})),o(e,"seeked",(function(e){return!e.webkitDisplayingFullscreen})),o(e,"timeupdate",k),o(e,"ended",k)}(e),e.classList.add("IIV"),e.muted&&n&&(e.play(),e.addEventListener("playing",(function t(){e.autoplay=!0,e.removeEventListener("playing",t)}))),/iPhone|iPod|iPad/.test(navigator.platform)||console.warn("iphone-inline-video is not guaranteed to work in emulated environments")}}},1725:function(e){"use strict";var t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(o){return!1}}()?Object.assign:function(e,o){for(var i,u,a=function(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),s=1;s<arguments.length;s++){for(var l in i=Object(arguments[s]))n.call(i,l)&&(a[l]=i[l]);if(t){u=t(i);for(var c=0;c<u.length;c++)r.call(i,u[c])&&(a[u[c]]=i[u[c]])}}return a}},888:function(e,t,n){"use strict";var r=n(9047);function o(){}function i(){}i.resetWarningCache=o,e.exports=function(){function e(e,t,n,o,i,u){if(u!==r){var a=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}}function t(){return e}e.isRequired=e;var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:o};return n.PropTypes=n,n}},2007:function(e,t,n){e.exports=n(888)()},9047:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},2678:function(e,t,n){"use strict";var r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=d(n(8389)),a=d(n(2007)),s=d(n(1978)),l=d(n(781)),c=d(n(9937));function d(e){return e&&e.__esModule?e:{default:e}}var f="undefined"!==typeof navigator&&navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/),p=f?f[1]:null,v=function(){},y={position:"absolute",top:0,left:0,width:"100%",height:"100%"},h=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n._handleVideoReady=function(){n.props.disableBackgroundCover||n._resize(),n.setState({visible:!0}),n.props.startTime&&n.setCurrentTime(n.props.startTime),n.props.autoPlay&&n.play(),n.video&&n.props.onReady(n.video.duration)},n._handleOnPlay=function(){n.props.onPlay()},n._handleOnPause=function(){n.props.onPause()},n._handleTimeUpdate=function(){if(n.video){p&&n._handleIOSStartTime();var e=n.video.currentTime,t=n.video.duration,r=e/t;n.props.onTimeUpdate(e,r,t)}},n._handleVideoEnd=function(){n.props.onEnd()},n.state={visible:!1},n.startTimeIsSet=!1,n}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),i(t,[{key:"componentDidMount",value:function(){if(this.props.playsInline&&p){var e=!(p&&p<10&&this.props.autoPlay&&this.props.muted);(0,l.default)(this.video,e,!1),(0,c.default)(["video::-webkit-media-controls-start-playback-button",".IIV::-webkit-media-controls-play-button"],{display:"none"})}this.video&&(4!==this.video.readyState?this.video.addEventListener("loadedmetadata",this._handleVideoReady):this._handleVideoReady(),this.video.addEventListener("play",this._handleOnPlay),this.video.addEventListener("pause",this._handleOnPause),this.video.volume=this.props.volume)}},{key:"componentDidUpdate",value:function(e){this.props.containerWidth===e.containerWidth&&this.props.containerHeight===e.containerHeight||this.props.disableBackgroundCover||this._resize(),this.video&&this.props.volume!==e.volume&&(this.video.volume=this.props.volume)}},{key:"componentWillUnmount",value:function(){this.video&&(this.video.removeEventListener("loadedmetadata",this._handleVideoReady),this.video.removeEventListener("play",this._handleOnPlay),this.video.removeEventListener("pause",this._handleOnPause))}},{key:"_resize",value:function(){this.video&&(0,s.default)(this.video,this.container,this.props.horizontalAlign,this.props.verticalAlign)}},{key:"_handleIOSStartTime",value:function(){this.video&&this.video.currentTime<this.props.startTime&&!this.startTimeIsSet&&(this.setCurrentTime(this.props.startTime),this.startTimeIsSet=!0)}},{key:"play",value:function(){this.video&&this.video.play()}},{key:"pause",value:function(){this.video&&this.video.pause()}},{key:"togglePlay",value:function(){this.video&&(this.video.paused?this.play():this.pause())}},{key:"isPaused",value:function(){return!!this.video&&this.video.paused}},{key:"mute",value:function(){this.video&&(this.video.muted=!0,this.props.onMute())}},{key:"unmute",value:function(){this.video&&(this.video.muted=!1,this.props.onUnmute())}},{key:"toggleMute",value:function(){this.video&&(this.video.muted?this.unmute():this.mute())}},{key:"isMuted",value:function(){return!!this.video&&this.video.muted}},{key:"setCurrentTime",value:function(e){this.video&&(this.video.currentTime=e)}},{key:"render",value:function(){var e=this,t=this.state.visible?"visible":"hidden",n=o({ref:function(t){return e.video=t},src:"string"===typeof this.props.src?this.props.src:null,preload:this.props.preload,poster:this.props.poster,muted:this.props.muted,loop:this.props.loop,onTimeUpdate:this._handleTimeUpdate,onEnded:this._handleVideoEnd},Object.assign(this.props.extraVideoElementProps,{playsInline:this.props.playsInline}));return u.default.createElement("div",{ref:function(t){return e.container=t},className:"BackgroundVideo "+this.props.className,style:Object.assign(o({},y,{visibility:t}),this.props.style),onClick:this.props.onClick,onKeyPress:this.props.onKeyPress,tabIndex:this.props.tabIndex},"object"===r(this.props.src)?u.default.createElement("video",n,this.props.src.map((function(e,t){return u.default.createElement("source",o({key:t},e))}))):u.default.createElement("video",n))}}]),t}(u.default.PureComponent);t.Z=h,h.propTypes={playsInline:a.default.bool,disableBackgroundCover:a.default.bool,style:a.default.object,className:a.default.string,containerWidth:a.default.number,containerHeight:a.default.number,src:a.default.oneOfType([a.default.string,a.default.array]).isRequired,poster:a.default.oneOfType([a.default.string,a.default.object]),horizontalAlign:a.default.number,verticalAlign:a.default.number,preload:a.default.string,muted:a.default.bool,volume:a.default.number,loop:a.default.bool,autoPlay:a.default.bool,extraVideoElementProps:a.default.object,startTime:a.default.number,tabIndex:a.default.number,onReady:a.default.func,onPlay:a.default.func,onPause:a.default.func,onMute:a.default.func,onUnmute:a.default.func,onTimeUpdate:a.default.func,onEnd:a.default.func,onClick:a.default.func,onKeyPress:a.default.func},h.defaultProps={playsInline:!0,disableBackgroundCover:!1,style:{},horizontalAlign:.5,verticalAlign:.5,preload:"auto",muted:!0,volume:1,loop:!0,autoPlay:!0,extraVideoElementProps:{},startTime:0,tabIndex:0,onReady:v,onPlay:v,onPause:v,onMute:v,onUnmute:v,onTimeUpdate:v,onEnd:v,onClick:v,onKeyPress:v}},6129:function(e,t,n){"use strict";var r=n(1725),o="function"===typeof Symbol&&Symbol.for,i=o?Symbol.for("react.element"):60103,u=o?Symbol.for("react.portal"):60106,a=o?Symbol.for("react.fragment"):60107,s=o?Symbol.for("react.strict_mode"):60108,l=o?Symbol.for("react.profiler"):60114,c=o?Symbol.for("react.provider"):60109,d=o?Symbol.for("react.context"):60110,f=o?Symbol.for("react.forward_ref"):60112,p=o?Symbol.for("react.suspense"):60113,v=o?Symbol.for("react.memo"):60115,y=o?Symbol.for("react.lazy"):60116,h="function"===typeof Symbol&&Symbol.iterator;function m(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g={};function w(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||b}function _(){}function k(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||b}w.prototype.isReactComponent={},w.prototype.setState=function(e,t){if("object"!==typeof e&&"function"!==typeof e&&null!=e)throw Error(m(85));this.updater.enqueueSetState(this,e,t,"setState")},w.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},_.prototype=w.prototype;var O=k.prototype=new _;O.constructor=k,r(O,w.prototype),O.isPureReactComponent=!0;var E={current:null},P=Object.prototype.hasOwnProperty,j={key:!0,ref:!0,__self:!0,__source:!0};function T(e,t,n){var r,o={},u=null,a=null;if(null!=t)for(r in void 0!==t.ref&&(a=t.ref),void 0!==t.key&&(u=""+t.key),t)P.call(t,r)&&!j.hasOwnProperty(r)&&(o[r]=t[r]);var s=arguments.length-2;if(1===s)o.children=n;else if(1<s){for(var l=Array(s),c=0;c<s;c++)l[c]=arguments[c+2];o.children=l}if(e&&e.defaultProps)for(r in s=e.defaultProps)void 0===o[r]&&(o[r]=s[r]);return{$$typeof:i,type:e,key:u,ref:a,props:o,_owner:E.current}}function S(e){return"object"===typeof e&&null!==e&&e.$$typeof===i}var x=/\/+/g,R=[];function C(e,t,n,r){if(R.length){var o=R.pop();return o.result=e,o.keyPrefix=t,o.func=n,o.context=r,o.count=0,o}return{result:e,keyPrefix:t,func:n,context:r,count:0}}function I(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>R.length&&R.push(e)}function A(e,t,n,r){var o=typeof e;"undefined"!==o&&"boolean"!==o||(e=null);var a=!1;if(null===e)a=!0;else switch(o){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case i:case u:a=!0}}if(a)return n(r,e,""===t?"."+U(e,0):t),1;if(a=0,t=""===t?".":t+":",Array.isArray(e))for(var s=0;s<e.length;s++){var l=t+U(o=e[s],s);a+=A(o,l,n,r)}else if(null===e||"object"!==typeof e?l=null:l="function"===typeof(l=h&&e[h]||e["@@iterator"])?l:null,"function"===typeof l)for(e=l.call(e),s=0;!(o=e.next()).done;)a+=A(o=o.value,l=t+U(o,s++),n,r);else if("object"===o)throw n=""+e,Error(m(31,"[object Object]"===n?"object with keys {"+Object.keys(e).join(", ")+"}":n,""));return a}function L(e,t,n){return null==e?0:A(e,"",t,n)}function U(e,t){return"object"===typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return t[e]}))}(e.key):t.toString(36)}function $(e,t){e.func.call(e.context,t,e.count++)}function V(e,t,n){var r=e.result,o=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?D(e,r,n,(function(e){return e})):null!=e&&(S(e)&&(e=function(e,t){return{$$typeof:i,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,o+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(x,"$&/")+"/")+n)),r.push(e))}function D(e,t,n,r,o){var i="";null!=n&&(i=(""+n).replace(x,"$&/")+"/"),L(e,V,t=C(t,i,r,o)),I(t)}var H={current:null};function F(){var e=H.current;if(null===e)throw Error(m(321));return e}var M={ReactCurrentDispatcher:H,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:E,IsSomeRendererActing:{current:!1},assign:r};t.Children={map:function(e,t,n){if(null==e)return e;var r=[];return D(e,r,null,t,n),r},forEach:function(e,t,n){if(null==e)return e;L(e,$,t=C(null,null,t,n)),I(t)},count:function(e){return L(e,(function(){return null}),null)},toArray:function(e){var t=[];return D(e,t,null,(function(e){return e})),t},only:function(e){if(!S(e))throw Error(m(143));return e}},t.Component=w,t.Fragment=a,t.Profiler=l,t.PureComponent=k,t.StrictMode=s,t.Suspense=p,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=M,t.cloneElement=function(e,t,n){if(null===e||void 0===e)throw Error(m(267,e));var o=r({},e.props),u=e.key,a=e.ref,s=e._owner;if(null!=t){if(void 0!==t.ref&&(a=t.ref,s=E.current),void 0!==t.key&&(u=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(c in t)P.call(t,c)&&!j.hasOwnProperty(c)&&(o[c]=void 0===t[c]&&void 0!==l?l[c]:t[c])}var c=arguments.length-2;if(1===c)o.children=n;else if(1<c){l=Array(c);for(var d=0;d<c;d++)l[d]=arguments[d+2];o.children=l}return{$$typeof:i,type:e.type,key:u,ref:a,props:o,_owner:s}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:d,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:c,_context:e},e.Consumer=e},t.createElement=T,t.createFactory=function(e){var t=T.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:f,render:e}},t.isValidElement=S,t.lazy=function(e){return{$$typeof:y,_ctor:e,_status:-1,_result:null}},t.memo=function(e,t){return{$$typeof:v,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return F().useCallback(e,t)},t.useContext=function(e,t){return F().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return F().useEffect(e,t)},t.useImperativeHandle=function(e,t,n){return F().useImperativeHandle(e,t,n)},t.useLayoutEffect=function(e,t){return F().useLayoutEffect(e,t)},t.useMemo=function(e,t){return F().useMemo(e,t)},t.useReducer=function(e,t,n){return F().useReducer(e,t,n)},t.useRef=function(e){return F().useRef(e)},t.useState=function(e){return F().useState(e)},t.version="16.14.0"},8389:function(e,t,n){"use strict";e.exports=n(6129)}}]);
//# sourceMappingURL=876.9d3a93b2.chunk.js.map