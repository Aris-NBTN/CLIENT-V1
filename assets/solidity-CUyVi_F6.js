import{aT as u}from"./index-CcDScCIj.js";function d(t,e){for(var o=0;o<e.length;o++){const r=e[o];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const a=Object.getOwnPropertyDescriptor(r,i);a&&Object.defineProperty(t,i,a.get?a:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}var n,s;function c(){if(s)return n;s=1,n=t,t.displayName="solidity",t.aliases=["sol"];function t(e){e.languages.solidity=e.languages.extend("clike",{"class-name":{pattern:/(\b(?:contract|enum|interface|library|new|struct|using)\s+)(?!\d)[\w$]+/,lookbehind:!0},keyword:/\b(?:_|anonymous|as|assembly|assert|break|calldata|case|constant|constructor|continue|contract|default|delete|do|else|emit|enum|event|external|for|from|function|if|import|indexed|inherited|interface|internal|is|let|library|mapping|memory|modifier|new|payable|pragma|private|public|pure|require|returns?|revert|selfdestruct|solidity|storage|struct|suicide|switch|this|throw|using|var|view|while)\b/,operator:/=>|->|:=|=:|\*\*|\+\+|--|\|\||&&|<<=?|>>=?|[-+*/%^&|<>!=]=?|[~?]/}),e.languages.insertBefore("solidity","keyword",{builtin:/\b(?:address|bool|byte|u?int(?:8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?|string|bytes(?:[1-9]|[12]\d|3[0-2])?)\b/}),e.languages.insertBefore("solidity","number",{version:{pattern:/([<>]=?|\^)\d+\.\d+\.\d+\b/,lookbehind:!0,alias:"number"}}),e.languages.sol=e.languages.solidity}return n}var l=c();const y=u(l),g=d({__proto__:null,default:y},[l]);export{g as s};
