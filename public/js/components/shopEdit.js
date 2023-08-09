(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["shopEdit"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/shop/edit.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/shop/edit.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _settings_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../settings.js */ "./resources/js/settings.js");
/* harmony import */ var _helper_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helper.js */ "./resources/js/helper.js");
/* harmony import */ var vuetify_lib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuetify/lib */ "./node_modules/vuetify/lib/index.js");
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
  components: {
    VTimePicker: vuetify_lib__WEBPACK_IMPORTED_MODULE_2__["VTimePicker"],
    VForm: vuetify_lib__WEBPACK_IMPORTED_MODULE_2__["VForm"]
  },
  data: function data() {
    return {
      valid: true,
      menu_time_start: [false, false, false, false, false, false, false],
      menu_time_end: [false, false, false, false, false, false, false],
      days: [],
      shopForm: {
        name: '',
        description: '',
        start_times: ["", "", "", "", "", "", ""],
        end_times: ["", "", "", "", "", "", ""]
      }
    };
  },
  created: function created() {
    var _this = this;

    axios.get(_settings_js__WEBPACK_IMPORTED_MODULE_0__["settings"].root_url + '/api/shop/edit-init/' + this.$route.params.id).then(function (response) {
      _this.shopForm.name = response.data.shop.name;
      _this.shopForm.description = response.data.shop.description;
      _this.shopForm.start_times[0] = response.data.shop.open1;
      _this.shopForm.start_times[1] = response.data.shop.open2;
      _this.shopForm.start_times[2] = response.data.shop.open3;
      _this.shopForm.start_times[3] = response.data.shop.open4;
      _this.shopForm.start_times[4] = response.data.shop.open5;
      _this.shopForm.start_times[5] = response.data.shop.open6;
      _this.shopForm.start_times[6] = response.data.shop.open7;
      _this.shopForm.end_times[0] = response.data.close1;
      _this.shopForm.end_times[1] = response.data.close2;
      _this.shopForm.end_times[2] = response.data.close3;
      _this.shopForm.end_times[3] = response.data.close4;
      _this.shopForm.end_times[4] = response.data.close5;
      _this.shopForm.end_times[5] = response.data.close6;
      _this.shopForm.end_times[6] = response.data.close7;
      _this.days = _helper_js__WEBPACK_IMPORTED_MODULE_1__["default"].h_getDays();
    })["catch"](function (response) {
      console.log("error: edit-init");
    });
  },
  computed: {},
  methods: {
    save: function save() {
      var _this2 = this;

      if (this.$refs.form.validate()) {
        axios.post(_settings_js__WEBPACK_IMPORTED_MODULE_0__["settings"].root_url + '/api/shops/update/' + this.$route.params.id, {
          name: this.shopForm.name,
          description: this.shopForm.description,
          start_times: this.shopForm.start_times,
          end_times: this.shopForm.end_times
        }).then(function (response) {
          _this2.$router.push({
            name: 'shops'
          });
        })["catch"](function (error) {});
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/shop/edit.vue?vue&type=template&id=36b03614&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/shop/edit.vue?vue&type=template&id=36b03614&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************/
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
                  _vm._v(_vm._s(_vm.$t("shops.fields.edit")))
                ])
              ]),
              _vm._v(" "),
              _c(
                "v-card-text",
                [
                  _c(
                    "v-container",
                    { attrs: { fluid: "" } },
                    [
                      _c(
                        "v-layout",
                        { attrs: { wrap: "" } },
                        [
                          _c(
                            "v-flex",
                            { attrs: { md12: "" } },
                            [
                              _c("v-text-field", {
                                attrs: { label: _vm.$t("shops.fields.shop") },
                                model: {
                                  value: _vm.shopForm.name,
                                  callback: function($$v) {
                                    _vm.$set(_vm.shopForm, "name", $$v)
                                  },
                                  expression: "shopForm.name"
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _vm._l(7, function(index) {
                            return [
                              _c(
                                "v-flex",
                                { attrs: { xs12: "", xs3: "", md3: "" } },
                                [_vm._v(_vm._s(_vm.days[index - 1]))]
                              ),
                              _vm._v(" "),
                              _c(
                                "v-flex",
                                { attrs: { xs6: "", sm4: "", md4: "" } },
                                [
                                  _c(
                                    "v-menu",
                                    {
                                      attrs: {
                                        "close-on-content-click": false,
                                        "offset-y": ""
                                      },
                                      scopedSlots: _vm._u(
                                        [
                                          {
                                            key: "activator",
                                            fn: function(ref) {
                                              var on = ref.on
                                              return [
                                                _c(
                                                  "v-text-field",
                                                  _vm._g(
                                                    {
                                                      staticStyle: {
                                                        width: "120px"
                                                      },
                                                      attrs: {
                                                        label: _vm.$t(
                                                          "labels.start_time"
                                                        ),
                                                        readonly: ""
                                                      },
                                                      model: {
                                                        value:
                                                          _vm.shopForm
                                                            .start_times[
                                                            index - 1
                                                          ],
                                                        callback: function(
                                                          $$v
                                                        ) {
                                                          _vm.$set(
                                                            _vm.shopForm
                                                              .start_times,
                                                            index - 1,
                                                            $$v
                                                          )
                                                        },
                                                        expression:
                                                          "shopForm.start_times[index - 1]"
                                                      }
                                                    },
                                                    on
                                                  )
                                                )
                                              ]
                                            }
                                          }
                                        ],
                                        null,
                                        true
                                      ),
                                      model: {
                                        value: _vm.menu_time_start[index - 1],
                                        callback: function($$v) {
                                          _vm.$set(
                                            _vm.menu_time_start,
                                            index - 1,
                                            $$v
                                          )
                                        },
                                        expression: "menu_time_start[index - 1]"
                                      }
                                    },
                                    [
                                      _vm._v(" "),
                                      _c("v-time-picker", {
                                        attrs: { format: "24hr" },
                                        model: {
                                          value:
                                            _vm.shopForm.start_times[index - 1],
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.shopForm.start_times,
                                              index - 1,
                                              $$v
                                            )
                                          },
                                          expression:
                                            "shopForm.start_times[index - 1]"
                                        }
                                      })
                                    ],
                                    1
                                  )
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-flex",
                                { attrs: { xs6: "", sm4: "", md4: "" } },
                                [
                                  _c(
                                    "v-menu",
                                    {
                                      attrs: {
                                        "close-on-content-click": false,
                                        "offset-y": ""
                                      },
                                      scopedSlots: _vm._u(
                                        [
                                          {
                                            key: "activator",
                                            fn: function(ref) {
                                              var on = ref.on
                                              return [
                                                _c(
                                                  "v-text-field",
                                                  _vm._g(
                                                    {
                                                      staticStyle: {
                                                        width: "120px"
                                                      },
                                                      attrs: {
                                                        label: _vm.$t(
                                                          "labels.end_time"
                                                        ),
                                                        readonly: ""
                                                      },
                                                      model: {
                                                        value:
                                                          _vm.shopForm
                                                            .end_times[
                                                            index - 1
                                                          ],
                                                        callback: function(
                                                          $$v
                                                        ) {
                                                          _vm.$set(
                                                            _vm.shopForm
                                                              .end_times,
                                                            index - 1,
                                                            $$v
                                                          )
                                                        },
                                                        expression:
                                                          "shopForm.end_times[index - 1]"
                                                      }
                                                    },
                                                    on
                                                  )
                                                )
                                              ]
                                            }
                                          }
                                        ],
                                        null,
                                        true
                                      ),
                                      model: {
                                        value: _vm.menu_time_end[index - 1],
                                        callback: function($$v) {
                                          _vm.$set(
                                            _vm.menu_time_end,
                                            index - 1,
                                            $$v
                                          )
                                        },
                                        expression: "menu_time_end[index - 1]"
                                      }
                                    },
                                    [
                                      _vm._v(" "),
                                      _c("v-time-picker", {
                                        attrs: { format: "24hr" },
                                        model: {
                                          value:
                                            _vm.shopForm.end_times[index - 1],
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.shopForm.end_times,
                                              index - 1,
                                              $$v
                                            )
                                          },
                                          expression:
                                            "shopForm.end_times[index - 1]"
                                        }
                                      })
                                    ],
                                    1
                                  )
                                ],
                                1
                              )
                            ]
                          }),
                          _vm._v(" "),
                          _c(
                            "v-flex",
                            { attrs: { sm12: "" } },
                            [
                              _c("v-textarea", {
                                attrs: {
                                  label: _vm.$t("campaign.fields.description")
                                },
                                model: {
                                  value: _vm.shopForm.description,
                                  callback: function($$v) {
                                    _vm.$set(_vm.shopForm, "description", $$v)
                                  },
                                  expression: "shopForm.description"
                                }
                              })
                            ],
                            1
                          )
                        ],
                        2
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
                          _c("v-btn", { attrs: { to: "/admin/shops" } }, [
                            _vm._v(_vm._s(_vm.$t("buttons.cancel")))
                          ]),
                          _vm._v(" "),
                          _c(
                            "v-btn",
                            {
                              attrs: { color: "info" },
                              on: { click: _vm.save }
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

/***/ "./resources/js/views/shop/edit.vue":
/*!******************************************!*\
  !*** ./resources/js/views/shop/edit.vue ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _edit_vue_vue_type_template_id_36b03614_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit.vue?vue&type=template&id=36b03614&scoped=true& */ "./resources/js/views/shop/edit.vue?vue&type=template&id=36b03614&scoped=true&");
/* harmony import */ var _edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit.vue?vue&type=script&lang=js& */ "./resources/js/views/shop/edit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _edit_vue_vue_type_template_id_36b03614_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _edit_vue_vue_type_template_id_36b03614_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "36b03614",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/shop/edit.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/shop/edit.vue?vue&type=script&lang=js&":
/*!*******************************************************************!*\
  !*** ./resources/js/views/shop/edit.vue?vue&type=script&lang=js& ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./edit.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/shop/edit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/shop/edit.vue?vue&type=template&id=36b03614&scoped=true&":
/*!*************************************************************************************!*\
  !*** ./resources/js/views/shop/edit.vue?vue&type=template&id=36b03614&scoped=true& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_template_id_36b03614_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./edit.vue?vue&type=template&id=36b03614&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/shop/edit.vue?vue&type=template&id=36b03614&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_template_id_36b03614_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_template_id_36b03614_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);