<demo>
基本用法
</demo>
<template>
<div class="show-list">
    <Alert>消息提示的文案</Alert>
    <Alert type="success">成功提示的文案</Alert>
    <Alert type="warning">警告提示的文案</Alert>
    <Alert type="error">错误提示的文案</Alert>
</div>
</template>

<script lang="ts">
import Alert from "../lib/Alert.vue";
import Button from "../lib/Button.vue";
import {
    ref
} from "vue";

export default {
    components: {
        Alert,
        Button,
    },
    setup() {

    },
};
</script>

<style lang="scss">
.show-list {
    margin-top: 10px;
}
</style>
