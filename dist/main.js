!function(e){var t={};function o(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=0)}([function(e,t,o){"use strict";o.r(t);var n=()=>{window.onload=function(){document.body.classList.add("loaded_hiding"),window.setTimeout((function(){document.body.classList.add("loaded"),document.body.classList.remove("loaded_hiding")}),5)}};var r=()=>{const e=document.querySelector(".progress");window.addEventListener("scroll",()=>{(()=>{let t=(document.body.scrollTop||document.documentElement.scrollTop)/(document.documentElement.scrollHeight-document.documentElement.clientHeight)*100;e.style.width=t+"%",e.style.zIndex="5",e.style.background="#f7831e"})()})};var c=()=>{const e=e=>{event.preventDefault();const t=e.href.split("#")[1];document.querySelector("#"+t).scrollIntoView({behavior:"smooth",block:"start",inline:"center"})};(()=>{const t=document.querySelector('a[href="#about"]');t.addEventListener("click",o=>{o.preventDefault(),e(t)})})(),document.body.addEventListener("click",t=>{const o=t.target;(o.closest(".header-logo")||o.closest(".footer-scroll__link"))&&e(o)})};var l=()=>{const e=document.querySelectorAll(".reviews-slider__item"),t=document.querySelector(".reviews-slider__dots"),o=document.querySelector(".reviews-wrapper");for(let o=0;o<e.length;o++)t.insertAdjacentHTML("beforeend",`<li class="dot ${0===o?"dot-active":""}"></li>`);const n=document.querySelectorAll(".dot");let r,c=0;const l=(e,t,o)=>{e[t].classList.remove(o)},d=(e,t,o)=>{e[t].classList.add(o)},i=()=>{l(e,c,"active-slide"),l(n,c,"dot-active"),c++,c>=e.length&&(c=0),d(e,c,"active-slide"),d(n,c,"dot-active")},s=(e=5e3)=>{r=setInterval(i,e)};o.addEventListener("click",t=>{t.preventDefault();const o=t.target;o.matches(".dot")&&(l(e,c,"active-slide"),l(n,c,"dot-active"),o.matches(".dot")&&n.forEach((e,t)=>{e===o&&(c=t)}),c>=e.length?c=0:c<0&&(c=e.length-1),d(e,c,"active-slide"),d(n,c,"dot-active"))}),o.addEventListener("mouseover",e=>{(e.target.matches(".reviews-slider__img")||e.target.matches(".dot"))&&clearInterval(r)}),o.addEventListener("mouseout",e=>{(e.target.matches(".reviews-slider__img")||e.target.matches(".dot"))&&s()}),s()};var d=()=>{const e=document.querySelector(".header-link__phone"),t=document.querySelector(".header-tel"),o=document.querySelector(".header-tel__close"),n=e.getBoundingClientRect(),r=t.getBoundingClientRect();window.innerWidth>1025?(e.addEventListener("click",()=>{t.style.left=n.x+n.width-r.width+"px",t.style.opacity="1"}),o.addEventListener("click",()=>{t.style.opacity="0"})):e.setAttribute("href","tel:+380983536684")};(()=>{const e=document.querySelector(".header"),t=document.querySelector(".main");window.addEventListener("scroll",()=>{t.style.opacity=1+pageYOffset/-700,pageYOffset>50?(e.style.background="#fff",e.style.height="60px",e.style.zIndex="5"):(e.style.background="transparent",e.style.height="80px")})})(),n(),r(),c(),l(),d()}]);