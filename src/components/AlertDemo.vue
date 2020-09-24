<template>
<div>
    <h1>Alert 警告</h1>
    <Demo :component="Alert1Demo" />
    <Demo :component="Alert2Demo" />
</div>
</template>

<script lang="ts">
import Demo from "./Demo.vue";
import Alert1Demo from "./Alert1.demo.vue";
import Alert2Demo from "./Alert2.demo.vue";
import {
    ref
} from "vue";
export default {
    components: {
        Demo,
    },
    setup() {
        return {
            Alert1Demo,
            Alert2Demo,
        };
    },
};
</script>
