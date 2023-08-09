(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["videos"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/videos/index.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/videos/index.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _settings_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../settings.js */ "./resources/js/settings.js");
/* harmony import */ var _helper_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helper.js */ "./resources/js/helper.js");
/* harmony import */ var _components_MediaGroup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/MediaGroup */ "./resources/js/components/MediaGroup.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    MediaGroup: _components_MediaGroup__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      isVideoLoaded: false,
      user: null,
      videos: [],
      groups: [],
      monitors: [],
      campaigns: [],
      live_types: [{
        id: 1,
        name: this.$t('videos.fields.today')
      }],
      options: {},
      filterForm: {
        video: '',
        campaign_id: '',
        group_id: '',
        live_type: ''
      },
      footer_props: {
        itemsPerPageText: "Righe per pagina",
        itemsPerPageOptions: [100]
      },
      videoPreview: false,
      previewSrcVideo: ''
    };
  },
  created: function created() {
    this.init();
  },
  computed: {
    headers: function headers() {
      return [{
        text: this.$t('videos.fields.video'),
        value: 'original',
        align: 'center'
      }, {
        text: this.$t('videos.fields.start_time'),
        value: 'start_time',
        align: 'center'
      }, {
        text: this.$t('videos.fields.end_time'),
        value: 'end_time',
        align: 'center'
      }, {
        text: this.$t('videos.fields.size'),
        value: 'size',
        align: 'center'
      }, {
        text: this.$t('videos.fields.duration'),
        value: 'duration',
        align: 'center'
      }, {
        text: this.$t('videos.fields.groups'),
        value: 'groups',
        align: 'center'
      }, {
        text: this.$t('videos.fields.type'),
        value: 'type',
        align: 'center'
      }, {
        text: this.$t('videos.fields.campaign'),
        value: 'campaign',
        align: 'center'
      }, {
        text: this.$t('labels.actions'),
        value: 'actions',
        sortable: false,
        align: 'center'
      }];
    }
  },
  mounted: function mounted() {},
  methods: {
    editItem: function editItem(item) {
      this.$router.push({
        name: "videos-edit",
        params: {
          id: item.id
        }
      });
    },
    // deleteVideo (item) {
    // 	var r = confirm(this.$t('videos.fields.delete_confirm'));
    // 	if(r == true){
    // 		axios.post(settings.root_url + '/api/videos/delete/' + item.id)
    // 		.then(response =>  {
    // 			this.getVideos();
    // 		})
    // 		.catch(error => {
    // 		});
    // 	}
    // },
    getVideoGroups: function getVideoGroups(video) {
      if (!this.groups) {
        return [];
      } else {
        return this.groups.filter(function (group) {
          if (video.group_ids) return video.group_ids.includes(group.id) == true;else return false;
        });
      }
    },
    getGroupType: function getGroupType(id) {
      var types = this.group_types.filter(function (type) {
        return type.id == id;
      });
      return types[0].name;
    },
    init: function init() {
      var _this = this;

      this.filterForm = Object.assign({}, this.$store.getters.getVideoFilter);
      axios.get(_settings_js__WEBPACK_IMPORTED_MODULE_0__["settings"].root_url + '/api/videos-load').then(function (response) {
        _this.user = response.data.user;
        _this.videos = response.data.videos;
        _this.groups = response.data.groups;
        _this.monitors = response.data.monitors;
        _this.group_types = response.data.group_types;
        _this.campaigns = response.data.campaigns;
        _this.isVideoLoaded = true;

        _this.getVideos();
      })["catch"](function (response) {
        console.log("error");
      });
    },
    getVideos: function getVideos() {
      var _this2 = this;

      isVideoLoaded: false;

      this.$store.dispatch('setVideoFilter', this.filterForm);
      var url = _helper_js__WEBPACK_IMPORTED_MODULE_1__["default"].getFilterURL(this.filterForm);
      axios.get(_settings_js__WEBPACK_IMPORTED_MODULE_0__["settings"].root_url + '/api/videoss?' + url).then(function (response) {
        _this2.videos = response.data.videos;
        _this2.isVideoLoaded = true;
      })["catch"](function (response) {
        console.log("error");
      });
    },
    getCampaign: function getCampaign(id) {
      if (!this.campaigns) {
        return 'Unknown Campaign';
      } else {
        var campaign = this.campaigns.filter(function (campaign) {
          return campaign.id == id;
        });
        return campaign[0].name;
      }
    },
    getStartTime: function getStartTime(item) {
      return _helper_js__WEBPACK_IMPORTED_MODULE_1__["default"].formatDate(item.start_date) + ' ' + item.start_time;
    },
    getEndTime: function getEndTime(item) {
      return _helper_js__WEBPACK_IMPORTED_MODULE_1__["default"].formatDate(item.end_date) + ' ' + item.end_time;
    },
    previewMedia: function previewMedia(filename) {
      this.previewSrcVideo = _settings_js__WEBPACK_IMPORTED_MODULE_0__["settings"].root_url + '/media/videos/' + filename;
      this.videoPreview = true;
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/videos/index.vue?vue&type=template&id=485e065a&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/videos/index.vue?vue&type=template&id=485e065a&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************/
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
        "v-card",
        [
          _c(
            "v-toolbar",
            { attrs: { color: "grey lighten-2" } },
            [_c("v-toolbar-title", [_vm._v(_vm._s(_vm.$t("videos.title")))])],
            1
          ),
          _vm._v(" "),
          _c(
            "v-container",
            { attrs: { "grid-list-md": "" } },
            [
              _c(
                "v-layout",
                { attrs: { wrap: "", "justify-space-around": "" } },
                [
                  _c(
                    "v-flex",
                    { attrs: { xs6: "", sm3: "", md3: "" } },
                    [
                      _c("v-text-field", {
                        attrs: { label: _vm.$t("videos.search") },
                        on: {
                          input: function($event) {
                            return _vm.getVideos()
                          }
                        },
                        model: {
                          value: _vm.filterForm.video,
                          callback: function($$v) {
                            _vm.$set(_vm.filterForm, "video", $$v)
                          },
                          expression: "filterForm.video"
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-flex",
                    { attrs: { xs6: "", sm3: "", md3: "" } },
                    [
                      _c("v-select", {
                        attrs: {
                          items: _vm.campaigns,
                          "item-text": "name",
                          "item-value": "id",
                          label: _vm.$t("campaign.title"),
                          "persistent-hint": "",
                          clearable: ""
                        },
                        on: {
                          change: function($event) {
                            return _vm.getVideos()
                          }
                        },
                        model: {
                          value: _vm.filterForm.campaign_id,
                          callback: function($$v) {
                            _vm.$set(_vm.filterForm, "campaign_id", $$v)
                          },
                          expression: "filterForm.campaign_id"
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-flex",
                    { attrs: { xs6: "", sm3: "", md3: "" } },
                    [
                      _c("v-select", {
                        attrs: {
                          items: _vm.groups,
                          "item-text": "name",
                          "item-value": "id",
                          label: _vm.$t("groups.fields.groups"),
                          "persistent-hint": "",
                          clearable: ""
                        },
                        on: {
                          change: function($event) {
                            return _vm.getVideos()
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
                  ),
                  _vm._v(" "),
                  _c(
                    "v-flex",
                    { attrs: { xs6: "", sm3: "", md3: "" } },
                    [
                      _c("v-select", {
                        attrs: {
                          items: _vm.live_types,
                          "item-text": "name",
                          "item-value": "id",
                          label: _vm.$t("videos.fields.time_filter"),
                          clearable: ""
                        },
                        on: {
                          change: function($event) {
                            return _vm.getVideos()
                          }
                        },
                        model: {
                          value: _vm.filterForm.live_type,
                          callback: function($$v) {
                            _vm.$set(_vm.filterForm, "live_type", $$v)
                          },
                          expression: "filterForm.live_type"
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
          [
            _c(
              "v-dialog",
              {
                attrs: { width: "640", height: "480" },
                model: {
                  value: _vm.videoPreview,
                  callback: function($$v) {
                    _vm.videoPreview = $$v
                  },
                  expression: "videoPreview"
                }
              },
              [
                _c("video", {
                  attrs: {
                    width: "640",
                    height: "480",
                    controls: "",
                    autoplay: "",
                    muted: "",
                    loop: "",
                    src: _vm.previewSrcVideo
                  },
                  domProps: { muted: true }
                })
              ]
            )
          ],
          _vm._v(" "),
          _c("v-data-table", {
            staticClass: "elevation-1",
            attrs: {
              headers: _vm.headers,
              items: _vm.videos,
              loading: !_vm.isVideoLoaded,
              "no-data-text": _vm.$t("labels.no_media_scheduled"),
              "loading-text": "Caricamento in corso...",
              "items-per-page": 100,
              "footer-props": _vm.footer_props,
              "mobile-breakpoint": 300
            },
            scopedSlots: _vm._u([
              {
                key: "item.original",
                fn: function(ref) {
                  var item = ref.item
                  return [
                    _c(
                      "div",
                      {
                        staticStyle: { cursor: "pointer" },
                        on: {
                          click: function($event) {
                            return _vm.previewMedia(item.video)
                          }
                        }
                      },
                      [_vm._v(_vm._s(item.original))]
                    )
                  ]
                }
              },
              {
                key: "item.groups",
                fn: function(ref) {
                  var item = ref.item
                  return [
                    _c("media-group", {
                      attrs: {
                        item: item,
                        by_monitor: _vm.user.by_monitor,
                        monitors_all: _vm.monitors,
                        groups_all: _vm.groups
                      },
                      nativeOn: {
                        click: function($event) {
                          return _vm.editItem(item)
                        }
                      }
                    })
                  ]
                }
              },
              {
                key: "item.type",
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
                key: "item.start_time",
                fn: function(ref) {
                  var item = ref.item
                  return [
                    _vm._v(
                      "\n\t\t\t\t" + _vm._s(_vm.getStartTime(item)) + "\n\t\t\t"
                    )
                  ]
                }
              },
              {
                key: "item.end_time",
                fn: function(ref) {
                  var item = ref.item
                  return [
                    _vm._v(
                      "\n\t\t\t\t" + _vm._s(_vm.getEndTime(item)) + "\n\t\t\t"
                    )
                  ]
                }
              },
              {
                key: "item.campaign",
                fn: function(ref) {
                  var item = ref.item
                  return [
                    _vm._v(
                      "\n\t\t\t\t" +
                        _vm._s(_vm.getCampaign(item.campaign_id)) +
                        "\n\t\t\t"
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
                        attrs: { small: "" },
                        on: {
                          click: function($event) {
                            return _vm.editItem(item)
                          }
                        }
                      },
                      [_vm._v("\n\t\t\t\t\tedit\n\t\t\t\t")]
                    )
                  ]
                }
              }
            ])
          })
        ],
        2
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/videos/index.vue":
/*!*********************************************!*\
  !*** ./resources/js/views/videos/index.vue ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_485e065a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=485e065a&scoped=true& */ "./resources/js/views/videos/index.vue?vue&type=template&id=485e065a&scoped=true&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/js/views/videos/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_485e065a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_485e065a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "485e065a",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/videos/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/videos/index.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./resources/js/views/videos/index.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/videos/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/videos/index.vue?vue&type=template&id=485e065a&scoped=true&":
/*!****************************************************************************************!*\
  !*** ./resources/js/views/videos/index.vue?vue&type=template&id=485e065a&scoped=true& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_485e065a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=485e065a&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/videos/index.vue?vue&type=template&id=485e065a&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_485e065a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_485e065a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);