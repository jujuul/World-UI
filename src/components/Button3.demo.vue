<demo>
不同类型
</demo>
<template>
<div>
    <div>
        <Button>默认按钮</Button>
        <Button theme="link">链接按钮</Button>
        <Button theme="text">文字按钮</Button>
    </div>
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
