/** 图片裁剪组件 license by http://eleadmin.com */
import type { Plugin } from 'vue';
import type { CropperLocale } from './types';
declare const _default: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            aspectRatio: number;
            viewMode: Cropper.ViewMode;
            dragMode: Cropper.DragMode;
            minContainerWidth: number;
            minContainerHeight: number;
            minCanvasWidth: number;
            minCanvasHeight: number;
            minCropBoxWidth: number;
            minCropBoxHeight: number;
            croppedMinWidth: number;
            croppedMinHeight: number;
            croppedFillColor: string;
            imageSmoothingEnabled: boolean;
            toBlob: boolean;
            showPreview: boolean;
            previewWidth: number;
        }> & Omit<Readonly<import("vue").ExtractPropTypes<{
            src: StringConstructor;
            aspectRatio: {
                type: NumberConstructor;
                default: number;
            };
            viewMode: {
                type: import("vue").PropType<Cropper.ViewMode>;
                default: number;
            };
            dragMode: {
                type: import("vue").PropType<Cropper.DragMode>;
                default: string;
            };
            initialAspectRatio: NumberConstructor;
            minContainerWidth: {
                type: NumberConstructor;
                default: number;
            };
            minContainerHeight: {
                type: NumberConstructor;
                default: number;
            };
            minCanvasWidth: {
                type: NumberConstructor;
                default: number;
            };
            minCanvasHeight: {
                type: NumberConstructor;
                default: number;
            };
            minCropBoxWidth: {
                type: NumberConstructor;
                default: number;
            };
            minCropBoxHeight: {
                type: NumberConstructor;
                default: number;
            };
            croppedWidth: NumberConstructor;
            croppedHeight: NumberConstructor;
            croppedMinWidth: {
                type: NumberConstructor;
                default: number;
            };
            croppedMinHeight: {
                type: NumberConstructor;
                default: number;
            };
            croppedMaxWidth: NumberConstructor;
            croppedMaxHeight: NumberConstructor;
            croppedFillColor: {
                type: StringConstructor;
                default: string;
            };
            imageSmoothingEnabled: BooleanConstructor;
            imageSmoothingQuality: import("vue").PropType<Cropper.ImageSmoothingQuality>;
            toBlob: BooleanConstructor;
            accept: StringConstructor;
            tools: StringConstructor;
            showPreview: {
                type: BooleanConstructor;
                default: boolean;
            };
            okText: StringConstructor;
            previewWidth: {
                type: NumberConstructor;
                default: number;
            };
        }>> & {
            onDone?: ((...args: any[]) => any) | undefined;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "aspectRatio" | "viewMode" | "dragMode" | "minContainerWidth" | "minContainerHeight" | "minCanvasWidth" | "minCanvasHeight" | "minCropBoxWidth" | "minCropBoxHeight" | "croppedMinWidth" | "croppedMinHeight" | "croppedFillColor" | "imageSmoothingEnabled" | "toBlob" | "showPreview" | "previewWidth">;
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            [name: string]: import("vue").Slot | undefined;
        }>;
        $root: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
        $parent: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
        $emit: (event: "done", ...args: any[]) => void;
        $el: any;
        $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
            src: StringConstructor;
            aspectRatio: {
                type: NumberConstructor;
                default: number;
            };
            viewMode: {
                type: import("vue").PropType<Cropper.ViewMode>;
                default: number;
            };
            dragMode: {
                type: import("vue").PropType<Cropper.DragMode>;
                default: string;
            };
            initialAspectRatio: NumberConstructor;
            minContainerWidth: {
                type: NumberConstructor;
                default: number;
            };
            minContainerHeight: {
                type: NumberConstructor;
                default: number;
            };
            minCanvasWidth: {
                type: NumberConstructor;
                default: number;
            };
            minCanvasHeight: {
                type: NumberConstructor;
                default: number;
            };
            minCropBoxWidth: {
                type: NumberConstructor;
                default: number;
            };
            minCropBoxHeight: {
                type: NumberConstructor;
                default: number;
            };
            croppedWidth: NumberConstructor;
            croppedHeight: NumberConstructor;
            croppedMinWidth: {
                type: NumberConstructor;
                default: number;
            };
            croppedMinHeight: {
                type: NumberConstructor;
                default: number;
            };
            croppedMaxWidth: NumberConstructor;
            croppedMaxHeight: NumberConstructor;
            croppedFillColor: {
                type: StringConstructor;
                default: string;
            };
            imageSmoothingEnabled: BooleanConstructor;
            imageSmoothingQuality: import("vue").PropType<Cropper.ImageSmoothingQuality>;
            toBlob: BooleanConstructor;
            accept: StringConstructor;
            tools: StringConstructor;
            showPreview: {
                type: BooleanConstructor;
                default: boolean;
            };
            okText: StringConstructor;
            previewWidth: {
                type: NumberConstructor;
                default: number;
            };
        }>> & {
            onDone?: ((...args: any[]) => any) | undefined;
        }, {
            imgRef: import("vue").Ref<HTMLImageElement | null>;
            previewRef: import("vue").Ref<HTMLDivElement | null>;
            zoomIn: () => void;
            zoomOut: () => void;
            moveL: () => void;
            moveR: () => void;
            moveT: () => void;
            moveB: () => void;
            rotateL: () => void;
            rotateR: () => void;
            scaleX: () => void;
            scaleY: () => void;
            reset: () => void;
            crop: () => void;
            replace: ({ data, type }: {
                data: string;
                type: string;
            }) => void;
        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "done"[], string, {
            aspectRatio: number;
            viewMode: Cropper.ViewMode;
            dragMode: Cropper.DragMode;
            minContainerWidth: number;
            minContainerHeight: number;
            minCanvasWidth: number;
            minCanvasHeight: number;
            minCropBoxWidth: number;
            minCropBoxHeight: number;
            croppedMinWidth: number;
            croppedMinHeight: number;
            croppedFillColor: string;
            imageSmoothingEnabled: boolean;
            toBlob: boolean;
            showPreview: boolean;
            previewWidth: number;
        }> & {
            beforeCreate?: ((() => void) | (() => void)[]) | undefined;
            created?: ((() => void) | (() => void)[]) | undefined;
            beforeMount?: ((() => void) | (() => void)[]) | undefined;
            mounted?: ((() => void) | (() => void)[]) | undefined;
            beforeUpdate?: ((() => void) | (() => void)[]) | undefined;
            updated?: ((() => void) | (() => void)[]) | undefined;
            activated?: ((() => void) | (() => void)[]) | undefined;
            deactivated?: ((() => void) | (() => void)[]) | undefined;
            beforeDestroy?: ((() => void) | (() => void)[]) | undefined;
            beforeUnmount?: ((() => void) | (() => void)[]) | undefined;
            destroyed?: ((() => void) | (() => void)[]) | undefined;
            unmounted?: ((() => void) | (() => void)[]) | undefined;
            renderTracked?: (((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[]) | undefined;
            renderTriggered?: (((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[]) | undefined;
            errorCaptured?: (((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void) | ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void)[]) | undefined;
        };
        $forceUpdate: () => void;
        $nextTick: typeof import("vue").nextTick;
        $watch(source: string | Function, cb: Function, options?: import("vue").WatchOptions<boolean> | undefined): import("vue").WatchStopHandle;
    } & Readonly<import("vue").ExtractPropTypes<{
        src: StringConstructor;
        aspectRatio: {
            type: NumberConstructor;
            default: number;
        };
        viewMode: {
            type: import("vue").PropType<Cropper.ViewMode>;
            default: number;
        };
        dragMode: {
            type: import("vue").PropType<Cropper.DragMode>;
            default: string;
        };
        initialAspectRatio: NumberConstructor;
        minContainerWidth: {
            type: NumberConstructor;
            default: number;
        };
        minContainerHeight: {
            type: NumberConstructor;
            default: number;
        };
        minCanvasWidth: {
            type: NumberConstructor;
            default: number;
        };
        minCanvasHeight: {
            type: NumberConstructor;
            default: number;
        };
        minCropBoxWidth: {
            type: NumberConstructor;
            default: number;
        };
        minCropBoxHeight: {
            type: NumberConstructor;
            default: number;
        };
        croppedWidth: NumberConstructor;
        croppedHeight: NumberConstructor;
        croppedMinWidth: {
            type: NumberConstructor;
            default: number;
        };
        croppedMinHeight: {
            type: NumberConstructor;
            default: number;
        };
        croppedMaxWidth: NumberConstructor;
        croppedMaxHeight: NumberConstructor;
        croppedFillColor: {
            type: StringConstructor;
            default: string;
        };
        imageSmoothingEnabled: BooleanConstructor;
        imageSmoothingQuality: import("vue").PropType<Cropper.ImageSmoothingQuality>;
        toBlob: BooleanConstructor;
        accept: StringConstructor;
        tools: StringConstructor;
        showPreview: {
            type: BooleanConstructor;
            default: boolean;
        };
        okText: StringConstructor;
        previewWidth: {
            type: NumberConstructor;
            default: number;
        };
    }>> & {
        onDone?: ((...args: any[]) => any) | undefined;
    } & import("vue").ShallowUnwrapRef<{
        imgRef: import("vue").Ref<HTMLImageElement | null>;
        previewRef: import("vue").Ref<HTMLDivElement | null>;
        zoomIn: () => void;
        zoomOut: () => void;
        moveL: () => void;
        moveR: () => void;
        moveT: () => void;
        moveB: () => void;
        rotateL: () => void;
        rotateR: () => void;
        scaleX: () => void;
        scaleY: () => void;
        reset: () => void;
        crop: () => void;
        replace: ({ data, type }: {
            data: string;
            type: string;
        }) => void;
    }> & {} & {} & import("vue").ComponentCustomProperties;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    src: StringConstructor;
    aspectRatio: {
        type: NumberConstructor;
        default: number;
    };
    viewMode: {
        type: import("vue").PropType<Cropper.ViewMode>;
        default: number;
    };
    dragMode: {
        type: import("vue").PropType<Cropper.DragMode>;
        default: string;
    };
    initialAspectRatio: NumberConstructor;
    minContainerWidth: {
        type: NumberConstructor;
        default: number;
    };
    minContainerHeight: {
        type: NumberConstructor;
        default: number;
    };
    minCanvasWidth: {
        type: NumberConstructor;
        default: number;
    };
    minCanvasHeight: {
        type: NumberConstructor;
        default: number;
    };
    minCropBoxWidth: {
        type: NumberConstructor;
        default: number;
    };
    minCropBoxHeight: {
        type: NumberConstructor;
        default: number;
    };
    croppedWidth: NumberConstructor;
    croppedHeight: NumberConstructor;
    croppedMinWidth: {
        type: NumberConstructor;
        default: number;
    };
    croppedMinHeight: {
        type: NumberConstructor;
        default: number;
    };
    croppedMaxWidth: NumberConstructor;
    croppedMaxHeight: NumberConstructor;
    croppedFillColor: {
        type: StringConstructor;
        default: string;
    };
    imageSmoothingEnabled: BooleanConstructor;
    imageSmoothingQuality: import("vue").PropType<Cropper.ImageSmoothingQuality>;
    toBlob: BooleanConstructor;
    accept: StringConstructor;
    tools: StringConstructor;
    showPreview: {
        type: BooleanConstructor;
        default: boolean;
    };
    okText: StringConstructor;
    previewWidth: {
        type: NumberConstructor;
        default: number;
    };
}>> & {
    onDone?: ((...args: any[]) => any) | undefined;
}, {
    imgRef: import("vue").Ref<HTMLImageElement | null>;
    previewRef: import("vue").Ref<HTMLDivElement | null>;
    zoomIn: () => void;
    zoomOut: () => void;
    moveL: () => void;
    moveR: () => void;
    moveT: () => void;
    moveB: () => void;
    rotateL: () => void;
    rotateR: () => void;
    scaleX: () => void;
    scaleY: () => void;
    reset: () => void;
    crop: () => void;
    replace: ({ data, type }: {
        data: string;
        type: string;
    }) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "done"[], "done", {
    aspectRatio: number;
    viewMode: Cropper.ViewMode;
    dragMode: Cropper.DragMode;
    minContainerWidth: number;
    minContainerHeight: number;
    minCanvasWidth: number;
    minCanvasHeight: number;
    minCropBoxWidth: number;
    minCropBoxHeight: number;
    croppedMinWidth: number;
    croppedMinHeight: number;
    croppedFillColor: string;
    imageSmoothingEnabled: boolean;
    toBlob: boolean;
    showPreview: boolean;
    previewWidth: number;
}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Plugin;
export default _default;
export { CropperLocale };
