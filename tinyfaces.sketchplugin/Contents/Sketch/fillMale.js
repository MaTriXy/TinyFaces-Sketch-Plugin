var that=this;function __skpm_run(e,t){that.context=t;var n=function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s="./src/menu/fillMale.js")}({"./node_modules/@skpm/timers/immediate.js":
/*!************************************************!*\
  !*** ./node_modules/@skpm/timers/immediate.js ***!
  \************************************************/
/*! no static exports found */function(e,t,n){var r=n(/*! ./timeout */"./node_modules/@skpm/timers/timeout.js");e.exports={setImmediate:function(e,t,n,i,o,a,s,c,u,l,f){return r.setTimeout(e,0,t,n,i,o,a,s,c,u,l,f)},clearImmediate:function(e){return r.clearTimeout(e)}}},"./node_modules/@skpm/timers/test-if-fiber.js":
/*!****************************************************!*\
  !*** ./node_modules/@skpm/timers/test-if-fiber.js ***!
  \****************************************************/
/*! no static exports found */function(e,t){e.exports=function(){return"undefined"!=typeof coscript&&coscript.createFiber}},"./node_modules/@skpm/timers/timeout.js":
/*!**********************************************!*\
  !*** ./node_modules/@skpm/timers/timeout.js ***!
  \**********************************************/
/*! no static exports found */function(e,t,n){var r,i,o=[];if(n(/*! ./test-if-fiber */"./node_modules/@skpm/timers/test-if-fiber.js")()){o=[];r=function(e,t,n,r,i,a,s,c,u,l,f,d){var h=o.length;return o.push(coscript.scheduleWithInterval_jsFunction((t||0)/1e3,function(){e(n,r,i,a,s,c,u,l,f,d)})),h},i=function(e){var t=o[e];t&&(t.cancel(),o[e]=void 0)}}else r=function(e,t,n,r,a,s,c,u,l,f,d,h){coscript.shouldKeepAround=!0;var p=o.length;return o.push(!0),coscript.scheduleWithInterval_jsFunction((t||0)/1e3,function(){o[p]&&e(n,r,a,s,c,u,l,f,d,h),i(p),o.every(function(e){return!e})&&(coscript.shouldKeepAround=!1)}),p},i=function(e){o[e]=!1};e.exports={setTimeout:r,clearTimeout:i}},"./node_modules/cocoascript-class/lib/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/cocoascript-class/lib/index.js ***!
  \*****************************************************/
/*! no static exports found */function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.SuperCall=void 0,t.default=function(e){const t=e.superclass||NSObject,n=(e.className||e.classname||"ObjCClass")+NSUUID.UUID().UUIDString(),o=new Set(["className","classname","superclass"]);var a=MOClassDescription.allocateDescriptionForClassWithName_superclass_(n,t);const s=[];for(var c in e){const t=e[c];if("function"==typeof t&&"init"!==c){var u=NSSelectorFromString(c);a.addInstanceMethodWithSelector_function_(u,t)}else o.has(c)||(s.push(c),a.addInstanceVariableWithName_typeEncoding(c,"@"))}return a.addInstanceMethodWithSelector_function_(NSSelectorFromString("init"),function(){const t=i.call(this);return s.map(n=>{Object.defineProperty(t,n,{get:()=>(function(e,t){const n=MOPointer.new();return(0,r.object_getInstanceVariable)(e,t,n),n.value().retain().autorelease()})(t,n),set(e){(0,r.object_setInstanceVariable)(t,n,e)}}),t[n]=e[n]}),"function"==typeof e.init&&e.init.call(this),t}),a.registerClass()};var r=n(/*! ./runtime.js */"./node_modules/cocoascript-class/lib/runtime.js");t.SuperCall=r.SuperCall;const i=(0,r.SuperCall)(NSStringFromSelector("init"),[],{type:"@"})},"./node_modules/cocoascript-class/lib/runtime.js":
/*!*******************************************************!*\
  !*** ./node_modules/cocoascript-class/lib/runtime.js ***!
  \*******************************************************/
/*! no static exports found */function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.SuperCall=function(e,t,n){const i=o("objc_msgSendSuper",[{type:"^"+r},{type:":"},...t],n);return function(...t){const n=function(e,t){return function e(t){if("object"!=typeof t||0==Object.keys(t).length)return t;const n=Object.keys(t)[0];const r=t[n];const i=MOStruct.structureWithName_memberNames_runtime(n,Object.keys(r),Mocha.sharedRuntime());Object.keys(r).map(t=>{i[t]=e(r[t])});return i}({objc_super:{receiver:e,super_class:t}})}(this,this.superclass()),r=MOPointer.alloc().initWithValue_(n);return i(r,e,...t)}},t.CFunc=o;const r='{objc_super="receiver"@"super_class"#}';function i(e,t){const n=NSMutableDictionary.dictionary();n.o=e,Object.keys(t).map(e=>n.setValue_forKeyPath(t[e],"o."+e))}function o(e,t,n){function r(e){if(!e)return null;const t=MOBridgeSupportArgument.alloc().init();return i(t,{type64:e.type}),t}const o=MOBridgeSupportFunction.alloc().init();return i(o,{name:e,arguments:t.map(r),returnValue:r(n)}),o}t.object_getInstanceVariable=o("object_getInstanceVariable",[{type:"@"},{type:"*"},{type:"^@"}],{type:"^{objc_ivar=}"}),t.object_setInstanceVariable=o("object_setInstanceVariable",[{type:"@"},{type:"*"},{type:"@"}],{type:"^{objc_ivar=}"});!function(e,t){const n=MOBridgeSupportController.sharedController().valueForKey("symbols");if(!n)throw Error("Something has changed within bridge support so we can't add our definitions");if(null!==n[e])return;const r=MOBridgeSupportStruct.alloc().init();i(r,{name:e,type:t.type}),n[e]=r}("objc_super",{type:r})},"./node_modules/promise-polyfill/lib/index.js":
/*!****************************************************!*\
  !*** ./node_modules/promise-polyfill/lib/index.js ***!
  \****************************************************/
