import { inject } from 'vue';
<template>
<div>
    <Topnav />
    <div class="container">
        <aside v-if="asideVisible">
            <h2>组件列表</h2>
            <ol>
                <li>
                    <router-link to="/doc/switch">Switch 组件</router-link>
                </li>
                <li>
                    <router-link to="/doc/switch">Button 组件</router-link>
                </li>
                <li>
                    <router-link to="/doc/switch">Dialog 组件</router-link>
                </li>
                <li>
                    <router-link to="/doc/switch">Tabs 组件</router-link>
                </li>
            </ol>
        </aside>
        <main>主内容</main>
    </div>
</div>
</template>

<script lang="ts">
import {
    inject,
    Ref
} from "vue";
import Topnav from "../components/Topnav.vue";
export default {
    components: {
        Topnav,
    },
    setup() {
        const asideVisible = inject < Ref < boolean >> ("xxx");
        console.log("topnav获取的aside为：" + asideVisible.value);
        return {
            asideVisible
        };
    },
};
</script>

<style lang="scss" scoped>
aside {
    background: lightblue;
    width: 150px;
    padding: 16px;
    position: fixed;
    top: 0;
    left: 0;
    padding-top: 70px;

    >h2 {
        margin-bottom: 4px;
    }

    >ol {
        >li {
            padding: 4px 0;
        }
    }
}
</style>
