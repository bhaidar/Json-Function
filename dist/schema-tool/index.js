'use strict';Object.defineProperty(exports,'__esModule',{value:!0});var _typeof='function'==typeof Symbol&&'symbol'==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&'function'==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?'symbol':typeof a},__assign=function(){return __assign=Object.assign||function(a){for(var b,c=1,d=arguments.length;c<d;c++)for(var e in b=arguments[c],b)Object.prototype.hasOwnProperty.call(b,e)&&(a[e]=b[e]);return a},__assign.apply(this,arguments)},SchemaTool=/** @class */function(){function a(){}return a.prototype.join=function(){for(var a=[],b=0;b<arguments.length;b++)a[b]=arguments[b];var c={seperator:' '},d=[];return a.forEach(function(a){return'string'==typeof a?void d.push(a):void('object'===('undefined'==typeof a?'undefined':_typeof(a))&&(c=__assign({},c,a)))}),{__schema__:__assign({values:d},c,{job:'join'})}},a.prototype.custom=function(a){for(var b=[],c=1;c<arguments.length;c++)b[c-1]=arguments[c];return{__schema__:{values:b,job:'custom',custom:a}}},a}();exports.default=new SchemaTool;