<template>
<h1>Button 按钮</h1>
<h4>常用的操作按钮。</h4>
<Demo :component="Button1Demo" />
<Demo :component="Button4Demo" />
<Demo :component="Button2Demo" />
<Demo :component="Button3Demo" />
<Demo :component="Button5Demo" />
</template>

<script lang="ts">
import Demo from "./Demo.vue";
import Button1Demo from "./Button1.demo.vue";
import Button2Demo from "./Button2.demo.vue";
import Button3Demo from "./Button3.demo.vue";
import Button4Demo from "./Button4.demo.vue";
import Button5Demo from "./Button5.demo.vue";
export default {
    components: {
        Demo,
    },
    setup() {
        return {
            Button1Demo,
            Button2Demo,
            Button3Demo,
            Button4Demo,
            Button5Demo,
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
