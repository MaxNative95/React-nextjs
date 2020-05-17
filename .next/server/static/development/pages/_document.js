module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/constants":
/*!*********************************************************!*\
  !*** external "next/dist/next-server/lib/constants.js" ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/constants.js");

/***/ }),

/***/ "../next-server/lib/document-context":
/*!****************************************************************!*\
  !*** external "next/dist/next-server/lib/document-context.js" ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/document-context.js");

/***/ }),

/***/ "../next-server/lib/utils":
/*!*****************************************************!*\
  !*** external "next/dist/next-server/lib/utils.js" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/utils.js");

/***/ }),

/***/ "../next-server/server/utils":
/*!********************************************************!*\
  !*** external "next/dist/next-server/server/utils.js" ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/server/utils.js");

/***/ }),

/***/ "./node_modules/next/dist/pages/_document.js":
/*!***************************************************!*\
  !*** ./node_modules/next/dist/pages/_document.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.middleware = middleware;
exports.NextScript = exports.Main = exports.Head = exports.Html = exports.default = void 0;

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _server = _interopRequireDefault(__webpack_require__(/*! styled-jsx/server */ "styled-jsx/server"));

var _constants = __webpack_require__(/*! ../next-server/lib/constants */ "../next-server/lib/constants");

var _documentContext = __webpack_require__(/*! ../next-server/lib/document-context */ "../next-server/lib/document-context");

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "../next-server/lib/utils");

exports.DocumentContext = _utils.DocumentContext;
exports.DocumentInitialProps = _utils.DocumentInitialProps;
exports.DocumentProps = _utils.DocumentProps;

var _utils2 = __webpack_require__(/*! ../next-server/server/utils */ "../next-server/server/utils");

var _htmlescape = __webpack_require__(/*! ../server/htmlescape */ "./node_modules/next/dist/server/htmlescape.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

async function middleware({
  req,
  res
}) {}

function dedupe(bundles) {
  const files = new Set();
  const kept = [];

  for (const bundle of bundles) {
    if (files.has(bundle.file)) continue;
    files.add(bundle.file);
    kept.push(bundle);
  }

  return kept;
}

function getOptionalModernScriptVariant(path) {
  if (false) {}

  return path;
}
/**
* `Document` component handles the initial `document` markup and renders only on the server side.
* Commonly used for implementing server side rendering for `css-in-js` libraries.
*/


class Document extends _react.Component {
  /**
  * `getInitialProps` hook returns the context object with the addition of `renderPage`.
  * `renderPage` callback executes `React` rendering logic synchronously to support server-rendering wrappers
  */
  static async getInitialProps(ctx) {
    const enhancers =  false ? undefined : [];

    const enhanceApp = App => {
      for (const enhancer of enhancers) {
        App = enhancer(App);
      }

      return props => /*#__PURE__*/_react.default.createElement(App, props);
    };

    const {
      html,
      head
    } = await ctx.renderPage({
      enhanceApp
    });
    const styles = [...(0, _server.default)(), ...( false ? undefined : [])];
    return {
      html,
      head,
      styles
    };
  }

  static renderDocument(Document, props) {
    return /*#__PURE__*/_react.default.createElement(_documentContext.DocumentContext.Provider, {
      value: {
        _documentProps: props,
        // In dev we invalidate the cache by appending a timestamp to the resource URL.
        // This is a workaround to fix https://github.com/zeit/next.js/issues/5860
        // TODO: remove this workaround when https://bugs.webkit.org/show_bug.cgi?id=187726 is fixed.
        _devOnlyInvalidateCacheQueryString: true ? '?ts=' + Date.now() : undefined
      }
    }, /*#__PURE__*/_react.default.createElement(Document, props));
  }

  render() {
    return /*#__PURE__*/_react.default.createElement(Html, null, /*#__PURE__*/_react.default.createElement(Head, null), /*#__PURE__*/_react.default.createElement("body", null, /*#__PURE__*/_react.default.createElement(Main, null), /*#__PURE__*/_react.default.createElement(NextScript, null)));
  }

}

exports.default = Document;
Document.headTagsMiddleware =  false ? undefined : () => [];
Document.bodyTagsMiddleware =  false ? undefined : () => [];
Document.htmlPropsMiddleware =  false ? undefined : () => [];

class Html extends _react.Component {
  constructor(...args) {
    super(...args);
    this.context = void 0;
  }

  render() {
    const {
      inAmpMode,
      htmlProps
    } = this.context._documentProps;
    return /*#__PURE__*/_react.default.createElement("html", Object.assign({}, htmlProps, this.props, {
      amp: inAmpMode ? '' : undefined,
      "data-ampdevmode": inAmpMode && true ? '' : undefined
    }));
  }

}

exports.Html = Html;
Html.contextType = _documentContext.DocumentContext;
Html.propTypes = {
  children: _propTypes.default.node.isRequired
};

class Head extends _react.Component {
  constructor(...args) {
    super(...args);
    this.context = void 0;
  }

  getCssLinks() {
    const {
      assetPrefix,
      files
    } = this.context._documentProps;
    const {
      _devOnlyInvalidateCacheQueryString
    } = this.context;
    const cssFiles = files && files.length ? files.filter(f => /\.css$/.test(f)) : [];
    const cssLinkElements = [];
    cssFiles.forEach(file => {
      cssLinkElements.push( /*#__PURE__*/_react.default.createElement("link", {
        key: `${file}-preload`,
        nonce: this.props.nonce,
        rel: "preload",
        href: `${assetPrefix}/_next/${encodeURI(file)}${_devOnlyInvalidateCacheQueryString}`,
        as: "style",
        crossOrigin: this.props.crossOrigin || undefined
      }), /*#__PURE__*/_react.default.createElement("link", {
        key: file,
        nonce: this.props.nonce,
        rel: "stylesheet",
        href: `${assetPrefix}/_next/${encodeURI(file)}${_devOnlyInvalidateCacheQueryString}`,
        crossOrigin: this.props.crossOrigin || undefined
      }));
    });
    return cssLinkElements.length === 0 ? null : cssLinkElements;
  }

  getPreloadDynamicChunks() {
    const {
      dynamicImports,
      assetPrefix
    } = this.context._documentProps;
    const {
      _devOnlyInvalidateCacheQueryString
    } = this.context;
    return dedupe(dynamicImports).map(bundle => {
      // `dynamicImports` will contain both `.js` and `.module.js` when the
      // feature is enabled. This clause will filter down to the modern
      // variants only.
      if (!bundle.file.endsWith(getOptionalModernScriptVariant('.js'))) {
        return null;
      }

      return /*#__PURE__*/_react.default.createElement("link", {
        rel: "preload",
        key: bundle.file,
        href: `${assetPrefix}/_next/${encodeURI(bundle.file)}${_devOnlyInvalidateCacheQueryString}`,
        as: "script",
        nonce: this.props.nonce,
        crossOrigin: this.props.crossOrigin || undefined
      });
    }) // Filter out nulled scripts
    .filter(Boolean);
  }

  getPreloadMainLinks() {
    const {
      assetPrefix,
      files
    } = this.context._documentProps;
    const {
      _devOnlyInvalidateCacheQueryString
    } = this.context;
    const preloadFiles = files && files.length ? files.filter(file => {
      // `dynamicImports` will contain both `.js` and `.module.js` when
      // the feature is enabled. This clause will filter down to the
      // modern variants only.
      return file.endsWith(getOptionalModernScriptVariant('.js'));
    }) : [];
    return !preloadFiles.length ? null : preloadFiles.map(file => /*#__PURE__*/_react.default.createElement("link", {
      key: file,
      nonce: this.props.nonce,
      rel: "preload",
      href: `${assetPrefix}/_next/${encodeURI(file)}${_devOnlyInvalidateCacheQueryString}`,
      as: "script",
      crossOrigin: this.props.crossOrigin || undefined
    }));
  }

  render() {
    const {
      styles,
      ampPath,
      inAmpMode,
      assetPrefix,
      hybridAmp,
      canonicalBase,
      __NEXT_DATA__,
      dangerousAsPath,
      headTags,
      unstable_runtimeJS
    } = this.context._documentProps;
    const disableRuntimeJS = unstable_runtimeJS === false;
    const {
      _devOnlyInvalidateCacheQueryString
    } = this.context;
    const {
      page,
      buildId
    } = __NEXT_DATA__;
    let {
      head
    } = this.context._documentProps;
    let children = this.props.children; // show a warning if Head contains <title> (only in development)

    if (true) {
      children = _react.default.Children.map(children, child => {
        var _child$props;

        const isReactHelmet = child === null || child === void 0 ? void 0 : (_child$props = child.props) === null || _child$props === void 0 ? void 0 : _child$props['data-react-helmet'];

        if ((child === null || child === void 0 ? void 0 : child.type) === 'title' && !isReactHelmet) {
          console.warn("Warning: <title> should not be used in _document.js's <Head>. https://err.sh/next.js/no-document-title");
        }

        return child;
      });
      if (this.props.crossOrigin) console.warn('Warning: `Head` attribute `crossOrigin` is deprecated. https://err.sh/next.js/doc-crossorigin-deprecated');
    }

    let hasAmphtmlRel = false;
    let hasCanonicalRel = false; // show warning and remove conflicting amp head tags

    head = _react.default.Children.map(head || [], child => {
      if (!child) return child;
      const {
        type,
        props
      } = child;

      if (inAmpMode) {
        let badProp = '';

        if (type === 'meta' && props.name === 'viewport') {
          badProp = 'name="viewport"';
        } else if (type === 'link' && props.rel === 'canonical') {
          hasCanonicalRel = true;
        } else if (type === 'script') {
          // only block if
          // 1. it has a src and isn't pointing to ampproject's CDN
          // 2. it is using dangerouslySetInnerHTML without a type or
          // a type of text/javascript
          if (props.src && props.src.indexOf('ampproject') < -1 || props.dangerouslySetInnerHTML && (!props.type || props.type === 'text/javascript')) {
            badProp = '<script';
            Object.keys(props).forEach(prop => {
              badProp += ` ${prop}="${props[prop]}"`;
            });
            badProp += '/>';
          }
        }

        if (badProp) {
          console.warn(`Found conflicting amp tag "${child.type}" with conflicting prop ${badProp} in ${__NEXT_DATA__.page}. https://err.sh/next.js/conflicting-amp-tag`);
          return null;
        }
      } else {
        // non-amp mode
        if (type === 'link' && props.rel === 'amphtml') {
          hasAmphtmlRel = true;
        }
      }

      return child;
    }); // try to parse styles from fragment for backwards compat

    const curStyles = Array.isArray(styles) ? styles : [];

    if (inAmpMode && styles && // @ts-ignore Property 'props' does not exist on type ReactElement
    styles.props && // @ts-ignore Property 'props' does not exist on type ReactElement
    Array.isArray(styles.props.children)) {
      const hasStyles = el => {
        var _el$props, _el$props$dangerously;

        return el === null || el === void 0 ? void 0 : (_el$props = el.props) === null || _el$props === void 0 ? void 0 : (_el$props$dangerously = _el$props.dangerouslySetInnerHTML) === null || _el$props$dangerously === void 0 ? void 0 : _el$props$dangerously.__html;
      }; // @ts-ignore Property 'props' does not exist on type ReactElement


      styles.props.children.forEach(child => {
        if (Array.isArray(child)) {
          child.forEach(el => hasStyles(el) && curStyles.push(el));
        } else if (hasStyles(child)) {
          curStyles.push(child);
        }
      });
    }

    return /*#__PURE__*/_react.default.createElement("head", this.props, this.context._documentProps.isDevelopment && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("style", {
      "data-next-hide-fouc": true,
      "data-ampdevmode": inAmpMode ? 'true' : undefined,
      dangerouslySetInnerHTML: {
        __html: `body{display:none}`
      }
    }), /*#__PURE__*/_react.default.createElement("noscript", {
      "data-next-hide-fouc": true,
      "data-ampdevmode": inAmpMode ? 'true' : undefined
    }, /*#__PURE__*/_react.default.createElement("style", {
      dangerouslySetInnerHTML: {
        __html: `body{display:block}`
      }
    }))), children, head, /*#__PURE__*/_react.default.createElement("meta", {
      name: "next-head-count",
      content: _react.default.Children.count(head || []).toString()
    }), inAmpMode && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("meta", {
      name: "viewport",
      content: "width=device-width,minimum-scale=1,initial-scale=1"
    }), !hasCanonicalRel && /*#__PURE__*/_react.default.createElement("link", {
      rel: "canonical",
      href: canonicalBase + (0, _utils2.cleanAmpPath)(dangerousAsPath)
    }), /*#__PURE__*/_react.default.createElement("link", {
      rel: "preload",
      as: "script",
      href: "https://cdn.ampproject.org/v0.js"
    }), styles && /*#__PURE__*/_react.default.createElement("style", {
      "amp-custom": "",
      dangerouslySetInnerHTML: {
        __html: curStyles.map(style => style.props.dangerouslySetInnerHTML.__html).join('').replace(/\/\*# sourceMappingURL=.*\*\//g, '').replace(/\/\*@ sourceURL=.*?\*\//g, '')
      }
    }), /*#__PURE__*/_react.default.createElement("style", {
      "amp-boilerplate": "",
      dangerouslySetInnerHTML: {
        __html: `body{-webkit-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-moz-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-ms-animation:-amp-start 8s steps(1,end) 0s 1 normal both;animation:-amp-start 8s steps(1,end) 0s 1 normal both}@-webkit-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-moz-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-ms-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-o-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}`
      }
    }), /*#__PURE__*/_react.default.createElement("noscript", null, /*#__PURE__*/_react.default.createElement("style", {
      "amp-boilerplate": "",
      dangerouslySetInnerHTML: {
        __html: `body{-webkit-animation:none;-moz-animation:none;-ms-animation:none;animation:none}`
      }
    })), /*#__PURE__*/_react.default.createElement("script", {
      async: true,
      src: "https://cdn.ampproject.org/v0.js"
    })), !inAmpMode && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, !hasAmphtmlRel && hybridAmp && /*#__PURE__*/_react.default.createElement("link", {
      rel: "amphtml",
      href: canonicalBase + getAmpPath(ampPath, dangerousAsPath)
    }), this.getCssLinks(), !disableRuntimeJS && /*#__PURE__*/_react.default.createElement("link", {
      rel: "preload",
      href: assetPrefix + getOptionalModernScriptVariant(encodeURI(`/_next/static/${buildId}/pages/_app.js`)) + _devOnlyInvalidateCacheQueryString,
      as: "script",
      nonce: this.props.nonce,
      crossOrigin: this.props.crossOrigin || undefined
    }), !disableRuntimeJS && page !== '/_error' && /*#__PURE__*/_react.default.createElement("link", {
      rel: "preload",
      href: assetPrefix + getOptionalModernScriptVariant(encodeURI(`/_next/static/${buildId}/pages${getPageFile(page)}`)) + _devOnlyInvalidateCacheQueryString,
      as: "script",
      nonce: this.props.nonce,
      crossOrigin: this.props.crossOrigin || undefined
    }), !disableRuntimeJS && this.getPreloadDynamicChunks(), !disableRuntimeJS && this.getPreloadMainLinks(), this.context._documentProps.isDevelopment &&
    /*#__PURE__*/
    // this element is used to mount development styles so the
    // ordering matches production
    // (by default, style-loader injects at the bottom of <head />)
    _react.default.createElement("noscript", {
      id: "__next_css__DO_NOT_USE__"
    }), styles || null), _react.default.createElement(_react.default.Fragment, {}, ...(headTags || [])));
  }

}

