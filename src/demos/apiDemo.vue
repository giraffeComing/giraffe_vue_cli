<template>
    <div class="api-demo">
        <div>
            <p class="title">基金模块，基金列表接口：FUND().fundList</p>
            <p class="code">输出结果：<br>{{fund}}</p>
        </div>
        <div>
            <p class="title">用户模块：USER()</p>
            <p class="code">输出结果：<br>{{user}}</p>
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
    .api-demo{
        padding-top: .6rem;
    }
    .title{
        margin: .2rem 0;
    }
    .code{
        padding: .2rem;
        background: #ddd;
    }
</style>
