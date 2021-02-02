// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"NmBf":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isDataExists = isDataExists;
exports.removeItem = removeItem;

/**
 * Check element exists inside array
 * @param {array} array
 * @param {any} element
 */
function isDataExists(array, element) {
  return array.indexOf(element) !== -1;
}
/**
 * Remove an element inside array
 * @param {array} array
 * @param {any} value
 */


function removeItem(array, value) {
  return array.filter(function (item) {
    return item !== value;
  });
}
},{}],"Vk9b":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getObjectPropertyByValue = exports.getObjectProperty = exports.convertToArray = exports.isObject = void 0;

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/* eslint-disable import/prefer-default-export */

/**
 * Check is object or not
 * @param {object} value
 */
var isObject = function isObject(value) {
  return value && _typeof(value) === 'object' && value.constructor === Object;
};
/**
 * Convert the array to the object
 * @param {object} object
 */


exports.isObject = isObject;

var convertToArray = function convertToArray(object) {
  if (object) {
    if (isObject(object)) {
      var data = [];
      Object.keys(object).map(function (key) {
        data[key] = object[key];
        return true;
      });
      return data;
    }

    return object;
  }

  return [];
};
/**
 * Get property from object
 * @param {object} obj
 * @param {strin} key
 */


exports.convertToArray = convertToArray;

var getObjectProperty = function getObjectProperty(obj, key) {
  var value = Object.prototype.hasOwnProperty.call(obj, key) ? Object.assign(obj)[key] : null;
  return value;
};
/**
 * Get object's property by value
 * @param {string} value
 * @param {object} object
 */


exports.getObjectProperty = getObjectProperty;

var getObjectPropertyByValue = function getObjectPropertyByValue(value, object) {
  var output = '';
  Object.keys(object).map(function (key) {
    if (object[key] === value) {
      output = key;
    }

    return true;
  });
  return output;
};

exports.getObjectPropertyByValue = getObjectPropertyByValue;
},{}],"EYbI":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generateString = void 0;

/* eslint-disable import/prefer-default-export */
var generateString = function generateString(string, number) {
  var stringOutput = '';

  for (var i = 0; i < number; i += 1) {
    stringOutput += string;
  }

  return stringOutput;
};

exports.generateString = generateString;
},{}],"gcXW":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getCurrentTime = void 0;

/* eslint-disable import/prefer-default-export */

/**
 * Get current time
 * @param {boolean} isShowDetail
 */
var getCurrentTime = function getCurrentTime(isShowDetail) {
  var isShowDetailState = isShowDetail || false;
  var currentTime = new Date();

  if (isShowDetailState) {
    var weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    var hour = currentTime.getHours();
    var minute = currentTime.getMinutes();
    var second = currentTime.getSeconds();
    var section = hour >= 12 ? 'pm' : 'am';
    var weekday = weekdays[currentTime.getDay()];
    var month = months[currentTime.getMonth()];
    var day = currentTime.getDate();
    var year = currentTime.getFullYear();
    return {
      hour: hour,
      minute: minute,
      second: second,
      section: section,
      weekday: weekday,
      month: month,
      day: day,
      year: year
    };
  }

  return currentTime;
};

exports.getCurrentTime = getCurrentTime;
},{}],"ly4K":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.moneyFormat = exports.randomNumber = exports.handleSingular = exports.paddingZero = exports.toNumber = void 0;

/**
 * Convert the numver with string type to number
 * @param {string} numberWithStringType
 */
var toNumber = function toNumber(numberWithStringType) {
  return parseInt(numberWithStringType, 10);
};
/**
 * Padding the zero to the number
 * @param {number} number
 * @param {number} length
 */


exports.toNumber = toNumber;

var paddingZero = function paddingZero(number, length) {
  var s = "".concat(number);

  while (s.length < (length || 2)) {
    s = "0".concat(s);
  }

  return s;
};
/**
 * Handle add "s" for the singular number
 * @param {number} number
 * @param {string} string
 */


exports.paddingZero = paddingZero;

var handleSingular = function handleSingular(number, string) {
  return number > 1 ? "".concat(number, " ").concat(string, "s") : "".concat(number, " ").concat(string);
};
/**
 * Random number between specific range
 * @param {number} start
 * @param {number} end
 */


exports.handleSingular = handleSingular;

var randomNumber = function randomNumber(start, end) {
  return Math.floor(Math.random() * end) + start;
};
/**
 * Format money type
 * @param {number} number
 * @param {string} string
 */


exports.randomNumber = randomNumber;

var moneyFormat = function moneyFormat(number, string) {
  var format = /\B(?=(\d{3})+(?!\d))/g;
  return "".concat(number).replace(format, string);
};

exports.moneyFormat = moneyFormat;
},{}],"HMUh":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getParamInURL = void 0;

/* eslint-disable import/prefer-default-export */

/**
 * Get param in the url
 * @param {string} url
 * @param {string} item
 */
var getParamInURL = function getParamInURL(url, item) {
  return new URL(url).searchParams.get(item);
};

