(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("CoreHome"), require("vue"));
	else if(typeof define === 'function' && define.amd)
		define(["CoreHome", ], factory);
	else if(typeof exports === 'object')
		exports["GroupPermissions"] = factory(require("CoreHome"), require("vue"));
	else
		root["GroupPermissions"] = factory(root["CoreHome"], root["Vue"]);
})((typeof self !== 'undefined' ? self : this), function(__WEBPACK_EXTERNAL_MODULE__19dc__, __WEBPACK_EXTERNAL_MODULE__8bbf__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	__webpack_require__.p = "plugins/GroupPermissions/vue/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "fae3");
/******/ })
/************************************************************************/
/******/ ({

/***/ "19dc":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__19dc__;

/***/ }),

/***/ "8bbf":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__8bbf__;

/***/ }),

/***/ "fae3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "TabManageGroupAccess", function() { return /* reexport */ TabManageGroupAccess; });
__webpack_require__.d(__webpack_exports__, "TabManageGroups", function() { return /* reexport */ TabManageGroups; });

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (false) { var getCurrentScript; }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_ = __webpack_require__("8bbf");

// CONCATENATED MODULE: ./node_modules/@vue/cli-plugin-babel/node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/@vue/cli-plugin-babel/node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--0-1!./plugins/GroupPermissions/vue/src/GroupPermissions/TabManageGroupAccess.vue?vue&type=template&id=d0716bc0
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


var _hoisted_1 = {
  id: "ajaxErrorAccessGroupMember",
  ref: "errorContainer"
};
var _hoisted_2 = {
  class: "card"
};
var _hoisted_3 = {
  class: "card-content"
};
var _hoisted_4 = {
  class: "sites_autocomplete"
};
var _hoisted_5 = {
  class: "entityContainer",
  style: {
    "width": "600px",
    "margin-top": "16px"
  }
};
var _hoisted_6 = {
  class: "entityTable dataTable",
  style: {
    "display": "inline-table",
    "width": "550px"
  }
};
var _hoisted_7 = {
  class: "first"
};
var _hoisted_8 = {
  key: 0,
  src: "plugins/UsersManager/images/ok.png",
  class: "accessGranted"
};
var _hoisted_9 = ["onClick"];

var _hoisted_10 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createTextVNode"])("   ");

var _hoisted_11 = {
  class: "ui-confirm",
  id: "confirmUpdateAccessToAllSites",
  ref: "confirmUpdateAccessToAllSites"
};
var _hoisted_12 = ["textContent"];
var _hoisted_13 = ["value"];
var _hoisted_14 = ["value"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_SiteSelector = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("SiteSelector");

  var _component_ActivityIndicator = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("ActivityIndicator");

  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])(external_commonjs_vue_commonjs2_vue_root_Vue_["Fragment"], null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("p", null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('GroupPermissions_DescriptionAccessTab')), 1), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", _hoisted_1, null, 512), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", _hoisted_2, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", _hoisted_3, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", _hoisted_4, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_SiteSelector, {
    "default-to-first-site": true,
    "show-selected-site": true,
    "show-all-sites-item": _ctx.hasSuperUserAccess,
    "switch-site-on-select": false,
    "only-sites-with-admin-access": true,
    "all-sites-text": _ctx.translate('UsersManager_ApplyToAllWebsites'),
    "model-value": _ctx.site,
    "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
      _ctx.site = $event;

      _ctx.updateGroupAccessList();
    })
  }, null, 8, ["show-all-sites-item", "all-sites-text", "model-value"])]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", _hoisted_5, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("table", _hoisted_6, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("thead", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("tr", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("th", _hoisted_7, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('GroupPermissions_Group')), 1), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("th", null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('UsersManager_PrivNone')), 1), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("th", null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('UsersManager_PrivView')), 1), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("th", null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('UsersManager_PrivWrite')), 1), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("th", null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('UsersManager_PrivAdmin')), 1)])]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("tbody", null, [(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(true), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])(external_commonjs_vue_commonjs2_vue_root_Vue_["Fragment"], null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderList"])(_ctx.groupAccess, function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        groupName = _ref2[0],
        groupAccess = _ref2[1];

    return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("tr", {
      key: groupName
    }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("td", null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(groupName), 1), (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])(external_commonjs_vue_commonjs2_vue_root_Vue_["Fragment"], null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderList"])(['noaccess', 'view', 'write', 'admin'], function (access) {
      return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("td", {
        key: access
      }, [groupAccess == access ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("img", _hoisted_8)) : (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("img", {
        key: 1,
        src: "plugins/UsersManager/images/no-access.png",
        class: "updateAccess",
        onClick: function onClick($event) {
          return _ctx.onSetAccessClicked($event, groupName, access);
        }
      }, null, 8, _hoisted_9)), _hoisted_10]);
    }), 64))]);
  }), 128))])])]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_ActivityIndicator, {
    loading: _ctx.isLoading,
    style: {
      "padding-top": "10px"
    }
  }, null, 8, ["loading"]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", _hoisted_11, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("h2", {
    textContent: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.confirmUpdateAccessToAllSitesText)
  }, null, 8, _hoisted_12), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("input", {
    role: "yes",
    type: "button",
    value: _ctx.translate('General_Yes')
  }, null, 8, _hoisted_13), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("input", {
    role: "no",
    type: "button",
    value: _ctx.translate('General_No')
  }, null, 8, _hoisted_14)], 512)])])], 64);
}
// CONCATENATED MODULE: ./plugins/GroupPermissions/vue/src/GroupPermissions/TabManageGroupAccess.vue?vue&type=template&id=d0716bc0

// EXTERNAL MODULE: external "CoreHome"
var external_CoreHome_ = __webpack_require__("19dc");

// CONCATENATED MODULE: ./node_modules/@vue/cli-plugin-typescript/node_modules/cache-loader/dist/cjs.js??ref--14-0!./node_modules/babel-loader/lib!./node_modules/@vue/cli-plugin-typescript/node_modules/ts-loader??ref--14-2!./node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--0-1!./plugins/GroupPermissions/vue/src/GroupPermissions/TabManageGroupAccess.vue?vue&type=script&lang=ts


/* harmony default export */ var TabManageGroupAccessvue_type_script_lang_ts = (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["defineComponent"])({
  components: {
    ActivityIndicator: external_CoreHome_["ActivityIndicator"],
    SiteSelector: external_CoreHome_["SiteSelector"]
  },
  data: function data() {
    return {
      site: {
        id: external_CoreHome_["Matomo"].idSite,
        name: external_CoreHome_["Matomo"].currentSiteName
      },
      groupAccess: new Map(),
      isLoading: false,
      confirmUpdateAccessToAllSitesText: ''
    };
  },
  methods: {
    onSetAccessClicked: function onSetAccessClicked(event, groupName, access) {
      var _this = this;

      var idSite = this.site.id;

      if (idSite === 'all') {
        this.confirmUpdateAccessToAllSitesText = Object(external_CoreHome_["translate"])('GroupPermissions_ChangeAccessToAllSitesConfirm', access, groupName);
        external_CoreHome_["Matomo"].helper.modalConfirm('#confirmUpdateAccessToAllSites', {
          yes: function yes() {
            return _this.updateGroupAccess(idSite, groupName, access);
          }
        });
      } else {
        this.updateGroupAccess(idSite, groupName, access);
      }
    },
    updateGroupAccess: function updateGroupAccess(idSite, groupName, access) {
      var _this2 = this;

      this.isLoading = true;
      external_CoreHome_["AjaxHelper"].post({
        module: 'API',
        format: 'json',
        method: 'GroupPermissions.setGroupAccess'
      }, {
        idSites: idSite,
        name: groupName,
        access: access
      }, {
        errorElement: '#ajaxErrorAccessGroupMember'
      }).then(function () {
        _this2.groupAccess.set(groupName, access);
      }).finally(function () {
        _this2.isLoading = false;
      });
    },
    updateGroupAccessList: function updateGroupAccessList() {
      var _this3 = this;

      this.isLoading = true;
      var idSite = this.site.id;

      if (idSite === 'all') {
        external_CoreHome_["AjaxHelper"].post({
          module: 'API',
          format: 'json',
          method: 'GroupPermissions.getAllGroups'
        }, {}, {
          errorElement: '#ajaxErrorAccessGroupMember'
        }).then(function (response) {
          _this3.groupAccess.clear();

          var groupAccessTmp = [];
          response.forEach(function (group) {
            groupAccessTmp.push(group.name);
          });
          groupAccessTmp.sort().forEach(function (group) {
            _this3.groupAccess.set(group, 'noaccess');
          });
        }).finally(function () {
          _this3.isLoading = false;
        });
      } else {
        external_CoreHome_["AjaxHelper"].post({
          module: 'API',
          format: 'json',
          method: 'GroupPermissions.getGroupAccessFromSite'
        }, {
          idSite: this.site.id
        }, {
          errorElement: '#ajaxErrorAccessGroupMember'
        }).then(function (response) {
          _this3.groupAccess.clear();

          Object.keys(response).sort().forEach(function (group) {
            _this3.groupAccess.set(group, response[group]);
          });
        }).finally(function () {
          _this3.isLoading = false;
        });
      }
    }
  },
  computed: {
    hasSuperUserAccess: function hasSuperUserAccess() {
      return !!external_CoreHome_["Matomo"].hasSuperUserAccess;
    }
  }
}));
// CONCATENATED MODULE: ./plugins/GroupPermissions/vue/src/GroupPermissions/TabManageGroupAccess.vue?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./plugins/GroupPermissions/vue/src/GroupPermissions/TabManageGroupAccess.vue



TabManageGroupAccessvue_type_script_lang_ts.render = render

/* harmony default export */ var TabManageGroupAccess = (TabManageGroupAccessvue_type_script_lang_ts);
// CONCATENATED MODULE: ./node_modules/@vue/cli-plugin-babel/node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/@vue/cli-plugin-babel/node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--0-1!./plugins/GroupPermissions/vue/src/GroupPermissions/TabManageGroups.vue?vue&type=template&id=ecff3f1e

