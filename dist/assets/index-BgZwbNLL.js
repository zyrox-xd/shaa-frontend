(function(){const d=document.createElement("link").relList;if(d&&d.supports&&d.supports("modulepreload"))return;for(const y of document.querySelectorAll('link[rel="modulepreload"]'))c(y);new MutationObserver(y=>{for(const g of y)if(g.type==="childList")for(const j of g.addedNodes)j.tagName==="LINK"&&j.rel==="modulepreload"&&c(j)}).observe(document,{childList:!0,subtree:!0});function b(y){const g={};return y.integrity&&(g.integrity=y.integrity),y.referrerPolicy&&(g.referrerPolicy=y.referrerPolicy),y.crossOrigin==="use-credentials"?g.credentials="include":y.crossOrigin==="anonymous"?g.credentials="omit":g.credentials="same-origin",g}function c(y){if(y.ep)return;y.ep=!0;const g=b(y);fetch(y.href,g)}})();function Jn(u){return u&&u.__esModule&&Object.prototype.hasOwnProperty.call(u,"default")?u.default:u}var Io={exports:{}},Vn={};var nm;function gh(){if(nm)return Vn;nm=1;var u=Symbol.for("react.transitional.element"),d=Symbol.for("react.fragment");function b(c,y,g){var j=null;if(g!==void 0&&(j=""+g),y.key!==void 0&&(j=""+y.key),"key"in y){g={};for(var h in y)h!=="key"&&(g[h]=y[h])}else g=y;return y=g.ref,{$$typeof:u,type:c,key:j,ref:y!==void 0?y:null,props:g}}return Vn.Fragment=d,Vn.jsx=b,Vn.jsxs=b,Vn}var lm;function mh(){return lm||(lm=1,Io.exports=gh()),Io.exports}var n=mh(),Ho={exports:{}},ie={};var sm;function ph(){if(sm)return ie;sm=1;var u=Symbol.for("react.transitional.element"),d=Symbol.for("react.portal"),b=Symbol.for("react.fragment"),c=Symbol.for("react.strict_mode"),y=Symbol.for("react.profiler"),g=Symbol.for("react.consumer"),j=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),T=Symbol.for("react.lazy"),S=Symbol.for("react.activity"),w=Symbol.iterator;function O(v){return v===null||typeof v!="object"?null:(v=w&&v[w]||v["@@iterator"],typeof v=="function"?v:null)}var q={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},U=Object.assign,I={};function _(v,G,H){this.props=v,this.context=G,this.refs=I,this.updater=H||q}_.prototype.isReactComponent={},_.prototype.setState=function(v,G){if(typeof v!="object"&&typeof v!="function"&&v!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,v,G,"setState")},_.prototype.forceUpdate=function(v){this.updater.enqueueForceUpdate(this,v,"forceUpdate")};function ue(){}ue.prototype=_.prototype;function ae(v,G,H){this.props=v,this.context=G,this.refs=I,this.updater=H||q}var Q=ae.prototype=new ue;Q.constructor=ae,U(Q,_.prototype),Q.isPureReactComponent=!0;var Se=Array.isArray;function He(){}var le={H:null,A:null,T:null,S:null},Ue=Object.prototype.hasOwnProperty;function oi(v,G,H){var F=H.ref;return{$$typeof:u,type:v,key:G,ref:F!==void 0?F:null,props:H}}function Ke(v,G){return oi(v.type,G,v.props)}function si(v){return typeof v=="object"&&v!==null&&v.$$typeof===u}function Qe(v){var G={"=":"=0",":":"=2"};return"$"+v.replace(/[=:]/g,function(H){return G[H]})}var Ee=/\/+/g;function ye(v,G){return typeof v=="object"&&v!==null&&v.key!=null?Qe(""+v.key):G.toString(36)}function Je(v){switch(v.status){case"fulfilled":return v.value;case"rejected":throw v.reason;default:switch(typeof v.status=="string"?v.then(He,He):(v.status="pending",v.then(function(G){v.status==="pending"&&(v.status="fulfilled",v.value=G)},function(G){v.status==="pending"&&(v.status="rejected",v.reason=G)})),v.status){case"fulfilled":return v.value;case"rejected":throw v.reason}}throw v}function R(v,G,H,F,B){var V=typeof v;(V==="undefined"||V==="boolean")&&(v=null);var Z=!1;if(v===null)Z=!0;else switch(V){case"bigint":case"string":case"number":Z=!0;break;case"object":switch(v.$$typeof){case u:case d:Z=!0;break;case T:return Z=v._init,R(Z(v._payload),G,H,F,B)}}if(Z)return B=B(v),Z=F===""?"."+ye(v,0):F,Se(B)?(H="",Z!=null&&(H=Z.replace(Ee,"$&/")+"/"),R(B,G,H,"",function(yi){return yi})):B!=null&&(si(B)&&(B=Ke(B,H+(B.key==null||v&&v.key===B.key?"":(""+B.key).replace(Ee,"$&/")+"/")+Z)),G.push(B)),1;Z=0;var ee=F===""?".":F+":";if(Se(v))for(var se=0;se<v.length;se++)F=v[se],V=ee+ye(F,se),Z+=R(F,G,H,V,B);else if(se=O(v),typeof se=="function")for(v=se.call(v),se=0;!(F=v.next()).done;)F=F.value,V=ee+ye(F,se++),Z+=R(F,G,H,V,B);else if(V==="object"){if(typeof v.then=="function")return R(Je(v),G,H,F,B);throw G=String(v),Error("Objects are not valid as a React child (found: "+(G==="[object Object]"?"object with keys {"+Object.keys(v).join(", ")+"}":G)+"). If you meant to render a collection of children, use an array instead.")}return Z}function P(v,G,H){if(v==null)return v;var F=[],B=0;return R(v,F,"","",function(V){return G.call(H,V,B++)}),F}function J(v){if(v._status===-1){var G=v._result;G=G(),G.then(function(H){(v._status===0||v._status===-1)&&(v._status=1,v._result=H)},function(H){(v._status===0||v._status===-1)&&(v._status=2,v._result=H)}),v._status===-1&&(v._status=0,v._result=G)}if(v._status===1)return v._result.default;throw v._result}var pe=typeof reportError=="function"?reportError:function(v){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var G=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof v=="object"&&v!==null&&typeof v.message=="string"?String(v.message):String(v),error:v});if(!window.dispatchEvent(G))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",v);return}console.error(v)},be={map:P,forEach:function(v,G,H){P(v,function(){G.apply(this,arguments)},H)},count:function(v){var G=0;return P(v,function(){G++}),G},toArray:function(v){return P(v,function(G){return G})||[]},only:function(v){if(!si(v))throw Error("React.Children.only expected to receive a single React element child.");return v}};return ie.Activity=S,ie.Children=be,ie.Component=_,ie.Fragment=b,ie.Profiler=y,ie.PureComponent=ae,ie.StrictMode=c,ie.Suspense=p,ie.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=le,ie.__COMPILER_RUNTIME={__proto__:null,c:function(v){return le.H.useMemoCache(v)}},ie.cache=function(v){return function(){return v.apply(null,arguments)}},ie.cacheSignal=function(){return null},ie.cloneElement=function(v,G,H){if(v==null)throw Error("The argument must be a React element, but you passed "+v+".");var F=U({},v.props),B=v.key;if(G!=null)for(V in G.key!==void 0&&(B=""+G.key),G)!Ue.call(G,V)||V==="key"||V==="__self"||V==="__source"||V==="ref"&&G.ref===void 0||(F[V]=G[V]);var V=arguments.length-2;if(V===1)F.children=H;else if(1<V){for(var Z=Array(V),ee=0;ee<V;ee++)Z[ee]=arguments[ee+2];F.children=Z}return oi(v.type,B,F)},ie.createContext=function(v){return v={$$typeof:j,_currentValue:v,_currentValue2:v,_threadCount:0,Provider:null,Consumer:null},v.Provider=v,v.Consumer={$$typeof:g,_context:v},v},ie.createElement=function(v,G,H){var F,B={},V=null;if(G!=null)for(F in G.key!==void 0&&(V=""+G.key),G)Ue.call(G,F)&&F!=="key"&&F!=="__self"&&F!=="__source"&&(B[F]=G[F]);var Z=arguments.length-2;if(Z===1)B.children=H;else if(1<Z){for(var ee=Array(Z),se=0;se<Z;se++)ee[se]=arguments[se+2];B.children=ee}if(v&&v.defaultProps)for(F in Z=v.defaultProps,Z)B[F]===void 0&&(B[F]=Z[F]);return oi(v,V,B)},ie.createRef=function(){return{current:null}},ie.forwardRef=function(v){return{$$typeof:h,render:v}},ie.isValidElement=si,ie.lazy=function(v){return{$$typeof:T,_payload:{_status:-1,_result:v},_init:J}},ie.memo=function(v,G){return{$$typeof:m,type:v,compare:G===void 0?null:G}},ie.startTransition=function(v){var G=le.T,H={};le.T=H;try{var F=v(),B=le.S;B!==null&&B(H,F),typeof F=="object"&&F!==null&&typeof F.then=="function"&&F.then(He,pe)}catch(V){pe(V)}finally{G!==null&&H.types!==null&&(G.types=H.types),le.T=G}},ie.unstable_useCacheRefresh=function(){return le.H.useCacheRefresh()},ie.use=function(v){return le.H.use(v)},ie.useActionState=function(v,G,H){return le.H.useActionState(v,G,H)},ie.useCallback=function(v,G){return le.H.useCallback(v,G)},ie.useContext=function(v){return le.H.useContext(v)},ie.useDebugValue=function(){},ie.useDeferredValue=function(v,G){return le.H.useDeferredValue(v,G)},ie.useEffect=function(v,G){return le.H.useEffect(v,G)},ie.useEffectEvent=function(v){return le.H.useEffectEvent(v)},ie.useId=function(){return le.H.useId()},ie.useImperativeHandle=function(v,G,H){return le.H.useImperativeHandle(v,G,H)},ie.useInsertionEffect=function(v,G){return le.H.useInsertionEffect(v,G)},ie.useLayoutEffect=function(v,G){return le.H.useLayoutEffect(v,G)},ie.useMemo=function(v,G){return le.H.useMemo(v,G)},ie.useOptimistic=function(v,G){return le.H.useOptimistic(v,G)},ie.useReducer=function(v,G,H){return le.H.useReducer(v,G,H)},ie.useRef=function(v){return le.H.useRef(v)},ie.useState=function(v){return le.H.useState(v)},ie.useSyncExternalStore=function(v,G,H){return le.H.useSyncExternalStore(v,G,H)},ie.useTransition=function(){return le.H.useTransition()},ie.version="19.2.0",ie}var rm;function js(){return rm||(rm=1,Ho.exports=ph()),Ho.exports}var L=js();const Kn=Jn(L);var Uo={exports:{}},Fn={},qo={exports:{}},_o={};var om;function fh(){return om||(om=1,(function(u){function d(R,P){var J=R.length;R.push(P);e:for(;0<J;){var pe=J-1>>>1,be=R[pe];if(0<y(be,P))R[pe]=P,R[J]=be,J=pe;else break e}}function b(R){return R.length===0?null:R[0]}function c(R){if(R.length===0)return null;var P=R[0],J=R.pop();if(J!==P){R[0]=J;e:for(var pe=0,be=R.length,v=be>>>1;pe<v;){var G=2*(pe+1)-1,H=R[G],F=G+1,B=R[F];if(0>y(H,J))F<be&&0>y(B,H)?(R[pe]=B,R[F]=J,pe=F):(R[pe]=H,R[G]=J,pe=G);else if(F<be&&0>y(B,J))R[pe]=B,R[F]=J,pe=F;else break e}}return P}function y(R,P){var J=R.sortIndex-P.sortIndex;return J!==0?J:R.id-P.id}if(u.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var g=performance;u.unstable_now=function(){return g.now()}}else{var j=Date,h=j.now();u.unstable_now=function(){return j.now()-h}}var p=[],m=[],T=1,S=null,w=3,O=!1,q=!1,U=!1,I=!1,_=typeof setTimeout=="function"?setTimeout:null,ue=typeof clearTimeout=="function"?clearTimeout:null,ae=typeof setImmediate<"u"?setImmediate:null;function Q(R){for(var P=b(m);P!==null;){if(P.callback===null)c(m);else if(P.startTime<=R)c(m),P.sortIndex=P.expirationTime,d(p,P);else break;P=b(m)}}function Se(R){if(U=!1,Q(R),!q)if(b(p)!==null)q=!0,He||(He=!0,Qe());else{var P=b(m);P!==null&&Je(Se,P.startTime-R)}}var He=!1,le=-1,Ue=5,oi=-1;function Ke(){return I?!0:!(u.unstable_now()-oi<Ue)}function si(){if(I=!1,He){var R=u.unstable_now();oi=R;var P=!0;try{e:{q=!1,U&&(U=!1,ue(le),le=-1),O=!0;var J=w;try{i:{for(Q(R),S=b(p);S!==null&&!(S.expirationTime>R&&Ke());){var pe=S.callback;if(typeof pe=="function"){S.callback=null,w=S.priorityLevel;var be=pe(S.expirationTime<=R);if(R=u.unstable_now(),typeof be=="function"){S.callback=be,Q(R),P=!0;break i}S===b(p)&&c(p),Q(R)}else c(p);S=b(p)}if(S!==null)P=!0;else{var v=b(m);v!==null&&Je(Se,v.startTime-R),P=!1}}break e}finally{S=null,w=J,O=!1}P=void 0}}finally{P?Qe():He=!1}}}var Qe;if(typeof ae=="function")Qe=function(){ae(si)};else if(typeof MessageChannel<"u"){var Ee=new MessageChannel,ye=Ee.port2;Ee.port1.onmessage=si,Qe=function(){ye.postMessage(null)}}else Qe=function(){_(si,0)};function Je(R,P){le=_(function(){R(u.unstable_now())},P)}u.unstable_IdlePriority=5,u.unstable_ImmediatePriority=1,u.unstable_LowPriority=4,u.unstable_NormalPriority=3,u.unstable_Profiling=null,u.unstable_UserBlockingPriority=2,u.unstable_cancelCallback=function(R){R.callback=null},u.unstable_forceFrameRate=function(R){0>R||125<R?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Ue=0<R?Math.floor(1e3/R):5},u.unstable_getCurrentPriorityLevel=function(){return w},u.unstable_next=function(R){switch(w){case 1:case 2:case 3:var P=3;break;default:P=w}var J=w;w=P;try{return R()}finally{w=J}},u.unstable_requestPaint=function(){I=!0},u.unstable_runWithPriority=function(R,P){switch(R){case 1:case 2:case 3:case 4:case 5:break;default:R=3}var J=w;w=R;try{return P()}finally{w=J}},u.unstable_scheduleCallback=function(R,P,J){var pe=u.unstable_now();switch(typeof J=="object"&&J!==null?(J=J.delay,J=typeof J=="number"&&0<J?pe+J:pe):J=pe,R){case 1:var be=-1;break;case 2:be=250;break;case 5:be=1073741823;break;case 4:be=1e4;break;default:be=5e3}return be=J+be,R={id:T++,callback:P,priorityLevel:R,startTime:J,expirationTime:be,sortIndex:-1},J>pe?(R.sortIndex=J,d(m,R),b(p)===null&&R===b(m)&&(U?(ue(le),le=-1):U=!0,Je(Se,J-pe))):(R.sortIndex=be,d(p,R),q||O||(q=!0,He||(He=!0,Qe()))),R},u.unstable_shouldYield=Ke,u.unstable_wrapCallback=function(R){var P=w;return function(){var J=w;w=P;try{return R.apply(this,arguments)}finally{w=J}}}})(_o)),_o}var cm;function hh(){return cm||(cm=1,qo.exports=fh()),qo.exports}var Vo={exports:{}},li={};var um;function yh(){if(um)return li;um=1;var u=js();function d(p){var m="https://react.dev/errors/"+p;if(1<arguments.length){m+="?args[]="+encodeURIComponent(arguments[1]);for(var T=2;T<arguments.length;T++)m+="&args[]="+encodeURIComponent(arguments[T])}return"Minified React error #"+p+"; visit "+m+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function b(){}var c={d:{f:b,r:function(){throw Error(d(522))},D:b,C:b,L:b,m:b,X:b,S:b,M:b},p:0,findDOMNode:null},y=Symbol.for("react.portal");function g(p,m,T){var S=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:y,key:S==null?null:""+S,children:p,containerInfo:m,implementation:T}}var j=u.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(p,m){if(p==="font")return"";if(typeof m=="string")return m==="use-credentials"?m:""}return li.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=c,li.createPortal=function(p,m){var T=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!m||m.nodeType!==1&&m.nodeType!==9&&m.nodeType!==11)throw Error(d(299));return g(p,m,null,T)},li.flushSync=function(p){var m=j.T,T=c.p;try{if(j.T=null,c.p=2,p)return p()}finally{j.T=m,c.p=T,c.d.f()}},li.preconnect=function(p,m){typeof p=="string"&&(m?(m=m.crossOrigin,m=typeof m=="string"?m==="use-credentials"?m:"":void 0):m=null,c.d.C(p,m))},li.prefetchDNS=function(p){typeof p=="string"&&c.d.D(p)},li.preinit=function(p,m){if(typeof p=="string"&&m&&typeof m.as=="string"){var T=m.as,S=h(T,m.crossOrigin),w=typeof m.integrity=="string"?m.integrity:void 0,O=typeof m.fetchPriority=="string"?m.fetchPriority:void 0;T==="style"?c.d.S(p,typeof m.precedence=="string"?m.precedence:void 0,{crossOrigin:S,integrity:w,fetchPriority:O}):T==="script"&&c.d.X(p,{crossOrigin:S,integrity:w,fetchPriority:O,nonce:typeof m.nonce=="string"?m.nonce:void 0})}},li.preinitModule=function(p,m){if(typeof p=="string")if(typeof m=="object"&&m!==null){if(m.as==null||m.as==="script"){var T=h(m.as,m.crossOrigin);c.d.M(p,{crossOrigin:T,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0})}}else m==null&&c.d.M(p)},li.preload=function(p,m){if(typeof p=="string"&&typeof m=="object"&&m!==null&&typeof m.as=="string"){var T=m.as,S=h(T,m.crossOrigin);c.d.L(p,T,{crossOrigin:S,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,type:typeof m.type=="string"?m.type:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0,referrerPolicy:typeof m.referrerPolicy=="string"?m.referrerPolicy:void 0,imageSrcSet:typeof m.imageSrcSet=="string"?m.imageSrcSet:void 0,imageSizes:typeof m.imageSizes=="string"?m.imageSizes:void 0,media:typeof m.media=="string"?m.media:void 0})}},li.preloadModule=function(p,m){if(typeof p=="string")if(m){var T=h(m.as,m.crossOrigin);c.d.m(p,{as:typeof m.as=="string"&&m.as!=="script"?m.as:void 0,crossOrigin:T,integrity:typeof m.integrity=="string"?m.integrity:void 0})}else c.d.m(p)},li.requestFormReset=function(p){c.d.r(p)},li.unstable_batchedUpdates=function(p,m){return p(m)},li.useFormState=function(p,m,T){return j.H.useFormState(p,m,T)},li.useFormStatus=function(){return j.H.useHostTransitionStatus()},li.version="19.2.0",li}var dm;function bh(){if(dm)return Vo.exports;dm=1;function u(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(u)}catch(d){console.error(d)}}return u(),Vo.exports=yh(),Vo.exports}var gm;function xh(){if(gm)return Fn;gm=1;var u=hh(),d=js(),b=bh();function c(e){var i="https://react.dev/errors/"+e;if(1<arguments.length){i+="?args[]="+encodeURIComponent(arguments[1]);for(var t=2;t<arguments.length;t++)i+="&args[]="+encodeURIComponent(arguments[t])}return"Minified React error #"+e+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function y(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function g(e){var i=e,t=e;if(e.alternate)for(;i.return;)i=i.return;else{e=i;do i=e,(i.flags&4098)!==0&&(t=i.return),e=i.return;while(e)}return i.tag===3?t:null}function j(e){if(e.tag===13){var i=e.memoizedState;if(i===null&&(e=e.alternate,e!==null&&(i=e.memoizedState)),i!==null)return i.dehydrated}return null}function h(e){if(e.tag===31){var i=e.memoizedState;if(i===null&&(e=e.alternate,e!==null&&(i=e.memoizedState)),i!==null)return i.dehydrated}return null}function p(e){if(g(e)!==e)throw Error(c(188))}function m(e){var i=e.alternate;if(!i){if(i=g(e),i===null)throw Error(c(188));return i!==e?null:e}for(var t=e,a=i;;){var l=t.return;if(l===null)break;var s=l.alternate;if(s===null){if(a=l.return,a!==null){t=a;continue}break}if(l.child===s.child){for(s=l.child;s;){if(s===t)return p(l),e;if(s===a)return p(l),i;s=s.sibling}throw Error(c(188))}if(t.return!==a.return)t=l,a=s;else{for(var r=!1,o=l.child;o;){if(o===t){r=!0,t=l,a=s;break}if(o===a){r=!0,a=l,t=s;break}o=o.sibling}if(!r){for(o=s.child;o;){if(o===t){r=!0,t=s,a=l;break}if(o===a){r=!0,a=s,t=l;break}o=o.sibling}if(!r)throw Error(c(189))}}if(t.alternate!==a)throw Error(c(190))}if(t.tag!==3)throw Error(c(188));return t.stateNode.current===t?e:i}function T(e){var i=e.tag;if(i===5||i===26||i===27||i===6)return e;for(e=e.child;e!==null;){if(i=T(e),i!==null)return i;e=e.sibling}return null}var S=Object.assign,w=Symbol.for("react.element"),O=Symbol.for("react.transitional.element"),q=Symbol.for("react.portal"),U=Symbol.for("react.fragment"),I=Symbol.for("react.strict_mode"),_=Symbol.for("react.profiler"),ue=Symbol.for("react.consumer"),ae=Symbol.for("react.context"),Q=Symbol.for("react.forward_ref"),Se=Symbol.for("react.suspense"),He=Symbol.for("react.suspense_list"),le=Symbol.for("react.memo"),Ue=Symbol.for("react.lazy"),oi=Symbol.for("react.activity"),Ke=Symbol.for("react.memo_cache_sentinel"),si=Symbol.iterator;function Qe(e){return e===null||typeof e!="object"?null:(e=si&&e[si]||e["@@iterator"],typeof e=="function"?e:null)}var Ee=Symbol.for("react.client.reference");function ye(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Ee?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case U:return"Fragment";case _:return"Profiler";case I:return"StrictMode";case Se:return"Suspense";case He:return"SuspenseList";case oi:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case q:return"Portal";case ae:return e.displayName||"Context";case ue:return(e._context.displayName||"Context")+".Consumer";case Q:var i=e.render;return e=e.displayName,e||(e=i.displayName||i.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case le:return i=e.displayName||null,i!==null?i:ye(e.type)||"Memo";case Ue:i=e._payload,e=e._init;try{return ye(e(i))}catch{}}return null}var Je=Array.isArray,R=d.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,P=b.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,J={pending:!1,data:null,method:null,action:null},pe=[],be=-1;function v(e){return{current:e}}function G(e){0>be||(e.current=pe[be],pe[be]=null,be--)}function H(e,i){be++,pe[be]=e.current,e.current=i}var F=v(null),B=v(null),V=v(null),Z=v(null);function ee(e,i){switch(H(V,i),H(B,e),H(F,null),i.nodeType){case 9:case 11:e=(e=i.documentElement)&&(e=e.namespaceURI)?Cg(e):0;break;default:if(e=i.tagName,i=i.namespaceURI)i=Cg(i),e=Tg(i,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}G(F),H(F,e)}function se(){G(F),G(B),G(V)}function yi(e){e.memoizedState!==null&&H(Z,e);var i=F.current,t=Tg(i,e.type);i!==t&&(H(B,e),H(F,t))}function Wi(e){B.current===e&&(G(F),G(B)),Z.current===e&&(G(Z),Hn._currentValue=J)}var Y,Ce;function Me(e){if(Y===void 0)try{throw Error()}catch(t){var i=t.stack.trim().match(/\n( *(at )?)/);Y=i&&i[1]||"",Ce=-1<t.stack.indexOf(`
    at`)?" (<anonymous>)":-1<t.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Y+e+Ce}var Ei=!1;function Ri(e,i){if(!e||Ei)return"";Ei=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var a={DetermineComponentFrameRoot:function(){try{if(i){var z=function(){throw Error()};if(Object.defineProperty(z.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(z,[])}catch(E){var C=E}Reflect.construct(e,[],z)}else{try{z.call()}catch(E){C=E}e.call(z.prototype)}}else{try{throw Error()}catch(E){C=E}(z=e())&&typeof z.catch=="function"&&z.catch(function(){})}}catch(E){if(E&&C&&typeof E.stack=="string")return[E.stack,C.stack]}return[null,null]}};a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var l=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name");l&&l.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var s=a.DetermineComponentFrameRoot(),r=s[0],o=s[1];if(r&&o){var f=r.split(`
`),N=o.split(`
`);for(l=a=0;a<f.length&&!f[a].includes("DetermineComponentFrameRoot");)a++;for(;l<N.length&&!N[l].includes("DetermineComponentFrameRoot");)l++;if(a===f.length||l===N.length)for(a=f.length-1,l=N.length-1;1<=a&&0<=l&&f[a]!==N[l];)l--;for(;1<=a&&0<=l;a--,l--)if(f[a]!==N[l]){if(a!==1||l!==1)do if(a--,l--,0>l||f[a]!==N[l]){var D=`
`+f[a].replace(" at new "," at ");return e.displayName&&D.includes("<anonymous>")&&(D=D.replace("<anonymous>",e.displayName)),D}while(1<=a&&0<=l);break}}}finally{Ei=!1,Error.prepareStackTrace=t}return(t=e?e.displayName||e.name:"")?Me(t):""}function Ui(e,i){switch(e.tag){case 26:case 27:case 5:return Me(e.type);case 16:return Me("Lazy");case 13:return e.child!==i&&i!==null?Me("Suspense Fallback"):Me("Suspense");case 19:return Me("SuspenseList");case 0:case 15:return Ri(e.type,!1);case 11:return Ri(e.type.render,!1);case 1:return Ri(e.type,!0);case 31:return Me("Activity");default:return""}}function Xa(e){try{var i="",t=null;do i+=Ui(e,t),t=e,e=e.return;while(e);return i}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}var ni=Object.prototype.hasOwnProperty,qt=u.unstable_scheduleCallback,As=u.unstable_cancelCallback,_m=u.unstable_shouldYield,Vm=u.unstable_requestPaint,bi=u.unstable_now,Fm=u.unstable_getCurrentPriorityLevel,lc=u.unstable_ImmediatePriority,sc=u.unstable_UserBlockingPriority,$n=u.unstable_NormalPriority,Wm=u.unstable_LowPriority,rc=u.unstable_IdlePriority,Ym=u.log,Km=u.unstable_setDisableYieldValue,Za=null,xi=null;function yt(e){if(typeof Ym=="function"&&Km(e),xi&&typeof xi.setStrictMode=="function")try{xi.setStrictMode(Za,e)}catch{}}var vi=Math.clz32?Math.clz32:Zm,Qm=Math.log,Xm=Math.LN2;function Zm(e){return e>>>=0,e===0?32:31-(Qm(e)/Xm|0)|0}var el=256,il=262144,tl=4194304;function _t(e){var i=e&42;if(i!==0)return i;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function al(e,i,t){var a=e.pendingLanes;if(a===0)return 0;var l=0,s=e.suspendedLanes,r=e.pingedLanes;e=e.warmLanes;var o=a&134217727;return o!==0?(a=o&~s,a!==0?l=_t(a):(r&=o,r!==0?l=_t(r):t||(t=o&~e,t!==0&&(l=_t(t))))):(o=a&~s,o!==0?l=_t(o):r!==0?l=_t(r):t||(t=a&~e,t!==0&&(l=_t(t)))),l===0?0:i!==0&&i!==l&&(i&s)===0&&(s=l&-l,t=i&-i,s>=t||s===32&&(t&4194048)!==0)?i:l}function Ja(e,i){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&i)===0}function Jm(e,i){switch(e){case 1:case 2:case 4:case 8:case 64:return i+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function oc(){var e=tl;return tl<<=1,(tl&62914560)===0&&(tl=4194304),e}function Ns(e){for(var i=[],t=0;31>t;t++)i.push(e);return i}function $a(e,i){e.pendingLanes|=i,i!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function $m(e,i,t,a,l,s){var r=e.pendingLanes;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=t,e.entangledLanes&=t,e.errorRecoveryDisabledLanes&=t,e.shellSuspendCounter=0;var o=e.entanglements,f=e.expirationTimes,N=e.hiddenUpdates;for(t=r&~t;0<t;){var D=31-vi(t),z=1<<D;o[D]=0,f[D]=-1;var C=N[D];if(C!==null)for(N[D]=null,D=0;D<C.length;D++){var E=C[D];E!==null&&(E.lane&=-536870913)}t&=~z}a!==0&&cc(e,a,0),s!==0&&l===0&&e.tag!==0&&(e.suspendedLanes|=s&~(r&~i))}function cc(e,i,t){e.pendingLanes|=i,e.suspendedLanes&=~i;var a=31-vi(i);e.entangledLanes|=i,e.entanglements[a]=e.entanglements[a]|1073741824|t&261930}function uc(e,i){var t=e.entangledLanes|=i;for(e=e.entanglements;t;){var a=31-vi(t),l=1<<a;l&i|e[a]&i&&(e[a]|=i),t&=~l}}function dc(e,i){var t=i&-i;return t=(t&42)!==0?1:Cs(t),(t&(e.suspendedLanes|i))!==0?0:t}function Cs(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Ts(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function gc(){var e=P.p;return e!==0?e:(e=window.event,e===void 0?32:Zg(e.type))}function mc(e,i){var t=P.p;try{return P.p=e,i()}finally{P.p=t}}var bt=Math.random().toString(36).slice(2),$e="__reactFiber$"+bt,ci="__reactProps$"+bt,ca="__reactContainer$"+bt,Es="__reactEvents$"+bt,ep="__reactListeners$"+bt,ip="__reactHandles$"+bt,pc="__reactResources$"+bt,en="__reactMarker$"+bt;function Rs(e){delete e[$e],delete e[ci],delete e[Es],delete e[ep],delete e[ip]}function ua(e){var i=e[$e];if(i)return i;for(var t=e.parentNode;t;){if(i=t[ca]||t[$e]){if(t=i.alternate,i.child!==null||t!==null&&t.child!==null)for(e=Og(e);e!==null;){if(t=e[$e])return t;e=Og(e)}return i}e=t,t=e.parentNode}return null}function da(e){if(e=e[$e]||e[ca]){var i=e.tag;if(i===5||i===6||i===13||i===31||i===26||i===27||i===3)return e}return null}function tn(e){var i=e.tag;if(i===5||i===26||i===27||i===6)return e.stateNode;throw Error(c(33))}function ga(e){var i=e[pc];return i||(i=e[pc]={hoistableStyles:new Map,hoistableScripts:new Map}),i}function Xe(e){e[en]=!0}var fc=new Set,hc={};function Vt(e,i){ma(e,i),ma(e+"Capture",i)}function ma(e,i){for(hc[e]=i,e=0;e<i.length;e++)fc.add(i[e])}var tp=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),yc={},bc={};function ap(e){return ni.call(bc,e)?!0:ni.call(yc,e)?!1:tp.test(e)?bc[e]=!0:(yc[e]=!0,!1)}function nl(e,i,t){if(ap(i))if(t===null)e.removeAttribute(i);else{switch(typeof t){case"undefined":case"function":case"symbol":e.removeAttribute(i);return;case"boolean":var a=i.toLowerCase().slice(0,5);if(a!=="data-"&&a!=="aria-"){e.removeAttribute(i);return}}e.setAttribute(i,""+t)}}function ll(e,i,t){if(t===null)e.removeAttribute(i);else{switch(typeof t){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(i);return}e.setAttribute(i,""+t)}}function Zi(e,i,t,a){if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttributeNS(i,t,""+a)}}function Di(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function xc(e){var i=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function np(e,i,t){var a=Object.getOwnPropertyDescriptor(e.constructor.prototype,i);if(!e.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var l=a.get,s=a.set;return Object.defineProperty(e,i,{configurable:!0,get:function(){return l.call(this)},set:function(r){t=""+r,s.call(this,r)}}),Object.defineProperty(e,i,{enumerable:a.enumerable}),{getValue:function(){return t},setValue:function(r){t=""+r},stopTracking:function(){e._valueTracker=null,delete e[i]}}}}function Ds(e){if(!e._valueTracker){var i=xc(e)?"checked":"value";e._valueTracker=np(e,i,""+e[i])}}function vc(e){if(!e)return!1;var i=e._valueTracker;if(!i)return!0;var t=i.getValue(),a="";return e&&(a=xc(e)?e.checked?"true":"false":e.value),e=a,e!==t?(i.setValue(e),!0):!1}function sl(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var lp=/[\n"\\]/g;function Mi(e){return e.replace(lp,function(i){return"\\"+i.charCodeAt(0).toString(16)+" "})}function Ms(e,i,t,a,l,s,r,o){e.name="",r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"?e.type=r:e.removeAttribute("type"),i!=null?r==="number"?(i===0&&e.value===""||e.value!=i)&&(e.value=""+Di(i)):e.value!==""+Di(i)&&(e.value=""+Di(i)):r!=="submit"&&r!=="reset"||e.removeAttribute("value"),i!=null?Gs(e,r,Di(i)):t!=null?Gs(e,r,Di(t)):a!=null&&e.removeAttribute("value"),l==null&&s!=null&&(e.defaultChecked=!!s),l!=null&&(e.checked=l&&typeof l!="function"&&typeof l!="symbol"),o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?e.name=""+Di(o):e.removeAttribute("name")}function jc(e,i,t,a,l,s,r,o){if(s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"&&(e.type=s),i!=null||t!=null){if(!(s!=="submit"&&s!=="reset"||i!=null)){Ds(e);return}t=t!=null?""+Di(t):"",i=i!=null?""+Di(i):t,o||i===e.value||(e.value=i),e.defaultValue=i}a=a??l,a=typeof a!="function"&&typeof a!="symbol"&&!!a,e.checked=o?e.checked:!!a,e.defaultChecked=!!a,r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(e.name=r),Ds(e)}function Gs(e,i,t){i==="number"&&sl(e.ownerDocument)===e||e.defaultValue===""+t||(e.defaultValue=""+t)}function pa(e,i,t,a){if(e=e.options,i){i={};for(var l=0;l<t.length;l++)i["$"+t[l]]=!0;for(t=0;t<e.length;t++)l=i.hasOwnProperty("$"+e[t].value),e[t].selected!==l&&(e[t].selected=l),l&&a&&(e[t].defaultSelected=!0)}else{for(t=""+Di(t),i=null,l=0;l<e.length;l++){if(e[l].value===t){e[l].selected=!0,a&&(e[l].defaultSelected=!0);return}i!==null||e[l].disabled||(i=e[l])}i!==null&&(i.selected=!0)}}function Sc(e,i,t){if(i!=null&&(i=""+Di(i),i!==e.value&&(e.value=i),t==null)){e.defaultValue!==i&&(e.defaultValue=i);return}e.defaultValue=t!=null?""+Di(t):""}function kc(e,i,t,a){if(i==null){if(a!=null){if(t!=null)throw Error(c(92));if(Je(a)){if(1<a.length)throw Error(c(93));a=a[0]}t=a}t==null&&(t=""),i=t}t=Di(i),e.defaultValue=t,a=e.textContent,a===t&&a!==""&&a!==null&&(e.value=a),Ds(e)}function fa(e,i){if(i){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=i;return}}e.textContent=i}var sp=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function wc(e,i,t){var a=i.indexOf("--")===0;t==null||typeof t=="boolean"||t===""?a?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="":a?e.setProperty(i,t):typeof t!="number"||t===0||sp.has(i)?i==="float"?e.cssFloat=t:e[i]=(""+t).trim():e[i]=t+"px"}function Ac(e,i,t){if(i!=null&&typeof i!="object")throw Error(c(62));if(e=e.style,t!=null){for(var a in t)!t.hasOwnProperty(a)||i!=null&&i.hasOwnProperty(a)||(a.indexOf("--")===0?e.setProperty(a,""):a==="float"?e.cssFloat="":e[a]="");for(var l in i)a=i[l],i.hasOwnProperty(l)&&t[l]!==a&&wc(e,l,a)}else for(var s in i)i.hasOwnProperty(s)&&wc(e,s,i[s])}function zs(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var rp=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),op=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function rl(e){return op.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Ji(){}var Os=null;function Bs(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ha=null,ya=null;function Nc(e){var i=da(e);if(i&&(e=i.stateNode)){var t=e[ci]||null;e:switch(e=i.stateNode,i.type){case"input":if(Ms(e,t.value,t.defaultValue,t.defaultValue,t.checked,t.defaultChecked,t.type,t.name),i=t.name,t.type==="radio"&&i!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll('input[name="'+Mi(""+i)+'"][type="radio"]'),i=0;i<t.length;i++){var a=t[i];if(a!==e&&a.form===e.form){var l=a[ci]||null;if(!l)throw Error(c(90));Ms(a,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name)}}for(i=0;i<t.length;i++)a=t[i],a.form===e.form&&vc(a)}break e;case"textarea":Sc(e,t.value,t.defaultValue);break e;case"select":i=t.value,i!=null&&pa(e,!!t.multiple,i,!1)}}}var Ls=!1;function Cc(e,i,t){if(Ls)return e(i,t);Ls=!0;try{var a=e(i);return a}finally{if(Ls=!1,(ha!==null||ya!==null)&&(Kl(),ha&&(i=ha,e=ya,ya=ha=null,Nc(i),e)))for(i=0;i<e.length;i++)Nc(e[i])}}function an(e,i){var t=e.stateNode;if(t===null)return null;var a=t[ci]||null;if(a===null)return null;t=a[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(c(231,i,typeof t));return t}var $i=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ps=!1;if($i)try{var nn={};Object.defineProperty(nn,"passive",{get:function(){Ps=!0}}),window.addEventListener("test",nn,nn),window.removeEventListener("test",nn,nn)}catch{Ps=!1}var xt=null,Is=null,ol=null;function Tc(){if(ol)return ol;var e,i=Is,t=i.length,a,l="value"in xt?xt.value:xt.textContent,s=l.length;for(e=0;e<t&&i[e]===l[e];e++);var r=t-e;for(a=1;a<=r&&i[t-a]===l[s-a];a++);return ol=l.slice(e,1<a?1-a:void 0)}function cl(e){var i=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&i===13&&(e=13)):e=i,e===10&&(e=13),32<=e||e===13?e:0}function ul(){return!0}function Ec(){return!1}function ui(e){function i(t,a,l,s,r){this._reactName=t,this._targetInst=l,this.type=a,this.nativeEvent=s,this.target=r,this.currentTarget=null;for(var o in e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(s):s[o]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?ul:Ec,this.isPropagationStopped=Ec,this}return S(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=ul)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=ul)},persist:function(){},isPersistent:ul}),i}var Ft={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},dl=ui(Ft),ln=S({},Ft,{view:0,detail:0}),cp=ui(ln),Hs,Us,sn,gl=S({},ln,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:_s,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==sn&&(sn&&e.type==="mousemove"?(Hs=e.screenX-sn.screenX,Us=e.screenY-sn.screenY):Us=Hs=0,sn=e),Hs)},movementY:function(e){return"movementY"in e?e.movementY:Us}}),Rc=ui(gl),up=S({},gl,{dataTransfer:0}),dp=ui(up),gp=S({},ln,{relatedTarget:0}),qs=ui(gp),mp=S({},Ft,{animationName:0,elapsedTime:0,pseudoElement:0}),pp=ui(mp),fp=S({},Ft,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),hp=ui(fp),yp=S({},Ft,{data:0}),Dc=ui(yp),bp={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},xp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},vp={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function jp(e){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(e):(e=vp[e])?!!i[e]:!1}function _s(){return jp}var Sp=S({},ln,{key:function(e){if(e.key){var i=bp[e.key]||e.key;if(i!=="Unidentified")return i}return e.type==="keypress"?(e=cl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?xp[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:_s,charCode:function(e){return e.type==="keypress"?cl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?cl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),kp=ui(Sp),wp=S({},gl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Mc=ui(wp),Ap=S({},ln,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:_s}),Np=ui(Ap),Cp=S({},Ft,{propertyName:0,elapsedTime:0,pseudoElement:0}),Tp=ui(Cp),Ep=S({},gl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Rp=ui(Ep),Dp=S({},Ft,{newState:0,oldState:0}),Mp=ui(Dp),Gp=[9,13,27,32],Vs=$i&&"CompositionEvent"in window,rn=null;$i&&"documentMode"in document&&(rn=document.documentMode);var zp=$i&&"TextEvent"in window&&!rn,Gc=$i&&(!Vs||rn&&8<rn&&11>=rn),zc=" ",Oc=!1;function Bc(e,i){switch(e){case"keyup":return Gp.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Lc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ba=!1;function Op(e,i){switch(e){case"compositionend":return Lc(i);case"keypress":return i.which!==32?null:(Oc=!0,zc);case"textInput":return e=i.data,e===zc&&Oc?null:e;default:return null}}function Bp(e,i){if(ba)return e==="compositionend"||!Vs&&Bc(e,i)?(e=Tc(),ol=Is=xt=null,ba=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Gc&&i.locale!=="ko"?null:i.data;default:return null}}var Lp={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Pc(e){var i=e&&e.nodeName&&e.nodeName.toLowerCase();return i==="input"?!!Lp[e.type]:i==="textarea"}function Ic(e,i,t,a){ha?ya?ya.push(a):ya=[a]:ha=a,i=is(i,"onChange"),0<i.length&&(t=new dl("onChange","change",null,t,a),e.push({event:t,listeners:i}))}var on=null,cn=null;function Pp(e){jg(e,0)}function ml(e){var i=tn(e);if(vc(i))return e}function Hc(e,i){if(e==="change")return i}var Uc=!1;if($i){var Fs;if($i){var Ws="oninput"in document;if(!Ws){var qc=document.createElement("div");qc.setAttribute("oninput","return;"),Ws=typeof qc.oninput=="function"}Fs=Ws}else Fs=!1;Uc=Fs&&(!document.documentMode||9<document.documentMode)}function _c(){on&&(on.detachEvent("onpropertychange",Vc),cn=on=null)}function Vc(e){if(e.propertyName==="value"&&ml(cn)){var i=[];Ic(i,cn,e,Bs(e)),Cc(Pp,i)}}function Ip(e,i,t){e==="focusin"?(_c(),on=i,cn=t,on.attachEvent("onpropertychange",Vc)):e==="focusout"&&_c()}function Hp(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ml(cn)}function Up(e,i){if(e==="click")return ml(i)}function qp(e,i){if(e==="input"||e==="change")return ml(i)}function _p(e,i){return e===i&&(e!==0||1/e===1/i)||e!==e&&i!==i}var ji=typeof Object.is=="function"?Object.is:_p;function un(e,i){if(ji(e,i))return!0;if(typeof e!="object"||e===null||typeof i!="object"||i===null)return!1;var t=Object.keys(e),a=Object.keys(i);if(t.length!==a.length)return!1;for(a=0;a<t.length;a++){var l=t[a];if(!ni.call(i,l)||!ji(e[l],i[l]))return!1}return!0}function Fc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Wc(e,i){var t=Fc(e);e=0;for(var a;t;){if(t.nodeType===3){if(a=e+t.textContent.length,e<=i&&a>=i)return{node:t,offset:i-e};e=a}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=Fc(t)}}function Yc(e,i){return e&&i?e===i?!0:e&&e.nodeType===3?!1:i&&i.nodeType===3?Yc(e,i.parentNode):"contains"in e?e.contains(i):e.compareDocumentPosition?!!(e.compareDocumentPosition(i)&16):!1:!1}function Kc(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var i=sl(e.document);i instanceof e.HTMLIFrameElement;){try{var t=typeof i.contentWindow.location.href=="string"}catch{t=!1}if(t)e=i.contentWindow;else break;i=sl(e.document)}return i}function Ys(e){var i=e&&e.nodeName&&e.nodeName.toLowerCase();return i&&(i==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||i==="textarea"||e.contentEditable==="true")}var Vp=$i&&"documentMode"in document&&11>=document.documentMode,xa=null,Ks=null,dn=null,Qs=!1;function Qc(e,i,t){var a=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;Qs||xa==null||xa!==sl(a)||(a=xa,"selectionStart"in a&&Ys(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),dn&&un(dn,a)||(dn=a,a=is(Ks,"onSelect"),0<a.length&&(i=new dl("onSelect","select",null,i,t),e.push({event:i,listeners:a}),i.target=xa)))}function Wt(e,i){var t={};return t[e.toLowerCase()]=i.toLowerCase(),t["Webkit"+e]="webkit"+i,t["Moz"+e]="moz"+i,t}var va={animationend:Wt("Animation","AnimationEnd"),animationiteration:Wt("Animation","AnimationIteration"),animationstart:Wt("Animation","AnimationStart"),transitionrun:Wt("Transition","TransitionRun"),transitionstart:Wt("Transition","TransitionStart"),transitioncancel:Wt("Transition","TransitionCancel"),transitionend:Wt("Transition","TransitionEnd")},Xs={},Xc={};$i&&(Xc=document.createElement("div").style,"AnimationEvent"in window||(delete va.animationend.animation,delete va.animationiteration.animation,delete va.animationstart.animation),"TransitionEvent"in window||delete va.transitionend.transition);function Yt(e){if(Xs[e])return Xs[e];if(!va[e])return e;var i=va[e],t;for(t in i)if(i.hasOwnProperty(t)&&t in Xc)return Xs[e]=i[t];return e}var Zc=Yt("animationend"),Jc=Yt("animationiteration"),$c=Yt("animationstart"),Fp=Yt("transitionrun"),Wp=Yt("transitionstart"),Yp=Yt("transitioncancel"),eu=Yt("transitionend"),iu=new Map,Zs="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Zs.push("scrollEnd");function qi(e,i){iu.set(e,i),Vt(i,[e])}var pl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var i=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(i))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Gi=[],ja=0,Js=0;function fl(){for(var e=ja,i=Js=ja=0;i<e;){var t=Gi[i];Gi[i++]=null;var a=Gi[i];Gi[i++]=null;var l=Gi[i];Gi[i++]=null;var s=Gi[i];if(Gi[i++]=null,a!==null&&l!==null){var r=a.pending;r===null?l.next=l:(l.next=r.next,r.next=l),a.pending=l}s!==0&&tu(t,l,s)}}function hl(e,i,t,a){Gi[ja++]=e,Gi[ja++]=i,Gi[ja++]=t,Gi[ja++]=a,Js|=a,e.lanes|=a,e=e.alternate,e!==null&&(e.lanes|=a)}function $s(e,i,t,a){return hl(e,i,t,a),yl(e)}function Kt(e,i){return hl(e,null,null,i),yl(e)}function tu(e,i,t){e.lanes|=t;var a=e.alternate;a!==null&&(a.lanes|=t);for(var l=!1,s=e.return;s!==null;)s.childLanes|=t,a=s.alternate,a!==null&&(a.childLanes|=t),s.tag===22&&(e=s.stateNode,e===null||e._visibility&1||(l=!0)),e=s,s=s.return;return e.tag===3?(s=e.stateNode,l&&i!==null&&(l=31-vi(t),e=s.hiddenUpdates,a=e[l],a===null?e[l]=[i]:a.push(i),i.lane=t|536870912),s):null}function yl(e){if(50<Gn)throw Gn=0,oo=null,Error(c(185));for(var i=e.return;i!==null;)e=i,i=e.return;return e.tag===3?e.stateNode:null}var Sa={};function Kp(e,i,t,a){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Si(e,i,t,a){return new Kp(e,i,t,a)}function er(e){return e=e.prototype,!(!e||!e.isReactComponent)}function et(e,i){var t=e.alternate;return t===null?(t=Si(e.tag,i,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=i,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&65011712,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,i=e.dependencies,t.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t.refCleanup=e.refCleanup,t}function au(e,i){e.flags&=65011714;var t=e.alternate;return t===null?(e.childLanes=0,e.lanes=i,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=t.childLanes,e.lanes=t.lanes,e.child=t.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=t.memoizedProps,e.memoizedState=t.memoizedState,e.updateQueue=t.updateQueue,e.type=t.type,i=t.dependencies,e.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),e}function bl(e,i,t,a,l,s){var r=0;if(a=e,typeof e=="function")er(e)&&(r=1);else if(typeof e=="string")r=eh(e,t,F.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case oi:return e=Si(31,t,i,l),e.elementType=oi,e.lanes=s,e;case U:return Qt(t.children,l,s,i);case I:r=8,l|=24;break;case _:return e=Si(12,t,i,l|2),e.elementType=_,e.lanes=s,e;case Se:return e=Si(13,t,i,l),e.elementType=Se,e.lanes=s,e;case He:return e=Si(19,t,i,l),e.elementType=He,e.lanes=s,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case ae:r=10;break e;case ue:r=9;break e;case Q:r=11;break e;case le:r=14;break e;case Ue:r=16,a=null;break e}r=29,t=Error(c(130,e===null?"null":typeof e,"")),a=null}return i=Si(r,t,i,l),i.elementType=e,i.type=a,i.lanes=s,i}function Qt(e,i,t,a){return e=Si(7,e,a,i),e.lanes=t,e}function ir(e,i,t){return e=Si(6,e,null,i),e.lanes=t,e}function nu(e){var i=Si(18,null,null,0);return i.stateNode=e,i}function tr(e,i,t){return i=Si(4,e.children!==null?e.children:[],e.key,i),i.lanes=t,i.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},i}var lu=new WeakMap;function zi(e,i){if(typeof e=="object"&&e!==null){var t=lu.get(e);return t!==void 0?t:(i={value:e,source:i,stack:Xa(i)},lu.set(e,i),i)}return{value:e,source:i,stack:Xa(i)}}var ka=[],wa=0,xl=null,gn=0,Oi=[],Bi=0,vt=null,Yi=1,Ki="";function it(e,i){ka[wa++]=gn,ka[wa++]=xl,xl=e,gn=i}function su(e,i,t){Oi[Bi++]=Yi,Oi[Bi++]=Ki,Oi[Bi++]=vt,vt=e;var a=Yi;e=Ki;var l=32-vi(a)-1;a&=~(1<<l),t+=1;var s=32-vi(i)+l;if(30<s){var r=l-l%5;s=(a&(1<<r)-1).toString(32),a>>=r,l-=r,Yi=1<<32-vi(i)+l|t<<l|a,Ki=s+e}else Yi=1<<s|t<<l|a,Ki=e}function ar(e){e.return!==null&&(it(e,1),su(e,1,0))}function nr(e){for(;e===xl;)xl=ka[--wa],ka[wa]=null,gn=ka[--wa],ka[wa]=null;for(;e===vt;)vt=Oi[--Bi],Oi[Bi]=null,Ki=Oi[--Bi],Oi[Bi]=null,Yi=Oi[--Bi],Oi[Bi]=null}function ru(e,i){Oi[Bi++]=Yi,Oi[Bi++]=Ki,Oi[Bi++]=vt,Yi=i.id,Ki=i.overflow,vt=e}var ei=null,Re=null,me=!1,jt=null,Li=!1,lr=Error(c(519));function St(e){var i=Error(c(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw mn(zi(i,e)),lr}function ou(e){var i=e.stateNode,t=e.type,a=e.memoizedProps;switch(i[$e]=e,i[ci]=a,t){case"dialog":ce("cancel",i),ce("close",i);break;case"iframe":case"object":case"embed":ce("load",i);break;case"video":case"audio":for(t=0;t<On.length;t++)ce(On[t],i);break;case"source":ce("error",i);break;case"img":case"image":case"link":ce("error",i),ce("load",i);break;case"details":ce("toggle",i);break;case"input":ce("invalid",i),jc(i,a.value,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name,!0);break;case"select":ce("invalid",i);break;case"textarea":ce("invalid",i),kc(i,a.value,a.defaultValue,a.children)}t=a.children,typeof t!="string"&&typeof t!="number"&&typeof t!="bigint"||i.textContent===""+t||a.suppressHydrationWarning===!0||Ag(i.textContent,t)?(a.popover!=null&&(ce("beforetoggle",i),ce("toggle",i)),a.onScroll!=null&&ce("scroll",i),a.onScrollEnd!=null&&ce("scrollend",i),a.onClick!=null&&(i.onclick=Ji),i=!0):i=!1,i||St(e,!0)}function cu(e){for(ei=e.return;ei;)switch(ei.tag){case 5:case 31:case 13:Li=!1;return;case 27:case 3:Li=!0;return;default:ei=ei.return}}function Aa(e){if(e!==ei)return!1;if(!me)return cu(e),me=!0,!1;var i=e.tag,t;if((t=i!==3&&i!==27)&&((t=i===5)&&(t=e.type,t=!(t!=="form"&&t!=="button")||wo(e.type,e.memoizedProps)),t=!t),t&&Re&&St(e),cu(e),i===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(317));Re=zg(e)}else if(i===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(317));Re=zg(e)}else i===27?(i=Re,Bt(e.type)?(e=Eo,Eo=null,Re=e):Re=i):Re=ei?Ii(e.stateNode.nextSibling):null;return!0}function Xt(){Re=ei=null,me=!1}function sr(){var e=jt;return e!==null&&(pi===null?pi=e:pi.push.apply(pi,e),jt=null),e}function mn(e){jt===null?jt=[e]:jt.push(e)}var rr=v(null),Zt=null,tt=null;function kt(e,i,t){H(rr,i._currentValue),i._currentValue=t}function at(e){e._currentValue=rr.current,G(rr)}function or(e,i,t){for(;e!==null;){var a=e.alternate;if((e.childLanes&i)!==i?(e.childLanes|=i,a!==null&&(a.childLanes|=i)):a!==null&&(a.childLanes&i)!==i&&(a.childLanes|=i),e===t)break;e=e.return}}function cr(e,i,t,a){var l=e.child;for(l!==null&&(l.return=e);l!==null;){var s=l.dependencies;if(s!==null){var r=l.child;s=s.firstContext;e:for(;s!==null;){var o=s;s=l;for(var f=0;f<i.length;f++)if(o.context===i[f]){s.lanes|=t,o=s.alternate,o!==null&&(o.lanes|=t),or(s.return,t,e),a||(r=null);break e}s=o.next}}else if(l.tag===18){if(r=l.return,r===null)throw Error(c(341));r.lanes|=t,s=r.alternate,s!==null&&(s.lanes|=t),or(r,t,e),r=null}else r=l.child;if(r!==null)r.return=l;else for(r=l;r!==null;){if(r===e){r=null;break}if(l=r.sibling,l!==null){l.return=r.return,r=l;break}r=r.return}l=r}}function Na(e,i,t,a){e=null;for(var l=i,s=!1;l!==null;){if(!s){if((l.flags&524288)!==0)s=!0;else if((l.flags&262144)!==0)break}if(l.tag===10){var r=l.alternate;if(r===null)throw Error(c(387));if(r=r.memoizedProps,r!==null){var o=l.type;ji(l.pendingProps.value,r.value)||(e!==null?e.push(o):e=[o])}}else if(l===Z.current){if(r=l.alternate,r===null)throw Error(c(387));r.memoizedState.memoizedState!==l.memoizedState.memoizedState&&(e!==null?e.push(Hn):e=[Hn])}l=l.return}e!==null&&cr(i,e,t,a),i.flags|=262144}function vl(e){for(e=e.firstContext;e!==null;){if(!ji(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Jt(e){Zt=e,tt=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function ii(e){return uu(Zt,e)}function jl(e,i){return Zt===null&&Jt(e),uu(e,i)}function uu(e,i){var t=i._currentValue;if(i={context:i,memoizedValue:t,next:null},tt===null){if(e===null)throw Error(c(308));tt=i,e.dependencies={lanes:0,firstContext:i},e.flags|=524288}else tt=tt.next=i;return t}var Qp=typeof AbortController<"u"?AbortController:function(){var e=[],i=this.signal={aborted:!1,addEventListener:function(t,a){e.push(a)}};this.abort=function(){i.aborted=!0,e.forEach(function(t){return t()})}},Xp=u.unstable_scheduleCallback,Zp=u.unstable_NormalPriority,qe={$$typeof:ae,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ur(){return{controller:new Qp,data:new Map,refCount:0}}function pn(e){e.refCount--,e.refCount===0&&Xp(Zp,function(){e.controller.abort()})}var fn=null,dr=0,Ca=0,Ta=null;function Jp(e,i){if(fn===null){var t=fn=[];dr=0,Ca=fo(),Ta={status:"pending",value:void 0,then:function(a){t.push(a)}}}return dr++,i.then(du,du),i}function du(){if(--dr===0&&fn!==null){Ta!==null&&(Ta.status="fulfilled");var e=fn;fn=null,Ca=0,Ta=null;for(var i=0;i<e.length;i++)(0,e[i])()}}function $p(e,i){var t=[],a={status:"pending",value:null,reason:null,then:function(l){t.push(l)}};return e.then(function(){a.status="fulfilled",a.value=i;for(var l=0;l<t.length;l++)(0,t[l])(i)},function(l){for(a.status="rejected",a.reason=l,l=0;l<t.length;l++)(0,t[l])(void 0)}),a}var gu=R.S;R.S=function(e,i){Qd=bi(),typeof i=="object"&&i!==null&&typeof i.then=="function"&&Jp(e,i),gu!==null&&gu(e,i)};var $t=v(null);function gr(){var e=$t.current;return e!==null?e:Ne.pooledCache}function Sl(e,i){i===null?H($t,$t.current):H($t,i.pool)}function mu(){var e=gr();return e===null?null:{parent:qe._currentValue,pool:e}}var Ea=Error(c(460)),mr=Error(c(474)),kl=Error(c(542)),wl={then:function(){}};function pu(e){return e=e.status,e==="fulfilled"||e==="rejected"}function fu(e,i,t){switch(t=e[t],t===void 0?e.push(i):t!==i&&(i.then(Ji,Ji),i=t),i.status){case"fulfilled":return i.value;case"rejected":throw e=i.reason,yu(e),e;default:if(typeof i.status=="string")i.then(Ji,Ji);else{if(e=Ne,e!==null&&100<e.shellSuspendCounter)throw Error(c(482));e=i,e.status="pending",e.then(function(a){if(i.status==="pending"){var l=i;l.status="fulfilled",l.value=a}},function(a){if(i.status==="pending"){var l=i;l.status="rejected",l.reason=a}})}switch(i.status){case"fulfilled":return i.value;case"rejected":throw e=i.reason,yu(e),e}throw ia=i,Ea}}function ea(e){try{var i=e._init;return i(e._payload)}catch(t){throw t!==null&&typeof t=="object"&&typeof t.then=="function"?(ia=t,Ea):t}}var ia=null;function hu(){if(ia===null)throw Error(c(459));var e=ia;return ia=null,e}function yu(e){if(e===Ea||e===kl)throw Error(c(483))}var Ra=null,hn=0;function Al(e){var i=hn;return hn+=1,Ra===null&&(Ra=[]),fu(Ra,e,i)}function yn(e,i){i=i.props.ref,e.ref=i!==void 0?i:null}function Nl(e,i){throw i.$$typeof===w?Error(c(525)):(e=Object.prototype.toString.call(i),Error(c(31,e==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":e)))}function bu(e){function i(k,x){if(e){var A=k.deletions;A===null?(k.deletions=[x],k.flags|=16):A.push(x)}}function t(k,x){if(!e)return null;for(;x!==null;)i(k,x),x=x.sibling;return null}function a(k){for(var x=new Map;k!==null;)k.key!==null?x.set(k.key,k):x.set(k.index,k),k=k.sibling;return x}function l(k,x){return k=et(k,x),k.index=0,k.sibling=null,k}function s(k,x,A){return k.index=A,e?(A=k.alternate,A!==null?(A=A.index,A<x?(k.flags|=67108866,x):A):(k.flags|=67108866,x)):(k.flags|=1048576,x)}function r(k){return e&&k.alternate===null&&(k.flags|=67108866),k}function o(k,x,A,M){return x===null||x.tag!==6?(x=ir(A,k.mode,M),x.return=k,x):(x=l(x,A),x.return=k,x)}function f(k,x,A,M){var X=A.type;return X===U?D(k,x,A.props.children,M,A.key):x!==null&&(x.elementType===X||typeof X=="object"&&X!==null&&X.$$typeof===Ue&&ea(X)===x.type)?(x=l(x,A.props),yn(x,A),x.return=k,x):(x=bl(A.type,A.key,A.props,null,k.mode,M),yn(x,A),x.return=k,x)}function N(k,x,A,M){return x===null||x.tag!==4||x.stateNode.containerInfo!==A.containerInfo||x.stateNode.implementation!==A.implementation?(x=tr(A,k.mode,M),x.return=k,x):(x=l(x,A.children||[]),x.return=k,x)}function D(k,x,A,M,X){return x===null||x.tag!==7?(x=Qt(A,k.mode,M,X),x.return=k,x):(x=l(x,A),x.return=k,x)}function z(k,x,A){if(typeof x=="string"&&x!==""||typeof x=="number"||typeof x=="bigint")return x=ir(""+x,k.mode,A),x.return=k,x;if(typeof x=="object"&&x!==null){switch(x.$$typeof){case O:return A=bl(x.type,x.key,x.props,null,k.mode,A),yn(A,x),A.return=k,A;case q:return x=tr(x,k.mode,A),x.return=k,x;case Ue:return x=ea(x),z(k,x,A)}if(Je(x)||Qe(x))return x=Qt(x,k.mode,A,null),x.return=k,x;if(typeof x.then=="function")return z(k,Al(x),A);if(x.$$typeof===ae)return z(k,jl(k,x),A);Nl(k,x)}return null}function C(k,x,A,M){var X=x!==null?x.key:null;if(typeof A=="string"&&A!==""||typeof A=="number"||typeof A=="bigint")return X!==null?null:o(k,x,""+A,M);if(typeof A=="object"&&A!==null){switch(A.$$typeof){case O:return A.key===X?f(k,x,A,M):null;case q:return A.key===X?N(k,x,A,M):null;case Ue:return A=ea(A),C(k,x,A,M)}if(Je(A)||Qe(A))return X!==null?null:D(k,x,A,M,null);if(typeof A.then=="function")return C(k,x,Al(A),M);if(A.$$typeof===ae)return C(k,x,jl(k,A),M);Nl(k,A)}return null}function E(k,x,A,M,X){if(typeof M=="string"&&M!==""||typeof M=="number"||typeof M=="bigint")return k=k.get(A)||null,o(x,k,""+M,X);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case O:return k=k.get(M.key===null?A:M.key)||null,f(x,k,M,X);case q:return k=k.get(M.key===null?A:M.key)||null,N(x,k,M,X);case Ue:return M=ea(M),E(k,x,A,M,X)}if(Je(M)||Qe(M))return k=k.get(A)||null,D(x,k,M,X,null);if(typeof M.then=="function")return E(k,x,A,Al(M),X);if(M.$$typeof===ae)return E(k,x,A,jl(x,M),X);Nl(x,M)}return null}function W(k,x,A,M){for(var X=null,fe=null,K=x,re=x=0,ge=null;K!==null&&re<A.length;re++){K.index>re?(ge=K,K=null):ge=K.sibling;var he=C(k,K,A[re],M);if(he===null){K===null&&(K=ge);break}e&&K&&he.alternate===null&&i(k,K),x=s(he,x,re),fe===null?X=he:fe.sibling=he,fe=he,K=ge}if(re===A.length)return t(k,K),me&&it(k,re),X;if(K===null){for(;re<A.length;re++)K=z(k,A[re],M),K!==null&&(x=s(K,x,re),fe===null?X=K:fe.sibling=K,fe=K);return me&&it(k,re),X}for(K=a(K);re<A.length;re++)ge=E(K,k,re,A[re],M),ge!==null&&(e&&ge.alternate!==null&&K.delete(ge.key===null?re:ge.key),x=s(ge,x,re),fe===null?X=ge:fe.sibling=ge,fe=ge);return e&&K.forEach(function(Ut){return i(k,Ut)}),me&&it(k,re),X}function $(k,x,A,M){if(A==null)throw Error(c(151));for(var X=null,fe=null,K=x,re=x=0,ge=null,he=A.next();K!==null&&!he.done;re++,he=A.next()){K.index>re?(ge=K,K=null):ge=K.sibling;var Ut=C(k,K,he.value,M);if(Ut===null){K===null&&(K=ge);break}e&&K&&Ut.alternate===null&&i(k,K),x=s(Ut,x,re),fe===null?X=Ut:fe.sibling=Ut,fe=Ut,K=ge}if(he.done)return t(k,K),me&&it(k,re),X;if(K===null){for(;!he.done;re++,he=A.next())he=z(k,he.value,M),he!==null&&(x=s(he,x,re),fe===null?X=he:fe.sibling=he,fe=he);return me&&it(k,re),X}for(K=a(K);!he.done;re++,he=A.next())he=E(K,k,re,he.value,M),he!==null&&(e&&he.alternate!==null&&K.delete(he.key===null?re:he.key),x=s(he,x,re),fe===null?X=he:fe.sibling=he,fe=he);return e&&K.forEach(function(dh){return i(k,dh)}),me&&it(k,re),X}function Ae(k,x,A,M){if(typeof A=="object"&&A!==null&&A.type===U&&A.key===null&&(A=A.props.children),typeof A=="object"&&A!==null){switch(A.$$typeof){case O:e:{for(var X=A.key;x!==null;){if(x.key===X){if(X=A.type,X===U){if(x.tag===7){t(k,x.sibling),M=l(x,A.props.children),M.return=k,k=M;break e}}else if(x.elementType===X||typeof X=="object"&&X!==null&&X.$$typeof===Ue&&ea(X)===x.type){t(k,x.sibling),M=l(x,A.props),yn(M,A),M.return=k,k=M;break e}t(k,x);break}else i(k,x);x=x.sibling}A.type===U?(M=Qt(A.props.children,k.mode,M,A.key),M.return=k,k=M):(M=bl(A.type,A.key,A.props,null,k.mode,M),yn(M,A),M.return=k,k=M)}return r(k);case q:e:{for(X=A.key;x!==null;){if(x.key===X)if(x.tag===4&&x.stateNode.containerInfo===A.containerInfo&&x.stateNode.implementation===A.implementation){t(k,x.sibling),M=l(x,A.children||[]),M.return=k,k=M;break e}else{t(k,x);break}else i(k,x);x=x.sibling}M=tr(A,k.mode,M),M.return=k,k=M}return r(k);case Ue:return A=ea(A),Ae(k,x,A,M)}if(Je(A))return W(k,x,A,M);if(Qe(A)){if(X=Qe(A),typeof X!="function")throw Error(c(150));return A=X.call(A),$(k,x,A,M)}if(typeof A.then=="function")return Ae(k,x,Al(A),M);if(A.$$typeof===ae)return Ae(k,x,jl(k,A),M);Nl(k,A)}return typeof A=="string"&&A!==""||typeof A=="number"||typeof A=="bigint"?(A=""+A,x!==null&&x.tag===6?(t(k,x.sibling),M=l(x,A),M.return=k,k=M):(t(k,x),M=ir(A,k.mode,M),M.return=k,k=M),r(k)):t(k,x)}return function(k,x,A,M){try{hn=0;var X=Ae(k,x,A,M);return Ra=null,X}catch(K){if(K===Ea||K===kl)throw K;var fe=Si(29,K,null,k.mode);return fe.lanes=M,fe.return=k,fe}finally{}}}var ta=bu(!0),xu=bu(!1),wt=!1;function pr(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function fr(e,i){e=e.updateQueue,i.updateQueue===e&&(i.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function At(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Nt(e,i,t){var a=e.updateQueue;if(a===null)return null;if(a=a.shared,(xe&2)!==0){var l=a.pending;return l===null?i.next=i:(i.next=l.next,l.next=i),a.pending=i,i=yl(e),tu(e,null,t),i}return hl(e,a,i,t),yl(e)}function bn(e,i,t){if(i=i.updateQueue,i!==null&&(i=i.shared,(t&4194048)!==0)){var a=i.lanes;a&=e.pendingLanes,t|=a,i.lanes=t,uc(e,t)}}function hr(e,i){var t=e.updateQueue,a=e.alternate;if(a!==null&&(a=a.updateQueue,t===a)){var l=null,s=null;if(t=t.firstBaseUpdate,t!==null){do{var r={lane:t.lane,tag:t.tag,payload:t.payload,callback:null,next:null};s===null?l=s=r:s=s.next=r,t=t.next}while(t!==null);s===null?l=s=i:s=s.next=i}else l=s=i;t={baseState:a.baseState,firstBaseUpdate:l,lastBaseUpdate:s,shared:a.shared,callbacks:a.callbacks},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=i:e.next=i,t.lastBaseUpdate=i}var yr=!1;function xn(){if(yr){var e=Ta;if(e!==null)throw e}}function vn(e,i,t,a){yr=!1;var l=e.updateQueue;wt=!1;var s=l.firstBaseUpdate,r=l.lastBaseUpdate,o=l.shared.pending;if(o!==null){l.shared.pending=null;var f=o,N=f.next;f.next=null,r===null?s=N:r.next=N,r=f;var D=e.alternate;D!==null&&(D=D.updateQueue,o=D.lastBaseUpdate,o!==r&&(o===null?D.firstBaseUpdate=N:o.next=N,D.lastBaseUpdate=f))}if(s!==null){var z=l.baseState;r=0,D=N=f=null,o=s;do{var C=o.lane&-536870913,E=C!==o.lane;if(E?(de&C)===C:(a&C)===C){C!==0&&C===Ca&&(yr=!0),D!==null&&(D=D.next={lane:0,tag:o.tag,payload:o.payload,callback:null,next:null});e:{var W=e,$=o;C=i;var Ae=t;switch($.tag){case 1:if(W=$.payload,typeof W=="function"){z=W.call(Ae,z,C);break e}z=W;break e;case 3:W.flags=W.flags&-65537|128;case 0:if(W=$.payload,C=typeof W=="function"?W.call(Ae,z,C):W,C==null)break e;z=S({},z,C);break e;case 2:wt=!0}}C=o.callback,C!==null&&(e.flags|=64,E&&(e.flags|=8192),E=l.callbacks,E===null?l.callbacks=[C]:E.push(C))}else E={lane:C,tag:o.tag,payload:o.payload,callback:o.callback,next:null},D===null?(N=D=E,f=z):D=D.next=E,r|=C;if(o=o.next,o===null){if(o=l.shared.pending,o===null)break;E=o,o=E.next,E.next=null,l.lastBaseUpdate=E,l.shared.pending=null}}while(!0);D===null&&(f=z),l.baseState=f,l.firstBaseUpdate=N,l.lastBaseUpdate=D,s===null&&(l.shared.lanes=0),Dt|=r,e.lanes=r,e.memoizedState=z}}function vu(e,i){if(typeof e!="function")throw Error(c(191,e));e.call(i)}function ju(e,i){var t=e.callbacks;if(t!==null)for(e.callbacks=null,e=0;e<t.length;e++)vu(t[e],i)}var Da=v(null),Cl=v(0);function Su(e,i){e=gt,H(Cl,e),H(Da,i),gt=e|i.baseLanes}function br(){H(Cl,gt),H(Da,Da.current)}function xr(){gt=Cl.current,G(Da),G(Cl)}var ki=v(null),Pi=null;function Ct(e){var i=e.alternate;H(Pe,Pe.current&1),H(ki,e),Pi===null&&(i===null||Da.current!==null||i.memoizedState!==null)&&(Pi=e)}function vr(e){H(Pe,Pe.current),H(ki,e),Pi===null&&(Pi=e)}function ku(e){e.tag===22?(H(Pe,Pe.current),H(ki,e),Pi===null&&(Pi=e)):Tt()}function Tt(){H(Pe,Pe.current),H(ki,ki.current)}function wi(e){G(ki),Pi===e&&(Pi=null),G(Pe)}var Pe=v(0);function Tl(e){for(var i=e;i!==null;){if(i.tag===13){var t=i.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||Co(t)||To(t)))return i}else if(i.tag===19&&(i.memoizedProps.revealOrder==="forwards"||i.memoizedProps.revealOrder==="backwards"||i.memoizedProps.revealOrder==="unstable_legacy-backwards"||i.memoizedProps.revealOrder==="together")){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break;for(;i.sibling===null;){if(i.return===null||i.return===e)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var nt=0,ne=null,ke=null,_e=null,El=!1,Ma=!1,aa=!1,Rl=0,jn=0,Ga=null,ef=0;function Be(){throw Error(c(321))}function jr(e,i){if(i===null)return!1;for(var t=0;t<i.length&&t<e.length;t++)if(!ji(e[t],i[t]))return!1;return!0}function Sr(e,i,t,a,l,s){return nt=s,ne=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,R.H=e===null||e.memoizedState===null?sd:Lr,aa=!1,s=t(a,l),aa=!1,Ma&&(s=Au(i,t,a,l)),wu(e),s}function wu(e){R.H=wn;var i=ke!==null&&ke.next!==null;if(nt=0,_e=ke=ne=null,El=!1,jn=0,Ga=null,i)throw Error(c(300));e===null||Ve||(e=e.dependencies,e!==null&&vl(e)&&(Ve=!0))}function Au(e,i,t,a){ne=e;var l=0;do{if(Ma&&(Ga=null),jn=0,Ma=!1,25<=l)throw Error(c(301));if(l+=1,_e=ke=null,e.updateQueue!=null){var s=e.updateQueue;s.lastEffect=null,s.events=null,s.stores=null,s.memoCache!=null&&(s.memoCache.index=0)}R.H=rd,s=i(t,a)}while(Ma);return s}function tf(){var e=R.H,i=e.useState()[0];return i=typeof i.then=="function"?Sn(i):i,e=e.useState()[0],(ke!==null?ke.memoizedState:null)!==e&&(ne.flags|=1024),i}function kr(){var e=Rl!==0;return Rl=0,e}function wr(e,i,t){i.updateQueue=e.updateQueue,i.flags&=-2053,e.lanes&=~t}function Ar(e){if(El){for(e=e.memoizedState;e!==null;){var i=e.queue;i!==null&&(i.pending=null),e=e.next}El=!1}nt=0,_e=ke=ne=null,Ma=!1,jn=Rl=0,Ga=null}function ri(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return _e===null?ne.memoizedState=_e=e:_e=_e.next=e,_e}function Ie(){if(ke===null){var e=ne.alternate;e=e!==null?e.memoizedState:null}else e=ke.next;var i=_e===null?ne.memoizedState:_e.next;if(i!==null)_e=i,ke=e;else{if(e===null)throw ne.alternate===null?Error(c(467)):Error(c(310));ke=e,e={memoizedState:ke.memoizedState,baseState:ke.baseState,baseQueue:ke.baseQueue,queue:ke.queue,next:null},_e===null?ne.memoizedState=_e=e:_e=_e.next=e}return _e}function Dl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Sn(e){var i=jn;return jn+=1,Ga===null&&(Ga=[]),e=fu(Ga,e,i),i=ne,(_e===null?i.memoizedState:_e.next)===null&&(i=i.alternate,R.H=i===null||i.memoizedState===null?sd:Lr),e}function Ml(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Sn(e);if(e.$$typeof===ae)return ii(e)}throw Error(c(438,String(e)))}function Nr(e){var i=null,t=ne.updateQueue;if(t!==null&&(i=t.memoCache),i==null){var a=ne.alternate;a!==null&&(a=a.updateQueue,a!==null&&(a=a.memoCache,a!=null&&(i={data:a.data.map(function(l){return l.slice()}),index:0})))}if(i==null&&(i={data:[],index:0}),t===null&&(t=Dl(),ne.updateQueue=t),t.memoCache=i,t=i.data[i.index],t===void 0)for(t=i.data[i.index]=Array(e),a=0;a<e;a++)t[a]=Ke;return i.index++,t}function lt(e,i){return typeof i=="function"?i(e):i}function Gl(e){var i=Ie();return Cr(i,ke,e)}function Cr(e,i,t){var a=e.queue;if(a===null)throw Error(c(311));a.lastRenderedReducer=t;var l=e.baseQueue,s=a.pending;if(s!==null){if(l!==null){var r=l.next;l.next=s.next,s.next=r}i.baseQueue=l=s,a.pending=null}if(s=e.baseState,l===null)e.memoizedState=s;else{i=l.next;var o=r=null,f=null,N=i,D=!1;do{var z=N.lane&-536870913;if(z!==N.lane?(de&z)===z:(nt&z)===z){var C=N.revertLane;if(C===0)f!==null&&(f=f.next={lane:0,revertLane:0,gesture:null,action:N.action,hasEagerState:N.hasEagerState,eagerState:N.eagerState,next:null}),z===Ca&&(D=!0);else if((nt&C)===C){N=N.next,C===Ca&&(D=!0);continue}else z={lane:0,revertLane:N.revertLane,gesture:null,action:N.action,hasEagerState:N.hasEagerState,eagerState:N.eagerState,next:null},f===null?(o=f=z,r=s):f=f.next=z,ne.lanes|=C,Dt|=C;z=N.action,aa&&t(s,z),s=N.hasEagerState?N.eagerState:t(s,z)}else C={lane:z,revertLane:N.revertLane,gesture:N.gesture,action:N.action,hasEagerState:N.hasEagerState,eagerState:N.eagerState,next:null},f===null?(o=f=C,r=s):f=f.next=C,ne.lanes|=z,Dt|=z;N=N.next}while(N!==null&&N!==i);if(f===null?r=s:f.next=o,!ji(s,e.memoizedState)&&(Ve=!0,D&&(t=Ta,t!==null)))throw t;e.memoizedState=s,e.baseState=r,e.baseQueue=f,a.lastRenderedState=s}return l===null&&(a.lanes=0),[e.memoizedState,a.dispatch]}function Tr(e){var i=Ie(),t=i.queue;if(t===null)throw Error(c(311));t.lastRenderedReducer=e;var a=t.dispatch,l=t.pending,s=i.memoizedState;if(l!==null){t.pending=null;var r=l=l.next;do s=e(s,r.action),r=r.next;while(r!==l);ji(s,i.memoizedState)||(Ve=!0),i.memoizedState=s,i.baseQueue===null&&(i.baseState=s),t.lastRenderedState=s}return[s,a]}function Nu(e,i,t){var a=ne,l=Ie(),s=me;if(s){if(t===void 0)throw Error(c(407));t=t()}else t=i();var r=!ji((ke||l).memoizedState,t);if(r&&(l.memoizedState=t,Ve=!0),l=l.queue,Dr(Eu.bind(null,a,l,e),[e]),l.getSnapshot!==i||r||_e!==null&&_e.memoizedState.tag&1){if(a.flags|=2048,za(9,{destroy:void 0},Tu.bind(null,a,l,t,i),null),Ne===null)throw Error(c(349));s||(nt&127)!==0||Cu(a,i,t)}return t}function Cu(e,i,t){e.flags|=16384,e={getSnapshot:i,value:t},i=ne.updateQueue,i===null?(i=Dl(),ne.updateQueue=i,i.stores=[e]):(t=i.stores,t===null?i.stores=[e]:t.push(e))}function Tu(e,i,t,a){i.value=t,i.getSnapshot=a,Ru(i)&&Du(e)}function Eu(e,i,t){return t(function(){Ru(i)&&Du(e)})}function Ru(e){var i=e.getSnapshot;e=e.value;try{var t=i();return!ji(e,t)}catch{return!0}}function Du(e){var i=Kt(e,2);i!==null&&fi(i,e,2)}function Er(e){var i=ri();if(typeof e=="function"){var t=e;if(e=t(),aa){yt(!0);try{t()}finally{yt(!1)}}}return i.memoizedState=i.baseState=e,i.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:lt,lastRenderedState:e},i}function Mu(e,i,t,a){return e.baseState=t,Cr(e,ke,typeof a=="function"?a:lt)}function af(e,i,t,a,l){if(Bl(e))throw Error(c(485));if(e=i.action,e!==null){var s={payload:l,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(r){s.listeners.push(r)}};R.T!==null?t(!0):s.isTransition=!1,a(s),t=i.pending,t===null?(s.next=i.pending=s,Gu(i,s)):(s.next=t.next,i.pending=t.next=s)}}function Gu(e,i){var t=i.action,a=i.payload,l=e.state;if(i.isTransition){var s=R.T,r={};R.T=r;try{var o=t(l,a),f=R.S;f!==null&&f(r,o),zu(e,i,o)}catch(N){Rr(e,i,N)}finally{s!==null&&r.types!==null&&(s.types=r.types),R.T=s}}else try{s=t(l,a),zu(e,i,s)}catch(N){Rr(e,i,N)}}function zu(e,i,t){t!==null&&typeof t=="object"&&typeof t.then=="function"?t.then(function(a){Ou(e,i,a)},function(a){return Rr(e,i,a)}):Ou(e,i,t)}function Ou(e,i,t){i.status="fulfilled",i.value=t,Bu(i),e.state=t,i=e.pending,i!==null&&(t=i.next,t===i?e.pending=null:(t=t.next,i.next=t,Gu(e,t)))}function Rr(e,i,t){var a=e.pending;if(e.pending=null,a!==null){a=a.next;do i.status="rejected",i.reason=t,Bu(i),i=i.next;while(i!==a)}e.action=null}function Bu(e){e=e.listeners;for(var i=0;i<e.length;i++)(0,e[i])()}function Lu(e,i){return i}function Pu(e,i){if(me){var t=Ne.formState;if(t!==null){e:{var a=ne;if(me){if(Re){i:{for(var l=Re,s=Li;l.nodeType!==8;){if(!s){l=null;break i}if(l=Ii(l.nextSibling),l===null){l=null;break i}}s=l.data,l=s==="F!"||s==="F"?l:null}if(l){Re=Ii(l.nextSibling),a=l.data==="F!";break e}}St(a)}a=!1}a&&(i=t[0])}}return t=ri(),t.memoizedState=t.baseState=i,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Lu,lastRenderedState:i},t.queue=a,t=ad.bind(null,ne,a),a.dispatch=t,a=Er(!1),s=Br.bind(null,ne,!1,a.queue),a=ri(),l={state:i,dispatch:null,action:e,pending:null},a.queue=l,t=af.bind(null,ne,l,s,t),l.dispatch=t,a.memoizedState=e,[i,t,!1]}function Iu(e){var i=Ie();return Hu(i,ke,e)}function Hu(e,i,t){if(i=Cr(e,i,Lu)[0],e=Gl(lt)[0],typeof i=="object"&&i!==null&&typeof i.then=="function")try{var a=Sn(i)}catch(r){throw r===Ea?kl:r}else a=i;i=Ie();var l=i.queue,s=l.dispatch;return t!==i.memoizedState&&(ne.flags|=2048,za(9,{destroy:void 0},nf.bind(null,l,t),null)),[a,s,e]}function nf(e,i){e.action=i}function Uu(e){var i=Ie(),t=ke;if(t!==null)return Hu(i,t,e);Ie(),i=i.memoizedState,t=Ie();var a=t.queue.dispatch;return t.memoizedState=e,[i,a,!1]}function za(e,i,t,a){return e={tag:e,create:t,deps:a,inst:i,next:null},i=ne.updateQueue,i===null&&(i=Dl(),ne.updateQueue=i),t=i.lastEffect,t===null?i.lastEffect=e.next=e:(a=t.next,t.next=e,e.next=a,i.lastEffect=e),e}function qu(){return Ie().memoizedState}function zl(e,i,t,a){var l=ri();ne.flags|=e,l.memoizedState=za(1|i,{destroy:void 0},t,a===void 0?null:a)}function Ol(e,i,t,a){var l=Ie();a=a===void 0?null:a;var s=l.memoizedState.inst;ke!==null&&a!==null&&jr(a,ke.memoizedState.deps)?l.memoizedState=za(i,s,t,a):(ne.flags|=e,l.memoizedState=za(1|i,s,t,a))}function _u(e,i){zl(8390656,8,e,i)}function Dr(e,i){Ol(2048,8,e,i)}function lf(e){ne.flags|=4;var i=ne.updateQueue;if(i===null)i=Dl(),ne.updateQueue=i,i.events=[e];else{var t=i.events;t===null?i.events=[e]:t.push(e)}}function Vu(e){var i=Ie().memoizedState;return lf({ref:i,nextImpl:e}),function(){if((xe&2)!==0)throw Error(c(440));return i.impl.apply(void 0,arguments)}}function Fu(e,i){return Ol(4,2,e,i)}function Wu(e,i){return Ol(4,4,e,i)}function Yu(e,i){if(typeof i=="function"){e=e();var t=i(e);return function(){typeof t=="function"?t():i(null)}}if(i!=null)return e=e(),i.current=e,function(){i.current=null}}function Ku(e,i,t){t=t!=null?t.concat([e]):null,Ol(4,4,Yu.bind(null,i,e),t)}function Mr(){}function Qu(e,i){var t=Ie();i=i===void 0?null:i;var a=t.memoizedState;return i!==null&&jr(i,a[1])?a[0]:(t.memoizedState=[e,i],e)}function Xu(e,i){var t=Ie();i=i===void 0?null:i;var a=t.memoizedState;if(i!==null&&jr(i,a[1]))return a[0];if(a=e(),aa){yt(!0);try{e()}finally{yt(!1)}}return t.memoizedState=[a,i],a}function Gr(e,i,t){return t===void 0||(nt&1073741824)!==0&&(de&261930)===0?e.memoizedState=i:(e.memoizedState=t,e=Zd(),ne.lanes|=e,Dt|=e,t)}function Zu(e,i,t,a){return ji(t,i)?t:Da.current!==null?(e=Gr(e,t,a),ji(e,i)||(Ve=!0),e):(nt&42)===0||(nt&1073741824)!==0&&(de&261930)===0?(Ve=!0,e.memoizedState=t):(e=Zd(),ne.lanes|=e,Dt|=e,i)}function Ju(e,i,t,a,l){var s=P.p;P.p=s!==0&&8>s?s:8;var r=R.T,o={};R.T=o,Br(e,!1,i,t);try{var f=l(),N=R.S;if(N!==null&&N(o,f),f!==null&&typeof f=="object"&&typeof f.then=="function"){var D=$p(f,a);kn(e,i,D,Ci(e))}else kn(e,i,a,Ci(e))}catch(z){kn(e,i,{then:function(){},status:"rejected",reason:z},Ci())}finally{P.p=s,r!==null&&o.types!==null&&(r.types=o.types),R.T=r}}function sf(){}function zr(e,i,t,a){if(e.tag!==5)throw Error(c(476));var l=$u(e).queue;Ju(e,l,i,J,t===null?sf:function(){return ed(e),t(a)})}function $u(e){var i=e.memoizedState;if(i!==null)return i;i={memoizedState:J,baseState:J,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:lt,lastRenderedState:J},next:null};var t={};return i.next={memoizedState:t,baseState:t,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:lt,lastRenderedState:t},next:null},e.memoizedState=i,e=e.alternate,e!==null&&(e.memoizedState=i),i}function ed(e){var i=$u(e);i.next===null&&(i=e.alternate.memoizedState),kn(e,i.next.queue,{},Ci())}function Or(){return ii(Hn)}function id(){return Ie().memoizedState}function td(){return Ie().memoizedState}function rf(e){for(var i=e.return;i!==null;){switch(i.tag){case 24:case 3:var t=Ci();e=At(t);var a=Nt(i,e,t);a!==null&&(fi(a,i,t),bn(a,i,t)),i={cache:ur()},e.payload=i;return}i=i.return}}function of(e,i,t){var a=Ci();t={lane:a,revertLane:0,gesture:null,action:t,hasEagerState:!1,eagerState:null,next:null},Bl(e)?nd(i,t):(t=$s(e,i,t,a),t!==null&&(fi(t,e,a),ld(t,i,a)))}function ad(e,i,t){var a=Ci();kn(e,i,t,a)}function kn(e,i,t,a){var l={lane:a,revertLane:0,gesture:null,action:t,hasEagerState:!1,eagerState:null,next:null};if(Bl(e))nd(i,l);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=i.lastRenderedReducer,s!==null))try{var r=i.lastRenderedState,o=s(r,t);if(l.hasEagerState=!0,l.eagerState=o,ji(o,r))return hl(e,i,l,0),Ne===null&&fl(),!1}catch{}finally{}if(t=$s(e,i,l,a),t!==null)return fi(t,e,a),ld(t,i,a),!0}return!1}function Br(e,i,t,a){if(a={lane:2,revertLane:fo(),gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Bl(e)){if(i)throw Error(c(479))}else i=$s(e,t,a,2),i!==null&&fi(i,e,2)}function Bl(e){var i=e.alternate;return e===ne||i!==null&&i===ne}function nd(e,i){Ma=El=!0;var t=e.pending;t===null?i.next=i:(i.next=t.next,t.next=i),e.pending=i}function ld(e,i,t){if((t&4194048)!==0){var a=i.lanes;a&=e.pendingLanes,t|=a,i.lanes=t,uc(e,t)}}var wn={readContext:ii,use:Ml,useCallback:Be,useContext:Be,useEffect:Be,useImperativeHandle:Be,useLayoutEffect:Be,useInsertionEffect:Be,useMemo:Be,useReducer:Be,useRef:Be,useState:Be,useDebugValue:Be,useDeferredValue:Be,useTransition:Be,useSyncExternalStore:Be,useId:Be,useHostTransitionStatus:Be,useFormState:Be,useActionState:Be,useOptimistic:Be,useMemoCache:Be,useCacheRefresh:Be};wn.useEffectEvent=Be;var sd={readContext:ii,use:Ml,useCallback:function(e,i){return ri().memoizedState=[e,i===void 0?null:i],e},useContext:ii,useEffect:_u,useImperativeHandle:function(e,i,t){t=t!=null?t.concat([e]):null,zl(4194308,4,Yu.bind(null,i,e),t)},useLayoutEffect:function(e,i){return zl(4194308,4,e,i)},useInsertionEffect:function(e,i){zl(4,2,e,i)},useMemo:function(e,i){var t=ri();i=i===void 0?null:i;var a=e();if(aa){yt(!0);try{e()}finally{yt(!1)}}return t.memoizedState=[a,i],a},useReducer:function(e,i,t){var a=ri();if(t!==void 0){var l=t(i);if(aa){yt(!0);try{t(i)}finally{yt(!1)}}}else l=i;return a.memoizedState=a.baseState=l,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:l},a.queue=e,e=e.dispatch=of.bind(null,ne,e),[a.memoizedState,e]},useRef:function(e){var i=ri();return e={current:e},i.memoizedState=e},useState:function(e){e=Er(e);var i=e.queue,t=ad.bind(null,ne,i);return i.dispatch=t,[e.memoizedState,t]},useDebugValue:Mr,useDeferredValue:function(e,i){var t=ri();return Gr(t,e,i)},useTransition:function(){var e=Er(!1);return e=Ju.bind(null,ne,e.queue,!0,!1),ri().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,i,t){var a=ne,l=ri();if(me){if(t===void 0)throw Error(c(407));t=t()}else{if(t=i(),Ne===null)throw Error(c(349));(de&127)!==0||Cu(a,i,t)}l.memoizedState=t;var s={value:t,getSnapshot:i};return l.queue=s,_u(Eu.bind(null,a,s,e),[e]),a.flags|=2048,za(9,{destroy:void 0},Tu.bind(null,a,s,t,i),null),t},useId:function(){var e=ri(),i=Ne.identifierPrefix;if(me){var t=Ki,a=Yi;t=(a&~(1<<32-vi(a)-1)).toString(32)+t,i="_"+i+"R_"+t,t=Rl++,0<t&&(i+="H"+t.toString(32)),i+="_"}else t=ef++,i="_"+i+"r_"+t.toString(32)+"_";return e.memoizedState=i},useHostTransitionStatus:Or,useFormState:Pu,useActionState:Pu,useOptimistic:function(e){var i=ri();i.memoizedState=i.baseState=e;var t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return i.queue=t,i=Br.bind(null,ne,!0,t),t.dispatch=i,[e,i]},useMemoCache:Nr,useCacheRefresh:function(){return ri().memoizedState=rf.bind(null,ne)},useEffectEvent:function(e){var i=ri(),t={impl:e};return i.memoizedState=t,function(){if((xe&2)!==0)throw Error(c(440));return t.impl.apply(void 0,arguments)}}},Lr={readContext:ii,use:Ml,useCallback:Qu,useContext:ii,useEffect:Dr,useImperativeHandle:Ku,useInsertionEffect:Fu,useLayoutEffect:Wu,useMemo:Xu,useReducer:Gl,useRef:qu,useState:function(){return Gl(lt)},useDebugValue:Mr,useDeferredValue:function(e,i){var t=Ie();return Zu(t,ke.memoizedState,e,i)},useTransition:function(){var e=Gl(lt)[0],i=Ie().memoizedState;return[typeof e=="boolean"?e:Sn(e),i]},useSyncExternalStore:Nu,useId:id,useHostTransitionStatus:Or,useFormState:Iu,useActionState:Iu,useOptimistic:function(e,i){var t=Ie();return Mu(t,ke,e,i)},useMemoCache:Nr,useCacheRefresh:td};Lr.useEffectEvent=Vu;var rd={readContext:ii,use:Ml,useCallback:Qu,useContext:ii,useEffect:Dr,useImperativeHandle:Ku,useInsertionEffect:Fu,useLayoutEffect:Wu,useMemo:Xu,useReducer:Tr,useRef:qu,useState:function(){return Tr(lt)},useDebugValue:Mr,useDeferredValue:function(e,i){var t=Ie();return ke===null?Gr(t,e,i):Zu(t,ke.memoizedState,e,i)},useTransition:function(){var e=Tr(lt)[0],i=Ie().memoizedState;return[typeof e=="boolean"?e:Sn(e),i]},useSyncExternalStore:Nu,useId:id,useHostTransitionStatus:Or,useFormState:Uu,useActionState:Uu,useOptimistic:function(e,i){var t=Ie();return ke!==null?Mu(t,ke,e,i):(t.baseState=e,[e,t.queue.dispatch])},useMemoCache:Nr,useCacheRefresh:td};rd.useEffectEvent=Vu;function Pr(e,i,t,a){i=e.memoizedState,t=t(a,i),t=t==null?i:S({},i,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var Ir={enqueueSetState:function(e,i,t){e=e._reactInternals;var a=Ci(),l=At(a);l.payload=i,t!=null&&(l.callback=t),i=Nt(e,l,a),i!==null&&(fi(i,e,a),bn(i,e,a))},enqueueReplaceState:function(e,i,t){e=e._reactInternals;var a=Ci(),l=At(a);l.tag=1,l.payload=i,t!=null&&(l.callback=t),i=Nt(e,l,a),i!==null&&(fi(i,e,a),bn(i,e,a))},enqueueForceUpdate:function(e,i){e=e._reactInternals;var t=Ci(),a=At(t);a.tag=2,i!=null&&(a.callback=i),i=Nt(e,a,t),i!==null&&(fi(i,e,t),bn(i,e,t))}};function od(e,i,t,a,l,s,r){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(a,s,r):i.prototype&&i.prototype.isPureReactComponent?!un(t,a)||!un(l,s):!0}function cd(e,i,t,a){e=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(t,a),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(t,a),i.state!==e&&Ir.enqueueReplaceState(i,i.state,null)}function na(e,i){var t=i;if("ref"in i){t={};for(var a in i)a!=="ref"&&(t[a]=i[a])}if(e=e.defaultProps){t===i&&(t=S({},t));for(var l in e)t[l]===void 0&&(t[l]=e[l])}return t}function ud(e){pl(e)}function dd(e){console.error(e)}function gd(e){pl(e)}function Ll(e,i){try{var t=e.onUncaughtError;t(i.value,{componentStack:i.stack})}catch(a){setTimeout(function(){throw a})}}function md(e,i,t){try{var a=e.onCaughtError;a(t.value,{componentStack:t.stack,errorBoundary:i.tag===1?i.stateNode:null})}catch(l){setTimeout(function(){throw l})}}function Hr(e,i,t){return t=At(t),t.tag=3,t.payload={element:null},t.callback=function(){Ll(e,i)},t}function pd(e){return e=At(e),e.tag=3,e}function fd(e,i,t,a){var l=t.type.getDerivedStateFromError;if(typeof l=="function"){var s=a.value;e.payload=function(){return l(s)},e.callback=function(){md(i,t,a)}}var r=t.stateNode;r!==null&&typeof r.componentDidCatch=="function"&&(e.callback=function(){md(i,t,a),typeof l!="function"&&(Mt===null?Mt=new Set([this]):Mt.add(this));var o=a.stack;this.componentDidCatch(a.value,{componentStack:o!==null?o:""})})}function cf(e,i,t,a,l){if(t.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){if(i=t.alternate,i!==null&&Na(i,t,l,!0),t=ki.current,t!==null){switch(t.tag){case 31:case 13:return Pi===null?Ql():t.alternate===null&&Le===0&&(Le=3),t.flags&=-257,t.flags|=65536,t.lanes=l,a===wl?t.flags|=16384:(i=t.updateQueue,i===null?t.updateQueue=new Set([a]):i.add(a),go(e,a,l)),!1;case 22:return t.flags|=65536,a===wl?t.flags|=16384:(i=t.updateQueue,i===null?(i={transitions:null,markerInstances:null,retryQueue:new Set([a])},t.updateQueue=i):(t=i.retryQueue,t===null?i.retryQueue=new Set([a]):t.add(a)),go(e,a,l)),!1}throw Error(c(435,t.tag))}return go(e,a,l),Ql(),!1}if(me)return i=ki.current,i!==null?((i.flags&65536)===0&&(i.flags|=256),i.flags|=65536,i.lanes=l,a!==lr&&(e=Error(c(422),{cause:a}),mn(zi(e,t)))):(a!==lr&&(i=Error(c(423),{cause:a}),mn(zi(i,t))),e=e.current.alternate,e.flags|=65536,l&=-l,e.lanes|=l,a=zi(a,t),l=Hr(e.stateNode,a,l),hr(e,l),Le!==4&&(Le=2)),!1;var s=Error(c(520),{cause:a});if(s=zi(s,t),Mn===null?Mn=[s]:Mn.push(s),Le!==4&&(Le=2),i===null)return!0;a=zi(a,t),t=i;do{switch(t.tag){case 3:return t.flags|=65536,e=l&-l,t.lanes|=e,e=Hr(t.stateNode,a,e),hr(t,e),!1;case 1:if(i=t.type,s=t.stateNode,(t.flags&128)===0&&(typeof i.getDerivedStateFromError=="function"||s!==null&&typeof s.componentDidCatch=="function"&&(Mt===null||!Mt.has(s))))return t.flags|=65536,l&=-l,t.lanes|=l,l=pd(l),fd(l,e,t,a),hr(t,l),!1}t=t.return}while(t!==null);return!1}var Ur=Error(c(461)),Ve=!1;function ti(e,i,t,a){i.child=e===null?xu(i,null,t,a):ta(i,e.child,t,a)}function hd(e,i,t,a,l){t=t.render;var s=i.ref;if("ref"in a){var r={};for(var o in a)o!=="ref"&&(r[o]=a[o])}else r=a;return Jt(i),a=Sr(e,i,t,r,s,l),o=kr(),e!==null&&!Ve?(wr(e,i,l),st(e,i,l)):(me&&o&&ar(i),i.flags|=1,ti(e,i,a,l),i.child)}function yd(e,i,t,a,l){if(e===null){var s=t.type;return typeof s=="function"&&!er(s)&&s.defaultProps===void 0&&t.compare===null?(i.tag=15,i.type=s,bd(e,i,s,a,l)):(e=bl(t.type,null,a,i,i.mode,l),e.ref=i.ref,e.return=i,i.child=e)}if(s=e.child,!Qr(e,l)){var r=s.memoizedProps;if(t=t.compare,t=t!==null?t:un,t(r,a)&&e.ref===i.ref)return st(e,i,l)}return i.flags|=1,e=et(s,a),e.ref=i.ref,e.return=i,i.child=e}function bd(e,i,t,a,l){if(e!==null){var s=e.memoizedProps;if(un(s,a)&&e.ref===i.ref)if(Ve=!1,i.pendingProps=a=s,Qr(e,l))(e.flags&131072)!==0&&(Ve=!0);else return i.lanes=e.lanes,st(e,i,l)}return qr(e,i,t,a,l)}function xd(e,i,t,a){var l=a.children,s=e!==null?e.memoizedState:null;if(e===null&&i.stateNode===null&&(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),a.mode==="hidden"){if((i.flags&128)!==0){if(s=s!==null?s.baseLanes|t:t,e!==null){for(a=i.child=e.child,l=0;a!==null;)l=l|a.lanes|a.childLanes,a=a.sibling;a=l&~s}else a=0,i.child=null;return vd(e,i,s,t,a)}if((t&536870912)!==0)i.memoizedState={baseLanes:0,cachePool:null},e!==null&&Sl(i,s!==null?s.cachePool:null),s!==null?Su(i,s):br(),ku(i);else return a=i.lanes=536870912,vd(e,i,s!==null?s.baseLanes|t:t,t,a)}else s!==null?(Sl(i,s.cachePool),Su(i,s),Tt(),i.memoizedState=null):(e!==null&&Sl(i,null),br(),Tt());return ti(e,i,l,t),i.child}function An(e,i){return e!==null&&e.tag===22||i.stateNode!==null||(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.sibling}function vd(e,i,t,a,l){var s=gr();return s=s===null?null:{parent:qe._currentValue,pool:s},i.memoizedState={baseLanes:t,cachePool:s},e!==null&&Sl(i,null),br(),ku(i),e!==null&&Na(e,i,a,!0),i.childLanes=l,null}function Pl(e,i){return i=Hl({mode:i.mode,children:i.children},e.mode),i.ref=e.ref,e.child=i,i.return=e,i}function jd(e,i,t){return ta(i,e.child,null,t),e=Pl(i,i.pendingProps),e.flags|=2,wi(i),i.memoizedState=null,e}function uf(e,i,t){var a=i.pendingProps,l=(i.flags&128)!==0;if(i.flags&=-129,e===null){if(me){if(a.mode==="hidden")return e=Pl(i,a),i.lanes=536870912,An(null,e);if(vr(i),(e=Re)?(e=Gg(e,Li),e=e!==null&&e.data==="&"?e:null,e!==null&&(i.memoizedState={dehydrated:e,treeContext:vt!==null?{id:Yi,overflow:Ki}:null,retryLane:536870912,hydrationErrors:null},t=nu(e),t.return=i,i.child=t,ei=i,Re=null)):e=null,e===null)throw St(i);return i.lanes=536870912,null}return Pl(i,a)}var s=e.memoizedState;if(s!==null){var r=s.dehydrated;if(vr(i),l)if(i.flags&256)i.flags&=-257,i=jd(e,i,t);else if(i.memoizedState!==null)i.child=e.child,i.flags|=128,i=null;else throw Error(c(558));else if(Ve||Na(e,i,t,!1),l=(t&e.childLanes)!==0,Ve||l){if(a=Ne,a!==null&&(r=dc(a,t),r!==0&&r!==s.retryLane))throw s.retryLane=r,Kt(e,r),fi(a,e,r),Ur;Ql(),i=jd(e,i,t)}else e=s.treeContext,Re=Ii(r.nextSibling),ei=i,me=!0,jt=null,Li=!1,e!==null&&ru(i,e),i=Pl(i,a),i.flags|=4096;return i}return e=et(e.child,{mode:a.mode,children:a.children}),e.ref=i.ref,i.child=e,e.return=i,e}function Il(e,i){var t=i.ref;if(t===null)e!==null&&e.ref!==null&&(i.flags|=4194816);else{if(typeof t!="function"&&typeof t!="object")throw Error(c(284));(e===null||e.ref!==t)&&(i.flags|=4194816)}}function qr(e,i,t,a,l){return Jt(i),t=Sr(e,i,t,a,void 0,l),a=kr(),e!==null&&!Ve?(wr(e,i,l),st(e,i,l)):(me&&a&&ar(i),i.flags|=1,ti(e,i,t,l),i.child)}function Sd(e,i,t,a,l,s){return Jt(i),i.updateQueue=null,t=Au(i,a,t,l),wu(e),a=kr(),e!==null&&!Ve?(wr(e,i,s),st(e,i,s)):(me&&a&&ar(i),i.flags|=1,ti(e,i,t,s),i.child)}function kd(e,i,t,a,l){if(Jt(i),i.stateNode===null){var s=Sa,r=t.contextType;typeof r=="object"&&r!==null&&(s=ii(r)),s=new t(a,s),i.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=Ir,i.stateNode=s,s._reactInternals=i,s=i.stateNode,s.props=a,s.state=i.memoizedState,s.refs={},pr(i),r=t.contextType,s.context=typeof r=="object"&&r!==null?ii(r):Sa,s.state=i.memoizedState,r=t.getDerivedStateFromProps,typeof r=="function"&&(Pr(i,t,r,a),s.state=i.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(r=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),r!==s.state&&Ir.enqueueReplaceState(s,s.state,null),vn(i,a,s,l),xn(),s.state=i.memoizedState),typeof s.componentDidMount=="function"&&(i.flags|=4194308),a=!0}else if(e===null){s=i.stateNode;var o=i.memoizedProps,f=na(t,o);s.props=f;var N=s.context,D=t.contextType;r=Sa,typeof D=="object"&&D!==null&&(r=ii(D));var z=t.getDerivedStateFromProps;D=typeof z=="function"||typeof s.getSnapshotBeforeUpdate=="function",o=i.pendingProps!==o,D||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(o||N!==r)&&cd(i,s,a,r),wt=!1;var C=i.memoizedState;s.state=C,vn(i,a,s,l),xn(),N=i.memoizedState,o||C!==N||wt?(typeof z=="function"&&(Pr(i,t,z,a),N=i.memoizedState),(f=wt||od(i,t,f,a,C,N,r))?(D||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(i.flags|=4194308)):(typeof s.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=a,i.memoizedState=N),s.props=a,s.state=N,s.context=r,a=f):(typeof s.componentDidMount=="function"&&(i.flags|=4194308),a=!1)}else{s=i.stateNode,fr(e,i),r=i.memoizedProps,D=na(t,r),s.props=D,z=i.pendingProps,C=s.context,N=t.contextType,f=Sa,typeof N=="object"&&N!==null&&(f=ii(N)),o=t.getDerivedStateFromProps,(N=typeof o=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(r!==z||C!==f)&&cd(i,s,a,f),wt=!1,C=i.memoizedState,s.state=C,vn(i,a,s,l),xn();var E=i.memoizedState;r!==z||C!==E||wt||e!==null&&e.dependencies!==null&&vl(e.dependencies)?(typeof o=="function"&&(Pr(i,t,o,a),E=i.memoizedState),(D=wt||od(i,t,D,a,C,E,f)||e!==null&&e.dependencies!==null&&vl(e.dependencies))?(N||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(a,E,f),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(a,E,f)),typeof s.componentDidUpdate=="function"&&(i.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof s.componentDidUpdate!="function"||r===e.memoizedProps&&C===e.memoizedState||(i.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||r===e.memoizedProps&&C===e.memoizedState||(i.flags|=1024),i.memoizedProps=a,i.memoizedState=E),s.props=a,s.state=E,s.context=f,a=D):(typeof s.componentDidUpdate!="function"||r===e.memoizedProps&&C===e.memoizedState||(i.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||r===e.memoizedProps&&C===e.memoizedState||(i.flags|=1024),a=!1)}return s=a,Il(e,i),a=(i.flags&128)!==0,s||a?(s=i.stateNode,t=a&&typeof t.getDerivedStateFromError!="function"?null:s.render(),i.flags|=1,e!==null&&a?(i.child=ta(i,e.child,null,l),i.child=ta(i,null,t,l)):ti(e,i,t,l),i.memoizedState=s.state,e=i.child):e=st(e,i,l),e}function wd(e,i,t,a){return Xt(),i.flags|=256,ti(e,i,t,a),i.child}var _r={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Vr(e){return{baseLanes:e,cachePool:mu()}}function Fr(e,i,t){return e=e!==null?e.childLanes&~t:0,i&&(e|=Ni),e}function Ad(e,i,t){var a=i.pendingProps,l=!1,s=(i.flags&128)!==0,r;if((r=s)||(r=e!==null&&e.memoizedState===null?!1:(Pe.current&2)!==0),r&&(l=!0,i.flags&=-129),r=(i.flags&32)!==0,i.flags&=-33,e===null){if(me){if(l?Ct(i):Tt(),(e=Re)?(e=Gg(e,Li),e=e!==null&&e.data!=="&"?e:null,e!==null&&(i.memoizedState={dehydrated:e,treeContext:vt!==null?{id:Yi,overflow:Ki}:null,retryLane:536870912,hydrationErrors:null},t=nu(e),t.return=i,i.child=t,ei=i,Re=null)):e=null,e===null)throw St(i);return To(e)?i.lanes=32:i.lanes=536870912,null}var o=a.children;return a=a.fallback,l?(Tt(),l=i.mode,o=Hl({mode:"hidden",children:o},l),a=Qt(a,l,t,null),o.return=i,a.return=i,o.sibling=a,i.child=o,a=i.child,a.memoizedState=Vr(t),a.childLanes=Fr(e,r,t),i.memoizedState=_r,An(null,a)):(Ct(i),Wr(i,o))}var f=e.memoizedState;if(f!==null&&(o=f.dehydrated,o!==null)){if(s)i.flags&256?(Ct(i),i.flags&=-257,i=Yr(e,i,t)):i.memoizedState!==null?(Tt(),i.child=e.child,i.flags|=128,i=null):(Tt(),o=a.fallback,l=i.mode,a=Hl({mode:"visible",children:a.children},l),o=Qt(o,l,t,null),o.flags|=2,a.return=i,o.return=i,a.sibling=o,i.child=a,ta(i,e.child,null,t),a=i.child,a.memoizedState=Vr(t),a.childLanes=Fr(e,r,t),i.memoizedState=_r,i=An(null,a));else if(Ct(i),To(o)){if(r=o.nextSibling&&o.nextSibling.dataset,r)var N=r.dgst;r=N,a=Error(c(419)),a.stack="",a.digest=r,mn({value:a,source:null,stack:null}),i=Yr(e,i,t)}else if(Ve||Na(e,i,t,!1),r=(t&e.childLanes)!==0,Ve||r){if(r=Ne,r!==null&&(a=dc(r,t),a!==0&&a!==f.retryLane))throw f.retryLane=a,Kt(e,a),fi(r,e,a),Ur;Co(o)||Ql(),i=Yr(e,i,t)}else Co(o)?(i.flags|=192,i.child=e.child,i=null):(e=f.treeContext,Re=Ii(o.nextSibling),ei=i,me=!0,jt=null,Li=!1,e!==null&&ru(i,e),i=Wr(i,a.children),i.flags|=4096);return i}return l?(Tt(),o=a.fallback,l=i.mode,f=e.child,N=f.sibling,a=et(f,{mode:"hidden",children:a.children}),a.subtreeFlags=f.subtreeFlags&65011712,N!==null?o=et(N,o):(o=Qt(o,l,t,null),o.flags|=2),o.return=i,a.return=i,a.sibling=o,i.child=a,An(null,a),a=i.child,o=e.child.memoizedState,o===null?o=Vr(t):(l=o.cachePool,l!==null?(f=qe._currentValue,l=l.parent!==f?{parent:f,pool:f}:l):l=mu(),o={baseLanes:o.baseLanes|t,cachePool:l}),a.memoizedState=o,a.childLanes=Fr(e,r,t),i.memoizedState=_r,An(e.child,a)):(Ct(i),t=e.child,e=t.sibling,t=et(t,{mode:"visible",children:a.children}),t.return=i,t.sibling=null,e!==null&&(r=i.deletions,r===null?(i.deletions=[e],i.flags|=16):r.push(e)),i.child=t,i.memoizedState=null,t)}function Wr(e,i){return i=Hl({mode:"visible",children:i},e.mode),i.return=e,e.child=i}function Hl(e,i){return e=Si(22,e,null,i),e.lanes=0,e}function Yr(e,i,t){return ta(i,e.child,null,t),e=Wr(i,i.pendingProps.children),e.flags|=2,i.memoizedState=null,e}function Nd(e,i,t){e.lanes|=i;var a=e.alternate;a!==null&&(a.lanes|=i),or(e.return,i,t)}function Kr(e,i,t,a,l,s){var r=e.memoizedState;r===null?e.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:a,tail:t,tailMode:l,treeForkCount:s}:(r.isBackwards=i,r.rendering=null,r.renderingStartTime=0,r.last=a,r.tail=t,r.tailMode=l,r.treeForkCount=s)}function Cd(e,i,t){var a=i.pendingProps,l=a.revealOrder,s=a.tail;a=a.children;var r=Pe.current,o=(r&2)!==0;if(o?(r=r&1|2,i.flags|=128):r&=1,H(Pe,r),ti(e,i,a,t),a=me?gn:0,!o&&e!==null&&(e.flags&128)!==0)e:for(e=i.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Nd(e,t,i);else if(e.tag===19)Nd(e,t,i);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===i)break e;for(;e.sibling===null;){if(e.return===null||e.return===i)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(l){case"forwards":for(t=i.child,l=null;t!==null;)e=t.alternate,e!==null&&Tl(e)===null&&(l=t),t=t.sibling;t=l,t===null?(l=i.child,i.child=null):(l=t.sibling,t.sibling=null),Kr(i,!1,l,t,s,a);break;case"backwards":case"unstable_legacy-backwards":for(t=null,l=i.child,i.child=null;l!==null;){if(e=l.alternate,e!==null&&Tl(e)===null){i.child=l;break}e=l.sibling,l.sibling=t,t=l,l=e}Kr(i,!0,t,null,s,a);break;case"together":Kr(i,!1,null,null,void 0,a);break;default:i.memoizedState=null}return i.child}function st(e,i,t){if(e!==null&&(i.dependencies=e.dependencies),Dt|=i.lanes,(t&i.childLanes)===0)if(e!==null){if(Na(e,i,t,!1),(t&i.childLanes)===0)return null}else return null;if(e!==null&&i.child!==e.child)throw Error(c(153));if(i.child!==null){for(e=i.child,t=et(e,e.pendingProps),i.child=t,t.return=i;e.sibling!==null;)e=e.sibling,t=t.sibling=et(e,e.pendingProps),t.return=i;t.sibling=null}return i.child}function Qr(e,i){return(e.lanes&i)!==0?!0:(e=e.dependencies,!!(e!==null&&vl(e)))}function df(e,i,t){switch(i.tag){case 3:ee(i,i.stateNode.containerInfo),kt(i,qe,e.memoizedState.cache),Xt();break;case 27:case 5:yi(i);break;case 4:ee(i,i.stateNode.containerInfo);break;case 10:kt(i,i.type,i.memoizedProps.value);break;case 31:if(i.memoizedState!==null)return i.flags|=128,vr(i),null;break;case 13:var a=i.memoizedState;if(a!==null)return a.dehydrated!==null?(Ct(i),i.flags|=128,null):(t&i.child.childLanes)!==0?Ad(e,i,t):(Ct(i),e=st(e,i,t),e!==null?e.sibling:null);Ct(i);break;case 19:var l=(e.flags&128)!==0;if(a=(t&i.childLanes)!==0,a||(Na(e,i,t,!1),a=(t&i.childLanes)!==0),l){if(a)return Cd(e,i,t);i.flags|=128}if(l=i.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),H(Pe,Pe.current),a)break;return null;case 22:return i.lanes=0,xd(e,i,t,i.pendingProps);case 24:kt(i,qe,e.memoizedState.cache)}return st(e,i,t)}function Td(e,i,t){if(e!==null)if(e.memoizedProps!==i.pendingProps)Ve=!0;else{if(!Qr(e,t)&&(i.flags&128)===0)return Ve=!1,df(e,i,t);Ve=(e.flags&131072)!==0}else Ve=!1,me&&(i.flags&1048576)!==0&&su(i,gn,i.index);switch(i.lanes=0,i.tag){case 16:e:{var a=i.pendingProps;if(e=ea(i.elementType),i.type=e,typeof e=="function")er(e)?(a=na(e,a),i.tag=1,i=kd(null,i,e,a,t)):(i.tag=0,i=qr(null,i,e,a,t));else{if(e!=null){var l=e.$$typeof;if(l===Q){i.tag=11,i=hd(null,i,e,a,t);break e}else if(l===le){i.tag=14,i=yd(null,i,e,a,t);break e}}throw i=ye(e)||e,Error(c(306,i,""))}}return i;case 0:return qr(e,i,i.type,i.pendingProps,t);case 1:return a=i.type,l=na(a,i.pendingProps),kd(e,i,a,l,t);case 3:e:{if(ee(i,i.stateNode.containerInfo),e===null)throw Error(c(387));a=i.pendingProps;var s=i.memoizedState;l=s.element,fr(e,i),vn(i,a,null,t);var r=i.memoizedState;if(a=r.cache,kt(i,qe,a),a!==s.cache&&cr(i,[qe],t,!0),xn(),a=r.element,s.isDehydrated)if(s={element:a,isDehydrated:!1,cache:r.cache},i.updateQueue.baseState=s,i.memoizedState=s,i.flags&256){i=wd(e,i,a,t);break e}else if(a!==l){l=zi(Error(c(424)),i),mn(l),i=wd(e,i,a,t);break e}else{switch(e=i.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Re=Ii(e.firstChild),ei=i,me=!0,jt=null,Li=!0,t=xu(i,null,a,t),i.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling}else{if(Xt(),a===l){i=st(e,i,t);break e}ti(e,i,a,t)}i=i.child}return i;case 26:return Il(e,i),e===null?(t=Ig(i.type,null,i.pendingProps,null))?i.memoizedState=t:me||(t=i.type,e=i.pendingProps,a=ts(V.current).createElement(t),a[$e]=i,a[ci]=e,ai(a,t,e),Xe(a),i.stateNode=a):i.memoizedState=Ig(i.type,e.memoizedProps,i.pendingProps,e.memoizedState),null;case 27:return yi(i),e===null&&me&&(a=i.stateNode=Bg(i.type,i.pendingProps,V.current),ei=i,Li=!0,l=Re,Bt(i.type)?(Eo=l,Re=Ii(a.firstChild)):Re=l),ti(e,i,i.pendingProps.children,t),Il(e,i),e===null&&(i.flags|=4194304),i.child;case 5:return e===null&&me&&((l=a=Re)&&(a=Uf(a,i.type,i.pendingProps,Li),a!==null?(i.stateNode=a,ei=i,Re=Ii(a.firstChild),Li=!1,l=!0):l=!1),l||St(i)),yi(i),l=i.type,s=i.pendingProps,r=e!==null?e.memoizedProps:null,a=s.children,wo(l,s)?a=null:r!==null&&wo(l,r)&&(i.flags|=32),i.memoizedState!==null&&(l=Sr(e,i,tf,null,null,t),Hn._currentValue=l),Il(e,i),ti(e,i,a,t),i.child;case 6:return e===null&&me&&((e=t=Re)&&(t=qf(t,i.pendingProps,Li),t!==null?(i.stateNode=t,ei=i,Re=null,e=!0):e=!1),e||St(i)),null;case 13:return Ad(e,i,t);case 4:return ee(i,i.stateNode.containerInfo),a=i.pendingProps,e===null?i.child=ta(i,null,a,t):ti(e,i,a,t),i.child;case 11:return hd(e,i,i.type,i.pendingProps,t);case 7:return ti(e,i,i.pendingProps,t),i.child;case 8:return ti(e,i,i.pendingProps.children,t),i.child;case 12:return ti(e,i,i.pendingProps.children,t),i.child;case 10:return a=i.pendingProps,kt(i,i.type,a.value),ti(e,i,a.children,t),i.child;case 9:return l=i.type._context,a=i.pendingProps.children,Jt(i),l=ii(l),a=a(l),i.flags|=1,ti(e,i,a,t),i.child;case 14:return yd(e,i,i.type,i.pendingProps,t);case 15:return bd(e,i,i.type,i.pendingProps,t);case 19:return Cd(e,i,t);case 31:return uf(e,i,t);case 22:return xd(e,i,t,i.pendingProps);case 24:return Jt(i),a=ii(qe),e===null?(l=gr(),l===null&&(l=Ne,s=ur(),l.pooledCache=s,s.refCount++,s!==null&&(l.pooledCacheLanes|=t),l=s),i.memoizedState={parent:a,cache:l},pr(i),kt(i,qe,l)):((e.lanes&t)!==0&&(fr(e,i),vn(i,null,null,t),xn()),l=e.memoizedState,s=i.memoizedState,l.parent!==a?(l={parent:a,cache:a},i.memoizedState=l,i.lanes===0&&(i.memoizedState=i.updateQueue.baseState=l),kt(i,qe,a)):(a=s.cache,kt(i,qe,a),a!==l.cache&&cr(i,[qe],t,!0))),ti(e,i,i.pendingProps.children,t),i.child;case 29:throw i.pendingProps}throw Error(c(156,i.tag))}function rt(e){e.flags|=4}function Xr(e,i,t,a,l){if((i=(e.mode&32)!==0)&&(i=!1),i){if(e.flags|=16777216,(l&335544128)===l)if(e.stateNode.complete)e.flags|=8192;else if(ig())e.flags|=8192;else throw ia=wl,mr}else e.flags&=-16777217}function Ed(e,i){if(i.type!=="stylesheet"||(i.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Vg(i))if(ig())e.flags|=8192;else throw ia=wl,mr}function Ul(e,i){i!==null&&(e.flags|=4),e.flags&16384&&(i=e.tag!==22?oc():536870912,e.lanes|=i,Pa|=i)}function Nn(e,i){if(!me)switch(e.tailMode){case"hidden":i=e.tail;for(var t=null;i!==null;)i.alternate!==null&&(t=i),i=i.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?i||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null}}function De(e){var i=e.alternate!==null&&e.alternate.child===e.child,t=0,a=0;if(i)for(var l=e.child;l!==null;)t|=l.lanes|l.childLanes,a|=l.subtreeFlags&65011712,a|=l.flags&65011712,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)t|=l.lanes|l.childLanes,a|=l.subtreeFlags,a|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=a,e.childLanes=t,i}function gf(e,i,t){var a=i.pendingProps;switch(nr(i),i.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return De(i),null;case 1:return De(i),null;case 3:return t=i.stateNode,a=null,e!==null&&(a=e.memoizedState.cache),i.memoizedState.cache!==a&&(i.flags|=2048),at(qe),se(),t.pendingContext&&(t.context=t.pendingContext,t.pendingContext=null),(e===null||e.child===null)&&(Aa(i)?rt(i):e===null||e.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,sr())),De(i),null;case 26:var l=i.type,s=i.memoizedState;return e===null?(rt(i),s!==null?(De(i),Ed(i,s)):(De(i),Xr(i,l,null,a,t))):s?s!==e.memoizedState?(rt(i),De(i),Ed(i,s)):(De(i),i.flags&=-16777217):(e=e.memoizedProps,e!==a&&rt(i),De(i),Xr(i,l,e,a,t)),null;case 27:if(Wi(i),t=V.current,l=i.type,e!==null&&i.stateNode!=null)e.memoizedProps!==a&&rt(i);else{if(!a){if(i.stateNode===null)throw Error(c(166));return De(i),null}e=F.current,Aa(i)?ou(i):(e=Bg(l,a,t),i.stateNode=e,rt(i))}return De(i),null;case 5:if(Wi(i),l=i.type,e!==null&&i.stateNode!=null)e.memoizedProps!==a&&rt(i);else{if(!a){if(i.stateNode===null)throw Error(c(166));return De(i),null}if(s=F.current,Aa(i))ou(i);else{var r=ts(V.current);switch(s){case 1:s=r.createElementNS("http://www.w3.org/2000/svg",l);break;case 2:s=r.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;default:switch(l){case"svg":s=r.createElementNS("http://www.w3.org/2000/svg",l);break;case"math":s=r.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;case"script":s=r.createElement("div"),s.innerHTML="<script><\/script>",s=s.removeChild(s.firstChild);break;case"select":s=typeof a.is=="string"?r.createElement("select",{is:a.is}):r.createElement("select"),a.multiple?s.multiple=!0:a.size&&(s.size=a.size);break;default:s=typeof a.is=="string"?r.createElement(l,{is:a.is}):r.createElement(l)}}s[$e]=i,s[ci]=a;e:for(r=i.child;r!==null;){if(r.tag===5||r.tag===6)s.appendChild(r.stateNode);else if(r.tag!==4&&r.tag!==27&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===i)break e;for(;r.sibling===null;){if(r.return===null||r.return===i)break e;r=r.return}r.sibling.return=r.return,r=r.sibling}i.stateNode=s;e:switch(ai(s,l,a),l){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break e;case"img":a=!0;break e;default:a=!1}a&&rt(i)}}return De(i),Xr(i,i.type,e===null?null:e.memoizedProps,i.pendingProps,t),null;case 6:if(e&&i.stateNode!=null)e.memoizedProps!==a&&rt(i);else{if(typeof a!="string"&&i.stateNode===null)throw Error(c(166));if(e=V.current,Aa(i)){if(e=i.stateNode,t=i.memoizedProps,a=null,l=ei,l!==null)switch(l.tag){case 27:case 5:a=l.memoizedProps}e[$e]=i,e=!!(e.nodeValue===t||a!==null&&a.suppressHydrationWarning===!0||Ag(e.nodeValue,t)),e||St(i,!0)}else e=ts(e).createTextNode(a),e[$e]=i,i.stateNode=e}return De(i),null;case 31:if(t=i.memoizedState,e===null||e.memoizedState!==null){if(a=Aa(i),t!==null){if(e===null){if(!a)throw Error(c(318));if(e=i.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(557));e[$e]=i}else Xt(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;De(i),e=!1}else t=sr(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=t),e=!0;if(!e)return i.flags&256?(wi(i),i):(wi(i),null);if((i.flags&128)!==0)throw Error(c(558))}return De(i),null;case 13:if(a=i.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(l=Aa(i),a!==null&&a.dehydrated!==null){if(e===null){if(!l)throw Error(c(318));if(l=i.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(c(317));l[$e]=i}else Xt(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;De(i),l=!1}else l=sr(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=l),l=!0;if(!l)return i.flags&256?(wi(i),i):(wi(i),null)}return wi(i),(i.flags&128)!==0?(i.lanes=t,i):(t=a!==null,e=e!==null&&e.memoizedState!==null,t&&(a=i.child,l=null,a.alternate!==null&&a.alternate.memoizedState!==null&&a.alternate.memoizedState.cachePool!==null&&(l=a.alternate.memoizedState.cachePool.pool),s=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(s=a.memoizedState.cachePool.pool),s!==l&&(a.flags|=2048)),t!==e&&t&&(i.child.flags|=8192),Ul(i,i.updateQueue),De(i),null);case 4:return se(),e===null&&xo(i.stateNode.containerInfo),De(i),null;case 10:return at(i.type),De(i),null;case 19:if(G(Pe),a=i.memoizedState,a===null)return De(i),null;if(l=(i.flags&128)!==0,s=a.rendering,s===null)if(l)Nn(a,!1);else{if(Le!==0||e!==null&&(e.flags&128)!==0)for(e=i.child;e!==null;){if(s=Tl(e),s!==null){for(i.flags|=128,Nn(a,!1),e=s.updateQueue,i.updateQueue=e,Ul(i,e),i.subtreeFlags=0,e=t,t=i.child;t!==null;)au(t,e),t=t.sibling;return H(Pe,Pe.current&1|2),me&&it(i,a.treeForkCount),i.child}e=e.sibling}a.tail!==null&&bi()>Wl&&(i.flags|=128,l=!0,Nn(a,!1),i.lanes=4194304)}else{if(!l)if(e=Tl(s),e!==null){if(i.flags|=128,l=!0,e=e.updateQueue,i.updateQueue=e,Ul(i,e),Nn(a,!0),a.tail===null&&a.tailMode==="hidden"&&!s.alternate&&!me)return De(i),null}else 2*bi()-a.renderingStartTime>Wl&&t!==536870912&&(i.flags|=128,l=!0,Nn(a,!1),i.lanes=4194304);a.isBackwards?(s.sibling=i.child,i.child=s):(e=a.last,e!==null?e.sibling=s:i.child=s,a.last=s)}return a.tail!==null?(e=a.tail,a.rendering=e,a.tail=e.sibling,a.renderingStartTime=bi(),e.sibling=null,t=Pe.current,H(Pe,l?t&1|2:t&1),me&&it(i,a.treeForkCount),e):(De(i),null);case 22:case 23:return wi(i),xr(),a=i.memoizedState!==null,e!==null?e.memoizedState!==null!==a&&(i.flags|=8192):a&&(i.flags|=8192),a?(t&536870912)!==0&&(i.flags&128)===0&&(De(i),i.subtreeFlags&6&&(i.flags|=8192)):De(i),t=i.updateQueue,t!==null&&Ul(i,t.retryQueue),t=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),a=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(a=i.memoizedState.cachePool.pool),a!==t&&(i.flags|=2048),e!==null&&G($t),null;case 24:return t=null,e!==null&&(t=e.memoizedState.cache),i.memoizedState.cache!==t&&(i.flags|=2048),at(qe),De(i),null;case 25:return null;case 30:return null}throw Error(c(156,i.tag))}function mf(e,i){switch(nr(i),i.tag){case 1:return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 3:return at(qe),se(),e=i.flags,(e&65536)!==0&&(e&128)===0?(i.flags=e&-65537|128,i):null;case 26:case 27:case 5:return Wi(i),null;case 31:if(i.memoizedState!==null){if(wi(i),i.alternate===null)throw Error(c(340));Xt()}return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 13:if(wi(i),e=i.memoizedState,e!==null&&e.dehydrated!==null){if(i.alternate===null)throw Error(c(340));Xt()}return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 19:return G(Pe),null;case 4:return se(),null;case 10:return at(i.type),null;case 22:case 23:return wi(i),xr(),e!==null&&G($t),e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 24:return at(qe),null;case 25:return null;default:return null}}function Rd(e,i){switch(nr(i),i.tag){case 3:at(qe),se();break;case 26:case 27:case 5:Wi(i);break;case 4:se();break;case 31:i.memoizedState!==null&&wi(i);break;case 13:wi(i);break;case 19:G(Pe);break;case 10:at(i.type);break;case 22:case 23:wi(i),xr(),e!==null&&G($t);break;case 24:at(qe)}}function Cn(e,i){try{var t=i.updateQueue,a=t!==null?t.lastEffect:null;if(a!==null){var l=a.next;t=l;do{if((t.tag&e)===e){a=void 0;var s=t.create,r=t.inst;a=s(),r.destroy=a}t=t.next}while(t!==l)}}catch(o){je(i,i.return,o)}}function Et(e,i,t){try{var a=i.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var s=l.next;a=s;do{if((a.tag&e)===e){var r=a.inst,o=r.destroy;if(o!==void 0){r.destroy=void 0,l=i;var f=t,N=o;try{N()}catch(D){je(l,f,D)}}}a=a.next}while(a!==s)}}catch(D){je(i,i.return,D)}}function Dd(e){var i=e.updateQueue;if(i!==null){var t=e.stateNode;try{ju(i,t)}catch(a){je(e,e.return,a)}}}function Md(e,i,t){t.props=na(e.type,e.memoizedProps),t.state=e.memoizedState;try{t.componentWillUnmount()}catch(a){je(e,i,a)}}function Tn(e,i){try{var t=e.ref;if(t!==null){switch(e.tag){case 26:case 27:case 5:var a=e.stateNode;break;case 30:a=e.stateNode;break;default:a=e.stateNode}typeof t=="function"?e.refCleanup=t(a):t.current=a}}catch(l){je(e,i,l)}}function Qi(e,i){var t=e.ref,a=e.refCleanup;if(t!==null)if(typeof a=="function")try{a()}catch(l){je(e,i,l)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof t=="function")try{t(null)}catch(l){je(e,i,l)}else t.current=null}function Gd(e){var i=e.type,t=e.memoizedProps,a=e.stateNode;try{e:switch(i){case"button":case"input":case"select":case"textarea":t.autoFocus&&a.focus();break e;case"img":t.src?a.src=t.src:t.srcSet&&(a.srcset=t.srcSet)}}catch(l){je(e,e.return,l)}}function Zr(e,i,t){try{var a=e.stateNode;Of(a,e.type,t,i),a[ci]=i}catch(l){je(e,e.return,l)}}function zd(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Bt(e.type)||e.tag===4}function Jr(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||zd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Bt(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function $r(e,i,t){var a=e.tag;if(a===5||a===6)e=e.stateNode,i?(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t).insertBefore(e,i):(i=t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,i.appendChild(e),t=t._reactRootContainer,t!=null||i.onclick!==null||(i.onclick=Ji));else if(a!==4&&(a===27&&Bt(e.type)&&(t=e.stateNode,i=null),e=e.child,e!==null))for($r(e,i,t),e=e.sibling;e!==null;)$r(e,i,t),e=e.sibling}function ql(e,i,t){var a=e.tag;if(a===5||a===6)e=e.stateNode,i?t.insertBefore(e,i):t.appendChild(e);else if(a!==4&&(a===27&&Bt(e.type)&&(t=e.stateNode),e=e.child,e!==null))for(ql(e,i,t),e=e.sibling;e!==null;)ql(e,i,t),e=e.sibling}function Od(e){var i=e.stateNode,t=e.memoizedProps;try{for(var a=e.type,l=i.attributes;l.length;)i.removeAttributeNode(l[0]);ai(i,a,t),i[$e]=e,i[ci]=t}catch(s){je(e,e.return,s)}}var ot=!1,Fe=!1,eo=!1,Bd=typeof WeakSet=="function"?WeakSet:Set,Ze=null;function pf(e,i){if(e=e.containerInfo,So=cs,e=Kc(e),Ys(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var a=t.getSelection&&t.getSelection();if(a&&a.rangeCount!==0){t=a.anchorNode;var l=a.anchorOffset,s=a.focusNode;a=a.focusOffset;try{t.nodeType,s.nodeType}catch{t=null;break e}var r=0,o=-1,f=-1,N=0,D=0,z=e,C=null;i:for(;;){for(var E;z!==t||l!==0&&z.nodeType!==3||(o=r+l),z!==s||a!==0&&z.nodeType!==3||(f=r+a),z.nodeType===3&&(r+=z.nodeValue.length),(E=z.firstChild)!==null;)C=z,z=E;for(;;){if(z===e)break i;if(C===t&&++N===l&&(o=r),C===s&&++D===a&&(f=r),(E=z.nextSibling)!==null)break;z=C,C=z.parentNode}z=E}t=o===-1||f===-1?null:{start:o,end:f}}else t=null}t=t||{start:0,end:0}}else t=null;for(ko={focusedElem:e,selectionRange:t},cs=!1,Ze=i;Ze!==null;)if(i=Ze,e=i.child,(i.subtreeFlags&1028)!==0&&e!==null)e.return=i,Ze=e;else for(;Ze!==null;){switch(i=Ze,s=i.alternate,e=i.flags,i.tag){case 0:if((e&4)!==0&&(e=i.updateQueue,e=e!==null?e.events:null,e!==null))for(t=0;t<e.length;t++)l=e[t],l.ref.impl=l.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&s!==null){e=void 0,t=i,l=s.memoizedProps,s=s.memoizedState,a=t.stateNode;try{var W=na(t.type,l);e=a.getSnapshotBeforeUpdate(W,s),a.__reactInternalSnapshotBeforeUpdate=e}catch($){je(t,t.return,$)}}break;case 3:if((e&1024)!==0){if(e=i.stateNode.containerInfo,t=e.nodeType,t===9)No(e);else if(t===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":No(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(c(163))}if(e=i.sibling,e!==null){e.return=i.return,Ze=e;break}Ze=i.return}}function Ld(e,i,t){var a=t.flags;switch(t.tag){case 0:case 11:case 15:ut(e,t),a&4&&Cn(5,t);break;case 1:if(ut(e,t),a&4)if(e=t.stateNode,i===null)try{e.componentDidMount()}catch(r){je(t,t.return,r)}else{var l=na(t.type,i.memoizedProps);i=i.memoizedState;try{e.componentDidUpdate(l,i,e.__reactInternalSnapshotBeforeUpdate)}catch(r){je(t,t.return,r)}}a&64&&Dd(t),a&512&&Tn(t,t.return);break;case 3:if(ut(e,t),a&64&&(e=t.updateQueue,e!==null)){if(i=null,t.child!==null)switch(t.child.tag){case 27:case 5:i=t.child.stateNode;break;case 1:i=t.child.stateNode}try{ju(e,i)}catch(r){je(t,t.return,r)}}break;case 27:i===null&&a&4&&Od(t);case 26:case 5:ut(e,t),i===null&&a&4&&Gd(t),a&512&&Tn(t,t.return);break;case 12:ut(e,t);break;case 31:ut(e,t),a&4&&Hd(e,t);break;case 13:ut(e,t),a&4&&Ud(e,t),a&64&&(e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(t=kf.bind(null,t),_f(e,t))));break;case 22:if(a=t.memoizedState!==null||ot,!a){i=i!==null&&i.memoizedState!==null||Fe,l=ot;var s=Fe;ot=a,(Fe=i)&&!s?dt(e,t,(t.subtreeFlags&8772)!==0):ut(e,t),ot=l,Fe=s}break;case 30:break;default:ut(e,t)}}function Pd(e){var i=e.alternate;i!==null&&(e.alternate=null,Pd(i)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(i=e.stateNode,i!==null&&Rs(i)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ge=null,di=!1;function ct(e,i,t){for(t=t.child;t!==null;)Id(e,i,t),t=t.sibling}function Id(e,i,t){if(xi&&typeof xi.onCommitFiberUnmount=="function")try{xi.onCommitFiberUnmount(Za,t)}catch{}switch(t.tag){case 26:Fe||Qi(t,i),ct(e,i,t),t.memoizedState?t.memoizedState.count--:t.stateNode&&(t=t.stateNode,t.parentNode.removeChild(t));break;case 27:Fe||Qi(t,i);var a=Ge,l=di;Bt(t.type)&&(Ge=t.stateNode,di=!1),ct(e,i,t),Ln(t.stateNode),Ge=a,di=l;break;case 5:Fe||Qi(t,i);case 6:if(a=Ge,l=di,Ge=null,ct(e,i,t),Ge=a,di=l,Ge!==null)if(di)try{(Ge.nodeType===9?Ge.body:Ge.nodeName==="HTML"?Ge.ownerDocument.body:Ge).removeChild(t.stateNode)}catch(s){je(t,i,s)}else try{Ge.removeChild(t.stateNode)}catch(s){je(t,i,s)}break;case 18:Ge!==null&&(di?(e=Ge,Dg(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,t.stateNode),Wa(e)):Dg(Ge,t.stateNode));break;case 4:a=Ge,l=di,Ge=t.stateNode.containerInfo,di=!0,ct(e,i,t),Ge=a,di=l;break;case 0:case 11:case 14:case 15:Et(2,t,i),Fe||Et(4,t,i),ct(e,i,t);break;case 1:Fe||(Qi(t,i),a=t.stateNode,typeof a.componentWillUnmount=="function"&&Md(t,i,a)),ct(e,i,t);break;case 21:ct(e,i,t);break;case 22:Fe=(a=Fe)||t.memoizedState!==null,ct(e,i,t),Fe=a;break;default:ct(e,i,t)}}function Hd(e,i){if(i.memoizedState===null&&(e=i.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Wa(e)}catch(t){je(i,i.return,t)}}}function Ud(e,i){if(i.memoizedState===null&&(e=i.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Wa(e)}catch(t){je(i,i.return,t)}}function ff(e){switch(e.tag){case 31:case 13:case 19:var i=e.stateNode;return i===null&&(i=e.stateNode=new Bd),i;case 22:return e=e.stateNode,i=e._retryCache,i===null&&(i=e._retryCache=new Bd),i;default:throw Error(c(435,e.tag))}}function _l(e,i){var t=ff(e);i.forEach(function(a){if(!t.has(a)){t.add(a);var l=wf.bind(null,e,a);a.then(l,l)}})}function gi(e,i){var t=i.deletions;if(t!==null)for(var a=0;a<t.length;a++){var l=t[a],s=e,r=i,o=r;e:for(;o!==null;){switch(o.tag){case 27:if(Bt(o.type)){Ge=o.stateNode,di=!1;break e}break;case 5:Ge=o.stateNode,di=!1;break e;case 3:case 4:Ge=o.stateNode.containerInfo,di=!0;break e}o=o.return}if(Ge===null)throw Error(c(160));Id(s,r,l),Ge=null,di=!1,s=l.alternate,s!==null&&(s.return=null),l.return=null}if(i.subtreeFlags&13886)for(i=i.child;i!==null;)qd(i,e),i=i.sibling}var _i=null;function qd(e,i){var t=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:gi(i,e),mi(e),a&4&&(Et(3,e,e.return),Cn(3,e),Et(5,e,e.return));break;case 1:gi(i,e),mi(e),a&512&&(Fe||t===null||Qi(t,t.return)),a&64&&ot&&(e=e.updateQueue,e!==null&&(a=e.callbacks,a!==null&&(t=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=t===null?a:t.concat(a))));break;case 26:var l=_i;if(gi(i,e),mi(e),a&512&&(Fe||t===null||Qi(t,t.return)),a&4){var s=t!==null?t.memoizedState:null;if(a=e.memoizedState,t===null)if(a===null)if(e.stateNode===null){e:{a=e.type,t=e.memoizedProps,l=l.ownerDocument||l;i:switch(a){case"title":s=l.getElementsByTagName("title")[0],(!s||s[en]||s[$e]||s.namespaceURI==="http://www.w3.org/2000/svg"||s.hasAttribute("itemprop"))&&(s=l.createElement(a),l.head.insertBefore(s,l.querySelector("head > title"))),ai(s,a,t),s[$e]=e,Xe(s),a=s;break e;case"link":var r=qg("link","href",l).get(a+(t.href||""));if(r){for(var o=0;o<r.length;o++)if(s=r[o],s.getAttribute("href")===(t.href==null||t.href===""?null:t.href)&&s.getAttribute("rel")===(t.rel==null?null:t.rel)&&s.getAttribute("title")===(t.title==null?null:t.title)&&s.getAttribute("crossorigin")===(t.crossOrigin==null?null:t.crossOrigin)){r.splice(o,1);break i}}s=l.createElement(a),ai(s,a,t),l.head.appendChild(s);break;case"meta":if(r=qg("meta","content",l).get(a+(t.content||""))){for(o=0;o<r.length;o++)if(s=r[o],s.getAttribute("content")===(t.content==null?null:""+t.content)&&s.getAttribute("name")===(t.name==null?null:t.name)&&s.getAttribute("property")===(t.property==null?null:t.property)&&s.getAttribute("http-equiv")===(t.httpEquiv==null?null:t.httpEquiv)&&s.getAttribute("charset")===(t.charSet==null?null:t.charSet)){r.splice(o,1);break i}}s=l.createElement(a),ai(s,a,t),l.head.appendChild(s);break;default:throw Error(c(468,a))}s[$e]=e,Xe(s),a=s}e.stateNode=a}else _g(l,e.type,e.stateNode);else e.stateNode=Ug(l,a,e.memoizedProps);else s!==a?(s===null?t.stateNode!==null&&(t=t.stateNode,t.parentNode.removeChild(t)):s.count--,a===null?_g(l,e.type,e.stateNode):Ug(l,a,e.memoizedProps)):a===null&&e.stateNode!==null&&Zr(e,e.memoizedProps,t.memoizedProps)}break;case 27:gi(i,e),mi(e),a&512&&(Fe||t===null||Qi(t,t.return)),t!==null&&a&4&&Zr(e,e.memoizedProps,t.memoizedProps);break;case 5:if(gi(i,e),mi(e),a&512&&(Fe||t===null||Qi(t,t.return)),e.flags&32){l=e.stateNode;try{fa(l,"")}catch(W){je(e,e.return,W)}}a&4&&e.stateNode!=null&&(l=e.memoizedProps,Zr(e,l,t!==null?t.memoizedProps:l)),a&1024&&(eo=!0);break;case 6:if(gi(i,e),mi(e),a&4){if(e.stateNode===null)throw Error(c(162));a=e.memoizedProps,t=e.stateNode;try{t.nodeValue=a}catch(W){je(e,e.return,W)}}break;case 3:if(ls=null,l=_i,_i=as(i.containerInfo),gi(i,e),_i=l,mi(e),a&4&&t!==null&&t.memoizedState.isDehydrated)try{Wa(i.containerInfo)}catch(W){je(e,e.return,W)}eo&&(eo=!1,_d(e));break;case 4:a=_i,_i=as(e.stateNode.containerInfo),gi(i,e),mi(e),_i=a;break;case 12:gi(i,e),mi(e);break;case 31:gi(i,e),mi(e),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,_l(e,a)));break;case 13:gi(i,e),mi(e),e.child.flags&8192&&e.memoizedState!==null!=(t!==null&&t.memoizedState!==null)&&(Fl=bi()),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,_l(e,a)));break;case 22:l=e.memoizedState!==null;var f=t!==null&&t.memoizedState!==null,N=ot,D=Fe;if(ot=N||l,Fe=D||f,gi(i,e),Fe=D,ot=N,mi(e),a&8192)e:for(i=e.stateNode,i._visibility=l?i._visibility&-2:i._visibility|1,l&&(t===null||f||ot||Fe||la(e)),t=null,i=e;;){if(i.tag===5||i.tag===26){if(t===null){f=t=i;try{if(s=f.stateNode,l)r=s.style,typeof r.setProperty=="function"?r.setProperty("display","none","important"):r.display="none";else{o=f.stateNode;var z=f.memoizedProps.style,C=z!=null&&z.hasOwnProperty("display")?z.display:null;o.style.display=C==null||typeof C=="boolean"?"":(""+C).trim()}}catch(W){je(f,f.return,W)}}}else if(i.tag===6){if(t===null){f=i;try{f.stateNode.nodeValue=l?"":f.memoizedProps}catch(W){je(f,f.return,W)}}}else if(i.tag===18){if(t===null){f=i;try{var E=f.stateNode;l?Mg(E,!0):Mg(f.stateNode,!1)}catch(W){je(f,f.return,W)}}}else if((i.tag!==22&&i.tag!==23||i.memoizedState===null||i===e)&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break e;for(;i.sibling===null;){if(i.return===null||i.return===e)break e;t===i&&(t=null),i=i.return}t===i&&(t=null),i.sibling.return=i.return,i=i.sibling}a&4&&(a=e.updateQueue,a!==null&&(t=a.retryQueue,t!==null&&(a.retryQueue=null,_l(e,t))));break;case 19:gi(i,e),mi(e),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,_l(e,a)));break;case 30:break;case 21:break;default:gi(i,e),mi(e)}}function mi(e){var i=e.flags;if(i&2){try{for(var t,a=e.return;a!==null;){if(zd(a)){t=a;break}a=a.return}if(t==null)throw Error(c(160));switch(t.tag){case 27:var l=t.stateNode,s=Jr(e);ql(e,s,l);break;case 5:var r=t.stateNode;t.flags&32&&(fa(r,""),t.flags&=-33);var o=Jr(e);ql(e,o,r);break;case 3:case 4:var f=t.stateNode.containerInfo,N=Jr(e);$r(e,N,f);break;default:throw Error(c(161))}}catch(D){je(e,e.return,D)}e.flags&=-3}i&4096&&(e.flags&=-4097)}function _d(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var i=e;_d(i),i.tag===5&&i.flags&1024&&i.stateNode.reset(),e=e.sibling}}function ut(e,i){if(i.subtreeFlags&8772)for(i=i.child;i!==null;)Ld(e,i.alternate,i),i=i.sibling}function la(e){for(e=e.child;e!==null;){var i=e;switch(i.tag){case 0:case 11:case 14:case 15:Et(4,i,i.return),la(i);break;case 1:Qi(i,i.return);var t=i.stateNode;typeof t.componentWillUnmount=="function"&&Md(i,i.return,t),la(i);break;case 27:Ln(i.stateNode);case 26:case 5:Qi(i,i.return),la(i);break;case 22:i.memoizedState===null&&la(i);break;case 30:la(i);break;default:la(i)}e=e.sibling}}function dt(e,i,t){for(t=t&&(i.subtreeFlags&8772)!==0,i=i.child;i!==null;){var a=i.alternate,l=e,s=i,r=s.flags;switch(s.tag){case 0:case 11:case 15:dt(l,s,t),Cn(4,s);break;case 1:if(dt(l,s,t),a=s,l=a.stateNode,typeof l.componentDidMount=="function")try{l.componentDidMount()}catch(N){je(a,a.return,N)}if(a=s,l=a.updateQueue,l!==null){var o=a.stateNode;try{var f=l.shared.hiddenCallbacks;if(f!==null)for(l.shared.hiddenCallbacks=null,l=0;l<f.length;l++)vu(f[l],o)}catch(N){je(a,a.return,N)}}t&&r&64&&Dd(s),Tn(s,s.return);break;case 27:Od(s);case 26:case 5:dt(l,s,t),t&&a===null&&r&4&&Gd(s),Tn(s,s.return);break;case 12:dt(l,s,t);break;case 31:dt(l,s,t),t&&r&4&&Hd(l,s);break;case 13:dt(l,s,t),t&&r&4&&Ud(l,s);break;case 22:s.memoizedState===null&&dt(l,s,t),Tn(s,s.return);break;case 30:break;default:dt(l,s,t)}i=i.sibling}}function io(e,i){var t=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),e=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(e=i.memoizedState.cachePool.pool),e!==t&&(e!=null&&e.refCount++,t!=null&&pn(t))}function to(e,i){e=null,i.alternate!==null&&(e=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==e&&(i.refCount++,e!=null&&pn(e))}function Vi(e,i,t,a){if(i.subtreeFlags&10256)for(i=i.child;i!==null;)Vd(e,i,t,a),i=i.sibling}function Vd(e,i,t,a){var l=i.flags;switch(i.tag){case 0:case 11:case 15:Vi(e,i,t,a),l&2048&&Cn(9,i);break;case 1:Vi(e,i,t,a);break;case 3:Vi(e,i,t,a),l&2048&&(e=null,i.alternate!==null&&(e=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==e&&(i.refCount++,e!=null&&pn(e)));break;case 12:if(l&2048){Vi(e,i,t,a),e=i.stateNode;try{var s=i.memoizedProps,r=s.id,o=s.onPostCommit;typeof o=="function"&&o(r,i.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(f){je(i,i.return,f)}}else Vi(e,i,t,a);break;case 31:Vi(e,i,t,a);break;case 13:Vi(e,i,t,a);break;case 23:break;case 22:s=i.stateNode,r=i.alternate,i.memoizedState!==null?s._visibility&2?Vi(e,i,t,a):En(e,i):s._visibility&2?Vi(e,i,t,a):(s._visibility|=2,Oa(e,i,t,a,(i.subtreeFlags&10256)!==0||!1)),l&2048&&io(r,i);break;case 24:Vi(e,i,t,a),l&2048&&to(i.alternate,i);break;default:Vi(e,i,t,a)}}function Oa(e,i,t,a,l){for(l=l&&((i.subtreeFlags&10256)!==0||!1),i=i.child;i!==null;){var s=e,r=i,o=t,f=a,N=r.flags;switch(r.tag){case 0:case 11:case 15:Oa(s,r,o,f,l),Cn(8,r);break;case 23:break;case 22:var D=r.stateNode;r.memoizedState!==null?D._visibility&2?Oa(s,r,o,f,l):En(s,r):(D._visibility|=2,Oa(s,r,o,f,l)),l&&N&2048&&io(r.alternate,r);break;case 24:Oa(s,r,o,f,l),l&&N&2048&&to(r.alternate,r);break;default:Oa(s,r,o,f,l)}i=i.sibling}}function En(e,i){if(i.subtreeFlags&10256)for(i=i.child;i!==null;){var t=e,a=i,l=a.flags;switch(a.tag){case 22:En(t,a),l&2048&&io(a.alternate,a);break;case 24:En(t,a),l&2048&&to(a.alternate,a);break;default:En(t,a)}i=i.sibling}}var Rn=8192;function Ba(e,i,t){if(e.subtreeFlags&Rn)for(e=e.child;e!==null;)Fd(e,i,t),e=e.sibling}function Fd(e,i,t){switch(e.tag){case 26:Ba(e,i,t),e.flags&Rn&&e.memoizedState!==null&&ih(t,_i,e.memoizedState,e.memoizedProps);break;case 5:Ba(e,i,t);break;case 3:case 4:var a=_i;_i=as(e.stateNode.containerInfo),Ba(e,i,t),_i=a;break;case 22:e.memoizedState===null&&(a=e.alternate,a!==null&&a.memoizedState!==null?(a=Rn,Rn=16777216,Ba(e,i,t),Rn=a):Ba(e,i,t));break;default:Ba(e,i,t)}}function Wd(e){var i=e.alternate;if(i!==null&&(e=i.child,e!==null)){i.child=null;do i=e.sibling,e.sibling=null,e=i;while(e!==null)}}function Dn(e){var i=e.deletions;if((e.flags&16)!==0){if(i!==null)for(var t=0;t<i.length;t++){var a=i[t];Ze=a,Kd(a,e)}Wd(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Yd(e),e=e.sibling}function Yd(e){switch(e.tag){case 0:case 11:case 15:Dn(e),e.flags&2048&&Et(9,e,e.return);break;case 3:Dn(e);break;case 12:Dn(e);break;case 22:var i=e.stateNode;e.memoizedState!==null&&i._visibility&2&&(e.return===null||e.return.tag!==13)?(i._visibility&=-3,Vl(e)):Dn(e);break;default:Dn(e)}}function Vl(e){var i=e.deletions;if((e.flags&16)!==0){if(i!==null)for(var t=0;t<i.length;t++){var a=i[t];Ze=a,Kd(a,e)}Wd(e)}for(e=e.child;e!==null;){switch(i=e,i.tag){case 0:case 11:case 15:Et(8,i,i.return),Vl(i);break;case 22:t=i.stateNode,t._visibility&2&&(t._visibility&=-3,Vl(i));break;default:Vl(i)}e=e.sibling}}function Kd(e,i){for(;Ze!==null;){var t=Ze;switch(t.tag){case 0:case 11:case 15:Et(8,t,i);break;case 23:case 22:if(t.memoizedState!==null&&t.memoizedState.cachePool!==null){var a=t.memoizedState.cachePool.pool;a!=null&&a.refCount++}break;case 24:pn(t.memoizedState.cache)}if(a=t.child,a!==null)a.return=t,Ze=a;else e:for(t=e;Ze!==null;){a=Ze;var l=a.sibling,s=a.return;if(Pd(a),a===t){Ze=null;break e}if(l!==null){l.return=s,Ze=l;break e}Ze=s}}}var hf={getCacheForType:function(e){var i=ii(qe),t=i.data.get(e);return t===void 0&&(t=e(),i.data.set(e,t)),t},cacheSignal:function(){return ii(qe).controller.signal}},yf=typeof WeakMap=="function"?WeakMap:Map,xe=0,Ne=null,oe=null,de=0,ve=0,Ai=null,Rt=!1,La=!1,ao=!1,gt=0,Le=0,Dt=0,sa=0,no=0,Ni=0,Pa=0,Mn=null,pi=null,lo=!1,Fl=0,Qd=0,Wl=1/0,Yl=null,Mt=null,We=0,Gt=null,Ia=null,mt=0,so=0,ro=null,Xd=null,Gn=0,oo=null;function Ci(){return(xe&2)!==0&&de!==0?de&-de:R.T!==null?fo():gc()}function Zd(){if(Ni===0)if((de&536870912)===0||me){var e=il;il<<=1,(il&3932160)===0&&(il=262144),Ni=e}else Ni=536870912;return e=ki.current,e!==null&&(e.flags|=32),Ni}function fi(e,i,t){(e===Ne&&(ve===2||ve===9)||e.cancelPendingCommit!==null)&&(Ha(e,0),zt(e,de,Ni,!1)),$a(e,t),((xe&2)===0||e!==Ne)&&(e===Ne&&((xe&2)===0&&(sa|=t),Le===4&&zt(e,de,Ni,!1)),Xi(e))}function Jd(e,i,t){if((xe&6)!==0)throw Error(c(327));var a=!t&&(i&127)===0&&(i&e.expiredLanes)===0||Ja(e,i),l=a?vf(e,i):uo(e,i,!0),s=a;do{if(l===0){La&&!a&&zt(e,i,0,!1);break}else{if(t=e.current.alternate,s&&!bf(t)){l=uo(e,i,!1),s=!1;continue}if(l===2){if(s=i,e.errorRecoveryDisabledLanes&s)var r=0;else r=e.pendingLanes&-536870913,r=r!==0?r:r&536870912?536870912:0;if(r!==0){i=r;e:{var o=e;l=Mn;var f=o.current.memoizedState.isDehydrated;if(f&&(Ha(o,r).flags|=256),r=uo(o,r,!1),r!==2){if(ao&&!f){o.errorRecoveryDisabledLanes|=s,sa|=s,l=4;break e}s=pi,pi=l,s!==null&&(pi===null?pi=s:pi.push.apply(pi,s))}l=r}if(s=!1,l!==2)continue}}if(l===1){Ha(e,0),zt(e,i,0,!0);break}e:{switch(a=e,s=l,s){case 0:case 1:throw Error(c(345));case 4:if((i&4194048)!==i)break;case 6:zt(a,i,Ni,!Rt);break e;case 2:pi=null;break;case 3:case 5:break;default:throw Error(c(329))}if((i&62914560)===i&&(l=Fl+300-bi(),10<l)){if(zt(a,i,Ni,!Rt),al(a,0,!0)!==0)break e;mt=i,a.timeoutHandle=Eg($d.bind(null,a,t,pi,Yl,lo,i,Ni,sa,Pa,Rt,s,"Throttled",-0,0),l);break e}$d(a,t,pi,Yl,lo,i,Ni,sa,Pa,Rt,s,null,-0,0)}}break}while(!0);Xi(e)}function $d(e,i,t,a,l,s,r,o,f,N,D,z,C,E){if(e.timeoutHandle=-1,z=i.subtreeFlags,z&8192||(z&16785408)===16785408){z={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Ji},Fd(i,s,z);var W=(s&62914560)===s?Fl-bi():(s&4194048)===s?Qd-bi():0;if(W=th(z,W),W!==null){mt=s,e.cancelPendingCommit=W(rg.bind(null,e,i,s,t,a,l,r,o,f,D,z,null,C,E)),zt(e,s,r,!N);return}}rg(e,i,s,t,a,l,r,o,f)}function bf(e){for(var i=e;;){var t=i.tag;if((t===0||t===11||t===15)&&i.flags&16384&&(t=i.updateQueue,t!==null&&(t=t.stores,t!==null)))for(var a=0;a<t.length;a++){var l=t[a],s=l.getSnapshot;l=l.value;try{if(!ji(s(),l))return!1}catch{return!1}}if(t=i.child,i.subtreeFlags&16384&&t!==null)t.return=i,i=t;else{if(i===e)break;for(;i.sibling===null;){if(i.return===null||i.return===e)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function zt(e,i,t,a){i&=~no,i&=~sa,e.suspendedLanes|=i,e.pingedLanes&=~i,a&&(e.warmLanes|=i),a=e.expirationTimes;for(var l=i;0<l;){var s=31-vi(l),r=1<<s;a[s]=-1,l&=~r}t!==0&&cc(e,t,i)}function Kl(){return(xe&6)===0?(zn(0),!1):!0}function co(){if(oe!==null){if(ve===0)var e=oe.return;else e=oe,tt=Zt=null,Ar(e),Ra=null,hn=0,e=oe;for(;e!==null;)Rd(e.alternate,e),e=e.return;oe=null}}function Ha(e,i){var t=e.timeoutHandle;t!==-1&&(e.timeoutHandle=-1,Pf(t)),t=e.cancelPendingCommit,t!==null&&(e.cancelPendingCommit=null,t()),mt=0,co(),Ne=e,oe=t=et(e.current,null),de=i,ve=0,Ai=null,Rt=!1,La=Ja(e,i),ao=!1,Pa=Ni=no=sa=Dt=Le=0,pi=Mn=null,lo=!1,(i&8)!==0&&(i|=i&32);var a=e.entangledLanes;if(a!==0)for(e=e.entanglements,a&=i;0<a;){var l=31-vi(a),s=1<<l;i|=e[l],a&=~s}return gt=i,fl(),t}function eg(e,i){ne=null,R.H=wn,i===Ea||i===kl?(i=hu(),ve=3):i===mr?(i=hu(),ve=4):ve=i===Ur?8:i!==null&&typeof i=="object"&&typeof i.then=="function"?6:1,Ai=i,oe===null&&(Le=1,Ll(e,zi(i,e.current)))}function ig(){var e=ki.current;return e===null?!0:(de&4194048)===de?Pi===null:(de&62914560)===de||(de&536870912)!==0?e===Pi:!1}function tg(){var e=R.H;return R.H=wn,e===null?wn:e}function ag(){var e=R.A;return R.A=hf,e}function Ql(){Le=4,Rt||(de&4194048)!==de&&ki.current!==null||(La=!0),(Dt&134217727)===0&&(sa&134217727)===0||Ne===null||zt(Ne,de,Ni,!1)}function uo(e,i,t){var a=xe;xe|=2;var l=tg(),s=ag();(Ne!==e||de!==i)&&(Yl=null,Ha(e,i)),i=!1;var r=Le;e:do try{if(ve!==0&&oe!==null){var o=oe,f=Ai;switch(ve){case 8:co(),r=6;break e;case 3:case 2:case 9:case 6:ki.current===null&&(i=!0);var N=ve;if(ve=0,Ai=null,Ua(e,o,f,N),t&&La){r=0;break e}break;default:N=ve,ve=0,Ai=null,Ua(e,o,f,N)}}xf(),r=Le;break}catch(D){eg(e,D)}while(!0);return i&&e.shellSuspendCounter++,tt=Zt=null,xe=a,R.H=l,R.A=s,oe===null&&(Ne=null,de=0,fl()),r}function xf(){for(;oe!==null;)ng(oe)}function vf(e,i){var t=xe;xe|=2;var a=tg(),l=ag();Ne!==e||de!==i?(Yl=null,Wl=bi()+500,Ha(e,i)):La=Ja(e,i);e:do try{if(ve!==0&&oe!==null){i=oe;var s=Ai;i:switch(ve){case 1:ve=0,Ai=null,Ua(e,i,s,1);break;case 2:case 9:if(pu(s)){ve=0,Ai=null,lg(i);break}i=function(){ve!==2&&ve!==9||Ne!==e||(ve=7),Xi(e)},s.then(i,i);break e;case 3:ve=7;break e;case 4:ve=5;break e;case 7:pu(s)?(ve=0,Ai=null,lg(i)):(ve=0,Ai=null,Ua(e,i,s,7));break;case 5:var r=null;switch(oe.tag){case 26:r=oe.memoizedState;case 5:case 27:var o=oe;if(r?Vg(r):o.stateNode.complete){ve=0,Ai=null;var f=o.sibling;if(f!==null)oe=f;else{var N=o.return;N!==null?(oe=N,Xl(N)):oe=null}break i}}ve=0,Ai=null,Ua(e,i,s,5);break;case 6:ve=0,Ai=null,Ua(e,i,s,6);break;case 8:co(),Le=6;break e;default:throw Error(c(462))}}jf();break}catch(D){eg(e,D)}while(!0);return tt=Zt=null,R.H=a,R.A=l,xe=t,oe!==null?0:(Ne=null,de=0,fl(),Le)}function jf(){for(;oe!==null&&!_m();)ng(oe)}function ng(e){var i=Td(e.alternate,e,gt);e.memoizedProps=e.pendingProps,i===null?Xl(e):oe=i}function lg(e){var i=e,t=i.alternate;switch(i.tag){case 15:case 0:i=Sd(t,i,i.pendingProps,i.type,void 0,de);break;case 11:i=Sd(t,i,i.pendingProps,i.type.render,i.ref,de);break;case 5:Ar(i);default:Rd(t,i),i=oe=au(i,gt),i=Td(t,i,gt)}e.memoizedProps=e.pendingProps,i===null?Xl(e):oe=i}function Ua(e,i,t,a){tt=Zt=null,Ar(i),Ra=null,hn=0;var l=i.return;try{if(cf(e,l,i,t,de)){Le=1,Ll(e,zi(t,e.current)),oe=null;return}}catch(s){if(l!==null)throw oe=l,s;Le=1,Ll(e,zi(t,e.current)),oe=null;return}i.flags&32768?(me||a===1?e=!0:La||(de&536870912)!==0?e=!1:(Rt=e=!0,(a===2||a===9||a===3||a===6)&&(a=ki.current,a!==null&&a.tag===13&&(a.flags|=16384))),sg(i,e)):Xl(i)}function Xl(e){var i=e;do{if((i.flags&32768)!==0){sg(i,Rt);return}e=i.return;var t=gf(i.alternate,i,gt);if(t!==null){oe=t;return}if(i=i.sibling,i!==null){oe=i;return}oe=i=e}while(i!==null);Le===0&&(Le=5)}function sg(e,i){do{var t=mf(e.alternate,e);if(t!==null){t.flags&=32767,oe=t;return}if(t=e.return,t!==null&&(t.flags|=32768,t.subtreeFlags=0,t.deletions=null),!i&&(e=e.sibling,e!==null)){oe=e;return}oe=e=t}while(e!==null);Le=6,oe=null}function rg(e,i,t,a,l,s,r,o,f){e.cancelPendingCommit=null;do Zl();while(We!==0);if((xe&6)!==0)throw Error(c(327));if(i!==null){if(i===e.current)throw Error(c(177));if(s=i.lanes|i.childLanes,s|=Js,$m(e,t,s,r,o,f),e===Ne&&(oe=Ne=null,de=0),Ia=i,Gt=e,mt=t,so=s,ro=l,Xd=a,(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Af($n,function(){return gg(),null})):(e.callbackNode=null,e.callbackPriority=0),a=(i.flags&13878)!==0,(i.subtreeFlags&13878)!==0||a){a=R.T,R.T=null,l=P.p,P.p=2,r=xe,xe|=4;try{pf(e,i,t)}finally{xe=r,P.p=l,R.T=a}}We=1,og(),cg(),ug()}}function og(){if(We===1){We=0;var e=Gt,i=Ia,t=(i.flags&13878)!==0;if((i.subtreeFlags&13878)!==0||t){t=R.T,R.T=null;var a=P.p;P.p=2;var l=xe;xe|=4;try{qd(i,e);var s=ko,r=Kc(e.containerInfo),o=s.focusedElem,f=s.selectionRange;if(r!==o&&o&&o.ownerDocument&&Yc(o.ownerDocument.documentElement,o)){if(f!==null&&Ys(o)){var N=f.start,D=f.end;if(D===void 0&&(D=N),"selectionStart"in o)o.selectionStart=N,o.selectionEnd=Math.min(D,o.value.length);else{var z=o.ownerDocument||document,C=z&&z.defaultView||window;if(C.getSelection){var E=C.getSelection(),W=o.textContent.length,$=Math.min(f.start,W),Ae=f.end===void 0?$:Math.min(f.end,W);!E.extend&&$>Ae&&(r=Ae,Ae=$,$=r);var k=Wc(o,$),x=Wc(o,Ae);if(k&&x&&(E.rangeCount!==1||E.anchorNode!==k.node||E.anchorOffset!==k.offset||E.focusNode!==x.node||E.focusOffset!==x.offset)){var A=z.createRange();A.setStart(k.node,k.offset),E.removeAllRanges(),$>Ae?(E.addRange(A),E.extend(x.node,x.offset)):(A.setEnd(x.node,x.offset),E.addRange(A))}}}}for(z=[],E=o;E=E.parentNode;)E.nodeType===1&&z.push({element:E,left:E.scrollLeft,top:E.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<z.length;o++){var M=z[o];M.element.scrollLeft=M.left,M.element.scrollTop=M.top}}cs=!!So,ko=So=null}finally{xe=l,P.p=a,R.T=t}}e.current=i,We=2}}function cg(){if(We===2){We=0;var e=Gt,i=Ia,t=(i.flags&8772)!==0;if((i.subtreeFlags&8772)!==0||t){t=R.T,R.T=null;var a=P.p;P.p=2;var l=xe;xe|=4;try{Ld(e,i.alternate,i)}finally{xe=l,P.p=a,R.T=t}}We=3}}function ug(){if(We===4||We===3){We=0,Vm();var e=Gt,i=Ia,t=mt,a=Xd;(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?We=5:(We=0,Ia=Gt=null,dg(e,e.pendingLanes));var l=e.pendingLanes;if(l===0&&(Mt=null),Ts(t),i=i.stateNode,xi&&typeof xi.onCommitFiberRoot=="function")try{xi.onCommitFiberRoot(Za,i,void 0,(i.current.flags&128)===128)}catch{}if(a!==null){i=R.T,l=P.p,P.p=2,R.T=null;try{for(var s=e.onRecoverableError,r=0;r<a.length;r++){var o=a[r];s(o.value,{componentStack:o.stack})}}finally{R.T=i,P.p=l}}(mt&3)!==0&&Zl(),Xi(e),l=e.pendingLanes,(t&261930)!==0&&(l&42)!==0?e===oo?Gn++:(Gn=0,oo=e):Gn=0,zn(0)}}function dg(e,i){(e.pooledCacheLanes&=i)===0&&(i=e.pooledCache,i!=null&&(e.pooledCache=null,pn(i)))}function Zl(){return og(),cg(),ug(),gg()}function gg(){if(We!==5)return!1;var e=Gt,i=so;so=0;var t=Ts(mt),a=R.T,l=P.p;try{P.p=32>t?32:t,R.T=null,t=ro,ro=null;var s=Gt,r=mt;if(We=0,Ia=Gt=null,mt=0,(xe&6)!==0)throw Error(c(331));var o=xe;if(xe|=4,Yd(s.current),Vd(s,s.current,r,t),xe=o,zn(0,!1),xi&&typeof xi.onPostCommitFiberRoot=="function")try{xi.onPostCommitFiberRoot(Za,s)}catch{}return!0}finally{P.p=l,R.T=a,dg(e,i)}}function mg(e,i,t){i=zi(t,i),i=Hr(e.stateNode,i,2),e=Nt(e,i,2),e!==null&&($a(e,2),Xi(e))}function je(e,i,t){if(e.tag===3)mg(e,e,t);else for(;i!==null;){if(i.tag===3){mg(i,e,t);break}else if(i.tag===1){var a=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(Mt===null||!Mt.has(a))){e=zi(t,e),t=pd(2),a=Nt(i,t,2),a!==null&&(fd(t,a,i,e),$a(a,2),Xi(a));break}}i=i.return}}function go(e,i,t){var a=e.pingCache;if(a===null){a=e.pingCache=new yf;var l=new Set;a.set(i,l)}else l=a.get(i),l===void 0&&(l=new Set,a.set(i,l));l.has(t)||(ao=!0,l.add(t),e=Sf.bind(null,e,i,t),i.then(e,e))}function Sf(e,i,t){var a=e.pingCache;a!==null&&a.delete(i),e.pingedLanes|=e.suspendedLanes&t,e.warmLanes&=~t,Ne===e&&(de&t)===t&&(Le===4||Le===3&&(de&62914560)===de&&300>bi()-Fl?(xe&2)===0&&Ha(e,0):no|=t,Pa===de&&(Pa=0)),Xi(e)}function pg(e,i){i===0&&(i=oc()),e=Kt(e,i),e!==null&&($a(e,i),Xi(e))}function kf(e){var i=e.memoizedState,t=0;i!==null&&(t=i.retryLane),pg(e,t)}function wf(e,i){var t=0;switch(e.tag){case 31:case 13:var a=e.stateNode,l=e.memoizedState;l!==null&&(t=l.retryLane);break;case 19:a=e.stateNode;break;case 22:a=e.stateNode._retryCache;break;default:throw Error(c(314))}a!==null&&a.delete(i),pg(e,t)}function Af(e,i){return qt(e,i)}var Jl=null,qa=null,mo=!1,$l=!1,po=!1,Ot=0;function Xi(e){e!==qa&&e.next===null&&(qa===null?Jl=qa=e:qa=qa.next=e),$l=!0,mo||(mo=!0,Cf())}function zn(e,i){if(!po&&$l){po=!0;do for(var t=!1,a=Jl;a!==null;){if(e!==0){var l=a.pendingLanes;if(l===0)var s=0;else{var r=a.suspendedLanes,o=a.pingedLanes;s=(1<<31-vi(42|e)+1)-1,s&=l&~(r&~o),s=s&201326741?s&201326741|1:s?s|2:0}s!==0&&(t=!0,bg(a,s))}else s=de,s=al(a,a===Ne?s:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),(s&3)===0||Ja(a,s)||(t=!0,bg(a,s));a=a.next}while(t);po=!1}}function Nf(){fg()}function fg(){$l=mo=!1;var e=0;Ot!==0&&Lf()&&(e=Ot);for(var i=bi(),t=null,a=Jl;a!==null;){var l=a.next,s=hg(a,i);s===0?(a.next=null,t===null?Jl=l:t.next=l,l===null&&(qa=t)):(t=a,(e!==0||(s&3)!==0)&&($l=!0)),a=l}We!==0&&We!==5||zn(e),Ot!==0&&(Ot=0)}function hg(e,i){for(var t=e.suspendedLanes,a=e.pingedLanes,l=e.expirationTimes,s=e.pendingLanes&-62914561;0<s;){var r=31-vi(s),o=1<<r,f=l[r];f===-1?((o&t)===0||(o&a)!==0)&&(l[r]=Jm(o,i)):f<=i&&(e.expiredLanes|=o),s&=~o}if(i=Ne,t=de,t=al(e,e===i?t:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a=e.callbackNode,t===0||e===i&&(ve===2||ve===9)||e.cancelPendingCommit!==null)return a!==null&&a!==null&&As(a),e.callbackNode=null,e.callbackPriority=0;if((t&3)===0||Ja(e,t)){if(i=t&-t,i===e.callbackPriority)return i;switch(a!==null&&As(a),Ts(t)){case 2:case 8:t=sc;break;case 32:t=$n;break;case 268435456:t=rc;break;default:t=$n}return a=yg.bind(null,e),t=qt(t,a),e.callbackPriority=i,e.callbackNode=t,i}return a!==null&&a!==null&&As(a),e.callbackPriority=2,e.callbackNode=null,2}function yg(e,i){if(We!==0&&We!==5)return e.callbackNode=null,e.callbackPriority=0,null;var t=e.callbackNode;if(Zl()&&e.callbackNode!==t)return null;var a=de;return a=al(e,e===Ne?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a===0?null:(Jd(e,a,i),hg(e,bi()),e.callbackNode!=null&&e.callbackNode===t?yg.bind(null,e):null)}function bg(e,i){if(Zl())return null;Jd(e,i,!0)}function Cf(){If(function(){(xe&6)!==0?qt(lc,Nf):fg()})}function fo(){if(Ot===0){var e=Ca;e===0&&(e=el,el<<=1,(el&261888)===0&&(el=256)),Ot=e}return Ot}function xg(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:rl(""+e)}function vg(e,i){var t=i.ownerDocument.createElement("input");return t.name=i.name,t.value=i.value,e.id&&t.setAttribute("form",e.id),i.parentNode.insertBefore(t,i),e=new FormData(e),t.parentNode.removeChild(t),e}function Tf(e,i,t,a,l){if(i==="submit"&&t&&t.stateNode===l){var s=xg((l[ci]||null).action),r=a.submitter;r&&(i=(i=r[ci]||null)?xg(i.formAction):r.getAttribute("formAction"),i!==null&&(s=i,r=null));var o=new dl("action","action",null,a,l);e.push({event:o,listeners:[{instance:null,listener:function(){if(a.defaultPrevented){if(Ot!==0){var f=r?vg(l,r):new FormData(l);zr(t,{pending:!0,data:f,method:l.method,action:s},null,f)}}else typeof s=="function"&&(o.preventDefault(),f=r?vg(l,r):new FormData(l),zr(t,{pending:!0,data:f,method:l.method,action:s},s,f))},currentTarget:l}]})}}for(var ho=0;ho<Zs.length;ho++){var yo=Zs[ho],Ef=yo.toLowerCase(),Rf=yo[0].toUpperCase()+yo.slice(1);qi(Ef,"on"+Rf)}qi(Zc,"onAnimationEnd"),qi(Jc,"onAnimationIteration"),qi($c,"onAnimationStart"),qi("dblclick","onDoubleClick"),qi("focusin","onFocus"),qi("focusout","onBlur"),qi(Fp,"onTransitionRun"),qi(Wp,"onTransitionStart"),qi(Yp,"onTransitionCancel"),qi(eu,"onTransitionEnd"),ma("onMouseEnter",["mouseout","mouseover"]),ma("onMouseLeave",["mouseout","mouseover"]),ma("onPointerEnter",["pointerout","pointerover"]),ma("onPointerLeave",["pointerout","pointerover"]),Vt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Vt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Vt("onBeforeInput",["compositionend","keypress","textInput","paste"]),Vt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Vt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Vt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var On="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Df=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(On));function jg(e,i){i=(i&4)!==0;for(var t=0;t<e.length;t++){var a=e[t],l=a.event;a=a.listeners;e:{var s=void 0;if(i)for(var r=a.length-1;0<=r;r--){var o=a[r],f=o.instance,N=o.currentTarget;if(o=o.listener,f!==s&&l.isPropagationStopped())break e;s=o,l.currentTarget=N;try{s(l)}catch(D){pl(D)}l.currentTarget=null,s=f}else for(r=0;r<a.length;r++){if(o=a[r],f=o.instance,N=o.currentTarget,o=o.listener,f!==s&&l.isPropagationStopped())break e;s=o,l.currentTarget=N;try{s(l)}catch(D){pl(D)}l.currentTarget=null,s=f}}}}function ce(e,i){var t=i[Es];t===void 0&&(t=i[Es]=new Set);var a=e+"__bubble";t.has(a)||(Sg(i,e,2,!1),t.add(a))}function bo(e,i,t){var a=0;i&&(a|=4),Sg(t,e,a,i)}var es="_reactListening"+Math.random().toString(36).slice(2);function xo(e){if(!e[es]){e[es]=!0,fc.forEach(function(t){t!=="selectionchange"&&(Df.has(t)||bo(t,!1,e),bo(t,!0,e))});var i=e.nodeType===9?e:e.ownerDocument;i===null||i[es]||(i[es]=!0,bo("selectionchange",!1,i))}}function Sg(e,i,t,a){switch(Zg(i)){case 2:var l=lh;break;case 8:l=sh;break;default:l=zo}t=l.bind(null,i,t,e),l=void 0,!Ps||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(l=!0),a?l!==void 0?e.addEventListener(i,t,{capture:!0,passive:l}):e.addEventListener(i,t,!0):l!==void 0?e.addEventListener(i,t,{passive:l}):e.addEventListener(i,t,!1)}function vo(e,i,t,a,l){var s=a;if((i&1)===0&&(i&2)===0&&a!==null)e:for(;;){if(a===null)return;var r=a.tag;if(r===3||r===4){var o=a.stateNode.containerInfo;if(o===l)break;if(r===4)for(r=a.return;r!==null;){var f=r.tag;if((f===3||f===4)&&r.stateNode.containerInfo===l)return;r=r.return}for(;o!==null;){if(r=ua(o),r===null)return;if(f=r.tag,f===5||f===6||f===26||f===27){a=s=r;continue e}o=o.parentNode}}a=a.return}Cc(function(){var N=s,D=Bs(t),z=[];e:{var C=iu.get(e);if(C!==void 0){var E=dl,W=e;switch(e){case"keypress":if(cl(t)===0)break e;case"keydown":case"keyup":E=kp;break;case"focusin":W="focus",E=qs;break;case"focusout":W="blur",E=qs;break;case"beforeblur":case"afterblur":E=qs;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":E=Rc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":E=dp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":E=Np;break;case Zc:case Jc:case $c:E=pp;break;case eu:E=Tp;break;case"scroll":case"scrollend":E=cp;break;case"wheel":E=Rp;break;case"copy":case"cut":case"paste":E=hp;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":E=Mc;break;case"toggle":case"beforetoggle":E=Mp}var $=(i&4)!==0,Ae=!$&&(e==="scroll"||e==="scrollend"),k=$?C!==null?C+"Capture":null:C;$=[];for(var x=N,A;x!==null;){var M=x;if(A=M.stateNode,M=M.tag,M!==5&&M!==26&&M!==27||A===null||k===null||(M=an(x,k),M!=null&&$.push(Bn(x,M,A))),Ae)break;x=x.return}0<$.length&&(C=new E(C,W,null,t,D),z.push({event:C,listeners:$}))}}if((i&7)===0){e:{if(C=e==="mouseover"||e==="pointerover",E=e==="mouseout"||e==="pointerout",C&&t!==Os&&(W=t.relatedTarget||t.fromElement)&&(ua(W)||W[ca]))break e;if((E||C)&&(C=D.window===D?D:(C=D.ownerDocument)?C.defaultView||C.parentWindow:window,E?(W=t.relatedTarget||t.toElement,E=N,W=W?ua(W):null,W!==null&&(Ae=g(W),$=W.tag,W!==Ae||$!==5&&$!==27&&$!==6)&&(W=null)):(E=null,W=N),E!==W)){if($=Rc,M="onMouseLeave",k="onMouseEnter",x="mouse",(e==="pointerout"||e==="pointerover")&&($=Mc,M="onPointerLeave",k="onPointerEnter",x="pointer"),Ae=E==null?C:tn(E),A=W==null?C:tn(W),C=new $(M,x+"leave",E,t,D),C.target=Ae,C.relatedTarget=A,M=null,ua(D)===N&&($=new $(k,x+"enter",W,t,D),$.target=A,$.relatedTarget=Ae,M=$),Ae=M,E&&W)i:{for($=Mf,k=E,x=W,A=0,M=k;M;M=$(M))A++;M=0;for(var X=x;X;X=$(X))M++;for(;0<A-M;)k=$(k),A--;for(;0<M-A;)x=$(x),M--;for(;A--;){if(k===x||x!==null&&k===x.alternate){$=k;break i}k=$(k),x=$(x)}$=null}else $=null;E!==null&&kg(z,C,E,$,!1),W!==null&&Ae!==null&&kg(z,Ae,W,$,!0)}}e:{if(C=N?tn(N):window,E=C.nodeName&&C.nodeName.toLowerCase(),E==="select"||E==="input"&&C.type==="file")var fe=Hc;else if(Pc(C))if(Uc)fe=qp;else{fe=Hp;var K=Ip}else E=C.nodeName,!E||E.toLowerCase()!=="input"||C.type!=="checkbox"&&C.type!=="radio"?N&&zs(N.elementType)&&(fe=Hc):fe=Up;if(fe&&(fe=fe(e,N))){Ic(z,fe,t,D);break e}K&&K(e,C,N),e==="focusout"&&N&&C.type==="number"&&N.memoizedProps.value!=null&&Gs(C,"number",C.value)}switch(K=N?tn(N):window,e){case"focusin":(Pc(K)||K.contentEditable==="true")&&(xa=K,Ks=N,dn=null);break;case"focusout":dn=Ks=xa=null;break;case"mousedown":Qs=!0;break;case"contextmenu":case"mouseup":case"dragend":Qs=!1,Qc(z,t,D);break;case"selectionchange":if(Vp)break;case"keydown":case"keyup":Qc(z,t,D)}var re;if(Vs)e:{switch(e){case"compositionstart":var ge="onCompositionStart";break e;case"compositionend":ge="onCompositionEnd";break e;case"compositionupdate":ge="onCompositionUpdate";break e}ge=void 0}else ba?Bc(e,t)&&(ge="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(ge="onCompositionStart");ge&&(Gc&&t.locale!=="ko"&&(ba||ge!=="onCompositionStart"?ge==="onCompositionEnd"&&ba&&(re=Tc()):(xt=D,Is="value"in xt?xt.value:xt.textContent,ba=!0)),K=is(N,ge),0<K.length&&(ge=new Dc(ge,e,null,t,D),z.push({event:ge,listeners:K}),re?ge.data=re:(re=Lc(t),re!==null&&(ge.data=re)))),(re=zp?Op(e,t):Bp(e,t))&&(ge=is(N,"onBeforeInput"),0<ge.length&&(K=new Dc("onBeforeInput","beforeinput",null,t,D),z.push({event:K,listeners:ge}),K.data=re)),Tf(z,e,N,t,D)}jg(z,i)})}function Bn(e,i,t){return{instance:e,listener:i,currentTarget:t}}function is(e,i){for(var t=i+"Capture",a=[];e!==null;){var l=e,s=l.stateNode;if(l=l.tag,l!==5&&l!==26&&l!==27||s===null||(l=an(e,t),l!=null&&a.unshift(Bn(e,l,s)),l=an(e,i),l!=null&&a.push(Bn(e,l,s))),e.tag===3)return a;e=e.return}return[]}function Mf(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function kg(e,i,t,a,l){for(var s=i._reactName,r=[];t!==null&&t!==a;){var o=t,f=o.alternate,N=o.stateNode;if(o=o.tag,f!==null&&f===a)break;o!==5&&o!==26&&o!==27||N===null||(f=N,l?(N=an(t,s),N!=null&&r.unshift(Bn(t,N,f))):l||(N=an(t,s),N!=null&&r.push(Bn(t,N,f)))),t=t.return}r.length!==0&&e.push({event:i,listeners:r})}var Gf=/\r\n?/g,zf=/\u0000|\uFFFD/g;function wg(e){return(typeof e=="string"?e:""+e).replace(Gf,`
`).replace(zf,"")}function Ag(e,i){return i=wg(i),wg(e)===i}function we(e,i,t,a,l,s){switch(t){case"children":typeof a=="string"?i==="body"||i==="textarea"&&a===""||fa(e,a):(typeof a=="number"||typeof a=="bigint")&&i!=="body"&&fa(e,""+a);break;case"className":ll(e,"class",a);break;case"tabIndex":ll(e,"tabindex",a);break;case"dir":case"role":case"viewBox":case"width":case"height":ll(e,t,a);break;case"style":Ac(e,a,s);break;case"data":if(i!=="object"){ll(e,"data",a);break}case"src":case"href":if(a===""&&(i!=="a"||t!=="href")){e.removeAttribute(t);break}if(a==null||typeof a=="function"||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(t);break}a=rl(""+a),e.setAttribute(t,a);break;case"action":case"formAction":if(typeof a=="function"){e.setAttribute(t,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof s=="function"&&(t==="formAction"?(i!=="input"&&we(e,i,"name",l.name,l,null),we(e,i,"formEncType",l.formEncType,l,null),we(e,i,"formMethod",l.formMethod,l,null),we(e,i,"formTarget",l.formTarget,l,null)):(we(e,i,"encType",l.encType,l,null),we(e,i,"method",l.method,l,null),we(e,i,"target",l.target,l,null)));if(a==null||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(t);break}a=rl(""+a),e.setAttribute(t,a);break;case"onClick":a!=null&&(e.onclick=Ji);break;case"onScroll":a!=null&&ce("scroll",e);break;case"onScrollEnd":a!=null&&ce("scrollend",e);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(c(61));if(t=a.__html,t!=null){if(l.children!=null)throw Error(c(60));e.innerHTML=t}}break;case"multiple":e.multiple=a&&typeof a!="function"&&typeof a!="symbol";break;case"muted":e.muted=a&&typeof a!="function"&&typeof a!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(a==null||typeof a=="function"||typeof a=="boolean"||typeof a=="symbol"){e.removeAttribute("xlink:href");break}t=rl(""+a),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",t);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(t,""+a):e.removeAttribute(t);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(t,""):e.removeAttribute(t);break;case"capture":case"download":a===!0?e.setAttribute(t,""):a!==!1&&a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(t,a):e.removeAttribute(t);break;case"cols":case"rows":case"size":case"span":a!=null&&typeof a!="function"&&typeof a!="symbol"&&!isNaN(a)&&1<=a?e.setAttribute(t,a):e.removeAttribute(t);break;case"rowSpan":case"start":a==null||typeof a=="function"||typeof a=="symbol"||isNaN(a)?e.removeAttribute(t):e.setAttribute(t,a);break;case"popover":ce("beforetoggle",e),ce("toggle",e),nl(e,"popover",a);break;case"xlinkActuate":Zi(e,"http://www.w3.org/1999/xlink","xlink:actuate",a);break;case"xlinkArcrole":Zi(e,"http://www.w3.org/1999/xlink","xlink:arcrole",a);break;case"xlinkRole":Zi(e,"http://www.w3.org/1999/xlink","xlink:role",a);break;case"xlinkShow":Zi(e,"http://www.w3.org/1999/xlink","xlink:show",a);break;case"xlinkTitle":Zi(e,"http://www.w3.org/1999/xlink","xlink:title",a);break;case"xlinkType":Zi(e,"http://www.w3.org/1999/xlink","xlink:type",a);break;case"xmlBase":Zi(e,"http://www.w3.org/XML/1998/namespace","xml:base",a);break;case"xmlLang":Zi(e,"http://www.w3.org/XML/1998/namespace","xml:lang",a);break;case"xmlSpace":Zi(e,"http://www.w3.org/XML/1998/namespace","xml:space",a);break;case"is":nl(e,"is",a);break;case"innerText":case"textContent":break;default:(!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(t=rp.get(t)||t,nl(e,t,a))}}function jo(e,i,t,a,l,s){switch(t){case"style":Ac(e,a,s);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(c(61));if(t=a.__html,t!=null){if(l.children!=null)throw Error(c(60));e.innerHTML=t}}break;case"children":typeof a=="string"?fa(e,a):(typeof a=="number"||typeof a=="bigint")&&fa(e,""+a);break;case"onScroll":a!=null&&ce("scroll",e);break;case"onScrollEnd":a!=null&&ce("scrollend",e);break;case"onClick":a!=null&&(e.onclick=Ji);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!hc.hasOwnProperty(t))e:{if(t[0]==="o"&&t[1]==="n"&&(l=t.endsWith("Capture"),i=t.slice(2,l?t.length-7:void 0),s=e[ci]||null,s=s!=null?s[t]:null,typeof s=="function"&&e.removeEventListener(i,s,l),typeof a=="function")){typeof s!="function"&&s!==null&&(t in e?e[t]=null:e.hasAttribute(t)&&e.removeAttribute(t)),e.addEventListener(i,a,l);break e}t in e?e[t]=a:a===!0?e.setAttribute(t,""):nl(e,t,a)}}}function ai(e,i,t){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ce("error",e),ce("load",e);var a=!1,l=!1,s;for(s in t)if(t.hasOwnProperty(s)){var r=t[s];if(r!=null)switch(s){case"src":a=!0;break;case"srcSet":l=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(c(137,i));default:we(e,i,s,r,t,null)}}l&&we(e,i,"srcSet",t.srcSet,t,null),a&&we(e,i,"src",t.src,t,null);return;case"input":ce("invalid",e);var o=s=r=l=null,f=null,N=null;for(a in t)if(t.hasOwnProperty(a)){var D=t[a];if(D!=null)switch(a){case"name":l=D;break;case"type":r=D;break;case"checked":f=D;break;case"defaultChecked":N=D;break;case"value":s=D;break;case"defaultValue":o=D;break;case"children":case"dangerouslySetInnerHTML":if(D!=null)throw Error(c(137,i));break;default:we(e,i,a,D,t,null)}}jc(e,s,o,f,N,r,l,!1);return;case"select":ce("invalid",e),a=r=s=null;for(l in t)if(t.hasOwnProperty(l)&&(o=t[l],o!=null))switch(l){case"value":s=o;break;case"defaultValue":r=o;break;case"multiple":a=o;default:we(e,i,l,o,t,null)}i=s,t=r,e.multiple=!!a,i!=null?pa(e,!!a,i,!1):t!=null&&pa(e,!!a,t,!0);return;case"textarea":ce("invalid",e),s=l=a=null;for(r in t)if(t.hasOwnProperty(r)&&(o=t[r],o!=null))switch(r){case"value":a=o;break;case"defaultValue":l=o;break;case"children":s=o;break;case"dangerouslySetInnerHTML":if(o!=null)throw Error(c(91));break;default:we(e,i,r,o,t,null)}kc(e,a,l,s);return;case"option":for(f in t)if(t.hasOwnProperty(f)&&(a=t[f],a!=null))switch(f){case"selected":e.selected=a&&typeof a!="function"&&typeof a!="symbol";break;default:we(e,i,f,a,t,null)}return;case"dialog":ce("beforetoggle",e),ce("toggle",e),ce("cancel",e),ce("close",e);break;case"iframe":case"object":ce("load",e);break;case"video":case"audio":for(a=0;a<On.length;a++)ce(On[a],e);break;case"image":ce("error",e),ce("load",e);break;case"details":ce("toggle",e);break;case"embed":case"source":case"link":ce("error",e),ce("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(N in t)if(t.hasOwnProperty(N)&&(a=t[N],a!=null))switch(N){case"children":case"dangerouslySetInnerHTML":throw Error(c(137,i));default:we(e,i,N,a,t,null)}return;default:if(zs(i)){for(D in t)t.hasOwnProperty(D)&&(a=t[D],a!==void 0&&jo(e,i,D,a,t,void 0));return}}for(o in t)t.hasOwnProperty(o)&&(a=t[o],a!=null&&we(e,i,o,a,t,null))}function Of(e,i,t,a){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var l=null,s=null,r=null,o=null,f=null,N=null,D=null;for(E in t){var z=t[E];if(t.hasOwnProperty(E)&&z!=null)switch(E){case"checked":break;case"value":break;case"defaultValue":f=z;default:a.hasOwnProperty(E)||we(e,i,E,null,a,z)}}for(var C in a){var E=a[C];if(z=t[C],a.hasOwnProperty(C)&&(E!=null||z!=null))switch(C){case"type":s=E;break;case"name":l=E;break;case"checked":N=E;break;case"defaultChecked":D=E;break;case"value":r=E;break;case"defaultValue":o=E;break;case"children":case"dangerouslySetInnerHTML":if(E!=null)throw Error(c(137,i));break;default:E!==z&&we(e,i,C,E,a,z)}}Ms(e,r,o,f,N,D,s,l);return;case"select":E=r=o=C=null;for(s in t)if(f=t[s],t.hasOwnProperty(s)&&f!=null)switch(s){case"value":break;case"multiple":E=f;default:a.hasOwnProperty(s)||we(e,i,s,null,a,f)}for(l in a)if(s=a[l],f=t[l],a.hasOwnProperty(l)&&(s!=null||f!=null))switch(l){case"value":C=s;break;case"defaultValue":o=s;break;case"multiple":r=s;default:s!==f&&we(e,i,l,s,a,f)}i=o,t=r,a=E,C!=null?pa(e,!!t,C,!1):!!a!=!!t&&(i!=null?pa(e,!!t,i,!0):pa(e,!!t,t?[]:"",!1));return;case"textarea":E=C=null;for(o in t)if(l=t[o],t.hasOwnProperty(o)&&l!=null&&!a.hasOwnProperty(o))switch(o){case"value":break;case"children":break;default:we(e,i,o,null,a,l)}for(r in a)if(l=a[r],s=t[r],a.hasOwnProperty(r)&&(l!=null||s!=null))switch(r){case"value":C=l;break;case"defaultValue":E=l;break;case"children":break;case"dangerouslySetInnerHTML":if(l!=null)throw Error(c(91));break;default:l!==s&&we(e,i,r,l,a,s)}Sc(e,C,E);return;case"option":for(var W in t)if(C=t[W],t.hasOwnProperty(W)&&C!=null&&!a.hasOwnProperty(W))switch(W){case"selected":e.selected=!1;break;default:we(e,i,W,null,a,C)}for(f in a)if(C=a[f],E=t[f],a.hasOwnProperty(f)&&C!==E&&(C!=null||E!=null))switch(f){case"selected":e.selected=C&&typeof C!="function"&&typeof C!="symbol";break;default:we(e,i,f,C,a,E)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var $ in t)C=t[$],t.hasOwnProperty($)&&C!=null&&!a.hasOwnProperty($)&&we(e,i,$,null,a,C);for(N in a)if(C=a[N],E=t[N],a.hasOwnProperty(N)&&C!==E&&(C!=null||E!=null))switch(N){case"children":case"dangerouslySetInnerHTML":if(C!=null)throw Error(c(137,i));break;default:we(e,i,N,C,a,E)}return;default:if(zs(i)){for(var Ae in t)C=t[Ae],t.hasOwnProperty(Ae)&&C!==void 0&&!a.hasOwnProperty(Ae)&&jo(e,i,Ae,void 0,a,C);for(D in a)C=a[D],E=t[D],!a.hasOwnProperty(D)||C===E||C===void 0&&E===void 0||jo(e,i,D,C,a,E);return}}for(var k in t)C=t[k],t.hasOwnProperty(k)&&C!=null&&!a.hasOwnProperty(k)&&we(e,i,k,null,a,C);for(z in a)C=a[z],E=t[z],!a.hasOwnProperty(z)||C===E||C==null&&E==null||we(e,i,z,C,a,E)}function Ng(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Bf(){if(typeof performance.getEntriesByType=="function"){for(var e=0,i=0,t=performance.getEntriesByType("resource"),a=0;a<t.length;a++){var l=t[a],s=l.transferSize,r=l.initiatorType,o=l.duration;if(s&&o&&Ng(r)){for(r=0,o=l.responseEnd,a+=1;a<t.length;a++){var f=t[a],N=f.startTime;if(N>o)break;var D=f.transferSize,z=f.initiatorType;D&&Ng(z)&&(f=f.responseEnd,r+=D*(f<o?1:(o-N)/(f-N)))}if(--a,i+=8*(s+r)/(l.duration/1e3),e++,10<e)break}}if(0<e)return i/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var So=null,ko=null;function ts(e){return e.nodeType===9?e:e.ownerDocument}function Cg(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Tg(e,i){if(e===0)switch(i){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&i==="foreignObject"?0:e}function wo(e,i){return e==="textarea"||e==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.children=="bigint"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Ao=null;function Lf(){var e=window.event;return e&&e.type==="popstate"?e===Ao?!1:(Ao=e,!0):(Ao=null,!1)}var Eg=typeof setTimeout=="function"?setTimeout:void 0,Pf=typeof clearTimeout=="function"?clearTimeout:void 0,Rg=typeof Promise=="function"?Promise:void 0,If=typeof queueMicrotask=="function"?queueMicrotask:typeof Rg<"u"?function(e){return Rg.resolve(null).then(e).catch(Hf)}:Eg;function Hf(e){setTimeout(function(){throw e})}function Bt(e){return e==="head"}function Dg(e,i){var t=i,a=0;do{var l=t.nextSibling;if(e.removeChild(t),l&&l.nodeType===8)if(t=l.data,t==="/$"||t==="/&"){if(a===0){e.removeChild(l),Wa(i);return}a--}else if(t==="$"||t==="$?"||t==="$~"||t==="$!"||t==="&")a++;else if(t==="html")Ln(e.ownerDocument.documentElement);else if(t==="head"){t=e.ownerDocument.head,Ln(t);for(var s=t.firstChild;s;){var r=s.nextSibling,o=s.nodeName;s[en]||o==="SCRIPT"||o==="STYLE"||o==="LINK"&&s.rel.toLowerCase()==="stylesheet"||t.removeChild(s),s=r}}else t==="body"&&Ln(e.ownerDocument.body);t=l}while(t);Wa(i)}function Mg(e,i){var t=e;e=0;do{var a=t.nextSibling;if(t.nodeType===1?i?(t._stashedDisplay=t.style.display,t.style.display="none"):(t.style.display=t._stashedDisplay||"",t.getAttribute("style")===""&&t.removeAttribute("style")):t.nodeType===3&&(i?(t._stashedText=t.nodeValue,t.nodeValue=""):t.nodeValue=t._stashedText||""),a&&a.nodeType===8)if(t=a.data,t==="/$"){if(e===0)break;e--}else t!=="$"&&t!=="$?"&&t!=="$~"&&t!=="$!"||e++;t=a}while(t)}function No(e){var i=e.firstChild;for(i&&i.nodeType===10&&(i=i.nextSibling);i;){var t=i;switch(i=i.nextSibling,t.nodeName){case"HTML":case"HEAD":case"BODY":No(t),Rs(t);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(t.rel.toLowerCase()==="stylesheet")continue}e.removeChild(t)}}function Uf(e,i,t,a){for(;e.nodeType===1;){var l=t;if(e.nodeName.toLowerCase()!==i.toLowerCase()){if(!a&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(a){if(!e[en])switch(i){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(s=e.getAttribute("rel"),s==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(s!==l.rel||e.getAttribute("href")!==(l.href==null||l.href===""?null:l.href)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin)||e.getAttribute("title")!==(l.title==null?null:l.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(s=e.getAttribute("src"),(s!==(l.src==null?null:l.src)||e.getAttribute("type")!==(l.type==null?null:l.type)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin))&&s&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(i==="input"&&e.type==="hidden"){var s=l.name==null?null:""+l.name;if(l.type==="hidden"&&e.getAttribute("name")===s)return e}else return e;if(e=Ii(e.nextSibling),e===null)break}return null}function qf(e,i,t){if(i==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=Ii(e.nextSibling),e===null))return null;return e}function Gg(e,i){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!i||(e=Ii(e.nextSibling),e===null))return null;return e}function Co(e){return e.data==="$?"||e.data==="$~"}function To(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function _f(e,i){var t=e.ownerDocument;if(e.data==="$~")e._reactRetry=i;else if(e.data!=="$?"||t.readyState!=="loading")i();else{var a=function(){i(),t.removeEventListener("DOMContentLoaded",a)};t.addEventListener("DOMContentLoaded",a),e._reactRetry=a}}function Ii(e){for(;e!=null;e=e.nextSibling){var i=e.nodeType;if(i===1||i===3)break;if(i===8){if(i=e.data,i==="$"||i==="$!"||i==="$?"||i==="$~"||i==="&"||i==="F!"||i==="F")break;if(i==="/$"||i==="/&")return null}}return e}var Eo=null;function zg(e){e=e.nextSibling;for(var i=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"||t==="/&"){if(i===0)return Ii(e.nextSibling);i--}else t!=="$"&&t!=="$!"&&t!=="$?"&&t!=="$~"&&t!=="&"||i++}e=e.nextSibling}return null}function Og(e){e=e.previousSibling;for(var i=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"){if(i===0)return e;i--}else t!=="/$"&&t!=="/&"||i++}e=e.previousSibling}return null}function Bg(e,i,t){switch(i=ts(t),e){case"html":if(e=i.documentElement,!e)throw Error(c(452));return e;case"head":if(e=i.head,!e)throw Error(c(453));return e;case"body":if(e=i.body,!e)throw Error(c(454));return e;default:throw Error(c(451))}}function Ln(e){for(var i=e.attributes;i.length;)e.removeAttributeNode(i[0]);Rs(e)}var Hi=new Map,Lg=new Set;function as(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var pt=P.d;P.d={f:Vf,r:Ff,D:Wf,C:Yf,L:Kf,m:Qf,X:Zf,S:Xf,M:Jf};function Vf(){var e=pt.f(),i=Kl();return e||i}function Ff(e){var i=da(e);i!==null&&i.tag===5&&i.type==="form"?ed(i):pt.r(e)}var _a=typeof document>"u"?null:document;function Pg(e,i,t){var a=_a;if(a&&typeof i=="string"&&i){var l=Mi(i);l='link[rel="'+e+'"][href="'+l+'"]',typeof t=="string"&&(l+='[crossorigin="'+t+'"]'),Lg.has(l)||(Lg.add(l),e={rel:e,crossOrigin:t,href:i},a.querySelector(l)===null&&(i=a.createElement("link"),ai(i,"link",e),Xe(i),a.head.appendChild(i)))}}function Wf(e){pt.D(e),Pg("dns-prefetch",e,null)}function Yf(e,i){pt.C(e,i),Pg("preconnect",e,i)}function Kf(e,i,t){pt.L(e,i,t);var a=_a;if(a&&e&&i){var l='link[rel="preload"][as="'+Mi(i)+'"]';i==="image"&&t&&t.imageSrcSet?(l+='[imagesrcset="'+Mi(t.imageSrcSet)+'"]',typeof t.imageSizes=="string"&&(l+='[imagesizes="'+Mi(t.imageSizes)+'"]')):l+='[href="'+Mi(e)+'"]';var s=l;switch(i){case"style":s=Va(e);break;case"script":s=Fa(e)}Hi.has(s)||(e=S({rel:"preload",href:i==="image"&&t&&t.imageSrcSet?void 0:e,as:i},t),Hi.set(s,e),a.querySelector(l)!==null||i==="style"&&a.querySelector(Pn(s))||i==="script"&&a.querySelector(In(s))||(i=a.createElement("link"),ai(i,"link",e),Xe(i),a.head.appendChild(i)))}}function Qf(e,i){pt.m(e,i);var t=_a;if(t&&e){var a=i&&typeof i.as=="string"?i.as:"script",l='link[rel="modulepreload"][as="'+Mi(a)+'"][href="'+Mi(e)+'"]',s=l;switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":s=Fa(e)}if(!Hi.has(s)&&(e=S({rel:"modulepreload",href:e},i),Hi.set(s,e),t.querySelector(l)===null)){switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(t.querySelector(In(s)))return}a=t.createElement("link"),ai(a,"link",e),Xe(a),t.head.appendChild(a)}}}function Xf(e,i,t){pt.S(e,i,t);var a=_a;if(a&&e){var l=ga(a).hoistableStyles,s=Va(e);i=i||"default";var r=l.get(s);if(!r){var o={loading:0,preload:null};if(r=a.querySelector(Pn(s)))o.loading=5;else{e=S({rel:"stylesheet",href:e,"data-precedence":i},t),(t=Hi.get(s))&&Ro(e,t);var f=r=a.createElement("link");Xe(f),ai(f,"link",e),f._p=new Promise(function(N,D){f.onload=N,f.onerror=D}),f.addEventListener("load",function(){o.loading|=1}),f.addEventListener("error",function(){o.loading|=2}),o.loading|=4,ns(r,i,a)}r={type:"stylesheet",instance:r,count:1,state:o},l.set(s,r)}}}function Zf(e,i){pt.X(e,i);var t=_a;if(t&&e){var a=ga(t).hoistableScripts,l=Fa(e),s=a.get(l);s||(s=t.querySelector(In(l)),s||(e=S({src:e,async:!0},i),(i=Hi.get(l))&&Do(e,i),s=t.createElement("script"),Xe(s),ai(s,"link",e),t.head.appendChild(s)),s={type:"script",instance:s,count:1,state:null},a.set(l,s))}}function Jf(e,i){pt.M(e,i);var t=_a;if(t&&e){var a=ga(t).hoistableScripts,l=Fa(e),s=a.get(l);s||(s=t.querySelector(In(l)),s||(e=S({src:e,async:!0,type:"module"},i),(i=Hi.get(l))&&Do(e,i),s=t.createElement("script"),Xe(s),ai(s,"link",e),t.head.appendChild(s)),s={type:"script",instance:s,count:1,state:null},a.set(l,s))}}function Ig(e,i,t,a){var l=(l=V.current)?as(l):null;if(!l)throw Error(c(446));switch(e){case"meta":case"title":return null;case"style":return typeof t.precedence=="string"&&typeof t.href=="string"?(i=Va(t.href),t=ga(l).hoistableStyles,a=t.get(i),a||(a={type:"style",instance:null,count:0,state:null},t.set(i,a)),a):{type:"void",instance:null,count:0,state:null};case"link":if(t.rel==="stylesheet"&&typeof t.href=="string"&&typeof t.precedence=="string"){e=Va(t.href);var s=ga(l).hoistableStyles,r=s.get(e);if(r||(l=l.ownerDocument||l,r={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},s.set(e,r),(s=l.querySelector(Pn(e)))&&!s._p&&(r.instance=s,r.state.loading=5),Hi.has(e)||(t={rel:"preload",as:"style",href:t.href,crossOrigin:t.crossOrigin,integrity:t.integrity,media:t.media,hrefLang:t.hrefLang,referrerPolicy:t.referrerPolicy},Hi.set(e,t),s||$f(l,e,t,r.state))),i&&a===null)throw Error(c(528,""));return r}if(i&&a!==null)throw Error(c(529,""));return null;case"script":return i=t.async,t=t.src,typeof t=="string"&&i&&typeof i!="function"&&typeof i!="symbol"?(i=Fa(t),t=ga(l).hoistableScripts,a=t.get(i),a||(a={type:"script",instance:null,count:0,state:null},t.set(i,a)),a):{type:"void",instance:null,count:0,state:null};default:throw Error(c(444,e))}}function Va(e){return'href="'+Mi(e)+'"'}function Pn(e){return'link[rel="stylesheet"]['+e+"]"}function Hg(e){return S({},e,{"data-precedence":e.precedence,precedence:null})}function $f(e,i,t,a){e.querySelector('link[rel="preload"][as="style"]['+i+"]")?a.loading=1:(i=e.createElement("link"),a.preload=i,i.addEventListener("load",function(){return a.loading|=1}),i.addEventListener("error",function(){return a.loading|=2}),ai(i,"link",t),Xe(i),e.head.appendChild(i))}function Fa(e){return'[src="'+Mi(e)+'"]'}function In(e){return"script[async]"+e}function Ug(e,i,t){if(i.count++,i.instance===null)switch(i.type){case"style":var a=e.querySelector('style[data-href~="'+Mi(t.href)+'"]');if(a)return i.instance=a,Xe(a),a;var l=S({},t,{"data-href":t.href,"data-precedence":t.precedence,href:null,precedence:null});return a=(e.ownerDocument||e).createElement("style"),Xe(a),ai(a,"style",l),ns(a,t.precedence,e),i.instance=a;case"stylesheet":l=Va(t.href);var s=e.querySelector(Pn(l));if(s)return i.state.loading|=4,i.instance=s,Xe(s),s;a=Hg(t),(l=Hi.get(l))&&Ro(a,l),s=(e.ownerDocument||e).createElement("link"),Xe(s);var r=s;return r._p=new Promise(function(o,f){r.onload=o,r.onerror=f}),ai(s,"link",a),i.state.loading|=4,ns(s,t.precedence,e),i.instance=s;case"script":return s=Fa(t.src),(l=e.querySelector(In(s)))?(i.instance=l,Xe(l),l):(a=t,(l=Hi.get(s))&&(a=S({},t),Do(a,l)),e=e.ownerDocument||e,l=e.createElement("script"),Xe(l),ai(l,"link",a),e.head.appendChild(l),i.instance=l);case"void":return null;default:throw Error(c(443,i.type))}else i.type==="stylesheet"&&(i.state.loading&4)===0&&(a=i.instance,i.state.loading|=4,ns(a,t.precedence,e));return i.instance}function ns(e,i,t){for(var a=t.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),l=a.length?a[a.length-1]:null,s=l,r=0;r<a.length;r++){var o=a[r];if(o.dataset.precedence===i)s=o;else if(s!==l)break}s?s.parentNode.insertBefore(e,s.nextSibling):(i=t.nodeType===9?t.head:t,i.insertBefore(e,i.firstChild))}function Ro(e,i){e.crossOrigin==null&&(e.crossOrigin=i.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=i.referrerPolicy),e.title==null&&(e.title=i.title)}function Do(e,i){e.crossOrigin==null&&(e.crossOrigin=i.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=i.referrerPolicy),e.integrity==null&&(e.integrity=i.integrity)}var ls=null;function qg(e,i,t){if(ls===null){var a=new Map,l=ls=new Map;l.set(t,a)}else l=ls,a=l.get(t),a||(a=new Map,l.set(t,a));if(a.has(e))return a;for(a.set(e,null),t=t.getElementsByTagName(e),l=0;l<t.length;l++){var s=t[l];if(!(s[en]||s[$e]||e==="link"&&s.getAttribute("rel")==="stylesheet")&&s.namespaceURI!=="http://www.w3.org/2000/svg"){var r=s.getAttribute(i)||"";r=e+r;var o=a.get(r);o?o.push(s):a.set(r,[s])}}return a}function _g(e,i,t){e=e.ownerDocument||e,e.head.insertBefore(t,i==="title"?e.querySelector("head > title"):null)}function eh(e,i,t){if(t===1||i.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof i.precedence!="string"||typeof i.href!="string"||i.href==="")break;return!0;case"link":if(typeof i.rel!="string"||typeof i.href!="string"||i.href===""||i.onLoad||i.onError)break;switch(i.rel){case"stylesheet":return e=i.disabled,typeof i.precedence=="string"&&e==null;default:return!0}case"script":if(i.async&&typeof i.async!="function"&&typeof i.async!="symbol"&&!i.onLoad&&!i.onError&&i.src&&typeof i.src=="string")return!0}return!1}function Vg(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function ih(e,i,t,a){if(t.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(t.state.loading&4)===0){if(t.instance===null){var l=Va(a.href),s=i.querySelector(Pn(l));if(s){i=s._p,i!==null&&typeof i=="object"&&typeof i.then=="function"&&(e.count++,e=ss.bind(e),i.then(e,e)),t.state.loading|=4,t.instance=s,Xe(s);return}s=i.ownerDocument||i,a=Hg(a),(l=Hi.get(l))&&Ro(a,l),s=s.createElement("link"),Xe(s);var r=s;r._p=new Promise(function(o,f){r.onload=o,r.onerror=f}),ai(s,"link",a),t.instance=s}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(t,i),(i=t.state.preload)&&(t.state.loading&3)===0&&(e.count++,t=ss.bind(e),i.addEventListener("load",t),i.addEventListener("error",t))}}var Mo=0;function th(e,i){return e.stylesheets&&e.count===0&&os(e,e.stylesheets),0<e.count||0<e.imgCount?function(t){var a=setTimeout(function(){if(e.stylesheets&&os(e,e.stylesheets),e.unsuspend){var s=e.unsuspend;e.unsuspend=null,s()}},6e4+i);0<e.imgBytes&&Mo===0&&(Mo=62500*Bf());var l=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&os(e,e.stylesheets),e.unsuspend)){var s=e.unsuspend;e.unsuspend=null,s()}},(e.imgBytes>Mo?50:800)+i);return e.unsuspend=t,function(){e.unsuspend=null,clearTimeout(a),clearTimeout(l)}}:null}function ss(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)os(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var rs=null;function os(e,i){e.stylesheets=null,e.unsuspend!==null&&(e.count++,rs=new Map,i.forEach(ah,e),rs=null,ss.call(e))}function ah(e,i){if(!(i.state.loading&4)){var t=rs.get(e);if(t)var a=t.get(null);else{t=new Map,rs.set(e,t);for(var l=e.querySelectorAll("link[data-precedence],style[data-precedence]"),s=0;s<l.length;s++){var r=l[s];(r.nodeName==="LINK"||r.getAttribute("media")!=="not all")&&(t.set(r.dataset.precedence,r),a=r)}a&&t.set(null,a)}l=i.instance,r=l.getAttribute("data-precedence"),s=t.get(r)||a,s===a&&t.set(null,l),t.set(r,l),this.count++,a=ss.bind(this),l.addEventListener("load",a),l.addEventListener("error",a),s?s.parentNode.insertBefore(l,s.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(l,e.firstChild)),i.state.loading|=4}}var Hn={$$typeof:ae,Provider:null,Consumer:null,_currentValue:J,_currentValue2:J,_threadCount:0};function nh(e,i,t,a,l,s,r,o,f){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ns(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ns(0),this.hiddenUpdates=Ns(null),this.identifierPrefix=a,this.onUncaughtError=l,this.onCaughtError=s,this.onRecoverableError=r,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=f,this.incompleteTransitions=new Map}function Fg(e,i,t,a,l,s,r,o,f,N,D,z){return e=new nh(e,i,t,r,f,N,D,z,o),i=1,s===!0&&(i|=24),s=Si(3,null,null,i),e.current=s,s.stateNode=e,i=ur(),i.refCount++,e.pooledCache=i,i.refCount++,s.memoizedState={element:a,isDehydrated:t,cache:i},pr(s),e}function Wg(e){return e?(e=Sa,e):Sa}function Yg(e,i,t,a,l,s){l=Wg(l),a.context===null?a.context=l:a.pendingContext=l,a=At(i),a.payload={element:t},s=s===void 0?null:s,s!==null&&(a.callback=s),t=Nt(e,a,i),t!==null&&(fi(t,e,i),bn(t,e,i))}function Kg(e,i){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<i?t:i}}function Go(e,i){Kg(e,i),(e=e.alternate)&&Kg(e,i)}function Qg(e){if(e.tag===13||e.tag===31){var i=Kt(e,67108864);i!==null&&fi(i,e,67108864),Go(e,67108864)}}function Xg(e){if(e.tag===13||e.tag===31){var i=Ci();i=Cs(i);var t=Kt(e,i);t!==null&&fi(t,e,i),Go(e,i)}}var cs=!0;function lh(e,i,t,a){var l=R.T;R.T=null;var s=P.p;try{P.p=2,zo(e,i,t,a)}finally{P.p=s,R.T=l}}function sh(e,i,t,a){var l=R.T;R.T=null;var s=P.p;try{P.p=8,zo(e,i,t,a)}finally{P.p=s,R.T=l}}function zo(e,i,t,a){if(cs){var l=Oo(a);if(l===null)vo(e,i,a,us,t),Jg(e,a);else if(oh(l,e,i,t,a))a.stopPropagation();else if(Jg(e,a),i&4&&-1<rh.indexOf(e)){for(;l!==null;){var s=da(l);if(s!==null)switch(s.tag){case 3:if(s=s.stateNode,s.current.memoizedState.isDehydrated){var r=_t(s.pendingLanes);if(r!==0){var o=s;for(o.pendingLanes|=2,o.entangledLanes|=2;r;){var f=1<<31-vi(r);o.entanglements[1]|=f,r&=~f}Xi(s),(xe&6)===0&&(Wl=bi()+500,zn(0))}}break;case 31:case 13:o=Kt(s,2),o!==null&&fi(o,s,2),Kl(),Go(s,2)}if(s=Oo(a),s===null&&vo(e,i,a,us,t),s===l)break;l=s}l!==null&&a.stopPropagation()}else vo(e,i,a,null,t)}}function Oo(e){return e=Bs(e),Bo(e)}var us=null;function Bo(e){if(us=null,e=ua(e),e!==null){var i=g(e);if(i===null)e=null;else{var t=i.tag;if(t===13){if(e=j(i),e!==null)return e;e=null}else if(t===31){if(e=h(i),e!==null)return e;e=null}else if(t===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;e=null}else i!==e&&(e=null)}}return us=e,null}function Zg(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Fm()){case lc:return 2;case sc:return 8;case $n:case Wm:return 32;case rc:return 268435456;default:return 32}default:return 32}}var Lo=!1,Lt=null,Pt=null,It=null,Un=new Map,qn=new Map,Ht=[],rh="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Jg(e,i){switch(e){case"focusin":case"focusout":Lt=null;break;case"dragenter":case"dragleave":Pt=null;break;case"mouseover":case"mouseout":It=null;break;case"pointerover":case"pointerout":Un.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":qn.delete(i.pointerId)}}function _n(e,i,t,a,l,s){return e===null||e.nativeEvent!==s?(e={blockedOn:i,domEventName:t,eventSystemFlags:a,nativeEvent:s,targetContainers:[l]},i!==null&&(i=da(i),i!==null&&Qg(i)),e):(e.eventSystemFlags|=a,i=e.targetContainers,l!==null&&i.indexOf(l)===-1&&i.push(l),e)}function oh(e,i,t,a,l){switch(i){case"focusin":return Lt=_n(Lt,e,i,t,a,l),!0;case"dragenter":return Pt=_n(Pt,e,i,t,a,l),!0;case"mouseover":return It=_n(It,e,i,t,a,l),!0;case"pointerover":var s=l.pointerId;return Un.set(s,_n(Un.get(s)||null,e,i,t,a,l)),!0;case"gotpointercapture":return s=l.pointerId,qn.set(s,_n(qn.get(s)||null,e,i,t,a,l)),!0}return!1}function $g(e){var i=ua(e.target);if(i!==null){var t=g(i);if(t!==null){if(i=t.tag,i===13){if(i=j(t),i!==null){e.blockedOn=i,mc(e.priority,function(){Xg(t)});return}}else if(i===31){if(i=h(t),i!==null){e.blockedOn=i,mc(e.priority,function(){Xg(t)});return}}else if(i===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ds(e){if(e.blockedOn!==null)return!1;for(var i=e.targetContainers;0<i.length;){var t=Oo(e.nativeEvent);if(t===null){t=e.nativeEvent;var a=new t.constructor(t.type,t);Os=a,t.target.dispatchEvent(a),Os=null}else return i=da(t),i!==null&&Qg(i),e.blockedOn=t,!1;i.shift()}return!0}function em(e,i,t){ds(e)&&t.delete(i)}function ch(){Lo=!1,Lt!==null&&ds(Lt)&&(Lt=null),Pt!==null&&ds(Pt)&&(Pt=null),It!==null&&ds(It)&&(It=null),Un.forEach(em),qn.forEach(em)}function gs(e,i){e.blockedOn===i&&(e.blockedOn=null,Lo||(Lo=!0,u.unstable_scheduleCallback(u.unstable_NormalPriority,ch)))}var ms=null;function im(e){ms!==e&&(ms=e,u.unstable_scheduleCallback(u.unstable_NormalPriority,function(){ms===e&&(ms=null);for(var i=0;i<e.length;i+=3){var t=e[i],a=e[i+1],l=e[i+2];if(typeof a!="function"){if(Bo(a||t)===null)continue;break}var s=da(t);s!==null&&(e.splice(i,3),i-=3,zr(s,{pending:!0,data:l,method:t.method,action:a},a,l))}}))}function Wa(e){function i(f){return gs(f,e)}Lt!==null&&gs(Lt,e),Pt!==null&&gs(Pt,e),It!==null&&gs(It,e),Un.forEach(i),qn.forEach(i);for(var t=0;t<Ht.length;t++){var a=Ht[t];a.blockedOn===e&&(a.blockedOn=null)}for(;0<Ht.length&&(t=Ht[0],t.blockedOn===null);)$g(t),t.blockedOn===null&&Ht.shift();if(t=(e.ownerDocument||e).$$reactFormReplay,t!=null)for(a=0;a<t.length;a+=3){var l=t[a],s=t[a+1],r=l[ci]||null;if(typeof s=="function")r||im(t);else if(r){var o=null;if(s&&s.hasAttribute("formAction")){if(l=s,r=s[ci]||null)o=r.formAction;else if(Bo(l)!==null)continue}else o=r.action;typeof o=="function"?t[a+1]=o:(t.splice(a,3),a-=3),im(t)}}}function tm(){function e(s){s.canIntercept&&s.info==="react-transition"&&s.intercept({handler:function(){return new Promise(function(r){return l=r})},focusReset:"manual",scroll:"manual"})}function i(){l!==null&&(l(),l=null),a||setTimeout(t,20)}function t(){if(!a&&!navigation.transition){var s=navigation.currentEntry;s&&s.url!=null&&navigation.navigate(s.url,{state:s.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var a=!1,l=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",i),navigation.addEventListener("navigateerror",i),setTimeout(t,100),function(){a=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",i),navigation.removeEventListener("navigateerror",i),l!==null&&(l(),l=null)}}}function Po(e){this._internalRoot=e}ps.prototype.render=Po.prototype.render=function(e){var i=this._internalRoot;if(i===null)throw Error(c(409));var t=i.current,a=Ci();Yg(t,a,e,i,null,null)},ps.prototype.unmount=Po.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var i=e.containerInfo;Yg(e.current,2,null,e,null,null),Kl(),i[ca]=null}};function ps(e){this._internalRoot=e}ps.prototype.unstable_scheduleHydration=function(e){if(e){var i=gc();e={blockedOn:null,target:e,priority:i};for(var t=0;t<Ht.length&&i!==0&&i<Ht[t].priority;t++);Ht.splice(t,0,e),t===0&&$g(e)}};var am=d.version;if(am!=="19.2.0")throw Error(c(527,am,"19.2.0"));P.findDOMNode=function(e){var i=e._reactInternals;if(i===void 0)throw typeof e.render=="function"?Error(c(188)):(e=Object.keys(e).join(","),Error(c(268,e)));return e=m(i),e=e!==null?T(e):null,e=e===null?null:e.stateNode,e};var uh={bundleType:0,version:"19.2.0",rendererPackageName:"react-dom",currentDispatcherRef:R,reconcilerVersion:"19.2.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var fs=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!fs.isDisabled&&fs.supportsFiber)try{Za=fs.inject(uh),xi=fs}catch{}}return Fn.createRoot=function(e,i){if(!y(e))throw Error(c(299));var t=!1,a="",l=ud,s=dd,r=gd;return i!=null&&(i.unstable_strictMode===!0&&(t=!0),i.identifierPrefix!==void 0&&(a=i.identifierPrefix),i.onUncaughtError!==void 0&&(l=i.onUncaughtError),i.onCaughtError!==void 0&&(s=i.onCaughtError),i.onRecoverableError!==void 0&&(r=i.onRecoverableError)),i=Fg(e,1,!1,null,null,t,a,null,l,s,r,tm),e[ca]=i.current,xo(e),new Po(i)},Fn.hydrateRoot=function(e,i,t){if(!y(e))throw Error(c(299));var a=!1,l="",s=ud,r=dd,o=gd,f=null;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onUncaughtError!==void 0&&(s=t.onUncaughtError),t.onCaughtError!==void 0&&(r=t.onCaughtError),t.onRecoverableError!==void 0&&(o=t.onRecoverableError),t.formState!==void 0&&(f=t.formState)),i=Fg(e,1,!0,i,t??null,a,l,f,s,r,o,tm),i.context=Wg(null),t=i.current,a=Ci(),a=Cs(a),l=At(a),l.callback=null,Nt(t,l,a),t=a,i.current.lanes=t,$a(i,t),Xi(i),e[ca]=i.current,xo(e),new ps(i)},Fn.version="19.2.0",Fn}var mm;function vh(){if(mm)return Uo.exports;mm=1;function u(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(u)}catch(d){console.error(d)}}return u(),Uo.exports=xh(),Uo.exports}var jh=vh(),Fo={exports:{}},Wo,pm;function Sh(){if(pm)return Wo;pm=1;var u="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return Wo=u,Wo}var Yo,fm;function kh(){if(fm)return Yo;fm=1;var u=Sh();function d(){}function b(){}return b.resetWarningCache=d,Yo=function(){function c(j,h,p,m,T,S){if(S!==u){var w=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw w.name="Invariant Violation",w}}c.isRequired=c;function y(){return c}var g={array:c,bigint:c,bool:c,func:c,number:c,object:c,string:c,symbol:c,any:c,arrayOf:y,element:c,elementType:c,instanceOf:y,node:c,objectOf:y,oneOf:y,oneOfType:y,shape:y,exact:y,checkPropTypes:b,resetWarningCache:d};return g.PropTypes=g,g},Yo}var hm;function wh(){return hm||(hm=1,Fo.exports=kh()()),Fo.exports}var Ah=wh();const ze=Jn(Ah);var Ko,ym;function Nh(){if(ym)return Ko;ym=1;function u(h){return h&&typeof h=="object"&&"default"in h?h.default:h}var d=js(),b=u(d);function c(h,p,m){return p in h?Object.defineProperty(h,p,{value:m,enumerable:!0,configurable:!0,writable:!0}):h[p]=m,h}function y(h,p){h.prototype=Object.create(p.prototype),h.prototype.constructor=h,h.__proto__=p}var g=!!(typeof window<"u"&&window.document&&window.document.createElement);function j(h,p,m){if(typeof h!="function")throw new Error("Expected reducePropsToState to be a function.");if(typeof p!="function")throw new Error("Expected handleStateChangeOnClient to be a function.");if(typeof m<"u"&&typeof m!="function")throw new Error("Expected mapStateOnServer to either be undefined or a function.");function T(S){return S.displayName||S.name||"Component"}return function(w){if(typeof w!="function")throw new Error("Expected WrappedComponent to be a React component.");var O=[],q;function U(){q=h(O.map(function(_){return _.props})),I.canUseDOM?p(q):m&&(q=m(q))}var I=(function(_){y(ue,_);function ue(){return _.apply(this,arguments)||this}ue.peek=function(){return q},ue.rewind=function(){if(ue.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var Se=q;return q=void 0,O=[],Se};var ae=ue.prototype;return ae.UNSAFE_componentWillMount=function(){O.push(this),U()},ae.componentDidUpdate=function(){U()},ae.componentWillUnmount=function(){var Se=O.indexOf(this);O.splice(Se,1),U()},ae.render=function(){return b.createElement(w,this.props)},ue})(d.PureComponent);return c(I,"displayName","SideEffect("+T(w)+")"),c(I,"canUseDOM",g),I}}return Ko=j,Ko}var Ch=Nh();const Th=Jn(Ch);var Qo,bm;function Eh(){if(bm)return Qo;bm=1;var u=typeof Element<"u",d=typeof Map=="function",b=typeof Set=="function",c=typeof ArrayBuffer=="function"&&!!ArrayBuffer.isView;function y(g,j){if(g===j)return!0;if(g&&j&&typeof g=="object"&&typeof j=="object"){if(g.constructor!==j.constructor)return!1;var h,p,m;if(Array.isArray(g)){if(h=g.length,h!=j.length)return!1;for(p=h;p--!==0;)if(!y(g[p],j[p]))return!1;return!0}var T;if(d&&g instanceof Map&&j instanceof Map){if(g.size!==j.size)return!1;for(T=g.entries();!(p=T.next()).done;)if(!j.has(p.value[0]))return!1;for(T=g.entries();!(p=T.next()).done;)if(!y(p.value[1],j.get(p.value[0])))return!1;return!0}if(b&&g instanceof Set&&j instanceof Set){if(g.size!==j.size)return!1;for(T=g.entries();!(p=T.next()).done;)if(!j.has(p.value[0]))return!1;return!0}if(c&&ArrayBuffer.isView(g)&&ArrayBuffer.isView(j)){if(h=g.length,h!=j.length)return!1;for(p=h;p--!==0;)if(g[p]!==j[p])return!1;return!0}if(g.constructor===RegExp)return g.source===j.source&&g.flags===j.flags;if(g.valueOf!==Object.prototype.valueOf&&typeof g.valueOf=="function"&&typeof j.valueOf=="function")return g.valueOf()===j.valueOf();if(g.toString!==Object.prototype.toString&&typeof g.toString=="function"&&typeof j.toString=="function")return g.toString()===j.toString();if(m=Object.keys(g),h=m.length,h!==Object.keys(j).length)return!1;for(p=h;p--!==0;)if(!Object.prototype.hasOwnProperty.call(j,m[p]))return!1;if(u&&g instanceof Element)return!1;for(p=h;p--!==0;)if(!((m[p]==="_owner"||m[p]==="__v"||m[p]==="__o")&&g.$$typeof)&&!y(g[m[p]],j[m[p]]))return!1;return!0}return g!==g&&j!==j}return Qo=function(j,h){try{return y(j,h)}catch(p){if((p.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw p}},Qo}var Rh=Eh();const Dh=Jn(Rh);var Xo,xm;function Mh(){if(xm)return Xo;xm=1;var u=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable;function c(g){if(g==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(g)}function y(){try{if(!Object.assign)return!1;var g=new String("abc");if(g[5]="de",Object.getOwnPropertyNames(g)[0]==="5")return!1;for(var j={},h=0;h<10;h++)j["_"+String.fromCharCode(h)]=h;var p=Object.getOwnPropertyNames(j).map(function(T){return j[T]});if(p.join("")!=="0123456789")return!1;var m={};return"abcdefghijklmnopqrst".split("").forEach(function(T){m[T]=T}),Object.keys(Object.assign({},m)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}return Xo=y()?Object.assign:function(g,j){for(var h,p=c(g),m,T=1;T<arguments.length;T++){h=Object(arguments[T]);for(var S in h)d.call(h,S)&&(p[S]=h[S]);if(u){m=u(h);for(var w=0;w<m.length;w++)b.call(h,m[w])&&(p[m[w]]=h[m[w]])}}return p},Xo}var Gh=Mh();const zh=Jn(Gh);var ra={BODY:"bodyAttributes",HTML:"htmlAttributes",TITLE:"titleAttributes"},te={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"};Object.keys(te).map(function(u){return te[u]});var Oe={CHARSET:"charset",CSS_TEXT:"cssText",HREF:"href",HTTPEQUIV:"http-equiv",INNER_HTML:"innerHTML",ITEM_PROP:"itemprop",NAME:"name",PROPERTY:"property",REL:"rel",SRC:"src",TARGET:"target"},hs={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},Qn={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate"},Oh=Object.keys(hs).reduce(function(u,d){return u[hs[d]]=d,u},{}),Bh=[te.NOSCRIPT,te.SCRIPT,te.STYLE],Fi="data-react-helmet",Lh=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(u){return typeof u}:function(u){return u&&typeof Symbol=="function"&&u.constructor===Symbol&&u!==Symbol.prototype?"symbol":typeof u},Ph=function(u,d){if(!(u instanceof d))throw new TypeError("Cannot call a class as a function")},Ih=(function(){function u(d,b){for(var c=0;c<b.length;c++){var y=b[c];y.enumerable=y.enumerable||!1,y.configurable=!0,"value"in y&&(y.writable=!0),Object.defineProperty(d,y.key,y)}}return function(d,b,c){return b&&u(d.prototype,b),c&&u(d,c),d}})(),hi=Object.assign||function(u){for(var d=1;d<arguments.length;d++){var b=arguments[d];for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&(u[c]=b[c])}return u},Hh=function(u,d){if(typeof d!="function"&&d!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof d);u.prototype=Object.create(d&&d.prototype,{constructor:{value:u,enumerable:!1,writable:!0,configurable:!0}}),d&&(Object.setPrototypeOf?Object.setPrototypeOf(u,d):u.__proto__=d)},vm=function(u,d){var b={};for(var c in u)d.indexOf(c)>=0||Object.prototype.hasOwnProperty.call(u,c)&&(b[c]=u[c]);return b},Uh=function(u,d){if(!u)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return d&&(typeof d=="object"||typeof d=="function")?d:u},Jo=function(d){var b=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return b===!1?String(d):String(d).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},qh=function(d){var b=Ka(d,te.TITLE),c=Ka(d,Qn.TITLE_TEMPLATE);if(c&&b)return c.replace(/%s/g,function(){return Array.isArray(b)?b.join(""):b});var y=Ka(d,Qn.DEFAULT_TITLE);return b||y||void 0},_h=function(d){return Ka(d,Qn.ON_CHANGE_CLIENT_STATE)||function(){}},Zo=function(d,b){return b.filter(function(c){return typeof c[d]<"u"}).map(function(c){return c[d]}).reduce(function(c,y){return hi({},c,y)},{})},Vh=function(d,b){return b.filter(function(c){return typeof c[te.BASE]<"u"}).map(function(c){return c[te.BASE]}).reverse().reduce(function(c,y){if(!c.length)for(var g=Object.keys(y),j=0;j<g.length;j++){var h=g[j],p=h.toLowerCase();if(d.indexOf(p)!==-1&&y[p])return c.concat(y)}return c},[])},Wn=function(d,b,c){var y={};return c.filter(function(g){return Array.isArray(g[d])?!0:(typeof g[d]<"u"&&Kh("Helmet: "+d+' should be of type "Array". Instead found type "'+Lh(g[d])+'"'),!1)}).map(function(g){return g[d]}).reverse().reduce(function(g,j){var h={};j.filter(function(w){for(var O=void 0,q=Object.keys(w),U=0;U<q.length;U++){var I=q[U],_=I.toLowerCase();b.indexOf(_)!==-1&&!(O===Oe.REL&&w[O].toLowerCase()==="canonical")&&!(_===Oe.REL&&w[_].toLowerCase()==="stylesheet")&&(O=_),b.indexOf(I)!==-1&&(I===Oe.INNER_HTML||I===Oe.CSS_TEXT||I===Oe.ITEM_PROP)&&(O=I)}if(!O||!w[O])return!1;var ue=w[O].toLowerCase();return y[O]||(y[O]={}),h[O]||(h[O]={}),y[O][ue]?!1:(h[O][ue]=!0,!0)}).reverse().forEach(function(w){return g.push(w)});for(var p=Object.keys(h),m=0;m<p.length;m++){var T=p[m],S=zh({},y[T],h[T]);y[T]=S}return g},[]).reverse()},Ka=function(d,b){for(var c=d.length-1;c>=0;c--){var y=d[c];if(y.hasOwnProperty(b))return y[b]}return null},Fh=function(d){return{baseTag:Vh([Oe.HREF,Oe.TARGET],d),bodyAttributes:Zo(ra.BODY,d),defer:Ka(d,Qn.DEFER),encode:Ka(d,Qn.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:Zo(ra.HTML,d),linkTags:Wn(te.LINK,[Oe.REL,Oe.HREF],d),metaTags:Wn(te.META,[Oe.NAME,Oe.CHARSET,Oe.HTTPEQUIV,Oe.PROPERTY,Oe.ITEM_PROP],d),noscriptTags:Wn(te.NOSCRIPT,[Oe.INNER_HTML],d),onChangeClientState:_h(d),scriptTags:Wn(te.SCRIPT,[Oe.SRC,Oe.INNER_HTML],d),styleTags:Wn(te.STYLE,[Oe.CSS_TEXT],d),title:qh(d),titleAttributes:Zo(ra.TITLE,d)}},$o=(function(){var u=Date.now();return function(d){var b=Date.now();b-u>16?(u=b,d(b)):setTimeout(function(){$o(d)},0)}})(),jm=function(d){return clearTimeout(d)},Wh=typeof window<"u"?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||$o:global.requestAnimationFrame||$o,Yh=typeof window<"u"?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||jm:global.cancelAnimationFrame||jm,Kh=function(d){return console&&typeof console.warn=="function"&&console.warn(d)},Yn=null,Qh=function(d){Yn&&Yh(Yn),d.defer?Yn=Wh(function(){Sm(d,function(){Yn=null})}):(Sm(d),Yn=null)},Sm=function(d,b){var c=d.baseTag,y=d.bodyAttributes,g=d.htmlAttributes,j=d.linkTags,h=d.metaTags,p=d.noscriptTags,m=d.onChangeClientState,T=d.scriptTags,S=d.styleTags,w=d.title,O=d.titleAttributes;ec(te.BODY,y),ec(te.HTML,g),Xh(w,O);var q={baseTag:Ya(te.BASE,c),linkTags:Ya(te.LINK,j),metaTags:Ya(te.META,h),noscriptTags:Ya(te.NOSCRIPT,p),scriptTags:Ya(te.SCRIPT,T),styleTags:Ya(te.STYLE,S)},U={},I={};Object.keys(q).forEach(function(_){var ue=q[_],ae=ue.newTags,Q=ue.oldTags;ae.length&&(U[_]=ae),Q.length&&(I[_]=q[_].oldTags)}),b&&b(),m(d,U,I)},Nm=function(d){return Array.isArray(d)?d.join(""):d},Xh=function(d,b){typeof d<"u"&&document.title!==d&&(document.title=Nm(d)),ec(te.TITLE,b)},ec=function(d,b){var c=document.getElementsByTagName(d)[0];if(c){for(var y=c.getAttribute(Fi),g=y?y.split(","):[],j=[].concat(g),h=Object.keys(b),p=0;p<h.length;p++){var m=h[p],T=b[m]||"";c.getAttribute(m)!==T&&c.setAttribute(m,T),g.indexOf(m)===-1&&g.push(m);var S=j.indexOf(m);S!==-1&&j.splice(S,1)}for(var w=j.length-1;w>=0;w--)c.removeAttribute(j[w]);g.length===j.length?c.removeAttribute(Fi):c.getAttribute(Fi)!==h.join(",")&&c.setAttribute(Fi,h.join(","))}},Ya=function(d,b){var c=document.head||document.querySelector(te.HEAD),y=c.querySelectorAll(d+"["+Fi+"]"),g=Array.prototype.slice.call(y),j=[],h=void 0;return b&&b.length&&b.forEach(function(p){var m=document.createElement(d);for(var T in p)if(p.hasOwnProperty(T))if(T===Oe.INNER_HTML)m.innerHTML=p.innerHTML;else if(T===Oe.CSS_TEXT)m.styleSheet?m.styleSheet.cssText=p.cssText:m.appendChild(document.createTextNode(p.cssText));else{var S=typeof p[T]>"u"?"":p[T];m.setAttribute(T,S)}m.setAttribute(Fi,"true"),g.some(function(w,O){return h=O,m.isEqualNode(w)})?g.splice(h,1):j.push(m)}),g.forEach(function(p){return p.parentNode.removeChild(p)}),j.forEach(function(p){return c.appendChild(p)}),{oldTags:g,newTags:j}},Cm=function(d){return Object.keys(d).reduce(function(b,c){var y=typeof d[c]<"u"?c+'="'+d[c]+'"':""+c;return b?b+" "+y:y},"")},Zh=function(d,b,c,y){var g=Cm(c),j=Nm(b);return g?"<"+d+" "+Fi+'="true" '+g+">"+Jo(j,y)+"</"+d+">":"<"+d+" "+Fi+'="true">'+Jo(j,y)+"</"+d+">"},Jh=function(d,b,c){return b.reduce(function(y,g){var j=Object.keys(g).filter(function(m){return!(m===Oe.INNER_HTML||m===Oe.CSS_TEXT)}).reduce(function(m,T){var S=typeof g[T]>"u"?T:T+'="'+Jo(g[T],c)+'"';return m?m+" "+S:S},""),h=g.innerHTML||g.cssText||"",p=Bh.indexOf(d)===-1;return y+"<"+d+" "+Fi+'="true" '+j+(p?"/>":">"+h+"</"+d+">")},"")},Tm=function(d){var b=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return Object.keys(d).reduce(function(c,y){return c[hs[y]||y]=d[y],c},b)},$h=function(d){var b=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return Object.keys(d).reduce(function(c,y){return c[Oh[y]||y]=d[y],c},b)},e0=function(d,b,c){var y,g=(y={key:b},y[Fi]=!0,y),j=Tm(c,g);return[Kn.createElement(te.TITLE,j,b)]},i0=function(d,b){return b.map(function(c,y){var g,j=(g={key:y},g[Fi]=!0,g);return Object.keys(c).forEach(function(h){var p=hs[h]||h;if(p===Oe.INNER_HTML||p===Oe.CSS_TEXT){var m=c.innerHTML||c.cssText;j.dangerouslySetInnerHTML={__html:m}}else j[p]=c[h]}),Kn.createElement(d,j)})},ft=function(d,b,c){switch(d){case te.TITLE:return{toComponent:function(){return e0(d,b.title,b.titleAttributes)},toString:function(){return Zh(d,b.title,b.titleAttributes,c)}};case ra.BODY:case ra.HTML:return{toComponent:function(){return Tm(b)},toString:function(){return Cm(b)}};default:return{toComponent:function(){return i0(d,b)},toString:function(){return Jh(d,b,c)}}}},Em=function(d){var b=d.baseTag,c=d.bodyAttributes,y=d.encode,g=d.htmlAttributes,j=d.linkTags,h=d.metaTags,p=d.noscriptTags,m=d.scriptTags,T=d.styleTags,S=d.title,w=S===void 0?"":S,O=d.titleAttributes;return{base:ft(te.BASE,b,y),bodyAttributes:ft(ra.BODY,c,y),htmlAttributes:ft(ra.HTML,g,y),link:ft(te.LINK,j,y),meta:ft(te.META,h,y),noscript:ft(te.NOSCRIPT,p,y),script:ft(te.SCRIPT,m,y),style:ft(te.STYLE,T,y),title:ft(te.TITLE,{title:w,titleAttributes:O},y)}},t0=function(d){var b,c;return c=b=(function(y){Hh(g,y);function g(){return Ph(this,g),Uh(this,y.apply(this,arguments))}return g.prototype.shouldComponentUpdate=function(h){return!Dh(this.props,h)},g.prototype.mapNestedChildrenToProps=function(h,p){if(!p)return null;switch(h.type){case te.SCRIPT:case te.NOSCRIPT:return{innerHTML:p};case te.STYLE:return{cssText:p}}throw new Error("<"+h.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},g.prototype.flattenArrayTypeChildren=function(h){var p,m=h.child,T=h.arrayTypeChildren,S=h.newChildProps,w=h.nestedChildren;return hi({},T,(p={},p[m.type]=[].concat(T[m.type]||[],[hi({},S,this.mapNestedChildrenToProps(m,w))]),p))},g.prototype.mapObjectTypeChildren=function(h){var p,m,T=h.child,S=h.newProps,w=h.newChildProps,O=h.nestedChildren;switch(T.type){case te.TITLE:return hi({},S,(p={},p[T.type]=O,p.titleAttributes=hi({},w),p));case te.BODY:return hi({},S,{bodyAttributes:hi({},w)});case te.HTML:return hi({},S,{htmlAttributes:hi({},w)})}return hi({},S,(m={},m[T.type]=hi({},w),m))},g.prototype.mapArrayTypeChildrenToProps=function(h,p){var m=hi({},p);return Object.keys(h).forEach(function(T){var S;m=hi({},m,(S={},S[T]=h[T],S))}),m},g.prototype.warnOnInvalidChildren=function(h,p){return!0},g.prototype.mapChildrenToProps=function(h,p){var m=this,T={};return Kn.Children.forEach(h,function(S){if(!(!S||!S.props)){var w=S.props,O=w.children,q=vm(w,["children"]),U=$h(q);switch(m.warnOnInvalidChildren(S,O),S.type){case te.LINK:case te.META:case te.NOSCRIPT:case te.SCRIPT:case te.STYLE:T=m.flattenArrayTypeChildren({child:S,arrayTypeChildren:T,newChildProps:U,nestedChildren:O});break;default:p=m.mapObjectTypeChildren({child:S,newProps:p,newChildProps:U,nestedChildren:O});break}}}),p=this.mapArrayTypeChildrenToProps(T,p),p},g.prototype.render=function(){var h=this.props,p=h.children,m=vm(h,["children"]),T=hi({},m);return p&&(T=this.mapChildrenToProps(p,T)),Kn.createElement(d,T)},Ih(g,null,[{key:"canUseDOM",set:function(h){d.canUseDOM=h}}]),g})(Kn.Component),b.propTypes={base:ze.object,bodyAttributes:ze.object,children:ze.oneOfType([ze.arrayOf(ze.node),ze.node]),defaultTitle:ze.string,defer:ze.bool,encodeSpecialCharacters:ze.bool,htmlAttributes:ze.object,link:ze.arrayOf(ze.object),meta:ze.arrayOf(ze.object),noscript:ze.arrayOf(ze.object),onChangeClientState:ze.func,script:ze.arrayOf(ze.object),style:ze.arrayOf(ze.object),title:ze.string,titleAttributes:ze.object,titleTemplate:ze.string},b.defaultProps={defer:!0,encodeSpecialCharacters:!0},b.peek=d.peek,b.rewind=function(){var y=d.rewind();return y||(y=Em({baseTag:[],bodyAttributes:{},htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),y},c},a0=function(){return null},n0=Th(Fh,Qh,Em)(a0),ic=t0(n0);ic.renderStatic=ic.rewind;const l0=u=>u.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),s0=u=>u.replace(/^([A-Z])|[\s-_]+(\w)/g,(d,b,c)=>c?c.toUpperCase():b.toLowerCase()),km=u=>{const d=s0(u);return d.charAt(0).toUpperCase()+d.slice(1)},Rm=(...u)=>u.filter((d,b,c)=>!!d&&d.trim()!==""&&c.indexOf(d)===b).join(" ").trim(),r0=u=>{for(const d in u)if(d.startsWith("aria-")||d==="role"||d==="title")return!0};var o0={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const c0=L.forwardRef(({color:u="currentColor",size:d=24,strokeWidth:b=2,absoluteStrokeWidth:c,className:y="",children:g,iconNode:j,...h},p)=>L.createElement("svg",{ref:p,...o0,width:d,height:d,stroke:u,strokeWidth:c?Number(b)*24/Number(d):b,className:Rm("lucide",y),...!g&&!r0(h)&&{"aria-hidden":"true"},...h},[...j.map(([m,T])=>L.createElement(m,T)),...Array.isArray(g)?g:[g]]));const Te=(u,d)=>{const b=L.forwardRef(({className:c,...y},g)=>L.createElement(c0,{ref:g,iconNode:d,className:Rm(`lucide-${l0(km(u))}`,`lucide-${u}`,c),...y}));return b.displayName=km(u),b};const u0=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],Ss=Te("arrow-left",u0);const d0=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],ht=Te("arrow-right",d0);const g0=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],Dm=Te("check",g0);const m0=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],Mm=Te("chevron-down",m0);const p0=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],f0=Te("chevron-right",p0);const h0=[["path",{d:"M12 6v6l4 2",key:"mmk7yg"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],Gm=Te("clock",h0);const y0=[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]],b0=Te("download",y0);const x0=[["path",{d:"M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",key:"1jg4f8"}]],v0=Te("facebook",x0);const j0=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],S0=Te("file-text",j0);const k0=[["rect",{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5",key:"2e1cvw"}],["path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",key:"9exkf1"}],["line",{x1:"17.5",x2:"17.51",y1:"6.5",y2:"6.5",key:"r4j83e"}]],w0=Te("instagram",k0);const A0=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]],tc=Te("mail",A0);const N0=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]],zm=Te("map-pin",N0);const C0=[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]],T0=Te("menu",C0);const E0=[["path",{d:"M5 12h14",key:"1ays0h"}]],Om=Te("minus",E0);const R0=[["path",{d:"M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",key:"9njp5v"}]],ys=Te("phone",R0);const D0=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],Bm=Te("plus",D0);const M0=[["path",{d:"M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2",key:"143wyd"}],["path",{d:"M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6",key:"1itne7"}],["rect",{x:"6",y:"14",width:"12",height:"8",rx:"1",key:"1ue0tg"}]],G0=Te("printer",M0);const z0=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],ks=Te("search",z0);const O0=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],ws=Te("shield-check",O0);const B0=[["path",{d:"M16 10a4 4 0 0 1-8 0",key:"1ltviw"}],["path",{d:"M3.103 6.034h17.794",key:"awc11p"}],["path",{d:"M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z",key:"o988cm"}]],Xn=Te("shopping-bag",B0);const L0=[["path",{d:"M10 5H3",key:"1qgfaw"}],["path",{d:"M12 19H3",key:"yhmn1j"}],["path",{d:"M14 3v4",key:"1sua03"}],["path",{d:"M16 17v4",key:"1q0r14"}],["path",{d:"M21 12h-9",key:"1o4lsq"}],["path",{d:"M21 19h-5",key:"1rlt1p"}],["path",{d:"M21 5h-7",key:"1oszz2"}],["path",{d:"M8 10v4",key:"tgpxqk"}],["path",{d:"M8 12H3",key:"a7s4jb"}]],P0=Te("sliders-horizontal",L0);const I0=[["path",{d:"M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z",key:"17jzev"}]],Lm=Te("thermometer",I0);const H0=[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],Pm=Te("trash-2",H0);const U0=[["path",{d:"M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2",key:"wrbu53"}],["path",{d:"M15 18H9",key:"1lyqi6"}],["path",{d:"M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14",key:"lysw3i"}],["circle",{cx:"17",cy:"18",r:"2",key:"332jqn"}],["circle",{cx:"7",cy:"18",r:"2",key:"19iecd"}]],bs=Te("truck",U0);const q0=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],Im=Te("user",q0);const _0=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Zn=Te("x",_0),V0=({setCurrentPage:u,showToast:d})=>{const[b,c]=L.useState(""),[y,g]=L.useState(!1),j=async()=>{if(!b||b.length<10){d("Please enter a valid WhatsApp number.","error");return}g(!0);const h=`Hi, I'd like to subscribe to Shaa Trading wholesale updates. My number is: ${b}`,p=`https://wa.me/919916726373?text=${encodeURIComponent(h)}`;window.open(p,"_blank"),d("Opening WhatsApp...","success"),c(""),g(!1)};return n.jsx("footer",{className:"bg-[#0a0a0a] text-white border-t border-white/5",children:n.jsxs("div",{className:"max-w-7xl mx-auto px-4 md:px-6 py-16",children:[n.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8",children:[n.jsxs("div",{className:"space-y-6",children:[n.jsx("img",{loading:"lazy",src:"/image/logo-r.jpg",alt:"SHAA TRADING",className:"h-12 w-auto object-contain"}),n.jsx("p",{className:"text-gray-400 text-sm leading-relaxed font-light max-w-xs",children:"Bengaluru-based distributor, supplier, and wholesaler since 2012. Providing trusted healthcare and skincare products to professionals across India."}),n.jsxs("div",{className:"flex gap-4 pt-2",children:[n.jsx("a",{href:"https://www.instagram.com/shaatradingindia/",target:"_blank",rel:"noopener noreferrer",className:"w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white hover:text-black transition-all",children:n.jsx(w0,{size:18})}),n.jsx("a",{href:"https://www.facebook.com/skinandherbs.in/",target:"_blank",rel:"noopener noreferrer",className:"w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white hover:text-black transition-all",children:n.jsx(v0,{size:18})})]})]}),n.jsxs("div",{children:[n.jsx("h3",{className:"text-white font-serif text-lg mb-6",children:"Explore"}),n.jsxs("ul",{className:"space-y-4 text-sm text-gray-400",children:[n.jsx("li",{children:n.jsxs("button",{onClick:()=>u("shop"),className:"hover:text-white transition-colors flex items-center gap-2",children:[n.jsx(ht,{size:12})," All Products"]})}),n.jsx("li",{children:n.jsxs("button",{onClick:()=>u("blog"),className:"hover:text-white transition-colors flex items-center gap-2",children:[n.jsx(ht,{size:12})," Clinical Journal"]})}),n.jsx("li",{children:n.jsxs("button",{onClick:()=>u("about"),className:"hover:text-white transition-colors flex items-center gap-2",children:[n.jsx(ht,{size:12})," Our Story"]})}),n.jsx("li",{children:n.jsxs("button",{onClick:()=>u("contact"),className:"hover:text-white transition-colors flex items-center gap-2",children:[n.jsx(ht,{size:12})," Partner Program"]})}),n.jsx("li",{children:n.jsxs("button",{onClick:()=>u("track"),className:"hover:text-white transition-colors flex items-center gap-2",children:[n.jsx(ht,{size:12})," Track Order"]})}),n.jsx("li",{children:n.jsxs("button",{onClick:()=>u("login"),className:"hover:text-white transition-colors flex items-center gap-2",children:[n.jsx(ht,{size:12})," Login"]})})]})]}),n.jsxs("div",{children:[n.jsx("h3",{className:"text-white font-serif text-lg mb-6",children:"Contact"}),n.jsxs("ul",{className:"space-y-4 text-sm text-gray-400",children:[n.jsxs("li",{className:"flex items-start gap-3",children:[n.jsx(tc,{size:16,className:"mt-0.5 shrink-0 text-white"}),n.jsx("span",{children:"shaatrading@gmail.com"})]}),n.jsxs("li",{className:"flex items-start gap-3",children:[n.jsx(ys,{size:16,className:"mt-0.5 shrink-0 text-white"}),n.jsx("span",{children:"+91 99167 26373"})]}),n.jsxs("li",{className:"flex items-start gap-3",children:[n.jsx(zm,{size:16,className:"mt-0.5 shrink-0 text-white"}),n.jsxs("span",{children:["Bengaluru, Karnataka",n.jsx("br",{}),"Since 2012"]})]})]}),n.jsx("div",{className:"mt-8 md:mt-10 lg:mt-14 flex justify-center md:justify-start",children:n.jsx("img",{src:"/image/razorpay.jpeg",alt:"Razorpay Secured",className:"w-44 md:w-48 lg:w-56 object-contain"})})]}),n.jsxs("div",{children:[n.jsx("h3",{className:"text-white font-serif text-lg mb-6",children:"WhatsApp Updates"}),n.jsx("p",{className:"text-gray-400 text-xs mb-4",children:"Get exclusive wholesale price lists and stock alerts directly on WhatsApp."}),n.jsxs("div",{className:"flex flex-col gap-3",children:[n.jsx("input",{type:"tel",placeholder:"WhatsApp Number",value:b,onChange:h=>c(h.target.value),className:"bg-white/5 border border-white/10 px-4 py-3 text-white text-sm focus:outline-none focus:border-white w-full rounded"}),n.jsx("button",{onClick:j,disabled:y,className:"bg-white text-black px-4 py-3 font-medium text-sm hover:bg-gray-100 transition-colors rounded uppercase tracking-wider disabled:opacity-50 disabled:cursor-not-allowed flex justify-center items-center gap-2",children:y?"Subscribing...":n.jsxs(n.Fragment,{children:["Subscribe ",n.jsx(ht,{size:14})]})})]})]})]}),n.jsxs("div",{className:"border-t border-white/5 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center gap-6",children:[n.jsxs("div",{className:"flex flex-col md:flex-row items-center gap-6 text-xs text-gray-500",children:[n.jsx("p",{children:"© 2026 SHAA TRADING. All rights reserved."}),n.jsxs("div",{className:"flex gap-4",children:[n.jsx("button",{onClick:()=>u("privacy"),className:"hover:text-white transition-colors",children:"Privacy"}),n.jsx("button",{onClick:()=>u("terms"),className:"hover:text-white transition-colors",children:"Terms"}),n.jsx("button",{onClick:()=>u("shipping"),className:"hover:text-white transition-colors",children:"Shipping"})]})]}),n.jsxs("a",{href:"https://zomaxa.co",target:"_blank",rel:"noopener noreferrer",className:"flex items-center gap-2 group px-3 py-2 rounded-lg hover:bg-white/5 transition-all duration-300",children:[n.jsx("span",{className:"text-[10px] text-gray-600 uppercase tracking-wider group-hover:text-gray-400 transition-colors",children:"Designed And Developed By"}),n.jsx("span",{className:"font-serif text-[#C5A059] font-bold tracking-[0.2em] text-[10px] md:text-xs uppercase group-hover:text-[#F4CF57] transition-all duration-300",children:"ZOMAXA.CO"})]})]})]})})},xs=({product:u,viewMode:d,navigateTo:b,addToCart:c})=>{const y=d==="list",g=u.stock<=0;return n.jsxs("article",{className:`group cursor-pointer bg-white transition-all duration-500 flex flex-col h-full ${y?"flex-row gap-6 p-4 border border-gray-100 rounded-sm":"border border-gray-100 rounded-sm p-3 md:p-4 hover:shadow-md"} ${g?"opacity-70":""}`,onClick:()=>!g&&b("product",u),children:[n.jsxs("div",{className:`relative bg-[#f9f9f9] overflow-hidden shrink-0 ${y?"w-32 h-40 rounded-sm":"aspect-[4/5] rounded-sm mb-4"}`,children:[n.jsx("img",{loading:"lazy",src:u.image,alt:u.name,className:`w-full h-full object-contain p-4 mix-blend-multiply transition-transform duration-700 ${g?"grayscale":"group-hover:scale-105"}`}),g&&n.jsx("div",{className:"absolute inset-0 bg-white/40 flex items-center justify-center",children:n.jsx("span",{className:"bg-black text-white text-[8px] font-bold uppercase tracking-[0.2em] px-2 py-1 shadow-sm",children:"Sold Out"})}),!y&&!g&&n.jsx("div",{className:"absolute top-2 left-2 opacity-0 group-hover:opacity-100 transition-opacity",children:n.jsx("span",{className:"bg-white/90 backdrop-blur text-[8px] px-2 py-1 rounded-sm font-bold tracking-widest uppercase shadow-sm border border-gray-100",children:u.brand})})]}),n.jsxs("div",{className:`flex flex-col flex-1 ${y?"justify-center":""}`,children:[n.jsx("div",{className:"text-gray-400 text-[9px] font-bold tracking-widest uppercase mb-1",children:u.category}),n.jsx("h3",{className:`font-medium text-gray-900 leading-tight mb-2 ${y?"text-lg":"text-sm md:text-base"}`,children:u.name}),n.jsx("div",{className:"mt-auto",children:n.jsxs("p",{className:`text-sm font-bold ${g?"text-gray-400":"text-gray-900"}`,children:[u.comparePrice&&n.jsxs("span",{className:"text-gray-400 line-through mr-2 font-normal",children:["₹",u.comparePrice.toLocaleString()]}),"₹",u.price.toLocaleString()]})}),n.jsx("div",{className:"mt-4",children:n.jsx("button",{disabled:g,onClick:j=>{j.stopPropagation(),g||c(u)},className:`w-full py-3 text-[10px] font-bold uppercase tracking-[0.2em] rounded-sm transition-all ${g?"bg-gray-100 text-gray-400 cursor-not-allowed border border-gray-200":"bg-black text-white hover:bg-gray-800"}`,children:g?"Unavailable":"Buy Now"})})]})]})},oa=[{id:1,name:"Glutax 20000000GN Pico-QuadNA ReCombined White Skin Whitening Injection",category:"Injection",brand:"Glutax",price:9800,comparePrice:14500,image:"/image/glutax/gtx-20Mgn+.jpeg",images:["/image/glutax/gtx-20Mgn+.jpeg","/image/glutax/gtx-20Mgn+-2.jpeg","/image/glutax/gtx-20Mgn+-3.jpeg","/image/glutax/gtx-20Mgn+-4.jpeg"],description:"Ultimate skin brightening & whitening with stem cell therapy and NAD+ for deep repair and anti-aging effects.",details:`
    <strong>Glutax 20000000GN Pico-QuadNA ReCombined White Skin Whitening Injection</strong><br/><br/>
    Ultimate skin brightening & whitening with advanced Pico-QuadNA technology and stem cell therapy. This medical-grade formulation combines powerful antioxidants and NAD+ for deep skin repair, detox, and visible rejuvenation.<br/><br/>
    <strong>Key Features:</strong><br/>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Strength: 20,000,000 mg (20 million mg) Glutathione Complex</li>
      <li>Composition: Glutathione, Stem Cells, NAD+</li>
      <li>Formulation: Lyophilized Powder for IV Injection</li>
      <li>Packaging: 10 sessions per box</li>
      <li>Country of Origin: India</li>
      <li>Availability: In Stock</li>
    </ul>
    <br/>
    <strong>What's Included:</strong><br/>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Box includes lyophilized powder for 10 sessions</li>
      <li>Push set (optional): 10cc syringe, butterfly, 5ml sterile water (x10)</li>
      <li>Drip set (optional): 10cc syringe, macroset, 100ml PNSS, cannula or butterfly (x10)</li>
    </ul>
    <br/>
    <strong>Benefits:</strong>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Ultimate skin brightening & whitening</li>
      <li>Deep skin repair & anti-aging effects</li>
      <li>Powerful antioxidants for detox & glow</li>
      <li>Stem Cell Therapy for total rejuvenation</li>
      <li>Medical-grade potency for real, visible results</li>
    </ul>
    <br/>
    <em class="text-xs text-gray-400">Note: Push set and drip set available separately. Suitable for 10 sessions.</em>
    `,benefits:["Ultimate Skin Brightening","Deep Skin Repair & Anti-Aging","Antioxidant Detox & Glow","Stem Cell Rejuvenation","Medical-Grade Potency","10 Sessions Pack"],sku:"GLUTAX-20000000GN",volume:"10 Sessions",stock:10},{id:2,name:"Glutax 5gs Micro Advance Glutathione 5000mg 12 Sessions Skin Whitening Injection",category:"Injection",brand:"Glutax",price:13500,comparePrice:18e3,image:"/image/glutax/gtx-5gs-adv.jpeg",images:["/image/glutax/gtx-5gs-adv.jpeg","/image/glutax/gtx-5gs-adv-3.jpg","/image/glutax/gtx-5gs-adv-2.png","/image/glutax/gtx-5gs-adv-4.png"],description:"Glutax 5gs Micro Advance Glutathione injections reduce hyperpigmentation, sun spots, wrinkles, acne, and melasma by eliminating toxins and free radicals.",details:`
    <strong>Glutax 5gs Micro Advance Glutathione 5000mg Injection</strong><br/><br/>
    Glutax 5gs Micro Advance Glutathione injections effectively reduce hyperpigmentation, sun spots, wrinkles, acne, and even melasma by eliminating toxins and free radicals from the body. It possesses powerful anti-inflammatory properties and requires regular administration for optimal results.<br/><br/>
    <strong>Key Features:</strong><br/>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Strength: 5000 mg Glutathione</li>
      <li>Packaging: 12 sessions per box</li>
      <li>Composition: Pure Glutathione</li>
      <li>With UltraCell Estratto & Natural Collagen</li>
      <li>Form: Injections (IV Infusion)</li>
      <li>Grade Standard: A+</li>
      <li>Manufactured By: Switzerland</li>
      <li>Shelf Life: 24 Months</li>
      <li>Vegetarian: Yes</li>
      <li>Suitable for: Men & Women</li>
    </ul>
    <br/>
    <strong>How To Use:</strong><br/>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Must be taken as per dosage prescribed by dermatologist</li>
      <li>Intravenous IV Infusion (Drip) once a week</li>
      <li>Consult dermatologist before taking the injection</li>
    </ul>
    <br/>
    <strong>Benefits:</strong>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Reduces hyperpigmentation, sun spots & melasma</li>
      <li>Minimizes wrinkles and acne</li>
      <li>Eliminates toxins and free radicals</li>
      <li>Anti-inflammatory properties</li>
      <li>Whitens skin and lightens scars</li>
      <li>Powerful antioxidant effects</li>
    </ul>
    <br/>
    <strong>Additional Information:</strong><br/>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Common Name: Glutax 5gs Micro Advance</li>
      <li>Product Type: Skin Whitening Injection</li>
      <li>Dose: Once a week</li>
      <li>Side Effects: No side effects</li>
      <li>Features: Skin whitening, antioxidants, scar lightening</li>
    </ul>
    <br/>
    <strong>Not Suitable For:</strong> Pregnant women or individuals with any kind of vitamin allergy.<br/><br/>
    <em class="text-xs text-gray-400">Note: PCD Pharma, Wholesale, and Third Party Manufacturing also available. Always consult a dermatologist before use.</em>
    `,benefits:["Reduces Hyperpigmentation","Eliminates Sun Spots & Melasma","Minimizes Wrinkles & Acne","Anti-Inflammatory Properties","Detoxifies & Lightens Scars","12 Sessions Pack","No Side Effects","Vegetarian Formula"],sku:"GLUTAX-5GS-MICRO-12",volume:"12 Sessions",stock:10},{id:3,name:"Glutax 5GS Micro Cellular Ultra Whitening Injection 6 Sessions",category:"Injection",brand:"Glutax",price:9500,comparePrice:14500,image:"/image/glutax/gtx-5gs-micro.jpeg",images:["/image/glutax/gtx-5gs-micro.jpeg","/image/glutax/glutax-5gs-micro-cellular-2.jpg","/image/glutax/glutax-5gs-micro-cellular-3.jpg","/image/glutax/glutax-5gs-micro-cellular-4.jpg"],description:"Safe and effective skin whitening injection with gentle ingredients suitable for sensitive and dark-colored skin.",details:`
    <strong>Glutax 5GS Micro Cellular Ultra Whitening Injection (6 Sessions)</strong><br/><br/>
    A safe, effective, and convenient way to whiten your skin using gentle ingredients suitable for sensitive and dark-colored skin. Contains all-natural ingredients designed to lighten skin without causing damage or irritation.<br/><br/>
    
    <strong>Complete Box Contents (6 Sessions):</strong><br/>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Large Ampoules (6 x 5 ml): Ascorbic Acid 1500mg, Collagen 350mg</li>
      <li>Small Ampoules (6 x 2 ml): Vitamin E 300mg, Pro-vitamin B3 250mg, Pro-Vitamin B5 100mg</li>
      <li>Vials (6): Glutathione 5000mg, Alpha Lipoic acid 200mg</li>
    </ul>
    <br/>

    <strong>Key Ingredients:</strong><br/>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Glutathione - 5000mg per vial</li>
      <li>Collagen Extract - 350mg</li>
      <li>Vitamin E - 300mg</li>
      <li>Ascorbic Acid - 1500mg</li>
      <li>Alpha Lipoic Acid - 200mg</li>
      <li>Pro-Vitamin B3 & B5</li>
    </ul>
    <br/>

    <strong>Manufacturing Details:</strong><br/>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Manufactured By: Derma Medical Skin Sciences, Italy</li>
      <li>Country of Origin: Italy</li>
      <li>Storage: Keep at room temperature, avoid direct sunlight</li>
    </ul>
    <br/>

    <strong>Benefits:</strong>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Detoxifies body and eliminates free radicals</li>
      <li>Whitens skin and improves complexion</li>
      <li>Shrinks large pores and reduces hyperpigmentation</li>
      <li>Cures pimples, acne, freckles, and blemishes</li>
      <li>Prevents pre-mature aging and wrinkles</li>
      <li>Improves collagen and elastin levels</li>
      <li>Protects skin from sun and environmental damage</li>
    </ul>
    <br/>

    <strong>Recommended Dosage:</strong> Intravenous IV Infusion (Drip) once a week. Consult your doctor for best results.<br/><br/>

    <strong>Not Suitable For:</strong> Men, pregnant women, breast feeders, vitamin allergies, cardiovascular patients.<br/><br/>

    <strong>Important Notes:</strong>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Results depend on individual metabolism</li>
      <li>Consult dermatologist before use</li>
      <li>PCD Pharma also available</li>
    </ul>
    <br/>

    <em class="text-xs text-gray-400">Note: Always consult a dermatologist before use. Results vary by individual metabolism.</em>
    `,benefits:["Complete 6 Session Kit","Detoxifies & Eliminates Free Radicals","Reduces Hyperpigmentation","Shrinks Large Pores","Prevents Premature Aging","Italian Origin","Suitable for Sensitive Skin"],sku:"GLUTAX-5GS-CELLULAR-6S",volume:"6 Sessions",stock:10},{id:4,name:"Glutax 10000000GX DualNA Premium Recombined Cell Formula Injection",category:"Injection",brand:"Glutax",price:8800,comparePrice:12500,image:"/image/glutax/gtx-10mgx.jpg",images:["/image/glutax/gtx-10mgx.jpg","/image/glutax/gtx-10mgx-2.jpeg","/image/glutax/gtx-10mgx-3.jpg","/image/glutax/gtx-10mgx-4.jpg"],description:"Highly concentrated skin whitening injection with premium recombined stem cells, Q10, collagen, and multivitamins for enhanced brightness.",details:`
    <strong>Glutax 10000000GX DualNA Premium Recombined Cell Formula</strong><br/><br/>
    A highly concentrated skin whitening injection designed to enhance skin brightness with premium recombined stem cells from grape, apple, argan fruit, and rose.<br/><br/>
    
    <strong>Key Ingredients:</strong><br/>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Glutathione - 10,000,000 mg</li>
      <li>Multivitamin - 500,000 mg</li>
      <li>Premium Recombined Stem Cells - 60,000 mg</li>
      <li>Natural Collagen - 24,000 mg</li>
      <li>Epidermal Growth Factor - 16,000 mg</li>
      <li>ProEnzyme Q10 - 7,400 mg</li>
    </ul>
    <br/>

    <strong>Package Contents:</strong> 1 box containing 10 injection sets (each set includes 2 vials + 2 ampoules). Made in Italy.<br/><br/>

    <strong>Benefits:</strong>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Brightens and smoothens skin</li>
      <li>Eliminates free radicals</li>
      <li>Increases skin elasticity</li>
      <li>Tightens pores with anti-aging effects</li>
      <li>Fades scars and reduces pigmentation</li>
      <li>Minimizes fine lines and wrinkles</li>
      <li>Prevents acne and blemishes</li>
    </ul>
    <br/>

    <strong>Usage:</strong> IM or IV. One set per week for first two months, then one set every two weeks for maintenance.<br/><br/>

    <strong>Not Recommended For:</strong> Breastfeeding women, during menstruation, vitamin allergies, cardiovascular conditions.<br/><br/>

    <em class="text-xs text-gray-400">Note: Results vary by individual. Paraben free & organic. Consult dermatologist before use.</em>
    `,benefits:["10 Sessions Pack","Made in Italy","With Stem Cells & Q10","Brightens & Smoothens","Anti-Aging Effects","Reduces Pigmentation","Fades Scars","Paraben Free"],sku:"GLUTAX-10000000GX-DUALNA",volume:"10 Sessions",stock:10},{id:5,name:"Glutax 2000gs Advanced II Glutathione Injection(out of stock)",category:"Injection",brand:"Glutax",price:9500,comparePrice:14500,image:"/image/glutax/gtx-2kgs.jpeg",images:["/image/glutax/gtx-2kgs.jpeg","/image/glutax/gtx-2kgs-2.jpeg","/image/glutax/glutax-2000gs-advanced-ii-3.jpg","/image/glutax/glutax-2000gs-advanced-ii-4.jpg"],description:"Advanced II Recombined White RNA Active Cells skin whitening injection with complete detoxification and immunity boosting benefits.",details:`
    <strong>Glutax 2000GS Advanced II Recombined White RNA Active Cells</strong><br/><br/>
    Unlock the power of Glutax, featuring glutathione, the body's ultimate antioxidant. Each box offers ten sessions designed to brighten your skin.<br/><br/>
    
    <strong>What's Included (10 Sessions):</strong><br/>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>10 ampoules: Multivitamin 3500mg, Natural Collagen 800mg, Selenium 600mg</li>
      <li>10 ampoules: Recombined Stem Cell (Grape Seed, Apple, Argan Fruit, Rose Placenta Extract) 600mg</li>
      <li>10 ampoules: Pure DNA & RNA Extract 2000 mcg, Cyanocobalamine 2000mg</li>
      <li>10 vials: Glutathione 2000g, Epidermal Growth Factor 2000mg, Alpha Lipoic Acid 700mg, Kojic Acid 500mg</li>
      <li>10 vials: Glutathione 2000g, ProCoenzyme Q10 600mg, Cinnamomum Subavenium 325mg</li>
    </ul>
    <br/>

    <strong>Key Benefits:</strong>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Complete Detoxification: Supports liver, kidneys, GI tract, and intestines</li>
      <li>Enhanced Immunity: Boosts T cell lymphocytes</li>
      <li>Revitalized Skin: Glowing, youthful complexion with reduced aging signs</li>
    </ul>
    <br/>

    <strong>Expected Results:</strong>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>1 Box: Radiant glow</li>
      <li>2 Boxes: Noticeably brighter and lighter skin</li>
    </ul>
    <br/>

    <strong>How to Use:</strong>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Combine contents of ampoules and vials</li>
      <li>Administer slowly through intravenous injection</li>
      <li>Dosage: Once weekly, or every four days for accelerated results</li>
      <li>Hydrate adequately 1-2 hours prior</li>
    </ul>
    <br/>

    <strong>Key Features:</strong>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Country of Origin: Italy</li>
      <li>Paraben Free & Organic: Yes</li>
      <li>Form: Injection</li>
      <li>Usage: Skin Whitening</li>
    </ul>
    <br/>

    <em class="text-xs text-gray-400">Note: Results vary based on individual usage, absorption rates, and lifestyle choices. Consistent use recommended for optimal results. Consult dermatologist before use.</em>
    `,benefits:["10 Sessions Pack","Made in Italy","Complete Detoxification","Boosts Immunity","Revitalizes Skin","With Stem Cells & Q10","Paraben Free","Contains Kojic Acid"],sku:"GLUTAX-2000GS-ADVANCED-II",volume:"10 Sessions",stock:0},{id:6,name:"Glutax 50000000GS Advanced Glutathione Skin Whitening Injection – 10 Sessions",category:"Injection",brand:"Glutax",price:9800,comparePrice:14500,image:"/image/glutax/gtx-50mgs.jpeg",images:["/image/glutax/gtx-50mgs.jpeg","/image/glutax/gtx-50Mgs-3.jpeg","/image/glutax/gtx-50mgs-3.jpg","/image/glutax/gtx-50mgs-4.jpg"],description:"Ultra-high potency Italian glutathione whitening therapy with dramatic whitening, deep detoxification, and visible anti-aging benefits.",details:`
    <strong>Glutax 50000000GS Advanced Glutathione Injection</strong><br/><br/>
    One of the most powerful Italian glutathione whitening therapies available. Designed for advanced users seeking dramatic whitening, deep detoxification, and visible anti-aging benefits across 10 complete sessions.<br/><br/>
    
    <strong>Composition:</strong><br/>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Ultra-High Glutathione Complex</li>
      <li>Collagen Peptides & Vitamin C</li>
      <li>Alpha Lipoic Acid & Coenzyme Q10</li>
      <li>Hyaluronic Acid</li>
      <li>Multivitamins, Minerals & Amino Acids</li>
      <li>Natural Botanical Extracts</li>
    </ul>
    <br/>

    <strong>Key Benefits:</strong>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Ultra-high glutathione dose for maximum whitening</li>
      <li>Reduces pigmentation and dark patches</li>
      <li>Improves elasticity and firmness with collagen</li>
      <li>Supports detoxification and liver health</li>
      <li>10 full sessions of professional results</li>
      <li>Reduces oxidative stress and slows aging</li>
    </ul>
    <br/>

    <strong>Why It Works:</strong> Glutathione suppresses melanin production while detoxifying the body. Vitamin C boosts absorption and accelerates brightening results.<br/><br/>

    <strong>Features:</strong> Made in Italy • 10-Session Protocol • Professional-grade potency<br/><br/>

    <em class="text-xs text-gray-400">Note: Results vary by individual. Consult dermatologist before use.</em>
    `,benefits:["10 Sessions Pack","Made in Italy","Ultra-High Potency","Maximum Whitening","Reduces Pigmentation","Detoxifies Body"],sku:"GLUTAX-50000000GS-ADV",volume:"10 Sessions",stock:10},{id:7,name:"Glutax 22000000 GS Extremely Tremendous White SPF 100 UV Protection Skin Whitening Injection",category:"Injection",brand:"Glutax",price:9500,comparePrice:14500,image:"/image/glutax/gtx-22Mgs.jpeg",images:["/image/glutax/gtx-22Mgs.jpeg","/image/glutax/gtx-22Mgs-2.jpeg","/image/glutax/gtx-22Mgs-3.jpeg","/image/glutax/gtx-22Mgs-4.jpeg"],description:"Extremely Tremendous White formula with SPF 100 UV protection, featuring grape seed extract, glutathione, collagen, and vitamin C for comprehensive skin whitening.",details:`
    <strong>Glutax 22000000 GS Extremely Tremendous White SPF 100 UV Protection Injection</strong><br/><br/>
    Advanced skin whitening injection with built-in SPF 100 UV protection. Features a powerful combination of grape seed extract, glutathione, collagen, and vitamin C for comprehensive whitening and sun protection.<br/><br/>
    
    <strong>Composition:</strong><br/>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Grape Seed Extract</li>
      <li>Glutathione</li>
      <li>Collagen</li>
      <li>Vitamin C</li>
      <li>Alpha Lipoic Acid</li>
    </ul>
    <br/>

    <strong>Key Features:</strong><br/>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Strength: 22,000,000 GS</li>
      <li>Packaging Size: 10 vials kit</li>
      <li>Formulation: Lyophilized Powder</li>
      <li>Injection Type: IV (Drips)</li>
      <li>Country of Origin: Italy</li>
      <li>Paraben Free & Organic: Yes</li>
      <li>Gender: Unisex</li>
      <li>SPF 100 UV Protection</li>
    </ul>
    <br/>

    <strong>Benefits:</strong>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Provides SPF 100 UV protection</li>
      <li>Extremely tremendous whitening effect</li>
      <li>Powerful antioxidant protection</li>
      <li>Contains grape seed extract for enhanced results</li>
      <li>Collagen for skin elasticity</li>
      <li>Vitamin C for brightening</li>
    </ul>
    <br/>

    <strong>Additional Information:</strong>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>PCD Pharma available</li>
      <li>In Stock</li>
      <li>Brand: Glutax</li>
      <li>Form: Injection (Drips)</li>
    </ul>
    <br/>

    <em class="text-xs text-gray-400">Note: Consult dermatologist before use. Results may vary by individual.</em>
    `,benefits:["10 Sessions Pack","Made in Italy","SPF 100 UV Protection","With Grape Seed Extract","Paraben Free","Unisex","Contains Collagen","IV Drips Format"],sku:"GLUTAX-22000000GS-SPF",volume:"10 Sessions",stock:10},{id:8,name:"Glutax 8000000GS Ultimate Recombined White Glutathione Skin Whitening Injection",category:"Injection",brand:"Glutax",price:9500,comparePrice:14500,image:"/image/glutax/gtx-80Mgs.jpeg",images:["/image/glutax/gtx-80Mgs.jpeg","/image/glutax/gtx-80Mgs-2.jpeg","/image/glutax/gtx-80Mgs-3.jpeg","/image/glutax/gtx-80Mgs-4.jpeg"],description:"Ultimate Recombined White formula with 8,000,000g glutathione, multivitamins, collagen, and growth factors for visible whitening and anti-aging results.",details:`
    <strong>Glutax 8000000GS Ultimate Recombined White Glutathione Injection</strong><br/><br/>
    A popular glutathione brand featuring 8,000,000 grams of glutathione combined with multivitamins, collagen, natural extracts, and growth factors that reduce signs of aging. Suitable for those wanting clearer and firmer skin complexion.<br/><br/>
    
    <strong>Composition:</strong><br/>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Ultrafiltration Glutathione - 8,000,000 g</li>
      <li>Crithmum maritimum Cells CIC2 - 100,000 mg</li>
      <li>Alpha Lipoic Acid - 100,000 mg</li>
      <li>Multivitamin - 80,000 mg</li>
      <li>miRNA White Element - 50,000 mg</li>
      <li>Natural Collagen - 40,000 mg</li>
      <li>Kojic Acid - 20,000 mg</li>
      <li>Selenium - 20,000 mg</li>
      <li>SOD (Superoxide Dismutase) - 8,000 mg</li>
      <li>Epidermal Growth Factor - 5,000 mg</li>
    </ul>
    <br/>

    <strong>Package Contents:</strong> 1 Box including 10 Injection Sets (1 Injection Set = 2 ampoules + 2 vials). Expiry: April 2029.<br/><br/>

    <strong>Key Features:</strong><br/>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Country of Origin: Italy</li>
      <li>Paraben Free & Organic: Yes</li>
      <li>Form: Injection</li>
      <li>Usage: Skin Whitening</li>
    </ul>
    <br/>

    <strong>Benefits:</strong>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Skin whitening and lightening</li>
      <li>Anti-aging effects</li>
      <li>Minimizes acne and pimples</li>
      <li>Decreases pore size</li>
      <li>Healing of scars</li>
      <li>Promotes collagen production</li>
      <li>Detoxification</li>
      <li>Lightening dark areas</li>
      <li>Protects cells from UV damage with high SOD content</li>
    </ul>
    <br/>

    <strong>Usage:</strong> Administered intravenously (IV) or intramuscular (IM). Use once weekly. Always consult your doctor.<br/><br/>

    <strong>Not Ideal For:</strong> Breast feeders, during menstruation, vitamin allergies, cardiovascular problems.<br/><br/>

    <em class="text-xs text-gray-400">Note: Results may vary from person to person. Consult healthcare professional before use.</em>
    `,benefits:["10 Sessions Pack","Made in Italy","8,000,000g Glutathione","Anti-Aging","Reduces Acne & Scars","Promotes Collagen","Detoxifies","UV Protection with SOD"],sku:"GLUTAX-8000000GS-ULTIMATE",volume:"10 Sessions",stock:10},{id:9,name:"Glutax 2000gs Recombined White Injections",category:"Injection",brand:"Glutax",price:8800,comparePrice:12500,image:"/image/glutax/gtx-2kgs-re.jpeg",images:["/image/glutax/gtx-2kgs-re.jpeg","/image/glutax/glutax-2000gs-recombined-white-2.jpg","/image/glutax/glutax-2000gs-recombined-white-3.jpg","/image/glutax/glutax-2000gs-recombined-white-4.jpg"],description:"Glutax 2000gs Recombined White Injections with ultrafiltration glutathione and natural ingredients for effective skin whitening and anti-aging benefits.",details:`
    <strong>Glutax 2000gs Recombined White Injections</strong><br/><br/>
    An effective skin whitening solution from the famous dermatological cosmetics company. Uses natural ingredients including Extra pone Nutgrass root essence to help the body produce more collagen for brighter, healthier looking skin with less redness.<br/><br/>
    
    <strong>Ingredients:</strong><br/>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Ultrafiltrazione Glutathione - 2000G</li>
      <li>Multivitaminico - 3500mg</li>
      <li>Natural Collagen - 800mg</li>
      <li>Epidermal Growth Factor - 2000mg</li>
      <li>Acido Alfa Lipoico - 700mg</li>
      <li>Pro Coenzyme Q10 - 600mg</li>
      <li>Selenio - 600mg</li>
      <li>Acido Cogico - 500mg</li>
      <li>Cinnamomum Subavenium - 325mg</li>
    </ul>
    <br/>

    <strong>Key Features:</strong><br/>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Strength: 2000mg</li>
      <li>Country of Origin: Italy</li>
      <li>Packaging Type: Vial & Ampoule</li>
      <li>Dose: Every 4 days once</li>
      <li>Expiry Date: Dec 2028</li>
    </ul>
    <br/>

    <strong>Benefits:</strong>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Lightens the skin</li>
      <li>Clear and downy skin</li>
      <li>Anti-ageing treatment</li>
      <li>Improves texture of skin</li>
      <li>Reduces scars and blemishes</li>
      <li>Eliminates acne and pimples</li>
      <li>Removes toxins from the body</li>
      <li>Reduces pigmentation and lines</li>
      <li>Removes dark circles</li>
      <li>Transforms lips and skin to pinkish and radiant</li>
      <li>No chemicals or harmful ingredients</li>
    </ul>
    <br/>

    <strong>Dosage:</strong> One injection session every 4 days for 1-2 months depending on body metabolism. One box lasts about 40 days. Then reduce to 1 session every week for maintenance.<br/><br/>

    <strong>Not Suitable For:</strong> Breast feeders, vitamin allergies, pregnant women.<br/><br/>

    <em class="text-xs text-gray-400">Note: Results may vary from person to person. Consult dermatologist before use.</em>
    `,benefits:["Made in Italy","Lightens Skin","Anti-Aging","Reduces Scars & Blemishes","Eliminates Acne","Detoxifies Body","Removes Dark Circles","Chemical-Free"],sku:"GLUTAX-2000GS-RECOMBINED",volume:"1 Box",stock:10},{id:10,name:"Glutax 2000000GX DualNA Premium Recombined Cell 10 Sessions Glutathione Skin Whitening Injection",category:"Injection",brand:"Glutax",price:9500,comparePrice:14500,image:"/image/glutax/gtx-20mgx.jpeg",images:["/image/glutax/gtx-20mgx.jpeg","/image/glutax/glutax-2000000gx-dualna-2.jpg","/image/glutax/glutax-2000000gx-dualna-3.jpg","/image/glutax/glutax-2000000gx-dualna-4.jpg"],description:"High-quality glutathione skin whitening injection with DualNA Premium Recombined Cell technology for flawless, brighter, and healthier skin.",details:`
    <strong>Glutax 2000000GX DualNA Premium Recombined Cell Glutathione Injection</strong><br/><br/>
    A high-quality product with a high amount of important chemicals that help to give you flawless, brighter, and healthier skin. One of the most current ground-breaking innovations from the renowned cosmetics brand, featuring advanced engineering and technologies for superior results.<br/><br/>
    
    <strong>Ingredients (DNA & RNA Formula):</strong><br/>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>DNA & RNA Glutathione - 2,000,000g</li>
      <li>DNA & RNA Multivitaminico - 250,000mg</li>
      <li>DNA & RNA Premium Recombined (Grape, Apple, Argan Fruit, Rose) - 30,000mg</li>
      <li>DNA & RNA Collagene Naturale - 12,000mg</li>
      <li>DNA & RNA Epidermal Growth Factor - 8,000mg</li>
      <li>DNA & RNA Ultra White Elements - 6,000mg</li>
      <li>DNA & RNA Selenio - 5,000mg</li>
      <li>DNA & RNA PDRN Hyal - 4,800mg</li>
      <li>DNA & RNA ProEnzyme Q10 - 3,700mg</li>
    </ul>
    <br/>

    <strong>Key Features:</strong><br/>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>10 Sessions Pack</li>
      <li>Country of Origin: Italy</li>
      <li>High-dose L-Glutathione formula</li>
      <li>Popular choice among spas and skin clinics worldwide</li>
    </ul>
    <br/>

    <strong>Benefits:</strong>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Anti-aging & skin lightening</li>
      <li>Whiter and brighter skin</li>
      <li>Reduces pimples and acne</li>
      <li>Lightens dark spots</li>
      <li>Stimulates collagen production</li>
      <li>Detoxifies the body</li>
      <li>Even skin tone</li>
      <li>Minimizes pores</li>
      <li>Hydrates and firms skin</li>
      <li>Removes dark spots and scars</li>
      <li>Regenerates skin cells</li>
      <li>Repairs damaged skin</li>
    </ul>
    <br/>

    <strong>Why It Works:</strong> Contains high doses of L-glutathione and Vitamin C. The added oral booster helps maintain high levels of Glutathione in the body even when not undergoing treatment.<br/><br/>

    <strong>Made in Origin Country:</strong> Italy<br/><br/>

    <em class="text-xs text-gray-400">Note: Results may vary from person to person. Consult dermatologist before use.</em>
    `,benefits:["10 Sessions Pack","Made in Italy","2,000,000g Glutathione","Anti-Aging","Reduces Acne","Stimulates Collagen","Detoxifies","Minimizes Pores"],sku:"GLUTAX-2000000GX-DUALNA",volume:"10 Sessions",stock:10},{id:11,name:"Glutax 75GX TCRP Glutathione Skin Whitening Injection - 14 Sessions",category:"Injection",brand:"Glutax",price:11800,comparePrice:16500,image:"/image/glutax/gtx-75gx.jpeg",images:["/image/glutax/gtx-75gx.jpeg","/image/glutax/gtx-75gx.jpg","/image/glutax/glutax-75gx-tcrp-3.jpg","/image/glutax/glutax-75gx-tcrp-4.jpg"],description:"Next-generation Glutathione skin whitening injection with advanced Tri-Cell Repair Power (TCRP) technology for visible transformation and cellular rejuvenation.",details:`
    <strong>Glutax 75GX TCRP Glutathione Skin Whitening Injection</strong><br/><br/>
    A next-generation Glutathione skin whitening injection infused with advanced Tri-Cell Repair Power (TCRP) technology. Formulated for visible transformation, it works deep within skin layers to reduce pigmentation, reverse aging signs, and restore natural glow with medical-grade skin science.<br/><br/>
    
    <strong>Key Features:</strong><br/>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>14 Sessions Treatment Cycle</li>
      <li>Advanced TCRP Technology for faster skin repair</li>
      <li>High Glutathione strength</li>
      <li>Made in Italy</li>
      <li>Safe, certified formulation</li>
    </ul>
    <br/>

    <strong>Benefits:</strong>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Intense skin brightening by targeting melanin production</li>
      <li>Reduces dark spots and hyperpigmentation</li>
      <li>Youth-boosting effects - firms skin and minimizes fine lines</li>
      <li>Deep hydration support for soft, supple skin</li>
      <li>Detoxification at cellular level</li>
      <li>Accelerates skin repair and collagen regeneration</li>
      <li>Protection from environmental damage</li>
    </ul>
    <br/>

    <strong>Dosage & Usage:</strong>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Recommended: 1 injection per week (IV or IM, under medical supervision)</li>
      <li>Treatment Cycle: 14 sessions for full visible results</li>
      <li>Maintenance: 1 injection every 15-20 days</li>
    </ul>
    <br/>

    <strong>Why It Stands Out:</strong>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Advanced TCRP technology for faster absorption</li>
      <li>Designed for Indian skin tones and climate</li>
      <li>No harmful preservatives or additives</li>
      <li>Trusted by dermatologists and skin clinics worldwide</li>
    </ul>
    <br/>

    <strong>Pro Tip:</strong> Drink plenty of water, follow a nutrient-rich diet, and avoid direct sun exposure during treatment for best results.<br/><br/>

    <em class="text-xs text-gray-400">Note: Results may vary from person to person. Consult dermatologist before use.</em>
    `,benefits:["14 Sessions Pack","Made in Italy","TCRP Technology","Intense Brightening","Reduces Dark Spots","Anti-Aging","Deep Hydration","Cellular Detox"],sku:"GLUTAX-75GX-TCRP-14",volume:"14 Sessions",stock:10},{id:12,name:"Glutax 30000000gs Extremely Tremendous White Glutathione Skin Whitening Injection",category:"Injection",brand:"Glutax",price:9500,comparePrice:14500,image:"/image/glutax/gtx-30mgs-1.jpeg",images:["/image/glutax/gtx-30mgs-1.jpeg","/image/glutax/gtx-30mgs.jpeg","/image/glutax/gtx-30mgs-3.jpeg","/image/glutax/gtx-30mgs-4.jpeg"],description:"High quality, high dose glutathione skin whitening injection with Nano Glutathione technology for a brighter, more even-toned complexion.",details:`
    <strong>Glutax 30000000gs Extremely Tremendous White</strong><br/><br/>
    The most high quality, high dose Glutathione skin whitening injection on the market today. Considered one of the most reliable L-Glutathione injections, it helps maintain Nano l-Glutathione at high levels in your body even when not undergoing active treatment.<br/><br/>
    
    <strong>Ingredients (Per 100ml Fiale):</strong><br/>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Acido Alfa Lipico - 200,000mg</li>
      <li>Growth Factor - 100,000mg</li>
      <li>Multivitaminco - 100,000mg</li>
      <li>Collagen Naturale - 50,000mg</li>
      <li>Selenio - 50,000mg</li>
      <li>Acido Codico - 50,000mg</li>
      <li>Pro Co Enzyme Q10 - 10,000mg</li>
      <li>RNA HA - 10,000mg</li>
    </ul>
    <br/>

    <strong>Ingredients (30 Vials):</strong><br/>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Nano Glutathione - 30,000,000mg</li>
      <li>Grape Seed Extract - 100,000mg</li>
      <li>Pearl Extract - 100,000mg</li>
      <li>RNA White Cell - 50,000mg</li>
    </ul>
    <br/>

    <strong>Key Features:</strong><br/>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Country of Origin: Italy</li>
      <li>Form: IV/Infusion</li>
      <li>Nano Glutathione technology</li>
    </ul>
    <br/>

    <strong>Benefits:</strong>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Skin whitening and brightening</li>
      <li>Anti-aging effects - helps stem skin cells</li>
      <li>Reduces acne, pimples and minimizes pores</li>
      <li>Antioxidant and detoxifier</li>
      <li>Anti-wrinkle properties</li>
      <li>Heals scars and lightens dark spots</li>
      <li>Reduces pigmentation from sun exposure</li>
      <li>Stimulates collagen production</li>
      <li>Nourishes and firms the skin</li>
      <li>Enhances metabolism and boosts immune system</li>
    </ul>
    <br/>

    <em class="text-xs text-gray-400">Note: The result depends on individual metabolism. Consult dermatologist before use.</em>
    `,benefits:["Made in Italy","30,000,000mg Nano Glutathione","With Grape Seed & Pearl Extract","Skin Brightening","Anti-Aging","Reduces Pigmentation","Detoxifies","Stimulates Collagen"],sku:"GLUTAX-30000000GS-EXTREME",volume:"1 Box",stock:10},{id:13,name:"Aqua Skin Veniscy 286 TriNa Pico Cell Glutathione Injection",category:"Injection",brand:"Aqua Skin",price:9500,comparePrice:14500,image:"/image/aqua/asv-286-2.jpeg",images:["/image/aqua/asv-286-2.jpeg","/image/aqua/asv-286-4.jpeg","/image/aqua/asv-286-5.jpeg","/image/aqua/asv-286-3.jpeg"],description:"Swiss-made glutathione injection with TriNa Pico Cell technology for powerful skin lightening, anti-aging, and deep hydration.",details:`
    <strong>Aqua Skin Veniscy 286 TriNa Pico Cell Glutathione Injection</strong><br/><br/>
    A premium Swiss-made glutathione injection featuring advanced TriNa Pico Cell technology for maximum absorption and visible results. Designed to deliver powerful skin lightening, anti-aging benefits, and deep hydration at the cellular level.<br/><br/>
    
    <strong>Key Ingredients:</strong><br/>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Glutathione – Master antioxidant that reduces melanin production</li>
      <li>Vitamin C – Enhances glutathione effects and boosts collagen</li>
      <li>Collagen – Increases skin firmness and elasticity</li>
      <li>Hyaluronic Acid – Locks in moisture for lasting hydration</li>
      <li>Antioxidants – Neutralize free radicals and prevent aging</li>
    </ul>
    <br/>

    <strong>Key Features:</strong><br/>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Brand: Aqua Skin</li>
      <li>Origin: Made in Switzerland</li>
      <li>Packaging: Vial in Box</li>
      <li>Administration: IV injection</li>
    </ul>
    <br/>

    <strong>Benefits:</strong>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Powerful skin lightening and even skin tone</li>
      <li>Anti-aging – minimizes wrinkles and fine lines</li>
      <li>Deep hydration for soft, supple skin</li>
      <li>Stimulates collagen for skin renewal</li>
      <li>Reduces acne, scars, and pigmentation</li>
      <li>Detoxifies body at cellular level</li>
    </ul>
    <br/>

    <strong>How It Works:</strong> Administered intravenously (IV) for maximum absorption, allowing powerful antioxidants and nutrients to work at the cellular level for faster, more effective results than oral supplements.<br/><br/>

    <strong>Who Can Benefit:</strong> Individuals seeking lighter skin tone, those with dark spots or melasma, people with wrinkles or sagging skin, those with dry skin needing hydration, and anyone with acne scars.<br/><br/>

    <strong>Usage Instructions:</strong> Consult a dermatologist. Administered via IV by certified professional. Follow recommended treatment schedule based on skin goals. Post-treatment: avoid sun exposure, use sunscreen, maintain healthy skincare routine.<br/><br/>

    <strong>Safety:</strong> Generally safe with clinically tested ingredients. Possible mild redness or swelling at injection site (temporary), slight dryness, or rare allergic reactions.<br/><br/>

    <em class="text-xs text-gray-400">Note: Results may vary. Consult dermatologist before use.</em>
    `,benefits:["Made in Switzerland","Powerful Skin Lightening","Anti-Aging Effects","Deep Hydration","Reduces Acne & Scars","Stimulates Collagen","With Hyaluronic Acid","IV Administration"],sku:"AQUA-VENISCY-286",volume:"1 Box",stock:10},{id:14,name:"Aqua Skin Veniscy 368 Glutathione Injection",category:"Injection",brand:"Aqua Skin",price:9500,comparePrice:14500,image:"/image/aqua/asv-368-2.jpeg",images:["/image/aqua/asv-368-2.jpeg","/image/aqua/asv-368-5.jpeg","/image/aqua/asv-368-4.jpeg","/image/aqua/asv-368-3.jpeg"],description:"Swiss-formulated luxury skin whitening and anti-aging solution with QuadNA Pico-Cell NAD+ and Quecto-Glutathione for cellular-level transformation.",details:`
    <strong>Aqua Skin Veniscy 368 Glutathione Injection</strong><br/><br/>
    A Swiss-formulated luxury skin whitening and anti-aging solution infused with QuadNA Pico-Cell NAD+, Quecto-Glutathione, and 14+ powerful ingredients. Works at the cellular level to brighten, rejuvenate, and deeply hydrate your skin.<br/><br/>
    
    <strong>Key Ingredients:</strong><br/>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li><strong>Quecto-Glutathione:</strong> Ultra-high dose antioxidant for detoxification and skin lightening</li>
      <li><strong>QuadNA Pico-Cell NAD+:</strong> Enhances cell repair and energy, slows visible aging</li>
      <li><strong>Coenzyme Q10 (ProQ10):</strong> Protects from UV damage, stimulates collagen</li>
      <li><strong>DMAE:</strong> Lifts, firms, and redefines facial contours</li>
      <li><strong>Nonapeptide:</strong> Reduces fine lines by relaxing facial muscles</li>
      <li><strong>2-in-1 HydraLift Complex:</strong> Vitamin C, Hyaluronic Acid, Collagen, EGF, Matrixyl 35000</li>
      <li><strong>Selenium:</strong> Supports skin resilience and immune defense</li>
      <li><strong>Blu-Cell & Multivitamin Complex:</strong> Fights oxidative stress, boosts skin renewal</li>
    </ul>
    <br/>

    <strong>Key Features:</strong><br/>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Brand: Aqua Skin</li>
      <li>Origin: Made in Switzerland</li>
      <li>Formulation: Premium injectable</li>
    </ul>
    <br/>

    <strong>Benefits:</strong>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Brightens and evens out skin tone</li>
      <li>Reduces pigmentation, dark spots, and dullness</li>
      <li>Smoothens fine lines and firms sagging skin</li>
      <li>Deeply hydrates and naturally plumps skin</li>
      <li>Boosts cellular energy and repair mechanisms</li>
      <li>Enhances skin texture, elasticity, and luminosity</li>
      <li>Protects against pollution and environmental stress</li>
      <li>Delivers long-lasting anti-aging effects</li>
    </ul>
    <br/>

    <strong>Recommended Dosage:</strong> 1 injection every 3–7 days under certified medical supervision. Minimum 5–10 sessions advised for noticeable results. Administer via IV infusion for best results.<br/><br/>

    <em class="text-xs text-gray-400">Note: Consistency is key for long-term results. Results may vary. Consult dermatologist before use.</em>
    `,benefits:["Made in Switzerland","With NAD+ & CoQ10","Ultra-High Glutathione","Brightens Skin Tone","Reduces Pigmentation","Anti-Aging Effects","Deep Hydration","Cellular Repair"],sku:"AQUA-VENISCY-368",volume:"1 Box",stock:10},{id:15,name:"Aqua Skin Veniscy 999 Glutathione Injection",category:"Injection",brand:"Aqua Skin",price:9500,comparePrice:14500,image:"/image/aqua/asv-999.jpeg",images:["/image/aqua/asv-999.jpeg","/image/aqua/asv-999-2.jpeg","/image/aqua/asv-999-3.jpeg","/image/aqua/asv-999-4.jpeg"],description:"Advanced skin whitening and anti-aging therapy with high-dose glutathione, vitamins, and natural extracts for brighter, smoother, and younger-looking skin.",details:`
    <strong>Aqua Skin Veniscy 999 – Advanced Glutathione Skin Whitening and Anti-Aging Therapy</strong><br/><br/>
    A scientifically advanced skin therapy that combines the power of glutathione, vitamins, peptides, and natural extracts to deliver visible results. Designed for those who want radiant skin, improved texture, and long-lasting anti-aging benefits. Works at a deeper level to repair, rejuvenate, and restore skin cells.<br/><br/>
    
    <strong>Premium Ingredients:</strong><br/>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li><strong>Glutathione:</strong> 29,800,000 mg – Master antioxidant that reduces pigmentation and detoxifies</li>
      <li><strong>Vitamin C (L-Ascorbic Acid):</strong> 990,000 mg – Boosts brightness and collagen production</li>
      <li><strong>Hyaluronic Acid:</strong> 195,750 mg – Deep hydration for plump, smooth skin</li>
      <li><strong>Alpha Lipoic Acid:</strong> 198,250 mg – Powerful antioxidant for skin renewal</li>
      <li><strong>Natural Collagen Extract:</strong> 190,000 mg – Improves elasticity and firmness</li>
      <li><strong>Epidermal Growth Factor:</strong> 109,750 mg – Stimulates new cell growth</li>
      <li>Vegetal Placenta & Kojic Acid – Target stubborn pigmentation</li>
      <li>Multivitamins, Selenium & Copper Peptide – Nourishment and protection</li>
    </ul>
    <br/>

    <strong>Key Features:</strong><br/>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Brand: Aqua Skin</li>
      <li>Origin: Made in Switzerland</li>
      <li>Formulation: Premium injectable</li>
    </ul>
    <br/>

    <strong>Benefits:</strong>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Advanced skin whitening – reduces dark spots and evens tone</li>
      <li>Anti-aging support – minimizes wrinkles and fine lines</li>
      <li>Deep skin repair – restores elasticity with collagen</li>
      <li>Fades pigmentation, acne scars, and discoloration</li>
      <li>Cellular protection against environmental damage</li>
      <li>Deep hydration for plump, smooth skin</li>
      <li>Visible transformation with regular use</li>
    </ul>
    <br/>

    <strong>How to Use:</strong>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Mix: 1 vial of 10 ml liquid with 2 vials of lyophilized powder</li>
      <li>Frequency: Once or twice per week as recommended by professional</li>
      <li>Storage: Cool, dry place below 28°C</li>
    </ul>
    <br/>

    <strong>Note:</strong> For professional use under medical guidance only.<br/><br/>

    <em class="text-xs text-gray-400">Note: Results may vary. Consult dermatologist before use.</em>
    `,benefits:["Made in Switzerland","29.8M Glutathione","Advanced Whitening","Anti-Aging","Reduces Pigmentation","With Hyaluronic Acid","Deep Hydration","Cellular Repair"],sku:"AQUA-VENISCY-999",volume:"1 Box",stock:10},{id:16,name:"Aqua Skin Veniscy 188 Glutathione Injection",category:"Injection",brand:"Aqua Skin",price:9500,comparePrice:14500,image:"/image/aqua/asv-188.jpg",images:["/image/aqua/asv-188.jpg","/image/aqua/asv-188-2.jpeg","/image/aqua/asv-188-3.jpeg","/image/aqua/asv-188-4.jpeg"],description:"TriNa Pico Cell Glutathione injection for effortless skin lightening, anti-aging benefits, and youthful complexion through simple IV infusion.",details:`
    <strong>Aqua Skin Veniscy 188 TriNa Pico Glutathione Injection</strong><br/><br/>
    A cutting-edge treatment that offers an effortless way to achieve a lighter and more youthful complexion without surgery. Infused with powerful skin-lightening effects, this injection revitalizes your skin through a simple IV infusion process, giving you a radiant appearance effortlessly.<br/><br/>
    
    <strong>Key Features:</strong><br/>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Brand: Aqua Skin</li>
      <li>Origin: Made in Switzerland</li>
      <li>TriNa Pico Cell Technology</li>
      <li>Safe, effective, and side-effect free</li>
    </ul>
    <br/>

    <strong>Benefits:</strong>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Brightens and lightens skin for fair, radiant glow</li>
      <li>Anti-aging benefits – reduces signs of aging</li>
      <li>Promotes skin cell renewal</li>
      <li>Enhances skin texture and hydration</li>
      <li>Increases skin tightness and firmness</li>
      <li>Repairs and rejuvenates damaged skin</li>
      <li>Minimizes wrinkles and fine lines</li>
      <li>Clears acne for flawless complexion</li>
      <li>Reveals youthful radiance</li>
    </ul>
    <br/>

    <strong>Why It Works:</strong> Administered via IV, allowing glutathione to be absorbed directly into your bloodstream for maximum effect. Some formulations include natural antioxidants like vitamin C for enhanced effectiveness.<br/><br/>

    <strong>FAQs:</strong><br/>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li><strong>How often?</strong> Frequency varies based on skin goals – consult a professional</li>
      <li><strong>Suitable for all skin types?</strong> Yes, safe for all skin types</li>
      <li><strong>What to expect?</strong> Quick IV treatment with minimal discomfort</li>
    </ul>
    <br/>

    <em class="text-xs text-gray-400">Note: Results may vary. Consult dermatologist before use.</em>
    `,benefits:["Made in Switzerland","Brightens & Lightens","Anti-Aging","Skin Cell Renewal","Improves Texture","Hydrates Skin","Reduces Wrinkles","Clears Acne"],sku:"AQUA-VENISCY-188",volume:"1 Box",stock:10},{id:17,name:"Aqua Skin F30 Diamond Ultra White Glutathione Skin Whitening Injection – 30 Sessions",category:"Injection",brand:"Aqua Skin",price:9800,comparePrice:14500,image:"/image/aqua/asd-f30.jpg",images:["/image/aqua/asd-f30.jpg","/image/aqua/asd-f30-2.jpeg","/image/aqua/asd-f30-3.jpeg","/image/aqua/asd-f30-4.jpeg"],description:"High-dose 30,000mg glutathione injection for skin whitening and anti-aging with 24hr UV protection and deep hydration.",details:`
    <strong>Aqua Skin F30 Diamond Ultra White Glutathione Injection</strong><br/><br/>
    The most refined Ultra Whitening Glutathione 30,000 mg skin whitening injection for Skin Whitening and Anti-Ageing Treatment. Made in Switzerland and guaranteed genuine.<br/><br/>
    
    <strong>Ingredients:</strong><br/>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Ultrafiltration Skin Tone Structure - 30 Vials</li>
      <li>Glutathione - 1000mg per vial (30,000mg total)</li>
      <li>Ascorbic Acids - 1250mg</li>
      <li>Alpha Lipoic Acid - 850mg</li>
      <li>Amino Acids - 1250mg</li>
    </ul>
    <br/>

    <strong>Key Features:</strong><br/>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>30 Sessions Treatment</li>
      <li>Origin: Switzerland</li>
      <li>24hr UV Protection</li>
      <li>24hr Hydrating</li>
      <li>To be administered by registered nurse</li>
    </ul>
    <br/>

    <strong>Benefits:</strong>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Skin whitening and firming</li>
      <li>Anti-aging - reduces fine lines and wrinkles</li>
      <li>24hr UV protection against sun damage</li>
      <li>Deep hydration for soft, smooth skin</li>
      <li>Renews and repairs damaged skin</li>
      <li>Minimizes dark areas and scars</li>
      <li>Detoxifies and purifies skin</li>
      <li>Prevents acne and blemishes</li>
      <li>Boosts collagen production and improves elasticity</li>
    </ul>
    <br/>

    <strong>Recommended Dosage:</strong> Mix 1-2 vials with 5-10 ml sterile water. Administer via IV Push up to 3 times weekly. Typical course: 1-2 injections weekly for up to 2 months.<br/><br/>

    <strong>Not Suitable For:</strong> Breast feeders, during menstruation, vitamin allergies, cardiovascular problems.<br/><br/>

    <strong>FAQ:</strong><br/>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li><strong>How often?</strong> 1-2 times weekly for up to 2 months</li>
      <li><strong>Results?</strong> Visible improvements after few weeks of regular use</li>
      <li><strong>Administration?</strong> By registered nurse only</li>
    </ul>
    <br/>

    <em class="text-xs text-gray-400">Note: Results vary by individual. Consult dermatologist before use.</em>
    `,benefits:["30 Sessions Pack","Made in Switzerland","30,000mg Glutathione","24hr UV Protection","Deep Hydration","Anti-Aging","Detoxifies","With ALA & Vitamin C"],sku:"AQUA-DIAMOND-F30",volume:"30 Sessions",stock:10},{id:18,name:"Aqua Skin Brilliant Diamond Max Aquaism Sparkling White 10 Sessions Skin Whitening Injection",category:"Injection",brand:"Aqua Skin",price:9500,comparePrice:14500,image:"/image/aqua/asd-max.png",images:["/image/aqua/asd-max.png","/image/aqua/asd-max-2.jpg","/image/aqua/asd-max-3.jpg","/image/aqua/asd-max-4.jpg"],description:"Premium 10-session glutathione whitening course with Aquaism Sparkling White technology for visible clarity, smoothness, and radiant brightness.",details:`
    <strong>Aqua Skin Brilliant Diamond Max Aquaism Sparkling White Injection</strong><br/><br/>
    A premium 10-session glutathione whitening course designed for visible clarity, smoothness, and radiant brightness in a shorter treatment span. Powered by Aquaism Sparkling White technology, this formulation delivers effective whitening while preserving skin health.<br/><br/>
    
    <strong>Composition:</strong><br/>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Ultrafiltration Complexion Composition</li>
      <li>High-Dose Glutathione</li>
      <li>Pro-Coenzyme Q10</li>
      <li>Fibroblast Growth Factor (FGF)</li>
      <li>Natural Collagen Extract</li>
      <li>Hyaluronic Acid</li>
      <li>Epidermal Growth Factor (EGF)</li>
      <li>Kojic Acid</li>
      <li>Multivitamin Complex</li>
    </ul>
    <br/>

    <strong>Key Features:</strong><br/>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>10 Sessions Treatment</li>
      <li>Aquaism Sparkling White Technology</li>
      <li>Enhanced cellular absorption</li>
    </ul>
    <br/>

    <strong>Benefits:</strong>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Whitens complexion with visible results in 10 sessions</li>
      <li>Hydrates and smooths skin for luminous glow</li>
      <li>Reduces melasma, pigmentation, and dark spots</li>
      <li>Improves elasticity and delays early aging signs</li>
      <li>Detoxifies body and supports immunity</li>
      <li>Fast yet effective whitening solution</li>
    </ul>
    <br/>

    <strong>How It Works:</strong> Glutathione and Kojic Acid regulate melanin for clearer skin tone. Collagen, EGF, and hyaluronic acid restore firmness and hydration.<br/><br/>

    <strong>FAQ:</strong><br/>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li><strong>How many sessions?</strong> 10 sessions included</li>
      <li><strong>Side effects?</strong> Minimal - mild fatigue or redness at injection site</li>
      <li><strong>Combine with Vitamin C?</strong> Yes, enhances antioxidant protection</li>
    </ul>
    <br/>

    <em class="text-xs text-gray-400">Note: Results may vary. Consult dermatologist before use.</em>
    `,benefits:["10 Sessions Pack","Aquaism Technology","Fast Visible Results","Reduces Pigmentation","With EGF & FGF","Collagen & Hyaluronic Acid","Detoxifies","Improves Elasticity"],sku:"AQUA-BRILLIANT-DIAMOND-10",volume:"10 Sessions",stock:10},{id:19,name:"Aqua Skin Fine Gold DualNa Cell Complex Glutathione Skin Whitening Injection(out of stock)",category:"Injection",brand:"Aqua Skin",price:9500,comparePrice:12e3,image:"/image/aqua/asfg-70k.jpg",images:["/image/aqua/asv-fine-gold-1.jpeg","/image/aqua/asv-fine-gold-2.jpeg","/image/aqua/asv-fine-gold-3.jpeg","/image/aqua/asv-fine-gold-4.jpeg"],description:"DualNa Cell Complex whitening injection with glutathione, FGF, and AHA to reduce pigmentation and give glowing, brighter, acne-free skin.",details:`
    <strong>Aqua Skin Fine Gold DualNa Cell Complex Glutathione Injection</strong><br/><br/>
    A premium skin treatment that enhances your skin and gives glowing, brighter results. Rich in Glutathione which helps in reducing pigmentation and gives glowing, white skin with no pimples and acne. Suitable for all skin types.<br/><br/>
    
    <strong>Ingredients (24 Vials):</strong><br/>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>DualNA Glutathione - 70,000mg</li>
      <li>DualNA Pro-Coenzyme Q10 - 8,000mg</li>
      <li>DualNA FGF (Fibroblast Growth Factor) - 3,500mg</li>
      <li>DualNA Natural Collagen Extract - 2,800mg</li>
      <li>DualNA Polypodium Leucotomos - 1,500mg</li>
      <li>DualNA Heterotrimeric Protein - 1,300mg</li>
      <li>DualNA Alpha Lipoic Acid (ALA) - 1,200mg</li>
      <li>DualNA DMAE - 900mg</li>
      <li>DualNA Alpha-Hydroxy Acid (AHA) - 900mg</li>
      <li>DualNA Grape Seed Extract - 850mg</li>
      <li>DualNA Beta-Hydroxy Acid (Salicylic Acid) - 800mg</li>
      <li>DualNA Selenium - 450mg</li>
    </ul>
    <br/>

    <strong>Key Features:</strong><br/>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>24 Sessions Treatment</li>
      <li>Origin: Made in Switzerland</li>
      <li>DualNa Cell Complex Technology</li>
      <li>Suitable for all skin types</li>
    </ul>
    <br/>

    <strong>Benefits:</strong>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Reduces pigmentation and dark spots</li>
      <li>Protects against free radical damage</li>
      <li>Get glowing, smooth, and softened skin</li>
      <li>Acne and pimple-free skin</li>
      <li>Whitens skin and lightens scars</li>
      <li>Improves skin complexion</li>
      <li>Removes excess free radicals</li>
    </ul>
    <br/>

    <strong>Why It Works:</strong> DualNA AHA works on reducing pigmentation on the face. Rich glutathione content helps achieve white, clear skin while protecting against environmental damage.<br/><br/>

    <strong>Availability:</strong> Cash on Delivery (COD) available with Free Shipping in India. 100% authentic products - verify through barcode.<br/><br/>

    <em class="text-xs text-gray-400">Note: The result depends on individual metabolism. Consult dermatologist before use.</em>
    `,benefits:["Made in Switzerland","24 Sessions Pack","70,000mg Glutathione","Reduces Pigmentation","With FGF & CoQ10","Acne-Free Skin","Contains AHA & BHA","Lightens Scars"],sku:"AQUA-FINE-GOLD-24",volume:"24 Sessions",stock:0},{id:20,name:"Aqua Skin Veniscy 8 Octa Strength Whitening Injection(out of stock)",category:"Injection",brand:"Aqua Skin",price:8800,comparePrice:12e3,image:"/image/aqua/asv-8.png",images:["/image/aqua/asv-8.jpeg","/image/aqua/asv-8-2.jpeg","/image/aqua/asv-8-3.jpeg","/image/aqua/asv-8-4.jpeg"],description:"Leading-edge skin whitening treatment with DualNa Octa Strength technology, formulated in Switzerland for luminous, youthful skin.",details:`
    <strong>Aqua Skin Veniscy 8 DualNa Octa Strength Skin Whitening Injection</strong><br/><br/>
    A leading-edge skin whitening treatment formulated in Switzerland and developed by Skinnic Laboratory. With high dosage of L-Glutathione and Vitamin C, this premium injection stands as the ultimate choice for those seeking the most effective L-Glutathione formula for luminous, youthful skin.<br/><br/>
    
    <strong>Rich Ingredient Profile:</strong><br/>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li><strong>Veniscy Complex:</strong> High-grade Glutathione, Nonapeptide, Coenzyme Q10, Selenium</li>
      <li><strong>Collagen & Hyaluronic Acid:</strong> For skin elasticity and deep hydration</li>
      <li><strong>EGF & Alpha Lipoic Acid:</strong> Promote skin regeneration, reduce oxidative stress</li>
      <li><strong>Matrixyl & Kojic Acid:</strong> Target fine lines and skin discoloration</li>
    </ul>
    <br/>

    <strong>Key Features:</strong><br/>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Origin: Made in Switzerland</li>
      <li>DualNa Octa Strength Technology</li>
      <li>Developed by Skinnic Laboratory</li>
    </ul>
    <br/>

    <strong>Benefits:</strong>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Revitalizes skin with natural collagen and hyaluronic acid</li>
      <li>Brightens complexion by reducing melanin production</li>
      <li>Anti-aging - diminishes wrinkles and fine lines</li>
      <li>Evens skin tone, reduces dark spots and hyperpigmentation</li>
      <li>Enhances overall skin health with vitamins, peptides, and minerals</li>
    </ul>
    <br/>

    <strong>Recommended Usage:</strong> Administer one Intravenous IV Infusion (Drip) weekly. Consult your dermatologist to tailor treatment to individual needs.<br/><br/>

    <strong>FAQ:</strong><br/>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li><strong>Results timeline?</strong> Noticeable improvements within first few weeks of consistent use</li>
      <li><strong>Suitable for all skin types?</strong> Yes, but consult healthcare professional for compatibility</li>
      <li><strong>Helps with acne scars?</strong> Yes, reduces scars and pigmentation</li>
      <li><strong>Side effects?</strong> Generally well-tolerated, discuss with doctor</li>
      <li><strong>Storage?</strong> Keep at room temperature, away from direct sunlight</li>
    </ul>
    <br/>

    <em class="text-xs text-gray-400">Note: Results may vary. Consult dermatologist before use.</em>
    `,benefits:["Made in Switzerland","Octa Strength","With Glutathione & Vitamin C","Anti-Aging","Reduces Pigmentation","Deep Hydration","Contains EGF & CoQ10","Evens Skin Tone"],sku:"AQUA-VENISCY-8-OCTA",volume:"1 Box",stock:0},{id:21,name:"Aqua Skin Veniscy 30 Dualna Pico Cell Absorption Skin Whitening Injection(out of stock)",category:"Injection",brand:"Aqua Skin",price:12e3,comparePrice:18e3,image:"/image/aqua/asv-30.jpg",images:["/image/aqua/asv-30.jpg","/image/aqua/asv-30-2.jpeg","/image/aqua/asv-30-3.jpeg","/image/aqua/asv-30-4.jpeg"],description:"Dualna Pico Cell Absorption technology for extreme skin whitening, anti-aging, and cellular regeneration with high-dose Opti-Glutathione.",details:`
    <strong>Aqua Skin Veniscy 30 Dualna Pico Cell Absorption Extremely Ultimate Injection</strong><br/><br/>
    Targets dark spots and acne reduction while enhancing skin whitening with anti-aging benefits. Works to neutralize harmful free radicals and combat oxidative stress, promoting glowing and youthful skin.<br/><br/>
    
    <strong>Complete Ingredients:</strong><br/>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li><strong>Veniscy DualNA Pico-Cell Complex:</strong></li>
      <li>Opti-Glutathione - 6,500,000 mg</li>
      <li>Coenzyme Pro Q10 - 800,000 mg</li>
      <li>DMAE - 67,000 mg</li>
      <li>Nonapeptide - 23,000 mg</li>
      <li>Selenium - 20,000 mg</li>
      <li><strong>Aqua Skin DualNA Pico-Cell Complex:</strong></li>
      <li>L-Ascorbic Acid - 200,000 mg</li>
      <li>Multivitamin - 180,000 mg</li>
      <li>Natural Collagen Extract - 80,000 mg</li>
      <li>Hyaluronic Acid - 72,550 mg</li>
      <li>EGF - 52,000 mg</li>
      <li>Alpha Lipoic Acid - 48,250 mg</li>
      <li>Vegetal Placenta - 43,975 mg</li>
      <li>Matrixyl 9000 - 36,500 mg</li>
      <li>Copper Peptide - 23,000 mg</li>
      <li>Kojic Acid - 22,500 mg</li>
    </ul>
    <br/>

    <strong>Key Features:</strong><br/>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Dualna Pico Cell Absorption Technology</li>
      <li>Origin: Made in Switzerland</li>
      <li>Extremely Ultimate formula</li>
    </ul>
    <br/>

    <strong>Benefits:</strong>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Whitening and lightening of skin tone</li>
      <li>Anti-aging effects</li>
      <li>Repair of damaged skin</li>
      <li>Regeneration of new cells</li>
      <li>Enhances skin texture</li>
      <li>Moisturizes the skin</li>
      <li>Minimizes wrinkles and fine lines</li>
      <li>Fair and radiant skin tone</li>
      <li>Eliminates skin blemishes</li>
      <li>Lifted and tighter skin</li>
      <li>Youthful looking skin</li>
    </ul>
    <br/>

    <strong>Availability:</strong> Available at Magicpotions India with fastest shipping and Cash On Delivery option.<br/><br/>

    <em class="text-xs text-gray-400">Note: Results may vary from person to person. Consult dermatologist before use.</em>
    `,benefits:["Made in Switzerland","6.5M Opti-Glutathione","With CoQ10 & DMAE","Anti-Aging","Reduces Dark Spots","Cell Regeneration","Deep Hydration","Eliminates Blemishes"],sku:"AQUA-VENISCY-30-PICO",volume:"1 Box",stock:0},{id:22,name:"Dr James Glutathione 1500mg Skin Whitening Injection - 10 Sessions",category:"Injection",brand:"Dr James",price:11e3,comparePrice:15e3,image:"/image/drjames/dr-james-10sessions.jpg",images:["/image/drjames/dr-james-10sessions.jpg","/image/drjames/drjames-1500-2.jpeg","/image/drjames/drjames-1500-3.jpeg","/image/drjames/drjames-1500-4.jpeg"],description:"Trusted glutathione injection with 1500mg glutathione and 1000mg Vitamin C for effective skin whitening, anti-aging, and immune support.",details:`
    <strong>Dr James Glutathione 1500mg Skin Whitening Injection</strong><br/><br/>
    A trusted and popular glutathione injection known for excellent results. Features selective high-quality ingredients with 1500mg glutathione and 1000mg Vitamin C. Vitamin C further increases glutathione levels, making it one of the best antioxidants on the market. FDA-approved and proven safe through numerous tests and expert evaluations.<br/><br/>
    
    <strong>Key Ingredients:</strong><br/>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Glutathione - 1500mg</li>
      <li>Vitamin C - 1000mg</li>
    </ul>
    <br/>

    <strong>Key Features:</strong><br/>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>10 Sessions Treatment</li>
      <li>FDA-approved</li>
      <li>Expiry Date: Dec 2028</li>
      <li>Clinically tested for safety</li>
    </ul>
    <br/>

    <strong>How It Whitens Skin:</strong> Glutathione inhibits Tyrosine Kinase enzyme, preventing melanin production. This reduces hyperpigmentation, dark spots, and overall skin lightening. A study on 16 patients over 6 weeks showed significant improvement in skin tone.<br/><br/>

    <strong>Benefits:</strong>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Skin whitening and lightening</li>
      <li>Prevents acne outbreaks and pimples</li>
      <li>Boosts immune system against infections</li>
      <li>Powerful antioxidant prevents oxidative stress</li>
      <li>Anti-aging - boosts collagen production</li>
      <li>Reduces hyperpigmentation and dark spots</li>
    </ul>
    <br/>

    <strong>Recommended Usage:</strong> As prescribed by dermatologist. Typically administered via IV. Consult your doctor for proper dosage and schedule.<br/><br/>

    <em class="text-xs text-gray-400">Note: Results may vary from person to person. Consult dermatologist before use.</em>
    `,benefits:["10 Sessions Pack","1500mg Glutathione","With Vitamin C 1000mg","FDA Approved","Skin Whitening","Anti-Aging","Boosts Immunity","Prevents Acne"],sku:"DRJAMES-GLUTA-1500-10S",volume:"10 Sessions",stock:10},{id:23,name:"Dr James Glutathione Skin Whitening Cream",category:"Cream",brand:"Dr James",price:2e3,comparePrice:2999,image:"/image/drjames/dr-james-cream.jpg",images:["/image/drjames/dr-james-cream.jpg","/image/drjames/dr-james-cream-2.jpeg","/image/drjames/dr-james-cream-3.jpeg","/image/drjames/dr-james-cream-4.jpeg"],description:"Authentic skin whitening cream with glutathione, vitamins, and natural extracts for topical skin lightening and care.",details:`
    <strong>Dr James Glutathione Skin Whitening Cream</strong><br/><br/>
    Using a cream is the most authentic way of caring for your skin. Dr James Skin Whitening Cream whitens your skin through topical application of the best skincare ingredients. Formulated with a powerful blend of antioxidants, vitamins, and natural extracts for visible results.<br/><br/>
    
    <strong>Key Ingredients:</strong><br/>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Glutathione</li>
      <li>Vitamin C & E</li>
      <li>Rosehips</li>
      <li>Alpha Lipoic Acid</li>
      <li>Bearberry (Arbutin)</li>
      <li>Milk Proteins</li>
      <li>Zinc Oxide</li>
      <li>Kojic Dipalmate</li>
      <li>Niacinamide</li>
    </ul>
    <br/>

    <strong>Key Features:</strong><br/>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Topical application</li>
      <li>Authentic skincare formula</li>
      <li>With natural extracts</li>
    </ul>
    <br/>

    <strong>Benefits:</strong>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Whitens skin through topical application</li>
      <li>Reduces pigmentation and dark spots</li>
      <li>Provides antioxidant protection</li>
      <li>Nourishes and hydrates skin</li>
      <li>Safe for daily use</li>
    </ul>
    <br/>

    <strong>How to Use:</strong> Apply desired amount to clean skin, gently massage until absorbed. Use regularly for best results. For external use only.<br/><br/>

    <em class="text-xs text-gray-400">Note: Results may vary. Consult dermatologist before use if you have sensitive skin.</em>
    `,benefits:["Topical Whitening","With Glutathione","Vitamin C & E","Contains Arbutin","Kojic Dipalmate","Niacinamide","Natural Extracts","Daily Use"],sku:"DRJAMES-CREAM-WHITE",volume:"1 Tube",stock:10},{id:24,name:"Glowtiqa Advance Whitening Cream",category:"Cream",brand:"Glowtiqa Paris",price:2e3,comparePrice:2999,image:"/image/glowtiqa/glowtiqa-advance.jpg",images:["/image/glowtiqa/glowtiqa-advance.jpg","/image/glowtiqa/advance-cream-2.jpeg","/image/glowtiqa/advance-cream-3.jpeg","/image/glowtiqa/advance-cream-4.jpeg"],description:"Advanced French formulation whitening cream with TA Stem Cells to target dark spots, hyperpigmentation, and uneven skin tone.",details:`
    <strong>Glowtiqa Advance Whitening Cream</strong><br/><br/>
    Experience the power of advanced French formulation. Our signature whitening cream is specifically designed to target dark spots, hyperpigmentation, and uneven skin tone while nourishing your skin deep within.<br/><br/>
    
    <strong>Key Features:</strong><br/>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Enriched with powerful TA Stem Cells</li>
      <li>Visibly reduces acne marks and dark circles</li>
      <li>Restores natural glow and skin elasticity</li>
      <li>Weight: 30 Grams</li>
      <li>Dermatologist tested – safe for all skin types including sensitive skin</li>
      <li>Paraben-free and cruelty-free</li>
    </ul>
    <br/>

    <strong>How to Use (Nighttime Routine):</strong><br/>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li><strong>Cleanse:</strong> Wash face thoroughly (preferably with Whitening Soap) and pat dry</li>
      <li><strong>Apply:</strong> Take a small amount of the cream</li>
      <li><strong>Massage:</strong> Gently massage into skin using upward circular motions until fully absorbed</li>
      <li><strong>Rest:</strong> Leave on overnight for active ingredients to repair skin</li>
    </ul>
    <br/>

    <strong>The Science Behind the Glow:</strong><br/>
    Unlike traditional bleaching creams that harm the skin barrier, Glowtiqa Paris utilizes advanced TA Stem Cell technology. This formulation penetrates the dermis to inhibit excess melanin production at the source. By promoting cellular turnover, it lifts pigmented cells and replaces them with fresh, healthy skin for a natural, luminous complexion without harsh chemicals.<br/><br/>

    <strong>Benefits:</strong>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Targets dark spots and hyperpigmentation</li>
      <li>Reduces acne marks and dark circles</li>
      <li>Restores natural glow and elasticity</li>
      <li>French advanced formulation</li>
      <li>Safe for sensitive skin</li>
    </ul>
    <br/>

    <em class="text-xs text-gray-400">Note: For external use only. Avoid contact with eyes. Discontinue if irritation occurs.</em>
    `,benefits:["French Formulation","TA Stem Cells","Reduces Dark Spots","Removes Acne Marks","Reduces Dark Circles","Restores Glow & Elasticity","Dermatologist Tested","Paraben Free"],sku:"GLOWTIQA-ADVANCE-CREAM-30G",volume:"30 Grams",stock:10},{id:25,name:"Glowtiqa Skin Whitening Soap",category:"Soap",brand:"Glowtiqa Paris",price:600,comparePrice:999,image:"/image/glowtiqa/glowtiqa-soap.jpg",images:["/image/glowtiqa/glowtiqa-soap.jpg","/image/glowtiqa/whitening-soap-2.jpeg","/image/glowtiqa/whitening-soap-3.jpeg","/image/glowtiqa/whitening-soap-4.jpeg"],description:"Premium skin whitening soap with gentle micro-exfoliation to remove dead skin cells, clear pores, and visibly lighten dark spots.",details:`
    <strong>Glowtiqa Skin Whitening Soap</strong><br/><br/>
    Reveal a brighter, cleaner complexion with every wash. Our premium skin whitening soap provides gentle micro-exfoliation to remove dead skin cells, clear congested pores, and visibly lighten dark spots.<br/><br/>
    
    <strong>Key Features:</strong><br/>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Deeply cleanses and purifies pores</li>
      <li>Gently exfoliates dull, dead skin</li>
      <li>Controls acne-causing bacteria</li>
      <li>Weight: 135 Grams</li>
      <li>Rating: 4.7/5</li>
    </ul>
    <br/>

    <strong>How to Use (Daily on Face & Body):</strong><br/>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li><strong>Lather:</strong> Wet soap and rub between hands to create rich lather</li>
      <li><strong>Apply:</strong> Gently massage lather onto face and body</li>
      <li><strong>Wait:</strong> Leave on for 1-2 minutes for active ingredients to penetrate</li>
      <li><strong>Rinse:</strong> Rinse thoroughly with lukewarm water and pat dry</li>
    </ul>
    <br/>

    <strong>The Perfect Primer:</strong> Standard body washes can leave a film that blocks expensive creams. Glowtiqa Skin Whitening Soap is formulated as the ultimate primer. Its micro-exfoliating action clears barriers, balancing skin pH so that Advance Whitening Cream can penetrate deeper and work up to 3x faster.<br/><br/>

    <strong>Pro Tip:</strong> For maximum whitening results, always follow up with our Advance Whitening Cream immediately after washing.<br/><br/>

    <strong>Benefits:</strong>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Brightens complexion with every wash</li>
      <li>Removes dead skin cells and impurities</li>
      <li>Clears congested pores</li>
      <li>Controls acne-causing bacteria</li>
      <li>Prepares skin for better cream absorption</li>
    </ul>
    <br/>

    <em class="text-xs text-gray-400">Note: For external use only. Avoid contact with eyes. Discontinue if irritation occurs.</em>
    `,benefits:["Brightens Complexion","Micro-Exfoliation","Clears Pores","Controls Acne Bacteria","Removes Dead Skin","Prepares Skin for Creams","135g Bar","Daily Use"],sku:"GLOWTIQA-WHITE-SOAP-135G",volume:"135 Grams",stock:10},{id:26,name:"Glowtiqa Whitening Booster 1200MG",category:"Capsules",brand:"Glowtiqa Paris",price:3e3,comparePrice:4499,image:"/image/glowtiqa/glowtiqa-capsule.jpeg",images:["/image/glowtiqa/glowtiqa-capsule.jpeg","/image/glowtiqa/whitening-booster-2.jpeg","/image/glowtiqa/whitening-booster-3.jpeg","/image/glowtiqa/whitening-booster-4.jpeg"],description:"Potent 1200MG dietary supplement crafted in Paris to strengthen, protect, and brighten complexion by targeting hyperpigmentation at the cellular level.",details:`
    <strong>Glowtiqa Whitening Booster 1200MG</strong><br/><br/>
    Unlock your skin's natural radiance from within. This potent 1200MG dietary supplement is meticulously crafted in Paris to strengthen, protect, and brighten your complexion by targeting hyperpigmentation at the cellular level.<br/><br/>
    
    <strong>Key Features:</strong><br/>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Promotes full-body skin brightening and evens out tone</li>
      <li>Strengthens and protects the skin's natural barrier</li>
      <li>Rich in antioxidants to fight premature aging</li>
      <li>Contents: 60 Premium Capsules</li>
      <li>Rating: 4.8/5</li>
    </ul>
    <br/>

    <strong>Recommended Dosage:</strong><br/>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li><strong>Dosage:</strong> Take 1 to 2 capsules daily</li>
      <li><strong>Timing:</strong> Best consumed in the morning, preferably after breakfast</li>
      <li><strong>Hydration:</strong> Drink plenty of water throughout the day to aid absorption and flush out toxins</li>
      <li><strong>Routine:</strong> For ultimate results, pair internally with our Whitening Cream and Soap</li>
    </ul>
    <br/>

    <strong>The Power of 1200MG:</strong> Topical creams work on the surface, but true radiance starts from within. The Whitening Booster 1200MG delivers high-grade antioxidants directly to your bloodstream. It actively inhibits the enzyme tyrosinase (responsible for melanin production), helping to fade dark spots, sun damage, and general discoloration uniformly across your entire body.<br/><br/>

    <strong>Benefits:</strong>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Full-body skin brightening and even tone</li>
      <li>Strengthens skin's natural barrier</li>
      <li>Fights premature aging with antioxidants</li>
      <li>Fades dark spots and sun damage</li>
      <li>Inhibits melanin production at cellular level</li>
    </ul>
    <br/>

    <strong>Glowtiqa Guarantee:</strong> 100% safe, meticulously tested, and formulated without harmful chemicals.<br/><br/>

    <em class="text-xs text-gray-400">Note: For best results, use consistently. Consult physician before use if pregnant, nursing, or have medical conditions.</em>
    `,benefits:["Full-Body Brightening","1200MG Potency","60 Capsules","Antioxidant Rich","Inhibits Melanin","Fades Dark Spots","Strengthens Skin Barrier","Made in Paris"],sku:"GLOWTIQA-BOOSTER-1200-60C",volume:"60 Capsules",stock:10},{id:27,name:"Advanced Vita Glow Skin Whitening Night Cream",category:"Cream",brand:"Vita Glow",price:2e3,comparePrice:2999,image:"/image/vitaglow/adv-vita-glow-night.jpg",images:["/image/vitaglow/adv-vita-glow-night.jpg","/image/vitaglow/night-cream-2.jpeg","/image/vitaglow/night-cream-3.jpeg","/image/vitaglow/night-cream-4.jpeg"],description:"Special formula night cream with natural ingredients, vitamins, and kojic acid to whiten skin while you sleep, remove blemishes, and reverse aging.",details:`
    <strong>Advanced Vita Glow Skin Whitening Night Cream</strong><br/><br/>
    A night cream is the best kind of cream to use if you want to whiten your skin amidst your busy schedule. Apply the cream and go to sleep for it to take effect and whiten your skin as you sleep. This special formula consists of natural ingredients like citric acid, ionized water, and micronutrients including vitamins A, B, B3, and E, all of which whiten your skin while maintaining pH balance. Works on all skin types – dark, dusky, or oily.<br/><br/>
    
    <strong>Key Ingredients:</strong><br/>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Citric Acid & Ionized Water</li>
      <li>Vitamins A, B, B3, E</li>
      <li>Kojic Acid (from mushroom fungi) – inhibits melanin production</li>
      <li>Natural Oils & Natural Wax</li>
      <li>Glutathione</li>
    </ul>
    <br/>

    <strong>Key Features:</strong><br/>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Works on all three skin layers: Epidermis, Dermis, Hypodermis</li>
      <li>Acts as a sunscreen lotion – prevents UV damage, skin tan, sunburn</li>
      <li>Removes all types of skin blemishes</li>
      <li>Unbranded version available for resellers (launch under own brand)</li>
    </ul>
    <br/>

    <strong>Benefits:</strong>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Whitens skin to fair and pink complexion</li>
      <li>Reverses aging signs</li>
      <li>Removes wrinkles, freckles, dark spots, age spots, fine lines, dark circles</li>
      <li>Clears acne and scars</li>
      <li>Provides radiant glow</li>
      <li>Protects from sun damage and UV rays</li>
    </ul>
    <br/>

    <strong>How to Use:</strong> Apply desired amount to clean face and neck before bedtime. Gently massage until absorbed. Leave on overnight. Rinse in the morning.<br/><br/>

    <strong>Important Note:</strong> When freshly manufactured, cream has light green color. Due to oxidation and temperature changes, color may shift to mild beige. This is normal due to Glutathione content and does not affect efficacy or safety.<br/><br/>

    <em class="text-xs text-gray-400">Note: For external use only. Discontinue if irritation occurs.</em>
    `,benefits:["Night Cream Action","Contains Kojic Acid","Vitamins A, B, B3, E","Removes Blemishes","Anti-Aging","Sun Protection","Works on All Skin Types","Reseller Available"],sku:"VITA-NIGHT-CREAM",volume:"1 Jar",stock:10},{id:28,name:"Vita Glow Skin Whitening Night Cream",category:"Cream",brand:"Vita Glow",price:2e3,comparePrice:2999,image:"/image/vitaglow/vita-glow-cream.jpg",images:["/image/vitaglow/vita-glow-cream.jpg","/image/vitaglow/vita-glow-night-cream-2.jpeg","/image/vitaglow/vita-glow-night-cream-3.jpeg","/image/vitaglow/vita-glow-night-cream-4.jpeg"],description:"Ultimate night cream for glowing skin that whitens, improves texture, prevents wrinkles, heals sunburn, prevents acne, and moisturizes deeply.",details:`
    <strong>Vita Glow Skin Whitening Night Cream</strong><br/><br/>
    Your ultimate solution for glowing skin. Infused with all the good things our skin craves, this product transforms your skin in just seven days. A night cream that hydrates and whitens simultaneously.<br/><br/>
    
    <strong>Key Ingredients:</strong><br/>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Vitamin C</li>
      <li>Avocado & Jojoba Oil</li>
      <li>Kojic Acid</li>
      <li>Green Tea Extracts</li>
      <li>Mulberry Extract</li>
      <li>Glutathione</li>
    </ul>
    <br/>

    <strong>Key Benefits:</strong>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li><strong>Whitens skin:</strong> Turns brown, rough skin into pink, plumped, fresh skin</li>
      <li><strong>Improves texture:</strong> Kojic acid gradually enhances skin smoothness</li>
      <li><strong>Prevents fine lines & wrinkles:</strong> Anti-aging with green tea extracts</li>
      <li><strong>Protects & heals from sunburn:</strong> Vitamin C defends against UV damage</li>
      <li><strong>Prevents acne:</strong> Mulberry extract, glutathione, and avocado treat and prevent breakouts</li>
      <li><strong>Moisturizes deeply:</strong> Complete hydration for lasting radiance</li>
    </ul>
    <br/>

    <strong>How to Use:</strong> Apply to clean face and neck before bedtime. Gently massage until absorbed. Leave on overnight. Rinse in the morning.<br/><br/>

    <strong>2026 Official Upgrade:</strong><br/>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Upgraded QR-based security seal – scan for instant authentication</li>
      <li>Direct printing on jar (front & back) – premium look, harder to duplicate</li>
      <li>Slightly improved texture & fragrance to identify original product</li>
      <li>Quality and results remain the same – always amazing</li>
    </ul>
    <br/>

    <strong>Important Note:</strong> When freshly manufactured, cream has light green color. Due to oxidation and temperature changes, color may shift to mild beige. This is normal due to Glutathione content and does not affect efficacy or safety.<br/><br/>

    <strong>Reseller Opportunity:</strong> Unbranded version available – launch under your own brand name.<br/><br/>

    <em class="text-xs text-gray-400">Note: For external use only. Discontinue if irritation occurs.</em>
    `,benefits:["Whitens Skin","Improves Texture","Anti-Aging","Heals Sunburn","Prevents Acne","Deep Moisturization","7-Day Transformation","QR Authentication"],sku:"VITA-GLOW-NIGHT-CREAM",volume:"1 Jar",stock:10},{id:29,name:"Vita Glow Glutathione Skin Whitening Soap",category:"Soap",brand:"Vita Glow",price:600,comparePrice:999,image:"/image/vitaglow/vita-glow-soap.jpg",images:["/image/vitaglow/vita-glow-soap.jpg","/image/vitaglow/vita-glow-soap-2.jpeg","/image/vitaglow/vita-glow-soap-3.jpeg","/image/vitaglow/vita-glow-soap-4.jpeg"],description:"Natural glutathione skin whitening soap that removes dead skin cells, moisturizes, reduces hyperpigmentation, and reveals fresh, young-looking skin.",details:`
    <strong>Vita Glow Glutathione Skin Whitening Soap</strong><br/><br/>
    A product totally made of natural resources. Used directly on skin, it has faster effect on removing all dead skin cells, revealing fresh young-looking skin. It moisturizes the body in a balanced manner, giving users glowing skin. It removes hyperpigmentation, which is a basic cause of dark circles and scars, making your face clear and youthful.<br/><br/>
    
    <strong>Key Features:</strong><br/>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>All-natural ingredients with zero side effects</li>
      <li>Contains Glutathione and Vitamin C – key antioxidants</li>
      <li>Works on all three layers of skin</li>
      <li>Perfect alternative for those who can't take pills</li>
      <li>Whitens skin during daily bath routine</li>
    </ul>
    <br/>

    <strong>Benefits:</strong>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Removes dead skin cells and rejuvenates with new cells</li>
      <li>Acts as a moisturizer to prevent drying and skin damage</li>
      <li>Removes melanin pigments – prevents hyperpigmentation</li>
      <li>Reduces dark circles, dark spots, acne, wrinkles, freckles, scars</li>
      <li>Keeps skin clear, spotless, soft, smooth, shiny with radiant glow</li>
      <li>Nourishes skin for healthy, glowing appearance</li>
      <li>Adds charisma and competitive edge in career and personal life</li>
    </ul>
    <br/>

    <strong>How to Use:</strong> Use as regular bath soap. Lather generously on wet skin, massage gently, then rinse. For best results, use daily.<br/><br/>

    <em class="text-xs text-gray-400">Note: For external use only. Avoid contact with eyes. Discontinue if irritation occurs.</em>
    `,benefits:["Natural Ingredients","Removes Dead Skin","Moisturizes","Reduces Hyperpigmentation","Removes Dark Spots & Acne","Glutathione & Vitamin C","Glowing Skin","Daily Bath Routine"],sku:"VITA-GLOW-SOAP",volume:"1 Bar",stock:10},{id:30,name:"Miracle Dermal Genesis NAD+ Renewal Complex Glutathione Injection",category:"Injection",brand:"Miracle White",price:9800,comparePrice:14500,image:"/image/Miracle-Nad/miracle-dermal-genesis.jpeg",images:["/image/Miracle-Nad/miracle-dermal-genesis.jpeg","/image/miracle-dermal-genesis/nad-renewal-2.jpeg","/image/miracle-dermal-genesis/nad-renewal-3.jpeg","/image/miracle-dermal-genesis/nad-renewal-4.jpeg"],description:"Professional skin rejuvenation injection with NAD+ renewal technology, glutathione, and stem cell extracts to restore skin energy, repair damage, and revive youthful radiance.",details:`
    <strong>Miracle Dermal Genesis NAD+ Renewal Complex Glutathione Injection</strong><br/><br/>
    A new generation professional skin rejuvenation solution from Hess & Co. Laboratories. Designed to work at the cellular level, this advanced formulation uses NAD+ renewal technology to help restore skin energy, repair daily damage, and revive youthful radiance from within.<br/><br/>
    
    <strong>Product Contains:</strong> 1 Box - 6 Sessions<br/><br/>

    <strong>Key Ingredients & Complexes:</strong><br/>
    
    <strong>Whitening & Growth Factor Complex:</strong>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Pico-sized Kojic Acid – 12,500 mg</li>
      <li>Pico-sized Ascorbic Acid (Vitamin C) – 8,950 mg</li>
      <li>Pico-sized White Cell Enhancer – 3,900 mg</li>
      <li>Pico-sized Epidermal Growth Factor (EGF) – 8,500 mg</li>
    </ul>
    
    <strong>Antioxidant & Glutathione Complex:</strong>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Pico-sized Coenzyme Q10 – 90,000 mg</li>
      <li>Pico-sized Concentrated Glutathione – 500,000 mg</li>
      <li>Pico-sized Bakuchiol Extract – 5,000 mg</li>
      <li>Pico-sized Leontopodium Alpinum Callus Culture Extract – 8,000 mg</li>
    </ul>
    
    <strong>Marine & NAD+ Cellular Complex:</strong>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Pico-sized Marine Cellular Extracts – 5,000 mg</li>
      <li>Pico-sized Phyto White Tripeptide – 2,500 mg</li>
      <li>Pico-sized NAD+ (Nicotinamide Adenine Dinucleotide) – 3,000 mg</li>
    </ul>
    
    <strong>Stem Cell & Vitamin Support:</strong>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Pico-sized Cyanocobalamin (Vitamin B12) – 8,000 mg</li>
      <li>Pico-sized Tomato Stem Cell Extract – 3,800 mg</li>
    </ul>
    
    <strong>Collagen & Longevity Complex:</strong>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Pico-sized Resveratrol – 8,000 mg</li>
      <li>Pico-sized Peptide Collagen – 6,380 mg</li>
    </ul>
    
    <strong>Detox & Melanin Control Complex:</strong>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Pico-sized Multivitamin – 3,000 mg</li>
      <li>Pico-sized Thioctic Acid – 5,000 mg</li>
      <li>Pico-sized SLC24A5 Inhibitor – 12,000 mg</li>
    </ul>
    <br/>

    <strong>Key Benefits:</strong>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Cellular Skin Renewal – supports natural repair and regeneration</li>
      <li>Improved Texture & Smoothness – softer, refined, even skin</li>
      <li>Enhanced Firmness & Elasticity – supports youthful structure</li>
      <li>Radiance Boost – revives dull, tired skin</li>
      <li>Stronger Skin Defense – protects against pollution, UV stress, oxidative damage</li>
      <li>Whitening – reduces melanin formation, brightens tone</li>
      <li>Detoxification & Anti-aging – powerful antioxidant protection</li>
      <li>DNA repair & cellular energy with NAD+ technology</li>
    </ul>
    <br/>

    <strong>How It Works:</strong> Works deep within the skin's cellular matrix, supporting internal energy renewal and natural repair mechanisms. With regular professional application, skin appears clearer, firmer, smoother, and more luminous.<br/><br/>

    <strong>Certifications:</strong> FDA Approved, GMP Approved, FSSAI Approved, Quality Certified.<br/><br/>

    <strong>Availability:</strong> Home Delivery All Over India. Use coupon code GET100 for additional ₹100 discount (Today Only).<br/><br/>

    <em class="text-xs text-gray-400">Note: Results may vary. Consult dermatologist before use.</em>
    `,benefits:["6 Sessions Pack","NAD+ Renewal Technology","500,000mg Glutathione","With EGF & CoQ10","Stem Cell Extracts","Anti-Aging","Whitening & Detox","FDA & GMP Approved"],sku:"PTR000516",volume:"6 Sessions",stock:10},{id:31,name:"Cindyrella Power Drip (10 Sets) Glutathione Injection",category:"Injection",brand:"Cindyrella",price:13800,comparePrice:2e4,image:"/image/Cindyrella/power-drip-4.jpeg",images:["/image/Cindyrella/power-drip-4.jpeg","/image/Cindyrella/power-drip-2.jpeg","/image/Cindyrella/power-drip-3.jpeg","/image/Cindyrella/power-drip-1.jpeg","/image/Cindyrella/power-drip-5.jpeg"],description:"High-dose glutathione drip with CoQ10, marine collagen, placenta, apple stem cell, and vitamins for energy, skin brightening, and overall wellness.",details:`
    <strong>Cindyrella Power Drip (10 Sets)</strong><br/><br/>
    Experience the ultimate rejuvenation with Power Drip, a high-dose blend crafted to boost your energy, brighten your skin, and enhance your overall wellness. Perfect for those who want to glow from within and feel their absolute best.<br/><br/>
    
    <strong>Key Ingredients:</strong><br/>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Glutathione – 800,000 mg</li>
      <li>Coenzyme Q10 (CoQ10) – 10,000 mg</li>
      <li>Marine Collagen – 80,000 mg</li>
      <li>Collagen – 70,000 mg</li>
      <li>Placenta – 25,000 mg</li>
      <li>Apple Stem Cell – 10,000 mg</li>
      <li>Vitamin C – 5,000 mg</li>
      <li>Vitamin B Complex (B1, B3, B5, B6, B12) – 500 mg total</li>
      <li>Vitamin E – 1,000 mg</li>
    </ul>
    <br/>

    <strong>Key Features:</strong><br/>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>10 Sets per pack</li>
      <li>Powerful detoxification and whitening</li>
      <li>Boosts cellular energy</li>
      <li>Restores skin elasticity and glow</li>
      <li>Promotes skin regeneration with stem cells</li>
      <li>Supports immunity and metabolism</li>
    </ul>
    <br/>

    <strong>Benefits:</strong>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Skin brightening and whitening</li>
      <li>Detoxification at cellular level</li>
      <li>Increased energy and wellness</li>
      <li>Improved skin elasticity and firmness</li>
      <li>Regeneration of skin cells</li>
      <li>Radiant, glowing complexion</li>
    </ul>
    <br/>

    <strong>How to Use:</strong> Administered as intravenous drip under professional supervision. Follow healthcare provider's instructions.<br/><br/>

    <strong>Important Note:</strong> For guaranteed authenticity, Cindyrella products should only come from the Philippines and be shipped directly to your country. WE DO NOT HAVE ANY AUTHORIZED DISTRIBUTORS/SELLERS IN AUSTRALIA, UK, US, VIETNAM, INDIA, JEDDAH, THAILAND OR IN ANY COUNTRY.<br/><br/>

    <em class="text-xs text-gray-400">Note: Results may vary. Consult healthcare professional before use. Verify authenticity by purchasing only from Philippines.</em>
    `,benefits:["10 Sets Pack","800,000mg Glutathione","With CoQ10 & Collagens","Placenta & Apple Stem Cell","Vitamins B, C, E","Energy & Wellness","Skin Brightening","Detoxification"],sku:"CINDY-POWERDRIP-10",volume:"10 Sets",stock:10},{id:32,name:"Rejuran S Acne Scar Treatment Injection",category:"C & D Fillers",brand:"Rejuran",price:8800,comparePrice:1e4,image:"/image/rejuran/rejuran-s-1.jpeg",images:["/image/rejuran/rejuran-s-1.jpeg","/image/rejuran/rejuran-s-2.jpeg","/image/rejuran/rejuran-s-3.jpeg","/image/rejuran/rejuran-s-4.jpeg"],description:"Concentrated polynucleotide (PN) injection for treating acne scars, including boxcar, icepick, and rolling scars, by repairing damaged cells and stimulating collagen.",details:`
    <strong>Rejuran S Acne Scar Treatment</strong><br/><br/>
    Rejuran S is a more concentrated version of Rejuran Healer, specially developed to treat acne scars. It contains Polynucleotides (PN), which are DNA fragments that help repair damaged cells and stimulate collagen. Its ability to boost skin healing and remodel collagen makes it ideal for treating various types of acne scars including boxcar scars, icepick scars, and rolling scars.<br/><br/>
    
    <strong>Key Features:</strong><br/>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Primary Ingredient: Polynucleotide (PN) – thicker formulation for scars</li>
      <li>Quantity: 1 mL per syringe</li>
      <li>Packing: 1 Syringe / 1 Box</li>
      <li>Country of Origin: Republic of Korea</li>
      <li>Treatment Type: Acne scar treatment</li>
      <li>No. of Sessions: 2–3 sessions recommended</li>
    </ul>
    <br/>

    <strong>Treatment Experience:</strong>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Oral painkillers and strong numbing cream applied 30 minutes prior</li>
      <li>Tiny needle injects Rejuran S directly under targeted scars – feels like ant bites</li>
      <li>Small bumps form over treated areas; intensive recovery cream applied and massaged</li>
      <li>Needle marks and bruising typically recover after 5–7 days</li>
      <li>For deep scars, subcision may be combined before injection for superior results</li>
    </ul>
    <br/>

    <strong>Recommended Treatment Schedule:</strong> 3 treatment sessions, 4 weeks between each treatment. Maintenance: single treatment every 6–12 months.<br/><br/>

    <strong>Results:</strong>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Short-Term: Enhanced hydration and reduced redness after 1–2 sessions</li>
      <li>Optimal Results: Achieved after 3–4 treatments</li>
      <li>Longevity: Results last 6–12 months with maintenance and proper skincare</li>
      <li>Long-Term: Improved elasticity and rejuvenated appearance due to ongoing collagen stimulation</li>
    </ul>
    <br/>

    <strong>Who Should Avoid:</strong> Individuals allergic to polynucleotide, active infections or lesions in treatment area, pregnant or breastfeeding, autoimmune disorders, or on anticoagulant therapy (consult physician).<br/><br/>

    <strong>Aftercare Instructions:</strong>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Avoid direct sunlight; apply broad-spectrum sunscreen diligently</li>
      <li>Refrain from harsh products, exfoliants, or makeup for 24–48 hours</li>
      <li>Avoid hot baths, saunas, or intense exercise for 48 hours</li>
      <li>Keep skin moisturized to support healing</li>
    </ul>
    <br/>

    <em class="text-xs text-gray-400">Note: Results may vary. Consult a dermatologist before treatment. Professional administration only.</em>
    `,benefits:["Treats Acne Scars","Polynucleotide (PN) Technology","Stimulates Collagen","Repairs Damaged Cells","Smooths Boxcar & Icepick Scars","Improves Skin Elasticity","Made in Korea","Professional Use"],sku:"REJURAN-S-1ML",volume:"1 Syringe",stock:10},{id:33,name:"Glutanex 1200mg Glutathione Skin Whitening Injection - 10 Sessions",category:"Injection",brand:"Nexus Pharma",price:22e3,comparePrice:30288,image:"/image/nexus-pharma/glutanex-1200-1.jpeg",images:["/image/nexus-pharma/glutanex-1200-1.jpeg","/image/nexus-pharma/glutanex-1200-2.jpeg","/image/nexus-pharma/glutanex-1200-3.jpeg","/image/nexus-pharma/glutanex-1200-4.jpeg"],description:"Premium South Korean whitening therapy with pharmaceutical-grade glutathione (1200mg) for consistent brightening, hydration, and rejuvenation across 10 sessions.",details:`
    <strong>Nexus Pharma Glutanex 1200mg Glutathione Skin Whitening Injection – 10 Sessions</strong><br/><br/>
    A premium South Korean whitening therapy formulated with pharmaceutical-grade glutathione for consistent brightening, hydration, and rejuvenation. This 10-session program is ideal for users seeking visible improvements through trusted Korean skincare science.<br/><br/>
    
    <strong>Composition:</strong><br/>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Glutanex Glutathione – 1200mg</li>
      <li>Asconex – 10g / 20ml (Vitamin C support)</li>
      <li>Lipotocin – 300mg / 12ml (Thioctic acid / Alpha Lipoic Acid)</li>
    </ul>
    <br/>

    <strong>Key Features:</strong><br/>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Country of Origin: South Korea</li>
      <li>Manufacturer: Nexus Pharma</li>
      <li>10-Session Whitening Protocol</li>
      <li>Pharmaceutical-grade purity</li>
    </ul>
    <br/>

    <strong>How It Works:</strong> Glutathione regulates melanin activity to lighten pigmentation and even out complexion. Vitamin C enhances absorption and antioxidant protection, while supportive nutrients improve glow and firmness.<br/><br/>

    <strong>Benefits:</strong>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Effective whitening with 1200mg glutathione</li>
      <li>Visible fairness across 10 sessions</li>
      <li>Reduces pigmentation, scars, and dark patches</li>
      <li>Supports detoxification and skin rejuvenation</li>
      <li>Korean-made formulation for purity and consistency</li>
      <li>Natural-looking, balanced results</li>
    </ul>
    <br/>

    <strong>Results Timeline:</strong> Brightness commonly appears after 3–5 sessions, with full glow after completing all 10 sessions.<br/><br/>

    <strong>Suitable For:</strong> Both men and women seeking medium-strength whitening treatment.<br/><br/>

    <strong>Why Buy from Skin Solution Store:</strong> Since 2009, supplying genuine Glutanex injections, trusted for originality, safety, and reliable whitening results.<br/><br/>

    <em class="text-xs text-gray-400">Note: Results may vary. Professional administration only. Consult dermatologist before use.</em>
    `,benefits:["Made in South Korea","10 Sessions Pack","1200mg Glutathione","With Vitamin C Support","Reduces Pigmentation","Fades Scars & Dark Spots","Detoxifies & Rejuvenates","Trusted Korean Formulation"],sku:"NEXUS-GLUTANEX-1200-10S",volume:"10 Sessions",stock:10},{id:34,name:"Cindella Luthione Vitamin C 1200mg Skin Whitening Set",category:"Injection",brand:"Cosdaq",price:16500,comparePrice:22500,image:"/image/cosdaq/cindella-set-1.jpeg",images:["/image/cosdaq/cindella-set-1.jpeg","/image/cosdaq/cindella-set-2.jpeg","/image/cosdaq/cindella-set-3.jpeg","/image/cosdaq/cindella-set-4.jpeg"],description:"KFDA-approved skin whitening injection set with Glutathione 1200mg, Thioctic Acid, and Vitamin C for fair to pink complexion, detox, and anti-aging.",details:`
    <strong>Cosdaq Cindella Luthione Vitamin C 1200mg Skin Whitening Set</strong><br/><br/>
    Achieve your dream fair to pink complexion with Cindella 1200mg KFDA Skin Whitening Injections Set. Say goodbye to all skin blemishes such as acne, wrinkles, pigments, freckles and dark spots. Also called the baby face injection, Cindella uses a multi-pronged approach transforming skin color from inside out.<br/><br/>
    
    <strong>Composition:</strong><br/>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Glutathione (Luthione) – 1200mg</li>
      <li>Thioctic Acid (Cindella) – 25mg (Alpha Lipoic Acid)</li>
      <li>Vitamin C (DHNP) – 10g</li>
    </ul>
    <br/>

    <strong>Key Features:</strong><br/>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Strength: 1200 mg</li>
      <li>Brand: Cosdaq</li>
      <li>Packaging Type: Combipack (Vials)</li>
      <li>Route of Administration: IV Use Only</li>
      <li>Country of Origin: South Korea (KFDA approved)</li>
      <li>No recovery period</li>
    </ul>
    <br/>

    <strong>Benefits:</strong>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Fair to pink complexion from dark and brown skin</li>
      <li>Detoxifies liver, improves blood circulation, metabolism, and energy levels</li>
      <li>Fights cold, obesity, edema – makes you physically healthy</li>
      <li>Regulates appetite and forms healthier daily habits</li>
      <li>Produces Alpha-lipoic acid (400x more effective antioxidant than vitamins C/E)</li>
      <li>Skin turns soft, elastic, smooth, shiny, radiant with even tone</li>
      <li>Renews damaged skin cells, repairs wounds and scars</li>
      <li>Encourages collagen production</li>
      <li>Reverse aging – slows down aging naturally</li>
      <li>Prevents saccharification of proteins</li>
    </ul>
    <br/>

    <strong>Dosage:</strong>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Treatment phase: Once every 4 days for ten weeks</li>
      <li>Maintenance phase: Once every two weeks or every month</li>
    </ul>
    <br/>

    <strong>Note:</strong> Results may vary from person to person. Best results with diet, therapy, and exercise. Can be performed with other skin whitening procedures.<br/><br/>

    <em class="text-xs text-gray-400">Note: Professional administration only. Consult dermatologist before use.</em>
    `,benefits:["Made in South Korea","KFDA Approved","1200mg Glutathione","With Vitamin C & Thioctic Acid","Fair to Pink Complexion","Liver Detox & Immunity","Anti-Aging & Collagen Boost","Baby Face Injection"],sku:"COSDAQ-CINDELLA-1200",volume:"1 Box",stock:10},{id:35,name:"QR 678 NEO Anti Hair Loss Solution Injection 5mL",category:"Others",brand:"QR 678 Neo",price:22500,comparePrice:41300,image:"/image/qr678/qr678-neo-2.jpeg",images:["/image/qr678/qr678-neo-2.jpeg","/image/qr678/qr678-neo-1.jpeg","/image/qr678/qr678-neo-3.jpeg","/image/qr678/qr678-neo-4.jpeg"],description:"Revolutionary non-surgical hair regrowth treatment that stimulates dormant follicles, reduces hair fall, and promotes natural-looking regrowth for both men and women.",details:`
    <strong>QR 678 NEO Anti Hair Loss Solution Injection 5mL</strong><br/><br/>
    A revolutionary hair regrowth treatment that provides effective, permanent and natural-looking hair regrowth benefits. This innovative advanced treatment can prevent and reverse hair loss, as well as stop hair fall and boost hair regrowth. Developed by medical professionals in India, this patented formula is used in clinical settings to treat various forms of alopecia, including male and female pattern baldness, telogen effluvium, alopecia areata, and even chemotherapy-induced hair loss.<br/><br/>
    
    <strong>Composition:</strong><br/>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Polypeptides (biomimetic growth factor analogs – VEGF, bFGF, IGF-1)</li>
      <li>Copper Tripeptide-1 – increases follicle size and strengthens hair root</li>
      <li>Ascorbic Acid (Vitamin C)</li>
      <li>Retinol (Vitamin A)</li>
      <li>Pantothenic Acid (Vitamin B5)</li>
      <li>Essential nutrients, amino acids, and minerals</li>
    </ul>
    <br/>

    <strong>Key Features:</strong><br/>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Strength: 5 mg</li>
      <li>Form: Injection</li>
      <li>Packaging Size: 5mL</li>
      <li>Prescription/Non prescription: Non prescription</li>
      <li>Ideal For: Unisex</li>
      <li>Shelf Life: 24 Months</li>
      <li>Manufactured By: Esthetic Centers International Private Limited</li>
      <li>Storage: Keep under refrigeration (below 25°C) to maintain peptide stability</li>
    </ul>
    <br/>

    <strong>How It Works:</strong> Hair doctors administer the growth factor solution directly into the scalp via mesotherapy (tiny superficial injections). The biomimetic peptides stimulate dormant hair follicles to enter the active growth phase, increasing hair density and thickness. Copper tripeptide strengthens roots while vitamins nourish the scalp.<br/><br/>

    <strong>Treatment Protocol:</strong> Sessions every 2-3 weeks for 5-8 sittings. Each session takes less than 30 minutes with minimal to no downtime.<br/><br/>

    <strong>Benefits:</strong>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Stimulates dormant hair follicles for active growth</li>
      <li>Significantly reduces hair shedding – visible improvement in 3-4 weeks</li>
      <li>Increases hair density and thickness</li>
      <li>Treats androgenetic alopecia, telogen effluvium, alopecia areata</li>
      <li>Non-surgical alternative to hair transplant</li>
      <li>Quick procedure (15-20 minutes) with no downtime</li>
    </ul>
    <br/>

    <strong>Side Effects:</strong> Generally very safe. Mild redness, itching, or temporary swelling at injection sites possible.<br/><br/>

    <em class="text-xs text-gray-400">Note: Professional administration by dermatologist only. Consult a healthcare provider before use. Must be stored refrigerated.</em>
    `,benefits:["Stimulates Hair Regrowth","Reduces Hair Fall in 3-4 Weeks","Increases Hair Density & Thickness","Treats Male & Female Pattern Baldness","Non-Surgical Alternative","Biomimetic Peptide Technology","Quick Procedure – No Downtime","Made in India"],sku:"QR678-NEO-5ML",volume:"5mL",stock:10},{id:36,name:"Fillmed NCTF 135HA Filler-Skin Booster",category:"C & D Fillers",brand:"Fillmed",price:16e3,comparePrice:22500,image:"/image/fillmed/nctf-135ha-1.jpeg",images:["/image/fillmed/nctf-135ha-1.jpeg","/image/fillmed/nctf-135ha-2.jpeg","/image/fillmed/nctf-135ha-3.jpeg","/image/fillmed/nctf-135ha-4.jpeg"],description:"French mesotherapy skin booster with hyaluronic acid and 59 active ingredients for deep hydration, anti-aging, and radiant glow – often called the 'Chanel Injection'.",details:`
    <strong>Fillmed NCTF 135HA Filler-Skin Booster</strong><br/><br/>
    A French innovation in dermal revitalization, designed to restore hydration, firmness, and luminosity. Unlike volumizing dermal fillers, this product is a biostimulator that improves skin quality from within. Often called the "Chanel Injection", it provides an immediate "glow" by nourishing the skin with a vitamin cocktail. Trusted by dermatologists worldwide for improving skin quality, reducing fine lines, and creating a radiant, youthful glow.<br/><br/>
    
    <strong>Composition – NCTF Formula (59+ Active Ingredients):</strong><br/>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Hyaluronic Acid (5 mg/ml) – deep hydration and volume</li>
      <li>12 Vitamins (A, B, C, E) – stimulate vital cell functions</li>
      <li>24 Amino Acids – building blocks for collagen and elastin</li>
      <li>6 Minerals – regulate enzyme activity</li>
      <li>6 Coenzymes & Nucleic Acids – boost cell regeneration</li>
      <li>Antioxidants including Glutathione – protect against free radical damage</li>
    </ul>
    <br/>

    <strong>Key Features:</strong><br/>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Made in France</li>
      <li>Professional-grade skin booster</li>
      <li>Non-crosslinked hyaluronic acid</li>
      <li>Suitable for face, neck, décolleté, hands, and scalp</li>
    </ul>
    <br/>

    <strong>Benefits:</strong>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Deep hydration and restored elasticity</li>
      <li>Reduces fine lines and wrinkles</li>
      <li>Enhances natural radiance and smoothness</li>
      <li>Stimulates collagen and elastin production</li>
      <li>Improves skin texture and firmness</li>
      <li>Complements whitening treatments by boosting absorption of active ingredients</li>
      <li>Clinically proven French formulation</li>
    </ul>
    <br/>

    <strong>How It Works:</strong> Works at the cellular level to stimulate fibroblast activity, increase collagen synthesis, and improve circulation. Administered via micro-injections into the dermis, microneedling, or NanoSoft device.<br/><br/>

    <strong>Treatment Protocol:</strong> Typically 3–5 sessions spaced 2–3 weeks apart. Results last 3–6 months; maintenance sessions twice a year recommended.<br/><br/>

    <strong>Side Effects:</strong> Temporary redness, mild swelling, small bumps (papules), or minor bruising at injection sites – resolve within 24–48 hours.<br/><br/>

    <strong>Customer Testimonials:</strong> "After three sessions, my skin felt plumper, hydrated, and glowing." – Reema L. "This filler gave me a refreshed look without drastic changes. Subtle yet powerful." – Kunal P.<br/><br/>

    <strong>Why Buy from Skin Solution Store:</strong> Supplying authentic European skin revitalizers with expert advice and safe delivery since 2009.<br/><br/>

    <em class="text-xs text-gray-400">Note: Professional administration only. Consult dermatologist before use. Not for active infections, autoimmune disease, pregnancy, or breastfeeding.</em>
    `,benefits:["Made in France","59 Active Ingredients","Deep Hydration","Anti-Aging & Fine Lines","Stimulates Collagen","Radiant Glow","Enhances Whitening Results","Chanel Injection"],sku:"FILLMED-NCTF-135HA",volume:"3ml",stock:10},{id:37,name:"Profhilo H Plus L Cosmetic Fillers (Skin Bio-Remodeling Injection)",category:"Injection",brand:"Profhilo",price:16e3,comparePrice:27699,image:"/image/profhilo/hplusl-1.jpeg",images:["/image/profhilo/hplusl-1.jpeg","/image/profhilo/hplusl-2.jpeg","/image/profhilo/hplusl-3.jpeg","/image/profhilo/hplusl-4.jpeg"],description:"Breakthrough stabilized hyaluronic acid bio-remodeling injectable that lifts, hydrates, and stimulates collagen and elastin for skin laxity and rejuvenation.",details:`
    <strong>Profhilo H Plus L Cosmetic Fillers</strong><br/><br/>
    An innovative, breakthrough beauty enhancer from IBSA Farmaceutici Italia. This FDA-approved filler is the first stabilized hyaluronic acid-based product free from any cross-linking agents. Using proprietary NAHYCO™ Hybrid Technology, this highly concentrated formulation mixes low- and high-molecular-weight hyaluronic acid for acclaimed longevity and sustainability. It provides a lifting, volumetric effect while hydrating and stimulating collagen and elastin cells, delivering dynamic improvement in skin integrity and laxity.<br/><br/>
    
    <strong>Composition & Technology:</strong><br/>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Total Hyaluronic Acid – 64mg per 2ml syringe</li>
      <li>Low-molecular-weight HA (80-100 kDa) – 32mg for deep hydration</li>
      <li>High-molecular-weight HA (1100-1400 kDa) – 32mg for skin tension and lifting</li>
      <li>NAHYCO™ Hybrid Technology – thermal stabilization without chemical cross-linking (BDDE-free)</li>
      <li>HA derived from biofermentation of Streptococcus zooepidemicus – ultrapure, sterile, high-grade</li>
    </ul>
    <br/>

    <strong>Key Features:</strong><br/>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Packaging: One 2.0ml prefilled syringe + 29G 1/2" needles + traceability labels</li>
      <li>Manufacturer: IBSA Farmaceutici Italia Srl, ITALY</li>
      <li>BDDE-free – high biocompatibility, low inflammatory risk</li>
      <li>Resists enzymatic breakdown by hyaluronidase</li>
    </ul>
    <br/>

    <strong>Benefits:</strong>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Stimulates production of all four types of collagen and elastin</li>
      <li>Intense hydration – injectable moisturizer for dewy glow</li>
      <li>Lifts and tightens sagging skin (face, neck, décolletage, hands, arms, knees)</li>
      <li>Refines skin texture and reduces fine lines</li>
      <li>Improves skin laxity and firmness</li>
      <li>Subtle, natural results without altering facial shape</li>
    </ul>
    <br/>

    <strong>Administration – BAP Technique:</strong><br/>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Only licensed practitioners should administer</li>
      <li>Bio Aesthetic Points (BAP) technique – 5 injection points per side of face (malar, submalar, nasolabial root, pre-tragal, marionette lines)</li>
      <li>0.2ml injected deep dermis per point via bolus technique</li>
      <li>Massage after injection for even distribution</li>
    </ul>
    <br/>

    <strong>Treatment Course:</strong> Standard initial cycle requires two sessions, spaced about 30 days apart. Minimal downtime – small bumps (mosquito bites) settle within 24 hours.<br/><br/>

    <strong>Contraindications:</strong> Not for use in pregnancy, breastfeeding, or known hypersensitivity to hyaluronic acid.<br/><br/>

    <em class="text-xs text-gray-400">Note: Professional administration only. Results may vary. Consult a qualified healthcare provider before treatment.</em>
    `,benefits:["Made in Italy","64mg/ml Stabilized HA","BDDE-free / No Cross-linking","Stimulates Collagen & Elastin","Lifts & Tightens Lax Skin","Deep Hydration","Refines Texture & Wrinkles","BAP Technique – Minimal Downtime"],sku:"PROFHILO-HPLUSL-2ML",volume:"2 ml",stock:10},{id:38,name:"Laroscorbine Platinum E-UF PN PDRN Q10+ Skin Regeneration Injection",category:"Injection",brand:"Laroscorbine",price:4500,comparePrice:6500,image:"/image/laroscorbine/platinum-1.jpeg",images:["/image/laroscorbine/platinum-1.jpeg","/image/laroscorbine/platinum-2.jpeg","/image/laroscorbine/platinum-3.jpeg","/image/laroscorbine/platinum-4.jpeg"],description:"Advanced skin regeneration injectable with PN/PDRN (Polynucleotides), Coenzyme Q10+, and E-UF technology for cellular repair, rejuvenation, and anti-aging.",details:`
    <strong>Laroscorbine Platinum E-UF PN PDRN Q10+</strong><br/><br/>
    An advanced skin regeneration and revitalization injectable designed for professional aesthetic use. This high-performance formulation combines PN/PDRN (Polynucleotides), Coenzyme Q10+, and enhanced ultra-filtration (E-UF) technology to support cellular repair, skin rejuvenation, and long-term skin quality improvement. Developed to address aging, damaged, and stressed skin, it works at a cellular and dermal level to restore skin vitality, elasticity, hydration, and radiance.<br/><br/>
    
    <strong>Key Features:</strong><br/>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Contains PN / PDRN (Polynucleotides) for cellular repair and regeneration</li>
      <li>Enriched with Coenzyme Q10+ for antioxidant and energy support</li>
      <li>E-UF (Enhanced Ultra-Filtration) technology for high purity and stability</li>
      <li>Supports collagen synthesis and tissue repair</li>
      <li>Strength: 9000 (high potency)</li>
      <li>Pack Size: 12 x 5ml ampoules</li>
      <li>Route: IV (Intravenous)</li>
      <li>Grade: Pharma Grade</li>
      <li>Shelf Life: 36 months</li>
    </ul>
    <br/>

    <strong>Benefits:</strong>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Enhanced skin regeneration and repair</li>
      <li>Improved elasticity, firmness, and skin density</li>
      <li>Reduction in fine lines and early wrinkles</li>
      <li>Brighter, healthier, and more radiant skin</li>
      <li>Improved skin texture and hydration</li>
      <li>Strengthened skin barrier and resilience</li>
    </ul>
    <br/>

    <strong>Common Treatment Indications:</strong>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Facial skin rejuvenation and glow enhancement</li>
      <li>Anti-aging and skin quality improvement</li>
      <li>Dull, tired, or damaged skin</li>
      <li>Post-procedure skin recovery (as professionally indicated)</li>
      <li>Neck, décolletage, and under-eye rejuvenation</li>
    </ul>
    <br/>

    <strong>Why Choose Laroscorbine Platinum:</strong>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Combines regeneration + antioxidant + energy support in one formula</li>
      <li>Targets skin repair at cellular level</li>
      <li>Ideal for clinics offering premium regenerative aesthetics</li>
      <li>Delivers gradual, natural, and long-lasting results</li>
      <li>Complements treatments like lasers, RF, microneedling, and injectables</li>
      <li>Suitable for all skin types</li>
    </ul>
    <br/>

    <em class="text-xs text-gray-400">Note: Professional use only. Consult a qualified practitioner before use.</em>
    `,benefits:["12 Ampoules (5ml each)","PN/PDRN Polynucleotides","Coenzyme Q10+","E-UF Purification Technology","Stimulates Collagen","Reduces Fine Lines & Wrinkles","Improves Elasticity & Hydration","Suitable for All Skin Types"],sku:"LAROS-PLATINUM-PN-Q10-12X5",volume:"12 Ampoules (5ml each)",stock:10},{id:39,name:"Eter Glow 600mg Glutathione Skin Whitening Injection",category:"Injection",brand:"Eter Glow",price:750,comparePrice:1250,image:"/image/eter-glow/600mg-1.jpeg",images:["/image/eter-glow/600mg-1.jpeg","/image/eter-glow/600mg-2.jpeg","/image/eter-glow/600mg-3.jpeg","/image/eter-glow/600mg-4.jpeg"],description:"Glutathione antioxidant injection that neutralizes free radicals, supports liver detoxification, and may aid skin brightening by inhibiting melanin production.",details:`
    <strong>Eter Glow 600mg Glutathione Skin Whitening Injection</strong><br/><br/>
    Eter Glow Glutathione is a key antioxidant in the body, helping neutralize reactive oxygen species (free radicals) inside cells and protecting against oxidative damage. It participates in detoxifying endogenous toxins and xenobiotics, supporting liver health. Some studies suggest GSH may reduce melanin production by inhibiting tyrosinase, potentially leading to lighter skin tone or reduced hyperpigmentation. Evidence for injectable GSH in skin lightening is limited, but it is widely used for antioxidant and detoxification benefits.<br/><br/>
    
    <strong>Key Features:</strong><br/>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Strength: 600 mg</li>
      <li>Packaging Size: Per Session</li>
      <li>Manufacturer: Eter Glow</li>
      <li>Packaging Type: Box</li>
      <li>Usage/Application: Skin Whitening, Antioxidant, Detoxification</li>
    </ul>
    <br/>

    <strong>Potential Benefits:</strong>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Antioxidant & cell protection – neutralizes free radicals</li>
      <li>Detoxification / liver support – helps eliminate toxins</li>
      <li>Skin brightening effects – may reduce melanin production (limited evidence)</li>
      <li>May support metabolic health and insulin sensitivity</li>
    </ul>
    <br/>

    <strong>Note:</strong> Evidence for injectable glutathione in skin whitening is weak/inconclusive. Always consult a healthcare professional before use.<br/><br/>

    <em class="text-xs text-gray-400">Note: This product is currently out of stock. Professional use only. Consult dermatologist before use.</em>
    `,benefits:["600mg Glutathione","Antioxidant Protection","Liver Detoxification","May Reduce Melanin","Per Session Pack","Antioxidant Support"],sku:"ETER-GLOW-600MG",volume:"Per Session",stock:0},{id:40,name:"Shiro Advance Glutathione 5000mg Skin Whitening Injection",category:"Injection",brand:"Shiro Advance",price:12500,comparePrice:18e3,image:"/image/shiro/advance-5000mg-1.jpeg",images:["/image/shiro/advance-5000mg-1.jpeg","/image/shiro/advance-5000mg-2.jpeg","/image/shiro/advance-5000mg-3.jpeg","/image/shiro/advance-5000mg-4.jpeg"],description:"Glutathione skin whitening injection that reduces hyperpigmentation, sun spots, wrinkles, acne, and melasma by eliminating toxins and free radicals.",details:`
    <strong>Shiro Advance Glutathione 5000mg Skin Whitening Injection</strong><br/><br/>
    Glutathione injections reduce hyperpigmentation, sun spots, wrinkles, acne, and even melasma by eliminating toxins and free radicals from the body. In addition, it possesses anti-inflammatory properties. To be effective, Glutathione injections need to be done on a weekly basis.<br/><br/>
    
    <strong>Key Features:</strong><br/>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Strength: 5000mg</li>
      <li>Composition: Collagen, Vitamin C, Glutathione</li>
      <li>Form: Liquid and powder</li>
      <li>Packaging Size: 10 Sets per Box</li>
      <li>Manufacturer: Shiro Pharmaceutical & Co</li>
      <li>L Glutathione: Yes</li>
      <li>How to Use: Intravenous IV Infusion (Drip) Once a week</li>
    </ul>
    <br/>

    <strong>Benefits:</strong>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Produces youthful skin, hair, and nails</li>
      <li>Vitamin C accelerates collagen absorption</li>
      <li>Skin whitening and brightening</li>
      <li>Supports renewing of skin cells and repair</li>
      <li>Fades wrinkles and fine lines</li>
      <li>Relieves joint pain</li>
      <li>Promotes quality sleep</li>
    </ul>
    <br/>

    <strong>Usage:</strong> As directed by healthcare professional. Typically administered once weekly via IV drip.<br/><br/>

    <em class="text-xs text-gray-400">Note: PCD Pharma also available. Results may vary. Consult dermatologist before use.</em>
    `,benefits:["10 Sessions Pack","5000mg Glutathione","With Collagen & Vitamin C","Reduces Hyperpigmentation","Fades Wrinkles & Fine Lines","Skin Whitening","Anti-Inflammatory","Promotes Youthful Skin"],sku:"SHIRO-ADVANCE-5000-10S",volume:"10 Sessions",stock:10},{id:41,name:"Miracle Weight Gain Capsules With Herbal Support For Healthy Weight Gain",category:"Weight Gain",brand:"Miracle Gain",price:2200,comparePrice:3500,image:"/image/miracle-gain/weight-gain-capsules-1.jpeg",images:["/image/miracle-gain/weight-gain-capsules-1.jpeg","/image/miracle-gain/weight-gain-capsules-2.jpeg","/image/miracle-gain/weight-gain-capsules-3.jpeg","/image/miracle-gain/weight-gain-capsules-4.jpeg"],description:"Powerful herbal supplement with Ayurvedic ingredients like Ashwagandha, Shatavari, Safed Musli, and Vidarikand to support healthy weight gain naturally.",details:`
    <strong>Miracle Weight Gain Capsules With Herbal Support For Healthy Weight Gain</strong><br/><br/>
    Struggling with low body weight, poor appetite, or low energy? Miracle Gain Capsules are a powerful herbal supplement designed to help you gain healthy body weight naturally. Formulated with time-tested ayurvedic ingredients like Ashwagandha, Shatavari, Safed Musli, and Vidarikand, these capsules support weight gain by improving digestion, boosting appetite, enhancing nutrient absorption, and increasing muscle mass without harmful side effects or synthetic additives. Whether you're underweight, recovering from an illness, or simply want to build a fuller, stronger physique, these capsules offer a safe, natural, and effective solution.<br/><br/>
    
    <strong>Key Features:</strong><br/>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Packaging Size: 90 Capsules</li>
      <li>Form: Capsule</li>
      <li>Ideal For: Unisex</li>
      <li>Brand: Miracle Gain</li>
      <li>Manufactured By: Miracle Gain</li>
      <li>Herbal Formula – 100% natural, no steroids or chemicals</li>
      <li>GMP Certified</li>
    </ul>
    <br/>

    <strong>Benefits:</strong>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Improves appetite – helps eat better and absorb more nutrients</li>
      <li>Builds lean mass – promotes healthy muscle gain and body weight</li>
      <li>Boosts energy – increases stamina, reduces weakness and fatigue</li>
      <li>Stress support – adaptogenic herbs reduce stress-related weight loss</li>
      <li>Safe & non-habit forming – suitable for long-term use with no side effects</li>
    </ul>
    <br/>

    <strong>Suggested Use:</strong> Take 2–3 capsules thrice daily after meals with warm milk or water, or as directed by a healthcare professional. Use consistently for 2–3 months for best results.<br/><br/>

    <strong>Precautions:</strong> Not suitable for children below 12 years. Pregnant or breastfeeding women should consult a physician. Store in a cool, dry place away from direct sunlight.<br/><br/>

    <em class="text-xs text-gray-400">Note: 90 Capsules / 30-Day Supply. 100% Herbal. Consult physician before use.</em>
    `,benefits:["90 Capsules (30-Day Supply)","100% Herbal Formula","Improves Appetite","Builds Lean Muscle Mass","Boosts Energy & Stamina","Reduces Weakness & Fatigue","Adaptogenic Stress Support","No Steroids or Chemicals"],sku:"MIRACLE-GAIN-CAPSULES-90",volume:"90 Capsules",stock:10},{id:42,name:"Lucchini Glutathione Peptide Pico-Cell Brightening Solution For Skin Whitening Injection",category:"Injection",brand:"Lucchini",price:11600,comparePrice:15e3,image:"/image/lucchini/pico-cell-brightening-1.jpg",images:["/image/lucchini/pico-cell-brightening-1.jpg","/image/lucchini/pico-cell-brightening-2.jpeg","/image/lucchini/pico-cell-brightening-3.jpeg","/image/lucchini/pico-cell-brightening-4.jpeg"],description:"Advanced skin brightening and rejuvenation injection with Pico-Cell technology, combining glutathione, peptides, stem cells, and multivitamins for deep cellular activation and luminous skin.",details:`
    <strong>Lucchini Glutathione Peptide Pico-Cell Brightening Solution</strong><br/><br/>
    An advanced skin brightening and rejuvenation formulation designed for professional aesthetic use. Engineered with pico-cell technology, this innovative solution delivers glutathione and skin-active peptides at a cellular level to support melanin regulation, antioxidant defense, and overall skin clarity. Developed for modern aesthetic protocols, it focuses on deep cellular activation, helping restore luminosity, even tone, and youthful skin vitality with gradual, natural-looking results.<br/><br/>
    
    <strong>Key Features:</strong><br/>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Strength: 1200 mg (Glutathione complex)</li>
      <li>Brand: Lucchini</li>
      <li>Form: Lyophilized Powder</li>
      <li>Packaging Type: Combipack (Box)</li>
      <li>Route of Administration: IV Use Only</li>
      <li>Manufactured By: Switzerland</li>
      <li>Grade Standard: A+</li>
      <li>L Glutathione: 15000mg (per formulation)</li>
      <li>Epidermal Growth Factor: 4200mg</li>
      <li>Alpha Lipoic Acid: 950mg</li>
      <li>Vitamin B Complex: Yes</li>
      <li>Not Suitable For: Pregnant women or allergy to any kind of vitamin</li>
      <li>How To Use: Intravenous IV Infusion (Drip) once every 4 to 5 days</li>
    </ul>
    <br/>

    <strong>Complete Composition (Pico-Cell Enhanced):</strong><br/>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Pico-Cell Hexa Cell</li>
      <li>Pico-Cell Plant Stem Cell Factor II</li>
      <li>Embryonic Stem Cell (ESC) Placenta</li>
      <li>Cerebrum Cell</li>
      <li>Umbilical Cord Mesenchymal Cell</li>
      <li>Thymus Cell</li>
      <li>Pico-Cell Multivitamins</li>
      <li>Pico-Cell Natural Collagen</li>
      <li>Pico-Cell Hydra Plus</li>
      <li>Pico-Cell Alpha Lipoic Acid</li>
      <li>Pico-Cell Ascorbic Acid (Vitamin C)</li>
      <li>Pico-Cell PN/PDRN</li>
      <li>Pico-Cell Selenium</li>
      <li>Beta Hydroxy Acid (5500mg)</li>
    </ul>
    <br/>

    <strong>Benefits:</strong>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Visible skin brightening and glow enhancement</li>
      <li>Improved skin tone uniformity</li>
      <li>Reduction in dullness and oxidative stress</li>
      <li>Enhanced skin repair and renewal</li>
      <li>Improved texture, hydration, and clarity</li>
      <li>Strengthened skin defense against environmental damage</li>
      <li>Whitens skin and lightens scars</li>
      <li>Antioxidant protection and detoxification</li>
    </ul>
    <br/>

    <strong>Common Professional Applications:</strong>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Skin brightening and glow treatments</li>
      <li>Anti-aging and skin rejuvenation protocols</li>
      <li>Treatment for dull, tired, or uneven skin tone</li>
      <li>Post-procedure skin recovery (as professionally indicated)</li>
      <li>Face, neck, décolletage, and under-eye rejuvenation</li>
    </ul>
    <br/>

    <strong>Why Choose Lucchini:</strong>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Combines antioxidant + peptide + advanced delivery technology</li>
      <li>Targets skin brightness at a cellular level</li>
      <li>Ideal for clinics offering premium skin-quality treatments</li>
      <li>Provides gradual, natural, and long-lasting results</li>
      <li>Complements lasers, microneedling, mesotherapy, and injectable protocols</li>
      <li>Suitable for all skin types</li>
    </ul>
    <br/>

    <strong>Usage:</strong> As prescribed by dermatologist. Typically one injection every 4-5 days via IV infusion. For best results, complete the full recommended session course.<br/><br/>

    <em class="text-xs text-gray-400">Note: PCD Pharma, Wholesale available. Results may vary. Professional administration only. Consult dermatologist before use.</em>
    `,benefits:["Pico-Cell Delivery Technology","Glutathione + Peptides + Stem Cells","Skin Brightening & Glow","Reduces Dullness & Oxidative Stress","Improves Texture & Hydration","Anti-Aging & Skin Renewal","Made in Switzerland","Professional Grade"],sku:"LUCCHINI-PICO-CELL",volume:"10 Sessions",stock:10},{id:43,name:"Royal Ultra Booster With Glutathione Skin Whitening Injection 10mL",category:"Injection",brand:"Royal Ultra Booster",price:8800,comparePrice:12500,image:"/image/royal-ultra/royal-ultra-booster-1.jpg",images:["/image/royal-ultra/royal-ultra-booster-1.jpg","/image/royal-ultra/royal-ultra-booster-2.jpg","/image/royal-ultra/royal-ultra-booster-3.jpeg","/image/royal-ultra/royal-ultra-booster-4.jpeg"],description:"One-time quick whitening IV injection with Cyto-6 plant stem cells and DualNA technology for immediate skin brightening, UV protection, and antioxidant benefits.",details:`
    <strong>Royal Ultra Booster With Glutathione Skin Whitening Injection 10mL</strong><br/><br/>
    Royal Ultra Booster IV Injection is a one-time quick whitening IV injection that produces immediate results. This skin whitening solution is rapidly absorbed after administration, allowing for quick and uncomplicated results. Royal Ultra Booster reduces the appearance of dark spots and aging spots across your body. It also provides total UV radiation protection, resulting in brighter skin. Royal Ultra Booster also includes a high concentration of antioxidants, which help to cleanse essential organs while also boosting the appearance of your skin, hair, and nails.<br/><br/>
    
    <strong>Key Features:</strong><br/>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Strength: Skin booster</li>
      <li>Packaging Size: 10 ml Vial</li>
      <li>Brand Name: Royal Ultra Booster</li>
      <li>Manufacturer: NouveauxIV</li>
      <li>Packaging Type: Box</li>
      <li>Usage/Application: Skin Whitening</li>
      <li>Skin Type: Suitable for all skin types</li>
      <li>Age Range: Adults</li>
    </ul>
    <br/>

    <strong>Ingredients (DualNA Technology):</strong><br/>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Cyto-6 Plant Stem Cell</li>
      <li>DualNA Melanin Inhibit Factor</li>
      <li>DualNA Glutathione</li>
      <li>DualNA Ascorbic Acid (Vitamin C)</li>
      <li>DualNA White Elements</li>
      <li>DualNA Alpha Lipoic Acid</li>
      <li>DualNA Multivitamins</li>
    </ul>
    <br/>

    <strong>Key Benefits:</strong>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Quick whitening effect that lasts long</li>
      <li>Effectively whitens skin</li>
      <li>Restores skin brightness and improves skin condition</li>
      <li>Brightens and evens skin tone</li>
      <li>Reduces dark spots and aging spots</li>
      <li>Provides total UV radiation protection</li>
      <li>High concentration of antioxidants cleanses essential organs</li>
      <li>Boosts appearance of skin, hair, and nails</li>
    </ul>
    <br/>

    <strong>How to Use:</strong> Dilute one vial in 250ml saline and start drip session for 20 to 30 minutes. Administer intravenously under professional supervision.<br/><br/>

    <strong>Side Effects:</strong> As of current information, no noted side effects. Discontinue use and consult a doctor if any adverse reaction occurs.<br/><br/>

    <em class="text-xs text-gray-400">Note: Results may vary. Professional administration only. Consult dermatologist before use.</em>
    `,benefits:["Quick & Long-Lasting Whitening","Total UV Protection","Reduces Dark & Age Spots","Antioxidant Rich","With Plant Stem Cells","DualNA Glutathione & Vitamin C","Brightens & Evens Skin Tone","Improves Skin, Hair & Nails"],sku:"ROYAL-ULTRA-BOOSTER-10ML",volume:"10ml Vial",stock:10},{id:44,name:"Relumins 3500mg Advance Glutathione Skin Whitening Injection",category:"Injection",brand:"Relumins",price:16500,comparePrice:2e4,image:"/image/relumins/3500mg-advance-1.jpeg",images:["/image/relumins/3500mg-advance-1.jpeg","/image/relumins/3500mg-advance-2.jpeg","/image/relumins/3500mg-advance-3.jpeg","/image/relumins/3500mg-advance-4.jpeg"],description:"Highest strength IV alternative glutathione injection with 3500mg L-Glutathione and Vitamin C, FDA-registered, for maximum skin whitening and antioxidant protection.",details:`
    <strong>Relumins 3500mg Advance Glutathione Skin Whitening Injection</strong><br/><br/>
    Relumins Advanced Glutathione 3500 is the highest strength IV Alternative Glutathione on the market. It features the purest Glutathione and Vitamin C, backed up by authoritative lab tests and the Relumins reputation. Relumins is registered with the FDA to ensure the highest level of quality, purity and safety.<br/><br/>
    
    <strong>Key Features:</strong><br/>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Strength: 3500mg (L-Glutathione 3000mg + Vitamin C 500mg)</li>
      <li>Packaging Size: 5 Sessions per Box</li>
      <li>Brand: Relumins</li>
      <li>Form: Injection (Lyophilized powder + solution)</li>
      <li>Manufactured By: USA</li>
      <li>Grade Standard: A+</li>
      <li>FDA Registered</li>
      <li>Dermatologist Tested | No side effects</li>
      <li>Vegetarian: Yes | Gender: Men & Women</li>
      <li>Not Suitable For: Breastfeeding & pregnant women</li>
    </ul>
    <br/>

    <strong>Composition:</strong><br/>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Reduced L-Glutathione – 3000mg per vial</li>
      <li>Vitamin C (Ascorbic Acid) – 500mg</li>
      <li>Vitamin B Complex – 500mcg</li>
    </ul>
    <br/>

    <strong>How It Works:</strong> Glutathione competitively inhibits melanin synthesis by interrupting L-DOPA's ability to bind to tyrosinase during melanin production. It is the master antioxidant that helps fight free radicals causing skin damage and supports healthy liver function.<br/><br/>

    <strong>Benefits:</strong>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Maximum skin whitening and brightening</li>
      <li>Reduces hyperpigmentation, dark spots, and melasma</li>
      <li>Powerful antioxidant protection against free radicals</li>
      <li>Supports liver detoxification</li>
      <li>Promotes firm, rejuvenated skin with Vitamin C</li>
      <li>FDA-registered for quality and safety</li>
    </ul>
    <br/>

    <strong>Usage Instructions (IV Administration):</strong><br/>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Mix the Vitamin C/Saline solution (5ml) with the Glutathione powder</li>
      <li>Administer one vial per week via Intravenous IV Infusion Drip</li>
      <li>For 7000mg per week, use two vials per week</li>
      <li>Treatment results evaluated every 3 months</li>
      <li>Transition to maintenance once desired skin tone is reached</li>
    </ul>
    <br/>

    <strong>Indications:</strong> As with all supplements, pregnant and nursing mothers should consult their physician. Glutathione has cellular protective properties that make it unsuitable for chemotherapy patients.<br/><br/>

    <em class="text-xs text-gray-400">Note: Results may vary. Professional administration only. Consult dermatologist before use. Store refrigerated upon receipt.</em>
    `,benefits:["5 Sessions Pack","Made in USA","3500mg Glutathione Complex","FDA Registered","Maximum Skin Whitening","Reduces Hyperpigmentation","Antioxidant & Detox","Dermatologist Tested"],sku:"RELUMINS-3500-ADVANCE-5S",volume:"5 Sessions",stock:10},{id:45,name:"Iskin SLC24A5 Chromosome Phase IX Glutathione Skin Whitening Injection",category:"Injection",brand:"iSkin",price:18700,comparePrice:25e3,image:"/image/iskin/slc24a5-phase9-1.jpeg",images:["/image/iskin/slc24a5-phase9-1.jpeg","/image/iskin/slc24a5-phase9-2.jpeg","/image/iskin/slc24a5-phase9-3.jpeg","/image/iskin/slc24a5-phase9-4.jpeg","/image/iskin/slc24a5-phase9-5.jpeg","/image/iskin/slc24a5-phase9-6.jpeg","/image/iskin/slc24a5-phase9-7.jpeg","/image/iskin/slc24a5-phase9-8.jpeg","/image/iskin/slc24a5-phase9-9.jpeg","/image/iskin/slc24a5-phase9-10.jpeg"],description:"Advanced glutathione skin whitening injection with SLC24A5 Chromosome Phase IX technology, formulated with glutathione, vitamins, and collagen for superior brightening and anti-aging.",details:`
    <strong>Iskin SLC24A5 Chromosome Phase IX Glutathione Skin Whitening Injection</strong><br/><br/>
    Glutathione injections can improve your skin's quality immensely, giving it back its natural glow and a brighter look. It can also help you reduce signs of aging, such as wrinkles and dark spots. This advanced formulation features SLC24A5 Chromosome Phase IX technology combined with glutathione, vitamins, and collagen for superior skin brightening and rejuvenation.<br/><br/>
    
    <strong>Key Features:</strong><br/>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Strength: 5500 (Advanced potency complex)</li>
      <li>Packaging Size: 6 Sessions per Box</li>
      <li>Brand: SLC24A5 / iSkin</li>
      <li>Form: Injection</li>
      <li>Composition: Glutathione, Vitamins, Collagen</li>
      <li>Manufacturer: iSkin</li>
      <li>Grade Standard: AAA+++</li>
      <li>Packaging Type: Box</li>
      <li>Usage: Skin Whitening</li>
    </ul>
    <br/>

    <strong>Results Timeline & Expectations:</strong>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>One round of treatment (10 IVs) can lighten skin 1–3 shades</li>
      <li>Light-medium brown skin: visible results in 1–3 months</li>
      <li>Dark brown skin: 3–6 months</li>
      <li>Very dark skin: 6–12 months</li>
      <li>Black skin: 18 months minimum</li>
      <li>Must be taken with Vitamin C at equal or twice dosage for efficacy</li>
    </ul>
    <br/>

    <strong>What to Avoid:</strong> Avoid alcohol, smoking, inflammatory drugs like aspirin, and direct sun exposure during treatment. Avoid other skin treatments while taking glutathione injections.<br/><br/>

    <strong>Benefits:</strong>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Improves skin quality and restores natural glow</li>
      <li>Reduces signs of aging – wrinkles and dark spots</li>
      <li>Brightens skin tone with advanced SLC24A5 technology</li>
      <li>Contains collagen for improved elasticity</li>
      <li>Vitamin-enriched formula for comprehensive skin health</li>
    </ul>
    <br/>

    <strong>Usage:</strong> Administered intravenously under professional supervision. Typically twice weekly for 5 weeks per treatment round.<br/><br/>

    <em class="text-xs text-gray-400">Note: Results vary by individual skin type and metabolism. Professional administration only. Consult dermatologist before use.</em>
    `,benefits:["6 Sessions Pack","SLC24A5 Chromosome Phase IX","Glutathione + Vitamins + Collagen","1–3 Shades Lightening","Reduces Wrinkles & Dark Spots","Restores Natural Glow","AAA+++ Grade","Advanced Brightening"],sku:"ISKIN-SLC24A5-PHASE9-6S",volume:"6 Sessions",stock:10},{id:46,name:"L Carnitine Probio CLA 75g Advance Weight Loss Injection",category:"Weight Loss",brand:"L-Carnitine",price:8500,comparePrice:1e4,image:"/image/l-carnitine/probio-cla-75g-1.jpeg",images:["/image/l-carnitine/probio-cla-75g-1.jpeg","/image/l-carnitine/probio-cla-75g-2.jpeg","/image/l-carnitine/probio-cla-75g-3.jpeg"],description:"Advanced weight loss injection with L-Carnitine, CLA, and PROBIO (75g strength) for enhanced lipid metabolism, fatty acid oxidation, and accelerated fat-burning process.",details:`
    <strong>L Carnitine Probio CLA 75g Advance Weight Loss Injection</strong><br/><br/>
    L-Carnitine injections allow the amino acid to enter the blood and enhance lipid metabolism faster than when administered as an oral supplement. This advanced formulation combines L-Carnitine with CLA (Conjugated Linoleic Acid) and PROBIO for superior fat-burning and weight loss support. This 75g strength provides a higher concentration for more effective results.<br/><br/>
    
    <strong>Key Features:</strong><br/>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Strength: 75g total active complex</li>
      <li>Packaging Size: 10 Vials (10ml each)</li>
      <li>Form: Injection</li>
      <li>Route of Administration: Intravenous (IV)</li>
      <li>Pack Type: Box</li>
      <li>Formulation: With CLA</li>
      <li>Composition: Amino acid, CLA, PROBIO</li>
      <li>Country of Origin: Germany</li>
      <li>Shelf Life: 36 Months</li>
      <li>Prescription/Non-Prescription: Non-Prescription</li>
    </ul>
    <br/>

    <strong>Benefits:</strong>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Promotes fatty acid oxidation</li>
      <li>Accelerates the fat-burning process</li>
      <li>Enhances lipid metabolism faster than oral supplements</li>
      <li>Supports weight loss and fat reduction</li>
      <li>Improves energy utilization from fats</li>
    </ul>
    <br/>

    <strong>How It Works:</strong> L-Carnitine facilitates the transport of fatty acids into mitochondria where they are oxidized for energy. Combined with CLA and PROBIO, this injection boosts metabolic rate and promotes efficient fat burning.<br/><br/>

    <strong>Usage:</strong> Administered intravenously under professional supervision. Follow healthcare provider's recommendations for dosage and frequency.<br/><br/>

    <em class="text-xs text-gray-400">Note: Results may vary. Consult healthcare professional before use. Not a substitute for diet and exercise.</em>
    `,benefits:["10 Vials (10ml each)","Made in Germany","75g Strength","With CLA & PROBIO","Promotes Fatty Acid Oxidation","Accelerates Fat Burning","Enhances Lipid Metabolism","Non-Prescription"],sku:"LCARNITINE-PROBIO-CLA-75G",volume:"10 Vials (10ml each)",stock:10},{id:47,name:"Miracle White Royal Gold Nano Concentrated Glutathione BOOSTER 120000 mg Skin Whitening Injection",category:"Injection",brand:"Miracle White",price:9800,comparePrice:12500,image:"/image/miracle-white/royal-gold-booster-1.jpg",images:["/image/miracle-white/royal-gold-booster-1.jpg","/image/miracle-white/royal-gold-booster-2.jpeg","/image/miracle-white/royal-gold-booster-3.jpeg","/image/miracle-white/royal-gold-booster-4.jpeg"],description:"Nano concentrated glutathione booster with 120,000mg glutathione, CoQ10, and collagen. Lightens skin tone, removes blemishes, dark spots, and provides anti-aging benefits.",details:`
    <strong>Miracle White Royal Gold Nano Concentrated Glutathione BOOSTER 120000 mg</strong><br/><br/>
    A combination of innovations in skin science after years of research. Miracle White not only lightens your skin tone, makes it smooth and free of blemishes and dark spots, brightens a dull complexion, but also has anti-aging factors.<br/><br/>
    
    <strong>Composition:</strong><br/>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Royal Gold Nano Concentrated Glutathione – 120,000mg</li>
      <li>Coenzyme Q10 – 70,000mg</li>
      <li>Ascorbic Acid (Vitamin C) – 5,000mg</li>
      <li>Melanin Inhibitor Plus Collagen – 5,000mg</li>
      <li>Kojic Acid – 3,600mg</li>
      <li>Epidermal Growth Factor (EGF) – 3,000mg</li>
      <li>Alpha Lipoic Acid (ALA) – 500mg</li>
      <li>L-Cysteine – 700mg</li>
      <li>Multivitamin – 1,200mg</li>
      <li>Thioctic Acid – 1,200mg</li>
    </ul>
    <br/>

    <strong>Key Features:</strong><br/>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Packaging: 1 box contains 6 sets (1 set = 1 vial + 6 ampoules)</li>
      <li>Manufacturer: Miracle White</li>
      <li>Country of Origin: Switzerland</li>
      <li>Usage: Skin Whitening</li>
    </ul>
    <br/>

    <strong>Benefits:</strong>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Improves the health of every cell</li>
      <li>Increases energy production in skin cells</li>
      <li>Promotes antioxidant protection</li>
      <li>Helps lower blood sugar levels</li>
      <li>Inhibits and prevents formation of tyrosine</li>
      <li>Prevents dark spots</li>
      <li>Stimulates collagen production for tighter skin</li>
      <li>Boosts production of collagen and elastin</li>
      <li>Reduces effects of aging from inside out</li>
      <li>Scavenges free radicals that lead to premature aging and wrinkling</li>
    </ul>
    <br/>

    <strong>How to Use:</strong> Administer one set via IV only, once or twice a week. Professional administration only.<br/><br/>

    <strong>Not Suitable For:</strong> Breastfeeding and pregnant women, women during menstruation, vitamin allergies, patients with cardiovascular problems.<br/><br/>

    <em class="text-xs text-gray-400">Note: Made in Switzerland. Results may vary. Consult dermatologist before use.</em>
    `,benefits:["Made in Switzerland","120,000mg Glutathione","With CoQ10 & Collagen","Anti-Aging Effects","Removes Blemishes & Dark Spots","Brightens Dull Complexion","Stimulates Collagen & Elastin","Scavenges Free Radicals"],sku:"MIRACLE-ROYAL-GOLD-120K",volume:"6 Sessions",stock:10},{id:48,name:"Evgenis Totipotent Embryonic Stem Cell (ETESC) Injection",category:"Injection",brand:"Evgenis",price:28500,comparePrice:3e4,image:"/image/evgenis/etescinjection-1.jpeg",images:["/image/evgenis/etescinjection-1.jpeg","/image/evgenis/etescinjection-2.jpeg","/image/evgenis/etescinjection-3.jpeg","/image/evgenis/etescinjection-4.jpeg"],description:"WHO-GMP certified totipotent embryonic stem cell injection with glutathione for advanced skin rejuvenation, cellular repair, and anti-aging.",details:`
    <strong>Evgenis Totipotent Embryonic Stem Cell (ETESC) Injection</strong><br/><br/>
    Totipotent stem cells are embryonic stem cells that can differentiate into all the cells of an organism. They are present in the early stages of embryonic development. This advanced formulation combines totipotent stem cells with glutathione for comprehensive skin rejuvenation, cellular repair, and anti-aging benefits.<br/><br/>
    
    <strong>Key Features:</strong><br/>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Packaging Size: 6 Sessions per Box</li>
      <li>Stem Cell Type: Plant stem cells / Totipotent embryonic origin</li>
      <li>Form: Injection (IV drips)</li>
      <li>Composition: Fertilized oocyte, First blastomeres, Glutathione, Stem Cell complex</li>
      <li>Manufacturer: Evgenis</li>
      <li>Grade: Cosmetic grade</li>
      <li>Certification: WHO-GMP</li>
      <li>Shelf Life: 36 months</li>
      <li>Storage Condition: Cool & dry place</li>
      <li>Application: Cosmetic / Skin rejuvenation</li>
    </ul>
    <br/>

    <strong>Scientific Background:</strong> Totipotent cells can give rise to all embryonic and adult lineages. The development of identical twins is an example of totipotent cells differentiating into separate trajectories. Primordial germ cells (PGCs) are the founder cells of the germline responsible for creating new organisms.<br/><br/>

    <strong>Benefits:</strong>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Advanced cellular repair and regeneration</li>
      <li>Skin rejuvenation and anti-aging</li>
      <li>Improves skin texture and elasticity</li>
      <li>Supports overall skin health</li>
      <li>Glutathione provides antioxidant protection</li>
      <li>Promotes youthful, radiant complexion</li>
    </ul>
    <br/>

    <strong>Usage:</strong> Administered intravenously under professional supervision. Follow healthcare provider's recommendations.<br/><br/>

    <em class="text-xs text-gray-400">Note: Professional use only. WHO-GMP certified. Consult dermatologist before use.</em>
    `,benefits:["6 Sessions Pack","Totipotent Stem Cells","WHO-GMP Certified","Glutathione Enriched","Cellular Repair","Skin Rejuvenation","Anti-Aging","Cosmetic Grade"],sku:"EVGENIS-ETESC-6S",volume:"6 Sessions",stock:10},{id:49,name:"ISkin Radianz Blu Cell Glutathione 1200 mg Skin Whitening Injection",category:"Injection",brand:"iSkin",price:16500,comparePrice:25e3,image:"/image/iskin/radianz-blu-cell-2.jpeg",images:["/image/iskin/radianz-blu-cell-2.jpeg","/image/iskin/radianz-blu-cell-3.jpeg","/image/iskin/radianz-blu-cell-4.jpeg","/image/iskin/radianz-blu-cell-5.jpeg","/image/iskin/radianz-blu-cell-6.jpeg","/image/iskin/radianz-blu-cell-7.jpeg","/image/iskin/radianz-blu-cell-8.jpeg"],description:"Advanced Swiss technology skin whitening injection with Picomized NAD+, Glutathione, and Mineral Silicate to rejuvenate, detoxify, and brighten skin.",details:`
    <strong>ISkin Radianz Blu Cell Glutathione 1200 mg Skin Whitening Injection</strong><br/><br/>
    A groundbreaking skincare formula designed to rejuvenate, protect, and brighten your skin from the inside out. Developed with advanced Swiss technology, this powerful solution targets aging at its source, helping you achieve healthier, more radiant skin.<br/><br/>
    
    <strong>Key Features:</strong><br/>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Brand: iSkin</li>
      <li>Strength: 1200 mg</li>
      <li>Packaging Size: 5 x 10 ml Vials per Box</li>
      <li>Form: Ampules</li>
      <li>Manufacturer: iSkin</li>
      <li>Grade Standard: AAA+++</li>
      <li>Usage: Skin Whitening</li>
    </ul>
    <br/>

    <strong>Key Ingredients & Benefits:</strong><br/>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li><strong>Picomized NAD+</strong> – Boosts cell energy, repairs DNA, and reduces fine lines for a youthful look</li>
      <li><strong>Picomized Marine Cellular Extracts</strong> – Enhances collagen, improves firmness, and reduces wrinkles</li>
      <li><strong>Picomized Phytowhite Tripeptide</strong> – Revitalizes, brightens, hydrates, and smooths skin</li>
      <li><strong>Picomized Mineral Silicate</strong> – Detoxifies, strengthens skin, and improves nutrient absorption</li>
      <li><strong>Picomized Glutathione</strong> – Powerful antioxidant that detoxifies, supports immunity, and brightens skin</li>
    </ul>
    <br/>

    <strong>Benefits:</strong>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Boosts cellular energy and DNA repair</li>
      <li>Reduces fine lines and wrinkles</li>
      <li>Enhances collagen production and skin firmness</li>
      <li>Brightens and hydrates skin</li>
      <li>Detoxifies and strengthens skin barrier</li>
      <li>Provides powerful antioxidant protection</li>
      <li>Improves overall radiance and youthful appearance</li>
    </ul>
    <br/>

    <strong>Usage:</strong> Administered intravenously under professional supervision. As directed by healthcare provider.<br/><br/>

    <em class="text-xs text-gray-400">Note: Developed with Swiss technology. Results may vary. Consult dermatologist before use.</em>
    `,benefits:["Picomized NAD+ Technology","Glutathione + Marine Extracts","DNA Repair & Cell Energy","Reduces Fine Lines & Wrinkles","Boosts Collagen & Firmness","Detoxifies & Brightens","AAA+++ Grade","Swiss Technology"],sku:"ISKIN-RADIANZ-BLU-1200",volume:"5 x 10 ml Vials",stock:10},{id:50,name:"Miracle White 80000mg Skin Whitening Injection",category:"Injection",brand:"Miracle White",price:9500,comparePrice:12e3,image:"/image/miracle-white/80000mg-1.jpeg",images:["/image/miracle-white/80000mg-1.jpeg","/image/miracle-white/80000mg-2.jpeg","/image/miracle-white/80000mg-3.jpeg","/image/miracle-white/80000mg-4.jpeg"],description:"Cutting-edge skin brightening injection that reduces dark spots and hyperpigmentation with Bakuchiol and Leontopodium Alpinum Callus Culture for even, luminous complexion.",details:`
    <strong>Miracle White 80000mg Skin Whitening Injection</strong><br/><br/>
    Unlock your skin's true radiance with the Miracle White Whitening Injection, a cutting-edge formula designed to dramatically reduce the appearance of dark spots and hyperpigmentation. This powerful treatment offers intense correction, regulating melanin production to promote a more even, luminous complexion. Infused with Bakuchiol, this formula gently diminishes hyperpigmentation and dark spots while enhancing skin brightness. The addition of Leontopodium Alpinum Callus Culture helps strengthen the skin's defenses against aging and environmental damage, restoring youthful vibrancy. With a targeted action delivery system, the Miracle White injection ensures optimal absorption of active compounds, providing heightened performance for long-lasting, noticeable results.<br/><br/>
    
    <strong>Key Features:</strong><br/>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Strength: 1200 mg (Glutathione complex, 80,000mg formula concentration)</li>
      <li>Packaging Size: 5 x 10 ml Vials per Box</li>
      <li>Manufacturer: Miracle White</li>
      <li>Usage: Skin Whitening</li>
    </ul>
    <br/>

    <strong>Benefits:</strong>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Intense correction – effectively inhibits melanin production to reduce dark spots and discoloration</li>
      <li>Regulates melanocytes – controls pigment production for even skin tone</li>
      <li>Bakuchiol – reduces hyperpigmentation and improves skin radiance</li>
      <li>Leontopodium Alpinum Callus Culture – strengthens skin resilience and restores youthful glow</li>
      <li>Targeted action – ensures precise delivery of ingredients for maximum results</li>
      <li>Heightened performance – optimized for long-lasting, visible improvements</li>
    </ul>
    <br/>

    <strong>Usage:</strong> As directed by healthcare professional. Administered intravenously under supervision.<br/><br/>

    <em class="text-xs text-gray-400">Note: Results may vary. Consult dermatologist before use.</em>
    `,benefits:["5 x 10 ml Vials","Inhibits Melanin Production","Reduces Dark Spots & Hyperpigmentation","With Bakuchiol","Leontopodium Alpinum Extract","Even & Luminous Complexion","Targeted Action Delivery","Long-Lasting Results"],sku:"MIRACLE-WHITE-80000-5X10",volume:"5 x 10 ml Vials",stock:10},{id:51,name:"ShiraYuki Snow White Japan Skin Whitening Injection - 180,000mg (40 sessions)",category:"Injection",brand:"ShiraYuki",price:16800,comparePrice:2e4,image:"/image/shirayuki/snow-white-180k-1.jpeg",images:["/image/shirayuki/snow-white-180k-1.jpeg","/image/shirayuki/snow-white-180k-2.jpeg","/image/shirayuki/snow-white-180k-3.jpeg","/image/shirayuki/snow-white-180k-4.jpeg"],description:"Bestselling Snow White Glutathione from Japan with 180,000mg potency. Anti-aging, reduces fine lines, melasma, uneven pigmentation, detoxifies, and stimulates collagen for youthful, glowing skin.",details:`
    <strong>ShiraYuki Snow White Japan Skin Whitening Injection - 180,000mg (40 sessions)</strong><br/><br/>
    As we age, our skin naturally undergoes changes, making it harder to maintain that youthful glow. Shirayuki, the bestselling Snow White Glutathione from Japan, offers a powerful solution. Its advanced anti-aging properties help reduce the appearance of fine lines and wrinkles, giving your skin a smoother, more refreshed look.<br/><br/>
    
    Formulated to target melasma and uneven pigmentation, Shirayuki promotes a brighter, more even complexion. Its detoxifying effect works from within to flush out harmful toxins, while its skin-healing benefits help reduce acne, fade scars, minimize pores, and repair damaged cells.<br/><br/>
    
    What sets Shirayuki apart is its ability to stimulate collagen production, firm and lift the skin, and support overall immune health. Whether you're dealing with signs of aging or stubborn skin issues, Shirayuki can help you achieve clear, glowing, and youthful skin—naturally.<br/><br/>
    
    <strong>Key Features:</strong><br/>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Strength: 180,000mg (total glutathione complex)</li>
      <li>Packaging: 40 vials (10 ml each) – 40 sessions</li>
      <li>Form: Lyophilized Powder</li>
      <li>Composition: Glutathione, Vitamin C, Collagen, Kojic Acid, Amino Acid, Thioctic Acid, Antioxidant, B6, Ascorbic Acid, AHA, DNA & RNA Extract, Hyaluronic Acid, Tranexamic Acid</li>
      <li>Route: IV Use Only</li>
      <li>Manufacturer: Whitening injection (Japan)</li>
    </ul>
    <br/>

    <strong>Benefits:</strong>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Reduces fine lines, wrinkles, and signs of aging</li>
      <li>Targets melasma and uneven pigmentation for brighter, even complexion</li>
      <li>Detoxifies body – flushes out harmful toxins</li>
      <li>Reduces acne, fades scars, minimizes pores, repairs damaged cells</li>
      <li>Stimulates collagen production – firms and lifts skin</li>
      <li>Supports overall immune health</li>
      <li>Promotes clear, glowing, youthful skin</li>
    </ul>
    <br/>

    <strong>Ingredients:</strong> High-Dose Glutathione, Kojic Acid, Collagen Extract, Amino Acid, Thioctic Acid, Antioxidant, Vitamin B6, Ascorbic Acid (Vitamin C), AHA, DNA & RNA Extract, Hyaluronic Acid, Tranexamic Acid.<br/><br/>

    <strong>Usage:</strong> Administer intravenously under professional supervision. Follow recommended protocol for 40 sessions.<br/><br/>

    <em class="text-xs text-gray-400">Note: Made in Japan. Results may vary. Consult dermatologist before use.</em>
    `,benefits:["40 Sessions Pack (40 vials)","Made in Japan","180,000mg Glutathione","Anti-Aging & Wrinkle Reduction","Targets Melasma & Hyperpigmentation","Detoxifies & Repairs Skin","Stimulates Collagen","With Hyaluronic Acid & Tranexamic Acid"],sku:"SHIRAYUKI-SNOW-WHITE-40S",volume:"40 Sessions",stock:10},{id:52,name:"Fivita 9900000 Glutathione Skin Whitening Injection",category:"Injection",brand:"Fivita",price:8800,comparePrice:2e4,image:"/image/fivita/9900000-1.jpeg",images:["/image/fivita/9900000-1.jpeg","/image/fivita/9900000-2.jpg","/image/fivita/9900000-3.jpeg","/image/fivita/9900000-4.jpeg"],description:"High-potency glutathione skin whitening injection by Dermatech Laboratories, designed to reduce hyperpigmentation, even skin tone, and provide antioxidant protection.",details:`
    <strong>Fivita 9900000 Glutathione Skin Whitening Injection</strong><br/><br/>
    A premium quality glutathione injection manufactured by Dermatech Laboratories, formulated to help lighten skin tone, reduce dark spots, and combat oxidative stress. Glutathione works as a master antioxidant, inhibiting melanin production and promoting a brighter, more even complexion.<br/><br/>
    
    <strong>Key Features:</strong><br/>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Strength: 1200 mg (per vial) / 9900000 IU formula strength</li>
      <li>Packaging Size: 10 ml vials</li>
      <li>Brand: Fivita</li>
      <li>Manufacturer: Dermatech Laboratories</li>
      <li>Packaging Type: Box</li>
      <li>Usage: Skin Whitening</li>
    </ul>
    <br/>

    <strong>Benefits:</strong>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Helps lighten skin and reduce hyperpigmentation</li>
      <li>Provides powerful antioxidant protection</li>
      <li>Supports detoxification and liver health</li>
      <li>Promotes even skin tone and radiance</li>
      <li>May help reduce signs of aging</li>
    </ul>
    <br/>

    <strong>Usage:</strong> Administer intravenously under professional supervision. Follow healthcare provider's dosage recommendations.<br/><br/>

    <em class="text-xs text-gray-400">Note: Results may vary. Consult dermatologist before use.</em>
    `,benefits:["High Potency Glutathione","Skin Lightening & Brightening","Reduces Hyperpigmentation","Antioxidant Protection","Detoxification Support","Even Skin Tone","Manufactured by Dermatech","IV Administration"],sku:"FIVITA-9900000-GLUTA",volume:"10 ml Vial",stock:10},{id:53,name:"Orange Vita Glow Papaya Skin Whitening Soap For Glowing Face & Body",category:"Soap",brand:"Vita Glow",price:600,comparePrice:800,image:"/image/vitaglow/papaya-soap-1.jpeg",images:["/image/vitaglow/papaya-soap-1.jpeg","/image/vitaglow/papaya-soap-2.jpeg","/image/vitaglow/papaya-soap-3.jpeg","/image/vitaglow/papaya-soap-4.jpeg"],description:"Papaya-enriched skin whitening soap that exfoliates, treats acne, reduces hyperpigmentation, balances oil, and leaves skin clear, smooth, and radiant.",details:`
    <strong>Orange Vita Glow Papaya Skin Whitening Soap For Glowing Face & Body</strong><br/><br/>
    Vita Glow Papaya Soap has vitamins that promote healthy skin. Using papaya soap regularly can exfoliate your skin, treat acne, and even reduce hyperpigmentation, resulting in clearer, smoother skin. It helps balance oil production and softens dry skin. The papaya soap helps clear blemishes and acne scars from the body, gently cleanses the skin, and leaves you refreshed.<br/><br/>
    
    <strong>Key Features:</strong><br/>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Packaging Size: 135g</li>
      <li>Color: Orange</li>
      <li>Form: Soap</li>
      <li>Type Of Packaging: Pack of 3, Single available</li>
      <li>Manufactured By: Tibat</li>
      <li>Ideal For: Men & Women</li>
      <li>Usage: Face & Body</li>
    </ul>
    <br/>

    <strong>Ingredients:</strong><br/>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Sodium Palmitate</li>
      <li>Sodium Pal Kernelate</li>
      <li>Fragrance</li>
      <li>Salicylic Acid</li>
      <li>Glycerin</li>
      <li>Mineral Oil</li>
      <li>Carica Papaya Enzyme</li>
      <li>Alpha Tocopherol Acetate (Vitamin E)</li>
    </ul>
    <br/>

    <strong>Benefits:</strong>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Skin brightening soap with great anti-aging benefits</li>
      <li>Improves skin and lightens complexion</li>
      <li>Promotes soft, youthful & radiant skin</li>
      <li>Enriched with Papaya fruit extracts & Vitamin E</li>
      <li>Suitable for all skin types</li>
      <li>Exfoliates dead skin cells and treats acne</li>
      <li>Reduces hyperpigmentation, blemishes, and acne scars</li>
      <li>Balances oil production and softens dry skin</li>
    </ul>
    <br/>

    <strong>How to Use:</strong> Apply onto wet skin (both face and body), lather carefully, and rinse with lukewarm or cold water. Use daily for best results.<br/><br/>

    <em class="text-xs text-gray-400">Note: For external use only. Avoid contact with eyes. Discontinue if irritation occurs.</em>
    `,benefits:["135g Bar","Papaya Enzyme Enriched","Skin Brightening","Anti-Aging Benefits","Reduces Hyperpigmentation","Treats Acne & Scars","Softens & Balances Oil","Suitable for All Skin Types"],sku:"VITA-GLOW-PAPAYA-SOAP-135G",volume:"135g",stock:10},{id:54,name:"Botox 100 Iu",category:"C & D Fillers",brand:"Allergan",price:12500,comparePrice:15e3,image:"/image/allergan/botox-100iu-1.jpeg",images:["/image/allergan/botox-100iu-1.jpeg","/image/allergan/botox-100iu-2.jpeg","/image/allergan/botox-100iu-3.jpeg","/image/allergan/botox-100iu-4.jpeg"],description:"Original and most trusted botulinum toxin type A. Temporarily relaxes muscles to reduce wrinkles and treat medical conditions.",details:`
    <strong>Botox 100 Iu</strong><br/><br/>
    Botox is the original and most trusted botulinum toxin type A brand, widely used in both aesthetic and medical treatments. It works by temporarily relaxing muscles, reducing wrinkles and treating certain medical conditions.<br/><br/>
    
    <strong>Key Features:</strong><br/>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Strength: 100 Units per vial</li>
      <li>Brand: Allergan</li>
      <li>Country of Origin: Ireland</li>
      <li>Form: Lyophilized powder for injection</li>
      <li>Toxin Type: Type A</li>
      <li>Packaging Type: Vial</li>
      <li>Preservative Status: Preservative-free</li>
    </ul>
    <br/>

    <strong>Composition:</strong> Active ingredient – Botulinum toxin type A. Needs reconstitution with preservative-free saline before injection.<br/><br/>

    <strong>How It Works:</strong>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Blocks nerve signals to muscles</li>
      <li>Prevents muscle contraction</li>
      <li>Results in smoother skin & reduced wrinkles</li>
      <li>Effects are temporary – muscle activity gradually returns</li>
    </ul>
    <br/>

    <strong>Applications:</strong> Aesthetic (glabellar lines, crow's feet, forehead wrinkles) and medical (migraine, hyperhidrosis, muscle spasticity, etc.).<br/><br/>

    <strong>Storage:</strong> Must be refrigerated (2°C to 8°C). Reconstituted product should be used within 24 hours.<br/><br/>

    <em class="text-xs text-gray-400">Note: Professional use only. Must be administered by licensed healthcare professional. Consult physician for suitability.</em>
    `,benefits:["100 Units per Vial","Made in Ireland","Original Allergan Botox","Reduces Wrinkles","Treats Medical Conditions","Preservative-Free","Trusted Worldwide","Professional Grade"],sku:"ALLERGAN-BOTOX-100IU",volume:"1 Vial",stock:10},{id:55,name:"Botox Allergan 100 Iu Botox Cosmetic",category:"C & D Fillers",brand:"Allergan",price:9500,comparePrice:12500,image:"/image/allergan/botox-cosmetic-100iu-1.jpeg",images:["/image/allergan/botox-cosmetic-100iu-1.jpeg","/image/allergan/botox-cosmetic-100iu-2.jpeg","/image/allergan/botox-cosmetic-100iu-3.jpeg","/image/allergan/botox-cosmetic-100iu-4.jpeg"],description:"Purified botulinum toxin type A injection used to temporarily smooth moderate-to-severe wrinkles like crow's feet, forehead lines, and frown lines.",details:`
    <strong>Botox Allergan 100 Iu Botox Cosmetic</strong><br/><br/>
    Allergan Botox Cosmetic 100 IU is a prescription-only, purified botulinum toxin type A injection used to temporarily smooth moderate-to-severe wrinkles, such as crow's feet, forehead lines, and frown lines. It works by blocking nerve signals to relax facial muscles. Results typically last 9-12 months, with treatments administered by qualified professionals.<br/><br/>
    
    <strong>Key Features:</strong><br/>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Strength: 100 Units per vial</li>
      <li>Brand: Allergan</li>
      <li>Application: Cosmetic (wrinkle reduction)</li>
      <li>Country of Origin: USA</li>
      <li>Form: Lyophilized powder for injection</li>
      <li>Packaging Type: Vial</li>
      <li>Preservative Status: Preservative-free</li>
    </ul>
    <br/>

    <strong>Treatment Areas:</strong> Forehead lines, crow's feet, and glabella lines (frown lines).<br/><br/>

    <strong>Duration:</strong> Effects generally last 3 to 6 months (cosmetic duration). Results may extend with repeat treatments.<br/><br/>

    <strong>Storage:</strong> Should be stored between 20°C and 25°C (refrigerated before reconstitution). Reconstituted product should be used within 24 hours.<br/><br/>

    <strong>Side Effects:</strong> Rare but can include bruising, swelling, or flu-like symptoms. Must be injected by a licensed medical professional.<br/><br/>

    <strong>How It Works:</strong> Blocks nerve signals to muscles, preventing contraction, resulting in smoother skin and reduced appearance of wrinkles.<br/><br/>

    <em class="text-xs text-gray-400">Note: Professional use only. Must be administered by licensed healthcare professional. Consult physician for suitability.</em>
    `,benefits:["100 Units per Vial","Made in USA","Original Allergan","Smooths Forehead Lines","Reduces Crow's Feet","Treats Frown Lines","Preservative-Free","Professional Grade"],sku:"ALLERGAN-BOTOX-COSMETIC-100",volume:"1 Vial",stock:10},{id:56,name:"L Carnitine 45g Weight Loss & Fat Loss Injection, 2000 mg",category:"Weight Loss",brand:"Ratiopharm",price:8e3,comparePrice:1e4,image:"/image/l-carnitine/45g-weight-loss-1.jpg",images:["/image/l-carnitine/45g-weight-loss-1.jpg","/image/l-carnitine/45g-weight-loss-2.jpeg","/image/l-carnitine/45g-weight-loss-3.jpeg","/image/l-carnitine/45g-weight-loss-4.jpeg"],description:"L-Carnitine + CLA 45g injection from Germany. Breaks down excess fat, tightens body, converts fat to muscle, and supports weight loss, energy, and heart health.",details:`
    <strong>L Carnitine 45g Weight Loss & Fat Loss Injection (2000 mg)</strong><br/><br/>
    L-CARNITINE + CLA 45G (10 BOTTLE X 10 ML/BOX) – Lose weight quickly. Breaks down excess fat and tightens the body in the best way. L-Car plus CLA 45 grams, the newest from Germany. Contains CLA that will convert fat into muscle, reduce the problem of loose muscles, and help achieve a firm, well-proportioned shape. See results from the first use. Lose weight safely.<br/><br/>
    
    <strong>Key Features:</strong><br/>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Strength: 2000 mg per vial</li>
      <li>Pack Size: 10 ml per vial – 10 vials per box (total 45g active complex)</li>
      <li>Form: Injection</li>
      <li>Composition: L-Carnitine, CLA, PROBIO</li>
      <li>Manufacturer: Ratiopharm (Germany)</li>
      <li>Shelf Life: 36 months</li>
      <li>Prescription/Non-Prescription: Non-Prescription</li>
    </ul>
    <br/>

    <strong>Benefits of L-Carnitine:</strong>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Slows down aging – makes cells last longer</li>
      <li>Lowers triglycerides and increases HDL (good cholesterol)</li>
      <li>Helps prevent heart disease and heart failure</li>
      <li>Supports weight loss, especially when reducing starchy foods</li>
      <li>Increases natural energy levels without damage</li>
      <li>Improves exercise endurance and protects tissues from oxygen deficiency</li>
      <li>Boosts immune system function</li>
      <li>Reduces nerve cell damage – may help prevent Alzheimer's progression</li>
      <li>Positive effect on mental health and stress reduction</li>
      <li>Supports liver function and overall health</li>
    </ul>
    <br/>

    <strong>Recommended Dosage (Injection Method):</strong>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Weight control: 1–2 vials IV per injection every 4 days</li>
      <li>Subcutaneous fat management: 1–2 vials subcutaneously</li>
      <li>Anti-aging / health management: 10 vials divided over 30 days</li>
    </ul>
    <br/>

    <strong>Product Details:</strong> L-Carnitine 45g (10 bottles x 10 ml per box). Made in Germany. More effective with CLA to convert fat into muscle.<br/><br/>

    <em class="text-xs text-gray-400">Note: Results may vary. Consult healthcare professional before use. Not a substitute for diet and exercise.</em>
    `,benefits:["10 Vials (10ml each)","Made in Germany","2000 mg Strength","L-Carnitine + CLA + PROBIO","Breaks Down Excess Fat","Converts Fat to Muscle","Boosts Energy & Stamina","Supports Heart & Liver Health"],sku:"RATIOPHARM-LCARNITINE-45G",volume:"10 Vials (10ml each)",stock:10},{id:57,name:"Glutax 35000000GS Sakura Glutathione Skin Whitening Injection",category:"Injection",brand:"Glutax",price:9500,comparePrice:35e3,image:"/image/glutax/sakura-35000000gs-1.jpeg",images:["/image/glutax/sakura-35000000gs-1.jpeg","/image/glutax/sakura-35000000gs-2.jpeg","/image/glutax/sakura-35000000gs-3.jpeg","/image/glutax/sakura-35000000gs-4.jpeg"],description:"Sakura stem cell glutathione injection with SPF 100 UV protection. Provides whitening, anti-aging, collagen boost, and skin firming with Nano Glutathione technology.",details:`
    <strong>Glutax 35000000GS Sakura Glutathione Skin Whitening Injection</strong><br/><br/>
    One of the most reliable L-Glutathione injections worldwide. Helps maintain Nano l-Glutathione at high levels in your body, even when you are not undergoing any skin whitening treatment. Formulated with Sakura stem cell extract and SPF 100 UV protection.<br/><br/>
    
    <strong>Key Ingredients:</strong><br/>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Nano Glutathione – 35,000,000 mg</li>
      <li>Acido Alfa Lipoico (Alpha Lipoic Acid) – 250,000 mg</li>
      <li>Growth Factor (EGF) – 150,000 mg</li>
      <li>Multivitaminico – 150,000 mg</li>
      <li>Grape Seed Extract – 150,000 mg</li>
      <li>Sakura Extract Stem Cell – 100,000 mg</li>
      <li>RNA White Cells – 100,000 mg</li>
      <li>Acido Codico (Kojic Acid) – 50,000 mg</li>
      <li>Collagen Natural – 50,000 mg</li>
      <li>RNA HA – 15,000 mg</li>
      <li>Pro Coenzyme Q10 – 15,000 mg</li>
      <li>Selenio – 80,000 mg</li>
    </ul>
    <br/>

    <strong>Key Features:</strong><br/>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Strength: 35,000,000 mg Glutathione complex</li>
      <li>Packaging: 10 sessions per box</li>
      <li>Formulation: Lyophilized Powder</li>
      <li>Injection Type: IV</li>
      <li>Manufactured By: Switzerland | Country of Origin: Italy</li>
      <li>Grade Standard: A+</li>
      <li>Vegetarian: Yes | Gender: Men & Women</li>
      <li>No Side Effects</li>
    </ul>
    <br/>

    <strong>Benefits:</strong>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Anti-aging lightening along with skin lightening</li>
      <li>Skin becomes whiter and brighter</li>
      <li>Reduces pimples and acne</li>
      <li>SPF 100 sun light protection (UVR)</li>
      <li>Increases collagen – flawless, firm, elastic skin</li>
      <li>Tightens pores and improves skin complexion</li>
      <li>Inhibits melanocyte proliferation</li>
      <li>Nourishes and firms the skin</li>
      <li>Whitens skin and lightens scars</li>
      <li>Fair and radiant skin tone</li>
    </ul>
    <br/>

    <strong>Recommended Dosage:</strong> Intravenously (IV) once a week. Then reduce to 1 injection every 2 weeks for maintenance. For better results, use once every 4–5 days.<br/><br/>

    <strong>Not Suitable For:</strong> Pregnant women.<br/><br/>

    <em class="text-xs text-gray-400">Note: PCD Pharma also available. Results may vary. Consult dermatologist before use.</em>
    `,benefits:["10 Sessions Pack","Made in Switzerland / Italy","35,000,000mg Glutathione","Sakura Stem Cell","SPF 100 UV Protection","Anti-Aging & Whitening","Boosts Collagen & Elasticity","No Side Effects"],sku:"GLUTAX-SAKURA-35M",volume:"10 Sessions",stock:10},{id:58,name:"Miracle White Capsule 120000mg",category:"Capsules",brand:"Miracle White",price:6500,comparePrice:12e3,image:"/image/miracle-white/capsule-120000mg-1.jpg",images:["/image/miracle-white/capsule-120000mg-1.jpg","/image/miracle-white/capsule-120000mg-2.jpeg","/image/miracle-white/capsule-120000mg-3.jpeg","/image/miracle-white/capsule-120000mg-4.jpeg"],description:"Nano concentrated glutathione capsules for skin whitening, anti-aging, collagen boost, and antioxidant protection. Made in Switzerland.",details:`
    <strong>Miracle White Capsule 120000mg</strong><br/><br/>
    Miracle White Whitening Plus+ has been evolved into a capsule by Miracle White Booster 120000mg that helps accelerate to beautify our skin. Our new formulation with the highest level of brightening ingredients, including Nano Concentrated Glutathione, addresses aging spots and dull complexion. Clinically proven to improve skin tones, texture, fine lines and wrinkles. Miracle White not only lightens your skin tone, makes it smooth and free of blemishes and dark spots, brightens a dull complexion but also has anti-aging factors.<br/><br/>
    
    <strong>Key Features:</strong><br/>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Strength: 120,000mg (total active complex)</li>
      <li>Packaging Size: 60 Tablets per Bottle</li>
      <li>Packaging Type: Box</li>
      <li>Brand: Miracle White</li>
      <li>Manufactured By: Miracle White</li>
      <li>Country of Origin: Switzerland</li>
    </ul>
    <br/>

    <strong>Composition:</strong><br/>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Royal Gold Nano Concentrated Glutathione – 120,000mg</li>
      <li>Coenzyme Q10 – 70,000mg</li>
      <li>Melanin Inhibitor Plus Collagen – 5,000mg</li>
      <li>Ascorbic Acid (Vitamin C) – 5,000mg</li>
      <li>Kojic Acid – 3,600mg</li>
      <li>Epidermal Growth Factor (EGF) – 3,000mg</li>
      <li>Alpha Lipoic Acid (ALA) – 500mg</li>
      <li>L-Cysteine – 700mg</li>
      <li>Multivitamin – 1,200mg</li>
      <li>Thioctic Acid – 1,200mg</li>
    </ul>
    <br/>

    <strong>Benefits:</strong>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Improves the health of every cell</li>
      <li>Increases energy production in skin cells</li>
      <li>Promotes antioxidant protection</li>
      <li>Helps lower blood sugar levels</li>
      <li>Inhibits and prevents formation of tyrosine</li>
      <li>Prevents dark spots</li>
      <li>Stimulates collagen production for tighter skin</li>
      <li>Boosts production of collagen and elastin</li>
      <li>Reduces effect of aging from inside out</li>
      <li>Scavenges free radicals leading to premature aging and wrinkling</li>
    </ul>
    <br/>

    <strong>How to Use:</strong> 2 capsules a day or as directed by doctor or pharmacist.<br/><br/>

    <strong>Not Suitable For:</strong> Breastfeeding and pregnant women, women during menstruation, vitamin allergies, patients with cardiovascular problems.<br/><br/>

    <em class="text-xs text-gray-400">Note: Made in Switzerland. Results may vary. Consult dermatologist before use.</em>
    `,benefits:["60 Capsules per Bottle","Made in Switzerland","120,000mg Glutathione Complex","With CoQ10 & Collagen","Anti-Aging & Antioxidant","Prevents Dark Spots","Stimulates Collagen & Elastin","Scavenges Free Radicals"],sku:"MIRACLE-WHITE-CAPSULE-120K",volume:"60 Capsules",stock:10},{id:60,name:"Glutax 2500 Gs Elixir Essence Glutathione Skin Whitening Injection 12 Sessions",category:"Injection",brand:"Glutax",price:12800,comparePrice:18e3,image:"/image/glutax/elixir-essence-1.png",images:["/image/glutax/elixir-essence-1.png","/image/glutax/elixir-essence-2.jpeg","/image/glutax/elixir-essence-3.jpeg","/image/glutax/elixir-essence-4.jpeg"],description:"Glutathione skin whitening injection with recombined stem cells (grape, apple, argan, rose), collagen, multivitamins, and CoQ10 for firming, detox, anti-aging, and even skin tone.",details:`
    <strong>Glutax 2500GS Elixir Essence Glutathione Whitening Injections (12 Sessions)</strong><br/><br/>
    Despite age and gender, people want soft plump spotless skin. Glutax 2500 GS Elixir Essence reduces melanin, making skin neat and clean. Trusted worldwide, it contains high L-Glutathione with vitamin C to restore skin texture. Efficacy approved by pathologists in Italian laboratories.<br/><br/>
    
    <strong>Key Features:</strong><br/>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>12 Sessions per box</li>
      <li>IV only – once weekly</li>
      <li>Made in Italy | Grade A | Vegetarian</li>
      <li>Dermatologist tested – no side effects</li>
      <li>Shelf life: 36 months</li>
      <li>Not suitable for: breastfeeding, pregnancy, vitamin allergies, cardiovascular issues</li>
    </ul>
    <br/>

    <strong>Composition:</strong><br/>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>L-Acido Ascorbico (Vitamin C) – 3000mg</li>
      <li>Multivitamins – 3500mg</li>
      <li>Natural Collagen – 900mg</li>
      <li>UltraCell Estratto – 800mg</li>
      <li>Epidermal Growth Factor – 2000mg</li>
      <li>Pro Coenzyme Q10 – 600mg</li>
      <li>Cinnamomum Subavenium Extract – 350mg</li>
      <li>Thioctic Acid (800mg) + Selenium (600mg)</li>
      <li>Recombined Stem Cells – 800mg (Grape, Apple, Argan Fruit, Rose Placenta Extract)</li>
      <li>Vitamin B1 (100mg), B6 (50mg), B12 (1000mcg)</li>
    </ul>
    <br/>

    <strong>Benefits:</strong>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Nourishes and firms skin</li>
      <li>Detoxifies liver, lungs, intestine, kidneys</li>
      <li>Removes dark spots and scars</li>
      <li>Boosts collagen production for elasticity</li>
      <li>Shrinks pores and prevents acne</li>
      <li>Anti-aging – reduces fine lines and wrinkles</li>
    </ul>
    <br/>

    <strong>How to Use:</strong> Reconstitute powder with 100ml saline, administer slow IV once a week.<br/><br/>

    <strong>Expiry:</strong> Jul 2027<br/><br/>

    <em class="text-xs text-gray-400">Note: Results vary. Professional use only. Consult dermatologist before use.</em>
    `,benefits:["12 Sessions Pack","Made in Italy","Recombined Stem Cells (Grape, Apple, Argan, Rose)","2900mg Vitamin C + Collagen","Firms & Nourishes Skin","Detoxifies & Removes Scars","Anti-Aging & Pore Minimizing","Dermatologist Tested"],sku:"GLUTAX-2500GS-ELIXIR-12S",volume:"12 Sessions",stock:10},{id:62,name:"Glutax 990000GH DualNA Hydra Whitening Glutathione Injection",category:"Injection",brand:"Glutax",price:9500,comparePrice:12500,image:"/image/glutax/990000gh-hydra-1.png",images:["/image/glutax/990000gh-hydra-1.png","/image/glutax/990000gh-hydra-2.jpg","/image/glutax/990000gh-hydra-3.png","/image/glutax/990000gh-hydra-4.png"],description:"DualNA Hydra whitening glutathione injection with recombined stem cells, EGF, collagen, and multivitamins for deep hydration, skin brightening, and rejuvenation.",details:`
    <strong>Glutax 990000GH DualNA Hydra Whitening Glutathione Injection</strong><br/><br/>
    Advanced DualNA Hydra formulation for deep skin whitening, hydration, and rejuvenation. Combines high-potency glutathione with recombined stem cells, epidermal growth factor, collagen, and multivitamins to brighten complexion, reduce pigmentation, and improve skin elasticity.<br/><br/>
    
    <strong>Composition (Per Box – 4 Sessions):</strong><br/>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>DNA/RNA Hydra Glutathione – 990,000 g</li>
      <li>DNA/RNA Hydra Multivitaminico – 180,000 mg</li>
      <li>DNA/RNA Hydra Acido Cogico (Kojic Acid) – 12,500 mg</li>
      <li>DNA/RNA Hydra Epidermal Growth Factor – 9,000 mg</li>
      <li>DNA/RNA Hydra Natural Collagen – 9,000 mg</li>
      <li>DNA/RNA Hydra White Elements – 5,800 mg</li>
      <li>DNA/RNA Hydra Selenio – 5,000 mg</li>
      <li>DNA/RNA Hydra Recombined Stem Cell – 1,880 mg (Multi Fruits & Plants Stemcell Extract)</li>
    </ul>
    <br/>

    <strong>Key Features:</strong><br/>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Packaging: 4 Sessions (4 Sets) per Box</li>
      <li>Form: Injection (IV)</li>
      <li>Grade Standard: AA+</li>
      <li>Manufactured By: Dermedical Skin Science</li>
      <li>Shelf Life: 36 Months</li>
      <li>Usage: Skin Whitening</li>
    </ul>
    <br/>

    <strong>Benefits:</strong>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Deep Hydration with DualNA technology</li>
      <li>Whitens skin and lightens scars</li>
      <li>Reduces pigmentation and dark spots</li>
      <li>Stimulates collagen for firm, elastic skin</li>
      <li>Anti-aging with EGF and stem cells</li>
      <li>Improves overall skin radiance and tone</li>
    </ul>
    <br/>

    <strong>Not Suitable For:</strong> Breastfeeding women, during menstruation, vitamin allergies, pregnant women, cardiovascular problems.<br/><br/>

    <strong>How to Use:</strong> Administer intravenously (IV) under professional supervision. Follow healthcare provider’s dosage schedule.<br/><br/>

    <em class="text-xs text-gray-400">Note: Results may vary. Professional use only. Consult dermatologist before use.</em>
    `,benefits:["4 Sessions Pack","990,000g Glutathione","DualNA Hydra Technology","Recombined Stem Cells","With EGF & Collagen","Deep Hydration & Whitening","Reduces Pigmentation","Anti-Aging"],sku:"GLUTAX-990000GH-HYDRA",volume:"4 Sessions",stock:10},{id:63,name:"Glutax 8800000gs Supreme Pico Cell Absorption Glutathione Injection",category:"Injection",brand:"Glutax",price:8800,comparePrice:12500,image:"/image/glutax/supreme-pico-8800000-1.png",images:["/image/glutax/supreme-pico-8800000-1.png","/image/glutax/supreme-pico-8800000-2.jpeg","/image/glutax/supreme-pico-8800000-3.jpeg","/image/glutax/supreme-pico-8800000-4.jpeg"],description:"Premium skin whitening injection with Pico Cell Absorption Technology, featuring glutathione, collagen, vitamin C, placenta extract, and alpha lipoic acid for whitening, anti-aging, and rejuvenation.",details:`
    <strong>Glutax 8800000gs Supreme Pico Cell Absorption Glutathione Injection</strong><br/><br/>
    A top-tier injectable skin whitening product from Italy, known for potent ingredients and advanced formulation to improve skin tone, texture, and overall appearance. Uses Pico Cell Absorption Technology for enhanced delivery of active ingredients.<br/><br/>
    
    <strong>Key Features:</strong><br/>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Packaging: 10 Sessions per Box</li>
      <li>Pico Cell Absorption Technology for efficient absorption</li>
      <li>Contains Glutathione, Alpha Lipoic Acid, Collagen, Vitamin C, Placenta Extract, DNA Glutokines</li>
      <li>Manufactured in Italy</li>
    </ul>
    <br/>

    <strong>Benefits:</strong>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Skin whitening by inhibiting melanin production</li>
      <li>Anti-aging – improves elasticity, reduces wrinkles</li>
      <li>Skin rejuvenation – moisturizes and enhances texture</li>
      <li>Antioxidant protection against free radicals</li>
      <li>Quick and noticeable results with advanced absorption</li>
    </ul>
    <br/>

    <strong>How to Use:</strong> Administer intravenously under professional supervision. Follow healthcare provider's dosage schedule.<br/><br/>

    <strong>FAQs:</strong> Results within few weeks; safe for all skin types; can be used with other compatible skincare products.<br/><br/>

    <em class="text-xs text-gray-400">Note: Results may vary. Professional use only. Consult dermatologist before use.</em>
    `,benefits:["10 Sessions Pack","Made in Italy","Pico Cell Absorption Technology","Glutathione + Collagen + Vitamin C","Skin Whitening & Anti-Aging","Rejuvenates & Moisturizes","Antioxidant Protection","Quick Results"],sku:"GLUTAX-SUPREME-PICO-8800000",volume:"10 Sessions",stock:0},{id:64,name:"Bihaku Premium Glutathione Skin Whitening Injection",category:"Injection",brand:"Bihaku",price:13500,comparePrice:18500,image:"/image/bihaku/premium-glutathione-1.jpeg",images:["/image/bihaku/premium-glutathione-1.jpeg","/image/bihaku/premium-glutathione-2.jpg","/image/bihaku/premium-glutathione-3.jpg","/image/bihaku/premium-glutathione-4.jpg"],description:"Japanese glutathione injection with L-Glutathione, Vitamin C, and Alpha-Lipoic Acid. Reduces melanin, evens skin tone, provides antioxidant protection, and supports skin rejuvenation.",details:`
    <strong>Bihaku Premium Glutathione Skin Whitening Injection</strong><br/><br/>
    A highly acclaimed skin whitening injection recognized for its superior formulation and proven effectiveness. Crafted with meticulous attention to detail and quality, this product encapsulates the best of Japanese skincare innovation, offering users a safe and effective solution to achieve brighter, more radiant skin.<br/><br/>
    
    <strong>Key Ingredients:</strong><br/>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li><strong>L-Glutathione:</strong> Powerful antioxidant that reduces oxidative stress, detoxifies skin, and inhibits melanin production</li>
      <li><strong>Vitamin C:</strong> Aids collagen synthesis, skin repair, and enhances glutathione effectiveness</li>
      <li><strong>Alpha-Lipoic Acid:</strong> Antioxidant that enhances glutathione and vitamin C properties for skin rejuvenation</li>
    </ul>
    <br/>

    <strong>Benefits:</strong><br/>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li><strong>Comprehensive Skin Whitening:</strong> Reduces melanin production, lightens skin naturally, evens skin tone, reduces dark spots and hyperpigmentation</li>
      <li><strong>Antioxidant Protection:</strong> Protects cells from oxidative stress, free radicals, pollutants, UV radiation; assists liver detoxification</li>
      <li><strong>Skin Rejuvenation & Repair:</strong> Promotes cell renewal, repairs damaged skin, enhances collagen synthesis for elasticity and firmness, reduces wrinkles and sagging</li>
      <li><strong>Boosts Immune Function:</strong> Maintains balanced immune system, prevents skin disorders</li>
      <li><strong>Anti-Inflammatory Properties:</strong> Reduces skin inflammation, beneficial for acne and eczema</li>
      <li><strong>Supports Overall Well-Being:</strong> Increases energy levels, improves mental clarity</li>
      <li><strong>Holistic Skin Care:</strong> Works from inside out, enhances other skincare products</li>
      <li><strong>Safe for Long-Term Use:</strong> No significant side effects when used as directed</li>
    </ul>
    <br/>

    <strong>Origin:</strong> Japan<br/>
    <strong>Administration:</strong> Intravenous (IV) injection under professional supervision.<br/><br/>

    <em class="text-xs text-gray-400">Note: Professional use only. Results may vary. Consult physician before use.</em>
    `,benefits:["Made in Japan","L-Glutathione + Vitamin C + ALA","Reduces Melanin Production","Evens Skin Tone & Dark Spots","Antioxidant & Detox Support","Promotes Collagen & Elasticity","Anti-Inflammatory","IV Administration"],sku:"BIHAKU-PREMIUM-GLUTA",volume:"1 Vial",stock:10},{id:65,name:"Aqua Skin Glutathione and Collagen Capsules",category:"Capsules",brand:"Aqua Skin",price:4e3,comparePrice:7e3,image:"/image/aqua/glutathione-collagen-capsules-1.jpg",images:["/image/aqua/glutathione-collagen-capsules-1.jpg","/image/aqua-skin/glutathione-collagen-capsules-2.jpeg","/image/aqua-skin/glutathione-collagen-capsules-3.jpeg","/image/aqua-skin/glutathione-collagen-capsules-4.jpeg"],description:"Made in Japan glutathione and collagen capsules with N-Acetyl L-Cysteine and pearl powder. Supports skin whitening, hydration, elasticity, and overall wellness.",details:`
    <strong>Aqua Skin Glutathione and Collagen Capsules – Made In Japan</strong><br/><br/>
    An efficient glutathione supplement in an elegant frosted glass bottle. Contains powerful ingredients: L-Glutathione (most effective antioxidant), Premium Collagen (for vibrant skin), N-Acetyl L-Cysteine (enhances glutathione effect and immune system). Certified by Japan Ministry of Health, FDA, GMP, HALAL, SGS, HACCP.<br/><br/>
    
    <strong>Key Ingredients:</strong><br/>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Premium Collagen Peptide (Bovine) – reduces wrinkles, fine lines, age spots, maintains skin moisture</li>
      <li>Glutathione – 100mg per capsule, converts melanin to lighter color</li>
      <li>N-Acetyl L-Cysteine – promotes stronger glutathione effect, improves fertility, brain health, reduces kidney/liver damage, supports blood sugar and immune function</li>
      <li>Pearl Powder – rich in amino acids, trace minerals, calcium, antioxidants; lightens skin, boosts collagen, improves stress and sleep</li>
    </ul>
    <br/>

    <strong>Key Features:</strong><br/>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Country of Origin: Japan</li>
      <li>Paraben Free & Organic: Yes</li>
      <li>Packaging: 1 Bottle (60 Capsules)</li>
      <li>Expiry: Dec 2026</li>
      <li>Certified by Japan Ministry of Health, FDA, GMP, HALAL, SGS, HACCP</li>
    </ul>
    <br/>

    <strong>Benefits:</strong>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Improves skin hydration and elasticity</li>
      <li>Promotes healthier joints</li>
      <li>Increases muscle mass</li>
      <li>Converts melanin to lighter color</li>
      <li>Neutralizes free radicals</li>
      <li>Helps prevent kidney and liver damage</li>
      <li>Increases brain and heart health</li>
      <li>May maintain blood glucose by reducing inflammation of fat cells</li>
      <li>Boosts glutathione levels and immune function</li>
    </ul>
    <br/>

    <em class="text-xs text-gray-400">Note: Results may vary from person to person. Consult dermatologist before use.</em>
    `,benefits:["Made in Japan","60 Capsules per Bottle","Glutathione + Collagen + NAC + Pearl Powder","Skin Whitening & Hydration","Improves Elasticity & Joint Health","Neutralizes Free Radicals","Liver & Kidney Protection","Certified by Japan Ministry of Health"],sku:"AQUA-SKIN-GLUTA-COLLAGEN-60C",volume:"60 Capsules",stock:0},{id:66,name:"Aqua Skin Veniscy 12 Pro Q10 DualNA Octa Strength Skin Whitening 10 Sessions Injection",category:"Injection",brand:"Aqua Skin",price:8800,comparePrice:12500,image:"/image/aqua/veniscy-12-pro-q10-1.jpg",images:["/image/aqua/veniscy-12-pro-q10-1.jpg","/image/aqua/veniscy-12-pro-q10-2.jpeg","/image/aqua/veniscy-12-pro-q10-3.jpeg","/image/aqua/veniscy-12-pro-q10-4.jpeg"],description:"DualNA Octa Strength glutathione injection for skin whitening, anti-aging, skin regeneration, hydration, and repair. Made in Switzerland.",details:`
    <strong>Aqua Skin Veniscy 12 Pro Q10 DualNA Octa Strength Skin Whitening 10 Sessions Injection</strong><br/><br/>
    Aqua Skin Veniscy 12 Glutathione Injections free the body from toxins that cause spots and blemishes. This anti-inflammatory formulation cures crucial skin issues and helps achieve maximum skin whitening glow with consistent use.<br/><br/>
    
    <strong>Key Features:</strong><br/>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Made in Switzerland</li>
      <li>10 Sessions (30 Vials per box)</li>
      <li>DualNA Octa Strength Technology</li>
      <li>L Glutathione, Vitamin B Complex, Alpha Lipoic Acid, Beta Hydroxy Acid</li>
      <li>No side effects | Vegetarian | Men & Women</li>
    </ul>
    <br/>

    <strong>Benefits:</strong>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Anti-ageing lightening along with skin lightening</li>
      <li>Fair and radiant skin tone</li>
      <li>Regeneration of skin cells</li>
      <li>Improves the appearance of the skin</li>
      <li>Keeps skin hydrated</li>
      <li>Increased and tighter skin</li>
      <li>Repairs damaged skin</li>
      <li>Gets rid of skin acne</li>
      <li>Skin looks lively and healthy</li>
    </ul>
    <br/>

    <strong>Recommended Dosage:</strong> As prescribed by dermatologist. Intravenous IV Infusion (Drip) once a week. For better results, consult your doctor.<br/><br/>

    <strong>Not Suitable For:</strong> Breast feeders, vitamin allergies, pregnant women, patients with cardiovascular problems.<br/><br/>

    <strong>Note:</strong> The result depends on individual metabolism.<br/><br/>

    <em class="text-xs text-gray-400">Note: Third Party Manufacturing & PCD Pharma available. Professional use only. Consult dermatologist before use.</em>
    `,benefits:["10 Sessions (30 Vials)","Made in Switzerland","Anti-Aging & Whitening","Skin Regeneration","Deep Hydration","Tightens & Repairs Skin","Removes Acne","Radiant & Healthy Skin"],sku:"AQUA-VENISCY-12-PRO-Q10",volume:"10 Sessions",stock:10},{id:67,name:"Aqua Skin Veniscy 46 DualNA Pico-Cell Absorption Extremely Ultimate Skin Whitening Injection",category:"Injection",brand:"Aqua Skin",price:8800,comparePrice:12500,image:"/image/aqua/veniscy-46-1.jpg",images:["/image/aqua/veniscy-46-1.jpg","/image/aqua/veniscy-46-2.jpeg","/image/aqua/veniscy-46-3.jpeg","/image/aqua/veniscy-46-4.jpeg"],description:"DualNA Pico-Cell Absorption glutathione injection for skin whitening, anti-aging, acne reduction, scar healing, collagen stimulation, and detoxification. Made in Switzerland.",details:`
    <strong>Aqua Skin Veniscy 46 DualNA Pico-Cell Absorption Extremely Ultimate</strong><br/><br/>
    Aqua skin Veniscy 46 injections safely lighten your skin and lower the appearance of blackheads. This treatment uses IV extract as a part of the lightning treatment, featuring Glutathione as the key ingredient.<br/><br/>
    
    <strong>Key Features:</strong><br/>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Strength: 200 mg (DualNA Pico-Cell formulation)</li>
      <li>Packaging Type: Bottle / Box</li>
      <li>Composition: Aqua Skin Veniscy 46</li>
      <li>Manufactured in Switzerland</li>
      <li>Usage: Skin Whitening</li>
    </ul>
    <br/>

    <strong>Benefits:</strong>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Skin whitening and brightening</li>
      <li>Anti-aging</li>
      <li>Reduces acne and pimples</li>
      <li>Minimizes pores</li>
      <li>Healing of scars</li>
      <li>Stimulates collagen production</li>
      <li>Detoxification</li>
      <li>Lightening dark spots</li>
    </ul>
    <br/>

    <strong>How to Use:</strong> One ampoule per injection should be taken every week for 1-2 months. Administer Intravenous IV Infusion (Drip).<br/><br/>

    <strong>Not Suitable For:</strong> Breast feeders, women during menstruation, vitamin allergies, patients with cardiovascular problems, below 18 years of age.<br/><br/>

    <em class="text-xs text-gray-400">Note: Results may vary. Professional use only. Consult dermatologist before use.</em>
    `,benefits:["DualNA Pico-Cell Absorption","Skin Whitening & Brightening","Anti-Aging","Reduces Acne & Pimples","Minimizes Pores","Heals Scars & Lightens Dark Spots","Stimulates Collagen","Detoxification"],sku:"AQUA-VENISCY-46",volume:"1 Box",stock:10},{id:68,name:"Aqua Skin Pure Gold II 30 Sessions Glutathione Skin Whitening Injection",category:"Injection",brand:"Aqua Skin",price:8800,comparePrice:12500,image:"/image/aqua/pure-gold-ii-30s-1.jpg",images:["/image/aqua/pure-gold-ii-30s-1.jpg","/image/aqua/pure-gold-ii-30s-2.jpg","/image/aqua/pure-gold-ii-30s-3.jpg","/image/aqua/pure-gold-ii-30s-4.jpg"],description:"Gold-infused glutathione skin whitening injection with ultrafiltration pure gold technology. Dermatologist tested, IV dose, 30 sessions for skin brightening and whitening.",details:`
    <strong>Aqua Skin Pure Gold II 30 Sessions Glutathione Skin Whitening Injection</strong><br/><br/>
    A premium gold-infused glutathione injection designed for comprehensive skin whitening and brightening. Features ultrafiltration pure gold technology for enhanced results. Dermatologist tested with no side effects.<br/><br/>
    
    <strong>Key Features:</strong><br/>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>30 Sessions per box</li>
      <li>Gold infused – ultrafiltration pure gold</li>
      <li>Grade Standard: A++</li>
      <li>Dermatologist tested | No side effects</li>
      <li>Administration: Intravenous (IV) once weekly</li>
      <li>Not suitable for: Breast feeders, women during menstruation, vitamin allergies</li>
      <li>Gender: Men & Women</li>
    </ul>
    <br/>

    <strong>Benefits:</strong>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Skin whitening and brightening</li>
      <li>Gold infusion for enhanced glow</li>
      <li>Reduces pigmentation and dark spots</li>
      <li>Improves overall skin tone</li>
      <li>Antioxidant protection</li>
    </ul>
    <br/>

    <strong>How to Use:</strong> One ampoule per injection once a week for 1-2 months. Administer Intravenous IV Infusion (Drip) as directed by healthcare professional.<br/><br/>

    <strong>Storage:</strong> Cool, dry and dark place.<br/><br/>

    <em class="text-xs text-gray-400">Note: Wholesale & PCD Pharma available. Professional use only. Consult dermatologist before use.</em>
    `,benefits:["30 Sessions Pack","Gold Infused","Dermatologist Tested","Skin Whitening & Brightening","Reduces Pigmentation","Antioxidant Protection","No Side Effects","IV Administration"],sku:"AQUA-PURE-GOLD-II-30S",volume:"30 Sessions",stock:10},{id:69,name:"Aqua Skin Pure Gold Pro Max II Dualna Pico Cell Glutathione Injection",category:"Injection",brand:"Aqua Skin",price:9500,comparePrice:13500,image:"/image/aqua/pure-gold-pro-max-ii-1.jpg",images:["/image/aqua/pure-gold-pro-max-ii-1.jpg","/image/aqua/pure-gold-pro-max-ii-2.jpg","/image/aqua/pure-gold-pro-max-ii-3.jpg","/image/aqua/pure-gold-pro-max-ii-4.jpg"],description:"Swiss-made DualNA Pico Cell glutathione injection with pure gold infusion. Provides skin whitening, anti-aging, acne reduction, scar healing, collagen stimulation, and detoxification.",details:`
    <strong>Aqua Skin Pure Gold Pro Max II Dualna Pico Cell Glutathione Injection</strong><br/><br/>
    A new generation skin care product by Aqua Skin. This skin whitening injection gives amazing results of whiter, brighter looking skin for over three months after implementation. The usage steps are effortless and give amazing outcomes on almost any skin type. Acts as a deep cleansing mask to clean daily pollution and debris, with pore-closing and skin-tightening properties.<br/><br/>
    
    <strong>Key Features:</strong><br/>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Strength: 1200 mg (Glutathione complex)</li>
      <li>Packaging: 30 Sets per box (2 amps per time) | 10 ml vials</li>
      <li>L Glutathione: 30,000,000 mg</li>
      <li>Epidermal Growth Factor: 30,000 mg</li>
      <li>Beta Hydroxy Acid: 1800 mg</li>
      <li>Vitamin B Complex: Yes</li>
      <li>Origin: Switzerland</li>
      <li>Administration: IV once a week</li>
    </ul>
    <br/>

    <strong>Benefits:</strong>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Skin whitening and brightening</li>
      <li>Lightening dark spots</li>
      <li>Anti-aging</li>
      <li>Reduces acne and pimples</li>
      <li>Minimizes pores</li>
      <li>Healing of scars</li>
      <li>Stimulates collagen production</li>
      <li>Detoxification</li>
    </ul>
    <br/>

    <strong>Recommended Dosage:</strong> Administered once a week by intravenously (IV). Then reduce to 1 injection every 2 weeks for maintenance.<br/><br/>

    <strong>Not Suitable For:</strong> Pregnant women, breastfeeding/nursing women, women during menstruation, vitamin allergies, patients with cardiovascular problems.<br/><br/>

    <em class="text-xs text-gray-400">Note: Results may vary. Professional use only. Consult dermatologist before use.</em>
    `,benefits:["30 Sets per Box","Made in Switzerland","DualNA Pico Cell Technology","Pure Gold Infused","Skin Whitening & Brightening","Anti-Aging & Acne Reduction","Scar Healing & Collagen Boost","Detoxification"],sku:"AQUA-PURE-GOLD-PRO-MAX-II",volume:"30 Sets",stock:10},{id:70,name:"Aqua Skin Glyco White Glutathione Skin Whitening Injection",category:"Injection",brand:"Aqua Skin",price:9500,comparePrice:14e3,image:"/image/aqua/glyco-white-1.jpg",images:["/image/aqua/glyco-white-1.jpg","/image/aqua/glyco-white-2.jpg","/image/aqua/glyco-white-3.jpg","/image/aqua/glyco-white-4.jpg"],description:"Advanced skin whitening injection with Glyco formula for enhanced glutathione absorption. Reduces melanin, dark spots, uneven tone, and promotes radiant, youthful skin.",details:`
    <strong>Aqua Skin Glyco White Glutathione Skin Whitening Injection</strong><br/><br/>
    A cutting-edge skin whitening injection that combines advanced technology with the power of Glutathione, a natural antioxidant. The unique Glyco formula enhances glutathione absorption, allowing it to penetrate deeply into skin layers for more effective results. Free Shipping and COD available all over India.<br/><br/>
    
    <strong>Key Features:</strong><br/>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Formulation: Lyophilized Powder / Injection</li>
      <li>Packaging: 1 Box – 10 Sessions</li>
      <li>FDA Approved | GMP Certified | FSSAI Approved</li>
      <li>Unique Glyco formula for enhanced absorption</li>
      <li>Targets melanin production and pigmentation</li>
    </ul>
    <br/>

    <strong>Ingredients:</strong><br/>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Natural Collagen Extract with L-Ascorbic Acid & Ultra-Glycolic Acid</li>
      <li>Alpha Lipoic Acid (ALA)</li>
      <li>Cyanocobalamin (Vitamin B12)</li>
      <li>Selenium with Dual DNA & RNA Extract</li>
      <li>Epidermal Growth Factor (EGF)</li>
      <li>Hyaluronic Acid</li>
      <li>Glyco-Glutathione</li>
      <li>Peptide Nano</li>
      <li>Coenzyme Q10</li>
      <li>Ginkgo Biloba Extract</li>
      <li>White Glyco Elements</li>
      <li>Multivitamin Complex</li>
      <li>Kojic Acid</li>
      <li>Thioctic Acid</li>
    </ul>
    <br/>

    <strong>Benefits:</strong>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Radiant, glowing skin by reducing melanin production</li>
      <li>Lightens dark spots and restores even skin tone</li>
      <li>Anti-aging – boosts collagen synthesis for firmer, younger-looking skin</li>
      <li>Addresses uneven skin tone from sun exposure or hormonal changes</li>
      <li>Deeply hydrates and repairs skin</li>
    </ul>
    <br/>

    <strong>How to Use:</strong> Administered intravenously (IV) under professional supervision. Follow healthcare provider's recommended dosage and schedule.<br/><br/>

    <strong>Note:</strong> The result depends on individual metabolism.<br/><br/>

    <em class="text-xs text-gray-400">Note: Results may vary. Professional use only. Consult dermatologist before use.</em>
    `,benefits:["10 Sessions Pack","Glyco Formula for Enhanced Absorption","Reduces Melanin & Dark Spots","Brightens & Evens Skin Tone","Anti-Aging & Collagen Boost","Deep Hydration & Repair","FDA Approved","Free Shipping & COD"],sku:"PTR000426",volume:"10 Sessions",stock:0},{id:71,name:"Aqua Skin Veniscy 138 Trina Pico Cell Pro Max Glutathione Injection",category:"Injection",brand:"Aqua Skin",price:8800,comparePrice:12500,image:"/image/aqua/veniscy-138-1.jpg",images:["/image/aqua/veniscy-138-1.jpg","/image/aqua/veniscy-138-2.jpg","/image/aqua/veniscy-138-3.jpg","/image/aqua/veniscy-138-4.jpg"],description:"TriNA Pico Cell Pro Max glutathione injection for skin brightening, anti-aging, and even tone. Highly absorbable formula with no adverse side effects.",details:`
    <strong>Aqua Skin Veniscy 138 Trina Pico Cell Pro Max Glutathione Injection</strong><br/><br/>
    A hassle-free way to enhance skin's glow and achieve a more youthful appearance. Designed to be highly absorbable, this TriNA Pico Cell formulation ensures effective delivery of glutathione for skin brightening and anti-aging benefits. Safe and efficient solution for reducing skin darkening, especially in areas with little sun exposure.<br/><br/>
    
    <strong>Key Features:</strong><br/>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Strength: 138 (TriNA Pico Cell Pro Max formulation)</li>
      <li>Packaging Size: 10 ml vials</li>
      <li>Brand: Aqua Skin / Veniscy</li>
      <li>Form: Injection (IV Infusion)</li>
      <li>Highly absorbable – no adverse side effects</li>
    </ul>
    <br/>

    <strong>Benefits:</strong>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Skin brightening and even tone</li>
      <li>Anti-aging and youthful appearance</li>
      <li>Reduces skin darkening and blackheads</li>
      <li>Gentle – no invasive procedures or frequent salon visits</li>
      <li>Safe alternative with no irritation</li>
    </ul>
    <br/>

    <strong>How to Use:</strong> Administered via IV infusion under professional supervision. Follow healthcare provider's recommendations.<br/><br/>

    <em class="text-xs text-gray-400">Note: Results may vary. Professional use only. Consult dermatologist before use.</em>
    `,benefits:["TriNA Pico Cell Pro Max","Skin Brightening & Anti-Aging","Reduces Darkening & Blackheads","Highly Absorbable","No Adverse Side Effects","Gentle & Safe","IV Infusion","Youthful Glow"],sku:"AQUA-VENISCY-138",volume:"1 Box",stock:10},{id:72,name:"Aqua Immune Booster 3 in 1 Glutathione Whitening Injection",category:"Injection",brand:"Aqua Immune",price:12e3,comparePrice:15e3,image:"/image/aqua/immune-booster-1.jpg",images:["/image/aqua/immune-booster-1.jpg","/image/aqua/immune-booster-2.jpg","/image/aqua/immune-booster-3.jpg","/image/aqua/immune-booster-4.jpg"],description:"Triple-power glutathione injection with Vitamin C and hyaluronic acid. Protects skin, fades dark spots, boosts collagen, and provides deep hydration for radiant, youthful skin.",details:`
    <strong>Aqua Immune Booster 3 in 1 Glutathione Whitening Injection</strong><br/><br/>
    An advanced skincare essential combining three powerful ingredients – Glutathione, Vitamin C, and Hyaluronic Acid – to rejuvenate skin from within. This triple-power formula protects against environmental damage, fades dark spots, boosts collagen synthesis, and delivers deep hydration for a plump, dewy complexion.<br/><br/>
    
    <strong>Key Features:</strong><br/>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Triple-Power Formula: Glutathione + Vitamin C + Hyaluronic Acid</li>
      <li>Strength: 3 in 1 complex</li>
      <li>Packaging: Box / Pack</li>
      <li>Form: Injection</li>
      <li>Suitable for all skin types, including sensitive skin</li>
    </ul>
    <br/>

    <strong>Benefits:</strong>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li><strong>Glutathione Brilliance:</strong> Antioxidant protection for luminous complexion</li>
      <li><strong>Vitamin C Radiance:</strong> Fades dark spots, boosts collagen for firm, youthful skin</li>
      <li><strong>Collagen Revival:</strong> Reduces fine lines and wrinkles, restores elasticity</li>
      <li><strong>Hyaluronic Hydration:</strong> Deep moisture for plump, dewy glow</li>
    </ul>
    <br/>

    <strong>Recommended Usage:</strong> Administer once or twice a week via IV under professional supervision. Visible improvements in skin texture and tone often noticed within a few weeks of consistent use.<br/><br/>

    <strong>Safety:</strong> Formulated with safe, high-quality ingredients suitable for long-term use. Complements other skincare products seamlessly.<br/><br/>

    <em class="text-xs text-gray-400">Note: Results may vary. Professional use only. Consult dermatologist before use.</em>
    `,benefits:["Glutathione + Vitamin C + Hyaluronic Acid","Triple-Power Formula","Antioxidant & Skin Brightening","Fades Dark Spots","Boosts Collagen for Firmness","Deep Hydration","Reduces Fine Lines & Wrinkles","Suitable for All Skin Types"],sku:"AQUA-IMMUNE-BOOSTER-3IN1",volume:"1 Box",stock:10},{id:73,name:"Aqua Skin Pure Glow New Glutathione Skin Whitening Injection",category:"Injection",brand:"Aqua Skin",price:8800,comparePrice:12500,image:"/image/aqua/pure-glow-new-1.jpg",images:["/image/aqua/pure-glow-new-1.jpg","/image/aqua/pure-glow-new-2.jpg","/image/aqua/pure-glow-new-3.jpg","/image/aqua/pure-glow-new-4.jpg"],description:"Liquid glutathione injection for skin whitening therapy. Brightens complexion, reduces pigmentation, and promotes radiant skin. Suitable for adults.",details:`
    <strong>Aqua Skin Pure Glow New Glutathione Skin Whitening Injection</strong><br/><br/>
    A premium liquid formulation designed for skin whitening therapy. Helps brighten complexion, reduce pigmentation, and promote overall skin radiance. Suitable for adult use.<br/><br/>
    
    <strong>Key Features:</strong><br/>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Form: Liquid injection</li>
      <li>Packaging: Multiple vials per box</li>
      <li>Recommended for: Skin whitening and brightening</li>
      <li>Suitable for adults</li>
    </ul>
    <br/>

    <strong>Benefits:</strong>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Skin brightening and even tone</li>
      <li>Reduces hyperpigmentation and dark spots</li>
      <li>Provides antioxidant protection</li>
      <li>Promotes radiant, glowing skin</li>
    </ul>
    <br/>

    <strong>How to Use:</strong> Administer intravenously under professional supervision. Follow healthcare provider's recommended dosage.<br/><br/>

    <em class="text-xs text-gray-400">Note: Results may vary. Professional use only. Consult dermatologist before use.</em>
    `,benefits:["Liquid Formulation","Skin Whitening Therapy","Brightens Complexion","Reduces Pigmentation","Antioxidant Protection","Radiant Glow","Suitable for Adults","Multiple Vials"],sku:"AQUA-PURE-GLOW-NEW",volume:"1 Box",stock:10},{id:74,name:"Aqua Skin Veniscy 66 Pico Cell Absorption Supreme Effective Skin Whitening Glutathione Injection",category:"Injection",brand:"Aqua Skin",price:9500,comparePrice:16e3,image:"/image/aqua/veniscy-66-1.jpg",images:["/image/aqua/veniscy-66-1.jpg","/image/aqua/veniscy-66-2.jpg","/image/aqua/veniscy-66-3.jpg","/image/aqua/veniscy-66-4.jpg"],description:"Next-generation whitening injection with Pico Cell Absorption technology for superior absorption, deep cellular whitening, detoxification, and skin repair.",details:`
    <strong>Aqua Skin Veniscy 66 Pico Cell Absorption Supreme Skin Whitening Glutathione Injection</strong><br/><br/>
    A next-generation whitening and rejuvenation therapy formulated for superior absorption and faster visible results. Powered by Pico Cell Absorption technology, it delivers deep cellular whitening, detoxification, and skin repair in fewer sessions. This advanced formula suppresses melanin production while restoring hydration, elasticity, and collagen strength. With regular professional administration, users experience clearer tone, smoother texture, and long-lasting radiance.<br/><br/>
    
    <strong>Composition:</strong><br/>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Ultimate Glutathione – 12,000,000 mg</li>
      <li>Coenzyme Pro Q10 – 9,900,000 mg</li>
      <li>L-Ascorbic Acid (Vitamin C) – 400,000 mg</li>
      <li>Natural Collagen Extract – 150,000 mg</li>
      <li>Hyaluronic Acid – 99,880 mg</li>
      <li>Epidermal Growth Factor (EGF) – 95,000 mg</li>
      <li>Alpha Lipoic Acid – 83,500 mg</li>
      <li>Matrixyl 9000 – 69,800 mg</li>
    </ul>
    <br/>

    <strong>Key Features:</strong><br/>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Pico Cell Absorption technology for faster, deeper delivery</li>
      <li>Ultra-high glutathione strength for visible fairness</li>
      <li>Suitable for all skin types when administered professionally</li>
    </ul>
    <br/>

    <strong>Benefits:</strong>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Delivers powerful whitening results in fewer sessions</li>
      <li>Repairs skin damage and reduces dullness</li>
      <li>Improves hydration, elasticity, and smoothness</li>
      <li>Helps reduce stubborn pigmentation and melasma</li>
      <li>Supports deep cellular detoxification</li>
      <li>Enhances overall glow and skin clarity</li>
    </ul>
    <br/>

    <strong>How It Works:</strong> Pico Cell Absorption technology allows active ingredients to bypass traditional metabolic barriers, resulting in faster, deeper, and longer-lasting whitening effects. When paired with collagen and antioxidants, it strengthens skin structure while enhancing glow.<br/><br/>

    <strong>FAQ:</strong>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li><strong>How soon are results visible?</strong> Most users notice visible improvement after 4–5 sessions.</li>
      <li><strong>Is this suitable for all skin types?</strong> Yes, when used under professional supervision.</li>
      <li><strong>Can this be combined with Vitamin C?</strong> Yes, Vitamin C further enhances glutathione absorption and results.</li>
    </ul>
    <br/>

    <strong>Why Buy from Skin Solution Store:</strong> Since 2009, trusted for delivering only authentic whitening injections with expert guidance, ensuring safety, originality, and consistent results.<br/><br/>

    <em class="text-xs text-gray-400">Note: Results may vary. Professional use only. Consult dermatologist before use.</em>
    `,benefits:["Pico Cell Absorption Technology","12,000,000mg Glutathione","Fast Visible Results (4-5 sessions)","Reduces Pigmentation & Melasma","Deep Hydration & Elasticity","Cellular Detoxification","With EGF, CoQ10 & Matrixyl","Suitable for All Skin Types"],sku:"AQUA-VENISCY-66-PICO",volume:"1 Box",stock:10},{id:75,name:"Aqua Skin Veniscy 50 DualNA Pico-Cell Absorption Ultra Active Skin Whitening Injection",category:"Injection",brand:"Aqua Skin",price:8800,comparePrice:12500,image:"/image/aqua/veniscy-50-1.jpg",images:["/image/aqua/veniscy-50-1.jpg","/image/aqua/veniscy-50-2.jpg","/image/aqua/veniscy-50-3.jpg","/image/aqua/veniscy-50-4.jpg"],description:"Swiss-made DualNA Pico-Cell absorption injection with high-potency glutathione, collagen, hyaluronic acid, and EGF for skin whitening, brightening, anti-aging, and detoxification.",details:`
    <strong>Aqua Skin Veniscy 50 DualNA Pico-Cell Absorption Ultra Active Skin Whitening Injection</strong><br/><br/>
    A premium Swiss formulation designed for skin whitening, glowing, and anti-aging. Based on individual body metabolism, this injection provides safe and effective results with DualNA Pico-Cell absorption technology for deeper penetration and faster action.<br/><br/>
    
    <strong>Composition:</strong><br/>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Ultimate Glutathione – 10,000,000 mg</li>
      <li>Natural Collagen Extract – 120,000 mg</li>
      <li>Hyaluronic Acid – 99,880 mg</li>
      <li>Beta Hydroxy Acid – 99,880 mg</li>
      <li>Epidermal Growth Factor (EGF) – 75,000 mg</li>
      <li>Alpha Lipoic Acid (ALA) – 71,500 mg</li>
      <li>L Glutathione – 50,000 mg</li>
      <li>Vitamin B Complex – Yes</li>
    </ul>
    <br/>

    <strong>Key Features:</strong><br/>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>10 Sessions per box (1 amp + 2 vials per set)</li>
      <li>Made in Switzerland</li>
      <li>Grade Standard: A++</li>
      <li>Dermatologist tested | No side effects</li>
      <li>Vegetarian | Unisex</li>
      <li>PCD Pharma available</li>
    </ul>
    <br/>

    <strong>Benefits:</strong>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Skin whitening and brightening</li>
      <li>Lightening dark spots</li>
      <li>Anti-aging effects</li>
      <li>Reduces acne and pimples</li>
      <li>Minimizes pores</li>
      <li>Healing of scars</li>
      <li>Stimulates collagen production</li>
      <li>Detoxification</li>
    </ul>
    <br/>

    <strong>Recommended Dosage:</strong> Each 10 ml with 2 vials of lyophilized powder per day. Administer once or twice per week by intravenously (IV). Then reduce to 1 injection every 2 weeks for maintenance.<br/><br/>

    <strong>Not Suitable For:</strong> Pregnant women, breastfeeding/nursing women, during menstruation, vitamin allergies, cardiovascular problems.<br/><br/>

    <em class="text-xs text-gray-400">Note: Results vary based on individual metabolism. Professional use only. Consult dermatologist before use.</em>
    `,benefits:["10 Sessions per Box","Made in Switzerland","DualNA Pico-Cell Absorption","10,000,000mg Glutathione","Skin Whitening & Brightening","Anti-Aging & Acne Reduction","Scar Healing & Collagen Boost","Detoxification"],sku:"AQUA-VENISCY-50",volume:"10 Sessions",stock:10},{id:76,name:"Miracle White Blue 18000mg Glutathione Skin Whitening Injection",category:"Injection",brand:"Miracle White",price:8500,comparePrice:12e3,image:"/image/miracle-white/blue-18000mg-1.jpg",images:["/image/miracle-white/blue-18000mg-1.jpg","/image/miracle-white/blue-18000mg-2.jpg","/image/miracle-white/blue-18000mg-3.jpg","/image/miracle-white/blue-18000mg-4.jpg"],description:"High-dose glutathione skin whitening injection with nano concentrated glutathione, vitamin C, EGF, and CoQ10 for skin lightening, anti-aging, and detoxification.",details:`
    <strong>Miracle White Blue 18000mg Glutathione Skin Whitening Injection</strong><br/><br/>
    The highest grade, high-dose glutathione skin lightening solution available. Includes oral booster to maintain glutathione levels between treatment sessions. Contains high-dose L-Glutathione, antioxidants, and oral glutathione boosters for maximum effectiveness. Trusted by spas and skin clinics worldwide.<br/><br/>
    
    <strong>Ingredients:</strong><br/>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Nano Concentrated Glutathione – 18,000 mg</li>
      <li>Vitamin C (5ml) – 2500 mg with Kojic Acid – 2000 mg</li>
      <li>Coenzyme Q10 – 700 mg</li>
      <li>Epidermal Growth Factor (EGF) – 1500 mg</li>
      <li>Vitamin B Complex (2ml) – Yes</li>
      <li>Thioctic Acid (2ml) – Yes</li>
      <li>Vitamin Pill (2ml) – 500 mg</li>
    </ul>
    <br/>

    <strong>Key Features:</strong><br/>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Packaging: 6 Sessions per box</li>
      <li>Manufactured by: Switzerland | Country of Origin: Made in India</li>
      <li>Vegetarian | No side effects</li>
      <li>Gender: Men & Women</li>
      <li>Not suitable for: Pregnant women, breastfeeding, menstruation, vitamin allergies, cardiovascular problems</li>
    </ul>
    <br/>

    <strong>Benefits:</strong>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Whitens skin and lightens scars</li>
      <li>Produces collagen and enhances skin elasticity</li>
      <li>Moisturizes, hydrates, firms, smoothens, and softens skin</li>
      <li>Reduces pigmentation caused by sun exposure</li>
      <li>Smoothens fine lines and wrinkles</li>
      <li>Suppresses acne, blemishes, and pimples</li>
      <li>Minimizes pores and improves complexion</li>
      <li>Removes excess free radicals</li>
      <li>Prevents aging and acts as anti-wrinkle</li>
    </ul>
    <br/>

    <strong>Recommended Dosage:</strong> Administer intravenously (IV) once a week. For better results, once every 4–5 days. Twice a week for commercial/clinical use. High glutathione content – take as per dermatologist advice.<br/><br/>

    <em class="text-xs text-gray-400">Note: PCD Pharma & Wholesale available. Results vary. Professional use only. Consult dermatologist before use.</em>
    `,benefits:["6 Sessions Pack","18,000mg Glutathione","With Vitamin C, EGF & CoQ10","Skin Whitening & Scar Lightening","Anti-Aging & Wrinkle Reduction","Reduces Pigmentation","Moisturizes & Firms Skin","Detoxifies & Removes Free Radicals"],sku:"MIRACLE-WHITE-BLUE-18K",volume:"6 Sessions",stock:10},{id:77,name:"Miracle White Perfection VI Gold - Glutathione 60000mg Skin Whitening Injection",category:"Injection",brand:"Miracle White",price:10500,comparePrice:15e3,image:"/image/miracle-white/perfection-vi-gold-1.jpg",images:["/image/miracle-white/perfection-vi-gold-1.jpg","/image/miracle-white/perfection-vi-gold-2.jpg","/image/miracle-white/perfection-vi-gold-3.jpg","/image/miracle-white/perfection-vi-gold-4.jpg"],description:"Enhanced formula glutathione injection with kojic acid and alpha-lipoic acid. Whitens skin, reduces sun damage, removes blemishes, improves firmness, elasticity, and cell regeneration.",details:`
    <strong>Miracle White Perfection VI Gold - Glutathione 60000mg Skin Whitening Injection</strong><br/><br/>
    The newest Miracle White with enhanced formula. Lightens visible sun damage, age spots, and scars. Provides anti-aging effect on skin. Kojic acid adds antimicrobial properties; alpha-lipoic acid offers strong antioxidant effects, reducing inflammation and skin aging.<br/><br/>
    
    <strong>Key Features:</strong><br/>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Strength: 600 mg / 60,000 mg formula potency</li>
      <li>Packaging: 6 Sessions per box</li>
      <li>Made in Switzerland</li>
      <li>Grade Standard: A+</li>
      <li>Dermatologist tested | No side effects</li>
      <li>Vegetarian | Men & Women</li>
      <li>Not suitable for: Breastfeeding, pregnant women, vitamin allergies</li>
      <li>PCD Pharma available</li>
    </ul>
    <br/>

    <strong>Composition:</strong><br/>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Glutathione – 60,000 mg</li>
      <li>Epidermal Growth Factor – 600 mg</li>
      <li>Kojic Acid – Yes</li>
      <li>Alpha Lipoic Acid – Yes</li>
      <li>Beta Hydroxy Acid – Yes</li>
      <li>Vitamin B Complex – Yes</li>
    </ul>
    <br/>

    <strong>Benefits:</strong>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Soothes and stabilizes the skin</li>
      <li>Whitens skin inside and out</li>
      <li>Reduces dull skin and repairs sun-damaged skin</li>
      <li>Removes blemishes, maintains white and smooth skin</li>
      <li>Moisturizes and significantly improves skin firmness and elasticity</li>
      <li>Improves blood circulation and skin cell regeneration (anti-aging)</li>
    </ul>
    <br/>

    <strong>How to Use:</strong> One ampoule per injection every week for 1-2 months. Administer Intravenous IV Infusion (Drip).<br/><br/>

    <strong>Recommended Dosage:</strong> As prescribed by dermatologist. Once a week for treatment, then maintenance as advised.<br/><br/>

    <em class="text-xs text-gray-400">Note: Results may vary. Professional use only. Consult dermatologist before use.</em>
    `,benefits:["6 Sessions Pack","Made in Switzerland","60,000mg Glutathione","Whitens & Repairs Sun Damage","Anti-Aging & Cell Regeneration","Removes Blemishes","Improves Firmness & Elasticity","Dermatologist Tested"],sku:"MIRACLE-WHITE-PERFECTION-VI-GOLD",volume:"6 Sessions",stock:10},{id:78,name:"Miracle White Green Tru Glutathione 25000mg Skin Whitening Injection",category:"Injection",brand:"Miracle White",price:8800,comparePrice:12500,image:"/image/miracle-white/green-tru-25000-1.jpg",images:["/image/miracle-white/green-tru-25000-1.jpg","/image/miracle-white/green-tru-25000-2.jpg","/image/miracle-white/green-tru-25000-3.jpg","/image/miracle-white/green-tru-25000-4.jpg"],description:"Green Tru formula glutathione injection with kojic acid and ascorbic acid for skin whitening, pigmentation reduction, and melasma treatment. 6 sessions per box.",details:`
    <strong>Miracle White Green Tru Glutathione 25000mg Skin Whitening Injection</strong><br/><br/>
    A powerful skin whitening injection formulated with Green Tru technology, glutathione, kojic acid, and ascorbic acid. Designed to treat pigmentation, melasma, and promote overall skin brightness. Manufactured by HESSCO Laboratories.<br/><br/>
    
    <strong>Key Features:</strong><br/>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Strength: 25,000 mg (Glutathione complex)</li>
      <li>Form: Liquid injection</li>
      <li>Treatment Course: 6 Sessions per box</li>
      <li>Packaging Size: 6 vials, 5ml ampoules x6, 3ml ampoules x6</li>
      <li>Composition: Green Tru, Glutathione, Kojic Acid, Ascorbic Acid</li>
      <li>Manufacturer: HESSCO Laboratories</li>
      <li>Shelf Life: 6 Years</li>
    </ul>
    <br/>

    <strong>Benefits:</strong>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Skin whitening and brightening</li>
      <li>Reduces pigmentation and melasma</li>
      <li>Antioxidant protection with glutathione and vitamin C</li>
      <li>Kojic acid inhibits melanin production</li>
      <li>Improves overall skin tone and clarity</li>
    </ul>
    <br/>

    <strong>How to Use:</strong> Administer intravenously (IV) with 100ml normal saline. One session per week under professional supervision.<br/><br/>

    <em class="text-xs text-gray-400">Note: Results may vary. Professional use only. Consult dermatologist before use.</em>
    `,benefits:["6 Sessions per Box","25,000mg Glutathione","Green Tru Formula","With Kojic Acid & Vitamin C","Reduces Pigmentation & Melasma","Skin Whitening & Brightening","Antioxidant Protection","Manufactured by HESSCO"],sku:"MIRACLE-WHITE-GREEN-TRU-25K",volume:"6 Sessions",stock:10},{id:79,name:"Miracle White Advance 50000mg Glutathione Skin Whitening Injection",category:"Injection",brand:"Miracle White",price:1e4,comparePrice:15e3,image:"/image/miracle-white/advance-50000mg-1.jpg",images:["/image/miracle-white/advance-50000mg-1.jpg","/image/miracle-white/advance-50000mg-2.jpg","/image/miracle-white/advance-50000mg-3.jpg","/image/miracle-white/advance-50000mg-4.jpg"],description:"High-strength 50,000mg glutathione injection for powerful skin brightening, detoxification, antioxidant protection, and immunity boost. Helps reduce pigmentation, dark spots, and uneven skin tone.",details:`
    <strong>Miracle White Advance 50000mg Glutathione Skin Whitening Injection</strong><br/><br/>
    Discover the power of Miracle White Advance 50000mg Glutathione Injections – a natural and effective way to achieve radiant, glowing skin with the master antioxidant known worldwide for skin-brightening and detoxifying benefits. Glutathione protects skin from damage caused by pollution, UV rays, and stress. With age and environmental factors, glutathione levels reduce, leading to dullness, pigmentation, and uneven skin tone. This high-strength dose of 50,000 mg helps replenish levels, promoting healthier, clearer, and more youthful skin from within.<br/><br/>
    
    <strong>Key Features:</strong><br/>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Strength: 50,000 mg Glutathione complex</li>
      <li>Treatment Course: 6 Sessions per box</li>
      <li>Composition: Glutathione, Vitamin C</li>
      <li>Route of Administration: IV Use Only</li>
      <li>Not suitable for: Pregnant women, lactating women, vitamin allergies</li>
      <li>Gender: Unisex</li>
    </ul>
    <br/>

    <strong>Benefits:</strong>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Powerful skin brightening – lightens dark spots, reduces pigmentation, evens skin tone</li>
      <li>Effective antioxidant protection – fights free radicals causing aging and dullness</li>
      <li>Detoxifies your body – cleanses harmful toxins for overall wellness</li>
      <li>Boosts immunity & energy – enhances natural defense system</li>
      <li>Safe & trusted – formulated with highest standards, administered under medical supervision</li>
    </ul>
    <br/>

    <strong>How It Works:</strong> Once injected, glutathione enters bloodstream and gets absorbed by skin cells. It inhibits melanin production (pigment responsible for dark spots) while neutralizing harmful free radicals.<br/><br/>

    <strong>What to Expect:</strong> Visible improvement in skin clarity and brightness within a few sessions, reduction in pigmentation and dark spots, healthier radiant complexion, boost in overall energy and vitality.<br/><br/>

    <strong>How to Use:</strong> Quick, minimally invasive injections given by trained healthcare professionals. Customized treatment plan designed for optimal results.<br/><br/>

    <em class="text-xs text-gray-400">Note: Results may vary. Professional use only. Consult dermatologist before use.</em>
    `,benefits:["6 Sessions per Box","50,000mg Glutathione","Powerful Skin Brightening","Reduces Pigmentation & Dark Spots","Antioxidant Protection","Detoxifies Body","Boosts Immunity & Energy","Safe & Trusted"],sku:"MIRACLE-WHITE-ADVANCE-50K",volume:"6 Sessions",stock:10},{id:80,name:"Miracle White Purple 60000mg Skin Whitening Glutathione Injection",category:"Injection",brand:"Miracle White",price:8800,comparePrice:12500,image:"/image/miracle-white/purple-60000mg-1.jpg",images:["/image/miracle-white/purple-60000mg-1.jpg","/image/miracle-white/purple-60000mg-2.jpg","/image/miracle-white/purple-60000mg-3.jpg","/image/miracle-white/purple-60000mg-4.jpg"],description:"Revolutionary formula enriched with EGF, multivitamins, and antioxidants. Brightens, rejuvenates, and protects skin for anti-aging and skin-lightening.",details:`
    <strong>Miracle White Purple 60000mg Skin Whitening Glutathione Injection</strong><br/><br/>
    Achieve flawless, radiant skin with Miracle White Glutathione Injection, a revolutionary formula enriched with Epidermal Growth Factor (EGF), multivitamins, and powerful antioxidants. Designed to brighten, rejuvenate, and protect, it's your ultimate solution for anti-aging and skin-lightening.<br/><br/>
    
    <strong>Key Features:</strong><br/>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Strength: 60,000 mg Glutathione complex</li>
      <li>Packaging Size: 10 ml vials per box</li>
      <li>Packaging Type: Box</li>
      <li>Shelf Life: 2 Years</li>
      <li>Enriched with EGF, multivitamins, antioxidants</li>
    </ul>
    <br/>

    <strong>Benefits:</strong>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Brighter, even skin tone</li>
      <li>Reduces dark spots, sun damage, and pigmentation</li>
      <li>Anti-aging effects</li>
      <li>Skin rejuvenation and protection</li>
      <li>Visibly radiant skin</li>
    </ul>
    <br/>

    <strong>How to Use:</strong> Administer intravenously under professional supervision. Follow healthcare provider's recommended dosage.<br/><br/>

    <em class="text-xs text-gray-400">Note: Results may vary. Professional use only. Consult dermatologist before use.</em>
    `,benefits:["60,000mg Glutathione","Enriched with EGF","Reduces Dark Spots & Pigmentation","Anti-Aging & Rejuvenation","Brightens Skin Tone","Antioxidant Protection","Visibly Radiant Skin","2 Year Shelf Life"],sku:"MIRACLE-WHITE-PURPLE-60K",volume:"1 Box",stock:10},{id:81,name:"Miracle White Gold 55000mg Exc Anti Melanogenic Glutathione Skin Whitening Injection",category:"Injection",brand:"Miracle White",price:11e3,comparePrice:18e3,image:"/image/miracle-white/gold-55000mg-exc-1.jpg",images:["/image/miracle-white/gold-55000mg-exc-1.jpg","/image/miracle-white/gold-55000mg-exc-2.jpg","/image/miracle-white/gold-55000mg-exc-3.jpg","/image/miracle-white/gold-55000mg-exc-4.jpg"],description:"Plant-derived extracellular anti-melanogenic agents from S. japonica naturally reduce melanin, minimize aging signs, and enhance radiance. Safe alternative to chemical whitening.",details:`
    <strong>Miracle White Gold 55000mg Exc Anti Melanogenic Glutathione Skin Whitening Injection</strong><br/><br/>
    If you're seeking a solution to revive your skin's radiance, Miracle White EXC is worth considering. This product uses extracellular anti-melanogenic agents derived from plants, making it a natural and safe alternative to chemical-based skin-whitening products. By utilizing extracellular vesicles from S. japonica, Miracle White EXC reduces melanin content in melanoma cells without causing significant harm. By incorporating plant-derived extracellular anti-melanogenic agents, you can help minimize signs of aging and enjoy more youthful-looking skin.<br/><br/>
    
    <strong>Key Features:</strong><br/>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>6 Sessions per box</li>
      <li>Made in Switzerland</li>
      <li>Paraben Free & Organic: Yes</li>
      <li>Key Ingredients: Glutathione, plant-derived extracellular vesicles</li>
      <li>Advanced anti-melanogenic formula</li>
    </ul>
    <br/>

    <strong>Scientific Background:</strong> Studies show extracellular vesicles (EVs) from leaves and stems of S. japonica act as natural anti-melanogenic agents. Leaf-derived EVs (LEVs) display superior whitening effects compared to arbutin, inhibiting melanogenesis-related genes (MITF, TYR, TRP-1, TRP-2) for more potent melanin inhibition.<br/><br/>

    <strong>Benefits:</strong>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Reduces melanin content without harming cells</li>
      <li>Natural and safe alternative to chemical whitening</li>
      <li>Minimizes signs of aging for youthful skin</li>
      <li>Inhibits melanogenesis-related genes and proteins</li>
      <li>Superior whitening effects compared to arbutin</li>
      <li>Enhances skin radiance and clarity</li>
    </ul>
    <br/>

    <strong>How to Use:</strong> Administer intravenously under professional supervision. Follow healthcare provider's recommended dosage for 6 sessions.<br/><br/>

    <em class="text-xs text-gray-400">Note: Results may vary from person to person. Professional use only. Consult dermatologist before use.</em>
    `,benefits:["6 Sessions Pack","Made in Switzerland","Plant-Derived Anti-Melanogenic","Natural & Safe Alternative","Superior to Arbutin","Inhibits Melanogenesis","Reduces Signs of Aging","Enhances Radiance & Clarity"],sku:"MIRACLE-WHITE-GOLD-55K-EXC",volume:"6 Sessions",stock:10},{id:82,name:"Miracle White Enhance 90,000mg Glutathione Skin Whitening Injection",category:"Injection",brand:"Miracle White",price:11e3,comparePrice:18e3,image:"/image/miracle-white/enhance-90000mg-1.jpg",images:["/image/miracle-white/enhance-90000mg-1.jpg","/image/miracle-white/enhance-90000mg-2.jpg","/image/miracle-white/enhance-90000mg-3.jpg","/image/miracle-white/enhance-90000mg-4.jpg"],description:"Enhanced formulation with 90,000mg glutathione, EGF, kojic acid, alpha-lipoic acid, and multivitamins. Accelerates skin lightening, reduces dark spots, provides antioxidant protection and anti-aging benefits.",details:`
    <strong>Miracle White Enhance 90,000mg Glutathione Skin Whitening Injection</strong><br/><br/>
    Experience the transformative power of the enhanced Miracle White 90,000 mg Glutathione Injection, fortified with a higher concentration of EGF (Epidermal Growth Factor) and a blend of essential multivitamins. This advanced formulation delivers a more potent anti-aging solution, offering remarkable skin brightening effects while combating signs of aging.<br/><br/>
    
    <strong>Key Features:</strong><br/>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Made in Switzerland</li>
      <li>Key Ingredients: Glutathione & Vitamin C</li>
      <li>Enhanced with EGF, Kojic Acid, Alpha-Lipoic Acid</li>
      <li>Contains Collagen Forte, Hyaluronic Acid, Argan Stem Cell, Coenzyme Q10</li>
    </ul>
    <br/>

    <strong>Ingredients:</strong><br/>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Glutathione – 90,000 mg</li>
      <li>Epidermal Growth Factor (EGF)</li>
      <li>Kojic Acid – lightens sun damage, age spots, scars</li>
      <li>Alpha-Lipoic Acid – potent antioxidant, reduces inflammation</li>
      <li>Ascorbic Acid (Vitamin C)</li>
      <li>Collagen Forte – restores youthful appearance</li>
      <li>Essential Amino Acids, Hesperidin, Hyaluronic Acid</li>
      <li>Argan Stem Cell (Placenta), Chromosome, Coenzyme Q10</li>
    </ul>
    <br/>

    <strong>Benefits:</strong>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Accelerates skin lightening – up to 7x faster than traditional methods</li>
      <li>Enhanced defense against damage – boosts antioxidant protection</li>
      <li>Combat free radicals – alpha-lipoic acid minimizes oxidative damage</li>
      <li>Skin rejuvenation – reduces visible signs of aging</li>
      <li>Regulates pigment production – prevents dark spots</li>
      <li>Inhibits melanin production and promotes collagen for firmer skin</li>
      <li>Ascorbic acid offers antioxidant effects, reduces sun damage</li>
    </ul>
    <br/>

    <strong>Usage:</strong> Administered by qualified healthcare professional via IV or IM injection. Follow recommended dosage and treatment schedule. Consult dermatologist before use.<br/><br/>

    <em class="text-xs text-gray-400">Note: Results vary. Professional use only. Consult skincare professional before starting any injection regimen.</em>
    `,benefits:["90,000mg Glutathione","Made in Switzerland","Accelerated Skin Lightening","Reduces Dark Spots & Aging Signs","Antioxidant & Anti-Inflammatory","Boosts Collagen & Firmness","With EGF, Kojic Acid, ALA","Contains Hyaluronic Acid & Stem Cells"],sku:"MIRACLE-WHITE-ENHANCE-90K",volume:"1 Box",stock:10},{id:83,name:"Miracle White Cell Renewal Glutathione Booster Injection",category:"Injection",brand:"Miracle White",price:8800,comparePrice:12500,image:"/image/miracle-white/cell-renewal-1.jpg",images:["/image/miracle-white/cell-renewal-1.jpg","/image/miracle-white/cell-renewal-2.jpg","/image/miracle-white/cell-renewal-3.jpg","/image/miracle-white/cell-renewal-4.jpg"],description:"Revolutionary skin whitening injection with glutathione, vitamin C, cherry blossom extract, and licorice extract. Brightens complexion, boosts cell renewal, fades dark spots, and provides anti-aging benefits.",details:`
    <strong>Miracle White Cell Renewal Glutathione Booster Injection</strong><br/><br/>
    Discover the power of Miracle White Cell Renewal Glutathione Booster Injection, a revolutionary skin whitening solution that helps brighten your complexion, boost cell renewal, and enhance your natural glow. Formulated with premium ingredients, this injection offers visible results, leaving your skin youthful, radiant, and revitalized.<br/><br/>
    
    <strong>Key Features:</strong><br/>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>6 Sessions per box</li>
      <li>Country of Origin: Switzerland</li>
      <li>GMP Certified</li>
      <li>Imported by Super Advanced General Trading Company LLC</li>
      <li>Packed by IMBMS (Dealers Bazaar Group)</li>
    </ul>
    <br/>

    <strong>Ingredients:</strong><br/>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li><strong>Glutathione</strong> – Powerful antioxidant that detoxifies, improves skin tone, and lightens hyperpigmentation</li>
      <li><strong>Vitamin C</strong> – Boosts collagen production, brightens skin, and enhances glutathione effects</li>
      <li><strong>Cherry Blossom Extract</strong> – Rich in antioxidants, soothes inflammation, promotes elasticity, provides youthful glow</li>
      <li><strong>Licorice Extract</strong> – Fades dark spots, controls melanin production, improves skin clarity</li>
    </ul>
    <br/>

    <strong>Benefits:</strong>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Skin whitening & brightening – lighter, even-toned skin</li>
      <li>Cell renewal – faster skin regeneration for youthful glow</li>
      <li>Reduces dark spots – fades pigmentation, blemishes</li>
      <li>Anti-aging – minimizes wrinkles and fine lines</li>
      <li>Boosts skin health – protects from free radicals and pollutants</li>
      <li>Clinically tested – safe for all skin types</li>
      <li>Fast results – visible improvement within weeks</li>
    </ul>
    <br/>

    <strong>How to Use:</strong> Consult a skincare professional before use. Follow recommended dosage for optimal results. Pair with healthy lifestyle and proper skincare routine for long-lasting effects.<br/><br/>

    <em class="text-xs text-gray-400">Note: Results may vary. Professional use only. Consult dermatologist before use.</em>
    `,benefits:["6 Sessions per Box","Made in Switzerland","With Cherry Blossom & Licorice Extracts","Skin Whitening & Brightening","Promotes Cell Renewal","Fades Dark Spots & Pigmentation","Anti-Aging & Wrinkle Reduction","Clinically Tested"],sku:"MIRACLE-WHITE-CELL-RENEWAL",volume:"6 Sessions",stock:10},{id:84,name:"Miracle White Pro White 18K 180,000mg Glutathione Injection",category:"Injection",brand:"Miracle White",price:1e4,comparePrice:15e3,image:"/image/miracle-white/pro-white-18k-1.jpg",images:["/image/miracle-white/pro-white-18k-1.jpg","/image/miracle-white/pro-white-18k-2.jpg","/image/miracle-white/pro-white-18k-3.jpg","/image/miracle-white/pro-white-18k-4.jpg"],description:"High-strength 180,000mg glutathione injection with EGF and multivitamins. Rapid skin lightening, antioxidant protection, deep rejuvenation, and pigment control for radiant, youthful skin.",details:`
    <strong>Miracle White Pro White 18K 180,000mg Glutathione Injection</strong><br/><br/>
    A high-strength formula enriched with Epidermal Growth Factor (EGF) and essential multivitamins, offering powerful anti-aging and skin-brightening benefits for a more radiant, youthful appearance.<br/><br/>
    
    <strong>Key Features:</strong><br/>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Strength: 180,000 mg Glutathione complex</li>
      <li>Form: Powder for injection</li>
      <li>Manufacturer: Miracle White</li>
      <li>Enriched with EGF and multivitamins</li>
    </ul>
    <br/>

    <strong>Key Ingredients:</strong><br/>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Glutathione (180,000 mg) – powerful antioxidant, lightens skin</li>
      <li>Epidermal Growth Factor (EGF) – stimulates skin cell growth, reduces fine lines</li>
      <li>Kojic Acid – skin-brightening, antimicrobial</li>
      <li>Alpha-Lipoic Acid – combats free radicals, reduces inflammation</li>
      <li>Ascorbic Acid (Vitamin C) – protects from sun damage, stimulates collagen</li>
      <li>Collagen Forte – enhances elasticity</li>
      <li>Hyaluronic Acid – deep hydration</li>
    </ul>
    <br/>

    <strong>Benefits:</strong>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Rapid skin lightening – up to 7x faster than standard treatments</li>
      <li>Enhanced protection against environmental damage</li>
      <li>Reduces free radicals and oxidative stress</li>
      <li>Deep skin rejuvenation – reduces fine lines and wrinkles</li>
      <li>Controls pigment production – prevents dark spots</li>
      <li>Boosts collagen for firmer, elastic skin</li>
    </ul>
    <br/>

    <strong>How to Use:</strong> Administered by qualified healthcare professional via IV or IM. Follow recommended dosage and treatment schedule. Consistency and sun protection advised for best results.<br/><br/>

    <strong>FAQ:</strong> Results typically visible within a few weeks. Minimal side effects when professionally administered (mild swelling/bruising possible).<br/><br/>

    <em class="text-xs text-gray-400">Note: Results may vary. Professional use only. Consult dermatologist before use.</em>
    `,benefits:["180,000mg Glutathione","Rapid Skin Lightening (7x faster)","With EGF & Multivitamins","Antioxidant & Anti-Inflammatory","Reduces Pigmentation & Dark Spots","Boosts Collagen & Elasticity","Deep Hydration (Hyaluronic Acid)","Anti-Aging & Wrinkle Reduction"],sku:"MIRACLE-WHITE-PRO-WHITE-18K",volume:"1 Box",stock:10},{id:85,name:"Miracle White 99,000,000mg Polypeptide Complex Glutathione 99MIL Skin Whitening Injection",category:"Injection",brand:"Miracle White",price:9500,comparePrice:15e3,image:"/image/miracle-white/99million-1.jpg",images:["/image/miracle-white/99million-1.jpg","/image/miracle-white/99million-2.jpg","/image/miracle-white/99million-3.jpg","/image/miracle-white/99million-4.jpg"],description:"Ultra-high potency 99 million mg Polypeptide Complex Glutathione with EGF, CoQ10, ALA, Kojic Acid, Vitamin C, and stem cell extract. Accelerates skin brightening, fights free radicals, boosts collagen, and deeply hydrates for flawless, youthful skin.",details:`
    <strong>Miracle White 99,000,000mg Polypeptide Complex Glutathione 99MIL Skin Whitening Injection</strong><br/><br/>
    Discover the ultimate solution for skin brightening and anti-aging with this enhanced formulation infused with Epidermal Growth Factor (EGF), multivitamins, and high-potency antioxidants. This scientifically advanced product lightens skin, reduces pigmentation, fights free radicals, promotes collagen production, and deeply hydrates for overall skin health.<br/><br/>
    
    <strong>Key Features:</strong><br/>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Strength: 99,000,000 mg Polypeptide Complex Glutathione (99 Million)</li>
      <li>Packaging Size: 5 x 10 ml vials per box</li>
      <li>Manufacturer: Miracle White</li>
      <li>Form: Injection (IV)</li>
    </ul>
    <br/>

    <strong>Powerful Ingredients (12 Active Components):</strong><br/>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Polypeptide Complex Glutathione (99,000,000 mg) – master antioxidant, neutralizes free radicals, brightens skin</li>
      <li>Coenzyme Q10 (5,000 mg) – boosts skin cell energy, combats aging, improves elasticity</li>
      <li>Epidermal Growth Factor (EGF) (5,000 mg) – stimulates new cell growth, repairs damage</li>
      <li>Alpha Lipoic Acid (8,000 mg) – potent antioxidant, reduces inflammation, slows aging</li>
      <li>Kojic Acid (8,000 mg) – reduces pigmentation, scars, sun damage</li>
      <li>Ascorbic Acid (Vitamin C) (8,000 mg) – boosts collagen, brightens skin, sun protection</li>
      <li>Thioctic Acid (2,800 mg) – enhances antioxidant defense</li>
      <li>Melanin Inhibitor (8,000 mg) – prevents dark spots and pigmentation</li>
      <li>White Cell Enhancer (1,500 mg) – strengthens skin immunity and repair</li>
      <li>Marine Peptide Collagen (5,000 mg) – deep hydration, improves elasticity</li>
      <li>Multivitamin (6,000 mg) – nourishes for enhanced glow</li>
      <li>Cyanocobalamin (Vitamin B12) (1,000 mg) – promotes healing and hydration</li>
      <li>Tomato Stem Cell Extract (1,000 mg) – protects from environmental damage, natural glow</li>
    </ul>
    <br/>

    <strong>Benefits:</strong>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Accelerates skin brightening – works up to 7x faster</li>
      <li>Rejuvenates and firms skin – boosts collagen, repairs tissues</li>
      <li>Strengthens skin defense – shields from environmental stressors</li>
      <li>Hydrates and repairs – improves texture, reduces fine lines</li>
      <li>Combats aging – reduces wrinkles, sagging, age spots</li>
      <li>Regulates pigment – prevents melanin formation, even tone</li>
    </ul>
    <br/>

    <strong>How to Use:</strong> Administer intravenously under professional supervision. Follow healthcare provider's dosage and schedule.<br/><br/>

    <em class="text-xs text-gray-400">Note: Results may vary. Professional use only. Consult dermatologist before use.</em>
    `,benefits:["99,000,000mg Polypeptide Glutathione","With EGF, CoQ10, ALA, Kojic Acid, Vitamin C","Tomato Stem Cell & Marine Collagen","Accelerated Skin Brightening (7x faster)","Anti-Aging & Wrinkle Reduction","Boosts Collagen & Elasticity","Deep Hydration & Repair","Melanin & Pigment Control"],sku:"MIRACLE-WHITE-99MIL-POLYPEPTIDE",volume:"5 x 10 ml vials",stock:10},{id:86,name:"Miracle White 150000mg Magic Skin Whitening Glutathione Injection",category:"Injection",brand:"Miracle White",price:9500,comparePrice:15e3,image:"/image/miracle-white/magic-150000mg-1.jpg",images:["/image/miracle-white/magic-150000mg-1.jpg","/image/miracle-white/magic-150000mg-2.jpg","/image/miracle-white/magic-150000mg-3.jpg","/image/miracle-white/magic-150000mg-4.jpg"],description:"High-strength 150,000mg glutathione injection for deep skin brightening, antioxidant protection, anti-aging, and full-body glow. Reduces pigmentation, dark spots, wrinkles, and promotes collagen.",details:`
    <strong>Miracle White 150000mg Magic Skin Whitening Glutathione Injection</strong><br/><br/>
    Discover radiant skin with Miracle White Magic! Infused with 150,000mg of premium Glutathione, this natural and effective solution targets melanin to lighten and even complexion, combats free radicals as the "master antioxidant," improves elasticity and smoothness, and provides full-body brightening. Ideal for achieving a youthful, spot-free glow.<br/><br/>
    
    <strong>Key Features:</strong><br/>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Strength: 150,000 mg Glutathione complex</li>
      <li>Packaging Size: 10 ml vials per box</li>
      <li>Shelf Life: 12 Months</li>
      <li>Form: Injection (IV)</li>
    </ul>
    <br/>

    <strong>Benefits:</strong>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Deep skin brightening – targets melanin for natural lightening</li>
      <li>Ultimate antioxidant power – fights free radicals, detoxifies, slows aging</li>
      <li>Enhanced skin texture – improves elasticity, smooths fine lines, firms skin</li>
      <li>Full-body glow – even brightening head to toe</li>
      <li>Reduces pigmentation, dark spots, blemishes, wrinkles, and sagging</li>
      <li>Promotes collagen production for youthful appearance</li>
      <li>Shields skin from pollution and sun exposure</li>
    </ul>
    <br/>

    <strong>Usage Instructions:</strong> Administered by trained healthcare professional. Typically 1 injection per week during initial phase. Consult professional for tailored guidance.<br/><br/>

    <em class="text-xs text-gray-400">Note: Results may vary. Professional use only. Consult dermatologist before use.</em>
    `,benefits:["150,000mg Glutathione","Deep Skin Brightening","Ultimate Antioxidant Power","Reduces Pigmentation & Dark Spots","Anti-Aging & Wrinkle Reduction","Improves Elasticity & Firmness","Full-Body Glow","12 Month Shelf Life"],sku:"MIRACLE-WHITE-MAGIC-150K",volume:"1 Box (10 ml vials)",stock:10},{id:87,name:"NC24 9000000mg Ultra Sense Complexion Glutathione Injection",category:"Injection",brand:"NC24",price:8800,comparePrice:12500,image:"/image/nc24/ultra-sense-9000000mg-1.jpg",images:["/image/nc24/ultra-sense-9000000mg-1.jpg","/image/nc24/ultra-sense-9000000mg-2.jpg","/image/nc24/ultra-sense-9000000mg-3.jpg","/image/nc24/ultra-sense-9000000mg-4.jpg"],description:"Japanese glutathione injection for skin brightening, collagen boost, hydration, anti-aging, acne treatment, and wrinkle reduction. Dermatologically tested with no side effects.",details:`
    <strong>NC24 9000000mg Ultra Sense Complexion Glutathione Injection</strong><br/><br/>
    A Japanese injection formulated for skin brightening, boosting collagen levels for brighter, healthier skin. Contains antioxidants that reduce oxidative stress, making skin glow within weeks and improving overall skin quality. Dermatologically tested and proven safe, it removes dryness, smooths skin, and gives an everlasting smooth glowing texture.<br/><br/>
    
    <strong>Key Features:</strong><br/>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Strength: 9,000,000 mg (9 million) Glutathione complex</li>
      <li>Packaging Size: 10 Sessions per box</li>
      <li>L Glutathione: 900,000 mg</li>
      <li>Epidermal Growth Factor: 15,000 mg</li>
      <li>Grade Standard: A+</li>
      <li>Manufactured By: Japan</li>
      <li>Vegetarian | No side effects | Men & Women</li>
    </ul>
    <br/>

    <strong>Benefits:</strong>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Brightens skin shade by increasing collagen</li>
      <li>Provides deep hydration for glowing skin</li>
      <li>Removes dryness</li>
      <li>Anti-aging effects</li>
      <li>Treats acne, eczema, and discoloration</li>
      <li>Reduces skin inflammation and wrinkles</li>
    </ul>
    <br/>

    <strong>How to Use:</strong> One ampoule per injection every week for 1-2 months. Administer Intravenous IV Infusion (Drip).<br/><br/>

    <strong>Not Suitable For:</strong> Breastfeeding, pregnant women, vitamin allergies, cardiovascular problems.<br/><br/>

    <em class="text-xs text-gray-400">Note: Results may vary. Professional use only. Consult dermatologist before use.</em>
    `,benefits:["10 Sessions per Box","Made in Japan","9,000,000mg Glutathione","Boosts Collagen & Hydration","Anti-Aging & Wrinkle Reduction","Treats Acne, Eczema & Discoloration","Dermatologically Tested","No Side Effects"],sku:"NC24-ULTRA-SENSE-9M",volume:"10 Sessions",stock:10},{id:88,name:"Health Tone Weight Gain Capsules",category:"Weight Gain",brand:"Health Tone",price:2e3,comparePrice:3500,image:"/image/health-tone/weight-gain-capsules-1.jpg",images:["/image/health-tone/weight-gain-capsules-1.jpg","/image/health-tone/weight-gain-capsules-2.jpg","/image/health-tone/weight-gain-capsules-3.jpg","/image/health-tone/weight-gain-capsules-4.jpg"],description:"Natural herbal weight gain capsules formulated with Thai herbs. Enhances appetite, improves digestion, promotes muscle growth, and supports healthy weight gain. 100% herbal, no steroids.",details:`
    <strong>Health Tone Weight Gain Capsules</strong><br/><br/>
    If you're finding it difficult to put on weight despite a nutritious diet and consistent exercise, consider Health Tone Weight Gain Capsules as a natural and effective aid. Crafted from organic, herbal ingredients, these capsules are designed to enhance your appetite, improve digestion, and promote muscle growth, contributing to healthy weight gain.<br/><br/>
    
    <strong>Key Features:</strong><br/>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Form: Capsule</li>
      <li>Country of Origin: Thailand</li>
      <li>Packaging: 1 Box Pack – 90 Capsules</li>
      <li>Strength: 500mg per capsule</li>
      <li>Usage: Weight Gainer</li>
      <li>Suitable for both men & women</li>
      <li>100% Herbal & Natural – no steroids</li>
    </ul>
    <br/>

    <strong>Ingredients (Herbal Blend):</strong><br/>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Withania Somnifera (Ashwagandha) – 200mg</li>
      <li>Liquorice Root – 50mg</li>
      <li>Vitis Vinifera (Grape Seed) – 50mg</li>
      <li>Asparagus Racemosus – 50mg</li>
      <li>Zingiber Officinale (Ginger) – 50mg</li>
      <li>Amoma Sulbactam – 25mg</li>
      <li>Syzygium Aromaticum (Clove) – 25mg</li>
      <li>Cinnamomum Ribes – 25mg</li>
      <li>Terminalia Bellerica – 25mg</li>
    </ul>
    <br/>

    <strong>Benefits:</strong>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Helps gain desired weight naturally</li>
      <li>Increases energy levels and keeps you fit</li>
      <li>Improves skin complexion and gives glowing skin</li>
      <li>Boosts appetite</li>
      <li>Increases protein synthesis and absorption</li>
      <li>Improves stamina</li>
      <li>Builds an attractive physique</li>
      <li>Strengthens digestive system – better digestion and absorption</li>
      <li>Promotes weight gain in right proportions</li>
      <li>Enhances metabolism</li>
      <li>Improves muscle mass and bone density</li>
      <li>Safe for both males and females</li>
    </ul>
    <br/>

    <strong>Dosage:</strong> 1 capsule twice daily after meals (breakfast, lunch, or dinner) with water. Beginners should take once daily to build tolerance, then increase to twice daily. For maintenance, reduce to one capsule per day in the third month, or one capsule every 2 days for an additional six months for permanent results.<br/><br/>

    <strong>Expiry:</strong> Dec 2029<br/><br/>

    <em class="text-xs text-gray-400">Note: Results may vary from person to person. Consult physician before use.</em>
    `,benefits:["90 Capsules per Box","Made in Thailand","100% Herbal & Natural","Increases Appetite & Digestion","Promotes Muscle Growth","Boosts Energy & Stamina","Improves Metabolism","No Steroids"],sku:"HEALTH-TONE-WEIGHT-GAIN-90C",volume:"90 Capsules",stock:10},{id:89,name:"Neutro Skin Grape Seed Cranberry Glutathione Skin Whitening Softgels",category:"Capsules",brand:"Neutro Skin",price:4500,comparePrice:10500,image:"/image/neutro-skin/grape-seed-cranberry-1.jpg",images:["/image/neutro-skin/grape-seed-cranberry-1.jpg","/image/neutro-skin/grape-seed-cranberry-2.jpg","/image/neutro-skin/grape-seed-cranberry-3.jpg","/image/neutro-skin/grape-seed-cranberry-4.jpg"],description:"Premium dietary supplement with E-UF Glutathione, Grape Seed Extract, Nano Cranberry Extract, and advanced peptides. Supports skin brightening, antioxidant protection, collagen health, and overall wellness.",details:`
    <strong>Neutro Skin Grape Seed Cranberry Glutathione Skin Whitening Softgels</strong><br/><br/>
    A premium dietary supplement developed to support skin health, antioxidant protection, and overall wellness through a scientifically balanced formulation. In today's fast-paced lifestyle, factors such as pollution, stress, and poor nutrition can impact skin quality, leading to dullness, uneven tone, and reduced elasticity. This supplement is designed to address these concerns by nourishing the body internally.<br/><br/>
    
    <strong>Key Features:</strong><br/>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>100 Softgels per bottle</li>
      <li>Made in France</li>
      <li>FDA Approved | GMP Certified | FSSAI Approved</li>
      <li>E-UF Technology for enhanced purity and absorption</li>
    </ul>
    <br/>

    <strong>Ingredients & Benefits:</strong><br/>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li><strong>E-UF Glutathione – 500,000 mg:</strong> Supports skin brightening, antioxidant protection, and detoxification</li>
      <li><strong>E-UF Grape Seed Extract Stem Cell – 20,000 mg:</strong> Supports skin elasticity, collagen strength, protection from environmental damage</li>
      <li><strong>E-UF Nano Cranberry Extract – 80,000 mg:</strong> Supports urinary tract health, immune function, antioxidant protection</li>
      <li><strong>E-UF Tripeptide-10 Citrulline – 9,000 mg:</strong> Supports collagen structure, improves skin firmness and texture</li>
      <li><strong>E-UF Tripeptide-1 – 3,800 mg:</strong> Supports skin repair and regeneration processes</li>
      <li><strong>E-UF Fermented Extract – 900 mcg:</strong> Enhances nutrient absorption and overall effectiveness</li>
      <li><strong>E-UF Hexapeptide-37 – 1,800 mg:</strong> Supports skin hydration, elasticity, and cellular activity</li>
    </ul>
    <br/>

    <strong>Benefits:</strong>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Supports brighter and more even skin tone</li>
      <li>Helps improve skin texture and smoothness</li>
      <li>Provides powerful antioxidant protection</li>
      <li>Helps reduce dullness and tired-looking skin</li>
      <li>Promotes natural skin glow and radiance</li>
      <li>Supports immune system health</li>
      <li>Helps maintain urinary tract wellness</li>
      <li>Enhances skin hydration and repair</li>
      <li>Contributes to overall wellness and vitality</li>
    </ul>
    <br/>

    <strong>How to Use:</strong> Take 1 capsule daily with water, preferably after meals. Store at room temperature, away from direct sunlight and heat.<br/><br/>

    <strong>FAQs:</strong> Results may vary; improvements often noticed with consistent use over a few weeks. Suitable for both men and women. Consult healthcare professional if needed.<br/><br/>

    <em class="text-xs text-gray-400">Note: Professional use only. Consult physician before use.</em>
    `,benefits:["Made in France","100 Softgels per Bottle","E-UF Glutathione + Grape Seed + Cranberry","Supports Skin Brightening","Antioxidant & Detox Support","Boosts Collagen & Elasticity","Supports Immunity & Urinary Health","With Advanced Peptides"],sku:"PTR000522",volume:"100 Softgels",stock:10},{id:90,name:"Dr James GMP Glutathione Skin Whitening Pills",category:"Capsules",brand:"Dr James",price:1800,comparePrice:3e3,image:"/image/drjames/gmp-glutathione-pills-1.jpg",images:["/image/drjames/gmp-glutathione-pills-1.jpg","/image/drjames/gmp-glutathione-pills-2.jpg","/image/drjames/gmp-glutathione-pills-3.jpg","/image/drjames/gmp-glutathione-pills-4.jpg"],description:"Dermatologist-recommended glutathione skin whitening pills with 1000mg L-Glutathione, Alpha Lipoic Acid, and other skin-brightening ingredients. Reduces melanin, whitens skin, provides anti-aging and antioxidant benefits.",details:`
    <strong>Dr James GMP Glutathione Skin Whitening Pills</strong><br/><br/>
    Uncover the beauty in you with Dr James Glutathione Skin Whitening Pills, specially intended for healthy white, sophisticated skin with multi-targeted action. Brightens, lightens tone, and clears skin by reducing melanin appearance and boosting the whitening process. Dermatologist-recommended formula works below the skin surface for lasting results.<br/><br/>
    
    <strong>Key Features:</strong><br/>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>60 Capsules per bottle</li>
      <li>GMP Certified</li>
      <li>Made in USA</li>
      <li>Paraben Free & Organic</li>
      <li>Expiry: Dec 2026</li>
    </ul>
    <br/>

    <strong>Ingredients (Per Capsule):</strong><br/>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>L-Glutathione – 1000mg</li>
      <li>Alpha Lipoic Acid – 50mg</li>
      <li>Thiotic Acid – 50mg</li>
      <li>Liquorice Root – 50mg</li>
      <li>Malic Acid – 25mg</li>
      <li>Niacinamide – 25mg</li>
    </ul>
    <br/>

    <strong>Benefits:</strong>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li><strong>Whitens Skin:</strong> Converts dark/brown pigmentation to white glowing pigmentation; gives whiter, fairer, softer skin</li>
      <li><strong>Anti-Aging Components:</strong> Brings back youthful glow by reducing oxidized fats and increasing carbohydrate metabolism</li>
      <li><strong>Antioxidant Properties:</strong> Reduces discoloration, empowers skin regeneration, supports immune system, helps prevent liver cancer</li>
      <li><strong>Other Benefits:</strong> Removes pimples, age marks, dullness, heavily pigmented cells; reduces brown spots; effective for alcoholic drinkers, liver disorders, low sperm count, heart problems, asthma/allergies, weak immune system</li>
    </ul>
    <br/>

    <strong>Dosage:</strong> Two capsules daily – one before breakfast and one before bed. For best results, take with 1000mg Vitamin C daily. After desired skin tone, maintenance dose: 500mg daily.<br/><br/>

    <strong>Note:</strong> Allow at least six weeks for visible results. Consistent use and sun protection yield results within first two weeks.<br/><br/>

    <em class="text-xs text-gray-400">Note: Results may vary from person to person. Consult dermatologist before use.</em>
    `,benefits:["60 Capsules per Bottle","Made in USA","1000mg L-Glutathione","Dermatologist Recommended","Whitens Skin & Reduces Melanin","Anti-Aging & Antioxidant","Removes Pimples & Age Marks","Supports Immune System"],sku:"DRJAMES-GMP-GLUTA-60C",volume:"60 Capsules",stock:10},{id:91,name:"Ratiopharm L Carnitine 10G Weight Loss Injection",category:"Weight Loss",brand:"Ratiopharm",price:7500,comparePrice:1e4,image:"/image/l-carnitine/l-carnitine-10g-1.jpg",images:["/image/l-carnitine/l-carnitine-10g-1.jpg","/image/ratiopharm/l-carnitine-10g-2.jpg","/image/ratiopharm/l-carnitine-10g-3.jpg","/image/ratiopharm/l-carnitine-10g-4.jpg"],description:"German L-Carnitine injection for weight loss, fat burning, energy boost, heart health, and anti-aging. Helps transport fatty acids into mitochondria for energy production.",details:`
    <strong>Ratiopharm L Carnitine 10G Weight Loss Injection</strong><br/><br/>
    Carnitine is biosynthesized from lysine and is connected to energy production from branched-chain amino acids. It exists in high concentrations in skeletal muscle and heart, regulating basal metabolism. It shifts glucose metabolism from glycolysis to glycogen storage and enhances transport of long-chain fatty acids into mitochondria for oxidation and energy production.<br/><br/>
    
    <strong>Key Features:</strong><br/>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>10 Ampoules per box</li>
      <li>Made in Germany</li>
      <li>Paraben Free & Organic</li>
      <li>Administration: IV or Subcutaneous</li>
    </ul>
    <br/>

    <strong>Benefits:</strong>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Enhances cellular energy production – supports immune system, heart, and overall body function</li>
      <li>Lowers triglycerides and increases HDL (good cholesterol)</li>
      <li>Helps prevent heart disease and heart failure</li>
      <li>Supports weight loss, especially when reducing carbohydrates</li>
      <li>Boosts natural energy levels without damage</li>
      <li>Improves exercise endurance and prevents tissue damage from oxygen deficiency</li>
      <li>Acetyl-L-Carnitine reduces nerve cell damage and may help prevent Alzheimer's</li>
      <li>Positive effect on mental health and stress reduction</li>
      <li>Supports liver function and overall health</li>
    </ul>
    <br/>

    <strong>Recommended Dosage:</strong>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Weight control: 1-2 ampoules IV every 4 days</li>
      <li>Subcutaneous fat management: 1-2 ampoules subcutaneously</li>
      <li>Anti-aging & wellness: 10 ampoules in divided doses over 1 month</li>
    </ul>
    <br/>

    <strong>Not Suitable For:</strong> Breastfeeding women, during menstruation, vitamin allergies, pregnant women, cardiovascular problems.<br/><br/>

    <strong>Advice:</strong> Drink 3-3.4 liters of water daily.<br/><br/>

    <em class="text-xs text-gray-400">Note: Results may vary from person to person. Professional use only. Consult physician before use.</em>
    `,benefits:["10 Ampoules per Box","Made in Germany","Supports Weight Loss & Fat Burning","Boosts Energy & Stamina","Improves Heart Health","Lowers Triglycerides, Increases HDL","Anti-Aging & Mental Health","IV or Subcutaneous Administration"],sku:"RATIOPHARM-L-CARNITINE-10G",volume:"10 Ampoules",stock:10},{id:92,name:"Ratiopharm L Carnitine 20 Gram Weight & Fat Loss Injection",category:"Weight Loss",brand:"Ratiopharm",price:7800,comparePrice:13e3,image:"/image/l-carnitine/l-carnitine-20g-1.jpg",images:["/image/l-carnitine/l-carnitine-20g-1.jpg","/image/l-carnitine/l-carnitine-20g-2.jpg","/image/l-carnitine/l-carnitine-20g-3.jpg","/image/l-carnitine/l-carnitine-20g-4.jpg"],description:"German L-Carnitine plus CLA injection for weight loss, fat burning, energy boost, muscle tone, metabolism enhancement, and overall health support. Safe, lab-tested formula for men and women.",details:`
    <strong>Ratiopharm L Carnitine 20 Gram Weight & Fat Loss Injection</strong><br/><br/>
    L-Carnitene plus CLA is a mix designed to boost your body's natural fat-burning process. This combo helps your body use fat as fuel, making it easier to diet and stay active. It improves exercise performance, reduces fatigue caused by lactic acid, and supports weight loss and overall health without known side effects.<br/><br/>
    
    <strong>Key Features:</strong><br/>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>10 Injection Sets per box</li>
      <li>Made in Germany</li>
      <li>Paraben Free & Organic</li>
      <li>Suitable for both men and women</li>
      <li>Lab-tested formula focused on safe fat burning</li>
    </ul>
    <br/>

    <strong>Benefits:</strong>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Prevents new fat buildup – helps keep figure lean</li>
      <li>Weight loss and BMI reduction</li>
      <li>Energy booster for daily tasks</li>
      <li>Enhances muscle tone for firmer, tighter appearance</li>
      <li>Speeds up fat breakdown in the body</li>
      <li>Boosts metabolism and calorie burn</li>
      <li>Blocks fat production – prevents new fat cells</li>
      <li>Optimizes liver and kidney health</li>
      <li>Supports heart health and minimizes heart complications</li>
      <li>Promotes brain health and cognitive function</li>
      <li>Helps regulate blood pressure and alleviate bodily stress</li>
      <li>Elevates energy levels for daily dynamism</li>
    </ul>
    <br/>

    <strong>Function:</strong> Transforms body fat into energy, enhances overall health, stimulates proper functioning of brain, kidneys, liver, and heart, boosts muscle movement.<br/><br/>

    <strong>Usage:</strong> Administered under professional supervision. Follow healthcare provider's dosage recommendations.<br/><br/>

    <em class="text-xs text-gray-400">Note: Results may vary from person to person. Professional use only. Consult physician before use.</em>
    `,benefits:["10 Injection Sets per Box","Made in Germany","L-Carnitine + CLA Formula","Weight Loss & Fat Burning","Boosts Metabolism & Energy","Enhances Muscle Tone","Supports Heart, Liver & Kidney Health","Regulates Blood Pressure"],sku:"RATIOPHARM-L-CARNITINE-20G",volume:"10 Sets",stock:10},{id:93,name:"L Carnitine Probio CLA 35g Advance Weight Loss Injection",category:"Weight Loss",brand:"L-Carnitine",price:8e3,comparePrice:1e4,image:"/image/l-carnitine/probio-cla-35g-1.jpg",images:["/image/l-carnitine/probio-cla-35g-1.jpg","/image/l-carnitine/probio-cla-35g-2.jpeg","/image/l-carnitine/probio-cla-35g-3.jpeg","/image/l-carnitine/probio-cla-35g-4.jpeg"],description:"Advanced weight loss injection with L-Carnitine, CLA, and PROBIO for enhanced lipid metabolism, fatty acid oxidation, and accelerated fat-burning process.",details:`
    <strong>L Carnitine Probio CLA 35g Advance Weight Loss Injection</strong><br/><br/>
    L-Carnitine injections allow the amino acid to enter the blood and enhance lipid metabolism faster than when administered as an oral supplement. This advanced formulation combines L-Carnitine with CLA (Conjugated Linoleic Acid) and PROBIO for superior fat-burning and weight loss support.<br/><br/>
    
    <strong>Key Features:</strong><br/>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Strength: 2000 mg</li>
      <li>Packaging Size: 10 Vials (10ml each)</li>
      <li>Form: Injection</li>
      <li>Route of Administration: Intravenous (IV)</li>
      <li>Pack Type: Box</li>
      <li>Formulation: With CLA</li>
      <li>Composition: Amino acid, CLA, PROBIO</li>
      <li>Country of Origin: Germany</li>
      <li>Shelf Life: 36 Months</li>
      <li>Prescription/Non-Prescription: Non-Prescription</li>
    </ul>
    <br/>

    <strong>Benefits:</strong>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Promotes fatty acid oxidation</li>
      <li>Accelerates the fat-burning process</li>
      <li>Enhances lipid metabolism faster than oral supplements</li>
      <li>Supports weight loss and fat reduction</li>
      <li>Improves energy utilization from fats</li>
    </ul>
    <br/>

    <strong>How It Works:</strong> L-Carnitine facilitates the transport of fatty acids into mitochondria where they are oxidized for energy. Combined with CLA and PROBIO, this injection boosts metabolic rate and promotes efficient fat burning.<br/><br/>

    <strong>Usage:</strong> Administered intravenously under professional supervision. Follow healthcare provider's recommendations for dosage and frequency.<br/><br/>

    <em class="text-xs text-gray-400">Note: Results may vary. Consult healthcare professional before use. Not a substitute for diet and exercise.</em>
    `,benefits:["10 Vials (10ml each)","Made in Germany","2000mg Strength","With CLA & PROBIO","Promotes Fatty Acid Oxidation","Accelerates Fat Burning","Enhances Lipid Metabolism","Non-Prescription"],sku:"LCARNITINE-PROBIO-CLA-10ML",volume:"10 Vials (10ml each)",stock:10},{id:94,name:"Rejuran Healer - Korean PN Skin Booster for Anti-Aging, Skin Repair and Regeneration",category:"C & D Fillers",brand:"Rejuran",price:12500,comparePrice:15e3,image:"/image/rejuran/healer-1.jpeg",images:["/image/rejuran/healer-1.jpeg","/image/rejuran/healer-2.jpeg","/image/rejuran/healer-3.jpeg","/image/rejuran/healer-4.jpeg"],description:"Korean PN (Polynucleotide) skin booster derived from salmon DNA. Stimulates cell regeneration, repairs damaged skin, reduces wrinkles, and restores youthful elasticity.",details:`
    <strong>Rejuran Healer - Korean PN Skin Booster</strong><br/><br/>
    Rejuran Healer is a pioneering Korean skin booster formulated with Polynucleotides (PN) derived from salmon DNA. It stimulates cell regeneration, repairs damaged skin, reduces wrinkles, and restores youthful elasticity. Known as the "Youth Healer", it is highly trusted in anti-aging and rejuvenation treatments.<br/><br/>
    
    <strong>Key Features:</strong><br/>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>PN-based skin healing & regeneration therapy</li>
      <li>Repairs damaged skin cells & improves barrier function</li>
      <li>Boosts collagen & elastin production</li>
      <li>Reduces wrinkles, fine lines & acne scars</li>
      <li>Improves elasticity, thickness & skin texture</li>
      <li>Provides long-lasting anti-aging benefits</li>
    </ul>
    <br/>

    <strong>Specifications:</strong><br/>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Packaging Size: 2 ml (Pre-filled 2 syringes - PN solution)</li>
      <li>Packaging Type: Syringe</li>
      <li>Composition: Polynucleotides (PN)</li>
      <li>Shelf Life: 24 months</li>
      <li>Application Areas: Face, neck, décolletage, hands</li>
    </ul>
    <br/>

    <strong>Applications:</strong><br/>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Anti-aging & wrinkle reduction</li>
      <li>Repair of photoaged & environmentally damaged skin</li>
      <li>Acne scar improvement</li>
      <li>Elasticity & skin thickness restoration</li>
      <li>Hydration & rejuvenation of face, neck, décolletage & hands</li>
    </ul>
    <br/>

    <strong>How to Use:</strong> Administered by a licensed professional via injection into the dermis. Typically 2-3 sessions spaced 3-4 weeks apart for optimal results.<br/><br/>

    <strong>Origin:</strong> Republic of Korea<br/><br/>

    <em class="text-xs text-gray-400">Note: Professional use only. Consult dermatologist before use. Results may vary.</em>
    `,benefits:["Made in Korea","PN (Polynucleotide) Technology","Stimulates Cell Regeneration","Repairs Damaged Skin","Reduces Wrinkles & Acne Scars","Boosts Collagen & Elastin","Improves Elasticity & Texture","Long-Lasting Anti-Aging"],sku:"REJURAN-HEALER-2ML",volume:"2 ml (2 syringes)",stock:10},{id:95,name:"Nc24 Lipolytic Solution 10,000mg - Weight Loss Injection",category:"Weight Loss",brand:"NC24",price:9e3,comparePrice:12e3,image:"/image/nc24/lipolytic-solution-10000mg-1.jpeg",images:["/image/nc24/lipolytic-solution-10000mg-1.jpeg","/image/nc24/lipolytic-solution-10000mg-2.jpeg","/image/nc24/lipolytic-solution-10000mg-3.jpeg","/image/nc24/lipolytic-solution-10000mg-4.jpeg"],description:"Lipolytic injection for targeted fat reduction, especially on face and neck. Contains sodium deoxycholate and phosphatidylcholine to dissolve fat pads, contour areas, and improve facial proportions.",details:`
    <strong>Nc24 Lipolytic Solution 10,000mg - Weight Loss Injection</strong><br/><br/>
    Persistence and hypertrophy of fat pads, particularly of the face and neck region, disturb beauty proportions and demand effective treatments. Phosphatidylcholine and deoxycholic acid are the most commonly used solutions for injection lipolysis. Sodium deoxycholate preparation is approved by the US Food and Drug Administration (FDA) for this purpose. This article describes the correct use of solution to achieve fat reduction and ensure safety, including patient selection, assessment, dosing, injection techniques, post-treatment care, and complications.<br/><br/>
    
    The demand for fat reduction injections in aesthetic therapies has always been on the rise. An effective reduction of this fat helps individuals achieve better appearance and the desired contoured face and neck.<br/><br/>
    
    <strong>Key Features:</strong><br/>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Strength: 10,000 mg active lipolytic complex</li>
      <li>Packaging Size: 10ml x 5 vials per box</li>
      <li>Form: Injectable solution</li>
      <li>Brand: NC24</li>
      <li>Gender: Men & Women</li>
      <li>Usage: Body contouring, fat reduction</li>
      <li>FSSAI Certified</li>
      <li>Dose: Can be administered once per week</li>
    </ul>
    <br/>

    <strong>Composition & Mechanism:</strong><br/>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Sodium Deoxycholate – FDA-approved agent that disrupts fat cell membranes</li>
      <li>Phosphatidylcholine – Helps emulsify and dissolve adipose tissue</li>
      <li>Synergistic lipolytic action for targeted fat reduction</li>
    </ul>
    <br/>

    <strong>Benefits:</strong>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Targeted fat reduction – especially effective on face, neck, chin, and small body areas</li>
      <li>Improves facial and neck contours</li>
      <li>Non-surgical alternative for fat pad reduction</li>
      <li>FDA-approved sodium deoxycholate formulation</li>
      <li>Supports weight loss and fat burning efforts</li>
      <li>Can be used for stubborn fat pockets</li>
    </ul>
    <br/>

    <strong>Usage Instructions:</strong><br/>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Administered by qualified healthcare professional</li>
      <li>Typically injected once per week into targeted fat pads</li>
      <li>Treatment course depends on individual needs and response</li>
      <li>Post-treatment care: Avoid strenuous activity, apply cold compress if needed</li>
    </ul>
    <br/>

    <strong>Note:</strong> Wholesale and PCD Pharma available. Results may vary. Professional use only.<br/><br/>

    <em class="text-xs text-gray-400">Note: Consult a qualified practitioner before use. Proper patient selection and technique are essential for safety and efficacy.</em>
    `,benefits:["Targeted Fat Reduction (Face & Neck)","FDA-Approved Sodium Deoxycholate","Non-Surgical Lipolysis","Improves Facial Contours","10,000 mg Strength","5 Vials per Box","FSSAI Certified","Weekly Administration"],sku:"NC24-LIPOLYTIC-10K",volume:"5 Vials (10ml each)",stock:10},{id:96,name:"Botulax 100 Injection Botulinumtoxina 100iu",category:"C & D Fillers",brand:"Botulax",price:5500,comparePrice:7500,image:"/image/botulax/botulax-100-1.jpeg",images:["/image/botulax/botulax-100-1.jpeg","/image/botulax/botulax-100-2.jpeg","/image/botulax/botulax-100-3.jpeg","/image/botulax/botulax-100-4.jpeg"],description:"Botulinum toxin type A injection for temporary relaxation of facial muscles, smoothing forehead lines, crow's feet, and frown lines. KFDA-approved with high purity and efficacy.",details:`
    <strong>Botulax 100 Injection Botulinumtoxina 100iu</strong><br/><br/>
    BOTULAX is a peripheral muscle relaxant containing purified botulinum toxin type A (with haemagglutinin) and sodium chloride. It blocks the transmission of nerve impulses, temporarily paralyzing facial muscles to relax wrinkles. Produced from fermentation of Hall strain Clostridium botulinum.<br/><br/>
    
    <strong>Active Ingredient:</strong> Clostridium botulinum toxin type A – 100 units (U)<br/><br/>
    
    <strong>Key Features:</strong><br/>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Dose: 100 IU per vial</li>
      <li>Potency variation tightly controlled (91-115 units/vial)</li>
      <li>Toxin complex size: 900kDa – minimizes spread outside injection site</li>
      <li>GMP approved by KFDA</li>
      <li>Sterile, vacuum-dried, preservative-free</li>
      <li>Shelf life: 3 years (freeze-dried)</li>
      <li>Storage: +2°C to +8°C (refrigerated)</li>
    </ul>
    <br/>

    <strong>Mode of Action:</strong> Botulinum toxin type A blocks nerve signals to muscles. Injected muscles cannot contract, which relaxes and softens wrinkles.<br/><br/>

    <strong>Applications:</strong>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Forehead lines</li>
      <li>Crow's feet (wrinkles around eyes)</li>
      <li>Frown lines (lion's wrinkle)</li>
      <li>Horizontal and vertical neck wrinkles</li>
      <li>Lip contour correction</li>
      <li>Bruxism (teeth grinding)</li>
    </ul>
    <br/>

    <strong>How to Use:</strong> Reconstitute powder with preservative-free saline. For 100 units, add 2.5 ml saline. Administer intramuscularly by qualified professional.<br/><br/>

    <strong>Packaging:</strong> 1 vial per box (powder under pressure – may appear empty).<br/><br/>

    <strong>Effectiveness:</strong> High patient satisfaction, precise and even effect at injection.<br/><br/>

    <em class="text-xs text-gray-400">Note: Professional use only. Prescription required. Consult dermatologist before use.</em>
    `,benefits:["100 IU Botulinum Toxin Type A","Smooths Forehead Lines","Reduces Crow's Feet","Softens Frown Lines","Corrects Lip Contour","Treats Neck Wrinkles","Helps Bruxism","KFDA Approved & GMP Certified"],sku:"BOTULAX-100IU",volume:"1 Vial",stock:10},{id:97,name:"Nabota 100IU Vial Injection",category:"C & D Fillers",brand:"NABOTA",price:7500,comparePrice:9e3,image:"/image/nabota/nabota-100iu-1.jpeg",images:["/image/nabota/nabota-100iu-1.jpeg","/image/nabota/nabota-100iu-2.jpg","/image/nabota/nabota-100iu-3.jpg","/image/nabota/nabota-100iu-4.jpg"],description:"Botulinum toxin type A injection for treatment of localized muscle spasm, wry neck, blepharospasm, foot deformity in cerebral palsy, and chronic migraines.",details:`
    <strong>Nabota 100IU Vial Injection</strong><br/><br/>
    Nabota 100IU Injection is used in the treatment of localized muscle spasm. It relieves wry neck (spasmodic torticollis) in adults, involuntary closure of eyelids (blepharospasm), and foot deformity due to spasticity in children with cerebral palsy. It may also be prescribed for chronic migraines.<br/><br/>
    
    <strong>Key Features:</strong><br/>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Strength: 100 IU per vial</li>
      <li>Brand: NABOTA</li>
      <li>Product Type: Finished product (botulinum toxin type A)</li>
      <li>Storage: Cold temperature (refrigerate)</li>
      <li>Usage: Hospital / Professional use</li>
    </ul>
    <br/>

    <strong>Therapeutic Indications:</strong>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Wry neck (spasmodic torticollis) in adults</li>
      <li>Blepharospasm (involuntary eyelid closure)</li>
      <li>Foot deformity due to spasticity in children with cerebral palsy</li>
      <li>Chronic migraines (as prescribed)</li>
      <li>Other localized muscle spasm conditions</li>
    </ul>
    <br/>

    <strong>Mechanism of Action:</strong> Botulinum toxin type A blocks nerve signals to muscles, causing temporary muscle relaxation. This reduces abnormal muscle contractions, alleviating pain and improving function in affected areas.<br/><br/>

    <strong>Administration:</strong> Must be reconstituted and administered by a qualified healthcare professional via intramuscular injection. Dosage depends on indication, muscle size, and patient response.<br/><br/>

    <strong>Storage:</strong> Store in cold temperature (2°C to 8°C) as per manufacturer guidelines. Do not freeze.<br/><br/>

    <em class="text-xs text-gray-400">Note: Prescription required. Professional use only. Consult physician before use.</em>
    `,benefits:["100 IU Botulinum Toxin Type A","Treats Localized Muscle Spasm","Relieves Wry Neck (Spasmodic Torticollis)","Treats Blepharospasm","Helps Foot Deformity in Cerebral Palsy","Used for Chronic Migraines","Cold Storage Required","Professional Use Only"],sku:"NABOTA-100IU-VIAL",volume:"1 Vial",stock:10},{id:98,name:"St Dalfour Filipina Beauty Instant Glowing Cream",category:"Cream",brand:"St Dalfour",price:2e3,comparePrice:3e3,image:"/image/st-dalfour/filipina-beauty-cream-1.jpg",images:["/image/st-dalfour/filipina-beauty-cream-1.jpg","/image/st-dalfour/filipina-beauty-cream-2.jpeg","/image/st-dalfour/filipina-beauty-cream-3.jpeg","/image/st-dalfour/filipina-beauty-cream-4.jpeg"],description:"Premium skincare formula that lightens dark spots, evens skin tone, and enhances natural radiance. Enriched with glutathione, alpha arbutin, kojic acid, vitamin C, and vitamin B3.",details:`
    <strong>St Dalfour Filipina Beauty Instant Glowing Cream</strong><br/><br/>
    A premium skincare formula designed to lighten dark spots, even out skin tone, and enhance natural radiance. Enriched with safe and effective brightening agents, it works by reducing excess melanin production, targeting pigmentation, acne scars, sun damage, and dullness.<br/><br/>
    
    <strong>Key Ingredients:</strong><br/>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li><strong>Glutathione:</strong> Robust antioxidant that reduces excess melanin production and gives radiant glow</li>
      <li><strong>Alpha Arbutin:</strong> Rivals pigmentation, whitening attributes, revives gloomy skin</li>
      <li><strong>Kojic Acid:</strong> Tackles discoloration, patches, and uneven skin tone</li>
      <li><strong>Vitamin C:</strong> Rejuvenates skin and supports collagen production</li>
      <li><strong>Vitamin B3 (Niacinamide):</strong> Powerful anti-aging, tightens skin, reduces fine lines, wrinkles, crow's feet, and pores</li>
      <li><strong>Glycolic Acid:</strong> Removes dead skin delicately for supple, youthful, hydrated skin</li>
      <li><strong>Azelaic Acid:</strong> Fades blemishes, inflammation, and redness for spotless, fresh skin</li>
      <li><strong>Liquorice Root Extract:</strong> Reduces discomfort and skin irritation, soothes and relieves skin</li>
    </ul>
    <br/>

    <strong>Key Features:</strong><br/>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Pack Size: 50 g / 50 ml jar</li>
      <li>Skin Type: For all skin types</li>
      <li>Time Used: Night (suitable for twice daily use with sunscreen during day)</li>
      <li>Special Features: Glow & Shine, Skin Whitening, Anti-Tan, Skin Lightening, Spot Removal</li>
      <li>Ingredients: Natural / Herbal</li>
      <li>Shelf Life: 36 months</li>
    </ul>
    <br/>

    <strong>Benefits:</strong>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Lessens uneven skin tone – delivers velvety and dewy skin</li>
      <li>Brightening and whitening – enhances complexion with natural glow</li>
      <li>Removes scars and acne – clears skin concerns for healthy, confident self</li>
      <li>Tackles hyperpigmentation – deals with discoloration and dark spots</li>
      <li>Anti-aging attributes – reverses aging signs, provides inner glow</li>
    </ul>
    <br/>

    <strong>How to Use:</strong> Apply a small amount to cleansed skin and massage gently in circular motions until fully absorbed. For best results, use twice daily and follow with sunscreen during the day.<br/><br/>

    <strong>Ideal For:</strong> All skin types looking for a fairer, clearer, and more even-toned complexion.<br/><br/>

    <em class="text-xs text-gray-400">Note: For external use only. Discontinue if irritation occurs.</em>
    `,benefits:["Lightens Dark Spots & Evens Skin Tone","Reduces Excess Melanin Production","Tackles Pigmentation, Acne Scars & Sun Damage","Anti-Aging – Reduces Fine Lines & Wrinkles","Brightens & Whitens Complexion","Natural Ingredients","For All Skin Types","36 Months Shelf Life"],sku:"ST-DALFOUR-FILIPINA-BEAUTY-50G",volume:"50 g",stock:10},{id:99,name:"Innotox 100iu Injection",category:"C & D Fillers",brand:"Innotox",price:6500,comparePrice:8e3,image:"/image/innotox/innotox-100iu-1.jpeg",images:["/image/innotox/innotox-100iu-1.jpeg","/image/innotox/innotox-100iu-2.jpeg","/image/innotox/innotox-100iu-3.jpeg","/image/innotox/innotox-100iu-4.jpeg"],description:"Ready-to-use liquid botulinum toxin type A from South Korea for cosmetic wrinkle reduction and therapeutic uses like muscle spasms and hyperhidrosis.",details:`
    <strong>Innotox 100iu Injection</strong><br/><br/>
    Innotox is a ready-to-use liquid botulinum toxin type A from South Korea, primarily used for cosmetic applications like reducing wrinkles and fine lines, and sometimes for therapeutic uses like treating muscle spasms and hyperhidrosis. It is favored for its high stability and precision, typically showing effects in 2-3 days.<br/><br/>
    
    <strong>Key Features:</strong><br/>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Strength: 100 Units (pre-mixed liquid formulation)</li>
      <li>Brand: Innotox</li>
      <li>Country of Origin: Korea</li>
      <li>Toxin Type: Type A</li>
      <li>Form: Ready-to-use liquid (no reconstitution required)</li>
      <li>Preservative Status: Preservative-free</li>
    </ul>
    <br/>

    <strong>Applications:</strong><br/>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li><strong>Cosmetic:</strong> Vertical glabellar lines (frown lines), crow's feet, perioral lines, other dynamic facial wrinkles</li>
      <li><strong>Therapeutic:</strong> Localized muscle spasms (neck, eyes), hyperhidrosis (excessive sweating)</li>
    </ul>
    <br/>

    <strong>Key Differences vs. Traditional Botox:</strong>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li><strong>Faster onset:</strong> Effects in 3-5 days (vs. 5-7 days)</li>
      <li><strong>Ready-to-use liquid:</strong> No mixing required, reduces dilution errors</li>
      <li><strong>Formulated without complexing proteins</strong> (or minimal) for stability</li>
      <li><strong>High-precision, localized results</strong> – reduces risk of spreading to adjacent muscles</li>
    </ul>
    <br/>

    <strong>Mechanism:</strong> Relaxes muscles by reducing nerve signals, providing temporary smoothing effect (usually 8–12 months).<br/><br/>

    <strong>Administration:</strong> Must be administered by a qualified healthcare professional. No reconstitution needed – use directly from vial.<br/><br/>

    <em class="text-xs text-gray-400">Note: Professional use only. Prescription required. Consult physician before use.</em>
    `,benefits:["100 Units Ready-to-Use Liquid","Made in Korea","Faster Onset (3-5 days)","No Reconstitution Required","Reduces Frown Lines & Crow's Feet","Treats Muscle Spasms & Hyperhidrosis","High Precision – Minimal Spread","Preservative-Free"],sku:"INNOTOX-100IU",volume:"1 Vial",stock:10},{id:100,name:"Liztox 100iu Injection (Botulinum Toxin Type A)",category:"C & D Fillers",brand:"Liztox",price:6500,comparePrice:9e3,image:"/image/liztox/liztox-100iu-1.jpeg",images:["/image/liztox/liztox-100iu-1.jpeg","/image/liztox/liztox-100iu-2.jpg","/image/liztox/liztox-100iu-3.jpg","/image/liztox/liztox-100iu-4.jpg"],description:"Botulinum toxin type A injection for temporary reduction of facial wrinkles, frown lines, and crow's feet. Manufactured by Huons Biopharma.",details:`
    <strong>Liztox 100iu Injection (Botulinum Toxin Type A)</strong><br/><br/>
    Liztox is a botulinum toxin type A product manufactured by Huons Biopharma, used for temporary improvement of moderate to severe glabellar lines (frown lines), crow's feet, and other dynamic facial wrinkles. It works by blocking nerve signals to muscles, reducing muscle activity and smoothing the overlying skin.<br/><br/>
    
    <strong>Key Features:</strong><br/>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Strength: 100 Units per vial</li>
      <li>Brand: Liztox</li>
      <li>Form: Lyophilized powder for injection</li>
      <li>Toxin Type: Type A</li>
      <li>Packaging: Single-use vial</li>
    </ul>
    <br/>

    <strong>Applications:</strong>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Glabellar lines (frown lines between eyebrows)</li>
      <li>Crow's feet (wrinkles around eyes)</li>
      <li>Forehead horizontal lines</li>
      <li>Other dynamic facial wrinkles</li>
    </ul>
    <br/>

    <strong>Mechanism of Action:</strong> Botulinum toxin type A inhibits the release of acetylcholine at the neuromuscular junction, temporarily preventing muscle contraction. This relaxes facial muscles, reducing the appearance of wrinkles.<br/><br/>

    <strong>Administration:</strong> Must be reconstituted with preservative-free saline and administered intramuscularly by a qualified healthcare professional. Effects typically appear within 3-7 days and last 3-6 months.<br/><br/>

    <strong>Storage:</strong> Refrigerate at 2°C to 8°C (36°F to 46°F) before reconstitution. Reconstituted product should be used within 24 hours.<br/><br/>

    <em class="text-xs text-gray-400">Note: Professional use only. Prescription required. Consult dermatologist or licensed injector before use.</em>
    `,benefits:["100 Units Botulinum Toxin Type A","Smooths Frown Lines & Crow's Feet","Reduces Forehead Wrinkles","Temporary Muscle Relaxation","Effects Last 3-6 Months","Korean Manufactured","Professional Use Only","Prescription Required"],sku:"LIZTOX-100IU",volume:"1 Vial",stock:10},{id:101,name:"Sculptra (Poly-L-lactic Acid) Collagen Stimulator Injection",category:"C & D Fillers",brand:"Sculptra",price:7e3,comparePrice:1e4,image:"/image/sculptra/sculptra-1.jpeg",images:["/image/sculptra/sculptra-1.jpeg","/image/sculptra/sculptra-2.jpg","/image/sculptra/sculptra-3.jpg","/image/sculptra/sculptra-4.jpg"],description:"FDA-approved collagen stimulator with Poly-L-lactic acid (PLLA). Restores facial volume, reduces fine lines and wrinkles, and improves skin firmness through natural collagen production.",details:`
    <strong>Sculptra (Poly-L-lactic acid) Collagen Stimulator Injection</strong><br/><br/>
    Sculptra is an advanced, FDA-approved injectable treatment designed to restore facial volume and rejuvenate the skin using the power of collagen stimulation. Unlike traditional fillers that simply add instant volume, Sculptra works differently. Its primary ingredient is Poly-L-Lactic Acid (PLLA), a biocompatible and biodegradable substance that has been used in medical applications for decades. When injected into areas experiencing volume loss or sagging, PLLA triggers a natural process that stimulates the skin to gradually produce fresh collagen, the protein responsible for structure, firmness, elasticity, and youthfulness.<br/><br/>
    
    <strong>What is in the box?</strong><br/>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>2 vials x 5 ml of lyophilized powder</li>
      <li>Each vial contains 150 mg Poly-L-lactic acid</li>
      <li>Reconstitution required (sterile water not included)</li>
    </ul>
    <br/>

    <strong>Composition (per vial):</strong><br/>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Poly-L-lactic acid (PLLA) – 150 mg</li>
      <li>Sodium carboxymethylcellulose – 90 mg (stabilizer and suspension agent)</li>
      <li>Mannitol – 127.5 mg (non-pyrogenic)</li>
    </ul>
    <br/>

    <strong>Key Features:</strong><br/>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>FDA-approved for correction of fine lines and wrinkles in the cheek region</li>
      <li>Gradual, natural-looking results over time</li>
      <li>Long-lasting effects – up to 24 months</li>
      <li>Biocompatible, biodegradable, synthetic polymer (PLLA)</li>
      <li>Stimulates collagen production (Type I collagen increase by ~66.5% within three months)</li>
      <li>Restores facial volume and improves skin structure</li>
      <li>Galderma/Sculptra brand – world leader in aesthetic medicine</li>
    </ul>
    <br/>

    <strong>Benefits:</strong>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Restores facial volume loss and corrects contour irregularities</li>
      <li>Reduces fine lines, wrinkles, and nasolabial folds</li>
      <li>Improves skin firmness, elasticity, and overall texture</li>
      <li>Provides natural, progressive rejuvenation without drastic change</li>
      <li>Enhances collagen and elastin production</li>
      <li>Suitable for cheek wrinkles, facial lipoatrophy, and HIV-related fat loss</li>
    </ul>
    <br/>

    <strong>How to Use:</strong> Reconstitute powder with 5 ml of sterile water for injection per vial. Administer intradermally or subcutaneously by qualified professional. Typical injection volume: ~0.05-0.2 mL per injection point. A standard treatment plan typically consists of 2-3 sessions spaced 4-6 weeks apart. Massage treated area for 5 minutes, 5 times a day, for 5 days.<br/><br/>

    <strong>Not Suitable For:</strong> Pregnant or breastfeeding individuals, active skin infections/inflammation, history of keloid or hypertrophic scarring, hypersensitivity to components, severe allergies with anaphylaxis, allergy to lidocaine (when reconstituted with lidocaine).<br/><br/>

    <strong>Storage:</strong> Store in original packaging. Reconstituted product should be used immediately. Do not freeze.<br/><br/>

    <em class="text-xs text-gray-400">Note: Professional use only. Prescription required. Consult physician before use.</em>
    `,benefits:["FDA-Approved Collagen Stimulator","Poly-L-lactic Acid (PLLA) Technology","Restores Facial Volume & Structure","Reduces Fine Lines & Wrinkles","Improves Skin Firmness & Elasticity","Long-Lasting Results (up to 24 months)","Gradual, Natural Rejuvenation","Biocompatible & Biodegradable"],sku:"SCULPTRA-PLLA-2X5ML",volume:"2 x 5 ml vials",stock:10},{id:102,name:"Sculptra Butt Lift - Poly-L-lactic Acid Dermal Filler for Buttock Augmentation",category:"C & D Fillers",brand:"Sculptra",price:6500,comparePrice:9e3,image:"/image/sculptra/sculptra-butt-lift-1.jpeg",images:["/image/sculptra/sculptra-butt-lift-1.jpeg","/image/sculptra/sculptra-butt-lift-2.jpg","/image/sculptra/sculptra-butt-lift-3.jpg","/image/sculptra/sculptra-butt-lift-4.jpg"],description:"FDA-approved poly-L-lactic acid injectable for non-surgical buttock lift, contouring, modest volume increase, and improved skin texture. Minimally invasive alternative to butt implants.",details:`
    <strong>Sculptra Butt Lift - Poly-L-lactic Acid Dermal Filler</strong><br/><br/>
    A minimally-invasive, surgery-free method to enhance or augment the buttocks using Sculptra, an FDA-approved dermal filler composed of poly-L-lactic acid (PLLA). Ideal for patients seeking a subtle lift, contouring, modest volume increase, and improvement in skin texture of the buttock area. Suitable for those with sagging or flat buttocks, or desiring more volume.<br/><br/>
    
    <strong>What is Sculptra?</strong><br/>
    Sculptra is an FDA-approved dermal filler used for facial volume loss and wrinkle reduction, composed of poly-L-lactic acid. It works by replacing lost collagen and stimulating natural collagen production. Used worldwide since 1999 in over 30 countries with more than 200,000 patients.<br/><br/>
    
    <strong>How It Works:</strong><br/>
    Through a series of treatments over several months, Sculptra is injected directly into the buttocks. It gradually stimulates collagen and fills depleted tissue, providing a fuller, more lifted appearance. Results may last up to two years, and the product is harmlessly absorbed by the body.<br/><br/>
    
    <strong>Procedure Details:</strong><br/>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Buttocks are numbed and iced to reduce discomfort and swelling</li>
      <li>Each treatment session lasts about one hour</li>
      <li>Patients notice immediate changes, with best results after 2–4 treatments spaced at least 3 weeks apart</li>
      <li>Post-treatment massage performed to spread product evenly</li>
      <li>Home care instructions provided, including regular massage of treated area</li>
    </ul>
    <br/>

    <strong>Benefits:</strong>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Non-surgical buttock lift and augmentation</li>
      <li>Subtle lift and contouring of sagging or flat buttocks</li>
      <li>Modest volume increase without implants or fat grafting</li>
      <li>Improves skin texture and firmness</li>
      <li>Gradual, natural-looking results</li>
      <li>Results last up to two years</li>
      <li>Minimal downtime compared to surgical alternatives</li>
      <li>FDA-approved, safe, and widely used</li>
    </ul>
    <br/>

    <strong>Side Effects:</strong> Minor swelling, bruising, or bumps at injection sites. Massage helps distribute product and reduce bumps.<br/><br/>

    <strong>Ideal Candidates:</strong> Healthy individuals with realistic expectations, desiring subtle enhancement, not a substitute for fat grafting or implants.<br/><br/>

    <em class="text-xs text-gray-400">Note: Professional use only. Consult a qualified practitioner. Results may vary.</em>
    `,benefits:["Non-Surgical Buttock Lift","Poly-L-lactic Acid (PLLA) Technology","Restores Collagen & Volume","Subtle Lift & Contouring","Modest Volume Increase","Improves Skin Texture","Results Last Up to 2 Years","FDA-Approved"],sku:"SCULPTRA-BUTT-LIFT",volume:"Per Treatment Session",stock:10}],vs=[{id:1,title:"The Science Behind Glutathione: Beyond Skin Whitening",excerpt:"Exploring the systemic antioxidant benefits of high-dose glutathione therapies and their role in cellular detoxification and immune system support.",content:`
      <p class="mb-6">Glutathione, often referred to as the "master antioxidant," is a tripeptide composed of three amino acids: cysteine, glutamine, and glycine. While it is widely recognized in the aesthetic industry for its skin-whitening properties via melanogenesis inhibition, its clinical significance extends far beyond dermatology.</p>
      <h3 class="text-2xl font-serif mb-4 mt-8">Mechanism of Action</h3>
      <p class="mb-6">At a cellular level, glutathione exists in two states: reduced (GSH) and oxidized (GSSG). The ratio of reduced to oxidized glutathione within cells is often used as a measure of cellular toxicity.</p>
      <h3 class="text-2xl font-serif mb-4 mt-8">Systemic Benefits</h3>
      <p class="mb-6">Beyond its depigmenting effects, high-dose glutathione therapy supports liver detoxification by binding to toxins and facilitating their excretion.</p>
    `,date:"Oct 24, 2025",image:"/image/blog1.jpg",category:"Clinical Science",author:"Dr. A. Mehta"},{id:2,title:"Understanding PDRN: The Salmon DNA Revolution",excerpt:"Why Polydeoxyribonucleotide (PDRN) is becoming the gold standard for skin regeneration and wound healing in aesthetic medicine.",content:`
      <p class="mb-6">Polydeoxyribonucleotide (PDRN) has rapidly emerged as a cornerstone of regenerative aesthetic medicine. Derived from salmon sperm DNA, PDRN acts as an A2A receptor agonist.</p>
      <h3 class="text-2xl font-serif mb-4 mt-8">The Mechanism of Tissue Repair</h3>
      <p class="mb-6">PDRN works by stimulating the metabolic activity of fibroblasts, the cells responsible for collagen and elastin production.</p>
    `,date:"Nov 02, 2025",image:"/image/blog2.jpg",category:"Ingredient Spotlight",author:"Clinical Team"},{id:3,title:"Choosing the Right IV Drip for Pigmentation",excerpt:"A practitioner's guide to selecting the correct cocktail of Vitamin C, Glutathione, and Collagen for recalcitrant melasma.",content:`
      <p class="mb-6">Treating melasma and hyperpigmentation requires a multi-faceted approach. While topical tyrosinase inhibitors are standard, Intravenous (IV) therapy offers a systemic route.</p>
    `,date:"Nov 15, 2025",image:"/image/blog3.jpg",category:"Treatment Protocols",author:"Dr. S. Williams"},{id:4,title:"Safety Protocols for Intravenous Therapy",excerpt:"Essential safety checklists and best practices for administering IV beauty treatments in a clinical setting.",content:`
      <p class="mb-6">As the popularity of IV beauty drips surges, so does the responsibility of the practitioner to ensure patient safety.</p>
    `,date:"Nov 20, 2025",image:"/image/blog4.jpg",category:"Safety & Compliance",author:"Safety Board"}],ac=[{name:"Whitening Injection",id:"Injection"},{name:"Whitening Capsules",id:"Capsules"},{name:"Whitening Cream",id:"Cream"},{name:"Whitening Soap",id:"Soap"},{name:"Weight Gain",id:"Weight Gain"},{name:"Weight Loss",id:"Weight Loss"},{name:"C & D Fillers",id:"C & D Fillers"},{name:"Others",id:"Others"}],F0=[{q:"Are your products authentic?",a:"Yes, exclusively. We are an authorized distributor sourcing directly from manufacturers to guarantee 100% authenticity and efficacy. Every batch is verified before shipment."},{q:"Do you require a medical license to purchase?",a:"While we primarily supply to licensed clinics and dermatologists, certain supplements and skincare items are available for general purchase. Injectables are strictly for professional use."},{q:"What is the typical shipping time?",a:"Domestic orders are typically processed within 24 hours. Delivery to metro cities takes 2-3 business days, while other regions take 4-6 business days."},{q:"Do you offer bulk discounts?",a:"Yes, we offer tiered pricing for wholesale partners. Please contact our sales team or register as a partner on the Contact page for a price list."}],W0="service_h64g36k",Y0="template_5gaadeg",K0="4025kcdA_kwN4-yDH",Ti="https://api.shaatrading.in",wm=Ti,Q0="rzp_live_Rgl2NCpQcyFajX",X0=[40,45,49,42],Z0=({message:u,type:d,onClose:b})=>{if(L.useEffect(()=>{const y=setTimeout(b,3e3);return()=>clearTimeout(y)},[b]),!u)return null;const c={success:"bg-black text-white",error:"bg-red-500 text-white",info:"bg-gray-800 text-white"};return n.jsxs("div",{className:`fixed bottom-6 left-1/2 -translate-x-1/2 z-[70] px-6 py-3 rounded-full shadow-xl flex items-center gap-3 transition-all duration-300 animate-slide-up ${c[d]||c.info}`,children:[d==="success"&&n.jsx(Dm,{size:16}),n.jsx("span",{className:"text-sm font-medium",children:u})]})},Qa=({children:u,variant:d="primary",className:b="",onClick:c,...y})=>{const g="inline-flex items-center justify-center px-8 py-3 transition-all duration-300 font-medium tracking-wide text-sm cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed rounded-md",j={primary:"bg-black text-white hover:bg-gray-800 active:scale-95 shadow-sm hover:shadow-lg",secondary:"bg-gray-800 text-white hover:bg-gray-700 active:scale-95 shadow-sm hover:shadow-md",outline:"bg-transparent border border-white text-white hover:bg-white hover:text-black active:scale-95",ghost:"text-black hover:bg-gray-100"};return n.jsx("button",{className:`${g} ${j[d]} ${b}`,onClick:c,...y,children:u})},J0=({title:u,subtitle:d,center:b=!0})=>n.jsxs("div",{className:`mb-8 md:mb-12 ${b?"text-center":""}`,children:[n.jsx("h2",{className:"font-serif text-3xl md:text-4xl text-black mb-3",children:u}),d&&n.jsx("p",{className:"text-gray-600 font-light max-w-2xl mx-auto px-4",children:d}),n.jsx("div",{className:`h-0.5 w-20 bg-gray-800 mt-6 ${b?"mx-auto":""}`})]}),$0=({currentPage:u,setCurrentPage:d,cartCount:b,toggleCart:c,mobileMenuOpen:y,setMobileMenuOpen:g,setShopFilter:j,setBrandFilter:h,searchQuery:p,setSearchQuery:m,user:T,handleLogout:S})=>{const[w,O]=L.useState(!1),[q,U]=L.useState(!1),[I,_]=L.useState(!1),[ue,ae]=L.useState({categories:!1,brands:!1,account:!1}),Q=Se=>{m(Se.target.value),Se.target.value.length>0&&u!=="shop"&&d("shop")};return n.jsxs(n.Fragment,{children:[n.jsx("div",{className:"bg-[#e67e22] text-white py-2 text-[10px] md:text-[11px] font-bold tracking-wider",children:n.jsxs("div",{className:"max-w-7xl mx-auto relative flex flex-col items-center justify-center gap-2 px-4 md:px-6",children:[n.jsx("span",{className:"text-center",children:"PAN INDIA SHIPPING AND COLD CHAIN DELIVERY AVAILABLE!"}),n.jsx("button",{onClick:()=>{window.open(`https://wa.me/919916726373?text=${encodeURIComponent("Hi, I came here from your website and would like to inquire about wholesale pricing.")}`,"_blank")},className:"inline-flex items-center justify-center rounded-full bg-white/10 px-3 py-1 text-[10px] uppercase tracking-widest text-white border border-white/30 hover:bg-white/20 transition md:absolute md:right-6 md:top-1/2 md:-translate-y-1/2 whitespace-nowrap",children:"WHOLESALER: +91 99167 26373"})]})}),n.jsxs("header",{className:"sticky top-0 z-50 bg-white border-b-2 border-black",children:[n.jsxs("div",{className:"max-w-7xl mx-auto px-4 md:px-6 h-16 md:h-20 flex items-center justify-between gap-8",children:[n.jsxs("div",{className:"flex items-center gap-4 shrink-0",children:[n.jsx("button",{className:"lg:hidden p-2 text-black hover:bg-gray-100 rounded-full",onClick:()=>g(!0),"aria-label":"Open menu",children:n.jsx(T0,{size:24})}),n.jsx("div",{className:"cursor-pointer",onClick:()=>{j("All"),h("All Brands"),d("home")},children:n.jsxs("div",{className:"leading-none",children:[n.jsx("span",{className:"text-2xl md:text-3xl font-sans font-black uppercase tracking-tighter text-black select-none block",style:{fontStyle:"normal",fontWeight:950},children:"SHAA TRADING®"}),n.jsxs("span",{className:"block text-[10px] md:text-[11px] uppercase tracking-widest text-gray-500 mt-0.5",children:["skin ",n.jsx("span",{className:"align-middle mx-1",children:"·"})," beauty ",n.jsx("span",{className:"align-middle mx-1",children:"·"})," healthcare"]})]})})]}),n.jsx("div",{className:"hidden lg:flex flex-1 max-w-xl relative mx-4",children:n.jsxs("div",{className:"relative w-full flex items-center bg-gray-50 border border-gray-300 rounded-md px-4 py-2.5 transition-all focus-within:border-black focus-within:bg-white",children:[n.jsx("input",{id:"nav-search-desktop",type:"text",placeholder:"SEARCH FOR PRODUCTS",value:p,onChange:Q,className:"bg-transparent border-none outline-none text-xs font-bold tracking-wider text-black w-full placeholder-gray-400 uppercase"}),n.jsx("button",{className:"text-[10px] font-black uppercase tracking-widest text-gray-400 hover:text-black transition-colors ml-2",children:"SEARCH"})]})}),n.jsxs("div",{className:"flex items-center gap-3 md:gap-5 shrink-0",children:[n.jsx("button",{className:"lg:hidden p-2 text-black",onClick:()=>O(!w),children:n.jsx(ks,{size:22})}),n.jsxs("div",{className:"relative hidden md:block",onMouseEnter:()=>_(!0),onMouseLeave:()=>_(!1),children:[n.jsx("button",{className:"p-2 text-black hover:bg-gray-50 rounded-sm transition-colors",children:n.jsx(Im,{size:24,strokeWidth:1.5})}),n.jsx("div",{className:`absolute top-full right-0 w-52 bg-white shadow-2xl border-2 border-black p-2 mt-1 transition-all duration-200 origin-top-right ${I?"opacity-100 scale-100 visible":"opacity-0 scale-95 invisible"}`,children:T?n.jsxs(n.Fragment,{children:[n.jsxs("div",{className:"px-3 py-2 border-b border-gray-100 mb-1",children:[n.jsx("p",{className:"text-[9px] font-bold text-gray-400 uppercase tracking-wider",children:"Signed in as"}),n.jsx("p",{className:"text-xs font-black uppercase tracking-tight truncate text-black",children:T.name})]}),n.jsxs("button",{onClick:()=>{d("orders"),_(!1)},className:"w-full text-left px-3 py-2 text-xs font-bold uppercase tracking-wider text-gray-700 hover:bg-gray-100 rounded flex items-center gap-2",children:[n.jsx(Xn,{size:14})," My Orders"]}),n.jsxs("button",{onClick:()=>{d("track"),_(!1)},className:"w-full text-left px-3 py-2 text-xs font-bold uppercase tracking-wider text-gray-700 hover:bg-gray-100 rounded flex items-center gap-2",children:[n.jsx(bs,{size:14})," Track Order"]}),T.isAdmin&&n.jsxs("button",{onClick:()=>{d("admin"),_(!1)},className:"w-full text-left px-3 py-2 text-xs font-bold uppercase tracking-wider text-gray-700 hover:bg-gray-100 rounded flex items-center gap-2",children:[n.jsx(ws,{size:14})," Admin Panel"]}),n.jsxs("button",{onClick:()=>{S(),_(!1)},className:"w-full text-left px-3 py-2 text-xs font-bold uppercase tracking-wider text-red-600 hover:bg-red-50 rounded mt-1 flex items-center gap-2",children:[n.jsx(ht,{size:14})," Logout"]})]}):n.jsxs(n.Fragment,{children:[n.jsx("button",{onClick:()=>{d("login"),_(!1)},className:"w-full text-left px-3 py-2 text-xs font-bold uppercase tracking-wider text-gray-700 hover:bg-gray-100 rounded",children:"Login"}),n.jsx("button",{onClick:()=>{d("signup"),_(!1)},className:"w-full text-left px-3 py-2 text-xs font-bold uppercase tracking-wider text-gray-700 hover:bg-gray-100 rounded",children:"Register"}),n.jsx("div",{className:"h-px bg-gray-100 my-1"}),n.jsxs("button",{onClick:()=>{d("track"),_(!1)},className:"w-full text-left px-3 py-2 text-xs font-bold uppercase tracking-wider text-gray-700 hover:bg-gray-100 rounded flex items-center gap-2",children:[n.jsx(bs,{size:14})," Track Order"]})]})})]}),n.jsxs("button",{className:"relative p-2 text-black hover:bg-gray-50 rounded-sm transition-colors",onClick:c,children:[n.jsx(Xn,{size:24,strokeWidth:1.5}),b>0&&n.jsx("span",{className:"absolute -top-0.5 -right-0.5 bg-red-600 text-white text-[9px] font-black w-5 h-5 flex items-center justify-center rounded-full shadow-sm",children:b})]})]})]}),w&&n.jsx("div",{className:"lg:hidden px-4 pb-4 animate-fade-in",children:n.jsxs("div",{className:"flex items-center bg-gray-50 border border-gray-300 rounded-md px-3 py-2",children:[n.jsx("input",{type:"text",placeholder:"SEARCH FOR PRODUCTS...",value:p,onChange:Q,className:"bg-transparent border-none outline-none text-xs font-bold w-full uppercase"}),p&&n.jsx("button",{onClick:()=>m(""),children:n.jsx(Zn,{size:16,className:"text-gray-400"})})]})}),n.jsx("div",{className:"bg-[#f3f4f6] border-t border-b border-black hidden lg:block",children:n.jsxs("div",{className:"max-w-7xl mx-auto px-4 md:px-6 h-12 flex items-center justify-center gap-6 xl:gap-8",children:[n.jsx("button",{onClick:()=>{j("Injection"),d("category","Injection")},className:"text-[11px] font-black uppercase tracking-widest transition-colors h-full px-2 border-b-2 flex items-center border-transparent text-gray-700 hover:text-black",children:"WHITENING INJECTIONS"}),n.jsx("button",{onClick:()=>{j("Capsules"),d("category","Capsules")},className:"text-[11px] font-black uppercase tracking-widest transition-colors h-full px-2 border-b-2 flex items-center border-transparent text-gray-700 hover:text-black",children:"WHITENING CAPSULES"}),n.jsx("button",{onClick:()=>{j("Cream"),d("category","Cream")},className:"text-[11px] font-black uppercase tracking-widest transition-colors h-full px-2 border-b-2 flex items-center border-transparent text-gray-700 hover:text-black",children:"WHITENING CREAMS"}),n.jsx("button",{onClick:()=>{j("Soap"),d("category","Soap")},className:"text-[11px] font-black uppercase tracking-widest transition-colors h-full px-2 border-b-2 flex items-center border-transparent text-gray-700 hover:text-black",children:"WHITENING SOAP"}),n.jsx("button",{onClick:()=>{j("Weight Gain"),d("category","Weight Gain")},className:"text-[11px] font-black uppercase tracking-widest transition-colors h-full px-2 border-b-2 flex items-center border-transparent text-gray-700 hover:text-black",children:"WEIGHT GAIN"}),n.jsx("button",{onClick:()=>{j("Weight Loss"),d("category","Weight Loss")},className:"text-[11px] font-black uppercase tracking-widest transition-colors h-full px-2 border-b-2 flex items-center border-transparent text-gray-700 hover:text-black",children:"WEIGHT LOSS"}),n.jsx("button",{onClick:()=>{j("C & D Fillers"),d("category","C & D Fillers")},className:"text-[11px] font-black uppercase tracking-widest transition-colors h-full px-2 border-b-2 flex items-center border-transparent text-gray-700 hover:text-black",children:"C & D FILLERS"}),n.jsx("button",{onClick:()=>{j("Others"),d("category","Others")},className:"text-[11px] font-black uppercase tracking-widest transition-colors h-full px-2 border-b-2 flex items-center border-transparent text-gray-700 hover:text-black",children:"OTHERS"}),n.jsx("button",{onClick:()=>{j("All"),h("All Brands"),d("blog")},className:`text-[11px] font-black uppercase tracking-widest transition-colors h-full px-2 border-b-2 flex items-center ${u==="blog"?"border-black text-black":"border-transparent text-gray-700 hover:text-black"}`,children:"BLOG"}),n.jsx("button",{onClick:()=>{j("All"),h("All Brands"),d("contact")},className:`text-[11px] font-black uppercase tracking-widest transition-colors h-full px-2 border-b-2 flex items-center ${u==="contact"?"border-black text-black":"border-transparent text-gray-700 hover:text-black"}`,children:"CONTACT"})]})})]}),n.jsxs("div",{className:`fixed inset-0 z-[60] flex ${y?"pointer-events-auto":"pointer-events-none"}`,children:[n.jsx("div",{className:`absolute inset-0 bg-black/50 transition-opacity duration-300 ${y?"opacity-100":"opacity-0"}`,onClick:()=>g(!1)}),n.jsx("div",{className:`relative bg-white w-[85%] max-w-xs h-full shadow-2xl transform transition-transform duration-300 ease-in-out ${y?"translate-x-0":"-translate-x-full"}`,children:n.jsxs("div",{className:"flex flex-col h-full border-r-2 border-black",children:[n.jsxs("div",{className:"p-6 flex justify-between items-center border-b-2 border-black",children:[n.jsx("span",{className:"text-2xl font-sans font-black uppercase tracking-tighter",children:"SHAA TRADING®"}),n.jsx("button",{onClick:()=>g(!1),className:"text-black",children:n.jsx(Zn,{size:24})})]}),n.jsx("div",{className:"flex-1 overflow-y-auto py-4 bg-gray-50",children:n.jsxs("div",{className:"flex flex-col font-bold uppercase tracking-wider text-xs",children:[n.jsx("button",{onClick:()=>{j("All"),h("All Brands"),d("home"),g(!1)},className:"px-6 py-4 text-left text-black border-b border-gray-200 hover:bg-gray-100",children:"Home"}),n.jsx("button",{onClick:()=>{j("All"),h("All Brands"),d("shop"),g(!1)},className:"px-6 py-4 text-left text-black border-b border-gray-200 hover:bg-gray-100",children:"Catalog"}),n.jsx("button",{onClick:()=>{j("All"),h("All Brands"),d("blog"),g(!1)},className:"px-6 py-4 text-left text-black border-b border-gray-200 hover:bg-gray-100",children:"Blog"}),n.jsx("button",{onClick:()=>{j("All"),h("All Brands"),d("contact"),g(!1)},className:"px-6 py-4 text-left text-black border-b border-gray-200 hover:bg-gray-100",children:"Contact"})]})})]})})]})]})},ey=({navigateTo:u,showToast:d,transactionId:b})=>{const[c,y]=L.useState("processing"),[g,j]=L.useState(null);return L.useEffect(()=>{(async()=>{const p=JSON.parse(localStorage.getItem("temp_cart")||"[]"),m=JSON.parse(localStorage.getItem("temp_user")||"{}"),T=new URLSearchParams(window.location.search),S=b||T.get("tid")||"DEMO-"+Date.now();if(p.length===0){console.warn("No stored cart found");return}const w=p.reduce((_,ue)=>_+ue.price*ue.quantity,0),O=Number(m.advancePaid)||0,q=Number(m.balanceDue)||Math.max(0,w-O);j({cart:p,user:m,total:w,advancePaid:O,balanceDue:q,id:S,date:new Date().toLocaleDateString()});const U=p.map(_=>`• ${_.name} (Brand: ${_.brand}) - Qty: ${_.quantity} | Price: ₹${_.price}`).join(`
`),I={to_name:"Admin",customer_name:m.name,customer_email:m.email||"Not Provided",customer_phone:m.phone,shipping_address:m.address,order_items:U,total_amount:w.toLocaleString(),advance_paid:O.toLocaleString(),balance_due:q.toLocaleString(),payment_status:O>0&&q>0?"Partial (COD Pending)":"Full Paid",payment_id:S,order_id:S};try{if(!window.emailjs){const _=document.createElement("script");_.src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js",_.async=!0,document.body.appendChild(_),await new Promise(ue=>_.onload=ue)}await window.emailjs.send(W0,Y0,I,K0),localStorage.removeItem("temp_cart"),localStorage.removeItem("temp_user"),y("sent"),d("Order confirmed and email sent!","success")}catch(_){console.error("Email Failed:",_),y("error"),d("Payment successful but email failed.","error")}})()},[b,d]),n.jsxs("div",{className:"min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4 md:p-8",children:[c==="processing"&&n.jsxs("div",{className:"animate-pulse text-center",children:[n.jsx("h2",{className:"text-2xl font-serif mb-2",children:"Finalizing Order..."}),n.jsx("p",{className:"text-gray-500",children:"Please do not close this window."})]}),c==="sent"&&g&&n.jsxs("div",{className:"animate-fade-in bg-white w-full max-w-2xl shadow-xl rounded-2xl overflow-hidden border border-gray-100",children:[n.jsxs("div",{className:"bg-green-50 p-8 text-center border-b border-green-100",children:[n.jsx("div",{className:"w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm",children:n.jsx(Dm,{size:32,strokeWidth:3})}),n.jsx("h2",{className:"text-3xl font-serif text-gray-900 mb-2",children:"Thank you for your order!"}),n.jsx("p",{className:"text-gray-500",children:"Your order has been confirmed and is being processed."}),n.jsxs("div",{className:"mt-4 inline-block bg-white px-4 py-2 rounded-lg border border-green-200 text-sm font-medium text-green-800",children:["Order #",g.id.slice(-8).toUpperCase()]})]}),n.jsxs("div",{className:"p-8",children:[n.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 pb-8 border-b border-gray-100",children:[n.jsxs("div",{children:[n.jsx("h4",{className:"text-xs font-bold text-gray-400 uppercase tracking-widest mb-3",children:"Shipping Details"}),n.jsx("p",{className:"font-medium text-gray-900",children:g.user.name}),n.jsx("p",{className:"text-gray-500 text-sm mt-1",children:g.user.address}),n.jsx("p",{className:"text-gray-500 text-sm mt-1",children:g.user.phone}),n.jsx("p",{className:"text-gray-500 text-sm",children:g.user.email})]}),n.jsxs("div",{className:"md:text-right",children:[n.jsx("h4",{className:"text-xs font-bold text-gray-400 uppercase tracking-widest mb-3",children:"Order Info"}),n.jsxs("p",{className:"text-gray-500 text-sm",children:["Date: ",n.jsx("span",{className:"text-gray-900 font-medium",children:g.date})]}),n.jsxs("p",{className:"text-gray-500 text-sm mt-1",children:["Payment Method: ",n.jsx("span",{className:"text-gray-900 font-medium",children:"Online (Razorpay)"})]}),n.jsxs("p",{className:"text-gray-500 text-sm mt-1",children:["Status: ",n.jsx("span",{className:"text-green-600 font-medium",children:"Paid"})]})]})]}),n.jsxs("div",{className:"mb-8",children:[n.jsx("h4",{className:"text-xs font-bold text-gray-400 uppercase tracking-widest mb-4",children:"Order Summary"}),n.jsx("div",{className:"space-y-4",children:g.cart.map(h=>n.jsxs("div",{className:"flex justify-between items-start",children:[n.jsxs("div",{className:"flex gap-4",children:[n.jsx("div",{className:"w-12 h-12 bg-gray-50 rounded-md overflow-hidden shrink-0 border border-gray-100",children:n.jsx("img",{loading:"lazy",src:h.image,alt:h.name,className:"w-full h-full object-cover"})}),n.jsxs("div",{children:[n.jsx("p",{className:"text-sm font-medium text-gray-900 line-clamp-1",children:h.name}),n.jsxs("p",{className:"text-xs text-gray-500",children:["Qty: ",h.quantity," × ₹",h.price.toLocaleString()]})]})]}),n.jsxs("p",{className:"text-sm font-medium text-gray-900",children:["₹",(h.price*h.quantity).toLocaleString()]})]},h.id))})]}),n.jsxs("div",{className:"space-y-4 pt-6 border-t border-gray-100",children:[n.jsxs("div",{className:"flex justify-between items-center text-gray-600",children:[n.jsx("span",{children:"Total Amount"}),n.jsxs("span",{children:["₹",g.total.toLocaleString()]})]}),g.advancePaid>0&&n.jsxs(n.Fragment,{children:[n.jsxs("div",{className:"flex justify-between items-center text-green-700 font-bold",children:[n.jsx("span",{children:"Advance Paid"}),n.jsxs("span",{children:["- ₹",g.advancePaid.toLocaleString()]})]}),n.jsxs("div",{className:"flex justify-between items-center text-gray-900 font-bold border-t pt-2",children:[n.jsx("span",{children:"Balance Due (COD)"}),n.jsxs("span",{children:["₹",(g.total-g.advancePaid).toLocaleString()]})]})]})]})]}),n.jsxs("div",{className:"bg-gray-50 p-6 border-t border-gray-100 flex flex-col sm:flex-row gap-4 justify-between items-center",children:[n.jsxs("button",{onClick:()=>window.print(),className:"flex items-center gap-2 text-sm text-gray-500 hover:text-black transition-colors",children:[n.jsx(G0,{size:16})," Print Receipt"]}),n.jsx(Qa,{onClick:()=>{window.history.replaceState(null,"","/"),u("home")},className:"w-full sm:w-auto",children:"Continue Shopping"})]})]}),c==="error"&&n.jsxs("div",{className:"bg-white p-8 rounded-2xl shadow-xl max-w-md w-full border-l-4 border-red-500",children:[n.jsx("h2",{className:"text-2xl font-serif text-red-500 mb-2",children:"Something went wrong"}),n.jsx("p",{className:"text-gray-500 mb-6",children:"We received your payment, but couldn't generate the email receipt automatically. Please contact support."}),n.jsx(Qa,{onClick:()=>u("contact"),children:"Contact Support"})]})]})},iy=({cart:u,updateQuantity:d,removeFromCart:b,checkout:c,navigateTo:y})=>{const[g,j]=L.useState({name:"",phone:"",email:"",address:""}),h=u.reduce((Q,Se)=>Q+Se.price*Se.quantity,0),m=h+0,T=Q=>Q>15e3?{requiredAdvance:5e3,extraOptions:[{label:"Pay ₹5,000 Now (Rest COD)",value:5e3},{label:"Pay ₹15,000 Now (Rest COD)",value:15e3}]}:Q>1e4?{requiredAdvance:2e3,extraOptions:[]}:Q>5e3?{requiredAdvance:1e3,extraOptions:[]}:Q>=1e3?{requiredAdvance:500,extraOptions:[]}:{requiredAdvance:300,extraOptions:[]},{requiredAdvance:S,extraOptions:w}=T(m),[O,q]=L.useState(m>15e3?"cod":"prepaid"),[U,I]=L.useState(S);L.useEffect(()=>{I(T(m).requiredAdvance),m>15e3&&q("cod")},[m]);const _=O==="prepaid"?m:U,ue=g.name&&g.phone&&g.address&&g.email,ae=Q=>j({...g,[Q.target.name]:Q.target.value});return u.length===0?n.jsxs("div",{className:"animate-fade-in min-h-[70vh] flex flex-col items-center justify-center text-center px-6",children:[n.jsx("div",{className:"w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mb-6",children:n.jsx(Xn,{size:32,strokeWidth:1,className:"text-gray-300"})}),n.jsx("h2",{className:"font-serif text-3xl text-gray-900 mb-2",children:"Your cart is empty"}),n.jsx("p",{className:"text-gray-500 mb-8 max-w-xs mx-auto",children:"Looks like you haven't added any clinical formulations to your order yet."}),n.jsx("button",{onClick:()=>y("shop"),className:"bg-black text-white px-10 py-4 text-xs font-bold uppercase tracking-[0.2em] hover:bg-gray-800 transition-all",children:"Start Shopping"})]}):n.jsxs("div",{className:"animate-fade-in bg-[#fbfbfb] min-h-screen pb-24",children:[n.jsx("div",{className:"bg-white border-b border-gray-100 py-12 mb-8",children:n.jsxs("div",{className:"max-w-7xl mx-auto px-4 md:px-6",children:[n.jsx("h1",{className:"font-serif text-4xl text-gray-900",children:"Shopping Cart"}),n.jsxs("div",{className:"flex items-center gap-2 text-[10px] uppercase tracking-widest text-gray-400 mt-2",children:[n.jsx("button",{onClick:()=>y("home"),className:"hover:text-black",children:"Home"}),n.jsx("span",{children:"/"}),n.jsx("button",{onClick:()=>y("shop"),className:"hover:text-black",children:"Shop"}),n.jsx("span",{children:"/"}),n.jsx("span",{className:"text-black font-bold",children:"Cart"})]})]})}),n.jsx("div",{className:"max-w-7xl mx-auto px-4 md:px-6",children:n.jsxs("div",{className:"flex flex-col lg:flex-row gap-12",children:[n.jsxs("div",{className:"flex-1 space-y-6",children:[n.jsxs("div",{className:"hidden md:grid grid-cols-12 px-4 pb-4 border-b border-gray-100 text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400",children:[n.jsx("div",{className:"col-span-6",children:"Product Details"}),n.jsx("div",{className:"col-span-3 text-center",children:"Quantity"}),n.jsx("div",{className:"col-span-3 text-right",children:"Total"})]}),u.map(Q=>n.jsxs("div",{className:"bg-white border border-gray-100 p-4 md:p-6 rounded-sm flex flex-col md:grid md:grid-cols-12 items-center gap-6",children:[n.jsxs("div",{className:"col-span-6 flex items-center gap-6 w-full",children:[n.jsx("div",{className:"w-20 h-24 bg-[#f9f9f9] rounded-sm shrink-0 overflow-hidden cursor-pointer",onClick:()=>y("product",Q),children:n.jsx("img",{src:Q.image,alt:Q.name,className:"w-full h-full object-contain p-2 mix-blend-multiply"})}),n.jsxs("div",{className:"flex-1",children:[n.jsx("h3",{className:"font-medium text-gray-900 leading-tight mb-1",children:Q.name}),n.jsx("p",{className:"text-[10px] text-gray-400 uppercase tracking-widest mb-2",children:Q.brand}),n.jsxs("p",{className:"text-sm font-bold",children:["₹",Q.price.toLocaleString()]}),n.jsxs("button",{onClick:()=>b(Q.id),className:"text-[10px] uppercase tracking-widest text-red-400 font-bold mt-3 hover:text-red-600 transition-colors flex items-center gap-1",children:[n.jsx(Pm,{size:12})," Remove"]})]})]}),n.jsx("div",{className:"col-span-3 flex justify-center w-full",children:n.jsxs("div",{className:"flex items-center border border-gray-200 rounded-sm",children:[n.jsx("button",{onClick:()=>d(Q.id,-1),className:"px-3 py-2 hover:bg-gray-50 text-gray-500",children:n.jsx(Om,{size:14})}),n.jsx("span",{className:"w-10 text-center font-medium text-sm",children:Q.quantity}),n.jsx("button",{onClick:()=>d(Q.id,1),className:"px-3 py-2 hover:bg-gray-50 text-gray-500",children:n.jsx(Bm,{size:14})})]})}),n.jsx("div",{className:"col-span-3 text-right w-full",children:n.jsxs("p",{className:"font-bold text-gray-900",children:["₹",(Q.price*Q.quantity).toLocaleString()]})})]},Q.id)),n.jsxs("button",{onClick:()=>y("shop"),className:"flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-black transition-colors pt-4",children:[n.jsx(Ss,{size:14})," Continue Shopping"]})]}),n.jsx("div",{className:"lg:w-[400px] shrink-0",children:n.jsxs("div",{className:"bg-white border border-gray-100 p-8 rounded-sm sticky top-32 shadow-sm",children:[n.jsx("h2",{className:"font-serif text-2xl mb-6",children:"Order Summary"}),n.jsxs("div",{className:"space-y-4 mb-8 text-sm",children:[n.jsxs("div",{className:"flex justify-between text-gray-500",children:[n.jsx("span",{children:"Subtotal"}),n.jsxs("span",{className:"text-gray-900 font-medium",children:["₹",h.toLocaleString()]})]}),n.jsxs("div",{className:"flex justify-between text-gray-500",children:[n.jsx("span",{children:"Shipping"}),n.jsx("span",{className:"text-green-600 font-medium uppercase text-[10px] tracking-widest",children:"Calculated at checkout"})]}),n.jsx("div",{className:"h-px bg-gray-100 my-4"}),n.jsxs("div",{className:"flex justify-between items-baseline",children:[n.jsx("span",{className:"text-base font-bold uppercase tracking-widest",children:"Total"}),n.jsxs("span",{className:"text-2xl font-serif font-bold text-gray-900",children:["₹",m.toLocaleString()]})]})]}),n.jsxs("div",{className:"space-y-4 mb-8",children:[n.jsx("p",{className:"text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-4",children:"Shipping Information"}),n.jsx("input",{name:"name",placeholder:"Full Name",value:g.name,onChange:ae,className:"w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-sm text-sm focus:border-black outline-none transition-colors"}),n.jsx("input",{name:"phone",placeholder:"Phone Number",value:g.phone,onChange:ae,className:"w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-sm text-sm focus:border-black outline-none transition-colors"}),n.jsx("input",{name:"email",type:"email",placeholder:"Email Address",value:g.email,onChange:ae,className:"w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-sm text-sm focus:border-black outline-none transition-colors"}),n.jsx("textarea",{name:"address",placeholder:"Detailed Clinic / Home Address",value:g.address,onChange:ae,rows:"3",className:"w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-sm text-sm focus:border-black outline-none transition-colors resize-none"})]}),n.jsxs("div",{className:"space-y-4 mb-6",children:[n.jsx("p",{className:"text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400",children:"Payment Preference"}),n.jsx("div",{className:"grid grid-cols-2 gap-3",children:m<=15e3?n.jsxs(n.Fragment,{children:[n.jsx("button",{type:"button",onClick:()=>q("prepaid"),className:`flex-1 p-3 border text-sm font-bold transition ${O==="prepaid"?"border-black bg-black text-white":"border-gray-200 bg-white text-gray-800"}`,children:"Full Prepaid"}),n.jsx("button",{type:"button",onClick:()=>q("cod"),className:`flex-1 p-3 border text-sm font-bold transition ${O==="cod"?"border-black bg-black text-white":"border-gray-200 bg-white text-gray-800"}`,children:"COD"})]}):n.jsx("button",{type:"button",className:"flex-1 p-3 border border-black bg-black text-white text-sm font-bold",children:"COD only"})}),O==="cod"&&n.jsx("div",{className:"p-3 bg-gray-50 border border-gray-200 text-sm rounded-sm",children:w.length>0?n.jsx("select",{value:U,onChange:Q=>I(Number(Q.target.value)),className:"w-full bg-transparent outline-none font-bold text-sm",children:w.map(Q=>n.jsx("option",{value:Q.value,children:Q.label},Q.value))}):n.jsxs("span",{children:["Advance Required for COD: ",n.jsxs("strong",{children:["₹",S.toLocaleString()]})]})})]}),n.jsx(Qa,{className:"w-full py-4 text-xs font-bold uppercase tracking-[0.2em]",onClick:()=>c({customerDetails:g,paymentMode:O,amountToPay:_,totalAmount:m,balanceDue:O==="cod"?Math.max(0,m-_):0}),disabled:!ue,children:ue?`Pay ₹${_.toLocaleString()} Now ${O==="cod"?"(Rest COD)":""}`:"Enter Details to Checkout"}),n.jsxs("div",{className:"mt-6 flex items-center justify-center gap-4 opacity-40 grayscale",children:[n.jsx(ws,{size:16}),n.jsx("span",{className:"text-[9px] uppercase tracking-widest font-bold",children:"Secure SSL Checkout"})]})]})})]})})]})},ty=({isOpen:u,onClose:d,cart:b,updateQuantity:c,removeFromCart:y,checkout:g})=>{const[j,h]=L.useState({name:"",phone:"",email:"",address:""}),p=b.reduce((S,w)=>S+w.price*w.quantity,0),m=j.name&&j.phone&&j.address&&j.email,T=S=>h({...j,[S.target.name]:S.target.value});return u?n.jsxs("div",{className:"fixed inset-0 z-[60] flex justify-end",children:[n.jsx("div",{className:"absolute inset-0 bg-black/20 backdrop-blur-sm",onClick:d}),n.jsxs("div",{className:"relative bg-white w-full max-w-md h-full shadow-2xl flex flex-col animate-slide-in",children:[n.jsxs("div",{className:"p-6 border-b border-gray-100 flex items-center justify-between",children:[n.jsx("h2",{className:"font-serif text-2xl",children:"Your Cart"}),n.jsx("button",{onClick:d,children:n.jsx(Zn,{size:20})})]}),n.jsx("div",{className:"flex-1 overflow-y-auto p-6",children:b.length===0?n.jsxs("div",{className:"h-full flex flex-col items-center justify-center text-center text-gray-400",children:[n.jsx(Xn,{size:48,strokeWidth:1,className:"mb-4 text-gray-200"}),n.jsx("p",{className:"text-lg font-light",children:"Your cart is empty"}),n.jsx("button",{onClick:d,className:"mt-4 text-gray-800 hover:text-black transition-colors font-medium text-sm",children:"Continue Shopping"})]}):n.jsx("div",{className:"space-y-6",children:b.map(S=>n.jsxs("div",{className:"flex gap-4",children:[n.jsx("div",{className:"w-20 h-20 bg-gray-50 rounded-lg overflow-hidden shrink-0",children:n.jsx("img",{loading:"lazy",src:S.image,alt:S.name,className:"w-full h-full object-cover"})}),n.jsxs("div",{className:"flex-1",children:[n.jsxs("div",{className:"flex justify-between items-start mb-1",children:[n.jsx("h3",{className:"font-serif text-lg leading-tight",children:S.name}),n.jsx("button",{onClick:()=>y(S.id),className:"text-gray-300 hover:text-red-400 transition-colors p-1",children:n.jsx(Pm,{size:16})})]}),n.jsxs("p",{className:"text-gray-800 text-sm mb-3",children:["₹",S.price.toLocaleString()]}),n.jsx("div",{className:"flex items-center gap-3",children:n.jsxs("div",{className:"flex items-center border border-gray-200 rounded",children:[n.jsx("button",{onClick:()=>c(S.id,-1),className:"px-2 py-1 hover:bg-gray-50 text-gray-600",children:n.jsx(Om,{size:12})}),n.jsx("span",{className:"w-8 text-center text-sm font-medium",children:S.quantity}),n.jsx("button",{onClick:()=>c(S.id,1),className:"px-2 py-1 hover:bg-gray-50 text-gray-600",children:n.jsx(Bm,{size:12})})]})})]})]},S.id))})}),b.length>0&&n.jsxs("div",{className:"p-6 bg-gray-50 border-t border-gray-100",children:[n.jsxs("div",{className:"flex justify-between items-center mb-4",children:[n.jsx("span",{className:"text-gray-600",children:"Subtotal"}),n.jsxs("span",{className:"font-serif text-2xl",children:["₹",p.toLocaleString()]})]}),n.jsxs("div",{className:"space-y-3 mb-4",children:[n.jsx("input",{name:"name",placeholder:"Full Name",value:j.name,onChange:T,className:"w-full p-2 border border-gray-200 rounded focus:border-gray-800 outline-none"}),n.jsx("input",{name:"phone",placeholder:"Phone",value:j.phone,onChange:T,className:"w-full p-2 border border-gray-200 rounded focus:border-gray-800 outline-none"}),n.jsx("input",{name:"email",type:"email",placeholder:"Email Address",value:j.email,onChange:T,className:"w-full p-2 border border-gray-200 rounded focus:border-gray-800 outline-none"}),n.jsx("textarea",{name:"address",placeholder:"Address",value:j.address,onChange:T,className:"w-full p-2 border border-gray-200 rounded focus:border-gray-800 outline-none resize-none"})]}),n.jsxs(Qa,{className:"w-full",onClick:()=>g(j),disabled:!m,children:["Pay ₹",p.toLocaleString()]})]})]})]}):null},ay=({navigateTo:u,addToCart:d,setShopFilter:b})=>{const c=oa.filter(w=>X0.includes(w.id)),y=[...oa].reverse().slice(0,12),[g,j]=L.useState(0),[h,p]=L.useState(!1),m=[{id:24,desktop:"/image/glowtiqa/glowtiqa-banner.png",mobile:"/image/glowtiqa/glowtiqa-banner-mobile.png",alt:"Glowtiqa"},{id:2,desktop:"/image/glutax/glutax-banner.png",mobile:"/image/glutax/glutax-banner-mobile.png",alt:"Glutax"},{id:45,desktop:"/image/cosdaq/cindella-banner.png",mobile:"/image/cosdaq/cindella-banner-mobile.png",alt:"Cindella"}];L.useEffect(()=>{if(h)return;const w=setInterval(()=>{j(O=>O===m.length-1?0:O+1)},5e3);return()=>clearInterval(w)},[g,h]);const T=()=>j(w=>w===m.length-1?0:w+1),S=()=>j(w=>w===0?m.length-1:w-1);return n.jsxs("div",{className:"animate-fade-in bg-white w-full",children:[n.jsx("section",{className:"relative w-full overflow-hidden border-b-2 border-black group",children:n.jsxs("div",{className:"relative w-full h-[250px] sm:h-[350px] md:h-[450px] cursor-pointer",onMouseEnter:()=>p(!0),onMouseLeave:()=>p(!1),children:[n.jsx("div",{className:"flex w-full h-full transition-transform duration-700 ease-in-out",style:{transform:`translateX(-${g*100}%)`},children:m.map((w,O)=>n.jsxs("div",{className:"w-full h-full shrink-0 relative",children:[n.jsx("img",{src:w.desktop,alt:w.alt,className:"hidden md:block w-full h-full object-cover"}),n.jsx("img",{src:w.mobile,alt:w.alt,className:"block md:hidden w-full h-full object-cover"})]},O))}),n.jsx("button",{onClick:w=>{w.stopPropagation(),S()},className:"hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/70 backdrop-blur-md border border-black items-center justify-center text-black opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-black hover:text-white z-20",children:n.jsx(Ss,{size:20,strokeWidth:2.5})}),n.jsx("button",{onClick:w=>{w.stopPropagation(),T()},className:"hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/70 backdrop-blur-md border border-black items-center justify-center text-black opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-black hover:text-white z-20",children:n.jsx(f0,{size:20,strokeWidth:2.5})})]})}),n.jsx("section",{className:"py-6 bg-white",children:n.jsxs("div",{className:"max-w-7xl mx-auto px-4 md:px-6",children:[n.jsx("h2",{className:"text-[10px] font-black uppercase tracking-[0.3em] mb-4 text-center text-black",children:"Shop by Category"}),n.jsx("div",{className:"flex overflow-x-auto gap-3 pb-2 scrollbar-hide justify-start md:justify-center",children:ny.map(w=>n.jsxs("button",{onClick:()=>u("category",w.id),className:"flex flex-col items-center group w-16 shrink-0",children:[n.jsx("div",{className:"w-14 h-14 mb-1 overflow-hidden flex items-center justify-center transition-all duration-200 group-hover:scale-105",children:n.jsx("img",{src:w.image,alt:w.label,className:"w-12 h-12 object-contain"})}),n.jsx("span",{className:"text-[9px] font-black uppercase tracking-widest text-center text-gray-600 group-hover:text-black leading-tight",children:w.label})]},w.id))})]})}),n.jsx("section",{className:"pt-4 pb-16",children:n.jsxs("div",{className:"max-w-7xl mx-auto px-4 md:px-6",children:[n.jsxs("div",{className:"flex justify-between items-end mb-6",children:[n.jsxs("div",{children:[n.jsx("h2",{className:"text-2xl md:text-3xl font-serif text-black uppercase tracking-tight",children:"Best Sellers"}),n.jsx("div",{className:"h-1 w-12 bg-black mt-2"})]}),n.jsx("button",{onClick:()=>u("shop"),className:"text-[10px] font-black uppercase tracking-widest border-b-2 border-black pb-1 hover:text-gray-500",children:"View All"})]}),n.jsx("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6",children:c.map(w=>n.jsx(xs,{product:w,navigateTo:u,addToCart:d},w.id))})]})}),n.jsx("section",{className:"py-16 bg-gray-50 border-t border-black",children:n.jsxs("div",{className:"max-w-7xl mx-auto px-4 md:px-6",children:[n.jsx("h2",{className:"text-2xl md:text-3xl font-serif mb-10 text-center uppercase tracking-tight",children:"New Arrivals"}),n.jsx("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6",children:y.map(w=>n.jsx(xs,{product:w,navigateTo:u,addToCart:d},w.id))}),n.jsx("div",{className:"text-center mt-16",children:n.jsx("button",{onClick:()=>u("shop"),className:"px-12 py-4 border-2 border-black text-black font-black uppercase tracking-[0.2em] text-[10px] hover:bg-black hover:text-white transition-all duration-300",children:"Explore All Formulations"})})]})})]})},ny=[{id:"Injection",label:"Injection",image:"/image/injection.jpeg"},{id:"Capsules",label:"Capsules",image:"/image/supplement.jpeg"},{id:"Cream",label:"Cream",image:"/image/cream.jpeg"},{id:"Soap",label:"Soap",image:"/image/soap.jpeg"},{id:"Weight Gain",label:"Weight Gain",image:"/image/weight.jpeg"},{id:"Weight Loss",label:"Weight Loss",image:"/image/weight-lose.png"},{id:"C & D Fillers",label:"C & D Fillers",image:"/image/filler.jpeg"},{id:"Others",label:"Others",image:"/image/others.png"}],ly=({navigateTo:u,setAuthToken:d,setUser:b,showToast:c})=>{const[y,g]=L.useState(""),[j,h]=L.useState(""),[p,m]=L.useState(!1),T=async S=>{S.preventDefault(),m(!0);try{const w=await fetch(`${Ti}/api/auth/login`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:y,password:j})}),O=await w.json();if(console.log("🔥 LOGIN RESPONSE:",O),!w.ok)throw new Error(O.message||"Invalid login credentials");const q=O.token||O.accessToken,U={_id:O._id,name:O.name,email:O.email,isAdmin:!!O.isAdmin};console.log("🔥 FINAL USER STORED:",U),d(q),b(U),localStorage.setItem("shaa_token",q),localStorage.setItem("shaa_user",JSON.stringify(U)),c(`Welcome back, ${U.name}`,"success"),setTimeout(()=>{U.isAdmin?(console.log("🔥 Redirecting: ADMIN PANEL"),u("admin")):(console.log("🔥 Redirecting: HOME"),u("home"))},200)}catch(w){console.error("🔥 LOGIN ERROR:",w),c(w.message||"Something went wrong","error")}m(!1)};return n.jsx("div",{className:"min-h-screen flex items-center justify-center bg-gray-50 px-4",children:n.jsxs("div",{className:"w-full max-w-md bg-white shadow-md rounded-lg p-6",children:[n.jsx("h2",{className:"text-2xl font-semibold text-center mb-4",children:"Login to Your Account"}),n.jsxs("form",{onSubmit:T,className:"space-y-4",children:[n.jsxs("div",{children:[n.jsx("label",{className:"block mb-1 text-sm font-medium",children:"Email"}),n.jsx("input",{type:"email",required:!0,value:y,onChange:S=>g(S.target.value),className:"w-full p-2 border rounded-lg outline-none"})]}),n.jsxs("div",{children:[n.jsx("label",{className:"block mb-1 text-sm font-medium",children:"Password"}),n.jsx("input",{type:"password",required:!0,value:j,onChange:S=>h(S.target.value),className:"w-full p-2 border rounded-lg outline-none"})]}),n.jsx("button",{type:"submit",disabled:p,className:"w-full bg-black text-white py-2 rounded-lg hover:bg-gray-900 transition",children:p?"Logging in...":"Login"})]}),n.jsxs("p",{className:"text-center text-sm text-gray-600 mt-4",children:["Don't have an account?"," ",n.jsx("span",{className:"text-black underline cursor-pointer",onClick:()=>u("signup"),children:"Sign up"})]})]})})},sy=({navigateTo:u,showToast:d})=>{const[b,c]=L.useState(""),[y,g]=L.useState(""),[j,h]=L.useState(""),[p,m]=L.useState(!1),T=async S=>{S.preventDefault(),m(!0);try{const w=await fetch(`${Ti}/api/auth/register`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:b,email:y,password:j})}),O=await w.json();if(!w.ok)throw new Error(O.message||"Signup failed");d("Account created. Please login.","success"),u("login")}catch(w){console.error(w),d(w.message||"Signup error","error")}finally{m(!1)}};return n.jsxs("div",{className:"min-h-[calc(100vh-80px)] flex flex-col md:flex-row bg-white animate-fade-in",children:[n.jsxs("div",{className:"w-full md:w-1/2 h-64 md:h-auto md:order-2 relative bg-gray-900 overflow-hidden",children:[n.jsx("div",{className:"absolute inset-0 bg-[url('/image/blog4.jpg')] bg-cover bg-center opacity-50 mix-blend-luminosity"}),n.jsxs("div",{className:"absolute inset-0 flex flex-col justify-center items-center text-white p-12 text-center",children:[n.jsx("h2",{className:"font-serif text-4xl mb-4",children:"Join the Network"}),n.jsx("p",{className:"font-light text-white/80 max-w-sm",children:"Verified clinics receive priority dispatch, cold-chain assurance, and wholesale rates."})]})]}),n.jsx("div",{className:"w-full md:w-1/2 md:order-1 flex items-center justify-center p-8 md:p-16 bg-white",children:n.jsxs("div",{className:"w-full max-w-md space-y-8",children:[n.jsxs("div",{className:"text-center md:text-left",children:[n.jsx("h1",{className:"font-serif text-3xl md:text-4xl text-gray-900 mb-2",children:"Create Account"}),n.jsx("p",{className:"text-gray-500 text-sm",children:"Strictly for medical professionals & clinics."})]}),n.jsxs("form",{onSubmit:T,className:"space-y-5",children:[n.jsxs("div",{children:[n.jsx("label",{className:"block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2",children:"Clinic / Full Name"}),n.jsx("input",{type:"text",required:!0,className:"w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:border-black outline-none",value:b,onChange:S=>c(S.target.value)})]}),n.jsxs("div",{children:[n.jsx("label",{className:"block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2",children:"Work Email"}),n.jsx("input",{type:"email",required:!0,className:"w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:border-black outline-none",value:y,onChange:S=>g(S.target.value)})]}),n.jsxs("div",{children:[n.jsx("label",{className:"block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2",children:"Password"}),n.jsx("input",{type:"password",required:!0,className:"w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:border-black outline-none",value:j,onChange:S=>h(S.target.value)})]}),n.jsx(Qa,{type:"submit",className:"w-full py-4 shadow-lg hover:shadow-xl",disabled:p,children:p?"Creating...":"Register Clinic"})]}),n.jsxs("p",{className:"text-center text-sm text-gray-500",children:["Already registered?"," ",n.jsx("button",{onClick:()=>u("login"),className:"font-semibold text-black hover:underline underline-offset-4",children:"Login here"})]})]})})]})},ry=({navigateTo:u,showToast:d})=>{const[b,c]=L.useState(""),[y,g]=L.useState(!1),[j,h]=L.useState(null),p=async S=>{if(S.preventDefault(),!!b.trim()){g(!0),h(null);try{const w=await fetch(`${Ti}/api/orders/${b.trim()}`),O=await w.json();if(!w.ok)throw new Error(O.message||"Order not found");h(O)}catch(w){console.error(w),d(w.message||"Error fetching order","error")}finally{g(!1)}}},T=j?(S=>{const w=(S||"Pending").charAt(0).toUpperCase()+(S||"Pending").slice(1).toLowerCase();return w.includes("Deliver")?4:w.includes("Ship")||w.includes("Dispatch")?3:w.includes("Process")||w.includes("Pack")?2:1})(j.status):0;return n.jsx("div",{className:"bg-[#fbfbfb] min-h-screen pt-32 pb-16 px-6 animate-fade-in",children:n.jsxs("div",{className:"max-w-xl mx-auto",children:[n.jsxs("div",{className:"text-center mb-10",children:[n.jsx("h1",{className:"font-serif text-3xl md:text-4xl text-gray-900 mb-2",children:"Track Shipment"}),n.jsx("p",{className:"text-sm text-gray-500",children:"Enter your Order ID (e.g. order_Pz...) to see real-time status."})]}),n.jsxs("form",{onSubmit:p,className:"flex gap-2 mb-10 relative z-10",children:[n.jsx("input",{type:"text",placeholder:"Order ID",className:"flex-1 px-6 py-4 bg-white border border-gray-200 rounded-lg text-sm shadow-sm focus:border-black outline-none transition-all",value:b,onChange:S=>c(S.target.value)}),n.jsx("button",{type:"submit",disabled:y||!b.trim(),className:"px-8 py-4 bg-black text-white rounded-lg text-sm font-bold uppercase tracking-widest hover:bg-gray-800 disabled:opacity-60 transition-colors shadow-lg",children:y?"...":"Track"})]}),j&&n.jsxs("div",{className:"bg-white border border-gray-100 rounded-2xl p-8 shadow-xl animate-slide-up",children:[n.jsxs("div",{className:"flex justify-between items-start mb-8 pb-6 border-b border-gray-50",children:[n.jsxs("div",{children:[n.jsx("p",{className:"text-[10px] uppercase tracking-widest text-gray-400 font-bold mb-1",children:"Order Status"}),n.jsx("p",{className:"text-2xl font-serif text-gray-900",children:j.status||"Pending"})]}),n.jsxs("div",{className:"text-right",children:[n.jsx("p",{className:"text-[10px] uppercase tracking-widest text-gray-400 font-bold mb-1",children:"Estimated Arrival"}),n.jsx("p",{className:"text-sm font-medium",children:j.expectedDelivery?new Date(j.expectedDelivery).toLocaleDateString():"Calculating..."})]})]}),n.jsxs("div",{className:"relative flex justify-between items-center mb-10 mt-4 px-2",children:[n.jsx("div",{className:"absolute top-1/2 left-0 w-full h-1 bg-gray-100 -z-0 rounded-full"}),n.jsx("div",{className:"absolute top-1/2 left-0 h-1 bg-black -z-0 rounded-full transition-all duration-1000",style:{width:`${(T-1)/3*100}%`}}),["Ordered","Processing","Shipped","Delivered"].map((S,w)=>{const q=w+1<=T;return n.jsxs("div",{className:"relative z-10 flex flex-col items-center gap-2",children:[n.jsx("div",{className:`w-3 h-3 rounded-full border-2 ${q?"bg-black border-black":"bg-white border-gray-300"}`}),n.jsx("span",{className:`text-[10px] uppercase tracking-wider font-bold ${q?"text-black":"text-gray-300"}`,children:S})]},S)})]}),n.jsxs("div",{className:"space-y-3 bg-gray-50 p-6 rounded-xl",children:[n.jsxs("div",{className:"flex justify-between text-sm",children:[n.jsx("span",{className:"text-gray-500",children:"Customer"}),n.jsx("span",{className:"font-medium",children:j.customerName||"Guest"})]}),n.jsxs("div",{className:"flex justify-between text-sm",children:[n.jsx("span",{className:"text-gray-500",children:"Total Amount"}),n.jsx("span",{className:"font-medium",children:j.amountFormatted||`₹${(j.amount!==void 0?Number(j.amount)/100:j.products?.reduce((S,w)=>S+Number(w.price||0)*Number(w.qty||w.quantity||0),0)||0).toLocaleString()}`})]}),j.trackingNumber&&n.jsxs("div",{className:"flex justify-between text-sm pt-2 border-t border-gray-200/50",children:[n.jsx("span",{className:"text-gray-500",children:"Courier Tracking"}),n.jsx("span",{className:"font-mono bg-white px-2 py-1 rounded border border-gray-200",children:j.trackingNumber})]})]})]})]})})},oy=({token:u,user:d,showToast:b,navigateTo:c})=>{const[y,g]=L.useState([]),[j,h]=L.useState(!0),[p,m]=L.useState(null),[T,S]=L.useState(1),[w,O]=L.useState(1);L.useEffect(()=>{u&&q()},[u,T]);const q=async()=>{h(!0);try{const I=await fetch(`${Ti}/api/orders/user/history?page=${T}&limit=10`,{headers:{Authorization:`Bearer ${u}`}});if(I.ok){const _=await I.json();g(_.orders),O(_.pages)}else b("Failed to load orders","error")}catch(I){console.error(I),b("Connection error","error")}finally{h(!1)}},U=({status:I})=>{const _={Pending:"bg-yellow-100 text-yellow-800 border-yellow-200",Paid:"bg-blue-50 text-blue-700 border-blue-100",Processing:"bg-blue-50 text-blue-700 border-blue-100",Packed:"bg-purple-50 text-purple-700 border-purple-100",Shipped:"bg-purple-50 text-purple-700 border-purple-100",Delivered:"bg-green-50 text-green-700 border-green-100",Cancelled:"bg-red-50 text-red-700 border-red-100"};return n.jsx("span",{className:`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest border ${_[I]||"bg-gray-100 text-gray-600 border-gray-200"}`,children:I||"Pending"})};return u?n.jsxs("div",{className:"bg-[#f8f9fa] min-h-screen pt-10 pb-20 px-4 md:px-8 animate-fade-in",children:[n.jsxs("div",{className:"max-w-5xl mx-auto",children:[n.jsxs("div",{className:"mb-10",children:[n.jsx("p",{className:"text-xs font-bold uppercase tracking-widest text-gray-500 mb-2",children:"My Account"}),n.jsx("h1",{className:"font-serif text-3xl md:text-4xl text-gray-900 mb-1",children:"Order History"}),n.jsx("p",{className:"text-gray-500 text-sm",children:"Track and manage all your orders"})]}),n.jsx("div",{className:"space-y-4",children:j?n.jsx("div",{className:"flex justify-center py-12",children:n.jsx("p",{className:"text-gray-400",children:"Loading orders..."})}):y.length===0?n.jsxs("div",{className:"bg-white border border-gray-100 rounded-xl p-12 text-center",children:[n.jsx(Xn,{size:40,className:"text-gray-300 mx-auto mb-4"}),n.jsx("h3",{className:"text-lg font-medium text-gray-900 mb-1",children:"No Orders Yet"}),n.jsx("p",{className:"text-gray-500 mb-6",children:"Start shopping to see your orders here."}),n.jsx("button",{onClick:()=>c("shop"),className:"px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-800",children:"Continue Shopping"})]}):y.map(I=>n.jsx("div",{className:"bg-white border border-gray-100 rounded-xl p-6 hover:shadow-md transition-shadow",children:n.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-4 gap-4 items-center",children:[n.jsxs("div",{children:[n.jsx("p",{className:"text-xs text-gray-400 uppercase tracking-wider font-bold mb-1",children:"Order ID"}),n.jsx("p",{className:"font-mono text-sm font-bold text-gray-900",children:I._id.slice(-8).toUpperCase()})]}),n.jsxs("div",{children:[n.jsx("p",{className:"text-xs text-gray-400 uppercase tracking-wider font-bold mb-1",children:"Date"}),n.jsx("p",{className:"text-sm text-gray-900",children:new Date(I.createdAt).toLocaleDateString()})]}),n.jsxs("div",{children:[n.jsx("p",{className:"text-xs text-gray-400 uppercase tracking-wider font-bold mb-1",children:"Amount"}),n.jsx("p",{className:"text-sm font-medium text-gray-900",children:I.amountFormatted||`₹${(I.amount!==void 0?Number(I.amount)/100:0).toLocaleString()}`})]}),n.jsxs("div",{className:"flex items-center justify-between md:justify-end gap-4",children:[n.jsx(U,{status:I.status}),n.jsx("button",{onClick:()=>m(I),className:"px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50 rounded-lg border border-gray-200 transition-colors",children:"Details"})]})]})},I._id))}),w>1&&n.jsxs("div",{className:"flex justify-center gap-2 mt-10",children:[n.jsx("button",{onClick:()=>S(I=>Math.max(1,I-1)),disabled:T===1,className:"px-4 py-2 border border-gray-200 rounded-lg text-sm font-medium disabled:opacity-50",children:"Previous"}),n.jsx("div",{className:"flex items-center gap-2",children:n.jsxs("span",{className:"text-sm text-gray-600",children:["Page ",T," of ",w]})}),n.jsx("button",{onClick:()=>S(I=>Math.min(w,I+1)),disabled:T===w,className:"px-4 py-2 border border-gray-200 rounded-lg text-sm font-medium disabled:opacity-50",children:"Next"})]})]}),p&&n.jsxs("div",{className:"fixed inset-0 z-[70] flex items-center justify-center p-4",children:[n.jsx("div",{className:"absolute inset-0 bg-black/40 backdrop-blur-sm",onClick:()=>m(null)}),n.jsxs("div",{className:"relative bg-white rounded-xl shadow-2xl max-w-2xl w-full p-8 animate-slide-up max-h-[90vh] overflow-y-auto",children:[n.jsxs("div",{className:"flex justify-between items-center mb-6",children:[n.jsx("h3",{className:"font-serif text-2xl",children:"Order Details"}),n.jsx("button",{onClick:()=>m(null),className:"text-gray-400 hover:text-black",children:n.jsx(Zn,{size:20})})]}),n.jsxs("div",{className:"space-y-6",children:[n.jsx("div",{className:"p-4 bg-gray-50 rounded-lg border border-gray-100",children:n.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[n.jsxs("div",{children:[n.jsx("p",{className:"text-xs text-gray-400 uppercase tracking-wide font-bold mb-1",children:"Order ID"}),n.jsx("p",{className:"font-mono text-sm font-bold",children:p._id})]}),n.jsxs("div",{children:[n.jsx("p",{className:"text-xs text-gray-400 uppercase tracking-wide font-bold mb-1",children:"Status"}),n.jsx(U,{status:p.status})]}),n.jsxs("div",{children:[n.jsx("p",{className:"text-xs text-gray-400 uppercase tracking-wide font-bold mb-1",children:"Order Date"}),n.jsx("p",{className:"text-sm",children:new Date(p.createdAt).toLocaleDateString()})]}),n.jsxs("div",{children:[n.jsx("p",{className:"text-xs text-gray-400 uppercase tracking-wide font-bold mb-1",children:"Total Amount"}),n.jsx("p",{className:"text-sm font-medium",children:p.amountFormatted||`₹${(p.amount!==void 0?Number(p.amount)/100:p.products?.reduce((I,_)=>I+Number(_.price||0)*Number(_.qty||_.quantity||0),0)||0).toLocaleString()}`})]})]})}),n.jsxs("div",{children:[n.jsx("h4",{className:"font-medium text-gray-900 mb-3",children:"Products"}),n.jsx("div",{className:"space-y-2 bg-gray-50 p-4 rounded-lg border border-gray-100",children:p.products&&p.products.length>0?p.products.map((I,_)=>n.jsxs("div",{className:"flex justify-between text-sm border-b border-gray-200 pb-2 last:border-0",children:[n.jsxs("div",{children:[n.jsx("p",{className:"font-medium text-gray-900",children:I.name}),n.jsxs("p",{className:"text-xs text-gray-500",children:["Qty: ",I.qty??I.quantity??0]})]}),n.jsxs("p",{className:"font-medium",children:["₹",(Number(I.price||0)*Number(I.qty??I.quantity??0)).toLocaleString()]})]},_)):n.jsx("p",{className:"text-gray-500 text-sm",children:"No product details available"})})]}),p.trackingNumber&&n.jsxs("div",{children:[n.jsx("h4",{className:"font-medium text-gray-900 mb-2",children:"Tracking Information"}),n.jsxs("div",{className:"p-4 bg-blue-50 border border-blue-100 rounded-lg",children:[n.jsx("p",{className:"text-xs text-blue-600 uppercase tracking-wide font-bold mb-1",children:"Tracking Number"}),n.jsx("p",{className:"font-mono text-sm font-bold text-blue-900",children:p.trackingNumber})]})]}),n.jsxs("div",{className:"p-4 bg-gray-50 rounded-lg border border-gray-100",children:[n.jsx("p",{className:"text-xs text-gray-400 uppercase tracking-wide font-bold mb-2",children:"Payment Details"}),n.jsxs("div",{className:"space-y-1 text-sm text-gray-600",children:[n.jsxs("div",{className:"flex justify-between",children:[n.jsx("span",{children:"Razorpay Order ID:"}),n.jsxs("span",{className:"font-mono text-xs",children:[p.razorpayOrderId?.slice(0,20),"..."]})]}),n.jsxs("div",{className:"flex justify-between",children:[n.jsx("span",{children:"Currency:"}),n.jsx("span",{children:p.currency||"INR"})]})]})]}),n.jsxs("div",{className:"flex gap-3",children:[n.jsxs("a",{href:`${Ti}/api/pdf/invoice/${p._id}`,download:!0,className:"flex-1 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 text-center transition-colors",children:[n.jsx(b0,{size:16,className:"inline mr-2"}),"Download Invoice"]}),n.jsx("button",{onClick:()=>m(null),className:"flex-1 py-3 bg-black text-white rounded-lg font-medium hover:bg-gray-800",children:"Close"})]})]})]})]})]}):n.jsxs("div",{className:"min-h-[60vh] flex flex-col items-center justify-center p-6 text-center",children:[n.jsx(bs,{size:48,className:"text-gray-300 mb-4"}),n.jsx("h2",{className:"text-2xl font-serif text-gray-900",children:"Sign In Required"}),n.jsx("p",{className:"text-gray-500 mb-6",children:"Please log in to view your order history."}),n.jsx("button",{onClick:()=>c("login"),className:"px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-800",children:"Sign In"})]})},cy=({status:u})=>{const d={Pending:"bg-yellow-100 text-yellow-800 border-yellow-200",Paid:"bg-blue-100 text-blue-800 border-blue-200",Processing:"bg-blue-50 text-blue-700 border-blue-100",Shipped:"bg-purple-50 text-purple-700 border-purple-100",Delivered:"bg-green-50 text-green-700 border-green-100",Cancelled:"bg-red-50 text-red-700 border-red-100"};return n.jsx("span",{className:`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest border ${d[u]||"bg-gray-100 text-gray-600 border-gray-200"}`,children:u||"Unknown"})},uy=({token:u,user:d,showToast:b,navigateTo:c,handleLogout:y})=>{const[g,j]=L.useState("orders"),[h,p]=L.useState([]),[m,T]=L.useState(!0),[S,w]=L.useState(""),[O,q]=L.useState(null),[U,I]=L.useState(""),[_,ue]=L.useState(""),[ae,Q]=L.useState(!1),[Se,He]=L.useState({revenue:0,pending:0,completed:0,total:0}),[le,Ue]=L.useState([]),[oi,Ke]=L.useState(!1),[si,Qe]=L.useState(""),[Ee,ye]=L.useState([]),[Je,R]=L.useState(!1),[P,J]=L.useState(""),[pe,be]=L.useState(null),[v,G]=L.useState(!1),[H,F]=L.useState([]),B=Y=>{if(!Array.isArray(Y))return;const Ce=Y.reduce((Ri,Ui)=>Ri+Number(Ui.amount||0)/100,0),Me=Y.filter(Ri=>Ri.status==="Pending"||Ri.status==="Paid"||Ri.status==="Processing").length,Ei=Y.filter(Ri=>Ri.status==="Delivered").length;He({revenue:Ce,pending:Me,completed:Ei,total:Y.length})},V=async(Y=!1)=>{Y||T(!0);try{const Ce=await fetch(`${Ti}/api/orders/all`,{headers:{Authorization:`Bearer ${u}`}});if(Ce.ok){const Me=await Ce.json(),Ei=Array.isArray(Me)?Me:Me.orders||[];p(Ei),B(Ei)}}catch{Y||b("Failed to load orders","error")}finally{Y||T(!1)}},Z=async()=>{R(!0);try{const Y=await fetch(`${Ti}/api/inventory?search=${P}`,{headers:{Authorization:`Bearer ${u}`}});if(Y.ok){const Ce=await Y.json();ye(Ce.items||[])}}finally{R(!1)}},ee=async()=>{Ke(!0);try{const Y=await fetch(`${Ti}/api/users`,{headers:{Authorization:`Bearer ${u}`}});if(Y.ok){const Ce=await Y.json();Ue(Ce.users||Ce||[])}}finally{Ke(!1)}};L.useEffect(()=>{u&&(g==="orders"&&V(),g==="users"&&ee(),g==="inventory"&&(Z(),fetch(`${Ti}/api/inventory/low-stock`,{headers:{Authorization:`Bearer ${u}`}}).then(Y=>Y.json()).then(F).catch(console.error)))},[u,g]);const se=async Y=>{Y.preventDefault(),Q(!0);try{(await fetch(`${Ti}/api/orders/details/${O._id}`,{method:"PUT",headers:{"Content-Type":"application/json",Authorization:`Bearer ${u}`},body:JSON.stringify({status:U,trackingNumber:_.trim()})})).ok&&(b("Order Updated & Notification Sent","success"),q(null),V())}finally{Q(!1)}},yi=async(Y,Ce,Me)=>{try{(await fetch(`${Ti}/api/inventory/${Y}/quantity`,{method:"PUT",headers:{"Content-Type":"application/json",Authorization:`Bearer ${u}`},body:JSON.stringify({quantity:Ce,reason:Me})})).ok&&(b("Stock Adjusted","success"),Z())}catch{b("Adjustment Failed","error")}},Wi=h.filter(Y=>Y._id.toLowerCase().includes(S.toLowerCase()));return le.filter(Y=>Y.email.toLowerCase().includes(si.toLowerCase())),n.jsxs("div",{className:"bg-[#f8f9fa] min-h-screen pt-10 pb-20 px-4 md:px-8 animate-fade-in",children:[n.jsxs("div",{className:"max-w-7xl mx-auto",children:[n.jsxs("div",{className:"flex justify-between items-end mb-8",children:[n.jsxs("div",{children:[n.jsx("p",{className:"text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-1",children:"Shaa Trading"}),n.jsx("h1",{className:"font-serif text-3xl md:text-4xl text-gray-900",children:"Control Panel"})]}),n.jsx("button",{onClick:y,className:"text-[10px] font-bold uppercase border border-red-200 text-red-500 px-4 py-2 rounded-full hover:bg-red-50 transition-all",children:"Sign Out"})]}),n.jsx("div",{className:"flex gap-2 mb-8 border-b border-gray-200 overflow-x-auto scrollbar-hide",children:["orders","inventory","users"].map(Y=>n.jsx("button",{onClick:()=>j(Y),className:`px-6 py-3 font-bold text-[10px] uppercase tracking-widest transition-colors border-b-2 -mb-px ${g===Y?"text-black border-black":"text-gray-400 border-transparent hover:text-black"}`,children:Y},Y))}),g==="orders"&&n.jsxs("div",{className:"space-y-6",children:[n.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-4",children:[n.jsxs("div",{className:"bg-white p-4 rounded border shadow-sm",children:[n.jsx("p",{className:"text-[9px] font-bold text-gray-400 uppercase mb-1",children:"Revenue"}),n.jsxs("p",{className:"text-xl font-serif",children:["₹",Se.revenue.toLocaleString()]})]}),n.jsxs("div",{className:"bg-white p-4 rounded border shadow-sm",children:[n.jsx("p",{className:"text-[9px] font-bold text-gray-400 uppercase mb-1",children:"Active Orders"}),n.jsx("p",{className:"text-xl font-serif",children:Se.pending})]})]}),n.jsxs("div",{className:"bg-white border rounded-sm overflow-hidden",children:[n.jsxs("div",{className:"p-4 border-b flex items-center gap-3",children:[n.jsx(ks,{size:16,className:"text-gray-400"}),n.jsx("input",{type:"text",placeholder:"Search by ID...",className:"text-sm outline-none w-full",value:S,onChange:Y=>w(Y.target.value)})]}),n.jsx("div",{className:"overflow-x-auto",children:n.jsxs("table",{className:"w-full text-left",children:[n.jsx("thead",{className:"bg-gray-50 text-[9px] uppercase font-bold text-gray-400",children:n.jsxs("tr",{children:[n.jsx("th",{className:"px-6 py-4",children:"Ref"}),n.jsx("th",{className:"px-6 py-4",children:"Customer"}),n.jsx("th",{className:"px-6 py-4",children:"Amount"}),n.jsx("th",{className:"px-6 py-4",children:"Status"}),n.jsx("th",{className:"px-6 py-4 text-right",children:"Action"})]})}),n.jsx("tbody",{className:"divide-y divide-gray-100",children:Wi.map(Y=>n.jsxs("tr",{className:"text-sm",children:[n.jsxs("td",{className:"px-6 py-4 font-mono text-xs",children:["#",Y._id.slice(-6).toUpperCase()]}),n.jsxs("td",{className:"px-6 py-4",children:[n.jsx("div",{className:"font-bold",children:Y.customerName||"Guest"}),n.jsx("div",{className:"text-[10px] text-gray-400",children:Y.email})]}),n.jsxs("td",{className:"px-6 py-4 font-medium",children:["₹",(Y.amount/100).toLocaleString()]}),n.jsx("td",{className:"px-6 py-4",children:n.jsx(cy,{status:Y.status})}),n.jsx("td",{className:"px-6 py-4 text-right",children:n.jsx("button",{onClick:()=>{q(Y),I(Y.status),ue(Y.trackingNumber||"")},className:"text-[10px] font-black uppercase border-b border-black",children:"Manage"})})]},Y._id))})]})})]})]}),g==="inventory"&&n.jsxs("div",{className:"bg-white border rounded-sm overflow-hidden",children:[n.jsxs("div",{className:"p-6 border-b flex justify-between items-center",children:[n.jsx("h3",{className:"font-serif text-xl",children:"Stock Logistics"}),n.jsx("button",{onClick:()=>G(!0),className:"bg-black text-white text-[9px] px-4 py-2 font-bold uppercase tracking-widest",children:"Add Formulation"})]}),n.jsx("div",{className:"overflow-x-auto",children:n.jsxs("table",{className:"w-full text-left",children:[n.jsx("thead",{className:"bg-gray-50 text-[9px] font-bold uppercase text-gray-400",children:n.jsxs("tr",{children:[n.jsx("th",{className:"px-6 py-4",children:"Product"}),n.jsx("th",{className:"px-6 py-4",children:"Available"}),n.jsx("th",{className:"px-6 py-4",children:"Threshold"}),n.jsx("th",{className:"px-6 py-4 text-right",children:"Actions"})]})}),n.jsx("tbody",{className:"divide-y divide-gray-100",children:Ee.map(Y=>n.jsxs("tr",{className:"text-sm",children:[n.jsx("td",{className:"px-6 py-4 font-medium",children:Y.productName}),n.jsx("td",{className:"px-6 py-4",children:n.jsxs("span",{className:`font-black ${Y.isLowStock?"text-red-500":"text-gray-900"}`,children:[Y.quantity," units"]})}),n.jsx("td",{className:"px-6 py-4 text-gray-400",children:Y.lowStockThreshold}),n.jsxs("td",{className:"px-6 py-4 text-right flex justify-end gap-4",children:[n.jsx("button",{onClick:()=>{const Ce=prompt("Add/Subtract Units:");Ce&&yi(Y._id,parseInt(Ce),"Manual update")},className:"text-[10px] font-bold uppercase text-blue-600",children:"Adjust"}),n.jsx("button",{onClick:()=>be(Y),className:"text-[10px] font-bold uppercase",children:"Edit"})]})]},Y._id))})]})})]})]}),O&&n.jsx("div",{className:"fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm",children:n.jsxs("div",{className:"bg-white w-full max-w-md p-8 rounded-sm shadow-2xl animate-slide-up",children:[n.jsxs("div",{className:"flex justify-between items-center mb-6",children:[n.jsx("h3",{className:"font-serif text-2xl",children:"Order Dispatch"}),n.jsx("button",{onClick:()=>q(null),children:n.jsx(Zn,{size:20})})]}),n.jsxs("form",{onSubmit:se,className:"space-y-6",children:[n.jsxs("div",{children:[n.jsx("label",{className:"text-[9px] font-bold uppercase text-gray-400 block mb-2",children:"Workflow Status"}),n.jsxs("select",{value:U,onChange:Y=>I(Y.target.value),className:"w-full p-3 border rounded-sm outline-none focus:border-black text-sm",children:[n.jsx("option",{value:"Paid",children:"Verified Paid"}),n.jsx("option",{value:"Processing",children:"Processing Formulation"}),n.jsx("option",{value:"Shipped",children:"Dispatched / In Transit"}),n.jsx("option",{value:"Delivered",children:"Clinical Delivery Confirmed"}),n.jsx("option",{value:"Cancelled",children:"Void Order"})]})]}),n.jsxs("div",{children:[n.jsx("label",{className:"text-[9px] font-bold uppercase text-gray-400 block mb-2",children:"Tracking / AWB Number"}),n.jsx("input",{type:"text",className:"w-full p-3 border rounded-sm outline-none focus:border-black text-sm",placeholder:"e.g. DELHIVERY-82736",value:_,onChange:Y=>ue(Y.target.value)})]}),n.jsx("button",{type:"submit",disabled:ae,className:"w-full bg-black text-white py-4 text-[10px] font-bold uppercase tracking-[0.2em]",children:ae?"Updating...":"Sync & Notify Client"})]})]})})]})},dy=({navigateTo:u,addToCart:d,filter:b,setFilter:c,brandFilter:y,setBrandFilter:g,searchQuery:j,setSearchQuery:h})=>{const[p,m]=L.useState("featured"),T=L.useMemo(()=>oa.filter(S=>{const w=b==="All"||S.category===b,O=y==="All Brands"||S.brand===y,q=S.name.toLowerCase().includes(j.toLowerCase())||S.brand.toLowerCase().includes(j.toLowerCase());return w&&O&&q}).sort((S,w)=>p==="price-asc"?S.price-w.price:p==="price-desc"?w.price-S.price:0),[b,y,j,p]);return n.jsxs("div",{className:"animate-fade-in bg-white min-h-screen pb-24",children:[n.jsx("div",{className:"pt-4 md:pt-6"}),n.jsx("div",{className:"sticky top-[64px] md:top-[80px] z-40 bg-white/80 backdrop-blur-md border-b border-gray-100",children:n.jsx("div",{className:"max-w-7xl mx-auto",children:n.jsxs("div",{className:"flex flex-col md:flex-row items-center justify-between px-4 py-2 gap-4",children:[n.jsxs("div",{className:"flex gap-2 overflow-x-auto scrollbar-hide w-full md:w-auto py-2",children:[n.jsx("button",{onClick:()=>c("All"),className:`px-5 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all border ${b==="All"?"bg-black text-white border-black shadow-sm":"bg-transparent text-gray-400 border-gray-200 hover:text-black hover:border-black"}`,children:"All"}),ac.map(S=>n.jsx("button",{onClick:()=>c(S.id),className:`px-5 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest whitespace-nowrap transition-all border ${b===S.id?"bg-black text-white border-black shadow-sm":"bg-transparent text-gray-400 border-gray-200 hover:text-black hover:border-black"}`,children:S.name},S.id))]}),n.jsxs("div",{className:"flex items-center gap-4 w-full md:w-auto justify-between border-t md:border-t-0 border-gray-100 pt-2 md:pt-0 pb-1 md:pb-0",children:[n.jsxs("span",{className:"text-[10px] font-bold text-gray-400 uppercase tracking-widest",children:[T.length," Results"]}),n.jsxs("div",{className:"flex items-center gap-1",children:[n.jsx(P0,{size:12,className:"text-gray-400"}),n.jsxs("select",{className:"bg-transparent text-[10px] font-bold uppercase tracking-widest outline-none cursor-pointer text-gray-700",value:p,onChange:S=>m(S.target.value),children:[n.jsx("option",{value:"featured",children:"Sort: Featured"}),n.jsx("option",{value:"price-asc",children:"Price: Low to High"}),n.jsx("option",{value:"price-desc",children:"Price: High to Low"})]})]})]})]})})}),n.jsx("div",{className:"max-w-7xl mx-auto px-4 md:px-6 py-8 md:py-12",children:T.length>0?n.jsx("div",{className:"grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8 items-stretch",children:T.map(S=>n.jsx("div",{className:"flex",children:n.jsx(xs,{product:S,navigateTo:u,addToCart:d})},S.id))}):n.jsxs("div",{className:"py-32 text-center",children:[n.jsx("div",{className:"w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4",children:n.jsx(ks,{size:24,className:"text-gray-300"})}),n.jsx("p",{className:"font-serif text-xl text-gray-500",children:"No formulations found."}),n.jsx("button",{onClick:()=>{c("All"),g("All Brands"),h("")},className:"mt-4 text-[10px] font-bold uppercase tracking-[0.2em] text-black border-b border-black pb-0.5 hover:text-gray-500 hover:border-gray-500 transition-colors",children:"Clear all filters"})]})})]})},gy=({category:u,navigateTo:d,addToCart:b,setShopFilter:c})=>{const y=ac.find(j=>j.id===u)||{name:u};L.useEffect(()=>{u&&c(u)},[u,c]);const g=L.useMemo(()=>oa.filter(j=>j.category===u),[u]);return n.jsx("div",{className:"animate-fade-in bg-white min-h-screen pb-24",children:n.jsxs("div",{className:"max-w-7xl mx-auto px-4 md:px-6 py-8",children:[n.jsxs("div",{className:"mb-8",children:[n.jsx("h1",{className:"font-serif text-4xl md:text-5xl text-black",children:y.name}),n.jsxs("p",{className:"text-sm text-gray-500 mt-2",children:[g.length," products available"]})]}),g.length>0?n.jsx("div",{className:"grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6",children:g.map(j=>n.jsx(xs,{product:j,navigateTo:d,addToCart:b},j.id))}):n.jsxs("div",{className:"py-32 text-center",children:[n.jsx("div",{className:"w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4",children:n.jsx(ks,{size:24,className:"text-gray-300"})}),n.jsx("p",{className:"font-serif text-xl text-gray-500",children:"No products found in this category."}),n.jsx("button",{onClick:()=>d("shop"),className:"mt-4 text-[10px] font-bold uppercase tracking-[0.2em] text-black border-b border-black pb-0.5 hover:text-gray-500 hover:border-gray-500 transition-colors",children:"Browse all categories"})]})]})})},my=({post:u,navigateTo:d})=>n.jsxs("div",{className:"animate-fade-in bg-white min-h-screen pb-24",children:[n.jsxs("div",{className:"px-6 py-4 border-b border-gray-100 sticky top-20 bg-white z-40 flex gap-2 text-xs text-gray-500 items-center",children:[n.jsxs("button",{onClick:()=>d("blog"),className:"hover:text-black flex items-center gap-1",children:[n.jsx(Ss,{size:12})," Journal"]}),n.jsx("span",{className:"text-gray-300",children:"/"}),n.jsx("span",{className:"text-gray-800 truncate",children:u.title})]}),n.jsxs("div",{className:"max-w-3xl mx-auto px-6 py-8",children:[n.jsxs("div",{className:"mb-8",children:[n.jsx("span",{className:"text-gray-800 font-bold tracking-widest uppercase text-[10px] mb-3 block",children:u.category}),n.jsx("h1",{className:"font-serif text-3xl md:text-5xl leading-tight text-gray-900 mb-4",children:u.title}),n.jsxs("div",{className:"flex items-center gap-4 text-xs text-gray-400",children:[n.jsx("span",{children:u.date}),n.jsx("span",{className:"w-1 h-1 bg-gray-300 rounded-full"}),n.jsx("span",{children:u.author||"Editorial"})]})]}),n.jsx("div",{className:"aspect-video w-full bg-gray-100 rounded-xl overflow-hidden mb-10 shadow-sm",children:n.jsx("img",{loading:"lazy",src:u.image,alt:u.title,className:"w-full h-full object-cover"})}),n.jsx("div",{className:"prose prose-lg prose-gray mx-auto",children:n.jsx("div",{dangerouslySetInnerHTML:{__html:u.content}})})]})]}),py=({navigateTo:u})=>{const[d,b]=L.useState("All"),c=["All","Clinical Science","Ingredient Spotlight","Treatment Protocols","Safety & Compliance"],y=d==="All"?vs:vs.filter(g=>g.category===d);return n.jsxs("div",{className:"animate-fade-in bg-[#fbfbfb] min-h-screen pb-24",children:[n.jsxs("div",{className:"bg-black text-white pt-28 pb-12 px-6 text-center relative overflow-hidden",children:[n.jsx("div",{className:"absolute inset-0 opacity-30 bg-[url('/image/ban1.jpg')] bg-cover bg-center pointer-events-none"}),n.jsxs("div",{className:"relative z-10 max-w-3xl mx-auto",children:[n.jsx("span",{className:"text-white tracking-[0.3em] uppercase text-[10px] font-bold mb-3 block",children:"The Journal"}),n.jsx("h1",{className:"font-serif text-4xl md:text-6xl mb-4",children:"Clinical Insights"})]})]}),n.jsxs("div",{className:"max-w-7xl mx-auto px-4 md:px-6 py-10",children:[n.jsx("div",{className:"flex overflow-x-auto pb-4 mb-8 gap-2 scrollbar-hide -mx-6 px-6 md:mx-0 md:px-0",children:c.map(g=>n.jsx("button",{onClick:()=>b(g),className:`px-4 py-2 text-[10px] font-bold uppercase tracking-wider rounded-full whitespace-nowrap transition-all border ${d===g?"bg-black text-white border-black":"bg-white text-gray-500 hover:bg-gray-50 border-gray-200"}`,children:g},g))}),n.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12",children:y.map(g=>n.jsxs("div",{onClick:()=>u("blog-post",g),className:"group cursor-pointer flex flex-col h-full",children:[n.jsxs("div",{className:"relative aspect-[16/9] overflow-hidden mb-4 rounded-lg bg-gray-100",children:[n.jsx("img",{loading:"lazy",src:g.image,alt:g.title,className:"w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"}),n.jsx("div",{className:"absolute top-3 left-3 bg-white/90 backdrop-blur text-[9px] px-2 py-1 rounded-full font-bold tracking-wider uppercase shadow-sm",children:g.category})]}),n.jsx("div",{className:"flex items-center gap-2 text-[10px] text-gray-400 uppercase tracking-widest mb-2",children:n.jsx("span",{children:g.date})}),n.jsx("h3",{className:"font-serif text-xl md:text-2xl mb-3 text-gray-900 leading-tight group-hover:text-gray-800 transition-colors",children:g.title}),n.jsx("p",{className:"text-gray-500 font-light text-sm leading-relaxed mb-4 line-clamp-2",children:g.excerpt}),n.jsxs("button",{className:"flex items-center gap-2 text-xs font-bold text-black uppercase tracking-wide mt-auto group-hover:gap-3 transition-all pt-2",children:["Read ",n.jsx(ht,{size:12})]})]},g.id))})]})]})},fy=({product:u,addToCart:d,navigateTo:b})=>{const[c,y]=L.useState(1),[g,j]=L.useState(0),[h,p]=L.useState(!1),[m,T]=L.useState(!1),S=u.stock<=0;u.stock>0&&u.stock<=5;const w=Array.isArray(u.images)&&u.images.length>0?u.images:[u.image,u.image,u.image,u.image],O=oa.filter(U=>U.category===u.category&&U.id!==u.id).slice(0,4),q=()=>{if(!S){if(c>u.stock){alert(`Only ${u.stock} units available.`);return}d(u,c)}};return n.jsxs("div",{className:"animate-fade-in bg-white min-h-screen pb-24",children:[n.jsx("div",{className:"bg-white border-b border-gray-100 py-4 px-4 sticky top-0 z-40",children:n.jsxs("div",{className:"max-w-7xl mx-auto flex items-center text-[10px] uppercase tracking-[0.2em] text-gray-400",children:[n.jsxs("button",{onClick:()=>b("shop"),className:"hover:text-black flex items-center gap-1 transition-colors",children:[n.jsx(Ss,{size:12})," Catalog"]}),n.jsx("span",{className:"mx-2",children:"/"}),n.jsx("span",{className:"text-gray-900 font-bold truncate",children:u.name})]})}),n.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16",children:[n.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20",children:[n.jsxs("div",{className:"space-y-4",children:[n.jsx("div",{className:"aspect-[4/5] bg-gray-50 rounded-2xl overflow-hidden relative border border-gray-100",children:n.jsx("img",{src:w[g],alt:u.name,className:"w-full h-full object-contain p-8 mix-blend-multiply"})}),n.jsx("div",{className:"flex gap-3 overflow-x-auto scrollbar-hide",children:w.map((U,I)=>n.jsx("button",{onClick:()=>j(I),className:`w-20 h-20 rounded-xl overflow-hidden border-2 transition-all ${g===I?"border-black":"border-transparent"}`,children:n.jsx("img",{src:U,alt:"",className:"w-full h-full object-cover"})},I))})]}),n.jsxs("div",{className:"flex flex-col",children:[n.jsxs("div",{className:"mb-6",children:[n.jsx("span",{className:"text-[10px] font-bold tracking-[0.3em] text-gray-400 uppercase",children:u.category}),n.jsx("h1",{className:"text-3xl md:text-5xl font-serif mt-2 mb-4 leading-tight",children:u.name}),n.jsxs("div",{className:"flex items-center gap-4",children:[n.jsxs("span",{className:"text-3xl font-bold tracking-tight",children:["₹",u.price.toLocaleString()]}),u.comparePrice&&n.jsxs("span",{className:"text-gray-400 line-through",children:["₹",u.comparePrice.toLocaleString()]})]})]}),n.jsxs("div",{className:"space-y-4",children:[n.jsxs("div",{className:"flex items-center gap-4",children:[n.jsxs("div",{className:"flex items-center border border-gray-300 rounded-full px-2",children:[n.jsx("button",{onClick:()=>y(Math.max(1,c-1)),className:"p-4 text-gray-500",children:"−"}),n.jsx("span",{className:"w-10 text-center font-bold",children:c}),n.jsx("button",{onClick:()=>y(c+1),className:"p-4 text-gray-500",children:"+"})]}),n.jsx("button",{onClick:q,disabled:S,className:"flex-1 bg-black text-white h-14 rounded-full font-bold uppercase tracking-widest hover:bg-gray-800 disabled:bg-gray-300",children:S?"Sold Out":"Add to Cart"})]}),n.jsx("button",{onClick:()=>window.open(`https://wa.me/919916726373?text=Wholesale inquiry for ${u.name}`,"_blank"),className:"w-full py-4 border border-gray-200 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-gray-50",children:"Ask Wholesale Price"})]}),n.jsxs("div",{className:"mt-10 border-t border-gray-100 pt-8 space-y-6",children:[n.jsx("div",{className:"prose prose-sm text-gray-600 font-light",dangerouslySetInnerHTML:{__html:u.details}}),u.protocol?n.jsxs("div",{className:"border-t pt-4",children:[n.jsxs("button",{onClick:()=>p(!h),className:"flex w-full justify-between items-center font-bold uppercase text-[10px] tracking-widest",children:["Clinical Protocol ",n.jsx(Mm,{size:16,className:h?"rotate-180":""})]}),h&&n.jsx("div",{className:"mt-4 p-4 bg-gray-50 text-sm rounded-lg",dangerouslySetInnerHTML:{__html:u.protocol}})]}):null]})]})]}),O.length>0&&n.jsxs("div",{className:"mt-24",children:[n.jsx("h3",{className:"font-serif text-2xl mb-8",children:"Related Formulations"}),n.jsx("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-6",children:O.map(U=>n.jsxs("div",{onClick:()=>b("product",U),className:"cursor-pointer group",children:[n.jsx("div",{className:"aspect-[4/5] bg-gray-50 rounded-2xl mb-3 overflow-hidden",children:n.jsx("img",{src:U.image,className:"w-full h-full object-contain p-4 group-hover:scale-105 transition-transform"})}),n.jsx("p",{className:"font-bold text-sm truncate",children:U.name}),n.jsxs("p",{className:"text-gray-500",children:["₹",U.price.toLocaleString()]})]},U.id))})]})]})]})},hy=()=>n.jsxs("div",{className:"animate-fade-in pb-24 bg-[#fbfbfb]",children:[n.jsxs("div",{className:"bg-black text-white pt-32 pb-16 px-6 text-center relative overflow-hidden",children:[n.jsx("div",{className:"absolute inset-0 bg-[url('/image/ban2.jpg')] bg-cover bg-center opacity-20 pointer-events-none"}),n.jsxs("div",{className:"relative z-10 max-w-3xl mx-auto",children:[n.jsx("h1",{className:"font-serif text-4xl md:text-5xl mb-4",children:"Privacy Policy"}),n.jsx("p",{className:"text-gray-400 font-light text-sm md:text-base",children:"Last Updated: October 2025"})]})]}),n.jsx("div",{className:"max-w-4xl mx-auto px-6 py-16",children:n.jsxs("div",{className:"bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100 space-y-10 text-gray-600 font-light leading-relaxed",children:[n.jsxs("section",{children:[n.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[n.jsx("div",{className:"w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-800",children:n.jsx(ws,{size:16})}),n.jsx("h3",{className:"font-serif text-xl text-gray-900",children:"1. Data Collection & Usage"})]}),n.jsx("p",{children:"We strictly collect only the information necessary to process wholesale orders and verify professional credentials. This includes your medical license number, clinic address, and contact details. This data is used solely for order fulfillment, regulatory compliance, and account management."})]}),n.jsxs("section",{children:[n.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[n.jsx("div",{className:"w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-800",children:n.jsx(S0,{size:16})}),n.jsx("h3",{className:"font-serif text-xl text-gray-900",children:"2. Data Security"})]}),n.jsx("p",{children:"Shaa Trading employs industry-standard SSL encryption to protect your sensitive data during transmission. We partner with secure payment gateways and do not store credit card details on our servers. Access to personal data is restricted to authorized personnel only."})]}),n.jsxs("section",{children:[n.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[n.jsx("div",{className:"w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-800",children:n.jsx(tc,{size:16})}),n.jsx("h3",{className:"font-serif text-xl text-gray-900",children:"3. Communications"})]}),n.jsx("p",{children:"We may use your contact details to communicate important order updates, safety recalls, or exclusive wholesale offers. You retain the right to opt-out of marketing communications at any time via the unsubscribe link or by contacting support."})]}),n.jsxs("section",{children:[n.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[n.jsx("div",{className:"w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-800",children:n.jsx(Im,{size:16})}),n.jsx("h3",{className:"font-serif text-xl text-gray-900",children:"4. Third-Party Disclosure"})]}),n.jsx("p",{children:"We do not sell, trade, or otherwise transfer your Personally Identifiable Information to outside parties, except for trusted third parties who assist us in operating our website, conducting our business (e.g., logistics partners), or serving our users, so long as those parties agree to keep this information confidential."})]})]})})]}),yy=()=>n.jsxs("div",{className:"animate-fade-in pb-24 bg-[#fbfbfb]",children:[n.jsxs("div",{className:"bg-black text-white pt-32 pb-16 px-6 text-center relative overflow-hidden",children:[n.jsx("div",{className:"absolute inset-0 bg-[url('/image/ban2.jpg')] bg-cover bg-center opacity-20 pointer-events-none"}),n.jsxs("div",{className:"relative z-10 max-w-3xl mx-auto",children:[n.jsx("h1",{className:"font-serif text-4xl md:text-5xl mb-4",children:"Terms of Service"}),n.jsx("p",{className:"text-gray-400 font-light text-sm md:text-base",children:"Professional Engagement Guidelines"})]})]}),n.jsx("div",{className:"max-w-4xl mx-auto px-6 py-16",children:n.jsxs("div",{className:"bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100 space-y-10 text-gray-600 font-light leading-relaxed",children:[n.jsxs("section",{children:[n.jsx("h3",{className:"font-serif text-xl text-gray-900 mb-4 border-l-2 border-gray-800 pl-4",children:"1. Professional Use Only"}),n.jsx("p",{children:"By purchasing from Shaa Trading, you explicitly certify that you are a licensed medical professional or an authorized representative of a licensed clinic. Our products, particularly injectables and professional-grade peels, are strictly for professional administration. We reserve the right to cancel orders that fail credential verification."})]}),n.jsxs("section",{children:[n.jsx("h3",{className:"font-serif text-xl text-gray-900 mb-4 border-l-2 border-gray-800 pl-4",children:"2. Product Liability & Usage"}),n.jsx("p",{children:"Shaa Trading acts solely as an authorized distributor. While we guarantee the authenticity and cold-chain integrity of our products, we are not the manufacturer. Any adverse reactions should be reported to the manufacturer directly. Shaa Trading is not liable for misuse, improper administration, or off-label use of products."})]}),n.jsxs("section",{children:[n.jsx("h3",{className:"font-serif text-xl text-gray-900 mb-4 border-l-2 border-gray-800 pl-4",children:"3. Returns & Refunds"}),n.jsxs("p",{children:["Due to the sensitive nature of medical aesthetics and strict temperature control requirements, ",n.jsx("strong",{children:"all sales of injectables are final"}),". We cannot accept returns once the product has left our controlled facility to ensure safety. Returns are only processed in the rare event of a proven manufacturing defect or shipping error reported within 24 hours of receipt."]})]}),n.jsxs("section",{children:[n.jsx("h3",{className:"font-serif text-xl text-gray-900 mb-4 border-l-2 border-gray-800 pl-4",children:"4. Pricing & Availability"}),n.jsx("p",{children:"Prices are subject to change without notice due to international exchange rates and manufacturer adjustments. We reserve the right to limit quantities per client to ensure equitable distribution of high-demand stock."})]})]})})]}),by=()=>n.jsxs("div",{className:"animate-fade-in pb-24 bg-[#fbfbfb]",children:[n.jsxs("div",{className:"bg-black text-white pt-32 pb-16 px-6 text-center relative overflow-hidden",children:[n.jsx("div",{className:"absolute inset-0 bg-[url('/image/ban2.jpg')] bg-cover bg-center opacity-20 pointer-events-none"}),n.jsxs("div",{className:"relative z-10 max-w-3xl mx-auto",children:[n.jsx("h1",{className:"font-serif text-4xl md:text-5xl mb-4",children:"Shipping & Logistics"}),n.jsx("p",{className:"text-gray-400 font-light text-sm md:text-base",children:"Ensuring clinical integrity from warehouse to clinic."})]})]}),n.jsxs("div",{className:"max-w-4xl mx-auto px-6 py-16",children:[n.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6 mb-12",children:[n.jsxs("div",{className:"bg-white p-6 rounded-xl border border-gray-100 text-center",children:[n.jsx(Lm,{size:24,className:"text-gray-800 mx-auto mb-3"}),n.jsx("h4",{className:"font-serif font-bold text-gray-900",children:"Cold Chain"}),n.jsx("p",{className:"text-xs text-gray-500 mt-2",children:"Insulated packaging for biologics."})]}),n.jsxs("div",{className:"bg-white p-6 rounded-xl border border-gray-100 text-center",children:[n.jsx(Gm,{size:24,className:"text-gray-800 mx-auto mb-3"}),n.jsx("h4",{className:"font-serif font-bold text-gray-900",children:"24h Dispatch"}),n.jsx("p",{className:"text-xs text-gray-500 mt-2",children:"Same-day processing for orders before 2 PM."})]}),n.jsxs("div",{className:"bg-white p-6 rounded-xl border border-gray-100 text-center",children:[n.jsx(bs,{size:24,className:"text-gray-800 mx-auto mb-3"}),n.jsx("h4",{className:"font-serif font-bold text-gray-900",children:"Pan-India"}),n.jsx("p",{className:"text-xs text-gray-500 mt-2",children:"Serviceable to 19,000+ pin codes."})]})]}),n.jsxs("div",{className:"bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100 space-y-10 text-gray-600 font-light leading-relaxed",children:[n.jsxs("section",{children:[n.jsx("h3",{className:"font-serif text-xl text-gray-900 mb-4",children:"1. Cold Chain Protocol"}),n.jsx("p",{children:"Temperature-sensitive items (peptides, growth factors, certain injectables) are packed in medical-grade insulated boxes with gel ice packs. We continually monitor transit times to ensure product stability upon arrival. Please refrigerate immediately upon receipt."})]}),n.jsxs("section",{children:[n.jsx("h3",{className:"font-serif text-xl text-gray-900 mb-4",children:"2. Delivery Timelines"}),n.jsxs("ul",{className:"list-disc pl-5 space-y-2",children:[n.jsxs("li",{children:[n.jsx("strong",{children:"Metro Cities (Delhi, Mumbai, Bangalore, Chennai, Kolkata):"})," 24-48 Hours."]}),n.jsxs("li",{children:[n.jsx("strong",{children:"Tier 1 & 2 Cities:"})," 2-4 Business Days."]}),n.jsxs("li",{children:[n.jsx("strong",{children:"Rest of India / Remote Areas:"})," 5-7 Business Days."]})]}),n.jsx("p",{className:"mt-4 text-xs bg-gray-50 p-3 rounded text-gray-500",children:"Note: Timelines are estimates. Severe weather or political unrest may cause unavoidable delays."})]}),n.jsxs("section",{children:[n.jsx("h3",{className:"font-serif text-xl text-gray-900 mb-4",children:"3. Damaged or Lost Shipments"}),n.jsx("p",{children:"While rare, if a shipment arrives damaged, you must document it immediately. Please take clear photos of the external packaging and damaged contents and email us within 4 hours of delivery at shaatrading@gmail.com for a replacement."})]})]})]})]}),xy=()=>{const[u,d]=L.useState(null),b=[{id:1,val:"500+",label:"Partner Clinics"},{id:2,val:"100%",label:"Authentic Guarantee"},{id:3,val:"12",label:"Years of Service"},{id:4,val:"24h",label:"Dispatch Time"}];return n.jsxs("div",{className:"animate-fade-in pb-24 bg-[#fbfbfb]",children:[n.jsxs("div",{className:"relative bg-[#0a0a0a] text-white py-28 px-6 overflow-hidden",children:[n.jsx("div",{className:"absolute inset-0 bg-[url('/image/ban2.jpg')] bg-cover bg-center opacity-30 mix-blend-luminosity pointer-events-none"}),n.jsxs("div",{className:"relative z-10 max-w-4xl mx-auto text-center",children:[n.jsx("span",{className:"text-white tracking-[0.3em] uppercase text-[10px] md:text-xs font-bold mb-4 block animate-slide-up",children:"Established 2012"}),n.jsxs("h1",{className:"font-serif text-5xl md:text-7xl mb-6 leading-tight animate-slide-up",style:{animationDelay:"0.1s"},children:["Trusted ",n.jsx("br",{}),n.jsx("span",{className:"italic text-gray-400 font-light",children:"Healthcare Supply"})]}),n.jsx("p",{className:"text-gray-400 font-light text-lg md:text-xl max-w-2xl mx-auto leading-relaxed animate-slide-up",style:{animationDelay:"0.2s"},children:"Shaa Trading bridges the gap between elite laboratories and India's leading healthcare clinics."})]})]}),n.jsx("div",{className:"max-w-7xl mx-auto px-4 md:px-6 py-20",children:n.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center",children:[n.jsxs("div",{className:"relative aspect-[4/5] md:aspect-square bg-gray-100 rounded-lg overflow-hidden",children:[n.jsx("img",{loading:"lazy",src:"/image/blog4.jpg",alt:"Laboratory",className:"w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"}),n.jsxs("div",{className:"absolute bottom-6 left-6 bg-white/90 backdrop-blur p-4 rounded max-w-xs shadow-lg",children:[n.jsx("p",{className:"font-serif text-lg italic",children:'"Quality is not a feature. It is the foundation of healthcare supply."'}),n.jsx("p",{className:"text-xs font-bold uppercase tracking-widest mt-2",children:"— Director's Note"})]})]}),n.jsxs("div",{children:[n.jsx("span",{className:"text-gray-800 font-bold tracking-widest uppercase text-xs mb-3 block",children:"Our Mission"}),n.jsxs("h2",{className:"font-serif text-3xl md:text-5xl mb-6 text-gray-900 leading-tight",children:["Beyond Distribution: ",n.jsx("br",{}),"Guardians of Quality"]}),n.jsxs("div",{className:"space-y-6 text-gray-600 font-light leading-relaxed",children:[n.jsx("p",{children:"In an industry often clouded by uncertainty, Shaa Trading stands as a beacon of authenticity. We don't just move boxes. We verify cold-chain integrity, audit batch numbers, and ensure that every product performs exactly as intended."}),n.jsx("p",{children:"Founded in 2012 by a team of healthcare professionals and logistics experts, we recognized a critical gap in the market: the disconnect between premium manufacturers and the clinics that need them. We closed that gap."})]}),n.jsxs("div",{className:"mt-8 pt-8 border-t border-gray-100 grid grid-cols-1 sm:grid-cols-2 gap-6",children:[n.jsxs("div",{children:[n.jsx("h4",{className:"font-serif text-xl mb-1",children:"Bengaluru"}),n.jsx("p",{className:"text-xs text-gray-400 uppercase tracking-widest",children:"Headquarters"})]}),n.jsxs("div",{children:[n.jsx("h4",{className:"font-serif text-xl mb-1",children:"Since 2012"}),n.jsx("p",{className:"text-xs text-gray-400 uppercase tracking-widest",children:"Trusted Service"})]})]})]})]})}),n.jsx("div",{className:"bg-black text-white py-16",children:n.jsx("div",{className:"max-w-7xl mx-auto px-4 md:px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x sm:divide-x md:divide-x divide-white/10",children:b.map(c=>n.jsxs("div",{className:"p-2",children:[n.jsx("div",{className:"font-serif text-4xl md:text-5xl text-white mb-2",children:c.val}),n.jsx("div",{className:"text-[10px] md:text-xs font-bold uppercase tracking-widest text-gray-400",children:c.label})]},c.id))})}),n.jsxs("div",{className:"max-w-7xl mx-auto px-4 md:px-6 py-20 bg-white",children:[n.jsx(J0,{title:"The Quality Promise",subtitle:"How we protect the efficacy of sensitive healthcare products"}),n.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-8 mt-12",children:[n.jsxs("div",{className:"bg-gray-50 p-8 rounded-xl border border-gray-100 text-center hover:shadow-lg transition-all group",children:[n.jsx("div",{className:"w-14 h-14 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm group-hover:scale-110 transition-transform",children:n.jsx(Lm,{size:24,className:"text-gray-800"})}),n.jsx("h3",{className:"font-serif text-xl mb-3",children:"Quality Storage"}),n.jsx("p",{className:"text-sm text-gray-500 font-light leading-relaxed",children:"Our facilities maintain strict temperature control for sensitive products, ensuring zero degradation before dispatch."})]}),n.jsxs("div",{className:"bg-gray-50 p-8 rounded-xl border border-gray-100 text-center hover:shadow-lg transition-all group",children:[n.jsx("div",{className:"w-14 h-14 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm group-hover:scale-110 transition-transform",children:n.jsx(ws,{size:24,className:"text-gray-800"})}),n.jsx("h3",{className:"font-serif text-xl mb-3",children:"Batch Verification"}),n.jsx("p",{className:"text-sm text-gray-500 font-light leading-relaxed",children:"Every shipment is cross-referenced with manufacturer lot numbers. We employ a rigorous authentication process for every product."})]}),n.jsxs("div",{className:"bg-gray-50 p-8 rounded-xl border border-gray-100 text-center hover:shadow-lg transition-all group",children:[n.jsx("div",{className:"w-14 h-14 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm group-hover:scale-110 transition-transform",children:n.jsx(Gm,{size:24,className:"text-gray-800"})}),n.jsx("h3",{className:"font-serif text-xl mb-3",children:"Reliable Logistics"}),n.jsx("p",{className:"text-sm text-gray-500 font-light leading-relaxed",children:"We utilize trusted logistics partners to minimize transit time. Proper packaging keeps products stable throughout delivery."})]})]})]}),n.jsxs("div",{className:"max-w-3xl mx-auto px-6 py-12",children:[n.jsx("h3",{className:"font-serif text-2xl mb-8 text-center",children:"Frequently Asked Questions"}),n.jsx("div",{className:"space-y-4",children:F0.map((c,y)=>n.jsxs("div",{className:"border border-gray-200 rounded-lg bg-white overflow-hidden transition-all hover:border-gray-300",children:[n.jsxs("button",{className:"w-full px-6 py-5 text-left flex justify-between items-center group",onClick:()=>d(u===y?null:y),children:[n.jsx("span",{className:`font-serif text-lg ${u===y?"text-gray-800":"text-gray-900"} transition-colors`,children:c.q}),n.jsx(Mm,{size:18,className:`text-gray-400 transition-transform duration-300 ${u===y?"rotate-180":""}`})]}),n.jsx("div",{className:`px-6 overflow-hidden transition-all duration-300 ${u===y?"max-h-40 pb-6 opacity-100":"max-h-0 opacity-0"}`,children:n.jsx("p",{className:"text-sm text-gray-500 font-light leading-relaxed border-t border-gray-100 pt-4",children:c.a})})]},y))})]})]})},vy=({showToast:u})=>{const[d,b]=L.useState({name:"",clinicName:"",email:"",phone:"",message:""}),c=g=>{g.preventDefault();const j=`New Inquiry:%0A%0AName: ${encodeURIComponent(d.name)}%0AClinic: ${encodeURIComponent(d.clinicName)}%0AEmail: ${encodeURIComponent(d.email)}%0APhone: ${encodeURIComponent(d.phone)}%0AMessage: ${encodeURIComponent(d.message)}`;window.open(`https://wa.me/919916726373?text=${j}`,"_blank"),u("Opening WhatsApp...","success")},y=g=>b({...d,[g.target.name]:g.target.value});return n.jsxs("div",{className:"animate-fade-in bg-[#fbfbfb] min-h-screen pb-24",children:[n.jsxs("div",{className:"bg-black text-white pt-32 pb-16 px-6 text-center relative overflow-hidden",children:[n.jsx("div",{className:"absolute inset-0 bg-[url('/image/ban2.jpg')] bg-cover bg-center opacity-30 pointer-events-none"}),n.jsxs("div",{className:"relative z-10 max-w-3xl mx-auto",children:[n.jsx("span",{className:"text-white tracking-[0.3em] uppercase text-[10px] font-bold mb-3 block animate-slide-up",children:"Partner With Us"}),n.jsx("h1",{className:"font-serif text-4xl md:text-6xl mb-4 animate-slide-up",style:{animationDelay:"0.1s"},children:"Get in Touch"}),n.jsx("p",{className:"text-gray-400 font-light text-sm md:text-base max-w-lg mx-auto animate-slide-up",style:{animationDelay:"0.2s"},children:"Dedicated support for clinics, hospitals, and distribution partners across India."})]})]}),n.jsx("div",{className:"max-w-7xl mx-auto px-4 md:px-6 py-16",children:n.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24",children:[n.jsxs("div",{className:"space-y-10",children:[n.jsxs("div",{children:[n.jsx("h2",{className:"font-serif text-3xl text-gray-900 mb-6",children:"Shaa Trading"}),n.jsx("p",{className:"text-gray-500 font-light leading-relaxed mb-8",children:"We are Bengaluru's trusted distributor of healthcare and clinical formulations since 2012. Whether you are a clinic looking to stock premium products or a manufacturer looking for a distribution partner, we are here to assist."}),n.jsxs("div",{className:"space-y-6",children:[n.jsxs("div",{className:"flex items-start gap-4",children:[n.jsx("div",{className:"w-12 h-12 bg-white border border-gray-100 rounded-full flex items-center justify-center text-gray-800 shrink-0 shadow-sm",children:n.jsx(ys,{size:20})}),n.jsxs("div",{children:[n.jsx("h4",{className:"font-serif text-lg mb-1",children:"Phone Support"}),n.jsx("p",{className:"text-sm text-gray-500 mb-1",children:"+91 99167 26373"}),n.jsx("p",{className:"text-xs text-gray-400",children:"Mon-Sat: 10am - 7pm IST"})]})]}),n.jsxs("div",{className:"flex items-start gap-4",children:[n.jsx("div",{className:"w-12 h-12 bg-white border border-gray-100 rounded-full flex items-center justify-center text-gray-800 shrink-0 shadow-sm",children:n.jsx(tc,{size:20})}),n.jsxs("div",{children:[n.jsx("h4",{className:"font-serif text-lg mb-1",children:"Email"}),n.jsx("p",{className:"text-sm text-gray-500 mb-1",children:"shaatrading@gmail.com"}),n.jsx("p",{className:"text-xs text-gray-400",children:"24/7 Digital Support"})]})]}),n.jsxs("div",{className:"flex items-start gap-4",children:[n.jsx("div",{className:"w-12 h-12 bg-white border border-gray-100 rounded-full flex items-center justify-center text-gray-800 shrink-0 shadow-sm",children:n.jsx(zm,{size:20})}),n.jsxs("div",{children:[n.jsx("h4",{className:"font-serif text-lg mb-1",children:"Location"}),n.jsxs("p",{className:"text-sm text-gray-500 leading-relaxed",children:["Bengaluru, Karnataka",n.jsx("br",{}),"Since 2012",n.jsx("br",{}),"India"]})]})]})]})]}),n.jsxs("div",{className:"pt-10 border-t border-gray-100",children:[n.jsx("h4",{className:"text-xs font-bold uppercase tracking-widest text-gray-400 mb-6",children:"Trusted By Professionals"}),n.jsxs("div",{className:"flex gap-8 opacity-50 grayscale hover:grayscale-0 transition-all",children:[n.jsx("span",{className:"font-serif text-xl text-gray-800 font-bold",children:"Glutax"}),n.jsx("span",{className:"font-serif text-xl text-gray-800 font-bold",children:"Veniscy"}),n.jsx("span",{className:"font-serif text-xl text-gray-800 font-bold",children:"Miracle White"})]})]})]}),n.jsxs("div",{className:"bg-white p-8 md:p-10 rounded-2xl shadow-xl border border-gray-100 relative overflow-hidden",children:[n.jsx("div",{className:"absolute top-0 right-0 w-32 h-32 bg-gray-800 rounded-full filter blur-[60px] opacity-20 pointer-events-none"}),n.jsx("h3",{className:"font-serif text-2xl mb-2",children:"Send an Inquiry"}),n.jsx("p",{className:"text-sm text-gray-500 mb-8",children:"Fill out the form below and our wholesale team will contact you within 24 hours."}),n.jsxs("form",{onSubmit:c,className:"space-y-5 relative z-10",children:[n.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-5",children:[n.jsxs("div",{className:"space-y-1.5",children:[n.jsx("label",{className:"text-xs font-bold uppercase tracking-wide text-gray-400",children:"Contact Name"}),n.jsx("input",{required:!0,name:"name",type:"text",className:"w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg outline-none text-sm focus:border-black transition-colors",value:d.name,onChange:y})]}),n.jsxs("div",{className:"space-y-1.5",children:[n.jsx("label",{className:"text-xs font-bold uppercase tracking-wide text-gray-400",children:"Clinic / Business"}),n.jsx("input",{required:!0,name:"clinicName",type:"text",className:"w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg outline-none text-sm focus:border-black transition-colors",value:d.clinicName,onChange:y})]})]}),n.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-5",children:[n.jsxs("div",{className:"space-y-1.5",children:[n.jsx("label",{className:"text-xs font-bold uppercase tracking-wide text-gray-400",children:"Email Address"}),n.jsx("input",{required:!0,name:"email",type:"email",className:"w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg outline-none text-sm focus:border-black transition-colors",value:d.email,onChange:y})]}),n.jsxs("div",{className:"space-y-1.5",children:[n.jsx("label",{className:"text-xs font-bold uppercase tracking-wide text-gray-400",children:"Phone Number"}),n.jsx("input",{required:!0,name:"phone",type:"tel",className:"w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg outline-none text-sm focus:border-black transition-colors",value:d.phone,onChange:y})]})]}),n.jsxs("div",{className:"space-y-1.5",children:[n.jsx("label",{className:"text-xs font-bold uppercase tracking-wide text-gray-400",children:"Message"}),n.jsx("textarea",{required:!0,name:"message",rows:"4",className:"w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg outline-none text-sm resize-none focus:border-black transition-colors",value:d.message,onChange:y})]}),n.jsx(Qa,{type:"submit",className:"w-full py-4 text-sm uppercase tracking-widest font-bold shadow-lg hover:shadow-xl translate-y-0 hover:-translate-y-1 transition-all duration-300",children:"Send Inquiry"}),n.jsx("p",{className:"text-[10px] text-gray-400 text-center mt-4",children:"By submitting this form, you agree to our privacy policy. We respect your data."})]})]})]})})]})},nc=u=>u?String(u).toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,""):"",Hm=u=>{if(!u)return"";const d=nc(u.name||"");return u.id!=null?`${d}-${u.id}`:d},Um=u=>{if(!u)return"";const d=nc(u.title||"");return u.id!=null?`${d}-${u.id}`:d},qm=u=>nc(u||""),Ye=(u,d={})=>{switch(u){case"home":return"/";case"shop":return"/shop";case"cart":return"/cart";case"about":return"/about";case"contact":return"/contact";case"blog":return"/blog";case"blog-post":return d.post?`/blog/${Um(d.post)}`:"/blog";case"product":return d.product?`/product/${Hm(d.product)}`:"/shop";case"category":return d.category?`/category/${qm(d.category)}`:"/shop";case"terms":return"/terms";case"privacy":return"/privacy";case"shipping":return"/shipping";case"return-policy":return"/return-policy";case"refund-policy":return"/refund-policy";case"success":return"/order-success";default:return"/"}},Am=()=>{if(typeof window>"u")return{page:"home",product:null,post:null,path:"/"};const{pathname:u,search:d}=window.location,c=(u.replace(/\/+$|^$/g,"")||"/").split("/").filter(Boolean),y=new URLSearchParams(d||""),g=y.get("page"),j=y.get("id");let h="home",p=null,m=null,T=null;if(c.length===0){if(g==="product"&&j){const q=oa.find(U=>String(U.id)===String(j));if(q)return h="product",p=q,{page:h,product:p,post:m,path:Ye("product",{product:p})}}else if(g==="blog-post"&&j){const q=vs.find(U=>String(U.id)===String(j));if(q)return h="blog-post",m=q,{page:h,product:p,post:m,path:Ye("blog-post",{post:m})}}else g==="shop"?h="shop":g==="about"?h="about":g==="contact"?h="contact":g==="blog"?h="blog":g==="terms"?h="terms":g==="privacy"?h="privacy":g==="shipping"?h="shipping":g==="return-policy"?h="return-policy":g==="refund-policy"?h="refund-policy":g==="success"?h="success":h="home";return{page:h,product:p,post:m,path:Ye(h,{product:p,post:m})}}const[S,w]=c;switch(S){case"":h="home";break;case"shop":h="shop";break;case"about":h="about";break;case"cart":h="cart";break;case"contact":h="contact";break;case"blog":if(w){const q=w,U=vs.find(I=>Um(I)===q);U?(h="blog-post",m=U):h="blog"}else h="blog";break;case"product":if(w){const q=w,U=oa.find(I=>Hm(I)===q);U?(h="product",p=U):h="shop"}else h="shop";break;case"category":if(w){const q=w,U=ac.find(I=>qm(I.id)===q);U?(h="category",T=U.id):h="shop"}else h="shop";break;case"terms":h="terms";break;case"privacy":h="privacy";break;case"shipping":h="shipping";break;case"return-policy":h="return-policy";break;case"refund-policy":h="refund-policy";break;case"order-success":h="success";break;default:h="home";break}const O=Ye(h,{product:p,post:m,category:T});return{page:h,product:p,post:m,category:T,path:O}},jy=(u,d,b,c)=>{let y="Shaa Trading | Skin Whitening, Injectables & Aesthetic Supplies",g="Shaa Trading is a Bengaluru-based distributor and supplier of skin whitening creams, glutathione injections, Korean injectables and aesthetic clinic essentials.",j={"@context":"https://schema.org","@type":"Organization",name:"Shaa Trading",url:"https://shaatrading.in",logo:"https://shaatrading.in/image/logo-t.jpg"},h="Shaa Trading, skin whitening distributor, glutathione injections India, Aqua Skin, Glutax, Glowtiqa, clinic supplier, whitening creams, whitening soaps",p="https://shaatrading.in/",m="index,follow";switch(u){case"home":y="Shaa Trading | Skin Whitening & Glutathione Injection Distributor in India",g="Discover authentic glutathione injections, Aqua Skin, Glutax, Glowtiqa creams and advanced whitening products supplied to clinics and resellers across India.",p="https://shaatrading.in/",h="Shaa Trading, glutathione distributor India, skin whitening supplier, Aqua Skin injections, Glutax distributor, Glowtiqa creams, skin whitening wholesaler Bengaluru",j={"@context":"https://schema.org","@type":"LocalBusiness",name:"Shaa Trading",url:"https://shaatrading.in",image:"https://shaatrading.in/image/logo-t.jpg",logo:"https://shaatrading.in/image/logo-t.jpg",address:{"@type":"PostalAddress",addressLocality:"Bengaluru",addressRegion:"Karnataka",addressCountry:"IN"}};break;case"shop":y="Shop | Glutathione Injections, Glowtiqa Creams & Whitening Kits – Shaa Trading",g="Browse Aqua Skin, Glutax, Dr James, Glowtiqa and other advanced skin whitening injections, creams, soaps and supplements from Shaa Trading.",p=`https://shaatrading.in${Ye("shop")}`,h="buy glutathione injections, Aqua Skin India, Glutax injections, Dr James injection, Glowtiqa whitening cream, skin whitening products online, clinic supplies India";break;case"category":y=`${c} | Shaa Trading`,g=`Browse ${c} supplies and products from Shaa Trading for clinics and professionals.`,p=`https://shaatrading.in${Ye("category",{category:c})}`,h=`${c} products, ${c} supplier, Shaa Trading ${c}`;break;case"cart":y="Your Cart | Shaa Trading",g="Review the items in your cart and proceed to payment for your Shaa Trading order.",p=`https://shaatrading.in${Ye("cart")}`,h="cart, shopping cart, sha a trading cart, checkout";break;case"about":y="About Shaa Trading | Bengaluru-based Skin Whitening Product Supplier",g="Learn about Shaa Trading, a Bengaluru-based distributor of glutathione injectables, whitening creams and professional aesthetic supplies since 2012.",p=`https://shaatrading.in${Ye("about")}`,h="about Shaa Trading, skin whitening supplier Bengaluru, glutathione wholesale India, aesthetic products distributor";break;case"contact":y="Contact Shaa Trading | Wholesale & Clinic Supply Enquiries",g="Get in touch with Shaa Trading for wholesale price lists, bulk orders, reseller opportunities and clinic partnerships for skin whitening and injectable products.",p=`https://shaatrading.in${Ye("contact")}`,h="contact Shaa Trading, glutathione wholesale enquiry, clinic supply contact, skin whitening distributor contact";break;case"blog":y="Clinical Insights | Glutathione, PDRN & IV Therapy – Shaa Trading Journal",g="Read educational articles on glutathione science, PDRN, IV therapy protocols and safety guidance for clinics and practitioners.",p=`https://shaatrading.in${Ye("blog")}`,h="glutathione science, PDRN information, IV therapy protocols, skin whitening education, Shaa Trading blog";break;case"blog-post":b&&(y=`${b.title} | Shaa Trading Clinical Journal`,g=b.excerpt||g,p=`https://shaatrading.in${Ye("blog-post",{post:b})}`,h=`${b.title}, ${b.category}, glutathione articles, clinical aesthetics, Shaa Trading journal`,j={"@context":"https://schema.org","@type":"Article",headline:b.title,description:b.excerpt,author:b.author||"Shaa Trading Editorial",datePublished:b.date,image:`https://shaatrading.in${b.image}`,publisher:{"@type":"Organization",name:"Shaa Trading",logo:{"@type":"ImageObject",url:"https://shaatrading.in/image/logo-t.jpg"}}});break;case"product":if(d){const T=d.description||g;y=`${d.name} | ${d.brand} Supplier – Shaa Trading`,g=T.length>155?T.slice(0,152)+"…":T,p=`https://shaatrading.in${Ye("product",{product:d})}`,h=[d.name,d.brand,d.category,"glutathione injection","skin whitening","whitening product","clinic supply","wholesaler India"].filter(Boolean).join(", "),j={"@context":"https://schema.org","@type":"Product",name:d.name,image:[`https://shaatrading.in${d.image}`],description:g,brand:{"@type":"Brand",name:d.brand},sku:d.sku||void 0,offers:{"@type":"Offer",priceCurrency:"INR",price:d.price,availability:"https://schema.org/InStock",url:p}}}break;case"terms":y="Terms & Conditions | Shaa Trading",g="Read the professional use terms, liability and purchasing eligibility for Shaa Trading clients, clinics and resellers.",p=`https://shaatrading.in${Ye("terms")}`,h="Shaa Trading terms and conditions, skin whitening product terms, clinic supply terms",m="noindex,follow";break;case"privacy":y="Privacy Policy | Shaa Trading",g="Understand how Shaa Trading handles, stores and protects your personal, clinic and order data.",p=`https://shaatrading.in${Ye("privacy")}`,h="Shaa Trading privacy policy, data handling, data protection, clinic data privacy",m="noindex,follow";break;case"shipping":y="Shipping Policy | Shaa Trading",g="Learn about domestic shipping timelines, handling and packaging processes for Shaa Trading orders across India.",p=`https://shaatrading.in${Ye("shipping")}`,h="Shaa Trading shipping policy, delivery time, order handling, India shipping whitening products",m="noindex,follow";break;case"return-policy":y="Return Policy | Shaa Trading",g="View our guidelines for damaged, incorrect or compromised products and return eligibility for customers and clinics.",p=`https://shaatrading.in${Ye("return-policy")}`,h="Shaa Trading return policy, damaged product return, clinic returns, whitening injection returns",m="noindex,follow";break;case"refund-policy":y="Refund Policy | Shaa Trading",g="Read our refund conditions for cancelled orders, payment failures and exceptional disputes.",p=`https://shaatrading.in${Ye("refund-policy")}`,h="Shaa Trading refund policy, payment refund, order cancellation refund",m="noindex,follow";break;case"success":y="Order Confirmed | Shaa Trading",g="Your order and payment have been received by Shaa Trading. Our team will confirm dispatch and shipping details shortly.",p=`https://shaatrading.in${Ye("success")}`,h="Shaa Trading order success, payment success, whitening order confirmed",m="noindex,follow";break}return{title:y,description:g,jsonLd:j,keywords:h,canonical:p,robots:m}};function Sy(){const[u,d]=L.useState("home"),[b,c]=L.useState([]),[y,g]=L.useState(!1),[j,h]=L.useState(!1),[p,m]=L.useState(null),[T,S]=L.useState(null),[w,O]=L.useState(null),[q,U]=L.useState(null),[I,_]=L.useState(null),[ue,ae]=L.useState("All"),[Q,Se]=L.useState("All Brands"),[He,le]=L.useState(""),[Ue,oi]=L.useState(()=>localStorage.getItem("shaa_token")||""),[Ke,si]=L.useState(()=>{try{const B=localStorage.getItem("shaa_user");return B?JSON.parse(B):null}catch{return null}}),Qe=()=>{oi(""),si(null),localStorage.removeItem("shaa_token"),localStorage.removeItem("shaa_user"),Ee("Logged out successfully","success"),d("home")};L.useEffect(()=>{const B=Am();d(B.page),B.product&&m(B.product),B.post&&S(B.post),B.page==="category"&&B.category?(O(B.category),ae(B.category)):O(null);const V={page:B.page,product:B.product||null,post:B.post||null};window.history.replaceState(V,"",B.path);const Z=ee=>{if(ee.state&&ee.state.page)d(ee.state.page),m(ee.state.product||null),S(ee.state.post||null),ee.state.page==="category"&&ee.state.category?(O(ee.state.category),ae(ee.state.category)):O(null);else{const se=Am();d(se.page),m(se.product||null),S(se.post||null),se.page==="category"&&se.category?(O(se.category),ae(se.category)):O(null)}h(!1)};return window.addEventListener("popstate",Z),()=>window.removeEventListener("popstate",Z)},[]);const Ee=(B,V="success")=>{U({message:B,type:V})},ye=(B,V=null)=>{B==="product"&&V?m(V):B==="blog-post"&&V?S(V):B==="category"&&V?(O(V),ae(V)):B!=="category"&&O(null),d(B),h(!1),window.scrollTo(0,0);const Z={page:B,product:B==="product"?V:null,post:B==="blog-post"?V:null,category:B==="category"?V:null},ee=Ye(B,{product:Z.product,post:Z.post,category:Z.category});window.history.pushState(Z,"",ee)},Je=(B,V=1)=>{c(Z=>Z.find(se=>se.id===B.id)?Z.map(se=>se.id===B.id?{...se,quantity:se.quantity+V}:se):[...Z,{...B,quantity:V}]),ye("cart"),Ee(`Added ${B.name} to cart`,"success")},R=B=>{c(V=>V.filter(Z=>Z.id!==B))},P=(B,V)=>{c(Z=>Z.map(ee=>ee.id===B?{...ee,quantity:Math.max(1,ee.quantity+V)}:ee))},J=()=>new Promise(B=>{const V=document.createElement("script");V.src="https://checkout.razorpay.com/v1/checkout.js",V.onload=()=>B(!0),V.onerror=()=>B(!1),document.body.appendChild(V)}),pe=async B=>{if(!await J()){Ee("Razorpay SDK failed to load. Are you online?","error");return}const Z=b.reduce((Ce,Me)=>Ce+Me.price*Me.quantity,0),ee=B&&B.customerDetails?B.customerDetails:B,se=B?.paymentMode||"prepaid",yi=typeof B?.amountToPay=="number"?B.amountToPay:Z,Wi=typeof B?.totalAmount=="number"?B.totalAmount:Z,Y=typeof B?.balanceDue=="number"?B.balanceDue:se==="cod"?Math.max(0,Wi-yi):0;localStorage.setItem("temp_cart",JSON.stringify(b)),localStorage.setItem("temp_user",JSON.stringify({...ee,advancePaid:yi,balanceDue:Y,totalAmount:Wi}));try{const Ce=await fetch(`${wm}/api/payment/order`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({amount:yi,currency:"INR",products:b,userId:Ke?Ke._id:null})}),Me=await Ce.json();if(!Ce.ok){console.error("Payment order creation failed",Me),Ee(Me.message||"Could not create payment order.","error");return}const Ei={key:Q0,amount:Me.amount,currency:Me.currency,name:"Shaa Trading",description:"Wholesale Healthcare Supplies",image:"/image/shaa-logo.png",order_id:Me.id,handler:async function(Ui){const Xa=await fetch(`${wm}/api/payment/verify`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({razorpay_order_id:Ui.razorpay_order_id,razorpay_payment_id:Ui.razorpay_payment_id,razorpay_signature:Ui.razorpay_signature})}),ni=await Xa.json();if(!Xa.ok){console.error("Payment verification failed",ni),Ee(ni.message||"Payment verification failed.","error");return}if(ni.success){try{const qt={userId:Ke?Ke._id:null,razorpayOrderId:ni.order&&ni.order.razorpayOrderId?ni.order.razorpayOrderId:Ui.razorpay_order_id,razorpayPaymentId:Ui.razorpay_payment_id,razorpaySignature:Ui.razorpay_signature,amount:ni.order&&ni.order.amount?ni.order.amount:yi*100,currency:ni.order&&ni.order.currency?ni.order.currency:"INR",paymentMode:se,totalAmount:Wi,advancePaid:yi,balanceDue:Y,products:b,customerName:ee.name,email:ee.email,phone:ee.phone,address:ee.address,status:"Paid"};await fetch(`${Ti}/api/orders/create`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(qt)})}catch(qt){console.error("Failed to save order to DB",qt)}_(Ui.razorpay_payment_id),g(!1),c([]),ye("success")}else Ee("Payment verification failed","error")},prefill:{name:ee.name,email:ee.email,contact:ee.phone},notes:{address:ee.address},theme:{color:"#000000"}};new window.Razorpay(Ei).open()}catch(Ce){console.error("Payment Error:",Ce),Ee("Could not initiate payment. Server error.","error")}},{title:be,description:v,keywords:G,canonical:H,robots:F}=jy(u,p,T,w);return n.jsxs("div",{className:"font-sans text-gray-900 bg-[#fbfbfb] min-h-screen flex flex-col selection:bg-gray-800 selection:text-white",children:[n.jsxs(ic,{children:[n.jsx("title",{children:be}),n.jsx("meta",{name:"description",content:v}),G&&n.jsx("meta",{name:"keywords",content:G}),F&&n.jsx("meta",{name:"robots",content:F}),n.jsx("link",{rel:"canonical",href:H})]}),n.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600&family=Inter:wght@200;300;400;500;600&display=swap');
        .font-serif { font-family: 'Cormorant Garamond', serif; }
        .font-sans { font-family: 'Inter', sans-serif; }
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .animate-fade-in { animation: fade-in 0.6s ease-out forwards; }
        .animate-slide-up { animation: slide-up 0.8s ease-out forwards; }
        .animate-marquee { animation: marquee 20s linear infinite; }
        @keyframes fade-in { from { opacity: 0; } to { opacity: 1; } }
        @keyframes slide-up { from { transform: translate(0, 40px); opacity: 0; } to { transform: translate(0, 0); opacity: 1; } }
        @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        @media print {
          button, .no-print {
            display: none !important;
          }

          body {
            background: white;
          }

          .animate-fade-in {
            box-shadow: none !important;
            border: none !important;
          }

          .text-gray-500 {
            color: #444 !important;
          }
        }
      `}),q&&n.jsx(Z0,{message:q.message,type:q.type,onClose:()=>U(null)}),u==="success"?n.jsx(ey,{navigateTo:ye,showToast:Ee,transactionId:I}):n.jsxs(n.Fragment,{children:[n.jsx($0,{currentPage:u,setCurrentPage:ye,cartCount:b.reduce((B,V)=>B+V.quantity,0),toggleCart:()=>ye("cart"),mobileMenuOpen:j,setMobileMenuOpen:h,setShopFilter:ae,setBrandFilter:Se,searchQuery:He,setSearchQuery:le,user:Ke,handleLogout:Qe}),n.jsxs("main",{className:"flex-grow",children:[u==="home"&&n.jsx(ay,{navigateTo:ye,addToCart:Je,setShopFilter:ae}),u==="shop"&&n.jsx(dy,{navigateTo:ye,addToCart:Je,filter:ue,setFilter:ae,brandFilter:Q,setBrandFilter:Se,searchQuery:He,setSearchQuery:le}),u==="category"&&w&&n.jsx(gy,{category:w,navigateTo:ye,addToCart:Je,brandFilter:Q,setBrandFilter:Se,searchQuery:He,setSearchQuery:le,setShopFilter:ae}),u==="product"&&p&&n.jsx(fy,{product:p,addToCart:Je,navigateTo:ye}),u==="cart"&&n.jsx(iy,{cart:b,updateQuantity:P,removeFromCart:R,checkout:pe,navigateTo:ye}),u==="blog"&&n.jsx(py,{navigateTo:ye}),u==="blog-post"&&T&&n.jsx(my,{post:T,navigateTo:ye}),u==="about"&&n.jsx(xy,{}),u==="contact"&&n.jsx(vy,{showToast:Ee}),u==="privacy"&&n.jsx(hy,{}),u==="terms"&&n.jsx(yy,{}),u==="shipping"&&n.jsx(by,{}),u==="login"&&n.jsx(ly,{navigateTo:ye,setAuthToken:oi,setUser:si,showToast:Ee}),u==="signup"&&n.jsx(sy,{navigateTo:ye,showToast:Ee}),u==="track"&&n.jsx(ry,{navigateTo:ye,showToast:Ee}),u==="orders"&&n.jsx(oy,{token:Ue,user:Ke,showToast:Ee,navigateTo:ye}),u==="admin"&&Ue&&Ke?.isAdmin?n.jsx(uy,{token:Ue,user:Ke,showToast:Ee,navigateTo:ye,handleLogout:Qe}):u==="admin"?n.jsx("div",{className:"min-h-screen flex items-center justify-center bg-gray-50 pt-20",children:n.jsxs("div",{className:"text-center",children:[n.jsx("h1",{className:"text-3xl font-serif text-gray-900 mb-2",children:"Access Denied"}),n.jsx("p",{className:"text-gray-500 mb-6",children:"You do not have permission to access the admin dashboard."}),n.jsx("button",{onClick:()=>ye("home"),className:"px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-800",children:"Back to Home"})]})}):null]}),n.jsx(V0,{setCurrentPage:ye,showToast:Ee}),n.jsx(ty,{isOpen:y,onClose:()=>g(!1),cart:b,updateQuantity:P,removeFromCart:R,checkout:pe}),n.jsxs("div",{className:"fixed bottom-6 left-1/2 -translate-x-1/2 md:left-auto md:-translate-x-0 md:right-4 z-50 flex flex-row md:flex-col gap-3",children:[n.jsxs("a",{href:"tel:+919916726373",className:"group flex items-center gap-3 rounded-full bg-[#ffebe7] text-[#b3271b] px-4 py-3 shadow-2xl shadow-red-200/60 ring-1 ring-red-100 transition transform hover:-translate-y-0.5 hover:bg-[#ffd8d1]","aria-label":"Call Shaa Trading",children:[n.jsx(ys,{size:18,className:"text-[#b3271b] transition group-hover:text-[#8a1f16]"}),n.jsx("span",{className:"text-xs font-semibold uppercase tracking-[0.2em]",children:"Call"})]}),n.jsxs("a",{href:"https://wa.me/919916726373?text=Hi%20Shaa%20Trading%2C%20I%20would%20like%20to%20inquire%20about%20your%20products",target:"_blank",rel:"noreferrer",className:"group flex items-center gap-3 rounded-full bg-[#e6ffed] text-[#1e7f31] px-4 py-3 shadow-2xl shadow-emerald-200/60 ring-1 ring-emerald-100 transition transform hover:-translate-y-0.5 hover:bg-[#d3f7d6]","aria-label":"Chat on WhatsApp",children:[n.jsx(ys,{size:18,className:"text-[#1e7f31] transition group-hover:text-[#125625]"}),n.jsx("span",{className:"text-xs font-semibold uppercase tracking-[0.2em]",children:"WhatsApp"})]})]})]})]})}jh.createRoot(document.getElementById("root")).render(n.jsx(L.StrictMode,{children:n.jsx(Sy,{})}));
