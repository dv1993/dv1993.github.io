(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"7j6X":function(e,t,n){"use strict";var r=n("dZvc");function a(e,t){return function(e){var t=Object(r.a)(e);return t&&t.defaultView||window}(e).getComputedStyle(e,t)}var o=/([A-Z])/g;var c=/^ms-/;function u(e){return function(e){return e.replace(o,"-$1").toLowerCase()}(e).replace(c,"-ms-")}var i=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;t.a=function(e,t){var n="",r="";if("string"==typeof t)return e.style.getPropertyValue(u(t))||a(e).getPropertyValue(u(t));Object.keys(t).forEach((function(a){var o=t[a];o||0===o?!function(e){return!(!e||!i.test(e))}(a)?n+=u(a)+": "+o+";":r+=a+"("+o+") ":e.style.removeProperty(u(a))})),r&&(n+="transform: "+r+";"),e.style.cssText+=";"+n}},GEtZ:function(e,t,n){"use strict";var r=n("SJxq"),a=!1,o=!1;try{var c={get passive(){return a=!0},get once(){return o=a=!0}};r.a&&(window.addEventListener("test",c,c),window.removeEventListener("test",c,!0))}catch(l){}var u=function(e,t,n,r){if(r&&"boolean"!=typeof r&&!o){var c=r.once,u=r.capture,i=n;!o&&c&&(i=n.__once||function e(r){this.removeEventListener(t,e,u),n.call(this,r)},n.__once=i),e.addEventListener(t,i,a?r:u)}e.addEventListener(t,n,r)};var i=function(e,t,n,r){var a=r&&"boolean"!=typeof r?r.capture:r;e.removeEventListener(t,n,a),n.__once&&e.removeEventListener(t,n.__once,a)};t.a=function(e,t,n,r){return u(e,t,n,r),function(){i(e,t,n,r)}}},JCAc:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n("wx14"),a=n("zLVn"),o=n("q1tI");n("QLaP");function c(e){return"default"+e.charAt(0).toUpperCase()+e.substr(1)}function u(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}function i(e,t){return Object.keys(t).reduce((function(n,i){var l,s=n,f=s[c(i)],v=s[i],d=Object(a.a)(s,[c(i),i].map(u)),p=t[i],b=function(e,t,n){var r=Object(o.useRef)(void 0!==e),a=Object(o.useState)(t),c=a[0],u=a[1],i=void 0!==e,l=r.current;return r.current=i,!i&&l&&c!==t&&u(t),[i?e:c,Object(o.useCallback)((function(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),a=1;a<t;a++)r[a-1]=arguments[a];n&&n.apply(void 0,[e].concat(r)),u(e)}),[n])]}(v,f,e[p]),m=b[0],y=b[1];return Object(r.a)({},d,((l={})[i]=m,l[p]=y,l))}),e)}n("dI71"),n("94VI")},SJxq:function(e,t,n){"use strict";t.a=!("undefined"==typeof window||!window.document||!window.document.createElement)},TSYQ:function(e,t,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var o=typeof r;if("string"===o||"number"===o)e.push(r);else if(Array.isArray(r)&&r.length){var c=a.apply(null,r);c&&e.push(c)}else if("object"===o)for(var u in r)n.call(r,u)&&r[u]&&e.push(u)}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(r=function(){return a}.apply(t,[]))||(e.exports=r)}()},XcHJ:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n("q1tI");function a(){var e=Object(r.useRef)(!0),t=Object(r.useRef)((function(){return e.current}));return Object(r.useEffect)((function(){return function(){e.current=!1}}),[]),t.current}},ZCiN:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n("q1tI");var a=function(e){var t=Object(r.useRef)(e);return Object(r.useEffect)((function(){t.current=e}),[e]),t};function o(e){var t=a(e);return Object(r.useCallback)((function(){return t.current&&t.current.apply(t,arguments)}),[t])}},bg8b:function(e,t,n){"use strict";n.d(t,"a",(function(){return X}));var r=n("q1tI"),a=n.n(r),o=n("wx14"),c=n("zLVn"),u=n("TSYQ"),i=n.n(u),l=/-(.)/g;var s=a.a.createContext({});s.Consumer,s.Provider;function f(e,t){var n=Object(r.useContext)(s);return e||n[t]||t}var v=function(e){return e[0].toUpperCase()+(t=e,t.replace(l,(function(e,t){return t.toUpperCase()}))).slice(1);var t};function d(e,t){var n=void 0===t?{}:t,r=n.displayName,u=void 0===r?v(e):r,l=n.Component,s=n.defaultProps,d=a.a.forwardRef((function(t,n){var r=t.className,u=t.bsPrefix,s=t.as,v=void 0===s?l||"div":s,d=Object(c.a)(t,["className","bsPrefix","as"]),p=f(u,e);return a.a.createElement(v,Object(o.a)({ref:n,className:i()(r,p)},d))}));return d.defaultProps=s,d.displayName=u,d}var p=d("carousel-item"),b=n("ZCiN");var m=function(e,t){var n=Object(r.useRef)(!0);Object(r.useEffect)((function(){if(!n.current)return e();n.current=!1}),t)},y=n("XcHJ"),h=n("i52p"),O=Math.pow(2,31)-1;function j(){var e=Object(y.a)(),t=Object(r.useRef)();return Object(h.a)((function(){return clearTimeout(t.current)})),Object(r.useMemo)((function(){var n=function(){return clearTimeout(t.current)};return{set:function(r,a){void 0===a&&(a=0),e()&&(n(),a<=O?t.current=setTimeout(r,a):function e(t,n,r){var a=r-Date.now();t.current=a<=O?setTimeout(n,a):setTimeout((function(){return e(t,n,r)}),O)}(t,r,Date.now()+a))},clear:n}}),[])}var w=n("7j6X"),E=n("GEtZ");function x(e,t,n){void 0===n&&(n=5);var r=!1,a=setTimeout((function(){r||function(e){var t=document.createEvent("HTMLEvents");t.initEvent("transitionend",!0,!0),e.dispatchEvent(t)}(e)}),t+n),o=Object(E.a)(e,"transitionend",(function(){r=!0}),{once:!0});return function(){clearTimeout(a),o()}}function g(e,t,n,r){var a,o,c;null==n&&(a=e,o=Object(w.a)(a,"transitionDuration")||"",c=-1===o.indexOf("ms")?1e3:1,n=parseFloat(o)*c||0);var u=x(e,n,r),i=Object(E.a)(e,"transitionend",t);return function(){u(),i()}}var C=n("dRu9"),k=n("17x9"),N=n.n(k),S=n("JCAc"),I=d("carousel-caption");function T(e,t){var n=0;return a.a.Children.map(e,(function(e){return a.a.isValidElement(e)?t(e,n++):e}))}var L=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter((function(e){return null!=e})).reduce((function(e,t){if("function"!=typeof t)throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");return null===e?t:function(){for(var n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];e.apply(this,r),t.apply(this,r)}}),null)};function P(e){return!e||"#"===e.trim()}var R=a.a.forwardRef((function(e,t){var n=e.as,r=void 0===n?"a":n,u=e.disabled,i=e.onKeyDown,l=Object(c.a)(e,["as","disabled","onKeyDown"]),s=function(e){var t=l.href,n=l.onClick;(u||P(t))&&e.preventDefault(),u?e.stopPropagation():n&&n(e)};return P(l.href)&&(l.role=l.role||"button",l.href=l.href||"#"),u&&(l.tabIndex=-1,l["aria-disabled"]=!0),a.a.createElement(r,Object(o.a)({ref:t},l,{onClick:s,onKeyDown:L((function(e){" "===e.key&&(e.preventDefault(),s(e))}),i)}))}));R.displayName="SafeAnchor";var A=R;var D={bsPrefix:N.a.string,as:N.a.elementType,slide:N.a.bool,fade:N.a.bool,controls:N.a.bool,indicators:N.a.bool,activeIndex:N.a.number,onSelect:N.a.func,onSlide:N.a.func,onSlid:N.a.func,interval:N.a.number,keyboard:N.a.bool,pause:N.a.oneOf(["hover",!1]),wrap:N.a.bool,touch:N.a.bool,prevIcon:N.a.node,prevLabel:N.a.string,nextIcon:N.a.node,nextLabel:N.a.string},M={slide:!0,fade:!1,controls:!0,indicators:!0,defaultActiveIndex:0,interval:5e3,keyboard:!0,pause:"hover",wrap:!0,touch:!0,prevIcon:a.a.createElement("span",{"aria-hidden":"true",className:"carousel-control-prev-icon"}),prevLabel:"Previous",nextIcon:a.a.createElement("span",{"aria-hidden":"true",className:"carousel-control-next-icon"}),nextLabel:"Next"};var J=a.a.forwardRef((function(e,t){var n=Object(S.a)(e,{activeIndex:"onSelect"}),u=n.as,l=void 0===u?"div":u,s=n.bsPrefix,v=n.slide,d=n.fade,p=n.controls,y=n.indicators,h=n.activeIndex,O=n.onSelect,w=n.onSlide,E=n.onSlid,x=n.interval,k=n.keyboard,N=n.onKeyDown,I=n.pause,L=n.onMouseOver,P=n.onMouseOut,R=n.wrap,D=n.touch,M=n.onTouchStart,J=n.onTouchMove,V=n.onTouchEnd,X=n.prevIcon,Z=n.prevLabel,_=n.nextIcon,q=n.nextLabel,K=n.className,H=n.children,Y=Object(c.a)(n,["as","bsPrefix","slide","fade","controls","indicators","activeIndex","onSelect","onSlide","onSlid","interval","keyboard","onKeyDown","pause","onMouseOver","onMouseOut","wrap","touch","onTouchStart","onTouchMove","onTouchEnd","prevIcon","prevLabel","nextIcon","nextLabel","className","children"]),Q=f(s,"carousel"),U=Object(r.useRef)(null),z=Object(r.useState)("next"),F=z[0],G=z[1],$=Object(r.useState)(!1),B=$[0],W=$[1],ee=Object(r.useState)(h||0),te=ee[0],ne=ee[1];B||h===te||(U.current?(G(U.current),U.current=null):G((h||0)>te?"next":"prev"),v&&W(!0),ne(h||0));var re=a.a.Children.toArray(H).filter(a.a.isValidElement).length,ae=Object(r.useCallback)((function(e){if(!B){var t=te-1;if(t<0){if(!R)return;t=re-1}U.current="prev",O&&O(t,e)}}),[B,te,O,R,re]),oe=Object(b.a)((function(e){if(!B){var t=te+1;if(t>=re){if(!R)return;t=0}U.current="next",O&&O(t,e)}})),ce=Object(r.useRef)();Object(r.useImperativeHandle)(t,(function(){return{element:ce.current,prev:ae,next:oe}}));var ue=Object(b.a)((function(){!document.hidden&&function(e){if(!(e&&e.style&&e.parentNode&&e.parentNode.style))return!1;var t=getComputedStyle(e);return"none"!==t.display&&"hidden"!==t.visibility&&"none"!==getComputedStyle(e.parentNode).display}(ce.current)&&oe()})),ie="next"===F?"left":"right";m((function(){v||(w&&w(te,ie),E&&E(te,ie))}),[te]);var le=Q+"-item-"+F,se=Q+"-item-"+ie,fe=Object(r.useCallback)((function(e){!function(e){e.offsetHeight}(e),w&&w(te,ie)}),[w,te,ie]),ve=Object(r.useCallback)((function(){W(!1),E&&E(te,ie)}),[E,te,ie]),de=Object(r.useCallback)((function(e){if(k&&!/input|textarea/i.test(e.target.tagName))switch(e.key){case"ArrowLeft":return e.preventDefault(),void ae(e);case"ArrowRight":return e.preventDefault(),void oe(e)}N&&N(e)}),[k,N,ae,oe]),pe=Object(r.useState)(!1),be=pe[0],me=pe[1],ye=Object(r.useCallback)((function(e){"hover"===I&&me(!0),L&&L(e)}),[I,L]),he=Object(r.useCallback)((function(e){me(!1),P&&P(e)}),[P]),Oe=Object(r.useRef)(0),je=Object(r.useRef)(0),we=Object(r.useState)(!1),Ee=we[0],xe=we[1],ge=j(),Ce=Object(r.useCallback)((function(e){Oe.current=e.touches[0].clientX,je.current=0,D&&xe(!0),M&&M(e)}),[D,M]),ke=Object(r.useCallback)((function(e){e.touches&&e.touches.length>1?je.current=0:je.current=e.touches[0].clientX-Oe.current,J&&J(e)}),[J]),Ne=Object(r.useCallback)((function(e){if(D){var t=je.current;if(Math.abs(t)<=40)return;t>0?ae(e):oe(e)}ge.set((function(){xe(!1)}),x||void 0),V&&V(e)}),[D,ae,oe,ge,x,V]),Se=null!=x&&!be&&!Ee&&!B,Ie=Object(r.useRef)();Object(r.useEffect)((function(){if(Se)return Ie.current=window.setInterval(document.visibilityState?ue:oe,x||void 0),function(){null!==Ie.current&&clearInterval(Ie.current)}}),[Se,oe,x,ue]);var Te=Object(r.useMemo)((function(){return y&&Array.from({length:re},(function(e,t){return function(e){O&&O(t,e)}}))}),[y,re,O]);return a.a.createElement(l,Object(o.a)({ref:ce},Y,{onKeyDown:de,onMouseOver:ye,onMouseOut:he,onTouchStart:Ce,onTouchMove:ke,onTouchEnd:Ne,className:i()(K,Q,v&&"slide",d&&Q+"-fade")}),y&&a.a.createElement("ol",{className:Q+"-indicators"},T(H,(function(e,t){return a.a.createElement("li",{key:t,className:t===te?"active":void 0,onClick:Te?Te[t]:void 0})}))),a.a.createElement("div",{className:Q+"-inner"},T(H,(function(e,t){var n=t===te;return v?a.a.createElement(C.a,{in:n,onEnter:n?fe:void 0,onEntered:n?ve:void 0,addEndListener:g},(function(t){return a.a.cloneElement(e,{className:i()(e.props.className,n&&"entered"!==t&&le,("entered"===t||"exiting"===t)&&"active",("entering"===t||"exiting"===t)&&se)})})):a.a.cloneElement(e,{className:i()(e.props.className,n&&"active")})}))),p&&a.a.createElement(a.a.Fragment,null,(R||0!==h)&&a.a.createElement(A,{className:Q+"-control-prev",onClick:ae},X,Z&&a.a.createElement("span",{className:"sr-only"},Z)),(R||h!==re-1)&&a.a.createElement(A,{className:Q+"-control-next",onClick:oe},_,q&&a.a.createElement("span",{className:"sr-only"},q))))}));J.displayName="Carousel",J.propTypes=D,J.defaultProps=M,J.Caption=I,J.Item=p;var V=J;function X(e){var t=e.images;return a.a.createElement(V,{nextIcon:null,prevIcon:null,style:{width:"50%"}},t.map((function(e,t){return a.a.createElement(p,{key:"slide-image-"+t},a.a.createElement("div",{style:{display:"flex",width:"100%",flexDirection:"column",alignItems:"center"}},a.a.createElement("img",{width:"700px",height:"700px",src:e.url,alt:e.title}),a.a.createElement(V.Caption,{style:{position:"relative",left:"0"}},a.a.createElement("h2",{style:{color:"black"}},e.title),a.a.createElement("p",{style:{color:"black"}},a.a.createElement("em",null,e.desc)))))})))}},dZvc:function(e,t,n){"use strict";function r(e){return e&&e.ownerDocument||document}n.d(t,"a",(function(){return r}))},i52p:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n("q1tI");function a(e){var t,n,a=(t=e,(n=Object(r.useRef)(t)).current=t,n);Object(r.useEffect)((function(){return function(){return a.current()}}),[])}}}]);
//# sourceMappingURL=b714bd797d2cba7377da8911756ab9d91f882ea9-c94c59a84907557e5f4c.js.map