var TabManageGroupsvue_type_template_id_ecff3f1e_hoisted_1 = {
  class: "card"
};
var TabManageGroupsvue_type_template_id_ecff3f1e_hoisted_2 = {
  class: "card-content",
  style: {
    "width": "600px"
  }
};
var TabManageGroupsvue_type_template_id_ecff3f1e_hoisted_3 = {
  id: "ajaxErrorManageGroups",
  ref: "errorContainer"
};
function TabManageGroupsvue_type_template_id_ecff3f1e_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_CreateGroup = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("CreateGroup");

  var _component_multiselect = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("multiselect");

  var _component_ManageGroup = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("ManageGroup");

  var _component_ActivityIndicator = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("ActivityIndicator");

  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])(external_commonjs_vue_commonjs2_vue_root_Vue_["Fragment"], null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("p", null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('GroupPermissions_DescriptionGroupsTab')), 1), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_CreateGroup, {
    onGroupCreated: _cache[0] || (_cache[0] = function ($event) {
      return _ctx.onGroupCreated($event);
    })
  }), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", TabManageGroupsvue_type_template_id_ecff3f1e_hoisted_1, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", TabManageGroupsvue_type_template_id_ecff3f1e_hoisted_2, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("h2", null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('GroupPermissions_ManageGroup')), 1), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_multiselect, {
    options: _ctx.groups,
    "track-by": "idGroup",
    label: "name",
    modelValue: _ctx.selectedGroup,
    "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
      return _ctx.selectedGroup = $event;
    })
  }, null, 8, ["options", "modelValue"]), _ctx.selectedGroup ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(_component_ManageGroup, {
    key: 0,
    group: _ctx.selectedGroup,
    onGroupRenamed: _cache[2] || (_cache[2] = function ($event) {
      return _ctx.onGroupRenamed($event);
    }),
    onGroupDeleted: _cache[3] || (_cache[3] = function ($event) {
      return _ctx.onGroupDeleted($event);
    })
  }, null, 8, ["group"])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true)])]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", TabManageGroupsvue_type_template_id_ecff3f1e_hoisted_3, null, 512), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_ActivityIndicator, {
    loading: _ctx.isLoadingGroups || _ctx.isLoadingDefaultGroup,
    style: {
      "padding-top": "10px"
    }
  }, null, 8, ["loading"])], 64);
}
// CONCATENATED MODULE: ./plugins/GroupPermissions/vue/src/GroupPermissions/TabManageGroups.vue?vue&type=template&id=ecff3f1e

// CONCATENATED MODULE: ./plugins/GroupPermissions/vue/src/node_modules/vue-multiselect/dist/vue-multiselect.esm.js


function isEmpty (opt) {
  if (opt === 0) return false
  if (Array.isArray(opt) && opt.length === 0) return true
  return !opt
}

function not (fun) {
  return (...params) => !fun(...params)
}

function includes (str, query) {
  /* istanbul ignore else */
  if (str === undefined) str = 'undefined';
  if (str === null) str = 'null';
  if (str === false) str = 'false';
  const text = str.toString().toLowerCase();
  return text.indexOf(query.trim()) !== -1
}

function filterOptions (options, search, label, customLabel) {
  return search ? options
    .filter((option) => includes(customLabel(option, label), search))
    .sort((a, b) => customLabel(a, label).length - customLabel(b, label).length) : options
}

function stripGroups (options) {
  return options.filter((option) => !option.$isLabel)
}

function flattenOptions (values, label) {
  return (options) =>
    options.reduce((prev, curr) => {
      /* istanbul ignore else */
      if (curr[values] && curr[values].length) {
        prev.push({
          $groupLabel: curr[label],
          $isLabel: true
        });
        return prev.concat(curr[values])
      }
      return prev
    }, [])
}

function filterGroups (search, label, values, groupLabel, customLabel) {
  return (groups) =>
    groups.map((group) => {
      /* istanbul ignore else */
      if (!group[values]) {
        console.warn(`Options passed to vue-multiselect do not contain groups, despite the config.`);
        return []
      }
      const groupOptions = filterOptions(group[values], search, label, customLabel);

      return groupOptions.length
        ? {
          [groupLabel]: group[groupLabel],
          [values]: groupOptions
        }
        : []
    })
}

const flow = (...fns) => (x) => fns.reduce((v, f) => f(v), x);

