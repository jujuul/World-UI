<template>
<h1>Button 按钮</h1>
<br />
<p>常用的操作按钮</p>
<br />
<h1>代码示例</h1>
<br />
<h2>不同种类</h2>
<div class="card">
    <div class="top">
        <Button>Default</Button>
        <Button theme="link">link</Button>
        <Button theme="text">text</Button>
    </div>
    <div class="hr">
        <div class="hr-text">按钮类型</div>
    </div>
    <div class="bottom">按钮有三种类型：默认按钮、链接、文本按钮。</div>
</div>
<h2>不同尺寸</h2>
<div class="card">
    <div class="top">
        <Button size="big">大按钮</Button>
        <Button>中等按钮</Button>
        <Button size="small">小按钮</Button>
    </div>
    <div class="hr">
        <div class="hr-text">按钮尺寸</div>
    </div>
    <div class="bottom">按钮有三种尺寸：大按钮、中等按钮、小按钮。</div>
</div>
<h2>不同状态</h2>
<div class="card">
    <div class="top">
        <Button level="main">主要按钮</Button>
        <Button>普通按钮</Button>
        <Button level="danger">危险按钮</Button>
        <Button level="success">成功按钮</Button>
        <Button level="info">警告按钮</Button>
    </div>
    <div class="hr">
        <div class="hr-text">按钮尺寸</div>
    </div>
    <div class="bottom">按钮有五种状态：主要按钮、普通按钮、危险按钮、成功按钮、警告按钮。</div>
</div>
<h2>禁用状态</h2>
<br>
<p>按钮处于禁用状态</p>
<div class="card">
    <div class="top">
        <Button disabled>禁用按钮</Button>
        <Button theme="link" disabled>禁用链接按钮</Button>
        <Button theme="text" disabled>禁用按钮</Button>
    </div>
</div>
<h2>加载中</h2>
<br>
<p>点击按钮后进行数据加载操作，在按钮上显示加载状态。</p>
<div class="card">
    <div class="top">
        <Button loading>加载中</Button>
    </div>
</div>
</template>

<script lang="ts">
import Button from "../lib/Button.vue";
export default {
    components: {
        Button,
    },
    setup() {
        const onClick = () => {
            console.log("hi");
        };
        return {
            onClick,
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
