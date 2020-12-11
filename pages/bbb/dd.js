export default {
    name: "zz",
    functional: true,
    render(h, context) {
        console.log(context);
        return h("div", {}, ("span", {}, "zzzzzz"))
    }
}