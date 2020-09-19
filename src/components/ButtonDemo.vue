<template>
<div>Button的文档</div>
<h1>示例1</h1>
<div>
    <Button theme="button">你好</Button>
    <Button theme="link">你好</Button>
    <Button theme="text">你好</Button>
</div>
<h1>示例2</h1>
<div>
    <Button>你好</Button>
    <Button size="big">你好</Button>
    <Button size="small">你好</Button>
</div>
</template>

<script lang="ts">
import Button from "../lib/Button.vue";
export default {
    setup() {
        const onClick = () => {
            console.log("hi");
        };
        return {
            onClick,
        };
    },
    components: {
        Button,
    },
};
</script>
