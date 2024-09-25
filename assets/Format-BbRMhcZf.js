import{F as Dt,H as xt,I as ot,G as Ot,J as Wt,r as M,L as it,o as V,bI as st,cw as kt,$ as Nt,cx as $t,cy as Yt,cz as Ft,j as Q}from"./index-Ca-ywajW.js";import{u as Et,p as K}from"./context-BPytJE9N.js";import{W as Ht}from"./TextArea-BGDHj_Xu.js";const It=t=>{const{paddingXXS:e,lineWidth:n,tagPaddingHorizontal:r,componentCls:a,calc:o}=t,i=o(r).sub(n).equal(),s=o(e).sub(n).equal();return{[a]:Object.assign(Object.assign({},xt(t)),{display:"inline-block",height:"auto",marginInlineEnd:t.marginXS,paddingInline:i,fontSize:t.tagFontSize,lineHeight:t.tagLineHeight,whiteSpace:"nowrap",background:t.defaultBg,border:`${ot(t.lineWidth)} ${t.lineType} ${t.colorBorder}`,borderRadius:t.borderRadiusSM,opacity:1,transition:`all ${t.motionDurationMid}`,textAlign:"start",position:"relative",[`&${a}-rtl`]:{direction:"rtl"},"&, a, a:hover":{color:t.defaultColor},[`${a}-close-icon`]:{marginInlineStart:s,fontSize:t.tagIconSize,color:t.colorTextDescription,cursor:"pointer",transition:`all ${t.motionDurationMid}`,"&:hover":{color:t.colorTextHeading}},[`&${a}-has-color`]:{borderColor:"transparent",[`&, a, a:hover, ${t.iconCls}-close, ${t.iconCls}-close:hover`]:{color:t.colorTextLightSolid}},"&-checkable":{backgroundColor:"transparent",borderColor:"transparent",cursor:"pointer",[`&:not(${a}-checkable-checked):hover`]:{color:t.colorPrimary,backgroundColor:t.colorFillSecondary},"&:active, &-checked":{color:t.colorTextLightSolid},"&-checked":{backgroundColor:t.colorPrimary,"&:hover":{backgroundColor:t.colorPrimaryHover}},"&:active":{backgroundColor:t.colorPrimaryActive}},"&-hidden":{display:"none"},[`> ${t.iconCls} + span, > span + ${t.iconCls}`]:{marginInlineStart:i}}),[`${a}-borderless`]:{borderColor:"transparent",background:t.tagBorderlessBg}}},L=t=>{const{lineWidth:e,fontSizeIcon:n,calc:r}=t,a=t.fontSizeSM;return Ot(t,{tagFontSize:a,tagLineHeight:ot(r(t.lineHeightSM).mul(a).equal()),tagIconSize:r(n).sub(r(e).mul(2)).equal(),tagPaddingHorizontal:8,tagBorderlessBg:t.defaultBg})},R=t=>({defaultBg:new Wt(t.colorFillQuaternary).onBackground(t.colorBgContainer).toHexString(),defaultColor:t.colorText}),ct=Dt("Tag",t=>{const e=L(t);return It(e)},R);var _t=function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(t);a<r.length;a++)e.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(t,r[a])&&(n[r[a]]=t[r[a]]);return n};const qt=M.forwardRef((t,e)=>{const{prefixCls:n,style:r,className:a,checked:o,onChange:i,onClick:s}=t,c=_t(t,["prefixCls","style","className","checked","onChange","onClick"]),{getPrefixCls:h,tag:u}=M.useContext(it),f=D=>{i==null||i(!o),s==null||s(D)},l=h("tag",n),[y,w,b]=ct(l),W=V(l,`${l}-checkable`,{[`${l}-checkable-checked`]:o},u==null?void 0:u.className,a,w,b);return y(M.createElement("span",Object.assign({},c,{ref:e,style:Object.assign(Object.assign({},r),u==null?void 0:u.style),className:W,onClick:f})))}),Bt=t=>kt(t,(e,n)=>{let{textColor:r,lightBorderColor:a,lightColor:o,darkColor:i}=n;return{[`${t.componentCls}${t.componentCls}-${e}`]:{color:r,background:o,borderColor:a,"&-inverse":{color:t.colorTextLightSolid,background:i,borderColor:i},[`&${t.componentCls}-borderless`]:{borderColor:"transparent"}}}}),Xt=st(["Tag","preset"],t=>{const e=L(t);return Bt(e)},R);function jt(t){return typeof t!="string"?t:t.charAt(0).toUpperCase()+t.slice(1)}const H=(t,e,n)=>{const r=jt(n);return{[`${t.componentCls}${t.componentCls}-${e}`]:{color:t[`color${n}`],background:t[`color${r}Bg`],borderColor:t[`color${r}Border`],[`&${t.componentCls}-borderless`]:{borderColor:"transparent"}}}},Qt=st(["Tag","status"],t=>{const e=L(t);return[H(e,"success","Success"),H(e,"processing","Info"),H(e,"error","Error"),H(e,"warning","Warning")]},R);var Vt=function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(t);a<r.length;a++)e.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(t,r[a])&&(n[r[a]]=t[r[a]]);return n};const Lt=M.forwardRef((t,e)=>{const{prefixCls:n,className:r,rootClassName:a,style:o,children:i,icon:s,color:c,onClose:h,bordered:u=!0,visible:f}=t,l=Vt(t,["prefixCls","className","rootClassName","style","children","icon","color","onClose","bordered","visible"]),{getPrefixCls:y,direction:w,tag:b}=M.useContext(it),[W,D]=M.useState(!0),T=Nt(l,["closeIcon","closable"]);M.useEffect(()=>{f!==void 0&&D(f)},[f]);const g=$t(c),k=Yt(c),X=g||k,bt=Object.assign(Object.assign({backgroundColor:c&&!X?c:void 0},b==null?void 0:b.style),o),v=y("tag",n),[wt,Tt,Mt]=ct(v),vt=V(v,b==null?void 0:b.className,{[`${v}-${c}`]:X,[`${v}-has-color`]:c&&!X,[`${v}-hidden`]:!W,[`${v}-rtl`]:w==="rtl",[`${v}-borderless`]:!u},r,a,Tt,Mt),z=N=>{N.stopPropagation(),h==null||h(N),!N.defaultPrevented&&D(!1)},[,Ct]=Et(K(t),K(b),{closable:!1,closeIconRender:N=>{const St=M.createElement("span",{className:`${v}-close-icon`,onClick:z},N);return Ft(N,St,x=>({onClick:U=>{var j;(j=x==null?void 0:x.onClick)===null||j===void 0||j.call(x,U),z(U)},className:V(x==null?void 0:x.className,`${v}-close-icon`)}))}}),Pt=typeof l.onClick=="function"||i&&i.type==="a",G=s||null,pt=G?M.createElement(M.Fragment,null,G,i&&M.createElement("span",null,i)):i,J=M.createElement("span",Object.assign({},T,{ref:e,className:vt,style:bt}),pt,Ct,g&&M.createElement(Xt,{key:"preset",prefixCls:v}),k&&M.createElement(Qt,{key:"status",prefixCls:v}));return wt(Pt?M.createElement(Ht,{component:"Tag"},J):J)}),ut=Lt;ut.CheckableTag=qt;function m(t){const e=Object.prototype.toString.call(t);return t instanceof Date||typeof t=="object"&&e==="[object Date]"?new t.constructor(+t):typeof t=="number"||e==="[object Number]"||typeof t=="string"||e==="[object String]"?new Date(t):new Date(NaN)}function S(t,e){return t instanceof Date?new t.constructor(e):new Date(e)}const dt=6048e5,Rt=864e5,I=43200,Z=1440;let At={};function E(){return At}function F(t,e){var s,c,h,u;const n=E(),r=(e==null?void 0:e.weekStartsOn)??((c=(s=e==null?void 0:e.locale)==null?void 0:s.options)==null?void 0:c.weekStartsOn)??n.weekStartsOn??((u=(h=n.locale)==null?void 0:h.options)==null?void 0:u.weekStartsOn)??0,a=m(t),o=a.getDay(),i=(o<r?7:0)+o-r;return a.setDate(a.getDate()-i),a.setHours(0,0,0,0),a}function q(t){return F(t,{weekStartsOn:1})}function lt(t){const e=m(t),n=e.getFullYear(),r=S(t,0);r.setFullYear(n+1,0,4),r.setHours(0,0,0,0);const a=q(r),o=S(t,0);o.setFullYear(n,0,4),o.setHours(0,0,0,0);const i=q(o);return e.getTime()>=a.getTime()?n+1:e.getTime()>=i.getTime()?n:n-1}function tt(t){const e=m(t);return e.setHours(0,0,0,0),e}function B(t){const e=m(t),n=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return n.setUTCFullYear(e.getFullYear()),+t-+n}function zt(t,e){const n=tt(t),r=tt(e),a=+n-B(n),o=+r-B(r);return Math.round((a-o)/Rt)}function Gt(t){const e=lt(t),n=S(t,0);return n.setFullYear(e,0,4),n.setHours(0,0,0,0),q(n)}function _(t,e){const n=m(t),r=m(e),a=n.getTime()-r.getTime();return a<0?-1:a>0?1:a}function Jt(t){return S(t,Date.now())}function Ut(t){return t instanceof Date||typeof t=="object"&&Object.prototype.toString.call(t)==="[object Date]"}function Kt(t){if(!Ut(t)&&typeof t!="number")return!1;const e=m(t);return!isNaN(Number(e))}function Zt(t,e){const n=m(t),r=m(e),a=n.getFullYear()-r.getFullYear(),o=n.getMonth()-r.getMonth();return a*12+o}function te(t){return e=>{const r=(t?Math[t]:Math.trunc)(e);return r===0?0:r}}function ee(t,e){return+m(t)-+m(e)}function ne(t){const e=m(t);return e.setHours(23,59,59,999),e}function re(t){const e=m(t),n=e.getMonth();return e.setFullYear(e.getFullYear(),n+1,0),e.setHours(23,59,59,999),e}function ae(t){const e=m(t);return+ne(e)==+re(e)}function oe(t,e){const n=m(t),r=m(e),a=_(n,r),o=Math.abs(Zt(n,r));let i;if(o<1)i=0;else{n.getMonth()===1&&n.getDate()>27&&n.setDate(30),n.setMonth(n.getMonth()-a*o);let s=_(n,r)===-a;ae(m(t))&&o===1&&_(t,r)===1&&(s=!1),i=a*(o-Number(s))}return i===0?0:i}function ie(t,e,n){const r=ee(t,e)/1e3;return te(n==null?void 0:n.roundingMethod)(r)}function se(t){const e=m(t),n=S(t,0);return n.setFullYear(e.getFullYear(),0,1),n.setHours(0,0,0,0),n}const ce={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},ue=(t,e,n)=>{let r;const a=ce[t];return typeof a=="string"?r=a:e===1?r=a.one:r=a.other.replace("{{count}}",e.toString()),n!=null&&n.addSuffix?n.comparison&&n.comparison>0?"in "+r:r+" ago":r};function Y(t){return(e={})=>{const n=e.width?String(e.width):t.defaultWidth;return t.formats[n]||t.formats[t.defaultWidth]}}const de={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},le={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},he={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},me={date:Y({formats:de,defaultWidth:"full"}),time:Y({formats:le,defaultWidth:"full"}),dateTime:Y({formats:he,defaultWidth:"full"})},fe={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},ge=(t,e,n,r)=>fe[t];function C(t){return(e,n)=>{const r=n!=null&&n.context?String(n.context):"standalone";let a;if(r==="formatting"&&t.formattingValues){const i=t.defaultFormattingWidth||t.defaultWidth,s=n!=null&&n.width?String(n.width):i;a=t.formattingValues[s]||t.formattingValues[i]}else{const i=t.defaultWidth,s=n!=null&&n.width?String(n.width):t.defaultWidth;a=t.values[s]||t.values[i]}const o=t.argumentCallback?t.argumentCallback(e):e;return a[o]}}const ye={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},be={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},we={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},Te={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},Me={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},ve={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},Ce=(t,e)=>{const n=Number(t),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},Pe={ordinalNumber:Ce,era:C({values:ye,defaultWidth:"wide"}),quarter:C({values:be,defaultWidth:"wide",argumentCallback:t=>t-1}),month:C({values:we,defaultWidth:"wide"}),day:C({values:Te,defaultWidth:"wide"}),dayPeriod:C({values:Me,defaultWidth:"wide",formattingValues:ve,defaultFormattingWidth:"wide"})};function P(t){return(e,n={})=>{const r=n.width,a=r&&t.matchPatterns[r]||t.matchPatterns[t.defaultMatchWidth],o=e.match(a);if(!o)return null;const i=o[0],s=r&&t.parsePatterns[r]||t.parsePatterns[t.defaultParseWidth],c=Array.isArray(s)?Se(s,f=>f.test(i)):pe(s,f=>f.test(i));let h;h=t.valueCallback?t.valueCallback(c):c,h=n.valueCallback?n.valueCallback(h):h;const u=e.slice(i.length);return{value:h,rest:u}}}function pe(t,e){for(const n in t)if(Object.prototype.hasOwnProperty.call(t,n)&&e(t[n]))return n}function Se(t,e){for(let n=0;n<t.length;n++)if(e(t[n]))return n}function ht(t){return(e,n={})=>{const r=e.match(t.matchPattern);if(!r)return null;const a=r[0],o=e.match(t.parsePattern);if(!o)return null;let i=t.valueCallback?t.valueCallback(o[0]):o[0];i=n.valueCallback?n.valueCallback(i):i;const s=e.slice(a.length);return{value:i,rest:s}}}const De=/^(\d+)(th|st|nd|rd)?/i,xe=/\d+/i,Oe={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},We={any:[/^b/i,/^(a|c)/i]},ke={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},Ne={any:[/1/i,/2/i,/3/i,/4/i]},$e={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},Ye={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},Fe={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},Ee={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},He={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},Ie={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},_e={ordinalNumber:ht({matchPattern:De,parsePattern:xe,valueCallback:t=>parseInt(t,10)}),era:P({matchPatterns:Oe,defaultMatchWidth:"wide",parsePatterns:We,defaultParseWidth:"any"}),quarter:P({matchPatterns:ke,defaultMatchWidth:"wide",parsePatterns:Ne,defaultParseWidth:"any",valueCallback:t=>t+1}),month:P({matchPatterns:$e,defaultMatchWidth:"wide",parsePatterns:Ye,defaultParseWidth:"any"}),day:P({matchPatterns:Fe,defaultMatchWidth:"wide",parsePatterns:Ee,defaultParseWidth:"any"}),dayPeriod:P({matchPatterns:He,defaultMatchWidth:"any",parsePatterns:Ie,defaultParseWidth:"any"})},mt={code:"en-US",formatDistance:ue,formatLong:me,formatRelative:ge,localize:Pe,match:_e,options:{weekStartsOn:0,firstWeekContainsDate:1}};function qe(t){const e=m(t);return zt(e,se(e))+1}function Be(t){const e=m(t),n=+q(e)-+Gt(e);return Math.round(n/dt)+1}function ft(t,e){var u,f,l,y;const n=m(t),r=n.getFullYear(),a=E(),o=(e==null?void 0:e.firstWeekContainsDate)??((f=(u=e==null?void 0:e.locale)==null?void 0:u.options)==null?void 0:f.firstWeekContainsDate)??a.firstWeekContainsDate??((y=(l=a.locale)==null?void 0:l.options)==null?void 0:y.firstWeekContainsDate)??1,i=S(t,0);i.setFullYear(r+1,0,o),i.setHours(0,0,0,0);const s=F(i,e),c=S(t,0);c.setFullYear(r,0,o),c.setHours(0,0,0,0);const h=F(c,e);return n.getTime()>=s.getTime()?r+1:n.getTime()>=h.getTime()?r:r-1}function Xe(t,e){var s,c,h,u;const n=E(),r=(e==null?void 0:e.firstWeekContainsDate)??((c=(s=e==null?void 0:e.locale)==null?void 0:s.options)==null?void 0:c.firstWeekContainsDate)??n.firstWeekContainsDate??((u=(h=n.locale)==null?void 0:h.options)==null?void 0:u.firstWeekContainsDate)??1,a=ft(t,e),o=S(t,0);return o.setFullYear(a,0,r),o.setHours(0,0,0,0),F(o,e)}function je(t,e){const n=m(t),r=+F(n,e)-+Xe(n,e);return Math.round(r/dt)+1}function d(t,e){const n=t<0?"-":"",r=Math.abs(t).toString().padStart(e,"0");return n+r}const p={y(t,e){const n=t.getFullYear(),r=n>0?n:1-n;return d(e==="yy"?r%100:r,e.length)},M(t,e){const n=t.getMonth();return e==="M"?String(n+1):d(n+1,2)},d(t,e){return d(t.getDate(),e.length)},a(t,e){const n=t.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.toUpperCase();case"aaa":return n;case"aaaaa":return n[0];case"aaaa":default:return n==="am"?"a.m.":"p.m."}},h(t,e){return d(t.getHours()%12||12,e.length)},H(t,e){return d(t.getHours(),e.length)},m(t,e){return d(t.getMinutes(),e.length)},s(t,e){return d(t.getSeconds(),e.length)},S(t,e){const n=e.length,r=t.getMilliseconds(),a=Math.trunc(r*Math.pow(10,n-3));return d(a,e.length)}},$={am:"am",pm:"pm",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},et={G:function(t,e,n){const r=t.getFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return n.era(r,{width:"abbreviated"});case"GGGGG":return n.era(r,{width:"narrow"});case"GGGG":default:return n.era(r,{width:"wide"})}},y:function(t,e,n){if(e==="yo"){const r=t.getFullYear(),a=r>0?r:1-r;return n.ordinalNumber(a,{unit:"year"})}return p.y(t,e)},Y:function(t,e,n,r){const a=ft(t,r),o=a>0?a:1-a;if(e==="YY"){const i=o%100;return d(i,2)}return e==="Yo"?n.ordinalNumber(o,{unit:"year"}):d(o,e.length)},R:function(t,e){const n=lt(t);return d(n,e.length)},u:function(t,e){const n=t.getFullYear();return d(n,e.length)},Q:function(t,e,n){const r=Math.ceil((t.getMonth()+1)/3);switch(e){case"Q":return String(r);case"QQ":return d(r,2);case"Qo":return n.ordinalNumber(r,{unit:"quarter"});case"QQQ":return n.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(r,{width:"narrow",context:"formatting"});case"QQQQ":default:return n.quarter(r,{width:"wide",context:"formatting"})}},q:function(t,e,n){const r=Math.ceil((t.getMonth()+1)/3);switch(e){case"q":return String(r);case"qq":return d(r,2);case"qo":return n.ordinalNumber(r,{unit:"quarter"});case"qqq":return n.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(r,{width:"narrow",context:"standalone"});case"qqqq":default:return n.quarter(r,{width:"wide",context:"standalone"})}},M:function(t,e,n){const r=t.getMonth();switch(e){case"M":case"MM":return p.M(t,e);case"Mo":return n.ordinalNumber(r+1,{unit:"month"});case"MMM":return n.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(r,{width:"narrow",context:"formatting"});case"MMMM":default:return n.month(r,{width:"wide",context:"formatting"})}},L:function(t,e,n){const r=t.getMonth();switch(e){case"L":return String(r+1);case"LL":return d(r+1,2);case"Lo":return n.ordinalNumber(r+1,{unit:"month"});case"LLL":return n.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(r,{width:"narrow",context:"standalone"});case"LLLL":default:return n.month(r,{width:"wide",context:"standalone"})}},w:function(t,e,n,r){const a=je(t,r);return e==="wo"?n.ordinalNumber(a,{unit:"week"}):d(a,e.length)},I:function(t,e,n){const r=Be(t);return e==="Io"?n.ordinalNumber(r,{unit:"week"}):d(r,e.length)},d:function(t,e,n){return e==="do"?n.ordinalNumber(t.getDate(),{unit:"date"}):p.d(t,e)},D:function(t,e,n){const r=qe(t);return e==="Do"?n.ordinalNumber(r,{unit:"dayOfYear"}):d(r,e.length)},E:function(t,e,n){const r=t.getDay();switch(e){case"E":case"EE":case"EEE":return n.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(r,{width:"short",context:"formatting"});case"EEEE":default:return n.day(r,{width:"wide",context:"formatting"})}},e:function(t,e,n,r){const a=t.getDay(),o=(a-r.weekStartsOn+8)%7||7;switch(e){case"e":return String(o);case"ee":return d(o,2);case"eo":return n.ordinalNumber(o,{unit:"day"});case"eee":return n.day(a,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(a,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(a,{width:"short",context:"formatting"});case"eeee":default:return n.day(a,{width:"wide",context:"formatting"})}},c:function(t,e,n,r){const a=t.getDay(),o=(a-r.weekStartsOn+8)%7||7;switch(e){case"c":return String(o);case"cc":return d(o,e.length);case"co":return n.ordinalNumber(o,{unit:"day"});case"ccc":return n.day(a,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(a,{width:"narrow",context:"standalone"});case"cccccc":return n.day(a,{width:"short",context:"standalone"});case"cccc":default:return n.day(a,{width:"wide",context:"standalone"})}},i:function(t,e,n){const r=t.getDay(),a=r===0?7:r;switch(e){case"i":return String(a);case"ii":return d(a,e.length);case"io":return n.ordinalNumber(a,{unit:"day"});case"iii":return n.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(r,{width:"short",context:"formatting"});case"iiii":default:return n.day(r,{width:"wide",context:"formatting"})}},a:function(t,e,n){const a=t.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(a,{width:"narrow",context:"formatting"});case"aaaa":default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},b:function(t,e,n){const r=t.getHours();let a;switch(r===12?a=$.noon:r===0?a=$.midnight:a=r/12>=1?"pm":"am",e){case"b":case"bb":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(a,{width:"narrow",context:"formatting"});case"bbbb":default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},B:function(t,e,n){const r=t.getHours();let a;switch(r>=17?a=$.evening:r>=12?a=$.afternoon:r>=4?a=$.morning:a=$.night,e){case"B":case"BB":case"BBB":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(a,{width:"narrow",context:"formatting"});case"BBBB":default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},h:function(t,e,n){if(e==="ho"){let r=t.getHours()%12;return r===0&&(r=12),n.ordinalNumber(r,{unit:"hour"})}return p.h(t,e)},H:function(t,e,n){return e==="Ho"?n.ordinalNumber(t.getHours(),{unit:"hour"}):p.H(t,e)},K:function(t,e,n){const r=t.getHours()%12;return e==="Ko"?n.ordinalNumber(r,{unit:"hour"}):d(r,e.length)},k:function(t,e,n){let r=t.getHours();return r===0&&(r=24),e==="ko"?n.ordinalNumber(r,{unit:"hour"}):d(r,e.length)},m:function(t,e,n){return e==="mo"?n.ordinalNumber(t.getMinutes(),{unit:"minute"}):p.m(t,e)},s:function(t,e,n){return e==="so"?n.ordinalNumber(t.getSeconds(),{unit:"second"}):p.s(t,e)},S:function(t,e){return p.S(t,e)},X:function(t,e,n){const r=t.getTimezoneOffset();if(r===0)return"Z";switch(e){case"X":return rt(r);case"XXXX":case"XX":return O(r);case"XXXXX":case"XXX":default:return O(r,":")}},x:function(t,e,n){const r=t.getTimezoneOffset();switch(e){case"x":return rt(r);case"xxxx":case"xx":return O(r);case"xxxxx":case"xxx":default:return O(r,":")}},O:function(t,e,n){const r=t.getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+nt(r,":");case"OOOO":default:return"GMT"+O(r,":")}},z:function(t,e,n){const r=t.getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+nt(r,":");case"zzzz":default:return"GMT"+O(r,":")}},t:function(t,e,n){const r=Math.trunc(t.getTime()/1e3);return d(r,e.length)},T:function(t,e,n){const r=t.getTime();return d(r,e.length)}};function nt(t,e=""){const n=t>0?"-":"+",r=Math.abs(t),a=Math.trunc(r/60),o=r%60;return o===0?n+String(a):n+String(a)+e+d(o,2)}function rt(t,e){return t%60===0?(t>0?"-":"+")+d(Math.abs(t)/60,2):O(t,e)}function O(t,e=""){const n=t>0?"-":"+",r=Math.abs(t),a=d(Math.trunc(r/60),2),o=d(r%60,2);return n+a+e+o}const at=(t,e)=>{switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});case"PPPP":default:return e.date({width:"full"})}},gt=(t,e)=>{switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});case"pppp":default:return e.time({width:"full"})}},Qe=(t,e)=>{const n=t.match(/(P+)(p+)?/)||[],r=n[1],a=n[2];if(!a)return at(t,e);let o;switch(r){case"P":o=e.dateTime({width:"short"});break;case"PP":o=e.dateTime({width:"medium"});break;case"PPP":o=e.dateTime({width:"long"});break;case"PPPP":default:o=e.dateTime({width:"full"});break}return o.replace("{{date}}",at(r,e)).replace("{{time}}",gt(a,e))},Ve={p:gt,P:Qe},Le=/^D+$/,Re=/^Y+$/,Ae=["D","DD","YY","YYYY"];function ze(t){return Le.test(t)}function Ge(t){return Re.test(t)}function Je(t,e,n){const r=Ue(t,e,n);if(console.warn(r),Ae.includes(t))throw new RangeError(r)}function Ue(t,e,n){const r=t[0]==="Y"?"years":"days of the month";return`Use \`${t.toLowerCase()}\` instead of \`${t}\` (in \`${e}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}const Ke=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,Ze=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,tn=/^'([^]*?)'?$/,en=/''/g,nn=/[a-zA-Z]/;function yt(t,e,n){var u,f,l,y,w,b,W,D;const r=E(),a=(n==null?void 0:n.locale)??r.locale??mt,o=(n==null?void 0:n.firstWeekContainsDate)??((f=(u=n==null?void 0:n.locale)==null?void 0:u.options)==null?void 0:f.firstWeekContainsDate)??r.firstWeekContainsDate??((y=(l=r.locale)==null?void 0:l.options)==null?void 0:y.firstWeekContainsDate)??1,i=(n==null?void 0:n.weekStartsOn)??((b=(w=n==null?void 0:n.locale)==null?void 0:w.options)==null?void 0:b.weekStartsOn)??r.weekStartsOn??((D=(W=r.locale)==null?void 0:W.options)==null?void 0:D.weekStartsOn)??0,s=m(t);if(!Kt(s))throw new RangeError("Invalid time value");let c=e.match(Ze).map(T=>{const g=T[0];if(g==="p"||g==="P"){const k=Ve[g];return k(T,a.formatLong)}return T}).join("").match(Ke).map(T=>{if(T==="''")return{isToken:!1,value:"'"};const g=T[0];if(g==="'")return{isToken:!1,value:rn(T)};if(et[g])return{isToken:!0,value:T};if(g.match(nn))throw new RangeError("Format string contains an unescaped latin alphabet character `"+g+"`");return{isToken:!1,value:T}});a.localize.preprocessor&&(c=a.localize.preprocessor(s,c));const h={firstWeekContainsDate:o,weekStartsOn:i,locale:a};return c.map(T=>{if(!T.isToken)return T.value;const g=T.value;(!(n!=null&&n.useAdditionalWeekYearTokens)&&Ge(g)||!(n!=null&&n.useAdditionalDayOfYearTokens)&&ze(g))&&Je(g,e,String(t));const k=et[g[0]];return k(s,g,a.localize,h)}).join("")}function rn(t){const e=t.match(tn);return e?e[1].replace(en,"'"):t}function an(t,e,n){const r=E(),a=(n==null?void 0:n.locale)??r.locale??mt,o=2520,i=_(t,e);if(isNaN(i))throw new RangeError("Invalid time value");const s=Object.assign({},n,{addSuffix:n==null?void 0:n.addSuffix,comparison:i});let c,h;i>0?(c=m(e),h=m(t)):(c=m(t),h=m(e));const u=ie(h,c),f=(B(h)-B(c))/1e3,l=Math.round((u-f)/60);let y;if(l<2)return n!=null&&n.includeSeconds?u<5?a.formatDistance("lessThanXSeconds",5,s):u<10?a.formatDistance("lessThanXSeconds",10,s):u<20?a.formatDistance("lessThanXSeconds",20,s):u<40?a.formatDistance("halfAMinute",0,s):u<60?a.formatDistance("lessThanXMinutes",1,s):a.formatDistance("xMinutes",1,s):l===0?a.formatDistance("lessThanXMinutes",1,s):a.formatDistance("xMinutes",l,s);if(l<45)return a.formatDistance("xMinutes",l,s);if(l<90)return a.formatDistance("aboutXHours",1,s);if(l<Z){const w=Math.round(l/60);return a.formatDistance("aboutXHours",w,s)}else{if(l<o)return a.formatDistance("xDays",1,s);if(l<I){const w=Math.round(l/Z);return a.formatDistance("xDays",w,s)}else if(l<I*2)return y=Math.round(l/I),a.formatDistance("aboutXMonths",y,s)}if(y=oe(h,c),y<12){const w=Math.round(l/I);return a.formatDistance("xMonths",w,s)}else{const w=y%12,b=Math.trunc(y/12);return w<3?a.formatDistance("aboutXYears",b,s):w<9?a.formatDistance("overXYears",b,s):a.formatDistance("almostXYears",b+1,s)}}function on(t,e){return an(t,Jt(t),e)}const sn={lessThanXSeconds:{one:"dưới 1 giây",other:"dưới {{count}} giây"},xSeconds:{one:"1 giây",other:"{{count}} giây"},halfAMinute:"nửa phút",lessThanXMinutes:{one:"dưới 1 phút",other:"dưới {{count}} phút"},xMinutes:{one:"1 phút",other:"{{count}} phút"},aboutXHours:{one:"khoảng 1 giờ",other:"khoảng {{count}} giờ"},xHours:{one:"1 giờ",other:"{{count}} giờ"},xDays:{one:"1 ngày",other:"{{count}} ngày"},aboutXWeeks:{one:"khoảng 1 tuần",other:"khoảng {{count}} tuần"},xWeeks:{one:"1 tuần",other:"{{count}} tuần"},aboutXMonths:{one:"khoảng 1 tháng",other:"khoảng {{count}} tháng"},xMonths:{one:"1 tháng",other:"{{count}} tháng"},aboutXYears:{one:"khoảng 1 năm",other:"khoảng {{count}} năm"},xYears:{one:"1 năm",other:"{{count}} năm"},overXYears:{one:"hơn 1 năm",other:"hơn {{count}} năm"},almostXYears:{one:"gần 1 năm",other:"gần {{count}} năm"}},cn=(t,e,n)=>{let r;const a=sn[t];return typeof a=="string"?r=a:e===1?r=a.one:r=a.other.replace("{{count}}",String(e)),n!=null&&n.addSuffix?n.comparison&&n.comparison>0?r+" nữa":r+" trước":r},un={full:"EEEE, 'ngày' d MMMM 'năm' y",long:"'ngày' d MMMM 'năm' y",medium:"d MMM 'năm' y",short:"dd/MM/y"},dn={full:"HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},ln={full:"{{date}} {{time}}",long:"{{date}} {{time}}",medium:"{{date}} {{time}}",short:"{{date}} {{time}}"},hn={date:Y({formats:un,defaultWidth:"full"}),time:Y({formats:dn,defaultWidth:"full"}),dateTime:Y({formats:ln,defaultWidth:"full"})},mn={lastWeek:"eeee 'tuần trước vào lúc' p",yesterday:"'hôm qua vào lúc' p",today:"'hôm nay vào lúc' p",tomorrow:"'ngày mai vào lúc' p",nextWeek:"eeee 'tới vào lúc' p",other:"P"},fn=(t,e,n,r)=>mn[t],gn={narrow:["TCN","SCN"],abbreviated:["trước CN","sau CN"],wide:["trước Công Nguyên","sau Công Nguyên"]},yn={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["Quý 1","Quý 2","Quý 3","Quý 4"]},bn={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["quý I","quý II","quý III","quý IV"]},wn={narrow:["1","2","3","4","5","6","7","8","9","10","11","12"],abbreviated:["Thg 1","Thg 2","Thg 3","Thg 4","Thg 5","Thg 6","Thg 7","Thg 8","Thg 9","Thg 10","Thg 11","Thg 12"],wide:["Tháng Một","Tháng Hai","Tháng Ba","Tháng Tư","Tháng Năm","Tháng Sáu","Tháng Bảy","Tháng Tám","Tháng Chín","Tháng Mười","Tháng Mười Một","Tháng Mười Hai"]},Tn={narrow:["01","02","03","04","05","06","07","08","09","10","11","12"],abbreviated:["thg 1","thg 2","thg 3","thg 4","thg 5","thg 6","thg 7","thg 8","thg 9","thg 10","thg 11","thg 12"],wide:["tháng 01","tháng 02","tháng 03","tháng 04","tháng 05","tháng 06","tháng 07","tháng 08","tháng 09","tháng 10","tháng 11","tháng 12"]},Mn={narrow:["CN","T2","T3","T4","T5","T6","T7"],short:["CN","Th 2","Th 3","Th 4","Th 5","Th 6","Th 7"],abbreviated:["CN","Thứ 2","Thứ 3","Thứ 4","Thứ 5","Thứ 6","Thứ 7"],wide:["Chủ Nhật","Thứ Hai","Thứ Ba","Thứ Tư","Thứ Năm","Thứ Sáu","Thứ Bảy"]},vn={narrow:{am:"am",pm:"pm",midnight:"nửa đêm",noon:"tr",morning:"sg",afternoon:"ch",evening:"tối",night:"đêm"},abbreviated:{am:"AM",pm:"PM",midnight:"nửa đêm",noon:"trưa",morning:"sáng",afternoon:"chiều",evening:"tối",night:"đêm"},wide:{am:"SA",pm:"CH",midnight:"nửa đêm",noon:"trưa",morning:"sáng",afternoon:"chiều",evening:"tối",night:"đêm"}},Cn={narrow:{am:"am",pm:"pm",midnight:"nửa đêm",noon:"tr",morning:"sg",afternoon:"ch",evening:"tối",night:"đêm"},abbreviated:{am:"AM",pm:"PM",midnight:"nửa đêm",noon:"trưa",morning:"sáng",afternoon:"chiều",evening:"tối",night:"đêm"},wide:{am:"SA",pm:"CH",midnight:"nửa đêm",noon:"giữa trưa",morning:"vào buổi sáng",afternoon:"vào buổi chiều",evening:"vào buổi tối",night:"vào ban đêm"}},Pn=(t,e)=>{const n=Number(t),r=e==null?void 0:e.unit;if(r==="quarter")switch(n){case 1:return"I";case 2:return"II";case 3:return"III";case 4:return"IV"}else if(r==="day")switch(n){case 1:return"thứ 2";case 2:return"thứ 3";case 3:return"thứ 4";case 4:return"thứ 5";case 5:return"thứ 6";case 6:return"thứ 7";case 7:return"chủ nhật"}else{if(r==="week")return n===1?"thứ nhất":"thứ "+n;if(r==="dayOfYear")return n===1?"đầu tiên":"thứ "+n}return String(n)},pn={ordinalNumber:Pn,era:C({values:gn,defaultWidth:"wide"}),quarter:C({values:yn,defaultWidth:"wide",formattingValues:bn,defaultFormattingWidth:"wide",argumentCallback:t=>t-1}),month:C({values:wn,defaultWidth:"wide",formattingValues:Tn,defaultFormattingWidth:"wide"}),day:C({values:Mn,defaultWidth:"wide"}),dayPeriod:C({values:vn,defaultWidth:"wide",formattingValues:Cn,defaultFormattingWidth:"wide"})},Sn=/^(\d+)/i,Dn=/\d+/i,xn={narrow:/^(tcn|scn)/i,abbreviated:/^(trước CN|sau CN)/i,wide:/^(trước Công Nguyên|sau Công Nguyên)/i},On={any:[/^t/i,/^s/i]},Wn={narrow:/^([1234]|i{1,3}v?)/i,abbreviated:/^q([1234]|i{1,3}v?)/i,wide:/^quý ([1234]|i{1,3}v?)/i},kn={any:[/(1|i)$/i,/(2|ii)$/i,/(3|iii)$/i,/(4|iv)$/i]},Nn={narrow:/^(0?[2-9]|10|11|12|0?1)/i,abbreviated:/^thg[ _]?(0?[1-9](?!\d)|10|11|12)/i,wide:/^tháng ?(Một|Hai|Ba|Tư|Năm|Sáu|Bảy|Tám|Chín|Mười|Mười ?Một|Mười ?Hai|0?[1-9](?!\d)|10|11|12)/i},$n={narrow:[/0?1$/i,/0?2/i,/3/,/4/,/5/,/6/,/7/,/8/,/9/,/10/,/11/,/12/],abbreviated:[/^thg[ _]?0?1(?!\d)/i,/^thg[ _]?0?2/i,/^thg[ _]?0?3/i,/^thg[ _]?0?4/i,/^thg[ _]?0?5/i,/^thg[ _]?0?6/i,/^thg[ _]?0?7/i,/^thg[ _]?0?8/i,/^thg[ _]?0?9/i,/^thg[ _]?10/i,/^thg[ _]?11/i,/^thg[ _]?12/i],wide:[/^tháng ?(Một|0?1(?!\d))/i,/^tháng ?(Hai|0?2)/i,/^tháng ?(Ba|0?3)/i,/^tháng ?(Tư|0?4)/i,/^tháng ?(Năm|0?5)/i,/^tháng ?(Sáu|0?6)/i,/^tháng ?(Bảy|0?7)/i,/^tháng ?(Tám|0?8)/i,/^tháng ?(Chín|0?9)/i,/^tháng ?(Mười|10)/i,/^tháng ?(Mười ?Một|11)/i,/^tháng ?(Mười ?Hai|12)/i]},Yn={narrow:/^(CN|T2|T3|T4|T5|T6|T7)/i,short:/^(CN|Th ?2|Th ?3|Th ?4|Th ?5|Th ?6|Th ?7)/i,abbreviated:/^(CN|Th ?2|Th ?3|Th ?4|Th ?5|Th ?6|Th ?7)/i,wide:/^(Chủ ?Nhật|Chúa ?Nhật|thứ ?Hai|thứ ?Ba|thứ ?Tư|thứ ?Năm|thứ ?Sáu|thứ ?Bảy)/i},Fn={narrow:[/CN/i,/2/i,/3/i,/4/i,/5/i,/6/i,/7/i],short:[/CN/i,/2/i,/3/i,/4/i,/5/i,/6/i,/7/i],abbreviated:[/CN/i,/2/i,/3/i,/4/i,/5/i,/6/i,/7/i],wide:[/(Chủ|Chúa) ?Nhật/i,/Hai/i,/Ba/i,/Tư/i,/Năm/i,/Sáu/i,/Bảy/i]},En={narrow:/^(a|p|nửa đêm|trưa|(giờ) (sáng|chiều|tối|đêm))/i,abbreviated:/^(am|pm|nửa đêm|trưa|(giờ) (sáng|chiều|tối|đêm))/i,wide:/^(ch[^i]*|sa|nửa đêm|trưa|(giờ) (sáng|chiều|tối|đêm))/i},Hn={any:{am:/^(a|sa)/i,pm:/^(p|ch[^i]*)/i,midnight:/nửa đêm/i,noon:/trưa/i,morning:/sáng/i,afternoon:/chiều/i,evening:/tối/i,night:/^đêm/i}},In={ordinalNumber:ht({matchPattern:Sn,parsePattern:Dn,valueCallback:t=>parseInt(t,10)}),era:P({matchPatterns:xn,defaultMatchWidth:"wide",parsePatterns:On,defaultParseWidth:"any"}),quarter:P({matchPatterns:Wn,defaultMatchWidth:"wide",parsePatterns:kn,defaultParseWidth:"any",valueCallback:t=>t+1}),month:P({matchPatterns:Nn,defaultMatchWidth:"wide",parsePatterns:$n,defaultParseWidth:"wide"}),day:P({matchPatterns:Yn,defaultMatchWidth:"wide",parsePatterns:Fn,defaultParseWidth:"wide"}),dayPeriod:P({matchPatterns:En,defaultMatchWidth:"wide",parsePatterns:Hn,defaultParseWidth:"any"})},A={code:"vi",formatDistance:cn,formatLong:hn,formatRelative:fn,localize:pn,match:In,options:{weekStartsOn:1,firstWeekContainsDate:1}},Xn=t=>new Intl.NumberFormat("vi-VN",{style:"currency",currency:"VND"}).format(t),jn=t=>`${t}%`,Qn=t=>yt(new Date(t),"dd-MM-yyyy",{locale:A}),Vn=t=>yt(new Date(t),"HH:mm - dd-MM-yyyy",{locale:A}),Ln=t=>{let e=on(new Date(t),{locale:A,addSuffix:!0});return e=e.replace("khoảng ","").replace("dưới",""),e},Rn=(t,e)=>(t-t*e/100).toFixed(0),An=t=>t.reduce((n,r)=>n+r.price*(1-r.sale/100),0),zn=t=>t.reduce((n,r)=>n+r.price*r.sale/100,0),Gn=t=>t.reduce((n,r)=>n+r.price,0),Jn=({keywords:t})=>{const e=["geekblue","blue","cyan","green","lime","purple","magenta","red","volcano","orange","gold"];return Q.jsx(Q.Fragment,{children:t==null?void 0:t.map((n,r)=>Q.jsx(ut,{className:"my-1",color:e[r%e.length],children:n},r))})},Un=(t,e,n)=>{const r=e.find(a=>a._id===t);return r?r[n]:null};export{Xn as F,ut as T,Gn as a,zn as b,An as c,Qn as d,Jn as e,Un as f,jn as g,Ln as h,Vn as i,Rn as j};
