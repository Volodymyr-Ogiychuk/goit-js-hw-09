var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},o=e.parcelRequire7bc7;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in n){var o=n[e];delete n[e];var i={id:e,exports:{}};return t[e]=i,o.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){n[e]=t},e.parcelRequire7bc7=o);var i=o("iQIUW");const r=document.querySelector(".form");let l={delay:r.elements.delay.value,step:r.elements.step.value,amount:r.elements.amount.value};r.addEventListener("input",(e=>{const{name:t,value:n}=e.target;l[t]=n}));function a(e,t){return new Promise(((n,o)=>{setTimeout((()=>{Math.random()>.3?n({position:e,delay:t}):o({position:e,delay:t})}),t)}))}r.addEventListener("submit",(e=>{e.preventDefault();let t=Number(l.delay),n=Number(l.step),o=Number(l.amount);for(let e=1;e<=o;e+=1)a(e,t).then((({position:e,delay:t})=>{i.Notify.success(`✅ Fulfilled promise ${e} in ${t}ms`)})).catch((({position:e,delay:t})=>{i.Notify.failure(`❌ Rejected promise ${e} in ${t}ms`)})),t+=n}));
//# sourceMappingURL=03-promises.af938f37.js.map
