(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["campaignEdit"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/campaign/edit.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/campaign/edit.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      videoDialog: false,
      imageDialog: false,
      posterDialog: false,
      campaignDateDialog: false,
      videoDialogIndex: 'old',
      imageDialogIndex: 'old',
      editedIndex: -1,
      isloading: true,
      items_per_page: -1,
      date1: '',
      date2: '',
      video_date1: '',
      video_date2: '',
      image_date1: '',
      image_date2: '',
      poster_date1: '',
      poster_date2: '',
      video_menu_date_start: false,
      video_menu_time_start: false,
      video_menu_date_end: false,
      video_menu_time_end: false,
      image_menu_date_start: false,
      image_menu_time_start: false,
      image_menu_date_end: false,
      image_menu_time_end: false,
      poster_menu_date_start: false,
      poster_menu_time_start: false,
      poster_menu_date_end: false,
      poster_menu_time_end: false,
      menu_date_start: false,
      menu_time_start: false,
      menu_date_end: false,
      menu_time_end: false,
      imagePreview: false,
      posterPreview: false,
      previewSrc: '',
      videoPreview: false,
      previewSrcVideo: '',
      user: null,
      filter_group: null,
      date_form: {
        start_date: '',
        days: [],
        start_time: '',
        end_date: '',
        end_time: ''
      },
      campaignForm: {
        name: '',
        description: '',
        sponsor: false,
        start_date: '',
        days: [],
        start_time: '',
        end_date: '',
        end_time: ''
      },
      videoForm: {
        file_type: '',
        start_date: '',
        days: [],
        start_time: '',
        end_date: '',
        end_time: '',
        groups: [],
        duration: '',
        availableGroups: []
      },
      video_item: {},
      imageForm: {
        file_type: '',
        start_date: '',
        days: [],
        start_time: '',
        end_date: '',
        end_time: '',
        groups: [],
        availableGroups: []
      },
      posterForm: {
        name: '',
        start_date: '',
        days: [],
        start_time: '',
        end_date: '',
        end_time: '',
        aspect_ratio_id: '',
        group_type: null,
        groups: [],
        availableGroups: []
      },
      days: ['Lun', 'Mar', 'Mer', 'Giov', 'Ven', 'Sab', 'Dom'],
      files: [],
      types: [],
      ratios: [],
      groups: [],
      monitors: [],
      shops: [],
      campaign: {},
      videos: [],
      photos: [],
      posters: [],
      icons: [],
      nameRules: [function (v) {
        return !!v || _this.$t('labels.name_required');
      }],
      date1Rules: [function (v) {
        return !!v || _this.$t('labels.start_date_required');
      }],
      date2Rules: [function (v) {
        return !!v || _this.$t('labels.start_date_required');
      }],
      daysRule: [function (v) {
        return v.length > 0 || _this.$t('labels.no_days');
      }],
      typeRules: [function (v) {
        return !!v || 'Il tipo della Locandina è obbligatorio';
      }],
      footer_props: {
        itemsPerPageText: "Righe per pagina",
        itemsPerPageAllText: "Tutti",
        itemsPerPageOptions: [100]
      }
    };
  },
  watch: {
    date1: function date1(val) {
      this.date_form.start_date = _helper_js__WEBPACK_IMPORTED_MODULE_1__["default"].formatDate(this.date1);
    },
    date2: function date2(val) {
      this.date_form.end_date = _helper_js__WEBPACK_IMPORTED_MODULE_1__["default"].formatDate(this.date2);
    },
    video_date1: function video_date1(val) {
      this.videoForm.start_date = _helper_js__WEBPACK_IMPORTED_MODULE_1__["default"].formatDate(this.video_date1);
    },
    video_date2: function video_date2(val) {
      this.videoForm.end_date = _helper_js__WEBPACK_IMPORTED_MODULE_1__["default"].formatDate(this.video_date2);
    },
    image_date1: function image_date1(val) {
      this.imageForm.start_date = _helper_js__WEBPACK_IMPORTED_MODULE_1__["default"].formatDate(this.image_date1);
    },
    image_date2: function image_date2(val) {
      this.imageForm.end_date = _helper_js__WEBPACK_IMPORTED_MODULE_1__["default"].formatDate(this.image_date2);
    },
    poster_date1: function poster_date1(val) {
      this.posterForm.start_date = _helper_js__WEBPACK_IMPORTED_MODULE_1__["default"].formatDate(this.poster_date1);
    },
    poster_date2: function poster_date2(val) {
      this.posterForm.end_date = _helper_js__WEBPACK_IMPORTED_MODULE_1__["default"].formatDate(this.poster_date2);
    },
    videoDialog: function videoDialog(val) {
      val || this.closeVideoForm();
    },
    imageDialog: function imageDialog(val) {
      val || this.closeImageForm();
    }
  },
  created: function created() {
    this.init();
  },
  computed: {
    isByMonitor: function isByMonitor() {
      return this.user === null ? this.$t('videos.fields.groups') : this.user.by_monitor;
    },
    videoHeaders: function videoHeaders() {
      return [// { text: this.$t('labels.media'), align: 'center', value: 'filename', sortable: false},
      {
        text: this.$t('labels.original'),
        align: 'center',
        value: 'original',
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
        text: this.$t('videos.fields.size'),
        align: 'center',
        value: 'size',
        sortable: false
      }, {
        text: this.$t('videos.fields.duration'),
        align: 'center',
        value: 'duration',
        sortable: false
      }, {
        text: this.isByMonitor === '0' ? this.$t('videos.fields.groups') : this.$t('labels.monitors'),
        align: 'center',
        value: 'group_ids',
        sortable: false
      }, // { text: this.$t('videos.fields.type'), value: 'group_type_id', align: 'center' },
      {
        text: 'Aspect Ratio',
        align: 'center',
        value: 'aspect_ratio_id',
        sortable: false
      }, {
        text: this.$t('labels.actions'),
        value: 'actions',
        sortable: false
      }];
    },
    photoHeaders: function photoHeaders() {
      return [// { text: this.$t('labels.media'), align: 'center', value: 'filename', sortable: false},
      {
        text: this.$t('labels.original'),
        align: 'center',
        value: 'original',
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
        text: this.$t('images.fields.size'),
        align: 'center',
        value: 'size',
        sortable: false
      }, {
        text: this.$t('images.fields.duration'),
        align: 'center',
        value: 'duration',
        sortable: false
      }, {
        text: this.isByMonitor === '0' ? this.$t('videos.fields.groups') : this.$t('labels.monitors'),
        align: 'center',
        value: 'group_ids',
        sortable: false
      }, // { text: this.$t('images.fields.type'), value: 'group_type_id', align: 'center' },
      {
        text: 'Aspect Ratio',
        align: 'center',
        value: 'aspect_ratio_id',
        sortable: false
      }, {
        text: this.$t('labels.actions'),
        value: 'actions',
        sortable: false
      }];
    },
    posterHeaders: function posterHeaders() {
      return [{
        text: this.$t('labels.poster'),
        align: 'center',
        value: 'name',
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
        text: this.$t('images.fields.size'),
        align: 'center',
        value: 'size',
        sortable: false
      }, {
        text: this.$t('images.fields.duration'),
        align: 'center',
        value: 'duration',
        sortable: false
      }, {
        text: this.isByMonitor === '0' ? this.$t('videos.fields.groups') : this.$t('labels.monitors'),
        align: 'center',
        value: 'group_ids',
        sortable: false
      }, // { text: this.$t('images.fields.type'), value: 'group_type_id', align: 'center' },
      {
        text: 'Aspect Ratio',
        align: 'center',
        value: 'aspect_ratio_id',
        sortable: false
      }, {
        text: this.$t('labels.actions'),
        value: 'actions',
        sortable: false
      }];
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
      }, // { text: this.$t('videos.fields.file_name'), align: 'center', value: 'name', sortable: false},
      {
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
      }, // { text: this.$t('images.fields.type'), value: 'group_type_id', align: 'center' },
      {
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
    // allDays () {
    //     return this.videoForm.days.length === this.days.length
    // },
    // someDays () {
    //     return this.videoForm.days.length > 0 && !this.allDays
    // },
    // allGroups () {
    //     return this.videoForm.groups.length === this.groups.length
    // },
    // someGroups () {
    //     return this.videoForm.groups.length > 0 && !this.allGroups
    // },
    icon: function icon() {
      if (this.allDays) return 'close';
      if (this.someDays) return 'indeterminate_check_box';
      return 'check_box_outline_blank';
    },
    iconGroups: function iconGroups() {
      if (this.allGroups) return 'close';
      if (this.someGroups) return 'indeterminate_check_box';
      return 'check_box_outline_blank';
    }
  },
  methods: {
    init: function init() {
      var _this2 = this;

      axios.get(_settings_js__WEBPACK_IMPORTED_MODULE_0__["settings"].root_url + '/api/campaigns/edit/' + this.$route.params.id).then(function (response) {
        _this2.user = response.data.user;
        _this2.icons = response.data.icons;
        _this2.types = response.data.types;
        _this2.ratios = response.data.ratios;
        _this2.groups = response.data.groups;
        _this2.monitors = response.data.monitors;
        _this2.shops = response.data.shops;
        _this2.videos = response.data.videos;
        _this2.photos = response.data.photos;
        _this2.posters = response.data.posters;
        _this2.campaign = response.data.campaign;
        _this2.campaignForm.name = _this2.campaign.name;
        _this2.date1 = _this2.campaign.start_date;
        _this2.campaignForm.start_date = _this2.campaign.start_date;
        _this2.campaignForm.start_time = _this2.campaign.start_time;
        _this2.date2 = _this2.campaign.end_date;
        _this2.campaignForm.end_date = _this2.campaign.end_date;
        _this2.campaignForm.end_time = _this2.campaign.end_time;
        _this2.campaignForm.description = _this2.campaign.description;
        _this2.campaignForm.sponsor = _this2.campaign.sponsor === "1" ? true : false;
        _this2.campaignForm.days = _this2.campaign.days.split(',');
        _this2.isloading = false;
      })["catch"](function (response) {
        console.log("error");
      });
    },
    getVideos: function getVideos() {
      var _this3 = this;

      axios.get(_settings_js__WEBPACK_IMPORTED_MODULE_0__["settings"].root_url + '/api/videos-campaign/' + this.$route.params.id).then(function (response) {
        _this3.videos = response.data.videos;
      })["catch"](function (response) {
        console.log("error");
      });
    },
    getImages: function getImages() {
      var _this4 = this;

      axios.get(_settings_js__WEBPACK_IMPORTED_MODULE_0__["settings"].root_url + '/api/images-campaign/' + this.$route.params.id).then(function (response) {
        _this4.photos = response.data.photos;
      })["catch"](function (response) {
        console.log("error");
      });
    },
    update: function update() {
      var _this5 = this;

      // if (this.$refs.form.validate()) {
      axios.post(_settings_js__WEBPACK_IMPORTED_MODULE_0__["settings"].root_url + '/api/campaigns/update/' + this.$route.params.id, {
        name: this.campaignForm.name,
        description: this.campaignForm.description,
        sponsor: this.campaignForm.sponsor,
        // days: this.campaignForm.days.toString(),
        // start_date: this.date1,
        // start_time: this.campaignForm.start_time,
        // end_date: this.date2,
        // end_time: this.campaignForm.end_time,
        media: this.files
      }).then(function (response) {
        _this5.files = [];

        _this5.getImages();

        _this5.getVideos(); // this.$router.push({name: 'campaigns'});

      })["catch"](function (error) {}); // }
    },
    onSaveDate: function onSaveDate() {
      var _this6 = this;

      axios.post(_settings_js__WEBPACK_IMPORTED_MODULE_0__["settings"].root_url + '/api/campaigns/update-date/' + this.$route.params.id, {
        days: this.date_form.days.toString(),
        start_date: this.date1,
        start_time: this.date_form.start_time,
        end_date: this.date2,
        end_time: this.date_form.end_time
      }).then(function (response) {
        _this6.campaign = response.data.campaign;
        _this6.videos = response.data.videos;
        _this6.posters = response.data.posters;
        _this6.photos = response.data.photos;
        _this6.campaignDateDialog = false; // this.$router.push({name: 'campaigns'});
      })["catch"](function (error) {});
    },
    onCancelDate: function onCancelDate() {
      this.campaignDateDialog = false;
    },
    // deleteVideo(item){
    // 	var r = confirm(this.$t('videos.fields.delete_confirm'));
    //     	if(r == true){
    //     		axios.post(settings.root_url + '/api/videos/delete/' + item.id)
    //               .then(response =>  {
    // 			this.getVideos();
    //               }).catch(error => {
    //               });
    //     	}
    // },
    closeImageForm: function closeImageForm() {
      this.imageDialog = false;
    },
    closeVideoForm: function closeVideoForm() {
      this.videoDialog = false;
    },
    closePosterForm: function closePosterForm() {
      this.posterDialog = false;
    },
    editDateBulk: function editDateBulk() {
      this.date_form.start_date = _helper_js__WEBPACK_IMPORTED_MODULE_1__["default"].formatDate(this.campaign.start_date);
      this.date_form.end_date = _helper_js__WEBPACK_IMPORTED_MODULE_1__["default"].formatDate(this.campaign.end_date);
      this.date_form.start_time = this.campaign.start_time;
      this.date_form.end_time = this.campaign.end_time;
      this.date_form.days = this.campaign.days.split(',');
      this.campaignDateDialog = true;
    },
    editImage: function editImage(item) {
      this.video_item = Object.assign({}, item);
      this.video_item.media_type = "image", this.video_item.start_date = _helper_js__WEBPACK_IMPORTED_MODULE_1__["default"].formatDate(item.start_date);
      this.video_item.end_date = _helper_js__WEBPACK_IMPORTED_MODULE_1__["default"].formatDate(item.end_date);
      this.video_item.date1 = item.start_date;
      this.video_item.date2 = item.end_date;
      this.video_item.days = item.days != null ? item.days.split(',') : null;
      this.video_item.by_monitor = this.user.by_monitor;
      this.video_item.editedIndex = item.id;
      this.imageDialog = true;
    },
    editNewImage: function editNewImage(item) {
      this.video_item = Object.assign({}, item);
      this.video_item.is_new = true;
      this.video_item.media_type = "image", this.video_item.start_date = _helper_js__WEBPACK_IMPORTED_MODULE_1__["default"].formatDate(item.start_date);
      this.video_item.end_date = _helper_js__WEBPACK_IMPORTED_MODULE_1__["default"].formatDate(item.end_date);
      this.video_item.date1 = item.start_date;
      this.video_item.date2 = item.end_date;
      this.video_item.days = item.days != null ? item.days.split(',') : null;
      this.video_item.by_monitor = this.user.by_monitor;
      this.video_item.editedIndex = item.index;
      this.imageDialog = true;
    },
    editVideo: function editVideo(item) {
      this.video_item = Object.assign({}, item);
      this.video_item.media_type = "video", this.video_item.start_date = _helper_js__WEBPACK_IMPORTED_MODULE_1__["default"].formatDate(item.start_date);
      this.video_item.end_date = _helper_js__WEBPACK_IMPORTED_MODULE_1__["default"].formatDate(item.end_date);
      this.video_item.date1 = item.start_date;
      this.video_item.date2 = item.end_date;
      this.video_item.days = item.days != null ? item.days.split(',') : null;
      this.video_item.by_monitor = this.user.by_monitor;
      this.video_item.editedIndex = item.id;
      this.videoDialog = true;
    },
    editPoster: function editPoster(item) {
      this.video_item = Object.assign({}, item);
      this.video_item.media_type = "poster", this.video_item.start_date = _helper_js__WEBPACK_IMPORTED_MODULE_1__["default"].formatDate(item.start_date);
      this.video_item.end_date = _helper_js__WEBPACK_IMPORTED_MODULE_1__["default"].formatDate(item.end_date);
      this.video_item.date1 = item.start_date;
      this.video_item.date2 = item.end_date;
      this.video_item.days = item.days != null ? item.days.split(',') : null;
      this.video_item.by_monitor = this.user.by_monitor;
      this.video_item.editedIndex = item.id;
      this.posterDialog = true;
    },
    getVideoGroups: function getVideoGroups(video) {
      return this.groups.filter(function (group) {
        return video.group_ids.includes(group.id) == true;
      });
    },
    saveNewMedia: function saveNewMedia(new_image) {
      for (var i = this.files.length - 1; i >= 0; i--) {
        if (this.files[i].index == new_image.index) {
          this.files[i].start_date = new_image.date1;
          this.files[i].end_date = new_image.date2;
          this.files[i].start_time = new_image.start_time;
          this.files[i].end_time = new_image.end_time;
          this.files[i].days = new_image.days.toString();
          this.files[i].duration = new_image.duration;
          this.files[i].group_ids = new_image.groups.map(function (el) {
            return el.id;
          }).toString();
          this.files[i].monitor_ids = new_image.monitor_ids.toString();
          break;
        }
      }

      this.imageDialog = false;
    },
    saveImage: function saveImage() {
      this.getImages();
      this.imageDialog = false;
    },
    saveVideo: function saveVideo() {
      this.getVideos();
      this.videoDialog = false;
    },
    savePoster: function savePoster() {
      this.getPosters();
      this.posterDialog = false;
    },
    deleteImage: function deleteImage() {
      this.getImages();
      this.imageDialog = false;
    },
    deleteVideo: function deleteVideo() {
      this.getVideos();
      this.videoDialog = false;
    },
    deletePoster: function deletePoster() {
      this.getPosters();
      this.posterDialog = false;
    },
    getPosters: function getPosters() {
      var _this7 = this;

      axios.get(_settings_js__WEBPACK_IMPORTED_MODULE_0__["settings"].root_url + '/api/get-posters').then(function (response) {
        _this7.posters = response.data.posters;
      })["catch"](function (error) {});
    },
    onTypeChange: function onTypeChange() {
      this.posterForm.groups = [];
      this.posterForm.availableGroups = [];
    },
    // deleteImage(item){
    // 	var r = confirm(this.$t('videos.fields.delete_confirm'));
    //     	if(r == true){
    //     		axios.post(settings.root_url + '/api/images/delete/' + item.id)
    //               .then(response =>  {
    // 			this.getImages();
    //               }).catch(error => {
    //               });
    //     	}
    // },
    getGroupName: function getGroupName(groupId) {
      var group = this.groups.filter(function (group) {
        return group.id == groupId;
      });
      if (group.length) return group[0].name;else return "Unknow group";
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
      }); // var ratio = this.ratios.filter(function(ratio){
      // 	return ratio.id == ratioId;
      // });
      // return ratio[0].name;
    },
    getGroupType: function getGroupType(id) {
      var types = this.types.filter(function (type) {
        return type.id == id;
      });
      return types[0].name;
    },
    toggle: function toggle() {
      var _this8 = this;

      this.$nextTick(function () {
        if (_this8.allDays) {
          _this8.campaignForm.days = [];
        } else {
          _this8.campaignForm.days = _this8.days.slice();
        }
      });
    },
    toggle2: function toggle2() {
      var _this9 = this;

      this.$nextTick(function () {
        if (_this9.allDays) {
          _this9.videoForm.days = [];
        } else {
          _this9.videoForm.days = _this9.days.slice();
        }
      });
    },
    getLocale: function getLocale() {
      return _helper_js__WEBPACK_IMPORTED_MODULE_1__["default"].getLocale();
    },
    toggleGroups: function toggleGroups() {
      var _this10 = this;

      this.$nextTick(function () {
        if (_this10.allGroups) {
          _this10.videoForm.groups = [];
        } else {
          _this10.videoForm.groups = _this10.groups.slice();
        }
      });
    },
    prepareMedia: function prepareMedia(e) {
      var _this11 = this;

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
            counter++;

            if (response.data.frame_rate == 25 || response.data.frame_rate == 0) {
              var _file;

              var file = (_file = {
                'file_type': response.data.file_type,
                'name': response.data.filename,
                'original': response.data.original
              }, _defineProperty(_file, "file_type", response.data.file_type), _defineProperty(_file, 'width', response.data.width), _defineProperty(_file, 'height', response.data.height), _defineProperty(_file, 'duration', response.data.duration), _defineProperty(_file, 'group_ids', ''), _defineProperty(_file, 'monitor_ids', ''), _defineProperty(_file, 'group_type_id', response.data.group_type_id), _defineProperty(_file, 'filesize', response.data.filesize), _defineProperty(_file, 'aspect_ratio_id', response.data.aspect_ratio_id), _defineProperty(_file, 'start_date', _this11.date1), _defineProperty(_file, 'end_date', _this11.date2), _defineProperty(_file, 'start_time', _this11.campaignForm.start_time), _defineProperty(_file, 'end_time', _this11.campaignForm.end_time), _defineProperty(_file, 'days', _this11.campaignForm.days.toString()), _defineProperty(_file, 'index', _this11.files.length), _file);

              _this11.files.push(file);
            } else {
              _this11.$toastr.e(response.data.original, _this11.$t('labels.no_framerate_match'));
            }

            if (counter >= items.length) _this11.isUploading = false;
          })["catch"](function (error) {
            _this11.isUploading = false;
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
    deleteCampaign: function deleteCampaign() {
      var _this12 = this;

      var r = confirm(this.$t('labels.delete_confirm'));

      if (r == true) {
        axios.post(_settings_js__WEBPACK_IMPORTED_MODULE_0__["settings"].root_url + '/api/campaigns/delete/' + this.campaign.id).then(function (response) {
          _this12.$router.push({
            name: 'campaigns'
          });
        })["catch"](function (error) {});
      }
    },
    getVideoIcon: function getVideoIcon(item) {
      if (item.file_type == "video") return "videocam";else if (item.file_type == "image") return "photo";
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
    getAvailableGroups_: function getAvailableGroups_(aspect_ratio_id, group_type_id) {
      return this.groups.filter(function (group) {
        return group.aspect_ratio_id == aspect_ratio_id && group.group_type_id == group_type_id;
      });
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
      } else if (type == 'poster') {
        this.previewSrc = _settings_js__WEBPACK_IMPORTED_MODULE_0__["settings"].root_url + '/users/' + this.user.id + '/posters/' + filename;
        this.posterPreview = true;
      } else if (type == 'video') {
        this.previewSrcVideo = _settings_js__WEBPACK_IMPORTED_MODULE_0__["settings"].root_url + '/media/videos/' + filename;
        this.videoPreview = true;
      }
    },
    isInGroup: function isInGroup(media, group) {
      var group_ids = media.group_ids.split(',').map(Number);
      return group_ids.includes(group.id) != false;
    },
    getFilteredVideo: function getFilteredVideo() {
      var self = this;
      return self.videos.filter(function (video) {
        return !self.filter_group || self.isInGroup(video, self.filter_group);
      });
    },
    getFilteredPhotos: function getFilteredPhotos() {
      var self = this;
      return self.photos.filter(function (photo) {
        return !self.filter_group || self.isInGroup(photo, self.filter_group);
      });
    },
    getFilteredPosters: function getFilteredPosters() {
      var self = this;
      return self.posters.filter(function (poster) {
        return !self.filter_group || self.isInGroup(poster, self.filter_group);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/campaign/edit.vue?vue&type=template&id=3716e8ba&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/campaign/edit.vue?vue&type=template&id=3716e8ba& ***!
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
                  _vm._v(_vm._s(_vm.$t("campaign.fields.edit")))
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
                            "v-dialog",
                            {
                              attrs: { width: "800" },
                              model: {
                                value: _vm.campaignDateDialog,
                                callback: function($$v) {
                                  _vm.campaignDateDialog = $$v
                                },
                                expression: "campaignDateDialog"
                              }
                            },
                            [
                              _c(
                                "v-card",
                                [
                                  _c(
                                    "v-container",
                                    { attrs: { fluid: "" } },
                                    [
                                      _c(
                                        "v-form",
                                        {
                                          ref: "dateForm",
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
                                                {
                                                  attrs: {
                                                    xs6: "",
                                                    sm6: "",
                                                    md6: ""
                                                  }
                                                },
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
                                                                    "max-width":
                                                                      "140px"
                                                                  },
                                                                  attrs: {
                                                                    "align-center":
                                                                      ""
                                                                  }
                                                                },
                                                                [
                                                                  _c(
                                                                    "v-btn",
                                                                    _vm._g(
                                                                      {
                                                                        attrs: {
                                                                          icon:
                                                                            ""
                                                                        }
                                                                      },
                                                                      on
                                                                    ),
                                                                    [
                                                                      _c(
                                                                        "v-icon",
                                                                        [
                                                                          _vm._v(
                                                                            "event"
                                                                          )
                                                                        ]
                                                                      )
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
                                                                          readonly:
                                                                            "",
                                                                          rules:
                                                                            _vm.date1Rules
                                                                        },
                                                                        on: {
                                                                          blur: function(
                                                                            $event
                                                                          ) {
                                                                            _vm.date1 = _vm.parseDate(
                                                                              _vm
                                                                                .date_form
                                                                                .start_date
                                                                            )
                                                                          }
                                                                        },
                                                                        model: {
                                                                          value:
                                                                            _vm
                                                                              .date_form
                                                                              .start_date,
                                                                          callback: function(
                                                                            $$v
                                                                          ) {
                                                                            _vm.$set(
                                                                              _vm.date_form,
                                                                              "start_date",
                                                                              $$v
                                                                            )
                                                                          },
                                                                          expression:
                                                                            "date_form.start_date"
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
                                                        value:
                                                          _vm.menu_date_start,
                                                        callback: function(
                                                          $$v
                                                        ) {
                                                          _vm.menu_date_start = $$v
                                                        },
                                                        expression:
                                                          "menu_date_start"
                                                      }
                                                    },
                                                    [
                                                      _vm._v(" "),
                                                      _c("v-date-picker", {
                                                        attrs: {
                                                          locale: _vm.getLocale()
                                                        },
                                                        model: {
                                                          value: _vm.date1,
                                                          callback: function(
                                                            $$v
                                                          ) {
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
                                                {
                                                  attrs: {
                                                    xs6: "",
                                                    sm6: "",
                                                    md6: ""
                                                  }
                                                },
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
                                                                    "max-width":
                                                                      "100px"
                                                                  },
                                                                  attrs: {
                                                                    "align-center":
                                                                      ""
                                                                  }
                                                                },
                                                                [
                                                                  _c(
                                                                    "v-btn",
                                                                    _vm._g(
                                                                      {
                                                                        attrs: {
                                                                          icon:
                                                                            ""
                                                                        }
                                                                      },
                                                                      on
                                                                    ),
                                                                    [
                                                                      _c(
                                                                        "v-icon",
                                                                        [
                                                                          _vm._v(
                                                                            "access_time"
                                                                          )
                                                                        ]
                                                                      )
                                                                    ],
                                                                    1
                                                                  ),
                                                                  _vm._v(" "),
                                                                  _c(
                                                                    "v-text-field",
                                                                    _vm._g(
                                                                      {
                                                                        staticStyle: {
                                                                          width:
                                                                            "120px"
                                                                        },
                                                                        attrs: {
                                                                          label: _vm.$t(
                                                                            "labels.start_time"
                                                                          ),
                                                                          readonly:
                                                                            ""
                                                                        },
                                                                        model: {
                                                                          value:
                                                                            _vm
                                                                              .date_form
                                                                              .start_time,
                                                                          callback: function(
                                                                            $$v
                                                                          ) {
                                                                            _vm.$set(
                                                                              _vm.date_form,
                                                                              "start_time",
                                                                              $$v
                                                                            )
                                                                          },
                                                                          expression:
                                                                            "date_form.start_time"
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
                                                        value:
                                                          _vm.menu_time_start,
                                                        callback: function(
                                                          $$v
                                                        ) {
                                                          _vm.menu_time_start = $$v
                                                        },
                                                        expression:
                                                          "menu_time_start"
                                                      }
                                                    },
                                                    [
                                                      _vm._v(" "),
                                                      _c("v-time-picker", {
                                                        attrs: {
                                                          format: "24hr"
                                                        },
                                                        model: {
                                                          value:
                                                            _vm.date_form
                                                              .start_time,
                                                          callback: function(
                                                            $$v
                                                          ) {
                                                            _vm.$set(
                                                              _vm.date_form,
                                                              "start_time",
                                                              $$v
                                                            )
                                                          },
                                                          expression:
                                                            "date_form.start_time"
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
                                            { attrs: { wrap: "" } },
                                            [
                                              _c(
                                                "v-flex",
                                                {
                                                  attrs: {
                                                    xs6: "",
                                                    sm6: "",
                                                    md6: ""
                                                  }
                                                },
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
                                                                    "max-width":
                                                                      "140px"
                                                                  },
                                                                  attrs: {
                                                                    "align-center":
                                                                      ""
                                                                  }
                                                                },
                                                                [
                                                                  _c(
                                                                    "v-btn",
                                                                    _vm._g(
                                                                      {
                                                                        attrs: {
                                                                          icon:
                                                                            ""
                                                                        }
                                                                      },
                                                                      on
                                                                    ),
                                                                    [
                                                                      _c(
                                                                        "v-icon",
                                                                        [
                                                                          _vm._v(
                                                                            "event"
                                                                          )
                                                                        ]
                                                                      )
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
                                                                          readonly:
                                                                            "",
                                                                          rules:
                                                                            _vm.date2Rules
                                                                        },
                                                                        on: {
                                                                          blur: function(
                                                                            $event
                                                                          ) {
                                                                            _vm.date2 = _vm.parseDate(
                                                                              _vm
                                                                                .date_form
                                                                                .end_date
                                                                            )
                                                                          }
                                                                        },
                                                                        model: {
                                                                          value:
                                                                            _vm
                                                                              .date_form
                                                                              .end_date,
                                                                          callback: function(
                                                                            $$v
                                                                          ) {
                                                                            _vm.$set(
                                                                              _vm.date_form,
                                                                              "end_date",
                                                                              $$v
                                                                            )
                                                                          },
                                                                          expression:
                                                                            "date_form.end_date"
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
                                                        value:
                                                          _vm.menu_date_end,
                                                        callback: function(
                                                          $$v
                                                        ) {
                                                          _vm.menu_date_end = $$v
                                                        },
                                                        expression:
                                                          "menu_date_end"
                                                      }
                                                    },
                                                    [
                                                      _vm._v(" "),
                                                      _c(
                                                        "v-date-picker",
                                                        {
                                                          attrs: {
                                                            locale: _vm.getLocale()
                                                          },
                                                          model: {
                                                            value: _vm.date2,
                                                            callback: function(
                                                              $$v
                                                            ) {
                                                              _vm.date2 = $$v
                                                            },
                                                            expression: "date2"
                                                          }
                                                        },
                                                        [
                                                          _vm._v(
                                                            "\n\t\t\t\t\t\t\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t\t\t\t\t\t"
                                                          )
                                                        ]
                                                      )
                                                    ],
                                                    1
                                                  )
                                                ],
                                                1
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "v-flex",
                                                {
                                                  attrs: {
                                                    xs6: "",
                                                    sm6: "",
                                                    md6: ""
                                                  }
                                                },
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
                                                                    "max-width":
                                                                      "100px"
                                                                  },
                                                                  attrs: {
                                                                    "align-center":
                                                                      ""
                                                                  }
                                                                },
                                                                [
                                                                  _c(
                                                                    "v-btn",
                                                                    _vm._g(
                                                                      {
                                                                        attrs: {
                                                                          icon:
                                                                            ""
                                                                        }
                                                                      },
                                                                      on
                                                                    ),
                                                                    [
                                                                      _c(
                                                                        "v-icon",
                                                                        [
                                                                          _vm._v(
                                                                            "access_time"
                                                                          )
                                                                        ]
                                                                      )
                                                                    ],
                                                                    1
                                                                  ),
                                                                  _vm._v(" "),
                                                                  _c(
                                                                    "v-text-field",
                                                                    _vm._g(
                                                                      {
                                                                        staticStyle: {
                                                                          width:
                                                                            "120px"
                                                                        },
                                                                        attrs: {
                                                                          label: _vm.$t(
                                                                            "labels.end_time"
                                                                          ),
                                                                          readonly:
                                                                            ""
                                                                        },
                                                                        model: {
                                                                          value:
                                                                            _vm
                                                                              .date_form
                                                                              .end_time,
                                                                          callback: function(
                                                                            $$v
                                                                          ) {
                                                                            _vm.$set(
                                                                              _vm.date_form,
                                                                              "end_time",
                                                                              $$v
                                                                            )
                                                                          },
                                                                          expression:
                                                                            "date_form.end_time"
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
                                                        value:
                                                          _vm.menu_time_end,
                                                        callback: function(
                                                          $$v
                                                        ) {
                                                          _vm.menu_time_end = $$v
                                                        },
                                                        expression:
                                                          "menu_time_end"
                                                      }
                                                    },
                                                    [
                                                      _vm._v(" "),
                                                      _c("v-time-picker", {
                                                        attrs: {
                                                          format: "24hr"
                                                        },
                                                        model: {
                                                          value:
                                                            _vm.date_form
                                                              .end_time,
                                                          callback: function(
                                                            $$v
                                                          ) {
                                                            _vm.$set(
                                                              _vm.date_form,
                                                              "end_time",
                                                              $$v
                                                            )
                                                          },
                                                          expression:
                                                            "date_form.end_time"
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
                                          _c("v-select", {
                                            attrs: {
                                              items: _vm.days,
                                              attach: "",
                                              chips: "",
                                              label: _vm.$t(
                                                "campaign.fields.days"
                                              ),
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
                                                          click: _vm.toggle
                                                        }
                                                      },
                                                      [
                                                        _c(
                                                          "v-list-tile-action",
                                                          [
                                                            _c(
                                                              "v-icon",
                                                              {
                                                                attrs: {
                                                                  color:
                                                                    _vm
                                                                      .date_form
                                                                      .days
                                                                      .length >
                                                                    0
                                                                      ? "indigo darken-4"
                                                                      : ""
                                                                }
                                                              },
                                                              [
                                                                _vm._v(
                                                                  _vm._s(
                                                                    _vm.icon
                                                                  )
                                                                )
                                                              ]
                                                            )
                                                          ],
                                                          1
                                                        ),
                                                        _vm._v(" "),
                                                        _c(
                                                          "v-list-item-content",
                                                          [
                                                            _c(
                                                              "v-list-item-title",
                                                              [
                                                                _vm._v(
                                                                  _vm._s(
                                                                    _vm.$t(
                                                                      "labels.select_all"
                                                                    )
                                                                  )
                                                                )
                                                              ]
                                                            )
                                                          ],
                                                          1
                                                        )
                                                      ],
                                                      1
                                                    ),
                                                    _vm._v(" "),
                                                    _c("v-divider", {
                                                      staticClass: "mt-2"
                                                    })
                                                  ]
                                                },
                                                proxy: true
                                              }
                                            ]),
                                            model: {
                                              value: _vm.date_form.days,
                                              callback: function($$v) {
                                                _vm.$set(
                                                  _vm.date_form,
                                                  "days",
                                                  $$v
                                                )
                                              },
                                              expression: "date_form.days"
                                            }
                                          }),
                                          _vm._v(" "),
                                          _c(
                                            "v-alert",
                                            {
                                              staticClass: "mt-8",
                                              staticStyle: {
                                                "margin-top": "100px"
                                              },
                                              attrs: {
                                                type: "error",
                                                outlined: ""
                                              }
                                            },
                                            [
                                              _vm._v(
                                                "\n\t\t\t\t\t\t\t\t\t      " +
                                                  _vm._s(
                                                    _vm.$t(
                                                      "campaign.fields.alert"
                                                    )
                                                  ) +
                                                  "\n\t\t\t\t\t\t\t\t\t    "
                                              )
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "v-layout",
                                            {
                                              attrs: {
                                                wrap: "",
                                                "justify-end": ""
                                              }
                                            },
                                            [
                                              _c(
                                                "v-btn",
                                                {
                                                  staticClass: "mr-2",
                                                  on: {
                                                    click: _vm.onCancelDate
                                                  }
                                                },
                                                [
                                                  _vm._v(
                                                    _vm._s(
                                                      _vm.$t("buttons.cancel")
                                                    )
                                                  )
                                                ]
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "v-btn",
                                                {
                                                  attrs: { color: "info" },
                                                  on: { click: _vm.onSaveDate }
                                                },
                                                [
                                                  _vm._v(
                                                    _vm._s(
                                                      _vm.$t("buttons.save")
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
                            { attrs: { sm12: "" } },
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
                            { attrs: { xs12: "", sm12: "", md12: "" } },
                            [
                              _c(
                                "v-layout",
                                {
                                  attrs: {
                                    wrap: "",
                                    "justify-space-between": "",
                                    "align-center": ""
                                  }
                                },
                                [
                                  _c("v-checkbox", {
                                    attrs: {
                                      label: _vm.$t("campaign.fields.sponsor")
                                    },
                                    model: {
                                      value: _vm.campaignForm.sponsor,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.campaignForm,
                                          "sponsor",
                                          $$v
                                        )
                                      },
                                      expression: "campaignForm.sponsor"
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c(
                                    "v-btn",
                                    { on: { click: _vm.editDateBulk } },
                                    [
                                      _c("v-icon", { attrs: { left: "" } }, [
                                        _vm._v("calendar_today")
                                      ]),
                                      _vm._v(
                                        " " +
                                          _vm._s(
                                            _vm.$t(
                                              "buttons.campaign_date_change"
                                            )
                                          )
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
                          _vm.user === null || _vm.user.by_monitor === "0"
                            ? _c(
                                "v-flex",
                                { attrs: { xs12: "", sm6: "" } },
                                [
                                  _c("v-select", {
                                    attrs: {
                                      items: _vm.groups,
                                      "item-text": "name",
                                      "item-value": "id",
                                      label: _vm.$t("labels.filter_by_group"),
                                      "return-object": ""
                                    },
                                    model: {
                                      value: _vm.filter_group,
                                      callback: function($$v) {
                                        _vm.filter_group = $$v
                                      },
                                      expression: "filter_group"
                                    }
                                  })
                                ],
                                1
                              )
                            : _vm._e(),
                          _vm._v(" "),
                          _c(
                            "v-flex",
                            { attrs: { md12: "" } },
                            [
                              _c(
                                "v-toolbar",
                                { attrs: { color: "grey lighten-2" } },
                                [
                                  _c("v-toolbar-title", [
                                    _vm._v(
                                      _vm._s(_vm.$t("campaign.fields.videos"))
                                    )
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
                                            save: _vm.saveVideo,
                                            saveNew: _vm.saveNewMedia,
                                            deleteItem: function($event) {
                                              return _vm.deleteVideo()
                                            }
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
                                        _c("video-preview", {
                                          attrs: { src: _vm.previewSrcVideo }
                                        })
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
                                  headers: _vm.videoHeaders,
                                  items: _vm.getFilteredVideo(),
                                  loading: _vm.isloading,
                                  "no-data-text": _vm.$t(
                                    "labels.no_data_available"
                                  ),
                                  "loading-text": _vm.$t(
                                    "labels.loading_items"
                                  ),
                                  "items-per-page": 100,
                                  "footer-props": _vm.footer_props
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
                                                return _vm.previewMedia(
                                                  item.video,
                                                  "video"
                                                )
                                              }
                                            }
                                          },
                                          [_vm._v(_vm._s(item.original))]
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
                                              return _vm.editVideo(item)
                                            }
                                          }
                                        })
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
                                          "v-btn",
                                          {
                                            attrs: { icon: "" },
                                            on: {
                                              click: function($event) {
                                                return _vm.editVideo(item)
                                              }
                                            }
                                          },
                                          [_c("v-icon", [_vm._v("edit")])],
                                          1
                                        )
                                      ]
                                    }
                                  }
                                ])
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-flex",
                            { attrs: { md12: "" } },
                            [
                              _c("br"),
                              _c("br"),
                              _vm._v(" "),
                              _c(
                                "v-toolbar",
                                { attrs: { color: "grey lighten-2" } },
                                [
                                  _c("v-toolbar-title", [
                                    _vm._v(
                                      _vm._s(_vm.$t("campaign.fields.images"))
                                    )
                                  ]),
                                  _vm._v(" "),
                                  [
                                    _c(
                                      "v-dialog",
                                      {
                                        attrs: { "max-width": "1200px" },
                                        model: {
                                          value: _vm.imageDialog,
                                          callback: function($$v) {
                                            _vm.imageDialog = $$v
                                          },
                                          expression: "imageDialog"
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
                                              _vm.imageDialog = false
                                            },
                                            save: _vm.saveImage,
                                            saveNew: _vm.saveNewMedia,
                                            deleteItem: function($event) {
                                              return _vm.deleteImage()
                                            }
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
                                        _c("image-preview", {
                                          attrs: { src: _vm.previewSrc }
                                        })
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
                                  headers: _vm.photoHeaders,
                                  items: _vm.getFilteredPhotos(),
                                  loading: _vm.isloading,
                                  "no-data-text": _vm.$t(
                                    "labels.no_data_available"
                                  ),
                                  "loading-text": _vm.$t(
                                    "labels.loading_items"
                                  ),
                                  "items-per-page": 100,
                                  "footer-props": _vm.footer_props
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
                                                return _vm.previewMedia(
                                                  item.image,
                                                  "image"
                                                )
                                              }
                                            }
                                          },
                                          [_vm._v(_vm._s(item.original))]
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
                                              return _vm.editImage(item)
                                            }
                                          }
                                        })
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
                                          "v-btn",
                                          {
                                            attrs: { icon: "" },
                                            on: {
                                              click: function($event) {
                                                return _vm.editImage(item)
                                              }
                                            }
                                          },
                                          [_c("v-icon", [_vm._v("edit")])],
                                          1
                                        )
                                      ]
                                    }
                                  }
                                ])
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-flex",
                            { attrs: { md12: "" } },
                            [
                              _c("br"),
                              _c("br"),
                              _vm._v(" "),
                              _c(
                                "v-toolbar",
                                { attrs: { color: "grey lighten-2" } },
                                [
                                  _c("v-toolbar-title", [
                                    _vm._v(_vm._s(_vm.$t("labels.poster")))
                                  ]),
                                  _vm._v(" "),
                                  [
                                    _c(
                                      "v-dialog",
                                      {
                                        attrs: { "max-width": "1200px" },
                                        model: {
                                          value: _vm.posterDialog,
                                          callback: function($$v) {
                                            _vm.posterDialog = $$v
                                          },
                                          expression: "posterDialog"
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
                                              _vm.posterDialog = false
                                            },
                                            save: _vm.savePoster,
                                            deleteItem: function($event) {
                                              return _vm.deletePoster()
                                            }
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
                                    attrs: { "max-width": "300" },
                                    model: {
                                      value: _vm.posterPreview,
                                      callback: function($$v) {
                                        _vm.posterPreview = $$v
                                      },
                                      expression: "posterPreview"
                                    }
                                  },
                                  [
                                    _c("image-preview", {
                                      attrs: { src: _vm.previewSrc }
                                    })
                                  ],
                                  1
                                )
                              ],
                              _vm._v(" "),
                              _c("v-data-table", {
                                staticClass: "elevation-1",
                                attrs: {
                                  headers: _vm.posterHeaders,
                                  items: _vm.getFilteredPosters(),
                                  loading: _vm.isloading,
                                  "no-data-text": _vm.$t(
                                    "labels.no_data_available"
                                  ),
                                  "loading-text": _vm.$t(
                                    "labels.loading_items"
                                  ),
                                  "items-per-page": 100,
                                  "footer-props": _vm.footer_props
                                },
                                scopedSlots: _vm._u([
                                  {
                                    key: "item.name",
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
                                                  item.file,
                                                  "poster"
                                                )
                                              }
                                            }
                                          },
                                          [_vm._v(_vm._s(item.name))]
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
                                              return _vm.editPoster(item)
                                            }
                                          }
                                        })
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
                                          "v-btn",
                                          {
                                            attrs: { icon: "" },
                                            on: {
                                              click: function($event) {
                                                return _vm.editPoster(item)
                                              }
                                            }
                                          },
                                          [_c("v-icon", [_vm._v("edit")])],
                                          1
                                        )
                                      ]
                                    }
                                  }
                                ])
                              })
                            ],
                            2
                          ),
                          _vm._v(" "),
                          _c(
                            "h3",
                            {
                              staticStyle: {
                                "margin-top": "46px",
                                "line-height": "36px"
                              }
                            },
                            [_vm._v(_vm._s(_vm.$t("labels.add_new_files")))]
                          ),
                          _vm._v(" "),
                          _c("v-flex", { attrs: { md12: "" } }, [
                            _c(
                              "label",
                              {
                                staticClass: "v-btn primary mb-2",
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
                          ]),
                          _vm._v(" "),
                          _c(
                            "v-flex",
                            { attrs: { md12: "" } },
                            [
                              _c(
                                "v-toolbar",
                                { attrs: { color: "grey lighten-2" } },
                                [
                                  _c("v-toolbar-title", [
                                    _vm._v(_vm._s(_vm.$t("labels.new_files")))
                                  ])
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c("v-data-table", {
                                staticClass: "elevation-1",
                                attrs: {
                                  headers: _vm.headers,
                                  items: _vm.files,
                                  loading: _vm.isUploading,
                                  "items-per-page": 100,
                                  "footer-props": _vm.footer_props,
                                  "no-data-text": _vm.$t(
                                    "labels.no_data_available"
                                  ),
                                  "loading-text": _vm.$t("labels.loading_items")
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
                                              return _vm.editNewImage(item)
                                            }
                                          }
                                        })
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
                                                return _vm.editNewImage(item)
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
                                                return _vm.remove(item.index)
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
                  _c(
                    "v-container",
                    { attrs: { fluid: "" } },
                    [
                      _c(
                        "v-layout",
                        {
                          staticClass: "px-2",
                          attrs: { "justify-space-between": "" }
                        },
                        [
                          _c(
                            "v-btn",
                            {
                              attrs: { color: "error" },
                              on: { click: _vm.deleteCampaign }
                            },
                            [_vm._v(_vm._s(_vm.$t("buttons.delete")))]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            [
                              _c(
                                "v-btn",
                                { attrs: { to: "/admin/campaigns" } },
                                [_vm._v(_vm._s(_vm.$t("buttons.cancel")))]
                              ),
                              _vm._v(" "),
                              _c(
                                "v-btn",
                                {
                                  attrs: { color: "info" },
                                  on: { click: _vm.update }
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
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/campaign/edit.vue":
/*!**********************************************!*\
  !*** ./resources/js/views/campaign/edit.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _edit_vue_vue_type_template_id_3716e8ba___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit.vue?vue&type=template&id=3716e8ba& */ "./resources/js/views/campaign/edit.vue?vue&type=template&id=3716e8ba&");
/* harmony import */ var _edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit.vue?vue&type=script&lang=js& */ "./resources/js/views/campaign/edit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _edit_vue_vue_type_template_id_3716e8ba___WEBPACK_IMPORTED_MODULE_0__["render"],
  _edit_vue_vue_type_template_id_3716e8ba___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/campaign/edit.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/campaign/edit.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/views/campaign/edit.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./edit.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/campaign/edit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/campaign/edit.vue?vue&type=template&id=3716e8ba&":
/*!*****************************************************************************!*\
  !*** ./resources/js/views/campaign/edit.vue?vue&type=template&id=3716e8ba& ***!
  \*****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_template_id_3716e8ba___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./edit.vue?vue&type=template&id=3716e8ba& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/campaign/edit.vue?vue&type=template&id=3716e8ba&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_template_id_3716e8ba___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_template_id_3716e8ba___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);