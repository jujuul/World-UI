<template>
<button class="world-button" :class="classes">
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
    },
    setup(props) {
        const {
            theme,
            size
        } = props;
        const classes = computed(() => {
            return {
                [`world-theme-${theme}`]: theme,
                [`world-size-${size}`]: size,
            };
        });
        return {
            classes,
        };
    },
};
</script>

<style lang="scss">
$h: 30px;
$border-color: #d9d9d9;
$color: #333;
$blue: #2d8cf0;
$radius: 4px;

.world-button {
    box-sizing: border-box;
    height: $h;
    padding: 0 12px;
    cursor: pointer;
    display: inline-block;
    justify-content: center;
    align-items: center;
    white-space: nowrap;
    color: white;
    background: $blue;
    // border: 1px solid $blue;
    border: none;
    border-radius: $radius;
    box-shadow: 0 1px 0 fade-out(black, 0.95);

    &+& {
        margin-left: 8px;
    }

    &:hover,
    &:focus {
        // border-color: $blue;
        background: #40a9ff;
        transition: background 0.25s;
    }

    &:focus {
        outline: none;
    }

    &::-moz-full-inner {
        border: 0;
    }

    &.world-theme-button {
        box-sizing: border-box;
        height: $h;
        padding: 0 12px;
        cursor: pointer;
        display: inline-block;
        justify-content: center;
        align-items: center;
        white-space: nowrap;
        color: white;
        background: $blue;
        // border: 1px solid $blue;
        border: none;
        border-radius: $radius;
        box-shadow: 0 1px 0 fade-out(black, 0.95);

        &+& {
            margin-left: 8px;
        }

        &:hover,
        &:focus {
            // border-color: $blue;
            background: #40a9ff;
            transition: background 0.25s;
        }

        &:focus {
            outline: none;
        }

        &::-moz-full-inner {
            border: 0;
        }
    }

    &.world-theme-button {
        &.world-size-big {
            font-size: 24px;
            height: 42px;
            padding: 0 16px;
        }

        &.world-size-small {
            font-size: 12px;
            height: 24px;
            padding: 0 8px;
        }
    }
}

.world-theme-link {
    box-sizing: border-box;
    height: $h;
    padding: 0 12px;
    cursor: pointer;
    display: inline-block;
    justify-content: center;
    align-items: center;
    white-space: nowrap;
    background: none;
    border: none;
    color: $blue;
    box-shadow: none;

    &+& {
        margin-left: 8px;
    }

    &:hover,
    &:focus {
        // color: white;
        transition: color 0.25s;
    }

    &:focus {
        outline: none;
    }

    &::-moz-full-inner {
        border: 0;
    }
}

.world-theme-text {
    box-sizing: border-box;
    height: $h;
    padding: 0 12px;
    cursor: pointer;
    display: inline-block;
    justify-content: center;
    align-items: center;
    white-space: nowrap;
    background: none;
    border: none;
    color: $blue;
    border-radius: $radius;

    &+& {
        margin-left: 8px;
    }

    &:hover,
    &:focus {
        background: #fafafa;
        // transition: background 0.25s;
    }

    &:focus {
        outline: none;
    }

    &::-moz-full-inner {
        border: 0;
    }
}
</style>
