<template>
<div class="top-nav">
    <div class="logo">LOGO</div>
    <div class="menu">
        <li>菜单1</li>
        <li>菜单2</li>
    </div>
</div>
</template>

<script lang="ts">
export default {};
</script>

<style lang="scss" scoped>
.top-nav {
    background: pink;
    display: flex;
    padding: 16px;

    >.logo {
        max-width: 6em;
        margin-right: auto;
    }

    >.menu {
        display: flex;
        white-space: nowrap;
        flex-wrap: nowrap;

        >li {
            margin: 0 1em;
            list-style: none;
        }
    }
}
</style>
