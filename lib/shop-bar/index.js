!function(t,e){if("object"==typeof exports&&"object"==typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var n=e();for(var r in n)("object"==typeof exports?exports:t)[r]=n[r]}}("undefined"!=typeof self?self:this,function(){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:r})},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=281)}({0:function(t,e,n){"use strict";e.a=function(t,e,n,r,o,s,i,c){var a=typeof(t=t||{}).default;"object"!==a&&"function"!==a||(t=t.default);var f,u="function"==typeof t?t.options:t;e&&(u.render=e,u.staticRenderFns=n,u._compiled=!0);r&&(u.functional=!0);s&&(u._scopeId=s);i?(f=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),o&&o.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(i)},u._ssrRegister=f):o&&(f=c?function(){o.call(this,this.$root.$options.shadowRoot)}:o);if(f)if(u.functional){u._injectStyles=f;var l=u.render;u.render=function(t,e){return f.call(e),l(t,e)}}else{var d=u.beforeCreate;u.beforeCreate=d?[].concat(d,f):[f]}return{exports:t,options:u}}},168:function(t,e,n){"use strict";e.a={data:function(){return{}},props:{shopLogo:{type:String,default:n(283)},title:{type:String,default:"",required:!0}}}},281:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(168),o=n(284),s=n(0);var i=function(t){n(282)},c=Object(s.a)(r.a,o.a,o.b,!1,i,null,null);e.default=c.exports},282:function(t,e){},283:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALQAAAC0BAMAAADP4xsBAAAAHlBMVEX3+Pnf4ufo6+7z9fbs7fDh5Ojx8vTj5urt7/Ll6OwlWo1kAAACHUlEQVRo3u2YzU7CQBRGR0GEnQXawk40UZcgGrc1+gA0bnTX+gSgLwAmLtzRhYmPK4SQMpcE789K/c6uUU5n6GGGwQEAAAAAAADANkMxXHM1EJNADfU/Vtfl6qn7y9TuxWRMdSMQM2eqD+TqEVOdy9URU92Tq5tMdSpXh8xAAgUZ83OuILG1Z69vT6M+YqlnGnXH1p69vlSjDnntqcgs7dnrO9Spxwz1QKduMdS3OnWboS506i6rPRWhoT17ffta9TFjY1QyYrSnpKVvz15foVV31e3Z66sHaqbM9vT16dvT15fr1ZF2Y7RvjxO9Ot5trgQG+rr27PU1LOq5rj17fblFHenas9eXWtShqj17fVWbOmF8KVMyFrRXkDczJRsLrU+wWuckARJQJFixq2SUZBadGRklmUXCL6RJZtEakFH2SCH8/TyqkUWCLDFZLtjTc/LEJ77Kv1VMiooEK1/mcjKqwlf5t5rzt4ImSebBuWsSRI+81dzz6JhsaFN/q4jJZ6zDP3/Fy1HclNdt8pXwdTnLieAM9u691FWKzUFvDrvbd96tH38+FUz81bealnfadIWJv8LHjDNpPV2Z1w/lcj0of1qn6we/codT1kn6fPGfX+XjvvpcjOms/PvzYl5Pd2VUH4uxvGSOR2W4+3rY37oGcsqeRpJfSZtQQw011FBDDTXUUENdqgVADTXUUPu8nYi5cAAAAAAAAPwWvgF0KYGeT9eGkwAAAABJRU5ErkJggg=="},284:function(t,e,n){"use strict";n.d(e,"a",function(){return r}),n.d(e,"b",function(){return o});var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"m-shop-bar",on:{click:function(e){t.$emit("on-click")}}},[n("div",{staticClass:"m-shop-bar__left"},[n("img",{staticClass:"m-shop-bar__img",attrs:{src:t.shopLogo}}),t._v(" "),n("span",{staticClass:"m-shop-bar__title"},[t._v(t._s(t.title))])]),t._v(" "),t._m(0)])},o=[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"m-shop-bar__right"},[e("div",{staticClass:"m-shop-bar__btn"},[this._v("进入店铺")])])}]}})});