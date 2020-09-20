<template>
<div class="home">
    <router-view />
</div>
</template>

<script lang="ts">
import {
    provide,
    ref
} from "vue";
import {
    router
} from "./router";
export default {
    name: "App",
    setup() {
        const width = document.documentElement.clientWidth;
        const asideVisible = ref(width <= 500 ? false : true);
        provide("asideVisible", asideVisible);
        router.afterEach(() => {
            if (width <= 500) {
                asideVisible.value = false;
            }
        });
    },
};
</script>

<style lang="scss" scoped>
// .home {
//     min-width: 860px;
//     overflow: hidden;
// }
</style>>
