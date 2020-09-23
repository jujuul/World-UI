<template>
<template v-if="visible">
    <Teleport to="body">
        <div class="world-dialog-overlay" @click="onClickOverlay"></div>
        <div class="world-dialog-wrapper">
            <div class="world-dialog" :center="center">
                <header>
                    <slot name="title" />
                    <span @click="close" class="world-dialog-close"></span>
                </header>
                <main>
                    <slot name="content" />
                </main>
                <footer>
                    <Button @click="cancel">取消</Button>
                    <Button @click="ok" level="main">确定</Button>
                </footer>
            </div>
        </div>
    </Teleport>
</template>
</template>
</template>
</template>

<script lang="ts">
import Button from "./Button.vue";
export default {
    props: {
        visible: {
            type: Boolean,
            default: false,
        },
        closeOnClickOverlay: {
            type: Boolean,
            default: true,
        },
        ok: {
            type: Function,
        },
        cancel: {
            type: Function,
        },
        center: {
            type: Boolean,
            default: false,
        },
    },
    components: {
        Button,
    },
    setup(props, context) {
        const close = () => {
            context.emit("update:visible", false);
        };
        const ok = () => {
            if (props.ok && props.ok() !== false) {
                close();
            }
        };
        const cancel = () => {
            context.emit("cancel");
            close();
        };
        const onClickOverlay = () => {
            if (props.closeOnClickOverlay) {
                // close();
            }
        };
        return {
            close,
            onClickOverlay,
            ok,
            cancel,
        };
    },
};
</script>

<style lang="scss">
$radius: 4px;
$border-color: #d9d9d9;

.world-dialog {
    background: white;
    border-radius: $radius;
    box-shadow: 0 0 3px fade_out(black, 0.5);
    min-width: 20em;
    max-width: 90%;

    &-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: fade_out(black, 0.5);
        z-index: 10;
    }

    &-wrapper {
        position: fixed;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        z-index: 11;
    }

    &[center] {
        >header {
            text-align: center;
        }

        >footer {
            text-align: center;
        }
    }

    >header {
        padding: 12px 16px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: 20px;
    }

    >main {
        padding: 12px 16px;
        color: #606266;
    }

    >footer {
        padding: 12px 16px;
        text-align: right;
    }

    &-close {
        position: relative;
        display: inline-block;
        width: 16px;
        height: 16px;
        cursor: pointer;

        &::before,
        &::after {
            content: "";
            position: absolute;
            height: 1px;
            background: #9e9599;
            width: 100%;
            top: 50%;
            left: 50%;

            &:hover {
                background: #73c0ff;
                transition: background 0.25s;
            }
        }

        &::before {
            transform: translate(-50%, -50%) rotate(-45deg);
        }

        &::after {
            transform: translate(-50%, -50%) rotate(45deg);
        }
    }
}
</style>
