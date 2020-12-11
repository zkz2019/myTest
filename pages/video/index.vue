<template>
  <div>
    <video
      id="video"
      class="video-js vjs-default-skin vjs-big-play-centered"
      controls
      preload="none"
    ></video>
  </div>
</template>

<script>
import Video from "video.js";
import "video.js/dist/video-js.css";
export default {
  data() {
    return {
      myPlayer: null
    };
  },
  mounted() {
    console.log("1", 1);
    this.myPlayer = Video(
      "video",
      {
        //确定播放器是否具有用户可以与之交互的控件。没有控件，启动视频播放的唯一方法是使用autoplay属性或通过Player API。
        controls: true,
        //自动播放属性,muted:静音播放
        muted: true,
        autoplay: "muted",
        // autoplay: true,
        //建议浏览器是否应在<video>加载元素后立即开始下载视频数据。
        preload: "auto",
        //设置视频播放器的显示宽度（以像素为单位）
        width: "320px",
        //设置视频播放器的显示高度（以像素为单位）
        height: "152px",
        // url
        poster: "a.jpeg", // 封面图片
        sources: [
          {
            src: "/a.mp4"
          }
        ],
        playbackRates: [0.5, 1, 1.5, 2] //倍速播放
      },
      function onPlayerReady() {
        Video.log("Your player is ready!"); // 比如： 播放量+1请求

        this.on("ended", function() {
          Video.log("Awww...over so soon?!");
        });
      }
    );
  },
  beforeDestroy() {
    if (this.myPlayer) {
      this.myPlayer.dispose();
    }
  }
};
</script>

<style></style>