/*! no static exports found */function(e,t,n){"use strict";(function(t,n){var r=t;function i(){}function o(e){if(!(this instanceof o))throw new TypeError("Promises must be constructed via new");if("function"!=typeof e)throw new TypeError("not a function");this._state=0,this._handled=!1,this._value=void 0,this._deferreds=[],l(e,this)}function a(e,t){for(;3===e._state;)e=e._value;0!==e._state?(e._handled=!0,o._immediateFn(function(){var n=1===e._state?t.onFulfilled:t.onRejected;if(null!==n){var r;try{r=n(e._value)}catch(e){return void c(t.promise,e)}s(t.promise,r)}else(1===e._state?s:c)(t.promise,e._value)})):e._deferreds.push(t)}function s(e,t){try{if(t===e)throw new TypeError("A promise cannot be resolved with itself.");if(t&&("object"==typeof t||"function"==typeof t)){var n=t.then;if(t instanceof o)return e._state=3,e._value=t,void u(e);if("function"==typeof n)return void l(function(e,t){return function(){e.apply(t,arguments)}}(n,t),e)}e._state=1,e._value=t,u(e)}catch(t){c(e,t)}}function c(e,t){e._state=2,e._value=t,u(e)}function u(e){2===e._state&&0===e._deferreds.length&&o._immediateFn(function(){e._handled||o._unhandledRejectionFn(e._value)});for(var t=0,n=e._deferreds.length;t<n;t++)a(e,e._deferreds[t]);e._deferreds=null}function l(e,t){var n=!1;try{e(function(e){n||(n=!0,s(t,e))},function(e){n||(n=!0,c(t,e))})}catch(e){if(n)return;n=!0,c(t,e)}}o.prototype.catch=function(e){return this.then(null,e)},o.prototype.then=function(e,t){var n=new this.constructor(i);return a(this,new function(e,t,n){this.onFulfilled="function"==typeof e?e:null,this.onRejected="function"==typeof t?t:null,this.promise=n}(e,t,n)),n},o.prototype.finally=function(e){var t=this.constructor;return this.then(function(n){return t.resolve(e()).then(function(){return n})},function(n){return t.resolve(e()).then(function(){return t.reject(n)})})},o.all=function(e){return new o(function(t,n){if(!e||void 0===e.length)throw new TypeError("Promise.all accepts an array");var r=Array.prototype.slice.call(e);if(0===r.length)return t([]);var i=r.length;function o(e,a){try{if(a&&("object"==typeof a||"function"==typeof a)){var s=a.then;if("function"==typeof s)return void s.call(a,function(t){o(e,t)},n)}r[e]=a,0==--i&&t(r)}catch(e){n(e)}}for(var a=0;a<r.length;a++)o(a,r[a])})},o.resolve=function(e){return e&&"object"==typeof e&&e.constructor===o?e:new o(function(t){t(e)})},o.reject=function(e){return new o(function(t,n){n(e)})},o.race=function(e){return new o(function(t,n){for(var r=0,i=e.length;r<i;r++)e[r].then(t,n)})},o._immediateFn="function"==typeof n&&function(e){n(e)}||function(e){r(e,0)},o._unhandledRejectionFn=function(e){"undefined"!=typeof console&&console&&console.warn("Possible Unhandled Promise Rejection:",e)},e.exports=o}).call(this,n(/*! ./node_modules/@skpm/timers/timeout.js */"./node_modules/@skpm/timers/timeout.js").setTimeout,n(/*! ./node_modules/@skpm/timers/immediate.js */"./node_modules/@skpm/timers/immediate.js").setImmediate)},"./node_modules/sketch-polyfill-fetch/lib/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/sketch-polyfill-fetch/lib/index.js ***!
  \*********************************************************/
