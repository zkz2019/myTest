<template>
  <div>
    <div class="yellow">
      <slot name="middle" :kz="kz" :zk="zk">middle</slot>
    </div>
    <div class="green"><slot :kz="kz">azcxbgd</slot></div>
    <div class="blue"><slot name="bottom">bottom</slot></div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      kz: "kzkzkz",
      zk: "zkzkzk",
    };
  },
};
</script>

<style>
.yellow {
  color: yellowgreen;
}
.green {
  color: green;
}
.blue {
  color: blue;
}
</style>