var multiselectMixin = {
  data () {
    return {
      search: '',
      isOpen: false,
      preferredOpenDirection: 'below',
      optimizedHeight: this.maxHeight
    }
  },
  props: {
    /**
     * Decide whether to filter the results based on search query.
     * Useful for async filtering, where we search through more complex data.
     * @type {Boolean}
     */
    internalSearch: {
      type: Boolean,
      default: true
    },
    /**
     * Array of available options: Objects, Strings or Integers.
     * If array of objects, visible label will default to option.label.
     * If `labal` prop is passed, label will equal option['label']
     * @type {Array}
     */
    options: {
      type: Array,
      required: true
    },
    /**
     * Equivalent to the `multiple` attribute on a `<select>` input.
     * @default false
     * @type {Boolean}
     */
    multiple: {
      type: Boolean,
      default: false
    },
    /**
     * Key to compare objects
     * @default 'id'
     * @type {String}
     */
    trackBy: {
      type: String
    },
    /**
     * Label to look for in option Object
     * @default 'label'
     * @type {String}
     */
    label: {
      type: String
    },
    /**
     * Enable/disable search in options
     * @default true
     * @type {Boolean}
     */
    searchable: {
      type: Boolean,
      default: true
    },
    /**
     * Clear the search input after `)
     * @default true
     * @type {Boolean}
     */
    clearOnSelect: {
      type: Boolean,
      default: true
    },
    /**
     * Hide already selected options
     * @default false
     * @type {Boolean}
     */
    hideSelected: {
      type: Boolean,
      default: false
    },
    /**
     * Equivalent to the `placeholder` attribute on a `<select>` input.
     * @default 'Select option'
     * @type {String}
     */
    placeholder: {
      type: String,
      default: 'Select option'
    },
    /**
     * Allow to remove all selected values
     * @default true
     * @type {Boolean}
     */
    allowEmpty: {
      type: Boolean,
      default: true
    },
    /**
     * Reset this.internalValue, this.search after this.internalValue changes.
     * Useful if want to create a stateless dropdown.
     * @default false
     * @type {Boolean}
     */
    resetAfter: {
      type: Boolean,
      default: false
    },
    /**
     * Enable/disable closing after selecting an option
     * @default true
     * @type {Boolean}
     */
    closeOnSelect: {
      type: Boolean,
      default: true
    },
    /**
     * Function to interpolate the custom label
     * @default false
     * @type {Function}
     */
    customLabel: {
      type: Function,
      default (option, label) {
        if (isEmpty(option)) return ''
        return label ? option[label] : option
      }
    },
    /**
     * Disable / Enable tagging
     * @default false
     * @type {Boolean}
     */
    taggable: {
      type: Boolean,
      default: false
    },
    /**
     * String to show when highlighting a potential tag
     * @default 'Press enter to create a tag'
     * @type {String}
    */
    tagPlaceholder: {
      type: String,
      default: 'Press enter to create a tag'
    },
    /**
     * By default new tags will appear above the search results.
     * Changing to 'bottom' will revert this behaviour
     * and will proritize the search results
     * @default 'top'
     * @type {String}
    */
    tagPosition: {
      type: String,
      default: 'top'
    },
    /**
     * Number of allowed selected options. No limit if 0.
     * @default 0
     * @type {Number}
    */
    max: {
      type: [Number, Boolean],
      default: false
    },
    /**
     * Will be passed with all events as second param.
     * Useful for identifying events origin.
     * @default null
     * @type {String|Integer}
    */
    id: {
      default: null
    },
    /**
     * Limits the options displayed in the dropdown
     * to the first X options.
     * @default 1000
     * @type {Integer}
    */
    optionsLimit: {
      type: Number,
      default: 1000
    },
    /**
     * Name of the property containing
     * the group values
     * @default 1000
     * @type {String}
    */
    groupValues: {
      type: String
    },
    /**
     * Name of the property containing
     * the group label
     * @default 1000
     * @type {String}
    */
    groupLabel: {
      type: String
    },
    /**
     * Allow to select all group values
     * by selecting the group label
     * @default false
     * @type {Boolean}
     */
    groupSelect: {
      type: Boolean,
      default: false
    },
    /**
     * Array of keyboard keys to block
     * when selecting
     * @default 1000
     * @type {String}
    */
    blockKeys: {
      type: Array,
      default () {
        return []
      }
    },
    /**
     * Prevent from wiping up the search value
     * @default false
     * @type {Boolean}
    */
    preserveSearch: {
      type: Boolean,
      default: false
    },
    /**
     * Select 1st options if value is empty
     * @default false
     * @type {Boolean}
    */
    preselectFirst: {
      type: Boolean,
      default: false
    },
    /**
     * Prevent autofocus
     * @default false
     * @type {Boolean}
    */
    preventAutofocus: {
      type: Boolean,
      default: false
    }
  },
  mounted () {
    /* istanbul ignore else */
    if (!this.multiple && this.max) {
      console.warn('[Vue-Multiselect warn]: Max prop should not be used when prop Multiple equals false.');
    }
    if (
      this.preselectFirst &&
      !this.internalValue.length &&
      this.options.length
    ) {
      this.select(this.filteredOptions[0]);
    }
  },
  computed: {
    internalValue () {
      return this.modelValue || this.modelValue === 0
        ? Array.isArray(this.modelValue) ? this.modelValue : [this.modelValue]
        : []
    },
    filteredOptions () {
      const search = this.search || '';
      const normalizedSearch = search.toLowerCase().trim();

      let options = this.options.concat();

      /* istanbul ignore else */
      if (this.internalSearch) {
        options = this.groupValues
          ? this.filterAndFlat(options, normalizedSearch, this.label)
          : filterOptions(options, normalizedSearch, this.label, this.customLabel);
      } else {
        options = this.groupValues ? flattenOptions(this.groupValues, this.groupLabel)(options) : options;
      }

      options = this.hideSelected
        ? options.filter(not(this.isSelected))
        : options;

      /* istanbul ignore else */
      if (this.taggable && normalizedSearch.length && !this.isExistingOption(normalizedSearch)) {
        if (this.tagPosition === 'bottom') {
          options.push({isTag: true, label: search});
        } else {
          options.unshift({isTag: true, label: search});
        }
      }

      return options.slice(0, this.optionsLimit)
    },
    valueKeys () {
      if (this.trackBy) {
        return this.internalValue.map((element) => element[this.trackBy])
      } else {
        return this.internalValue
      }
    },
    optionKeys () {
      const options = this.groupValues ? this.flatAndStrip(this.options) : this.options;
      return options.map((element) => this.customLabel(element, this.label).toString().toLowerCase())
    },
    currentOptionLabel () {
      return this.multiple
        ? this.searchable ? '' : this.placeholder
        : this.internalValue.length
          ? this.getOptionLabel(this.internalValue[0])
          : this.searchable ? '' : this.placeholder
    }
  },
  watch: {
    internalValue: {
      handler () {
      /* istanbul ignore else */
        if (this.resetAfter && this.internalValue.length) {
          this.search = '';
          this.$emit('update:modelValue', this.multiple ? [] : null);
        }
      },
      deep: true
    },
    search () {
      this.$emit('search-change', this.search);
    }
  },
  emits: ['open', 'search-change', 'close', 'select', 'update:modelValue', 'remove', 'tag'],
  methods: {
    /**
     * Returns the internalValue in a way it can be emited to the parent
     * @returns {Object||Array||String||Integer}
     */
    getValue () {
      return this.multiple
        ? this.internalValue
        : this.internalValue.length === 0
          ? null
          : this.internalValue[0]
    },
    /**
     * Filters and then flattens the options list
     * @param  {Array}
     * @return {Array} returns a filtered and flat options list
     */
    filterAndFlat (options, search, label) {
      return flow(
        filterGroups(search, label, this.groupValues, this.groupLabel, this.customLabel),
        flattenOptions(this.groupValues, this.groupLabel)
      )(options)
    },
    /**
     * Flattens and then strips the group labels from the options list
     * @param  {Array}
     * @return {Array} returns a flat options list without group labels
     */
    flatAndStrip (options) {
      return flow(
        flattenOptions(this.groupValues, this.groupLabel),
        stripGroups
      )(options)
    },
    /**
     * Updates the search value
     * @param  {String}
     */
    updateSearch (query) {
      this.search = query;
    },
    /**
     * Finds out if the given query is already present
     * in the available options
     * @param  {String}
     * @return {Boolean} returns true if element is available
     */
    isExistingOption (query) {
      return !this.options
        ? false
        : this.optionKeys.indexOf(query) > -1
    },
    /**
     * Finds out if the given element is already present
     * in the result value
     * @param  {Object||String||Integer} option passed element to check
     * @returns {Boolean} returns true if element is selected
     */
    isSelected (option) {
      const opt = this.trackBy
        ? option[this.trackBy]
        : option;
      return this.valueKeys.indexOf(opt) > -1
    },
    /**
     * Finds out if the given option is disabled
     * @param  {Object||String||Integer} option passed element to check
     * @returns {Boolean} returns true if element is disabled
     */
    isOptionDisabled (option) {
      return !!option.$isDisabled
    },
    /**
     * Returns empty string when options is null/undefined
     * Returns tag query if option is tag.
     * Returns the customLabel() results and casts it to string.
     *
     * @param  {Object||String||Integer} Passed option
     * @returns {Object||String}
     */
    getOptionLabel (option) {
      if (isEmpty(option)) return ''
      /* istanbul ignore else */
      if (option.isTag) return option.label
      /* istanbul ignore else */
      if (option.$isLabel) return option.$groupLabel

      const label = this.customLabel(option, this.label);
      /* istanbul ignore else */
      if (isEmpty(label)) return ''
      return label
    },
    /**
     * Add the given option to the list of selected options
     * or sets the option as the selected option.
     * If option is already selected -> remove it from the results.
     *
     * @param  {Object||String||Integer} option to select/deselect
     * @param  {Boolean} block removing
     */
    select (option, key) {
      /* istanbul ignore else */
      if (option.$isLabel && this.groupSelect) {
        this.selectGroup(option);
        return
      }
      if (this.blockKeys.indexOf(key) !== -1 ||
        this.disabled ||
        option.$isDisabled ||
        option.$isLabel
      ) return
      /* istanbul ignore else */
      if (this.max && this.multiple && this.internalValue.length === this.max) return
      /* istanbul ignore else */
      if (key === 'Tab' && !this.pointerDirty) return
      if (option.isTag) {
        this.$emit('tag', option.label, this.id);
        this.search = '';
        if (this.closeOnSelect && !this.multiple) this.deactivate();
      } else {
        const isSelected = this.isSelected(option);

        if (isSelected) {
          if (key !== 'Tab') this.removeElement(option);
          return
        }

        if (this.multiple) {
          this.$emit('update:modelValue', this.internalValue.concat([option]));
        } else {
          this.$emit('update:modelValue', option);
        }

        this.$emit('select', option, this.id);

        /* istanbul ignore else */
        if (this.clearOnSelect) this.search = '';
      }
      /* istanbul ignore else */
      if (this.closeOnSelect) this.deactivate();
    },
    /**
     * Add the given group options to the list of selected options
     * If all group optiona are already selected -> remove it from the results.
     *
     * @param  {Object||String||Integer} group to select/deselect
     */
    selectGroup (selectedGroup) {
      const group = this.options.find((option) => {
        return option[this.groupLabel] === selectedGroup.$groupLabel
      });

      if (!group) return

      if (this.wholeGroupSelected(group)) {
        this.$emit('remove', group[this.groupValues], this.id);

        const groupValues = this.trackBy ? group[this.groupValues].map(val => val[this.trackBy]) : group[this.groupValues];
        const newValue = this.internalValue.filter(
          option => groupValues.indexOf(this.trackBy ? option[this.trackBy] : option) === -1
        );

        this.$emit('update:modelValue', newValue);
      } else {
        let optionsToAdd = group[this.groupValues].filter(
          option => !(this.isOptionDisabled(option) || this.isSelected(option))
        );

        // if max is defined then just select options respecting max
        if (this.max) {
          optionsToAdd.splice(this.max - this.internalValue.length);
        }

        this.$emit('select', optionsToAdd, this.id);
        this.$emit(
          'update:modelValue',
          this.internalValue.concat(optionsToAdd)
        );
      }

      if (this.closeOnSelect) this.deactivate();
    },
    /**
     * Helper to identify if all values in a group are selected
     *
     * @param {Object} group to validated selected values against
     */
    wholeGroupSelected (group) {
      return group[this.groupValues].every((option) => this.isSelected(option) || this.isOptionDisabled(option)
      )
    },
    /**
     * Helper to identify if all values in a group are disabled
     *
     * @param {Object} group to check for disabled values
     */
    wholeGroupDisabled (group) {
      return group[this.groupValues].every(this.isOptionDisabled)
    },
    /**
     * Removes the given option from the selected options.
     * Additionally checks this.allowEmpty prop if option can be removed when
     * it is the last selected option.
     *
     * @param  {type} option description
     * @return {type}        description
     */
    removeElement (option, shouldClose = true) {
      /* istanbul ignore else */
      if (this.disabled) return
      /* istanbul ignore else */
      if (option.$isDisabled) return
      /* istanbul ignore else */
      if (!this.allowEmpty && this.internalValue.length <= 1) {
        this.deactivate();
        return
      }

      const index = typeof option === 'object'
        ? this.valueKeys.indexOf(option[this.trackBy])
        : this.valueKeys.indexOf(option);

      if (this.multiple) {
        const newValue = this.internalValue.slice(0, index).concat(this.internalValue.slice(index + 1));
        this.$emit('update:modelValue', newValue);
      } else {
        this.$emit('update:modelValue', null);
      }
      this.$emit('remove', option, this.id);

      /* istanbul ignore else */
      if (this.closeOnSelect && shouldClose) this.deactivate();
    },
    /**
     * Calls this.removeElement() with the last element
     * from this.internalValue (selected element Array)
     *
     * @fires this#removeElement
     */
    removeLastElement () {
      /* istanbul ignore else */
      if (this.blockKeys.indexOf('Delete') !== -1) return
      /* istanbul ignore else */
      if (this.search.length === 0 && Array.isArray(this.internalValue) && this.internalValue.length) {
        this.removeElement(this.internalValue[this.internalValue.length - 1], false);
      }
    },
    /**
     * Opens the multiselect’s dropdown.
     * Sets this.isOpen to TRUE
     */
    activate () {
      /* istanbul ignore else */
      if (this.isOpen || this.disabled) return

      this.adjustPosition();
      /* istanbul ignore else  */
      if (this.groupValues && this.pointer === 0 && this.filteredOptions.length) {
        this.pointer = 1;
      }

      this.isOpen = true;
      /* istanbul ignore else  */
      if (this.searchable) {
        if (!this.preserveSearch) this.search = '';
        if (!this.preventAutofocus) this.$nextTick(() => this.$refs.search && this.$refs.search.focus());
      } else if (!this.preventAutofocus) {
        if (typeof this.$el !== 'undefined') this.$el.focus();
      }
      this.$emit('open', this.id);
    },
    /**
     * Closes the multiselect’s dropdown.
     * Sets this.isOpen to FALSE
     */
    deactivate () {
      /* istanbul ignore else */
      if (!this.isOpen) return

      this.isOpen = false;
      /* istanbul ignore else  */
      if (this.searchable) {
        if (this.$refs.search !== null && typeof this.$refs.search !== 'undefined') this.$refs.search.blur();
      } else {
        if (typeof this.$el !== 'undefined') this.$el.blur();
      }
      if (!this.preserveSearch) this.search = '';
      this.$emit('close', this.getValue(), this.id);
    },
    /**
     * Call this.activate() or this.deactivate()
     * depending on this.isOpen value.
     *
     * @fires this#activate || this#deactivate
     * @property {Boolean} isOpen indicates if dropdown is open
     */
    toggle () {
      this.isOpen
        ? this.deactivate()
        : this.activate();
    },
    /**
     * Updates the hasEnoughSpace variable used for
     * detecting where to expand the dropdown
     */
    adjustPosition () {
      if (typeof window === 'undefined') return

      const spaceAbove = this.$el.getBoundingClientRect().top;
      const spaceBelow = window.innerHeight - this.$el.getBoundingClientRect().bottom;
      const hasEnoughSpaceBelow = spaceBelow > this.maxHeight;

      if (hasEnoughSpaceBelow || spaceBelow > spaceAbove || this.openDirection === 'below' || this.openDirection === 'bottom') {
        this.preferredOpenDirection = 'below';
        this.optimizedHeight = Math.min(spaceBelow - 40, this.maxHeight);
      } else {
        this.preferredOpenDirection = 'above';
        this.optimizedHeight = Math.min(spaceAbove - 40, this.maxHeight);
      }
    }
  }
};