exports.Head = Head;
Head.contextType = _documentContext.DocumentContext;
Head.propTypes = {
  nonce: _propTypes.default.string,
  crossOrigin: _propTypes.default.string
};

class Main extends _react.Component {
  constructor(...args) {
    super(...args);
    this.context = void 0;
  }

  render() {
    const {
      inAmpMode,
      html
    } = this.context._documentProps;
    if (inAmpMode) return _constants.AMP_RENDER_TARGET;
    return /*#__PURE__*/_react.default.createElement("div", {
      id: "__next",
      dangerouslySetInnerHTML: {
        __html: html
      }
    });
  }

}

exports.Main = Main;
Main.contextType = _documentContext.DocumentContext;

class NextScript extends _react.Component {
  constructor(...args) {
    super(...args);
    this.context = void 0;
  }

  getDynamicChunks() {
    const {
      dynamicImports,
      assetPrefix,
      files
    } = this.context._documentProps;
    const {
      _devOnlyInvalidateCacheQueryString
    } = this.context;
    return dedupe(dynamicImports).map(bundle => {
      let modernProps = {};

      if (false) {}

      if (!/\.js$/.test(bundle.file) || files.includes(bundle.file)) return null;
      return /*#__PURE__*/_react.default.createElement("script", Object.assign({
        async: true,
        key: bundle.file,
        src: `${assetPrefix}/_next/${encodeURI(bundle.file)}${_devOnlyInvalidateCacheQueryString}`,
        nonce: this.props.nonce,
        crossOrigin: this.props.crossOrigin || undefined
      }, modernProps));
    });
  }

  getScripts() {
    const {
      assetPrefix,
      files,
      lowPriorityFiles
    } = this.context._documentProps;
    const {
      _devOnlyInvalidateCacheQueryString
    } = this.context;
    const normalScripts = files === null || files === void 0 ? void 0 : files.filter(file => file.endsWith('.js'));
    const lowPriorityScripts = lowPriorityFiles === null || lowPriorityFiles === void 0 ? void 0 : lowPriorityFiles.filter(file => file.endsWith('.js'));
    return [...normalScripts, ...lowPriorityScripts].map(file => {
      let modernProps = {};

      if (false) {}

      return /*#__PURE__*/_react.default.createElement("script", Object.assign({
        key: file,
        src: `${assetPrefix}/_next/${encodeURI(file)}${_devOnlyInvalidateCacheQueryString}`,
        nonce: this.props.nonce,
        async: true,
        crossOrigin: this.props.crossOrigin || undefined
      }, modernProps));
    });
  }

  getPolyfillScripts() {
    // polyfills.js has to be rendered as nomodule without async
    // It also has to be the first script to load
    const {
      assetPrefix,
      polyfillFiles
    } = this.context._documentProps;
    const {
      _devOnlyInvalidateCacheQueryString
    } = this.context;
    return polyfillFiles.filter(polyfill => polyfill.endsWith('.js') && !/\.module\.js$/.test(polyfill)).map(polyfill => /*#__PURE__*/_react.default.createElement("script", {
      key: polyfill,
      nonce: this.props.nonce,
      crossOrigin: this.props.crossOrigin || undefined,
      noModule: true,
      src: `${assetPrefix}/_next/${polyfill}${_devOnlyInvalidateCacheQueryString}`
    }));
  }

  static getInlineScriptSource(documentProps) {
    const {
      __NEXT_DATA__
    } = documentProps;

    try {
      const data = JSON.stringify(__NEXT_DATA__);
      return (0, _htmlescape.htmlEscapeJsonString)(data);
    } catch (err) {
      if (err.message.indexOf('circular structure')) {
        throw new Error(`Circular structure in "getInitialProps" result of page "${__NEXT_DATA__.page}". https://err.sh/zeit/next.js/circular-structure`);
      }

      throw err;
    }
  }

  render() {
    const {
      staticMarkup,
      assetPrefix,
      inAmpMode,
      devFiles,
      __NEXT_DATA__,
      bodyTags,
      unstable_runtimeJS
    } = this.context._documentProps;
    const disableRuntimeJS = unstable_runtimeJS === false;
    const {
      _devOnlyInvalidateCacheQueryString
    } = this.context;

    if (inAmpMode) {
      if (false) {}

      const devFiles = [_constants.CLIENT_STATIC_FILES_RUNTIME_REACT_REFRESH, _constants.CLIENT_STATIC_FILES_RUNTIME_AMP, _constants.CLIENT_STATIC_FILES_RUNTIME_WEBPACK];
      return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, staticMarkup || disableRuntimeJS ? null : /*#__PURE__*/_react.default.createElement("script", {
        id: "__NEXT_DATA__",
        type: "application/json",
        nonce: this.props.nonce,
        crossOrigin: this.props.crossOrigin || undefined,
        dangerouslySetInnerHTML: {
          __html: NextScript.getInlineScriptSource(this.context._documentProps)
        },
        "data-ampdevmode": true
      }), devFiles ? devFiles.map(file => /*#__PURE__*/_react.default.createElement("script", {
        key: file,
        src: `${assetPrefix}/_next/${file}${_devOnlyInvalidateCacheQueryString}`,
        nonce: this.props.nonce,
        crossOrigin: this.props.crossOrigin || undefined,
        "data-ampdevmode": true
      })) : null, _react.default.createElement(_react.default.Fragment, {}, ...(bodyTags || [])));
    }

    const {
      page,
      buildId
    } = __NEXT_DATA__;

    if (true) {
      if (this.props.crossOrigin) console.warn('Warning: `NextScript` attribute `crossOrigin` is deprecated. https://err.sh/next.js/doc-crossorigin-deprecated');
    }

    const pageScript = [/*#__PURE__*/_react.default.createElement("script", Object.assign({
      async: true,
      "data-next-page": page,
      key: page,
      src: assetPrefix + encodeURI(`/_next/static/${buildId}/pages${getPageFile(page)}`) + _devOnlyInvalidateCacheQueryString,
      nonce: this.props.nonce,
      crossOrigin: this.props.crossOrigin || undefined
    },  false ? undefined : {})),  false && /*#__PURE__*/false];
    const appScript = [/*#__PURE__*/_react.default.createElement("script", Object.assign({
      async: true,
      "data-next-page": "/_app",
      src: assetPrefix + `/_next/static/${buildId}/pages/_app.js` + _devOnlyInvalidateCacheQueryString,
      key: "_app",
      nonce: this.props.nonce,
      crossOrigin: this.props.crossOrigin || undefined
    },  false ? undefined : {})),  false && /*#__PURE__*/false];
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, !disableRuntimeJS && devFiles ? devFiles.map(file => !file.match(/\.js\.map/) && /*#__PURE__*/_react.default.createElement("script", {
      key: file,
      src: `${assetPrefix}/_next/${encodeURI(file)}${_devOnlyInvalidateCacheQueryString}`,
      nonce: this.props.nonce,
      crossOrigin: this.props.crossOrigin || undefined
    })) : null, staticMarkup || disableRuntimeJS ? null : /*#__PURE__*/_react.default.createElement("script", {
      id: "__NEXT_DATA__",
      type: "application/json",
      nonce: this.props.nonce,
      crossOrigin: this.props.crossOrigin || undefined,
      dangerouslySetInnerHTML: {
        __html: NextScript.getInlineScriptSource(this.context._documentProps)
      }
    }),  false ? /*#__PURE__*/undefined : null, !disableRuntimeJS && this.getPolyfillScripts(), !disableRuntimeJS && appScript, !disableRuntimeJS && page !== '/_error' && pageScript, disableRuntimeJS || staticMarkup ? null : this.getDynamicChunks(), disableRuntimeJS || staticMarkup ? null : this.getScripts(), _react.default.createElement(_react.default.Fragment, {}, ...(bodyTags || [])));
  }

}

exports.NextScript = NextScript;
NextScript.contextType = _documentContext.DocumentContext;
NextScript.propTypes = {
  nonce: _propTypes.default.string,
  crossOrigin: _propTypes.default.string
};
NextScript.safariNomoduleFix = '!function(){var e=document,t=e.createElement("script");if(!("noModule"in t)&&"onbeforeload"in t){var n=!1;e.addEventListener("beforeload",function(e){if(e.target===t)n=!0;else if(!e.target.hasAttribute("nomodule")||!n)return;e.preventDefault()},!0),t.type="module",t.src=".",e.head.appendChild(t),t.remove()}}();';

function getAmpPath(ampPath, asPath) {
  return ampPath || `${asPath}${asPath.includes('?') ? '&' : '?'}amp=1`;
}

function getPageFile(page, buildId) {
  const startingUrl = page === '/' ? '/index' : page;
  return buildId ? `${startingUrl}.${buildId}.js` : `${startingUrl}.js`;
}

/***/ }),

/***/ "./node_modules/next/dist/server/htmlescape.js":
/*!*****************************************************!*\
  !*** ./node_modules/next/dist/server/htmlescape.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.htmlEscapeJsonString=htmlEscapeJsonString;// This utility is based on https://github.com/zertosh/htmlescape
// License: https://github.com/zertosh/htmlescape/blob/0527ca7156a524d256101bb310a9f970f63078ad/LICENSE
const ESCAPE_LOOKUP={'&':'\\u0026','>':'\\u003e','<':'\\u003c','\u2028':'\\u2028','\u2029':'\\u2029'};const ESCAPE_REGEX=/[&><\u2028\u2029]/g;function htmlEscapeJsonString(str){return str.replace(ESCAPE_REGEX,match=>ESCAPE_LOOKUP[match]);}

/***/ }),

/***/ "./node_modules/next/document.js":
/*!***************************************!*\
  !*** ./node_modules/next/document.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/pages/_document */ "./node_modules/next/dist/pages/_document.js")


