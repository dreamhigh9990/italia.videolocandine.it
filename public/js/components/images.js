(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["images"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/images/index.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/images/index.vue?vue&type=script&lang=js& ***!
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



/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    MediaGroup: _components_MediaGroup__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      isImageLoaded: false,
      images: [],
      campaigns: [],
      groups: [],
      group_types: [],
      imagePreview: false,
      previewSrc: '',
      user: {},
      monitors: [],
      footer_props: {
        itemsPerPageText: "Righe per pagina",
        itemsPerPageOptions: [100]
      }
    };
  },
  created: function created() {
    this.getImages();
  },
  computed: {
    headers: function headers() {
      return [{
        text: this.$t('images.title'),
        value: 'image',
        align: 'center'
      }, {
        text: this.$t('labels.start_time'),
        value: 'start_time',
        align: 'center'
      }, {
        text: this.$t('labels.end_time'),
        value: 'end_time',
        align: 'center'
      }, {
        text: this.$t('images.fields.size'),
        value: 'size',
        align: 'center'
      }, {
        text: this.$t('images.fields.duration'),
        value: 'duration',
        align: 'center'
      }, {
        text: this.$t('images.fields.groups'),
        value: 'groups',
        align: 'center'
      }, {
        text: this.$t('images.fields.type'),
        value: 'group_type_id',
        align: 'center'
      }, {
        text: this.$t('campaign.title'),
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
  methods: {
    // deleteItem (item) {
    // 	var r = confirm('Are you sure you want to delete this item?');
    // 	if(r == true){
    // 		axios.post(settings.root_url + '/api/images/delete/' + item.id)
    //           .then(response =>  {
    // 	this.getImages();
    //           }).catch(error => {
    //           });
    // 	}
    // },
    editItem: function editItem(item) {
      this.$router.push({
        name: "image-edit",
        params: {
          id: item.id
        }
      });
    },
    getImages: function getImages() {
      var _this = this;

      axios.get(_settings_js__WEBPACK_IMPORTED_MODULE_0__["settings"].root_url + '/api/images').then(function (response) {
        _this.images = response.data.images;
        _this.videos = response.data.videos;
        _this.groups = response.data.groups;
        _this.group_types = response.data.group_types;
        _this.campaigns = response.data.campaigns;
        _this.user = response.data.user;
        _this.monitors = response.data.monitors;
        _this.isImageLoaded = true;
      });
    },
    getCampaign: function getCampaign(id) {
      var campaign = this.campaigns.filter(function (campaign) {
        return campaign.id == id;
      });
      return campaign[0].name;
    },
    getVideoGroups: function getVideoGroups(video) {
      return this.groups.filter(function (group) {
        if (!video.group_ids) return false;else return video.group_ids.includes(group.id) == true;
      });
    },
    getGroupType: function getGroupType(id) {
      var types = this.group_types.filter(function (type) {
        return type.id == id;
      });
      return types[0].name;
    },
    getStartTime: function getStartTime(item) {
      return _helper_js__WEBPACK_IMPORTED_MODULE_1__["default"].formatDate(item.start_date) + ' ' + item.start_time;
    },
    getEndTime: function getEndTime(item) {
      return _helper_js__WEBPACK_IMPORTED_MODULE_1__["default"].formatDate(item.end_date) + ' ' + item.end_time;
    },
    previewMedia: function previewMedia(filename, type) {
      if (type == 'image') {
        this.previewSrc = _settings_js__WEBPACK_IMPORTED_MODULE_0__["settings"].root_url + '/media/images/' + filename;
        this.imagePreview = true;
      } else if (type == 'video') {
        this.previewSrcVideo = _settings_js__WEBPACK_IMPORTED_MODULE_0__["settings"].root_url + '/media/videos/' + filename;
        this.videoPreview = true;
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/images/index.vue?vue&type=template&id=25dfa57a&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/images/index.vue?vue&type=template&id=25dfa57a&scoped=true& ***!
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
        "v-toolbar",
        { attrs: { color: "grey lighten-2" } },
        [_c("v-toolbar-title", [_vm._v(_vm._s(_vm.$t("images.title")))])],
        1
      ),
      _vm._v(" "),
      [
        _c(
          "v-dialog",
          {
            attrs: { "max-height": "700", "max-width": "900" },
            model: {
              value: _vm.imagePreview,
              callback: function($$v) {
                _vm.imagePreview = $$v
              },
              expression: "imagePreview"
            }
          },
          [
            _c("v-img", {
              attrs: {
                src: _vm.previewSrc,
                contain: "",
                "max-height": "700",
                "max-width": "900"
              }
            })
          ],
          1
        )
      ],
      _vm._v(" "),
      _c("v-data-table", {
        staticClass: "elevation-1",
        attrs: {
          headers: _vm.headers,
          items: _vm.images,
          loading: !_vm.isImageLoaded,
          "no-data-text": _vm.$t("labels.no_media_scheduled"),
          "loading-text": "Caricamento in corso...",
          "items-per-page": 100,
          "footer-props": _vm.footer_props,
          "mobile-breakpoint": 300
        },
        scopedSlots: _vm._u([
          {
            key: "item.image",
            fn: function(ref) {
              var item = ref.item
              return [
                _c(
                  "div",
                  {
                    staticClass: "text-md-center",
                    staticStyle: { cursor: "pointer" },
                    on: {
                      click: function($event) {
                        return _vm.previewMedia(item.image, "image")
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
            key: "item.group_type_id",
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
                _vm._v("\n\t\t\t\t" + _vm._s(_vm.getEndTime(item)) + "\n\t\t\t")
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
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/images/index.vue":
/*!*********************************************!*\
  !*** ./resources/js/views/images/index.vue ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_25dfa57a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=25dfa57a&scoped=true& */ "./resources/js/views/images/index.vue?vue&type=template&id=25dfa57a&scoped=true&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/js/views/images/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_25dfa57a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_25dfa57a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "25dfa57a",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/images/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/images/index.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./resources/js/views/images/index.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/images/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/images/index.vue?vue&type=template&id=25dfa57a&scoped=true&":
/*!****************************************************************************************!*\
  !*** ./resources/js/views/images/index.vue?vue&type=template&id=25dfa57a&scoped=true& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_25dfa57a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=25dfa57a&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/images/index.vue?vue&type=template&id=25dfa57a&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_25dfa57a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_25dfa57a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);