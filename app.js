!function(a){function b(a,b,e){return 4===arguments.length?c.apply(this,arguments):void d(a,{declarative:!0,deps:b,declare:e})}function c(a,b,c,e){d(a,{declarative:!1,deps:b,executingRequire:c,execute:e})}function d(a,b){b.name=a,a in o||(o[a]=b),b.normalizedDeps=b.deps}function e(a,b){if(b[a.groupIndex]=b[a.groupIndex]||[],-1==p.call(b[a.groupIndex],a)){b[a.groupIndex].push(a);for(var c=0,d=a.normalizedDeps.length;d>c;c++){var f=a.normalizedDeps[c],g=o[f];if(g&&!g.evaluated){var h=a.groupIndex+(g.declarative!=a.declarative);if(void 0===g.groupIndex||g.groupIndex<h){if(void 0!==g.groupIndex&&(b[g.groupIndex].splice(p.call(b[g.groupIndex],g),1),0==b[g.groupIndex].length))throw new TypeError("Mixed dependency cycle detected");g.groupIndex=h}e(g,b)}}}}function f(a){var b=o[a];b.groupIndex=0;var c=[];e(b,c);for(var d=!!b.declarative==c.length%2,f=c.length-1;f>=0;f--){for(var g=c[f],i=0;i<g.length;i++){var k=g[i];d?h(k):j(k)}d=!d}}function g(a){return s[a]||(s[a]={name:a,dependencies:[],exports:{},importers:[]})}function h(b){if(!b.module){var c=b.module=g(b.name),d=b.module.exports,e=b.declare.call(a,function(a,b){if(c.locked=!0,"object"==typeof a)for(var e in a)d[e]=a[e];else d[a]=b;for(var f=0,g=c.importers.length;g>f;f++){var h=c.importers[f];if(!h.locked)for(var i=0;i<h.dependencies.length;++i)h.dependencies[i]===c&&h.setters[i](d)}return c.locked=!1,b},{id:b.name});c.setters=e.setters,c.execute=e.execute;for(var f=0,i=b.normalizedDeps.length;i>f;f++){var j,k=b.normalizedDeps[f],l=o[k],m=s[k];m?j=m.exports:l&&!l.declarative?j=l.esModule:l?(h(l),m=l.module,j=m.exports):j=n(k),m&&m.importers?(m.importers.push(c),c.dependencies.push(m)):c.dependencies.push(null),c.setters[f]&&c.setters[f](j)}}}function i(a){var b,c=o[a];if(c)c.declarative?m(a,[]):c.evaluated||j(c),b=c.module.exports;else if(b=n(a),!b)throw new Error("Unable to load dependency "+a+".");return(!c||c.declarative)&&b&&b.__useDefault?b.default:b}function j(b){if(!b.module){var c={},d=b.module={exports:c,id:b.name};if(!b.executingRequire)for(var e=0,f=b.normalizedDeps.length;f>e;e++){var g=b.normalizedDeps[e],h=o[g];h&&j(h)}b.evaluated=!0;var l=b.execute.call(a,function(a){for(var c=0,d=b.deps.length;d>c;c++)if(b.deps[c]==a)return i(b.normalizedDeps[c]);throw new TypeError("Module "+a+" not declared as a dependency.")},c,d);void 0!==l&&(d.exports=l),c=d.exports,c&&c.__esModule?b.esModule=c:b.esModule=k(c)}}function k(b){var c={};if(("object"==typeof b||"function"==typeof b)&&b!==a)if(q)for(var d in b)"default"!==d&&l(c,b,d);else{var e=b&&b.hasOwnProperty;for(var d in b)"default"===d||e&&!b.hasOwnProperty(d)||(c[d]=b[d])}return c.default=b,r(c,"__useDefault",{value:!0}),c}function l(a,b,c){try{var d;(d=Object.getOwnPropertyDescriptor(b,c))&&r(a,c,d)}catch(d){return a[c]=b[c],!1}}function m(b,c){var d=o[b];if(d&&!d.evaluated&&d.declarative){c.push(b);for(var e=0,f=d.normalizedDeps.length;f>e;e++){var g=d.normalizedDeps[e];-1==p.call(c,g)&&(o[g]?m(g,c):n(g))}d.evaluated||(d.evaluated=!0,d.module.execute.call(a))}}function n(a){if(u[a])return u[a];if("@node/"==a.substr(0,6))return u[a]=k(t(a.substr(6)));var b=o[a];if(!b)throw"Module "+a+" not present.";return f(a),m(a,[]),o[a]=void 0,b.declarative&&r(b.module.exports,"__esModule",{value:!0}),u[a]=b.declarative?b.module.exports:b.esModule}var o={},p=Array.prototype.indexOf||function(a){for(var b=0,c=this.length;c>b;b++)if(this[b]===a)return b;return-1},q=!0;try{Object.getOwnPropertyDescriptor({a:0},"a")}catch(a){q=!1}var r;!function(){try{Object.defineProperty({},"a",{})&&(r=Object.defineProperty)}catch(a){r=function(a,b,c){try{a[b]=c.value||c.get.call(a)}catch(a){}}}}();var s={},t="undefined"!=typeof System&&System._nodeRequire||"undefined"!=typeof require&&"undefined"!=typeof require.resolve&&"undefined"!=typeof process&&process.platform&&require,u={"@empty":{}};return function(a,d,e,f){return function(g){g(function(g){for(var h={_nodeRequire:t,register:b,registerDynamic:c,get:n,set:function(a,b){u[a]=b},newModule:function(a){return a}},i=0;i<d.length;i++)(function(a,b){b&&b.__esModule?u[a]=b:u[a]=k(b)})(d[i],arguments[i]);f(h);var j=n(a[0]);if(a.length>1)for(var i=1;i<a.length;i++)n(a[i]);return e?j.default:j})}}}("undefined"!=typeof self?self:global)(["1"],[],!1,function(a){this.require,this.exports,this.module;a.register("2",["3","4"],function(a){var b,c;return{setters:[function(a){b=a.default},function(a){c=a.default}],execute:function(){"use strict";a("default",function(a,d){var e=[];return a.forEach(function(a,c){var f="/events/"+a.id+"/fights";e.push(b(d+f).then(function(b){return a.fights=b,a}))}),c.all(e)})}}}),a.registerDynamic("5",[],!0,function(a,b,c){"format cjs";this||self}),a.registerDynamic("6",["7","8"],!0,function(a,b,c){var d=(this||self,a("7")),e=a("8");c.exports=function(a){return function(b,c){var f,g,h=String(e(b)),i=d(c),j=h.length;return i<0||i>=j?a?"":void 0:(f=h.charCodeAt(i),f<55296||f>56319||i+1===j||(g=h.charCodeAt(i+1))<56320||g>57343?a?h.charAt(i):f:a?h.slice(i,i+2):(f-55296<<10)+(g-56320)+65536)}}}),a.registerDynamic("9",["6","a"],!0,function(a,b,c){"use strict";var d=(this||self,a("6")(!0));a("a")(String,"String",function(a){this._t=String(a),this._i=0},function(){var a,b=this._t,c=this._i;return c>=b.length?{value:void 0,done:!0}:(a=d(b,c),this._i+=a.length,{value:a,done:!1})})}),a.registerDynamic("b",[],!0,function(a,b,c){this||self;c.exports=function(){}}),a.registerDynamic("c",[],!0,function(a,b,c){this||self;c.exports=function(a,b){return{value:b,done:!!a}}}),a.registerDynamic("d",["e"],!0,function(a,b,c){var d=(this||self,a("e"));c.exports=Object("z").propertyIsEnumerable(0)?Object:function(a){return"String"==d(a)?a.split(""):Object(a)}}),a.registerDynamic("8",[],!0,function(a,b,c){this||self;c.exports=function(a){if(void 0==a)throw TypeError("Can't call method on  "+a);return a}}),a.registerDynamic("f",["d","8"],!0,function(a,b,c){var d=(this||self,a("d")),e=a("8");c.exports=function(a){return d(e(a))}}),a.registerDynamic("10",["11","12","13","14","15"],!0,function(a,b,c){"use strict";var d=(this||self,a("11")),e=a("12"),f=a("13"),g={};a("14")(g,a("15")("iterator"),function(){return this}),c.exports=function(a,b,c){a.prototype=d.create(g,{next:e(1,c)}),f(a,b+" Iterator")}}),a.registerDynamic("a",["16","17","18","14","19","1a","10","13","11","15"],!0,function(a,b,c){"use strict";var d=(this||self,a("16")),e=a("17"),f=a("18"),g=a("14"),h=a("19"),i=a("1a"),j=a("10"),k=a("13"),l=a("11").getProto,m=a("15")("iterator"),n=!([].keys&&"next"in[].keys()),o="@@iterator",p="keys",q="values",r=function(){return this};c.exports=function(a,b,c,s,t,u,v){j(c,b,s);var w,x,y=function(a){if(!n&&a in C)return C[a];switch(a){case p:return function(){return new c(this,a)};case q:return function(){return new c(this,a)}}return function(){return new c(this,a)}},z=b+" Iterator",A=t==q,B=!1,C=a.prototype,D=C[m]||C[o]||t&&C[t],E=D||y(t);if(D){var F=l(E.call(new a));k(F,z,!0),!d&&h(C,o)&&g(F,m,r),A&&D.name!==q&&(B=!0,E=function(){return D.call(this)})}if(d&&!v||!n&&!B&&C[m]||g(C,m,E),i[b]=E,i[z]=r,t)if(w={values:A?E:y(q),keys:u?E:y(p),entries:A?y("entries"):E},v)for(x in w)x in C||f(C,x,w[x]);else e(e.P+e.F*(n||B),b,w);return w}}),a.registerDynamic("1b",["b","c","1a","f","a"],!0,function(a,b,c){"use strict";var d=(this||self,a("b")),e=a("c"),f=a("1a"),g=a("f");c.exports=a("a")(Array,"Array",function(a,b){this._t=g(a),this._i=0,this._k=b},function(){var a=this._t,b=this._k,c=this._i++;return!a||c>=a.length?(this._t=void 0,e(1)):"keys"==b?e(0,c):"values"==b?e(0,a[c]):e(0,[c,a[c]])},"values"),f.Arguments=f.Array,d("keys"),d("values"),d("entries")}),a.registerDynamic("1c",["1b","1a"],!0,function(a,b,c){this||self;a("1b");var d=a("1a");d.NodeList=d.HTMLCollection=d.Array}),a.registerDynamic("16",[],!0,function(a,b,c){this||self;c.exports=!0}),a.registerDynamic("17",["1d","1e","1f"],!0,function(a,b,c){var d=this||self,d=a("1d"),e=a("1e"),f=a("1f"),g="prototype",h=function(a,b,c){var i,j,k,l=a&h.F,m=a&h.G,n=a&h.S,o=a&h.P,p=a&h.B,q=a&h.W,r=m?e:e[b]||(e[b]={}),s=m?d:n?d[b]:(d[b]||{})[g];m&&(c=b);for(i in c)j=!l&&s&&i in s,j&&i in r||(k=j?s[i]:c[i],r[i]=m&&"function"!=typeof s[i]?c[i]:p&&j?f(k,d):q&&s[i]==k?function(a){var b=function(b){return this instanceof a?new a(b):a(b)};return b[g]=a[g],b}(k):o&&"function"==typeof k?f(Function.call,k):k,o&&((r[g]||(r[g]={}))[i]=k))};h.F=1,h.G=2,h.S=4,h.P=8,h.B=16,h.W=32,c.exports=h}),a.registerDynamic("20",[],!0,function(a,b,c){this||self;c.exports=function(a,b,c){if(!(a instanceof b))throw TypeError(c+": use the 'new' operator!");return a}}),a.registerDynamic("21",["22"],!0,function(a,b,c){var d=(this||self,a("22"));c.exports=function(a,b,c,e){try{return e?b(d(c)[0],c[1]):b(c)}catch(b){var f=a.return;throw void 0!==f&&d(f.call(a)),b}}}),a.registerDynamic("23",["1a","15"],!0,function(a,b,c){var d=(this||self,a("1a")),e=a("15")("iterator"),f=Array.prototype;c.exports=function(a){return void 0!==a&&(d.Array===a||f[e]===a)}}),a.registerDynamic("7",[],!0,function(a,b,c){var d=(this||self,Math.ceil),e=Math.floor;c.exports=function(a){return isNaN(a=+a)?0:(a>0?e:d)(a)}}),a.registerDynamic("24",["7"],!0,function(a,b,c){var d=(this||self,a("7")),e=Math.min;c.exports=function(a){return a>0?e(d(a),9007199254740991):0}}),a.registerDynamic("25",["e","15"],!0,function(a,b,c){var d=(this||self,a("e")),e=a("15")("toStringTag"),f="Arguments"==d(function(){return arguments}());c.exports=function(a){var b,c,g;return void 0===a?"Undefined":null===a?"Null":"string"==typeof(c=(b=Object(a))[e])?c:f?d(b):"Object"==(g=d(b))&&"function"==typeof b.callee?"Arguments":g}}),a.registerDynamic("1a",[],!0,function(a,b,c){this||self;c.exports={}}),a.registerDynamic("26",["25","15","1a","1e"],!0,function(a,b,c){var d=(this||self,a("25")),e=a("15")("iterator"),f=a("1a");c.exports=a("1e").getIteratorMethod=function(a){if(void 0!=a)return a[e]||a["@@iterator"]||f[d(a)]}}),a.registerDynamic("27",["1f","21","23","22","24","26"],!0,function(a,b,c){var d=(this||self,a("1f")),e=a("21"),f=a("23"),g=a("22"),h=a("24"),i=a("26");c.exports=function(a,b,c,j){var k,l,m,n=i(a),o=d(c,j,b?2:1),p=0;if("function"!=typeof n)throw TypeError(a+" is not iterable!");if(f(n))for(k=h(a.length);k>p;p++)b?o(g(l=a[p])[0],l[1]):o(a[p]);else for(m=n.call(a);!(l=m.next()).done;)e(m,o,l.value,b)}}),a.registerDynamic("28",["11","29","22","1f"],!0,function(a,b,c){var d=(this||self,a("11").getDesc),e=a("29"),f=a("22"),g=function(a,b){if(f(a),!e(b)&&null!==b)throw TypeError(b+": can't set as prototype!")};c.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(b,c,e){try{e=a("1f")(Function.call,d(Object.prototype,"__proto__").set,2),e(b,[]),c=!(b instanceof Array)}catch(a){c=!0}return function(a,b){return g(a,b),c?a.__proto__=b:e(a,b),a}}({},!1):void 0),check:g}}),a.registerDynamic("2a",[],!0,function(a,b,c){this||self;c.exports=Object.is||function(a,b){return a===b?0!==a||1/a===1/b:a!=a&&b!=b}}),a.registerDynamic("22",["29"],!0,function(a,b,c){var d=(this||self,a("29"));c.exports=function(a){if(!d(a))throw TypeError(a+" is not an object!");return a}}),a.registerDynamic("2b",["22","2c","15"],!0,function(a,b,c){var d=(this||self,a("22")),e=a("2c"),f=a("15")("species");c.exports=function(a,b){var c,g=d(a).constructor;return void 0===g||void 0==(c=d(g)[f])?b:e(c)}}),a.registerDynamic("2c",[],!0,function(a,b,c){this||self;c.exports=function(a){if("function"!=typeof a)throw TypeError(a+" is not a function!");return a}}),a.registerDynamic("1f",["2c"],!0,function(a,b,c){var d=(this||self,a("2c"));c.exports=function(a,b,c){if(d(a),void 0===b)return a;switch(c){case 1:return function(c){return a.call(b,c)};case 2:return function(c,d){return a.call(b,c,d)};case 3:return function(c,d,e){return a.call(b,c,d,e)}}return function(){return a.apply(b,arguments)}}}),a.registerDynamic("2d",[],!0,function(a,b,c){this||self;c.exports=function(a,b,c){var d=void 0===c;switch(b.length){case 0:return d?a():a.call(c);case 1:return d?a(b[0]):a.call(c,b[0]);case 2:return d?a(b[0],b[1]):a.call(c,b[0],b[1]);case 3:return d?a(b[0],b[1],b[2]):a.call(c,b[0],b[1],b[2]);case 4:return d?a(b[0],b[1],b[2],b[3]):a.call(c,b[0],b[1],b[2],b[3])}return a.apply(c,b)}}),a.registerDynamic("2e",["1d"],!0,function(a,b,c){this||self;c.exports=a("1d").document&&document.documentElement}),a.registerDynamic("29",[],!0,function(a,b,c){this||self;c.exports=function(a){return"object"==typeof a?null!==a:"function"==typeof a}}),a.registerDynamic("2f",["29","1d"],!0,function(a,b,c){var d=(this||self,a("29")),e=a("1d").document,f=d(e)&&d(e.createElement);c.exports=function(a){return f?e.createElement(a):{}}}),a.registerDynamic("30",["1f","2d","2e","2f","1d","e","31"],!0,function(a,b,c){this||self;!function(b){var d,e,f,g=a("1f"),h=a("2d"),i=a("2e"),j=a("2f"),k=a("1d"),b=k.process,l=k.setImmediate,m=k.clearImmediate,n=k.MessageChannel,o=0,p={},q="onreadystatechange",r=function(){var a=+this;if(p.hasOwnProperty(a)){var b=p[a];delete p[a],b()}},s=function(a){r.call(a.data)};l&&m||(l=function(a){for(var b=[],c=1;arguments.length>c;)b.push(arguments[c++]);return p[++o]=function(){h("function"==typeof a?a:Function(a),b)},d(o),o},m=function(a){delete p[a]},"process"==a("e")(b)?d=function(a){b.nextTick(g(r,a,1))}:n?(e=new n,f=e.port2,e.port1.onmessage=s,d=g(f.postMessage,f,1)):k.addEventListener&&"function"==typeof postMessage&&!k.importScripts?(d=function(a){k.postMessage(a+"","*")},k.addEventListener("message",s,!1)):d=q in j("script")?function(a){i.appendChild(j("script"))[q]=function(){i.removeChild(this),r.call(a)}}:function(a){setTimeout(g(r,a,1),0)}),c.exports={set:l,clear:m}}(a("31"))}),a.registerDynamic("e",[],!0,function(a,b,c){var d=(this||self,{}.toString);c.exports=function(a){return d.call(a).slice(8,-1)}}),a.registerDynamic("32",["1d","30","e","31"],!0,function(a,b,c){this||self;!function(b){var d,e,f,g=a("1d"),h=a("30").set,i=g.MutationObserver||g.WebKitMutationObserver,b=g.process,j=g.Promise,k="process"==a("e")(b),l=function(){var a,c,f;for(k&&(a=b.domain)&&(b.domain=null,a.exit());d;)c=d.domain,f=d.fn,c&&c.enter(),f(),c&&c.exit(),d=d.next;e=void 0,a&&a.enter()};if(k)f=function(){b.nextTick(l)};else if(i){var m=1,n=document.createTextNode("");new i(l).observe(n,{characterData:!0}),f=function(){n.data=m=-m}}else f=j&&j.resolve?function(){j.resolve().then(l)}:function(){h.call(g,l)};c.exports=function(a){var c={fn:a,next:void 0,domain:k&&b.domain};e&&(e.next=c),d||(d=c,f()),e=c}}(a("31"))}),a.registerDynamic("12",[],!0,function(a,b,c){this||self;c.exports=function(a,b){return{enumerable:!(1&a),configurable:!(2&a),writable:!(4&a),value:b}}}),a.registerDynamic("14",["11","12","33"],!0,function(a,b,c){var d=(this||self,a("11")),e=a("12");c.exports=a("33")?function(a,b,c){return d.setDesc(a,b,e(1,c))}:function(a,b,c){return a[b]=c,a}}),a.registerDynamic("18",["14"],!0,function(a,b,c){this||self;c.exports=a("14")}),a.registerDynamic("34",["18"],!0,function(a,b,c){var d=(this||self,a("18"));c.exports=function(a,b){for(var c in b)d(a,c,b[c]);return a}}),a.registerDynamic("19",[],!0,function(a,b,c){var d=(this||self,{}.hasOwnProperty);c.exports=function(a,b){return d.call(a,b)}}),a.registerDynamic("13",["11","19","15"],!0,function(a,b,c){var d=(this||self,a("11").setDesc),e=a("19"),f=a("15")("toStringTag");c.exports=function(a,b,c){a&&!e(a=c?a:a.prototype,f)&&d(a,f,{configurable:!0,value:b})}}),a.registerDynamic("35",[],!0,function(a,b,c){this||self;c.exports=function(a){try{return!!a()}catch(a){return!0}}}),a.registerDynamic("33",["35"],!0,function(a,b,c){this||self;c.exports=!a("35")(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})}),a.registerDynamic("36",["1e","11","33","15"],!0,function(a,b,c){"use strict";var d=(this||self,a("1e")),e=a("11"),f=a("33"),g=a("15")("species");c.exports=function(a){var b=d[a];f&&b&&!b[g]&&e.setDesc(b,g,{configurable:!0,get:function(){return this}})}}),a.registerDynamic("37",["1d"],!0,function(a,b,c){var d=this||self,d=a("1d"),e="__core-js_shared__",f=d[e]||(d[e]={});c.exports=function(a){return f[a]||(f[a]={})}}),a.registerDynamic("38",[],!0,function(a,b,c){var d=(this||self,0),e=Math.random();c.exports=function(a){return"Symbol(".concat(void 0===a?"":a,")_",(++d+e).toString(36))}}),a.registerDynamic("1d",[],!0,function(a,b,c){var d=this||self,d=c.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=d)}),a.registerDynamic("15",["37","38","1d"],!0,function(a,b,c){var d=(this||self,a("37")("wks")),e=a("38"),f=a("1d").Symbol;c.exports=function(a){return d[a]||(d[a]=f&&f[a]||(f||e)("Symbol."+a))}}),a.registerDynamic("39",["15"],!0,function(a,b,c){var d=(this||self,a("15")("iterator")),e=!1;try{var f=[7][d]();f.return=function(){e=!0},Array.from(f,function(){throw 2})}catch(a){}c.exports=function(a,b){if(!b&&!e)return!1;var c=!1;try{var f=[7],g=f[d]();g.next=function(){return{done:c=!0}},f[d]=function(){return g},a(f)}catch(a){}return c}}),a.registerDynamic("3a",[],!0,function(a,b,c){function d(){throw new Error("setTimeout has not been defined")}function e(){throw new Error("clearTimeout has not been defined")}function f(a){if(l===setTimeout)return setTimeout(a,0);if((l===d||!l)&&setTimeout)return l=setTimeout,setTimeout(a,0);try{return l(a,0)}catch(b){try{return l.call(null,a,0)}catch(b){return l.call(this,a,0)}}}function g(a){if(m===clearTimeout)return clearTimeout(a);if((m===e||!m)&&clearTimeout)return m=clearTimeout,clearTimeout(a);try{return m(a)}catch(b){try{return m.call(null,a)}catch(b){return m.call(this,a)}}}function h(){q&&o&&(q=!1,o.length?p=o.concat(p):r=-1,p.length&&i())}function i(){if(!q){var a=f(h);q=!0;for(var b=p.length;b;){for(o=p,p=[];++r<b;)o&&o[r].run();r=-1,b=p.length}o=null,q=!1,g(a)}}function j(a,b){this.fun=a,this.array=b}function k(){}var l,m,n=(this||self,c.exports={});!function(){try{l="function"==typeof setTimeout?setTimeout:d}catch(a){l=d}try{m="function"==typeof clearTimeout?clearTimeout:e}catch(a){m=e}}();var o,p=[],q=!1,r=-1;n.nextTick=function(a){var b=new Array(arguments.length-1);if(arguments.length>1)for(var c=1;c<arguments.length;c++)b[c-1]=arguments[c];p.push(new j(a,b)),1!==p.length||q||f(i)},j.prototype.run=function(){this.fun.apply(null,this.array)},n.title="browser",n.browser=!0,n.env={},n.argv=[],n.version="",n.versions={},n.on=k,n.addListener=k,n.once=k,n.off=k,n.removeListener=k,n.removeAllListeners=k,n.emit=k,n.binding=function(a){throw new Error("process.binding is not supported")},n.cwd=function(){return"/"},n.chdir=function(a){throw new Error("process.chdir is not supported")},n.umask=function(){return 0}}),a.registerDynamic("3b",["3a"],!0,function(a,b,c){this||self;c.exports=a("3a")}),a.registerDynamic("3c",["3b"],!0,function(b,c,d){this||self;d.exports=a._nodeRequire?process:b("3b")}),a.registerDynamic("31",["3c"],!0,function(a,b,c){this||self;c.exports=a("3c")}),a.registerDynamic("3d",["11","16","1d","1f","25","17","29","22","2c","20","27","28","2a","15","2b","32","33","34","13","36","1e","39","31"],!0,function(a,b,c){this||self;!function(b){"use strict";var c,d=a("11"),e=a("16"),f=a("1d"),g=a("1f"),h=a("25"),i=a("17"),j=a("29"),k=a("22"),l=a("2c"),m=a("20"),n=a("27"),o=a("28").set,p=a("2a"),q=a("15")("species"),r=a("2b"),s=a("32"),t="Promise",b=f.process,u="process"==h(b),v=f[t],w=function(){},x=function(a){var b,c=new v(w);return a&&(c.constructor=function(a){a(w,w)}),(b=v.resolve(c)).catch(w),b===c},y=function(){function b(a){var c=new v(a);return o(c,b.prototype),c}var c=!1;try{if(c=v&&v.resolve&&x(),o(b,v),b.prototype=d.create(v.prototype,{constructor:{value:b}}),b.resolve(5).then(function(){})instanceof b||(c=!1),c&&a("33")){var e=!1;v.resolve(d.setDesc({},"then",{get:function(){e=!0}})),c=e}}catch(a){c=!1}return c}(),z=function(a,b){return!(!e||a!==v||b!==c)||p(a,b)},A=function(a){var b=k(a)[q];return void 0!=b?b:a},B=function(a){var b;return!(!j(a)||"function"!=typeof(b=a.then))&&b},C=function(a){var b,c;this.promise=new a(function(a,d){if(void 0!==b||void 0!==c)throw TypeError("Bad Promise constructor");b=a,c=d}),this.resolve=l(b),this.reject=l(c)},D=function(a){try{a()}catch(a){return{error:a}}},E=function(a,c){if(!a.n){a.n=!0;var d=a.c;s(function(){for(var e=a.v,g=1==a.s,h=0,i=function(b){var c,d,f=g?b.ok:b.fail,h=b.resolve,i=b.reject;try{f?(g||(a.h=!0),c=f===!0?e:f(e),c===b.promise?i(TypeError("Promise-chain cycle")):(d=B(c))?d.call(c,h,i):h(c)):i(e)}catch(a){i(a)}};d.length>h;)i(d[h++]);d.length=0,a.n=!1,c&&setTimeout(function(){var c,d,g=a.p;F(g)&&(u?b.emit("unhandledRejection",e,g):(c=f.onunhandledrejection)?c({promise:g,reason:e}):(d=f.console)&&d.error&&d.error("Unhandled promise rejection",e)),a.a=void 0},1)})}},F=function(a){var b,c=a._d,d=c.a||c.c,e=0;if(c.h)return!1;for(;d.length>e;)if(b=d[e++],b.fail||!F(b.promise))return!1;return!0},G=function(a){var b=this;b.d||(b.d=!0,b=b.r||b,b.v=a,b.s=2,b.a=b.c.slice(),E(b,!0))},H=function(a){var b,c=this;if(!c.d){c.d=!0,c=c.r||c;try{if(c.p===a)throw TypeError("Promise can't be resolved itself");(b=B(a))?s(function(){var d={r:c,d:!1};try{b.call(a,g(H,d,1),g(G,d,1))}catch(a){G.call(d,a)}}):(c.v=a,c.s=1,E(c,!1))}catch(a){G.call({r:c,d:!1},a)}}};y||(v=function(a){l(a);var b=this._d={p:m(this,v,t),c:[],a:void 0,s:0,d:!1,v:void 0,h:!1,n:!1};try{a(g(H,b,1),g(G,b,1))}catch(a){G.call(b,a)}},a("34")(v.prototype,{then:function(a,b){var c=new C(r(this,v)),d=c.promise,e=this._d;return c.ok="function"!=typeof a||a,c.fail="function"==typeof b&&b,e.c.push(c),e.a&&e.a.push(c),e.s&&E(e,!1),d},catch:function(a){return this.then(void 0,a)}})),i(i.G+i.W+i.F*!y,{Promise:v}),a("13")(v,t),a("36")(t),c=a("1e")[t],i(i.S+i.F*!y,t,{reject:function(a){var b=new C(this),c=b.reject;return c(a),b.promise}}),i(i.S+i.F*(!y||x(!0)),t,{resolve:function(a){if(a instanceof v&&z(a.constructor,this))return a;var b=new C(this),c=b.resolve;return c(a),b.promise}}),i(i.S+i.F*!(y&&a("39")(function(a){v.all(a).catch(function(){})})),t,{all:function(a){var b=A(this),c=new C(b),e=c.resolve,f=c.reject,g=[],h=D(function(){n(a,!1,g.push,g);var c=g.length,h=Array(c);c?d.each.call(g,function(a,d){var g=!1;b.resolve(a).then(function(a){g||(g=!0,h[d]=a,--c||e(h))},f)}):e(h)});return h&&f(h.error),c.promise},race:function(a){var b=A(this),c=new C(b),d=c.reject,e=D(function(){n(a,!1,function(a){b.resolve(a).then(c.resolve,d)})});return e&&d(e.error),c.promise}})}(a("31"))}),a.registerDynamic("1e",[],!0,function(a,b,c){var d=(this||self,c.exports={version:"1.2.6"});"number"==typeof __e&&(__e=d)}),a.registerDynamic("3e",["5","9","1c","3d","1e"],!0,function(a,b,c){this||self;a("5"),a("9"),a("1c"),a("3d"),c.exports=a("1e").Promise}),a.registerDynamic("4",["3e"],!0,function(a,b,c){this||self;c.exports={default:a("3e"),__esModule:!0}}),a.register("3",["4"],function(a){var b;return{setters:[function(a){b=a.default}],execute:function(){"use strict";a("default",function(a,c){return new b(function(b,c){var d=new XMLHttpRequest;d.timeout=2e4,d.open("GET",a,!0),d.onload=function(){if(d.status>=200&&d.status<400)try{var a=JSON.parse(d.responseText);b(a)}catch(a){console.error(a),b([])}else console.error("Bad status: "+d.status),b([])},d.onerror=function(a){console.error(d),b([])},d.ontimeout=function(a){console.error("timeout"),b([])},d.send()}).catch(function(a){console.error(a)})})}}}),a.register("3f",["3","40"],function(a){"use strict";var b,c;return{setters:[function(a){b=a.default},function(a){c=a.default}],execute:function(){a("default",function(a,d){return"fighters"in localStorage?a:b(d+"/fighters").then(function(b){return console.log(b),c.setObject("fighters",b),a})})}}}),a.register("41",["2","3","42","43","3f"],function(a){var b,c,d,e,f,g;return{setters:[function(a){b=a.default},function(a){c=a.default},function(a){d=a.default},function(a){e=a.default},function(a){f=a.default}],execute:function(){"use strict";g=function(){function a(){e(this,a),this.base_url=["http://crossorigin.me/","http://ufc-data-api.ufc.com/api/v3/us"].join("")}return d(a,[{key:"get_fighters",value:function(){return c(this.base_url+"/fighters")}},{key:"get_events",value:function(){return c(this.base_url+"/events")}},{key:"get_event_fights",value:function(a){return b(a,this.base_url)}},{key:"get_and_store_fighters",value:function(a){return f(a,this.base_url)}}]),a}(),a("default",new g)}}}),a.register("44",["40"],function(a){"use strict";var b;return{setters:[function(a){b=a.default}],execute:function(){a("default",function(a){return a.filter(function(a){var c=new Date(a.event_date);return b.is_same_date(a.event_date)||c>new Date}).sort(function(a,b){return new Date(a.event_date)-new Date(b.event_date)})})}}}),a.registerDynamic("11",[],!0,function(a,b,c){var d=(this||self,Object);c.exports={create:d.create,getProto:d.getPrototypeOf,isEnum:{}.propertyIsEnumerable,getDesc:d.getOwnPropertyDescriptor,setDesc:d.defineProperty,setDescs:d.defineProperties,getKeys:d.keys,getNames:d.getOwnPropertyNames,getSymbols:d.getOwnPropertySymbols,each:[].forEach}}),a.registerDynamic("45",["11"],!0,function(a,b,c){var d=(this||self,a("11"));c.exports=function(a,b,c){return d.setDesc(a,b,c)}}),a.registerDynamic("46",["45"],!0,function(a,b,c){this||self;c.exports={default:a("45"),__esModule:!0}}),a.registerDynamic("42",["46"],!0,function(a,b,c){"use strict";var d=(this||self,a("46").default);b.default=function(){function a(a,b){for(var c=0;c<b.length;c++){var e=b[c];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),d(a,e.key,e)}}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}(),b.__esModule=!0}),a.registerDynamic("43",[],!0,function(a,b,c){"use strict";this||self;b.default=function(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")},b.__esModule=!0}),a.register("40",["42","43"],function(a){var b,c,d;return{setters:[function(a){b=a.default},function(a){c=a.default}],execute:function(){"use strict";d=function(){function a(b){c(this,a),this.cache={}}return b(a,[{key:"tmpl",value:function(a,b){var c=/\W/.test(a)?new Function("obj","var p=[],print=function(){p.push.apply(p,arguments);};with(obj){p.push('"+a.replace(/[\r\t\n]/g," ").split("<%").join("\t").replace(/((^|%>)[^\t]*)'/g,"$1\r").replace(/\t=(.*?)%>/g,"',$1,'").split("\t").join("');").split("%>").join("p.push('").split("\r").join("\\'")+"');}return p.join('');"):this.cache[a]=this.cache[a]||this.tmpl(document.getElementById(a).innerHTML);return b?c(b):c}},{key:"get_formatted_date",value:function(a){var b=new Date(a),c=new Date(b.getUTCFullYear(),b.getUTCMonth(),b.getUTCDate());return c.toLocaleDateString("en-US",{weekday:"long",month:"long",day:"numeric"})}},{key:"class_iterate",value:function(a,b){for(var c=document.getElementsByClassName(a),d=c.length-1;d>=0;d--)b(c[d])}},{key:"setObject",value:function(a,b){localStorage.setItem(a,JSON.stringify(b))}},{key:"getObject",value:function(a){var b=localStorage.getItem(a);return b&&JSON.parse(b)}},{key:"get_fighter_object",value:function(a,b){var c={};return b.forEach(function(b){if(b.id==a)return void(c=b)}),c}},{key:"is_same_date",value:function(a){var b=new Date(a),c=new Date;return b.getUTCFullYear()==c.getUTCFullYear()&&b.getUTCMonth()==c.getUTCMonth()&&(b.getUTCDate()==c.getUTCDate()||b.getUTCDate()==c.getUTCDate()-1||b.getUTCDate()==c.getUTCDate()+1)}}]),a}(),a("default",new d)}}}),a.register("47",["40","42","43"],function(a){var b,c,d,e;return{setters:[function(a){b=a.default},function(a){c=a.default},function(a){d=a.default}],execute:function(){"use strict";e=function(){function a(b){d(this,a),this.fighters=[]}return c(a,[{key:"initialize",value:function(a){this.fighters=b.getObject("fighters")||[],this.build_templates(a),this.load_feature_images(),this.bind_accordions(),this.toggle_loader()}},{key:"build_templates",value:function(a){var c=this;a.forEach(function(a,d){console.log(a),document.getElementById("events-container").insertAdjacentHTML("beforeend",b.tmpl("tmpl_event",{base_title:a.base_title||"",title_tag_line:a.title_tag_line||"",subtitle:a.subtitle||"",status:a.event_status||"",date:b.get_formatted_date(a.event_date),time:a.event_time_text+" "+a.event_time_zone_text,img_src:a.feature_image||a.secondary_feature_image,arena:a.arena,location:a.location?"in "+a.location:"",accordions:c.get_accordions(a)}))})}},{key:"get_accordions",value:function(a){var c=this,d="",e=a.fights||[];return e.forEach(function(e,f){var g=b.get_fighter_object(e.fighter1_id,c.fighters),h=b.get_fighter_object(e.fighter2_id,c.fighters);d+=b.tmpl("tmpl_fight",{accordion_index:f,event_id:a.id,fight_id:e.id,fighter_1:(e.fighter1_first_name||g.first_name||"???")+" "+(e.fighter1_last_name||g.last_name||"???"),fighter_2:(e.fighter2_first_name||h.first_name||"???")+" "+(e.fighter2_last_name||h.last_name||"???"),fight_details:b.tmpl("tmpl_fight_details",{f1_profile:g.profile_image,f2_profile:h.profile_image,record_1:e.fighter1record||0,record_2:e.fighter2record||0,height_1:e.fighter1height||0,height_2:e.fighter2height||0,weight_1:e.fighter1weight||0,weight_2:e.fighter2weight||0,reach_1:e.fighter1reach||0,reach_2:e.fighter2reach||0,slpm_1:e.fighter1_slpm||0,slpm_2:e.fighter2_slpm||0,striking_accuracy_1:e.fighter1_strikingaccuracy||0,striking_accuracy_2:e.fighter2_strikingaccuracy||0,sapm_1:e.fighter1_sapm||0,sapm_2:e.fighter2_sapm||0,defense_1:e.fighter1_strikingdefense||0,defense_2:e.fighter2_strikingdefense||0,takedownaverage_1:e.fighter1_takedownaverage||0,takedownaverage_2:e.fighter2_takedownaverage||0,takedownaccuracy_1:e.fighter1_takedownaccuracy||0,takedownaccuracy_2:e.fighter2_takedownaccuracy||0,takedowndefense_1:e.fighter1_takedowndefense||0,takedowndefense_2:e.fighter2_takedowndefense||0,submissionsaverage_1:e.fighter1_submissionsaverage||0,submissionsaverage_2:e.fighter2_submissionsaverage||0})})}),d}},{key:"bind_accordions",value:function(){b.class_iterate("accordion",function(a){a.addEventListener("click",function(b){if(a.classList.contains("closed")){a.classList.remove("closed"),a.classList.add("open");for(var c=a.parentNode.children.length-1;c>=0;c--){var d=a.parentNode.children[c];d!==a&&(d.classList.remove("open"),d.classList.add("closed"))}}else a.classList.remove("open"),a.classList.add("closed")},!1)})}},{key:"load_feature_images",value:function(){b.class_iterate("feature-img-container",function(a){a.style.backgroundImage="url('"+a.dataset.src+"')"})}},{key:"toggle_loader",value:function(){document.getElementById("loader").className="hide",document.getElementById("events-container").className="row center-xs"}}]),a}(),a("default",new e)}}}),a.register("1",["41","44","47"],function(a){"use strict";var b,c,d;return{setters:[function(a){b=a.default},function(a){c=a.default},function(a){d=a.default}],execute:function(){b.get_events().then(c).then(b.get_and_store_fighters.bind(b)).then(b.get_event_fights.bind(b)).then(d.initialize.bind(d)).catch(function(a){console.error(a)})}}})})(function(a){a()});
//# sourceMappingURL=app.js.map