const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-CZRmZiBj.js","assets/index-DTz0Z5Wp.js","assets/index-D7BAU221.css"])))=>i.map(i=>d[i]);
import{i as C,r as k,M as r,C as h,O as v,A as S,b as f,c as E,x as A,R as l,_ as b,T as _,U as x,d as O,S as N,f as g,g as I,h as L,j as w,k as T}from"./index-DTz0Z5Wp.js";const R=C`
  :host {
    z-index: var(--w3m-z-index);
    display: block;
    backface-visibility: hidden;
    will-change: opacity;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    pointer-events: none;
    opacity: 0;
    background-color: var(--wui-cover);
    transition: opacity 0.2s var(--wui-ease-out-power-2);
    will-change: opacity;
  }

  :host(.open) {
    opacity: 1;
  }

  wui-card {
    max-width: var(--w3m-modal-width);
    width: 100%;
    position: relative;
    animation: zoom-in 0.2s var(--wui-ease-out-power-2);
    animation-fill-mode: backwards;
    outline: none;
  }

  wui-card[shake='true'] {
    animation:
      zoom-in 0.2s var(--wui-ease-out-power-2),
      w3m-shake 0.5s var(--wui-ease-out-power-2);
  }

  wui-flex {
    overflow-x: hidden;
    overflow-y: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  @media (max-height: 700px) and (min-width: 431px) {
    wui-flex {
      align-items: flex-start;
    }

    wui-card {
      margin: var(--wui-spacing-xxl) 0px;
    }
  }

  @media (max-width: 430px) {
    wui-flex {
      align-items: flex-end;
    }

    wui-card {
      max-width: 100%;
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
      border-bottom: none;
      animation: slide-in 0.2s var(--wui-ease-out-power-2);
    }

    wui-card[shake='true'] {
      animation:
        slide-in 0.2s var(--wui-ease-out-power-2),
        w3m-shake 0.5s var(--wui-ease-out-power-2);
    }
  }

  @keyframes zoom-in {
    0% {
      transform: scale(0.95) translateY(0);
    }
    100% {
      transform: scale(1) translateY(0);
    }
  }

  @keyframes slide-in {
    0% {
      transform: scale(1) translateY(50px);
    }
    100% {
      transform: scale(1) translateY(0);
    }
  }

  @keyframes w3m-shake {
    0% {
      transform: scale(1) rotate(0deg);
    }
    20% {
      transform: scale(1) rotate(-1deg);
    }
    40% {
      transform: scale(1) rotate(1.5deg);
    }
    60% {
      transform: scale(1) rotate(-1.5deg);
    }
    80% {
      transform: scale(1) rotate(1deg);
    }
    100% {
      transform: scale(1) rotate(0deg);
    }
  }

  @keyframes w3m-view-height {
    from {
      height: var(--prev-height);
    }
    to {
      height: var(--new-height);
    }
  }
`;var d=function(u,e,t,i){var o=arguments.length,s=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(u,e,t,i);else for(var n=u.length-1;n>=0;n--)(a=u[n])&&(s=(o<3?a(s):o>3?a(e,t,s):a(e,t))||s);return o>3&&s&&Object.defineProperty(e,t,s),s};const y="scroll-lock";let c=class extends k{constructor(){super(),this.unsubscribe=[],this.abortController=void 0,this.open=r.state.open,this.caipAddress=h.state.activeCaipAddress,this.caipNetwork=h.state.activeCaipNetwork,this.isSiweEnabled=v.state.isSiweEnabled,this.shake=r.state.shake,this.initializeTheming(),S.prefetch(),this.unsubscribe.push(r.subscribeKey("open",e=>e?this.onOpen():this.onClose()),r.subscribeKey("shake",e=>this.shake=e),f.subscribeKey("siweStatus",e=>this.onSiweStatusChange(e),"eip155"),h.subscribeKey("activeCaipNetwork",e=>this.onNewNetwork(e)),h.subscribeKey("activeCaipAddress",e=>this.onNewAddress(e)),v.subscribeKey("isSiweEnabled",e=>this.isSiweEnabled=e)),E.sendEvent({type:"track",event:"MODAL_LOADED"})}disconnectedCallback(){this.unsubscribe.forEach(e=>e()),this.onRemoveKeyboardListener()}render(){return this.open?A`
          <wui-flex @click=${this.onOverlayClick.bind(this)} data-testid="w3m-modal-overlay">
            <wui-card
              shake="${this.shake}"
              role="alertdialog"
              aria-modal="true"
              tabindex="0"
              data-testid="w3m-modal-card"
            >
              <w3m-header></w3m-header>
              <w3m-router></w3m-router>
              <w3m-snackbar></w3m-snackbar>
              <w3m-alertbar></w3m-alertbar>
            </wui-card>
          </wui-flex>
          <w3m-tooltip></w3m-tooltip>
        `:null}async onOverlayClick(e){e.target===e.currentTarget&&await this.handleClose()}async handleClose(){const e=l.state.view==="ConnectingSiwe",t=l.state.view==="ApproveTransaction",i=l.state.view==="UnsupportedChain";if(this.isSiweEnabled){const{SIWEController:o}=await b(async()=>{const{SIWEController:a}=await import("./index-CZRmZiBj.js");return{SIWEController:a}},__vite__mapDeps([0,1,2]));o.state.status!=="success"&&(e||t)?r.shake():r.close()}else i?r.shake():r.close()}initializeTheming(){const{themeVariables:e,themeMode:t}=_.state,i=x.getColorTheme(t);O(e,i)}onClose(){this.open=!1,this.classList.remove("open"),this.onScrollUnlock(),N.hide(),this.onRemoveKeyboardListener()}onOpen(){this.open=!0,this.classList.add("open"),this.onScrollLock(),this.onAddKeyboardListener()}onScrollLock(){const e=document.createElement("style");e.dataset.w3m=y,e.textContent=`
      body {
        touch-action: none;
        overflow: hidden;
        overscroll-behavior: contain;
      }
      w3m-modal {
        pointer-events: auto;
      }
    `,document.head.appendChild(e)}onScrollUnlock(){const e=document.head.querySelector(`style[data-w3m="${y}"]`);e&&e.remove()}onAddKeyboardListener(){var t;this.abortController=new AbortController;const e=(t=this.shadowRoot)==null?void 0:t.querySelector("wui-card");e==null||e.focus(),window.addEventListener("keydown",i=>{if(i.key==="Escape")this.handleClose();else if(i.key==="Tab"){const{tagName:o}=i.target;o&&!o.includes("W3M-")&&!o.includes("WUI-")&&(e==null||e.focus())}},this.abortController)}onRemoveKeyboardListener(){var e;(e=this.abortController)==null||e.abort(),this.abortController=void 0}onSiweStatusChange(e){e==="success"&&r.close()}async onNewAddress(e){var a;const t=this.caipAddress,i=t?g.getPlainAddress(t):void 0,o=e?g.getPlainAddress(e):void 0,s=i===o;if(this.caipAddress=e,await I.initializeSWIXIfAvailable(),o&&!s&&this.isSiweEnabled)try{const{SIWEController:n}=await b(async()=>{const{SIWEController:m}=await import("./index-CZRmZiBj.js");return{SIWEController:m}},__vite__mapDeps([0,1,2])),p=f.state.siweStatus==="success";!i&&o?this.onSiweNavigation():p&&i&&o&&i!==o&&(a=n.state._client)!=null&&a.options.signOutOnAccountChange&&(await n.signOut(),this.onSiweNavigation())}catch(n){throw this.caipAddress=t,n}o||r.close()}async onNewNetwork(e){var o,s,a,n;if(!this.caipAddress){this.caipNetwork=e,l.goBack();return}const t=(s=(o=this.caipNetwork)==null?void 0:o.caipNetworkId)==null?void 0:s.toString(),i=(a=e==null?void 0:e.caipNetworkId)==null?void 0:a.toString();if(t&&i&&t!==i)if(this.isSiweEnabled){const{SIWEController:p}=await b(async()=>{const{SIWEController:m}=await import("./index-CZRmZiBj.js");return{SIWEController:m}},__vite__mapDeps([0,1,2]));(n=p.state._client)!=null&&n.options.signOutOnNetworkChange?(await p.signOut(),this.onSiweNavigation()):l.goBack()}else l.goBack();this.caipNetwork=e}onSiweNavigation(){const e=h.state.activeChain===L.CHAIN.EVM;!(f.state.siweStatus==="success")&&e?this.open?l.replace("ConnectingSiwe"):r.open({view:"ConnectingSiwe"}):l.goBack()}};c.styles=R;d([w()],c.prototype,"open",void 0);d([w()],c.prototype,"caipAddress",void 0);d([w()],c.prototype,"caipNetwork",void 0);d([w()],c.prototype,"isSiweEnabled",void 0);d([w()],c.prototype,"shake",void 0);c=d([T("w3m-modal")],c);export{c as W3mModal};
