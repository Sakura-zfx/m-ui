!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var n=t();for(var r in n)("object"==typeof exports?exports:e)[r]=n[r]}}("undefined"!=typeof self?self:this,function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=215)}({0:function(e,t,n){"use strict";t.a=function(e,t,n,r,i,u,o,s){var a=typeof(e=e||{}).default;"object"!==a&&"function"!==a||(e=e.default);var f,l="function"==typeof e?e.options:e;t&&(l.render=t,l.staticRenderFns=n,l._compiled=!0);r&&(l.functional=!0);u&&(l._scopeId=u);o?(f=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),i&&i.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(o)},l._ssrRegister=f):i&&(f=s?function(){i.call(this,this.$root.$options.shadowRoot)}:i);if(f)if(l.functional){l._injectStyles=f;var c=l.render;l.render=function(e,t){return f.call(t),c(e,t)}}else{var p=l.beforeCreate;l.beforeCreate=p?[].concat(p,f):[f]}return{exports:e,options:l}}},148:function(e,t,n){"use strict";t.a={name:"m-input",props:{value:[String,Number],type:{type:String,default:"text"},fixed:{type:[String,Number],default:0},placeholder:String,max:{type:Number,default:Number.MAX_VALUE},min:{type:Number,default:Number.MIN_VALUE}},computed:{isNumber:function(){return"number"===this.type},isInt:function(){return 0===this.fixed&&this.isNumber},inputType:function(){return this.isInt?"tel":this.isNumber?"number":"text"}},methods:{handleInput:function(e){var t=e.target.value.trim(),n=this.$refs.input,r=(this.welfareMaxUseNum?Math.min(this.welfareMaxUseNum,this.welfare.restAmount):this.welfare.restAmount)/100;""===t?this.welfareUseNum="":/^\d+(\.{0,1}\d{0,2})$/.test(t)?/^\d+\.$/.test(t)||(Number(t)>r?(n.value=r,this.welfareUseNum=r):(this.welfareUseNum=t,n.value=this.welfareUseNum)):n.value=this.welfareUseNum}}}},215:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(148),i=n(217),u=n(0);var o=function(e){n(216)},s=Object(u.a)(r.a,i.a,i.b,!1,o,null,null);t.default=s.exports},216:function(e,t){},217:function(e,t,n){"use strict";n.d(t,"a",function(){return r}),n.d(t,"b",function(){return i});var r=function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"m-input__wrap"},[t("input",{ref:"input",attrs:{type:this.inputType,placeholder:this.placeholder},domProps:{value:this.value},on:{input:this.handleInput}})])},i=[]}})});