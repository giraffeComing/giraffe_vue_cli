<template>
    <div>
        <div>
            APIDemo
        </div>
        <div>
            {{fund}}
        </div>
        <div>
            {{user}}
        </div>
    </div>
</template>

<script>
//    导入api所在模块
    import {FUND} from '../api/fund/fund';
    import {USER} from '../api/user/user';
    export default {
        name: '',
        components: {},
        data () {
            return {}
        },
        computed:{
//            api模块方法执行之后返回的是一个在该模块下的api的集合
            fund:function () {
                return FUND().fundList
            },
            user:function () {
                return USER()
            }
        }
    }
</script>

<style scoped lang="scss" rel="stylesheet/scss">

</style>
