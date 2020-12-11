<template>
  <div class="container">
    <!-- <kz></kz> -->
    <bjs
      >{{ row }}
      <template #middle="{ kz }"
        ><div>{{ kz + "ioioioooioi" }}</div></template
      ></bjs
    >
    <div class="box">
      box"
      <div class="box_box">
        box_box
        <div class="box_box-sub">box_box-sub</div>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.box {
  color: yellow;
  @at-root #{&}_box {
    color: red;
    @at-root #{&}-sub {
      color: blue;
    }
  }
}
</style>
<script>
export default {
  transition: "bounce",
  data() {
    return {
      a: "ddddd",
      row: "rows",
    };
  },
  mounted() {
    this.$nextTick(() => {
      //   this.$nuxt.$loading.start();
      //   setTimeout(() => this.$nuxt.$loading.finish(), 5000);
    });
  },

  methods: {
    onClick() {
      this.a = "bbbb";
    },
  },
  filters: {
    capitalize: function (value) {
      if (!value) return "";
      value = value.toString();
      return value.charAt(0).toUpperCase() + value.slice(1);
    },
  },
};
</script>

<style>
.container {
  text-align: center;
  padding-top: 200px;
  font-size: 20px;
  transition: all 0.5s cubic-bezier(0.55, 0, 0.1, 1);
}
.page-enter-active,
.page-leave-active {
  transition: opacity 0.5s;
}
.page-enter,
.page-leave-active {
  opacity: 0;
}

.bounce-enter-active {
  animation: bounce-in 2s;
}
.bounce-leave-active {
  animation: bounce-out 1s;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes bounce-out {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(0);
  }
}
</style>