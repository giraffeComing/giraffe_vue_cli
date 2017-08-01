<template>
    <div class="container1" v-if="types==1">
        <slot></slot>
    </div>
    <div class="container2" v-else-if="types==2">
        <slot></slot>
    </div>
    <div class="container3" v-else="types==3">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: '',
        components: {},
        props:{
            types: Number
        },
        data () {
            return {}
        }
    }
</script>

<style scoped lang="scss" rel="stylesheet/scss">
    .container1{
        height: 100%;
        margin: 1rem 0 1.1rem 0;
    }
    .container2{
        height: 100%;
        margin: 1.1rem 0 1.1rem 0;
    }
    .container3{
        height: 100%;
        margin-bottom: 1rem;
    }

</style>
