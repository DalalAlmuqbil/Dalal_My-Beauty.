"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[168],{720687:(e,t,n)=>{n.d(t,{default:()=>r});var a=n(934980);let i=`pulsing {
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.4;
  }

  100% {
    opacity: 1;
  }
}`,r={css:(0,a.Ll)([i]),animation:"pulsing 2s infinite"}},934980:(e,t,n)=>{n.d(t,{CC:()=>i,Ll:()=>o,XF:()=>r});let a=(e,t,n)=>({x:Math.floor(e*Math.cos(n)),y:Math.floor(t*Math.sin(n))}),i=(e,t)=>a(t/2,e/2,2*Math.random()*Math.PI),r=(e,t)=>Math.floor(Math.random()*(t-e+1))+e,o=e=>["@-webkit-keyframes","@keyframes"].map(t=>e.map(e=>t+" "+e).join("\n")).join("\n")},31723:(e,t,n)=>{n.r(t),n.d(t,{default:()=>S});var a=n(667294),i=n(883119),r=n(573706),o=n(986782);function l(e,t,n){var a;return(t="symbol"==typeof(a=function(e,t){if("object"!=typeof e||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var a=n.call(e,t||"default");if("object"!=typeof a)return a;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"))?a:a+"")in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}let s={},m=e=>{let t=e.__id||e.id;return"string"==typeof t&&t||null};class u{constructor(){l(this,"idMap",new Map),l(this,"objMap",new WeakMap)}get(e){let t=m(e);return this.objMap.get(e)??(t?this.idMap.get(t):void 0)}has(e){let t=m(e);return this.objMap.has(e)??(!!t&&this.idMap.has(t))}set(e,t){let n=m(e);n&&this.idMap.set(n,t),this.objMap.set(e,t)}reset(){this.idMap=new Map,this.objMap=new WeakMap}}function p(e,t){return"number"==typeof e?e:"_lg1"===t?e[t]??e.lg??1:e[t]??1}var d=n(587435),c=n(39260),h=n(876594),g=n(720687),y=n(512541),f=n(785893);let{css:_,animation:x}=g.default,b={backgroundColor:h._VP,animation:x,borderRadius:h.Ev2};function v({data:e}){let{height:t}=e;return(0,f.jsxs)(a.Fragment,{children:[(0,f.jsx)(y.Z,{unsafeCSS:_}),(0,f.jsx)(i.xu,{dangerouslySetInlineStyle:{__style:b},"data-test-id":"skeleton-pin",children:(0,f.jsx)(i.xu,{height:t})})]})}var w=n(679482),M=n(297728),C=n(730212),k=n(410150),$=n(415787),j=n(855746);function S(e){let{align:t,cacheKey:n,id:l,isFetching:m,isGridCentered:h=!0,items:g,layout:_,loadItems:x,masonryRef:b,optOutFluidGridExperiment:S=!1,renderItem:A,scrollContainerRef:E,virtualize:W=!0,_getColumnSpanConfig:R,_getResponsiveModuleConfigForSecondItem:I,_dynamicHeights:F,useLoadingState:G,isLoadingAccessibilityLabel:P,isLoadedAccessibilityLabel:O}=e,L=(0,k.ZP)(),{isAuthenticated:N,isRTL:V}=(0,C.B)(),{logContextEvent:X}=(0,r.v)(),B=(0,M.F)(),D="desktop"===L,H=(0,j.MM)(),Z=((0,a.useRef)(g.map(()=>({fetchTimestamp:Date.now(),measureTimestamp:Date.now(),hasRendered:!1,pageCount:0}))),D&&!S),{experimentalColumnWidth:Q,experimentalGutter:T}=(0,d.Z)(Z),z=e.serverRender??!!D,q="flexible"===_||"uniformRowFlexible"===_||"desktop"!==L||Z,K=(q&&_?.startsWith("uniformRow")?"uniformRowFlexible":void 0)??(z?"serverRenderedFlexible":"flexible"),U=e.columnWidth??Q??w.yF;q&&(U=Math.floor(U));let J=e.gutterWidth??T??(D?w.oX:1),Y=e.minCols??w.yc,ee=((0,a.useRef)(0),U+J),et=function(e){if(null==e)return;let t=function(e){let t=s[e];return t&&t.screenWidth===window.innerWidth||(s[e]={screenWidth:window.innerWidth}),s[e]}(e);return t.measurementCache||(t.measurementCache=new u),t.measurementCache}(n),en=(0,a.useCallback)(()=>E?.current||window,[E]),ea=(0,a.useRef)(!0),{anyEnabled:ei}=F?B.checkExperiment("dynamic_heights_v2"):{anyEnabled:!1},{anyEnabled:er}=B.checkExperiment("web_masonry_enable_dynamic_heights_for_all"),{anyEnabled:eo}=B.checkExperiment("web_masonry_pin_overlap_calculation_and_logging"),{anyEnabled:el,group:es}=B.checkExperiment("web_masonry_multicolumn_position_algo_v2"),em=h&&ea.current?"centered":"",{className:eu,styles:ep}=function(e){let t=`m_${Object.keys(e).sort().reduce((t,n)=>{let a=e[n];return null==a||"object"==typeof a||"function"==typeof a?t:"boolean"==typeof a?t+(a?"t":"f"):t+a},"").replace(/\:/g,"\\:")}`,{flexible:n,gutterWidth:a,isRTL:i,itemWidth:r,maxColumns:o,minColumns:l,items:s,_getColumnSpanConfig:m,_getResponsiveModuleConfigForSecondItem:u}=e,d=m?s.map((e,t)=>({index:t,columnSpanConfig:m(e)??1})).filter(e=>1!==e.columnSpanConfig):[],c=r+a,h=Array.from({length:o+1-l},(e,t)=>t+l).map(e=>{let h,g;let y=e===l?0:e*c,f=e===o?null:(e+1)*c-.01;m&&u&&s.length>1&&(h=m(s[0]),g=u(s[1]));let{styles:_,numberOfVisibleItems:x}=d.reduce((i,o)=>{let{columnSpanConfig:l}=o,m=Math.min(function({columnCount:e,columnSpanConfig:t,firstItemColumnSpanConfig:n,isFlexibleWidthItem:a,secondItemResponsiveModuleConfig:i}){let r=e<=2?"sm":e<=4?"md":e<=6?"_lg1":e<=8?"lg":"xl",o=p(t,r);if(a){let t=p(n,r);o="number"==typeof i?i:i?Math.max(i.min,Math.min(i.max,e-t)):1}return o}({columnCount:e,columnSpanConfig:l,isFlexibleWidthItem:!!g&&o===s[1],firstItemColumnSpanConfig:h??1,secondItemResponsiveModuleConfig:g??1}),e),u=null!=o.index&&i.numberOfVisibleItems>=m+o.index,d=n?100/e*m:r*m+a*(m-1),{numberOfVisibleItems:c}=i;return u?c-=m-1:o.index<c&&(c+=1),{styles:i.styles.concat(function({className:e,index:t,columnSpanConfig:n,visible:a,width:i,flexible:r}){let o="number"==typeof n?n:btoa(JSON.stringify(n));return r?`
      .${e} .static[data-column-span="${o}"]:nth-child(${t+1}) {
        visibility: ${a?"visible":"hidden"} !important;
        position: ${a?"inherit":"absolute"} !important;
        width: ${i}% !important;
      }`:`
      .${e} .static[data-column-span="${o}"]:nth-child(${t+1}) {
        visibility: ${a?"visible":"hidden"} !important;
        position: ${a?"inherit":"absolute"} !important;
        width: ${i}px !important;
      }`}({className:t,index:o.index,columnSpanConfig:l,visible:u,width:d,flexible:n})),numberOfVisibleItems:c}},{styles:"",numberOfVisibleItems:e}),b=n?`
      .${t} .static {
        box-sizing: border-box;
        width: calc(100% / ${e}) !important;
      }
    `:`
      .${t} {
        max-width: ${e*c}px;
      }

      .${t} .static {
        width: ${r}px !important;
      }
    `;return{minWidth:y,maxWidth:f,styles:`
      .${t} .static:nth-child(-n+${x}) {
        position: static !important;
        visibility: visible !important;
        float: ${i?"right":"left"};
        display: block;
      }

      .${t} .static {
        padding: 0 ${a/2}px;
      }

      ${b}

      ${_}
    `}}),g=h.map(({minWidth:e,maxWidth:t,styles:n})=>`
    @container (min-width: ${e}px) ${t?`and (max-width: ${t}px)`:""} {
      ${n}
    }
  `),y=h.map(({minWidth:e,maxWidth:t,styles:n})=>`
    @media (min-width: ${e}px) ${t?`and (max-width: ${t}px)`:""} {
      ${n}
    }
  `),f=`
    ${g.join("")}
    @supports not (container-type: inline-size) {
      ${y.join("")}
    }
  `;return{className:t,styles:`
  .masonryContainer {
      container-type: inline-size;
    }

    .masonryContainer > .centered {
      margin-left: auto;
      margin-right: auto;
    }

    .${t} .static {
      position: absolute !important;
      visibility: hidden !important;
    }

    ${f}
  `}}({gutterWidth:J,flexible:q,items:g,isRTL:V,itemWidth:U,maxColumns:e.maxColumns??Math.max(g.length,w.g5),minColumns:Y,_getColumnSpanConfig:R,_getResponsiveModuleConfigForSecondItem:I}),ed=`${em} ${eu}`.trim(),{anyEnabled:ec,expName:eh,group:eg,isMeasureAllEnabled:ey}=(0,c.Z)(),ef=((0,a.useRef)(),(0,a.useRef)(g.length)),e_=(0,a.useRef)(0),ex=(0,a.useRef)(null);(0,a.useEffect)(()=>{ef.current=g.length,e_.current+=1},[g]),(0,a.useEffect)(()=>{ea.current&&(ea.current=!1)},[]),(0,a.useEffect)(()=>()=>{},[]);let eb=(0,a.useCallback)(e=>{let t=e.reduce((e,t)=>e+t),n=t/e.length;(0,$.S0)("webapp.masonry.multiColumnWhitespace.average",n,{sampleRate:1,tags:{experimentalMasonryGroup:eg||"unknown",multicolumnLayoutAlgoV2Group:es||"unknown",handlerId:H,isAuthenticated:N,multiColumnItemSpan:e.length}}),(0,$.S0)("webapp.masonry.twoColWhitespace",n,{sampleRate:1,tags:{columnWidth:U,minCols:Y}}),X({event_type:15878,component:14468,aux_data:{total_whitespace_px:t}}),X({event_type:16062,component:14468,aux_data:{average_whitespace_px:n}}),X({event_type:16063,component:14468,aux_data:{max_whitespace_px:Math.max(...e)}}),e.forEach(t=>{t>=50&&((0,$.nP)("webapp.masonry.multiColumnWhitespace.over50",{sampleRate:1,tags:{experimentalMasonryGroup:eg||"unknown",multicolumnLayoutAlgoV2Group:es||"unknown",handlerId:H,isAuthenticated:N,multiColumnItemSpan:e.length}}),X({event_type:16261,component:14468})),t>=100&&((0,$.nP)("webapp.masonry.multiColumnWhitespace.over100",{sampleRate:1,tags:{experimentalMasonryGroup:eg||"unknown",multicolumnLayoutAlgoV2Group:es||"unknown",handlerId:H,isAuthenticated:N,multiColumnItemSpan:e.length}}),X({event_type:16262,component:14468}))}),(0,$.nP)("webapp.masonry.multiColumnWhitespace.count",{sampleRate:1,tags:{experimentalMasonryGroup:eg||"unknown",multicolumnLayoutAlgoV2Group:es||"unknown",handlerId:H,isAuthenticated:N,multiColumnItemSpan:e.length}})},[U,X,Y,N,H,eg,es]),{_items:ev,_renderItem:ew}=function({initialLoadingStatePinCount:e=50,infiniteScrollPinCount:t=10,isFetching:n,items:i=[],renderItem:r,useLoadingState:o}){let l=i.filter(e=>"object"==typeof e&&null!==e&&"type"in e&&"closeup_module"===e.type).length>0,s=o&&n&&0===i.length,m=o&&n&&l&&1===i.length,u=o&&n&&i.length>(l?1:0),p=(0,a.useMemo)(()=>Array.from({length:u?t:e}).reduce((e,t,n)=>[...e,{height:n%2==0?356:236,key:`skeleton-pin-${n}`,isSkeleton:!0}],[]),[e,t,u]);return{_items:(0,a.useMemo)(()=>m||u?[...i,...p]:s?p:i,[s,u,m,i,p]),_renderItem:(0,a.useMemo)(()=>o?e=>{let{itemIdx:t,data:n}=e;return t>=i.length&&n&&"object"==typeof n&&"key"in n&&"height"in n?(0,f.jsx)(v,{data:n},n.key):r(e)}:r,[o,r,i.length])}}({useLoadingState:G,items:g,renderItem:(0,a.useCallback)(e=>(0,f.jsx)(o.Z,{name:"MasonryItem",children:A(e)}),[A]),isFetching:m}),eM=G&&m;return(0,a.useEffect)(()=>{eo&&requestAnimationFrame(()=>{let e=Array.from(ex.current?.querySelectorAll("[data-grid-item-idx]")??[]);if(0===e.length)return;let t=e.map(e=>{let t=e.getAttribute("data-grid-item-idx");return{rect:e.getBoundingClientRect(),itemIdx:t}}),n=0,a=0,i=0,r=0,o=0,l=0;for(let e=0;e<t.length;e+=1){let s=t[e]?.rect;for(let m=e+1;m<t.length;m+=1){let e=t[m]?.rect;if(s&&e&&s.right>=e.left&&s.left<=e.right&&s.bottom>=e.top&&s.top<=e.bottom&&s.height>0&&e.height>0){n+=1;let t=Math.max(0,Math.min(s.right,e.right)-Math.max(s.left,e.left))*Math.max(0,Math.min(s.bottom,e.bottom)-Math.max(s.top,e.top));t>8e4?l+=1:t>4e4?o+=1:t>1e4?r+=1:t>5e3?i+=1:t>2500&&(a+=1)}}}n>0&&(0,$.QX)("webapp.masonry.pinOverlapHits",n,{tags:{isAuthenticated:N,isDesktop:D,experimentalMasonryGroup:eg||"unknown"}}),a>0&&(0,$.QX)("webapp.masonry.pinOverlap.AreaPx.over2500",a,{tags:{isAuthenticated:N,isDesktop:D,experimentalMasonryGroup:eg||"unknown"}}),i>0&&(0,$.QX)("webapp.masonry.pinOverlap.AreaPx.over5000",i,{tags:{isAuthenticated:N,isDesktop:D,experimentalMasonryGroup:eg||"unknown"}}),r>0&&(0,$.QX)("webapp.masonry.pinOverlap.AreaPx.over10000",r,{tags:{isAuthenticated:N,isDesktop:D,experimentalMasonryGroup:eg||"unknown"}}),o>0&&(0,$.QX)("webapp.masonry.pinOverlap.AreaPx.over40000",o,{tags:{isAuthenticated:N,isDesktop:D,experimentalMasonryGroup:eg||"unknown"}}),l>0&&(0,$.QX)("webapp.masonry.pinOverlap.AreaPx.over80000",l,{tags:{isAuthenticated:N,isDesktop:D,experimentalMasonryGroup:eg||"unknown"}})})},[U,eg,N,D,eo,g]),(0,f.jsxs)(a.Fragment,{children:[G&&!ea.current&&(0,f.jsx)(i.xu,{"aria-live":"polite",display:"visuallyHidden",children:eM?P:O}),(0,f.jsx)("div",{ref:ex,"aria-busy":G?!!eM:void 0,className:"masonryContainer","data-test-id":"masonry-container",id:l,style:Z?{padding:`0 ${J/2}px`}:void 0,children:(0,f.jsxs)("div",{className:ed,children:[z&&ea.current?(0,f.jsx)(y.Z,{"data-test-id":"masonry-ssr-styles",unsafeCSS:ep}):null,(0,f.jsx)(i.xu,{"data-test-id":"max-width-container",marginBottom:0,marginEnd:"auto",marginStart:"auto",marginTop:0,maxWidth:e.maxColumns?ee*e.maxColumns:void 0,children:ec?(0,f.jsx)(i.GX,{ref:e=>{b&&(b.current=e)},_dynamicHeights:er||F,_dynamicHeightsV2Experiment:ei,_getColumnSpanConfig:R,_getResponsiveModuleConfigForSecondItem:I,_logTwoColWhitespace:eb,_measureAll:ey,_multiColPositionAlgoV2:el,align:t,columnWidth:U,gutterWidth:J,items:ev,layout:q?K:_??"basic",loadItems:x,measurementStore:et,minCols:Y,renderItem:ew,scrollContainer:en,virtualBufferFactor:.3,virtualize:W}):(0,f.jsx)(i.Rk,{ref:e=>{b&&(b.current=e)},_dynamicHeights:er||F,_dynamicHeightsV2Experiment:ei,_getColumnSpanConfig:R,_getResponsiveModuleConfigForSecondItem:I,_logTwoColWhitespace:eb,_multiColPositionAlgoV2:el,align:t,columnWidth:U,gutterWidth:J,items:ev,layout:q?K:_??"basic",loadItems:x,measurementStore:et,minCols:Y,renderItem:ew,scrollContainer:en,virtualBufferFactor:.3,virtualize:W})})]})})]})}},587435:(e,t,n)=>{n.d(t,{Z:()=>a});function a(e=!0){let t=e?16:void 0,n=t?Math.floor(t/4):void 0;return{experimentalColumnWidth:e?221:void 0,experimentalGutter:t,experimentalGutterBoints:n}}},39260:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(297728),i=n(730212),r=n(855746);function o(e){let{isAuthenticated:t}=(0,i.B)(),{expName:n,anyEnabled:o,group:l}=function({experimentsClient:e,handlerId:t,isAuthenticated:n,skipActivation:a}){let{checkExperiment:i}=e,r=i(n?"web_masonry_v2_auth":"web_masonry_v2_unauth",{dangerouslySkipActivation:a});return r.group?{expName:n?"web_masonry_v2_auth":"web_masonry_v2_unauth",...r}:"www/[username]/[slug].js"!==t||n?"www/pin/[id].js"!==t||n?{expName:"",anyEnabled:!1,group:""}:{expName:"web_masonry_v2_unauth_pin",...i("web_masonry_v2_unauth_pin",{dangerouslySkipActivation:a})}:{expName:"web_masonry_v2_unauth_board",...i("web_masonry_v2_unauth_board",{dangerouslySkipActivation:a})}}({experimentsClient:(0,a.F)(),handlerId:(0,r.MM)(),isAuthenticated:t,skipActivation:e?.skipActivation??!1});return{expName:n,anyEnabled:o,group:l,isMeasureAllEnabled:"enabled_measure_all"===l||"enabled_measure_all_impression_fix"===l,isImpressionFixEnabled:"control_impression_fix"===l||"enabled_impression_fix"===l||"enabled_measure_all_impression_fix"===l}}}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/168-2efe757f8b4228cd.mjs.map