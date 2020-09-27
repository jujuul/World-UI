<template>
  <div class="demo">
    <h2>{{ component.__sourceCodeTitle }}</h2>
    <div class="demo-component">
      <component :is="component" />
    </div>
    <div class="demo-actions">
      <div class="wrap" v-if="!codeVisible" @click="showCode">
        <div class="angle"></div>
        <div class="code">查看代码</div>
      </div>
      <div class="wrap" v-else @click="hideCode">
        <div class="angle"></div>
        <div class="code">隐藏代码</div>
      </div>
    </div>

    <div class="demo-code" v-if="codeVisible">
      <pre class="language-html" v-html="prismjs" />
    </div>
  </div>
</template>

<script lang="ts">
import Button from "../lib/Button.vue";
import "prismjs";
import "prismjs/themes/prism-solarizedlight.css";
import { computed, ref } from "vue";
const Prism = (window as any).Prism;
export default {
  components: {
    Button,
  },
  props: {
    component: Object,
  },
  setup(props) {
    const prismjs = computed(() => {
      return Prism.highlight(
        props.component.__sourceCode,
        Prism.languages.html,
        "html"
      );
    });
    const codeVisible = ref(false);
    const showCode = () => {
      codeVisible.value = true;
    };
    const hideCode = () => {
      codeVisible.value = false;
    };
    return {
      Prism,
      prismjs,
      codeVisible,
      showCode,
      hideCode,
    };
  },
};
</script>

<style lang="scss" scoped>
$border-color: #d9d9d9;

.demo {
  border: 1px solid $border-color;
  margin: 16px 0 32px;
  border-radius: 4px;

  &:hover {
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
  }

  > h2 {
    font-size: 20px;
    padding: 8px 16px;
    border-bottom: 1px solid $border-color;
  }

  &-component {
    padding: 16px;
  }

  &-actions {
    padding: 8px 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-top: 1px solid $border-color;
    min-height: 49px;
    background: white;
    cursor: pointer;

    &:hover {
      background: #f9fafc;

      .code {
        opacity: 1;
        transition: opacity 0.25s;
        transition: left 0.25s;
        left: -6px;
      }

      .angle {
        left: -8px;
        border-color: #73c0ff transparent transparent transparent;
        transition: border-color 0.25s;
        transition: left 0.25s;
      }
    }

    .code {
      opacity: 0;
      color: #8dd6fc;
      position: relative;
      left: 0;
    }

    .angle {
      position: relative;
      left: -8px;
      top: 10px;
      width: 0;
      height: 0;
      border-width: 6px;
      border-style: solid;
      border-color: #d3dce6 transparent transparent transparent;
    }
    .wrap {
      display: flex;
      position: relative;
    }
  }

  &-code {
    padding: 8px 16px;
    border-top: 1px solid $border-color;

    > pre {
      line-height: 1.1;
      font-family: Consolas, "Courier New", Courier, monospace;
      margin: 0;
    }
  }
}
</style>