/*! no static exports found */function(e,t,n){(function(t){var r,i,o=n(/*! cocoascript-class */"./node_modules/cocoascript-class/lib/index.js").default;try{r=n(/*! buffer */"buffer").Buffer}catch(e){}e.exports=function(e,n){var a;n=n||{};try{a=coscript.createFiber()}catch(e){coscript.shouldKeepAround=!0}return new t(function(s,c){var u=NSURL.alloc().initWithString(e),l=NSMutableURLRequest.requestWithURL(u);if(l.setHTTPMethod(n.method||"GET"),Object.keys(n.headers||{}).forEach(function(e){l.setValue_forHTTPHeaderField(n.headers[e],e)}),n.body){var f;if("string"==typeof n.body)f=NSString.alloc().initWithString(n.body).dataUsingEncoding(NSUTF8StringEncoding);else if(r&&r.isBuffer(n.body))f=n.body.toNSData();else if(n.body.isKindOfClass&&1==n.body.isKindOfClass(NSData))f=n.body;else if(n.body._isFormData){var d=n.body._boundary;(f=n.body._data).appendData(NSString.alloc().initWithString("--"+d+"--\r\n").dataUsingEncoding(NSUTF8StringEncoding)),l.setValue_forHTTPHeaderField("multipart/form-data; boundary="+d,"Content-Type")}else f=NSJSONSerialization.dataWithJSONObject_options_error(n.body,NSJSONWritingPrettyPrinted,void 0),l.setValue_forHTTPHeaderField(""+f.length(),"Content-Length");l.setHTTPBody(f)}if(n.cache)switch(n.cache){case"reload":case"no-cache":case"no-store":l.setCachePolicy(1);case"force-cache":l.setCachePolicy(2);case"only-if-cached":l.setCachePolicy(3)}n.credentials||l.setHTTPShouldHandleCookies(!1),i||(i=o({classname:"FetchPolyfillDelegate",data:null,httpResponse:null,fiber:null,callbacks:null,"connectionDidFinishLoading:":function(e){this.callbacks.succeed(this.httpResponse,this.data),this.fiber?this.fiber.cleanup():coscript.shouldKeepAround=!1},"connection:didReceiveResponse:":function(e,t){this.httpResponse=t,this.data=NSMutableData.alloc().init()},"connection:didFailWithError:":function(e,t){this.callbacks.fail(t),this.fiber?this.fiber.cleanup():coscript.shouldKeepAround=!1},"connection:didReceiveData:":function(e,t){this.data.appendData(t)}}));var h=!1,p=i.new();p.callbacks=NSDictionary.dictionaryWithDictionary({succeed:function(e,n){h=!0,s(function e(n,i){for(var o,a=[],s=[],c={},u=0;u<n.allHeaderFields().allKeys().length;u++){var l=n.allHeaderFields().allKeys()[u].toLowerCase(),f=String(n.allHeaderFields()[l]);a.push(l),s.push([l,f]),o=c[l],c[l]=o?o+","+f:f}return{ok:1==(n.statusCode()/200|0),status:Number(n.statusCode()),statusText:NSHTTPURLResponse.localizedStringForStatusCode(n.statusCode()),useFinalURL:!0,url:String(n.URL().absoluteString()),clone:e.bind(this,n,i),text:function(){return new t(function(e,t){const n=NSString.alloc().initWithData_encoding(i,NSASCIIStringEncoding);n?e(n):t(new Error("Couldn't parse body"))})},json:function(){return new t(function(e,t){var n=NSString.alloc().initWithData_encoding(i,NSUTF8StringEncoding);n?e(JSON.parse(n)):t(new Error("Could not parse JSON because it is not valid UTF-8 data."))})},blob:function(){return t.resolve(i)},arrayBuffer:function(){return t.resolve(r.from(i))},headers:{keys:function(){return a},entries:function(){return s},get:function(e){return c[e.toLowerCase()]},has:function(e){return e.toLowerCase()in c}}}}(e,n))},fail:function(e){h=!0,c(e)}}),p.fiber=a;var y=NSURLConnection.alloc().initWithRequest_delegate(l,p);a&&a.onCleanup(function(){h||y.cancel()})})}}).call(this,n(/*! ./node_modules/promise-polyfill/lib/index.js */"./node_modules/promise-polyfill/lib/index.js"))},"./src/api.js":
/*!********************!*\
  !*** ./src/api.js ***!
  \********************/
