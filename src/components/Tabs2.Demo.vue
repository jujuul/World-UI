<demo>禁止选择(未完成)
</demo>
<template>
<Tabs v-model:selected="x">
    <Tab title="Tab1">标签1</Tab>
    <Tab title="Tab2" disabled>标签2</Tab>
    <Tab title="Tab3">标签3</Tab>
</Tabs>
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
            x,
        };
    },
    components: {
        Tabs,
        Tab,
    },
};
</script>
