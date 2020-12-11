<template>
  <div @click="onclick">{{ route || "route" }}</div>
</template>

<script>
export default {
  data() {
    return {
      route: "",
    };
  },
  watch: {
    "$route.query": {
      handler(newVal, old) {
        this.route = newVal;
        console.log("new,old", newVal, old);
      },
      immediate: true,
    },
  },
  mounted() {
    console.log("this.$route.query6", this.$route.query);
  },
  methods: {
    onclick() {
      window.open('www.baidu.com',"_top");
    },
  },
};
</script>

<style>
</style>