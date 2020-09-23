<demo>
基础用法
</demo>
<template>
<div class="show-list">
    <Button level="main">主要按钮</Button>
    <Button shape="round">默认按钮</Button>
    <Button level="danger">危险按钮</Button>
    <Button level="success">成功按钮</Button>
    <Button level="warning">警告按钮</Button>
</div>
<div class="show-list">
    <Button level="main" shape="round">主要按钮</Button>
    <Button shape="round">默认按钮</Button>
    <Button level="danger" shape="round">危险按钮</Button>
    <Button level="success" shape="round">成功按钮</Button>
    <Button level="warning" shape="round">警告按钮</Button>
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

<style lang="scss">
.show-list {
    margin-top: 10px;
}
</style>
