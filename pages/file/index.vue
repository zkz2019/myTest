<template>
  <div>
    <input id="file" type="file" />
  </div>
</template>

<script>
import { read } from "./index";
export default {
  data() {
    return {
      myWorker: null
    };
  },
  async mounted() {
    let dom = document.getElementById("file");
    this.myWorker = new Worker("./a.js");
    dom.addEventListener("change", this.a);
  },
  methods: {
    async a({ target }) {
      let files = null;
      files = Array.prototype.slice.call(target.files);
      let f = Array.from(target.files);
      const f2 = await read(files);
      console.log("f2", f2);
      this.myWorker.onmessage = async e => {
        console.log("e", e);
      };
      setTimeout(() => {
        this.myWorker.postMessage(f2);
      }, 1000);
      console.log("this.myWorker", this.myWorker);
    }
  }
};
</script>

<style></style>
