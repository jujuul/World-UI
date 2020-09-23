<demo>
禁用状态
</demo>
<template>
<div class="show-list">
    <Button level="main" disabled>主要按钮</Button>
    <Button shape="round" disabled>默认按钮</Button>
    <Button level="danger" disabled>危险按钮</Button>
    <Button level="success" disabled>成功按钮</Button>
    <Button level="warning" disabled>警告按钮</Button>
</div>
<div class="show-list">
    <Button level="main" shape="round" disabled>主要按钮</Button>
    <Button shape="round" disabled>默认按钮</Button>
    <Button level="danger" shape="round" disabled>危险按钮</Button>
    <Button level="success" shape="round" disabled>成功按钮</Button>
    <Button level="warning" shape="round" disabled>警告按钮</Button>
</div>
</template>

<script lang="ts">
import Button from "../lib/Button.vue";
export default {
    components: {
        Button,
    },
};
</script>