/*! exports provided: default */function(e,t,n){"use strict";n.r(t),function(e){function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var r=function(){function t(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t)}return function(e,t,r){t&&n(e.prototype,t),r&&n(e,r)}(t,null,[{key:"random",value:function(t,n){var r="?min_quality="+n;return t&&(r=r+"&gender="+t),e("https://tinyfac.es/api/users/"+r,{method:"GET"}).then(function(e){return e.text()}).then(function(e){return JSON.parse(e)})}}]),t}();t.default=r}.call(this,n(/*! ./node_modules/sketch-polyfill-fetch/lib/index.js */"./node_modules/sketch-polyfill-fetch/lib/index.js"))},"./src/fillCurrentSelection.js":
/*!*************************************!*\
  !*** ./src/fillCurrentSelection.js ***!
  \*************************************/
/*! exports provided: default */function(e,t,n){"use strict";n.r(t);var r=n(/*! ./api */"./src/api.js"),i=n(/*! ./helpers */"./src/helpers.js"),o=n(/*! sketch */"sketch"),a=n.n(o);function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var c=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.gender=t,this.minQuality=n;var r=a.a.getSelectedDocument();this.selectedLayers=r.selectedLayers,this.symbolMasters=i.default.symbolMasters(this.selectedLayers),this.symbolLayer=void 0}return function(e,t,n){t&&s(e.prototype,t),n&&s(e,n)}(e,[{key:"fill",value:function(){var e=this;0!=this.selectedLayers.length?this.symbolMasters.length>1?a.a.UI.alert("You can't have different types of symbols selected when using this.","Make sure you only have one type of symbol and try again."):this.symbolMasters.length>=1&&(this.symbolLayer=this.askForLayerToReplace(this.symbolMasters[0]),void 0===this.symbolLayer)||r.default.random(this.gender,this.minQuality).then(function(t){var n=e.namesAndImagesArrays(t);e.selectedLayers.forEach(function(t){e.fillLayer(t,n.images,n.names)})}).catch(function(e){a.a.UI.message("⚠️ TinyFaces can't be contacted. Check your internet..."),console.log(e)}):a.a.UI.message("Select at least one layer first...")}},{key:"fillLayer",value:function(e,t,n){var r=this;if("Text"==e.type){var o=this.getFirstAndRemoveFromArray(n);e.text=o}if("ShapePath"==e.type){var a=this.getFirstAndRemoveFromArray(t),s=e.sketchObject.style().fills().firstObject();s.setFillType(4),s.setImage(i.default.imageData(a)),s.setPatternFillType(1)}if("Group"==e.type&&e.layers.forEach(function(e){r.fillLayer(e,t,n)}),"SymbolInstance"==e.type&&this.symbolLayer){var c=e.overrides.findIndex(function(e){return e.path==r.symbolLayer.id});if("ShapePath"==this.symbolLayer.type){a=this.getFirstAndRemoveFromArray(t);var u=i.default.imageData(a);e.setOverrideValue(e.overrides[c],u)}else if("Text"==this.symbolLayer.type){o=this.getFirstAndRemoveFromArray(n);e.setOverrideValue(e.overrides[c],o)}}}},{key:"askForLayerToReplace",value:function(e){var t=i.default.overrideableLayers(e.layers),n=t.map(function(e){return e.name}),r=a.a.UI.getSelectionFromUser("What layer would you like to fill with random data?",n);if(r[2])return t[r[1]]}},{key:"getFirstAndRemoveFromArray",value:function(e){return e.splice(0,1)[0]}},{key:"namesAndImagesArrays",value:function(e){var t=[],n=[];return e.forEach(function(e){var r=e.avatars[2].url;t.push(r);var i=e.first_name+" "+e.last_name;n.push(i)}),{images:t,names:n}}}]),e}();t.default=c},"./src/helpers.js":
/*!************************!*\
  !*** ./src/helpers.js ***!
  \************************/
