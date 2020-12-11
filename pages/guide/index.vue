
<template>
  <div id="startButton">
    <div @click="guide">aaaaaaaaaaa</div>
    <textarea id="textarea"></textarea>
    <video width="300" height="200" src="@/static/a.mp4"></video>
    <video id="video1" width="320" height="240" controls>
      <source src="@/static/a.mp4" type="video/mp4" />
      <!-- <source src="movie.ogg" type="video/ogg" /> -->
      您的浏览器不支持 HTML5 video 标签。
    </video>
  </div>
</template>

<script>
// import introJs from "intro.js";
export default {
  mounted() {
    let event = new Event("click");
    // const dom = document.getElementById("startButton");
    // setTimeout(() => {
    //   startButton.dispatchEvent(event);
    //   console.log("112233", 112233);
    // }, 3000);
    console.log("tinymce", this.$tiny);
    // this.$tiny.init({
    //   selector: "#textarea",
    //   toolbar: false,
    //   menubar: "my1",
    //   menu: {
    //     my1: { title: "我的菜单", items: "copy paste formats" },
    //   },
    // });

    // document.getElementById("startButton").onclick = function () {
    //   introJs()
    //     .setOption("doneLabel", "Next page")
    //     .start()
    //     .oncomplete(function () {
    //       this.$router.push("/guide/next");
    //     });
    // };
    // console.log("introJs", introJs);
  },
  methods: {
    guide(e) {
      document.getElementById("video1").playbackRate = 2;
      console.log(e);
    },
    // guide() {
    //   introJs()
    //     .setOptions({
    //       prevLabel: "上一步",
    //       nextLabel: "下一步",
    //       skipLabel: "跳过",
    //       doneLabel: "结束",
    //     })
    //     .oncomplete(function (val) {
    //       console.log("val", val);
    //       //点击跳过按钮后执行的事件
    //     })
    //     .onexit(function (val1) {
    //       console.log("val1", val1);
    //       //点击结束按钮后， 执行的事件
    //     })
    //     .start();
    // },
  },
};
</script>

<style>
</style>