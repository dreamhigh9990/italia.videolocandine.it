(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dashboard"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/dashboard/index.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/dashboard/index.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _helper_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helper.js */ "./resources/js/helper.js");
/* harmony import */ var _settings_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../settings.js */ "./resources/js/settings.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  data: function data() {
    return {
      today: this.getToday,
      focus: this.getToday,
      type: 'month',
      start: null,
      end: null,
      events: []
    };
  },
  computed: {
    getToday: function getToday() {
      return new Date();
    },
    title: function title() {
      var start = this.start,
          end = this.end;

      if (!start || !end) {
        return '';
      }

      var startMonth = this.monthFormatter(start);
      var endMonth = this.monthFormatter(end);
      var suffixMonth = startMonth === endMonth ? '' : endMonth;
      var startYear = start.year;
      var endYear = end.year;
      var suffixYear = startYear === endYear ? '' : endYear;
      var startDay = start.day + this.nth(start.day);
      var endDay = end.day + this.nth(end.day);
      return "".concat(startMonth, " ").concat(startYear);
    },
    monthFormatter: function monthFormatter() {
      return this.$refs.calendar.getFormatter({
        timeZone: 'UTC',
        month: 'long'
      });
    }
  },
  created: function created() {
    this.getCampaigns();
  },
  mounted: function mounted() {
    this.$refs.calendar.checkChange();
  },
  methods: {
    getCampaigns: function getCampaigns() {
      var _this = this;

      axios.get(_settings_js__WEBPACK_IMPORTED_MODULE_1__["settings"].root_url + '/api/campaigns').then(function (response) {
        _this.campaigns = response.data.campaigns;

        for (var i = _this.campaigns.length - 1; i >= 0; i--) {
          var event = {
            'name': _this.campaigns[i].name,
            'start': _this.campaigns[i].start_date,
            'end': _this.campaigns[i].end_date,
            'id': _this.campaigns[i].id
          };

          _this.events.push(event);
        }
      })["catch"](function (response) {
        console.log("error");
      });
    },
    setToday: function setToday() {
      this.focus = this.today;
    },
    prev: function prev() {
      this.$refs.calendar.prev();
    },
    next: function next() {
      this.$refs.calendar.next();
    },
    showEvent: function showEvent(_ref) {
      var nativeEvent = _ref.nativeEvent,
          event = _ref.event;
      this.$router.push({
        name: "campaign-edit",
        params: {
          id: event.id
        }
      });
    },
    updateRange: function updateRange(_ref2) {
      var start = _ref2.start,
          end = _ref2.end;
      // You could load events from an outside source (like database) now that we have the start and end dates on the calendar
      this.start = start;
      this.end = end;
    },
    nth: function nth(d) {
      return d > 3 && d < 21 ? 'th' : ['th', 'st', 'nd', 'rd', 'th', 'th', 'th', 'th', 'th', 'th'][d % 10];
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/dashboard/index.vue?vue&type=template&id=3239cd30&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/dashboard/index.vue?vue&type=template&id=3239cd30& ***!
  \*************************************************************************************************************************************************************************************************************/
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
        "v-row",
        { staticClass: "fill-height" },
        [
          _c(
            "v-col",
            [
              _c(
                "v-sheet",
                { attrs: { height: "64" } },
                [
                  _c(
                    "v-toolbar",
                    { attrs: { flat: "", color: "white" } },
                    [
                      _c(
                        "v-btn",
                        {
                          staticClass: "mr-4",
                          attrs: { outlined: "" },
                          on: { click: _vm.setToday }
                        },
                        [
                          _vm._v(
                            "\n            " +
                              _vm._s(_vm.$t("labels.today")) +
                              "\n          "
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "v-btn",
                        {
                          attrs: { fab: "", text: "", small: "" },
                          on: { click: _vm.prev }
                        },
                        [
                          _c("v-icon", { attrs: { small: "" } }, [
                            _vm._v("mdi-chevron-left")
                          ])
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-btn",
                        {
                          attrs: { fab: "", text: "", small: "" },
                          on: { click: _vm.next }
                        },
                        [
                          _c("v-icon", { attrs: { small: "" } }, [
                            _vm._v("mdi-chevron-right")
                          ])
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("v-toolbar-title", [_vm._v(_vm._s(_vm.title))]),
                      _vm._v(" "),
                      _c("div", { staticClass: "flex-grow-1" })
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-sheet",
                { attrs: { height: "1400" } },
                [
                  _c("v-calendar", {
                    ref: "calendar",
                    attrs: {
                      locale: "it",
                      events: _vm.events,
                      "event-color": "primary",
                      "event-margin-bottom": 3,
                      now: _vm.today,
                      type: _vm.type,
                      "event-more": false
                    },
                    on: {
                      "click:event": _vm.showEvent,
                      change: _vm.updateRange
                    },
                    model: {
                      value: _vm.focus,
                      callback: function($$v) {
                        _vm.focus = $$v
                      },
                      expression: "focus"
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

/***/ "./resources/js/views/dashboard/index.vue":
/*!************************************************!*\
  !*** ./resources/js/views/dashboard/index.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_3239cd30___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=3239cd30& */ "./resources/js/views/dashboard/index.vue?vue&type=template&id=3239cd30&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/js/views/dashboard/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_3239cd30___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_3239cd30___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/dashboard/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/dashboard/index.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/views/dashboard/index.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/dashboard/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/dashboard/index.vue?vue&type=template&id=3239cd30&":
/*!*******************************************************************************!*\
  !*** ./resources/js/views/dashboard/index.vue?vue&type=template&id=3239cd30& ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_3239cd30___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=3239cd30& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/dashboard/index.vue?vue&type=template&id=3239cd30&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_3239cd30___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_3239cd30___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);