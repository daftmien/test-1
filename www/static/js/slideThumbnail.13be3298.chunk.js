"use strict";(self.webpackChunk_genially_view_client=self.webpackChunk_genially_view_client||[]).push([[171],{89805:(e,t,n)=>{n.r(t),n.d(t,{SlideThumbnail:()=>Qe,default:()=>Oe});var r=n(18659),o=n(96421),a=n(10688);let i={getInteractivityActionsSnapshot:()=>{throw new Error("interactivity actions snapshot cannot be resolved with the default document model env")},resolveTaskRef:e=>{const t=(0,a.AE)(e);if(!t)return e;throw new Error("task ref '".concat(t,"' cannot be resolved with the default document model env"))}};function s(){return i}var c=n(40518),l=n(56900),d=n(83083),u=n(3119);const m={position:"absolute",left:0,right:0,top:0,bottom:0,contain:"strict"},h=(0,o.Pi)((e=>{var t,n,o,a;let{backgroundImage:i,backgroundImageOpacity:s,backgroundImageSize:c,backgroundImagePosition:l,backgroundColor:d,onClick:u}=e;const h=u;return r.createElement(r.Fragment,null,r.createElement("div",{onClick:h,style:{...m,backgroundColor:d},role:"button",tabIndex:h?0:void 0,"aria-label":h?"slide background":void 0}),i&&r.createElement("div",{style:{...m,opacity:s,backgroundRepeat:"no-repeat",backgroundPositionX:null!==(t=null===l||void 0===l?void 0:l.PositionLeft)&&void 0!==t?t:0,backgroundPositionY:null!==(n=null===l||void 0===l?void 0:l.PositionTop)&&void 0!==n?n:0,backgroundSize:"".concat(null!==(o=null===c||void 0===c?void 0:c.Width)&&void 0!==o?o:0," ").concat(null!==(a=null===c||void 0===c?void 0:c.Height)&&void 0!==a?a:0),backgroundImage:"url('".concat(encodeURI(i),"')"),pointerEvents:"none"}}))})),p=(0,r.createContext)(void 0);function v(){const e=(0,r.useContext)(p);if(!e)throw new Error("FakeItems context missing");return e}const g="CHART_DATA_TABLE",f=e=>{if("data"in e&&e.data){const{renderZIndex:t}=e;if(void 0!==t&&null!==t)return Number(t);const{ZIndex:n}=e.data;if(void 0!==n&&null!==n)return Number(n)}if("ZIndex"in e){const{ZIndex:t}=e;if(void 0!==t&&null!==t)return Number(t)}};var w=n(8708);const I=["onClick","onMouseOver","onMouseOut","onMouseEnter","onMouseLeave"];function y(e,t,n,o,a){return(0,r.useMemo)((()=>{const r={};return I.forEach((i=>{const s=null===e||void 0===e?void 0:e[i];r[i]=s?e=>{"onClick"===i&&e.stopPropagation(),e.preventDefault(),s(t,n,o,a)}:void 0})),r}),[e,t,n,o,a])}var b=n(66833);function C(e){let{item:t,parentContainerBoxItem:n,positioned:r}=e;const o=(0,w.Y)(t),a=n?(0,w.Y)(n):void 0,i=(0,b.R)({item:o,parentContainerBoxItem:a,positioned:r});return i.zIndex=f(t),i}var k=n(50968);const x=k.ZP.div((e=>{let{theme:{color:t}}=e;return{position:"absolute",margin:0,backgroundColor:t.background.accent.default(.15),"& img":{border:"1px solid ".concat(t.border.accent.default()),width:"100%",height:"100%",userSelect:"none"}}})),P=(0,o.Pi)((0,r.forwardRef)(((e,t)=>{let{item:n,parentGroupItem:o,directParentContainerBoxItem:a,indirectParentContainerBoxItem:i,events:s}=e;const c=y(s,n,o,a,i);return r.createElement(x,{"data-cy":"fakeItem-".concat(n.type,"-").concat(n.Id),ref:t,style:{width:"100%",height:"100%",contain:"strict",...C({item:n,parentContainerBoxItem:a})},...c})})));var A=n(23959),B=n(80999),S=n(47854);var E=n(56476),T=n(47170),z=n(21814),R=n(82477);const q=(0,o.Pi)((0,r.forwardRef)(((e,t)=>{var n;let{item:o,parentGroupItem:a,directParentContainerBoxItem:i,indirectParentContainerBoxItem:s,rotate:c,events:l}=e;const{delta:d,slide:u,documentConfig:m}=v(),h=y(l,o,a,i,s),p=(0,w.Y)(o),{color:g,curveTos:I,dash:C,headType:k,lineCap:x,Opacity:P,source:q,tailType:L,target:F,thickness:M}=p,{sourceRect:D,targetRect:G}=(0,z.n)(q,F,"logical")(u.items),Z=null!==(n=p.dataPositionAndSizeWithoutCurveTos)&&void 0!==n?n:(0,E.U)(q,F,"logical")(u.items),_=(0,T.Av)(I,Z),W=e=>e?(0,b.c)((0,w.Y)(e)):void 0,N=function(e){var t,n;let{parentSlideSize:r,parentContainerBoxLayout:o,parentGroupLayout:a}=e;const i={x:0,y:0,width:null===(t=null!==a&&void 0!==a?a:r)||void 0===t?void 0:t.width,height:null===(n=null!==a&&void 0!==a?a:r)||void 0===n?void 0:n.height,rotate:0};return o?(0,S.Y)({layout:i,parentLayout:o}):i}({parentGroupLayout:W(a),parentContainerBoxLayout:W(i),parentSlideSize:u.size}),Y={display:p.IsHidden?"none":void 0,zIndex:f(o),...(0,A.z)(N)},{sourceItemSide:H,targetItemSide:Q}=(0,R.E)({source:q,sourceRect:D,target:F,targetRect:G});return r.createElement(B.E,{"data-cy":"fakeItem-".concat(o.type,"-").concat(o.Id),color:g,curveTos:_,dash:C,delta:d,documentConfigColors:null===m||void 0===m?void 0:m.colors,eventHandlers:h,headType:k,itemStyle:Y,lineCap:x,opacity:P,ref:t,rotate:c,sourceItemSide:H,sourceRect:D,tailType:L,targetItemSide:Q,targetRect:G,thickness:M,viewBox:N,arrowBetweenItemSidesProps:{selectable:!!t}})})));var L=n(14091);const F=r.lazy((()=>Promise.all([n.e(788),n.e(482)]).then(n.bind(n,18995)))),M=e=>r.createElement(r.Suspense,{fallback:null},r.createElement(F,{...e})),D=r.lazy((()=>n.e(323).then(n.bind(n,31629)))),G=e=>r.createElement(r.Suspense,{fallback:null},r.createElement(D,{...e})),Z=(0,o.Pi)((0,r.forwardRef)(((e,t)=>{let{item:n,parentGroupItem:o,directParentContainerBoxItem:a,indirectParentContainerBoxItem:i,events:s}=e;const{documentConfig:c}=v(),l=y(s,n,o,a,i),{Data:d,Id:u,Options:m,Size:h,Type:p,RawData:f,tableRawData:w,Version:I}="data"in n?n.data:n,b=p,k=b===g,x=I>=1,P=I>=2?L.X.LabelsFontSize:void 0,A=I<2,B=I>=3?m.TextColor:void 0,S={pointerEvents:"none"};return r.createElement("div",{"data-cy":"fakeItem-".concat(n.type,"-").concat(n.Id),ref:t,style:{contain:"strict",...C({item:n,parentContainerBoxItem:a})},role:"button",tabIndex:void 0===l.onClick?0:void 0,...l},k?r.createElement(G,{cellStyles:m.CellStyles,data:w||f,id:u,tableStyles:m.TableStyles,normalWordBreak:x,style:S}):r.createElement(M,{colors:[...m.Colors],data:d,enableAnimation:!1,height:h.Height,id:u,invertYAxis:m.InvertYAxis,prefix:m.Prefix,showAxisLabels:m.AxisLabels,showLegend:m.Legend,showTooltip:m.Tooltip,suffix:m.Suffix,textColor:m.TextColor,type:b,width:h.Width,documentConfig:c,lineVariant:m.LineVariant,showLineMarkers:m.ShowMarkers,labelsFontSize:P,showTitles:A,colorAllTexts:B,style:S}))}))),_=k.ZP.div({overflow:"hidden"});const W=(0,o.Pi)((e=>{let{children:t,itemData:n,parentGroupItemData:o,directParentContainerBoxItemData:a,indirectParentContainerBoxItemData:i,positioned:s,sized:c,style:l,rotated:d,className:u,rootRef:m,events:h}=e;const p=y(h,n,o,a,i);return r.createElement(_,{ref:m,className:u,style:{contain:"layout style",...(0,b.R)({item:n,parentContainerBoxItem:a,positioned:s,sized:c,rotated:d}),...n.background?(g=n.background,{backgroundColor:g.color,filter:g.shadow?"drop-shadow(".concat(g.shadow,")"):void 0}):{},...n.border?(v=n.border,{borderRadius:v.radius,borderWidth:v.width,borderColor:v.color,borderStyle:"solid"}):{},...l},...p},t);var v,g})),N=(0,o.Pi)((0,r.forwardRef)(((e,t)=>{let{children:n,itemData:o,positioned:a,sized:i,style:s,rotated:c,events:l}=e;return r.createElement(W,{rootRef:t,"data-cy":"item-".concat(d.q.ContainerBox,"-").concat(o.Id),itemData:o,parentGroupItemData:void 0,directParentContainerBoxItemData:void 0,indirectParentContainerBoxItemData:void 0,positioned:a,rotated:c,sized:i,style:s,events:l},n)})));const Y=(0,o.Pi)((0,r.forwardRef)(((e,t)=>{var n;let{item:o,events:a}=e;const{slide:i}=v(),s=null!==(n=i.containedItems.get(o.Id))&&void 0!==n?n:[],c={...(0,w.Y)(o),zIndex:f(o),type:o.type},l=function(e,t){const n=(0,r.useMemo)((()=>{const n={};return I.forEach((r=>{const o=null===e||void 0===e?void 0:e[r];n[r]=o?function(e){for(var n=arguments.length,r=new Array(n>1?n-1:0),a=1;a<n;a++)r[a-1]=arguments[a];o(t,...r)}:void 0})),n}),[e,t]);return n}(a,o);return r.createElement(N,{ref:t,itemData:c,positioned:!0,sized:!0,rotated:!0,events:l},s.map((e=>r.createElement(We,{key:e.Id,itemType:e.type,item:e,parentGroupItem:void 0,directParentContainerBoxItem:o,indirectParentContainerBoxItem:o,events:a}))))}))),H=k.ZP.div((e=>{let{theme:{size:t}}=e;return{"&.blocked:hover":{"&::before":{content:"",top:t.units(-1/8),left:t.units(-1/8),width:"calc(100% + ".concat(t.units(1/4),")"),height:"calc(100% + ".concat(t.units(1/4),")"),border:"$dashed-border-selected",position:"absolute"}}}})),Q=(0,o.Pi)((0,r.forwardRef)(((e,t)=>{let{item:n,parentGroupItem:o,directParentContainerBoxItem:a,indirectParentContainerBoxItem:i,events:s}=e;const c=y(s,n,o,a,i);return r.createElement(H,{"data-cy":"fakeItem-".concat(n.type,"-").concat(n.Id),ref:t,style:{contain:"layout style",...C({item:n,parentContainerBoxItem:a})},...c},n.groupedItems.map((e=>r.createElement(We,{key:e.Id,itemType:e.type,item:e,parentGroupItem:n,directParentContainerBoxItem:void 0,indirectParentContainerBoxItem:i,events:s}))))}))),O="v=cross_origin",V=new Date,j="v=".concat(V.getDay().toString()+V.getMonth().toString()+V.getFullYear().toString()),$=(e,t)=>{if(!e||!t)throw new Error("This function needs two params");try{let n=e;if(n.includes(t)){const r=e.split(t)[0];n=r.substring(0,r.length-1)}return n}catch(n){return e}};var U=n(75582),X=n(57423);var J=n(92339),K=n(69553);const ee=e=>{let{className:t,color:n,height:o,size:a,style:i,width:s,...c}=e;return r.createElement(K.Z,{className:t,color:n,height:o,size:a,style:i,viewBox:"0 0 16 16",width:s,...c},r.createElement("g",null,r.createElement("path",{d:"M14,13H2V11L3.59,9.41a2,2,0,0,1,2.82,0L7,10,9.59,7.41a2,2,0,0,1,2.82,0L14,9ZM5.5,4A1.5,1.5,0,1,1,4,5.5,1.5,1.5,0,0,1,5.5,4ZM14,1H2A2,2,0,0,0,0,3V13a2,2,0,0,0,2,2H14a2,2,0,0,0,2-2V3a2,2,0,0,0-2-2Z"})))},te=k.ZP.div((e=>{let{theme:{color:t,size:n,shadow:r}}=e;return{background:t.background.reversed.default(.4),width:"100%",height:"100%",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",color:t.content.reversed.default(),borderRadius:n.units(.33),padding:n.units(.5),boxShadow:r.short}})),ne=(0,k.ZP)(ee)((()=>({width:"50%",height:"50%"}))),re=k.ZP.p((e=>{let{theme:{size:t},$showTitle:n}=e;return{display:n?"block":"none",fontSize:t.units(3)}})),oe=(0,o.Pi)((0,r.forwardRef)(((e,t)=>{var n;let{item:o,parentGroupItem:a,directParentContainerBoxItem:i,indirectParentContainerBoxItem:c,events:l}=e;const d=y(l,o,a,i,c),u=(0,w.Y)(o),{resolveTaskRef:m}=s(),h=function(e){if(!e)return e;if(!e.startsWith("http://")&&!e.startsWith("https://"))return e;let t=e;return e.includes(O)&&(t=$(t,j)),e.includes(j)&&(t=$(t,O)),t}(m(u.Source)),p=null!==(n=m(u.Offset))&&void 0!==n?n:U.w,[v,g]=(0,r.useState)(null),[f,I]=(0,r.useState)(!1),[b,k]=(0,r.useState)(null),x=(0,r.useRef)(!1),P=(0,r.useRef)(/\.(gif)|data:image\/gif/.test(h)),A=(0,r.useCallback)((()=>{try{!function(e,t,n){const r=new Image;let o=n;n||(o={mimeType:"image/png"}),r.onload=()=>{try{var e;const n=document.createElement("canvas");n.width=r.width,n.height=r.height;const a=n.getContext("2d");a&&a.drawImage(r,0,0);const i=n.toDataURL(null===(e=o)||void 0===e?void 0:e.mimeType);t(null,i)}catch(n){t(!0,null)}},r.onerror=()=>{t(!0,null)},r.setAttribute("crossOrigin","anonymous"),r.src=(0,X.F)(e,{v:"anonymous"})}(h,((e,t)=>{x.current&&(e?I(!0):(g(t),k(h)))}))}catch(e){console.warn(e),I(!0)}}),[h]);if((0,r.useEffect)((()=>(x.current=!0,()=>{x.current=!1})),[]),(0,r.useEffect)((()=>{P.current&&A()}),[A]),(0,r.useEffect)((()=>{P.current?!P.current||v&&b===h||A():(g(null),I(!1),k(null))}),[h,v,b,A]),P.current&&!v&&!f)return null;const B=parseFloat(u.Size.Height)<200;return r.createElement("div",{"data-cy":"fakeItem-".concat(o.type,"-").concat(u.Id),ref:t,style:{contain:"strict",overflow:"hidden",...C({item:o,parentContainerBoxItem:i})},className:u.Frame,role:"button",tabIndex:void 0===d.onClick?0:void 0,...d},f?r.createElement(te,null,r.createElement(ne,null),r.createElement(re,{$showTitle:!B},"GIF")):r.createElement("div",{style:{position:"absolute",top:"".concat(p.top,"%"),left:"".concat(p.left,"%"),right:"".concat(p.right,"%"),bottom:"".concat(p.bottom,"%")}},r.createElement("img",{style:{position:"relative",width:"100%",height:"100%",display:"block",maxWidth:"100%",transform:(0,J.s)(u.Transformations),objectFit:u.objectFit},src:v||h,alt:u.Name})))})));var ae=n(79057),ie=n(49613);const se=e=>{let{item:t,disabled:n,feedbackText:o,questionSubtitleText:a,showAnswersIcon:i,feedbackColor:s,documentColors:c,t:l,hasDefaultAnimation:d=!1,answerSelectedPreview:u=!1,selectedAnswerIds:m,showCorrectAnswers:h=!1,timerMessage:p}=e;const{Question:v,Answers:g,Appearance:f,Id:w}=t,I=g.filter((e=>{let{Image:t}=e;return t.length>0}));return r.createElement(ie.h,{type:ae.w.Image,itemId:w,question:v||l("__new.editor.activityConfiguration.questionPlaceholder"),disabled:n,showAnswersIcon:i,hasDefaultAnimation:d,documentColors:c,feedbackText:o,feedbackColor:s,questionSubtitleText:a,appearance:f,answers:I,answerSelectedPreview:u,selectedAnswerIds:m,showCorrectAnswers:h,timerMessage:p,dataCy:"imageInteractiveQuestionItem"})};se.Container=ie.h.Container,se.Question=ie.h.Question,se.Subtitle=ie.h.Subtitle,se.Answers=ie.h.Answers,se.Answer=ie.h.Answer,se.Feedback=ie.h.Feedback,se.Button=ie.h.Button;const ce=(0,o.Pi)(se);var le=n(68670);const de=e=>{let{item:t,disabled:n,feedbackText:o,questionSubtitleText:a,showAnswersIcon:i,feedbackColor:s,documentColors:c,t:l,hasDefaultAnimation:d=!1,answerSelectedPreview:u=!1,selectedAnswerIds:m,showCorrectAnswers:h=!1,timerMessage:p}=e;const{Question:v,Answers:g,Appearance:f,Id:w}=t,I=g.filter((e=>{let{Text:t}=e;return t.length>0})),y=l("__new.editor.content.questionMultiple");return r.createElement(ie.h,{type:ae.w.Quiz,itemId:w,question:v||y,disabled:n,showAnswersIcon:i,hasDefaultAnimation:d,documentColors:c,feedbackText:o,feedbackColor:s,questionSubtitleText:a,appearance:f,answers:I,answerSelectedPreview:u,selectedAnswerIds:m,showCorrectAnswers:h,timerMessage:p,dataCy:"quizInteractiveQuestionItem"})};de.Container=ie.h.Container,de.Question=ie.h.Question,de.Subtitle=ie.h.Subtitle,de.Answers=ie.h.Answers,de.Answer=ie.h.Answer,de.Feedback=ie.h.Feedback,de.Button=ie.h.Button;const ue=(0,o.Pi)(de);var me=n(61789);const he=e=>{let{item:t,disabled:n,feedbackText:o,questionSubtitleText:a,showAnswersIcon:i,feedbackColor:s,documentColors:c,t:l,hasDefaultAnimation:d=!1,answerSelectedPreview:u=!1,selectedAnswerIds:m,showCorrectAnswers:h=!1,showResultPreview:p=!1,timerMessage:v}=e;const{Question:g,Answers:f,Appearance:w,Id:I}=t,y=f.filter((e=>{let{Text:t}=e;return t.length>0})),b=l("__new.editor.content.questionMultiple");return r.createElement(ie.h,{type:ae.w.Survey,itemId:I,question:g||b,disabled:n,showAnswersIcon:i,hasDefaultAnimation:d,documentColors:c,feedbackText:o,feedbackColor:s,questionSubtitleText:a,appearance:w,answers:y,answerSelectedPreview:u,selectedAnswerIds:m,showCorrectAnswers:h,showResultPreview:p,showResultEnabled:t.Options.ShowResults,timerMessage:v,dataCy:"surveyInteractiveQuestionItem"})};he.Container=ie.h.Container,he.Question=ie.h.Question,he.Subtitle=ie.h.Subtitle,he.Answers=ie.h.Answers,he.Answer=ie.h.Answer,he.Feedback=ie.h.Feedback,he.Button=ie.h.Button;const pe=(0,o.Pi)(he),ve=e=>{let{item:t,disabled:n,feedbackText:o,showAnswersIcon:a,feedbackColor:i,documentColors:s,t:c,hasDefaultAnimation:l=!1,answerSelectedPreview:d=!1,selectedAnswerIds:u,showCorrectAnswers:m=!1,timerMessage:h}=e;const{Question:p,Answers:v,Appearance:g,Id:f}=t;return r.createElement(ie.h,{type:ae.w.TrueFalse,itemId:f,question:p||c("__new.editor.content.placeholderQuestionTrueFalse"),disabled:n,showAnswersIcon:a,hasDefaultAnimation:l,documentColors:s,feedbackText:o,feedbackColor:i,appearance:g,answers:v,answerSelectedPreview:d,selectedAnswerIds:u,showCorrectAnswers:m,timerMessage:h,dataCy:"trueFalseInteractiveQuestionItem"})};ve.Container=ie.h.Container,ve.Question=ie.h.Question,ve.Answers=ie.h.Answers,ve.Answer=ie.h.Answer,ve.Feedback=ie.h.Feedback,ve.Button=ie.h.Button;const ge=(0,o.Pi)(ve),fe=(0,o.Pi)((0,r.forwardRef)(((e,t)=>{let{item:n,parentGroupItem:o,directParentContainerBoxItem:a,indirectParentContainerBoxItem:i,selectedAnswerIds:s,showCorrectAnswers:c=!1,events:l}=e;const{t:d,documentConfig:u}=v(),m=y(l,n,o,a,i),h=(0,w.Y)(n),{Frame:p,Type:g}=h;return r.createElement("div",{"data-cy":"fakeItem-".concat(n.type,"-").concat(n.Id),ref:t,style:{contain:"strict",overflow:"hidden",...C({item:n,parentContainerBoxItem:a})},className:p,role:"button",tabIndex:void 0===m.onClick?0:void 0,...m},(()=>{switch(g){case ae.w.Quiz:return r.createElement(ue,{key:n.Id,item:h,t:d,selectedAnswerIds:s,showCorrectAnswers:c,disabled:c,documentColors:null===u||void 0===u?void 0:u.colors});case ae.w.OpenAnswer:return r.createElement(le.g,{key:n.Id,item:h,t:d,userAnswer:null!==s&&void 0!==s&&s.length?s[0]:void 0,disabled:c,documentColors:null===u||void 0===u?void 0:u.colors});case ae.w.TrueFalse:return r.createElement(ge,{key:n.Id,item:h,t:d,selectedAnswerIds:s,showCorrectAnswers:c,disabled:c,documentColors:null===u||void 0===u?void 0:u.colors});case ae.w.Image:return r.createElement(ce,{key:n.Id,item:h,t:d,selectedAnswerIds:s,showCorrectAnswers:c,disabled:c,documentColors:null===u||void 0===u?void 0:u.colors});case ae.w.Sort:return r.createElement(me.X,{key:n.Id,item:h,t:d,showCorrectAnswers:c,disabled:c,documentColors:null===u||void 0===u?void 0:u.colors});case ae.w.Survey:return r.createElement(pe,{key:n.Id,item:h,t:d,selectedAnswerIds:s});default:throw new Error("InteractiveQuestion type ".concat(g," does not have any component associated"))}})())}))),we=(0,o.Pi)((0,r.forwardRef)(((e,t)=>{let{item:n,parentGroupItem:o,directParentContainerBoxItem:a,indirectParentContainerBoxItem:i,events:s}=e;const c=y(s,n,o,a,i),l=(0,w.Y)(n);return r.createElement("div",{"data-cy":"fakeItem-".concat(n.type,"-").concat(n.Id),ref:t,style:{contain:"strict",...C({item:n,parentContainerBoxItem:a}),zIndex:99999,maxWidth:"100%",width:"100%",height:"100%"},role:"button",tabIndex:void 0===c.onClick?0:void 0,...c},r.createElement("img",{style:{width:32,height:32},src:l.Source,alt:l.Name}))})));var Ie=n(67125);const ye=k.ZP.div((e=>{let{theme:{color:t,size:n}}=e;return{background:t.background.reversed.default(.4),width:"100%",height:"100%",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",color:t.content.reversed.default(),borderRadius:n.units(2/3),padding:n.units(1),paddingLeft:void 0,boxShadow:"0 1px ".concat(n.units(1)," 0 ").concat(t.shadow.primary.default(.2)),"& svg":{width:n.units(5.5)}}})),be=k.ZP.div.attrs((e=>{let{$thumbnail:t}=e;return{style:{background:"center / contain url(".concat(t,") no-repeat")}}}))((()=>({width:"100%",height:"100%",display:"flex",justifyContent:"center",alignItems:"center"}))),Ce=(0,o.Pi)((0,r.forwardRef)(((e,t)=>{let{item:n,parentGroupItem:o,directParentContainerBoxItem:a,indirectParentContainerBoxItem:i,events:s}=e;const c=y(s,n,o,a,i),l=(0,w.Y)(n),{thumbnail:d}=l,u=parseInt(l.Size.Height,10)<50?"80%":"100%";return r.createElement("div",{"data-cy":"fakeItem-".concat(n.type,"-").concat(n.Id),ref:t,style:{contain:"strict",...C({item:n,parentContainerBoxItem:a})},role:"button",tabIndex:void 0===c.onClick?0:void 0,...c},d?r.createElement(be,{$thumbnail:d}):r.createElement(ye,null,r.createElement(Ie.Z,{height:u})))}))),ke=k.ZP.div({position:"absolute",display:"inherit",fontSize:"99%","& svg":{display:"inherit",fontSize:"99%",pointerEvents:"none",animation:"none",filter:"none"},"& svg > *":{animation:"none",filter:"none"},"& svg text":{userSelect:"none",cursor:"default",fontSize:"99%"}}),xe=/^((?!chrome|android).)*safari/i.test(window.navigator.userAgent),Pe=(0,o.Pi)((0,r.forwardRef)(((e,t)=>{var n;let{item:o,parentGroupItem:a,directParentContainerBoxItem:i,indirectParentContainerBoxItem:c,events:l}=e;const d=y(l,o,a,i,c),u=(0,r.useRef)(null),m=(0,w.Y)(o),{resolveTaskRef:h}=s(),p=null===(n=m.Colors)||void 0===n?void 0:n[0],v=h(m.SourceSvg);(0,r.useLayoutEffect)((()=>{const e=u.current;e&&(e.querySelectorAll(".color1").forEach((e=>{e.style.fill=p})),xe&&e.querySelectorAll("linearGradient").forEach((e=>{const t=e.id;e.setAttribute("id","rerender"),e.setAttribute("id",t)})))}),[v,p]);const g=(0,r.useCallback)((e=>{u.current=e,t&&("function"===typeof t?t(e):"object"===typeof t&&(t.current=e))}),[t]);return r.createElement(ke,{"data-cy":"fakeItem-".concat(o.type,"-").concat(o.Id),className:"svg-item svg-item-fake",dangerouslySetInnerHTML:{__html:v},ref:g,style:{contain:"size layout style",...C({item:o,parentContainerBoxItem:i})},...d})})));var Ae=Array.isArray;function Be(e){var t,n,r=typeof e,o="";if("string"===r||"number"===r)return e||"";if(Ae(e)&&e.length>0)for(t=0,n=e.length;t<n;t++)""!==(r=Be(e[t]))&&(o+=(o&&" ")+r);else for(t in e)e.hasOwnProperty(t)&&e[t]&&(o+=(o&&" ")+t);return o}var Se=n(40395),Ee=n(57542),Te=n(8922);const ze=k.ZP.div({"-webkit-line-break":"after-white-space","-webkit-nbsp-mode":"normal",lineBreak:"normal",display:"block",outline:"none","&.text-bold":{fontWeight:"bold"},"&.text-italic":{fontStyle:"italic"},"&.text-align-left":{textAlign:"left"},"&.text-align-right":{textAlign:"right"},"&.text-align-justify":{textAlign:"justify"},"&.text-align-center":{textAlign:"center"},"&.uppercase":{textTransform:"uppercase"},"& sub":{verticalAlign:"sub",fontSize:"60%"},"& sup":{verticalAlign:"super",fontSize:"60%"},"&.genially-view-text-indent-list-v4":{"ul, ol":{paddingLeft:"1.8em",listStylePosition:"outside"}},"& *":{pointerEvents:"none"},"& ul":{listStyleType:"disc",ul:{listStyleType:"circle",ul:{listStyleType:"square"}}},"& ol":{listStyleType:"decimal",ol:{listStyleType:"lower-latin",ol:{listStyleType:"lower-roman"}}}},(e=>{let{theme:{color:t,size:n}}=e;return{"&.text-effect-shadow":{textShadow:"2px 2px 6px ".concat(t.shadow.primary.default(.5))},"&.interparagraph_medium":{...Te.oB.mixins.setInterparagraph(n.units(1))},"&.interparagraph_big":{...Te.oB.mixins.setInterparagraph(n.units(2.25))},"& p":{margin:"0 0 ".concat(n.units(1.25))},"& ul, & ol":{lineBreak:"normal",display:"block",marginTop:0,marginBottom:0,paddingLeft:n.units(3.125),listStylePosition:"inside"},"&.genially-view-text-indent-list-v3":{"ul, ol":{paddingLeft:n.units(6.25),listStylePosition:"outside"}},"&.genially-view-text-indent-paragraph-v5 blockquote":{margin:"0 0 0 ".concat(n.units(5)),border:"none",padding:0}}})),Re=(0,o.Pi)((0,r.forwardRef)(((e,t)=>{let{item:n,parentGroupItem:o,directParentContainerBoxItem:a,indirectParentContainerBoxItem:i,events:s}=e;const{canBeTranslated:c}=v(),l=y(s,n,o,a,i),d=(0,w.Y)(n),u=(0,Ee.j)(d),m=d.Version>=6;return r.createElement(ze,{"data-cy":"fakeItem-".concat(n.type,"-").concat(n.Id),ref:t,className:Be([u,{notranslate:!c}]),style:{contain:"size layout style",...C({item:n,parentContainerBoxItem:a}),backgroundColor:d.Background,color:d.Color,fontSize:d.FontSize,fontFamily:(0,Se.k)(d.FontFamily,m),padding:d.Padding,lineHeight:d.LineHeight,letterSpacing:"".concat(d.LetterSpacing,"px"),wordWrap:d.Version<2?"initial":"break-word"},dangerouslySetInnerHTML:{__html:d.TextMessage},...l})})));var qe=n(27971),Le=n(85960);const Fe=(0,k.ZP)(Te.h2)((e=>{let{theme:{color:t}}=e;return{color:t.content.secondary.default()}})),Me=(0,k.Zz)((e=>{let{theme:{color:t},width:n,name:o}=e;const a=(0,qe.v4)(),[i,s]=(0,r.useState)(null),[c,l]=(0,r.useState)(null),d=(0,r.useCallback)((()=>{const e=[];for(let t=0;t<41;t+=1)e.push(128);if(i&&c){c.clearRect(0,0,i.width,i.height),c.fillStyle=t.content.secondary.default();for(let t=0;t<41;t+=1){var n;const r=8*t,o=4,a=-((null!==(n=e[t])&&void 0!==n?n:0)/2||5);c.fillRect(r,i.height,o,a)}}}),[i,c,t.content.secondary]);return(0,r.useEffect)((()=>{const e=document.querySelector("#canva-element-fake".concat(a));e&&(s(e),l(e.getContext("2d")),d())}),[a,d]),r.createElement("div",{className:"widget-audio-player"},r.createElement("div",{className:"widget-audio-player-play-container"},r.createElement(Le.Z,null)),r.createElement("div",{className:"widget-audio-player-info-container"},r.createElement("div",{className:"widget-audio-player-bars-group",id:"widget-audio-player-bars-group"},r.createElement("canvas",{id:"canva-element-fake".concat(a),style:{width:"100%",height:"42%"}})),r.createElement("div",{className:"widget-audio-player-file-progress-bar"}),r.createElement("div",{className:"widget-audio-player-file-name-container"},r.createElement(Fe,{className:"widget-audio-player-file-name",style:{fontSize:parseFloat(n)/22}},o))))})),De=(0,o.Pi)((0,r.forwardRef)(((e,t)=>{let{item:n,parentGroupItem:o,directParentContainerBoxItem:a,indirectParentContainerBoxItem:i,events:s}=e;const{t:c}=v(),l=y(s,n,o,a,i),d=(0,w.Y)(n),{Name:u,Size:m}=d;return r.createElement("div",{"data-cy":"fakeItem-".concat(n.type,"-").concat(n.Id),ref:t,style:{contain:"strict",...C({item:n,parentContainerBoxItem:a})},role:"button",tabIndex:void 0===l.onClick?0:void 0,...l},r.createElement(Me,{name:u||c("__new.shared.items.type.widget-audio"),width:m.Width}))}))),Ge=k.ZP.div((e=>{let{theme:{color:t}}=e;return{background:t.background.reversed.default(.8),color:t.content.reversed.default(),"& svg":{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)"}}})),Ze=k.ZP.div.attrs((e=>{let{$thumbnail:t}=e;return{style:{background:"center / contain url(".concat(t,") no-repeat, #000000")}}}))((e=>{let{theme:{color:t,shadow:n}}=e;return{color:t.content.reversed.default(),"& svg":{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",filter:"drop-shadow(".concat(n.short,")")}}})),_e=(0,o.Pi)((0,r.forwardRef)(((e,t)=>{let{item:n,parentGroupItem:o,directParentContainerBoxItem:a,indirectParentContainerBoxItem:i,events:s}=e;const c=y(s,n,o,a,i),l=(0,w.Y)(n),{Thumbnail:d}=l,u={"data-cy":"fakeItem-".concat(n.type,"-").concat(n.Id),ref:t,style:{contain:"strict",...C({item:n,parentContainerBoxItem:a})},...c};return d?r.createElement(Ze,{$thumbnail:d,...u},r.createElement(Le.Z,{height:"50%",width:"50%"})):r.createElement(Ge,{...u},r.createElement(ee,{height:"50%",width:"50%"}))}))),We=(0,o.Pi)((e=>{let{itemType:t,item:n,parentGroupItem:o,directParentContainerBoxItem:a,indirectParentContainerBoxItem:i,events:s}=e;const c=v(),l=(0,r.useRef)(null);function u(e){return{item:e.item,parentGroupItem:o,directParentContainerBoxItem:a,indirectParentContainerBoxItem:i,ref:c.renderItem?l:void 0,events:s}}function m(e){switch(t){case d.q.Activity:return r.createElement(fe,{...u(e)});case d.q.Area:return r.createElement(P,{...u(e)});case d.q.Arrow:return r.createElement(q,{...u(e)});case d.q.Chart:case g:return r.createElement(Z,{...u(e)});case d.q.Group:return r.createElement(Q,{...u(e)});case d.q.Image:return r.createElement(oe,{...u(e)});case d.q.Pin:return r.createElement(we,{...u(e)});case d.q.RichContent:return r.createElement(Ce,{...u(e)});case d.q.Svg:return r.createElement(Pe,{...u(e)});case d.q.Text:return r.createElement(Re,{...u(e)});case d.q.WidgetAudio:{const t=(0,w.Y)(n);return t.DisplayPlayer&&!t.IsBackground?r.createElement(De,{...u(e)}):null}case d.q.WidgetVideo:return r.createElement(_e,{...u(e)});case d.q.ContainerBox:return r.createElement(Y,{...u(e)});default:return console.error("tried to render a fake item for the unknown item type ".concat(t)),null}}return c.renderItem?c.renderItem({item:n,itemId:n.Id,itemType:t,itemRef:l,itemZIndex:f(n),parentGroupItem:o,directParentContainerBoxItem:a,indirectParentContainerBoxItem:i,events:s,renderItemNode:m}):m({item:n})}));var Ne;!function(e){e.RichContents="richContents",e.WidgetsAudio="widgetsAudio",e.WidgetsVideo="widgetsVideo",e.Charts="charts",e.Areas="areas",e.Groups="groups",e.Images="images",e.Pins="pins",e.Svgs="svgs",e.Texts="texts",e.Activities="activities",e.Arrows="arrows",e.ContainerBoxes="containerBoxes"}(Ne||(Ne={}));const Ye=[];function He(e,t){var n;return null!==(n=null===e||void 0===e?void 0:e.filter((e=>(e=>{const t=(0,w.Y)(e);return!((0,c.v)(t)&&t.IdGroup)&&!((0,l.C)(t)&&t.containerBoxId)})(e))).map((e=>({item:e,itemType:t}))))&&void 0!==n?n:Ye}const Qe=(0,o.Pi)((e=>{var t,n,o,a;let{canBeTranslated:i=!0,delta:c,documentConfig:m,onBackgroundClick:v,onItemClick:g,onItemMouseEnter:f,onItemMouseLeave:I,renderItem:y,showBackgroundColor:b=!0,showBackgroundImage:C=!0,slide:k,t:x}=e;const P=((e,t)=>{if(t)return"data"in e?e.data.BackgroundColor:e.BackgroundColor})(k,b),A=((e,t)=>{var n;if(t)return"Background"in e?e.Background:null===(n=e.background)||void 0===n?void 0:n.currentBackgroundImage})(k,C),B=(e=>{if("data"in e){const{resolveTaskRef:t}=s();return t(e.data.SizeBackground)}return e.SizeBackground?e.SizeBackground:e.BackgroundHeight&&e.BackgroundWidth?{Width:e.BackgroundWidth,Height:e.BackgroundHeight}:{Width:e.Size.Width,Height:e.Size.Height}})(k),S=(e=>{if("data"in e){const{resolveTaskRef:t}=s();return t(e.data.PositionBackground)}return e.PositionBackground?e.PositionBackground:e.PositionBackgroundLeft&&e.PositionBackgroundTop?{PositionTop:e.PositionBackgroundTop,PositionLeft:e.PositionBackgroundLeft}:e.PositionBackground})(k),E="data"in k?k.data.OpacityBackground:k.OpacityBackground,T={width:parseFloat(null!==(t=("data"in k?k.data.Size:null!==(n=k.Size)&&void 0!==n?n:k).Width)&&void 0!==t?t:"0"),height:parseFloat(null!==(o=("data"in k?k.data.Size:null!==(a=k.Size)&&void 0!==a?a:k).Height)&&void 0!==o?o:"0")},z=(0,r.useMemo)((()=>({onClick:g,onMouseEnter:f,onMouseLeave:I})),[g,f,I]),R=(e=>{if("allItems"in e&&e.allItems)return e.allItems;const t=[];return Object.values(Ne).forEach((n=>{const r=e[n];r&&t.push(...r)})),t})(k),q=new Map;R.forEach((e=>{const t=(0,w.Y)(e);if((0,l.C)(t)&&t.containerBoxId){(0,u._)(q,t.containerBoxId,(()=>[])).push(e)}}));const L={slide:{items:R,containedItems:q,size:T},delta:c,canBeTranslated:i,documentConfig:m,t:x,renderItem:y};return r.createElement(p.Provider,{value:L},r.createElement(h,{key:k.Id,backgroundImageOpacity:E,backgroundImage:A,backgroundImageSize:B,backgroundImagePosition:S,backgroundColor:P,onClick:v}),[...He(k.activities,d.q.Activity),...He(k.areas,d.q.Area),...He(k.arrows,d.q.Arrow),...He(k.containerBoxes,d.q.ContainerBox),...He(k.charts,d.q.Chart),...He(k.groups,d.q.Group),...He(k.images,d.q.Image),...He(k.pins,d.q.Pin),...He(k.richContents,d.q.RichContent),...He(k.svgs,d.q.Svg),...He(k.texts,d.q.Text),...He(k.widgetsAudio,d.q.WidgetAudio),...He(k.widgetsVideo,d.q.WidgetVideo)].map((e=>{let{item:t,itemType:n}=e;return r.createElement(We,{key:t.Id,itemType:n,item:t,parentGroupItem:void 0,directParentContainerBoxItem:void 0,indirectParentContainerBoxItem:void 0,events:z})})))})),Oe=Qe}}]);
//# sourceMappingURL=https://s3-static-genially.genially.com/view/static/js/slideThumbnail.13be3298.chunk.js.map