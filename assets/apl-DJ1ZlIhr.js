import{aT as l}from"./index-CcDScCIj.js";function u(t,r){for(var n=0;n<r.length;n++){const e=r[n];if(typeof e!="string"&&!Array.isArray(e)){for(const a in e)if(a!=="default"&&!(a in t)){const o=Object.getOwnPropertyDescriptor(e,a);o&&Object.defineProperty(t,a,o.get?o:{enumerable:!0,get:()=>e[a]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}var i,p;function c(){if(p)return i;p=1,i=t,t.displayName="apl",t.aliases=[];function t(r){r.languages.apl={comment:/(?:⍝|#[! ]).*$/m,string:{pattern:/'(?:[^'\r\n]|'')*'/,greedy:!0},number:/¯?(?:\d*\.?\b\d+(?:e[+¯]?\d+)?|¯|∞)(?:j¯?(?:(?:\d+(?:\.\d+)?|\.\d+)(?:e[+¯]?\d+)?|¯|∞))?/i,statement:/:[A-Z][a-z][A-Za-z]*\b/,"system-function":{pattern:/⎕[A-Z]+/i,alias:"function"},constant:/[⍬⌾#⎕⍞]/,function:/[-+×÷⌈⌊∣|⍳⍸?*⍟○!⌹<≤=>≥≠≡≢∊⍷∪∩~∨∧⍱⍲⍴,⍪⌽⊖⍉↑↓⊂⊃⊆⊇⌷⍋⍒⊤⊥⍕⍎⊣⊢⍁⍂≈⍯↗¤→]/,"monadic-operator":{pattern:/[\\\/⌿⍀¨⍨⌶&∥]/,alias:"operator"},"dyadic-operator":{pattern:/[.⍣⍠⍤∘⌸@⌺⍥]/,alias:"operator"},assignment:{pattern:/←/,alias:"keyword"},punctuation:/[\[;\]()◇⋄]/,dfn:{pattern:/[{}⍺⍵⍶⍹∇⍫:]/,alias:"builtin"}}}return i}var s=c();const d=l(s),m=u({__proto__:null,default:d},[s]);export{m as a};
