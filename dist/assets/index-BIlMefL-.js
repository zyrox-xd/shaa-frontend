(function(){const d=document.createElement("link").relList;if(d&&d.supports&&d.supports("modulepreload"))return;for(const y of document.querySelectorAll('link[rel="modulepreload"]'))c(y);new MutationObserver(y=>{for(const g of y)if(g.type==="childList")for(const j of g.addedNodes)j.tagName==="LINK"&&j.rel==="modulepreload"&&c(j)}).observe(document,{childList:!0,subtree:!0});function b(y){const g={};return y.integrity&&(g.integrity=y.integrity),y.referrerPolicy&&(g.referrerPolicy=y.referrerPolicy),y.crossOrigin==="use-credentials"?g.credentials="include":y.crossOrigin==="anonymous"?g.credentials="omit":g.credentials="same-origin",g}function c(y){if(y.ep)return;y.ep=!0;const g=b(y);fetch(y.href,g)}})();function Qn(u){return u&&u.__esModule&&Object.prototype.hasOwnProperty.call(u,"default")?u.default:u}var Oo={exports:{}},qn={};var tm;function dp(){if(tm)return qn;tm=1;var u=Symbol.for("react.transitional.element"),d=Symbol.for("react.fragment");function b(c,y,g){var j=null;if(g!==void 0&&(j=""+g),y.key!==void 0&&(j=""+y.key),"key"in y){g={};for(var h in y)h!=="key"&&(g[h]=y[h])}else g=y;return y=g.ref,{$$typeof:u,type:c,key:j,ref:y!==void 0?y:null,props:g}}return qn.Fragment=d,qn.jsx=b,qn.jsxs=b,qn}var im;function gp(){return im||(im=1,Oo.exports=dp()),Oo.exports}var l=gp(),Bo={exports:{}},$={};var am;function mp(){if(am)return $;am=1;var u=Symbol.for("react.transitional.element"),d=Symbol.for("react.portal"),b=Symbol.for("react.fragment"),c=Symbol.for("react.strict_mode"),y=Symbol.for("react.profiler"),g=Symbol.for("react.consumer"),j=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),T=Symbol.for("react.lazy"),S=Symbol.for("react.activity"),w=Symbol.iterator;function B(v){return v===null||typeof v!="object"?null:(v=w&&v[w]||v["@@iterator"],typeof v=="function"?v:null)}var L={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},_=Object.assign,I={};function Q(v,z,D){this.props=v,this.context=z,this.refs=I,this.updater=D||L}Q.prototype.isReactComponent={},Q.prototype.setState=function(v,z){if(typeof v!="object"&&typeof v!="function"&&v!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,v,z,"setState")},Q.prototype.forceUpdate=function(v){this.updater.enqueueForceUpdate(this,v,"forceUpdate")};function je(){}je.prototype=Q.prototype;function fe(v,z,D){this.props=v,this.context=z,this.refs=I,this.updater=D||L}var be=fe.prototype=new je;be.constructor=fe,_(be,Q.prototype),be.isPureReactComponent=!0;var he=Array.isArray;function Ue(){}var ae={H:null,A:null,T:null,S:null},Te=Object.prototype.hasOwnProperty;function lt(v,z,D){var U=D.ref;return{$$typeof:u,type:v,key:z,ref:U!==void 0?U:null,props:D}}function Ct(v,z){return lt(v.type,z,v.props)}function Ne(v){return typeof v=="object"&&v!==null&&v.$$typeof===u}function ce(v){var z={"=":"=0",":":"=2"};return"$"+v.replace(/[=:]/g,function(D){return z[D]})}var ht=/\/+/g;function st(v,z){return typeof v=="object"&&v!==null&&v.key!=null?ce(""+v.key):z.toString(36)}function it(v){switch(v.status){case"fulfilled":return v.value;case"rejected":throw v.reason;default:switch(typeof v.status=="string"?v.then(Ue,Ue):(v.status="pending",v.then(function(z){v.status==="pending"&&(v.status="fulfilled",v.value=z)},function(z){v.status==="pending"&&(v.status="rejected",v.reason=z)})),v.status){case"fulfilled":return v.value;case"rejected":throw v.reason}}throw v}function R(v,z,D,U,V){var W=typeof v;(W==="undefined"||W==="boolean")&&(v=null);var J=!1;if(v===null)J=!0;else switch(W){case"bigint":case"string":case"number":J=!0;break;case"object":switch(v.$$typeof){case u:case d:J=!0;break;case T:return J=v._init,R(J(v._payload),z,D,U,V)}}if(J)return V=V(v),J=U===""?"."+st(v,0):U,he(V)?(D="",J!=null&&(D=J.replace(ht,"$&/")+"/"),R(V,z,D,"",function(Fe){return Fe})):V!=null&&(Ne(V)&&(V=Ct(V,D+(V.key==null||v&&v.key===V.key?"":(""+V.key).replace(ht,"$&/")+"/")+J)),z.push(V)),1;J=0;var We=U===""?".":U+":";if(he(v))for(var ue=0;ue<v.length;ue++)U=v[ue],W=We+st(U,ue),J+=R(U,z,D,W,V);else if(ue=B(v),typeof ue=="function")for(v=ue.call(v),ue=0;!(U=v.next()).done;)U=U.value,W=We+st(U,ue++),J+=R(U,z,D,W,V);else if(W==="object"){if(typeof v.then=="function")return R(it(v),z,D,U,V);throw z=String(v),Error("Objects are not valid as a React child (found: "+(z==="[object Object]"?"object with keys {"+Object.keys(v).join(", ")+"}":z)+"). If you meant to render a collection of children, use an array instead.")}return J}function H(v,z,D){if(v==null)return v;var U=[],V=0;return R(v,U,"","",function(W){return z.call(D,W,V++)}),U}function X(v){if(v._status===-1){var z=v._result;z=z(),z.then(function(D){(v._status===0||v._status===-1)&&(v._status=1,v._result=D)},function(D){(v._status===0||v._status===-1)&&(v._status=2,v._result=D)}),v._status===-1&&(v._status=0,v._result=z)}if(v._status===1)return v._result.default;throw v._result}var pe=typeof reportError=="function"?reportError:function(v){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var z=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof v=="object"&&v!==null&&typeof v.message=="string"?String(v.message):String(v),error:v});if(!window.dispatchEvent(z))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",v);return}console.error(v)},de={map:H,forEach:function(v,z,D){H(v,function(){z.apply(this,arguments)},D)},count:function(v){var z=0;return H(v,function(){z++}),z},toArray:function(v){return H(v,function(z){return z})||[]},only:function(v){if(!Ne(v))throw Error("React.Children.only expected to receive a single React element child.");return v}};return $.Activity=S,$.Children=de,$.Component=Q,$.Fragment=b,$.Profiler=y,$.PureComponent=fe,$.StrictMode=c,$.Suspense=f,$.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=ae,$.__COMPILER_RUNTIME={__proto__:null,c:function(v){return ae.H.useMemoCache(v)}},$.cache=function(v){return function(){return v.apply(null,arguments)}},$.cacheSignal=function(){return null},$.cloneElement=function(v,z,D){if(v==null)throw Error("The argument must be a React element, but you passed "+v+".");var U=_({},v.props),V=v.key;if(z!=null)for(W in z.key!==void 0&&(V=""+z.key),z)!Te.call(z,W)||W==="key"||W==="__self"||W==="__source"||W==="ref"&&z.ref===void 0||(U[W]=z[W]);var W=arguments.length-2;if(W===1)U.children=D;else if(1<W){for(var J=Array(W),We=0;We<W;We++)J[We]=arguments[We+2];U.children=J}return lt(v.type,V,U)},$.createContext=function(v){return v={$$typeof:j,_currentValue:v,_currentValue2:v,_threadCount:0,Provider:null,Consumer:null},v.Provider=v,v.Consumer={$$typeof:g,_context:v},v},$.createElement=function(v,z,D){var U,V={},W=null;if(z!=null)for(U in z.key!==void 0&&(W=""+z.key),z)Te.call(z,U)&&U!=="key"&&U!=="__self"&&U!=="__source"&&(V[U]=z[U]);var J=arguments.length-2;if(J===1)V.children=D;else if(1<J){for(var We=Array(J),ue=0;ue<J;ue++)We[ue]=arguments[ue+2];V.children=We}if(v&&v.defaultProps)for(U in J=v.defaultProps,J)V[U]===void 0&&(V[U]=J[U]);return lt(v,W,V)},$.createRef=function(){return{current:null}},$.forwardRef=function(v){return{$$typeof:h,render:v}},$.isValidElement=Ne,$.lazy=function(v){return{$$typeof:T,_payload:{_status:-1,_result:v},_init:X}},$.memo=function(v,z){return{$$typeof:m,type:v,compare:z===void 0?null:z}},$.startTransition=function(v){var z=ae.T,D={};ae.T=D;try{var U=v(),V=ae.S;V!==null&&V(D,U),typeof U=="object"&&U!==null&&typeof U.then=="function"&&U.then(Ue,pe)}catch(W){pe(W)}finally{z!==null&&D.types!==null&&(z.types=D.types),ae.T=z}},$.unstable_useCacheRefresh=function(){return ae.H.useCacheRefresh()},$.use=function(v){return ae.H.use(v)},$.useActionState=function(v,z,D){return ae.H.useActionState(v,z,D)},$.useCallback=function(v,z){return ae.H.useCallback(v,z)},$.useContext=function(v){return ae.H.useContext(v)},$.useDebugValue=function(){},$.useDeferredValue=function(v,z){return ae.H.useDeferredValue(v,z)},$.useEffect=function(v,z){return ae.H.useEffect(v,z)},$.useEffectEvent=function(v){return ae.H.useEffectEvent(v)},$.useId=function(){return ae.H.useId()},$.useImperativeHandle=function(v,z,D){return ae.H.useImperativeHandle(v,z,D)},$.useInsertionEffect=function(v,z){return ae.H.useInsertionEffect(v,z)},$.useLayoutEffect=function(v,z){return ae.H.useLayoutEffect(v,z)},$.useMemo=function(v,z){return ae.H.useMemo(v,z)},$.useOptimistic=function(v,z){return ae.H.useOptimistic(v,z)},$.useReducer=function(v,z,D){return ae.H.useReducer(v,z,D)},$.useRef=function(v){return ae.H.useRef(v)},$.useState=function(v){return ae.H.useState(v)},$.useSyncExternalStore=function(v,z,D){return ae.H.useSyncExternalStore(v,z,D)},$.useTransition=function(){return ae.H.useTransition()},$.version="19.2.0",$}var nm;function hs(){return nm||(nm=1,Bo.exports=mp()),Bo.exports}var q=hs();const Vn=Qn(q);var Lo={exports:{}},_n={},Uo={exports:{}},Ho={};var lm;function fp(){return lm||(lm=1,(function(u){function d(R,H){var X=R.length;R.push(H);e:for(;0<X;){var pe=X-1>>>1,de=R[pe];if(0<y(de,H))R[pe]=H,R[X]=de,X=pe;else break e}}function b(R){return R.length===0?null:R[0]}function c(R){if(R.length===0)return null;var H=R[0],X=R.pop();if(X!==H){R[0]=X;e:for(var pe=0,de=R.length,v=de>>>1;pe<v;){var z=2*(pe+1)-1,D=R[z],U=z+1,V=R[U];if(0>y(D,X))U<de&&0>y(V,D)?(R[pe]=V,R[U]=X,pe=U):(R[pe]=D,R[z]=X,pe=z);else if(U<de&&0>y(V,X))R[pe]=V,R[U]=X,pe=U;else break e}}return H}function y(R,H){var X=R.sortIndex-H.sortIndex;return X!==0?X:R.id-H.id}if(u.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var g=performance;u.unstable_now=function(){return g.now()}}else{var j=Date,h=j.now();u.unstable_now=function(){return j.now()-h}}var f=[],m=[],T=1,S=null,w=3,B=!1,L=!1,_=!1,I=!1,Q=typeof setTimeout=="function"?setTimeout:null,je=typeof clearTimeout=="function"?clearTimeout:null,fe=typeof setImmediate<"u"?setImmediate:null;function be(R){for(var H=b(m);H!==null;){if(H.callback===null)c(m);else if(H.startTime<=R)c(m),H.sortIndex=H.expirationTime,d(f,H);else break;H=b(m)}}function he(R){if(_=!1,be(R),!L)if(b(f)!==null)L=!0,Ue||(Ue=!0,ce());else{var H=b(m);H!==null&&it(he,H.startTime-R)}}var Ue=!1,ae=-1,Te=5,lt=-1;function Ct(){return I?!0:!(u.unstable_now()-lt<Te)}function Ne(){if(I=!1,Ue){var R=u.unstable_now();lt=R;var H=!0;try{e:{L=!1,_&&(_=!1,je(ae),ae=-1),B=!0;var X=w;try{t:{for(be(R),S=b(f);S!==null&&!(S.expirationTime>R&&Ct());){var pe=S.callback;if(typeof pe=="function"){S.callback=null,w=S.priorityLevel;var de=pe(S.expirationTime<=R);if(R=u.unstable_now(),typeof de=="function"){S.callback=de,be(R),H=!0;break t}S===b(f)&&c(f),be(R)}else c(f);S=b(f)}if(S!==null)H=!0;else{var v=b(m);v!==null&&it(he,v.startTime-R),H=!1}}break e}finally{S=null,w=X,B=!1}H=void 0}}finally{H?ce():Ue=!1}}}var ce;if(typeof fe=="function")ce=function(){fe(Ne)};else if(typeof MessageChannel<"u"){var ht=new MessageChannel,st=ht.port2;ht.port1.onmessage=Ne,ce=function(){st.postMessage(null)}}else ce=function(){Q(Ne,0)};function it(R,H){ae=Q(function(){R(u.unstable_now())},H)}u.unstable_IdlePriority=5,u.unstable_ImmediatePriority=1,u.unstable_LowPriority=4,u.unstable_NormalPriority=3,u.unstable_Profiling=null,u.unstable_UserBlockingPriority=2,u.unstable_cancelCallback=function(R){R.callback=null},u.unstable_forceFrameRate=function(R){0>R||125<R?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Te=0<R?Math.floor(1e3/R):5},u.unstable_getCurrentPriorityLevel=function(){return w},u.unstable_next=function(R){switch(w){case 1:case 2:case 3:var H=3;break;default:H=w}var X=w;w=H;try{return R()}finally{w=X}},u.unstable_requestPaint=function(){I=!0},u.unstable_runWithPriority=function(R,H){switch(R){case 1:case 2:case 3:case 4:case 5:break;default:R=3}var X=w;w=R;try{return H()}finally{w=X}},u.unstable_scheduleCallback=function(R,H,X){var pe=u.unstable_now();switch(typeof X=="object"&&X!==null?(X=X.delay,X=typeof X=="number"&&0<X?pe+X:pe):X=pe,R){case 1:var de=-1;break;case 2:de=250;break;case 5:de=1073741823;break;case 4:de=1e4;break;default:de=5e3}return de=X+de,R={id:T++,callback:H,priorityLevel:R,startTime:X,expirationTime:de,sortIndex:-1},X>pe?(R.sortIndex=X,d(m,R),b(f)===null&&R===b(m)&&(_?(je(ae),ae=-1):_=!0,it(he,X-pe))):(R.sortIndex=de,d(f,R),L||B||(L=!0,Ue||(Ue=!0,ce()))),R},u.unstable_shouldYield=Ct,u.unstable_wrapCallback=function(R){var H=w;return function(){var X=w;w=H;try{return R.apply(this,arguments)}finally{w=X}}}})(Ho)),Ho}var sm;function hp(){return sm||(sm=1,Uo.exports=fp()),Uo.exports}var qo={exports:{}},tt={};var rm;function pp(){if(rm)return tt;rm=1;var u=hs();function d(f){var m="https://react.dev/errors/"+f;if(1<arguments.length){m+="?args[]="+encodeURIComponent(arguments[1]);for(var T=2;T<arguments.length;T++)m+="&args[]="+encodeURIComponent(arguments[T])}return"Minified React error #"+f+"; visit "+m+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function b(){}var c={d:{f:b,r:function(){throw Error(d(522))},D:b,C:b,L:b,m:b,X:b,S:b,M:b},p:0,findDOMNode:null},y=Symbol.for("react.portal");function g(f,m,T){var S=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:y,key:S==null?null:""+S,children:f,containerInfo:m,implementation:T}}var j=u.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(f,m){if(f==="font")return"";if(typeof m=="string")return m==="use-credentials"?m:""}return tt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=c,tt.createPortal=function(f,m){var T=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!m||m.nodeType!==1&&m.nodeType!==9&&m.nodeType!==11)throw Error(d(299));return g(f,m,null,T)},tt.flushSync=function(f){var m=j.T,T=c.p;try{if(j.T=null,c.p=2,f)return f()}finally{j.T=m,c.p=T,c.d.f()}},tt.preconnect=function(f,m){typeof f=="string"&&(m?(m=m.crossOrigin,m=typeof m=="string"?m==="use-credentials"?m:"":void 0):m=null,c.d.C(f,m))},tt.prefetchDNS=function(f){typeof f=="string"&&c.d.D(f)},tt.preinit=function(f,m){if(typeof f=="string"&&m&&typeof m.as=="string"){var T=m.as,S=h(T,m.crossOrigin),w=typeof m.integrity=="string"?m.integrity:void 0,B=typeof m.fetchPriority=="string"?m.fetchPriority:void 0;T==="style"?c.d.S(f,typeof m.precedence=="string"?m.precedence:void 0,{crossOrigin:S,integrity:w,fetchPriority:B}):T==="script"&&c.d.X(f,{crossOrigin:S,integrity:w,fetchPriority:B,nonce:typeof m.nonce=="string"?m.nonce:void 0})}},tt.preinitModule=function(f,m){if(typeof f=="string")if(typeof m=="object"&&m!==null){if(m.as==null||m.as==="script"){var T=h(m.as,m.crossOrigin);c.d.M(f,{crossOrigin:T,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0})}}else m==null&&c.d.M(f)},tt.preload=function(f,m){if(typeof f=="string"&&typeof m=="object"&&m!==null&&typeof m.as=="string"){var T=m.as,S=h(T,m.crossOrigin);c.d.L(f,T,{crossOrigin:S,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,type:typeof m.type=="string"?m.type:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0,referrerPolicy:typeof m.referrerPolicy=="string"?m.referrerPolicy:void 0,imageSrcSet:typeof m.imageSrcSet=="string"?m.imageSrcSet:void 0,imageSizes:typeof m.imageSizes=="string"?m.imageSizes:void 0,media:typeof m.media=="string"?m.media:void 0})}},tt.preloadModule=function(f,m){if(typeof f=="string")if(m){var T=h(m.as,m.crossOrigin);c.d.m(f,{as:typeof m.as=="string"&&m.as!=="script"?m.as:void 0,crossOrigin:T,integrity:typeof m.integrity=="string"?m.integrity:void 0})}else c.d.m(f)},tt.requestFormReset=function(f){c.d.r(f)},tt.unstable_batchedUpdates=function(f,m){return f(m)},tt.useFormState=function(f,m,T){return j.H.useFormState(f,m,T)},tt.useFormStatus=function(){return j.H.useHostTransitionStatus()},tt.version="19.2.0",tt}var om;function yp(){if(om)return qo.exports;om=1;function u(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(u)}catch(d){console.error(d)}}return u(),qo.exports=pp(),qo.exports}var cm;function bp(){if(cm)return _n;cm=1;var u=hp(),d=hs(),b=yp();function c(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var i=2;i<arguments.length;i++)t+="&args[]="+encodeURIComponent(arguments[i])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function y(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function g(e){var t=e,i=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(i=t.return),e=t.return;while(e)}return t.tag===3?i:null}function j(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function h(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function f(e){if(g(e)!==e)throw Error(c(188))}function m(e){var t=e.alternate;if(!t){if(t=g(e),t===null)throw Error(c(188));return t!==e?null:e}for(var i=e,a=t;;){var n=i.return;if(n===null)break;var s=n.alternate;if(s===null){if(a=n.return,a!==null){i=a;continue}break}if(n.child===s.child){for(s=n.child;s;){if(s===i)return f(n),e;if(s===a)return f(n),t;s=s.sibling}throw Error(c(188))}if(i.return!==a.return)i=n,a=s;else{for(var r=!1,o=n.child;o;){if(o===i){r=!0,i=n,a=s;break}if(o===a){r=!0,a=n,i=s;break}o=o.sibling}if(!r){for(o=s.child;o;){if(o===i){r=!0,i=s,a=n;break}if(o===a){r=!0,a=s,i=n;break}o=o.sibling}if(!r)throw Error(c(189))}}if(i.alternate!==a)throw Error(c(190))}if(i.tag!==3)throw Error(c(188));return i.stateNode.current===i?e:t}function T(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=T(e),t!==null)return t;e=e.sibling}return null}var S=Object.assign,w=Symbol.for("react.element"),B=Symbol.for("react.transitional.element"),L=Symbol.for("react.portal"),_=Symbol.for("react.fragment"),I=Symbol.for("react.strict_mode"),Q=Symbol.for("react.profiler"),je=Symbol.for("react.consumer"),fe=Symbol.for("react.context"),be=Symbol.for("react.forward_ref"),he=Symbol.for("react.suspense"),Ue=Symbol.for("react.suspense_list"),ae=Symbol.for("react.memo"),Te=Symbol.for("react.lazy"),lt=Symbol.for("react.activity"),Ct=Symbol.for("react.memo_cache_sentinel"),Ne=Symbol.iterator;function ce(e){return e===null||typeof e!="object"?null:(e=Ne&&e[Ne]||e["@@iterator"],typeof e=="function"?e:null)}var ht=Symbol.for("react.client.reference");function st(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===ht?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case _:return"Fragment";case Q:return"Profiler";case I:return"StrictMode";case he:return"Suspense";case Ue:return"SuspenseList";case lt:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case L:return"Portal";case fe:return e.displayName||"Context";case je:return(e._context.displayName||"Context")+".Consumer";case be:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ae:return t=e.displayName||null,t!==null?t:st(e.type)||"Memo";case Te:t=e._payload,e=e._init;try{return st(e(t))}catch{}}return null}var it=Array.isArray,R=d.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,H=b.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,X={pending:!1,data:null,method:null,action:null},pe=[],de=-1;function v(e){return{current:e}}function z(e){0>de||(e.current=pe[de],pe[de]=null,de--)}function D(e,t){de++,pe[de]=e.current,e.current=t}var U=v(null),V=v(null),W=v(null),J=v(null);function We(e,t){switch(D(W,t),D(V,e),D(U,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?wg(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=wg(t),e=Ag(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}z(U),D(U,e)}function ue(){z(U),z(V),z(W)}function Fe(e){e.memoizedState!==null&&D(J,e);var t=U.current,i=Ag(t,e.type);t!==i&&(D(V,e),D(U,i))}function Tt(e){V.current===e&&(z(U),z(V)),J.current===e&&(z(J),Bn._currentValue=X)}var Y,Pe;function at(e){if(Y===void 0)try{throw Error()}catch(i){var t=i.stack.trim().match(/\n( *(at )?)/);Y=t&&t[1]||"",Pe=-1<i.stack.indexOf(`
    at`)?" (<anonymous>)":-1<i.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Y+e+Pe}var Vt=!1;function Ht(e,t){if(!e||Vt)return"";Vt=!0;var i=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var a={DetermineComponentFrameRoot:function(){try{if(t){var O=function(){throw Error()};if(Object.defineProperty(O.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(O,[])}catch(E){var C=E}Reflect.construct(e,[],O)}else{try{O.call()}catch(E){C=E}e.call(O.prototype)}}else{try{throw Error()}catch(E){C=E}(O=e())&&typeof O.catch=="function"&&O.catch(function(){})}}catch(E){if(E&&C&&typeof E.stack=="string")return[E.stack,C.stack]}return[null,null]}};a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var n=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name");n&&n.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var s=a.DetermineComponentFrameRoot(),r=s[0],o=s[1];if(r&&o){var p=r.split(`
`),N=o.split(`
`);for(n=a=0;a<p.length&&!p[a].includes("DetermineComponentFrameRoot");)a++;for(;n<N.length&&!N[n].includes("DetermineComponentFrameRoot");)n++;if(a===p.length||n===N.length)for(a=p.length-1,n=N.length-1;1<=a&&0<=n&&p[a]!==N[n];)n--;for(;1<=a&&0<=n;a--,n--)if(p[a]!==N[n]){if(a!==1||n!==1)do if(a--,n--,0>n||p[a]!==N[n]){var M=`
`+p[a].replace(" at new "," at ");return e.displayName&&M.includes("<anonymous>")&&(M=M.replace("<anonymous>",e.displayName)),M}while(1<=a&&0<=n);break}}}finally{Vt=!1,Error.prepareStackTrace=i}return(i=e?e.displayName||e.name:"")?at(i):""}function bs(e,t){switch(e.tag){case 26:case 27:case 5:return at(e.type);case 16:return at("Lazy");case 13:return e.child!==t&&t!==null?at("Suspense Fallback"):at("Suspense");case 19:return at("SuspenseList");case 0:case 15:return Ht(e.type,!1);case 11:return Ht(e.type.render,!1);case 1:return Ht(e.type,!0);case 31:return at("Activity");default:return""}}function tc(e){try{var t="",i=null;do t+=bs(e,i),i=e,e=e.return;while(e);return t}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}var xs=Object.prototype.hasOwnProperty,vs=u.unstable_scheduleCallback,js=u.unstable_cancelCallback,Im=u.unstable_shouldYield,Pm=u.unstable_requestPaint,pt=u.unstable_now,Vm=u.unstable_getCurrentPriorityLevel,ic=u.unstable_ImmediatePriority,ac=u.unstable_UserBlockingPriority,Kn=u.unstable_NormalPriority,Wm=u.unstable_LowPriority,nc=u.unstable_IdlePriority,Fm=u.log,Ym=u.unstable_setDisableYieldValue,Ya=null,yt=null;function hi(e){if(typeof Fm=="function"&&Ym(e),yt&&typeof yt.setStrictMode=="function")try{yt.setStrictMode(Ya,e)}catch{}}var bt=Math.clz32?Math.clz32:Xm,Qm=Math.log,Km=Math.LN2;function Xm(e){return e>>>=0,e===0?32:31-(Qm(e)/Km|0)|0}var Xn=256,Zn=262144,Jn=4194304;function qi(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function $n(e,t,i){var a=e.pendingLanes;if(a===0)return 0;var n=0,s=e.suspendedLanes,r=e.pingedLanes;e=e.warmLanes;var o=a&134217727;return o!==0?(a=o&~s,a!==0?n=qi(a):(r&=o,r!==0?n=qi(r):i||(i=o&~e,i!==0&&(n=qi(i))))):(o=a&~s,o!==0?n=qi(o):r!==0?n=qi(r):i||(i=a&~e,i!==0&&(n=qi(i)))),n===0?0:t!==0&&t!==n&&(t&s)===0&&(s=n&-n,i=t&-t,s>=i||s===32&&(i&4194048)!==0)?t:n}function Qa(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Zm(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function lc(){var e=Jn;return Jn<<=1,(Jn&62914560)===0&&(Jn=4194304),e}function Ss(e){for(var t=[],i=0;31>i;i++)t.push(e);return t}function Ka(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Jm(e,t,i,a,n,s){var r=e.pendingLanes;e.pendingLanes=i,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=i,e.entangledLanes&=i,e.errorRecoveryDisabledLanes&=i,e.shellSuspendCounter=0;var o=e.entanglements,p=e.expirationTimes,N=e.hiddenUpdates;for(i=r&~i;0<i;){var M=31-bt(i),O=1<<M;o[M]=0,p[M]=-1;var C=N[M];if(C!==null)for(N[M]=null,M=0;M<C.length;M++){var E=C[M];E!==null&&(E.lane&=-536870913)}i&=~O}a!==0&&sc(e,a,0),s!==0&&n===0&&e.tag!==0&&(e.suspendedLanes|=s&~(r&~t))}function sc(e,t,i){e.pendingLanes|=t,e.suspendedLanes&=~t;var a=31-bt(t);e.entangledLanes|=t,e.entanglements[a]=e.entanglements[a]|1073741824|i&261930}function rc(e,t){var i=e.entangledLanes|=t;for(e=e.entanglements;i;){var a=31-bt(i),n=1<<a;n&t|e[a]&t&&(e[a]|=t),i&=~n}}function oc(e,t){var i=t&-t;return i=(i&42)!==0?1:ks(i),(i&(e.suspendedLanes|t))!==0?0:i}function ks(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function ws(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function cc(){var e=H.p;return e!==0?e:(e=window.event,e===void 0?32:Qg(e.type))}function uc(e,t){var i=H.p;try{return H.p=e,t()}finally{H.p=i}}var pi=Math.random().toString(36).slice(2),Xe="__reactFiber$"+pi,rt="__reactProps$"+pi,sa="__reactContainer$"+pi,As="__reactEvents$"+pi,$m="__reactListeners$"+pi,ef="__reactHandles$"+pi,dc="__reactResources$"+pi,Xa="__reactMarker$"+pi;function Ns(e){delete e[Xe],delete e[rt],delete e[As],delete e[$m],delete e[ef]}function ra(e){var t=e[Xe];if(t)return t;for(var i=e.parentNode;i;){if(t=i[sa]||i[Xe]){if(i=t.alternate,t.child!==null||i!==null&&i.child!==null)for(e=Dg(e);e!==null;){if(i=e[Xe])return i;e=Dg(e)}return t}e=i,i=e.parentNode}return null}function oa(e){if(e=e[Xe]||e[sa]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Za(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(c(33))}function ca(e){var t=e[dc];return t||(t=e[dc]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Ye(e){e[Xa]=!0}var gc=new Set,mc={};function _i(e,t){ua(e,t),ua(e+"Capture",t)}function ua(e,t){for(mc[e]=t,e=0;e<t.length;e++)gc.add(t[e])}var tf=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),fc={},hc={};function af(e){return xs.call(hc,e)?!0:xs.call(fc,e)?!1:tf.test(e)?hc[e]=!0:(fc[e]=!0,!1)}function el(e,t,i){if(af(t))if(i===null)e.removeAttribute(t);else{switch(typeof i){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var a=t.toLowerCase().slice(0,5);if(a!=="data-"&&a!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+i)}}function tl(e,t,i){if(i===null)e.removeAttribute(t);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+i)}}function Kt(e,t,i,a){if(a===null)e.removeAttribute(i);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(i);return}e.setAttributeNS(t,i,""+a)}}function Et(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function pc(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function nf(e,t,i){var a=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var n=a.get,s=a.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return n.call(this)},set:function(r){i=""+r,s.call(this,r)}}),Object.defineProperty(e,t,{enumerable:a.enumerable}),{getValue:function(){return i},setValue:function(r){i=""+r},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Cs(e){if(!e._valueTracker){var t=pc(e)?"checked":"value";e._valueTracker=nf(e,t,""+e[t])}}function yc(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var i=t.getValue(),a="";return e&&(a=pc(e)?e.checked?"true":"false":e.value),e=a,e!==i?(t.setValue(e),!0):!1}function il(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var lf=/[\n"\\]/g;function Rt(e){return e.replace(lf,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Ts(e,t,i,a,n,s,r,o){e.name="",r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"?e.type=r:e.removeAttribute("type"),t!=null?r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+Et(t)):e.value!==""+Et(t)&&(e.value=""+Et(t)):r!=="submit"&&r!=="reset"||e.removeAttribute("value"),t!=null?Es(e,r,Et(t)):i!=null?Es(e,r,Et(i)):a!=null&&e.removeAttribute("value"),n==null&&s!=null&&(e.defaultChecked=!!s),n!=null&&(e.checked=n&&typeof n!="function"&&typeof n!="symbol"),o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?e.name=""+Et(o):e.removeAttribute("name")}function bc(e,t,i,a,n,s,r,o){if(s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"&&(e.type=s),t!=null||i!=null){if(!(s!=="submit"&&s!=="reset"||t!=null)){Cs(e);return}i=i!=null?""+Et(i):"",t=t!=null?""+Et(t):i,o||t===e.value||(e.value=t),e.defaultValue=t}a=a??n,a=typeof a!="function"&&typeof a!="symbol"&&!!a,e.checked=o?e.checked:!!a,e.defaultChecked=!!a,r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(e.name=r),Cs(e)}function Es(e,t,i){t==="number"&&il(e.ownerDocument)===e||e.defaultValue===""+i||(e.defaultValue=""+i)}function da(e,t,i,a){if(e=e.options,t){t={};for(var n=0;n<i.length;n++)t["$"+i[n]]=!0;for(i=0;i<e.length;i++)n=t.hasOwnProperty("$"+e[i].value),e[i].selected!==n&&(e[i].selected=n),n&&a&&(e[i].defaultSelected=!0)}else{for(i=""+Et(i),t=null,n=0;n<e.length;n++){if(e[n].value===i){e[n].selected=!0,a&&(e[n].defaultSelected=!0);return}t!==null||e[n].disabled||(t=e[n])}t!==null&&(t.selected=!0)}}function xc(e,t,i){if(t!=null&&(t=""+Et(t),t!==e.value&&(e.value=t),i==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=i!=null?""+Et(i):""}function vc(e,t,i,a){if(t==null){if(a!=null){if(i!=null)throw Error(c(92));if(it(a)){if(1<a.length)throw Error(c(93));a=a[0]}i=a}i==null&&(i=""),t=i}i=Et(t),e.defaultValue=i,a=e.textContent,a===i&&a!==""&&a!==null&&(e.value=a),Cs(e)}function ga(e,t){if(t){var i=e.firstChild;if(i&&i===e.lastChild&&i.nodeType===3){i.nodeValue=t;return}}e.textContent=t}var sf=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function jc(e,t,i){var a=t.indexOf("--")===0;i==null||typeof i=="boolean"||i===""?a?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":a?e.setProperty(t,i):typeof i!="number"||i===0||sf.has(t)?t==="float"?e.cssFloat=i:e[t]=(""+i).trim():e[t]=i+"px"}function Sc(e,t,i){if(t!=null&&typeof t!="object")throw Error(c(62));if(e=e.style,i!=null){for(var a in i)!i.hasOwnProperty(a)||t!=null&&t.hasOwnProperty(a)||(a.indexOf("--")===0?e.setProperty(a,""):a==="float"?e.cssFloat="":e[a]="");for(var n in t)a=t[n],t.hasOwnProperty(n)&&i[n]!==a&&jc(e,n,a)}else for(var s in t)t.hasOwnProperty(s)&&jc(e,s,t[s])}function Rs(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var rf=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),of=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function al(e){return of.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Xt(){}var Ms=null;function Ds(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ma=null,fa=null;function kc(e){var t=oa(e);if(t&&(e=t.stateNode)){var i=e[rt]||null;e:switch(e=t.stateNode,t.type){case"input":if(Ts(e,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name),t=i.name,i.type==="radio"&&t!=null){for(i=e;i.parentNode;)i=i.parentNode;for(i=i.querySelectorAll('input[name="'+Rt(""+t)+'"][type="radio"]'),t=0;t<i.length;t++){var a=i[t];if(a!==e&&a.form===e.form){var n=a[rt]||null;if(!n)throw Error(c(90));Ts(a,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name)}}for(t=0;t<i.length;t++)a=i[t],a.form===e.form&&yc(a)}break e;case"textarea":xc(e,i.value,i.defaultValue);break e;case"select":t=i.value,t!=null&&da(e,!!i.multiple,t,!1)}}}var Gs=!1;function wc(e,t,i){if(Gs)return e(t,i);Gs=!0;try{var a=e(t);return a}finally{if(Gs=!1,(ma!==null||fa!==null)&&(Vl(),ma&&(t=ma,e=fa,fa=ma=null,kc(t),e)))for(t=0;t<e.length;t++)kc(e[t])}}function Ja(e,t){var i=e.stateNode;if(i===null)return null;var a=i[rt]||null;if(a===null)return null;i=a[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;break e;default:e=!1}if(e)return null;if(i&&typeof i!="function")throw Error(c(231,t,typeof i));return i}var Zt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),zs=!1;if(Zt)try{var $a={};Object.defineProperty($a,"passive",{get:function(){zs=!0}}),window.addEventListener("test",$a,$a),window.removeEventListener("test",$a,$a)}catch{zs=!1}var yi=null,Os=null,nl=null;function Ac(){if(nl)return nl;var e,t=Os,i=t.length,a,n="value"in yi?yi.value:yi.textContent,s=n.length;for(e=0;e<i&&t[e]===n[e];e++);var r=i-e;for(a=1;a<=r&&t[i-a]===n[s-a];a++);return nl=n.slice(e,1<a?1-a:void 0)}function ll(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function sl(){return!0}function Nc(){return!1}function ot(e){function t(i,a,n,s,r){this._reactName=i,this._targetInst=n,this.type=a,this.nativeEvent=s,this.target=r,this.currentTarget=null;for(var o in e)e.hasOwnProperty(o)&&(i=e[o],this[o]=i?i(s):s[o]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?sl:Nc,this.isPropagationStopped=Nc,this}return S(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var i=this.nativeEvent;i&&(i.preventDefault?i.preventDefault():typeof i.returnValue!="unknown"&&(i.returnValue=!1),this.isDefaultPrevented=sl)},stopPropagation:function(){var i=this.nativeEvent;i&&(i.stopPropagation?i.stopPropagation():typeof i.cancelBubble!="unknown"&&(i.cancelBubble=!0),this.isPropagationStopped=sl)},persist:function(){},isPersistent:sl}),t}var Ii={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},rl=ot(Ii),en=S({},Ii,{view:0,detail:0}),cf=ot(en),Bs,Ls,tn,ol=S({},en,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Hs,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==tn&&(tn&&e.type==="mousemove"?(Bs=e.screenX-tn.screenX,Ls=e.screenY-tn.screenY):Ls=Bs=0,tn=e),Bs)},movementY:function(e){return"movementY"in e?e.movementY:Ls}}),Cc=ot(ol),uf=S({},ol,{dataTransfer:0}),df=ot(uf),gf=S({},en,{relatedTarget:0}),Us=ot(gf),mf=S({},Ii,{animationName:0,elapsedTime:0,pseudoElement:0}),ff=ot(mf),hf=S({},Ii,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),pf=ot(hf),yf=S({},Ii,{data:0}),Tc=ot(yf),bf={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},xf={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},vf={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function jf(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=vf[e])?!!t[e]:!1}function Hs(){return jf}var Sf=S({},en,{key:function(e){if(e.key){var t=bf[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ll(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?xf[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Hs,charCode:function(e){return e.type==="keypress"?ll(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ll(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),kf=ot(Sf),wf=S({},ol,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ec=ot(wf),Af=S({},en,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Hs}),Nf=ot(Af),Cf=S({},Ii,{propertyName:0,elapsedTime:0,pseudoElement:0}),Tf=ot(Cf),Ef=S({},ol,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Rf=ot(Ef),Mf=S({},Ii,{newState:0,oldState:0}),Df=ot(Mf),Gf=[9,13,27,32],qs=Zt&&"CompositionEvent"in window,an=null;Zt&&"documentMode"in document&&(an=document.documentMode);var zf=Zt&&"TextEvent"in window&&!an,Rc=Zt&&(!qs||an&&8<an&&11>=an),Mc=" ",Dc=!1;function Gc(e,t){switch(e){case"keyup":return Gf.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function zc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ha=!1;function Of(e,t){switch(e){case"compositionend":return zc(t);case"keypress":return t.which!==32?null:(Dc=!0,Mc);case"textInput":return e=t.data,e===Mc&&Dc?null:e;default:return null}}function Bf(e,t){if(ha)return e==="compositionend"||!qs&&Gc(e,t)?(e=Ac(),nl=Os=yi=null,ha=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Rc&&t.locale!=="ko"?null:t.data;default:return null}}var Lf={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Oc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Lf[e.type]:t==="textarea"}function Bc(e,t,i,a){ma?fa?fa.push(a):fa=[a]:ma=a,t=Zl(t,"onChange"),0<t.length&&(i=new rl("onChange","change",null,i,a),e.push({event:i,listeners:t}))}var nn=null,ln=null;function Uf(e){bg(e,0)}function cl(e){var t=Za(e);if(yc(t))return e}function Lc(e,t){if(e==="change")return t}var Uc=!1;if(Zt){var _s;if(Zt){var Is="oninput"in document;if(!Is){var Hc=document.createElement("div");Hc.setAttribute("oninput","return;"),Is=typeof Hc.oninput=="function"}_s=Is}else _s=!1;Uc=_s&&(!document.documentMode||9<document.documentMode)}function qc(){nn&&(nn.detachEvent("onpropertychange",_c),ln=nn=null)}function _c(e){if(e.propertyName==="value"&&cl(ln)){var t=[];Bc(t,ln,e,Ds(e)),wc(Uf,t)}}function Hf(e,t,i){e==="focusin"?(qc(),nn=t,ln=i,nn.attachEvent("onpropertychange",_c)):e==="focusout"&&qc()}function qf(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return cl(ln)}function _f(e,t){if(e==="click")return cl(t)}function If(e,t){if(e==="input"||e==="change")return cl(t)}function Pf(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var xt=typeof Object.is=="function"?Object.is:Pf;function sn(e,t){if(xt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var i=Object.keys(e),a=Object.keys(t);if(i.length!==a.length)return!1;for(a=0;a<i.length;a++){var n=i[a];if(!xs.call(t,n)||!xt(e[n],t[n]))return!1}return!0}function Ic(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Pc(e,t){var i=Ic(e);e=0;for(var a;i;){if(i.nodeType===3){if(a=e+i.textContent.length,e<=t&&a>=t)return{node:i,offset:t-e};e=a}e:{for(;i;){if(i.nextSibling){i=i.nextSibling;break e}i=i.parentNode}i=void 0}i=Ic(i)}}function Vc(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Vc(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Wc(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=il(e.document);t instanceof e.HTMLIFrameElement;){try{var i=typeof t.contentWindow.location.href=="string"}catch{i=!1}if(i)e=t.contentWindow;else break;t=il(e.document)}return t}function Ps(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var Vf=Zt&&"documentMode"in document&&11>=document.documentMode,pa=null,Vs=null,rn=null,Ws=!1;function Fc(e,t,i){var a=i.window===i?i.document:i.nodeType===9?i:i.ownerDocument;Ws||pa==null||pa!==il(a)||(a=pa,"selectionStart"in a&&Ps(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),rn&&sn(rn,a)||(rn=a,a=Zl(Vs,"onSelect"),0<a.length&&(t=new rl("onSelect","select",null,t,i),e.push({event:t,listeners:a}),t.target=pa)))}function Pi(e,t){var i={};return i[e.toLowerCase()]=t.toLowerCase(),i["Webkit"+e]="webkit"+t,i["Moz"+e]="moz"+t,i}var ya={animationend:Pi("Animation","AnimationEnd"),animationiteration:Pi("Animation","AnimationIteration"),animationstart:Pi("Animation","AnimationStart"),transitionrun:Pi("Transition","TransitionRun"),transitionstart:Pi("Transition","TransitionStart"),transitioncancel:Pi("Transition","TransitionCancel"),transitionend:Pi("Transition","TransitionEnd")},Fs={},Yc={};Zt&&(Yc=document.createElement("div").style,"AnimationEvent"in window||(delete ya.animationend.animation,delete ya.animationiteration.animation,delete ya.animationstart.animation),"TransitionEvent"in window||delete ya.transitionend.transition);function Vi(e){if(Fs[e])return Fs[e];if(!ya[e])return e;var t=ya[e],i;for(i in t)if(t.hasOwnProperty(i)&&i in Yc)return Fs[e]=t[i];return e}var Qc=Vi("animationend"),Kc=Vi("animationiteration"),Xc=Vi("animationstart"),Wf=Vi("transitionrun"),Ff=Vi("transitionstart"),Yf=Vi("transitioncancel"),Zc=Vi("transitionend"),Jc=new Map,Ys="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Ys.push("scrollEnd");function qt(e,t){Jc.set(e,t),_i(t,[e])}var ul=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Mt=[],ba=0,Qs=0;function dl(){for(var e=ba,t=Qs=ba=0;t<e;){var i=Mt[t];Mt[t++]=null;var a=Mt[t];Mt[t++]=null;var n=Mt[t];Mt[t++]=null;var s=Mt[t];if(Mt[t++]=null,a!==null&&n!==null){var r=a.pending;r===null?n.next=n:(n.next=r.next,r.next=n),a.pending=n}s!==0&&$c(i,n,s)}}function gl(e,t,i,a){Mt[ba++]=e,Mt[ba++]=t,Mt[ba++]=i,Mt[ba++]=a,Qs|=a,e.lanes|=a,e=e.alternate,e!==null&&(e.lanes|=a)}function Ks(e,t,i,a){return gl(e,t,i,a),ml(e)}function Wi(e,t){return gl(e,null,null,t),ml(e)}function $c(e,t,i){e.lanes|=i;var a=e.alternate;a!==null&&(a.lanes|=i);for(var n=!1,s=e.return;s!==null;)s.childLanes|=i,a=s.alternate,a!==null&&(a.childLanes|=i),s.tag===22&&(e=s.stateNode,e===null||e._visibility&1||(n=!0)),e=s,s=s.return;return e.tag===3?(s=e.stateNode,n&&t!==null&&(n=31-bt(i),e=s.hiddenUpdates,a=e[n],a===null?e[n]=[t]:a.push(t),t.lane=i|536870912),s):null}function ml(e){if(50<En)throw En=0,no=null,Error(c(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var xa={};function Qf(e,t,i,a){this.tag=e,this.key=i,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function vt(e,t,i,a){return new Qf(e,t,i,a)}function Xs(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Jt(e,t){var i=e.alternate;return i===null?(i=vt(e.tag,t,e.key,e.mode),i.elementType=e.elementType,i.type=e.type,i.stateNode=e.stateNode,i.alternate=e,e.alternate=i):(i.pendingProps=t,i.type=e.type,i.flags=0,i.subtreeFlags=0,i.deletions=null),i.flags=e.flags&65011712,i.childLanes=e.childLanes,i.lanes=e.lanes,i.child=e.child,i.memoizedProps=e.memoizedProps,i.memoizedState=e.memoizedState,i.updateQueue=e.updateQueue,t=e.dependencies,i.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},i.sibling=e.sibling,i.index=e.index,i.ref=e.ref,i.refCleanup=e.refCleanup,i}function eu(e,t){e.flags&=65011714;var i=e.alternate;return i===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=i.childLanes,e.lanes=i.lanes,e.child=i.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=i.memoizedProps,e.memoizedState=i.memoizedState,e.updateQueue=i.updateQueue,e.type=i.type,t=i.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function fl(e,t,i,a,n,s){var r=0;if(a=e,typeof e=="function")Xs(e)&&(r=1);else if(typeof e=="string")r=$h(e,i,U.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case lt:return e=vt(31,i,t,n),e.elementType=lt,e.lanes=s,e;case _:return Fi(i.children,n,s,t);case I:r=8,n|=24;break;case Q:return e=vt(12,i,t,n|2),e.elementType=Q,e.lanes=s,e;case he:return e=vt(13,i,t,n),e.elementType=he,e.lanes=s,e;case Ue:return e=vt(19,i,t,n),e.elementType=Ue,e.lanes=s,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case fe:r=10;break e;case je:r=9;break e;case be:r=11;break e;case ae:r=14;break e;case Te:r=16,a=null;break e}r=29,i=Error(c(130,e===null?"null":typeof e,"")),a=null}return t=vt(r,i,t,n),t.elementType=e,t.type=a,t.lanes=s,t}function Fi(e,t,i,a){return e=vt(7,e,a,t),e.lanes=i,e}function Zs(e,t,i){return e=vt(6,e,null,t),e.lanes=i,e}function tu(e){var t=vt(18,null,null,0);return t.stateNode=e,t}function Js(e,t,i){return t=vt(4,e.children!==null?e.children:[],e.key,t),t.lanes=i,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var iu=new WeakMap;function Dt(e,t){if(typeof e=="object"&&e!==null){var i=iu.get(e);return i!==void 0?i:(t={value:e,source:t,stack:tc(t)},iu.set(e,t),t)}return{value:e,source:t,stack:tc(t)}}var va=[],ja=0,hl=null,on=0,Gt=[],zt=0,bi=null,Wt=1,Ft="";function $t(e,t){va[ja++]=on,va[ja++]=hl,hl=e,on=t}function au(e,t,i){Gt[zt++]=Wt,Gt[zt++]=Ft,Gt[zt++]=bi,bi=e;var a=Wt;e=Ft;var n=32-bt(a)-1;a&=~(1<<n),i+=1;var s=32-bt(t)+n;if(30<s){var r=n-n%5;s=(a&(1<<r)-1).toString(32),a>>=r,n-=r,Wt=1<<32-bt(t)+n|i<<n|a,Ft=s+e}else Wt=1<<s|i<<n|a,Ft=e}function $s(e){e.return!==null&&($t(e,1),au(e,1,0))}function er(e){for(;e===hl;)hl=va[--ja],va[ja]=null,on=va[--ja],va[ja]=null;for(;e===bi;)bi=Gt[--zt],Gt[zt]=null,Ft=Gt[--zt],Gt[zt]=null,Wt=Gt[--zt],Gt[zt]=null}function nu(e,t){Gt[zt++]=Wt,Gt[zt++]=Ft,Gt[zt++]=bi,Wt=t.id,Ft=t.overflow,bi=e}var Ze=null,Ee=null,oe=!1,xi=null,Ot=!1,tr=Error(c(519));function vi(e){var t=Error(c(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw cn(Dt(t,e)),tr}function lu(e){var t=e.stateNode,i=e.type,a=e.memoizedProps;switch(t[Xe]=e,t[rt]=a,i){case"dialog":le("cancel",t),le("close",t);break;case"iframe":case"object":case"embed":le("load",t);break;case"video":case"audio":for(i=0;i<Mn.length;i++)le(Mn[i],t);break;case"source":le("error",t);break;case"img":case"image":case"link":le("error",t),le("load",t);break;case"details":le("toggle",t);break;case"input":le("invalid",t),bc(t,a.value,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name,!0);break;case"select":le("invalid",t);break;case"textarea":le("invalid",t),vc(t,a.value,a.defaultValue,a.children)}i=a.children,typeof i!="string"&&typeof i!="number"&&typeof i!="bigint"||t.textContent===""+i||a.suppressHydrationWarning===!0||Sg(t.textContent,i)?(a.popover!=null&&(le("beforetoggle",t),le("toggle",t)),a.onScroll!=null&&le("scroll",t),a.onScrollEnd!=null&&le("scrollend",t),a.onClick!=null&&(t.onclick=Xt),t=!0):t=!1,t||vi(e,!0)}function su(e){for(Ze=e.return;Ze;)switch(Ze.tag){case 5:case 31:case 13:Ot=!1;return;case 27:case 3:Ot=!0;return;default:Ze=Ze.return}}function Sa(e){if(e!==Ze)return!1;if(!oe)return su(e),oe=!0,!1;var t=e.tag,i;if((i=t!==3&&t!==27)&&((i=t===5)&&(i=e.type,i=!(i!=="form"&&i!=="button")||vo(e.type,e.memoizedProps)),i=!i),i&&Ee&&vi(e),su(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(317));Ee=Mg(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(317));Ee=Mg(e)}else t===27?(t=Ee,zi(e.type)?(e=Ao,Ao=null,Ee=e):Ee=t):Ee=Ze?Lt(e.stateNode.nextSibling):null;return!0}function Yi(){Ee=Ze=null,oe=!1}function ir(){var e=xi;return e!==null&&(gt===null?gt=e:gt.push.apply(gt,e),xi=null),e}function cn(e){xi===null?xi=[e]:xi.push(e)}var ar=v(null),Qi=null,ei=null;function ji(e,t,i){D(ar,t._currentValue),t._currentValue=i}function ti(e){e._currentValue=ar.current,z(ar)}function nr(e,t,i){for(;e!==null;){var a=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,a!==null&&(a.childLanes|=t)):a!==null&&(a.childLanes&t)!==t&&(a.childLanes|=t),e===i)break;e=e.return}}function lr(e,t,i,a){var n=e.child;for(n!==null&&(n.return=e);n!==null;){var s=n.dependencies;if(s!==null){var r=n.child;s=s.firstContext;e:for(;s!==null;){var o=s;s=n;for(var p=0;p<t.length;p++)if(o.context===t[p]){s.lanes|=i,o=s.alternate,o!==null&&(o.lanes|=i),nr(s.return,i,e),a||(r=null);break e}s=o.next}}else if(n.tag===18){if(r=n.return,r===null)throw Error(c(341));r.lanes|=i,s=r.alternate,s!==null&&(s.lanes|=i),nr(r,i,e),r=null}else r=n.child;if(r!==null)r.return=n;else for(r=n;r!==null;){if(r===e){r=null;break}if(n=r.sibling,n!==null){n.return=r.return,r=n;break}r=r.return}n=r}}function ka(e,t,i,a){e=null;for(var n=t,s=!1;n!==null;){if(!s){if((n.flags&524288)!==0)s=!0;else if((n.flags&262144)!==0)break}if(n.tag===10){var r=n.alternate;if(r===null)throw Error(c(387));if(r=r.memoizedProps,r!==null){var o=n.type;xt(n.pendingProps.value,r.value)||(e!==null?e.push(o):e=[o])}}else if(n===J.current){if(r=n.alternate,r===null)throw Error(c(387));r.memoizedState.memoizedState!==n.memoizedState.memoizedState&&(e!==null?e.push(Bn):e=[Bn])}n=n.return}e!==null&&lr(t,e,i,a),t.flags|=262144}function pl(e){for(e=e.firstContext;e!==null;){if(!xt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Ki(e){Qi=e,ei=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Je(e){return ru(Qi,e)}function yl(e,t){return Qi===null&&Ki(e),ru(e,t)}function ru(e,t){var i=t._currentValue;if(t={context:t,memoizedValue:i,next:null},ei===null){if(e===null)throw Error(c(308));ei=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else ei=ei.next=t;return i}var Kf=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(i,a){e.push(a)}};this.abort=function(){t.aborted=!0,e.forEach(function(i){return i()})}},Xf=u.unstable_scheduleCallback,Zf=u.unstable_NormalPriority,He={$$typeof:fe,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function sr(){return{controller:new Kf,data:new Map,refCount:0}}function un(e){e.refCount--,e.refCount===0&&Xf(Zf,function(){e.controller.abort()})}var dn=null,rr=0,wa=0,Aa=null;function Jf(e,t){if(dn===null){var i=dn=[];rr=0,wa=uo(),Aa={status:"pending",value:void 0,then:function(a){i.push(a)}}}return rr++,t.then(ou,ou),t}function ou(){if(--rr===0&&dn!==null){Aa!==null&&(Aa.status="fulfilled");var e=dn;dn=null,wa=0,Aa=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function $f(e,t){var i=[],a={status:"pending",value:null,reason:null,then:function(n){i.push(n)}};return e.then(function(){a.status="fulfilled",a.value=t;for(var n=0;n<i.length;n++)(0,i[n])(t)},function(n){for(a.status="rejected",a.reason=n,n=0;n<i.length;n++)(0,i[n])(void 0)}),a}var cu=R.S;R.S=function(e,t){Fd=pt(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&Jf(e,t),cu!==null&&cu(e,t)};var Xi=v(null);function or(){var e=Xi.current;return e!==null?e:Ae.pooledCache}function bl(e,t){t===null?D(Xi,Xi.current):D(Xi,t.pool)}function uu(){var e=or();return e===null?null:{parent:He._currentValue,pool:e}}var Na=Error(c(460)),cr=Error(c(474)),xl=Error(c(542)),vl={then:function(){}};function du(e){return e=e.status,e==="fulfilled"||e==="rejected"}function gu(e,t,i){switch(i=e[i],i===void 0?e.push(t):i!==t&&(t.then(Xt,Xt),t=i),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,fu(e),e;default:if(typeof t.status=="string")t.then(Xt,Xt);else{if(e=Ae,e!==null&&100<e.shellSuspendCounter)throw Error(c(482));e=t,e.status="pending",e.then(function(a){if(t.status==="pending"){var n=t;n.status="fulfilled",n.value=a}},function(a){if(t.status==="pending"){var n=t;n.status="rejected",n.reason=a}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,fu(e),e}throw Ji=t,Na}}function Zi(e){try{var t=e._init;return t(e._payload)}catch(i){throw i!==null&&typeof i=="object"&&typeof i.then=="function"?(Ji=i,Na):i}}var Ji=null;function mu(){if(Ji===null)throw Error(c(459));var e=Ji;return Ji=null,e}function fu(e){if(e===Na||e===xl)throw Error(c(483))}var Ca=null,gn=0;function jl(e){var t=gn;return gn+=1,Ca===null&&(Ca=[]),gu(Ca,e,t)}function mn(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Sl(e,t){throw t.$$typeof===w?Error(c(525)):(e=Object.prototype.toString.call(t),Error(c(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function hu(e){function t(k,x){if(e){var A=k.deletions;A===null?(k.deletions=[x],k.flags|=16):A.push(x)}}function i(k,x){if(!e)return null;for(;x!==null;)t(k,x),x=x.sibling;return null}function a(k){for(var x=new Map;k!==null;)k.key!==null?x.set(k.key,k):x.set(k.index,k),k=k.sibling;return x}function n(k,x){return k=Jt(k,x),k.index=0,k.sibling=null,k}function s(k,x,A){return k.index=A,e?(A=k.alternate,A!==null?(A=A.index,A<x?(k.flags|=67108866,x):A):(k.flags|=67108866,x)):(k.flags|=1048576,x)}function r(k){return e&&k.alternate===null&&(k.flags|=67108866),k}function o(k,x,A,G){return x===null||x.tag!==6?(x=Zs(A,k.mode,G),x.return=k,x):(x=n(x,A),x.return=k,x)}function p(k,x,A,G){var K=A.type;return K===_?M(k,x,A.props.children,G,A.key):x!==null&&(x.elementType===K||typeof K=="object"&&K!==null&&K.$$typeof===Te&&Zi(K)===x.type)?(x=n(x,A.props),mn(x,A),x.return=k,x):(x=fl(A.type,A.key,A.props,null,k.mode,G),mn(x,A),x.return=k,x)}function N(k,x,A,G){return x===null||x.tag!==4||x.stateNode.containerInfo!==A.containerInfo||x.stateNode.implementation!==A.implementation?(x=Js(A,k.mode,G),x.return=k,x):(x=n(x,A.children||[]),x.return=k,x)}function M(k,x,A,G,K){return x===null||x.tag!==7?(x=Fi(A,k.mode,G,K),x.return=k,x):(x=n(x,A),x.return=k,x)}function O(k,x,A){if(typeof x=="string"&&x!==""||typeof x=="number"||typeof x=="bigint")return x=Zs(""+x,k.mode,A),x.return=k,x;if(typeof x=="object"&&x!==null){switch(x.$$typeof){case B:return A=fl(x.type,x.key,x.props,null,k.mode,A),mn(A,x),A.return=k,A;case L:return x=Js(x,k.mode,A),x.return=k,x;case Te:return x=Zi(x),O(k,x,A)}if(it(x)||ce(x))return x=Fi(x,k.mode,A,null),x.return=k,x;if(typeof x.then=="function")return O(k,jl(x),A);if(x.$$typeof===fe)return O(k,yl(k,x),A);Sl(k,x)}return null}function C(k,x,A,G){var K=x!==null?x.key:null;if(typeof A=="string"&&A!==""||typeof A=="number"||typeof A=="bigint")return K!==null?null:o(k,x,""+A,G);if(typeof A=="object"&&A!==null){switch(A.$$typeof){case B:return A.key===K?p(k,x,A,G):null;case L:return A.key===K?N(k,x,A,G):null;case Te:return A=Zi(A),C(k,x,A,G)}if(it(A)||ce(A))return K!==null?null:M(k,x,A,G,null);if(typeof A.then=="function")return C(k,x,jl(A),G);if(A.$$typeof===fe)return C(k,x,yl(k,A),G);Sl(k,A)}return null}function E(k,x,A,G,K){if(typeof G=="string"&&G!==""||typeof G=="number"||typeof G=="bigint")return k=k.get(A)||null,o(x,k,""+G,K);if(typeof G=="object"&&G!==null){switch(G.$$typeof){case B:return k=k.get(G.key===null?A:G.key)||null,p(x,k,G,K);case L:return k=k.get(G.key===null?A:G.key)||null,N(x,k,G,K);case Te:return G=Zi(G),E(k,x,A,G,K)}if(it(G)||ce(G))return k=k.get(A)||null,M(x,k,G,K,null);if(typeof G.then=="function")return E(k,x,A,jl(G),K);if(G.$$typeof===fe)return E(k,x,A,yl(x,G),K);Sl(x,G)}return null}function P(k,x,A,G){for(var K=null,ge=null,F=x,ie=x=0,re=null;F!==null&&ie<A.length;ie++){F.index>ie?(re=F,F=null):re=F.sibling;var me=C(k,F,A[ie],G);if(me===null){F===null&&(F=re);break}e&&F&&me.alternate===null&&t(k,F),x=s(me,x,ie),ge===null?K=me:ge.sibling=me,ge=me,F=re}if(ie===A.length)return i(k,F),oe&&$t(k,ie),K;if(F===null){for(;ie<A.length;ie++)F=O(k,A[ie],G),F!==null&&(x=s(F,x,ie),ge===null?K=F:ge.sibling=F,ge=F);return oe&&$t(k,ie),K}for(F=a(F);ie<A.length;ie++)re=E(F,k,ie,A[ie],G),re!==null&&(e&&re.alternate!==null&&F.delete(re.key===null?ie:re.key),x=s(re,x,ie),ge===null?K=re:ge.sibling=re,ge=re);return e&&F.forEach(function(Hi){return t(k,Hi)}),oe&&$t(k,ie),K}function Z(k,x,A,G){if(A==null)throw Error(c(151));for(var K=null,ge=null,F=x,ie=x=0,re=null,me=A.next();F!==null&&!me.done;ie++,me=A.next()){F.index>ie?(re=F,F=null):re=F.sibling;var Hi=C(k,F,me.value,G);if(Hi===null){F===null&&(F=re);break}e&&F&&Hi.alternate===null&&t(k,F),x=s(Hi,x,ie),ge===null?K=Hi:ge.sibling=Hi,ge=Hi,F=re}if(me.done)return i(k,F),oe&&$t(k,ie),K;if(F===null){for(;!me.done;ie++,me=A.next())me=O(k,me.value,G),me!==null&&(x=s(me,x,ie),ge===null?K=me:ge.sibling=me,ge=me);return oe&&$t(k,ie),K}for(F=a(F);!me.done;ie++,me=A.next())me=E(F,k,ie,me.value,G),me!==null&&(e&&me.alternate!==null&&F.delete(me.key===null?ie:me.key),x=s(me,x,ie),ge===null?K=me:ge.sibling=me,ge=me);return e&&F.forEach(function(up){return t(k,up)}),oe&&$t(k,ie),K}function we(k,x,A,G){if(typeof A=="object"&&A!==null&&A.type===_&&A.key===null&&(A=A.props.children),typeof A=="object"&&A!==null){switch(A.$$typeof){case B:e:{for(var K=A.key;x!==null;){if(x.key===K){if(K=A.type,K===_){if(x.tag===7){i(k,x.sibling),G=n(x,A.props.children),G.return=k,k=G;break e}}else if(x.elementType===K||typeof K=="object"&&K!==null&&K.$$typeof===Te&&Zi(K)===x.type){i(k,x.sibling),G=n(x,A.props),mn(G,A),G.return=k,k=G;break e}i(k,x);break}else t(k,x);x=x.sibling}A.type===_?(G=Fi(A.props.children,k.mode,G,A.key),G.return=k,k=G):(G=fl(A.type,A.key,A.props,null,k.mode,G),mn(G,A),G.return=k,k=G)}return r(k);case L:e:{for(K=A.key;x!==null;){if(x.key===K)if(x.tag===4&&x.stateNode.containerInfo===A.containerInfo&&x.stateNode.implementation===A.implementation){i(k,x.sibling),G=n(x,A.children||[]),G.return=k,k=G;break e}else{i(k,x);break}else t(k,x);x=x.sibling}G=Js(A,k.mode,G),G.return=k,k=G}return r(k);case Te:return A=Zi(A),we(k,x,A,G)}if(it(A))return P(k,x,A,G);if(ce(A)){if(K=ce(A),typeof K!="function")throw Error(c(150));return A=K.call(A),Z(k,x,A,G)}if(typeof A.then=="function")return we(k,x,jl(A),G);if(A.$$typeof===fe)return we(k,x,yl(k,A),G);Sl(k,A)}return typeof A=="string"&&A!==""||typeof A=="number"||typeof A=="bigint"?(A=""+A,x!==null&&x.tag===6?(i(k,x.sibling),G=n(x,A),G.return=k,k=G):(i(k,x),G=Zs(A,k.mode,G),G.return=k,k=G),r(k)):i(k,x)}return function(k,x,A,G){try{gn=0;var K=we(k,x,A,G);return Ca=null,K}catch(F){if(F===Na||F===xl)throw F;var ge=vt(29,F,null,k.mode);return ge.lanes=G,ge.return=k,ge}finally{}}}var $i=hu(!0),pu=hu(!1),Si=!1;function ur(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function dr(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function ki(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function wi(e,t,i){var a=e.updateQueue;if(a===null)return null;if(a=a.shared,(ye&2)!==0){var n=a.pending;return n===null?t.next=t:(t.next=n.next,n.next=t),a.pending=t,t=ml(e),$c(e,null,i),t}return gl(e,a,t,i),ml(e)}function fn(e,t,i){if(t=t.updateQueue,t!==null&&(t=t.shared,(i&4194048)!==0)){var a=t.lanes;a&=e.pendingLanes,i|=a,t.lanes=i,rc(e,i)}}function gr(e,t){var i=e.updateQueue,a=e.alternate;if(a!==null&&(a=a.updateQueue,i===a)){var n=null,s=null;if(i=i.firstBaseUpdate,i!==null){do{var r={lane:i.lane,tag:i.tag,payload:i.payload,callback:null,next:null};s===null?n=s=r:s=s.next=r,i=i.next}while(i!==null);s===null?n=s=t:s=s.next=t}else n=s=t;i={baseState:a.baseState,firstBaseUpdate:n,lastBaseUpdate:s,shared:a.shared,callbacks:a.callbacks},e.updateQueue=i;return}e=i.lastBaseUpdate,e===null?i.firstBaseUpdate=t:e.next=t,i.lastBaseUpdate=t}var mr=!1;function hn(){if(mr){var e=Aa;if(e!==null)throw e}}function pn(e,t,i,a){mr=!1;var n=e.updateQueue;Si=!1;var s=n.firstBaseUpdate,r=n.lastBaseUpdate,o=n.shared.pending;if(o!==null){n.shared.pending=null;var p=o,N=p.next;p.next=null,r===null?s=N:r.next=N,r=p;var M=e.alternate;M!==null&&(M=M.updateQueue,o=M.lastBaseUpdate,o!==r&&(o===null?M.firstBaseUpdate=N:o.next=N,M.lastBaseUpdate=p))}if(s!==null){var O=n.baseState;r=0,M=N=p=null,o=s;do{var C=o.lane&-536870913,E=C!==o.lane;if(E?(se&C)===C:(a&C)===C){C!==0&&C===wa&&(mr=!0),M!==null&&(M=M.next={lane:0,tag:o.tag,payload:o.payload,callback:null,next:null});e:{var P=e,Z=o;C=t;var we=i;switch(Z.tag){case 1:if(P=Z.payload,typeof P=="function"){O=P.call(we,O,C);break e}O=P;break e;case 3:P.flags=P.flags&-65537|128;case 0:if(P=Z.payload,C=typeof P=="function"?P.call(we,O,C):P,C==null)break e;O=S({},O,C);break e;case 2:Si=!0}}C=o.callback,C!==null&&(e.flags|=64,E&&(e.flags|=8192),E=n.callbacks,E===null?n.callbacks=[C]:E.push(C))}else E={lane:C,tag:o.tag,payload:o.payload,callback:o.callback,next:null},M===null?(N=M=E,p=O):M=M.next=E,r|=C;if(o=o.next,o===null){if(o=n.shared.pending,o===null)break;E=o,o=E.next,E.next=null,n.lastBaseUpdate=E,n.shared.pending=null}}while(!0);M===null&&(p=O),n.baseState=p,n.firstBaseUpdate=N,n.lastBaseUpdate=M,s===null&&(n.shared.lanes=0),Ei|=r,e.lanes=r,e.memoizedState=O}}function yu(e,t){if(typeof e!="function")throw Error(c(191,e));e.call(t)}function bu(e,t){var i=e.callbacks;if(i!==null)for(e.callbacks=null,e=0;e<i.length;e++)yu(i[e],t)}var Ta=v(null),kl=v(0);function xu(e,t){e=ui,D(kl,e),D(Ta,t),ui=e|t.baseLanes}function fr(){D(kl,ui),D(Ta,Ta.current)}function hr(){ui=kl.current,z(Ta),z(kl)}var jt=v(null),Bt=null;function Ai(e){var t=e.alternate;D(Be,Be.current&1),D(jt,e),Bt===null&&(t===null||Ta.current!==null||t.memoizedState!==null)&&(Bt=e)}function pr(e){D(Be,Be.current),D(jt,e),Bt===null&&(Bt=e)}function vu(e){e.tag===22?(D(Be,Be.current),D(jt,e),Bt===null&&(Bt=e)):Ni()}function Ni(){D(Be,Be.current),D(jt,jt.current)}function St(e){z(jt),Bt===e&&(Bt=null),z(Be)}var Be=v(0);function wl(e){for(var t=e;t!==null;){if(t.tag===13){var i=t.memoizedState;if(i!==null&&(i=i.dehydrated,i===null||ko(i)||wo(i)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ii=0,te=null,Se=null,qe=null,Al=!1,Ea=!1,ea=!1,Nl=0,yn=0,Ra=null,eh=0;function ze(){throw Error(c(321))}function yr(e,t){if(t===null)return!1;for(var i=0;i<t.length&&i<e.length;i++)if(!xt(e[i],t[i]))return!1;return!0}function br(e,t,i,a,n,s){return ii=s,te=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,R.H=e===null||e.memoizedState===null?ad:Gr,ea=!1,s=i(a,n),ea=!1,Ea&&(s=Su(t,i,a,n)),ju(e),s}function ju(e){R.H=vn;var t=Se!==null&&Se.next!==null;if(ii=0,qe=Se=te=null,Al=!1,yn=0,Ra=null,t)throw Error(c(300));e===null||_e||(e=e.dependencies,e!==null&&pl(e)&&(_e=!0))}function Su(e,t,i,a){te=e;var n=0;do{if(Ea&&(Ra=null),yn=0,Ea=!1,25<=n)throw Error(c(301));if(n+=1,qe=Se=null,e.updateQueue!=null){var s=e.updateQueue;s.lastEffect=null,s.events=null,s.stores=null,s.memoCache!=null&&(s.memoCache.index=0)}R.H=nd,s=t(i,a)}while(Ea);return s}function th(){var e=R.H,t=e.useState()[0];return t=typeof t.then=="function"?bn(t):t,e=e.useState()[0],(Se!==null?Se.memoizedState:null)!==e&&(te.flags|=1024),t}function xr(){var e=Nl!==0;return Nl=0,e}function vr(e,t,i){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i}function jr(e){if(Al){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Al=!1}ii=0,qe=Se=te=null,Ea=!1,yn=Nl=0,Ra=null}function nt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return qe===null?te.memoizedState=qe=e:qe=qe.next=e,qe}function Le(){if(Se===null){var e=te.alternate;e=e!==null?e.memoizedState:null}else e=Se.next;var t=qe===null?te.memoizedState:qe.next;if(t!==null)qe=t,Se=e;else{if(e===null)throw te.alternate===null?Error(c(467)):Error(c(310));Se=e,e={memoizedState:Se.memoizedState,baseState:Se.baseState,baseQueue:Se.baseQueue,queue:Se.queue,next:null},qe===null?te.memoizedState=qe=e:qe=qe.next=e}return qe}function Cl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function bn(e){var t=yn;return yn+=1,Ra===null&&(Ra=[]),e=gu(Ra,e,t),t=te,(qe===null?t.memoizedState:qe.next)===null&&(t=t.alternate,R.H=t===null||t.memoizedState===null?ad:Gr),e}function Tl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return bn(e);if(e.$$typeof===fe)return Je(e)}throw Error(c(438,String(e)))}function Sr(e){var t=null,i=te.updateQueue;if(i!==null&&(t=i.memoCache),t==null){var a=te.alternate;a!==null&&(a=a.updateQueue,a!==null&&(a=a.memoCache,a!=null&&(t={data:a.data.map(function(n){return n.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),i===null&&(i=Cl(),te.updateQueue=i),i.memoCache=t,i=t.data[t.index],i===void 0)for(i=t.data[t.index]=Array(e),a=0;a<e;a++)i[a]=Ct;return t.index++,i}function ai(e,t){return typeof t=="function"?t(e):t}function El(e){var t=Le();return kr(t,Se,e)}function kr(e,t,i){var a=e.queue;if(a===null)throw Error(c(311));a.lastRenderedReducer=i;var n=e.baseQueue,s=a.pending;if(s!==null){if(n!==null){var r=n.next;n.next=s.next,s.next=r}t.baseQueue=n=s,a.pending=null}if(s=e.baseState,n===null)e.memoizedState=s;else{t=n.next;var o=r=null,p=null,N=t,M=!1;do{var O=N.lane&-536870913;if(O!==N.lane?(se&O)===O:(ii&O)===O){var C=N.revertLane;if(C===0)p!==null&&(p=p.next={lane:0,revertLane:0,gesture:null,action:N.action,hasEagerState:N.hasEagerState,eagerState:N.eagerState,next:null}),O===wa&&(M=!0);else if((ii&C)===C){N=N.next,C===wa&&(M=!0);continue}else O={lane:0,revertLane:N.revertLane,gesture:null,action:N.action,hasEagerState:N.hasEagerState,eagerState:N.eagerState,next:null},p===null?(o=p=O,r=s):p=p.next=O,te.lanes|=C,Ei|=C;O=N.action,ea&&i(s,O),s=N.hasEagerState?N.eagerState:i(s,O)}else C={lane:O,revertLane:N.revertLane,gesture:N.gesture,action:N.action,hasEagerState:N.hasEagerState,eagerState:N.eagerState,next:null},p===null?(o=p=C,r=s):p=p.next=C,te.lanes|=O,Ei|=O;N=N.next}while(N!==null&&N!==t);if(p===null?r=s:p.next=o,!xt(s,e.memoizedState)&&(_e=!0,M&&(i=Aa,i!==null)))throw i;e.memoizedState=s,e.baseState=r,e.baseQueue=p,a.lastRenderedState=s}return n===null&&(a.lanes=0),[e.memoizedState,a.dispatch]}function wr(e){var t=Le(),i=t.queue;if(i===null)throw Error(c(311));i.lastRenderedReducer=e;var a=i.dispatch,n=i.pending,s=t.memoizedState;if(n!==null){i.pending=null;var r=n=n.next;do s=e(s,r.action),r=r.next;while(r!==n);xt(s,t.memoizedState)||(_e=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),i.lastRenderedState=s}return[s,a]}function ku(e,t,i){var a=te,n=Le(),s=oe;if(s){if(i===void 0)throw Error(c(407));i=i()}else i=t();var r=!xt((Se||n).memoizedState,i);if(r&&(n.memoizedState=i,_e=!0),n=n.queue,Cr(Nu.bind(null,a,n,e),[e]),n.getSnapshot!==t||r||qe!==null&&qe.memoizedState.tag&1){if(a.flags|=2048,Ma(9,{destroy:void 0},Au.bind(null,a,n,i,t),null),Ae===null)throw Error(c(349));s||(ii&127)!==0||wu(a,t,i)}return i}function wu(e,t,i){e.flags|=16384,e={getSnapshot:t,value:i},t=te.updateQueue,t===null?(t=Cl(),te.updateQueue=t,t.stores=[e]):(i=t.stores,i===null?t.stores=[e]:i.push(e))}function Au(e,t,i,a){t.value=i,t.getSnapshot=a,Cu(t)&&Tu(e)}function Nu(e,t,i){return i(function(){Cu(t)&&Tu(e)})}function Cu(e){var t=e.getSnapshot;e=e.value;try{var i=t();return!xt(e,i)}catch{return!0}}function Tu(e){var t=Wi(e,2);t!==null&&mt(t,e,2)}function Ar(e){var t=nt();if(typeof e=="function"){var i=e;if(e=i(),ea){hi(!0);try{i()}finally{hi(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ai,lastRenderedState:e},t}function Eu(e,t,i,a){return e.baseState=i,kr(e,Se,typeof a=="function"?a:ai)}function ih(e,t,i,a,n){if(Dl(e))throw Error(c(485));if(e=t.action,e!==null){var s={payload:n,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(r){s.listeners.push(r)}};R.T!==null?i(!0):s.isTransition=!1,a(s),i=t.pending,i===null?(s.next=t.pending=s,Ru(t,s)):(s.next=i.next,t.pending=i.next=s)}}function Ru(e,t){var i=t.action,a=t.payload,n=e.state;if(t.isTransition){var s=R.T,r={};R.T=r;try{var o=i(n,a),p=R.S;p!==null&&p(r,o),Mu(e,t,o)}catch(N){Nr(e,t,N)}finally{s!==null&&r.types!==null&&(s.types=r.types),R.T=s}}else try{s=i(n,a),Mu(e,t,s)}catch(N){Nr(e,t,N)}}function Mu(e,t,i){i!==null&&typeof i=="object"&&typeof i.then=="function"?i.then(function(a){Du(e,t,a)},function(a){return Nr(e,t,a)}):Du(e,t,i)}function Du(e,t,i){t.status="fulfilled",t.value=i,Gu(t),e.state=i,t=e.pending,t!==null&&(i=t.next,i===t?e.pending=null:(i=i.next,t.next=i,Ru(e,i)))}function Nr(e,t,i){var a=e.pending;if(e.pending=null,a!==null){a=a.next;do t.status="rejected",t.reason=i,Gu(t),t=t.next;while(t!==a)}e.action=null}function Gu(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function zu(e,t){return t}function Ou(e,t){if(oe){var i=Ae.formState;if(i!==null){e:{var a=te;if(oe){if(Ee){t:{for(var n=Ee,s=Ot;n.nodeType!==8;){if(!s){n=null;break t}if(n=Lt(n.nextSibling),n===null){n=null;break t}}s=n.data,n=s==="F!"||s==="F"?n:null}if(n){Ee=Lt(n.nextSibling),a=n.data==="F!";break e}}vi(a)}a=!1}a&&(t=i[0])}}return i=nt(),i.memoizedState=i.baseState=t,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:zu,lastRenderedState:t},i.queue=a,i=ed.bind(null,te,a),a.dispatch=i,a=Ar(!1),s=Dr.bind(null,te,!1,a.queue),a=nt(),n={state:t,dispatch:null,action:e,pending:null},a.queue=n,i=ih.bind(null,te,n,s,i),n.dispatch=i,a.memoizedState=e,[t,i,!1]}function Bu(e){var t=Le();return Lu(t,Se,e)}function Lu(e,t,i){if(t=kr(e,t,zu)[0],e=El(ai)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var a=bn(t)}catch(r){throw r===Na?xl:r}else a=t;t=Le();var n=t.queue,s=n.dispatch;return i!==t.memoizedState&&(te.flags|=2048,Ma(9,{destroy:void 0},ah.bind(null,n,i),null)),[a,s,e]}function ah(e,t){e.action=t}function Uu(e){var t=Le(),i=Se;if(i!==null)return Lu(t,i,e);Le(),t=t.memoizedState,i=Le();var a=i.queue.dispatch;return i.memoizedState=e,[t,a,!1]}function Ma(e,t,i,a){return e={tag:e,create:i,deps:a,inst:t,next:null},t=te.updateQueue,t===null&&(t=Cl(),te.updateQueue=t),i=t.lastEffect,i===null?t.lastEffect=e.next=e:(a=i.next,i.next=e,e.next=a,t.lastEffect=e),e}function Hu(){return Le().memoizedState}function Rl(e,t,i,a){var n=nt();te.flags|=e,n.memoizedState=Ma(1|t,{destroy:void 0},i,a===void 0?null:a)}function Ml(e,t,i,a){var n=Le();a=a===void 0?null:a;var s=n.memoizedState.inst;Se!==null&&a!==null&&yr(a,Se.memoizedState.deps)?n.memoizedState=Ma(t,s,i,a):(te.flags|=e,n.memoizedState=Ma(1|t,s,i,a))}function qu(e,t){Rl(8390656,8,e,t)}function Cr(e,t){Ml(2048,8,e,t)}function nh(e){te.flags|=4;var t=te.updateQueue;if(t===null)t=Cl(),te.updateQueue=t,t.events=[e];else{var i=t.events;i===null?t.events=[e]:i.push(e)}}function _u(e){var t=Le().memoizedState;return nh({ref:t,nextImpl:e}),function(){if((ye&2)!==0)throw Error(c(440));return t.impl.apply(void 0,arguments)}}function Iu(e,t){return Ml(4,2,e,t)}function Pu(e,t){return Ml(4,4,e,t)}function Vu(e,t){if(typeof t=="function"){e=e();var i=t(e);return function(){typeof i=="function"?i():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Wu(e,t,i){i=i!=null?i.concat([e]):null,Ml(4,4,Vu.bind(null,t,e),i)}function Tr(){}function Fu(e,t){var i=Le();t=t===void 0?null:t;var a=i.memoizedState;return t!==null&&yr(t,a[1])?a[0]:(i.memoizedState=[e,t],e)}function Yu(e,t){var i=Le();t=t===void 0?null:t;var a=i.memoizedState;if(t!==null&&yr(t,a[1]))return a[0];if(a=e(),ea){hi(!0);try{e()}finally{hi(!1)}}return i.memoizedState=[a,t],a}function Er(e,t,i){return i===void 0||(ii&1073741824)!==0&&(se&261930)===0?e.memoizedState=t:(e.memoizedState=i,e=Qd(),te.lanes|=e,Ei|=e,i)}function Qu(e,t,i,a){return xt(i,t)?i:Ta.current!==null?(e=Er(e,i,a),xt(e,t)||(_e=!0),e):(ii&42)===0||(ii&1073741824)!==0&&(se&261930)===0?(_e=!0,e.memoizedState=i):(e=Qd(),te.lanes|=e,Ei|=e,t)}function Ku(e,t,i,a,n){var s=H.p;H.p=s!==0&&8>s?s:8;var r=R.T,o={};R.T=o,Dr(e,!1,t,i);try{var p=n(),N=R.S;if(N!==null&&N(o,p),p!==null&&typeof p=="object"&&typeof p.then=="function"){var M=$f(p,a);xn(e,t,M,At(e))}else xn(e,t,a,At(e))}catch(O){xn(e,t,{then:function(){},status:"rejected",reason:O},At())}finally{H.p=s,r!==null&&o.types!==null&&(r.types=o.types),R.T=r}}function lh(){}function Rr(e,t,i,a){if(e.tag!==5)throw Error(c(476));var n=Xu(e).queue;Ku(e,n,t,X,i===null?lh:function(){return Zu(e),i(a)})}function Xu(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:X,baseState:X,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ai,lastRenderedState:X},next:null};var i={};return t.next={memoizedState:i,baseState:i,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ai,lastRenderedState:i},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Zu(e){var t=Xu(e);t.next===null&&(t=e.alternate.memoizedState),xn(e,t.next.queue,{},At())}function Mr(){return Je(Bn)}function Ju(){return Le().memoizedState}function $u(){return Le().memoizedState}function sh(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var i=At();e=ki(i);var a=wi(t,e,i);a!==null&&(mt(a,t,i),fn(a,t,i)),t={cache:sr()},e.payload=t;return}t=t.return}}function rh(e,t,i){var a=At();i={lane:a,revertLane:0,gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null},Dl(e)?td(t,i):(i=Ks(e,t,i,a),i!==null&&(mt(i,e,a),id(i,t,a)))}function ed(e,t,i){var a=At();xn(e,t,i,a)}function xn(e,t,i,a){var n={lane:a,revertLane:0,gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null};if(Dl(e))td(t,n);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var r=t.lastRenderedState,o=s(r,i);if(n.hasEagerState=!0,n.eagerState=o,xt(o,r))return gl(e,t,n,0),Ae===null&&dl(),!1}catch{}finally{}if(i=Ks(e,t,n,a),i!==null)return mt(i,e,a),id(i,t,a),!0}return!1}function Dr(e,t,i,a){if(a={lane:2,revertLane:uo(),gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Dl(e)){if(t)throw Error(c(479))}else t=Ks(e,i,a,2),t!==null&&mt(t,e,2)}function Dl(e){var t=e.alternate;return e===te||t!==null&&t===te}function td(e,t){Ea=Al=!0;var i=e.pending;i===null?t.next=t:(t.next=i.next,i.next=t),e.pending=t}function id(e,t,i){if((i&4194048)!==0){var a=t.lanes;a&=e.pendingLanes,i|=a,t.lanes=i,rc(e,i)}}var vn={readContext:Je,use:Tl,useCallback:ze,useContext:ze,useEffect:ze,useImperativeHandle:ze,useLayoutEffect:ze,useInsertionEffect:ze,useMemo:ze,useReducer:ze,useRef:ze,useState:ze,useDebugValue:ze,useDeferredValue:ze,useTransition:ze,useSyncExternalStore:ze,useId:ze,useHostTransitionStatus:ze,useFormState:ze,useActionState:ze,useOptimistic:ze,useMemoCache:ze,useCacheRefresh:ze};vn.useEffectEvent=ze;var ad={readContext:Je,use:Tl,useCallback:function(e,t){return nt().memoizedState=[e,t===void 0?null:t],e},useContext:Je,useEffect:qu,useImperativeHandle:function(e,t,i){i=i!=null?i.concat([e]):null,Rl(4194308,4,Vu.bind(null,t,e),i)},useLayoutEffect:function(e,t){return Rl(4194308,4,e,t)},useInsertionEffect:function(e,t){Rl(4,2,e,t)},useMemo:function(e,t){var i=nt();t=t===void 0?null:t;var a=e();if(ea){hi(!0);try{e()}finally{hi(!1)}}return i.memoizedState=[a,t],a},useReducer:function(e,t,i){var a=nt();if(i!==void 0){var n=i(t);if(ea){hi(!0);try{i(t)}finally{hi(!1)}}}else n=t;return a.memoizedState=a.baseState=n,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},a.queue=e,e=e.dispatch=rh.bind(null,te,e),[a.memoizedState,e]},useRef:function(e){var t=nt();return e={current:e},t.memoizedState=e},useState:function(e){e=Ar(e);var t=e.queue,i=ed.bind(null,te,t);return t.dispatch=i,[e.memoizedState,i]},useDebugValue:Tr,useDeferredValue:function(e,t){var i=nt();return Er(i,e,t)},useTransition:function(){var e=Ar(!1);return e=Ku.bind(null,te,e.queue,!0,!1),nt().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,i){var a=te,n=nt();if(oe){if(i===void 0)throw Error(c(407));i=i()}else{if(i=t(),Ae===null)throw Error(c(349));(se&127)!==0||wu(a,t,i)}n.memoizedState=i;var s={value:i,getSnapshot:t};return n.queue=s,qu(Nu.bind(null,a,s,e),[e]),a.flags|=2048,Ma(9,{destroy:void 0},Au.bind(null,a,s,i,t),null),i},useId:function(){var e=nt(),t=Ae.identifierPrefix;if(oe){var i=Ft,a=Wt;i=(a&~(1<<32-bt(a)-1)).toString(32)+i,t="_"+t+"R_"+i,i=Nl++,0<i&&(t+="H"+i.toString(32)),t+="_"}else i=eh++,t="_"+t+"r_"+i.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:Mr,useFormState:Ou,useActionState:Ou,useOptimistic:function(e){var t=nt();t.memoizedState=t.baseState=e;var i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=i,t=Dr.bind(null,te,!0,i),i.dispatch=t,[e,t]},useMemoCache:Sr,useCacheRefresh:function(){return nt().memoizedState=sh.bind(null,te)},useEffectEvent:function(e){var t=nt(),i={impl:e};return t.memoizedState=i,function(){if((ye&2)!==0)throw Error(c(440));return i.impl.apply(void 0,arguments)}}},Gr={readContext:Je,use:Tl,useCallback:Fu,useContext:Je,useEffect:Cr,useImperativeHandle:Wu,useInsertionEffect:Iu,useLayoutEffect:Pu,useMemo:Yu,useReducer:El,useRef:Hu,useState:function(){return El(ai)},useDebugValue:Tr,useDeferredValue:function(e,t){var i=Le();return Qu(i,Se.memoizedState,e,t)},useTransition:function(){var e=El(ai)[0],t=Le().memoizedState;return[typeof e=="boolean"?e:bn(e),t]},useSyncExternalStore:ku,useId:Ju,useHostTransitionStatus:Mr,useFormState:Bu,useActionState:Bu,useOptimistic:function(e,t){var i=Le();return Eu(i,Se,e,t)},useMemoCache:Sr,useCacheRefresh:$u};Gr.useEffectEvent=_u;var nd={readContext:Je,use:Tl,useCallback:Fu,useContext:Je,useEffect:Cr,useImperativeHandle:Wu,useInsertionEffect:Iu,useLayoutEffect:Pu,useMemo:Yu,useReducer:wr,useRef:Hu,useState:function(){return wr(ai)},useDebugValue:Tr,useDeferredValue:function(e,t){var i=Le();return Se===null?Er(i,e,t):Qu(i,Se.memoizedState,e,t)},useTransition:function(){var e=wr(ai)[0],t=Le().memoizedState;return[typeof e=="boolean"?e:bn(e),t]},useSyncExternalStore:ku,useId:Ju,useHostTransitionStatus:Mr,useFormState:Uu,useActionState:Uu,useOptimistic:function(e,t){var i=Le();return Se!==null?Eu(i,Se,e,t):(i.baseState=e,[e,i.queue.dispatch])},useMemoCache:Sr,useCacheRefresh:$u};nd.useEffectEvent=_u;function zr(e,t,i,a){t=e.memoizedState,i=i(a,t),i=i==null?t:S({},t,i),e.memoizedState=i,e.lanes===0&&(e.updateQueue.baseState=i)}var Or={enqueueSetState:function(e,t,i){e=e._reactInternals;var a=At(),n=ki(a);n.payload=t,i!=null&&(n.callback=i),t=wi(e,n,a),t!==null&&(mt(t,e,a),fn(t,e,a))},enqueueReplaceState:function(e,t,i){e=e._reactInternals;var a=At(),n=ki(a);n.tag=1,n.payload=t,i!=null&&(n.callback=i),t=wi(e,n,a),t!==null&&(mt(t,e,a),fn(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var i=At(),a=ki(i);a.tag=2,t!=null&&(a.callback=t),t=wi(e,a,i),t!==null&&(mt(t,e,i),fn(t,e,i))}};function ld(e,t,i,a,n,s,r){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(a,s,r):t.prototype&&t.prototype.isPureReactComponent?!sn(i,a)||!sn(n,s):!0}function sd(e,t,i,a){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(i,a),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(i,a),t.state!==e&&Or.enqueueReplaceState(t,t.state,null)}function ta(e,t){var i=t;if("ref"in t){i={};for(var a in t)a!=="ref"&&(i[a]=t[a])}if(e=e.defaultProps){i===t&&(i=S({},i));for(var n in e)i[n]===void 0&&(i[n]=e[n])}return i}function rd(e){ul(e)}function od(e){console.error(e)}function cd(e){ul(e)}function Gl(e,t){try{var i=e.onUncaughtError;i(t.value,{componentStack:t.stack})}catch(a){setTimeout(function(){throw a})}}function ud(e,t,i){try{var a=e.onCaughtError;a(i.value,{componentStack:i.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(n){setTimeout(function(){throw n})}}function Br(e,t,i){return i=ki(i),i.tag=3,i.payload={element:null},i.callback=function(){Gl(e,t)},i}function dd(e){return e=ki(e),e.tag=3,e}function gd(e,t,i,a){var n=i.type.getDerivedStateFromError;if(typeof n=="function"){var s=a.value;e.payload=function(){return n(s)},e.callback=function(){ud(t,i,a)}}var r=i.stateNode;r!==null&&typeof r.componentDidCatch=="function"&&(e.callback=function(){ud(t,i,a),typeof n!="function"&&(Ri===null?Ri=new Set([this]):Ri.add(this));var o=a.stack;this.componentDidCatch(a.value,{componentStack:o!==null?o:""})})}function oh(e,t,i,a,n){if(i.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){if(t=i.alternate,t!==null&&ka(t,i,n,!0),i=jt.current,i!==null){switch(i.tag){case 31:case 13:return Bt===null?Wl():i.alternate===null&&Oe===0&&(Oe=3),i.flags&=-257,i.flags|=65536,i.lanes=n,a===vl?i.flags|=16384:(t=i.updateQueue,t===null?i.updateQueue=new Set([a]):t.add(a),ro(e,a,n)),!1;case 22:return i.flags|=65536,a===vl?i.flags|=16384:(t=i.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([a])},i.updateQueue=t):(i=t.retryQueue,i===null?t.retryQueue=new Set([a]):i.add(a)),ro(e,a,n)),!1}throw Error(c(435,i.tag))}return ro(e,a,n),Wl(),!1}if(oe)return t=jt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=n,a!==tr&&(e=Error(c(422),{cause:a}),cn(Dt(e,i)))):(a!==tr&&(t=Error(c(423),{cause:a}),cn(Dt(t,i))),e=e.current.alternate,e.flags|=65536,n&=-n,e.lanes|=n,a=Dt(a,i),n=Br(e.stateNode,a,n),gr(e,n),Oe!==4&&(Oe=2)),!1;var s=Error(c(520),{cause:a});if(s=Dt(s,i),Tn===null?Tn=[s]:Tn.push(s),Oe!==4&&(Oe=2),t===null)return!0;a=Dt(a,i),i=t;do{switch(i.tag){case 3:return i.flags|=65536,e=n&-n,i.lanes|=e,e=Br(i.stateNode,a,e),gr(i,e),!1;case 1:if(t=i.type,s=i.stateNode,(i.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||s!==null&&typeof s.componentDidCatch=="function"&&(Ri===null||!Ri.has(s))))return i.flags|=65536,n&=-n,i.lanes|=n,n=dd(n),gd(n,e,i,a),gr(i,n),!1}i=i.return}while(i!==null);return!1}var Lr=Error(c(461)),_e=!1;function $e(e,t,i,a){t.child=e===null?pu(t,null,i,a):$i(t,e.child,i,a)}function md(e,t,i,a,n){i=i.render;var s=t.ref;if("ref"in a){var r={};for(var o in a)o!=="ref"&&(r[o]=a[o])}else r=a;return Ki(t),a=br(e,t,i,r,s,n),o=xr(),e!==null&&!_e?(vr(e,t,n),ni(e,t,n)):(oe&&o&&$s(t),t.flags|=1,$e(e,t,a,n),t.child)}function fd(e,t,i,a,n){if(e===null){var s=i.type;return typeof s=="function"&&!Xs(s)&&s.defaultProps===void 0&&i.compare===null?(t.tag=15,t.type=s,hd(e,t,s,a,n)):(e=fl(i.type,null,a,t,t.mode,n),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,!Wr(e,n)){var r=s.memoizedProps;if(i=i.compare,i=i!==null?i:sn,i(r,a)&&e.ref===t.ref)return ni(e,t,n)}return t.flags|=1,e=Jt(s,a),e.ref=t.ref,e.return=t,t.child=e}function hd(e,t,i,a,n){if(e!==null){var s=e.memoizedProps;if(sn(s,a)&&e.ref===t.ref)if(_e=!1,t.pendingProps=a=s,Wr(e,n))(e.flags&131072)!==0&&(_e=!0);else return t.lanes=e.lanes,ni(e,t,n)}return Ur(e,t,i,a,n)}function pd(e,t,i,a){var n=a.children,s=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),a.mode==="hidden"){if((t.flags&128)!==0){if(s=s!==null?s.baseLanes|i:i,e!==null){for(a=t.child=e.child,n=0;a!==null;)n=n|a.lanes|a.childLanes,a=a.sibling;a=n&~s}else a=0,t.child=null;return yd(e,t,s,i,a)}if((i&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&bl(t,s!==null?s.cachePool:null),s!==null?xu(t,s):fr(),vu(t);else return a=t.lanes=536870912,yd(e,t,s!==null?s.baseLanes|i:i,i,a)}else s!==null?(bl(t,s.cachePool),xu(t,s),Ni(),t.memoizedState=null):(e!==null&&bl(t,null),fr(),Ni());return $e(e,t,n,i),t.child}function jn(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function yd(e,t,i,a,n){var s=or();return s=s===null?null:{parent:He._currentValue,pool:s},t.memoizedState={baseLanes:i,cachePool:s},e!==null&&bl(t,null),fr(),vu(t),e!==null&&ka(e,t,a,!0),t.childLanes=n,null}function zl(e,t){return t=Bl({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function bd(e,t,i){return $i(t,e.child,null,i),e=zl(t,t.pendingProps),e.flags|=2,St(t),t.memoizedState=null,e}function ch(e,t,i){var a=t.pendingProps,n=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(oe){if(a.mode==="hidden")return e=zl(t,a),t.lanes=536870912,jn(null,e);if(pr(t),(e=Ee)?(e=Rg(e,Ot),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:bi!==null?{id:Wt,overflow:Ft}:null,retryLane:536870912,hydrationErrors:null},i=tu(e),i.return=t,t.child=i,Ze=t,Ee=null)):e=null,e===null)throw vi(t);return t.lanes=536870912,null}return zl(t,a)}var s=e.memoizedState;if(s!==null){var r=s.dehydrated;if(pr(t),n)if(t.flags&256)t.flags&=-257,t=bd(e,t,i);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(c(558));else if(_e||ka(e,t,i,!1),n=(i&e.childLanes)!==0,_e||n){if(a=Ae,a!==null&&(r=oc(a,i),r!==0&&r!==s.retryLane))throw s.retryLane=r,Wi(e,r),mt(a,e,r),Lr;Wl(),t=bd(e,t,i)}else e=s.treeContext,Ee=Lt(r.nextSibling),Ze=t,oe=!0,xi=null,Ot=!1,e!==null&&nu(t,e),t=zl(t,a),t.flags|=4096;return t}return e=Jt(e.child,{mode:a.mode,children:a.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Ol(e,t){var i=t.ref;if(i===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof i!="function"&&typeof i!="object")throw Error(c(284));(e===null||e.ref!==i)&&(t.flags|=4194816)}}function Ur(e,t,i,a,n){return Ki(t),i=br(e,t,i,a,void 0,n),a=xr(),e!==null&&!_e?(vr(e,t,n),ni(e,t,n)):(oe&&a&&$s(t),t.flags|=1,$e(e,t,i,n),t.child)}function xd(e,t,i,a,n,s){return Ki(t),t.updateQueue=null,i=Su(t,a,i,n),ju(e),a=xr(),e!==null&&!_e?(vr(e,t,s),ni(e,t,s)):(oe&&a&&$s(t),t.flags|=1,$e(e,t,i,s),t.child)}function vd(e,t,i,a,n){if(Ki(t),t.stateNode===null){var s=xa,r=i.contextType;typeof r=="object"&&r!==null&&(s=Je(r)),s=new i(a,s),t.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=Or,t.stateNode=s,s._reactInternals=t,s=t.stateNode,s.props=a,s.state=t.memoizedState,s.refs={},ur(t),r=i.contextType,s.context=typeof r=="object"&&r!==null?Je(r):xa,s.state=t.memoizedState,r=i.getDerivedStateFromProps,typeof r=="function"&&(zr(t,i,r,a),s.state=t.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(r=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),r!==s.state&&Or.enqueueReplaceState(s,s.state,null),pn(t,a,s,n),hn(),s.state=t.memoizedState),typeof s.componentDidMount=="function"&&(t.flags|=4194308),a=!0}else if(e===null){s=t.stateNode;var o=t.memoizedProps,p=ta(i,o);s.props=p;var N=s.context,M=i.contextType;r=xa,typeof M=="object"&&M!==null&&(r=Je(M));var O=i.getDerivedStateFromProps;M=typeof O=="function"||typeof s.getSnapshotBeforeUpdate=="function",o=t.pendingProps!==o,M||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(o||N!==r)&&sd(t,s,a,r),Si=!1;var C=t.memoizedState;s.state=C,pn(t,a,s,n),hn(),N=t.memoizedState,o||C!==N||Si?(typeof O=="function"&&(zr(t,i,O,a),N=t.memoizedState),(p=Si||ld(t,i,p,a,C,N,r))?(M||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=a,t.memoizedState=N),s.props=a,s.state=N,s.context=r,a=p):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),a=!1)}else{s=t.stateNode,dr(e,t),r=t.memoizedProps,M=ta(i,r),s.props=M,O=t.pendingProps,C=s.context,N=i.contextType,p=xa,typeof N=="object"&&N!==null&&(p=Je(N)),o=i.getDerivedStateFromProps,(N=typeof o=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(r!==O||C!==p)&&sd(t,s,a,p),Si=!1,C=t.memoizedState,s.state=C,pn(t,a,s,n),hn();var E=t.memoizedState;r!==O||C!==E||Si||e!==null&&e.dependencies!==null&&pl(e.dependencies)?(typeof o=="function"&&(zr(t,i,o,a),E=t.memoizedState),(M=Si||ld(t,i,M,a,C,E,p)||e!==null&&e.dependencies!==null&&pl(e.dependencies))?(N||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(a,E,p),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(a,E,p)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||r===e.memoizedProps&&C===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||r===e.memoizedProps&&C===e.memoizedState||(t.flags|=1024),t.memoizedProps=a,t.memoizedState=E),s.props=a,s.state=E,s.context=p,a=M):(typeof s.componentDidUpdate!="function"||r===e.memoizedProps&&C===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||r===e.memoizedProps&&C===e.memoizedState||(t.flags|=1024),a=!1)}return s=a,Ol(e,t),a=(t.flags&128)!==0,s||a?(s=t.stateNode,i=a&&typeof i.getDerivedStateFromError!="function"?null:s.render(),t.flags|=1,e!==null&&a?(t.child=$i(t,e.child,null,n),t.child=$i(t,null,i,n)):$e(e,t,i,n),t.memoizedState=s.state,e=t.child):e=ni(e,t,n),e}function jd(e,t,i,a){return Yi(),t.flags|=256,$e(e,t,i,a),t.child}var Hr={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function qr(e){return{baseLanes:e,cachePool:uu()}}function _r(e,t,i){return e=e!==null?e.childLanes&~i:0,t&&(e|=wt),e}function Sd(e,t,i){var a=t.pendingProps,n=!1,s=(t.flags&128)!==0,r;if((r=s)||(r=e!==null&&e.memoizedState===null?!1:(Be.current&2)!==0),r&&(n=!0,t.flags&=-129),r=(t.flags&32)!==0,t.flags&=-33,e===null){if(oe){if(n?Ai(t):Ni(),(e=Ee)?(e=Rg(e,Ot),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:bi!==null?{id:Wt,overflow:Ft}:null,retryLane:536870912,hydrationErrors:null},i=tu(e),i.return=t,t.child=i,Ze=t,Ee=null)):e=null,e===null)throw vi(t);return wo(e)?t.lanes=32:t.lanes=536870912,null}var o=a.children;return a=a.fallback,n?(Ni(),n=t.mode,o=Bl({mode:"hidden",children:o},n),a=Fi(a,n,i,null),o.return=t,a.return=t,o.sibling=a,t.child=o,a=t.child,a.memoizedState=qr(i),a.childLanes=_r(e,r,i),t.memoizedState=Hr,jn(null,a)):(Ai(t),Ir(t,o))}var p=e.memoizedState;if(p!==null&&(o=p.dehydrated,o!==null)){if(s)t.flags&256?(Ai(t),t.flags&=-257,t=Pr(e,t,i)):t.memoizedState!==null?(Ni(),t.child=e.child,t.flags|=128,t=null):(Ni(),o=a.fallback,n=t.mode,a=Bl({mode:"visible",children:a.children},n),o=Fi(o,n,i,null),o.flags|=2,a.return=t,o.return=t,a.sibling=o,t.child=a,$i(t,e.child,null,i),a=t.child,a.memoizedState=qr(i),a.childLanes=_r(e,r,i),t.memoizedState=Hr,t=jn(null,a));else if(Ai(t),wo(o)){if(r=o.nextSibling&&o.nextSibling.dataset,r)var N=r.dgst;r=N,a=Error(c(419)),a.stack="",a.digest=r,cn({value:a,source:null,stack:null}),t=Pr(e,t,i)}else if(_e||ka(e,t,i,!1),r=(i&e.childLanes)!==0,_e||r){if(r=Ae,r!==null&&(a=oc(r,i),a!==0&&a!==p.retryLane))throw p.retryLane=a,Wi(e,a),mt(r,e,a),Lr;ko(o)||Wl(),t=Pr(e,t,i)}else ko(o)?(t.flags|=192,t.child=e.child,t=null):(e=p.treeContext,Ee=Lt(o.nextSibling),Ze=t,oe=!0,xi=null,Ot=!1,e!==null&&nu(t,e),t=Ir(t,a.children),t.flags|=4096);return t}return n?(Ni(),o=a.fallback,n=t.mode,p=e.child,N=p.sibling,a=Jt(p,{mode:"hidden",children:a.children}),a.subtreeFlags=p.subtreeFlags&65011712,N!==null?o=Jt(N,o):(o=Fi(o,n,i,null),o.flags|=2),o.return=t,a.return=t,a.sibling=o,t.child=a,jn(null,a),a=t.child,o=e.child.memoizedState,o===null?o=qr(i):(n=o.cachePool,n!==null?(p=He._currentValue,n=n.parent!==p?{parent:p,pool:p}:n):n=uu(),o={baseLanes:o.baseLanes|i,cachePool:n}),a.memoizedState=o,a.childLanes=_r(e,r,i),t.memoizedState=Hr,jn(e.child,a)):(Ai(t),i=e.child,e=i.sibling,i=Jt(i,{mode:"visible",children:a.children}),i.return=t,i.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=i,t.memoizedState=null,i)}function Ir(e,t){return t=Bl({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Bl(e,t){return e=vt(22,e,null,t),e.lanes=0,e}function Pr(e,t,i){return $i(t,e.child,null,i),e=Ir(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function kd(e,t,i){e.lanes|=t;var a=e.alternate;a!==null&&(a.lanes|=t),nr(e.return,t,i)}function Vr(e,t,i,a,n,s){var r=e.memoizedState;r===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:a,tail:i,tailMode:n,treeForkCount:s}:(r.isBackwards=t,r.rendering=null,r.renderingStartTime=0,r.last=a,r.tail=i,r.tailMode=n,r.treeForkCount=s)}function wd(e,t,i){var a=t.pendingProps,n=a.revealOrder,s=a.tail;a=a.children;var r=Be.current,o=(r&2)!==0;if(o?(r=r&1|2,t.flags|=128):r&=1,D(Be,r),$e(e,t,a,i),a=oe?on:0,!o&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&kd(e,i,t);else if(e.tag===19)kd(e,i,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(n){case"forwards":for(i=t.child,n=null;i!==null;)e=i.alternate,e!==null&&wl(e)===null&&(n=i),i=i.sibling;i=n,i===null?(n=t.child,t.child=null):(n=i.sibling,i.sibling=null),Vr(t,!1,n,i,s,a);break;case"backwards":case"unstable_legacy-backwards":for(i=null,n=t.child,t.child=null;n!==null;){if(e=n.alternate,e!==null&&wl(e)===null){t.child=n;break}e=n.sibling,n.sibling=i,i=n,n=e}Vr(t,!0,i,null,s,a);break;case"together":Vr(t,!1,null,null,void 0,a);break;default:t.memoizedState=null}return t.child}function ni(e,t,i){if(e!==null&&(t.dependencies=e.dependencies),Ei|=t.lanes,(i&t.childLanes)===0)if(e!==null){if(ka(e,t,i,!1),(i&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(c(153));if(t.child!==null){for(e=t.child,i=Jt(e,e.pendingProps),t.child=i,i.return=t;e.sibling!==null;)e=e.sibling,i=i.sibling=Jt(e,e.pendingProps),i.return=t;i.sibling=null}return t.child}function Wr(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&pl(e)))}function uh(e,t,i){switch(t.tag){case 3:We(t,t.stateNode.containerInfo),ji(t,He,e.memoizedState.cache),Yi();break;case 27:case 5:Fe(t);break;case 4:We(t,t.stateNode.containerInfo);break;case 10:ji(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,pr(t),null;break;case 13:var a=t.memoizedState;if(a!==null)return a.dehydrated!==null?(Ai(t),t.flags|=128,null):(i&t.child.childLanes)!==0?Sd(e,t,i):(Ai(t),e=ni(e,t,i),e!==null?e.sibling:null);Ai(t);break;case 19:var n=(e.flags&128)!==0;if(a=(i&t.childLanes)!==0,a||(ka(e,t,i,!1),a=(i&t.childLanes)!==0),n){if(a)return wd(e,t,i);t.flags|=128}if(n=t.memoizedState,n!==null&&(n.rendering=null,n.tail=null,n.lastEffect=null),D(Be,Be.current),a)break;return null;case 22:return t.lanes=0,pd(e,t,i,t.pendingProps);case 24:ji(t,He,e.memoizedState.cache)}return ni(e,t,i)}function Ad(e,t,i){if(e!==null)if(e.memoizedProps!==t.pendingProps)_e=!0;else{if(!Wr(e,i)&&(t.flags&128)===0)return _e=!1,uh(e,t,i);_e=(e.flags&131072)!==0}else _e=!1,oe&&(t.flags&1048576)!==0&&au(t,on,t.index);switch(t.lanes=0,t.tag){case 16:e:{var a=t.pendingProps;if(e=Zi(t.elementType),t.type=e,typeof e=="function")Xs(e)?(a=ta(e,a),t.tag=1,t=vd(null,t,e,a,i)):(t.tag=0,t=Ur(null,t,e,a,i));else{if(e!=null){var n=e.$$typeof;if(n===be){t.tag=11,t=md(null,t,e,a,i);break e}else if(n===ae){t.tag=14,t=fd(null,t,e,a,i);break e}}throw t=st(e)||e,Error(c(306,t,""))}}return t;case 0:return Ur(e,t,t.type,t.pendingProps,i);case 1:return a=t.type,n=ta(a,t.pendingProps),vd(e,t,a,n,i);case 3:e:{if(We(t,t.stateNode.containerInfo),e===null)throw Error(c(387));a=t.pendingProps;var s=t.memoizedState;n=s.element,dr(e,t),pn(t,a,null,i);var r=t.memoizedState;if(a=r.cache,ji(t,He,a),a!==s.cache&&lr(t,[He],i,!0),hn(),a=r.element,s.isDehydrated)if(s={element:a,isDehydrated:!1,cache:r.cache},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){t=jd(e,t,a,i);break e}else if(a!==n){n=Dt(Error(c(424)),t),cn(n),t=jd(e,t,a,i);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Ee=Lt(e.firstChild),Ze=t,oe=!0,xi=null,Ot=!0,i=pu(t,null,a,i),t.child=i;i;)i.flags=i.flags&-3|4096,i=i.sibling}else{if(Yi(),a===n){t=ni(e,t,i);break e}$e(e,t,a,i)}t=t.child}return t;case 26:return Ol(e,t),e===null?(i=Bg(t.type,null,t.pendingProps,null))?t.memoizedState=i:oe||(i=t.type,e=t.pendingProps,a=Jl(W.current).createElement(i),a[Xe]=t,a[rt]=e,et(a,i,e),Ye(a),t.stateNode=a):t.memoizedState=Bg(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Fe(t),e===null&&oe&&(a=t.stateNode=Gg(t.type,t.pendingProps,W.current),Ze=t,Ot=!0,n=Ee,zi(t.type)?(Ao=n,Ee=Lt(a.firstChild)):Ee=n),$e(e,t,t.pendingProps.children,i),Ol(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&oe&&((n=a=Ee)&&(a=qh(a,t.type,t.pendingProps,Ot),a!==null?(t.stateNode=a,Ze=t,Ee=Lt(a.firstChild),Ot=!1,n=!0):n=!1),n||vi(t)),Fe(t),n=t.type,s=t.pendingProps,r=e!==null?e.memoizedProps:null,a=s.children,vo(n,s)?a=null:r!==null&&vo(n,r)&&(t.flags|=32),t.memoizedState!==null&&(n=br(e,t,th,null,null,i),Bn._currentValue=n),Ol(e,t),$e(e,t,a,i),t.child;case 6:return e===null&&oe&&((e=i=Ee)&&(i=_h(i,t.pendingProps,Ot),i!==null?(t.stateNode=i,Ze=t,Ee=null,e=!0):e=!1),e||vi(t)),null;case 13:return Sd(e,t,i);case 4:return We(t,t.stateNode.containerInfo),a=t.pendingProps,e===null?t.child=$i(t,null,a,i):$e(e,t,a,i),t.child;case 11:return md(e,t,t.type,t.pendingProps,i);case 7:return $e(e,t,t.pendingProps,i),t.child;case 8:return $e(e,t,t.pendingProps.children,i),t.child;case 12:return $e(e,t,t.pendingProps.children,i),t.child;case 10:return a=t.pendingProps,ji(t,t.type,a.value),$e(e,t,a.children,i),t.child;case 9:return n=t.type._context,a=t.pendingProps.children,Ki(t),n=Je(n),a=a(n),t.flags|=1,$e(e,t,a,i),t.child;case 14:return fd(e,t,t.type,t.pendingProps,i);case 15:return hd(e,t,t.type,t.pendingProps,i);case 19:return wd(e,t,i);case 31:return ch(e,t,i);case 22:return pd(e,t,i,t.pendingProps);case 24:return Ki(t),a=Je(He),e===null?(n=or(),n===null&&(n=Ae,s=sr(),n.pooledCache=s,s.refCount++,s!==null&&(n.pooledCacheLanes|=i),n=s),t.memoizedState={parent:a,cache:n},ur(t),ji(t,He,n)):((e.lanes&i)!==0&&(dr(e,t),pn(t,null,null,i),hn()),n=e.memoizedState,s=t.memoizedState,n.parent!==a?(n={parent:a,cache:a},t.memoizedState=n,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=n),ji(t,He,a)):(a=s.cache,ji(t,He,a),a!==n.cache&&lr(t,[He],i,!0))),$e(e,t,t.pendingProps.children,i),t.child;case 29:throw t.pendingProps}throw Error(c(156,t.tag))}function li(e){e.flags|=4}function Fr(e,t,i,a,n){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(n&335544128)===n)if(e.stateNode.complete)e.flags|=8192;else if(Jd())e.flags|=8192;else throw Ji=vl,cr}else e.flags&=-16777217}function Nd(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!_g(t))if(Jd())e.flags|=8192;else throw Ji=vl,cr}function Ll(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?lc():536870912,e.lanes|=t,Oa|=t)}function Sn(e,t){if(!oe)switch(e.tailMode){case"hidden":t=e.tail;for(var i=null;t!==null;)t.alternate!==null&&(i=t),t=t.sibling;i===null?e.tail=null:i.sibling=null;break;case"collapsed":i=e.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null}}function Re(e){var t=e.alternate!==null&&e.alternate.child===e.child,i=0,a=0;if(t)for(var n=e.child;n!==null;)i|=n.lanes|n.childLanes,a|=n.subtreeFlags&65011712,a|=n.flags&65011712,n.return=e,n=n.sibling;else for(n=e.child;n!==null;)i|=n.lanes|n.childLanes,a|=n.subtreeFlags,a|=n.flags,n.return=e,n=n.sibling;return e.subtreeFlags|=a,e.childLanes=i,t}function dh(e,t,i){var a=t.pendingProps;switch(er(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Re(t),null;case 1:return Re(t),null;case 3:return i=t.stateNode,a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),ti(He),ue(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(e===null||e.child===null)&&(Sa(t)?li(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,ir())),Re(t),null;case 26:var n=t.type,s=t.memoizedState;return e===null?(li(t),s!==null?(Re(t),Nd(t,s)):(Re(t),Fr(t,n,null,a,i))):s?s!==e.memoizedState?(li(t),Re(t),Nd(t,s)):(Re(t),t.flags&=-16777217):(e=e.memoizedProps,e!==a&&li(t),Re(t),Fr(t,n,e,a,i)),null;case 27:if(Tt(t),i=W.current,n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==a&&li(t);else{if(!a){if(t.stateNode===null)throw Error(c(166));return Re(t),null}e=U.current,Sa(t)?lu(t):(e=Gg(n,a,i),t.stateNode=e,li(t))}return Re(t),null;case 5:if(Tt(t),n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==a&&li(t);else{if(!a){if(t.stateNode===null)throw Error(c(166));return Re(t),null}if(s=U.current,Sa(t))lu(t);else{var r=Jl(W.current);switch(s){case 1:s=r.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:s=r.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":s=r.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":s=r.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":s=r.createElement("div"),s.innerHTML="<script><\/script>",s=s.removeChild(s.firstChild);break;case"select":s=typeof a.is=="string"?r.createElement("select",{is:a.is}):r.createElement("select"),a.multiple?s.multiple=!0:a.size&&(s.size=a.size);break;default:s=typeof a.is=="string"?r.createElement(n,{is:a.is}):r.createElement(n)}}s[Xe]=t,s[rt]=a;e:for(r=t.child;r!==null;){if(r.tag===5||r.tag===6)s.appendChild(r.stateNode);else if(r.tag!==4&&r.tag!==27&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break e;for(;r.sibling===null;){if(r.return===null||r.return===t)break e;r=r.return}r.sibling.return=r.return,r=r.sibling}t.stateNode=s;e:switch(et(s,n,a),n){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break e;case"img":a=!0;break e;default:a=!1}a&&li(t)}}return Re(t),Fr(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,i),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==a&&li(t);else{if(typeof a!="string"&&t.stateNode===null)throw Error(c(166));if(e=W.current,Sa(t)){if(e=t.stateNode,i=t.memoizedProps,a=null,n=Ze,n!==null)switch(n.tag){case 27:case 5:a=n.memoizedProps}e[Xe]=t,e=!!(e.nodeValue===i||a!==null&&a.suppressHydrationWarning===!0||Sg(e.nodeValue,i)),e||vi(t,!0)}else e=Jl(e).createTextNode(a),e[Xe]=t,t.stateNode=e}return Re(t),null;case 31:if(i=t.memoizedState,e===null||e.memoizedState!==null){if(a=Sa(t),i!==null){if(e===null){if(!a)throw Error(c(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(557));e[Xe]=t}else Yi(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Re(t),e=!1}else i=ir(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=i),e=!0;if(!e)return t.flags&256?(St(t),t):(St(t),null);if((t.flags&128)!==0)throw Error(c(558))}return Re(t),null;case 13:if(a=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(n=Sa(t),a!==null&&a.dehydrated!==null){if(e===null){if(!n)throw Error(c(318));if(n=t.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(c(317));n[Xe]=t}else Yi(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Re(t),n=!1}else n=ir(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),n=!0;if(!n)return t.flags&256?(St(t),t):(St(t),null)}return St(t),(t.flags&128)!==0?(t.lanes=i,t):(i=a!==null,e=e!==null&&e.memoizedState!==null,i&&(a=t.child,n=null,a.alternate!==null&&a.alternate.memoizedState!==null&&a.alternate.memoizedState.cachePool!==null&&(n=a.alternate.memoizedState.cachePool.pool),s=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(s=a.memoizedState.cachePool.pool),s!==n&&(a.flags|=2048)),i!==e&&i&&(t.child.flags|=8192),Ll(t,t.updateQueue),Re(t),null);case 4:return ue(),e===null&&ho(t.stateNode.containerInfo),Re(t),null;case 10:return ti(t.type),Re(t),null;case 19:if(z(Be),a=t.memoizedState,a===null)return Re(t),null;if(n=(t.flags&128)!==0,s=a.rendering,s===null)if(n)Sn(a,!1);else{if(Oe!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(s=wl(e),s!==null){for(t.flags|=128,Sn(a,!1),e=s.updateQueue,t.updateQueue=e,Ll(t,e),t.subtreeFlags=0,e=i,i=t.child;i!==null;)eu(i,e),i=i.sibling;return D(Be,Be.current&1|2),oe&&$t(t,a.treeForkCount),t.child}e=e.sibling}a.tail!==null&&pt()>Il&&(t.flags|=128,n=!0,Sn(a,!1),t.lanes=4194304)}else{if(!n)if(e=wl(s),e!==null){if(t.flags|=128,n=!0,e=e.updateQueue,t.updateQueue=e,Ll(t,e),Sn(a,!0),a.tail===null&&a.tailMode==="hidden"&&!s.alternate&&!oe)return Re(t),null}else 2*pt()-a.renderingStartTime>Il&&i!==536870912&&(t.flags|=128,n=!0,Sn(a,!1),t.lanes=4194304);a.isBackwards?(s.sibling=t.child,t.child=s):(e=a.last,e!==null?e.sibling=s:t.child=s,a.last=s)}return a.tail!==null?(e=a.tail,a.rendering=e,a.tail=e.sibling,a.renderingStartTime=pt(),e.sibling=null,i=Be.current,D(Be,n?i&1|2:i&1),oe&&$t(t,a.treeForkCount),e):(Re(t),null);case 22:case 23:return St(t),hr(),a=t.memoizedState!==null,e!==null?e.memoizedState!==null!==a&&(t.flags|=8192):a&&(t.flags|=8192),a?(i&536870912)!==0&&(t.flags&128)===0&&(Re(t),t.subtreeFlags&6&&(t.flags|=8192)):Re(t),i=t.updateQueue,i!==null&&Ll(t,i.retryQueue),i=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(i=e.memoizedState.cachePool.pool),a=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),a!==i&&(t.flags|=2048),e!==null&&z(Xi),null;case 24:return i=null,e!==null&&(i=e.memoizedState.cache),t.memoizedState.cache!==i&&(t.flags|=2048),ti(He),Re(t),null;case 25:return null;case 30:return null}throw Error(c(156,t.tag))}function gh(e,t){switch(er(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return ti(He),ue(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Tt(t),null;case 31:if(t.memoizedState!==null){if(St(t),t.alternate===null)throw Error(c(340));Yi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(St(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(c(340));Yi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return z(Be),null;case 4:return ue(),null;case 10:return ti(t.type),null;case 22:case 23:return St(t),hr(),e!==null&&z(Xi),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return ti(He),null;case 25:return null;default:return null}}function Cd(e,t){switch(er(t),t.tag){case 3:ti(He),ue();break;case 26:case 27:case 5:Tt(t);break;case 4:ue();break;case 31:t.memoizedState!==null&&St(t);break;case 13:St(t);break;case 19:z(Be);break;case 10:ti(t.type);break;case 22:case 23:St(t),hr(),e!==null&&z(Xi);break;case 24:ti(He)}}function kn(e,t){try{var i=t.updateQueue,a=i!==null?i.lastEffect:null;if(a!==null){var n=a.next;i=n;do{if((i.tag&e)===e){a=void 0;var s=i.create,r=i.inst;a=s(),r.destroy=a}i=i.next}while(i!==n)}}catch(o){ve(t,t.return,o)}}function Ci(e,t,i){try{var a=t.updateQueue,n=a!==null?a.lastEffect:null;if(n!==null){var s=n.next;a=s;do{if((a.tag&e)===e){var r=a.inst,o=r.destroy;if(o!==void 0){r.destroy=void 0,n=t;var p=i,N=o;try{N()}catch(M){ve(n,p,M)}}}a=a.next}while(a!==s)}}catch(M){ve(t,t.return,M)}}function Td(e){var t=e.updateQueue;if(t!==null){var i=e.stateNode;try{bu(t,i)}catch(a){ve(e,e.return,a)}}}function Ed(e,t,i){i.props=ta(e.type,e.memoizedProps),i.state=e.memoizedState;try{i.componentWillUnmount()}catch(a){ve(e,t,a)}}function wn(e,t){try{var i=e.ref;if(i!==null){switch(e.tag){case 26:case 27:case 5:var a=e.stateNode;break;case 30:a=e.stateNode;break;default:a=e.stateNode}typeof i=="function"?e.refCleanup=i(a):i.current=a}}catch(n){ve(e,t,n)}}function Yt(e,t){var i=e.ref,a=e.refCleanup;if(i!==null)if(typeof a=="function")try{a()}catch(n){ve(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof i=="function")try{i(null)}catch(n){ve(e,t,n)}else i.current=null}function Rd(e){var t=e.type,i=e.memoizedProps,a=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":i.autoFocus&&a.focus();break e;case"img":i.src?a.src=i.src:i.srcSet&&(a.srcset=i.srcSet)}}catch(n){ve(e,e.return,n)}}function Yr(e,t,i){try{var a=e.stateNode;zh(a,e.type,i,t),a[rt]=t}catch(n){ve(e,e.return,n)}}function Md(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&zi(e.type)||e.tag===4}function Qr(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Md(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&zi(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Kr(e,t,i){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?(i.nodeType===9?i.body:i.nodeName==="HTML"?i.ownerDocument.body:i).insertBefore(e,t):(t=i.nodeType===9?i.body:i.nodeName==="HTML"?i.ownerDocument.body:i,t.appendChild(e),i=i._reactRootContainer,i!=null||t.onclick!==null||(t.onclick=Xt));else if(a!==4&&(a===27&&zi(e.type)&&(i=e.stateNode,t=null),e=e.child,e!==null))for(Kr(e,t,i),e=e.sibling;e!==null;)Kr(e,t,i),e=e.sibling}function Ul(e,t,i){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?i.insertBefore(e,t):i.appendChild(e);else if(a!==4&&(a===27&&zi(e.type)&&(i=e.stateNode),e=e.child,e!==null))for(Ul(e,t,i),e=e.sibling;e!==null;)Ul(e,t,i),e=e.sibling}function Dd(e){var t=e.stateNode,i=e.memoizedProps;try{for(var a=e.type,n=t.attributes;n.length;)t.removeAttributeNode(n[0]);et(t,a,i),t[Xe]=e,t[rt]=i}catch(s){ve(e,e.return,s)}}var si=!1,Ie=!1,Xr=!1,Gd=typeof WeakSet=="function"?WeakSet:Set,Qe=null;function mh(e,t){if(e=e.containerInfo,bo=ls,e=Wc(e),Ps(e)){if("selectionStart"in e)var i={start:e.selectionStart,end:e.selectionEnd};else e:{i=(i=e.ownerDocument)&&i.defaultView||window;var a=i.getSelection&&i.getSelection();if(a&&a.rangeCount!==0){i=a.anchorNode;var n=a.anchorOffset,s=a.focusNode;a=a.focusOffset;try{i.nodeType,s.nodeType}catch{i=null;break e}var r=0,o=-1,p=-1,N=0,M=0,O=e,C=null;t:for(;;){for(var E;O!==i||n!==0&&O.nodeType!==3||(o=r+n),O!==s||a!==0&&O.nodeType!==3||(p=r+a),O.nodeType===3&&(r+=O.nodeValue.length),(E=O.firstChild)!==null;)C=O,O=E;for(;;){if(O===e)break t;if(C===i&&++N===n&&(o=r),C===s&&++M===a&&(p=r),(E=O.nextSibling)!==null)break;O=C,C=O.parentNode}O=E}i=o===-1||p===-1?null:{start:o,end:p}}else i=null}i=i||{start:0,end:0}}else i=null;for(xo={focusedElem:e,selectionRange:i},ls=!1,Qe=t;Qe!==null;)if(t=Qe,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,Qe=e;else for(;Qe!==null;){switch(t=Qe,s=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(i=0;i<e.length;i++)n=e[i],n.ref.impl=n.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&s!==null){e=void 0,i=t,n=s.memoizedProps,s=s.memoizedState,a=i.stateNode;try{var P=ta(i.type,n);e=a.getSnapshotBeforeUpdate(P,s),a.__reactInternalSnapshotBeforeUpdate=e}catch(Z){ve(i,i.return,Z)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,i=e.nodeType,i===9)So(e);else if(i===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":So(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(c(163))}if(e=t.sibling,e!==null){e.return=t.return,Qe=e;break}Qe=t.return}}function zd(e,t,i){var a=i.flags;switch(i.tag){case 0:case 11:case 15:oi(e,i),a&4&&kn(5,i);break;case 1:if(oi(e,i),a&4)if(e=i.stateNode,t===null)try{e.componentDidMount()}catch(r){ve(i,i.return,r)}else{var n=ta(i.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(n,t,e.__reactInternalSnapshotBeforeUpdate)}catch(r){ve(i,i.return,r)}}a&64&&Td(i),a&512&&wn(i,i.return);break;case 3:if(oi(e,i),a&64&&(e=i.updateQueue,e!==null)){if(t=null,i.child!==null)switch(i.child.tag){case 27:case 5:t=i.child.stateNode;break;case 1:t=i.child.stateNode}try{bu(e,t)}catch(r){ve(i,i.return,r)}}break;case 27:t===null&&a&4&&Dd(i);case 26:case 5:oi(e,i),t===null&&a&4&&Rd(i),a&512&&wn(i,i.return);break;case 12:oi(e,i);break;case 31:oi(e,i),a&4&&Ld(e,i);break;case 13:oi(e,i),a&4&&Ud(e,i),a&64&&(e=i.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(i=Sh.bind(null,i),Ih(e,i))));break;case 22:if(a=i.memoizedState!==null||si,!a){t=t!==null&&t.memoizedState!==null||Ie,n=si;var s=Ie;si=a,(Ie=t)&&!s?ci(e,i,(i.subtreeFlags&8772)!==0):oi(e,i),si=n,Ie=s}break;case 30:break;default:oi(e,i)}}function Od(e){var t=e.alternate;t!==null&&(e.alternate=null,Od(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Ns(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Me=null,ct=!1;function ri(e,t,i){for(i=i.child;i!==null;)Bd(e,t,i),i=i.sibling}function Bd(e,t,i){if(yt&&typeof yt.onCommitFiberUnmount=="function")try{yt.onCommitFiberUnmount(Ya,i)}catch{}switch(i.tag){case 26:Ie||Yt(i,t),ri(e,t,i),i.memoizedState?i.memoizedState.count--:i.stateNode&&(i=i.stateNode,i.parentNode.removeChild(i));break;case 27:Ie||Yt(i,t);var a=Me,n=ct;zi(i.type)&&(Me=i.stateNode,ct=!1),ri(e,t,i),Gn(i.stateNode),Me=a,ct=n;break;case 5:Ie||Yt(i,t);case 6:if(a=Me,n=ct,Me=null,ri(e,t,i),Me=a,ct=n,Me!==null)if(ct)try{(Me.nodeType===9?Me.body:Me.nodeName==="HTML"?Me.ownerDocument.body:Me).removeChild(i.stateNode)}catch(s){ve(i,t,s)}else try{Me.removeChild(i.stateNode)}catch(s){ve(i,t,s)}break;case 18:Me!==null&&(ct?(e=Me,Tg(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,i.stateNode),Pa(e)):Tg(Me,i.stateNode));break;case 4:a=Me,n=ct,Me=i.stateNode.containerInfo,ct=!0,ri(e,t,i),Me=a,ct=n;break;case 0:case 11:case 14:case 15:Ci(2,i,t),Ie||Ci(4,i,t),ri(e,t,i);break;case 1:Ie||(Yt(i,t),a=i.stateNode,typeof a.componentWillUnmount=="function"&&Ed(i,t,a)),ri(e,t,i);break;case 21:ri(e,t,i);break;case 22:Ie=(a=Ie)||i.memoizedState!==null,ri(e,t,i),Ie=a;break;default:ri(e,t,i)}}function Ld(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Pa(e)}catch(i){ve(t,t.return,i)}}}function Ud(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Pa(e)}catch(i){ve(t,t.return,i)}}function fh(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Gd),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Gd),t;default:throw Error(c(435,e.tag))}}function Hl(e,t){var i=fh(e);t.forEach(function(a){if(!i.has(a)){i.add(a);var n=kh.bind(null,e,a);a.then(n,n)}})}function ut(e,t){var i=t.deletions;if(i!==null)for(var a=0;a<i.length;a++){var n=i[a],s=e,r=t,o=r;e:for(;o!==null;){switch(o.tag){case 27:if(zi(o.type)){Me=o.stateNode,ct=!1;break e}break;case 5:Me=o.stateNode,ct=!1;break e;case 3:case 4:Me=o.stateNode.containerInfo,ct=!0;break e}o=o.return}if(Me===null)throw Error(c(160));Bd(s,r,n),Me=null,ct=!1,s=n.alternate,s!==null&&(s.return=null),n.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)Hd(t,e),t=t.sibling}var _t=null;function Hd(e,t){var i=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:ut(t,e),dt(e),a&4&&(Ci(3,e,e.return),kn(3,e),Ci(5,e,e.return));break;case 1:ut(t,e),dt(e),a&512&&(Ie||i===null||Yt(i,i.return)),a&64&&si&&(e=e.updateQueue,e!==null&&(a=e.callbacks,a!==null&&(i=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=i===null?a:i.concat(a))));break;case 26:var n=_t;if(ut(t,e),dt(e),a&512&&(Ie||i===null||Yt(i,i.return)),a&4){var s=i!==null?i.memoizedState:null;if(a=e.memoizedState,i===null)if(a===null)if(e.stateNode===null){e:{a=e.type,i=e.memoizedProps,n=n.ownerDocument||n;t:switch(a){case"title":s=n.getElementsByTagName("title")[0],(!s||s[Xa]||s[Xe]||s.namespaceURI==="http://www.w3.org/2000/svg"||s.hasAttribute("itemprop"))&&(s=n.createElement(a),n.head.insertBefore(s,n.querySelector("head > title"))),et(s,a,i),s[Xe]=e,Ye(s),a=s;break e;case"link":var r=Hg("link","href",n).get(a+(i.href||""));if(r){for(var o=0;o<r.length;o++)if(s=r[o],s.getAttribute("href")===(i.href==null||i.href===""?null:i.href)&&s.getAttribute("rel")===(i.rel==null?null:i.rel)&&s.getAttribute("title")===(i.title==null?null:i.title)&&s.getAttribute("crossorigin")===(i.crossOrigin==null?null:i.crossOrigin)){r.splice(o,1);break t}}s=n.createElement(a),et(s,a,i),n.head.appendChild(s);break;case"meta":if(r=Hg("meta","content",n).get(a+(i.content||""))){for(o=0;o<r.length;o++)if(s=r[o],s.getAttribute("content")===(i.content==null?null:""+i.content)&&s.getAttribute("name")===(i.name==null?null:i.name)&&s.getAttribute("property")===(i.property==null?null:i.property)&&s.getAttribute("http-equiv")===(i.httpEquiv==null?null:i.httpEquiv)&&s.getAttribute("charset")===(i.charSet==null?null:i.charSet)){r.splice(o,1);break t}}s=n.createElement(a),et(s,a,i),n.head.appendChild(s);break;default:throw Error(c(468,a))}s[Xe]=e,Ye(s),a=s}e.stateNode=a}else qg(n,e.type,e.stateNode);else e.stateNode=Ug(n,a,e.memoizedProps);else s!==a?(s===null?i.stateNode!==null&&(i=i.stateNode,i.parentNode.removeChild(i)):s.count--,a===null?qg(n,e.type,e.stateNode):Ug(n,a,e.memoizedProps)):a===null&&e.stateNode!==null&&Yr(e,e.memoizedProps,i.memoizedProps)}break;case 27:ut(t,e),dt(e),a&512&&(Ie||i===null||Yt(i,i.return)),i!==null&&a&4&&Yr(e,e.memoizedProps,i.memoizedProps);break;case 5:if(ut(t,e),dt(e),a&512&&(Ie||i===null||Yt(i,i.return)),e.flags&32){n=e.stateNode;try{ga(n,"")}catch(P){ve(e,e.return,P)}}a&4&&e.stateNode!=null&&(n=e.memoizedProps,Yr(e,n,i!==null?i.memoizedProps:n)),a&1024&&(Xr=!0);break;case 6:if(ut(t,e),dt(e),a&4){if(e.stateNode===null)throw Error(c(162));a=e.memoizedProps,i=e.stateNode;try{i.nodeValue=a}catch(P){ve(e,e.return,P)}}break;case 3:if(ts=null,n=_t,_t=$l(t.containerInfo),ut(t,e),_t=n,dt(e),a&4&&i!==null&&i.memoizedState.isDehydrated)try{Pa(t.containerInfo)}catch(P){ve(e,e.return,P)}Xr&&(Xr=!1,qd(e));break;case 4:a=_t,_t=$l(e.stateNode.containerInfo),ut(t,e),dt(e),_t=a;break;case 12:ut(t,e),dt(e);break;case 31:ut(t,e),dt(e),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,Hl(e,a)));break;case 13:ut(t,e),dt(e),e.child.flags&8192&&e.memoizedState!==null!=(i!==null&&i.memoizedState!==null)&&(_l=pt()),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,Hl(e,a)));break;case 22:n=e.memoizedState!==null;var p=i!==null&&i.memoizedState!==null,N=si,M=Ie;if(si=N||n,Ie=M||p,ut(t,e),Ie=M,si=N,dt(e),a&8192)e:for(t=e.stateNode,t._visibility=n?t._visibility&-2:t._visibility|1,n&&(i===null||p||si||Ie||ia(e)),i=null,t=e;;){if(t.tag===5||t.tag===26){if(i===null){p=i=t;try{if(s=p.stateNode,n)r=s.style,typeof r.setProperty=="function"?r.setProperty("display","none","important"):r.display="none";else{o=p.stateNode;var O=p.memoizedProps.style,C=O!=null&&O.hasOwnProperty("display")?O.display:null;o.style.display=C==null||typeof C=="boolean"?"":(""+C).trim()}}catch(P){ve(p,p.return,P)}}}else if(t.tag===6){if(i===null){p=t;try{p.stateNode.nodeValue=n?"":p.memoizedProps}catch(P){ve(p,p.return,P)}}}else if(t.tag===18){if(i===null){p=t;try{var E=p.stateNode;n?Eg(E,!0):Eg(p.stateNode,!1)}catch(P){ve(p,p.return,P)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;i===t&&(i=null),t=t.return}i===t&&(i=null),t.sibling.return=t.return,t=t.sibling}a&4&&(a=e.updateQueue,a!==null&&(i=a.retryQueue,i!==null&&(a.retryQueue=null,Hl(e,i))));break;case 19:ut(t,e),dt(e),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,Hl(e,a)));break;case 30:break;case 21:break;default:ut(t,e),dt(e)}}function dt(e){var t=e.flags;if(t&2){try{for(var i,a=e.return;a!==null;){if(Md(a)){i=a;break}a=a.return}if(i==null)throw Error(c(160));switch(i.tag){case 27:var n=i.stateNode,s=Qr(e);Ul(e,s,n);break;case 5:var r=i.stateNode;i.flags&32&&(ga(r,""),i.flags&=-33);var o=Qr(e);Ul(e,o,r);break;case 3:case 4:var p=i.stateNode.containerInfo,N=Qr(e);Kr(e,N,p);break;default:throw Error(c(161))}}catch(M){ve(e,e.return,M)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function qd(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;qd(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function oi(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)zd(e,t.alternate,t),t=t.sibling}function ia(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Ci(4,t,t.return),ia(t);break;case 1:Yt(t,t.return);var i=t.stateNode;typeof i.componentWillUnmount=="function"&&Ed(t,t.return,i),ia(t);break;case 27:Gn(t.stateNode);case 26:case 5:Yt(t,t.return),ia(t);break;case 22:t.memoizedState===null&&ia(t);break;case 30:ia(t);break;default:ia(t)}e=e.sibling}}function ci(e,t,i){for(i=i&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var a=t.alternate,n=e,s=t,r=s.flags;switch(s.tag){case 0:case 11:case 15:ci(n,s,i),kn(4,s);break;case 1:if(ci(n,s,i),a=s,n=a.stateNode,typeof n.componentDidMount=="function")try{n.componentDidMount()}catch(N){ve(a,a.return,N)}if(a=s,n=a.updateQueue,n!==null){var o=a.stateNode;try{var p=n.shared.hiddenCallbacks;if(p!==null)for(n.shared.hiddenCallbacks=null,n=0;n<p.length;n++)yu(p[n],o)}catch(N){ve(a,a.return,N)}}i&&r&64&&Td(s),wn(s,s.return);break;case 27:Dd(s);case 26:case 5:ci(n,s,i),i&&a===null&&r&4&&Rd(s),wn(s,s.return);break;case 12:ci(n,s,i);break;case 31:ci(n,s,i),i&&r&4&&Ld(n,s);break;case 13:ci(n,s,i),i&&r&4&&Ud(n,s);break;case 22:s.memoizedState===null&&ci(n,s,i),wn(s,s.return);break;case 30:break;default:ci(n,s,i)}t=t.sibling}}function Zr(e,t){var i=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(i=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==i&&(e!=null&&e.refCount++,i!=null&&un(i))}function Jr(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&un(e))}function It(e,t,i,a){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)_d(e,t,i,a),t=t.sibling}function _d(e,t,i,a){var n=t.flags;switch(t.tag){case 0:case 11:case 15:It(e,t,i,a),n&2048&&kn(9,t);break;case 1:It(e,t,i,a);break;case 3:It(e,t,i,a),n&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&un(e)));break;case 12:if(n&2048){It(e,t,i,a),e=t.stateNode;try{var s=t.memoizedProps,r=s.id,o=s.onPostCommit;typeof o=="function"&&o(r,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(p){ve(t,t.return,p)}}else It(e,t,i,a);break;case 31:It(e,t,i,a);break;case 13:It(e,t,i,a);break;case 23:break;case 22:s=t.stateNode,r=t.alternate,t.memoizedState!==null?s._visibility&2?It(e,t,i,a):An(e,t):s._visibility&2?It(e,t,i,a):(s._visibility|=2,Da(e,t,i,a,(t.subtreeFlags&10256)!==0||!1)),n&2048&&Zr(r,t);break;case 24:It(e,t,i,a),n&2048&&Jr(t.alternate,t);break;default:It(e,t,i,a)}}function Da(e,t,i,a,n){for(n=n&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var s=e,r=t,o=i,p=a,N=r.flags;switch(r.tag){case 0:case 11:case 15:Da(s,r,o,p,n),kn(8,r);break;case 23:break;case 22:var M=r.stateNode;r.memoizedState!==null?M._visibility&2?Da(s,r,o,p,n):An(s,r):(M._visibility|=2,Da(s,r,o,p,n)),n&&N&2048&&Zr(r.alternate,r);break;case 24:Da(s,r,o,p,n),n&&N&2048&&Jr(r.alternate,r);break;default:Da(s,r,o,p,n)}t=t.sibling}}function An(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var i=e,a=t,n=a.flags;switch(a.tag){case 22:An(i,a),n&2048&&Zr(a.alternate,a);break;case 24:An(i,a),n&2048&&Jr(a.alternate,a);break;default:An(i,a)}t=t.sibling}}var Nn=8192;function Ga(e,t,i){if(e.subtreeFlags&Nn)for(e=e.child;e!==null;)Id(e,t,i),e=e.sibling}function Id(e,t,i){switch(e.tag){case 26:Ga(e,t,i),e.flags&Nn&&e.memoizedState!==null&&ep(i,_t,e.memoizedState,e.memoizedProps);break;case 5:Ga(e,t,i);break;case 3:case 4:var a=_t;_t=$l(e.stateNode.containerInfo),Ga(e,t,i),_t=a;break;case 22:e.memoizedState===null&&(a=e.alternate,a!==null&&a.memoizedState!==null?(a=Nn,Nn=16777216,Ga(e,t,i),Nn=a):Ga(e,t,i));break;default:Ga(e,t,i)}}function Pd(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Cn(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var i=0;i<t.length;i++){var a=t[i];Qe=a,Wd(a,e)}Pd(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Vd(e),e=e.sibling}function Vd(e){switch(e.tag){case 0:case 11:case 15:Cn(e),e.flags&2048&&Ci(9,e,e.return);break;case 3:Cn(e);break;case 12:Cn(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,ql(e)):Cn(e);break;default:Cn(e)}}function ql(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var i=0;i<t.length;i++){var a=t[i];Qe=a,Wd(a,e)}Pd(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Ci(8,t,t.return),ql(t);break;case 22:i=t.stateNode,i._visibility&2&&(i._visibility&=-3,ql(t));break;default:ql(t)}e=e.sibling}}function Wd(e,t){for(;Qe!==null;){var i=Qe;switch(i.tag){case 0:case 11:case 15:Ci(8,i,t);break;case 23:case 22:if(i.memoizedState!==null&&i.memoizedState.cachePool!==null){var a=i.memoizedState.cachePool.pool;a!=null&&a.refCount++}break;case 24:un(i.memoizedState.cache)}if(a=i.child,a!==null)a.return=i,Qe=a;else e:for(i=e;Qe!==null;){a=Qe;var n=a.sibling,s=a.return;if(Od(a),a===i){Qe=null;break e}if(n!==null){n.return=s,Qe=n;break e}Qe=s}}}var hh={getCacheForType:function(e){var t=Je(He),i=t.data.get(e);return i===void 0&&(i=e(),t.data.set(e,i)),i},cacheSignal:function(){return Je(He).controller.signal}},ph=typeof WeakMap=="function"?WeakMap:Map,ye=0,Ae=null,ne=null,se=0,xe=0,kt=null,Ti=!1,za=!1,$r=!1,ui=0,Oe=0,Ei=0,aa=0,eo=0,wt=0,Oa=0,Tn=null,gt=null,to=!1,_l=0,Fd=0,Il=1/0,Pl=null,Ri=null,Ve=0,Mi=null,Ba=null,di=0,io=0,ao=null,Yd=null,En=0,no=null;function At(){return(ye&2)!==0&&se!==0?se&-se:R.T!==null?uo():cc()}function Qd(){if(wt===0)if((se&536870912)===0||oe){var e=Zn;Zn<<=1,(Zn&3932160)===0&&(Zn=262144),wt=e}else wt=536870912;return e=jt.current,e!==null&&(e.flags|=32),wt}function mt(e,t,i){(e===Ae&&(xe===2||xe===9)||e.cancelPendingCommit!==null)&&(La(e,0),Di(e,se,wt,!1)),Ka(e,i),((ye&2)===0||e!==Ae)&&(e===Ae&&((ye&2)===0&&(aa|=i),Oe===4&&Di(e,se,wt,!1)),Qt(e))}function Kd(e,t,i){if((ye&6)!==0)throw Error(c(327));var a=!i&&(t&127)===0&&(t&e.expiredLanes)===0||Qa(e,t),n=a?xh(e,t):so(e,t,!0),s=a;do{if(n===0){za&&!a&&Di(e,t,0,!1);break}else{if(i=e.current.alternate,s&&!yh(i)){n=so(e,t,!1),s=!1;continue}if(n===2){if(s=t,e.errorRecoveryDisabledLanes&s)var r=0;else r=e.pendingLanes&-536870913,r=r!==0?r:r&536870912?536870912:0;if(r!==0){t=r;e:{var o=e;n=Tn;var p=o.current.memoizedState.isDehydrated;if(p&&(La(o,r).flags|=256),r=so(o,r,!1),r!==2){if($r&&!p){o.errorRecoveryDisabledLanes|=s,aa|=s,n=4;break e}s=gt,gt=n,s!==null&&(gt===null?gt=s:gt.push.apply(gt,s))}n=r}if(s=!1,n!==2)continue}}if(n===1){La(e,0),Di(e,t,0,!0);break}e:{switch(a=e,s=n,s){case 0:case 1:throw Error(c(345));case 4:if((t&4194048)!==t)break;case 6:Di(a,t,wt,!Ti);break e;case 2:gt=null;break;case 3:case 5:break;default:throw Error(c(329))}if((t&62914560)===t&&(n=_l+300-pt(),10<n)){if(Di(a,t,wt,!Ti),$n(a,0,!0)!==0)break e;di=t,a.timeoutHandle=Ng(Xd.bind(null,a,i,gt,Pl,to,t,wt,aa,Oa,Ti,s,"Throttled",-0,0),n);break e}Xd(a,i,gt,Pl,to,t,wt,aa,Oa,Ti,s,null,-0,0)}}break}while(!0);Qt(e)}function Xd(e,t,i,a,n,s,r,o,p,N,M,O,C,E){if(e.timeoutHandle=-1,O=t.subtreeFlags,O&8192||(O&16785408)===16785408){O={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Xt},Id(t,s,O);var P=(s&62914560)===s?_l-pt():(s&4194048)===s?Fd-pt():0;if(P=tp(O,P),P!==null){di=s,e.cancelPendingCommit=P(ng.bind(null,e,t,s,i,a,n,r,o,p,M,O,null,C,E)),Di(e,s,r,!N);return}}ng(e,t,s,i,a,n,r,o,p)}function yh(e){for(var t=e;;){var i=t.tag;if((i===0||i===11||i===15)&&t.flags&16384&&(i=t.updateQueue,i!==null&&(i=i.stores,i!==null)))for(var a=0;a<i.length;a++){var n=i[a],s=n.getSnapshot;n=n.value;try{if(!xt(s(),n))return!1}catch{return!1}}if(i=t.child,t.subtreeFlags&16384&&i!==null)i.return=t,t=i;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Di(e,t,i,a){t&=~eo,t&=~aa,e.suspendedLanes|=t,e.pingedLanes&=~t,a&&(e.warmLanes|=t),a=e.expirationTimes;for(var n=t;0<n;){var s=31-bt(n),r=1<<s;a[s]=-1,n&=~r}i!==0&&sc(e,i,t)}function Vl(){return(ye&6)===0?(Rn(0),!1):!0}function lo(){if(ne!==null){if(xe===0)var e=ne.return;else e=ne,ei=Qi=null,jr(e),Ca=null,gn=0,e=ne;for(;e!==null;)Cd(e.alternate,e),e=e.return;ne=null}}function La(e,t){var i=e.timeoutHandle;i!==-1&&(e.timeoutHandle=-1,Lh(i)),i=e.cancelPendingCommit,i!==null&&(e.cancelPendingCommit=null,i()),di=0,lo(),Ae=e,ne=i=Jt(e.current,null),se=t,xe=0,kt=null,Ti=!1,za=Qa(e,t),$r=!1,Oa=wt=eo=aa=Ei=Oe=0,gt=Tn=null,to=!1,(t&8)!==0&&(t|=t&32);var a=e.entangledLanes;if(a!==0)for(e=e.entanglements,a&=t;0<a;){var n=31-bt(a),s=1<<n;t|=e[n],a&=~s}return ui=t,dl(),i}function Zd(e,t){te=null,R.H=vn,t===Na||t===xl?(t=mu(),xe=3):t===cr?(t=mu(),xe=4):xe=t===Lr?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,kt=t,ne===null&&(Oe=1,Gl(e,Dt(t,e.current)))}function Jd(){var e=jt.current;return e===null?!0:(se&4194048)===se?Bt===null:(se&62914560)===se||(se&536870912)!==0?e===Bt:!1}function $d(){var e=R.H;return R.H=vn,e===null?vn:e}function eg(){var e=R.A;return R.A=hh,e}function Wl(){Oe=4,Ti||(se&4194048)!==se&&jt.current!==null||(za=!0),(Ei&134217727)===0&&(aa&134217727)===0||Ae===null||Di(Ae,se,wt,!1)}function so(e,t,i){var a=ye;ye|=2;var n=$d(),s=eg();(Ae!==e||se!==t)&&(Pl=null,La(e,t)),t=!1;var r=Oe;e:do try{if(xe!==0&&ne!==null){var o=ne,p=kt;switch(xe){case 8:lo(),r=6;break e;case 3:case 2:case 9:case 6:jt.current===null&&(t=!0);var N=xe;if(xe=0,kt=null,Ua(e,o,p,N),i&&za){r=0;break e}break;default:N=xe,xe=0,kt=null,Ua(e,o,p,N)}}bh(),r=Oe;break}catch(M){Zd(e,M)}while(!0);return t&&e.shellSuspendCounter++,ei=Qi=null,ye=a,R.H=n,R.A=s,ne===null&&(Ae=null,se=0,dl()),r}function bh(){for(;ne!==null;)tg(ne)}function xh(e,t){var i=ye;ye|=2;var a=$d(),n=eg();Ae!==e||se!==t?(Pl=null,Il=pt()+500,La(e,t)):za=Qa(e,t);e:do try{if(xe!==0&&ne!==null){t=ne;var s=kt;t:switch(xe){case 1:xe=0,kt=null,Ua(e,t,s,1);break;case 2:case 9:if(du(s)){xe=0,kt=null,ig(t);break}t=function(){xe!==2&&xe!==9||Ae!==e||(xe=7),Qt(e)},s.then(t,t);break e;case 3:xe=7;break e;case 4:xe=5;break e;case 7:du(s)?(xe=0,kt=null,ig(t)):(xe=0,kt=null,Ua(e,t,s,7));break;case 5:var r=null;switch(ne.tag){case 26:r=ne.memoizedState;case 5:case 27:var o=ne;if(r?_g(r):o.stateNode.complete){xe=0,kt=null;var p=o.sibling;if(p!==null)ne=p;else{var N=o.return;N!==null?(ne=N,Fl(N)):ne=null}break t}}xe=0,kt=null,Ua(e,t,s,5);break;case 6:xe=0,kt=null,Ua(e,t,s,6);break;case 8:lo(),Oe=6;break e;default:throw Error(c(462))}}vh();break}catch(M){Zd(e,M)}while(!0);return ei=Qi=null,R.H=a,R.A=n,ye=i,ne!==null?0:(Ae=null,se=0,dl(),Oe)}function vh(){for(;ne!==null&&!Im();)tg(ne)}function tg(e){var t=Ad(e.alternate,e,ui);e.memoizedProps=e.pendingProps,t===null?Fl(e):ne=t}function ig(e){var t=e,i=t.alternate;switch(t.tag){case 15:case 0:t=xd(i,t,t.pendingProps,t.type,void 0,se);break;case 11:t=xd(i,t,t.pendingProps,t.type.render,t.ref,se);break;case 5:jr(t);default:Cd(i,t),t=ne=eu(t,ui),t=Ad(i,t,ui)}e.memoizedProps=e.pendingProps,t===null?Fl(e):ne=t}function Ua(e,t,i,a){ei=Qi=null,jr(t),Ca=null,gn=0;var n=t.return;try{if(oh(e,n,t,i,se)){Oe=1,Gl(e,Dt(i,e.current)),ne=null;return}}catch(s){if(n!==null)throw ne=n,s;Oe=1,Gl(e,Dt(i,e.current)),ne=null;return}t.flags&32768?(oe||a===1?e=!0:za||(se&536870912)!==0?e=!1:(Ti=e=!0,(a===2||a===9||a===3||a===6)&&(a=jt.current,a!==null&&a.tag===13&&(a.flags|=16384))),ag(t,e)):Fl(t)}function Fl(e){var t=e;do{if((t.flags&32768)!==0){ag(t,Ti);return}e=t.return;var i=dh(t.alternate,t,ui);if(i!==null){ne=i;return}if(t=t.sibling,t!==null){ne=t;return}ne=t=e}while(t!==null);Oe===0&&(Oe=5)}function ag(e,t){do{var i=gh(e.alternate,e);if(i!==null){i.flags&=32767,ne=i;return}if(i=e.return,i!==null&&(i.flags|=32768,i.subtreeFlags=0,i.deletions=null),!t&&(e=e.sibling,e!==null)){ne=e;return}ne=e=i}while(e!==null);Oe=6,ne=null}function ng(e,t,i,a,n,s,r,o,p){e.cancelPendingCommit=null;do Yl();while(Ve!==0);if((ye&6)!==0)throw Error(c(327));if(t!==null){if(t===e.current)throw Error(c(177));if(s=t.lanes|t.childLanes,s|=Qs,Jm(e,i,s,r,o,p),e===Ae&&(ne=Ae=null,se=0),Ba=t,Mi=e,di=i,io=s,ao=n,Yd=a,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,wh(Kn,function(){return cg(),null})):(e.callbackNode=null,e.callbackPriority=0),a=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||a){a=R.T,R.T=null,n=H.p,H.p=2,r=ye,ye|=4;try{mh(e,t,i)}finally{ye=r,H.p=n,R.T=a}}Ve=1,lg(),sg(),rg()}}function lg(){if(Ve===1){Ve=0;var e=Mi,t=Ba,i=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||i){i=R.T,R.T=null;var a=H.p;H.p=2;var n=ye;ye|=4;try{Hd(t,e);var s=xo,r=Wc(e.containerInfo),o=s.focusedElem,p=s.selectionRange;if(r!==o&&o&&o.ownerDocument&&Vc(o.ownerDocument.documentElement,o)){if(p!==null&&Ps(o)){var N=p.start,M=p.end;if(M===void 0&&(M=N),"selectionStart"in o)o.selectionStart=N,o.selectionEnd=Math.min(M,o.value.length);else{var O=o.ownerDocument||document,C=O&&O.defaultView||window;if(C.getSelection){var E=C.getSelection(),P=o.textContent.length,Z=Math.min(p.start,P),we=p.end===void 0?Z:Math.min(p.end,P);!E.extend&&Z>we&&(r=we,we=Z,Z=r);var k=Pc(o,Z),x=Pc(o,we);if(k&&x&&(E.rangeCount!==1||E.anchorNode!==k.node||E.anchorOffset!==k.offset||E.focusNode!==x.node||E.focusOffset!==x.offset)){var A=O.createRange();A.setStart(k.node,k.offset),E.removeAllRanges(),Z>we?(E.addRange(A),E.extend(x.node,x.offset)):(A.setEnd(x.node,x.offset),E.addRange(A))}}}}for(O=[],E=o;E=E.parentNode;)E.nodeType===1&&O.push({element:E,left:E.scrollLeft,top:E.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<O.length;o++){var G=O[o];G.element.scrollLeft=G.left,G.element.scrollTop=G.top}}ls=!!bo,xo=bo=null}finally{ye=n,H.p=a,R.T=i}}e.current=t,Ve=2}}function sg(){if(Ve===2){Ve=0;var e=Mi,t=Ba,i=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||i){i=R.T,R.T=null;var a=H.p;H.p=2;var n=ye;ye|=4;try{zd(e,t.alternate,t)}finally{ye=n,H.p=a,R.T=i}}Ve=3}}function rg(){if(Ve===4||Ve===3){Ve=0,Pm();var e=Mi,t=Ba,i=di,a=Yd;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?Ve=5:(Ve=0,Ba=Mi=null,og(e,e.pendingLanes));var n=e.pendingLanes;if(n===0&&(Ri=null),ws(i),t=t.stateNode,yt&&typeof yt.onCommitFiberRoot=="function")try{yt.onCommitFiberRoot(Ya,t,void 0,(t.current.flags&128)===128)}catch{}if(a!==null){t=R.T,n=H.p,H.p=2,R.T=null;try{for(var s=e.onRecoverableError,r=0;r<a.length;r++){var o=a[r];s(o.value,{componentStack:o.stack})}}finally{R.T=t,H.p=n}}(di&3)!==0&&Yl(),Qt(e),n=e.pendingLanes,(i&261930)!==0&&(n&42)!==0?e===no?En++:(En=0,no=e):En=0,Rn(0)}}function og(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,un(t)))}function Yl(){return lg(),sg(),rg(),cg()}function cg(){if(Ve!==5)return!1;var e=Mi,t=io;io=0;var i=ws(di),a=R.T,n=H.p;try{H.p=32>i?32:i,R.T=null,i=ao,ao=null;var s=Mi,r=di;if(Ve=0,Ba=Mi=null,di=0,(ye&6)!==0)throw Error(c(331));var o=ye;if(ye|=4,Vd(s.current),_d(s,s.current,r,i),ye=o,Rn(0,!1),yt&&typeof yt.onPostCommitFiberRoot=="function")try{yt.onPostCommitFiberRoot(Ya,s)}catch{}return!0}finally{H.p=n,R.T=a,og(e,t)}}function ug(e,t,i){t=Dt(i,t),t=Br(e.stateNode,t,2),e=wi(e,t,2),e!==null&&(Ka(e,2),Qt(e))}function ve(e,t,i){if(e.tag===3)ug(e,e,i);else for(;t!==null;){if(t.tag===3){ug(t,e,i);break}else if(t.tag===1){var a=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(Ri===null||!Ri.has(a))){e=Dt(i,e),i=dd(2),a=wi(t,i,2),a!==null&&(gd(i,a,t,e),Ka(a,2),Qt(a));break}}t=t.return}}function ro(e,t,i){var a=e.pingCache;if(a===null){a=e.pingCache=new ph;var n=new Set;a.set(t,n)}else n=a.get(t),n===void 0&&(n=new Set,a.set(t,n));n.has(i)||($r=!0,n.add(i),e=jh.bind(null,e,t,i),t.then(e,e))}function jh(e,t,i){var a=e.pingCache;a!==null&&a.delete(t),e.pingedLanes|=e.suspendedLanes&i,e.warmLanes&=~i,Ae===e&&(se&i)===i&&(Oe===4||Oe===3&&(se&62914560)===se&&300>pt()-_l?(ye&2)===0&&La(e,0):eo|=i,Oa===se&&(Oa=0)),Qt(e)}function dg(e,t){t===0&&(t=lc()),e=Wi(e,t),e!==null&&(Ka(e,t),Qt(e))}function Sh(e){var t=e.memoizedState,i=0;t!==null&&(i=t.retryLane),dg(e,i)}function kh(e,t){var i=0;switch(e.tag){case 31:case 13:var a=e.stateNode,n=e.memoizedState;n!==null&&(i=n.retryLane);break;case 19:a=e.stateNode;break;case 22:a=e.stateNode._retryCache;break;default:throw Error(c(314))}a!==null&&a.delete(t),dg(e,i)}function wh(e,t){return vs(e,t)}var Ql=null,Ha=null,oo=!1,Kl=!1,co=!1,Gi=0;function Qt(e){e!==Ha&&e.next===null&&(Ha===null?Ql=Ha=e:Ha=Ha.next=e),Kl=!0,oo||(oo=!0,Nh())}function Rn(e,t){if(!co&&Kl){co=!0;do for(var i=!1,a=Ql;a!==null;){if(e!==0){var n=a.pendingLanes;if(n===0)var s=0;else{var r=a.suspendedLanes,o=a.pingedLanes;s=(1<<31-bt(42|e)+1)-1,s&=n&~(r&~o),s=s&201326741?s&201326741|1:s?s|2:0}s!==0&&(i=!0,hg(a,s))}else s=se,s=$n(a,a===Ae?s:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),(s&3)===0||Qa(a,s)||(i=!0,hg(a,s));a=a.next}while(i);co=!1}}function Ah(){gg()}function gg(){Kl=oo=!1;var e=0;Gi!==0&&Bh()&&(e=Gi);for(var t=pt(),i=null,a=Ql;a!==null;){var n=a.next,s=mg(a,t);s===0?(a.next=null,i===null?Ql=n:i.next=n,n===null&&(Ha=i)):(i=a,(e!==0||(s&3)!==0)&&(Kl=!0)),a=n}Ve!==0&&Ve!==5||Rn(e),Gi!==0&&(Gi=0)}function mg(e,t){for(var i=e.suspendedLanes,a=e.pingedLanes,n=e.expirationTimes,s=e.pendingLanes&-62914561;0<s;){var r=31-bt(s),o=1<<r,p=n[r];p===-1?((o&i)===0||(o&a)!==0)&&(n[r]=Zm(o,t)):p<=t&&(e.expiredLanes|=o),s&=~o}if(t=Ae,i=se,i=$n(e,e===t?i:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a=e.callbackNode,i===0||e===t&&(xe===2||xe===9)||e.cancelPendingCommit!==null)return a!==null&&a!==null&&js(a),e.callbackNode=null,e.callbackPriority=0;if((i&3)===0||Qa(e,i)){if(t=i&-i,t===e.callbackPriority)return t;switch(a!==null&&js(a),ws(i)){case 2:case 8:i=ac;break;case 32:i=Kn;break;case 268435456:i=nc;break;default:i=Kn}return a=fg.bind(null,e),i=vs(i,a),e.callbackPriority=t,e.callbackNode=i,t}return a!==null&&a!==null&&js(a),e.callbackPriority=2,e.callbackNode=null,2}function fg(e,t){if(Ve!==0&&Ve!==5)return e.callbackNode=null,e.callbackPriority=0,null;var i=e.callbackNode;if(Yl()&&e.callbackNode!==i)return null;var a=se;return a=$n(e,e===Ae?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a===0?null:(Kd(e,a,t),mg(e,pt()),e.callbackNode!=null&&e.callbackNode===i?fg.bind(null,e):null)}function hg(e,t){if(Yl())return null;Kd(e,t,!0)}function Nh(){Uh(function(){(ye&6)!==0?vs(ic,Ah):gg()})}function uo(){if(Gi===0){var e=wa;e===0&&(e=Xn,Xn<<=1,(Xn&261888)===0&&(Xn=256)),Gi=e}return Gi}function pg(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:al(""+e)}function yg(e,t){var i=t.ownerDocument.createElement("input");return i.name=t.name,i.value=t.value,e.id&&i.setAttribute("form",e.id),t.parentNode.insertBefore(i,t),e=new FormData(e),i.parentNode.removeChild(i),e}function Ch(e,t,i,a,n){if(t==="submit"&&i&&i.stateNode===n){var s=pg((n[rt]||null).action),r=a.submitter;r&&(t=(t=r[rt]||null)?pg(t.formAction):r.getAttribute("formAction"),t!==null&&(s=t,r=null));var o=new rl("action","action",null,a,n);e.push({event:o,listeners:[{instance:null,listener:function(){if(a.defaultPrevented){if(Gi!==0){var p=r?yg(n,r):new FormData(n);Rr(i,{pending:!0,data:p,method:n.method,action:s},null,p)}}else typeof s=="function"&&(o.preventDefault(),p=r?yg(n,r):new FormData(n),Rr(i,{pending:!0,data:p,method:n.method,action:s},s,p))},currentTarget:n}]})}}for(var go=0;go<Ys.length;go++){var mo=Ys[go],Th=mo.toLowerCase(),Eh=mo[0].toUpperCase()+mo.slice(1);qt(Th,"on"+Eh)}qt(Qc,"onAnimationEnd"),qt(Kc,"onAnimationIteration"),qt(Xc,"onAnimationStart"),qt("dblclick","onDoubleClick"),qt("focusin","onFocus"),qt("focusout","onBlur"),qt(Wf,"onTransitionRun"),qt(Ff,"onTransitionStart"),qt(Yf,"onTransitionCancel"),qt(Zc,"onTransitionEnd"),ua("onMouseEnter",["mouseout","mouseover"]),ua("onMouseLeave",["mouseout","mouseover"]),ua("onPointerEnter",["pointerout","pointerover"]),ua("onPointerLeave",["pointerout","pointerover"]),_i("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),_i("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),_i("onBeforeInput",["compositionend","keypress","textInput","paste"]),_i("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),_i("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),_i("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Mn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Rh=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Mn));function bg(e,t){t=(t&4)!==0;for(var i=0;i<e.length;i++){var a=e[i],n=a.event;a=a.listeners;e:{var s=void 0;if(t)for(var r=a.length-1;0<=r;r--){var o=a[r],p=o.instance,N=o.currentTarget;if(o=o.listener,p!==s&&n.isPropagationStopped())break e;s=o,n.currentTarget=N;try{s(n)}catch(M){ul(M)}n.currentTarget=null,s=p}else for(r=0;r<a.length;r++){if(o=a[r],p=o.instance,N=o.currentTarget,o=o.listener,p!==s&&n.isPropagationStopped())break e;s=o,n.currentTarget=N;try{s(n)}catch(M){ul(M)}n.currentTarget=null,s=p}}}}function le(e,t){var i=t[As];i===void 0&&(i=t[As]=new Set);var a=e+"__bubble";i.has(a)||(xg(t,e,2,!1),i.add(a))}function fo(e,t,i){var a=0;t&&(a|=4),xg(i,e,a,t)}var Xl="_reactListening"+Math.random().toString(36).slice(2);function ho(e){if(!e[Xl]){e[Xl]=!0,gc.forEach(function(i){i!=="selectionchange"&&(Rh.has(i)||fo(i,!1,e),fo(i,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Xl]||(t[Xl]=!0,fo("selectionchange",!1,t))}}function xg(e,t,i,a){switch(Qg(t)){case 2:var n=np;break;case 8:n=lp;break;default:n=Ro}i=n.bind(null,t,i,e),n=void 0,!zs||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(n=!0),a?n!==void 0?e.addEventListener(t,i,{capture:!0,passive:n}):e.addEventListener(t,i,!0):n!==void 0?e.addEventListener(t,i,{passive:n}):e.addEventListener(t,i,!1)}function po(e,t,i,a,n){var s=a;if((t&1)===0&&(t&2)===0&&a!==null)e:for(;;){if(a===null)return;var r=a.tag;if(r===3||r===4){var o=a.stateNode.containerInfo;if(o===n)break;if(r===4)for(r=a.return;r!==null;){var p=r.tag;if((p===3||p===4)&&r.stateNode.containerInfo===n)return;r=r.return}for(;o!==null;){if(r=ra(o),r===null)return;if(p=r.tag,p===5||p===6||p===26||p===27){a=s=r;continue e}o=o.parentNode}}a=a.return}wc(function(){var N=s,M=Ds(i),O=[];e:{var C=Jc.get(e);if(C!==void 0){var E=rl,P=e;switch(e){case"keypress":if(ll(i)===0)break e;case"keydown":case"keyup":E=kf;break;case"focusin":P="focus",E=Us;break;case"focusout":P="blur",E=Us;break;case"beforeblur":case"afterblur":E=Us;break;case"click":if(i.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":E=Cc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":E=df;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":E=Nf;break;case Qc:case Kc:case Xc:E=ff;break;case Zc:E=Tf;break;case"scroll":case"scrollend":E=cf;break;case"wheel":E=Rf;break;case"copy":case"cut":case"paste":E=pf;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":E=Ec;break;case"toggle":case"beforetoggle":E=Df}var Z=(t&4)!==0,we=!Z&&(e==="scroll"||e==="scrollend"),k=Z?C!==null?C+"Capture":null:C;Z=[];for(var x=N,A;x!==null;){var G=x;if(A=G.stateNode,G=G.tag,G!==5&&G!==26&&G!==27||A===null||k===null||(G=Ja(x,k),G!=null&&Z.push(Dn(x,G,A))),we)break;x=x.return}0<Z.length&&(C=new E(C,P,null,i,M),O.push({event:C,listeners:Z}))}}if((t&7)===0){e:{if(C=e==="mouseover"||e==="pointerover",E=e==="mouseout"||e==="pointerout",C&&i!==Ms&&(P=i.relatedTarget||i.fromElement)&&(ra(P)||P[sa]))break e;if((E||C)&&(C=M.window===M?M:(C=M.ownerDocument)?C.defaultView||C.parentWindow:window,E?(P=i.relatedTarget||i.toElement,E=N,P=P?ra(P):null,P!==null&&(we=g(P),Z=P.tag,P!==we||Z!==5&&Z!==27&&Z!==6)&&(P=null)):(E=null,P=N),E!==P)){if(Z=Cc,G="onMouseLeave",k="onMouseEnter",x="mouse",(e==="pointerout"||e==="pointerover")&&(Z=Ec,G="onPointerLeave",k="onPointerEnter",x="pointer"),we=E==null?C:Za(E),A=P==null?C:Za(P),C=new Z(G,x+"leave",E,i,M),C.target=we,C.relatedTarget=A,G=null,ra(M)===N&&(Z=new Z(k,x+"enter",P,i,M),Z.target=A,Z.relatedTarget=we,G=Z),we=G,E&&P)t:{for(Z=Mh,k=E,x=P,A=0,G=k;G;G=Z(G))A++;G=0;for(var K=x;K;K=Z(K))G++;for(;0<A-G;)k=Z(k),A--;for(;0<G-A;)x=Z(x),G--;for(;A--;){if(k===x||x!==null&&k===x.alternate){Z=k;break t}k=Z(k),x=Z(x)}Z=null}else Z=null;E!==null&&vg(O,C,E,Z,!1),P!==null&&we!==null&&vg(O,we,P,Z,!0)}}e:{if(C=N?Za(N):window,E=C.nodeName&&C.nodeName.toLowerCase(),E==="select"||E==="input"&&C.type==="file")var ge=Lc;else if(Oc(C))if(Uc)ge=If;else{ge=qf;var F=Hf}else E=C.nodeName,!E||E.toLowerCase()!=="input"||C.type!=="checkbox"&&C.type!=="radio"?N&&Rs(N.elementType)&&(ge=Lc):ge=_f;if(ge&&(ge=ge(e,N))){Bc(O,ge,i,M);break e}F&&F(e,C,N),e==="focusout"&&N&&C.type==="number"&&N.memoizedProps.value!=null&&Es(C,"number",C.value)}switch(F=N?Za(N):window,e){case"focusin":(Oc(F)||F.contentEditable==="true")&&(pa=F,Vs=N,rn=null);break;case"focusout":rn=Vs=pa=null;break;case"mousedown":Ws=!0;break;case"contextmenu":case"mouseup":case"dragend":Ws=!1,Fc(O,i,M);break;case"selectionchange":if(Vf)break;case"keydown":case"keyup":Fc(O,i,M)}var ie;if(qs)e:{switch(e){case"compositionstart":var re="onCompositionStart";break e;case"compositionend":re="onCompositionEnd";break e;case"compositionupdate":re="onCompositionUpdate";break e}re=void 0}else ha?Gc(e,i)&&(re="onCompositionEnd"):e==="keydown"&&i.keyCode===229&&(re="onCompositionStart");re&&(Rc&&i.locale!=="ko"&&(ha||re!=="onCompositionStart"?re==="onCompositionEnd"&&ha&&(ie=Ac()):(yi=M,Os="value"in yi?yi.value:yi.textContent,ha=!0)),F=Zl(N,re),0<F.length&&(re=new Tc(re,e,null,i,M),O.push({event:re,listeners:F}),ie?re.data=ie:(ie=zc(i),ie!==null&&(re.data=ie)))),(ie=zf?Of(e,i):Bf(e,i))&&(re=Zl(N,"onBeforeInput"),0<re.length&&(F=new Tc("onBeforeInput","beforeinput",null,i,M),O.push({event:F,listeners:re}),F.data=ie)),Ch(O,e,N,i,M)}bg(O,t)})}function Dn(e,t,i){return{instance:e,listener:t,currentTarget:i}}function Zl(e,t){for(var i=t+"Capture",a=[];e!==null;){var n=e,s=n.stateNode;if(n=n.tag,n!==5&&n!==26&&n!==27||s===null||(n=Ja(e,i),n!=null&&a.unshift(Dn(e,n,s)),n=Ja(e,t),n!=null&&a.push(Dn(e,n,s))),e.tag===3)return a;e=e.return}return[]}function Mh(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function vg(e,t,i,a,n){for(var s=t._reactName,r=[];i!==null&&i!==a;){var o=i,p=o.alternate,N=o.stateNode;if(o=o.tag,p!==null&&p===a)break;o!==5&&o!==26&&o!==27||N===null||(p=N,n?(N=Ja(i,s),N!=null&&r.unshift(Dn(i,N,p))):n||(N=Ja(i,s),N!=null&&r.push(Dn(i,N,p)))),i=i.return}r.length!==0&&e.push({event:t,listeners:r})}var Dh=/\r\n?/g,Gh=/\u0000|\uFFFD/g;function jg(e){return(typeof e=="string"?e:""+e).replace(Dh,`
`).replace(Gh,"")}function Sg(e,t){return t=jg(t),jg(e)===t}function ke(e,t,i,a,n,s){switch(i){case"children":typeof a=="string"?t==="body"||t==="textarea"&&a===""||ga(e,a):(typeof a=="number"||typeof a=="bigint")&&t!=="body"&&ga(e,""+a);break;case"className":tl(e,"class",a);break;case"tabIndex":tl(e,"tabindex",a);break;case"dir":case"role":case"viewBox":case"width":case"height":tl(e,i,a);break;case"style":Sc(e,a,s);break;case"data":if(t!=="object"){tl(e,"data",a);break}case"src":case"href":if(a===""&&(t!=="a"||i!=="href")){e.removeAttribute(i);break}if(a==null||typeof a=="function"||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(i);break}a=al(""+a),e.setAttribute(i,a);break;case"action":case"formAction":if(typeof a=="function"){e.setAttribute(i,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof s=="function"&&(i==="formAction"?(t!=="input"&&ke(e,t,"name",n.name,n,null),ke(e,t,"formEncType",n.formEncType,n,null),ke(e,t,"formMethod",n.formMethod,n,null),ke(e,t,"formTarget",n.formTarget,n,null)):(ke(e,t,"encType",n.encType,n,null),ke(e,t,"method",n.method,n,null),ke(e,t,"target",n.target,n,null)));if(a==null||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(i);break}a=al(""+a),e.setAttribute(i,a);break;case"onClick":a!=null&&(e.onclick=Xt);break;case"onScroll":a!=null&&le("scroll",e);break;case"onScrollEnd":a!=null&&le("scrollend",e);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(c(61));if(i=a.__html,i!=null){if(n.children!=null)throw Error(c(60));e.innerHTML=i}}break;case"multiple":e.multiple=a&&typeof a!="function"&&typeof a!="symbol";break;case"muted":e.muted=a&&typeof a!="function"&&typeof a!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(a==null||typeof a=="function"||typeof a=="boolean"||typeof a=="symbol"){e.removeAttribute("xlink:href");break}i=al(""+a),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",i);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(i,""+a):e.removeAttribute(i);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(i,""):e.removeAttribute(i);break;case"capture":case"download":a===!0?e.setAttribute(i,""):a!==!1&&a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(i,a):e.removeAttribute(i);break;case"cols":case"rows":case"size":case"span":a!=null&&typeof a!="function"&&typeof a!="symbol"&&!isNaN(a)&&1<=a?e.setAttribute(i,a):e.removeAttribute(i);break;case"rowSpan":case"start":a==null||typeof a=="function"||typeof a=="symbol"||isNaN(a)?e.removeAttribute(i):e.setAttribute(i,a);break;case"popover":le("beforetoggle",e),le("toggle",e),el(e,"popover",a);break;case"xlinkActuate":Kt(e,"http://www.w3.org/1999/xlink","xlink:actuate",a);break;case"xlinkArcrole":Kt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",a);break;case"xlinkRole":Kt(e,"http://www.w3.org/1999/xlink","xlink:role",a);break;case"xlinkShow":Kt(e,"http://www.w3.org/1999/xlink","xlink:show",a);break;case"xlinkTitle":Kt(e,"http://www.w3.org/1999/xlink","xlink:title",a);break;case"xlinkType":Kt(e,"http://www.w3.org/1999/xlink","xlink:type",a);break;case"xmlBase":Kt(e,"http://www.w3.org/XML/1998/namespace","xml:base",a);break;case"xmlLang":Kt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",a);break;case"xmlSpace":Kt(e,"http://www.w3.org/XML/1998/namespace","xml:space",a);break;case"is":el(e,"is",a);break;case"innerText":case"textContent":break;default:(!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(i=rf.get(i)||i,el(e,i,a))}}function yo(e,t,i,a,n,s){switch(i){case"style":Sc(e,a,s);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(c(61));if(i=a.__html,i!=null){if(n.children!=null)throw Error(c(60));e.innerHTML=i}}break;case"children":typeof a=="string"?ga(e,a):(typeof a=="number"||typeof a=="bigint")&&ga(e,""+a);break;case"onScroll":a!=null&&le("scroll",e);break;case"onScrollEnd":a!=null&&le("scrollend",e);break;case"onClick":a!=null&&(e.onclick=Xt);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!mc.hasOwnProperty(i))e:{if(i[0]==="o"&&i[1]==="n"&&(n=i.endsWith("Capture"),t=i.slice(2,n?i.length-7:void 0),s=e[rt]||null,s=s!=null?s[i]:null,typeof s=="function"&&e.removeEventListener(t,s,n),typeof a=="function")){typeof s!="function"&&s!==null&&(i in e?e[i]=null:e.hasAttribute(i)&&e.removeAttribute(i)),e.addEventListener(t,a,n);break e}i in e?e[i]=a:a===!0?e.setAttribute(i,""):el(e,i,a)}}}function et(e,t,i){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":le("error",e),le("load",e);var a=!1,n=!1,s;for(s in i)if(i.hasOwnProperty(s)){var r=i[s];if(r!=null)switch(s){case"src":a=!0;break;case"srcSet":n=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(c(137,t));default:ke(e,t,s,r,i,null)}}n&&ke(e,t,"srcSet",i.srcSet,i,null),a&&ke(e,t,"src",i.src,i,null);return;case"input":le("invalid",e);var o=s=r=n=null,p=null,N=null;for(a in i)if(i.hasOwnProperty(a)){var M=i[a];if(M!=null)switch(a){case"name":n=M;break;case"type":r=M;break;case"checked":p=M;break;case"defaultChecked":N=M;break;case"value":s=M;break;case"defaultValue":o=M;break;case"children":case"dangerouslySetInnerHTML":if(M!=null)throw Error(c(137,t));break;default:ke(e,t,a,M,i,null)}}bc(e,s,o,p,N,r,n,!1);return;case"select":le("invalid",e),a=r=s=null;for(n in i)if(i.hasOwnProperty(n)&&(o=i[n],o!=null))switch(n){case"value":s=o;break;case"defaultValue":r=o;break;case"multiple":a=o;default:ke(e,t,n,o,i,null)}t=s,i=r,e.multiple=!!a,t!=null?da(e,!!a,t,!1):i!=null&&da(e,!!a,i,!0);return;case"textarea":le("invalid",e),s=n=a=null;for(r in i)if(i.hasOwnProperty(r)&&(o=i[r],o!=null))switch(r){case"value":a=o;break;case"defaultValue":n=o;break;case"children":s=o;break;case"dangerouslySetInnerHTML":if(o!=null)throw Error(c(91));break;default:ke(e,t,r,o,i,null)}vc(e,a,n,s);return;case"option":for(p in i)if(i.hasOwnProperty(p)&&(a=i[p],a!=null))switch(p){case"selected":e.selected=a&&typeof a!="function"&&typeof a!="symbol";break;default:ke(e,t,p,a,i,null)}return;case"dialog":le("beforetoggle",e),le("toggle",e),le("cancel",e),le("close",e);break;case"iframe":case"object":le("load",e);break;case"video":case"audio":for(a=0;a<Mn.length;a++)le(Mn[a],e);break;case"image":le("error",e),le("load",e);break;case"details":le("toggle",e);break;case"embed":case"source":case"link":le("error",e),le("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(N in i)if(i.hasOwnProperty(N)&&(a=i[N],a!=null))switch(N){case"children":case"dangerouslySetInnerHTML":throw Error(c(137,t));default:ke(e,t,N,a,i,null)}return;default:if(Rs(t)){for(M in i)i.hasOwnProperty(M)&&(a=i[M],a!==void 0&&yo(e,t,M,a,i,void 0));return}}for(o in i)i.hasOwnProperty(o)&&(a=i[o],a!=null&&ke(e,t,o,a,i,null))}function zh(e,t,i,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var n=null,s=null,r=null,o=null,p=null,N=null,M=null;for(E in i){var O=i[E];if(i.hasOwnProperty(E)&&O!=null)switch(E){case"checked":break;case"value":break;case"defaultValue":p=O;default:a.hasOwnProperty(E)||ke(e,t,E,null,a,O)}}for(var C in a){var E=a[C];if(O=i[C],a.hasOwnProperty(C)&&(E!=null||O!=null))switch(C){case"type":s=E;break;case"name":n=E;break;case"checked":N=E;break;case"defaultChecked":M=E;break;case"value":r=E;break;case"defaultValue":o=E;break;case"children":case"dangerouslySetInnerHTML":if(E!=null)throw Error(c(137,t));break;default:E!==O&&ke(e,t,C,E,a,O)}}Ts(e,r,o,p,N,M,s,n);return;case"select":E=r=o=C=null;for(s in i)if(p=i[s],i.hasOwnProperty(s)&&p!=null)switch(s){case"value":break;case"multiple":E=p;default:a.hasOwnProperty(s)||ke(e,t,s,null,a,p)}for(n in a)if(s=a[n],p=i[n],a.hasOwnProperty(n)&&(s!=null||p!=null))switch(n){case"value":C=s;break;case"defaultValue":o=s;break;case"multiple":r=s;default:s!==p&&ke(e,t,n,s,a,p)}t=o,i=r,a=E,C!=null?da(e,!!i,C,!1):!!a!=!!i&&(t!=null?da(e,!!i,t,!0):da(e,!!i,i?[]:"",!1));return;case"textarea":E=C=null;for(o in i)if(n=i[o],i.hasOwnProperty(o)&&n!=null&&!a.hasOwnProperty(o))switch(o){case"value":break;case"children":break;default:ke(e,t,o,null,a,n)}for(r in a)if(n=a[r],s=i[r],a.hasOwnProperty(r)&&(n!=null||s!=null))switch(r){case"value":C=n;break;case"defaultValue":E=n;break;case"children":break;case"dangerouslySetInnerHTML":if(n!=null)throw Error(c(91));break;default:n!==s&&ke(e,t,r,n,a,s)}xc(e,C,E);return;case"option":for(var P in i)if(C=i[P],i.hasOwnProperty(P)&&C!=null&&!a.hasOwnProperty(P))switch(P){case"selected":e.selected=!1;break;default:ke(e,t,P,null,a,C)}for(p in a)if(C=a[p],E=i[p],a.hasOwnProperty(p)&&C!==E&&(C!=null||E!=null))switch(p){case"selected":e.selected=C&&typeof C!="function"&&typeof C!="symbol";break;default:ke(e,t,p,C,a,E)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Z in i)C=i[Z],i.hasOwnProperty(Z)&&C!=null&&!a.hasOwnProperty(Z)&&ke(e,t,Z,null,a,C);for(N in a)if(C=a[N],E=i[N],a.hasOwnProperty(N)&&C!==E&&(C!=null||E!=null))switch(N){case"children":case"dangerouslySetInnerHTML":if(C!=null)throw Error(c(137,t));break;default:ke(e,t,N,C,a,E)}return;default:if(Rs(t)){for(var we in i)C=i[we],i.hasOwnProperty(we)&&C!==void 0&&!a.hasOwnProperty(we)&&yo(e,t,we,void 0,a,C);for(M in a)C=a[M],E=i[M],!a.hasOwnProperty(M)||C===E||C===void 0&&E===void 0||yo(e,t,M,C,a,E);return}}for(var k in i)C=i[k],i.hasOwnProperty(k)&&C!=null&&!a.hasOwnProperty(k)&&ke(e,t,k,null,a,C);for(O in a)C=a[O],E=i[O],!a.hasOwnProperty(O)||C===E||C==null&&E==null||ke(e,t,O,C,a,E)}function kg(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Oh(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,i=performance.getEntriesByType("resource"),a=0;a<i.length;a++){var n=i[a],s=n.transferSize,r=n.initiatorType,o=n.duration;if(s&&o&&kg(r)){for(r=0,o=n.responseEnd,a+=1;a<i.length;a++){var p=i[a],N=p.startTime;if(N>o)break;var M=p.transferSize,O=p.initiatorType;M&&kg(O)&&(p=p.responseEnd,r+=M*(p<o?1:(o-N)/(p-N)))}if(--a,t+=8*(s+r)/(n.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var bo=null,xo=null;function Jl(e){return e.nodeType===9?e:e.ownerDocument}function wg(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Ag(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function vo(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var jo=null;function Bh(){var e=window.event;return e&&e.type==="popstate"?e===jo?!1:(jo=e,!0):(jo=null,!1)}var Ng=typeof setTimeout=="function"?setTimeout:void 0,Lh=typeof clearTimeout=="function"?clearTimeout:void 0,Cg=typeof Promise=="function"?Promise:void 0,Uh=typeof queueMicrotask=="function"?queueMicrotask:typeof Cg<"u"?function(e){return Cg.resolve(null).then(e).catch(Hh)}:Ng;function Hh(e){setTimeout(function(){throw e})}function zi(e){return e==="head"}function Tg(e,t){var i=t,a=0;do{var n=i.nextSibling;if(e.removeChild(i),n&&n.nodeType===8)if(i=n.data,i==="/$"||i==="/&"){if(a===0){e.removeChild(n),Pa(t);return}a--}else if(i==="$"||i==="$?"||i==="$~"||i==="$!"||i==="&")a++;else if(i==="html")Gn(e.ownerDocument.documentElement);else if(i==="head"){i=e.ownerDocument.head,Gn(i);for(var s=i.firstChild;s;){var r=s.nextSibling,o=s.nodeName;s[Xa]||o==="SCRIPT"||o==="STYLE"||o==="LINK"&&s.rel.toLowerCase()==="stylesheet"||i.removeChild(s),s=r}}else i==="body"&&Gn(e.ownerDocument.body);i=n}while(i);Pa(t)}function Eg(e,t){var i=e;e=0;do{var a=i.nextSibling;if(i.nodeType===1?t?(i._stashedDisplay=i.style.display,i.style.display="none"):(i.style.display=i._stashedDisplay||"",i.getAttribute("style")===""&&i.removeAttribute("style")):i.nodeType===3&&(t?(i._stashedText=i.nodeValue,i.nodeValue=""):i.nodeValue=i._stashedText||""),a&&a.nodeType===8)if(i=a.data,i==="/$"){if(e===0)break;e--}else i!=="$"&&i!=="$?"&&i!=="$~"&&i!=="$!"||e++;i=a}while(i)}function So(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var i=t;switch(t=t.nextSibling,i.nodeName){case"HTML":case"HEAD":case"BODY":So(i),Ns(i);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(i.rel.toLowerCase()==="stylesheet")continue}e.removeChild(i)}}function qh(e,t,i,a){for(;e.nodeType===1;){var n=i;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!a&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(a){if(!e[Xa])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(s=e.getAttribute("rel"),s==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(s!==n.rel||e.getAttribute("href")!==(n.href==null||n.href===""?null:n.href)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin)||e.getAttribute("title")!==(n.title==null?null:n.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(s=e.getAttribute("src"),(s!==(n.src==null?null:n.src)||e.getAttribute("type")!==(n.type==null?null:n.type)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin))&&s&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var s=n.name==null?null:""+n.name;if(n.type==="hidden"&&e.getAttribute("name")===s)return e}else return e;if(e=Lt(e.nextSibling),e===null)break}return null}function _h(e,t,i){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!i||(e=Lt(e.nextSibling),e===null))return null;return e}function Rg(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=Lt(e.nextSibling),e===null))return null;return e}function ko(e){return e.data==="$?"||e.data==="$~"}function wo(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Ih(e,t){var i=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||i.readyState!=="loading")t();else{var a=function(){t(),i.removeEventListener("DOMContentLoaded",a)};i.addEventListener("DOMContentLoaded",a),e._reactRetry=a}}function Lt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var Ao=null;function Mg(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var i=e.data;if(i==="/$"||i==="/&"){if(t===0)return Lt(e.nextSibling);t--}else i!=="$"&&i!=="$!"&&i!=="$?"&&i!=="$~"&&i!=="&"||t++}e=e.nextSibling}return null}function Dg(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var i=e.data;if(i==="$"||i==="$!"||i==="$?"||i==="$~"||i==="&"){if(t===0)return e;t--}else i!=="/$"&&i!=="/&"||t++}e=e.previousSibling}return null}function Gg(e,t,i){switch(t=Jl(i),e){case"html":if(e=t.documentElement,!e)throw Error(c(452));return e;case"head":if(e=t.head,!e)throw Error(c(453));return e;case"body":if(e=t.body,!e)throw Error(c(454));return e;default:throw Error(c(451))}}function Gn(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Ns(e)}var Ut=new Map,zg=new Set;function $l(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var gi=H.d;H.d={f:Ph,r:Vh,D:Wh,C:Fh,L:Yh,m:Qh,X:Xh,S:Kh,M:Zh};function Ph(){var e=gi.f(),t=Vl();return e||t}function Vh(e){var t=oa(e);t!==null&&t.tag===5&&t.type==="form"?Zu(t):gi.r(e)}var qa=typeof document>"u"?null:document;function Og(e,t,i){var a=qa;if(a&&typeof t=="string"&&t){var n=Rt(t);n='link[rel="'+e+'"][href="'+n+'"]',typeof i=="string"&&(n+='[crossorigin="'+i+'"]'),zg.has(n)||(zg.add(n),e={rel:e,crossOrigin:i,href:t},a.querySelector(n)===null&&(t=a.createElement("link"),et(t,"link",e),Ye(t),a.head.appendChild(t)))}}function Wh(e){gi.D(e),Og("dns-prefetch",e,null)}function Fh(e,t){gi.C(e,t),Og("preconnect",e,t)}function Yh(e,t,i){gi.L(e,t,i);var a=qa;if(a&&e&&t){var n='link[rel="preload"][as="'+Rt(t)+'"]';t==="image"&&i&&i.imageSrcSet?(n+='[imagesrcset="'+Rt(i.imageSrcSet)+'"]',typeof i.imageSizes=="string"&&(n+='[imagesizes="'+Rt(i.imageSizes)+'"]')):n+='[href="'+Rt(e)+'"]';var s=n;switch(t){case"style":s=_a(e);break;case"script":s=Ia(e)}Ut.has(s)||(e=S({rel:"preload",href:t==="image"&&i&&i.imageSrcSet?void 0:e,as:t},i),Ut.set(s,e),a.querySelector(n)!==null||t==="style"&&a.querySelector(zn(s))||t==="script"&&a.querySelector(On(s))||(t=a.createElement("link"),et(t,"link",e),Ye(t),a.head.appendChild(t)))}}function Qh(e,t){gi.m(e,t);var i=qa;if(i&&e){var a=t&&typeof t.as=="string"?t.as:"script",n='link[rel="modulepreload"][as="'+Rt(a)+'"][href="'+Rt(e)+'"]',s=n;switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":s=Ia(e)}if(!Ut.has(s)&&(e=S({rel:"modulepreload",href:e},t),Ut.set(s,e),i.querySelector(n)===null)){switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(i.querySelector(On(s)))return}a=i.createElement("link"),et(a,"link",e),Ye(a),i.head.appendChild(a)}}}function Kh(e,t,i){gi.S(e,t,i);var a=qa;if(a&&e){var n=ca(a).hoistableStyles,s=_a(e);t=t||"default";var r=n.get(s);if(!r){var o={loading:0,preload:null};if(r=a.querySelector(zn(s)))o.loading=5;else{e=S({rel:"stylesheet",href:e,"data-precedence":t},i),(i=Ut.get(s))&&No(e,i);var p=r=a.createElement("link");Ye(p),et(p,"link",e),p._p=new Promise(function(N,M){p.onload=N,p.onerror=M}),p.addEventListener("load",function(){o.loading|=1}),p.addEventListener("error",function(){o.loading|=2}),o.loading|=4,es(r,t,a)}r={type:"stylesheet",instance:r,count:1,state:o},n.set(s,r)}}}function Xh(e,t){gi.X(e,t);var i=qa;if(i&&e){var a=ca(i).hoistableScripts,n=Ia(e),s=a.get(n);s||(s=i.querySelector(On(n)),s||(e=S({src:e,async:!0},t),(t=Ut.get(n))&&Co(e,t),s=i.createElement("script"),Ye(s),et(s,"link",e),i.head.appendChild(s)),s={type:"script",instance:s,count:1,state:null},a.set(n,s))}}function Zh(e,t){gi.M(e,t);var i=qa;if(i&&e){var a=ca(i).hoistableScripts,n=Ia(e),s=a.get(n);s||(s=i.querySelector(On(n)),s||(e=S({src:e,async:!0,type:"module"},t),(t=Ut.get(n))&&Co(e,t),s=i.createElement("script"),Ye(s),et(s,"link",e),i.head.appendChild(s)),s={type:"script",instance:s,count:1,state:null},a.set(n,s))}}function Bg(e,t,i,a){var n=(n=W.current)?$l(n):null;if(!n)throw Error(c(446));switch(e){case"meta":case"title":return null;case"style":return typeof i.precedence=="string"&&typeof i.href=="string"?(t=_a(i.href),i=ca(n).hoistableStyles,a=i.get(t),a||(a={type:"style",instance:null,count:0,state:null},i.set(t,a)),a):{type:"void",instance:null,count:0,state:null};case"link":if(i.rel==="stylesheet"&&typeof i.href=="string"&&typeof i.precedence=="string"){e=_a(i.href);var s=ca(n).hoistableStyles,r=s.get(e);if(r||(n=n.ownerDocument||n,r={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},s.set(e,r),(s=n.querySelector(zn(e)))&&!s._p&&(r.instance=s,r.state.loading=5),Ut.has(e)||(i={rel:"preload",as:"style",href:i.href,crossOrigin:i.crossOrigin,integrity:i.integrity,media:i.media,hrefLang:i.hrefLang,referrerPolicy:i.referrerPolicy},Ut.set(e,i),s||Jh(n,e,i,r.state))),t&&a===null)throw Error(c(528,""));return r}if(t&&a!==null)throw Error(c(529,""));return null;case"script":return t=i.async,i=i.src,typeof i=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Ia(i),i=ca(n).hoistableScripts,a=i.get(t),a||(a={type:"script",instance:null,count:0,state:null},i.set(t,a)),a):{type:"void",instance:null,count:0,state:null};default:throw Error(c(444,e))}}function _a(e){return'href="'+Rt(e)+'"'}function zn(e){return'link[rel="stylesheet"]['+e+"]"}function Lg(e){return S({},e,{"data-precedence":e.precedence,precedence:null})}function Jh(e,t,i,a){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?a.loading=1:(t=e.createElement("link"),a.preload=t,t.addEventListener("load",function(){return a.loading|=1}),t.addEventListener("error",function(){return a.loading|=2}),et(t,"link",i),Ye(t),e.head.appendChild(t))}function Ia(e){return'[src="'+Rt(e)+'"]'}function On(e){return"script[async]"+e}function Ug(e,t,i){if(t.count++,t.instance===null)switch(t.type){case"style":var a=e.querySelector('style[data-href~="'+Rt(i.href)+'"]');if(a)return t.instance=a,Ye(a),a;var n=S({},i,{"data-href":i.href,"data-precedence":i.precedence,href:null,precedence:null});return a=(e.ownerDocument||e).createElement("style"),Ye(a),et(a,"style",n),es(a,i.precedence,e),t.instance=a;case"stylesheet":n=_a(i.href);var s=e.querySelector(zn(n));if(s)return t.state.loading|=4,t.instance=s,Ye(s),s;a=Lg(i),(n=Ut.get(n))&&No(a,n),s=(e.ownerDocument||e).createElement("link"),Ye(s);var r=s;return r._p=new Promise(function(o,p){r.onload=o,r.onerror=p}),et(s,"link",a),t.state.loading|=4,es(s,i.precedence,e),t.instance=s;case"script":return s=Ia(i.src),(n=e.querySelector(On(s)))?(t.instance=n,Ye(n),n):(a=i,(n=Ut.get(s))&&(a=S({},i),Co(a,n)),e=e.ownerDocument||e,n=e.createElement("script"),Ye(n),et(n,"link",a),e.head.appendChild(n),t.instance=n);case"void":return null;default:throw Error(c(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(a=t.instance,t.state.loading|=4,es(a,i.precedence,e));return t.instance}function es(e,t,i){for(var a=i.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),n=a.length?a[a.length-1]:null,s=n,r=0;r<a.length;r++){var o=a[r];if(o.dataset.precedence===t)s=o;else if(s!==n)break}s?s.parentNode.insertBefore(e,s.nextSibling):(t=i.nodeType===9?i.head:i,t.insertBefore(e,t.firstChild))}function No(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Co(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var ts=null;function Hg(e,t,i){if(ts===null){var a=new Map,n=ts=new Map;n.set(i,a)}else n=ts,a=n.get(i),a||(a=new Map,n.set(i,a));if(a.has(e))return a;for(a.set(e,null),i=i.getElementsByTagName(e),n=0;n<i.length;n++){var s=i[n];if(!(s[Xa]||s[Xe]||e==="link"&&s.getAttribute("rel")==="stylesheet")&&s.namespaceURI!=="http://www.w3.org/2000/svg"){var r=s.getAttribute(t)||"";r=e+r;var o=a.get(r);o?o.push(s):a.set(r,[s])}}return a}function qg(e,t,i){e=e.ownerDocument||e,e.head.insertBefore(i,t==="title"?e.querySelector("head > title"):null)}function $h(e,t,i){if(i===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function _g(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function ep(e,t,i,a){if(i.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(i.state.loading&4)===0){if(i.instance===null){var n=_a(a.href),s=t.querySelector(zn(n));if(s){t=s._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=is.bind(e),t.then(e,e)),i.state.loading|=4,i.instance=s,Ye(s);return}s=t.ownerDocument||t,a=Lg(a),(n=Ut.get(n))&&No(a,n),s=s.createElement("link"),Ye(s);var r=s;r._p=new Promise(function(o,p){r.onload=o,r.onerror=p}),et(s,"link",a),i.instance=s}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(i,t),(t=i.state.preload)&&(i.state.loading&3)===0&&(e.count++,i=is.bind(e),t.addEventListener("load",i),t.addEventListener("error",i))}}var To=0;function tp(e,t){return e.stylesheets&&e.count===0&&ns(e,e.stylesheets),0<e.count||0<e.imgCount?function(i){var a=setTimeout(function(){if(e.stylesheets&&ns(e,e.stylesheets),e.unsuspend){var s=e.unsuspend;e.unsuspend=null,s()}},6e4+t);0<e.imgBytes&&To===0&&(To=62500*Oh());var n=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&ns(e,e.stylesheets),e.unsuspend)){var s=e.unsuspend;e.unsuspend=null,s()}},(e.imgBytes>To?50:800)+t);return e.unsuspend=i,function(){e.unsuspend=null,clearTimeout(a),clearTimeout(n)}}:null}function is(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)ns(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var as=null;function ns(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,as=new Map,t.forEach(ip,e),as=null,is.call(e))}function ip(e,t){if(!(t.state.loading&4)){var i=as.get(e);if(i)var a=i.get(null);else{i=new Map,as.set(e,i);for(var n=e.querySelectorAll("link[data-precedence],style[data-precedence]"),s=0;s<n.length;s++){var r=n[s];(r.nodeName==="LINK"||r.getAttribute("media")!=="not all")&&(i.set(r.dataset.precedence,r),a=r)}a&&i.set(null,a)}n=t.instance,r=n.getAttribute("data-precedence"),s=i.get(r)||a,s===a&&i.set(null,n),i.set(r,n),this.count++,a=is.bind(this),n.addEventListener("load",a),n.addEventListener("error",a),s?s.parentNode.insertBefore(n,s.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(n,e.firstChild)),t.state.loading|=4}}var Bn={$$typeof:fe,Provider:null,Consumer:null,_currentValue:X,_currentValue2:X,_threadCount:0};function ap(e,t,i,a,n,s,r,o,p){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ss(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ss(0),this.hiddenUpdates=Ss(null),this.identifierPrefix=a,this.onUncaughtError=n,this.onCaughtError=s,this.onRecoverableError=r,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=p,this.incompleteTransitions=new Map}function Ig(e,t,i,a,n,s,r,o,p,N,M,O){return e=new ap(e,t,i,r,p,N,M,O,o),t=1,s===!0&&(t|=24),s=vt(3,null,null,t),e.current=s,s.stateNode=e,t=sr(),t.refCount++,e.pooledCache=t,t.refCount++,s.memoizedState={element:a,isDehydrated:i,cache:t},ur(s),e}function Pg(e){return e?(e=xa,e):xa}function Vg(e,t,i,a,n,s){n=Pg(n),a.context===null?a.context=n:a.pendingContext=n,a=ki(t),a.payload={element:i},s=s===void 0?null:s,s!==null&&(a.callback=s),i=wi(e,a,t),i!==null&&(mt(i,e,t),fn(i,e,t))}function Wg(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var i=e.retryLane;e.retryLane=i!==0&&i<t?i:t}}function Eo(e,t){Wg(e,t),(e=e.alternate)&&Wg(e,t)}function Fg(e){if(e.tag===13||e.tag===31){var t=Wi(e,67108864);t!==null&&mt(t,e,67108864),Eo(e,67108864)}}function Yg(e){if(e.tag===13||e.tag===31){var t=At();t=ks(t);var i=Wi(e,t);i!==null&&mt(i,e,t),Eo(e,t)}}var ls=!0;function np(e,t,i,a){var n=R.T;R.T=null;var s=H.p;try{H.p=2,Ro(e,t,i,a)}finally{H.p=s,R.T=n}}function lp(e,t,i,a){var n=R.T;R.T=null;var s=H.p;try{H.p=8,Ro(e,t,i,a)}finally{H.p=s,R.T=n}}function Ro(e,t,i,a){if(ls){var n=Mo(a);if(n===null)po(e,t,a,ss,i),Kg(e,a);else if(rp(n,e,t,i,a))a.stopPropagation();else if(Kg(e,a),t&4&&-1<sp.indexOf(e)){for(;n!==null;){var s=oa(n);if(s!==null)switch(s.tag){case 3:if(s=s.stateNode,s.current.memoizedState.isDehydrated){var r=qi(s.pendingLanes);if(r!==0){var o=s;for(o.pendingLanes|=2,o.entangledLanes|=2;r;){var p=1<<31-bt(r);o.entanglements[1]|=p,r&=~p}Qt(s),(ye&6)===0&&(Il=pt()+500,Rn(0))}}break;case 31:case 13:o=Wi(s,2),o!==null&&mt(o,s,2),Vl(),Eo(s,2)}if(s=Mo(a),s===null&&po(e,t,a,ss,i),s===n)break;n=s}n!==null&&a.stopPropagation()}else po(e,t,a,null,i)}}function Mo(e){return e=Ds(e),Do(e)}var ss=null;function Do(e){if(ss=null,e=ra(e),e!==null){var t=g(e);if(t===null)e=null;else{var i=t.tag;if(i===13){if(e=j(t),e!==null)return e;e=null}else if(i===31){if(e=h(t),e!==null)return e;e=null}else if(i===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return ss=e,null}function Qg(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Vm()){case ic:return 2;case ac:return 8;case Kn:case Wm:return 32;case nc:return 268435456;default:return 32}default:return 32}}var Go=!1,Oi=null,Bi=null,Li=null,Ln=new Map,Un=new Map,Ui=[],sp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Kg(e,t){switch(e){case"focusin":case"focusout":Oi=null;break;case"dragenter":case"dragleave":Bi=null;break;case"mouseover":case"mouseout":Li=null;break;case"pointerover":case"pointerout":Ln.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Un.delete(t.pointerId)}}function Hn(e,t,i,a,n,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:i,eventSystemFlags:a,nativeEvent:s,targetContainers:[n]},t!==null&&(t=oa(t),t!==null&&Fg(t)),e):(e.eventSystemFlags|=a,t=e.targetContainers,n!==null&&t.indexOf(n)===-1&&t.push(n),e)}function rp(e,t,i,a,n){switch(t){case"focusin":return Oi=Hn(Oi,e,t,i,a,n),!0;case"dragenter":return Bi=Hn(Bi,e,t,i,a,n),!0;case"mouseover":return Li=Hn(Li,e,t,i,a,n),!0;case"pointerover":var s=n.pointerId;return Ln.set(s,Hn(Ln.get(s)||null,e,t,i,a,n)),!0;case"gotpointercapture":return s=n.pointerId,Un.set(s,Hn(Un.get(s)||null,e,t,i,a,n)),!0}return!1}function Xg(e){var t=ra(e.target);if(t!==null){var i=g(t);if(i!==null){if(t=i.tag,t===13){if(t=j(i),t!==null){e.blockedOn=t,uc(e.priority,function(){Yg(i)});return}}else if(t===31){if(t=h(i),t!==null){e.blockedOn=t,uc(e.priority,function(){Yg(i)});return}}else if(t===3&&i.stateNode.current.memoizedState.isDehydrated){e.blockedOn=i.tag===3?i.stateNode.containerInfo:null;return}}}e.blockedOn=null}function rs(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var i=Mo(e.nativeEvent);if(i===null){i=e.nativeEvent;var a=new i.constructor(i.type,i);Ms=a,i.target.dispatchEvent(a),Ms=null}else return t=oa(i),t!==null&&Fg(t),e.blockedOn=i,!1;t.shift()}return!0}function Zg(e,t,i){rs(e)&&i.delete(t)}function op(){Go=!1,Oi!==null&&rs(Oi)&&(Oi=null),Bi!==null&&rs(Bi)&&(Bi=null),Li!==null&&rs(Li)&&(Li=null),Ln.forEach(Zg),Un.forEach(Zg)}function os(e,t){e.blockedOn===t&&(e.blockedOn=null,Go||(Go=!0,u.unstable_scheduleCallback(u.unstable_NormalPriority,op)))}var cs=null;function Jg(e){cs!==e&&(cs=e,u.unstable_scheduleCallback(u.unstable_NormalPriority,function(){cs===e&&(cs=null);for(var t=0;t<e.length;t+=3){var i=e[t],a=e[t+1],n=e[t+2];if(typeof a!="function"){if(Do(a||i)===null)continue;break}var s=oa(i);s!==null&&(e.splice(t,3),t-=3,Rr(s,{pending:!0,data:n,method:i.method,action:a},a,n))}}))}function Pa(e){function t(p){return os(p,e)}Oi!==null&&os(Oi,e),Bi!==null&&os(Bi,e),Li!==null&&os(Li,e),Ln.forEach(t),Un.forEach(t);for(var i=0;i<Ui.length;i++){var a=Ui[i];a.blockedOn===e&&(a.blockedOn=null)}for(;0<Ui.length&&(i=Ui[0],i.blockedOn===null);)Xg(i),i.blockedOn===null&&Ui.shift();if(i=(e.ownerDocument||e).$$reactFormReplay,i!=null)for(a=0;a<i.length;a+=3){var n=i[a],s=i[a+1],r=n[rt]||null;if(typeof s=="function")r||Jg(i);else if(r){var o=null;if(s&&s.hasAttribute("formAction")){if(n=s,r=s[rt]||null)o=r.formAction;else if(Do(n)!==null)continue}else o=r.action;typeof o=="function"?i[a+1]=o:(i.splice(a,3),a-=3),Jg(i)}}}function $g(){function e(s){s.canIntercept&&s.info==="react-transition"&&s.intercept({handler:function(){return new Promise(function(r){return n=r})},focusReset:"manual",scroll:"manual"})}function t(){n!==null&&(n(),n=null),a||setTimeout(i,20)}function i(){if(!a&&!navigation.transition){var s=navigation.currentEntry;s&&s.url!=null&&navigation.navigate(s.url,{state:s.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var a=!1,n=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(i,100),function(){a=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),n!==null&&(n(),n=null)}}}function zo(e){this._internalRoot=e}us.prototype.render=zo.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(c(409));var i=t.current,a=At();Vg(i,a,e,t,null,null)},us.prototype.unmount=zo.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Vg(e.current,2,null,e,null,null),Vl(),t[sa]=null}};function us(e){this._internalRoot=e}us.prototype.unstable_scheduleHydration=function(e){if(e){var t=cc();e={blockedOn:null,target:e,priority:t};for(var i=0;i<Ui.length&&t!==0&&t<Ui[i].priority;i++);Ui.splice(i,0,e),i===0&&Xg(e)}};var em=d.version;if(em!=="19.2.0")throw Error(c(527,em,"19.2.0"));H.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(c(188)):(e=Object.keys(e).join(","),Error(c(268,e)));return e=m(t),e=e!==null?T(e):null,e=e===null?null:e.stateNode,e};var cp={bundleType:0,version:"19.2.0",rendererPackageName:"react-dom",currentDispatcherRef:R,reconcilerVersion:"19.2.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ds=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ds.isDisabled&&ds.supportsFiber)try{Ya=ds.inject(cp),yt=ds}catch{}}return _n.createRoot=function(e,t){if(!y(e))throw Error(c(299));var i=!1,a="",n=rd,s=od,r=cd;return t!=null&&(t.unstable_strictMode===!0&&(i=!0),t.identifierPrefix!==void 0&&(a=t.identifierPrefix),t.onUncaughtError!==void 0&&(n=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(r=t.onRecoverableError)),t=Ig(e,1,!1,null,null,i,a,null,n,s,r,$g),e[sa]=t.current,ho(e),new zo(t)},_n.hydrateRoot=function(e,t,i){if(!y(e))throw Error(c(299));var a=!1,n="",s=rd,r=od,o=cd,p=null;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(n=i.identifierPrefix),i.onUncaughtError!==void 0&&(s=i.onUncaughtError),i.onCaughtError!==void 0&&(r=i.onCaughtError),i.onRecoverableError!==void 0&&(o=i.onRecoverableError),i.formState!==void 0&&(p=i.formState)),t=Ig(e,1,!0,t,i??null,a,n,p,s,r,o,$g),t.context=Pg(null),i=t.current,a=At(),a=ks(a),n=ki(a),n.callback=null,wi(i,n,a),i=a,t.current.lanes=i,Ka(t,i),Qt(t),e[sa]=t.current,ho(e),new us(t)},_n.version="19.2.0",_n}var um;function xp(){if(um)return Lo.exports;um=1;function u(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(u)}catch(d){console.error(d)}}return u(),Lo.exports=bp(),Lo.exports}var vp=xp(),_o={exports:{}},Io,dm;function jp(){if(dm)return Io;dm=1;var u="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return Io=u,Io}var Po,gm;function Sp(){if(gm)return Po;gm=1;var u=jp();function d(){}function b(){}return b.resetWarningCache=d,Po=function(){function c(j,h,f,m,T,S){if(S!==u){var w=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw w.name="Invariant Violation",w}}c.isRequired=c;function y(){return c}var g={array:c,bigint:c,bool:c,func:c,number:c,object:c,string:c,symbol:c,any:c,arrayOf:y,element:c,elementType:c,instanceOf:y,node:c,objectOf:y,oneOf:y,oneOfType:y,shape:y,exact:y,checkPropTypes:b,resetWarningCache:d};return g.PropTypes=g,g},Po}var mm;function kp(){return mm||(mm=1,_o.exports=Sp()()),_o.exports}var wp=kp();const De=Qn(wp);var Vo,fm;function Ap(){if(fm)return Vo;fm=1;function u(h){return h&&typeof h=="object"&&"default"in h?h.default:h}var d=hs(),b=u(d);function c(h,f,m){return f in h?Object.defineProperty(h,f,{value:m,enumerable:!0,configurable:!0,writable:!0}):h[f]=m,h}function y(h,f){h.prototype=Object.create(f.prototype),h.prototype.constructor=h,h.__proto__=f}var g=!!(typeof window<"u"&&window.document&&window.document.createElement);function j(h,f,m){if(typeof h!="function")throw new Error("Expected reducePropsToState to be a function.");if(typeof f!="function")throw new Error("Expected handleStateChangeOnClient to be a function.");if(typeof m<"u"&&typeof m!="function")throw new Error("Expected mapStateOnServer to either be undefined or a function.");function T(S){return S.displayName||S.name||"Component"}return function(w){if(typeof w!="function")throw new Error("Expected WrappedComponent to be a React component.");var B=[],L;function _(){L=h(B.map(function(Q){return Q.props})),I.canUseDOM?f(L):m&&(L=m(L))}var I=(function(Q){y(je,Q);function je(){return Q.apply(this,arguments)||this}je.peek=function(){return L},je.rewind=function(){if(je.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var he=L;return L=void 0,B=[],he};var fe=je.prototype;return fe.UNSAFE_componentWillMount=function(){B.push(this),_()},fe.componentDidUpdate=function(){_()},fe.componentWillUnmount=function(){var he=B.indexOf(this);B.splice(he,1),_()},fe.render=function(){return b.createElement(w,this.props)},je})(d.PureComponent);return c(I,"displayName","SideEffect("+T(w)+")"),c(I,"canUseDOM",g),I}}return Vo=j,Vo}var Np=Ap();const Cp=Qn(Np);var Wo,hm;function Tp(){if(hm)return Wo;hm=1;var u=typeof Element<"u",d=typeof Map=="function",b=typeof Set=="function",c=typeof ArrayBuffer=="function"&&!!ArrayBuffer.isView;function y(g,j){if(g===j)return!0;if(g&&j&&typeof g=="object"&&typeof j=="object"){if(g.constructor!==j.constructor)return!1;var h,f,m;if(Array.isArray(g)){if(h=g.length,h!=j.length)return!1;for(f=h;f--!==0;)if(!y(g[f],j[f]))return!1;return!0}var T;if(d&&g instanceof Map&&j instanceof Map){if(g.size!==j.size)return!1;for(T=g.entries();!(f=T.next()).done;)if(!j.has(f.value[0]))return!1;for(T=g.entries();!(f=T.next()).done;)if(!y(f.value[1],j.get(f.value[0])))return!1;return!0}if(b&&g instanceof Set&&j instanceof Set){if(g.size!==j.size)return!1;for(T=g.entries();!(f=T.next()).done;)if(!j.has(f.value[0]))return!1;return!0}if(c&&ArrayBuffer.isView(g)&&ArrayBuffer.isView(j)){if(h=g.length,h!=j.length)return!1;for(f=h;f--!==0;)if(g[f]!==j[f])return!1;return!0}if(g.constructor===RegExp)return g.source===j.source&&g.flags===j.flags;if(g.valueOf!==Object.prototype.valueOf&&typeof g.valueOf=="function"&&typeof j.valueOf=="function")return g.valueOf()===j.valueOf();if(g.toString!==Object.prototype.toString&&typeof g.toString=="function"&&typeof j.toString=="function")return g.toString()===j.toString();if(m=Object.keys(g),h=m.length,h!==Object.keys(j).length)return!1;for(f=h;f--!==0;)if(!Object.prototype.hasOwnProperty.call(j,m[f]))return!1;if(u&&g instanceof Element)return!1;for(f=h;f--!==0;)if(!((m[f]==="_owner"||m[f]==="__v"||m[f]==="__o")&&g.$$typeof)&&!y(g[m[f]],j[m[f]]))return!1;return!0}return g!==g&&j!==j}return Wo=function(j,h){try{return y(j,h)}catch(f){if((f.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw f}},Wo}var Ep=Tp();const Rp=Qn(Ep);var Fo,pm;function Mp(){if(pm)return Fo;pm=1;var u=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable;function c(g){if(g==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(g)}function y(){try{if(!Object.assign)return!1;var g=new String("abc");if(g[5]="de",Object.getOwnPropertyNames(g)[0]==="5")return!1;for(var j={},h=0;h<10;h++)j["_"+String.fromCharCode(h)]=h;var f=Object.getOwnPropertyNames(j).map(function(T){return j[T]});if(f.join("")!=="0123456789")return!1;var m={};return"abcdefghijklmnopqrst".split("").forEach(function(T){m[T]=T}),Object.keys(Object.assign({},m)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}return Fo=y()?Object.assign:function(g,j){for(var h,f=c(g),m,T=1;T<arguments.length;T++){h=Object(arguments[T]);for(var S in h)d.call(h,S)&&(f[S]=h[S]);if(u){m=u(h);for(var w=0;w<m.length;w++)b.call(h,m[w])&&(f[m[w]]=h[m[w]])}}return f},Fo}var Dp=Mp();const Gp=Qn(Dp);var na={BODY:"bodyAttributes",HTML:"htmlAttributes",TITLE:"titleAttributes"},ee={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"};Object.keys(ee).map(function(u){return ee[u]});var Ge={CHARSET:"charset",CSS_TEXT:"cssText",HREF:"href",HTTPEQUIV:"http-equiv",INNER_HTML:"innerHTML",ITEM_PROP:"itemprop",NAME:"name",PROPERTY:"property",REL:"rel",SRC:"src",TARGET:"target"},gs={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},Wn={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate"},zp=Object.keys(gs).reduce(function(u,d){return u[gs[d]]=d,u},{}),Op=[ee.NOSCRIPT,ee.SCRIPT,ee.STYLE],Pt="data-react-helmet",Bp=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(u){return typeof u}:function(u){return u&&typeof Symbol=="function"&&u.constructor===Symbol&&u!==Symbol.prototype?"symbol":typeof u},Lp=function(u,d){if(!(u instanceof d))throw new TypeError("Cannot call a class as a function")},Up=(function(){function u(d,b){for(var c=0;c<b.length;c++){var y=b[c];y.enumerable=y.enumerable||!1,y.configurable=!0,"value"in y&&(y.writable=!0),Object.defineProperty(d,y.key,y)}}return function(d,b,c){return b&&u(d.prototype,b),c&&u(d,c),d}})(),ft=Object.assign||function(u){for(var d=1;d<arguments.length;d++){var b=arguments[d];for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&(u[c]=b[c])}return u},Hp=function(u,d){if(typeof d!="function"&&d!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof d);u.prototype=Object.create(d&&d.prototype,{constructor:{value:u,enumerable:!1,writable:!0,configurable:!0}}),d&&(Object.setPrototypeOf?Object.setPrototypeOf(u,d):u.__proto__=d)},ym=function(u,d){var b={};for(var c in u)d.indexOf(c)>=0||Object.prototype.hasOwnProperty.call(u,c)&&(b[c]=u[c]);return b},qp=function(u,d){if(!u)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return d&&(typeof d=="object"||typeof d=="function")?d:u},Qo=function(d){var b=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return b===!1?String(d):String(d).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},_p=function(d){var b=Wa(d,ee.TITLE),c=Wa(d,Wn.TITLE_TEMPLATE);if(c&&b)return c.replace(/%s/g,function(){return Array.isArray(b)?b.join(""):b});var y=Wa(d,Wn.DEFAULT_TITLE);return b||y||void 0},Ip=function(d){return Wa(d,Wn.ON_CHANGE_CLIENT_STATE)||function(){}},Yo=function(d,b){return b.filter(function(c){return typeof c[d]<"u"}).map(function(c){return c[d]}).reduce(function(c,y){return ft({},c,y)},{})},Pp=function(d,b){return b.filter(function(c){return typeof c[ee.BASE]<"u"}).map(function(c){return c[ee.BASE]}).reverse().reduce(function(c,y){if(!c.length)for(var g=Object.keys(y),j=0;j<g.length;j++){var h=g[j],f=h.toLowerCase();if(d.indexOf(f)!==-1&&y[f])return c.concat(y)}return c},[])},In=function(d,b,c){var y={};return c.filter(function(g){return Array.isArray(g[d])?!0:(typeof g[d]<"u"&&Yp("Helmet: "+d+' should be of type "Array". Instead found type "'+Bp(g[d])+'"'),!1)}).map(function(g){return g[d]}).reverse().reduce(function(g,j){var h={};j.filter(function(w){for(var B=void 0,L=Object.keys(w),_=0;_<L.length;_++){var I=L[_],Q=I.toLowerCase();b.indexOf(Q)!==-1&&!(B===Ge.REL&&w[B].toLowerCase()==="canonical")&&!(Q===Ge.REL&&w[Q].toLowerCase()==="stylesheet")&&(B=Q),b.indexOf(I)!==-1&&(I===Ge.INNER_HTML||I===Ge.CSS_TEXT||I===Ge.ITEM_PROP)&&(B=I)}if(!B||!w[B])return!1;var je=w[B].toLowerCase();return y[B]||(y[B]={}),h[B]||(h[B]={}),y[B][je]?!1:(h[B][je]=!0,!0)}).reverse().forEach(function(w){return g.push(w)});for(var f=Object.keys(h),m=0;m<f.length;m++){var T=f[m],S=Gp({},y[T],h[T]);y[T]=S}return g},[]).reverse()},Wa=function(d,b){for(var c=d.length-1;c>=0;c--){var y=d[c];if(y.hasOwnProperty(b))return y[b]}return null},Vp=function(d){return{baseTag:Pp([Ge.HREF,Ge.TARGET],d),bodyAttributes:Yo(na.BODY,d),defer:Wa(d,Wn.DEFER),encode:Wa(d,Wn.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:Yo(na.HTML,d),linkTags:In(ee.LINK,[Ge.REL,Ge.HREF],d),metaTags:In(ee.META,[Ge.NAME,Ge.CHARSET,Ge.HTTPEQUIV,Ge.PROPERTY,Ge.ITEM_PROP],d),noscriptTags:In(ee.NOSCRIPT,[Ge.INNER_HTML],d),onChangeClientState:Ip(d),scriptTags:In(ee.SCRIPT,[Ge.SRC,Ge.INNER_HTML],d),styleTags:In(ee.STYLE,[Ge.CSS_TEXT],d),title:_p(d),titleAttributes:Yo(na.TITLE,d)}},Ko=(function(){var u=Date.now();return function(d){var b=Date.now();b-u>16?(u=b,d(b)):setTimeout(function(){Ko(d)},0)}})(),bm=function(d){return clearTimeout(d)},Wp=typeof window<"u"?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||Ko:global.requestAnimationFrame||Ko,Fp=typeof window<"u"?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||bm:global.cancelAnimationFrame||bm,Yp=function(d){return console&&typeof console.warn=="function"&&console.warn(d)},Pn=null,Qp=function(d){Pn&&Fp(Pn),d.defer?Pn=Wp(function(){xm(d,function(){Pn=null})}):(xm(d),Pn=null)},xm=function(d,b){var c=d.baseTag,y=d.bodyAttributes,g=d.htmlAttributes,j=d.linkTags,h=d.metaTags,f=d.noscriptTags,m=d.onChangeClientState,T=d.scriptTags,S=d.styleTags,w=d.title,B=d.titleAttributes;Xo(ee.BODY,y),Xo(ee.HTML,g),Kp(w,B);var L={baseTag:Va(ee.BASE,c),linkTags:Va(ee.LINK,j),metaTags:Va(ee.META,h),noscriptTags:Va(ee.NOSCRIPT,f),scriptTags:Va(ee.SCRIPT,T),styleTags:Va(ee.STYLE,S)},_={},I={};Object.keys(L).forEach(function(Q){var je=L[Q],fe=je.newTags,be=je.oldTags;fe.length&&(_[Q]=fe),be.length&&(I[Q]=L[Q].oldTags)}),b&&b(),m(d,_,I)},km=function(d){return Array.isArray(d)?d.join(""):d},Kp=function(d,b){typeof d<"u"&&document.title!==d&&(document.title=km(d)),Xo(ee.TITLE,b)},Xo=function(d,b){var c=document.getElementsByTagName(d)[0];if(c){for(var y=c.getAttribute(Pt),g=y?y.split(","):[],j=[].concat(g),h=Object.keys(b),f=0;f<h.length;f++){var m=h[f],T=b[m]||"";c.getAttribute(m)!==T&&c.setAttribute(m,T),g.indexOf(m)===-1&&g.push(m);var S=j.indexOf(m);S!==-1&&j.splice(S,1)}for(var w=j.length-1;w>=0;w--)c.removeAttribute(j[w]);g.length===j.length?c.removeAttribute(Pt):c.getAttribute(Pt)!==h.join(",")&&c.setAttribute(Pt,h.join(","))}},Va=function(d,b){var c=document.head||document.querySelector(ee.HEAD),y=c.querySelectorAll(d+"["+Pt+"]"),g=Array.prototype.slice.call(y),j=[],h=void 0;return b&&b.length&&b.forEach(function(f){var m=document.createElement(d);for(var T in f)if(f.hasOwnProperty(T))if(T===Ge.INNER_HTML)m.innerHTML=f.innerHTML;else if(T===Ge.CSS_TEXT)m.styleSheet?m.styleSheet.cssText=f.cssText:m.appendChild(document.createTextNode(f.cssText));else{var S=typeof f[T]>"u"?"":f[T];m.setAttribute(T,S)}m.setAttribute(Pt,"true"),g.some(function(w,B){return h=B,m.isEqualNode(w)})?g.splice(h,1):j.push(m)}),g.forEach(function(f){return f.parentNode.removeChild(f)}),j.forEach(function(f){return c.appendChild(f)}),{oldTags:g,newTags:j}},wm=function(d){return Object.keys(d).reduce(function(b,c){var y=typeof d[c]<"u"?c+'="'+d[c]+'"':""+c;return b?b+" "+y:y},"")},Xp=function(d,b,c,y){var g=wm(c),j=km(b);return g?"<"+d+" "+Pt+'="true" '+g+">"+Qo(j,y)+"</"+d+">":"<"+d+" "+Pt+'="true">'+Qo(j,y)+"</"+d+">"},Zp=function(d,b,c){return b.reduce(function(y,g){var j=Object.keys(g).filter(function(m){return!(m===Ge.INNER_HTML||m===Ge.CSS_TEXT)}).reduce(function(m,T){var S=typeof g[T]>"u"?T:T+'="'+Qo(g[T],c)+'"';return m?m+" "+S:S},""),h=g.innerHTML||g.cssText||"",f=Op.indexOf(d)===-1;return y+"<"+d+" "+Pt+'="true" '+j+(f?"/>":">"+h+"</"+d+">")},"")},Am=function(d){var b=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return Object.keys(d).reduce(function(c,y){return c[gs[y]||y]=d[y],c},b)},Jp=function(d){var b=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return Object.keys(d).reduce(function(c,y){return c[zp[y]||y]=d[y],c},b)},$p=function(d,b,c){var y,g=(y={key:b},y[Pt]=!0,y),j=Am(c,g);return[Vn.createElement(ee.TITLE,j,b)]},e0=function(d,b){return b.map(function(c,y){var g,j=(g={key:y},g[Pt]=!0,g);return Object.keys(c).forEach(function(h){var f=gs[h]||h;if(f===Ge.INNER_HTML||f===Ge.CSS_TEXT){var m=c.innerHTML||c.cssText;j.dangerouslySetInnerHTML={__html:m}}else j[f]=c[h]}),Vn.createElement(d,j)})},mi=function(d,b,c){switch(d){case ee.TITLE:return{toComponent:function(){return $p(d,b.title,b.titleAttributes)},toString:function(){return Xp(d,b.title,b.titleAttributes,c)}};case na.BODY:case na.HTML:return{toComponent:function(){return Am(b)},toString:function(){return wm(b)}};default:return{toComponent:function(){return e0(d,b)},toString:function(){return Zp(d,b,c)}}}},Nm=function(d){var b=d.baseTag,c=d.bodyAttributes,y=d.encode,g=d.htmlAttributes,j=d.linkTags,h=d.metaTags,f=d.noscriptTags,m=d.scriptTags,T=d.styleTags,S=d.title,w=S===void 0?"":S,B=d.titleAttributes;return{base:mi(ee.BASE,b,y),bodyAttributes:mi(na.BODY,c,y),htmlAttributes:mi(na.HTML,g,y),link:mi(ee.LINK,j,y),meta:mi(ee.META,h,y),noscript:mi(ee.NOSCRIPT,f,y),script:mi(ee.SCRIPT,m,y),style:mi(ee.STYLE,T,y),title:mi(ee.TITLE,{title:w,titleAttributes:B},y)}},t0=function(d){var b,c;return c=b=(function(y){Hp(g,y);function g(){return Lp(this,g),qp(this,y.apply(this,arguments))}return g.prototype.shouldComponentUpdate=function(h){return!Rp(this.props,h)},g.prototype.mapNestedChildrenToProps=function(h,f){if(!f)return null;switch(h.type){case ee.SCRIPT:case ee.NOSCRIPT:return{innerHTML:f};case ee.STYLE:return{cssText:f}}throw new Error("<"+h.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},g.prototype.flattenArrayTypeChildren=function(h){var f,m=h.child,T=h.arrayTypeChildren,S=h.newChildProps,w=h.nestedChildren;return ft({},T,(f={},f[m.type]=[].concat(T[m.type]||[],[ft({},S,this.mapNestedChildrenToProps(m,w))]),f))},g.prototype.mapObjectTypeChildren=function(h){var f,m,T=h.child,S=h.newProps,w=h.newChildProps,B=h.nestedChildren;switch(T.type){case ee.TITLE:return ft({},S,(f={},f[T.type]=B,f.titleAttributes=ft({},w),f));case ee.BODY:return ft({},S,{bodyAttributes:ft({},w)});case ee.HTML:return ft({},S,{htmlAttributes:ft({},w)})}return ft({},S,(m={},m[T.type]=ft({},w),m))},g.prototype.mapArrayTypeChildrenToProps=function(h,f){var m=ft({},f);return Object.keys(h).forEach(function(T){var S;m=ft({},m,(S={},S[T]=h[T],S))}),m},g.prototype.warnOnInvalidChildren=function(h,f){return!0},g.prototype.mapChildrenToProps=function(h,f){var m=this,T={};return Vn.Children.forEach(h,function(S){if(!(!S||!S.props)){var w=S.props,B=w.children,L=ym(w,["children"]),_=Jp(L);switch(m.warnOnInvalidChildren(S,B),S.type){case ee.LINK:case ee.META:case ee.NOSCRIPT:case ee.SCRIPT:case ee.STYLE:T=m.flattenArrayTypeChildren({child:S,arrayTypeChildren:T,newChildProps:_,nestedChildren:B});break;default:f=m.mapObjectTypeChildren({child:S,newProps:f,newChildProps:_,nestedChildren:B});break}}}),f=this.mapArrayTypeChildrenToProps(T,f),f},g.prototype.render=function(){var h=this.props,f=h.children,m=ym(h,["children"]),T=ft({},m);return f&&(T=this.mapChildrenToProps(f,T)),Vn.createElement(d,T)},Up(g,null,[{key:"canUseDOM",set:function(h){d.canUseDOM=h}}]),g})(Vn.Component),b.propTypes={base:De.object,bodyAttributes:De.object,children:De.oneOfType([De.arrayOf(De.node),De.node]),defaultTitle:De.string,defer:De.bool,encodeSpecialCharacters:De.bool,htmlAttributes:De.object,link:De.arrayOf(De.object),meta:De.arrayOf(De.object),noscript:De.arrayOf(De.object),onChangeClientState:De.func,script:De.arrayOf(De.object),style:De.arrayOf(De.object),title:De.string,titleAttributes:De.object,titleTemplate:De.string},b.defaultProps={defer:!0,encodeSpecialCharacters:!0},b.peek=d.peek,b.rewind=function(){var y=d.rewind();return y||(y=Nm({baseTag:[],bodyAttributes:{},htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),y},c},i0=function(){return null},a0=Cp(Vp,Qp,Nm)(i0),Zo=t0(a0);Zo.renderStatic=Zo.rewind;const n0=u=>u.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),l0=u=>u.replace(/^([A-Z])|[\s-_]+(\w)/g,(d,b,c)=>c?c.toUpperCase():b.toLowerCase()),vm=u=>{const d=l0(u);return d.charAt(0).toUpperCase()+d.slice(1)},Cm=(...u)=>u.filter((d,b,c)=>!!d&&d.trim()!==""&&c.indexOf(d)===b).join(" ").trim(),s0=u=>{for(const d in u)if(d.startsWith("aria-")||d==="role"||d==="title")return!0};var r0={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const o0=q.forwardRef(({color:u="currentColor",size:d=24,strokeWidth:b=2,absoluteStrokeWidth:c,className:y="",children:g,iconNode:j,...h},f)=>q.createElement("svg",{ref:f,...r0,width:d,height:d,stroke:u,strokeWidth:c?Number(b)*24/Number(d):b,className:Cm("lucide",y),...!g&&!s0(h)&&{"aria-hidden":"true"},...h},[...j.map(([m,T])=>q.createElement(m,T)),...Array.isArray(g)?g:[g]]));const Ce=(u,d)=>{const b=q.forwardRef(({className:c,...y},g)=>q.createElement(o0,{ref:g,iconNode:d,className:Cm(`lucide-${n0(vm(u))}`,`lucide-${u}`,c),...y}));return b.displayName=vm(u),b};const c0=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],ps=Ce("arrow-left",c0);const u0=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],fi=Ce("arrow-right",u0);const d0=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],Tm=Ce("check",d0);const g0=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],Em=Ce("chevron-down",g0);const m0=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],f0=Ce("chevron-right",m0);const h0=[["path",{d:"M12 6v6l4 2",key:"mmk7yg"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],Rm=Ce("clock",h0);const p0=[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]],y0=Ce("download",p0);const b0=[["path",{d:"M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",key:"1jg4f8"}]],x0=Ce("facebook",b0);const v0=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],j0=Ce("file-text",v0);const S0=[["rect",{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5",key:"2e1cvw"}],["path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",key:"9exkf1"}],["line",{x1:"17.5",x2:"17.51",y1:"6.5",y2:"6.5",key:"r4j83e"}]],k0=Ce("instagram",S0);const w0=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]],$o=Ce("mail",w0);const A0=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]],Mm=Ce("map-pin",A0);const N0=[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]],C0=Ce("menu",N0);const T0=[["path",{d:"M5 12h14",key:"1ays0h"}]],Dm=Ce("minus",T0);const E0=[["path",{d:"M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",key:"9njp5v"}]],Gm=Ce("phone",E0);const R0=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],zm=Ce("plus",R0);const M0=[["path",{d:"M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2",key:"143wyd"}],["path",{d:"M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6",key:"1itne7"}],["rect",{x:"6",y:"14",width:"12",height:"8",rx:"1",key:"1ue0tg"}]],D0=Ce("printer",M0);const G0=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],ec=Ce("search",G0);const z0=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],ys=Ce("shield-check",z0);const O0=[["path",{d:"M16 10a4 4 0 0 1-8 0",key:"1ltviw"}],["path",{d:"M3.103 6.034h17.794",key:"awc11p"}],["path",{d:"M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z",key:"o988cm"}]],Fn=Ce("shopping-bag",O0);const B0=[["path",{d:"M10 5H3",key:"1qgfaw"}],["path",{d:"M12 19H3",key:"yhmn1j"}],["path",{d:"M14 3v4",key:"1sua03"}],["path",{d:"M16 17v4",key:"1q0r14"}],["path",{d:"M21 12h-9",key:"1o4lsq"}],["path",{d:"M21 19h-5",key:"1rlt1p"}],["path",{d:"M21 5h-7",key:"1oszz2"}],["path",{d:"M8 10v4",key:"tgpxqk"}],["path",{d:"M8 12H3",key:"a7s4jb"}]],L0=Ce("sliders-horizontal",B0);const U0=[["path",{d:"M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z",key:"17jzev"}]],Om=Ce("thermometer",U0);const H0=[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],Bm=Ce("trash-2",H0);const q0=[["path",{d:"M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2",key:"wrbu53"}],["path",{d:"M15 18H9",key:"1lyqi6"}],["path",{d:"M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14",key:"lysw3i"}],["circle",{cx:"17",cy:"18",r:"2",key:"332jqn"}],["circle",{cx:"7",cy:"18",r:"2",key:"19iecd"}]],ms=Ce("truck",q0);const _0=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],Lm=Ce("user",_0);const I0=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Yn=Ce("x",I0),P0=({setCurrentPage:u,showToast:d})=>{const[b,c]=q.useState(""),[y,g]=q.useState(!1),j=async()=>{if(!b||b.length<10){d("Please enter a valid WhatsApp number.","error");return}g(!0);const h=`Hi, I'd like to subscribe to Shaa Trading wholesale updates. My number is: ${b}`,f=`https://wa.me/919916726373?text=${encodeURIComponent(h)}`;window.open(f,"_blank"),d("Opening WhatsApp...","success"),c(""),g(!1)};return l.jsx("footer",{className:"bg-[#0a0a0a] text-white border-t border-white/5",children:l.jsxs("div",{className:"max-w-7xl mx-auto px-6 py-16",children:[l.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8",children:[l.jsxs("div",{className:"space-y-6",children:[l.jsx("img",{loading:"lazy",src:"/image/logo-r.jpg",alt:"SHAA TRADING",className:"h-12 w-auto object-contain"}),l.jsx("p",{className:"text-gray-400 text-sm leading-relaxed font-light max-w-xs",children:"Bengaluru-based distributor, supplier, and wholesaler since 2012. Providing trusted healthcare and skincare products to professionals across India."}),l.jsxs("div",{className:"flex gap-4 pt-2",children:[l.jsx("a",{href:"https://www.instagram.com/shaatradingindia/",target:"_blank",rel:"noopener noreferrer",className:"w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white hover:text-black transition-all",children:l.jsx(k0,{size:18})}),l.jsx("a",{href:"https://www.facebook.com/skinandherbs.in/",target:"_blank",rel:"noopener noreferrer",className:"w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white hover:text-black transition-all",children:l.jsx(x0,{size:18})})]})]}),l.jsxs("div",{children:[l.jsx("h3",{className:"text-white font-serif text-lg mb-6",children:"Explore"}),l.jsxs("ul",{className:"space-y-4 text-sm text-gray-400",children:[l.jsx("li",{children:l.jsxs("button",{onClick:()=>u("shop"),className:"hover:text-white transition-colors flex items-center gap-2",children:[l.jsx(fi,{size:12})," All Products"]})}),l.jsx("li",{children:l.jsxs("button",{onClick:()=>u("blog"),className:"hover:text-white transition-colors flex items-center gap-2",children:[l.jsx(fi,{size:12})," Clinical Journal"]})}),l.jsx("li",{children:l.jsxs("button",{onClick:()=>u("about"),className:"hover:text-white transition-colors flex items-center gap-2",children:[l.jsx(fi,{size:12})," Our Story"]})}),l.jsx("li",{children:l.jsxs("button",{onClick:()=>u("contact"),className:"hover:text-white transition-colors flex items-center gap-2",children:[l.jsx(fi,{size:12})," Partner Program"]})}),l.jsx("li",{children:l.jsxs("button",{onClick:()=>u("track"),className:"hover:text-white transition-colors flex items-center gap-2",children:[l.jsx(fi,{size:12})," Track Order"]})}),l.jsx("li",{children:l.jsxs("button",{onClick:()=>u("login"),className:"hover:text-white transition-colors flex items-center gap-2",children:[l.jsx(fi,{size:12})," Login"]})})]})]}),l.jsxs("div",{children:[l.jsx("h3",{className:"text-white font-serif text-lg mb-6",children:"Contact"}),l.jsxs("ul",{className:"space-y-4 text-sm text-gray-400",children:[l.jsxs("li",{className:"flex items-start gap-3",children:[l.jsx($o,{size:16,className:"mt-0.5 shrink-0 text-white"}),l.jsx("span",{children:"shaatrading@gmail.com"})]}),l.jsxs("li",{className:"flex items-start gap-3",children:[l.jsx(Gm,{size:16,className:"mt-0.5 shrink-0 text-white"}),l.jsx("span",{children:"+91 99167 26373"})]}),l.jsxs("li",{className:"flex items-start gap-3",children:[l.jsx(Mm,{size:16,className:"mt-0.5 shrink-0 text-white"}),l.jsxs("span",{children:["Bengaluru, Karnataka",l.jsx("br",{}),"Since 2012"]})]})]})]}),l.jsxs("div",{children:[l.jsx("h3",{className:"text-white font-serif text-lg mb-6",children:"WhatsApp Updates"}),l.jsx("p",{className:"text-gray-400 text-xs mb-4",children:"Get exclusive wholesale price lists and stock alerts directly on WhatsApp."}),l.jsxs("div",{className:"flex flex-col gap-3",children:[l.jsx("input",{type:"tel",placeholder:"WhatsApp Number",value:b,onChange:h=>c(h.target.value),className:"bg-white/5 border border-white/10 px-4 py-3 text-white text-sm focus:outline-none focus:border-white w-full rounded"}),l.jsx("button",{onClick:j,disabled:y,className:"bg-white text-black px-4 py-3 font-medium text-sm hover:bg-gray-100 transition-colors rounded uppercase tracking-wider disabled:opacity-50 disabled:cursor-not-allowed flex justify-center items-center gap-2",children:y?"Subscribing...":l.jsxs(l.Fragment,{children:["Subscribe ",l.jsx(fi,{size:14})]})})]})]})]}),l.jsxs("div",{className:"border-t border-white/5 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center gap-4",children:[l.jsxs("div",{className:"text-xs text-gray-500 flex flex-col md:flex-row gap-4 items-center",children:[l.jsx("p",{children:"© 2025 SHAA TRADING. All rights reserved."}),l.jsxs("div",{className:"flex gap-4",children:[l.jsx("button",{onClick:()=>u("privacy"),className:"hover:text-white transition-colors",children:"Privacy"}),l.jsx("button",{onClick:()=>u("terms"),className:"hover:text-white transition-colors",children:"Terms"}),l.jsx("button",{onClick:()=>u("shipping"),className:"hover:text-white transition-colors",children:"Shipping"})]})]}),l.jsxs("a",{href:"https://zomaxa.co",target:"_blank",rel:"noopener noreferrer",className:"flex items-center gap-2 group px-3 py-2 rounded-lg hover:bg-white/5 transition-all duration-300",children:[l.jsx("span",{className:"text-[10px] text-gray-600 uppercase tracking-wider group-hover:text-gray-400 transition-colors",children:"Designed And Developed By"}),l.jsx("div",{className:"flex flex-col items-start leading-none",children:l.jsx("span",{className:"font-serif text-[#C5A059] font-bold tracking-[0.2em] text-[10px] md:text-xs uppercase group-hover:text-[#F4CF57] group-hover:drop-shadow-[0_0_8px_rgba(197,160,89,0.5)] transition-all duration-300",children:"ZOMAXA.CO"})})]})]})]})})},Jo=({product:u,viewMode:d,navigateTo:b,addToCart:c})=>{const y=d==="list",g=u.stock<=0;return l.jsxs("article",{className:`group cursor-pointer bg-white transition-all duration-500 flex flex-col h-full ${y?"flex-row gap-6 p-4 border border-gray-100 rounded-sm":"border border-gray-100 rounded-sm p-3 md:p-4 hover:shadow-md"} ${g?"opacity-70":""}`,onClick:()=>!g&&b("product",u),children:[l.jsxs("div",{className:`relative bg-[#f9f9f9] overflow-hidden shrink-0 ${y?"w-32 h-40 rounded-sm":"aspect-[4/5] rounded-sm mb-4"}`,children:[l.jsx("img",{loading:"lazy",src:u.image,alt:u.name,className:`w-full h-full object-contain p-4 mix-blend-multiply transition-transform duration-700 ${g?"grayscale":"group-hover:scale-105"}`}),g&&l.jsx("div",{className:"absolute inset-0 bg-white/40 flex items-center justify-center",children:l.jsx("span",{className:"bg-black text-white text-[8px] font-bold uppercase tracking-[0.2em] px-2 py-1 shadow-sm",children:"Sold Out"})}),!y&&!g&&l.jsx("div",{className:"absolute top-2 left-2 opacity-0 group-hover:opacity-100 transition-opacity",children:l.jsx("span",{className:"bg-white/90 backdrop-blur text-[8px] px-2 py-1 rounded-sm font-bold tracking-widest uppercase shadow-sm border border-gray-100",children:u.brand})})]}),l.jsxs("div",{className:`flex flex-col flex-1 ${y?"justify-center":""}`,children:[l.jsx("div",{className:"text-gray-400 text-[9px] font-bold tracking-widest uppercase mb-1",children:u.category}),l.jsx("h3",{className:`font-medium text-gray-900 leading-tight mb-2 ${y?"text-lg":"text-sm md:text-base"}`,children:u.name}),l.jsx("div",{className:"mt-auto",children:l.jsxs("p",{className:`text-sm font-bold ${g?"text-gray-400":"text-gray-900"}`,children:[u.comparePrice&&l.jsxs("span",{className:"text-gray-400 line-through mr-2 font-normal",children:["₹",u.comparePrice.toLocaleString()]}),"₹",u.price.toLocaleString()]})}),l.jsx("div",{className:"mt-4",children:l.jsx("button",{disabled:g,onClick:j=>{j.stopPropagation(),g||c(u)},className:`w-full py-3 text-[10px] font-bold uppercase tracking-[0.2em] rounded-sm transition-all ${g?"bg-gray-100 text-gray-400 cursor-not-allowed border border-gray-200":"bg-black text-white hover:bg-gray-800"}`,children:g?"Unavailable":"Buy Now"})})]})]})},la=[{id:1,name:"Glutax 20000000GN Pico-QuadNA ReCombined White Skin Whitening Injection",category:"Injection",brand:"Glutax",price:9800,comparePrice:14500,image:"/image/glutax/gtx-20Mgn+.jpeg",images:["/image/glutax/gtx-20Mgn+.jpeg","/image/glutax/gtx-20Mgn+-2.jpeg","/image/glutax/gtx-20Mgn+-3.jpeg","/image/glutax/gtx-20Mgn+-4.jpeg"],description:"Ultimate skin brightening & whitening with stem cell therapy and NAD+ for deep repair and anti-aging effects.",details:`
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
    `,benefits:["Ultimate Skin Brightening","Deep Skin Repair & Anti-Aging","Antioxidant Detox & Glow","Stem Cell Rejuvenation","Medical-Grade Potency","10 Sessions Pack"],sku:"GLUTAX-20000000GN",volume:"10 Sessions",stock:10},{id:2,name:"Glutax 5gs Micro Advance Glutathione 5000mg 12 Sessions Skin Whitening Injection",category:"Injection",brand:"Glutax",price:12500,comparePrice:18e3,image:"/image/glutax/gtx-5gs-adv.jpeg",images:["/image/glutax/gtx-5gs-adv.jpeg","/image/glutax/gtx-5gs-adv-3.jpg","/image/glutax/gtx-5gs-adv-2.png","/image/glutax/gtx-5gs-adv-4.png"],description:"Glutax 5gs Micro Advance Glutathione injections reduce hyperpigmentation, sun spots, wrinkles, acne, and melasma by eliminating toxins and free radicals.",details:`
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
    `,benefits:["Brightens Complexion","Micro-Exfoliation","Clears Pores","Controls Acne Bacteria","Removes Dead Skin","Prepares Skin for Creams","135g Bar","Daily Use"],sku:"GLOWTIQA-WHITE-SOAP-135G",volume:"135 Grams",stock:10},{id:26,name:"Glowtiqa Whitening Booster 1200MG",category:"Supplement",brand:"Glowtiqa Paris",price:3e3,comparePrice:4499,image:"/image/glowtiqa/glowtiqa-capsule.jpeg",images:["/image/glowtiqa/glowtiqa-capsule.jpeg","/image/glowtiqa/whitening-booster-2.jpeg","/image/glowtiqa/whitening-booster-3.jpeg","/image/glowtiqa/whitening-booster-4.jpeg"],description:"Potent 1200MG dietary supplement crafted in Paris to strengthen, protect, and brighten complexion by targeting hyperpigmentation at the cellular level.",details:`
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
    `,benefits:["6 Sessions Pack","NAD+ Renewal Technology","500,000mg Glutathione","With EGF & CoQ10","Stem Cell Extracts","Anti-Aging","Whitening & Detox","FDA & GMP Approved"],sku:"PTR000516",volume:"6 Sessions",stock:10},{id:31,name:"Cindyrella Power Drip (10 Sets) Glutathione Injection",category:"Injection",brand:"Cindyrella",price:13800,comparePrice:2e4,image:"/image/Cindyrella/power-drip-1.jpeg",images:["/image/Cindyrella/power-drip-1.jpeg","/image/Cindyrella/power-drip-2.jpeg","/image/Cindyrella/power-drip-3.jpeg","/image/Cindyrella/power-drip-4.jpeg","/image/Cindyrella/power-drip-5.jpeg"],description:"High-dose glutathione drip with CoQ10, marine collagen, placenta, apple stem cell, and vitamins for energy, skin brightening, and overall wellness.",details:`
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
    `,benefits:["10 Sets Pack","800,000mg Glutathione","With CoQ10 & Collagens","Placenta & Apple Stem Cell","Vitamins B, C, E","Energy & Wellness","Skin Brightening","Detoxification"],sku:"CINDY-POWERDRIP-10",volume:"10 Sets",stock:10},{id:32,name:"Rejuran S Acne Scar Treatment Injection",category:"Injection",brand:"Rejuran",price:8800,comparePrice:1e4,image:"/image/rejuran/rejuran-s-1.jpeg",images:["/image/rejuran/rejuran-s-1.jpeg","/image/rejuran/rejuran-s-2.jpeg","/image/rejuran/rejuran-s-3.jpeg","/image/rejuran/rejuran-s-4.jpeg"],description:"Concentrated polynucleotide (PN) injection for treating acne scars, including boxcar, icepick, and rolling scars, by repairing damaged cells and stimulating collagen.",details:`
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
    `,benefits:["Made in South Korea","10 Sessions Pack","1200mg Glutathione","With Vitamin C Support","Reduces Pigmentation","Fades Scars & Dark Spots","Detoxifies & Rejuvenates","Trusted Korean Formulation"],sku:"NEXUS-GLUTANEX-1200-10S",volume:"10 Sessions",stock:10},{id:34,name:"Cindella Luthione Vitamin C 1200mg Skin Whitening Set",category:"Injection",brand:"Cosdaq",price:15800,comparePrice:22500,image:"/image/cosdaq/cindella-set-1.jpeg",images:["/image/cosdaq/cindella-set-1.jpeg","/image/cosdaq/cindella-set-2.jpeg","/image/cosdaq/cindella-set-3.jpeg","/image/cosdaq/cindella-set-4.jpeg"],description:"KFDA-approved skin whitening injection set with Glutathione 1200mg, Thioctic Acid, and Vitamin C for fair to pink complexion, detox, and anti-aging.",details:`
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
    `,benefits:["Made in South Korea","KFDA Approved","1200mg Glutathione","With Vitamin C & Thioctic Acid","Fair to Pink Complexion","Liver Detox & Immunity","Anti-Aging & Collagen Boost","Baby Face Injection"],sku:"COSDAQ-CINDELLA-1200",volume:"1 Box",stock:10},{id:35,name:"QR 678 NEO Anti Hair Loss Solution Injection 5mL",category:"Injection",brand:"QR 678 Neo",price:22500,comparePrice:41300,image:"/image/qr678/qr678-neo-2.jpeg",images:["/image/qr678/qr678-neo-2.jpeg","/image/qr678/qr678-neo-1.jpeg","/image/qr678/qr678-neo-3.jpeg","/image/qr678/qr678-neo-4.jpeg"],description:"Revolutionary non-surgical hair regrowth treatment that stimulates dormant follicles, reduces hair fall, and promotes natural-looking regrowth for both men and women.",details:`
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
    `,benefits:["Stimulates Hair Regrowth","Reduces Hair Fall in 3-4 Weeks","Increases Hair Density & Thickness","Treats Male & Female Pattern Baldness","Non-Surgical Alternative","Biomimetic Peptide Technology","Quick Procedure – No Downtime","Made in India"],sku:"QR678-NEO-5ML",volume:"5mL",stock:10},{id:36,name:"Fillmed NCTF 135HA Filler-Skin Booster",category:"Injection",brand:"Fillmed",price:16e3,comparePrice:22500,image:"/image/fillmed/nctf-135ha-1.jpeg",images:["/image/fillmed/nctf-135ha-1.jpeg","/image/fillmed/nctf-135ha-2.jpeg","/image/fillmed/nctf-135ha-3.jpeg","/image/fillmed/nctf-135ha-4.jpeg"],description:"French mesotherapy skin booster with hyaluronic acid and 59 active ingredients for deep hydration, anti-aging, and radiant glow – often called the 'Chanel Injection'.",details:`
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
    `,benefits:["600mg Glutathione","Antioxidant Protection","Liver Detoxification","May Reduce Melanin","Per Session Pack","Antioxidant Support"],sku:"ETER-GLOW-600MG",volume:"Per Session",stock:0},{id:40,name:"Shiro Advance Glutathione 5000mg Skin Whitening Injection",category:"Injection",brand:"Shiro Advance",price:13500,comparePrice:18e3,image:"/image/shiro/advance-5000mg-1.jpeg",images:["/image/shiro/advance-5000mg-1.jpeg","/image/shiro/advance-5000mg-2.jpeg","/image/shiro/advance-5000mg-3.jpeg","/image/shiro/advance-5000mg-4.jpeg"],description:"Glutathione skin whitening injection that reduces hyperpigmentation, sun spots, wrinkles, acne, and melasma by eliminating toxins and free radicals.",details:`
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
    `,benefits:["10 Sessions Pack","5000mg Glutathione","With Collagen & Vitamin C","Reduces Hyperpigmentation","Fades Wrinkles & Fine Lines","Skin Whitening","Anti-Inflammatory","Promotes Youthful Skin"],sku:"SHIRO-ADVANCE-5000-10S",volume:"10 Sessions",stock:10},{id:41,name:"Miracle Weight Gain Capsules With Herbal Support For Healthy Weight Gain",category:"Capsules",brand:"Miracle Gain",price:2200,comparePrice:3500,image:"/image/miracle-gain/weight-gain-capsules-1.jpeg",images:["/image/miracle-gain/weight-gain-capsules-1.jpeg","/image/miracle-gain/weight-gain-capsules-2.jpeg","/image/miracle-gain/weight-gain-capsules-3.jpeg","/image/miracle-gain/weight-gain-capsules-4.jpeg"],description:"Powerful herbal supplement with Ayurvedic ingredients like Ashwagandha, Shatavari, Safed Musli, and Vidarikand to support healthy weight gain naturally.",details:`
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
    `,benefits:["Pico-Cell Delivery Technology","Glutathione + Peptides + Stem Cells","Skin Brightening & Glow","Reduces Dullness & Oxidative Stress","Improves Texture & Hydration","Anti-Aging & Skin Renewal","Made in Switzerland","Professional Grade"],sku:"LUCCHINI-PICO-CELL",volume:"10 Sessions",stock:10},{id:43,name:"Royal Ultra Booster With Glutathione Skin Whitening Injection 10mL",category:"Injection",brand:"Royal Ultra Booster",price:9800,comparePrice:12500,image:"/image/royal-ultra/royal-ultra-booster-1.jpg",images:["/image/royal-ultra/royal-ultra-booster-1.jpg","/image/royal-ultra/royal-ultra-booster-2.jpg","/image/royal-ultra/royal-ultra-booster-3.jpeg","/image/royal-ultra/royal-ultra-booster-4.jpeg"],description:"One-time quick whitening IV injection with Cyto-6 plant stem cells and DualNA technology for immediate skin brightening, UV protection, and antioxidant benefits.",details:`
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
    `,benefits:["6 Sessions Pack","SLC24A5 Chromosome Phase IX","Glutathione + Vitamins + Collagen","1–3 Shades Lightening","Reduces Wrinkles & Dark Spots","Restores Natural Glow","AAA+++ Grade","Advanced Brightening"],sku:"ISKIN-SLC24A5-PHASE9-6S",volume:"6 Sessions",stock:10},{id:46,name:"L Carnitine Probio CLA 35g Advance Weight Loss Injection",category:"Injection",brand:"L-Carnitine",price:8e3,comparePrice:1e4,image:"/image/l-carnitine/probio-cla-35g-1.jpeg",images:["/image/l-carnitine/probio-cla-35g-1.jpeg","/image/l-carnitine/probio-cla-35g-2.jpeg","/image/l-carnitine/probio-cla-35g-3.jpeg","/image/l-carnitine/probio-cla-35g-4.jpeg","/image/l-carnitine/probio-cla-35g-5.jpeg","/image/l-carnitine/probio-cla-35g-6.jpeg","/image/l-carnitine/probio-cla-35g-7.jpeg","/image/l-carnitine/probio-cla-35g-8.jpeg","/image/l-carnitine/probio-cla-35g-9.jpeg"],description:"Advanced weight loss injection with L-Carnitine, CLA, and PROBIO for enhanced lipid metabolism, fatty acid oxidation, and accelerated fat-burning process.",details:`
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
    `,benefits:["10 Vials (10ml each)","Made in Germany","2000mg Strength","With CLA & PROBIO","Promotes Fatty Acid Oxidation","Accelerates Fat Burning","Enhances Lipid Metabolism","Non-Prescription"],sku:"LCARNITINE-PROBIO-CLA-10ML",volume:"10 Vials (10ml each)",stock:10},{id:47,name:"Miracle White Royal Gold Nano Concentrated Glutathione BOOSTER 120000 mg Skin Whitening Injection",category:"Injection",brand:"Miracle White",price:9800,comparePrice:12500,image:"/image/miracle-white/royal-gold-booster-1.jpg",images:["/image/miracle-white/royal-gold-booster-1.jpg","/image/miracle-white/royal-gold-booster-2.jpeg","/image/miracle-white/royal-gold-booster-3.jpeg","/image/miracle-white/royal-gold-booster-4.jpeg"],description:"Nano concentrated glutathione booster with 120,000mg glutathione, CoQ10, and collagen. Lightens skin tone, removes blemishes, dark spots, and provides anti-aging benefits.",details:`
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
    `,benefits:["Made in Switzerland","120,000mg Glutathione","With CoQ10 & Collagen","Anti-Aging Effects","Removes Blemishes & Dark Spots","Brightens Dull Complexion","Stimulates Collagen & Elastin","Scavenges Free Radicals"],sku:"MIRACLE-ROYAL-GOLD-120K",volume:"6 Sessions",stock:10},{id:48,name:"Evgenis Totipotent Embryonic Stem Cell (ETESC) Injection",category:"Injection",brand:"Evgenis",price:25500,comparePrice:3e4,image:"/image/evgenis/etescinjection-1.jpeg",images:["/image/evgenis/etescinjection-1.jpeg","/image/evgenis/etescinjection-2.jpeg","/image/evgenis/etescinjection-3.jpeg","/image/evgenis/etescinjection-4.jpeg"],description:"WHO-GMP certified totipotent embryonic stem cell injection with glutathione for advanced skin rejuvenation, cellular repair, and anti-aging.",details:`
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
    `,benefits:["6 Sessions Pack","Totipotent Stem Cells","WHO-GMP Certified","Glutathione Enriched","Cellular Repair","Skin Rejuvenation","Anti-Aging","Cosmetic Grade"],sku:"EVGENIS-ETESC-6S",volume:"6 Sessions",stock:10},{id:49,name:"ISkin Radianz Blu Cell Glutathione 1200 mg Skin Whitening Injection",category:"Injection",brand:"iSkin",price:16500,comparePrice:25e3,image:"/image/iskin/radianz-blu-cell-1.jpeg",images:["/image/iskin/radianz-blu-cell-1.jpeg","/image/iskin/radianz-blu-cell-2.jpeg","/image/iskin/radianz-blu-cell-3.jpeg","/image/iskin/radianz-blu-cell-4.jpeg","/image/iskin/radianz-blu-cell-5.jpeg","/image/iskin/radianz-blu-cell-6.jpeg","/image/iskin/radianz-blu-cell-7.jpeg","/image/iskin/radianz-blu-cell-8.jpeg"],description:"Advanced Swiss technology skin whitening injection with Picomized NAD+, Glutathione, and Mineral Silicate to rejuvenate, detoxify, and brighten skin.",details:`
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
    `,benefits:["135g Bar","Papaya Enzyme Enriched","Skin Brightening","Anti-Aging Benefits","Reduces Hyperpigmentation","Treats Acne & Scars","Softens & Balances Oil","Suitable for All Skin Types"],sku:"VITA-GLOW-PAPAYA-SOAP-135G",volume:"135g",stock:10},{id:54,name:"Botox 100 Iu",category:"Injection",brand:"Allergan",price:12500,comparePrice:15e3,image:"/image/allergan/botox-100iu-1.jpeg",images:["/image/allergan/botox-100iu-1.jpeg","/image/allergan/botox-100iu-2.jpeg","/image/allergan/botox-100iu-3.jpeg","/image/allergan/botox-100iu-4.jpeg"],description:"Original and most trusted botulinum toxin type A. Temporarily relaxes muscles to reduce wrinkles and treat medical conditions.",details:`
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
    `,benefits:["100 Units per Vial","Made in Ireland","Original Allergan Botox","Reduces Wrinkles","Treats Medical Conditions","Preservative-Free","Trusted Worldwide","Professional Grade"],sku:"ALLERGAN-BOTOX-100IU",volume:"1 Vial",stock:10},{id:55,name:"Botox Allergan 100 Iu Botox Cosmetic",category:"Injection",brand:"Allergan",price:9500,comparePrice:12500,image:"/image/allergan/botox-cosmetic-100iu-1.jpeg",images:["/image/allergan/botox-cosmetic-100iu-1.jpeg","/image/allergan/botox-cosmetic-100iu-2.jpeg","/image/allergan/botox-cosmetic-100iu-3.jpeg","/image/allergan/botox-cosmetic-100iu-4.jpeg"],description:"Purified botulinum toxin type A injection used to temporarily smooth moderate-to-severe wrinkles like crow's feet, forehead lines, and frown lines.",details:`
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
    `,benefits:["100 Units per Vial","Made in USA","Original Allergan","Smooths Forehead Lines","Reduces Crow's Feet","Treats Frown Lines","Preservative-Free","Professional Grade"],sku:"ALLERGAN-BOTOX-COSMETIC-100",volume:"1 Vial",stock:10},{id:56,name:"L Carnitine 45g Weight Loss & Fat Loss Injection, 2000 mg",category:"Injection",brand:"Ratiopharm",price:8e3,comparePrice:1e4,image:"/image/l-carnitine/45g-weight-loss-1.jpg",images:["/image/l-carnitine/45g-weight-loss-1.jpg","/image/l-carnitine/45g-weight-loss-2.jpeg","/image/l-carnitine/45g-weight-loss-3.jpeg","/image/l-carnitine/45g-weight-loss-4.jpeg"],description:"L-Carnitine + CLA 45g injection from Germany. Breaks down excess fat, tightens body, converts fat to muscle, and supports weight loss, energy, and heart health.",details:`
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
    `,benefits:["10 Sessions Pack","Made in Italy","Pico Cell Absorption Technology","Glutathione + Collagen + Vitamin C","Skin Whitening & Anti-Aging","Rejuvenates & Moisturizes","Antioxidant Protection","Quick Results"],sku:"GLUTAX-SUPREME-PICO-8800000",volume:"10 Sessions",stock:0},{id:64,name:"Bihaku Premium Glutathione Skin Whitening Supplement",category:"Capsules",brand:"Bihaku",price:13500,comparePrice:18500,image:"/image/bihaku/premium-glutathione-1.jpeg",images:["/image/bihaku/premium-glutathione-1.jpeg","/image/bihaku/premium-glutathione-2.jpg","/image/bihaku/premium-glutathione-3.jpg","/image/bihaku/premium-glutathione-4.jpg"],description:"Japanese skin whitening supplement with L-Glutathione, Vitamin C, and Alpha-Lipoic Acid. Reduces melanin, evens skin tone, provides antioxidant protection, and supports skin rejuvenation.",details:`
    <strong>Bihaku Premium Glutathione Skin Whitening Supplement</strong><br/><br/>
    A highly acclaimed skin whitening supplement recognized for its superior formulation and proven effectiveness. Crafted with meticulous attention to detail and quality, this product encapsulates the best of Japanese skincare innovation, offering users a safe and effective solution to achieve brighter, more radiant skin.<br/><br/>
    
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

    <strong>Origin:</strong> Japan<br/><br/>

    <em class="text-xs text-gray-400">Note: Results may vary. Consult physician before use.</em>
    `,benefits:["Made in Japan","L-Glutathione + Vitamin C + ALA","Reduces Melanin Production","Evens Skin Tone & Dark Spots","Antioxidant & Detox Support","Promotes Collagen & Elasticity","Anti-Inflammatory","Safe for Long-Term Use"],sku:"BIHAKU-PREMIUM-GLUTA",volume:"1 Bottle",stock:10},{id:65,name:"Aqua Skin Glutathione and Collagen Capsules",category:"Capsules",brand:"Aqua Skin",price:4e3,comparePrice:7e3,image:"/image/aqua/glutathione-collagen-capsules-1.jpg",images:["/image/aqua/glutathione-collagen-capsules-1.jpg","/image/aqua-skin/glutathione-collagen-capsules-2.jpeg","/image/aqua-skin/glutathione-collagen-capsules-3.jpeg","/image/aqua-skin/glutathione-collagen-capsules-4.jpeg"],description:"Made in Japan glutathione and collagen capsules with N-Acetyl L-Cysteine and pearl powder. Supports skin whitening, hydration, elasticity, and overall wellness.",details:`
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
    `,benefits:["10 Sessions per Box","Made in Japan","9,000,000mg Glutathione","Boosts Collagen & Hydration","Anti-Aging & Wrinkle Reduction","Treats Acne, Eczema & Discoloration","Dermatologically Tested","No Side Effects"],sku:"NC24-ULTRA-SENSE-9M",volume:"10 Sessions",stock:10}],V0=["All Brands","Glutax","Aqua Skin","Miracle White","Glowtiqa Paris","Relumins","Nc24","Lucchini","Shiro","Daehan Nupharm","Saint Blanc","Neutro","Dr James","Vita Glow","iskin","Core","Ratiopharm","LemonBottle","KFDA","St Dalfour","Miracle Gain","Roche","Japan Beauty Booster","Cindyrella","Rejuran","Nexus Pharma","Cosdaq","QR 678 Neo","Fillmed","Profhilo","Laroscorbine"],fs=[{id:1,title:"The Science Behind Glutathione: Beyond Skin Whitening",excerpt:"Exploring the systemic antioxidant benefits of high-dose glutathione therapies and their role in cellular detoxification and immune system support.",content:`
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
    `,date:"Nov 20, 2025",image:"/image/blog4.jpg",category:"Safety & Compliance",author:"Safety Board"}],Um=[{name:"Injection",id:"Injection"},{name:"Cream",id:"Cream"},{name:"Weight",id:"Weight"},{name:"Soap",id:"Soap"},{name:"Combo",id:"Combo"},{name:"Filler",id:"Filler"},{name:"Supplement",id:"Supplement"},{name:"Lotion",id:"Lotion"},{name:"Treatment",id:"Treatment"}],W0=[{q:"Are your products authentic?",a:"Yes, exclusively. We are an authorized distributor sourcing directly from manufacturers to guarantee 100% authenticity and efficacy. Every batch is verified before shipment."},{q:"Do you require a medical license to purchase?",a:"While we primarily supply to licensed clinics and dermatologists, certain supplements and skincare items are available for general purchase. Injectables are strictly for professional use."},{q:"What is the typical shipping time?",a:"Domestic orders are typically processed within 24 hours. Delivery to metro cities takes 2-3 business days, while other regions take 4-6 business days."},{q:"Do you offer bulk discounts?",a:"Yes, we offer tiered pricing for wholesale partners. Please contact our sales team or register as a partner on the Contact page for a price list."}],F0="service_h64g36k",Y0="template_5gaadeg",Q0="4025kcdA_kwN4-yDH",Nt="https://api.shaatrading.in",jm=Nt,K0="rzp_live_Rgl2NCpQcyFajX",X0=[1,2,3,4],Z0=({message:u,type:d,onClose:b})=>{if(q.useEffect(()=>{const y=setTimeout(b,3e3);return()=>clearTimeout(y)},[b]),!u)return null;const c={success:"bg-black text-white",error:"bg-red-500 text-white",info:"bg-gray-800 text-white"};return l.jsxs("div",{className:`fixed bottom-6 left-1/2 -translate-x-1/2 z-[70] px-6 py-3 rounded-full shadow-xl flex items-center gap-3 transition-all duration-300 animate-slide-up ${c[d]||c.info}`,children:[d==="success"&&l.jsx(Tm,{size:16}),l.jsx("span",{className:"text-sm font-medium",children:u})]})},Fa=({children:u,variant:d="primary",className:b="",onClick:c,...y})=>{const g="inline-flex items-center justify-center px-8 py-3 transition-all duration-300 font-medium tracking-wide text-sm cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed rounded-md",j={primary:"bg-black text-white hover:bg-gray-800 active:scale-95 shadow-sm hover:shadow-lg",secondary:"bg-gray-800 text-white hover:bg-gray-700 active:scale-95 shadow-sm hover:shadow-md",outline:"bg-transparent border border-white text-white hover:bg-white hover:text-black active:scale-95",ghost:"text-black hover:bg-gray-100"};return l.jsx("button",{className:`${g} ${j[d]} ${b}`,onClick:c,...y,children:u})},J0=({title:u,subtitle:d,center:b=!0})=>l.jsxs("div",{className:`mb-8 md:mb-12 ${b?"text-center":""}`,children:[l.jsx("h2",{className:"font-serif text-3xl md:text-4xl text-black mb-3",children:u}),d&&l.jsx("p",{className:"text-gray-600 font-light max-w-2xl mx-auto px-4",children:d}),l.jsx("div",{className:`h-0.5 w-20 bg-gray-800 mt-6 ${b?"mx-auto":""}`})]}),$0=({currentPage:u,setCurrentPage:d,cartCount:b,toggleCart:c,mobileMenuOpen:y,setMobileMenuOpen:g,setShopFilter:j,setBrandFilter:h,searchQuery:f,setSearchQuery:m,user:T,handleLogout:S})=>{const[w,B]=q.useState(!1),[L,_]=q.useState(!1),[I,Q]=q.useState(!1),[je,fe]=q.useState({categories:!1,brands:!1,account:!1}),be=he=>{m(he.target.value),he.target.value.length>0&&u!=="shop"&&d("shop")};return l.jsxs(l.Fragment,{children:[l.jsx("div",{className:"bg-[#e67e22] text-white py-2 text-center text-[11px] font-bold tracking-wider",children:"PAN INDIA SHIPPING AND COLD CHAIN DELIVERY AVAILABLE!"}),l.jsxs("header",{className:"sticky top-0 z-50 bg-white border-b-2 border-black",children:[l.jsxs("div",{className:"max-w-7xl mx-auto px-4 md:px-6 h-16 md:h-20 flex items-center justify-between gap-8",children:[l.jsxs("div",{className:"flex items-center gap-4 shrink-0",children:[l.jsx("button",{className:"lg:hidden p-2 text-black hover:bg-gray-100 rounded-sm",onClick:()=>g(!0),"aria-label":"Open menu",children:l.jsx(C0,{size:24})}),l.jsx("div",{className:"cursor-pointer",onClick:()=>d("home"),children:l.jsx("span",{className:"text-2xl md:text-3xl font-sans font-black uppercase tracking-tighter text-black select-none block",style:{fontStyle:"normal",fontWeight:950},children:"SHAA TRADING®"})})]}),l.jsx("div",{className:"hidden lg:flex flex-1 max-w-xl relative mx-4",children:l.jsxs("div",{className:"relative w-full flex items-center bg-gray-50 border border-gray-300 rounded-md px-4 py-2.5 transition-all focus-within:border-black focus-within:bg-white",children:[l.jsx("input",{id:"nav-search-desktop",type:"text",placeholder:"SEARCH FOR PRODUCTS",value:f,onChange:be,className:"bg-transparent border-none outline-none text-xs font-bold tracking-wider text-black w-full placeholder-gray-400 uppercase"}),l.jsx("button",{className:"text-[10px] font-black uppercase tracking-widest text-gray-400 hover:text-black transition-colors ml-2",children:"SEARCH"})]})}),l.jsxs("div",{className:"flex items-center gap-3 md:gap-5 shrink-0",children:[l.jsx("button",{className:"lg:hidden p-2 text-black",onClick:()=>B(!w),children:l.jsx(ec,{size:22})}),l.jsxs("div",{className:"relative hidden md:block",onMouseEnter:()=>Q(!0),onMouseLeave:()=>Q(!1),children:[l.jsx("button",{className:"p-2 text-black hover:bg-gray-50 rounded-sm transition-colors",children:l.jsx(Lm,{size:24,strokeWidth:1.5})}),l.jsx("div",{className:`absolute top-full right-0 w-52 bg-white shadow-2xl border-2 border-black p-2 mt-1 transition-all duration-200 origin-top-right ${I?"opacity-100 scale-100 visible":"opacity-0 scale-95 invisible"}`,children:T?l.jsxs(l.Fragment,{children:[l.jsxs("div",{className:"px-3 py-2 border-b border-gray-100 mb-1",children:[l.jsx("p",{className:"text-[9px] font-bold text-gray-400 uppercase tracking-wider",children:"Signed in as"}),l.jsx("p",{className:"text-xs font-black uppercase tracking-tight truncate text-black",children:T.name})]}),l.jsxs("button",{onClick:()=>{d("orders"),Q(!1)},className:"w-full text-left px-3 py-2 text-xs font-bold uppercase tracking-wider text-gray-700 hover:bg-gray-100 rounded flex items-center gap-2",children:[l.jsx(Fn,{size:14})," My Orders"]}),l.jsxs("button",{onClick:()=>{d("track"),Q(!1)},className:"w-full text-left px-3 py-2 text-xs font-bold uppercase tracking-wider text-gray-700 hover:bg-gray-100 rounded flex items-center gap-2",children:[l.jsx(ms,{size:14})," Track Order"]}),T.isAdmin&&l.jsxs("button",{onClick:()=>{d("admin"),Q(!1)},className:"w-full text-left px-3 py-2 text-xs font-bold uppercase tracking-wider text-gray-700 hover:bg-gray-100 rounded flex items-center gap-2",children:[l.jsx(ys,{size:14})," Admin Panel"]}),l.jsxs("button",{onClick:()=>{S(),Q(!1)},className:"w-full text-left px-3 py-2 text-xs font-bold uppercase tracking-wider text-red-600 hover:bg-red-50 rounded mt-1 flex items-center gap-2",children:[l.jsx(fi,{size:14})," Logout"]})]}):l.jsxs(l.Fragment,{children:[l.jsx("button",{onClick:()=>{d("login"),Q(!1)},className:"w-full text-left px-3 py-2 text-xs font-bold uppercase tracking-wider text-gray-700 hover:bg-gray-100 rounded",children:"Login"}),l.jsx("button",{onClick:()=>{d("signup"),Q(!1)},className:"w-full text-left px-3 py-2 text-xs font-bold uppercase tracking-wider text-gray-700 hover:bg-gray-100 rounded",children:"Register"}),l.jsx("div",{className:"h-px bg-gray-100 my-1"}),l.jsxs("button",{onClick:()=>{d("track"),Q(!1)},className:"w-full text-left px-3 py-2 text-xs font-bold uppercase tracking-wider text-gray-700 hover:bg-gray-100 rounded flex items-center gap-2",children:[l.jsx(ms,{size:14})," Track Order"]})]})})]}),l.jsxs("button",{className:"relative p-2 text-black hover:bg-gray-50 rounded-sm transition-colors",onClick:c,children:[l.jsx(Fn,{size:24,strokeWidth:1.5}),b>0&&l.jsx("span",{className:"absolute -top-0.5 -right-0.5 bg-red-600 text-white text-[9px] font-black w-5 h-5 flex items-center justify-center rounded-full shadow-sm",children:b})]})]})]}),w&&l.jsx("div",{className:"lg:hidden px-4 pb-4 animate-fade-in",children:l.jsxs("div",{className:"flex items-center bg-gray-50 border border-gray-300 rounded-md px-3 py-2",children:[l.jsx("input",{type:"text",placeholder:"SEARCH FOR PRODUCTS...",value:f,onChange:be,className:"bg-transparent border-none outline-none text-xs font-bold w-full uppercase"}),f&&l.jsx("button",{onClick:()=>m(""),children:l.jsx(Yn,{size:16,className:"text-gray-400"})})]})}),l.jsx("div",{className:"bg-[#f3f4f6] border-t border-b border-black hidden lg:block",children:l.jsxs("div",{className:"max-w-7xl mx-auto px-6 h-12 flex items-center justify-center gap-6 xl:gap-8",children:[l.jsxs("div",{className:"relative h-full",onMouseEnter:()=>_(!0),onMouseLeave:()=>_(!1),children:[l.jsxs("button",{onClick:()=>{j("All"),h("All Brands"),d("shop")},className:`text-[11px] font-black uppercase tracking-widest transition-colors h-full px-2 flex items-center gap-1 border-b-2 ${u==="shop"?"border-black text-black":"border-transparent text-gray-700 hover:text-black"}`,children:["CATALOG ",l.jsx(Em,{size:12,strokeWidth:3})]}),l.jsxs("div",{className:`absolute top-full left-1/2 -translate-x-1/2 w-[500px] bg-white shadow-2xl border-2 border-black p-6 grid grid-cols-2 gap-6 transition-all duration-200 origin-top z-50 ${L?"opacity-100 scale-100 visible":"opacity-0 scale-95 invisible"}`,children:[l.jsxs("div",{children:[l.jsx("h4",{className:"text-[10px] font-black uppercase tracking-wider text-black border-b border-gray-200 pb-2 mb-3",children:"Categories"}),l.jsxs("div",{className:"flex flex-col gap-1.5 items-start",children:[l.jsx("button",{onClick:()=>{j("All"),d("shop"),_(!1)},className:"text-xs font-bold uppercase tracking-tight text-gray-500 hover:text-black transition-colors",children:"View All"}),Um.map(he=>l.jsx("button",{onClick:()=>{j(he.name),d("shop"),_(!1)},className:"text-xs font-bold uppercase tracking-tight text-gray-500 hover:text-black transition-colors",children:he.name},he.id))]})]}),l.jsxs("div",{children:[l.jsx("h4",{className:"text-[10px] font-black uppercase tracking-wider text-black border-b border-gray-200 pb-2 mb-3",children:"Brands"}),l.jsxs("div",{className:"flex flex-col gap-1.5 items-start",children:[l.jsx("button",{onClick:()=>{h("All Brands"),d("shop"),_(!1)},className:"text-xs font-bold uppercase tracking-tight text-gray-500 hover:text-black transition-colors",children:"All Brands"}),V0.slice(1,7).map(he=>l.jsx("button",{onClick:()=>{h(he),d("shop"),_(!1)},className:"text-xs font-bold uppercase tracking-tight text-gray-500 hover:text-black transition-colors",children:he},he))]})]})]})]}),l.jsx("button",{onClick:()=>{j("Injection"),d("shop")},className:`text-[11px] font-black uppercase tracking-widest transition-colors h-full px-2 border-b-2 flex items-center ${u==="shop"&&shopFilter==="Injection"?"border-black text-black":"border-transparent text-gray-700 hover:text-black"}`,children:"INJECTIONS"}),l.jsx("button",{onClick:()=>{j("Cream"),d("shop")},className:`text-[11px] font-black uppercase tracking-widest transition-colors h-full px-2 border-b-2 flex items-center ${u==="shop"&&shopFilter==="Cream"?"border-black text-black":"border-transparent text-gray-700 hover:text-black"}`,children:"CREAMS"}),l.jsx("button",{onClick:()=>{j("Weight"),d("shop")},className:`text-[11px] font-black uppercase tracking-widest transition-colors h-full px-2 border-b-2 flex items-center ${u==="shop"&&shopFilter==="Weight"?"border-black text-black":"border-transparent text-gray-700 hover:text-black"}`,children:"WEIGHT GAIN"}),l.jsx("button",{onClick:()=>d("blog"),className:`text-[11px] font-black uppercase tracking-widest transition-colors h-full px-2 border-b-2 flex items-center ${u==="blog"?"border-black text-black":"border-transparent text-gray-700 hover:text-black"}`,children:"BLOG"}),l.jsx("button",{onClick:()=>d("contact"),className:`text-[11px] font-black uppercase tracking-widest transition-colors h-full px-2 border-b-2 flex items-center ${u==="contact"?"border-black text-black":"border-transparent text-gray-700 hover:text-black"}`,children:"CONTACT"})]})})]}),l.jsxs("div",{className:`fixed inset-0 z-[60] flex ${y?"pointer-events-auto":"pointer-events-none"}`,children:[l.jsx("div",{className:`absolute inset-0 bg-black/50 transition-opacity duration-300 ${y?"opacity-100":"opacity-0"}`,onClick:()=>g(!1)}),l.jsx("div",{className:`relative bg-white w-[85%] max-w-xs h-full shadow-2xl transform transition-transform duration-300 ease-in-out ${y?"translate-x-0":"-translate-x-full"}`,children:l.jsxs("div",{className:"flex flex-col h-full border-r-2 border-black",children:[l.jsxs("div",{className:"p-6 flex justify-between items-center border-b-2 border-black",children:[l.jsx("span",{className:"text-2xl font-sans font-black uppercase tracking-tighter",children:"SHAA TRADING®"}),l.jsx("button",{onClick:()=>g(!1),className:"text-black",children:l.jsx(Yn,{size:24})})]}),l.jsx("div",{className:"flex-1 overflow-y-auto py-4 bg-gray-50",children:l.jsxs("div",{className:"flex flex-col font-bold uppercase tracking-wider text-xs",children:[l.jsx("button",{onClick:()=>{d("home"),g(!1)},className:"px-6 py-4 text-left text-black border-b border-gray-200 hover:bg-gray-100",children:"Home"}),l.jsx("button",{onClick:()=>{j("All"),h("All Brands"),d("shop"),g(!1)},className:"px-6 py-4 text-left text-black border-b border-gray-200 hover:bg-gray-100",children:"Catalog"}),l.jsx("button",{onClick:()=>{d("blog"),g(!1)},className:"px-6 py-4 text-left text-black border-b border-gray-200 hover:bg-gray-100",children:"Blog"}),l.jsx("button",{onClick:()=>{d("contact"),g(!1)},className:"px-6 py-4 text-left text-black border-b border-gray-200 hover:bg-gray-100",children:"Contact"})]})})]})})]})]})},ey=({navigateTo:u,showToast:d,transactionId:b})=>{const[c,y]=q.useState("processing"),[g,j]=q.useState(null);return q.useEffect(()=>{(async()=>{const f=JSON.parse(localStorage.getItem("temp_cart")||"[]"),m=JSON.parse(localStorage.getItem("temp_user")||"{}"),T=new URLSearchParams(window.location.search),S=b||T.get("tid")||"DEMO-"+Date.now();if(f.length===0){console.warn("No stored cart found");return}const w=f.reduce((_,I)=>_+I.price*I.quantity,0);j({cart:f,user:m,total:w,id:S,date:new Date().toLocaleDateString()});const B=f.map(_=>`• ${_.name} (Brand: ${_.brand}) - Qty: ${_.quantity} | Price: ₹${_.price}`).join(`
`),L={to_name:"Admin",customer_name:m.name,customer_email:m.email||"Not Provided",customer_phone:m.phone,shipping_address:m.address,order_items:B,total_amount:w.toLocaleString(),payment_id:S,order_id:S};try{if(!window.emailjs){const _=document.createElement("script");_.src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js",_.async=!0,document.body.appendChild(_),await new Promise(I=>_.onload=I)}await window.emailjs.send(F0,Y0,L,Q0),localStorage.removeItem("temp_cart"),localStorage.removeItem("temp_user"),y("sent"),d("Order confirmed and email sent!","success")}catch(_){console.error("Email Failed:",_),y("error"),d("Payment successful but email failed.","error")}})()},[b,d]),l.jsxs("div",{className:"min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4 md:p-8",children:[c==="processing"&&l.jsxs("div",{className:"animate-pulse text-center",children:[l.jsx("h2",{className:"text-2xl font-serif mb-2",children:"Finalizing Order..."}),l.jsx("p",{className:"text-gray-500",children:"Please do not close this window."})]}),c==="sent"&&g&&l.jsxs("div",{className:"animate-fade-in bg-white w-full max-w-2xl shadow-xl rounded-2xl overflow-hidden border border-gray-100",children:[l.jsxs("div",{className:"bg-green-50 p-8 text-center border-b border-green-100",children:[l.jsx("div",{className:"w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm",children:l.jsx(Tm,{size:32,strokeWidth:3})}),l.jsx("h2",{className:"text-3xl font-serif text-gray-900 mb-2",children:"Thank you for your order!"}),l.jsx("p",{className:"text-gray-500",children:"Your order has been confirmed and is being processed."}),l.jsxs("div",{className:"mt-4 inline-block bg-white px-4 py-2 rounded-lg border border-green-200 text-sm font-medium text-green-800",children:["Order #",g.id.slice(-8).toUpperCase()]})]}),l.jsxs("div",{className:"p-8",children:[l.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 pb-8 border-b border-gray-100",children:[l.jsxs("div",{children:[l.jsx("h4",{className:"text-xs font-bold text-gray-400 uppercase tracking-widest mb-3",children:"Shipping Details"}),l.jsx("p",{className:"font-medium text-gray-900",children:g.user.name}),l.jsx("p",{className:"text-gray-500 text-sm mt-1",children:g.user.address}),l.jsx("p",{className:"text-gray-500 text-sm mt-1",children:g.user.phone}),l.jsx("p",{className:"text-gray-500 text-sm",children:g.user.email})]}),l.jsxs("div",{className:"md:text-right",children:[l.jsx("h4",{className:"text-xs font-bold text-gray-400 uppercase tracking-widest mb-3",children:"Order Info"}),l.jsxs("p",{className:"text-gray-500 text-sm",children:["Date: ",l.jsx("span",{className:"text-gray-900 font-medium",children:g.date})]}),l.jsxs("p",{className:"text-gray-500 text-sm mt-1",children:["Payment Method: ",l.jsx("span",{className:"text-gray-900 font-medium",children:"Online (Razorpay)"})]}),l.jsxs("p",{className:"text-gray-500 text-sm mt-1",children:["Status: ",l.jsx("span",{className:"text-green-600 font-medium",children:"Paid"})]})]})]}),l.jsxs("div",{className:"mb-8",children:[l.jsx("h4",{className:"text-xs font-bold text-gray-400 uppercase tracking-widest mb-4",children:"Order Summary"}),l.jsx("div",{className:"space-y-4",children:g.cart.map(h=>l.jsxs("div",{className:"flex justify-between items-start",children:[l.jsxs("div",{className:"flex gap-4",children:[l.jsx("div",{className:"w-12 h-12 bg-gray-50 rounded-md overflow-hidden shrink-0 border border-gray-100",children:l.jsx("img",{loading:"lazy",src:h.image,alt:h.name,className:"w-full h-full object-cover"})}),l.jsxs("div",{children:[l.jsx("p",{className:"text-sm font-medium text-gray-900 line-clamp-1",children:h.name}),l.jsxs("p",{className:"text-xs text-gray-500",children:["Qty: ",h.quantity," × ₹",h.price.toLocaleString()]})]})]}),l.jsxs("p",{className:"text-sm font-medium text-gray-900",children:["₹",(h.price*h.quantity).toLocaleString()]})]},h.id))})]}),l.jsxs("div",{className:"flex justify-between items-center pt-6 border-t border-gray-100",children:[l.jsx("span",{className:"text-gray-600 font-medium",children:"Total Amount Paid"}),l.jsxs("span",{className:"text-2xl font-serif text-gray-900",children:["₹",g.total.toLocaleString()]})]})]}),l.jsxs("div",{className:"bg-gray-50 p-6 border-t border-gray-100 flex flex-col sm:flex-row gap-4 justify-between items-center",children:[l.jsxs("button",{onClick:()=>window.print(),className:"flex items-center gap-2 text-sm text-gray-500 hover:text-black transition-colors",children:[l.jsx(D0,{size:16})," Print Receipt"]}),l.jsx(Fa,{onClick:()=>{window.history.replaceState(null,"","/"),u("home")},className:"w-full sm:w-auto",children:"Continue Shopping"})]})]}),c==="error"&&l.jsxs("div",{className:"bg-white p-8 rounded-2xl shadow-xl max-w-md w-full border-l-4 border-red-500",children:[l.jsx("h2",{className:"text-2xl font-serif text-red-500 mb-2",children:"Something went wrong"}),l.jsx("p",{className:"text-gray-500 mb-6",children:"We received your payment, but couldn't generate the email receipt automatically. Please contact support."}),l.jsx(Fa,{onClick:()=>u("contact"),children:"Contact Support"})]})]})},ty=({cart:u,updateQuantity:d,removeFromCart:b,checkout:c,navigateTo:y})=>{const[g,j]=q.useState({name:"",phone:"",email:"",address:""}),h=u.reduce((w,B)=>w+B.price*B.quantity,0),m=h+0,T=g.name&&g.phone&&g.address&&g.email,S=w=>j({...g,[w.target.name]:w.target.value});return u.length===0?l.jsxs("div",{className:"animate-fade-in min-h-[70vh] flex flex-col items-center justify-center text-center px-6",children:[l.jsx("div",{className:"w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mb-6",children:l.jsx(Fn,{size:32,strokeWidth:1,className:"text-gray-300"})}),l.jsx("h2",{className:"font-serif text-3xl text-gray-900 mb-2",children:"Your cart is empty"}),l.jsx("p",{className:"text-gray-500 mb-8 max-w-xs mx-auto",children:"Looks like you haven't added any clinical formulations to your order yet."}),l.jsx("button",{onClick:()=>y("shop"),className:"bg-black text-white px-10 py-4 text-xs font-bold uppercase tracking-[0.2em] hover:bg-gray-800 transition-all",children:"Start Shopping"})]}):l.jsxs("div",{className:"animate-fade-in bg-[#fbfbfb] min-h-screen pb-24",children:[l.jsx("div",{className:"bg-white border-b border-gray-100 py-12 mb-8",children:l.jsxs("div",{className:"max-w-7xl mx-auto px-6",children:[l.jsx("h1",{className:"font-serif text-4xl text-gray-900",children:"Shopping Cart"}),l.jsxs("div",{className:"flex items-center gap-2 text-[10px] uppercase tracking-widest text-gray-400 mt-2",children:[l.jsx("button",{onClick:()=>y("home"),className:"hover:text-black",children:"Home"}),l.jsx("span",{children:"/"}),l.jsx("button",{onClick:()=>y("shop"),className:"hover:text-black",children:"Shop"}),l.jsx("span",{children:"/"}),l.jsx("span",{className:"text-black font-bold",children:"Cart"})]})]})}),l.jsx("div",{className:"max-w-7xl mx-auto px-6",children:l.jsxs("div",{className:"flex flex-col lg:flex-row gap-12",children:[l.jsxs("div",{className:"flex-1 space-y-6",children:[l.jsxs("div",{className:"hidden md:grid grid-cols-12 px-4 pb-4 border-b border-gray-100 text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400",children:[l.jsx("div",{className:"col-span-6",children:"Product Details"}),l.jsx("div",{className:"col-span-3 text-center",children:"Quantity"}),l.jsx("div",{className:"col-span-3 text-right",children:"Total"})]}),u.map(w=>l.jsxs("div",{className:"bg-white border border-gray-100 p-4 md:p-6 rounded-sm flex flex-col md:grid md:grid-cols-12 items-center gap-6",children:[l.jsxs("div",{className:"col-span-6 flex items-center gap-6 w-full",children:[l.jsx("div",{className:"w-20 h-24 bg-[#f9f9f9] rounded-sm shrink-0 overflow-hidden cursor-pointer",onClick:()=>y("product",w),children:l.jsx("img",{src:w.image,alt:w.name,className:"w-full h-full object-contain p-2 mix-blend-multiply"})}),l.jsxs("div",{className:"flex-1",children:[l.jsx("h3",{className:"font-medium text-gray-900 leading-tight mb-1",children:w.name}),l.jsx("p",{className:"text-[10px] text-gray-400 uppercase tracking-widest mb-2",children:w.brand}),l.jsxs("p",{className:"text-sm font-bold",children:["₹",w.price.toLocaleString()]}),l.jsxs("button",{onClick:()=>b(w.id),className:"text-[10px] uppercase tracking-widest text-red-400 font-bold mt-3 hover:text-red-600 transition-colors flex items-center gap-1",children:[l.jsx(Bm,{size:12})," Remove"]})]})]}),l.jsx("div",{className:"col-span-3 flex justify-center w-full",children:l.jsxs("div",{className:"flex items-center border border-gray-200 rounded-sm",children:[l.jsx("button",{onClick:()=>d(w.id,-1),className:"px-3 py-2 hover:bg-gray-50 text-gray-500",children:l.jsx(Dm,{size:14})}),l.jsx("span",{className:"w-10 text-center font-medium text-sm",children:w.quantity}),l.jsx("button",{onClick:()=>d(w.id,1),className:"px-3 py-2 hover:bg-gray-50 text-gray-500",children:l.jsx(zm,{size:14})})]})}),l.jsx("div",{className:"col-span-3 text-right w-full",children:l.jsxs("p",{className:"font-bold text-gray-900",children:["₹",(w.price*w.quantity).toLocaleString()]})})]},w.id)),l.jsxs("button",{onClick:()=>y("shop"),className:"flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-black transition-colors pt-4",children:[l.jsx(ps,{size:14})," Continue Shopping"]})]}),l.jsx("div",{className:"lg:w-[400px] shrink-0",children:l.jsxs("div",{className:"bg-white border border-gray-100 p-8 rounded-sm sticky top-32 shadow-sm",children:[l.jsx("h2",{className:"font-serif text-2xl mb-6",children:"Order Summary"}),l.jsxs("div",{className:"space-y-4 mb-8 text-sm",children:[l.jsxs("div",{className:"flex justify-between text-gray-500",children:[l.jsx("span",{children:"Subtotal"}),l.jsxs("span",{className:"text-gray-900 font-medium",children:["₹",h.toLocaleString()]})]}),l.jsxs("div",{className:"flex justify-between text-gray-500",children:[l.jsx("span",{children:"Shipping"}),l.jsx("span",{className:"text-green-600 font-medium uppercase text-[10px] tracking-widest",children:"Calculated at checkout"})]}),l.jsx("div",{className:"h-px bg-gray-100 my-4"}),l.jsxs("div",{className:"flex justify-between items-baseline",children:[l.jsx("span",{className:"text-base font-bold uppercase tracking-widest",children:"Total"}),l.jsxs("span",{className:"text-2xl font-serif font-bold text-gray-900",children:["₹",m.toLocaleString()]})]})]}),l.jsxs("div",{className:"space-y-4 mb-8",children:[l.jsx("p",{className:"text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-4",children:"Shipping Information"}),l.jsx("input",{name:"name",placeholder:"Full Name",value:g.name,onChange:S,className:"w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-sm text-sm focus:border-black outline-none transition-colors"}),l.jsx("input",{name:"phone",placeholder:"Phone Number",value:g.phone,onChange:S,className:"w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-sm text-sm focus:border-black outline-none transition-colors"}),l.jsx("input",{name:"email",type:"email",placeholder:"Email Address",value:g.email,onChange:S,className:"w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-sm text-sm focus:border-black outline-none transition-colors"}),l.jsx("textarea",{name:"address",placeholder:"Detailed Clinic / Home Address",value:g.address,onChange:S,rows:"3",className:"w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-sm text-sm focus:border-black outline-none transition-colors resize-none"})]}),l.jsx(Fa,{className:"w-full py-4 text-xs font-bold uppercase tracking-[0.2em]",onClick:()=>c(g),disabled:!T,children:T?`Proceed to Pay ₹${m.toLocaleString()}`:"Enter Details to Checkout"}),l.jsxs("div",{className:"mt-6 flex items-center justify-center gap-4 opacity-40 grayscale",children:[l.jsx(ys,{size:16}),l.jsx("span",{className:"text-[9px] uppercase tracking-widest font-bold",children:"Secure SSL Checkout"})]})]})})]})})]})},iy=({isOpen:u,onClose:d,cart:b,updateQuantity:c,removeFromCart:y,checkout:g})=>{const[j,h]=q.useState({name:"",phone:"",email:"",address:""}),f=b.reduce((S,w)=>S+w.price*w.quantity,0),m=j.name&&j.phone&&j.address&&j.email,T=S=>h({...j,[S.target.name]:S.target.value});return u?l.jsxs("div",{className:"fixed inset-0 z-[60] flex justify-end",children:[l.jsx("div",{className:"absolute inset-0 bg-black/20 backdrop-blur-sm",onClick:d}),l.jsxs("div",{className:"relative bg-white w-full max-w-md h-full shadow-2xl flex flex-col animate-slide-in",children:[l.jsxs("div",{className:"p-6 border-b border-gray-100 flex items-center justify-between",children:[l.jsx("h2",{className:"font-serif text-2xl",children:"Your Cart"}),l.jsx("button",{onClick:d,children:l.jsx(Yn,{size:20})})]}),l.jsx("div",{className:"flex-1 overflow-y-auto p-6",children:b.length===0?l.jsxs("div",{className:"h-full flex flex-col items-center justify-center text-center text-gray-400",children:[l.jsx(Fn,{size:48,strokeWidth:1,className:"mb-4 text-gray-200"}),l.jsx("p",{className:"text-lg font-light",children:"Your cart is empty"}),l.jsx("button",{onClick:d,className:"mt-4 text-gray-800 hover:text-black transition-colors font-medium text-sm",children:"Continue Shopping"})]}):l.jsx("div",{className:"space-y-6",children:b.map(S=>l.jsxs("div",{className:"flex gap-4",children:[l.jsx("div",{className:"w-20 h-20 bg-gray-50 rounded-lg overflow-hidden shrink-0",children:l.jsx("img",{loading:"lazy",src:S.image,alt:S.name,className:"w-full h-full object-cover"})}),l.jsxs("div",{className:"flex-1",children:[l.jsxs("div",{className:"flex justify-between items-start mb-1",children:[l.jsx("h3",{className:"font-serif text-lg leading-tight",children:S.name}),l.jsx("button",{onClick:()=>y(S.id),className:"text-gray-300 hover:text-red-400 transition-colors p-1",children:l.jsx(Bm,{size:16})})]}),l.jsxs("p",{className:"text-gray-800 text-sm mb-3",children:["₹",S.price.toLocaleString()]}),l.jsx("div",{className:"flex items-center gap-3",children:l.jsxs("div",{className:"flex items-center border border-gray-200 rounded",children:[l.jsx("button",{onClick:()=>c(S.id,-1),className:"px-2 py-1 hover:bg-gray-50 text-gray-600",children:l.jsx(Dm,{size:12})}),l.jsx("span",{className:"w-8 text-center text-sm font-medium",children:S.quantity}),l.jsx("button",{onClick:()=>c(S.id,1),className:"px-2 py-1 hover:bg-gray-50 text-gray-600",children:l.jsx(zm,{size:12})})]})})]})]},S.id))})}),b.length>0&&l.jsxs("div",{className:"p-6 bg-gray-50 border-t border-gray-100",children:[l.jsxs("div",{className:"flex justify-between items-center mb-4",children:[l.jsx("span",{className:"text-gray-600",children:"Subtotal"}),l.jsxs("span",{className:"font-serif text-2xl",children:["₹",f.toLocaleString()]})]}),l.jsxs("div",{className:"space-y-3 mb-4",children:[l.jsx("input",{name:"name",placeholder:"Full Name",value:j.name,onChange:T,className:"w-full p-2 border border-gray-200 rounded focus:border-gray-800 outline-none"}),l.jsx("input",{name:"phone",placeholder:"Phone",value:j.phone,onChange:T,className:"w-full p-2 border border-gray-200 rounded focus:border-gray-800 outline-none"}),l.jsx("input",{name:"email",type:"email",placeholder:"Email Address",value:j.email,onChange:T,className:"w-full p-2 border border-gray-200 rounded focus:border-gray-800 outline-none"}),l.jsx("textarea",{name:"address",placeholder:"Address",value:j.address,onChange:T,className:"w-full p-2 border border-gray-200 rounded focus:border-gray-800 outline-none resize-none"})]}),l.jsxs(Fa,{className:"w-full",onClick:()=>g(j),disabled:!m,children:["Pay ₹",f.toLocaleString()]})]})]})]}):null},ay=({navigateTo:u,addToCart:d,setShopFilter:b})=>{const c=la.filter(L=>X0.includes(L.id)),y=[...la].reverse().slice(0,4),[g,j]=q.useState(0),[h,f]=q.useState(!1),m=[{id:24,desktop:"/image/glowtiqa/glowtiqa-banner.png",mobile:"/image/glowtiqa/glowtiqa-banner-mobile.png",alt:"Glowtiqa Advance Care Cream"},{id:2,desktop:"/image/glutax/glutax-banner.png",mobile:"/image/glutax/glutax-banner-mobile.png",alt:"Glutax 5GS ADV"},{id:45,desktop:"/image/cosdaq/cindella-banner.png",mobile:"/image/cosdaq/cindella-banner-mobile.png",alt:"Cindella Whitening"}];q.useEffect(()=>{if(h)return;const L=setInterval(()=>{T()},5e3);return()=>clearInterval(L)},[g,h]);const T=()=>{j(L=>L===m.length-1?0:L+1)},S=()=>{j(L=>L===0?m.length-1:L-1)},w=()=>{const L=m[g],_=la.find(I=>I.id===L.id);_&&u("product",_)},B=[{id:1,name:"Injection",image:"/image/injection.jpeg"},{id:2,name:"Cream",image:"/image/cream.jpeg"},{id:3,name:"Weight",image:"/image/weight.jpeg"},{id:4,name:"Soap",image:"/image/soap.jpeg"},{id:5,name:"Combo",image:"/image/combo.jpeg"},{id:6,name:"Filler",image:"/image/filler.jpeg"},{id:7,name:"Supplement",image:"/image/supplement.jpeg"},{id:8,name:"Lotion",image:"/image/lotion.jpeg"}];return l.jsxs("div",{className:"animate-fade-in bg-white",children:[l.jsx("section",{className:"relative bg-white overflow-hidden border-b border-gray-50",children:l.jsx("div",{className:"max-w-7xl mx-auto px-0 md:px-6 relative group",children:l.jsxs("div",{className:"cursor-pointer relative overflow-hidden",onMouseEnter:()=>f(!0),onMouseLeave:()=>f(!1),children:[l.jsx("div",{className:"flex transition-transform duration-1000 ease-in-out",style:{transform:`translateX(-${g*100}%)`},onClick:w,children:m.map((L,_)=>l.jsxs("div",{className:"w-full shrink-0",children:[l.jsx("img",{src:L.desktop,alt:L.alt,className:"hidden md:block w-full h-auto object-contain"}),l.jsx("img",{src:L.mobile,alt:L.alt,className:"block md:hidden w-full h-auto object-contain"})]},_))}),l.jsx("button",{onClick:L=>{L.stopPropagation(),S()},className:"absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm border border-gray-100 flex items-center justify-center text-gray-800 opacity-0 group-hover:opacity-100 transition-all hover:bg-black hover:text-white z-10 shadow-sm",children:l.jsx(ps,{size:18})}),l.jsx("button",{onClick:L=>{L.stopPropagation(),T()},className:"absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm border border-gray-100 flex items-center justify-center text-gray-800 opacity-0 group-hover:opacity-100 transition-all hover:bg-black hover:text-white z-10 shadow-sm",children:l.jsx(f0,{size:18})})]})})}),l.jsx("section",{className:"py-12 md:py-16 bg-[#fcfcfc] border-b border-gray-50",children:l.jsxs("div",{className:"max-w-7xl mx-auto px-4 md:px-6",children:[l.jsx("h2",{className:"text-[10px] font-bold uppercase tracking-[0.4em] text-gray-400 mb-8 text-center",children:"Browse Collections"}),l.jsx("div",{className:"flex overflow-x-auto gap-4 md:gap-6 pb-4 scrollbar-hide snap-x justify-start md:justify-center items-start",children:B.map(L=>l.jsxs("div",{onClick:()=>{b(L.name),u("shop")},className:"snap-start flex-shrink-0 flex flex-col items-center group cursor-pointer w-20 md:w-24",children:[l.jsx("div",{className:"relative aspect-square w-full overflow-hidden rounded-full mb-3 bg-white border border-gray-100 transition-all duration-500 group-hover:shadow-lg group-hover:border-black/10",children:l.jsx("div",{className:"absolute inset-0 flex items-center justify-center p-4",children:l.jsx("img",{src:L.image,alt:L.name,onError:_=>{_.target.src="/image/logo.jpg"},className:"w-full h-full object-contain transition-transform duration-700 group-hover:scale-110"})})}),l.jsx("span",{className:"text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-gray-400 group-hover:text-black text-center transition-colors",children:L.name})]},L.id))})]})}),l.jsx("section",{className:"py-16 md:py-24",children:l.jsxs("div",{className:"max-w-7xl mx-auto px-6",children:[l.jsxs("div",{className:"flex justify-between items-end mb-8",children:[l.jsxs("div",{children:[l.jsx("h2",{className:"text-xl md:text-2xl font-serif text-gray-900 uppercase tracking-widest",children:"Our Best Sellers"}),l.jsx("div",{className:"h-0.5 w-8 bg-black mt-2"})]}),l.jsx("button",{onClick:()=>u("shop"),className:"text-[10px] font-bold uppercase tracking-widest border-b border-black pb-0.5 hover:text-gray-500 transition-colors",children:"View All"})]}),l.jsx("div",{className:"flex overflow-x-auto pb-6 gap-4 scrollbar-hide snap-x items-stretch",children:c.map(L=>l.jsx("div",{className:"min-w-[200px] md:min-w-[240px] snap-start flex",children:l.jsx(Jo,{product:L,navigateTo:u,addToCart:d})},L.id))})]})}),l.jsx("section",{className:"py-16 bg-white border-t border-gray-100",children:l.jsxs("div",{className:"max-w-7xl mx-auto px-6",children:[l.jsx("h2",{className:"text-xl md:text-2xl font-serif mb-10 text-gray-900 text-center uppercase tracking-widest",children:"New Arrivals"}),l.jsx("div",{className:"grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6",children:y.map(L=>l.jsx(Jo,{product:L,navigateTo:u,addToCart:d},L.id))}),l.jsx("div",{className:"text-center mt-12",children:l.jsx("button",{onClick:()=>u("shop"),className:"bg-black text-white px-10 py-3 text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-gray-800 transition-all shadow-md",children:"Explore All Products"})})]})})]})},ny=({navigateTo:u,setAuthToken:d,setUser:b,showToast:c})=>{const[y,g]=q.useState(""),[j,h]=q.useState(""),[f,m]=q.useState(!1),T=async S=>{S.preventDefault(),m(!0);try{const w=await fetch(`${Nt}/api/auth/login`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:y,password:j})}),B=await w.json();if(console.log("🔥 LOGIN RESPONSE:",B),!w.ok)throw new Error(B.message||"Invalid login credentials");const L=B.token||B.accessToken,_={_id:B._id,name:B.name,email:B.email,isAdmin:!!B.isAdmin};console.log("🔥 FINAL USER STORED:",_),d(L),b(_),localStorage.setItem("shaa_token",L),localStorage.setItem("shaa_user",JSON.stringify(_)),c(`Welcome back, ${_.name}`,"success"),setTimeout(()=>{_.isAdmin?(console.log("🔥 Redirecting: ADMIN PANEL"),u("admin")):(console.log("🔥 Redirecting: HOME"),u("home"))},200)}catch(w){console.error("🔥 LOGIN ERROR:",w),c(w.message||"Something went wrong","error")}m(!1)};return l.jsx("div",{className:"min-h-screen flex items-center justify-center bg-gray-50 px-4",children:l.jsxs("div",{className:"w-full max-w-md bg-white shadow-md rounded-lg p-6",children:[l.jsx("h2",{className:"text-2xl font-semibold text-center mb-4",children:"Login to Your Account"}),l.jsxs("form",{onSubmit:T,className:"space-y-4",children:[l.jsxs("div",{children:[l.jsx("label",{className:"block mb-1 text-sm font-medium",children:"Email"}),l.jsx("input",{type:"email",required:!0,value:y,onChange:S=>g(S.target.value),className:"w-full p-2 border rounded-lg outline-none"})]}),l.jsxs("div",{children:[l.jsx("label",{className:"block mb-1 text-sm font-medium",children:"Password"}),l.jsx("input",{type:"password",required:!0,value:j,onChange:S=>h(S.target.value),className:"w-full p-2 border rounded-lg outline-none"})]}),l.jsx("button",{type:"submit",disabled:f,className:"w-full bg-black text-white py-2 rounded-lg hover:bg-gray-900 transition",children:f?"Logging in...":"Login"})]}),l.jsxs("p",{className:"text-center text-sm text-gray-600 mt-4",children:["Don't have an account?"," ",l.jsx("span",{className:"text-black underline cursor-pointer",onClick:()=>u("signup"),children:"Sign up"})]})]})})},ly=({navigateTo:u,showToast:d})=>{const[b,c]=q.useState(""),[y,g]=q.useState(""),[j,h]=q.useState(""),[f,m]=q.useState(!1),T=async S=>{S.preventDefault(),m(!0);try{const w=await fetch(`${Nt}/api/auth/register`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:b,email:y,password:j})}),B=await w.json();if(!w.ok)throw new Error(B.message||"Signup failed");d("Account created. Please login.","success"),u("login")}catch(w){console.error(w),d(w.message||"Signup error","error")}finally{m(!1)}};return l.jsxs("div",{className:"min-h-[calc(100vh-80px)] flex flex-col md:flex-row bg-white animate-fade-in",children:[l.jsxs("div",{className:"w-full md:w-1/2 h-64 md:h-auto md:order-2 relative bg-gray-900 overflow-hidden",children:[l.jsx("div",{className:"absolute inset-0 bg-[url('/image/blog4.jpg')] bg-cover bg-center opacity-50 mix-blend-luminosity"}),l.jsxs("div",{className:"absolute inset-0 flex flex-col justify-center items-center text-white p-12 text-center",children:[l.jsx("h2",{className:"font-serif text-4xl mb-4",children:"Join the Network"}),l.jsx("p",{className:"font-light text-white/80 max-w-sm",children:"Verified clinics receive priority dispatch, cold-chain assurance, and wholesale rates."})]})]}),l.jsx("div",{className:"w-full md:w-1/2 md:order-1 flex items-center justify-center p-8 md:p-16 bg-white",children:l.jsxs("div",{className:"w-full max-w-md space-y-8",children:[l.jsxs("div",{className:"text-center md:text-left",children:[l.jsx("h1",{className:"font-serif text-3xl md:text-4xl text-gray-900 mb-2",children:"Create Account"}),l.jsx("p",{className:"text-gray-500 text-sm",children:"Strictly for medical professionals & clinics."})]}),l.jsxs("form",{onSubmit:T,className:"space-y-5",children:[l.jsxs("div",{children:[l.jsx("label",{className:"block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2",children:"Clinic / Full Name"}),l.jsx("input",{type:"text",required:!0,className:"w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:border-black outline-none",value:b,onChange:S=>c(S.target.value)})]}),l.jsxs("div",{children:[l.jsx("label",{className:"block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2",children:"Work Email"}),l.jsx("input",{type:"email",required:!0,className:"w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:border-black outline-none",value:y,onChange:S=>g(S.target.value)})]}),l.jsxs("div",{children:[l.jsx("label",{className:"block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2",children:"Password"}),l.jsx("input",{type:"password",required:!0,className:"w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:border-black outline-none",value:j,onChange:S=>h(S.target.value)})]}),l.jsx(Fa,{type:"submit",className:"w-full py-4 shadow-lg hover:shadow-xl",disabled:f,children:f?"Creating...":"Register Clinic"})]}),l.jsxs("p",{className:"text-center text-sm text-gray-500",children:["Already registered?"," ",l.jsx("button",{onClick:()=>u("login"),className:"font-semibold text-black hover:underline underline-offset-4",children:"Login here"})]})]})})]})},sy=({navigateTo:u,showToast:d})=>{const[b,c]=q.useState(""),[y,g]=q.useState(!1),[j,h]=q.useState(null),f=async S=>{if(S.preventDefault(),!!b.trim()){g(!0),h(null);try{const w=await fetch(`${Nt}/api/orders/${b.trim()}`),B=await w.json();if(!w.ok)throw new Error(B.message||"Order not found");h(B)}catch(w){console.error(w),d(w.message||"Error fetching order","error")}finally{g(!1)}}},T=j?(S=>{const w=(S||"Pending").charAt(0).toUpperCase()+(S||"Pending").slice(1).toLowerCase();return w.includes("Deliver")?4:w.includes("Ship")||w.includes("Dispatch")?3:w.includes("Process")||w.includes("Pack")?2:1})(j.status):0;return l.jsx("div",{className:"bg-[#fbfbfb] min-h-screen pt-32 pb-16 px-6 animate-fade-in",children:l.jsxs("div",{className:"max-w-xl mx-auto",children:[l.jsxs("div",{className:"text-center mb-10",children:[l.jsx("h1",{className:"font-serif text-3xl md:text-4xl text-gray-900 mb-2",children:"Track Shipment"}),l.jsx("p",{className:"text-sm text-gray-500",children:"Enter your Order ID (e.g. order_Pz...) to see real-time status."})]}),l.jsxs("form",{onSubmit:f,className:"flex gap-2 mb-10 relative z-10",children:[l.jsx("input",{type:"text",placeholder:"Order ID",className:"flex-1 px-6 py-4 bg-white border border-gray-200 rounded-lg text-sm shadow-sm focus:border-black outline-none transition-all",value:b,onChange:S=>c(S.target.value)}),l.jsx("button",{type:"submit",disabled:y||!b.trim(),className:"px-8 py-4 bg-black text-white rounded-lg text-sm font-bold uppercase tracking-widest hover:bg-gray-800 disabled:opacity-60 transition-colors shadow-lg",children:y?"...":"Track"})]}),j&&l.jsxs("div",{className:"bg-white border border-gray-100 rounded-2xl p-8 shadow-xl animate-slide-up",children:[l.jsxs("div",{className:"flex justify-between items-start mb-8 pb-6 border-b border-gray-50",children:[l.jsxs("div",{children:[l.jsx("p",{className:"text-[10px] uppercase tracking-widest text-gray-400 font-bold mb-1",children:"Order Status"}),l.jsx("p",{className:"text-2xl font-serif text-gray-900",children:j.status||"Pending"})]}),l.jsxs("div",{className:"text-right",children:[l.jsx("p",{className:"text-[10px] uppercase tracking-widest text-gray-400 font-bold mb-1",children:"Estimated Arrival"}),l.jsx("p",{className:"text-sm font-medium",children:j.expectedDelivery?new Date(j.expectedDelivery).toLocaleDateString():"Calculating..."})]})]}),l.jsxs("div",{className:"relative flex justify-between items-center mb-10 mt-4 px-2",children:[l.jsx("div",{className:"absolute top-1/2 left-0 w-full h-1 bg-gray-100 -z-0 rounded-full"}),l.jsx("div",{className:"absolute top-1/2 left-0 h-1 bg-black -z-0 rounded-full transition-all duration-1000",style:{width:`${(T-1)/3*100}%`}}),["Ordered","Processing","Shipped","Delivered"].map((S,w)=>{const L=w+1<=T;return l.jsxs("div",{className:"relative z-10 flex flex-col items-center gap-2",children:[l.jsx("div",{className:`w-3 h-3 rounded-full border-2 ${L?"bg-black border-black":"bg-white border-gray-300"}`}),l.jsx("span",{className:`text-[10px] uppercase tracking-wider font-bold ${L?"text-black":"text-gray-300"}`,children:S})]},S)})]}),l.jsxs("div",{className:"space-y-3 bg-gray-50 p-6 rounded-xl",children:[l.jsxs("div",{className:"flex justify-between text-sm",children:[l.jsx("span",{className:"text-gray-500",children:"Customer"}),l.jsx("span",{className:"font-medium",children:j.customerName||"Guest"})]}),l.jsxs("div",{className:"flex justify-between text-sm",children:[l.jsx("span",{className:"text-gray-500",children:"Total Amount"}),l.jsx("span",{className:"font-medium",children:j.amountFormatted||`₹${(j.amount!==void 0?Number(j.amount)/100:j.products?.reduce((S,w)=>S+Number(w.price||0)*Number(w.qty||w.quantity||0),0)||0).toLocaleString()}`})]}),j.trackingNumber&&l.jsxs("div",{className:"flex justify-between text-sm pt-2 border-t border-gray-200/50",children:[l.jsx("span",{className:"text-gray-500",children:"Courier Tracking"}),l.jsx("span",{className:"font-mono bg-white px-2 py-1 rounded border border-gray-200",children:j.trackingNumber})]})]})]})]})})},ry=({token:u,user:d,showToast:b,navigateTo:c})=>{const[y,g]=q.useState([]),[j,h]=q.useState(!0),[f,m]=q.useState(null),[T,S]=q.useState(1),[w,B]=q.useState(1);q.useEffect(()=>{u&&L()},[u,T]);const L=async()=>{h(!0);try{const I=await fetch(`${Nt}/api/orders/user/history?page=${T}&limit=10`,{headers:{Authorization:`Bearer ${u}`}});if(I.ok){const Q=await I.json();g(Q.orders),B(Q.pages)}else b("Failed to load orders","error")}catch(I){console.error(I),b("Connection error","error")}finally{h(!1)}},_=({status:I})=>{const Q={Pending:"bg-yellow-100 text-yellow-800 border-yellow-200",Paid:"bg-blue-50 text-blue-700 border-blue-100",Processing:"bg-blue-50 text-blue-700 border-blue-100",Packed:"bg-purple-50 text-purple-700 border-purple-100",Shipped:"bg-purple-50 text-purple-700 border-purple-100",Delivered:"bg-green-50 text-green-700 border-green-100",Cancelled:"bg-red-50 text-red-700 border-red-100"};return l.jsx("span",{className:`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest border ${Q[I]||"bg-gray-100 text-gray-600 border-gray-200"}`,children:I||"Pending"})};return u?l.jsxs("div",{className:"bg-[#f8f9fa] min-h-screen pt-10 pb-20 px-4 md:px-8 animate-fade-in",children:[l.jsxs("div",{className:"max-w-5xl mx-auto",children:[l.jsxs("div",{className:"mb-10",children:[l.jsx("p",{className:"text-xs font-bold uppercase tracking-widest text-gray-500 mb-2",children:"My Account"}),l.jsx("h1",{className:"font-serif text-3xl md:text-4xl text-gray-900 mb-1",children:"Order History"}),l.jsx("p",{className:"text-gray-500 text-sm",children:"Track and manage all your orders"})]}),l.jsx("div",{className:"space-y-4",children:j?l.jsx("div",{className:"flex justify-center py-12",children:l.jsx("p",{className:"text-gray-400",children:"Loading orders..."})}):y.length===0?l.jsxs("div",{className:"bg-white border border-gray-100 rounded-xl p-12 text-center",children:[l.jsx(Fn,{size:40,className:"text-gray-300 mx-auto mb-4"}),l.jsx("h3",{className:"text-lg font-medium text-gray-900 mb-1",children:"No Orders Yet"}),l.jsx("p",{className:"text-gray-500 mb-6",children:"Start shopping to see your orders here."}),l.jsx("button",{onClick:()=>c("shop"),className:"px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-800",children:"Continue Shopping"})]}):y.map(I=>l.jsx("div",{className:"bg-white border border-gray-100 rounded-xl p-6 hover:shadow-md transition-shadow",children:l.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-4 gap-4 items-center",children:[l.jsxs("div",{children:[l.jsx("p",{className:"text-xs text-gray-400 uppercase tracking-wider font-bold mb-1",children:"Order ID"}),l.jsx("p",{className:"font-mono text-sm font-bold text-gray-900",children:I._id.slice(-8).toUpperCase()})]}),l.jsxs("div",{children:[l.jsx("p",{className:"text-xs text-gray-400 uppercase tracking-wider font-bold mb-1",children:"Date"}),l.jsx("p",{className:"text-sm text-gray-900",children:new Date(I.createdAt).toLocaleDateString()})]}),l.jsxs("div",{children:[l.jsx("p",{className:"text-xs text-gray-400 uppercase tracking-wider font-bold mb-1",children:"Amount"}),l.jsx("p",{className:"text-sm font-medium text-gray-900",children:I.amountFormatted||`₹${(I.amount!==void 0?Number(I.amount)/100:0).toLocaleString()}`})]}),l.jsxs("div",{className:"flex items-center justify-between md:justify-end gap-4",children:[l.jsx(_,{status:I.status}),l.jsx("button",{onClick:()=>m(I),className:"px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50 rounded-lg border border-gray-200 transition-colors",children:"Details"})]})]})},I._id))}),w>1&&l.jsxs("div",{className:"flex justify-center gap-2 mt-10",children:[l.jsx("button",{onClick:()=>S(I=>Math.max(1,I-1)),disabled:T===1,className:"px-4 py-2 border border-gray-200 rounded-lg text-sm font-medium disabled:opacity-50",children:"Previous"}),l.jsx("div",{className:"flex items-center gap-2",children:l.jsxs("span",{className:"text-sm text-gray-600",children:["Page ",T," of ",w]})}),l.jsx("button",{onClick:()=>S(I=>Math.min(w,I+1)),disabled:T===w,className:"px-4 py-2 border border-gray-200 rounded-lg text-sm font-medium disabled:opacity-50",children:"Next"})]})]}),f&&l.jsxs("div",{className:"fixed inset-0 z-[70] flex items-center justify-center p-4",children:[l.jsx("div",{className:"absolute inset-0 bg-black/40 backdrop-blur-sm",onClick:()=>m(null)}),l.jsxs("div",{className:"relative bg-white rounded-xl shadow-2xl max-w-2xl w-full p-8 animate-slide-up max-h-[90vh] overflow-y-auto",children:[l.jsxs("div",{className:"flex justify-between items-center mb-6",children:[l.jsx("h3",{className:"font-serif text-2xl",children:"Order Details"}),l.jsx("button",{onClick:()=>m(null),className:"text-gray-400 hover:text-black",children:l.jsx(Yn,{size:20})})]}),l.jsxs("div",{className:"space-y-6",children:[l.jsx("div",{className:"p-4 bg-gray-50 rounded-lg border border-gray-100",children:l.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[l.jsxs("div",{children:[l.jsx("p",{className:"text-xs text-gray-400 uppercase tracking-wide font-bold mb-1",children:"Order ID"}),l.jsx("p",{className:"font-mono text-sm font-bold",children:f._id})]}),l.jsxs("div",{children:[l.jsx("p",{className:"text-xs text-gray-400 uppercase tracking-wide font-bold mb-1",children:"Status"}),l.jsx(_,{status:f.status})]}),l.jsxs("div",{children:[l.jsx("p",{className:"text-xs text-gray-400 uppercase tracking-wide font-bold mb-1",children:"Order Date"}),l.jsx("p",{className:"text-sm",children:new Date(f.createdAt).toLocaleDateString()})]}),l.jsxs("div",{children:[l.jsx("p",{className:"text-xs text-gray-400 uppercase tracking-wide font-bold mb-1",children:"Total Amount"}),l.jsx("p",{className:"text-sm font-medium",children:f.amountFormatted||`₹${(f.amount!==void 0?Number(f.amount)/100:f.products?.reduce((I,Q)=>I+Number(Q.price||0)*Number(Q.qty||Q.quantity||0),0)||0).toLocaleString()}`})]})]})}),l.jsxs("div",{children:[l.jsx("h4",{className:"font-medium text-gray-900 mb-3",children:"Products"}),l.jsx("div",{className:"space-y-2 bg-gray-50 p-4 rounded-lg border border-gray-100",children:f.products&&f.products.length>0?f.products.map((I,Q)=>l.jsxs("div",{className:"flex justify-between text-sm border-b border-gray-200 pb-2 last:border-0",children:[l.jsxs("div",{children:[l.jsx("p",{className:"font-medium text-gray-900",children:I.name}),l.jsxs("p",{className:"text-xs text-gray-500",children:["Qty: ",I.qty??I.quantity??0]})]}),l.jsxs("p",{className:"font-medium",children:["₹",(Number(I.price||0)*Number(I.qty??I.quantity??0)).toLocaleString()]})]},Q)):l.jsx("p",{className:"text-gray-500 text-sm",children:"No product details available"})})]}),f.trackingNumber&&l.jsxs("div",{children:[l.jsx("h4",{className:"font-medium text-gray-900 mb-2",children:"Tracking Information"}),l.jsxs("div",{className:"p-4 bg-blue-50 border border-blue-100 rounded-lg",children:[l.jsx("p",{className:"text-xs text-blue-600 uppercase tracking-wide font-bold mb-1",children:"Tracking Number"}),l.jsx("p",{className:"font-mono text-sm font-bold text-blue-900",children:f.trackingNumber})]})]}),l.jsxs("div",{className:"p-4 bg-gray-50 rounded-lg border border-gray-100",children:[l.jsx("p",{className:"text-xs text-gray-400 uppercase tracking-wide font-bold mb-2",children:"Payment Details"}),l.jsxs("div",{className:"space-y-1 text-sm text-gray-600",children:[l.jsxs("div",{className:"flex justify-between",children:[l.jsx("span",{children:"Razorpay Order ID:"}),l.jsxs("span",{className:"font-mono text-xs",children:[f.razorpayOrderId?.slice(0,20),"..."]})]}),l.jsxs("div",{className:"flex justify-between",children:[l.jsx("span",{children:"Currency:"}),l.jsx("span",{children:f.currency||"INR"})]})]})]}),l.jsxs("div",{className:"flex gap-3",children:[l.jsxs("a",{href:`${Nt}/api/pdf/invoice/${f._id}`,download:!0,className:"flex-1 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 text-center transition-colors",children:[l.jsx(y0,{size:16,className:"inline mr-2"}),"Download Invoice"]}),l.jsx("button",{onClick:()=>m(null),className:"flex-1 py-3 bg-black text-white rounded-lg font-medium hover:bg-gray-800",children:"Close"})]})]})]})]})]}):l.jsxs("div",{className:"min-h-[60vh] flex flex-col items-center justify-center p-6 text-center",children:[l.jsx(ms,{size:48,className:"text-gray-300 mb-4"}),l.jsx("h2",{className:"text-2xl font-serif text-gray-900",children:"Sign In Required"}),l.jsx("p",{className:"text-gray-500 mb-6",children:"Please log in to view your order history."}),l.jsx("button",{onClick:()=>c("login"),className:"px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-800",children:"Sign In"})]})},oy=({status:u})=>{const d={Pending:"bg-yellow-100 text-yellow-800 border-yellow-200",Paid:"bg-blue-100 text-blue-800 border-blue-200",Processing:"bg-blue-50 text-blue-700 border-blue-100",Shipped:"bg-purple-50 text-purple-700 border-purple-100",Delivered:"bg-green-50 text-green-700 border-green-100",Cancelled:"bg-red-50 text-red-700 border-red-100"};return l.jsx("span",{className:`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest border ${d[u]||"bg-gray-100 text-gray-600 border-gray-200"}`,children:u||"Unknown"})},cy=({token:u,user:d,showToast:b,navigateTo:c,handleLogout:y})=>{const[g,j]=q.useState("orders"),[h,f]=q.useState([]),[m,T]=q.useState(!0),[S,w]=q.useState(""),[B,L]=q.useState(null),[_,I]=q.useState(""),[Q,je]=q.useState(""),[fe,be]=q.useState(!1),[he,Ue]=q.useState({revenue:0,pending:0,completed:0,total:0}),[ae,Te]=q.useState([]),[lt,Ct]=q.useState(!1),[Ne,ce]=q.useState(""),[ht,st]=q.useState([]),[it,R]=q.useState(!1),[H,X]=q.useState(""),[pe,de]=q.useState(null),[v,z]=q.useState(!1),[D,U]=q.useState([]),V=Y=>{if(!Array.isArray(Y))return;const Pe=Y.reduce((Ht,bs)=>Ht+Number(bs.amount||0)/100,0),at=Y.filter(Ht=>Ht.status==="Pending"||Ht.status==="Paid"||Ht.status==="Processing").length,Vt=Y.filter(Ht=>Ht.status==="Delivered").length;Ue({revenue:Pe,pending:at,completed:Vt,total:Y.length})},W=async(Y=!1)=>{Y||T(!0);try{const Pe=await fetch(`${Nt}/api/orders/all`,{headers:{Authorization:`Bearer ${u}`}});if(Pe.ok){const at=await Pe.json(),Vt=Array.isArray(at)?at:at.orders||[];f(Vt),V(Vt)}}catch{Y||b("Failed to load orders","error")}finally{Y||T(!1)}},J=async()=>{R(!0);try{const Y=await fetch(`${Nt}/api/inventory?search=${H}`,{headers:{Authorization:`Bearer ${u}`}});if(Y.ok){const Pe=await Y.json();st(Pe.items||[])}}finally{R(!1)}},We=async()=>{Ct(!0);try{const Y=await fetch(`${Nt}/api/users`,{headers:{Authorization:`Bearer ${u}`}});if(Y.ok){const Pe=await Y.json();Te(Pe.users||Pe||[])}}finally{Ct(!1)}};q.useEffect(()=>{u&&(g==="orders"&&W(),g==="users"&&We(),g==="inventory"&&(J(),fetch(`${Nt}/api/inventory/low-stock`,{headers:{Authorization:`Bearer ${u}`}}).then(Y=>Y.json()).then(U).catch(console.error)))},[u,g]);const ue=async Y=>{Y.preventDefault(),be(!0);try{(await fetch(`${Nt}/api/orders/details/${B._id}`,{method:"PUT",headers:{"Content-Type":"application/json",Authorization:`Bearer ${u}`},body:JSON.stringify({status:_,trackingNumber:Q.trim()})})).ok&&(b("Order Updated & Notification Sent","success"),L(null),W())}finally{be(!1)}},Fe=async(Y,Pe,at)=>{try{(await fetch(`${Nt}/api/inventory/${Y}/quantity`,{method:"PUT",headers:{"Content-Type":"application/json",Authorization:`Bearer ${u}`},body:JSON.stringify({quantity:Pe,reason:at})})).ok&&(b("Stock Adjusted","success"),J())}catch{b("Adjustment Failed","error")}},Tt=h.filter(Y=>Y._id.toLowerCase().includes(S.toLowerCase()));return ae.filter(Y=>Y.email.toLowerCase().includes(Ne.toLowerCase())),l.jsxs("div",{className:"bg-[#f8f9fa] min-h-screen pt-10 pb-20 px-4 md:px-8 animate-fade-in",children:[l.jsxs("div",{className:"max-w-7xl mx-auto",children:[l.jsxs("div",{className:"flex justify-between items-end mb-8",children:[l.jsxs("div",{children:[l.jsx("p",{className:"text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-1",children:"Shaa Trading"}),l.jsx("h1",{className:"font-serif text-3xl md:text-4xl text-gray-900",children:"Control Panel"})]}),l.jsx("button",{onClick:y,className:"text-[10px] font-bold uppercase border border-red-200 text-red-500 px-4 py-2 rounded-full hover:bg-red-50 transition-all",children:"Sign Out"})]}),l.jsx("div",{className:"flex gap-2 mb-8 border-b border-gray-200 overflow-x-auto scrollbar-hide",children:["orders","inventory","users"].map(Y=>l.jsx("button",{onClick:()=>j(Y),className:`px-6 py-3 font-bold text-[10px] uppercase tracking-widest transition-colors border-b-2 -mb-px ${g===Y?"text-black border-black":"text-gray-400 border-transparent hover:text-black"}`,children:Y},Y))}),g==="orders"&&l.jsxs("div",{className:"space-y-6",children:[l.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-4",children:[l.jsxs("div",{className:"bg-white p-4 rounded border shadow-sm",children:[l.jsx("p",{className:"text-[9px] font-bold text-gray-400 uppercase mb-1",children:"Revenue"}),l.jsxs("p",{className:"text-xl font-serif",children:["₹",he.revenue.toLocaleString()]})]}),l.jsxs("div",{className:"bg-white p-4 rounded border shadow-sm",children:[l.jsx("p",{className:"text-[9px] font-bold text-gray-400 uppercase mb-1",children:"Active Orders"}),l.jsx("p",{className:"text-xl font-serif",children:he.pending})]})]}),l.jsxs("div",{className:"bg-white border rounded-sm overflow-hidden",children:[l.jsxs("div",{className:"p-4 border-b flex items-center gap-3",children:[l.jsx(ec,{size:16,className:"text-gray-400"}),l.jsx("input",{type:"text",placeholder:"Search by ID...",className:"text-sm outline-none w-full",value:S,onChange:Y=>w(Y.target.value)})]}),l.jsx("div",{className:"overflow-x-auto",children:l.jsxs("table",{className:"w-full text-left",children:[l.jsx("thead",{className:"bg-gray-50 text-[9px] uppercase font-bold text-gray-400",children:l.jsxs("tr",{children:[l.jsx("th",{className:"px-6 py-4",children:"Ref"}),l.jsx("th",{className:"px-6 py-4",children:"Customer"}),l.jsx("th",{className:"px-6 py-4",children:"Amount"}),l.jsx("th",{className:"px-6 py-4",children:"Status"}),l.jsx("th",{className:"px-6 py-4 text-right",children:"Action"})]})}),l.jsx("tbody",{className:"divide-y divide-gray-100",children:Tt.map(Y=>l.jsxs("tr",{className:"text-sm",children:[l.jsxs("td",{className:"px-6 py-4 font-mono text-xs",children:["#",Y._id.slice(-6).toUpperCase()]}),l.jsxs("td",{className:"px-6 py-4",children:[l.jsx("div",{className:"font-bold",children:Y.customerName||"Guest"}),l.jsx("div",{className:"text-[10px] text-gray-400",children:Y.email})]}),l.jsxs("td",{className:"px-6 py-4 font-medium",children:["₹",(Y.amount/100).toLocaleString()]}),l.jsx("td",{className:"px-6 py-4",children:l.jsx(oy,{status:Y.status})}),l.jsx("td",{className:"px-6 py-4 text-right",children:l.jsx("button",{onClick:()=>{L(Y),I(Y.status),je(Y.trackingNumber||"")},className:"text-[10px] font-black uppercase border-b border-black",children:"Manage"})})]},Y._id))})]})})]})]}),g==="inventory"&&l.jsxs("div",{className:"bg-white border rounded-sm overflow-hidden",children:[l.jsxs("div",{className:"p-6 border-b flex justify-between items-center",children:[l.jsx("h3",{className:"font-serif text-xl",children:"Stock Logistics"}),l.jsx("button",{onClick:()=>z(!0),className:"bg-black text-white text-[9px] px-4 py-2 font-bold uppercase tracking-widest",children:"Add Formulation"})]}),l.jsx("div",{className:"overflow-x-auto",children:l.jsxs("table",{className:"w-full text-left",children:[l.jsx("thead",{className:"bg-gray-50 text-[9px] font-bold uppercase text-gray-400",children:l.jsxs("tr",{children:[l.jsx("th",{className:"px-6 py-4",children:"Product"}),l.jsx("th",{className:"px-6 py-4",children:"Available"}),l.jsx("th",{className:"px-6 py-4",children:"Threshold"}),l.jsx("th",{className:"px-6 py-4 text-right",children:"Actions"})]})}),l.jsx("tbody",{className:"divide-y divide-gray-100",children:ht.map(Y=>l.jsxs("tr",{className:"text-sm",children:[l.jsx("td",{className:"px-6 py-4 font-medium",children:Y.productName}),l.jsx("td",{className:"px-6 py-4",children:l.jsxs("span",{className:`font-black ${Y.isLowStock?"text-red-500":"text-gray-900"}`,children:[Y.quantity," units"]})}),l.jsx("td",{className:"px-6 py-4 text-gray-400",children:Y.lowStockThreshold}),l.jsxs("td",{className:"px-6 py-4 text-right flex justify-end gap-4",children:[l.jsx("button",{onClick:()=>{const Pe=prompt("Add/Subtract Units:");Pe&&Fe(Y._id,parseInt(Pe),"Manual update")},className:"text-[10px] font-bold uppercase text-blue-600",children:"Adjust"}),l.jsx("button",{onClick:()=>de(Y),className:"text-[10px] font-bold uppercase",children:"Edit"})]})]},Y._id))})]})})]})]}),B&&l.jsx("div",{className:"fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm",children:l.jsxs("div",{className:"bg-white w-full max-w-md p-8 rounded-sm shadow-2xl animate-slide-up",children:[l.jsxs("div",{className:"flex justify-between items-center mb-6",children:[l.jsx("h3",{className:"font-serif text-2xl",children:"Order Dispatch"}),l.jsx("button",{onClick:()=>L(null),children:l.jsx(Yn,{size:20})})]}),l.jsxs("form",{onSubmit:ue,className:"space-y-6",children:[l.jsxs("div",{children:[l.jsx("label",{className:"text-[9px] font-bold uppercase text-gray-400 block mb-2",children:"Workflow Status"}),l.jsxs("select",{value:_,onChange:Y=>I(Y.target.value),className:"w-full p-3 border rounded-sm outline-none focus:border-black text-sm",children:[l.jsx("option",{value:"Paid",children:"Verified Paid"}),l.jsx("option",{value:"Processing",children:"Processing Formulation"}),l.jsx("option",{value:"Shipped",children:"Dispatched / In Transit"}),l.jsx("option",{value:"Delivered",children:"Clinical Delivery Confirmed"}),l.jsx("option",{value:"Cancelled",children:"Void Order"})]})]}),l.jsxs("div",{children:[l.jsx("label",{className:"text-[9px] font-bold uppercase text-gray-400 block mb-2",children:"Tracking / AWB Number"}),l.jsx("input",{type:"text",className:"w-full p-3 border rounded-sm outline-none focus:border-black text-sm",placeholder:"e.g. DELHIVERY-82736",value:Q,onChange:Y=>je(Y.target.value)})]}),l.jsx("button",{type:"submit",disabled:fe,className:"w-full bg-black text-white py-4 text-[10px] font-bold uppercase tracking-[0.2em]",children:fe?"Updating...":"Sync & Notify Client"})]})]})})]})},uy=({navigateTo:u,addToCart:d,filter:b,setFilter:c,brandFilter:y,setBrandFilter:g,searchQuery:j,setSearchQuery:h})=>{const[f,m]=q.useState("featured"),T=q.useMemo(()=>la.filter(S=>{const w=b==="All"||S.category===b,B=y==="All Brands"||S.brand===y,L=S.name.toLowerCase().includes(j.toLowerCase())||S.brand.toLowerCase().includes(j.toLowerCase());return w&&B&&L}).sort((S,w)=>f==="price-asc"?S.price-w.price:f==="price-desc"?w.price-S.price:0),[b,y,j,f]);return l.jsxs("div",{className:"animate-fade-in bg-white min-h-screen pb-24",children:[l.jsx("div",{className:"pt-4 md:pt-6"}),l.jsx("div",{className:"sticky top-[64px] md:top-[80px] z-40 bg-white/80 backdrop-blur-md border-b border-gray-100",children:l.jsx("div",{className:"max-w-7xl mx-auto",children:l.jsxs("div",{className:"flex flex-col md:flex-row items-center justify-between px-4 py-2 gap-4",children:[l.jsxs("div",{className:"flex gap-2 overflow-x-auto scrollbar-hide w-full md:w-auto py-2",children:[l.jsx("button",{onClick:()=>c("All"),className:`px-5 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all border ${b==="All"?"bg-black text-white border-black shadow-sm":"bg-transparent text-gray-400 border-gray-200 hover:text-black hover:border-black"}`,children:"All"}),Um.map(S=>l.jsx("button",{onClick:()=>c(S.name),className:`px-5 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest whitespace-nowrap transition-all border ${b===S.name?"bg-black text-white border-black shadow-sm":"bg-transparent text-gray-400 border-gray-200 hover:text-black hover:border-black"}`,children:S.name},S.id))]}),l.jsxs("div",{className:"flex items-center gap-4 w-full md:w-auto justify-between border-t md:border-t-0 border-gray-100 pt-2 md:pt-0 pb-1 md:pb-0",children:[l.jsxs("span",{className:"text-[10px] font-bold text-gray-400 uppercase tracking-widest",children:[T.length," Results"]}),l.jsxs("div",{className:"flex items-center gap-1",children:[l.jsx(L0,{size:12,className:"text-gray-400"}),l.jsxs("select",{className:"bg-transparent text-[10px] font-bold uppercase tracking-widest outline-none cursor-pointer text-gray-700",value:f,onChange:S=>m(S.target.value),children:[l.jsx("option",{value:"featured",children:"Sort: Featured"}),l.jsx("option",{value:"price-asc",children:"Price: Low to High"}),l.jsx("option",{value:"price-desc",children:"Price: High to Low"})]})]})]})]})})}),l.jsx("div",{className:"max-w-7xl mx-auto px-4 md:px-6 py-8 md:py-12",children:T.length>0?l.jsx("div",{className:"grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8 items-stretch",children:T.map(S=>l.jsx("div",{className:"flex",children:l.jsx(Jo,{product:S,navigateTo:u,addToCart:d})},S.id))}):l.jsxs("div",{className:"py-32 text-center",children:[l.jsx("div",{className:"w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4",children:l.jsx(ec,{size:24,className:"text-gray-300"})}),l.jsx("p",{className:"font-serif text-xl text-gray-500",children:"No formulations found."}),l.jsx("button",{onClick:()=>{c("All"),g("All Brands"),h("")},className:"mt-4 text-[10px] font-bold uppercase tracking-[0.2em] text-black border-b border-black pb-0.5 hover:text-gray-500 hover:border-gray-500 transition-colors",children:"Clear all filters"})]})})]})},dy=({post:u,navigateTo:d})=>l.jsxs("div",{className:"animate-fade-in bg-white min-h-screen pb-24",children:[l.jsxs("div",{className:"px-6 py-4 border-b border-gray-100 sticky top-20 bg-white z-40 flex gap-2 text-xs text-gray-500 items-center",children:[l.jsxs("button",{onClick:()=>d("blog"),className:"hover:text-black flex items-center gap-1",children:[l.jsx(ps,{size:12})," Journal"]}),l.jsx("span",{className:"text-gray-300",children:"/"}),l.jsx("span",{className:"text-gray-800 truncate",children:u.title})]}),l.jsxs("div",{className:"max-w-3xl mx-auto px-6 py-8",children:[l.jsxs("div",{className:"mb-8",children:[l.jsx("span",{className:"text-gray-800 font-bold tracking-widest uppercase text-[10px] mb-3 block",children:u.category}),l.jsx("h1",{className:"font-serif text-3xl md:text-5xl leading-tight text-gray-900 mb-4",children:u.title}),l.jsxs("div",{className:"flex items-center gap-4 text-xs text-gray-400",children:[l.jsx("span",{children:u.date}),l.jsx("span",{className:"w-1 h-1 bg-gray-300 rounded-full"}),l.jsx("span",{children:u.author||"Editorial"})]})]}),l.jsx("div",{className:"aspect-video w-full bg-gray-100 rounded-xl overflow-hidden mb-10 shadow-sm",children:l.jsx("img",{loading:"lazy",src:u.image,alt:u.title,className:"w-full h-full object-cover"})}),l.jsx("div",{className:"prose prose-lg prose-gray mx-auto",children:l.jsx("div",{dangerouslySetInnerHTML:{__html:u.content}})})]})]}),gy=({navigateTo:u})=>{const[d,b]=q.useState("All"),c=["All","Clinical Science","Ingredient Spotlight","Treatment Protocols","Safety & Compliance"],y=d==="All"?fs:fs.filter(g=>g.category===d);return l.jsxs("div",{className:"animate-fade-in bg-[#fbfbfb] min-h-screen pb-24",children:[l.jsxs("div",{className:"bg-black text-white pt-28 pb-12 px-6 text-center relative overflow-hidden",children:[l.jsx("div",{className:"absolute inset-0 opacity-30 bg-[url('/image/ban1.jpg')] bg-cover bg-center pointer-events-none"}),l.jsxs("div",{className:"relative z-10 max-w-3xl mx-auto",children:[l.jsx("span",{className:"text-white tracking-[0.3em] uppercase text-[10px] font-bold mb-3 block",children:"The Journal"}),l.jsx("h1",{className:"font-serif text-4xl md:text-6xl mb-4",children:"Clinical Insights"})]})]}),l.jsxs("div",{className:"max-w-7xl mx-auto px-6 py-10",children:[l.jsx("div",{className:"flex overflow-x-auto pb-4 mb-8 gap-2 scrollbar-hide -mx-6 px-6 md:mx-0 md:px-0",children:c.map(g=>l.jsx("button",{onClick:()=>b(g),className:`px-4 py-2 text-[10px] font-bold uppercase tracking-wider rounded-full whitespace-nowrap transition-all border ${d===g?"bg-black text-white border-black":"bg-white text-gray-500 hover:bg-gray-50 border-gray-200"}`,children:g},g))}),l.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12",children:y.map(g=>l.jsxs("div",{onClick:()=>u("blog-post",g),className:"group cursor-pointer flex flex-col h-full",children:[l.jsxs("div",{className:"relative aspect-[16/9] overflow-hidden mb-4 rounded-lg bg-gray-100",children:[l.jsx("img",{loading:"lazy",src:g.image,alt:g.title,className:"w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"}),l.jsx("div",{className:"absolute top-3 left-3 bg-white/90 backdrop-blur text-[9px] px-2 py-1 rounded-full font-bold tracking-wider uppercase shadow-sm",children:g.category})]}),l.jsx("div",{className:"flex items-center gap-2 text-[10px] text-gray-400 uppercase tracking-widest mb-2",children:l.jsx("span",{children:g.date})}),l.jsx("h3",{className:"font-serif text-xl md:text-2xl mb-3 text-gray-900 leading-tight group-hover:text-gray-800 transition-colors",children:g.title}),l.jsx("p",{className:"text-gray-500 font-light text-sm leading-relaxed mb-4 line-clamp-2",children:g.excerpt}),l.jsxs("button",{className:"flex items-center gap-2 text-xs font-bold text-black uppercase tracking-wide mt-auto group-hover:gap-3 transition-all pt-2",children:["Read ",l.jsx(fi,{size:12})]})]},g.id))})]})]})},my=({product:u,addToCart:d,navigateTo:b})=>{const[c,y]=q.useState(1),[g,j]=q.useState(0),h=u.stock<=0,f=u.stock>0&&u.stock<=5,m=Array.isArray(u.images)&&u.images.length>0?u.images:[u.image,u.image,u.image,u.image],T=la.filter(w=>w.category===u.category&&w.id!==u.id).slice(0,3),S=()=>{if(h){alert("This product is currently out of stock.");return}if(c>u.stock){alert(`Only ${u.stock} unit(s) available. Please adjust the quantity.`),y(u.stock);return}d(u,c)};return l.jsxs("div",{className:`animate-fade-in bg-white min-h-screen pb-24 ${h?"selection:bg-gray-200":""}`,children:[l.jsx("div",{className:"px-6 py-4 border-b border-gray-50 flex gap-2 text-[10px] uppercase tracking-widest text-gray-400 sticky top-14 md:top-20 bg-white/90 backdrop-blur-md z-40",children:l.jsxs("button",{onClick:()=>b("shop"),className:"hover:text-black flex items-center gap-1 transition-colors",children:[l.jsx(ps,{size:12})," Back to Catalog"]})}),l.jsxs("div",{className:"max-w-7xl mx-auto px-6 py-8 md:py-12",children:[l.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-start",children:[l.jsxs("div",{className:"space-y-4",children:[l.jsxs("div",{className:"aspect-[4/5] bg-[#f9f9f9] rounded-sm overflow-hidden w-full relative group border border-gray-50",children:[l.jsx("img",{loading:"lazy",src:m[g],alt:u.name,className:`w-full h-full object-contain p-8 mix-blend-multiply transition-transform duration-1000 ${h?"grayscale opacity-60":"group-hover:scale-105"}`}),h&&l.jsx("div",{className:"absolute inset-0 flex items-center justify-center bg-white/20",children:l.jsx("span",{className:"bg-black text-white text-[10px] font-bold uppercase tracking-[0.3em] px-6 py-2 shadow-2xl",children:"Currently Unavailable"})})]}),l.jsx("div",{className:"flex gap-3 overflow-x-auto pb-2 scrollbar-hide",children:m.map((w,B)=>l.jsx("div",{onClick:()=>j(B),className:`w-20 h-24 shrink-0 rounded-sm overflow-hidden cursor-pointer border transition-all ${g===B?"border-black":"border-gray-100 opacity-60"}`,children:l.jsx("img",{loading:"lazy",src:w,alt:"",className:"w-full h-full object-cover p-1"})},B))})]}),l.jsxs("div",{className:"flex flex-col",children:[l.jsx("div",{className:"text-gray-400 text-[10px] font-bold tracking-[0.3em] uppercase mb-3",children:u.category}),l.jsx("h1",{className:"font-sans text-2xl md:text-4xl font-bold tracking-tight text-gray-900 mb-2 uppercase leading-tight",children:u.name}),l.jsxs("div",{className:"text-xs font-bold text-gray-400 uppercase tracking-[0.2em] mb-8 border-b border-gray-50 pb-4 flex justify-between items-center",children:[l.jsxs("span",{children:["Authorized ",u.brand," Supply"]}),f&&!h&&l.jsxs("span",{className:"text-orange-500 text-[9px] animate-pulse",children:["Low Stock: ",u.stock," Left"]})]}),l.jsxs("div",{className:"flex items-center gap-6 mb-8",children:[l.jsxs("div",{className:"flex flex-col",children:[u.comparePrice&&l.jsxs("span",{className:"text-gray-400 line-through text-xs mb-1",children:["₹",u.comparePrice.toLocaleString()]}),l.jsxs("span",{className:`text-3xl font-black ${h?"text-gray-400":"text-gray-900"}`,children:["₹",u.price.toLocaleString()]})]}),l.jsx("div",{className:"h-10 w-px bg-gray-100"}),h?l.jsx("span",{className:"text-[10px] font-bold text-red-500 uppercase tracking-widest bg-red-50 px-3 py-1.5 rounded-full border border-red-100",children:"Out of Stock"}):l.jsx("span",{className:"text-[10px] font-bold text-green-600 uppercase tracking-widest bg-green-50 px-3 py-1.5 rounded-full border border-green-100",children:"In Stock & Ready"})]}),l.jsx("div",{className:"text-gray-600 leading-relaxed mb-10 font-light text-sm md:text-base prose prose-neutral max-w-none",dangerouslySetInnerHTML:{__html:u.details}}),l.jsxs("div",{className:"bg-[#fcfcfc] p-6 rounded-sm border border-gray-100 mb-10",children:[l.jsx("h3",{className:"text-[10px] font-bold uppercase tracking-[0.3em] text-gray-400 mb-4",children:"Clinical Benefits"}),l.jsx("ul",{className:"grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-6",children:u.benefits.map((w,B)=>l.jsxs("li",{className:"flex gap-3 text-[13px] text-gray-600 items-start",children:[l.jsx("span",{className:"text-black text-[10px] mt-0.5 shrink-0",children:"●"}),w]},B))})]}),l.jsx("div",{className:"flex flex-col sm:flex-row gap-4 fixed bottom-0 left-0 right-0 p-4 bg-white/90 backdrop-blur-md border-t border-gray-100 z-50 md:static md:p-0 md:border-0 md:bg-transparent",children:l.jsxs("div",{className:"flex gap-4 w-full",children:[l.jsxs("div",{className:`flex items-center border border-gray-200 rounded-sm h-14 w-32 bg-white ${h?"opacity-30 pointer-events-none":""}`,children:[l.jsx("button",{onClick:()=>y(Math.max(1,c-1)),className:"flex-1 h-full flex items-center justify-center hover:bg-gray-50 text-gray-400 transition-colors",children:"-"}),l.jsx("span",{className:"font-bold text-sm w-8 text-center",children:c}),l.jsx("button",{onClick:()=>{const w=Math.min(c+1,u.stock);c<u.stock&&y(w)},className:"flex-1 h-full flex items-center justify-center hover:bg-gray-50 text-gray-400 transition-colors disabled:opacity-50 disabled:cursor-not-allowed",disabled:c>=u.stock,children:"+"})]}),l.jsx("button",{disabled:h,className:`flex-1 h-14 text-[10px] font-bold uppercase tracking-[0.3em] transition-all active:scale-[0.98] shadow-xl ${h?"bg-gray-100 text-gray-400 cursor-not-allowed border border-gray-200 shadow-none":"bg-black text-white hover:bg-gray-800 shadow-black/10"}`,onClick:S,children:h?"Out of Stock":`Add ${c} to Cart`})]})}),l.jsx("div",{className:"h-24 md:hidden"})]})]}),T.length>0&&l.jsxs("div",{className:"mt-24 border-t border-gray-100 pt-16",children:[l.jsxs("div",{className:"mb-10 text-center md:text-left",children:[l.jsx("h2",{className:"font-serif text-2xl md:text-3xl text-gray-900",children:"Recommended Protocols"}),l.jsx("p",{className:"text-gray-400 text-xs mt-1 uppercase tracking-widest",children:"Synergistic Formulations"})]}),l.jsx("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8",children:T.map(w=>l.jsxs("div",{className:`group cursor-pointer ${w.stock<=0?"opacity-60":""}`,onClick:()=>b("product",w),children:[l.jsxs("div",{className:"relative aspect-[4/5] bg-[#f9f9f9] rounded-sm overflow-hidden mb-4 border border-gray-50",children:[l.jsx("img",{loading:"lazy",src:w.image,alt:w.name,className:"w-full h-full object-contain p-4 transition-transform duration-700 group-hover:scale-105"}),w.stock<=0&&l.jsx("div",{className:"absolute inset-0 bg-white/40 flex items-center justify-center",children:l.jsx("span",{className:"text-[8px] font-bold bg-white px-2 py-1 shadow-sm uppercase tracking-widest",children:"Sold Out"})})]}),l.jsx("div",{className:"text-[8px] text-gray-400 font-bold uppercase tracking-widest mb-1",children:w.brand}),l.jsx("h3",{className:"font-sans text-xs font-semibold leading-tight mb-2 group-hover:text-black transition-colors uppercase truncate",children:w.name}),l.jsxs("p",{className:"text-gray-900 font-bold text-sm",children:["₹",w.price.toLocaleString()]})]},w.id))})]})]})]})},fy=()=>l.jsxs("div",{className:"animate-fade-in pb-24 bg-[#fbfbfb]",children:[l.jsxs("div",{className:"bg-black text-white pt-32 pb-16 px-6 text-center relative overflow-hidden",children:[l.jsx("div",{className:"absolute inset-0 bg-[url('/image/ban2.jpg')] bg-cover bg-center opacity-20 pointer-events-none"}),l.jsxs("div",{className:"relative z-10 max-w-3xl mx-auto",children:[l.jsx("h1",{className:"font-serif text-4xl md:text-5xl mb-4",children:"Privacy Policy"}),l.jsx("p",{className:"text-gray-400 font-light text-sm md:text-base",children:"Last Updated: October 2025"})]})]}),l.jsx("div",{className:"max-w-4xl mx-auto px-6 py-16",children:l.jsxs("div",{className:"bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100 space-y-10 text-gray-600 font-light leading-relaxed",children:[l.jsxs("section",{children:[l.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[l.jsx("div",{className:"w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-800",children:l.jsx(ys,{size:16})}),l.jsx("h3",{className:"font-serif text-xl text-gray-900",children:"1. Data Collection & Usage"})]}),l.jsx("p",{children:"We strictly collect only the information necessary to process wholesale orders and verify professional credentials. This includes your medical license number, clinic address, and contact details. This data is used solely for order fulfillment, regulatory compliance, and account management."})]}),l.jsxs("section",{children:[l.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[l.jsx("div",{className:"w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-800",children:l.jsx(j0,{size:16})}),l.jsx("h3",{className:"font-serif text-xl text-gray-900",children:"2. Data Security"})]}),l.jsx("p",{children:"Shaa Trading employs industry-standard SSL encryption to protect your sensitive data during transmission. We partner with secure payment gateways and do not store credit card details on our servers. Access to personal data is restricted to authorized personnel only."})]}),l.jsxs("section",{children:[l.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[l.jsx("div",{className:"w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-800",children:l.jsx($o,{size:16})}),l.jsx("h3",{className:"font-serif text-xl text-gray-900",children:"3. Communications"})]}),l.jsx("p",{children:"We may use your contact details to communicate important order updates, safety recalls, or exclusive wholesale offers. You retain the right to opt-out of marketing communications at any time via the unsubscribe link or by contacting support."})]}),l.jsxs("section",{children:[l.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[l.jsx("div",{className:"w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-800",children:l.jsx(Lm,{size:16})}),l.jsx("h3",{className:"font-serif text-xl text-gray-900",children:"4. Third-Party Disclosure"})]}),l.jsx("p",{children:"We do not sell, trade, or otherwise transfer your Personally Identifiable Information to outside parties, except for trusted third parties who assist us in operating our website, conducting our business (e.g., logistics partners), or serving our users, so long as those parties agree to keep this information confidential."})]})]})})]}),hy=()=>l.jsxs("div",{className:"animate-fade-in pb-24 bg-[#fbfbfb]",children:[l.jsxs("div",{className:"bg-black text-white pt-32 pb-16 px-6 text-center relative overflow-hidden",children:[l.jsx("div",{className:"absolute inset-0 bg-[url('/image/ban2.jpg')] bg-cover bg-center opacity-20 pointer-events-none"}),l.jsxs("div",{className:"relative z-10 max-w-3xl mx-auto",children:[l.jsx("h1",{className:"font-serif text-4xl md:text-5xl mb-4",children:"Terms of Service"}),l.jsx("p",{className:"text-gray-400 font-light text-sm md:text-base",children:"Professional Engagement Guidelines"})]})]}),l.jsx("div",{className:"max-w-4xl mx-auto px-6 py-16",children:l.jsxs("div",{className:"bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100 space-y-10 text-gray-600 font-light leading-relaxed",children:[l.jsxs("section",{children:[l.jsx("h3",{className:"font-serif text-xl text-gray-900 mb-4 border-l-2 border-gray-800 pl-4",children:"1. Professional Use Only"}),l.jsx("p",{children:"By purchasing from Shaa Trading, you explicitly certify that you are a licensed medical professional or an authorized representative of a licensed clinic. Our products, particularly injectables and professional-grade peels, are strictly for professional administration. We reserve the right to cancel orders that fail credential verification."})]}),l.jsxs("section",{children:[l.jsx("h3",{className:"font-serif text-xl text-gray-900 mb-4 border-l-2 border-gray-800 pl-4",children:"2. Product Liability & Usage"}),l.jsx("p",{children:"Shaa Trading acts solely as an authorized distributor. While we guarantee the authenticity and cold-chain integrity of our products, we are not the manufacturer. Any adverse reactions should be reported to the manufacturer directly. Shaa Trading is not liable for misuse, improper administration, or off-label use of products."})]}),l.jsxs("section",{children:[l.jsx("h3",{className:"font-serif text-xl text-gray-900 mb-4 border-l-2 border-gray-800 pl-4",children:"3. Returns & Refunds"}),l.jsxs("p",{children:["Due to the sensitive nature of medical aesthetics and strict temperature control requirements, ",l.jsx("strong",{children:"all sales of injectables are final"}),". We cannot accept returns once the product has left our controlled facility to ensure safety. Returns are only processed in the rare event of a proven manufacturing defect or shipping error reported within 24 hours of receipt."]})]}),l.jsxs("section",{children:[l.jsx("h3",{className:"font-serif text-xl text-gray-900 mb-4 border-l-2 border-gray-800 pl-4",children:"4. Pricing & Availability"}),l.jsx("p",{children:"Prices are subject to change without notice due to international exchange rates and manufacturer adjustments. We reserve the right to limit quantities per client to ensure equitable distribution of high-demand stock."})]})]})})]}),py=()=>l.jsxs("div",{className:"animate-fade-in pb-24 bg-[#fbfbfb]",children:[l.jsxs("div",{className:"bg-black text-white pt-32 pb-16 px-6 text-center relative overflow-hidden",children:[l.jsx("div",{className:"absolute inset-0 bg-[url('/image/ban2.jpg')] bg-cover bg-center opacity-20 pointer-events-none"}),l.jsxs("div",{className:"relative z-10 max-w-3xl mx-auto",children:[l.jsx("h1",{className:"font-serif text-4xl md:text-5xl mb-4",children:"Shipping & Logistics"}),l.jsx("p",{className:"text-gray-400 font-light text-sm md:text-base",children:"Ensuring clinical integrity from warehouse to clinic."})]})]}),l.jsxs("div",{className:"max-w-4xl mx-auto px-6 py-16",children:[l.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6 mb-12",children:[l.jsxs("div",{className:"bg-white p-6 rounded-xl border border-gray-100 text-center",children:[l.jsx(Om,{size:24,className:"text-gray-800 mx-auto mb-3"}),l.jsx("h4",{className:"font-serif font-bold text-gray-900",children:"Cold Chain"}),l.jsx("p",{className:"text-xs text-gray-500 mt-2",children:"Insulated packaging for biologics."})]}),l.jsxs("div",{className:"bg-white p-6 rounded-xl border border-gray-100 text-center",children:[l.jsx(Rm,{size:24,className:"text-gray-800 mx-auto mb-3"}),l.jsx("h4",{className:"font-serif font-bold text-gray-900",children:"24h Dispatch"}),l.jsx("p",{className:"text-xs text-gray-500 mt-2",children:"Same-day processing for orders before 2 PM."})]}),l.jsxs("div",{className:"bg-white p-6 rounded-xl border border-gray-100 text-center",children:[l.jsx(ms,{size:24,className:"text-gray-800 mx-auto mb-3"}),l.jsx("h4",{className:"font-serif font-bold text-gray-900",children:"Pan-India"}),l.jsx("p",{className:"text-xs text-gray-500 mt-2",children:"Serviceable to 19,000+ pin codes."})]})]}),l.jsxs("div",{className:"bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100 space-y-10 text-gray-600 font-light leading-relaxed",children:[l.jsxs("section",{children:[l.jsx("h3",{className:"font-serif text-xl text-gray-900 mb-4",children:"1. Cold Chain Protocol"}),l.jsx("p",{children:"Temperature-sensitive items (peptides, growth factors, certain injectables) are packed in medical-grade insulated boxes with gel ice packs. We continually monitor transit times to ensure product stability upon arrival. Please refrigerate immediately upon receipt."})]}),l.jsxs("section",{children:[l.jsx("h3",{className:"font-serif text-xl text-gray-900 mb-4",children:"2. Delivery Timelines"}),l.jsxs("ul",{className:"list-disc pl-5 space-y-2",children:[l.jsxs("li",{children:[l.jsx("strong",{children:"Metro Cities (Delhi, Mumbai, Bangalore, Chennai, Kolkata):"})," 24-48 Hours."]}),l.jsxs("li",{children:[l.jsx("strong",{children:"Tier 1 & 2 Cities:"})," 2-4 Business Days."]}),l.jsxs("li",{children:[l.jsx("strong",{children:"Rest of India / Remote Areas:"})," 5-7 Business Days."]})]}),l.jsx("p",{className:"mt-4 text-xs bg-gray-50 p-3 rounded text-gray-500",children:"Note: Timelines are estimates. Severe weather or political unrest may cause unavoidable delays."})]}),l.jsxs("section",{children:[l.jsx("h3",{className:"font-serif text-xl text-gray-900 mb-4",children:"3. Damaged or Lost Shipments"}),l.jsx("p",{children:"While rare, if a shipment arrives damaged, you must document it immediately. Please take clear photos of the external packaging and damaged contents and email us within 4 hours of delivery at shaatrading@gmail.com for a replacement."})]})]})]})]}),yy=()=>{const[u,d]=q.useState(null),b=[{id:1,val:"500+",label:"Partner Clinics"},{id:2,val:"100%",label:"Authentic Guarantee"},{id:3,val:"12",label:"Years of Service"},{id:4,val:"24h",label:"Dispatch Time"}];return l.jsxs("div",{className:"animate-fade-in pb-24 bg-[#fbfbfb]",children:[l.jsxs("div",{className:"relative bg-[#0a0a0a] text-white py-28 px-6 overflow-hidden",children:[l.jsx("div",{className:"absolute inset-0 bg-[url('/image/ban2.jpg')] bg-cover bg-center opacity-30 mix-blend-luminosity pointer-events-none"}),l.jsxs("div",{className:"relative z-10 max-w-4xl mx-auto text-center",children:[l.jsx("span",{className:"text-white tracking-[0.3em] uppercase text-[10px] md:text-xs font-bold mb-4 block animate-slide-up",children:"Established 2012"}),l.jsxs("h1",{className:"font-serif text-5xl md:text-7xl mb-6 leading-tight animate-slide-up",style:{animationDelay:"0.1s"},children:["Trusted ",l.jsx("br",{}),l.jsx("span",{className:"italic text-gray-400 font-light",children:"Healthcare Supply"})]}),l.jsx("p",{className:"text-gray-400 font-light text-lg md:text-xl max-w-2xl mx-auto leading-relaxed animate-slide-up",style:{animationDelay:"0.2s"},children:"Shaa Trading bridges the gap between elite laboratories and India's leading healthcare clinics."})]})]}),l.jsx("div",{className:"max-w-7xl mx-auto px-6 py-20",children:l.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center",children:[l.jsxs("div",{className:"relative aspect-[4/5] md:aspect-square bg-gray-100 rounded-lg overflow-hidden",children:[l.jsx("img",{loading:"lazy",src:"/image/blog4.jpg",alt:"Laboratory",className:"w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"}),l.jsxs("div",{className:"absolute bottom-6 left-6 bg-white/90 backdrop-blur p-4 rounded max-w-xs shadow-lg",children:[l.jsx("p",{className:"font-serif text-lg italic",children:'"Quality is not a feature. It is the foundation of healthcare supply."'}),l.jsx("p",{className:"text-xs font-bold uppercase tracking-widest mt-2",children:"— Director's Note"})]})]}),l.jsxs("div",{children:[l.jsx("span",{className:"text-gray-800 font-bold tracking-widest uppercase text-xs mb-3 block",children:"Our Mission"}),l.jsxs("h2",{className:"font-serif text-3xl md:text-5xl mb-6 text-gray-900 leading-tight",children:["Beyond Distribution: ",l.jsx("br",{}),"Guardians of Quality"]}),l.jsxs("div",{className:"space-y-6 text-gray-600 font-light leading-relaxed",children:[l.jsx("p",{children:"In an industry often clouded by uncertainty, Shaa Trading stands as a beacon of authenticity. We don't just move boxes. We verify cold-chain integrity, audit batch numbers, and ensure that every product performs exactly as intended."}),l.jsx("p",{children:"Founded in 2012 by a team of healthcare professionals and logistics experts, we recognized a critical gap in the market: the disconnect between premium manufacturers and the clinics that need them. We closed that gap."})]}),l.jsxs("div",{className:"mt-8 pt-8 border-t border-gray-100 grid grid-cols-1 sm:grid-cols-2 gap-6",children:[l.jsxs("div",{children:[l.jsx("h4",{className:"font-serif text-xl mb-1",children:"Bengaluru"}),l.jsx("p",{className:"text-xs text-gray-400 uppercase tracking-widest",children:"Headquarters"})]}),l.jsxs("div",{children:[l.jsx("h4",{className:"font-serif text-xl mb-1",children:"Since 2012"}),l.jsx("p",{className:"text-xs text-gray-400 uppercase tracking-widest",children:"Trusted Service"})]})]})]})]})}),l.jsx("div",{className:"bg-black text-white py-16",children:l.jsx("div",{className:"max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x sm:divide-x md:divide-x divide-white/10",children:b.map(c=>l.jsxs("div",{className:"p-2",children:[l.jsx("div",{className:"font-serif text-4xl md:text-5xl text-white mb-2",children:c.val}),l.jsx("div",{className:"text-[10px] md:text-xs font-bold uppercase tracking-widest text-gray-400",children:c.label})]},c.id))})}),l.jsxs("div",{className:"max-w-7xl mx-auto px-6 py-20 bg-white",children:[l.jsx(J0,{title:"The Quality Promise",subtitle:"How we protect the efficacy of sensitive healthcare products"}),l.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-8 mt-12",children:[l.jsxs("div",{className:"bg-gray-50 p-8 rounded-xl border border-gray-100 text-center hover:shadow-lg transition-all group",children:[l.jsx("div",{className:"w-14 h-14 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm group-hover:scale-110 transition-transform",children:l.jsx(Om,{size:24,className:"text-gray-800"})}),l.jsx("h3",{className:"font-serif text-xl mb-3",children:"Quality Storage"}),l.jsx("p",{className:"text-sm text-gray-500 font-light leading-relaxed",children:"Our facilities maintain strict temperature control for sensitive products, ensuring zero degradation before dispatch."})]}),l.jsxs("div",{className:"bg-gray-50 p-8 rounded-xl border border-gray-100 text-center hover:shadow-lg transition-all group",children:[l.jsx("div",{className:"w-14 h-14 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm group-hover:scale-110 transition-transform",children:l.jsx(ys,{size:24,className:"text-gray-800"})}),l.jsx("h3",{className:"font-serif text-xl mb-3",children:"Batch Verification"}),l.jsx("p",{className:"text-sm text-gray-500 font-light leading-relaxed",children:"Every shipment is cross-referenced with manufacturer lot numbers. We employ a rigorous authentication process for every product."})]}),l.jsxs("div",{className:"bg-gray-50 p-8 rounded-xl border border-gray-100 text-center hover:shadow-lg transition-all group",children:[l.jsx("div",{className:"w-14 h-14 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm group-hover:scale-110 transition-transform",children:l.jsx(Rm,{size:24,className:"text-gray-800"})}),l.jsx("h3",{className:"font-serif text-xl mb-3",children:"Reliable Logistics"}),l.jsx("p",{className:"text-sm text-gray-500 font-light leading-relaxed",children:"We utilize trusted logistics partners to minimize transit time. Proper packaging keeps products stable throughout delivery."})]})]})]}),l.jsxs("div",{className:"max-w-3xl mx-auto px-6 py-12",children:[l.jsx("h3",{className:"font-serif text-2xl mb-8 text-center",children:"Frequently Asked Questions"}),l.jsx("div",{className:"space-y-4",children:W0.map((c,y)=>l.jsxs("div",{className:"border border-gray-200 rounded-lg bg-white overflow-hidden transition-all hover:border-gray-300",children:[l.jsxs("button",{className:"w-full px-6 py-5 text-left flex justify-between items-center group",onClick:()=>d(u===y?null:y),children:[l.jsx("span",{className:`font-serif text-lg ${u===y?"text-gray-800":"text-gray-900"} transition-colors`,children:c.q}),l.jsx(Em,{size:18,className:`text-gray-400 transition-transform duration-300 ${u===y?"rotate-180":""}`})]}),l.jsx("div",{className:`px-6 overflow-hidden transition-all duration-300 ${u===y?"max-h-40 pb-6 opacity-100":"max-h-0 opacity-0"}`,children:l.jsx("p",{className:"text-sm text-gray-500 font-light leading-relaxed border-t border-gray-100 pt-4",children:c.a})})]},y))})]})]})},by=({showToast:u})=>{const[d,b]=q.useState({name:"",clinicName:"",email:"",phone:"",message:""}),c=g=>{g.preventDefault();const j=`New Inquiry:%0A%0AName: ${encodeURIComponent(d.name)}%0AClinic: ${encodeURIComponent(d.clinicName)}%0AEmail: ${encodeURIComponent(d.email)}%0APhone: ${encodeURIComponent(d.phone)}%0AMessage: ${encodeURIComponent(d.message)}`;window.open(`https://wa.me/919916726373?text=${j}`,"_blank"),u("Opening WhatsApp...","success")},y=g=>b({...d,[g.target.name]:g.target.value});return l.jsxs("div",{className:"animate-fade-in bg-[#fbfbfb] min-h-screen pb-24",children:[l.jsxs("div",{className:"bg-black text-white pt-32 pb-16 px-6 text-center relative overflow-hidden",children:[l.jsx("div",{className:"absolute inset-0 bg-[url('/image/ban2.jpg')] bg-cover bg-center opacity-30 pointer-events-none"}),l.jsxs("div",{className:"relative z-10 max-w-3xl mx-auto",children:[l.jsx("span",{className:"text-white tracking-[0.3em] uppercase text-[10px] font-bold mb-3 block animate-slide-up",children:"Partner With Us"}),l.jsx("h1",{className:"font-serif text-4xl md:text-6xl mb-4 animate-slide-up",style:{animationDelay:"0.1s"},children:"Get in Touch"}),l.jsx("p",{className:"text-gray-400 font-light text-sm md:text-base max-w-lg mx-auto animate-slide-up",style:{animationDelay:"0.2s"},children:"Dedicated support for clinics, hospitals, and distribution partners across India."})]})]}),l.jsx("div",{className:"max-w-7xl mx-auto px-6 py-16",children:l.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24",children:[l.jsxs("div",{className:"space-y-10",children:[l.jsxs("div",{children:[l.jsx("h2",{className:"font-serif text-3xl text-gray-900 mb-6",children:"Shaa Trading"}),l.jsx("p",{className:"text-gray-500 font-light leading-relaxed mb-8",children:"We are Bengaluru's trusted distributor of healthcare and clinical formulations since 2012. Whether you are a clinic looking to stock premium products or a manufacturer looking for a distribution partner, we are here to assist."}),l.jsxs("div",{className:"space-y-6",children:[l.jsxs("div",{className:"flex items-start gap-4",children:[l.jsx("div",{className:"w-12 h-12 bg-white border border-gray-100 rounded-full flex items-center justify-center text-gray-800 shrink-0 shadow-sm",children:l.jsx(Gm,{size:20})}),l.jsxs("div",{children:[l.jsx("h4",{className:"font-serif text-lg mb-1",children:"Phone Support"}),l.jsx("p",{className:"text-sm text-gray-500 mb-1",children:"+91 99167 26373"}),l.jsx("p",{className:"text-xs text-gray-400",children:"Mon-Sat: 10am - 7pm IST"})]})]}),l.jsxs("div",{className:"flex items-start gap-4",children:[l.jsx("div",{className:"w-12 h-12 bg-white border border-gray-100 rounded-full flex items-center justify-center text-gray-800 shrink-0 shadow-sm",children:l.jsx($o,{size:20})}),l.jsxs("div",{children:[l.jsx("h4",{className:"font-serif text-lg mb-1",children:"Email"}),l.jsx("p",{className:"text-sm text-gray-500 mb-1",children:"shaatrading@gmail.com"}),l.jsx("p",{className:"text-xs text-gray-400",children:"24/7 Digital Support"})]})]}),l.jsxs("div",{className:"flex items-start gap-4",children:[l.jsx("div",{className:"w-12 h-12 bg-white border border-gray-100 rounded-full flex items-center justify-center text-gray-800 shrink-0 shadow-sm",children:l.jsx(Mm,{size:20})}),l.jsxs("div",{children:[l.jsx("h4",{className:"font-serif text-lg mb-1",children:"Location"}),l.jsxs("p",{className:"text-sm text-gray-500 leading-relaxed",children:["Bengaluru, Karnataka",l.jsx("br",{}),"Since 2012",l.jsx("br",{}),"India"]})]})]})]})]}),l.jsxs("div",{className:"pt-10 border-t border-gray-100",children:[l.jsx("h4",{className:"text-xs font-bold uppercase tracking-widest text-gray-400 mb-6",children:"Trusted By Professionals"}),l.jsxs("div",{className:"flex gap-8 opacity-50 grayscale hover:grayscale-0 transition-all",children:[l.jsx("span",{className:"font-serif text-xl text-gray-800 font-bold",children:"Glutax"}),l.jsx("span",{className:"font-serif text-xl text-gray-800 font-bold",children:"Veniscy"}),l.jsx("span",{className:"font-serif text-xl text-gray-800 font-bold",children:"Miracle White"})]})]})]}),l.jsxs("div",{className:"bg-white p-8 md:p-10 rounded-2xl shadow-xl border border-gray-100 relative overflow-hidden",children:[l.jsx("div",{className:"absolute top-0 right-0 w-32 h-32 bg-gray-800 rounded-full filter blur-[60px] opacity-20 pointer-events-none"}),l.jsx("h3",{className:"font-serif text-2xl mb-2",children:"Send an Inquiry"}),l.jsx("p",{className:"text-sm text-gray-500 mb-8",children:"Fill out the form below and our wholesale team will contact you within 24 hours."}),l.jsxs("form",{onSubmit:c,className:"space-y-5 relative z-10",children:[l.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-5",children:[l.jsxs("div",{className:"space-y-1.5",children:[l.jsx("label",{className:"text-xs font-bold uppercase tracking-wide text-gray-400",children:"Contact Name"}),l.jsx("input",{required:!0,name:"name",type:"text",className:"w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg outline-none text-sm focus:border-black transition-colors",value:d.name,onChange:y})]}),l.jsxs("div",{className:"space-y-1.5",children:[l.jsx("label",{className:"text-xs font-bold uppercase tracking-wide text-gray-400",children:"Clinic / Business"}),l.jsx("input",{required:!0,name:"clinicName",type:"text",className:"w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg outline-none text-sm focus:border-black transition-colors",value:d.clinicName,onChange:y})]})]}),l.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-5",children:[l.jsxs("div",{className:"space-y-1.5",children:[l.jsx("label",{className:"text-xs font-bold uppercase tracking-wide text-gray-400",children:"Email Address"}),l.jsx("input",{required:!0,name:"email",type:"email",className:"w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg outline-none text-sm focus:border-black transition-colors",value:d.email,onChange:y})]}),l.jsxs("div",{className:"space-y-1.5",children:[l.jsx("label",{className:"text-xs font-bold uppercase tracking-wide text-gray-400",children:"Phone Number"}),l.jsx("input",{required:!0,name:"phone",type:"tel",className:"w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg outline-none text-sm focus:border-black transition-colors",value:d.phone,onChange:y})]})]}),l.jsxs("div",{className:"space-y-1.5",children:[l.jsx("label",{className:"text-xs font-bold uppercase tracking-wide text-gray-400",children:"Message"}),l.jsx("textarea",{required:!0,name:"message",rows:"4",className:"w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg outline-none text-sm resize-none focus:border-black transition-colors",value:d.message,onChange:y})]}),l.jsx(Fa,{type:"submit",className:"w-full py-4 text-sm uppercase tracking-widest font-bold shadow-lg hover:shadow-xl translate-y-0 hover:-translate-y-1 transition-all duration-300",children:"Send Inquiry"}),l.jsx("p",{className:"text-[10px] text-gray-400 text-center mt-4",children:"By submitting this form, you agree to our privacy policy. We respect your data."})]})]})]})})]})},Hm=u=>u?String(u).toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,""):"",qm=u=>{if(!u)return"";const d=Hm(u.name||"");return u.id!=null?`${d}-${u.id}`:d},_m=u=>{if(!u)return"";const d=Hm(u.title||"");return u.id!=null?`${d}-${u.id}`:d},Ke=(u,d={})=>{switch(u){case"home":return"/";case"shop":return"/shop";case"cart":return"/cart";case"about":return"/about";case"contact":return"/contact";case"blog":return"/blog";case"blog-post":return d.post?`/blog/${_m(d.post)}`:"/blog";case"product":return d.product?`/product/${qm(d.product)}`:"/shop";case"terms":return"/terms";case"privacy":return"/privacy";case"shipping":return"/shipping";case"return-policy":return"/return-policy";case"refund-policy":return"/refund-policy";case"success":return"/order-success";default:return"/"}},Sm=()=>{if(typeof window>"u")return{page:"home",product:null,post:null,path:"/"};const{pathname:u,search:d}=window.location,c=(u.replace(/\/+$|^$/g,"")||"/").split("/").filter(Boolean),y=new URLSearchParams(d||""),g=y.get("page"),j=y.get("id");let h="home",f=null,m=null;if(c.length===0){if(g==="product"&&j){const B=la.find(L=>String(L.id)===String(j));if(B)return h="product",f=B,{page:h,product:f,post:m,path:Ke("product",{product:f})}}else if(g==="blog-post"&&j){const B=fs.find(L=>String(L.id)===String(j));if(B)return h="blog-post",m=B,{page:h,product:f,post:m,path:Ke("blog-post",{post:m})}}else g==="shop"?h="shop":g==="about"?h="about":g==="contact"?h="contact":g==="blog"?h="blog":g==="terms"?h="terms":g==="privacy"?h="privacy":g==="shipping"?h="shipping":g==="return-policy"?h="return-policy":g==="refund-policy"?h="refund-policy":g==="success"?h="success":h="home";return{page:h,product:f,post:m,path:Ke(h,{product:f,post:m})}}const[T,S]=c;switch(T){case"":h="home";break;case"shop":h="shop";break;case"about":h="about";break;case"cart":h="cart";break;case"contact":h="contact";break;case"blog":if(S){const B=S,L=fs.find(_=>_m(_)===B);L?(h="blog-post",m=L):h="blog"}else h="blog";break;case"product":if(S){const B=S,L=la.find(_=>qm(_)===B);L?(h="product",f=L):h="shop"}else h="shop";break;case"terms":h="terms";break;case"privacy":h="privacy";break;case"shipping":h="shipping";break;case"return-policy":h="return-policy";break;case"refund-policy":h="refund-policy";break;case"order-success":h="success";break;default:h="home";break}const w=Ke(h,{product:f,post:m});return{page:h,product:f,post:m,path:w}},xy=(u,d,b)=>{let c="Shaa Trading | Skin Whitening, Injectables & Aesthetic Supplies",y="Shaa Trading is a Bengaluru-based distributor and supplier of skin whitening creams, glutathione injections, Korean injectables and aesthetic clinic essentials.",g={"@context":"https://schema.org","@type":"Organization",name:"Shaa Trading",url:"https://shaatrading.in",logo:"https://shaatrading.in/image/logo-t.jpg"},j="Shaa Trading, skin whitening distributor, glutathione injections India, Aqua Skin, Glutax, Glowtiqa, clinic supplier, whitening creams, whitening soaps",h="https://shaatrading.in/",f="index,follow";switch(u){case"home":c="Shaa Trading | Skin Whitening & Glutathione Injection Distributor in India",y="Discover authentic glutathione injections, Aqua Skin, Glutax, Glowtiqa creams and advanced whitening products supplied to clinics and resellers across India.",h="https://shaatrading.in/",j="Shaa Trading, glutathione distributor India, skin whitening supplier, Aqua Skin injections, Glutax distributor, Glowtiqa creams, skin whitening wholesaler Bengaluru",g={"@context":"https://schema.org","@type":"LocalBusiness",name:"Shaa Trading",url:"https://shaatrading.in",image:"https://shaatrading.in/image/logo-t.jpg",logo:"https://shaatrading.in/image/logo-t.jpg",address:{"@type":"PostalAddress",addressLocality:"Bengaluru",addressRegion:"Karnataka",addressCountry:"IN"}};break;case"shop":c="Shop | Glutathione Injections, Glowtiqa Creams & Whitening Kits – Shaa Trading",y="Browse Aqua Skin, Glutax, Dr James, Glowtiqa and other advanced skin whitening injections, creams, soaps and supplements from Shaa Trading.",h=`https://shaatrading.in${Ke("shop")}`,j="buy glutathione injections, Aqua Skin India, Glutax injections, Dr James injection, Glowtiqa whitening cream, skin whitening products online, clinic supplies India";break;case"cart":c="Your Cart | Shaa Trading",y="Review the items in your cart and proceed to payment for your Shaa Trading order.",h=`https://shaatrading.in${Ke("cart")}`,j="cart, shopping cart, sha a trading cart, checkout";break;case"about":c="About Shaa Trading | Bengaluru-based Skin Whitening Product Supplier",y="Learn about Shaa Trading, a Bengaluru-based distributor of glutathione injectables, whitening creams and professional aesthetic supplies since 2012.",h=`https://shaatrading.in${Ke("about")}`,j="about Shaa Trading, skin whitening supplier Bengaluru, glutathione wholesale India, aesthetic products distributor";break;case"contact":c="Contact Shaa Trading | Wholesale & Clinic Supply Enquiries",y="Get in touch with Shaa Trading for wholesale price lists, bulk orders, reseller opportunities and clinic partnerships for skin whitening and injectable products.",h=`https://shaatrading.in${Ke("contact")}`,j="contact Shaa Trading, glutathione wholesale enquiry, clinic supply contact, skin whitening distributor contact";break;case"blog":c="Clinical Insights | Glutathione, PDRN & IV Therapy – Shaa Trading Journal",y="Read educational articles on glutathione science, PDRN, IV therapy protocols and safety guidance for clinics and practitioners.",h=`https://shaatrading.in${Ke("blog")}`,j="glutathione science, PDRN information, IV therapy protocols, skin whitening education, Shaa Trading blog";break;case"blog-post":b&&(c=`${b.title} | Shaa Trading Clinical Journal`,y=b.excerpt||y,h=`https://shaatrading.in${Ke("blog-post",{post:b})}`,j=`${b.title}, ${b.category}, glutathione articles, clinical aesthetics, Shaa Trading journal`,g={"@context":"https://schema.org","@type":"Article",headline:b.title,description:b.excerpt,author:b.author||"Shaa Trading Editorial",datePublished:b.date,image:`https://shaatrading.in${b.image}`,publisher:{"@type":"Organization",name:"Shaa Trading",logo:{"@type":"ImageObject",url:"https://shaatrading.in/image/logo-t.jpg"}}});break;case"product":if(d){const m=d.description||y;c=`${d.name} | ${d.brand} Supplier – Shaa Trading`,y=m.length>155?m.slice(0,152)+"…":m,h=`https://shaatrading.in${Ke("product",{product:d})}`,j=[d.name,d.brand,d.category,"glutathione injection","skin whitening","whitening product","clinic supply","wholesaler India"].filter(Boolean).join(", "),g={"@context":"https://schema.org","@type":"Product",name:d.name,image:[`https://shaatrading.in${d.image}`],description:y,brand:{"@type":"Brand",name:d.brand},sku:d.sku||void 0,offers:{"@type":"Offer",priceCurrency:"INR",price:d.price,availability:"https://schema.org/InStock",url:h}}}break;case"terms":c="Terms & Conditions | Shaa Trading",y="Read the professional use terms, liability and purchasing eligibility for Shaa Trading clients, clinics and resellers.",h=`https://shaatrading.in${Ke("terms")}`,j="Shaa Trading terms and conditions, skin whitening product terms, clinic supply terms",f="noindex,follow";break;case"privacy":c="Privacy Policy | Shaa Trading",y="Understand how Shaa Trading handles, stores and protects your personal, clinic and order data.",h=`https://shaatrading.in${Ke("privacy")}`,j="Shaa Trading privacy policy, data handling, data protection, clinic data privacy",f="noindex,follow";break;case"shipping":c="Shipping Policy | Shaa Trading",y="Learn about domestic shipping timelines, handling and packaging processes for Shaa Trading orders across India.",h=`https://shaatrading.in${Ke("shipping")}`,j="Shaa Trading shipping policy, delivery time, order handling, India shipping whitening products",f="noindex,follow";break;case"return-policy":c="Return Policy | Shaa Trading",y="View our guidelines for damaged, incorrect or compromised products and return eligibility for customers and clinics.",h=`https://shaatrading.in${Ke("return-policy")}`,j="Shaa Trading return policy, damaged product return, clinic returns, whitening injection returns",f="noindex,follow";break;case"refund-policy":c="Refund Policy | Shaa Trading",y="Read our refund conditions for cancelled orders, payment failures and exceptional disputes.",h=`https://shaatrading.in${Ke("refund-policy")}`,j="Shaa Trading refund policy, payment refund, order cancellation refund",f="noindex,follow";break;case"success":c="Order Confirmed | Shaa Trading",y="Your order and payment have been received by Shaa Trading. Our team will confirm dispatch and shipping details shortly.",h=`https://shaatrading.in${Ke("success")}`,j="Shaa Trading order success, payment success, whitening order confirmed",f="noindex,follow";break}return{title:c,description:y,jsonLd:g,keywords:j,canonical:h,robots:f}};function vy(){const[u,d]=q.useState("home"),[b,c]=q.useState([]),[y,g]=q.useState(!1),[j,h]=q.useState(!1),[f,m]=q.useState(null),[T,S]=q.useState(null),[w,B]=q.useState(null),[L,_]=q.useState(null),[I,Q]=q.useState("All"),[je,fe]=q.useState("All Brands"),[be,he]=q.useState(""),[Ue,ae]=q.useState(()=>localStorage.getItem("shaa_token")||""),[Te,lt]=q.useState(()=>{try{const D=localStorage.getItem("shaa_user");return D?JSON.parse(D):null}catch{return null}}),Ct=()=>{ae(""),lt(null),localStorage.removeItem("shaa_token"),localStorage.removeItem("shaa_user"),Ne("Logged out successfully","success"),d("home")};q.useEffect(()=>{const D=Sm();d(D.page),D.product&&m(D.product),D.post&&S(D.post);const U={page:D.page,product:D.product||null,post:D.post||null};window.history.replaceState(U,"",D.path);const V=W=>{if(W.state&&W.state.page)d(W.state.page),m(W.state.product||null),S(W.state.post||null);else{const J=Sm();d(J.page),m(J.product||null),S(J.post||null)}h(!1)};return window.addEventListener("popstate",V),()=>window.removeEventListener("popstate",V)},[]);const Ne=(D,U="success")=>{B({message:D,type:U})},ce=(D,U=null)=>{D==="product"&&U&&m(U),D==="blog-post"&&U&&S(U),d(D),h(!1),window.scrollTo(0,0);const V={page:D,product:D==="product"?U:null,post:D==="blog-post"?U:null},W=Ke(D,{product:V.product,post:V.post});window.history.pushState(V,"",W)},ht=(D,U=1)=>{c(V=>V.find(J=>J.id===D.id)?V.map(J=>J.id===D.id?{...J,quantity:J.quantity+U}:J):[...V,{...D,quantity:U}]),ce("cart"),Ne(`Added ${D.name} to cart`,"success")},st=D=>{c(U=>U.filter(V=>V.id!==D))},it=(D,U)=>{c(V=>V.map(W=>W.id===D?{...W,quantity:Math.max(1,W.quantity+U)}:W))},R=()=>new Promise(D=>{const U=document.createElement("script");U.src="https://checkout.razorpay.com/v1/checkout.js",U.onload=()=>D(!0),U.onerror=()=>D(!1),document.body.appendChild(U)}),H=async D=>{if(!await R()){Ne("Razorpay SDK failed to load. Are you online?","error");return}localStorage.setItem("temp_cart",JSON.stringify(b)),localStorage.setItem("temp_user",JSON.stringify(D));const V=b.reduce((W,J)=>W+J.price*J.quantity,0);try{const W=await fetch(`${jm}/api/payment/order`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({amount:V,currency:"INR",products:b,userId:Te?Te._id:null})}).then(ue=>ue.json()),J={key:K0,amount:W.amount,currency:W.currency,name:"Shaa Trading",description:"Wholesale Healthcare Supplies",image:"/image/shaa-logo.png",order_id:W.id,handler:async function(ue){const Fe=await fetch(`${jm}/api/payment/verify`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({razorpay_order_id:ue.razorpay_order_id,razorpay_payment_id:ue.razorpay_payment_id,razorpay_signature:ue.razorpay_signature})}).then(Tt=>Tt.json());if(Fe.success){try{const Tt={userId:Te?Te._id:null,razorpayOrderId:Fe.order&&Fe.order.razorpayOrderId?Fe.order.razorpayOrderId:ue.razorpay_order_id,razorpayPaymentId:ue.razorpay_payment_id,razorpaySignature:ue.razorpay_signature,amount:Fe.order&&Fe.order.amount?Fe.order.amount:V*100,currency:Fe.order&&Fe.order.currency?Fe.order.currency:"INR",products:b,customerName:D.name,email:D.email,phone:D.phone,address:D.address,status:"Paid"};await fetch(`${Nt}/api/orders/create`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(Tt)})}catch(Tt){console.error("Failed to save order to DB",Tt)}_(ue.razorpay_payment_id),g(!1),c([]),ce("success")}else Ne("Payment verification failed","error")},prefill:{name:D.name,email:D.email,contact:D.phone},notes:{address:D.address},theme:{color:"#000000"}};new window.Razorpay(J).open()}catch(W){console.error("Payment Error:",W),Ne("Could not initiate payment. Server error.","error")}},{title:X,description:pe,keywords:de,canonical:v,robots:z}=xy(u,f,T);return l.jsxs("div",{className:"font-sans text-gray-900 bg-[#fbfbfb] min-h-screen flex flex-col selection:bg-gray-800 selection:text-white",children:[l.jsxs(Zo,{children:[l.jsx("title",{children:X}),l.jsx("meta",{name:"description",content:pe}),de&&l.jsx("meta",{name:"keywords",content:de}),z&&l.jsx("meta",{name:"robots",content:z}),l.jsx("link",{rel:"canonical",href:v})]}),l.jsx("style",{children:`
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
        `}),w&&l.jsx(Z0,{message:w.message,type:w.type,onClose:()=>B(null)}),u==="success"?l.jsx(ey,{navigateTo:ce,showToast:Ne,transactionId:L}):l.jsxs(l.Fragment,{children:[l.jsx($0,{currentPage:u,setCurrentPage:ce,cartCount:b.reduce((D,U)=>D+U.quantity,0),toggleCart:()=>ce("cart"),mobileMenuOpen:j,setMobileMenuOpen:h,setShopFilter:Q,setBrandFilter:fe,searchQuery:be,setSearchQuery:he,user:Te,handleLogout:Ct}),l.jsxs("main",{className:"flex-grow",children:[u==="home"&&l.jsx(ay,{navigateTo:ce,addToCart:ht,setShopFilter:Q}),u==="shop"&&l.jsx(uy,{navigateTo:ce,addToCart:ht,filter:I,setFilter:Q,brandFilter:je,setBrandFilter:fe,searchQuery:be,setSearchQuery:he}),u==="product"&&f&&l.jsx(my,{product:f,addToCart:ht,navigateTo:ce}),u==="cart"&&l.jsx(ty,{cart:b,updateQuantity:it,removeFromCart:st,checkout:H,navigateTo:ce}),u==="blog"&&l.jsx(gy,{navigateTo:ce}),u==="blog-post"&&T&&l.jsx(dy,{post:T,navigateTo:ce}),u==="about"&&l.jsx(yy,{}),u==="contact"&&l.jsx(by,{showToast:Ne}),u==="privacy"&&l.jsx(fy,{}),u==="terms"&&l.jsx(hy,{}),u==="shipping"&&l.jsx(py,{}),u==="login"&&l.jsx(ny,{navigateTo:ce,setAuthToken:ae,setUser:lt,showToast:Ne}),u==="signup"&&l.jsx(ly,{navigateTo:ce,showToast:Ne}),u==="track"&&l.jsx(sy,{navigateTo:ce,showToast:Ne}),u==="orders"&&l.jsx(ry,{token:Ue,user:Te,showToast:Ne,navigateTo:ce}),u==="admin"&&Ue&&Te?.isAdmin?l.jsx(cy,{token:Ue,user:Te,showToast:Ne,navigateTo:ce,handleLogout:Ct}):u==="admin"?l.jsx("div",{className:"min-h-screen flex items-center justify-center bg-gray-50 pt-20",children:l.jsxs("div",{className:"text-center",children:[l.jsx("h1",{className:"text-3xl font-serif text-gray-900 mb-2",children:"Access Denied"}),l.jsx("p",{className:"text-gray-500 mb-6",children:"You do not have permission to access the admin dashboard."}),l.jsx("button",{onClick:()=>ce("home"),className:"px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-800",children:"Back to Home"})]})}):null]}),l.jsx(P0,{setCurrentPage:ce,showToast:Ne}),l.jsx(iy,{isOpen:y,onClose:()=>g(!1),cart:b,updateQuantity:it,removeFromCart:st,checkout:H})]})]})}vp.createRoot(document.getElementById("root")).render(l.jsx(q.StrictMode,{children:l.jsx(vy,{})}));