var pointerMixin = {
  data () {
    return {
      pointer: 0,
      pointerDirty: false
    }
  },
  props: {
    /**
     * Enable/disable highlighting of the pointed value.
     * @type {Boolean}
     * @default true
     */
    showPointer: {
      type: Boolean,
      default: true
    },
    optionHeight: {
      type: Number,
      default: 40
    }
  },
  computed: {
    pointerPosition () {
      return this.pointer * this.optionHeight
    },
    visibleElements () {
      return this.optimizedHeight / this.optionHeight
    }
  },
  watch: {
    filteredOptions () {
      this.pointerAdjust();
    },
    isOpen () {
      this.pointerDirty = false;
    },
    pointer () {
      this.$refs.search && this.$refs.search.setAttribute('aria-activedescendant', this.id + '-' + this.pointer.toString());
    }
  },
  methods: {
    optionHighlight (index, option) {
      return {
        'multiselect__option--highlight': index === this.pointer && this.showPointer,
        'multiselect__option--selected': this.isSelected(option)
      }
    },
    groupHighlight (index, selectedGroup) {
      if (!this.groupSelect) {
        return [
          'multiselect__option--disabled',
          {'multiselect__option--group': selectedGroup.$isLabel}
        ]
      }

      const group = this.options.find((option) => {
        return option[this.groupLabel] === selectedGroup.$groupLabel
      });

      return group && !this.wholeGroupDisabled(group) ? [
        'multiselect__option--group',
        {'multiselect__option--highlight': index === this.pointer && this.showPointer},
        {'multiselect__option--group-selected': this.wholeGroupSelected(group)}
      ] : 'multiselect__option--disabled'
    },
    addPointerElement ({key} = 'Enter') {
      /* istanbul ignore else */
      if (this.filteredOptions.length > 0) {
        this.select(this.filteredOptions[this.pointer], key);
      }
      this.pointerReset();
    },
    pointerForward () {
      /* istanbul ignore else */
      if (this.pointer < this.filteredOptions.length - 1) {
        this.pointer++;
        /* istanbul ignore next */
        if (this.$refs.list.scrollTop <= this.pointerPosition - (this.visibleElements - 1) * this.optionHeight) {
          this.$refs.list.scrollTop = this.pointerPosition - (this.visibleElements - 1) * this.optionHeight;
        }
        /* istanbul ignore else */
        if (
          this.filteredOptions[this.pointer] &&
          this.filteredOptions[this.pointer].$isLabel &&
          !this.groupSelect
        ) this.pointerForward();
      }
      this.pointerDirty = true;
    },
    pointerBackward () {
      if (this.pointer > 0) {
        this.pointer--;
        /* istanbul ignore else */
        if (this.$refs.list.scrollTop >= this.pointerPosition) {
          this.$refs.list.scrollTop = this.pointerPosition;
        }
        /* istanbul ignore else */
        if (
          this.filteredOptions[this.pointer] &&
          this.filteredOptions[this.pointer].$isLabel &&
          !this.groupSelect
        ) this.pointerBackward();
      } else {
        /* istanbul ignore else */
        if (
          this.filteredOptions[this.pointer] &&
          this.filteredOptions[0].$isLabel &&
          !this.groupSelect
        ) this.pointerForward();
      }
      this.pointerDirty = true;
    },
    pointerReset () {
      /* istanbul ignore else */
      if (!this.closeOnSelect) return
      this.pointer = 0;
      /* istanbul ignore else */
      if (this.$refs.list) {
        this.$refs.list.scrollTop = 0;
      }
    },
    pointerAdjust () {
      /* istanbul ignore else */
      if (this.pointer >= this.filteredOptions.length - 1) {
        this.pointer = this.filteredOptions.length
          ? this.filteredOptions.length - 1
          : 0;
      }

      if (this.filteredOptions.length > 0 &&
        this.filteredOptions[this.pointer].$isLabel &&
        !this.groupSelect
      ) {
        this.pointerForward();
      }
    },
    pointerSet (index) {
      this.pointer = index;
      this.pointerDirty = true;
    }
  }
};

var script = {
  name: 'vue-multiselect',
  mixins: [multiselectMixin, pointerMixin],
  compatConfig: {
    MODE: 3,
    ATTR_ENUMERATED_COERCION: false
  },
  props: {
    /**
       * name attribute to match optional label element
       * @default ''
       * @type {String}
       */
    name: {
      type: String,
      default: ''
    },
    /**
       * Presets the selected options value.
       * @type {Object||Array||String||Integer}
       */
    modelValue: {
      type: null,
      default () {
        return []
      }
    },
    /**
       * String to show when pointing to an option
       * @default 'Press enter to select'
       * @type {String}
       */
    selectLabel: {
      type: String,
      default: 'Press enter to select'
    },
    /**
       * String to show when pointing to an option
       * @default 'Press enter to select'
       * @type {String}
       */
    selectGroupLabel: {
      type: String,
      default: 'Press enter to select group'
    },
    /**
       * String to show next to selected option
       * @default 'Selected'
       * @type {String}
       */
    selectedLabel: {
      type: String,
      default: 'Selected'
    },
    /**
       * String to show when pointing to an already selected option
       * @default 'Press enter to remove'
       * @type {String}
       */
    deselectLabel: {
      type: String,
      default: 'Press enter to remove'
    },
    /**
       * String to show when pointing to an already selected option
       * @default 'Press enter to remove'
       * @type {String}
       */
    deselectGroupLabel: {
      type: String,
      default: 'Press enter to deselect group'
    },
    /**
       * Decide whether to show pointer labels
       * @default true
       * @type {Boolean}
       */
    showLabels: {
      type: Boolean,
      default: true
    },
    /**
       * Limit the display of selected options. The rest will be hidden within the limitText string.
       * @default 99999
       * @type {Integer}
       */
    limit: {
      type: Number,
      default: 99999
    },
    /**
       * Sets maxHeight style value of the dropdown
       * @default 300
       * @type {Integer}
       */
    maxHeight: {
      type: Number,
      default: 300
    },
    /**
       * Function that process the message shown when selected
       * elements pass the defined limit.
       * @default 'and * more'
       * @param {Int} count Number of elements more than limit
       * @type {Function}
       */
    limitText: {
      type: Function,
      default: (count) => `and ${count} more`
    },
    /**
       * Set true to trigger the loading spinner.
       * @default False
       * @type {Boolean}
       */
    loading: {
      type: Boolean,
      default: false
    },
    /**
       * Disables the multiselect if true.
       * @default false
       * @type {Boolean}
       */
    disabled: {
      type: Boolean,
      default: false
    },
    /**
     * Enables search input's spellcheck if true.
     * @default false
     * @type {Boolean}
     */
    spellcheck: {
      type: Boolean,
      default: false
    },
    /**
       * Fixed opening direction
       * @default ''
       * @type {String}
       */
    openDirection: {
      type: String,
      default: ''
    },
    /**
       * Shows slot with message about empty options
       * @default true
       * @type {Boolean}
       */
    showNoOptions: {
      type: Boolean,
      default: true
    },
    showNoResults: {
      type: Boolean,
      default: true
    },
    tabindex: {
      type: Number,
      default: 0
    },
    required: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    hasOptionGroup () {
      return this.groupValues && this.groupLabel && this.groupSelect
    },
    isSingleLabelVisible () {
      return (
        (this.singleValue || this.singleValue === 0) &&
          (!this.isOpen || !this.searchable) &&
          !this.visibleValues.length
      )
    },
    isPlaceholderVisible () {
      return !this.internalValue.length && (!this.searchable || !this.isOpen)
    },
    visibleValues () {
      return this.multiple ? this.internalValue.slice(0, this.limit) : []
    },
    singleValue () {
      return this.internalValue[0]
    },
    deselectLabelText () {
      return this.showLabels ? this.deselectLabel : ''
    },
    deselectGroupLabelText () {
      return this.showLabels ? this.deselectGroupLabel : ''
    },
    selectLabelText () {
      return this.showLabels ? this.selectLabel : ''
    },
    selectGroupLabelText () {
      return this.showLabels ? this.selectGroupLabel : ''
    },
    selectedLabelText () {
      return this.showLabels ? this.selectedLabel : ''
    },
    inputStyle () {
      if (
        this.searchable ||
          (this.multiple && this.modelValue && this.modelValue.length)
      ) {
        // Hide input by setting the width to 0 allowing it to receive focus
        return this.isOpen
          ? {width: '100%'}
          : {width: '0', position: 'absolute', padding: '0'}
      }
      return ''
    },
    contentStyle () {
      return this.options.length
        ? {display: 'inline-block'}
        : {display: 'block'}
    },
    isAbove () {
      if (this.openDirection === 'above' || this.openDirection === 'top') {
        return true
      } else if (
        this.openDirection === 'below' ||
          this.openDirection === 'bottom'
      ) {
        return false
      } else {
        return this.preferredOpenDirection === 'above'
      }
    },
    showSearchInput () {
      return (
        this.searchable &&
          (this.hasSingleSelectedSlot &&
            (this.visibleSingleValue || this.visibleSingleValue === 0)
            ? this.isOpen
            : true)
      )
    }
  }
};

