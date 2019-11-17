<template>
        <loading :active.sync="this.$store.state.vueLoad" 
        :can-cancel="true" 
        :on-cancel="onCancel"
        :is-full-page="fullPage"></loading>
</template>
 
<script>
    // Import component
    import Loading from 'vue-loading-overlay';
    // Import stylesheet
    import 'vue-loading-overlay/dist/vue-loading.css';
    
    export default {
        data() {
            return {
                fullPage: true
            }
        },
        components: {
            Loading
        },
        methods: {
            doAjax() {
                this.isLoading = true;
                // simulate AJAX
                setTimeout(() => {
                  this.isLoading = false
                },10000)
            },
            onCancel() {
              console.log('User cancelled the loader.')
            }
        },
        mounted() {
            // console.log(this.$store.state.vueLoad)
        },
    }
</script> 