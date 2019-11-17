<template>
    <v-dialog 
        v-model="showModal.show"
        max-width="290"
    >
    <v-card>
        <v-card-title>Erros:</v-card-title>
        
        <v-card-text>
           <ul>
               <li v-for="message in showModal.data">
                    <strong>{{message}}</strong>
               </li>
           </ul>
        </v-card-text>
        
        <v-card-actions>
            <v-spacer></v-spacer>
            
            <v-btn
            color="error"
            
            @click="close"
            >
            Fechar
        </v-btn>
        
</v-card-actions>
</v-card>
</v-dialog>
</template>


<script>
    export default {
        methods:{
            close(){
                this.$store.dispatch('closeModalRequestError', false)
            }
        },
        computed:{
            showModal(){
                return this.$store.state.modalRequestError
            }
        }
    }
    
</script>