<template>
<div>
    <div class="topnavAndBanner">
        <Topnav />
        <div class="banner">
            <svg class="icon">
                <use xlink:href="#icon-world" />
            </svg>
            <h1>World UI</h1>
            <h2>WorldUI,我的UI</h2>
            <div class="circle"></div>
            <p class="actions">
                <a href="https://github.com/jujuul/World-UI">Github</a>
                <router-link to="/doc" class="begin">开始</router-link>
            </p>
        </div>
    </div>
    <div class="features">
        <ul>
            <li>
                <svg class="icon">
                    <use xlink:href="#icon-Vue" />
                </svg>
                <h3>基于 Vue 3</h3>
                <p>使用了 Vue 3 Composition API</p>
            </li>
            <li>
                <svg class="icon">
                    <use xlink:href="#icon-Typescript" />
                </svg>
                <h3>基于 TypeScript</h3>
                <p>源代码采用 TypeScript 书写（非严格检查）</p>
            </li>
            <li>
                <svg class="icon">
                    <use xlink:href="#icon-shu_1" />
                </svg>
                <h3>代码易读</h3>
                <p>每个组件的源代码都极其简洁</p>
            </li>
        </ul>
    </div>
</div>
</template>

<script lang="ts">
import Topnav from "../components/Topnav.vue";
export default {
    components: {
        Topnav,
    },
};
</script>

<style lang="scss" scoped>
$red: #e64a58;
$border-radius: 20px;

.topnavAndBanner {
    background: linear-gradient(135deg,
            rgba(241, 245, 251, 1) 0%,
            rgba(229, 243, 254, 1) 100%);
    clip-path: ellipse(80% 60% at 50% 40%);
}

.features {
    margin: 64px auto;
    width: 400px;

    @media (min-width: 800px) {
        width: 800px;
    }

    @media (min-width: 1200px) {
        width: 1200px;
    }

    >ul {
        display: flex;
        flex-wrap: wrap;

        >li {
            width: 400px;
            margin: 16px 0;
            display: grid;
            justify-content: start;
            align-content: space-between;
            grid-template-areas:
                "icon title"
                "icon text";
            grid-template-columns: 80px auto;
            grid-template-rows: 1fr auto;

            &:hover {
                box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
            }

            >svg {
                grid-area: icon;
                width: 64px;
                height: 64px;
            }

            >h3 {
                grid-area: title;
                font-size: 28px;
            }

            >p {
                grid-area: text;
            }
        }
    }
}

.banner {
    color: $red;
    padding: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    h1 {
        font-weight: 400;
        font-size: 62px;
    }

    .icon {
        width: 218px;
        height: 218px;
    }

    >.actions {
        padding: 8px 0;

        a {
            margin: 0 8px;
            background: $red;
            color: white;
            display: inline-block;
            padding: 8px 24px;
            box-shadow: none;
            transition: box-shadow 0.25s;
            border-radius: $border-radius;

            &:hover {
                text-decoration: none;
                box-shadow: 0 3px 6px $red;
            }
        }
    }
}
</style>
