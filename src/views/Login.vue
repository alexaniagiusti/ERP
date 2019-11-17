<template>
    <v-app id="">
      <VueLoad />
      <v-content>
        <v-container
        fluid
        fill-height
        >
        <v-layout
        align-center
        justify-center
        >
        <v-flex
        xs12
        sm8
        md4
        >
        <v-alert
        dense
        border="left"
        type="error"
        v-model="message"
        >
        E-mail ou Senha inválidos!
        </v-alert>
        <v-card outlined>
          <v-toolbar
          
          flat
          >
          <v-toolbar-title> <span class="font-weight-bold" style="font-size: 16pt">Entrar</span></v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn color="primary" @click="$router.push({name: 'register'})">Cadastre-se</v-btn>
          
        </v-toolbar>
        <v-card-text>
          <v-form>
            <v-text-field
            outlined
            label="E-mail"
            v-model="user.email"
            placeholder="nome@email.com"
            prepend-icon="person"
            type="text"
            autocomplete="new-email"
            ></v-text-field>
            
            <v-text-field
            outlined
            label="Senha"
            v-model="user.password"
            prepend-icon="lock"
            type="password"
            autocomplete="new-password"
            placeholder="******"
            ></v-text-field>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-btn color="success" @click="login">ENTRAR</v-btn>
          <v-spacer></v-spacer>
          <v-btn color="error" @click="$router.push({name: 'recoverPassword'})">Esqueci a senha</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
  </v-container>
  </v-content>
  </v-app>
  </template>
  
  <script>
    import VueLoad from '@/components/shared/VueLoad'
    export default {
      props: {
        source: String,
      },
      components: {
        VueLoad
      },
      data() {
        return {
          drawer: null,
          user: {
            email: "",
            password: ""
          },
          message: false
        }
        
      },
      methods:{
        login(){
          this.$store.commit('setVueLoad', true)
          this.$http.post(`${this.$urlApi}/v1/login`, this.user)
          .then(res => {
            if(res.data.status){
              let redirectTo = sessionStorage.redirectTo
              this.$store.commit("setUser", res.data.user);
              sessionStorage.setItem("user", JSON.stringify(res.data.user));
              if(redirectTo == undefined){
                this.$router.push({name: 'home'})
              }else{
                window.location.replace(`${redirectTo}`)
              }
            }else{
              this.message = true;
            }
            this.$store.commit('setVueLoad', false)
          })
        }
      },
      created(){
        let user = this.$store.getters.getUser;
        if(user){
          this.$router.push({ name: "home" });
        }
      }
    }
  </script>
  
  <style scoped>
    
    #inspire {
      background: linear-gradient(to right, #232526, #414345);
    }
    
  </style>