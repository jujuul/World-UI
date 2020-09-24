<template>
<h1>Button 按钮</h1>
<h4>常用的操作按钮。</h4>
<Demo :component="Button1Demo" />
<Demo :component="Button4Demo" />
</template>

<script lang="ts">
import Tabs from "../lib/Tabs.vue";
import Tab from "../lib/Tab.vue";
import {
    ref
} from "vue";
export default {
    setup() {
        const x = ref("Tab1");
        return {
            x
        };
    },
    components: {
        Tabs,
        Tab,
    },
};
</script>
