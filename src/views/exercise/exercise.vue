<template>
    <div class="page-view">
        <v-container :types="3">exercise</v-container>
        <v-footer></v-footer>
    </div>
</template>

<script>
    import VHeader from '../../components/layout/header/header.vue'
    import VFooter from '../../components/layout/footer/footer.vue'
    import VContainer from '../../components/layout/container/container.vue'
    export default {
        name: '',
        components: {
            VHeader,
            VFooter,
            VContainer
        },
        created(){
            this.strTest01();
            this.strTest02();
            this.strTest03();
            this.strTest04();
            this.strTest05();
        },
        data () {
            return {
                name: 'paddy'
            }
        },
        methods:{
            strTest01:function () {
                console.log(`string text line 1
            string text line 2`);
            },
            strTest02:function () {
                let name = "Bob", time = "today";
                console.log(`Hello ${name}, how are you ${time}?`)
            },
            strTest03:function () {
                console.log(`Hello ${this.name}, how are you?`)
            },
            fn:function () {
                return "函数测试"
            },
            strTest04: function () {
//                this.fn记得要加括号执行
                console.log(`Hello ${this.fn()} fn`)
            },
            strTest05: function () {
                console.log`测试`
            }
        }
    }
</script>

<style scoped lang="scss" rel="stylesheet/scss">
    .page-view{
        height: 100%;
        display: flex;
        flex-direction: column;
    }
</style>