/***/ }),

/***/ "./pages/_document.js":
/*!****************************!*\
  !*** ./pages/_document.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/document */ "./node_modules/next/document.js");
/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_document__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/maxgarcia/Desktop/hello-nextjs/pages/_document.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


class MyDocument extends next_document__WEBPACK_IMPORTED_MODULE_1___default.a {
  render() {
    return __jsx("html", {
      lang: "en",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7,
        columnNumber: 13
      }
    }, __jsx("head", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 17
      }
    }, __jsx("meta", {
      charSet: "UTF-8",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 21
      }
    }), __jsx("meta", {
      name: "description",
      content: "My SEO react app with next js",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 21
      }
    }), __jsx("meta", {
      name: "keyword",
      content: "next react seo",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 21
      }
    }), __jsx("meta", {
      name: "author",
      content: "Max Garcia",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 21
      }
    }), __jsx("link", {
      rel: "stylesheet",
      href: "/static/styles.css",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 21
      }
    }), __jsx("link", {
      rel: "stylesheet",
      href: "https://unpkg.com/bootstrap-material-design@4.1.1/dist/css/bootstrap-material-design.min.css",
      integrity: "sha384-wXznGJNEXNG1NFsbm0ugrLFMQPWswR3lds2VeinahP8N0zJw9VWSopbjv2x7WCvX",
      crossorigin: "anonymous",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 21
      }
    })), __jsx("body", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 17
      }
    }, __jsx(next_document__WEBPACK_IMPORTED_MODULE_1__["Main"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 21
      }
    }), __jsx(next_document__WEBPACK_IMPORTED_MODULE_1__["NextScript"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 21
      }
    })));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (MyDocument);

/***/ }),

/***/ 0:
/*!*********************************************!*\
  !*** multi private-next-pages/_document.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_document.js */"./pages/_document.js");


