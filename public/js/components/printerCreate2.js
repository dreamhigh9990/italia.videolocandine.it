(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["printerCreate2"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/printer/create2.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/printer/create2.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************/
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
var FontFaceObserver = __webpack_require__(/*! fontfaceobserver */ "./node_modules/fontfaceobserver/fontfaceobserver.standalone.js");




/* harmony default export */ __webpack_exports__["default"] = ({
  components: {},
  data: function data() {
    var _this = this;

    return {
      valid: true,
      width: 500,
      height: 500,
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
    this.uploading_dialog = true; // this.canvas = new fabric.Canvas('canvas', {
    // 	width: this.width,
    // 	height: this.height,
    // 	backgroundColor: '#fff',
    // 	preserveObjectStacking: true
    // });

    fabric.Object.NUM_FRACTION_DIGITS = 10;
    window.addEventListener("keydown", function (e) {
      if (e.key === "Delete") {
        var activeobj = this.canvas.getActiveObject();
        this.canvas.remove(activeobj);
      }
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
    var bgImage = new fabric.Image(); // var canvas = this.canvas;

    var width = this.width;
    var height = this.height;
    var self = this;
    var list = this.list;
    axios.get(_settings_js__WEBPACK_IMPORTED_MODULE_0__["settings"].root_url + '/api/printer/init-create/' + this.$route.params.id).then(function (response) {
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
      bgImage.setSrc(_settings_js__WEBPACK_IMPORTED_MODULE_0__["settings"].root_url + '/users/' + _this2.user.name + '/printer-templates/' + response.data.bg.file, function (img) {
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
        list.push(bgImage);
        self.canvas.renderAll();
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
    },
    prepareSavedImage: function prepareSavedImage(e) {
      var _this3 = this;

      var counter = 0;
      this.loading_dialog_text = 'Sto caricando un file, potrebbero volerci alcuni secondi';
      this.uploading_dialog = true;
      var items = e.target.files || e.dataTransfer.files;

      if (items.length > 0) {
        for (var i = 0; i < items.length; i++) {
          var form = new FormData();
          var attachment = items[i];
          form.append('image', attachment);
          axios.post(_settings_js__WEBPACK_IMPORTED_MODULE_0__["settings"].root_url + '/api/printer/upload-printer-images', form).then(function (response) {
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
      axios.post(_settings_js__WEBPACK_IMPORTED_MODULE_0__["settings"].root_url + '/api/printer/upload-new-image', form).then(function (response) {
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
          list.push(img);
          canvas.add(img);
        });
        _this4.uploading_dialog = false;
      })["catch"](function (error) {
        console.log("error");
        _this4.uploading_dialog = false;
      });
    },
    download: function download(event) {
      var dataURL = this.canvas.toDataURL("image/jpg");
      this.$refs.download_btn.href = dataURL;
    },
    save: function save() {
      var _this5 = this;

      var canvas = this.canvas;
      var json_data = JSON.stringify(canvas.toJSON(['selectable', 'evented', 'editable', 'text', 'filename', 'layer_selected', 'object_type']));
      var form = new FormData();
      form.append('json_data', json_data);
      form.append('edit_flag', "created");
      form.append('id', -1);
      form.append('image', this.canvas.toDataURL());
      form.append('width', this.bg_width);
      form.append('height', this.bg_height);
      this.loading_dialog_text = 'Sto caricando un file, potrebbero volerci alcuni secondi';
      this.uploading_dialog = true;
      axios.post(_settings_js__WEBPACK_IMPORTED_MODULE_0__["settings"].root_url + '/api/printer/save', form).then(function (response) {
        _this5.uploading_dialog = false;

        _this5.$router.push({
          "name": "printer-edit"
        });
      })["catch"](function (error) {
        _this5.uploading_dialog = false;
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
      var _this6 = this;

      axios.post(_settings_js__WEBPACK_IMPORTED_MODULE_0__["settings"].root_url + '/api/helper/aspect-ratio-id', {
        width: this.bg_width,
        height: this.bg_height
      }).then(function (response) {
        _this6.posterForm.aspect_ratio_id = response.data;
        _this6.posterForm.availableGroups = _this6.getAvailableGroups(_this6.posterForm.aspect_ratio_id, _this6.posterForm.group_type.id);
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
        list.push(img);
        canvas.add(img);
      });
      this.image_dialog = false;
    },
    deleteSavedImage: function deleteSavedImage(image) {
      var _this7 = this;

      var r = confirm("Sei sicuro di voler cancellare questa foto prodotto?");

      if (r == true) {
        axios.post(_settings_js__WEBPACK_IMPORTED_MODULE_0__["settings"].root_url + '/api/printer/delete-printer-image/' + image.id).then(function (response) {
          _this7.prepared_images = response.data.prepared_images;
        })["catch"](function (error) {});
      }
    },
    onLayerChange: function onLayerChange() {
      for (var i = this.list.length - 1; i >= 0; i--) {
        this.list[i].moveTo(1000 - i);
      }

      this.canvas.renderAll();
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
    printCanvas: function printCanvas() {
      var dataUrl = this.canvas.toDataURL();
      var windowContent = '<!DOCTYPE html>';
      windowContent += '<html>';
      windowContent += '<head><title>Print canvas</title></head>';
      windowContent += '<body>';
      windowContent += '<div style="width:100%; height:100%">';
      windowContent += '<img src="' + dataUrl + '" onload=window.print();window.close(); width=100%; height=100%>';
      windowContent += '</div>';
      windowContent += '</body>';
      windowContent += '</html>';
      var printWin = window.open('', '', 'width=500,height=500');
      printWin.document.open();
      printWin.document.write(windowContent);
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/printer/create2.vue?vue&type=style&index=0&id=1aad2492&scoped=true&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/printer/create2.vue?vue&type=style&index=0&id=1aad2492&scoped=true&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "\n.img-container-card[data-v-1aad2492]{\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tpadding: 6px;\n\twidth: 150px;\n\theight: 150px;\n}\n.img-btn[data-v-1aad2492]{\n\tcursor: pointer;\n\tdisplay: flex;\n    align-items: flex-end;\n    justify-content: center;\n    text-align: center;\n    padding-bottom: 8px;\n}\n.btn-over-img[data-v-1aad2492]{\n\tposition: absolute;\n\tbottom: 10px;\n}\n.flip-list-move[data-v-1aad2492] {\n  \ttransition: -webkit-transform 0.5s;\n  \ttransition: transform 0.5s;\n  \ttransition: transform 0.5s, -webkit-transform 0.5s;\n}\n.no-move[data-v-1aad2492] {\n  \ttransition: -webkit-transform 0s;\n  \ttransition: transform 0s;\n  \ttransition: transform 0s, -webkit-transform 0s;\n}\n.ghost[data-v-1aad2492] {\n  \topacity: 0.5;\n  \tbackground: #c8ebfb;\n}\n.list-group[data-v-1aad2492] {\n  \tmin-height: 20px;\n}\n.list-group-item[data-v-1aad2492] {\n  \tcursor: move;\n}\n.list-group-item i[data-v-1aad2492] {\n  \tcursor: pointer;\n}\n.selected[data-v-1aad2492]{\n\tbackground: #E0E0E0;\n}\n", ""]);



/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/printer/create2.vue?vue&type=style&index=0&id=1aad2492&scoped=true&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/printer/create2.vue?vue&type=style&index=0&id=1aad2492&scoped=true&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./create2.vue?vue&type=style&index=0&id=1aad2492&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/printer/create2.vue?vue&type=style&index=0&id=1aad2492&scoped=true&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/printer/create2.vue?vue&type=template&id=1aad2492&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/printer/create2.vue?vue&type=template&id=1aad2492&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************/
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
      attrs: { fluid: "", "grid-list-xl": "" }
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
            )
          ],
          _vm._v(" "),
          _c(
            "v-flex",
            { attrs: { xs12: "", sm8: "", md7: "" } },
            [
              _c(
                "v-layout",
                {
                  staticStyle: { "padding-top": "12px" },
                  attrs: { "justify-center": "" }
                },
                [_c("canvas", { attrs: { id: "canvas" } })]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-flex",
            { attrs: { xs12: "", sm4: "", md5: "" } },
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
                                  staticClass: "v-btn primary v-btn--block",
                                  staticStyle: {
                                    padding: "6px",
                                    "margin-bottom": "-16px",
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
                                    "\n\t\t\t\t\t            " +
                                      _vm._s(_vm.$t("poster.load_picture")) +
                                      "\n\t\t\t\t\t        "
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
                                                  _vm.$t("poster.add_pictures")
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
                                                  attrs: { row: "", wrap: "" }
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
                                                            cursor: "pointer"
                                                          }
                                                        },
                                                        [
                                                          _c("input", {
                                                            staticStyle: {
                                                              display: "none"
                                                            },
                                                            attrs: {
                                                              type: "file",
                                                              name: "saved_img",
                                                              id: "saved_img",
                                                              multiple: ""
                                                            },
                                                            on: {
                                                              change:
                                                                _vm.prepareSavedImage
                                                            }
                                                          }),
                                                          _vm._v(
                                                            "\n\t\t\t\t\t\t\t\t\t\t\t            " +
                                                              _vm._s(
                                                                _vm.$t(
                                                                  "buttons.choose_files"
                                                                )
                                                              ) +
                                                              "\n\t\t\t\t\t\t\t\t\t\t\t        "
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
                                                                  contain: "",
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
                                    "\n\t\t\t\t\t    \t" +
                                      _vm._s(font.name) +
                                      "\n\t\t\t\t\t    \t"
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
                                    [_c("v-icon", [_vm._v("mdi-format-bold")])],
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
                                                    _vm._v("format_color_fill")
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
                            [
                              _c(
                                "a",
                                {
                                  ref: "download_btn",
                                  staticClass:
                                    "v-btn v-btn--contained v-size--default primary",
                                  attrs: { href: "", download: "print.jpg" },
                                  on: { click: _vm.download }
                                },
                                [
                                  _c(
                                    "span",
                                    { staticClass: "v-btn__content" },
                                    [_vm._v(_vm._s(_vm.$t("buttons.download")))]
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "v-btn",
                                {
                                  attrs: { color: "primary" },
                                  on: { click: _vm.save }
                                },
                                [_vm._v(_vm._s(_vm.$t("buttons.save")))]
                              ),
                              _vm._v(" "),
                              _c(
                                "v-btn",
                                {
                                  attrs: { color: "primary", width: "80" },
                                  on: { click: _vm.printCanvas }
                                },
                                [_vm._v(_vm._s(_vm.$t("buttons.print")))]
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
                                }
                              }
                            },
                            [
                              _c(
                                "v-list-item-icon",
                                [
                                  _c(
                                    "v-btn",
                                    {
                                      attrs: { icon: "" },
                                      on: {
                                        click: function($event) {
                                          return _vm.toggleVisibility(element)
                                        }
                                      }
                                    },
                                    [
                                      element.visible
                                        ? _c("v-icon", [_vm._v("visibility")])
                                        : _c("v-icon", [
                                            _vm._v("visibility_off")
                                          ])
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-btn",
                                    {
                                      attrs: { icon: "" },
                                      on: {
                                        click: function($event) {
                                          return _vm.removeObject(element)
                                        }
                                      }
                                    },
                                    [_c("v-icon", [_vm._v("delete")])],
                                    1
                                  )
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
                                        element.text || "Immagine"
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

/***/ "./resources/js/views/printer/create2.vue":
/*!************************************************!*\
  !*** ./resources/js/views/printer/create2.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _create2_vue_vue_type_template_id_1aad2492_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create2.vue?vue&type=template&id=1aad2492&scoped=true& */ "./resources/js/views/printer/create2.vue?vue&type=template&id=1aad2492&scoped=true&");
/* harmony import */ var _create2_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create2.vue?vue&type=script&lang=js& */ "./resources/js/views/printer/create2.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _create2_vue_vue_type_style_index_0_id_1aad2492_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./create2.vue?vue&type=style&index=0&id=1aad2492&scoped=true&lang=css& */ "./resources/js/views/printer/create2.vue?vue&type=style&index=0&id=1aad2492&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _create2_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _create2_vue_vue_type_template_id_1aad2492_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _create2_vue_vue_type_template_id_1aad2492_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "1aad2492",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/printer/create2.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/printer/create2.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/views/printer/create2.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_create2_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./create2.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/printer/create2.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_create2_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/printer/create2.vue?vue&type=style&index=0&id=1aad2492&scoped=true&lang=css&":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/views/printer/create2.vue?vue&type=style&index=0&id=1aad2492&scoped=true&lang=css& ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_create2_vue_vue_type_style_index_0_id_1aad2492_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader/dist/cjs.js??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./create2.vue?vue&type=style&index=0&id=1aad2492&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/printer/create2.vue?vue&type=style&index=0&id=1aad2492&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_create2_vue_vue_type_style_index_0_id_1aad2492_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_create2_vue_vue_type_style_index_0_id_1aad2492_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_create2_vue_vue_type_style_index_0_id_1aad2492_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_create2_vue_vue_type_style_index_0_id_1aad2492_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_create2_vue_vue_type_style_index_0_id_1aad2492_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/views/printer/create2.vue?vue&type=template&id=1aad2492&scoped=true&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/views/printer/create2.vue?vue&type=template&id=1aad2492&scoped=true& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_create2_vue_vue_type_template_id_1aad2492_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./create2.vue?vue&type=template&id=1aad2492&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/printer/create2.vue?vue&type=template&id=1aad2492&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_create2_vue_vue_type_template_id_1aad2492_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_create2_vue_vue_type_template_id_1aad2492_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);