exports.getParamInURL = getParamInURL;
},{}],"fRxd":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.removeClass = exports.addClass = exports.isClassExists = exports.qsAll = exports.qs = void 0;

/**
 * Short hand for query selector
 * @param {string} selector
 */
var qs = function qs(selector) {
  return document.querySelector(selector);
};
/**
 * Short hand for queryselector all
 * @param {string} selector
 */


exports.qs = qs;

var qsAll = function qsAll(selector) {
  return document.querySelectorAll(selector);
};
/**
 * Check class exists inside the DOM
 * @param {DOM} params
 */


exports.qsAll = qsAll;

var isClassExists = function isClassExists(element, containClass) {
  return element.classList.contains(containClass);
};
/**
 * Add class in to element
 * @param {DOM} element
 * @param {string} classAdd
 */


exports.isClassExists = isClassExists;

var addClass = function addClass(element, className) {
  return element.classList.add(className);
};
/**
 * Rmeove class form element
 * @param {DOM} element
 * @param {string} classAdd
 */


exports.addClass = addClass;

var removeClass = function removeClass(element, className) {
  return element.classList.remove(className);
};

exports.removeClass = removeClass;
},{}],"vktu":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pagination = void 0;

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/* eslint-disable import/prefer-default-export */
var pagination = function pagination(numberEachPage, dataInput) {
  var dataClone = _toConsumableArray(dataInput);

  var pagesData = {};
  var pages = new Array(Math.ceil(dataClone.length / numberEachPage)).fill().map(function () {
    return dataClone.splice(0, numberEachPage);
  });
  pages.forEach(function (page, index) {
    pagesData[index + 1] = page;
  });
  return {
    numberOfPage: pages.length,
    objectPages: pagesData,
    arrayPages: pages,
    all: dataInput,
    totalItems: dataInput.length
  };
};

exports.pagination = pagination;
},{}],"i59R":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.XHTTPRequest = void 0;

var _objects = require("./objects");

/* eslint-disable import/prefer-default-export */
var XHTTPRequest = function XHTTPRequest(dataRequest) {
  var method = dataRequest.method,
      endpoint = dataRequest.endpoint,
      body = dataRequest.body,
      response = dataRequest.response,
      header = dataRequest.header;
  var xhttp = new XMLHttpRequest();
  xhttp.open(method, endpoint, true);

  if (header && (0, _objects.isObject)(header)) {
    Object.keys(header).map(function (key) {
      return xhttp.setRequestHeader(key, header[key]);
    });
  }

  xhttp.onreadystatechange = function () {
    if (xhttp.readyState === 4) {
      if (xhttp.status >= 200 && xhttp.status < 300) {
        var dataResponse = '';

        try {
          dataResponse = JSON.parse(xhttp.responseText);
        } catch (error) {
          dataResponse = xhttp.responseText;
        }

        response({
          status: true,
          message: 'Send request successfully!',
          data: dataResponse
        });
      } else {
        response({
          status: false,
          message: 'Something went wrong!',
          data: []
        });
      }
    }
  };

  xhttp.send(JSON.stringify(body));
};

exports.XHTTPRequest = XHTTPRequest;
},{"./objects":"Vk9b"}],"RvaL":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getCurrentVersion = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/* eslint-disable import/prefer-default-export */
var getCurrentVersion = function getCurrentVersion() {
  var Version = /*#__PURE__*/function () {
    function Version() {
      _classCallCheck(this, Version);

      this.major = 1;
      this.minor = 0;
      this.patch = 0;
    }
    /**
     * Get major value
     */


    _createClass(Version, [{
      key: "getMajor",
      value: function getMajor() {
        return this.major;
      }
      /**
       * Get minor value
       */

    }, {
      key: "getMinor",
      value: function getMinor() {
        return this.minor;
      }
      /**
       * Get Patch value
       */

    }, {
      key: "getPatch",
      value: function getPatch() {
        return this.patch;
      }
      /**
       * Get full version
       */

    }, {
      key: "getFullVersion",
      value: function getFullVersion() {
        return "".concat(this.major, ".").concat(this.minor, ".").concat(this.patch);
      }
      /**
       * Get version
       */

    }, {
      key: "getVersion",
      value: function getVersion() {
        return {
          major: this.getMajor(),
          minor: this.getMinor(),
          patch: this.getPatch(),
          full: this.getFullVersion()
        };
      }
      /**
       * Initialize the module
       */

    }, {
      key: "init",
      value: function init() {
        return this.getVersion();
      }
    }]);

    return Version;
  }();

  return new Version().init();
};

exports.getCurrentVersion = getCurrentVersion;
},{}],"IRJd":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createWaterMark = void 0;

/* eslint-disable import/prefer-default-export */
var createWaterMark = function createWaterMark(data) {
  // eslint-disable-next-line no-console
  console.log(data);
  return 'This feature is building...';
};

