<template>
<div class="layout">
    <Topnav toggleAsideButtonVisible class="nav" />
    <div class="content">
        <aside v-if="asideVisible">
            <h2>关于</h2>
            <ol>
                <li>
                    <router-link to="/doc/introduction">介绍</router-link>
                </li>
                <li>
                    <router-link to="/doc/install">安装</router-link>
                </li>
                <li>
                    <router-link to="/doc/start">开始</router-link>
                </li>
            </ol>
            <h2>组件</h2>
            <ol>
                <li>
                    <router-link to="/doc/switch">Switch 开关</router-link>
                </li>
                <li>
                    <router-link to="/doc/button">Button 按钮</router-link>
                </li>
                <li>
                    <router-link to="/doc/dialog">Dialog 对话框</router-link>
                </li>
                <li>
                    <router-link to="/doc/tabs">Tabs 标签页</router-link>
                </li>
                <li>
                    <router-link to="/doc/alert">Alert 警告</router-link>
                </li>
            </ol>
        </aside>
        <main>
            <router-view />
        </main>
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
        const asideVisible = inject < Ref < boolean >> ("asideVisible");
        return {
            asideVisible,
        };
    },
};
</script>

<style lang="scss" scoped>
.layout {
    display: flex;
    flex-direction: column;
    height: 100vh;

    >.nav {
        flex-shrink: 0;
    }

    >.content {
        flex-grow: 1;
        padding-top: 100px;
        padding-left: 156px;

        @media (max-width: 500px) {
            padding-left: 0;
        }
    }
}

.content {
    display: flex;

    >aside {
        flex-shrink: 0;
    }

    >main {
        flex-grow: 1;
        padding: 16px;
        background: white;
        margin: 0 60px;
    }
}

aside {
    background: white;
    width: 156px;
    padding: 16px 0;
    position: fixed;
    top: 0;
    left: 0;
    margin-top: 100px;
    z-index: 10;
    height: 100%;
    border-right: 1px solid #d9d9d9;

    >h2 {
        margin-bottom: 4px;
        padding: 0 24px;
    }

    >ol {
        >li {
            >a {
                display: block;
                padding: 12px 24px;
                text-decoration: none;
            }

            .router-link-active {
                background: #e6f7ff;
                border-right: 3px solid #1890ff;
                color: #80c4ff;
            }
        }
    }

    @media (max-width: 500px) {
        position: fixed;
        top: 0;
        left: 0;
        padding-top: 70px;
    }
}

main {
    overflow: auto;
}
</style>
