function e(){return`#${Math.floor(16777215*Math.random()).toString(16)}`}const t=document.querySelector("body"),o=document.querySelector("[data-start]"),l=document.querySelector("[data-stop]");console.log("btnStart",o),console.log("btnStop",l);let r=null;l.setAttribute("disabled",!0),o.addEventListener("click",(function(n){l.removeAttribute("disabled"),o.setAttribute("disabled",!0),t.style.backgroundColor=e(),r=setInterval((()=>{t.style.backgroundColor=e()}),1e3),console.log(t.style.backgroundColor),l.addEventListener("click",(function e(){clearInterval(r),l.setAttribute("disabled",!0),o.removeAttribute("disabled"),l.removeEventListener("click",e)}))})),setTimeout((()=>{console.log("Second log")}),2e3);
//# sourceMappingURL=01-color-switcher.e427b269.js.map