<template>
<button class="world-switch" @click="toggle" :class="classes" :disabled="disabled">
    <span></span>
</button>
</template>

<script lang="ts">
import {
    computed,
    ref
} from "vue";
export default {
    props: {
        value: Boolean,
        size: {
            type: String,
            default: "normal",
        },
    },
    setup(props, context) {
        const {
            size
        } = props;
        const toggle = () => {
            context.emit("update:value", !props.value);
        };
        const classes = computed(() => {
            return {
                [`world-checked`]: props.value,
                [`world-size-${size}`]: size,
            };
        });
        return {
            toggle,
            classes,
        };
    },
};
</script>

<style lang="scss">
$h: 24px;
$h2: $h - 4px;
$h3: $h - 8px;

.world-switch {
    height: $h;
    width: $h * 2;
    border: none;
    background: #cccccc;
    border-radius: $h/2;
    position: relative;
    cursor: pointer;

    &.world-size-small {
        height: 20px;

        >span {
            position: absolute;
            top: 2px;
            left: calc(0% + 2px);
            height: $h3;
            height: $h3;
            background: white;
            border-radius: $h3/2;
            transition: left 0.25s;
        }
    }

    >span {
        position: absolute;
        top: 2px;
        left: calc(0% + 2px);
        height: $h2;
        width: $h2;
        background: white;
        border-radius: $h2/2;
        transition: left 0.25s;
    }

    &[disabled] {
        cursor: not-allowed;
    }

    &.world-checked {
        background: #2d8cf0;

        >span {
            left: calc(100% - #{$h2} - 2px);
        }
    }

    &:focus {
        outline: none;
    }

    &:active {
        >span {
            width: $h2 + 4px;
        }
    }

    &.world-checked:active {
        >span {
            width: $h2 + 4px;
            margin-left: -4px;
        }
    }
}
</style>
