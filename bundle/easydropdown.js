!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.easydropdown=t():e.easydropdown=t()}(window,function(){return function(e){var t={};function n(o){if(t[o])return t[o].exports;var i=t[o]={i:o,l:!1,exports:{}};return e[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:o})},n.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=70)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(52);function i(e,t,n,o){var i=e(o,n),r=i.maxVisibleItemsOverride>-1?i.maxVisibleItemsOverride:n.behavior.maxVisibleItems,a=o.item.length>r,s=o.sumItemsHeight(r);t.open(s,i.type,a)}t.dispatchOpen=i;var r=i.bind(null,o.default);t.default=r},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(18),i=n(4);t.ArrayStrategy=i.default,t.default=o.default},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return e.reduce(function(e,t){if("string"==typeof t)e.push(t);else{var n=t[0],o=t[1];n&&e.push(o)}return e},[]).join(" ")}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=function(e,t){var n=t.actions,o=t.timers;window.clearTimeout(o.keyingTimeoutId),n.keying(),o.keyingTimeoutId=window.setTimeout(function(){return n.resetKeying()},100),e.disabled=!0,setTimeout(function(){e.disabled=!1,e.focus()})}},function(e,t,n){"use strict";var o;Object.defineProperty(t,"__esModule",{value:!0}),function(e){e.PUSH="PUSH",e.REPLACE="REPLACE"}(o||(o={})),t.default=o},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(){return function(){this.label="",this.value="",this.isDisabled=!1,this.additionalClasses=""}}();t.default=o},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(){this.label="",this.options=[],this.isDisabled=!1}return Object.defineProperty(e.prototype,"totalOptions",{get:function(){return this.options.length},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"hasLabel",{get:function(){return""!==this.label},enumerable:!0,configurable:!0}),e}();t.default=o},function(e,t,n){"use strict";var o;Object.defineProperty(t,"__esModule",{value:!0}),function(e){e.AT_TOP="AT_TOP",e.SCROLLED="SCROLLED",e.AT_BOTTOM="AT_BOTTOM"}(o||(o={})),t.default=o},function(e,t,n){"use strict";var o;Object.defineProperty(t,"__esModule",{value:!0}),function(e){e.CLOSED="CLOSED",e.OPEN_ABOVE="OPEN_ABOVE",e.OPEN_BELOW="OPEN_BELOW"}(o||(o={})),t.default=o},function(e,t,n){"use strict";var o;Object.defineProperty(t,"__esModule",{value:!0}),function(e){e.NONE="NONE",e.FULL="FULL",e.REPLACE="REPLACE",e.INNER="INNER",e.OUTER="OUTER"}(o=t.DomChangeType||(t.DomChangeType={})),t.default=o},function(e,t,n){"use strict";var o;Object.defineProperty(t,"__esModule",{value:!0}),function(e){e.ADD="ADD",e.EDIT="EDIT",e.REMOVE="REMOVE"}(o||(o={})),t.default=o},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var n=t.state,o=t.actions,i=t.dom;n.isOpen&&(o.close(),i.select.blur())}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.UP=38,t.DOWN=40,t.SPACE=32,t.ENTER=13,t.ESC=27},function(e,t,n){"use strict";var o;Object.defineProperty(t,"__esModule",{value:!0}),function(e){e.NONE="NONE",e.TOP="TOP",e.BOTTOM="BOTTOM"}(o||(o={})),t.default=o},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.OPTION='[data-ref~="option"]'},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,n){void 0===n&&(n=!1);var o=e.parentNode;if(n&&e.matches(t))return e;for(;o&&o!==document.body;){if(o.matches&&o.matches(t))return o;if(!o.parentNode)return null;o=o.parentNode}return null}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(62),i=n(61),r=n(60),a=function(){return function(){this.callbacks=new i.default,this.classNames=new r.default,this.behavior=new o.default,Object.seal(this)}}();t.default=a},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.MERGE_ERROR=function(e,t){return void 0===t&&(t=""),'Unknown property "'+e+'"'+(t?'. Did you mean "'+t+'"?':"")},t.TYPE_ERROR_TARGET=function(e){return'[Helpful Merge] Target "'+e+'" must be a valid object'},t.TYPE_ERROR_SOURCE=function(e){return'[Helpful Merge] Source "'+e+'" must be a valid object'},t.INVALID_ARRAY_STRATEGY=function(e){return'[Helpful Merge] Invalid array strategy "'+e+'"'}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(65),i=n(4),r=n(64),a=n(63),s=n(17);function u(e,t,n){void 0===n&&(n=null);var r,l=[];if(r=n instanceof o.default?n:new o.default,"boolean"==typeof n&&!0===n)r.deep=!0;else if(n&&r!==n&&"object"==typeof n&&(u(r,n),[i.default.PUSH,i.default.REPLACE].indexOf(r.arrayStrategy)<0))throw RangeError(s.INVALID_ARRAY_STRATEGY(r.arrayStrategy));if(!e||"object"!=typeof e)throw new TypeError(s.TYPE_ERROR_TARGET(e));if(!t||"object"!=typeof t)throw new TypeError(s.TYPE_ERROR_SOURCE(t));if(Array.isArray(t)){if(r.arrayStrategy===i.default.PUSH)return e.push.apply(e,t),e;for(var d=0;d<t.length;d++)l.push(d.toString())}else l=Object.getOwnPropertyNames(t);for(var c=0,f=l;c<f.length;c++){var p=f[c],h=Object.getOwnPropertyDescriptor(t,p);if(("function"!=typeof h.get||h.set||r.includeReadOnly)&&(h.enumerable||r.includeNonEmurable))if(!r.deep||"object"!=typeof t[p]||null===t[p]||Array.isArray(t[p])&&r.useReferenceIfArray||!e[p]&&r.useReferenceIfTargetUnset)try{e[p]=t[p]}catch(t){a.default(t,e,p,r.errorMessage)}else{if(!Object.prototype.hasOwnProperty.call(e,p)||null===e[p])try{e[p]=Array.isArray(t[p])?[]:{}}catch(t){a.default(t,e,p,r.errorMessage)}u(e[p],t[p],r)}}return e}Object.keys(r.default.prototype).forEach(function(e){return u[e]=function(e){return function(){for(var t,n=[],o=0;o<arguments.length;o++)n[o]=arguments[o];return(t=new r.default)[e].apply(t,n)}}(e)}),t.default=u},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=[]},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(){return function(e){this.open=e.open.bind(e),this.close=e.close.bind(e),this.refresh=e.refresh.bind(e),this.destroy=e.destroy.bind(e),Object.defineProperties(this,{value:{get:function(){return e.value},set:function(t){return e.value=t}}})}}();t.default=o},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(){}return e.prototype.clear=function(){var e=this;Object.keys(this).forEach(function(t){return window.clearInterval(e[t])})},e}();t.default=o},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(1),i=n(16),r=n(8),a=n(7),s=n(6),u=n(5),l=function(){function e(e,t){void 0===e&&(e=null),void 0===t&&(t=new i.default),this.groups=[],this.focusedIndex=-1,this.selectedIndex=-1,this.maxVisibleItemsOverride=-1,this.maxBodyHeight=-1,this.name="",this.placeholder="",this.scrollStatus=a.default.AT_TOP,this.bodyStatus=r.default.CLOSED,this.isDisabled=!1,this.isRequired=!1,this.isInvalid=!1,this.isFocused=!1,this.isUseNativeMode=!1,this.isScrollable=!1,this.isSearching=!1,this.isKeying=!1,this.config=t,e&&(o.default(this,e),this.groups=this.groups.map(function(e){var t=o.default(new s.default,e);return t.options=t.options.map(function(e){return o.default(new u.default,e)}),t}))}return Object.defineProperty(e.prototype,"totalGroups",{get:function(){return this.groups.length},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"lastGroup",{get:function(){return this.groups[this.groups.length-1]},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"totalOptions",{get:function(){return this.groups.reduce(function(e,t){return e+t.totalOptions},0)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"selectedOption",{get:function(){return this.getOptionFromIndex(this.selectedIndex)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"focusedOption",{get:function(){return this.getOptionFromIndex(this.focusedIndex)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"value",{get:function(){return this.selectedOption?this.selectedOption.value:""},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"humanReadableValue",{get:function(){return!this.hasValue&&this.hasPlaceholder||this.config.behavior.showPlaceholderWhenOpen&&this.hasPlaceholder&&this.isOpen?this.placeholder:this.label},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"label",{get:function(){return this.selectedOption?this.selectedOption.label:""},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"hasPlaceholder",{get:function(){return""!==this.placeholder},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"isPlaceholderShown",{get:function(){return this.hasPlaceholder&&!this.hasValue},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"hasValue",{get:function(){return""!==this.value},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"isGrouped",{get:function(){return Boolean(this.groups.find(function(e){return e.hasLabel}))},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"isOpen",{get:function(){return this.bodyStatus!==r.default.CLOSED},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"isClosed",{get:function(){return this.bodyStatus===r.default.CLOSED},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"isOpenAbove",{get:function(){return this.bodyStatus===r.default.OPEN_ABOVE},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"isOpenBelow",{get:function(){return this.bodyStatus===r.default.OPEN_BELOW},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"isAtTop",{get:function(){return this.scrollStatus===a.default.AT_TOP},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"isAtBottom",{get:function(){return this.scrollStatus===a.default.AT_BOTTOM},enumerable:!0,configurable:!0}),e.prototype.getOptionFromIndex=function(e){for(var t=0,n=0,o=this.groups;n<o.length;n++){var i=o[n];if(e<0)break;if(e<=Math.max(0,t+i.totalOptions-1))return i.options[e-t];t+=i.totalOptions}return null},e.prototype.getOptionIndexFromValue=function(e){for(var t=-1,n=0,o=this.groups;n<o.length;n++)for(var i=0,r=o[n].options;i<r.length;i++){if(t++,r[i].value===e)return t}return-1},e}();t.default=l},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=/(ipad|iphone|ipod)/gi.test(e),n=/android/gi.test(e),o=/opera mini/gi.test(e),i=/windows phone/gi.test(e);return!!(t||n||o||i)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(1),i=n(23),r=n(6),a=n(5),s=n(22),u=function(){function e(){}return e.mapFromSelect=function(t,n){var o=new s.default(null,n),r=!1;o.name=t.name,o.isDisabled=t.disabled,o.isRequired=t.required,o.isUseNativeMode=n.behavior.useNativeUiOnMobile&&i.default(window.navigator.userAgent);for(var a=0,u=void 0;u=t.children[a];a++)if(0!==a||null===u.getAttribute("data-placeholder"))if(u instanceof HTMLOptionElement)!1===r&&(o.groups.push(e.mapGroup()),r=!0),o.lastGroup.options.push(e.mapOption(u)),u.selected&&(o.selectedIndex=o.totalOptions-1);else{if(!(u instanceof HTMLOptGroupElement))throw new TypeError('[EasyDropDown] Invalid child tag "'+u.tagName+'" found in provided `<select>` element');r=!0,o.groups.push(e.mapGroup(u));for(var l=0,d=void 0;d=u.children[l];l++)o.lastGroup.options.push(e.mapOption(d,u)),d.selected&&(o.selectedIndex=o.totalOptions-1);r=!1}else o.placeholder=u.textContent,u.value="";return Object.seal(o)},e.mapGroup=function(e){return void 0===e&&(e=null),o.default(new r.default,{label:e?e.label:"",isDisabled:!!e&&e.disabled})},e.mapOption=function(e,t){if(void 0===t&&(t=null),!(e instanceof HTMLOptionElement))throw new TypeError("[EasyDropDown] Invalid markup structure");var n=null!==t&&t.disabled;return o.default(new a.default,{label:e.textContent,value:e.value,additionalClasses:e.getAttribute("data-additional-classes"),isDisabled:e.disabled||n})},e}();t.default=u},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(13),i=n(8),r=n(7);t.default=function(e){return{focus:function(){e.isFocused=!0},blur:function(){e.isFocused=!1},invalidate:function(){e.isInvalid=!0},validate:function(){e.isInvalid=!1},topOut:function(){e.scrollStatus=r.default.AT_TOP},bottomOut:function(){e.scrollStatus=r.default.AT_BOTTOM},scroll:function(){e.scrollStatus=r.default.SCROLLED},makeScrollable:function(){e.isScrollable=!0},makeUnscrollable:function(){e.isScrollable=!1},open:function(t,n,r){if(!e.isDisabled){switch(this.closeOthers(),n){case o.default.NONE:case o.default.TOP:e.bodyStatus=i.default.OPEN_BELOW;break;case o.default.BOTTOM:e.bodyStatus=i.default.OPEN_ABOVE}e.isScrollable=r,e.maxBodyHeight=t,this.scrollToView(e,!0)}},close:function(){e.bodyStatus=i.default.CLOSED,e.focusedIndex=-1},selectOption:function(t){var n=e.getOptionFromIndex(t);t>-1&&(!n||n.isDisabled)||(e.selectedIndex=t,e.isInvalid&&this.validate(),e.isSearching?this.scrollToView(e):this.close())},focusOption:function(t,n){void 0===n&&(n=!1);var o=Math.abs(t-e.focusedIndex)>1;e.focusedIndex=t,n&&this.scrollToView(e,o)},search:function(){e.isSearching=!0},resetSearch:function(){e.isSearching=!1},keying:function(){e.isKeying=!0},resetKeying:function(){e.isKeying=!1},useNative:function(){e.isUseNativeMode=!0}}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(1),i=n(25),r=function(){function e(){}return e.proxyActions=function(t,n,r){var a=e.createStateProxy(t,r),s=i.default(a);return o.default(s,n),s},e.createStateProxy=function(t,n){return Object.seal(e.getPropertyDescriptorsFromValue(t,n).reduce(function(e,t){var n=t.key,o=t.get,i=t.set;return Object.defineProperty(e,n,{enumerable:!0,get:o,set:i})},{}))},e.getPropertyDescriptorsFromValue=function(t,n){var o=Object.getPrototypeOf(t);return Object.keys(t).concat(Object.keys(o)).reduce(function(i,r){var a="function"==typeof(Object.getOwnPropertyDescriptor(t,r)||Object.getOwnPropertyDescriptor(o,r)).get;return i.push({get:e.readPropertyValue.bind(null,t,r),set:a?void 0:e.updatePropertyValue.bind(null,t,r,n),key:r}),i},[])},e.readPropertyValue=function(e,t){return e[t]},e.updatePropertyValue=function(e,t,n,o){e[t]!==o&&(e[t]=o,n(e,t))},e}();t.default=r},function(e,t,n){"use strict";function o(e,t,n,o,i){var r;return t<e?t-i:(r=t+n-(e+o))>0?e+r+i:e}Object.defineProperty(t,"__esModule",{value:!0}),t.getScrollTop=o,t.default=function(e,t,n,i){void 0===i&&(i=!1);var r=Math.max(0,n.focusedIndex>-1?n.focusedIndex:n.selectedIndex),a=e.option[r];if(a){var s=i?n.maxBodyHeight/2-a.offsetHeight/2:0,u=o(e.itemsList.scrollTop,a.offsetTop,a.offsetHeight,n.maxBodyHeight,s);u!==e.itemsList.scrollTop&&(e.itemsList.scrollTop=u)}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){for(var n=0,o=t;n<o.length;n++){var i=o[n];i!==e&&i.actions.close()}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=300;t.default=function(e,t,n){var i=e.outerHTML;return window.setInterval(function(){var o=e.outerHTML;o===i||t.isKeying||n(),i=o},o)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=100;t.default=function(e,t,n){var i=e.value;return window.setInterval(function(){if(e.value!==i){var o=t.getOptionIndexFromValue(e.value);n.selectOption(o),n.focusOption(o,!0)}i=e.value},o)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(10),i=n(9);function r(e,t){var n=window.requestAnimationFrame;t.forEach(function(t){n&&["class","style"].indexOf(t.name)>-1?n(function(){return a(e,t)}):a(e,t)})}function a(e,t){switch(t.type){case o.default.ADD:case o.default.EDIT:e.setAttribute(t.name,t.value);break;case o.default.REMOVE:e.removeAttribute(t.name)}}t.default=function e(t,n){switch(n.type){case i.default.NONE:return t;case i.default.REPLACE:return t.parentElement.replaceChild(n.newNode,t),n.newNode;case i.default.INNER:return t instanceof Text?t.textContent=n.newTextContent:n.childCommands.length>0?n.childCommands.forEach(function(n,o){return e(t.childNodes[o],n)}):t.innerHTML=n.newInnerHtml,t;case i.default.OUTER:return r(t,n.attributeChanges),t;case i.default.FULL:return n.childCommands.length>0?n.childCommands.forEach(function(n,o){return e(t.childNodes[o],n)}):t.innerHTML=n.newInnerHtml,r(t,n.attributeChanges),t}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(){return function(){this.newNode=null,this.newInnerHtml="",this.newTextContent="",this.attributeChanges=[],this.childCommands=[],this.index=null}}();t.default=o},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(1),i=n(10),r=n(9),a=n(32);function s(e,t){for(var n=Math.max(e.attributes.length,t.attributes.length),o={},a=[],s=0;s<n;s++){var u=e.attributes[s],l=t.attributes[s];u&&void 0===o[u.name]&&(o[u.name]=[]),l&&void 0===o[l.name]&&(o[l.name]=[]),u&&(o[u.name][0]=u.value),l&&(o[l.name][1]=l.value)}var d=Object.keys(o);d.length>1&&d.sort();s=0;for(var c=void 0;c=d[s];s++){var f=o[c],p={type:null,name:c,value:null};f[0]!==f[1]&&(void 0===f[0]?(p.type=i.default.ADD,p.value=f[1]):void 0===f[1]?(p.type=i.default.REMOVE,p.value=""):(p.type=i.default.EDIT,p.value=f[1]),a.push(p))}return{type:r.default.OUTER,attributeChanges:a}}t.default=function e(t,n){var i=-1,u=new a.default;if(t instanceof HTMLSelectElement)return u.type=r.default.NONE,u;if(t instanceof Text&&n instanceof Text)t.textContent===n.textContent?u.type=r.default.NONE:(u.type=r.default.INNER,u.newTextContent=n.textContent);else if(t instanceof HTMLElement&&n instanceof HTMLElement)if(t.tagName!==n.tagName)u.type=r.default.REPLACE,u.newNode=n;else if(t.outerHTML===n.outerHTML)u.type=r.default.NONE;else if(t.innerHTML===n.innerHTML)o.default(u,s(t,n));else if(o.default(u,s(t,n)),u.attributeChanges.length>0?u.type=r.default.FULL:u.type=r.default.INNER,(i=t.childNodes.length)>0&&i===n.childNodes.length)for(var l=0,d=void 0;d=t.childNodes[l];l++)u.childCommands.push(e(d,n.childNodes[l]));else u.newInnerHtml=n.innerHTML;else u.type=r.default.REPLACE,u.newNode=n;return u}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(){this.select=null,this.root=null,this.head=null,this.value=null,this.body=null,this.arrow=null,this.itemsList=null,this.item=[],this.group=[],this.option=[]}return e.prototype.sumItemsHeight=function(e){void 0===e&&(e=1/0);for(var t=0,n=0,o=void 0;(o=this.item[n])&&n!==e;n++)t+=o.offsetHeight;return t},e}();t.default=o},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=document.createElement("div");return t.innerHTML=e,t.firstElementChild}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=function(e,t){var n=e.selectedOption;return'\n        <div\n            class="'+t.value+" "+(n?n.additionalClasses:"")+'"\n            data-selected="'+(e.selectedOption?e.selectedOption.label:void 0)+'"\n            data-ref="value"\n            '+(e.isPlaceholderShown?'aria-placeholder="'+e.humanReadableValue+'"':"")+"\n        >\n            "+e.humanReadableValue+"\n        </div>\n    "}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=function(e,t){return'<div class="'+t.arrow+'" role="presentation"></div>'}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(37),i=n(36);t.default=function(e,t){return'\n    <div class="'+t.head+'" data-ref="head">\n        '+i.default(e,t)+"\n        "+o.default(e,t)+'\n        <select class="'+t.select+'" data-ref="select"></select>\n    </div>\n'}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(2);t.default=function(e,t,n){var i=t.selectedOption===e;return'\n        <div\n            class="'+o.default([n.option,e.additionalClasses||"",[i,n.optionSelected],[e===t.focusedOption,n.optionFocused],[e.isDisabled,n.optionDisabled]])+'"\n            data-ref="option item"\n            role="option"\n            title="'+e.label+'"\n            '+(i?'aria-selected="true"':"")+"\n            "+(e.isDisabled?'aria-disabled="true"':"")+"\n            >\n                "+e.label+"\n        </div>\n    "}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(2),i=n(39);t.default=function(e,t,n){return'\n        <div class="'+o.default([n.group,[e.isDisabled,n.groupDisabled],[e.hasLabel,n.groupHasLabel]])+'" data-ref="group" role="group">\n            '+(e.hasLabel?'<div class="'+n.groupLabel+'" data-ref="item">'+e.label+"</div>":"")+"\n            "+e.options.map(function(e){return i.default(e,t,n)}).join("")+"\n        </div>\n    "}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(2),i=n(40);t.default=function(e,t){var n=o.default([t.body,[e.isAtTop,t.bodyAtTop],[e.isAtBottom,t.bodyAtBottom],[e.isScrollable,t.bodyScrollable]]),r=e.isOpen?'style="max-height: '+e.maxBodyHeight+'px;"':"";return'\n        <div\n            class="'+n+'"\n            data-ref="body"\n            role="listbox"\n            '+(e.isOpen?"":"aria-hidden")+'\n        >\n            <div class="'+t.itemsList+'"\n                data-ref="itemsList"\n                '+r+">\n                "+e.groups.map(function(n){return i.default(n,e,t)}).join("")+"\n            </div>\n            <div class="+t.gradientTop+' role="presentation"></div>\n            <div class='+t.gradientBottom+' role="presentation"></div>\n        </div>\n    '}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(2),i=n(41),r=n(38);t.default=function(e,t){return'\n        <div\n            class="'+o.default([t.root,[e.isDisabled,t.rootDisabled],[e.isInvalid,t.rootInvalid],[e.isOpen,t.rootOpen],[e.isFocused,t.rootFocused],[e.hasValue,t.rootHasValue],[e.isOpenAbove,t.rootOpenAbove],[e.isOpenBelow,t.rootOpenBelow],[e.isUseNativeMode,t.rootNative]])+'"\n            role="widget combobox"\n            aria-haspopup="listbox"\n            '+(e.isOpen?'aria-expanded="true"':"")+"\n            "+(e.isRequired?'aria-required="true"':"")+"\n            "+(e.isDisabled?'aria-disabled="true"':"")+"\n            "+(e.isInvalid?'aria-invalid="true"':"")+"\n        >\n            "+r.default(e,t)+"\n            "+(e.isUseNativeMode?"":i.default(e,t))+"\n        </div>\n    "}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(42),i=n(35),r=n(34),a=n(33),s=n(31),u=function(){function e(e){this.dom=new r.default,this.classNames=e}return e.prototype.render=function(t,n){var a=o.default(t,this.classNames),s=i.default(a);return this.dom=new r.default,this.dom.root=s,this.dom.option.length=this.dom.group.length=0,e.queryDomRefs(this.dom),this.injectSelect(n),this.dom},e.prototype.update=function(e,t){var n=o.default(e,this.classNames),r=i.default(n),u=a.default(this.dom.root,r);s.default(this.dom.root,u),"selectedIndex"===t&&this.syncSelectWithValue(e.value)},e.prototype.destroy=function(){this.dom.select.classList.remove(this.classNames.select);try{this.dom.root.parentElement.replaceChild(this.dom.select,this.dom.root)}catch(e){}},e.prototype.injectSelect=function(e){var t=e.parentElement,n=this.dom.select;if(!t)throw new Error("[EasyDropDown] The provided `<select>` element must exist within a document");t.replaceChild(this.dom.root,e),n.parentElement.replaceChild(e,n),e.className=this.classNames.select,e.setAttribute("aria-hidden","true"),this.dom.select=e},e.prototype.syncSelectWithValue=function(e){if(this.dom.select.value!==e){var t=new CustomEvent("change",{bubbles:!0});this.dom.select.value=e,this.dom.select.dispatchEvent(t)}},e.queryDomRefs=function(e,t){return void 0===t&&(t=Object.keys(e)),t.reduce(function(e,t){var n='[data-ref~="'+t+'"]',o=e.root.querySelectorAll(n);if(o.length<1||"root"===t)return e;var i=o[0],r=e[t];return null===r?e[t]=i:Array.isArray(r)&&Array.prototype.push.apply(r,o),e},e)},e}();t.default=u},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(12),i=1200;t.default=function(e,t,n){var r=e.keyCode,a=t.actions,s=t.timers,u=t.state;void 0===n&&(n=i),u.isUseNativeMode||[o.UP,o.DOWN].includes(r)||(window.clearTimeout(s.searchTimeoutId),a.search(),s.searchTimeoutId=window.setTimeout(function(){return a.resetSearch()},n))}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(0),i=n(3);t.default=function(e,t){var n=e.metaKey,r=e.target,a=t.state,s=t.config,u=t.dom,l=t.actions,d=a.focusedIndex>-1?a.focusedIndex:a.selectedIndex,c=0,f=1;e.preventDefault(),i.default(r,t),n&&(f=Math.round(Math.max(a.totalOptions/2,s.behavior.maxVisibleItems)));do{d-=f,f=1,d<0&&(d=s.behavior.loop?a.totalOptions-1:0),l.focusOption(d,!0),c++}while(a.focusedOption&&a.focusedOption.isDisabled&&c<a.totalOptions);a.isClosed&&o.default(l,s,u)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(0),i=n(3);t.default=function(e,t){var n=e.metaKey,r=e.target,a=t.state,s=t.dom,u=t.actions,l=t.config,d=a.focusedIndex>-1?a.focusedIndex:a.selectedIndex,c=0,f=1;e.preventDefault(),i.default(r,t),n&&(f=Math.round(Math.max(a.totalOptions/2,l.behavior.maxVisibleItems)));do{d+=f,f=1,d>=a.totalOptions&&(d=l.behavior.loop?0:a.totalOptions-1),u.focusOption(d,!0),c++}while(a.focusedOption&&a.focusedOption.isDisabled&&c<=a.totalOptions);a.isClosed&&o.default(u,l,s)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(0),i=n(3),r=n(12),a=n(46),s=n(45);t.default=function(e,t){var n=e.keyCode,u=e.target,l=t.state,d=t.actions,c=t.dom,f=t.config;if(!l.isUseNativeMode&&!l.isDisabled)switch(n){case r.DOWN:a.default(e,t);break;case r.UP:s.default(e,t);break;case r.SPACE:if(l.isSearching)return void e.stopPropagation();case r.ENTER:e.stopPropagation(),e.preventDefault(),i.default(u,t),l.isOpen?d.selectOption(l.focusedIndex):o.default(d,f,c);break;case r.ESC:d.close()}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var n=t.actions;t.config,t.dom,n.invalidate()}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(0);t.default=function(e,t){var n=t.actions,i=t.config,r=t.dom,a=t.state;n.focus(),i.behavior.openOnFocus&&!a.isUseNativeMode&&o.default(n,i,r)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var n=t.actions;t.state.isKeying||n.blur()}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){t.state;var n=t.actions,o=t.dom;e.stopPropagation();var i=o.itemsList,r=i.offsetHeight,a=i.scrollHeight,s=i.scrollTop;0===s?n.topOut():s===a-r?n.bottomOut():n.scroll()}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(13),i=10;function r(e,t,n,i){var r=o.default.NONE,a=-1;if(e<=n&&t<=n){var s=Math.max(t,e);r=e<t?o.default.TOP:o.default.BOTTOM,a=Math.floor(s/i)}else e<=n?r=o.default.TOP:t<=n&&(r=o.default.BOTTOM);return{type:r,maxVisibleItemsOverride:a}}t.mapCollisionData=r,t.default=function(e,t){var n=e.head.getBoundingClientRect(),a=window.innerHeight,s=n.top-i,u=a-n.bottom-i;if(e.option.length<1)return{type:o.default.NONE,maxVisibleItemsOverride:-1};var l=Math.min(t.behavior.maxVisibleItems,e.item.length);return r(s,u,e.sumItemsHeight(l),e.sumItemsHeight(1))}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(0);t.default=function(e,t){var n=t.state,i=t.actions,r=t.dom,a=t.config;n.isUseNativeMode||(e.stopPropagation(),n.isClosed?(o.default(i,a,r),r.select.focus()):i.close())}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(15),i=n(14);t.default=function(e,t){var n=t.state,r=t.actions,a=t.dom;e.stopPropagation();var s=o.default(e.target,i.OPTION,!0);if(s&&!n.isKeying){var u=Array.prototype.indexOf.call(a.option,s);r.focusOption(u)}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(15),i=n(14);t.default=function(e,t){t.state;var n=t.actions,r=t.dom;e.stopPropagation();var a=o.default(e.target,i.OPTION,!0);if(a){var s=Array.prototype.indexOf.call(r.option,a);n.selectOption(s)}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(55),i=n(54),r=n(53),a=n(51),s=n(50),u=n(49),l=n(48),d=n(47),c=n(44),f=n(11),p=n(11);t.default=function(e){return[{target:e.head,type:"click",handler:r.default},{target:e.body,type:"click",handler:o.default},{target:e.body,type:"mouseover",handler:i.default},{target:e.itemsList,type:"scroll",handler:a.default},{target:e.select,type:"keydown",handler:d.default},{target:e.select,type:"invalid",handler:l.default},{target:e.select,type:"keypress",handler:c.default},{target:e.select,type:"focus",handler:u.default},{target:e.select,type:"blur",handler:s.default},{target:document.documentElement,type:"click",handler:f.default},{target:window,type:"resize",handler:p.default,throttle:100}]}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(1),i=function(){function e(e){this.type="",this.target=null,this.debounce=0,this.throttle=0,this.handler=null,this.boundHandler=null,this.passive=!1,o.default(this,e),Object.seal(this)}return e.prototype.unbind=function(){this.target&&this.target.removeEventListener(this.type,this.boundHandler)},e}();t.default=i},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var n=null,o=-1/0;return function(){for(var i=this,r=[],a=0;a<arguments.length;a++)r[a]=arguments[a];var s=Date.now(),u=function(){n=null,e.apply(i,r),o=s},l=s-o;l>=t?u():(clearTimeout(n),n=setTimeout(u,t-l))}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(58),i=n(57),r=n(56);function a(e,t){var n=new i.default(t);if(!n.target)return n;var r=function(t){return n.handler(t,e)};return n.throttle>0?n.boundHandler=o.default(r,n.throttle):n.boundHandler=r,n.target.addEventListener(n.type,n.boundHandler),n}t.bindEvent=a,t.default=function(e){return r.default(e.dom).map(a.bind(null,e))}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(){return function(){this.root="edd-root",this.rootOpen="edd-root-open",this.rootOpenAbove="edd-root-open-above",this.rootOpenBelow="edd-root-open-below",this.rootDisabled="edd-root-disabled",this.rootInvalid="edd-root-invalid",this.rootFocused="edd-root-focused",this.rootHasValue="edd-root-has-value",this.rootNative="edd-root-native",this.gradientTop="edd-gradient-top",this.gradientBottom="edd-gradient-bottom",this.head="edd-head",this.value="edd-value",this.arrow="edd-arrow",this.select="edd-select",this.body="edd-body",this.bodyScrollable="edd-body-scrollable",this.bodyAtTop="edd-body-at-top",this.bodyAtBottom="edd-body-at-bottom",this.itemsList="edd-items-list",this.group="edd-group",this.groupDisabled="edd-group-disabled",this.groupHasLabel="edd-group-has-label",this.groupLabel="edd-group-label",this.option="edd-option",this.optionDisabled="edd-option-disabled",this.optionFocused="edd-option-focused",this.optionSelected="edd-option-selected",Object.seal(this)}}();t.default=o},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(){return function(){this.onOpen=null,this.onClose=null,this.onSelect=null,Object.seal(this)}}();t.default=o},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(){return function(){this.showPlaceholderWhenOpen=!1,this.openOnFocus=!1,this.closeOnSelect=!1,this.useNativeUiOnMobile=!0,this.loop=!1,this.clampMaxVisibleItems=!0,this.liveUpdates=!1,this.maxVisibleItems=15,Object.seal(this)}}();t.default=o},function(e,t,n){"use strict";function o(e,t){for(var n=e.length>t.length?e:t,o=n===e?t:e,i=0,r=0,a=0,s=-1;i<n.length;i++){for(;0===a&&n[i]!==o[r]&&r<o.length;)r++;if(n[i]===o[r]){if(s!==i-1&&(a=0),s=i,r++,++a===o.length)break}else{if(a>1)break;a=r=0}}s=-1;for(var u=0,l=0,d=0,c=n.length-1,f=o.length-1;u<n.length-i;u++){for(;0===d&&n[c-u]!==o[f-l]&&l<o.length;)l++;if(n[c-u]===o[f-l])s!==u-1&&(d=0),s=u,d++,l++;else{if(d>1)break;d=l=0}}return Math.min(o.length,a+d)}Object.defineProperty(t,"__esModule",{value:!0}),t.getTotalMatching=o,t.default=function(e,t,n,i){if(Object.hasOwnProperty.call(t,n)||!Object.isSealed(t)||Object.isExtensible(t)||!(e instanceof TypeError))throw e;var r=function(e,t,n,i){var r=o(i.toLowerCase(),e),a=Math.abs(i.length-t.length);return r>n.totalMatching||r===n.totalMatching&&a<n.delta?{key:i,delta:a,totalMatching:r}:n}.bind(null,n,n.toLowerCase()),a={key:"",delta:1/0,totalMatching:0},s=Object.keys(t).reduce(r,a),u=s&&s.totalMatching>1?s.key:"";throw new TypeError(i(n,u))}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(18),i=function(){function e(){this.target=null,this.sources=[],this.config={}}return e.prototype.to=function(e){return this.target=e,this},e.prototype.from=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return this.sources=e,this},e.prototype.with=function(e){return this.config=e,this},e.prototype.exec=function(){var e=this;return this.sources.reduce(function(t,n){return o.default(t,n,e.config)},this.target||{})},e}();t.default=i},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(4),i=n(17),r=function(){return function(){this.deep=!1,this.useReferenceIfTargetUnset=!1,this.useReferenceIfArray=!1,this.includeReadOnly=!1,this.includeNonEmurable=!1,this.arrayStrategy=o.default.REPLACE,this.errorMessage=i.MERGE_ERROR,Object.seal(this)}}();t.default=r},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(1),i=n(16),r=n(59),a=n(43),s=n(0),u=n(30),l=n(29),d=n(28),c=n(27),f=n(26),p=n(24),h=n(19),v=n(21),b=function(){function e(e,t){this.config=o.default(new i.default,t,!0),this.state=p.default.mapFromSelect(e,this.config),this.renderer=new a.default(this.config.classNames),this.dom=this.renderer.render(this.state,e),this.timers=new v.default,this.actions=f.default.proxyActions(this.state,{closeOthers:d.default.bind(null,this,h.default),scrollToView:c.default.bind(null,this.dom,this.timers)},this.handleStateUpdate.bind(this)),this.eventBindings=r.default({actions:this.actions,config:this.config,dom:this.dom,state:this.state,timers:this.timers}),this.timers.pollChangeIntervalId=u.default(this.dom.select,this.state,this.actions),this.config.behavior.liveUpdates&&(this.timers.pollMutationIntervalId=l.default(this.dom.select,this.state,this.refresh.bind(this)))}return Object.defineProperty(e.prototype,"selectElement",{get:function(){return this.dom.select},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"value",{get:function(){return this.state.value},set:function(e){if("string"!=typeof e)throw new TypeError("[EasyDropDown] Provided value not a valid string");this.dom.select.value=e},enumerable:!0,configurable:!0}),e.prototype.open=function(){s.default(this.actions,this.config,this.dom)},e.prototype.close=function(){this.actions.close()},e.prototype.refresh=function(){this.state=o.default(this.state,p.default.mapFromSelect(this.dom.select,this.config)),this.renderer.update(this.state),this.dom.group.length=this.dom.option.length=this.dom.item.length=0,a.default.queryDomRefs(this.dom,["group","option","item"])},e.prototype.destroy=function(){this.timers.clear(),this.eventBindings.forEach(function(e){return e.unbind()}),this.renderer.destroy();var e=h.default.indexOf(this);h.default.splice(e,1)},e.prototype.handleStateUpdate=function(e,t){var n,o=this.config.callbacks;switch(this.renderer.update(e,t),t){case"bodyStatus":"function"==typeof(n=e.isOpen?o.onOpen:o.onClose)&&n();break;case"selectedIndex":"function"==typeof(n=o.onSelect)&&n(e.value)}},e}();t.default=b},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(19),i=n(66),r=n(20);function a(e,t){void 0===t&&(t={});var n=e;if("string"==typeof e&&(n=document.querySelector(e)),!(n instanceof HTMLSelectElement))throw new TypeError("[EasyDropDown] Invalid select element provided");if(n.multiple)throw new Error("[EasyDropDown] EasyDropDown does not support the `multiple` attribute on select elements.");for(var a=0,s=o.default;a<s.length;a++){var u=s[a];if(u.selectElement===n)return new r.default(u)}var l=new i.default(n,t);return o.default.push(l),new r.default(l)}var s,u=((s=a).all=function(e){void 0===e&&(e={});var t=document.querySelectorAll("select");Array.prototype.forEach.call(t,function(t){return a(t,e)})},s.destroy=function(){o.default.slice().forEach(function(e){return e.destroy()})},s);t.default=u},function(e,t){Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector)},function(e,t){try{var n=new window.CustomEvent("test");if(n.preventDefault(),!0!==n.defaultPrevented)throw new Error("Could not prevent default")}catch(e){var o=function(e,t){var n,o;return t=t||{bubbles:!1,cancelable:!1,detail:void 0},(n=document.createEvent("CustomEvent")).initCustomEvent(e,t.bubbles,t.cancelable,t.detail),o=n.preventDefault,n.preventDefault=function(){o.call(this);try{Object.defineProperty(this,"defaultPrevented",{get:function(){return!0}})}catch(e){this.defaultPrevented=!0}},n};o.prototype=window.Event.prototype,window.CustomEvent=o}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n(69),n(68);var o=n(67);e.exports=o.default}])});
//# sourceMappingURL=easydropdown.js.map