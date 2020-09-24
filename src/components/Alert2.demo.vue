<demo>
文字居中
</demo>
<template>
<div class="show-list">
    <Alert center>消息提示的文案</Alert>
    <Alert type="success" center>成功提示的文案</Alert>
    <Alert type="warning" center>警告提示的文案</Alert>
    <Alert type="error" center>错误提示的文案</Alert>
</div>
</template>

<script lang="ts">
import Alert from "../lib/Alert.vue";
import {
    ref
} from "vue";

export default {
    components: {
        Alert,
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