exports.createWaterMark = createWaterMark;
},{}],"iRxa":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.imageAPI = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/* eslint-disable import/prefer-default-export */
var imageAPI = function imageAPI() {
  var ImageAPI = /*#__PURE__*/function () {
    function ImageAPI(apiKey) {
      _classCallCheck(this, ImageAPI);

      this.apiKey = apiKey;
    }

    _createClass(ImageAPI, [{
      key: "init",
      value: function init() {
        return {
          upload: this.upload()
        };
      }
    }, {
      key: "upload",
      value: function upload() {
        return this;
      }
    }]);

    return ImageAPI;
  }();

  return new ImageAPI().init();
};

exports.imageAPI = imageAPI;
},{}],"exY1":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.slack = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/* eslint-disable import/prefer-default-export */
var slack = function slack(hook, callback) {
  var slackCallback = callback || function name() {};

  var Slack = /*#__PURE__*/function () {
    function Slack() {
      _classCallCheck(this, Slack);
    }

    _createClass(Slack, [{
      key: "send",
      value: function send(data) {
        window.Helpers.XHTTPRequest({
          method: 'POST',
          endpoint: hook,
          body: data,
          response: function response(_response) {
            slackCallback(_response);
          },
          header: {}
        });
        return this;
      }
    }, {
      key: "init",
      value: function init() {
        return {
          send: this.send
        };
      }
    }]);

    return Slack;
  }();

  return new Slack().init();
};

exports.slack = slack;
},{}],"Focm":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {};
exports.default = void 0;

var ArrayHelpers = _interopRequireWildcard(require("./arrays"));

Object.keys(ArrayHelpers).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === ArrayHelpers[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return ArrayHelpers[key];
    }
  });
});

var ObjectHelpers = _interopRequireWildcard(require("./objects"));

Object.keys(ObjectHelpers).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === ObjectHelpers[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return ObjectHelpers[key];
    }
  });
});

var StringHelpers = _interopRequireWildcard(require("./strings"));

Object.keys(StringHelpers).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === StringHelpers[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return StringHelpers[key];
    }
  });
});

var DateTimeHelpers = _interopRequireWildcard(require("./datetime"));

Object.keys(DateTimeHelpers).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === DateTimeHelpers[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return DateTimeHelpers[key];
    }
  });
});

var NumberHelpers = _interopRequireWildcard(require("./numbers"));

Object.keys(NumberHelpers).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === NumberHelpers[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return NumberHelpers[key];
    }
  });
});

var URLHelpers = _interopRequireWildcard(require("./urls"));

Object.keys(URLHelpers).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === URLHelpers[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return URLHelpers[key];
    }
  });
});

var DOMHelpers = _interopRequireWildcard(require("./dom"));

Object.keys(DOMHelpers).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === DOMHelpers[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return DOMHelpers[key];
    }
  });
});

var PaginationHelpers = _interopRequireWildcard(require("./pagination"));

Object.keys(PaginationHelpers).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === PaginationHelpers[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return PaginationHelpers[key];
    }
  });
});

var APIRequestHelpers = _interopRequireWildcard(require("./api-request"));

Object.keys(APIRequestHelpers).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === APIRequestHelpers[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return APIRequestHelpers[key];
    }
  });
});

var VersionHelpers = _interopRequireWildcard(require("./version"));

Object.keys(VersionHelpers).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === VersionHelpers[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return VersionHelpers[key];
    }
  });
});

var WaterMarkHelpers = _interopRequireWildcard(require("./water-mark"));

Object.keys(WaterMarkHelpers).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === WaterMarkHelpers[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return WaterMarkHelpers[key];
    }
  });
});

var ImageAPIHelpers = _interopRequireWildcard(require("./image-api"));

Object.keys(ImageAPIHelpers).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === ImageAPIHelpers[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return ImageAPIHelpers[key];
    }
  });
});

var Slack = _interopRequireWildcard(require("./slack"));

Object.keys(Slack).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === Slack[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return Slack[key];
    }
  });
});

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var Helpers = Object.assign(ArrayHelpers, ObjectHelpers, StringHelpers, DateTimeHelpers, NumberHelpers, URLHelpers, DOMHelpers, PaginationHelpers, APIRequestHelpers, VersionHelpers, WaterMarkHelpers, ImageAPIHelpers, Slack);
/**
 * Export all of functions as global
 */

window.Helpers = Helpers;
/**
 * Handle when DOM loaded
 */

window.addEventListener('DOMContentLoaded', function () {
  setTimeout( // eslint-disable-next-line no-console
  console.log.bind(console, "%c Helpers %c Current version: v".concat(Helpers.getCurrentVersion().full, " %c"), 'background:#35495e; padding: 1px; border-radius: 3px 0 0 3px;  color: #fff', 'background:#0170fe; padding: 1px; border-radius: 0 3px 3px 0;  color: #fff', 'background:transparent'));
});
/**
 * Export module as default
 */

var _default = Helpers;
exports.default = _default;
},{"./arrays":"NmBf","./objects":"Vk9b","./strings":"EYbI","./datetime":"gcXW","./numbers":"ly4K","./urls":"HMUh","./dom":"fRxd","./pagination":"vktu","./api-request":"i59R","./version":"RvaL","./water-mark":"IRJd","./image-api":"iRxa","./slack":"exY1"}]},{},["Focm"], null)