const vue_multiselect_esm_hoisted_1 = {
  ref: "tags",
  class: "multiselect__tags"
};
const vue_multiselect_esm_hoisted_2 = { class: "multiselect__tags-wrap" };
const vue_multiselect_esm_hoisted_3 = { class: "multiselect__spinner" };
const vue_multiselect_esm_hoisted_4 = { key: 0 };
const vue_multiselect_esm_hoisted_5 = { class: "multiselect__option" };
const vue_multiselect_esm_hoisted_6 = { class: "multiselect__option" };
const vue_multiselect_esm_hoisted_7 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createTextVNode"])("No elements found. Consider changing the search query.");
const vue_multiselect_esm_hoisted_8 = { class: "multiselect__option" };
const vue_multiselect_esm_hoisted_9 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createTextVNode"])("List is empty.");

function vue_multiselect_esm_render(_ctx, _cache, $props, $setup, $data, $options) {
  return (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("div", {
    tabindex: _ctx.searchable ? -1 : $props.tabindex,
    class: [{ 'multiselect--active': _ctx.isOpen, 'multiselect--disabled': $props.disabled, 'multiselect--above': $options.isAbove, 'multiselect--has-options-group': $options.hasOptionGroup }, "multiselect"],
    onFocus: _cache[14] || (_cache[14] = $event => (_ctx.activate())),
    onBlur: _cache[15] || (_cache[15] = $event => (_ctx.searchable ? false : _ctx.deactivate())),
    onKeydown: [
      _cache[16] || (_cache[16] = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withKeys"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withModifiers"])($event => (_ctx.pointerForward()), ["self","prevent"]), ["down"])),
      _cache[17] || (_cache[17] = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withKeys"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withModifiers"])($event => (_ctx.pointerBackward()), ["self","prevent"]), ["up"]))
    ],
    onKeypress: _cache[18] || (_cache[18] = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withKeys"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withModifiers"])($event => (_ctx.addPointerElement($event)), ["stop","self"]), ["enter","tab"])),
    onKeyup: _cache[19] || (_cache[19] = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withKeys"])($event => (_ctx.deactivate()), ["esc"])),
    role: "combobox",
    "aria-owns": 'listbox-'+_ctx.id
  }, [
    Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderSlot"])(_ctx.$slots, "caret", { toggle: _ctx.toggle }, () => [
      Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", {
        onMousedown: _cache[1] || (_cache[1] = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withModifiers"])($event => (_ctx.toggle()), ["prevent","stop"])),
        class: "multiselect__select"
      }, null, 32 /* HYDRATE_EVENTS */)
    ]),
    Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderSlot"])(_ctx.$slots, "clear", { search: _ctx.search }),
    Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", vue_multiselect_esm_hoisted_1, [
      Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderSlot"])(_ctx.$slots, "selection", {
        search: _ctx.search,
        remove: _ctx.removeElement,
        values: $options.visibleValues,
        isOpen: _ctx.isOpen
      }, () => [
        Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", vue_multiselect_esm_hoisted_2, [
          (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(true), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(external_commonjs_vue_commonjs2_vue_root_Vue_["Fragment"], null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderList"])($options.visibleValues, (option, index) => {
            return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderSlot"])(_ctx.$slots, "tag", {
              option: option,
              search: _ctx.search,
              remove: _ctx.removeElement
            }, () => [
              (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("span", {
                class: "multiselect__tag",
                key: index
              }, [
                Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("span", {
                  textContent: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.getOptionLabel(option))
                }, null, 8 /* PROPS */, ["textContent"]),
                Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("i", {
                  tabindex: "1",
                  onKeypress: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withKeys"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withModifiers"])($event => (_ctx.removeElement(option)), ["prevent"]), ["enter"]),
                  onMousedown: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withModifiers"])($event => (_ctx.removeElement(option)), ["prevent"]),
                  class: "multiselect__tag-icon"
                }, null, 40 /* PROPS, HYDRATE_EVENTS */, ["onKeypress", "onMousedown"])
              ]))
            ])
          }), 256 /* UNKEYED_FRAGMENT */))
        ], 512 /* NEED_PATCH */), [
          [external_commonjs_vue_commonjs2_vue_root_Vue_["vShow"], $options.visibleValues.length > 0]
        ]),
        (_ctx.internalValue && _ctx.internalValue.length > $props.limit)
          ? Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderSlot"])(_ctx.$slots, "limit", { key: 0 }, () => [
              Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("strong", {
                class: "multiselect__strong",
                textContent: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])($props.limitText(_ctx.internalValue.length - $props.limit))
              }, null, 8 /* PROPS */, ["textContent"])
            ])
          : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("v-if", true)
      ]),
      Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(external_commonjs_vue_commonjs2_vue_root_Vue_["Transition"], { name: "multiselect__loading" }, {
        default: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withCtx"])(() => [
          Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderSlot"])(_ctx.$slots, "loading", {}, () => [
            Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", vue_multiselect_esm_hoisted_3, null, 512 /* NEED_PATCH */), [
              [external_commonjs_vue_commonjs2_vue_root_Vue_["vShow"], $props.loading]
            ])
          ])
        ]),
        _: 3 /* FORWARDED */
      }),
      (_ctx.searchable)
        ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("input", {
            key: 0,
            ref: "search",
            name: $props.name,
            id: _ctx.id,
            type: "text",
            autocomplete: "off",
            spellcheck: $props.spellcheck,
            placeholder: _ctx.placeholder,
            required: $props.required,
            style: $options.inputStyle,
            value: _ctx.search,
            disabled: $props.disabled,
            tabindex: $props.tabindex,
            onInput: _cache[2] || (_cache[2] = $event => (_ctx.updateSearch($event.target.value))),
            onFocus: _cache[3] || (_cache[3] = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withModifiers"])($event => (_ctx.activate()), ["prevent"])),
            onBlur: _cache[4] || (_cache[4] = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withModifiers"])($event => (_ctx.deactivate()), ["prevent"])),
            onKeyup: _cache[5] || (_cache[5] = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withKeys"])($event => (_ctx.deactivate()), ["esc"])),
            onKeydown: [
              _cache[6] || (_cache[6] = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withKeys"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withModifiers"])($event => (_ctx.pointerForward()), ["prevent"]), ["down"])),
              _cache[7] || (_cache[7] = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withKeys"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withModifiers"])($event => (_ctx.pointerBackward()), ["prevent"]), ["up"])),
              _cache[9] || (_cache[9] = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withKeys"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withModifiers"])($event => (_ctx.removeLastElement()), ["stop"]), ["delete"]))
            ],
            onKeypress: _cache[8] || (_cache[8] = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withKeys"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withModifiers"])($event => (_ctx.addPointerElement($event)), ["prevent","stop","self"]), ["enter"])),
            class: "multiselect__input",
            "aria-controls": 'listbox-'+_ctx.id
          }, null, 44 /* STYLE, PROPS, HYDRATE_EVENTS */, ["name", "id", "spellcheck", "placeholder", "required", "value", "disabled", "tabindex", "aria-controls"]))
        : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("v-if", true),
      ($options.isSingleLabelVisible)
        ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("span", {
            key: 1,
            class: "multiselect__single",
            onMousedown: _cache[10] || (_cache[10] = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withModifiers"])((...args) => (_ctx.toggle && _ctx.toggle(...args)), ["prevent"]))
          }, [
            Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderSlot"])(_ctx.$slots, "singleLabel", { option: $options.singleValue }, () => [
              Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createTextVNode"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.currentOptionLabel), 1 /* TEXT */)
            ])
          ], 32 /* HYDRATE_EVENTS */))
        : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("v-if", true),
      ($options.isPlaceholderVisible)
        ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("span", {
            key: 2,
            class: "multiselect__placeholder",
            onMousedown: _cache[11] || (_cache[11] = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withModifiers"])((...args) => (_ctx.toggle && _ctx.toggle(...args)), ["prevent"]))
          }, [
            Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderSlot"])(_ctx.$slots, "placeholder", {}, () => [
              Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createTextVNode"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.placeholder), 1 /* TEXT */)
            ])
          ], 32 /* HYDRATE_EVENTS */))
        : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("v-if", true)
    ], 512 /* NEED_PATCH */),
    Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(external_commonjs_vue_commonjs2_vue_root_Vue_["Transition"], { name: "multiselect" }, {
      default: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withCtx"])(() => [
        Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", {
          class: "multiselect__content-wrapper",
          onFocus: _cache[12] || (_cache[12] = (...args) => (_ctx.activate && _ctx.activate(...args))),
          tabindex: "-1",
          onMousedown: _cache[13] || (_cache[13] = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withModifiers"])(() => {}, ["prevent"])),
          style: { maxHeight: _ctx.optimizedHeight + 'px' },
          ref: "list"
        }, [
          Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("ul", {
            class: "multiselect__content",
            style: $options.contentStyle,
            role: "listbox",
            id: 'listbox-'+_ctx.id,
            "aria-multiselectable": _ctx.multiple
          }, [
            Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderSlot"])(_ctx.$slots, "beforeList"),
            (_ctx.multiple && _ctx.max === _ctx.internalValue.length)
              ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("li", vue_multiselect_esm_hoisted_4, [
                  Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("span", vue_multiselect_esm_hoisted_5, [
                    Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderSlot"])(_ctx.$slots, "maxElements", {}, () => [
                      Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createTextVNode"])("Maximum of " + Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.max) + " options selected. First remove a selected option to select another.", 1 /* TEXT */)
                    ])
                  ])
                ]))
              : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("v-if", true),
            (!_ctx.max || _ctx.internalValue.length < _ctx.max)
              ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(true), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(external_commonjs_vue_commonjs2_vue_root_Vue_["Fragment"], { key: 1 }, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderList"])(_ctx.filteredOptions, (option, index) => {
                  return (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("li", {
                    class: "multiselect__element",
                    key: index,
                    "aria-selected": _ctx.isSelected(option),
                    id: _ctx.id + '-' + index,
                    role: !(option && (option.$isLabel || option.$isDisabled)) ? 'option' : null
                  }, [
                    (!(option && (option.$isLabel || option.$isDisabled)))
                      ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("span", {
                          key: 0,
                          class: [_ctx.optionHighlight(index, option), "multiselect__option"],
                          onClick: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withModifiers"])($event => (_ctx.select(option)), ["stop"]),
                          onMouseenter: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withModifiers"])($event => (_ctx.pointerSet(index)), ["self"]),
                          "data-select": option && option.isTag ? _ctx.tagPlaceholder : $options.selectLabelText,
                          "data-selected": $options.selectedLabelText,
                          "data-deselect": $options.deselectLabelText
                        }, [
                          Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderSlot"])(_ctx.$slots, "option", {
                            option: option,
                            search: _ctx.search,
                            index: index
                          }, () => [
                            Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("span", null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.getOptionLabel(option)), 1 /* TEXT */)
                          ])
                        ], 42 /* CLASS, PROPS, HYDRATE_EVENTS */, ["onClick", "onMouseenter", "data-select", "data-selected", "data-deselect"]))
                      : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("v-if", true),
                    (option && (option.$isLabel || option.$isDisabled))
                      ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("span", {
                          key: 1,
                          "data-select": _ctx.groupSelect && $options.selectGroupLabelText,
                          "data-deselect": _ctx.groupSelect && $options.deselectGroupLabelText,
                          class: [_ctx.groupHighlight(index, option), "multiselect__option"],
                          onMouseenter: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withModifiers"])($event => (_ctx.groupSelect && _ctx.pointerSet(index)), ["self"]),
                          onMousedown: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withModifiers"])($event => (_ctx.selectGroup(option)), ["prevent"])
                        }, [
                          Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderSlot"])(_ctx.$slots, "option", {
                            option: option,
                            search: _ctx.search,
                            index: index
                          }, () => [
                            Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("span", null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.getOptionLabel(option)), 1 /* TEXT */)
                          ])
                        ], 42 /* CLASS, PROPS, HYDRATE_EVENTS */, ["data-select", "data-deselect", "onMouseenter", "onMousedown"]))
                      : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("v-if", true)
                  ], 8 /* PROPS */, ["aria-selected", "id", "role"]))
                }), 128 /* KEYED_FRAGMENT */))
              : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("v-if", true),
            Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("li", null, [
              Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("span", vue_multiselect_esm_hoisted_6, [
                Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderSlot"])(_ctx.$slots, "noResult", { search: _ctx.search }, () => [
                  vue_multiselect_esm_hoisted_7
                ])
              ])
            ], 512 /* NEED_PATCH */), [
              [external_commonjs_vue_commonjs2_vue_root_Vue_["vShow"], $props.showNoResults && (_ctx.filteredOptions.length === 0 && _ctx.search && !$props.loading)]
            ]),
            Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("li", null, [
              Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("span", vue_multiselect_esm_hoisted_8, [
                Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderSlot"])(_ctx.$slots, "noOptions", {}, () => [
                  vue_multiselect_esm_hoisted_9
                ])
              ])
            ], 512 /* NEED_PATCH */), [
              [external_commonjs_vue_commonjs2_vue_root_Vue_["vShow"], $props.showNoOptions && ((_ctx.options.length === 0 || ($options.hasOptionGroup === true && _ctx.filteredOptions.length === 0)) && !_ctx.search && !$props.loading)]
            ]),
            Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderSlot"])(_ctx.$slots, "afterList")
          ], 12 /* STYLE, PROPS */, ["id", "aria-multiselectable"])
        ], 36 /* STYLE, HYDRATE_EVENTS */), [
          [external_commonjs_vue_commonjs2_vue_root_Vue_["vShow"], _ctx.isOpen]
        ])
      ]),
      _: 3 /* FORWARDED */
    })
  ], 42 /* CLASS, PROPS, HYDRATE_EVENTS */, ["tabindex", "aria-owns"]))
}

