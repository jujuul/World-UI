<template>
<h1>Dialog 对话框</h1>
<h4>在保留当前页面状态的情况下，告知用户并承载相关操作。</h4>
<Demo :component="Dialog1Demo" />
</template>

<script lang="ts">
import Demo from "./Demo.vue";
import Dialog1Demo from "./Dialog1.demo.vue";
export default {
    components: {
        Demo,
        Dialog1Demo,
    },
    setup() {
        return {
            Dialog1Demo,
        };
    },
};
</script>
