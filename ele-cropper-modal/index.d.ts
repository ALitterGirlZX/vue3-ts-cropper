/** 图片裁剪弹窗组件 license by http://eleadmin.com */
import type { Plugin } from 'vue';
declare const _default: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            visible: boolean;
            aspectRatio: number;
            imageSmoothingEnabled: boolean;
            toBlob: boolean;
            accept: string;
            showPreview: boolean;
            centered: boolean;
            closable: boolean;
            destroyOnClose: boolean;
            forceRender: boolean;
            keyboard: boolean;
            mask: boolean;
            maskClosable: boolean;
            width: string;
            zIndex: number;
            movable: boolean;
            moveOut: boolean;
            moveOutPositive: boolean;
            maxable: boolean;
            multiple: boolean;
            fullscreen: boolean;
            inner: boolean;
            resetOnClose: boolean;
        }> & Omit<Readonly<import("vue").ExtractPropTypes<{
            visible: BooleanConstructor;
            src: StringConstructor;
            aspectRatio: {
                type: NumberConstructor;
                default: number;
            };
            viewMode: import("vue").PropType<Cropper.ViewMode>;
            dragMode: import("vue").PropType<Cropper.DragMode>;
            initialAspectRatio: NumberConstructor;
            minContainerWidth: NumberConstructor;
            minContainerHeight: NumberConstructor;
            minCanvasWidth: NumberConstructor;
            minCanvasHeight: NumberConstructor;
            minCropBoxWidth: NumberConstructor;
            minCropBoxHeight: NumberConstructor;
            croppedWidth: NumberConstructor;
            croppedHeight: NumberConstructor;
            croppedMinWidth: NumberConstructor;
            croppedMinHeight: NumberConstructor;
            croppedMaxWidth: NumberConstructor;
            croppedMaxHeight: NumberConstructor;
            croppedFillColor: StringConstructor;
            imageSmoothingEnabled: BooleanConstructor;
            imageSmoothingQuality: import("vue").PropType<Cropper.ImageSmoothingQuality>;
            toBlob: BooleanConstructor;
            accept: {
                type: StringConstructor;
                default: string;
            };
            tools: StringConstructor;
            showPreview: {
                type: BooleanConstructor;
                default: boolean;
            };
            okText: StringConstructor;
            centered: BooleanConstructor;
            closable: {
                type: BooleanConstructor;
                default: boolean;
            };
            destroyOnClose: BooleanConstructor;
            forceRender: BooleanConstructor;
            keyboard: {
                type: BooleanConstructor;
                default: boolean;
            };
            mask: {
                type: BooleanConstructor;
                default: boolean;
            };
            maskClosable: {
                type: BooleanConstructor;
                default: boolean;
            };
            maskStyle: import("vue").PropType<import("vue").CSSProperties>;
            title: StringConstructor;
            width: {
                type: StringConstructor;
                default: string;
            };
            wrapClassName: StringConstructor;
            zIndex: {
                type: NumberConstructor;
                default: number;
            };
            dialogStyle: import("vue").PropType<import("vue").CSSProperties>;
            dialogClass: StringConstructor;
            movable: {
                type: BooleanConstructor;
                default: boolean;
            };
            moveOut: BooleanConstructor;
            moveOutPositive: BooleanConstructor;
            resizable: import("vue").PropType<boolean | "horizontal" | "vertical">;
            maxable: BooleanConstructor;
            multiple: BooleanConstructor;
            fullscreen: BooleanConstructor;
            inner: BooleanConstructor;
            resetOnClose: {
                type: BooleanConstructor;
                default: boolean;
            };
        }>> & {
            onDone?: ((...args: any[]) => any) | undefined;
            onOpen?: ((...args: any[]) => any) | undefined;
            onClosed?: ((...args: any[]) => any) | undefined;
            "onUpdate:visible"?: ((...args: any[]) => any) | undefined;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "visible" | "aspectRatio" | "imageSmoothingEnabled" | "toBlob" | "accept" | "showPreview" | "centered" | "closable" | "destroyOnClose" | "forceRender" | "keyboard" | "mask" | "maskClosable" | "width" | "zIndex" | "movable" | "moveOut" | "moveOutPositive" | "maxable" | "multiple" | "fullscreen" | "inner" | "resetOnClose">;
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
        $emit: (event: "done" | "open" | "closed" | "update:visible", ...args: any[]) => void;
        $el: any;
        $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
            visible: BooleanConstructor;
            src: StringConstructor;
            aspectRatio: {
                type: NumberConstructor;
                default: number;
            };
            viewMode: import("vue").PropType<Cropper.ViewMode>;
            dragMode: import("vue").PropType<Cropper.DragMode>;
            initialAspectRatio: NumberConstructor;
            minContainerWidth: NumberConstructor;
            minContainerHeight: NumberConstructor;
            minCanvasWidth: NumberConstructor;
            minCanvasHeight: NumberConstructor;
            minCropBoxWidth: NumberConstructor;
            minCropBoxHeight: NumberConstructor;
            croppedWidth: NumberConstructor;
            croppedHeight: NumberConstructor;
            croppedMinWidth: NumberConstructor;
            croppedMinHeight: NumberConstructor;
            croppedMaxWidth: NumberConstructor;
            croppedMaxHeight: NumberConstructor;
            croppedFillColor: StringConstructor;
            imageSmoothingEnabled: BooleanConstructor;
            imageSmoothingQuality: import("vue").PropType<Cropper.ImageSmoothingQuality>;
            toBlob: BooleanConstructor;
            accept: {
                type: StringConstructor;
                default: string;
            };
            tools: StringConstructor;
            showPreview: {
                type: BooleanConstructor;
                default: boolean;
            };
            okText: StringConstructor;
            centered: BooleanConstructor;
            closable: {
                type: BooleanConstructor;
                default: boolean;
            };
            destroyOnClose: BooleanConstructor;
            forceRender: BooleanConstructor;
            keyboard: {
                type: BooleanConstructor;
                default: boolean;
            };
            mask: {
                type: BooleanConstructor;
                default: boolean;
            };
            maskClosable: {
                type: BooleanConstructor;
                default: boolean;
            };
            maskStyle: import("vue").PropType<import("vue").CSSProperties>;
            title: StringConstructor;
            width: {
                type: StringConstructor;
                default: string;
            };
            wrapClassName: StringConstructor;
            zIndex: {
                type: NumberConstructor;
                default: number;
            };
            dialogStyle: import("vue").PropType<import("vue").CSSProperties>;
            dialogClass: StringConstructor;
            movable: {
                type: BooleanConstructor;
                default: boolean;
            };
            moveOut: BooleanConstructor;
            moveOutPositive: BooleanConstructor;
            resizable: import("vue").PropType<boolean | "horizontal" | "vertical">;
            maxable: BooleanConstructor;
            multiple: BooleanConstructor;
            fullscreen: BooleanConstructor;
            inner: BooleanConstructor;
            resetOnClose: {
                type: BooleanConstructor;
                default: boolean;
            };
        }>> & {
            onDone?: ((...args: any[]) => any) | undefined;
            onOpen?: ((...args: any[]) => any) | undefined;
            onClosed?: ((...args: any[]) => any) | undefined;
            "onUpdate:visible"?: ((...args: any[]) => any) | undefined;
        }, {
            show: import("vue").Ref<boolean>;
            updateVisible: (value: boolean) => void;
            onDone: (result: string) => void;
        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("done" | "open" | "closed" | "update:visible")[], string, {
            visible: boolean;
            aspectRatio: number;
            imageSmoothingEnabled: boolean;
            toBlob: boolean;
            accept: string;
            showPreview: boolean;
            centered: boolean;
            closable: boolean;
            destroyOnClose: boolean;
            forceRender: boolean;
            keyboard: boolean;
            mask: boolean;
            maskClosable: boolean;
            width: string;
            zIndex: number;
            movable: boolean;
            moveOut: boolean;
            moveOutPositive: boolean;
            maxable: boolean;
            multiple: boolean;
            fullscreen: boolean;
            inner: boolean;
            resetOnClose: boolean;
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
        visible: BooleanConstructor;
        src: StringConstructor;
        aspectRatio: {
            type: NumberConstructor;
            default: number;
        };
        viewMode: import("vue").PropType<Cropper.ViewMode>;
        dragMode: import("vue").PropType<Cropper.DragMode>;
        initialAspectRatio: NumberConstructor;
        minContainerWidth: NumberConstructor;
        minContainerHeight: NumberConstructor;
        minCanvasWidth: NumberConstructor;
        minCanvasHeight: NumberConstructor;
        minCropBoxWidth: NumberConstructor;
        minCropBoxHeight: NumberConstructor;
        croppedWidth: NumberConstructor;
        croppedHeight: NumberConstructor;
        croppedMinWidth: NumberConstructor;
        croppedMinHeight: NumberConstructor;
        croppedMaxWidth: NumberConstructor;
        croppedMaxHeight: NumberConstructor;
        croppedFillColor: StringConstructor;
        imageSmoothingEnabled: BooleanConstructor;
        imageSmoothingQuality: import("vue").PropType<Cropper.ImageSmoothingQuality>;
        toBlob: BooleanConstructor;
        accept: {
            type: StringConstructor;
            default: string;
        };
        tools: StringConstructor;
        showPreview: {
            type: BooleanConstructor;
            default: boolean;
        };
        okText: StringConstructor;
        centered: BooleanConstructor;
        closable: {
            type: BooleanConstructor;
            default: boolean;
        };
        destroyOnClose: BooleanConstructor;
        forceRender: BooleanConstructor;
        keyboard: {
            type: BooleanConstructor;
            default: boolean;
        };
        mask: {
            type: BooleanConstructor;
            default: boolean;
        };
        maskClosable: {
            type: BooleanConstructor;
            default: boolean;
        };
        maskStyle: import("vue").PropType<import("vue").CSSProperties>;
        title: StringConstructor;
        width: {
            type: StringConstructor;
            default: string;
        };
        wrapClassName: StringConstructor;
        zIndex: {
            type: NumberConstructor;
            default: number;
        };
        dialogStyle: import("vue").PropType<import("vue").CSSProperties>;
        dialogClass: StringConstructor;
        movable: {
            type: BooleanConstructor;
            default: boolean;
        };
        moveOut: BooleanConstructor;
        moveOutPositive: BooleanConstructor;
        resizable: import("vue").PropType<boolean | "horizontal" | "vertical">;
        maxable: BooleanConstructor;
        multiple: BooleanConstructor;
        fullscreen: BooleanConstructor;
        inner: BooleanConstructor;
        resetOnClose: {
            type: BooleanConstructor;
            default: boolean;
        };
    }>> & {
        onDone?: ((...args: any[]) => any) | undefined;
        onOpen?: ((...args: any[]) => any) | undefined;
        onClosed?: ((...args: any[]) => any) | undefined;
        "onUpdate:visible"?: ((...args: any[]) => any) | undefined;
    } & import("vue").ShallowUnwrapRef<{
        show: import("vue").Ref<boolean>;
        updateVisible: (value: boolean) => void;
        onDone: (result: string) => void;
    }> & {} & {} & import("vue").ComponentCustomProperties;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    visible: BooleanConstructor;
    src: StringConstructor;
    aspectRatio: {
        type: NumberConstructor;
        default: number;
    };
    viewMode: import("vue").PropType<Cropper.ViewMode>;
    dragMode: import("vue").PropType<Cropper.DragMode>;
    initialAspectRatio: NumberConstructor;
    minContainerWidth: NumberConstructor;
    minContainerHeight: NumberConstructor;
    minCanvasWidth: NumberConstructor;
    minCanvasHeight: NumberConstructor;
    minCropBoxWidth: NumberConstructor;
    minCropBoxHeight: NumberConstructor;
    croppedWidth: NumberConstructor;
    croppedHeight: NumberConstructor;
    croppedMinWidth: NumberConstructor;
    croppedMinHeight: NumberConstructor;
    croppedMaxWidth: NumberConstructor;
    croppedMaxHeight: NumberConstructor;
    croppedFillColor: StringConstructor;
    imageSmoothingEnabled: BooleanConstructor;
    imageSmoothingQuality: import("vue").PropType<Cropper.ImageSmoothingQuality>;
    toBlob: BooleanConstructor;
    accept: {
        type: StringConstructor;
        default: string;
    };
    tools: StringConstructor;
    showPreview: {
        type: BooleanConstructor;
        default: boolean;
    };
    okText: StringConstructor;
    centered: BooleanConstructor;
    closable: {
        type: BooleanConstructor;
        default: boolean;
    };
    destroyOnClose: BooleanConstructor;
    forceRender: BooleanConstructor;
    keyboard: {
        type: BooleanConstructor;
        default: boolean;
    };
    mask: {
        type: BooleanConstructor;
        default: boolean;
    };
    maskClosable: {
        type: BooleanConstructor;
        default: boolean;
    };
    maskStyle: import("vue").PropType<import("vue").CSSProperties>;
    title: StringConstructor;
    width: {
        type: StringConstructor;
        default: string;
    };
    wrapClassName: StringConstructor;
    zIndex: {
        type: NumberConstructor;
        default: number;
    };
    dialogStyle: import("vue").PropType<import("vue").CSSProperties>;
    dialogClass: StringConstructor;
    movable: {
        type: BooleanConstructor;
        default: boolean;
    };
    moveOut: BooleanConstructor;
    moveOutPositive: BooleanConstructor;
    resizable: import("vue").PropType<boolean | "horizontal" | "vertical">;
    maxable: BooleanConstructor;
    multiple: BooleanConstructor;
    fullscreen: BooleanConstructor;
    inner: BooleanConstructor;
    resetOnClose: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & {
    onDone?: ((...args: any[]) => any) | undefined;
    onOpen?: ((...args: any[]) => any) | undefined;
    onClosed?: ((...args: any[]) => any) | undefined;
    "onUpdate:visible"?: ((...args: any[]) => any) | undefined;
}, {
    show: import("vue").Ref<boolean>;
    updateVisible: (value: boolean) => void;
    onDone: (result: string) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("done" | "open" | "closed" | "update:visible")[], "done" | "open" | "closed" | "update:visible", {
    visible: boolean;
    aspectRatio: number;
    imageSmoothingEnabled: boolean;
    toBlob: boolean;
    accept: string;
    showPreview: boolean;
    centered: boolean;
    closable: boolean;
    destroyOnClose: boolean;
    forceRender: boolean;
    keyboard: boolean;
    mask: boolean;
    maskClosable: boolean;
    width: string;
    zIndex: number;
    movable: boolean;
    moveOut: boolean;
    moveOutPositive: boolean;
    maxable: boolean;
    multiple: boolean;
    fullscreen: boolean;
    inner: boolean;
    resetOnClose: boolean;
}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Plugin;
export default _default;
