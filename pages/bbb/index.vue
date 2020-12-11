<template>
  <div>
    <h1 @click="onClick">{{ obj.a || "bbb" }}</h1>
    <h1 @click="onClick">{{ arr || "bbb" }}</h1>
    <h1 @click="onClick">{{ str || "bbb" }}</h1>
    <zz></zz>
    <NuxtLink to="/aut">aut</NuxtLink>
  </div>
</template>

<script>
import zz from "./dd";
let that;
export default {
  components: {
    zz,
  },
  data() {
    that = this;
    return {
      obj: { a: "" },
      arr: [],
      str: this.getnum(2),
    };
  },
  mounted() {
    console.log("dd", that);
  },
  watch: {
    // "obj.a": {
    //   handler(val, old) {
    //     console.log("valddd", val, old);
    //   },
    //   immediate: true,
    // },
    // obj: {
    //   handler(val, old) {
    //     console.log("val", val, old);
    //   },
    //   deep: true,
    // },
    arr(val) {
      console.log("val", val);
    },
  },
  methods: {
    getnum(num) {
      return num * 2;
    },
    onClick() {
      this.obj.a++;
      this.arr.length > 0
        ? this.arr[0].push(this.arr[0][this.arr[0].length - 1] + 1)
        : (this.arr[0] = [0]);
    },
  },
  // transition: "bounce",
};
</script>

<style>
</style>