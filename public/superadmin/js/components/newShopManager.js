(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["newShopManager"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/superadmin/views/users/new-shopmanager.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/superadmin/views/users/new-shopmanager.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _settings_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../settings.js */ "./resources/js/superadmin/settings.js");
/* harmony import */ var _helper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../helper.js */ "./resources/js/helper.js");
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
      valid: true,
      uploading_dialog: false,
      message: '',
      snackbar: false,
      color: 'success',
      // shops: [],
      shop_id: '',
      userForm: {
        name: '',
        fullname: '',
        password: '',
        email: ''
      },
      fullnameRules: [function (v) {
        return !!v || 'Full name is required';
      }],
      nameRules: [function (v) {
        return !!v || 'Name is required';
      }],
      passwordRules: [function (v) {
        return !!v || 'Password is required';
      }],
      emailRules: [function (v) {
        return !!v || 'E-mail is required';
      }, function (v) {
        return /.+@.+\..+/.test(v) || 'E-mail must be valid';
      }]
    };
  },
  created: function created() {
    this.init();
  },
  methods: {
    init: function init() {// axios.get(settings.root_url + '/api/super-admin-141592/init-new-shopmanager')
      //        .then(response => {
      //            // this.shops = response.data.shops;
      //        }).catch(response => {
      //        });
    },
    create: function create() {
      var _this = this;

      if (this.$refs.form.validate()) {
        var userForm = new FormData();
        userForm.append('name', this.userForm.name);
        userForm.append('fullname', this.userForm.fullname);
        userForm.append('email', this.userForm.email);
        userForm.append('password', this.userForm.password);
        axios.post(_settings_js__WEBPACK_IMPORTED_MODULE_1__["settings"].root_url + '/api/super-admin-141592/create-new-shopmanager', userForm).then(function (response) {
          _this.message = response.data.message;
          _this.color = 'success';
          _this.snackbar = true;

          _this.$router.push({
            name: 'users'
          });
        })["catch"](function (error) {
          _this.message = error.message;
          _this.color = 'error';
          _this.snackbar = true;
        });
      } else {
        console.log("validation error");
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/superadmin/views/users/new-shopmanager.vue?vue&type=template&id=47bea605&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/superadmin/views/users/new-shopmanager.vue?vue&type=template&id=47bea605&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************/
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
        "v-form",
        {
          ref: "form",
          attrs: { "lazy-validation": "" },
          model: {
            value: _vm.valid,
            callback: function($$v) {
              _vm.valid = $$v
            },
            expression: "valid"
          }
        },
        [
          _c(
            "v-card",
            [
              _c("v-card-title", [
                _c("span", { staticClass: "headline" }, [
                  _vm._v(_vm._s(_vm.$t("shops.fields.create")))
                ])
              ]),
              _vm._v(" "),
              _c(
                "v-card-text",
                [
                  _c(
                    "v-container",
                    { attrs: { "grid-list-md": "" } },
                    [
                      _c(
                        "v-layout",
                        { attrs: { wrap: "" } },
                        [
                          _c(
                            "v-flex",
                            { attrs: { xs12: "", sm12: "", md12: "" } },
                            [
                              _c("v-text-field", {
                                attrs: { label: "name", rules: _vm.nameRules },
                                model: {
                                  value: _vm.userForm.name,
                                  callback: function($$v) {
                                    _vm.$set(_vm.userForm, "name", $$v)
                                  },
                                  expression: "userForm.name"
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-flex",
                            { attrs: { xs12: "", sm12: "", md12: "" } },
                            [
                              _c("v-text-field", {
                                attrs: {
                                  label: "fullname",
                                  rules: _vm.fullnameRules
                                },
                                model: {
                                  value: _vm.userForm.fullname,
                                  callback: function($$v) {
                                    _vm.$set(_vm.userForm, "fullname", $$v)
                                  },
                                  expression: "userForm.fullname"
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-flex",
                            { attrs: { xs12: "", sm12: "", md12: "" } },
                            [
                              _c("v-text-field", {
                                attrs: {
                                  label: "email",
                                  rules: _vm.emailRules
                                },
                                model: {
                                  value: _vm.userForm.email,
                                  callback: function($$v) {
                                    _vm.$set(_vm.userForm, "email", $$v)
                                  },
                                  expression: "userForm.email"
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-flex",
                            { attrs: { xs12: "", sm12: "", md12: "" } },
                            [
                              _c("v-text-field", {
                                attrs: {
                                  label: "password",
                                  rules: _vm.passwordRules
                                },
                                model: {
                                  value: _vm.userForm.password,
                                  callback: function($$v) {
                                    _vm.$set(_vm.userForm, "password", $$v)
                                  },
                                  expression: "userForm.password"
                                }
                              })
                            ],
                            1
                          )
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-card-actions",
                [
                  _c(
                    "v-container",
                    [
                      _c(
                        "v-layout",
                        { attrs: { "justify-end": "" } },
                        [
                          _c(
                            "v-snackbar",
                            {
                              attrs: { color: _vm.color },
                              model: {
                                value: _vm.snackbar,
                                callback: function($$v) {
                                  _vm.snackbar = $$v
                                },
                                expression: "snackbar"
                              }
                            },
                            [
                              _vm._v(
                                "\n\t\t\t\t\t\t      \t" +
                                  _vm._s(_vm.message) +
                                  "\n\t\t\t\t\t\t    "
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c("v-btn", { attrs: { to: "/admin/shops" } }, [
                            _vm._v(_vm._s(_vm.$t("buttons.cancel")))
                          ]),
                          _vm._v(" "),
                          _c(
                            "v-btn",
                            {
                              attrs: { color: "info" },
                              on: { click: _vm.create }
                            },
                            [_vm._v(_vm._s(_vm.$t("buttons.save")))]
                          )
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
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
  }
});

/***/ }),

/***/ "./resources/js/settings.js":
/*!**********************************!*\
  !*** ./resources/js/settings.js ***!
  \**********************************/
/*! exports provided: settings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "settings", function() { return settings; });
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var settings = _defineProperty({
  root_url: '/vl/public'
}, "root_url", '');

/***/ }),

/***/ "./resources/js/superadmin/views/users/new-shopmanager.vue":
/*!*****************************************************************!*\
  !*** ./resources/js/superadmin/views/users/new-shopmanager.vue ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _new_shopmanager_vue_vue_type_template_id_47bea605_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./new-shopmanager.vue?vue&type=template&id=47bea605&scoped=true& */ "./resources/js/superadmin/views/users/new-shopmanager.vue?vue&type=template&id=47bea605&scoped=true&");
/* harmony import */ var _new_shopmanager_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./new-shopmanager.vue?vue&type=script&lang=js& */ "./resources/js/superadmin/views/users/new-shopmanager.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _new_shopmanager_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _new_shopmanager_vue_vue_type_template_id_47bea605_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _new_shopmanager_vue_vue_type_template_id_47bea605_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "47bea605",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/superadmin/views/users/new-shopmanager.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/superadmin/views/users/new-shopmanager.vue?vue&type=script&lang=js&":
/*!******************************************************************************************!*\
  !*** ./resources/js/superadmin/views/users/new-shopmanager.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_new_shopmanager_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./new-shopmanager.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/superadmin/views/users/new-shopmanager.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_new_shopmanager_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/superadmin/views/users/new-shopmanager.vue?vue&type=template&id=47bea605&scoped=true&":
/*!************************************************************************************************************!*\
  !*** ./resources/js/superadmin/views/users/new-shopmanager.vue?vue&type=template&id=47bea605&scoped=true& ***!
  \************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_new_shopmanager_vue_vue_type_template_id_47bea605_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./new-shopmanager.vue?vue&type=template&id=47bea605&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/superadmin/views/users/new-shopmanager.vue?vue&type=template&id=47bea605&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_new_shopmanager_vue_vue_type_template_id_47bea605_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_new_shopmanager_vue_vue_type_template_id_47bea605_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);