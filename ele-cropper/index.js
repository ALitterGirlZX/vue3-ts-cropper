"use strict";
var vue = require("vue");
var Cropper = require("cropperjs");
var LocaleReceiver = require("ant-design-vue/lib/locale-provider/LocaleReceiver");
var antDesignVue = require("ant-design-vue");
var iconsVue = require("@ant-design/icons-vue");
function _interopDefaultLegacy(e) {
  return e && typeof e === "object" && "default" in e ? e : { "default": e };
}
var Cropper__default = /* @__PURE__ */ _interopDefaultLegacy(Cropper);
var LocaleReceiver__default = /* @__PURE__ */ _interopDefaultLegacy(LocaleReceiver);
var _export_sfc = (sfc, props2) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props2) {
    target[key] = val;
  }
  return target;
};
const DEFAULT_TOOLS = [
  "zoomIn,zoomOut",
  "moveL,moveR,moveT,moveB",
  "rotateL,rotateR",
  "scaleX,scaleY",
  "reset,upload",
  "crop"
].join(" | ");
const props$1 = {
  tools: {
    type: String,
    default: DEFAULT_TOOLS
  },
  accept: {
    type: String,
    default: "image/*"
  },
  okText: String
};
const _sfc_main$1 = vue.defineComponent({
  name: "CropperTools",
  components: {
    LocaleReceiver: LocaleReceiver__default["default"],
    AButtonGroup: antDesignVue.ButtonGroup,
    AButton: antDesignVue.Button,
    ZoomInOutlined: iconsVue.ZoomInOutlined,
    ZoomOutOutlined: iconsVue.ZoomOutOutlined,
    RotateLeftOutlined: iconsVue.RotateLeftOutlined,
    RotateRightOutlined: iconsVue.RotateRightOutlined,
    ArrowLeftOutlined: iconsVue.ArrowLeftOutlined,
    ArrowRightOutlined: iconsVue.ArrowRightOutlined,
    ArrowUpOutlined: iconsVue.ArrowUpOutlined,
    ArrowDownOutlined: iconsVue.ArrowDownOutlined,
    SwapOutlined: iconsVue.SwapOutlined,
    SyncOutlined: iconsVue.SyncOutlined,
    AUpload: antDesignVue.Upload,
    UploadOutlined: iconsVue.UploadOutlined,
    CheckOutlined: iconsVue.CheckOutlined
  },
  props: props$1,
  emits: [
    "crop",
    "move-b",
    "move-l",
    "move-r",
    "move-t",
    "reset",
    "rotate-l",
    "rotate-r",
    "scale-x",
    "scale-y",
    "replace",
    "zoom-in",
    "zoom-out"
  ],
  setup(props2, { emit }) {
    const groups = vue.computed(() => {
      var _a, _b, _c;
      return (_c = (_b = (_a = props2.tools) == null ? void 0 : _a.split("|")) == null ? void 0 : _b.map((g) => {
        var _a2;
        return (_a2 = g == null ? void 0 : g.split(",")) == null ? void 0 : _a2.map((t) => t == null ? void 0 : t.trim());
      })) != null ? _c : [];
    });
    const zoomIn = () => {
      emit("zoom-in");
    };
    const zoomOut = () => {
      emit("zoom-out");
    };
    const rotateL = () => {
      emit("rotate-l");
    };
    const rotateR = () => {
      emit("rotate-r");
    };
    const moveL = () => {
      emit("move-l");
    };
    const moveR = () => {
      emit("move-r");
    };
    const moveT = () => {
      emit("move-t");
    };
    const moveB = () => {
      emit("move-b");
    };
    const scaleX = () => {
      emit("scale-x");
    };
    const scaleY = () => {
      emit("scale-y");
    };
    const reset = () => {
      emit("reset");
    };
    const crop = () => {
      emit("crop");
    };
    const onUpload = ({ file }) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        var _a;
        emit("replace", {
          data: (_a = e.target) == null ? void 0 : _a.result,
          type: file.type
        });
      };
      reader.readAsDataURL(file);
    };
    return {
      groups,
      zoomIn,
      zoomOut,
      rotateL,
      rotateR,
      moveL,
      moveR,
      moveT,
      moveB,
      scaleX,
      scaleY,
      reset,
      crop,
      onUpload
    };
  }
});
const _hoisted_1$1 = { class: "ele-cropper-tool" };
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ZoomInOutlined = vue.resolveComponent("ZoomInOutlined");
  const _component_AButton = vue.resolveComponent("AButton");
  const _component_ZoomOutOutlined = vue.resolveComponent("ZoomOutOutlined");
  const _component_RotateLeftOutlined = vue.resolveComponent("RotateLeftOutlined");
  const _component_RotateRightOutlined = vue.resolveComponent("RotateRightOutlined");
  const _component_ArrowLeftOutlined = vue.resolveComponent("ArrowLeftOutlined");
  const _component_ArrowRightOutlined = vue.resolveComponent("ArrowRightOutlined");
  const _component_ArrowUpOutlined = vue.resolveComponent("ArrowUpOutlined");
  const _component_ArrowDownOutlined = vue.resolveComponent("ArrowDownOutlined");
  const _component_SwapOutlined = vue.resolveComponent("SwapOutlined");
  const _component_SyncOutlined = vue.resolveComponent("SyncOutlined");
  const _component_UploadOutlined = vue.resolveComponent("UploadOutlined");
  const _component_AUpload = vue.resolveComponent("AUpload");
  const _component_CheckOutlined = vue.resolveComponent("CheckOutlined");
  const _component_AButtonGroup = vue.resolveComponent("AButtonGroup");
  const _component_LocaleReceiver = vue.resolveComponent("LocaleReceiver");
  return vue.openBlock(), vue.createElementBlock("div", _hoisted_1$1, [
    vue.createVNode(_component_LocaleReceiver, { "component-name": "ele" }, {
      default: vue.withCtx(() => [
        (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(_ctx.groups, (buttons) => {
          return vue.openBlock(), vue.createBlock(_component_AButtonGroup, {
            key: buttons.join(","),
            class: "ele-cropper-tool-item"
          }, {
            default: vue.withCtx(() => [
              (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(buttons, (name, index) => {
                return vue.openBlock(), vue.createElementBlock(vue.Fragment, null, [
                  name === "zoomIn" ? (vue.openBlock(), vue.createBlock(_component_AButton, {
                    key: "zoomIn" + index,
                    type: "primary",
                    class: "ele-cropper-tool-btn",
                    title: "放大",
                    onClick: _ctx.zoomIn
                  }, {
                    icon: vue.withCtx(() => [
                      vue.createVNode(_component_ZoomInOutlined)
                    ]),
                    _: 2
                  }, 1032, ["title", "onClick"])) : name === "zoomOut" ? (vue.openBlock(), vue.createBlock(_component_AButton, {
                    key: "zoomOut" + index,
                    type: "primary",
                    class: "ele-cropper-tool-btn",
                    title: "缩小",
                    onClick: _ctx.zoomOut
                  }, {
                    icon: vue.withCtx(() => [
                      vue.createVNode(_component_ZoomOutOutlined)
                    ]),
                    _: 2
                  }, 1032, ["title", "onClick"])) : name === "rotateL" ? (vue.openBlock(), vue.createBlock(_component_AButton, {
                    key: "rotateL" + index,
                    type: "primary",
                    class: "ele-cropper-tool-btn",
                    title: "左旋转",
                    onClick: _ctx.rotateL
                  }, {
                    icon: vue.withCtx(() => [
                      vue.createVNode(_component_RotateLeftOutlined)
                    ]),
                    _: 2
                  }, 1032, ["title", "onClick"])) : name === "rotateR" ? (vue.openBlock(), vue.createBlock(_component_AButton, {
                    key: "rotateR" + index,
                    type: "primary",
                    class: "ele-cropper-tool-btn",
                    title: "右旋转",
                    onClick: _ctx.rotateR
                  }, {
                    icon: vue.withCtx(() => [
                      vue.createVNode(_component_RotateRightOutlined)
                    ]),
                    _: 2
                  }, 1032, ["title", "onClick"])) : name === "moveL" ? (vue.openBlock(), vue.createBlock(_component_AButton, {
                    key: "moveL" + index,
                    type: "primary",
                    class: "ele-cropper-tool-btn",
                    title: "左移动",
                    onClick: _ctx.moveL
                  }, {
                    icon: vue.withCtx(() => [
                      vue.createVNode(_component_ArrowLeftOutlined)
                    ]),
                    _: 2
                  }, 1032, ["title", "onClick"])) : name === "moveR" ? (vue.openBlock(), vue.createBlock(_component_AButton, {
                    key: "moveR" + index,
                    type: "primary",
                    class: "ele-cropper-tool-btn",
                    title: "右移动",
                    onClick: _ctx.moveR
                  }, {
                    icon: vue.withCtx(() => [
                      vue.createVNode(_component_ArrowRightOutlined)
                    ]),
                    _: 2
                  }, 1032, ["title", "onClick"])) : name === "moveT" ? (vue.openBlock(), vue.createBlock(_component_AButton, {
                    key: "moveT" + index,
                    type: "primary",
                    class: "ele-cropper-tool-btn",
                    title: "向上移动",
                    onClick: _ctx.moveT
                  }, {
                    icon: vue.withCtx(() => [
                      vue.createVNode(_component_ArrowUpOutlined)
                    ]),
                    _: 2
                  }, 1032, ["title", "onClick"])) : name === "moveB" ? (vue.openBlock(), vue.createBlock(_component_AButton, {
                    key: "moveB" + index,
                    type: "primary",
                    class: "ele-cropper-tool-btn",
                    title: "向下移动",
                    onClick: _ctx.moveB
                  }, {
                    icon: vue.withCtx(() => [
                      vue.createVNode(_component_ArrowDownOutlined)
                    ]),
                    _: 2
                  }, 1032, ["title", "onClick"])) : name === "scaleX" ? (vue.openBlock(), vue.createBlock(_component_AButton, {
                    key: "scaleX" + index,
                    type: "primary",
                    class: "ele-cropper-tool-btn",
                    title: "x轴旋转",
                    onClick: _ctx.scaleX
                  }, {
                    icon: vue.withCtx(() => [
                      vue.createVNode(_component_SwapOutlined)
                    ]),
                    _: 2
                  }, 1032, ["title", "onClick"])) : name === "scaleY" ? (vue.openBlock(), vue.createBlock(_component_AButton, {
                    key: "scaleY" + index,
                    type: "primary",
                    class: "ele-cropper-tool-btn",
                    title: "y轴旋转",
                    onClick: _ctx.scaleY
                  }, {
                    icon: vue.withCtx(() => [
                      vue.createVNode(_component_SwapOutlined, { style: { "transform": "rotate(90deg)" } })
                    ]),
                    _: 2
                  }, 1032, ["title", "onClick"])) : name === "reset" ? (vue.openBlock(), vue.createBlock(_component_AButton, {
                    key: "reset" + index,
                    type: "primary",
                    class: "ele-cropper-tool-btn",
                    title: "重置",
                    onClick: _ctx.reset
                  }, {
                    icon: vue.withCtx(() => [
                      vue.createVNode(_component_SyncOutlined)
                    ]),
                    _: 2
                  }, 1032, ["title", "onClick"])) : name === "upload" ? (vue.openBlock(), vue.createBlock(_component_AUpload, {
                    key: "upload" + index,
                    accept: _ctx.accept,
                    "custom-request": _ctx.onUpload,
                    "show-upload-list": false
                  }, {
                    default: vue.withCtx(() => [
                      vue.createVNode(_component_AButton, {
                        type: "primary",
                        class: "ele-cropper-tool-btn",
                        title: "上传",
                        style: { "border-top-right-radius": "2px", "border-bottom-right-radius": "2px" }
                      }, {
                        icon: vue.withCtx(() => [
                          vue.createVNode(_component_UploadOutlined)
                        ]),
                        _: 2
                      }, 1032, ["title"])
                    ]),
                    _: 2
                  }, 1032, ["accept", "custom-request"])) : name === "crop" ? (vue.openBlock(), vue.createBlock(_component_AButton, {
                    key: "crop" + index,
                    type: "primary",
                    onClick: _ctx.crop
                  }, {
                    icon: vue.withCtx(() => [
                      vue.createVNode(_component_CheckOutlined)
                    ]),
                    default: vue.withCtx(() => [
                      vue.createElementVNode("span", null, vue.toDisplayString(_ctx.okText || "完成"), 1)
                    ]),
                    _: 2
                  }, 1032, ["onClick"])) : vue.createCommentVNode("", true)
                ], 64);
              }), 256))
            ]),
            _: 2
          }, 1024);
        }), 128))
      ]),
      _: 1
    })
  ]);
}
var CropperTools = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1]]);
const props = {
  src: String,
  aspectRatio: {
    type: Number,
    default: 1
  },
  viewMode: {
    type: Number,
    default: 0
  },
  dragMode: {
    type: String,
    default: "crop"
  },
  initialAspectRatio: Number,
  minContainerWidth: {
    type: Number,
    default: 200
  },
  minContainerHeight: {
    type: Number,
    default: 100
  },
  minCanvasWidth: {
    type: Number,
    default: 0
  },
  minCanvasHeight: {
    type: Number,
    default: 0
  },
  minCropBoxWidth: {
    type: Number,
    default: 0
  },
  minCropBoxHeight: {
    type: Number,
    default: 0
  },
  croppedWidth: Number,
  croppedHeight: Number,
  croppedMinWidth: {
    type: Number,
    default: 0
  },
  croppedMinHeight: {
    type: Number,
    default: 0
  },
  croppedMaxWidth: Number,
  croppedMaxHeight: Number,
  croppedFillColor: {
    type: String,
    default: "transparent"
  },
  imageSmoothingEnabled: Boolean,
  imageSmoothingQuality: String,
  toBlob: Boolean,
  accept: String,
  tools: String,
  showPreview: {
    type: Boolean,
    default: true
  },
  okText: String,
  previewWidth: {
    type: Number,
    default: 120
  }
};
const _sfc_main = vue.defineComponent({
  name: "EleCropper",
  components: { CropperTools },
  props,
  emits: ["done"],
  setup(props2, { emit }) {
    const imgRef = vue.ref(null);
    const previewRef = vue.ref(null);
    let ins = null;
    let imgType = "image/jpeg";
    let scaleXValue = -1;
    let scaleYValue = -1;
    const render = () => {
      var _a;
      destroy();
      const options = {
        aspectRatio: props2.aspectRatio,
        viewMode: props2.viewMode,
        dragMode: props2.dragMode,
        initialAspectRatio: props2.initialAspectRatio,
        minContainerWidth: props2.minContainerWidth,
        minContainerHeight: props2.minContainerHeight,
        minCanvasWidth: props2.minCanvasWidth,
        minCanvasHeight: props2.minCanvasHeight,
        minCropBoxWidth: props2.minCropBoxWidth,
        minCropBoxHeight: props2.minCropBoxHeight
      };
      if (props2.showPreview) {
        options.preview = (_a = vue.unref(previewRef)) == null ? void 0 : _a.querySelectorAll(".ele-cropper-preview");
      }
      const img = vue.unref(imgRef);
      if (img) {
        ins = new Cropper__default["default"](img, options);
      }
    };
    const zoomIn = () => {
      ins && ins.zoom(0.1);
    };
    const zoomOut = () => {
      ins && ins.zoom(-0.1);
    };
    const moveL = () => {
      ins && ins.move(-10, 0);
    };
    const moveR = () => {
      ins && ins.move(10, 0);
    };
    const moveT = () => {
      ins && ins.move(0, -10);
    };
    const moveB = () => {
      ins && ins.move(0, 10);
    };
    const rotateL = () => {
      ins && ins.rotate(-45);
    };
    const rotateR = () => {
      ins && ins.rotate(45);
    };
    const scaleX = () => {
      ins && ins.scaleX(scaleXValue);
      scaleXValue = -scaleXValue;
    };
    const scaleY = () => {
      ins && ins.scaleY(scaleYValue);
      scaleYValue = -scaleYValue;
    };
    const reset = () => {
      ins && ins.reset();
    };
    const crop = () => {
      const result = ins == null ? void 0 : ins.getCroppedCanvas({
        width: props2.croppedWidth,
        height: props2.croppedHeight,
        minWidth: props2.croppedMinWidth,
        minHeight: props2.croppedMinHeight,
        maxWidth: props2.croppedMaxWidth,
        maxHeight: props2.croppedMaxHeight,
        fillColor: props2.croppedFillColor,
        imageSmoothingEnabled: props2.imageSmoothingEnabled,
        imageSmoothingQuality: props2.imageSmoothingQuality
      });
      if (result) {
        if (props2.toBlob) {
          result.toBlob((blob) => {
            emit("done", blob);
          }, imgType);
        } else {
          emit("done", result.toDataURL(imgType));
        }
      } else {
        emit("done");
      }
    };
    const replace = ({ data, type }) => {
      imgType = type;
      if (ins) {
        ins.replace(data);
      } else {
        const elem = vue.unref(imgRef.value);
        if (elem) {
          elem.src = data;
          elem.style.display = "block";
        }
        render();
      }
    };
    const destroy = () => {
      ins && ins.destroy();
      ins = null;
    };
    vue.watch(() => props2.src, (value) => {
      if (value) {
        if (ins) {
          ins.replace(value);
        } else {
          vue.nextTick(() => {
            render();
          });
        }
      } else {
        destroy();
      }
    });
    vue.onMounted(() => {
      props2.src && render();
    });
    vue.onBeforeUnmount(() => {
      destroy();
    });
    return {
      imgRef,
      previewRef,
      zoomIn,
      zoomOut,
      moveL,
      moveR,
      moveT,
      moveB,
      rotateL,
      rotateR,
      scaleX,
      scaleY,
      reset,
      crop,
      replace
    };
  }
});
const _hoisted_1 = { class: "ele-cropper" };
const _hoisted_2 = { class: "ele-cropper-group" };
const _hoisted_3 = { class: "ele-cropper-img-group" };
const _hoisted_4 = ["src"];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_CropperTools = vue.resolveComponent("CropperTools");
  return vue.openBlock(), vue.createElementBlock("div", _hoisted_1, [
    vue.createElementVNode("div", _hoisted_2, [
      vue.createElementVNode("div", _hoisted_3, [
        vue.createElementVNode("img", {
          ref: "imgRef",
          src: _ctx.src,
          alt: "cropper",
          style: vue.normalizeStyle({ maxWidth: "100%", display: _ctx.src ? "block" : "none" })
        }, null, 12, _hoisted_4)
      ]),
      _ctx.showPreview ? (vue.openBlock(), vue.createElementBlock("div", {
        key: 0,
        ref: "previewRef",
        style: vue.normalizeStyle({ width: _ctx.previewWidth + 20 + "px" }),
        class: "ele-cropper-preview-group"
      }, [
        vue.createElementVNode("div", {
          class: "ele-cropper-preview",
          style: vue.normalizeStyle({
            width: _ctx.previewWidth + "px",
            height: _ctx.previewWidth / (_ctx.aspectRatio || 1) + "px"
          })
        }, null, 4),
        _ctx.aspectRatio === 1 ? (vue.openBlock(), vue.createElementBlock("div", {
          key: 0,
          class: "ele-cropper-preview ele-cropper-preview-circle",
          style: vue.normalizeStyle({
            width: _ctx.previewWidth + "px",
            height: _ctx.previewWidth / (_ctx.aspectRatio || 1) + "px"
          })
        }, null, 4)) : (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 1 }, [
          vue.createElementVNode("div", {
            class: "ele-cropper-preview",
            style: vue.normalizeStyle({
              width: _ctx.previewWidth + "px",
              height: (_ctx.previewWidth / 3 * 2 - 10) / (_ctx.aspectRatio || 1) + "px"
            })
          }, null, 4),
          vue.createElementVNode("div", {
            class: "ele-cropper-preview",
            style: vue.normalizeStyle({
              width: _ctx.previewWidth + "px",
              height: _ctx.previewWidth / 3 / (_ctx.aspectRatio || 1) + "px",
              marginLeft: "10px"
            })
          }, null, 4)
        ], 64))
      ], 4)) : vue.createCommentVNode("", true)
    ]),
    vue.createVNode(_component_CropperTools, {
      tools: _ctx.tools,
      "ok-text": _ctx.okText,
      onCrop: _ctx.crop,
      onMoveB: _ctx.moveB,
      onMoveL: _ctx.moveL,
      onMoveR: _ctx.moveR,
      onMoveT: _ctx.moveT,
      onReset: _ctx.reset,
      onRotateL: _ctx.rotateL,
      onRotateR: _ctx.rotateR,
      onScaleX: _ctx.scaleX,
      onScaleY: _ctx.scaleY,
      onReplace: _ctx.replace,
      onZoomIn: _ctx.zoomIn,
      onZoomOut: _ctx.zoomOut
    }, null, 8, ["tools", "ok-text", "onCrop", "onMoveB", "onMoveL", "onMoveR", "onMoveT", "onReset", "onRotateL", "onRotateR", "onScaleX", "onScaleY", "onReplace", "onZoomIn", "onZoomOut"])
  ]);
}
var EleCropper = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
EleCropper.install = function(app) {
  app.component(EleCropper.name, EleCropper);
};
module.exports = EleCropper;
