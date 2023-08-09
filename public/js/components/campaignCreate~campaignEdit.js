(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["campaignCreate~campaignEdit"],{

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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/VideoCampaignForm.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/VideoCampaignForm.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  props: ['item', 'groups', 'monitors', 'shops'],
  data: function data() {
    var _this = this;

    return {
      valid: false,
      date1: this.item.date1,
      date2: this.item.date2,
      menu_date_start: false,
      menu_time_start: false,
      menu_date_end: false,
      menu_time_end: false,
      local_item: Object.assign({}, this.item),
      monitor_ids: [],
      date1Rules: [function (v) {
        return !!v || _this.$t('labels.start_date_required');
      }],
      date2Rules: [function (v) {
        return !!v || _this.$t('labels.start_date_required');
      }],
      daysRule: [function (v) {
        return v.length > 0 || _this.$t('labels.no_days');
      }]
    };
  },
  watch: {
    item: function item(obj) {
      var self = this;
      self.local_item = Object.assign({}, obj);
      self.local_item.duration = parseInt(obj.duration);
      self.date2 = obj.date2;
      self.date1 = obj.date1;
      self.local_item.groups = self.groups.filter(function (group) {
        if (!self.local_item.group_ids) return false;
        return self.local_item.group_ids.split(',').map(Number).includes(group.id) === true;
      });
      if (this.local_item.monitor_ids) this.monitor_ids = this.local_item.monitor_ids.split(',').map(Number);
      self.shops.map(function (shop) {
        self.changeMonitorSelection(shop);
      });
    },
    // remove unwanted 0 in array
    monitor_ids: function monitor_ids(val) {
      var self = this;
      this.monitor_ids.forEach(function (monitor_id, index) {
        if (monitor_id === 0) self.monitor_ids.splice(index, 1);
      });
    },
    date1: function date1(val) {
      this.local_item.start_date = _helper_js__WEBPACK_IMPORTED_MODULE_1__["default"].formatDate(this.date1);
    },
    date2: function date2(val) {
      this.local_item.end_date = _helper_js__WEBPACK_IMPORTED_MODULE_1__["default"].formatDate(this.date2);
    }
  },
  computed: {
    availableGroups: function availableGroups() {
      var self = this;
      return this.groups.filter(function (group) {
        return group.aspect_ratio_id == self.local_item.aspect_ratio_id && group.group_type_id == self.local_item.group_type_id;
      });
    },
    days: function days() {
      return _helper_js__WEBPACK_IMPORTED_MODULE_1__["default"].h_getDays();
    },
    color: function color() {
      if (!this.local_item.days) return '';else if (this.local_item.days.length > 0) return 'indigo darken-4';else return '';
    },
    isAll: function isAll() {
      if (!this.local_item.days) return false;else return this.local_item.days.length === this.days.length;
    },
    isSome: function isSome() {
      if (!this.local_item.days) return false;else return this.local_item.days.length > 0 && !this.isAll;
    },
    icon: function icon() {
      if (this.isAll) return 'mdi-close-box';
      if (this.isSome) return 'mdi-minus-box';
      return 'mdi-checkbox-blank-outline';
    }
  },
  created: function created() {
    this.init();
  },
  methods: {
    init: function init() {
      var self = this;
      self.local_item.groups = self.groups.filter(function (group) {
        if (!self.local_item.group_ids) return false;else return self.local_item.group_ids.split(',').map(Number).includes(group.id) === true;
      });
      if (this.local_item.monitor_ids) this.monitor_ids = this.local_item.monitor_ids.split(',').map(Number);
      self.shops.map(function (shop) {
        self.changeMonitorSelection(shop);
      });
    },
    onCancel: function onCancel() {
      this.$emit("cancel");
    },
    save: function save() {
      var _this2 = this;

      if (this.$refs.form.validate()) {
        if (this.local_item.is_new) {
          this.local_item.monitor_ids = this.monitor_ids;
          this.$emit("saveNew", this.local_item);
        } else {
          if (this.local_item.media_type === 'video') var url = _settings_js__WEBPACK_IMPORTED_MODULE_0__["settings"].root_url + '/api/videos/update/' + this.local_item.editedIndex;else if (this.local_item.media_type === 'image') var url = _settings_js__WEBPACK_IMPORTED_MODULE_0__["settings"].root_url + '/api/images/update/' + this.local_item.editedIndex;else if (this.local_item.media_type === 'poster') var url = _settings_js__WEBPACK_IMPORTED_MODULE_0__["settings"].root_url + '/api/posters/update/' + this.local_item.editedIndex;
          axios.post(url, {
            start_date: this.date1,
            start_time: this.local_item.start_time,
            end_date: this.date2,
            end_time: this.local_item.end_time,
            days: this.local_item.days.toString(),
            duration: this.local_item.duration,
            group_ids: this.local_item.groups.map(function (el) {
              return el.id;
            }).toString(),
            monitor_ids: this.monitor_ids.toString()
          }).then(function (response) {
            _this2.$emit("save");
          })["catch"](function (error) {
            console.log(error);
          });
        }
      }
    },
    deleteItem: function deleteItem() {
      var _this3 = this;

      if (this.local_item.is_new) {// this.local_item.monitor_ids = this.monitor_ids;
        // this.$emit("saveNew", this.local_item);
      } else {
        if (this.local_item.media_type === 'video') var url = _settings_js__WEBPACK_IMPORTED_MODULE_0__["settings"].root_url + '/api/videos/delete/' + this.local_item.editedIndex;else if (this.local_item.media_type === 'image') var url = _settings_js__WEBPACK_IMPORTED_MODULE_0__["settings"].root_url + '/api/images/delete/' + this.local_item.editedIndex;else if (this.local_item.media_type === 'poster') var url = _settings_js__WEBPACK_IMPORTED_MODULE_0__["settings"].root_url + '/api/posters/delete/' + this.local_item.editedIndex;
        var r = confirm('Are you sure you want to delete this item?');

        if (r == true) {
          axios.post(url).then(function (response) {
            _this3.$emit("deleteItem");
          })["catch"](function (error) {});
        }
      }
    },
    parseDate: function parseDate(date) {
      return _helper_js__WEBPACK_IMPORTED_MODULE_1__["default"].parseDate(date);
    },
    shopMonitors: function shopMonitors(shop) {
      var self = this;
      return this.monitors.filter(function (monitor) {
        return monitor.shop_id == shop.id && monitor.aspect_ratio_id == self.local_item.aspect_ratio_id && monitor.type_id == self.local_item.group_type_id;
      });
    },
    toggleShopSelection: function toggleShopSelection(shop) {
      var self = this;

      if (shop.is_selected) {
        var monitor_ids_ = self.monitor_ids.concat(self.shopMonitors(shop).map(function (el) {
          return el.id;
        }));
        self.monitor_ids = monitor_ids_.filter(function (item, pos) {
          return monitor_ids_.indexOf(item) == pos;
        });
      } else {
        self.monitor_ids = self.monitor_ids.filter(function (monitor_id) {
          return self.shopMonitors(shop).map(function (el) {
            return el.id;
          }).includes(monitor_id) === false;
        });
      }
    },
    changeMonitorSelection: function changeMonitorSelection(shop) {
      var self = this;
      shop.is_selected = this.shopMonitors(shop).every(function (monitor) {
        return self.monitor_ids.includes(monitor.id);
      }) === true; // shop.is_selected = this.shopMonitors(shop).length <= this.monitor_ids.length;
    },
    toggle: function toggle() {
      var _this4 = this;

      this.$nextTick(function () {
        if (_this4.isAll) {
          _this4.local_item.days = [];
        } else {
          _this4.local_item.days = _this4.days.slice();
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/VideoPreview.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/VideoPreview.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/VideoCampaignForm.vue?vue&type=template&id=46642fb4&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/VideoCampaignForm.vue?vue&type=template&id=46642fb4& ***!
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
        { staticClass: "align-space-between" },
        [
          _c("v-card-title", { staticClass: "d-block" }, [
            _c("div", { staticClass: "headline" }, [
              _vm._v(_vm._s(_vm.$t("labels.edit_media")))
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "subtitle-1 text-center mt-2" }, [
              _vm._v(_vm._s(_vm.item.original))
            ])
          ]),
          _vm._v(" "),
          _c(
            "v-card-text",
            [
              _c(
                "v-container",
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
                        "v-layout",
                        { attrs: { wrap: "" } },
                        [
                          _c(
                            "v-flex",
                            { attrs: { xs6: "", sm3: "", md3: "" } },
                            [
                              _c(
                                "v-menu",
                                {
                                  attrs: {
                                    "close-on-content-click": true,
                                    "offset-y": ""
                                  },
                                  scopedSlots: _vm._u([
                                    {
                                      key: "activator",
                                      fn: function(ref) {
                                        var on = ref.on
                                        return [
                                          _c(
                                            "v-layout",
                                            {
                                              staticStyle: {
                                                "max-width": "160px"
                                              },
                                              attrs: { "align-center": "" }
                                            },
                                            [
                                              _c(
                                                "v-btn",
                                                _vm._g(
                                                  { attrs: { icon: "" } },
                                                  on
                                                ),
                                                [
                                                  _c("v-icon", [
                                                    _vm._v("event")
                                                  ])
                                                ],
                                                1
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "v-text-field",
                                                _vm._g(
                                                  {
                                                    attrs: {
                                                      label: _vm.$t(
                                                        "labels.start_date"
                                                      ),
                                                      readonly: "",
                                                      rules: _vm.date1Rules
                                                    },
                                                    on: {
                                                      blur: function($event) {
                                                        _vm.date1 = _vm.parseDate(
                                                          _vm.local_item
                                                            .start_date
                                                        )
                                                      }
                                                    },
                                                    model: {
                                                      value:
                                                        _vm.local_item
                                                          .start_date,
                                                      callback: function($$v) {
                                                        _vm.$set(
                                                          _vm.local_item,
                                                          "start_date",
                                                          $$v
                                                        )
                                                      },
                                                      expression:
                                                        "local_item.start_date"
                                                    }
                                                  },
                                                  on
                                                )
                                              )
                                            ],
                                            1
                                          )
                                        ]
                                      }
                                    }
                                  ]),
                                  model: {
                                    value: _vm.menu_date_start,
                                    callback: function($$v) {
                                      _vm.menu_date_start = $$v
                                    },
                                    expression: "menu_date_start"
                                  }
                                },
                                [
                                  _vm._v(" "),
                                  _c("v-date-picker", {
                                    attrs: { locale: "it" },
                                    model: {
                                      value: _vm.date1,
                                      callback: function($$v) {
                                        _vm.date1 = $$v
                                      },
                                      expression: "date1"
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
                            { attrs: { xs6: "", sm3: "", md3: "" } },
                            [
                              _c(
                                "v-menu",
                                {
                                  attrs: {
                                    "close-on-content-click": false,
                                    "offset-y": ""
                                  },
                                  scopedSlots: _vm._u([
                                    {
                                      key: "activator",
                                      fn: function(ref) {
                                        var on = ref.on
                                        return [
                                          _c(
                                            "v-layout",
                                            {
                                              staticStyle: {
                                                "max-width": "160px"
                                              },
                                              attrs: { "align-center": "" }
                                            },
                                            [
                                              _c(
                                                "v-btn",
                                                _vm._g(
                                                  { attrs: { icon: "" } },
                                                  on
                                                ),
                                                [
                                                  _c("v-icon", [
                                                    _vm._v("access_time")
                                                  ])
                                                ],
                                                1
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "v-text-field",
                                                _vm._g(
                                                  {
                                                    attrs: {
                                                      label: _vm.$t(
                                                        "labels.start_time"
                                                      ),
                                                      readonly: ""
                                                    },
                                                    model: {
                                                      value:
                                                        _vm.local_item
                                                          .start_time,
                                                      callback: function($$v) {
                                                        _vm.$set(
                                                          _vm.local_item,
                                                          "start_time",
                                                          $$v
                                                        )
                                                      },
                                                      expression:
                                                        "local_item.start_time"
                                                    }
                                                  },
                                                  on
                                                )
                                              )
                                            ],
                                            1
                                          )
                                        ]
                                      }
                                    }
                                  ]),
                                  model: {
                                    value: _vm.menu_time_start,
                                    callback: function($$v) {
                                      _vm.menu_time_start = $$v
                                    },
                                    expression: "menu_time_start"
                                  }
                                },
                                [
                                  _vm._v(" "),
                                  _c("v-time-picker", {
                                    model: {
                                      value: _vm.local_item.start_time,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.local_item,
                                          "start_time",
                                          $$v
                                        )
                                      },
                                      expression: "local_item.start_time"
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
                            { attrs: { xs6: "", sm3: "", md3: "" } },
                            [
                              _c(
                                "v-menu",
                                {
                                  attrs: {
                                    "close-on-content-click": true,
                                    "offset-y": ""
                                  },
                                  scopedSlots: _vm._u([
                                    {
                                      key: "activator",
                                      fn: function(ref) {
                                        var on = ref.on
                                        return [
                                          _c(
                                            "v-layout",
                                            {
                                              staticStyle: {
                                                "max-width": "160px"
                                              },
                                              attrs: { "align-center": "" }
                                            },
                                            [
                                              _c(
                                                "v-btn",
                                                _vm._g(
                                                  { attrs: { icon: "" } },
                                                  on
                                                ),
                                                [
                                                  _c("v-icon", [
                                                    _vm._v("event")
                                                  ])
                                                ],
                                                1
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "v-text-field",
                                                _vm._g(
                                                  {
                                                    attrs: {
                                                      label: _vm.$t(
                                                        "labels.end_date"
                                                      ),
                                                      readonly: "",
                                                      rules: _vm.date2Rules
                                                    },
                                                    on: {
                                                      blur: function($event) {
                                                        _vm.date2 = _vm.parseDate(
                                                          _vm.local_item
                                                            .end_date
                                                        )
                                                      }
                                                    },
                                                    model: {
                                                      value:
                                                        _vm.local_item.end_date,
                                                      callback: function($$v) {
                                                        _vm.$set(
                                                          _vm.local_item,
                                                          "end_date",
                                                          $$v
                                                        )
                                                      },
                                                      expression:
                                                        "local_item.end_date"
                                                    }
                                                  },
                                                  on
                                                )
                                              )
                                            ],
                                            1
                                          )
                                        ]
                                      }
                                    }
                                  ]),
                                  model: {
                                    value: _vm.menu_date_end,
                                    callback: function($$v) {
                                      _vm.menu_date_end = $$v
                                    },
                                    expression: "menu_date_end"
                                  }
                                },
                                [
                                  _vm._v(" "),
                                  _c("v-date-picker", {
                                    attrs: { locale: "it" },
                                    model: {
                                      value: _vm.date2,
                                      callback: function($$v) {
                                        _vm.date2 = $$v
                                      },
                                      expression: "date2"
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
                            { attrs: { xs6: "", sm3: "", md3: "" } },
                            [
                              _c(
                                "v-menu",
                                {
                                  attrs: {
                                    "close-on-content-click": false,
                                    "offset-y": ""
                                  },
                                  scopedSlots: _vm._u([
                                    {
                                      key: "activator",
                                      fn: function(ref) {
                                        var on = ref.on
                                        return [
                                          _c(
                                            "v-layout",
                                            {
                                              staticStyle: {
                                                "max-width": "160px"
                                              },
                                              attrs: { "align-center": "" }
                                            },
                                            [
                                              _c(
                                                "v-btn",
                                                _vm._g(
                                                  { attrs: { icon: "" } },
                                                  on
                                                ),
                                                [
                                                  _c("v-icon", [
                                                    _vm._v("access_time")
                                                  ])
                                                ],
                                                1
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "v-text-field",
                                                _vm._g(
                                                  {
                                                    attrs: {
                                                      label: _vm.$t(
                                                        "labels.end_time"
                                                      ),
                                                      readonly: ""
                                                    },
                                                    model: {
                                                      value:
                                                        _vm.local_item.end_time,
                                                      callback: function($$v) {
                                                        _vm.$set(
                                                          _vm.local_item,
                                                          "end_time",
                                                          $$v
                                                        )
                                                      },
                                                      expression:
                                                        "local_item.end_time"
                                                    }
                                                  },
                                                  on
                                                )
                                              )
                                            ],
                                            1
                                          )
                                        ]
                                      }
                                    }
                                  ]),
                                  model: {
                                    value: _vm.menu_time_end,
                                    callback: function($$v) {
                                      _vm.menu_time_end = $$v
                                    },
                                    expression: "menu_time_end"
                                  }
                                },
                                [
                                  _vm._v(" "),
                                  _c("v-time-picker", {
                                    model: {
                                      value: _vm.local_item.end_time,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.local_item,
                                          "end_time",
                                          $$v
                                        )
                                      },
                                      expression: "local_item.end_time"
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
                            { attrs: { xs12: "", sm12: "", md6: "" } },
                            [
                              _c("v-text-field", {
                                staticStyle: { width: "100px" },
                                attrs: {
                                  label: _vm.$t("videos.fields.duration"),
                                  readonly:
                                    _vm.local_item.media_type == "video",
                                  type: "number"
                                },
                                model: {
                                  value: _vm.local_item.duration,
                                  callback: function($$v) {
                                    _vm.$set(_vm.local_item, "duration", $$v)
                                  },
                                  expression: "local_item.duration"
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
                              _c("v-select", {
                                attrs: {
                                  items: _vm.days,
                                  attach: "",
                                  chips: "",
                                  label: _vm.$t("labels.days"),
                                  multiple: "",
                                  rules: _vm.daysRule
                                },
                                scopedSlots: _vm._u([
                                  {
                                    key: "prepend-item",
                                    fn: function() {
                                      return [
                                        _c(
                                          "v-list-item",
                                          {
                                            attrs: { ripple: "" },
                                            on: {
                                              click: function($event) {
                                                return _vm.toggle()
                                              }
                                            }
                                          },
                                          [
                                            _c(
                                              "v-list-item-action",
                                              [
                                                _c(
                                                  "v-icon",
                                                  {
                                                    attrs: { color: _vm.color }
                                                  },
                                                  [_vm._v(_vm._s(_vm.icon))]
                                                )
                                              ],
                                              1
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "v-list-item-content",
                                              [
                                                _c("v-list-item-title", [
                                                  _vm._v("Select All")
                                                ])
                                              ],
                                              1
                                            )
                                          ],
                                          1
                                        ),
                                        _vm._v(" "),
                                        _c("v-divider", { staticClass: "mt-2" })
                                      ]
                                    },
                                    proxy: true
                                  }
                                ]),
                                model: {
                                  value: _vm.local_item.days,
                                  callback: function($$v) {
                                    _vm.$set(_vm.local_item, "days", $$v)
                                  },
                                  expression: "local_item.days"
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-flex",
                            { attrs: { xs12: "", sm3: "", md3: "" } },
                            [
                              _vm.local_item.file_type == "image"
                                ? _c("v-text-field", {
                                    attrs: {
                                      label: _vm.$t("images.fields.duration")
                                    },
                                    model: {
                                      value: _vm.local_item.duration,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.local_item,
                                          "duration",
                                          $$v
                                        )
                                      },
                                      expression: "local_item.duration"
                                    }
                                  })
                                : _vm._e()
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _vm.local_item.by_monitor == "0"
                            ? _c(
                                "v-flex",
                                { attrs: { xs12: "", sm12: "", md12: "" } },
                                [
                                  _c(
                                    "v-select",
                                    {
                                      attrs: {
                                        items: _vm.availableGroups,
                                        "item-text": "name",
                                        "item-value": "id",
                                        attach: "",
                                        chips: "",
                                        label: _vm.$t("groups.fields.groups"),
                                        "return-object": "",
                                        multiple: ""
                                      },
                                      model: {
                                        value: _vm.local_item.groups,
                                        callback: function($$v) {
                                          _vm.$set(
                                            _vm.local_item,
                                            "groups",
                                            $$v
                                          )
                                        },
                                        expression: "local_item.groups"
                                      }
                                    },
                                    [
                                      _c(
                                        "v-list-item",
                                        {
                                          attrs: { slot: "no-data" },
                                          slot: "no-data"
                                        },
                                        [
                                          _vm._v(
                                            _vm._s(
                                              _vm.$t("labels.no_data_available")
                                            )
                                          )
                                        ]
                                      )
                                    ],
                                    1
                                  )
                                ],
                                1
                              )
                            : _c(
                                "v-flex",
                                { attrs: { xs12: "", sm12: "", md12: "" } },
                                [
                                  _c(
                                    "v-layout",
                                    { attrs: { row: "", wrap: "" } },
                                    _vm._l(_vm.shops, function(shop) {
                                      return _c(
                                        "v-layout",
                                        {
                                          key: shop.id,
                                          staticClass: "my-2",
                                          attrs: { column: "" }
                                        },
                                        [
                                          _vm.shopMonitors(shop).length != 0
                                            ? _c("v-checkbox", {
                                                staticStyle: {
                                                  "font-weight": "bold",
                                                  "margin-bottom": "-20px"
                                                },
                                                attrs: { label: shop.name },
                                                on: {
                                                  change: function($event) {
                                                    return _vm.toggleShopSelection(
                                                      shop
                                                    )
                                                  }
                                                },
                                                model: {
                                                  value: shop.is_selected,
                                                  callback: function($$v) {
                                                    _vm.$set(
                                                      shop,
                                                      "is_selected",
                                                      $$v
                                                    )
                                                  },
                                                  expression: "shop.is_selected"
                                                }
                                              })
                                            : _vm._e(),
                                          _vm._v(" "),
                                          _vm._l(
                                            _vm.shopMonitors(shop),
                                            function(monitor) {
                                              return _c("v-checkbox", {
                                                key: monitor.id,
                                                staticStyle: {
                                                  "padding-left": "10px",
                                                  "margin-bottom": "-32px"
                                                },
                                                attrs: {
                                                  label: monitor.name,
                                                  value: monitor.id
                                                },
                                                on: {
                                                  change: function($event) {
                                                    return _vm.changeMonitorSelection(
                                                      shop
                                                    )
                                                  }
                                                },
                                                model: {
                                                  value: _vm.monitor_ids,
                                                  callback: function($$v) {
                                                    _vm.monitor_ids = $$v
                                                  },
                                                  expression: "monitor_ids"
                                                }
                                              })
                                            }
                                          )
                                        ],
                                        2
                                      )
                                    }),
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
          ),
          _vm._v(" "),
          _c(
            "v-card-actions",
            { staticClass: "mt-10" },
            [
              _c(
                "v-container",
                [
                  _c(
                    "v-layout",
                    [
                      _c(
                        "v-btn",
                        {
                          attrs: { color: "red", dark: "" },
                          on: {
                            click: function($event) {
                              return _vm.deleteItem()
                            }
                          }
                        },
                        [_vm._v(_vm._s(_vm.$t("buttons.delete")))]
                      ),
                      _vm._v(" "),
                      _c("v-spacer"),
                      _vm._v(" "),
                      _c("v-btn", { on: { click: _vm.onCancel } }, [
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
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/VideoPreview.vue?vue&type=template&id=00568790&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/VideoPreview.vue?vue&type=template&id=00568790& ***!
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
  return _c("video", {
    attrs: {
      width: "640",
      height: "480",
      controls: "",
      autoplay: "",
      muted: "",
      loop: "",
      src: _vm.src
    },
    domProps: { muted: true }
  })
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

/***/ "./resources/js/components/VideoCampaignForm.vue":
/*!*******************************************************!*\
  !*** ./resources/js/components/VideoCampaignForm.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _VideoCampaignForm_vue_vue_type_template_id_46642fb4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VideoCampaignForm.vue?vue&type=template&id=46642fb4& */ "./resources/js/components/VideoCampaignForm.vue?vue&type=template&id=46642fb4&");
/* harmony import */ var _VideoCampaignForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./VideoCampaignForm.vue?vue&type=script&lang=js& */ "./resources/js/components/VideoCampaignForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _VideoCampaignForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _VideoCampaignForm_vue_vue_type_template_id_46642fb4___WEBPACK_IMPORTED_MODULE_0__["render"],
  _VideoCampaignForm_vue_vue_type_template_id_46642fb4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/VideoCampaignForm.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/VideoCampaignForm.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/VideoCampaignForm.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VideoCampaignForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./VideoCampaignForm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/VideoCampaignForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VideoCampaignForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/VideoCampaignForm.vue?vue&type=template&id=46642fb4&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/VideoCampaignForm.vue?vue&type=template&id=46642fb4& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VideoCampaignForm_vue_vue_type_template_id_46642fb4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./VideoCampaignForm.vue?vue&type=template&id=46642fb4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/VideoCampaignForm.vue?vue&type=template&id=46642fb4&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VideoCampaignForm_vue_vue_type_template_id_46642fb4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VideoCampaignForm_vue_vue_type_template_id_46642fb4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/VideoPreview.vue":
/*!**************************************************!*\
  !*** ./resources/js/components/VideoPreview.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _VideoPreview_vue_vue_type_template_id_00568790___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VideoPreview.vue?vue&type=template&id=00568790& */ "./resources/js/components/VideoPreview.vue?vue&type=template&id=00568790&");
/* harmony import */ var _VideoPreview_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./VideoPreview.vue?vue&type=script&lang=js& */ "./resources/js/components/VideoPreview.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _VideoPreview_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _VideoPreview_vue_vue_type_template_id_00568790___WEBPACK_IMPORTED_MODULE_0__["render"],
  _VideoPreview_vue_vue_type_template_id_00568790___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/VideoPreview.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/VideoPreview.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/components/VideoPreview.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VideoPreview_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./VideoPreview.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/VideoPreview.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VideoPreview_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/VideoPreview.vue?vue&type=template&id=00568790&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/VideoPreview.vue?vue&type=template&id=00568790& ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VideoPreview_vue_vue_type_template_id_00568790___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./VideoPreview.vue?vue&type=template&id=00568790& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/VideoPreview.vue?vue&type=template&id=00568790&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VideoPreview_vue_vue_type_template_id_00568790___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VideoPreview_vue_vue_type_template_id_00568790___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);