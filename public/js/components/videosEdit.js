(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["videosEdit"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Weekdays.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Weekdays.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _helper_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helper.js */ "./resources/js/helper.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  props: ['value'],
  data: function data() {
    return {};
  },
  computed: {
    // localValue(){
    //   return this.value
    // },
    weekDays: function weekDays() {
      return _helper_js__WEBPACK_IMPORTED_MODULE_0__["default"].h_getDays();
    }
  },
  methods: {
    updateDays: function updateDays() {
      console.log(this.$refs.daysComponent); // console.log(this.$refs.daysComponent.value)
      // this.$emit('input', this.$refs.daysComponent.value)
    } // toggle () {
    //   this.$nextTick(() => {
    //     if (this.allDays) {
    //       this.campaignForm.days = []
    //     } else {
    //       this.campaignForm.days = this.days.slice()
    //     }
    //   })
    // },

  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/videos/edit.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/videos/edit.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _settings_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../settings.js */ "./resources/js/settings.js");
/* harmony import */ var _helper_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helper.js */ "./resources/js/helper.js");
/* harmony import */ var _components_Weekdays_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Weekdays.vue */ "./resources/js/components/Weekdays.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    Weekdays: _components_Weekdays_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      valid: false,
      name: '',
      date1: '',
      date2: '',
      menu_date_start: false,
      menu_time_start: false,
      menu_date_end: false,
      menu_time_end: false,
      src: '',
      videoForm: {
        video: '',
        start_date: '',
        days: [],
        start_time: '',
        end_date: '',
        end_time: '',
        duration: '',
        groups: []
      },
      availableGroups: [],
      groups: [],
      date1Rules: [function (v) {
        return !!v || 'Start Date is required';
      }],
      date2Rules: [function (v) {
        return !!v || 'End Date is required';
      }],
      daysRule: [function (v) {
        return v.length > 0 || 'Days is required';
      }]
    };
  },
  computed: {
    days: function days() {
      return _helper_js__WEBPACK_IMPORTED_MODULE_1__["default"].h_getDays();
    },
    isAll: function isAll() {
      return this.videoForm.days.length === this.days.length;
    },
    isSome: function isSome() {
      return this.videoForm.days.length > 0 && !this.isAll;
    },
    icon: function icon() {
      if (this.isAll) return 'mdi-close-box';
      if (this.isSome) return 'mdi-minus-box';
      return 'mdi-checkbox-blank-outline';
    }
  },
  watch: {
    date1: function date1(val) {
      this.videoForm.start_date = _helper_js__WEBPACK_IMPORTED_MODULE_1__["default"].formatDate(this.date1);
    },
    date2: function date2(val) {
      this.videoForm.end_date = _helper_js__WEBPACK_IMPORTED_MODULE_1__["default"].formatDate(this.date2);
    }
  },
  created: function created() {
    this.getVideo(this.$route.params.id);
  },
  methods: {
    getVideo: function getVideo(id) {
      var _this = this;

      axios.get(_settings_js__WEBPACK_IMPORTED_MODULE_0__["settings"].root_url + '/api/videos/' + id).then(function (response) {
        var video = response.data.video;
        _this.date1 = video.start_date;
        _this.videoForm.start_date = _helper_js__WEBPACK_IMPORTED_MODULE_1__["default"].formatDate(video.start_date);
        _this.videoForm.start_time = video.start_time;
        _this.date2 = video.end_date;
        _this.videoForm.end_date = _helper_js__WEBPACK_IMPORTED_MODULE_1__["default"].formatDate(video.end_date);
        _this.videoForm.end_time = video.end_time;
        _this.videoForm.video = video.video;
        _this.videoForm.duration = video.duration;
        _this.videoForm.days = video.days.split(',');
        _this.src = _settings_js__WEBPACK_IMPORTED_MODULE_0__["settings"].root_url + '/media/videos/' + _this.videoForm.video;
        _this.groups = response.data.groups;
        _this.videoForm.groups = _this.getVideoGroups(video);
        _this.name = video.original;
        var self = _this;
        _this.availableGroups = _this.groups.filter(function (group) {
          return group.aspect_ratio_id == video.aspect_ratio_id && group.group_type_id == video.group_type_id;
        });
      })["catch"](function (response) {
        console.log(response);
      });
    },
    getVideoGroups: function getVideoGroups(video) {
      return this.groups.filter(function (group) {
        return video.group_ids.includes(group.id) == true;
      });
    },
    deleteVideo: function deleteVideo() {
      var _this2 = this;

      var r = confirm(this.$t('videos.fields.delete_confirm'));

      if (r == true) {
        axios.post(_settings_js__WEBPACK_IMPORTED_MODULE_0__["settings"].root_url + '/api/videos/delete/' + this.$route.params.id).then(function (response) {
          _this2.$router.push({
            name: 'videos'
          });
        })["catch"](function (error) {});
      }
    },
    update: function update() {
      var _this3 = this;

      axios.post(_settings_js__WEBPACK_IMPORTED_MODULE_0__["settings"].root_url + '/api/videos/update/' + this.$route.params.id, {
        start_date: this.date1,
        start_time: this.videoForm.start_time,
        end_date: this.date2,
        end_time: this.videoForm.end_time,
        duration: this.videoForm.duration,
        days: this.videoForm.days.toString(),
        group_ids: this.videoForm.groups.map(function (group) {
          return group.id;
        }).toString()
      }).then(function (response) {
        _this3.$router.push({
          name: 'videos'
        });
      })["catch"](function (error) {});
    },
    parseDate: function parseDate(date) {
      return _helper_js__WEBPACK_IMPORTED_MODULE_1__["default"].parseDate(date);
    },
    toggle: function toggle() {
      var _this4 = this;

      this.$nextTick(function () {
        if (_this4.isAll) {
          _this4.videoForm.days = [];
        } else {
          _this4.videoForm.days = _this4.days.slice();
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Weekdays.vue?vue&type=template&id=39ba6e36&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Weekdays.vue?vue&type=template&id=39ba6e36& ***!
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
  return _c("v-select", {
    ref: "daysComponent",
    attrs: {
      value: _vm.value,
      items: _vm.weekDays,
      attach: "",
      chips: "",
      label: _vm.$t("campaign.fields.days"),
      multiple: ""
    },
    on: {
      input: function($event) {
        return _vm.updateDays()
      }
    }
  })
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/videos/edit.vue?vue&type=template&id=0036e9b2&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/videos/edit.vue?vue&type=template&id=0036e9b2& ***!
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
                  _vm._v(_vm._s(_vm.$t("videos.fields.edit")))
                ])
              ]),
              _vm._v(" "),
              _c(
                "v-card-text",
                [
                  _c(
                    "v-container",
                    { attrs: { fluid: "", "grid-list-md": "" } },
                    [
                      _c(
                        "div",
                        { staticClass: "subtitle-1 text-center mt-2" },
                        [_vm._v(_vm._s(_vm.name))]
                      ),
                      _vm._v(" "),
                      _c(
                        "v-layout",
                        { attrs: { wrap: "" } },
                        [
                          _c(
                            "v-flex",
                            { attrs: { xs12: "", sm12: "", md12: "" } },
                            [
                              _c("video", {
                                attrs: {
                                  width: "320",
                                  height: "240",
                                  controls: "",
                                  src: _vm.src
                                }
                              })
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "v-flex",
                            { attrs: { md6: "" } },
                            [
                              _c(
                                "v-menu",
                                {
                                  attrs: { "close-on-content-click": false },
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
                                                          _vm.videoForm
                                                            .start_date
                                                        )
                                                      }
                                                    },
                                                    model: {
                                                      value:
                                                        _vm.videoForm
                                                          .start_date,
                                                      callback: function($$v) {
                                                        _vm.$set(
                                                          _vm.videoForm,
                                                          "start_date",
                                                          $$v
                                                        )
                                                      },
                                                      expression:
                                                        "videoForm.start_date"
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
                                    on: {
                                      input: function($event) {
                                        _vm.menu_date_start = false
                                      }
                                    },
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
                              ),
                              _vm._v(" "),
                              _c(
                                "v-menu",
                                {
                                  attrs: { "close-on-content-click": false },
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
                                                        _vm.videoForm
                                                          .start_time,
                                                      callback: function($$v) {
                                                        _vm.$set(
                                                          _vm.videoForm,
                                                          "start_time",
                                                          $$v
                                                        )
                                                      },
                                                      expression:
                                                        "videoForm.start_time"
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
                                      value: _vm.videoForm.start_time,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.videoForm,
                                          "start_time",
                                          $$v
                                        )
                                      },
                                      expression: "videoForm.start_time"
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
                            { attrs: { md6: "" } },
                            [
                              _c(
                                "v-menu",
                                {
                                  attrs: { "close-on-content-click": false },
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
                                                      readonly: ""
                                                    },
                                                    on: {
                                                      blur: function($event) {
                                                        _vm.date2 = _vm.parseDate(
                                                          _vm.videoForm.end_date
                                                        )
                                                      }
                                                    },
                                                    model: {
                                                      value:
                                                        _vm.videoForm.end_date,
                                                      callback: function($$v) {
                                                        _vm.$set(
                                                          _vm.videoForm,
                                                          "end_date",
                                                          $$v
                                                        )
                                                      },
                                                      expression:
                                                        "videoForm.end_date"
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
                                    on: {
                                      input: function($event) {
                                        _vm.menu_date_end = false
                                      }
                                    },
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
                              ),
                              _vm._v(" "),
                              _c(
                                "v-menu",
                                {
                                  attrs: { "close-on-content-click": false },
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
                                                        _vm.videoForm.end_time,
                                                      callback: function($$v) {
                                                        _vm.$set(
                                                          _vm.videoForm,
                                                          "end_time",
                                                          $$v
                                                        )
                                                      },
                                                      expression:
                                                        "videoForm.end_time"
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
                                      value: _vm.videoForm.end_time,
                                      callback: function($$v) {
                                        _vm.$set(_vm.videoForm, "end_time", $$v)
                                      },
                                      expression: "videoForm.end_time"
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
                            { attrs: { xs12: "", sm6: "", md6: "" } },
                            [
                              _c("v-checkbox", {
                                attrs: { label: _vm.$t("labels.sponsor") },
                                model: {
                                  value: _vm.videoForm.sponsor,
                                  callback: function($$v) {
                                    _vm.$set(_vm.videoForm, "sponsor", $$v)
                                  },
                                  expression: "videoForm.sponsor"
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-flex",
                            { attrs: { xs12: "", sm6: "", md6: "" } },
                            [
                              _c("v-select", {
                                attrs: {
                                  items: _vm.days,
                                  attach: "",
                                  chips: "",
                                  label: _vm.$t("labels.days"),
                                  multiple: ""
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
                                                    attrs: {
                                                      color:
                                                        _vm.videoForm.days
                                                          .length > 0
                                                          ? "indigo darken-4"
                                                          : ""
                                                    }
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
                                  value: _vm.videoForm.days,
                                  callback: function($$v) {
                                    _vm.$set(_vm.videoForm, "days", $$v)
                                  },
                                  expression: "videoForm.days"
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
                              _c("v-text-field", {
                                attrs: {
                                  label: _vm.$t("videos.fields.duration"),
                                  readonly: ""
                                },
                                model: {
                                  value: _vm.videoForm.duration,
                                  callback: function($$v) {
                                    _vm.$set(_vm.videoForm, "duration", $$v)
                                  },
                                  expression: "videoForm.duration"
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c("v-flex", {
                            attrs: { xs12: "", sm12: "", md12: "" }
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
                "v-card-actions",
                [
                  _c(
                    "v-container",
                    { attrs: { fluid: "" } },
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
                                  return _vm.deleteVideo()
                                }
                              }
                            },
                            [_vm._v(_vm._s(_vm.$t("buttons.delete")))]
                          ),
                          _vm._v(" "),
                          _c("v-spacer"),
                          _vm._v(" "),
                          _c("v-btn", { attrs: { to: "/admin/videos" } }, [
                            _vm._v(_vm._s(_vm.$t("buttons.cancel")))
                          ]),
                          _vm._v(" "),
                          _c(
                            "v-btn",
                            {
                              attrs: { color: "info" },
                              on: {
                                click: function($event) {
                                  return _vm.update()
                                }
                              }
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

/***/ "./resources/js/components/Weekdays.vue":
/*!**********************************************!*\
  !*** ./resources/js/components/Weekdays.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Weekdays_vue_vue_type_template_id_39ba6e36___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Weekdays.vue?vue&type=template&id=39ba6e36& */ "./resources/js/components/Weekdays.vue?vue&type=template&id=39ba6e36&");
/* harmony import */ var _Weekdays_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Weekdays.vue?vue&type=script&lang=js& */ "./resources/js/components/Weekdays.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Weekdays_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Weekdays_vue_vue_type_template_id_39ba6e36___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Weekdays_vue_vue_type_template_id_39ba6e36___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Weekdays.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Weekdays.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/components/Weekdays.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Weekdays_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Weekdays.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Weekdays.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Weekdays_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Weekdays.vue?vue&type=template&id=39ba6e36&":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/Weekdays.vue?vue&type=template&id=39ba6e36& ***!
  \*****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Weekdays_vue_vue_type_template_id_39ba6e36___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Weekdays.vue?vue&type=template&id=39ba6e36& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Weekdays.vue?vue&type=template&id=39ba6e36&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Weekdays_vue_vue_type_template_id_39ba6e36___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Weekdays_vue_vue_type_template_id_39ba6e36___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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

/***/ "./resources/js/views/videos/edit.vue":
/*!********************************************!*\
  !*** ./resources/js/views/videos/edit.vue ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _edit_vue_vue_type_template_id_0036e9b2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit.vue?vue&type=template&id=0036e9b2& */ "./resources/js/views/videos/edit.vue?vue&type=template&id=0036e9b2&");
/* harmony import */ var _edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit.vue?vue&type=script&lang=js& */ "./resources/js/views/videos/edit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _edit_vue_vue_type_template_id_0036e9b2___WEBPACK_IMPORTED_MODULE_0__["render"],
  _edit_vue_vue_type_template_id_0036e9b2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/videos/edit.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/videos/edit.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./resources/js/views/videos/edit.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./edit.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/videos/edit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/videos/edit.vue?vue&type=template&id=0036e9b2&":
/*!***************************************************************************!*\
  !*** ./resources/js/views/videos/edit.vue?vue&type=template&id=0036e9b2& ***!
  \***************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_template_id_0036e9b2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./edit.vue?vue&type=template&id=0036e9b2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/videos/edit.vue?vue&type=template&id=0036e9b2&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_template_id_0036e9b2___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_template_id_0036e9b2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);