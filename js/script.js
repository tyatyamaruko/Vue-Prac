let app = new Vue({
    el: "#app",
    data: {
        message: 'みなさん、こんにちは',
        url: 'https://wings.msn.to/',
        flag: true,
        email: 'Y-Suzuki@example.com',
        current: new Date().toLocaleString(),
        author: {
            name: 'Yamada',
        },
        name: '',
        upperName: '',
    },
    created: function() {
        let that = this;
        this.timer = setInterval(function() {
            that.current = new Date();
        }, 1000);
        this.delayFunc = _.debounce(this.getUpper, 2000);
    },
    watch: {
        
    },
    mounted: function() {
        Vue.set(this.author, 'company', 'WINGSプロジェクト');
        let that = this;
        this.$nextTick().then(function() {
            console.log(that.$el.textContext.includes(this.author.company));
        });
        
    },
    beforeDestroy: function() {
        clearInterval(this.timer);
    },
    computed: {
        // localEmail: function() {
        //     return this.email.split('@')[0].toLowerCase();
        // },
        randomc: function() {
            return Math.random();
        },
        upperName: function() {
            return this.name.toUpperCase();
        }
    },
    methods: {
        localEmail: function() {
            return this.email.split('@')[0].toLowerCase();
        },
        randomm: function() {
            return Math.random();
        },
        onclick: function() {
            this.current = new Date().toLocaleString();
        },
        getUpper: function() {
            this.upperName = this.name.toUpperCase();
        }
    }
});