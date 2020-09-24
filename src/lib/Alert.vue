<template>
<div class="world-alert" :class="classes" :center="center">
    <slot />
</div>
</template>

<script lang="ts">
import {
    computed
} from "vue";
export default {
    props: {
        type: {
            type: String,
            default: "info",
        },
    },
    setup(props) {
        const {
            type
        } = props;
        const classes = computed(() => {
            return {
                [`world-alert-${type}`]: type,
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
$radius: 4px;
$grey: #909399;
$red: #f56c6c;
$green: #67c23a;
$orange: #e6a23c;

.world-alert {
    box-sizing: border-box;
    height: $h;
    padding: 0 12px;
    display: flex;
    align-items: center;
    white-space: nowrap;
    background: $grey;
    color: $color;
    border-radius: $radius;
    box-shadow: 0 1px 0 fade-out(black, 0.95);
    transition: background 250ms;
    margin: 12px 0;

    &[center] {
        display: flex;
        justify-content: center;
    }
}

.world-alert-error {
    box-sizing: border-box;
    height: $h;
    padding: 0 12px;
    // display: inline-flex;
    display: flex;
    align-items: center;
    white-space: nowrap;
    color: $color;
    border-radius: $radius;
    box-shadow: 0 1px 0 fade-out(black, 0.95);
    transition: background 250ms;
    background: $red;
}

.world-alert-warning {
    box-sizing: border-box;
    height: $h;
    padding: 0 12px;
    // display: inline-flex;
    display: flex;
    align-items: center;
    white-space: nowrap;
    color: $color;
    border-radius: $radius;
    box-shadow: 0 1px 0 fade-out(black, 0.95);
    transition: background 250ms;
    background: $orange;
}

.world-alert-success {
    box-sizing: border-box;
    height: $h;
    padding: 0 12px;
    // display: inline-flex;
    display: flex;
    align-items: center;
    white-space: nowrap;
    color: $color;
    border-radius: $radius;
    box-shadow: 0 1px 0 fade-out(black, 0.95);
    transition: background 250ms;
    background: $green;
}
</style>