script.render = vue_multiselect_esm_render;

/* harmony default export */ var vue_multiselect_esm = (script);


// CONCATENATED MODULE: ./node_modules/@vue/cli-plugin-babel/node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/@vue/cli-plugin-babel/node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--0-1!./plugins/GroupPermissions/vue/src/GroupPermissions/CreateGroup.vue?vue&type=template&id=b15c3638

var CreateGroupvue_type_template_id_b15c3638_hoisted_1 = {
  class: "card"
};
var CreateGroupvue_type_template_id_b15c3638_hoisted_2 = {
  class: "card-content",
  style: {
    "width": "600px"
  }
};
var CreateGroupvue_type_template_id_b15c3638_hoisted_3 = ["value"];
var CreateGroupvue_type_template_id_b15c3638_hoisted_4 = {
  id: "ajaxErrorCreateGroup",
  ref: "errorContainer"
};
function CreateGroupvue_type_template_id_b15c3638_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_ActivityIndicator = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("ActivityIndicator");

  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", CreateGroupvue_type_template_id_b15c3638_hoisted_1, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", CreateGroupvue_type_template_id_b15c3638_hoisted_2, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("h2", null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('GroupPermissions_CreateNewGroup')), 1), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("input", {
    type: "text",
    "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
      return _ctx.groupName = $event;
    })
  }, null, 512), [[external_commonjs_vue_commonjs2_vue_root_Vue_["vModelText"], _ctx.groupName]]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("input", {
    type: "button",
    value: _ctx.translate('GroupPermissions_CreateNewGroupButton'),
    style: {
      "padding": "8px"
    },
    onClick: _cache[1] || (_cache[1] = function ($event) {
      return _ctx.createGroup(_ctx.groupName);
    })
  }, null, 8, CreateGroupvue_type_template_id_b15c3638_hoisted_3)]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", CreateGroupvue_type_template_id_b15c3638_hoisted_4, null, 512), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_ActivityIndicator, {
    loading: _ctx.isCreatingGroup,
    style: {
      "padding-top": "10px"
    }
  }, null, 8, ["loading"])])])]);
}
// CONCATENATED MODULE: ./plugins/GroupPermissions/vue/src/GroupPermissions/CreateGroup.vue?vue&type=template&id=b15c3638

// CONCATENATED MODULE: ./node_modules/@vue/cli-plugin-typescript/node_modules/cache-loader/dist/cjs.js??ref--14-0!./node_modules/babel-loader/lib!./node_modules/@vue/cli-plugin-typescript/node_modules/ts-loader??ref--14-2!./node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--0-1!./plugins/GroupPermissions/vue/src/GroupPermissions/CreateGroup.vue?vue&type=script&lang=ts


/* harmony default export */ var CreateGroupvue_type_script_lang_ts = (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["defineComponent"])({
  components: {
    ActivityIndicator: external_CoreHome_["ActivityIndicator"]
  },
  data: function data() {
    return {
      groupName: '',
      isCreatingGroup: false
    };
  },
  emits: ['group-created'],
  methods: {
    createGroup: function createGroup(groupName) {
      var _this = this;

      this.isCreatingGroup = true;
      external_CoreHome_["AjaxHelper"].post({
        module: 'API',
        format: 'json',
        method: 'GroupPermissions.createGroup'
      }, {
        groupName: groupName
      }, {
        errorElement: '#ajaxErrorCreateGroup'
      }).then(function (response) {
        _this.$emit('group-created', {
          idGroup: response,
          name: groupName
        });
      }).finally(function () {
        _this.isCreatingGroup = false;
      });
    }
  }
}));
// CONCATENATED MODULE: ./plugins/GroupPermissions/vue/src/GroupPermissions/CreateGroup.vue?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./plugins/GroupPermissions/vue/src/GroupPermissions/CreateGroup.vue



CreateGroupvue_type_script_lang_ts.render = CreateGroupvue_type_template_id_b15c3638_render

/* harmony default export */ var CreateGroup = (CreateGroupvue_type_script_lang_ts);
// CONCATENATED MODULE: ./node_modules/@vue/cli-plugin-babel/node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/@vue/cli-plugin-babel/node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--0-1!./plugins/GroupPermissions/vue/src/GroupPermissions/ManageGroup.vue?vue&type=template&id=505f04e7

var ManageGroupvue_type_template_id_505f04e7_hoisted_1 = {
  style: {
    "margin-top": "70px"
  }
};
var ManageGroupvue_type_template_id_505f04e7_hoisted_2 = ["value"];
var ManageGroupvue_type_template_id_505f04e7_hoisted_3 = {
  class: "ui-confirm",
  id: "confirmRenameGroup"
};
var ManageGroupvue_type_template_id_505f04e7_hoisted_4 = ["value"];
var ManageGroupvue_type_template_id_505f04e7_hoisted_5 = ["value"];
var ManageGroupvue_type_template_id_505f04e7_hoisted_6 = {
  id: "ajaxErrorRenameGroup",
  ref: "errorContainer"
};
var ManageGroupvue_type_template_id_505f04e7_hoisted_7 = {
  style: {
    "margin-top": "70px"
  }
};
var ManageGroupvue_type_template_id_505f04e7_hoisted_8 = ["value"];
var ManageGroupvue_type_template_id_505f04e7_hoisted_9 = {
  class: "ui-confirm",
  id: "confirmDeleteGroup"
};
var ManageGroupvue_type_template_id_505f04e7_hoisted_10 = ["value"];
var ManageGroupvue_type_template_id_505f04e7_hoisted_11 = ["value"];
var ManageGroupvue_type_template_id_505f04e7_hoisted_12 = {
  id: "ajaxErrorDeleteGroup",
  ref: "errorContainer"
};
function ManageGroupvue_type_template_id_505f04e7_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _this = this;

  var _component_ManageGroupMembers = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("ManageGroupMembers");

  var _component_ActivityIndicator = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("ActivityIndicator");

  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])(external_commonjs_vue_commonjs2_vue_root_Vue_["Fragment"], null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_ManageGroupMembers, {
    group: _ctx.group
  }, null, 8, ["group"]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", ManageGroupvue_type_template_id_505f04e7_hoisted_1, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("h3", null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('GroupPermissions_RenameGroup')), 1), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("input", {
    type: "text",
    "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
      return _this.newGroupName = $event;
    })
  }, null, 512), [[external_commonjs_vue_commonjs2_vue_root_Vue_["vModelText"], this.newGroupName]]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("input", {
    type: "button",
    value: _ctx.translate('GroupPermissions_RenameGroupButton'),
    style: {
      "padding": "8px"
    },
    onClick: _cache[1] || (_cache[1] = function ($event) {
      return _ctx.confirmRenameGroup();
    })
  }, null, 8, ManageGroupvue_type_template_id_505f04e7_hoisted_2)])]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", ManageGroupvue_type_template_id_505f04e7_hoisted_3, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("h2", null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.confirmRenameGroupText), 1), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("input", {
    role: "yes",
    type: "button",
    value: _ctx.translate('General_Yes')
  }, null, 8, ManageGroupvue_type_template_id_505f04e7_hoisted_4), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("input", {
    role: "no",
    type: "button",
    value: _ctx.translate('General_No')
  }, null, 8, ManageGroupvue_type_template_id_505f04e7_hoisted_5)]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", ManageGroupvue_type_template_id_505f04e7_hoisted_6, null, 512), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_ActivityIndicator, {
    loading: _ctx.isRenaming,
    style: {
      "padding-top": "10px"
    }
  }, null, 8, ["loading"]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", ManageGroupvue_type_template_id_505f04e7_hoisted_7, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("h3", null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('GroupPermissions_DeleteGroup')), 1), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("input", {
    type: "button",
    value: _ctx.translate('GroupPermissions_DeleteGroupButton'),
    style: {
      "padding": "8px"
    },
    onClick: _cache[2] || (_cache[2] = function ($event) {
      return _ctx.confirmDeleteGroup();
    })
  }, null, 8, ManageGroupvue_type_template_id_505f04e7_hoisted_8)]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", ManageGroupvue_type_template_id_505f04e7_hoisted_9, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("h2", null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.confirmDeleteGroupText), 1), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("input", {
    role: "yes",
    type: "button",
    value: _ctx.translate('General_Yes')
  }, null, 8, ManageGroupvue_type_template_id_505f04e7_hoisted_10), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("input", {
    role: "no",
    type: "button",
    value: _ctx.translate('General_No')
  }, null, 8, ManageGroupvue_type_template_id_505f04e7_hoisted_11)]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", ManageGroupvue_type_template_id_505f04e7_hoisted_12, null, 512), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_ActivityIndicator, {
    loading: _ctx.isDeleting,
    style: {
      "padding-top": "10px"
    }
  }, null, 8, ["loading"])], 64);
}
// CONCATENATED MODULE: ./plugins/GroupPermissions/vue/src/GroupPermissions/ManageGroup.vue?vue&type=template&id=505f04e7

