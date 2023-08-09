(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["shops"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/shop/index.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/shop/index.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _settings_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../settings.js */ "./resources/js/settings.js");
/* harmony import */ var _helper_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helper.js */ "./resources/js/helper.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  components: {},
  data: function data() {
    return {
      dialog: false,
      editedIndex: -1,
      menu_date_start: false,
      menu_time_start: false,
      menu_date_end: false,
      menu_time_end: false,
      shopForm: {
        name: '',
        description: '',
        start_time: '',
        end_time: ''
      },
      defaultItem: {
        name: '',
        shop: '',
        start_time: '',
        end_time: ''
      },
      shops: [],
      days: []
    };
  },
  computed: {
    headers: function headers() {
      return [{
        text: this.$t('shops.fields.name'),
        value: 'name',
        align: 'center'
      }, {
        text: this.$t('shops.fields.opening_time'),
        value: 'start_time',
        align: 'center'
      }, {
        text: this.$t('shops.fields.description'),
        value: 'description',
        align: 'center'
      }, {
        text: this.$t('labels.actions'),
        value: 'actions',
        sortable: false,
        align: 'center'
      }];
    }
  },
  created: function created() {
    this.init();
  },
  methods: {
    init: function init() {
      var _this = this;

      this.days = _helper_js__WEBPACK_IMPORTED_MODULE_1__["default"].h_getDays();
      axios.get(_settings_js__WEBPACK_IMPORTED_MODULE_0__["settings"].root_url + '/api/shops/load').then(function (response) {
        _this.shops = response.data.shops;
      })["catch"](function (response) {
        console.log("error");
      });
    },
    editItem: function editItem(item) {
      this.$router.push({
        name: "shop-edit",
        params: {
          id: item.id
        }
      });
    },
    deleteItem: function deleteItem(item) {
      var _this2 = this;

      this.editedIndex = item.id;
      var r = confirm(this.$t('shops.fields.delete_confirm'));

      if (r == true) {
        axios.post(_settings_js__WEBPACK_IMPORTED_MODULE_0__["settings"].root_url + '/api/shops/delete/' + this.editedIndex).then(function (response) {
          _this2.getShops();
        })["catch"](function (error) {});
      }

      this.editedIndex = -1;
    },
    close: function close() {
      this.dialog = false;
      this.editedIndex = -1;
    },
    save: function save() {
      var _this3 = this;

      if (this.editedIndex > -1) {
        var shopForm = new FormData();
        shopForm.append('name', this.shopForm.name);
        shopForm.append('description', this.shopForm.description);
        shopForm.append('start_time', this.shopForm.start_time);
        shopForm.append('end_time', this.shopForm.end_time);
        axios.post(_settings_js__WEBPACK_IMPORTED_MODULE_0__["settings"].root_url + '/api/shops/update/' + this.editedIndex, shopForm).then(function (response) {
          _this3.getShops();
        })["catch"](function (error) {});
      } else {
        var _shopForm = new FormData();

        _shopForm.append('name', this.shopForm.name);

        _shopForm.append('description', this.shopForm.description);

        _shopForm.append('start_time', this.shopForm.start_time);

        _shopForm.append('end_time', this.shopForm.end_time);

        axios.post(_settings_js__WEBPACK_IMPORTED_MODULE_0__["settings"].root_url + '/api/shops/add-new', _shopForm).then(function (response) {
          _this3.getShops();
        })["catch"](function (error) {});
      }

      this.shopForm = this.defaultItem;
      this.editedIndex = -1;
      this.close();
    },
    getShops: function getShops() {
      var _this4 = this;

      axios.get(_settings_js__WEBPACK_IMPORTED_MODULE_0__["settings"].root_url + '/api/shops').then(function (response) {
        _this4.shops = response.data.shops;
      })["catch"](function (response) {
        console.log("error");
      });
    },
    getLocale: function getLocale() {
      return _helper_js__WEBPACK_IMPORTED_MODULE_1__["default"].getLocale();
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/shop/index.vue?vue&type=template&id=3de37390&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/shop/index.vue?vue&type=template&id=3de37390&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-container",
    { attrs: { fluid: "" } },
    [
      _c(
        "v-toolbar",
        { attrs: { color: "grey lighten-2" } },
        [
          _c("v-toolbar-title", [_vm._v(_vm._s(_vm.$t("shops.title")))]),
          _vm._v(" "),
          _c("v-spacer"),
          _vm._v(" "),
          _c(
            "v-btn",
            {
              staticClass: "mb-2",
              attrs: { color: "primary", dark: "", to: "/admin/shops/create" }
            },
            [_vm._v(_vm._s(_vm.$t("buttons.add_new")))]
          )
        ],
        1
      ),
      _vm._v(" "),
      _c("v-data-table", {
        staticClass: "elevation-1",
        attrs: {
          headers: _vm.headers,
          items: _vm.shops,
          "no-data-text": _vm.$t("labels.no_data"),
          "hide-default-footer": "",
          "mobile-breakpoint": 300
        },
        scopedSlots: _vm._u([
          {
            key: "item.start_time",
            fn: function(ref) {
              var item = ref.item
              return [
                _c("strong", [_vm._v(_vm._s(_vm.days[0]))]),
                _vm._v(
                  " : " + _vm._s(item.open1) + " - " + _vm._s(item.close1)
                ),
                _c("br"),
                _vm._v(" "),
                _c("strong", [_vm._v(_vm._s(_vm.days[1]))]),
                _vm._v(
                  " : " + _vm._s(item.open2) + " - " + _vm._s(item.close2)
                ),
                _c("br"),
                _vm._v(" "),
                _c("strong", [_vm._v(_vm._s(_vm.days[2]))]),
                _vm._v(
                  " : " + _vm._s(item.open3) + " - " + _vm._s(item.close3)
                ),
                _c("br"),
                _vm._v(" "),
                _c("strong", [_vm._v(_vm._s(_vm.days[3]))]),
                _vm._v(
                  " : " + _vm._s(item.open4) + " - " + _vm._s(item.close4)
                ),
                _c("br"),
                _vm._v(" "),
                _c("strong", [_vm._v(_vm._s(_vm.days[4]))]),
                _vm._v(
                  " : " + _vm._s(item.open5) + " - " + _vm._s(item.close5)
                ),
                _c("br"),
                _vm._v(" "),
                _c("strong", [_vm._v(_vm._s(_vm.days[5]))]),
                _vm._v(
                  " : " + _vm._s(item.open6) + " - " + _vm._s(item.close6)
                ),
                _c("br"),
                _vm._v(" "),
                _c("strong", [_vm._v(_vm._s(_vm.days[6]))]),
                _vm._v(
                  " : " +
                    _vm._s(item.open7) +
                    " - " +
                    _vm._s(item.close7) +
                    "\n      \t"
                )
              ]
            }
          },
          {
            key: "item.description",
            fn: function(ref) {
              var item = ref.item
              return [_c("pre", [_vm._v(_vm._s(item.description))])]
            }
          },
          {
            key: "item.actions",
            fn: function(ref) {
              var item = ref.item
              return [
                _c(
                  "v-icon",
                  {
                    staticClass: "mr-2",
                    attrs: { small: "" },
                    on: {
                      click: function($event) {
                        return _vm.editItem(item)
                      }
                    }
                  },
                  [_vm._v("\n\t\t\t\tedit\n\t\t\t")]
                ),
                _vm._v(" "),
                _c(
                  "v-icon",
                  {
                    attrs: { small: "" },
                    on: {
                      click: function($event) {
                        return _vm.deleteItem(item)
                      }
                    }
                  },
                  [_vm._v("\n\t\t\t\tdelete\n\t\t\t")]
                )
              ]
            }
          }
        ])
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/helper.js":
/*!********************************!*\
  !*** ./resources/js/helper.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _settings_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./settings.js */ "./resources/js/settings.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


/* harmony default export */ __webpack_exports__["default"] = ({
  getLocale: function getLocale() {
    if (localStorage.getItem('locale') === null) {
      localStorage.setItem('locale', 'en');
    }

    return localStorage.getItem('locale');
  },
  h_getDays: function h_getDays() {
    if (this.getLocale() == 'it') var days = ['Lun', 'Mar', 'Mer', 'Giov', 'Ven', 'Sab', 'Dom'];else if (this.getLocale() == 'en') var days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    return days;
  },
  getFilterURL: function getFilterURL(data) {
    var url = '';
    $.each(data, function (key, value) {
      url += value ? '&' + key + '=' + encodeURI(value) : '';
    });
    return url;
  },
  formatDate: function formatDate(date) {
    if (!date) return null;

    var _date$split = date.split('-'),
        _date$split2 = _slicedToArray(_date$split, 3),
        year = _date$split2[0],
        month = _date$split2[1],
        day = _date$split2[2];

    return "".concat(day, "/").concat(month, "/").concat(year);
  },
  parseDate: function parseDate(date) {
    if (!date) return null;

    var _date$split3 = date.split('/'),
        _date$split4 = _slicedToArray(_date$split3, 3),
        day = _date$split4[0],
        month = _date$split4[1],
        year = _date$split4[2];

    return "".concat(year, "-").concat(month.padStart(2, '0'), "-").concat(day.padStart(2, '0'));
  },
  check: function check() {
    return axios.post('/auth/check').then(function (response) {
      return !!response.data.authenticated;
    })["catch"](function (error) {
      return response.data.authenticated;
    });
  }
});

/***/ }),

/***/ "./resources/js/views/shop/index.vue":
/*!*******************************************!*\
  !*** ./resources/js/views/shop/index.vue ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_3de37390_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=3de37390&scoped=true& */ "./resources/js/views/shop/index.vue?vue&type=template&id=3de37390&scoped=true&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/js/views/shop/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_3de37390_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_3de37390_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "3de37390",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/shop/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/shop/index.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./resources/js/views/shop/index.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/shop/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/shop/index.vue?vue&type=template&id=3de37390&scoped=true&":
/*!**************************************************************************************!*\
  !*** ./resources/js/views/shop/index.vue?vue&type=template&id=3de37390&scoped=true& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_3de37390_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=3de37390&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/shop/index.vue?vue&type=template&id=3de37390&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_3de37390_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_3de37390_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);