<template>
  <div @click="onClick">hahaha</div>
</template>

<script>
export default {
  mounted() {},
  methods: {
    onClick() {
      const eleLink = document.createElement("a");
      const href = `http://www.baidu.com`;
      eleLink.style.display = "none";
      eleLink.href = href;
      // 触发点击
      document.body.appendChild(eleLink);
      eleLink.click();
      // 然后移除
      document.body.removeChild(eleLink);
    }
  }
};
</script>

<style></style>
