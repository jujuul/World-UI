<template>
<div class="top-nav">
    <router-link to="/" class="logo">
        <svg class="icon">
            <use xlink:href="#icon-world" />
        </svg>
    </router-link>
    <ul class="menu">
        <li>
            <router-link to="/doc">文档</router-link>
        </li>
    </ul>
    <svg class="toggleAside" v-if="toggleAsideButtonVisible" @click="toggleAside">
        <use xlink:href="#icon-menu" />
    </svg>
</div>
</template>

<script lang="ts">
import {
    inject,
    Ref
} from "vue";
export default {
    props: {
        toggleAsideButtonVisible: {
            type: Boolean,
            default: false,
        },
    },
    setup() {
        const asideVisible = inject < Ref < boolean >> ("asideVisible");
        const toggleAside = () => {
            asideVisible.value = !asideVisible.value;
            console.log("点击了toggle");
        };

        return {
            toggleAside,
        };
    },
};
</script>

<style lang="scss" scoped>
.top-nav {
    display: flex;
    padding: 11px 24px;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 10;
    justify-content: center;
    align-items: center;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.1);
    background: white;

    >.logo {
        margin-right: auto;
        display: flex;
        align-items: center;

        >svg {
            width: 32px;
            height: 32px;
            position: relative;
            left: 32px;
        }
    }

    >.menu {
        display: flex;
        white-space: nowrap;
        flex-wrap: nowrap;

        >li {
            margin: 0 1em;
        }
    }

    >.toggleAside {
        display: inline-block;
        width: 24px;
        height: 24px;
        position: absolute;
        left: 16px;
        top: 50%;
        transform: translateY(-50%);
        display: none;
    }

    @media (max-width: 500px) {
        >.meanu {
            display: none;
        }

        >.logo {
            margin: 0 auto;
        }

        >.toggleAside {
            display: inline-block;
        }
    }
}
</style>
