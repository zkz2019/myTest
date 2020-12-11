
<template>
  <div>
    <div class="isDiv" @click="onclick">aaa</div>
    <div class="isDiv1">bbb</div>
    <divs ref="divs"></divs>
    <div class="isDiv3">ddd</div>
    <canvas id="myCanvas" :width="maxW" :height="maxH" class="canvas"> </canvas>
    <nuxt-child></nuxt-child>
  </div>
</template>

<script>
import divs from "./dat/divs";
export default {
  components: {
    divs,
  },
  data() {
    return {
      maxH: 0,
      minH: 0,
      maxW: 0,
      minW: 0,
      boxLeft: 0,
      boxTop: 0,
      canvas: null,
    };
  },
  created() {
    // this.maxH = window.innerHeight;
    // this.maxW = window.innerWidth;
  },
  async mounted() {},
  methods: {
    init() {
      this.maxH = window.innerHeight;
      this.maxW = window.innerWidth;
      this.minH = this.$refs.divs.$el.offsetHeight;
      this.minW = this.$refs.divs.$el.offsetWidth;
      this.boxLeft = this.$refs.divs.$el.offsetLeft;
      this.boxTop = this.$refs.divs.$el.offsetTop;
    },
    clearCanvasBox() {
      this.canvas.clearRect(0, 0, this.maxW, this.maxH);
    },
    setCanvas() {
      this.clearCanvasBox();
      this.canvas.fillStyle = "rgba(0,0,0,0.5)";
      this.canvas.fillRect(0, 0, this.maxW, this.maxH); // 绘制矩形，填充的默认颜色为黑色
      this.canvas.clearRect(this.boxLeft, this.boxTop, this.minW, this.minH);
    },
    onclick() {
      this.initCanvas();
    },
    async initCanvas() {
      await this.init();
      var canvas = document.getElementById("myCanvas");
      if (!canvas.getContext) return;
      this.canvas = canvas.getContext("2d");
      await this.setCanvas();
      window.onresize = async () => {
        await this.init();
        await this.setCanvas();
      };
    },
  },
};
</script>

<style>
html,
body {
  width: 100%;
  height: 100%;
}
.isDiv {
  z-index: 1;
  position: absolute;
  cursor: pointer;
}
.isDiv1 {
  height: 20vh;
  width: 20vw;
  background: bisque;
}
.isDiv2 {
  height: 20vh;
  background: burlywood;
  margin-left: 300px;
  width: 20vw;
}
.isDiv3 {
  height: 20vh;
  background: beige;
  width: 20vw;
}
.canvas {
  z-index: 9995;
  /* width: 100vw;
  height: 100vh; */
  position: fixed;
  top: 0;
  left: 0;
}
</style>