var p=Object.create;var d=Object.defineProperty;var v=Object.getOwnPropertyDescriptor;var m=Object.getOwnPropertyNames;var $=Object.getPrototypeOf,h=Object.prototype.hasOwnProperty;var w=(e,r)=>()=>(r||e((r={exports:{}}).exports,r),r.exports);var b=(e,r,o,c)=>{if(r&&typeof r=="object"||typeof r=="function")for(let s of m(r))!h.call(e,s)&&s!==o&&d(e,s,{get:()=>r[s],enumerable:!(c=v(r,s))||c.enumerable});return e};var x=(e,r,o)=>(o=e!=null?p($(e)):{},b(r||!e||!e.__esModule?d(o,"default",{value:e,enumerable:!0}):o,e));var u=w((B,i)=>{var E=require("fs"),f=require("path"),O=require("os"),j=/(?:^|^)\s*(?:export\s+)?([\w.-]+)(?:\s*=\s*?|:\s+?)(\s*'(?:\\'|[^'])*'|\s*"(?:\\"|[^"])*"|\s*`(?:\\`|[^`])*`|[^#\r\n]+)?\s*(?:#.*)?(?:$|$)/mg;function N(e){let r={},o=e.toString();o=o.replace(/\r\n?/mg,`
`);let c;for(;(c=j.exec(o))!=null;){let s=c[1],n=c[2]||"";n=n.trim();let t=n[0];n=n.replace(/^(['"`])([\s\S]*)\1$/mg,"$2"),t==='"'&&(n=n.replace(/\\n/g,`
`),n=n.replace(/\\r/g,"\r")),r[s]=n}return r}function a(e){console.log(`[dotenv][DEBUG] ${e}`)}function S(e){return e[0]==="~"?f.join(O.homedir(),e.slice(1)):e}function q(e){let r=f.resolve(process.cwd(),".env"),o="utf8",c=Boolean(e&&e.debug),s=Boolean(e&&e.override);e&&(e.path!=null&&(r=S(e.path)),e.encoding!=null&&(o=e.encoding));try{let n=l.parse(E.readFileSync(r,{encoding:o}));return Object.keys(n).forEach(function(t){Object.prototype.hasOwnProperty.call(process.env,t)?(s===!0&&(process.env[t]=n[t]),c&&a(s===!0?`"${t}" is already defined in \`process.env\` and WAS overwritten`:`"${t}" is already defined in \`process.env\` and was NOT overwritten`)):process.env[t]=n[t]}),{parsed:n}}catch(n){return c&&a(`Failed to load ${r} ${n.message}`),{error:n}}}var l={config:q,parse:N};i.exports.config=l.config;i.exports.parse=l.parse;i.exports=l});var g=x(u());console.log(process.env.NODE_ENV);console.log(g.default.config());console.log(456789);
