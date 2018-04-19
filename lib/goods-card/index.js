!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var i=t();for(var n in i)("object"==typeof exports?exports:e)[n]=i[n]}}("undefined"!=typeof self?self:this,function(){return function(e){function t(n){if(i[n])return i[n].exports;var o=i[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var i={};return t.m=e,t.c=i,t.d=function(e,i,n){t.o(e,i)||Object.defineProperty(e,i,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var i=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(i,"a",i),i},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=136)}({117:function(e,t,i){"use strict";t.a={name:"goods-card",props:{name:{type:String,required:!0},img:String,num:[String,Number],imgDefault:String,imgHeight:{type:Number,default:80},contentHeight:{type:Number,default:80},mainColor:{type:String,default:"red"},isMainPriceStyle:{type:Boolean,default:!0},cardBg:{type:String,default:"#ffffff"},priceFixed:{type:Number,default:2},price:{type:Number,default:0},isShowCheckbox:{type:Boolean,default:!0},isCheckboxDisable:{type:Boolean,default:!1},spec:String,isCheckboxChecked:Boolean,checkboxIcon:{type:String,default:"icon-cell"},checkboxIconChecked:{type:String,default:"icon-search"}},computed:{imgHeightStyle:function(){return{height:this.imgHeight+"px"}},imgWidthStyle:function(){return{width:this.imgHeight+"px"}},imgLineHeight:function(){return{lineHeight:this.imgHeight-5+"px"}},itemWidthStyle:function(){return{width:this.isShowCheckbox?325/37.5+"rem":"100%"}},mainColorStyle:function(){return{color:this.mainColor}}},data:function(){return{isChecked:this.isCheckboxChecked}},watch:{isCheckboxChecked:function(e){return this.isChecked=e,e}},methods:{genderPrice:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.mainColor,i=Number(e).toFixed(this.priceFixed).split(".");return'<span class="rem-font-10" style="color: '+t+'">¥ <span class="rem-font-16">'+i[0]+"</span>.<span>"+i[1]+"</span></span>"},checkCard:function(){this.isCheckboxDisable||(this.isChecked=!this.isChecked,this.$emit("on-check"))}}}},136:function(e,t,i){"use strict";function n(e){i(137)}Object.defineProperty(t,"__esModule",{value:!0});var o=i(117),r=i(138),s=i(7),c=n,a=Object(s.a)(o.a,r.a,r.b,!1,c,"data-v-a29f49e6",null);t.default=a.exports},137:function(e,t){},138:function(e,t,i){"use strict";i.d(t,"a",function(){return n}),i.d(t,"b",function(){return o});var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"goods-card font-0",style:{background:e.cardBg},on:{click:function(t){e.$emit("on-click")}}},[e.isShowCheckbox?i("div",{staticClass:"goods-card__checkbox ib-middle px-font-16 rem-width-40 text-center",style:[e.imgHeightStyle,e.imgLineHeight],on:{click:e.checkCard}},[i("i",{staticClass:"iconfont",class:(n={"bg-f2":e.isCheckboxDisable},n[e.checkboxIconChecked]=e.isChecked,n[e.checkboxIcon]=!e.isChecked,n),style:e.isChecked?e.mainColorStyle:null})]):e._e(),e._v(" "),i("div",{staticClass:"goods-card__item ib-middle px-font-14 overflow-h px-padding-tb10",style:e.itemWidthStyle},[i("div",{staticClass:"goods-card__img fl px-margin-r10 bg-f2",style:[e.imgWidthStyle,e.imgHeightStyle]},[e.$slots.img?e._t("img"):i("img",{attrs:{src:e.img?e.img:e.imgDefault,width:"100%",height:"100%"}})],2),e._v(" "),i("div",{staticClass:"overflow-h position-r",style:e.imgHeightStyle},[i("p",{staticClass:"goods-card__name"},[e._v(e._s(e.name))]),e._v(" "),i("div",{staticClass:"goods-card__item-info position-a bottom-0 left-0 width-100"},[e.spec?i("p",{staticClass:"color-c999 px-font-12"},[e._v(e._s(e.spec))]):e._e(),e._v(" "),i("div",[i("div",{staticClass:"fr color-c999"},[e._t("right",[e._v("x"+e._s(e.num))])],2),e._v(" "),e.isMainPriceStyle?i("div",{domProps:{innerHTML:e._s(e.genderPrice(e.price))}}):i("span",[e._v("¥ 5.00 元")])])])])])]);var n},o=[]},7:function(e,t,i){"use strict";function n(e,t,i,n,o,r,s,c){e=e||{};var a=typeof e.default;"object"!==a&&"function"!==a||(e=e.default);var d="function"==typeof e?e.options:e;t&&(d.render=t,d.staticRenderFns=i,d._compiled=!0),n&&(d.functional=!0),r&&(d._scopeId=r);var l;if(s?(l=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),o&&o.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(s)},d._ssrRegister=l):o&&(l=c?function(){o.call(this,this.$root.$options.shadowRoot)}:o),l)if(d.functional){d._injectStyles=l;var f=d.render;d.render=function(e,t){return l.call(t),f(e,t)}}else{var u=d.beforeCreate;d.beforeCreate=u?[].concat(u,l):[l]}return{exports:e,options:d}}t.a=n}})});