// CONCATENATED MODULE: ./node_modules/@vue/cli-plugin-babel/node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/@vue/cli-plugin-babel/node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--0-1!./plugins/GroupPermissions/vue/src/GroupPermissions/ManageGroupMembers.vue?vue&type=template&id=6d9a0ad6

var ManageGroupMembersvue_type_template_id_6d9a0ad6_hoisted_1 = {
  class: "entityContainer",
  style: {
    "width": "600px",
    "margin-top": "16px"
  }
};
var ManageGroupMembersvue_type_template_id_6d9a0ad6_hoisted_2 = {
  class: "entityTable dataTable",
  style: {
    "display": "inline-table",
    "width": "550px"
  }
};
var ManageGroupMembersvue_type_template_id_6d9a0ad6_hoisted_3 = {
  class: "login"
};
var ManageGroupMembersvue_type_template_id_6d9a0ad6_hoisted_4 = {
  class: "text-center"
};
var ManageGroupMembersvue_type_template_id_6d9a0ad6_hoisted_5 = ["onClick", "title"];

var ManageGroupMembersvue_type_template_id_6d9a0ad6_hoisted_6 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", {
  class: "icon-delete"
}, null, -1);

var ManageGroupMembersvue_type_template_id_6d9a0ad6_hoisted_7 = [ManageGroupMembersvue_type_template_id_6d9a0ad6_hoisted_6];
var ManageGroupMembersvue_type_template_id_6d9a0ad6_hoisted_8 = {
  id: "ajaxErrorLoadMembers",
  ref: "errorContainer"
};
var ManageGroupMembersvue_type_template_id_6d9a0ad6_hoisted_9 = {
  style: {
    "margin-top": "70px"
  }
};
var ManageGroupMembersvue_type_template_id_6d9a0ad6_hoisted_10 = {
  class: "groupPermissionsGroupAddMemberWrapper"
};
var ManageGroupMembersvue_type_template_id_6d9a0ad6_hoisted_11 = ["value"];
var ManageGroupMembersvue_type_template_id_6d9a0ad6_hoisted_12 = {
  id: "ajaxErrorLoadLogins",
  ref: "errorContainer"
};
var ManageGroupMembersvue_type_template_id_6d9a0ad6_hoisted_13 = {
  id: "ajaxErrorAddMember",
  ref: "errorContainer"
};
var ManageGroupMembersvue_type_template_id_6d9a0ad6_hoisted_14 = {
  class: "ui-confirm",
  id: "confirmRemoveMember",
  ref: "confirmRemoveMember"
};
var _hoisted_15 = ["value"];
var _hoisted_16 = ["value"];
function ManageGroupMembersvue_type_template_id_6d9a0ad6_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_ActivityIndicator = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("ActivityIndicator");

  var _component_multiselect = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("multiselect");

  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])(external_commonjs_vue_commonjs2_vue_root_Vue_["Fragment"], null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("h3", null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('GroupPermissions_ManageGroupMembers')), 1), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", ManageGroupMembersvue_type_template_id_6d9a0ad6_hoisted_1, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("table", ManageGroupMembersvue_type_template_id_6d9a0ad6_hoisted_2, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("thead", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("tr", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("th", null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('General_Username')), 1), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("th", null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('GroupPermissions_RemoveFromGroup')), 1)])]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("tbody", null, [(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(true), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])(external_commonjs_vue_commonjs2_vue_root_Vue_["Fragment"], null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderList"])(_ctx.members, function (login) {
    return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("tr", {
      key: login
    }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("td", ManageGroupMembersvue_type_template_id_6d9a0ad6_hoisted_3, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(login), 1), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("td", ManageGroupMembersvue_type_template_id_6d9a0ad6_hoisted_4, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("button", {
      class: "groupPermissionsRemoveMember btn btn-flat",
      onClick: function onClick($event) {
        return _ctx.confirmRemoveMember(login);
      },
      title: _ctx.translate('GroupPermissions_RemoveFromGroup')
    }, ManageGroupMembersvue_type_template_id_6d9a0ad6_hoisted_7, 8, ManageGroupMembersvue_type_template_id_6d9a0ad6_hoisted_5)])]);
  }), 128))])])]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", ManageGroupMembersvue_type_template_id_6d9a0ad6_hoisted_8, null, 512), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_ActivityIndicator, {
    loading: _ctx.isLoadingMembers,
    style: {
      "padding-top": "10px"
    }
  }, null, 8, ["loading"]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", ManageGroupMembersvue_type_template_id_6d9a0ad6_hoisted_9, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("h3", null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('GroupPermissions_AddUserToGroup')), 1), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", ManageGroupMembersvue_type_template_id_6d9a0ad6_hoisted_10, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_multiselect, {
    options: _ctx.logins,
    placeholder: _ctx.translate('GroupPermissions_SelectNewUser'),
    modelValue: _ctx.selectedLoginToAdd,
    "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
      return _ctx.selectedLoginToAdd = $event;
    })
  }, null, 8, ["options", "placeholder", "modelValue"]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("input", {
    type: "button",
    onClick: _cache[1] || (_cache[1] = function ($event) {
      return _ctx.addMember();
    }),
    value: _ctx.translate('GroupPermissions_AddUserToGroupButton'),
    style: {
      "padding": "8px",
      "margin-top": "8px"
    }
  }, null, 8, ManageGroupMembersvue_type_template_id_6d9a0ad6_hoisted_11)])]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", ManageGroupMembersvue_type_template_id_6d9a0ad6_hoisted_12, null, 512), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", ManageGroupMembersvue_type_template_id_6d9a0ad6_hoisted_13, null, 512), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_ActivityIndicator, {
    loading: _ctx.isLoadingLogins || _ctx.isAddingMember,
    style: {
      "padding-top": "10px"
    }
  }, null, 8, ["loading"]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", ManageGroupMembersvue_type_template_id_6d9a0ad6_hoisted_14, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("h2", null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.confirmRemoveMemberText), 1), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("input", {
    role: "yes",
    type: "button",
    value: _ctx.translate('General_Yes')
  }, null, 8, _hoisted_15), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("input", {
    role: "no",
    type: "button",
    value: _ctx.translate('General_No')
  }, null, 8, _hoisted_16)], 512)], 64);
}
// CONCATENATED MODULE: ./plugins/GroupPermissions/vue/src/GroupPermissions/ManageGroupMembers.vue?vue&type=template&id=6d9a0ad6

// CONCATENATED MODULE: ./node_modules/@vue/cli-plugin-typescript/node_modules/cache-loader/dist/cjs.js??ref--14-0!./node_modules/babel-loader/lib!./node_modules/@vue/cli-plugin-typescript/node_modules/ts-loader??ref--14-2!./node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--0-1!./plugins/GroupPermissions/vue/src/GroupPermissions/ManageGroupMembers.vue?vue&type=script&lang=ts



