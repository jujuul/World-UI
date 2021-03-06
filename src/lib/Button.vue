<template>
<button class="world-button" :class="classes" :disabled="disabled">
    <span v-if="loading" class="world-loadingIndicator"></span>
    <slot />
</button>
</template>

<script lang="ts">
import {
    computed
} from "vue";
export default {
    props: {
        theme: {
            type: String,
            default: "button",
        },
        size: {
            type: String,
            default: "normal",
        },
        level: {
            type: String,
            default: "normal",
        },
        shape: {
            type: String,
            default: "plain",
        },
        loading: {
            type: Boolean,
            default: false,
        },
    },
    setup(props) {
        const {
            theme,
            size,
            level,
            shape
        } = props;
        const classes = computed(() => {
            return {
                [`world-theme-${theme}`]: theme,
                [`world-size-${size}`]: size,
                [`world-level-${level}`]: level,
                [`world-shape-${shape}`]: shape,
            };
        });
        return {
            classes,
        };
    },
};
</script>

<style lang="scss">
$h: 32px;
$border-color: #d9d9d9;
$color: #333;
$blue: #40a9ff;
$radius: 4px;
$red: #f56c6c;
$green: #67c23a;
$grey: #909399;
$orange: #e6a23c;
$disblue: #a0cfff;
$disgreen: #b3e19d;
$disorange: #f3d19e;
$disred: #fab6b6;

.world-button {
    box-sizing: border-box;
    height: $h;
    padding: 0 12px;
    cursor: pointer;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    white-space: nowrap;
    background: white;
    color: $color;
    border: 1px solid $border-color;
    border-radius: $radius;
    box-shadow: 0 1px 0 fade-out(black, 0.95);
    transition: background 250ms;

    &+& {
        margin-left: 8px;
    }

    &:hover,
    &:focus {
        color: $blue;
        border-color: $blue;
    }

    &:focus {
        outline: none;
    }

    &::-moz-focus-inner {
        border: 0;
    }

    &.world-theme-link {
        border-color: transparent;
        box-shadow: none;
        color: $blue;

        &:hover,
        &:focus {
            color: lighten($blue, 10%);
        }
    }

    &.world-theme-text {
        border-color: transparent;
        box-shadow: none;
        color: inherit;

        &:hover,
        &:focus {
            background: darken(white, 5%);
        }
    }

    &.world-shape-round {
        border-radius: 20px;
    }

    &.world-size-big {
        font-size: 24px;
        height: 48px;
        padding: 0 16px;
    }

    &.world-size-small {
        font-size: 12px;
        height: 20px;
        padding: 0 4px;
    }

    &.world-theme-button {
        &.world-level-main {
            background: $blue;
            color: white;
            border-color: $blue;

            &:hover,
            &:focus {
                background: lighten($blue, 10%);
                border-color: lighten($blue, 10%);
            }

            &[disabled] {
                border-color: $disblue;
                background: $disblue;
                color: white;

                &:hover,
                &:focus {
                    background: $disblue;
                    border-color: $disblue;
                }
            }
        }

        &.world-level-danger {
            background: $red;
            border-color: $red;
            color: white;

            &:hover,
            &:focus {
                background: lighten($red, 10%);
                border-color: lighten($red, 10%);
            }

            &[disabled] {
                border-color: $disred;
                background: $disred;
                color: white;

                &:hover,
                &:focus {
                    background: $disred;
                    border-color: $disred;
                }
            }
        }

        &.world-level-success {
            background: $green;
            border-color: $green;
            color: white;

            &[disabled] {
                border-color: $disgreen;
                background: $disgreen;
                color: white;

                &:hover,
                &:focus {
                    background: $disgreen;
                    border-color: $disgreen;
                }
            }

            &:hover,
            &:focus {
                background: lighten($green, 10%);
                border-color: lighten($green, 10%);
            }
        }

        &.world-level-warning {
            background: $orange;
            border-color: $orange;
            color: white;

            &[disabled] {
                border-color: $disorange;
                background: $disorange;
                color: white;

                &:hover,
                &:focus {
                    background: $disorange;
                    border-color: $disorange;
                }
            }

            &:hover,
            &:focus {
                background: lighten($orange, 10%);
                border-color: lighten($orange, 10%);
            }
        }
    }

    &.world-theme-link {
        &.world-level-danger {
            color: $red;

            &:hover,
            &:focus {
                color: darken($red, 10%);
            }
        }
    }

    &.world-theme-text {
        &.world-level-main {
            color: $blue;

            &:hover,
            &:focus {
                color: darken($blue, 10%);
            }
        }

        &.world-level-danger {
            color: $red;

            &:hover,
            &:focus {
                color: darken($red, 10%);
            }
        }
    }

    &.world-theme-button {
        &[disabled] {
            cursor: not-allowed;
            color: $grey;

            &:hover {
                border-color: $grey;
            }
        }

        &[circle] {
            border-radius: 50%;
        }
    }

    &.world-theme-link,
    &.world-theme-text {
        &[disabled] {
            cursor: not-allowed;
            color: $grey;
        }
    }

    >.world-loadingIndicator {
        width: 14px;
        height: 14px;
        display: inline-block;
        margin-right: 4px;
        border-radius: 8px;
        border-color: $blue $blue $blue transparent;
        border-style: solid;
        border-width: 2px;
        animation: world-spin 1s infinite linear;
        cursor: default;
    }

    @keyframes world-spin {
        0% {
            transform: rotate(0deg);
        }

        100% {
            transform: rotate(360deg);
        }
    }
}
</style>
