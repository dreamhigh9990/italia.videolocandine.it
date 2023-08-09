(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["posterCreate2"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/poster/create2.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/poster/create2.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _settings_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../settings.js */ "./resources/js/settings.js");
/* harmony import */ var _helper_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helper.js */ "./resources/js/helper.js");
/* harmony import */ var vuedraggable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuedraggable */ "./node_modules/vuedraggable/dist/vuedraggable.common.js");
/* harmony import */ var vuedraggable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vuedraggable__WEBPACK_IMPORTED_MODULE_2__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var FontFaceObserver = __webpack_require__(/*! fontfaceobserver */ "./node_modules/fontfaceobserver/fontfaceobserver.standalone.js");




/* harmony default export */ __webpack_exports__["default"] = ({
  components: {},
  data: function data() {
    var _this = this;

    return {
      valid: true,
      width: 500,
      height: 800,
      bg_width: '',
      bg_height: '',
      canvas: null,
      color: '',
      font: 'Permanent Marker',
      text_align: undefined,
      formatting: [],
      image_dialog: false,
      prepared_images: [],
      uploading_dialog: false,
      loading_dialog_text: '',
      menu_color_picker: false,
      menu_date_start: false,
      menu_time_start: false,
      menu_date_end: false,
      menu_time_end: false,
      date1: '',
      date2: '',
      posterDialog: false,
      posterForm: {
        name: '',
        campaign: '',
        group_type: '',
        start_date: '',
        end_date: '',
        start_time: '',
        end_time: '',
        aspect_ratio_id: '',
        groups: [],
        availableGroups: []
      },
      layers_visible: true,
      drag: false,
      list: [],
      campaigns: [],
      group_types: [],
      groups: [],
      fonts: [],
      user: null,
      rename_dialog: false,
      elem_name: '',
      state: [],
      //history states
      state_list: [],
      //history of layers panel states
      mods: 0,
      //history stepper
      nameRules: [function (v) {
        return !!v || _this.$t('labels.name_required');
      }],
      durationRules: [function (v) {
        return !!v || 'La durata in secondi è un campo necessario';
      }],
      typeRules: [function (v) {
        return !!v || 'Il tipo della Locandina è obbligatorio';
      }],
      campaignRules: [function (v) {
        return !!v || 'Il nome della Campagna è obbligatorio';
      }],
      date1Rules: [function (v) {
        return !!v || _this.$t('labels.start_date_required');
      }],
      date2Rules: [function (v) {
        return !!v || _this.$t('labels.end_date_required');
      }]
    };
  },
  created: function created() {},
  mounted: function mounted() {
    var _this2 = this;

    this.loading_dialog_text = 'Sto scaricando la Locandina, potrebbero volerci alcuni secondi';
    this.uploading_dialog = true;
    var STEP = 3;
    fabric.Object.NUM_FRACTION_DIGITS = 10;
    window.addEventListener("keydown", function (e) {
      var activeobj = this.canvas.getActiveObject();
      if (!activeobj.ind) return;

      if (e.key === "Delete") {
        if (activeobj) {
          this.canvas.remove(activeobj);

          for (var i = 0; i < this.list.length; i++) {
            if (this.list[i].ind == activeobj.ind) {
              this.list.splice(i, 1);
              break;
            }
          }
        }
      } else if (e.key === "ArrowLeft") {
        activeobj.set({
          left: activeobj.left - STEP
        });
      } else if (e.key === "ArrowRight") {
        activeobj.set({
          left: activeobj.left + STEP
        });
      } else if (e.key === "ArrowUp") {
        activeobj.set({
          top: activeobj.top - STEP
        });
      } else if (e.key === "ArrowDown") {
        activeobj.set({
          top: activeobj.top + STEP
        });
      }

      activeobj.setCoords();
      this.canvas.renderAll();
    }.bind(this));
    window.addEventListener("mouseup", function (e) {
      var activeobj = this.canvas.getActiveObject();

      if (activeobj) {
        var elem = this.list.find(function (list) {
          return list.ind === activeobj.ind;
        });
        this.onSelectElem(elem);
      } else {
        this.unselectAll();
      }
    }.bind(this));
    var bgImage = new fabric.Image();
    var width = this.width;
    var height = this.height;
    var self = this;
    var list = this.list;
    axios.get(_settings_js__WEBPACK_IMPORTED_MODULE_0__["settings"].root_url + '/api/posters-bg/' + this.$route.params.id).then(function (response) {
      _this2.fonts = response.data.fonts;

      var fonts = _this2.fonts.map(function (el) {
        return el.name;
      });

      WebFont.load({
        google: {
          families: fonts
        }
      });
      _this2.user = response.data.user;
      bgImage.setSrc(_settings_js__WEBPACK_IMPORTED_MODULE_0__["settings"].root_url + '/users/' + _this2.user.name + '/formats/' + response.data.bg.file, function (img) {
        var min_width = Math.min(img.width, width);
        self.canvas = new fabric.Canvas('canvas', {
          width: min_width,
          height: img.height * parseFloat(min_width / img.width),
          backgroundColor: '#fff',
          preserveObjectStacking: true
        });
        bgImage.set({
          top: 0,
          left: 0,
          editable: false,
          selectable: false,
          evented: false,
          scaleX: parseFloat(min_width / img.width),
          scaleY: parseFloat(min_width / img.width)
        });
        self.bg_width = bgImage.width;
        self.bg_height = bgImage.height;
        bgImage.visible = true;
        self.canvas.add(bgImage);
        bgImage.ind = 0;
        bgImage.text = 'Format';
        bgImage.object_type = 'format';
        bgImage.layer_selected = bgImage.layer_selected || false;
        list.push(bgImage);
        self.canvas.renderAll();
        self.canvas.on('object:modified', function () {
          self.updateModifications(true);
        });
        self.updateModifications(true);
      });
      _this2.campaigns = response.data.campaigns;
      _this2.group_types = response.data.group_types;
      _this2.groups = response.data.groups;
      _this2.prepared_images = response.data.prepared_images;
      _this2.uploading_dialog = false;
    });
  },
  computed: {
    dragOptions: function dragOptions() {
      return {
        animation: 200,
        group: "description",
        disabled: false,
        ghostClass: "ghost"
      };
    }
  },
  watch: {
    date1: function date1(val) {
      this.posterForm.start_date = _helper_js__WEBPACK_IMPORTED_MODULE_1__["default"].formatDate(this.date1);
    },
    date2: function date2(val) {
      this.posterForm.end_date = _helper_js__WEBPACK_IMPORTED_MODULE_1__["default"].formatDate(this.date2);
    }
  },
  methods: {
    onColorInput: function onColorInput() {
      var activeobj = this.canvas.getActiveObject();
      if (activeobj) activeobj.setColor(this.color);
      this.canvas.renderAll();
    },
    onClickText: function onClickText(font) {
      var addtext = new fabric.Textbox("Promo!", {
        fontFamily: font
      });
      addtext.ind = this.list.length;
      addtext.visible = true;
      addtext.layer_selected = false;
      addtext.object_type = 'text';
      this.list.unshift(addtext);
      this.canvas.add(addtext);
      this.canvas.renderAll();
      this.mods = 0;
      this.updateModifications(true);
    },
    prepareSavedImage: function prepareSavedImage(e) {
      var _this3 = this;

      var counter = 0; // let attachment = e.target.files[0];

      this.loading_dialog_text = 'Sto caricando un file, potrebbero volerci alcuni secondi';
      this.uploading_dialog = true;
      var items = e.target.files || e.dataTransfer.files;

      if (items.length > 0) {
        for (var i = 0; i < items.length; i++) {
          var form = new FormData();
          var attachment = items[i];
          form.append('image', attachment);
          axios.post(_settings_js__WEBPACK_IMPORTED_MODULE_0__["settings"].root_url + '/api/posters/upload-prepared-image', form).then(function (response) {
            counter++;
            _this3.prepared_images = response.data.prepared_images;
            if (counter >= items.length) _this3.uploading_dialog = false;
          })["catch"](function (error) {
            _this3.uploading_dialog = false;
          });
        }
      }
    },
    prepareNewImage: function prepareNewImage(e) {
      var _this4 = this;

      var self = this;
      var attachment = e.target.files[0];
      var form = new FormData();
      form.append('image', attachment);
      this.loading_dialog_text = 'Sto caricando un file, potrebbero volerci alcuni secondi';
      this.uploading_dialog = true;
      axios.post(_settings_js__WEBPACK_IMPORTED_MODULE_0__["settings"].root_url + '/api/posters/upload', form).then(function (response) {
        var canvas = _this4.canvas;
        var list = _this4.list;
        var user = _this4.user;
        fabric.Image.fromURL(_settings_js__WEBPACK_IMPORTED_MODULE_0__["settings"].root_url + "/users/" + user.name + "/" + response.data.file, function (img) {
          img.ind = list.length;
          var scale = Math.min(img.width, self.width / 2) / img.width;
          img.set({
            left: self.width / 4,
            top: self.height / 4,
            scaleX: scale,
            scaleY: scale
          });
          img.visible = true;
          img.filename = response.data.file.substring(0, response.data.file.indexOf('---'));
          img.layer_selected = false;
          img.object_type = 'image';
          list.unshift(img);
          canvas.add(img);
          self.updateModifications(true);
        });
        _this4.uploading_dialog = false;
      })["catch"](function (error) {
        console.log("error");
        _this4.uploading_dialog = false;
      });
    },
    publish: function publish() {
      var _this5 = this;

      this.loading_dialog_text = 'Sto caricando un file, potrebbero volerci alcuni secondi';
      this.uploading_dialog = true;
      axios.post(_settings_js__WEBPACK_IMPORTED_MODULE_0__["settings"].root_url + '/api/posters/publish', {
        image: this.canvas.toDataURL(),
        edit_flag: 'created',
        id: -1,
        name: this.posterForm.name,
        campaign_id: this.posterForm.campaign.id,
        start_date: this.date1,
        end_date: this.date2,
        start_time: this.posterForm.start_time,
        end_time: this.posterForm.end_time,
        duration: this.posterForm.duration,
        height: this.bg_height,
        width: this.bg_width,
        group_type_id: this.posterForm.group_type.id,
        aspect_ratio_id: this.posterForm.aspect_ratio_id,
        group_ids: this.posterForm.groups.map(function (el) {
          return el.id;
        }),
        json_data: JSON.stringify(this.canvas.toJSON(['selectable', 'evented', 'editable', 'text', 'filename', 'layer_selected', 'object_type']))
      }).then(function (response) {
        _this5.uploading_dialog = false;

        _this5.$router.push({
          name: 'poster'
        });
      })["catch"](function (error) {
        _this5.uploading_dialog = false;
        console.log(error);
      });
    },
    save: function save() {
      var _this6 = this;

      var canvas = this.canvas;
      var json_data = JSON.stringify(canvas.toJSON(['selectable', 'evented', 'editable', 'text', 'filename', 'layer_selected', 'object_type']));
      var form = new FormData();
      form.append('json_data', json_data);
      form.append('edit_flag', "created");
      form.append('id', -1);
      form.append('image', this.canvas.toDataURL());
      form.append('width', this.bg_width);
      form.append('height', this.bg_height); // form.append('is_favorite', this.is_favorite);

      this.loading_dialog_text = 'Sto caricando un file, potrebbero volerci alcuni secondi';
      this.uploading_dialog = true;
      axios.post(_settings_js__WEBPACK_IMPORTED_MODULE_0__["settings"].root_url + '/api/posters/save', form).then(function (response) {
        _this6.uploading_dialog = false;

        _this6.$router.push({
          "name": "poster-edit"
        });
      })["catch"](function (error) {
        _this6.uploading_dialog = false;
      });
    },
    onAlignChange: function onAlignChange() {
      if (this.canvas) {
        var activeobj = this.canvas.getActiveObject();

        if (activeobj) {
          switch (this.text_align) {
            case 0:
              activeobj.set('textAlign', 'left');
              break;

            case 1:
              activeobj.set('textAlign', 'center');
              break;

            case 2:
              activeobj.set('textAlign', 'right');
              break;

            case 3:
              activeobj.set('textAlign', 'justify');
              break;
          }
        }

        this.canvas.renderAll();
      }
    },
    onStyleChange: function onStyleChange() {
      if (this.canvas) {
        var activeobj = this.canvas.getActiveObject();

        if (activeobj) {
          activeobj.set('fontStyle', 'normal');
          activeobj.set('fontWeight', 'normal');
          activeobj.set('underline', false);
          var _iteratorNormalCompletion = true;
          var _didIteratorError = false;
          var _iteratorError = undefined;

          try {
            for (var _iterator = this.formatting[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
              var i = _step.value;
              if (i == 0) activeobj.set('fontStyle', 'italic');
              if (i == 1) activeobj.set('fontWeight', 'bold');
              if (i == 2) activeobj.set('underline', true);
            }
          } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion && _iterator["return"] != null) {
                _iterator["return"]();
              }
            } finally {
              if (_didIteratorError) {
                throw _iteratorError;
              }
            }
          }
        }

        this.canvas.renderAll();
      }
    },
    closePosterForm: function closePosterForm() {
      this.posterDialog = false;
    },
    parseDate: function parseDate(date) {
      return _helper_js__WEBPACK_IMPORTED_MODULE_1__["default"].parseDate(date);
    },
    onCampaignChange: function onCampaignChange() {
      var campaign = this.posterForm.campaign;
      this.date1 = campaign.start_date;
      this.posterForm.start_date = _helper_js__WEBPACK_IMPORTED_MODULE_1__["default"].formatDate(campaign.start_date);
      this.date2 = campaign.end_date;
      this.posterForm.end_date = _helper_js__WEBPACK_IMPORTED_MODULE_1__["default"].formatDate(campaign.end_date);
      this.posterForm.start_time = campaign.start_time;
      this.posterForm.end_time = campaign.end_time;
    },
    onTypeChange: function onTypeChange() {
      var _this7 = this;

      axios.post(_settings_js__WEBPACK_IMPORTED_MODULE_0__["settings"].root_url + '/api/helper/aspect-ratio-id', {
        width: this.bg_width,
        height: this.bg_height
      }).then(function (response) {
        _this7.posterForm.aspect_ratio_id = response.data;
        _this7.posterForm.availableGroups = _this7.getAvailableGroups(_this7.posterForm.aspect_ratio_id, _this7.posterForm.group_type.id);
      });
    },
    getAvailableGroups: function getAvailableGroups(aspect_ratio_id, group_type_id) {
      return this.groups.filter(function (group) {
        return group.aspect_ratio_id == aspect_ratio_id && group.group_type_id == group_type_id;
      });
    },
    getPreparedImageName: function getPreparedImageName(item) {
      return _settings_js__WEBPACK_IMPORTED_MODULE_0__["settings"].root_url + "/users/" + item.user_name + "/saved images/" + item.thumbnail;
    },
    selectPreparedImage: function selectPreparedImage(item) {
      var self = this;
      var canvas = this.canvas;
      var list = this.list;
      fabric.Image.fromURL(_settings_js__WEBPACK_IMPORTED_MODULE_0__["settings"].root_url + "/users/" + item.user_name + "/saved images/" + item.file, function (img) {
        img.ind = list.length;
        var scale = Math.min(img.width, self.width / 2) / img.width;
        img.set({
          left: self.width / 4,
          top: self.height / 4,
          scaleX: scale,
          scaleY: scale
        });
        img.visible = true;
        img.layer_selected = false;
        img.object_type = 'image';
        img.filename = item.file;
        list.unshift(img);
        canvas.add(img);
        self.updateModifications(true);
      });
      this.image_dialog = false;
    },
    deleteSavedImage: function deleteSavedImage(image) {
      var _this8 = this;

      var r = confirm("Sei sicuro di voler cancellare questa foto prodotto?");

      if (r == true) {
        axios.post(_settings_js__WEBPACK_IMPORTED_MODULE_0__["settings"].root_url + '/api/poster/delete-savedimage/' + image.id).then(function (response) {
          _this8.prepared_images = response.data.prepared_images.map(function (el) {
            var o = Object.assign({}, el);
            o.badge_show = false;
            return o;
          });
        })["catch"](function (error) {});
      }
    },
    removeObject: function removeObject(obj_) {
      var selected_obj = null;
      this.canvas.forEachObject(function (obj) {
        if (obj.ind == obj_.ind) selected_obj = obj;
      });

      if (selected_obj) {
        this.canvas.remove(selected_obj);

        for (var i = 0; i < this.list.length; i++) {
          if (this.list[i].ind == selected_obj.ind) {
            this.list.splice(i, 1);
            break;
          }
        }
      }
    },
    onLayerChange: function onLayerChange() {
      for (var i = this.list.length - 1; i >= 0; i--) {
        this.list[i].moveTo(1000 - i);
      }

      this.canvas.renderAll();
    },
    onRenameImage: function onRenameImage(elem) {
      if (elem.filename) {
        this.rename_dialog = true;
        this.elem_name = elem.filename;
      }
    },
    cancelRenameImage: function cancelRenameImage() {
      this.rename_dialog = false;
    },
    renameImage: function renameImage(ind) {
      if (this.elem_name) {
        var elem = this.list.find(function (elem) {
          return elem.ind === ind;
        });
        elem.filename = this.elem_name;
        this.rename_dialog = false;
      }
    },
    onSelectElem: function onSelectElem(elem) {
      for (var i = this.list.length - 1; i >= 0; i--) {
        this.list[i].layer_selected = false;
      }

      elem.layer_selected = true;
      this.canvas.setActiveObject(elem);
      this.canvas.renderAll();
    },
    unselectAll: function unselectAll() {
      for (var i = this.list.length - 1; i >= 0; i--) {
        this.list[i].layer_selected = false;
      }

      this.canvas.renderAll();
    },
    toggleVisibility: function toggleVisibility(obj_) {
      if (obj_.visible) {
        obj_.visible = false;
      } else {
        obj_.visible = true;
      }

      this.canvas.discardActiveObject();
      this.canvas.renderAll();
    },
    toggleSelectable: function toggleSelectable(obj_) {
      if (obj_.selectable) {
        obj_.selectable = false;
        obj_.editable = false;
      } else {
        obj_.selectable = true;
        obj_.editable = true;
      }

      this.canvas.discardActiveObject();
      this.canvas.renderAll();
    },
    mediaIcon: function mediaIcon(object) {
      if (object.object_type == 'text') {
        return 'textsms';
      } else if (object.object_type == 'format') {
        return 'format_paint';
      } else if (object.object_type == 'image') {
        return 'image';
      }
    },
    updateModifications: function updateModifications(savehistory) {
      if (savehistory === true) {
        var myjson = JSON.stringify(this.canvas.toJSON(['selectable', 'evented', 'editable', 'text', 'filename', 'layer_selected', 'object_type']));
        this.state.push(myjson);
        this.mods = this.state.length;
      }
    },
    undo: function undo() {
      var self = this;

      if (self.mods > 1) {
        self.canvas.clear().renderAll();
        self.mods--;
        self.canvas.loadFromJSON(self.state[self.mods - 1], function () {
          self.list.splice(0, self.list.length);
          self.canvas.forEachObject(function (obj) {
            obj.ind = self.list.length;
            self.list.unshift(obj);
          });
        });
        self.canvas.renderAll();
      }
    },
    redo: function redo() {
      var self = this;

      if (this.mods < this.state.length) {
        this.canvas.clear().renderAll();
        this.mods++;
        this.canvas.loadFromJSON(this.state[this.mods - 1], function () {
          self.list.splice(0, self.list.length);
          self.canvas.forEachObject(function (obj) {
            obj.ind = self.list.length;
            self.list.unshift(obj);
          });
        });
        this.canvas.renderAll();
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/poster/create2.vue?vue&type=style&index=0&id=7aacc8b3&scoped=true&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/poster/create2.vue?vue&type=style&index=0&id=7aacc8b3&scoped=true&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "\n.img-container-card[data-v-7aacc8b3]{\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tpadding: 6px;\n\twidth: 150px;\n\theight: 150px;\n}\n.img-btn[data-v-7aacc8b3]{\n\tcursor: pointer;\n\tdisplay: flex;\n    align-items: flex-end;\n    justify-content: center;\n    text-align: center;\n    padding-bottom: 8px;\n}\n.btn-over-img[data-v-7aacc8b3]{\n\tposition: absolute;\n\tbottom: 10px;\n}\n.flip-list-move[data-v-7aacc8b3] {\n  \ttransition: -webkit-transform 0.5s;\n  \ttransition: transform 0.5s;\n  \ttransition: transform 0.5s, -webkit-transform 0.5s;\n}\n.no-move[data-v-7aacc8b3] {\n  \ttransition: -webkit-transform 0s;\n  \ttransition: transform 0s;\n  \ttransition: transform 0s, -webkit-transform 0s;\n}\n.ghost[data-v-7aacc8b3] {\n  \topacity: 0.5;\n  \tbackground: #c8ebfb;\n}\n.list-group[data-v-7aacc8b3] {\n  \tmin-height: 20px;\n}\n.list-group-item[data-v-7aacc8b3] {\n  \tcursor: move;\n}\n.list-group-item i[data-v-7aacc8b3] {\n  \tcursor: pointer;\n}\n.selected[data-v-7aacc8b3]{\n\tbackground: #E0E0E0;\n}\n", ""]);



/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/poster/create2.vue?vue&type=style&index=0&id=7aacc8b3&scoped=true&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/poster/create2.vue?vue&type=style&index=0&id=7aacc8b3&scoped=true&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./create2.vue?vue&type=style&index=0&id=7aacc8b3&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/poster/create2.vue?vue&type=style&index=0&id=7aacc8b3&scoped=true&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/poster/create2.vue?vue&type=template&id=7aacc8b3&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/poster/create2.vue?vue&type=template&id=7aacc8b3&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************/
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
    {
      staticStyle: { "background-color": "#757575" },
      attrs: { fluid: "", "grid-list-md": "" }
    },
    [
      _c(
        "v-layout",
        {
          attrs: {
            row: "",
            wrap: "",
            "justify-content-center": "",
            "my-3": "",
            "mx-3": ""
          }
        },
        [
          [
            _c(
              "v-dialog",
              {
                attrs: { "hide-overlay": "", persistent: "", width: "300" },
                model: {
                  value: _vm.uploading_dialog,
                  callback: function($$v) {
                    _vm.uploading_dialog = $$v
                  },
                  expression: "uploading_dialog"
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
                          "\n\t\t\t          \t" +
                            _vm._s(_vm.loading_dialog_text) +
                            "\n\t\t\t          \t"
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
                attrs: { "max-width": "700px" },
                model: {
                  value: _vm.posterDialog,
                  callback: function($$v) {
                    _vm.posterDialog = $$v
                  },
                  expression: "posterDialog"
                }
              },
              [
                _c(
                  "v-form",
                  {
                    ref: "posterForm",
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
                            _vm._v(_vm._s(_vm.$t("labels.edit_media")))
                          ])
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
                                  {
                                    attrs: {
                                      wrap: "",
                                      "justify-space-between": ""
                                    }
                                  },
                                  [
                                    _c(
                                      "v-flex",
                                      {
                                        attrs: { xs12: "", sm12: "", md6: "" }
                                      },
                                      [
                                        _c("v-text-field", {
                                          attrs: {
                                            label: "Name",
                                            rules: _vm.nameRules
                                          },
                                          model: {
                                            value: _vm.posterForm.name,
                                            callback: function($$v) {
                                              _vm.$set(
                                                _vm.posterForm,
                                                "name",
                                                $$v
                                              )
                                            },
                                            expression: "posterForm.name"
                                          }
                                        })
                                      ],
                                      1
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "v-flex",
                                      {
                                        attrs: { xs12: "", sm12: "", md6: "" }
                                      },
                                      [
                                        _c("v-select", {
                                          attrs: {
                                            items: _vm.campaigns,
                                            "item-text": "name",
                                            "item-value": "id",
                                            label: _vm.$t(
                                              "campaign.fields.campaigns"
                                            ),
                                            rules: _vm.campaignRules,
                                            "return-object": ""
                                          },
                                          on: { input: _vm.onCampaignChange },
                                          model: {
                                            value: _vm.posterForm.campaign,
                                            callback: function($$v) {
                                              _vm.$set(
                                                _vm.posterForm,
                                                "campaign",
                                                $$v
                                              )
                                            },
                                            expression: "posterForm.campaign"
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
                                              "close-on-content-click": true
                                            },
                                            scopedSlots: _vm._u([
                                              {
                                                key: "activator",
                                                fn: function(ref) {
                                                  var on = ref.on
                                                  return [
                                                    _c(
                                                      "v-text-field",
                                                      _vm._g(
                                                        {
                                                          staticStyle: {
                                                            width: "150px"
                                                          },
                                                          attrs: {
                                                            label: _vm.$t(
                                                              "labels.start_date"
                                                            ),
                                                            readonly: "",
                                                            "prepend-icon":
                                                              "event",
                                                            rules:
                                                              _vm.date1Rules
                                                          },
                                                          on: {
                                                            blur: function(
                                                              $event
                                                            ) {
                                                              _vm.date1 = _vm.parseDate(
                                                                _vm.posterForm
                                                                  .start_date
                                                              )
                                                            }
                                                          },
                                                          model: {
                                                            value:
                                                              _vm.posterForm
                                                                .start_date,
                                                            callback: function(
                                                              $$v
                                                            ) {
                                                              _vm.$set(
                                                                _vm.posterForm,
                                                                "start_date",
                                                                $$v
                                                              )
                                                            },
                                                            expression:
                                                              "posterForm.start_date"
                                                          }
                                                        },
                                                        on
                                                      )
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
                                      { attrs: { xs6: "", sm6: "", md3: "" } },
                                      [
                                        _c(
                                          "v-menu",
                                          {
                                            attrs: {
                                              "close-on-content-click": false
                                            },
                                            scopedSlots: _vm._u([
                                              {
                                                key: "activator",
                                                fn: function(ref) {
                                                  var on = ref.on
                                                  return [
                                                    _c(
                                                      "v-text-field",
                                                      _vm._g(
                                                        {
                                                          staticStyle: {
                                                            width: "120px"
                                                          },
                                                          attrs: {
                                                            slot: "activator",
                                                            label: _vm.$t(
                                                              "labels.start_time"
                                                            ),
                                                            readonly: ""
                                                          },
                                                          slot: "activator",
                                                          model: {
                                                            value:
                                                              _vm.posterForm
                                                                .start_time,
                                                            callback: function(
                                                              $$v
                                                            ) {
                                                              _vm.$set(
                                                                _vm.posterForm,
                                                                "start_time",
                                                                $$v
                                                              )
                                                            },
                                                            expression:
                                                              "posterForm.start_time"
                                                          }
                                                        },
                                                        on
                                                      )
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
                                                value:
                                                  _vm.posterForm.start_time,
                                                callback: function($$v) {
                                                  _vm.$set(
                                                    _vm.posterForm,
                                                    "start_time",
                                                    $$v
                                                  )
                                                },
                                                expression:
                                                  "posterForm.start_time"
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
                                              "close-on-content-click": true
                                            },
                                            scopedSlots: _vm._u([
                                              {
                                                key: "activator",
                                                fn: function(ref) {
                                                  var on = ref.on
                                                  return [
                                                    _c(
                                                      "v-text-field",
                                                      _vm._g(
                                                        {
                                                          staticStyle: {
                                                            width: "150px"
                                                          },
                                                          attrs: {
                                                            slot: "activator",
                                                            label: _vm.$t(
                                                              "labels.end_date"
                                                            ),
                                                            readonly: "",
                                                            "prepend-icon":
                                                              "event",
                                                            rules:
                                                              _vm.date2Rules
                                                          },
                                                          on: {
                                                            blur: function(
                                                              $event
                                                            ) {
                                                              _vm.date2 = _vm.parseDate(
                                                                _vm.posterForm
                                                                  .end_date
                                                              )
                                                            }
                                                          },
                                                          slot: "activator",
                                                          model: {
                                                            value:
                                                              _vm.posterForm
                                                                .end_date,
                                                            callback: function(
                                                              $$v
                                                            ) {
                                                              _vm.$set(
                                                                _vm.posterForm,
                                                                "end_date",
                                                                $$v
                                                              )
                                                            },
                                                            expression:
                                                              "posterForm.end_date"
                                                          }
                                                        },
                                                        on
                                                      )
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
                                      { attrs: { xs6: "", sm6: "", md3: "" } },
                                      [
                                        _c(
                                          "v-menu",
                                          {
                                            attrs: {
                                              "close-on-content-click": false
                                            },
                                            scopedSlots: _vm._u([
                                              {
                                                key: "activator",
                                                fn: function(ref) {
                                                  var on = ref.on
                                                  return [
                                                    _c(
                                                      "v-text-field",
                                                      _vm._g(
                                                        {
                                                          staticStyle: {
                                                            width: "120px"
                                                          },
                                                          attrs: {
                                                            slot: "activator",
                                                            label: _vm.$t(
                                                              "labels.end_time"
                                                            ),
                                                            readonly: ""
                                                          },
                                                          slot: "activator",
                                                          model: {
                                                            value:
                                                              _vm.posterForm
                                                                .end_time,
                                                            callback: function(
                                                              $$v
                                                            ) {
                                                              _vm.$set(
                                                                _vm.posterForm,
                                                                "end_time",
                                                                $$v
                                                              )
                                                            },
                                                            expression:
                                                              "posterForm.end_time"
                                                          }
                                                        },
                                                        on
                                                      )
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
                                                value: _vm.posterForm.end_time,
                                                callback: function($$v) {
                                                  _vm.$set(
                                                    _vm.posterForm,
                                                    "end_time",
                                                    $$v
                                                  )
                                                },
                                                expression:
                                                  "posterForm.end_time"
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
                                      { attrs: { xs12: "", xs5: "", md5: "" } },
                                      [
                                        _c("v-text-field", {
                                          attrs: {
                                            label: "Sec",
                                            rules: _vm.durationRules,
                                            type: "number"
                                          },
                                          model: {
                                            value: _vm.posterForm.duration,
                                            callback: function($$v) {
                                              _vm.$set(
                                                _vm.posterForm,
                                                "duration",
                                                $$v
                                              )
                                            },
                                            expression: "posterForm.duration"
                                          }
                                        })
                                      ],
                                      1
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "v-flex",
                                      { attrs: { xs12: "", xs5: "", md5: "" } },
                                      [
                                        _c("v-select", {
                                          attrs: {
                                            items: _vm.group_types,
                                            "item-text": "name",
                                            "item-value": "id",
                                            label: _vm.$t(
                                              "groups.fields.grouptype"
                                            ),
                                            rules: _vm.typeRules,
                                            "return-object": ""
                                          },
                                          on: { input: _vm.onTypeChange },
                                          model: {
                                            value: _vm.posterForm.group_type,
                                            callback: function($$v) {
                                              _vm.$set(
                                                _vm.posterForm,
                                                "group_type",
                                                $$v
                                              )
                                            },
                                            expression: "posterForm.group_type"
                                          }
                                        })
                                      ],
                                      1
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "v-flex",
                                      {
                                        attrs: { xs12: "", sm12: "", md12: "" }
                                      },
                                      [
                                        _c(
                                          "v-select",
                                          {
                                            attrs: {
                                              items:
                                                _vm.posterForm.availableGroups,
                                              "item-text": "name",
                                              "item-value": "id",
                                              attach: "",
                                              chips: "",
                                              label: _vm.$t("groups.title"),
                                              "return-object": "",
                                              multiple: ""
                                            },
                                            model: {
                                              value: _vm.posterForm.groups,
                                              callback: function($$v) {
                                                _vm.$set(
                                                  _vm.posterForm,
                                                  "groups",
                                                  $$v
                                                )
                                              },
                                              expression: "posterForm.groups"
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
                                                    _vm.$t(
                                                      "labels.no_data_available"
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
                              {
                                attrs: {
                                  "text-xs-right": "",
                                  "text-sm-right": "",
                                  "text-md-right": ""
                                }
                              },
                              [
                                _c(
                                  "v-btn",
                                  { on: { click: _vm.closePosterForm } },
                                  [_vm._v(_vm._s(_vm.$t("buttons.cancel")))]
                                ),
                                _vm._v(" "),
                                _c(
                                  "v-btn",
                                  {
                                    attrs: { color: "primary" },
                                    on: { click: _vm.publish }
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
          _vm._v(" "),
          _c(
            "v-layout",
            { staticClass: "row ml-4 mt-4" },
            [
              _c("canvas", { attrs: { id: "canvas" } }),
              _vm._v(" "),
              _c(
                "v-layout",
                { staticStyle: { display: "block", "margin-left": "60px" } },
                [
                  _c(
                    "v-card",
                    { staticStyle: { width: "324px" } },
                    [
                      _c(
                        "v-card-text",
                        [
                          _c(
                            "v-layout",
                            { attrs: { row: "", wrap: "" } },
                            [
                              _c(
                                "v-flex",
                                { attrs: { xs12: "", md12: "" } },
                                [
                                  _c(
                                    "label",
                                    {
                                      staticClass:
                                        "v-btn primary mb-2 v-btn--block",
                                      staticStyle: {
                                        padding: "6px",
                                        cursor: "pointer"
                                      }
                                    },
                                    [
                                      _c("input", {
                                        staticStyle: { display: "none" },
                                        attrs: {
                                          type: "file",
                                          name: "new_img",
                                          id: "new_img"
                                        },
                                        on: { change: _vm.prepareNewImage }
                                      }),
                                      _vm._v(
                                        "\n\t\t\t\t\t\t            " +
                                          _vm._s(
                                            _vm.$t("poster.load_picture")
                                          ) +
                                          "\n\t\t\t\t\t\t        "
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-dialog",
                                    {
                                      attrs: { "max-width": "700px" },
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
                                                    attrs: {
                                                      block: "",
                                                      color: "primary"
                                                    }
                                                  },
                                                  on
                                                ),
                                                [
                                                  _vm._v(
                                                    _vm._s(
                                                      _vm.$t(
                                                        "poster.add_pictures"
                                                      )
                                                    )
                                                  )
                                                ]
                                              )
                                            ]
                                          }
                                        }
                                      ]),
                                      model: {
                                        value: _vm.image_dialog,
                                        callback: function($$v) {
                                          _vm.image_dialog = $$v
                                        },
                                        expression: "image_dialog"
                                      }
                                    },
                                    [
                                      _vm._v(" "),
                                      _c(
                                        "v-card",
                                        [
                                          _c(
                                            "v-container",
                                            [
                                              _c("v-card-title", [
                                                _c(
                                                  "span",
                                                  { staticClass: "headline" },
                                                  [
                                                    _vm._v(
                                                      _vm._s(
                                                        _vm.$t(
                                                          "poster.product_photos"
                                                        )
                                                      )
                                                    )
                                                  ]
                                                )
                                              ]),
                                              _vm._v(" "),
                                              _c(
                                                "v-card-text",
                                                [
                                                  _c(
                                                    "v-layout",
                                                    {
                                                      attrs: {
                                                        row: "",
                                                        wrap: ""
                                                      }
                                                    },
                                                    [
                                                      _c(
                                                        "v-flex",
                                                        {
                                                          attrs: {
                                                            xs12: "",
                                                            sm12: "",
                                                            md12: ""
                                                          }
                                                        },
                                                        [
                                                          _c(
                                                            "label",
                                                            {
                                                              staticClass:
                                                                "v-btn primary",
                                                              staticStyle: {
                                                                padding: "6px",
                                                                "margin-bottom":
                                                                  "10px",
                                                                cursor:
                                                                  "pointer"
                                                              }
                                                            },
                                                            [
                                                              _c("input", {
                                                                staticStyle: {
                                                                  display:
                                                                    "none"
                                                                },
                                                                attrs: {
                                                                  type: "file",
                                                                  name:
                                                                    "saved_img",
                                                                  id:
                                                                    "saved_img",
                                                                  multiple: ""
                                                                },
                                                                on: {
                                                                  change:
                                                                    _vm.prepareSavedImage
                                                                }
                                                              }),
                                                              _vm._v(
                                                                "\n\t\t\t\t\t\t\t\t\t\t\t\t            " +
                                                                  _vm._s(
                                                                    _vm.$t(
                                                                      "buttons.choose_files"
                                                                    )
                                                                  ) +
                                                                  "\n\t\t\t\t\t\t\t\t\t\t\t\t        "
                                                              )
                                                            ]
                                                          )
                                                        ]
                                                      ),
                                                      _vm._v(" "),
                                                      _vm._l(
                                                        _vm.prepared_images,
                                                        function(image, index) {
                                                          return _c(
                                                            "v-flex",
                                                            { key: index },
                                                            [
                                                              _c(
                                                                "v-card",
                                                                {
                                                                  staticClass:
                                                                    "img-container-card",
                                                                  attrs: {
                                                                    "max-width":
                                                                      "150",
                                                                    "max-height":
                                                                      "150"
                                                                  },
                                                                  on: {
                                                                    click: function(
                                                                      $event
                                                                    ) {
                                                                      return _vm.selectPreparedImage(
                                                                        image
                                                                      )
                                                                    }
                                                                  }
                                                                },
                                                                [
                                                                  _c("v-img", {
                                                                    staticClass:
                                                                      "img-btn",
                                                                    attrs: {
                                                                      src: _vm.getPreparedImageName(
                                                                        image
                                                                      ),
                                                                      contain:
                                                                        "",
                                                                      "max-width":
                                                                        "140",
                                                                      "max-height":
                                                                        "140"
                                                                    }
                                                                  }),
                                                                  _vm._v(" "),
                                                                  _c(
                                                                    "v-btn",
                                                                    {
                                                                      staticClass:
                                                                        "btn-over-img",
                                                                      on: {
                                                                        click: function(
                                                                          $event
                                                                        ) {
                                                                          $event.stopPropagation()
                                                                          return _vm.deleteSavedImage(
                                                                            image
                                                                          )
                                                                        }
                                                                      }
                                                                    },
                                                                    [
                                                                      _vm._v(
                                                                        "Delete"
                                                                      )
                                                                    ]
                                                                  )
                                                                ],
                                                                1
                                                              )
                                                            ],
                                                            1
                                                          )
                                                        }
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
                                [_c("v-divider")],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-flex",
                                { attrs: { xs12: "", sm12: "", md12: "" } },
                                _vm._l(_vm.fonts, function(font, id) {
                                  return _c(
                                    "v-btn",
                                    {
                                      key: id,
                                      style: { fontFamily: font.name },
                                      attrs: { text: "", small: "", block: "" },
                                      on: {
                                        click: function($event) {
                                          return _vm.onClickText(font.name)
                                        }
                                      }
                                    },
                                    [
                                      _vm._v(
                                        "\n\t\t\t\t\t\t    \t" +
                                          _vm._s(font.name) +
                                          "\n\t\t\t\t\t\t    \t"
                                      )
                                    ]
                                  )
                                }),
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-flex",
                                { attrs: { xs12: "", sm12: "", md12: "" } },
                                [_c("v-divider")],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-flex",
                                { attrs: { xs12: "", sm12: "", md12: "" } },
                                [
                                  _c(
                                    "v-btn-toggle",
                                    {
                                      attrs: { mandatory: "" },
                                      on: { change: _vm.onAlignChange },
                                      model: {
                                        value: _vm.text_align,
                                        callback: function($$v) {
                                          _vm.text_align = $$v
                                        },
                                        expression: "text_align"
                                      }
                                    },
                                    [
                                      _c(
                                        "v-btn",
                                        [
                                          _c("v-icon", [
                                            _vm._v("format_align_left")
                                          ])
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "v-btn",
                                        [
                                          _c("v-icon", [
                                            _vm._v("format_align_center")
                                          ])
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "v-btn",
                                        [
                                          _c("v-icon", [
                                            _vm._v("format_align_right")
                                          ])
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "v-btn",
                                        [
                                          _c("v-icon", [
                                            _vm._v("format_align_justify")
                                          ])
                                        ],
                                        1
                                      )
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-btn-toggle",
                                    {
                                      staticStyle: { "margin-top": "6px" },
                                      attrs: { multiple: "" },
                                      on: { change: _vm.onStyleChange },
                                      model: {
                                        value: _vm.formatting,
                                        callback: function($$v) {
                                          _vm.formatting = $$v
                                        },
                                        expression: "formatting"
                                      }
                                    },
                                    [
                                      _c(
                                        "v-btn",
                                        { attrs: { color: "white" } },
                                        [
                                          _c("v-icon", [
                                            _vm._v("mdi-format-italic")
                                          ])
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "v-btn",
                                        { attrs: { color: "white" } },
                                        [
                                          _c("v-icon", [
                                            _vm._v("mdi-format-bold")
                                          ])
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "v-btn",
                                        { attrs: { color: "white" } },
                                        [
                                          _c("v-icon", [
                                            _vm._v("mdi-format-underline")
                                          ])
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "v-menu",
                                        {
                                          attrs: {
                                            "offset-y": "",
                                            "close-on-content-click": false
                                          },
                                          scopedSlots: _vm._u([
                                            {
                                              key: "activator",
                                              fn: function(ref) {
                                                var on = ref.on
                                                return [
                                                  _c(
                                                    "v-btn",
                                                    _vm._g({}, on),
                                                    [
                                                      _c("v-icon", [
                                                        _vm._v(
                                                          "format_color_fill"
                                                        )
                                                      ])
                                                    ],
                                                    1
                                                  )
                                                ]
                                              }
                                            }
                                          ])
                                        },
                                        [
                                          _vm._v(" "),
                                          _c("v-color-picker", {
                                            on: { input: _vm.onColorInput },
                                            model: {
                                              value: _vm.color,
                                              callback: function($$v) {
                                                _vm.color = $$v
                                              },
                                              expression: "color"
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
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-card-text",
                        [
                          _c(
                            "v-layout",
                            { attrs: { row: "", wrap: "" } },
                            [
                              _c(
                                "v-flex",
                                { attrs: { xs12: "", sm12: "", md12: "" } },
                                [_c("v-divider")],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-flex",
                                { attrs: { xs12: "", sm12: "", md12: "" } },
                                [
                                  _c(
                                    "v-btn",
                                    {
                                      attrs: { icon: "" },
                                      on: { click: _vm.undo }
                                    },
                                    [_c("v-icon", [_vm._v("arrow_back")])],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-btn",
                                    {
                                      attrs: { icon: "" },
                                      on: { click: _vm.redo }
                                    },
                                    [_c("v-icon", [_vm._v("arrow_forward")])],
                                    1
                                  )
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-flex",
                                { attrs: { xs12: "", sm12: "", md12: "" } },
                                [_c("v-divider")],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-flex",
                                { attrs: { xs12: "", sm12: "", md12: "" } },
                                [
                                  _c(
                                    "v-btn",
                                    {
                                      attrs: { color: "primary" },
                                      on: {
                                        click: function($event) {
                                          _vm.posterDialog = true
                                        }
                                      }
                                    },
                                    [_vm._v(_vm._s(_vm.$t("labels.publish")))]
                                  ),
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
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "mt-3" }),
                  _vm._v(" "),
                  _c(
                    "v-card",
                    { attrs: { width: "324" } },
                    [
                      _c(
                        "v-app-bar",
                        {
                          staticStyle: { cursor: "pointer" },
                          attrs: { dark: "" },
                          on: {
                            click: function($event) {
                              _vm.layers_visible = !_vm.layers_visible
                            }
                          }
                        },
                        [
                          _c("v-toolbar-title", [
                            _vm._v(_vm._s(_vm.$t("poster.layers")))
                          ]),
                          _vm._v(" "),
                          _c("v-spacer"),
                          _vm._v(" "),
                          _c("v-icon", [_vm._v("expand_more")])
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "draggable",
                        _vm._b(
                          {
                            staticClass: "list-group",
                            on: {
                              start: function($event) {
                                _vm.drag = true
                              },
                              end: function($event) {
                                _vm.drag = false
                              },
                              change: _vm.onLayerChange
                            },
                            model: {
                              value: _vm.list,
                              callback: function($$v) {
                                _vm.list = $$v
                              },
                              expression: "list"
                            }
                          },
                          "draggable",
                          _vm.dragOptions,
                          false
                        ),
                        [
                          _c(
                            "transition-group",
                            {
                              directives: [
                                {
                                  name: "show",
                                  rawName: "v-show",
                                  value: _vm.layers_visible,
                                  expression: "layers_visible"
                                }
                              ],
                              attrs: {
                                type: "transition",
                                name: !_vm.drag ? "flip-list" : null
                              }
                            },
                            _vm._l(_vm.list, function(element) {
                              return _c(
                                "v-list-item",
                                {
                                  key: element.ind,
                                  class: { selected: element.layer_selected },
                                  on: {
                                    click: function($event) {
                                      return _vm.onSelectElem(element)
                                    },
                                    dblclick: function($event) {
                                      return _vm.onRenameImage(element)
                                    }
                                  }
                                },
                                [
                                  _c(
                                    "v-dialog",
                                    {
                                      attrs: { "max-width": "700px" },
                                      model: {
                                        value: _vm.rename_dialog,
                                        callback: function($$v) {
                                          _vm.rename_dialog = $$v
                                        },
                                        expression: "rename_dialog"
                                      }
                                    },
                                    [
                                      _c(
                                        "v-card",
                                        [
                                          _c(
                                            "v-container",
                                            [
                                              _c(
                                                "v-card-text",
                                                [
                                                  _c("v-text-field", {
                                                    attrs: { label: "Name" },
                                                    model: {
                                                      value: _vm.elem_name,
                                                      callback: function($$v) {
                                                        _vm.elem_name = $$v
                                                      },
                                                      expression: "elem_name"
                                                    }
                                                  })
                                                ],
                                                1
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "v-card-actions",
                                                [
                                                  _c(
                                                    "v-btn",
                                                    {
                                                      on: {
                                                        click:
                                                          _vm.cancelRenameImage
                                                      }
                                                    },
                                                    [
                                                      _vm._v(
                                                        _vm._s(
                                                          _vm.$t(
                                                            "buttons.cancel"
                                                          )
                                                        )
                                                      )
                                                    ]
                                                  ),
                                                  _vm._v(" "),
                                                  _c(
                                                    "v-btn",
                                                    {
                                                      attrs: {
                                                        color: "primary"
                                                      },
                                                      on: {
                                                        click: function(
                                                          $event
                                                        ) {
                                                          return _vm.renameImage(
                                                            element.ind
                                                          )
                                                        }
                                                      }
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
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-list-item-icon",
                                    [
                                      _c(
                                        "v-btn",
                                        {
                                          attrs: { icon: "" },
                                          on: {
                                            click: function($event) {
                                              return _vm.toggleVisibility(
                                                element
                                              )
                                            }
                                          }
                                        },
                                        [
                                          element.visible
                                            ? _c("v-icon", [
                                                _vm._v("visibility")
                                              ])
                                            : _c("v-icon", [
                                                _vm._v("visibility_off")
                                              ])
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      element.ind
                                        ? _c(
                                            "v-btn",
                                            {
                                              attrs: { icon: "" },
                                              on: {
                                                click: function($event) {
                                                  return _vm.removeObject(
                                                    element
                                                  )
                                                }
                                              }
                                            },
                                            [_c("v-icon", [_vm._v("delete")])],
                                            1
                                          )
                                        : _vm._e(),
                                      _vm._v(" "),
                                      _c("v-icon", { staticClass: "mr-2" }, [
                                        _vm._v(_vm._s(_vm.mediaIcon(element)))
                                      ])
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-list-item-content",
                                    [
                                      _c("v-list-item-title", {
                                        domProps: {
                                          textContent: _vm._s(
                                            element.filename ||
                                              element.text ||
                                              "Immagine"
                                          )
                                        }
                                      })
                                    ],
                                    1
                                  )
                                ],
                                1
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
        2
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

/***/ "./resources/js/views/poster/create2.vue":
/*!***********************************************!*\
  !*** ./resources/js/views/poster/create2.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _create2_vue_vue_type_template_id_7aacc8b3_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create2.vue?vue&type=template&id=7aacc8b3&scoped=true& */ "./resources/js/views/poster/create2.vue?vue&type=template&id=7aacc8b3&scoped=true&");
/* harmony import */ var _create2_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create2.vue?vue&type=script&lang=js& */ "./resources/js/views/poster/create2.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _create2_vue_vue_type_style_index_0_id_7aacc8b3_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./create2.vue?vue&type=style&index=0&id=7aacc8b3&scoped=true&lang=css& */ "./resources/js/views/poster/create2.vue?vue&type=style&index=0&id=7aacc8b3&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _create2_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _create2_vue_vue_type_template_id_7aacc8b3_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _create2_vue_vue_type_template_id_7aacc8b3_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "7aacc8b3",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/poster/create2.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/poster/create2.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/views/poster/create2.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_create2_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./create2.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/poster/create2.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_create2_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/poster/create2.vue?vue&type=style&index=0&id=7aacc8b3&scoped=true&lang=css&":
/*!********************************************************************************************************!*\
  !*** ./resources/js/views/poster/create2.vue?vue&type=style&index=0&id=7aacc8b3&scoped=true&lang=css& ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_create2_vue_vue_type_style_index_0_id_7aacc8b3_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader/dist/cjs.js??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./create2.vue?vue&type=style&index=0&id=7aacc8b3&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/poster/create2.vue?vue&type=style&index=0&id=7aacc8b3&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_create2_vue_vue_type_style_index_0_id_7aacc8b3_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_create2_vue_vue_type_style_index_0_id_7aacc8b3_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_create2_vue_vue_type_style_index_0_id_7aacc8b3_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_create2_vue_vue_type_style_index_0_id_7aacc8b3_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_create2_vue_vue_type_style_index_0_id_7aacc8b3_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/views/poster/create2.vue?vue&type=template&id=7aacc8b3&scoped=true&":
/*!******************************************************************************************!*\
  !*** ./resources/js/views/poster/create2.vue?vue&type=template&id=7aacc8b3&scoped=true& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_create2_vue_vue_type_template_id_7aacc8b3_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./create2.vue?vue&type=template&id=7aacc8b3&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/poster/create2.vue?vue&type=template&id=7aacc8b3&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_create2_vue_vue_type_template_id_7aacc8b3_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_create2_vue_vue_type_template_id_7aacc8b3_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);