/*! exports provided: default */function(e,t,n){"use strict";function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}n.r(t);var i=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}return function(e,t,n){t&&r(e.prototype,t),n&&r(e,n)}(e,null,[{key:"requestWithURL",value:function(e){var t=NSURLRequest.requestWithURL(NSURL.URLWithString(e));return NSURLConnection.sendSynchronousRequest_returningResponse_error(t,null,null)}},{key:"imageData",value:function(t){var n=e.requestWithURL(t),r=NSImage.alloc().initWithData(n),i=MSImageData.alloc().initWithImage(r);return i}},{key:"overrideableLayers",value:function(e){return e.filter(function(e){return"Text"==e.type||"ShapePath"==e.type})}},{key:"symbolMasters",value:function(e){var t=[];return e.forEach(function(e){"SymbolInstance"===e.type&&(!1===t.map(function(e){return e.symbolId}).includes(e.symbolId)&&t.push(e.master))}),t}}]),e}();t.default=i},"./src/menu/fillMale.js":
/*!******************************!*\
  !*** ./src/menu/fillMale.js ***!
  \******************************/
/*! exports provided: default */function(e,t,n){"use strict";n.r(t);var r=n(/*! ../fillCurrentSelection */"./src/fillCurrentSelection.js");n(/*! sketch */"sketch");t.default=function(){new r.default("male",0).fill()}},buffer:
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/*! no static exports found */function(e,t){e.exports=require("buffer")},sketch:
/*!*************************!*\
  !*** external "sketch" ***!
  \*************************/
/*! no static exports found */function(e,t){e.exports=require("sketch")}});"default"===e&&"function"==typeof n?n(t):n[e](t)}that.onRun=__skpm_run.bind(this,"default");