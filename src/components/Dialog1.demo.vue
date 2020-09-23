<demo>
基本用法
</demo>
<template>
<div class="show-list">
    <Button @click="toggle">点击打开Dialog</Button>
    <Dialog v-model:visible="x" :closeOnClickOverlay="false" :ok="f1" :cancel="f2">
        <template v-slot:content>
            <div>这是一段信息</div>
        </template>
        <template v-slot:title>
            <Strong>提示</Strong>
        </template>
    </Dialog>
</div>
</template>

<script lang="ts">
import Dialog from "../lib/Dialog.vue";
import Button from "../lib/Button.vue";
import {
    ref
} from "vue";
import {
    openDialog
} from "../lib/openDialog";

export default {
    components: {
        Dialog,
        Button,
    },
    setup() {
        const x = ref(false);
        const toggle = () => {
            x.value = !x.value;
        };
        const f1 = () => {
            // return false;
        };
        const f2 = () => {};
        const showDialog = () => {
            openDialog({
                title: "提示",
                content: "这是一段信息",
                ok() {
                    console.log("ok");
                },
                cancel() {
                    console.log("cancel");
                },
            });
        };
        return {
            x,
            toggle,
            f1,
            f2,
            showDialog,
        };
    },
};
</script>

<style lang="scss">
.show-list {
    margin-top: 10px;
}
</style>
