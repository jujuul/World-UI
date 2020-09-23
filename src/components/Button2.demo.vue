<demo>
不同尺寸
</demo>
<template>
<div>
    <div>
        <Button size="big">大按钮</Button>
        <Button>普通按钮</Button>
        <Button size="small">小按钮</Button>
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
