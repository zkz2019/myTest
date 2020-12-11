import kz from "./kz.vue"

export default {
    name: "bjs",
    props: {
        dj: String
    }
    ,
    render(h) {
        console.log('this.$slots', this.$slots);
        console.log('this.$scopedSlots', this.$scopedSlots);
        return h(
            kz, {
            scopedSlots: this.$scopedSlots
        }, "ddd"
        )
    }
}