/* harmony default export */ var ManageGroupMembersvue_type_script_lang_ts = (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["defineComponent"])({
  components: {
    ActivityIndicator: external_CoreHome_["ActivityIndicator"],
    Multiselect: vue_multiselect_esm
  },
  data: function data() {
    return {
      members: [],
      logins: [],
      selectedLoginToAdd: '',
      confirmRemoveMemberText: '',
      isLoadingMembers: false,
      isLoadingLogins: false,
      isAddingMember: false,
      isRemovingMember: false
    };
  },
  props: {
    group: {
      type: Object,
      required: true
    }
  },
  mounted: function mounted() {
    this.loadGroupMembers();
    this.loadLogins();
  },
  methods: {
    loadGroupMembers: function loadGroupMembers() {
      var _this = this;

      this.isLoadingMembers = true;
      external_CoreHome_["AjaxHelper"].post({
        module: 'API',
        format: 'json',
        method: 'GroupPermissions.getMembersOfGroup'
      }, {
        idGroup: this.group.idGroup
      }, {
        errorElement: '#ajaxErrorLoadMembers'
      }).then(function (response) {
        _this.members = response.reduce(function (acc, member) {
          acc.push(member.login);
          return acc;
        }, []);

        _this.members.sort();
      }).finally(function () {
        _this.isLoadingMembers = false;
      });
    },
    loadLogins: function loadLogins() {
      var _this2 = this;

      this.isLoadingLogins = true;
      external_CoreHome_["AjaxHelper"].post({
        module: 'API',
        format: 'json',
        method: 'UsersManager.getUsersLogin'
      }, {
        filter_limit: -1
      }, {
        errorElement: '#ajaxErrorLoadLogins'
      }).then(function (response) {
        _this2.logins = response;

        _this2.logins.sort();
      }).finally(function () {
        _this2.isLoadingLogins = false;
      });
    },
    addMember: function addMember() {
      var _this3 = this;

      this.isAddingMember = true;
      var loginToAdd = this.selectedLoginToAdd;
      external_CoreHome_["AjaxHelper"].post({
        module: 'API',
        format: 'json',
        method: 'GroupPermissions.addUserToGroup'
      }, {
        idGroup: this.group.idGroup,
        login: loginToAdd
      }, {
        errorElement: '#ajaxErrorAddMember'
      }).then(function () {
        _this3.members.push(loginToAdd);

        _this3.members.sort();
      }).finally(function () {
        _this3.isAddingMember = false;
      });
    },
    confirmRemoveMember: function confirmRemoveMember(member) {
      var _this4 = this;

      this.confirmRemoveMemberText = Object(external_CoreHome_["translate"])('GroupPermissions_RemoveFromGroupConfirm', member, this.group.name);
      external_CoreHome_["Matomo"].helper.modalConfirm('#confirmRemoveMember', {
        yes: function yes() {
          return _this4.removeMember(member);
        }
      });
    },
    removeMember: function removeMember(member) {
      var _this5 = this;

      this.isRemovingMember = true;
      external_CoreHome_["AjaxHelper"].post({
        module: 'API',
        format: 'json',
        method: 'GroupPermissions.removeUserFromGroup'
      }, {
        idGroup: this.group.idGroup,
        login: member
      }, {
        errorElement: '#ajaxErrorManageGroupMembers'
      }).then(function () {
        _this5.members = _this5.members.filter(function (login) {
          return login !== member;
        });
      }).finally(function () {
        _this5.isRemovingMember = false;
      });
    }
  },
  watch: {
    group: function group() {
      this.loadGroupMembers();
    }
  }
}));
// CONCATENATED MODULE: ./plugins/GroupPermissions/vue/src/GroupPermissions/ManageGroupMembers.vue?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./plugins/GroupPermissions/vue/src/GroupPermissions/ManageGroupMembers.vue



ManageGroupMembersvue_type_script_lang_ts.render = ManageGroupMembersvue_type_template_id_6d9a0ad6_render

/* harmony default export */ var ManageGroupMembers = (ManageGroupMembersvue_type_script_lang_ts);
// CONCATENATED MODULE: ./node_modules/@vue/cli-plugin-typescript/node_modules/cache-loader/dist/cjs.js??ref--14-0!./node_modules/babel-loader/lib!./node_modules/@vue/cli-plugin-typescript/node_modules/ts-loader??ref--14-2!./node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--0-1!./plugins/GroupPermissions/vue/src/GroupPermissions/ManageGroup.vue?vue&type=script&lang=ts



/* harmony default export */ var ManageGroupvue_type_script_lang_ts = (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["defineComponent"])({
  components: {
    ActivityIndicator: external_CoreHome_["ActivityIndicator"],
    ManageGroupMembers: ManageGroupMembers
  },
  data: function data() {
    return {
      newGroupName: '',
      confirmRenameGroupText: '',
      confirmDeleteGroupText: '',
      isRenaming: false,
      isDeleting: false
    };
  },
  props: {
    group: {
      type: Object,
      required: true
    }
  },
  emits: ['group-renamed', 'group-deleted'],
  mounted: function mounted() {
    this.newGroupName = this.group.name;
  },
  methods: {
    confirmRenameGroup: function confirmRenameGroup() {
      var _this = this;

      this.confirmRenameGroupText = Object(external_CoreHome_["translate"])('GroupPermissions_RenameGroupConfirm', this.group.name, this.newGroupName);
      external_CoreHome_["Matomo"].helper.modalConfirm('#confirmRenameGroup', {
        yes: function yes() {
          return _this.renameGroup();
        }
      });
    },
    renameGroup: function renameGroup() {
      var _this2 = this;

      this.isRenaming = true;
      external_CoreHome_["AjaxHelper"].post({
        module: 'API',
        format: 'json',
        method: 'GroupPermissions.renameGroup'
      }, {
        idGroup: this.group.idGroup,
        newName: this.newGroupName
      }, {
        errorElement: '#ajaxErrorRenameGroup'
      }).then(function () {
        _this2.$emit('group-renamed', _this2.group);
      }).finally(function () {
        _this2.isRenaming = false;
      });
    },
    confirmDeleteGroup: function confirmDeleteGroup() {
      var _this3 = this;

      this.confirmDeleteGroupText = Object(external_CoreHome_["translate"])('GroupPermissions_DeleteGroupConfirm', this.group.name);
      external_CoreHome_["Matomo"].helper.modalConfirm('#confirmDeleteGroup', {
        yes: function yes() {
          return _this3.deleteGroup();
        }
      });
    },
    deleteGroup: function deleteGroup() {
      var _this4 = this;

      this.isDeleting = true;
      external_CoreHome_["AjaxHelper"].post({
        module: 'API',
        format: 'json',
        method: 'GroupPermissions.deleteGroup'
      }, {
        idGroup: this.group.idGroup
      }, {
        errorElement: '#ajaxErrorDeleteGroup'
      }).then(function () {
        _this4.$emit('group-deleted', _this4.group);
      }).finally(function () {
        _this4.isDeleting = false;
      });
    }
  },
  watch: {
    group: function group() {
      this.newGroupName = this.group.name;
    }
  }
}));
// CONCATENATED MODULE: ./plugins/GroupPermissions/vue/src/GroupPermissions/ManageGroup.vue?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./plugins/GroupPermissions/vue/src/GroupPermissions/ManageGroup.vue



ManageGroupvue_type_script_lang_ts.render = ManageGroupvue_type_template_id_505f04e7_render

/* harmony default export */ var ManageGroup = (ManageGroupvue_type_script_lang_ts);
// CONCATENATED MODULE: ./node_modules/@vue/cli-plugin-typescript/node_modules/cache-loader/dist/cjs.js??ref--14-0!./node_modules/babel-loader/lib!./node_modules/@vue/cli-plugin-typescript/node_modules/ts-loader??ref--14-2!./node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--0-1!./plugins/GroupPermissions/vue/src/GroupPermissions/TabManageGroups.vue?vue&type=script&lang=ts





/* harmony default export */ var TabManageGroupsvue_type_script_lang_ts = (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["defineComponent"])({
  components: {
    ActivityIndicator: external_CoreHome_["ActivityIndicator"],
    Multiselect: vue_multiselect_esm,
    CreateGroup: CreateGroup,
    ManageGroup: ManageGroup
  },
  data: function data() {
    return {
      groups: [],
      selectedGroup: undefined,
      isLoadingGroups: false,
      isLoadingDefaultGroup: false
    };
  },
  mounted: function mounted() {
    this.loadGroupList();
    this.loadDefaultGroup();
  },
  methods: {
    loadGroupList: function loadGroupList() {
      var _this = this;

      this.isLoadingGroups = true;
      external_CoreHome_["AjaxHelper"].post({
        module: 'API',
        format: 'json',
        method: 'GroupPermissions.getAllGroups'
      }, {}, {
        errorElement: '#ajaxErrorManageGroups'
      }).then(function (response) {
        _this.groups = response;
      }).finally(function () {
        _this.isLoadingGroups = false;
      });
    },
    loadDefaultGroup: function loadDefaultGroup() {
      var _this2 = this;

      this.isLoadingDefaultGroup = true;
      var idGroup = external_CoreHome_["MatomoUrl"].getSearchParam('idGroup');

      if (idGroup) {
        external_CoreHome_["AjaxHelper"].post({
          module: 'API',
          format: 'json',
          method: 'GroupPermissions.getGroupWithId'
        }, {
          idGroup: idGroup
        }, {
          errorElement: '#ajaxErrorManageGroups'
        }).then(function (response) {
          _this2.selectedGroup = {
            idGroup: response.idGroup,
            name: response.name
          };
        }).finally(function () {
          _this2.isLoadingDefaultGroup = false;
        });
      }
    },
    onGroupCreated: function onGroupCreated(group) {
      this.groups.push(group);
      this.sortGroups();
      this.selectedGroup = group;
    },
    onGroupRenamed: function onGroupRenamed(group) {
      var groupIndex = this.groups.findIndex(function (g) {
        return g.idGroup === group.idGroup;
      });
      this.groups[groupIndex].name = group.name;
      this.sortGroups();
      this.selectedGroup = group;
    },
    onGroupDeleted: function onGroupDeleted(group) {
      this.groups = this.groups.filter(function (g) {
        return g.idGroup !== group.idGroup;
      });
      this.selectedGroup = this.groups.length > 0 ? this.groups[0] : undefined;
    },
    sortGroups: function sortGroups() {
      this.groups.sort(function (a, b) {
        return a.name.localeCompare(b.name);
      });
    }
  }
}));
// CONCATENATED MODULE: ./plugins/GroupPermissions/vue/src/GroupPermissions/TabManageGroups.vue?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./plugins/GroupPermissions/vue/src/GroupPermissions/TabManageGroups.vue



TabManageGroupsvue_type_script_lang_ts.render = TabManageGroupsvue_type_template_id_ecff3f1e_render

/* harmony default export */ var TabManageGroups = (TabManageGroupsvue_type_script_lang_ts);
// CONCATENATED MODULE: ./plugins/GroupPermissions/vue/src/index.ts
/*!
 * Matomo - free/libre analytics platform
 *
 * @link https://matomo.org
 * @license http://www.gnu.org/licenses/gpl-3.0.html GPL v3 or later
 */


// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib-no-default.js




/***/ })

/******/ });
});
//# sourceMappingURL=GroupPermissions.umd.js.map