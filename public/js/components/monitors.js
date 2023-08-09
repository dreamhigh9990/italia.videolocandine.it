(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["monitors"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ImagePreview.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ImagePreview.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['src'],
  data: function data() {
    return {
      local_src: ''
    };
  },
  watch: {
    src: function src(value) {
      this.local_src = value;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/monitor/index.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/monitor/index.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _helper_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helper.js */ "./resources/js/helper.js");
/* harmony import */ var _settings_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../settings.js */ "./resources/js/settings.js");
/* harmony import */ var _components_ImagePreview__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/ImagePreview */ "./resources/js/components/ImagePreview.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    ImagePreview: _components_ImagePreview__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    var _this = this;

    return {
      valid: true,
      dialog: false,
      isLoading: false,
      isUploading: false,
      loading_dialog_text: '',
      types: [],
      ratios: [],
      shops: [],
      monitors: [],
      groups: [],
      redundancyPreview: false,
      filter_shop: '',
      editedIndex: -1,
      monitorForm: {
        name: '',
        shop: {},
        type: {},
        aspectRatio: {},
        rotation: '',
        redundancy: null,
        description: ''
      },
      defaultItem: {
        name: '',
        shop: {},
        type: {},
        aspectRatio: {},
        rotation: '0',
        redundancy: null,
        description: ''
      },
      filterForm: {
        shop_id: '',
        group_id: ''
      },
      rotations: ['0', '90', '180', '270'],
      footer_props: {
        itemsPerPageText: "Righe per pagina",
        itemsPerPageOptions: [100]
      },
      rules: {
        required: function required(value) {
          return !!value || _this.$t('labels.name_required');
        }
      }
    };
  },
  computed: {
    headers: function headers() {
      return [{
        text: this.$t('monitors.fields.id'),
        value: 'id',
        sortable: false,
        align: 'center'
      }, {
        text: this.$t('monitors.fields.name'),
        value: 'name',
        align: 'center'
      }, {
        text: this.$t('monitors.fields.shop'),
        value: 'shop',
        align: 'center'
      }, {
        text: this.$t('monitors.fields.aspectratio'),
        value: 'aspectratio',
        align: 'center'
      }, {
        text: this.$t('monitors.fields.type'),
        value: 'type',
        align: 'center'
      }, {
        text: this.$t('monitors.fields.rotation'),
        value: 'rotation',
        align: 'center'
      }, {
        text: this.$t('labels.actions'),
        value: 'actions',
        sortable: false,
        align: 'center'
      }];
    },
    previewSrc: function previewSrc() {
      if (this.monitorForm.redundancy) return _settings_js__WEBPACK_IMPORTED_MODULE_1__["settings"].root_url + '/media/monitor-redundancies/' + this.monitorForm.redundancy.file;else return null;
    }
  },
  watch: {
    dialog: function dialog(val) {
      val || this.close();
    }
  },
  created: function created() {
    this.init();
  },
  methods: {
    init: function init() {
      var _this2 = this;

      this.isLoading = true;
      axios.get(_settings_js__WEBPACK_IMPORTED_MODULE_1__["settings"].root_url + '/api/monitors/load').then(function (response) {
        _this2.types = response.data.types;
        _this2.ratios = response.data.ratios;
        _this2.shops = response.data.shops;
        _this2.groups = response.data.groups;

        _this2.getMonitors();
      })["catch"](function (response) {
        _this2.isLoading = false;
      });
    },
    editItem: function editItem(item) {
      var _this3 = this;

      this.editedIndex = item.id;
      this.monitorForm = Object.assign({}, item);
      this.monitorForm.shop = {
        id: parseInt(item.shop_id)
      };
      this.monitorForm.type = {
        id: parseInt(item.type_id)
      };
      this.monitorForm.aspectRatio = {
        id: parseInt(item.aspect_ratio_id)
      };
      axios.get(_settings_js__WEBPACK_IMPORTED_MODULE_1__["settings"].root_url + '/api/monitors/redundancy/' + item.id).then(function (response) {
        _this3.monitorForm.redundancy = response.data.redundancy;
        _this3.dialog = true;
      })["catch"](function (response) {
        console.log(response);
      });
    },
    deleteItem: function deleteItem(item) {
      var _this4 = this;

      this.editedIndex = item.id;
      var r = confirm(this.$t('monitors.fields.delete_confirm'));

      if (r == true) {
        axios.post(_settings_js__WEBPACK_IMPORTED_MODULE_1__["settings"].root_url + '/api/monitors/delete/' + this.editedIndex).then(function (response) {
          _this4.getMonitors();
        })["catch"](function (error) {});
      }

      this.editedIndex = -1;
    },
    close: function close() {
      var _this5 = this;

      this.dialog = false;
      setTimeout(function () {
        _this5.monitorForm = Object.assign({}, _this5.defaultItem);

        _this5.$refs.form.resetValidation();

        _this5.editedIndex = -1;
      }, 300);
    },
    save: function save() {
      var _this6 = this;

      if (this.$refs.form.validate()) {
        if (this.editedIndex > -1) {
          var monitorForm = new FormData();
          monitorForm.append('name', this.monitorForm.name);
          monitorForm.append('shop_id', this.monitorForm.shop.id);
          monitorForm.append('aspect_ratio_id', this.monitorForm.aspectRatio.id);
          monitorForm.append('type_id', this.monitorForm.type.id);
          monitorForm.append('rotation', this.monitorForm.rotation);
          monitorForm.append('description', this.monitorForm.description);
          axios.post(_settings_js__WEBPACK_IMPORTED_MODULE_1__["settings"].root_url + '/api/monitors/update/' + this.editedIndex, monitorForm).then(function (response) {
            _this6.$toastr.s(_this6.$t('monitors.fields.updated_successfully'));

            _this6.getMonitors();
          })["catch"](function (error) {});
        } else {
          var _monitorForm = new FormData();

          _monitorForm.append('name', this.monitorForm.name);

          _monitorForm.append('shop_id', this.monitorForm.shop.id);

          _monitorForm.append('aspect_ratio_id', this.monitorForm.aspectRatio.id);

          _monitorForm.append('type_id', this.monitorForm.type.id);

          _monitorForm.append('rotation', this.monitorForm.rotation);

          _monitorForm.append('description', this.monitorForm.description);

          axios.post(_settings_js__WEBPACK_IMPORTED_MODULE_1__["settings"].root_url + '/api/monitors/add-new', _monitorForm).then(function (response) {
            _this6.$toastr.s(_this6.$t('monitors.fields.added_successfully'));

            _this6.getMonitors();
          })["catch"](function (error) {});
        }

        this.monitorForm = this.defaultItem;
        this.editedIndex = -1;
        this.close();
      }
    },
    getMonitors: function getMonitors() {
      var _this7 = this;

      this.isLoading = true;
      var url = _helper_js__WEBPACK_IMPORTED_MODULE_0__["default"].getFilterURL(this.filterForm);
      axios.get(_settings_js__WEBPACK_IMPORTED_MODULE_1__["settings"].root_url + '/api/monitors?' + url).then(function (response) {
        _this7.monitors = response.data.monitors;
        _this7.isLoading = false;
      })["catch"](function (response) {
        _this7.isLoading = false;
      });
    },
    prepareMedia: function prepareMedia(e) {
      var _this8 = this;

      var items = e.target.files || e.dataTransfer.files;

      if (items.length > 0) {
        var mediaForm = new FormData();
        var attachment = items[0];
        mediaForm.append('media', attachment);
        this.isUploading = true;
        this.loading_dialog_text = 'Sto scaricando la Locandina, potrebbero volerci alcuni secondi';
        axios.post(_settings_js__WEBPACK_IMPORTED_MODULE_1__["settings"].root_url + '/api/monitors/upload-redundancy/' + this.editedIndex, mediaForm).then(function (response) {
          _this8.monitorForm.redundancy = response.data.image;
          console.log(_this8.monitorForm.redundancy);
          _this8.isUploading = false;
        })["catch"](function (error) {});
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ImagePreview.vue?vue&type=template&id=45534950&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ImagePreview.vue?vue&type=template&id=45534950& ***!
  \***************************************************************************************************************************************************************************************************************/
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
  return _c("v-img", {
    attrs: {
      src: _vm.src,
      contain: "",
      "max-height": "700",
      "max-width": "900"
    }
  })
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/monitor/index.vue?vue&type=template&id=41f386ee&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/monitor/index.vue?vue&type=template&id=41f386ee& ***!
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
    "v-container",
    { attrs: { fluid: "", "grid-list-md": "" } },
    [
      _c(
        "v-layout",
        [
          _c(
            "v-flex",
            { attrs: { xs12: "", sm6: "", md4: "" } },
            [
              _c("v-select", {
                attrs: {
                  items: _vm.shops,
                  "item-text": "name",
                  "item-value": "id",
                  label: _vm.$t("monitors.fields.shop")
                },
                on: {
                  change: function($event) {
                    return _vm.getMonitors()
                  }
                },
                model: {
                  value: _vm.filterForm.shop_id,
                  callback: function($$v) {
                    _vm.$set(_vm.filterForm, "shop_id", $$v)
                  },
                  expression: "filterForm.shop_id"
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-flex",
            { attrs: { xs12: "", sm6: "", md4: "" } },
            [
              _c("v-select", {
                attrs: {
                  items: _vm.groups,
                  "item-text": "name",
                  "item-value": "id",
                  label: _vm.$t("monitors.fields.groups")
                },
                on: {
                  change: function($event) {
                    return _vm.getMonitors()
                  }
                },
                model: {
                  value: _vm.filterForm.group_id,
                  callback: function($$v) {
                    _vm.$set(_vm.filterForm, "group_id", $$v)
                  },
                  expression: "filterForm.group_id"
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
        "v-toolbar",
        { attrs: { color: "grey lighten-2" } },
        [
          _c("v-toolbar-title", [_vm._v(_vm._s(_vm.$t("labels.monitor")))]),
          _vm._v(" "),
          _c("v-spacer"),
          _vm._v(" "),
          [
            _c(
              "v-dialog",
              {
                attrs: { "hide-overlay": "", persistent: "", width: "300" },
                model: {
                  value: _vm.isUploading,
                  callback: function($$v) {
                    _vm.isUploading = $$v
                  },
                  expression: "isUploading"
                }
              },
              [
                _c(
                  "v-card",
                  { attrs: { color: "primary", dark: "" } },
                  [
                    _c(
                      "v-card-text",
                      [
                        _vm._v(
                          "\n\t\t\t\t\t" +
                            _vm._s(_vm.loading_dialog_text) +
                            "\n\t\t\t\t\t\t"
                        ),
                        _c("v-progress-linear", {
                          staticClass: "mb-0",
                          attrs: { indeterminate: "", color: "white" }
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
              "v-dialog",
              {
                attrs: { "max-width": "700px", persistent: "" },
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
                          _vm.editedIndex == -1
                            ? _c("span", { staticClass: "headline" }, [
                                _vm._v(_vm._s(_vm.$t("monitors.fields.create")))
                              ])
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.editedIndex != -1
                            ? _c("span", { staticClass: "headline" }, [
                                _vm._v(_vm._s(_vm.$t("monitors.fields.edit")))
                              ])
                            : _vm._e()
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
                                      { attrs: { md12: "" } },
                                      [
                                        _c("v-text-field", {
                                          attrs: {
                                            dense: "",
                                            label: _vm.$t(
                                              "monitors.fields.name"
                                            ),
                                            rules: [_vm.rules.required]
                                          },
                                          model: {
                                            value: _vm.monitorForm.name,
                                            callback: function($$v) {
                                              _vm.$set(
                                                _vm.monitorForm,
                                                "name",
                                                $$v
                                              )
                                            },
                                            expression: "monitorForm.name"
                                          }
                                        })
                                      ],
                                      1
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "v-flex",
                                      { attrs: { md12: "" } },
                                      [
                                        _c("v-select", {
                                          attrs: {
                                            items: _vm.shops,
                                            "item-text": "name",
                                            "item-value": "id",
                                            label: _vm.$t(
                                              "monitors.fields.shop"
                                            ),
                                            "persistent-hint": "",
                                            "return-object": "",
                                            rules: [_vm.rules.required]
                                          },
                                          model: {
                                            value: _vm.monitorForm.shop,
                                            callback: function($$v) {
                                              _vm.$set(
                                                _vm.monitorForm,
                                                "shop",
                                                $$v
                                              )
                                            },
                                            expression: "monitorForm.shop"
                                          }
                                        })
                                      ],
                                      1
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "v-flex",
                                      { attrs: { md12: "" } },
                                      [
                                        _c("v-select", {
                                          attrs: {
                                            items: _vm.ratios,
                                            "item-text": "name",
                                            "item-value": "id",
                                            label: _vm.$t(
                                              "monitors.fields.aspectratio"
                                            ),
                                            "persistent-hint": "",
                                            "return-object": "",
                                            rules: [_vm.rules.required]
                                          },
                                          model: {
                                            value: _vm.monitorForm.aspectRatio,
                                            callback: function($$v) {
                                              _vm.$set(
                                                _vm.monitorForm,
                                                "aspectRatio",
                                                $$v
                                              )
                                            },
                                            expression:
                                              "monitorForm.aspectRatio"
                                          }
                                        })
                                      ],
                                      1
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "v-flex",
                                      { attrs: { xs12: "", sm6: "" } },
                                      [
                                        _c("v-select", {
                                          attrs: {
                                            items: _vm.types,
                                            "item-text": "name",
                                            "item-value": "id",
                                            label: _vm.$t(
                                              "monitors.fields.type"
                                            ),
                                            "persistent-hint": "",
                                            "return-object": "",
                                            rules: [_vm.rules.required]
                                          },
                                          model: {
                                            value: _vm.monitorForm.type,
                                            callback: function($$v) {
                                              _vm.$set(
                                                _vm.monitorForm,
                                                "type",
                                                $$v
                                              )
                                            },
                                            expression: "monitorForm.type"
                                          }
                                        })
                                      ],
                                      1
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "v-flex",
                                      { attrs: { xs12: "", sm6: "" } },
                                      [
                                        _c("v-select", {
                                          attrs: {
                                            items: _vm.rotations,
                                            label: _vm.$t(
                                              "monitors.fields.rotation"
                                            ),
                                            rules: [_vm.rules.required]
                                          },
                                          model: {
                                            value: _vm.monitorForm.rotation,
                                            callback: function($$v) {
                                              _vm.$set(
                                                _vm.monitorForm,
                                                "rotation",
                                                $$v
                                              )
                                            },
                                            expression: "monitorForm.rotation"
                                          }
                                        })
                                      ],
                                      1
                                    ),
                                    _vm._v(" "),
                                    _c("v-textarea", {
                                      attrs: {
                                        label: _vm.$t(
                                          "campaign.fields.description"
                                        )
                                      },
                                      model: {
                                        value: _vm.monitorForm.description,
                                        callback: function($$v) {
                                          _vm.$set(
                                            _vm.monitorForm,
                                            "description",
                                            $$v
                                          )
                                        },
                                        expression: "monitorForm.description"
                                      }
                                    }),
                                    _vm._v(" "),
                                    _c(
                                      "v-flex",
                                      {
                                        attrs: { xs12: "", sm12: "", md12: "" }
                                      },
                                      [
                                        _vm._v(
                                          "\n\t\t\t\t\t\t\t\t\t\t" +
                                            _vm._s(
                                              _vm.$t(
                                                "labels.redundancy_description"
                                              )
                                            ) +
                                            "\n\t\t\t\t\t\t\t\t\t"
                                        )
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "v-flex",
                                      {
                                        staticClass: "d-flex align-center",
                                        attrs: { xs12: "", sm12: "", md12: "" }
                                      },
                                      [
                                        _c(
                                          "v-dialog",
                                          {
                                            attrs: { "max-width": "300" },
                                            model: {
                                              value: _vm.redundancyPreview,
                                              callback: function($$v) {
                                                _vm.redundancyPreview = $$v
                                              },
                                              expression: "redundancyPreview"
                                            }
                                          },
                                          [
                                            _vm.monitorForm.redundancy !=
                                              null &&
                                            _vm.monitorForm.redundancy !==
                                              undefined &&
                                            _vm.monitorForm.redundancy.type ==
                                              "image"
                                              ? _c("image-preview", {
                                                  attrs: { src: _vm.previewSrc }
                                                })
                                              : _vm._e()
                                          ],
                                          1
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "label",
                                          {
                                            staticClass: "v-btn primary",
                                            staticStyle: {
                                              padding: "6px 14px",
                                              cursor: "pointer"
                                            }
                                          },
                                          [
                                            _c("input", {
                                              staticStyle: { display: "none" },
                                              attrs: {
                                                type: "file",
                                                name: "media",
                                                id: "media"
                                              },
                                              on: { change: _vm.prepareMedia }
                                            }),
                                            _vm._v(
                                              "\n\t\t\t\t\t\t\t\t            " +
                                                _vm._s(
                                                  _vm.$t("buttons.choose_files")
                                                ) +
                                                "\n\t\t\t\t\t\t\t\t            "
                                            ),
                                            _c(
                                              "v-icon",
                                              {
                                                attrs: { right: "", dark: "" }
                                              },
                                              [_vm._v("cloud_upload")]
                                            )
                                          ],
                                          1
                                        ),
                                        _vm._v(" "),
                                        _vm.monitorForm.redundancy
                                          ? _c(
                                              "div",
                                              {
                                                staticClass: "ml-2",
                                                staticStyle: {
                                                  cursor: "pointer"
                                                },
                                                on: {
                                                  click: function($event) {
                                                    _vm.redundancyPreview = true
                                                  }
                                                }
                                              },
                                              [
                                                _vm._v(
                                                  "\n\t\t\t\t\t\t\t\t        \t" +
                                                    _vm._s(
                                                      _vm.monitorForm.redundancy
                                                        .file
                                                    ) +
                                                    "\n\t\t\t\t\t\t\t\t        "
                                                )
                                              ]
                                            )
                                          : _vm._e()
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
          items: _vm.monitors,
          loading: _vm.isLoading,
          "loading-text": _vm.$t("labels.loading_items"),
          "no-data-text": _vm.$t("labels.no_data"),
          "items-per-page": 100,
          "footer-props": _vm.footer_props,
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

/***/ "./resources/js/components/ImagePreview.vue":
/*!**************************************************!*\
  !*** ./resources/js/components/ImagePreview.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ImagePreview_vue_vue_type_template_id_45534950___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ImagePreview.vue?vue&type=template&id=45534950& */ "./resources/js/components/ImagePreview.vue?vue&type=template&id=45534950&");
/* harmony import */ var _ImagePreview_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ImagePreview.vue?vue&type=script&lang=js& */ "./resources/js/components/ImagePreview.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ImagePreview_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ImagePreview_vue_vue_type_template_id_45534950___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ImagePreview_vue_vue_type_template_id_45534950___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/ImagePreview.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/ImagePreview.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/components/ImagePreview.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ImagePreview_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./ImagePreview.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ImagePreview.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ImagePreview_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/ImagePreview.vue?vue&type=template&id=45534950&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/ImagePreview.vue?vue&type=template&id=45534950& ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ImagePreview_vue_vue_type_template_id_45534950___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./ImagePreview.vue?vue&type=template&id=45534950& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ImagePreview.vue?vue&type=template&id=45534950&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ImagePreview_vue_vue_type_template_id_45534950___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ImagePreview_vue_vue_type_template_id_45534950___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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

/***/ "./resources/js/views/monitor/index.vue":
/*!**********************************************!*\
  !*** ./resources/js/views/monitor/index.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_41f386ee___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=41f386ee& */ "./resources/js/views/monitor/index.vue?vue&type=template&id=41f386ee&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/js/views/monitor/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_41f386ee___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_41f386ee___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/monitor/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/monitor/index.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/views/monitor/index.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/monitor/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/monitor/index.vue?vue&type=template&id=41f386ee&":
/*!*****************************************************************************!*\
  !*** ./resources/js/views/monitor/index.vue?vue&type=template&id=41f386ee& ***!
  \*****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_41f386ee___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=41f386ee& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/monitor/index.vue?vue&type=template&id=41f386ee&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_41f386ee___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_41f386ee___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);