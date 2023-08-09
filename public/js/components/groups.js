(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["groups"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/group/index.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/group/index.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _settings_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../settings.js */ "./resources/js/settings.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
  components: {},
  data: function data() {
    var _this = this;

    return {
      dialog: false,
      valid: true,
      isLoading: false,
      types: [],
      ratios: [],
      groups: [],
      monitors: [],
      editedIndex: -1,
      footer_props: {
        itemsPerPageText: "Righe per pagina",
        itemsPerPageOptions: [100]
      },
      groupForm: {
        name: '',
        type: {},
        aspectRatio: {},
        description: '',
        monitors: [],
        availableMonitors: []
      },
      defaultItem: {
        name: '',
        type: {},
        aspectRatio: {},
        description: '',
        monitors: [],
        availableMonitors: []
      },
      nameRules: [function (v) {
        return !!v || _this.$t('labels.name_required');
      }]
    };
  },
  watch: {
    dialog: function dialog(val) {
      val || this.close();
    }
  },
  created: function created() {
    this.init();
  },
  computed: {
    headers: function headers() {
      return [{
        text: this.$t('groups.fields.groupname'),
        value: 'name',
        sortable: false,
        align: 'center'
      }, {
        text: this.$t('groups.fields.aspectratio'),
        value: 'aspectratio',
        sortable: false,
        align: 'center'
      }, {
        text: this.$t('groups.fields.grouptype'),
        value: 'grouptype',
        sortable: false,
        align: 'center'
      }, _defineProperty({
        text: this.$t('labels.monitor'),
        value: 'monitors',
        sortable: false,
        align: 'center'
      }, "sortable", false), {
        text: this.$t('labels.actions'),
        value: 'actions',
        sortable: false,
        align: 'center'
      }];
    }
  },
  methods: {
    init: function init() {
      var _this2 = this;

      this.isLoading = true;
      axios.get(_settings_js__WEBPACK_IMPORTED_MODULE_0__["settings"].root_url + '/api/groups/load').then(function (response) {
        _this2.types = response.data.types;
        _this2.ratios = response.data.ratios;
        _this2.groups = response.data.groups;
        _this2.monitors = response.data.monitors;
        _this2.isLoading = false;
      })["catch"](function (response) {
        console.log("error");
        _this2.isLoading = false;
      });
    },
    editItem: function editItem(item) {
      this.editedIndex = item.id;
      this.groupForm = Object.assign({}, item);
      this.groupForm.type = {
        id: parseInt(item.group_type_id)
      };
      this.groupForm.aspectRatio = {
        id: parseInt(item.aspect_ratio_id)
      };
      this.groupForm.monitors = this.getMonitors(item);
      this.groupForm.availableMonitors = this.getAvailableMonitors(item);
      this.dialog = true;
    },
    deleteItem: function deleteItem(item) {
      var _this3 = this;

      this.editedIndex = item.id;
      var r = confirm(this.$t('groups.fields.delete_confirm'));

      if (r == true) {
        axios.post(_settings_js__WEBPACK_IMPORTED_MODULE_0__["settings"].root_url + '/api/groups/delete/' + this.editedIndex).then(function (response) {
          _this3.getGroups();
        })["catch"](function (error) {});
      }

      this.editedIndex = -1;
    },
    close: function close() {
      var _this4 = this;

      this.dialog = false;
      setTimeout(function () {
        _this4.groupForm = Object.assign({}, _this4.defaultItem);
        _this4.editedIndex = -1;

        _this4.$refs.form.resetValidation();
      }, 300);
    },
    save: function save() {
      var _this5 = this;

      if (this.$refs.form.validate()) {
        if (this.editedIndex > -1) {
          console.log(this.groupForm.monitors);
          axios.post(_settings_js__WEBPACK_IMPORTED_MODULE_0__["settings"].root_url + '/api/groups/update/' + this.editedIndex, {
            name: this.groupForm.name,
            aspect_ratio_id: this.groupForm.aspectRatio.id,
            group_type_id: this.groupForm.type.id,
            description: this.groupForm.description,
            monitor_ids: this.groupForm.monitors.map(function (el) {
              return el.id;
            }).toString()
          }).then(function (response) {
            _this5.groupForm = _this5.defaultItem;

            _this5.getGroups();
          })["catch"](function (error) {});
        } else {
          axios.post(_settings_js__WEBPACK_IMPORTED_MODULE_0__["settings"].root_url + '/api/groups/add-new', {
            name: this.groupForm.name,
            aspect_ratio_id: this.groupForm.aspectRatio.id,
            group_type_id: this.groupForm.type.id,
            description: this.groupForm.description,
            monitor_ids: this.groupForm.monitors.map(function (el) {
              return el.id;
            }).toString()
          }).then(function (response) {
            _this5.groupForm = _this5.defaultItem;

            _this5.getGroups();
          })["catch"](function (error) {});
        }

        this.groupForm = this.defaultItem;
        this.editedIndex = -1;
        this.close();
      }
    },
    getGroups: function getGroups() {
      var _this6 = this;

      this.isLoading = true;
      axios.get(_settings_js__WEBPACK_IMPORTED_MODULE_0__["settings"].root_url + '/api/groups').then(function (response) {
        _this6.groups = response.data.groups;
        _this6.isLoading = false;
      })["catch"](function (response) {
        console.log("error");
        _this6.isLoading = false;
      });
    },
    getAspectratio: function getAspectratio(ratioId) {
      var ratio = this.ratios.filter(function (ratio) {
        return ratio.id == ratioId;
      });
      return ratio[0].name;
    },
    getGroupType: function getGroupType(typeId) {
      var type = this.types.filter(function (type) {
        return type.id == typeId;
      });
      return type[0].name;
    },
    remove: function remove(item) {
      var index = this.groupForm.monitors.indexOf(item.id);
      if (index >= 0) this.groupForm.monitors.splice(index, 1);
    },
    getMonitors: function getMonitors(group) {
      if (group.monitor_ids) {
        var arr_ids = group.monitor_ids.split(",");
        return this.monitors.filter(function (monitor) {
          return arr_ids.includes(monitor.id.toString()) == true;
        });
      }

      return [];
    },
    getAvailableMonitors: function getAvailableMonitors(group) {
      // console.log("group" + group.aspect_ratio_id +  " " + group.type_id);
      // console.log(this.monitors);
      return this.monitors.filter(function (monitor) {
        return monitor.aspect_ratio_id == group.aspect_ratio_id && monitor.type_id == group.group_type_id;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/group/index.vue?vue&type=style&index=0&id=5116c013&scoped=true&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/group/index.vue?vue&type=style&index=0&id=5116c013&scoped=true&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "\n.v-chip[data-v-5116c013]{\n\theight: auto;\n}\n", ""]);



/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/group/index.vue?vue&type=style&index=0&id=5116c013&scoped=true&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/group/index.vue?vue&type=style&index=0&id=5116c013&scoped=true&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&id=5116c013&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/group/index.vue?vue&type=style&index=0&id=5116c013&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/group/index.vue?vue&type=template&id=5116c013&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/group/index.vue?vue&type=template&id=5116c013&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************/
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
          _c("v-toolbar-title", [_vm._v(_vm._s(_vm.$t("groups.title")))]),
          _vm._v(" "),
          _c("v-spacer"),
          _vm._v(" "),
          [
            _c(
              "v-dialog",
              {
                attrs: { "max-width": "800px", persistent: "" },
                scopedSlots: _vm._u([
                  {
                    key: "activator",
                    fn: function(ref) {
                      var on = ref.on
                      return [
                        _c(
                          "v-btn",
                          _vm._g(
                            {
                              staticClass: "mb-2",
                              attrs: { color: "primary", dark: "" }
                            },
                            on
                          ),
                          [_vm._v(_vm._s(_vm.$t("buttons.add_new")))]
                        )
                      ]
                    }
                  }
                ]),
                model: {
                  value: _vm.dialog,
                  callback: function($$v) {
                    _vm.dialog = $$v
                  },
                  expression: "dialog"
                }
              },
              [
                _vm._v(" "),
                _c(
                  "v-card",
                  [
                    _c("v-card-title", [
                      _vm.editedIndex == -1
                        ? _c("span", { staticClass: "headline" }, [
                            _vm._v(_vm._s(_vm.$t("groups.fields.create")))
                          ])
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.editedIndex != -1
                        ? _c("span", { staticClass: "headline" }, [
                            _vm._v(_vm._s(_vm.$t("groups.fields.edit")))
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
                              "v-container",
                              { attrs: { "grid-list-md": "" } },
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
                                          attrs: {
                                            label: _vm.$t(
                                              "groups.fields.groupname"
                                            ),
                                            rules: _vm.nameRules
                                          },
                                          model: {
                                            value: _vm.groupForm.name,
                                            callback: function($$v) {
                                              _vm.$set(
                                                _vm.groupForm,
                                                "name",
                                                $$v
                                              )
                                            },
                                            expression: "groupForm.name"
                                          }
                                        })
                                      ],
                                      1
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "v-flex",
                                      {
                                        attrs: { md12: "", sm12: "", xs12: "" }
                                      },
                                      [
                                        _c("v-select", {
                                          attrs: {
                                            items: _vm.types,
                                            "item-text": "name",
                                            "item-value": "id",
                                            label: _vm.$t(
                                              "groups.fields.grouptype"
                                            ),
                                            "persistent-hint": "",
                                            "return-object": ""
                                          },
                                          model: {
                                            value: _vm.groupForm.type,
                                            callback: function($$v) {
                                              _vm.$set(
                                                _vm.groupForm,
                                                "type",
                                                $$v
                                              )
                                            },
                                            expression: "groupForm.type"
                                          }
                                        })
                                      ],
                                      1
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "v-flex",
                                      {
                                        attrs: { md12: "", sm12: "", xs12: "" }
                                      },
                                      [
                                        _c("v-select", {
                                          attrs: {
                                            items: _vm.ratios,
                                            "item-text": "name",
                                            "item-value": "id",
                                            label: _vm.$t(
                                              "groups.fields.aspectratio"
                                            ),
                                            "persistent-hint": "",
                                            "return-object": ""
                                          },
                                          model: {
                                            value: _vm.groupForm.aspectRatio,
                                            callback: function($$v) {
                                              _vm.$set(
                                                _vm.groupForm,
                                                "aspectRatio",
                                                $$v
                                              )
                                            },
                                            expression: "groupForm.aspectRatio"
                                          }
                                        })
                                      ],
                                      1
                                    ),
                                    _vm._v(" "),
                                    _vm.editedIndex > -1
                                      ? [
                                          _c("v-select", {
                                            attrs: {
                                              items:
                                                _vm.groupForm.availableMonitors,
                                              attach: "",
                                              chips: "",
                                              label: "Assegna i monitor",
                                              "item-text": "name",
                                              "item-value": "id",
                                              "return-object": "",
                                              multiple: ""
                                            },
                                            model: {
                                              value: _vm.groupForm.monitors,
                                              callback: function($$v) {
                                                _vm.$set(
                                                  _vm.groupForm,
                                                  "monitors",
                                                  $$v
                                                )
                                              },
                                              expression: "groupForm.monitors"
                                            }
                                          })
                                        ]
                                      : _vm._e(),
                                    _vm._v(" "),
                                    _c(
                                      "v-flex",
                                      {
                                        attrs: { md12: "", sm12: "", xs12: "" }
                                      },
                                      [
                                        _c("v-textarea", {
                                          attrs: {
                                            label: _vm.$t(
                                              "groups.fields.description"
                                            )
                                          },
                                          model: {
                                            value: _vm.groupForm.description,
                                            callback: function($$v) {
                                              _vm.$set(
                                                _vm.groupForm,
                                                "description",
                                                $$v
                                              )
                                            },
                                            expression: "groupForm.description"
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
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "v-card-actions",
                      [
                        _c("v-spacer"),
                        _vm._v(" "),
                        _c("v-btn", { on: { click: _vm.close } }, [
                          _vm._v(_vm._s(_vm.$t("buttons.cancel")))
                        ]),
                        _vm._v(" "),
                        _c(
                          "v-btn",
                          {
                            attrs: { color: "primary" },
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
          ]
        ],
        2
      ),
      _vm._v(" "),
      _c("v-data-table", {
        staticClass: "elevation-1",
        attrs: {
          headers: _vm.headers,
          items: _vm.groups,
          loading: _vm.isLoading,
          "no-data-text": _vm.$t("labels.no_data"),
          "items-per-page": 100,
          "footer-props": _vm.footer_props,
          locale: "it",
          "mobile-breakpoint": 300
        },
        scopedSlots: _vm._u([
          {
            key: "item.aspectratio",
            fn: function(ref) {
              var item = ref.item
              return [
                _vm._v(
                  "\n\t\t\t\t" +
                    _vm._s(_vm.getAspectratio(item.aspect_ratio_id)) +
                    "\n\t\t\t"
                )
              ]
            }
          },
          {
            key: "item.grouptype",
            fn: function(ref) {
              var item = ref.item
              return [
                _vm._v(
                  "\n\t\t\t\t" +
                    _vm._s(_vm.getGroupType(item.group_type_id)) +
                    "\n\t\t\t"
                )
              ]
            }
          },
          {
            key: "item.monitors",
            fn: function(ref) {
              var item = ref.item
              return [
                _vm.getMonitors(item).length
                  ? _c(
                      "div",
                      _vm._l(_vm.getMonitors(item), function(item, index) {
                        return _c("v-chip", { key: item.id }, [
                          _vm._v(" " + _vm._s(item.name) + " ")
                        ])
                      }),
                      1
                    )
                  : _c(
                      "div",
                      [
                        _c("v-chip", { staticClass: "no-group" }, [
                          _vm._v(
                            " " + _vm._s(_vm.$t("labels.no_monitor")) + " "
                          )
                        ])
                      ],
                      1
                    )
              ]
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
                    on: {
                      click: function($event) {
                        return _vm.editItem(item)
                      }
                    }
                  },
                  [_vm._v("\n\t\t\t\t\tedit\n\t\t\t\t")]
                ),
                _vm._v(" "),
                _c(
                  "v-icon",
                  {
                    on: {
                      click: function($event) {
                        return _vm.deleteItem(item)
                      }
                    }
                  },
                  [_vm._v("\n\t\t\t\t\tdelete\n\t\t\t\t")]
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

/***/ "./resources/js/views/group/index.vue":
/*!********************************************!*\
  !*** ./resources/js/views/group/index.vue ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_5116c013_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=5116c013&scoped=true& */ "./resources/js/views/group/index.vue?vue&type=template&id=5116c013&scoped=true&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/js/views/group/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _index_vue_vue_type_style_index_0_id_5116c013_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&id=5116c013&scoped=true&lang=css& */ "./resources/js/views/group/index.vue?vue&type=style&index=0&id=5116c013&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_5116c013_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_5116c013_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "5116c013",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/group/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/group/index.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./resources/js/views/group/index.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/group/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/group/index.vue?vue&type=style&index=0&id=5116c013&scoped=true&lang=css&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/views/group/index.vue?vue&type=style&index=0&id=5116c013&scoped=true&lang=css& ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_5116c013_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader/dist/cjs.js??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&id=5116c013&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/group/index.vue?vue&type=style&index=0&id=5116c013&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_5116c013_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_5116c013_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_5116c013_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_5116c013_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_5116c013_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/views/group/index.vue?vue&type=template&id=5116c013&scoped=true&":
/*!***************************************************************************************!*\
  !*** ./resources/js/views/group/index.vue?vue&type=template&id=5116c013&scoped=true& ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_5116c013_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=5116c013&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/group/index.vue?vue&type=template&id=5116c013&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_5116c013_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_5116c013_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);