(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["campaignCreate"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/campaign/create.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/campaign/create.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _settings_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../settings.js */ "./resources/js/settings.js");
/* harmony import */ var _helper_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helper.js */ "./resources/js/helper.js");
/* harmony import */ var _components_ImagePreview__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/ImagePreview */ "./resources/js/components/ImagePreview.vue");
/* harmony import */ var _components_VideoPreview__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/VideoPreview */ "./resources/js/components/VideoPreview.vue");
/* harmony import */ var _components_VideoCampaignForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/VideoCampaignForm */ "./resources/js/components/VideoCampaignForm.vue");
/* harmony import */ var _components_MediaGroup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/MediaGroup */ "./resources/js/components/MediaGroup.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    ImagePreview: _components_ImagePreview__WEBPACK_IMPORTED_MODULE_2__["default"],
    VideoPreview: _components_VideoPreview__WEBPACK_IMPORTED_MODULE_3__["default"],
    VideoCampaignForm: _components_VideoCampaignForm__WEBPACK_IMPORTED_MODULE_4__["default"],
    MediaGroup: _components_MediaGroup__WEBPACK_IMPORTED_MODULE_5__["default"]
  },
  data: function data() {
    var _this = this;

    return {
      valid: false,
      isUploading: false,
      isUploading1: false,
      isUploading2: false,
      footer_props: {
        itemsPerPageText: "Righe per pagina",
        itemsPerPageOptions: [100]
      },
      videoDialog: false,
      editedIndex: -1,
      date1: '',
      date2: '',
      video_date1: '',
      video_date2: '',
      video_menu_date_start: false,
      video_menu_time_start: false,
      video_menu_date_end: false,
      video_menu_time_end: false,
      menu_date_start: false,
      menu_time_start: false,
      menu_date_end: false,
      menu_time_end: false,
      videoPreview: false,
      imagePreview: false,
      previewSrc: '',
      previewSrcVideo: '',
      user: {},
      campaignForm: {
        name: '',
        description: '',
        sponsor: false,
        start_date: '',
        days: ['Lun', 'Mar', 'Mer', 'Giov', 'Ven', 'Sab', 'Dom'],
        start_time: '07:00',
        end_date: '',
        end_time: '21:00'
      },
      video_item: {},
      videoForm: {
        file_type: '',
        start_date: '',
        days: [],
        start_time: '',
        end_date: '',
        end_time: '',
        duration: '',
        group_type_id: '',
        aspect_ratio_id: '',
        availableGroups: [],
        groups: []
      },
      days: ['Lun', 'Mar', 'Mer', 'Giov', 'Ven', 'Sab', 'Dom'],
      files: [],
      types: [],
      ratios: [],
      groups: [],
      monitors: [],
      shops: [],
      nameRules: [function (v) {
        return !!v || _this.$t('labels.name_required');
      }],
      date1Rules: [function (v) {
        return !!v || _this.$t('labels.start_date_required');
      }],
      date2Rules: [function (v) {
        return !!v || _this.$t('labels.end_date_required');
      }],
      daysRule: [function (v) {
        return v.length > 0 || _this.$t('labels.day_required');
      }]
    };
  },
  created: function created() {
    this.init();
  },
  watch: {
    date1: function date1(val) {
      this.campaignForm.start_date = _helper_js__WEBPACK_IMPORTED_MODULE_1__["default"].formatDate(this.date1);
    },
    date2: function date2(val) {
      this.campaignForm.end_date = _helper_js__WEBPACK_IMPORTED_MODULE_1__["default"].formatDate(this.date2);
    },
    video_date1: function video_date1(val) {
      this.videoForm.start_date = _helper_js__WEBPACK_IMPORTED_MODULE_1__["default"].formatDate(this.video_date1);
    },
    video_date2: function video_date2(val) {
      this.videoForm.end_date = _helper_js__WEBPACK_IMPORTED_MODULE_1__["default"].formatDate(this.video_date2);
    },
    videoDialog: function videoDialog(val) {
      val || this.closeVideoForm();
    }
  },
  computed: {
    isByMonitor: function isByMonitor() {
      return this.user === null ? this.$t('videos.fields.groups') : this.user.by_monitor;
    },
    headers: function headers() {
      return [{
        text: "Media",
        align: 'center',
        value: 'is_video',
        sortable: false
      }, {
        text: this.$t('videos.fields.start_time'),
        value: "start_time",
        align: 'center',
        sortable: false
      }, {
        text: this.$t('videos.fields.end_time'),
        value: "end_time",
        align: 'center',
        sortable: false
      }, {
        text: this.$t('labels.original'),
        align: 'center',
        value: 'original'
      }, {
        text: this.$t('videos.fields.size'),
        align: 'center',
        value: 'filesize'
      }, {
        text: this.$t('videos.fields.duration'),
        align: 'center',
        value: 'duration'
      }, {
        text: this.isByMonitor === '0' ? this.$t('videos.fields.groups') : this.$t('labels.monitors'),
        align: 'center',
        value: 'group_ids',
        sortable: false
      }, {
        text: "Aspect Ratio",
        align: 'center',
        value: 'aspect_ratio_id',
        sortable: false
      }, {
        text: this.$t('labels.actions'),
        value: 'actions',
        sortable: false
      }];
    },
    allDays: function allDays() {
      return this.campaignForm.days.length === this.days.length;
    },
    someDays: function someDays() {
      return this.campaignForm.days.length > 0 && !this.allDays;
    },
    icon: function icon() {
      if (this.allDays) return 'close';
      if (this.someDays) return 'indeterminate_check_box';
      return 'check_box_outline_blank';
    }
  },
  methods: {
    init: function init() {
      var _this2 = this;

      axios.get(_settings_js__WEBPACK_IMPORTED_MODULE_0__["settings"].root_url + '/api/campaigns/load').then(function (response) {
        _this2.user = response.data.user;
        _this2.icons = response.data.icons;
        _this2.types = response.data.types;
        _this2.ratios = response.data.ratios;
        _this2.groups = response.data.groups;
        _this2.monitors = response.data.monitors;
        _this2.shops = response.data.shops;
      })["catch"](function (response) {
        console.log("error");
      });
    },
    closeVideoForm: function closeVideoForm() {
      this.videoDialog = false;
    },
    saveNewMedia: function saveNewMedia(new_media) {
      for (var i = this.files.length - 1; i >= 0; i--) {
        if (this.files[i].index == new_media.index) {
          this.files[i].start_date = new_media.date1;
          this.files[i].end_date = new_media.date2;
          this.files[i].start_time = new_media.start_time;
          this.files[i].end_time = new_media.end_time;
          this.files[i].days = new_media.days.toString();
          this.files[i].duration = new_media.duration;
          this.files[i].group_ids = new_media.groups.map(function (el) {
            return el.id;
          }).toString();
          this.files[i].monitor_ids = new_media.monitor_ids.toString();
          break;
        }
      }

      console.log(new_media);
      this.videoDialog = false;
    },
    editNewVideo: function editNewVideo(item) {
      this.video_item.editedIndex = item.index;
      this.video_item = Object.assign({}, item);
      this.video_item.is_new = true;
      this.video_item.media_type = "video", this.video_item.start_date = _helper_js__WEBPACK_IMPORTED_MODULE_1__["default"].formatDate(item.start_date);
      this.video_item.end_date = _helper_js__WEBPACK_IMPORTED_MODULE_1__["default"].formatDate(item.end_date);
      this.video_item.date1 = item.start_date;
      this.video_item.date2 = item.end_date;
      this.video_item.days = item.days != null ? item.days.split(',') : null;
      this.video_item.by_monitor = this.user.by_monitor;
      this.video_item.group_ids = item.group_ids;
      this.video_item.monitor_ids = item.monitor_ids;
      this.videoDialog = true;
    },
    prepareMedia: function prepareMedia(e) {
      var _this3 = this;

      var items = e.target.files || e.dataTransfer.files;

      if (items.length > 0) {
        this.isUploading = true;
        var counter = 0;

        for (var i = 0; i < items.length; i++) {
          var campaignForm = new FormData();
          var attachment = items[i];

          if (attachment.name.indexOf("FLL") == -1 && attachment.name.indexOf("CTF") == -1) {
            this.$toastr.e(attachment.name, this.$t('labels.no_type_match'));
            counter++;
            if (counter >= items.length) this.isUploading = false;
            continue;
          }

          campaignForm.append('media', attachment);
          axios.post(_settings_js__WEBPACK_IMPORTED_MODULE_0__["settings"].root_url + '/api/image-upload', campaignForm).then(function (response) {
            if (response.data.result == "success") {
              counter++;

              if (response.data.frame_rate == 25 || response.data.frame_rate == 0) {
                var file = {
                  'name': response.data.filename,
                  'original': response.data.original,
                  'file_type': response.data.file_type,
                  'width': response.data.width,
                  'height': response.data.height,
                  'duration': response.data.duration,
                  'group_ids': '',
                  'monitor_ids': '',
                  'group_type_id': response.data.group_type_id,
                  'filesize': response.data.filesize,
                  'aspect_ratio_id': response.data.aspect_ratio_id,
                  'start_date': _this3.date1,
                  'end_date': _this3.date2,
                  'start_time': _this3.campaignForm.start_time,
                  'end_time': _this3.campaignForm.end_time,
                  'days': _this3.campaignForm.days.toString(),
                  'index': _this3.files.length
                };

                _this3.files.push(file);
              } else {
                _this3.$toastr.e(response.data.original, _this3.$t('labels.no_framerate_match'));
              }

              if (counter >= items.length) _this3.isUploading = false;
            }
          })["catch"](function (error) {
            _this3.isUploading = false;
          });
        }
      }
    },
    remove: function remove(index) {
      var r = confirm('Sei sicuro di voler cancellare questo file?');

      if (r == true) {
        this.files.splice(index, 1);
      }
    },
    getScreenIcon: function getScreenIcon(ratioId, typeID) {
      return _settings_js__WEBPACK_IMPORTED_MODULE_0__["settings"].root_url + '/images/' + this.getIcon(ratioId, typeID).screen_icon;
    },
    getMonitorIcon: function getMonitorIcon(ratioId, typeID) {
      return _settings_js__WEBPACK_IMPORTED_MODULE_0__["settings"].root_url + '/images/' + this.getIcon(ratioId, typeID).monitor_icon;
    },
    getIcon: function getIcon(ratioId, typeID) {
      return this.icons.find(function (icon) {
        return icon.aspect_ratio_id == ratioId && icon.group_type_id == typeID;
      });
    },
    save1: function save1() {
      var _this4 = this;

      // console.log(this.files);
      if (this.$refs.form.validate()) {
        this.isUploading1 = true;
        axios.post(_settings_js__WEBPACK_IMPORTED_MODULE_0__["settings"].root_url + '/api/campaigns/add-new', {
          name: this.campaignForm.name,
          description: this.campaignForm.description,
          sponsor: this.campaignForm.sponsor,
          days: this.campaignForm.days.toString(),
          start_date: this.date1,
          start_time: this.campaignForm.start_time,
          end_date: this.date2,
          end_time: this.campaignForm.end_time,
          media: this.files
        }).then(function (response) {
          _this4.isUploading1 = false;

          _this4.$router.push({
            name: 'campaigns'
          });
        })["catch"](function (error) {
          _this4.isUploading1 = false;
        });
      }
    },
    save2: function save2() {
      var _this5 = this;

      // console.log(this.files);
      if (this.$refs.form.validate()) {
        this.isUploading2 = true;
        axios.post(_settings_js__WEBPACK_IMPORTED_MODULE_0__["settings"].root_url + '/api/campaigns/add-new', {
          name: this.campaignForm.name,
          description: this.campaignForm.description,
          sponsor: this.campaignForm.sponsor,
          days: this.campaignForm.days.toString(),
          start_date: this.date1,
          start_time: this.campaignForm.start_time,
          end_date: this.date2,
          end_time: this.campaignForm.end_time,
          media: this.files
        }).then(function (response) {
          _this5.isUploading2 = false;

          _this5.$router.push({
            name: "campaign-edit",
            params: {
              id: response.data.id
            }
          });
        })["catch"](function (error) {
          _this5.isUploading2 = false;
        });
      }
    },
    getVideoIcon: function getVideoIcon(item) {
      if (item.file_type == "video") return "videocam";else if (item.file_type == "image") return "photo";
    },
    getVideoGroups: function getVideoGroups(video) {
      return this.groups.filter(function (group) {
        return video.group_ids.includes(group.id) == true;
      });
    },
    getGroupName: function getGroupName(groupId) {
      var group = this.groups.filter(function (group) {
        return group.id == groupId;
      });
      if (group.length) return group[0].name;else return "Unknow group";
    },
    getRatioName: function getRatioName(ratioId) {
      var ratio = this.ratios.filter(function (ratio) {
        return ratio.id == ratioId;
      });
      return ratio[0].name;
    },
    getGroupType: function getGroupType(id) {
      var types = this.types.filter(function (type) {
        return type.id == id;
      });
      return types[0].name;
    },
    toggle: function toggle() {
      var _this6 = this;

      this.$nextTick(function () {
        if (_this6.allDays) {
          _this6.campaignForm.days = [];
        } else {
          _this6.campaignForm.days = _this6.days.slice();
        }
      });
    },
    getLocale: function getLocale() {
      return _helper_js__WEBPACK_IMPORTED_MODULE_1__["default"].getLocale();
    },
    parseDate: function parseDate(date) {
      return _helper_js__WEBPACK_IMPORTED_MODULE_1__["default"].parseDate(date);
    },
    getStartTime: function getStartTime(item) {
      return _helper_js__WEBPACK_IMPORTED_MODULE_1__["default"].formatDate(item.start_date) + ' ' + item.start_time;
    },
    getEndTime: function getEndTime(item) {
      return _helper_js__WEBPACK_IMPORTED_MODULE_1__["default"].formatDate(item.end_date) + ' ' + item.end_time;
    },
    getAvailableGroups: function getAvailableGroups(media) {
      return this.groups.filter(function (group) {
        return group.aspect_ratio_id == media.aspect_ratio_id && group.group_type_id == media.group_type_id;
      });
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/campaign/create.vue?vue&type=template&id=2c1926a8&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/campaign/create.vue?vue&type=template&id=2c1926a8& ***!
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
                  _vm._v(_vm._s(_vm.$t("campaign.fields.create")))
                ])
              ]),
              _vm._v(" "),
              _c(
                "v-card-text",
                [
                  _c(
                    "v-container",
                    { attrs: { "grid-list-lg": "", fluid: "" } },
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
                                attrs: {
                                  label: _vm.$t("campaign.fields.name"),
                                  rules: _vm.nameRules
                                },
                                model: {
                                  value: _vm.campaignForm.name,
                                  callback: function($$v) {
                                    _vm.$set(_vm.campaignForm, "name", $$v)
                                  },
                                  expression: "campaignForm.name"
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-flex",
                            { attrs: { xs6: "", sm6: "", md3: "" } },
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
                                                "max-width": "140px"
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
                                                          _vm.campaignForm
                                                            .start_date
                                                        )
                                                      }
                                                    },
                                                    model: {
                                                      value:
                                                        _vm.campaignForm
                                                          .start_date,
                                                      callback: function($$v) {
                                                        _vm.$set(
                                                          _vm.campaignForm,
                                                          "start_date",
                                                          $$v
                                                        )
                                                      },
                                                      expression:
                                                        "campaignForm.start_date"
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
                                    attrs: { locale: _vm.getLocale() },
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
                            { attrs: { xs6: "", sm6: "", md3: "" } },
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
                                                "max-width": "100px"
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
                                                    staticStyle: {
                                                      width: "100px"
                                                    },
                                                    attrs: {
                                                      label: _vm.$t(
                                                        "labels.start_time"
                                                      ),
                                                      readonly: ""
                                                    },
                                                    model: {
                                                      value:
                                                        _vm.campaignForm
                                                          .start_time,
                                                      callback: function($$v) {
                                                        _vm.$set(
                                                          _vm.campaignForm,
                                                          "start_time",
                                                          $$v
                                                        )
                                                      },
                                                      expression:
                                                        "campaignForm.start_time"
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
                                    attrs: { format: "24hr" },
                                    model: {
                                      value: _vm.campaignForm.start_time,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.campaignForm,
                                          "start_time",
                                          $$v
                                        )
                                      },
                                      expression: "campaignForm.start_time"
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
                            { attrs: { xs6: "", sm6: "", md3: "" } },
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
                                                "max-width": "140px"
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
                                                          _vm.campaignForm
                                                            .end_date
                                                        )
                                                      }
                                                    },
                                                    model: {
                                                      value:
                                                        _vm.campaignForm
                                                          .end_date,
                                                      callback: function($$v) {
                                                        _vm.$set(
                                                          _vm.campaignForm,
                                                          "end_date",
                                                          $$v
                                                        )
                                                      },
                                                      expression:
                                                        "campaignForm.end_date"
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
                                    attrs: { locale: _vm.getLocale() },
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
                            { attrs: { xs6: "", sm6: "", md3: "" } },
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
                                                "max-width": "100px"
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
                                                    staticStyle: {
                                                      width: "100px"
                                                    },
                                                    attrs: {
                                                      label: _vm.$t(
                                                        "labels.end_time"
                                                      ),
                                                      readonly: ""
                                                    },
                                                    model: {
                                                      value:
                                                        _vm.campaignForm
                                                          .end_time,
                                                      callback: function($$v) {
                                                        _vm.$set(
                                                          _vm.campaignForm,
                                                          "end_time",
                                                          $$v
                                                        )
                                                      },
                                                      expression:
                                                        "campaignForm.end_time"
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
                                    attrs: { format: "24hr" },
                                    model: {
                                      value: _vm.campaignForm.end_time,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.campaignForm,
                                          "end_time",
                                          $$v
                                        )
                                      },
                                      expression: "campaignForm.end_time"
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
                            { attrs: { xs12: "", sm12: "", md12: "" } },
                            [
                              _c("v-textarea", {
                                attrs: {
                                  label: _vm.$t("campaign.fields.description")
                                },
                                model: {
                                  value: _vm.campaignForm.description,
                                  callback: function($$v) {
                                    _vm.$set(
                                      _vm.campaignForm,
                                      "description",
                                      $$v
                                    )
                                  },
                                  expression: "campaignForm.description"
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-flex",
                            { attrs: { xs12: "", sm4: "", md4: "" } },
                            [
                              _c("v-checkbox", {
                                attrs: {
                                  label: _vm.$t("campaign.fields.sponsor")
                                },
                                model: {
                                  value: _vm.campaignForm.sponsor,
                                  callback: function($$v) {
                                    _vm.$set(_vm.campaignForm, "sponsor", $$v)
                                  },
                                  expression: "campaignForm.sponsor"
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-flex",
                            { attrs: { xs12: "", sm8: "", md8: "" } },
                            [
                              _c("v-select", {
                                attrs: {
                                  items: _vm.days,
                                  attach: "",
                                  chips: "",
                                  label: _vm.$t("campaign.fields.days"),
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
                                            on: { click: _vm.toggle }
                                          },
                                          [
                                            _c(
                                              "v-list-tile-action",
                                              [
                                                _c("v-icon", [
                                                  _vm._v(_vm._s(_vm.icon))
                                                ])
                                              ],
                                              1
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "v-list-item-content",
                                              [
                                                _c("v-list-item-title", [
                                                  _vm._v(
                                                    _vm._s(
                                                      _vm.$t(
                                                        "labels.select_all"
                                                      )
                                                    )
                                                  )
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
                                  value: _vm.campaignForm.days,
                                  callback: function($$v) {
                                    _vm.$set(_vm.campaignForm, "days", $$v)
                                  },
                                  expression: "campaignForm.days"
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
                                      id: "media",
                                      multiple: ""
                                    },
                                    on: { change: _vm.prepareMedia }
                                  }),
                                  _vm._v(
                                    "\n\t\t\t\t\t\t\t\t\t" +
                                      _vm._s(_vm.$t("buttons.choose_files")) +
                                      "\n\t\t\t\t\t\t\t\t\t"
                                  ),
                                  _c(
                                    "v-icon",
                                    { attrs: { right: "", dark: "" } },
                                    [_vm._v("cloud_upload")]
                                  )
                                ],
                                1
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "v-flex",
                            { attrs: { xs12: "", sm12: "", md12: "" } },
                            [
                              _c(
                                "v-toolbar",
                                { attrs: { color: "grey lighten-2" } },
                                [
                                  _c("v-toolbar-title", [
                                    _vm._v(_vm._s(_vm.$t("labels.new_files")))
                                  ]),
                                  _vm._v(" "),
                                  [
                                    _c(
                                      "v-dialog",
                                      {
                                        attrs: { "max-width": "1200px" },
                                        model: {
                                          value: _vm.videoDialog,
                                          callback: function($$v) {
                                            _vm.videoDialog = $$v
                                          },
                                          expression: "videoDialog"
                                        }
                                      },
                                      [
                                        _c("VideoCampaignForm", {
                                          attrs: {
                                            item: _vm.video_item,
                                            groups: _vm.groups,
                                            monitors: _vm.monitors,
                                            shops: _vm.shops
                                          },
                                          on: {
                                            cancel: function($event) {
                                              _vm.videoDialog = false
                                            },
                                            saveNew: _vm.saveNewMedia
                                          }
                                        })
                                      ],
                                      1
                                    )
                                  ]
                                ],
                                2
                              ),
                              _vm._v(" "),
                              [
                                _c(
                                  "v-dialog",
                                  {
                                    attrs: {
                                      "max-height": "700",
                                      "max-width": "900"
                                    },
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
                              [
                                _c(
                                  "v-dialog",
                                  {
                                    attrs: { width: "720", height: "600" },
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
                                        width: "720",
                                        height: "560",
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
                                  items: _vm.files,
                                  loading: _vm.isUploading,
                                  "no-data-text": _vm.$t("labels.no_data"),
                                  "loading-text": _vm.$t(
                                    "labels.loading_items"
                                  ),
                                  "items-per-page": 100,
                                  "footer-props": _vm.footer_props,
                                  "hide-default-footer": ""
                                },
                                scopedSlots: _vm._u([
                                  {
                                    key: "item.is_video",
                                    fn: function(ref) {
                                      var item = ref.item
                                      return [
                                        _c("v-icon", [
                                          _vm._v(
                                            "\n\t\t\t\t\t\t\t\t\t\t" +
                                              _vm._s(_vm.getVideoIcon(item)) +
                                              "\n\t\t\t\t\t\t\t\t\t"
                                          )
                                        ])
                                      ]
                                    }
                                  },
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
                                                return _vm.previewMedia(
                                                  item.name,
                                                  item.file_type
                                                )
                                              }
                                            }
                                          },
                                          [
                                            _vm._v(
                                              "\n\t\t\t\t\t\t\t\t\t\t" +
                                                _vm._s(item.original) +
                                                "\n\t\t\t\t\t\t\t\t\t"
                                            )
                                          ]
                                        )
                                      ]
                                    }
                                  },
                                  {
                                    key: "item.group_ids",
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
                                              return _vm.editNewVideo(item)
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
                                          "\n\t\t\t\t\t\t\t\t\t" +
                                            _vm._s(
                                              _vm.getGroupType(
                                                item.group_type_id
                                              )
                                            ) +
                                            "\n\t\t\t\t\t\t\t\t"
                                        )
                                      ]
                                    }
                                  },
                                  {
                                    key: "item.aspect_ratio_id",
                                    fn: function(ref) {
                                      var item = ref.item
                                      return [
                                        _c(
                                          "v-layout",
                                          {
                                            attrs: {
                                              wrap: "",
                                              "align-center": ""
                                            }
                                          },
                                          [
                                            _c("v-img", {
                                              attrs: {
                                                src: _vm.getScreenIcon(
                                                  item.aspect_ratio_id,
                                                  item.group_type_id
                                                ),
                                                contain: "",
                                                "max-width": "40",
                                                "max-height": "40"
                                              }
                                            }),
                                            _vm._v(" "),
                                            _c("v-img", {
                                              attrs: {
                                                src: _vm.getMonitorIcon(
                                                  item.aspect_ratio_id,
                                                  item.group_type_id
                                                ),
                                                contain: "",
                                                "max-width": "40",
                                                "max-height": "40"
                                              }
                                            })
                                          ],
                                          1
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
                                          "\n\t\t\t\t\t\t\t\t\t" +
                                            _vm._s(_vm.getStartTime(item)) +
                                            "\n\t\t\t\t\t\t\t\t"
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
                                          "\n\t\t\t\t\t\t\t\t\t" +
                                            _vm._s(_vm.getEndTime(item)) +
                                            "\n\t\t\t\t\t\t\t\t"
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
                                                return _vm.editNewVideo(item)
                                              }
                                            }
                                          },
                                          [
                                            _vm._v(
                                              "\n\t\t\t\t\t\t\t\t\t\tedit\n\t\t\t\t\t\t\t\t\t"
                                            )
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "v-icon",
                                          {
                                            attrs: { small: "" },
                                            on: {
                                              click: function($event) {
                                                return _vm.remove(item)
                                              }
                                            }
                                          },
                                          [
                                            _vm._v(
                                              "\n\t\t\t\t\t\t\t\t\t\tdelete\n\t\t\t\t\t\t\t\t\t"
                                            )
                                          ]
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
                    { attrs: { "grid-list-md": "", fluid: "" } },
                    [
                      _c(
                        "v-layout",
                        { attrs: { "justify-end": "" } },
                        [
                          _c("v-btn", { attrs: { to: "/admin/campaigns" } }, [
                            _vm._v(_vm._s(_vm.$t("buttons.cancel")))
                          ]),
                          _vm._v(" "),
                          _c(
                            "v-btn",
                            {
                              attrs: {
                                loading: _vm.isUploading1,
                                color: "info"
                              },
                              on: { click: _vm.save1 }
                            },
                            [_vm._v("Save and list")]
                          ),
                          _vm._v(" "),
                          _c(
                            "v-btn",
                            {
                              attrs: {
                                loading: _vm.isUploading2,
                                color: "info"
                              },
                              on: { click: _vm.save2 }
                            },
                            [_vm._v("Save and edit")]
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

/***/ "./resources/js/views/campaign/create.vue":
/*!************************************************!*\
  !*** ./resources/js/views/campaign/create.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _create_vue_vue_type_template_id_2c1926a8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create.vue?vue&type=template&id=2c1926a8& */ "./resources/js/views/campaign/create.vue?vue&type=template&id=2c1926a8&");
/* harmony import */ var _create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create.vue?vue&type=script&lang=js& */ "./resources/js/views/campaign/create.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _create_vue_vue_type_template_id_2c1926a8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _create_vue_vue_type_template_id_2c1926a8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/campaign/create.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/campaign/create.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/views/campaign/create.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./create.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/campaign/create.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/campaign/create.vue?vue&type=template&id=2c1926a8&":
/*!*******************************************************************************!*\
  !*** ./resources/js/views/campaign/create.vue?vue&type=template&id=2c1926a8& ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_template_id_2c1926a8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./create.vue?vue&type=template&id=2c1926a8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/campaign/create.vue?vue&type=template&id=2c1926a8&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_template_id_2c1926a8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_template_id_2c1926a8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);