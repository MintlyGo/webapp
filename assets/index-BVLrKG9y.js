const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-CqXEOHbt.js","assets/index-ChYoWS9G.js","assets/index-P9Y2MQGg.css"])))=>i.map(i=>d[i]);
import{p as m,s as h,n as R,_ as V}from"./index-ChYoWS9G.js";const o=m({history:["ConnectWallet"],view:"ConnectWallet",data:void 0}),N={state:o,subscribe(e){return h(o,()=>e(o))},push(e,t){e!==o.view&&(o.view=e,t&&(o.data=t),o.history.push(e))},reset(e){o.view=e,o.history=[e]},replace(e){o.history.length>1&&(o.history[o.history.length-1]=e,o.view=e)},goBack(){if(o.history.length>1){o.history.pop();const[e]=o.history.slice(-1);o.view=e}},setData(e){o.data=e}},a={WALLETCONNECT_DEEPLINK_CHOICE:"WALLETCONNECT_DEEPLINK_CHOICE",WCM_VERSION:"WCM_VERSION",RECOMMENDED_WALLET_AMOUNT:9,isMobile(){return typeof window<"u"?!!(window.matchMedia("(pointer:coarse)").matches||/Android|webOS|iPhone|iPad|iPod|BlackBerry|Opera Mini/u.test(navigator.userAgent)):!1},isAndroid(){return a.isMobile()&&navigator.userAgent.toLowerCase().includes("android")},isIos(){const e=navigator.userAgent.toLowerCase();return a.isMobile()&&(e.includes("iphone")||e.includes("ipad"))},isHttpUrl(e){return e.startsWith("http://")||e.startsWith("https://")},isArray(e){return Array.isArray(e)&&e.length>0},isTelegram(){return typeof window<"u"&&(!!window.TelegramWebviewProxy||!!window.Telegram||!!window.TelegramWebviewProxyProto)},formatNativeUrl(e,t,s){if(a.isHttpUrl(e))return this.formatUniversalUrl(e,t,s);let n=e;n.includes("://")||(n=e.replaceAll("/","").replaceAll(":",""),n=`${n}://`),n.endsWith("/")||(n=`${n}/`),this.setWalletConnectDeepLink(n,s);const l=encodeURIComponent(t);return`${n}wc?uri=${l}`},formatUniversalUrl(e,t,s){if(!a.isHttpUrl(e))return this.formatNativeUrl(e,t,s);let n=e;if(n.startsWith("https://t.me")){const i=Buffer.from(t).toString("base64").replace(/[=]/g,"");n.endsWith("/")&&(n=n.slice(0,-1)),this.setWalletConnectDeepLink(n,s);const c=new URL(n);return c.searchParams.set("startapp",i),c.toString()}n.endsWith("/")||(n=`${n}/`),this.setWalletConnectDeepLink(n,s);const l=encodeURIComponent(t);return`${n}wc?uri=${l}`},async wait(e){return new Promise(t=>{setTimeout(t,e)})},openHref(e,t){const s=this.isTelegram()?"_blank":t;window.open(e,s,"noreferrer noopener")},setWalletConnectDeepLink(e,t){try{localStorage.setItem(a.WALLETCONNECT_DEEPLINK_CHOICE,JSON.stringify({href:e,name:t}))}catch{console.info("Unable to set WalletConnect deep link")}},setWalletConnectAndroidDeepLink(e){try{const[t]=e.split("?");localStorage.setItem(a.WALLETCONNECT_DEEPLINK_CHOICE,JSON.stringify({href:t,name:"Android"}))}catch{console.info("Unable to set WalletConnect android deep link")}},removeWalletConnectDeepLink(){try{localStorage.removeItem(a.WALLETCONNECT_DEEPLINK_CHOICE)}catch{console.info("Unable to remove WalletConnect deep link")}},setModalVersionInStorage(){try{typeof localStorage<"u"&&localStorage.setItem(a.WCM_VERSION,"2.7.0")}catch{console.info("Unable to set Web3Modal version in storage")}},getWalletRouterData(){var e;const t=(e=N.state.data)==null?void 0:e.Wallet;if(!t)throw new Error('Missing "Wallet" view data');return t}},B=typeof location<"u"&&(location.hostname.includes("localhost")||location.protocol.includes("https")),r=m({enabled:B,userSessionId:"",events:[],connectedWalletId:void 0}),H={state:r,subscribe(e){return h(r.events,()=>e(R(r.events[r.events.length-1])))},initialize(){r.enabled&&typeof(crypto==null?void 0:crypto.randomUUID)<"u"&&(r.userSessionId=crypto.randomUUID())},setConnectedWalletId(e){r.connectedWalletId=e},click(e){if(r.enabled){const t={type:"CLICK",name:e.name,userSessionId:r.userSessionId,timestamp:Date.now(),data:e};r.events.push(t)}},track(e){if(r.enabled){const t={type:"TRACK",name:e.name,userSessionId:r.userSessionId,timestamp:Date.now(),data:e};r.events.push(t)}},view(e){if(r.enabled){const t={type:"VIEW",name:e.name,userSessionId:r.userSessionId,timestamp:Date.now(),data:e};r.events.push(t)}}},u=m({chains:void 0,walletConnectUri:void 0,isAuth:!1,isCustomDesktop:!1,isCustomMobile:!1,isDataLoaded:!1,isUiLoaded:!1}),d={state:u,subscribe(e){return h(u,()=>e(u))},setChains(e){u.chains=e},setWalletConnectUri(e){u.walletConnectUri=e},setIsCustomDesktop(e){u.isCustomDesktop=e},setIsCustomMobile(e){u.isCustomMobile=e},setIsDataLoaded(e){u.isDataLoaded=e},setIsUiLoaded(e){u.isUiLoaded=e},setIsAuth(e){u.isAuth=e}},w=m({projectId:"",mobileWallets:void 0,desktopWallets:void 0,walletImages:void 0,chains:void 0,enableAuthMode:!1,enableExplorer:!0,explorerExcludedWalletIds:void 0,explorerRecommendedWalletIds:void 0,termsOfServiceUrl:void 0,privacyPolicyUrl:void 0}),C={state:w,subscribe(e){return h(w,()=>e(w))},setConfig(e){var t,s;H.initialize(),d.setChains(e.chains),d.setIsAuth(!!e.enableAuthMode),d.setIsCustomMobile(!!((t=e.mobileWallets)!=null&&t.length)),d.setIsCustomDesktop(!!((s=e.desktopWallets)!=null&&s.length)),a.setModalVersionInStorage(),Object.assign(w,e)}};var K=Object.defineProperty,M=Object.getOwnPropertySymbols,z=Object.prototype.hasOwnProperty,q=Object.prototype.propertyIsEnumerable,U=(e,t,s)=>t in e?K(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,J=(e,t)=>{for(var s in t||(t={}))z.call(t,s)&&U(e,s,t[s]);if(M)for(var s of M(t))q.call(t,s)&&U(e,s,t[s]);return e};const L="https://explorer-api.walletconnect.com",O="wcm",A="js-2.7.0";async function W(e,t){const s=J({sdkType:O,sdkVersion:A},t),n=new URL(e,L);return n.searchParams.append("projectId",C.state.projectId),Object.entries(s).forEach(([i,c])=>{c&&n.searchParams.append(i,String(c))}),(await fetch(n)).json()}const f={async getDesktopListings(e){return W("/w3m/v1/getDesktopListings",e)},async getMobileListings(e){return W("/w3m/v1/getMobileListings",e)},async getInjectedListings(e){return W("/w3m/v1/getInjectedListings",e)},async getAllListings(e){return W("/w3m/v1/getAllListings",e)},getWalletImageUrl(e){return`${L}/w3m/v1/getWalletImage/${e}?projectId=${C.state.projectId}&sdkType=${O}&sdkVersion=${A}`},getAssetImageUrl(e){return`${L}/w3m/v1/getAssetImage/${e}?projectId=${C.state.projectId}&sdkType=${O}&sdkVersion=${A}`}};var F=Object.defineProperty,D=Object.getOwnPropertySymbols,Y=Object.prototype.hasOwnProperty,G=Object.prototype.propertyIsEnumerable,S=(e,t,s)=>t in e?F(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,Q=(e,t)=>{for(var s in t||(t={}))Y.call(t,s)&&S(e,s,t[s]);if(D)for(var s of D(t))G.call(t,s)&&S(e,s,t[s]);return e};const T=a.isMobile(),p=m({wallets:{listings:[],total:0,page:1},search:{listings:[],total:0,page:1},recomendedWallets:[]}),re={state:p,async getRecomendedWallets(){const{explorerRecommendedWalletIds:e,explorerExcludedWalletIds:t}=C.state;if(e==="NONE"||t==="ALL"&&!e)return p.recomendedWallets;if(a.isArray(e)){const n={recommendedIds:e.join(",")},{listings:l}=await f.getAllListings(n),i=Object.values(l);i.sort((c,v)=>{const y=e.indexOf(c.id),_=e.indexOf(v.id);return y-_}),p.recomendedWallets=i}else{const{chains:s,isAuth:n}=d.state,l=s==null?void 0:s.join(","),i=a.isArray(t),c={page:1,sdks:n?"auth_v1":void 0,entries:a.RECOMMENDED_WALLET_AMOUNT,chains:l,version:2,excludedIds:i?t.join(","):void 0},{listings:v}=T?await f.getMobileListings(c):await f.getDesktopListings(c);p.recomendedWallets=Object.values(v)}return p.recomendedWallets},async getWallets(e){const t=Q({},e),{explorerRecommendedWalletIds:s,explorerExcludedWalletIds:n}=C.state,{recomendedWallets:l}=p;if(n==="ALL")return p.wallets;l.length?t.excludedIds=l.map(x=>x.id).join(","):a.isArray(s)&&(t.excludedIds=s.join(",")),a.isArray(n)&&(t.excludedIds=[t.excludedIds,n].filter(Boolean).join(",")),d.state.isAuth&&(t.sdks="auth_v1");const{page:i,search:c}=e,{listings:v,total:y}=T?await f.getMobileListings(t):await f.getDesktopListings(t),_=Object.values(v),P=c?"search":"wallets";return p[P]={listings:[...p[P].listings,..._],total:y,page:i??1},{listings:_,total:y}},getWalletImageUrl(e){return f.getWalletImageUrl(e)},getAssetImageUrl(e){return f.getAssetImageUrl(e)},resetSearch(){p.search={listings:[],total:0,page:1}}},I=m({open:!1}),E={state:I,subscribe(e){return h(I,()=>e(I))},async open(e){return new Promise(t=>{const{isUiLoaded:s,isDataLoaded:n}=d.state;if(a.removeWalletConnectDeepLink(),d.setWalletConnectUri(e==null?void 0:e.uri),d.setChains(e==null?void 0:e.chains),N.reset("ConnectWallet"),s&&n)I.open=!0,t();else{const l=setInterval(()=>{const i=d.state;i.isUiLoaded&&i.isDataLoaded&&(clearInterval(l),I.open=!0,t())},200)}})},close(){I.open=!1}};var X=Object.defineProperty,$=Object.getOwnPropertySymbols,Z=Object.prototype.hasOwnProperty,ee=Object.prototype.propertyIsEnumerable,j=(e,t,s)=>t in e?X(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,te=(e,t)=>{for(var s in t||(t={}))Z.call(t,s)&&j(e,s,t[s]);if($)for(var s of $(t))ee.call(t,s)&&j(e,s,t[s]);return e};function se(){return typeof matchMedia<"u"&&matchMedia("(prefers-color-scheme: dark)").matches}const b=m({themeMode:se()?"dark":"light"}),k={state:b,subscribe(e){return h(b,()=>e(b))},setThemeConfig(e){const{themeMode:t,themeVariables:s}=e;t&&(b.themeMode=t),s&&(b.themeVariables=te({},s))}},g=m({open:!1,message:"",variant:"success"}),ae={state:g,subscribe(e){return h(g,()=>e(g))},openToast(e,t){g.open=!0,g.message=e,g.variant=t},closeToast(){g.open=!1}};class ne{constructor(t){this.openModal=E.open,this.closeModal=E.close,this.subscribeModal=E.subscribe,this.setTheme=k.setThemeConfig,k.setThemeConfig(t),C.setConfig(t),this.initUi()}async initUi(){if(typeof window<"u"){await V(()=>import("./index-CqXEOHbt.js"),__vite__mapDeps([0,1,2]));const t=document.createElement("wcm-modal");document.body.insertAdjacentElement("beforeend",t),d.setIsUiLoaded(!0)}}}const ie=Object.freeze(Object.defineProperty({__proto__:null,WalletConnectModal:ne},Symbol.toStringTag,{value:"Module"}));export{a as C,re as E,E as M,d as O,N as R,ae as T,C as a,k as b,H as c,ie as i};
