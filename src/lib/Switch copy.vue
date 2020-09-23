<template>
<button class="world-switch" @click="toggle" :class="{'world-checked':value}" :disabled="disabled">
    <span></span>
</button>
</template>

<script lang="ts">
import {
    ref
} from "vue";
export default {
    props: {
        value: Boolean,
    },
    setup(props, context) {
        const toggle = () => {
            context.emit("update:value", !props.value);
        };
        return {
            toggle,
        };
    },
};
</script>

<style lang="scss">
$h: 24px;
$h2: $h - 4px;

.world-switch {
    height: $h;
    width: $h * 2;
    border: none;
    background: #cccccc;
    border-radius: $h/2;
    position: relative;
    cursor: pointer;

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
