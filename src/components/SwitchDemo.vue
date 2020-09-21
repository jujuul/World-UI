<template>
<Demo :component="Switch1Demo" />
<Demo :component="Switch2Demo" />
</template>

<script lang="ts">
import Switch1Demo from './Switch1.demo.vue'
import Switch2Demo from './Switch2.demo.vue'
// import Demo from './Demo.vue'
import {
    ref
} from "vue";
export default {
    components: {
        // Demo,
    },
    setup() {
        const bool = ref(false);
        return {
            bool,
        };
    },
};
</script>

<style lang="scss" scoped>
.card {
    display: block;
    border-radius: 4px;
    border: 1px solid #d9d9d9;
    max-width: 1000px;
    margin: 40px 0;

    @media (max-width: 500px) {
        min-width: 464px;
    }

    >.top {
        padding: 20px 40px;
    }

    >.hr {
        margin-top: 10px;
        border-top: 1px solid #d9d9d9;

        >.hr-text {
            position: relative;
            left: 40px;
            top: -12px;
            width: 80px;
            height: 24px;
            text-align: center;
            background-color: white;
        }
    }

    >.bottom {
        padding: 0 40px 20px;
    }
}
</style>
