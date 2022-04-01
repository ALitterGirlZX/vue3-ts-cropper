"use strict";
var vue = require("vue");
var LocaleReceiver = require("ant-design-vue/lib/locale-provider/LocaleReceiver");
var EleModal = require("../ele-modal");
var EleCropper = require("../ele-cropper");
function _interopDefaultLegacy(e) {
  return e && typeof e === "object" && "default" in e ? e : { "default": e };
}
var LocaleReceiver__default = /* @__PURE__ */ _interopDefaultLegacy(LocaleReceiver);
var EleModal__default = /* @__PURE__ */ _interopDefaultLegacy(EleModal);
var EleCropper__default = /* @__PURE__ */ _interopDefaultLegacy(EleCropper);
var _export_sfc = (sfc, props2) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props2) {
    target[key] = val;
  }
  return target;
};
const props = {
  visible: Boolean,
  src: String,
  aspectRatio: {
    type: Number,
    default: 1
  },
  viewMode: Number,
  dragMode: String,
  initialAspectRatio: Number,
  minContainerWidth: Number,
  minContainerHeight: Number,
  minCanvasWidth: Number,
  minCanvasHeight: Number,
  minCropBoxWidth: Number,
  minCropBoxHeight: Number,
  croppedWidth: Number,
  croppedHeight: Number,
  croppedMinWidth: Number,
  croppedMinHeight: Number,
  croppedMaxWidth: Number,
  croppedMaxHeight: Number,
  croppedFillColor: String,
  imageSmoothingEnabled: Boolean,
  imageSmoothingQuality: String,
  toBlob: Boolean,
  accept: {
    type: String,
    default: "image/*"
  },
  tools: String,
  showPreview: {
    type: Boolean,
    default: true
  },
  okText: String,
  centered: Boolean,
  closable: {
    type: Boolean,
    default: true
  },
  destroyOnClose: Boolean,
  forceRender: Boolean,
  keyboard: {
    type: Boolean,
    default: true
  },
  mask: {
    type: Boolean,
    default: true
  },
  maskClosable: {
    type: Boolean,
    default: true
  },
  maskStyle: Object,
  title: String,
  width: {
    type: String,
    default: "680px"
  },
  wrapClassName: String,
  zIndex: {
    type: Number,
    default: 1e3
  },
  dialogStyle: Object,
  dialogClass: String,
  movable: {
    type: Boolean,
    default: true
  },
  moveOut: Boolean,
  moveOutPositive: Boolean,
  resizable: [Boolean, String],
  maxable: Boolean,
  multiple: Boolean,
  fullscreen: Boolean,
  inner: Boolean,
  resetOnClose: {
    type: Boolean,
    default: true
  }
};
const _sfc_main = vue.defineComponent({
  name: "EleCropperModal",
  components: {
    LocaleReceiver: LocaleReceiver__default["default"],
    EleModal: EleModal__default["default"],
    EleCropper: EleCropper__default["default"]
  },
  props,
  emits: ["done", "open", "closed", "update:visible"],
  setup(props2, { emit }) {
    const show = vue.ref(true);
    const updateVisible = (value) => {
      emit("update:visible", value);
    };
    const onDone = (result) => {
      emit("done", result);
    };
    vue.watch(() => props2.visible, (value) => {
      if (value) {
        show.value = true;
        emit("open");
      } else {
        if (props2.destroyOnClose) {
          show.value = false;
        }
        emit("closed");
      }
    });
    return {
      show,
      updateVisible,
      onDone
    };
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_EleCropper = vue.resolveComponent("EleCropper");
  const _component_EleModal = vue.resolveComponent("EleModal");
  const _component_LocaleReceiver = vue.resolveComponent("LocaleReceiver");
  return vue.openBlock(), vue.createBlock(_component_LocaleReceiver, { "component-name": "ele" }, {
    default: vue.withCtx(() => [
      vue.createVNode(_component_EleModal, {
        visible: _ctx.visible,
        title: _ctx.title,
        width: _ctx.width,
        centered: _ctx.centered,
        closable: _ctx.closable,
        "destroy-on-close": _ctx.destroyOnClose,
        "force-render": _ctx.forceRender,
        keyboard: _ctx.keyboard,
        mask: _ctx.mask,
        "mask-closable": _ctx.maskClosable,
        "mask-style": _ctx.maskStyle,
        "wrap-class-name": _ctx.wrapClassName,
        "z-index": _ctx.zIndex,
        "dialog-style": _ctx.dialogStyle,
        "dialog-class": _ctx.dialogClass,
        footer: null,
        movable: _ctx.movable,
        "move-out": _ctx.moveOut,
        "move-out-positive": _ctx.moveOutPositive,
        resizable: _ctx.resizable,
        maxable: _ctx.maxable,
        multiple: _ctx.multiple,
        fullscreen: _ctx.fullscreen,
        inner: _ctx.inner,
        "reset-on-close": _ctx.resetOnClose,
        "onUpdate:visible": _ctx.updateVisible
      }, {
        title: vue.withCtx(() => [
          vue.renderSlot(_ctx.$slots, "title")
        ]),
        default: vue.withCtx(() => [
          _ctx.show ? (vue.openBlock(), vue.createBlock(_component_EleCropper, {
            key: 0,
            src: _ctx.src,
            "aspect-ratio": _ctx.aspectRatio,
            "view-mode": _ctx.viewMode,
            accept: _ctx.accept,
            "drag-mode": _ctx.dragMode,
            "initial-aspect-ratio": _ctx.initialAspectRatio,
            "min-container-width": _ctx.minContainerWidth,
            "min-container-height": _ctx.minContainerHeight,
            "min-canvas-width": _ctx.minCanvasWidth,
            "min-canvas-height": _ctx.minCanvasHeight,
            "min-crop-box-width": _ctx.minCropBoxWidth,
            "min-crop-box-height": _ctx.minCropBoxHeight,
            "cropped-width": _ctx.croppedWidth,
            "cropped-height": _ctx.croppedHeight,
            "cropped-min-width": _ctx.croppedMinWidth,
            "cropped-min-height": _ctx.croppedMinHeight,
            "cropped-max-width": _ctx.croppedMaxWidth,
            "cropped-max-height": _ctx.croppedMaxHeight,
            "cropped-fill-color": _ctx.croppedFillColor,
            "to-blob": _ctx.toBlob,
            "image-smoothing-enabled": _ctx.imageSmoothingEnabled,
            "image-smoothing-quality": _ctx.imageSmoothingQuality,
            tools: _ctx.tools,
            "show-preview": _ctx.showPreview,
            "ok-text": _ctx.okText,
            onDone: _ctx.onDone
          }, null, 8, ["src", "aspect-ratio", "view-mode", "accept", "drag-mode", "initial-aspect-ratio", "min-container-width", "min-container-height", "min-canvas-width", "min-canvas-height", "min-crop-box-width", "min-crop-box-height", "cropped-width", "cropped-height", "cropped-min-width", "cropped-min-height", "cropped-max-width", "cropped-max-height", "cropped-fill-color", "to-blob", "image-smoothing-enabled", "image-smoothing-quality", "tools", "show-preview", "ok-text", "onDone"])) : vue.createCommentVNode("", true)
        ]),
        _: 2
      }, 1032, ["visible", "title", "width", "centered", "closable", "destroy-on-close", "force-render", "keyboard", "mask", "mask-closable", "mask-style", "wrap-class-name", "z-index", "dialog-style", "dialog-class", "movable", "move-out", "move-out-positive", "resizable", "maxable", "multiple", "fullscreen", "inner", "reset-on-close", "onUpdate:visible"])
    ]),
    _: 3
  });
}
var EleCropperModal = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
EleCropperModal.install = function(app) {
  app.component(EleCropperModal.name, EleCropperModal);
};
module.exports = EleCropperModal;
