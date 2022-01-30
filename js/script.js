// Vue.component('my-hello', {
//     template: '<div>こんにちは、{{name}}</div>',
//     data: function() {
//         return {
//             name: 'Vue.js',
//         }
//     }
// });

// let MyHello = {
//     props: [
//         'yourName'
//     ],
//     template: `<div>こんにちは、{{yourName}}</div>!`,
//     // data: function() {
//     //     return {
//     //         name: 'Vue.js',
//     //     }
//     // }
// }

let MyCounter = {
    props: [
        'init',
        'step',
    ],
    template: `<div>現在地は{{ step }}
    <button @click="onclick">UP</button></div>`,
    data: function() {
        return {
            current: this.init,
        }
    },
    methods: {
        onclick: function() {
            this.$emit('plus', Number(this.step))
        }
    }
}

let MyHello = {
    props: {
        yourName: {
            type: String,
            required: true,
        }
    },
    template: `<div title="result" class="main">Hello Vue.js! Mr.{{yourName}}</div>`
}

new Vue({
    el: "#app",
    components: {
        'my-counter': MyCounter,
        'my-hello': MyHello
    },
    data: {
        current: 0
    },
    methods: {
        onplus(value) {
            this.current += value;
        }
    }
});