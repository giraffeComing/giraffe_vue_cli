<template>
    <div class="page-view">
        <v-header :opts="headerData"></v-header>
        <v-container :types="1">
            404
        </v-container>
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
        data () {
            return {
                headerData:{
                    name:404,
                    tag:"问问",
//                    extra:"100000"
                },
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
