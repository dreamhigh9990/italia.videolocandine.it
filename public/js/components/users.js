(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["users"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/UserForm.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/UserForm.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _settings_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../settings.js */ "./resources/js/settings.js");
/* harmony import */ var _helper_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helper.js */ "./resources/js/helper.js");
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
  props: ['user', 'shop_ids'],
  data: function data() {
    var _this = this;

    return {
      valid: true,
      local_shop_ids: [],
      shops: [],
      local_user: Object.assign({}, this.user),
      fullnameRules: [function (v) {
        return !!v || _this.$t('labels.fullname_required');
      }],
      nameRules: [function (v) {
        return !!v || _this.$t('labels.name_required');
      }],
      passwordRules: [function (v) {
        return !!v || _this.$t('labels.password_required');
      }],
      shopRules: [function (v) {
        return !!v || 'Shop should be assigned';
      }],
      emailRules: [function (v) {
        return !!v || _this.$t('labels.email_required');
      }, function (v) {
        return /.+@.+\..+/.test(v) || 'E-mail must be valid';
      }]
    };
  },
  watch: {
    user: function user(obj) {
      this.local_user = Object.assign({}, this.user);

      if (obj.id == -1) {
        this.$refs.form.resetValidation();
      }
    },
    shop_ids: function shop_ids(val) {
      this.local_shop_ids = val;
    }
  },
  created: function created() {
    this.init();
  },
  methods: {
    init: function init() {
      var _this2 = this;

      axios.get(_settings_js__WEBPACK_IMPORTED_MODULE_0__["settings"].root_url + '/api/users/init-user-form').then(function (response) {
        _this2.shops = response.data.shops;
      })["catch"](function (error) {});
    },
    onSave: function onSave() {
      var _this3 = this;

      if (this.$refs.form.validate()) {
        var userForm = new FormData();
        userForm.append('name', this.local_user.name);
        userForm.append('fullname', this.local_user.fullname);
        userForm.append('email', this.local_user.email);
        userForm.append('password', this.local_user.password);
        userForm.append('shop_ids', this.local_shop_ids);
        userForm.append('role', 'user');
        userForm.append('by_monitor', this.local_user.by_monitor);

        if (this.local_user.id == -1) {
          axios.post(_settings_js__WEBPACK_IMPORTED_MODULE_0__["settings"].root_url + '/api/users/add-new', userForm).then(function (response) {
            _this3.$emit("updated");
          })["catch"](function (error) {});
        } else {
          axios.post(_settings_js__WEBPACK_IMPORTED_MODULE_0__["settings"].root_url + '/api/users/update/' + this.local_user.id, userForm).then(function (response) {
            _this3.$emit("updated");
          })["catch"](function (error) {});
        }
      } else {
        console.log("validation error");
      }
    },
    onCancel: function onCancel() {
      this.$emit("cancel");
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/users/index.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/users/index.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _settings_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../settings.js */ "./resources/js/settings.js");
/* harmony import */ var _components_UserForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/UserForm */ "./resources/js/components/UserForm.vue");
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
    UserForm: _components_UserForm__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      dialog: false,
      users: [],
      user: {},
      shop_ids: [],
      detaultUser: {
        id: -1,
        name: '',
        fullname: '',
        email: '',
        password: ''
      }
    };
  },
  computed: {
    headers: function headers() {
      return [{
        text: this.$t('users.fields.fullname'),
        value: 'fullname',
        align: 'center'
      }, {
        text: this.$t('users.fields.username'),
        value: 'name',
        align: 'center'
      }, {
        text: this.$t('users.fields.email'),
        value: 'email',
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
    this.getusers();
  },
  methods: {
    onAdd: function onAdd() {
      this.user = Object.assign({}, this.detaultUser);

      if (this.user.shop_ids == null) {
        this.shop_ids = [];
      } else {
        this.shop_ids = this.user.shop_ids.split(',').map(Number);
      }

      this.dialog = true;
    },
    editItem: function editItem(item) {
      this.user = Object.assign({}, item);

      if (this.user.shop_ids == null) {
        this.shop_ids = [];
      } else {
        this.shop_ids = this.user.shop_ids.split(',').map(Number);
      }

      this.dialog = true;
    },
    deleteItem: function deleteItem(item) {
      var _this = this;

      var r = confirm(this.$t('users.fields.delete_confirm'));

      if (r == true) {
        axios.post(_settings_js__WEBPACK_IMPORTED_MODULE_0__["settings"].root_url + '/api/users/delete/' + item.id).then(function (response) {
          _this.getusers();
        })["catch"](function (error) {});
      }
    },
    close: function close() {
      this.dialog = false;
    },
    onUpdate: function onUpdate() {
      this.getusers();
      this.close();
    },
    getusers: function getusers() {
      var _this2 = this;

      axios.get(_settings_js__WEBPACK_IMPORTED_MODULE_0__["settings"].root_url + '/api/users').then(function (response) {
        _this2.users = response.data.users;
      })["catch"](function (response) {
        console.log("error");
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/UserForm.vue?vue&type=template&id=08a5751a&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/UserForm.vue?vue&type=template&id=08a5751a& ***!
  \***********************************************************************************************************************************************************************************************************/
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
    "v-card",
    [
      _c(
        "v-container",
        { attrs: { "grid-list-md": "" } },
        [
          _c("v-card-title", [
            _vm.local_user.id == -1
              ? _c("span", { staticClass: "headline" }, [
                  _vm._v(_vm._s(_vm.$t("users.fields.create")))
                ])
              : _vm._e(),
            _vm._v(" "),
            _vm.local_user.id != -1
              ? _c("span", { staticClass: "headline" }, [
                  _vm._v(_vm._s(_vm.$t("users.fields.edit")))
                ])
              : _vm._e()
          ]),
          _vm._v(" "),
          _c(
            "v-card-text",
            [
              _c(
                "v-form",
                {
                  ref: "form",
                  attrs: { "lazy-validation": true },
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
                    "v-layout",
                    { attrs: { wrap: "" } },
                    [
                      _c(
                        "v-flex",
                        { attrs: { xs12: "", sm12: "", md6: "" } },
                        [
                          _c("v-text-field", {
                            attrs: {
                              label: _vm.$t("users.fields.name"),
                              rules: _vm.nameRules
                            },
                            model: {
                              value: _vm.local_user.name,
                              callback: function($$v) {
                                _vm.$set(_vm.local_user, "name", $$v)
                              },
                              expression: "local_user.name"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-flex",
                        { attrs: { xs12: "", sm12: "", md6: "" } },
                        [
                          _c("v-text-field", {
                            attrs: {
                              label: _vm.$t("users.fields.fullname"),
                              rules: _vm.fullnameRules
                            },
                            model: {
                              value: _vm.local_user.fullname,
                              callback: function($$v) {
                                _vm.$set(_vm.local_user, "fullname", $$v)
                              },
                              expression: "local_user.fullname"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-flex",
                        { attrs: { xs12: "", sm12: "", md6: "" } },
                        [
                          _c("v-text-field", {
                            attrs: { label: "email", rules: _vm.emailRules },
                            model: {
                              value: _vm.local_user.email,
                              callback: function($$v) {
                                _vm.$set(_vm.local_user, "email", $$v)
                              },
                              expression: "local_user.email"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-flex",
                        { attrs: { xs12: "", sm12: "", md6: "" } },
                        [
                          _vm.local_user.id == -1
                            ? _c("v-text-field", {
                                attrs: {
                                  label: "password",
                                  rules: _vm.passwordRules
                                },
                                model: {
                                  value: _vm.local_user.password,
                                  callback: function($$v) {
                                    _vm.$set(_vm.local_user, "password", $$v)
                                  },
                                  expression: "local_user.password"
                                }
                              })
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.local_user.id != -1
                            ? _c("v-text-field", {
                                attrs: { label: "password" },
                                model: {
                                  value: _vm.local_user.password,
                                  callback: function($$v) {
                                    _vm.$set(_vm.local_user, "password", $$v)
                                  },
                                  expression: "local_user.password"
                                }
                              })
                            : _vm._e()
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-flex",
                        { attrs: { xs12: "", sm12: "", md12: "" } },
                        [
                          _c("v-select", {
                            attrs: {
                              items: _vm.shops,
                              "item-text": "name",
                              "item-value": "id",
                              label: _vm.$t("shops.title"),
                              rules: _vm.shopRules,
                              chips: "",
                              multiple: ""
                            },
                            model: {
                              value: _vm.local_shop_ids,
                              callback: function($$v) {
                                _vm.local_shop_ids = $$v
                              },
                              expression: "local_shop_ids"
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
                          _c(
                            "v-radio-group",
                            {
                              model: {
                                value: _vm.local_user.by_monitor,
                                callback: function($$v) {
                                  _vm.$set(_vm.local_user, "by_monitor", $$v)
                                },
                                expression: "local_user.by_monitor"
                              }
                            },
                            [
                              _c("v-radio", {
                                attrs: {
                                  label: _vm.$t("labels.show_monitor_list"),
                                  value: "1"
                                }
                              }),
                              _vm._v(" "),
                              _c("v-radio", {
                                attrs: {
                                  label: _vm.$t(
                                    "labels.manage_monitor_by_group"
                                  ),
                                  value: "0"
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
                  ),
                  _vm._v(" "),
                  _c(
                    "v-layout",
                    { attrs: { wrap: "", "justify-end": "" } },
                    [
                      _c(
                        "v-btn",
                        { staticClass: "mr-2", on: { click: _vm.onCancel } },
                        [_vm._v(_vm._s(_vm.$t("buttons.cancel")))]
                      ),
                      _vm._v(" "),
                      _c(
                        "v-btn",
                        { attrs: { color: "info" }, on: { click: _vm.onSave } },
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
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/users/index.vue?vue&type=template&id=736f405c&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/users/index.vue?vue&type=template&id=736f405c& ***!
  \*********************************************************************************************************************************************************************************************************/
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
          _c("v-toolbar-title", [_vm._v(_vm._s(_vm.$t("users.title")))]),
          _vm._v(" "),
          _c("v-spacer"),
          _vm._v(" "),
          _c(
            "v-btn",
            {
              staticClass: "mb-2",
              attrs: { color: "primary", dark: "" },
              on: { click: _vm.onAdd }
            },
            [_vm._v(_vm._s(_vm.$t("buttons.add_new")))]
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-dialog",
        {
          attrs: { "max-width": "800px", persistent: "" },
          model: {
            value: _vm.dialog,
            callback: function($$v) {
              _vm.dialog = $$v
            },
            expression: "dialog"
          }
        },
        [
          _c("user-form", {
            attrs: { user: _vm.user, shop_ids: _vm.shop_ids },
            on: { updated: _vm.onUpdate, cancel: _vm.close }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c("v-data-table", {
        staticClass: "elevation-1",
        attrs: {
          headers: _vm.headers,
          items: _vm.users,
          "hide-default-footer": "",
          "no-data-text": _vm.$t("labels.no_data"),
          "mobile-breakpoint": 300
        },
        scopedSlots: _vm._u([
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

/***/ "./resources/js/components/UserForm.vue":
/*!**********************************************!*\
  !*** ./resources/js/components/UserForm.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _UserForm_vue_vue_type_template_id_08a5751a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UserForm.vue?vue&type=template&id=08a5751a& */ "./resources/js/components/UserForm.vue?vue&type=template&id=08a5751a&");
/* harmony import */ var _UserForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UserForm.vue?vue&type=script&lang=js& */ "./resources/js/components/UserForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _UserForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _UserForm_vue_vue_type_template_id_08a5751a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _UserForm_vue_vue_type_template_id_08a5751a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/UserForm.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/UserForm.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/components/UserForm.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./UserForm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/UserForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/UserForm.vue?vue&type=template&id=08a5751a&":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/UserForm.vue?vue&type=template&id=08a5751a& ***!
  \*****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserForm_vue_vue_type_template_id_08a5751a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./UserForm.vue?vue&type=template&id=08a5751a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/UserForm.vue?vue&type=template&id=08a5751a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserForm_vue_vue_type_template_id_08a5751a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserForm_vue_vue_type_template_id_08a5751a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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

/***/ "./resources/js/views/users/index.vue":
/*!********************************************!*\
  !*** ./resources/js/views/users/index.vue ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_736f405c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=736f405c& */ "./resources/js/views/users/index.vue?vue&type=template&id=736f405c&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/js/views/users/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_736f405c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_736f405c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/users/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/users/index.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./resources/js/views/users/index.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/users/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/users/index.vue?vue&type=template&id=736f405c&":
/*!***************************************************************************!*\
  !*** ./resources/js/views/users/index.vue?vue&type=template&id=736f405c& ***!
  \***************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_736f405c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=736f405c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/users/index.vue?vue&type=template&id=736f405c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_736f405c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_736f405c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);