<template>
<div class="world-tabs">
    <div class="world-tabs-nav" ref="container">
        <div class="world-tabs-nav-item" :ref="
          (el) => {
            if (el) navItems[index] = el;
          }
        " @click="select(t)" v-for="(t, index) in titles" :key="index" :class="[
          classes,
          {
            selected: t === selected,
          },
        ]">
            {{ t }}
        </div>
        <div class="world-tabs-nav-indicator" ref="indicator"></div>
    </div>
    <div class="world-tabs-content">
        <component :is="current" :key="current.props.title" />
    </div>
</div>
</template>

<script lang="ts">
import {
    computed,
    onMounted,
    ref,
    onUpdated
} from "vue";
import Tab from "./Tab.vue";
export default {
    props: {
        selected: {
            type: String,
        },
        shape: Boolean
    },
    setup(props, context) {
        const {
            selected
        } = props;
        const classes = computed(() => {
            return {
                [`world-type-card`]: props.shape,
            };
        });
        console.log(props)
        const navItems = ref < HTMLDivElement[] > ([]);
        const indicator = ref < HTMLDivElement > (null);
        const container = ref < HTMLDivElement > (null);
        const x = () => {
            const divs = navItems.value;
            const result = divs.filter((div) =>
                div.classList.contains("selected")
            )[0];
            const {
                width
            } = result.getBoundingClientRect();
            indicator.value.style.width = width + "px";
            const {
                left: left1
            } = container.value.getBoundingClientRect();
            const {
                left: left2
            } = result.getBoundingClientRect();
            const left = left2 - left1;
            indicator.value.style.left = left + "px";
        };
        onMounted(x);
        onUpdated(x);
        const defaults = context.slots.default();
        const select = (title: string) => {
            context.emit("update:selected", title);
        };
        const current = computed(() => {
            return defaults.find((tag) => tag.props.title === props.selected);
        });
        const titles = defaults.map((tag) => {
            return tag.props.title;
        });
        return {
            defaults,
            titles,
            current,
            select,
            navItems,
            indicator,
            container,
            classes,
        };
    },
};
</script>

<style lang="scss">
$blue: #40a9ff;
$color: #333;
$border: #f0f0f0;
$border-color: #f0f0f0;

.world-tabs {
    &-nav {
        &[disabled] {
            cursor: not-allowed;
        }

        display: flex;
        color: $color;
        border-bottom: 1px solid $border-color;
        position: relative;

        &-item {
            padding: 8px 0;
            margin: 0 16px;
            cursor: pointer;

            &.world-type-card {
                padding: 8px 14px;
                margin: 0 1px;
                border-top: 1px solid $border;
                border-left: 1px solid $border;
                border-right: 1px solid $border;
            }

            &:first-child {
                margin-left: 0;
            }

            &.selected {
                color: $blue;
            }
        }

        &-indicator {
            position: absolute;
            height: 2px;
            background: $blue;
            left: 0;
            bottom: -1px;
            width: 100px;
            transition: all 0.25s;
        }
    }

    &-content {
        padding: 8px 0;
    }
}
</style>