/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-jsx/server":
/*!************************************!*\
  !*** external "styled-jsx/server" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/server");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9jb25zdGFudHMuanNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL2RvY3VtZW50LWNvbnRleHQuanNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3V0aWxzLmpzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL3NlcnZlci91dGlscy5qc1wiIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvcGFnZXMvX2RvY3VtZW50LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3Qvc2VydmVyL2h0bWxlc2NhcGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZG9jdW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvX2RvY3VtZW50LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcInByb3AtdHlwZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInN0eWxlZC1qc3gvc2VydmVyXCIiXSwibmFtZXMiOlsiZXhwb3J0cyIsIl9fZXNNb2R1bGUiLCJtaWRkbGV3YXJlIiwiTmV4dFNjcmlwdCIsIk1haW4iLCJIZWFkIiwiSHRtbCIsImRlZmF1bHQiLCJfcHJvcFR5cGVzIiwiX2ludGVyb3BSZXF1aXJlRGVmYXVsdCIsInJlcXVpcmUiLCJfcmVhY3QiLCJfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZCIsIl9zZXJ2ZXIiLCJfY29uc3RhbnRzIiwiX2RvY3VtZW50Q29udGV4dCIsIl91dGlscyIsIkRvY3VtZW50Q29udGV4dCIsIkRvY3VtZW50SW5pdGlhbFByb3BzIiwiRG9jdW1lbnRQcm9wcyIsIl91dGlsczIiLCJfaHRtbGVzY2FwZSIsIm9iaiIsIl9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSIsIldlYWtNYXAiLCJjYWNoZSIsImhhcyIsImdldCIsIm5ld09iaiIsImhhc1Byb3BlcnR5RGVzY3JpcHRvciIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwia2V5IiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwiZGVzYyIsInNldCIsInJlcSIsInJlcyIsImRlZHVwZSIsImJ1bmRsZXMiLCJmaWxlcyIsIlNldCIsImtlcHQiLCJidW5kbGUiLCJmaWxlIiwiYWRkIiwicHVzaCIsImdldE9wdGlvbmFsTW9kZXJuU2NyaXB0VmFyaWFudCIsInBhdGgiLCJwcm9jZXNzIiwiRG9jdW1lbnQiLCJDb21wb25lbnQiLCJnZXRJbml0aWFsUHJvcHMiLCJjdHgiLCJlbmhhbmNlcnMiLCJlbmhhbmNlQXBwIiwiQXBwIiwiZW5oYW5jZXIiLCJwcm9wcyIsImNyZWF0ZUVsZW1lbnQiLCJodG1sIiwiaGVhZCIsInJlbmRlclBhZ2UiLCJzdHlsZXMiLCJyZW5kZXJEb2N1bWVudCIsIlByb3ZpZGVyIiwidmFsdWUiLCJfZG9jdW1lbnRQcm9wcyIsIl9kZXZPbmx5SW52YWxpZGF0ZUNhY2hlUXVlcnlTdHJpbmciLCJEYXRlIiwibm93IiwicmVuZGVyIiwiaGVhZFRhZ3NNaWRkbGV3YXJlIiwiUHJvbWlzZSIsImJvZHlUYWdzTWlkZGxld2FyZSIsImh0bWxQcm9wc01pZGRsZXdhcmUiLCJjb25zdHJ1Y3RvciIsImFyZ3MiLCJjb250ZXh0IiwiaW5BbXBNb2RlIiwiaHRtbFByb3BzIiwiYXNzaWduIiwiYW1wIiwidW5kZWZpbmVkIiwiY29udGV4dFR5cGUiLCJwcm9wVHlwZXMiLCJjaGlsZHJlbiIsIm5vZGUiLCJpc1JlcXVpcmVkIiwiZ2V0Q3NzTGlua3MiLCJhc3NldFByZWZpeCIsImNzc0ZpbGVzIiwibGVuZ3RoIiwiZmlsdGVyIiwiZiIsInRlc3QiLCJjc3NMaW5rRWxlbWVudHMiLCJmb3JFYWNoIiwibm9uY2UiLCJyZWwiLCJocmVmIiwiZW5jb2RlVVJJIiwiYXMiLCJjcm9zc09yaWdpbiIsImdldFByZWxvYWREeW5hbWljQ2h1bmtzIiwiZHluYW1pY0ltcG9ydHMiLCJtYXAiLCJlbmRzV2l0aCIsIkJvb2xlYW4iLCJnZXRQcmVsb2FkTWFpbkxpbmtzIiwicHJlbG9hZEZpbGVzIiwiYW1wUGF0aCIsImh5YnJpZEFtcCIsImNhbm9uaWNhbEJhc2UiLCJfX05FWFRfREFUQV9fIiwiZGFuZ2Vyb3VzQXNQYXRoIiwiaGVhZFRhZ3MiLCJ1bnN0YWJsZV9ydW50aW1lSlMiLCJkaXNhYmxlUnVudGltZUpTIiwicGFnZSIsImJ1aWxkSWQiLCJDaGlsZHJlbiIsImNoaWxkIiwiX2NoaWxkJHByb3BzIiwiaXNSZWFjdEhlbG1ldCIsInR5cGUiLCJjb25zb2xlIiwid2FybiIsImhhc0FtcGh0bWxSZWwiLCJoYXNDYW5vbmljYWxSZWwiLCJiYWRQcm9wIiwibmFtZSIsInNyYyIsImluZGV4T2YiLCJkYW5nZXJvdXNseVNldElubmVySFRNTCIsImtleXMiLCJwcm9wIiwiY3VyU3R5bGVzIiwiQXJyYXkiLCJpc0FycmF5IiwiaGFzU3R5bGVzIiwiZWwiLCJfZWwkcHJvcHMiLCJfZWwkcHJvcHMkZGFuZ2Vyb3VzbHkiLCJfX2h0bWwiLCJpc0RldmVsb3BtZW50IiwiRnJhZ21lbnQiLCJjb250ZW50IiwiY291bnQiLCJ0b1N0cmluZyIsImNsZWFuQW1wUGF0aCIsInN0eWxlIiwiam9pbiIsInJlcGxhY2UiLCJhc3luYyIsImdldEFtcFBhdGgiLCJnZXRQYWdlRmlsZSIsImlkIiwic3RyaW5nIiwiQU1QX1JFTkRFUl9UQVJHRVQiLCJnZXREeW5hbWljQ2h1bmtzIiwibW9kZXJuUHJvcHMiLCJpbmNsdWRlcyIsImdldFNjcmlwdHMiLCJsb3dQcmlvcml0eUZpbGVzIiwibm9ybWFsU2NyaXB0cyIsImxvd1ByaW9yaXR5U2NyaXB0cyIsImdldFBvbHlmaWxsU2NyaXB0cyIsInBvbHlmaWxsRmlsZXMiLCJwb2x5ZmlsbCIsIm5vTW9kdWxlIiwiZ2V0SW5saW5lU2NyaXB0U291cmNlIiwiZG9jdW1lbnRQcm9wcyIsImRhdGEiLCJKU09OIiwic3RyaW5naWZ5IiwiaHRtbEVzY2FwZUpzb25TdHJpbmciLCJlcnIiLCJtZXNzYWdlIiwiRXJyb3IiLCJzdGF0aWNNYXJrdXAiLCJkZXZGaWxlcyIsImJvZHlUYWdzIiwiQ0xJRU5UX1NUQVRJQ19GSUxFU19SVU5USU1FX1JFQUNUX1JFRlJFU0giLCJDTElFTlRfU1RBVElDX0ZJTEVTX1JVTlRJTUVfQU1QIiwiQ0xJRU5UX1NUQVRJQ19GSUxFU19SVU5USU1FX1dFQlBBQ0siLCJwYWdlU2NyaXB0IiwiYXBwU2NyaXB0IiwibWF0Y2giLCJzYWZhcmlOb21vZHVsZUZpeCIsImFzUGF0aCIsInN0YXJ0aW5nVXJsIiwiTXlEb2N1bWVudCJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUEr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SGQ7QUFJSSxpQkFBVyxFQUFDLFdBSmhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFOSixDQURKLEVBYUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNJLE1BQUMsa0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURKLEVBRUksTUFBQyx3REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BRkosQ0FiSixDQURKO0FBb0JIOztBQXZCNkI7O0FBMEJuQnlILHlFQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUJBLHVDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLDhDIiwiZmlsZSI6InN0YXRpYy9kZXZlbG9wbWVudC9wYWdlcy9fZG9jdW1lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uLy4uLy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL2NvbnN0YW50cy5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL2RvY3VtZW50LWNvbnRleHQuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi91dGlscy5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvc2VydmVyL3V0aWxzLmpzXCIpOyIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMubWlkZGxld2FyZT1taWRkbGV3YXJlO2V4cG9ydHMuTmV4dFNjcmlwdD1leHBvcnRzLk1haW49ZXhwb3J0cy5IZWFkPWV4cG9ydHMuSHRtbD1leHBvcnRzLmRlZmF1bHQ9dm9pZCAwO3ZhciBfcHJvcFR5cGVzPV9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInByb3AtdHlwZXNcIikpO3ZhciBfcmVhY3Q9X2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcInJlYWN0XCIpKTt2YXIgX3NlcnZlcj1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJzdHlsZWQtanN4L3NlcnZlclwiKSk7dmFyIF9jb25zdGFudHM9cmVxdWlyZShcIi4uL25leHQtc2VydmVyL2xpYi9jb25zdGFudHNcIik7dmFyIF9kb2N1bWVudENvbnRleHQ9cmVxdWlyZShcIi4uL25leHQtc2VydmVyL2xpYi9kb2N1bWVudC1jb250ZXh0XCIpO3ZhciBfdXRpbHM9cmVxdWlyZShcIi4uL25leHQtc2VydmVyL2xpYi91dGlsc1wiKTtleHBvcnRzLkRvY3VtZW50Q29udGV4dD1fdXRpbHMuRG9jdW1lbnRDb250ZXh0O2V4cG9ydHMuRG9jdW1lbnRJbml0aWFsUHJvcHM9X3V0aWxzLkRvY3VtZW50SW5pdGlhbFByb3BzO2V4cG9ydHMuRG9jdW1lbnRQcm9wcz1fdXRpbHMuRG9jdW1lbnRQcm9wczt2YXIgX3V0aWxzMj1yZXF1aXJlKFwiLi4vbmV4dC1zZXJ2ZXIvc2VydmVyL3V0aWxzXCIpO3ZhciBfaHRtbGVzY2FwZT1yZXF1aXJlKFwiLi4vc2VydmVyL2h0bWxlc2NhcGVcIik7ZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmope3JldHVybiBvYmomJm9iai5fX2VzTW9kdWxlP29iajp7ZGVmYXVsdDpvYmp9O31mdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKXtpZih0eXBlb2YgV2Vha01hcCE9PVwiZnVuY3Rpb25cIilyZXR1cm4gbnVsbDt2YXIgY2FjaGU9bmV3IFdlYWtNYXAoKTtfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGU9ZnVuY3Rpb24oKXtyZXR1cm4gY2FjaGU7fTtyZXR1cm4gY2FjaGU7fWZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iail7aWYob2JqJiZvYmouX19lc01vZHVsZSl7cmV0dXJuIG9iajt9aWYob2JqPT09bnVsbHx8dHlwZW9mIG9iaiE9PVwib2JqZWN0XCImJnR5cGVvZiBvYmohPT1cImZ1bmN0aW9uXCIpe3JldHVybntkZWZhdWx0Om9ian07fXZhciBjYWNoZT1fZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKTtpZihjYWNoZSYmY2FjaGUuaGFzKG9iaikpe3JldHVybiBjYWNoZS5nZXQob2JqKTt9dmFyIG5ld09iaj17fTt2YXIgaGFzUHJvcGVydHlEZXNjcmlwdG9yPU9iamVjdC5kZWZpbmVQcm9wZXJ0eSYmT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtmb3IodmFyIGtleSBpbiBvYmope2lmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosa2V5KSl7dmFyIGRlc2M9aGFzUHJvcGVydHlEZXNjcmlwdG9yP09iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLGtleSk6bnVsbDtpZihkZXNjJiYoZGVzYy5nZXR8fGRlc2Muc2V0KSl7T2JqZWN0LmRlZmluZVByb3BlcnR5KG5ld09iaixrZXksZGVzYyk7fWVsc2V7bmV3T2JqW2tleV09b2JqW2tleV07fX19bmV3T2JqLmRlZmF1bHQ9b2JqO2lmKGNhY2hlKXtjYWNoZS5zZXQob2JqLG5ld09iaik7fXJldHVybiBuZXdPYmo7fWFzeW5jIGZ1bmN0aW9uIG1pZGRsZXdhcmUoe3JlcSxyZXN9KXt9ZnVuY3Rpb24gZGVkdXBlKGJ1bmRsZXMpe2NvbnN0IGZpbGVzPW5ldyBTZXQoKTtjb25zdCBrZXB0PVtdO2Zvcihjb25zdCBidW5kbGUgb2YgYnVuZGxlcyl7aWYoZmlsZXMuaGFzKGJ1bmRsZS5maWxlKSljb250aW51ZTtmaWxlcy5hZGQoYnVuZGxlLmZpbGUpO2tlcHQucHVzaChidW5kbGUpO31yZXR1cm4ga2VwdDt9ZnVuY3Rpb24gZ2V0T3B0aW9uYWxNb2Rlcm5TY3JpcHRWYXJpYW50KHBhdGgpe2lmKHByb2Nlc3MuZW52Ll9fTkVYVF9NT0RFUk5fQlVJTEQpe3JldHVybiBwYXRoLnJlcGxhY2UoL1xcLmpzJC8sJy5tb2R1bGUuanMnKTt9cmV0dXJuIHBhdGg7fS8qKlxuICogYERvY3VtZW50YCBjb21wb25lbnQgaGFuZGxlcyB0aGUgaW5pdGlhbCBgZG9jdW1lbnRgIG1hcmt1cCBhbmQgcmVuZGVycyBvbmx5IG9uIHRoZSBzZXJ2ZXIgc2lkZS5cbiAqIENvbW1vbmx5IHVzZWQgZm9yIGltcGxlbWVudGluZyBzZXJ2ZXIgc2lkZSByZW5kZXJpbmcgZm9yIGBjc3MtaW4tanNgIGxpYnJhcmllcy5cbiAqL2NsYXNzIERvY3VtZW50IGV4dGVuZHMgX3JlYWN0LkNvbXBvbmVudHsvKipcbiAgICogYGdldEluaXRpYWxQcm9wc2AgaG9vayByZXR1cm5zIHRoZSBjb250ZXh0IG9iamVjdCB3aXRoIHRoZSBhZGRpdGlvbiBvZiBgcmVuZGVyUGFnZWAuXG4gICAqIGByZW5kZXJQYWdlYCBjYWxsYmFjayBleGVjdXRlcyBgUmVhY3RgIHJlbmRlcmluZyBsb2dpYyBzeW5jaHJvbm91c2x5IHRvIHN1cHBvcnQgc2VydmVyLXJlbmRlcmluZyB3cmFwcGVyc1xuICAgKi9zdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKGN0eCl7Y29uc3QgZW5oYW5jZXJzPXByb2Nlc3MuZW52Ll9fTkVYVF9QTFVHSU5TP2F3YWl0IFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKCk9Pl9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoJ25leHQtcGx1Z2luLWxvYWRlcj9taWRkbGV3YXJlPXVuc3RhYmxlLWVuaGFuY2UtYXBwLXNlcnZlciEnKSkpLnRoZW4obW9kPT5tb2QuZGVmYXVsdChjdHgpKTpbXTtjb25zdCBlbmhhbmNlQXBwPUFwcD0+e2Zvcihjb25zdCBlbmhhbmNlciBvZiBlbmhhbmNlcnMpe0FwcD1lbmhhbmNlcihBcHApO31yZXR1cm4gcHJvcHM9Pi8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KEFwcCxwcm9wcyk7fTtjb25zdHtodG1sLGhlYWR9PWF3YWl0IGN0eC5yZW5kZXJQYWdlKHtlbmhhbmNlQXBwfSk7Y29uc3Qgc3R5bGVzPVsuLi4oMCxfc2VydmVyLmRlZmF1bHQpKCksLi4uKHByb2Nlc3MuZW52Ll9fTkVYVF9QTFVHSU5TP2F3YWl0IFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKCk9Pl9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoJ25leHQtcGx1Z2luLWxvYWRlcj9taWRkbGV3YXJlPXVuc3RhYmxlLWdldC1zdHlsZXMtc2VydmVyIScpKSkudGhlbihtb2Q9Pm1vZC5kZWZhdWx0KGN0eCkpOltdKV07cmV0dXJue2h0bWwsaGVhZCxzdHlsZXN9O31zdGF0aWMgcmVuZGVyRG9jdW1lbnQoRG9jdW1lbnQscHJvcHMpe3JldHVybi8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KF9kb2N1bWVudENvbnRleHQuRG9jdW1lbnRDb250ZXh0LlByb3ZpZGVyLHt2YWx1ZTp7X2RvY3VtZW50UHJvcHM6cHJvcHMsLy8gSW4gZGV2IHdlIGludmFsaWRhdGUgdGhlIGNhY2hlIGJ5IGFwcGVuZGluZyBhIHRpbWVzdGFtcCB0byB0aGUgcmVzb3VyY2UgVVJMLlxuLy8gVGhpcyBpcyBhIHdvcmthcm91bmQgdG8gZml4IGh0dHBzOi8vZ2l0aHViLmNvbS96ZWl0L25leHQuanMvaXNzdWVzLzU4NjBcbi8vIFRPRE86IHJlbW92ZSB0aGlzIHdvcmthcm91bmQgd2hlbiBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTg3NzI2IGlzIGZpeGVkLlxuX2Rldk9ubHlJbnZhbGlkYXRlQ2FjaGVRdWVyeVN0cmluZzpwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJz8nP3RzPScrRGF0ZS5ub3coKTonJ319LC8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KERvY3VtZW50LHByb3BzKSk7fXJlbmRlcigpe3JldHVybi8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KEh0bWwsbnVsbCwvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChIZWFkLG51bGwpLC8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiYm9keVwiLG51bGwsLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoTWFpbixudWxsKSwvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChOZXh0U2NyaXB0LG51bGwpKSk7fX1leHBvcnRzLmRlZmF1bHQ9RG9jdW1lbnQ7RG9jdW1lbnQuaGVhZFRhZ3NNaWRkbGV3YXJlPXByb2Nlc3MuZW52Ll9fTkVYVF9QTFVHSU5TP1Byb21pc2UucmVzb2x2ZSgpLnRoZW4oKCk9Pl9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoJ25leHQtcGx1Z2luLWxvYWRlcj9taWRkbGV3YXJlPWRvY3VtZW50LWhlYWQtdGFncy1zZXJ2ZXIhJykpKTooKT0+W107RG9jdW1lbnQuYm9keVRhZ3NNaWRkbGV3YXJlPXByb2Nlc3MuZW52Ll9fTkVYVF9QTFVHSU5TP1Byb21pc2UucmVzb2x2ZSgpLnRoZW4oKCk9Pl9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoJ25leHQtcGx1Z2luLWxvYWRlcj9taWRkbGV3YXJlPWRvY3VtZW50LWJvZHktdGFncy1zZXJ2ZXIhJykpKTooKT0+W107RG9jdW1lbnQuaHRtbFByb3BzTWlkZGxld2FyZT1wcm9jZXNzLmVudi5fX05FWFRfUExVR0lOUz9Qcm9taXNlLnJlc29sdmUoKS50aGVuKCgpPT5faW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKCduZXh0LXBsdWdpbi1sb2FkZXI/bWlkZGxld2FyZT1kb2N1bWVudC1odG1sLXByb3BzLXNlcnZlciEnKSkpOigpPT5bXTtjbGFzcyBIdG1sIGV4dGVuZHMgX3JlYWN0LkNvbXBvbmVudHtjb25zdHJ1Y3RvciguLi5hcmdzKXtzdXBlciguLi5hcmdzKTt0aGlzLmNvbnRleHQ9dm9pZCAwO31yZW5kZXIoKXtjb25zdHtpbkFtcE1vZGUsaHRtbFByb3BzfT10aGlzLmNvbnRleHQuX2RvY3VtZW50UHJvcHM7cmV0dXJuLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJodG1sXCIsT2JqZWN0LmFzc2lnbih7fSxodG1sUHJvcHMsdGhpcy5wcm9wcyx7YW1wOmluQW1wTW9kZT8nJzp1bmRlZmluZWQsXCJkYXRhLWFtcGRldm1vZGVcIjppbkFtcE1vZGUmJnByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nPycnOnVuZGVmaW5lZH0pKTt9fWV4cG9ydHMuSHRtbD1IdG1sO0h0bWwuY29udGV4dFR5cGU9X2RvY3VtZW50Q29udGV4dC5Eb2N1bWVudENvbnRleHQ7SHRtbC5wcm9wVHlwZXM9e2NoaWxkcmVuOl9wcm9wVHlwZXMuZGVmYXVsdC5ub2RlLmlzUmVxdWlyZWR9O2NsYXNzIEhlYWQgZXh0ZW5kcyBfcmVhY3QuQ29tcG9uZW50e2NvbnN0cnVjdG9yKC4uLmFyZ3Mpe3N1cGVyKC4uLmFyZ3MpO3RoaXMuY29udGV4dD12b2lkIDA7fWdldENzc0xpbmtzKCl7Y29uc3R7YXNzZXRQcmVmaXgsZmlsZXN9PXRoaXMuY29udGV4dC5fZG9jdW1lbnRQcm9wcztjb25zdHtfZGV2T25seUludmFsaWRhdGVDYWNoZVF1ZXJ5U3RyaW5nfT10aGlzLmNvbnRleHQ7Y29uc3QgY3NzRmlsZXM9ZmlsZXMmJmZpbGVzLmxlbmd0aD9maWxlcy5maWx0ZXIoZj0+L1xcLmNzcyQvLnRlc3QoZikpOltdO2NvbnN0IGNzc0xpbmtFbGVtZW50cz1bXTtjc3NGaWxlcy5mb3JFYWNoKGZpbGU9Pntjc3NMaW5rRWxlbWVudHMucHVzaCgvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImxpbmtcIix7a2V5OmAke2ZpbGV9LXByZWxvYWRgLG5vbmNlOnRoaXMucHJvcHMubm9uY2UscmVsOlwicHJlbG9hZFwiLGhyZWY6YCR7YXNzZXRQcmVmaXh9L19uZXh0LyR7ZW5jb2RlVVJJKGZpbGUpfSR7X2Rldk9ubHlJbnZhbGlkYXRlQ2FjaGVRdWVyeVN0cmluZ31gLGFzOlwic3R5bGVcIixjcm9zc09yaWdpbjp0aGlzLnByb3BzLmNyb3NzT3JpZ2lufHxwcm9jZXNzLmNyb3NzT3JpZ2lufSksLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIse2tleTpmaWxlLG5vbmNlOnRoaXMucHJvcHMubm9uY2UscmVsOlwic3R5bGVzaGVldFwiLGhyZWY6YCR7YXNzZXRQcmVmaXh9L19uZXh0LyR7ZW5jb2RlVVJJKGZpbGUpfSR7X2Rldk9ubHlJbnZhbGlkYXRlQ2FjaGVRdWVyeVN0cmluZ31gLGNyb3NzT3JpZ2luOnRoaXMucHJvcHMuY3Jvc3NPcmlnaW58fHByb2Nlc3MuY3Jvc3NPcmlnaW59KSk7fSk7cmV0dXJuIGNzc0xpbmtFbGVtZW50cy5sZW5ndGg9PT0wP251bGw6Y3NzTGlua0VsZW1lbnRzO31nZXRQcmVsb2FkRHluYW1pY0NodW5rcygpe2NvbnN0e2R5bmFtaWNJbXBvcnRzLGFzc2V0UHJlZml4fT10aGlzLmNvbnRleHQuX2RvY3VtZW50UHJvcHM7Y29uc3R7X2Rldk9ubHlJbnZhbGlkYXRlQ2FjaGVRdWVyeVN0cmluZ309dGhpcy5jb250ZXh0O3JldHVybiBkZWR1cGUoZHluYW1pY0ltcG9ydHMpLm1hcChidW5kbGU9PnsvLyBgZHluYW1pY0ltcG9ydHNgIHdpbGwgY29udGFpbiBib3RoIGAuanNgIGFuZCBgLm1vZHVsZS5qc2Agd2hlbiB0aGVcbi8vIGZlYXR1cmUgaXMgZW5hYmxlZC4gVGhpcyBjbGF1c2Ugd2lsbCBmaWx0ZXIgZG93biB0byB0aGUgbW9kZXJuXG4vLyB2YXJpYW50cyBvbmx5LlxuaWYoIWJ1bmRsZS5maWxlLmVuZHNXaXRoKGdldE9wdGlvbmFsTW9kZXJuU2NyaXB0VmFyaWFudCgnLmpzJykpKXtyZXR1cm4gbnVsbDt9cmV0dXJuLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIse3JlbDpcInByZWxvYWRcIixrZXk6YnVuZGxlLmZpbGUsaHJlZjpgJHthc3NldFByZWZpeH0vX25leHQvJHtlbmNvZGVVUkkoYnVuZGxlLmZpbGUpfSR7X2Rldk9ubHlJbnZhbGlkYXRlQ2FjaGVRdWVyeVN0cmluZ31gLGFzOlwic2NyaXB0XCIsbm9uY2U6dGhpcy5wcm9wcy5ub25jZSxjcm9zc09yaWdpbjp0aGlzLnByb3BzLmNyb3NzT3JpZ2lufHxwcm9jZXNzLmNyb3NzT3JpZ2lufSk7fSkvLyBGaWx0ZXIgb3V0IG51bGxlZCBzY3JpcHRzXG4uZmlsdGVyKEJvb2xlYW4pO31nZXRQcmVsb2FkTWFpbkxpbmtzKCl7Y29uc3R7YXNzZXRQcmVmaXgsZmlsZXN9PXRoaXMuY29udGV4dC5fZG9jdW1lbnRQcm9wcztjb25zdHtfZGV2T25seUludmFsaWRhdGVDYWNoZVF1ZXJ5U3RyaW5nfT10aGlzLmNvbnRleHQ7Y29uc3QgcHJlbG9hZEZpbGVzPWZpbGVzJiZmaWxlcy5sZW5ndGg/ZmlsZXMuZmlsdGVyKGZpbGU9PnsvLyBgZHluYW1pY0ltcG9ydHNgIHdpbGwgY29udGFpbiBib3RoIGAuanNgIGFuZCBgLm1vZHVsZS5qc2Agd2hlblxuLy8gdGhlIGZlYXR1cmUgaXMgZW5hYmxlZC4gVGhpcyBjbGF1c2Ugd2lsbCBmaWx0ZXIgZG93biB0byB0aGVcbi8vIG1vZGVybiB2YXJpYW50cyBvbmx5LlxucmV0dXJuIGZpbGUuZW5kc1dpdGgoZ2V0T3B0aW9uYWxNb2Rlcm5TY3JpcHRWYXJpYW50KCcuanMnKSk7fSk6W107cmV0dXJuIXByZWxvYWRGaWxlcy5sZW5ndGg/bnVsbDpwcmVsb2FkRmlsZXMubWFwKGZpbGU9Pi8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwibGlua1wiLHtrZXk6ZmlsZSxub25jZTp0aGlzLnByb3BzLm5vbmNlLHJlbDpcInByZWxvYWRcIixocmVmOmAke2Fzc2V0UHJlZml4fS9fbmV4dC8ke2VuY29kZVVSSShmaWxlKX0ke19kZXZPbmx5SW52YWxpZGF0ZUNhY2hlUXVlcnlTdHJpbmd9YCxhczpcInNjcmlwdFwiLGNyb3NzT3JpZ2luOnRoaXMucHJvcHMuY3Jvc3NPcmlnaW58fHByb2Nlc3MuY3Jvc3NPcmlnaW59KSk7fXJlbmRlcigpe2NvbnN0e3N0eWxlcyxhbXBQYXRoLGluQW1wTW9kZSxhc3NldFByZWZpeCxoeWJyaWRBbXAsY2Fub25pY2FsQmFzZSxfX05FWFRfREFUQV9fLGRhbmdlcm91c0FzUGF0aCxoZWFkVGFncyx1bnN0YWJsZV9ydW50aW1lSlN9PXRoaXMuY29udGV4dC5fZG9jdW1lbnRQcm9wcztjb25zdCBkaXNhYmxlUnVudGltZUpTPXVuc3RhYmxlX3J1bnRpbWVKUz09PWZhbHNlO2NvbnN0e19kZXZPbmx5SW52YWxpZGF0ZUNhY2hlUXVlcnlTdHJpbmd9PXRoaXMuY29udGV4dDtjb25zdHtwYWdlLGJ1aWxkSWR9PV9fTkVYVF9EQVRBX187bGV0e2hlYWR9PXRoaXMuY29udGV4dC5fZG9jdW1lbnRQcm9wcztsZXQgY2hpbGRyZW49dGhpcy5wcm9wcy5jaGlsZHJlbjsvLyBzaG93IGEgd2FybmluZyBpZiBIZWFkIGNvbnRhaW5zIDx0aXRsZT4gKG9ubHkgaW4gZGV2ZWxvcG1lbnQpXG5pZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7Y2hpbGRyZW49X3JlYWN0LmRlZmF1bHQuQ2hpbGRyZW4ubWFwKGNoaWxkcmVuLGNoaWxkPT57dmFyIF9jaGlsZCRwcm9wcztjb25zdCBpc1JlYWN0SGVsbWV0PWNoaWxkPT09bnVsbHx8Y2hpbGQ9PT12b2lkIDA/dm9pZCAwOihfY2hpbGQkcHJvcHM9Y2hpbGQucHJvcHMpPT09bnVsbHx8X2NoaWxkJHByb3BzPT09dm9pZCAwP3ZvaWQgMDpfY2hpbGQkcHJvcHNbJ2RhdGEtcmVhY3QtaGVsbWV0J107aWYoKGNoaWxkPT09bnVsbHx8Y2hpbGQ9PT12b2lkIDA/dm9pZCAwOmNoaWxkLnR5cGUpPT09J3RpdGxlJyYmIWlzUmVhY3RIZWxtZXQpe2NvbnNvbGUud2FybihcIldhcm5pbmc6IDx0aXRsZT4gc2hvdWxkIG5vdCBiZSB1c2VkIGluIF9kb2N1bWVudC5qcydzIDxIZWFkPi4gaHR0cHM6Ly9lcnIuc2gvbmV4dC5qcy9uby1kb2N1bWVudC10aXRsZVwiKTt9cmV0dXJuIGNoaWxkO30pO2lmKHRoaXMucHJvcHMuY3Jvc3NPcmlnaW4pY29uc29sZS53YXJuKCdXYXJuaW5nOiBgSGVhZGAgYXR0cmlidXRlIGBjcm9zc09yaWdpbmAgaXMgZGVwcmVjYXRlZC4gaHR0cHM6Ly9lcnIuc2gvbmV4dC5qcy9kb2MtY3Jvc3NvcmlnaW4tZGVwcmVjYXRlZCcpO31sZXQgaGFzQW1waHRtbFJlbD1mYWxzZTtsZXQgaGFzQ2Fub25pY2FsUmVsPWZhbHNlOy8vIHNob3cgd2FybmluZyBhbmQgcmVtb3ZlIGNvbmZsaWN0aW5nIGFtcCBoZWFkIHRhZ3NcbmhlYWQ9X3JlYWN0LmRlZmF1bHQuQ2hpbGRyZW4ubWFwKGhlYWR8fFtdLGNoaWxkPT57aWYoIWNoaWxkKXJldHVybiBjaGlsZDtjb25zdHt0eXBlLHByb3BzfT1jaGlsZDtpZihpbkFtcE1vZGUpe2xldCBiYWRQcm9wPScnO2lmKHR5cGU9PT0nbWV0YScmJnByb3BzLm5hbWU9PT0ndmlld3BvcnQnKXtiYWRQcm9wPSduYW1lPVwidmlld3BvcnRcIic7fWVsc2UgaWYodHlwZT09PSdsaW5rJyYmcHJvcHMucmVsPT09J2Nhbm9uaWNhbCcpe2hhc0Nhbm9uaWNhbFJlbD10cnVlO31lbHNlIGlmKHR5cGU9PT0nc2NyaXB0Jyl7Ly8gb25seSBibG9jayBpZlxuLy8gMS4gaXQgaGFzIGEgc3JjIGFuZCBpc24ndCBwb2ludGluZyB0byBhbXBwcm9qZWN0J3MgQ0ROXG4vLyAyLiBpdCBpcyB1c2luZyBkYW5nZXJvdXNseVNldElubmVySFRNTCB3aXRob3V0IGEgdHlwZSBvclxuLy8gYSB0eXBlIG9mIHRleHQvamF2YXNjcmlwdFxuaWYocHJvcHMuc3JjJiZwcm9wcy5zcmMuaW5kZXhPZignYW1wcHJvamVjdCcpPC0xfHxwcm9wcy5kYW5nZXJvdXNseVNldElubmVySFRNTCYmKCFwcm9wcy50eXBlfHxwcm9wcy50eXBlPT09J3RleHQvamF2YXNjcmlwdCcpKXtiYWRQcm9wPSc8c2NyaXB0JztPYmplY3Qua2V5cyhwcm9wcykuZm9yRWFjaChwcm9wPT57YmFkUHJvcCs9YCAke3Byb3B9PVwiJHtwcm9wc1twcm9wXX1cImA7fSk7YmFkUHJvcCs9Jy8+Jzt9fWlmKGJhZFByb3Ape2NvbnNvbGUud2FybihgRm91bmQgY29uZmxpY3RpbmcgYW1wIHRhZyBcIiR7Y2hpbGQudHlwZX1cIiB3aXRoIGNvbmZsaWN0aW5nIHByb3AgJHtiYWRQcm9wfSBpbiAke19fTkVYVF9EQVRBX18ucGFnZX0uIGh0dHBzOi8vZXJyLnNoL25leHQuanMvY29uZmxpY3RpbmctYW1wLXRhZ2ApO3JldHVybiBudWxsO319ZWxzZXsvLyBub24tYW1wIG1vZGVcbmlmKHR5cGU9PT0nbGluaycmJnByb3BzLnJlbD09PSdhbXBodG1sJyl7aGFzQW1waHRtbFJlbD10cnVlO319cmV0dXJuIGNoaWxkO30pOy8vIHRyeSB0byBwYXJzZSBzdHlsZXMgZnJvbSBmcmFnbWVudCBmb3IgYmFja3dhcmRzIGNvbXBhdFxuY29uc3QgY3VyU3R5bGVzPUFycmF5LmlzQXJyYXkoc3R5bGVzKT9zdHlsZXM6W107aWYoaW5BbXBNb2RlJiZzdHlsZXMmJi8vIEB0cy1pZ25vcmUgUHJvcGVydHkgJ3Byb3BzJyBkb2VzIG5vdCBleGlzdCBvbiB0eXBlIFJlYWN0RWxlbWVudFxuc3R5bGVzLnByb3BzJiYvLyBAdHMtaWdub3JlIFByb3BlcnR5ICdwcm9wcycgZG9lcyBub3QgZXhpc3Qgb24gdHlwZSBSZWFjdEVsZW1lbnRcbkFycmF5LmlzQXJyYXkoc3R5bGVzLnByb3BzLmNoaWxkcmVuKSl7Y29uc3QgaGFzU3R5bGVzPWVsPT57dmFyIF9lbCRwcm9wcyxfZWwkcHJvcHMkZGFuZ2Vyb3VzbHk7cmV0dXJuIGVsPT09bnVsbHx8ZWw9PT12b2lkIDA/dm9pZCAwOihfZWwkcHJvcHM9ZWwucHJvcHMpPT09bnVsbHx8X2VsJHByb3BzPT09dm9pZCAwP3ZvaWQgMDooX2VsJHByb3BzJGRhbmdlcm91c2x5PV9lbCRwcm9wcy5kYW5nZXJvdXNseVNldElubmVySFRNTCk9PT1udWxsfHxfZWwkcHJvcHMkZGFuZ2Vyb3VzbHk9PT12b2lkIDA/dm9pZCAwOl9lbCRwcm9wcyRkYW5nZXJvdXNseS5fX2h0bWw7fTsvLyBAdHMtaWdub3JlIFByb3BlcnR5ICdwcm9wcycgZG9lcyBub3QgZXhpc3Qgb24gdHlwZSBSZWFjdEVsZW1lbnRcbnN0eWxlcy5wcm9wcy5jaGlsZHJlbi5mb3JFYWNoKGNoaWxkPT57aWYoQXJyYXkuaXNBcnJheShjaGlsZCkpe2NoaWxkLmZvckVhY2goZWw9Pmhhc1N0eWxlcyhlbCkmJmN1clN0eWxlcy5wdXNoKGVsKSk7fWVsc2UgaWYoaGFzU3R5bGVzKGNoaWxkKSl7Y3VyU3R5bGVzLnB1c2goY2hpbGQpO319KTt9cmV0dXJuLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJoZWFkXCIsdGhpcy5wcm9wcyx0aGlzLmNvbnRleHQuX2RvY3VtZW50UHJvcHMuaXNEZXZlbG9wbWVudCYmLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoX3JlYWN0LmRlZmF1bHQuRnJhZ21lbnQsbnVsbCwvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIse1wiZGF0YS1uZXh0LWhpZGUtZm91Y1wiOnRydWUsXCJkYXRhLWFtcGRldm1vZGVcIjppbkFtcE1vZGU/J3RydWUnOnVuZGVmaW5lZCxkYW5nZXJvdXNseVNldElubmVySFRNTDp7X19odG1sOmBib2R5e2Rpc3BsYXk6bm9uZX1gfX0pLC8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwibm9zY3JpcHRcIix7XCJkYXRhLW5leHQtaGlkZS1mb3VjXCI6dHJ1ZSxcImRhdGEtYW1wZGV2bW9kZVwiOmluQW1wTW9kZT8ndHJ1ZSc6dW5kZWZpbmVkfSwvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIse2Rhbmdlcm91c2x5U2V0SW5uZXJIVE1MOntfX2h0bWw6YGJvZHl7ZGlzcGxheTpibG9ja31gfX0pKSksY2hpbGRyZW4saGVhZCwvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcIm1ldGFcIix7bmFtZTpcIm5leHQtaGVhZC1jb3VudFwiLGNvbnRlbnQ6X3JlYWN0LmRlZmF1bHQuQ2hpbGRyZW4uY291bnQoaGVhZHx8W10pLnRvU3RyaW5nKCl9KSxpbkFtcE1vZGUmJi8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KF9yZWFjdC5kZWZhdWx0LkZyYWdtZW50LG51bGwsLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJtZXRhXCIse25hbWU6XCJ2aWV3cG9ydFwiLGNvbnRlbnQ6XCJ3aWR0aD1kZXZpY2Utd2lkdGgsbWluaW11bS1zY2FsZT0xLGluaXRpYWwtc2NhbGU9MVwifSksIWhhc0Nhbm9uaWNhbFJlbCYmLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIse3JlbDpcImNhbm9uaWNhbFwiLGhyZWY6Y2Fub25pY2FsQmFzZSsoMCxfdXRpbHMyLmNsZWFuQW1wUGF0aCkoZGFuZ2Vyb3VzQXNQYXRoKX0pLC8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwibGlua1wiLHtyZWw6XCJwcmVsb2FkXCIsYXM6XCJzY3JpcHRcIixocmVmOlwiaHR0cHM6Ly9jZG4uYW1wcHJvamVjdC5vcmcvdjAuanNcIn0pLHN0eWxlcyYmLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiLHtcImFtcC1jdXN0b21cIjpcIlwiLGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MOntfX2h0bWw6Y3VyU3R5bGVzLm1hcChzdHlsZT0+c3R5bGUucHJvcHMuZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwuX19odG1sKS5qb2luKCcnKS5yZXBsYWNlKC9cXC9cXCojIHNvdXJjZU1hcHBpbmdVUkw9LipcXCpcXC8vZywnJykucmVwbGFjZSgvXFwvXFwqQCBzb3VyY2VVUkw9Lio/XFwqXFwvL2csJycpfX0pLC8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIix7XCJhbXAtYm9pbGVycGxhdGVcIjpcIlwiLGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MOntfX2h0bWw6YGJvZHl7LXdlYmtpdC1hbmltYXRpb246LWFtcC1zdGFydCA4cyBzdGVwcygxLGVuZCkgMHMgMSBub3JtYWwgYm90aDstbW96LWFuaW1hdGlvbjotYW1wLXN0YXJ0IDhzIHN0ZXBzKDEsZW5kKSAwcyAxIG5vcm1hbCBib3RoOy1tcy1hbmltYXRpb246LWFtcC1zdGFydCA4cyBzdGVwcygxLGVuZCkgMHMgMSBub3JtYWwgYm90aDthbmltYXRpb246LWFtcC1zdGFydCA4cyBzdGVwcygxLGVuZCkgMHMgMSBub3JtYWwgYm90aH1ALXdlYmtpdC1rZXlmcmFtZXMgLWFtcC1zdGFydHtmcm9te3Zpc2liaWxpdHk6aGlkZGVufXRve3Zpc2liaWxpdHk6dmlzaWJsZX19QC1tb3ota2V5ZnJhbWVzIC1hbXAtc3RhcnR7ZnJvbXt2aXNpYmlsaXR5OmhpZGRlbn10b3t2aXNpYmlsaXR5OnZpc2libGV9fUAtbXMta2V5ZnJhbWVzIC1hbXAtc3RhcnR7ZnJvbXt2aXNpYmlsaXR5OmhpZGRlbn10b3t2aXNpYmlsaXR5OnZpc2libGV9fUAtby1rZXlmcmFtZXMgLWFtcC1zdGFydHtmcm9te3Zpc2liaWxpdHk6aGlkZGVufXRve3Zpc2liaWxpdHk6dmlzaWJsZX19QGtleWZyYW1lcyAtYW1wLXN0YXJ0e2Zyb217dmlzaWJpbGl0eTpoaWRkZW59dG97dmlzaWJpbGl0eTp2aXNpYmxlfX1gfX0pLC8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwibm9zY3JpcHRcIixudWxsLC8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIix7XCJhbXAtYm9pbGVycGxhdGVcIjpcIlwiLGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MOntfX2h0bWw6YGJvZHl7LXdlYmtpdC1hbmltYXRpb246bm9uZTstbW96LWFuaW1hdGlvbjpub25lOy1tcy1hbmltYXRpb246bm9uZTthbmltYXRpb246bm9uZX1gfX0pKSwvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiLHthc3luYzp0cnVlLHNyYzpcImh0dHBzOi8vY2RuLmFtcHByb2plY3Qub3JnL3YwLmpzXCJ9KSksIWluQW1wTW9kZSYmLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoX3JlYWN0LmRlZmF1bHQuRnJhZ21lbnQsbnVsbCwhaGFzQW1waHRtbFJlbCYmaHlicmlkQW1wJiYvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImxpbmtcIix7cmVsOlwiYW1waHRtbFwiLGhyZWY6Y2Fub25pY2FsQmFzZStnZXRBbXBQYXRoKGFtcFBhdGgsZGFuZ2Vyb3VzQXNQYXRoKX0pLHRoaXMuZ2V0Q3NzTGlua3MoKSwhZGlzYWJsZVJ1bnRpbWVKUyYmLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIse3JlbDpcInByZWxvYWRcIixocmVmOmFzc2V0UHJlZml4K2dldE9wdGlvbmFsTW9kZXJuU2NyaXB0VmFyaWFudChlbmNvZGVVUkkoYC9fbmV4dC9zdGF0aWMvJHtidWlsZElkfS9wYWdlcy9fYXBwLmpzYCkpK19kZXZPbmx5SW52YWxpZGF0ZUNhY2hlUXVlcnlTdHJpbmcsYXM6XCJzY3JpcHRcIixub25jZTp0aGlzLnByb3BzLm5vbmNlLGNyb3NzT3JpZ2luOnRoaXMucHJvcHMuY3Jvc3NPcmlnaW58fHByb2Nlc3MuY3Jvc3NPcmlnaW59KSwhZGlzYWJsZVJ1bnRpbWVKUyYmcGFnZSE9PScvX2Vycm9yJyYmLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIse3JlbDpcInByZWxvYWRcIixocmVmOmFzc2V0UHJlZml4K2dldE9wdGlvbmFsTW9kZXJuU2NyaXB0VmFyaWFudChlbmNvZGVVUkkoYC9fbmV4dC9zdGF0aWMvJHtidWlsZElkfS9wYWdlcyR7Z2V0UGFnZUZpbGUocGFnZSl9YCkpK19kZXZPbmx5SW52YWxpZGF0ZUNhY2hlUXVlcnlTdHJpbmcsYXM6XCJzY3JpcHRcIixub25jZTp0aGlzLnByb3BzLm5vbmNlLGNyb3NzT3JpZ2luOnRoaXMucHJvcHMuY3Jvc3NPcmlnaW58fHByb2Nlc3MuY3Jvc3NPcmlnaW59KSwhZGlzYWJsZVJ1bnRpbWVKUyYmdGhpcy5nZXRQcmVsb2FkRHluYW1pY0NodW5rcygpLCFkaXNhYmxlUnVudGltZUpTJiZ0aGlzLmdldFByZWxvYWRNYWluTGlua3MoKSx0aGlzLmNvbnRleHQuX2RvY3VtZW50UHJvcHMuaXNEZXZlbG9wbWVudCYmLyojX19QVVJFX18qLyAvLyB0aGlzIGVsZW1lbnQgaXMgdXNlZCB0byBtb3VudCBkZXZlbG9wbWVudCBzdHlsZXMgc28gdGhlXG4vLyBvcmRlcmluZyBtYXRjaGVzIHByb2R1Y3Rpb25cbi8vIChieSBkZWZhdWx0LCBzdHlsZS1sb2FkZXIgaW5qZWN0cyBhdCB0aGUgYm90dG9tIG9mIDxoZWFkIC8+KVxuX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcIm5vc2NyaXB0XCIse2lkOlwiX19uZXh0X2Nzc19fRE9fTk9UX1VTRV9fXCJ9KSxzdHlsZXN8fG51bGwpLF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoX3JlYWN0LmRlZmF1bHQuRnJhZ21lbnQse30sLi4uKGhlYWRUYWdzfHxbXSkpKTt9fWV4cG9ydHMuSGVhZD1IZWFkO0hlYWQuY29udGV4dFR5cGU9X2RvY3VtZW50Q29udGV4dC5Eb2N1bWVudENvbnRleHQ7SGVhZC5wcm9wVHlwZXM9e25vbmNlOl9wcm9wVHlwZXMuZGVmYXVsdC5zdHJpbmcsY3Jvc3NPcmlnaW46X3Byb3BUeXBlcy5kZWZhdWx0LnN0cmluZ307Y2xhc3MgTWFpbiBleHRlbmRzIF9yZWFjdC5Db21wb25lbnR7Y29uc3RydWN0b3IoLi4uYXJncyl7c3VwZXIoLi4uYXJncyk7dGhpcy5jb250ZXh0PXZvaWQgMDt9cmVuZGVyKCl7Y29uc3R7aW5BbXBNb2RlLGh0bWx9PXRoaXMuY29udGV4dC5fZG9jdW1lbnRQcm9wcztpZihpbkFtcE1vZGUpcmV0dXJuIF9jb25zdGFudHMuQU1QX1JFTkRFUl9UQVJHRVQ7cmV0dXJuLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIix7aWQ6XCJfX25leHRcIixkYW5nZXJvdXNseVNldElubmVySFRNTDp7X19odG1sOmh0bWx9fSk7fX1leHBvcnRzLk1haW49TWFpbjtNYWluLmNvbnRleHRUeXBlPV9kb2N1bWVudENvbnRleHQuRG9jdW1lbnRDb250ZXh0O2NsYXNzIE5leHRTY3JpcHQgZXh0ZW5kcyBfcmVhY3QuQ29tcG9uZW50e2NvbnN0cnVjdG9yKC4uLmFyZ3Mpe3N1cGVyKC4uLmFyZ3MpO3RoaXMuY29udGV4dD12b2lkIDA7fWdldER5bmFtaWNDaHVua3MoKXtjb25zdHtkeW5hbWljSW1wb3J0cyxhc3NldFByZWZpeCxmaWxlc309dGhpcy5jb250ZXh0Ll9kb2N1bWVudFByb3BzO2NvbnN0e19kZXZPbmx5SW52YWxpZGF0ZUNhY2hlUXVlcnlTdHJpbmd9PXRoaXMuY29udGV4dDtyZXR1cm4gZGVkdXBlKGR5bmFtaWNJbXBvcnRzKS5tYXAoYnVuZGxlPT57bGV0IG1vZGVyblByb3BzPXt9O2lmKHByb2Nlc3MuZW52Ll9fTkVYVF9NT0RFUk5fQlVJTEQpe21vZGVyblByb3BzPS9cXC5tb2R1bGVcXC5qcyQvLnRlc3QoYnVuZGxlLmZpbGUpP3t0eXBlOidtb2R1bGUnfTp7bm9Nb2R1bGU6dHJ1ZX07fWlmKCEvXFwuanMkLy50ZXN0KGJ1bmRsZS5maWxlKXx8ZmlsZXMuaW5jbHVkZXMoYnVuZGxlLmZpbGUpKXJldHVybiBudWxsO3JldHVybi8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIsT2JqZWN0LmFzc2lnbih7YXN5bmM6dHJ1ZSxrZXk6YnVuZGxlLmZpbGUsc3JjOmAke2Fzc2V0UHJlZml4fS9fbmV4dC8ke2VuY29kZVVSSShidW5kbGUuZmlsZSl9JHtfZGV2T25seUludmFsaWRhdGVDYWNoZVF1ZXJ5U3RyaW5nfWAsbm9uY2U6dGhpcy5wcm9wcy5ub25jZSxjcm9zc09yaWdpbjp0aGlzLnByb3BzLmNyb3NzT3JpZ2lufHxwcm9jZXNzLmNyb3NzT3JpZ2lufSxtb2Rlcm5Qcm9wcykpO30pO31nZXRTY3JpcHRzKCl7Y29uc3R7YXNzZXRQcmVmaXgsZmlsZXMsbG93UHJpb3JpdHlGaWxlc309dGhpcy5jb250ZXh0Ll9kb2N1bWVudFByb3BzO2NvbnN0e19kZXZPbmx5SW52YWxpZGF0ZUNhY2hlUXVlcnlTdHJpbmd9PXRoaXMuY29udGV4dDtjb25zdCBub3JtYWxTY3JpcHRzPWZpbGVzPT09bnVsbHx8ZmlsZXM9PT12b2lkIDA/dm9pZCAwOmZpbGVzLmZpbHRlcihmaWxlPT5maWxlLmVuZHNXaXRoKCcuanMnKSk7Y29uc3QgbG93UHJpb3JpdHlTY3JpcHRzPWxvd1ByaW9yaXR5RmlsZXM9PT1udWxsfHxsb3dQcmlvcml0eUZpbGVzPT09dm9pZCAwP3ZvaWQgMDpsb3dQcmlvcml0eUZpbGVzLmZpbHRlcihmaWxlPT5maWxlLmVuZHNXaXRoKCcuanMnKSk7cmV0dXJuWy4uLm5vcm1hbFNjcmlwdHMsLi4ubG93UHJpb3JpdHlTY3JpcHRzXS5tYXAoZmlsZT0+e2xldCBtb2Rlcm5Qcm9wcz17fTtpZihwcm9jZXNzLmVudi5fX05FWFRfTU9ERVJOX0JVSUxEKXttb2Rlcm5Qcm9wcz1maWxlLmVuZHNXaXRoKCcubW9kdWxlLmpzJyk/e3R5cGU6J21vZHVsZSd9Ontub01vZHVsZTp0cnVlfTt9cmV0dXJuLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIixPYmplY3QuYXNzaWduKHtrZXk6ZmlsZSxzcmM6YCR7YXNzZXRQcmVmaXh9L19uZXh0LyR7ZW5jb2RlVVJJKGZpbGUpfSR7X2Rldk9ubHlJbnZhbGlkYXRlQ2FjaGVRdWVyeVN0cmluZ31gLG5vbmNlOnRoaXMucHJvcHMubm9uY2UsYXN5bmM6dHJ1ZSxjcm9zc09yaWdpbjp0aGlzLnByb3BzLmNyb3NzT3JpZ2lufHxwcm9jZXNzLmNyb3NzT3JpZ2lufSxtb2Rlcm5Qcm9wcykpO30pO31nZXRQb2x5ZmlsbFNjcmlwdHMoKXsvLyBwb2x5ZmlsbHMuanMgaGFzIHRvIGJlIHJlbmRlcmVkIGFzIG5vbW9kdWxlIHdpdGhvdXQgYXN5bmNcbi8vIEl0IGFsc28gaGFzIHRvIGJlIHRoZSBmaXJzdCBzY3JpcHQgdG8gbG9hZFxuY29uc3R7YXNzZXRQcmVmaXgscG9seWZpbGxGaWxlc309dGhpcy5jb250ZXh0Ll9kb2N1bWVudFByb3BzO2NvbnN0e19kZXZPbmx5SW52YWxpZGF0ZUNhY2hlUXVlcnlTdHJpbmd9PXRoaXMuY29udGV4dDtyZXR1cm4gcG9seWZpbGxGaWxlcy5maWx0ZXIocG9seWZpbGw9PnBvbHlmaWxsLmVuZHNXaXRoKCcuanMnKSYmIS9cXC5tb2R1bGVcXC5qcyQvLnRlc3QocG9seWZpbGwpKS5tYXAocG9seWZpbGw9Pi8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIse2tleTpwb2x5ZmlsbCxub25jZTp0aGlzLnByb3BzLm5vbmNlLGNyb3NzT3JpZ2luOnRoaXMucHJvcHMuY3Jvc3NPcmlnaW58fHByb2Nlc3MuY3Jvc3NPcmlnaW4sbm9Nb2R1bGU6dHJ1ZSxzcmM6YCR7YXNzZXRQcmVmaXh9L19uZXh0LyR7cG9seWZpbGx9JHtfZGV2T25seUludmFsaWRhdGVDYWNoZVF1ZXJ5U3RyaW5nfWB9KSk7fXN0YXRpYyBnZXRJbmxpbmVTY3JpcHRTb3VyY2UoZG9jdW1lbnRQcm9wcyl7Y29uc3R7X19ORVhUX0RBVEFfX309ZG9jdW1lbnRQcm9wczt0cnl7Y29uc3QgZGF0YT1KU09OLnN0cmluZ2lmeShfX05FWFRfREFUQV9fKTtyZXR1cm4oMCxfaHRtbGVzY2FwZS5odG1sRXNjYXBlSnNvblN0cmluZykoZGF0YSk7fWNhdGNoKGVycil7aWYoZXJyLm1lc3NhZ2UuaW5kZXhPZignY2lyY3VsYXIgc3RydWN0dXJlJykpe3Rocm93IG5ldyBFcnJvcihgQ2lyY3VsYXIgc3RydWN0dXJlIGluIFwiZ2V0SW5pdGlhbFByb3BzXCIgcmVzdWx0IG9mIHBhZ2UgXCIke19fTkVYVF9EQVRBX18ucGFnZX1cIi4gaHR0cHM6Ly9lcnIuc2gvemVpdC9uZXh0LmpzL2NpcmN1bGFyLXN0cnVjdHVyZWApO310aHJvdyBlcnI7fX1yZW5kZXIoKXtjb25zdHtzdGF0aWNNYXJrdXAsYXNzZXRQcmVmaXgsaW5BbXBNb2RlLGRldkZpbGVzLF9fTkVYVF9EQVRBX18sYm9keVRhZ3MsdW5zdGFibGVfcnVudGltZUpTfT10aGlzLmNvbnRleHQuX2RvY3VtZW50UHJvcHM7Y29uc3QgZGlzYWJsZVJ1bnRpbWVKUz11bnN0YWJsZV9ydW50aW1lSlM9PT1mYWxzZTtjb25zdHtfZGV2T25seUludmFsaWRhdGVDYWNoZVF1ZXJ5U3RyaW5nfT10aGlzLmNvbnRleHQ7aWYoaW5BbXBNb2RlKXtpZihwcm9jZXNzLmVudi5OT0RFX0VOVj09PSdwcm9kdWN0aW9uJyl7cmV0dXJuIG51bGw7fWNvbnN0IGRldkZpbGVzPVtfY29uc3RhbnRzLkNMSUVOVF9TVEFUSUNfRklMRVNfUlVOVElNRV9SRUFDVF9SRUZSRVNILF9jb25zdGFudHMuQ0xJRU5UX1NUQVRJQ19GSUxFU19SVU5USU1FX0FNUCxfY29uc3RhbnRzLkNMSUVOVF9TVEFUSUNfRklMRVNfUlVOVElNRV9XRUJQQUNLXTtyZXR1cm4vKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChfcmVhY3QuZGVmYXVsdC5GcmFnbWVudCxudWxsLHN0YXRpY01hcmt1cHx8ZGlzYWJsZVJ1bnRpbWVKUz9udWxsOi8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIse2lkOlwiX19ORVhUX0RBVEFfX1wiLHR5cGU6XCJhcHBsaWNhdGlvbi9qc29uXCIsbm9uY2U6dGhpcy5wcm9wcy5ub25jZSxjcm9zc09yaWdpbjp0aGlzLnByb3BzLmNyb3NzT3JpZ2lufHxwcm9jZXNzLmNyb3NzT3JpZ2luLGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MOntfX2h0bWw6TmV4dFNjcmlwdC5nZXRJbmxpbmVTY3JpcHRTb3VyY2UodGhpcy5jb250ZXh0Ll9kb2N1bWVudFByb3BzKX0sXCJkYXRhLWFtcGRldm1vZGVcIjp0cnVlfSksZGV2RmlsZXM/ZGV2RmlsZXMubWFwKGZpbGU9Pi8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIse2tleTpmaWxlLHNyYzpgJHthc3NldFByZWZpeH0vX25leHQvJHtmaWxlfSR7X2Rldk9ubHlJbnZhbGlkYXRlQ2FjaGVRdWVyeVN0cmluZ31gLG5vbmNlOnRoaXMucHJvcHMubm9uY2UsY3Jvc3NPcmlnaW46dGhpcy5wcm9wcy5jcm9zc09yaWdpbnx8cHJvY2Vzcy5jcm9zc09yaWdpbixcImRhdGEtYW1wZGV2bW9kZVwiOnRydWV9KSk6bnVsbCxfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KF9yZWFjdC5kZWZhdWx0LkZyYWdtZW50LHt9LC4uLihib2R5VGFnc3x8W10pKSk7fWNvbnN0e3BhZ2UsYnVpbGRJZH09X19ORVhUX0RBVEFfXztpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7aWYodGhpcy5wcm9wcy5jcm9zc09yaWdpbiljb25zb2xlLndhcm4oJ1dhcm5pbmc6IGBOZXh0U2NyaXB0YCBhdHRyaWJ1dGUgYGNyb3NzT3JpZ2luYCBpcyBkZXByZWNhdGVkLiBodHRwczovL2Vyci5zaC9uZXh0LmpzL2RvYy1jcm9zc29yaWdpbi1kZXByZWNhdGVkJyk7fWNvbnN0IHBhZ2VTY3JpcHQ9Wy8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIsT2JqZWN0LmFzc2lnbih7YXN5bmM6dHJ1ZSxcImRhdGEtbmV4dC1wYWdlXCI6cGFnZSxrZXk6cGFnZSxzcmM6YXNzZXRQcmVmaXgrZW5jb2RlVVJJKGAvX25leHQvc3RhdGljLyR7YnVpbGRJZH0vcGFnZXMke2dldFBhZ2VGaWxlKHBhZ2UpfWApK19kZXZPbmx5SW52YWxpZGF0ZUNhY2hlUXVlcnlTdHJpbmcsbm9uY2U6dGhpcy5wcm9wcy5ub25jZSxjcm9zc09yaWdpbjp0aGlzLnByb3BzLmNyb3NzT3JpZ2lufHxwcm9jZXNzLmNyb3NzT3JpZ2lufSxwcm9jZXNzLmVudi5fX05FWFRfTU9ERVJOX0JVSUxEP3tub01vZHVsZTp0cnVlfTp7fSkpLHByb2Nlc3MuZW52Ll9fTkVYVF9NT0RFUk5fQlVJTEQmJi8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIse2FzeW5jOnRydWUsXCJkYXRhLW5leHQtcGFnZVwiOnBhZ2Usa2V5OmAke3BhZ2V9LW1vZGVybmAsc3JjOmFzc2V0UHJlZml4K2dldE9wdGlvbmFsTW9kZXJuU2NyaXB0VmFyaWFudChlbmNvZGVVUkkoYC9fbmV4dC9zdGF0aWMvJHtidWlsZElkfS9wYWdlcyR7Z2V0UGFnZUZpbGUocGFnZSl9YCkpK19kZXZPbmx5SW52YWxpZGF0ZUNhY2hlUXVlcnlTdHJpbmcsbm9uY2U6dGhpcy5wcm9wcy5ub25jZSxjcm9zc09yaWdpbjp0aGlzLnByb3BzLmNyb3NzT3JpZ2lufHxwcm9jZXNzLmNyb3NzT3JpZ2luLHR5cGU6XCJtb2R1bGVcIn0pXTtjb25zdCBhcHBTY3JpcHQ9Wy8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIsT2JqZWN0LmFzc2lnbih7YXN5bmM6dHJ1ZSxcImRhdGEtbmV4dC1wYWdlXCI6XCIvX2FwcFwiLHNyYzphc3NldFByZWZpeCtgL19uZXh0L3N0YXRpYy8ke2J1aWxkSWR9L3BhZ2VzL19hcHAuanNgK19kZXZPbmx5SW52YWxpZGF0ZUNhY2hlUXVlcnlTdHJpbmcsa2V5OlwiX2FwcFwiLG5vbmNlOnRoaXMucHJvcHMubm9uY2UsY3Jvc3NPcmlnaW46dGhpcy5wcm9wcy5jcm9zc09yaWdpbnx8cHJvY2Vzcy5jcm9zc09yaWdpbn0scHJvY2Vzcy5lbnYuX19ORVhUX01PREVSTl9CVUlMRD97bm9Nb2R1bGU6dHJ1ZX06e30pKSxwcm9jZXNzLmVudi5fX05FWFRfTU9ERVJOX0JVSUxEJiYvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiLHthc3luYzp0cnVlLFwiZGF0YS1uZXh0LXBhZ2VcIjpcIi9fYXBwXCIsc3JjOmFzc2V0UHJlZml4K2AvX25leHQvc3RhdGljLyR7YnVpbGRJZH0vcGFnZXMvX2FwcC5tb2R1bGUuanNgK19kZXZPbmx5SW52YWxpZGF0ZUNhY2hlUXVlcnlTdHJpbmcsa2V5OlwiX2FwcC1tb2Rlcm5cIixub25jZTp0aGlzLnByb3BzLm5vbmNlLGNyb3NzT3JpZ2luOnRoaXMucHJvcHMuY3Jvc3NPcmlnaW58fHByb2Nlc3MuY3Jvc3NPcmlnaW4sdHlwZTpcIm1vZHVsZVwifSldO3JldHVybi8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KF9yZWFjdC5kZWZhdWx0LkZyYWdtZW50LG51bGwsIWRpc2FibGVSdW50aW1lSlMmJmRldkZpbGVzP2RldkZpbGVzLm1hcChmaWxlPT4hZmlsZS5tYXRjaCgvXFwuanNcXC5tYXAvKSYmLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIix7a2V5OmZpbGUsc3JjOmAke2Fzc2V0UHJlZml4fS9fbmV4dC8ke2VuY29kZVVSSShmaWxlKX0ke19kZXZPbmx5SW52YWxpZGF0ZUNhY2hlUXVlcnlTdHJpbmd9YCxub25jZTp0aGlzLnByb3BzLm5vbmNlLGNyb3NzT3JpZ2luOnRoaXMucHJvcHMuY3Jvc3NPcmlnaW58fHByb2Nlc3MuY3Jvc3NPcmlnaW59KSk6bnVsbCxzdGF0aWNNYXJrdXB8fGRpc2FibGVSdW50aW1lSlM/bnVsbDovKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiLHtpZDpcIl9fTkVYVF9EQVRBX19cIix0eXBlOlwiYXBwbGljYXRpb24vanNvblwiLG5vbmNlOnRoaXMucHJvcHMubm9uY2UsY3Jvc3NPcmlnaW46dGhpcy5wcm9wcy5jcm9zc09yaWdpbnx8cHJvY2Vzcy5jcm9zc09yaWdpbixkYW5nZXJvdXNseVNldElubmVySFRNTDp7X19odG1sOk5leHRTY3JpcHQuZ2V0SW5saW5lU2NyaXB0U291cmNlKHRoaXMuY29udGV4dC5fZG9jdW1lbnRQcm9wcyl9fSkscHJvY2Vzcy5lbnYuX19ORVhUX01PREVSTl9CVUlMRCYmIWRpc2FibGVSdW50aW1lSlM/LyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIix7bm9uY2U6dGhpcy5wcm9wcy5ub25jZSxjcm9zc09yaWdpbjp0aGlzLnByb3BzLmNyb3NzT3JpZ2lufHxwcm9jZXNzLmNyb3NzT3JpZ2luLG5vTW9kdWxlOnRydWUsZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw6e19faHRtbDpOZXh0U2NyaXB0LnNhZmFyaU5vbW9kdWxlRml4fX0pOm51bGwsIWRpc2FibGVSdW50aW1lSlMmJnRoaXMuZ2V0UG9seWZpbGxTY3JpcHRzKCksIWRpc2FibGVSdW50aW1lSlMmJmFwcFNjcmlwdCwhZGlzYWJsZVJ1bnRpbWVKUyYmcGFnZSE9PScvX2Vycm9yJyYmcGFnZVNjcmlwdCxkaXNhYmxlUnVudGltZUpTfHxzdGF0aWNNYXJrdXA/bnVsbDp0aGlzLmdldER5bmFtaWNDaHVua3MoKSxkaXNhYmxlUnVudGltZUpTfHxzdGF0aWNNYXJrdXA/bnVsbDp0aGlzLmdldFNjcmlwdHMoKSxfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KF9yZWFjdC5kZWZhdWx0LkZyYWdtZW50LHt9LC4uLihib2R5VGFnc3x8W10pKSk7fX1leHBvcnRzLk5leHRTY3JpcHQ9TmV4dFNjcmlwdDtOZXh0U2NyaXB0LmNvbnRleHRUeXBlPV9kb2N1bWVudENvbnRleHQuRG9jdW1lbnRDb250ZXh0O05leHRTY3JpcHQucHJvcFR5cGVzPXtub25jZTpfcHJvcFR5cGVzLmRlZmF1bHQuc3RyaW5nLGNyb3NzT3JpZ2luOl9wcm9wVHlwZXMuZGVmYXVsdC5zdHJpbmd9O05leHRTY3JpcHQuc2FmYXJpTm9tb2R1bGVGaXg9JyFmdW5jdGlvbigpe3ZhciBlPWRvY3VtZW50LHQ9ZS5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO2lmKCEoXCJub01vZHVsZVwiaW4gdCkmJlwib25iZWZvcmVsb2FkXCJpbiB0KXt2YXIgbj0hMTtlLmFkZEV2ZW50TGlzdGVuZXIoXCJiZWZvcmVsb2FkXCIsZnVuY3Rpb24oZSl7aWYoZS50YXJnZXQ9PT10KW49ITA7ZWxzZSBpZighZS50YXJnZXQuaGFzQXR0cmlidXRlKFwibm9tb2R1bGVcIil8fCFuKXJldHVybjtlLnByZXZlbnREZWZhdWx0KCl9LCEwKSx0LnR5cGU9XCJtb2R1bGVcIix0LnNyYz1cIi5cIixlLmhlYWQuYXBwZW5kQ2hpbGQodCksdC5yZW1vdmUoKX19KCk7JztmdW5jdGlvbiBnZXRBbXBQYXRoKGFtcFBhdGgsYXNQYXRoKXtyZXR1cm4gYW1wUGF0aHx8YCR7YXNQYXRofSR7YXNQYXRoLmluY2x1ZGVzKCc/Jyk/JyYnOic/J31hbXA9MWA7fWZ1bmN0aW9uIGdldFBhZ2VGaWxlKHBhZ2UsYnVpbGRJZCl7Y29uc3Qgc3RhcnRpbmdVcmw9cGFnZT09PScvJz8nL2luZGV4JzpwYWdlO3JldHVybiBidWlsZElkP2Ake3N0YXJ0aW5nVXJsfS4ke2J1aWxkSWR9LmpzYDpgJHtzdGFydGluZ1VybH0uanNgO30iLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmh0bWxFc2NhcGVKc29uU3RyaW5nPWh0bWxFc2NhcGVKc29uU3RyaW5nOy8vIFRoaXMgdXRpbGl0eSBpcyBiYXNlZCBvbiBodHRwczovL2dpdGh1Yi5jb20vemVydG9zaC9odG1sZXNjYXBlXG4vLyBMaWNlbnNlOiBodHRwczovL2dpdGh1Yi5jb20vemVydG9zaC9odG1sZXNjYXBlL2Jsb2IvMDUyN2NhNzE1NmE1MjRkMjU2MTAxYmIzMTBhOWY5NzBmNjMwNzhhZC9MSUNFTlNFXG5jb25zdCBFU0NBUEVfTE9PS1VQPXsnJic6J1xcXFx1MDAyNicsJz4nOidcXFxcdTAwM2UnLCc8JzonXFxcXHUwMDNjJywnXFx1MjAyOCc6J1xcXFx1MjAyOCcsJ1xcdTIwMjknOidcXFxcdTIwMjknfTtjb25zdCBFU0NBUEVfUkVHRVg9L1smPjxcXHUyMDI4XFx1MjAyOV0vZztmdW5jdGlvbiBodG1sRXNjYXBlSnNvblN0cmluZyhzdHIpe3JldHVybiBzdHIucmVwbGFjZShFU0NBUEVfUkVHRVgsbWF0Y2g9PkVTQ0FQRV9MT09LVVBbbWF0Y2hdKTt9IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvcGFnZXMvX2RvY3VtZW50JylcbiIsImltcG9ydCBEb2N1bWVudCwgeyBIZWFkLCBNYWluLCBOZXh0U2NyaXB0IH0gZnJvbSAnbmV4dC9kb2N1bWVudCc7XG5cbmNsYXNzIE15RG9jdW1lbnQgZXh0ZW5kcyBEb2N1bWVudCB7XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8aHRtbCBsYW5nPVwiZW5cIj5cbiAgICAgICAgICAgICAgICA8aGVhZD5cbiAgICAgICAgICAgICAgICAgICAgPG1ldGEgY2hhclNldD1cIlVURi04XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIk15IFNFTyByZWFjdCBhcHAgd2l0aCBuZXh0IGpzXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPG1ldGEgbmFtZT1cImtleXdvcmRcIiBjb250ZW50PVwibmV4dCByZWFjdCBzZW9cIiAvPlxuICAgICAgICAgICAgICAgICAgICA8bWV0YSBuYW1lPVwiYXV0aG9yXCIgY29udGVudD1cIk1heCBHYXJjaWFcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cIi9zdGF0aWMvc3R5bGVzLmNzc1wiIC8+XG4gICAgICAgICAgICAgICAgICAgIDxsaW5rXG4gICAgICAgICAgICAgICAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL3VucGtnLmNvbS9ib290c3RyYXAtbWF0ZXJpYWwtZGVzaWduQDQuMS4xL2Rpc3QvY3NzL2Jvb3RzdHJhcC1tYXRlcmlhbC1kZXNpZ24ubWluLmNzc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICBpbnRlZ3JpdHk9XCJzaGEzODQtd1h6bkdKTkVYTkcxTkZzYm0wdWdyTEZNUVBXc3dSM2xkczJWZWluYWhQOE4wekp3OVZXU29wYmp2Mng3V0N2WFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBjcm9zc29yaWdpbj1cImFub255bW91c1wiIC8+XG4gICAgICAgICAgICAgICAgPC9oZWFkPlxuICAgICAgICAgICAgICAgIDxib2R5PlxuICAgICAgICAgICAgICAgICAgICA8TWFpbiAvPlxuICAgICAgICAgICAgICAgICAgICA8TmV4dFNjcmlwdCAvPlxuICAgICAgICAgICAgICAgIDwvYm9keT5cbiAgICAgICAgICAgIDwvaHRtbD5cbiAgICAgICAgKVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTXlEb2N1bWVudDsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN0eWxlZC1qc3gvc2VydmVyXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=